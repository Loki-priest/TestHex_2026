using System;
using DG.Tweening;
using UnityEngine;

[DisallowMultipleComponent]
/// <summary>
/// Обрабатывает перетаскивание стопки игроком и установку стопки на допустимую клетку пола.
/// </summary>
public class HexDragger : MonoBehaviour
{
    private const int MousePointerId = -1;

    public static event Action<HexStack> DragStarted;
    public static event Action<HexStack, bool> DragFinished;

    [Header("Input")]
    [SerializeField] private HexGameContext gameContext;
    [SerializeField] private Camera inputCamera;
    [SerializeField] private float pickMaxDistance = 100f;
    [SerializeField] private LayerMask interactionMask = ~0;

    [Header("Floor Check")]
    [SerializeField] private float floorCheckStartHeight = 2f;
    [SerializeField] private float floorCheckDistance = 8f;
    [SerializeField, Min(1)] private int floorRaycastBufferSize = 16;

    [Header("Tween")]
    [SerializeField] private float liftHeight = 0.45f;
    [SerializeField] private float liftDuration = 0.12f;
    [SerializeField] private Ease liftEase = Ease.OutQuad;
    [SerializeField] private float attachMoveDuration = 0.14f;
    [SerializeField] private Ease attachMoveEase = Ease.OutQuad;
    [SerializeField] private float dropDuration = 0.12f;
    [SerializeField] private Ease dropEase = Ease.InOutQuad;

    private static HexDragger instance;
    private static bool globalDragEnabled = true;

    private Tween activeTween;
    private bool isDragging;
    private bool isSettling;
    private int activePointerId = int.MinValue;
    private float dragLiftY;
    private Vector3 dragStartPosition;
    private Vector3 dragOffset;
    private Plane dragPlane;
    private bool dragEndedWithSuccessfulDrop;
    private HexFloor highlightedFloor;
    private RaycastHit[] floorRaycastBuffer;
    private HexManager cachedManager;

    private HexStack activeStack;
    private Transform activeStackTransform;

    public static void SetGlobalDragEnabled(bool enabled)
    {
        globalDragEnabled = enabled;
        if (enabled)
        {
            return;
        }

        if (instance != null)
        {
            instance.CancelActiveDrag();
        }
    }

    public static bool IsGlobalDragEnabled => globalDragEnabled;

    public void SetGameContext(HexGameContext context)
    {
        gameContext = context;
        cachedManager = null;
    }

    private HexManager Manager
    {
        get
        {
            if (cachedManager != null)
            {
                return cachedManager;
            }

            if (gameContext == null)
            {
                gameContext = FindObjectOfType<HexGameContext>();
            }

            cachedManager = gameContext != null ? gameContext.Manager : null;
            return cachedManager;
        }
    }

    private void Awake()
    {
        instance = this;

        if (gameContext == null)
        {
            gameContext = FindObjectOfType<HexGameContext>();
        }
        cachedManager = gameContext != null ? gameContext.Manager : null;

        if (inputCamera == null)
        {
            inputCamera = Camera.main;
        }

        EnsureFloorRaycastBuffer();
    }

    private void OnEnable()
    {
        instance = this;
    }

    private void Update()
    {
        if (!globalDragEnabled)
        {
            if (isDragging || isSettling)
            {
                CancelActiveDrag();
            }

            return;
        }

        if (isSettling)
        {
            return;
        }

        if (!isDragging)
        {
            TryBeginDrag();
            return;
        }

        if (!IsActiveStackValid())
        {
            CancelActiveDrag();
            return;
        }

        if (TryGetPointerPosition(activePointerId, out Vector2 pointerPosition))
        {
            UpdateDrag(pointerPosition);
        }

        if (WasPointerReleased(activePointerId))
        {
            EndDrag();
        }
    }

    private void OnDisable()
    {
        KillActiveTween(false);
        CancelActiveDragInternal(false);
        if (instance == this)
        {
            instance = null;
        }
    }

    private void TryBeginDrag()
    {
        if (inputCamera == null)
        {
            return;
        }

        HexManager manager = Manager;
        if (manager != null && manager.IsTransferInProgress)
        {
            return;
        }

        if (!TryGetPointerDown(out int pointerId, out Vector2 pointerPosition))
        {
            return;
        }

        Ray ray = inputCamera.ScreenPointToRay(pointerPosition);
        if (!Physics.Raycast(ray, out RaycastHit hit, pickMaxDistance, interactionMask, QueryTriggerInteraction.Ignore))
        {
            return;
        }

        HexStack hitStack = hit.collider.GetComponentInParent<HexStack>();
        if (hitStack == null || !hitStack.gameObject.activeInHierarchy || hitStack.TileCount == 0)
        {
            return;
        }

        if (hitStack.CurrentFloor != null)
        {
            return;
        }

        StartDrag(hitStack, pointerId, hit.point);
    }

    private void StartDrag(HexStack stackToDrag, int pointerId, Vector3 hitPoint)
    {
        if (stackToDrag == null)
        {
            return;
        }

        KillActiveTween(false);

        activeStack = stackToDrag;
        activeStackTransform = stackToDrag.transform;
        if (activeStackTransform == null)
        {
            CancelActiveDragInternal(false);
            return;
        }

        if (gameContext == null && activeStack.GameContext != null)
        {
            gameContext = activeStack.GameContext;
            cachedManager = gameContext.Manager;
        }

        isDragging = true;
        isSettling = false;
        activePointerId = pointerId;
        dragStartPosition = activeStackTransform.position;
        dragLiftY = dragStartPosition.y + liftHeight;
        dragPlane = new Plane(Vector3.up, dragStartPosition);

        dragOffset = dragStartPosition - hitPoint;
        dragOffset.y = 0f;
        dragEndedWithSuccessfulDrop = false;

        DragStarted?.Invoke(activeStack);
        UpdateDropHighlight();

        activeTween = activeStackTransform.DOMoveY(dragLiftY, liftDuration).SetEase(liftEase);
    }

    private void UpdateDrag(Vector2 pointerPosition)
    {
        if (activeStackTransform == null || inputCamera == null)
        {
            return;
        }

        Ray ray = inputCamera.ScreenPointToRay(pointerPosition);
        if (!dragPlane.Raycast(ray, out float enter))
        {
            return;
        }

        Vector3 pointOnPlane = ray.GetPoint(enter) + dragOffset;
        Vector3 current = activeStackTransform.position;
        activeStackTransform.position = new Vector3(pointOnPlane.x, current.y, pointOnPlane.z);
        UpdateDropHighlight();
    }

    private void EndDrag()
    {
        if (!IsActiveStackValid())
        {
            CancelActiveDragInternal(false);
            return;
        }

        isDragging = false;

        HexFloor floor = highlightedFloor;
        bool hasFloorUnderStack = floor != null;

        if (!hasFloorUnderStack)
        {
            hasFloorUnderStack = TryGetFloorUnderStack(out floor);
        }

        HexManager manager = Manager;
        if (hasFloorUnderStack && manager != null && !manager.CanPlaceStackOnFloor(activeStack, floor))
        {
            hasFloorUnderStack = false;
            floor = null;
        }

        SetHighlightedFloor(null);

        Vector3 targetPosition = hasFloorUnderStack
            ? floor.GetStackPlacementPosition(dragStartPosition.y)
            : dragStartPosition;

        dragEndedWithSuccessfulDrop = hasFloorUnderStack;
        StartSettleTween(targetPosition, hasFloorUnderStack ? floor : null);
    }

    private void StartSettleTween(Vector3 targetPosition, HexFloor targetFloor)
    {
        if (activeStackTransform == null)
        {
            CancelActiveDragInternal(false);
            return;
        }

        isSettling = true;
        KillActiveTween(false);

        float moveY = Mathf.Max(activeStackTransform.position.y, dragLiftY);
        Vector3 movePoint = new Vector3(targetPosition.x, moveY, targetPosition.z);

        Sequence sequence = DOTween.Sequence();
        sequence.Append(activeStackTransform.DOMove(movePoint, attachMoveDuration).SetEase(attachMoveEase));
        sequence.Append(activeStackTransform.DOMoveY(targetPosition.y, dropDuration).SetEase(dropEase));
        sequence.OnComplete(() =>
        {
            if (activeStackTransform != null)
            {
                activeStackTransform.position = targetPosition;
            }

            activeTween = null;

            HexManager manager = Manager;
            if (targetFloor != null && manager != null && activeStack != null)
            {
                manager.HandleStackPlaced(activeStack, targetFloor, () =>
                {
                    if (this == null)
                    {
                        return;
                    }

                    FinalizeSettle();
                });
                return;
            }

            FinalizeSettle();
        });
        sequence.OnKill(() =>
        {
            activeTween = null;
            if (isSettling)
            {
                isSettling = false;
                SetHighlightedFloor(null);
                ReleaseDragState();
            }
        });

        activeTween = sequence;
    }

    private void FinalizeSettle()
    {
        HexStack finishedStack = activeStack;
        bool wasSuccessfulDrop = dragEndedWithSuccessfulDrop;

        isSettling = false;
        ReleaseDragState();

        DragFinished?.Invoke(finishedStack, wasSuccessfulDrop);
    }

    private bool TryGetFloorUnderStack(out HexFloor floor)
    {
        floor = null;

        if (!IsActiveStackValid())
        {
            return false;
        }

        Vector3 origin = activeStackTransform.position + Vector3.up * floorCheckStartHeight;
        float rayDistance = floorCheckStartHeight + floorCheckDistance;
        EnsureFloorRaycastBuffer();
        int hitCount = Physics.RaycastNonAlloc(
            origin,
            Vector3.down,
            floorRaycastBuffer,
            rayDistance,
            interactionMask,
            QueryTriggerInteraction.Ignore
        );

        if (hitCount >= floorRaycastBuffer.Length)
        {
            RaycastHit[] allHits = Physics.RaycastAll(
                origin,
                Vector3.down,
                rayDistance,
                interactionMask,
                QueryTriggerInteraction.Ignore
            );
            floor = GetNearestFloorFromHits(allHits, allHits.Length);
            return floor != null;
        }

        floor = GetNearestFloorFromHits(floorRaycastBuffer, hitCount);
        return floor != null;
    }

    private HexFloor GetNearestFloorFromHits(RaycastHit[] hits, int hitCount)
    {
        if (hits == null || hitCount <= 0)
        {
            return null;
        }

        float nearestDistance = float.MaxValue;
        HexFloor nearestFloor = null;

        for (int i = 0; i < hitCount; i++)
        {
            RaycastHit hit = hits[i];
            if (hit.collider == null)
            {
                continue;
            }

            HexStack hitStack = hit.collider.GetComponentInParent<HexStack>();
            if (hitStack == activeStack)
            {
                continue;
            }

            HexFloor candidateFloor = hit.collider.GetComponentInParent<HexFloor>();
            if (candidateFloor == null)
            {
                continue;
            }

            if (hit.distance >= nearestDistance)
            {
                continue;
            }

            nearestDistance = hit.distance;
            nearestFloor = candidateFloor;
        }

        return nearestFloor;
    }

    private void EnsureFloorRaycastBuffer()
    {
        int size = Mathf.Max(1, floorRaycastBufferSize);
        if (floorRaycastBuffer != null && floorRaycastBuffer.Length == size)
        {
            return;
        }

        floorRaycastBuffer = new RaycastHit[size];
    }

    private void KillActiveTween(bool complete)
    {
        if (activeTween == null || !activeTween.IsActive())
        {
            activeTween = null;
            return;
        }

        activeTween.Kill(complete);
        activeTween = null;
    }

    private void ReleaseDragState()
    {
        activePointerId = int.MinValue;
        isDragging = false;
        dragEndedWithSuccessfulDrop = false;
        SetHighlightedFloor(null);

        activeStack = null;
        activeStackTransform = null;
    }

    private void CancelActiveDrag()
    {
        CancelActiveDragInternal(false);
    }

    private void CancelActiveDragInternal(bool invokeFinishedEvent)
    {
        HexStack cancelledStack = activeStack;

        KillActiveTween(false);
        if (activeStackTransform != null)
        {
            activeStackTransform.position = dragStartPosition;
        }

        isSettling = false;
        ReleaseDragState();

        if (invokeFinishedEvent && cancelledStack != null)
        {
            DragFinished?.Invoke(cancelledStack, false);
        }
    }

    private void UpdateDropHighlight()
    {
        if (!isDragging || !IsActiveStackValid())
        {
            SetHighlightedFloor(null);
            return;
        }

        if (!TryGetFloorUnderStack(out HexFloor floor))
        {
            SetHighlightedFloor(null);
            return;
        }

        HexManager manager = Manager;
        if (manager != null && !manager.CanPlaceStackOnFloor(activeStack, floor))
        {
            SetHighlightedFloor(null);
            return;
        }

        SetHighlightedFloor(floor);
    }

    private void SetHighlightedFloor(HexFloor floor)
    {
        if (highlightedFloor == floor)
        {
            return;
        }

        if (highlightedFloor != null)
        {
            highlightedFloor.SetDropHighlight(false);
        }

        highlightedFloor = floor;
        if (highlightedFloor != null)
        {
            highlightedFloor.SetDropHighlight(true);
        }
    }

    private bool TryGetPointerDown(out int pointerId, out Vector2 pointerPosition)
    {
        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            if (touch.phase != TouchPhase.Began)
            {
                continue;
            }

            pointerId = touch.fingerId;
            pointerPosition = touch.position;
            return true;
        }

        if (Input.GetMouseButtonDown(0))
        {
            pointerId = MousePointerId;
            pointerPosition = Input.mousePosition;
            return true;
        }

        pointerId = int.MinValue;
        pointerPosition = default;
        return false;
    }

    private bool TryGetPointerPosition(int pointerId, out Vector2 pointerPosition)
    {
        if (pointerId == MousePointerId)
        {
            pointerPosition = Input.mousePosition;
            return true;
        }

        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            if (touch.fingerId != pointerId)
            {
                continue;
            }

            pointerPosition = touch.position;
            return true;
        }

        pointerPosition = default;
        return false;
    }

    private bool WasPointerReleased(int pointerId)
    {
        if (pointerId == MousePointerId)
        {
            return Input.GetMouseButtonUp(0);
        }

        bool touchStillPresent = false;

        for (int i = 0; i < Input.touchCount; i++)
        {
            Touch touch = Input.GetTouch(i);
            if (touch.fingerId != pointerId)
            {
                continue;
            }

            touchStillPresent = true;
            return touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled;
        }

        return !touchStillPresent;
    }

    private bool IsActiveStackValid()
    {
        return activeStack != null && activeStackTransform != null && activeStack.gameObject.activeInHierarchy;
    }
}

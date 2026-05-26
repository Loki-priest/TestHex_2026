using System;
using DG.Tweening;
using UnityEngine;

[DisallowMultipleComponent]
[RequireComponent(typeof(HexStack))]
public class HexDragger : MonoBehaviour
{
    private const int MousePointerId = -1;

    public static event Action<HexStack> DragStarted;
    public static event Action<HexStack, bool> DragFinished;

    [Header("Input")]
    private HexGameContext gameContext;
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

    [Header("Behaviour")]
    [SerializeField] private bool destroyOnSuccessfulDrop;

    private static HexDragger activeDraggedDragger;

    private HexStack stack;
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
    private HexManager Manager => gameContext != null ? gameContext.Manager : null;

    private void Awake()
    {
        stack = GetComponent<HexStack>();
        if (gameContext == null && stack != null)
        {
            gameContext = stack.GameContext;
        }

        if (inputCamera == null)
        {
            inputCamera = Camera.main;
        }

        EnsureFloorRaycastBuffer();
    }

    public void SetGameContext(HexGameContext context)
    {
        gameContext = context;
    }

    private void Update()
    {
        if (isSettling)
        {
            return;
        }

        if (!isDragging)
        {
            TryBeginDrag();
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
        ReleaseDragState();
    }

    private void TryBeginDrag()
    {
        if (activeDraggedDragger != null || inputCamera == null)
        {
            return;
        }

        if (Manager != null && Manager.IsTransferInProgress)
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
        if (hitStack != stack)
        {
            return;
        }

        StartDrag(pointerId, hit.point);
    }

    private void StartDrag(int pointerId, Vector3 hitPoint)
    {
        KillActiveTween(false);

        isDragging = true;
        activeDraggedDragger = this;
        activePointerId = pointerId;
        dragStartPosition = transform.position;
        dragLiftY = dragStartPosition.y + liftHeight;
        dragPlane = new Plane(Vector3.up, dragStartPosition);

        dragOffset = dragStartPosition - hitPoint;
        dragOffset.y = 0f;
        dragEndedWithSuccessfulDrop = false;

        DragStarted?.Invoke(stack);
        UpdateDropHighlight();

        activeTween = transform.DOMoveY(dragLiftY, liftDuration).SetEase(liftEase);
    }

    private void UpdateDrag([Bridge.Ref] Vector2 pointerPosition)
    {
        Ray ray = inputCamera.ScreenPointToRay(pointerPosition);
        if (!dragPlane.Raycast(ray, out float enter))
        {
            return;
        }

        Vector3 pointOnPlane = ray.GetPoint(enter) + dragOffset;
        Vector3 current = transform.position;
        transform.position = new Vector3(pointOnPlane.x, current.y, pointOnPlane.z);
        UpdateDropHighlight();
    }

    private void EndDrag()
    {
        isDragging = false;

        HexFloor floor = highlightedFloor;
        bool hasFloorUnderStack = floor != null;

        if (!hasFloorUnderStack)
        {
            hasFloorUnderStack = TryGetFloorUnderStack(out floor);
        }

        if (hasFloorUnderStack && Manager != null && !Manager.CanPlaceStackOnFloor(stack, floor))
        {
            hasFloorUnderStack = false;
            floor = null;
        }

        SetHighlightedFloor(null);

        Vector3 targetPosition = hasFloorUnderStack
            ? floor.GetStackPlacementPosition(dragStartPosition.y)
            : dragStartPosition;

        dragEndedWithSuccessfulDrop = hasFloorUnderStack;
        bool destroyAfterSettle = hasFloorUnderStack && destroyOnSuccessfulDrop;
        StartSettleTween(targetPosition, hasFloorUnderStack ? floor : null, destroyAfterSettle);
    }

    private void StartSettleTween([Bridge.Ref] Vector3 targetPosition, HexFloor targetFloor, bool destroyAfterSettle)
    {
        isSettling = true;
        KillActiveTween(false);

        float moveY = Mathf.Max(transform.position.y, dragLiftY);
        Vector3 movePoint = new Vector3(targetPosition.x, moveY, targetPosition.z);

        Sequence sequence = DOTween.Sequence();
        sequence.Append(transform.DOMove(movePoint, attachMoveDuration).SetEase(attachMoveEase));
        sequence.Append(transform.DOMoveY(targetPosition.y, dropDuration).SetEase(dropEase));
        sequence.OnComplete(() =>
        {
            transform.position = targetPosition;
            activeTween = null;

            if (targetFloor != null && Manager != null)
            {
                Manager.HandleStackPlaced(stack, targetFloor, () =>
                {
                    if (this == null)
                    {
                        return;
                    }

                    FinalizeSettle(destroyAfterSettle);
                });
                return;
            }

            FinalizeSettle(destroyAfterSettle);
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

    private void FinalizeSettle(bool destroyAfterSettle)
    {
        isSettling = false;
        DragFinished?.Invoke(stack, dragEndedWithSuccessfulDrop);
        ReleaseDragState();

        if (destroyAfterSettle)
        {
            Destroy(this);
        }
    }

    private bool TryGetFloorUnderStack(out HexFloor floor)
    {
        floor = null;

        Vector3 origin = transform.position + Vector3.up * floorCheckStartHeight;
        EnsureFloorRaycastBuffer();
        int hitCount = Physics.RaycastNonAlloc(
            origin,
            Vector3.down,
            floorRaycastBuffer,
            floorCheckStartHeight + floorCheckDistance,
            interactionMask,
            QueryTriggerInteraction.Ignore
        );

        float nearestDistance = float.MaxValue;
        HexFloor nearestFloor = null;

        for (int i = 0; i < hitCount; i++)
        {
            RaycastHit hit = floorRaycastBuffer[i];
            if (hit.collider == null)
            {
                continue;
            }

            HexStack hitStack = hit.collider.GetComponentInParent<HexStack>();
            if (hitStack == stack)
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

        floor = nearestFloor;
        return floor != null;
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
        SetHighlightedFloor(null);

        if (activeDraggedDragger == this)
        {
            activeDraggedDragger = null;
        }
    }

    private void UpdateDropHighlight()
    {
        if (!isDragging)
        {
            SetHighlightedFloor(null);
            return;
        }

        if (!TryGetFloorUnderStack(out HexFloor floor))
        {
            SetHighlightedFloor(null);
            return;
        }

        if (Manager != null && !Manager.CanPlaceStackOnFloor(stack, floor))
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
        pointerPosition = default(UnityEngine.Vector2);
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

        pointerPosition = default(UnityEngine.Vector2);
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
}

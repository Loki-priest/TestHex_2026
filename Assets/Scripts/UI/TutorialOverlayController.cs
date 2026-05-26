using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class TutorialOverlayController : MonoBehaviour
{
    [Header("Bindings")]
    [SerializeField] private GameObject tutorialRoot;
    [SerializeField] private RectTransform handTransform;
    [SerializeField] private RectTransform canvasRoot;
    [SerializeField] private Camera uiCamera;
    [SerializeField] private Camera worldCamera;
    [SerializeField] private HexGameContext gameContext;
    [SerializeField] private RectTransform fromAnchor;
    [SerializeField] private RectTransform toAnchor;

    [Header("Behaviour")]
    [SerializeField] private bool startOnEnable = false;
    [SerializeField] private float restartDelay = 2f;
    [SerializeField] private bool useDynamicWorldTargets = true;
    [SerializeField] private Vector2 handScreenOffset = Vector2.zero;
    [SerializeField] private float worldTargetHeightOffset = 0.2f;

    [Header("Animation")]
    [SerializeField] private float handMoveDuration = 0.8f;
    [SerializeField] private float handPauseDuration = 0.15f;
    [SerializeField] private Ease handMoveEase = Ease.InOutSine;

    private bool isCompleted;
    private bool isPermanentlyDisabled;
    private Coroutine restartRoutine;
    private Tween handTween;
    private readonly List<HexStack> tutorialStacksBuffer = new();
    private readonly List<HexFloor> tutorialFloorsBuffer = new();

    private void OnEnable()
    {
        HexDragger.DragStarted += HandleDragStarted;
        HexDragger.DragFinished += HandleDragFinished;

        if (startOnEnable && !isCompleted)
        {
            StartTutorial();
        }
        else
        {
            SetTutorialVisible(false);
        }
    }

    private void OnDisable()
    {
        HexDragger.DragStarted -= HandleDragStarted;
        HexDragger.DragFinished -= HandleDragFinished;
        StopRestartRoutine();
        KillHandTween();
    }

    public void StartTutorial()
    {
        if (isCompleted || isPermanentlyDisabled)
        {
            return;
        }

        StopRestartRoutine();
        SetTutorialVisible(false);
        PlayHandLoop();
    }

    public void StopTutorial()
    {
        StopRestartRoutine();
        SetTutorialVisible(false);
        KillHandTween();
    }

    public void ResetTutorialState()
    {
        if (isPermanentlyDisabled)
        {
            return;
        }

        isCompleted = false;
        if (startOnEnable)
        {
            StartTutorial();
        }
    }

    public void DisableTutorialPermanently()
    {
        isPermanentlyDisabled = true;
        isCompleted = true;
        StopTutorial();
    }

    private void HandleDragStarted(HexStack draggedStack)
    {
        if (isCompleted)
        {
            return;
        }

        StopRestartRoutine();
        SetTutorialVisible(false);
        KillHandTween();
    }

    private void HandleDragFinished(HexStack draggedStack, bool successfulDrop)
    {
        if (isCompleted)
        {
            return;
        }

        if (successfulDrop)
        {
            isCompleted = true;
            StopTutorial();
            return;
        }

        StopRestartRoutine();
        restartRoutine = StartCoroutine(RestartTutorialAfterDelayRoutine());
    }

    private IEnumerator RestartTutorialAfterDelayRoutine()
    {
        yield return new WaitForSeconds(restartDelay);

        if (!isCompleted)
        {
            StartTutorial();
        }
    }

    private void PlayHandLoop()
    {
        KillHandTween();

        if (!TryResolveHandTargets(out Vector3 fromPosition, out Vector3 toPosition))
        {
            SetTutorialVisible(false);
            if (restartRoutine == null)
            {
                restartRoutine = StartCoroutine(RestartTutorialAfterDelayRoutine());
            }
            return;
        }

        handTransform.position = fromPosition;
        SetTutorialVisible(true);

        Sequence sequence = DOTween.Sequence();
        sequence.Append(handTransform.DOMove(toPosition, handMoveDuration).SetEase(handMoveEase));
        sequence.AppendInterval(handPauseDuration);
        sequence.AppendCallback(() =>
        {
            handTransform.position = fromPosition;
        });
        sequence.AppendInterval(handPauseDuration);
        sequence.OnComplete(() =>
        {
            handTween = null;
            if (!isCompleted && tutorialRoot != null && tutorialRoot.activeInHierarchy)
            {
                PlayHandLoop();
            }
        });
        handTween = sequence;
    }

    private bool TryResolveHandTargets(out Vector3 fromPosition, out Vector3 toPosition)
    {
        fromPosition = Vector3.zero;
        toPosition = Vector3.zero;

        if (handTransform == null)
        {
            return false;
        }

        if (useDynamicWorldTargets)
        {
            return TryResolveDynamicHandTargets(out fromPosition, out toPosition);
        }

        if (fromAnchor == null || toAnchor == null)
        {
            return false;
        }

        fromPosition = fromAnchor.position;
        toPosition = toAnchor.position;
        return true;
    }

    private bool TryResolveDynamicHandTargets(out Vector3 fromPosition, out Vector3 toPosition)
    {
        fromPosition = Vector3.zero;
        toPosition = Vector3.zero;

        if (!TryFindTutorialMovePair(out HexStack sourceStack, out HexFloor targetFloor))
        {
            return false;
        }

        Vector3 sourceWorldPoint = sourceStack.transform.position + Vector3.up * worldTargetHeightOffset;
        Vector3 targetWorldPoint = targetFloor.transform.position + Vector3.up * worldTargetHeightOffset;

        if (!TryConvertWorldToUiPosition(sourceWorldPoint, out fromPosition))
        {
            return false;
        }

        return TryConvertWorldToUiPosition(targetWorldPoint, out toPosition);
    }

    private bool TryFindTutorialMovePair(out HexStack sourceStack, out HexFloor targetFloor)
    {
        sourceStack = null;
        targetFloor = null;

        tutorialStacksBuffer.Clear();
        tutorialFloorsBuffer.Clear();

        HexStack[] allStacks = FindObjectsOfType<HexStack>();
        for (int i = 0; i < allStacks.Length; i++)
        {
            HexStack stack = allStacks[i];
            if (stack == null || !stack.gameObject.activeInHierarchy || stack.TileCount == 0)
            {
                continue;
            }

            if (stack.CurrentFloor != null)
            {
                continue;
            }

            tutorialStacksBuffer.Add(stack);
        }

        HexFloor[] allFloors = FindObjectsOfType<HexFloor>();
        for (int i = 0; i < allFloors.Length; i++)
        {
            HexFloor floor = allFloors[i];
            if (floor == null || floor.OccupiedStack != null)
            {
                continue;
            }

            tutorialFloorsBuffer.Add(floor);
        }

        if (tutorialStacksBuffer.Count == 0 || tutorialFloorsBuffer.Count == 0)
        {
            return false;
        }

        HexManager manager = ResolveManager();
        int bestScore = int.MinValue;
        float bestDistanceSqr = float.MaxValue;

        for (int stackIndex = 0; stackIndex < tutorialStacksBuffer.Count; stackIndex++)
        {
            HexStack stack = tutorialStacksBuffer[stackIndex];
            int stackTopColorId = stack.GetTopColorId();

            for (int floorIndex = 0; floorIndex < tutorialFloorsBuffer.Count; floorIndex++)
            {
                HexFloor floor = tutorialFloorsBuffer[floorIndex];
                if (floor == null)
                {
                    continue;
                }

                if (manager != null && !manager.CanPlaceStackOnFloor(stack, floor))
                {
                    continue;
                }

                bool canTriggerTransfer = stackTopColorId >= 0 && HasNeighborWithTopColor(floor, stackTopColorId);
                int score = canTriggerTransfer ? 2 : 1;
                float distanceSqr = (stack.transform.position - floor.transform.position).sqrMagnitude;

                bool isBetterCandidate = score > bestScore
                    || (score == bestScore && distanceSqr < bestDistanceSqr);
                if (!isBetterCandidate)
                {
                    continue;
                }

                bestScore = score;
                bestDistanceSqr = distanceSqr;
                sourceStack = stack;
                targetFloor = floor;
            }
        }

        return sourceStack != null && targetFloor != null;
    }

    private bool HasNeighborWithTopColor(HexFloor centerFloor, int colorId)
    {
        if (centerFloor == null || colorId < 0)
        {
            return false;
        }

        for (int side = 0; side < 6; side++)
        {
            HexFloor neighborFloor = centerFloor.GetNeighborBySide(side);
            if (IsMatchingNeighborStack(neighborFloor, colorId))
            {
                return true;
            }
        }

        IReadOnlyList<HexFloor> nearFloors = centerFloor.NearFloors;
        for (int i = 0; i < nearFloors.Count; i++)
        {
            if (IsMatchingNeighborStack(nearFloors[i], colorId))
            {
                return true;
            }
        }

        return false;
    }

    private static bool IsMatchingNeighborStack(HexFloor floor, int colorId)
    {
        if (floor == null)
        {
            return false;
        }

        HexStack neighborStack = floor.OccupiedStack;
        if (neighborStack == null || neighborStack.TileCount == 0)
        {
            return false;
        }

        return neighborStack.GetTopColorId() == colorId;
    }

    private HexManager ResolveManager()
    {
        if (gameContext == null)
        {
            gameContext = FindObjectOfType<HexGameContext>();
        }

        if (gameContext != null && gameContext.Manager != null)
        {
            return gameContext.Manager;
        }

        return FindObjectOfType<HexManager>();
    }

    private bool TryConvertWorldToUiPosition(Vector3 worldPosition, out Vector3 uiPosition)
    {
        uiPosition = Vector3.zero;

        Camera gameplayCamera = worldCamera != null ? worldCamera : Camera.main;
        if (gameplayCamera == null)
        {
            return false;
        }

        Vector3 screenPoint = gameplayCamera.WorldToScreenPoint(worldPosition);
        if (screenPoint.z < 0f)
        {
            return false;
        }

        Vector2 screenPoint2D = (Vector2)screenPoint + handScreenOffset;

        if (canvasRoot != null)
        {
            if (!RectTransformUtility.ScreenPointToWorldPointInRectangle(canvasRoot, screenPoint2D, uiCamera, out uiPosition))
            {
                return false;
            }

            return true;
        }

        uiPosition = new Vector3(screenPoint2D.x, screenPoint2D.y, handTransform.position.z);
        return true;
    }

    private void KillHandTween()
    {
        if (handTween == null)
        {
            return;
        }

        if (handTween.IsActive())
        {
            handTween.Kill(false);
        }

        handTween = null;
    }

    private void StopRestartRoutine()
    {
        if (restartRoutine == null)
        {
            return;
        }

        StopCoroutine(restartRoutine);
        restartRoutine = null;
    }

    private void SetTutorialVisible(bool visible)
    {
        if (tutorialRoot == null)
        {
            return;
        }

        if (tutorialRoot.activeSelf != visible)
        {
            tutorialRoot.SetActive(visible);
        }
    }
}

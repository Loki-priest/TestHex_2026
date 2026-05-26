using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Управляет туториальной рукой: выбором хода, анимацией подсказки и перезапуском при бездействии.
/// </summary>
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
    [SerializeField, Min(0.05f)] private float fallbackScanInterval = 0.35f;
    [SerializeField] private bool debugLogs = false;

    [Header("Animation")]
    [SerializeField] private float handMoveDuration = 0.8f;
    [SerializeField] private float handPauseDuration = 0.15f;
    [SerializeField] private Ease handMoveEase = Ease.InOutSine;

    private bool isCompleted;
    private bool isPermanentlyDisabled;
    private Coroutine restartRoutine;
    private Tween handTween;
    private HexManager cachedManager;
    private bool hasStarted;
    private readonly List<HexStack> tutorialStacksBuffer = new();
    private readonly List<HexFloor> candidateChainFloorsBuffer = new();
    private readonly List<HexFloor> candidateFreeFloorsBuffer = new();
    private float nextBootstrapStateLogAt;
    private float nextStackFallbackScanAt;
    private float nextFloorFallbackScanAt;
    private Camera cachedFallbackWorldCamera;

    private void OnEnable()
    {
        LogTutorial($"OnEnable. startOnEnable={startOnEnable}, hasStarted={hasStarted}, isCompleted={isCompleted}, isPermanentlyDisabled={isPermanentlyDisabled}");
        HexDragger.DragStarted += HandleDragStarted;
        HexDragger.DragFinished += HandleDragFinished;

        if (hasStarted && startOnEnable && !isCompleted)
        {
            StartTutorial();
        }
        else
        {
            SetTutorialVisible(false);
        }
    }

    private void Start()
    {
        LogTutorial("Start. Launch bootstrap coroutine.");
        StartCoroutine(StartTutorialAfterBootstrap());
    }

    private IEnumerator StartTutorialAfterBootstrap()
    {
        hasStarted = true;
        LogTutorial($"Bootstrap start. startOnEnable={startOnEnable}, isCompleted={isCompleted}");
        if (!startOnEnable || isCompleted)
        {
            LogTutorial("Bootstrap canceled: tutorial start disabled or already completed.");
            yield break;
        }

        nextBootstrapStateLogAt = Time.unscaledTime;
        while (!AreInitialGenerationSystemsReady(out string readinessDetails))
        {
            if (Time.unscaledTime >= nextBootstrapStateLogAt)
            {
                LogTutorial($"Waiting bootstrap dependencies. {readinessDetails}");
                nextBootstrapStateLogAt = Time.unscaledTime + 0.5f;
            }

            yield return null;
        }
        LogTutorial("Bootstrap dependencies ready.");

        if (isCompleted || isPermanentlyDisabled || !isActiveAndEnabled)
        {
            LogTutorial($"Bootstrap canceled after wait. isCompleted={isCompleted}, isPermanentlyDisabled={isPermanentlyDisabled}, isActiveAndEnabled={isActiveAndEnabled}");
            yield break;
        }

        LogTutorial("Bootstrap complete. StartTutorial() call.");
        StartTutorial();
    }

    private void OnDisable()
    {
        LogTutorial("OnDisable. Stop tutorial internals.");
        HexDragger.DragStarted -= HandleDragStarted;
        HexDragger.DragFinished -= HandleDragFinished;
        StopRestartRoutine();
        KillHandTween();
    }

    private void Update()
    {
        if (isCompleted || isPermanentlyDisabled)
        {
            return;
        }

        if (!HexDragger.IsGlobalDragEnabled)
        {
            LogTutorial("Global drag disabled. Tutorial will be permanently disabled.");
            DisableTutorialPermanently();
        }
    }

    public void StartTutorial()
    {
        LogTutorial($"StartTutorial() called. isCompleted={isCompleted}, isPermanentlyDisabled={isPermanentlyDisabled}, active={isActiveAndEnabled}");
        if (isCompleted || isPermanentlyDisabled)
        {
            LogTutorial("StartTutorial() skipped.");
            return;
        }

        StopRestartRoutine();
        SetTutorialVisible(false);
        PlayHandLoop();
    }

    public void StopTutorial()
    {
        LogTutorial("StopTutorial() called.");
        StopRestartRoutine();
        SetTutorialVisible(false);
        KillHandTween();
    }

    public void ResetTutorialState()
    {
        LogTutorial($"ResetTutorialState() called. isPermanentlyDisabled={isPermanentlyDisabled}");
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
        LogTutorial("DisableTutorialPermanently() called.");
        isPermanentlyDisabled = true;
        isCompleted = true;
        StopTutorial();
    }

    private void HandleDragStarted(HexStack draggedStack)
    {
        LogTutorial($"DragStarted. stack={GetStackName(draggedStack)}, isCompleted={isCompleted}");
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
        LogTutorial($"DragFinished. stack={GetStackName(draggedStack)}, successfulDrop={successfulDrop}, isCompleted={isCompleted}");
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
        LogTutorial($"Restart routine started. delay={restartDelay:0.00}");
        yield return new WaitForSeconds(restartDelay);

        restartRoutine = null;
        if (isCompleted || isPermanentlyDisabled)
        {
            LogTutorial($"Restart routine canceled after delay. isCompleted={isCompleted}, isPermanentlyDisabled={isPermanentlyDisabled}");
            yield break;
        }

        LogTutorial("Restart routine completed. Restarting tutorial.");
        StartTutorial();
    }

    private void PlayHandLoop()
    {
        KillHandTween();

        if (!TryResolveHandTargets(out Vector3 fromPosition, out Vector3 toPosition))
        {
            LogTutorial("PlayHandLoop: no valid hand targets.");
            SetTutorialVisible(false);
            if (restartRoutine == null)
            {
                LogTutorial("PlayHandLoop: schedule restart routine.");
                restartRoutine = StartCoroutine(RestartTutorialAfterDelayRoutine());
            }
            return;
        }
        LogTutorial($"PlayHandLoop: from={fromPosition}, to={toPosition}");

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
                LogTutorial("PlayHandLoop: sequence complete, replay loop.");
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
            LogTutorial("TryResolveHandTargets failed: handTransform is null.");
            return false;
        }

        if (useDynamicWorldTargets)
        {
            return TryResolveDynamicHandTargets(out fromPosition, out toPosition);
        }

        if (fromAnchor == null || toAnchor == null)
        {
            LogTutorial("TryResolveHandTargets failed: from/to anchors are null in static mode.");
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
            LogTutorial("TryResolveDynamicHandTargets failed: no valid stack-floor pair.");
            return false;
        }

        Vector3 sourceWorldPoint = sourceStack.transform.position + Vector3.up * worldTargetHeightOffset;
        Vector3 targetWorldPoint = targetFloor.transform.position + Vector3.up * worldTargetHeightOffset;

        if (!TryConvertWorldToUiPosition(sourceWorldPoint, out fromPosition))
        {
            LogTutorial($"TryResolveDynamicHandTargets failed: cannot convert source point {sourceWorldPoint} to UI.");
            return false;
        }

        if (!TryConvertWorldToUiPosition(targetWorldPoint, out toPosition))
        {
            LogTutorial($"TryResolveDynamicHandTargets failed: cannot convert target point {targetWorldPoint} to UI.");
            return false;
        }

        LogTutorial($"Dynamic targets resolved. sourceStack={GetStackName(sourceStack)}, targetFloor={GetFloorName(targetFloor)}");
        return true;
    }

    private bool TryFindTutorialMovePair(out HexStack sourceStack, out HexFloor targetFloor)
    {
        sourceStack = null;
        targetFloor = null;

        HexManager manager = ResolveManager();
        tutorialStacksBuffer.Clear();
        candidateChainFloorsBuffer.Clear();
        candidateFreeFloorsBuffer.Clear();

        foreach (HexStack stack in HexStack.ActiveStacks)
        {
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

        if (tutorialStacksBuffer.Count == 0 && Time.unscaledTime >= nextStackFallbackScanAt)
        {
            nextStackFallbackScanAt = Time.unscaledTime + Mathf.Max(0.05f, fallbackScanInterval);
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

            if (tutorialStacksBuffer.Count > 0)
            {
                LogTutorial($"TryFindTutorialMovePair: source stacks resolved via fallback scan. count={tutorialStacksBuffer.Count}");
            }
        }

        if (tutorialStacksBuffer.Count == 0)
        {
            LogTutorial("TryFindTutorialMovePair: no available player stacks outside floor.");
            return false;
        }

        sourceStack = SelectBottomMostPlayerStack(tutorialStacksBuffer);
        if (sourceStack == null)
        {
            LogTutorial("TryFindTutorialMovePair: failed to select bottom-most stack.");
            return false;
        }

        int sourceTopColorId = sourceStack.GetTopColorId();

        foreach (HexFloor floor in HexFloor.ActiveFloors)
        {
            if (floor == null)
            {
                continue;
            }

            bool canPlaceOnFloor = manager != null
                ? manager.CanPlaceStackOnFloor(sourceStack, floor)
                : floor.OccupiedStack == null;
            if (!canPlaceOnFloor)
            {
                continue;
            }

            candidateFreeFloorsBuffer.Add(floor);
            if (sourceTopColorId >= 0 && HasNeighborWithTopColor(floor, sourceTopColorId))
            {
                candidateChainFloorsBuffer.Add(floor);
            }
        }

        if (candidateFreeFloorsBuffer.Count == 0 && Time.unscaledTime >= nextFloorFallbackScanAt)
        {
            nextFloorFallbackScanAt = Time.unscaledTime + Mathf.Max(0.05f, fallbackScanInterval);
            HexFloor[] allFloors = FindObjectsOfType<HexFloor>();
            for (int i = 0; i < allFloors.Length; i++)
            {
                HexFloor floor = allFloors[i];
                if (floor == null || !floor.gameObject.activeInHierarchy)
                {
                    continue;
                }

                bool canPlaceOnFloor = manager != null
                    ? manager.CanPlaceStackOnFloor(sourceStack, floor)
                    : floor.OccupiedStack == null;
                if (!canPlaceOnFloor)
                {
                    continue;
                }

                if (!candidateFreeFloorsBuffer.Contains(floor))
                {
                    candidateFreeFloorsBuffer.Add(floor);
                }

                if (sourceTopColorId >= 0 && HasNeighborWithTopColor(floor, sourceTopColorId) && !candidateChainFloorsBuffer.Contains(floor))
                {
                    candidateChainFloorsBuffer.Add(floor);
                }
            }

            if (candidateFreeFloorsBuffer.Count > 0)
            {
                LogTutorial($"TryFindTutorialMovePair: target floors resolved via fallback scan. free={candidateFreeFloorsBuffer.Count}, chain={candidateChainFloorsBuffer.Count}");
            }
        }

        if (candidateChainFloorsBuffer.Count > 0)
        {
            targetFloor = SelectBestTargetFloor(sourceStack, candidateChainFloorsBuffer);
            LogTutorial($"TryFindTutorialMovePair: selected chain target. source={GetStackName(sourceStack)}, target={GetFloorName(targetFloor)}, chainCandidates={candidateChainFloorsBuffer.Count}, freeCandidates={candidateFreeFloorsBuffer.Count}");
            return targetFloor != null;
        }

        if (candidateFreeFloorsBuffer.Count == 0)
        {
            LogTutorial($"TryFindTutorialMovePair: no free floors for source={GetStackName(sourceStack)}.");
            return false;
        }

        targetFloor = SelectBestTargetFloor(sourceStack, candidateFreeFloorsBuffer);
        LogTutorial($"TryFindTutorialMovePair: selected free target. source={GetStackName(sourceStack)}, target={GetFloorName(targetFloor)}, freeCandidates={candidateFreeFloorsBuffer.Count}");
        return targetFloor != null;
    }

    private HexStack SelectBottomMostPlayerStack(List<HexStack> stacks)
    {
        if (stacks == null || stacks.Count == 0)
        {
            return null;
        }

        Camera gameplayCamera = ResolveWorldCamera();
        HexStack bestStack = null;
        float bestScreenY = float.MaxValue;
        float bestCenterOffset = float.MaxValue;
        float screenCenterX = Screen.width * 0.5f;
        bool foundVisibleStack = false;

        for (int i = 0; i < stacks.Count; i++)
        {
            HexStack stack = stacks[i];
            if (stack == null)
            {
                continue;
            }

            Vector3 screenPoint = gameplayCamera != null
                ? gameplayCamera.WorldToScreenPoint(stack.transform.position)
                : new Vector3(stack.transform.position.x, stack.transform.position.y, 1f);
            if (gameplayCamera != null && screenPoint.z < 0f)
            {
                continue;
            }

            bool isVisibleOnScreen = screenPoint.x >= 0f
                && screenPoint.x <= Screen.width
                && screenPoint.y >= 0f
                && screenPoint.y <= Screen.height;
            if (foundVisibleStack && !isVisibleOnScreen)
            {
                continue;
            }

            if (!foundVisibleStack && isVisibleOnScreen)
            {
                foundVisibleStack = true;
                bestStack = null;
                bestScreenY = float.MaxValue;
                bestCenterOffset = float.MaxValue;
            }

            float stackScreenY = screenPoint.y;
            float centerOffset = Mathf.Abs(screenPoint.x - screenCenterX);
            bool isBetter = bestStack == null
                || stackScreenY < bestScreenY
                || (Mathf.Approximately(stackScreenY, bestScreenY) && centerOffset < bestCenterOffset);
            if (!isBetter)
            {
                continue;
            }

            bestStack = stack;
            bestScreenY = stackScreenY;
            bestCenterOffset = centerOffset;
        }

        return bestStack;
    }

    private static HexFloor SelectBestTargetFloor(HexStack sourceStack, List<HexFloor> candidateFloors)
    {
        if (sourceStack == null || candidateFloors == null || candidateFloors.Count == 0)
        {
            return null;
        }

        HexFloor bestFloor = null;
        float bestDistanceSqr = float.MaxValue;
        Vector3 sourcePosition = sourceStack.transform.position;

        for (int i = 0; i < candidateFloors.Count; i++)
        {
            HexFloor floor = candidateFloors[i];
            if (floor == null)
            {
                continue;
            }

            float distanceSqr = (sourcePosition - floor.transform.position).sqrMagnitude;
            if (distanceSqr >= bestDistanceSqr)
            {
                continue;
            }

            bestDistanceSqr = distanceSqr;
            bestFloor = floor;
        }

        return bestFloor;
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
        if (cachedManager != null)
        {
            return cachedManager;
        }

        if (gameContext == null)
        {
            gameContext = FindObjectOfType<HexGameContext>();
        }

        if (gameContext != null && gameContext.Manager != null)
        {
            cachedManager = gameContext.Manager;
            return cachedManager;
        }

        cachedManager = FindObjectOfType<HexManager>();
        if (cachedManager == null)
        {
            LogTutorial("ResolveManager: HexManager not found.");
        }

        return cachedManager;
    }

    private Camera ResolveWorldCamera()
    {
        if (worldCamera != null)
        {
            return worldCamera;
        }

        if (cachedFallbackWorldCamera != null)
        {
            return cachedFallbackWorldCamera;
        }

        Camera mainCamera = Camera.main;
        if (mainCamera != null)
        {
            cachedFallbackWorldCamera = mainCamera;
            return mainCamera;
        }

        Camera anyCamera = FindObjectOfType<Camera>();
        if (anyCamera == null)
        {
            LogTutorial("ResolveWorldCamera: no camera found.");
        }
        else
        {
            cachedFallbackWorldCamera = anyCamera;
        }

        return anyCamera;
    }

    private bool TryConvertWorldToUiPosition(Vector3 worldPosition, out Vector3 uiPosition)
    {
        uiPosition = Vector3.zero;

        Camera gameplayCamera = ResolveWorldCamera();
        if (gameplayCamera == null)
        {
            LogTutorial("TryConvertWorldToUiPosition failed: gameplay camera is null.");
            return false;
        }

        Vector3 screenPoint = gameplayCamera.WorldToScreenPoint(worldPosition);
        if (screenPoint.z < 0f)
        {
            LogTutorial($"TryConvertWorldToUiPosition failed: point behind camera. world={worldPosition}, screen={screenPoint}");
            return false;
        }

        Vector2 screenPoint2D = (Vector2)screenPoint + handScreenOffset;

        if (canvasRoot != null)
        {
            if (!RectTransformUtility.ScreenPointToWorldPointInRectangle(canvasRoot, screenPoint2D, uiCamera, out uiPosition))
            {
                LogTutorial($"TryConvertWorldToUiPosition failed: ScreenPointToWorldPointInRectangle false. screen={screenPoint2D}");
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

        LogTutorial("Stop restart routine.");
        StopCoroutine(restartRoutine);
        restartRoutine = null;
    }

    private void SetTutorialVisible(bool visible)
    {
        if (tutorialRoot == null)
        {
            LogTutorial($"SetTutorialVisible({visible}) skipped: tutorialRoot is null.");
            return;
        }

        if (tutorialRoot.activeSelf != visible)
        {
            tutorialRoot.SetActive(visible);
            LogTutorial($"Tutorial root active = {visible}");
        }
    }

    private bool AreInitialGenerationSystemsReady(out string details)
    {
        if (gameContext == null)
        {
            gameContext = FindObjectOfType<HexGameContext>();
            if (gameContext == null)
            {
                details = "HexGameContext not found (treated as ready).";
                return true;
            }
        }

        HexFloorCreator floorCreator = gameContext.FloorCreator;
        bool floorReady = floorCreator == null || floorCreator.InitialGenerationCompleted;

        if (floorCreator != null && !floorCreator.InitialGenerationCompleted)
        {
            details = $"floorReady={floorReady}, stacksReady=unknown";
            return false;
        }

        HexStacksCreator stacksCreator = gameContext.StacksCreator;
        bool stacksReady = stacksCreator == null || stacksCreator.InitialPlayerStacksCompleted;
        details = $"floorReady={floorReady}, stacksReady={stacksReady}";

        return stacksReady;
    }

    private bool AreInitialGenerationSystemsReady()
    {
        return AreInitialGenerationSystemsReady(out _);
    }

    [System.Diagnostics.Conditional("UNITY_EDITOR")]
    [System.Diagnostics.Conditional("DEVELOPMENT_BUILD")]
    private void LogTutorial(string message)
    {
        if (!debugLogs)
        {
            return;
        }

        Debug.Log($"[Tutorial] {message}", this);
    }

    private static string GetStackName(HexStack stack)
    {
        return stack != null ? stack.name : "null";
    }

    private static string GetFloorName(HexFloor floor)
    {
        return floor != null ? floor.name : "null";
    }
}

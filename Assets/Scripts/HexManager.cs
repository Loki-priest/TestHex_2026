using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

[DisallowMultipleComponent]
public class HexManager : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private HexGameContext gameContext;

    [Header("Transfer")]
    [SerializeField] private bool transferOnStackPlaced = true;
    [SerializeField] private HexTransferAnimator transferAnimator;

    [Header("Chain Reaction Speed")]
    [SerializeField, Min(0f)] private float transferSpeedIncreasePerStack = 0.3f;
    [SerializeField, Min(0f)] private float clearSpeedIncreasePerStack = 0.3f;

    [Header("Top Match Clear")]
    [SerializeField] private int topMatchClearCount = 3;
    [SerializeField] private float clearScaleDuration = 0.14f;
    [SerializeField] private Ease clearScaleEase = Ease.InBack;
    [SerializeField] private float clearScaleStagger = 0.02f;
    [SerializeField] private HexClearFxPlayer clearFxPlayer;

    [Header("Debug")]
    [SerializeField] private bool logTransferEvents = true;

    private const int MaxResolveIterations = 4096;
    private int activeTransferRoutines;
    private int transferGeneration;

    public bool IsTransferInProgress => activeTransferRoutines > 0;
    public HexConfig hexConfig => gameContext != null ? gameContext.Config : null;

    private struct StackClearBatch
    {
        public HexStack Stack;
        public List<HexTile> Tiles;

        public StackClearBatch(HexStack stack, List<HexTile> tiles)
        {
            Stack = stack;
            Tiles = tiles;
        }
    }

    private sealed class TransferChainState
    {
        public readonly Queue<HexStack> PendingStacks = new();
        public readonly HashSet<HexStack> QueuedStacks = new();
        public readonly int Generation;
        public readonly Action OnComplete;

        public int TransferStepIndex;
        public int ClearStepIndex;
        public int LoopGuard;
        public bool PassStarted;
        public bool TransferredInPass;
        public bool IsCompleted;

        public TransferChainState(int generation, Action onComplete)
        {
            Generation = generation;
            OnComplete = onComplete;
        }
    }

    private HexPoolService PoolService => gameContext != null ? gameContext.PoolService : null;
    private HexStacksCreator StacksCreator => gameContext != null ? gameContext.StacksCreator : null;

    private void Awake()
    {
        PrewarmPools();
    }

    private void OnDisable()
    {
        transferGeneration++;
        activeTransferRoutines = 0;
    }

    public HexTile RentTile(HexTile prefab, Transform parent)
    {
        if (prefab == null)
        {
            return null;
        }

        Vector3 spawnPosition = parent != null ? parent.position : prefab.transform.position;
        Quaternion spawnRotation = parent != null ? parent.rotation : prefab.transform.rotation;

        HexPoolService poolService = PoolService;
        if (poolService != null)
        {
            HexTile pooledTile = poolService.RentTile(prefab, spawnPosition, spawnRotation, parent);
            if (pooledTile != null)
            {
                return pooledTile;
            }
        }

        return parent != null ? Instantiate(prefab, parent) : Instantiate(prefab);
    }

    public void ReturnTile(HexTile tile, HexTile fallbackPrefab = null)
    {
        if (tile == null)
        {
            return;
        }

        Transform tileTransform = tile.transform;
        tileTransform.DOKill(false);

        HexPoolService poolService = PoolService;
        if (poolService != null && poolService.ReturnTile(tile, fallbackPrefab))
        {
            return;
        }

        Destroy(tile.gameObject);
    }

    public bool TryRecycleEmptyStack(HexStack stack)
    {
        HexStacksCreator stacksCreator = StacksCreator;
        if (stacksCreator != null && stacksCreator.TryRecycleEmptyStack(stack))
        {
            return true;
        }

        return false;
    }

    public bool CanPlaceStackOnFloor(HexStack stack, HexFloor floor)
    {
        if (stack == null || floor == null)
        {
            return false;
        }

        HexStack occupiedStack = ResolveStackOnFloor(floor, stack);
        return occupiedStack == null || occupiedStack == stack;
    }

    public void HandleStackPlaced(HexStack placedStack, HexFloor targetFloor, Action onComplete = null)
    {
        if (placedStack == null || targetFloor == null)
        {
            onComplete?.Invoke();
            return;
        }

        LogTransferEvent(
            $"Stack placed on floor. stack={GetStackDebugName(placedStack)}, floor={GetFloorDebugName(targetFloor)}"
        );

        AttachStackToFloor(placedStack, targetFloor);
        HexStacksCreator stacksCreator = StacksCreator;
        if (stacksCreator != null)
        {
            stacksCreator.NotifyStackPlaced(placedStack);
        }

        if (!transferOnStackPlaced)
        {
            onComplete?.Invoke();
            return;
        }

        BeginResolveTopColorTransfer(
            placedStack,
            targetFloor,
            () =>
            {
                onComplete?.Invoke();
            }
        );
    }

    private void PrewarmPools()
    {
        HexPoolService poolService = PoolService;
        if (poolService == null)
        {
            return;
        }

        HexTile tilePrefabForPool = ResolveTilePrefabForPool();
        if (tilePrefabForPool != null)
        {
            poolService.PrewarmTiles(tilePrefabForPool);
        }

        clearFxPlayer.Prewarm(poolService);
    }

    private HexTile ResolveTilePrefabForPool()
    {
        HexStacksCreator stacksCreator = StacksCreator;
        if (stacksCreator != null)
        {
            HexTile tileTemplate = stacksCreator.ResolveTileTemplateForPool();
            if (tileTemplate != null)
            {
                return tileTemplate;
            }
        }

        HexStack anyStack = FindObjectOfType<HexStack>();
        if (anyStack == null)
        {
            return null;
        }

        return anyStack.GetTileTemplateForPool();
    }

    private void BeginResolveTopColorTransfer(HexStack sourceStack, HexFloor sourceFloor, Action onComplete)
    {
        activeTransferRoutines++;
        TransferChainState state = new TransferChainState(transferGeneration, onComplete);

        LogTransferEvent(
            $"Transfer chain started. sourceStack={GetStackDebugName(sourceStack)}, sourceFloor={GetFloorDebugName(sourceFloor)}, activeChains={activeTransferRoutines}"
        );

        if (sourceStack == null || sourceFloor == null)
        {
            LogTransferEvent("Transfer chain aborted: sourceStack/sourceFloor is null.");
            FinishTransferChain(state);
            return;
        }

        EnqueueForTransferCheck(sourceStack, state.PendingStacks, state.QueuedStacks);
        EnqueueNeighborStacksForTransferCheck(sourceFloor, state.PendingStacks, state.QueuedStacks);
        ContinueResolveTopColorTransfer(state);
    }

    private void ContinueResolveTopColorTransfer(TransferChainState state)
    {
        if (!IsTransferChainActive(state))
        {
            return;
        }

        while (state.LoopGuard < MaxResolveIterations)
        {
            if (!state.PassStarted)
            {
                state.PassStarted = true;
                state.TransferredInPass = false;

                if (state.PendingStacks.Count == 0)
                {
                    EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                }
            }

            while (state.PendingStacks.Count > 0 && state.LoopGuard < MaxResolveIterations)
            {
                state.LoopGuard++;

                HexStack currentSourceStack = state.PendingStacks.Dequeue();
                state.QueuedStacks.Remove(currentSourceStack);

                if (!TryResolveStackFloor(currentSourceStack, out HexFloor currentSourceFloor))
                {
                    continue;
                }

                if (!TryFindMatchingNeighbor(
                        currentSourceStack,
                        currentSourceFloor,
                        out HexStack targetStack,
                        out HexFloor targetFloor,
                        out int topColorId
                    ))
                {
                    continue;
                }

                int transferCount = currentSourceStack.CountTopTilesWithColorId(topColorId);
                if (transferCount <= 0)
                {
                    continue;
                }

                state.TransferredInPass = true;
                int transferStepNumber = state.TransferStepIndex + 1;
                float transferSpeedMultiplier = GetChainSpeedMultiplier(
                    state.TransferStepIndex,
                    transferSpeedIncreasePerStack
                );
                LogTransferEvent(
                    $"Transfer step #{transferStepNumber}: count={transferCount}, colorId={topColorId}, from={GetStackDebugName(currentSourceStack)}({GetFloorDebugName(currentSourceFloor)}) -> to={GetStackDebugName(targetStack)}({GetFloorDebugName(targetFloor)}), speedMul={transferSpeedMultiplier:F2}"
                );

                transferAnimator.TransferTopTilesFan(
                    currentSourceStack,
                    currentSourceFloor,
                    targetStack,
                    targetFloor,
                    transferCount,
                    transferSpeedMultiplier,
                    () =>
                    {
                        if (!IsTransferChainActive(state))
                        {
                            return;
                        }

                        LogTransferEvent($"Transfer step #{transferStepNumber} completed.");
                        state.TransferStepIndex++;

                        EnqueueForTransferCheck(currentSourceStack, state.PendingStacks, state.QueuedStacks);
                        EnqueueForTransferCheck(targetStack, state.PendingStacks, state.QueuedStacks);
                        EnqueueNeighborStacksForTransferCheck(currentSourceFloor, state.PendingStacks, state.QueuedStacks);
                        EnqueueNeighborStacksForTransferCheck(targetFloor, state.PendingStacks, state.QueuedStacks);

                        ContinueResolveTopColorTransfer(state);
                    }
                );
                return;
            }

            if (state.LoopGuard >= MaxResolveIterations)
            {
                break;
            }

            state.PassStarted = false;

            if (state.TransferredInPass)
            {
                EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                continue;
            }

            if (TryFindAnyTransferCandidate(out HexStack transferCandidate, out HexFloor transferCandidateFloor))
            {
                EnqueueForTransferCheck(transferCandidate, state.PendingStacks, state.QueuedStacks);
                EnqueueNeighborStacksForTransferCheck(transferCandidateFloor, state.PendingStacks, state.QueuedStacks);
                continue;
            }

            if (!TryCollectClearBatches(out List<StackClearBatch> clearBatches))
            {
                FinishTransferChain(state);
                return;
            }

            bool isParallelClear = clearBatches.Count > 1;
            float clearSpeedMultiplier = isParallelClear
                ? 1f
                : GetChainSpeedMultiplier(state.ClearStepIndex, clearSpeedIncreasePerStack);
            LogTransferEvent(
                $"Top clear phase: batches={clearBatches.Count}, parallel={isParallelClear}, speedMul={clearSpeedMultiplier:F2}"
            );

            ClearBatchesParallel(
                clearBatches,
                clearSpeedMultiplier,
                () =>
                {
                    if (!IsTransferChainActive(state))
                    {
                        return;
                    }

                    LogTransferEvent("Top clear phase completed.");
                    if (!isParallelClear)
                    {
                        state.ClearStepIndex++;
                    }

                    EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                    ContinueResolveTopColorTransfer(state);
                }
            );
            return;
        }

        FinishTransferChain(state);
    }

    private bool IsTransferChainActive(TransferChainState state)
    {
        return state != null
            && !state.IsCompleted
            && state.Generation == transferGeneration
            && isActiveAndEnabled;
    }

    private void FinishTransferChain(TransferChainState state)
    {
        if (state == null || state.IsCompleted || state.Generation != transferGeneration)
        {
            return;
        }

        state.IsCompleted = true;
        activeTransferRoutines = Mathf.Max(0, activeTransferRoutines - 1);
        LogTransferEvent($"Transfer chain finished. activeChains={activeTransferRoutines}");
        state.OnComplete?.Invoke();
    }

    private void EnqueueForTransferCheck(HexStack stack, Queue<HexStack> pendingStacks, HashSet<HexStack> queuedStacks)
    {
        if (stack == null || stack.TileCount == 0)
        {
            return;
        }

        if (!queuedStacks.Add(stack))
        {
            return;
        }

        pendingStacks.Enqueue(stack);
    }

    private void EnqueueNeighborStacksForTransferCheck(
        HexFloor centerFloor,
        Queue<HexStack> pendingStacks,
        HashSet<HexStack> queuedStacks
    )
    {
        if (centerFloor == null)
        {
            return;
        }

        for (int sideIndex = 0; sideIndex < 6; sideIndex++)
        {
            HexFloor neighborFloor = centerFloor.GetNeighborBySide(sideIndex);
            if (neighborFloor == null)
            {
                continue;
            }

            HexStack neighborStack = ResolveStackOnFloor(neighborFloor);
            EnqueueForTransferCheck(neighborStack, pendingStacks, queuedStacks);
        }
    }

    private void EnqueueAllStacksForTransferCheck(Queue<HexStack> pendingStacks, HashSet<HexStack> queuedStacks)
    {
        HexStack[] discoveredStacks = FindObjectsOfType<HexStack>();
        foreach (HexStack stack in discoveredStacks)
        {
            EnqueueForTransferCheck(stack, pendingStacks, queuedStacks);
        }
    }

    private bool TryResolveStackFloor(HexStack stack, out HexFloor floor)
    {
        floor = null;

        if (stack == null || stack.TileCount == 0)
        {
            return false;
        }

        floor = stack.CurrentFloor;
        return floor != null;
    }

    private bool TryFindAnyTransferCandidate(out HexStack sourceStack, out HexFloor sourceFloor)
    {
        sourceStack = null;
        sourceFloor = null;

        HexStack[] discoveredStacks = FindObjectsOfType<HexStack>();
        foreach (HexStack stack in discoveredStacks)
        {
            if (!TryResolveStackFloor(stack, out HexFloor floor))
            {
                continue;
            }

            if (!TryFindMatchingNeighbor(stack, floor, out _, out _, out _))
            {
                continue;
            }

            sourceStack = stack;
            sourceFloor = floor;
            return true;
        }

        return false;
    }

    private bool TryCollectClearBatches(out List<StackClearBatch> clearBatches)
    {
        clearBatches = new List<StackClearBatch>();

        HexStack[] discoveredStacks = FindObjectsOfType<HexStack>();
        foreach (HexStack stack in discoveredStacks)
        {
            if (stack == null || stack.TileCount == 0)
            {
                continue;
            }

            if (!TryExtractTopMatchTiles(stack, out List<HexTile> tilesToClear))
            {
                continue;
            }

            clearBatches.Add(new StackClearBatch(stack, tilesToClear));
        }

        return clearBatches.Count > 0;
    }

    private bool TryFindMatchingNeighbor(
        HexStack sourceStack,
        HexFloor sourceFloor,
        out HexStack targetStack,
        out HexFloor targetFloor,
        out int topColorId
    )
    {
        targetStack = null;
        targetFloor = null;
        topColorId = sourceStack != null ? sourceStack.GetTopColorId() : -1;

        if (sourceStack == null || sourceFloor == null || topColorId < 0)
        {
            return false;
        }

        for (int sideIndex = 0; sideIndex < 6; sideIndex++)
        {
            HexFloor neighborFloor = sourceFloor.GetNeighborBySide(sideIndex);
            if (TryGetMatchingStack(sourceStack, neighborFloor, topColorId, out targetStack))
            {
                targetFloor = neighborFloor;
                return true;
            }
        }

        IReadOnlyList<HexFloor> nearFloors = sourceFloor.NearFloors;
        for (int i = 0; i < nearFloors.Count; i++)
        {
            HexFloor neighborFloor = nearFloors[i];
            if (TryGetMatchingStack(sourceStack, neighborFloor, topColorId, out targetStack))
            {
                targetFloor = neighborFloor;
                return true;
            }
        }

        return false;
    }

    private bool TryGetMatchingStack(HexStack sourceStack, HexFloor neighborFloor, int topColorId, out HexStack matchingStack)
    {
        matchingStack = null;
        if (neighborFloor == null)
        {
            return false;
        }

        HexStack neighborStack = ResolveStackOnFloor(neighborFloor);
        if (neighborStack == null || neighborStack == sourceStack)
        {
            return false;
        }

        if (neighborStack.GetTopColorId() != topColorId)
        {
            return false;
        }

        matchingStack = neighborStack;
        return true;
    }

    private void AttachStackToFloor(HexStack stack, HexFloor targetFloor)
    {
        if (stack == null || targetFloor == null)
        {
            return;
        }

        HexStack occupiedStack = ResolveStackOnFloor(targetFloor);
        if (occupiedStack != null && occupiedStack != stack)
        {
            return;
        }

        HexFloor previousFloor = stack.CurrentFloor;
        if (previousFloor != null && previousFloor != targetFloor)
        {
            previousFloor.ClearOccupiedStack(stack);
        }

        stack.SetCurrentFloor(targetFloor);
        targetFloor.SetOccupiedStack(stack);
    }

    private HexStack ResolveStackOnFloor(HexFloor floor, HexStack ignoredStack = null)
    {
        if (floor == null)
        {
            return null;
        }

        HexStack occupiedStack = floor.OccupiedStack;
        if (occupiedStack != null)
        {
            bool isStaleBinding = occupiedStack.TileCount == 0 || occupiedStack.CurrentFloor != floor;
            if (!isStaleBinding)
            {
                return occupiedStack;
            }

            floor.ClearOccupiedStack(occupiedStack);
        }

        HexStack[] discoveredStacks = FindObjectsOfType<HexStack>();
        foreach (HexStack stack in discoveredStacks)
        {
            if (stack == null)
            {
                continue;
            }

            if (!stack.gameObject.activeInHierarchy || stack.TileCount == 0)
            {
                continue;
            }

            if (stack == ignoredStack)
            {
                continue;
            }

            if (stack.CurrentFloor != floor)
            {
                continue;
            }

            floor.SetOccupiedStack(stack);
            return stack;
        }
        return null;
    }

    private void ClearBatchesParallel(List<StackClearBatch> clearBatches, float speedMultiplier, Action onComplete)
    {
        if (clearBatches == null || clearBatches.Count == 0)
        {
            onComplete?.Invoke();
            return;
        }

        float safeSpeedMultiplier = Mathf.Max(0.01f, speedMultiplier);
        float clearDuration = clearScaleDuration / safeSpeedMultiplier;
        float clearStagger = Mathf.Max(0f, clearScaleStagger) / safeSpeedMultiplier;
        List<Tween> clearTweens = new();

        for (int batchIndex = 0; batchIndex < clearBatches.Count; batchIndex++)
        {
            List<HexTile> tilesToClear = clearBatches[batchIndex].Tiles;
            if (tilesToClear == null)
            {
                continue;
            }

            for (int tileIndex = 0; tileIndex < tilesToClear.Count; tileIndex++)
            {
                HexTile tile = tilesToClear[tileIndex];
                if (tile == null)
                {
                    continue;
                }

                Transform tileTransform = tile.transform;
                tileTransform.DOKill(false);
                tileTransform.SetParent(null, true);
                tileTransform.gameObject.SetActive(true);

                float delay = clearStagger * tileIndex;
                Tween clearTween = tileTransform
                    .DOScale(Vector3.zero, clearDuration)
                    .SetEase(clearScaleEase)
                    .SetDelay(delay);

                clearTweens.Add(clearTween);
            }
        }

        CompleteAfterTweens(
            clearTweens,
            () =>
            {
                for (int batchIndex = 0; batchIndex < clearBatches.Count; batchIndex++)
                {
                    HexStack batchStack = clearBatches[batchIndex].Stack;
                    List<HexTile> tilesToClear = clearBatches[batchIndex].Tiles;
                    if (tilesToClear == null)
                    {
                        continue;
                    }

                    bool hasLowestPosition = TryGetLowestTilePosition(tilesToClear, out Vector3 lowestPosition);
                    Color batchColor = Color.white;
                    bool hasBatchColor = clearFxPlayer.TryGetClearBatchColor(tilesToClear, out batchColor);
                    HexTile fallbackTilePrefab = batchStack != null ? batchStack.GetTileTemplateForPool() : null;

                    for (int tileIndex = 0; tileIndex < tilesToClear.Count; tileIndex++)
                    {
                        HexTile tile = tilesToClear[tileIndex];
                        if (tile == null)
                        {
                            continue;
                        }

                        tile.gameObject.SetActive(false);
                        ReturnTile(tile, fallbackTilePrefab);
                    }

                    if (hasLowestPosition)
                    {
                        clearFxPlayer.PlayClearTilesFxAtPosition(
                            this,
                            PoolService,
                            lowestPosition,
                            hasBatchColor ? batchColor : Color.white
                        );
                    }
                }

                onComplete?.Invoke();
            }
        );
    }

    private bool TryGetLowestTilePosition(List<HexTile> tiles, out Vector3 lowestPosition)
    {
        lowestPosition = Vector3.zero;
        if (tiles == null || tiles.Count == 0)
        {
            return false;
        }

        bool hasPosition = false;
        float lowestY = float.MaxValue;

        for (int i = 0; i < tiles.Count; i++)
        {
            HexTile tile = tiles[i];
            if (tile == null)
            {
                continue;
            }

            Vector3 tilePosition = tile.transform.position;
            if (!hasPosition || tilePosition.y < lowestY)
            {
                hasPosition = true;
                lowestY = tilePosition.y;
                lowestPosition = tilePosition;
            }
        }

        return hasPosition;
    }

    private void CompleteAfterTweens(List<Tween> tweens, Action onComplete)
    {
        if (tweens == null || tweens.Count == 0)
        {
            onComplete?.Invoke();
            return;
        }

        int remainingTweens = 0;
        bool callbackInvoked = false;
        Action reportTweenFinished = () =>
        {
            remainingTweens--;
            if (remainingTweens <= 0 && !callbackInvoked)
            {
                callbackInvoked = true;
                onComplete?.Invoke();
            }
        };

        for (int i = 0; i < tweens.Count; i++)
        {
            Tween tween = tweens[i];
            if (tween == null || !tween.IsActive() || tween.IsComplete())
            {
                continue;
            }

            remainingTweens++;
            bool isReported = false;
            tween.OnComplete(() =>
            {
                if (isReported)
                {
                    return;
                }

                isReported = true;
                reportTweenFinished();
            });
            tween.OnKill(() =>
            {
                if (isReported)
                {
                    return;
                }

                isReported = true;
                reportTweenFinished();
            });
        }

        if (remainingTweens == 0 && !callbackInvoked)
        {
            callbackInvoked = true;
            onComplete?.Invoke();
        }
    }

    private float GetChainSpeedMultiplier(int stepIndex, float speedIncreasePerStep)
    {
        float stepFactor = 1f + Mathf.Max(0f, speedIncreasePerStep);
        if (stepFactor <= 1f || stepIndex <= 0)
        {
            return 1f;
        }

        return Mathf.Pow(stepFactor, stepIndex);
    }

    private bool TryExtractTopMatchTiles(HexStack stack, out List<HexTile> tilesToClear)
    {
        tilesToClear = null;
        if (stack == null)
        {
            return false;
        }

        int topColorId = stack.GetTopColorId();
        if (topColorId < 0)
        {
            return false;
        }

        int topSameColorCount = stack.CountTopTilesWithColorId(topColorId);
        if (topSameColorCount < topMatchClearCount)
        {
            return false;
        }

        int clearCount = topSameColorCount;
        tilesToClear = new List<HexTile>(clearCount);
        for (int i = 0; i < clearCount; i++)
        {
            HexTile tile = stack.PopTopTile();
            if (tile == null)
            {
                break;
            }

            tilesToClear.Add(tile);
        }

        return tilesToClear.Count > 0;
    }

    private void LogTransferEvent(string message)
    {
        if (!logTransferEvents)
        {
            return;
        }

        Debug.Log($"[HexTransfer] {message}", this);
    }

    private static string GetStackDebugName(HexStack stack)
    {
        return stack != null ? stack.name : "<none>";
    }

    private static string GetFloorDebugName(HexFloor floor)
    {
        return floor != null ? floor.name : "<none>";
    }

}

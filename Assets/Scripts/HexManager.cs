using System;
using System.Collections;
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

    private const int MaxResolveIterations = 4096;
    private int activeTransferRoutines;

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

    private HexPoolService PoolService => gameContext != null ? gameContext.PoolService : null;
    private HexStacksCreator StacksCreator => gameContext != null ? gameContext.StacksCreator : null;

    private void Awake()
    {
        PrewarmPools();
    }

    private void OnDisable()
    {
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

        StartCoroutine(
            ResolveTopColorTransferRoutine(
                placedStack,
                targetFloor,
                () =>
                {
                    onComplete?.Invoke();
                }
            )
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

    private IEnumerator ResolveTopColorTransferRoutine(HexStack sourceStack, HexFloor sourceFloor, Action onComplete)
    {
        activeTransferRoutines++;

        try
        {
            if (sourceStack == null || sourceFloor == null)
            {
                yield break;
            }

            Queue<HexStack> pendingStacks = new();
            HashSet<HexStack> queuedStacks = new();
            int transferStepIndex = 0;
            int clearStepIndex = 0;

            EnqueueForTransferCheck(sourceStack, pendingStacks, queuedStacks);
            EnqueueNeighborStacksForTransferCheck(sourceFloor, pendingStacks, queuedStacks);

            int loopGuard = 0;
            while (loopGuard < MaxResolveIterations)
            {
                bool transferredInPass = false;

                if (pendingStacks.Count == 0)
                {
                    EnqueueAllStacksForTransferCheck(pendingStacks, queuedStacks);
                }

                while (pendingStacks.Count > 0 && loopGuard < MaxResolveIterations)
                {
                    loopGuard++;

                    HexStack currentSourceStack = pendingStacks.Dequeue();
                    queuedStacks.Remove(currentSourceStack);

                    if (!TryResolveStackFloor(currentSourceStack, out HexFloor currentSourceFloor))
                    {
                        continue;
                    }

                    if (!TryFindMatchingNeighbor(
                            currentSourceStack,
                            currentSourceFloor,
                            out HexStack targetStack,
                            out HexFloor targetFloor,
                            out Material topMaterial
                        ))
                    {
                        continue;
                    }

                    int transferCount = currentSourceStack.CountTopTilesWithMaterial(topMaterial);
                    if (transferCount <= 0)
                    {
                        continue;
                    }

                    transferredInPass = true;
                    float transferSpeedMultiplier = GetChainSpeedMultiplier(
                        transferStepIndex,
                        transferSpeedIncreasePerStack
                    );
                    yield return transferAnimator.TransferTopTilesFanRoutine(
                        currentSourceStack,
                        currentSourceFloor,
                        targetStack,
                        targetFloor,
                        transferCount,
                        transferSpeedMultiplier
                    );
                    transferStepIndex++;

                    EnqueueForTransferCheck(currentSourceStack, pendingStacks, queuedStacks);
                    EnqueueForTransferCheck(targetStack, pendingStacks, queuedStacks);
                    EnqueueNeighborStacksForTransferCheck(currentSourceFloor, pendingStacks, queuedStacks);
                    EnqueueNeighborStacksForTransferCheck(targetFloor, pendingStacks, queuedStacks);
                }

                if (loopGuard >= MaxResolveIterations)
                {
                    break;
                }

                if (transferredInPass)
                {
                    EnqueueAllStacksForTransferCheck(pendingStacks, queuedStacks);
                    continue;
                }

                if (TryFindAnyTransferCandidate(out HexStack transferCandidate, out HexFloor transferCandidateFloor))
                {
                    EnqueueForTransferCheck(transferCandidate, pendingStacks, queuedStacks);
                    EnqueueNeighborStacksForTransferCheck(transferCandidateFloor, pendingStacks, queuedStacks);
                    continue;
                }

                if (!TryCollectClearBatches(out List<StackClearBatch> clearBatches))
                {
                    break;
                }

                bool isParallelClear = clearBatches.Count > 1;
                float clearSpeedMultiplier = isParallelClear
                    ? 1f
                    : GetChainSpeedMultiplier(clearStepIndex, clearSpeedIncreasePerStack);
                yield return ClearBatchesParallelRoutine(clearBatches, clearSpeedMultiplier);
                if (!isParallelClear)
                {
                    clearStepIndex++;
                }
                EnqueueAllStacksForTransferCheck(pendingStacks, queuedStacks);
            }
        }
        finally
        {
            activeTransferRoutines = Mathf.Max(0, activeTransferRoutines - 1);
            onComplete?.Invoke();
        }
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
        out Material topMaterial
    )
    {
        targetStack = null;
        targetFloor = null;
        topMaterial = sourceStack != null ? sourceStack.GetTopMaterial() : null;

        if (sourceStack == null || sourceFloor == null || topMaterial == null)
        {
            return false;
        }

        for (int sideIndex = 0; sideIndex < 6; sideIndex++)
        {
            HexFloor neighborFloor = sourceFloor.GetNeighborBySide(sideIndex);
            if (TryGetMatchingStack(sourceStack, neighborFloor, topMaterial, out targetStack))
            {
                targetFloor = neighborFloor;
                return true;
            }
        }

        IReadOnlyList<HexFloor> nearFloors = sourceFloor.NearFloors;
        for (int i = 0; i < nearFloors.Count; i++)
        {
            HexFloor neighborFloor = nearFloors[i];
            if (TryGetMatchingStack(sourceStack, neighborFloor, topMaterial, out targetStack))
            {
                targetFloor = neighborFloor;
                return true;
            }
        }

        return false;
    }

    private bool TryGetMatchingStack(HexStack sourceStack, HexFloor neighborFloor, Material topMaterial, out HexStack matchingStack)
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

        if (neighborStack.GetTopMaterial() != topMaterial)
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

    private IEnumerator ClearBatchesParallelRoutine(List<StackClearBatch> clearBatches, float speedMultiplier)
    {
        if (clearBatches == null || clearBatches.Count == 0)
        {
            yield break;
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

        yield return WaitForTweensCompletion(clearTweens);

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

    private IEnumerator WaitForTweensCompletion(List<Tween> tweens)
    {
        if (tweens == null || tweens.Count == 0)
        {
            yield break;
        }

        while (true)
        {
            bool hasRunningTween = false;

            for (int i = 0; i < tweens.Count; i++)
            {
                Tween tween = tweens[i];
                if (tween == null)
                {
                    continue;
                }

                if (tween.IsActive() && !tween.IsComplete())
                {
                    hasRunningTween = true;
                    break;
                }
            }

            if (!hasRunningTween)
            {
                yield break;
            }

            yield return null;
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

        Material topMaterial = stack.GetTopMaterial();
        if (topMaterial == null)
        {
            return false;
        }

        int topSameColorCount = stack.CountTopTilesWithMaterial(topMaterial);
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

}

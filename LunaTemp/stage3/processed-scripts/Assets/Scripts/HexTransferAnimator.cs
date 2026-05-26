using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HexTransferAnimator : MonoBehaviour
{
    [SerializeField] private float tileFlipDuration = 0.22f;
    [SerializeField] private Ease tileFlipEase = Ease.InOutSine;
    [SerializeField] private float tileSettleDuration = 0.1f;
    [SerializeField] private Ease tileSettleEase = Ease.OutQuad;
    [SerializeField] private float tileTransferFanStagger = 0.04f;

    public IEnumerator TransferTopTilesFanRoutine(
        HexStack sourceStack,
        HexFloor sourceFloor,
        HexStack targetStack,
        HexFloor targetFloor,
        int transferCount,
        float speedMultiplier = 1f
    )
    {
        if (sourceStack == null || targetStack == null || transferCount <= 0)
        {
            yield break;
        }

        float safeSpeedMultiplier = Mathf.Max(0.01f, speedMultiplier);
        float flipDuration = tileFlipDuration / safeSpeedMultiplier;
        float settleDuration = tileSettleDuration / safeSpeedMultiplier;
        float fanStagger = Mathf.Max(0f, tileTransferFanStagger) / safeSpeedMultiplier;

        int targetStartIndex = targetStack.TileCount;
        List<HexTile> movingTiles = new System.Collections.Generic.List<HexTile>(transferCount);

        for (int i = 0; i < transferCount; i++)
        {
            HexTile tile = sourceStack.PopTopTile();
            if (tile == null)
            {
                break;
            }

            movingTiles.Add(tile);
        }

        if (movingTiles.Count == 0)
        {
            yield break;
        }

        List<Tween> transferTweens = new System.Collections.Generic.List<DG.Tweening.Tween>(movingTiles.Count);
        for (int i = 0; i < movingTiles.Count; i++)
        {
            HexTile tile = movingTiles[i];
            if (tile == null)
            {
                continue;
            }

            Vector3 targetPosition = targetStack.GetWorldPositionForTileIndex(targetStartIndex + i);
            float delay = fanStagger * i;
            Tween transferTween = CreateTileTransferTween(
                tile,
                sourceFloor,
                targetFloor,
                targetPosition,
                delay,
                flipDuration,
                settleDuration
            );
            if (transferTween != null)
            {
                transferTweens.Add(transferTween);
            }
        }

        yield return WaitForTweensCompletion(transferTweens);

        for (int i = 0; i < movingTiles.Count; i++)
        {
            HexTile tile = movingTiles[i];
            if (tile == null)
            {
                continue;
            }

            targetStack.PushTopTile(tile);
        }
    }

    private Tween CreateTileTransferTween(
        HexTile tile,
        HexFloor sourceFloor,
        HexFloor targetFloor,
[Bridge.Ref]         Vector3 targetPosition,
        float startDelay,
        float flipDuration,
        float settleDuration
    )
    {
        if (tile == null)
        {
            return null;
        }

        Transform tileTransform = tile.transform;
        tileTransform.DOKill(false);
        tileTransform.SetParent(null, true);

        Vector3 up = sourceFloor != null ? sourceFloor.transform.up.normalized : Vector3.up;
        Vector3 direction = GetNeighborDirection(sourceFloor, targetFloor, up);
        Vector3 edgeAxis = Vector3.Cross(up, direction).normalized;

        if (edgeAxis.sqrMagnitude < 0.0001f)
        {
            edgeAxis = Vector3.Cross(up, Vector3.forward).normalized;
            if (edgeAxis.sqrMagnitude < 0.0001f)
            {
                edgeAxis = Vector3.right;
            }
        }

        Vector3 sourceCenter = sourceFloor != null ? sourceFloor.transform.position : tileTransform.position;
        Vector3 targetCenter = targetFloor != null ? targetFloor.transform.position : targetPosition;
        Vector3 edgePoint = (sourceCenter + targetCenter) * 0.5f;
        float targetHeightAlongUp = Vector3.Dot(targetPosition - targetCenter, up);
        edgePoint += up * targetHeightAlongUp;

        Sequence sequence = DOTween.Sequence();
        if (startDelay > 0f)
        {
            sequence.AppendInterval(startDelay);
        }

        float previousAngle = 0f;
        sequence.Append(
            DOTween
                .To(
                    () => 0f,
                    angle =>
                    {
                        float delta = angle - previousAngle;
                        previousAngle = angle;
                        tileTransform.RotateAround(edgePoint, edgeAxis, delta);
                    },
                    180f,
                    flipDuration
                )
                .SetEase(tileFlipEase)
        );

        sequence.Append(tileTransform.DOMove(targetPosition, settleDuration).SetEase(tileSettleEase));
        return sequence;
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

    private Vector3 GetNeighborDirection(HexFloor sourceFloor, HexFloor targetFloor, [Bridge.Ref] Vector3 up)
    {
        if (sourceFloor != null && targetFloor != null)
        {
            int sideIndex = sourceFloor.GetSideIndexOfNeighbor(targetFloor);
            if (sideIndex >= 0)
            {
                return sourceFloor.GetSideDirection(sideIndex);
            }

            Vector3 betweenFloors = targetFloor.transform.position - sourceFloor.transform.position;
            Vector3 projectedDirection = Vector3.ProjectOnPlane(betweenFloors, up);
            if (projectedDirection.sqrMagnitude > 0.0001f)
            {
                return projectedDirection.normalized;
            }
        }

        return sourceFloor != null ? sourceFloor.transform.forward : Vector3.forward;
    }
}

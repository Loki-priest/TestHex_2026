using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

/// <summary>
/// Анимирует перекладывание верхних плиток между соседними стопками.
/// </summary>
public class HexTransferAnimator : MonoBehaviour
{
    [Header("Runtime")]
    [SerializeField] private bool logTransferAnimatorEvents = false;

    [SerializeField] private float tileFlipDuration = 0.22f;
    [SerializeField] private Ease tileFlipEase = Ease.InOutSine;
    [SerializeField] private float tileSettleDuration = 0.1f;
    [SerializeField] private Ease tileSettleEase = Ease.OutQuad;
    [SerializeField] private float tileTransferFanStagger = 0.04f;

    public void TransferTopTilesFan(
        HexStack sourceStack,
        HexFloor sourceFloor,
        HexStack targetStack,
        HexFloor targetFloor,
        int transferCount,
        float speedMultiplier,
        Action onComplete
    )
    {
        if (sourceStack == null || targetStack == null || transferCount <= 0)
        {
            onComplete?.Invoke();
            return;
        }

        float safeSpeedMultiplier = Mathf.Max(0.01f, speedMultiplier);
        float flipDuration = tileFlipDuration / safeSpeedMultiplier;
        float settleDuration = tileSettleDuration / safeSpeedMultiplier;
        float fanStagger = Mathf.Max(0f, tileTransferFanStagger) / safeSpeedMultiplier;
        LogTransferAnimator(
            $"Start transfer. source={GetStackName(sourceStack)}, target={GetStackName(targetStack)}, count={transferCount}, speed={safeSpeedMultiplier:F2}"
        );

        int targetStartIndex = targetStack.TileCount;
        List<HexTile> movingTiles = new(transferCount);

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
            LogTransferAnimator("Transfer cancelled: no tiles popped from source.");
            onComplete?.Invoke();
            return;
        }

        List<Tween> transferTweens = new(movingTiles.Count);
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

        CompleteAfterTweens(
            transferTweens,
            () =>
            {
                for (int i = 0; i < movingTiles.Count; i++)
                {
                    HexTile tile = movingTiles[i];
                    if (tile == null)
                    {
                        continue;
                    }

                    targetStack.PushTopTile(tile);
                }

                LogTransferAnimator("Transfer animation stage completed.");
                onComplete?.Invoke();
            }
        );
    }

    private Tween CreateTileTransferTween(
        HexTile tile,
        HexFloor sourceFloor,
        HexFloor targetFloor,
        Vector3 targetPosition,
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

    private Vector3 GetNeighborDirection(HexFloor sourceFloor, HexFloor targetFloor, Vector3 up)
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

    [System.Diagnostics.Conditional("UNITY_EDITOR")]
    [System.Diagnostics.Conditional("DEVELOPMENT_BUILD")]
    private void LogTransferAnimator(string message)
    {
        if (!logTransferAnimatorEvents)
        {
            return;
        }

        Debug.Log($"[HexTransferAnimator] {message}", this);
    }

    private static string GetStackName(HexStack stack)
    {
        return stack != null ? stack.name : "<none>";
    }
}

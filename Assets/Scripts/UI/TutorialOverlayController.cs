using System.Collections;
using DG.Tweening;
using UnityEngine;

public class TutorialOverlayController : MonoBehaviour
{
    [Header("Bindings")]
    [SerializeField] private GameObject tutorialRoot;
    [SerializeField] private RectTransform handTransform;
    [SerializeField] private RectTransform fromAnchor;
    [SerializeField] private RectTransform toAnchor;

    [Header("Behaviour")]
    [SerializeField] private bool startOnEnable = false;
    [SerializeField] private bool completeOnSuccessfulDrop = true;
    [SerializeField] private float restartDelay = 2f;

    [Header("Animation")]
    [SerializeField] private float handMoveDuration = 0.8f;
    [SerializeField] private float handPauseDuration = 0.15f;
    [SerializeField] private Ease handMoveEase = Ease.InOutSine;

    private bool isCompleted;
    private Coroutine restartRoutine;
    private Tween handTween;

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
        if (isCompleted)
        {
            return;
        }

        StopRestartRoutine();
        SetTutorialVisible(true);
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
        isCompleted = false;
        if (startOnEnable)
        {
            StartTutorial();
        }
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

        if (successfulDrop && completeOnSuccessfulDrop)
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

        if (handTransform == null || fromAnchor == null || toAnchor == null)
        {
            return;
        }

        handTransform.position = fromAnchor.position;

        Sequence sequence = DOTween.Sequence();
        sequence.Append(handTransform.DOMove(toAnchor.position, handMoveDuration).SetEase(handMoveEase));
        sequence.AppendInterval(handPauseDuration);
        sequence.AppendCallback(() => handTransform.position = fromAnchor.position);
        sequence.AppendInterval(handPauseDuration);
        sequence.SetLoops(-1, LoopType.Restart);
        handTween = sequence;
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

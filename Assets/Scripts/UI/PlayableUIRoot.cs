using UnityEngine;

public class PlayableUIRoot : MonoBehaviour
{
    [SerializeField] private HexGameContext gameContext;
    [SerializeField] private TutorialOverlayController tutorialController;
    [SerializeField] private PackshotController packshotController;
    [SerializeField] private CountdownTimerPanel countdownTimerPanel;
    private HexManager subscribedManager;

    public TutorialOverlayController TutorialController => tutorialController;
    public PackshotController PackshotController => packshotController;
    public CountdownTimerPanel CountdownTimerPanel => countdownTimerPanel;

    private void OnEnable()
    {
        SubscribeManagerEvents();

        if (countdownTimerPanel != null)
        {
            countdownTimerPanel.CountdownFinished += HandleCountdownFinished;
        }

        if (packshotController != null)
        {
            packshotController.PackshotShown += HandlePackshotShown;
        }
    }

    private void OnDisable()
    {
        UnsubscribeManagerEvents();

        if (countdownTimerPanel != null)
        {
            countdownTimerPanel.CountdownFinished -= HandleCountdownFinished;
        }

        if (packshotController != null)
        {
            packshotController.PackshotShown -= HandlePackshotShown;
        }
    }

    public void StartTutorial()
    {
        tutorialController?.StartTutorial();
    }

    public void StopTutorial()
    {
        tutorialController?.StopTutorial();
    }

    public void ShowPackshot()
    {
        packshotController?.ShowPackshot();
    }

    public void StartCountdownTimer()
    {
        if (countdownTimerPanel != null && !countdownTimerPanel.gameObject.activeSelf)
        {
            countdownTimerPanel.gameObject.SetActive(true);
        }

        if (countdownTimerPanel == null)
        {
            return;
        }

        if (TryGetConfiguredGameDuration(out float configuredDuration))
        {
            countdownTimerPanel.RestartCountdown(configuredDuration);
            return;
        }

        countdownTimerPanel.StartCountdown();
    }

    public void StopCountdownTimer()
    {
        countdownTimerPanel?.StopCountdown();
    }

    private void HandleCountdownFinished()
    {
        packshotController?.ShowPackshot();
    }

    private void HandlePackshotShown()
    {
        tutorialController?.DisableTutorialPermanently();
        HexDragger.SetGlobalDragEnabled(false);
        if (countdownTimerPanel != null)
        {
            countdownTimerPanel.StopCountdown();
            countdownTimerPanel.gameObject.SetActive(false);
        }
    }

    private void HandleFirstTransferAndClearChainFinished()
    {
        if (!IsEndGameAfterFirstChainEnabled())
        {
            return;
        }

        packshotController?.ShowPackshot();
    }

    private void SubscribeManagerEvents()
    {
        HexManager manager = gameContext != null ? gameContext.Manager : null;
        if (manager == null || subscribedManager == manager)
        {
            return;
        }

        UnsubscribeManagerEvents();
        subscribedManager = manager;
        subscribedManager.FirstTransferAndClearChainFinished += HandleFirstTransferAndClearChainFinished;
    }

    private void UnsubscribeManagerEvents()
    {
        if (subscribedManager == null)
        {
            return;
        }

        subscribedManager.FirstTransferAndClearChainFinished -= HandleFirstTransferAndClearChainFinished;
        subscribedManager = null;
    }

    private bool TryGetConfiguredGameDuration(out float durationSeconds)
    {
        durationSeconds = 0f;

        HexConfig config = gameContext != null ? gameContext.Config : null;
        if (config == null)
        {
            return false;
        }

        durationSeconds = Mathf.Max(0.1f, config.gameDurationSeconds);
        return true;
    }

    private bool IsEndGameAfterFirstChainEnabled()
    {
        HexConfig config = gameContext != null ? gameContext.Config : null;
        return config != null && config.endGameAfterFirstTransferAndClearChain;
    }
}

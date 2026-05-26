using UnityEngine;

public class PlayableUIRoot : MonoBehaviour
{
    [SerializeField] private TutorialOverlayController tutorialController;
    [SerializeField] private PackshotController packshotController;
    [SerializeField] private CountdownTimerPanel countdownTimerPanel;

    public TutorialOverlayController TutorialController => tutorialController;
    public PackshotController PackshotController => packshotController;
    public CountdownTimerPanel CountdownTimerPanel => countdownTimerPanel;

    private void OnEnable()
    {
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

        countdownTimerPanel?.StartCountdown();
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
        tutorialController?.StopTutorial();
        HexDragger.SetGlobalDragEnabled(false);
        if (countdownTimerPanel != null)
        {
            countdownTimerPanel.StopCountdown();
            countdownTimerPanel.gameObject.SetActive(false);
        }
    }
}

using UnityEngine;

public class PlayableUIRoot : MonoBehaviour
{
    [SerializeField] private TutorialOverlayController tutorialController;
    [SerializeField] private PackshotController packshotController;
    [SerializeField] private CountdownTimerPanel countdownTimerPanel;

    public TutorialOverlayController TutorialController => tutorialController;
    public PackshotController PackshotController => packshotController;
    public CountdownTimerPanel CountdownTimerPanel => countdownTimerPanel;

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
        countdownTimerPanel?.StartCountdown();
    }

    public void StopCountdownTimer()
    {
        countdownTimerPanel?.StopCountdown();
    }
}

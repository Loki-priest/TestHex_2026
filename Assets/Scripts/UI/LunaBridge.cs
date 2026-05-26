/// <summary>
/// Тонкая обертка над API Luna для завершения плейбла и перехода в стор.
/// </summary>
public static class LunaBridge
{
    public static void GameEnded()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    public static void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}

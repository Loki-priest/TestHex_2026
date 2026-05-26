using Luna.Unity;

public static class LunaBridge
{
	public static void GameEnded()
	{
		LifeCycle.GameEnded();
	}

	public static void InstallFullGame()
	{
		Playable.InstallFullGame();
	}
}

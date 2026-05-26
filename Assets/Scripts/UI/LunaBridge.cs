using System;
using System.Reflection;

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

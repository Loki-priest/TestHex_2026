using System;
using System.Reflection;

public static class LunaBridge
{
    public static void GameEnded()
    {
        InvokeStatic("Luna.Unity.LifeCycle", "GameEnded");
    }

    public static void InstallFullGame()
    {
        InvokeStatic("Luna.Unity.Playable", "InstallFullGame");
    }

    private static void InvokeStatic(string typeName, string methodName)
    {
        Type type = FindType(typeName);
        if (type == null)
        {
            return;
        }

        MethodInfo method = type.GetMethod(methodName, BindingFlags.Public | BindingFlags.Static);
        method?.Invoke(null, null);
    }

    private static Type FindType(string typeName)
    {
        Assembly[] assemblies = AppDomain.CurrentDomain.GetAssemblies();
        for (int i = 0; i < assemblies.Length; i++)
        {
            Type type = assemblies[i].GetType(typeName);
            if (type != null)
            {
                return type;
            }
        }

        return null;
    }
}

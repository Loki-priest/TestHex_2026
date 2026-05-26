using UnityEngine;

[CreateAssetMenu]
public class HexConfig : ScriptableObject
{
    [System.Serializable]
    public class StackColorPreset
    {
        public int[] colorIdsBottomToTop;
    }

    [Header("Fallback Random Colors")]
    public Color[] colors;

    [Header("Stack Presets")]
    public bool isRandom = false;
    public StackColorPreset[] startStackColors;

    [Header("Floor Generation")]
    [Tooltip("Number of floor columns along world X axis.")]
    [Min(1)] public int floorWidth = 3;
    [Tooltip("Number of floor rows along world Z axis.")]
    [Min(1)] public int floorLength = 3;

}

using System;
using UnityEngine;

[CreateAssetMenu]
public class HexConfig : ScriptableObject
{
	[Serializable]
	public class StackColorPreset
	{
		public Material[] colorsBottomToTop;
	}

	[Header("Fallback Random Colors")]
	public Material[] colors;

	[Header("Stack Presets")]
	public StackColorPreset[] startStackColors;

	[Header("Floor Generation")]
	[Tooltip("Number of floor columns along world X axis.")]
	[Min(1f)]
	public int floorWidth = 3;

	[Tooltip("Number of floor rows along world Z axis.")]
	[Min(1f)]
	public int floorLength = 3;
}

using System;
using UnityEngine;

[CreateAssetMenu]
public class HexConfig : ScriptableObject
{
	[Serializable]
	public struct FloorCoord
	{
		public int x;

		public int z;
	}

	[Serializable]
	public class StackColorPreset
	{
		public int[] colorIdsBottomToTop;
	}

	[Header("Fallback Random Colors")]
	public Color[] colors;

	[Tooltip("How many first colors from `colors` are used in gameplay generation. 0 = use all.")]
	[Min(0f)]
	public int paletteColorCount = 0;

	[Header("Stack Presets")]
	public bool isRandom = false;

	public StackColorPreset[] startStackColors;

	public bool generatePlayerStacksByFivePlusFive = false;

	[Header("Floor Stack Spawn")]
	public bool fillGeneratedFloorWithStacks = true;

	public FloorCoord[] noStackSpawnCoords;

	[Header("Match Rules")]
	[Min(1f)]
	public int topMatchClearCount = 3;

	[Header("Game Flow")]
	[Min(0.1f)]
	public float gameDurationSeconds = 20f;

	public bool endGameAfterFirstTransferAndClearChain = false;

	[Header("Floor Generation")]
	[Tooltip("Number of floor columns along world X axis.")]
	[Min(1f)]
	public int floorWidth = 3;

	[Tooltip("Number of floor rows along world Z axis.")]
	[Min(1f)]
	public int floorLength = 3;
}

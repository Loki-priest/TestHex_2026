using System.Collections.Generic;
using System.Diagnostics;
using UnityEngine;

[DisallowMultipleComponent]
public class HexFloorCreator : MonoBehaviour
{
	[Header("References")]
	[SerializeField]
	private HexGameContext gameContext;

	[SerializeField]
	private GameObject floorPrefab;

	[SerializeField]
	private Transform floorRoot;

	[SerializeField]
	private Transform bottomRowAnchor;

	[Header("Build")]
	[SerializeField]
	private bool generateOnStart;

	[SerializeField]
	private bool clearBeforeGenerate = true;

	[SerializeField]
	private bool refreshNeighborsAfterGenerate = true;

	[SerializeField]
	private bool fillStacksAfterGenerate = true;

	[SerializeField]
	private bool debugLogs = false;

	[Header("Layout")]
	[SerializeField]
	[Min(0.001f)]
	private float neighborDistance = 1f;

	[SerializeField]
	private bool shiftOddColumnsForward = true;

	[SerializeField]
	private Vector3 anchorLocalOffset = Vector3.zero;

	private readonly List<HexFloor> generatedFloors = new List<HexFloor>();

	private HexConfig HexConfig => (gameContext != null) ? gameContext.Config : null;

	public bool InitialGenerationCompleted { get; private set; }

	private void Start()
	{
		if (generateOnStart)
		{
			GenerateFloor();
		}
		MarkInitialGenerationCompleted();
	}

	[ContextMenu("Generate Floor")]
	public void GenerateFloor()
	{
		HexConfig hexConfig = HexConfig;
		if (hexConfig == null || floorPrefab == null)
		{
			return;
		}
		Transform root = ((floorRoot != null) ? floorRoot : base.transform);
		Transform anchor = ((bottomRowAnchor != null) ? bottomRowAnchor : root);
		if (clearBeforeGenerate)
		{
			ClearFloors(root);
		}
		generatedFloors.Clear();
		int width = Mathf.Max(1, hexConfig.floorWidth);
		int length = Mathf.Max(1, hexConfig.floorLength);
		float zStep = Mathf.Max(0.001f, neighborDistance);
		float xStep = zStep * Mathf.Sqrt(3f) * 0.5f;
		float zColumnShift = zStep * 0.5f * (shiftOddColumnsForward ? 1f : (-1f));
		Vector3 axisX = anchor.right.normalized;
		Vector3 axisY = anchor.up.normalized;
		Vector3 axisZ = anchor.forward.normalized;
		Vector3 origin = anchor.position + axisX * anchorLocalOffset.x + axisY * anchorLocalOffset.y + axisZ * anchorLocalOffset.z;
		float firstColumnCenterX = 0f - (float)(width - 1) * 0.5f * xStep;
		for (int colX = 0; colX < width; colX++)
		{
			float x = firstColumnCenterX + (float)colX * xStep;
			float columnOffsetZ = (((colX & 1) == 1) ? zColumnShift : 0f);
			for (int rowZ = 0; rowZ < length; rowZ++)
			{
				float z = (float)rowZ * zStep + columnOffsetZ;
				Vector3 worldPosition = origin + axisX * x + axisZ * z;
				GameObject floorObject = Object.Instantiate(floorPrefab, worldPosition, anchor.rotation, root);
				if (floorObject == null)
				{
					continue;
				}
				HexFloor floor = floorObject.GetComponent<HexFloor>();
				if (floor == null)
				{
					if (Application.isPlaying)
					{
						Object.Destroy(floorObject);
					}
					else
					{
						Object.DestroyImmediate(floorObject);
					}
				}
				else
				{
					floor.name = $"HexFloor [x:{colX}, z:{rowZ}]";
					floor.SetGridCoordinates(colX, rowZ);
					generatedFloors.Add(floor);
				}
			}
		}
		if (Application.isPlaying)
		{
		}
		bool shouldFillStacks = fillStacksAfterGenerate && hexConfig.fillGeneratedFloorWithStacks;
		if (refreshNeighborsAfterGenerate || shouldFillStacks)
		{
			for (int i = 0; i < generatedFloors.Count; i++)
			{
				HexFloor floor2 = generatedFloors[i];
				if (!(floor2 == null))
				{
					floor2.FindNearFloors();
				}
			}
		}
		if (!shouldFillStacks || gameContext == null || gameContext.StacksCreator == null)
		{
			MarkInitialGenerationCompleted();
			return;
		}
		gameContext.StacksCreator.FillFloorsWithConfiguredStacks(generatedFloors);
		MarkInitialGenerationCompleted();
	}

	[ContextMenu("Clear Generated Floor")]
	public void ClearGeneratedFloor()
	{
		Transform root = ((floorRoot != null) ? floorRoot : base.transform);
		ClearFloors(root);
		generatedFloors.Clear();
	}

	private static void ClearFloors(Transform root)
	{
		if (root == null)
		{
			return;
		}
		HexFloor[] floors = root.GetComponentsInChildren<HexFloor>(true);
		if (Application.isPlaying)
		{
			foreach (HexFloor floor2 in floors)
			{
				if (!(floor2 == null))
				{
					floor2.gameObject.SetActive(false);
				}
			}
		}
		foreach (HexFloor floor in floors)
		{
			if (!(floor == null))
			{
				if (Application.isPlaying)
				{
					Object.Destroy(floor.gameObject);
				}
				else
				{
					Object.DestroyImmediate(floor.gameObject);
				}
			}
		}
	}

	private void MarkInitialGenerationCompleted()
	{
		if (!InitialGenerationCompleted)
		{
			InitialGenerationCompleted = true;
		}
	}

	[Conditional("UNITY_EDITOR")]
	[Conditional("DEVELOPMENT_BUILD")]
	private void LogFloorCreator(string message)
	{
		if (debugLogs)
		{
			UnityEngine.Debug.Log("[HexFloorCreator] " + message, this);
		}
	}
}

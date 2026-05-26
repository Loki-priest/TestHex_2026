using System.Collections.Generic;
using System.Diagnostics;
using UnityEngine;

[DisallowMultipleComponent]
public class HexStacksCreator : MonoBehaviour
{
	[Header("References")]
	[SerializeField]
	private HexGameContext gameContext;

	[SerializeField]
	private HexStack spawnStackPrefab;

	[SerializeField]
	private Transform stacksRoot;

	[SerializeField]
	private Transform[] stackSlots;

	[Header("Spawn")]
	[SerializeField]
	private bool spawnOnStart = true;

	[SerializeField]
	private bool clearExistingOnStart = true;

	[SerializeField]
	private bool respawnWhenAllPlaced = true;

	[SerializeField]
	private bool spawnSlotsOnlyOnce;

	[SerializeField]
	private float slotOccupancyRadius = 0.2f;

	[Header("Generated Floor Fill")]
	[SerializeField]
	private bool logGeneratedFill;

	[SerializeField]
	private bool debugLogs = false;

	private const int GeneratedBottomLayerCount = 5;

	private const int GeneratedTopLayerCount = 5;

	private readonly HashSet<HexStack> pendingPlacementStacks = new HashSet<HexStack>();

	private readonly HashSet<HexStack> runtimePooledStacks = new HashSet<HexStack>();

	private readonly List<HexStack> stackQueryBuffer = new List<HexStack>();

	private HexStack runtimeSpawnTemplate;

	private bool hasSpawnedStacks;

	public bool InitialPlayerStacksCompleted { get; private set; }

	private HexConfig HexConfig => (gameContext != null) ? gameContext.Config : null;

	private HexPoolService PoolService => (gameContext != null) ? gameContext.PoolService : null;

	private void Start()
	{
		if (spawnOnStart)
		{
			if (clearExistingOnStart)
			{
				ClearExistingStacks();
			}
			CreateRuntimeSpawnTemplate();
			PrewarmStacks();
			TrySpawnIntoSlotsByPlacementState(false);
		}
		MarkInitialPlayerStacksCompleted();
	}

	public bool TryRecycleEmptyStack(HexStack stack)
	{
		if (stack == null || !runtimePooledStacks.Contains(stack))
		{
			return false;
		}
		pendingPlacementStacks.Remove(stack);
		stack.SetCurrentFloor(null);
		HexStack fallbackPrefab = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
		HexPoolService poolService = PoolService;
		if (poolService != null && fallbackPrefab != null && poolService.ReturnStack(stack, fallbackPrefab))
		{
			return true;
		}
		stack.gameObject.SetActive(false);
		return true;
	}

	public void NotifyStackPlaced(HexStack stack)
	{
		if (stack != null)
		{
			pendingPlacementStacks.Remove(stack);
		}
		TrySpawnIntoSlotsByPlacementState(true);
	}

	public void FillFloorsWithConfiguredStacks(IReadOnlyList<HexFloor> floors)
	{
		if (floors == null || floors.Count == 0)
		{
			return;
		}
		HexConfig hexConfig = HexConfig;
		if (hexConfig == null || hexConfig.colors == null || hexConfig.colors.Length == 0)
		{
			return;
		}
		int activePaletteColorCount = GetActivePaletteColorCount(hexConfig.colors);
		if (activePaletteColorCount < 2)
		{
			UnityEngine.Debug.LogWarning("[HexStacksCreator] At least 2 colors are required for generated floor stacks.");
			return;
		}
		CleanupTrackedStacks();
		CreateRuntimeSpawnTemplate();
		PrewarmStacks();
		ClearStacksPlacedOnFloors();
		HexStack prefab = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
		if (prefab == null)
		{
			return;
		}
		HashSet<long> noSpawnCoords = BuildNoSpawnCoordSet(hexConfig);
		List<HexFloor> spawnFloors = CollectSpawnFloors(floors, noSpawnCoords);
		if (spawnFloors.Count == 0)
		{
			return;
		}
		if (!TryBuildTopColorAssignment(spawnFloors, activePaletteColorCount, out var topColorByFloor))
		{
			UnityEngine.Debug.LogWarning("[HexStacksCreator] Unable to assign top colors without neighbor duplicates.");
			return;
		}
		int createdCount = 0;
		for (int i = 0; i < spawnFloors.Count; i++)
		{
			HexFloor floor = spawnFloors[i];
			if (!(floor == null) && topColorByFloor.TryGetValue(floor, out var topColorId) && SpawnConfiguredFloorStack(floor, prefab, topColorId, activePaletteColorCount))
			{
				createdCount++;
			}
		}
	}

	private void TrySpawnIntoSlotsByPlacementState(bool respectRespawnToggle)
	{
		if ((!respectRespawnToggle || respawnWhenAllPlaced) && (!spawnSlotsOnlyOnce || !hasSpawnedStacks) && AreAllPendingStacksPlacedOnFloor())
		{
			int spawnedCount = SpawnStacksIntoSlots();
			if (spawnedCount > 0)
			{
				hasSpawnedStacks = true;
			}
		}
	}

	public HexTile ResolveTileTemplateForPool()
	{
		HexStack sourceStack = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
		return (sourceStack != null) ? sourceStack.GetTileTemplateForPool() : null;
	}

	[ContextMenu("Clear Existing Stacks")]
	public void ClearExistingStacks()
	{
		Transform root = ((stacksRoot != null) ? stacksRoot : base.transform);
		if (root == null)
		{
			return;
		}
		HexStack[] stacks = root.GetComponentsInChildren<HexStack>(true);
		foreach (HexStack stack in stacks)
		{
			if (!(stack == null))
			{
				HexFloor floor = stack.CurrentFloor;
				if (floor != null)
				{
					floor.ClearOccupiedStack(stack);
					stack.SetCurrentFloor(null);
				}
				stack.gameObject.SetActive(false);
				if (Application.isPlaying)
				{
					Object.Destroy(stack.gameObject);
				}
				else
				{
					Object.DestroyImmediate(stack.gameObject);
				}
			}
		}
		pendingPlacementStacks.Clear();
		runtimePooledStacks.Clear();
		hasSpawnedStacks = false;
	}

	private bool AreAllPendingStacksPlacedOnFloor()
	{
		CleanupPendingPlacementStacks();
		return pendingPlacementStacks.Count == 0;
	}

	private int SpawnStacksIntoSlots()
	{
		HexStack prefab = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
		if (prefab == null || stackSlots == null || stackSlots.Length == 0)
		{
			return 0;
		}
		Transform root = ((stacksRoot != null) ? stacksRoot : base.transform);
		int spawnedCount = 0;
		for (int i = 0; i < stackSlots.Length; i++)
		{
			Transform slot = stackSlots[i];
			if (!(slot == null) && !IsSlotOccupied(slot))
			{
				HexStack spawnedStack = RentStack(prefab, slot.position, slot.rotation, root);
				if (!(spawnedStack == null))
				{
					ApplyContext(spawnedStack);
					spawnedStack.gameObject.SetActive(true);
					spawnedStack.transform.SetPositionAndRotation(slot.position, slot.rotation);
					spawnedStack.SetCurrentFloor(null);
					spawnedStack.CreateStack(GetPlayerStackColorIds());
					runtimePooledStacks.Add(spawnedStack);
					RegisterPendingPlacementStack(spawnedStack);
					spawnedCount++;
				}
			}
		}
		return spawnedCount;
	}

	private int[] GetPlayerStackColorIds()
	{
		HexConfig hexConfig = HexConfig;
		int activePaletteColorCount = GetActivePaletteColorCount((hexConfig != null) ? hexConfig.colors : null);
		if (activePaletteColorCount <= 0)
		{
			return null;
		}
		if (hexConfig != null && hexConfig.generatePlayerStacksByFivePlusFive && TryBuildFivePlusFiveColorIds(activePaletteColorCount, out var fivePlusFiveColorIds))
		{
			return fivePlusFiveColorIds;
		}
		return GetRandomPresetColorIds(activePaletteColorCount);
	}

	private int[] GetRandomPresetColorIds(int activePaletteColorCount)
	{
		HexConfig hexConfig = HexConfig;
		if (activePaletteColorCount <= 0 || hexConfig == null || hexConfig.startStackColors == null || hexConfig.startStackColors.Length == 0)
		{
			return null;
		}
		int startIndex = Random.Range(0, hexConfig.startStackColors.Length);
		for (int i = 0; i < hexConfig.startStackColors.Length; i++)
		{
			HexConfig.StackColorPreset preset = hexConfig.startStackColors[(startIndex + i) % hexConfig.startStackColors.Length];
			if (preset != null && preset.colorIdsBottomToTop != null && preset.colorIdsBottomToTop.Length != 0)
			{
				return NormalizePresetColorIds(preset.colorIdsBottomToTop, activePaletteColorCount);
			}
		}
		return null;
	}

	private bool TryBuildFivePlusFiveColorIds(int activePaletteColorCount, out int[] colorIdsBottomToTop)
	{
		colorIdsBottomToTop = null;
		if (activePaletteColorCount <= 0)
		{
			return false;
		}
		int bottomColorId = Random.Range(0, activePaletteColorCount);
		int topColorId = bottomColorId;
		if (activePaletteColorCount > 1)
		{
			topColorId = Random.Range(0, activePaletteColorCount - 1);
			if (topColorId >= bottomColorId)
			{
				topColorId++;
			}
		}
		int tileCount = 10;
		colorIdsBottomToTop = new int[tileCount];
		for (int j = 0; j < 5; j++)
		{
			colorIdsBottomToTop[j] = bottomColorId;
		}
		for (int i = 5; i < tileCount; i++)
		{
			colorIdsBottomToTop[i] = topColorId;
		}
		return true;
	}

	private HexStack RentStack(HexStack prefab, Vector3 position, Quaternion rotation, Transform parent)
	{
		HexPoolService poolService = PoolService;
		if (poolService != null)
		{
			HexStack pooledStack = poolService.RentStack(prefab, position, rotation, parent);
			if (pooledStack != null)
			{
				return pooledStack;
			}
		}
		return Object.Instantiate(prefab, position, rotation, parent);
	}

	private void RegisterPendingPlacementStack(HexStack stack)
	{
		if (!(stack == null) && stack.gameObject.activeInHierarchy && !(stack.CurrentFloor != null))
		{
			pendingPlacementStacks.Add(stack);
		}
	}

	private void CleanupPendingPlacementStacks()
	{
		pendingPlacementStacks.RemoveWhere((HexStack stack) => stack == null || !stack.gameObject.activeInHierarchy || stack.CurrentFloor != null);
	}

	private bool IsSlotOccupied(Transform slot)
	{
		if (slot == null)
		{
			return true;
		}
		float safeRadius = Mathf.Max(0.01f, slotOccupancyRadius);
		float maxSqrDistance = safeRadius * safeRadius;
		Vector3 slotPosition = slot.position;
		foreach (HexStack stack in HexStack.ActiveStacks)
		{
			if (!(stack == null) && stack.gameObject.activeInHierarchy && stack.TileCount != 0 && !(stack.CurrentFloor != null))
			{
				Vector3 delta = stack.transform.position - slotPosition;
				delta.y = 0f;
				if (delta.sqrMagnitude <= maxSqrDistance)
				{
					return true;
				}
			}
		}
		return false;
	}

	private void CreateRuntimeSpawnTemplate()
	{
		if (!(runtimeSpawnTemplate != null) && !(spawnStackPrefab == null))
		{
			runtimeSpawnTemplate = Object.Instantiate(spawnStackPrefab, base.transform);
			ApplyContext(runtimeSpawnTemplate);
			runtimeSpawnTemplate.gameObject.SetActive(false);
			runtimeSpawnTemplate.name = spawnStackPrefab.name + "_RuntimeTemplate";
		}
	}

	private void PrewarmStacks()
	{
		HexPoolService poolService = PoolService;
		if (!(poolService == null))
		{
			HexStack prefab = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
			if (!(prefab == null))
			{
				poolService.PrewarmStacks(prefab);
			}
		}
	}

	private void CleanupTrackedStacks()
	{
		pendingPlacementStacks.RemoveWhere((HexStack stack) => stack == null);
		runtimePooledStacks.RemoveWhere((HexStack stack) => stack == null);
	}

	private void ClearStacksPlacedOnFloors()
	{
		stackQueryBuffer.Clear();
		foreach (HexStack stack in HexStack.ActiveStacks)
		{
			if (!(stack == null) && !(stack == runtimeSpawnTemplate) && !(stack.CurrentFloor == null))
			{
				stackQueryBuffer.Add(stack);
			}
		}
		for (int i = 0; i < stackQueryBuffer.Count; i++)
		{
			DespawnStack(stackQueryBuffer[i]);
		}
	}

	private void DespawnStack(HexStack stack)
	{
		if (stack == null)
		{
			return;
		}
		HexFloor floor = stack.CurrentFloor;
		if (floor != null)
		{
			floor.ClearOccupiedStack(stack);
			stack.SetCurrentFloor(null);
		}
		pendingPlacementStacks.Remove(stack);
		runtimePooledStacks.Remove(stack);
		HexStack fallbackPrefab = ((runtimeSpawnTemplate != null) ? runtimeSpawnTemplate : spawnStackPrefab);
		HexPoolService poolService = PoolService;
		if (!(poolService != null) || !(fallbackPrefab != null) || !poolService.ReturnStack(stack, fallbackPrefab))
		{
			if (Application.isPlaying)
			{
				Object.Destroy(stack.gameObject);
			}
			else
			{
				Object.DestroyImmediate(stack.gameObject);
			}
		}
	}

	private List<HexFloor> CollectSpawnFloors(IReadOnlyList<HexFloor> floors, HashSet<long> noSpawnCoords)
	{
		List<HexFloor> result = new List<HexFloor>();
		for (int i = 0; i < floors.Count; i++)
		{
			HexFloor floor = floors[i];
			if (!(floor == null) && !noSpawnCoords.Contains(BuildCoordKey(floor.GridX, floor.GridZ)) && !(floor.OccupiedStack != null))
			{
				result.Add(floor);
			}
		}
		return result;
	}

	private bool SpawnConfiguredFloorStack(HexFloor floor, HexStack prefab, int topColorId, int activePaletteColorCount)
	{
		if (floor == null || prefab == null || activePaletteColorCount <= 0)
		{
			return false;
		}
		int bottomColorId = ResolveBottomColorId(topColorId, activePaletteColorCount);
		int totalTileCount = 10;
		int[] colorIds = new int[totalTileCount];
		for (int i = 0; i < 5 && i < totalTileCount; i++)
		{
			colorIds[i] = bottomColorId;
		}
		for (int j = 5; j < totalTileCount; j++)
		{
			colorIds[j] = topColorId;
		}
		Quaternion rotation = ((floor.StackAnchor != null) ? floor.StackAnchor.rotation : floor.transform.rotation);
		Vector3 position = floor.GetStackPlacementPosition(prefab.transform.position.y);
		HexStack stack = RentStack(prefab, position, rotation, floor.transform);
		if (stack == null)
		{
			return false;
		}
		ApplyContext(stack);
		stack.gameObject.SetActive(true);
		stack.transform.SetPositionAndRotation(position, rotation);
		stack.SetCurrentFloor(floor);
		floor.SetOccupiedStack(stack);
		stack.CreateStack(colorIds);
		runtimePooledStacks.Add(stack);
		pendingPlacementStacks.Remove(stack);
		return true;
	}

	private int ResolveBottomColorId(int topColorId, int paletteLength)
	{
		if (paletteLength <= 1)
		{
			return Mathf.Clamp(topColorId, 0, Mathf.Max(0, paletteLength - 1));
		}
		int randomOffset = Random.Range(1, paletteLength);
		return (Mathf.Max(0, topColorId) + randomOffset) % paletteLength;
	}

	private int GetActivePaletteColorCount(Color[] palette)
	{
		if (palette == null || palette.Length == 0)
		{
			return 0;
		}
		HexConfig hexConfig = HexConfig;
		int configuredCount = ((hexConfig != null) ? hexConfig.paletteColorCount : 0);
		if (configuredCount <= 0)
		{
			return palette.Length;
		}
		return Mathf.Clamp(configuredCount, 1, palette.Length);
	}

	private static int[] NormalizePresetColorIds(int[] presetColorIds, int colorCount)
	{
		if (presetColorIds == null || presetColorIds.Length == 0 || colorCount <= 0)
		{
			return null;
		}
		int[] normalized = new int[presetColorIds.Length];
		for (int i = 0; i < presetColorIds.Length; i++)
		{
			normalized[i] = NormalizeColorId(presetColorIds[i], colorCount);
		}
		return normalized;
	}

	private static int NormalizeColorId(int colorId, int colorCount)
	{
		if (colorCount <= 0)
		{
			return -1;
		}
		int normalized = colorId % colorCount;
		if (normalized < 0)
		{
			normalized += colorCount;
		}
		return normalized;
	}

	private bool TryBuildTopColorAssignment(List<HexFloor> spawnFloors, int colorCount, out Dictionary<HexFloor, int> topColorByFloor)
	{
		topColorByFloor = new Dictionary<HexFloor, int>();
		if (spawnFloors == null || spawnFloors.Count == 0)
		{
			return true;
		}
		if (colorCount <= 0)
		{
			return false;
		}
		HashSet<HexFloor> spawnSet = new HashSet<HexFloor>(spawnFloors);
		return AssignTopColorsRecursive(spawnFloors, spawnSet, topColorByFloor, colorCount);
	}

	private bool AssignTopColorsRecursive(List<HexFloor> spawnFloors, HashSet<HexFloor> spawnSet, Dictionary<HexFloor, int> assignedColors, int colorCount)
	{
		if (assignedColors.Count >= spawnFloors.Count)
		{
			return true;
		}
		HexFloor selectedFloor = null;
		List<int> selectedAvailableColors = null;
		int selectedNeighborCount = -1;
		for (int i = 0; i < spawnFloors.Count; i++)
		{
			HexFloor floor = spawnFloors[i];
			if (!(floor == null) && !assignedColors.ContainsKey(floor))
			{
				List<int> availableColors = GetAvailableTopColors(floor, spawnSet, assignedColors, colorCount);
				if (availableColors.Count == 0)
				{
					return false;
				}
				int neighborCount = GetSpawnNeighborCount(floor, spawnSet);
				if (selectedFloor == null || availableColors.Count < selectedAvailableColors.Count || (availableColors.Count == selectedAvailableColors.Count && neighborCount > selectedNeighborCount))
				{
					selectedFloor = floor;
					selectedAvailableColors = availableColors;
					selectedNeighborCount = neighborCount;
				}
			}
		}
		if (selectedFloor == null || selectedAvailableColors == null || selectedAvailableColors.Count == 0)
		{
			return false;
		}
		int startIndex = Random.Range(0, selectedAvailableColors.Count);
		for (int j = 0; j < selectedAvailableColors.Count; j++)
		{
			int colorId = (assignedColors[selectedFloor] = selectedAvailableColors[(startIndex + j) % selectedAvailableColors.Count]);
			if (AssignTopColorsRecursive(spawnFloors, spawnSet, assignedColors, colorCount))
			{
				return true;
			}
			assignedColors.Remove(selectedFloor);
		}
		return false;
	}

	private List<int> GetAvailableTopColors(HexFloor floor, HashSet<HexFloor> spawnSet, Dictionary<HexFloor, int> assignedColors, int colorCount)
	{
		bool[] forbidden = new bool[colorCount];
		for (int side = 0; side < 6; side++)
		{
			HexFloor neighbor = floor.GetNeighborBySide(side);
			if (!(neighbor == null) && spawnSet.Contains(neighbor) && assignedColors.TryGetValue(neighbor, out var neighborColorId) && neighborColorId >= 0 && neighborColorId < colorCount)
			{
				forbidden[neighborColorId] = true;
			}
		}
		List<int> available = new List<int>();
		for (int colorId = 0; colorId < colorCount; colorId++)
		{
			if (!forbidden[colorId])
			{
				available.Add(colorId);
			}
		}
		return available;
	}

	private static int GetSpawnNeighborCount(HexFloor floor, HashSet<HexFloor> spawnSet)
	{
		if (floor == null || spawnSet == null || spawnSet.Count == 0)
		{
			return 0;
		}
		int count = 0;
		for (int side = 0; side < 6; side++)
		{
			HexFloor neighbor = floor.GetNeighborBySide(side);
			if (neighbor != null && spawnSet.Contains(neighbor))
			{
				count++;
			}
		}
		return count;
	}

	private static HashSet<long> BuildNoSpawnCoordSet(HexConfig config)
	{
		HashSet<long> blockedCoords = new HashSet<long>();
		if (config == null || config.noStackSpawnCoords == null)
		{
			return blockedCoords;
		}
		for (int i = 0; i < config.noStackSpawnCoords.Length; i++)
		{
			HexConfig.FloorCoord coord = config.noStackSpawnCoords[i];
			blockedCoords.Add(BuildCoordKey(coord.x, coord.z));
		}
		return blockedCoords;
	}

	private static long BuildCoordKey(int x, int z)
	{
		return ((long)x << 32) ^ (uint)z;
	}

	[Conditional("UNITY_EDITOR")]
	[Conditional("DEVELOPMENT_BUILD")]
	private void LogGeneratedFloorFill(string message)
	{
		if (logGeneratedFill)
		{
			UnityEngine.Debug.Log("[HexStacksCreator] " + message, this);
		}
	}

	private void ApplyContext(HexStack stack)
	{
		if (!(stack == null))
		{
			stack.SetGameContext(gameContext);
		}
	}

	private void MarkInitialPlayerStacksCompleted()
	{
		if (!InitialPlayerStacksCompleted)
		{
			InitialPlayerStacksCompleted = true;
		}
	}

	[Conditional("UNITY_EDITOR")]
	[Conditional("DEVELOPMENT_BUILD")]
	private void LogStacksCreator(string message)
	{
		if (debugLogs)
		{
			UnityEngine.Debug.Log("[HexStacksCreator] " + message, this);
		}
	}
}

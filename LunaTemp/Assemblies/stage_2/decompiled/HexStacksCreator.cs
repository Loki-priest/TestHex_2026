using System.Collections.Generic;
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

	private readonly HashSet<HexStack> pendingPlacementStacks = new HashSet<HexStack>();

	private readonly HashSet<HexStack> runtimePooledStacks = new HashSet<HexStack>();

	private HexStack runtimeSpawnTemplate;

	private bool hasSpawnedStacks;

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
	}

	public bool TryRecycleEmptyStack(HexStack stack)
	{
		if (stack == null || !runtimePooledStacks.Contains(stack))
		{
			return false;
		}
		pendingPlacementStacks.Remove(stack);
		stack.SetCurrentFloor(null);
		if (stack.GetComponent<HexDragger>() == null)
		{
			runtimePooledStacks.Remove(stack);
			Object.Destroy(stack.gameObject);
			return true;
		}
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
					spawnedStack.CreateStack(GetRandomPresetColors());
					runtimePooledStacks.Add(spawnedStack);
					RegisterPendingPlacementStack(spawnedStack);
					spawnedCount++;
				}
			}
		}
		return spawnedCount;
	}

	private Material[] GetRandomPresetColors()
	{
		HexConfig hexConfig = HexConfig;
		if (hexConfig == null || hexConfig.startStackColors == null || hexConfig.startStackColors.Length == 0)
		{
			return null;
		}
		int startIndex = Random.Range(0, hexConfig.startStackColors.Length);
		for (int i = 0; i < hexConfig.startStackColors.Length; i++)
		{
			HexConfig.StackColorPreset preset = hexConfig.startStackColors[(startIndex + i) % hexConfig.startStackColors.Length];
			if (preset != null && preset.colorsBottomToTop != null && preset.colorsBottomToTop.Length != 0)
			{
				return preset.colorsBottomToTop;
			}
		}
		return null;
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
		HexStack[] allStacks = Object.FindObjectsOfType<HexStack>();
		foreach (HexStack stack in allStacks)
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

	private void ApplyContext(HexStack stack)
	{
		if (!(stack == null))
		{
			stack.SetGameContext(gameContext);
			HexDragger dragger = stack.GetComponent<HexDragger>();
			if (dragger != null)
			{
				dragger.SetGameContext(gameContext);
			}
		}
	}
}

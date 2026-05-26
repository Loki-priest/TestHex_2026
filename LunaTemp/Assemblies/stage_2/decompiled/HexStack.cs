using System;
using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
public class HexStack : MonoBehaviour
{
	private static readonly HashSet<HexStack> ActiveStackSet = new HashSet<HexStack>();

	[SerializeField]
	private List<HexTile> hexTiles = new List<HexTile>();

	private HexGameContext gameContext;

	private HexFloor currentFloor;

	[SerializeField]
	private HexTile tileTemplate;

	[SerializeField]
	private Transform anchorPos;

	[SerializeField]
	private float tileStep = 0.07f;

	[SerializeField]
	private Vector3 tileBaseLocalPosition = Vector3.zero;

	[SerializeField]
	private bool hideWhenEmpty = true;

	private bool stackInitialized;

	public HexFloor CurrentFloor => currentFloor;

	public HexGameContext GameContext => gameContext;

	public static IEnumerable<HexStack> ActiveStacks => ActiveStackSet;

	public int TileCount
	{
		get
		{
			CompactNullTiles();
			return hexTiles.Count;
		}
	}

	private void Awake()
	{
		EnsureTilesInitializedFromChildren();
		CacheGeometryFromTiles();
	}

	private void OnEnable()
	{
		ActiveStackSet.Add(this);
	}

	private void OnDisable()
	{
		ActiveStackSet.Remove(this);
	}

	private void Start()
	{
		if (!stackInitialized)
		{
			CreateStack();
		}
		RefreshVisibilityAndBinding();
	}

	public void CreateStack(int[] colorIdsBottomToTop = null)
	{
		EnsureTilesInitializedFromChildren();
		bool hasPreset = colorIdsBottomToTop != null && colorIdsBottomToTop.Length != 0;
		Color[] palette = null;
		HexConfig config = ((gameContext != null) ? gameContext.Config : null);
		if (config == null || config.colors == null || config.colors.Length == 0)
		{
			return;
		}
		palette = config.colors;
		int activePaletteColorCount = ResolveActivePaletteColorCount(config, palette.Length);
		if (activePaletteColorCount <= 0 || (hasPreset && !EnsureTileCount(colorIdsBottomToTop.Length)))
		{
			return;
		}
		CompactNullTiles();
		for (int i = 0; i < hexTiles.Count; i++)
		{
			int tileColorId = ResolveTileColorIdForIndex(i, colorIdsBottomToTop, activePaletteColorCount);
			if (tileColorId >= 0 && tileColorId < palette.Length)
			{
				hexTiles[i].gameObject.SetActive(true);
				hexTiles[i].SetColor(tileColorId, palette[tileColorId]);
			}
		}
		stackInitialized = true;
		AlignTilesToAnchor();
		RefreshVisibilityAndBinding();
	}

	public void SetCurrentFloor(HexFloor floor)
	{
		currentFloor = floor;
	}

	public void SetGameContext(HexGameContext context)
	{
		gameContext = context;
	}

	public HexTile GetTileTemplateForPool()
	{
		return ResolveTileTemplate();
	}

	public HexTile GetTopTile()
	{
		CompactNullTiles();
		if (hexTiles.Count == 0)
		{
			return null;
		}
		return hexTiles[hexTiles.Count - 1];
	}

	public int GetTopColorId()
	{
		HexTile topTile = GetTopTile();
		return (topTile != null) ? topTile.ColorIdValue : (-1);
	}

	public int CountTopTilesWithColorId(int colorId)
	{
		if (colorId < 0)
		{
			return 0;
		}
		CompactNullTiles();
		int count = 0;
		for (int i = hexTiles.Count - 1; i >= 0; i--)
		{
			HexTile tile = hexTiles[i];
			if (tile == null || tile.ColorIdValue != colorId)
			{
				break;
			}
			count++;
		}
		return count;
	}

	public HexTile PopTopTile()
	{
		CompactNullTiles();
		if (hexTiles.Count == 0)
		{
			return null;
		}
		int topIndex = hexTiles.Count - 1;
		HexTile topTile = hexTiles[topIndex];
		hexTiles.RemoveAt(topIndex);
		if (topTile != null)
		{
			topTile.transform.SetParent(null, true);
		}
		RefreshVisibilityAndBinding();
		return topTile;
	}

	public void PushTopTile(HexTile tile)
	{
		if (!(tile == null))
		{
			CompactNullTiles();
			tile.transform.SetParent(base.transform, true);
			tile.transform.localPosition = GetLocalPositionForIndex(hexTiles.Count);
			hexTiles.Add(tile);
			RefreshVisibilityAndBinding();
		}
	}

	public Vector3 GetNextTopWorldPosition()
	{
		CompactNullTiles();
		Vector3 localPosition = GetLocalPositionForIndex(hexTiles.Count);
		return base.transform.TransformPoint(localPosition);
	}

	public Vector3 GetWorldPositionForTileIndex(int index)
	{
		index = Mathf.Max(0, index);
		Vector3 localPosition = GetLocalPositionForIndex(index);
		return base.transform.TransformPoint(localPosition);
	}

	private void CacheGeometryFromTiles()
	{
		if (anchorPos != null)
		{
			tileBaseLocalPosition = base.transform.InverseTransformPoint(anchorPos.position);
			return;
		}
		CompactNullTiles();
		if (hexTiles.Count != 0)
		{
			tileBaseLocalPosition = hexTiles[0].transform.localPosition;
		}
	}

	private Vector3 GetLocalPositionForIndex(int index)
	{
		return GetAnchorBaseLocalPosition() + Vector3.up * (tileStep * (float)index);
	}

	private bool EnsureTileCount(int targetCount)
	{
		targetCount = Mathf.Max(0, targetCount);
		CompactNullTiles();
		HexTile fallbackTemplate = ResolveTileTemplate();
		HexManager manager = ((gameContext != null) ? gameContext.Manager : null);
		while (hexTiles.Count > targetCount)
		{
			int lastIndex = hexTiles.Count - 1;
			HexTile tile = hexTiles[lastIndex];
			hexTiles.RemoveAt(lastIndex);
			if (tile != null)
			{
				if (manager != null)
				{
					manager.ReturnTile(tile, fallbackTemplate);
				}
				else
				{
					UnityEngine.Object.Destroy(tile.gameObject);
				}
			}
		}
		if (hexTiles.Count == targetCount)
		{
			return true;
		}
		HexTile template = ResolveTileTemplate();
		if (template == null)
		{
			return false;
		}
		while (hexTiles.Count < targetCount)
		{
			HexTile createdTile = ((manager != null) ? manager.RentTile(template, base.transform) : UnityEngine.Object.Instantiate(template, base.transform));
			if (createdTile == null)
			{
				break;
			}
			createdTile.gameObject.name = template.gameObject.name;
			hexTiles.Add(createdTile);
		}
		RefreshVisibilityAndBinding();
		return hexTiles.Count == targetCount;
	}

	private HexTile ResolveTileTemplate()
	{
		if (tileTemplate != null)
		{
			return tileTemplate;
		}
		CompactNullTiles();
		if (hexTiles.Count > 0 && hexTiles[0] != null)
		{
			tileTemplate = hexTiles[0];
			return tileTemplate;
		}
		tileTemplate = GetComponentInChildren<HexTile>(true);
		return tileTemplate;
	}

	private void CompactNullTiles()
	{
		for (int i = hexTiles.Count - 1; i >= 0; i--)
		{
			if (hexTiles[i] == null)
			{
				hexTiles.RemoveAt(i);
			}
		}
	}

	private void EnsureTilesInitializedFromChildren()
	{
		CompactNullTiles();
		if (hexTiles.Count > 0)
		{
			return;
		}
		HexTile[] childTiles = GetComponentsInChildren<HexTile>(true);
		if (childTiles == null || childTiles.Length == 0)
		{
			return;
		}
		Array.Sort(childTiles, delegate(HexTile left, HexTile right)
		{
			if (left == null && right == null)
			{
				return 0;
			}
			if (left == null)
			{
				return 1;
			}
			return (right == null) ? (-1) : left.transform.localPosition.y.CompareTo(right.transform.localPosition.y);
		});
		foreach (HexTile tile in childTiles)
		{
			if (!(tile == null))
			{
				hexTiles.Add(tile);
			}
		}
	}

	private Vector3 GetAnchorBaseLocalPosition()
	{
		if (anchorPos != null)
		{
			return base.transform.InverseTransformPoint(anchorPos.position);
		}
		return tileBaseLocalPosition;
	}

	private void AlignTilesToAnchor()
	{
		CompactNullTiles();
		for (int i = 0; i < hexTiles.Count; i++)
		{
			HexTile tile = hexTiles[i];
			if (!(tile == null))
			{
				tile.transform.localPosition = GetLocalPositionForIndex(i);
				tile.transform.localRotation = Quaternion.identity;
			}
		}
	}

	private static int ResolveTileColorIdForIndex(int index, int[] presetColorIds, int paletteLength)
	{
		if (paletteLength <= 0)
		{
			return -1;
		}
		if (presetColorIds != null && index < presetColorIds.Length)
		{
			int presetColorId = presetColorIds[index];
			if (presetColorId >= 0 && presetColorId < paletteLength)
			{
				return presetColorId;
			}
		}
		return UnityEngine.Random.Range(0, paletteLength);
	}

	private static int ResolveActivePaletteColorCount(HexConfig config, int paletteLength)
	{
		if (paletteLength <= 0)
		{
			return 0;
		}
		int configuredCount = ((config != null) ? config.paletteColorCount : 0);
		if (configuredCount <= 0)
		{
			return paletteLength;
		}
		return Mathf.Clamp(configuredCount, 1, paletteLength);
	}

	private void RefreshVisibilityAndBinding()
	{
		CompactNullTiles();
		bool hasTiles = hexTiles.Count > 0;
		if (!hasTiles)
		{
			DetachFromFloor();
			HexManager manager = ((gameContext != null) ? gameContext.Manager : null);
			if (manager != null && manager.TryRecycleEmptyStack(this))
			{
				return;
			}
		}
		if (hideWhenEmpty && base.gameObject.activeSelf != hasTiles)
		{
			base.gameObject.SetActive(hasTiles);
		}
	}

	private void DetachFromFloor()
	{
		if (currentFloor != null)
		{
			currentFloor.ClearOccupiedStack(this);
			currentFloor = null;
		}
		foreach (HexFloor floor in HexFloor.ActiveFloors)
		{
			if (!(floor == null))
			{
				floor.ClearOccupiedStack(this);
			}
		}
	}
}

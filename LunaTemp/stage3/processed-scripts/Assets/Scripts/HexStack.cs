using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
public class HexStack : MonoBehaviour
{
    [SerializeField] private List<HexTile> hexTiles = new System.Collections.Generic.List<HexTile>();
    private HexGameContext gameContext;
    private HexFloor currentFloor;
    [SerializeField] private HexTile tileTemplate;
    [SerializeField] private Transform anchorPos;
    [SerializeField] private float tileStep = 0.07f;
    [SerializeField] private Vector3 tileBaseLocalPosition = Vector3.zero;
    [SerializeField] private bool hideWhenEmpty = true;
    private bool stackInitialized;

    public HexFloor CurrentFloor => currentFloor;
    public HexGameContext GameContext => gameContext;
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

    private void Start()
    {
        if (!stackInitialized)
        {
            CreateStack();
        }

        RefreshVisibilityAndBinding();
    }

    public void CreateStack(Material[] colorsBottomToTop = null)
    {
        EnsureTilesInitializedFromChildren();

        bool hasPreset = colorsBottomToTop != null && colorsBottomToTop.Length > 0;
        Material[] randomColors = null;

        if (!hasPreset)
        {
            HexConfig config = gameContext != null ? gameContext.Config : null;
            if (config == null)
            {
                return;
            }

            randomColors = config.colors;
        }

        if (!hasPreset && (randomColors == null || randomColors.Length == 0))
        {
            return;
        }

        if (hasPreset && !EnsureTileCount(colorsBottomToTop.Length))
        {
            return;
        }

        CompactNullTiles();
        for (int i = 0; i < hexTiles.Count; i++)
        {
            Material tileMaterial = ResolveTileMaterialForIndex(i, colorsBottomToTop, randomColors);

            if (tileMaterial != null)
            {
                hexTiles[i].gameObject.SetActive(true);
                hexTiles[i].SetMaterial(tileMaterial);
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

    public Material GetTopMaterial()
    {
        HexTile topTile = GetTopTile();
        return topTile != null ? topTile.CurrentMaterial : null;
    }

    public int CountTopTilesWithMaterial(Material material)
    {
        if (material == null)
        {
            return 0;
        }

        CompactNullTiles();

        int count = 0;
        for (int i = hexTiles.Count - 1; i >= 0; i--)
        {
            HexTile tile = hexTiles[i];
            if (tile == null || tile.CurrentMaterial != material)
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
        if (tile == null)
        {
            return;
        }

        CompactNullTiles();

        tile.transform.SetParent(transform, true);
        tile.transform.localPosition = GetLocalPositionForIndex(hexTiles.Count);
        hexTiles.Add(tile);
        RefreshVisibilityAndBinding();
    }

    public Vector3 GetNextTopWorldPosition()
    {
        CompactNullTiles();
        Vector3 localPosition = GetLocalPositionForIndex(hexTiles.Count);
        return transform.TransformPoint(localPosition);
    }

    public Vector3 GetWorldPositionForTileIndex(int index)
    {
        index = Mathf.Max(0, index);
        Vector3 localPosition = GetLocalPositionForIndex(index);
        return transform.TransformPoint(localPosition);
    }

    private void CacheGeometryFromTiles()
    {
        if (anchorPos != null)
        {
            tileBaseLocalPosition = transform.InverseTransformPoint(anchorPos.position);
            return;
        }

        CompactNullTiles();
        if (hexTiles.Count == 0)
        {
            return;
        }

        tileBaseLocalPosition = hexTiles[0].transform.localPosition;
    }

    private Vector3 GetLocalPositionForIndex(int index)
    {
        return GetAnchorBaseLocalPosition() + Vector3.up * (tileStep * index);
    }

    private bool EnsureTileCount(int targetCount)
    {
        targetCount = Mathf.Max(0, targetCount);
        CompactNullTiles();
        HexTile fallbackTemplate = ResolveTileTemplate();
        HexManager manager = gameContext != null ? gameContext.Manager : null;

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
                    Destroy(tile.gameObject);
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
            HexTile createdTile = manager != null
                ? manager.RentTile(template, transform)
                : Instantiate(template, transform);

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

        System.Array.Sort(childTiles, (left, right) =>
        {
            if (left == null && right == null)
            {
                return 0;
            }

            if (left == null)
            {
                return 1;
            }

            if (right == null)
            {
                return -1;
            }

            return left.transform.localPosition.y.CompareTo(right.transform.localPosition.y);
        });

        for (int i = 0; i < childTiles.Length; i++)
        {
            HexTile tile = childTiles[i];
            if (tile == null)
            {
                continue;
            }

            hexTiles.Add(tile);
        }
    }

    private Vector3 GetAnchorBaseLocalPosition()
    {
        if (anchorPos != null)
        {
            return transform.InverseTransformPoint(anchorPos.position);
        }

        return tileBaseLocalPosition;
    }

    private void AlignTilesToAnchor()
    {
        CompactNullTiles();
        for (int i = 0; i < hexTiles.Count; i++)
        {
            HexTile tile = hexTiles[i];
            if (tile == null)
            {
                continue;
            }

            tile.transform.localPosition = GetLocalPositionForIndex(i);
            tile.transform.localRotation = Quaternion.identity;
        }
    }

    private static Material ResolveTileMaterialForIndex(int index, Material[] presetColors, Material[] randomColors)
    {
        if (presetColors != null && index < presetColors.Length)
        {
            Material presetMaterial = presetColors[index];
            if (presetMaterial != null)
            {
                return presetMaterial;
            }
        }

        if (randomColors == null || randomColors.Length == 0)
        {
            return null;
        }

        return randomColors[Random.Range(0, randomColors.Length)];
    }

    private void RefreshVisibilityAndBinding()
    {
        CompactNullTiles();
        bool hasTiles = hexTiles.Count > 0;

        if (!hasTiles)
        {
            DetachFromFloor();

            HexManager manager = gameContext != null ? gameContext.Manager : null;
            if (manager != null && manager.TryRecycleEmptyStack(this))
            {
                return;
            }
        }

        if (!hideWhenEmpty)
        {
            return;
        }

        if (gameObject.activeSelf != hasTiles)
        {
            gameObject.SetActive(hasTiles);
        }
    }

    private void DetachFromFloor()
    {
        if (currentFloor != null)
        {
            currentFloor.ClearOccupiedStack(this);
            currentFloor = null;
        }

        HexFloor[] allFloors = FindObjectsOfType<HexFloor>();
        for (int i = 0; i < allFloors.Length; i++)
        {
            HexFloor floor = allFloors[i];
            if (floor == null)
            {
                continue;
            }

            floor.ClearOccupiedStack(this);
        }
    }
}

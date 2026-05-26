using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
/// <summary>
/// Представляет одну клетку пола: хранит занятость, соседей и визуал подсветки дропа.
/// </summary>
public class HexFloor : MonoBehaviour
{
    private const int SideCount = 6;
    private static readonly int BaseColorId = Shader.PropertyToID("_BaseColor");
    private static readonly int ColorId = Shader.PropertyToID("_Color");
    private static readonly int EmissionColorId = Shader.PropertyToID("_EmissionColor");
    private static readonly HashSet<HexFloor> ActiveFloorSet = new();

    private List<HexFloor> nearFloors = new();

    [Header("Placement")]
    [SerializeField] private Transform stackAnchor;
    [SerializeField] private int gridX;
    [SerializeField] private int gridZ;

    private HexStack occupiedStack;

    public IReadOnlyList<HexFloor> NearFloors => nearFloors;
    public HexStack OccupiedStack => occupiedStack;
    public Transform StackAnchor => stackAnchor;
    public int GridX => gridX;
    public int GridZ => gridZ;
    public static IEnumerable<HexFloor> ActiveFloors => ActiveFloorSet;

    [Header("Drop Highlight")]
    [SerializeField] private Renderer[] highlightRenderers;
    [SerializeField] private Color dropHighlightColor = new(0.35f, 1f, 0.45f, 1f);
    [SerializeField, Range(0f, 1f)] private float dropHighlightBlend = 0.55f;
    [SerializeField] private bool useEmissionHighlight = true;
    [SerializeField] private Color dropHighlightEmissionColor = new(0.08f, 0.38f, 0.08f, 1f);

    [Header("Search")]
    [SerializeField] private bool autoFindOnAwake = true;
    [SerializeField] private float neighborSearchDistance = 1.25f;
    [SerializeField] private float rayHeight = 0.05f;
    [SerializeField, Min(1)] private int neighborRaycastBufferSize = 12;
    [SerializeField] private LayerMask searchMask = ~0;
    [SerializeField] private float sideDirectionOffsetDegrees = 0f;
    [SerializeField] private HexFloor[] sideNeighbors = new HexFloor[SideCount];

    [Header("Gizmos")]
    [SerializeField] private bool drawSideRays = true;
    [SerializeField] private float gizmoSideOffset = 0.5f;
    [SerializeField] private float gizmoRayLength = 0.5f;
    [SerializeField] private float gizmoSphereRadius = 0.03f;
    [SerializeField] private Color gizmoNoNeighborColor = new(1f, 0.65f, 0f, 0.9f);
    [SerializeField] private Color gizmoNeighborColor = new(0.2f, 1f, 0.3f, 0.9f);

    /// <summary>
    /// Кэш исходных визуальных параметров рендера для корректного включения/выключения подсветки.
    /// </summary>
    private sealed class RendererHighlightState
    {
        public Renderer Renderer;
        public MaterialPropertyBlock PropertyBlock;
        public bool HasColorProperty;
        public int ColorPropertyId;
        public Color BaseColor;
        public bool HasEmissionProperty;
        public Color BaseEmissionColor;
    }

    private readonly List<RendererHighlightState> highlightStates = new();
    private bool isDropHighlighted;
    private RaycastHit[] neighborRaycastBuffer;

    private void Awake()
    {
        CacheHighlightRenderers();
        EnsureNeighborRaycastBuffer();

        if (autoFindOnAwake && GetComponentInParent<HexFloorCreator>() == null)
        {
            FindNearFloors();
        }
    }

    private void OnEnable()
    {
        ActiveFloorSet.Add(this);
    }

    private void OnDisable()
    {
        ActiveFloorSet.Remove(this);
        SetDropHighlight(false);
    }

    [ContextMenu("Auto Find Near Floors")]
    public void FindNearFloors()
    {
        EnsureNeighborStorage();
        nearFloors.Clear();

        for (int sideIndex = 0; sideIndex < SideCount; sideIndex++)
        {
            HexFloor neighbor = FindNeighborForSide(sideIndex);
            sideNeighbors[sideIndex] = neighbor;

            if (neighbor != null && !nearFloors.Contains(neighbor))
            {
                nearFloors.Add(neighbor);
            }
        }
    }

    public HexFloor GetNeighborBySide(int sideIndex)
    {
        if (sideNeighbors == null || sideIndex < 0 || sideIndex >= sideNeighbors.Length)
        {
            return null;
        }

        return sideNeighbors[sideIndex];
    }

    public int GetSideIndexOfNeighbor(HexFloor neighbor)
    {
        if (neighbor == null || sideNeighbors == null)
        {
            return -1;
        }

        for (int i = 0; i < sideNeighbors.Length; i++)
        {
            if (sideNeighbors[i] == neighbor)
            {
                return i;
            }
        }

        return -1;
    }

    public void SetOccupiedStack(HexStack stack)
    {
        occupiedStack = stack;
    }

    public void SetGridCoordinates(int x, int z)
    {
        gridX = x;
        gridZ = z;
    }

    public void ClearOccupiedStack(HexStack stack)
    {
        if (occupiedStack == stack)
        {
            occupiedStack = null;
        }
    }

    public Vector3 GetStackPlacementPosition(float fallbackY)
    {
        if (stackAnchor != null)
        {
            return stackAnchor.position;
        }

        Vector3 placementPosition = transform.position;
        placementPosition.y = fallbackY;
        return placementPosition;
    }

    public void SetDropHighlight(bool enabled)
    {
        if (enabled == isDropHighlighted)
        {
            return;
        }

        isDropHighlighted = enabled;
        if (highlightStates.Count == 0)
        {
            CacheHighlightRenderers();
        }

        for (int i = 0; i < highlightStates.Count; i++)
        {
            RendererHighlightState state = highlightStates[i];
            if (state == null || state.Renderer == null)
            {
                continue;
            }

            MaterialPropertyBlock block = state.PropertyBlock ?? new MaterialPropertyBlock();
            state.PropertyBlock = block;
            state.Renderer.GetPropertyBlock(block);

            if (state.HasColorProperty)
            {
                Color targetColor = enabled
                    ? Color.Lerp(state.BaseColor, dropHighlightColor, Mathf.Clamp01(dropHighlightBlend))
                    : state.BaseColor;
                block.SetColor(state.ColorPropertyId, targetColor);
            }

            if (state.HasEmissionProperty)
            {
                Color targetEmissionColor = enabled && useEmissionHighlight
                    ? dropHighlightEmissionColor
                    : state.BaseEmissionColor;
                block.SetColor(EmissionColorId, targetEmissionColor);
            }

            state.Renderer.SetPropertyBlock(block);
        }
    }

    private void CacheHighlightRenderers()
    {
        highlightStates.Clear();

        Renderer[] renderers = highlightRenderers;
        if (renderers == null || renderers.Length == 0)
        {
            renderers = GetComponentsInChildren<Renderer>(true);
        }

        if (renderers == null || renderers.Length == 0)
        {
            return;
        }

        HashSet<Renderer> uniqueRenderers = new();
        for (int i = 0; i < renderers.Length; i++)
        {
            Renderer renderer = renderers[i];
            if (renderer == null || !uniqueRenderers.Add(renderer))
            {
                continue;
            }

            Material sharedMaterial = renderer.sharedMaterial;
            if (sharedMaterial == null)
            {
                continue;
            }

            RendererHighlightState state = new()
            {
                Renderer = renderer,
                PropertyBlock = new MaterialPropertyBlock()
            };

            if (sharedMaterial.HasProperty(BaseColorId))
            {
                state.HasColorProperty = true;
                state.ColorPropertyId = BaseColorId;
                state.BaseColor = sharedMaterial.GetColor(BaseColorId);
            }
            else if (sharedMaterial.HasProperty(ColorId))
            {
                state.HasColorProperty = true;
                state.ColorPropertyId = ColorId;
                state.BaseColor = sharedMaterial.GetColor(ColorId);
            }

            if (sharedMaterial.HasProperty(EmissionColorId))
            {
                state.HasEmissionProperty = true;
                state.BaseEmissionColor = sharedMaterial.GetColor(EmissionColorId);
            }

            if (!state.HasColorProperty && !state.HasEmissionProperty)
            {
                continue;
            }

            highlightStates.Add(state);
        }
    }

    private HexFloor FindNeighborForSide(int sideIndex)
    {
        Vector3 direction = GetSideDirection(sideIndex);
        Vector3 origin = GetRayOrigin();
        EnsureNeighborRaycastBuffer();
        int hitCount = Physics.RaycastNonAlloc(
            origin,
            direction,
            neighborRaycastBuffer,
            neighborSearchDistance,
            searchMask,
            QueryTriggerInteraction.Ignore
        );

        // NonAlloc can silently truncate hits when the buffer is full.
        // In that case, fall back to RaycastAll to avoid intermittent missing neighbors.
        if (hitCount >= neighborRaycastBuffer.Length)
        {
            RaycastHit[] allHits = Physics.RaycastAll(
                origin,
                direction,
                neighborSearchDistance,
                searchMask,
                QueryTriggerInteraction.Ignore
            );
            return GetNearestFloorFromHits(allHits, allHits.Length);
        }

        return GetNearestFloorFromHits(neighborRaycastBuffer, hitCount);
    }

    private HexFloor GetNearestFloorFromHits(RaycastHit[] hits, int hitCount)
    {
        if (hits == null || hitCount <= 0)
        {
            return null;
        }

        float nearestDistance = float.MaxValue;
        HexFloor nearestFloor = null;
        for (int i = 0; i < hitCount; i++)
        {
            RaycastHit hit = hits[i];
            if (hit.collider == null)
            {
                continue;
            }

            HexFloor candidate = hit.collider.GetComponentInParent<HexFloor>();
            if (candidate == null || candidate == this)
            {
                continue;
            }

            if (hit.distance < nearestDistance)
            {
                nearestDistance = hit.distance;
                nearestFloor = candidate;
            }
        }

        return nearestFloor;
    }

    public Vector3 GetSideDirection(int sideIndex)
    {
        float angle = sideDirectionOffsetDegrees + sideIndex * 60f;
        Vector3 direction = Quaternion.AngleAxis(angle, transform.up) * transform.forward;
        return direction.normalized;
    }

    private Vector3 GetRayOrigin()
    {
        return transform.position + transform.up * rayHeight;
    }

    private void EnsureNeighborStorage()
    {
        if (sideNeighbors == null || sideNeighbors.Length != SideCount)
        {
            sideNeighbors = new HexFloor[SideCount];
        }
    }

    private void EnsureNeighborRaycastBuffer()
    {
        int size = Mathf.Max(1, neighborRaycastBufferSize);
        if (neighborRaycastBuffer != null && neighborRaycastBuffer.Length == size)
        {
            return;
        }

        neighborRaycastBuffer = new RaycastHit[size];
    }

    private void OnDrawGizmosSelected()
    {
        if (!drawSideRays)
        {
            return;
        }

        Vector3 origin = GetRayOrigin();

        for (int sideIndex = 0; sideIndex < SideCount; sideIndex++)
        {
            Vector3 direction = GetSideDirection(sideIndex);
            Vector3 rayStart = origin + direction * gizmoSideOffset;
            Vector3 rayEnd = rayStart + direction * gizmoRayLength;

            HexFloor neighbor = GetNeighborBySide(sideIndex);
            Gizmos.color = neighbor != null ? gizmoNeighborColor : gizmoNoNeighborColor;
            Gizmos.DrawLine(rayStart, rayEnd);
            Gizmos.DrawSphere(rayStart, gizmoSphereRadius);
        }
    }
}

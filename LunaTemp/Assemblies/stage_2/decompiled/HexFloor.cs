using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
public class HexFloor : MonoBehaviour
{
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

	private const int SideCount = 6;

	private static readonly int BaseColorId = Shader.PropertyToID("_BaseColor");

	private static readonly int ColorId = Shader.PropertyToID("_Color");

	private static readonly int EmissionColorId = Shader.PropertyToID("_EmissionColor");

	private static readonly HashSet<HexFloor> ActiveFloorSet = new HashSet<HexFloor>();

	private List<HexFloor> nearFloors = new List<HexFloor>();

	[Header("Placement")]
	[SerializeField]
	private Transform stackAnchor;

	[SerializeField]
	private int gridX;

	[SerializeField]
	private int gridZ;

	private HexStack occupiedStack;

	[Header("Drop Highlight")]
	[SerializeField]
	private Renderer[] highlightRenderers;

	[SerializeField]
	private Color dropHighlightColor = new Color(0.35f, 1f, 0.45f, 1f);

	[SerializeField]
	[Range(0f, 1f)]
	private float dropHighlightBlend = 0.55f;

	[SerializeField]
	private bool useEmissionHighlight = true;

	[SerializeField]
	private Color dropHighlightEmissionColor = new Color(0.08f, 0.38f, 0.08f, 1f);

	[Header("Search")]
	[SerializeField]
	private bool autoFindOnAwake = true;

	[SerializeField]
	private float neighborSearchDistance = 1.25f;

	[SerializeField]
	private float rayHeight = 0.05f;

	[SerializeField]
	[Min(1f)]
	private int neighborRaycastBufferSize = 12;

	[SerializeField]
	private LayerMask searchMask = -1;

	[SerializeField]
	private float sideDirectionOffsetDegrees = 0f;

	[SerializeField]
	private HexFloor[] sideNeighbors = new HexFloor[6];

	[Header("Gizmos")]
	[SerializeField]
	private bool drawSideRays = true;

	[SerializeField]
	private float gizmoSideOffset = 0.5f;

	[SerializeField]
	private float gizmoRayLength = 0.5f;

	[SerializeField]
	private float gizmoSphereRadius = 0.03f;

	[SerializeField]
	private Color gizmoNoNeighborColor = new Color(1f, 0.65f, 0f, 0.9f);

	[SerializeField]
	private Color gizmoNeighborColor = new Color(0.2f, 1f, 0.3f, 0.9f);

	private readonly List<RendererHighlightState> highlightStates = new List<RendererHighlightState>();

	private bool isDropHighlighted;

	private RaycastHit[] neighborRaycastBuffer;

	public IReadOnlyList<HexFloor> NearFloors => nearFloors;

	public HexStack OccupiedStack => occupiedStack;

	public Transform StackAnchor => stackAnchor;

	public int GridX => gridX;

	public int GridZ => gridZ;

	public static IEnumerable<HexFloor> ActiveFloors => ActiveFloorSet;

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
		for (int sideIndex = 0; sideIndex < 6; sideIndex++)
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
		Vector3 placementPosition = base.transform.position;
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
			if (state != null && !(state.Renderer == null))
			{
				MaterialPropertyBlock block = (state.PropertyBlock = state.PropertyBlock ?? new MaterialPropertyBlock());
				state.Renderer.GetPropertyBlock(block);
				if (state.HasColorProperty)
				{
					Color targetColor = (enabled ? Color.Lerp(state.BaseColor, dropHighlightColor, Mathf.Clamp01(dropHighlightBlend)) : state.BaseColor);
					block.SetColor(state.ColorPropertyId, targetColor);
				}
				if (state.HasEmissionProperty)
				{
					Color targetEmissionColor = ((enabled && useEmissionHighlight) ? dropHighlightEmissionColor : state.BaseEmissionColor);
					block.SetColor(EmissionColorId, targetEmissionColor);
				}
				state.Renderer.SetPropertyBlock(block);
			}
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
		HashSet<Renderer> uniqueRenderers = new HashSet<Renderer>();
		foreach (Renderer renderer in renderers)
		{
			if (renderer == null || !uniqueRenderers.Add(renderer))
			{
				continue;
			}
			Material sharedMaterial = renderer.sharedMaterial;
			if (!(sharedMaterial == null))
			{
				RendererHighlightState state = new RendererHighlightState
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
				if (state.HasColorProperty || state.HasEmissionProperty)
				{
					highlightStates.Add(state);
				}
			}
		}
	}

	private HexFloor FindNeighborForSide(int sideIndex)
	{
		Vector3 direction = GetSideDirection(sideIndex);
		Vector3 origin = GetRayOrigin();
		EnsureNeighborRaycastBuffer();
		int hitCount = Physics.RaycastNonAlloc(origin, direction, neighborRaycastBuffer, neighborSearchDistance, searchMask, QueryTriggerInteraction.Ignore);
		if (hitCount >= neighborRaycastBuffer.Length)
		{
			RaycastHit[] allHits = Physics.RaycastAll(origin, direction, neighborSearchDistance, searchMask, QueryTriggerInteraction.Ignore);
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
			if (!(hit.collider == null))
			{
				HexFloor candidate = hit.collider.GetComponentInParent<HexFloor>();
				if (!(candidate == null) && !(candidate == this) && hit.distance < nearestDistance)
				{
					nearestDistance = hit.distance;
					nearestFloor = candidate;
				}
			}
		}
		return nearestFloor;
	}

	public Vector3 GetSideDirection(int sideIndex)
	{
		float angle = sideDirectionOffsetDegrees + (float)sideIndex * 60f;
		return (Quaternion.AngleAxis(angle, base.transform.up) * base.transform.forward).normalized;
	}

	private Vector3 GetRayOrigin()
	{
		return base.transform.position + base.transform.up * rayHeight;
	}

	private void EnsureNeighborStorage()
	{
		if (sideNeighbors == null || sideNeighbors.Length != 6)
		{
			sideNeighbors = new HexFloor[6];
		}
	}

	private void EnsureNeighborRaycastBuffer()
	{
		int size = Mathf.Max(1, neighborRaycastBufferSize);
		if (neighborRaycastBuffer == null || neighborRaycastBuffer.Length != size)
		{
			neighborRaycastBuffer = new RaycastHit[size];
		}
	}

	private void OnDrawGizmosSelected()
	{
		if (drawSideRays)
		{
			Vector3 origin = GetRayOrigin();
			for (int sideIndex = 0; sideIndex < 6; sideIndex++)
			{
				Vector3 direction = GetSideDirection(sideIndex);
				Vector3 rayStart = origin + direction * gizmoSideOffset;
				Vector3 rayEnd = rayStart + direction * gizmoRayLength;
				HexFloor neighbor = GetNeighborBySide(sideIndex);
				Gizmos.color = ((neighbor != null) ? gizmoNeighborColor : gizmoNoNeighborColor);
				Gizmos.DrawLine(rayStart, rayEnd);
				Gizmos.DrawSphere(rayStart, gizmoSphereRadius);
			}
		}
	}
}

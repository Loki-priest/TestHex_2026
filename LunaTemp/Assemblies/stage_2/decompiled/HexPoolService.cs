using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
public class HexPoolService : MonoBehaviour
{
	private sealed class ComponentPool<T> where T : Component
	{
		private readonly Transform poolRoot;

		private readonly Dictionary<int, Queue<T>> bucketsByPrefab = new Dictionary<int, Queue<T>>();

		private readonly Dictionary<T, int> prefabIdByInstance = new Dictionary<T, int>();

		private readonly HashSet<T> inactiveInPool = new HashSet<T>();

		public ComponentPool(Transform poolRoot)
		{
			this.poolRoot = poolRoot;
		}

		public void Prewarm(T prefab, int count)
		{
			if ((Object)prefab == (Object)null || count <= 0)
			{
				return;
			}
			int safeCount = Mathf.Max(0, count);
			int prefabId = prefab.GetInstanceID();
			Queue<T> bucket = GetOrCreateBucket(prefabId);
			for (int i = 0; i < safeCount; i++)
			{
				T instance = InstantiateComponent(prefab, poolRoot);
				if (!((Object)instance == (Object)null))
				{
					instance.gameObject.SetActive(false);
					instance.transform.localScale = prefab.transform.localScale;
					prefabIdByInstance[instance] = prefabId;
					inactiveInPool.Add(instance);
					bucket.Enqueue(instance);
				}
			}
		}

		public T Rent(T prefab, Vector3 position, Quaternion rotation, Transform parent)
		{
			if ((Object)prefab == (Object)null)
			{
				return null;
			}
			int prefabId = prefab.GetInstanceID();
			Queue<T> bucket = GetOrCreateBucket(prefabId);
			T instance = null;
			while (bucket.Count > 0)
			{
				instance = bucket.Dequeue();
				if ((Object)instance == (Object)null)
				{
					continue;
				}
				inactiveInPool.Remove(instance);
				break;
			}
			if ((Object)instance == (Object)null)
			{
				instance = InstantiateComponent(prefab);
				if ((Object)instance == (Object)null)
				{
					return null;
				}
			}
			prefabIdByInstance[instance] = prefabId;
			Transform instanceTransform = instance.transform;
			instanceTransform.SetParent(parent, true);
			instanceTransform.SetPositionAndRotation(position, rotation);
			instanceTransform.localScale = prefab.transform.localScale;
			instance.gameObject.SetActive(true);
			return instance;
		}

		public bool Return(T instance, T fallbackPrefab = null)
		{
			if ((Object)instance == (Object)null)
			{
				return false;
			}
			if (inactiveInPool.Contains(instance))
			{
				return false;
			}
			if (!TryResolvePrefabId(instance, fallbackPrefab, out var prefabId))
			{
				return false;
			}
			Queue<T> bucket = GetOrCreateBucket(prefabId);
			instance.gameObject.SetActive(false);
			instance.transform.SetParent(poolRoot, false);
			inactiveInPool.Add(instance);
			bucket.Enqueue(instance);
			return true;
		}

		private bool TryResolvePrefabId(T instance, T fallbackPrefab, out int prefabId)
		{
			if (prefabIdByInstance.TryGetValue(instance, out prefabId))
			{
				return true;
			}
			if ((Object)fallbackPrefab == (Object)null)
			{
				prefabId = 0;
				return false;
			}
			prefabId = fallbackPrefab.GetInstanceID();
			prefabIdByInstance[instance] = prefabId;
			return true;
		}

		private Queue<T> GetOrCreateBucket(int prefabId)
		{
			if (bucketsByPrefab.TryGetValue(prefabId, out var bucket))
			{
				return bucket;
			}
			bucket = new Queue<T>();
			bucketsByPrefab[prefabId] = bucket;
			return bucket;
		}

		private static T InstantiateComponent(T prefab, Transform parent = null)
		{
			if ((Object)prefab == (Object)null)
			{
				return null;
			}
			GameObject prefabObject = prefab.gameObject;
			if (prefabObject == null)
			{
				return null;
			}
			GameObject instanceObject = ((parent != null) ? Object.Instantiate(prefabObject, parent) : Object.Instantiate(prefabObject));
			if (instanceObject == null)
			{
				return null;
			}
			T instanceComponent = instanceObject.GetComponent<T>();
			if ((Object)instanceComponent != (Object)null)
			{
				return instanceComponent;
			}
			Object.Destroy(instanceObject);
			return null;
		}
	}

	[Header("Pool Roots")]
	[SerializeField]
	private Transform stackPoolRoot;

	[SerializeField]
	private Transform tilePoolRoot;

	[SerializeField]
	private Transform fxPoolRoot;

	[Header("Prewarm")]
	[SerializeField]
	[Min(0f)]
	private int prewarmStackCount;

	[SerializeField]
	[Min(0f)]
	private int prewarmTileCount;

	[SerializeField]
	[Min(0f)]
	private int prewarmFxCount;

	private ComponentPool<HexStack> stackPool;

	private ComponentPool<HexTile> tilePool;

	private ComponentPool<ParticleSystem> fxPool;

	private void Awake()
	{
		EnsurePoolsInitialized();
	}

	public void PrewarmStacks(HexStack prefab, int count)
	{
		EnsurePoolsInitialized();
		stackPool.Prewarm(prefab, count);
	}

	public void PrewarmStacks(HexStack prefab)
	{
		PrewarmStacks(prefab, prewarmStackCount);
	}

	public void PrewarmTiles(HexTile prefab, int count)
	{
		EnsurePoolsInitialized();
		tilePool.Prewarm(prefab, count);
	}

	public void PrewarmTiles(HexTile prefab)
	{
		PrewarmTiles(prefab, prewarmTileCount);
	}

	public void PrewarmFx(ParticleSystem prefab, int count)
	{
		EnsurePoolsInitialized();
		fxPool.Prewarm(prefab, count);
	}

	public void PrewarmFx(ParticleSystem prefab)
	{
		PrewarmFx(prefab, prewarmFxCount);
	}

	public HexStack RentStack(HexStack prefab, Vector3 position, Quaternion rotation, Transform parent = null)
	{
		EnsurePoolsInitialized();
		return stackPool.Rent(prefab, position, rotation, parent);
	}

	public bool ReturnStack(HexStack stack, HexStack fallbackPrefab = null)
	{
		EnsurePoolsInitialized();
		return stackPool.Return(stack, fallbackPrefab);
	}

	public HexTile RentTile(HexTile prefab, Vector3 position, Quaternion rotation, Transform parent = null)
	{
		EnsurePoolsInitialized();
		return tilePool.Rent(prefab, position, rotation, parent);
	}

	public bool ReturnTile(HexTile tile, HexTile fallbackPrefab = null)
	{
		EnsurePoolsInitialized();
		return tilePool.Return(tile, fallbackPrefab);
	}

	public ParticleSystem RentFx(ParticleSystem prefab, Vector3 position, Quaternion rotation, Transform parent = null)
	{
		EnsurePoolsInitialized();
		return fxPool.Rent(prefab, position, rotation, parent);
	}

	public bool ReturnFx(ParticleSystem fx, ParticleSystem fallbackPrefab = null)
	{
		EnsurePoolsInitialized();
		return fxPool.Return(fx, fallbackPrefab);
	}

	private void EnsurePoolsInitialized()
	{
		if (stackPool == null || tilePool == null || fxPool == null)
		{
			stackPoolRoot = EnsurePoolRoot(stackPoolRoot, "StackPool");
			tilePoolRoot = EnsurePoolRoot(tilePoolRoot, "TilePool");
			fxPoolRoot = EnsurePoolRoot(fxPoolRoot, "FxPool");
			stackPool = new ComponentPool<HexStack>(stackPoolRoot);
			tilePool = new ComponentPool<HexTile>(tilePoolRoot);
			fxPool = new ComponentPool<ParticleSystem>(fxPoolRoot);
		}
	}

	private Transform EnsurePoolRoot(Transform configuredRoot, string fallbackName)
	{
		if (configuredRoot != null)
		{
			return configuredRoot;
		}
		GameObject rootObject = new GameObject(fallbackName);
		rootObject.transform.SetParent(base.transform, false);
		return rootObject.transform;
	}
}

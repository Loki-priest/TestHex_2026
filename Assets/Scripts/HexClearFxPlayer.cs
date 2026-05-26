using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HexClearFxPlayer : MonoBehaviour
{
    [SerializeField] private ParticleSystem clearTilesFxPrefab;
    [SerializeField] private float clearTilesFxLifetimePadding = 0.2f;

    public ParticleSystem ClearTilesFxPrefab => clearTilesFxPrefab;

    public void Prewarm(HexPoolService poolService)
    {
        if (poolService == null || clearTilesFxPrefab == null)
        {
            return;
        }

        poolService.PrewarmFx(clearTilesFxPrefab);
    }

    public bool TryGetClearBatchColor(List<HexTile> tiles, out Color color)
    {
        color = Color.white;
        if (tiles == null || tiles.Count == 0)
        {
            return false;
        }

        for (int i = 0; i < tiles.Count; i++)
        {
            HexTile tile = tiles[i];
            if (tile == null)
            {
                continue;
            }

            if (!tile.TryGetColor(out color))
            {
                continue;
            }

            return true;
        }

        return false;
    }

    public void PlayClearTilesFxAtPosition(
        MonoBehaviour coroutineRunner,
        HexPoolService poolService,
        Vector3 position,
        Color tintColor
    )
    {
        if (clearTilesFxPrefab == null || coroutineRunner == null)
        {
            return;
        }

        ParticleSystem spawnedFx = RentClearTilesFx(poolService, position, clearTilesFxPrefab.transform.rotation);
        if (spawnedFx == null)
        {
            return;
        }

        spawnedFx.gameObject.SetActive(true);
        TintParticleSystems(spawnedFx, tintColor);
        spawnedFx.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        spawnedFx.Play(true);

        float fxLifetime = EstimateParticleSystemLifetime(spawnedFx) + Mathf.Max(0f, clearTilesFxLifetimePadding);
        coroutineRunner.StartCoroutine(
            ReturnClearTilesFxAfterDelay(poolService, spawnedFx, fxLifetime)
        );
    }

    private ParticleSystem RentClearTilesFx(HexPoolService poolService, Vector3 position, Quaternion rotation)
    {
        if (clearTilesFxPrefab == null)
        {
            return null;
        }

        if (poolService != null)
        {
            ParticleSystem pooledFx = poolService.RentFx(clearTilesFxPrefab, position, rotation);
            if (pooledFx != null)
            {
                return pooledFx;
            }
        }

        GameObject spawnedFxObject = Object.Instantiate(clearTilesFxPrefab.gameObject, position, rotation);
        if (spawnedFxObject == null)
        {
            return null;
        }

        ParticleSystem spawnedFx = spawnedFxObject.GetComponent<ParticleSystem>();
        if (spawnedFx != null)
        {
            return spawnedFx;
        }

        Object.Destroy(spawnedFxObject);
        return null;
    }

    private IEnumerator ReturnClearTilesFxAfterDelay(HexPoolService poolService, ParticleSystem fx, float delay)
    {
        if (fx == null)
        {
            yield break;
        }

        float safeDelay = Mathf.Max(0.05f, delay);
        yield return new WaitForSeconds(safeDelay);

        if (fx == null)
        {
            yield break;
        }

        fx.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        if (poolService != null && poolService.ReturnFx(fx, clearTilesFxPrefab))
        {
            yield break;
        }

        Object.Destroy(fx.gameObject);
    }

    private static void TintParticleSystems(ParticleSystem rootFx, Color tintColor)
    {
        if (rootFx == null)
        {
            return;
        }

        ParticleSystem[] fxSystems = rootFx.GetComponentsInChildren<ParticleSystem>(true);
        for (int i = 0; i < fxSystems.Length; i++)
        {
            ParticleSystem fxSystem = fxSystems[i];
            if (fxSystem == null)
            {
                continue;
            }

            ParticleSystem.MainModule main = fxSystem.main;
            main.startColor = new ParticleSystem.MinMaxGradient(tintColor);
        }
    }

    private static float EstimateParticleSystemLifetime(ParticleSystem rootFx)
    {
        if (rootFx == null)
        {
            return 0.1f;
        }

        ParticleSystem[] fxSystems = rootFx.GetComponentsInChildren<ParticleSystem>(true);
        float maxLifetime = 0.1f;

        for (int i = 0; i < fxSystems.Length; i++)
        {
            ParticleSystem fxSystem = fxSystems[i];
            if (fxSystem == null)
            {
                continue;
            }

            ParticleSystem.MainModule main = fxSystem.main;
            float speed = Mathf.Max(0.0001f, main.simulationSpeed);
            float duration = main.duration / speed;
            float delay = main.startDelay.constantMax / speed;
            float lifetime = main.startLifetime.constantMax / speed;
            float totalLifetime = delay + duration + lifetime;

            if (totalLifetime > maxLifetime)
            {
                maxLifetime = totalLifetime;
            }
        }

        return maxLifetime;
    }

}

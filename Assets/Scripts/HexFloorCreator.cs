using System.Collections.Generic;
using UnityEngine;

[DisallowMultipleComponent]
/// <summary>
/// Генерирует сетку пола из шестиугольных клеток и при необходимости заполняет ее стартовыми стопками.
/// </summary>
public class HexFloorCreator : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private HexGameContext gameContext;
    [SerializeField] private GameObject floorPrefab;
    [SerializeField] private Transform floorRoot;
    [SerializeField] private Transform bottomRowAnchor;

    [Header("Build")]
    [SerializeField] private bool generateOnStart;
    [SerializeField] private bool clearBeforeGenerate = true;
    [SerializeField] private bool refreshNeighborsAfterGenerate = true;
    [SerializeField] private bool fillStacksAfterGenerate = true;
    [SerializeField] private bool debugLogs = false;

    [Header("Layout")]
    [SerializeField, Min(0.001f)] private float neighborDistance = 1f;
    [SerializeField] private bool shiftOddColumnsForward = true;
    [SerializeField] private Vector3 anchorLocalOffset = Vector3.zero;

    private readonly List<HexFloor> generatedFloors = new();
    private HexConfig HexConfig => gameContext != null ? gameContext.Config : null;
    public bool InitialGenerationCompleted { get; private set; }

    private void Start()
    {
        LogFloorCreator($"Start. generateOnStart={generateOnStart}");
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
            LogFloorCreator("GenerateFloor aborted: config or floorPrefab is null.");
            return;
        }

        Transform root = floorRoot != null ? floorRoot : transform;
        Transform anchor = bottomRowAnchor != null ? bottomRowAnchor : root;

        if (clearBeforeGenerate)
        {
            ClearFloors(root);
        }

        generatedFloors.Clear();

        int width = Mathf.Max(1, hexConfig.floorWidth);   // columns along X
        int length = Mathf.Max(1, hexConfig.floorLength); // rows along Z

        float zStep = Mathf.Max(0.001f, neighborDistance);
        float xStep = zStep * Mathf.Sqrt(3f) * 0.5f;
        float zColumnShift = zStep * 0.5f * (shiftOddColumnsForward ? 1f : -1f);

        Vector3 axisX = anchor.right.normalized;
        Vector3 axisY = anchor.up.normalized;
        Vector3 axisZ = anchor.forward.normalized;

        Vector3 origin = anchor.position
            + axisX * anchorLocalOffset.x
            + axisY * anchorLocalOffset.y
            + axisZ * anchorLocalOffset.z;

        float firstColumnCenterX = -((width - 1) * 0.5f * xStep);

        for (int colX = 0; colX < width; colX++)
        {
            float x = firstColumnCenterX + colX * xStep;
            float columnOffsetZ = (colX & 1) == 1 ? zColumnShift : 0f;

            for (int rowZ = 0; rowZ < length; rowZ++)
            {
                float z = rowZ * zStep + columnOffsetZ;
                Vector3 worldPosition = origin + axisX * x + axisZ * z;

                GameObject floorObject = Instantiate(floorPrefab, worldPosition, anchor.rotation, root);
                if (floorObject == null)
                {
                    continue;
                }

                HexFloor floor = floorObject.GetComponent<HexFloor>();
                if (floor == null)
                {
                    if (Application.isPlaying)
                    {
                        Destroy(floorObject);
                    }
                    else
                    {
                        DestroyImmediate(floorObject);
                    }

                    continue;
                }

                floor.name = $"HexFloor [x:{colX}, z:{rowZ}]";
                floor.SetGridCoordinates(colX, rowZ);
                generatedFloors.Add(floor);
            }
        }

        if (Application.isPlaying)
        {
            //Physics.SyncTransforms();
        }

        bool shouldFillStacks = fillStacksAfterGenerate && hexConfig.fillGeneratedFloorWithStacks;
        bool needNeighborRefresh = refreshNeighborsAfterGenerate || shouldFillStacks;
        if (needNeighborRefresh)
        {
            for (int i = 0; i < generatedFloors.Count; i++)
            {
                HexFloor floor = generatedFloors[i];
                if (floor == null)
                {
                    continue;
                }

                floor.FindNearFloors();
            }
        }

        if (!shouldFillStacks || gameContext == null || gameContext.StacksCreator == null)
        {
            LogFloorCreator($"GenerateFloor done. floors={generatedFloors.Count}, shouldFillStacks={shouldFillStacks}");
            MarkInitialGenerationCompleted();
            return;
        }

        gameContext.StacksCreator.FillFloorsWithConfiguredStacks(generatedFloors);
        LogFloorCreator($"GenerateFloor done with fill. floors={generatedFloors.Count}");
        MarkInitialGenerationCompleted();
    }

    [ContextMenu("Clear Generated Floor")]
    public void ClearGeneratedFloor()
    {
        Transform root = floorRoot != null ? floorRoot : transform;
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
            for (int i = 0; i < floors.Length; i++)
            {
                HexFloor floor = floors[i];
                if (floor == null)
                {
                    continue;
                }

                floor.gameObject.SetActive(false);
            }
        }

        for (int i = 0; i < floors.Length; i++)
        {
            HexFloor floor = floors[i];
            if (floor == null)
            {
                continue;
            }

            if (Application.isPlaying)
            {
                Destroy(floor.gameObject);
            }
            else
            {
                DestroyImmediate(floor.gameObject);
            }
        }
    }

    private void MarkInitialGenerationCompleted()
    {
        if (InitialGenerationCompleted)
        {
            return;
        }

        InitialGenerationCompleted = true;
        LogFloorCreator("InitialGenerationCompleted=true");
    }

    [System.Diagnostics.Conditional("UNITY_EDITOR")]
    [System.Diagnostics.Conditional("DEVELOPMENT_BUILD")]
    private void LogFloorCreator(string message)
    {
        if (!debugLogs)
        {
            return;
        }

        Debug.Log($"[HexFloorCreator] {message}", this);
    }
}

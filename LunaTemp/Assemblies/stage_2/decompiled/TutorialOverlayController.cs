using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using DG.Tweening;
using UnityEngine;

public class TutorialOverlayController : MonoBehaviour
{
	[Header("Bindings")]
	[SerializeField]
	private GameObject tutorialRoot;

	[SerializeField]
	private RectTransform handTransform;

	[SerializeField]
	private RectTransform canvasRoot;

	[SerializeField]
	private Camera uiCamera;

	[SerializeField]
	private Camera worldCamera;

	[SerializeField]
	private HexGameContext gameContext;

	[SerializeField]
	private RectTransform fromAnchor;

	[SerializeField]
	private RectTransform toAnchor;

	[Header("Behaviour")]
	[SerializeField]
	private bool startOnEnable = false;

	[SerializeField]
	private float restartDelay = 2f;

	[SerializeField]
	private bool useDynamicWorldTargets = true;

	[SerializeField]
	private Vector2 handScreenOffset = Vector2.zero;

	[SerializeField]
	private float worldTargetHeightOffset = 0.2f;

	[SerializeField]
	[Min(0.05f)]
	private float fallbackScanInterval = 0.35f;

	[SerializeField]
	private bool debugLogs = false;

	[Header("Animation")]
	[SerializeField]
	private float handMoveDuration = 0.8f;

	[SerializeField]
	private float handPauseDuration = 0.15f;

	[SerializeField]
	private Ease handMoveEase = Ease.InOutSine;

	private bool isCompleted;

	private bool isPermanentlyDisabled;

	private Coroutine restartRoutine;

	private Tween handTween;

	private HexManager cachedManager;

	private bool hasStarted;

	private readonly List<HexStack> tutorialStacksBuffer = new List<HexStack>();

	private readonly List<HexFloor> candidateChainFloorsBuffer = new List<HexFloor>();

	private readonly List<HexFloor> candidateFreeFloorsBuffer = new List<HexFloor>();

	private float nextBootstrapStateLogAt;

	private float nextStackFallbackScanAt;

	private float nextFloorFallbackScanAt;

	private Camera cachedFallbackWorldCamera;

	private void OnEnable()
	{
		HexDragger.DragStarted += HandleDragStarted;
		HexDragger.DragFinished += HandleDragFinished;
		if (hasStarted && startOnEnable && !isCompleted)
		{
			StartTutorial();
		}
		else
		{
			SetTutorialVisible(false);
		}
	}

	private void Start()
	{
		StartCoroutine(StartTutorialAfterBootstrap());
	}

	private IEnumerator StartTutorialAfterBootstrap()
	{
		hasStarted = true;
		if (!startOnEnable || isCompleted)
		{
			yield break;
		}
		nextBootstrapStateLogAt = Time.unscaledTime;
		string readinessDetails;
		while (!AreInitialGenerationSystemsReady(out readinessDetails))
		{
			if (Time.unscaledTime >= nextBootstrapStateLogAt)
			{
				nextBootstrapStateLogAt = Time.unscaledTime + 0.5f;
			}
			yield return null;
		}
		if (!isCompleted && !isPermanentlyDisabled && base.isActiveAndEnabled)
		{
			StartTutorial();
		}
	}

	private void OnDisable()
	{
		HexDragger.DragStarted -= HandleDragStarted;
		HexDragger.DragFinished -= HandleDragFinished;
		StopRestartRoutine();
		KillHandTween();
	}

	private void Update()
	{
		if (!isCompleted && !isPermanentlyDisabled && !HexDragger.IsGlobalDragEnabled)
		{
			DisableTutorialPermanently();
		}
	}

	public void StartTutorial()
	{
		if (!isCompleted && !isPermanentlyDisabled)
		{
			StopRestartRoutine();
			SetTutorialVisible(false);
			PlayHandLoop();
		}
	}

	public void StopTutorial()
	{
		StopRestartRoutine();
		SetTutorialVisible(false);
		KillHandTween();
	}

	public void ResetTutorialState()
	{
		if (!isPermanentlyDisabled)
		{
			isCompleted = false;
			if (startOnEnable)
			{
				StartTutorial();
			}
		}
	}

	public void DisableTutorialPermanently()
	{
		isPermanentlyDisabled = true;
		isCompleted = true;
		StopTutorial();
	}

	private void HandleDragStarted(HexStack draggedStack)
	{
		if (!isCompleted)
		{
			StopRestartRoutine();
			SetTutorialVisible(false);
			KillHandTween();
		}
	}

	private void HandleDragFinished(HexStack draggedStack, bool successfulDrop)
	{
		if (!isCompleted)
		{
			if (successfulDrop)
			{
				isCompleted = true;
				StopTutorial();
			}
			else
			{
				StopRestartRoutine();
				restartRoutine = StartCoroutine(RestartTutorialAfterDelayRoutine());
			}
		}
	}

	private IEnumerator RestartTutorialAfterDelayRoutine()
	{
		yield return new WaitForSeconds(restartDelay);
		restartRoutine = null;
		if (!isCompleted && !isPermanentlyDisabled)
		{
			StartTutorial();
		}
	}

	private void PlayHandLoop()
	{
		KillHandTween();
		if (!TryResolveHandTargets(out var fromPosition, out var toPosition))
		{
			SetTutorialVisible(false);
			if (restartRoutine == null)
			{
				restartRoutine = StartCoroutine(RestartTutorialAfterDelayRoutine());
			}
			return;
		}
		handTransform.position = fromPosition;
		SetTutorialVisible(true);
		Sequence sequence = DOTween.Sequence();
		sequence.Append(handTransform.DOMove(toPosition, handMoveDuration).SetEase(handMoveEase));
		sequence.AppendInterval(handPauseDuration);
		sequence.AppendCallback(delegate
		{
			handTransform.position = fromPosition;
		});
		sequence.AppendInterval(handPauseDuration);
		sequence.OnComplete(delegate
		{
			handTween = null;
			if (!isCompleted && tutorialRoot != null && tutorialRoot.activeInHierarchy)
			{
				PlayHandLoop();
			}
		});
		handTween = sequence;
	}

	private bool TryResolveHandTargets(out Vector3 fromPosition, out Vector3 toPosition)
	{
		fromPosition = Vector3.zero;
		toPosition = Vector3.zero;
		if (handTransform == null)
		{
			return false;
		}
		if (useDynamicWorldTargets)
		{
			return TryResolveDynamicHandTargets(out fromPosition, out toPosition);
		}
		if (fromAnchor == null || toAnchor == null)
		{
			return false;
		}
		fromPosition = fromAnchor.position;
		toPosition = toAnchor.position;
		return true;
	}

	private bool TryResolveDynamicHandTargets(out Vector3 fromPosition, out Vector3 toPosition)
	{
		fromPosition = Vector3.zero;
		toPosition = Vector3.zero;
		if (!TryFindTutorialMovePair(out var sourceStack, out var targetFloor))
		{
			return false;
		}
		Vector3 sourceWorldPoint = sourceStack.transform.position + Vector3.up * worldTargetHeightOffset;
		Vector3 targetWorldPoint = targetFloor.transform.position + Vector3.up * worldTargetHeightOffset;
		if (!TryConvertWorldToUiPosition(sourceWorldPoint, out fromPosition))
		{
			return false;
		}
		if (!TryConvertWorldToUiPosition(targetWorldPoint, out toPosition))
		{
			return false;
		}
		return true;
	}

	private bool TryFindTutorialMovePair(out HexStack sourceStack, out HexFloor targetFloor)
	{
		sourceStack = null;
		targetFloor = null;
		HexManager manager = ResolveManager();
		tutorialStacksBuffer.Clear();
		candidateChainFloorsBuffer.Clear();
		candidateFreeFloorsBuffer.Clear();
		foreach (HexStack stack in HexStack.ActiveStacks)
		{
			if (!(stack == null) && stack.gameObject.activeInHierarchy && stack.TileCount != 0 && !(stack.CurrentFloor != null))
			{
				tutorialStacksBuffer.Add(stack);
			}
		}
		if (tutorialStacksBuffer.Count == 0 && Time.unscaledTime >= nextStackFallbackScanAt)
		{
			nextStackFallbackScanAt = Time.unscaledTime + Mathf.Max(0.05f, fallbackScanInterval);
			HexStack[] allStacks = Object.FindObjectsOfType<HexStack>();
			foreach (HexStack stack2 in allStacks)
			{
				if (!(stack2 == null) && stack2.gameObject.activeInHierarchy && stack2.TileCount != 0 && !(stack2.CurrentFloor != null))
				{
					tutorialStacksBuffer.Add(stack2);
				}
			}
			if (tutorialStacksBuffer.Count <= 0)
			{
			}
		}
		if (tutorialStacksBuffer.Count == 0)
		{
			return false;
		}
		sourceStack = SelectBottomMostPlayerStack(tutorialStacksBuffer);
		if (sourceStack == null)
		{
			return false;
		}
		int sourceTopColorId = sourceStack.GetTopColorId();
		foreach (HexFloor floor2 in HexFloor.ActiveFloors)
		{
			if (!(floor2 == null) && ((manager != null) ? manager.CanPlaceStackOnFloor(sourceStack, floor2) : (floor2.OccupiedStack == null)))
			{
				candidateFreeFloorsBuffer.Add(floor2);
				if (sourceTopColorId >= 0 && HasNeighborWithTopColor(floor2, sourceTopColorId))
				{
					candidateChainFloorsBuffer.Add(floor2);
				}
			}
		}
		if (candidateFreeFloorsBuffer.Count == 0 && Time.unscaledTime >= nextFloorFallbackScanAt)
		{
			nextFloorFallbackScanAt = Time.unscaledTime + Mathf.Max(0.05f, fallbackScanInterval);
			HexFloor[] allFloors = Object.FindObjectsOfType<HexFloor>();
			foreach (HexFloor floor in allFloors)
			{
				if (!(floor == null) && floor.gameObject.activeInHierarchy && ((manager != null) ? manager.CanPlaceStackOnFloor(sourceStack, floor) : (floor.OccupiedStack == null)))
				{
					if (!candidateFreeFloorsBuffer.Contains(floor))
					{
						candidateFreeFloorsBuffer.Add(floor);
					}
					if (sourceTopColorId >= 0 && HasNeighborWithTopColor(floor, sourceTopColorId) && !candidateChainFloorsBuffer.Contains(floor))
					{
						candidateChainFloorsBuffer.Add(floor);
					}
				}
			}
			if (candidateFreeFloorsBuffer.Count <= 0)
			{
			}
		}
		if (candidateChainFloorsBuffer.Count > 0)
		{
			targetFloor = SelectBestTargetFloor(sourceStack, candidateChainFloorsBuffer);
			return targetFloor != null;
		}
		if (candidateFreeFloorsBuffer.Count == 0)
		{
			return false;
		}
		targetFloor = SelectBestTargetFloor(sourceStack, candidateFreeFloorsBuffer);
		return targetFloor != null;
	}

	private HexStack SelectBottomMostPlayerStack(List<HexStack> stacks)
	{
		if (stacks == null || stacks.Count == 0)
		{
			return null;
		}
		Camera gameplayCamera = ResolveWorldCamera();
		HexStack bestStack = null;
		float bestScreenY = float.MaxValue;
		float bestCenterOffset = float.MaxValue;
		float screenCenterX = (float)Screen.width * 0.5f;
		bool foundVisibleStack = false;
		for (int i = 0; i < stacks.Count; i++)
		{
			HexStack stack = stacks[i];
			if (stack == null)
			{
				continue;
			}
			Vector3 screenPoint = ((gameplayCamera != null) ? gameplayCamera.WorldToScreenPoint(stack.transform.position) : new Vector3(stack.transform.position.x, stack.transform.position.y, 1f));
			if (gameplayCamera != null && screenPoint.z < 0f)
			{
				continue;
			}
			bool isVisibleOnScreen = screenPoint.x >= 0f && screenPoint.x <= (float)Screen.width && screenPoint.y >= 0f && screenPoint.y <= (float)Screen.height;
			if (!foundVisibleStack || isVisibleOnScreen)
			{
				if (!foundVisibleStack && isVisibleOnScreen)
				{
					foundVisibleStack = true;
					bestStack = null;
					bestScreenY = float.MaxValue;
					bestCenterOffset = float.MaxValue;
				}
				float stackScreenY = screenPoint.y;
				float centerOffset = Mathf.Abs(screenPoint.x - screenCenterX);
				if (bestStack == null || stackScreenY < bestScreenY || (Mathf.Approximately(stackScreenY, bestScreenY) && centerOffset < bestCenterOffset))
				{
					bestStack = stack;
					bestScreenY = stackScreenY;
					bestCenterOffset = centerOffset;
				}
			}
		}
		return bestStack;
	}

	private static HexFloor SelectBestTargetFloor(HexStack sourceStack, List<HexFloor> candidateFloors)
	{
		if (sourceStack == null || candidateFloors == null || candidateFloors.Count == 0)
		{
			return null;
		}
		HexFloor bestFloor = null;
		float bestDistanceSqr = float.MaxValue;
		Vector3 sourcePosition = sourceStack.transform.position;
		for (int i = 0; i < candidateFloors.Count; i++)
		{
			HexFloor floor = candidateFloors[i];
			if (!(floor == null))
			{
				float distanceSqr = (sourcePosition - floor.transform.position).sqrMagnitude;
				if (!(distanceSqr >= bestDistanceSqr))
				{
					bestDistanceSqr = distanceSqr;
					bestFloor = floor;
				}
			}
		}
		return bestFloor;
	}

	private bool HasNeighborWithTopColor(HexFloor centerFloor, int colorId)
	{
		if (centerFloor == null || colorId < 0)
		{
			return false;
		}
		for (int side = 0; side < 6; side++)
		{
			HexFloor neighborFloor = centerFloor.GetNeighborBySide(side);
			if (IsMatchingNeighborStack(neighborFloor, colorId))
			{
				return true;
			}
		}
		IReadOnlyList<HexFloor> nearFloors = centerFloor.NearFloors;
		for (int i = 0; i < nearFloors.Count; i++)
		{
			if (IsMatchingNeighborStack(nearFloors[i], colorId))
			{
				return true;
			}
		}
		return false;
	}

	private static bool IsMatchingNeighborStack(HexFloor floor, int colorId)
	{
		if (floor == null)
		{
			return false;
		}
		HexStack neighborStack = floor.OccupiedStack;
		if (neighborStack == null || neighborStack.TileCount == 0)
		{
			return false;
		}
		return neighborStack.GetTopColorId() == colorId;
	}

	private HexManager ResolveManager()
	{
		if (cachedManager != null)
		{
			return cachedManager;
		}
		if (gameContext == null)
		{
			gameContext = Object.FindObjectOfType<HexGameContext>();
		}
		if (gameContext != null && gameContext.Manager != null)
		{
			cachedManager = gameContext.Manager;
			return cachedManager;
		}
		cachedManager = Object.FindObjectOfType<HexManager>();
		if (cachedManager == null)
		{
		}
		return cachedManager;
	}

	private Camera ResolveWorldCamera()
	{
		if (worldCamera != null)
		{
			return worldCamera;
		}
		if (cachedFallbackWorldCamera != null)
		{
			return cachedFallbackWorldCamera;
		}
		Camera mainCamera = Camera.main;
		if (mainCamera != null)
		{
			cachedFallbackWorldCamera = mainCamera;
			return mainCamera;
		}
		Camera anyCamera = Object.FindObjectOfType<Camera>();
		if (!(anyCamera == null))
		{
			cachedFallbackWorldCamera = anyCamera;
		}
		return anyCamera;
	}

	private bool TryConvertWorldToUiPosition(Vector3 worldPosition, out Vector3 uiPosition)
	{
		uiPosition = Vector3.zero;
		Camera gameplayCamera = ResolveWorldCamera();
		if (gameplayCamera == null)
		{
			return false;
		}
		Vector3 screenPoint = gameplayCamera.WorldToScreenPoint(worldPosition);
		if (screenPoint.z < 0f)
		{
			return false;
		}
		Vector2 screenPoint2D = (Vector2)screenPoint + handScreenOffset;
		if (canvasRoot != null)
		{
			if (!RectTransformUtility.ScreenPointToWorldPointInRectangle(canvasRoot, screenPoint2D, uiCamera, out uiPosition))
			{
				return false;
			}
			return true;
		}
		uiPosition = new Vector3(screenPoint2D.x, screenPoint2D.y, handTransform.position.z);
		return true;
	}

	private void KillHandTween()
	{
		if (handTween != null)
		{
			if (handTween.IsActive())
			{
				handTween.Kill();
			}
			handTween = null;
		}
	}

	private void StopRestartRoutine()
	{
		if (restartRoutine != null)
		{
			StopCoroutine(restartRoutine);
			restartRoutine = null;
		}
	}

	private void SetTutorialVisible(bool visible)
	{
		if (!(tutorialRoot == null) && tutorialRoot.activeSelf != visible)
		{
			tutorialRoot.SetActive(visible);
		}
	}

	private bool AreInitialGenerationSystemsReady(out string details)
	{
		if (gameContext == null)
		{
			gameContext = Object.FindObjectOfType<HexGameContext>();
			if (gameContext == null)
			{
				details = "HexGameContext not found (treated as ready).";
				return true;
			}
		}
		HexFloorCreator floorCreator = gameContext.FloorCreator;
		bool floorReady = floorCreator == null || floorCreator.InitialGenerationCompleted;
		if (floorCreator != null && !floorCreator.InitialGenerationCompleted)
		{
			details = $"floorReady={floorReady}, stacksReady=unknown";
			return false;
		}
		HexStacksCreator stacksCreator = gameContext.StacksCreator;
		bool stacksReady = stacksCreator == null || stacksCreator.InitialPlayerStacksCompleted;
		details = $"floorReady={floorReady}, stacksReady={stacksReady}";
		return stacksReady;
	}

	private bool AreInitialGenerationSystemsReady()
	{
		string details;
		return AreInitialGenerationSystemsReady(out details);
	}

	[Conditional("UNITY_EDITOR")]
	[Conditional("DEVELOPMENT_BUILD")]
	private void LogTutorial(string message)
	{
		if (debugLogs)
		{
			UnityEngine.Debug.Log("[Tutorial] " + message, this);
		}
	}

	private static string GetStackName(HexStack stack)
	{
		return (stack != null) ? stack.name : "null";
	}

	private static string GetFloorName(HexFloor floor)
	{
		return (floor != null) ? floor.name : "null";
	}
}

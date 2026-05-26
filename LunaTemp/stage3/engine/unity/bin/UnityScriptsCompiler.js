if ( TRACE ) { TRACE( JSON.parse( '["CountdownTimerPanel#IsRunning#get","CountdownTimerPanel#RemainingSeconds#get","CountdownTimerPanel#init","CountdownTimerPanel#Awake","CountdownTimerPanel#OnEnable","CountdownTimerPanel#OnDisable","CountdownTimerPanel#Update","CountdownTimerPanel#StartCountdown","CountdownTimerPanel#StopCountdown","CountdownTimerPanel#RestartCountdown","CountdownTimerPanel#ApplyConfiguredDurationFromConfig","CountdownTimerPanel#ConfigureStaticBindings","CountdownTimerPanel#ResetToInitialState","CountdownTimerPanel#UpdateVisuals","CountdownTimerPanel#StartShake","CountdownTimerPanel#StopShake","CountdownTimerPanel#LogTimerEvent","CountdownTimerPanel#LogTimerWarning","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","HexClearFxPlayer#TintParticleSystems","HexClearFxPlayer#EstimateParticleSystemLifetime","HexClearFxPlayer#ClearTilesFxPrefab#get","HexClearFxPlayer#init","HexClearFxPlayer#Prewarm","HexClearFxPlayer#TryGetClearBatchColor","HexClearFxPlayer#PlayClearTilesFxAtPosition","HexClearFxPlayer#RentClearTilesFx","HexClearFxPlayer#ReturnClearTilesFxAfterDelay","HexConfig#init","HexConfig.FloorCoord#getDefaultValue","HexConfig.FloorCoord#ctor","HexConfig.FloorCoord#getHashCode","HexConfig.FloorCoord#equals","HexConfig.FloorCoord#$clone","HexDragger#IsGlobalDragEnabled#get","HexDragger#init","HexDragger#SetGlobalDragEnabled","HexDragger#Manager#get","HexDragger#init","HexDragger#SetGameContext","HexDragger#Awake","HexDragger#OnEnable","HexDragger#Update","HexDragger#OnDisable","HexDragger#TryBeginDrag","HexDragger#StartDrag","HexDragger#UpdateDrag","HexDragger#EndDrag","HexDragger#StartSettleTween","HexDragger#FinalizeSettle","HexDragger#TryGetFloorUnderStack","HexDragger#GetNearestFloorFromHits","HexDragger#EnsureFloorRaycastBuffer","HexDragger#KillActiveTween","HexDragger#ReleaseDragState","HexDragger#CancelActiveDrag","HexDragger#CancelActiveDragInternal","HexDragger#UpdateDropHighlight","HexDragger#SetHighlightedFloor","HexDragger#TryGetPointerDown","HexDragger#TryGetPointerPosition","HexDragger#WasPointerReleased","HexDragger#IsActiveStackValid","HexFloor#ActiveFloors#get","HexFloor#init","HexFloor#NearFloors#get","HexFloor#OccupiedStack#get","HexFloor#StackAnchor#get","HexFloor#GridX#get","HexFloor#GridZ#get","HexFloor#init","HexFloor#Awake","HexFloor#OnEnable","HexFloor#OnDisable","HexFloor#FindNearFloors","HexFloor#GetNeighborBySide","HexFloor#GetSideIndexOfNeighbor","HexFloor#SetOccupiedStack","HexFloor#SetGridCoordinates","HexFloor#ClearOccupiedStack","HexFloor#GetStackPlacementPosition","HexFloor#SetDropHighlight","HexFloor#CacheHighlightRenderers","HexFloor#FindNeighborForSide","HexFloor#GetNearestFloorFromHits","HexFloor#GetSideDirection","HexFloor#GetRayOrigin","HexFloor#EnsureNeighborStorage","HexFloor#EnsureNeighborRaycastBuffer","HexFloor#OnDrawGizmosSelected","HexFloor.RendererHighlightState#init","HexFloorCreator#ClearFloors","HexFloorCreator#HexConfig#get","HexFloorCreator#init","HexFloorCreator#Start","HexFloorCreator#GenerateFloor","HexFloorCreator#ClearGeneratedFloor","HexFloorCreator#MarkInitialGenerationCompleted","HexFloorCreator#LogFloorCreator","HexGameContext#Config#get","HexGameContext#PoolService#get","HexGameContext#Manager#get","HexGameContext#StacksCreator#get","HexGameContext#FloorCreator#get","HexManager#init","HexManager#GetStackDebugName","HexManager#GetFloorDebugName","HexManager#IsTransferInProgress#get","HexManager#hexConfig#get","HexManager#PoolService#get","HexManager#StacksCreator#get","HexManager#init","HexManager#Awake","HexManager#OnDisable","HexManager#RentTile","HexManager#ReturnTile","HexManager#TryRecycleEmptyStack","HexManager#CanPlaceStackOnFloor","HexManager#HandleStackPlaced","HexManager#PrewarmPools","HexManager#ResolveTilePrefabForPool","HexManager#BeginResolveTopColorTransfer","HexManager#ContinueResolveTopColorTransfer","HexManager#IsTransferChainActive","HexManager#FinishTransferChain","HexManager#EnqueueForTransferCheck","HexManager#EnqueueNeighborStacksForTransferCheck","HexManager#EnqueueAllStacksForTransferCheck","HexManager#TryResolveStackFloor","HexManager#TryFindAnyTransferCandidate","HexManager#TryCollectClearBatches","HexManager#TryFindMatchingNeighbor","HexManager#TryGetMatchingStack","HexManager#AttachStackToFloor","HexManager#ResolveStackOnFloor","HexManager#ClearBatchesParallel","HexManager#TryGetLowestTilePosition","HexManager#CompleteAfterTweens","HexManager#GetChainSpeedMultiplier","HexManager#TryExtractTopMatchTiles","HexManager#GetTopMatchClearCount","HexManager#LogTransferEvent","HexManager.StackClearBatch#getDefaultValue","HexManager.StackClearBatch#$ctor1","HexManager.StackClearBatch#ctor","HexManager.StackClearBatch#getHashCode","HexManager.StackClearBatch#equals","HexManager.StackClearBatch#$clone","HexManager.TransferChainState#init","HexManager.TransferChainState#ctor","HexPoolService#Awake","HexPoolService#PrewarmStacks$1","HexPoolService#PrewarmStacks","HexPoolService#PrewarmTiles$1","HexPoolService#PrewarmTiles","HexPoolService#PrewarmFx$1","HexPoolService#PrewarmFx","HexPoolService#RentStack","HexPoolService#ReturnStack","HexPoolService#RentTile","HexPoolService#ReturnTile","HexPoolService#RentFx","HexPoolService#ReturnFx","HexPoolService#EnsurePoolsInitialized","HexPoolService#EnsurePoolRoot","HexPoolService.ComponentPool$1#InstantiateComponent","HexPoolService.ComponentPool$1#init","HexPoolService.ComponentPool$1#ctor","HexPoolService.ComponentPool$1#Prewarm","HexPoolService.ComponentPool$1#Rent","HexPoolService.ComponentPool$1#Return","HexPoolService.ComponentPool$1#TryResolvePrefabId","HexPoolService.ComponentPool$1#GetOrCreateBucket","HexStack#ActiveStacks#get","HexStack#init","HexStack#ResolveTileColorIdForIndex","HexStack#ResolveActivePaletteColorCount","HexStack#CurrentFloor#get","HexStack#GameContext#get","HexStack#TileCount#get","HexStack#init","HexStack#Awake","HexStack#OnEnable","HexStack#OnDisable","HexStack#Start","HexStack#CreateStack","HexStack#SetCurrentFloor","HexStack#SetGameContext","HexStack#GetTileTemplateForPool","HexStack#GetTopTile","HexStack#GetTopColorId","HexStack#CountTopTilesWithColorId","HexStack#PopTopTile","HexStack#PushTopTile","HexStack#GetNextTopWorldPosition","HexStack#GetWorldPositionForTileIndex","HexStack#CacheGeometryFromTiles","HexStack#GetLocalPositionForIndex","HexStack#EnsureTileCount","HexStack#ResolveTileTemplate","HexStack#CompactNullTiles","HexStack#EnsureTilesInitializedFromChildren","HexStack#GetAnchorBaseLocalPosition","HexStack#AlignTilesToAnchor","HexStack#RefreshVisibilityAndBinding","HexStack#DetachFromFloor","HexStacksCreator#init","HexStacksCreator#NormalizePresetColorIds","HexStacksCreator#NormalizeColorId","HexStacksCreator#GetSpawnNeighborCount","HexStacksCreator#BuildNoSpawnCoordSet","HexStacksCreator#BuildCoordKey","HexStacksCreator#HexConfig#get","HexStacksCreator#PoolService#get","HexStacksCreator#init","HexStacksCreator#Start","HexStacksCreator#TryRecycleEmptyStack","HexStacksCreator#NotifyStackPlaced","HexStacksCreator#FillFloorsWithConfiguredStacks","HexStacksCreator#TrySpawnIntoSlotsByPlacementState","HexStacksCreator#ResolveTileTemplateForPool","HexStacksCreator#ClearExistingStacks","HexStacksCreator#AreAllPendingStacksPlacedOnFloor","HexStacksCreator#SpawnStacksIntoSlots","HexStacksCreator#GetPlayerStackColorIds","HexStacksCreator#GetRandomPresetColorIds","HexStacksCreator#TryBuildFivePlusFiveColorIds","HexStacksCreator#RentStack","HexStacksCreator#RegisterPendingPlacementStack","HexStacksCreator#CleanupPendingPlacementStacks","HexStacksCreator#IsSlotOccupied","HexStacksCreator#CreateRuntimeSpawnTemplate","HexStacksCreator#PrewarmStacks","HexStacksCreator#CleanupTrackedStacks","HexStacksCreator#ClearStacksPlacedOnFloors","HexStacksCreator#DespawnStack","HexStacksCreator#CollectSpawnFloors","HexStacksCreator#SpawnConfiguredFloorStack","HexStacksCreator#ResolveBottomColorId","HexStacksCreator#GetActivePaletteColorCount","HexStacksCreator#TryBuildTopColorAssignment","HexStacksCreator#AssignTopColorsRecursive","HexStacksCreator#GetAvailableTopColors","HexStacksCreator#LogGeneratedFloorFill","HexStacksCreator#ApplyContext","HexStacksCreator#MarkInitialPlayerStacksCompleted","HexStacksCreator#LogStacksCreator","HexTile#init","HexTile#ColorIdValue#get","HexTile#HasColor#get","HexTile#CurrentColor#get","HexTile#init","HexTile#SetColor","HexTile#TryGetColor","HexTile#ClearColor","HexTile#ApplyColor","HexTransferAnimator#GetStackName","HexTransferAnimator#init","HexTransferAnimator#TransferTopTilesFan","HexTransferAnimator#CreateTileTransferTween","HexTransferAnimator#CompleteAfterTweens","HexTransferAnimator#GetNeighborDirection","HexTransferAnimator#LogTransferAnimator","LunaBridge#GameEnded","LunaBridge#InstallFullGame","PackshotController#init","PackshotController#Awake","PackshotController#OnDisable","PackshotController#Update","PackshotController#ShowPackshot","PackshotController#HidePackshot","PackshotController#OnPlayNowPressed","PackshotController#SetVisible","PackshotController#SetStaticContentActive","PackshotController#KillFadeTween","PackshotController#WasPointerPressedThisFrame","PlayableUIRoot#TutorialController#get","PlayableUIRoot#PackshotController#get","PlayableUIRoot#CountdownTimerPanel#get","PlayableUIRoot#OnEnable","PlayableUIRoot#OnDisable","PlayableUIRoot#StartTutorial","PlayableUIRoot#StopTutorial","PlayableUIRoot#ShowPackshot","PlayableUIRoot#StartCountdownTimer","PlayableUIRoot#StopCountdownTimer","PlayableUIRoot#HandleCountdownFinished","PlayableUIRoot#HandlePackshotShown","PlayableUIRoot#HandleFirstTransferAndClearChainFinished","PlayableUIRoot#SubscribeManagerEvents","PlayableUIRoot#UnsubscribeManagerEvents","PlayableUIRoot#TryGetConfiguredGameDuration","PlayableUIRoot#IsEndGameAfterFirstChainEnabled","TutorialOverlayController#SelectBestTargetFloor","TutorialOverlayController#IsMatchingNeighborStack","TutorialOverlayController#GetStackName","TutorialOverlayController#GetFloorName","TutorialOverlayController#init","TutorialOverlayController#OnEnable","TutorialOverlayController#Start","TutorialOverlayController#StartTutorialAfterBootstrap","TutorialOverlayController#OnDisable","TutorialOverlayController#Update","TutorialOverlayController#StartTutorial","TutorialOverlayController#StopTutorial","TutorialOverlayController#ResetTutorialState","TutorialOverlayController#DisableTutorialPermanently","TutorialOverlayController#HandleDragStarted","TutorialOverlayController#HandleDragFinished","TutorialOverlayController#RestartTutorialAfterDelayRoutine","TutorialOverlayController#PlayHandLoop","TutorialOverlayController#TryResolveHandTargets","TutorialOverlayController#TryResolveDynamicHandTargets","TutorialOverlayController#TryFindTutorialMovePair","TutorialOverlayController#SelectBottomMostPlayerStack","TutorialOverlayController#HasNeighborWithTopColor","TutorialOverlayController#ResolveManager","TutorialOverlayController#ResolveWorldCamera","TutorialOverlayController#TryConvertWorldToUiPosition","TutorialOverlayController#KillHandTween","TutorialOverlayController#StopRestartRoutine","TutorialOverlayController#SetTutorialVisible","TutorialOverlayController#AreInitialGenerationSystemsReady$1","TutorialOverlayController#AreInitialGenerationSystemsReady","TutorialOverlayController#LogTutorial"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CountdownTimerPanel start.*/
    Bridge.define("CountdownTimerPanel", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gameContext: null,
            durationSeconds: 0,
            autoStartOnEnable: false,
            lowTimeThresholdNormalized: 0,
            barFrameNormalColor: null,
            barBackNormalColor: null,
            barFillNormalColor: null,
            iconFrameNormalColor: null,
            iconBackNormalColor: null,
            barFrameLowColor: null,
            barBackLowColor: null,
            barFillLowColor: null,
            iconFrameLowColor: null,
            iconBackLowColor: null,
            arrowStartAngle: 0,
            arrowEndAngle: 0,
            arrowNormalColor: null,
            iconShakeDuration: 0,
            iconShakeStrength: 0,
            iconShakeVibrato: 0,
            lowBackdropBlendRange: 0,
            panelRoot: null,
            barFrameImage: null,
            barBackImage: null,
            barFillImage: null,
            iconRoot: null,
            iconFrameImage: null,
            iconBackImage: null,
            iconNubImage: null,
            arrowTransform: null,
            arrowImage: null,
            remainingSeconds: 0,
            isRunning: false,
            lowStateEnabled: false,
            iconShakeTween: null
        },
        events: {
            CountdownFinished: null
        },
        props: {
            IsRunning: {
                get: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#IsRunning#get", this ); }

                    return this.isRunning;
                }
            },
            RemainingSeconds: {
                get: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#RemainingSeconds#get", this ); }

                    return this.remainingSeconds;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#init", this ); }

                this.barFrameNormalColor = new UnityEngine.Color();
                this.barBackNormalColor = new UnityEngine.Color();
                this.barFillNormalColor = new UnityEngine.Color();
                this.iconFrameNormalColor = new UnityEngine.Color();
                this.iconBackNormalColor = new UnityEngine.Color();
                this.barFrameLowColor = new UnityEngine.Color();
                this.barBackLowColor = new UnityEngine.Color();
                this.barFillLowColor = new UnityEngine.Color();
                this.iconFrameLowColor = new UnityEngine.Color();
                this.iconBackLowColor = new UnityEngine.Color();
                this.arrowNormalColor = new UnityEngine.Color();
                this.durationSeconds = 20.0;
                this.autoStartOnEnable = true;
                this.lowTimeThresholdNormalized = 0.2;
                this.barFrameNormalColor = new pc.Color( 0.11, 0.38, 0.86, 1.0 );
                this.barBackNormalColor = new pc.Color( 0.06, 0.22, 0.58, 1.0 );
                this.barFillNormalColor = new pc.Color( 0.35, 0.95, 0.18, 1.0 );
                this.iconFrameNormalColor = new pc.Color( 0.1, 0.37, 0.86, 1.0 );
                this.iconBackNormalColor = new pc.Color( 0.98, 0.99, 1.0, 1.0 );
                this.barFrameLowColor = new pc.Color( 0.93, 0.12, 0.12, 1.0 );
                this.barBackLowColor = new pc.Color( 0.55, 0.02, 0.02, 1.0 );
                this.barFillLowColor = new pc.Color( 0.95, 0.17, 0.17, 1.0 );
                this.iconFrameLowColor = new pc.Color( 0.93, 0.12, 0.12, 1.0 );
                this.iconBackLowColor = new pc.Color( 1.0, 0.92, 0.92, 1.0 );
                this.arrowStartAngle = 45.0;
                this.arrowEndAngle = -235.0;
                this.arrowNormalColor = new pc.Color( 0.9, 0.2, 0.2, 1.0 );
                this.iconShakeDuration = 0.24;
                this.iconShakeStrength = 9.0;
                this.iconShakeVibrato = 18;
                this.lowBackdropBlendRange = 0.16;
            }
        },
        methods: {
            /*CountdownTimerPanel.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#Awake", this ); }

                this.ApplyConfiguredDurationFromConfig();
                this.ConfigureStaticBindings();
                this.ResetToInitialState();
            },
            /*CountdownTimerPanel.Awake end.*/

            /*CountdownTimerPanel.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#OnEnable", this ); }

                if (this.autoStartOnEnable) {
                    this.ApplyConfiguredDurationFromConfig();
                    this.StartCountdown();
                } else {
                    this.StopCountdown();
                    this.ResetToInitialState();
                }
            },
            /*CountdownTimerPanel.OnEnable end.*/

            /*CountdownTimerPanel.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#OnDisable", this ); }

                this.StopShake();
            },
            /*CountdownTimerPanel.OnDisable end.*/

            /*CountdownTimerPanel.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#Update", this ); }

                if (this.isRunning) {
                    this.remainingSeconds = UnityEngine.Mathf.Max(0.0, this.remainingSeconds - UnityEngine.Time.deltaTime);
                    var duration = UnityEngine.Mathf.Max(0.0001, this.durationSeconds);
                    var normalizedTime = this.remainingSeconds / duration;
                    this.UpdateVisuals(normalizedTime);
                    if (!(this.remainingSeconds > 0.0)) {
                        this.isRunning = false;
                        this.StopShake();
                        !Bridge.staticEquals(this.CountdownFinished, null) ? this.CountdownFinished() : null;
                    }
                }
            },
            /*CountdownTimerPanel.Update end.*/

            /*CountdownTimerPanel.StartCountdown start.*/
            StartCountdown: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#StartCountdown", this ); }

                this.durationSeconds = UnityEngine.Mathf.Max(0.1, this.durationSeconds);
                this.remainingSeconds = this.durationSeconds;
                this.isRunning = true;
                this.lowStateEnabled = false;
                this.StopShake();
                this.UpdateVisuals(1.0);
            },
            /*CountdownTimerPanel.StartCountdown end.*/

            /*CountdownTimerPanel.StopCountdown start.*/
            StopCountdown: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#StopCountdown", this ); }

                this.isRunning = false;
                this.StopShake();
            },
            /*CountdownTimerPanel.StopCountdown end.*/

            /*CountdownTimerPanel.RestartCountdown start.*/
            RestartCountdown: function (newDurationSeconds) {
if ( TRACE ) { TRACE( "CountdownTimerPanel#RestartCountdown", this ); }

                this.durationSeconds = UnityEngine.Mathf.Max(0.1, newDurationSeconds);
                this.StartCountdown();
            },
            /*CountdownTimerPanel.RestartCountdown end.*/

            /*CountdownTimerPanel.ApplyConfiguredDurationFromConfig start.*/
            ApplyConfiguredDurationFromConfig: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#ApplyConfiguredDurationFromConfig", this ); }

                var config = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null);
                if (!(config == null)) {
                    this.durationSeconds = UnityEngine.Mathf.Max(0.1, config.gameDurationSeconds);
                }
            },
            /*CountdownTimerPanel.ApplyConfiguredDurationFromConfig end.*/

            /*CountdownTimerPanel.ConfigureStaticBindings start.*/
            ConfigureStaticBindings: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#ConfigureStaticBindings", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.barFillImage, null)) {
                    this.barFillImage.type = UnityEngine.UI.Image.Type.Filled;
                    this.barFillImage.fillMethod = UnityEngine.UI.Image.FillMethod.Horizontal;
                    this.barFillImage.fillOrigin = 0;
                    this.barFillImage.fillAmount = 1.0;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.arrowImage, null)) {
                    this.arrowImage.color = this.arrowNormalColor.$clone();
                }
                if (!(UnityEngine.Component.op_Equality(this.panelRoot, null))) {
                }
            },
            /*CountdownTimerPanel.ConfigureStaticBindings end.*/

            /*CountdownTimerPanel.ResetToInitialState start.*/
            ResetToInitialState: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#ResetToInitialState", this ); }

                this.remainingSeconds = UnityEngine.Mathf.Max(0.1, this.durationSeconds);
                this.lowStateEnabled = false;
                this.StopShake();
                this.UpdateVisuals(1.0);
            },
            /*CountdownTimerPanel.ResetToInitialState end.*/

            /*CountdownTimerPanel.UpdateVisuals start.*/
            UpdateVisuals: function (normalizedTime) {
if ( TRACE ) { TRACE( "CountdownTimerPanel#UpdateVisuals", this ); }

                normalizedTime = Math.max(0, Math.min(1, normalizedTime));
                if (UnityEngine.MonoBehaviour.op_Inequality(this.barFillImage, null)) {
                    this.barFillImage.fillAmount = normalizedTime;
                }
                var shouldBeLow = normalizedTime <= this.lowTimeThresholdNormalized;
                if (shouldBeLow !== this.lowStateEnabled) {
                    this.lowStateEnabled = shouldBeLow;
                    if (this.lowStateEnabled) {
                        this.StartShake();
                    } else {
                        this.StopShake();
                    }
                }
                var fillBlend = pc.math.smoothstep(0.0, 1.0, 1.0 - normalizedTime);
                var lowBlendStart = Math.max(0, Math.min(1, this.lowTimeThresholdNormalized + this.lowBackdropBlendRange));
                var lowBackdropBlend = pc.math.inverseLerp(lowBlendStart, this.lowTimeThresholdNormalized, normalizedTime);
                lowBackdropBlend = pc.math.smoothstep(0.0, 1.0, lowBackdropBlend);
                var frameColor = pc.Color.lerp( this.barFrameNormalColor, this.barFrameLowColor, lowBackdropBlend );
                var backColor = pc.Color.lerp( this.barBackNormalColor, this.barBackLowColor, lowBackdropBlend );
                var fillColor = pc.Color.lerp( this.barFillNormalColor, this.barFillLowColor, fillBlend );
                var iconFrameColor = pc.Color.lerp( this.iconFrameNormalColor, this.iconFrameLowColor, lowBackdropBlend );
                var iconBackColor = pc.Color.lerp( this.iconBackNormalColor, this.iconBackLowColor, lowBackdropBlend );
                if (UnityEngine.MonoBehaviour.op_Inequality(this.barFrameImage, null)) {
                    this.barFrameImage.color = frameColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.barBackImage, null)) {
                    this.barBackImage.color = backColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.barFillImage, null)) {
                    this.barFillImage.color = fillColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.iconFrameImage, null)) {
                    this.iconFrameImage.color = iconFrameColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.iconBackImage, null)) {
                    this.iconBackImage.color = iconBackColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.iconNubImage, null)) {
                    this.iconNubImage.color = iconFrameColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.arrowImage, null)) {
                    this.arrowImage.color = this.arrowNormalColor.$clone();
                }
                if (UnityEngine.Component.op_Inequality(this.arrowTransform, null)) {
                    var zAngle = pc.math.lerp(this.arrowEndAngle, this.arrowStartAngle, normalizedTime);
                    this.arrowTransform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, zAngle );
                }
            },
            /*CountdownTimerPanel.UpdateVisuals end.*/

            /*CountdownTimerPanel.StartShake start.*/
            StartShake: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#StartShake", this ); }

                if (!(UnityEngine.Component.op_Equality(this.iconRoot, null))) {
                    this.StopShake();
                    this.iconShakeTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.ShortcutExtensions.DOShakeRotation$3(this.iconRoot, this.iconShakeDuration, new pc.Vec3( 0.0, 0.0, this.iconShakeStrength ), this.iconShakeVibrato, 90.0, false), -1, DG.Tweening.LoopType.Restart), DG.Tweening.Ease.Linear);
                }
            },
            /*CountdownTimerPanel.StartShake end.*/

            /*CountdownTimerPanel.StopShake start.*/
            StopShake: function () {
if ( TRACE ) { TRACE( "CountdownTimerPanel#StopShake", this ); }

                if (this.iconShakeTween != null) {
                    if (DG.Tweening.TweenExtensions.IsActive(this.iconShakeTween)) {
                        DG.Tweening.TweenExtensions.Kill(this.iconShakeTween);
                    }
                    this.iconShakeTween = null;
                }
                if (UnityEngine.Component.op_Inequality(this.iconRoot, null)) {
                    this.iconRoot.localRotation = pc.Quat.IDENTITY.clone();
                }
            },
            /*CountdownTimerPanel.StopShake end.*/

            /*CountdownTimerPanel.LogTimerEvent start.*/
            LogTimerEvent: function (message) {
if ( TRACE ) { TRACE( "CountdownTimerPanel#LogTimerEvent", this ); }

                UnityEngine.Debug.Log$1(message, this);
            },
            /*CountdownTimerPanel.LogTimerEvent end.*/

            /*CountdownTimerPanel.LogTimerWarning start.*/
            LogTimerWarning: function (message) {
if ( TRACE ) { TRACE( "CountdownTimerPanel#LogTimerWarning", this ); }

                UnityEngine.Debug.LogWarning$1(message, this);
            },
            /*CountdownTimerPanel.LogTimerWarning end.*/


        }
    });
    /*CountdownTimerPanel end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*HexClearFxPlayer start.*/
    Bridge.define("HexClearFxPlayer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexClearFxPlayer.TintParticleSystems:static start.*/
                TintParticleSystems: function (rootFx, tintColor) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#TintParticleSystems", this ); }

                    var $t;
                    if (UnityEngine.Component.op_Equality(rootFx, null)) {
                        return;
                    }
                    var fxSystems = rootFx.GetComponentsInChildren$1(UnityEngine.ParticleSystem, true);
                    $t = Bridge.getEnumerator(fxSystems);
                    try {
                        while ($t.moveNext()) {
                            var fxSystem = $t.Current;
                            if (!(UnityEngine.Component.op_Equality(fxSystem, null))) {
                                var main = fxSystem.main;
                                main.startColor = new pc.MinMaxGradient(tintColor.$clone());
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*HexClearFxPlayer.TintParticleSystems:static end.*/

                /*HexClearFxPlayer.EstimateParticleSystemLifetime:static start.*/
                EstimateParticleSystemLifetime: function (rootFx) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#EstimateParticleSystemLifetime", this ); }

                    var $t;
                    if (UnityEngine.Component.op_Equality(rootFx, null)) {
                        return 0.1;
                    }
                    var fxSystems = rootFx.GetComponentsInChildren$1(UnityEngine.ParticleSystem, true);
                    var maxLifetime = 0.1;
                    $t = Bridge.getEnumerator(fxSystems);
                    try {
                        while ($t.moveNext()) {
                            var fxSystem = $t.Current;
                            if (!(UnityEngine.Component.op_Equality(fxSystem, null))) {
                                var main = fxSystem.main;
                                var speed = UnityEngine.Mathf.Max(0.0001, main.simulationSpeed);
                                var duration = main.duration / speed;
                                var delay = main.startDelay.constantMax / speed;
                                var lifetime = main.startLifetime.constantMax / speed;
                                var totalLifetime = delay + duration + lifetime;
                                if (totalLifetime > maxLifetime) {
                                    maxLifetime = totalLifetime;
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return maxLifetime;
                },
                /*HexClearFxPlayer.EstimateParticleSystemLifetime:static end.*/


            }
        },
        fields: {
            clearTilesFxPrefab: null,
            clearTilesFxLifetimePadding: 0
        },
        props: {
            ClearTilesFxPrefab: {
                get: function () {
if ( TRACE ) { TRACE( "HexClearFxPlayer#ClearTilesFxPrefab#get", this ); }

                    return this.clearTilesFxPrefab;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexClearFxPlayer#init", this ); }

                this.clearTilesFxLifetimePadding = 0.2;
            }
        },
        methods: {
            /*HexClearFxPlayer.Prewarm start.*/
            Prewarm: function (poolService) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#Prewarm", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(poolService, null)) && !(UnityEngine.Component.op_Equality(this.clearTilesFxPrefab, null))) {
                    poolService.PrewarmFx(this.clearTilesFxPrefab);
                }
            },
            /*HexClearFxPlayer.Prewarm end.*/

            /*HexClearFxPlayer.TryGetClearBatchColor start.*/
            TryGetClearBatchColor: function (tiles, color) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#TryGetClearBatchColor", this ); }

                color.v = new pc.Color( 1, 1, 1, 1 );
                if (tiles == null || tiles.Count === 0) {
                    return false;
                }
                for (var i = 0; i < tiles.Count; i = (i + 1) | 0) {
                    var tile = tiles.getItem(i);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null)) && tile.TryGetColor(color)) {
                        return true;
                    }
                }
                return false;
            },
            /*HexClearFxPlayer.TryGetClearBatchColor end.*/

            /*HexClearFxPlayer.PlayClearTilesFxAtPosition start.*/
            PlayClearTilesFxAtPosition: function (coroutineRunner, poolService, position, tintColor) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#PlayClearTilesFxAtPosition", this ); }

                if (!(UnityEngine.Component.op_Equality(this.clearTilesFxPrefab, null)) && !(UnityEngine.MonoBehaviour.op_Equality(coroutineRunner, null))) {
                    var spawnedFx = this.RentClearTilesFx(poolService, position.$clone(), this.clearTilesFxPrefab.transform.rotation.$clone());
                    if (!(UnityEngine.Component.op_Equality(spawnedFx, null))) {
                        spawnedFx.gameObject.SetActive(true);
                        HexClearFxPlayer.TintParticleSystems(spawnedFx, tintColor.$clone());
                        spawnedFx.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                        spawnedFx.Play$1(true);
                        var fxLifetime = HexClearFxPlayer.EstimateParticleSystemLifetime(spawnedFx) + UnityEngine.Mathf.Max(0.0, this.clearTilesFxLifetimePadding);
                        coroutineRunner.StartCoroutine$1(this.ReturnClearTilesFxAfterDelay(poolService, spawnedFx, fxLifetime));
                    }
                }
            },
            /*HexClearFxPlayer.PlayClearTilesFxAtPosition end.*/

            /*HexClearFxPlayer.RentClearTilesFx start.*/
            RentClearTilesFx: function (poolService, position, rotation) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#RentClearTilesFx", this ); }

                if (UnityEngine.Component.op_Equality(this.clearTilesFxPrefab, null)) {
                    return null;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) {
                    var pooledFx = poolService.RentFx(this.clearTilesFxPrefab, position.$clone(), rotation.$clone());
                    if (UnityEngine.Component.op_Inequality(pooledFx, null)) {
                        return pooledFx;
                    }
                }
                var spawnedFxObject = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.clearTilesFxPrefab.gameObject, position, rotation);
                if (UnityEngine.GameObject.op_Equality(spawnedFxObject, null)) {
                    return null;
                }
                var spawnedFx = spawnedFxObject.GetComponent(UnityEngine.ParticleSystem);
                if (UnityEngine.Component.op_Inequality(spawnedFx, null)) {
                    return spawnedFx;
                }
                UnityEngine.Object.Destroy(spawnedFxObject);
                return null;
            },
            /*HexClearFxPlayer.RentClearTilesFx end.*/

            /*HexClearFxPlayer.ReturnClearTilesFxAfterDelay start.*/
            ReturnClearTilesFxAfterDelay: function (poolService, fx, delay) {
if ( TRACE ) { TRACE( "HexClearFxPlayer#ReturnClearTilesFxAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    safeDelay,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(fx, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    safeDelay = UnityEngine.Mathf.Max(0.05, delay);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(safeDelay);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (!(UnityEngine.Component.op_Equality(fx, null))) {
                                            fx.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                                            if (!(UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) || !poolService.ReturnFx(fx, this.clearTilesFxPrefab)) {
                                                UnityEngine.Object.Destroy(fx.gameObject);
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexClearFxPlayer.ReturnClearTilesFxAfterDelay end.*/


        }
    });
    /*HexClearFxPlayer end.*/

    /*HexConfig start.*/
    Bridge.define("HexConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            colors: null,
            paletteColorCount: 0,
            isRandom: false,
            startStackColors: null,
            generatePlayerStacksByFivePlusFive: false,
            fillGeneratedFloorWithStacks: false,
            noStackSpawnCoords: null,
            topMatchClearCount: 0,
            gameDurationSeconds: 0,
            endGameAfterFirstTransferAndClearChain: false,
            floorWidth: 0,
            floorLength: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexConfig#init", this ); }

                this.paletteColorCount = 0;
                this.isRandom = false;
                this.generatePlayerStacksByFivePlusFive = false;
                this.fillGeneratedFloorWithStacks = true;
                this.topMatchClearCount = 3;
                this.gameDurationSeconds = 20.0;
                this.endGameAfterFirstTransferAndClearChain = false;
                this.floorWidth = 3;
                this.floorLength = 3;
            }
        }
    });
    /*HexConfig end.*/

    /*HexConfig+FloorCoord start.*/
    Bridge.define("HexConfig.FloorCoord", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexConfig.FloorCoord#getDefaultValue", this ); }
 return new HexConfig.FloorCoord(); }
            }
        },
        fields: {
            x: 0,
            z: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "HexConfig.FloorCoord#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexConfig.FloorCoord#getHashCode", this ); }

                var h = Bridge.addHash([3739161642, this.x, this.z]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexConfig.FloorCoord#equals", this ); }

                if (!Bridge.is(o, HexConfig.FloorCoord)) {
                    return false;
                }
                return Bridge.equals(this.x, o.x) && Bridge.equals(this.z, o.z);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexConfig.FloorCoord#$clone", this ); }

                var s = to || new HexConfig.FloorCoord();
                s.x = this.x;
                s.z = this.z;
                return s;
            }
        }
    });
    /*HexConfig+FloorCoord end.*/

    /*HexConfig+StackColorPreset start.*/
    Bridge.define("HexConfig.StackColorPreset", {
        $kind: 1002,
        fields: {
            colorIdsBottomToTop: null
        }
    });
    /*HexConfig+StackColorPreset end.*/

    /*HexDragger start.*/
    Bridge.define("HexDragger", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MousePointerId: 0,
                instance: null,
                globalDragEnabled: false
            },
            events: {
                DragStarted: null,
                DragFinished: null
            },
            props: {
                IsGlobalDragEnabled: {
                    get: function () {
if ( TRACE ) { TRACE( "HexDragger#IsGlobalDragEnabled#get", this ); }

                        return HexDragger.globalDragEnabled;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexDragger#init", this ); }

                    this.MousePointerId = -1;
                    this.globalDragEnabled = true;
                }
            },
            methods: {
                /*HexDragger.SetGlobalDragEnabled:static start.*/
                SetGlobalDragEnabled: function (enabled) {
if ( TRACE ) { TRACE( "HexDragger#SetGlobalDragEnabled", this ); }

                    HexDragger.globalDragEnabled = enabled;
                    if (!enabled && UnityEngine.MonoBehaviour.op_Inequality(HexDragger.instance, null)) {
                        HexDragger.instance.CancelActiveDrag();
                    }
                },
                /*HexDragger.SetGlobalDragEnabled:static end.*/


            }
        },
        fields: {
            gameContext: null,
            inputCamera: null,
            pickMaxDistance: 0,
            interactionMask: null,
            floorCheckStartHeight: 0,
            floorCheckDistance: 0,
            floorRaycastBufferSize: 0,
            liftHeight: 0,
            liftDuration: 0,
            liftEase: 0,
            attachMoveDuration: 0,
            attachMoveEase: 0,
            dropDuration: 0,
            dropEase: 0,
            activeTween: null,
            isDragging: false,
            isSettling: false,
            activePointerId: 0,
            dragLiftY: 0,
            dragStartPosition: null,
            dragOffset: null,
            dragPlane: null,
            dragEndedWithSuccessfulDrop: false,
            highlightedFloor: null,
            floorRaycastBuffer: null,
            cachedManager: null,
            activeStack: null,
            activeStackTransform: null
        },
        props: {
            Manager: {
                get: function () {
if ( TRACE ) { TRACE( "HexDragger#Manager#get", this ); }

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.cachedManager, null)) {
                        return this.cachedManager;
                    }
                    if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null)) {
                        this.gameContext = UnityEngine.Object.FindObjectOfType(HexGameContext);
                    }
                    this.cachedManager = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Manager : null);
                    return this.cachedManager;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexDragger#init", this ); }

                this.interactionMask = new UnityEngine.LayerMask();
                this.dragStartPosition = new UnityEngine.Vector3();
                this.dragOffset = new UnityEngine.Vector3();
                this.dragPlane = new UnityEngine.Plane();
                this.pickMaxDistance = 100.0;
                this.interactionMask = UnityEngine.LayerMask.op_Implicit$1(-1);
                this.floorCheckStartHeight = 2.0;
                this.floorCheckDistance = 8.0;
                this.floorRaycastBufferSize = 16;
                this.liftHeight = 0.45;
                this.liftDuration = 0.12;
                this.liftEase = DG.Tweening.Ease.OutQuad;
                this.attachMoveDuration = 0.14;
                this.attachMoveEase = DG.Tweening.Ease.OutQuad;
                this.dropDuration = 0.12;
                this.dropEase = DG.Tweening.Ease.InOutQuad;
                this.activePointerId = -2147483648;
            }
        },
        methods: {
            /*HexDragger.SetGameContext start.*/
            SetGameContext: function (context) {
if ( TRACE ) { TRACE( "HexDragger#SetGameContext", this ); }

                this.gameContext = context;
                this.cachedManager = null;
            },
            /*HexDragger.SetGameContext end.*/

            /*HexDragger.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexDragger#Awake", this ); }

                HexDragger.instance = this;
                if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null)) {
                    this.gameContext = UnityEngine.Object.FindObjectOfType(HexGameContext);
                }
                this.cachedManager = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Manager : null);
                if (UnityEngine.Component.op_Equality(this.inputCamera, null)) {
                    this.inputCamera = UnityEngine.Camera.main;
                }
                this.EnsureFloorRaycastBuffer();
            },
            /*HexDragger.Awake end.*/

            /*HexDragger.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "HexDragger#OnEnable", this ); }

                HexDragger.instance = this;
            },
            /*HexDragger.OnEnable end.*/

            /*HexDragger.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HexDragger#Update", this ); }

                if (!HexDragger.globalDragEnabled) {
                    if (this.isDragging || this.isSettling) {
                        this.CancelActiveDrag();
                    }
                } else {
                    if (this.isSettling) {
                        return;
                    }
                    if (!this.isDragging) {
                        this.TryBeginDrag();
                        return;
                    }
                    if (!this.IsActiveStackValid()) {
                        this.CancelActiveDrag();
                        return;
                    }
                    var pointerPosition = { v : new UnityEngine.Vector2() };
                    if (this.TryGetPointerPosition(this.activePointerId, pointerPosition)) {
                        this.UpdateDrag(pointerPosition.v.$clone());
                    }
                    if (this.WasPointerReleased(this.activePointerId)) {
                        this.EndDrag();
                    }
                }
            },
            /*HexDragger.Update end.*/

            /*HexDragger.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "HexDragger#OnDisable", this ); }

                this.KillActiveTween(false);
                this.CancelActiveDragInternal(false);
                if (UnityEngine.MonoBehaviour.op_Equality(HexDragger.instance, this)) {
                    HexDragger.instance = null;
                }
            },
            /*HexDragger.OnDisable end.*/

            /*HexDragger.TryBeginDrag start.*/
            TryBeginDrag: function () {
if ( TRACE ) { TRACE( "HexDragger#TryBeginDrag", this ); }

                if (UnityEngine.Component.op_Equality(this.inputCamera, null)) {
                    return;
                }
                var manager = this.Manager;
                var pointerId = { };
                var pointerPosition = { v : new UnityEngine.Vector2() };
                if ((UnityEngine.MonoBehaviour.op_Inequality(manager, null) && manager.IsTransferInProgress) || !this.TryGetPointerDown(pointerId, pointerPosition)) {
                    return;
                }
                var ray = this.inputCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(pointerPosition.v));
                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$1(ray, hit, this.pickMaxDistance, UnityEngine.LayerMask.op_Implicit(this.interactionMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    var hitStack = hit.v.collider.GetComponentInParent(HexStack);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(hitStack, null)) && hitStack.gameObject.activeInHierarchy && hitStack.TileCount !== 0 && !(UnityEngine.MonoBehaviour.op_Inequality(hitStack.CurrentFloor, null))) {
                        this.StartDrag(hitStack, pointerId.v, hit.v.point.$clone());
                    }
                }
            },
            /*HexDragger.TryBeginDrag end.*/

            /*HexDragger.StartDrag start.*/
            StartDrag: function (stackToDrag, pointerId, hitPoint) {
if ( TRACE ) { TRACE( "HexDragger#StartDrag", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stackToDrag, null)) {
                    return;
                }
                this.KillActiveTween(false);
                this.activeStack = stackToDrag;
                this.activeStackTransform = stackToDrag.transform;
                if (UnityEngine.Component.op_Equality(this.activeStackTransform, null)) {
                    this.CancelActiveDragInternal(false);
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null) && UnityEngine.MonoBehaviour.op_Inequality(this.activeStack.GameContext, null)) {
                    this.gameContext = this.activeStack.GameContext;
                    this.cachedManager = this.gameContext.Manager;
                }
                this.isDragging = true;
                this.isSettling = false;
                this.activePointerId = pointerId;
                this.dragStartPosition = this.activeStackTransform.position.$clone();
                this.dragLiftY = this.dragStartPosition.y + this.liftHeight;
                this.dragPlane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), this.dragStartPosition);
                this.dragOffset = this.dragStartPosition.$clone().sub( hitPoint );
                this.dragOffset.y = 0.0;
                this.dragEndedWithSuccessfulDrop = false;
                !Bridge.staticEquals(HexDragger.DragStarted, null) ? HexDragger.DragStarted(this.activeStack) : null;
                this.UpdateDropHighlight();
                this.activeTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveY(this.activeStackTransform, this.dragLiftY, this.liftDuration), this.liftEase);
            },
            /*HexDragger.StartDrag end.*/

            /*HexDragger.UpdateDrag start.*/
            UpdateDrag: function (pointerPosition) {
if ( TRACE ) { TRACE( "HexDragger#UpdateDrag", this ); }

                if (!(UnityEngine.Component.op_Equality(this.activeStackTransform, null)) && !(UnityEngine.Component.op_Equality(this.inputCamera, null))) {
                    var ray = this.inputCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(pointerPosition));
                    var enter = { };
                    if (this.dragPlane.Raycast(ray, enter)) {
                        var pointOnPlane = ray.GetPoint(enter.v).add( this.dragOffset );
                        var current = this.activeStackTransform.position.$clone();
                        this.activeStackTransform.position = new pc.Vec3( pointOnPlane.x, current.y, pointOnPlane.z );
                        this.UpdateDropHighlight();
                    }
                }
            },
            /*HexDragger.UpdateDrag end.*/

            /*HexDragger.EndDrag start.*/
            EndDrag: function () {
if ( TRACE ) { TRACE( "HexDragger#EndDrag", this ); }

                if (!this.IsActiveStackValid()) {
                    this.CancelActiveDragInternal(false);
                    return;
                }
                this.isDragging = false;
                var floor = { v : this.highlightedFloor };
                var hasFloorUnderStack = UnityEngine.MonoBehaviour.op_Inequality(floor.v, null);
                if (!hasFloorUnderStack) {
                    hasFloorUnderStack = this.TryGetFloorUnderStack(floor);
                }
                var manager = this.Manager;
                if (hasFloorUnderStack && UnityEngine.MonoBehaviour.op_Inequality(manager, null) && !manager.CanPlaceStackOnFloor(this.activeStack, floor.v)) {
                    hasFloorUnderStack = false;
                    floor.v = null;
                }
                this.SetHighlightedFloor(null);
                var targetPosition = (hasFloorUnderStack ? floor.v.GetStackPlacementPosition(this.dragStartPosition.y) : this.dragStartPosition.$clone());
                this.dragEndedWithSuccessfulDrop = hasFloorUnderStack;
                this.StartSettleTween(targetPosition.$clone(), hasFloorUnderStack ? floor.v : null);
            },
            /*HexDragger.EndDrag end.*/

            /*HexDragger.StartSettleTween start.*/
            StartSettleTween: function (targetPosition, targetFloor) {
if ( TRACE ) { TRACE( "HexDragger#StartSettleTween", this ); }

                if (UnityEngine.Component.op_Equality(this.activeStackTransform, null)) {
                    this.CancelActiveDragInternal(false);
                    return;
                }
                this.isSettling = true;
                this.KillActiveTween(false);
                var moveY = UnityEngine.Mathf.Max(this.activeStackTransform.position.y, this.dragLiftY);
                var movePoint = new pc.Vec3( targetPosition.x, moveY, targetPosition.z );
                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.activeStackTransform, movePoint.$clone(), this.attachMoveDuration), this.attachMoveEase));
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveY(this.activeStackTransform, targetPosition.y, this.dropDuration), this.dropEase));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.bind(this, function () {
                    if (UnityEngine.Component.op_Inequality(this.activeStackTransform, null)) {
                        this.activeStackTransform.position = targetPosition.$clone();
                    }
                    this.activeTween = null;
                    var manager = this.Manager;
                    if (UnityEngine.MonoBehaviour.op_Inequality(targetFloor, null) && UnityEngine.MonoBehaviour.op_Inequality(manager, null) && UnityEngine.MonoBehaviour.op_Inequality(this.activeStack, null)) {
                        manager.HandleStackPlaced(this.activeStack, targetFloor, Bridge.fn.bind(this, function () {
                            if (!(UnityEngine.MonoBehaviour.op_Equality(this, null))) {
                                this.FinalizeSettle();
                            }
                        }));
                    } else {
                        this.FinalizeSettle();
                    }
                }));
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Sequence, sequence, Bridge.fn.bind(this, function () {
                    this.activeTween = null;
                    if (this.isSettling) {
                        this.isSettling = false;
                        this.SetHighlightedFloor(null);
                        this.ReleaseDragState();
                    }
                }));
                this.activeTween = sequence;
            },
            /*HexDragger.StartSettleTween end.*/

            /*HexDragger.FinalizeSettle start.*/
            FinalizeSettle: function () {
if ( TRACE ) { TRACE( "HexDragger#FinalizeSettle", this ); }

                var finishedStack = this.activeStack;
                var wasSuccessfulDrop = this.dragEndedWithSuccessfulDrop;
                this.isSettling = false;
                this.ReleaseDragState();
                !Bridge.staticEquals(HexDragger.DragFinished, null) ? HexDragger.DragFinished(finishedStack, wasSuccessfulDrop) : null;
            },
            /*HexDragger.FinalizeSettle end.*/

            /*HexDragger.TryGetFloorUnderStack start.*/
            TryGetFloorUnderStack: function (floor) {
if ( TRACE ) { TRACE( "HexDragger#TryGetFloorUnderStack", this ); }

                floor.v = null;
                if (!this.IsActiveStackValid()) {
                    return false;
                }
                var origin = this.activeStackTransform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this.floorCheckStartHeight ) );
                var rayDistance = this.floorCheckStartHeight + this.floorCheckDistance;
                this.EnsureFloorRaycastBuffer();
                var hitCount = UnityEngine.Physics.RaycastNonAlloc$2(origin, pc.Vec3.DOWN.clone(), this.floorRaycastBuffer, rayDistance, UnityEngine.LayerMask.op_Implicit(this.interactionMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
                if (hitCount >= this.floorRaycastBuffer.length) {
                    var allHits = UnityEngine.Physics.RaycastAll$2(origin, pc.Vec3.DOWN.clone(), rayDistance, UnityEngine.LayerMask.op_Implicit(this.interactionMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
                    floor.v = this.GetNearestFloorFromHits(allHits, allHits.length);
                    return UnityEngine.MonoBehaviour.op_Inequality(floor.v, null);
                }
                floor.v = this.GetNearestFloorFromHits(this.floorRaycastBuffer, hitCount);
                return UnityEngine.MonoBehaviour.op_Inequality(floor.v, null);
            },
            /*HexDragger.TryGetFloorUnderStack end.*/

            /*HexDragger.GetNearestFloorFromHits start.*/
            GetNearestFloorFromHits: function (hits, hitCount) {
if ( TRACE ) { TRACE( "HexDragger#GetNearestFloorFromHits", this ); }

                if (hits == null || hitCount <= 0) {
                    return null;
                }
                var nearestDistance = 3.40282347E+38;
                var nearestFloor = null;
                for (var i = 0; i < hitCount; i = (i + 1) | 0) {
                    var hit = hits[i].$clone();
                    if (UnityEngine.Component.op_Equality(hit.collider, null)) {
                        continue;
                    }
                    var hitStack = hit.collider.GetComponentInParent(HexStack);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(hitStack, this.activeStack))) {
                        var candidateFloor = hit.collider.GetComponentInParent(HexFloor);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(candidateFloor, null)) && !(hit.distance >= nearestDistance)) {
                            nearestDistance = hit.distance;
                            nearestFloor = candidateFloor;
                        }
                    }
                }
                return nearestFloor;
            },
            /*HexDragger.GetNearestFloorFromHits end.*/

            /*HexDragger.EnsureFloorRaycastBuffer start.*/
            EnsureFloorRaycastBuffer: function () {
if ( TRACE ) { TRACE( "HexDragger#EnsureFloorRaycastBuffer", this ); }

                var size = UnityEngine.Mathf.Max(1, this.floorRaycastBufferSize);
                if (this.floorRaycastBuffer == null || this.floorRaycastBuffer.length !== size) {
                    this.floorRaycastBuffer = System.Array.init(size, function (){
                        return new UnityEngine.RaycastHit();
                    }, UnityEngine.RaycastHit);
                }
            },
            /*HexDragger.EnsureFloorRaycastBuffer end.*/

            /*HexDragger.KillActiveTween start.*/
            KillActiveTween: function (complete) {
if ( TRACE ) { TRACE( "HexDragger#KillActiveTween", this ); }

                if (this.activeTween == null || !DG.Tweening.TweenExtensions.IsActive(this.activeTween)) {
                    this.activeTween = null;
                    return;
                }
                DG.Tweening.TweenExtensions.Kill(this.activeTween, complete);
                this.activeTween = null;
            },
            /*HexDragger.KillActiveTween end.*/

            /*HexDragger.ReleaseDragState start.*/
            ReleaseDragState: function () {
if ( TRACE ) { TRACE( "HexDragger#ReleaseDragState", this ); }

                this.activePointerId = -2147483648;
                this.isDragging = false;
                this.dragEndedWithSuccessfulDrop = false;
                this.SetHighlightedFloor(null);
                this.activeStack = null;
                this.activeStackTransform = null;
            },
            /*HexDragger.ReleaseDragState end.*/

            /*HexDragger.CancelActiveDrag start.*/
            CancelActiveDrag: function () {
if ( TRACE ) { TRACE( "HexDragger#CancelActiveDrag", this ); }

                this.CancelActiveDragInternal(false);
            },
            /*HexDragger.CancelActiveDrag end.*/

            /*HexDragger.CancelActiveDragInternal start.*/
            CancelActiveDragInternal: function (invokeFinishedEvent) {
if ( TRACE ) { TRACE( "HexDragger#CancelActiveDragInternal", this ); }

                var cancelledStack = this.activeStack;
                this.KillActiveTween(false);
                if (UnityEngine.Component.op_Inequality(this.activeStackTransform, null)) {
                    this.activeStackTransform.position = this.dragStartPosition.$clone();
                }
                this.isSettling = false;
                this.ReleaseDragState();
                if (invokeFinishedEvent && UnityEngine.MonoBehaviour.op_Inequality(cancelledStack, null)) {
                    !Bridge.staticEquals(HexDragger.DragFinished, null) ? HexDragger.DragFinished(cancelledStack, false) : null;
                }
            },
            /*HexDragger.CancelActiveDragInternal end.*/

            /*HexDragger.UpdateDropHighlight start.*/
            UpdateDropHighlight: function () {
if ( TRACE ) { TRACE( "HexDragger#UpdateDropHighlight", this ); }

                if (!this.isDragging || !this.IsActiveStackValid()) {
                    this.SetHighlightedFloor(null);
                    return;
                }
                var floor = { };
                if (!this.TryGetFloorUnderStack(floor)) {
                    this.SetHighlightedFloor(null);
                    return;
                }
                var manager = this.Manager;
                if (UnityEngine.MonoBehaviour.op_Inequality(manager, null) && !manager.CanPlaceStackOnFloor(this.activeStack, floor.v)) {
                    this.SetHighlightedFloor(null);
                } else {
                    this.SetHighlightedFloor(floor.v);
                }
            },
            /*HexDragger.UpdateDropHighlight end.*/

            /*HexDragger.SetHighlightedFloor start.*/
            SetHighlightedFloor: function (floor) {
if ( TRACE ) { TRACE( "HexDragger#SetHighlightedFloor", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this.highlightedFloor, floor))) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightedFloor, null)) {
                        this.highlightedFloor.SetDropHighlight(false);
                    }
                    this.highlightedFloor = floor;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightedFloor, null)) {
                        this.highlightedFloor.SetDropHighlight(true);
                    }
                }
            },
            /*HexDragger.SetHighlightedFloor end.*/

            /*HexDragger.TryGetPointerDown start.*/
            TryGetPointerDown: function (pointerId, pointerPosition) {
if ( TRACE ) { TRACE( "HexDragger#TryGetPointerDown", this ); }

                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    var touch = UnityEngine.Input.GetTouch(i);
                    if (touch.phase === UnityEngine.TouchPhase.Began) {
                        pointerId.v = touch.fingerId;
                        pointerPosition.v = touch.position.$clone();
                        return true;
                    }
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    pointerId.v = -1;
                    pointerPosition.v = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    return true;
                }
                pointerId.v = -2147483648;
                pointerPosition.v = Bridge.getDefaultValue(UnityEngine.Vector2);
                return false;
            },
            /*HexDragger.TryGetPointerDown end.*/

            /*HexDragger.TryGetPointerPosition start.*/
            TryGetPointerPosition: function (pointerId, pointerPosition) {
if ( TRACE ) { TRACE( "HexDragger#TryGetPointerPosition", this ); }

                if (pointerId === -1) {
                    pointerPosition.v = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    return true;
                }
                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    var touch = UnityEngine.Input.GetTouch(i);
                    if (touch.fingerId === pointerId) {
                        pointerPosition.v = touch.position.$clone();
                        return true;
                    }
                }
                pointerPosition.v = Bridge.getDefaultValue(UnityEngine.Vector2);
                return false;
            },
            /*HexDragger.TryGetPointerPosition end.*/

            /*HexDragger.WasPointerReleased start.*/
            WasPointerReleased: function (pointerId) {
if ( TRACE ) { TRACE( "HexDragger#WasPointerReleased", this ); }

                if (pointerId === -1) {
                    return UnityEngine.Input.GetMouseButtonUp(0);
                }
                var touchStillPresent = false;
                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    var touch = UnityEngine.Input.GetTouch(i);
                    if (touch.fingerId === pointerId) {
                        touchStillPresent = true;
                        return touch.phase === UnityEngine.TouchPhase.Ended || touch.phase === UnityEngine.TouchPhase.Canceled;
                    }
                }
                return !touchStillPresent;
            },
            /*HexDragger.WasPointerReleased end.*/

            /*HexDragger.IsActiveStackValid start.*/
            IsActiveStackValid: function () {
if ( TRACE ) { TRACE( "HexDragger#IsActiveStackValid", this ); }

                return UnityEngine.MonoBehaviour.op_Inequality(this.activeStack, null) && UnityEngine.Component.op_Inequality(this.activeStackTransform, null) && this.activeStack.gameObject.activeInHierarchy;
            },
            /*HexDragger.IsActiveStackValid end.*/


        }
    });
    /*HexDragger end.*/

    /*HexFloor start.*/
    Bridge.define("HexFloor", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SideCount: 0,
                BaseColorId: 0,
                ColorId: 0,
                EmissionColorId: 0,
                ActiveFloorSet: null
            },
            props: {
                ActiveFloors: {
                    get: function () {
if ( TRACE ) { TRACE( "HexFloor#ActiveFloors#get", this ); }

                        return HexFloor.ActiveFloorSet;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexFloor#init", this ); }

                    this.SideCount = 6;
                    this.BaseColorId = UnityEngine.Shader.PropertyToID("_BaseColor");
                    this.ColorId = UnityEngine.Shader.PropertyToID("_Color");
                    this.EmissionColorId = UnityEngine.Shader.PropertyToID("_EmissionColor");
                    this.ActiveFloorSet = new (System.Collections.Generic.HashSet$1(HexFloor)).ctor();
                }
            }
        },
        fields: {
            nearFloors: null,
            stackAnchor: null,
            gridX: 0,
            gridZ: 0,
            occupiedStack: null,
            highlightRenderers: null,
            dropHighlightColor: null,
            dropHighlightBlend: 0,
            useEmissionHighlight: false,
            dropHighlightEmissionColor: null,
            autoFindOnAwake: false,
            neighborSearchDistance: 0,
            rayHeight: 0,
            neighborRaycastBufferSize: 0,
            searchMask: null,
            sideDirectionOffsetDegrees: 0,
            sideNeighbors: null,
            drawSideRays: false,
            gizmoSideOffset: 0,
            gizmoRayLength: 0,
            gizmoSphereRadius: 0,
            gizmoNoNeighborColor: null,
            gizmoNeighborColor: null,
            highlightStates: null,
            isDropHighlighted: false,
            neighborRaycastBuffer: null
        },
        props: {
            NearFloors: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloor#NearFloors#get", this ); }

                    return this.nearFloors;
                }
            },
            OccupiedStack: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloor#OccupiedStack#get", this ); }

                    return this.occupiedStack;
                }
            },
            StackAnchor: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloor#StackAnchor#get", this ); }

                    return this.stackAnchor;
                }
            },
            GridX: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloor#GridX#get", this ); }

                    return this.gridX;
                }
            },
            GridZ: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloor#GridZ#get", this ); }

                    return this.gridZ;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexFloor#init", this ); }

                this.dropHighlightColor = new UnityEngine.Color();
                this.dropHighlightEmissionColor = new UnityEngine.Color();
                this.searchMask = new UnityEngine.LayerMask();
                this.gizmoNoNeighborColor = new UnityEngine.Color();
                this.gizmoNeighborColor = new UnityEngine.Color();
                this.nearFloors = new (System.Collections.Generic.List$1(HexFloor)).ctor();
                this.dropHighlightColor = new pc.Color( 0.35, 1.0, 0.45, 1.0 );
                this.dropHighlightBlend = 0.55;
                this.useEmissionHighlight = true;
                this.dropHighlightEmissionColor = new pc.Color( 0.08, 0.38, 0.08, 1.0 );
                this.autoFindOnAwake = true;
                this.neighborSearchDistance = 1.25;
                this.rayHeight = 0.05;
                this.neighborRaycastBufferSize = 12;
                this.searchMask = UnityEngine.LayerMask.op_Implicit$1(-1);
                this.sideDirectionOffsetDegrees = 0.0;
                this.sideNeighbors = System.Array.init(6, null, HexFloor);
                this.drawSideRays = true;
                this.gizmoSideOffset = 0.5;
                this.gizmoRayLength = 0.5;
                this.gizmoSphereRadius = 0.03;
                this.gizmoNoNeighborColor = new pc.Color( 1.0, 0.65, 0.0, 0.9 );
                this.gizmoNeighborColor = new pc.Color( 0.2, 1.0, 0.3, 0.9 );
                this.highlightStates = new (System.Collections.Generic.List$1(HexFloor.RendererHighlightState)).ctor();
            }
        },
        methods: {
            /*HexFloor.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexFloor#Awake", this ); }

                this.CacheHighlightRenderers();
                this.EnsureNeighborRaycastBuffer();
                if (this.autoFindOnAwake && UnityEngine.MonoBehaviour.op_Equality(this.GetComponentInParent(HexFloorCreator), null)) {
                    this.FindNearFloors();
                }
            },
            /*HexFloor.Awake end.*/

            /*HexFloor.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "HexFloor#OnEnable", this ); }

                HexFloor.ActiveFloorSet.add(this);
            },
            /*HexFloor.OnEnable end.*/

            /*HexFloor.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "HexFloor#OnDisable", this ); }

                HexFloor.ActiveFloorSet.remove(this);
                this.SetDropHighlight(false);
            },
            /*HexFloor.OnDisable end.*/

            /*HexFloor.FindNearFloors start.*/
            FindNearFloors: function () {
if ( TRACE ) { TRACE( "HexFloor#FindNearFloors", this ); }

                this.EnsureNeighborStorage();
                this.nearFloors.clear();
                for (var sideIndex = 0; sideIndex < 6; sideIndex = (sideIndex + 1) | 0) {
                    var neighbor = this.FindNeighborForSide(sideIndex);
                    this.sideNeighbors[sideIndex] = neighbor;
                    if (UnityEngine.MonoBehaviour.op_Inequality(neighbor, null) && !this.nearFloors.contains(neighbor)) {
                        this.nearFloors.add(neighbor);
                    }
                }
            },
            /*HexFloor.FindNearFloors end.*/

            /*HexFloor.GetNeighborBySide start.*/
            GetNeighborBySide: function (sideIndex) {
if ( TRACE ) { TRACE( "HexFloor#GetNeighborBySide", this ); }

                if (this.sideNeighbors == null || sideIndex < 0 || sideIndex >= this.sideNeighbors.length) {
                    return null;
                }
                return this.sideNeighbors[sideIndex];
            },
            /*HexFloor.GetNeighborBySide end.*/

            /*HexFloor.GetSideIndexOfNeighbor start.*/
            GetSideIndexOfNeighbor: function (neighbor) {
if ( TRACE ) { TRACE( "HexFloor#GetSideIndexOfNeighbor", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(neighbor, null) || this.sideNeighbors == null) {
                    return -1;
                }
                for (var i = 0; i < this.sideNeighbors.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.sideNeighbors[i], neighbor)) {
                        return i;
                    }
                }
                return -1;
            },
            /*HexFloor.GetSideIndexOfNeighbor end.*/

            /*HexFloor.SetOccupiedStack start.*/
            SetOccupiedStack: function (stack) {
if ( TRACE ) { TRACE( "HexFloor#SetOccupiedStack", this ); }

                this.occupiedStack = stack;
            },
            /*HexFloor.SetOccupiedStack end.*/

            /*HexFloor.SetGridCoordinates start.*/
            SetGridCoordinates: function (x, z) {
if ( TRACE ) { TRACE( "HexFloor#SetGridCoordinates", this ); }

                this.gridX = x;
                this.gridZ = z;
            },
            /*HexFloor.SetGridCoordinates end.*/

            /*HexFloor.ClearOccupiedStack start.*/
            ClearOccupiedStack: function (stack) {
if ( TRACE ) { TRACE( "HexFloor#ClearOccupiedStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.occupiedStack, stack)) {
                    this.occupiedStack = null;
                }
            },
            /*HexFloor.ClearOccupiedStack end.*/

            /*HexFloor.GetStackPlacementPosition start.*/
            GetStackPlacementPosition: function (fallbackY) {
if ( TRACE ) { TRACE( "HexFloor#GetStackPlacementPosition", this ); }

                if (UnityEngine.Component.op_Inequality(this.stackAnchor, null)) {
                    return this.stackAnchor.position.$clone();
                }
                var placementPosition = this.transform.position.$clone();
                placementPosition.y = fallbackY;
                return placementPosition.$clone();
            },
            /*HexFloor.GetStackPlacementPosition end.*/

            /*HexFloor.SetDropHighlight start.*/
            SetDropHighlight: function (enabled) {
if ( TRACE ) { TRACE( "HexFloor#SetDropHighlight", this ); }

                if (enabled === this.isDropHighlighted) {
                    return;
                }
                this.isDropHighlighted = enabled;
                if (this.highlightStates.Count === 0) {
                    this.CacheHighlightRenderers();
                }
                for (var i = 0; i < this.highlightStates.Count; i = (i + 1) | 0) {
                    var state = this.highlightStates.getItem(i);
                    if (state != null && !(UnityEngine.Component.op_Equality(state.Renderer, null))) {
                        var block = ((state.PropertyBlock = state.PropertyBlock || new UnityEngine.MaterialPropertyBlock()));
                        state.Renderer.GetPropertyBlock(block);
                        if (state.HasColorProperty) {
                            var targetColor = (enabled ? pc.Color.lerp( state.BaseColor, this.dropHighlightColor, Math.max(0, Math.min(1, this.dropHighlightBlend)) ) : state.BaseColor.$clone());
                            block.SetColor(state.ColorPropertyId, targetColor);
                        }
                        if (state.HasEmissionProperty) {
                            var targetEmissionColor = ((enabled && this.useEmissionHighlight) ? this.dropHighlightEmissionColor.$clone() : state.BaseEmissionColor.$clone());
                            block.SetColor(HexFloor.EmissionColorId, targetEmissionColor);
                        }
                        state.Renderer.SetPropertyBlock(block);
                    }
                }
            },
            /*HexFloor.SetDropHighlight end.*/

            /*HexFloor.CacheHighlightRenderers start.*/
            CacheHighlightRenderers: function () {
if ( TRACE ) { TRACE( "HexFloor#CacheHighlightRenderers", this ); }

                var $t, $t1;
                this.highlightStates.clear();
                var renderers = this.highlightRenderers;
                if (renderers == null || renderers.length === 0) {
                    renderers = this.GetComponentsInChildren$1(UnityEngine.Renderer, true);
                }
                if (renderers == null || renderers.length === 0) {
                    return;
                }
                var uniqueRenderers = new (System.Collections.Generic.HashSet$1(UnityEngine.Renderer)).ctor();
                $t = Bridge.getEnumerator(renderers);
                try {
                    while ($t.moveNext()) {
                        var renderer = $t.Current;
                        if (UnityEngine.Component.op_Equality(renderer, null) || !uniqueRenderers.add(renderer)) {
                            continue;
                        }
                        var sharedMaterial = renderer.sharedMaterial;
                        if (!(sharedMaterial == null)) {
                            var state = ($t1 = new HexFloor.RendererHighlightState(), $t1.Renderer = renderer, $t1.PropertyBlock = new UnityEngine.MaterialPropertyBlock(), $t1);
                            if (sharedMaterial.HasProperty(HexFloor.BaseColorId)) {
                                state.HasColorProperty = true;
                                state.ColorPropertyId = HexFloor.BaseColorId;
                                state.BaseColor = sharedMaterial.GetColor(HexFloor.BaseColorId);
                            } else if (sharedMaterial.HasProperty(HexFloor.ColorId)) {
                                state.HasColorProperty = true;
                                state.ColorPropertyId = HexFloor.ColorId;
                                state.BaseColor = sharedMaterial.GetColor(HexFloor.ColorId);
                            }
                            if (sharedMaterial.HasProperty(HexFloor.EmissionColorId)) {
                                state.HasEmissionProperty = true;
                                state.BaseEmissionColor = sharedMaterial.GetColor(HexFloor.EmissionColorId);
                            }
                            if (state.HasColorProperty || state.HasEmissionProperty) {
                                this.highlightStates.add(state);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexFloor.CacheHighlightRenderers end.*/

            /*HexFloor.FindNeighborForSide start.*/
            FindNeighborForSide: function (sideIndex) {
if ( TRACE ) { TRACE( "HexFloor#FindNeighborForSide", this ); }

                var direction = this.GetSideDirection(sideIndex);
                var origin = this.GetRayOrigin();
                this.EnsureNeighborRaycastBuffer();
                var hitCount = UnityEngine.Physics.RaycastNonAlloc$2(origin, direction, this.neighborRaycastBuffer, this.neighborSearchDistance, UnityEngine.LayerMask.op_Implicit(this.searchMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
                if (hitCount >= this.neighborRaycastBuffer.length) {
                    var allHits = UnityEngine.Physics.RaycastAll$2(origin, direction, this.neighborSearchDistance, UnityEngine.LayerMask.op_Implicit(this.searchMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore);
                    return this.GetNearestFloorFromHits(allHits, allHits.length);
                }
                return this.GetNearestFloorFromHits(this.neighborRaycastBuffer, hitCount);
            },
            /*HexFloor.FindNeighborForSide end.*/

            /*HexFloor.GetNearestFloorFromHits start.*/
            GetNearestFloorFromHits: function (hits, hitCount) {
if ( TRACE ) { TRACE( "HexFloor#GetNearestFloorFromHits", this ); }

                if (hits == null || hitCount <= 0) {
                    return null;
                }
                var nearestDistance = 3.40282347E+38;
                var nearestFloor = null;
                for (var i = 0; i < hitCount; i = (i + 1) | 0) {
                    var hit = hits[i].$clone();
                    if (!(UnityEngine.Component.op_Equality(hit.collider, null))) {
                        var candidate = hit.collider.GetComponentInParent(HexFloor);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(candidate, null)) && !(UnityEngine.MonoBehaviour.op_Equality(candidate, this)) && hit.distance < nearestDistance) {
                            nearestDistance = hit.distance;
                            nearestFloor = candidate;
                        }
                    }
                }
                return nearestFloor;
            },
            /*HexFloor.GetNearestFloorFromHits end.*/

            /*HexFloor.GetSideDirection start.*/
            GetSideDirection: function (sideIndex) {
if ( TRACE ) { TRACE( "HexFloor#GetSideDirection", this ); }

                var angle = this.sideDirectionOffsetDegrees + sideIndex * 60.0;
                return (new pc.Quat().setFromAxisAngle( this.transform.up, angle ).transformVector( this.transform.forward )).clone().normalize().$clone();
            },
            /*HexFloor.GetSideDirection end.*/

            /*HexFloor.GetRayOrigin start.*/
            GetRayOrigin: function () {
if ( TRACE ) { TRACE( "HexFloor#GetRayOrigin", this ); }

                return this.transform.position.$clone().add( this.transform.up.$clone().clone().scale( this.rayHeight ) );
            },
            /*HexFloor.GetRayOrigin end.*/

            /*HexFloor.EnsureNeighborStorage start.*/
            EnsureNeighborStorage: function () {
if ( TRACE ) { TRACE( "HexFloor#EnsureNeighborStorage", this ); }

                if (this.sideNeighbors == null || this.sideNeighbors.length !== 6) {
                    this.sideNeighbors = System.Array.init(6, null, HexFloor);
                }
            },
            /*HexFloor.EnsureNeighborStorage end.*/

            /*HexFloor.EnsureNeighborRaycastBuffer start.*/
            EnsureNeighborRaycastBuffer: function () {
if ( TRACE ) { TRACE( "HexFloor#EnsureNeighborRaycastBuffer", this ); }

                var size = UnityEngine.Mathf.Max(1, this.neighborRaycastBufferSize);
                if (this.neighborRaycastBuffer == null || this.neighborRaycastBuffer.length !== size) {
                    this.neighborRaycastBuffer = System.Array.init(size, function (){
                        return new UnityEngine.RaycastHit();
                    }, UnityEngine.RaycastHit);
                }
            },
            /*HexFloor.EnsureNeighborRaycastBuffer end.*/

            /*HexFloor.OnDrawGizmosSelected start.*/
            OnDrawGizmosSelected: function () {
if ( TRACE ) { TRACE( "HexFloor#OnDrawGizmosSelected", this ); }

                if (this.drawSideRays) {
                    var origin = this.GetRayOrigin();
                    for (var sideIndex = 0; sideIndex < 6; sideIndex = (sideIndex + 1) | 0) {
                        var direction = this.GetSideDirection(sideIndex);
                        var rayStart = origin.$clone().add( direction.$clone().clone().scale( this.gizmoSideOffset ) );
                        var rayEnd = rayStart.$clone().add( direction.$clone().clone().scale( this.gizmoRayLength ) );
                        var neighbor = this.GetNeighborBySide(sideIndex);
                        pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = ((UnityEngine.MonoBehaviour.op_Inequality(neighbor, null)) ? this.gizmoNeighborColor.$clone() : this.gizmoNoNeighborColor.$clone());
                        pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawLine', null );
                        pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawSphere', null );
                    }
                }
            },
            /*HexFloor.OnDrawGizmosSelected end.*/


        }
    });
    /*HexFloor end.*/

    /*HexFloor+RendererHighlightState start.*/
    Bridge.define("HexFloor.RendererHighlightState", {
        $kind: 1002,
        fields: {
            Renderer: null,
            PropertyBlock: null,
            HasColorProperty: false,
            ColorPropertyId: 0,
            BaseColor: null,
            HasEmissionProperty: false,
            BaseEmissionColor: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexFloor.RendererHighlightState#init", this ); }

                this.BaseColor = new UnityEngine.Color();
                this.BaseEmissionColor = new UnityEngine.Color();
            }
        }
    });
    /*HexFloor+RendererHighlightState end.*/

    /*HexFloorCreator start.*/
    Bridge.define("HexFloorCreator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexFloorCreator.ClearFloors:static start.*/
                ClearFloors: function (root) {
if ( TRACE ) { TRACE( "HexFloorCreator#ClearFloors", this ); }

                    var $t, $t1;
                    if (UnityEngine.Component.op_Equality(root, null)) {
                        return;
                    }
                    var floors = root.GetComponentsInChildren$1(HexFloor, true);
                    if (UnityEngine.Application.isPlaying) {
                        $t = Bridge.getEnumerator(floors);
                        try {
                            while ($t.moveNext()) {
                                var floor2 = $t.Current;
                                if (!(UnityEngine.MonoBehaviour.op_Equality(floor2, null))) {
                                    floor2.gameObject.SetActive(false);
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    $t1 = Bridge.getEnumerator(floors);
                    try {
                        while ($t1.moveNext()) {
                            var floor = $t1.Current;
                            if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null))) {
                                if (UnityEngine.Application.isPlaying) {
                                    UnityEngine.Object.Destroy(floor.gameObject);
                                } else {
                                    UnityEngine.Object.DestroyImmediate(floor.gameObject);
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                },
                /*HexFloorCreator.ClearFloors:static end.*/


            }
        },
        fields: {
            gameContext: null,
            floorPrefab: null,
            floorRoot: null,
            bottomRowAnchor: null,
            generateOnStart: false,
            clearBeforeGenerate: false,
            refreshNeighborsAfterGenerate: false,
            fillStacksAfterGenerate: false,
            debugLogs: false,
            neighborDistance: 0,
            shiftOddColumnsForward: false,
            anchorLocalOffset: null,
            generatedFloors: null,
            InitialGenerationCompleted: false
        },
        props: {
            HexConfig: {
                get: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#HexConfig#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#init", this ); }

                this.anchorLocalOffset = new UnityEngine.Vector3();
                this.clearBeforeGenerate = true;
                this.refreshNeighborsAfterGenerate = true;
                this.fillStacksAfterGenerate = true;
                this.debugLogs = false;
                this.neighborDistance = 1.0;
                this.shiftOddColumnsForward = true;
                this.anchorLocalOffset = pc.Vec3.ZERO.clone();
                this.generatedFloors = new (System.Collections.Generic.List$1(HexFloor)).ctor();
            }
        },
        methods: {
            /*HexFloorCreator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#Start", this ); }

                if (this.generateOnStart) {
                    this.GenerateFloor();
                }
                this.MarkInitialGenerationCompleted();
            },
            /*HexFloorCreator.Start end.*/

            /*HexFloorCreator.GenerateFloor start.*/
            GenerateFloor: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#GenerateFloor", this ); }

                var hexConfig = this.HexConfig;
                if (hexConfig == null || UnityEngine.GameObject.op_Equality(this.floorPrefab, null)) {
                    return;
                }
                var root = ((UnityEngine.Component.op_Inequality(this.floorRoot, null)) ? this.floorRoot : this.transform);
                var anchor = ((UnityEngine.Component.op_Inequality(this.bottomRowAnchor, null)) ? this.bottomRowAnchor : root);
                if (this.clearBeforeGenerate) {
                    HexFloorCreator.ClearFloors(root);
                }
                this.generatedFloors.clear();
                var width = UnityEngine.Mathf.Max(1, hexConfig.floorWidth);
                var length = UnityEngine.Mathf.Max(1, hexConfig.floorLength);
                var zStep = UnityEngine.Mathf.Max(0.001, this.neighborDistance);
                var xStep = zStep * Math.sqrt(3.0) * 0.5;
                var zColumnShift = zStep * 0.5 * (this.shiftOddColumnsForward ? 1.0 : (-1.0));
                var axisX = anchor.right.clone().normalize().$clone();
                var axisY = anchor.up.clone().normalize().$clone();
                var axisZ = anchor.forward.clone().normalize().$clone();
                var origin = anchor.position.$clone().add( axisX.$clone().clone().scale( this.anchorLocalOffset.x ) ).add( axisY.$clone().clone().scale( this.anchorLocalOffset.y ) ).add( axisZ.$clone().clone().scale( this.anchorLocalOffset.z ) );
                var firstColumnCenterX = 0.0 - (((width - 1) | 0)) * 0.5 * xStep;
                for (var colX = 0; colX < width; colX = (colX + 1) | 0) {
                    var x = firstColumnCenterX + colX * xStep;
                    var columnOffsetZ = (((colX & 1) === 1) ? zColumnShift : 0.0);
                    for (var rowZ = 0; rowZ < length; rowZ = (rowZ + 1) | 0) {
                        var z = rowZ * zStep + columnOffsetZ;
                        var worldPosition = origin.$clone().add( axisX.$clone().clone().scale( x ) ).add( axisZ.$clone().clone().scale( z ) );
                        var floorObject = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.floorPrefab, worldPosition, anchor.rotation, root);
                        if (UnityEngine.GameObject.op_Equality(floorObject, null)) {
                            continue;
                        }
                        var floor = floorObject.GetComponent(HexFloor);
                        if (UnityEngine.MonoBehaviour.op_Equality(floor, null)) {
                            if (UnityEngine.Application.isPlaying) {
                                UnityEngine.Object.Destroy(floorObject);
                            } else {
                                UnityEngine.Object.DestroyImmediate(floorObject);
                            }
                        } else {
                            floor.name = System.String.format("HexFloor [x:{0}, z:{1}]", Bridge.box(colX, System.Int32), Bridge.box(rowZ, System.Int32));
                            floor.SetGridCoordinates(colX, rowZ);
                            this.generatedFloors.add(floor);
                        }
                    }
                }
                if (UnityEngine.Application.isPlaying) {
                }
                var shouldFillStacks = this.fillStacksAfterGenerate && hexConfig.fillGeneratedFloorWithStacks;
                if (this.refreshNeighborsAfterGenerate || shouldFillStacks) {
                    for (var i = 0; i < this.generatedFloors.Count; i = (i + 1) | 0) {
                        var floor2 = this.generatedFloors.getItem(i);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(floor2, null))) {
                            floor2.FindNearFloors();
                        }
                    }
                }
                if (!shouldFillStacks || UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null) || UnityEngine.MonoBehaviour.op_Equality(this.gameContext.StacksCreator, null)) {
                    this.MarkInitialGenerationCompleted();
                    return;
                }
                this.gameContext.StacksCreator.FillFloorsWithConfiguredStacks(this.generatedFloors);
                this.MarkInitialGenerationCompleted();
            },
            /*HexFloorCreator.GenerateFloor end.*/

            /*HexFloorCreator.ClearGeneratedFloor start.*/
            ClearGeneratedFloor: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#ClearGeneratedFloor", this ); }

                var root = ((UnityEngine.Component.op_Inequality(this.floorRoot, null)) ? this.floorRoot : this.transform);
                HexFloorCreator.ClearFloors(root);
                this.generatedFloors.clear();
            },
            /*HexFloorCreator.ClearGeneratedFloor end.*/

            /*HexFloorCreator.MarkInitialGenerationCompleted start.*/
            MarkInitialGenerationCompleted: function () {
if ( TRACE ) { TRACE( "HexFloorCreator#MarkInitialGenerationCompleted", this ); }

                if (!this.InitialGenerationCompleted) {
                    this.InitialGenerationCompleted = true;
                }
            },
            /*HexFloorCreator.MarkInitialGenerationCompleted end.*/

            /*HexFloorCreator.LogFloorCreator start.*/
            LogFloorCreator: function (message) {
if ( TRACE ) { TRACE( "HexFloorCreator#LogFloorCreator", this ); }

                if (this.debugLogs) {
                    UnityEngine.Debug.Log$1("[HexFloorCreator] " + (message || ""), this);
                }
            },
            /*HexFloorCreator.LogFloorCreator end.*/


        }
    });
    /*HexFloorCreator end.*/

    /*HexGameContext start.*/
    Bridge.define("HexGameContext", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            config: null,
            poolService: null,
            manager: null,
            stacksCreator: null,
            floorCreator: null
        },
        props: {
            Config: {
                get: function () {
if ( TRACE ) { TRACE( "HexGameContext#Config#get", this ); }

                    return this.config;
                }
            },
            PoolService: {
                get: function () {
if ( TRACE ) { TRACE( "HexGameContext#PoolService#get", this ); }

                    return this.poolService;
                }
            },
            Manager: {
                get: function () {
if ( TRACE ) { TRACE( "HexGameContext#Manager#get", this ); }

                    return this.manager;
                }
            },
            StacksCreator: {
                get: function () {
if ( TRACE ) { TRACE( "HexGameContext#StacksCreator#get", this ); }

                    return this.stacksCreator;
                }
            },
            FloorCreator: {
                get: function () {
if ( TRACE ) { TRACE( "HexGameContext#FloorCreator#get", this ); }

                    return this.floorCreator;
                }
            }
        }
    });
    /*HexGameContext end.*/

    /*HexManager start.*/
    Bridge.define("HexManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MaxResolveIterations: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexManager#init", this ); }

                    this.MaxResolveIterations = 4096;
                }
            },
            methods: {
                /*HexManager.GetStackDebugName:static start.*/
                GetStackDebugName: function (stack) {
if ( TRACE ) { TRACE( "HexManager#GetStackDebugName", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) ? stack.name : "<none>";
                },
                /*HexManager.GetStackDebugName:static end.*/

                /*HexManager.GetFloorDebugName:static start.*/
                GetFloorDebugName: function (floor) {
if ( TRACE ) { TRACE( "HexManager#GetFloorDebugName", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(floor, null)) ? floor.name : "<none>";
                },
                /*HexManager.GetFloorDebugName:static end.*/


            }
        },
        fields: {
            gameContext: null,
            transferOnStackPlaced: false,
            transferAnimator: null,
            transferSpeedIncreasePerStack: 0,
            clearSpeedIncreasePerStack: 0,
            clearScaleDuration: 0,
            clearScaleEase: 0,
            clearScaleStagger: 0,
            clearFxPlayer: null,
            logTransferEvents: false,
            activeTransferRoutines: 0,
            transferGeneration: 0,
            firstTransferAndClearChainRaised: false
        },
        events: {
            FirstTransferAndClearChainFinished: null
        },
        props: {
            IsTransferInProgress: {
                get: function () {
if ( TRACE ) { TRACE( "HexManager#IsTransferInProgress#get", this ); }

                    return this.activeTransferRoutines > 0;
                }
            },
            hexConfig: {
                get: function () {
if ( TRACE ) { TRACE( "HexManager#hexConfig#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null;
                }
            },
            PoolService: {
                get: function () {
if ( TRACE ) { TRACE( "HexManager#PoolService#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.PoolService : null;
                }
            },
            StacksCreator: {
                get: function () {
if ( TRACE ) { TRACE( "HexManager#StacksCreator#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.StacksCreator : null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexManager#init", this ); }

                this.transferOnStackPlaced = true;
                this.transferSpeedIncreasePerStack = 0.3;
                this.clearSpeedIncreasePerStack = 0.3;
                this.clearScaleDuration = 0.14;
                this.clearScaleEase = DG.Tweening.Ease.InBack;
                this.clearScaleStagger = 0.02;
                this.logTransferEvents = false;
            }
        },
        methods: {
            /*HexManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexManager#Awake", this ); }

                this.firstTransferAndClearChainRaised = false;
                this.PrewarmPools();
            },
            /*HexManager.Awake end.*/

            /*HexManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "HexManager#OnDisable", this ); }

                this.transferGeneration = (this.transferGeneration + 1) | 0;
                this.activeTransferRoutines = 0;
            },
            /*HexManager.OnDisable end.*/

            /*HexManager.RentTile start.*/
            RentTile: function (prefab, parent) {
if ( TRACE ) { TRACE( "HexManager#RentTile", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(prefab, null)) {
                    return null;
                }
                var spawnPosition = ((UnityEngine.Component.op_Inequality(parent, null)) ? parent.position.$clone() : prefab.transform.position.$clone());
                var spawnRotation = ((UnityEngine.Component.op_Inequality(parent, null)) ? parent.rotation.$clone() : prefab.transform.rotation.$clone());
                var poolService = this.PoolService;
                if (UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) {
                    var pooledTile = poolService.RentTile(prefab, spawnPosition.$clone(), spawnRotation.$clone(), parent);
                    if (UnityEngine.MonoBehaviour.op_Inequality(pooledTile, null)) {
                        return pooledTile;
                    }
                }
                return (UnityEngine.Component.op_Inequality(parent, null)) ? UnityEngine.Object.Instantiate(HexTile, prefab, parent) : UnityEngine.Object.Instantiate(HexTile, prefab);
            },
            /*HexManager.RentTile end.*/

            /*HexManager.ReturnTile start.*/
            ReturnTile: function (tile, fallbackPrefab) {
if ( TRACE ) { TRACE( "HexManager#ReturnTile", this ); }

                if (fallbackPrefab === void 0) { fallbackPrefab = null; }
                if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                    var tileTransform = tile.transform;
                    DG.Tweening.ShortcutExtensions.DOKill(tileTransform);
                    var poolService = this.PoolService;
                    if (!(UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) || !poolService.ReturnTile(tile, fallbackPrefab)) {
                        UnityEngine.Object.Destroy(tile.gameObject);
                    }
                }
            },
            /*HexManager.ReturnTile end.*/

            /*HexManager.TryRecycleEmptyStack start.*/
            TryRecycleEmptyStack: function (stack) {
if ( TRACE ) { TRACE( "HexManager#TryRecycleEmptyStack", this ); }

                var stacksCreator = this.StacksCreator;
                if (UnityEngine.MonoBehaviour.op_Inequality(stacksCreator, null) && stacksCreator.TryRecycleEmptyStack(stack)) {
                    return true;
                }
                return false;
            },
            /*HexManager.TryRecycleEmptyStack end.*/

            /*HexManager.CanPlaceStackOnFloor start.*/
            CanPlaceStackOnFloor: function (stack, floor) {
if ( TRACE ) { TRACE( "HexManager#CanPlaceStackOnFloor", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || UnityEngine.MonoBehaviour.op_Equality(floor, null)) {
                    return false;
                }
                var occupiedStack = this.ResolveStackOnFloor(floor, stack);
                return UnityEngine.MonoBehaviour.op_Equality(occupiedStack, null) || UnityEngine.MonoBehaviour.op_Equality(occupiedStack, stack);
            },
            /*HexManager.CanPlaceStackOnFloor end.*/

            /*HexManager.HandleStackPlaced start.*/
            HandleStackPlaced: function (placedStack, targetFloor, onComplete) {
if ( TRACE ) { TRACE( "HexManager#HandleStackPlaced", this ); }

                if (onComplete === void 0) { onComplete = null; }
                if (UnityEngine.MonoBehaviour.op_Equality(placedStack, null) || UnityEngine.MonoBehaviour.op_Equality(targetFloor, null)) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                this.AttachStackToFloor(placedStack, targetFloor);
                var stacksCreator = this.StacksCreator;
                if (UnityEngine.MonoBehaviour.op_Inequality(stacksCreator, null)) {
                    stacksCreator.NotifyStackPlaced(placedStack);
                }
                if (!this.transferOnStackPlaced) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                this.BeginResolveTopColorTransfer(placedStack, targetFloor, function () {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                });
            },
            /*HexManager.HandleStackPlaced end.*/

            /*HexManager.PrewarmPools start.*/
            PrewarmPools: function () {
if ( TRACE ) { TRACE( "HexManager#PrewarmPools", this ); }

                var poolService = this.PoolService;
                if (!(UnityEngine.MonoBehaviour.op_Equality(poolService, null))) {
                    var tilePrefabForPool = this.ResolveTilePrefabForPool();
                    if (UnityEngine.MonoBehaviour.op_Inequality(tilePrefabForPool, null)) {
                        poolService.PrewarmTiles(tilePrefabForPool);
                    }
                    this.clearFxPlayer.Prewarm(poolService);
                }
            },
            /*HexManager.PrewarmPools end.*/

            /*HexManager.ResolveTilePrefabForPool start.*/
            ResolveTilePrefabForPool: function () {
if ( TRACE ) { TRACE( "HexManager#ResolveTilePrefabForPool", this ); }

                var $t;
                var stacksCreator = this.StacksCreator;
                if (UnityEngine.MonoBehaviour.op_Inequality(stacksCreator, null)) {
                    var tileTemplate = stacksCreator.ResolveTileTemplateForPool();
                    if (UnityEngine.MonoBehaviour.op_Inequality(tileTemplate, null)) {
                        return tileTemplate;
                    }
                }
                var anyStack = null;
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                            continue;
                        }
                        anyStack = stack;
                        break;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Equality(anyStack, null)) {
                    anyStack = UnityEngine.Object.FindObjectOfType(HexStack);
                    if (UnityEngine.MonoBehaviour.op_Equality(anyStack, null)) {
                        return null;
                    }
                }
                return anyStack.GetTileTemplateForPool();
            },
            /*HexManager.ResolveTilePrefabForPool end.*/

            /*HexManager.BeginResolveTopColorTransfer start.*/
            BeginResolveTopColorTransfer: function (sourceStack, sourceFloor, onComplete) {
if ( TRACE ) { TRACE( "HexManager#BeginResolveTopColorTransfer", this ); }

                this.activeTransferRoutines = (this.activeTransferRoutines + 1) | 0;
                var state = new HexManager.TransferChainState(this.transferGeneration, onComplete);
                if (UnityEngine.MonoBehaviour.op_Equality(sourceStack, null) || UnityEngine.MonoBehaviour.op_Equality(sourceFloor, null)) {
                    this.FinishTransferChain(state);
                    return;
                }
                this.EnqueueForTransferCheck(sourceStack, state.PendingStacks, state.QueuedStacks);
                this.EnqueueNeighborStacksForTransferCheck(sourceFloor, state.PendingStacks, state.QueuedStacks);
                this.ContinueResolveTopColorTransfer(state);
            },
            /*HexManager.BeginResolveTopColorTransfer end.*/

            /*HexManager.ContinueResolveTopColorTransfer start.*/
            ContinueResolveTopColorTransfer: function (state) {
if ( TRACE ) { TRACE( "HexManager#ContinueResolveTopColorTransfer", this ); }

                if (!this.IsTransferChainActive(state)) {
                    return;
                }
                while (state.LoopGuard < 4096) {
                    if (!state.PassStarted) {
                        state.PassStarted = true;
                        state.TransferredInPass = false;
                        if (state.PendingStacks.Count === 0) {
                            this.EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                        }
                    }
                    while (state.PendingStacks.Count > 0 && state.LoopGuard < 4096) {
                        state.LoopGuard = (state.LoopGuard + 1) | 0;
                        var currentSourceStack = { v : state.PendingStacks.Dequeue() };
                        state.QueuedStacks.remove(currentSourceStack.v);
                        var currentSourceFloor = { };
                        var targetStack = { };
                        var targetFloor = { };
                        var topColorId = { };
                        if (!this.TryResolveStackFloor(currentSourceStack.v, currentSourceFloor) || !this.TryFindMatchingNeighbor(currentSourceStack.v, currentSourceFloor.v, targetStack, targetFloor, topColorId)) {
                            continue;
                        }
                        var transferCount = currentSourceStack.v.CountTopTilesWithColorId(topColorId.v);
                        if (transferCount <= 0) {
                            continue;
                        }
                        state.TransferredInPass = true;
                        var transferStepNumber = (state.TransferStepIndex + 1) | 0;
                        var transferSpeedMultiplier = this.GetChainSpeedMultiplier(state.TransferStepIndex, this.transferSpeedIncreasePerStack);
                        this.transferAnimator.TransferTopTilesFan(currentSourceStack.v, currentSourceFloor.v, targetStack.v, targetFloor.v, transferCount, transferSpeedMultiplier, (function ($me, targetStack, currentSourceStack, currentSourceFloor, targetFloor) {
                            return Bridge.fn.bind($me, function () {
                                if (this.IsTransferChainActive(state)) {
                                    state.HadTransfers = true;
                                    if (UnityEngine.MonoBehaviour.op_Inequality(targetStack.v, null)) {
                                        state.TransferTargetStacks.add(targetStack.v);
                                    }
                                    state.TransferStepIndex = (state.TransferStepIndex + 1) | 0;
                                    this.EnqueueForTransferCheck(currentSourceStack.v, state.PendingStacks, state.QueuedStacks);
                                    this.EnqueueForTransferCheck(targetStack.v, state.PendingStacks, state.QueuedStacks);
                                    this.EnqueueNeighborStacksForTransferCheck(currentSourceFloor.v, state.PendingStacks, state.QueuedStacks);
                                    this.EnqueueNeighborStacksForTransferCheck(targetFloor.v, state.PendingStacks, state.QueuedStacks);
                                    this.ContinueResolveTopColorTransfer(state);
                                }
                            });
                        })(this, targetStack, currentSourceStack, currentSourceFloor, targetFloor));
                        return;
                    }
                    if (state.LoopGuard >= 4096) {
                        break;
                    }
                    state.PassStarted = false;
                    if (state.TransferredInPass) {
                        this.EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                        continue;
                    }
                    var transferCandidate = { };
                    var transferCandidateFloor = { };
                    if (this.TryFindAnyTransferCandidate(transferCandidate, transferCandidateFloor)) {
                        this.EnqueueForTransferCheck(transferCandidate.v, state.PendingStacks, state.QueuedStacks);
                        this.EnqueueNeighborStacksForTransferCheck(transferCandidateFloor.v, state.PendingStacks, state.QueuedStacks);
                        continue;
                    }
                    var clearBatches = { };
                    if (!this.TryCollectClearBatches(state.TransferTargetStacks, clearBatches)) {
                        this.FinishTransferChain(state);
                        return;
                    }
                    var isParallelClear = { v : clearBatches.v.Count > 1 };
                    var clearSpeedMultiplier = (isParallelClear.v ? 1.0 : this.GetChainSpeedMultiplier(state.ClearStepIndex, this.clearSpeedIncreasePerStack));
                    state.HadClears = true;
                    this.ClearBatchesParallel(clearBatches.v, clearSpeedMultiplier, (function ($me, isParallelClear) {
                        return Bridge.fn.bind($me, function () {
                            if (this.IsTransferChainActive(state)) {
                                if (!isParallelClear.v) {
                                    state.ClearStepIndex = (state.ClearStepIndex + 1) | 0;
                                }
                                this.EnqueueAllStacksForTransferCheck(state.PendingStacks, state.QueuedStacks);
                                this.ContinueResolveTopColorTransfer(state);
                            }
                        });
                    })(this, isParallelClear));
                    return;
                }
                this.FinishTransferChain(state);
            },
            /*HexManager.ContinueResolveTopColorTransfer end.*/

            /*HexManager.IsTransferChainActive start.*/
            IsTransferChainActive: function (state) {
if ( TRACE ) { TRACE( "HexManager#IsTransferChainActive", this ); }

                return state != null && !state.IsCompleted && state.Generation === this.transferGeneration && this.isActiveAndEnabled;
            },
            /*HexManager.IsTransferChainActive end.*/

            /*HexManager.FinishTransferChain start.*/
            FinishTransferChain: function (state) {
if ( TRACE ) { TRACE( "HexManager#FinishTransferChain", this ); }

                if (state != null && !state.IsCompleted && state.Generation === this.transferGeneration) {
                    state.IsCompleted = true;
                    this.activeTransferRoutines = UnityEngine.Mathf.Max(0, ((this.activeTransferRoutines - 1) | 0));
                    if (!this.firstTransferAndClearChainRaised && state.HadTransfers && state.HadClears) {
                        this.firstTransferAndClearChainRaised = true;
                        !Bridge.staticEquals(this.FirstTransferAndClearChainFinished, null) ? this.FirstTransferAndClearChainFinished() : null;
                    }
                    !Bridge.staticEquals(state.OnComplete, null) ? state.OnComplete() : null;
                }
            },
            /*HexManager.FinishTransferChain end.*/

            /*HexManager.EnqueueForTransferCheck start.*/
            EnqueueForTransferCheck: function (stack, pendingStacks, queuedStacks) {
if ( TRACE ) { TRACE( "HexManager#EnqueueForTransferCheck", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && stack.TileCount !== 0 && queuedStacks.add(stack)) {
                    pendingStacks.Enqueue(stack);
                }
            },
            /*HexManager.EnqueueForTransferCheck end.*/

            /*HexManager.EnqueueNeighborStacksForTransferCheck start.*/
            EnqueueNeighborStacksForTransferCheck: function (centerFloor, pendingStacks, queuedStacks) {
if ( TRACE ) { TRACE( "HexManager#EnqueueNeighborStacksForTransferCheck", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(centerFloor, null)) {
                    return;
                }
                for (var sideIndex = 0; sideIndex < 6; sideIndex = (sideIndex + 1) | 0) {
                    var neighborFloor = centerFloor.GetNeighborBySide(sideIndex);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(neighborFloor, null))) {
                        var neighborStack = this.ResolveStackOnFloor(neighborFloor);
                        this.EnqueueForTransferCheck(neighborStack, pendingStacks, queuedStacks);
                    }
                }
            },
            /*HexManager.EnqueueNeighborStacksForTransferCheck end.*/

            /*HexManager.EnqueueAllStacksForTransferCheck start.*/
            EnqueueAllStacksForTransferCheck: function (pendingStacks, queuedStacks) {
if ( TRACE ) { TRACE( "HexManager#EnqueueAllStacksForTransferCheck", this ); }

                var $t;
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        this.EnqueueForTransferCheck(stack, pendingStacks, queuedStacks);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexManager.EnqueueAllStacksForTransferCheck end.*/

            /*HexManager.TryResolveStackFloor start.*/
            TryResolveStackFloor: function (stack, floor) {
if ( TRACE ) { TRACE( "HexManager#TryResolveStackFloor", this ); }

                floor.v = null;
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || stack.TileCount === 0) {
                    return false;
                }
                floor.v = stack.CurrentFloor;
                return UnityEngine.MonoBehaviour.op_Inequality(floor.v, null);
            },
            /*HexManager.TryResolveStackFloor end.*/

            /*HexManager.TryFindAnyTransferCandidate start.*/
            TryFindAnyTransferCandidate: function (sourceStack, sourceFloor) {
if ( TRACE ) { TRACE( "HexManager#TryFindAnyTransferCandidate", this ); }

                var $t;
                sourceStack.v = null;
                sourceFloor.v = null;
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        var _discard1 = { };
                        var _discard2 = { };
                        var _discard3 = { };
                        var floor = { };
                        if (!this.TryResolveStackFloor(stack, floor) || !this.TryFindMatchingNeighbor(stack, floor.v, _discard1, _discard2, _discard3)) {
                            continue;
                        }
                        sourceStack.v = stack;
                        sourceFloor.v = floor.v;
                        return true;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*HexManager.TryFindAnyTransferCandidate end.*/

            /*HexManager.TryCollectClearBatches start.*/
            TryCollectClearBatches: function (eligibleStacks, clearBatches) {
if ( TRACE ) { TRACE( "HexManager#TryCollectClearBatches", this ); }

                var $t;
                clearBatches.v = new (System.Collections.Generic.List$1(HexManager.StackClearBatch)).ctor();
                if (eligibleStacks == null || eligibleStacks.Count === 0) {
                    return false;
                }
                $t = Bridge.getEnumerator(eligibleStacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        var tilesToClear = { };
                        if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && stack.TileCount !== 0 && this.TryExtractTopMatchTiles(stack, tilesToClear)) {
                            clearBatches.v.add(new HexManager.StackClearBatch.$ctor1(stack, tilesToClear.v));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return clearBatches.v.Count > 0;
            },
            /*HexManager.TryCollectClearBatches end.*/

            /*HexManager.TryFindMatchingNeighbor start.*/
            TryFindMatchingNeighbor: function (sourceStack, sourceFloor, targetStack, targetFloor, topColorId) {
if ( TRACE ) { TRACE( "HexManager#TryFindMatchingNeighbor", this ); }

                targetStack.v = null;
                targetFloor.v = null;
                topColorId.v = ((UnityEngine.MonoBehaviour.op_Inequality(sourceStack, null)) ? sourceStack.GetTopColorId() : (-1));
                if (UnityEngine.MonoBehaviour.op_Equality(sourceStack, null) || UnityEngine.MonoBehaviour.op_Equality(sourceFloor, null) || topColorId.v < 0) {
                    return false;
                }
                for (var sideIndex = 0; sideIndex < 6; sideIndex = (sideIndex + 1) | 0) {
                    var neighborFloor = sourceFloor.GetNeighborBySide(sideIndex);
                    if (this.TryGetMatchingStack(sourceStack, neighborFloor, topColorId.v, targetStack)) {
                        targetFloor.v = neighborFloor;
                        return true;
                    }
                }
                var nearFloors = sourceFloor.NearFloors;
                for (var i = 0; i < System.Array.getCount(nearFloors, HexFloor); i = (i + 1) | 0) {
                    var neighborFloor2 = System.Array.getItem(nearFloors, i, HexFloor);
                    if (this.TryGetMatchingStack(sourceStack, neighborFloor2, topColorId.v, targetStack)) {
                        targetFloor.v = neighborFloor2;
                        return true;
                    }
                }
                return false;
            },
            /*HexManager.TryFindMatchingNeighbor end.*/

            /*HexManager.TryGetMatchingStack start.*/
            TryGetMatchingStack: function (sourceStack, neighborFloor, topColorId, matchingStack) {
if ( TRACE ) { TRACE( "HexManager#TryGetMatchingStack", this ); }

                matchingStack.v = null;
                if (UnityEngine.MonoBehaviour.op_Equality(neighborFloor, null)) {
                    return false;
                }
                var neighborStack = this.ResolveStackOnFloor(neighborFloor);
                if (UnityEngine.MonoBehaviour.op_Equality(neighborStack, null) || UnityEngine.MonoBehaviour.op_Equality(neighborStack, sourceStack)) {
                    return false;
                }
                if (neighborStack.GetTopColorId() !== topColorId) {
                    return false;
                }
                matchingStack.v = neighborStack;
                return true;
            },
            /*HexManager.TryGetMatchingStack end.*/

            /*HexManager.AttachStackToFloor start.*/
            AttachStackToFloor: function (stack, targetFloor) {
if ( TRACE ) { TRACE( "HexManager#AttachStackToFloor", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || UnityEngine.MonoBehaviour.op_Equality(targetFloor, null)) {
                    return;
                }
                var occupiedStack = this.ResolveStackOnFloor(targetFloor);
                if (!(UnityEngine.MonoBehaviour.op_Inequality(occupiedStack, null)) || !(UnityEngine.MonoBehaviour.op_Inequality(occupiedStack, stack))) {
                    var previousFloor = stack.CurrentFloor;
                    if (UnityEngine.MonoBehaviour.op_Inequality(previousFloor, null) && UnityEngine.MonoBehaviour.op_Inequality(previousFloor, targetFloor)) {
                        previousFloor.ClearOccupiedStack(stack);
                    }
                    stack.SetCurrentFloor(targetFloor);
                    targetFloor.SetOccupiedStack(stack);
                }
            },
            /*HexManager.AttachStackToFloor end.*/

            /*HexManager.ResolveStackOnFloor start.*/
            ResolveStackOnFloor: function (floor, ignoredStack) {
if ( TRACE ) { TRACE( "HexManager#ResolveStackOnFloor", this ); }

                var $t;
                if (ignoredStack === void 0) { ignoredStack = null; }
                if (UnityEngine.MonoBehaviour.op_Equality(floor, null)) {
                    return null;
                }
                var occupiedStack = floor.OccupiedStack;
                if (UnityEngine.MonoBehaviour.op_Inequality(occupiedStack, null)) {
                    if (occupiedStack.TileCount !== 0 && !(UnityEngine.MonoBehaviour.op_Inequality(occupiedStack.CurrentFloor, floor))) {
                        return occupiedStack;
                    }
                    floor.ClearOccupiedStack(occupiedStack);
                }
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || !stack.gameObject.activeInHierarchy || stack.TileCount === 0 || UnityEngine.MonoBehaviour.op_Equality(stack, ignoredStack) || UnityEngine.MonoBehaviour.op_Inequality(stack.CurrentFloor, floor)) {
                            continue;
                        }
                        floor.SetOccupiedStack(stack);
                        return stack;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*HexManager.ResolveStackOnFloor end.*/

            /*HexManager.ClearBatchesParallel start.*/
            ClearBatchesParallel: function (clearBatches, speedMultiplier, onComplete) {
if ( TRACE ) { TRACE( "HexManager#ClearBatchesParallel", this ); }

                if (clearBatches == null || clearBatches.Count === 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                var safeSpeedMultiplier = UnityEngine.Mathf.Max(0.01, speedMultiplier);
                var clearDuration = this.clearScaleDuration / safeSpeedMultiplier;
                var clearStagger = UnityEngine.Mathf.Max(0.0, this.clearScaleStagger) / safeSpeedMultiplier;
                var clearTweens = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                for (var batchIndex = 0; batchIndex < clearBatches.Count; batchIndex = (batchIndex + 1) | 0) {
                    var tilesToClear = clearBatches.getItem(batchIndex).$clone().Tiles;
                    if (tilesToClear == null) {
                        continue;
                    }
                    for (var tileIndex = 0; tileIndex < tilesToClear.Count; tileIndex = (tileIndex + 1) | 0) {
                        var tile = tilesToClear.getItem(tileIndex);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                            var tileTransform = tile.transform;
                            DG.Tweening.ShortcutExtensions.DOKill(tileTransform);
                            tileTransform.SetParent(null, true);
                            tileTransform.gameObject.SetActive(true);
                            var delay = clearStagger * tileIndex;
                            var clearTween = DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(tileTransform, pc.Vec3.ZERO.clone(), clearDuration), this.clearScaleEase), delay);
                            clearTweens.add(clearTween);
                        }
                    }
                }
                this.CompleteAfterTweens(clearTweens, Bridge.fn.bind(this, function () {
                    for (var i = 0; i < clearBatches.Count; i = (i + 1) | 0) {
                        var stack = clearBatches.getItem(i).$clone().Stack;
                        var tiles = clearBatches.getItem(i).$clone().Tiles;
                        if (tiles != null) {
                            var lowestPosition = { v : new UnityEngine.Vector3() };
                            var flag = this.TryGetLowestTilePosition(tiles, lowestPosition);
                            var color = { v : new pc.Color( 1, 1, 1, 1 ) };
                            var flag2 = this.clearFxPlayer.TryGetClearBatchColor(tiles, color);
                            var fallbackPrefab = ((UnityEngine.MonoBehaviour.op_Inequality(stack, null)) ? stack.GetTileTemplateForPool() : null);
                            for (var j = 0; j < tiles.Count; j = (j + 1) | 0) {
                                var hexTile = tiles.getItem(j);
                                if (!(UnityEngine.MonoBehaviour.op_Equality(hexTile, null))) {
                                    hexTile.gameObject.SetActive(false);
                                    this.ReturnTile(hexTile, fallbackPrefab);
                                }
                            }
                            if (flag) {
                                this.clearFxPlayer.PlayClearTilesFxAtPosition(this, this.PoolService, lowestPosition.v.$clone(), flag2 ? color.v.$clone() : new pc.Color( 1, 1, 1, 1 ));
                            }
                        }
                    }
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                }));
            },
            /*HexManager.ClearBatchesParallel end.*/

            /*HexManager.TryGetLowestTilePosition start.*/
            TryGetLowestTilePosition: function (tiles, lowestPosition) {
if ( TRACE ) { TRACE( "HexManager#TryGetLowestTilePosition", this ); }

                lowestPosition.v = pc.Vec3.ZERO.clone();
                if (tiles == null || tiles.Count === 0) {
                    return false;
                }
                var hasPosition = false;
                var lowestY = 3.40282347E+38;
                for (var i = 0; i < tiles.Count; i = (i + 1) | 0) {
                    var tile = tiles.getItem(i);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                        var tilePosition = tile.transform.position.$clone();
                        if (!hasPosition || tilePosition.y < lowestY) {
                            hasPosition = true;
                            lowestY = tilePosition.y;
                            lowestPosition.v = tilePosition.$clone();
                        }
                    }
                }
                return hasPosition;
            },
            /*HexManager.TryGetLowestTilePosition end.*/

            /*HexManager.CompleteAfterTweens start.*/
            CompleteAfterTweens: function (tweens, onComplete) {
if ( TRACE ) { TRACE( "HexManager#CompleteAfterTweens", this ); }

                if (tweens == null || tweens.Count === 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                var remainingTweens = 0;
                var callbackInvoked = false;
                var reportTweenFinished = function () {
                    remainingTweens = (remainingTweens - 1) | 0;
                    if (remainingTweens <= 0 && !callbackInvoked) {
                        callbackInvoked = true;
                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    }
                };
                for (var i = 0; i < tweens.Count; i = (i + 1) | 0) {
                    var tween = tweens.getItem(i);
                    if (tween == null || !DG.Tweening.TweenExtensions.IsActive(tween) || DG.Tweening.TweenExtensions.IsComplete(tween)) {
                        continue;
                    }
                    var num = remainingTweens;
                    remainingTweens = (num + 1) | 0;
                    var isReported = { v : false };
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, tween, (function ($me, isReported) {
                        return function () {
                            if (!isReported.v) {
                                isReported.v = true;
                                reportTweenFinished();
                            }
                        };
                    })(this, isReported));
                    DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, tween, (function ($me, isReported) {
                        return function () {
                            if (!isReported.v) {
                                isReported.v = true;
                                reportTweenFinished();
                            }
                        };
                    })(this, isReported));
                }
                if (remainingTweens === 0 && !callbackInvoked) {
                    callbackInvoked = true;
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                }
            },
            /*HexManager.CompleteAfterTweens end.*/

            /*HexManager.GetChainSpeedMultiplier start.*/
            GetChainSpeedMultiplier: function (stepIndex, speedIncreasePerStep) {
if ( TRACE ) { TRACE( "HexManager#GetChainSpeedMultiplier", this ); }

                var stepFactor = 1.0 + UnityEngine.Mathf.Max(0.0, speedIncreasePerStep);
                if (stepFactor <= 1.0 || stepIndex <= 0) {
                    return 1.0;
                }
                return Math.pow(stepFactor, stepIndex);
            },
            /*HexManager.GetChainSpeedMultiplier end.*/

            /*HexManager.TryExtractTopMatchTiles start.*/
            TryExtractTopMatchTiles: function (stack, tilesToClear) {
if ( TRACE ) { TRACE( "HexManager#TryExtractTopMatchTiles", this ); }

                tilesToClear.v = null;
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return false;
                }
                var topColorId = stack.GetTopColorId();
                if (topColorId < 0) {
                    return false;
                }
                var topSameColorCount = stack.CountTopTilesWithColorId(topColorId);
                if (topSameColorCount < this.GetTopMatchClearCount()) {
                    return false;
                }
                var clearCount = topSameColorCount;
                tilesToClear.v = new (System.Collections.Generic.List$1(HexTile)).$ctor2(clearCount);
                for (var i = 0; i < clearCount; i = (i + 1) | 0) {
                    var tile = stack.PopTopTile();
                    if (UnityEngine.MonoBehaviour.op_Equality(tile, null)) {
                        break;
                    }
                    tilesToClear.v.add(tile);
                }
                return tilesToClear.v.Count > 0;
            },
            /*HexManager.TryExtractTopMatchTiles end.*/

            /*HexManager.GetTopMatchClearCount start.*/
            GetTopMatchClearCount: function () {
if ( TRACE ) { TRACE( "HexManager#GetTopMatchClearCount", this ); }

                var config = this.hexConfig;
                if (config == null) {
                    return 3;
                }
                return UnityEngine.Mathf.Max(1, config.topMatchClearCount);
            },
            /*HexManager.GetTopMatchClearCount end.*/

            /*HexManager.LogTransferEvent start.*/
            LogTransferEvent: function (message) {
if ( TRACE ) { TRACE( "HexManager#LogTransferEvent", this ); }

                if (this.logTransferEvents) {
                    UnityEngine.Debug.Log$1("[HexTransfer] " + (message || ""), this);
                }
            },
            /*HexManager.LogTransferEvent end.*/


        }
    });
    /*HexManager end.*/

    /*HexManager+StackClearBatch start.*/
    Bridge.define("HexManager.StackClearBatch", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#getDefaultValue", this ); }
 return new HexManager.StackClearBatch(); }
            }
        },
        fields: {
            Stack: null,
            Tiles: null
        },
        ctors: {
            $ctor1: function (stack, tiles) {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#$ctor1", this ); }

                this.$initialize();
                this.Stack = stack;
                this.Tiles = tiles;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#getHashCode", this ); }

                var h = Bridge.addHash([5007510931, this.Stack, this.Tiles]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#equals", this ); }

                if (!Bridge.is(o, HexManager.StackClearBatch)) {
                    return false;
                }
                return Bridge.equals(this.Stack, o.Stack) && Bridge.equals(this.Tiles, o.Tiles);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "HexManager.StackClearBatch#$clone", this ); }

                var s = to || new HexManager.StackClearBatch();
                s.Stack = this.Stack;
                s.Tiles = this.Tiles;
                return s;
            }
        }
    });
    /*HexManager+StackClearBatch end.*/

    /*HexManager+TransferChainState start.*/
    Bridge.define("HexManager.TransferChainState", {
        $kind: 1002,
        fields: {
            PendingStacks: null,
            QueuedStacks: null,
            TransferTargetStacks: null,
            Generation: 0,
            OnComplete: null,
            TransferStepIndex: 0,
            ClearStepIndex: 0,
            LoopGuard: 0,
            PassStarted: false,
            TransferredInPass: false,
            HadTransfers: false,
            HadClears: false,
            IsCompleted: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexManager.TransferChainState#init", this ); }

                this.PendingStacks = new (System.Collections.Generic.Queue$1(HexStack)).ctor();
                this.QueuedStacks = new (System.Collections.Generic.HashSet$1(HexStack)).ctor();
                this.TransferTargetStacks = new (System.Collections.Generic.HashSet$1(HexStack)).ctor();
            },
            ctor: function (generation, onComplete) {
if ( TRACE ) { TRACE( "HexManager.TransferChainState#ctor", this ); }

                this.$initialize();
                this.Generation = generation;
                this.OnComplete = onComplete;
            }
        }
    });
    /*HexManager+TransferChainState end.*/

    /*HexPoolService start.*/
    Bridge.define("HexPoolService", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            stackPoolRoot: null,
            tilePoolRoot: null,
            fxPoolRoot: null,
            prewarmStackCount: 0,
            prewarmTileCount: 0,
            prewarmFxCount: 0,
            stackPool: null,
            tilePool: null,
            fxPool: null
        },
        methods: {
            /*HexPoolService.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexPoolService#Awake", this ); }

                this.EnsurePoolsInitialized();
            },
            /*HexPoolService.Awake end.*/

            /*HexPoolService.PrewarmStacks$1 start.*/
            PrewarmStacks$1: function (prefab, count) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmStacks$1", this ); }

                this.EnsurePoolsInitialized();
                this.stackPool.Prewarm(prefab, count);
            },
            /*HexPoolService.PrewarmStacks$1 end.*/

            /*HexPoolService.PrewarmStacks start.*/
            PrewarmStacks: function (prefab) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmStacks", this ); }

                this.PrewarmStacks$1(prefab, this.prewarmStackCount);
            },
            /*HexPoolService.PrewarmStacks end.*/

            /*HexPoolService.PrewarmTiles$1 start.*/
            PrewarmTiles$1: function (prefab, count) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmTiles$1", this ); }

                this.EnsurePoolsInitialized();
                this.tilePool.Prewarm(prefab, count);
            },
            /*HexPoolService.PrewarmTiles$1 end.*/

            /*HexPoolService.PrewarmTiles start.*/
            PrewarmTiles: function (prefab) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmTiles", this ); }

                this.PrewarmTiles$1(prefab, this.prewarmTileCount);
            },
            /*HexPoolService.PrewarmTiles end.*/

            /*HexPoolService.PrewarmFx$1 start.*/
            PrewarmFx$1: function (prefab, count) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmFx$1", this ); }

                this.EnsurePoolsInitialized();
                this.fxPool.Prewarm(prefab, count);
            },
            /*HexPoolService.PrewarmFx$1 end.*/

            /*HexPoolService.PrewarmFx start.*/
            PrewarmFx: function (prefab) {
if ( TRACE ) { TRACE( "HexPoolService#PrewarmFx", this ); }

                this.PrewarmFx$1(prefab, this.prewarmFxCount);
            },
            /*HexPoolService.PrewarmFx end.*/

            /*HexPoolService.RentStack start.*/
            RentStack: function (prefab, position, rotation, parent) {
if ( TRACE ) { TRACE( "HexPoolService#RentStack", this ); }

                if (parent === void 0) { parent = null; }
                this.EnsurePoolsInitialized();
                return this.stackPool.Rent(prefab, position.$clone(), rotation.$clone(), parent);
            },
            /*HexPoolService.RentStack end.*/

            /*HexPoolService.ReturnStack start.*/
            ReturnStack: function (stack, fallbackPrefab) {
if ( TRACE ) { TRACE( "HexPoolService#ReturnStack", this ); }

                if (fallbackPrefab === void 0) { fallbackPrefab = null; }
                this.EnsurePoolsInitialized();
                return this.stackPool.Return(stack, fallbackPrefab);
            },
            /*HexPoolService.ReturnStack end.*/

            /*HexPoolService.RentTile start.*/
            RentTile: function (prefab, position, rotation, parent) {
if ( TRACE ) { TRACE( "HexPoolService#RentTile", this ); }

                if (parent === void 0) { parent = null; }
                this.EnsurePoolsInitialized();
                return this.tilePool.Rent(prefab, position.$clone(), rotation.$clone(), parent);
            },
            /*HexPoolService.RentTile end.*/

            /*HexPoolService.ReturnTile start.*/
            ReturnTile: function (tile, fallbackPrefab) {
if ( TRACE ) { TRACE( "HexPoolService#ReturnTile", this ); }

                if (fallbackPrefab === void 0) { fallbackPrefab = null; }
                this.EnsurePoolsInitialized();
                return this.tilePool.Return(tile, fallbackPrefab);
            },
            /*HexPoolService.ReturnTile end.*/

            /*HexPoolService.RentFx start.*/
            RentFx: function (prefab, position, rotation, parent) {
if ( TRACE ) { TRACE( "HexPoolService#RentFx", this ); }

                if (parent === void 0) { parent = null; }
                this.EnsurePoolsInitialized();
                return this.fxPool.Rent(prefab, position.$clone(), rotation.$clone(), parent);
            },
            /*HexPoolService.RentFx end.*/

            /*HexPoolService.ReturnFx start.*/
            ReturnFx: function (fx, fallbackPrefab) {
if ( TRACE ) { TRACE( "HexPoolService#ReturnFx", this ); }

                if (fallbackPrefab === void 0) { fallbackPrefab = null; }
                this.EnsurePoolsInitialized();
                return this.fxPool.Return(fx, fallbackPrefab);
            },
            /*HexPoolService.ReturnFx end.*/

            /*HexPoolService.EnsurePoolsInitialized start.*/
            EnsurePoolsInitialized: function () {
if ( TRACE ) { TRACE( "HexPoolService#EnsurePoolsInitialized", this ); }

                if (this.stackPool == null || this.tilePool == null || this.fxPool == null) {
                    this.stackPoolRoot = this.EnsurePoolRoot(this.stackPoolRoot, "StackPool");
                    this.tilePoolRoot = this.EnsurePoolRoot(this.tilePoolRoot, "TilePool");
                    this.fxPoolRoot = this.EnsurePoolRoot(this.fxPoolRoot, "FxPool");
                    this.stackPool = new (HexPoolService.ComponentPool$1(HexStack))(this.stackPoolRoot);
                    this.tilePool = new (HexPoolService.ComponentPool$1(HexTile))(this.tilePoolRoot);
                    this.fxPool = new (HexPoolService.ComponentPool$1(UnityEngine.ParticleSystem))(this.fxPoolRoot);
                }
            },
            /*HexPoolService.EnsurePoolsInitialized end.*/

            /*HexPoolService.EnsurePoolRoot start.*/
            EnsurePoolRoot: function (configuredRoot, fallbackName) {
if ( TRACE ) { TRACE( "HexPoolService#EnsurePoolRoot", this ); }

                if (UnityEngine.Component.op_Inequality(configuredRoot, null)) {
                    return configuredRoot;
                }
                var rootObject = new UnityEngine.GameObject.$ctor2(fallbackName);
                rootObject.transform.SetParent(this.transform, false);
                return rootObject.transform;
            },
            /*HexPoolService.EnsurePoolRoot end.*/


        },
        overloads: {
            "PrewarmStacks(HexStack, int)": "PrewarmStacks$1",
            "PrewarmTiles(HexTile, int)": "PrewarmTiles$1",
            "PrewarmFx(ParticleSystem, int)": "PrewarmFx$1"
        }
    });
    /*HexPoolService end.*/

    /*HexPoolService+ComponentPool$1 start.*/
    Bridge.define("HexPoolService.ComponentPool$1", function (T) { return {
        $kind: 1002,
        statics: {
            methods: {
                /*HexPoolService+ComponentPool$1.InstantiateComponent:static start.*/
                InstantiateComponent: function (prefab, parent) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#InstantiateComponent", this ); }

                    if (parent === void 0) { parent = null; }
                    if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(prefab), UnityEngine.Object), null)) {
                        return null;
                    }
                    var prefabObject = Bridge.rValue(prefab).gameObject;
                    if (UnityEngine.GameObject.op_Equality(prefabObject, null)) {
                        return null;
                    }
                    var instanceObject = ((UnityEngine.Component.op_Inequality(parent, null)) ? UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefabObject, parent) : UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefabObject));
                    if (UnityEngine.GameObject.op_Equality(instanceObject, null)) {
                        return null;
                    }
                    var instanceComponent = Bridge.rValue(instanceObject.GetComponent(T));
                    if (!Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instanceComponent), UnityEngine.Object), null)) {
                        return Bridge.rValue(instanceComponent);
                    }
                    UnityEngine.Object.Destroy(instanceObject);
                    return null;
                },
                /*HexPoolService+ComponentPool$1.InstantiateComponent:static end.*/


            }
        },
        fields: {
            poolRoot: null,
            bucketsByPrefab: null,
            prefabIdByInstance: null,
            inactiveInPool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#init", this ); }

                this.bucketsByPrefab = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.Queue$1(T))).ctor();
                this.prefabIdByInstance = new (System.Collections.Generic.Dictionary$2(T,System.Int32)).ctor();
                this.inactiveInPool = new (System.Collections.Generic.HashSet$1(T)).ctor();
            },
            ctor: function (poolRoot) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#ctor", this ); }

                this.$initialize();
                this.poolRoot = poolRoot;
            }
        },
        methods: {
            /*HexPoolService+ComponentPool$1.Prewarm start.*/
            Prewarm: function (prefab, count) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#Prewarm", this ); }

                if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(prefab), UnityEngine.Object), null) || count <= 0) {
                    return;
                }
                var safeCount = UnityEngine.Mathf.Max(0, count);
                var prefabId = Bridge.rValue(prefab).GetInstanceID();
                var bucket = this.GetOrCreateBucket(prefabId);
                for (var i = 0; i < safeCount; i = (i + 1) | 0) {
                    var instance = Bridge.rValue(HexPoolService.ComponentPool$1(T).InstantiateComponent(Bridge.rValue(prefab), this.poolRoot));
                    if (!(Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instance), UnityEngine.Object), null))) {
Bridge.rValue(                        instance).gameObject.SetActive(false);
Bridge.rValue(                        instance).transform.localScale = Bridge.rValue(prefab).transform.localScale.$clone();
                        this.prefabIdByInstance.setItem(Bridge.rValue(instance), prefabId);
                        this.inactiveInPool.add(Bridge.rValue(instance));
                        bucket.Enqueue(Bridge.rValue(instance));
                    }
                }
            },
            /*HexPoolService+ComponentPool$1.Prewarm end.*/

            /*HexPoolService+ComponentPool$1.Rent start.*/
            Rent: function (prefab, position, rotation, parent) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#Rent", this ); }

                if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(prefab), UnityEngine.Object), null)) {
                    return null;
                }
                var prefabId = Bridge.rValue(prefab).GetInstanceID();
                var bucket = this.GetOrCreateBucket(prefabId);
                var instance = null;
                while (bucket.Count > 0) {
                    instance = Bridge.rValue(bucket.Dequeue());
                    if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instance), UnityEngine.Object), null)) {
                        continue;
                    }
                    this.inactiveInPool.remove(Bridge.rValue(instance));
                    break;
                }
                if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instance), UnityEngine.Object), null)) {
                    instance = Bridge.rValue(HexPoolService.ComponentPool$1(T).InstantiateComponent(Bridge.rValue(prefab)));
                    if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instance), UnityEngine.Object), null)) {
                        return null;
                    }
                }
                this.prefabIdByInstance.setItem(Bridge.rValue(instance), prefabId);
                var instanceTransform = Bridge.rValue(instance).transform;
                instanceTransform.SetParent(parent, true);
                instanceTransform.SetPositionAndRotation(position, rotation);
                instanceTransform.localScale = Bridge.rValue(prefab).transform.localScale.$clone();
Bridge.rValue(                instance).gameObject.SetActive(true);
                return Bridge.rValue(instance);
            },
            /*HexPoolService+ComponentPool$1.Rent end.*/

            /*HexPoolService+ComponentPool$1.Return start.*/
            Return: function (instance, fallbackPrefab) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#Return", this ); }

                if (fallbackPrefab === void 0) { fallbackPrefab = Bridge.getDefaultValue(T); }
                if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(instance), UnityEngine.Object), null)) {
                    return false;
                }
                if (this.inactiveInPool.contains(Bridge.rValue(instance))) {
                    return false;
                }
                var prefabId = { };
                if (!this.TryResolvePrefabId(Bridge.rValue(instance), Bridge.rValue(fallbackPrefab), prefabId)) {
                    return false;
                }
                var bucket = this.GetOrCreateBucket(prefabId.v);
Bridge.rValue(                instance).gameObject.SetActive(false);
Bridge.rValue(                instance).transform.SetParent(this.poolRoot, false);
                this.inactiveInPool.add(Bridge.rValue(instance));
                bucket.Enqueue(Bridge.rValue(instance));
                return true;
            },
            /*HexPoolService+ComponentPool$1.Return end.*/

            /*HexPoolService+ComponentPool$1.TryResolvePrefabId start.*/
            TryResolvePrefabId: function (instance, fallbackPrefab, prefabId) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#TryResolvePrefabId", this ); }

                if (this.prefabIdByInstance.tryGetValue(Bridge.rValue(instance), prefabId)) {
                    return true;
                }
                if (Bridge.referenceEquals(Bridge.cast(Bridge.rValue(fallbackPrefab), UnityEngine.Object), null)) {
                    prefabId.v = 0;
                    return false;
                }
                prefabId.v = Bridge.rValue(fallbackPrefab).GetInstanceID();
                this.prefabIdByInstance.setItem(Bridge.rValue(instance), prefabId.v);
                return true;
            },
            /*HexPoolService+ComponentPool$1.TryResolvePrefabId end.*/

            /*HexPoolService+ComponentPool$1.GetOrCreateBucket start.*/
            GetOrCreateBucket: function (prefabId) {
if ( TRACE ) { TRACE( "HexPoolService.ComponentPool$1#GetOrCreateBucket", this ); }

                var bucket = { };
                if (this.bucketsByPrefab.tryGetValue(prefabId, bucket)) {
                    return bucket.v;
                }
                bucket.v = new (System.Collections.Generic.Queue$1(T)).ctor();
                this.bucketsByPrefab.setItem(prefabId, bucket.v);
                return bucket.v;
            },
            /*HexPoolService+ComponentPool$1.GetOrCreateBucket end.*/


        }
    }; });
    /*HexPoolService+ComponentPool$1 end.*/

    /*HexStack start.*/
    Bridge.define("HexStack", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ActiveStackSet: null
            },
            props: {
                ActiveStacks: {
                    get: function () {
if ( TRACE ) { TRACE( "HexStack#ActiveStacks#get", this ); }

                        return HexStack.ActiveStackSet;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexStack#init", this ); }

                    this.ActiveStackSet = new (System.Collections.Generic.HashSet$1(HexStack)).ctor();
                }
            },
            methods: {
                /*HexStack.ResolveTileColorIdForIndex:static start.*/
                ResolveTileColorIdForIndex: function (index, presetColorIds, paletteLength) {
if ( TRACE ) { TRACE( "HexStack#ResolveTileColorIdForIndex", this ); }

                    if (paletteLength <= 0) {
                        return -1;
                    }
                    if (presetColorIds != null && index < presetColorIds.length) {
                        var presetColorId = presetColorIds[index];
                        if (presetColorId >= 0 && presetColorId < paletteLength) {
                            return presetColorId;
                        }
                    }
                    return UnityEngine.Random.Range(0, paletteLength);
                },
                /*HexStack.ResolveTileColorIdForIndex:static end.*/

                /*HexStack.ResolveActivePaletteColorCount:static start.*/
                ResolveActivePaletteColorCount: function (config, paletteLength) {
if ( TRACE ) { TRACE( "HexStack#ResolveActivePaletteColorCount", this ); }

                    if (paletteLength <= 0) {
                        return 0;
                    }
                    var configuredCount = ((config != null) ? config.paletteColorCount : 0);
                    if (configuredCount <= 0) {
                        return paletteLength;
                    }
                    return Math.max(1, Math.min(configuredCount, paletteLength));
                },
                /*HexStack.ResolveActivePaletteColorCount:static end.*/


            }
        },
        fields: {
            hexTiles: null,
            gameContext: null,
            currentFloor: null,
            tileTemplate: null,
            anchorPos: null,
            tileStep: 0,
            tileBaseLocalPosition: null,
            hideWhenEmpty: false,
            stackInitialized: false
        },
        props: {
            CurrentFloor: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#CurrentFloor#get", this ); }

                    return this.currentFloor;
                }
            },
            GameContext: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#GameContext#get", this ); }

                    return this.gameContext;
                }
            },
            TileCount: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#TileCount#get", this ); }

                    this.CompactNullTiles();
                    return this.hexTiles.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexStack#init", this ); }

                this.tileBaseLocalPosition = new UnityEngine.Vector3();
                this.hexTiles = new (System.Collections.Generic.List$1(HexTile)).ctor();
                this.tileStep = 0.07;
                this.tileBaseLocalPosition = pc.Vec3.ZERO.clone();
                this.hideWhenEmpty = true;
            }
        },
        methods: {
            /*HexStack.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexStack#Awake", this ); }

                this.EnsureTilesInitializedFromChildren();
                this.CacheGeometryFromTiles();
            },
            /*HexStack.Awake end.*/

            /*HexStack.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "HexStack#OnEnable", this ); }

                HexStack.ActiveStackSet.add(this);
            },
            /*HexStack.OnEnable end.*/

            /*HexStack.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "HexStack#OnDisable", this ); }

                HexStack.ActiveStackSet.remove(this);
            },
            /*HexStack.OnDisable end.*/

            /*HexStack.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HexStack#Start", this ); }

                if (!this.stackInitialized) {
                    this.CreateStack();
                }
                this.RefreshVisibilityAndBinding();
            },
            /*HexStack.Start end.*/

            /*HexStack.CreateStack start.*/
            CreateStack: function (colorIdsBottomToTop) {
if ( TRACE ) { TRACE( "HexStack#CreateStack", this ); }

                if (colorIdsBottomToTop === void 0) { colorIdsBottomToTop = null; }
                this.EnsureTilesInitializedFromChildren();
                var hasPreset = colorIdsBottomToTop != null && colorIdsBottomToTop.length !== 0;
                var palette = null;
                var config = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null);
                if (config == null || config.colors == null || config.colors.length === 0) {
                    return;
                }
                palette = config.colors;
                var activePaletteColorCount = HexStack.ResolveActivePaletteColorCount(config, palette.length);
                if (activePaletteColorCount <= 0 || (hasPreset && !this.EnsureTileCount(colorIdsBottomToTop.length))) {
                    return;
                }
                this.CompactNullTiles();
                for (var i = 0; i < this.hexTiles.Count; i = (i + 1) | 0) {
                    var tileColorId = HexStack.ResolveTileColorIdForIndex(i, colorIdsBottomToTop, activePaletteColorCount);
                    if (tileColorId >= 0 && tileColorId < palette.length) {
                        this.hexTiles.getItem(i).gameObject.SetActive(true);
                        this.hexTiles.getItem(i).SetColor(tileColorId, palette[tileColorId].$clone());
                    }
                }
                this.stackInitialized = true;
                this.AlignTilesToAnchor();
                this.RefreshVisibilityAndBinding();
            },
            /*HexStack.CreateStack end.*/

            /*HexStack.SetCurrentFloor start.*/
            SetCurrentFloor: function (floor) {
if ( TRACE ) { TRACE( "HexStack#SetCurrentFloor", this ); }

                this.currentFloor = floor;
            },
            /*HexStack.SetCurrentFloor end.*/

            /*HexStack.SetGameContext start.*/
            SetGameContext: function (context) {
if ( TRACE ) { TRACE( "HexStack#SetGameContext", this ); }

                this.gameContext = context;
            },
            /*HexStack.SetGameContext end.*/

            /*HexStack.GetTileTemplateForPool start.*/
            GetTileTemplateForPool: function () {
if ( TRACE ) { TRACE( "HexStack#GetTileTemplateForPool", this ); }

                return this.ResolveTileTemplate();
            },
            /*HexStack.GetTileTemplateForPool end.*/

            /*HexStack.GetTopTile start.*/
            GetTopTile: function () {
if ( TRACE ) { TRACE( "HexStack#GetTopTile", this ); }

                this.CompactNullTiles();
                if (this.hexTiles.Count === 0) {
                    return null;
                }
                return this.hexTiles.getItem(((this.hexTiles.Count - 1) | 0));
            },
            /*HexStack.GetTopTile end.*/

            /*HexStack.GetTopColorId start.*/
            GetTopColorId: function () {
if ( TRACE ) { TRACE( "HexStack#GetTopColorId", this ); }

                var topTile = this.GetTopTile();
                return (UnityEngine.MonoBehaviour.op_Inequality(topTile, null)) ? topTile.ColorIdValue : (-1);
            },
            /*HexStack.GetTopColorId end.*/

            /*HexStack.CountTopTilesWithColorId start.*/
            CountTopTilesWithColorId: function (colorId) {
if ( TRACE ) { TRACE( "HexStack#CountTopTilesWithColorId", this ); }

                if (colorId < 0) {
                    return 0;
                }
                this.CompactNullTiles();
                var count = 0;
                for (var i = (this.hexTiles.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var tile = this.hexTiles.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(tile, null) || tile.ColorIdValue !== colorId) {
                        break;
                    }
                    count = (count + 1) | 0;
                }
                return count;
            },
            /*HexStack.CountTopTilesWithColorId end.*/

            /*HexStack.PopTopTile start.*/
            PopTopTile: function () {
if ( TRACE ) { TRACE( "HexStack#PopTopTile", this ); }

                this.CompactNullTiles();
                if (this.hexTiles.Count === 0) {
                    return null;
                }
                var topIndex = (this.hexTiles.Count - 1) | 0;
                var topTile = this.hexTiles.getItem(topIndex);
                this.hexTiles.removeAt(topIndex);
                if (UnityEngine.MonoBehaviour.op_Inequality(topTile, null)) {
                    topTile.transform.SetParent(null, true);
                }
                this.RefreshVisibilityAndBinding();
                return topTile;
            },
            /*HexStack.PopTopTile end.*/

            /*HexStack.PushTopTile start.*/
            PushTopTile: function (tile) {
if ( TRACE ) { TRACE( "HexStack#PushTopTile", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                    this.CompactNullTiles();
                    tile.transform.SetParent(this.transform, true);
                    tile.transform.localPosition = this.GetLocalPositionForIndex(this.hexTiles.Count);
                    this.hexTiles.add(tile);
                    this.RefreshVisibilityAndBinding();
                }
            },
            /*HexStack.PushTopTile end.*/

            /*HexStack.GetNextTopWorldPosition start.*/
            GetNextTopWorldPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetNextTopWorldPosition", this ); }

                this.CompactNullTiles();
                var localPosition = this.GetLocalPositionForIndex(this.hexTiles.Count);
                return this.transform.TransformPoint$1(localPosition);
            },
            /*HexStack.GetNextTopWorldPosition end.*/

            /*HexStack.GetWorldPositionForTileIndex start.*/
            GetWorldPositionForTileIndex: function (index) {
if ( TRACE ) { TRACE( "HexStack#GetWorldPositionForTileIndex", this ); }

                index = UnityEngine.Mathf.Max(0, index);
                var localPosition = this.GetLocalPositionForIndex(index);
                return this.transform.TransformPoint$1(localPosition);
            },
            /*HexStack.GetWorldPositionForTileIndex end.*/

            /*HexStack.CacheGeometryFromTiles start.*/
            CacheGeometryFromTiles: function () {
if ( TRACE ) { TRACE( "HexStack#CacheGeometryFromTiles", this ); }

                if (UnityEngine.Component.op_Inequality(this.anchorPos, null)) {
                    this.tileBaseLocalPosition = this.transform.InverseTransformPoint(this.anchorPos.position);
                    return;
                }
                this.CompactNullTiles();
                if (this.hexTiles.Count !== 0) {
                    this.tileBaseLocalPosition = this.hexTiles.getItem(0).transform.localPosition.$clone();
                }
            },
            /*HexStack.CacheGeometryFromTiles end.*/

            /*HexStack.GetLocalPositionForIndex start.*/
            GetLocalPositionForIndex: function (index) {
if ( TRACE ) { TRACE( "HexStack#GetLocalPositionForIndex", this ); }

                return this.GetAnchorBaseLocalPosition().add( pc.Vec3.UP.clone().clone().scale( (this.tileStep * index) ) );
            },
            /*HexStack.GetLocalPositionForIndex end.*/

            /*HexStack.EnsureTileCount start.*/
            EnsureTileCount: function (targetCount) {
if ( TRACE ) { TRACE( "HexStack#EnsureTileCount", this ); }

                targetCount = UnityEngine.Mathf.Max(0, targetCount);
                this.CompactNullTiles();
                var fallbackTemplate = this.ResolveTileTemplate();
                var manager = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Manager : null);
                while (this.hexTiles.Count > targetCount) {
                    var lastIndex = (this.hexTiles.Count - 1) | 0;
                    var tile = this.hexTiles.getItem(lastIndex);
                    this.hexTiles.removeAt(lastIndex);
                    if (UnityEngine.MonoBehaviour.op_Inequality(tile, null)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(manager, null)) {
                            manager.ReturnTile(tile, fallbackTemplate);
                        } else {
                            UnityEngine.Object.Destroy(tile.gameObject);
                        }
                    }
                }
                if (this.hexTiles.Count === targetCount) {
                    return true;
                }
                var template = this.ResolveTileTemplate();
                if (UnityEngine.MonoBehaviour.op_Equality(template, null)) {
                    return false;
                }
                while (this.hexTiles.Count < targetCount) {
                    var createdTile = ((UnityEngine.MonoBehaviour.op_Inequality(manager, null)) ? manager.RentTile(template, this.transform) : UnityEngine.Object.Instantiate(HexTile, template, this.transform));
                    if (UnityEngine.MonoBehaviour.op_Equality(createdTile, null)) {
                        break;
                    }
                    createdTile.gameObject.name = template.gameObject.name;
                    this.hexTiles.add(createdTile);
                }
                this.RefreshVisibilityAndBinding();
                return this.hexTiles.Count === targetCount;
            },
            /*HexStack.EnsureTileCount end.*/

            /*HexStack.ResolveTileTemplate start.*/
            ResolveTileTemplate: function () {
if ( TRACE ) { TRACE( "HexStack#ResolveTileTemplate", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tileTemplate, null)) {
                    return this.tileTemplate;
                }
                this.CompactNullTiles();
                if (this.hexTiles.Count > 0 && UnityEngine.MonoBehaviour.op_Inequality(this.hexTiles.getItem(0), null)) {
                    this.tileTemplate = this.hexTiles.getItem(0);
                    return this.tileTemplate;
                }
                this.tileTemplate = this.GetComponentInChildren(HexTile, true);
                return this.tileTemplate;
            },
            /*HexStack.ResolveTileTemplate end.*/

            /*HexStack.CompactNullTiles start.*/
            CompactNullTiles: function () {
if ( TRACE ) { TRACE( "HexStack#CompactNullTiles", this ); }

                for (var i = (this.hexTiles.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.hexTiles.getItem(i), null)) {
                        this.hexTiles.removeAt(i);
                    }
                }
            },
            /*HexStack.CompactNullTiles end.*/

            /*HexStack.EnsureTilesInitializedFromChildren start.*/
            EnsureTilesInitializedFromChildren: function () {
if ( TRACE ) { TRACE( "HexStack#EnsureTilesInitializedFromChildren", this ); }

                var $t;
                this.CompactNullTiles();
                if (this.hexTiles.Count > 0) {
                    return;
                }
                var childTiles = this.GetComponentsInChildren$1(HexTile, true);
                if (childTiles == null || childTiles.length === 0) {
                    return;
                }
                System.Array.sort(childTiles, function (left, right) {
                        if (UnityEngine.MonoBehaviour.op_Equality(left, null) && UnityEngine.MonoBehaviour.op_Equality(right, null)) {
                            return 0;
                        }
                        if (UnityEngine.MonoBehaviour.op_Equality(left, null)) {
                            return 1;
                        }
                        return (UnityEngine.MonoBehaviour.op_Equality(right, null)) ? (-1) : Bridge.compare(left.transform.localPosition.y, right.transform.localPosition.y);
                    });
                $t = Bridge.getEnumerator(childTiles);
                try {
                    while ($t.moveNext()) {
                        var tile = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                            this.hexTiles.add(tile);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexStack.EnsureTilesInitializedFromChildren end.*/

            /*HexStack.GetAnchorBaseLocalPosition start.*/
            GetAnchorBaseLocalPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetAnchorBaseLocalPosition", this ); }

                if (UnityEngine.Component.op_Inequality(this.anchorPos, null)) {
                    return this.transform.InverseTransformPoint(this.anchorPos.position);
                }
                return this.tileBaseLocalPosition.$clone();
            },
            /*HexStack.GetAnchorBaseLocalPosition end.*/

            /*HexStack.AlignTilesToAnchor start.*/
            AlignTilesToAnchor: function () {
if ( TRACE ) { TRACE( "HexStack#AlignTilesToAnchor", this ); }

                this.CompactNullTiles();
                for (var i = 0; i < this.hexTiles.Count; i = (i + 1) | 0) {
                    var tile = this.hexTiles.getItem(i);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                        tile.transform.localPosition = this.GetLocalPositionForIndex(i);
                        tile.transform.localRotation = pc.Quat.IDENTITY.clone();
                    }
                }
            },
            /*HexStack.AlignTilesToAnchor end.*/

            /*HexStack.RefreshVisibilityAndBinding start.*/
            RefreshVisibilityAndBinding: function () {
if ( TRACE ) { TRACE( "HexStack#RefreshVisibilityAndBinding", this ); }

                this.CompactNullTiles();
                var hasTiles = this.hexTiles.Count > 0;
                if (!hasTiles) {
                    this.DetachFromFloor();
                    var manager = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Manager : null);
                    if (UnityEngine.MonoBehaviour.op_Inequality(manager, null) && manager.TryRecycleEmptyStack(this)) {
                        return;
                    }
                }
                if (this.hideWhenEmpty && Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeSelf !== hasTiles) {
                    Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.SetActive(hasTiles);
                }
            },
            /*HexStack.RefreshVisibilityAndBinding end.*/

            /*HexStack.DetachFromFloor start.*/
            DetachFromFloor: function () {
if ( TRACE ) { TRACE( "HexStack#DetachFromFloor", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentFloor, null)) {
                    this.currentFloor.ClearOccupiedStack(this);
                    this.currentFloor = null;
                }
                $t = Bridge.getEnumerator(HexFloor.ActiveFloors, HexFloor);
                try {
                    while ($t.moveNext()) {
                        var floor = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null))) {
                            floor.ClearOccupiedStack(this);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexStack.DetachFromFloor end.*/


        }
    });
    /*HexStack end.*/

    /*HexStacksCreator start.*/
    Bridge.define("HexStacksCreator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                GeneratedBottomLayerCount: 0,
                GeneratedTopLayerCount: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#init", this ); }

                    this.GeneratedBottomLayerCount = 5;
                    this.GeneratedTopLayerCount = 5;
                }
            },
            methods: {
                /*HexStacksCreator.NormalizePresetColorIds:static start.*/
                NormalizePresetColorIds: function (presetColorIds, colorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#NormalizePresetColorIds", this ); }

                    if (presetColorIds == null || presetColorIds.length === 0 || colorCount <= 0) {
                        return null;
                    }
                    var normalized = System.Array.init(presetColorIds.length, 0, System.Int32);
                    for (var i = 0; i < presetColorIds.length; i = (i + 1) | 0) {
                        normalized[i] = HexStacksCreator.NormalizeColorId(presetColorIds[i], colorCount);
                    }
                    return normalized;
                },
                /*HexStacksCreator.NormalizePresetColorIds:static end.*/

                /*HexStacksCreator.NormalizeColorId:static start.*/
                NormalizeColorId: function (colorId, colorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#NormalizeColorId", this ); }

                    if (colorCount <= 0) {
                        return -1;
                    }
                    var normalized = colorId % colorCount;
                    if (normalized < 0) {
                        normalized = (normalized + colorCount) | 0;
                    }
                    return normalized;
                },
                /*HexStacksCreator.NormalizeColorId:static end.*/

                /*HexStacksCreator.GetSpawnNeighborCount:static start.*/
                GetSpawnNeighborCount: function (floor, spawnSet) {
if ( TRACE ) { TRACE( "HexStacksCreator#GetSpawnNeighborCount", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(floor, null) || spawnSet == null || spawnSet.Count === 0) {
                        return 0;
                    }
                    var count = 0;
                    for (var side = 0; side < 6; side = (side + 1) | 0) {
                        var neighbor = floor.GetNeighborBySide(side);
                        if (UnityEngine.MonoBehaviour.op_Inequality(neighbor, null) && spawnSet.contains(neighbor)) {
                            count = (count + 1) | 0;
                        }
                    }
                    return count;
                },
                /*HexStacksCreator.GetSpawnNeighborCount:static end.*/

                /*HexStacksCreator.BuildNoSpawnCoordSet:static start.*/
                BuildNoSpawnCoordSet: function (config) {
if ( TRACE ) { TRACE( "HexStacksCreator#BuildNoSpawnCoordSet", this ); }

                    var blockedCoords = new (System.Collections.Generic.HashSet$1(System.Int64)).ctor();
                    if (config == null || config.noStackSpawnCoords == null) {
                        return blockedCoords;
                    }
                    for (var i = 0; i < config.noStackSpawnCoords.length; i = (i + 1) | 0) {
                        var coord = config.noStackSpawnCoords[i].$clone();
                        blockedCoords.add(HexStacksCreator.BuildCoordKey(coord.x, coord.z));
                    }
                    return blockedCoords;
                },
                /*HexStacksCreator.BuildNoSpawnCoordSet:static end.*/

                /*HexStacksCreator.BuildCoordKey:static start.*/
                BuildCoordKey: function (x, z) {
if ( TRACE ) { TRACE( "HexStacksCreator#BuildCoordKey", this ); }

                    return (System.Int64(x).shl(32)).xor(System.Int64((z >>> 0)));
                },
                /*HexStacksCreator.BuildCoordKey:static end.*/


            }
        },
        fields: {
            gameContext: null,
            spawnStackPrefab: null,
            stacksRoot: null,
            stackSlots: null,
            spawnOnStart: false,
            clearExistingOnStart: false,
            respawnWhenAllPlaced: false,
            spawnSlotsOnlyOnce: false,
            slotOccupancyRadius: 0,
            logGeneratedFill: false,
            debugLogs: false,
            pendingPlacementStacks: null,
            runtimePooledStacks: null,
            stackQueryBuffer: null,
            runtimeSpawnTemplate: null,
            hasSpawnedStacks: false,
            InitialPlayerStacksCompleted: false
        },
        props: {
            HexConfig: {
                get: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#HexConfig#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null;
                }
            },
            PoolService: {
                get: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#PoolService#get", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.PoolService : null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#init", this ); }

                this.spawnOnStart = true;
                this.clearExistingOnStart = true;
                this.respawnWhenAllPlaced = true;
                this.slotOccupancyRadius = 0.2;
                this.debugLogs = false;
                this.pendingPlacementStacks = new (System.Collections.Generic.HashSet$1(HexStack)).ctor();
                this.runtimePooledStacks = new (System.Collections.Generic.HashSet$1(HexStack)).ctor();
                this.stackQueryBuffer = new (System.Collections.Generic.List$1(HexStack)).ctor();
            }
        },
        methods: {
            /*HexStacksCreator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#Start", this ); }

                if (this.spawnOnStart) {
                    if (this.clearExistingOnStart) {
                        this.ClearExistingStacks();
                    }
                    this.CreateRuntimeSpawnTemplate();
                    this.PrewarmStacks();
                    this.TrySpawnIntoSlotsByPlacementState(false);
                }
                this.MarkInitialPlayerStacksCompleted();
            },
            /*HexStacksCreator.Start end.*/

            /*HexStacksCreator.TryRecycleEmptyStack start.*/
            TryRecycleEmptyStack: function (stack) {
if ( TRACE ) { TRACE( "HexStacksCreator#TryRecycleEmptyStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || !this.runtimePooledStacks.contains(stack)) {
                    return false;
                }
                this.pendingPlacementStacks.remove(stack);
                stack.SetCurrentFloor(null);
                var fallbackPrefab = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                var poolService = this.PoolService;
                if (UnityEngine.MonoBehaviour.op_Inequality(poolService, null) && UnityEngine.MonoBehaviour.op_Inequality(fallbackPrefab, null) && poolService.ReturnStack(stack, fallbackPrefab)) {
                    return true;
                }
                stack.gameObject.SetActive(false);
                return true;
            },
            /*HexStacksCreator.TryRecycleEmptyStack end.*/

            /*HexStacksCreator.NotifyStackPlaced start.*/
            NotifyStackPlaced: function (stack) {
if ( TRACE ) { TRACE( "HexStacksCreator#NotifyStackPlaced", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) {
                    this.pendingPlacementStacks.remove(stack);
                }
                this.TrySpawnIntoSlotsByPlacementState(true);
            },
            /*HexStacksCreator.NotifyStackPlaced end.*/

            /*HexStacksCreator.FillFloorsWithConfiguredStacks start.*/
            FillFloorsWithConfiguredStacks: function (floors) {
if ( TRACE ) { TRACE( "HexStacksCreator#FillFloorsWithConfiguredStacks", this ); }

                if (floors == null || System.Array.getCount(floors, HexFloor) === 0) {
                    return;
                }
                var hexConfig = this.HexConfig;
                if (hexConfig == null || hexConfig.colors == null || hexConfig.colors.length === 0) {
                    return;
                }
                var activePaletteColorCount = this.GetActivePaletteColorCount(hexConfig.colors);
                if (activePaletteColorCount < 2) {
                    UnityEngine.Debug.LogWarning$1("[HexStacksCreator] At least 2 colors are required for generated floor stacks.");
                    return;
                }
                this.CleanupTrackedStacks();
                this.CreateRuntimeSpawnTemplate();
                this.PrewarmStacks();
                this.ClearStacksPlacedOnFloors();
                var prefab = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                if (UnityEngine.MonoBehaviour.op_Equality(prefab, null)) {
                    return;
                }
                var noSpawnCoords = HexStacksCreator.BuildNoSpawnCoordSet(hexConfig);
                var spawnFloors = this.CollectSpawnFloors(floors, noSpawnCoords);
                if (spawnFloors.Count === 0) {
                    return;
                }
                var topColorByFloor = { };
                if (!this.TryBuildTopColorAssignment(spawnFloors, activePaletteColorCount, topColorByFloor)) {
                    UnityEngine.Debug.LogWarning$1("[HexStacksCreator] Unable to assign top colors without neighbor duplicates.");
                    return;
                }
                var createdCount = 0;
                for (var i = 0; i < spawnFloors.Count; i = (i + 1) | 0) {
                    var floor = spawnFloors.getItem(i);
                    var topColorId = { };
                    if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null)) && topColorByFloor.v.tryGetValue(floor, topColorId) && this.SpawnConfiguredFloorStack(floor, prefab, topColorId.v, activePaletteColorCount)) {
                        createdCount = (createdCount + 1) | 0;
                    }
                }
            },
            /*HexStacksCreator.FillFloorsWithConfiguredStacks end.*/

            /*HexStacksCreator.TrySpawnIntoSlotsByPlacementState start.*/
            TrySpawnIntoSlotsByPlacementState: function (respectRespawnToggle) {
if ( TRACE ) { TRACE( "HexStacksCreator#TrySpawnIntoSlotsByPlacementState", this ); }

                if ((!respectRespawnToggle || this.respawnWhenAllPlaced) && (!this.spawnSlotsOnlyOnce || !this.hasSpawnedStacks) && this.AreAllPendingStacksPlacedOnFloor()) {
                    var spawnedCount = this.SpawnStacksIntoSlots();
                    if (spawnedCount > 0) {
                        this.hasSpawnedStacks = true;
                    }
                }
            },
            /*HexStacksCreator.TrySpawnIntoSlotsByPlacementState end.*/

            /*HexStacksCreator.ResolveTileTemplateForPool start.*/
            ResolveTileTemplateForPool: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#ResolveTileTemplateForPool", this ); }

                var sourceStack = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                return (UnityEngine.MonoBehaviour.op_Inequality(sourceStack, null)) ? sourceStack.GetTileTemplateForPool() : null;
            },
            /*HexStacksCreator.ResolveTileTemplateForPool end.*/

            /*HexStacksCreator.ClearExistingStacks start.*/
            ClearExistingStacks: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#ClearExistingStacks", this ); }

                var $t;
                var root = ((UnityEngine.Component.op_Inequality(this.stacksRoot, null)) ? this.stacksRoot : this.transform);
                if (UnityEngine.Component.op_Equality(root, null)) {
                    return;
                }
                var stacks = root.GetComponentsInChildren$1(HexStack, true);
                $t = Bridge.getEnumerator(stacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null))) {
                            var floor = stack.CurrentFloor;
                            if (UnityEngine.MonoBehaviour.op_Inequality(floor, null)) {
                                floor.ClearOccupiedStack(stack);
                                stack.SetCurrentFloor(null);
                            }
                            stack.gameObject.SetActive(false);
                            if (UnityEngine.Application.isPlaying) {
                                UnityEngine.Object.Destroy(stack.gameObject);
                            } else {
                                UnityEngine.Object.DestroyImmediate(stack.gameObject);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.pendingPlacementStacks.clear();
                this.runtimePooledStacks.clear();
                this.hasSpawnedStacks = false;
            },
            /*HexStacksCreator.ClearExistingStacks end.*/

            /*HexStacksCreator.AreAllPendingStacksPlacedOnFloor start.*/
            AreAllPendingStacksPlacedOnFloor: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#AreAllPendingStacksPlacedOnFloor", this ); }

                this.CleanupPendingPlacementStacks();
                return this.pendingPlacementStacks.Count === 0;
            },
            /*HexStacksCreator.AreAllPendingStacksPlacedOnFloor end.*/

            /*HexStacksCreator.SpawnStacksIntoSlots start.*/
            SpawnStacksIntoSlots: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#SpawnStacksIntoSlots", this ); }

                var prefab = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                if (UnityEngine.MonoBehaviour.op_Equality(prefab, null) || this.stackSlots == null || this.stackSlots.length === 0) {
                    return 0;
                }
                var root = ((UnityEngine.Component.op_Inequality(this.stacksRoot, null)) ? this.stacksRoot : this.transform);
                var spawnedCount = 0;
                for (var i = 0; i < this.stackSlots.length; i = (i + 1) | 0) {
                    var slot = this.stackSlots[i];
                    if (!(UnityEngine.Component.op_Equality(slot, null)) && !this.IsSlotOccupied(slot)) {
                        var spawnedStack = this.RentStack(prefab, slot.position.$clone(), slot.rotation.$clone(), root);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(spawnedStack, null))) {
                            this.ApplyContext(spawnedStack);
                            spawnedStack.gameObject.SetActive(true);
                            spawnedStack.transform.SetPositionAndRotation(slot.position, slot.rotation);
                            spawnedStack.SetCurrentFloor(null);
                            spawnedStack.CreateStack(this.GetPlayerStackColorIds());
                            this.runtimePooledStacks.add(spawnedStack);
                            this.RegisterPendingPlacementStack(spawnedStack);
                            spawnedCount = (spawnedCount + 1) | 0;
                        }
                    }
                }
                return spawnedCount;
            },
            /*HexStacksCreator.SpawnStacksIntoSlots end.*/

            /*HexStacksCreator.GetPlayerStackColorIds start.*/
            GetPlayerStackColorIds: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#GetPlayerStackColorIds", this ); }

                var hexConfig = this.HexConfig;
                var activePaletteColorCount = this.GetActivePaletteColorCount((hexConfig != null) ? hexConfig.colors : null);
                if (activePaletteColorCount <= 0) {
                    return null;
                }
                var fivePlusFiveColorIds = { };
                if (hexConfig != null && hexConfig.generatePlayerStacksByFivePlusFive && this.TryBuildFivePlusFiveColorIds(activePaletteColorCount, fivePlusFiveColorIds)) {
                    return fivePlusFiveColorIds.v;
                }
                return this.GetRandomPresetColorIds(activePaletteColorCount);
            },
            /*HexStacksCreator.GetPlayerStackColorIds end.*/

            /*HexStacksCreator.GetRandomPresetColorIds start.*/
            GetRandomPresetColorIds: function (activePaletteColorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#GetRandomPresetColorIds", this ); }

                var hexConfig = this.HexConfig;
                if (activePaletteColorCount <= 0 || hexConfig == null || hexConfig.startStackColors == null || hexConfig.startStackColors.length === 0) {
                    return null;
                }
                var startIndex = UnityEngine.Random.Range(0, hexConfig.startStackColors.length);
                for (var i = 0; i < hexConfig.startStackColors.length; i = (i + 1) | 0) {
                    var preset = hexConfig.startStackColors[(((startIndex + i) | 0)) % hexConfig.startStackColors.length];
                    if (preset != null && preset.colorIdsBottomToTop != null && preset.colorIdsBottomToTop.length !== 0) {
                        return HexStacksCreator.NormalizePresetColorIds(preset.colorIdsBottomToTop, activePaletteColorCount);
                    }
                }
                return null;
            },
            /*HexStacksCreator.GetRandomPresetColorIds end.*/

            /*HexStacksCreator.TryBuildFivePlusFiveColorIds start.*/
            TryBuildFivePlusFiveColorIds: function (activePaletteColorCount, colorIdsBottomToTop) {
if ( TRACE ) { TRACE( "HexStacksCreator#TryBuildFivePlusFiveColorIds", this ); }

                colorIdsBottomToTop.v = null;
                if (activePaletteColorCount <= 0) {
                    return false;
                }
                var bottomColorId = UnityEngine.Random.Range(0, activePaletteColorCount);
                var topColorId = bottomColorId;
                if (activePaletteColorCount > 1) {
                    topColorId = UnityEngine.Random.Range(0, ((activePaletteColorCount - 1) | 0));
                    if (topColorId >= bottomColorId) {
                        topColorId = (topColorId + 1) | 0;
                    }
                }
                var tileCount = 10;
                colorIdsBottomToTop.v = System.Array.init(tileCount, 0, System.Int32);
                for (var j = 0; j < 5; j = (j + 1) | 0) {
                    colorIdsBottomToTop.v[j] = bottomColorId;
                }
                for (var i = 5; i < tileCount; i = (i + 1) | 0) {
                    colorIdsBottomToTop.v[i] = topColorId;
                }
                return true;
            },
            /*HexStacksCreator.TryBuildFivePlusFiveColorIds end.*/

            /*HexStacksCreator.RentStack start.*/
            RentStack: function (prefab, position, rotation, parent) {
if ( TRACE ) { TRACE( "HexStacksCreator#RentStack", this ); }

                var poolService = this.PoolService;
                if (UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) {
                    var pooledStack = poolService.RentStack(prefab, position.$clone(), rotation.$clone(), parent);
                    if (UnityEngine.MonoBehaviour.op_Inequality(pooledStack, null)) {
                        return pooledStack;
                    }
                }
                return UnityEngine.Object.Instantiate$3(HexStack, prefab, position, rotation, parent);
            },
            /*HexStacksCreator.RentStack end.*/

            /*HexStacksCreator.RegisterPendingPlacementStack start.*/
            RegisterPendingPlacementStack: function (stack) {
if ( TRACE ) { TRACE( "HexStacksCreator#RegisterPendingPlacementStack", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && stack.gameObject.activeInHierarchy && !(UnityEngine.MonoBehaviour.op_Inequality(stack.CurrentFloor, null))) {
                    this.pendingPlacementStacks.add(stack);
                }
            },
            /*HexStacksCreator.RegisterPendingPlacementStack end.*/

            /*HexStacksCreator.CleanupPendingPlacementStacks start.*/
            CleanupPendingPlacementStacks: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#CleanupPendingPlacementStacks", this ); }

                this.pendingPlacementStacks.RemoveWhere(function (stack) {
                    return UnityEngine.MonoBehaviour.op_Equality(stack, null) || !stack.gameObject.activeInHierarchy || UnityEngine.MonoBehaviour.op_Inequality(stack.CurrentFloor, null);
                });
            },
            /*HexStacksCreator.CleanupPendingPlacementStacks end.*/

            /*HexStacksCreator.IsSlotOccupied start.*/
            IsSlotOccupied: function (slot) {
if ( TRACE ) { TRACE( "HexStacksCreator#IsSlotOccupied", this ); }

                var $t;
                if (UnityEngine.Component.op_Equality(slot, null)) {
                    return true;
                }
                var safeRadius = UnityEngine.Mathf.Max(0.01, this.slotOccupancyRadius);
                var maxSqrDistance = safeRadius * safeRadius;
                var slotPosition = slot.position.$clone();
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && stack.gameObject.activeInHierarchy && stack.TileCount !== 0 && !(UnityEngine.MonoBehaviour.op_Inequality(stack.CurrentFloor, null))) {
                            var delta = stack.transform.position.$clone().sub( slotPosition );
                            delta.y = 0.0;
                            if (delta.lengthSq() <= maxSqrDistance) {
                                return true;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*HexStacksCreator.IsSlotOccupied end.*/

            /*HexStacksCreator.CreateRuntimeSpawnTemplate start.*/
            CreateRuntimeSpawnTemplate: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#CreateRuntimeSpawnTemplate", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) && !(UnityEngine.MonoBehaviour.op_Equality(this.spawnStackPrefab, null))) {
                    this.runtimeSpawnTemplate = UnityEngine.Object.Instantiate(HexStack, this.spawnStackPrefab, this.transform);
                    this.ApplyContext(this.runtimeSpawnTemplate);
                    this.runtimeSpawnTemplate.gameObject.SetActive(false);
                    this.runtimeSpawnTemplate.name = (this.spawnStackPrefab.name || "") + "_RuntimeTemplate";
                }
            },
            /*HexStacksCreator.CreateRuntimeSpawnTemplate end.*/

            /*HexStacksCreator.PrewarmStacks start.*/
            PrewarmStacks: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#PrewarmStacks", this ); }

                var poolService = this.PoolService;
                if (!(UnityEngine.MonoBehaviour.op_Equality(poolService, null))) {
                    var prefab = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(prefab, null))) {
                        poolService.PrewarmStacks(prefab);
                    }
                }
            },
            /*HexStacksCreator.PrewarmStacks end.*/

            /*HexStacksCreator.CleanupTrackedStacks start.*/
            CleanupTrackedStacks: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#CleanupTrackedStacks", this ); }

                this.pendingPlacementStacks.RemoveWhere(function (stack) {
                    return UnityEngine.MonoBehaviour.op_Equality(stack, null);
                });
                this.runtimePooledStacks.RemoveWhere(function (stack) {
                    return UnityEngine.MonoBehaviour.op_Equality(stack, null);
                });
            },
            /*HexStacksCreator.CleanupTrackedStacks end.*/

            /*HexStacksCreator.ClearStacksPlacedOnFloors start.*/
            ClearStacksPlacedOnFloors: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#ClearStacksPlacedOnFloors", this ); }

                var $t;
                this.stackQueryBuffer.clear();
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && !(UnityEngine.MonoBehaviour.op_Equality(stack, this.runtimeSpawnTemplate)) && !(UnityEngine.MonoBehaviour.op_Equality(stack.CurrentFloor, null))) {
                            this.stackQueryBuffer.add(stack);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                for (var i = 0; i < this.stackQueryBuffer.Count; i = (i + 1) | 0) {
                    this.DespawnStack(this.stackQueryBuffer.getItem(i));
                }
            },
            /*HexStacksCreator.ClearStacksPlacedOnFloors end.*/

            /*HexStacksCreator.DespawnStack start.*/
            DespawnStack: function (stack) {
if ( TRACE ) { TRACE( "HexStacksCreator#DespawnStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return;
                }
                var floor = stack.CurrentFloor;
                if (UnityEngine.MonoBehaviour.op_Inequality(floor, null)) {
                    floor.ClearOccupiedStack(stack);
                    stack.SetCurrentFloor(null);
                }
                this.pendingPlacementStacks.remove(stack);
                this.runtimePooledStacks.remove(stack);
                var fallbackPrefab = ((UnityEngine.MonoBehaviour.op_Inequality(this.runtimeSpawnTemplate, null)) ? this.runtimeSpawnTemplate : this.spawnStackPrefab);
                var poolService = this.PoolService;
                if (!(UnityEngine.MonoBehaviour.op_Inequality(poolService, null)) || !(UnityEngine.MonoBehaviour.op_Inequality(fallbackPrefab, null)) || !poolService.ReturnStack(stack, fallbackPrefab)) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(stack.gameObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(stack.gameObject);
                    }
                }
            },
            /*HexStacksCreator.DespawnStack end.*/

            /*HexStacksCreator.CollectSpawnFloors start.*/
            CollectSpawnFloors: function (floors, noSpawnCoords) {
if ( TRACE ) { TRACE( "HexStacksCreator#CollectSpawnFloors", this ); }

                var result = new (System.Collections.Generic.List$1(HexFloor)).ctor();
                for (var i = 0; i < System.Array.getCount(floors, HexFloor); i = (i + 1) | 0) {
                    var floor = System.Array.getItem(floors, i, HexFloor);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null)) && !noSpawnCoords.contains(HexStacksCreator.BuildCoordKey(floor.GridX, floor.GridZ)) && !(UnityEngine.MonoBehaviour.op_Inequality(floor.OccupiedStack, null))) {
                        result.add(floor);
                    }
                }
                return result;
            },
            /*HexStacksCreator.CollectSpawnFloors end.*/

            /*HexStacksCreator.SpawnConfiguredFloorStack start.*/
            SpawnConfiguredFloorStack: function (floor, prefab, topColorId, activePaletteColorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#SpawnConfiguredFloorStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(floor, null) || UnityEngine.MonoBehaviour.op_Equality(prefab, null) || activePaletteColorCount <= 0) {
                    return false;
                }
                var bottomColorId = this.ResolveBottomColorId(topColorId, activePaletteColorCount);
                var totalTileCount = 10;
                var colorIds = System.Array.init(totalTileCount, 0, System.Int32);
                for (var i = 0; i < 5 && i < totalTileCount; i = (i + 1) | 0) {
                    colorIds[i] = bottomColorId;
                }
                for (var j = 5; j < totalTileCount; j = (j + 1) | 0) {
                    colorIds[j] = topColorId;
                }
                var rotation = ((UnityEngine.Component.op_Inequality(floor.StackAnchor, null)) ? floor.StackAnchor.rotation.$clone() : floor.transform.rotation.$clone());
                var position = floor.GetStackPlacementPosition(prefab.transform.position.y);
                var stack = this.RentStack(prefab, position.$clone(), rotation.$clone(), floor.transform);
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return false;
                }
                this.ApplyContext(stack);
                stack.gameObject.SetActive(true);
                stack.transform.SetPositionAndRotation(position, rotation);
                stack.SetCurrentFloor(floor);
                floor.SetOccupiedStack(stack);
                stack.CreateStack(colorIds);
                this.runtimePooledStacks.add(stack);
                this.pendingPlacementStacks.remove(stack);
                return true;
            },
            /*HexStacksCreator.SpawnConfiguredFloorStack end.*/

            /*HexStacksCreator.ResolveBottomColorId start.*/
            ResolveBottomColorId: function (topColorId, paletteLength) {
if ( TRACE ) { TRACE( "HexStacksCreator#ResolveBottomColorId", this ); }

                if (paletteLength <= 1) {
                    return Math.max(0, Math.min(topColorId, UnityEngine.Mathf.Max(0, ((paletteLength - 1) | 0))));
                }
                var randomOffset = UnityEngine.Random.Range(1, paletteLength);
                return (((UnityEngine.Mathf.Max(0, topColorId) + randomOffset) | 0)) % paletteLength;
            },
            /*HexStacksCreator.ResolveBottomColorId end.*/

            /*HexStacksCreator.GetActivePaletteColorCount start.*/
            GetActivePaletteColorCount: function (palette) {
if ( TRACE ) { TRACE( "HexStacksCreator#GetActivePaletteColorCount", this ); }

                if (palette == null || palette.length === 0) {
                    return 0;
                }
                var hexConfig = this.HexConfig;
                var configuredCount = ((hexConfig != null) ? hexConfig.paletteColorCount : 0);
                if (configuredCount <= 0) {
                    return palette.length;
                }
                return Math.max(1, Math.min(configuredCount, palette.length));
            },
            /*HexStacksCreator.GetActivePaletteColorCount end.*/

            /*HexStacksCreator.TryBuildTopColorAssignment start.*/
            TryBuildTopColorAssignment: function (spawnFloors, colorCount, topColorByFloor) {
if ( TRACE ) { TRACE( "HexStacksCreator#TryBuildTopColorAssignment", this ); }

                topColorByFloor.v = new (System.Collections.Generic.Dictionary$2(HexFloor,System.Int32)).ctor();
                if (spawnFloors == null || spawnFloors.Count === 0) {
                    return true;
                }
                if (colorCount <= 0) {
                    return false;
                }
                var spawnSet = new (System.Collections.Generic.HashSet$1(HexFloor)).$ctor1(spawnFloors);
                return this.AssignTopColorsRecursive(spawnFloors, spawnSet, topColorByFloor.v, colorCount);
            },
            /*HexStacksCreator.TryBuildTopColorAssignment end.*/

            /*HexStacksCreator.AssignTopColorsRecursive start.*/
            AssignTopColorsRecursive: function (spawnFloors, spawnSet, assignedColors, colorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#AssignTopColorsRecursive", this ); }

                var $t;
                if (assignedColors.Count >= spawnFloors.Count) {
                    return true;
                }
                var selectedFloor = null;
                var selectedAvailableColors = null;
                var selectedNeighborCount = -1;
                for (var i = 0; i < spawnFloors.Count; i = (i + 1) | 0) {
                    var floor = spawnFloors.getItem(i);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null)) && !assignedColors.containsKey(floor)) {
                        var availableColors = this.GetAvailableTopColors(floor, spawnSet, assignedColors, colorCount);
                        if (availableColors.Count === 0) {
                            return false;
                        }
                        var neighborCount = HexStacksCreator.GetSpawnNeighborCount(floor, spawnSet);
                        if (UnityEngine.MonoBehaviour.op_Equality(selectedFloor, null) || availableColors.Count < selectedAvailableColors.Count || (availableColors.Count === selectedAvailableColors.Count && neighborCount > selectedNeighborCount)) {
                            selectedFloor = floor;
                            selectedAvailableColors = availableColors;
                            selectedNeighborCount = neighborCount;
                        }
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Equality(selectedFloor, null) || selectedAvailableColors == null || selectedAvailableColors.Count === 0) {
                    return false;
                }
                var startIndex = UnityEngine.Random.Range(0, selectedAvailableColors.Count);
                for (var j = 0; j < selectedAvailableColors.Count; j = (j + 1) | 0) {
                    var colorId = (($t = selectedAvailableColors.getItem((((startIndex + j) | 0)) % selectedAvailableColors.Count), assignedColors.setItem(selectedFloor, $t), $t));
                    if (this.AssignTopColorsRecursive(spawnFloors, spawnSet, assignedColors, colorCount)) {
                        return true;
                    }
                    assignedColors.remove(selectedFloor);
                }
                return false;
            },
            /*HexStacksCreator.AssignTopColorsRecursive end.*/

            /*HexStacksCreator.GetAvailableTopColors start.*/
            GetAvailableTopColors: function (floor, spawnSet, assignedColors, colorCount) {
if ( TRACE ) { TRACE( "HexStacksCreator#GetAvailableTopColors", this ); }

                var forbidden = System.Array.init(colorCount, false, System.Boolean);
                for (var side = 0; side < 6; side = (side + 1) | 0) {
                    var neighbor = floor.GetNeighborBySide(side);
                    var neighborColorId = { };
                    if (!(UnityEngine.MonoBehaviour.op_Equality(neighbor, null)) && spawnSet.contains(neighbor) && assignedColors.tryGetValue(neighbor, neighborColorId) && neighborColorId.v >= 0 && neighborColorId.v < colorCount) {
                        forbidden[neighborColorId.v] = true;
                    }
                }
                var available = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                for (var colorId = 0; colorId < colorCount; colorId = (colorId + 1) | 0) {
                    if (!forbidden[colorId]) {
                        available.add(colorId);
                    }
                }
                return available;
            },
            /*HexStacksCreator.GetAvailableTopColors end.*/

            /*HexStacksCreator.LogGeneratedFloorFill start.*/
            LogGeneratedFloorFill: function (message) {
if ( TRACE ) { TRACE( "HexStacksCreator#LogGeneratedFloorFill", this ); }

                if (this.logGeneratedFill) {
                    UnityEngine.Debug.Log$1("[HexStacksCreator] " + (message || ""), this);
                }
            },
            /*HexStacksCreator.LogGeneratedFloorFill end.*/

            /*HexStacksCreator.ApplyContext start.*/
            ApplyContext: function (stack) {
if ( TRACE ) { TRACE( "HexStacksCreator#ApplyContext", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null))) {
                    stack.SetGameContext(this.gameContext);
                }
            },
            /*HexStacksCreator.ApplyContext end.*/

            /*HexStacksCreator.MarkInitialPlayerStacksCompleted start.*/
            MarkInitialPlayerStacksCompleted: function () {
if ( TRACE ) { TRACE( "HexStacksCreator#MarkInitialPlayerStacksCompleted", this ); }

                if (!this.InitialPlayerStacksCompleted) {
                    this.InitialPlayerStacksCompleted = true;
                }
            },
            /*HexStacksCreator.MarkInitialPlayerStacksCompleted end.*/

            /*HexStacksCreator.LogStacksCreator start.*/
            LogStacksCreator: function (message) {
if ( TRACE ) { TRACE( "HexStacksCreator#LogStacksCreator", this ); }

                if (this.debugLogs) {
                    UnityEngine.Debug.Log$1("[HexStacksCreator] " + (message || ""), this);
                }
            },
            /*HexStacksCreator.LogStacksCreator end.*/


        }
    });
    /*HexStacksCreator end.*/

    /*HexTile start.*/
    Bridge.define("HexTile", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BaseColorId: 0,
                ColorId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexTile#init", this ); }

                    this.BaseColorId = UnityEngine.Shader.PropertyToID("_BaseColor");
                    this.ColorId = UnityEngine.Shader.PropertyToID("_Color");
                }
            }
        },
        fields: {
            myMeshRenderer: null,
            colorId: 0,
            currentColor: null,
            colorPropertyBlock: null
        },
        props: {
            ColorIdValue: {
                get: function () {
if ( TRACE ) { TRACE( "HexTile#ColorIdValue#get", this ); }

                    return this.colorId;
                }
            },
            HasColor: {
                get: function () {
if ( TRACE ) { TRACE( "HexTile#HasColor#get", this ); }

                    return this.colorId >= 0;
                }
            },
            CurrentColor: {
                get: function () {
if ( TRACE ) { TRACE( "HexTile#CurrentColor#get", this ); }

                    return this.currentColor.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexTile#init", this ); }

                this.currentColor = new UnityEngine.Color();
                this.colorId = -1;
                this.currentColor = new pc.Color( 1, 1, 1, 1 );
            }
        },
        methods: {
            /*HexTile.SetColor start.*/
            SetColor: function (id, color) {
if ( TRACE ) { TRACE( "HexTile#SetColor", this ); }

                this.colorId = id;
                this.currentColor = color.$clone();
                this.ApplyColor(color.$clone());
            },
            /*HexTile.SetColor end.*/

            /*HexTile.TryGetColor start.*/
            TryGetColor: function (color) {
if ( TRACE ) { TRACE( "HexTile#TryGetColor", this ); }

                if (!this.HasColor) {
                    color.v = new pc.Color( 1, 1, 1, 1 );
                    return false;
                }
                color.v = this.currentColor.$clone();
                return true;
            },
            /*HexTile.TryGetColor end.*/

            /*HexTile.ClearColor start.*/
            ClearColor: function () {
if ( TRACE ) { TRACE( "HexTile#ClearColor", this ); }

                this.colorId = -1;
            },
            /*HexTile.ClearColor end.*/

            /*HexTile.ApplyColor start.*/
            ApplyColor: function (color) {
if ( TRACE ) { TRACE( "HexTile#ApplyColor", this ); }

                if (!(UnityEngine.Component.op_Equality(this.myMeshRenderer, null))) {
                    if (this.colorPropertyBlock == null) {
                        this.colorPropertyBlock = new UnityEngine.MaterialPropertyBlock();
                    }
                    var sharedMaterial = this.myMeshRenderer.sharedMaterial;
                    this.myMeshRenderer.GetPropertyBlock(this.colorPropertyBlock);
                    if (sharedMaterial != null && sharedMaterial.HasProperty(HexTile.BaseColorId)) {
                        this.colorPropertyBlock.SetColor(HexTile.BaseColorId, color);
                    }
                    if (sharedMaterial != null && sharedMaterial.HasProperty(HexTile.ColorId)) {
                        this.colorPropertyBlock.SetColor(HexTile.ColorId, color);
                    }
                    this.myMeshRenderer.SetPropertyBlock(this.colorPropertyBlock);
                }
            },
            /*HexTile.ApplyColor end.*/


        }
    });
    /*HexTile end.*/

    /*HexTransferAnimator start.*/
    Bridge.define("HexTransferAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexTransferAnimator.GetStackName:static start.*/
                GetStackName: function (stack) {
if ( TRACE ) { TRACE( "HexTransferAnimator#GetStackName", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) ? stack.name : "<none>";
                },
                /*HexTransferAnimator.GetStackName:static end.*/


            }
        },
        fields: {
            logTransferAnimatorEvents: false,
            tileFlipDuration: 0,
            tileFlipEase: 0,
            tileSettleDuration: 0,
            tileSettleEase: 0,
            tileTransferFanStagger: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexTransferAnimator#init", this ); }

                this.logTransferAnimatorEvents = false;
                this.tileFlipDuration = 0.22;
                this.tileFlipEase = DG.Tweening.Ease.InOutSine;
                this.tileSettleDuration = 0.1;
                this.tileSettleEase = DG.Tweening.Ease.OutQuad;
                this.tileTransferFanStagger = 0.04;
            }
        },
        methods: {
            /*HexTransferAnimator.TransferTopTilesFan start.*/
            TransferTopTilesFan: function (sourceStack, sourceFloor, targetStack, targetFloor, transferCount, speedMultiplier, onComplete) {
if ( TRACE ) { TRACE( "HexTransferAnimator#TransferTopTilesFan", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(sourceStack, null) || UnityEngine.MonoBehaviour.op_Equality(targetStack, null) || transferCount <= 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                var safeSpeedMultiplier = UnityEngine.Mathf.Max(0.01, speedMultiplier);
                var flipDuration = this.tileFlipDuration / safeSpeedMultiplier;
                var settleDuration = this.tileSettleDuration / safeSpeedMultiplier;
                var fanStagger = UnityEngine.Mathf.Max(0.0, this.tileTransferFanStagger) / safeSpeedMultiplier;
                var targetStartIndex = targetStack.TileCount;
                var movingTiles = new (System.Collections.Generic.List$1(HexTile)).$ctor2(transferCount);
                for (var j = 0; j < transferCount; j = (j + 1) | 0) {
                    var tile2 = sourceStack.PopTopTile();
                    if (UnityEngine.MonoBehaviour.op_Equality(tile2, null)) {
                        break;
                    }
                    movingTiles.add(tile2);
                }
                if (movingTiles.Count === 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                var transferTweens = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).$ctor2(movingTiles.Count);
                for (var i = 0; i < movingTiles.Count; i = (i + 1) | 0) {
                    var tile = movingTiles.getItem(i);
                    if (!(UnityEngine.MonoBehaviour.op_Equality(tile, null))) {
                        var targetPosition = targetStack.GetWorldPositionForTileIndex(((targetStartIndex + i) | 0));
                        var delay = fanStagger * i;
                        var transferTween = this.CreateTileTransferTween(tile, sourceFloor, targetFloor, targetPosition.$clone(), delay, flipDuration, settleDuration);
                        if (transferTween != null) {
                            transferTweens.add(transferTween);
                        }
                    }
                }
                this.CompleteAfterTweens(transferTweens, function () {
                    for (var k = 0; k < movingTiles.Count; k = (k + 1) | 0) {
                        var hexTile = movingTiles.getItem(k);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(hexTile, null))) {
                            targetStack.PushTopTile(hexTile);
                        }
                    }
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                });
            },
            /*HexTransferAnimator.TransferTopTilesFan end.*/

            /*HexTransferAnimator.CreateTileTransferTween start.*/
            CreateTileTransferTween: function (tile, sourceFloor, targetFloor, targetPosition, startDelay, flipDuration, settleDuration) {
if ( TRACE ) { TRACE( "HexTransferAnimator#CreateTileTransferTween", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(tile, null)) {
                    return null;
                }
                var tileTransform = tile.transform;
                DG.Tweening.ShortcutExtensions.DOKill(tileTransform);
                tileTransform.SetParent(null, true);
                var up = ((UnityEngine.MonoBehaviour.op_Inequality(sourceFloor, null)) ? sourceFloor.transform.up.clone().normalize().$clone() : pc.Vec3.UP.clone());
                var direction = this.GetNeighborDirection(sourceFloor, targetFloor, up.$clone());
                var edgeAxis = new pc.Vec3().cross( up, direction ).clone().normalize().$clone();
                if (edgeAxis.lengthSq() < 0.0001) {
                    edgeAxis = new pc.Vec3().cross( up, new pc.Vec3( 0, 0, 1 ) ).clone().normalize().$clone();
                    if (edgeAxis.lengthSq() < 0.0001) {
                        edgeAxis = pc.Vec3.RIGHT.clone();
                    }
                }
                var sourceCenter = ((UnityEngine.MonoBehaviour.op_Inequality(sourceFloor, null)) ? sourceFloor.transform.position.$clone() : tileTransform.position.$clone());
                var targetCenter = ((UnityEngine.MonoBehaviour.op_Inequality(targetFloor, null)) ? targetFloor.transform.position.$clone() : targetPosition.$clone());
                var edgePoint = (sourceCenter.$clone().add( targetCenter )).clone().scale( 0.5 );
                var targetHeightAlongUp = targetPosition.$clone().sub( targetCenter ).dot( up );
                edgePoint = edgePoint.$clone().add( up.$clone().clone().scale( targetHeightAlongUp ) );
                var sequence = DG.Tweening.DOTween.Sequence();
                if (startDelay > 0.0) {
                    DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, startDelay);
                }
                var previousAngle = 0.0;
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(function () {
                    return 0.0;
                }, function (angle) {
                    var angle2 = angle - previousAngle;
                    previousAngle = angle;
                    tileTransform.RotateAround(edgePoint.$clone(), edgeAxis.$clone(), angle2);
                }, 180.0, flipDuration), this.tileFlipEase));
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(tileTransform, targetPosition.$clone(), settleDuration), this.tileSettleEase));
                return sequence;
            },
            /*HexTransferAnimator.CreateTileTransferTween end.*/

            /*HexTransferAnimator.CompleteAfterTweens start.*/
            CompleteAfterTweens: function (tweens, onComplete) {
if ( TRACE ) { TRACE( "HexTransferAnimator#CompleteAfterTweens", this ); }

                if (tweens == null || tweens.Count === 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }
                var remainingTweens = 0;
                var callbackInvoked = false;
                var reportTweenFinished = function () {
                    remainingTweens = (remainingTweens - 1) | 0;
                    if (remainingTweens <= 0 && !callbackInvoked) {
                        callbackInvoked = true;
                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    }
                };
                for (var i = 0; i < tweens.Count; i = (i + 1) | 0) {
                    var tween = tweens.getItem(i);
                    if (tween == null || !DG.Tweening.TweenExtensions.IsActive(tween) || DG.Tweening.TweenExtensions.IsComplete(tween)) {
                        continue;
                    }
                    var num = remainingTweens;
                    remainingTweens = (num + 1) | 0;
                    var isReported = { v : false };
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, tween, (function ($me, isReported) {
                        return function () {
                            if (!isReported.v) {
                                isReported.v = true;
                                reportTweenFinished();
                            }
                        };
                    })(this, isReported));
                    DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, tween, (function ($me, isReported) {
                        return function () {
                            if (!isReported.v) {
                                isReported.v = true;
                                reportTweenFinished();
                            }
                        };
                    })(this, isReported));
                }
                if (remainingTweens === 0 && !callbackInvoked) {
                    callbackInvoked = true;
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                }
            },
            /*HexTransferAnimator.CompleteAfterTweens end.*/

            /*HexTransferAnimator.GetNeighborDirection start.*/
            GetNeighborDirection: function (sourceFloor, targetFloor, up) {
if ( TRACE ) { TRACE( "HexTransferAnimator#GetNeighborDirection", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(sourceFloor, null) && UnityEngine.MonoBehaviour.op_Inequality(targetFloor, null)) {
                    var sideIndex = sourceFloor.GetSideIndexOfNeighbor(targetFloor);
                    if (sideIndex >= 0) {
                        return sourceFloor.GetSideDirection(sideIndex);
                    }
                    var betweenFloors = targetFloor.transform.position.$clone().sub( sourceFloor.transform.position );
                    var projectedDirection = pc.Vec3.projectOnPlane( betweenFloors, up );
                    if (projectedDirection.lengthSq() > 0.0001) {
                        return projectedDirection.clone().normalize().$clone();
                    }
                }
                return (UnityEngine.MonoBehaviour.op_Inequality(sourceFloor, null)) ? sourceFloor.transform.forward.$clone() : new pc.Vec3( 0, 0, 1 );
            },
            /*HexTransferAnimator.GetNeighborDirection end.*/

            /*HexTransferAnimator.LogTransferAnimator start.*/
            LogTransferAnimator: function (message) {
if ( TRACE ) { TRACE( "HexTransferAnimator#LogTransferAnimator", this ); }

                if (this.logTransferAnimatorEvents) {
                    UnityEngine.Debug.Log$1("[HexTransferAnimator] " + (message || ""), this);
                }
            },
            /*HexTransferAnimator.LogTransferAnimator end.*/


        }
    });
    /*HexTransferAnimator end.*/

    /*LunaBridge start.*/
    Bridge.define("LunaBridge", {
        statics: {
            methods: {
                /*LunaBridge.GameEnded:static start.*/
                GameEnded: function () {
if ( TRACE ) { TRACE( "LunaBridge#GameEnded", this ); }

                    Luna.Unity.LifeCycle.GameEnded();
                },
                /*LunaBridge.GameEnded:static end.*/

                /*LunaBridge.InstallFullGame:static start.*/
                InstallFullGame: function () {
if ( TRACE ) { TRACE( "LunaBridge#InstallFullGame", this ); }

                    Luna.Unity.Playable.InstallFullGame();
                },
                /*LunaBridge.InstallFullGame:static end.*/


            }
        }
    });
    /*LunaBridge end.*/

    /*PackshotController start.*/
    Bridge.define("PackshotController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            packshotRoot: null,
            packshotCanvasGroup: null,
            backgroundObject: null,
            logoObject: null,
            playNowButtonObject: null,
            hideOnStart: false,
            reactToAnyTap: false,
            fadeDuration: 0,
            fadeEase: 0,
            fadeTween: null,
            isShown: false
        },
        events: {
            PackshotShown: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PackshotController#init", this ); }

                this.hideOnStart = true;
                this.reactToAnyTap = true;
                this.fadeDuration = 0.35;
                this.fadeEase = DG.Tweening.Ease.OutQuad;
            }
        },
        methods: {
            /*PackshotController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PackshotController#Awake", this ); }

                if (this.hideOnStart) {
                    this.SetVisible(false, 0.0);
                }
            },
            /*PackshotController.Awake end.*/

            /*PackshotController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PackshotController#OnDisable", this ); }

                this.KillFadeTween();
            },
            /*PackshotController.OnDisable end.*/

            /*PackshotController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PackshotController#Update", this ); }

                if (this.isShown && this.reactToAnyTap && this.WasPointerPressedThisFrame()) {
                    LunaBridge.InstallFullGame();
                }
            },
            /*PackshotController.Update end.*/

            /*PackshotController.ShowPackshot start.*/
            ShowPackshot: function () {
if ( TRACE ) { TRACE( "PackshotController#ShowPackshot", this ); }

                if (!this.isShown) {
                    this.isShown = true;
                    this.SetStaticContentActive(true);
                    if (UnityEngine.GameObject.op_Inequality(this.packshotRoot, null)) {
                        this.packshotRoot.SetActive(true);
                    }
                    this.KillFadeTween();
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.packshotCanvasGroup, null)) {
                        this.packshotCanvasGroup.alpha = 0.0;
                        this.packshotCanvasGroup.interactable = true;
                        this.packshotCanvasGroup.blocksRaycasts = true;
                        this.fadeTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.packshotCanvasGroup, 1.0, this.fadeDuration), this.fadeEase);
                    }
                    !Bridge.staticEquals(this.PackshotShown, null) ? this.PackshotShown() : null;
                    LunaBridge.GameEnded();
                }
            },
            /*PackshotController.ShowPackshot end.*/

            /*PackshotController.HidePackshot start.*/
            HidePackshot: function () {
if ( TRACE ) { TRACE( "PackshotController#HidePackshot", this ); }

                this.isShown = false;
                this.KillFadeTween();
                this.SetVisible(false, 0.0);
            },
            /*PackshotController.HidePackshot end.*/

            /*PackshotController.OnPlayNowPressed start.*/
            OnPlayNowPressed: function () {
if ( TRACE ) { TRACE( "PackshotController#OnPlayNowPressed", this ); }

                LunaBridge.InstallFullGame();
            },
            /*PackshotController.OnPlayNowPressed end.*/

            /*PackshotController.SetVisible start.*/
            SetVisible: function (visible, alpha) {
if ( TRACE ) { TRACE( "PackshotController#SetVisible", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.packshotRoot, null)) {
                    this.packshotRoot.SetActive(visible);
                }
                this.SetStaticContentActive(visible);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.packshotCanvasGroup, null)) {
                    this.packshotCanvasGroup.alpha = alpha;
                    this.packshotCanvasGroup.interactable = visible;
                    this.packshotCanvasGroup.blocksRaycasts = visible;
                }
            },
            /*PackshotController.SetVisible end.*/

            /*PackshotController.SetStaticContentActive start.*/
            SetStaticContentActive: function (active) {
if ( TRACE ) { TRACE( "PackshotController#SetStaticContentActive", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.backgroundObject, null)) {
                    this.backgroundObject.SetActive(active);
                }
                if (UnityEngine.GameObject.op_Inequality(this.logoObject, null)) {
                    this.logoObject.SetActive(active);
                }
                if (UnityEngine.GameObject.op_Inequality(this.playNowButtonObject, null)) {
                    this.playNowButtonObject.SetActive(active);
                }
            },
            /*PackshotController.SetStaticContentActive end.*/

            /*PackshotController.KillFadeTween start.*/
            KillFadeTween: function () {
if ( TRACE ) { TRACE( "PackshotController#KillFadeTween", this ); }

                if (this.fadeTween != null) {
                    if (DG.Tweening.TweenExtensions.IsActive(this.fadeTween)) {
                        DG.Tweening.TweenExtensions.Kill(this.fadeTween);
                    }
                    this.fadeTween = null;
                }
            },
            /*PackshotController.KillFadeTween end.*/

            /*PackshotController.WasPointerPressedThisFrame start.*/
            WasPointerPressedThisFrame: function () {
if ( TRACE ) { TRACE( "PackshotController#WasPointerPressedThisFrame", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    return true;
                }
                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    if (UnityEngine.Input.GetTouch(i).phase === UnityEngine.TouchPhase.Began) {
                        return true;
                    }
                }
                return false;
            },
            /*PackshotController.WasPointerPressedThisFrame end.*/


        }
    });
    /*PackshotController end.*/

    /*PlayableUIRoot start.*/
    Bridge.define("PlayableUIRoot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gameContext: null,
            tutorialController: null,
            packshotController: null,
            countdownTimerPanel: null,
            subscribedManager: null
        },
        props: {
            TutorialController: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#TutorialController#get", this ); }

                    return this.tutorialController;
                }
            },
            PackshotController: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#PackshotController#get", this ); }

                    return this.packshotController;
                }
            },
            CountdownTimerPanel: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#CountdownTimerPanel#get", this ); }

                    return this.countdownTimerPanel;
                }
            }
        },
        methods: {
            /*PlayableUIRoot.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#OnEnable", this ); }

                this.SubscribeManagerEvents();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.countdownTimerPanel, null)) {
                    this.countdownTimerPanel.addCountdownFinished(Bridge.fn.cacheBind(this, this.HandleCountdownFinished));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.packshotController, null)) {
                    this.packshotController.addPackshotShown(Bridge.fn.cacheBind(this, this.HandlePackshotShown));
                }
            },
            /*PlayableUIRoot.OnEnable end.*/

            /*PlayableUIRoot.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#OnDisable", this ); }

                this.UnsubscribeManagerEvents();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.countdownTimerPanel, null)) {
                    this.countdownTimerPanel.removeCountdownFinished(Bridge.fn.cacheBind(this, this.HandleCountdownFinished));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.packshotController, null)) {
                    this.packshotController.removePackshotShown(Bridge.fn.cacheBind(this, this.HandlePackshotShown));
                }
            },
            /*PlayableUIRoot.OnDisable end.*/

            /*PlayableUIRoot.StartTutorial start.*/
            StartTutorial: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#StartTutorial", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.tutorialController, null) ? this.tutorialController.StartTutorial() : null;
            },
            /*PlayableUIRoot.StartTutorial end.*/

            /*PlayableUIRoot.StopTutorial start.*/
            StopTutorial: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#StopTutorial", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.tutorialController, null) ? this.tutorialController.StopTutorial() : null;
            },
            /*PlayableUIRoot.StopTutorial end.*/

            /*PlayableUIRoot.ShowPackshot start.*/
            ShowPackshot: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#ShowPackshot", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.packshotController, null) ? this.packshotController.ShowPackshot() : null;
            },
            /*PlayableUIRoot.ShowPackshot end.*/

            /*PlayableUIRoot.StartCountdownTimer start.*/
            StartCountdownTimer: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#StartCountdownTimer", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.countdownTimerPanel, null) && !this.countdownTimerPanel.gameObject.activeSelf) {
                    this.countdownTimerPanel.gameObject.SetActive(true);
                }
                if (!(UnityEngine.MonoBehaviour.op_Equality(this.countdownTimerPanel, null))) {
                    var configuredDuration = { };
                    if (this.TryGetConfiguredGameDuration(configuredDuration)) {
                        this.countdownTimerPanel.RestartCountdown(configuredDuration.v);
                    } else {
                        this.countdownTimerPanel.StartCountdown();
                    }
                }
            },
            /*PlayableUIRoot.StartCountdownTimer end.*/

            /*PlayableUIRoot.StopCountdownTimer start.*/
            StopCountdownTimer: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#StopCountdownTimer", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.countdownTimerPanel, null) ? this.countdownTimerPanel.StopCountdown() : null;
            },
            /*PlayableUIRoot.StopCountdownTimer end.*/

            /*PlayableUIRoot.HandleCountdownFinished start.*/
            HandleCountdownFinished: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#HandleCountdownFinished", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.packshotController, null) ? this.packshotController.ShowPackshot() : null;
            },
            /*PlayableUIRoot.HandleCountdownFinished end.*/

            /*PlayableUIRoot.HandlePackshotShown start.*/
            HandlePackshotShown: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#HandlePackshotShown", this ); }

                UnityEngine.MonoBehaviour.op_Inequality(this.tutorialController, null) ? this.tutorialController.DisableTutorialPermanently() : null;
                HexDragger.SetGlobalDragEnabled(false);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.countdownTimerPanel, null)) {
                    this.countdownTimerPanel.StopCountdown();
                    this.countdownTimerPanel.gameObject.SetActive(false);
                }
            },
            /*PlayableUIRoot.HandlePackshotShown end.*/

            /*PlayableUIRoot.HandleFirstTransferAndClearChainFinished start.*/
            HandleFirstTransferAndClearChainFinished: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#HandleFirstTransferAndClearChainFinished", this ); }

                if (this.IsEndGameAfterFirstChainEnabled()) {
                    UnityEngine.MonoBehaviour.op_Inequality(this.packshotController, null) ? this.packshotController.ShowPackshot() : null;
                }
            },
            /*PlayableUIRoot.HandleFirstTransferAndClearChainFinished end.*/

            /*PlayableUIRoot.SubscribeManagerEvents start.*/
            SubscribeManagerEvents: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#SubscribeManagerEvents", this ); }

                var manager = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Manager : null);
                if (!(UnityEngine.MonoBehaviour.op_Equality(manager, null)) && !(UnityEngine.MonoBehaviour.op_Equality(this.subscribedManager, manager))) {
                    this.UnsubscribeManagerEvents();
                    this.subscribedManager = manager;
                    this.subscribedManager.addFirstTransferAndClearChainFinished(Bridge.fn.cacheBind(this, this.HandleFirstTransferAndClearChainFinished));
                }
            },
            /*PlayableUIRoot.SubscribeManagerEvents end.*/

            /*PlayableUIRoot.UnsubscribeManagerEvents start.*/
            UnsubscribeManagerEvents: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#UnsubscribeManagerEvents", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this.subscribedManager, null))) {
                    this.subscribedManager.removeFirstTransferAndClearChainFinished(Bridge.fn.cacheBind(this, this.HandleFirstTransferAndClearChainFinished));
                    this.subscribedManager = null;
                }
            },
            /*PlayableUIRoot.UnsubscribeManagerEvents end.*/

            /*PlayableUIRoot.TryGetConfiguredGameDuration start.*/
            TryGetConfiguredGameDuration: function (durationSeconds) {
if ( TRACE ) { TRACE( "PlayableUIRoot#TryGetConfiguredGameDuration", this ); }

                durationSeconds.v = 0.0;
                var config = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null);
                if (config == null) {
                    return false;
                }
                durationSeconds.v = UnityEngine.Mathf.Max(0.1, config.gameDurationSeconds);
                return true;
            },
            /*PlayableUIRoot.TryGetConfiguredGameDuration end.*/

            /*PlayableUIRoot.IsEndGameAfterFirstChainEnabled start.*/
            IsEndGameAfterFirstChainEnabled: function () {
if ( TRACE ) { TRACE( "PlayableUIRoot#IsEndGameAfterFirstChainEnabled", this ); }

                var config = ((UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null)) ? this.gameContext.Config : null);
                return config != null && config.endGameAfterFirstTransferAndClearChain;
            },
            /*PlayableUIRoot.IsEndGameAfterFirstChainEnabled end.*/


        }
    });
    /*PlayableUIRoot end.*/

    /*TutorialOverlayController start.*/
    Bridge.define("TutorialOverlayController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*TutorialOverlayController.SelectBestTargetFloor:static start.*/
                SelectBestTargetFloor: function (sourceStack, candidateFloors) {
if ( TRACE ) { TRACE( "TutorialOverlayController#SelectBestTargetFloor", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(sourceStack, null) || candidateFloors == null || candidateFloors.Count === 0) {
                        return null;
                    }
                    var bestFloor = null;
                    var bestDistanceSqr = 3.40282347E+38;
                    var sourcePosition = sourceStack.transform.position.$clone();
                    for (var i = 0; i < candidateFloors.Count; i = (i + 1) | 0) {
                        var floor = candidateFloors.getItem(i);
                        if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null))) {
                            var distanceSqr = (sourcePosition.$clone().sub( floor.transform.position )).lengthSq();
                            if (!(distanceSqr >= bestDistanceSqr)) {
                                bestDistanceSqr = distanceSqr;
                                bestFloor = floor;
                            }
                        }
                    }
                    return bestFloor;
                },
                /*TutorialOverlayController.SelectBestTargetFloor:static end.*/

                /*TutorialOverlayController.IsMatchingNeighborStack:static start.*/
                IsMatchingNeighborStack: function (floor, colorId) {
if ( TRACE ) { TRACE( "TutorialOverlayController#IsMatchingNeighborStack", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(floor, null)) {
                        return false;
                    }
                    var neighborStack = floor.OccupiedStack;
                    if (UnityEngine.MonoBehaviour.op_Equality(neighborStack, null) || neighborStack.TileCount === 0) {
                        return false;
                    }
                    return neighborStack.GetTopColorId() === colorId;
                },
                /*TutorialOverlayController.IsMatchingNeighborStack:static end.*/

                /*TutorialOverlayController.GetStackName:static start.*/
                GetStackName: function (stack) {
if ( TRACE ) { TRACE( "TutorialOverlayController#GetStackName", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) ? stack.name : "null";
                },
                /*TutorialOverlayController.GetStackName:static end.*/

                /*TutorialOverlayController.GetFloorName:static start.*/
                GetFloorName: function (floor) {
if ( TRACE ) { TRACE( "TutorialOverlayController#GetFloorName", this ); }

                    return (UnityEngine.MonoBehaviour.op_Inequality(floor, null)) ? floor.name : "null";
                },
                /*TutorialOverlayController.GetFloorName:static end.*/


            }
        },
        fields: {
            tutorialRoot: null,
            handTransform: null,
            canvasRoot: null,
            uiCamera: null,
            worldCamera: null,
            gameContext: null,
            fromAnchor: null,
            toAnchor: null,
            startOnEnable: false,
            restartDelay: 0,
            useDynamicWorldTargets: false,
            handScreenOffset: null,
            worldTargetHeightOffset: 0,
            fallbackScanInterval: 0,
            debugLogs: false,
            handMoveDuration: 0,
            handPauseDuration: 0,
            handMoveEase: 0,
            isCompleted: false,
            isPermanentlyDisabled: false,
            restartRoutine: null,
            handTween: null,
            cachedManager: null,
            hasStarted: false,
            tutorialStacksBuffer: null,
            candidateChainFloorsBuffer: null,
            candidateFreeFloorsBuffer: null,
            nextBootstrapStateLogAt: 0,
            nextStackFallbackScanAt: 0,
            nextFloorFallbackScanAt: 0,
            cachedFallbackWorldCamera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#init", this ); }

                this.handScreenOffset = new UnityEngine.Vector2();
                this.startOnEnable = false;
                this.restartDelay = 2.0;
                this.useDynamicWorldTargets = true;
                this.handScreenOffset = pc.Vec2.ZERO.clone();
                this.worldTargetHeightOffset = 0.2;
                this.fallbackScanInterval = 0.35;
                this.debugLogs = false;
                this.handMoveDuration = 0.8;
                this.handPauseDuration = 0.15;
                this.handMoveEase = DG.Tweening.Ease.InOutSine;
                this.tutorialStacksBuffer = new (System.Collections.Generic.List$1(HexStack)).ctor();
                this.candidateChainFloorsBuffer = new (System.Collections.Generic.List$1(HexFloor)).ctor();
                this.candidateFreeFloorsBuffer = new (System.Collections.Generic.List$1(HexFloor)).ctor();
            }
        },
        methods: {
            /*TutorialOverlayController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#OnEnable", this ); }

                HexDragger.addDragStarted(Bridge.fn.cacheBind(this, this.HandleDragStarted));
                HexDragger.addDragFinished(Bridge.fn.cacheBind(this, this.HandleDragFinished));
                if (this.hasStarted && this.startOnEnable && !this.isCompleted) {
                    this.StartTutorial();
                } else {
                    this.SetTutorialVisible(false);
                }
            },
            /*TutorialOverlayController.OnEnable end.*/

            /*TutorialOverlayController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#Start", this ); }

                this.StartCoroutine$1(this.StartTutorialAfterBootstrap());
            },
            /*TutorialOverlayController.Start end.*/

            /*TutorialOverlayController.StartTutorialAfterBootstrap start.*/
            StartTutorialAfterBootstrap: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#StartTutorialAfterBootstrap", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    readinessDetails,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.hasStarted = true;
                                        if (!this.startOnEnable || this.isCompleted) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.nextBootstrapStateLogAt = UnityEngine.Time.unscaledTime;
                                        readinessDetails = { };
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( !this.AreInitialGenerationSystemsReady$1(readinessDetails) ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.Time.unscaledTime >= this.nextBootstrapStateLogAt) {
                                            this.nextBootstrapStateLogAt = UnityEngine.Time.unscaledTime + 0.5;
                                        }
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    if (!this.isCompleted && !this.isPermanentlyDisabled && this.isActiveAndEnabled) {
                                            this.StartTutorial();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialOverlayController.StartTutorialAfterBootstrap end.*/

            /*TutorialOverlayController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#OnDisable", this ); }

                HexDragger.removeDragStarted(Bridge.fn.cacheBind(this, this.HandleDragStarted));
                HexDragger.removeDragFinished(Bridge.fn.cacheBind(this, this.HandleDragFinished));
                this.StopRestartRoutine();
                this.KillHandTween();
            },
            /*TutorialOverlayController.OnDisable end.*/

            /*TutorialOverlayController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#Update", this ); }

                if (!this.isCompleted && !this.isPermanentlyDisabled && !HexDragger.IsGlobalDragEnabled) {
                    this.DisableTutorialPermanently();
                }
            },
            /*TutorialOverlayController.Update end.*/

            /*TutorialOverlayController.StartTutorial start.*/
            StartTutorial: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#StartTutorial", this ); }

                if (!this.isCompleted && !this.isPermanentlyDisabled) {
                    this.StopRestartRoutine();
                    this.SetTutorialVisible(false);
                    this.PlayHandLoop();
                }
            },
            /*TutorialOverlayController.StartTutorial end.*/

            /*TutorialOverlayController.StopTutorial start.*/
            StopTutorial: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#StopTutorial", this ); }

                this.StopRestartRoutine();
                this.SetTutorialVisible(false);
                this.KillHandTween();
            },
            /*TutorialOverlayController.StopTutorial end.*/

            /*TutorialOverlayController.ResetTutorialState start.*/
            ResetTutorialState: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#ResetTutorialState", this ); }

                if (!this.isPermanentlyDisabled) {
                    this.isCompleted = false;
                    if (this.startOnEnable) {
                        this.StartTutorial();
                    }
                }
            },
            /*TutorialOverlayController.ResetTutorialState end.*/

            /*TutorialOverlayController.DisableTutorialPermanently start.*/
            DisableTutorialPermanently: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#DisableTutorialPermanently", this ); }

                this.isPermanentlyDisabled = true;
                this.isCompleted = true;
                this.StopTutorial();
            },
            /*TutorialOverlayController.DisableTutorialPermanently end.*/

            /*TutorialOverlayController.HandleDragStarted start.*/
            HandleDragStarted: function (draggedStack) {
if ( TRACE ) { TRACE( "TutorialOverlayController#HandleDragStarted", this ); }

                if (!this.isCompleted) {
                    this.StopRestartRoutine();
                    this.SetTutorialVisible(false);
                    this.KillHandTween();
                }
            },
            /*TutorialOverlayController.HandleDragStarted end.*/

            /*TutorialOverlayController.HandleDragFinished start.*/
            HandleDragFinished: function (draggedStack, successfulDrop) {
if ( TRACE ) { TRACE( "TutorialOverlayController#HandleDragFinished", this ); }

                if (!this.isCompleted) {
                    if (successfulDrop) {
                        this.isCompleted = true;
                        this.StopTutorial();
                    } else {
                        this.StopRestartRoutine();
                        this.restartRoutine = this.StartCoroutine$1(this.RestartTutorialAfterDelayRoutine());
                    }
                }
            },
            /*TutorialOverlayController.HandleDragFinished end.*/

            /*TutorialOverlayController.RestartTutorialAfterDelayRoutine start.*/
            RestartTutorialAfterDelayRoutine: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#RestartTutorialAfterDelayRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.restartDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.restartRoutine = null;
                                        if (!this.isCompleted && !this.isPermanentlyDisabled) {
                                            this.StartTutorial();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialOverlayController.RestartTutorialAfterDelayRoutine end.*/

            /*TutorialOverlayController.PlayHandLoop start.*/
            PlayHandLoop: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#PlayHandLoop", this ); }

                this.KillHandTween();
                var fromPosition = { v : new UnityEngine.Vector3() };
                var toPosition = { v : new UnityEngine.Vector3() };
                if (!this.TryResolveHandTargets(fromPosition, toPosition)) {
                    this.SetTutorialVisible(false);
                    if (this.restartRoutine == null) {
                        this.restartRoutine = this.StartCoroutine$1(this.RestartTutorialAfterDelayRoutine());
                    }
                    return;
                }
                this.handTransform.position = fromPosition.v.$clone();
                this.SetTutorialVisible(true);
                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.handTransform, toPosition.v.$clone(), this.handMoveDuration), this.handMoveEase));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, this.handPauseDuration);
                DG.Tweening.TweenSettingsExtensions.AppendCallback(sequence, Bridge.fn.bind(this, function () {
                    this.handTransform.position = fromPosition.v.$clone();
                }));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, this.handPauseDuration);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.bind(this, function () {
                    this.handTween = null;
                    if (!this.isCompleted && UnityEngine.GameObject.op_Inequality(this.tutorialRoot, null) && this.tutorialRoot.activeInHierarchy) {
                        this.PlayHandLoop();
                    }
                }));
                this.handTween = sequence;
            },
            /*TutorialOverlayController.PlayHandLoop end.*/

            /*TutorialOverlayController.TryResolveHandTargets start.*/
            TryResolveHandTargets: function (fromPosition, toPosition) {
if ( TRACE ) { TRACE( "TutorialOverlayController#TryResolveHandTargets", this ); }

                fromPosition.v = pc.Vec3.ZERO.clone();
                toPosition.v = pc.Vec3.ZERO.clone();
                if (UnityEngine.Component.op_Equality(this.handTransform, null)) {
                    return false;
                }
                if (this.useDynamicWorldTargets) {
                    return this.TryResolveDynamicHandTargets(fromPosition, toPosition);
                }
                if (UnityEngine.Component.op_Equality(this.fromAnchor, null) || UnityEngine.Component.op_Equality(this.toAnchor, null)) {
                    return false;
                }
                fromPosition.v = this.fromAnchor.position.$clone();
                toPosition.v = this.toAnchor.position.$clone();
                return true;
            },
            /*TutorialOverlayController.TryResolveHandTargets end.*/

            /*TutorialOverlayController.TryResolveDynamicHandTargets start.*/
            TryResolveDynamicHandTargets: function (fromPosition, toPosition) {
if ( TRACE ) { TRACE( "TutorialOverlayController#TryResolveDynamicHandTargets", this ); }

                fromPosition.v = pc.Vec3.ZERO.clone();
                toPosition.v = pc.Vec3.ZERO.clone();
                var sourceStack = { };
                var targetFloor = { };
                if (!this.TryFindTutorialMovePair(sourceStack, targetFloor)) {
                    return false;
                }
                var sourceWorldPoint = sourceStack.v.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this.worldTargetHeightOffset ) );
                var targetWorldPoint = targetFloor.v.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this.worldTargetHeightOffset ) );
                if (!this.TryConvertWorldToUiPosition(sourceWorldPoint.$clone(), fromPosition)) {
                    return false;
                }
                if (!this.TryConvertWorldToUiPosition(targetWorldPoint.$clone(), toPosition)) {
                    return false;
                }
                return true;
            },
            /*TutorialOverlayController.TryResolveDynamicHandTargets end.*/

            /*TutorialOverlayController.TryFindTutorialMovePair start.*/
            TryFindTutorialMovePair: function (sourceStack, targetFloor) {
if ( TRACE ) { TRACE( "TutorialOverlayController#TryFindTutorialMovePair", this ); }

                var $t, $t1, $t2, $t3;
                sourceStack.v = null;
                targetFloor.v = null;
                var manager = this.ResolveManager();
                this.tutorialStacksBuffer.clear();
                this.candidateChainFloorsBuffer.clear();
                this.candidateFreeFloorsBuffer.clear();
                $t = Bridge.getEnumerator(HexStack.ActiveStacks, HexStack);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(stack, null)) && stack.gameObject.activeInHierarchy && stack.TileCount !== 0 && !(UnityEngine.MonoBehaviour.op_Inequality(stack.CurrentFloor, null))) {
                            this.tutorialStacksBuffer.add(stack);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (this.tutorialStacksBuffer.Count === 0 && UnityEngine.Time.unscaledTime >= this.nextStackFallbackScanAt) {
                    this.nextStackFallbackScanAt = UnityEngine.Time.unscaledTime + UnityEngine.Mathf.Max(0.05, this.fallbackScanInterval);
                    var allStacks = UnityEngine.Object.FindObjectsOfType(HexStack);
                    $t1 = Bridge.getEnumerator(allStacks);
                    try {
                        while ($t1.moveNext()) {
                            var stack2 = $t1.Current;
                            if (!(UnityEngine.MonoBehaviour.op_Equality(stack2, null)) && stack2.gameObject.activeInHierarchy && stack2.TileCount !== 0 && !(UnityEngine.MonoBehaviour.op_Inequality(stack2.CurrentFloor, null))) {
                                this.tutorialStacksBuffer.add(stack2);
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                    if (this.tutorialStacksBuffer.Count <= 0) {
                    }
                }
                if (this.tutorialStacksBuffer.Count === 0) {
                    return false;
                }
                sourceStack.v = this.SelectBottomMostPlayerStack(this.tutorialStacksBuffer);
                if (UnityEngine.MonoBehaviour.op_Equality(sourceStack.v, null)) {
                    return false;
                }
                var sourceTopColorId = sourceStack.v.GetTopColorId();
                $t2 = Bridge.getEnumerator(HexFloor.ActiveFloors, HexFloor);
                try {
                    while ($t2.moveNext()) {
                        var floor2 = $t2.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(floor2, null)) && ((UnityEngine.MonoBehaviour.op_Inequality(manager, null)) ? manager.CanPlaceStackOnFloor(sourceStack.v, floor2) : (UnityEngine.MonoBehaviour.op_Equality(floor2.OccupiedStack, null)))) {
                            this.candidateFreeFloorsBuffer.add(floor2);
                            if (sourceTopColorId >= 0 && this.HasNeighborWithTopColor(floor2, sourceTopColorId)) {
                                this.candidateChainFloorsBuffer.add(floor2);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
                if (this.candidateFreeFloorsBuffer.Count === 0 && UnityEngine.Time.unscaledTime >= this.nextFloorFallbackScanAt) {
                    this.nextFloorFallbackScanAt = UnityEngine.Time.unscaledTime + UnityEngine.Mathf.Max(0.05, this.fallbackScanInterval);
                    var allFloors = UnityEngine.Object.FindObjectsOfType(HexFloor);
                    $t3 = Bridge.getEnumerator(allFloors);
                    try {
                        while ($t3.moveNext()) {
                            var floor = $t3.Current;
                            if (!(UnityEngine.MonoBehaviour.op_Equality(floor, null)) && floor.gameObject.activeInHierarchy && ((UnityEngine.MonoBehaviour.op_Inequality(manager, null)) ? manager.CanPlaceStackOnFloor(sourceStack.v, floor) : (UnityEngine.MonoBehaviour.op_Equality(floor.OccupiedStack, null)))) {
                                if (!this.candidateFreeFloorsBuffer.contains(floor)) {
                                    this.candidateFreeFloorsBuffer.add(floor);
                                }
                                if (sourceTopColorId >= 0 && this.HasNeighborWithTopColor(floor, sourceTopColorId) && !this.candidateChainFloorsBuffer.contains(floor)) {
                                    this.candidateChainFloorsBuffer.add(floor);
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t3, System.IDisposable)) {
                            $t3.System$IDisposable$Dispose();
                        }
                    }
                    if (this.candidateFreeFloorsBuffer.Count <= 0) {
                    }
                }
                if (this.candidateChainFloorsBuffer.Count > 0) {
                    targetFloor.v = TutorialOverlayController.SelectBestTargetFloor(sourceStack.v, this.candidateChainFloorsBuffer);
                    return UnityEngine.MonoBehaviour.op_Inequality(targetFloor.v, null);
                }
                if (this.candidateFreeFloorsBuffer.Count === 0) {
                    return false;
                }
                targetFloor.v = TutorialOverlayController.SelectBestTargetFloor(sourceStack.v, this.candidateFreeFloorsBuffer);
                return UnityEngine.MonoBehaviour.op_Inequality(targetFloor.v, null);
            },
            /*TutorialOverlayController.TryFindTutorialMovePair end.*/

            /*TutorialOverlayController.SelectBottomMostPlayerStack start.*/
            SelectBottomMostPlayerStack: function (stacks) {
if ( TRACE ) { TRACE( "TutorialOverlayController#SelectBottomMostPlayerStack", this ); }

                if (stacks == null || stacks.Count === 0) {
                    return null;
                }
                var gameplayCamera = this.ResolveWorldCamera();
                var bestStack = null;
                var bestScreenY = 3.40282347E+38;
                var bestCenterOffset = 3.40282347E+38;
                var screenCenterX = UnityEngine.Screen.width * 0.5;
                var foundVisibleStack = false;
                for (var i = 0; i < stacks.Count; i = (i + 1) | 0) {
                    var stack = stacks.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                        continue;
                    }
                    var screenPoint = ((UnityEngine.Component.op_Inequality(gameplayCamera, null)) ? gameplayCamera.WorldToScreenPoint(stack.transform.position) : new pc.Vec3( stack.transform.position.x, stack.transform.position.y, 1.0 ));
                    if (UnityEngine.Component.op_Inequality(gameplayCamera, null) && screenPoint.z < 0.0) {
                        continue;
                    }
                    var isVisibleOnScreen = screenPoint.x >= 0.0 && screenPoint.x <= UnityEngine.Screen.width && screenPoint.y >= 0.0 && screenPoint.y <= UnityEngine.Screen.height;
                    if (!foundVisibleStack || isVisibleOnScreen) {
                        if (!foundVisibleStack && isVisibleOnScreen) {
                            foundVisibleStack = true;
                            bestStack = null;
                            bestScreenY = 3.40282347E+38;
                            bestCenterOffset = 3.40282347E+38;
                        }
                        var stackScreenY = screenPoint.y;
                        var centerOffset = Math.abs(screenPoint.x - screenCenterX);
                        if (UnityEngine.MonoBehaviour.op_Equality(bestStack, null) || stackScreenY < bestScreenY || (UnityEngine.Mathf.Approximately(stackScreenY, bestScreenY) && centerOffset < bestCenterOffset)) {
                            bestStack = stack;
                            bestScreenY = stackScreenY;
                            bestCenterOffset = centerOffset;
                        }
                    }
                }
                return bestStack;
            },
            /*TutorialOverlayController.SelectBottomMostPlayerStack end.*/

            /*TutorialOverlayController.HasNeighborWithTopColor start.*/
            HasNeighborWithTopColor: function (centerFloor, colorId) {
if ( TRACE ) { TRACE( "TutorialOverlayController#HasNeighborWithTopColor", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(centerFloor, null) || colorId < 0) {
                    return false;
                }
                for (var side = 0; side < 6; side = (side + 1) | 0) {
                    var neighborFloor = centerFloor.GetNeighborBySide(side);
                    if (TutorialOverlayController.IsMatchingNeighborStack(neighborFloor, colorId)) {
                        return true;
                    }
                }
                var nearFloors = centerFloor.NearFloors;
                for (var i = 0; i < System.Array.getCount(nearFloors, HexFloor); i = (i + 1) | 0) {
                    if (TutorialOverlayController.IsMatchingNeighborStack(System.Array.getItem(nearFloors, i, HexFloor), colorId)) {
                        return true;
                    }
                }
                return false;
            },
            /*TutorialOverlayController.HasNeighborWithTopColor end.*/

            /*TutorialOverlayController.ResolveManager start.*/
            ResolveManager: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#ResolveManager", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.cachedManager, null)) {
                    return this.cachedManager;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null)) {
                    this.gameContext = UnityEngine.Object.FindObjectOfType(HexGameContext);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.gameContext, null) && UnityEngine.MonoBehaviour.op_Inequality(this.gameContext.Manager, null)) {
                    this.cachedManager = this.gameContext.Manager;
                    return this.cachedManager;
                }
                this.cachedManager = UnityEngine.Object.FindObjectOfType(HexManager);
                if (UnityEngine.MonoBehaviour.op_Equality(this.cachedManager, null)) {
                }
                return this.cachedManager;
            },
            /*TutorialOverlayController.ResolveManager end.*/

            /*TutorialOverlayController.ResolveWorldCamera start.*/
            ResolveWorldCamera: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#ResolveWorldCamera", this ); }

                if (UnityEngine.Component.op_Inequality(this.worldCamera, null)) {
                    return this.worldCamera;
                }
                if (UnityEngine.Component.op_Inequality(this.cachedFallbackWorldCamera, null)) {
                    return this.cachedFallbackWorldCamera;
                }
                var mainCamera = UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Inequality(mainCamera, null)) {
                    this.cachedFallbackWorldCamera = mainCamera;
                    return mainCamera;
                }
                var anyCamera = UnityEngine.Object.FindObjectOfType(UnityEngine.Camera);
                if (!(UnityEngine.Component.op_Equality(anyCamera, null))) {
                    this.cachedFallbackWorldCamera = anyCamera;
                }
                return anyCamera;
            },
            /*TutorialOverlayController.ResolveWorldCamera end.*/

            /*TutorialOverlayController.TryConvertWorldToUiPosition start.*/
            TryConvertWorldToUiPosition: function (worldPosition, uiPosition) {
if ( TRACE ) { TRACE( "TutorialOverlayController#TryConvertWorldToUiPosition", this ); }

                uiPosition.v = pc.Vec3.ZERO.clone();
                var gameplayCamera = this.ResolveWorldCamera();
                if (UnityEngine.Component.op_Equality(gameplayCamera, null)) {
                    return false;
                }
                var screenPoint = gameplayCamera.WorldToScreenPoint(worldPosition);
                if (screenPoint.z < 0.0) {
                    return false;
                }
                var screenPoint2D = UnityEngine.Vector2.FromVector3(screenPoint).add( this.handScreenOffset );
                if (UnityEngine.Component.op_Inequality(this.canvasRoot, null)) {
                    if (!UnityEngine.RectTransformUtility.ScreenPointToWorldPointInRectangle(this.canvasRoot, screenPoint2D, this.uiCamera, uiPosition)) {
                        return false;
                    }
                    return true;
                }
                uiPosition.v = new pc.Vec3( screenPoint2D.x, screenPoint2D.y, this.handTransform.position.z );
                return true;
            },
            /*TutorialOverlayController.TryConvertWorldToUiPosition end.*/

            /*TutorialOverlayController.KillHandTween start.*/
            KillHandTween: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#KillHandTween", this ); }

                if (this.handTween != null) {
                    if (DG.Tweening.TweenExtensions.IsActive(this.handTween)) {
                        DG.Tweening.TweenExtensions.Kill(this.handTween);
                    }
                    this.handTween = null;
                }
            },
            /*TutorialOverlayController.KillHandTween end.*/

            /*TutorialOverlayController.StopRestartRoutine start.*/
            StopRestartRoutine: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#StopRestartRoutine", this ); }

                if (this.restartRoutine != null) {
                    this.StopCoroutine$2(this.restartRoutine);
                    this.restartRoutine = null;
                }
            },
            /*TutorialOverlayController.StopRestartRoutine end.*/

            /*TutorialOverlayController.SetTutorialVisible start.*/
            SetTutorialVisible: function (visible) {
if ( TRACE ) { TRACE( "TutorialOverlayController#SetTutorialVisible", this ); }

                if (!(UnityEngine.GameObject.op_Equality(this.tutorialRoot, null)) && this.tutorialRoot.activeSelf !== visible) {
                    this.tutorialRoot.SetActive(visible);
                }
            },
            /*TutorialOverlayController.SetTutorialVisible end.*/

            /*TutorialOverlayController.AreInitialGenerationSystemsReady$1 start.*/
            AreInitialGenerationSystemsReady$1: function (details) {
if ( TRACE ) { TRACE( "TutorialOverlayController#AreInitialGenerationSystemsReady$1", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null)) {
                    this.gameContext = UnityEngine.Object.FindObjectOfType(HexGameContext);
                    if (UnityEngine.MonoBehaviour.op_Equality(this.gameContext, null)) {
                        details.v = "HexGameContext not found (treated as ready).";
                        return true;
                    }
                }
                var floorCreator = this.gameContext.FloorCreator;
                var floorReady = UnityEngine.MonoBehaviour.op_Equality(floorCreator, null) || floorCreator.InitialGenerationCompleted;
                if (UnityEngine.MonoBehaviour.op_Inequality(floorCreator, null) && !floorCreator.InitialGenerationCompleted) {
                    details.v = System.String.format("floorReady={0}, stacksReady=unknown", [Bridge.box(floorReady, System.Boolean, System.Boolean.toString)]);
                    return false;
                }
                var stacksCreator = this.gameContext.StacksCreator;
                var stacksReady = UnityEngine.MonoBehaviour.op_Equality(stacksCreator, null) || stacksCreator.InitialPlayerStacksCompleted;
                details.v = System.String.format("floorReady={0}, stacksReady={1}", Bridge.box(floorReady, System.Boolean, System.Boolean.toString), Bridge.box(stacksReady, System.Boolean, System.Boolean.toString));
                return stacksReady;
            },
            /*TutorialOverlayController.AreInitialGenerationSystemsReady$1 end.*/

            /*TutorialOverlayController.AreInitialGenerationSystemsReady start.*/
            AreInitialGenerationSystemsReady: function () {
if ( TRACE ) { TRACE( "TutorialOverlayController#AreInitialGenerationSystemsReady", this ); }

                var details = { };
                return this.AreInitialGenerationSystemsReady$1(details);
            },
            /*TutorialOverlayController.AreInitialGenerationSystemsReady end.*/

            /*TutorialOverlayController.LogTutorial start.*/
            LogTutorial: function (message) {
if ( TRACE ) { TRACE( "TutorialOverlayController#LogTutorial", this ); }

                if (this.debugLogs) {
                    UnityEngine.Debug.Log$1("[Tutorial] " + (message || ""), this);
                }
            },
            /*TutorialOverlayController.LogTutorial end.*/


        },
        overloads: {
            "AreInitialGenerationSystemsReady(string)": "AreInitialGenerationSystemsReady$1"
        }
    });
    /*TutorialOverlayController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine","DG.Tweening","System.Collections","System.Collections.Generic","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*CountdownTimerPanel start.*/
    $m("CountdownTimerPanel", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyConfiguredDurationFromConfig","t":8,"sn":"ApplyConfiguredDurationFromConfig","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ConfigureStaticBindings","t":8,"sn":"ConfigureStaticBindings","rt":$n[0].Void},{"a":1,"n":"LogTimerEvent","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogTimerEvent","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"LogTimerWarning","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogTimerWarning","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetToInitialState","t":8,"sn":"ResetToInitialState","rt":$n[0].Void},{"a":2,"n":"RestartCountdown","t":8,"pi":[{"n":"newDurationSeconds","pt":$n[0].Single,"ps":0}],"sn":"RestartCountdown","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"StartCountdown","t":8,"sn":"StartCountdown","rt":$n[0].Void},{"a":1,"n":"StartShake","t":8,"sn":"StartShake","rt":$n[0].Void},{"a":2,"n":"StopCountdown","t":8,"sn":"StopCountdown","rt":$n[0].Void},{"a":1,"n":"StopShake","t":8,"sn":"StopShake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateVisuals","t":8,"pi":[{"n":"normalizedTime","pt":$n[0].Single,"ps":0}],"sn":"UpdateVisuals","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"IsRunning","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsRunning","t":8,"rt":$n[0].Boolean,"fg":"IsRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsRunning"},{"a":2,"n":"RemainingSeconds","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_RemainingSeconds","t":8,"rt":$n[0].Single,"fg":"RemainingSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"RemainingSeconds"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowEndAngle","t":4,"rt":$n[0].Single,"sn":"arrowEndAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowImage","t":4,"rt":$n[1].Image,"sn":"arrowImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowNormalColor","t":4,"rt":$n[2].Color,"sn":"arrowNormalColor"},{"at":[new UnityEngine.HeaderAttribute("Arrow"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowStartAngle","t":4,"rt":$n[0].Single,"sn":"arrowStartAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowTransform","t":4,"rt":$n[2].RectTransform,"sn":"arrowTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoStartOnEnable","t":4,"rt":$n[0].Boolean,"sn":"autoStartOnEnable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barBackImage","t":4,"rt":$n[1].Image,"sn":"barBackImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barBackLowColor","t":4,"rt":$n[2].Color,"sn":"barBackLowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barBackNormalColor","t":4,"rt":$n[2].Color,"sn":"barBackNormalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFillImage","t":4,"rt":$n[1].Image,"sn":"barFillImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFillLowColor","t":4,"rt":$n[2].Color,"sn":"barFillLowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFillNormalColor","t":4,"rt":$n[2].Color,"sn":"barFillNormalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFrameImage","t":4,"rt":$n[1].Image,"sn":"barFrameImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFrameLowColor","t":4,"rt":$n[2].Color,"sn":"barFrameLowColor"},{"at":[new UnityEngine.HeaderAttribute("Colors"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barFrameNormalColor","t":4,"rt":$n[2].Color,"sn":"barFrameNormalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"durationSeconds","t":4,"rt":$n[0].Single,"sn":"durationSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Timer"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconBackImage","t":4,"rt":$n[1].Image,"sn":"iconBackImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconBackLowColor","t":4,"rt":$n[2].Color,"sn":"iconBackLowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconBackNormalColor","t":4,"rt":$n[2].Color,"sn":"iconBackNormalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconFrameImage","t":4,"rt":$n[1].Image,"sn":"iconFrameImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconFrameLowColor","t":4,"rt":$n[2].Color,"sn":"iconFrameLowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconFrameNormalColor","t":4,"rt":$n[2].Color,"sn":"iconFrameNormalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconNubImage","t":4,"rt":$n[1].Image,"sn":"iconNubImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconRoot","t":4,"rt":$n[2].RectTransform,"sn":"iconRoot"},{"at":[new UnityEngine.HeaderAttribute("Low Time FX"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconShakeDuration","t":4,"rt":$n[0].Single,"sn":"iconShakeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconShakeStrength","t":4,"rt":$n[0].Single,"sn":"iconShakeStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"iconShakeTween","t":4,"rt":$n[3].Tween,"sn":"iconShakeTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iconShakeVibrato","t":4,"rt":$n[0].Int32,"sn":"iconShakeVibrato","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isRunning","t":4,"rt":$n[0].Boolean,"sn":"isRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.02, 0.9)],"a":1,"n":"lowBackdropBlendRange","t":4,"rt":$n[0].Single,"sn":"lowBackdropBlendRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lowStateEnabled","t":4,"rt":$n[0].Boolean,"sn":"lowStateEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.05, 0.95)],"a":1,"n":"lowTimeThresholdNormalized","t":4,"rt":$n[0].Single,"sn":"lowTimeThresholdNormalized","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Bindings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[2].RectTransform,"sn":"panelRoot"},{"a":1,"n":"remainingSeconds","t":4,"rt":$n[0].Single,"sn":"remainingSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"CountdownFinished","t":2,"ad":{"a":2,"n":"add_CountdownFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCountdownFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_CountdownFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCountdownFinished","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*CountdownTimerPanel end.*/

    /*HexClearFxPlayer start.*/
    $m("HexClearFxPlayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EstimateParticleSystemLifetime","is":true,"t":8,"pi":[{"n":"rootFx","pt":$n[2].ParticleSystem,"ps":0}],"sn":"EstimateParticleSystemLifetime","rt":$n[0].Single,"p":[$n[2].ParticleSystem],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PlayClearTilesFxAtPosition","t":8,"pi":[{"n":"coroutineRunner","pt":$n[2].MonoBehaviour,"ps":0},{"n":"poolService","pt":HexPoolService,"ps":1},{"n":"position","pt":$n[2].Vector3,"ps":2},{"n":"tintColor","pt":$n[2].Color,"ps":3}],"sn":"PlayClearTilesFxAtPosition","rt":$n[0].Void,"p":[$n[2].MonoBehaviour,HexPoolService,$n[2].Vector3,$n[2].Color]},{"a":2,"n":"Prewarm","t":8,"pi":[{"n":"poolService","pt":HexPoolService,"ps":0}],"sn":"Prewarm","rt":$n[0].Void,"p":[HexPoolService]},{"a":1,"n":"RentClearTilesFx","t":8,"pi":[{"n":"poolService","pt":HexPoolService,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2}],"sn":"RentClearTilesFx","rt":$n[2].ParticleSystem,"p":[HexPoolService,$n[2].Vector3,$n[2].Quaternion]},{"a":1,"n":"ReturnClearTilesFxAfterDelay","t":8,"pi":[{"n":"poolService","pt":HexPoolService,"ps":0},{"n":"fx","pt":$n[2].ParticleSystem,"ps":1},{"n":"delay","pt":$n[0].Single,"ps":2}],"sn":"ReturnClearTilesFxAfterDelay","rt":$n[4].IEnumerator,"p":[HexPoolService,$n[2].ParticleSystem,$n[0].Single]},{"a":1,"n":"TintParticleSystems","is":true,"t":8,"pi":[{"n":"rootFx","pt":$n[2].ParticleSystem,"ps":0},{"n":"tintColor","pt":$n[2].Color,"ps":1}],"sn":"TintParticleSystems","rt":$n[0].Void,"p":[$n[2].ParticleSystem,$n[2].Color]},{"a":2,"n":"TryGetClearBatchColor","t":8,"pi":[{"n":"tiles","pt":$n[5].List$1(HexTile),"ps":0},{"n":"color","out":true,"pt":$n[2].Color,"ps":1}],"sn":"TryGetClearBatchColor","rt":$n[0].Boolean,"p":[$n[5].List$1(HexTile),$n[2].Color],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ClearTilesFxPrefab","t":16,"rt":$n[2].ParticleSystem,"g":{"a":2,"n":"get_ClearTilesFxPrefab","t":8,"rt":$n[2].ParticleSystem,"fg":"ClearTilesFxPrefab"},"fn":"ClearTilesFxPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearTilesFxLifetimePadding","t":4,"rt":$n[0].Single,"sn":"clearTilesFxLifetimePadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearTilesFxPrefab","t":4,"rt":$n[2].ParticleSystem,"sn":"clearTilesFxPrefab"}]}; }, $n);
    /*HexClearFxPlayer end.*/

    /*HexConfig start.*/
    $m("HexConfig", function () { return {"nested":[HexConfig.FloorCoord,HexConfig.StackColorPreset],"att":1048577,"a":2,"at":[new UnityEngine.CreateAssetMenuAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Fallback Random Colors")],"a":2,"n":"colors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"colors"},{"a":2,"n":"endGameAfterFirstTransferAndClearChain","t":4,"rt":$n[0].Boolean,"sn":"endGameAfterFirstTransferAndClearChain","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Floor Stack Spawn")],"a":2,"n":"fillGeneratedFloorWithStacks","t":4,"rt":$n[0].Boolean,"sn":"fillGeneratedFloorWithStacks","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Number of floor rows along world Z axis.")],"a":2,"n":"floorLength","t":4,"rt":$n[0].Int32,"sn":"floorLength","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Floor Generation"),new UnityEngine.TooltipAttribute("Number of floor columns along world X axis.")],"a":2,"n":"floorWidth","t":4,"rt":$n[0].Int32,"sn":"floorWidth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Game Flow")],"a":2,"n":"gameDurationSeconds","t":4,"rt":$n[0].Single,"sn":"gameDurationSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"generatePlayerStacksByFivePlusFive","t":4,"rt":$n[0].Boolean,"sn":"generatePlayerStacksByFivePlusFive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Stack Presets")],"a":2,"n":"isRandom","t":4,"rt":$n[0].Boolean,"sn":"isRandom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"noStackSpawnCoords","t":4,"rt":System.Array.type(HexConfig.FloorCoord),"sn":"noStackSpawnCoords"},{"at":[new UnityEngine.TooltipAttribute("How many first colors from `colors` are used in gameplay generation. 0 = use all.")],"a":2,"n":"paletteColorCount","t":4,"rt":$n[0].Int32,"sn":"paletteColorCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"startStackColors","t":4,"rt":System.Array.type(HexConfig.StackColorPreset),"sn":"startStackColors"},{"at":[new UnityEngine.HeaderAttribute("Match Rules")],"a":2,"n":"topMatchClearCount","t":4,"rt":$n[0].Int32,"sn":"topMatchClearCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexConfig end.*/

    /*HexConfig+FloorCoord start.*/
    $m("HexConfig.FloorCoord", function () { return {"td":HexConfig,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"x","t":4,"rt":$n[0].Int32,"sn":"x","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"z","t":4,"rt":$n[0].Int32,"sn":"z","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexConfig+FloorCoord end.*/

    /*HexConfig+StackColorPreset start.*/
    $m("HexConfig.StackColorPreset", function () { return {"td":HexConfig,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"colorIdsBottomToTop","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"colorIdsBottomToTop"}]}; }, $n);
    /*HexConfig+StackColorPreset end.*/

    /*HexDragger start.*/
    $m("HexDragger", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CancelActiveDrag","t":8,"sn":"CancelActiveDrag","rt":$n[0].Void},{"a":1,"n":"CancelActiveDragInternal","t":8,"pi":[{"n":"invokeFinishedEvent","pt":$n[0].Boolean,"ps":0}],"sn":"CancelActiveDragInternal","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"EndDrag","t":8,"sn":"EndDrag","rt":$n[0].Void},{"a":1,"n":"EnsureFloorRaycastBuffer","t":8,"sn":"EnsureFloorRaycastBuffer","rt":$n[0].Void},{"a":1,"n":"FinalizeSettle","t":8,"sn":"FinalizeSettle","rt":$n[0].Void},{"a":1,"n":"GetNearestFloorFromHits","t":8,"pi":[{"n":"hits","pt":System.Array.type(UnityEngine.RaycastHit),"ps":0},{"n":"hitCount","pt":$n[0].Int32,"ps":1}],"sn":"GetNearestFloorFromHits","rt":HexFloor,"p":[System.Array.type(UnityEngine.RaycastHit),$n[0].Int32]},{"a":1,"n":"IsActiveStackValid","t":8,"sn":"IsActiveStackValid","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"KillActiveTween","t":8,"pi":[{"n":"complete","pt":$n[0].Boolean,"ps":0}],"sn":"KillActiveTween","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReleaseDragState","t":8,"sn":"ReleaseDragState","rt":$n[0].Void},{"a":2,"n":"SetGameContext","t":8,"pi":[{"n":"context","pt":HexGameContext,"ps":0}],"sn":"SetGameContext","rt":$n[0].Void,"p":[HexGameContext]},{"a":2,"n":"SetGlobalDragEnabled","is":true,"t":8,"pi":[{"n":"enabled","pt":$n[0].Boolean,"ps":0}],"sn":"SetGlobalDragEnabled","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SetHighlightedFloor","t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0}],"sn":"SetHighlightedFloor","rt":$n[0].Void,"p":[HexFloor]},{"a":1,"n":"StartDrag","t":8,"pi":[{"n":"stackToDrag","pt":HexStack,"ps":0},{"n":"pointerId","pt":$n[0].Int32,"ps":1},{"n":"hitPoint","pt":$n[2].Vector3,"ps":2}],"sn":"StartDrag","rt":$n[0].Void,"p":[HexStack,$n[0].Int32,$n[2].Vector3]},{"a":1,"n":"StartSettleTween","t":8,"pi":[{"n":"targetPosition","pt":$n[2].Vector3,"ps":0},{"n":"targetFloor","pt":HexFloor,"ps":1}],"sn":"StartSettleTween","rt":$n[0].Void,"p":[$n[2].Vector3,HexFloor]},{"a":1,"n":"TryBeginDrag","t":8,"sn":"TryBeginDrag","rt":$n[0].Void},{"a":1,"n":"TryGetFloorUnderStack","t":8,"pi":[{"n":"floor","out":true,"pt":HexFloor,"ps":0}],"sn":"TryGetFloorUnderStack","rt":$n[0].Boolean,"p":[HexFloor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetPointerDown","t":8,"pi":[{"n":"pointerId","out":true,"pt":$n[0].Int32,"ps":0},{"n":"pointerPosition","out":true,"pt":$n[2].Vector2,"ps":1}],"sn":"TryGetPointerDown","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetPointerPosition","t":8,"pi":[{"n":"pointerId","pt":$n[0].Int32,"ps":0},{"n":"pointerPosition","out":true,"pt":$n[2].Vector2,"ps":1}],"sn":"TryGetPointerPosition","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateDrag","t":8,"pi":[{"n":"pointerPosition","pt":$n[2].Vector2,"ps":0}],"sn":"UpdateDrag","rt":$n[0].Void,"p":[$n[2].Vector2]},{"a":1,"n":"UpdateDropHighlight","t":8,"sn":"UpdateDropHighlight","rt":$n[0].Void},{"a":1,"n":"WasPointerReleased","t":8,"pi":[{"n":"pointerId","pt":$n[0].Int32,"ps":0}],"sn":"WasPointerReleased","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsGlobalDragEnabled","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsGlobalDragEnabled","t":8,"rt":$n[0].Boolean,"fg":"IsGlobalDragEnabled","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsGlobalDragEnabled"},{"a":1,"n":"Manager","t":16,"rt":HexManager,"g":{"a":1,"n":"get_Manager","t":8,"rt":HexManager,"fg":"Manager"},"fn":"Manager"},{"a":1,"n":"MousePointerId","is":true,"t":4,"rt":$n[0].Int32,"sn":"MousePointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"activePointerId","t":4,"rt":$n[0].Int32,"sn":"activePointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"activeStack","t":4,"rt":HexStack,"sn":"activeStack"},{"a":1,"n":"activeStackTransform","t":4,"rt":$n[2].Transform,"sn":"activeStackTransform"},{"a":1,"n":"activeTween","t":4,"rt":$n[3].Tween,"sn":"activeTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"attachMoveDuration","t":4,"rt":$n[0].Single,"sn":"attachMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"attachMoveEase","t":4,"rt":$n[3].Ease,"sn":"attachMoveEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":1,"n":"cachedManager","t":4,"rt":HexManager,"sn":"cachedManager"},{"a":1,"n":"dragEndedWithSuccessfulDrop","t":4,"rt":$n[0].Boolean,"sn":"dragEndedWithSuccessfulDrop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"dragLiftY","t":4,"rt":$n[0].Single,"sn":"dragLiftY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragOffset","t":4,"rt":$n[2].Vector3,"sn":"dragOffset"},{"a":1,"n":"dragPlane","t":4,"rt":$n[2].Plane,"sn":"dragPlane"},{"a":1,"n":"dragStartPosition","t":4,"rt":$n[2].Vector3,"sn":"dragStartPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropDuration","t":4,"rt":$n[0].Single,"sn":"dropDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropEase","t":4,"rt":$n[3].Ease,"sn":"dropEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorCheckDistance","t":4,"rt":$n[0].Single,"sn":"floorCheckDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Floor Check"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorCheckStartHeight","t":4,"rt":$n[0].Single,"sn":"floorCheckStartHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"floorRaycastBuffer","t":4,"rt":System.Array.type(UnityEngine.RaycastHit),"sn":"floorRaycastBuffer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorRaycastBufferSize","t":4,"rt":$n[0].Int32,"sn":"floorRaycastBufferSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Input"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"a":1,"n":"globalDragEnabled","is":true,"t":4,"rt":$n[0].Boolean,"sn":"globalDragEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"highlightedFloor","t":4,"rt":HexFloor,"sn":"highlightedFloor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inputCamera","t":4,"rt":$n[2].Camera,"sn":"inputCamera"},{"a":1,"n":"instance","is":true,"t":4,"rt":HexDragger,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"interactionMask","t":4,"rt":$n[2].LayerMask,"sn":"interactionMask"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isSettling","t":4,"rt":$n[0].Boolean,"sn":"isSettling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftDuration","t":4,"rt":$n[0].Single,"sn":"liftDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftEase","t":4,"rt":$n[3].Ease,"sn":"liftEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.HeaderAttribute("Tween"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftHeight","t":4,"rt":$n[0].Single,"sn":"liftHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pickMaxDistance","t":4,"rt":$n[0].Single,"sn":"pickMaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DragFinished","is":true,"t":2,"ad":{"a":2,"n":"add_DragFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragFinished","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"DragStarted","is":true,"t":2,"ad":{"a":2,"n":"add_DragStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragStarted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragStarted","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*HexDragger end.*/

    /*HexFloor start.*/
    $m("HexFloor", function () { return {"nested":[HexFloor.RendererHighlightState],"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheHighlightRenderers","t":8,"sn":"CacheHighlightRenderers","rt":$n[0].Void},{"a":2,"n":"ClearOccupiedStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"ClearOccupiedStack","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"EnsureNeighborRaycastBuffer","t":8,"sn":"EnsureNeighborRaycastBuffer","rt":$n[0].Void},{"a":1,"n":"EnsureNeighborStorage","t":8,"sn":"EnsureNeighborStorage","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Auto Find Near Floors")],"a":2,"n":"FindNearFloors","t":8,"sn":"FindNearFloors","rt":$n[0].Void},{"a":1,"n":"FindNeighborForSide","t":8,"pi":[{"n":"sideIndex","pt":$n[0].Int32,"ps":0}],"sn":"FindNeighborForSide","rt":HexFloor,"p":[$n[0].Int32]},{"a":1,"n":"GetNearestFloorFromHits","t":8,"pi":[{"n":"hits","pt":System.Array.type(UnityEngine.RaycastHit),"ps":0},{"n":"hitCount","pt":$n[0].Int32,"ps":1}],"sn":"GetNearestFloorFromHits","rt":HexFloor,"p":[System.Array.type(UnityEngine.RaycastHit),$n[0].Int32]},{"a":2,"n":"GetNeighborBySide","t":8,"pi":[{"n":"sideIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetNeighborBySide","rt":HexFloor,"p":[$n[0].Int32]},{"a":1,"n":"GetRayOrigin","t":8,"sn":"GetRayOrigin","rt":$n[2].Vector3},{"a":2,"n":"GetSideDirection","t":8,"pi":[{"n":"sideIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetSideDirection","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetSideIndexOfNeighbor","t":8,"pi":[{"n":"neighbor","pt":HexFloor,"ps":0}],"sn":"GetSideIndexOfNeighbor","rt":$n[0].Int32,"p":[HexFloor],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetStackPlacementPosition","t":8,"pi":[{"n":"fallbackY","pt":$n[0].Single,"ps":0}],"sn":"GetStackPlacementPosition","rt":$n[2].Vector3,"p":[$n[0].Single]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnDrawGizmosSelected","t":8,"sn":"OnDrawGizmosSelected","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"SetDropHighlight","t":8,"pi":[{"n":"enabled","pt":$n[0].Boolean,"ps":0}],"sn":"SetDropHighlight","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetGridCoordinates","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"z","pt":$n[0].Int32,"ps":1}],"sn":"SetGridCoordinates","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"SetOccupiedStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"SetOccupiedStack","rt":$n[0].Void,"p":[HexStack]},{"a":2,"n":"ActiveFloors","is":true,"t":16,"rt":$n[5].IEnumerable$1(HexFloor),"g":{"a":2,"n":"get_ActiveFloors","t":8,"rt":$n[5].IEnumerable$1(HexFloor),"fg":"ActiveFloors","is":true},"fn":"ActiveFloors"},{"a":2,"n":"GridX","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_GridX","t":8,"rt":$n[0].Int32,"fg":"GridX","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GridX"},{"a":2,"n":"GridZ","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_GridZ","t":8,"rt":$n[0].Int32,"fg":"GridZ","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GridZ"},{"a":2,"n":"NearFloors","t":16,"rt":$n[5].IReadOnlyList$1(HexFloor),"g":{"a":2,"n":"get_NearFloors","t":8,"rt":$n[5].IReadOnlyList$1(HexFloor),"fg":"NearFloors"},"fn":"NearFloors"},{"a":2,"n":"OccupiedStack","t":16,"rt":HexStack,"g":{"a":2,"n":"get_OccupiedStack","t":8,"rt":HexStack,"fg":"OccupiedStack"},"fn":"OccupiedStack"},{"a":2,"n":"StackAnchor","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_StackAnchor","t":8,"rt":$n[2].Transform,"fg":"StackAnchor"},"fn":"StackAnchor"},{"a":1,"n":"ActiveFloorSet","is":true,"t":4,"rt":$n[5].HashSet$1(HexFloor),"sn":"ActiveFloorSet","ro":true},{"a":1,"n":"BaseColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"BaseColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"EmissionColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"EmissionColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"SideCount","is":true,"t":4,"rt":$n[0].Int32,"sn":"SideCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Search"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoFindOnAwake","t":4,"rt":$n[0].Boolean,"sn":"autoFindOnAwake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Gizmos"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"drawSideRays","t":4,"rt":$n[0].Boolean,"sn":"drawSideRays","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"dropHighlightBlend","t":4,"rt":$n[0].Single,"sn":"dropHighlightBlend","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropHighlightColor","t":4,"rt":$n[2].Color,"sn":"dropHighlightColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropHighlightEmissionColor","t":4,"rt":$n[2].Color,"sn":"dropHighlightEmissionColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gizmoNeighborColor","t":4,"rt":$n[2].Color,"sn":"gizmoNeighborColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gizmoNoNeighborColor","t":4,"rt":$n[2].Color,"sn":"gizmoNoNeighborColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gizmoRayLength","t":4,"rt":$n[0].Single,"sn":"gizmoRayLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gizmoSideOffset","t":4,"rt":$n[0].Single,"sn":"gizmoSideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gizmoSphereRadius","t":4,"rt":$n[0].Single,"sn":"gizmoSphereRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gridX","t":4,"rt":$n[0].Int32,"sn":"gridX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gridZ","t":4,"rt":$n[0].Int32,"sn":"gridZ","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Drop Highlight"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightRenderers","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"highlightRenderers"},{"a":1,"n":"highlightStates","t":4,"rt":$n[5].List$1(HexFloor.RendererHighlightState),"sn":"highlightStates","ro":true},{"a":1,"n":"isDropHighlighted","t":4,"rt":$n[0].Boolean,"sn":"isDropHighlighted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"nearFloors","t":4,"rt":$n[5].List$1(HexFloor),"sn":"nearFloors"},{"a":1,"n":"neighborRaycastBuffer","t":4,"rt":System.Array.type(UnityEngine.RaycastHit),"sn":"neighborRaycastBuffer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"neighborRaycastBufferSize","t":4,"rt":$n[0].Int32,"sn":"neighborRaycastBufferSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"neighborSearchDistance","t":4,"rt":$n[0].Single,"sn":"neighborSearchDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"occupiedStack","t":4,"rt":HexStack,"sn":"occupiedStack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rayHeight","t":4,"rt":$n[0].Single,"sn":"rayHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"searchMask","t":4,"rt":$n[2].LayerMask,"sn":"searchMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sideDirectionOffsetDegrees","t":4,"rt":$n[0].Single,"sn":"sideDirectionOffsetDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sideNeighbors","t":4,"rt":System.Array.type(HexFloor),"sn":"sideNeighbors"},{"at":[new UnityEngine.HeaderAttribute("Placement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackAnchor","t":4,"rt":$n[2].Transform,"sn":"stackAnchor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useEmissionHighlight","t":4,"rt":$n[0].Boolean,"sn":"useEmissionHighlight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexFloor end.*/

    /*HexFloor+RendererHighlightState start.*/
    $m("HexFloor.RendererHighlightState", function () { return {"td":HexFloor,"att":1048835,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BaseColor","t":4,"rt":$n[2].Color,"sn":"BaseColor"},{"a":2,"n":"BaseEmissionColor","t":4,"rt":$n[2].Color,"sn":"BaseEmissionColor"},{"a":2,"n":"ColorPropertyId","t":4,"rt":$n[0].Int32,"sn":"ColorPropertyId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HasColorProperty","t":4,"rt":$n[0].Boolean,"sn":"HasColorProperty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasEmissionProperty","t":4,"rt":$n[0].Boolean,"sn":"HasEmissionProperty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PropertyBlock","t":4,"rt":$n[2].MaterialPropertyBlock,"sn":"PropertyBlock"},{"a":2,"n":"Renderer","t":4,"rt":$n[2].Renderer,"sn":"Renderer"}]}; }, $n);
    /*HexFloor+RendererHighlightState end.*/

    /*HexFloorCreator start.*/
    $m("HexFloorCreator", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClearFloors","is":true,"t":8,"pi":[{"n":"root","pt":$n[2].Transform,"ps":0}],"sn":"ClearFloors","rt":$n[0].Void,"p":[$n[2].Transform]},{"at":[new UnityEngine.ContextMenu.ctor("Clear Generated Floor")],"a":2,"n":"ClearGeneratedFloor","t":8,"sn":"ClearGeneratedFloor","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Generate Floor")],"a":2,"n":"GenerateFloor","t":8,"sn":"GenerateFloor","rt":$n[0].Void},{"a":1,"n":"LogFloorCreator","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogFloorCreator","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"MarkInitialGenerationCompleted","t":8,"sn":"MarkInitialGenerationCompleted","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"HexConfig","t":16,"rt":HexConfig,"g":{"a":1,"n":"get_HexConfig","t":8,"rt":HexConfig,"fg":"HexConfig"},"fn":"HexConfig"},{"a":2,"n":"InitialGenerationCompleted","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_InitialGenerationCompleted","t":8,"rt":$n[0].Boolean,"fg":"InitialGenerationCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_InitialGenerationCompleted","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"InitialGenerationCompleted"},"fn":"InitialGenerationCompleted"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anchorLocalOffset","t":4,"rt":$n[2].Vector3,"sn":"anchorLocalOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottomRowAnchor","t":4,"rt":$n[2].Transform,"sn":"bottomRowAnchor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearBeforeGenerate","t":4,"rt":$n[0].Boolean,"sn":"clearBeforeGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"debugLogs","t":4,"rt":$n[0].Boolean,"sn":"debugLogs","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillStacksAfterGenerate","t":4,"rt":$n[0].Boolean,"sn":"fillStacksAfterGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorPrefab","t":4,"rt":$n[2].GameObject,"sn":"floorPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorRoot","t":4,"rt":$n[2].Transform,"sn":"floorRoot"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.HeaderAttribute("Build"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"generateOnStart","t":4,"rt":$n[0].Boolean,"sn":"generateOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"generatedFloors","t":4,"rt":$n[5].List$1(HexFloor),"sn":"generatedFloors","ro":true},{"at":[new UnityEngine.HeaderAttribute("Layout"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"neighborDistance","t":4,"rt":$n[0].Single,"sn":"neighborDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"refreshNeighborsAfterGenerate","t":4,"rt":$n[0].Boolean,"sn":"refreshNeighborsAfterGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shiftOddColumnsForward","t":4,"rt":$n[0].Boolean,"sn":"shiftOddColumnsForward","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<InitialGenerationCompleted>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"InitialGenerationCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexFloorCreator end.*/

    /*HexGameContext start.*/
    $m("HexGameContext", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Config","t":16,"rt":HexConfig,"g":{"a":2,"n":"get_Config","t":8,"rt":HexConfig,"fg":"Config"},"fn":"Config"},{"a":2,"n":"FloorCreator","t":16,"rt":HexFloorCreator,"g":{"a":2,"n":"get_FloorCreator","t":8,"rt":HexFloorCreator,"fg":"FloorCreator"},"fn":"FloorCreator"},{"a":2,"n":"Manager","t":16,"rt":HexManager,"g":{"a":2,"n":"get_Manager","t":8,"rt":HexManager,"fg":"Manager"},"fn":"Manager"},{"a":2,"n":"PoolService","t":16,"rt":HexPoolService,"g":{"a":2,"n":"get_PoolService","t":8,"rt":HexPoolService,"fg":"PoolService"},"fn":"PoolService"},{"a":2,"n":"StacksCreator","t":16,"rt":HexStacksCreator,"g":{"a":2,"n":"get_StacksCreator","t":8,"rt":HexStacksCreator,"fg":"StacksCreator"},"fn":"StacksCreator"},{"at":[new UnityEngine.HeaderAttribute("Core"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"config","t":4,"rt":HexConfig,"sn":"config"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"floorCreator","t":4,"rt":HexFloorCreator,"sn":"floorCreator"},{"at":[new UnityEngine.HeaderAttribute("Links"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"manager","t":4,"rt":HexManager,"sn":"manager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolService","t":4,"rt":HexPoolService,"sn":"poolService"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stacksCreator","t":4,"rt":HexStacksCreator,"sn":"stacksCreator"}]}; }, $n);
    /*HexGameContext end.*/

    /*HexManager start.*/
    $m("HexManager", function () { return {"nested":[HexManager.StackClearBatch,HexManager.TransferChainState],"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AttachStackToFloor","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"targetFloor","pt":HexFloor,"ps":1}],"sn":"AttachStackToFloor","rt":$n[0].Void,"p":[HexStack,HexFloor]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginResolveTopColorTransfer","t":8,"pi":[{"n":"sourceStack","pt":HexStack,"ps":0},{"n":"sourceFloor","pt":HexFloor,"ps":1},{"n":"onComplete","pt":Function,"ps":2}],"sn":"BeginResolveTopColorTransfer","rt":$n[0].Void,"p":[HexStack,HexFloor,Function]},{"a":2,"n":"CanPlaceStackOnFloor","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"floor","pt":HexFloor,"ps":1}],"sn":"CanPlaceStackOnFloor","rt":$n[0].Boolean,"p":[HexStack,HexFloor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ClearBatchesParallel","t":8,"pi":[{"n":"clearBatches","pt":$n[5].List$1(HexManager.StackClearBatch),"ps":0},{"n":"speedMultiplier","pt":$n[0].Single,"ps":1},{"n":"onComplete","pt":Function,"ps":2}],"sn":"ClearBatchesParallel","rt":$n[0].Void,"p":[$n[5].List$1(HexManager.StackClearBatch),$n[0].Single,Function]},{"a":1,"n":"CompleteAfterTweens","t":8,"pi":[{"n":"tweens","pt":$n[5].List$1(DG.Tweening.Tween),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"CompleteAfterTweens","rt":$n[0].Void,"p":[$n[5].List$1(DG.Tweening.Tween),Function]},{"a":1,"n":"ContinueResolveTopColorTransfer","t":8,"pi":[{"n":"state","pt":HexManager.TransferChainState,"ps":0}],"sn":"ContinueResolveTopColorTransfer","rt":$n[0].Void,"p":[HexManager.TransferChainState]},{"a":1,"n":"EnqueueAllStacksForTransferCheck","t":8,"pi":[{"n":"pendingStacks","pt":$n[5].Queue$1(HexStack),"ps":0},{"n":"queuedStacks","pt":$n[5].HashSet$1(HexStack),"ps":1}],"sn":"EnqueueAllStacksForTransferCheck","rt":$n[0].Void,"p":[$n[5].Queue$1(HexStack),$n[5].HashSet$1(HexStack)]},{"a":1,"n":"EnqueueForTransferCheck","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"pendingStacks","pt":$n[5].Queue$1(HexStack),"ps":1},{"n":"queuedStacks","pt":$n[5].HashSet$1(HexStack),"ps":2}],"sn":"EnqueueForTransferCheck","rt":$n[0].Void,"p":[HexStack,$n[5].Queue$1(HexStack),$n[5].HashSet$1(HexStack)]},{"a":1,"n":"EnqueueNeighborStacksForTransferCheck","t":8,"pi":[{"n":"centerFloor","pt":HexFloor,"ps":0},{"n":"pendingStacks","pt":$n[5].Queue$1(HexStack),"ps":1},{"n":"queuedStacks","pt":$n[5].HashSet$1(HexStack),"ps":2}],"sn":"EnqueueNeighborStacksForTransferCheck","rt":$n[0].Void,"p":[HexFloor,$n[5].Queue$1(HexStack),$n[5].HashSet$1(HexStack)]},{"a":1,"n":"FinishTransferChain","t":8,"pi":[{"n":"state","pt":HexManager.TransferChainState,"ps":0}],"sn":"FinishTransferChain","rt":$n[0].Void,"p":[HexManager.TransferChainState]},{"a":1,"n":"GetChainSpeedMultiplier","t":8,"pi":[{"n":"stepIndex","pt":$n[0].Int32,"ps":0},{"n":"speedIncreasePerStep","pt":$n[0].Single,"ps":1}],"sn":"GetChainSpeedMultiplier","rt":$n[0].Single,"p":[$n[0].Int32,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetFloorDebugName","is":true,"t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0}],"sn":"GetFloorDebugName","rt":$n[0].String,"p":[HexFloor]},{"a":1,"n":"GetStackDebugName","is":true,"t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"GetStackDebugName","rt":$n[0].String,"p":[HexStack]},{"a":1,"n":"GetTopMatchClearCount","t":8,"sn":"GetTopMatchClearCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HandleStackPlaced","t":8,"pi":[{"n":"placedStack","pt":HexStack,"ps":0},{"n":"targetFloor","pt":HexFloor,"ps":1},{"n":"onComplete","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"HandleStackPlaced","rt":$n[0].Void,"p":[HexStack,HexFloor,Function]},{"a":1,"n":"IsTransferChainActive","t":8,"pi":[{"n":"state","pt":HexManager.TransferChainState,"ps":0}],"sn":"IsTransferChainActive","rt":$n[0].Boolean,"p":[HexManager.TransferChainState],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LogTransferEvent","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogTransferEvent","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"PrewarmPools","t":8,"sn":"PrewarmPools","rt":$n[0].Void},{"a":2,"n":"RentTile","t":8,"pi":[{"n":"prefab","pt":HexTile,"ps":0},{"n":"parent","pt":$n[2].Transform,"ps":1}],"sn":"RentTile","rt":HexTile,"p":[HexTile,$n[2].Transform]},{"a":1,"n":"ResolveStackOnFloor","t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0},{"n":"ignoredStack","dv":null,"o":true,"pt":HexStack,"ps":1}],"sn":"ResolveStackOnFloor","rt":HexStack,"p":[HexFloor,HexStack]},{"a":1,"n":"ResolveTilePrefabForPool","t":8,"sn":"ResolveTilePrefabForPool","rt":HexTile},{"a":2,"n":"ReturnTile","t":8,"pi":[{"n":"tile","pt":HexTile,"ps":0},{"n":"fallbackPrefab","dv":null,"o":true,"pt":HexTile,"ps":1}],"sn":"ReturnTile","rt":$n[0].Void,"p":[HexTile,HexTile]},{"a":1,"n":"TryCollectClearBatches","t":8,"pi":[{"n":"eligibleStacks","pt":$n[5].HashSet$1(HexStack),"ps":0},{"n":"clearBatches","out":true,"pt":$n[5].List$1(HexManager.StackClearBatch),"ps":1}],"sn":"TryCollectClearBatches","rt":$n[0].Boolean,"p":[$n[5].HashSet$1(HexStack),$n[5].List$1(HexManager.StackClearBatch)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryExtractTopMatchTiles","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"tilesToClear","out":true,"pt":$n[5].List$1(HexTile),"ps":1}],"sn":"TryExtractTopMatchTiles","rt":$n[0].Boolean,"p":[HexStack,$n[5].List$1(HexTile)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryFindAnyTransferCandidate","t":8,"pi":[{"n":"sourceStack","out":true,"pt":HexStack,"ps":0},{"n":"sourceFloor","out":true,"pt":HexFloor,"ps":1}],"sn":"TryFindAnyTransferCandidate","rt":$n[0].Boolean,"p":[HexStack,HexFloor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryFindMatchingNeighbor","t":8,"pi":[{"n":"sourceStack","pt":HexStack,"ps":0},{"n":"sourceFloor","pt":HexFloor,"ps":1},{"n":"targetStack","out":true,"pt":HexStack,"ps":2},{"n":"targetFloor","out":true,"pt":HexFloor,"ps":3},{"n":"topColorId","out":true,"pt":$n[0].Int32,"ps":4}],"sn":"TryFindMatchingNeighbor","rt":$n[0].Boolean,"p":[HexStack,HexFloor,HexStack,HexFloor,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetLowestTilePosition","t":8,"pi":[{"n":"tiles","pt":$n[5].List$1(HexTile),"ps":0},{"n":"lowestPosition","out":true,"pt":$n[2].Vector3,"ps":1}],"sn":"TryGetLowestTilePosition","rt":$n[0].Boolean,"p":[$n[5].List$1(HexTile),$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetMatchingStack","t":8,"pi":[{"n":"sourceStack","pt":HexStack,"ps":0},{"n":"neighborFloor","pt":HexFloor,"ps":1},{"n":"topColorId","pt":$n[0].Int32,"ps":2},{"n":"matchingStack","out":true,"pt":HexStack,"ps":3}],"sn":"TryGetMatchingStack","rt":$n[0].Boolean,"p":[HexStack,HexFloor,$n[0].Int32,HexStack],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryRecycleEmptyStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"TryRecycleEmptyStack","rt":$n[0].Boolean,"p":[HexStack],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryResolveStackFloor","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"floor","out":true,"pt":HexFloor,"ps":1}],"sn":"TryResolveStackFloor","rt":$n[0].Boolean,"p":[HexStack,HexFloor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsTransferInProgress","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsTransferInProgress","t":8,"rt":$n[0].Boolean,"fg":"IsTransferInProgress","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsTransferInProgress"},{"a":1,"n":"PoolService","t":16,"rt":HexPoolService,"g":{"a":1,"n":"get_PoolService","t":8,"rt":HexPoolService,"fg":"PoolService"},"fn":"PoolService"},{"a":1,"n":"StacksCreator","t":16,"rt":HexStacksCreator,"g":{"a":1,"n":"get_StacksCreator","t":8,"rt":HexStacksCreator,"fg":"StacksCreator"},"fn":"StacksCreator"},{"a":2,"n":"hexConfig","t":16,"rt":HexConfig,"g":{"a":2,"n":"get_hexConfig","t":8,"rt":HexConfig,"fg":"hexConfig"},"fn":"hexConfig"},{"a":1,"n":"MaxResolveIterations","is":true,"t":4,"rt":$n[0].Int32,"sn":"MaxResolveIterations","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"activeTransferRoutines","t":4,"rt":$n[0].Int32,"sn":"activeTransferRoutines","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearFxPlayer","t":4,"rt":HexClearFxPlayer,"sn":"clearFxPlayer"},{"at":[new UnityEngine.HeaderAttribute("Top Match Clear"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearScaleDuration","t":4,"rt":$n[0].Single,"sn":"clearScaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearScaleEase","t":4,"rt":$n[3].Ease,"sn":"clearScaleEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearScaleStagger","t":4,"rt":$n[0].Single,"sn":"clearScaleStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearSpeedIncreasePerStack","t":4,"rt":$n[0].Single,"sn":"clearSpeedIncreasePerStack","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"firstTransferAndClearChainRaised","t":4,"rt":$n[0].Boolean,"sn":"firstTransferAndClearChainRaised","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.HeaderAttribute("Debug"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logTransferEvents","t":4,"rt":$n[0].Boolean,"sn":"logTransferEvents","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transferAnimator","t":4,"rt":HexTransferAnimator,"sn":"transferAnimator"},{"a":1,"n":"transferGeneration","t":4,"rt":$n[0].Int32,"sn":"transferGeneration","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Transfer"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transferOnStackPlaced","t":4,"rt":$n[0].Boolean,"sn":"transferOnStackPlaced","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Chain Reaction Speed"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transferSpeedIncreasePerStack","t":4,"rt":$n[0].Single,"sn":"transferSpeedIncreasePerStack","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FirstTransferAndClearChainFinished","t":2,"ad":{"a":2,"n":"add_FirstTransferAndClearChainFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFirstTransferAndClearChainFinished","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_FirstTransferAndClearChainFinished","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFirstTransferAndClearChainFinished","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*HexManager end.*/

    /*HexManager+StackClearBatch start.*/
    $m("HexManager.StackClearBatch", function () { return {"td":HexManager,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexStack,$n[5].List$1(HexTile)],"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"tiles","pt":$n[5].List$1(HexTile),"ps":1}],"sn":"$ctor1"},{"a":2,"n":"Stack","t":4,"rt":HexStack,"sn":"Stack"},{"a":2,"n":"Tiles","t":4,"rt":$n[5].List$1(HexTile),"sn":"Tiles"}]}; }, $n);
    /*HexManager+StackClearBatch end.*/

    /*HexManager+TransferChainState start.*/
    $m("HexManager.TransferChainState", function () { return {"td":HexManager,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,Function],"pi":[{"n":"generation","pt":$n[0].Int32,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"ctor"},{"a":2,"n":"ClearStepIndex","t":4,"rt":$n[0].Int32,"sn":"ClearStepIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Generation","t":4,"rt":$n[0].Int32,"sn":"Generation","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HadClears","t":4,"rt":$n[0].Boolean,"sn":"HadClears","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HadTransfers","t":4,"rt":$n[0].Boolean,"sn":"HadTransfers","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsCompleted","t":4,"rt":$n[0].Boolean,"sn":"IsCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LoopGuard","t":4,"rt":$n[0].Int32,"sn":"LoopGuard","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OnComplete","t":4,"rt":Function,"sn":"OnComplete","ro":true},{"a":2,"n":"PassStarted","t":4,"rt":$n[0].Boolean,"sn":"PassStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PendingStacks","t":4,"rt":$n[5].Queue$1(HexStack),"sn":"PendingStacks","ro":true},{"a":2,"n":"QueuedStacks","t":4,"rt":$n[5].HashSet$1(HexStack),"sn":"QueuedStacks","ro":true},{"a":2,"n":"TransferStepIndex","t":4,"rt":$n[0].Int32,"sn":"TransferStepIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TransferTargetStacks","t":4,"rt":$n[5].HashSet$1(HexStack),"sn":"TransferTargetStacks","ro":true},{"a":2,"n":"TransferredInPass","t":4,"rt":$n[0].Boolean,"sn":"TransferredInPass","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexManager+TransferChainState end.*/

    /*HexPoolService start.*/
    $m("HexPoolService", function () { return {"nested":[HexPoolService.ComponentPool$1],"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnsurePoolRoot","t":8,"pi":[{"n":"configuredRoot","pt":$n[2].Transform,"ps":0},{"n":"fallbackName","pt":$n[0].String,"ps":1}],"sn":"EnsurePoolRoot","rt":$n[2].Transform,"p":[$n[2].Transform,$n[0].String]},{"a":1,"n":"EnsurePoolsInitialized","t":8,"sn":"EnsurePoolsInitialized","rt":$n[0].Void},{"a":2,"n":"PrewarmFx","t":8,"pi":[{"n":"prefab","pt":$n[2].ParticleSystem,"ps":0}],"sn":"PrewarmFx","rt":$n[0].Void,"p":[$n[2].ParticleSystem]},{"a":2,"n":"PrewarmFx","t":8,"pi":[{"n":"prefab","pt":$n[2].ParticleSystem,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"PrewarmFx$1","rt":$n[0].Void,"p":[$n[2].ParticleSystem,$n[0].Int32]},{"a":2,"n":"PrewarmStacks","t":8,"pi":[{"n":"prefab","pt":HexStack,"ps":0}],"sn":"PrewarmStacks","rt":$n[0].Void,"p":[HexStack]},{"a":2,"n":"PrewarmStacks","t":8,"pi":[{"n":"prefab","pt":HexStack,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"PrewarmStacks$1","rt":$n[0].Void,"p":[HexStack,$n[0].Int32]},{"a":2,"n":"PrewarmTiles","t":8,"pi":[{"n":"prefab","pt":HexTile,"ps":0}],"sn":"PrewarmTiles","rt":$n[0].Void,"p":[HexTile]},{"a":2,"n":"PrewarmTiles","t":8,"pi":[{"n":"prefab","pt":HexTile,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"PrewarmTiles$1","rt":$n[0].Void,"p":[HexTile,$n[0].Int32]},{"a":2,"n":"RentFx","t":8,"pi":[{"n":"prefab","pt":$n[2].ParticleSystem,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"parent","dv":null,"o":true,"pt":$n[2].Transform,"ps":3}],"sn":"RentFx","rt":$n[2].ParticleSystem,"p":[$n[2].ParticleSystem,$n[2].Vector3,$n[2].Quaternion,$n[2].Transform]},{"a":2,"n":"RentStack","t":8,"pi":[{"n":"prefab","pt":HexStack,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"parent","dv":null,"o":true,"pt":$n[2].Transform,"ps":3}],"sn":"RentStack","rt":HexStack,"p":[HexStack,$n[2].Vector3,$n[2].Quaternion,$n[2].Transform]},{"a":2,"n":"RentTile","t":8,"pi":[{"n":"prefab","pt":HexTile,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"parent","dv":null,"o":true,"pt":$n[2].Transform,"ps":3}],"sn":"RentTile","rt":HexTile,"p":[HexTile,$n[2].Vector3,$n[2].Quaternion,$n[2].Transform]},{"a":2,"n":"ReturnFx","t":8,"pi":[{"n":"fx","pt":$n[2].ParticleSystem,"ps":0},{"n":"fallbackPrefab","dv":null,"o":true,"pt":$n[2].ParticleSystem,"ps":1}],"sn":"ReturnFx","rt":$n[0].Boolean,"p":[$n[2].ParticleSystem,$n[2].ParticleSystem],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ReturnStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"fallbackPrefab","dv":null,"o":true,"pt":HexStack,"ps":1}],"sn":"ReturnStack","rt":$n[0].Boolean,"p":[HexStack,HexStack],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ReturnTile","t":8,"pi":[{"n":"tile","pt":HexTile,"ps":0},{"n":"fallbackPrefab","dv":null,"o":true,"pt":HexTile,"ps":1}],"sn":"ReturnTile","rt":$n[0].Boolean,"p":[HexTile,HexTile],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fxPool","t":4,"rt":HexPoolService.ComponentPool$1(UnityEngine.ParticleSystem),"sn":"fxPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fxPoolRoot","t":4,"rt":$n[2].Transform,"sn":"fxPoolRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prewarmFxCount","t":4,"rt":$n[0].Int32,"sn":"prewarmFxCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Prewarm"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prewarmStackCount","t":4,"rt":$n[0].Int32,"sn":"prewarmStackCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prewarmTileCount","t":4,"rt":$n[0].Int32,"sn":"prewarmTileCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"stackPool","t":4,"rt":HexPoolService.ComponentPool$1(HexStack),"sn":"stackPool"},{"at":[new UnityEngine.HeaderAttribute("Pool Roots"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackPoolRoot","t":4,"rt":$n[2].Transform,"sn":"stackPoolRoot"},{"a":1,"n":"tilePool","t":4,"rt":HexPoolService.ComponentPool$1(HexTile),"sn":"tilePool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tilePoolRoot","t":4,"rt":$n[2].Transform,"sn":"tilePoolRoot"}]}; }, $n);
    /*HexPoolService end.*/

    /*HexPoolService+ComponentPool$1 start.*/
    $m("HexPoolService.ComponentPool$1", function (T) { return {"td":HexPoolService,"att":1048835,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform],"pi":[{"n":"poolRoot","pt":$n[2].Transform,"ps":0}],"sn":"ctor"},{"a":1,"n":"GetOrCreateBucket","t":8,"pi":[{"n":"prefabId","pt":$n[0].Int32,"ps":0}],"sn":"GetOrCreateBucket","rt":$n[5].Queue$1(T),"p":[$n[0].Int32]},{"a":1,"n":"InstantiateComponent","is":true,"t":8,"pi":[{"n":"prefab","pt":T,"ps":0},{"n":"parent","dv":null,"o":true,"pt":$n[2].Transform,"ps":1}],"sn":"InstantiateComponent","rt":T,"p":[T,$n[2].Transform]},{"a":2,"n":"Prewarm","t":8,"pi":[{"n":"prefab","pt":T,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"Prewarm","rt":$n[0].Void,"p":[T,$n[0].Int32]},{"a":2,"n":"Rent","t":8,"pi":[{"n":"prefab","pt":T,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"parent","pt":$n[2].Transform,"ps":3}],"sn":"Rent","rt":T,"p":[T,$n[2].Vector3,$n[2].Quaternion,$n[2].Transform]},{"a":2,"n":"Return","t":8,"pi":[{"n":"instance","pt":T,"ps":0},{"n":"fallbackPrefab","dv":Bridge.getDefaultValue(T),"o":true,"pt":T,"ps":1}],"sn":"Return","rt":$n[0].Boolean,"p":[T,T],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryResolvePrefabId","t":8,"pi":[{"n":"instance","pt":T,"ps":0},{"n":"fallbackPrefab","pt":T,"ps":1},{"n":"prefabId","out":true,"pt":$n[0].Int32,"ps":2}],"sn":"TryResolvePrefabId","rt":$n[0].Boolean,"p":[T,T,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"bucketsByPrefab","t":4,"rt":$n[5].Dictionary$2(System.Int32,System.Collections.Generic.Queue$1(T)),"sn":"bucketsByPrefab","ro":true},{"a":1,"n":"inactiveInPool","t":4,"rt":$n[5].HashSet$1(T),"sn":"inactiveInPool","ro":true},{"a":1,"n":"poolRoot","t":4,"rt":$n[2].Transform,"sn":"poolRoot","ro":true},{"a":1,"n":"prefabIdByInstance","t":4,"rt":$n[5].Dictionary$2(T,System.Int32),"sn":"prefabIdByInstance","ro":true}]}; }, $n);
    /*HexPoolService+ComponentPool$1 end.*/

    /*HexStack start.*/
    $m("HexStack", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AlignTilesToAnchor","t":8,"sn":"AlignTilesToAnchor","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheGeometryFromTiles","t":8,"sn":"CacheGeometryFromTiles","rt":$n[0].Void},{"a":1,"n":"CompactNullTiles","t":8,"sn":"CompactNullTiles","rt":$n[0].Void},{"a":2,"n":"CountTopTilesWithColorId","t":8,"pi":[{"n":"colorId","pt":$n[0].Int32,"ps":0}],"sn":"CountTopTilesWithColorId","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CreateStack","t":8,"pi":[{"n":"colorIdsBottomToTop","dv":null,"o":true,"pt":$n[0].Array.type(System.Int32),"ps":0}],"sn":"CreateStack","rt":$n[0].Void,"p":[$n[0].Array.type(System.Int32)]},{"a":1,"n":"DetachFromFloor","t":8,"sn":"DetachFromFloor","rt":$n[0].Void},{"a":1,"n":"EnsureTileCount","t":8,"pi":[{"n":"targetCount","pt":$n[0].Int32,"ps":0}],"sn":"EnsureTileCount","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"EnsureTilesInitializedFromChildren","t":8,"sn":"EnsureTilesInitializedFromChildren","rt":$n[0].Void},{"a":1,"n":"GetAnchorBaseLocalPosition","t":8,"sn":"GetAnchorBaseLocalPosition","rt":$n[2].Vector3},{"a":1,"n":"GetLocalPositionForIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetLocalPositionForIndex","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetNextTopWorldPosition","t":8,"sn":"GetNextTopWorldPosition","rt":$n[2].Vector3},{"a":2,"n":"GetTileTemplateForPool","t":8,"sn":"GetTileTemplateForPool","rt":HexTile},{"a":2,"n":"GetTopColorId","t":8,"sn":"GetTopColorId","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTopTile","t":8,"sn":"GetTopTile","rt":HexTile},{"a":2,"n":"GetWorldPositionForTileIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetWorldPositionForTileIndex","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"PopTopTile","t":8,"sn":"PopTopTile","rt":HexTile},{"a":2,"n":"PushTopTile","t":8,"pi":[{"n":"tile","pt":HexTile,"ps":0}],"sn":"PushTopTile","rt":$n[0].Void,"p":[HexTile]},{"a":1,"n":"RefreshVisibilityAndBinding","t":8,"sn":"RefreshVisibilityAndBinding","rt":$n[0].Void},{"a":1,"n":"ResolveActivePaletteColorCount","is":true,"t":8,"pi":[{"n":"config","pt":HexConfig,"ps":0},{"n":"paletteLength","pt":$n[0].Int32,"ps":1}],"sn":"ResolveActivePaletteColorCount","rt":$n[0].Int32,"p":[HexConfig,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ResolveTileColorIdForIndex","is":true,"t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"presetColorIds","pt":$n[0].Array.type(System.Int32),"ps":1},{"n":"paletteLength","pt":$n[0].Int32,"ps":2}],"sn":"ResolveTileColorIdForIndex","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Array.type(System.Int32),$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ResolveTileTemplate","t":8,"sn":"ResolveTileTemplate","rt":HexTile},{"a":2,"n":"SetCurrentFloor","t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0}],"sn":"SetCurrentFloor","rt":$n[0].Void,"p":[HexFloor]},{"a":2,"n":"SetGameContext","t":8,"pi":[{"n":"context","pt":HexGameContext,"ps":0}],"sn":"SetGameContext","rt":$n[0].Void,"p":[HexGameContext]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ActiveStacks","is":true,"t":16,"rt":$n[5].IEnumerable$1(HexStack),"g":{"a":2,"n":"get_ActiveStacks","t":8,"rt":$n[5].IEnumerable$1(HexStack),"fg":"ActiveStacks","is":true},"fn":"ActiveStacks"},{"a":2,"n":"CurrentFloor","t":16,"rt":HexFloor,"g":{"a":2,"n":"get_CurrentFloor","t":8,"rt":HexFloor,"fg":"CurrentFloor"},"fn":"CurrentFloor"},{"a":2,"n":"GameContext","t":16,"rt":HexGameContext,"g":{"a":2,"n":"get_GameContext","t":8,"rt":HexGameContext,"fg":"GameContext"},"fn":"GameContext"},{"a":2,"n":"TileCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_TileCount","t":8,"rt":$n[0].Int32,"fg":"TileCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"TileCount"},{"a":1,"n":"ActiveStackSet","is":true,"t":4,"rt":$n[5].HashSet$1(HexStack),"sn":"ActiveStackSet","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anchorPos","t":4,"rt":$n[2].Transform,"sn":"anchorPos"},{"a":1,"n":"currentFloor","t":4,"rt":HexFloor,"sn":"currentFloor"},{"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexTiles","t":4,"rt":$n[5].List$1(HexTile),"sn":"hexTiles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hideWhenEmpty","t":4,"rt":$n[0].Boolean,"sn":"hideWhenEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"stackInitialized","t":4,"rt":$n[0].Boolean,"sn":"stackInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileBaseLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"tileBaseLocalPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileStep","t":4,"rt":$n[0].Single,"sn":"tileStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileTemplate","t":4,"rt":HexTile,"sn":"tileTemplate"}]}; }, $n);
    /*HexStack end.*/

    /*HexStacksCreator start.*/
    $m("HexStacksCreator", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyContext","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"ApplyContext","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"AreAllPendingStacksPlacedOnFloor","t":8,"sn":"AreAllPendingStacksPlacedOnFloor","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"AssignTopColorsRecursive","t":8,"pi":[{"n":"spawnFloors","pt":$n[5].List$1(HexFloor),"ps":0},{"n":"spawnSet","pt":$n[5].HashSet$1(HexFloor),"ps":1},{"n":"assignedColors","pt":$n[5].Dictionary$2(HexFloor,System.Int32),"ps":2},{"n":"colorCount","pt":$n[0].Int32,"ps":3}],"sn":"AssignTopColorsRecursive","rt":$n[0].Boolean,"p":[$n[5].List$1(HexFloor),$n[5].HashSet$1(HexFloor),$n[5].Dictionary$2(HexFloor,System.Int32),$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"BuildCoordKey","is":true,"t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"z","pt":$n[0].Int32,"ps":1}],"sn":"BuildCoordKey","rt":$n[0].Int64,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"BuildNoSpawnCoordSet","is":true,"t":8,"pi":[{"n":"config","pt":HexConfig,"ps":0}],"sn":"BuildNoSpawnCoordSet","rt":$n[5].HashSet$1(System.Int64),"p":[HexConfig]},{"a":1,"n":"CleanupPendingPlacementStacks","t":8,"sn":"CleanupPendingPlacementStacks","rt":$n[0].Void},{"a":1,"n":"CleanupTrackedStacks","t":8,"sn":"CleanupTrackedStacks","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Clear Existing Stacks")],"a":2,"n":"ClearExistingStacks","t":8,"sn":"ClearExistingStacks","rt":$n[0].Void},{"a":1,"n":"ClearStacksPlacedOnFloors","t":8,"sn":"ClearStacksPlacedOnFloors","rt":$n[0].Void},{"a":1,"n":"CollectSpawnFloors","t":8,"pi":[{"n":"floors","pt":$n[5].IReadOnlyList$1(HexFloor),"ps":0},{"n":"noSpawnCoords","pt":$n[5].HashSet$1(System.Int64),"ps":1}],"sn":"CollectSpawnFloors","rt":$n[5].List$1(HexFloor),"p":[$n[5].IReadOnlyList$1(HexFloor),$n[5].HashSet$1(System.Int64)]},{"a":1,"n":"CreateRuntimeSpawnTemplate","t":8,"sn":"CreateRuntimeSpawnTemplate","rt":$n[0].Void},{"a":1,"n":"DespawnStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"DespawnStack","rt":$n[0].Void,"p":[HexStack]},{"a":2,"n":"FillFloorsWithConfiguredStacks","t":8,"pi":[{"n":"floors","pt":$n[5].IReadOnlyList$1(HexFloor),"ps":0}],"sn":"FillFloorsWithConfiguredStacks","rt":$n[0].Void,"p":[$n[5].IReadOnlyList$1(HexFloor)]},{"a":1,"n":"GetActivePaletteColorCount","t":8,"pi":[{"n":"palette","pt":System.Array.type(UnityEngine.Color),"ps":0}],"sn":"GetActivePaletteColorCount","rt":$n[0].Int32,"p":[System.Array.type(UnityEngine.Color)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetAvailableTopColors","t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0},{"n":"spawnSet","pt":$n[5].HashSet$1(HexFloor),"ps":1},{"n":"assignedColors","pt":$n[5].Dictionary$2(HexFloor,System.Int32),"ps":2},{"n":"colorCount","pt":$n[0].Int32,"ps":3}],"sn":"GetAvailableTopColors","rt":$n[5].List$1(System.Int32),"p":[HexFloor,$n[5].HashSet$1(HexFloor),$n[5].Dictionary$2(HexFloor,System.Int32),$n[0].Int32]},{"a":1,"n":"GetPlayerStackColorIds","t":8,"sn":"GetPlayerStackColorIds","rt":$n[0].Array.type(System.Int32)},{"a":1,"n":"GetRandomPresetColorIds","t":8,"pi":[{"n":"activePaletteColorCount","pt":$n[0].Int32,"ps":0}],"sn":"GetRandomPresetColorIds","rt":$n[0].Array.type(System.Int32),"p":[$n[0].Int32]},{"a":1,"n":"GetSpawnNeighborCount","is":true,"t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0},{"n":"spawnSet","pt":$n[5].HashSet$1(HexFloor),"ps":1}],"sn":"GetSpawnNeighborCount","rt":$n[0].Int32,"p":[HexFloor,$n[5].HashSet$1(HexFloor)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"IsSlotOccupied","t":8,"pi":[{"n":"slot","pt":$n[2].Transform,"ps":0}],"sn":"IsSlotOccupied","rt":$n[0].Boolean,"p":[$n[2].Transform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LogGeneratedFloorFill","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogGeneratedFloorFill","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"LogStacksCreator","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogStacksCreator","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"MarkInitialPlayerStacksCompleted","t":8,"sn":"MarkInitialPlayerStacksCompleted","rt":$n[0].Void},{"a":1,"n":"NormalizeColorId","is":true,"t":8,"pi":[{"n":"colorId","pt":$n[0].Int32,"ps":0},{"n":"colorCount","pt":$n[0].Int32,"ps":1}],"sn":"NormalizeColorId","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"NormalizePresetColorIds","is":true,"t":8,"pi":[{"n":"presetColorIds","pt":$n[0].Array.type(System.Int32),"ps":0},{"n":"colorCount","pt":$n[0].Int32,"ps":1}],"sn":"NormalizePresetColorIds","rt":$n[0].Array.type(System.Int32),"p":[$n[0].Array.type(System.Int32),$n[0].Int32]},{"a":2,"n":"NotifyStackPlaced","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"NotifyStackPlaced","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"PrewarmStacks","t":8,"sn":"PrewarmStacks","rt":$n[0].Void},{"a":1,"n":"RegisterPendingPlacementStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"RegisterPendingPlacementStack","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"RentStack","t":8,"pi":[{"n":"prefab","pt":HexStack,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"parent","pt":$n[2].Transform,"ps":3}],"sn":"RentStack","rt":HexStack,"p":[HexStack,$n[2].Vector3,$n[2].Quaternion,$n[2].Transform]},{"a":1,"n":"ResolveBottomColorId","t":8,"pi":[{"n":"topColorId","pt":$n[0].Int32,"ps":0},{"n":"paletteLength","pt":$n[0].Int32,"ps":1}],"sn":"ResolveBottomColorId","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ResolveTileTemplateForPool","t":8,"sn":"ResolveTileTemplateForPool","rt":HexTile},{"a":1,"n":"SpawnConfiguredFloorStack","t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0},{"n":"prefab","pt":HexStack,"ps":1},{"n":"topColorId","pt":$n[0].Int32,"ps":2},{"n":"activePaletteColorCount","pt":$n[0].Int32,"ps":3}],"sn":"SpawnConfiguredFloorStack","rt":$n[0].Boolean,"p":[HexFloor,HexStack,$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"SpawnStacksIntoSlots","t":8,"sn":"SpawnStacksIntoSlots","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TryBuildFivePlusFiveColorIds","t":8,"pi":[{"n":"activePaletteColorCount","pt":$n[0].Int32,"ps":0},{"n":"colorIdsBottomToTop","out":true,"pt":$n[0].Array.type(System.Int32),"ps":1}],"sn":"TryBuildFivePlusFiveColorIds","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[0].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryBuildTopColorAssignment","t":8,"pi":[{"n":"spawnFloors","pt":$n[5].List$1(HexFloor),"ps":0},{"n":"colorCount","pt":$n[0].Int32,"ps":1},{"n":"topColorByFloor","out":true,"pt":$n[5].Dictionary$2(HexFloor,System.Int32),"ps":2}],"sn":"TryBuildTopColorAssignment","rt":$n[0].Boolean,"p":[$n[5].List$1(HexFloor),$n[0].Int32,$n[5].Dictionary$2(HexFloor,System.Int32)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryRecycleEmptyStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"TryRecycleEmptyStack","rt":$n[0].Boolean,"p":[HexStack],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TrySpawnIntoSlotsByPlacementState","t":8,"pi":[{"n":"respectRespawnToggle","pt":$n[0].Boolean,"ps":0}],"sn":"TrySpawnIntoSlotsByPlacementState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"HexConfig","t":16,"rt":HexConfig,"g":{"a":1,"n":"get_HexConfig","t":8,"rt":HexConfig,"fg":"HexConfig"},"fn":"HexConfig"},{"a":2,"n":"InitialPlayerStacksCompleted","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_InitialPlayerStacksCompleted","t":8,"rt":$n[0].Boolean,"fg":"InitialPlayerStacksCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_InitialPlayerStacksCompleted","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"InitialPlayerStacksCompleted"},"fn":"InitialPlayerStacksCompleted"},{"a":1,"n":"PoolService","t":16,"rt":HexPoolService,"g":{"a":1,"n":"get_PoolService","t":8,"rt":HexPoolService,"fg":"PoolService"},"fn":"PoolService"},{"a":1,"n":"GeneratedBottomLayerCount","is":true,"t":4,"rt":$n[0].Int32,"sn":"GeneratedBottomLayerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GeneratedTopLayerCount","is":true,"t":4,"rt":$n[0].Int32,"sn":"GeneratedTopLayerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearExistingOnStart","t":4,"rt":$n[0].Boolean,"sn":"clearExistingOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"debugLogs","t":4,"rt":$n[0].Boolean,"sn":"debugLogs","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"a":1,"n":"hasSpawnedStacks","t":4,"rt":$n[0].Boolean,"sn":"hasSpawnedStacks","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Generated Floor Fill"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logGeneratedFill","t":4,"rt":$n[0].Boolean,"sn":"logGeneratedFill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pendingPlacementStacks","t":4,"rt":$n[5].HashSet$1(HexStack),"sn":"pendingPlacementStacks","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"respawnWhenAllPlaced","t":4,"rt":$n[0].Boolean,"sn":"respawnWhenAllPlaced","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"runtimePooledStacks","t":4,"rt":$n[5].HashSet$1(HexStack),"sn":"runtimePooledStacks","ro":true},{"a":1,"n":"runtimeSpawnTemplate","t":4,"rt":HexStack,"sn":"runtimeSpawnTemplate"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotOccupancyRadius","t":4,"rt":$n[0].Single,"sn":"slotOccupancyRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnOnStart","t":4,"rt":$n[0].Boolean,"sn":"spawnOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnSlotsOnlyOnce","t":4,"rt":$n[0].Boolean,"sn":"spawnSlotsOnlyOnce","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnStackPrefab","t":4,"rt":HexStack,"sn":"spawnStackPrefab"},{"a":1,"n":"stackQueryBuffer","t":4,"rt":$n[5].List$1(HexStack),"sn":"stackQueryBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackSlots","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"stackSlots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stacksRoot","t":4,"rt":$n[2].Transform,"sn":"stacksRoot"},{"a":1,"backing":true,"n":"<InitialPlayerStacksCompleted>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"InitialPlayerStacksCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexStacksCreator end.*/

    /*HexTile start.*/
    $m("HexTile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyColor","t":8,"pi":[{"n":"color","pt":$n[2].Color,"ps":0}],"sn":"ApplyColor","rt":$n[0].Void,"p":[$n[2].Color]},{"a":2,"n":"ClearColor","t":8,"sn":"ClearColor","rt":$n[0].Void},{"a":2,"n":"SetColor","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"color","pt":$n[2].Color,"ps":1}],"sn":"SetColor","rt":$n[0].Void,"p":[$n[0].Int32,$n[2].Color]},{"a":2,"n":"TryGetColor","t":8,"pi":[{"n":"color","out":true,"pt":$n[2].Color,"ps":0}],"sn":"TryGetColor","rt":$n[0].Boolean,"p":[$n[2].Color],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ColorIdValue","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_ColorIdValue","t":8,"rt":$n[0].Int32,"fg":"ColorIdValue","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ColorIdValue"},{"a":2,"n":"CurrentColor","t":16,"rt":$n[2].Color,"g":{"a":2,"n":"get_CurrentColor","t":8,"rt":$n[2].Color,"fg":"CurrentColor"},"fn":"CurrentColor"},{"a":2,"n":"HasColor","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasColor","t":8,"rt":$n[0].Boolean,"fg":"HasColor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasColor"},{"a":1,"n":"BaseColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"BaseColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ColorId","is":true,"t":4,"rt":$n[0].Int32,"sn":"ColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"colorId","t":4,"rt":$n[0].Int32,"sn":"colorId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"colorPropertyBlock","t":4,"rt":$n[2].MaterialPropertyBlock,"sn":"colorPropertyBlock"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentColor","t":4,"rt":$n[2].Color,"sn":"currentColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"myMeshRenderer","t":4,"rt":$n[2].MeshRenderer,"sn":"myMeshRenderer"}]}; }, $n);
    /*HexTile end.*/

    /*HexTransferAnimator start.*/
    $m("HexTransferAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CompleteAfterTweens","t":8,"pi":[{"n":"tweens","pt":$n[5].List$1(DG.Tweening.Tween),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"CompleteAfterTweens","rt":$n[0].Void,"p":[$n[5].List$1(DG.Tweening.Tween),Function]},{"a":1,"n":"CreateTileTransferTween","t":8,"pi":[{"n":"tile","pt":HexTile,"ps":0},{"n":"sourceFloor","pt":HexFloor,"ps":1},{"n":"targetFloor","pt":HexFloor,"ps":2},{"n":"targetPosition","pt":$n[2].Vector3,"ps":3},{"n":"startDelay","pt":$n[0].Single,"ps":4},{"n":"flipDuration","pt":$n[0].Single,"ps":5},{"n":"settleDuration","pt":$n[0].Single,"ps":6}],"sn":"CreateTileTransferTween","rt":$n[3].Tween,"p":[HexTile,HexFloor,HexFloor,$n[2].Vector3,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"GetNeighborDirection","t":8,"pi":[{"n":"sourceFloor","pt":HexFloor,"ps":0},{"n":"targetFloor","pt":HexFloor,"ps":1},{"n":"up","pt":$n[2].Vector3,"ps":2}],"sn":"GetNeighborDirection","rt":$n[2].Vector3,"p":[HexFloor,HexFloor,$n[2].Vector3]},{"a":1,"n":"GetStackName","is":true,"t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"GetStackName","rt":$n[0].String,"p":[HexStack]},{"a":1,"n":"LogTransferAnimator","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogTransferAnimator","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"TransferTopTilesFan","t":8,"pi":[{"n":"sourceStack","pt":HexStack,"ps":0},{"n":"sourceFloor","pt":HexFloor,"ps":1},{"n":"targetStack","pt":HexStack,"ps":2},{"n":"targetFloor","pt":HexFloor,"ps":3},{"n":"transferCount","pt":$n[0].Int32,"ps":4},{"n":"speedMultiplier","pt":$n[0].Single,"ps":5},{"n":"onComplete","pt":Function,"ps":6}],"sn":"TransferTopTilesFan","rt":$n[0].Void,"p":[HexStack,HexFloor,HexStack,HexFloor,$n[0].Int32,$n[0].Single,Function]},{"at":[new UnityEngine.HeaderAttribute("Runtime"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logTransferAnimatorEvents","t":4,"rt":$n[0].Boolean,"sn":"logTransferAnimatorEvents","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileFlipDuration","t":4,"rt":$n[0].Single,"sn":"tileFlipDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileFlipEase","t":4,"rt":$n[3].Ease,"sn":"tileFlipEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileSettleDuration","t":4,"rt":$n[0].Single,"sn":"tileSettleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileSettleEase","t":4,"rt":$n[3].Ease,"sn":"tileSettleEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileTransferFanStagger","t":4,"rt":$n[0].Single,"sn":"tileTransferFanStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HexTransferAnimator end.*/

    /*LunaBridge start.*/
    $m("LunaBridge", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GameEnded","is":true,"t":8,"sn":"GameEnded","rt":$n[0].Void},{"a":2,"n":"InstallFullGame","is":true,"t":8,"sn":"InstallFullGame","rt":$n[0].Void}]}; }, $n);
    /*LunaBridge end.*/

    /*PackshotController start.*/
    $m("PackshotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"HidePackshot","t":8,"sn":"HidePackshot","rt":$n[0].Void},{"a":1,"n":"KillFadeTween","t":8,"sn":"KillFadeTween","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnPlayNowPressed","t":8,"sn":"OnPlayNowPressed","rt":$n[0].Void},{"a":1,"n":"SetStaticContentActive","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0}],"sn":"SetStaticContentActive","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SetVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetVisible","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Single]},{"a":2,"n":"ShowPackshot","t":8,"sn":"ShowPackshot","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WasPointerPressedThisFrame","t":8,"sn":"WasPointerPressedThisFrame","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundObject","t":4,"rt":$n[2].GameObject,"sn":"backgroundObject"},{"at":[new UnityEngine.HeaderAttribute("Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeEase","t":4,"rt":$n[3].Ease,"sn":"fadeEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":1,"n":"fadeTween","t":4,"rt":$n[3].Tween,"sn":"fadeTween"},{"at":[new UnityEngine.HeaderAttribute("Behaviour"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hideOnStart","t":4,"rt":$n[0].Boolean,"sn":"hideOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isShown","t":4,"rt":$n[0].Boolean,"sn":"isShown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logoObject","t":4,"rt":$n[2].GameObject,"sn":"logoObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshotCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"packshotCanvasGroup"},{"at":[new UnityEngine.HeaderAttribute("Bindings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshotRoot","t":4,"rt":$n[2].GameObject,"sn":"packshotRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowButtonObject","t":4,"rt":$n[2].GameObject,"sn":"playNowButtonObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"reactToAnyTap","t":4,"rt":$n[0].Boolean,"sn":"reactToAnyTap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PackshotShown","t":2,"ad":{"a":2,"n":"add_PackshotShown","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPackshotShown","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_PackshotShown","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePackshotShown","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*PackshotController end.*/

    /*PlayableUIRoot start.*/
    $m("PlayableUIRoot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleCountdownFinished","t":8,"sn":"HandleCountdownFinished","rt":$n[0].Void},{"a":1,"n":"HandleFirstTransferAndClearChainFinished","t":8,"sn":"HandleFirstTransferAndClearChainFinished","rt":$n[0].Void},{"a":1,"n":"HandlePackshotShown","t":8,"sn":"HandlePackshotShown","rt":$n[0].Void},{"a":1,"n":"IsEndGameAfterFirstChainEnabled","t":8,"sn":"IsEndGameAfterFirstChainEnabled","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"ShowPackshot","t":8,"sn":"ShowPackshot","rt":$n[0].Void},{"a":2,"n":"StartCountdownTimer","t":8,"sn":"StartCountdownTimer","rt":$n[0].Void},{"a":2,"n":"StartTutorial","t":8,"sn":"StartTutorial","rt":$n[0].Void},{"a":2,"n":"StopCountdownTimer","t":8,"sn":"StopCountdownTimer","rt":$n[0].Void},{"a":2,"n":"StopTutorial","t":8,"sn":"StopTutorial","rt":$n[0].Void},{"a":1,"n":"SubscribeManagerEvents","t":8,"sn":"SubscribeManagerEvents","rt":$n[0].Void},{"a":1,"n":"TryGetConfiguredGameDuration","t":8,"pi":[{"n":"durationSeconds","out":true,"pt":$n[0].Single,"ps":0}],"sn":"TryGetConfiguredGameDuration","rt":$n[0].Boolean,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"UnsubscribeManagerEvents","t":8,"sn":"UnsubscribeManagerEvents","rt":$n[0].Void},{"a":2,"n":"CountdownTimerPanel","t":16,"rt":CountdownTimerPanel,"g":{"a":2,"n":"get_CountdownTimerPanel","t":8,"rt":CountdownTimerPanel,"fg":"CountdownTimerPanel"},"fn":"CountdownTimerPanel"},{"a":2,"n":"PackshotController","t":16,"rt":PackshotController,"g":{"a":2,"n":"get_PackshotController","t":8,"rt":PackshotController,"fg":"PackshotController"},"fn":"PackshotController"},{"a":2,"n":"TutorialController","t":16,"rt":TutorialOverlayController,"g":{"a":2,"n":"get_TutorialController","t":8,"rt":TutorialOverlayController,"fg":"TutorialController"},"fn":"TutorialController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"countdownTimerPanel","t":4,"rt":CountdownTimerPanel,"sn":"countdownTimerPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshotController","t":4,"rt":PackshotController,"sn":"packshotController"},{"a":1,"n":"subscribedManager","t":4,"rt":HexManager,"sn":"subscribedManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialController","t":4,"rt":TutorialOverlayController,"sn":"tutorialController"}]}; }, $n);
    /*PlayableUIRoot end.*/

    /*TutorialOverlayController start.*/
    $m("TutorialOverlayController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AreInitialGenerationSystemsReady","t":8,"sn":"AreInitialGenerationSystemsReady","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"AreInitialGenerationSystemsReady","t":8,"pi":[{"n":"details","out":true,"pt":$n[0].String,"ps":0}],"sn":"AreInitialGenerationSystemsReady$1","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"DisableTutorialPermanently","t":8,"sn":"DisableTutorialPermanently","rt":$n[0].Void},{"a":1,"n":"GetFloorName","is":true,"t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0}],"sn":"GetFloorName","rt":$n[0].String,"p":[HexFloor]},{"a":1,"n":"GetStackName","is":true,"t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"GetStackName","rt":$n[0].String,"p":[HexStack]},{"a":1,"n":"HandleDragFinished","t":8,"pi":[{"n":"draggedStack","pt":HexStack,"ps":0},{"n":"successfulDrop","pt":$n[0].Boolean,"ps":1}],"sn":"HandleDragFinished","rt":$n[0].Void,"p":[HexStack,$n[0].Boolean]},{"a":1,"n":"HandleDragStarted","t":8,"pi":[{"n":"draggedStack","pt":HexStack,"ps":0}],"sn":"HandleDragStarted","rt":$n[0].Void,"p":[HexStack]},{"a":1,"n":"HasNeighborWithTopColor","t":8,"pi":[{"n":"centerFloor","pt":HexFloor,"ps":0},{"n":"colorId","pt":$n[0].Int32,"ps":1}],"sn":"HasNeighborWithTopColor","rt":$n[0].Boolean,"p":[HexFloor,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsMatchingNeighborStack","is":true,"t":8,"pi":[{"n":"floor","pt":HexFloor,"ps":0},{"n":"colorId","pt":$n[0].Int32,"ps":1}],"sn":"IsMatchingNeighborStack","rt":$n[0].Boolean,"p":[HexFloor,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"KillHandTween","t":8,"sn":"KillHandTween","rt":$n[0].Void},{"a":1,"n":"LogTutorial","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogTutorial","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"PlayHandLoop","t":8,"sn":"PlayHandLoop","rt":$n[0].Void},{"a":2,"n":"ResetTutorialState","t":8,"sn":"ResetTutorialState","rt":$n[0].Void},{"a":1,"n":"ResolveManager","t":8,"sn":"ResolveManager","rt":HexManager},{"a":1,"n":"ResolveWorldCamera","t":8,"sn":"ResolveWorldCamera","rt":$n[2].Camera},{"a":1,"n":"RestartTutorialAfterDelayRoutine","t":8,"sn":"RestartTutorialAfterDelayRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"SelectBestTargetFloor","is":true,"t":8,"pi":[{"n":"sourceStack","pt":HexStack,"ps":0},{"n":"candidateFloors","pt":$n[5].List$1(HexFloor),"ps":1}],"sn":"SelectBestTargetFloor","rt":HexFloor,"p":[HexStack,$n[5].List$1(HexFloor)]},{"a":1,"n":"SelectBottomMostPlayerStack","t":8,"pi":[{"n":"stacks","pt":$n[5].List$1(HexStack),"ps":0}],"sn":"SelectBottomMostPlayerStack","rt":HexStack,"p":[$n[5].List$1(HexStack)]},{"a":1,"n":"SetTutorialVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetTutorialVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartTutorial","t":8,"sn":"StartTutorial","rt":$n[0].Void},{"a":1,"n":"StartTutorialAfterBootstrap","t":8,"sn":"StartTutorialAfterBootstrap","rt":$n[4].IEnumerator},{"a":1,"n":"StopRestartRoutine","t":8,"sn":"StopRestartRoutine","rt":$n[0].Void},{"a":2,"n":"StopTutorial","t":8,"sn":"StopTutorial","rt":$n[0].Void},{"a":1,"n":"TryConvertWorldToUiPosition","t":8,"pi":[{"n":"worldPosition","pt":$n[2].Vector3,"ps":0},{"n":"uiPosition","out":true,"pt":$n[2].Vector3,"ps":1}],"sn":"TryConvertWorldToUiPosition","rt":$n[0].Boolean,"p":[$n[2].Vector3,$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryFindTutorialMovePair","t":8,"pi":[{"n":"sourceStack","out":true,"pt":HexStack,"ps":0},{"n":"targetFloor","out":true,"pt":HexFloor,"ps":1}],"sn":"TryFindTutorialMovePair","rt":$n[0].Boolean,"p":[HexStack,HexFloor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryResolveDynamicHandTargets","t":8,"pi":[{"n":"fromPosition","out":true,"pt":$n[2].Vector3,"ps":0},{"n":"toPosition","out":true,"pt":$n[2].Vector3,"ps":1}],"sn":"TryResolveDynamicHandTargets","rt":$n[0].Boolean,"p":[$n[2].Vector3,$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryResolveHandTargets","t":8,"pi":[{"n":"fromPosition","out":true,"pt":$n[2].Vector3,"ps":0},{"n":"toPosition","out":true,"pt":$n[2].Vector3,"ps":1}],"sn":"TryResolveHandTargets","rt":$n[0].Boolean,"p":[$n[2].Vector3,$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"cachedFallbackWorldCamera","t":4,"rt":$n[2].Camera,"sn":"cachedFallbackWorldCamera"},{"a":1,"n":"cachedManager","t":4,"rt":HexManager,"sn":"cachedManager"},{"a":1,"n":"candidateChainFloorsBuffer","t":4,"rt":$n[5].List$1(HexFloor),"sn":"candidateChainFloorsBuffer","ro":true},{"a":1,"n":"candidateFreeFloorsBuffer","t":4,"rt":$n[5].List$1(HexFloor),"sn":"candidateFreeFloorsBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasRoot","t":4,"rt":$n[2].RectTransform,"sn":"canvasRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"debugLogs","t":4,"rt":$n[0].Boolean,"sn":"debugLogs","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallbackScanInterval","t":4,"rt":$n[0].Single,"sn":"fallbackScanInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fromAnchor","t":4,"rt":$n[2].RectTransform,"sn":"fromAnchor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameContext","t":4,"rt":HexGameContext,"sn":"gameContext"},{"at":[new UnityEngine.HeaderAttribute("Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handMoveDuration","t":4,"rt":$n[0].Single,"sn":"handMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handMoveEase","t":4,"rt":$n[3].Ease,"sn":"handMoveEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handPauseDuration","t":4,"rt":$n[0].Single,"sn":"handPauseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handScreenOffset","t":4,"rt":$n[2].Vector2,"sn":"handScreenOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handTransform","t":4,"rt":$n[2].RectTransform,"sn":"handTransform"},{"a":1,"n":"handTween","t":4,"rt":$n[3].Tween,"sn":"handTween"},{"a":1,"n":"hasStarted","t":4,"rt":$n[0].Boolean,"sn":"hasStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isCompleted","t":4,"rt":$n[0].Boolean,"sn":"isCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPermanentlyDisabled","t":4,"rt":$n[0].Boolean,"sn":"isPermanentlyDisabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"nextBootstrapStateLogAt","t":4,"rt":$n[0].Single,"sn":"nextBootstrapStateLogAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextFloorFallbackScanAt","t":4,"rt":$n[0].Single,"sn":"nextFloorFallbackScanAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextStackFallbackScanAt","t":4,"rt":$n[0].Single,"sn":"nextStackFallbackScanAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restartDelay","t":4,"rt":$n[0].Single,"sn":"restartDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"restartRoutine","t":4,"rt":$n[2].Coroutine,"sn":"restartRoutine"},{"at":[new UnityEngine.HeaderAttribute("Behaviour"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startOnEnable","t":4,"rt":$n[0].Boolean,"sn":"startOnEnable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toAnchor","t":4,"rt":$n[2].RectTransform,"sn":"toAnchor"},{"at":[new UnityEngine.HeaderAttribute("Bindings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialRoot","t":4,"rt":$n[2].GameObject,"sn":"tutorialRoot"},{"a":1,"n":"tutorialStacksBuffer","t":4,"rt":$n[5].List$1(HexStack),"sn":"tutorialStacksBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uiCamera","t":4,"rt":$n[2].Camera,"sn":"uiCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useDynamicWorldTargets","t":4,"rt":$n[0].Boolean,"sn":"useDynamicWorldTargets","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"worldCamera","t":4,"rt":$n[2].Camera,"sn":"worldCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"worldTargetHeightOffset","t":4,"rt":$n[0].Single,"sn":"worldTargetHeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TutorialOverlayController end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[3].DOTweenCYInstruction.WaitForCompletion,$n[3].DOTweenCYInstruction.WaitForRewind,$n[3].DOTweenCYInstruction.WaitForKill,$n[3].DOTweenCYInstruction.WaitForElapsedLoops,$n[3].DOTweenCYInstruction.WaitForPosition,$n[3].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[3].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Tween],"pi":[{"n":"tween","pt":$n[3].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[3].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[3].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[8].Path,$n[0].Single,$n[3].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[3].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[3].PathType,$n[3].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[3].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[3].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[8].Path,$n[0].Single,$n[3].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[3].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[3].PathType,$n[3].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[3].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[3].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[3].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[8].Path,$n[0].Single,$n[3].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[3].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[3].PathType,$n[3].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[8].Path,$n[0].Single,$n[3].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[3].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[3].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[3].PathType,$n[3].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[3].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[3].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[3].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[3].Tweener,"p":[$n[1].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[3].Tweener,"p":[$n[1].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[3].Tweener,"p":[$n[1].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[1].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[3].Sequence,"p":[$n[1].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[3].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[3].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[3].Tweener,"p":[$n[1].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[3].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[3].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[3].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[3].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[3].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[3].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[3].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[3].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[1].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[3].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[3].Tweener,"p":[$n[1].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[3].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[3].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[3].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[3].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[3].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[3].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[8].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[3].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[8].Path,$n[0].Single,$n[3].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[3].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[10].PathOptions,$n[3].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});

using DG.Tweening;
using System;
using UnityEngine;
using UnityEngine.UI;

[DisallowMultipleComponent]
/// <summary>
/// UI-панель обратного отсчета с цветовыми состояниями и эффектом тревоги на малом времени.
/// </summary>
public class CountdownTimerPanel : MonoBehaviour
{
    [Header("Timer")]
    [SerializeField] private HexGameContext gameContext;
    [SerializeField] private float durationSeconds = 20f;
    [SerializeField] private bool autoStartOnEnable = true;
    [SerializeField, Range(0.05f, 0.95f)] private float lowTimeThresholdNormalized = 0.2f;

    [Header("Colors")]
    [SerializeField] private Color barFrameNormalColor = new(0.11f, 0.38f, 0.86f, 1f);
    [SerializeField] private Color barBackNormalColor = new(0.06f, 0.22f, 0.58f, 1f);
    [SerializeField] private Color barFillNormalColor = new(0.35f, 0.95f, 0.18f, 1f);
    [SerializeField] private Color iconFrameNormalColor = new(0.1f, 0.37f, 0.86f, 1f);
    [SerializeField] private Color iconBackNormalColor = new(0.98f, 0.99f, 1f, 1f);

    [SerializeField] private Color barFrameLowColor = new(0.93f, 0.12f, 0.12f, 1f);
    [SerializeField] private Color barBackLowColor = new(0.55f, 0.02f, 0.02f, 1f);
    [SerializeField] private Color barFillLowColor = new(0.95f, 0.17f, 0.17f, 1f);
    [SerializeField] private Color iconFrameLowColor = new(0.93f, 0.12f, 0.12f, 1f);
    [SerializeField] private Color iconBackLowColor = new(1f, 0.92f, 0.92f, 1f);

    [Header("Arrow")]
    [SerializeField] private float arrowStartAngle = 45f;
    [SerializeField] private float arrowEndAngle = -235f;
    [SerializeField] private Color arrowNormalColor = new(0.9f, 0.2f, 0.2f, 1f);

    [Header("Low Time FX")]
    [SerializeField] private float iconShakeDuration = 0.24f;
    [SerializeField] private float iconShakeStrength = 9f;
    [SerializeField] private int iconShakeVibrato = 18;
    [SerializeField, Range(0.02f, 0.9f)] private float lowBackdropBlendRange = 0.16f;

    [Header("Bindings")]
    [SerializeField] private RectTransform panelRoot;
    [SerializeField] private Image barFrameImage;
    [SerializeField] private Image barBackImage;
    [SerializeField] private Image barFillImage;
    [SerializeField] private RectTransform iconRoot;
    [SerializeField] private Image iconFrameImage;
    [SerializeField] private Image iconBackImage;
    [SerializeField] private Image iconNubImage;
    [SerializeField] private RectTransform arrowTransform;
    [SerializeField] private Image arrowImage;

    private float remainingSeconds;
    private bool isRunning;
    private bool lowStateEnabled;
    private Tween iconShakeTween;
    public event Action CountdownFinished;

    public bool IsRunning => isRunning;
    public float RemainingSeconds => remainingSeconds;

    private void Awake()
    {
        ApplyConfiguredDurationFromConfig();
        ConfigureStaticBindings();
        ResetToInitialState();
    }

    private void OnEnable()
    {
        if (autoStartOnEnable)
        {
            ApplyConfiguredDurationFromConfig();
            StartCountdown();
            return;
        }

        StopCountdown();
        ResetToInitialState();
    }

    private void OnDisable()
    {
        StopShake();
    }

    private void Update()
    {
        if (!isRunning)
        {
            return;
        }

        remainingSeconds = Mathf.Max(0f, remainingSeconds - Time.deltaTime);

        float duration = Mathf.Max(0.0001f, durationSeconds);
        float normalizedTime = remainingSeconds / duration;
        UpdateVisuals(normalizedTime);

        if (remainingSeconds > 0f)
        {
            return;
        }

        isRunning = false;
        StopShake();
        LogTimerEvent("Time is over");
        CountdownFinished?.Invoke();
    }

    public void StartCountdown()
    {
        durationSeconds = Mathf.Max(0.1f, durationSeconds);
        remainingSeconds = durationSeconds;
        isRunning = true;
        lowStateEnabled = false;
        StopShake();
        UpdateVisuals(1f);
    }

    public void StopCountdown()
    {
        isRunning = false;
        StopShake();
    }

    public void RestartCountdown(float newDurationSeconds)
    {
        durationSeconds = Mathf.Max(0.1f, newDurationSeconds);
        StartCountdown();
    }

    private void ApplyConfiguredDurationFromConfig()
    {
        HexConfig config = gameContext != null ? gameContext.Config : null;
        if (config == null)
        {
            return;
        }

        durationSeconds = Mathf.Max(0.1f, config.gameDurationSeconds);
    }

    private void ConfigureStaticBindings()
    {
        if (barFillImage != null)
        {
            barFillImage.type = Image.Type.Filled;
            barFillImage.fillMethod = Image.FillMethod.Horizontal;
            barFillImage.fillOrigin = (int)Image.OriginHorizontal.Left;
            barFillImage.fillAmount = 1f;
        }

        if (arrowImage != null)
        {
            arrowImage.color = arrowNormalColor;
        }

        if (panelRoot == null)
        {
            LogTimerWarning("CountdownTimerPanel: panelRoot is not assigned.");
        }
    }

    private void ResetToInitialState()
    {
        remainingSeconds = Mathf.Max(0.1f, durationSeconds);
        lowStateEnabled = false;
        StopShake();
        UpdateVisuals(1f);
    }

    private void UpdateVisuals(float normalizedTime)
    {
        normalizedTime = Mathf.Clamp01(normalizedTime);

        if (barFillImage != null)
        {
            barFillImage.fillAmount = normalizedTime;
        }

        bool shouldBeLow = normalizedTime <= lowTimeThresholdNormalized;
        if (shouldBeLow != lowStateEnabled)
        {
            lowStateEnabled = shouldBeLow;

            if (lowStateEnabled)
            {
                StartShake();
            }
            else
            {
                StopShake();
            }
        }

        float fillBlend = Mathf.SmoothStep(0f, 1f, 1f - normalizedTime);

        float lowBlendStart = Mathf.Clamp01(lowTimeThresholdNormalized + lowBackdropBlendRange);
        float lowBackdropBlend = Mathf.InverseLerp(lowBlendStart, lowTimeThresholdNormalized, normalizedTime);
        lowBackdropBlend = Mathf.SmoothStep(0f, 1f, lowBackdropBlend);

        Color frameColor = Color.Lerp(barFrameNormalColor, barFrameLowColor, lowBackdropBlend);
        Color backColor = Color.Lerp(barBackNormalColor, barBackLowColor, lowBackdropBlend);
        Color fillColor = Color.Lerp(barFillNormalColor, barFillLowColor, fillBlend);
        Color iconFrameColor = Color.Lerp(iconFrameNormalColor, iconFrameLowColor, lowBackdropBlend);
        Color iconBackColor = Color.Lerp(iconBackNormalColor, iconBackLowColor, lowBackdropBlend);

        if (barFrameImage != null)
        {
            barFrameImage.color = frameColor;
        }

        if (barBackImage != null)
        {
            barBackImage.color = backColor;
        }

        if (barFillImage != null)
        {
            barFillImage.color = fillColor;
        }

        if (iconFrameImage != null)
        {
            iconFrameImage.color = iconFrameColor;
        }

        if (iconBackImage != null)
        {
            iconBackImage.color = iconBackColor;
        }

        if (iconNubImage != null)
        {
            iconNubImage.color = iconFrameColor;
        }

        if (arrowImage != null)
        {
            arrowImage.color = arrowNormalColor;
        }

        if (arrowTransform != null)
        {
            float zAngle = Mathf.Lerp(arrowEndAngle, arrowStartAngle, normalizedTime);
            arrowTransform.localRotation = Quaternion.Euler(0f, 0f, zAngle);
        }
    }

    private void StartShake()
    {
        if (iconRoot == null)
        {
            return;
        }

        StopShake();
        iconShakeTween = iconRoot
            .DOShakeRotation(
                iconShakeDuration,
                new Vector3(0f, 0f, iconShakeStrength),
                iconShakeVibrato,
                90f,
                false
            )
            .SetLoops(-1, LoopType.Restart)
            .SetEase(Ease.Linear);
    }

    private void StopShake()
    {
        if (iconShakeTween != null)
        {
            if (iconShakeTween.IsActive())
            {
                iconShakeTween.Kill(false);
            }

            iconShakeTween = null;
        }

        if (iconRoot != null)
        {
            iconRoot.localRotation = Quaternion.identity;
        }
    }

    [System.Diagnostics.Conditional("UNITY_EDITOR")]
    [System.Diagnostics.Conditional("DEVELOPMENT_BUILD")]
    private void LogTimerEvent(string message)
    {
        Debug.Log(message, this);
    }

    [System.Diagnostics.Conditional("UNITY_EDITOR")]
    [System.Diagnostics.Conditional("DEVELOPMENT_BUILD")]
    private void LogTimerWarning(string message)
    {
        Debug.LogWarning(message, this);
    }
}


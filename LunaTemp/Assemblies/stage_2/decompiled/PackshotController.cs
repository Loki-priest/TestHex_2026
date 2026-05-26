using System;
using DG.Tweening;
using UnityEngine;

public class PackshotController : MonoBehaviour
{
	[Header("Bindings")]
	[SerializeField]
	private GameObject packshotRoot;

	[SerializeField]
	private CanvasGroup packshotCanvasGroup;

	[SerializeField]
	private GameObject backgroundObject;

	[SerializeField]
	private GameObject logoObject;

	[SerializeField]
	private GameObject playNowButtonObject;

	[Header("Behaviour")]
	[SerializeField]
	private bool hideOnStart = true;

	[SerializeField]
	private bool reactToAnyTap = true;

	[Header("Animation")]
	[SerializeField]
	private float fadeDuration = 0.35f;

	[SerializeField]
	private Ease fadeEase = Ease.OutQuad;

	private Tween fadeTween;

	private bool isShown;

	public event Action PackshotShown;

	private void Awake()
	{
		if (hideOnStart)
		{
			SetVisible(false, 0f);
		}
	}

	private void OnDisable()
	{
		KillFadeTween();
	}

	private void Update()
	{
		if (isShown && reactToAnyTap && WasPointerPressedThisFrame())
		{
			LunaBridge.InstallFullGame();
		}
	}

	public void ShowPackshot()
	{
		if (!isShown)
		{
			isShown = true;
			SetStaticContentActive(true);
			if (packshotRoot != null)
			{
				packshotRoot.SetActive(true);
			}
			KillFadeTween();
			if (packshotCanvasGroup != null)
			{
				packshotCanvasGroup.alpha = 0f;
				packshotCanvasGroup.interactable = true;
				packshotCanvasGroup.blocksRaycasts = true;
				fadeTween = packshotCanvasGroup.DOFade(1f, fadeDuration).SetEase(fadeEase);
			}
			this.PackshotShown?.Invoke();
			LunaBridge.GameEnded();
		}
	}

	public void HidePackshot()
	{
		isShown = false;
		KillFadeTween();
		SetVisible(false, 0f);
	}

	public void OnPlayNowPressed()
	{
		LunaBridge.InstallFullGame();
	}

	private void SetVisible(bool visible, float alpha)
	{
		if (packshotRoot != null)
		{
			packshotRoot.SetActive(visible);
		}
		SetStaticContentActive(visible);
		if (packshotCanvasGroup != null)
		{
			packshotCanvasGroup.alpha = alpha;
			packshotCanvasGroup.interactable = visible;
			packshotCanvasGroup.blocksRaycasts = visible;
		}
	}

	private void SetStaticContentActive(bool active)
	{
		if (backgroundObject != null)
		{
			backgroundObject.SetActive(active);
		}
		if (logoObject != null)
		{
			logoObject.SetActive(active);
		}
		if (playNowButtonObject != null)
		{
			playNowButtonObject.SetActive(active);
		}
	}

	private void KillFadeTween()
	{
		if (fadeTween != null)
		{
			if (fadeTween.IsActive())
			{
				fadeTween.Kill();
			}
			fadeTween = null;
		}
	}

	private bool WasPointerPressedThisFrame()
	{
		if (Input.GetMouseButtonDown(0))
		{
			return true;
		}
		for (int i = 0; i < Input.touchCount; i++)
		{
			if (Input.GetTouch(i).phase == TouchPhase.Began)
			{
				return true;
			}
		}
		return false;
	}
}

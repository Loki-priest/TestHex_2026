using UnityEngine;

public class HexTile : MonoBehaviour
{
    private static readonly int BaseColorId = Shader.PropertyToID("_BaseColor");
    private static readonly int ColorId = Shader.PropertyToID("_Color");

    [SerializeField] private MeshRenderer myMeshRenderer;
    [SerializeField] private int colorId = -1;
    [SerializeField] private Color currentColor = Color.white;

    private MaterialPropertyBlock colorPropertyBlock;

    public int ColorIdValue => colorId;
    public bool HasColor => colorId >= 0;
    public Color CurrentColor => currentColor;

    public void SetColor(int id, Color color)
    {
        colorId = id;
        currentColor = color;
        ApplyColor(color);
    }

    public bool TryGetColor(out Color color)
    {
        if (!HasColor)
        {
            color = Color.white;
            return false;
        }

        color = currentColor;
        return true;
    }

    public void ClearColor()
    {
        colorId = -1;
    }

    private void ApplyColor(Color color)
    {
        if (myMeshRenderer == null)
        {
            return;
        }

        if (colorPropertyBlock == null)
        {
            colorPropertyBlock = new MaterialPropertyBlock();
        }

        Material sharedMaterial = myMeshRenderer.sharedMaterial;
        myMeshRenderer.GetPropertyBlock(colorPropertyBlock);

        if (sharedMaterial != null && sharedMaterial.HasProperty(BaseColorId))
        {
            colorPropertyBlock.SetColor(BaseColorId, color);
        }

        if (sharedMaterial != null && sharedMaterial.HasProperty(ColorId))
        {
            colorPropertyBlock.SetColor(ColorId, color);
        }

        myMeshRenderer.SetPropertyBlock(colorPropertyBlock);
    }
}

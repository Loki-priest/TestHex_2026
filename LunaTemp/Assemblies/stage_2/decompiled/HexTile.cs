using UnityEngine;

public class HexTile : MonoBehaviour
{
	public MeshRenderer myMeshRenderer;

	private Material myMaterial;

	public Material CurrentMaterial => (myMaterial != null) ? myMaterial : ((myMeshRenderer != null) ? myMeshRenderer.sharedMaterial : null);

	public void SetMaterial(Material material)
	{
		myMaterial = material;
		if (myMeshRenderer != null)
		{
			myMeshRenderer.sharedMaterial = material;
		}
	}
}

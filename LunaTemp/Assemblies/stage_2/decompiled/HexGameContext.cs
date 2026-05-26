using UnityEngine;

[DisallowMultipleComponent]
public class HexGameContext : MonoBehaviour
{
	[Header("Core")]
	[SerializeField]
	private HexConfig config;

	[SerializeField]
	private HexPoolService poolService;

	[Header("Links")]
	[SerializeField]
	private HexManager manager;

	[SerializeField]
	private HexStacksCreator stacksCreator;

	[SerializeField]
	private HexFloorCreator floorCreator;

	public HexConfig Config => config;

	public HexPoolService PoolService => poolService;

	public HexManager Manager => manager;

	public HexStacksCreator StacksCreator => stacksCreator;

	public HexFloorCreator FloorCreator => floorCreator;
}

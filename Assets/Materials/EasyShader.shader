Shader "Hex/TileVertexColorLit"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1, 1, 1, 1)
    }

    SubShader
    {
        Tags
        {
            "RenderType" = "Opaque"
            "Queue" = "Geometry"
        }

        LOD 150

        CGPROGRAM

        // Playworks-compatible target.
        #pragma target 3.0

        // Простое diffuse-освещение.
        // fullforwardshadows позволяет плиткам принимать realtime shadows.
        // addshadow позволяет плиткам отбрасывать тени.
        #pragma surface surf Lambert fullforwardshadows addshadow

        sampler2D _MainTex;
        fixed4 _Color;

        struct Input
        {
            float2 uv_MainTex;
            fixed4 color : COLOR;
        };

        void surf(Input IN, inout SurfaceOutput o)
        {
            fixed4 textureColor = tex2D(_MainTex, IN.uv_MainTex);

            // Цвет плитки приходит из Vertex Color меша.
            // У всех плиток при этом может оставаться один shared Material.
            fixed4 finalColor = textureColor * IN.color * _Color;

            o.Albedo = finalColor.rgb;
            o.Alpha = finalColor.a;
        }

        ENDCG
    }

    Fallback "Diffuse"
}
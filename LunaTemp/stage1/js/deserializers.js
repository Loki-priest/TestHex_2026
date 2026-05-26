var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.JointSpring' )
  var i2031 = data
  i2030.spring = i2031[0]
  i2030.damper = i2031[1]
  i2030.targetPosition = i2031[2]
  return i2030
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.JointMotor' )
  var i2033 = data
  i2032.m_TargetVelocity = i2033[0]
  i2032.m_Force = i2033[1]
  i2032.m_FreeSpin = i2033[2]
  return i2032
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.JointLimits' )
  var i2035 = data
  i2034.m_Min = i2035[0]
  i2034.m_Max = i2035[1]
  i2034.m_Bounciness = i2035[2]
  i2034.m_BounceMinVelocity = i2035[3]
  i2034.m_ContactDistance = i2035[4]
  i2034.minBounce = i2035[5]
  i2034.maxBounce = i2035[6]
  return i2034
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.JointDrive' )
  var i2037 = data
  i2036.m_PositionSpring = i2037[0]
  i2036.m_PositionDamper = i2037[1]
  i2036.m_MaximumForce = i2037[2]
  i2036.m_UseAcceleration = i2037[3]
  return i2036
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2039 = data
  i2038.m_Spring = i2039[0]
  i2038.m_Damper = i2039[1]
  return i2038
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2041 = data
  i2040.m_Limit = i2041[0]
  i2040.m_Bounciness = i2041[1]
  i2040.m_ContactDistance = i2041[2]
  return i2040
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2043 = data
  i2042.m_ExtremumSlip = i2043[0]
  i2042.m_ExtremumValue = i2043[1]
  i2042.m_AsymptoteSlip = i2043[2]
  i2042.m_AsymptoteValue = i2043[3]
  i2042.m_Stiffness = i2043[4]
  return i2042
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2045 = data
  i2044.m_LowerAngle = i2045[0]
  i2044.m_UpperAngle = i2045[1]
  return i2044
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2047 = data
  i2046.m_MotorSpeed = i2047[0]
  i2046.m_MaximumMotorTorque = i2047[1]
  return i2046
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2049 = data
  i2048.m_DampingRatio = i2049[0]
  i2048.m_Frequency = i2049[1]
  i2048.m_Angle = i2049[2]
  return i2048
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2051 = data
  i2050.m_LowerTranslation = i2051[0]
  i2050.m_UpperTranslation = i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.width = i2053[1]
  i2052.height = i2053[2]
  i2052.mipmapCount = i2053[3]
  i2052.anisoLevel = i2053[4]
  i2052.filterMode = i2053[5]
  i2052.hdr = !!i2053[6]
  i2052.format = i2053[7]
  i2052.wrapMode = i2053[8]
  i2052.alphaIsTransparency = !!i2053[9]
  i2052.alphaSource = i2053[10]
  i2052.graphicsFormat = i2053[11]
  i2052.sRGBTexture = !!i2053[12]
  i2052.desiredColorSpace = i2053[13]
  i2052.wrapU = i2053[14]
  i2052.wrapV = i2053[15]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2055 = data
  i2054.position = new pc.Vec3( i2055[0], i2055[1], i2055[2] )
  i2054.scale = new pc.Vec3( i2055[3], i2055[4], i2055[5] )
  i2054.rotation = new pc.Quat(i2055[6], i2055[7], i2055[8], i2055[9])
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2057 = data
  i2056.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2057[0], i2056.main)
  i2056.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2057[1], i2056.colorBySpeed)
  i2056.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2057[2], i2056.colorOverLifetime)
  i2056.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2057[3], i2056.emission)
  i2056.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2057[4], i2056.rotationBySpeed)
  i2056.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2057[5], i2056.rotationOverLifetime)
  i2056.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2057[6], i2056.shape)
  i2056.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2057[7], i2056.sizeBySpeed)
  i2056.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2057[8], i2056.sizeOverLifetime)
  i2056.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2057[9], i2056.textureSheetAnimation)
  i2056.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2057[10], i2056.velocityOverLifetime)
  i2056.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2057[11], i2056.noise)
  i2056.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2057[12], i2056.inheritVelocity)
  i2056.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2057[13], i2056.forceOverLifetime)
  i2056.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2057[14], i2056.limitVelocityOverLifetime)
  i2056.useAutoRandomSeed = !!i2057[15]
  i2056.randomSeed = i2057[16]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemMain()
  var i2059 = data
  i2058.duration = i2059[0]
  i2058.loop = !!i2059[1]
  i2058.prewarm = !!i2059[2]
  i2058.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[3], i2058.startDelay)
  i2058.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[4], i2058.startLifetime)
  i2058.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[5], i2058.startSpeed)
  i2058.startSize3D = !!i2059[6]
  i2058.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[7], i2058.startSizeX)
  i2058.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[8], i2058.startSizeY)
  i2058.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[9], i2058.startSizeZ)
  i2058.startRotation3D = !!i2059[10]
  i2058.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[11], i2058.startRotationX)
  i2058.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[12], i2058.startRotationY)
  i2058.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[13], i2058.startRotationZ)
  i2058.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2059[14], i2058.startColor)
  i2058.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[15], i2058.gravityModifier)
  i2058.simulationSpace = i2059[16]
  request.r(i2059[17], i2059[18], 0, i2058, 'customSimulationSpace')
  i2058.simulationSpeed = i2059[19]
  i2058.useUnscaledTime = !!i2059[20]
  i2058.scalingMode = i2059[21]
  i2058.playOnAwake = !!i2059[22]
  i2058.maxParticles = i2059[23]
  i2058.emitterVelocityMode = i2059[24]
  i2058.stopAction = i2059[25]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2060 = root || new pc.MinMaxCurve()
  var i2061 = data
  i2060.mode = i2061[0]
  i2060.curveMin = new pc.AnimationCurve( { keys_flow: i2061[1] } )
  i2060.curveMax = new pc.AnimationCurve( { keys_flow: i2061[2] } )
  i2060.curveMultiplier = i2061[3]
  i2060.constantMin = i2061[4]
  i2060.constantMax = i2061[5]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2062 = root || new pc.MinMaxGradient()
  var i2063 = data
  i2062.mode = i2063[0]
  i2062.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2063[1], i2062.gradientMin)
  i2062.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2063[2], i2062.gradientMax)
  i2062.colorMin = new pc.Color(i2063[3], i2063[4], i2063[5], i2063[6])
  i2062.colorMax = new pc.Color(i2063[7], i2063[8], i2063[9], i2063[10])
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2065 = data
  i2064.mode = i2065[0]
  var i2067 = i2065[1]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2067[i + 0]) );
  }
  i2064.colorKeys = i2066
  var i2069 = i2065[2]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2069[i + 0]) );
  }
  i2064.alphaKeys = i2068
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemColorBySpeed()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2071[1], i2070.color)
  i2070.range = new pc.Vec2( i2071[2], i2071[3] )
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2075 = data
  i2074.color = new pc.Color(i2075[0], i2075[1], i2075[2], i2075[3])
  i2074.time = i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2079 = data
  i2078.alpha = i2079[0]
  i2078.time = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemColorOverLifetime()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2081[1], i2080.color)
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemEmitter()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.rateOverTime)
  i2082.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.rateOverDistance)
  var i2085 = i2083[3]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2085[i + 0]) );
  }
  i2082.bursts = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemBurst()
  var i2089 = data
  i2088.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[0], i2088.count)
  i2088.cycleCount = i2089[1]
  i2088.minCount = i2089[2]
  i2088.maxCount = i2089[3]
  i2088.repeatInterval = i2089[4]
  i2088.time = i2089[5]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemRotationBySpeed()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[1], i2090.x)
  i2090.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.y)
  i2090.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.z)
  i2090.separateAxes = !!i2091[4]
  i2090.range = new pc.Vec2( i2091[5], i2091[6] )
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[1], i2092.x)
  i2092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.y)
  i2092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[3], i2092.z)
  i2092.separateAxes = !!i2093[4]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemShape()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.shapeType = i2095[1]
  i2094.randomDirectionAmount = i2095[2]
  i2094.sphericalDirectionAmount = i2095[3]
  i2094.randomPositionAmount = i2095[4]
  i2094.alignToDirection = !!i2095[5]
  i2094.radius = i2095[6]
  i2094.radiusMode = i2095[7]
  i2094.radiusSpread = i2095[8]
  i2094.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[9], i2094.radiusSpeed)
  i2094.radiusThickness = i2095[10]
  i2094.angle = i2095[11]
  i2094.length = i2095[12]
  i2094.boxThickness = new pc.Vec3( i2095[13], i2095[14], i2095[15] )
  i2094.meshShapeType = i2095[16]
  request.r(i2095[17], i2095[18], 0, i2094, 'mesh')
  request.r(i2095[19], i2095[20], 0, i2094, 'meshRenderer')
  request.r(i2095[21], i2095[22], 0, i2094, 'skinnedMeshRenderer')
  i2094.useMeshMaterialIndex = !!i2095[23]
  i2094.meshMaterialIndex = i2095[24]
  i2094.useMeshColors = !!i2095[25]
  i2094.normalOffset = i2095[26]
  i2094.arc = i2095[27]
  i2094.arcMode = i2095[28]
  i2094.arcSpread = i2095[29]
  i2094.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[30], i2094.arcSpeed)
  i2094.donutRadius = i2095[31]
  i2094.position = new pc.Vec3( i2095[32], i2095[33], i2095[34] )
  i2094.rotation = new pc.Vec3( i2095[35], i2095[36], i2095[37] )
  i2094.scale = new pc.Vec3( i2095[38], i2095[39], i2095[40] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemSizeBySpeed()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.x)
  i2096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.y)
  i2096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.z)
  i2096.separateAxes = !!i2097[4]
  i2096.range = new pc.Vec2( i2097[5], i2097[6] )
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[1], i2098.x)
  i2098.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[2], i2098.y)
  i2098.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[3], i2098.z)
  i2098.separateAxes = !!i2099[4]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2100 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2101 = data
  i2100.enabled = !!i2101[0]
  i2100.mode = i2101[1]
  i2100.animation = i2101[2]
  i2100.numTilesX = i2101[3]
  i2100.numTilesY = i2101[4]
  i2100.useRandomRow = !!i2101[5]
  i2100.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[6], i2100.frameOverTime)
  i2100.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[7], i2100.startFrame)
  i2100.cycleCount = i2101[8]
  i2100.rowIndex = i2101[9]
  i2100.flipU = i2101[10]
  i2100.flipV = i2101[11]
  i2100.spriteCount = i2101[12]
  var i2103 = i2101[13]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.sprites = i2102
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[1], i2106.x)
  i2106.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[2], i2106.y)
  i2106.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[3], i2106.z)
  i2106.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[4], i2106.radial)
  i2106.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[5], i2106.speedModifier)
  i2106.space = i2107[6]
  i2106.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[7], i2106.orbitalX)
  i2106.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[8], i2106.orbitalY)
  i2106.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[9], i2106.orbitalZ)
  i2106.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[10], i2106.orbitalOffsetX)
  i2106.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[11], i2106.orbitalOffsetY)
  i2106.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[12], i2106.orbitalOffsetZ)
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2108 = root || new pc.ParticleSystemNoise()
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.separateAxes = !!i2109[1]
  i2108.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[2], i2108.strengthX)
  i2108.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[3], i2108.strengthY)
  i2108.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[4], i2108.strengthZ)
  i2108.frequency = i2109[5]
  i2108.damping = !!i2109[6]
  i2108.octaveCount = i2109[7]
  i2108.octaveMultiplier = i2109[8]
  i2108.octaveScale = i2109[9]
  i2108.quality = i2109[10]
  i2108.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[11], i2108.scrollSpeed)
  i2108.scrollSpeedMultiplier = i2109[12]
  i2108.remapEnabled = !!i2109[13]
  i2108.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[14], i2108.remapX)
  i2108.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[15], i2108.remapY)
  i2108.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[16], i2108.remapZ)
  i2108.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[17], i2108.positionAmount)
  i2108.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[18], i2108.rotationAmount)
  i2108.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[19], i2108.sizeAmount)
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2110 = root || new pc.ParticleSystemInheritVelocity()
  var i2111 = data
  i2110.enabled = !!i2111[0]
  i2110.mode = i2111[1]
  i2110.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[2], i2110.curve)
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemForceOverLifetime()
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[1], i2112.x)
  i2112.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[2], i2112.y)
  i2112.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[3], i2112.z)
  i2112.space = i2113[4]
  i2112.randomized = !!i2113[5]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2114 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2115 = data
  i2114.enabled = !!i2115[0]
  i2114.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[1], i2114.limit)
  i2114.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[2], i2114.limitX)
  i2114.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[3], i2114.limitY)
  i2114.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[4], i2114.limitZ)
  i2114.dampen = i2115[5]
  i2114.separateAxes = !!i2115[6]
  i2114.space = i2115[7]
  i2114.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[8], i2114.drag)
  i2114.multiplyDragByParticleSize = !!i2115[9]
  i2114.multiplyDragByParticleVelocity = !!i2115[10]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'mesh')
  i2116.meshCount = i2117[2]
  i2116.activeVertexStreamsCount = i2117[3]
  i2116.alignment = i2117[4]
  i2116.renderMode = i2117[5]
  i2116.sortMode = i2117[6]
  i2116.lengthScale = i2117[7]
  i2116.velocityScale = i2117[8]
  i2116.cameraVelocityScale = i2117[9]
  i2116.normalDirection = i2117[10]
  i2116.sortingFudge = i2117[11]
  i2116.minParticleSize = i2117[12]
  i2116.maxParticleSize = i2117[13]
  i2116.pivot = new pc.Vec3( i2117[14], i2117[15], i2117[16] )
  request.r(i2117[17], i2117[18], 0, i2116, 'trailMaterial')
  i2116.applyActiveColorSpace = !!i2117[19]
  i2116.enabled = !!i2117[20]
  request.r(i2117[21], i2117[22], 0, i2116, 'sharedMaterial')
  var i2119 = i2117[23]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2116.sharedMaterials = i2118
  i2116.receiveShadows = !!i2117[24]
  i2116.shadowCastingMode = i2117[25]
  i2116.sortingLayerID = i2117[26]
  i2116.sortingOrder = i2117[27]
  i2116.lightmapIndex = i2117[28]
  i2116.lightmapSceneIndex = i2117[29]
  i2116.lightmapScaleOffset = new pc.Vec4( i2117[30], i2117[31], i2117[32], i2117[33] )
  i2116.lightProbeUsage = i2117[34]
  i2116.reflectionProbeUsage = i2117[35]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.tagId = i2123[1]
  i2122.enabled = !!i2123[2]
  i2122.isStatic = !!i2123[3]
  i2122.layer = i2123[4]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2124 = root || new pc.UnityMaterial()
  var i2125 = data
  i2124.name = i2125[0]
  request.r(i2125[1], i2125[2], 0, i2124, 'shader')
  i2124.renderQueue = i2125[3]
  i2124.enableInstancing = !!i2125[4]
  var i2127 = i2125[5]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2127[i + 0]) );
  }
  i2124.floatParameters = i2126
  var i2129 = i2125[6]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2129[i + 0]) );
  }
  i2124.colorParameters = i2128
  var i2131 = i2125[7]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2131[i + 0]) );
  }
  i2124.vectorParameters = i2130
  var i2133 = i2125[8]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2133[i + 0]) );
  }
  i2124.textureParameters = i2132
  var i2135 = i2125[9]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2135[i + 0]) );
  }
  i2124.materialFlags = i2134
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.value = i2139[1]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.value = new pc.Color(i2143[1], i2143[2], i2143[3], i2143[4])
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.value = new pc.Vec4( i2147[1], i2147[2], i2147[3], i2147[4] )
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2151 = data
  i2150.name = i2151[0]
  request.r(i2151[1], i2151[2], 0, i2150, 'value')
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2155 = data
  i2154.name = i2155[0]
  i2154.enabled = !!i2155[1]
  return i2154
}

Deserializers["HexStack"] = function (request, data, root) {
  var i2156 = root || request.c( 'HexStack' )
  var i2157 = data
  var i2159 = i2157[0]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('HexTile')))
  for(var i = 0; i < i2159.length; i += 2) {
  request.r(i2159[i + 0], i2159[i + 1], 1, i2158, '')
  }
  i2156.hexTiles = i2158
  request.r(i2157[1], i2157[2], 0, i2156, 'tileTemplate')
  request.r(i2157[3], i2157[4], 0, i2156, 'anchorPos')
  i2156.tileStep = i2157[5]
  i2156.tileBaseLocalPosition = new pc.Vec3( i2157[6], i2157[7], i2157[8] )
  i2156.hideWhenEmpty = !!i2157[9]
  return i2156
}

Deserializers["HexTile"] = function (request, data, root) {
  var i2162 = root || request.c( 'HexTile' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'myMeshRenderer')
  i2162.colorId = i2163[2]
  i2162.currentColor = new pc.Color(i2163[3], i2163[4], i2163[5], i2163[6])
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'sharedMesh')
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'additionalVertexStreams')
  i2166.enabled = !!i2167[2]
  request.r(i2167[3], i2167[4], 0, i2166, 'sharedMaterial')
  var i2169 = i2167[5]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 2, i2168, '')
  }
  i2166.sharedMaterials = i2168
  i2166.receiveShadows = !!i2167[6]
  i2166.shadowCastingMode = i2167[7]
  i2166.sortingLayerID = i2167[8]
  i2166.sortingOrder = i2167[9]
  i2166.lightmapIndex = i2167[10]
  i2166.lightmapSceneIndex = i2167[11]
  i2166.lightmapScaleOffset = new pc.Vec4( i2167[12], i2167[13], i2167[14], i2167[15] )
  i2166.lightProbeUsage = i2167[16]
  i2166.reflectionProbeUsage = i2167[17]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'sharedMesh')
  i2170.convex = !!i2171[2]
  i2170.enabled = !!i2171[3]
  i2170.isTrigger = !!i2171[4]
  request.r(i2171[5], i2171[6], 0, i2170, 'material')
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.halfPrecision = !!i2173[1]
  i2172.useSimplification = !!i2173[2]
  i2172.useUInt32IndexFormat = !!i2173[3]
  i2172.vertexCount = i2173[4]
  i2172.aabb = i2173[5]
  var i2175 = i2173[6]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( !!i2175[i + 0] );
  }
  i2172.streams = i2174
  i2172.vertices = i2173[7]
  var i2177 = i2173[8]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2177[i + 0]) );
  }
  i2172.subMeshes = i2176
  var i2179 = i2173[9]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 16) {
    i2178.push( new pc.Mat4().setData(i2179[i + 0], i2179[i + 1], i2179[i + 2], i2179[i + 3],  i2179[i + 4], i2179[i + 5], i2179[i + 6], i2179[i + 7],  i2179[i + 8], i2179[i + 9], i2179[i + 10], i2179[i + 11],  i2179[i + 12], i2179[i + 13], i2179[i + 14], i2179[i + 15]) );
  }
  i2172.bindposes = i2178
  var i2181 = i2173[10]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2181[i + 0]) );
  }
  i2172.blendShapes = i2180
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2187 = data
  i2186.triangles = i2187[0]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2193 = data
  i2192.name = i2193[0]
  var i2195 = i2193[1]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2195[i + 0]) );
  }
  i2192.frames = i2194
  return i2192
}

Deserializers["HexFloor"] = function (request, data, root) {
  var i2196 = root || request.c( 'HexFloor' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'stackAnchor')
  i2196.gridX = i2197[2]
  i2196.gridZ = i2197[3]
  var i2199 = i2197[4]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2196.highlightRenderers = i2198
  i2196.dropHighlightColor = new pc.Color(i2197[5], i2197[6], i2197[7], i2197[8])
  i2196.dropHighlightBlend = i2197[9]
  i2196.useEmissionHighlight = !!i2197[10]
  i2196.dropHighlightEmissionColor = new pc.Color(i2197[11], i2197[12], i2197[13], i2197[14])
  i2196.autoFindOnAwake = !!i2197[15]
  i2196.neighborSearchDistance = i2197[16]
  i2196.rayHeight = i2197[17]
  i2196.neighborRaycastBufferSize = i2197[18]
  i2196.searchMask = UnityEngine.LayerMask.FromIntegerValue( i2197[19] )
  i2196.sideDirectionOffsetDegrees = i2197[20]
  var i2201 = i2197[21]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2196.sideNeighbors = i2200
  i2196.drawSideRays = !!i2197[22]
  i2196.gizmoSideOffset = i2197[23]
  i2196.gizmoRayLength = i2197[24]
  i2196.gizmoSphereRadius = i2197[25]
  i2196.gizmoNoNeighborColor = new pc.Color(i2197[26], i2197[27], i2197[28], i2197[29])
  i2196.gizmoNeighborColor = new pc.Color(i2197[30], i2197[31], i2197[32], i2197[33])
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.atlasId = i2207[1]
  i2206.mipmapCount = i2207[2]
  i2206.hdr = !!i2207[3]
  i2206.size = i2207[4]
  i2206.anisoLevel = i2207[5]
  i2206.filterMode = i2207[6]
  var i2209 = i2207[7]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 4) {
    i2208.push( UnityEngine.Rect.MinMaxRect(i2209[i + 0], i2209[i + 1], i2209[i + 2], i2209[i + 3]) );
  }
  i2206.rects = i2208
  i2206.wrapU = i2207[8]
  i2206.wrapV = i2207[9]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.index = i2213[1]
  i2212.startup = !!i2213[2]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2215 = data
  i2214.aspect = i2215[0]
  i2214.orthographic = !!i2215[1]
  i2214.orthographicSize = i2215[2]
  i2214.backgroundColor = new pc.Color(i2215[3], i2215[4], i2215[5], i2215[6])
  i2214.nearClipPlane = i2215[7]
  i2214.farClipPlane = i2215[8]
  i2214.fieldOfView = i2215[9]
  i2214.depth = i2215[10]
  i2214.clearFlags = i2215[11]
  i2214.cullingMask = i2215[12]
  i2214.rect = i2215[13]
  request.r(i2215[14], i2215[15], 0, i2214, 'targetTexture')
  i2214.usePhysicalProperties = !!i2215[16]
  i2214.focalLength = i2215[17]
  i2214.sensorSize = new pc.Vec2( i2215[18], i2215[19] )
  i2214.lensShift = new pc.Vec2( i2215[20], i2215[21] )
  i2214.gateFit = i2215[22]
  i2214.commandBufferCount = i2215[23]
  i2214.cameraType = i2215[24]
  i2214.enabled = !!i2215[25]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2217 = data
  i2216.type = i2217[0]
  i2216.color = new pc.Color(i2217[1], i2217[2], i2217[3], i2217[4])
  i2216.cullingMask = i2217[5]
  i2216.intensity = i2217[6]
  i2216.range = i2217[7]
  i2216.spotAngle = i2217[8]
  i2216.shadows = i2217[9]
  i2216.shadowNormalBias = i2217[10]
  i2216.shadowBias = i2217[11]
  i2216.shadowStrength = i2217[12]
  i2216.shadowResolution = i2217[13]
  i2216.lightmapBakeType = i2217[14]
  i2216.renderMode = i2217[15]
  request.r(i2217[16], i2217[17], 0, i2216, 'cookie')
  i2216.cookieSize = i2217[18]
  i2216.shadowNearPlane = i2217[19]
  i2216.occlusionMaskChannel = i2217[20]
  i2216.isBaked = !!i2217[21]
  i2216.mixedLightingMode = i2217[22]
  i2216.enabled = !!i2217[23]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2219 = data
  i2218.pivot = new pc.Vec2( i2219[0], i2219[1] )
  i2218.anchorMin = new pc.Vec2( i2219[2], i2219[3] )
  i2218.anchorMax = new pc.Vec2( i2219[4], i2219[5] )
  i2218.sizeDelta = new pc.Vec2( i2219[6], i2219[7] )
  i2218.anchoredPosition3D = new pc.Vec3( i2219[8], i2219[9], i2219[10] )
  i2218.rotation = new pc.Quat(i2219[11], i2219[12], i2219[13], i2219[14])
  i2218.scale = new pc.Vec3( i2219[15], i2219[16], i2219[17] )
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2221 = data
  i2220.planeDistance = i2221[0]
  i2220.referencePixelsPerUnit = i2221[1]
  i2220.isFallbackOverlay = !!i2221[2]
  i2220.renderMode = i2221[3]
  i2220.renderOrder = i2221[4]
  i2220.sortingLayerName = i2221[5]
  i2220.sortingOrder = i2221[6]
  i2220.scaleFactor = i2221[7]
  request.r(i2221[8], i2221[9], 0, i2220, 'worldCamera')
  i2220.overrideSorting = !!i2221[10]
  i2220.pixelPerfect = !!i2221[11]
  i2220.targetDisplay = i2221[12]
  i2220.overridePixelPerfect = !!i2221[13]
  i2220.enabled = !!i2221[14]
  return i2220
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2223 = data
  i2222.m_UiScaleMode = i2223[0]
  i2222.m_ReferencePixelsPerUnit = i2223[1]
  i2222.m_ScaleFactor = i2223[2]
  i2222.m_ReferenceResolution = new pc.Vec2( i2223[3], i2223[4] )
  i2222.m_ScreenMatchMode = i2223[5]
  i2222.m_MatchWidthOrHeight = i2223[6]
  i2222.m_PhysicalUnit = i2223[7]
  i2222.m_FallbackScreenDPI = i2223[8]
  i2222.m_DefaultSpriteDPI = i2223[9]
  i2222.m_DynamicPixelsPerUnit = i2223[10]
  i2222.m_PresetInfoIsWorld = !!i2223[11]
  return i2222
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2225 = data
  i2224.m_IgnoreReversedGraphics = !!i2225[0]
  i2224.m_BlockingObjects = i2225[1]
  i2224.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2225[2] )
  return i2224
}

Deserializers["PlayableUIRoot"] = function (request, data, root) {
  var i2226 = root || request.c( 'PlayableUIRoot' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'gameContext')
  request.r(i2227[2], i2227[3], 0, i2226, 'tutorialController')
  request.r(i2227[4], i2227[5], 0, i2226, 'packshotController')
  request.r(i2227[6], i2227[7], 0, i2226, 'countdownTimerPanel')
  return i2226
}

Deserializers["TutorialOverlayController"] = function (request, data, root) {
  var i2228 = root || request.c( 'TutorialOverlayController' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'tutorialRoot')
  request.r(i2229[2], i2229[3], 0, i2228, 'handTransform')
  request.r(i2229[4], i2229[5], 0, i2228, 'canvasRoot')
  request.r(i2229[6], i2229[7], 0, i2228, 'uiCamera')
  request.r(i2229[8], i2229[9], 0, i2228, 'worldCamera')
  request.r(i2229[10], i2229[11], 0, i2228, 'gameContext')
  request.r(i2229[12], i2229[13], 0, i2228, 'fromAnchor')
  request.r(i2229[14], i2229[15], 0, i2228, 'toAnchor')
  i2228.startOnEnable = !!i2229[16]
  i2228.restartDelay = i2229[17]
  i2228.useDynamicWorldTargets = !!i2229[18]
  i2228.handScreenOffset = new pc.Vec2( i2229[19], i2229[20] )
  i2228.worldTargetHeightOffset = i2229[21]
  i2228.fallbackScanInterval = i2229[22]
  i2228.debugLogs = !!i2229[23]
  i2228.handMoveDuration = i2229[24]
  i2228.handPauseDuration = i2229[25]
  i2228.handMoveEase = i2229[26]
  return i2228
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i2230 = root || request.c( 'PackshotController' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'packshotRoot')
  request.r(i2231[2], i2231[3], 0, i2230, 'packshotCanvasGroup')
  request.r(i2231[4], i2231[5], 0, i2230, 'backgroundObject')
  request.r(i2231[6], i2231[7], 0, i2230, 'logoObject')
  request.r(i2231[8], i2231[9], 0, i2230, 'playNowButtonObject')
  i2230.hideOnStart = !!i2231[10]
  i2230.reactToAnyTap = !!i2231[11]
  i2230.fadeDuration = i2231[12]
  i2230.fadeEase = i2231[13]
  return i2230
}

Deserializers["CountdownTimerPanel"] = function (request, data, root) {
  var i2232 = root || request.c( 'CountdownTimerPanel' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'gameContext')
  i2232.durationSeconds = i2233[2]
  i2232.autoStartOnEnable = !!i2233[3]
  i2232.lowTimeThresholdNormalized = i2233[4]
  i2232.barFrameNormalColor = new pc.Color(i2233[5], i2233[6], i2233[7], i2233[8])
  i2232.barBackNormalColor = new pc.Color(i2233[9], i2233[10], i2233[11], i2233[12])
  i2232.barFillNormalColor = new pc.Color(i2233[13], i2233[14], i2233[15], i2233[16])
  i2232.iconFrameNormalColor = new pc.Color(i2233[17], i2233[18], i2233[19], i2233[20])
  i2232.iconBackNormalColor = new pc.Color(i2233[21], i2233[22], i2233[23], i2233[24])
  i2232.barFrameLowColor = new pc.Color(i2233[25], i2233[26], i2233[27], i2233[28])
  i2232.barBackLowColor = new pc.Color(i2233[29], i2233[30], i2233[31], i2233[32])
  i2232.barFillLowColor = new pc.Color(i2233[33], i2233[34], i2233[35], i2233[36])
  i2232.iconFrameLowColor = new pc.Color(i2233[37], i2233[38], i2233[39], i2233[40])
  i2232.iconBackLowColor = new pc.Color(i2233[41], i2233[42], i2233[43], i2233[44])
  i2232.arrowStartAngle = i2233[45]
  i2232.arrowEndAngle = i2233[46]
  i2232.arrowNormalColor = new pc.Color(i2233[47], i2233[48], i2233[49], i2233[50])
  i2232.iconShakeDuration = i2233[51]
  i2232.iconShakeStrength = i2233[52]
  i2232.iconShakeVibrato = i2233[53]
  i2232.lowBackdropBlendRange = i2233[54]
  request.r(i2233[55], i2233[56], 0, i2232, 'panelRoot')
  request.r(i2233[57], i2233[58], 0, i2232, 'barFrameImage')
  request.r(i2233[59], i2233[60], 0, i2232, 'barBackImage')
  request.r(i2233[61], i2233[62], 0, i2232, 'barFillImage')
  request.r(i2233[63], i2233[64], 0, i2232, 'iconRoot')
  request.r(i2233[65], i2233[66], 0, i2232, 'iconFrameImage')
  request.r(i2233[67], i2233[68], 0, i2232, 'iconBackImage')
  request.r(i2233[69], i2233[70], 0, i2232, 'iconNubImage')
  request.r(i2233[71], i2233[72], 0, i2232, 'arrowTransform')
  request.r(i2233[73], i2233[74], 0, i2232, 'arrowImage')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2235 = data
  i2234.cullTransparentMesh = !!i2235[0]
  return i2234
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.UI.Image' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'm_Sprite')
  i2236.m_Type = i2237[2]
  i2236.m_PreserveAspect = !!i2237[3]
  i2236.m_FillCenter = !!i2237[4]
  i2236.m_FillMethod = i2237[5]
  i2236.m_FillAmount = i2237[6]
  i2236.m_FillClockwise = !!i2237[7]
  i2236.m_FillOrigin = i2237[8]
  i2236.m_UseSpriteMesh = !!i2237[9]
  i2236.m_PixelsPerUnitMultiplier = i2237[10]
  request.r(i2237[11], i2237[12], 0, i2236, 'm_Material')
  i2236.m_Maskable = !!i2237[13]
  i2236.m_Color = new pc.Color(i2237[14], i2237[15], i2237[16], i2237[17])
  i2236.m_RaycastTarget = !!i2237[18]
  i2236.m_RaycastPadding = new pc.Vec4( i2237[19], i2237[20], i2237[21], i2237[22] )
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2239 = data
  i2238.m_Alpha = i2239[0]
  i2238.m_Interactable = !!i2239[1]
  i2238.m_BlocksRaycasts = !!i2239[2]
  i2238.m_IgnoreParentGroups = !!i2239[3]
  i2238.enabled = !!i2239[4]
  return i2238
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.UI.Text' )
  var i2241 = data
  i2240.m_FontData = request.d('UnityEngine.UI.FontData', i2241[0], i2240.m_FontData)
  i2240.m_Text = i2241[1]
  request.r(i2241[2], i2241[3], 0, i2240, 'm_Material')
  i2240.m_Maskable = !!i2241[4]
  i2240.m_Color = new pc.Color(i2241[5], i2241[6], i2241[7], i2241[8])
  i2240.m_RaycastTarget = !!i2241[9]
  i2240.m_RaycastPadding = new pc.Vec4( i2241[10], i2241[11], i2241[12], i2241[13] )
  return i2240
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'm_Font')
  i2242.m_FontSize = i2243[2]
  i2242.m_FontStyle = i2243[3]
  i2242.m_BestFit = !!i2243[4]
  i2242.m_MinSize = i2243[5]
  i2242.m_MaxSize = i2243[6]
  i2242.m_Alignment = i2243[7]
  i2242.m_AlignByGeometry = !!i2243[8]
  i2242.m_RichText = !!i2243[9]
  i2242.m_HorizontalOverflow = i2243[10]
  i2242.m_VerticalOverflow = i2243[11]
  i2242.m_LineSpacing = i2243[12]
  return i2242
}

Deserializers["HexGameContext"] = function (request, data, root) {
  var i2244 = root || request.c( 'HexGameContext' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'config')
  request.r(i2245[2], i2245[3], 0, i2244, 'poolService')
  request.r(i2245[4], i2245[5], 0, i2244, 'manager')
  request.r(i2245[6], i2245[7], 0, i2244, 'stacksCreator')
  request.r(i2245[8], i2245[9], 0, i2244, 'floorCreator')
  return i2244
}

Deserializers["HexDragger"] = function (request, data, root) {
  var i2246 = root || request.c( 'HexDragger' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'gameContext')
  request.r(i2247[2], i2247[3], 0, i2246, 'inputCamera')
  i2246.pickMaxDistance = i2247[4]
  i2246.interactionMask = UnityEngine.LayerMask.FromIntegerValue( i2247[5] )
  i2246.floorCheckStartHeight = i2247[6]
  i2246.floorCheckDistance = i2247[7]
  i2246.floorRaycastBufferSize = i2247[8]
  i2246.liftHeight = i2247[9]
  i2246.liftDuration = i2247[10]
  i2246.liftEase = i2247[11]
  i2246.attachMoveDuration = i2247[12]
  i2246.attachMoveEase = i2247[13]
  i2246.dropDuration = i2247[14]
  i2246.dropEase = i2247[15]
  return i2246
}

Deserializers["HexManager"] = function (request, data, root) {
  var i2248 = root || request.c( 'HexManager' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'gameContext')
  i2248.transferOnStackPlaced = !!i2249[2]
  request.r(i2249[3], i2249[4], 0, i2248, 'transferAnimator')
  i2248.transferSpeedIncreasePerStack = i2249[5]
  i2248.clearSpeedIncreasePerStack = i2249[6]
  i2248.clearScaleDuration = i2249[7]
  i2248.clearScaleEase = i2249[8]
  i2248.clearScaleStagger = i2249[9]
  request.r(i2249[10], i2249[11], 0, i2248, 'clearFxPlayer')
  i2248.logTransferEvents = !!i2249[12]
  return i2248
}

Deserializers["HexTransferAnimator"] = function (request, data, root) {
  var i2250 = root || request.c( 'HexTransferAnimator' )
  var i2251 = data
  i2250.logTransferAnimatorEvents = !!i2251[0]
  i2250.tileFlipDuration = i2251[1]
  i2250.tileFlipEase = i2251[2]
  i2250.tileSettleDuration = i2251[3]
  i2250.tileSettleEase = i2251[4]
  i2250.tileTransferFanStagger = i2251[5]
  return i2250
}

Deserializers["HexClearFxPlayer"] = function (request, data, root) {
  var i2252 = root || request.c( 'HexClearFxPlayer' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'clearTilesFxPrefab')
  i2252.clearTilesFxLifetimePadding = i2253[2]
  return i2252
}

Deserializers["HexFloorCreator"] = function (request, data, root) {
  var i2254 = root || request.c( 'HexFloorCreator' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'gameContext')
  request.r(i2255[2], i2255[3], 0, i2254, 'floorPrefab')
  request.r(i2255[4], i2255[5], 0, i2254, 'floorRoot')
  request.r(i2255[6], i2255[7], 0, i2254, 'bottomRowAnchor')
  i2254.generateOnStart = !!i2255[8]
  i2254.clearBeforeGenerate = !!i2255[9]
  i2254.refreshNeighborsAfterGenerate = !!i2255[10]
  i2254.fillStacksAfterGenerate = !!i2255[11]
  i2254.debugLogs = !!i2255[12]
  i2254.neighborDistance = i2255[13]
  i2254.shiftOddColumnsForward = !!i2255[14]
  i2254.anchorLocalOffset = new pc.Vec3( i2255[15], i2255[16], i2255[17] )
  return i2254
}

Deserializers["HexStacksCreator"] = function (request, data, root) {
  var i2256 = root || request.c( 'HexStacksCreator' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'gameContext')
  request.r(i2257[2], i2257[3], 0, i2256, 'spawnStackPrefab')
  request.r(i2257[4], i2257[5], 0, i2256, 'stacksRoot')
  var i2259 = i2257[6]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.stackSlots = i2258
  i2256.spawnOnStart = !!i2257[7]
  i2256.clearExistingOnStart = !!i2257[8]
  i2256.respawnWhenAllPlaced = !!i2257[9]
  i2256.spawnSlotsOnlyOnce = !!i2257[10]
  i2256.slotOccupancyRadius = i2257[11]
  i2256.logGeneratedFill = !!i2257[12]
  i2256.debugLogs = !!i2257[13]
  return i2256
}

Deserializers["HexPoolService"] = function (request, data, root) {
  var i2262 = root || request.c( 'HexPoolService' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'stackPoolRoot')
  request.r(i2263[2], i2263[3], 0, i2262, 'tilePoolRoot')
  request.r(i2263[4], i2263[5], 0, i2262, 'fxPoolRoot')
  i2262.prewarmStackCount = i2263[6]
  i2262.prewarmTileCount = i2263[7]
  i2262.prewarmFxCount = i2263[8]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2265 = data
  i2264.ambientIntensity = i2265[0]
  i2264.reflectionIntensity = i2265[1]
  i2264.ambientMode = i2265[2]
  i2264.ambientLight = new pc.Color(i2265[3], i2265[4], i2265[5], i2265[6])
  i2264.ambientSkyColor = new pc.Color(i2265[7], i2265[8], i2265[9], i2265[10])
  i2264.ambientGroundColor = new pc.Color(i2265[11], i2265[12], i2265[13], i2265[14])
  i2264.ambientEquatorColor = new pc.Color(i2265[15], i2265[16], i2265[17], i2265[18])
  i2264.fogColor = new pc.Color(i2265[19], i2265[20], i2265[21], i2265[22])
  i2264.fogEndDistance = i2265[23]
  i2264.fogStartDistance = i2265[24]
  i2264.fogDensity = i2265[25]
  i2264.fog = !!i2265[26]
  request.r(i2265[27], i2265[28], 0, i2264, 'skybox')
  i2264.fogMode = i2265[29]
  var i2267 = i2265[30]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2267[i + 0]) );
  }
  i2264.lightmaps = i2266
  i2264.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2265[31], i2264.lightProbes)
  i2264.lightmapsMode = i2265[32]
  i2264.mixedBakeMode = i2265[33]
  i2264.environmentLightingMode = i2265[34]
  i2264.ambientProbe = new pc.SphericalHarmonicsL2(i2265[35])
  request.r(i2265[36], i2265[37], 0, i2264, 'customReflection')
  request.r(i2265[38], i2265[39], 0, i2264, 'defaultReflection')
  i2264.defaultReflectionMode = i2265[40]
  i2264.defaultReflectionResolution = i2265[41]
  i2264.sunLightObjectId = i2265[42]
  i2264.pixelLightCount = i2265[43]
  i2264.defaultReflectionHDR = !!i2265[44]
  i2264.hasLightDataAsset = !!i2265[45]
  i2264.hasManualGenerate = !!i2265[46]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'lightmapColor')
  request.r(i2271[2], i2271[3], 0, i2270, 'lightmapDirection')
  request.r(i2271[4], i2271[5], 0, i2270, 'shadowMask')
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2272 = root || new UnityEngine.LightProbes()
  var i2273 = data
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2281 = data
  var i2283 = i2281[0]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2283[i + 0]));
  }
  i2280.ShaderCompilationErrors = i2282
  i2280.name = i2281[1]
  i2280.guid = i2281[2]
  var i2285 = i2281[3]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( i2285[i + 0] );
  }
  i2280.shaderDefinedKeywords = i2284
  var i2287 = i2281[4]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2287[i + 0]) );
  }
  i2280.passes = i2286
  var i2289 = i2281[5]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2289[i + 0]) );
  }
  i2280.usePasses = i2288
  var i2291 = i2281[6]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2291[i + 0]) );
  }
  i2280.defaultParameterValues = i2290
  request.r(i2281[7], i2281[8], 0, i2280, 'unityFallbackShader')
  i2280.readDepth = !!i2281[9]
  i2280.hasDepthOnlyPass = !!i2281[10]
  i2280.isCreatedByShaderGraph = !!i2281[11]
  i2280.disableBatching = !!i2281[12]
  i2280.compiled = !!i2281[13]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2295 = data
  i2294.shaderName = i2295[0]
  i2294.errorMessage = i2295[1]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2300 = root || new pc.UnityShaderPass()
  var i2301 = data
  i2300.id = i2301[0]
  i2300.subShaderIndex = i2301[1]
  i2300.name = i2301[2]
  i2300.passType = i2301[3]
  i2300.grabPassTextureName = i2301[4]
  i2300.usePass = !!i2301[5]
  i2300.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[6], i2300.zTest)
  i2300.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[7], i2300.zWrite)
  i2300.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[8], i2300.culling)
  i2300.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2301[9], i2300.blending)
  i2300.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2301[10], i2300.alphaBlending)
  i2300.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[11], i2300.colorWriteMask)
  i2300.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[12], i2300.offsetUnits)
  i2300.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[13], i2300.offsetFactor)
  i2300.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[14], i2300.stencilRef)
  i2300.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[15], i2300.stencilReadMask)
  i2300.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2301[16], i2300.stencilWriteMask)
  i2300.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2301[17], i2300.stencilOp)
  i2300.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2301[18], i2300.stencilOpFront)
  i2300.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2301[19], i2300.stencilOpBack)
  var i2303 = i2301[20]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2303[i + 0]) );
  }
  i2300.tags = i2302
  var i2305 = i2301[21]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2300.passDefinedKeywords = i2304
  var i2307 = i2301[22]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2307[i + 0]) );
  }
  i2300.passDefinedKeywordGroups = i2306
  var i2309 = i2301[23]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2309[i + 0]) );
  }
  i2300.variants = i2308
  var i2311 = i2301[24]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2311[i + 0]) );
  }
  i2300.excludedVariants = i2310
  i2300.hasDepthReader = !!i2301[25]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2313 = data
  i2312.val = i2313[0]
  i2312.name = i2313[1]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2315 = data
  i2314.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2315[0], i2314.src)
  i2314.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2315[1], i2314.dst)
  i2314.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2315[2], i2314.op)
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2317 = data
  i2316.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2317[0], i2316.pass)
  i2316.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2317[1], i2316.fail)
  i2316.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2317[2], i2316.zFail)
  i2316.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2317[3], i2316.comp)
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.value = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2325 = data
  var i2327 = i2325[0]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( i2327[i + 0] );
  }
  i2324.keywords = i2326
  i2324.hasDiscard = !!i2325[1]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2331 = data
  i2330.passId = i2331[0]
  i2330.subShaderIndex = i2331[1]
  var i2333 = i2331[2]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( i2333[i + 0] );
  }
  i2330.keywords = i2332
  i2330.vertexProgram = i2331[3]
  i2330.fragmentProgram = i2331[4]
  i2330.exportedForWebGl2 = !!i2331[5]
  i2330.readDepth = !!i2331[6]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'shader')
  i2336.pass = i2337[2]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.type = i2341[1]
  i2340.value = new pc.Vec4( i2341[2], i2341[3], i2341[4], i2341[5] )
  i2340.textureValue = i2341[6]
  i2340.shaderPropertyFlag = i2341[7]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2343 = data
  i2342.name = i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'texture')
  i2342.aabb = i2343[3]
  i2342.vertices = i2343[4]
  i2342.triangles = i2343[5]
  i2342.textureRect = UnityEngine.Rect.MinMaxRect(i2343[6], i2343[7], i2343[8], i2343[9])
  i2342.packedRect = UnityEngine.Rect.MinMaxRect(i2343[10], i2343[11], i2343[12], i2343[13])
  i2342.border = new pc.Vec4( i2343[14], i2343[15], i2343[16], i2343[17] )
  i2342.transparency = i2343[18]
  i2342.bounds = i2343[19]
  i2342.pixelsPerUnit = i2343[20]
  i2342.textureWidth = i2343[21]
  i2342.textureHeight = i2343[22]
  i2342.nativeSize = new pc.Vec2( i2343[23], i2343[24] )
  i2342.pivot = new pc.Vec2( i2343[25], i2343[26] )
  i2342.textureRectOffset = new pc.Vec2( i2343[27], i2343[28] )
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2345 = data
  i2344.name = i2345[0]
  i2344.ascent = i2345[1]
  i2344.originalLineHeight = i2345[2]
  i2344.fontSize = i2345[3]
  var i2347 = i2345[4]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2347[i + 0]) );
  }
  i2344.characterInfo = i2346
  request.r(i2345[5], i2345[6], 0, i2344, 'texture')
  i2344.originalFontSize = i2345[7]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2351 = data
  i2350.index = i2351[0]
  i2350.advance = i2351[1]
  i2350.bearing = i2351[2]
  i2350.glyphWidth = i2351[3]
  i2350.glyphHeight = i2351[4]
  i2350.minX = i2351[5]
  i2350.maxX = i2351[6]
  i2350.minY = i2351[7]
  i2350.maxY = i2351[8]
  i2350.uvBottomLeftX = i2351[9]
  i2350.uvBottomLeftY = i2351[10]
  i2350.uvBottomRightX = i2351[11]
  i2350.uvBottomRightY = i2351[12]
  i2350.uvTopLeftX = i2351[13]
  i2350.uvTopLeftY = i2351[14]
  i2350.uvTopRightX = i2351[15]
  i2350.uvTopRightY = i2351[16]
  return i2350
}

Deserializers["HexConfig"] = function (request, data, root) {
  var i2352 = root || request.c( 'HexConfig' )
  var i2353 = data
  var i2355 = i2353[0]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 4) {
    i2354.push( new pc.Color(i2355[i + 0], i2355[i + 1], i2355[i + 2], i2355[i + 3]) );
  }
  i2352.colors = i2354
  i2352.paletteColorCount = i2353[1]
  i2352.isRandom = !!i2353[2]
  var i2357 = i2353[3]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('HexConfig+StackColorPreset', i2357[i + 0]) );
  }
  i2352.startStackColors = i2356
  i2352.generatePlayerStacksByFivePlusFive = !!i2353[4]
  i2352.fillGeneratedFloorWithStacks = !!i2353[5]
  var i2359 = i2353[6]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('HexConfig+FloorCoord', i2359[i + 0]) );
  }
  i2352.noStackSpawnCoords = i2358
  i2352.topMatchClearCount = i2353[7]
  i2352.gameDurationSeconds = i2353[8]
  i2352.endGameAfterFirstTransferAndClearChain = !!i2353[9]
  i2352.floorWidth = i2353[10]
  i2352.floorLength = i2353[11]
  return i2352
}

Deserializers["HexConfig+StackColorPreset"] = function (request, data, root) {
  var i2364 = root || request.c( 'HexConfig+StackColorPreset' )
  var i2365 = data
  i2364.colorIdsBottomToTop = i2365[0]
  return i2364
}

Deserializers["HexConfig+FloorCoord"] = function (request, data, root) {
  var i2368 = root || request.c( 'HexConfig+FloorCoord' )
  var i2369 = data
  i2368.x = i2369[0]
  i2368.z = i2369[1]
  return i2368
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2370 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2371 = data
  i2370.useSafeMode = !!i2371[0]
  i2370.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2371[1], i2370.safeModeOptions)
  i2370.timeScale = i2371[2]
  i2370.unscaledTimeScale = i2371[3]
  i2370.useSmoothDeltaTime = !!i2371[4]
  i2370.maxSmoothUnscaledTime = i2371[5]
  i2370.rewindCallbackMode = i2371[6]
  i2370.showUnityEditorReport = !!i2371[7]
  i2370.logBehaviour = i2371[8]
  i2370.drawGizmos = !!i2371[9]
  i2370.defaultRecyclable = !!i2371[10]
  i2370.defaultAutoPlay = i2371[11]
  i2370.defaultUpdateType = i2371[12]
  i2370.defaultTimeScaleIndependent = !!i2371[13]
  i2370.defaultEaseType = i2371[14]
  i2370.defaultEaseOvershootOrAmplitude = i2371[15]
  i2370.defaultEasePeriod = i2371[16]
  i2370.defaultAutoKill = !!i2371[17]
  i2370.defaultLoopType = i2371[18]
  i2370.debugMode = !!i2371[19]
  i2370.debugStoreTargetId = !!i2371[20]
  i2370.showPreviewPanel = !!i2371[21]
  i2370.storeSettingsLocation = i2371[22]
  i2370.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2371[23], i2370.modules)
  i2370.createASMDEF = !!i2371[24]
  i2370.showPlayingTweens = !!i2371[25]
  i2370.showPausedTweens = !!i2371[26]
  return i2370
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2372 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2373 = data
  i2372.logBehaviour = i2373[0]
  i2372.nestedTweenFailureBehaviour = i2373[1]
  return i2372
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2374 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2375 = data
  i2374.showPanel = !!i2375[0]
  i2374.audioEnabled = !!i2375[1]
  i2374.physicsEnabled = !!i2375[2]
  i2374.physics2DEnabled = !!i2375[3]
  i2374.spriteEnabled = !!i2375[4]
  i2374.uiEnabled = !!i2375[5]
  i2374.textMeshProEnabled = !!i2375[6]
  i2374.tk2DEnabled = !!i2375[7]
  i2374.deAudioEnabled = !!i2375[8]
  i2374.deUnityExtendedEnabled = !!i2375[9]
  i2374.epoOutlineEnabled = !!i2375[10]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2377 = data
  var i2379 = i2377[0]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2379[i + 0]) );
  }
  i2376.files = i2378
  i2376.componentToPrefabIds = i2377[1]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2383 = data
  i2382.path = i2383[0]
  request.r(i2383[1], i2383[2], 0, i2382, 'unityObject')
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2385 = data
  var i2387 = i2385[0]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2387[i + 0]) );
  }
  i2384.scriptsExecutionOrder = i2386
  var i2389 = i2385[1]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2389[i + 0]) );
  }
  i2384.sortingLayers = i2388
  var i2391 = i2385[2]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2391[i + 0]) );
  }
  i2384.cullingLayers = i2390
  i2384.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2385[3], i2384.timeSettings)
  i2384.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2385[4], i2384.physicsSettings)
  i2384.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2385[5], i2384.physics2DSettings)
  i2384.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2385[6], i2384.qualitySettings)
  i2384.enableRealtimeShadows = !!i2385[7]
  i2384.enableAutoInstancing = !!i2385[8]
  i2384.enableStaticBatching = !!i2385[9]
  i2384.enableDynamicBatching = !!i2385[10]
  i2384.usePreservativeDynamicBatching = !!i2385[11]
  i2384.lightmapEncodingQuality = i2385[12]
  i2384.desiredColorSpace = i2385[13]
  var i2393 = i2385[14]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( i2393[i + 0] );
  }
  i2384.allTags = i2392
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.value = i2397[1]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2401 = data
  i2400.id = i2401[0]
  i2400.name = i2401[1]
  i2400.value = i2401[2]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2405 = data
  i2404.id = i2405[0]
  i2404.name = i2405[1]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2407 = data
  i2406.fixedDeltaTime = i2407[0]
  i2406.maximumDeltaTime = i2407[1]
  i2406.timeScale = i2407[2]
  i2406.maximumParticleTimestep = i2407[3]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2409 = data
  i2408.gravity = new pc.Vec3( i2409[0], i2409[1], i2409[2] )
  i2408.defaultSolverIterations = i2409[3]
  i2408.bounceThreshold = i2409[4]
  i2408.autoSyncTransforms = !!i2409[5]
  i2408.autoSimulation = !!i2409[6]
  var i2411 = i2409[7]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2411[i + 0]) );
  }
  i2408.collisionMatrix = i2410
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.layerId = i2415[1]
  i2414.otherLayerId = i2415[2]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'material')
  i2416.gravity = new pc.Vec2( i2417[2], i2417[3] )
  i2416.positionIterations = i2417[4]
  i2416.velocityIterations = i2417[5]
  i2416.velocityThreshold = i2417[6]
  i2416.maxLinearCorrection = i2417[7]
  i2416.maxAngularCorrection = i2417[8]
  i2416.maxTranslationSpeed = i2417[9]
  i2416.maxRotationSpeed = i2417[10]
  i2416.baumgarteScale = i2417[11]
  i2416.baumgarteTOIScale = i2417[12]
  i2416.timeToSleep = i2417[13]
  i2416.linearSleepTolerance = i2417[14]
  i2416.angularSleepTolerance = i2417[15]
  i2416.defaultContactOffset = i2417[16]
  i2416.autoSimulation = !!i2417[17]
  i2416.queriesHitTriggers = !!i2417[18]
  i2416.queriesStartInColliders = !!i2417[19]
  i2416.callbacksOnDisable = !!i2417[20]
  i2416.reuseCollisionCallbacks = !!i2417[21]
  i2416.autoSyncTransforms = !!i2417[22]
  var i2419 = i2417[23]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2419[i + 0]) );
  }
  i2416.collisionMatrix = i2418
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.layerId = i2423[1]
  i2422.otherLayerId = i2423[2]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2425 = data
  var i2427 = i2425[0]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2427[i + 0]) );
  }
  i2424.qualityLevels = i2426
  var i2429 = i2425[1]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( i2429[i + 0] );
  }
  i2424.names = i2428
  i2424.shadows = i2425[2]
  i2424.anisotropicFiltering = i2425[3]
  i2424.antiAliasing = i2425[4]
  i2424.lodBias = i2425[5]
  i2424.shadowCascades = i2425[6]
  i2424.shadowDistance = i2425[7]
  i2424.shadowmaskMode = i2425[8]
  i2424.shadowProjection = i2425[9]
  i2424.shadowResolution = i2425[10]
  i2424.softParticles = !!i2425[11]
  i2424.softVegetation = !!i2425[12]
  i2424.activeColorSpace = i2425[13]
  i2424.desiredColorSpace = i2425[14]
  i2424.masterTextureLimit = i2425[15]
  i2424.maxQueuedFrames = i2425[16]
  i2424.particleRaycastBudget = i2425[17]
  i2424.pixelLightCount = i2425[18]
  i2424.realtimeReflectionProbes = !!i2425[19]
  i2424.shadowCascade2Split = i2425[20]
  i2424.shadowCascade4Split = new pc.Vec3( i2425[21], i2425[22], i2425[23] )
  i2424.streamingMipmapsActive = !!i2425[24]
  i2424.vSyncCount = i2425[25]
  i2424.asyncUploadBufferSize = i2425[26]
  i2424.asyncUploadTimeSlice = i2425[27]
  i2424.billboardsFaceCameraPosition = !!i2425[28]
  i2424.shadowNearPlaneOffset = i2425[29]
  i2424.streamingMipmapsMemoryBudget = i2425[30]
  i2424.maximumLODLevel = i2425[31]
  i2424.streamingMipmapsAddAllCameras = !!i2425[32]
  i2424.streamingMipmapsMaxLevelReduction = i2425[33]
  i2424.streamingMipmapsRenderersPerFrame = i2425[34]
  i2424.resolutionScalingFixedDPIFactor = i2425[35]
  i2424.streamingMipmapsMaxFileIORequests = i2425[36]
  i2424.currentQualityLevel = i2425[37]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2435 = data
  i2434.weight = i2435[0]
  i2434.vertices = i2435[1]
  i2434.normals = i2435[2]
  i2434.tangents = i2435[3]
  return i2434
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[14],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[14],"77":[9],"78":[79],"80":[79],"18":[17],"81":[82],"83":[84],"85":[82],"86":[17],"87":[17],"21":[18],"29":[30,17],"88":[17],"20":[18],"89":[17],"90":[17],"91":[17],"92":[17],"93":[17],"94":[17],"95":[17],"96":[17],"97":[17],"98":[30,17],"99":[17],"100":[17],"101":[17],"102":[17],"32":[30,17],"103":[17],"104":[105],"106":[105],"107":[105],"108":[105],"109":[14],"110":[14],"111":[112],"113":[14],"114":[17],"115":[9,17],"116":[17,30],"117":[17],"118":[30,17],"119":[9],"120":[30,17],"121":[17],"122":[82]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexStack","HexTile","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshCollider","HexFloor","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","PlayableUIRoot","HexGameContext","TutorialOverlayController","PackshotController","CountdownTimerPanel","UnityEngine.GameObject","UnityEngine.CanvasGroup","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","HexConfig","HexPoolService","HexManager","HexStacksCreator","HexFloorCreator","HexDragger","HexTransferAnimator","HexClearFxPlayer","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "TestHex";

Deserializers.lunaInitializationTime = "05/25/2026 23:56:59";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "test_3d";

Deserializers.lunaAppID = "40078";

Deserializers.projectId = "72ca743d8c13cb8488a5f26576d5f7d9";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1814";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4067";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.TestHex";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "0c65974e-7852-4d3d-8204-84f3e01daec7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


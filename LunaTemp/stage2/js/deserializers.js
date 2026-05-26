var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointSpring' )
  var i389 = data
  i388.spring = i389[0]
  i388.damper = i389[1]
  i388.targetPosition = i389[2]
  return i388
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointMotor' )
  var i391 = data
  i390.m_TargetVelocity = i391[0]
  i390.m_Force = i391[1]
  i390.m_FreeSpin = i391[2]
  return i390
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointLimits' )
  var i393 = data
  i392.m_Min = i393[0]
  i392.m_Max = i393[1]
  i392.m_Bounciness = i393[2]
  i392.m_BounceMinVelocity = i393[3]
  i392.m_ContactDistance = i393[4]
  i392.minBounce = i393[5]
  i392.maxBounce = i393[6]
  return i392
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointDrive' )
  var i395 = data
  i394.m_PositionSpring = i395[0]
  i394.m_PositionDamper = i395[1]
  i394.m_MaximumForce = i395[2]
  i394.m_UseAcceleration = i395[3]
  return i394
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i397 = data
  i396.m_Spring = i397[0]
  i396.m_Damper = i397[1]
  return i396
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i399 = data
  i398.m_Limit = i399[0]
  i398.m_Bounciness = i399[1]
  i398.m_ContactDistance = i399[2]
  return i398
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i401 = data
  i400.m_ExtremumSlip = i401[0]
  i400.m_ExtremumValue = i401[1]
  i400.m_AsymptoteSlip = i401[2]
  i400.m_AsymptoteValue = i401[3]
  i400.m_Stiffness = i401[4]
  return i400
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i403 = data
  i402.m_LowerAngle = i403[0]
  i402.m_UpperAngle = i403[1]
  return i402
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i405 = data
  i404.m_MotorSpeed = i405[0]
  i404.m_MaximumMotorTorque = i405[1]
  return i404
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i407 = data
  i406.m_DampingRatio = i407[0]
  i406.m_Frequency = i407[1]
  i406.m_Angle = i407[2]
  return i406
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i409 = data
  i408.m_LowerTranslation = i409[0]
  i408.m_UpperTranslation = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i411 = data
  i410.name = i411[0]
  i410.width = i411[1]
  i410.height = i411[2]
  i410.mipmapCount = i411[3]
  i410.anisoLevel = i411[4]
  i410.filterMode = i411[5]
  i410.hdr = !!i411[6]
  i410.format = i411[7]
  i410.wrapMode = i411[8]
  i410.alphaIsTransparency = !!i411[9]
  i410.alphaSource = i411[10]
  i410.graphicsFormat = i411[11]
  i410.sRGBTexture = !!i411[12]
  i410.desiredColorSpace = i411[13]
  i410.wrapU = i411[14]
  i410.wrapV = i411[15]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i412 = root || new pc.UnityMaterial()
  var i413 = data
  i412.name = i413[0]
  request.r(i413[1], i413[2], 0, i412, 'shader')
  i412.renderQueue = i413[3]
  i412.enableInstancing = !!i413[4]
  var i415 = i413[5]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i415[i + 0]) );
  }
  i412.floatParameters = i414
  var i417 = i413[6]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i417[i + 0]) );
  }
  i412.colorParameters = i416
  var i419 = i413[7]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i419[i + 0]) );
  }
  i412.vectorParameters = i418
  var i421 = i413[8]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i421[i + 0]) );
  }
  i412.textureParameters = i420
  var i423 = i413[9]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i423[i + 0]) );
  }
  i412.materialFlags = i422
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i427 = data
  i426.name = i427[0]
  i426.value = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i431 = data
  i430.name = i431[0]
  i430.value = new pc.Color(i431[1], i431[2], i431[3], i431[4])
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i435 = data
  i434.name = i435[0]
  i434.value = new pc.Vec4( i435[1], i435[2], i435[3], i435[4] )
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i439 = data
  i438.name = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'value')
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i443 = data
  i442.name = i443[0]
  i442.enabled = !!i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i445 = data
  i444.position = new pc.Vec3( i445[0], i445[1], i445[2] )
  i444.scale = new pc.Vec3( i445[3], i445[4], i445[5] )
  i444.rotation = new pc.Quat(i445[6], i445[7], i445[8], i445[9])
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i447 = data
  i446.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i447[0], i446.main)
  i446.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i447[1], i446.colorBySpeed)
  i446.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i447[2], i446.colorOverLifetime)
  i446.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i447[3], i446.emission)
  i446.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i447[4], i446.rotationBySpeed)
  i446.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i447[5], i446.rotationOverLifetime)
  i446.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i447[6], i446.shape)
  i446.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i447[7], i446.sizeBySpeed)
  i446.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i447[8], i446.sizeOverLifetime)
  i446.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i447[9], i446.textureSheetAnimation)
  i446.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i447[10], i446.velocityOverLifetime)
  i446.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i447[11], i446.noise)
  i446.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i447[12], i446.inheritVelocity)
  i446.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i447[13], i446.forceOverLifetime)
  i446.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i447[14], i446.limitVelocityOverLifetime)
  i446.useAutoRandomSeed = !!i447[15]
  i446.randomSeed = i447[16]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i448 = root || new pc.ParticleSystemMain()
  var i449 = data
  i448.duration = i449[0]
  i448.loop = !!i449[1]
  i448.prewarm = !!i449[2]
  i448.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[3], i448.startDelay)
  i448.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[4], i448.startLifetime)
  i448.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[5], i448.startSpeed)
  i448.startSize3D = !!i449[6]
  i448.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[7], i448.startSizeX)
  i448.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[8], i448.startSizeY)
  i448.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[9], i448.startSizeZ)
  i448.startRotation3D = !!i449[10]
  i448.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[11], i448.startRotationX)
  i448.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[12], i448.startRotationY)
  i448.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[13], i448.startRotationZ)
  i448.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i449[14], i448.startColor)
  i448.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[15], i448.gravityModifier)
  i448.simulationSpace = i449[16]
  request.r(i449[17], i449[18], 0, i448, 'customSimulationSpace')
  i448.simulationSpeed = i449[19]
  i448.useUnscaledTime = !!i449[20]
  i448.scalingMode = i449[21]
  i448.playOnAwake = !!i449[22]
  i448.maxParticles = i449[23]
  i448.emitterVelocityMode = i449[24]
  i448.stopAction = i449[25]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i450 = root || new pc.MinMaxCurve()
  var i451 = data
  i450.mode = i451[0]
  i450.curveMin = new pc.AnimationCurve( { keys_flow: i451[1] } )
  i450.curveMax = new pc.AnimationCurve( { keys_flow: i451[2] } )
  i450.curveMultiplier = i451[3]
  i450.constantMin = i451[4]
  i450.constantMax = i451[5]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i452 = root || new pc.MinMaxGradient()
  var i453 = data
  i452.mode = i453[0]
  i452.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i453[1], i452.gradientMin)
  i452.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i453[2], i452.gradientMax)
  i452.colorMin = new pc.Color(i453[3], i453[4], i453[5], i453[6])
  i452.colorMax = new pc.Color(i453[7], i453[8], i453[9], i453[10])
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i455 = data
  i454.mode = i455[0]
  var i457 = i455[1]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i457[i + 0]) );
  }
  i454.colorKeys = i456
  var i459 = i455[2]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i459[i + 0]) );
  }
  i454.alphaKeys = i458
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i460 = root || new pc.ParticleSystemColorBySpeed()
  var i461 = data
  i460.enabled = !!i461[0]
  i460.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i461[1], i460.color)
  i460.range = new pc.Vec2( i461[2], i461[3] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i465 = data
  i464.color = new pc.Color(i465[0], i465[1], i465[2], i465[3])
  i464.time = i465[4]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i469 = data
  i468.alpha = i469[0]
  i468.time = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemColorOverLifetime()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i471[1], i470.color)
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemEmitter()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.rateOverTime)
  i472.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.rateOverDistance)
  var i475 = i473[3]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i475[i + 0]) );
  }
  i472.bursts = i474
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemBurst()
  var i479 = data
  i478.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[0], i478.count)
  i478.cycleCount = i479[1]
  i478.minCount = i479[2]
  i478.maxCount = i479[3]
  i478.repeatInterval = i479[4]
  i478.time = i479[5]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemRotationBySpeed()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[1], i480.x)
  i480.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[2], i480.y)
  i480.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[3], i480.z)
  i480.separateAxes = !!i481[4]
  i480.range = new pc.Vec2( i481[5], i481[6] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemRotationOverLifetime()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[1], i482.x)
  i482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[2], i482.y)
  i482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.z)
  i482.separateAxes = !!i483[4]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemShape()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.shapeType = i485[1]
  i484.randomDirectionAmount = i485[2]
  i484.sphericalDirectionAmount = i485[3]
  i484.randomPositionAmount = i485[4]
  i484.alignToDirection = !!i485[5]
  i484.radius = i485[6]
  i484.radiusMode = i485[7]
  i484.radiusSpread = i485[8]
  i484.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[9], i484.radiusSpeed)
  i484.radiusThickness = i485[10]
  i484.angle = i485[11]
  i484.length = i485[12]
  i484.boxThickness = new pc.Vec3( i485[13], i485[14], i485[15] )
  i484.meshShapeType = i485[16]
  request.r(i485[17], i485[18], 0, i484, 'mesh')
  request.r(i485[19], i485[20], 0, i484, 'meshRenderer')
  request.r(i485[21], i485[22], 0, i484, 'skinnedMeshRenderer')
  i484.useMeshMaterialIndex = !!i485[23]
  i484.meshMaterialIndex = i485[24]
  i484.useMeshColors = !!i485[25]
  i484.normalOffset = i485[26]
  i484.arc = i485[27]
  i484.arcMode = i485[28]
  i484.arcSpread = i485[29]
  i484.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[30], i484.arcSpeed)
  i484.donutRadius = i485[31]
  i484.position = new pc.Vec3( i485[32], i485[33], i485[34] )
  i484.rotation = new pc.Vec3( i485[35], i485[36], i485[37] )
  i484.scale = new pc.Vec3( i485[38], i485[39], i485[40] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemSizeBySpeed()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[1], i486.x)
  i486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.y)
  i486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[3], i486.z)
  i486.separateAxes = !!i487[4]
  i486.range = new pc.Vec2( i487[5], i487[6] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemSizeOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.x)
  i488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.y)
  i488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.z)
  i488.separateAxes = !!i489[4]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.mode = i491[1]
  i490.animation = i491[2]
  i490.numTilesX = i491[3]
  i490.numTilesY = i491[4]
  i490.useRandomRow = !!i491[5]
  i490.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[6], i490.frameOverTime)
  i490.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[7], i490.startFrame)
  i490.cycleCount = i491[8]
  i490.rowIndex = i491[9]
  i490.flipU = i491[10]
  i490.flipV = i491[11]
  i490.spriteCount = i491[12]
  var i493 = i491[13]
  var i492 = []
  for(var i = 0; i < i493.length; i += 2) {
  request.r(i493[i + 0], i493[i + 1], 2, i492, '')
  }
  i490.sprites = i492
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[1], i496.x)
  i496.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[2], i496.y)
  i496.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[3], i496.z)
  i496.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[4], i496.radial)
  i496.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[5], i496.speedModifier)
  i496.space = i497[6]
  i496.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[7], i496.orbitalX)
  i496.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[8], i496.orbitalY)
  i496.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[9], i496.orbitalZ)
  i496.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[10], i496.orbitalOffsetX)
  i496.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[11], i496.orbitalOffsetY)
  i496.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[12], i496.orbitalOffsetZ)
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemNoise()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.separateAxes = !!i499[1]
  i498.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[2], i498.strengthX)
  i498.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[3], i498.strengthY)
  i498.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[4], i498.strengthZ)
  i498.frequency = i499[5]
  i498.damping = !!i499[6]
  i498.octaveCount = i499[7]
  i498.octaveMultiplier = i499[8]
  i498.octaveScale = i499[9]
  i498.quality = i499[10]
  i498.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[11], i498.scrollSpeed)
  i498.scrollSpeedMultiplier = i499[12]
  i498.remapEnabled = !!i499[13]
  i498.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[14], i498.remapX)
  i498.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[15], i498.remapY)
  i498.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[16], i498.remapZ)
  i498.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[17], i498.positionAmount)
  i498.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[18], i498.rotationAmount)
  i498.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[19], i498.sizeAmount)
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemInheritVelocity()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.mode = i501[1]
  i500.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[2], i500.curve)
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemForceOverLifetime()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[1], i502.x)
  i502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[2], i502.y)
  i502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[3], i502.z)
  i502.space = i503[4]
  i502.randomized = !!i503[5]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.limit)
  i504.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.limitX)
  i504.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.limitY)
  i504.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[4], i504.limitZ)
  i504.dampen = i505[5]
  i504.separateAxes = !!i505[6]
  i504.space = i505[7]
  i504.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[8], i504.drag)
  i504.multiplyDragByParticleSize = !!i505[9]
  i504.multiplyDragByParticleVelocity = !!i505[10]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'mesh')
  i506.meshCount = i507[2]
  i506.activeVertexStreamsCount = i507[3]
  i506.alignment = i507[4]
  i506.renderMode = i507[5]
  i506.sortMode = i507[6]
  i506.lengthScale = i507[7]
  i506.velocityScale = i507[8]
  i506.cameraVelocityScale = i507[9]
  i506.normalDirection = i507[10]
  i506.sortingFudge = i507[11]
  i506.minParticleSize = i507[12]
  i506.maxParticleSize = i507[13]
  i506.pivot = new pc.Vec3( i507[14], i507[15], i507[16] )
  request.r(i507[17], i507[18], 0, i506, 'trailMaterial')
  i506.applyActiveColorSpace = !!i507[19]
  i506.enabled = !!i507[20]
  request.r(i507[21], i507[22], 0, i506, 'sharedMaterial')
  var i509 = i507[23]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i506.sharedMaterials = i508
  i506.receiveShadows = !!i507[24]
  i506.shadowCastingMode = i507[25]
  i506.sortingLayerID = i507[26]
  i506.sortingOrder = i507[27]
  i506.lightmapIndex = i507[28]
  i506.lightmapSceneIndex = i507[29]
  i506.lightmapScaleOffset = new pc.Vec4( i507[30], i507[31], i507[32], i507[33] )
  i506.lightProbeUsage = i507[34]
  i506.reflectionProbeUsage = i507[35]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i513 = data
  i512.name = i513[0]
  i512.tagId = i513[1]
  i512.enabled = !!i513[2]
  i512.isStatic = !!i513[3]
  i512.layer = i513[4]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i515 = data
  i514.name = i515[0]
  i514.halfPrecision = !!i515[1]
  i514.useSimplification = !!i515[2]
  i514.useUInt32IndexFormat = !!i515[3]
  i514.vertexCount = i515[4]
  i514.aabb = i515[5]
  var i517 = i515[6]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( !!i517[i + 0] );
  }
  i514.streams = i516
  i514.vertices = i515[7]
  var i519 = i515[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i519[i + 0]) );
  }
  i514.subMeshes = i518
  var i521 = i515[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 16) {
    i520.push( new pc.Mat4().setData(i521[i + 0], i521[i + 1], i521[i + 2], i521[i + 3],  i521[i + 4], i521[i + 5], i521[i + 6], i521[i + 7],  i521[i + 8], i521[i + 9], i521[i + 10], i521[i + 11],  i521[i + 12], i521[i + 13], i521[i + 14], i521[i + 15]) );
  }
  i514.bindposes = i520
  var i523 = i515[10]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i523[i + 0]) );
  }
  i514.blendShapes = i522
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i529 = data
  i528.triangles = i529[0]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i535 = data
  i534.name = i535[0]
  var i537 = i535[1]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i537[i + 0]) );
  }
  i534.frames = i536
  return i534
}

Deserializers["HexTile"] = function (request, data, root) {
  var i538 = root || request.c( 'HexTile' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'myMeshRenderer')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'sharedMesh')
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'additionalVertexStreams')
  i542.enabled = !!i543[2]
  request.r(i543[3], i543[4], 0, i542, 'sharedMaterial')
  var i545 = i543[5]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.sharedMaterials = i544
  i542.receiveShadows = !!i543[6]
  i542.shadowCastingMode = i543[7]
  i542.sortingLayerID = i543[8]
  i542.sortingOrder = i543[9]
  i542.lightmapIndex = i543[10]
  i542.lightmapSceneIndex = i543[11]
  i542.lightmapScaleOffset = new pc.Vec4( i543[12], i543[13], i543[14], i543[15] )
  i542.lightProbeUsage = i543[16]
  i542.reflectionProbeUsage = i543[17]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'sharedMesh')
  i546.convex = !!i547[2]
  i546.enabled = !!i547[3]
  i546.isTrigger = !!i547[4]
  request.r(i547[5], i547[6], 0, i546, 'material')
  return i546
}

Deserializers["HexStack"] = function (request, data, root) {
  var i548 = root || request.c( 'HexStack' )
  var i549 = data
  var i551 = i549[0]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('HexTile')))
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 1, i550, '')
  }
  i548.hexTiles = i550
  request.r(i549[1], i549[2], 0, i548, 'tileTemplate')
  request.r(i549[3], i549[4], 0, i548, 'anchorPos')
  i548.tileStep = i549[5]
  i548.tileBaseLocalPosition = new pc.Vec3( i549[6], i549[7], i549[8] )
  i548.hideWhenEmpty = !!i549[9]
  return i548
}

Deserializers["HexDragger"] = function (request, data, root) {
  var i554 = root || request.c( 'HexDragger' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'inputCamera')
  i554.pickMaxDistance = i555[2]
  i554.interactionMask = UnityEngine.LayerMask.FromIntegerValue( i555[3] )
  i554.floorCheckStartHeight = i555[4]
  i554.floorCheckDistance = i555[5]
  i554.floorRaycastBufferSize = i555[6]
  i554.liftHeight = i555[7]
  i554.liftDuration = i555[8]
  i554.liftEase = i555[9]
  i554.attachMoveDuration = i555[10]
  i554.attachMoveEase = i555[11]
  i554.dropDuration = i555[12]
  i554.dropEase = i555[13]
  i554.destroyOnSuccessfulDrop = !!i555[14]
  return i554
}

Deserializers["HexFloor"] = function (request, data, root) {
  var i556 = root || request.c( 'HexFloor' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'stackAnchor')
  var i559 = i557[2]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.highlightRenderers = i558
  i556.dropHighlightColor = new pc.Color(i557[3], i557[4], i557[5], i557[6])
  i556.dropHighlightBlend = i557[7]
  i556.useEmissionHighlight = !!i557[8]
  i556.dropHighlightEmissionColor = new pc.Color(i557[9], i557[10], i557[11], i557[12])
  i556.autoFindOnAwake = !!i557[13]
  i556.neighborSearchDistance = i557[14]
  i556.rayHeight = i557[15]
  i556.neighborRaycastBufferSize = i557[16]
  i556.searchMask = UnityEngine.LayerMask.FromIntegerValue( i557[17] )
  i556.sideDirectionOffsetDegrees = i557[18]
  var i561 = i557[19]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i556.sideNeighbors = i560
  i556.drawSideRays = !!i557[20]
  i556.gizmoSideOffset = i557[21]
  i556.gizmoRayLength = i557[22]
  i556.gizmoSphereRadius = i557[23]
  i556.gizmoNoNeighborColor = new pc.Color(i557[24], i557[25], i557[26], i557[27])
  i556.gizmoNeighborColor = new pc.Color(i557[28], i557[29], i557[30], i557[31])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i567 = data
  i566.name = i567[0]
  i566.atlasId = i567[1]
  i566.mipmapCount = i567[2]
  i566.hdr = !!i567[3]
  i566.size = i567[4]
  i566.anisoLevel = i567[5]
  i566.filterMode = i567[6]
  var i569 = i567[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 4) {
    i568.push( UnityEngine.Rect.MinMaxRect(i569[i + 0], i569[i + 1], i569[i + 2], i569[i + 3]) );
  }
  i566.rects = i568
  i566.wrapU = i567[8]
  i566.wrapV = i567[9]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i573 = data
  i572.name = i573[0]
  i572.index = i573[1]
  i572.startup = !!i573[2]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i575 = data
  i574.aspect = i575[0]
  i574.orthographic = !!i575[1]
  i574.orthographicSize = i575[2]
  i574.backgroundColor = new pc.Color(i575[3], i575[4], i575[5], i575[6])
  i574.nearClipPlane = i575[7]
  i574.farClipPlane = i575[8]
  i574.fieldOfView = i575[9]
  i574.depth = i575[10]
  i574.clearFlags = i575[11]
  i574.cullingMask = i575[12]
  i574.rect = i575[13]
  request.r(i575[14], i575[15], 0, i574, 'targetTexture')
  i574.usePhysicalProperties = !!i575[16]
  i574.focalLength = i575[17]
  i574.sensorSize = new pc.Vec2( i575[18], i575[19] )
  i574.lensShift = new pc.Vec2( i575[20], i575[21] )
  i574.gateFit = i575[22]
  i574.commandBufferCount = i575[23]
  i574.cameraType = i575[24]
  i574.enabled = !!i575[25]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i577 = data
  i576.type = i577[0]
  i576.color = new pc.Color(i577[1], i577[2], i577[3], i577[4])
  i576.cullingMask = i577[5]
  i576.intensity = i577[6]
  i576.range = i577[7]
  i576.spotAngle = i577[8]
  i576.shadows = i577[9]
  i576.shadowNormalBias = i577[10]
  i576.shadowBias = i577[11]
  i576.shadowStrength = i577[12]
  i576.shadowResolution = i577[13]
  i576.lightmapBakeType = i577[14]
  i576.renderMode = i577[15]
  request.r(i577[16], i577[17], 0, i576, 'cookie')
  i576.cookieSize = i577[18]
  i576.shadowNearPlane = i577[19]
  i576.occlusionMaskChannel = i577[20]
  i576.isBaked = !!i577[21]
  i576.mixedLightingMode = i577[22]
  i576.enabled = !!i577[23]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i579 = data
  i578.pivot = new pc.Vec2( i579[0], i579[1] )
  i578.anchorMin = new pc.Vec2( i579[2], i579[3] )
  i578.anchorMax = new pc.Vec2( i579[4], i579[5] )
  i578.sizeDelta = new pc.Vec2( i579[6], i579[7] )
  i578.anchoredPosition3D = new pc.Vec3( i579[8], i579[9], i579[10] )
  i578.rotation = new pc.Quat(i579[11], i579[12], i579[13], i579[14])
  i578.scale = new pc.Vec3( i579[15], i579[16], i579[17] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i581 = data
  i580.planeDistance = i581[0]
  i580.referencePixelsPerUnit = i581[1]
  i580.isFallbackOverlay = !!i581[2]
  i580.renderMode = i581[3]
  i580.renderOrder = i581[4]
  i580.sortingLayerName = i581[5]
  i580.sortingOrder = i581[6]
  i580.scaleFactor = i581[7]
  request.r(i581[8], i581[9], 0, i580, 'worldCamera')
  i580.overrideSorting = !!i581[10]
  i580.pixelPerfect = !!i581[11]
  i580.targetDisplay = i581[12]
  i580.overridePixelPerfect = !!i581[13]
  i580.enabled = !!i581[14]
  return i580
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i583 = data
  i582.m_UiScaleMode = i583[0]
  i582.m_ReferencePixelsPerUnit = i583[1]
  i582.m_ScaleFactor = i583[2]
  i582.m_ReferenceResolution = new pc.Vec2( i583[3], i583[4] )
  i582.m_ScreenMatchMode = i583[5]
  i582.m_MatchWidthOrHeight = i583[6]
  i582.m_PhysicalUnit = i583[7]
  i582.m_FallbackScreenDPI = i583[8]
  i582.m_DefaultSpriteDPI = i583[9]
  i582.m_DynamicPixelsPerUnit = i583[10]
  i582.m_PresetInfoIsWorld = !!i583[11]
  return i582
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i585 = data
  i584.m_IgnoreReversedGraphics = !!i585[0]
  i584.m_BlockingObjects = i585[1]
  i584.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i585[2] )
  return i584
}

Deserializers["PlayableUIRoot"] = function (request, data, root) {
  var i586 = root || request.c( 'PlayableUIRoot' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'tutorialController')
  request.r(i587[2], i587[3], 0, i586, 'packshotController')
  request.r(i587[4], i587[5], 0, i586, 'countdownTimerPanel')
  return i586
}

Deserializers["TutorialOverlayController"] = function (request, data, root) {
  var i588 = root || request.c( 'TutorialOverlayController' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'tutorialRoot')
  request.r(i589[2], i589[3], 0, i588, 'handTransform')
  request.r(i589[4], i589[5], 0, i588, 'fromAnchor')
  request.r(i589[6], i589[7], 0, i588, 'toAnchor')
  i588.startOnEnable = !!i589[8]
  i588.completeOnSuccessfulDrop = !!i589[9]
  i588.restartDelay = i589[10]
  i588.handMoveDuration = i589[11]
  i588.handPauseDuration = i589[12]
  i588.handMoveEase = i589[13]
  return i588
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i590 = root || request.c( 'PackshotController' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'packshotRoot')
  request.r(i591[2], i591[3], 0, i590, 'packshotCanvasGroup')
  request.r(i591[4], i591[5], 0, i590, 'backgroundObject')
  request.r(i591[6], i591[7], 0, i590, 'logoObject')
  request.r(i591[8], i591[9], 0, i590, 'playNowButtonObject')
  i590.hideOnStart = !!i591[10]
  i590.reactToAnyTap = !!i591[11]
  i590.fadeDuration = i591[12]
  i590.fadeEase = i591[13]
  return i590
}

Deserializers["CountdownTimerPanel"] = function (request, data, root) {
  var i592 = root || request.c( 'CountdownTimerPanel' )
  var i593 = data
  i592.durationSeconds = i593[0]
  i592.autoStartOnEnable = !!i593[1]
  i592.lowTimeThresholdNormalized = i593[2]
  i592.barFrameNormalColor = new pc.Color(i593[3], i593[4], i593[5], i593[6])
  i592.barBackNormalColor = new pc.Color(i593[7], i593[8], i593[9], i593[10])
  i592.barFillNormalColor = new pc.Color(i593[11], i593[12], i593[13], i593[14])
  i592.iconFrameNormalColor = new pc.Color(i593[15], i593[16], i593[17], i593[18])
  i592.iconBackNormalColor = new pc.Color(i593[19], i593[20], i593[21], i593[22])
  i592.barFrameLowColor = new pc.Color(i593[23], i593[24], i593[25], i593[26])
  i592.barBackLowColor = new pc.Color(i593[27], i593[28], i593[29], i593[30])
  i592.barFillLowColor = new pc.Color(i593[31], i593[32], i593[33], i593[34])
  i592.iconFrameLowColor = new pc.Color(i593[35], i593[36], i593[37], i593[38])
  i592.iconBackLowColor = new pc.Color(i593[39], i593[40], i593[41], i593[42])
  i592.arrowStartAngle = i593[43]
  i592.arrowEndAngle = i593[44]
  i592.arrowNormalColor = new pc.Color(i593[45], i593[46], i593[47], i593[48])
  i592.iconShakeDuration = i593[49]
  i592.iconShakeStrength = i593[50]
  i592.iconShakeVibrato = i593[51]
  i592.lowBackdropBlendRange = i593[52]
  request.r(i593[53], i593[54], 0, i592, 'panelRoot')
  request.r(i593[55], i593[56], 0, i592, 'barFrameImage')
  request.r(i593[57], i593[58], 0, i592, 'barBackImage')
  request.r(i593[59], i593[60], 0, i592, 'barFillImage')
  request.r(i593[61], i593[62], 0, i592, 'iconRoot')
  request.r(i593[63], i593[64], 0, i592, 'iconFrameImage')
  request.r(i593[65], i593[66], 0, i592, 'iconBackImage')
  request.r(i593[67], i593[68], 0, i592, 'iconNubImage')
  request.r(i593[69], i593[70], 0, i592, 'arrowTransform')
  request.r(i593[71], i593[72], 0, i592, 'arrowImage')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i595 = data
  i594.cullTransparentMesh = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Image' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Sprite')
  i596.m_Type = i597[2]
  i596.m_PreserveAspect = !!i597[3]
  i596.m_FillCenter = !!i597[4]
  i596.m_FillMethod = i597[5]
  i596.m_FillAmount = i597[6]
  i596.m_FillClockwise = !!i597[7]
  i596.m_FillOrigin = i597[8]
  i596.m_UseSpriteMesh = !!i597[9]
  i596.m_PixelsPerUnitMultiplier = i597[10]
  request.r(i597[11], i597[12], 0, i596, 'm_Material')
  i596.m_Maskable = !!i597[13]
  i596.m_Color = new pc.Color(i597[14], i597[15], i597[16], i597[17])
  i596.m_RaycastTarget = !!i597[18]
  i596.m_RaycastPadding = new pc.Vec4( i597[19], i597[20], i597[21], i597[22] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i599 = data
  i598.m_Alpha = i599[0]
  i598.m_Interactable = !!i599[1]
  i598.m_BlocksRaycasts = !!i599[2]
  i598.m_IgnoreParentGroups = !!i599[3]
  i598.enabled = !!i599[4]
  return i598
}

Deserializers["HexGameContext"] = function (request, data, root) {
  var i600 = root || request.c( 'HexGameContext' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'config')
  request.r(i601[2], i601[3], 0, i600, 'poolService')
  request.r(i601[4], i601[5], 0, i600, 'manager')
  request.r(i601[6], i601[7], 0, i600, 'stacksCreator')
  request.r(i601[8], i601[9], 0, i600, 'floorCreator')
  return i600
}

Deserializers["HexManager"] = function (request, data, root) {
  var i602 = root || request.c( 'HexManager' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'gameContext')
  i602.transferOnStackPlaced = !!i603[2]
  request.r(i603[3], i603[4], 0, i602, 'transferAnimator')
  i602.transferSpeedIncreasePerStack = i603[5]
  i602.clearSpeedIncreasePerStack = i603[6]
  i602.topMatchClearCount = i603[7]
  i602.clearScaleDuration = i603[8]
  i602.clearScaleEase = i603[9]
  i602.clearScaleStagger = i603[10]
  request.r(i603[11], i603[12], 0, i602, 'clearFxPlayer')
  i602.logTransferEvents = !!i603[13]
  return i602
}

Deserializers["HexTransferAnimator"] = function (request, data, root) {
  var i604 = root || request.c( 'HexTransferAnimator' )
  var i605 = data
  i604.logTransferAnimatorEvents = !!i605[0]
  i604.tileFlipDuration = i605[1]
  i604.tileFlipEase = i605[2]
  i604.tileSettleDuration = i605[3]
  i604.tileSettleEase = i605[4]
  i604.tileTransferFanStagger = i605[5]
  return i604
}

Deserializers["HexClearFxPlayer"] = function (request, data, root) {
  var i606 = root || request.c( 'HexClearFxPlayer' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'clearTilesFxPrefab')
  i606.clearTilesFxLifetimePadding = i607[2]
  return i606
}

Deserializers["HexFloorCreator"] = function (request, data, root) {
  var i608 = root || request.c( 'HexFloorCreator' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'gameContext')
  request.r(i609[2], i609[3], 0, i608, 'floorPrefab')
  request.r(i609[4], i609[5], 0, i608, 'floorRoot')
  request.r(i609[6], i609[7], 0, i608, 'bottomRowAnchor')
  i608.generateOnStart = !!i609[8]
  i608.clearBeforeGenerate = !!i609[9]
  i608.refreshNeighborsAfterGenerate = !!i609[10]
  i608.neighborDistance = i609[11]
  i608.shiftOddColumnsForward = !!i609[12]
  i608.anchorLocalOffset = new pc.Vec3( i609[13], i609[14], i609[15] )
  return i608
}

Deserializers["HexStacksCreator"] = function (request, data, root) {
  var i610 = root || request.c( 'HexStacksCreator' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'gameContext')
  request.r(i611[2], i611[3], 0, i610, 'spawnStackPrefab')
  request.r(i611[4], i611[5], 0, i610, 'stacksRoot')
  var i613 = i611[6]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.stackSlots = i612
  i610.spawnOnStart = !!i611[7]
  i610.clearExistingOnStart = !!i611[8]
  i610.respawnWhenAllPlaced = !!i611[9]
  i610.spawnSlotsOnlyOnce = !!i611[10]
  i610.slotOccupancyRadius = i611[11]
  return i610
}

Deserializers["HexPoolService"] = function (request, data, root) {
  var i616 = root || request.c( 'HexPoolService' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'stackPoolRoot')
  request.r(i617[2], i617[3], 0, i616, 'tilePoolRoot')
  request.r(i617[4], i617[5], 0, i616, 'fxPoolRoot')
  i616.prewarmStackCount = i617[6]
  i616.prewarmTileCount = i617[7]
  i616.prewarmFxCount = i617[8]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i619 = data
  i618.ambientIntensity = i619[0]
  i618.reflectionIntensity = i619[1]
  i618.ambientMode = i619[2]
  i618.ambientLight = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.ambientSkyColor = new pc.Color(i619[7], i619[8], i619[9], i619[10])
  i618.ambientGroundColor = new pc.Color(i619[11], i619[12], i619[13], i619[14])
  i618.ambientEquatorColor = new pc.Color(i619[15], i619[16], i619[17], i619[18])
  i618.fogColor = new pc.Color(i619[19], i619[20], i619[21], i619[22])
  i618.fogEndDistance = i619[23]
  i618.fogStartDistance = i619[24]
  i618.fogDensity = i619[25]
  i618.fog = !!i619[26]
  request.r(i619[27], i619[28], 0, i618, 'skybox')
  i618.fogMode = i619[29]
  var i621 = i619[30]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i621[i + 0]) );
  }
  i618.lightmaps = i620
  i618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i619[31], i618.lightProbes)
  i618.lightmapsMode = i619[32]
  i618.mixedBakeMode = i619[33]
  i618.environmentLightingMode = i619[34]
  i618.ambientProbe = new pc.SphericalHarmonicsL2(i619[35])
  request.r(i619[36], i619[37], 0, i618, 'customReflection')
  request.r(i619[38], i619[39], 0, i618, 'defaultReflection')
  i618.defaultReflectionMode = i619[40]
  i618.defaultReflectionResolution = i619[41]
  i618.sunLightObjectId = i619[42]
  i618.pixelLightCount = i619[43]
  i618.defaultReflectionHDR = !!i619[44]
  i618.hasLightDataAsset = !!i619[45]
  i618.hasManualGenerate = !!i619[46]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'lightmapColor')
  request.r(i625[2], i625[3], 0, i624, 'lightmapDirection')
  request.r(i625[4], i625[5], 0, i624, 'shadowMask')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i626 = root || new UnityEngine.LightProbes()
  var i627 = data
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i635 = data
  var i637 = i635[0]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i637[i + 0]));
  }
  i634.ShaderCompilationErrors = i636
  i634.name = i635[1]
  i634.guid = i635[2]
  var i639 = i635[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i634.shaderDefinedKeywords = i638
  var i641 = i635[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i641[i + 0]) );
  }
  i634.passes = i640
  var i643 = i635[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i643[i + 0]) );
  }
  i634.usePasses = i642
  var i645 = i635[6]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i645[i + 0]) );
  }
  i634.defaultParameterValues = i644
  request.r(i635[7], i635[8], 0, i634, 'unityFallbackShader')
  i634.readDepth = !!i635[9]
  i634.hasDepthOnlyPass = !!i635[10]
  i634.isCreatedByShaderGraph = !!i635[11]
  i634.disableBatching = !!i635[12]
  i634.compiled = !!i635[13]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i649 = data
  i648.shaderName = i649[0]
  i648.errorMessage = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i654 = root || new pc.UnityShaderPass()
  var i655 = data
  i654.id = i655[0]
  i654.subShaderIndex = i655[1]
  i654.name = i655[2]
  i654.passType = i655[3]
  i654.grabPassTextureName = i655[4]
  i654.usePass = !!i655[5]
  i654.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[6], i654.zTest)
  i654.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[7], i654.zWrite)
  i654.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[8], i654.culling)
  i654.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[9], i654.blending)
  i654.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[10], i654.alphaBlending)
  i654.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[11], i654.colorWriteMask)
  i654.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[12], i654.offsetUnits)
  i654.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[13], i654.offsetFactor)
  i654.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[14], i654.stencilRef)
  i654.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[15], i654.stencilReadMask)
  i654.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[16], i654.stencilWriteMask)
  i654.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[17], i654.stencilOp)
  i654.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[18], i654.stencilOpFront)
  i654.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[19], i654.stencilOpBack)
  var i657 = i655[20]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i657[i + 0]) );
  }
  i654.tags = i656
  var i659 = i655[21]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.passDefinedKeywords = i658
  var i661 = i655[22]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i661[i + 0]) );
  }
  i654.passDefinedKeywordGroups = i660
  var i663 = i655[23]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i663[i + 0]) );
  }
  i654.variants = i662
  var i665 = i655[24]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i665[i + 0]) );
  }
  i654.excludedVariants = i664
  i654.hasDepthReader = !!i655[25]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i667 = data
  i666.val = i667[0]
  i666.name = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i669 = data
  i668.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[0], i668.src)
  i668.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[1], i668.dst)
  i668.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[2], i668.op)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i671 = data
  i670.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[0], i670.pass)
  i670.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[1], i670.fail)
  i670.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[2], i670.zFail)
  i670.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[3], i670.comp)
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i675 = data
  i674.name = i675[0]
  i674.value = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i679 = data
  var i681 = i679[0]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i678.keywords = i680
  i678.hasDiscard = !!i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i685 = data
  i684.passId = i685[0]
  i684.subShaderIndex = i685[1]
  var i687 = i685[2]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( i687[i + 0] );
  }
  i684.keywords = i686
  i684.vertexProgram = i685[3]
  i684.fragmentProgram = i685[4]
  i684.exportedForWebGl2 = !!i685[5]
  i684.readDepth = !!i685[6]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'shader')
  i690.pass = i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i695 = data
  i694.name = i695[0]
  i694.type = i695[1]
  i694.value = new pc.Vec4( i695[2], i695[3], i695[4], i695[5] )
  i694.textureValue = i695[6]
  i694.shaderPropertyFlag = i695[7]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'texture')
  i696.aabb = i697[3]
  i696.vertices = i697[4]
  i696.triangles = i697[5]
  i696.textureRect = UnityEngine.Rect.MinMaxRect(i697[6], i697[7], i697[8], i697[9])
  i696.packedRect = UnityEngine.Rect.MinMaxRect(i697[10], i697[11], i697[12], i697[13])
  i696.border = new pc.Vec4( i697[14], i697[15], i697[16], i697[17] )
  i696.transparency = i697[18]
  i696.bounds = i697[19]
  i696.pixelsPerUnit = i697[20]
  i696.textureWidth = i697[21]
  i696.textureHeight = i697[22]
  i696.nativeSize = new pc.Vec2( i697[23], i697[24] )
  i696.pivot = new pc.Vec2( i697[25], i697[26] )
  i696.textureRectOffset = new pc.Vec2( i697[27], i697[28] )
  return i696
}

Deserializers["HexConfig"] = function (request, data, root) {
  var i698 = root || request.c( 'HexConfig' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.colors = i700
  var i703 = i699[1]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('HexConfig+StackColorPreset', i703[i + 0]) );
  }
  i698.startStackColors = i702
  i698.floorWidth = i699[2]
  i698.floorLength = i699[3]
  return i698
}

Deserializers["HexConfig+StackColorPreset"] = function (request, data, root) {
  var i706 = root || request.c( 'HexConfig+StackColorPreset' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.colorsBottomToTop = i708
  return i706
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i711 = data
  i710.useSafeMode = !!i711[0]
  i710.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i711[1], i710.safeModeOptions)
  i710.timeScale = i711[2]
  i710.unscaledTimeScale = i711[3]
  i710.useSmoothDeltaTime = !!i711[4]
  i710.maxSmoothUnscaledTime = i711[5]
  i710.rewindCallbackMode = i711[6]
  i710.showUnityEditorReport = !!i711[7]
  i710.logBehaviour = i711[8]
  i710.drawGizmos = !!i711[9]
  i710.defaultRecyclable = !!i711[10]
  i710.defaultAutoPlay = i711[11]
  i710.defaultUpdateType = i711[12]
  i710.defaultTimeScaleIndependent = !!i711[13]
  i710.defaultEaseType = i711[14]
  i710.defaultEaseOvershootOrAmplitude = i711[15]
  i710.defaultEasePeriod = i711[16]
  i710.defaultAutoKill = !!i711[17]
  i710.defaultLoopType = i711[18]
  i710.debugMode = !!i711[19]
  i710.debugStoreTargetId = !!i711[20]
  i710.showPreviewPanel = !!i711[21]
  i710.storeSettingsLocation = i711[22]
  i710.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i711[23], i710.modules)
  i710.createASMDEF = !!i711[24]
  i710.showPlayingTweens = !!i711[25]
  i710.showPausedTweens = !!i711[26]
  return i710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i713 = data
  i712.logBehaviour = i713[0]
  i712.nestedTweenFailureBehaviour = i713[1]
  return i712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i715 = data
  i714.showPanel = !!i715[0]
  i714.audioEnabled = !!i715[1]
  i714.physicsEnabled = !!i715[2]
  i714.physics2DEnabled = !!i715[3]
  i714.spriteEnabled = !!i715[4]
  i714.uiEnabled = !!i715[5]
  i714.textMeshProEnabled = !!i715[6]
  i714.tk2DEnabled = !!i715[7]
  i714.deAudioEnabled = !!i715[8]
  i714.deUnityExtendedEnabled = !!i715[9]
  i714.epoOutlineEnabled = !!i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i717 = data
  var i719 = i717[0]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i719[i + 0]) );
  }
  i716.files = i718
  i716.componentToPrefabIds = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i723 = data
  i722.path = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'unityObject')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i727[i + 0]) );
  }
  i724.scriptsExecutionOrder = i726
  var i729 = i725[1]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i729[i + 0]) );
  }
  i724.sortingLayers = i728
  var i731 = i725[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i731[i + 0]) );
  }
  i724.cullingLayers = i730
  i724.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i725[3], i724.timeSettings)
  i724.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i725[4], i724.physicsSettings)
  i724.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i725[5], i724.physics2DSettings)
  i724.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i725[6], i724.qualitySettings)
  i724.enableRealtimeShadows = !!i725[7]
  i724.enableAutoInstancing = !!i725[8]
  i724.enableStaticBatching = !!i725[9]
  i724.enableDynamicBatching = !!i725[10]
  i724.usePreservativeDynamicBatching = !!i725[11]
  i724.lightmapEncodingQuality = i725[12]
  i724.desiredColorSpace = i725[13]
  var i733 = i725[14]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i724.allTags = i732
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i741 = data
  i740.id = i741[0]
  i740.name = i741[1]
  i740.value = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i745 = data
  i744.id = i745[0]
  i744.name = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i747 = data
  i746.fixedDeltaTime = i747[0]
  i746.maximumDeltaTime = i747[1]
  i746.timeScale = i747[2]
  i746.maximumParticleTimestep = i747[3]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i749 = data
  i748.gravity = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.defaultSolverIterations = i749[3]
  i748.bounceThreshold = i749[4]
  i748.autoSyncTransforms = !!i749[5]
  i748.autoSimulation = !!i749[6]
  var i751 = i749[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i751[i + 0]) );
  }
  i748.collisionMatrix = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i755 = data
  i754.enabled = !!i755[0]
  i754.layerId = i755[1]
  i754.otherLayerId = i755[2]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'material')
  i756.gravity = new pc.Vec2( i757[2], i757[3] )
  i756.positionIterations = i757[4]
  i756.velocityIterations = i757[5]
  i756.velocityThreshold = i757[6]
  i756.maxLinearCorrection = i757[7]
  i756.maxAngularCorrection = i757[8]
  i756.maxTranslationSpeed = i757[9]
  i756.maxRotationSpeed = i757[10]
  i756.baumgarteScale = i757[11]
  i756.baumgarteTOIScale = i757[12]
  i756.timeToSleep = i757[13]
  i756.linearSleepTolerance = i757[14]
  i756.angularSleepTolerance = i757[15]
  i756.defaultContactOffset = i757[16]
  i756.autoSimulation = !!i757[17]
  i756.queriesHitTriggers = !!i757[18]
  i756.queriesStartInColliders = !!i757[19]
  i756.callbacksOnDisable = !!i757[20]
  i756.reuseCollisionCallbacks = !!i757[21]
  i756.autoSyncTransforms = !!i757[22]
  var i759 = i757[23]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i759[i + 0]) );
  }
  i756.collisionMatrix = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.layerId = i763[1]
  i762.otherLayerId = i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i767[i + 0]) );
  }
  i764.qualityLevels = i766
  var i769 = i765[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i764.names = i768
  i764.shadows = i765[2]
  i764.anisotropicFiltering = i765[3]
  i764.antiAliasing = i765[4]
  i764.lodBias = i765[5]
  i764.shadowCascades = i765[6]
  i764.shadowDistance = i765[7]
  i764.shadowmaskMode = i765[8]
  i764.shadowProjection = i765[9]
  i764.shadowResolution = i765[10]
  i764.softParticles = !!i765[11]
  i764.softVegetation = !!i765[12]
  i764.activeColorSpace = i765[13]
  i764.desiredColorSpace = i765[14]
  i764.masterTextureLimit = i765[15]
  i764.maxQueuedFrames = i765[16]
  i764.particleRaycastBudget = i765[17]
  i764.pixelLightCount = i765[18]
  i764.realtimeReflectionProbes = !!i765[19]
  i764.shadowCascade2Split = i765[20]
  i764.shadowCascade4Split = new pc.Vec3( i765[21], i765[22], i765[23] )
  i764.streamingMipmapsActive = !!i765[24]
  i764.vSyncCount = i765[25]
  i764.asyncUploadBufferSize = i765[26]
  i764.asyncUploadTimeSlice = i765[27]
  i764.billboardsFaceCameraPosition = !!i765[28]
  i764.shadowNearPlaneOffset = i765[29]
  i764.streamingMipmapsMemoryBudget = i765[30]
  i764.maximumLODLevel = i765[31]
  i764.streamingMipmapsAddAllCameras = !!i765[32]
  i764.streamingMipmapsMaxLevelReduction = i765[33]
  i764.streamingMipmapsRenderersPerFrame = i765[34]
  i764.resolutionScalingFixedDPIFactor = i765[35]
  i764.streamingMipmapsMaxFileIORequests = i765[36]
  i764.currentQualityLevel = i765[37]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i775 = data
  i774.weight = i775[0]
  i774.vertices = i775[1]
  i774.normals = i775[2]
  i774.tangents = i775[3]
  return i774
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[15],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[15],"75":[8],"76":[77],"78":[77],"19":[18],"13":[12],"79":[80],"81":[82],"83":[80],"84":[18],"85":[18],"22":[19],"29":[30,18],"86":[18],"21":[19],"87":[18],"88":[18],"89":[18],"90":[18],"91":[18],"92":[18],"93":[18],"94":[18],"95":[18],"96":[30,18],"97":[18],"98":[18],"99":[18],"100":[18],"101":[30,18],"102":[18],"103":[104],"105":[104],"106":[104],"107":[104],"108":[15],"109":[15],"110":[111],"112":[15],"113":[18],"114":[8,18],"115":[18,30],"116":[18],"117":[30,18],"118":[8],"119":[30,18],"120":[18],"121":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexTile","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshCollider","HexStack","HexDragger","HexFloor","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","PlayableUIRoot","TutorialOverlayController","PackshotController","CountdownTimerPanel","UnityEngine.GameObject","UnityEngine.CanvasGroup","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Sprite","HexGameContext","HexConfig","HexPoolService","HexManager","HexStacksCreator","HexFloorCreator","HexTransferAnimator","HexClearFxPlayer","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "TestHex";

Deserializers.lunaInitializationTime = "05/25/2026 23:56:59";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1826";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4007";

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

Deserializers.buildID = "c1b21d76-8f28-4345-a841-c5c7cc02c39f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


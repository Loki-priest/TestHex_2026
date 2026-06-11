var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointSpring' )
  var i407 = data
  i406.spring = i407[0]
  i406.damper = i407[1]
  i406.targetPosition = i407[2]
  return i406
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointMotor' )
  var i409 = data
  i408.m_TargetVelocity = i409[0]
  i408.m_Force = i409[1]
  i408.m_FreeSpin = i409[2]
  return i408
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointLimits' )
  var i411 = data
  i410.m_Min = i411[0]
  i410.m_Max = i411[1]
  i410.m_Bounciness = i411[2]
  i410.m_BounceMinVelocity = i411[3]
  i410.m_ContactDistance = i411[4]
  i410.minBounce = i411[5]
  i410.maxBounce = i411[6]
  return i410
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointDrive' )
  var i413 = data
  i412.m_PositionSpring = i413[0]
  i412.m_PositionDamper = i413[1]
  i412.m_MaximumForce = i413[2]
  i412.m_UseAcceleration = i413[3]
  return i412
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i415 = data
  i414.m_Spring = i415[0]
  i414.m_Damper = i415[1]
  return i414
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i417 = data
  i416.m_Limit = i417[0]
  i416.m_Bounciness = i417[1]
  i416.m_ContactDistance = i417[2]
  return i416
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i419 = data
  i418.m_ExtremumSlip = i419[0]
  i418.m_ExtremumValue = i419[1]
  i418.m_AsymptoteSlip = i419[2]
  i418.m_AsymptoteValue = i419[3]
  i418.m_Stiffness = i419[4]
  return i418
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i421 = data
  i420.m_LowerAngle = i421[0]
  i420.m_UpperAngle = i421[1]
  return i420
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i423 = data
  i422.m_MotorSpeed = i423[0]
  i422.m_MaximumMotorTorque = i423[1]
  return i422
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i425 = data
  i424.m_DampingRatio = i425[0]
  i424.m_Frequency = i425[1]
  i424.m_Angle = i425[2]
  return i424
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i427 = data
  i426.m_LowerTranslation = i427[0]
  i426.m_UpperTranslation = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i429 = data
  i428.name = i429[0]
  i428.width = i429[1]
  i428.height = i429[2]
  i428.mipmapCount = i429[3]
  i428.anisoLevel = i429[4]
  i428.filterMode = i429[5]
  i428.hdr = !!i429[6]
  i428.format = i429[7]
  i428.wrapMode = i429[8]
  i428.alphaIsTransparency = !!i429[9]
  i428.alphaSource = i429[10]
  i428.graphicsFormat = i429[11]
  i428.sRGBTexture = !!i429[12]
  i428.desiredColorSpace = i429[13]
  i428.wrapU = i429[14]
  i428.wrapV = i429[15]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i431 = data
  i430.position = new pc.Vec3( i431[0], i431[1], i431[2] )
  i430.scale = new pc.Vec3( i431[3], i431[4], i431[5] )
  i430.rotation = new pc.Quat(i431[6], i431[7], i431[8], i431[9])
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i433 = data
  i432.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i433[0], i432.main)
  i432.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i433[1], i432.colorBySpeed)
  i432.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i433[2], i432.colorOverLifetime)
  i432.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i433[3], i432.emission)
  i432.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i433[4], i432.rotationBySpeed)
  i432.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i433[5], i432.rotationOverLifetime)
  i432.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i433[6], i432.shape)
  i432.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i433[7], i432.sizeBySpeed)
  i432.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i433[8], i432.sizeOverLifetime)
  i432.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i433[9], i432.textureSheetAnimation)
  i432.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i433[10], i432.velocityOverLifetime)
  i432.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i433[11], i432.noise)
  i432.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i433[12], i432.inheritVelocity)
  i432.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i433[13], i432.forceOverLifetime)
  i432.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i433[14], i432.limitVelocityOverLifetime)
  i432.useAutoRandomSeed = !!i433[15]
  i432.randomSeed = i433[16]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i434 = root || new pc.ParticleSystemMain()
  var i435 = data
  i434.duration = i435[0]
  i434.loop = !!i435[1]
  i434.prewarm = !!i435[2]
  i434.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[3], i434.startDelay)
  i434.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[4], i434.startLifetime)
  i434.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[5], i434.startSpeed)
  i434.startSize3D = !!i435[6]
  i434.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[7], i434.startSizeX)
  i434.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[8], i434.startSizeY)
  i434.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[9], i434.startSizeZ)
  i434.startRotation3D = !!i435[10]
  i434.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[11], i434.startRotationX)
  i434.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[12], i434.startRotationY)
  i434.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[13], i434.startRotationZ)
  i434.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i435[14], i434.startColor)
  i434.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i435[15], i434.gravityModifier)
  i434.simulationSpace = i435[16]
  request.r(i435[17], i435[18], 0, i434, 'customSimulationSpace')
  i434.simulationSpeed = i435[19]
  i434.useUnscaledTime = !!i435[20]
  i434.scalingMode = i435[21]
  i434.playOnAwake = !!i435[22]
  i434.maxParticles = i435[23]
  i434.emitterVelocityMode = i435[24]
  i434.stopAction = i435[25]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i436 = root || new pc.MinMaxCurve()
  var i437 = data
  i436.mode = i437[0]
  i436.curveMin = new pc.AnimationCurve( { keys_flow: i437[1] } )
  i436.curveMax = new pc.AnimationCurve( { keys_flow: i437[2] } )
  i436.curveMultiplier = i437[3]
  i436.constantMin = i437[4]
  i436.constantMax = i437[5]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i438 = root || new pc.MinMaxGradient()
  var i439 = data
  i438.mode = i439[0]
  i438.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i439[1], i438.gradientMin)
  i438.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i439[2], i438.gradientMax)
  i438.colorMin = new pc.Color(i439[3], i439[4], i439[5], i439[6])
  i438.colorMax = new pc.Color(i439[7], i439[8], i439[9], i439[10])
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i441 = data
  i440.mode = i441[0]
  var i443 = i441[1]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i443[i + 0]) );
  }
  i440.colorKeys = i442
  var i445 = i441[2]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i445[i + 0]) );
  }
  i440.alphaKeys = i444
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i446 = root || new pc.ParticleSystemColorBySpeed()
  var i447 = data
  i446.enabled = !!i447[0]
  i446.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i447[1], i446.color)
  i446.range = new pc.Vec2( i447[2], i447[3] )
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i451 = data
  i450.color = new pc.Color(i451[0], i451[1], i451[2], i451[3])
  i450.time = i451[4]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i455 = data
  i454.alpha = i455[0]
  i454.time = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i456 = root || new pc.ParticleSystemColorOverLifetime()
  var i457 = data
  i456.enabled = !!i457[0]
  i456.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i457[1], i456.color)
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i458 = root || new pc.ParticleSystemEmitter()
  var i459 = data
  i458.enabled = !!i459[0]
  i458.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i459[1], i458.rateOverTime)
  i458.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i459[2], i458.rateOverDistance)
  var i461 = i459[3]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i461[i + 0]) );
  }
  i458.bursts = i460
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemBurst()
  var i465 = data
  i464.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[0], i464.count)
  i464.cycleCount = i465[1]
  i464.minCount = i465[2]
  i464.maxCount = i465[3]
  i464.repeatInterval = i465[4]
  i464.time = i465[5]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemRotationBySpeed()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[1], i466.x)
  i466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[2], i466.y)
  i466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.z)
  i466.separateAxes = !!i467[4]
  i466.range = new pc.Vec2( i467[5], i467[6] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemRotationOverLifetime()
  var i469 = data
  i468.enabled = !!i469[0]
  i468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[1], i468.x)
  i468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[2], i468.y)
  i468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[3], i468.z)
  i468.separateAxes = !!i469[4]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemShape()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.shapeType = i471[1]
  i470.randomDirectionAmount = i471[2]
  i470.sphericalDirectionAmount = i471[3]
  i470.randomPositionAmount = i471[4]
  i470.alignToDirection = !!i471[5]
  i470.radius = i471[6]
  i470.radiusMode = i471[7]
  i470.radiusSpread = i471[8]
  i470.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[9], i470.radiusSpeed)
  i470.radiusThickness = i471[10]
  i470.angle = i471[11]
  i470.length = i471[12]
  i470.boxThickness = new pc.Vec3( i471[13], i471[14], i471[15] )
  i470.meshShapeType = i471[16]
  request.r(i471[17], i471[18], 0, i470, 'mesh')
  request.r(i471[19], i471[20], 0, i470, 'meshRenderer')
  request.r(i471[21], i471[22], 0, i470, 'skinnedMeshRenderer')
  i470.useMeshMaterialIndex = !!i471[23]
  i470.meshMaterialIndex = i471[24]
  i470.useMeshColors = !!i471[25]
  i470.normalOffset = i471[26]
  i470.arc = i471[27]
  i470.arcMode = i471[28]
  i470.arcSpread = i471[29]
  i470.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[30], i470.arcSpeed)
  i470.donutRadius = i471[31]
  i470.position = new pc.Vec3( i471[32], i471[33], i471[34] )
  i470.rotation = new pc.Vec3( i471[35], i471[36], i471[37] )
  i470.scale = new pc.Vec3( i471[38], i471[39], i471[40] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemSizeBySpeed()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.x)
  i472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.y)
  i472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.z)
  i472.separateAxes = !!i473[4]
  i472.range = new pc.Vec2( i473[5], i473[6] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemSizeOverLifetime()
  var i475 = data
  i474.enabled = !!i475[0]
  i474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[1], i474.x)
  i474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[2], i474.y)
  i474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[3], i474.z)
  i474.separateAxes = !!i475[4]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.mode = i477[1]
  i476.animation = i477[2]
  i476.numTilesX = i477[3]
  i476.numTilesY = i477[4]
  i476.useRandomRow = !!i477[5]
  i476.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[6], i476.frameOverTime)
  i476.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[7], i476.startFrame)
  i476.cycleCount = i477[8]
  i476.rowIndex = i477[9]
  i476.flipU = i477[10]
  i476.flipV = i477[11]
  i476.spriteCount = i477[12]
  var i479 = i477[13]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i476.sprites = i478
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[1], i482.x)
  i482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[2], i482.y)
  i482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.z)
  i482.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[4], i482.radial)
  i482.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[5], i482.speedModifier)
  i482.space = i483[6]
  i482.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[7], i482.orbitalX)
  i482.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[8], i482.orbitalY)
  i482.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[9], i482.orbitalZ)
  i482.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[10], i482.orbitalOffsetX)
  i482.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[11], i482.orbitalOffsetY)
  i482.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[12], i482.orbitalOffsetZ)
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemNoise()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.separateAxes = !!i485[1]
  i484.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[2], i484.strengthX)
  i484.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[3], i484.strengthY)
  i484.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[4], i484.strengthZ)
  i484.frequency = i485[5]
  i484.damping = !!i485[6]
  i484.octaveCount = i485[7]
  i484.octaveMultiplier = i485[8]
  i484.octaveScale = i485[9]
  i484.quality = i485[10]
  i484.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[11], i484.scrollSpeed)
  i484.scrollSpeedMultiplier = i485[12]
  i484.remapEnabled = !!i485[13]
  i484.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[14], i484.remapX)
  i484.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[15], i484.remapY)
  i484.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[16], i484.remapZ)
  i484.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[17], i484.positionAmount)
  i484.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[18], i484.rotationAmount)
  i484.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[19], i484.sizeAmount)
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemInheritVelocity()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.mode = i487[1]
  i486.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.curve)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemForceOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.x)
  i488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.y)
  i488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.z)
  i488.space = i489[4]
  i488.randomized = !!i489[5]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[1], i490.limit)
  i490.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[2], i490.limitX)
  i490.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[3], i490.limitY)
  i490.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[4], i490.limitZ)
  i490.dampen = i491[5]
  i490.separateAxes = !!i491[6]
  i490.space = i491[7]
  i490.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[8], i490.drag)
  i490.multiplyDragByParticleSize = !!i491[9]
  i490.multiplyDragByParticleVelocity = !!i491[10]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'mesh')
  i492.meshCount = i493[2]
  i492.activeVertexStreamsCount = i493[3]
  i492.alignment = i493[4]
  i492.renderMode = i493[5]
  i492.sortMode = i493[6]
  i492.lengthScale = i493[7]
  i492.velocityScale = i493[8]
  i492.cameraVelocityScale = i493[9]
  i492.normalDirection = i493[10]
  i492.sortingFudge = i493[11]
  i492.minParticleSize = i493[12]
  i492.maxParticleSize = i493[13]
  i492.pivot = new pc.Vec3( i493[14], i493[15], i493[16] )
  request.r(i493[17], i493[18], 0, i492, 'trailMaterial')
  i492.applyActiveColorSpace = !!i493[19]
  i492.enabled = !!i493[20]
  request.r(i493[21], i493[22], 0, i492, 'sharedMaterial')
  var i495 = i493[23]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.sharedMaterials = i494
  i492.receiveShadows = !!i493[24]
  i492.shadowCastingMode = i493[25]
  i492.sortingLayerID = i493[26]
  i492.sortingOrder = i493[27]
  i492.lightmapIndex = i493[28]
  i492.lightmapSceneIndex = i493[29]
  i492.lightmapScaleOffset = new pc.Vec4( i493[30], i493[31], i493[32], i493[33] )
  i492.lightProbeUsage = i493[34]
  i492.reflectionProbeUsage = i493[35]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i499 = data
  i498.name = i499[0]
  i498.tagId = i499[1]
  i498.enabled = !!i499[2]
  i498.isStatic = !!i499[3]
  i498.layer = i499[4]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i500 = root || new pc.UnityMaterial()
  var i501 = data
  i500.name = i501[0]
  request.r(i501[1], i501[2], 0, i500, 'shader')
  i500.renderQueue = i501[3]
  i500.enableInstancing = !!i501[4]
  var i503 = i501[5]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i503[i + 0]) );
  }
  i500.floatParameters = i502
  var i505 = i501[6]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i505[i + 0]) );
  }
  i500.colorParameters = i504
  var i507 = i501[7]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i507[i + 0]) );
  }
  i500.vectorParameters = i506
  var i509 = i501[8]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i509[i + 0]) );
  }
  i500.textureParameters = i508
  var i511 = i501[9]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i511[i + 0]) );
  }
  i500.materialFlags = i510
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Color(i519[1], i519[2], i519[3], i519[4])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = new pc.Vec4( i523[1], i523[2], i523[3], i523[4] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i527 = data
  i526.name = i527[0]
  request.r(i527[1], i527[2], 0, i526, 'value')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i531 = data
  i530.name = i531[0]
  i530.enabled = !!i531[1]
  return i530
}

Deserializers["HexStack"] = function (request, data, root) {
  var i532 = root || request.c( 'HexStack' )
  var i533 = data
  var i535 = i533[0]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('HexTile')))
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 1, i534, '')
  }
  i532.hexTiles = i534
  request.r(i533[1], i533[2], 0, i532, 'tileTemplate')
  request.r(i533[3], i533[4], 0, i532, 'anchorPos')
  i532.tileStep = i533[5]
  i532.tileBaseLocalPosition = new pc.Vec3( i533[6], i533[7], i533[8] )
  i532.hideWhenEmpty = !!i533[9]
  return i532
}

Deserializers["HexTile"] = function (request, data, root) {
  var i538 = root || request.c( 'HexTile' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'myMeshRenderer')
  i538.colorId = i539[2]
  i538.currentColor = new pc.Color(i539[3], i539[4], i539[5], i539[6])
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i549 = data
  i548.name = i549[0]
  i548.halfPrecision = !!i549[1]
  i548.useSimplification = !!i549[2]
  i548.useUInt32IndexFormat = !!i549[3]
  i548.vertexCount = i549[4]
  i548.aabb = i549[5]
  var i551 = i549[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( !!i551[i + 0] );
  }
  i548.streams = i550
  i548.vertices = i549[7]
  var i553 = i549[8]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i553[i + 0]) );
  }
  i548.subMeshes = i552
  var i555 = i549[9]
  var i554 = []
  for(var i = 0; i < i555.length; i += 16) {
    i554.push( new pc.Mat4().setData(i555[i + 0], i555[i + 1], i555[i + 2], i555[i + 3],  i555[i + 4], i555[i + 5], i555[i + 6], i555[i + 7],  i555[i + 8], i555[i + 9], i555[i + 10], i555[i + 11],  i555[i + 12], i555[i + 13], i555[i + 14], i555[i + 15]) );
  }
  i548.bindposes = i554
  var i557 = i549[10]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i557[i + 0]) );
  }
  i548.blendShapes = i556
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i563 = data
  i562.triangles = i563[0]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i569 = data
  i568.name = i569[0]
  var i571 = i569[1]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i571[i + 0]) );
  }
  i568.frames = i570
  return i568
}

Deserializers["HexFloor"] = function (request, data, root) {
  var i572 = root || request.c( 'HexFloor' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'stackAnchor')
  i572.gridX = i573[2]
  i572.gridZ = i573[3]
  var i575 = i573[4]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.highlightRenderers = i574
  i572.originalColor = new pc.Color(i573[5], i573[6], i573[7], i573[8])
  i572.dropHighlightColor = new pc.Color(i573[9], i573[10], i573[11], i573[12])
  i572.dropHighlightBlend = i573[13]
  i572.useEmissionHighlight = !!i573[14]
  i572.dropHighlightEmissionColor = new pc.Color(i573[15], i573[16], i573[17], i573[18])
  i572.autoFindOnAwake = !!i573[19]
  i572.neighborSearchDistance = i573[20]
  i572.rayHeight = i573[21]
  i572.neighborRaycastBufferSize = i573[22]
  i572.searchMask = UnityEngine.LayerMask.FromIntegerValue( i573[23] )
  i572.sideDirectionOffsetDegrees = i573[24]
  var i577 = i573[25]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i572.sideNeighbors = i576
  i572.drawSideRays = !!i573[26]
  i572.gizmoSideOffset = i573[27]
  i572.gizmoRayLength = i573[28]
  i572.gizmoSphereRadius = i573[29]
  i572.gizmoNoNeighborColor = new pc.Color(i573[30], i573[31], i573[32], i573[33])
  i572.gizmoNeighborColor = new pc.Color(i573[34], i573[35], i573[36], i573[37])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i583 = data
  i582.name = i583[0]
  i582.atlasId = i583[1]
  i582.mipmapCount = i583[2]
  i582.hdr = !!i583[3]
  i582.size = i583[4]
  i582.anisoLevel = i583[5]
  i582.filterMode = i583[6]
  var i585 = i583[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 4) {
    i584.push( UnityEngine.Rect.MinMaxRect(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3]) );
  }
  i582.rects = i584
  i582.wrapU = i583[8]
  i582.wrapV = i583[9]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i589 = data
  i588.name = i589[0]
  i588.index = i589[1]
  i588.startup = !!i589[2]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i591 = data
  i590.aspect = i591[0]
  i590.orthographic = !!i591[1]
  i590.orthographicSize = i591[2]
  i590.backgroundColor = new pc.Color(i591[3], i591[4], i591[5], i591[6])
  i590.nearClipPlane = i591[7]
  i590.farClipPlane = i591[8]
  i590.fieldOfView = i591[9]
  i590.depth = i591[10]
  i590.clearFlags = i591[11]
  i590.cullingMask = i591[12]
  i590.rect = i591[13]
  request.r(i591[14], i591[15], 0, i590, 'targetTexture')
  i590.usePhysicalProperties = !!i591[16]
  i590.focalLength = i591[17]
  i590.sensorSize = new pc.Vec2( i591[18], i591[19] )
  i590.lensShift = new pc.Vec2( i591[20], i591[21] )
  i590.gateFit = i591[22]
  i590.commandBufferCount = i591[23]
  i590.cameraType = i591[24]
  i590.enabled = !!i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i593 = data
  i592.type = i593[0]
  i592.color = new pc.Color(i593[1], i593[2], i593[3], i593[4])
  i592.cullingMask = i593[5]
  i592.intensity = i593[6]
  i592.range = i593[7]
  i592.spotAngle = i593[8]
  i592.shadows = i593[9]
  i592.shadowNormalBias = i593[10]
  i592.shadowBias = i593[11]
  i592.shadowStrength = i593[12]
  i592.shadowResolution = i593[13]
  i592.lightmapBakeType = i593[14]
  i592.renderMode = i593[15]
  request.r(i593[16], i593[17], 0, i592, 'cookie')
  i592.cookieSize = i593[18]
  i592.shadowNearPlane = i593[19]
  i592.occlusionMaskChannel = i593[20]
  i592.isBaked = !!i593[21]
  i592.mixedLightingMode = i593[22]
  i592.enabled = !!i593[23]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i595 = data
  i594.pivot = new pc.Vec2( i595[0], i595[1] )
  i594.anchorMin = new pc.Vec2( i595[2], i595[3] )
  i594.anchorMax = new pc.Vec2( i595[4], i595[5] )
  i594.sizeDelta = new pc.Vec2( i595[6], i595[7] )
  i594.anchoredPosition3D = new pc.Vec3( i595[8], i595[9], i595[10] )
  i594.rotation = new pc.Quat(i595[11], i595[12], i595[13], i595[14])
  i594.scale = new pc.Vec3( i595[15], i595[16], i595[17] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i597 = data
  i596.planeDistance = i597[0]
  i596.referencePixelsPerUnit = i597[1]
  i596.isFallbackOverlay = !!i597[2]
  i596.renderMode = i597[3]
  i596.renderOrder = i597[4]
  i596.sortingLayerName = i597[5]
  i596.sortingOrder = i597[6]
  i596.scaleFactor = i597[7]
  request.r(i597[8], i597[9], 0, i596, 'worldCamera')
  i596.overrideSorting = !!i597[10]
  i596.pixelPerfect = !!i597[11]
  i596.targetDisplay = i597[12]
  i596.overridePixelPerfect = !!i597[13]
  i596.enabled = !!i597[14]
  return i596
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i599 = data
  i598.m_UiScaleMode = i599[0]
  i598.m_ReferencePixelsPerUnit = i599[1]
  i598.m_ScaleFactor = i599[2]
  i598.m_ReferenceResolution = new pc.Vec2( i599[3], i599[4] )
  i598.m_ScreenMatchMode = i599[5]
  i598.m_MatchWidthOrHeight = i599[6]
  i598.m_PhysicalUnit = i599[7]
  i598.m_FallbackScreenDPI = i599[8]
  i598.m_DefaultSpriteDPI = i599[9]
  i598.m_DynamicPixelsPerUnit = i599[10]
  i598.m_PresetInfoIsWorld = !!i599[11]
  return i598
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i601 = data
  i600.m_IgnoreReversedGraphics = !!i601[0]
  i600.m_BlockingObjects = i601[1]
  i600.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i601[2] )
  return i600
}

Deserializers["PlayableUIRoot"] = function (request, data, root) {
  var i602 = root || request.c( 'PlayableUIRoot' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'gameContext')
  request.r(i603[2], i603[3], 0, i602, 'tutorialController')
  request.r(i603[4], i603[5], 0, i602, 'packshotController')
  request.r(i603[6], i603[7], 0, i602, 'countdownTimerPanel')
  return i602
}

Deserializers["TutorialOverlayController"] = function (request, data, root) {
  var i604 = root || request.c( 'TutorialOverlayController' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'tutorialRoot')
  request.r(i605[2], i605[3], 0, i604, 'handTransform')
  request.r(i605[4], i605[5], 0, i604, 'canvasRoot')
  request.r(i605[6], i605[7], 0, i604, 'uiCamera')
  request.r(i605[8], i605[9], 0, i604, 'worldCamera')
  request.r(i605[10], i605[11], 0, i604, 'gameContext')
  request.r(i605[12], i605[13], 0, i604, 'fromAnchor')
  request.r(i605[14], i605[15], 0, i604, 'toAnchor')
  i604.startOnEnable = !!i605[16]
  i604.restartDelay = i605[17]
  i604.useDynamicWorldTargets = !!i605[18]
  i604.handScreenOffset = new pc.Vec2( i605[19], i605[20] )
  i604.worldTargetHeightOffset = i605[21]
  i604.fallbackScanInterval = i605[22]
  i604.debugLogs = !!i605[23]
  i604.handMoveDuration = i605[24]
  i604.handPauseDuration = i605[25]
  i604.handMoveEase = i605[26]
  return i604
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i606 = root || request.c( 'PackshotController' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'packshotRoot')
  request.r(i607[2], i607[3], 0, i606, 'packshotCanvasGroup')
  request.r(i607[4], i607[5], 0, i606, 'backgroundObject')
  request.r(i607[6], i607[7], 0, i606, 'logoObject')
  request.r(i607[8], i607[9], 0, i606, 'playNowButtonObject')
  i606.hideOnStart = !!i607[10]
  i606.reactToAnyTap = !!i607[11]
  i606.fadeDuration = i607[12]
  i606.fadeEase = i607[13]
  return i606
}

Deserializers["CountdownTimerPanel"] = function (request, data, root) {
  var i608 = root || request.c( 'CountdownTimerPanel' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'gameContext')
  i608.durationSeconds = i609[2]
  i608.autoStartOnEnable = !!i609[3]
  i608.lowTimeThresholdNormalized = i609[4]
  i608.barFrameNormalColor = new pc.Color(i609[5], i609[6], i609[7], i609[8])
  i608.barBackNormalColor = new pc.Color(i609[9], i609[10], i609[11], i609[12])
  i608.barFillNormalColor = new pc.Color(i609[13], i609[14], i609[15], i609[16])
  i608.iconFrameNormalColor = new pc.Color(i609[17], i609[18], i609[19], i609[20])
  i608.iconBackNormalColor = new pc.Color(i609[21], i609[22], i609[23], i609[24])
  i608.barFrameLowColor = new pc.Color(i609[25], i609[26], i609[27], i609[28])
  i608.barBackLowColor = new pc.Color(i609[29], i609[30], i609[31], i609[32])
  i608.barFillLowColor = new pc.Color(i609[33], i609[34], i609[35], i609[36])
  i608.iconFrameLowColor = new pc.Color(i609[37], i609[38], i609[39], i609[40])
  i608.iconBackLowColor = new pc.Color(i609[41], i609[42], i609[43], i609[44])
  i608.arrowStartAngle = i609[45]
  i608.arrowEndAngle = i609[46]
  i608.arrowNormalColor = new pc.Color(i609[47], i609[48], i609[49], i609[50])
  i608.iconShakeDuration = i609[51]
  i608.iconShakeStrength = i609[52]
  i608.iconShakeVibrato = i609[53]
  i608.lowBackdropBlendRange = i609[54]
  request.r(i609[55], i609[56], 0, i608, 'panelRoot')
  request.r(i609[57], i609[58], 0, i608, 'barFrameImage')
  request.r(i609[59], i609[60], 0, i608, 'barBackImage')
  request.r(i609[61], i609[62], 0, i608, 'barFillImage')
  request.r(i609[63], i609[64], 0, i608, 'iconRoot')
  request.r(i609[65], i609[66], 0, i608, 'iconFrameImage')
  request.r(i609[67], i609[68], 0, i608, 'iconBackImage')
  request.r(i609[69], i609[70], 0, i608, 'iconNubImage')
  request.r(i609[71], i609[72], 0, i608, 'arrowTransform')
  request.r(i609[73], i609[74], 0, i608, 'arrowImage')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i611 = data
  i610.cullTransparentMesh = !!i611[0]
  return i610
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Image' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Sprite')
  i612.m_Type = i613[2]
  i612.m_PreserveAspect = !!i613[3]
  i612.m_FillCenter = !!i613[4]
  i612.m_FillMethod = i613[5]
  i612.m_FillAmount = i613[6]
  i612.m_FillClockwise = !!i613[7]
  i612.m_FillOrigin = i613[8]
  i612.m_UseSpriteMesh = !!i613[9]
  i612.m_PixelsPerUnitMultiplier = i613[10]
  request.r(i613[11], i613[12], 0, i612, 'm_Material')
  i612.m_Maskable = !!i613[13]
  i612.m_Color = new pc.Color(i613[14], i613[15], i613[16], i613[17])
  i612.m_RaycastTarget = !!i613[18]
  i612.m_RaycastPadding = new pc.Vec4( i613[19], i613[20], i613[21], i613[22] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i615 = data
  i614.m_Alpha = i615[0]
  i614.m_Interactable = !!i615[1]
  i614.m_BlocksRaycasts = !!i615[2]
  i614.m_IgnoreParentGroups = !!i615[3]
  i614.enabled = !!i615[4]
  return i614
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Text' )
  var i617 = data
  i616.m_FontData = request.d('UnityEngine.UI.FontData', i617[0], i616.m_FontData)
  i616.m_Text = i617[1]
  request.r(i617[2], i617[3], 0, i616, 'm_Material')
  i616.m_Maskable = !!i617[4]
  i616.m_Color = new pc.Color(i617[5], i617[6], i617[7], i617[8])
  i616.m_RaycastTarget = !!i617[9]
  i616.m_RaycastPadding = new pc.Vec4( i617[10], i617[11], i617[12], i617[13] )
  return i616
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.FontData' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_Font')
  i618.m_FontSize = i619[2]
  i618.m_FontStyle = i619[3]
  i618.m_BestFit = !!i619[4]
  i618.m_MinSize = i619[5]
  i618.m_MaxSize = i619[6]
  i618.m_Alignment = i619[7]
  i618.m_AlignByGeometry = !!i619[8]
  i618.m_RichText = !!i619[9]
  i618.m_HorizontalOverflow = i619[10]
  i618.m_VerticalOverflow = i619[11]
  i618.m_LineSpacing = i619[12]
  return i618
}

Deserializers["HexGameContext"] = function (request, data, root) {
  var i620 = root || request.c( 'HexGameContext' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'config')
  request.r(i621[2], i621[3], 0, i620, 'poolService')
  request.r(i621[4], i621[5], 0, i620, 'manager')
  request.r(i621[6], i621[7], 0, i620, 'stacksCreator')
  request.r(i621[8], i621[9], 0, i620, 'floorCreator')
  return i620
}

Deserializers["HexDragger"] = function (request, data, root) {
  var i622 = root || request.c( 'HexDragger' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'gameContext')
  request.r(i623[2], i623[3], 0, i622, 'inputCamera')
  i622.pickMaxDistance = i623[4]
  i622.interactionMask = UnityEngine.LayerMask.FromIntegerValue( i623[5] )
  i622.floorCheckStartHeight = i623[6]
  i622.floorCheckDistance = i623[7]
  i622.floorRaycastBufferSize = i623[8]
  i622.liftHeight = i623[9]
  i622.liftDuration = i623[10]
  i622.liftEase = i623[11]
  i622.attachMoveDuration = i623[12]
  i622.attachMoveEase = i623[13]
  i622.returnMoveDuration = i623[14]
  i622.dropDuration = i623[15]
  i622.dropEase = i623[16]
  return i622
}

Deserializers["HexManager"] = function (request, data, root) {
  var i624 = root || request.c( 'HexManager' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'gameContext')
  i624.transferOnStackPlaced = !!i625[2]
  request.r(i625[3], i625[4], 0, i624, 'transferAnimator')
  i624.transferSpeedIncreasePerStack = i625[5]
  i624.clearSpeedIncreasePerStack = i625[6]
  i624.clearScaleDuration = i625[7]
  i624.clearScaleEase = i625[8]
  i624.clearScaleStagger = i625[9]
  request.r(i625[10], i625[11], 0, i624, 'clearFxPlayer')
  i624.logTransferEvents = !!i625[12]
  return i624
}

Deserializers["HexTransferAnimator"] = function (request, data, root) {
  var i626 = root || request.c( 'HexTransferAnimator' )
  var i627 = data
  i626.logTransferAnimatorEvents = !!i627[0]
  i626.tileFlipDuration = i627[1]
  i626.tileFlipEase = i627[2]
  i626.tileSettleDuration = i627[3]
  i626.tileSettleEase = i627[4]
  i626.tileTransferFanStagger = i627[5]
  i626.tileTransferArcHeightMultiplier = i627[6]
  return i626
}

Deserializers["HexClearFxPlayer"] = function (request, data, root) {
  var i628 = root || request.c( 'HexClearFxPlayer' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'clearTilesFxPrefab')
  i628.clearTilesFxLifetimePadding = i629[2]
  return i628
}

Deserializers["HexFloorCreator"] = function (request, data, root) {
  var i630 = root || request.c( 'HexFloorCreator' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'gameContext')
  request.r(i631[2], i631[3], 0, i630, 'floorPrefab')
  request.r(i631[4], i631[5], 0, i630, 'floorRoot')
  request.r(i631[6], i631[7], 0, i630, 'bottomRowAnchor')
  i630.generateOnStart = !!i631[8]
  i630.clearBeforeGenerate = !!i631[9]
  i630.refreshNeighborsAfterGenerate = !!i631[10]
  i630.fillStacksAfterGenerate = !!i631[11]
  i630.debugLogs = !!i631[12]
  i630.neighborDistance = i631[13]
  i630.shiftOddColumnsForward = !!i631[14]
  i630.anchorLocalOffset = new pc.Vec3( i631[15], i631[16], i631[17] )
  return i630
}

Deserializers["HexStacksCreator"] = function (request, data, root) {
  var i632 = root || request.c( 'HexStacksCreator' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'gameContext')
  request.r(i633[2], i633[3], 0, i632, 'spawnStackPrefab')
  request.r(i633[4], i633[5], 0, i632, 'stacksRoot')
  var i635 = i633[6]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.stackSlots = i634
  i632.spawnOnStart = !!i633[7]
  i632.clearExistingOnStart = !!i633[8]
  i632.respawnWhenAllPlaced = !!i633[9]
  i632.spawnSlotsOnlyOnce = !!i633[10]
  i632.slotOccupancyRadius = i633[11]
  i632.logGeneratedFill = !!i633[12]
  i632.debugLogs = !!i633[13]
  return i632
}

Deserializers["HexPoolService"] = function (request, data, root) {
  var i638 = root || request.c( 'HexPoolService' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'stackPoolRoot')
  request.r(i639[2], i639[3], 0, i638, 'tilePoolRoot')
  request.r(i639[4], i639[5], 0, i638, 'fxPoolRoot')
  i638.prewarmStackCount = i639[6]
  i638.prewarmTileCount = i639[7]
  i638.prewarmFxCount = i639[8]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i641 = data
  i640.ambientIntensity = i641[0]
  i640.reflectionIntensity = i641[1]
  i640.ambientMode = i641[2]
  i640.ambientLight = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.ambientSkyColor = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  i640.ambientGroundColor = new pc.Color(i641[11], i641[12], i641[13], i641[14])
  i640.ambientEquatorColor = new pc.Color(i641[15], i641[16], i641[17], i641[18])
  i640.fogColor = new pc.Color(i641[19], i641[20], i641[21], i641[22])
  i640.fogEndDistance = i641[23]
  i640.fogStartDistance = i641[24]
  i640.fogDensity = i641[25]
  i640.fog = !!i641[26]
  request.r(i641[27], i641[28], 0, i640, 'skybox')
  i640.fogMode = i641[29]
  var i643 = i641[30]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i643[i + 0]) );
  }
  i640.lightmaps = i642
  i640.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i641[31], i640.lightProbes)
  i640.lightmapsMode = i641[32]
  i640.mixedBakeMode = i641[33]
  i640.environmentLightingMode = i641[34]
  i640.ambientProbe = new pc.SphericalHarmonicsL2(i641[35])
  request.r(i641[36], i641[37], 0, i640, 'customReflection')
  request.r(i641[38], i641[39], 0, i640, 'defaultReflection')
  i640.defaultReflectionMode = i641[40]
  i640.defaultReflectionResolution = i641[41]
  i640.sunLightObjectId = i641[42]
  i640.pixelLightCount = i641[43]
  i640.defaultReflectionHDR = !!i641[44]
  i640.hasLightDataAsset = !!i641[45]
  i640.hasManualGenerate = !!i641[46]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'lightmapColor')
  request.r(i647[2], i647[3], 0, i646, 'lightmapDirection')
  request.r(i647[4], i647[5], 0, i646, 'shadowMask')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i648 = root || new UnityEngine.LightProbes()
  var i649 = data
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i657 = data
  var i659 = i657[0]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i659[i + 0]));
  }
  i656.ShaderCompilationErrors = i658
  i656.name = i657[1]
  i656.guid = i657[2]
  var i661 = i657[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.shaderDefinedKeywords = i660
  var i663 = i657[4]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i663[i + 0]) );
  }
  i656.passes = i662
  var i665 = i657[5]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i665[i + 0]) );
  }
  i656.usePasses = i664
  var i667 = i657[6]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i667[i + 0]) );
  }
  i656.defaultParameterValues = i666
  request.r(i657[7], i657[8], 0, i656, 'unityFallbackShader')
  i656.readDepth = !!i657[9]
  i656.hasDepthOnlyPass = !!i657[10]
  i656.isCreatedByShaderGraph = !!i657[11]
  i656.disableBatching = !!i657[12]
  i656.compiled = !!i657[13]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i671 = data
  i670.shaderName = i671[0]
  i670.errorMessage = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i676 = root || new pc.UnityShaderPass()
  var i677 = data
  i676.id = i677[0]
  i676.subShaderIndex = i677[1]
  i676.name = i677[2]
  i676.passType = i677[3]
  i676.grabPassTextureName = i677[4]
  i676.usePass = !!i677[5]
  i676.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[6], i676.zTest)
  i676.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[7], i676.zWrite)
  i676.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[8], i676.culling)
  i676.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[9], i676.blending)
  i676.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[10], i676.alphaBlending)
  i676.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[11], i676.colorWriteMask)
  i676.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[12], i676.offsetUnits)
  i676.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[13], i676.offsetFactor)
  i676.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[14], i676.stencilRef)
  i676.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[15], i676.stencilReadMask)
  i676.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[16], i676.stencilWriteMask)
  i676.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[17], i676.stencilOp)
  i676.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[18], i676.stencilOpFront)
  i676.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[19], i676.stencilOpBack)
  var i679 = i677[20]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i679[i + 0]) );
  }
  i676.tags = i678
  var i681 = i677[21]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.passDefinedKeywords = i680
  var i683 = i677[22]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i683[i + 0]) );
  }
  i676.passDefinedKeywordGroups = i682
  var i685 = i677[23]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i685[i + 0]) );
  }
  i676.variants = i684
  var i687 = i677[24]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i687[i + 0]) );
  }
  i676.excludedVariants = i686
  i676.hasDepthReader = !!i677[25]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i689 = data
  i688.val = i689[0]
  i688.name = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i691 = data
  i690.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[0], i690.src)
  i690.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[1], i690.dst)
  i690.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[2], i690.op)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i693 = data
  i692.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[0], i692.pass)
  i692.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[1], i692.fail)
  i692.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[2], i692.zFail)
  i692.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[3], i692.comp)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i697 = data
  i696.name = i697[0]
  i696.value = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i701 = data
  var i703 = i701[0]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.keywords = i702
  i700.hasDiscard = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i707 = data
  i706.passId = i707[0]
  i706.subShaderIndex = i707[1]
  var i709 = i707[2]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i706.keywords = i708
  i706.vertexProgram = i707[3]
  i706.fragmentProgram = i707[4]
  i706.exportedForWebGl2 = !!i707[5]
  i706.readDepth = !!i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'shader')
  i712.pass = i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i717 = data
  i716.name = i717[0]
  i716.type = i717[1]
  i716.value = new pc.Vec4( i717[2], i717[3], i717[4], i717[5] )
  i716.textureValue = i717[6]
  i716.shaderPropertyFlag = i717[7]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'texture')
  i718.aabb = i719[3]
  i718.vertices = i719[4]
  i718.triangles = i719[5]
  i718.textureRect = UnityEngine.Rect.MinMaxRect(i719[6], i719[7], i719[8], i719[9])
  i718.packedRect = UnityEngine.Rect.MinMaxRect(i719[10], i719[11], i719[12], i719[13])
  i718.border = new pc.Vec4( i719[14], i719[15], i719[16], i719[17] )
  i718.transparency = i719[18]
  i718.bounds = i719[19]
  i718.pixelsPerUnit = i719[20]
  i718.textureWidth = i719[21]
  i718.textureHeight = i719[22]
  i718.nativeSize = new pc.Vec2( i719[23], i719[24] )
  i718.pivot = new pc.Vec2( i719[25], i719[26] )
  i718.textureRectOffset = new pc.Vec2( i719[27], i719[28] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i721 = data
  i720.name = i721[0]
  i720.ascent = i721[1]
  i720.originalLineHeight = i721[2]
  i720.fontSize = i721[3]
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i723[i + 0]) );
  }
  i720.characterInfo = i722
  request.r(i721[5], i721[6], 0, i720, 'texture')
  i720.originalFontSize = i721[7]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i727 = data
  i726.index = i727[0]
  i726.advance = i727[1]
  i726.bearing = i727[2]
  i726.glyphWidth = i727[3]
  i726.glyphHeight = i727[4]
  i726.minX = i727[5]
  i726.maxX = i727[6]
  i726.minY = i727[7]
  i726.maxY = i727[8]
  i726.uvBottomLeftX = i727[9]
  i726.uvBottomLeftY = i727[10]
  i726.uvBottomRightX = i727[11]
  i726.uvBottomRightY = i727[12]
  i726.uvTopLeftX = i727[13]
  i726.uvTopLeftY = i727[14]
  i726.uvTopRightX = i727[15]
  i726.uvTopRightY = i727[16]
  return i726
}

Deserializers["HexConfig"] = function (request, data, root) {
  var i728 = root || request.c( 'HexConfig' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 4) {
    i730.push( new pc.Color(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3]) );
  }
  i728.colors = i730
  i728.paletteColorCount = i729[1]
  i728.isRandom = !!i729[2]
  var i733 = i729[3]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('HexConfig+StackColorPreset', i733[i + 0]) );
  }
  i728.startStackColors = i732
  i728.generatePlayerStacksByFivePlusFive = !!i729[4]
  i728.fillGeneratedFloorWithStacks = !!i729[5]
  var i735 = i729[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('HexConfig+FloorCoord', i735[i + 0]) );
  }
  i728.noStackSpawnCoords = i734
  i728.topMatchClearCount = i729[7]
  i728.gameDurationSeconds = i729[8]
  i728.endGameAfterFirstTransferAndClearChain = !!i729[9]
  i728.floorWidth = i729[10]
  i728.floorLength = i729[11]
  return i728
}

Deserializers["HexConfig+StackColorPreset"] = function (request, data, root) {
  var i740 = root || request.c( 'HexConfig+StackColorPreset' )
  var i741 = data
  i740.colorIdsBottomToTop = i741[0]
  return i740
}

Deserializers["HexConfig+FloorCoord"] = function (request, data, root) {
  var i744 = root || request.c( 'HexConfig+FloorCoord' )
  var i745 = data
  i744.x = i745[0]
  i744.z = i745[1]
  return i744
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i747 = data
  i746.useSafeMode = !!i747[0]
  i746.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i747[1], i746.safeModeOptions)
  i746.timeScale = i747[2]
  i746.unscaledTimeScale = i747[3]
  i746.useSmoothDeltaTime = !!i747[4]
  i746.maxSmoothUnscaledTime = i747[5]
  i746.rewindCallbackMode = i747[6]
  i746.showUnityEditorReport = !!i747[7]
  i746.logBehaviour = i747[8]
  i746.drawGizmos = !!i747[9]
  i746.defaultRecyclable = !!i747[10]
  i746.defaultAutoPlay = i747[11]
  i746.defaultUpdateType = i747[12]
  i746.defaultTimeScaleIndependent = !!i747[13]
  i746.defaultEaseType = i747[14]
  i746.defaultEaseOvershootOrAmplitude = i747[15]
  i746.defaultEasePeriod = i747[16]
  i746.defaultAutoKill = !!i747[17]
  i746.defaultLoopType = i747[18]
  i746.debugMode = !!i747[19]
  i746.debugStoreTargetId = !!i747[20]
  i746.showPreviewPanel = !!i747[21]
  i746.storeSettingsLocation = i747[22]
  i746.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i747[23], i746.modules)
  i746.createASMDEF = !!i747[24]
  i746.showPlayingTweens = !!i747[25]
  i746.showPausedTweens = !!i747[26]
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i749 = data
  i748.logBehaviour = i749[0]
  i748.nestedTweenFailureBehaviour = i749[1]
  return i748
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i751 = data
  i750.showPanel = !!i751[0]
  i750.audioEnabled = !!i751[1]
  i750.physicsEnabled = !!i751[2]
  i750.physics2DEnabled = !!i751[3]
  i750.spriteEnabled = !!i751[4]
  i750.uiEnabled = !!i751[5]
  i750.textMeshProEnabled = !!i751[6]
  i750.tk2DEnabled = !!i751[7]
  i750.deAudioEnabled = !!i751[8]
  i750.deUnityExtendedEnabled = !!i751[9]
  i750.epoOutlineEnabled = !!i751[10]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i753 = data
  var i755 = i753[0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i755[i + 0]) );
  }
  i752.files = i754
  i752.componentToPrefabIds = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i759 = data
  i758.path = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'unityObject')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i763[i + 0]) );
  }
  i760.scriptsExecutionOrder = i762
  var i765 = i761[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i765[i + 0]) );
  }
  i760.sortingLayers = i764
  var i767 = i761[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i767[i + 0]) );
  }
  i760.cullingLayers = i766
  i760.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i761[3], i760.timeSettings)
  i760.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i761[4], i760.physicsSettings)
  i760.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i761[5], i760.physics2DSettings)
  i760.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i761[6], i760.qualitySettings)
  i760.enableRealtimeShadows = !!i761[7]
  i760.enableAutoInstancing = !!i761[8]
  i760.enableStaticBatching = !!i761[9]
  i760.enableDynamicBatching = !!i761[10]
  i760.usePreservativeDynamicBatching = !!i761[11]
  i760.lightmapEncodingQuality = i761[12]
  i760.desiredColorSpace = i761[13]
  var i769 = i761[14]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i760.allTags = i768
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i777 = data
  i776.id = i777[0]
  i776.name = i777[1]
  i776.value = i777[2]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i781 = data
  i780.id = i781[0]
  i780.name = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i783 = data
  i782.fixedDeltaTime = i783[0]
  i782.maximumDeltaTime = i783[1]
  i782.timeScale = i783[2]
  i782.maximumParticleTimestep = i783[3]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i785 = data
  i784.gravity = new pc.Vec3( i785[0], i785[1], i785[2] )
  i784.defaultSolverIterations = i785[3]
  i784.bounceThreshold = i785[4]
  i784.autoSyncTransforms = !!i785[5]
  i784.autoSimulation = !!i785[6]
  var i787 = i785[7]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i787[i + 0]) );
  }
  i784.collisionMatrix = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i791 = data
  i790.enabled = !!i791[0]
  i790.layerId = i791[1]
  i790.otherLayerId = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'material')
  i792.gravity = new pc.Vec2( i793[2], i793[3] )
  i792.positionIterations = i793[4]
  i792.velocityIterations = i793[5]
  i792.velocityThreshold = i793[6]
  i792.maxLinearCorrection = i793[7]
  i792.maxAngularCorrection = i793[8]
  i792.maxTranslationSpeed = i793[9]
  i792.maxRotationSpeed = i793[10]
  i792.baumgarteScale = i793[11]
  i792.baumgarteTOIScale = i793[12]
  i792.timeToSleep = i793[13]
  i792.linearSleepTolerance = i793[14]
  i792.angularSleepTolerance = i793[15]
  i792.defaultContactOffset = i793[16]
  i792.autoSimulation = !!i793[17]
  i792.queriesHitTriggers = !!i793[18]
  i792.queriesStartInColliders = !!i793[19]
  i792.callbacksOnDisable = !!i793[20]
  i792.reuseCollisionCallbacks = !!i793[21]
  i792.autoSyncTransforms = !!i793[22]
  var i795 = i793[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i795[i + 0]) );
  }
  i792.collisionMatrix = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.layerId = i799[1]
  i798.otherLayerId = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i803[i + 0]) );
  }
  i800.qualityLevels = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.names = i804
  i800.shadows = i801[2]
  i800.anisotropicFiltering = i801[3]
  i800.antiAliasing = i801[4]
  i800.lodBias = i801[5]
  i800.shadowCascades = i801[6]
  i800.shadowDistance = i801[7]
  i800.shadowmaskMode = i801[8]
  i800.shadowProjection = i801[9]
  i800.shadowResolution = i801[10]
  i800.softParticles = !!i801[11]
  i800.softVegetation = !!i801[12]
  i800.activeColorSpace = i801[13]
  i800.desiredColorSpace = i801[14]
  i800.masterTextureLimit = i801[15]
  i800.maxQueuedFrames = i801[16]
  i800.particleRaycastBudget = i801[17]
  i800.pixelLightCount = i801[18]
  i800.realtimeReflectionProbes = !!i801[19]
  i800.shadowCascade2Split = i801[20]
  i800.shadowCascade4Split = new pc.Vec3( i801[21], i801[22], i801[23] )
  i800.streamingMipmapsActive = !!i801[24]
  i800.vSyncCount = i801[25]
  i800.asyncUploadBufferSize = i801[26]
  i800.asyncUploadTimeSlice = i801[27]
  i800.billboardsFaceCameraPosition = !!i801[28]
  i800.shadowNearPlaneOffset = i801[29]
  i800.streamingMipmapsMemoryBudget = i801[30]
  i800.maximumLODLevel = i801[31]
  i800.streamingMipmapsAddAllCameras = !!i801[32]
  i800.streamingMipmapsMaxLevelReduction = i801[33]
  i800.streamingMipmapsRenderersPerFrame = i801[34]
  i800.resolutionScalingFixedDPIFactor = i801[35]
  i800.streamingMipmapsMaxFileIORequests = i801[36]
  i800.currentQualityLevel = i801[37]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i811 = data
  i810.weight = i811[0]
  i810.vertices = i811[1]
  i810.normals = i811[2]
  i810.tangents = i811[3]
  return i810
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[14],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[14],"77":[9],"78":[79],"80":[79],"18":[17],"81":[82],"83":[84],"85":[82],"86":[17],"87":[17],"21":[18],"29":[30,17],"88":[17],"20":[18],"89":[17],"90":[17],"91":[17],"92":[17],"93":[17],"94":[17],"95":[17],"96":[17],"97":[17],"98":[30,17],"99":[17],"100":[17],"101":[17],"102":[17],"32":[30,17],"103":[17],"104":[105],"106":[105],"107":[105],"108":[105],"109":[14],"110":[14],"111":[112],"113":[14],"114":[17],"115":[9,17],"116":[17,30],"117":[17],"118":[30,17],"119":[9],"120":[30,17],"121":[17],"122":[82]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexStack","HexTile","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshCollider","HexFloor","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","PlayableUIRoot","HexGameContext","TutorialOverlayController","PackshotController","CountdownTimerPanel","UnityEngine.GameObject","UnityEngine.CanvasGroup","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","HexConfig","HexPoolService","HexManager","HexStacksCreator","HexFloorCreator","HexDragger","HexTransferAnimator","HexClearFxPlayer","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "TestHex";

Deserializers.lunaInitializationTime = "05/25/2026 23:56:59";

Deserializers.lunaDaysRunning = "16.1";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4066";

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

Deserializers.buildID = "6bcfab7f-23c4-4266-89db-2ac1bef36e95";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


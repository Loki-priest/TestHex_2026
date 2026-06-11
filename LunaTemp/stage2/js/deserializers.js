var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.JointSpring' )
  var i1219 = data
  i1218.spring = i1219[0]
  i1218.damper = i1219[1]
  i1218.targetPosition = i1219[2]
  return i1218
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.JointMotor' )
  var i1221 = data
  i1220.m_TargetVelocity = i1221[0]
  i1220.m_Force = i1221[1]
  i1220.m_FreeSpin = i1221[2]
  return i1220
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.JointLimits' )
  var i1223 = data
  i1222.m_Min = i1223[0]
  i1222.m_Max = i1223[1]
  i1222.m_Bounciness = i1223[2]
  i1222.m_BounceMinVelocity = i1223[3]
  i1222.m_ContactDistance = i1223[4]
  i1222.minBounce = i1223[5]
  i1222.maxBounce = i1223[6]
  return i1222
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.JointDrive' )
  var i1225 = data
  i1224.m_PositionSpring = i1225[0]
  i1224.m_PositionDamper = i1225[1]
  i1224.m_MaximumForce = i1225[2]
  i1224.m_UseAcceleration = i1225[3]
  return i1224
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1227 = data
  i1226.m_Spring = i1227[0]
  i1226.m_Damper = i1227[1]
  return i1226
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1229 = data
  i1228.m_Limit = i1229[0]
  i1228.m_Bounciness = i1229[1]
  i1228.m_ContactDistance = i1229[2]
  return i1228
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1231 = data
  i1230.m_ExtremumSlip = i1231[0]
  i1230.m_ExtremumValue = i1231[1]
  i1230.m_AsymptoteSlip = i1231[2]
  i1230.m_AsymptoteValue = i1231[3]
  i1230.m_Stiffness = i1231[4]
  return i1230
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1233 = data
  i1232.m_LowerAngle = i1233[0]
  i1232.m_UpperAngle = i1233[1]
  return i1232
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1235 = data
  i1234.m_MotorSpeed = i1235[0]
  i1234.m_MaximumMotorTorque = i1235[1]
  return i1234
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1237 = data
  i1236.m_DampingRatio = i1237[0]
  i1236.m_Frequency = i1237[1]
  i1236.m_Angle = i1237[2]
  return i1236
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1239 = data
  i1238.m_LowerTranslation = i1239[0]
  i1238.m_UpperTranslation = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.width = i1241[1]
  i1240.height = i1241[2]
  i1240.mipmapCount = i1241[3]
  i1240.anisoLevel = i1241[4]
  i1240.filterMode = i1241[5]
  i1240.hdr = !!i1241[6]
  i1240.format = i1241[7]
  i1240.wrapMode = i1241[8]
  i1240.alphaIsTransparency = !!i1241[9]
  i1240.alphaSource = i1241[10]
  i1240.graphicsFormat = i1241[11]
  i1240.sRGBTexture = !!i1241[12]
  i1240.desiredColorSpace = i1241[13]
  i1240.wrapU = i1241[14]
  i1240.wrapV = i1241[15]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1243 = data
  i1242.position = new pc.Vec3( i1243[0], i1243[1], i1243[2] )
  i1242.scale = new pc.Vec3( i1243[3], i1243[4], i1243[5] )
  i1242.rotation = new pc.Quat(i1243[6], i1243[7], i1243[8], i1243[9])
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1245 = data
  i1244.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1245[0], i1244.main)
  i1244.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1245[1], i1244.colorBySpeed)
  i1244.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1245[2], i1244.colorOverLifetime)
  i1244.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1245[3], i1244.emission)
  i1244.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1245[4], i1244.rotationBySpeed)
  i1244.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1245[5], i1244.rotationOverLifetime)
  i1244.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1245[6], i1244.shape)
  i1244.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1245[7], i1244.sizeBySpeed)
  i1244.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1245[8], i1244.sizeOverLifetime)
  i1244.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1245[9], i1244.textureSheetAnimation)
  i1244.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1245[10], i1244.velocityOverLifetime)
  i1244.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1245[11], i1244.noise)
  i1244.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1245[12], i1244.inheritVelocity)
  i1244.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1245[13], i1244.forceOverLifetime)
  i1244.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1245[14], i1244.limitVelocityOverLifetime)
  i1244.useAutoRandomSeed = !!i1245[15]
  i1244.randomSeed = i1245[16]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1246 = root || new pc.ParticleSystemMain()
  var i1247 = data
  i1246.duration = i1247[0]
  i1246.loop = !!i1247[1]
  i1246.prewarm = !!i1247[2]
  i1246.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[3], i1246.startDelay)
  i1246.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[4], i1246.startLifetime)
  i1246.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[5], i1246.startSpeed)
  i1246.startSize3D = !!i1247[6]
  i1246.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[7], i1246.startSizeX)
  i1246.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[8], i1246.startSizeY)
  i1246.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[9], i1246.startSizeZ)
  i1246.startRotation3D = !!i1247[10]
  i1246.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[11], i1246.startRotationX)
  i1246.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[12], i1246.startRotationY)
  i1246.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[13], i1246.startRotationZ)
  i1246.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1247[14], i1246.startColor)
  i1246.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1247[15], i1246.gravityModifier)
  i1246.simulationSpace = i1247[16]
  request.r(i1247[17], i1247[18], 0, i1246, 'customSimulationSpace')
  i1246.simulationSpeed = i1247[19]
  i1246.useUnscaledTime = !!i1247[20]
  i1246.scalingMode = i1247[21]
  i1246.playOnAwake = !!i1247[22]
  i1246.maxParticles = i1247[23]
  i1246.emitterVelocityMode = i1247[24]
  i1246.stopAction = i1247[25]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1248 = root || new pc.MinMaxCurve()
  var i1249 = data
  i1248.mode = i1249[0]
  i1248.curveMin = new pc.AnimationCurve( { keys_flow: i1249[1] } )
  i1248.curveMax = new pc.AnimationCurve( { keys_flow: i1249[2] } )
  i1248.curveMultiplier = i1249[3]
  i1248.constantMin = i1249[4]
  i1248.constantMax = i1249[5]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1250 = root || new pc.MinMaxGradient()
  var i1251 = data
  i1250.mode = i1251[0]
  i1250.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1251[1], i1250.gradientMin)
  i1250.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1251[2], i1250.gradientMax)
  i1250.colorMin = new pc.Color(i1251[3], i1251[4], i1251[5], i1251[6])
  i1250.colorMax = new pc.Color(i1251[7], i1251[8], i1251[9], i1251[10])
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1253 = data
  i1252.mode = i1253[0]
  var i1255 = i1253[1]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1255[i + 0]) );
  }
  i1252.colorKeys = i1254
  var i1257 = i1253[2]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1257[i + 0]) );
  }
  i1252.alphaKeys = i1256
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1258 = root || new pc.ParticleSystemColorBySpeed()
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1259[1], i1258.color)
  i1258.range = new pc.Vec2( i1259[2], i1259[3] )
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1263 = data
  i1262.color = new pc.Color(i1263[0], i1263[1], i1263[2], i1263[3])
  i1262.time = i1263[4]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1267 = data
  i1266.alpha = i1267[0]
  i1266.time = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1268 = root || new pc.ParticleSystemColorOverLifetime()
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1269[1], i1268.color)
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1270 = root || new pc.ParticleSystemEmitter()
  var i1271 = data
  i1270.enabled = !!i1271[0]
  i1270.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1271[1], i1270.rateOverTime)
  i1270.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1271[2], i1270.rateOverDistance)
  var i1273 = i1271[3]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1273[i + 0]) );
  }
  i1270.bursts = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1276 = root || new pc.ParticleSystemBurst()
  var i1277 = data
  i1276.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1277[0], i1276.count)
  i1276.cycleCount = i1277[1]
  i1276.minCount = i1277[2]
  i1276.maxCount = i1277[3]
  i1276.repeatInterval = i1277[4]
  i1276.time = i1277[5]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1278 = root || new pc.ParticleSystemRotationBySpeed()
  var i1279 = data
  i1278.enabled = !!i1279[0]
  i1278.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1279[1], i1278.x)
  i1278.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1279[2], i1278.y)
  i1278.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1279[3], i1278.z)
  i1278.separateAxes = !!i1279[4]
  i1278.range = new pc.Vec2( i1279[5], i1279[6] )
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1280 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1281 = data
  i1280.enabled = !!i1281[0]
  i1280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1281[1], i1280.x)
  i1280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1281[2], i1280.y)
  i1280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1281[3], i1280.z)
  i1280.separateAxes = !!i1281[4]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1282 = root || new pc.ParticleSystemShape()
  var i1283 = data
  i1282.enabled = !!i1283[0]
  i1282.shapeType = i1283[1]
  i1282.randomDirectionAmount = i1283[2]
  i1282.sphericalDirectionAmount = i1283[3]
  i1282.randomPositionAmount = i1283[4]
  i1282.alignToDirection = !!i1283[5]
  i1282.radius = i1283[6]
  i1282.radiusMode = i1283[7]
  i1282.radiusSpread = i1283[8]
  i1282.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1283[9], i1282.radiusSpeed)
  i1282.radiusThickness = i1283[10]
  i1282.angle = i1283[11]
  i1282.length = i1283[12]
  i1282.boxThickness = new pc.Vec3( i1283[13], i1283[14], i1283[15] )
  i1282.meshShapeType = i1283[16]
  request.r(i1283[17], i1283[18], 0, i1282, 'mesh')
  request.r(i1283[19], i1283[20], 0, i1282, 'meshRenderer')
  request.r(i1283[21], i1283[22], 0, i1282, 'skinnedMeshRenderer')
  i1282.useMeshMaterialIndex = !!i1283[23]
  i1282.meshMaterialIndex = i1283[24]
  i1282.useMeshColors = !!i1283[25]
  i1282.normalOffset = i1283[26]
  i1282.arc = i1283[27]
  i1282.arcMode = i1283[28]
  i1282.arcSpread = i1283[29]
  i1282.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1283[30], i1282.arcSpeed)
  i1282.donutRadius = i1283[31]
  i1282.position = new pc.Vec3( i1283[32], i1283[33], i1283[34] )
  i1282.rotation = new pc.Vec3( i1283[35], i1283[36], i1283[37] )
  i1282.scale = new pc.Vec3( i1283[38], i1283[39], i1283[40] )
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1284 = root || new pc.ParticleSystemSizeBySpeed()
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1285[1], i1284.x)
  i1284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1285[2], i1284.y)
  i1284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1285[3], i1284.z)
  i1284.separateAxes = !!i1285[4]
  i1284.range = new pc.Vec2( i1285[5], i1285[6] )
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1286 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1287 = data
  i1286.enabled = !!i1287[0]
  i1286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1287[1], i1286.x)
  i1286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1287[2], i1286.y)
  i1286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1287[3], i1286.z)
  i1286.separateAxes = !!i1287[4]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1288 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1289 = data
  i1288.enabled = !!i1289[0]
  i1288.mode = i1289[1]
  i1288.animation = i1289[2]
  i1288.numTilesX = i1289[3]
  i1288.numTilesY = i1289[4]
  i1288.useRandomRow = !!i1289[5]
  i1288.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1289[6], i1288.frameOverTime)
  i1288.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1289[7], i1288.startFrame)
  i1288.cycleCount = i1289[8]
  i1288.rowIndex = i1289[9]
  i1288.flipU = i1289[10]
  i1288.flipV = i1289[11]
  i1288.spriteCount = i1289[12]
  var i1291 = i1289[13]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 2, i1290, '')
  }
  i1288.sprites = i1290
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1294 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1295 = data
  i1294.enabled = !!i1295[0]
  i1294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[1], i1294.x)
  i1294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[2], i1294.y)
  i1294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[3], i1294.z)
  i1294.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[4], i1294.radial)
  i1294.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[5], i1294.speedModifier)
  i1294.space = i1295[6]
  i1294.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[7], i1294.orbitalX)
  i1294.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[8], i1294.orbitalY)
  i1294.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[9], i1294.orbitalZ)
  i1294.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[10], i1294.orbitalOffsetX)
  i1294.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[11], i1294.orbitalOffsetY)
  i1294.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[12], i1294.orbitalOffsetZ)
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1296 = root || new pc.ParticleSystemNoise()
  var i1297 = data
  i1296.enabled = !!i1297[0]
  i1296.separateAxes = !!i1297[1]
  i1296.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[2], i1296.strengthX)
  i1296.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[3], i1296.strengthY)
  i1296.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[4], i1296.strengthZ)
  i1296.frequency = i1297[5]
  i1296.damping = !!i1297[6]
  i1296.octaveCount = i1297[7]
  i1296.octaveMultiplier = i1297[8]
  i1296.octaveScale = i1297[9]
  i1296.quality = i1297[10]
  i1296.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[11], i1296.scrollSpeed)
  i1296.scrollSpeedMultiplier = i1297[12]
  i1296.remapEnabled = !!i1297[13]
  i1296.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[14], i1296.remapX)
  i1296.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[15], i1296.remapY)
  i1296.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[16], i1296.remapZ)
  i1296.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[17], i1296.positionAmount)
  i1296.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[18], i1296.rotationAmount)
  i1296.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[19], i1296.sizeAmount)
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1298 = root || new pc.ParticleSystemInheritVelocity()
  var i1299 = data
  i1298.enabled = !!i1299[0]
  i1298.mode = i1299[1]
  i1298.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1299[2], i1298.curve)
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1300 = root || new pc.ParticleSystemForceOverLifetime()
  var i1301 = data
  i1300.enabled = !!i1301[0]
  i1300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[1], i1300.x)
  i1300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[2], i1300.y)
  i1300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[3], i1300.z)
  i1300.space = i1301[4]
  i1300.randomized = !!i1301[5]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1302 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1303 = data
  i1302.enabled = !!i1303[0]
  i1302.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[1], i1302.limit)
  i1302.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[2], i1302.limitX)
  i1302.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[3], i1302.limitY)
  i1302.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[4], i1302.limitZ)
  i1302.dampen = i1303[5]
  i1302.separateAxes = !!i1303[6]
  i1302.space = i1303[7]
  i1302.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[8], i1302.drag)
  i1302.multiplyDragByParticleSize = !!i1303[9]
  i1302.multiplyDragByParticleVelocity = !!i1303[10]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'mesh')
  i1304.meshCount = i1305[2]
  i1304.activeVertexStreamsCount = i1305[3]
  i1304.alignment = i1305[4]
  i1304.renderMode = i1305[5]
  i1304.sortMode = i1305[6]
  i1304.lengthScale = i1305[7]
  i1304.velocityScale = i1305[8]
  i1304.cameraVelocityScale = i1305[9]
  i1304.normalDirection = i1305[10]
  i1304.sortingFudge = i1305[11]
  i1304.minParticleSize = i1305[12]
  i1304.maxParticleSize = i1305[13]
  i1304.pivot = new pc.Vec3( i1305[14], i1305[15], i1305[16] )
  request.r(i1305[17], i1305[18], 0, i1304, 'trailMaterial')
  i1304.applyActiveColorSpace = !!i1305[19]
  i1304.enabled = !!i1305[20]
  request.r(i1305[21], i1305[22], 0, i1304, 'sharedMaterial')
  var i1307 = i1305[23]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 2, i1306, '')
  }
  i1304.sharedMaterials = i1306
  i1304.receiveShadows = !!i1305[24]
  i1304.shadowCastingMode = i1305[25]
  i1304.sortingLayerID = i1305[26]
  i1304.sortingOrder = i1305[27]
  i1304.lightmapIndex = i1305[28]
  i1304.lightmapSceneIndex = i1305[29]
  i1304.lightmapScaleOffset = new pc.Vec4( i1305[30], i1305[31], i1305[32], i1305[33] )
  i1304.lightProbeUsage = i1305[34]
  i1304.reflectionProbeUsage = i1305[35]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.tagId = i1311[1]
  i1310.enabled = !!i1311[2]
  i1310.isStatic = !!i1311[3]
  i1310.layer = i1311[4]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1312 = root || new pc.UnityMaterial()
  var i1313 = data
  i1312.name = i1313[0]
  request.r(i1313[1], i1313[2], 0, i1312, 'shader')
  i1312.renderQueue = i1313[3]
  i1312.enableInstancing = !!i1313[4]
  var i1315 = i1313[5]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1315[i + 0]) );
  }
  i1312.floatParameters = i1314
  var i1317 = i1313[6]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1317[i + 0]) );
  }
  i1312.colorParameters = i1316
  var i1319 = i1313[7]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1319[i + 0]) );
  }
  i1312.vectorParameters = i1318
  var i1321 = i1313[8]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1321[i + 0]) );
  }
  i1312.textureParameters = i1320
  var i1323 = i1313[9]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1323[i + 0]) );
  }
  i1312.materialFlags = i1322
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Color(i1331[1], i1331[2], i1331[3], i1331[4])
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = new pc.Vec4( i1335[1], i1335[2], i1335[3], i1335[4] )
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1339 = data
  i1338.name = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'value')
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.enabled = !!i1343[1]
  return i1342
}

Deserializers["HexStack"] = function (request, data, root) {
  var i1344 = root || request.c( 'HexStack' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('HexTile')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1344.hexTiles = i1346
  request.r(i1345[1], i1345[2], 0, i1344, 'tileTemplate')
  request.r(i1345[3], i1345[4], 0, i1344, 'anchorPos')
  i1344.tileStep = i1345[5]
  i1344.tileBaseLocalPosition = new pc.Vec3( i1345[6], i1345[7], i1345[8] )
  i1344.hideWhenEmpty = !!i1345[9]
  return i1344
}

Deserializers["HexTile"] = function (request, data, root) {
  var i1350 = root || request.c( 'HexTile' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'myMeshRenderer')
  i1350.colorId = i1351[2]
  i1350.currentColor = new pc.Color(i1351[3], i1351[4], i1351[5], i1351[6])
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'sharedMesh')
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'additionalVertexStreams')
  i1354.enabled = !!i1355[2]
  request.r(i1355[3], i1355[4], 0, i1354, 'sharedMaterial')
  var i1357 = i1355[5]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 2, i1356, '')
  }
  i1354.sharedMaterials = i1356
  i1354.receiveShadows = !!i1355[6]
  i1354.shadowCastingMode = i1355[7]
  i1354.sortingLayerID = i1355[8]
  i1354.sortingOrder = i1355[9]
  i1354.lightmapIndex = i1355[10]
  i1354.lightmapSceneIndex = i1355[11]
  i1354.lightmapScaleOffset = new pc.Vec4( i1355[12], i1355[13], i1355[14], i1355[15] )
  i1354.lightProbeUsage = i1355[16]
  i1354.reflectionProbeUsage = i1355[17]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'sharedMesh')
  i1358.convex = !!i1359[2]
  i1358.enabled = !!i1359[3]
  i1358.isTrigger = !!i1359[4]
  request.r(i1359[5], i1359[6], 0, i1358, 'material')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.halfPrecision = !!i1361[1]
  i1360.useSimplification = !!i1361[2]
  i1360.useUInt32IndexFormat = !!i1361[3]
  i1360.vertexCount = i1361[4]
  i1360.aabb = i1361[5]
  var i1363 = i1361[6]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( !!i1363[i + 0] );
  }
  i1360.streams = i1362
  i1360.vertices = i1361[7]
  var i1365 = i1361[8]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1365[i + 0]) );
  }
  i1360.subMeshes = i1364
  var i1367 = i1361[9]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 16) {
    i1366.push( new pc.Mat4().setData(i1367[i + 0], i1367[i + 1], i1367[i + 2], i1367[i + 3],  i1367[i + 4], i1367[i + 5], i1367[i + 6], i1367[i + 7],  i1367[i + 8], i1367[i + 9], i1367[i + 10], i1367[i + 11],  i1367[i + 12], i1367[i + 13], i1367[i + 14], i1367[i + 15]) );
  }
  i1360.bindposes = i1366
  var i1369 = i1361[10]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1369[i + 0]) );
  }
  i1360.blendShapes = i1368
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1375 = data
  i1374.triangles = i1375[0]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1381 = data
  i1380.name = i1381[0]
  var i1383 = i1381[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1383[i + 0]) );
  }
  i1380.frames = i1382
  return i1380
}

Deserializers["HexFloor"] = function (request, data, root) {
  var i1384 = root || request.c( 'HexFloor' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'stackAnchor')
  i1384.gridX = i1385[2]
  i1384.gridZ = i1385[3]
  var i1387 = i1385[4]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 2) {
  request.r(i1387[i + 0], i1387[i + 1], 2, i1386, '')
  }
  i1384.highlightRenderers = i1386
  i1384.originalColor = new pc.Color(i1385[5], i1385[6], i1385[7], i1385[8])
  i1384.dropHighlightColor = new pc.Color(i1385[9], i1385[10], i1385[11], i1385[12])
  i1384.dropHighlightBlend = i1385[13]
  i1384.useEmissionHighlight = !!i1385[14]
  i1384.dropHighlightEmissionColor = new pc.Color(i1385[15], i1385[16], i1385[17], i1385[18])
  i1384.autoFindOnAwake = !!i1385[19]
  i1384.neighborSearchDistance = i1385[20]
  i1384.rayHeight = i1385[21]
  i1384.neighborRaycastBufferSize = i1385[22]
  i1384.searchMask = UnityEngine.LayerMask.FromIntegerValue( i1385[23] )
  i1384.sideDirectionOffsetDegrees = i1385[24]
  var i1389 = i1385[25]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 2, i1388, '')
  }
  i1384.sideNeighbors = i1388
  i1384.drawSideRays = !!i1385[26]
  i1384.gizmoSideOffset = i1385[27]
  i1384.gizmoRayLength = i1385[28]
  i1384.gizmoSphereRadius = i1385[29]
  i1384.gizmoNoNeighborColor = new pc.Color(i1385[30], i1385[31], i1385[32], i1385[33])
  i1384.gizmoNeighborColor = new pc.Color(i1385[34], i1385[35], i1385[36], i1385[37])
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.atlasId = i1395[1]
  i1394.mipmapCount = i1395[2]
  i1394.hdr = !!i1395[3]
  i1394.size = i1395[4]
  i1394.anisoLevel = i1395[5]
  i1394.filterMode = i1395[6]
  var i1397 = i1395[7]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 4) {
    i1396.push( UnityEngine.Rect.MinMaxRect(i1397[i + 0], i1397[i + 1], i1397[i + 2], i1397[i + 3]) );
  }
  i1394.rects = i1396
  i1394.wrapU = i1395[8]
  i1394.wrapV = i1395[9]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.index = i1401[1]
  i1400.startup = !!i1401[2]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1403 = data
  i1402.aspect = i1403[0]
  i1402.orthographic = !!i1403[1]
  i1402.orthographicSize = i1403[2]
  i1402.backgroundColor = new pc.Color(i1403[3], i1403[4], i1403[5], i1403[6])
  i1402.nearClipPlane = i1403[7]
  i1402.farClipPlane = i1403[8]
  i1402.fieldOfView = i1403[9]
  i1402.depth = i1403[10]
  i1402.clearFlags = i1403[11]
  i1402.cullingMask = i1403[12]
  i1402.rect = i1403[13]
  request.r(i1403[14], i1403[15], 0, i1402, 'targetTexture')
  i1402.usePhysicalProperties = !!i1403[16]
  i1402.focalLength = i1403[17]
  i1402.sensorSize = new pc.Vec2( i1403[18], i1403[19] )
  i1402.lensShift = new pc.Vec2( i1403[20], i1403[21] )
  i1402.gateFit = i1403[22]
  i1402.commandBufferCount = i1403[23]
  i1402.cameraType = i1403[24]
  i1402.enabled = !!i1403[25]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1405 = data
  i1404.type = i1405[0]
  i1404.color = new pc.Color(i1405[1], i1405[2], i1405[3], i1405[4])
  i1404.cullingMask = i1405[5]
  i1404.intensity = i1405[6]
  i1404.range = i1405[7]
  i1404.spotAngle = i1405[8]
  i1404.shadows = i1405[9]
  i1404.shadowNormalBias = i1405[10]
  i1404.shadowBias = i1405[11]
  i1404.shadowStrength = i1405[12]
  i1404.shadowResolution = i1405[13]
  i1404.lightmapBakeType = i1405[14]
  i1404.renderMode = i1405[15]
  request.r(i1405[16], i1405[17], 0, i1404, 'cookie')
  i1404.cookieSize = i1405[18]
  i1404.shadowNearPlane = i1405[19]
  i1404.occlusionMaskChannel = i1405[20]
  i1404.isBaked = !!i1405[21]
  i1404.mixedLightingMode = i1405[22]
  i1404.enabled = !!i1405[23]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1407 = data
  i1406.pivot = new pc.Vec2( i1407[0], i1407[1] )
  i1406.anchorMin = new pc.Vec2( i1407[2], i1407[3] )
  i1406.anchorMax = new pc.Vec2( i1407[4], i1407[5] )
  i1406.sizeDelta = new pc.Vec2( i1407[6], i1407[7] )
  i1406.anchoredPosition3D = new pc.Vec3( i1407[8], i1407[9], i1407[10] )
  i1406.rotation = new pc.Quat(i1407[11], i1407[12], i1407[13], i1407[14])
  i1406.scale = new pc.Vec3( i1407[15], i1407[16], i1407[17] )
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1409 = data
  i1408.planeDistance = i1409[0]
  i1408.referencePixelsPerUnit = i1409[1]
  i1408.isFallbackOverlay = !!i1409[2]
  i1408.renderMode = i1409[3]
  i1408.renderOrder = i1409[4]
  i1408.sortingLayerName = i1409[5]
  i1408.sortingOrder = i1409[6]
  i1408.scaleFactor = i1409[7]
  request.r(i1409[8], i1409[9], 0, i1408, 'worldCamera')
  i1408.overrideSorting = !!i1409[10]
  i1408.pixelPerfect = !!i1409[11]
  i1408.targetDisplay = i1409[12]
  i1408.overridePixelPerfect = !!i1409[13]
  i1408.enabled = !!i1409[14]
  return i1408
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1411 = data
  i1410.m_UiScaleMode = i1411[0]
  i1410.m_ReferencePixelsPerUnit = i1411[1]
  i1410.m_ScaleFactor = i1411[2]
  i1410.m_ReferenceResolution = new pc.Vec2( i1411[3], i1411[4] )
  i1410.m_ScreenMatchMode = i1411[5]
  i1410.m_MatchWidthOrHeight = i1411[6]
  i1410.m_PhysicalUnit = i1411[7]
  i1410.m_FallbackScreenDPI = i1411[8]
  i1410.m_DefaultSpriteDPI = i1411[9]
  i1410.m_DynamicPixelsPerUnit = i1411[10]
  i1410.m_PresetInfoIsWorld = !!i1411[11]
  return i1410
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1413 = data
  i1412.m_IgnoreReversedGraphics = !!i1413[0]
  i1412.m_BlockingObjects = i1413[1]
  i1412.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1413[2] )
  return i1412
}

Deserializers["PlayableUIRoot"] = function (request, data, root) {
  var i1414 = root || request.c( 'PlayableUIRoot' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'gameContext')
  request.r(i1415[2], i1415[3], 0, i1414, 'tutorialController')
  request.r(i1415[4], i1415[5], 0, i1414, 'packshotController')
  request.r(i1415[6], i1415[7], 0, i1414, 'countdownTimerPanel')
  return i1414
}

Deserializers["TutorialOverlayController"] = function (request, data, root) {
  var i1416 = root || request.c( 'TutorialOverlayController' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'tutorialRoot')
  request.r(i1417[2], i1417[3], 0, i1416, 'handTransform')
  request.r(i1417[4], i1417[5], 0, i1416, 'canvasRoot')
  request.r(i1417[6], i1417[7], 0, i1416, 'uiCamera')
  request.r(i1417[8], i1417[9], 0, i1416, 'worldCamera')
  request.r(i1417[10], i1417[11], 0, i1416, 'gameContext')
  request.r(i1417[12], i1417[13], 0, i1416, 'fromAnchor')
  request.r(i1417[14], i1417[15], 0, i1416, 'toAnchor')
  i1416.startOnEnable = !!i1417[16]
  i1416.restartDelay = i1417[17]
  i1416.useDynamicWorldTargets = !!i1417[18]
  i1416.handScreenOffset = new pc.Vec2( i1417[19], i1417[20] )
  i1416.worldTargetHeightOffset = i1417[21]
  i1416.fallbackScanInterval = i1417[22]
  i1416.debugLogs = !!i1417[23]
  i1416.handMoveDuration = i1417[24]
  i1416.handPauseDuration = i1417[25]
  i1416.handMoveEase = i1417[26]
  return i1416
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i1418 = root || request.c( 'PackshotController' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'packshotRoot')
  request.r(i1419[2], i1419[3], 0, i1418, 'packshotCanvasGroup')
  request.r(i1419[4], i1419[5], 0, i1418, 'backgroundObject')
  request.r(i1419[6], i1419[7], 0, i1418, 'logoObject')
  request.r(i1419[8], i1419[9], 0, i1418, 'playNowButtonObject')
  i1418.hideOnStart = !!i1419[10]
  i1418.reactToAnyTap = !!i1419[11]
  i1418.fadeDuration = i1419[12]
  i1418.fadeEase = i1419[13]
  return i1418
}

Deserializers["CountdownTimerPanel"] = function (request, data, root) {
  var i1420 = root || request.c( 'CountdownTimerPanel' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'gameContext')
  i1420.durationSeconds = i1421[2]
  i1420.autoStartOnEnable = !!i1421[3]
  i1420.lowTimeThresholdNormalized = i1421[4]
  i1420.barFrameNormalColor = new pc.Color(i1421[5], i1421[6], i1421[7], i1421[8])
  i1420.barBackNormalColor = new pc.Color(i1421[9], i1421[10], i1421[11], i1421[12])
  i1420.barFillNormalColor = new pc.Color(i1421[13], i1421[14], i1421[15], i1421[16])
  i1420.iconFrameNormalColor = new pc.Color(i1421[17], i1421[18], i1421[19], i1421[20])
  i1420.iconBackNormalColor = new pc.Color(i1421[21], i1421[22], i1421[23], i1421[24])
  i1420.barFrameLowColor = new pc.Color(i1421[25], i1421[26], i1421[27], i1421[28])
  i1420.barBackLowColor = new pc.Color(i1421[29], i1421[30], i1421[31], i1421[32])
  i1420.barFillLowColor = new pc.Color(i1421[33], i1421[34], i1421[35], i1421[36])
  i1420.iconFrameLowColor = new pc.Color(i1421[37], i1421[38], i1421[39], i1421[40])
  i1420.iconBackLowColor = new pc.Color(i1421[41], i1421[42], i1421[43], i1421[44])
  i1420.arrowStartAngle = i1421[45]
  i1420.arrowEndAngle = i1421[46]
  i1420.arrowNormalColor = new pc.Color(i1421[47], i1421[48], i1421[49], i1421[50])
  i1420.iconShakeDuration = i1421[51]
  i1420.iconShakeStrength = i1421[52]
  i1420.iconShakeVibrato = i1421[53]
  i1420.lowBackdropBlendRange = i1421[54]
  request.r(i1421[55], i1421[56], 0, i1420, 'panelRoot')
  request.r(i1421[57], i1421[58], 0, i1420, 'barFrameImage')
  request.r(i1421[59], i1421[60], 0, i1420, 'barBackImage')
  request.r(i1421[61], i1421[62], 0, i1420, 'barFillImage')
  request.r(i1421[63], i1421[64], 0, i1420, 'iconRoot')
  request.r(i1421[65], i1421[66], 0, i1420, 'iconFrameImage')
  request.r(i1421[67], i1421[68], 0, i1420, 'iconBackImage')
  request.r(i1421[69], i1421[70], 0, i1420, 'iconNubImage')
  request.r(i1421[71], i1421[72], 0, i1420, 'arrowTransform')
  request.r(i1421[73], i1421[74], 0, i1420, 'arrowImage')
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1423 = data
  i1422.cullTransparentMesh = !!i1423[0]
  return i1422
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.UI.Image' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'm_Sprite')
  i1424.m_Type = i1425[2]
  i1424.m_PreserveAspect = !!i1425[3]
  i1424.m_FillCenter = !!i1425[4]
  i1424.m_FillMethod = i1425[5]
  i1424.m_FillAmount = i1425[6]
  i1424.m_FillClockwise = !!i1425[7]
  i1424.m_FillOrigin = i1425[8]
  i1424.m_UseSpriteMesh = !!i1425[9]
  i1424.m_PixelsPerUnitMultiplier = i1425[10]
  request.r(i1425[11], i1425[12], 0, i1424, 'm_Material')
  i1424.m_Maskable = !!i1425[13]
  i1424.m_Color = new pc.Color(i1425[14], i1425[15], i1425[16], i1425[17])
  i1424.m_RaycastTarget = !!i1425[18]
  i1424.m_RaycastPadding = new pc.Vec4( i1425[19], i1425[20], i1425[21], i1425[22] )
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1427 = data
  i1426.m_Alpha = i1427[0]
  i1426.m_Interactable = !!i1427[1]
  i1426.m_BlocksRaycasts = !!i1427[2]
  i1426.m_IgnoreParentGroups = !!i1427[3]
  i1426.enabled = !!i1427[4]
  return i1426
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.UI.Text' )
  var i1429 = data
  i1428.m_FontData = request.d('UnityEngine.UI.FontData', i1429[0], i1428.m_FontData)
  i1428.m_Text = i1429[1]
  request.r(i1429[2], i1429[3], 0, i1428, 'm_Material')
  i1428.m_Maskable = !!i1429[4]
  i1428.m_Color = new pc.Color(i1429[5], i1429[6], i1429[7], i1429[8])
  i1428.m_RaycastTarget = !!i1429[9]
  i1428.m_RaycastPadding = new pc.Vec4( i1429[10], i1429[11], i1429[12], i1429[13] )
  return i1428
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'm_Font')
  i1430.m_FontSize = i1431[2]
  i1430.m_FontStyle = i1431[3]
  i1430.m_BestFit = !!i1431[4]
  i1430.m_MinSize = i1431[5]
  i1430.m_MaxSize = i1431[6]
  i1430.m_Alignment = i1431[7]
  i1430.m_AlignByGeometry = !!i1431[8]
  i1430.m_RichText = !!i1431[9]
  i1430.m_HorizontalOverflow = i1431[10]
  i1430.m_VerticalOverflow = i1431[11]
  i1430.m_LineSpacing = i1431[12]
  return i1430
}

Deserializers["HexGameContext"] = function (request, data, root) {
  var i1432 = root || request.c( 'HexGameContext' )
  var i1433 = data
  request.r(i1433[0], i1433[1], 0, i1432, 'config')
  request.r(i1433[2], i1433[3], 0, i1432, 'poolService')
  request.r(i1433[4], i1433[5], 0, i1432, 'manager')
  request.r(i1433[6], i1433[7], 0, i1432, 'stacksCreator')
  request.r(i1433[8], i1433[9], 0, i1432, 'floorCreator')
  return i1432
}

Deserializers["HexDragger"] = function (request, data, root) {
  var i1434 = root || request.c( 'HexDragger' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'gameContext')
  request.r(i1435[2], i1435[3], 0, i1434, 'inputCamera')
  i1434.pickMaxDistance = i1435[4]
  i1434.interactionMask = UnityEngine.LayerMask.FromIntegerValue( i1435[5] )
  i1434.floorCheckStartHeight = i1435[6]
  i1434.floorCheckDistance = i1435[7]
  i1434.floorRaycastBufferSize = i1435[8]
  i1434.liftHeight = i1435[9]
  i1434.liftDuration = i1435[10]
  i1434.liftEase = i1435[11]
  i1434.attachMoveDuration = i1435[12]
  i1434.attachMoveEase = i1435[13]
  i1434.returnMoveDuration = i1435[14]
  i1434.dropDuration = i1435[15]
  i1434.dropEase = i1435[16]
  return i1434
}

Deserializers["HexManager"] = function (request, data, root) {
  var i1436 = root || request.c( 'HexManager' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'gameContext')
  i1436.transferOnStackPlaced = !!i1437[2]
  request.r(i1437[3], i1437[4], 0, i1436, 'transferAnimator')
  i1436.transferSpeedIncreasePerStack = i1437[5]
  i1436.clearSpeedIncreasePerStack = i1437[6]
  i1436.clearScaleDuration = i1437[7]
  i1436.clearScaleEase = i1437[8]
  i1436.clearScaleStagger = i1437[9]
  request.r(i1437[10], i1437[11], 0, i1436, 'clearFxPlayer')
  i1436.logTransferEvents = !!i1437[12]
  return i1436
}

Deserializers["HexTransferAnimator"] = function (request, data, root) {
  var i1438 = root || request.c( 'HexTransferAnimator' )
  var i1439 = data
  i1438.logTransferAnimatorEvents = !!i1439[0]
  i1438.tileFlipDuration = i1439[1]
  i1438.tileFlipEase = i1439[2]
  i1438.tileSettleDuration = i1439[3]
  i1438.tileSettleEase = i1439[4]
  i1438.tileTransferFanStagger = i1439[5]
  i1438.tileTransferArcHeightMultiplier = i1439[6]
  return i1438
}

Deserializers["HexClearFxPlayer"] = function (request, data, root) {
  var i1440 = root || request.c( 'HexClearFxPlayer' )
  var i1441 = data
  request.r(i1441[0], i1441[1], 0, i1440, 'clearTilesFxPrefab')
  i1440.clearTilesFxLifetimePadding = i1441[2]
  return i1440
}

Deserializers["HexFloorCreator"] = function (request, data, root) {
  var i1442 = root || request.c( 'HexFloorCreator' )
  var i1443 = data
  request.r(i1443[0], i1443[1], 0, i1442, 'gameContext')
  request.r(i1443[2], i1443[3], 0, i1442, 'floorPrefab')
  request.r(i1443[4], i1443[5], 0, i1442, 'floorRoot')
  request.r(i1443[6], i1443[7], 0, i1442, 'bottomRowAnchor')
  i1442.generateOnStart = !!i1443[8]
  i1442.clearBeforeGenerate = !!i1443[9]
  i1442.refreshNeighborsAfterGenerate = !!i1443[10]
  i1442.fillStacksAfterGenerate = !!i1443[11]
  i1442.debugLogs = !!i1443[12]
  i1442.neighborDistance = i1443[13]
  i1442.shiftOddColumnsForward = !!i1443[14]
  i1442.anchorLocalOffset = new pc.Vec3( i1443[15], i1443[16], i1443[17] )
  return i1442
}

Deserializers["HexStacksCreator"] = function (request, data, root) {
  var i1444 = root || request.c( 'HexStacksCreator' )
  var i1445 = data
  request.r(i1445[0], i1445[1], 0, i1444, 'gameContext')
  request.r(i1445[2], i1445[3], 0, i1444, 'spawnStackPrefab')
  request.r(i1445[4], i1445[5], 0, i1444, 'stacksRoot')
  var i1447 = i1445[6]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 2) {
  request.r(i1447[i + 0], i1447[i + 1], 2, i1446, '')
  }
  i1444.stackSlots = i1446
  i1444.spawnOnStart = !!i1445[7]
  i1444.clearExistingOnStart = !!i1445[8]
  i1444.respawnWhenAllPlaced = !!i1445[9]
  i1444.spawnSlotsOnlyOnce = !!i1445[10]
  i1444.slotOccupancyRadius = i1445[11]
  i1444.logGeneratedFill = !!i1445[12]
  i1444.debugLogs = !!i1445[13]
  return i1444
}

Deserializers["HexPoolService"] = function (request, data, root) {
  var i1450 = root || request.c( 'HexPoolService' )
  var i1451 = data
  request.r(i1451[0], i1451[1], 0, i1450, 'stackPoolRoot')
  request.r(i1451[2], i1451[3], 0, i1450, 'tilePoolRoot')
  request.r(i1451[4], i1451[5], 0, i1450, 'fxPoolRoot')
  i1450.prewarmStackCount = i1451[6]
  i1450.prewarmTileCount = i1451[7]
  i1450.prewarmFxCount = i1451[8]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1453 = data
  i1452.ambientIntensity = i1453[0]
  i1452.reflectionIntensity = i1453[1]
  i1452.ambientMode = i1453[2]
  i1452.ambientLight = new pc.Color(i1453[3], i1453[4], i1453[5], i1453[6])
  i1452.ambientSkyColor = new pc.Color(i1453[7], i1453[8], i1453[9], i1453[10])
  i1452.ambientGroundColor = new pc.Color(i1453[11], i1453[12], i1453[13], i1453[14])
  i1452.ambientEquatorColor = new pc.Color(i1453[15], i1453[16], i1453[17], i1453[18])
  i1452.fogColor = new pc.Color(i1453[19], i1453[20], i1453[21], i1453[22])
  i1452.fogEndDistance = i1453[23]
  i1452.fogStartDistance = i1453[24]
  i1452.fogDensity = i1453[25]
  i1452.fog = !!i1453[26]
  request.r(i1453[27], i1453[28], 0, i1452, 'skybox')
  i1452.fogMode = i1453[29]
  var i1455 = i1453[30]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1455[i + 0]) );
  }
  i1452.lightmaps = i1454
  i1452.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1453[31], i1452.lightProbes)
  i1452.lightmapsMode = i1453[32]
  i1452.mixedBakeMode = i1453[33]
  i1452.environmentLightingMode = i1453[34]
  i1452.ambientProbe = new pc.SphericalHarmonicsL2(i1453[35])
  request.r(i1453[36], i1453[37], 0, i1452, 'customReflection')
  request.r(i1453[38], i1453[39], 0, i1452, 'defaultReflection')
  i1452.defaultReflectionMode = i1453[40]
  i1452.defaultReflectionResolution = i1453[41]
  i1452.sunLightObjectId = i1453[42]
  i1452.pixelLightCount = i1453[43]
  i1452.defaultReflectionHDR = !!i1453[44]
  i1452.hasLightDataAsset = !!i1453[45]
  i1452.hasManualGenerate = !!i1453[46]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'lightmapColor')
  request.r(i1459[2], i1459[3], 0, i1458, 'lightmapDirection')
  request.r(i1459[4], i1459[5], 0, i1458, 'shadowMask')
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1460 = root || new UnityEngine.LightProbes()
  var i1461 = data
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1469 = data
  var i1471 = i1469[0]
  var i1470 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1471[i + 0]));
  }
  i1468.ShaderCompilationErrors = i1470
  i1468.name = i1469[1]
  i1468.guid = i1469[2]
  var i1473 = i1469[3]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( i1473[i + 0] );
  }
  i1468.shaderDefinedKeywords = i1472
  var i1475 = i1469[4]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1475[i + 0]) );
  }
  i1468.passes = i1474
  var i1477 = i1469[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1477[i + 0]) );
  }
  i1468.usePasses = i1476
  var i1479 = i1469[6]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1479[i + 0]) );
  }
  i1468.defaultParameterValues = i1478
  request.r(i1469[7], i1469[8], 0, i1468, 'unityFallbackShader')
  i1468.readDepth = !!i1469[9]
  i1468.hasDepthOnlyPass = !!i1469[10]
  i1468.isCreatedByShaderGraph = !!i1469[11]
  i1468.disableBatching = !!i1469[12]
  i1468.compiled = !!i1469[13]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1483 = data
  i1482.shaderName = i1483[0]
  i1482.errorMessage = i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1488 = root || new pc.UnityShaderPass()
  var i1489 = data
  i1488.id = i1489[0]
  i1488.subShaderIndex = i1489[1]
  i1488.name = i1489[2]
  i1488.passType = i1489[3]
  i1488.grabPassTextureName = i1489[4]
  i1488.usePass = !!i1489[5]
  i1488.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[6], i1488.zTest)
  i1488.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[7], i1488.zWrite)
  i1488.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[8], i1488.culling)
  i1488.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1489[9], i1488.blending)
  i1488.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1489[10], i1488.alphaBlending)
  i1488.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[11], i1488.colorWriteMask)
  i1488.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[12], i1488.offsetUnits)
  i1488.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[13], i1488.offsetFactor)
  i1488.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[14], i1488.stencilRef)
  i1488.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[15], i1488.stencilReadMask)
  i1488.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[16], i1488.stencilWriteMask)
  i1488.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1489[17], i1488.stencilOp)
  i1488.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1489[18], i1488.stencilOpFront)
  i1488.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1489[19], i1488.stencilOpBack)
  var i1491 = i1489[20]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1491[i + 0]) );
  }
  i1488.tags = i1490
  var i1493 = i1489[21]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1488.passDefinedKeywords = i1492
  var i1495 = i1489[22]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1495[i + 0]) );
  }
  i1488.passDefinedKeywordGroups = i1494
  var i1497 = i1489[23]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1497[i + 0]) );
  }
  i1488.variants = i1496
  var i1499 = i1489[24]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1499[i + 0]) );
  }
  i1488.excludedVariants = i1498
  i1488.hasDepthReader = !!i1489[25]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1501 = data
  i1500.val = i1501[0]
  i1500.name = i1501[1]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1503 = data
  i1502.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1503[0], i1502.src)
  i1502.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1503[1], i1502.dst)
  i1502.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1503[2], i1502.op)
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1505 = data
  i1504.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1505[0], i1504.pass)
  i1504.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1505[1], i1504.fail)
  i1504.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1505[2], i1504.zFail)
  i1504.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1505[3], i1504.comp)
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1509 = data
  i1508.name = i1509[0]
  i1508.value = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1513 = data
  var i1515 = i1513[0]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1512.keywords = i1514
  i1512.hasDiscard = !!i1513[1]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1519 = data
  i1518.passId = i1519[0]
  i1518.subShaderIndex = i1519[1]
  var i1521 = i1519[2]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( i1521[i + 0] );
  }
  i1518.keywords = i1520
  i1518.vertexProgram = i1519[3]
  i1518.fragmentProgram = i1519[4]
  i1518.exportedForWebGl2 = !!i1519[5]
  i1518.readDepth = !!i1519[6]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'shader')
  i1524.pass = i1525[2]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.type = i1529[1]
  i1528.value = new pc.Vec4( i1529[2], i1529[3], i1529[4], i1529[5] )
  i1528.textureValue = i1529[6]
  i1528.shaderPropertyFlag = i1529[7]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1531 = data
  i1530.name = i1531[0]
  request.r(i1531[1], i1531[2], 0, i1530, 'texture')
  i1530.aabb = i1531[3]
  i1530.vertices = i1531[4]
  i1530.triangles = i1531[5]
  i1530.textureRect = UnityEngine.Rect.MinMaxRect(i1531[6], i1531[7], i1531[8], i1531[9])
  i1530.packedRect = UnityEngine.Rect.MinMaxRect(i1531[10], i1531[11], i1531[12], i1531[13])
  i1530.border = new pc.Vec4( i1531[14], i1531[15], i1531[16], i1531[17] )
  i1530.transparency = i1531[18]
  i1530.bounds = i1531[19]
  i1530.pixelsPerUnit = i1531[20]
  i1530.textureWidth = i1531[21]
  i1530.textureHeight = i1531[22]
  i1530.nativeSize = new pc.Vec2( i1531[23], i1531[24] )
  i1530.pivot = new pc.Vec2( i1531[25], i1531[26] )
  i1530.textureRectOffset = new pc.Vec2( i1531[27], i1531[28] )
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.ascent = i1533[1]
  i1532.originalLineHeight = i1533[2]
  i1532.fontSize = i1533[3]
  var i1535 = i1533[4]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1535[i + 0]) );
  }
  i1532.characterInfo = i1534
  request.r(i1533[5], i1533[6], 0, i1532, 'texture')
  i1532.originalFontSize = i1533[7]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1539 = data
  i1538.index = i1539[0]
  i1538.advance = i1539[1]
  i1538.bearing = i1539[2]
  i1538.glyphWidth = i1539[3]
  i1538.glyphHeight = i1539[4]
  i1538.minX = i1539[5]
  i1538.maxX = i1539[6]
  i1538.minY = i1539[7]
  i1538.maxY = i1539[8]
  i1538.uvBottomLeftX = i1539[9]
  i1538.uvBottomLeftY = i1539[10]
  i1538.uvBottomRightX = i1539[11]
  i1538.uvBottomRightY = i1539[12]
  i1538.uvTopLeftX = i1539[13]
  i1538.uvTopLeftY = i1539[14]
  i1538.uvTopRightX = i1539[15]
  i1538.uvTopRightY = i1539[16]
  return i1538
}

Deserializers["HexConfig"] = function (request, data, root) {
  var i1540 = root || request.c( 'HexConfig' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 4) {
    i1542.push( new pc.Color(i1543[i + 0], i1543[i + 1], i1543[i + 2], i1543[i + 3]) );
  }
  i1540.colors = i1542
  i1540.paletteColorCount = i1541[1]
  i1540.isRandom = !!i1541[2]
  var i1545 = i1541[3]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('HexConfig+StackColorPreset', i1545[i + 0]) );
  }
  i1540.startStackColors = i1544
  i1540.generatePlayerStacksByFivePlusFive = !!i1541[4]
  i1540.fillGeneratedFloorWithStacks = !!i1541[5]
  var i1547 = i1541[6]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('HexConfig+FloorCoord', i1547[i + 0]) );
  }
  i1540.noStackSpawnCoords = i1546
  i1540.topMatchClearCount = i1541[7]
  i1540.gameDurationSeconds = i1541[8]
  i1540.endGameAfterFirstTransferAndClearChain = !!i1541[9]
  i1540.floorWidth = i1541[10]
  i1540.floorLength = i1541[11]
  return i1540
}

Deserializers["HexConfig+StackColorPreset"] = function (request, data, root) {
  var i1552 = root || request.c( 'HexConfig+StackColorPreset' )
  var i1553 = data
  i1552.colorIdsBottomToTop = i1553[0]
  return i1552
}

Deserializers["HexConfig+FloorCoord"] = function (request, data, root) {
  var i1556 = root || request.c( 'HexConfig+FloorCoord' )
  var i1557 = data
  i1556.x = i1557[0]
  i1556.z = i1557[1]
  return i1556
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1558 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1559 = data
  i1558.useSafeMode = !!i1559[0]
  i1558.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1559[1], i1558.safeModeOptions)
  i1558.timeScale = i1559[2]
  i1558.unscaledTimeScale = i1559[3]
  i1558.useSmoothDeltaTime = !!i1559[4]
  i1558.maxSmoothUnscaledTime = i1559[5]
  i1558.rewindCallbackMode = i1559[6]
  i1558.showUnityEditorReport = !!i1559[7]
  i1558.logBehaviour = i1559[8]
  i1558.drawGizmos = !!i1559[9]
  i1558.defaultRecyclable = !!i1559[10]
  i1558.defaultAutoPlay = i1559[11]
  i1558.defaultUpdateType = i1559[12]
  i1558.defaultTimeScaleIndependent = !!i1559[13]
  i1558.defaultEaseType = i1559[14]
  i1558.defaultEaseOvershootOrAmplitude = i1559[15]
  i1558.defaultEasePeriod = i1559[16]
  i1558.defaultAutoKill = !!i1559[17]
  i1558.defaultLoopType = i1559[18]
  i1558.debugMode = !!i1559[19]
  i1558.debugStoreTargetId = !!i1559[20]
  i1558.showPreviewPanel = !!i1559[21]
  i1558.storeSettingsLocation = i1559[22]
  i1558.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1559[23], i1558.modules)
  i1558.createASMDEF = !!i1559[24]
  i1558.showPlayingTweens = !!i1559[25]
  i1558.showPausedTweens = !!i1559[26]
  return i1558
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1560 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1561 = data
  i1560.logBehaviour = i1561[0]
  i1560.nestedTweenFailureBehaviour = i1561[1]
  return i1560
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1562 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1563 = data
  i1562.showPanel = !!i1563[0]
  i1562.audioEnabled = !!i1563[1]
  i1562.physicsEnabled = !!i1563[2]
  i1562.physics2DEnabled = !!i1563[3]
  i1562.spriteEnabled = !!i1563[4]
  i1562.uiEnabled = !!i1563[5]
  i1562.textMeshProEnabled = !!i1563[6]
  i1562.tk2DEnabled = !!i1563[7]
  i1562.deAudioEnabled = !!i1563[8]
  i1562.deUnityExtendedEnabled = !!i1563[9]
  i1562.epoOutlineEnabled = !!i1563[10]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1565 = data
  var i1567 = i1565[0]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1567[i + 0]) );
  }
  i1564.files = i1566
  i1564.componentToPrefabIds = i1565[1]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1571 = data
  i1570.path = i1571[0]
  request.r(i1571[1], i1571[2], 0, i1570, 'unityObject')
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1573 = data
  var i1575 = i1573[0]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1575[i + 0]) );
  }
  i1572.scriptsExecutionOrder = i1574
  var i1577 = i1573[1]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1577[i + 0]) );
  }
  i1572.sortingLayers = i1576
  var i1579 = i1573[2]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1579[i + 0]) );
  }
  i1572.cullingLayers = i1578
  i1572.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1573[3], i1572.timeSettings)
  i1572.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1573[4], i1572.physicsSettings)
  i1572.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1573[5], i1572.physics2DSettings)
  i1572.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1573[6], i1572.qualitySettings)
  i1572.enableRealtimeShadows = !!i1573[7]
  i1572.enableAutoInstancing = !!i1573[8]
  i1572.enableStaticBatching = !!i1573[9]
  i1572.enableDynamicBatching = !!i1573[10]
  i1572.usePreservativeDynamicBatching = !!i1573[11]
  i1572.lightmapEncodingQuality = i1573[12]
  i1572.desiredColorSpace = i1573[13]
  var i1581 = i1573[14]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( i1581[i + 0] );
  }
  i1572.allTags = i1580
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.value = i1585[1]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1589 = data
  i1588.id = i1589[0]
  i1588.name = i1589[1]
  i1588.value = i1589[2]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1593 = data
  i1592.id = i1593[0]
  i1592.name = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1595 = data
  i1594.fixedDeltaTime = i1595[0]
  i1594.maximumDeltaTime = i1595[1]
  i1594.timeScale = i1595[2]
  i1594.maximumParticleTimestep = i1595[3]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1597 = data
  i1596.gravity = new pc.Vec3( i1597[0], i1597[1], i1597[2] )
  i1596.defaultSolverIterations = i1597[3]
  i1596.bounceThreshold = i1597[4]
  i1596.autoSyncTransforms = !!i1597[5]
  i1596.autoSimulation = !!i1597[6]
  var i1599 = i1597[7]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1599[i + 0]) );
  }
  i1596.collisionMatrix = i1598
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.layerId = i1603[1]
  i1602.otherLayerId = i1603[2]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'material')
  i1604.gravity = new pc.Vec2( i1605[2], i1605[3] )
  i1604.positionIterations = i1605[4]
  i1604.velocityIterations = i1605[5]
  i1604.velocityThreshold = i1605[6]
  i1604.maxLinearCorrection = i1605[7]
  i1604.maxAngularCorrection = i1605[8]
  i1604.maxTranslationSpeed = i1605[9]
  i1604.maxRotationSpeed = i1605[10]
  i1604.baumgarteScale = i1605[11]
  i1604.baumgarteTOIScale = i1605[12]
  i1604.timeToSleep = i1605[13]
  i1604.linearSleepTolerance = i1605[14]
  i1604.angularSleepTolerance = i1605[15]
  i1604.defaultContactOffset = i1605[16]
  i1604.autoSimulation = !!i1605[17]
  i1604.queriesHitTriggers = !!i1605[18]
  i1604.queriesStartInColliders = !!i1605[19]
  i1604.callbacksOnDisable = !!i1605[20]
  i1604.reuseCollisionCallbacks = !!i1605[21]
  i1604.autoSyncTransforms = !!i1605[22]
  var i1607 = i1605[23]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1607[i + 0]) );
  }
  i1604.collisionMatrix = i1606
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1611 = data
  i1610.enabled = !!i1611[0]
  i1610.layerId = i1611[1]
  i1610.otherLayerId = i1611[2]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1615[i + 0]) );
  }
  i1612.qualityLevels = i1614
  var i1617 = i1613[1]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( i1617[i + 0] );
  }
  i1612.names = i1616
  i1612.shadows = i1613[2]
  i1612.anisotropicFiltering = i1613[3]
  i1612.antiAliasing = i1613[4]
  i1612.lodBias = i1613[5]
  i1612.shadowCascades = i1613[6]
  i1612.shadowDistance = i1613[7]
  i1612.shadowmaskMode = i1613[8]
  i1612.shadowProjection = i1613[9]
  i1612.shadowResolution = i1613[10]
  i1612.softParticles = !!i1613[11]
  i1612.softVegetation = !!i1613[12]
  i1612.activeColorSpace = i1613[13]
  i1612.desiredColorSpace = i1613[14]
  i1612.masterTextureLimit = i1613[15]
  i1612.maxQueuedFrames = i1613[16]
  i1612.particleRaycastBudget = i1613[17]
  i1612.pixelLightCount = i1613[18]
  i1612.realtimeReflectionProbes = !!i1613[19]
  i1612.shadowCascade2Split = i1613[20]
  i1612.shadowCascade4Split = new pc.Vec3( i1613[21], i1613[22], i1613[23] )
  i1612.streamingMipmapsActive = !!i1613[24]
  i1612.vSyncCount = i1613[25]
  i1612.asyncUploadBufferSize = i1613[26]
  i1612.asyncUploadTimeSlice = i1613[27]
  i1612.billboardsFaceCameraPosition = !!i1613[28]
  i1612.shadowNearPlaneOffset = i1613[29]
  i1612.streamingMipmapsMemoryBudget = i1613[30]
  i1612.maximumLODLevel = i1613[31]
  i1612.streamingMipmapsAddAllCameras = !!i1613[32]
  i1612.streamingMipmapsMaxLevelReduction = i1613[33]
  i1612.streamingMipmapsRenderersPerFrame = i1613[34]
  i1612.resolutionScalingFixedDPIFactor = i1613[35]
  i1612.streamingMipmapsMaxFileIORequests = i1613[36]
  i1612.currentQualityLevel = i1613[37]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1623 = data
  i1622.weight = i1623[0]
  i1622.vertices = i1623[1]
  i1622.normals = i1623[2]
  i1622.tangents = i1623[3]
  return i1622
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

Deserializers.buildID = "97ae8398-6b37-4ae1-ae03-b5e6a1bae582";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


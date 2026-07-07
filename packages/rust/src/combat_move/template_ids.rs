//! Generated from Pokémon GO masterfile — group "combatMove" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum CombatMoveTemplateId {
    #[serde(rename = "COMBAT_V0013_MOVE_WRAP")]
    CombatV0013MoveWrap,
    #[serde(rename = "COMBAT_V0014_MOVE_HYPER_BEAM")]
    CombatV0014MoveHyperBeam,
    #[serde(rename = "COMBAT_V0016_MOVE_DARK_PULSE")]
    CombatV0016MoveDarkPulse,
    #[serde(rename = "COMBAT_V0018_MOVE_SLUDGE")]
    CombatV0018MoveSludge,
    #[serde(rename = "COMBAT_V0020_MOVE_VICE_GRIP")]
    CombatV0020MoveViceGrip,
    #[serde(rename = "COMBAT_V0021_MOVE_FLAME_WHEEL")]
    CombatV0021MoveFlameWheel,
    #[serde(rename = "COMBAT_V0022_MOVE_MEGAHORN")]
    CombatV0022MoveMegahorn,
    #[serde(rename = "COMBAT_V0024_MOVE_FLAMETHROWER")]
    CombatV0024MoveFlamethrower,
    #[serde(rename = "COMBAT_V0026_MOVE_DIG")]
    CombatV0026MoveDig,
    #[serde(rename = "COMBAT_V0028_MOVE_CROSS_CHOP")]
    CombatV0028MoveCrossChop,
    #[serde(rename = "COMBAT_V0030_MOVE_PSYBEAM")]
    CombatV0030MovePsybeam,
    #[serde(rename = "COMBAT_V0031_MOVE_EARTHQUAKE")]
    CombatV0031MoveEarthquake,
    #[serde(rename = "COMBAT_V0032_MOVE_STONE_EDGE")]
    CombatV0032MoveStoneEdge,
    #[serde(rename = "COMBAT_V0033_MOVE_ICE_PUNCH")]
    CombatV0033MoveIcePunch,
    #[serde(rename = "COMBAT_V0034_MOVE_HEART_STAMP")]
    CombatV0034MoveHeartStamp,
    #[serde(rename = "COMBAT_V0035_MOVE_DISCHARGE")]
    CombatV0035MoveDischarge,
    #[serde(rename = "COMBAT_V0036_MOVE_FLASH_CANNON")]
    CombatV0036MoveFlashCannon,
    #[serde(rename = "COMBAT_V0038_MOVE_DRILL_PECK")]
    CombatV0038MoveDrillPeck,
    #[serde(rename = "COMBAT_V0039_MOVE_ICE_BEAM")]
    CombatV0039MoveIceBeam,
    #[serde(rename = "COMBAT_V0040_MOVE_BLIZZARD")]
    CombatV0040MoveBlizzard,
    #[serde(rename = "COMBAT_V0042_MOVE_HEAT_WAVE")]
    CombatV0042MoveHeatWave,
    #[serde(rename = "COMBAT_V0045_MOVE_AERIAL_ACE")]
    CombatV0045MoveAerialAce,
    #[serde(rename = "COMBAT_V0046_MOVE_DRILL_RUN")]
    CombatV0046MoveDrillRun,
    #[serde(rename = "COMBAT_V0047_MOVE_PETAL_BLIZZARD")]
    CombatV0047MovePetalBlizzard,
    #[serde(rename = "COMBAT_V0048_MOVE_MEGA_DRAIN")]
    CombatV0048MoveMegaDrain,
    #[serde(rename = "COMBAT_V0049_MOVE_BUG_BUZZ")]
    CombatV0049MoveBugBuzz,
    #[serde(rename = "COMBAT_V0050_MOVE_POISON_FANG")]
    CombatV0050MovePoisonFang,
    #[serde(rename = "COMBAT_V0051_MOVE_NIGHT_SLASH")]
    CombatV0051MoveNightSlash,
    #[serde(rename = "COMBAT_V0053_MOVE_BUBBLE_BEAM")]
    CombatV0053MoveBubbleBeam,
    #[serde(rename = "COMBAT_V0054_MOVE_SUBMISSION")]
    CombatV0054MoveSubmission,
    #[serde(rename = "COMBAT_V0056_MOVE_LOW_SWEEP")]
    CombatV0056MoveLowSweep,
    #[serde(rename = "COMBAT_V0057_MOVE_AQUA_JET")]
    CombatV0057MoveAquaJet,
    #[serde(rename = "COMBAT_V0058_MOVE_AQUA_TAIL")]
    CombatV0058MoveAquaTail,
    #[serde(rename = "COMBAT_V0059_MOVE_SEED_BOMB")]
    CombatV0059MoveSeedBomb,
    #[serde(rename = "COMBAT_V0060_MOVE_PSYSHOCK")]
    CombatV0060MovePsyshock,
    #[serde(rename = "COMBAT_V0062_MOVE_ANCIENT_POWER")]
    CombatV0062MoveAncientPower,
    #[serde(rename = "COMBAT_V0063_MOVE_ROCK_TOMB")]
    CombatV0063MoveRockTomb,
    #[serde(rename = "COMBAT_V0064_MOVE_ROCK_SLIDE")]
    CombatV0064MoveRockSlide,
    #[serde(rename = "COMBAT_V0065_MOVE_POWER_GEM")]
    CombatV0065MovePowerGem,
    #[serde(rename = "COMBAT_V0066_MOVE_SHADOW_SNEAK")]
    CombatV0066MoveShadowSneak,
    #[serde(rename = "COMBAT_V0067_MOVE_SHADOW_PUNCH")]
    CombatV0067MoveShadowPunch,
    #[serde(rename = "COMBAT_V0069_MOVE_OMINOUS_WIND")]
    CombatV0069MoveOminousWind,
    #[serde(rename = "COMBAT_V0070_MOVE_SHADOW_BALL")]
    CombatV0070MoveShadowBall,
    #[serde(rename = "COMBAT_V0072_MOVE_MAGNET_BOMB")]
    CombatV0072MoveMagnetBomb,
    #[serde(rename = "COMBAT_V0074_MOVE_IRON_HEAD")]
    CombatV0074MoveIronHead,
    #[serde(rename = "COMBAT_V0075_MOVE_PARABOLIC_CHARGE")]
    CombatV0075MoveParabolicCharge,
    #[serde(rename = "COMBAT_V0077_MOVE_THUNDER_PUNCH")]
    CombatV0077MoveThunderPunch,
    #[serde(rename = "COMBAT_V0078_MOVE_THUNDER")]
    CombatV0078MoveThunder,
    #[serde(rename = "COMBAT_V0079_MOVE_THUNDERBOLT")]
    CombatV0079MoveThunderbolt,
    #[serde(rename = "COMBAT_V0080_MOVE_TWISTER")]
    CombatV0080MoveTwister,
    #[serde(rename = "COMBAT_V0082_MOVE_DRAGON_PULSE")]
    CombatV0082MoveDragonPulse,
    #[serde(rename = "COMBAT_V0083_MOVE_DRAGON_CLAW")]
    CombatV0083MoveDragonClaw,
    #[serde(rename = "COMBAT_V0084_MOVE_DISARMING_VOICE")]
    CombatV0084MoveDisarmingVoice,
    #[serde(rename = "COMBAT_V0085_MOVE_DRAINING_KISS")]
    CombatV0085MoveDrainingKiss,
    #[serde(rename = "COMBAT_V0086_MOVE_DAZZLING_GLEAM")]
    CombatV0086MoveDazzlingGleam,
    #[serde(rename = "COMBAT_V0087_MOVE_MOONBLAST")]
    CombatV0087MoveMoonblast,
    #[serde(rename = "COMBAT_V0088_MOVE_PLAY_ROUGH")]
    CombatV0088MovePlayRough,
    #[serde(rename = "COMBAT_V0089_MOVE_CROSS_POISON")]
    CombatV0089MoveCrossPoison,
    #[serde(rename = "COMBAT_V0090_MOVE_SLUDGE_BOMB")]
    CombatV0090MoveSludgeBomb,
    #[serde(rename = "COMBAT_V0091_MOVE_SLUDGE_WAVE")]
    CombatV0091MoveSludgeWave,
    #[serde(rename = "COMBAT_V0092_MOVE_GUNK_SHOT")]
    CombatV0092MoveGunkShot,
    #[serde(rename = "COMBAT_V0094_MOVE_BONE_CLUB")]
    CombatV0094MoveBoneClub,
    #[serde(rename = "COMBAT_V0095_MOVE_BULLDOZE")]
    CombatV0095MoveBulldoze,
    #[serde(rename = "COMBAT_V0096_MOVE_MUD_BOMB")]
    CombatV0096MoveMudBomb,
    #[serde(rename = "COMBAT_V0099_MOVE_SIGNAL_BEAM")]
    CombatV0099MoveSignalBeam,
    #[serde(rename = "COMBAT_V0100_MOVE_X_SCISSOR")]
    CombatV0100MoveXScissor,
    #[serde(rename = "COMBAT_V0101_MOVE_FLAME_CHARGE")]
    CombatV0101MoveFlameCharge,
    #[serde(rename = "COMBAT_V0102_MOVE_FLAME_BURST")]
    CombatV0102MoveFlameBurst,
    #[serde(rename = "COMBAT_V0103_MOVE_FIRE_BLAST")]
    CombatV0103MoveFireBlast,
    #[serde(rename = "COMBAT_V0104_MOVE_BRINE")]
    CombatV0104MoveBrine,
    #[serde(rename = "COMBAT_V0105_MOVE_WATER_PULSE")]
    CombatV0105MoveWaterPulse,
    #[serde(rename = "COMBAT_V0106_MOVE_SCALD")]
    CombatV0106MoveScald,
    #[serde(rename = "COMBAT_V0107_MOVE_HYDRO_PUMP")]
    CombatV0107MoveHydroPump,
    #[serde(rename = "COMBAT_V0108_MOVE_PSYCHIC")]
    CombatV0108MovePsychic,
    #[serde(rename = "COMBAT_V0109_MOVE_PSYSTRIKE")]
    CombatV0109MovePsystrike,
    #[serde(rename = "COMBAT_V0111_MOVE_ICY_WIND")]
    CombatV0111MoveIcyWind,
    #[serde(rename = "COMBAT_V0114_MOVE_GIGA_DRAIN")]
    CombatV0114MoveGigaDrain,
    #[serde(rename = "COMBAT_V0115_MOVE_FIRE_PUNCH")]
    CombatV0115MoveFirePunch,
    #[serde(rename = "COMBAT_V0116_MOVE_SOLAR_BEAM")]
    CombatV0116MoveSolarBeam,
    #[serde(rename = "COMBAT_V0117_MOVE_LEAF_BLADE")]
    CombatV0117MoveLeafBlade,
    #[serde(rename = "COMBAT_V0118_MOVE_POWER_WHIP")]
    CombatV0118MovePowerWhip,
    #[serde(rename = "COMBAT_V0121_MOVE_AIR_CUTTER")]
    CombatV0121MoveAirCutter,
    #[serde(rename = "COMBAT_V0122_MOVE_HURRICANE")]
    CombatV0122MoveHurricane,
    #[serde(rename = "COMBAT_V0123_MOVE_BRICK_BREAK")]
    CombatV0123MoveBrickBreak,
    #[serde(rename = "COMBAT_V0125_MOVE_SWIFT")]
    CombatV0125MoveSwift,
    #[serde(rename = "COMBAT_V0126_MOVE_HORN_ATTACK")]
    CombatV0126MoveHornAttack,
    #[serde(rename = "COMBAT_V0127_MOVE_STOMP")]
    CombatV0127MoveStomp,
    #[serde(rename = "COMBAT_V0129_MOVE_HYPER_FANG")]
    CombatV0129MoveHyperFang,
    #[serde(rename = "COMBAT_V0131_MOVE_BODY_SLAM")]
    CombatV0131MoveBodySlam,
    #[serde(rename = "COMBAT_V0132_MOVE_REST")]
    CombatV0132MoveRest,
    #[serde(rename = "COMBAT_V0133_MOVE_STRUGGLE")]
    CombatV0133MoveStruggle,
    #[serde(rename = "COMBAT_V0134_MOVE_SCALD_BLASTOISE")]
    CombatV0134MoveScaldBlastoise,
    #[serde(rename = "COMBAT_V0135_MOVE_HYDRO_PUMP_BLASTOISE")]
    CombatV0135MoveHydroPumpBlastoise,
    #[serde(rename = "COMBAT_V0136_MOVE_WRAP_GREEN")]
    CombatV0136MoveWrapGreen,
    #[serde(rename = "COMBAT_V0137_MOVE_WRAP_PINK")]
    CombatV0137MoveWrapPink,
    #[serde(rename = "COMBAT_V0200_MOVE_FURY_CUTTER_FAST")]
    CombatV0200MoveFuryCutterFast,
    #[serde(rename = "COMBAT_V0201_MOVE_BUG_BITE_FAST")]
    CombatV0201MoveBugBiteFast,
    #[serde(rename = "COMBAT_V0202_MOVE_BITE_FAST")]
    CombatV0202MoveBiteFast,
    #[serde(rename = "COMBAT_V0203_MOVE_SUCKER_PUNCH_FAST")]
    CombatV0203MoveSuckerPunchFast,
    #[serde(rename = "COMBAT_V0204_MOVE_DRAGON_BREATH_FAST")]
    CombatV0204MoveDragonBreathFast,
    #[serde(rename = "COMBAT_V0205_MOVE_THUNDER_SHOCK_FAST")]
    CombatV0205MoveThunderShockFast,
    #[serde(rename = "COMBAT_V0206_MOVE_SPARK_FAST")]
    CombatV0206MoveSparkFast,
    #[serde(rename = "COMBAT_V0207_MOVE_LOW_KICK_FAST")]
    CombatV0207MoveLowKickFast,
    #[serde(rename = "COMBAT_V0208_MOVE_KARATE_CHOP_FAST")]
    CombatV0208MoveKarateChopFast,
    #[serde(rename = "COMBAT_V0209_MOVE_EMBER_FAST")]
    CombatV0209MoveEmberFast,
    #[serde(rename = "COMBAT_V0210_MOVE_WING_ATTACK_FAST")]
    CombatV0210MoveWingAttackFast,
    #[serde(rename = "COMBAT_V0211_MOVE_PECK_FAST")]
    CombatV0211MovePeckFast,
    #[serde(rename = "COMBAT_V0212_MOVE_LICK_FAST")]
    CombatV0212MoveLickFast,
    #[serde(rename = "COMBAT_V0213_MOVE_SHADOW_CLAW_FAST")]
    CombatV0213MoveShadowClawFast,
    #[serde(rename = "COMBAT_V0214_MOVE_VINE_WHIP_FAST")]
    CombatV0214MoveVineWhipFast,
    #[serde(rename = "COMBAT_V0215_MOVE_RAZOR_LEAF_FAST")]
    CombatV0215MoveRazorLeafFast,
    #[serde(rename = "COMBAT_V0216_MOVE_MUD_SHOT_FAST")]
    CombatV0216MoveMudShotFast,
    #[serde(rename = "COMBAT_V0217_MOVE_ICE_SHARD_FAST")]
    CombatV0217MoveIceShardFast,
    #[serde(rename = "COMBAT_V0218_MOVE_FROST_BREATH_FAST")]
    CombatV0218MoveFrostBreathFast,
    #[serde(rename = "COMBAT_V0219_MOVE_QUICK_ATTACK_FAST")]
    CombatV0219MoveQuickAttackFast,
    #[serde(rename = "COMBAT_V0220_MOVE_SCRATCH_FAST")]
    CombatV0220MoveScratchFast,
    #[serde(rename = "COMBAT_V0221_MOVE_TACKLE_FAST")]
    CombatV0221MoveTackleFast,
    #[serde(rename = "COMBAT_V0222_MOVE_POUND_FAST")]
    CombatV0222MovePoundFast,
    #[serde(rename = "COMBAT_V0223_MOVE_CUT_FAST")]
    CombatV0223MoveCutFast,
    #[serde(rename = "COMBAT_V0224_MOVE_POISON_JAB_FAST")]
    CombatV0224MovePoisonJabFast,
    #[serde(rename = "COMBAT_V0225_MOVE_ACID_FAST")]
    CombatV0225MoveAcidFast,
    #[serde(rename = "COMBAT_V0226_MOVE_PSYCHO_CUT_FAST")]
    CombatV0226MovePsychoCutFast,
    #[serde(rename = "COMBAT_V0227_MOVE_ROCK_THROW_FAST")]
    CombatV0227MoveRockThrowFast,
    #[serde(rename = "COMBAT_V0228_MOVE_METAL_CLAW_FAST")]
    CombatV0228MoveMetalClawFast,
    #[serde(rename = "COMBAT_V0229_MOVE_BULLET_PUNCH_FAST")]
    CombatV0229MoveBulletPunchFast,
    #[serde(rename = "COMBAT_V0230_MOVE_WATER_GUN_FAST")]
    CombatV0230MoveWaterGunFast,
    #[serde(rename = "COMBAT_V0231_MOVE_SPLASH_FAST")]
    CombatV0231MoveSplashFast,
    #[serde(rename = "COMBAT_V0232_MOVE_WATER_GUN_FAST_BLASTOISE")]
    CombatV0232MoveWaterGunFastBlastoise,
    #[serde(rename = "COMBAT_V0233_MOVE_MUD_SLAP_FAST")]
    CombatV0233MoveMudSlapFast,
    #[serde(rename = "COMBAT_V0234_MOVE_ZEN_HEADBUTT_FAST")]
    CombatV0234MoveZenHeadbuttFast,
    #[serde(rename = "COMBAT_V0235_MOVE_CONFUSION_FAST")]
    CombatV0235MoveConfusionFast,
    #[serde(rename = "COMBAT_V0236_MOVE_POISON_STING_FAST")]
    CombatV0236MovePoisonStingFast,
    #[serde(rename = "COMBAT_V0237_MOVE_BUBBLE_FAST")]
    CombatV0237MoveBubbleFast,
    #[serde(rename = "COMBAT_V0238_MOVE_FEINT_ATTACK_FAST")]
    CombatV0238MoveFeintAttackFast,
    #[serde(rename = "COMBAT_V0239_MOVE_STEEL_WING_FAST")]
    CombatV0239MoveSteelWingFast,
    #[serde(rename = "COMBAT_V0240_MOVE_FIRE_FANG_FAST")]
    CombatV0240MoveFireFangFast,
    #[serde(rename = "COMBAT_V0241_MOVE_ROCK_SMASH_FAST")]
    CombatV0241MoveRockSmashFast,
    #[serde(rename = "COMBAT_V0242_MOVE_TRANSFORM_FAST")]
    CombatV0242MoveTransformFast,
    #[serde(rename = "COMBAT_V0243_MOVE_COUNTER_FAST")]
    CombatV0243MoveCounterFast,
    #[serde(rename = "COMBAT_V0244_MOVE_POWDER_SNOW_FAST")]
    CombatV0244MovePowderSnowFast,
    #[serde(rename = "COMBAT_V0245_MOVE_CLOSE_COMBAT")]
    CombatV0245MoveCloseCombat,
    #[serde(rename = "COMBAT_V0246_MOVE_DYNAMIC_PUNCH")]
    CombatV0246MoveDynamicPunch,
    #[serde(rename = "COMBAT_V0247_MOVE_FOCUS_BLAST")]
    CombatV0247MoveFocusBlast,
    #[serde(rename = "COMBAT_V0248_MOVE_AURORA_BEAM")]
    CombatV0248MoveAuroraBeam,
    #[serde(rename = "COMBAT_V0249_MOVE_CHARGE_BEAM_FAST")]
    CombatV0249MoveChargeBeamFast,
    #[serde(rename = "COMBAT_V0250_MOVE_VOLT_SWITCH_FAST")]
    CombatV0250MoveVoltSwitchFast,
    #[serde(rename = "COMBAT_V0251_MOVE_WILD_CHARGE")]
    CombatV0251MoveWildCharge,
    #[serde(rename = "COMBAT_V0252_MOVE_ZAP_CANNON")]
    CombatV0252MoveZapCannon,
    #[serde(rename = "COMBAT_V0253_MOVE_DRAGON_TAIL_FAST")]
    CombatV0253MoveDragonTailFast,
    #[serde(rename = "COMBAT_V0254_MOVE_AVALANCHE")]
    CombatV0254MoveAvalanche,
    #[serde(rename = "COMBAT_V0255_MOVE_AIR_SLASH_FAST")]
    CombatV0255MoveAirSlashFast,
    #[serde(rename = "COMBAT_V0256_MOVE_BRAVE_BIRD")]
    CombatV0256MoveBraveBird,
    #[serde(rename = "COMBAT_V0257_MOVE_SKY_ATTACK")]
    CombatV0257MoveSkyAttack,
    #[serde(rename = "COMBAT_V0258_MOVE_SAND_TOMB")]
    CombatV0258MoveSandTomb,
    #[serde(rename = "COMBAT_V0259_MOVE_ROCK_BLAST")]
    CombatV0259MoveRockBlast,
    #[serde(rename = "COMBAT_V0260_MOVE_INFESTATION_FAST")]
    CombatV0260MoveInfestationFast,
    #[serde(rename = "COMBAT_V0261_MOVE_STRUGGLE_BUG_FAST")]
    CombatV0261MoveStruggleBugFast,
    #[serde(rename = "COMBAT_V0262_MOVE_SILVER_WIND")]
    CombatV0262MoveSilverWind,
    #[serde(rename = "COMBAT_V0263_MOVE_ASTONISH_FAST")]
    CombatV0263MoveAstonishFast,
    #[serde(rename = "COMBAT_V0264_MOVE_HEX_FAST")]
    CombatV0264MoveHexFast,
    #[serde(rename = "COMBAT_V0265_MOVE_NIGHT_SHADE")]
    CombatV0265MoveNightShade,
    #[serde(rename = "COMBAT_V0266_MOVE_IRON_TAIL_FAST")]
    CombatV0266MoveIronTailFast,
    #[serde(rename = "COMBAT_V0267_MOVE_GYRO_BALL")]
    CombatV0267MoveGyroBall,
    #[serde(rename = "COMBAT_V0268_MOVE_HEAVY_SLAM")]
    CombatV0268MoveHeavySlam,
    #[serde(rename = "COMBAT_V0269_MOVE_FIRE_SPIN_FAST")]
    CombatV0269MoveFireSpinFast,
    #[serde(rename = "COMBAT_V0270_MOVE_OVERHEAT")]
    CombatV0270MoveOverheat,
    #[serde(rename = "COMBAT_V0271_MOVE_BULLET_SEED_FAST")]
    CombatV0271MoveBulletSeedFast,
    #[serde(rename = "COMBAT_V0272_MOVE_GRASS_KNOT")]
    CombatV0272MoveGrassKnot,
    #[serde(rename = "COMBAT_V0273_MOVE_ENERGY_BALL")]
    CombatV0273MoveEnergyBall,
    #[serde(rename = "COMBAT_V0274_MOVE_EXTRASENSORY_FAST")]
    CombatV0274MoveExtrasensoryFast,
    #[serde(rename = "COMBAT_V0275_MOVE_FUTURESIGHT")]
    CombatV0275MoveFuturesight,
    #[serde(rename = "COMBAT_V0276_MOVE_MIRROR_COAT")]
    CombatV0276MoveMirrorCoat,
    #[serde(rename = "COMBAT_V0277_MOVE_OUTRAGE")]
    CombatV0277MoveOutrage,
    #[serde(rename = "COMBAT_V0278_MOVE_SNARL_FAST")]
    CombatV0278MoveSnarlFast,
    #[serde(rename = "COMBAT_V0279_MOVE_CRUNCH")]
    CombatV0279MoveCrunch,
    #[serde(rename = "COMBAT_V0280_MOVE_FOUL_PLAY")]
    CombatV0280MoveFoulPlay,
    #[serde(rename = "COMBAT_V0281_MOVE_HIDDEN_POWER_FAST")]
    CombatV0281MoveHiddenPowerFast,
    #[serde(rename = "COMBAT_V0282_MOVE_TAKE_DOWN_FAST")]
    CombatV0282MoveTakeDownFast,
    #[serde(rename = "COMBAT_V0283_MOVE_WATERFALL_FAST")]
    CombatV0283MoveWaterfallFast,
    #[serde(rename = "COMBAT_V0284_MOVE_SURF")]
    CombatV0284MoveSurf,
    #[serde(rename = "COMBAT_V0285_MOVE_DRACO_METEOR")]
    CombatV0285MoveDracoMeteor,
    #[serde(rename = "COMBAT_V0286_MOVE_DOOM_DESIRE")]
    CombatV0286MoveDoomDesire,
    #[serde(rename = "COMBAT_V0287_MOVE_YAWN_FAST")]
    CombatV0287MoveYawnFast,
    #[serde(rename = "COMBAT_V0288_MOVE_PSYCHO_BOOST")]
    CombatV0288MovePsychoBoost,
    #[serde(rename = "COMBAT_V0289_MOVE_ORIGIN_PULSE")]
    CombatV0289MoveOriginPulse,
    #[serde(rename = "COMBAT_V0290_MOVE_PRECIPICE_BLADES")]
    CombatV0290MovePrecipiceBlades,
    #[serde(rename = "COMBAT_V0291_MOVE_PRESENT_FAST")]
    CombatV0291MovePresentFast,
    #[serde(rename = "COMBAT_V0292_MOVE_WEATHER_BALL_FIRE")]
    CombatV0292MoveWeatherBallFire,
    #[serde(rename = "COMBAT_V0293_MOVE_WEATHER_BALL_ICE")]
    CombatV0293MoveWeatherBallIce,
    #[serde(rename = "COMBAT_V0294_MOVE_WEATHER_BALL_ROCK")]
    CombatV0294MoveWeatherBallRock,
    #[serde(rename = "COMBAT_V0295_MOVE_WEATHER_BALL_WATER")]
    CombatV0295MoveWeatherBallWater,
    #[serde(rename = "COMBAT_V0296_MOVE_FRENZY_PLANT")]
    CombatV0296MoveFrenzyPlant,
    #[serde(rename = "COMBAT_V0297_MOVE_SMACK_DOWN_FAST")]
    CombatV0297MoveSmackDownFast,
    #[serde(rename = "COMBAT_V0298_MOVE_BLAST_BURN")]
    CombatV0298MoveBlastBurn,
    #[serde(rename = "COMBAT_V0299_MOVE_HYDRO_CANNON")]
    CombatV0299MoveHydroCannon,
    #[serde(rename = "COMBAT_V0300_MOVE_LAST_RESORT")]
    CombatV0300MoveLastResort,
    #[serde(rename = "COMBAT_V0301_MOVE_METEOR_MASH")]
    CombatV0301MoveMeteorMash,
    #[serde(rename = "COMBAT_V0302_MOVE_SKULL_BASH")]
    CombatV0302MoveSkullBash,
    #[serde(rename = "COMBAT_V0303_MOVE_ACID_SPRAY")]
    CombatV0303MoveAcidSpray,
    #[serde(rename = "COMBAT_V0304_MOVE_EARTH_POWER")]
    CombatV0304MoveEarthPower,
    #[serde(rename = "COMBAT_V0305_MOVE_CRABHAMMER")]
    CombatV0305MoveCrabhammer,
    #[serde(rename = "COMBAT_V0306_MOVE_LUNGE")]
    CombatV0306MoveLunge,
    #[serde(rename = "COMBAT_V0308_MOVE_OCTAZOOKA")]
    CombatV0308MoveOctazooka,
    #[serde(rename = "COMBAT_V0309_MOVE_MIRROR_SHOT")]
    CombatV0309MoveMirrorShot,
    #[serde(rename = "COMBAT_V0310_MOVE_SUPER_POWER")]
    CombatV0310MoveSuperPower,
    #[serde(rename = "COMBAT_V0311_MOVE_FELL_STINGER")]
    CombatV0311MoveFellStinger,
    #[serde(rename = "COMBAT_V0312_MOVE_LEAF_TORNADO")]
    CombatV0312MoveLeafTornado,
    #[serde(rename = "COMBAT_V0314_MOVE_DRAIN_PUNCH")]
    CombatV0314MoveDrainPunch,
    #[serde(rename = "COMBAT_V0315_MOVE_SHADOW_BONE")]
    CombatV0315MoveShadowBone,
    #[serde(rename = "COMBAT_V0316_MOVE_MUDDY_WATER")]
    CombatV0316MoveMuddyWater,
    #[serde(rename = "COMBAT_V0317_MOVE_BLAZE_KICK")]
    CombatV0317MoveBlazeKick,
    #[serde(rename = "COMBAT_V0318_MOVE_RAZOR_SHELL")]
    CombatV0318MoveRazorShell,
    #[serde(rename = "COMBAT_V0319_MOVE_POWER_UP_PUNCH")]
    CombatV0319MovePowerUpPunch,
    #[serde(rename = "COMBAT_V0320_MOVE_CHARM_FAST")]
    CombatV0320MoveCharmFast,
    #[serde(rename = "COMBAT_V0321_MOVE_GIGA_IMPACT")]
    CombatV0321MoveGigaImpact,
    #[serde(rename = "COMBAT_V0322_MOVE_FRUSTRATION")]
    CombatV0322MoveFrustration,
    #[serde(rename = "COMBAT_V0323_MOVE_RETURN")]
    CombatV0323MoveReturn,
    #[serde(rename = "COMBAT_V0324_MOVE_SYNCHRONOISE")]
    CombatV0324MoveSynchronoise,
    #[serde(rename = "COMBAT_V0325_MOVE_LOCK_ON_FAST")]
    CombatV0325MoveLockOnFast,
    #[serde(rename = "COMBAT_V0326_MOVE_THUNDER_FANG_FAST")]
    CombatV0326MoveThunderFangFast,
    #[serde(rename = "COMBAT_V0327_MOVE_ICE_FANG_FAST")]
    CombatV0327MoveIceFangFast,
    #[serde(rename = "COMBAT_V0330_MOVE_SACRED_SWORD")]
    CombatV0330MoveSacredSword,
    #[serde(rename = "COMBAT_V0331_MOVE_FLYING_PRESS")]
    CombatV0331MoveFlyingPress,
    #[serde(rename = "COMBAT_V0332_MOVE_AURA_SPHERE")]
    CombatV0332MoveAuraSphere,
    #[serde(rename = "COMBAT_V0333_MOVE_PAYBACK")]
    CombatV0333MovePayback,
    #[serde(rename = "COMBAT_V0334_MOVE_ROCK_WRECKER")]
    CombatV0334MoveRockWrecker,
    #[serde(rename = "COMBAT_V0335_MOVE_AEROBLAST")]
    CombatV0335MoveAeroblast,
    #[serde(rename = "COMBAT_V0336_MOVE_TECHNO_BLAST_NORMAL")]
    CombatV0336MoveTechnoBlastNormal,
    #[serde(rename = "COMBAT_V0337_MOVE_TECHNO_BLAST_BURN")]
    CombatV0337MoveTechnoBlastBurn,
    #[serde(rename = "COMBAT_V0338_MOVE_TECHNO_BLAST_CHILL")]
    CombatV0338MoveTechnoBlastChill,
    #[serde(rename = "COMBAT_V0339_MOVE_TECHNO_BLAST_WATER")]
    CombatV0339MoveTechnoBlastWater,
    #[serde(rename = "COMBAT_V0340_MOVE_TECHNO_BLAST_SHOCK")]
    CombatV0340MoveTechnoBlastShock,
    #[serde(rename = "COMBAT_V0341_MOVE_FLY")]
    CombatV0341MoveFly,
    #[serde(rename = "COMBAT_V0342_MOVE_V_CREATE")]
    CombatV0342MoveVCreate,
    #[serde(rename = "COMBAT_V0343_MOVE_LEAF_STORM")]
    CombatV0343MoveLeafStorm,
    #[serde(rename = "COMBAT_V0344_MOVE_TRI_ATTACK")]
    CombatV0344MoveTriAttack,
    #[serde(rename = "COMBAT_V0345_MOVE_GUST_FAST")]
    CombatV0345MoveGustFast,
    #[serde(rename = "COMBAT_V0346_MOVE_INCINERATE_FAST")]
    CombatV0346MoveIncinerateFast,
    #[serde(rename = "COMBAT_V0348_MOVE_FEATHER_DANCE")]
    CombatV0348MoveFeatherDance,
    #[serde(rename = "COMBAT_V0350_MOVE_FAIRY_WIND_FAST")]
    CombatV0350MoveFairyWindFast,
    #[serde(rename = "COMBAT_V0352_MOVE_WEATHER_BALL_NORMAL")]
    CombatV0352MoveWeatherBallNormal,
    #[serde(rename = "COMBAT_V0353_MOVE_PSYCHIC_FANGS")]
    CombatV0353MovePsychicFangs,
    #[serde(rename = "COMBAT_V0356_MOVE_DOUBLE_KICK_FAST")]
    CombatV0356MoveDoubleKickFast,
    #[serde(rename = "COMBAT_V0357_MOVE_MAGICAL_LEAF_FAST")]
    CombatV0357MoveMagicalLeafFast,
    #[serde(rename = "COMBAT_V0358_MOVE_SACRED_FIRE")]
    CombatV0358MoveSacredFire,
    #[serde(rename = "COMBAT_V0359_MOVE_ICICLE_SPEAR")]
    CombatV0359MoveIcicleSpear,
    #[serde(rename = "COMBAT_V0360_MOVE_AEROBLAST_PLUS")]
    CombatV0360MoveAeroblastPlus,
    #[serde(rename = "COMBAT_V0361_MOVE_AEROBLAST_PLUS_PLUS")]
    CombatV0361MoveAeroblastPlusPlus,
    #[serde(rename = "COMBAT_V0362_MOVE_SACRED_FIRE_PLUS")]
    CombatV0362MoveSacredFirePlus,
    #[serde(rename = "COMBAT_V0363_MOVE_SACRED_FIRE_PLUS_PLUS")]
    CombatV0363MoveSacredFirePlusPlus,
    #[serde(rename = "COMBAT_V0364_MOVE_ACROBATICS")]
    CombatV0364MoveAcrobatics,
    #[serde(rename = "COMBAT_V0365_MOVE_LUSTER_PURGE")]
    CombatV0365MoveLusterPurge,
    #[serde(rename = "COMBAT_V0366_MOVE_MIST_BALL")]
    CombatV0366MoveMistBall,
    #[serde(rename = "COMBAT_V0367_MOVE_BRUTAL_SWING")]
    CombatV0367MoveBrutalSwing,
    #[serde(rename = "COMBAT_V0368_MOVE_ROLLOUT_FAST")]
    CombatV0368MoveRolloutFast,
    #[serde(rename = "COMBAT_V0369_MOVE_SEED_FLARE")]
    CombatV0369MoveSeedFlare,
    #[serde(rename = "COMBAT_V0370_MOVE_OBSTRUCT")]
    CombatV0370MoveObstruct,
    #[serde(rename = "COMBAT_V0371_MOVE_SHADOW_FORCE")]
    CombatV0371MoveShadowForce,
    #[serde(rename = "COMBAT_V0372_MOVE_METEOR_BEAM")]
    CombatV0372MoveMeteorBeam,
    #[serde(rename = "COMBAT_V0373_MOVE_WATER_SHURIKEN_FAST")]
    CombatV0373MoveWaterShurikenFast,
    #[serde(rename = "COMBAT_V0374_MOVE_FUSION_BOLT")]
    CombatV0374MoveFusionBolt,
    #[serde(rename = "COMBAT_V0375_MOVE_FUSION_FLARE")]
    CombatV0375MoveFusionFlare,
    #[serde(rename = "COMBAT_V0376_MOVE_POLTERGEIST")]
    CombatV0376MovePoltergeist,
    #[serde(rename = "COMBAT_V0377_MOVE_HIGH_HORSEPOWER")]
    CombatV0377MoveHighHorsepower,
    #[serde(rename = "COMBAT_V0378_MOVE_GLACIATE")]
    CombatV0378MoveGlaciate,
    #[serde(rename = "COMBAT_V0379_MOVE_BREAKING_SWIPE")]
    CombatV0379MoveBreakingSwipe,
    #[serde(rename = "COMBAT_V0380_MOVE_BOOMBURST")]
    CombatV0380MoveBoomburst,
    #[serde(rename = "COMBAT_V0381_MOVE_DOUBLE_IRON_BASH")]
    CombatV0381MoveDoubleIronBash,
    #[serde(rename = "COMBAT_V0382_MOVE_MYSTICAL_FIRE")]
    CombatV0382MoveMysticalFire,
    #[serde(rename = "COMBAT_V0383_MOVE_LIQUIDATION")]
    CombatV0383MoveLiquidation,
    #[serde(rename = "COMBAT_V0384_MOVE_DRAGON_ASCENT")]
    CombatV0384MoveDragonAscent,
    #[serde(rename = "COMBAT_V0385_MOVE_LEAFAGE_FAST")]
    CombatV0385MoveLeafageFast,
    #[serde(rename = "COMBAT_V0386_MOVE_MAGMA_STORM")]
    CombatV0386MoveMagmaStorm,
    #[serde(rename = "COMBAT_V0387_MOVE_GEOMANCY_FAST")]
    CombatV0387MoveGeomancyFast,
    #[serde(rename = "COMBAT_V0388_MOVE_SPACIAL_REND")]
    CombatV0388MoveSpacialRend,
    #[serde(rename = "COMBAT_V0389_MOVE_OBLIVION_WING")]
    CombatV0389MoveOblivionWing,
    #[serde(rename = "COMBAT_V0390_MOVE_NATURES_MADNESS")]
    CombatV0390MoveNaturesMadness,
    #[serde(rename = "COMBAT_V0391_MOVE_TRIPLE_AXEL")]
    CombatV0391MoveTripleAxel,
    #[serde(rename = "COMBAT_V0392_MOVE_TRAILBLAZE")]
    CombatV0392MoveTrailblaze,
    #[serde(rename = "COMBAT_V0393_MOVE_SCORCHING_SANDS")]
    CombatV0393MoveScorchingSands,
    #[serde(rename = "COMBAT_V0394_MOVE_ROAR_OF_TIME")]
    CombatV0394MoveRoarOfTime,
    #[serde(rename = "COMBAT_V0395_MOVE_BLEAKWIND_STORM")]
    CombatV0395MoveBleakwindStorm,
    #[serde(rename = "COMBAT_V0396_MOVE_SANDSEAR_STORM")]
    CombatV0396MoveSandsearStorm,
    #[serde(rename = "COMBAT_V0397_MOVE_WILDBOLT_STORM")]
    CombatV0397MoveWildboltStorm,
    #[serde(rename = "COMBAT_V0398_MOVE_SPIRIT_SHACKLE")]
    CombatV0398MoveSpiritShackle,
    #[serde(rename = "COMBAT_V0399_MOVE_VOLT_TACKLE")]
    CombatV0399MoveVoltTackle,
    #[serde(rename = "COMBAT_V0400_MOVE_DARKEST_LARIAT")]
    CombatV0400MoveDarkestLariat,
    #[serde(rename = "COMBAT_V0401_MOVE_PSYWAVE_FAST")]
    CombatV0401MovePsywaveFast,
    #[serde(rename = "COMBAT_V0402_MOVE_METAL_SOUND_FAST")]
    CombatV0402MoveMetalSoundFast,
    #[serde(rename = "COMBAT_V0403_MOVE_SAND_ATTACK_FAST")]
    CombatV0403MoveSandAttackFast,
    #[serde(rename = "COMBAT_V0404_MOVE_SUNSTEEL_STRIKE")]
    CombatV0404MoveSunsteelStrike,
    #[serde(rename = "COMBAT_V0405_MOVE_MOONGEIST_BEAM")]
    CombatV0405MoveMoongeistBeam,
    #[serde(rename = "COMBAT_V0406_MOVE_AURA_WHEEL_ELECTRIC")]
    CombatV0406MoveAuraWheelElectric,
    #[serde(rename = "COMBAT_V0407_MOVE_AURA_WHEEL_DARK")]
    CombatV0407MoveAuraWheelDark,
    #[serde(rename = "COMBAT_V0408_MOVE_HIGH_JUMP_KICK")]
    CombatV0408MoveHighJumpKick,
    #[serde(rename = "COMBAT_V0462_MOVE_FORCE_PALM_FAST")]
    CombatV0462MoveForcePalmFast,
    #[serde(rename = "COMBAT_V0463_MOVE_SPARKLING_ARIA")]
    CombatV0463MoveSparklingAria,
    #[serde(rename = "COMBAT_V0464_MOVE_RAGE_FIST")]
    CombatV0464MoveRageFist,
    #[serde(rename = "COMBAT_V0465_MOVE_FLOWER_TRICK")]
    CombatV0465MoveFlowerTrick,
    #[serde(rename = "COMBAT_V0466_MOVE_FREEZE_SHOCK")]
    CombatV0466MoveFreezeShock,
    #[serde(rename = "COMBAT_V0467_MOVE_ICE_BURN")]
    CombatV0467MoveIceBurn,
    #[serde(rename = "COMBAT_V0468_MOVE_TORCH_SONG")]
    CombatV0468MoveTorchSong,
    #[serde(rename = "COMBAT_V0469_MOVE_BEHEMOTH_BLADE")]
    CombatV0469MoveBehemothBlade,
    #[serde(rename = "COMBAT_V0470_MOVE_BEHEMOTH_BASH")]
    CombatV0470MoveBehemothBash,
    #[serde(rename = "COMBAT_V0471_MOVE_UPPER_HAND")]
    CombatV0471MoveUpperHand,
    #[serde(rename = "COMBAT_V0472_MOVE_THUNDER_CAGE")]
    CombatV0472MoveThunderCage,
    #[serde(rename = "COMBAT_V0482_MOVE_DYNAMAX_CANNON")]
    CombatV0482MoveDynamaxCannon,
    #[serde(rename = "COMBAT_V0484_MOVE_CLANGING_SCALES")]
    CombatV0484MoveClangingScales,
    #[serde(rename = "COMBAT_V0485_MOVE_CRUSH_GRIP")]
    CombatV0485MoveCrushGrip,
    #[serde(rename = "COMBAT_V0486_MOVE_DRAGON_ENERGY")]
    CombatV0486MoveDragonEnergy,
    #[serde(rename = "COMBAT_V0487_MOVE_AQUA_STEP")]
    CombatV0487MoveAquaStep,
    #[serde(rename = "COMBAT_V0488_MOVE_CHILLING_WATER")]
    CombatV0488MoveChillingWater,
    #[serde(rename = "COMBAT_V0489_MOVE_SECRET_SWORD")]
    CombatV0489MoveSecretSword,
    #[serde(rename = "COMBAT_V0490_MOVE_BEAK_BLAST")]
    CombatV0490MoveBeakBlast,
    #[serde(rename = "COMBAT_V0491_MOVE_MIND_BLOWN")]
    CombatV0491MoveMindBlown,
    #[serde(rename = "COMBAT_V0492_MOVE_DRUM_BEATING")]
    CombatV0492MoveDrumBeating,
    #[serde(rename = "COMBAT_V0493_MOVE_PYROBALL")]
    CombatV0493MovePyroball,
    #[serde(rename = "COMBAT_V0494_MOVE_GIGATON_HAMMER")]
    CombatV0494MoveGigatonHammer,
    #[serde(rename = "COMBAT_V0497_MOVE_PLASMA_FISTS")]
    CombatV0497MovePlasmaFists,
    #[serde(rename = "COMBAT_V0590_MOVE_GLAIVE_RUSH")]
    CombatV0590MoveGlaiveRush,
    #[serde(rename = "COMBAT_V0592_MOVE_SNIPE_SHOT")]
    CombatV0592MoveSnipeShot,
}

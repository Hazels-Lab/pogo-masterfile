//! Generated from Pokémon GO masterfile — group "moveSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum MoveSettingsTemplateId {
    #[serde(rename = "V0013_MOVE_WRAP")]
    V0013MoveWrap,
    #[serde(rename = "V0014_MOVE_HYPER_BEAM")]
    V0014MoveHyperBeam,
    #[serde(rename = "V0016_MOVE_DARK_PULSE")]
    V0016MoveDarkPulse,
    #[serde(rename = "V0018_MOVE_SLUDGE")]
    V0018MoveSludge,
    #[serde(rename = "V0020_MOVE_VICE_GRIP")]
    V0020MoveViceGrip,
    #[serde(rename = "V0021_MOVE_FLAME_WHEEL")]
    V0021MoveFlameWheel,
    #[serde(rename = "V0022_MOVE_MEGAHORN")]
    V0022MoveMegahorn,
    #[serde(rename = "V0024_MOVE_FLAMETHROWER")]
    V0024MoveFlamethrower,
    #[serde(rename = "V0026_MOVE_DIG")]
    V0026MoveDig,
    #[serde(rename = "V0028_MOVE_CROSS_CHOP")]
    V0028MoveCrossChop,
    #[serde(rename = "V0030_MOVE_PSYBEAM")]
    V0030MovePsybeam,
    #[serde(rename = "V0031_MOVE_EARTHQUAKE")]
    V0031MoveEarthquake,
    #[serde(rename = "V0032_MOVE_STONE_EDGE")]
    V0032MoveStoneEdge,
    #[serde(rename = "V0033_MOVE_ICE_PUNCH")]
    V0033MoveIcePunch,
    #[serde(rename = "V0034_MOVE_HEART_STAMP")]
    V0034MoveHeartStamp,
    #[serde(rename = "V0035_MOVE_DISCHARGE")]
    V0035MoveDischarge,
    #[serde(rename = "V0036_MOVE_FLASH_CANNON")]
    V0036MoveFlashCannon,
    #[serde(rename = "V0038_MOVE_DRILL_PECK")]
    V0038MoveDrillPeck,
    #[serde(rename = "V0039_MOVE_ICE_BEAM")]
    V0039MoveIceBeam,
    #[serde(rename = "V0040_MOVE_BLIZZARD")]
    V0040MoveBlizzard,
    #[serde(rename = "V0042_MOVE_HEAT_WAVE")]
    V0042MoveHeatWave,
    #[serde(rename = "V0045_MOVE_AERIAL_ACE")]
    V0045MoveAerialAce,
    #[serde(rename = "V0046_MOVE_DRILL_RUN")]
    V0046MoveDrillRun,
    #[serde(rename = "V0047_MOVE_PETAL_BLIZZARD")]
    V0047MovePetalBlizzard,
    #[serde(rename = "V0048_MOVE_MEGA_DRAIN")]
    V0048MoveMegaDrain,
    #[serde(rename = "V0049_MOVE_BUG_BUZZ")]
    V0049MoveBugBuzz,
    #[serde(rename = "V0050_MOVE_POISON_FANG")]
    V0050MovePoisonFang,
    #[serde(rename = "V0051_MOVE_NIGHT_SLASH")]
    V0051MoveNightSlash,
    #[serde(rename = "V0053_MOVE_BUBBLE_BEAM")]
    V0053MoveBubbleBeam,
    #[serde(rename = "V0054_MOVE_SUBMISSION")]
    V0054MoveSubmission,
    #[serde(rename = "V0056_MOVE_LOW_SWEEP")]
    V0056MoveLowSweep,
    #[serde(rename = "V0057_MOVE_AQUA_JET")]
    V0057MoveAquaJet,
    #[serde(rename = "V0058_MOVE_AQUA_TAIL")]
    V0058MoveAquaTail,
    #[serde(rename = "V0059_MOVE_SEED_BOMB")]
    V0059MoveSeedBomb,
    #[serde(rename = "V0060_MOVE_PSYSHOCK")]
    V0060MovePsyshock,
    #[serde(rename = "V0062_MOVE_ANCIENT_POWER")]
    V0062MoveAncientPower,
    #[serde(rename = "V0063_MOVE_ROCK_TOMB")]
    V0063MoveRockTomb,
    #[serde(rename = "V0064_MOVE_ROCK_SLIDE")]
    V0064MoveRockSlide,
    #[serde(rename = "V0065_MOVE_POWER_GEM")]
    V0065MovePowerGem,
    #[serde(rename = "V0066_MOVE_SHADOW_SNEAK")]
    V0066MoveShadowSneak,
    #[serde(rename = "V0067_MOVE_SHADOW_PUNCH")]
    V0067MoveShadowPunch,
    #[serde(rename = "V0069_MOVE_OMINOUS_WIND")]
    V0069MoveOminousWind,
    #[serde(rename = "V0070_MOVE_SHADOW_BALL")]
    V0070MoveShadowBall,
    #[serde(rename = "V0072_MOVE_MAGNET_BOMB")]
    V0072MoveMagnetBomb,
    #[serde(rename = "V0074_MOVE_IRON_HEAD")]
    V0074MoveIronHead,
    #[serde(rename = "V0075_MOVE_PARABOLIC_CHARGE")]
    V0075MoveParabolicCharge,
    #[serde(rename = "V0077_MOVE_THUNDER_PUNCH")]
    V0077MoveThunderPunch,
    #[serde(rename = "V0078_MOVE_THUNDER")]
    V0078MoveThunder,
    #[serde(rename = "V0079_MOVE_THUNDERBOLT")]
    V0079MoveThunderbolt,
    #[serde(rename = "V0080_MOVE_TWISTER")]
    V0080MoveTwister,
    #[serde(rename = "V0082_MOVE_DRAGON_PULSE")]
    V0082MoveDragonPulse,
    #[serde(rename = "V0083_MOVE_DRAGON_CLAW")]
    V0083MoveDragonClaw,
    #[serde(rename = "V0084_MOVE_DISARMING_VOICE")]
    V0084MoveDisarmingVoice,
    #[serde(rename = "V0085_MOVE_DRAINING_KISS")]
    V0085MoveDrainingKiss,
    #[serde(rename = "V0086_MOVE_DAZZLING_GLEAM")]
    V0086MoveDazzlingGleam,
    #[serde(rename = "V0087_MOVE_MOONBLAST")]
    V0087MoveMoonblast,
    #[serde(rename = "V0088_MOVE_PLAY_ROUGH")]
    V0088MovePlayRough,
    #[serde(rename = "V0089_MOVE_CROSS_POISON")]
    V0089MoveCrossPoison,
    #[serde(rename = "V0090_MOVE_SLUDGE_BOMB")]
    V0090MoveSludgeBomb,
    #[serde(rename = "V0091_MOVE_SLUDGE_WAVE")]
    V0091MoveSludgeWave,
    #[serde(rename = "V0092_MOVE_GUNK_SHOT")]
    V0092MoveGunkShot,
    #[serde(rename = "V0094_MOVE_BONE_CLUB")]
    V0094MoveBoneClub,
    #[serde(rename = "V0095_MOVE_BULLDOZE")]
    V0095MoveBulldoze,
    #[serde(rename = "V0096_MOVE_MUD_BOMB")]
    V0096MoveMudBomb,
    #[serde(rename = "V0099_MOVE_SIGNAL_BEAM")]
    V0099MoveSignalBeam,
    #[serde(rename = "V0100_MOVE_X_SCISSOR")]
    V0100MoveXScissor,
    #[serde(rename = "V0101_MOVE_FLAME_CHARGE")]
    V0101MoveFlameCharge,
    #[serde(rename = "V0102_MOVE_FLAME_BURST")]
    V0102MoveFlameBurst,
    #[serde(rename = "V0103_MOVE_FIRE_BLAST")]
    V0103MoveFireBlast,
    #[serde(rename = "V0104_MOVE_BRINE")]
    V0104MoveBrine,
    #[serde(rename = "V0105_MOVE_WATER_PULSE")]
    V0105MoveWaterPulse,
    #[serde(rename = "V0106_MOVE_SCALD")]
    V0106MoveScald,
    #[serde(rename = "V0107_MOVE_HYDRO_PUMP")]
    V0107MoveHydroPump,
    #[serde(rename = "V0108_MOVE_PSYCHIC")]
    V0108MovePsychic,
    #[serde(rename = "V0109_MOVE_PSYSTRIKE")]
    V0109MovePsystrike,
    #[serde(rename = "V0111_MOVE_ICY_WIND")]
    V0111MoveIcyWind,
    #[serde(rename = "V0114_MOVE_GIGA_DRAIN")]
    V0114MoveGigaDrain,
    #[serde(rename = "V0115_MOVE_FIRE_PUNCH")]
    V0115MoveFirePunch,
    #[serde(rename = "V0116_MOVE_SOLAR_BEAM")]
    V0116MoveSolarBeam,
    #[serde(rename = "V0117_MOVE_LEAF_BLADE")]
    V0117MoveLeafBlade,
    #[serde(rename = "V0118_MOVE_POWER_WHIP")]
    V0118MovePowerWhip,
    #[serde(rename = "V0121_MOVE_AIR_CUTTER")]
    V0121MoveAirCutter,
    #[serde(rename = "V0122_MOVE_HURRICANE")]
    V0122MoveHurricane,
    #[serde(rename = "V0123_MOVE_BRICK_BREAK")]
    V0123MoveBrickBreak,
    #[serde(rename = "V0125_MOVE_SWIFT")]
    V0125MoveSwift,
    #[serde(rename = "V0126_MOVE_HORN_ATTACK")]
    V0126MoveHornAttack,
    #[serde(rename = "V0127_MOVE_STOMP")]
    V0127MoveStomp,
    #[serde(rename = "V0129_MOVE_HYPER_FANG")]
    V0129MoveHyperFang,
    #[serde(rename = "V0131_MOVE_BODY_SLAM")]
    V0131MoveBodySlam,
    #[serde(rename = "V0132_MOVE_REST")]
    V0132MoveRest,
    #[serde(rename = "V0133_MOVE_STRUGGLE")]
    V0133MoveStruggle,
    #[serde(rename = "V0134_MOVE_SCALD_BLASTOISE")]
    V0134MoveScaldBlastoise,
    #[serde(rename = "V0135_MOVE_HYDRO_PUMP_BLASTOISE")]
    V0135MoveHydroPumpBlastoise,
    #[serde(rename = "V0136_MOVE_WRAP_GREEN")]
    V0136MoveWrapGreen,
    #[serde(rename = "V0137_MOVE_WRAP_PINK")]
    V0137MoveWrapPink,
    #[serde(rename = "V0200_MOVE_FURY_CUTTER_FAST")]
    V0200MoveFuryCutterFast,
    #[serde(rename = "V0201_MOVE_BUG_BITE_FAST")]
    V0201MoveBugBiteFast,
    #[serde(rename = "V0202_MOVE_BITE_FAST")]
    V0202MoveBiteFast,
    #[serde(rename = "V0203_MOVE_SUCKER_PUNCH_FAST")]
    V0203MoveSuckerPunchFast,
    #[serde(rename = "V0204_MOVE_DRAGON_BREATH_FAST")]
    V0204MoveDragonBreathFast,
    #[serde(rename = "V0205_MOVE_THUNDER_SHOCK_FAST")]
    V0205MoveThunderShockFast,
    #[serde(rename = "V0206_MOVE_SPARK_FAST")]
    V0206MoveSparkFast,
    #[serde(rename = "V0207_MOVE_LOW_KICK_FAST")]
    V0207MoveLowKickFast,
    #[serde(rename = "V0208_MOVE_KARATE_CHOP_FAST")]
    V0208MoveKarateChopFast,
    #[serde(rename = "V0209_MOVE_EMBER_FAST")]
    V0209MoveEmberFast,
    #[serde(rename = "V0210_MOVE_WING_ATTACK_FAST")]
    V0210MoveWingAttackFast,
    #[serde(rename = "V0211_MOVE_PECK_FAST")]
    V0211MovePeckFast,
    #[serde(rename = "V0212_MOVE_LICK_FAST")]
    V0212MoveLickFast,
    #[serde(rename = "V0213_MOVE_SHADOW_CLAW_FAST")]
    V0213MoveShadowClawFast,
    #[serde(rename = "V0214_MOVE_VINE_WHIP_FAST")]
    V0214MoveVineWhipFast,
    #[serde(rename = "V0215_MOVE_RAZOR_LEAF_FAST")]
    V0215MoveRazorLeafFast,
    #[serde(rename = "V0216_MOVE_MUD_SHOT_FAST")]
    V0216MoveMudShotFast,
    #[serde(rename = "V0217_MOVE_ICE_SHARD_FAST")]
    V0217MoveIceShardFast,
    #[serde(rename = "V0218_MOVE_FROST_BREATH_FAST")]
    V0218MoveFrostBreathFast,
    #[serde(rename = "V0219_MOVE_QUICK_ATTACK_FAST")]
    V0219MoveQuickAttackFast,
    #[serde(rename = "V0220_MOVE_SCRATCH_FAST")]
    V0220MoveScratchFast,
    #[serde(rename = "V0221_MOVE_TACKLE_FAST")]
    V0221MoveTackleFast,
    #[serde(rename = "V0222_MOVE_POUND_FAST")]
    V0222MovePoundFast,
    #[serde(rename = "V0223_MOVE_CUT_FAST")]
    V0223MoveCutFast,
    #[serde(rename = "V0224_MOVE_POISON_JAB_FAST")]
    V0224MovePoisonJabFast,
    #[serde(rename = "V0225_MOVE_ACID_FAST")]
    V0225MoveAcidFast,
    #[serde(rename = "V0226_MOVE_PSYCHO_CUT_FAST")]
    V0226MovePsychoCutFast,
    #[serde(rename = "V0227_MOVE_ROCK_THROW_FAST")]
    V0227MoveRockThrowFast,
    #[serde(rename = "V0228_MOVE_METAL_CLAW_FAST")]
    V0228MoveMetalClawFast,
    #[serde(rename = "V0229_MOVE_BULLET_PUNCH_FAST")]
    V0229MoveBulletPunchFast,
    #[serde(rename = "V0230_MOVE_WATER_GUN_FAST")]
    V0230MoveWaterGunFast,
    #[serde(rename = "V0231_MOVE_SPLASH_FAST")]
    V0231MoveSplashFast,
    #[serde(rename = "V0232_MOVE_WATER_GUN_FAST_BLASTOISE")]
    V0232MoveWaterGunFastBlastoise,
    #[serde(rename = "V0233_MOVE_MUD_SLAP_FAST")]
    V0233MoveMudSlapFast,
    #[serde(rename = "V0234_MOVE_ZEN_HEADBUTT_FAST")]
    V0234MoveZenHeadbuttFast,
    #[serde(rename = "V0235_MOVE_CONFUSION_FAST")]
    V0235MoveConfusionFast,
    #[serde(rename = "V0236_MOVE_POISON_STING_FAST")]
    V0236MovePoisonStingFast,
    #[serde(rename = "V0237_MOVE_BUBBLE_FAST")]
    V0237MoveBubbleFast,
    #[serde(rename = "V0238_MOVE_FEINT_ATTACK_FAST")]
    V0238MoveFeintAttackFast,
    #[serde(rename = "V0239_MOVE_STEEL_WING_FAST")]
    V0239MoveSteelWingFast,
    #[serde(rename = "V0240_MOVE_FIRE_FANG_FAST")]
    V0240MoveFireFangFast,
    #[serde(rename = "V0241_MOVE_ROCK_SMASH_FAST")]
    V0241MoveRockSmashFast,
    #[serde(rename = "V0242_MOVE_TRANSFORM_FAST")]
    V0242MoveTransformFast,
    #[serde(rename = "V0243_MOVE_COUNTER_FAST")]
    V0243MoveCounterFast,
    #[serde(rename = "V0244_MOVE_POWDER_SNOW_FAST")]
    V0244MovePowderSnowFast,
    #[serde(rename = "V0245_MOVE_CLOSE_COMBAT")]
    V0245MoveCloseCombat,
    #[serde(rename = "V0246_MOVE_DYNAMIC_PUNCH")]
    V0246MoveDynamicPunch,
    #[serde(rename = "V0247_MOVE_FOCUS_BLAST")]
    V0247MoveFocusBlast,
    #[serde(rename = "V0248_MOVE_AURORA_BEAM")]
    V0248MoveAuroraBeam,
    #[serde(rename = "V0249_MOVE_CHARGE_BEAM_FAST")]
    V0249MoveChargeBeamFast,
    #[serde(rename = "V0250_MOVE_VOLT_SWITCH_FAST")]
    V0250MoveVoltSwitchFast,
    #[serde(rename = "V0251_MOVE_WILD_CHARGE")]
    V0251MoveWildCharge,
    #[serde(rename = "V0252_MOVE_ZAP_CANNON")]
    V0252MoveZapCannon,
    #[serde(rename = "V0253_MOVE_DRAGON_TAIL_FAST")]
    V0253MoveDragonTailFast,
    #[serde(rename = "V0254_MOVE_AVALANCHE")]
    V0254MoveAvalanche,
    #[serde(rename = "V0255_MOVE_AIR_SLASH_FAST")]
    V0255MoveAirSlashFast,
    #[serde(rename = "V0256_MOVE_BRAVE_BIRD")]
    V0256MoveBraveBird,
    #[serde(rename = "V0257_MOVE_SKY_ATTACK")]
    V0257MoveSkyAttack,
    #[serde(rename = "V0258_MOVE_SAND_TOMB")]
    V0258MoveSandTomb,
    #[serde(rename = "V0259_MOVE_ROCK_BLAST")]
    V0259MoveRockBlast,
    #[serde(rename = "V0260_MOVE_INFESTATION_FAST")]
    V0260MoveInfestationFast,
    #[serde(rename = "V0261_MOVE_STRUGGLE_BUG_FAST")]
    V0261MoveStruggleBugFast,
    #[serde(rename = "V0262_MOVE_SILVER_WIND")]
    V0262MoveSilverWind,
    #[serde(rename = "V0263_MOVE_ASTONISH_FAST")]
    V0263MoveAstonishFast,
    #[serde(rename = "V0264_MOVE_HEX_FAST")]
    V0264MoveHexFast,
    #[serde(rename = "V0265_MOVE_NIGHT_SHADE")]
    V0265MoveNightShade,
    #[serde(rename = "V0266_MOVE_IRON_TAIL_FAST")]
    V0266MoveIronTailFast,
    #[serde(rename = "V0267_MOVE_GYRO_BALL")]
    V0267MoveGyroBall,
    #[serde(rename = "V0268_MOVE_HEAVY_SLAM")]
    V0268MoveHeavySlam,
    #[serde(rename = "V0269_MOVE_FIRE_SPIN_FAST")]
    V0269MoveFireSpinFast,
    #[serde(rename = "V0270_MOVE_OVERHEAT")]
    V0270MoveOverheat,
    #[serde(rename = "V0271_MOVE_BULLET_SEED_FAST")]
    V0271MoveBulletSeedFast,
    #[serde(rename = "V0272_MOVE_GRASS_KNOT")]
    V0272MoveGrassKnot,
    #[serde(rename = "V0273_MOVE_ENERGY_BALL")]
    V0273MoveEnergyBall,
    #[serde(rename = "V0274_MOVE_EXTRASENSORY_FAST")]
    V0274MoveExtrasensoryFast,
    #[serde(rename = "V0275_MOVE_FUTURESIGHT")]
    V0275MoveFuturesight,
    #[serde(rename = "V0276_MOVE_MIRROR_COAT")]
    V0276MoveMirrorCoat,
    #[serde(rename = "V0277_MOVE_OUTRAGE")]
    V0277MoveOutrage,
    #[serde(rename = "V0278_MOVE_SNARL_FAST")]
    V0278MoveSnarlFast,
    #[serde(rename = "V0279_MOVE_CRUNCH")]
    V0279MoveCrunch,
    #[serde(rename = "V0280_MOVE_FOUL_PLAY")]
    V0280MoveFoulPlay,
    #[serde(rename = "V0281_MOVE_HIDDEN_POWER_FAST")]
    V0281MoveHiddenPowerFast,
    #[serde(rename = "V0282_MOVE_TAKE_DOWN_FAST")]
    V0282MoveTakeDownFast,
    #[serde(rename = "V0283_MOVE_WATERFALL_FAST")]
    V0283MoveWaterfallFast,
    #[serde(rename = "V0284_MOVE_SURF")]
    V0284MoveSurf,
    #[serde(rename = "V0285_MOVE_DRACO_METEOR")]
    V0285MoveDracoMeteor,
    #[serde(rename = "V0286_MOVE_DOOM_DESIRE")]
    V0286MoveDoomDesire,
    #[serde(rename = "V0287_MOVE_YAWN_FAST")]
    V0287MoveYawnFast,
    #[serde(rename = "V0288_MOVE_PSYCHO_BOOST")]
    V0288MovePsychoBoost,
    #[serde(rename = "V0289_MOVE_ORIGIN_PULSE")]
    V0289MoveOriginPulse,
    #[serde(rename = "V0290_MOVE_PRECIPICE_BLADES")]
    V0290MovePrecipiceBlades,
    #[serde(rename = "V0291_MOVE_PRESENT_FAST")]
    V0291MovePresentFast,
    #[serde(rename = "V0292_MOVE_WEATHER_BALL_FIRE")]
    V0292MoveWeatherBallFire,
    #[serde(rename = "V0293_MOVE_WEATHER_BALL_ICE")]
    V0293MoveWeatherBallIce,
    #[serde(rename = "V0294_MOVE_WEATHER_BALL_ROCK")]
    V0294MoveWeatherBallRock,
    #[serde(rename = "V0295_MOVE_WEATHER_BALL_WATER")]
    V0295MoveWeatherBallWater,
    #[serde(rename = "V0296_MOVE_FRENZY_PLANT")]
    V0296MoveFrenzyPlant,
    #[serde(rename = "V0297_MOVE_SMACK_DOWN_FAST")]
    V0297MoveSmackDownFast,
    #[serde(rename = "V0298_MOVE_BLAST_BURN")]
    V0298MoveBlastBurn,
    #[serde(rename = "V0299_MOVE_HYDRO_CANNON")]
    V0299MoveHydroCannon,
    #[serde(rename = "V0300_MOVE_LAST_RESORT")]
    V0300MoveLastResort,
    #[serde(rename = "V0301_MOVE_METEOR_MASH")]
    V0301MoveMeteorMash,
    #[serde(rename = "V0302_MOVE_SKULL_BASH")]
    V0302MoveSkullBash,
    #[serde(rename = "V0303_MOVE_ACID_SPRAY")]
    V0303MoveAcidSpray,
    #[serde(rename = "V0304_MOVE_EARTH_POWER")]
    V0304MoveEarthPower,
    #[serde(rename = "V0305_MOVE_CRABHAMMER")]
    V0305MoveCrabhammer,
    #[serde(rename = "V0306_MOVE_LUNGE")]
    V0306MoveLunge,
    #[serde(rename = "V0307_MOVE_CRUSH_CLAW")]
    V0307MoveCrushClaw,
    #[serde(rename = "V0308_MOVE_OCTAZOOKA")]
    V0308MoveOctazooka,
    #[serde(rename = "V0309_MOVE_MIRROR_SHOT")]
    V0309MoveMirrorShot,
    #[serde(rename = "V0310_MOVE_SUPER_POWER")]
    V0310MoveSuperPower,
    #[serde(rename = "V0311_MOVE_FELL_STINGER")]
    V0311MoveFellStinger,
    #[serde(rename = "V0312_MOVE_LEAF_TORNADO")]
    V0312MoveLeafTornado,
    #[serde(rename = "V0313_MOVE_LEECH_LIFE")]
    V0313MoveLeechLife,
    #[serde(rename = "V0314_MOVE_DRAIN_PUNCH")]
    V0314MoveDrainPunch,
    #[serde(rename = "V0315_MOVE_SHADOW_BONE")]
    V0315MoveShadowBone,
    #[serde(rename = "V0316_MOVE_MUDDY_WATER")]
    V0316MoveMuddyWater,
    #[serde(rename = "V0317_MOVE_BLAZE_KICK")]
    V0317MoveBlazeKick,
    #[serde(rename = "V0318_MOVE_RAZOR_SHELL")]
    V0318MoveRazorShell,
    #[serde(rename = "V0319_MOVE_POWER_UP_PUNCH")]
    V0319MovePowerUpPunch,
    #[serde(rename = "V0320_MOVE_CHARM_FAST")]
    V0320MoveCharmFast,
    #[serde(rename = "V0321_MOVE_GIGA_IMPACT")]
    V0321MoveGigaImpact,
    #[serde(rename = "V0322_MOVE_FRUSTRATION")]
    V0322MoveFrustration,
    #[serde(rename = "V0323_MOVE_RETURN")]
    V0323MoveReturn,
    #[serde(rename = "V0324_MOVE_SYNCHRONOISE")]
    V0324MoveSynchronoise,
    #[serde(rename = "V0325_MOVE_LOCK_ON_FAST")]
    V0325MoveLockOnFast,
    #[serde(rename = "V0326_MOVE_THUNDER_FANG_FAST")]
    V0326MoveThunderFangFast,
    #[serde(rename = "V0327_MOVE_ICE_FANG_FAST")]
    V0327MoveIceFangFast,
    #[serde(rename = "V0328_MOVE_HORN_DRILL")]
    V0328MoveHornDrill,
    #[serde(rename = "V0329_MOVE_FISSURE")]
    V0329MoveFissure,
    #[serde(rename = "V0330_MOVE_SACRED_SWORD")]
    V0330MoveSacredSword,
    #[serde(rename = "V0331_MOVE_FLYING_PRESS")]
    V0331MoveFlyingPress,
    #[serde(rename = "V0332_MOVE_AURA_SPHERE")]
    V0332MoveAuraSphere,
    #[serde(rename = "V0333_MOVE_PAYBACK")]
    V0333MovePayback,
    #[serde(rename = "V0334_MOVE_ROCK_WRECKER")]
    V0334MoveRockWrecker,
    #[serde(rename = "V0335_MOVE_AEROBLAST")]
    V0335MoveAeroblast,
    #[serde(rename = "V0336_MOVE_TECHNO_BLAST_NORMAL")]
    V0336MoveTechnoBlastNormal,
    #[serde(rename = "V0337_MOVE_TECHNO_BLAST_BURN")]
    V0337MoveTechnoBlastBurn,
    #[serde(rename = "V0338_MOVE_TECHNO_BLAST_CHILL")]
    V0338MoveTechnoBlastChill,
    #[serde(rename = "V0339_MOVE_TECHNO_BLAST_WATER")]
    V0339MoveTechnoBlastWater,
    #[serde(rename = "V0340_MOVE_TECHNO_BLAST_SHOCK")]
    V0340MoveTechnoBlastShock,
    #[serde(rename = "V0341_MOVE_FLY")]
    V0341MoveFly,
    #[serde(rename = "V0342_MOVE_V_CREATE")]
    V0342MoveVCreate,
    #[serde(rename = "V0343_MOVE_LEAF_STORM")]
    V0343MoveLeafStorm,
    #[serde(rename = "V0344_MOVE_TRI_ATTACK")]
    V0344MoveTriAttack,
    #[serde(rename = "V0345_MOVE_GUST_FAST")]
    V0345MoveGustFast,
    #[serde(rename = "V0346_MOVE_INCINERATE_FAST")]
    V0346MoveIncinerateFast,
    #[serde(rename = "V0348_MOVE_FEATHER_DANCE")]
    V0348MoveFeatherDance,
    #[serde(rename = "V0350_MOVE_FAIRY_WIND_FAST")]
    V0350MoveFairyWindFast,
    #[serde(rename = "V0352_MOVE_WEATHER_BALL_NORMAL")]
    V0352MoveWeatherBallNormal,
    #[serde(rename = "V0353_MOVE_PSYCHIC_FANGS")]
    V0353MovePsychicFangs,
    #[serde(rename = "V0356_MOVE_DOUBLE_KICK_FAST")]
    V0356MoveDoubleKickFast,
    #[serde(rename = "V0357_MOVE_MAGICAL_LEAF_FAST")]
    V0357MoveMagicalLeafFast,
    #[serde(rename = "V0358_MOVE_SACRED_FIRE")]
    V0358MoveSacredFire,
    #[serde(rename = "V0359_MOVE_ICICLE_SPEAR")]
    V0359MoveIcicleSpear,
    #[serde(rename = "V0360_MOVE_AEROBLAST_PLUS")]
    V0360MoveAeroblastPlus,
    #[serde(rename = "V0361_MOVE_AEROBLAST_PLUS_PLUS")]
    V0361MoveAeroblastPlusPlus,
    #[serde(rename = "V0362_MOVE_SACRED_FIRE_PLUS")]
    V0362MoveSacredFirePlus,
    #[serde(rename = "V0363_MOVE_SACRED_FIRE_PLUS_PLUS")]
    V0363MoveSacredFirePlusPlus,
    #[serde(rename = "V0364_MOVE_ACROBATICS")]
    V0364MoveAcrobatics,
    #[serde(rename = "V0365_MOVE_LUSTER_PURGE")]
    V0365MoveLusterPurge,
    #[serde(rename = "V0366_MOVE_MIST_BALL")]
    V0366MoveMistBall,
    #[serde(rename = "V0367_MOVE_BRUTAL_SWING")]
    V0367MoveBrutalSwing,
    #[serde(rename = "V0368_MOVE_ROLLOUT_FAST")]
    V0368MoveRolloutFast,
    #[serde(rename = "V0369_MOVE_SEED_FLARE")]
    V0369MoveSeedFlare,
    #[serde(rename = "V0370_MOVE_OBSTRUCT")]
    V0370MoveObstruct,
    #[serde(rename = "V0371_MOVE_SHADOW_FORCE")]
    V0371MoveShadowForce,
    #[serde(rename = "V0372_MOVE_METEOR_BEAM")]
    V0372MoveMeteorBeam,
    #[serde(rename = "V0373_MOVE_WATER_SHURIKEN_FAST")]
    V0373MoveWaterShurikenFast,
    #[serde(rename = "V0374_MOVE_FUSION_BOLT")]
    V0374MoveFusionBolt,
    #[serde(rename = "V0375_MOVE_FUSION_FLARE")]
    V0375MoveFusionFlare,
    #[serde(rename = "V0376_MOVE_POLTERGEIST")]
    V0376MovePoltergeist,
    #[serde(rename = "V0377_MOVE_HIGH_HORSEPOWER")]
    V0377MoveHighHorsepower,
    #[serde(rename = "V0378_MOVE_GLACIATE")]
    V0378MoveGlaciate,
    #[serde(rename = "V0379_MOVE_BREAKING_SWIPE")]
    V0379MoveBreakingSwipe,
    #[serde(rename = "V0380_MOVE_BOOMBURST")]
    V0380MoveBoomburst,
    #[serde(rename = "V0381_MOVE_DOUBLE_IRON_BASH")]
    V0381MoveDoubleIronBash,
    #[serde(rename = "V0382_MOVE_MYSTICAL_FIRE")]
    V0382MoveMysticalFire,
    #[serde(rename = "V0383_MOVE_LIQUIDATION")]
    V0383MoveLiquidation,
    #[serde(rename = "V0384_MOVE_DRAGON_ASCENT")]
    V0384MoveDragonAscent,
    #[serde(rename = "V0385_MOVE_LEAFAGE_FAST")]
    V0385MoveLeafageFast,
    #[serde(rename = "V0386_MOVE_MAGMA_STORM")]
    V0386MoveMagmaStorm,
    #[serde(rename = "V0387_MOVE_GEOMANCY_FAST")]
    V0387MoveGeomancyFast,
    #[serde(rename = "V0388_MOVE_SPACIAL_REND")]
    V0388MoveSpacialRend,
    #[serde(rename = "V0389_MOVE_OBLIVION_WING")]
    V0389MoveOblivionWing,
    #[serde(rename = "V0390_MOVE_NATURES_MADNESS")]
    V0390MoveNaturesMadness,
    #[serde(rename = "V0391_MOVE_TRIPLE_AXEL")]
    V0391MoveTripleAxel,
    #[serde(rename = "V0392_MOVE_TRAILBLAZE")]
    V0392MoveTrailblaze,
    #[serde(rename = "V0393_MOVE_SCORCHING_SANDS")]
    V0393MoveScorchingSands,
    #[serde(rename = "V0394_MOVE_ROAR_OF_TIME")]
    V0394MoveRoarOfTime,
    #[serde(rename = "V0395_MOVE_BLEAKWIND_STORM")]
    V0395MoveBleakwindStorm,
    #[serde(rename = "V0396_MOVE_SANDSEAR_STORM")]
    V0396MoveSandsearStorm,
    #[serde(rename = "V0397_MOVE_WILDBOLT_STORM")]
    V0397MoveWildboltStorm,
    #[serde(rename = "V0398_MOVE_SPIRIT_SHACKLE")]
    V0398MoveSpiritShackle,
    #[serde(rename = "V0399_MOVE_VOLT_TACKLE")]
    V0399MoveVoltTackle,
    #[serde(rename = "V0400_MOVE_DARKEST_LARIAT")]
    V0400MoveDarkestLariat,
    #[serde(rename = "V0401_MOVE_PSYWAVE_FAST")]
    V0401MovePsywaveFast,
    #[serde(rename = "V0402_MOVE_METAL_SOUND_FAST")]
    V0402MoveMetalSoundFast,
    #[serde(rename = "V0403_MOVE_SAND_ATTACK_FAST")]
    V0403MoveSandAttackFast,
    #[serde(rename = "V0404_MOVE_SUNSTEEL_STRIKE")]
    V0404MoveSunsteelStrike,
    #[serde(rename = "V0405_MOVE_MOONGEIST_BEAM")]
    V0405MoveMoongeistBeam,
    #[serde(rename = "V0406_MOVE_AURA_WHEEL_ELECTRIC")]
    V0406MoveAuraWheelElectric,
    #[serde(rename = "V0407_MOVE_AURA_WHEEL_DARK")]
    V0407MoveAuraWheelDark,
    #[serde(rename = "V0408_MOVE_HIGH_JUMP_KICK")]
    V0408MoveHighJumpKick,
    #[serde(rename = "V0462_MOVE_FORCE_PALM_FAST")]
    V0462MoveForcePalmFast,
    #[serde(rename = "V0463_MOVE_SPARKLING_ARIA")]
    V0463MoveSparklingAria,
    #[serde(rename = "V0464_MOVE_RAGE_FIST")]
    V0464MoveRageFist,
    #[serde(rename = "V0465_MOVE_FLOWER_TRICK")]
    V0465MoveFlowerTrick,
    #[serde(rename = "V0466_MOVE_FREEZE_SHOCK")]
    V0466MoveFreezeShock,
    #[serde(rename = "V0467_MOVE_ICE_BURN")]
    V0467MoveIceBurn,
    #[serde(rename = "V0468_MOVE_TORCH_SONG")]
    V0468MoveTorchSong,
    #[serde(rename = "V0469_MOVE_BEHEMOTH_BLADE")]
    V0469MoveBehemothBlade,
    #[serde(rename = "V0470_MOVE_BEHEMOTH_BASH")]
    V0470MoveBehemothBash,
    #[serde(rename = "V0471_MOVE_UPPER_HAND")]
    V0471MoveUpperHand,
    #[serde(rename = "V0472_MOVE_THUNDER_CAGE")]
    V0472MoveThunderCage,
    #[serde(rename = "V0482_MOVE_DYNAMAX_CANNON")]
    V0482MoveDynamaxCannon,
    #[serde(rename = "V0484_MOVE_CLANGING_SCALES")]
    V0484MoveClangingScales,
    #[serde(rename = "V0485_MOVE_CRUSH_GRIP")]
    V0485MoveCrushGrip,
    #[serde(rename = "V0486_MOVE_DRAGON_ENERGY")]
    V0486MoveDragonEnergy,
    #[serde(rename = "V0487_MOVE_AQUA_STEP")]
    V0487MoveAquaStep,
    #[serde(rename = "V0488_MOVE_CHILLING_WATER")]
    V0488MoveChillingWater,
    #[serde(rename = "V0489_MOVE_SECRET_SWORD")]
    V0489MoveSecretSword,
    #[serde(rename = "V0490_MOVE_BEAK_BLAST")]
    V0490MoveBeakBlast,
    #[serde(rename = "V0491_MOVE_MIND_BLOWN")]
    V0491MoveMindBlown,
    #[serde(rename = "V0492_MOVE_DRUM_BEATING")]
    V0492MoveDrumBeating,
    #[serde(rename = "V0493_MOVE_PYROBALL")]
    V0493MovePyroball,
    #[serde(rename = "V0494_MOVE_GIGATON_HAMMER")]
    V0494MoveGigatonHammer,
    #[serde(rename = "V0497_MOVE_PLASMA_FISTS")]
    V0497MovePlasmaFists,
    #[serde(rename = "V0590_MOVE_GLAIVE_RUSH")]
    V0590MoveGlaiveRush,
    #[serde(rename = "V0592_MOVE_SNIPE_SHOT")]
    V0592MoveSnipeShot,
    #[serde(rename = "V0593_MOVE_DIVE")]
    V0593MoveDive,
    #[serde(rename = "V0594_MOVE_GULP_MISSILE_GULPING")]
    V0594MoveGulpMissileGulping,
    #[serde(rename = "V0595_MOVE_GULP_MISSILE_GORGING")]
    V0595MoveGulpMissileGorging,
    #[serde(rename = "VN_BM_001")]
    VnBm001,
    #[serde(rename = "VN_BM_002")]
    VnBm002,
    #[serde(rename = "VN_BM_003")]
    VnBm003,
    #[serde(rename = "VN_BM_004")]
    VnBm004,
    #[serde(rename = "VN_BM_005")]
    VnBm005,
    #[serde(rename = "VN_BM_006")]
    VnBm006,
    #[serde(rename = "VN_BM_007")]
    VnBm007,
    #[serde(rename = "VN_BM_008")]
    VnBm008,
    #[serde(rename = "VN_BM_009")]
    VnBm009,
    #[serde(rename = "VN_BM_010")]
    VnBm010,
    #[serde(rename = "VN_BM_011")]
    VnBm011,
    #[serde(rename = "VN_BM_012")]
    VnBm012,
    #[serde(rename = "VN_BM_013")]
    VnBm013,
    #[serde(rename = "VN_BM_014")]
    VnBm014,
    #[serde(rename = "VN_BM_015")]
    VnBm015,
    #[serde(rename = "VN_BM_016")]
    VnBm016,
    #[serde(rename = "VN_BM_017")]
    VnBm017,
    #[serde(rename = "VN_BM_018")]
    VnBm018,
    #[serde(rename = "VN_BM_019")]
    VnBm019,
    #[serde(rename = "VN_BM_020")]
    VnBm020,
    #[serde(rename = "VN_BM_021")]
    VnBm021,
    #[serde(rename = "VN_BM_022")]
    VnBm022,
    #[serde(rename = "VN_BM_023")]
    VnBm023,
    #[serde(rename = "VN_BM_024")]
    VnBm024,
    #[serde(rename = "VN_BM_025")]
    VnBm025,
    #[serde(rename = "VN_BM_026")]
    VnBm026,
    #[serde(rename = "VN_BM_027")]
    VnBm027,
    #[serde(rename = "VN_BM_028")]
    VnBm028,
    #[serde(rename = "VN_BM_029")]
    VnBm029,
    #[serde(rename = "VN_BM_030")]
    VnBm030,
    #[serde(rename = "VN_BM_031")]
    VnBm031,
    #[serde(rename = "VN_BM_032")]
    VnBm032,
    #[serde(rename = "VN_BM_033")]
    VnBm033,
    #[serde(rename = "VN_BM_034")]
    VnBm034,
    #[serde(rename = "VN_BM_035")]
    VnBm035,
    #[serde(rename = "VN_BM_036")]
    VnBm036,
    #[serde(rename = "VN_BM_037")]
    VnBm037,
    #[serde(rename = "VN_BM_038")]
    VnBm038,
    #[serde(rename = "VN_BM_039")]
    VnBm039,
    #[serde(rename = "VN_BM_040")]
    VnBm040,
    #[serde(rename = "VN_BM_041")]
    VnBm041,
    #[serde(rename = "VN_BM_042")]
    VnBm042,
    #[serde(rename = "VN_BM_043")]
    VnBm043,
    #[serde(rename = "VN_BM_044")]
    VnBm044,
    #[serde(rename = "VN_BM_045")]
    VnBm045,
    #[serde(rename = "VN_BM_046")]
    VnBm046,
    #[serde(rename = "VN_BM_047")]
    VnBm047,
    #[serde(rename = "VN_BM_048")]
    VnBm048,
    #[serde(rename = "VN_BM_049")]
    VnBm049,
    #[serde(rename = "VN_BM_050")]
    VnBm050,
    #[serde(rename = "VN_BM_051")]
    VnBm051,
    #[serde(rename = "VN_BM_052")]
    VnBm052,
    #[serde(rename = "VN_BM_053")]
    VnBm053,
    #[serde(rename = "VN_BM_054")]
    VnBm054,
    #[serde(rename = "VN_BM_055")]
    VnBm055,
    #[serde(rename = "VN_BM_056")]
    VnBm056,
    #[serde(rename = "VN_BM_057")]
    VnBm057,
    #[serde(rename = "VN_BM_058")]
    VnBm058,
    #[serde(rename = "VN_BM_059")]
    VnBm059,
    #[serde(rename = "VN_BM_060")]
    VnBm060,
    #[serde(rename = "VN_BM_061")]
    VnBm061,
    #[serde(rename = "VN_BM_062")]
    VnBm062,
}

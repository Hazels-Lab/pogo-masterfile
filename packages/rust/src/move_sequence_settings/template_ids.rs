//! Generated from Pokémon GO masterfile — group "moveSequenceSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum MoveSequenceSettingsTemplateId {
    #[serde(rename = "sequence_acid_fast")]
    SequenceAcidFast,
    #[serde(rename = "sequence_acid_spray")]
    SequenceAcidSpray,
    #[serde(rename = "sequence_acrobatics")]
    SequenceAcrobatics,
    #[serde(rename = "sequence_aerial_ace")]
    SequenceAerialAce,
    #[serde(rename = "sequence_aeroblast")]
    SequenceAeroblast,
    #[serde(rename = "sequence_air_cutter")]
    SequenceAirCutter,
    #[serde(rename = "sequence_air_slash_fast")]
    SequenceAirSlashFast,
    #[serde(rename = "sequence_ancient_power")]
    SequenceAncientPower,
    #[serde(rename = "sequence_aqua_jet")]
    SequenceAquaJet,
    #[serde(rename = "sequence_aqua_step")]
    SequenceAquaStep,
    #[serde(rename = "sequence_aqua_tail")]
    SequenceAquaTail,
    #[serde(rename = "sequence_astonish_fast")]
    SequenceAstonishFast,
    #[serde(rename = "sequence_aura_sphere")]
    SequenceAuraSphere,
    #[serde(rename = "sequence_aura_wheel_dark")]
    SequenceAuraWheelDark,
    #[serde(rename = "sequence_aura_wheel_electric")]
    SequenceAuraWheelElectric,
    #[serde(rename = "sequence_aurora_beam")]
    SequenceAuroraBeam,
    #[serde(rename = "sequence_avalanche")]
    SequenceAvalanche,
    #[serde(rename = "sequence_beak_blast")]
    SequenceBeakBlast,
    #[serde(rename = "sequence_behemoth_bash")]
    SequenceBehemothBash,
    #[serde(rename = "sequence_behemoth_blade")]
    SequenceBehemothBlade,
    #[serde(rename = "sequence_bite_fast")]
    SequenceBiteFast,
    #[serde(rename = "sequence_blast_burn")]
    SequenceBlastBurn,
    #[serde(rename = "sequence_blaze_kick")]
    SequenceBlazeKick,
    #[serde(rename = "sequence_bleakwind_storm")]
    SequenceBleakwindStorm,
    #[serde(rename = "sequence_blizzard")]
    SequenceBlizzard,
    #[serde(rename = "sequence_body_slam")]
    SequenceBodySlam,
    #[serde(rename = "sequence_bone_club")]
    SequenceBoneClub,
    #[serde(rename = "sequence_boomburst")]
    SequenceBoomburst,
    #[serde(rename = "sequence_brave_bird")]
    SequenceBraveBird,
    #[serde(rename = "sequence_breaking_swipe")]
    SequenceBreakingSwipe,
    #[serde(rename = "sequence_brick_break")]
    SequenceBrickBreak,
    #[serde(rename = "sequence_brine")]
    SequenceBrine,
    #[serde(rename = "sequence_brutal_swing")]
    SequenceBrutalSwing,
    #[serde(rename = "sequence_bubble_beam")]
    SequenceBubbleBeam,
    #[serde(rename = "sequence_bubble_fast")]
    SequenceBubbleFast,
    #[serde(rename = "sequence_bug_bite_fast")]
    SequenceBugBiteFast,
    #[serde(rename = "sequence_bug_buzz")]
    SequenceBugBuzz,
    #[serde(rename = "sequence_bulldoze")]
    SequenceBulldoze,
    #[serde(rename = "sequence_bullet_punch_fast")]
    SequenceBulletPunchFast,
    #[serde(rename = "sequence_bullet_seed_fast")]
    SequenceBulletSeedFast,
    #[serde(rename = "sequence_charge_beam_fast")]
    SequenceChargeBeamFast,
    #[serde(rename = "sequence_charm_fast")]
    SequenceCharmFast,
    #[serde(rename = "sequence_chilling_water")]
    SequenceChillingWater,
    #[serde(rename = "sequence_clanging_scales")]
    SequenceClangingScales,
    #[serde(rename = "sequence_close_combat")]
    SequenceCloseCombat,
    #[serde(rename = "sequence_confusion_fast")]
    SequenceConfusionFast,
    #[serde(rename = "sequence_counter_fast")]
    SequenceCounterFast,
    #[serde(rename = "sequence_crabhammer")]
    SequenceCrabhammer,
    #[serde(rename = "sequence_cross_chop")]
    SequenceCrossChop,
    #[serde(rename = "sequence_cross_poison")]
    SequenceCrossPoison,
    #[serde(rename = "sequence_crunch")]
    SequenceCrunch,
    #[serde(rename = "sequence_crush_claw")]
    SequenceCrushClaw,
    #[serde(rename = "sequence_crush_grip")]
    SequenceCrushGrip,
    #[serde(rename = "sequence_cut_fast")]
    SequenceCutFast,
    #[serde(rename = "sequence_dark_pulse")]
    SequenceDarkPulse,
    #[serde(rename = "sequence_darkest_lariat")]
    SequenceDarkestLariat,
    #[serde(rename = "sequence_dazzling_gleam")]
    SequenceDazzlingGleam,
    #[serde(rename = "sequence_default")]
    SequenceDefault,
    #[serde(rename = "sequence_dig")]
    SequenceDig,
    #[serde(rename = "sequence_disarming_voice")]
    SequenceDisarmingVoice,
    #[serde(rename = "sequence_discharge")]
    SequenceDischarge,
    #[serde(rename = "sequence_dive")]
    SequenceDive,
    #[serde(rename = "sequence_doom_desire")]
    SequenceDoomDesire,
    #[serde(rename = "sequence_double_iron_bash")]
    SequenceDoubleIronBash,
    #[serde(rename = "sequence_double_kick_fast")]
    SequenceDoubleKickFast,
    #[serde(rename = "sequence_draco_meteor")]
    SequenceDracoMeteor,
    #[serde(rename = "sequence_dragon_ascent")]
    SequenceDragonAscent,
    #[serde(rename = "sequence_dragon_breath_fast")]
    SequenceDragonBreathFast,
    #[serde(rename = "sequence_dragon_claw")]
    SequenceDragonClaw,
    #[serde(rename = "sequence_dragon_energy")]
    SequenceDragonEnergy,
    #[serde(rename = "sequence_dragon_pulse")]
    SequenceDragonPulse,
    #[serde(rename = "sequence_dragon_tail_fast")]
    SequenceDragonTailFast,
    #[serde(rename = "sequence_drain_punch")]
    SequenceDrainPunch,
    #[serde(rename = "sequence_draining_kiss")]
    SequenceDrainingKiss,
    #[serde(rename = "sequence_drill_peck")]
    SequenceDrillPeck,
    #[serde(rename = "sequence_drill_run")]
    SequenceDrillRun,
    #[serde(rename = "sequence_drum_beating")]
    SequenceDrumBeating,
    #[serde(rename = "sequence_dynamax_cannon")]
    SequenceDynamaxCannon,
    #[serde(rename = "sequence_dynamic_punch")]
    SequenceDynamicPunch,
    #[serde(rename = "sequence_earth_power")]
    SequenceEarthPower,
    #[serde(rename = "sequence_earthquake")]
    SequenceEarthquake,
    #[serde(rename = "sequence_ember_fast")]
    SequenceEmberFast,
    #[serde(rename = "sequence_energy_ball")]
    SequenceEnergyBall,
    #[serde(rename = "sequence_extrasensory_fast")]
    SequenceExtrasensoryFast,
    #[serde(rename = "sequence_fairy_wind_fast")]
    SequenceFairyWindFast,
    #[serde(rename = "sequence_feather_dance")]
    SequenceFeatherDance,
    #[serde(rename = "sequence_feint_attack_fast")]
    SequenceFeintAttackFast,
    #[serde(rename = "sequence_fell_stinger")]
    SequenceFellStinger,
    #[serde(rename = "sequence_fire_blast")]
    SequenceFireBlast,
    #[serde(rename = "sequence_fire_fang_fast")]
    SequenceFireFangFast,
    #[serde(rename = "sequence_fire_punch")]
    SequenceFirePunch,
    #[serde(rename = "sequence_fire_spin_fast")]
    SequenceFireSpinFast,
    #[serde(rename = "sequence_fissure")]
    SequenceFissure,
    #[serde(rename = "sequence_flame_burst")]
    SequenceFlameBurst,
    #[serde(rename = "sequence_flame_charge")]
    SequenceFlameCharge,
    #[serde(rename = "sequence_flame_wheel")]
    SequenceFlameWheel,
    #[serde(rename = "sequence_flamethrower")]
    SequenceFlamethrower,
    #[serde(rename = "sequence_flash_cannon")]
    SequenceFlashCannon,
    #[serde(rename = "sequence_flower_trick")]
    SequenceFlowerTrick,
    #[serde(rename = "sequence_fly")]
    SequenceFly,
    #[serde(rename = "sequence_focus_blast")]
    SequenceFocusBlast,
    #[serde(rename = "sequence_force_palm_fast")]
    SequenceForcePalmFast,
    #[serde(rename = "sequence_foul_play")]
    SequenceFoulPlay,
    #[serde(rename = "sequence_freeze_shock")]
    SequenceFreezeShock,
    #[serde(rename = "sequence_frenzy_plant")]
    SequenceFrenzyPlant,
    #[serde(rename = "sequence_frost_breath_fast")]
    SequenceFrostBreathFast,
    #[serde(rename = "sequence_frustration")]
    SequenceFrustration,
    #[serde(rename = "sequence_fury_cutter_fast")]
    SequenceFuryCutterFast,
    #[serde(rename = "sequence_fusion_bolt")]
    SequenceFusionBolt,
    #[serde(rename = "sequence_fusion_flare")]
    SequenceFusionFlare,
    #[serde(rename = "sequence_futuresight")]
    SequenceFuturesight,
    #[serde(rename = "sequence_geomancy_fast")]
    SequenceGeomancyFast,
    #[serde(rename = "sequence_giga_drain")]
    SequenceGigaDrain,
    #[serde(rename = "sequence_giga_impact")]
    SequenceGigaImpact,
    #[serde(rename = "sequence_gigaton_hammer")]
    SequenceGigatonHammer,
    #[serde(rename = "sequence_glaciate")]
    SequenceGlaciate,
    #[serde(rename = "sequence_glaive_rush")]
    SequenceGlaiveRush,
    #[serde(rename = "sequence_grass_knot")]
    SequenceGrassKnot,
    #[serde(rename = "sequence_gulp_missile_gorging")]
    SequenceGulpMissileGorging,
    #[serde(rename = "sequence_gulp_missile_gulping")]
    SequenceGulpMissileGulping,
    #[serde(rename = "sequence_gunk_shot")]
    SequenceGunkShot,
    #[serde(rename = "sequence_gust_fast")]
    SequenceGustFast,
    #[serde(rename = "sequence_gyro_ball")]
    SequenceGyroBall,
    #[serde(rename = "sequence_heart_stamp")]
    SequenceHeartStamp,
    #[serde(rename = "sequence_heat_wave")]
    SequenceHeatWave,
    #[serde(rename = "sequence_heavy_slam")]
    SequenceHeavySlam,
    #[serde(rename = "sequence_hex_fast")]
    SequenceHexFast,
    #[serde(rename = "sequence_hidden_power_fast")]
    SequenceHiddenPowerFast,
    #[serde(rename = "sequence_high_horsepower")]
    SequenceHighHorsepower,
    #[serde(rename = "sequence_high_jump_kick")]
    SequenceHighJumpKick,
    #[serde(rename = "sequence_horn_attack")]
    SequenceHornAttack,
    #[serde(rename = "sequence_horn_drill")]
    SequenceHornDrill,
    #[serde(rename = "sequence_hurricane")]
    SequenceHurricane,
    #[serde(rename = "sequence_hydro_cannon")]
    SequenceHydroCannon,
    #[serde(rename = "sequence_hydro_pump")]
    SequenceHydroPump,
    #[serde(rename = "sequence_hydro_pump_blastoise")]
    SequenceHydroPumpBlastoise,
    #[serde(rename = "sequence_hyper_beam")]
    SequenceHyperBeam,
    #[serde(rename = "sequence_hyper_fang")]
    SequenceHyperFang,
    #[serde(rename = "sequence_ice_beam")]
    SequenceIceBeam,
    #[serde(rename = "sequence_ice_burn")]
    SequenceIceBurn,
    #[serde(rename = "sequence_ice_fang_fast")]
    SequenceIceFangFast,
    #[serde(rename = "sequence_ice_punch")]
    SequenceIcePunch,
    #[serde(rename = "sequence_ice_shard_fast")]
    SequenceIceShardFast,
    #[serde(rename = "sequence_icicle_spear")]
    SequenceIcicleSpear,
    #[serde(rename = "sequence_icy_wind")]
    SequenceIcyWind,
    #[serde(rename = "sequence_incinerate_fast")]
    SequenceIncinerateFast,
    #[serde(rename = "sequence_infestation_fast")]
    SequenceInfestationFast,
    #[serde(rename = "sequence_iron_head")]
    SequenceIronHead,
    #[serde(rename = "sequence_iron_tail_fast")]
    SequenceIronTailFast,
    #[serde(rename = "sequence_karate_chop_fast")]
    SequenceKarateChopFast,
    #[serde(rename = "sequence_last_resort")]
    SequenceLastResort,
    #[serde(rename = "sequence_leaf_blade")]
    SequenceLeafBlade,
    #[serde(rename = "sequence_leaf_storm")]
    SequenceLeafStorm,
    #[serde(rename = "sequence_leaf_tornado")]
    SequenceLeafTornado,
    #[serde(rename = "sequence_leafage_fast")]
    SequenceLeafageFast,
    #[serde(rename = "sequence_leech_life")]
    SequenceLeechLife,
    #[serde(rename = "sequence_lick_fast")]
    SequenceLickFast,
    #[serde(rename = "sequence_liquidation")]
    SequenceLiquidation,
    #[serde(rename = "sequence_lock_on_fast")]
    SequenceLockOnFast,
    #[serde(rename = "sequence_low_kick_fast")]
    SequenceLowKickFast,
    #[serde(rename = "sequence_low_sweep")]
    SequenceLowSweep,
    #[serde(rename = "sequence_lunge")]
    SequenceLunge,
    #[serde(rename = "sequence_luster_purge")]
    SequenceLusterPurge,
    #[serde(rename = "sequence_magical_leaf_fast")]
    SequenceMagicalLeafFast,
    #[serde(rename = "sequence_magma_storm")]
    SequenceMagmaStorm,
    #[serde(rename = "sequence_magnet_bomb")]
    SequenceMagnetBomb,
    #[serde(rename = "sequence_mega_drain")]
    SequenceMegaDrain,
    #[serde(rename = "sequence_megahorn")]
    SequenceMegahorn,
    #[serde(rename = "sequence_metal_claw_fast")]
    SequenceMetalClawFast,
    #[serde(rename = "sequence_metal_sound")]
    SequenceMetalSound,
    #[serde(rename = "sequence_meteor_beam")]
    SequenceMeteorBeam,
    #[serde(rename = "sequence_meteor_mash")]
    SequenceMeteorMash,
    #[serde(rename = "sequence_mind_blown")]
    SequenceMindBlown,
    #[serde(rename = "sequence_mirror_coat")]
    SequenceMirrorCoat,
    #[serde(rename = "sequence_mirror_shot")]
    SequenceMirrorShot,
    #[serde(rename = "sequence_mist_ball")]
    SequenceMistBall,
    #[serde(rename = "sequence_moonblast")]
    SequenceMoonblast,
    #[serde(rename = "sequence_moongeist_beam")]
    SequenceMoongeistBeam,
    #[serde(rename = "sequence_mud_bomb")]
    SequenceMudBomb,
    #[serde(rename = "sequence_mud_shot_fast")]
    SequenceMudShotFast,
    #[serde(rename = "sequence_mud_slap_fast")]
    SequenceMudSlapFast,
    #[serde(rename = "sequence_muddy_water")]
    SequenceMuddyWater,
    #[serde(rename = "sequence_myst_fire")]
    SequenceMystFire,
    #[serde(rename = "sequence_natures_madness")]
    SequenceNaturesMadness,
    #[serde(rename = "sequence_night_shade")]
    SequenceNightShade,
    #[serde(rename = "sequence_night_slash")]
    SequenceNightSlash,
    #[serde(rename = "sequence_oblivion_wing")]
    SequenceOblivionWing,
    #[serde(rename = "sequence_obstruct")]
    SequenceObstruct,
    #[serde(rename = "sequence_octazooka")]
    SequenceOctazooka,
    #[serde(rename = "sequence_ominous_wind")]
    SequenceOminousWind,
    #[serde(rename = "sequence_origin_pulse")]
    SequenceOriginPulse,
    #[serde(rename = "sequence_outrage")]
    SequenceOutrage,
    #[serde(rename = "sequence_overheat")]
    SequenceOverheat,
    #[serde(rename = "sequence_parabolic_charge")]
    SequenceParabolicCharge,
    #[serde(rename = "sequence_payback")]
    SequencePayback,
    #[serde(rename = "sequence_peck_fast")]
    SequencePeckFast,
    #[serde(rename = "sequence_petal_blizzard")]
    SequencePetalBlizzard,
    #[serde(rename = "sequence_plasma_fists")]
    SequencePlasmaFists,
    #[serde(rename = "sequence_play_rough")]
    SequencePlayRough,
    #[serde(rename = "sequence_poison_fang")]
    SequencePoisonFang,
    #[serde(rename = "sequence_poison_jab_fast")]
    SequencePoisonJabFast,
    #[serde(rename = "sequence_poison_sting_fast")]
    SequencePoisonStingFast,
    #[serde(rename = "sequence_poltergeist")]
    SequencePoltergeist,
    #[serde(rename = "sequence_pound_fast")]
    SequencePoundFast,
    #[serde(rename = "sequence_powder_snow_fast")]
    SequencePowderSnowFast,
    #[serde(rename = "sequence_power_gem")]
    SequencePowerGem,
    #[serde(rename = "sequence_power_up_punch")]
    SequencePowerUpPunch,
    #[serde(rename = "sequence_power_whip")]
    SequencePowerWhip,
    #[serde(rename = "sequence_precipice_blades")]
    SequencePrecipiceBlades,
    #[serde(rename = "sequence_present_fast")]
    SequencePresentFast,
    #[serde(rename = "sequence_psybeam")]
    SequencePsybeam,
    #[serde(rename = "sequence_psychic")]
    SequencePsychic,
    #[serde(rename = "sequence_psychic_fangs")]
    SequencePsychicFangs,
    #[serde(rename = "sequence_psycho_boost")]
    SequencePsychoBoost,
    #[serde(rename = "sequence_psycho_cut_fast")]
    SequencePsychoCutFast,
    #[serde(rename = "sequence_psyshock")]
    SequencePsyshock,
    #[serde(rename = "sequence_psystrike")]
    SequencePsystrike,
    #[serde(rename = "sequence_psywave")]
    SequencePsywave,
    #[serde(rename = "sequence_pyroball")]
    SequencePyroball,
    #[serde(rename = "sequence_quick_attack_fast")]
    SequenceQuickAttackFast,
    #[serde(rename = "sequence_rage_fist")]
    SequenceRageFist,
    #[serde(rename = "sequence_razor_leaf_fast")]
    SequenceRazorLeafFast,
    #[serde(rename = "sequence_razor_shell")]
    SequenceRazorShell,
    #[serde(rename = "sequence_rest")]
    SequenceRest,
    #[serde(rename = "sequence_return")]
    SequenceReturn,
    #[serde(rename = "sequence_roar_of_time")]
    SequenceRoarOfTime,
    #[serde(rename = "sequence_rock_blast")]
    SequenceRockBlast,
    #[serde(rename = "sequence_rock_slide")]
    SequenceRockSlide,
    #[serde(rename = "sequence_rock_smash_fast")]
    SequenceRockSmashFast,
    #[serde(rename = "sequence_rock_throw_fast")]
    SequenceRockThrowFast,
    #[serde(rename = "sequence_rock_tomb")]
    SequenceRockTomb,
    #[serde(rename = "sequence_rock_wrecker")]
    SequenceRockWrecker,
    #[serde(rename = "sequence_rollout_fast")]
    SequenceRolloutFast,
    #[serde(rename = "sequence_sacred_fire")]
    SequenceSacredFire,
    #[serde(rename = "sequence_sacred_sword")]
    SequenceSacredSword,
    #[serde(rename = "sequence_sand_attack")]
    SequenceSandAttack,
    #[serde(rename = "sequence_sand_tomb")]
    SequenceSandTomb,
    #[serde(rename = "sequence_sandsear_storm")]
    SequenceSandsearStorm,
    #[serde(rename = "sequence_scald")]
    SequenceScald,
    #[serde(rename = "sequence_scald_blastoise")]
    SequenceScaldBlastoise,
    #[serde(rename = "sequence_scorching_sands")]
    SequenceScorchingSands,
    #[serde(rename = "sequence_scratch_fast")]
    SequenceScratchFast,
    #[serde(rename = "sequence_secret_sword")]
    SequenceSecretSword,
    #[serde(rename = "sequence_seed_bomb")]
    SequenceSeedBomb,
    #[serde(rename = "sequence_seed_flare")]
    SequenceSeedFlare,
    #[serde(rename = "sequence_seq_combat_faint")]
    SequenceSeqCombatFaint,
    #[serde(rename = "sequence_seq_combat_faint_ending")]
    SequenceSeqCombatFaintEnding,
    #[serde(rename = "sequence_seq_combat_return")]
    SequenceSeqCombatReturn,
    #[serde(rename = "sequence_seq_ding")]
    SequenceSeqDing,
    #[serde(rename = "sequence_seq_dramatic_faint")]
    SequenceSeqDramaticFaint,
    #[serde(rename = "sequence_seq_faint")]
    SequenceSeqFaint,
    #[serde(rename = "sequence_seq_fort_faint")]
    SequenceSeqFortFaint,
    #[serde(rename = "sequence_seq_intro")]
    SequenceSeqIntro,
    #[serde(rename = "sequence_seq_outro")]
    SequenceSeqOutro,
    #[serde(rename = "sequence_seq_return")]
    SequenceSeqReturn,
    #[serde(rename = "sequence_seq_transform")]
    SequenceSeqTransform,
    #[serde(rename = "sequence_seq_transform_dark")]
    SequenceSeqTransformDark,
    #[serde(rename = "sequence_seq_transform_fast")]
    SequenceSeqTransformFast,
    #[serde(rename = "sequence_shadow_ball")]
    SequenceShadowBall,
    #[serde(rename = "sequence_shadow_bone")]
    SequenceShadowBone,
    #[serde(rename = "sequence_shadow_claw_fast")]
    SequenceShadowClawFast,
    #[serde(rename = "sequence_shadow_force")]
    SequenceShadowForce,
    #[serde(rename = "sequence_shadow_punch")]
    SequenceShadowPunch,
    #[serde(rename = "sequence_shadow_sneak")]
    SequenceShadowSneak,
    #[serde(rename = "sequence_signal_beam")]
    SequenceSignalBeam,
    #[serde(rename = "sequence_silver_wind")]
    SequenceSilverWind,
    #[serde(rename = "sequence_skull_bash")]
    SequenceSkullBash,
    #[serde(rename = "sequence_sky_attack")]
    SequenceSkyAttack,
    #[serde(rename = "sequence_sludge")]
    SequenceSludge,
    #[serde(rename = "sequence_sludge_bomb")]
    SequenceSludgeBomb,
    #[serde(rename = "sequence_sludge_wave")]
    SequenceSludgeWave,
    #[serde(rename = "sequence_smack_down")]
    SequenceSmackDown,
    #[serde(rename = "sequence_smack_down_fast")]
    SequenceSmackDownFast,
    #[serde(rename = "sequence_snarl_fast")]
    SequenceSnarlFast,
    #[serde(rename = "sequence_snipe_shot")]
    SequenceSnipeShot,
    #[serde(rename = "sequence_solar_beam")]
    SequenceSolarBeam,
    #[serde(rename = "sequence_spacial_rend")]
    SequenceSpacialRend,
    #[serde(rename = "sequence_spark_fast")]
    SequenceSparkFast,
    #[serde(rename = "sequence_sparkling_aria")]
    SequenceSparklingAria,
    #[serde(rename = "sequence_spirit_shackle")]
    SequenceSpiritShackle,
    #[serde(rename = "sequence_splash_fast")]
    SequenceSplashFast,
    #[serde(rename = "sequence_steel_wing_fast")]
    SequenceSteelWingFast,
    #[serde(rename = "sequence_stomp")]
    SequenceStomp,
    #[serde(rename = "sequence_stone_edge")]
    SequenceStoneEdge,
    #[serde(rename = "sequence_struggle")]
    SequenceStruggle,
    #[serde(rename = "sequence_struggle_bug_fast")]
    SequenceStruggleBugFast,
    #[serde(rename = "sequence_submission")]
    SequenceSubmission,
    #[serde(rename = "sequence_sucker_punch_fast")]
    SequenceSuckerPunchFast,
    #[serde(rename = "sequence_sunsteel_strike")]
    SequenceSunsteelStrike,
    #[serde(rename = "sequence_super_power")]
    SequenceSuperPower,
    #[serde(rename = "sequence_surf")]
    SequenceSurf,
    #[serde(rename = "sequence_swift")]
    SequenceSwift,
    #[serde(rename = "sequence_synchronoise")]
    SequenceSynchronoise,
    #[serde(rename = "sequence_tackle_fast")]
    SequenceTackleFast,
    #[serde(rename = "sequence_take_down_fast")]
    SequenceTakeDownFast,
    #[serde(rename = "sequence_techno_blast_burn")]
    SequenceTechnoBlastBurn,
    #[serde(rename = "sequence_techno_blast_chill")]
    SequenceTechnoBlastChill,
    #[serde(rename = "sequence_techno_blast_normal")]
    SequenceTechnoBlastNormal,
    #[serde(rename = "sequence_techno_blast_shock")]
    SequenceTechnoBlastShock,
    #[serde(rename = "sequence_techno_blast_water")]
    SequenceTechnoBlastWater,
    #[serde(rename = "sequence_thunder")]
    SequenceThunder,
    #[serde(rename = "sequence_thunder_cage")]
    SequenceThunderCage,
    #[serde(rename = "sequence_thunder_fang_fast")]
    SequenceThunderFangFast,
    #[serde(rename = "sequence_thunder_punch")]
    SequenceThunderPunch,
    #[serde(rename = "sequence_thunder_shock_fast")]
    SequenceThunderShockFast,
    #[serde(rename = "sequence_thunderbolt")]
    SequenceThunderbolt,
    #[serde(rename = "sequence_torch_song")]
    SequenceTorchSong,
    #[serde(rename = "sequence_trailblaze")]
    SequenceTrailblaze,
    #[serde(rename = "sequence_tri_attack")]
    SequenceTriAttack,
    #[serde(rename = "sequence_triple_axel")]
    SequenceTripleAxel,
    #[serde(rename = "sequence_twister")]
    SequenceTwister,
    #[serde(rename = "sequence_upper_hand")]
    SequenceUpperHand,
    #[serde(rename = "sequence_v_create")]
    SequenceVCreate,
    #[serde(rename = "sequence_vice_grip")]
    SequenceViceGrip,
    #[serde(rename = "sequence_vine_whip_fast")]
    SequenceVineWhipFast,
    #[serde(rename = "sequence_volt_switch_fast")]
    SequenceVoltSwitchFast,
    #[serde(rename = "sequence_volt_tackle")]
    SequenceVoltTackle,
    #[serde(rename = "sequence_water_gun_fast")]
    SequenceWaterGunFast,
    #[serde(rename = "sequence_water_gun_fast_blastoise")]
    SequenceWaterGunFastBlastoise,
    #[serde(rename = "sequence_water_pulse")]
    SequenceWaterPulse,
    #[serde(rename = "sequence_water_shuriken_fast")]
    SequenceWaterShurikenFast,
    #[serde(rename = "sequence_waterfall_fast")]
    SequenceWaterfallFast,
    #[serde(rename = "sequence_weather_ball_fire")]
    SequenceWeatherBallFire,
    #[serde(rename = "sequence_weather_ball_ice")]
    SequenceWeatherBallIce,
    #[serde(rename = "sequence_weather_ball_normal")]
    SequenceWeatherBallNormal,
    #[serde(rename = "sequence_weather_ball_rock")]
    SequenceWeatherBallRock,
    #[serde(rename = "sequence_weather_ball_water")]
    SequenceWeatherBallWater,
    #[serde(rename = "sequence_wild_charge")]
    SequenceWildCharge,
    #[serde(rename = "sequence_wildbolt_storm")]
    SequenceWildboltStorm,
    #[serde(rename = "sequence_wing_attack_fast")]
    SequenceWingAttackFast,
    #[serde(rename = "sequence_wrap")]
    SequenceWrap,
    #[serde(rename = "sequence_wrap_green")]
    SequenceWrapGreen,
    #[serde(rename = "sequence_wrap_pink")]
    SequenceWrapPink,
    #[serde(rename = "sequence_x_scissor")]
    SequenceXScissor,
    #[serde(rename = "sequence_yawn_fast")]
    SequenceYawnFast,
    #[serde(rename = "sequence_zap_cannon")]
    SequenceZapCannon,
    #[serde(rename = "sequence_zen_headbutt_fast")]
    SequenceZenHeadbuttFast,
}

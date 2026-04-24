export interface MoveSequenceSettings<T extends string> {
	templateId: T;
	data: MoveSequenceSettingsData<T>;
}

export interface MoveSequenceSettingsData<T extends string> {
	templateId: T;
	moveSequenceSettings: unknown;
}

export type MoveSequenceSettingsAcidFast = MoveSequenceSettings<"sequence_acid_fast">;
export type MoveSequenceSettingsAcidSpray = MoveSequenceSettings<"sequence_acid_spray">;
export type MoveSequenceSettingsAcrobatics = MoveSequenceSettings<"sequence_acrobatics">;
export type MoveSequenceSettingsAerialAce = MoveSequenceSettings<"sequence_aerial_ace">;
export type MoveSequenceSettingsAeroblast = MoveSequenceSettings<"sequence_aeroblast">;
export type MoveSequenceSettingsAirCutter = MoveSequenceSettings<"sequence_air_cutter">;
export type MoveSequenceSettingsAirSlashFast = MoveSequenceSettings<"sequence_air_slash_fast">;
export type MoveSequenceSettingsAncientPower = MoveSequenceSettings<"sequence_ancient_power">;
export type MoveSequenceSettingsAquaJet = MoveSequenceSettings<"sequence_aqua_jet">;
export type MoveSequenceSettingsAquaStep = MoveSequenceSettings<"sequence_aqua_step">;
export type MoveSequenceSettingsAquaTail = MoveSequenceSettings<"sequence_aqua_tail">;
export type MoveSequenceSettingsAstonishFast = MoveSequenceSettings<"sequence_astonish_fast">;
export type MoveSequenceSettingsAuraSphere = MoveSequenceSettings<"sequence_aura_sphere">;
export type MoveSequenceSettingsAuraWheelDark = MoveSequenceSettings<"sequence_aura_wheel_dark">;
export type MoveSequenceSettingsAuraWheelElectric = MoveSequenceSettings<"sequence_aura_wheel_electric">;
export type MoveSequenceSettingsAuroraBeam = MoveSequenceSettings<"sequence_aurora_beam">;
export type MoveSequenceSettingsAvalanche = MoveSequenceSettings<"sequence_avalanche">;
export type MoveSequenceSettingsBeakBlast = MoveSequenceSettings<"sequence_beak_blast">;
export type MoveSequenceSettingsBehemothBash = MoveSequenceSettings<"sequence_behemoth_bash">;
export type MoveSequenceSettingsBehemothBlade = MoveSequenceSettings<"sequence_behemoth_blade">;
export type MoveSequenceSettingsBiteFast = MoveSequenceSettings<"sequence_bite_fast">;
export type MoveSequenceSettingsBlastBurn = MoveSequenceSettings<"sequence_blast_burn">;
export type MoveSequenceSettingsBlazeKick = MoveSequenceSettings<"sequence_blaze_kick">;
export type MoveSequenceSettingsBleakwindStorm = MoveSequenceSettings<"sequence_bleakwind_storm">;
export type MoveSequenceSettingsBlizzard = MoveSequenceSettings<"sequence_blizzard">;
export type MoveSequenceSettingsBodySlam = MoveSequenceSettings<"sequence_body_slam">;
export type MoveSequenceSettingsBoneClub = MoveSequenceSettings<"sequence_bone_club">;
export type MoveSequenceSettingsBoomburst = MoveSequenceSettings<"sequence_boomburst">;
export type MoveSequenceSettingsBraveBird = MoveSequenceSettings<"sequence_brave_bird">;
export type MoveSequenceSettingsBreakingSwipe = MoveSequenceSettings<"sequence_breaking_swipe">;
export type MoveSequenceSettingsBrickBreak = MoveSequenceSettings<"sequence_brick_break">;
export type MoveSequenceSettingsBrine = MoveSequenceSettings<"sequence_brine">;
export type MoveSequenceSettingsBrutalSwing = MoveSequenceSettings<"sequence_brutal_swing">;
export type MoveSequenceSettingsBubbleBeam = MoveSequenceSettings<"sequence_bubble_beam">;
export type MoveSequenceSettingsBubbleFast = MoveSequenceSettings<"sequence_bubble_fast">;
export type MoveSequenceSettingsBugBiteFast = MoveSequenceSettings<"sequence_bug_bite_fast">;
export type MoveSequenceSettingsBugBuzz = MoveSequenceSettings<"sequence_bug_buzz">;
export type MoveSequenceSettingsBulldoze = MoveSequenceSettings<"sequence_bulldoze">;
export type MoveSequenceSettingsBulletPunchFast = MoveSequenceSettings<"sequence_bullet_punch_fast">;
export type MoveSequenceSettingsBulletSeedFast = MoveSequenceSettings<"sequence_bullet_seed_fast">;
export type MoveSequenceSettingsChargeBeamFast = MoveSequenceSettings<"sequence_charge_beam_fast">;
export type MoveSequenceSettingsCharmFast = MoveSequenceSettings<"sequence_charm_fast">;
export type MoveSequenceSettingsChillingWater = MoveSequenceSettings<"sequence_chilling_water">;
export type MoveSequenceSettingsClangingScales = MoveSequenceSettings<"sequence_clanging_scales">;
export type MoveSequenceSettingsCloseCombat = MoveSequenceSettings<"sequence_close_combat">;
export type MoveSequenceSettingsConfusionFast = MoveSequenceSettings<"sequence_confusion_fast">;
export type MoveSequenceSettingsCounterFast = MoveSequenceSettings<"sequence_counter_fast">;
export type MoveSequenceSettingsCrabhammer = MoveSequenceSettings<"sequence_crabhammer">;
export type MoveSequenceSettingsCrossChop = MoveSequenceSettings<"sequence_cross_chop">;
export type MoveSequenceSettingsCrossPoison = MoveSequenceSettings<"sequence_cross_poison">;
export type MoveSequenceSettingsCrunch = MoveSequenceSettings<"sequence_crunch">;
export type MoveSequenceSettingsCrushClaw = MoveSequenceSettings<"sequence_crush_claw">;
export type MoveSequenceSettingsCrushGrip = MoveSequenceSettings<"sequence_crush_grip">;
export type MoveSequenceSettingsCutFast = MoveSequenceSettings<"sequence_cut_fast">;
export type MoveSequenceSettingsDarkPulse = MoveSequenceSettings<"sequence_dark_pulse">;
export type MoveSequenceSettingsDarkestLariat = MoveSequenceSettings<"sequence_darkest_lariat">;
export type MoveSequenceSettingsDazzlingGleam = MoveSequenceSettings<"sequence_dazzling_gleam">;
export type MoveSequenceSettingsDefault = MoveSequenceSettings<"sequence_default">;
export type MoveSequenceSettingsDig = MoveSequenceSettings<"sequence_dig">;
export type MoveSequenceSettingsDisarmingVoice = MoveSequenceSettings<"sequence_disarming_voice">;
export type MoveSequenceSettingsDischarge = MoveSequenceSettings<"sequence_discharge">;
export type MoveSequenceSettingsDoomDesire = MoveSequenceSettings<"sequence_doom_desire">;
export type MoveSequenceSettingsDoubleIronBash = MoveSequenceSettings<"sequence_double_iron_bash">;
export type MoveSequenceSettingsDoubleKickFast = MoveSequenceSettings<"sequence_double_kick_fast">;
export type MoveSequenceSettingsDracoMeteor = MoveSequenceSettings<"sequence_draco_meteor">;
export type MoveSequenceSettingsDragonAscent = MoveSequenceSettings<"sequence_dragon_ascent">;
export type MoveSequenceSettingsDragonBreathFast = MoveSequenceSettings<"sequence_dragon_breath_fast">;
export type MoveSequenceSettingsDragonClaw = MoveSequenceSettings<"sequence_dragon_claw">;
export type MoveSequenceSettingsDragonEnergy = MoveSequenceSettings<"sequence_dragon_energy">;
export type MoveSequenceSettingsDragonPulse = MoveSequenceSettings<"sequence_dragon_pulse">;
export type MoveSequenceSettingsDragonTailFast = MoveSequenceSettings<"sequence_dragon_tail_fast">;
export type MoveSequenceSettingsDrainPunch = MoveSequenceSettings<"sequence_drain_punch">;
export type MoveSequenceSettingsDrainingKiss = MoveSequenceSettings<"sequence_draining_kiss">;
export type MoveSequenceSettingsDrillPeck = MoveSequenceSettings<"sequence_drill_peck">;
export type MoveSequenceSettingsDrillRun = MoveSequenceSettings<"sequence_drill_run">;
export type MoveSequenceSettingsDrumBeating = MoveSequenceSettings<"sequence_drum_beating">;
export type MoveSequenceSettingsDynamaxCannon = MoveSequenceSettings<"sequence_dynamax_cannon">;
export type MoveSequenceSettingsDynamicPunch = MoveSequenceSettings<"sequence_dynamic_punch">;
export type MoveSequenceSettingsEarthPower = MoveSequenceSettings<"sequence_earth_power">;
export type MoveSequenceSettingsEarthquake = MoveSequenceSettings<"sequence_earthquake">;
export type MoveSequenceSettingsEmberFast = MoveSequenceSettings<"sequence_ember_fast">;
export type MoveSequenceSettingsEnergyBall = MoveSequenceSettings<"sequence_energy_ball">;
export type MoveSequenceSettingsExtrasensoryFast = MoveSequenceSettings<"sequence_extrasensory_fast">;
export type MoveSequenceSettingsFairyWindFast = MoveSequenceSettings<"sequence_fairy_wind_fast">;
export type MoveSequenceSettingsFeatherDance = MoveSequenceSettings<"sequence_feather_dance">;
export type MoveSequenceSettingsFeintAttackFast = MoveSequenceSettings<"sequence_feint_attack_fast">;
export type MoveSequenceSettingsFellStinger = MoveSequenceSettings<"sequence_fell_stinger">;
export type MoveSequenceSettingsFireBlast = MoveSequenceSettings<"sequence_fire_blast">;
export type MoveSequenceSettingsFireFangFast = MoveSequenceSettings<"sequence_fire_fang_fast">;
export type MoveSequenceSettingsFirePunch = MoveSequenceSettings<"sequence_fire_punch">;
export type MoveSequenceSettingsFireSpinFast = MoveSequenceSettings<"sequence_fire_spin_fast">;
export type MoveSequenceSettingsFissure = MoveSequenceSettings<"sequence_fissure">;
export type MoveSequenceSettingsFlameBurst = MoveSequenceSettings<"sequence_flame_burst">;
export type MoveSequenceSettingsFlameCharge = MoveSequenceSettings<"sequence_flame_charge">;
export type MoveSequenceSettingsFlameWheel = MoveSequenceSettings<"sequence_flame_wheel">;
export type MoveSequenceSettingsFlamethrower = MoveSequenceSettings<"sequence_flamethrower">;
export type MoveSequenceSettingsFlashCannon = MoveSequenceSettings<"sequence_flash_cannon">;
export type MoveSequenceSettingsFlowerTrick = MoveSequenceSettings<"sequence_flower_trick">;
export type MoveSequenceSettingsFly = MoveSequenceSettings<"sequence_fly">;
export type MoveSequenceSettingsFocusBlast = MoveSequenceSettings<"sequence_focus_blast">;
export type MoveSequenceSettingsForcePalmFast = MoveSequenceSettings<"sequence_force_palm_fast">;
export type MoveSequenceSettingsFoulPlay = MoveSequenceSettings<"sequence_foul_play">;
export type MoveSequenceSettingsFreezeShock = MoveSequenceSettings<"sequence_freeze_shock">;
export type MoveSequenceSettingsFrenzyPlant = MoveSequenceSettings<"sequence_frenzy_plant">;
export type MoveSequenceSettingsFrostBreathFast = MoveSequenceSettings<"sequence_frost_breath_fast">;
export type MoveSequenceSettingsFrustration = MoveSequenceSettings<"sequence_frustration">;
export type MoveSequenceSettingsFuryCutterFast = MoveSequenceSettings<"sequence_fury_cutter_fast">;
export type MoveSequenceSettingsFusionBolt = MoveSequenceSettings<"sequence_fusion_bolt">;
export type MoveSequenceSettingsFusionFlare = MoveSequenceSettings<"sequence_fusion_flare">;
export type MoveSequenceSettingsFuturesight = MoveSequenceSettings<"sequence_futuresight">;
export type MoveSequenceSettingsGeomancyFast = MoveSequenceSettings<"sequence_geomancy_fast">;
export type MoveSequenceSettingsGigaDrain = MoveSequenceSettings<"sequence_giga_drain">;
export type MoveSequenceSettingsGigaImpact = MoveSequenceSettings<"sequence_giga_impact">;
export type MoveSequenceSettingsGigatonHammer = MoveSequenceSettings<"sequence_gigaton_hammer">;
export type MoveSequenceSettingsGlaciate = MoveSequenceSettings<"sequence_glaciate">;
export type MoveSequenceSettingsGrassKnot = MoveSequenceSettings<"sequence_grass_knot">;
export type MoveSequenceSettingsGunkShot = MoveSequenceSettings<"sequence_gunk_shot">;
export type MoveSequenceSettingsGustFast = MoveSequenceSettings<"sequence_gust_fast">;
export type MoveSequenceSettingsGyroBall = MoveSequenceSettings<"sequence_gyro_ball">;
export type MoveSequenceSettingsHeartStamp = MoveSequenceSettings<"sequence_heart_stamp">;
export type MoveSequenceSettingsHeatWave = MoveSequenceSettings<"sequence_heat_wave">;
export type MoveSequenceSettingsHeavySlam = MoveSequenceSettings<"sequence_heavy_slam">;
export type MoveSequenceSettingsHexFast = MoveSequenceSettings<"sequence_hex_fast">;
export type MoveSequenceSettingsHiddenPowerFast = MoveSequenceSettings<"sequence_hidden_power_fast">;
export type MoveSequenceSettingsHighHorsepower = MoveSequenceSettings<"sequence_high_horsepower">;
export type MoveSequenceSettingsHighJumpKick = MoveSequenceSettings<"sequence_high_jump_kick">;
export type MoveSequenceSettingsHornAttack = MoveSequenceSettings<"sequence_horn_attack">;
export type MoveSequenceSettingsHornDrill = MoveSequenceSettings<"sequence_horn_drill">;
export type MoveSequenceSettingsHurricane = MoveSequenceSettings<"sequence_hurricane">;
export type MoveSequenceSettingsHydroCannon = MoveSequenceSettings<"sequence_hydro_cannon">;
export type MoveSequenceSettingsHydroPump = MoveSequenceSettings<"sequence_hydro_pump">;
export type MoveSequenceSettingsHydroPumpBlastoise = MoveSequenceSettings<"sequence_hydro_pump_blastoise">;
export type MoveSequenceSettingsHyperBeam = MoveSequenceSettings<"sequence_hyper_beam">;
export type MoveSequenceSettingsHyperFang = MoveSequenceSettings<"sequence_hyper_fang">;
export type MoveSequenceSettingsIceBeam = MoveSequenceSettings<"sequence_ice_beam">;
export type MoveSequenceSettingsIceBurn = MoveSequenceSettings<"sequence_ice_burn">;
export type MoveSequenceSettingsIceFangFast = MoveSequenceSettings<"sequence_ice_fang_fast">;
export type MoveSequenceSettingsIcePunch = MoveSequenceSettings<"sequence_ice_punch">;
export type MoveSequenceSettingsIceShardFast = MoveSequenceSettings<"sequence_ice_shard_fast">;
export type MoveSequenceSettingsIcicleSpear = MoveSequenceSettings<"sequence_icicle_spear">;
export type MoveSequenceSettingsIcyWind = MoveSequenceSettings<"sequence_icy_wind">;
export type MoveSequenceSettingsIncinerateFast = MoveSequenceSettings<"sequence_incinerate_fast">;
export type MoveSequenceSettingsInfestationFast = MoveSequenceSettings<"sequence_infestation_fast">;
export type MoveSequenceSettingsIronHead = MoveSequenceSettings<"sequence_iron_head">;
export type MoveSequenceSettingsIronTailFast = MoveSequenceSettings<"sequence_iron_tail_fast">;
export type MoveSequenceSettingsKarateChopFast = MoveSequenceSettings<"sequence_karate_chop_fast">;
export type MoveSequenceSettingsLastResort = MoveSequenceSettings<"sequence_last_resort">;
export type MoveSequenceSettingsLeafBlade = MoveSequenceSettings<"sequence_leaf_blade">;
export type MoveSequenceSettingsLeafStorm = MoveSequenceSettings<"sequence_leaf_storm">;
export type MoveSequenceSettingsLeafTornado = MoveSequenceSettings<"sequence_leaf_tornado">;
export type MoveSequenceSettingsLeafageFast = MoveSequenceSettings<"sequence_leafage_fast">;
export type MoveSequenceSettingsLeechLife = MoveSequenceSettings<"sequence_leech_life">;
export type MoveSequenceSettingsLickFast = MoveSequenceSettings<"sequence_lick_fast">;
export type MoveSequenceSettingsLiquidation = MoveSequenceSettings<"sequence_liquidation">;
export type MoveSequenceSettingsLockOnFast = MoveSequenceSettings<"sequence_lock_on_fast">;
export type MoveSequenceSettingsLowKickFast = MoveSequenceSettings<"sequence_low_kick_fast">;
export type MoveSequenceSettingsLowSweep = MoveSequenceSettings<"sequence_low_sweep">;
export type MoveSequenceSettingsLunge = MoveSequenceSettings<"sequence_lunge">;
export type MoveSequenceSettingsLusterPurge = MoveSequenceSettings<"sequence_luster_purge">;
export type MoveSequenceSettingsMagicalLeafFast = MoveSequenceSettings<"sequence_magical_leaf_fast">;
export type MoveSequenceSettingsMagmaStorm = MoveSequenceSettings<"sequence_magma_storm">;
export type MoveSequenceSettingsMagnetBomb = MoveSequenceSettings<"sequence_magnet_bomb">;
export type MoveSequenceSettingsMegaDrain = MoveSequenceSettings<"sequence_mega_drain">;
export type MoveSequenceSettingsMegahorn = MoveSequenceSettings<"sequence_megahorn">;
export type MoveSequenceSettingsMetalClawFast = MoveSequenceSettings<"sequence_metal_claw_fast">;
export type MoveSequenceSettingsMetalSound = MoveSequenceSettings<"sequence_metal_sound">;
export type MoveSequenceSettingsMeteorBeam = MoveSequenceSettings<"sequence_meteor_beam">;
export type MoveSequenceSettingsMeteorMash = MoveSequenceSettings<"sequence_meteor_mash">;
export type MoveSequenceSettingsMindBlown = MoveSequenceSettings<"sequence_mind_blown">;
export type MoveSequenceSettingsMirrorCoat = MoveSequenceSettings<"sequence_mirror_coat">;
export type MoveSequenceSettingsMirrorShot = MoveSequenceSettings<"sequence_mirror_shot">;
export type MoveSequenceSettingsMistBall = MoveSequenceSettings<"sequence_mist_ball">;
export type MoveSequenceSettingsMoonblast = MoveSequenceSettings<"sequence_moonblast">;
export type MoveSequenceSettingsMoongeistBeam = MoveSequenceSettings<"sequence_moongeist_beam">;
export type MoveSequenceSettingsMudBomb = MoveSequenceSettings<"sequence_mud_bomb">;
export type MoveSequenceSettingsMudShotFast = MoveSequenceSettings<"sequence_mud_shot_fast">;
export type MoveSequenceSettingsMudSlapFast = MoveSequenceSettings<"sequence_mud_slap_fast">;
export type MoveSequenceSettingsMuddyWater = MoveSequenceSettings<"sequence_muddy_water">;
export type MoveSequenceSettingsMystFire = MoveSequenceSettings<"sequence_myst_fire">;
export type MoveSequenceSettingsNaturesMadness = MoveSequenceSettings<"sequence_natures_madness">;
export type MoveSequenceSettingsNightShade = MoveSequenceSettings<"sequence_night_shade">;
export type MoveSequenceSettingsNightSlash = MoveSequenceSettings<"sequence_night_slash">;
export type MoveSequenceSettingsOblivionWing = MoveSequenceSettings<"sequence_oblivion_wing">;
export type MoveSequenceSettingsObstruct = MoveSequenceSettings<"sequence_obstruct">;
export type MoveSequenceSettingsOctazooka = MoveSequenceSettings<"sequence_octazooka">;
export type MoveSequenceSettingsOminousWind = MoveSequenceSettings<"sequence_ominous_wind">;
export type MoveSequenceSettingsOriginPulse = MoveSequenceSettings<"sequence_origin_pulse">;
export type MoveSequenceSettingsOutrage = MoveSequenceSettings<"sequence_outrage">;
export type MoveSequenceSettingsOverheat = MoveSequenceSettings<"sequence_overheat">;
export type MoveSequenceSettingsParabolicCharge = MoveSequenceSettings<"sequence_parabolic_charge">;
export type MoveSequenceSettingsPayback = MoveSequenceSettings<"sequence_payback">;
export type MoveSequenceSettingsPeckFast = MoveSequenceSettings<"sequence_peck_fast">;
export type MoveSequenceSettingsPetalBlizzard = MoveSequenceSettings<"sequence_petal_blizzard">;
export type MoveSequenceSettingsPlayRough = MoveSequenceSettings<"sequence_play_rough">;
export type MoveSequenceSettingsPoisonFang = MoveSequenceSettings<"sequence_poison_fang">;
export type MoveSequenceSettingsPoisonJabFast = MoveSequenceSettings<"sequence_poison_jab_fast">;
export type MoveSequenceSettingsPoisonStingFast = MoveSequenceSettings<"sequence_poison_sting_fast">;
export type MoveSequenceSettingsPoltergeist = MoveSequenceSettings<"sequence_poltergeist">;
export type MoveSequenceSettingsPoundFast = MoveSequenceSettings<"sequence_pound_fast">;
export type MoveSequenceSettingsPowderSnowFast = MoveSequenceSettings<"sequence_powder_snow_fast">;
export type MoveSequenceSettingsPowerGem = MoveSequenceSettings<"sequence_power_gem">;
export type MoveSequenceSettingsPowerUpPunch = MoveSequenceSettings<"sequence_power_up_punch">;
export type MoveSequenceSettingsPowerWhip = MoveSequenceSettings<"sequence_power_whip">;
export type MoveSequenceSettingsPrecipiceBlades = MoveSequenceSettings<"sequence_precipice_blades">;
export type MoveSequenceSettingsPresentFast = MoveSequenceSettings<"sequence_present_fast">;
export type MoveSequenceSettingsPsybeam = MoveSequenceSettings<"sequence_psybeam">;
export type MoveSequenceSettingsPsychic = MoveSequenceSettings<"sequence_psychic">;
export type MoveSequenceSettingsPsychicFangs = MoveSequenceSettings<"sequence_psychic_fangs">;
export type MoveSequenceSettingsPsychoBoost = MoveSequenceSettings<"sequence_psycho_boost">;
export type MoveSequenceSettingsPsychoCutFast = MoveSequenceSettings<"sequence_psycho_cut_fast">;
export type MoveSequenceSettingsPsyshock = MoveSequenceSettings<"sequence_psyshock">;
export type MoveSequenceSettingsPsystrike = MoveSequenceSettings<"sequence_psystrike">;
export type MoveSequenceSettingsPsywave = MoveSequenceSettings<"sequence_psywave">;
export type MoveSequenceSettingsPyroball = MoveSequenceSettings<"sequence_pyroball">;
export type MoveSequenceSettingsQuickAttackFast = MoveSequenceSettings<"sequence_quick_attack_fast">;
export type MoveSequenceSettingsRageFist = MoveSequenceSettings<"sequence_rage_fist">;
export type MoveSequenceSettingsRazorLeafFast = MoveSequenceSettings<"sequence_razor_leaf_fast">;
export type MoveSequenceSettingsRazorShell = MoveSequenceSettings<"sequence_razor_shell">;
export type MoveSequenceSettingsRest = MoveSequenceSettings<"sequence_rest">;
export type MoveSequenceSettingsReturn = MoveSequenceSettings<"sequence_return">;
export type MoveSequenceSettingsRoarOfTime = MoveSequenceSettings<"sequence_roar_of_time">;
export type MoveSequenceSettingsRockBlast = MoveSequenceSettings<"sequence_rock_blast">;
export type MoveSequenceSettingsRockSlide = MoveSequenceSettings<"sequence_rock_slide">;
export type MoveSequenceSettingsRockSmashFast = MoveSequenceSettings<"sequence_rock_smash_fast">;
export type MoveSequenceSettingsRockThrowFast = MoveSequenceSettings<"sequence_rock_throw_fast">;
export type MoveSequenceSettingsRockTomb = MoveSequenceSettings<"sequence_rock_tomb">;
export type MoveSequenceSettingsRockWrecker = MoveSequenceSettings<"sequence_rock_wrecker">;
export type MoveSequenceSettingsRolloutFast = MoveSequenceSettings<"sequence_rollout_fast">;
export type MoveSequenceSettingsSacredFire = MoveSequenceSettings<"sequence_sacred_fire">;
export type MoveSequenceSettingsSacredSword = MoveSequenceSettings<"sequence_sacred_sword">;
export type MoveSequenceSettingsSandAttack = MoveSequenceSettings<"sequence_sand_attack">;
export type MoveSequenceSettingsSandTomb = MoveSequenceSettings<"sequence_sand_tomb">;
export type MoveSequenceSettingsSandsearStorm = MoveSequenceSettings<"sequence_sandsear_storm">;
export type MoveSequenceSettingsScald = MoveSequenceSettings<"sequence_scald">;
export type MoveSequenceSettingsScaldBlastoise = MoveSequenceSettings<"sequence_scald_blastoise">;
export type MoveSequenceSettingsScorchingSands = MoveSequenceSettings<"sequence_scorching_sands">;
export type MoveSequenceSettingsScratchFast = MoveSequenceSettings<"sequence_scratch_fast">;
export type MoveSequenceSettingsSecretSword = MoveSequenceSettings<"sequence_secret_sword">;
export type MoveSequenceSettingsSeedBomb = MoveSequenceSettings<"sequence_seed_bomb">;
export type MoveSequenceSettingsSeedFlare = MoveSequenceSettings<"sequence_seed_flare">;
export type MoveSequenceSettingsSeqCombatFaint = MoveSequenceSettings<"sequence_seq_combat_faint">;
export type MoveSequenceSettingsSeqCombatFaintEnding = MoveSequenceSettings<"sequence_seq_combat_faint_ending">;
export type MoveSequenceSettingsSeqCombatReturn = MoveSequenceSettings<"sequence_seq_combat_return">;
export type MoveSequenceSettingsSeqDing = MoveSequenceSettings<"sequence_seq_ding">;
export type MoveSequenceSettingsSeqDramaticFaint = MoveSequenceSettings<"sequence_seq_dramatic_faint">;
export type MoveSequenceSettingsSeqFaint = MoveSequenceSettings<"sequence_seq_faint">;
export type MoveSequenceSettingsSeqFortFaint = MoveSequenceSettings<"sequence_seq_fort_faint">;
export type MoveSequenceSettingsSeqIntro = MoveSequenceSettings<"sequence_seq_intro">;
export type MoveSequenceSettingsSeqOutro = MoveSequenceSettings<"sequence_seq_outro">;
export type MoveSequenceSettingsSeqReturn = MoveSequenceSettings<"sequence_seq_return">;
export type MoveSequenceSettingsSeqTransform = MoveSequenceSettings<"sequence_seq_transform">;
export type MoveSequenceSettingsSeqTransformDark = MoveSequenceSettings<"sequence_seq_transform_dark">;
export type MoveSequenceSettingsSeqTransformFast = MoveSequenceSettings<"sequence_seq_transform_fast">;
export type MoveSequenceSettingsShadowBall = MoveSequenceSettings<"sequence_shadow_ball">;
export type MoveSequenceSettingsShadowBone = MoveSequenceSettings<"sequence_shadow_bone">;
export type MoveSequenceSettingsShadowClawFast = MoveSequenceSettings<"sequence_shadow_claw_fast">;
export type MoveSequenceSettingsShadowForce = MoveSequenceSettings<"sequence_shadow_force">;
export type MoveSequenceSettingsShadowPunch = MoveSequenceSettings<"sequence_shadow_punch">;
export type MoveSequenceSettingsShadowSneak = MoveSequenceSettings<"sequence_shadow_sneak">;
export type MoveSequenceSettingsSignalBeam = MoveSequenceSettings<"sequence_signal_beam">;
export type MoveSequenceSettingsSilverWind = MoveSequenceSettings<"sequence_silver_wind">;
export type MoveSequenceSettingsSkullBash = MoveSequenceSettings<"sequence_skull_bash">;
export type MoveSequenceSettingsSkyAttack = MoveSequenceSettings<"sequence_sky_attack">;
export type MoveSequenceSettingsSludge = MoveSequenceSettings<"sequence_sludge">;
export type MoveSequenceSettingsSludgeBomb = MoveSequenceSettings<"sequence_sludge_bomb">;
export type MoveSequenceSettingsSludgeWave = MoveSequenceSettings<"sequence_sludge_wave">;
export type MoveSequenceSettingsSmackDown = MoveSequenceSettings<"sequence_smack_down">;
export type MoveSequenceSettingsSmackDownFast = MoveSequenceSettings<"sequence_smack_down_fast">;
export type MoveSequenceSettingsSnarlFast = MoveSequenceSettings<"sequence_snarl_fast">;
export type MoveSequenceSettingsSolarBeam = MoveSequenceSettings<"sequence_solar_beam">;
export type MoveSequenceSettingsSpacialRend = MoveSequenceSettings<"sequence_spacial_rend">;
export type MoveSequenceSettingsSparkFast = MoveSequenceSettings<"sequence_spark_fast">;
export type MoveSequenceSettingsSparklingAria = MoveSequenceSettings<"sequence_sparkling_aria">;
export type MoveSequenceSettingsSpiritShackle = MoveSequenceSettings<"sequence_spirit_shackle">;
export type MoveSequenceSettingsSplashFast = MoveSequenceSettings<"sequence_splash_fast">;
export type MoveSequenceSettingsSteelWingFast = MoveSequenceSettings<"sequence_steel_wing_fast">;
export type MoveSequenceSettingsStomp = MoveSequenceSettings<"sequence_stomp">;
export type MoveSequenceSettingsStoneEdge = MoveSequenceSettings<"sequence_stone_edge">;
export type MoveSequenceSettingsStruggle = MoveSequenceSettings<"sequence_struggle">;
export type MoveSequenceSettingsStruggleBugFast = MoveSequenceSettings<"sequence_struggle_bug_fast">;
export type MoveSequenceSettingsSubmission = MoveSequenceSettings<"sequence_submission">;
export type MoveSequenceSettingsSuckerPunchFast = MoveSequenceSettings<"sequence_sucker_punch_fast">;
export type MoveSequenceSettingsSunsteelStrike = MoveSequenceSettings<"sequence_sunsteel_strike">;
export type MoveSequenceSettingsSuperPower = MoveSequenceSettings<"sequence_super_power">;
export type MoveSequenceSettingsSurf = MoveSequenceSettings<"sequence_surf">;
export type MoveSequenceSettingsSwift = MoveSequenceSettings<"sequence_swift">;
export type MoveSequenceSettingsSynchronoise = MoveSequenceSettings<"sequence_synchronoise">;
export type MoveSequenceSettingsTackleFast = MoveSequenceSettings<"sequence_tackle_fast">;
export type MoveSequenceSettingsTakeDownFast = MoveSequenceSettings<"sequence_take_down_fast">;
export type MoveSequenceSettingsTechnoBlastBurn = MoveSequenceSettings<"sequence_techno_blast_burn">;
export type MoveSequenceSettingsTechnoBlastChill = MoveSequenceSettings<"sequence_techno_blast_chill">;
export type MoveSequenceSettingsTechnoBlastNormal = MoveSequenceSettings<"sequence_techno_blast_normal">;
export type MoveSequenceSettingsTechnoBlastShock = MoveSequenceSettings<"sequence_techno_blast_shock">;
export type MoveSequenceSettingsTechnoBlastWater = MoveSequenceSettings<"sequence_techno_blast_water">;
export type MoveSequenceSettingsThunder = MoveSequenceSettings<"sequence_thunder">;
export type MoveSequenceSettingsThunderCage = MoveSequenceSettings<"sequence_thunder_cage">;
export type MoveSequenceSettingsThunderFangFast = MoveSequenceSettings<"sequence_thunder_fang_fast">;
export type MoveSequenceSettingsThunderPunch = MoveSequenceSettings<"sequence_thunder_punch">;
export type MoveSequenceSettingsThunderShockFast = MoveSequenceSettings<"sequence_thunder_shock_fast">;
export type MoveSequenceSettingsThunderbolt = MoveSequenceSettings<"sequence_thunderbolt">;
export type MoveSequenceSettingsTorchSong = MoveSequenceSettings<"sequence_torch_song">;
export type MoveSequenceSettingsTrailblaze = MoveSequenceSettings<"sequence_trailblaze">;
export type MoveSequenceSettingsTriAttack = MoveSequenceSettings<"sequence_tri_attack">;
export type MoveSequenceSettingsTripleAxel = MoveSequenceSettings<"sequence_triple_axel">;
export type MoveSequenceSettingsTwister = MoveSequenceSettings<"sequence_twister">;
export type MoveSequenceSettingsUpperHand = MoveSequenceSettings<"sequence_upper_hand">;
export type MoveSequenceSettingsVCreate = MoveSequenceSettings<"sequence_v_create">;
export type MoveSequenceSettingsViceGrip = MoveSequenceSettings<"sequence_vice_grip">;
export type MoveSequenceSettingsVineWhipFast = MoveSequenceSettings<"sequence_vine_whip_fast">;
export type MoveSequenceSettingsVoltSwitchFast = MoveSequenceSettings<"sequence_volt_switch_fast">;
export type MoveSequenceSettingsVoltTackle = MoveSequenceSettings<"sequence_volt_tackle">;
export type MoveSequenceSettingsWaterGunFast = MoveSequenceSettings<"sequence_water_gun_fast">;
export type MoveSequenceSettingsWaterGunFastBlastoise = MoveSequenceSettings<"sequence_water_gun_fast_blastoise">;
export type MoveSequenceSettingsWaterPulse = MoveSequenceSettings<"sequence_water_pulse">;
export type MoveSequenceSettingsWaterShurikenFast = MoveSequenceSettings<"sequence_water_shuriken_fast">;
export type MoveSequenceSettingsWaterfallFast = MoveSequenceSettings<"sequence_waterfall_fast">;
export type MoveSequenceSettingsWeatherBallFire = MoveSequenceSettings<"sequence_weather_ball_fire">;
export type MoveSequenceSettingsWeatherBallIce = MoveSequenceSettings<"sequence_weather_ball_ice">;
export type MoveSequenceSettingsWeatherBallNormal = MoveSequenceSettings<"sequence_weather_ball_normal">;
export type MoveSequenceSettingsWeatherBallRock = MoveSequenceSettings<"sequence_weather_ball_rock">;
export type MoveSequenceSettingsWeatherBallWater = MoveSequenceSettings<"sequence_weather_ball_water">;
export type MoveSequenceSettingsWildCharge = MoveSequenceSettings<"sequence_wild_charge">;
export type MoveSequenceSettingsWildboltStorm = MoveSequenceSettings<"sequence_wildbolt_storm">;
export type MoveSequenceSettingsWingAttackFast = MoveSequenceSettings<"sequence_wing_attack_fast">;
export type MoveSequenceSettingsWrap = MoveSequenceSettings<"sequence_wrap">;
export type MoveSequenceSettingsWrapGreen = MoveSequenceSettings<"sequence_wrap_green">;
export type MoveSequenceSettingsWrapPink = MoveSequenceSettings<"sequence_wrap_pink">;
export type MoveSequenceSettingsXScissor = MoveSequenceSettings<"sequence_x_scissor">;
export type MoveSequenceSettingsYawnFast = MoveSequenceSettings<"sequence_yawn_fast">;
export type MoveSequenceSettingsZapCannon = MoveSequenceSettings<"sequence_zap_cannon">;
export type MoveSequenceSettingsZenHeadbuttFast = MoveSequenceSettings<"sequence_zen_headbutt_fast">;

export type MoveSequenceSettingsMasterfileEntry =
	| MoveSequenceSettingsAcidFast
	| MoveSequenceSettingsAcidSpray
	| MoveSequenceSettingsAcrobatics
	| MoveSequenceSettingsAerialAce
	| MoveSequenceSettingsAeroblast
	| MoveSequenceSettingsAirCutter
	| MoveSequenceSettingsAirSlashFast
	| MoveSequenceSettingsAncientPower
	| MoveSequenceSettingsAquaJet
	| MoveSequenceSettingsAquaStep
	| MoveSequenceSettingsAquaTail
	| MoveSequenceSettingsAstonishFast
	| MoveSequenceSettingsAuraSphere
	| MoveSequenceSettingsAuraWheelDark
	| MoveSequenceSettingsAuraWheelElectric
	| MoveSequenceSettingsAuroraBeam
	| MoveSequenceSettingsAvalanche
	| MoveSequenceSettingsBeakBlast
	| MoveSequenceSettingsBehemothBash
	| MoveSequenceSettingsBehemothBlade
	| MoveSequenceSettingsBiteFast
	| MoveSequenceSettingsBlastBurn
	| MoveSequenceSettingsBlazeKick
	| MoveSequenceSettingsBleakwindStorm
	| MoveSequenceSettingsBlizzard
	| MoveSequenceSettingsBodySlam
	| MoveSequenceSettingsBoneClub
	| MoveSequenceSettingsBoomburst
	| MoveSequenceSettingsBraveBird
	| MoveSequenceSettingsBreakingSwipe
	| MoveSequenceSettingsBrickBreak
	| MoveSequenceSettingsBrine
	| MoveSequenceSettingsBrutalSwing
	| MoveSequenceSettingsBubbleBeam
	| MoveSequenceSettingsBubbleFast
	| MoveSequenceSettingsBugBiteFast
	| MoveSequenceSettingsBugBuzz
	| MoveSequenceSettingsBulldoze
	| MoveSequenceSettingsBulletPunchFast
	| MoveSequenceSettingsBulletSeedFast
	| MoveSequenceSettingsChargeBeamFast
	| MoveSequenceSettingsCharmFast
	| MoveSequenceSettingsChillingWater
	| MoveSequenceSettingsClangingScales
	| MoveSequenceSettingsCloseCombat
	| MoveSequenceSettingsConfusionFast
	| MoveSequenceSettingsCounterFast
	| MoveSequenceSettingsCrabhammer
	| MoveSequenceSettingsCrossChop
	| MoveSequenceSettingsCrossPoison
	| MoveSequenceSettingsCrunch
	| MoveSequenceSettingsCrushClaw
	| MoveSequenceSettingsCrushGrip
	| MoveSequenceSettingsCutFast
	| MoveSequenceSettingsDarkPulse
	| MoveSequenceSettingsDarkestLariat
	| MoveSequenceSettingsDazzlingGleam
	| MoveSequenceSettingsDefault
	| MoveSequenceSettingsDig
	| MoveSequenceSettingsDisarmingVoice
	| MoveSequenceSettingsDischarge
	| MoveSequenceSettingsDoomDesire
	| MoveSequenceSettingsDoubleIronBash
	| MoveSequenceSettingsDoubleKickFast
	| MoveSequenceSettingsDracoMeteor
	| MoveSequenceSettingsDragonAscent
	| MoveSequenceSettingsDragonBreathFast
	| MoveSequenceSettingsDragonClaw
	| MoveSequenceSettingsDragonEnergy
	| MoveSequenceSettingsDragonPulse
	| MoveSequenceSettingsDragonTailFast
	| MoveSequenceSettingsDrainPunch
	| MoveSequenceSettingsDrainingKiss
	| MoveSequenceSettingsDrillPeck
	| MoveSequenceSettingsDrillRun
	| MoveSequenceSettingsDrumBeating
	| MoveSequenceSettingsDynamaxCannon
	| MoveSequenceSettingsDynamicPunch
	| MoveSequenceSettingsEarthPower
	| MoveSequenceSettingsEarthquake
	| MoveSequenceSettingsEmberFast
	| MoveSequenceSettingsEnergyBall
	| MoveSequenceSettingsExtrasensoryFast
	| MoveSequenceSettingsFairyWindFast
	| MoveSequenceSettingsFeatherDance
	| MoveSequenceSettingsFeintAttackFast
	| MoveSequenceSettingsFellStinger
	| MoveSequenceSettingsFireBlast
	| MoveSequenceSettingsFireFangFast
	| MoveSequenceSettingsFirePunch
	| MoveSequenceSettingsFireSpinFast
	| MoveSequenceSettingsFissure
	| MoveSequenceSettingsFlameBurst
	| MoveSequenceSettingsFlameCharge
	| MoveSequenceSettingsFlameWheel
	| MoveSequenceSettingsFlamethrower
	| MoveSequenceSettingsFlashCannon
	| MoveSequenceSettingsFlowerTrick
	| MoveSequenceSettingsFly
	| MoveSequenceSettingsFocusBlast
	| MoveSequenceSettingsForcePalmFast
	| MoveSequenceSettingsFoulPlay
	| MoveSequenceSettingsFreezeShock
	| MoveSequenceSettingsFrenzyPlant
	| MoveSequenceSettingsFrostBreathFast
	| MoveSequenceSettingsFrustration
	| MoveSequenceSettingsFuryCutterFast
	| MoveSequenceSettingsFusionBolt
	| MoveSequenceSettingsFusionFlare
	| MoveSequenceSettingsFuturesight
	| MoveSequenceSettingsGeomancyFast
	| MoveSequenceSettingsGigaDrain
	| MoveSequenceSettingsGigaImpact
	| MoveSequenceSettingsGigatonHammer
	| MoveSequenceSettingsGlaciate
	| MoveSequenceSettingsGrassKnot
	| MoveSequenceSettingsGunkShot
	| MoveSequenceSettingsGustFast
	| MoveSequenceSettingsGyroBall
	| MoveSequenceSettingsHeartStamp
	| MoveSequenceSettingsHeatWave
	| MoveSequenceSettingsHeavySlam
	| MoveSequenceSettingsHexFast
	| MoveSequenceSettingsHiddenPowerFast
	| MoveSequenceSettingsHighHorsepower
	| MoveSequenceSettingsHighJumpKick
	| MoveSequenceSettingsHornAttack
	| MoveSequenceSettingsHornDrill
	| MoveSequenceSettingsHurricane
	| MoveSequenceSettingsHydroCannon
	| MoveSequenceSettingsHydroPump
	| MoveSequenceSettingsHydroPumpBlastoise
	| MoveSequenceSettingsHyperBeam
	| MoveSequenceSettingsHyperFang
	| MoveSequenceSettingsIceBeam
	| MoveSequenceSettingsIceBurn
	| MoveSequenceSettingsIceFangFast
	| MoveSequenceSettingsIcePunch
	| MoveSequenceSettingsIceShardFast
	| MoveSequenceSettingsIcicleSpear
	| MoveSequenceSettingsIcyWind
	| MoveSequenceSettingsIncinerateFast
	| MoveSequenceSettingsInfestationFast
	| MoveSequenceSettingsIronHead
	| MoveSequenceSettingsIronTailFast
	| MoveSequenceSettingsKarateChopFast
	| MoveSequenceSettingsLastResort
	| MoveSequenceSettingsLeafBlade
	| MoveSequenceSettingsLeafStorm
	| MoveSequenceSettingsLeafTornado
	| MoveSequenceSettingsLeafageFast
	| MoveSequenceSettingsLeechLife
	| MoveSequenceSettingsLickFast
	| MoveSequenceSettingsLiquidation
	| MoveSequenceSettingsLockOnFast
	| MoveSequenceSettingsLowKickFast
	| MoveSequenceSettingsLowSweep
	| MoveSequenceSettingsLunge
	| MoveSequenceSettingsLusterPurge
	| MoveSequenceSettingsMagicalLeafFast
	| MoveSequenceSettingsMagmaStorm
	| MoveSequenceSettingsMagnetBomb
	| MoveSequenceSettingsMegaDrain
	| MoveSequenceSettingsMegahorn
	| MoveSequenceSettingsMetalClawFast
	| MoveSequenceSettingsMetalSound
	| MoveSequenceSettingsMeteorBeam
	| MoveSequenceSettingsMeteorMash
	| MoveSequenceSettingsMindBlown
	| MoveSequenceSettingsMirrorCoat
	| MoveSequenceSettingsMirrorShot
	| MoveSequenceSettingsMistBall
	| MoveSequenceSettingsMoonblast
	| MoveSequenceSettingsMoongeistBeam
	| MoveSequenceSettingsMudBomb
	| MoveSequenceSettingsMudShotFast
	| MoveSequenceSettingsMudSlapFast
	| MoveSequenceSettingsMuddyWater
	| MoveSequenceSettingsMystFire
	| MoveSequenceSettingsNaturesMadness
	| MoveSequenceSettingsNightShade
	| MoveSequenceSettingsNightSlash
	| MoveSequenceSettingsOblivionWing
	| MoveSequenceSettingsObstruct
	| MoveSequenceSettingsOctazooka
	| MoveSequenceSettingsOminousWind
	| MoveSequenceSettingsOriginPulse
	| MoveSequenceSettingsOutrage
	| MoveSequenceSettingsOverheat
	| MoveSequenceSettingsParabolicCharge
	| MoveSequenceSettingsPayback
	| MoveSequenceSettingsPeckFast
	| MoveSequenceSettingsPetalBlizzard
	| MoveSequenceSettingsPlayRough
	| MoveSequenceSettingsPoisonFang
	| MoveSequenceSettingsPoisonJabFast
	| MoveSequenceSettingsPoisonStingFast
	| MoveSequenceSettingsPoltergeist
	| MoveSequenceSettingsPoundFast
	| MoveSequenceSettingsPowderSnowFast
	| MoveSequenceSettingsPowerGem
	| MoveSequenceSettingsPowerUpPunch
	| MoveSequenceSettingsPowerWhip
	| MoveSequenceSettingsPrecipiceBlades
	| MoveSequenceSettingsPresentFast
	| MoveSequenceSettingsPsybeam
	| MoveSequenceSettingsPsychic
	| MoveSequenceSettingsPsychicFangs
	| MoveSequenceSettingsPsychoBoost
	| MoveSequenceSettingsPsychoCutFast
	| MoveSequenceSettingsPsyshock
	| MoveSequenceSettingsPsystrike
	| MoveSequenceSettingsPsywave
	| MoveSequenceSettingsPyroball
	| MoveSequenceSettingsQuickAttackFast
	| MoveSequenceSettingsRageFist
	| MoveSequenceSettingsRazorLeafFast
	| MoveSequenceSettingsRazorShell
	| MoveSequenceSettingsRest
	| MoveSequenceSettingsReturn
	| MoveSequenceSettingsRoarOfTime
	| MoveSequenceSettingsRockBlast
	| MoveSequenceSettingsRockSlide
	| MoveSequenceSettingsRockSmashFast
	| MoveSequenceSettingsRockThrowFast
	| MoveSequenceSettingsRockTomb
	| MoveSequenceSettingsRockWrecker
	| MoveSequenceSettingsRolloutFast
	| MoveSequenceSettingsSacredFire
	| MoveSequenceSettingsSacredSword
	| MoveSequenceSettingsSandAttack
	| MoveSequenceSettingsSandTomb
	| MoveSequenceSettingsSandsearStorm
	| MoveSequenceSettingsScald
	| MoveSequenceSettingsScaldBlastoise
	| MoveSequenceSettingsScorchingSands
	| MoveSequenceSettingsScratchFast
	| MoveSequenceSettingsSecretSword
	| MoveSequenceSettingsSeedBomb
	| MoveSequenceSettingsSeedFlare
	| MoveSequenceSettingsSeqCombatFaint
	| MoveSequenceSettingsSeqCombatFaintEnding
	| MoveSequenceSettingsSeqCombatReturn
	| MoveSequenceSettingsSeqDing
	| MoveSequenceSettingsSeqDramaticFaint
	| MoveSequenceSettingsSeqFaint
	| MoveSequenceSettingsSeqFortFaint
	| MoveSequenceSettingsSeqIntro
	| MoveSequenceSettingsSeqOutro
	| MoveSequenceSettingsSeqReturn
	| MoveSequenceSettingsSeqTransform
	| MoveSequenceSettingsSeqTransformDark
	| MoveSequenceSettingsSeqTransformFast
	| MoveSequenceSettingsShadowBall
	| MoveSequenceSettingsShadowBone
	| MoveSequenceSettingsShadowClawFast
	| MoveSequenceSettingsShadowForce
	| MoveSequenceSettingsShadowPunch
	| MoveSequenceSettingsShadowSneak
	| MoveSequenceSettingsSignalBeam
	| MoveSequenceSettingsSilverWind
	| MoveSequenceSettingsSkullBash
	| MoveSequenceSettingsSkyAttack
	| MoveSequenceSettingsSludge
	| MoveSequenceSettingsSludgeBomb
	| MoveSequenceSettingsSludgeWave
	| MoveSequenceSettingsSmackDown
	| MoveSequenceSettingsSmackDownFast
	| MoveSequenceSettingsSnarlFast
	| MoveSequenceSettingsSolarBeam
	| MoveSequenceSettingsSpacialRend
	| MoveSequenceSettingsSparkFast
	| MoveSequenceSettingsSparklingAria
	| MoveSequenceSettingsSpiritShackle
	| MoveSequenceSettingsSplashFast
	| MoveSequenceSettingsSteelWingFast
	| MoveSequenceSettingsStomp
	| MoveSequenceSettingsStoneEdge
	| MoveSequenceSettingsStruggle
	| MoveSequenceSettingsStruggleBugFast
	| MoveSequenceSettingsSubmission
	| MoveSequenceSettingsSuckerPunchFast
	| MoveSequenceSettingsSunsteelStrike
	| MoveSequenceSettingsSuperPower
	| MoveSequenceSettingsSurf
	| MoveSequenceSettingsSwift
	| MoveSequenceSettingsSynchronoise
	| MoveSequenceSettingsTackleFast
	| MoveSequenceSettingsTakeDownFast
	| MoveSequenceSettingsTechnoBlastBurn
	| MoveSequenceSettingsTechnoBlastChill
	| MoveSequenceSettingsTechnoBlastNormal
	| MoveSequenceSettingsTechnoBlastShock
	| MoveSequenceSettingsTechnoBlastWater
	| MoveSequenceSettingsThunder
	| MoveSequenceSettingsThunderCage
	| MoveSequenceSettingsThunderFangFast
	| MoveSequenceSettingsThunderPunch
	| MoveSequenceSettingsThunderShockFast
	| MoveSequenceSettingsThunderbolt
	| MoveSequenceSettingsTorchSong
	| MoveSequenceSettingsTrailblaze
	| MoveSequenceSettingsTriAttack
	| MoveSequenceSettingsTripleAxel
	| MoveSequenceSettingsTwister
	| MoveSequenceSettingsUpperHand
	| MoveSequenceSettingsVCreate
	| MoveSequenceSettingsViceGrip
	| MoveSequenceSettingsVineWhipFast
	| MoveSequenceSettingsVoltSwitchFast
	| MoveSequenceSettingsVoltTackle
	| MoveSequenceSettingsWaterGunFast
	| MoveSequenceSettingsWaterGunFastBlastoise
	| MoveSequenceSettingsWaterPulse
	| MoveSequenceSettingsWaterShurikenFast
	| MoveSequenceSettingsWaterfallFast
	| MoveSequenceSettingsWeatherBallFire
	| MoveSequenceSettingsWeatherBallIce
	| MoveSequenceSettingsWeatherBallNormal
	| MoveSequenceSettingsWeatherBallRock
	| MoveSequenceSettingsWeatherBallWater
	| MoveSequenceSettingsWildCharge
	| MoveSequenceSettingsWildboltStorm
	| MoveSequenceSettingsWingAttackFast
	| MoveSequenceSettingsWrap
	| MoveSequenceSettingsWrapGreen
	| MoveSequenceSettingsWrapPink
	| MoveSequenceSettingsXScissor
	| MoveSequenceSettingsYawnFast
	| MoveSequenceSettingsZapCannon
	| MoveSequenceSettingsZenHeadbuttFast;

export type MoveSequenceSettingsTemplateID = MoveSequenceSettingsMasterfileEntry["templateId"];

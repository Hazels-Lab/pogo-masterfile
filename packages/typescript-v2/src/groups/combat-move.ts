export interface CombatMove<T extends string> {
	templateId: T;
	data: CombatMoveData<T>;
}

export interface CombatMoveData<T extends string> {
	templateId: T;
	combatMove: {
		buffs?: {
			attackerAttackStatStageChange?: -2 | -1 | 1 | 2;
			attackerDefenseStatStageChange?: -4 | -3 | -2 | -1 | 1;
			buffActivationChance?: 0.1 | 0.125 | 0.2 | 0.3 | 0.33 | 0.4 | 0.5 | 1;
			targetAttackStatStageChange?: -2 | -1;
			targetDefenseStatStageChange?: -2 | -1;
		};
		durationTurns?: 1 | 2 | 3 | 4;
		energyDelta?: -100 | -90 | -80 | -75 | -70 | -65 | -60 | -55 | -50 | -45 | -40 | -35 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 16 | 20;
		power?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | 110 | 120 | 130 | 135 | 140 | 150 | 170;
		"type": "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_ELECTRIC" | "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_FIRE" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_GHOST" | "POKEMON_TYPE_GRASS" | "POKEMON_TYPE_GROUND" | "POKEMON_TYPE_ICE" | "POKEMON_TYPE_NORMAL" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_ROCK" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER";
		uniqueId: "ACID_FAST" | "ACID_SPRAY" | "ACROBATICS" | "AERIAL_ACE" | "AEROBLAST" | "AEROBLAST_PLUS" | "AEROBLAST_PLUS_PLUS" | "AIR_CUTTER" | "AIR_SLASH_FAST" | "ANCIENT_POWER" | "AQUA_JET" | "AQUA_STEP" | "AQUA_TAIL" | "ASTONISH_FAST" | "AURA_SPHERE" | "AURA_WHEEL_DARK" | "AURA_WHEEL_ELECTRIC" | "AURORA_BEAM" | "AVALANCHE" | "BEAK_BLAST" | "BEHEMOTH_BASH" | "BEHEMOTH_BLADE" | "BITE_FAST" | "BLAST_BURN" | "BLAZE_KICK" | "BLEAKWIND_STORM" | "BLIZZARD" | "BODY_SLAM" | "BONE_CLUB" | "BOOMBURST" | "BRAVE_BIRD" | "BREAKING_SWIPE" | "BRICK_BREAK" | "BRINE" | "BRUTAL_SWING" | "BUBBLE_BEAM" | "BUBBLE_FAST" | "BUG_BITE_FAST" | "BUG_BUZZ" | "BULLDOZE" | "BULLET_PUNCH_FAST" | "BULLET_SEED_FAST" | "CHARGE_BEAM_FAST" | "CHARM_FAST" | "CHILLING_WATER" | "CLANGING_SCALES" | "CLOSE_COMBAT" | "CONFUSION_FAST" | "COUNTER_FAST" | "CRABHAMMER" | "CROSS_CHOP" | "CROSS_POISON" | "CRUNCH" | "CRUSH_GRIP" | "CUT_FAST" | "DARK_PULSE" | "DARKEST_LARIAT" | "DAZZLING_GLEAM" | "DIG" | "DISARMING_VOICE" | "DISCHARGE" | "DOOM_DESIRE" | "DOUBLE_IRON_BASH" | "DOUBLE_KICK_FAST" | "DRACO_METEOR" | "DRAGON_ASCENT" | "DRAGON_BREATH_FAST" | "DRAGON_CLAW" | "DRAGON_ENERGY" | "DRAGON_PULSE" | "DRAGON_TAIL_FAST" | "DRAIN_PUNCH" | "DRAINING_KISS" | "DRILL_PECK" | "DRILL_RUN" | "DRUM_BEATING" | "DYNAMAX_CANNON" | "DYNAMIC_PUNCH" | "EARTH_POWER" | "EARTHQUAKE" | "EMBER_FAST" | "ENERGY_BALL" | "EXTRASENSORY_FAST" | "FAIRY_WIND_FAST" | "FEATHER_DANCE" | "FEINT_ATTACK_FAST" | "FELL_STINGER" | "FIRE_BLAST" | "FIRE_FANG_FAST" | "FIRE_PUNCH" | "FIRE_SPIN_FAST" | "FLAME_BURST" | "FLAME_CHARGE" | "FLAME_WHEEL" | "FLAMETHROWER" | "FLASH_CANNON" | "FLOWER_TRICK" | "FLY" | "FLYING_PRESS" | "FOCUS_BLAST" | "FORCE_PALM_FAST" | "FOUL_PLAY" | "FREEZE_SHOCK" | "FRENZY_PLANT" | "FROST_BREATH_FAST" | "FRUSTRATION" | "FURY_CUTTER_FAST" | "FUSION_BOLT" | "FUSION_FLARE" | "FUTURESIGHT" | "GEOMANCY_FAST" | "GIGA_DRAIN" | "GIGA_IMPACT" | "GIGATON_HAMMER" | "GLACIATE" | "GRASS_KNOT" | "GUNK_SHOT" | "GUST_FAST" | "GYRO_BALL" | "HEART_STAMP" | "HEAT_WAVE" | "HEAVY_SLAM" | "HEX_FAST" | "HIDDEN_POWER_FAST" | "HIGH_HORSEPOWER" | "HIGH_JUMP_KICK" | "HORN_ATTACK" | "HURRICANE" | "HYDRO_CANNON" | "HYDRO_PUMP" | "HYDRO_PUMP_BLASTOISE" | "HYPER_BEAM" | "HYPER_FANG" | "ICE_BEAM" | "ICE_BURN" | "ICE_FANG_FAST" | "ICE_PUNCH" | "ICE_SHARD_FAST" | "ICICLE_SPEAR" | "ICY_WIND" | "INCINERATE_FAST" | "INFESTATION_FAST" | "IRON_HEAD" | "IRON_TAIL_FAST" | "KARATE_CHOP_FAST" | "LAST_RESORT" | "LEAF_BLADE" | "LEAF_STORM" | "LEAF_TORNADO" | "LEAFAGE_FAST" | "LICK_FAST" | "LIQUIDATION" | "LOCK_ON_FAST" | "LOW_KICK_FAST" | "LOW_SWEEP" | "LUNGE" | "LUSTER_PURGE" | "MAGICAL_LEAF_FAST" | "MAGMA_STORM" | "MAGNET_BOMB" | "MEGA_DRAIN" | "MEGAHORN" | "METAL_CLAW_FAST" | "METAL_SOUND_FAST" | "METEOR_BEAM" | "METEOR_MASH" | "MIND_BLOWN" | "MIRROR_COAT" | "MIRROR_SHOT" | "MIST_BALL" | "MOONBLAST" | "MOONGEIST_BEAM" | "MUD_BOMB" | "MUD_SHOT_FAST" | "MUD_SLAP_FAST" | "MUDDY_WATER" | "MYSTICAL_FIRE" | "NATURES_MADNESS" | "NIGHT_SHADE" | "NIGHT_SLASH" | "OBLIVION_WING" | "OBSTRUCT" | "OCTAZOOKA" | "OMINOUS_WIND" | "ORIGIN_PULSE" | "OUTRAGE" | "OVERHEAT" | "PARABOLIC_CHARGE" | "PAYBACK" | "PECK_FAST" | "PETAL_BLIZZARD" | "PLAY_ROUGH" | "POISON_FANG" | "POISON_JAB_FAST" | "POISON_STING_FAST" | "POLTERGEIST" | "POUND_FAST" | "POWDER_SNOW_FAST" | "POWER_GEM" | "POWER_UP_PUNCH" | "POWER_WHIP" | "PRECIPICE_BLADES" | "PRESENT_FAST" | "PSYBEAM" | "PSYCHIC" | "PSYCHIC_FANGS" | "PSYCHO_BOOST" | "PSYCHO_CUT_FAST" | "PSYSHOCK" | "PSYSTRIKE" | "PSYWAVE_FAST" | "PYROBALL" | "QUICK_ATTACK_FAST" | "RAGE_FIST" | "RAZOR_LEAF_FAST" | "RAZOR_SHELL" | "REST" | "RETURN" | "ROAR_OF_TIME" | "ROCK_BLAST" | "ROCK_SLIDE" | "ROCK_SMASH_FAST" | "ROCK_THROW_FAST" | "ROCK_TOMB" | "ROCK_WRECKER" | "ROLLOUT_FAST" | "SACRED_FIRE" | "SACRED_FIRE_PLUS" | "SACRED_FIRE_PLUS_PLUS" | "SACRED_SWORD" | "SAND_ATTACK_FAST" | "SAND_TOMB" | "SANDSEAR_STORM" | "SCALD" | "SCALD_BLASTOISE" | "SCORCHING_SANDS" | "SCRATCH_FAST" | "SECRET_SWORD" | "SEED_BOMB" | "SEED_FLARE" | "SHADOW_BALL" | "SHADOW_BONE" | "SHADOW_CLAW_FAST" | "SHADOW_FORCE" | "SHADOW_PUNCH" | "SHADOW_SNEAK" | "SIGNAL_BEAM" | "SILVER_WIND" | "SKULL_BASH" | "SKY_ATTACK" | "SLUDGE" | "SLUDGE_BOMB" | "SLUDGE_WAVE" | "SMACK_DOWN_FAST" | "SNARL_FAST" | "SOLAR_BEAM" | "SPACIAL_REND" | "SPARK_FAST" | "SPARKLING_ARIA" | "SPIRIT_SHACKLE" | "SPLASH_FAST" | "STEEL_WING_FAST" | "STOMP" | "STONE_EDGE" | "STRUGGLE" | "STRUGGLE_BUG_FAST" | "SUBMISSION" | "SUCKER_PUNCH_FAST" | "SUNSTEEL_STRIKE" | "SUPER_POWER" | "SURF" | "SWIFT" | "SYNCHRONOISE" | "TACKLE_FAST" | "TAKE_DOWN_FAST" | "TECHNO_BLAST_BURN" | "TECHNO_BLAST_CHILL" | "TECHNO_BLAST_NORMAL" | "TECHNO_BLAST_SHOCK" | "TECHNO_BLAST_WATER" | "THUNDER" | "THUNDER_CAGE" | "THUNDER_FANG_FAST" | "THUNDER_PUNCH" | "THUNDER_SHOCK_FAST" | "THUNDERBOLT" | "TORCH_SONG" | "TRAILBLAZE" | "TRANSFORM_FAST" | "TRI_ATTACK" | "TRIPLE_AXEL" | "TWISTER" | "UPPER_HAND" | "V_CREATE" | "VICE_GRIP" | "VINE_WHIP_FAST" | "VOLT_SWITCH_FAST" | "VOLT_TACKLE" | "WATER_GUN_FAST" | "WATER_GUN_FAST_BLASTOISE" | "WATER_PULSE" | "WATER_SHURIKEN_FAST" | "WATERFALL_FAST" | "WEATHER_BALL_FIRE" | "WEATHER_BALL_ICE" | "WEATHER_BALL_NORMAL" | "WEATHER_BALL_ROCK" | "WEATHER_BALL_WATER" | "WILD_CHARGE" | "WILDBOLT_STORM" | "WING_ATTACK_FAST" | "WRAP" | "WRAP_GREEN" | "WRAP_PINK" | "X_SCISSOR" | "YAWN_FAST" | "ZAP_CANNON" | "ZEN_HEADBUTT_FAST";
		vfxName: "acid_fast" | "acid_spray" | "acrobatics" | "aerial_ace" | "aeroblast" | "air_cutter" | "air_slash_fast" | "ancient_power" | "aqua_jet" | "aqua_step" | "aqua_tail" | "astonish_fast" | "aura_sphere" | "aura_wheel_electric" | "aurora_beam" | "avalanche" | "beak_blast" | "behemoth_bash" | "behemoth_blade" | "bite_fast" | "blast_burn" | "blaze_kick" | "bleakwind_storm" | "blizzard" | "body_slam" | "bone_club" | "boomburst" | "brave_bird" | "breaking_swipe" | "brick_break" | "brine" | "brutal_swing" | "bubble_beam" | "bubble_fast" | "bug_bite_fast" | "bug_buzz" | "bulldoze" | "bullet_punch_fast" | "bullet_seed_fast" | "charge_beam_fast" | "charm_fast" | "chilling_water" | "clanging_scales" | "close_combat" | "confusion_fast" | "counter_fast" | "crabhammer" | "cross_chop" | "cross_poison" | "crunch" | "crush_grip" | "cut_fast" | "dark_pulse" | "darkest_lariat" | "dazzling_gleam" | "dig" | "disarming_voice" | "discharge" | "doom_desire" | "double_iron_bash" | "double_kick_fast" | "draco_meteor" | "dragon_ascent" | "dragon_breath_fast" | "dragon_claw" | "dragon_energy" | "dragon_pulse" | "dragon_tail_fast" | "drain_punch" | "draining_kiss" | "drill_peck" | "drill_run" | "drum_beating" | "dynamax_cannon" | "dynamic_punch" | "earth_power" | "earthquake" | "ember_fast" | "energy_ball" | "extrasensory_fast" | "fairy_wind_fast" | "feather_dance" | "feint_attack_fast" | "fell_stinger" | "fire_blast" | "fire_fang_fast" | "fire_punch" | "fire_spin_fast" | "flame_burst" | "flame_charge" | "flame_wheel" | "flamethrower" | "flash_cannon" | "flower_trick" | "fly" | "flying_press" | "focus_blast" | "force_palm_fast" | "foul_play" | "freeze_shock" | "frenzy_plant" | "frost_breath_fast" | "frustration" | "fury_cutter_fast" | "fusion_bolt" | "fusion_flare" | "futuresight" | "geomancy_fast" | "giga_drain" | "giga_impact" | "gigaton_hammer" | "glaciate" | "grass_knot" | "gunk_shot" | "gust_fast" | "gyro_ball" | "heart_stamp" | "heat_wave" | "heavy_slam" | "hex_fast" | "hidden_power_fast" | "high_horsepower" | "high_jump_kick" | "horn_attack" | "hurricane" | "hydro_cannon" | "hydro_pump" | "hydro_pump_blastoise" | "hyper_beam" | "hyper_fang" | "ice_beam" | "ice_burn" | "ice_fang_fast" | "ice_punch" | "ice_shard_fast" | "icicle_spear" | "icy_wind" | "incinerate_fast" | "infestation_fast" | "iron_head" | "iron_tail_fast" | "karate_chop_fast" | "last_resort" | "leaf_blade" | "leaf_storm" | "leaf_tornado" | "leafage_fast" | "lick_fast" | "liquidation" | "lock_on_fast" | "low_kick_fast" | "low_sweep" | "lunge" | "luster_purge" | "magical_leaf_fast" | "magma_storm" | "magnet_bomb" | "mega_drain" | "megahorn" | "metal_claw_fast" | "metal_sound" | "meteor_beam" | "meteor_mash" | "mind_blown" | "mirror_coat" | "mirror_shot" | "mist_ball" | "moonblast" | "moongeist_beam" | "mud_bomb" | "mud_shot_fast" | "mud_slap_fast" | "muddy_water" | "myst_fire" | "natures_madness" | "night_shade" | "night_slash" | "oblivion_wing" | "obstruct" | "octazooka" | "ominous_wind" | "origin_pulse" | "outrage" | "overheat" | "parabolic_charge" | "payback" | "peck_fast" | "petal_blizzard" | "play_rough" | "poison_fang" | "poison_jab_fast" | "poison_sting_fast" | "poltergeist" | "pound_fast" | "powder_snow_fast" | "power_gem" | "power_up_punch" | "power_whip" | "precipice_blades" | "present_fast" | "psybeam" | "psychic" | "psychic_fangs" | "psycho_boost" | "psycho_cut_fast" | "psyshock" | "psystrike" | "psywave" | "pyroball" | "quick_attack_fast" | "rage_fist" | "razor_leaf_fast" | "razor_shell" | "rest" | "return" | "roar_of_time" | "rock_blast" | "rock_slide" | "rock_smash_fast" | "rock_throw_fast" | "rock_tomb" | "rock_wrecker" | "rollout_fast" | "sacred_fire" | "sacred_sword" | "sand_attack" | "sand_tomb" | "sandsear_storm" | "scald" | "scald_blastoise" | "scorching_sands" | "scratch_fast" | "secret_sword" | "seed_bomb" | "seed_flare" | "shadow_ball" | "shadow_bone" | "shadow_claw_fast" | "shadow_force" | "shadow_punch" | "shadow_sneak" | "signal_beam" | "silver_wind" | "skull_bash" | "sky_attack" | "sludge" | "sludge_bomb" | "sludge_wave" | "smack_down_fast" | "snarl_fast" | "solar_beam" | "spacial_rend" | "spark_fast" | "sparkling_aria" | "spirit_shackle" | "splash_fast" | "steel_wing_fast" | "stomp" | "stone_edge" | "struggle" | "struggle_bug_fast" | "submission" | "sucker_punch_fast" | "sunsteel_strike" | "super_power" | "surf" | "swift" | "synchronoise" | "tackle_fast" | "take_down_fast" | "techno_blast_burn" | "techno_blast_chill" | "techno_blast_normal" | "techno_blast_shock" | "techno_blast_water" | "thunder" | "thunder_cage" | "thunder_fang_fast" | "thunder_punch" | "thunder_shock_fast" | "thunderbolt" | "torch_song" | "trailblaze" | "transform_fast" | "tri_attack" | "triple_axel" | "twister" | "upper_hand" | "v_create" | "vice_grip" | "vine_whip_fast" | "volt_switch_fast" | "volt_tackle" | "water_gun_fast" | "water_gun_fast_blastoise" | "water_pulse" | "water_shuriken_fast" | "waterfall_fast" | "weather_ball_fire" | "weather_ball_ice" | "weather_ball_normal" | "weather_ball_rock" | "weather_ball_water" | "wild_charge" | "wildbolt_storm" | "wing_attack_fast" | "wrap" | "wrap_green" | "wrap_pink" | "x_scissor" | "yawn_fast" | "zap_cannon" | "zen_headbutt_fast";
	};
}

export type CombatMoveV0013MoveWrap = CombatMove<"COMBAT_V0013_MOVE_WRAP">;
export type CombatMoveV0014MoveHyperBeam = CombatMove<"COMBAT_V0014_MOVE_HYPER_BEAM">;
export type CombatMoveV0016MoveDarkPulse = CombatMove<"COMBAT_V0016_MOVE_DARK_PULSE">;
export type CombatMoveV0018MoveSludge = CombatMove<"COMBAT_V0018_MOVE_SLUDGE">;
export type CombatMoveV0020MoveViceGrip = CombatMove<"COMBAT_V0020_MOVE_VICE_GRIP">;
export type CombatMoveV0021MoveFlameWheel = CombatMove<"COMBAT_V0021_MOVE_FLAME_WHEEL">;
export type CombatMoveV0022MoveMegahorn = CombatMove<"COMBAT_V0022_MOVE_MEGAHORN">;
export type CombatMoveV0024MoveFlamethrower = CombatMove<"COMBAT_V0024_MOVE_FLAMETHROWER">;
export type CombatMoveV0026MoveDig = CombatMove<"COMBAT_V0026_MOVE_DIG">;
export type CombatMoveV0028MoveCrossChop = CombatMove<"COMBAT_V0028_MOVE_CROSS_CHOP">;
export type CombatMoveV0030MovePsybeam = CombatMove<"COMBAT_V0030_MOVE_PSYBEAM">;
export type CombatMoveV0031MoveEarthquake = CombatMove<"COMBAT_V0031_MOVE_EARTHQUAKE">;
export type CombatMoveV0032MoveStoneEdge = CombatMove<"COMBAT_V0032_MOVE_STONE_EDGE">;
export type CombatMoveV0033MoveIcePunch = CombatMove<"COMBAT_V0033_MOVE_ICE_PUNCH">;
export type CombatMoveV0034MoveHeartStamp = CombatMove<"COMBAT_V0034_MOVE_HEART_STAMP">;
export type CombatMoveV0035MoveDischarge = CombatMove<"COMBAT_V0035_MOVE_DISCHARGE">;
export type CombatMoveV0036MoveFlashCannon = CombatMove<"COMBAT_V0036_MOVE_FLASH_CANNON">;
export type CombatMoveV0038MoveDrillPeck = CombatMove<"COMBAT_V0038_MOVE_DRILL_PECK">;
export type CombatMoveV0039MoveIceBeam = CombatMove<"COMBAT_V0039_MOVE_ICE_BEAM">;
export type CombatMoveV0040MoveBlizzard = CombatMove<"COMBAT_V0040_MOVE_BLIZZARD">;
export type CombatMoveV0042MoveHeatWave = CombatMove<"COMBAT_V0042_MOVE_HEAT_WAVE">;
export type CombatMoveV0045MoveAerialAce = CombatMove<"COMBAT_V0045_MOVE_AERIAL_ACE">;
export type CombatMoveV0046MoveDrillRun = CombatMove<"COMBAT_V0046_MOVE_DRILL_RUN">;
export type CombatMoveV0047MovePetalBlizzard = CombatMove<"COMBAT_V0047_MOVE_PETAL_BLIZZARD">;
export type CombatMoveV0048MoveMegaDrain = CombatMove<"COMBAT_V0048_MOVE_MEGA_DRAIN">;
export type CombatMoveV0049MoveBugBuzz = CombatMove<"COMBAT_V0049_MOVE_BUG_BUZZ">;
export type CombatMoveV0050MovePoisonFang = CombatMove<"COMBAT_V0050_MOVE_POISON_FANG">;
export type CombatMoveV0051MoveNightSlash = CombatMove<"COMBAT_V0051_MOVE_NIGHT_SLASH">;
export type CombatMoveV0053MoveBubbleBeam = CombatMove<"COMBAT_V0053_MOVE_BUBBLE_BEAM">;
export type CombatMoveV0054MoveSubmission = CombatMove<"COMBAT_V0054_MOVE_SUBMISSION">;
export type CombatMoveV0056MoveLowSweep = CombatMove<"COMBAT_V0056_MOVE_LOW_SWEEP">;
export type CombatMoveV0057MoveAquaJet = CombatMove<"COMBAT_V0057_MOVE_AQUA_JET">;
export type CombatMoveV0058MoveAquaTail = CombatMove<"COMBAT_V0058_MOVE_AQUA_TAIL">;
export type CombatMoveV0059MoveSeedBomb = CombatMove<"COMBAT_V0059_MOVE_SEED_BOMB">;
export type CombatMoveV0060MovePsyshock = CombatMove<"COMBAT_V0060_MOVE_PSYSHOCK">;
export type CombatMoveV0062MoveAncientPower = CombatMove<"COMBAT_V0062_MOVE_ANCIENT_POWER">;
export type CombatMoveV0063MoveRockTomb = CombatMove<"COMBAT_V0063_MOVE_ROCK_TOMB">;
export type CombatMoveV0064MoveRockSlide = CombatMove<"COMBAT_V0064_MOVE_ROCK_SLIDE">;
export type CombatMoveV0065MovePowerGem = CombatMove<"COMBAT_V0065_MOVE_POWER_GEM">;
export type CombatMoveV0066MoveShadowSneak = CombatMove<"COMBAT_V0066_MOVE_SHADOW_SNEAK">;
export type CombatMoveV0067MoveShadowPunch = CombatMove<"COMBAT_V0067_MOVE_SHADOW_PUNCH">;
export type CombatMoveV0069MoveOminousWind = CombatMove<"COMBAT_V0069_MOVE_OMINOUS_WIND">;
export type CombatMoveV0070MoveShadowBall = CombatMove<"COMBAT_V0070_MOVE_SHADOW_BALL">;
export type CombatMoveV0072MoveMagnetBomb = CombatMove<"COMBAT_V0072_MOVE_MAGNET_BOMB">;
export type CombatMoveV0074MoveIronHead = CombatMove<"COMBAT_V0074_MOVE_IRON_HEAD">;
export type CombatMoveV0075MoveParabolicCharge = CombatMove<"COMBAT_V0075_MOVE_PARABOLIC_CHARGE">;
export type CombatMoveV0077MoveThunderPunch = CombatMove<"COMBAT_V0077_MOVE_THUNDER_PUNCH">;
export type CombatMoveV0078MoveThunder = CombatMove<"COMBAT_V0078_MOVE_THUNDER">;
export type CombatMoveV0079MoveThunderbolt = CombatMove<"COMBAT_V0079_MOVE_THUNDERBOLT">;
export type CombatMoveV0080MoveTwister = CombatMove<"COMBAT_V0080_MOVE_TWISTER">;
export type CombatMoveV0082MoveDragonPulse = CombatMove<"COMBAT_V0082_MOVE_DRAGON_PULSE">;
export type CombatMoveV0083MoveDragonClaw = CombatMove<"COMBAT_V0083_MOVE_DRAGON_CLAW">;
export type CombatMoveV0084MoveDisarmingVoice = CombatMove<"COMBAT_V0084_MOVE_DISARMING_VOICE">;
export type CombatMoveV0085MoveDrainingKiss = CombatMove<"COMBAT_V0085_MOVE_DRAINING_KISS">;
export type CombatMoveV0086MoveDazzlingGleam = CombatMove<"COMBAT_V0086_MOVE_DAZZLING_GLEAM">;
export type CombatMoveV0087MoveMoonblast = CombatMove<"COMBAT_V0087_MOVE_MOONBLAST">;
export type CombatMoveV0088MovePlayRough = CombatMove<"COMBAT_V0088_MOVE_PLAY_ROUGH">;
export type CombatMoveV0089MoveCrossPoison = CombatMove<"COMBAT_V0089_MOVE_CROSS_POISON">;
export type CombatMoveV0090MoveSludgeBomb = CombatMove<"COMBAT_V0090_MOVE_SLUDGE_BOMB">;
export type CombatMoveV0091MoveSludgeWave = CombatMove<"COMBAT_V0091_MOVE_SLUDGE_WAVE">;
export type CombatMoveV0092MoveGunkShot = CombatMove<"COMBAT_V0092_MOVE_GUNK_SHOT">;
export type CombatMoveV0094MoveBoneClub = CombatMove<"COMBAT_V0094_MOVE_BONE_CLUB">;
export type CombatMoveV0095MoveBulldoze = CombatMove<"COMBAT_V0095_MOVE_BULLDOZE">;
export type CombatMoveV0096MoveMudBomb = CombatMove<"COMBAT_V0096_MOVE_MUD_BOMB">;
export type CombatMoveV0099MoveSignalBeam = CombatMove<"COMBAT_V0099_MOVE_SIGNAL_BEAM">;
export type CombatMoveV0100MoveXScissor = CombatMove<"COMBAT_V0100_MOVE_X_SCISSOR">;
export type CombatMoveV0101MoveFlameCharge = CombatMove<"COMBAT_V0101_MOVE_FLAME_CHARGE">;
export type CombatMoveV0102MoveFlameBurst = CombatMove<"COMBAT_V0102_MOVE_FLAME_BURST">;
export type CombatMoveV0103MoveFireBlast = CombatMove<"COMBAT_V0103_MOVE_FIRE_BLAST">;
export type CombatMoveV0104MoveBrine = CombatMove<"COMBAT_V0104_MOVE_BRINE">;
export type CombatMoveV0105MoveWaterPulse = CombatMove<"COMBAT_V0105_MOVE_WATER_PULSE">;
export type CombatMoveV0106MoveScald = CombatMove<"COMBAT_V0106_MOVE_SCALD">;
export type CombatMoveV0107MoveHydroPump = CombatMove<"COMBAT_V0107_MOVE_HYDRO_PUMP">;
export type CombatMoveV0108MovePsychic = CombatMove<"COMBAT_V0108_MOVE_PSYCHIC">;
export type CombatMoveV0109MovePsystrike = CombatMove<"COMBAT_V0109_MOVE_PSYSTRIKE">;
export type CombatMoveV0111MoveIcyWind = CombatMove<"COMBAT_V0111_MOVE_ICY_WIND">;
export type CombatMoveV0114MoveGigaDrain = CombatMove<"COMBAT_V0114_MOVE_GIGA_DRAIN">;
export type CombatMoveV0115MoveFirePunch = CombatMove<"COMBAT_V0115_MOVE_FIRE_PUNCH">;
export type CombatMoveV0116MoveSolarBeam = CombatMove<"COMBAT_V0116_MOVE_SOLAR_BEAM">;
export type CombatMoveV0117MoveLeafBlade = CombatMove<"COMBAT_V0117_MOVE_LEAF_BLADE">;
export type CombatMoveV0118MovePowerWhip = CombatMove<"COMBAT_V0118_MOVE_POWER_WHIP">;
export type CombatMoveV0121MoveAirCutter = CombatMove<"COMBAT_V0121_MOVE_AIR_CUTTER">;
export type CombatMoveV0122MoveHurricane = CombatMove<"COMBAT_V0122_MOVE_HURRICANE">;
export type CombatMoveV0123MoveBrickBreak = CombatMove<"COMBAT_V0123_MOVE_BRICK_BREAK">;
export type CombatMoveV0125MoveSwift = CombatMove<"COMBAT_V0125_MOVE_SWIFT">;
export type CombatMoveV0126MoveHornAttack = CombatMove<"COMBAT_V0126_MOVE_HORN_ATTACK">;
export type CombatMoveV0127MoveStomp = CombatMove<"COMBAT_V0127_MOVE_STOMP">;
export type CombatMoveV0129MoveHyperFang = CombatMove<"COMBAT_V0129_MOVE_HYPER_FANG">;
export type CombatMoveV0131MoveBodySlam = CombatMove<"COMBAT_V0131_MOVE_BODY_SLAM">;
export type CombatMoveV0132MoveRest = CombatMove<"COMBAT_V0132_MOVE_REST">;
export type CombatMoveV0133MoveStruggle = CombatMove<"COMBAT_V0133_MOVE_STRUGGLE">;
export type CombatMoveV0134MoveScaldBlastoise = CombatMove<"COMBAT_V0134_MOVE_SCALD_BLASTOISE">;
export type CombatMoveV0135MoveHydroPumpBlastoise = CombatMove<"COMBAT_V0135_MOVE_HYDRO_PUMP_BLASTOISE">;
export type CombatMoveV0136MoveWrapGreen = CombatMove<"COMBAT_V0136_MOVE_WRAP_GREEN">;
export type CombatMoveV0137MoveWrapPink = CombatMove<"COMBAT_V0137_MOVE_WRAP_PINK">;
export type CombatMoveV0200MoveFuryCutterFast = CombatMove<"COMBAT_V0200_MOVE_FURY_CUTTER_FAST">;
export type CombatMoveV0201MoveBugBiteFast = CombatMove<"COMBAT_V0201_MOVE_BUG_BITE_FAST">;
export type CombatMoveV0202MoveBiteFast = CombatMove<"COMBAT_V0202_MOVE_BITE_FAST">;
export type CombatMoveV0203MoveSuckerPunchFast = CombatMove<"COMBAT_V0203_MOVE_SUCKER_PUNCH_FAST">;
export type CombatMoveV0204MoveDragonBreathFast = CombatMove<"COMBAT_V0204_MOVE_DRAGON_BREATH_FAST">;
export type CombatMoveV0205MoveThunderShockFast = CombatMove<"COMBAT_V0205_MOVE_THUNDER_SHOCK_FAST">;
export type CombatMoveV0206MoveSparkFast = CombatMove<"COMBAT_V0206_MOVE_SPARK_FAST">;
export type CombatMoveV0207MoveLowKickFast = CombatMove<"COMBAT_V0207_MOVE_LOW_KICK_FAST">;
export type CombatMoveV0208MoveKarateChopFast = CombatMove<"COMBAT_V0208_MOVE_KARATE_CHOP_FAST">;
export type CombatMoveV0209MoveEmberFast = CombatMove<"COMBAT_V0209_MOVE_EMBER_FAST">;
export type CombatMoveV0210MoveWingAttackFast = CombatMove<"COMBAT_V0210_MOVE_WING_ATTACK_FAST">;
export type CombatMoveV0211MovePeckFast = CombatMove<"COMBAT_V0211_MOVE_PECK_FAST">;
export type CombatMoveV0212MoveLickFast = CombatMove<"COMBAT_V0212_MOVE_LICK_FAST">;
export type CombatMoveV0213MoveShadowClawFast = CombatMove<"COMBAT_V0213_MOVE_SHADOW_CLAW_FAST">;
export type CombatMoveV0214MoveVineWhipFast = CombatMove<"COMBAT_V0214_MOVE_VINE_WHIP_FAST">;
export type CombatMoveV0215MoveRazorLeafFast = CombatMove<"COMBAT_V0215_MOVE_RAZOR_LEAF_FAST">;
export type CombatMoveV0216MoveMudShotFast = CombatMove<"COMBAT_V0216_MOVE_MUD_SHOT_FAST">;
export type CombatMoveV0217MoveIceShardFast = CombatMove<"COMBAT_V0217_MOVE_ICE_SHARD_FAST">;
export type CombatMoveV0218MoveFrostBreathFast = CombatMove<"COMBAT_V0218_MOVE_FROST_BREATH_FAST">;
export type CombatMoveV0219MoveQuickAttackFast = CombatMove<"COMBAT_V0219_MOVE_QUICK_ATTACK_FAST">;
export type CombatMoveV0220MoveScratchFast = CombatMove<"COMBAT_V0220_MOVE_SCRATCH_FAST">;
export type CombatMoveV0221MoveTackleFast = CombatMove<"COMBAT_V0221_MOVE_TACKLE_FAST">;
export type CombatMoveV0222MovePoundFast = CombatMove<"COMBAT_V0222_MOVE_POUND_FAST">;
export type CombatMoveV0223MoveCutFast = CombatMove<"COMBAT_V0223_MOVE_CUT_FAST">;
export type CombatMoveV0224MovePoisonJabFast = CombatMove<"COMBAT_V0224_MOVE_POISON_JAB_FAST">;
export type CombatMoveV0225MoveAcidFast = CombatMove<"COMBAT_V0225_MOVE_ACID_FAST">;
export type CombatMoveV0226MovePsychoCutFast = CombatMove<"COMBAT_V0226_MOVE_PSYCHO_CUT_FAST">;
export type CombatMoveV0227MoveRockThrowFast = CombatMove<"COMBAT_V0227_MOVE_ROCK_THROW_FAST">;
export type CombatMoveV0228MoveMetalClawFast = CombatMove<"COMBAT_V0228_MOVE_METAL_CLAW_FAST">;
export type CombatMoveV0229MoveBulletPunchFast = CombatMove<"COMBAT_V0229_MOVE_BULLET_PUNCH_FAST">;
export type CombatMoveV0230MoveWaterGunFast = CombatMove<"COMBAT_V0230_MOVE_WATER_GUN_FAST">;
export type CombatMoveV0231MoveSplashFast = CombatMove<"COMBAT_V0231_MOVE_SPLASH_FAST">;
export type CombatMoveV0232MoveWaterGunFastBlastoise = CombatMove<"COMBAT_V0232_MOVE_WATER_GUN_FAST_BLASTOISE">;
export type CombatMoveV0233MoveMudSlapFast = CombatMove<"COMBAT_V0233_MOVE_MUD_SLAP_FAST">;
export type CombatMoveV0234MoveZenHeadbuttFast = CombatMove<"COMBAT_V0234_MOVE_ZEN_HEADBUTT_FAST">;
export type CombatMoveV0235MoveConfusionFast = CombatMove<"COMBAT_V0235_MOVE_CONFUSION_FAST">;
export type CombatMoveV0236MovePoisonStingFast = CombatMove<"COMBAT_V0236_MOVE_POISON_STING_FAST">;
export type CombatMoveV0237MoveBubbleFast = CombatMove<"COMBAT_V0237_MOVE_BUBBLE_FAST">;
export type CombatMoveV0238MoveFeintAttackFast = CombatMove<"COMBAT_V0238_MOVE_FEINT_ATTACK_FAST">;
export type CombatMoveV0239MoveSteelWingFast = CombatMove<"COMBAT_V0239_MOVE_STEEL_WING_FAST">;
export type CombatMoveV0240MoveFireFangFast = CombatMove<"COMBAT_V0240_MOVE_FIRE_FANG_FAST">;
export type CombatMoveV0241MoveRockSmashFast = CombatMove<"COMBAT_V0241_MOVE_ROCK_SMASH_FAST">;
export type CombatMoveV0242MoveTransformFast = CombatMove<"COMBAT_V0242_MOVE_TRANSFORM_FAST">;
export type CombatMoveV0243MoveCounterFast = CombatMove<"COMBAT_V0243_MOVE_COUNTER_FAST">;
export type CombatMoveV0244MovePowderSnowFast = CombatMove<"COMBAT_V0244_MOVE_POWDER_SNOW_FAST">;
export type CombatMoveV0245MoveCloseCombat = CombatMove<"COMBAT_V0245_MOVE_CLOSE_COMBAT">;
export type CombatMoveV0246MoveDynamicPunch = CombatMove<"COMBAT_V0246_MOVE_DYNAMIC_PUNCH">;
export type CombatMoveV0247MoveFocusBlast = CombatMove<"COMBAT_V0247_MOVE_FOCUS_BLAST">;
export type CombatMoveV0248MoveAuroraBeam = CombatMove<"COMBAT_V0248_MOVE_AURORA_BEAM">;
export type CombatMoveV0249MoveChargeBeamFast = CombatMove<"COMBAT_V0249_MOVE_CHARGE_BEAM_FAST">;
export type CombatMoveV0250MoveVoltSwitchFast = CombatMove<"COMBAT_V0250_MOVE_VOLT_SWITCH_FAST">;
export type CombatMoveV0251MoveWildCharge = CombatMove<"COMBAT_V0251_MOVE_WILD_CHARGE">;
export type CombatMoveV0252MoveZapCannon = CombatMove<"COMBAT_V0252_MOVE_ZAP_CANNON">;
export type CombatMoveV0253MoveDragonTailFast = CombatMove<"COMBAT_V0253_MOVE_DRAGON_TAIL_FAST">;
export type CombatMoveV0254MoveAvalanche = CombatMove<"COMBAT_V0254_MOVE_AVALANCHE">;
export type CombatMoveV0255MoveAirSlashFast = CombatMove<"COMBAT_V0255_MOVE_AIR_SLASH_FAST">;
export type CombatMoveV0256MoveBraveBird = CombatMove<"COMBAT_V0256_MOVE_BRAVE_BIRD">;
export type CombatMoveV0257MoveSkyAttack = CombatMove<"COMBAT_V0257_MOVE_SKY_ATTACK">;
export type CombatMoveV0258MoveSandTomb = CombatMove<"COMBAT_V0258_MOVE_SAND_TOMB">;
export type CombatMoveV0259MoveRockBlast = CombatMove<"COMBAT_V0259_MOVE_ROCK_BLAST">;
export type CombatMoveV0260MoveInfestationFast = CombatMove<"COMBAT_V0260_MOVE_INFESTATION_FAST">;
export type CombatMoveV0261MoveStruggleBugFast = CombatMove<"COMBAT_V0261_MOVE_STRUGGLE_BUG_FAST">;
export type CombatMoveV0262MoveSilverWind = CombatMove<"COMBAT_V0262_MOVE_SILVER_WIND">;
export type CombatMoveV0263MoveAstonishFast = CombatMove<"COMBAT_V0263_MOVE_ASTONISH_FAST">;
export type CombatMoveV0264MoveHexFast = CombatMove<"COMBAT_V0264_MOVE_HEX_FAST">;
export type CombatMoveV0265MoveNightShade = CombatMove<"COMBAT_V0265_MOVE_NIGHT_SHADE">;
export type CombatMoveV0266MoveIronTailFast = CombatMove<"COMBAT_V0266_MOVE_IRON_TAIL_FAST">;
export type CombatMoveV0267MoveGyroBall = CombatMove<"COMBAT_V0267_MOVE_GYRO_BALL">;
export type CombatMoveV0268MoveHeavySlam = CombatMove<"COMBAT_V0268_MOVE_HEAVY_SLAM">;
export type CombatMoveV0269MoveFireSpinFast = CombatMove<"COMBAT_V0269_MOVE_FIRE_SPIN_FAST">;
export type CombatMoveV0270MoveOverheat = CombatMove<"COMBAT_V0270_MOVE_OVERHEAT">;
export type CombatMoveV0271MoveBulletSeedFast = CombatMove<"COMBAT_V0271_MOVE_BULLET_SEED_FAST">;
export type CombatMoveV0272MoveGrassKnot = CombatMove<"COMBAT_V0272_MOVE_GRASS_KNOT">;
export type CombatMoveV0273MoveEnergyBall = CombatMove<"COMBAT_V0273_MOVE_ENERGY_BALL">;
export type CombatMoveV0274MoveExtrasensoryFast = CombatMove<"COMBAT_V0274_MOVE_EXTRASENSORY_FAST">;
export type CombatMoveV0275MoveFuturesight = CombatMove<"COMBAT_V0275_MOVE_FUTURESIGHT">;
export type CombatMoveV0276MoveMirrorCoat = CombatMove<"COMBAT_V0276_MOVE_MIRROR_COAT">;
export type CombatMoveV0277MoveOutrage = CombatMove<"COMBAT_V0277_MOVE_OUTRAGE">;
export type CombatMoveV0278MoveSnarlFast = CombatMove<"COMBAT_V0278_MOVE_SNARL_FAST">;
export type CombatMoveV0279MoveCrunch = CombatMove<"COMBAT_V0279_MOVE_CRUNCH">;
export type CombatMoveV0280MoveFoulPlay = CombatMove<"COMBAT_V0280_MOVE_FOUL_PLAY">;
export type CombatMoveV0281MoveHiddenPowerFast = CombatMove<"COMBAT_V0281_MOVE_HIDDEN_POWER_FAST">;
export type CombatMoveV0282MoveTakeDownFast = CombatMove<"COMBAT_V0282_MOVE_TAKE_DOWN_FAST">;
export type CombatMoveV0283MoveWaterfallFast = CombatMove<"COMBAT_V0283_MOVE_WATERFALL_FAST">;
export type CombatMoveV0284MoveSurf = CombatMove<"COMBAT_V0284_MOVE_SURF">;
export type CombatMoveV0285MoveDracoMeteor = CombatMove<"COMBAT_V0285_MOVE_DRACO_METEOR">;
export type CombatMoveV0286MoveDoomDesire = CombatMove<"COMBAT_V0286_MOVE_DOOM_DESIRE">;
export type CombatMoveV0287MoveYawnFast = CombatMove<"COMBAT_V0287_MOVE_YAWN_FAST">;
export type CombatMoveV0288MovePsychoBoost = CombatMove<"COMBAT_V0288_MOVE_PSYCHO_BOOST">;
export type CombatMoveV0289MoveOriginPulse = CombatMove<"COMBAT_V0289_MOVE_ORIGIN_PULSE">;
export type CombatMoveV0290MovePrecipiceBlades = CombatMove<"COMBAT_V0290_MOVE_PRECIPICE_BLADES">;
export type CombatMoveV0291MovePresentFast = CombatMove<"COMBAT_V0291_MOVE_PRESENT_FAST">;
export type CombatMoveV0292MoveWeatherBallFire = CombatMove<"COMBAT_V0292_MOVE_WEATHER_BALL_FIRE">;
export type CombatMoveV0293MoveWeatherBallIce = CombatMove<"COMBAT_V0293_MOVE_WEATHER_BALL_ICE">;
export type CombatMoveV0294MoveWeatherBallRock = CombatMove<"COMBAT_V0294_MOVE_WEATHER_BALL_ROCK">;
export type CombatMoveV0295MoveWeatherBallWater = CombatMove<"COMBAT_V0295_MOVE_WEATHER_BALL_WATER">;
export type CombatMoveV0296MoveFrenzyPlant = CombatMove<"COMBAT_V0296_MOVE_FRENZY_PLANT">;
export type CombatMoveV0297MoveSmackDownFast = CombatMove<"COMBAT_V0297_MOVE_SMACK_DOWN_FAST">;
export type CombatMoveV0298MoveBlastBurn = CombatMove<"COMBAT_V0298_MOVE_BLAST_BURN">;
export type CombatMoveV0299MoveHydroCannon = CombatMove<"COMBAT_V0299_MOVE_HYDRO_CANNON">;
export type CombatMoveV0300MoveLastResort = CombatMove<"COMBAT_V0300_MOVE_LAST_RESORT">;
export type CombatMoveV0301MoveMeteorMash = CombatMove<"COMBAT_V0301_MOVE_METEOR_MASH">;
export type CombatMoveV0302MoveSkullBash = CombatMove<"COMBAT_V0302_MOVE_SKULL_BASH">;
export type CombatMoveV0303MoveAcidSpray = CombatMove<"COMBAT_V0303_MOVE_ACID_SPRAY">;
export type CombatMoveV0304MoveEarthPower = CombatMove<"COMBAT_V0304_MOVE_EARTH_POWER">;
export type CombatMoveV0305MoveCrabhammer = CombatMove<"COMBAT_V0305_MOVE_CRABHAMMER">;
export type CombatMoveV0306MoveLunge = CombatMove<"COMBAT_V0306_MOVE_LUNGE">;
export type CombatMoveV0308MoveOctazooka = CombatMove<"COMBAT_V0308_MOVE_OCTAZOOKA">;
export type CombatMoveV0309MoveMirrorShot = CombatMove<"COMBAT_V0309_MOVE_MIRROR_SHOT">;
export type CombatMoveV0310MoveSuperPower = CombatMove<"COMBAT_V0310_MOVE_SUPER_POWER">;
export type CombatMoveV0311MoveFellStinger = CombatMove<"COMBAT_V0311_MOVE_FELL_STINGER">;
export type CombatMoveV0312MoveLeafTornado = CombatMove<"COMBAT_V0312_MOVE_LEAF_TORNADO">;
export type CombatMoveV0314MoveDrainPunch = CombatMove<"COMBAT_V0314_MOVE_DRAIN_PUNCH">;
export type CombatMoveV0315MoveShadowBone = CombatMove<"COMBAT_V0315_MOVE_SHADOW_BONE">;
export type CombatMoveV0316MoveMuddyWater = CombatMove<"COMBAT_V0316_MOVE_MUDDY_WATER">;
export type CombatMoveV0317MoveBlazeKick = CombatMove<"COMBAT_V0317_MOVE_BLAZE_KICK">;
export type CombatMoveV0318MoveRazorShell = CombatMove<"COMBAT_V0318_MOVE_RAZOR_SHELL">;
export type CombatMoveV0319MovePowerUpPunch = CombatMove<"COMBAT_V0319_MOVE_POWER_UP_PUNCH">;
export type CombatMoveV0320MoveCharmFast = CombatMove<"COMBAT_V0320_MOVE_CHARM_FAST">;
export type CombatMoveV0321MoveGigaImpact = CombatMove<"COMBAT_V0321_MOVE_GIGA_IMPACT">;
export type CombatMoveV0322MoveFrustration = CombatMove<"COMBAT_V0322_MOVE_FRUSTRATION">;
export type CombatMoveV0323MoveReturn = CombatMove<"COMBAT_V0323_MOVE_RETURN">;
export type CombatMoveV0324MoveSynchronoise = CombatMove<"COMBAT_V0324_MOVE_SYNCHRONOISE">;
export type CombatMoveV0325MoveLockOnFast = CombatMove<"COMBAT_V0325_MOVE_LOCK_ON_FAST">;
export type CombatMoveV0326MoveThunderFangFast = CombatMove<"COMBAT_V0326_MOVE_THUNDER_FANG_FAST">;
export type CombatMoveV0327MoveIceFangFast = CombatMove<"COMBAT_V0327_MOVE_ICE_FANG_FAST">;
export type CombatMoveV0330MoveSacredSword = CombatMove<"COMBAT_V0330_MOVE_SACRED_SWORD">;
export type CombatMoveV0331MoveFlyingPress = CombatMove<"COMBAT_V0331_MOVE_FLYING_PRESS">;
export type CombatMoveV0332MoveAuraSphere = CombatMove<"COMBAT_V0332_MOVE_AURA_SPHERE">;
export type CombatMoveV0333MovePayback = CombatMove<"COMBAT_V0333_MOVE_PAYBACK">;
export type CombatMoveV0334MoveRockWrecker = CombatMove<"COMBAT_V0334_MOVE_ROCK_WRECKER">;
export type CombatMoveV0335MoveAeroblast = CombatMove<"COMBAT_V0335_MOVE_AEROBLAST">;
export type CombatMoveV0336MoveTechnoBlastNormal = CombatMove<"COMBAT_V0336_MOVE_TECHNO_BLAST_NORMAL">;
export type CombatMoveV0337MoveTechnoBlastBurn = CombatMove<"COMBAT_V0337_MOVE_TECHNO_BLAST_BURN">;
export type CombatMoveV0338MoveTechnoBlastChill = CombatMove<"COMBAT_V0338_MOVE_TECHNO_BLAST_CHILL">;
export type CombatMoveV0339MoveTechnoBlastWater = CombatMove<"COMBAT_V0339_MOVE_TECHNO_BLAST_WATER">;
export type CombatMoveV0340MoveTechnoBlastShock = CombatMove<"COMBAT_V0340_MOVE_TECHNO_BLAST_SHOCK">;
export type CombatMoveV0341MoveFly = CombatMove<"COMBAT_V0341_MOVE_FLY">;
export type CombatMoveV0342MoveVCreate = CombatMove<"COMBAT_V0342_MOVE_V_CREATE">;
export type CombatMoveV0343MoveLeafStorm = CombatMove<"COMBAT_V0343_MOVE_LEAF_STORM">;
export type CombatMoveV0344MoveTriAttack = CombatMove<"COMBAT_V0344_MOVE_TRI_ATTACK">;
export type CombatMoveV0345MoveGustFast = CombatMove<"COMBAT_V0345_MOVE_GUST_FAST">;
export type CombatMoveV0346MoveIncinerateFast = CombatMove<"COMBAT_V0346_MOVE_INCINERATE_FAST">;
export type CombatMoveV0348MoveFeatherDance = CombatMove<"COMBAT_V0348_MOVE_FEATHER_DANCE">;
export type CombatMoveV0350MoveFairyWindFast = CombatMove<"COMBAT_V0350_MOVE_FAIRY_WIND_FAST">;
export type CombatMoveV0352MoveWeatherBallNormal = CombatMove<"COMBAT_V0352_MOVE_WEATHER_BALL_NORMAL">;
export type CombatMoveV0353MovePsychicFangs = CombatMove<"COMBAT_V0353_MOVE_PSYCHIC_FANGS">;
export type CombatMoveV0356MoveDoubleKickFast = CombatMove<"COMBAT_V0356_MOVE_DOUBLE_KICK_FAST">;
export type CombatMoveV0357MoveMagicalLeafFast = CombatMove<"COMBAT_V0357_MOVE_MAGICAL_LEAF_FAST">;
export type CombatMoveV0358MoveSacredFire = CombatMove<"COMBAT_V0358_MOVE_SACRED_FIRE">;
export type CombatMoveV0359MoveIcicleSpear = CombatMove<"COMBAT_V0359_MOVE_ICICLE_SPEAR">;
export type CombatMoveV0360MoveAeroblastPlus = CombatMove<"COMBAT_V0360_MOVE_AEROBLAST_PLUS">;
export type CombatMoveV0361MoveAeroblastPlusPlus = CombatMove<"COMBAT_V0361_MOVE_AEROBLAST_PLUS_PLUS">;
export type CombatMoveV0362MoveSacredFirePlus = CombatMove<"COMBAT_V0362_MOVE_SACRED_FIRE_PLUS">;
export type CombatMoveV0363MoveSacredFirePlusPlus = CombatMove<"COMBAT_V0363_MOVE_SACRED_FIRE_PLUS_PLUS">;
export type CombatMoveV0364MoveAcrobatics = CombatMove<"COMBAT_V0364_MOVE_ACROBATICS">;
export type CombatMoveV0365MoveLusterPurge = CombatMove<"COMBAT_V0365_MOVE_LUSTER_PURGE">;
export type CombatMoveV0366MoveMistBall = CombatMove<"COMBAT_V0366_MOVE_MIST_BALL">;
export type CombatMoveV0367MoveBrutalSwing = CombatMove<"COMBAT_V0367_MOVE_BRUTAL_SWING">;
export type CombatMoveV0368MoveRolloutFast = CombatMove<"COMBAT_V0368_MOVE_ROLLOUT_FAST">;
export type CombatMoveV0369MoveSeedFlare = CombatMove<"COMBAT_V0369_MOVE_SEED_FLARE">;
export type CombatMoveV0370MoveObstruct = CombatMove<"COMBAT_V0370_MOVE_OBSTRUCT">;
export type CombatMoveV0371MoveShadowForce = CombatMove<"COMBAT_V0371_MOVE_SHADOW_FORCE">;
export type CombatMoveV0372MoveMeteorBeam = CombatMove<"COMBAT_V0372_MOVE_METEOR_BEAM">;
export type CombatMoveV0373MoveWaterShurikenFast = CombatMove<"COMBAT_V0373_MOVE_WATER_SHURIKEN_FAST">;
export type CombatMoveV0374MoveFusionBolt = CombatMove<"COMBAT_V0374_MOVE_FUSION_BOLT">;
export type CombatMoveV0375MoveFusionFlare = CombatMove<"COMBAT_V0375_MOVE_FUSION_FLARE">;
export type CombatMoveV0376MovePoltergeist = CombatMove<"COMBAT_V0376_MOVE_POLTERGEIST">;
export type CombatMoveV0377MoveHighHorsepower = CombatMove<"COMBAT_V0377_MOVE_HIGH_HORSEPOWER">;
export type CombatMoveV0378MoveGlaciate = CombatMove<"COMBAT_V0378_MOVE_GLACIATE">;
export type CombatMoveV0379MoveBreakingSwipe = CombatMove<"COMBAT_V0379_MOVE_BREAKING_SWIPE">;
export type CombatMoveV0380MoveBoomburst = CombatMove<"COMBAT_V0380_MOVE_BOOMBURST">;
export type CombatMoveV0381MoveDoubleIronBash = CombatMove<"COMBAT_V0381_MOVE_DOUBLE_IRON_BASH">;
export type CombatMoveV0382MoveMysticalFire = CombatMove<"COMBAT_V0382_MOVE_MYSTICAL_FIRE">;
export type CombatMoveV0383MoveLiquidation = CombatMove<"COMBAT_V0383_MOVE_LIQUIDATION">;
export type CombatMoveV0384MoveDragonAscent = CombatMove<"COMBAT_V0384_MOVE_DRAGON_ASCENT">;
export type CombatMoveV0385MoveLeafageFast = CombatMove<"COMBAT_V0385_MOVE_LEAFAGE_FAST">;
export type CombatMoveV0386MoveMagmaStorm = CombatMove<"COMBAT_V0386_MOVE_MAGMA_STORM">;
export type CombatMoveV0387MoveGeomancyFast = CombatMove<"COMBAT_V0387_MOVE_GEOMANCY_FAST">;
export type CombatMoveV0388MoveSpacialRend = CombatMove<"COMBAT_V0388_MOVE_SPACIAL_REND">;
export type CombatMoveV0389MoveOblivionWing = CombatMove<"COMBAT_V0389_MOVE_OBLIVION_WING">;
export type CombatMoveV0390MoveNaturesMadness = CombatMove<"COMBAT_V0390_MOVE_NATURES_MADNESS">;
export type CombatMoveV0391MoveTripleAxel = CombatMove<"COMBAT_V0391_MOVE_TRIPLE_AXEL">;
export type CombatMoveV0392MoveTrailblaze = CombatMove<"COMBAT_V0392_MOVE_TRAILBLAZE">;
export type CombatMoveV0393MoveScorchingSands = CombatMove<"COMBAT_V0393_MOVE_SCORCHING_SANDS">;
export type CombatMoveV0394MoveRoarOfTime = CombatMove<"COMBAT_V0394_MOVE_ROAR_OF_TIME">;
export type CombatMoveV0395MoveBleakwindStorm = CombatMove<"COMBAT_V0395_MOVE_BLEAKWIND_STORM">;
export type CombatMoveV0396MoveSandsearStorm = CombatMove<"COMBAT_V0396_MOVE_SANDSEAR_STORM">;
export type CombatMoveV0397MoveWildboltStorm = CombatMove<"COMBAT_V0397_MOVE_WILDBOLT_STORM">;
export type CombatMoveV0398MoveSpiritShackle = CombatMove<"COMBAT_V0398_MOVE_SPIRIT_SHACKLE">;
export type CombatMoveV0399MoveVoltTackle = CombatMove<"COMBAT_V0399_MOVE_VOLT_TACKLE">;
export type CombatMoveV0400MoveDarkestLariat = CombatMove<"COMBAT_V0400_MOVE_DARKEST_LARIAT">;
export type CombatMoveV0401MovePsywaveFast = CombatMove<"COMBAT_V0401_MOVE_PSYWAVE_FAST">;
export type CombatMoveV0402MoveMetalSoundFast = CombatMove<"COMBAT_V0402_MOVE_METAL_SOUND_FAST">;
export type CombatMoveV0403MoveSandAttackFast = CombatMove<"COMBAT_V0403_MOVE_SAND_ATTACK_FAST">;
export type CombatMoveV0404MoveSunsteelStrike = CombatMove<"COMBAT_V0404_MOVE_SUNSTEEL_STRIKE">;
export type CombatMoveV0405MoveMoongeistBeam = CombatMove<"COMBAT_V0405_MOVE_MOONGEIST_BEAM">;
export type CombatMoveV0406MoveAuraWheelElectric = CombatMove<"COMBAT_V0406_MOVE_AURA_WHEEL_ELECTRIC">;
export type CombatMoveV0407MoveAuraWheelDark = CombatMove<"COMBAT_V0407_MOVE_AURA_WHEEL_DARK">;
export type CombatMoveV0408MoveHighJumpKick = CombatMove<"COMBAT_V0408_MOVE_HIGH_JUMP_KICK">;
export type CombatMoveV0462MoveForcePalmFast = CombatMove<"COMBAT_V0462_MOVE_FORCE_PALM_FAST">;
export type CombatMoveV0463MoveSparklingAria = CombatMove<"COMBAT_V0463_MOVE_SPARKLING_ARIA">;
export type CombatMoveV0464MoveRageFist = CombatMove<"COMBAT_V0464_MOVE_RAGE_FIST">;
export type CombatMoveV0465MoveFlowerTrick = CombatMove<"COMBAT_V0465_MOVE_FLOWER_TRICK">;
export type CombatMoveV0466MoveFreezeShock = CombatMove<"COMBAT_V0466_MOVE_FREEZE_SHOCK">;
export type CombatMoveV0467MoveIceBurn = CombatMove<"COMBAT_V0467_MOVE_ICE_BURN">;
export type CombatMoveV0468MoveTorchSong = CombatMove<"COMBAT_V0468_MOVE_TORCH_SONG">;
export type CombatMoveV0469MoveBehemothBlade = CombatMove<"COMBAT_V0469_MOVE_BEHEMOTH_BLADE">;
export type CombatMoveV0470MoveBehemothBash = CombatMove<"COMBAT_V0470_MOVE_BEHEMOTH_BASH">;
export type CombatMoveV0471MoveUpperHand = CombatMove<"COMBAT_V0471_MOVE_UPPER_HAND">;
export type CombatMoveV0472MoveThunderCage = CombatMove<"COMBAT_V0472_MOVE_THUNDER_CAGE">;
export type CombatMoveV0482MoveDynamaxCannon = CombatMove<"COMBAT_V0482_MOVE_DYNAMAX_CANNON">;
export type CombatMoveV0484MoveClangingScales = CombatMove<"COMBAT_V0484_MOVE_CLANGING_SCALES">;
export type CombatMoveV0485MoveCrushGrip = CombatMove<"COMBAT_V0485_MOVE_CRUSH_GRIP">;
export type CombatMoveV0486MoveDragonEnergy = CombatMove<"COMBAT_V0486_MOVE_DRAGON_ENERGY">;
export type CombatMoveV0487MoveAquaStep = CombatMove<"COMBAT_V0487_MOVE_AQUA_STEP">;
export type CombatMoveV0488MoveChillingWater = CombatMove<"COMBAT_V0488_MOVE_CHILLING_WATER">;
export type CombatMoveV0489MoveSecretSword = CombatMove<"COMBAT_V0489_MOVE_SECRET_SWORD">;
export type CombatMoveV0490MoveBeakBlast = CombatMove<"COMBAT_V0490_MOVE_BEAK_BLAST">;
export type CombatMoveV0491MoveMindBlown = CombatMove<"COMBAT_V0491_MOVE_MIND_BLOWN">;
export type CombatMoveV0492MoveDrumBeating = CombatMove<"COMBAT_V0492_MOVE_DRUM_BEATING">;
export type CombatMoveV0493MovePyroball = CombatMove<"COMBAT_V0493_MOVE_PYROBALL">;
export type CombatMoveV0494MoveGigatonHammer = CombatMove<"COMBAT_V0494_MOVE_GIGATON_HAMMER">;

export type CombatMoveMasterfileEntry =
	| CombatMoveV0013MoveWrap
	| CombatMoveV0014MoveHyperBeam
	| CombatMoveV0016MoveDarkPulse
	| CombatMoveV0018MoveSludge
	| CombatMoveV0020MoveViceGrip
	| CombatMoveV0021MoveFlameWheel
	| CombatMoveV0022MoveMegahorn
	| CombatMoveV0024MoveFlamethrower
	| CombatMoveV0026MoveDig
	| CombatMoveV0028MoveCrossChop
	| CombatMoveV0030MovePsybeam
	| CombatMoveV0031MoveEarthquake
	| CombatMoveV0032MoveStoneEdge
	| CombatMoveV0033MoveIcePunch
	| CombatMoveV0034MoveHeartStamp
	| CombatMoveV0035MoveDischarge
	| CombatMoveV0036MoveFlashCannon
	| CombatMoveV0038MoveDrillPeck
	| CombatMoveV0039MoveIceBeam
	| CombatMoveV0040MoveBlizzard
	| CombatMoveV0042MoveHeatWave
	| CombatMoveV0045MoveAerialAce
	| CombatMoveV0046MoveDrillRun
	| CombatMoveV0047MovePetalBlizzard
	| CombatMoveV0048MoveMegaDrain
	| CombatMoveV0049MoveBugBuzz
	| CombatMoveV0050MovePoisonFang
	| CombatMoveV0051MoveNightSlash
	| CombatMoveV0053MoveBubbleBeam
	| CombatMoveV0054MoveSubmission
	| CombatMoveV0056MoveLowSweep
	| CombatMoveV0057MoveAquaJet
	| CombatMoveV0058MoveAquaTail
	| CombatMoveV0059MoveSeedBomb
	| CombatMoveV0060MovePsyshock
	| CombatMoveV0062MoveAncientPower
	| CombatMoveV0063MoveRockTomb
	| CombatMoveV0064MoveRockSlide
	| CombatMoveV0065MovePowerGem
	| CombatMoveV0066MoveShadowSneak
	| CombatMoveV0067MoveShadowPunch
	| CombatMoveV0069MoveOminousWind
	| CombatMoveV0070MoveShadowBall
	| CombatMoveV0072MoveMagnetBomb
	| CombatMoveV0074MoveIronHead
	| CombatMoveV0075MoveParabolicCharge
	| CombatMoveV0077MoveThunderPunch
	| CombatMoveV0078MoveThunder
	| CombatMoveV0079MoveThunderbolt
	| CombatMoveV0080MoveTwister
	| CombatMoveV0082MoveDragonPulse
	| CombatMoveV0083MoveDragonClaw
	| CombatMoveV0084MoveDisarmingVoice
	| CombatMoveV0085MoveDrainingKiss
	| CombatMoveV0086MoveDazzlingGleam
	| CombatMoveV0087MoveMoonblast
	| CombatMoveV0088MovePlayRough
	| CombatMoveV0089MoveCrossPoison
	| CombatMoveV0090MoveSludgeBomb
	| CombatMoveV0091MoveSludgeWave
	| CombatMoveV0092MoveGunkShot
	| CombatMoveV0094MoveBoneClub
	| CombatMoveV0095MoveBulldoze
	| CombatMoveV0096MoveMudBomb
	| CombatMoveV0099MoveSignalBeam
	| CombatMoveV0100MoveXScissor
	| CombatMoveV0101MoveFlameCharge
	| CombatMoveV0102MoveFlameBurst
	| CombatMoveV0103MoveFireBlast
	| CombatMoveV0104MoveBrine
	| CombatMoveV0105MoveWaterPulse
	| CombatMoveV0106MoveScald
	| CombatMoveV0107MoveHydroPump
	| CombatMoveV0108MovePsychic
	| CombatMoveV0109MovePsystrike
	| CombatMoveV0111MoveIcyWind
	| CombatMoveV0114MoveGigaDrain
	| CombatMoveV0115MoveFirePunch
	| CombatMoveV0116MoveSolarBeam
	| CombatMoveV0117MoveLeafBlade
	| CombatMoveV0118MovePowerWhip
	| CombatMoveV0121MoveAirCutter
	| CombatMoveV0122MoveHurricane
	| CombatMoveV0123MoveBrickBreak
	| CombatMoveV0125MoveSwift
	| CombatMoveV0126MoveHornAttack
	| CombatMoveV0127MoveStomp
	| CombatMoveV0129MoveHyperFang
	| CombatMoveV0131MoveBodySlam
	| CombatMoveV0132MoveRest
	| CombatMoveV0133MoveStruggle
	| CombatMoveV0134MoveScaldBlastoise
	| CombatMoveV0135MoveHydroPumpBlastoise
	| CombatMoveV0136MoveWrapGreen
	| CombatMoveV0137MoveWrapPink
	| CombatMoveV0200MoveFuryCutterFast
	| CombatMoveV0201MoveBugBiteFast
	| CombatMoveV0202MoveBiteFast
	| CombatMoveV0203MoveSuckerPunchFast
	| CombatMoveV0204MoveDragonBreathFast
	| CombatMoveV0205MoveThunderShockFast
	| CombatMoveV0206MoveSparkFast
	| CombatMoveV0207MoveLowKickFast
	| CombatMoveV0208MoveKarateChopFast
	| CombatMoveV0209MoveEmberFast
	| CombatMoveV0210MoveWingAttackFast
	| CombatMoveV0211MovePeckFast
	| CombatMoveV0212MoveLickFast
	| CombatMoveV0213MoveShadowClawFast
	| CombatMoveV0214MoveVineWhipFast
	| CombatMoveV0215MoveRazorLeafFast
	| CombatMoveV0216MoveMudShotFast
	| CombatMoveV0217MoveIceShardFast
	| CombatMoveV0218MoveFrostBreathFast
	| CombatMoveV0219MoveQuickAttackFast
	| CombatMoveV0220MoveScratchFast
	| CombatMoveV0221MoveTackleFast
	| CombatMoveV0222MovePoundFast
	| CombatMoveV0223MoveCutFast
	| CombatMoveV0224MovePoisonJabFast
	| CombatMoveV0225MoveAcidFast
	| CombatMoveV0226MovePsychoCutFast
	| CombatMoveV0227MoveRockThrowFast
	| CombatMoveV0228MoveMetalClawFast
	| CombatMoveV0229MoveBulletPunchFast
	| CombatMoveV0230MoveWaterGunFast
	| CombatMoveV0231MoveSplashFast
	| CombatMoveV0232MoveWaterGunFastBlastoise
	| CombatMoveV0233MoveMudSlapFast
	| CombatMoveV0234MoveZenHeadbuttFast
	| CombatMoveV0235MoveConfusionFast
	| CombatMoveV0236MovePoisonStingFast
	| CombatMoveV0237MoveBubbleFast
	| CombatMoveV0238MoveFeintAttackFast
	| CombatMoveV0239MoveSteelWingFast
	| CombatMoveV0240MoveFireFangFast
	| CombatMoveV0241MoveRockSmashFast
	| CombatMoveV0242MoveTransformFast
	| CombatMoveV0243MoveCounterFast
	| CombatMoveV0244MovePowderSnowFast
	| CombatMoveV0245MoveCloseCombat
	| CombatMoveV0246MoveDynamicPunch
	| CombatMoveV0247MoveFocusBlast
	| CombatMoveV0248MoveAuroraBeam
	| CombatMoveV0249MoveChargeBeamFast
	| CombatMoveV0250MoveVoltSwitchFast
	| CombatMoveV0251MoveWildCharge
	| CombatMoveV0252MoveZapCannon
	| CombatMoveV0253MoveDragonTailFast
	| CombatMoveV0254MoveAvalanche
	| CombatMoveV0255MoveAirSlashFast
	| CombatMoveV0256MoveBraveBird
	| CombatMoveV0257MoveSkyAttack
	| CombatMoveV0258MoveSandTomb
	| CombatMoveV0259MoveRockBlast
	| CombatMoveV0260MoveInfestationFast
	| CombatMoveV0261MoveStruggleBugFast
	| CombatMoveV0262MoveSilverWind
	| CombatMoveV0263MoveAstonishFast
	| CombatMoveV0264MoveHexFast
	| CombatMoveV0265MoveNightShade
	| CombatMoveV0266MoveIronTailFast
	| CombatMoveV0267MoveGyroBall
	| CombatMoveV0268MoveHeavySlam
	| CombatMoveV0269MoveFireSpinFast
	| CombatMoveV0270MoveOverheat
	| CombatMoveV0271MoveBulletSeedFast
	| CombatMoveV0272MoveGrassKnot
	| CombatMoveV0273MoveEnergyBall
	| CombatMoveV0274MoveExtrasensoryFast
	| CombatMoveV0275MoveFuturesight
	| CombatMoveV0276MoveMirrorCoat
	| CombatMoveV0277MoveOutrage
	| CombatMoveV0278MoveSnarlFast
	| CombatMoveV0279MoveCrunch
	| CombatMoveV0280MoveFoulPlay
	| CombatMoveV0281MoveHiddenPowerFast
	| CombatMoveV0282MoveTakeDownFast
	| CombatMoveV0283MoveWaterfallFast
	| CombatMoveV0284MoveSurf
	| CombatMoveV0285MoveDracoMeteor
	| CombatMoveV0286MoveDoomDesire
	| CombatMoveV0287MoveYawnFast
	| CombatMoveV0288MovePsychoBoost
	| CombatMoveV0289MoveOriginPulse
	| CombatMoveV0290MovePrecipiceBlades
	| CombatMoveV0291MovePresentFast
	| CombatMoveV0292MoveWeatherBallFire
	| CombatMoveV0293MoveWeatherBallIce
	| CombatMoveV0294MoveWeatherBallRock
	| CombatMoveV0295MoveWeatherBallWater
	| CombatMoveV0296MoveFrenzyPlant
	| CombatMoveV0297MoveSmackDownFast
	| CombatMoveV0298MoveBlastBurn
	| CombatMoveV0299MoveHydroCannon
	| CombatMoveV0300MoveLastResort
	| CombatMoveV0301MoveMeteorMash
	| CombatMoveV0302MoveSkullBash
	| CombatMoveV0303MoveAcidSpray
	| CombatMoveV0304MoveEarthPower
	| CombatMoveV0305MoveCrabhammer
	| CombatMoveV0306MoveLunge
	| CombatMoveV0308MoveOctazooka
	| CombatMoveV0309MoveMirrorShot
	| CombatMoveV0310MoveSuperPower
	| CombatMoveV0311MoveFellStinger
	| CombatMoveV0312MoveLeafTornado
	| CombatMoveV0314MoveDrainPunch
	| CombatMoveV0315MoveShadowBone
	| CombatMoveV0316MoveMuddyWater
	| CombatMoveV0317MoveBlazeKick
	| CombatMoveV0318MoveRazorShell
	| CombatMoveV0319MovePowerUpPunch
	| CombatMoveV0320MoveCharmFast
	| CombatMoveV0321MoveGigaImpact
	| CombatMoveV0322MoveFrustration
	| CombatMoveV0323MoveReturn
	| CombatMoveV0324MoveSynchronoise
	| CombatMoveV0325MoveLockOnFast
	| CombatMoveV0326MoveThunderFangFast
	| CombatMoveV0327MoveIceFangFast
	| CombatMoveV0330MoveSacredSword
	| CombatMoveV0331MoveFlyingPress
	| CombatMoveV0332MoveAuraSphere
	| CombatMoveV0333MovePayback
	| CombatMoveV0334MoveRockWrecker
	| CombatMoveV0335MoveAeroblast
	| CombatMoveV0336MoveTechnoBlastNormal
	| CombatMoveV0337MoveTechnoBlastBurn
	| CombatMoveV0338MoveTechnoBlastChill
	| CombatMoveV0339MoveTechnoBlastWater
	| CombatMoveV0340MoveTechnoBlastShock
	| CombatMoveV0341MoveFly
	| CombatMoveV0342MoveVCreate
	| CombatMoveV0343MoveLeafStorm
	| CombatMoveV0344MoveTriAttack
	| CombatMoveV0345MoveGustFast
	| CombatMoveV0346MoveIncinerateFast
	| CombatMoveV0348MoveFeatherDance
	| CombatMoveV0350MoveFairyWindFast
	| CombatMoveV0352MoveWeatherBallNormal
	| CombatMoveV0353MovePsychicFangs
	| CombatMoveV0356MoveDoubleKickFast
	| CombatMoveV0357MoveMagicalLeafFast
	| CombatMoveV0358MoveSacredFire
	| CombatMoveV0359MoveIcicleSpear
	| CombatMoveV0360MoveAeroblastPlus
	| CombatMoveV0361MoveAeroblastPlusPlus
	| CombatMoveV0362MoveSacredFirePlus
	| CombatMoveV0363MoveSacredFirePlusPlus
	| CombatMoveV0364MoveAcrobatics
	| CombatMoveV0365MoveLusterPurge
	| CombatMoveV0366MoveMistBall
	| CombatMoveV0367MoveBrutalSwing
	| CombatMoveV0368MoveRolloutFast
	| CombatMoveV0369MoveSeedFlare
	| CombatMoveV0370MoveObstruct
	| CombatMoveV0371MoveShadowForce
	| CombatMoveV0372MoveMeteorBeam
	| CombatMoveV0373MoveWaterShurikenFast
	| CombatMoveV0374MoveFusionBolt
	| CombatMoveV0375MoveFusionFlare
	| CombatMoveV0376MovePoltergeist
	| CombatMoveV0377MoveHighHorsepower
	| CombatMoveV0378MoveGlaciate
	| CombatMoveV0379MoveBreakingSwipe
	| CombatMoveV0380MoveBoomburst
	| CombatMoveV0381MoveDoubleIronBash
	| CombatMoveV0382MoveMysticalFire
	| CombatMoveV0383MoveLiquidation
	| CombatMoveV0384MoveDragonAscent
	| CombatMoveV0385MoveLeafageFast
	| CombatMoveV0386MoveMagmaStorm
	| CombatMoveV0387MoveGeomancyFast
	| CombatMoveV0388MoveSpacialRend
	| CombatMoveV0389MoveOblivionWing
	| CombatMoveV0390MoveNaturesMadness
	| CombatMoveV0391MoveTripleAxel
	| CombatMoveV0392MoveTrailblaze
	| CombatMoveV0393MoveScorchingSands
	| CombatMoveV0394MoveRoarOfTime
	| CombatMoveV0395MoveBleakwindStorm
	| CombatMoveV0396MoveSandsearStorm
	| CombatMoveV0397MoveWildboltStorm
	| CombatMoveV0398MoveSpiritShackle
	| CombatMoveV0399MoveVoltTackle
	| CombatMoveV0400MoveDarkestLariat
	| CombatMoveV0401MovePsywaveFast
	| CombatMoveV0402MoveMetalSoundFast
	| CombatMoveV0403MoveSandAttackFast
	| CombatMoveV0404MoveSunsteelStrike
	| CombatMoveV0405MoveMoongeistBeam
	| CombatMoveV0406MoveAuraWheelElectric
	| CombatMoveV0407MoveAuraWheelDark
	| CombatMoveV0408MoveHighJumpKick
	| CombatMoveV0462MoveForcePalmFast
	| CombatMoveV0463MoveSparklingAria
	| CombatMoveV0464MoveRageFist
	| CombatMoveV0465MoveFlowerTrick
	| CombatMoveV0466MoveFreezeShock
	| CombatMoveV0467MoveIceBurn
	| CombatMoveV0468MoveTorchSong
	| CombatMoveV0469MoveBehemothBlade
	| CombatMoveV0470MoveBehemothBash
	| CombatMoveV0471MoveUpperHand
	| CombatMoveV0472MoveThunderCage
	| CombatMoveV0482MoveDynamaxCannon
	| CombatMoveV0484MoveClangingScales
	| CombatMoveV0485MoveCrushGrip
	| CombatMoveV0486MoveDragonEnergy
	| CombatMoveV0487MoveAquaStep
	| CombatMoveV0488MoveChillingWater
	| CombatMoveV0489MoveSecretSword
	| CombatMoveV0490MoveBeakBlast
	| CombatMoveV0491MoveMindBlown
	| CombatMoveV0492MoveDrumBeating
	| CombatMoveV0493MovePyroball
	| CombatMoveV0494MoveGigatonHammer;

export type CombatMoveTemplateID = CombatMoveMasterfileEntry["templateId"];

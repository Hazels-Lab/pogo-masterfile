export interface MoveSettings<T extends string> {
	templateId: T;
	data: MoveSettingsData<T>;
}

export interface MoveSettingsData<T extends string> {
	templateId: T;
	moveSettings: {
		accuracyChance: 1;
		animationId: 4 | 5;
		criticalChance?: 0.05 | 0.25 | 0.5;
		damageWindowEndMs: 150 | 300 | 430 | 440 | 450 | 470 | 475 | 500 | 600 | 700 | 750 | 800 | 850 | 900 | 940 | 950 | 1000 | 1100 | 1200 | 1250 | 1300 | 1400 | 1450 | 1500 | 1600 | 1700 | 1750 | 1800 | 1850 | 1900 | 2000 | 2100 | 2200 | 2250 | 2300 | 2400 | 2450 | 2500 | 2600 | 2700 | 2800 | 2900 | 2950 | 3000 | 3100 | 3200 | 3300 | 3400 | 3500 | 3600 | 3650 | 3700 | 3800 | 3900 | 4000 | 4300 | 4400 | 4800;
		damageWindowStartMs?: 50 | 70 | 100 | 200 | 230 | 240 | 250 | 270 | 275 | 300 | 370 | 400 | 450 | 470 | 500 | 550 | 600 | 630 | 700 | 740 | 750 | 800 | 850 | 900 | 950 | 1000 | 1060 | 1100 | 1150 | 1200 | 1250 | 1300 | 1350 | 1370 | 1400 | 1500 | 1550 | 1600 | 1700 | 1800 | 1880 | 1900 | 2000 | 2045 | 2050 | 2100 | 2150 | 2200 | 2300 | 2400 | 2450 | 2500 | 2600 | 2700 | 2750 | 2800 | 2850 | 2900 | 2950 | 3000 | 3100 | 3200 | 3250 | 3300 | 3500;
		durationMs: 500 | 1000 | 1500 | 2000 | 2500 | 3000 | 3500 | 4000 | 4500 | 5000;
		energyDelta?: -100 | -50 | -33 | -25 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 19 | 20 | 22 | 23;
		healScalar?: 0.5 | 1;
		isLocked?: true;
		movementId: "ACID_FAST" | "ACID_SPRAY" | "ACROBATICS" | "AERIAL_ACE" | "AEROBLAST" | "AEROBLAST_PLUS" | "AEROBLAST_PLUS_PLUS" | "AIR_CUTTER" | "AIR_SLASH_FAST" | "ANCIENT_POWER" | "AQUA_JET" | "AQUA_STEP" | "AQUA_TAIL" | "ASTONISH_FAST" | "AURA_SPHERE" | "AURA_WHEEL_DARK" | "AURA_WHEEL_ELECTRIC" | "AURORA_BEAM" | "AVALANCHE" | "BEAK_BLAST" | "BEHEMOTH_BASH" | "BEHEMOTH_BLADE" | "BITE_FAST" | "BLAST_BURN" | "BLAZE_KICK" | "BLEAKWIND_STORM" | "BLIZZARD" | "BODY_SLAM" | "BONE_CLUB" | "BOOMBURST" | "BRAVE_BIRD" | "BREAKING_SWIPE" | "BRICK_BREAK" | "BRINE" | "BRUTAL_SWING" | "BUBBLE_BEAM" | "BUBBLE_FAST" | "BUG_BITE_FAST" | "BUG_BUZZ" | "BULLDOZE" | "BULLET_PUNCH_FAST" | "BULLET_SEED_FAST" | "CHARGE_BEAM_FAST" | "CHARM_FAST" | "CHILLING_WATER" | "CLANGING_SCALES" | "CLOSE_COMBAT" | "CONFUSION_FAST" | "COUNTER_FAST" | "CRABHAMMER" | "CROSS_CHOP" | "CROSS_POISON" | "CRUNCH" | "CRUSH_CLAW" | "CRUSH_GRIP" | "CUT_FAST" | "DARK_PULSE" | "DARKEST_LARIAT" | "DAZZLING_GLEAM" | "DIG" | "DISARMING_VOICE" | "DISCHARGE" | "DOOM_DESIRE" | "DOUBLE_IRON_BASH" | "DOUBLE_KICK_FAST" | "DRACO_METEOR" | "DRAGON_ASCENT" | "DRAGON_BREATH_FAST" | "DRAGON_CLAW" | "DRAGON_ENERGY" | "DRAGON_PULSE" | "DRAGON_TAIL_FAST" | "DRAIN_PUNCH" | "DRAINING_KISS" | "DRILL_PECK" | "DRILL_RUN" | "DRUM_BEATING" | "DYNAMAX_CANNON" | "DYNAMIC_PUNCH" | "EARTH_POWER" | "EARTHQUAKE" | "EMBER_FAST" | "ENERGY_BALL" | "EXTRASENSORY_FAST" | "FAIRY_WIND_FAST" | "FEATHER_DANCE" | "FEINT_ATTACK_FAST" | "FELL_STINGER" | "FIRE_BLAST" | "FIRE_FANG_FAST" | "FIRE_PUNCH" | "FIRE_SPIN_FAST" | "FISSURE" | "FLAME_BURST" | "FLAME_CHARGE" | "FLAME_WHEEL" | "FLAMETHROWER" | "FLASH_CANNON" | "FLOWER_TRICK" | "FLY" | "FLYING_PRESS" | "FOCUS_BLAST" | "FORCE_PALM_FAST" | "FOUL_PLAY" | "FREEZE_SHOCK" | "FRENZY_PLANT" | "FROST_BREATH_FAST" | "FRUSTRATION" | "FURY_CUTTER_FAST" | "FUSION_BOLT" | "FUSION_FLARE" | "FUTURESIGHT" | "GEOMANCY_FAST" | "GIGA_DRAIN" | "GIGA_IMPACT" | "GIGATON_HAMMER" | "GLACIATE" | "GRASS_KNOT" | "GUNK_SHOT" | "GUST_FAST" | "GYRO_BALL" | "HEART_STAMP" | "HEAT_WAVE" | "HEAVY_SLAM" | "HEX_FAST" | "HIDDEN_POWER_FAST" | "HIGH_HORSEPOWER" | "HIGH_JUMP_KICK" | "HORN_ATTACK" | "HORN_DRILL" | "HURRICANE" | "HYDRO_CANNON" | "HYDRO_PUMP" | "HYDRO_PUMP_BLASTOISE" | "HYPER_BEAM" | "HYPER_FANG" | "ICE_BEAM" | "ICE_BURN" | "ICE_FANG_FAST" | "ICE_PUNCH" | "ICE_SHARD_FAST" | "ICICLE_SPEAR" | "ICY_WIND" | "INCINERATE_FAST" | "INFESTATION_FAST" | "IRON_HEAD" | "IRON_TAIL_FAST" | "KARATE_CHOP_FAST" | "LAST_RESORT" | "LEAF_BLADE" | "LEAF_STORM" | "LEAF_TORNADO" | "LEAFAGE_FAST" | "LEECH_LIFE" | "LICK_FAST" | "LIQUIDATION" | "LOCK_ON_FAST" | "LOW_KICK_FAST" | "LOW_SWEEP" | "LUNGE" | "LUSTER_PURGE" | "MAGICAL_LEAF_FAST" | "MAGMA_STORM" | "MAGNET_BOMB" | "MEGA_DRAIN" | "MEGAHORN" | "METAL_CLAW_FAST" | "METAL_SOUND_FAST" | "METEOR_BEAM" | "METEOR_MASH" | "MIND_BLOWN" | "MIRROR_COAT" | "MIRROR_SHOT" | "MIST_BALL" | "MOONBLAST" | "MOONGEIST_BEAM" | "MUD_BOMB" | "MUD_SHOT_FAST" | "MUD_SLAP_FAST" | "MUDDY_WATER" | "MYSTICAL_FIRE" | "NATURES_MADNESS" | "NIGHT_SHADE" | "NIGHT_SLASH" | "OBLIVION_WING" | "OBSTRUCT" | "OCTAZOOKA" | "OMINOUS_WIND" | "ORIGIN_PULSE" | "OUTRAGE" | "OVERHEAT" | "PARABOLIC_CHARGE" | "PAYBACK" | "PECK_FAST" | "PETAL_BLIZZARD" | "PLAY_ROUGH" | "POISON_FANG" | "POISON_JAB_FAST" | "POISON_STING_FAST" | "POLTERGEIST" | "POUND_FAST" | "POWDER_SNOW_FAST" | "POWER_GEM" | "POWER_UP_PUNCH" | "POWER_WHIP" | "PRECIPICE_BLADES" | "PRESENT_FAST" | "PSYBEAM" | "PSYCHIC" | "PSYCHIC_FANGS" | "PSYCHO_BOOST" | "PSYCHO_CUT_FAST" | "PSYSHOCK" | "PSYSTRIKE" | "PSYWAVE_FAST" | "PYROBALL" | "QUICK_ATTACK_FAST" | "RAGE_FIST" | "RAZOR_LEAF_FAST" | "RAZOR_SHELL" | "REST" | "RETURN" | "ROAR_OF_TIME" | "ROCK_BLAST" | "ROCK_SLIDE" | "ROCK_SMASH_FAST" | "ROCK_THROW_FAST" | "ROCK_TOMB" | "ROCK_WRECKER" | "ROLLOUT_FAST" | "SACRED_FIRE" | "SACRED_FIRE_PLUS" | "SACRED_FIRE_PLUS_PLUS" | "SACRED_SWORD" | "SAND_ATTACK_FAST" | "SAND_TOMB" | "SANDSEAR_STORM" | "SCALD" | "SCALD_BLASTOISE" | "SCORCHING_SANDS" | "SCRATCH_FAST" | "SECRET_SWORD" | "SEED_BOMB" | "SEED_FLARE" | "SHADOW_BALL" | "SHADOW_BONE" | "SHADOW_CLAW_FAST" | "SHADOW_FORCE" | "SHADOW_PUNCH" | "SHADOW_SNEAK" | "SIGNAL_BEAM" | "SILVER_WIND" | "SKULL_BASH" | "SKY_ATTACK" | "SLUDGE" | "SLUDGE_BOMB" | "SLUDGE_WAVE" | "SMACK_DOWN_FAST" | "SNARL_FAST" | "SOLAR_BEAM" | "SPACIAL_REND" | "SPARK_FAST" | "SPARKLING_ARIA" | "SPIRIT_SHACKLE" | "SPLASH_FAST" | "STEEL_WING_FAST" | "STOMP" | "STONE_EDGE" | "STRUGGLE" | "STRUGGLE_BUG_FAST" | "SUBMISSION" | "SUCKER_PUNCH_FAST" | "SUNSTEEL_STRIKE" | "SUPER_POWER" | "SURF" | "SWIFT" | "SYNCHRONOISE" | "TACKLE_FAST" | "TAKE_DOWN_FAST" | "TECHNO_BLAST_BURN" | "TECHNO_BLAST_CHILL" | "TECHNO_BLAST_NORMAL" | "TECHNO_BLAST_SHOCK" | "TECHNO_BLAST_WATER" | "THUNDER" | "THUNDER_CAGE" | "THUNDER_FANG_FAST" | "THUNDER_PUNCH" | "THUNDER_SHOCK_FAST" | "THUNDERBOLT" | "TORCH_SONG" | "TRAILBLAZE" | "TRANSFORM_FAST" | "TRI_ATTACK" | "TRIPLE_AXEL" | "TWISTER" | "UPPER_HAND" | "V_CREATE" | "VICE_GRIP" | "VINE_WHIP_FAST" | "VN_BM_001" | "VN_BM_002" | "VN_BM_003" | "VN_BM_004" | "VN_BM_005" | "VN_BM_006" | "VN_BM_007" | "VN_BM_008" | "VN_BM_009" | "VN_BM_010" | "VN_BM_011" | "VN_BM_012" | "VN_BM_013" | "VN_BM_014" | "VN_BM_015" | "VN_BM_016" | "VN_BM_017" | "VN_BM_018" | "VN_BM_019" | "VN_BM_020" | "VN_BM_021" | "VN_BM_022" | "VN_BM_023" | "VN_BM_024" | "VN_BM_025" | "VN_BM_026" | "VN_BM_027" | "VN_BM_028" | "VN_BM_029" | "VN_BM_030" | "VN_BM_031" | "VN_BM_032" | "VN_BM_033" | "VN_BM_034" | "VN_BM_035" | "VN_BM_036" | "VN_BM_037" | "VN_BM_038" | "VN_BM_039" | "VN_BM_040" | "VN_BM_041" | "VN_BM_042" | "VN_BM_043" | "VN_BM_044" | "VN_BM_045" | "VN_BM_046" | "VN_BM_047" | "VN_BM_048" | "VN_BM_049" | "VN_BM_050" | "VN_BM_051" | "VN_BM_052" | "VN_BM_053" | "VN_BM_054" | "VN_BM_055" | "VN_BM_056" | "VN_BM_057" | "VN_BM_058" | "VN_BM_059" | "VN_BM_060" | "VN_BM_061" | "VN_BM_062" | "VOLT_SWITCH_FAST" | "VOLT_TACKLE" | "WATER_GUN_FAST" | "WATER_GUN_FAST_BLASTOISE" | "WATER_PULSE" | "WATER_SHURIKEN_FAST" | "WATERFALL_FAST" | "WEATHER_BALL_FIRE" | "WEATHER_BALL_ICE" | "WEATHER_BALL_NORMAL" | "WEATHER_BALL_ROCK" | "WEATHER_BALL_WATER" | "WILD_CHARGE" | "WILDBOLT_STORM" | "WING_ATTACK_FAST" | "WRAP" | "WRAP_GREEN" | "WRAP_PINK" | "X_SCISSOR" | "YAWN_FAST" | "ZAP_CANNON" | "ZEN_HEADBUTT_FAST";
		obMoveSettingsNumber18?: [
			0 | 250 | 350,
			0 | 300 | 400,
			0 | 350 | 450,
			0 | 450 | 550
		];
		pokemonType: "POKEMON_TYPE_BUG" | "POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_ELECTRIC" | "POKEMON_TYPE_FAIRY" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_FIRE" | "POKEMON_TYPE_FLYING" | "POKEMON_TYPE_GHOST" | "POKEMON_TYPE_GRASS" | "POKEMON_TYPE_GROUND" | "POKEMON_TYPE_ICE" | "POKEMON_TYPE_NORMAL" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_ROCK" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER";
		power?: 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 17 | 19 | 20 | 25 | 30 | 32 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | 105 | 110 | 115 | 120 | 125 | 130 | 135 | 140 | 150 | 155 | 160 | 180 | 200 | 210 | 215 | 220 | 225 | 230 | 300 | 9000 | 9001;
		staminaLossScalar?: 0.01 | 0.04 | 0.05 | 0.055 | 0.06 | 0.065 | 0.07 | 0.075 | 0.08 | 0.085 | 0.09 | 0.095 | 0.1 | 0.11 | 0.12 | 0.15;
		trainerLevelMax?: 100;
		trainerLevelMin?: 1;
		vfxName: "acid_fast" | "acid_spray" | "acrobatics" | "aerial_ace" | "aeroblast" | "air_cutter" | "air_slash_fast" | "ancient_power" | "aqua_jet" | "aqua_step" | "aqua_tail" | "astonish_fast" | "aura_sphere" | "aura_wheel_electric" | "aurora_beam" | "avalanche" | "beak_blast" | "behemoth_bash" | "behemoth_blade" | "bite_fast" | "blast_burn" | "blaze_kick" | "bleakwind_storm" | "blizzard" | "body_slam" | "bone_club" | "boomburst" | "brave_bird" | "breaking_swipe" | "brick_break" | "brine" | "brutal_swing" | "bubble_beam" | "bubble_fast" | "bug_bite_fast" | "bug_buzz" | "bulldoze" | "bullet_punch_fast" | "bullet_seed_fast" | "charge_beam_fast" | "charm_fast" | "chilling_water" | "clanging_scales" | "close_combat" | "confusion_fast" | "counter_fast" | "crabhammer" | "cross_chop" | "cross_poison" | "crunch" | "crush_claw" | "crush_grip" | "cut_fast" | "dark_pulse" | "darkest_lariat" | "dazzling_gleam" | "dig" | "disarming_voice" | "discharge" | "doom_desire" | "double_iron_bash" | "double_kick_fast" | "draco_meteor" | "dragon_ascent" | "dragon_breath_fast" | "dragon_claw" | "dragon_energy" | "dragon_pulse" | "dragon_tail_fast" | "drain_punch" | "draining_kiss" | "drill_peck" | "drill_run" | "drum_beating" | "dynamax_cannon" | "dynamic_punch" | "earth_power" | "earthquake" | "ember_fast" | "energy_ball" | "extrasensory_fast" | "fairy_wind_fast" | "feather_dance" | "feint_attack_fast" | "fell_stinger" | "fire_blast" | "fire_fang_fast" | "fire_punch" | "fire_spin_fast" | "fissure" | "flame_burst" | "flame_charge" | "flame_wheel" | "flamethrower" | "flash_cannon" | "flower_trick" | "fly" | "flying_press" | "focus_blast" | "force_palm_fast" | "foul_play" | "freeze_shock" | "frenzy_plant" | "frost_breath_fast" | "frustration" | "fury_cutter_fast" | "fusion_bolt" | "fusion_flare" | "futuresight" | "geomancy_fast" | "giga_drain" | "giga_impact" | "gigaton_hammer" | "glaciate" | "gmax_befuddle" | "gmax_cannonade" | "gmax_centiferno" | "gmax_chistrike" | "gmax_cuddle" | "gmax_depletion" | "gmax_drumsolo" | "gmax_finale" | "gmax_fireball" | "gmax_foamburst" | "gmax_goldrush" | "gmax_gravitas" | "gmax_hydrosnipe" | "gmax_malodor" | "gmax_meltdown" | "gmax_oneblow" | "gmax_rapidflow" | "gmax_replenish" | "gmax_resonance" | "gmax_sandblast" | "gmax_smite" | "gmax_snooze" | "gmax_steelsurge" | "gmax_stonesurge" | "gmax_stun_shock" | "gmax_sweetness" | "gmax_tartness" | "gmax_terror" | "gmax_vinelash" | "gmax_volcalith" | "gmax_voltcrash" | "gmax_wildfire" | "gmax_windrage" | "grass_knot" | "gunk_shot" | "gust_fast" | "gyro_ball" | "heart_stamp" | "heat_wave" | "heavy_slam" | "hex_fast" | "hidden_power_fast" | "high_horsepower" | "high_jump_kick" | "horn_attack" | "horn_drill" | "hurricane" | "hydro_cannon" | "hydro_pump" | "hydro_pump_blastoise" | "hyper_beam" | "hyper_fang" | "ice_beam" | "ice_burn" | "ice_fang_fast" | "ice_punch" | "ice_shard_fast" | "icicle_spear" | "icy_wind" | "incinerate_fast" | "infestation_fast" | "iron_head" | "iron_tail_fast" | "karate_chop_fast" | "last_resort" | "leaf_blade" | "leaf_storm" | "leaf_tornado" | "leafage_fast" | "leech_life" | "lick_fast" | "liquidation" | "lock_on_fast" | "low_kick_fast" | "low_sweep" | "lunge" | "luster_purge" | "magical_leaf_fast" | "magma_storm" | "magnet_bomb" | "max_airstream" | "max_behemoth_bash" | "max_behemoth_blade" | "max_darkness" | "max_dynamax_cannon" | "max_flare" | "max_flutterby" | "max_geyser" | "max_hailstorm" | "max_heal" | "max_knuckle" | "max_lightning" | "max_mindstorm" | "max_ooze" | "max_overgrowth" | "max_phantasm" | "max_quake" | "max_rockfall" | "max_shield" | "max_starfall" | "max_steelspike" | "max_strike" | "max_wyrmwind" | "mega_drain" | "megahorn" | "metal_claw_fast" | "metal_sound" | "meteor_beam" | "meteor_mash" | "mind_blown" | "mirror_coat" | "mirror_shot" | "mist_ball" | "moonblast" | "moongeist_beam" | "mud_bomb" | "mud_shot_fast" | "mud_slap_fast" | "muddy_water" | "myst_fire" | "natures_madness" | "night_shade" | "night_slash" | "oblivion_wing" | "obstruct" | "octazooka" | "ominous_wind" | "origin_pulse" | "outrage" | "overheat" | "parabolic_charge" | "payback" | "peck_fast" | "petal_blizzard" | "play_rough" | "poison_fang" | "poison_jab_fast" | "poison_sting_fast" | "poltergeist" | "pound_fast" | "powder_snow_fast" | "power_gem" | "power_up_punch" | "power_whip" | "precipice_blades" | "present_fast" | "psybeam" | "psychic" | "psychic_fangs" | "psycho_boost" | "psycho_cut_fast" | "psyshock" | "psystrike" | "psywave" | "pyroball" | "quick_attack_fast" | "rage_fist" | "razor_leaf_fast" | "razor_shell" | "rest" | "return" | "roar_of_time" | "rock_blast" | "rock_slide" | "rock_smash_fast" | "rock_throw_fast" | "rock_tomb" | "rock_wrecker" | "rollout_fast" | "sacred_fire" | "sacred_sword" | "sand_attack" | "sand_tomb" | "sandsear_storm" | "scald" | "scald_blastoise" | "scorching_sands" | "scratch_fast" | "secret_sword" | "seed_bomb" | "seed_flare" | "shadow_ball" | "shadow_bone" | "shadow_claw_fast" | "shadow_force" | "shadow_punch" | "shadow_sneak" | "signal_beam" | "silver_wind" | "skull_bash" | "sky_attack" | "sludge" | "sludge_bomb" | "sludge_wave" | "smack_down_fast" | "snarl_fast" | "solar_beam" | "spacial_rend" | "spark_fast" | "sparkling_aria" | "spirit_shackle" | "splash_fast" | "steel_wing_fast" | "stomp" | "stone_edge" | "struggle" | "struggle_bug_fast" | "submission" | "sucker_punch_fast" | "sunsteel_strike" | "super_power" | "surf" | "swift" | "synchronoise" | "tackle_fast" | "take_down_fast" | "techno_blast_burn" | "techno_blast_chill" | "techno_blast_normal" | "techno_blast_shock" | "techno_blast_water" | "thunder" | "thunder_cage" | "thunder_fang_fast" | "thunder_punch" | "thunder_shock_fast" | "thunderbolt" | "torch_song" | "trailblaze" | "transform_fast" | "tri_attack" | "triple_axel" | "twister" | "upper_hand" | "v_create" | "vice_grip" | "vine_whip_fast" | "volt_switch_fast" | "volt_tackle" | "water_gun_fast" | "water_gun_fast_blastoise" | "water_pulse" | "water_shuriken_fast" | "waterfall_fast" | "weather_ball_fire" | "weather_ball_ice" | "weather_ball_normal" | "weather_ball_rock" | "weather_ball_water" | "wild_charge" | "wildbold_storm" | "wing_attack_fast" | "wrap" | "wrap_green" | "wrap_pink" | "x_scissor" | "yawn_fast" | "zap_cannon" | "zen_headbutt_fast";
	};
}

export type MoveSettingsV0013MoveWrap = MoveSettings<"V0013_MOVE_WRAP">;
export type MoveSettingsV0014MoveHyperBeam = MoveSettings<"V0014_MOVE_HYPER_BEAM">;
export type MoveSettingsV0016MoveDarkPulse = MoveSettings<"V0016_MOVE_DARK_PULSE">;
export type MoveSettingsV0018MoveSludge = MoveSettings<"V0018_MOVE_SLUDGE">;
export type MoveSettingsV0020MoveViceGrip = MoveSettings<"V0020_MOVE_VICE_GRIP">;
export type MoveSettingsV0021MoveFlameWheel = MoveSettings<"V0021_MOVE_FLAME_WHEEL">;
export type MoveSettingsV0022MoveMegahorn = MoveSettings<"V0022_MOVE_MEGAHORN">;
export type MoveSettingsV0024MoveFlamethrower = MoveSettings<"V0024_MOVE_FLAMETHROWER">;
export type MoveSettingsV0026MoveDig = MoveSettings<"V0026_MOVE_DIG">;
export type MoveSettingsV0028MoveCrossChop = MoveSettings<"V0028_MOVE_CROSS_CHOP">;
export type MoveSettingsV0030MovePsybeam = MoveSettings<"V0030_MOVE_PSYBEAM">;
export type MoveSettingsV0031MoveEarthquake = MoveSettings<"V0031_MOVE_EARTHQUAKE">;
export type MoveSettingsV0032MoveStoneEdge = MoveSettings<"V0032_MOVE_STONE_EDGE">;
export type MoveSettingsV0033MoveIcePunch = MoveSettings<"V0033_MOVE_ICE_PUNCH">;
export type MoveSettingsV0034MoveHeartStamp = MoveSettings<"V0034_MOVE_HEART_STAMP">;
export type MoveSettingsV0035MoveDischarge = MoveSettings<"V0035_MOVE_DISCHARGE">;
export type MoveSettingsV0036MoveFlashCannon = MoveSettings<"V0036_MOVE_FLASH_CANNON">;
export type MoveSettingsV0038MoveDrillPeck = MoveSettings<"V0038_MOVE_DRILL_PECK">;
export type MoveSettingsV0039MoveIceBeam = MoveSettings<"V0039_MOVE_ICE_BEAM">;
export type MoveSettingsV0040MoveBlizzard = MoveSettings<"V0040_MOVE_BLIZZARD">;
export type MoveSettingsV0042MoveHeatWave = MoveSettings<"V0042_MOVE_HEAT_WAVE">;
export type MoveSettingsV0045MoveAerialAce = MoveSettings<"V0045_MOVE_AERIAL_ACE">;
export type MoveSettingsV0046MoveDrillRun = MoveSettings<"V0046_MOVE_DRILL_RUN">;
export type MoveSettingsV0047MovePetalBlizzard = MoveSettings<"V0047_MOVE_PETAL_BLIZZARD">;
export type MoveSettingsV0048MoveMegaDrain = MoveSettings<"V0048_MOVE_MEGA_DRAIN">;
export type MoveSettingsV0049MoveBugBuzz = MoveSettings<"V0049_MOVE_BUG_BUZZ">;
export type MoveSettingsV0050MovePoisonFang = MoveSettings<"V0050_MOVE_POISON_FANG">;
export type MoveSettingsV0051MoveNightSlash = MoveSettings<"V0051_MOVE_NIGHT_SLASH">;
export type MoveSettingsV0053MoveBubbleBeam = MoveSettings<"V0053_MOVE_BUBBLE_BEAM">;
export type MoveSettingsV0054MoveSubmission = MoveSettings<"V0054_MOVE_SUBMISSION">;
export type MoveSettingsV0056MoveLowSweep = MoveSettings<"V0056_MOVE_LOW_SWEEP">;
export type MoveSettingsV0057MoveAquaJet = MoveSettings<"V0057_MOVE_AQUA_JET">;
export type MoveSettingsV0058MoveAquaTail = MoveSettings<"V0058_MOVE_AQUA_TAIL">;
export type MoveSettingsV0059MoveSeedBomb = MoveSettings<"V0059_MOVE_SEED_BOMB">;
export type MoveSettingsV0060MovePsyshock = MoveSettings<"V0060_MOVE_PSYSHOCK">;
export type MoveSettingsV0062MoveAncientPower = MoveSettings<"V0062_MOVE_ANCIENT_POWER">;
export type MoveSettingsV0063MoveRockTomb = MoveSettings<"V0063_MOVE_ROCK_TOMB">;
export type MoveSettingsV0064MoveRockSlide = MoveSettings<"V0064_MOVE_ROCK_SLIDE">;
export type MoveSettingsV0065MovePowerGem = MoveSettings<"V0065_MOVE_POWER_GEM">;
export type MoveSettingsV0066MoveShadowSneak = MoveSettings<"V0066_MOVE_SHADOW_SNEAK">;
export type MoveSettingsV0067MoveShadowPunch = MoveSettings<"V0067_MOVE_SHADOW_PUNCH">;
export type MoveSettingsV0069MoveOminousWind = MoveSettings<"V0069_MOVE_OMINOUS_WIND">;
export type MoveSettingsV0070MoveShadowBall = MoveSettings<"V0070_MOVE_SHADOW_BALL">;
export type MoveSettingsV0072MoveMagnetBomb = MoveSettings<"V0072_MOVE_MAGNET_BOMB">;
export type MoveSettingsV0074MoveIronHead = MoveSettings<"V0074_MOVE_IRON_HEAD">;
export type MoveSettingsV0075MoveParabolicCharge = MoveSettings<"V0075_MOVE_PARABOLIC_CHARGE">;
export type MoveSettingsV0077MoveThunderPunch = MoveSettings<"V0077_MOVE_THUNDER_PUNCH">;
export type MoveSettingsV0078MoveThunder = MoveSettings<"V0078_MOVE_THUNDER">;
export type MoveSettingsV0079MoveThunderbolt = MoveSettings<"V0079_MOVE_THUNDERBOLT">;
export type MoveSettingsV0080MoveTwister = MoveSettings<"V0080_MOVE_TWISTER">;
export type MoveSettingsV0082MoveDragonPulse = MoveSettings<"V0082_MOVE_DRAGON_PULSE">;
export type MoveSettingsV0083MoveDragonClaw = MoveSettings<"V0083_MOVE_DRAGON_CLAW">;
export type MoveSettingsV0084MoveDisarmingVoice = MoveSettings<"V0084_MOVE_DISARMING_VOICE">;
export type MoveSettingsV0085MoveDrainingKiss = MoveSettings<"V0085_MOVE_DRAINING_KISS">;
export type MoveSettingsV0086MoveDazzlingGleam = MoveSettings<"V0086_MOVE_DAZZLING_GLEAM">;
export type MoveSettingsV0087MoveMoonblast = MoveSettings<"V0087_MOVE_MOONBLAST">;
export type MoveSettingsV0088MovePlayRough = MoveSettings<"V0088_MOVE_PLAY_ROUGH">;
export type MoveSettingsV0089MoveCrossPoison = MoveSettings<"V0089_MOVE_CROSS_POISON">;
export type MoveSettingsV0090MoveSludgeBomb = MoveSettings<"V0090_MOVE_SLUDGE_BOMB">;
export type MoveSettingsV0091MoveSludgeWave = MoveSettings<"V0091_MOVE_SLUDGE_WAVE">;
export type MoveSettingsV0092MoveGunkShot = MoveSettings<"V0092_MOVE_GUNK_SHOT">;
export type MoveSettingsV0094MoveBoneClub = MoveSettings<"V0094_MOVE_BONE_CLUB">;
export type MoveSettingsV0095MoveBulldoze = MoveSettings<"V0095_MOVE_BULLDOZE">;
export type MoveSettingsV0096MoveMudBomb = MoveSettings<"V0096_MOVE_MUD_BOMB">;
export type MoveSettingsV0099MoveSignalBeam = MoveSettings<"V0099_MOVE_SIGNAL_BEAM">;
export type MoveSettingsV0100MoveXScissor = MoveSettings<"V0100_MOVE_X_SCISSOR">;
export type MoveSettingsV0101MoveFlameCharge = MoveSettings<"V0101_MOVE_FLAME_CHARGE">;
export type MoveSettingsV0102MoveFlameBurst = MoveSettings<"V0102_MOVE_FLAME_BURST">;
export type MoveSettingsV0103MoveFireBlast = MoveSettings<"V0103_MOVE_FIRE_BLAST">;
export type MoveSettingsV0104MoveBrine = MoveSettings<"V0104_MOVE_BRINE">;
export type MoveSettingsV0105MoveWaterPulse = MoveSettings<"V0105_MOVE_WATER_PULSE">;
export type MoveSettingsV0106MoveScald = MoveSettings<"V0106_MOVE_SCALD">;
export type MoveSettingsV0107MoveHydroPump = MoveSettings<"V0107_MOVE_HYDRO_PUMP">;
export type MoveSettingsV0108MovePsychic = MoveSettings<"V0108_MOVE_PSYCHIC">;
export type MoveSettingsV0109MovePsystrike = MoveSettings<"V0109_MOVE_PSYSTRIKE">;
export type MoveSettingsV0111MoveIcyWind = MoveSettings<"V0111_MOVE_ICY_WIND">;
export type MoveSettingsV0114MoveGigaDrain = MoveSettings<"V0114_MOVE_GIGA_DRAIN">;
export type MoveSettingsV0115MoveFirePunch = MoveSettings<"V0115_MOVE_FIRE_PUNCH">;
export type MoveSettingsV0116MoveSolarBeam = MoveSettings<"V0116_MOVE_SOLAR_BEAM">;
export type MoveSettingsV0117MoveLeafBlade = MoveSettings<"V0117_MOVE_LEAF_BLADE">;
export type MoveSettingsV0118MovePowerWhip = MoveSettings<"V0118_MOVE_POWER_WHIP">;
export type MoveSettingsV0121MoveAirCutter = MoveSettings<"V0121_MOVE_AIR_CUTTER">;
export type MoveSettingsV0122MoveHurricane = MoveSettings<"V0122_MOVE_HURRICANE">;
export type MoveSettingsV0123MoveBrickBreak = MoveSettings<"V0123_MOVE_BRICK_BREAK">;
export type MoveSettingsV0125MoveSwift = MoveSettings<"V0125_MOVE_SWIFT">;
export type MoveSettingsV0126MoveHornAttack = MoveSettings<"V0126_MOVE_HORN_ATTACK">;
export type MoveSettingsV0127MoveStomp = MoveSettings<"V0127_MOVE_STOMP">;
export type MoveSettingsV0129MoveHyperFang = MoveSettings<"V0129_MOVE_HYPER_FANG">;
export type MoveSettingsV0131MoveBodySlam = MoveSettings<"V0131_MOVE_BODY_SLAM">;
export type MoveSettingsV0132MoveRest = MoveSettings<"V0132_MOVE_REST">;
export type MoveSettingsV0133MoveStruggle = MoveSettings<"V0133_MOVE_STRUGGLE">;
export type MoveSettingsV0134MoveScaldBlastoise = MoveSettings<"V0134_MOVE_SCALD_BLASTOISE">;
export type MoveSettingsV0135MoveHydroPumpBlastoise = MoveSettings<"V0135_MOVE_HYDRO_PUMP_BLASTOISE">;
export type MoveSettingsV0136MoveWrapGreen = MoveSettings<"V0136_MOVE_WRAP_GREEN">;
export type MoveSettingsV0137MoveWrapPink = MoveSettings<"V0137_MOVE_WRAP_PINK">;
export type MoveSettingsV0200MoveFuryCutterFast = MoveSettings<"V0200_MOVE_FURY_CUTTER_FAST">;
export type MoveSettingsV0201MoveBugBiteFast = MoveSettings<"V0201_MOVE_BUG_BITE_FAST">;
export type MoveSettingsV0202MoveBiteFast = MoveSettings<"V0202_MOVE_BITE_FAST">;
export type MoveSettingsV0203MoveSuckerPunchFast = MoveSettings<"V0203_MOVE_SUCKER_PUNCH_FAST">;
export type MoveSettingsV0204MoveDragonBreathFast = MoveSettings<"V0204_MOVE_DRAGON_BREATH_FAST">;
export type MoveSettingsV0205MoveThunderShockFast = MoveSettings<"V0205_MOVE_THUNDER_SHOCK_FAST">;
export type MoveSettingsV0206MoveSparkFast = MoveSettings<"V0206_MOVE_SPARK_FAST">;
export type MoveSettingsV0207MoveLowKickFast = MoveSettings<"V0207_MOVE_LOW_KICK_FAST">;
export type MoveSettingsV0208MoveKarateChopFast = MoveSettings<"V0208_MOVE_KARATE_CHOP_FAST">;
export type MoveSettingsV0209MoveEmberFast = MoveSettings<"V0209_MOVE_EMBER_FAST">;
export type MoveSettingsV0210MoveWingAttackFast = MoveSettings<"V0210_MOVE_WING_ATTACK_FAST">;
export type MoveSettingsV0211MovePeckFast = MoveSettings<"V0211_MOVE_PECK_FAST">;
export type MoveSettingsV0212MoveLickFast = MoveSettings<"V0212_MOVE_LICK_FAST">;
export type MoveSettingsV0213MoveShadowClawFast = MoveSettings<"V0213_MOVE_SHADOW_CLAW_FAST">;
export type MoveSettingsV0214MoveVineWhipFast = MoveSettings<"V0214_MOVE_VINE_WHIP_FAST">;
export type MoveSettingsV0215MoveRazorLeafFast = MoveSettings<"V0215_MOVE_RAZOR_LEAF_FAST">;
export type MoveSettingsV0216MoveMudShotFast = MoveSettings<"V0216_MOVE_MUD_SHOT_FAST">;
export type MoveSettingsV0217MoveIceShardFast = MoveSettings<"V0217_MOVE_ICE_SHARD_FAST">;
export type MoveSettingsV0218MoveFrostBreathFast = MoveSettings<"V0218_MOVE_FROST_BREATH_FAST">;
export type MoveSettingsV0219MoveQuickAttackFast = MoveSettings<"V0219_MOVE_QUICK_ATTACK_FAST">;
export type MoveSettingsV0220MoveScratchFast = MoveSettings<"V0220_MOVE_SCRATCH_FAST">;
export type MoveSettingsV0221MoveTackleFast = MoveSettings<"V0221_MOVE_TACKLE_FAST">;
export type MoveSettingsV0222MovePoundFast = MoveSettings<"V0222_MOVE_POUND_FAST">;
export type MoveSettingsV0223MoveCutFast = MoveSettings<"V0223_MOVE_CUT_FAST">;
export type MoveSettingsV0224MovePoisonJabFast = MoveSettings<"V0224_MOVE_POISON_JAB_FAST">;
export type MoveSettingsV0225MoveAcidFast = MoveSettings<"V0225_MOVE_ACID_FAST">;
export type MoveSettingsV0226MovePsychoCutFast = MoveSettings<"V0226_MOVE_PSYCHO_CUT_FAST">;
export type MoveSettingsV0227MoveRockThrowFast = MoveSettings<"V0227_MOVE_ROCK_THROW_FAST">;
export type MoveSettingsV0228MoveMetalClawFast = MoveSettings<"V0228_MOVE_METAL_CLAW_FAST">;
export type MoveSettingsV0229MoveBulletPunchFast = MoveSettings<"V0229_MOVE_BULLET_PUNCH_FAST">;
export type MoveSettingsV0230MoveWaterGunFast = MoveSettings<"V0230_MOVE_WATER_GUN_FAST">;
export type MoveSettingsV0231MoveSplashFast = MoveSettings<"V0231_MOVE_SPLASH_FAST">;
export type MoveSettingsV0232MoveWaterGunFastBlastoise = MoveSettings<"V0232_MOVE_WATER_GUN_FAST_BLASTOISE">;
export type MoveSettingsV0233MoveMudSlapFast = MoveSettings<"V0233_MOVE_MUD_SLAP_FAST">;
export type MoveSettingsV0234MoveZenHeadbuttFast = MoveSettings<"V0234_MOVE_ZEN_HEADBUTT_FAST">;
export type MoveSettingsV0235MoveConfusionFast = MoveSettings<"V0235_MOVE_CONFUSION_FAST">;
export type MoveSettingsV0236MovePoisonStingFast = MoveSettings<"V0236_MOVE_POISON_STING_FAST">;
export type MoveSettingsV0237MoveBubbleFast = MoveSettings<"V0237_MOVE_BUBBLE_FAST">;
export type MoveSettingsV0238MoveFeintAttackFast = MoveSettings<"V0238_MOVE_FEINT_ATTACK_FAST">;
export type MoveSettingsV0239MoveSteelWingFast = MoveSettings<"V0239_MOVE_STEEL_WING_FAST">;
export type MoveSettingsV0240MoveFireFangFast = MoveSettings<"V0240_MOVE_FIRE_FANG_FAST">;
export type MoveSettingsV0241MoveRockSmashFast = MoveSettings<"V0241_MOVE_ROCK_SMASH_FAST">;
export type MoveSettingsV0242MoveTransformFast = MoveSettings<"V0242_MOVE_TRANSFORM_FAST">;
export type MoveSettingsV0243MoveCounterFast = MoveSettings<"V0243_MOVE_COUNTER_FAST">;
export type MoveSettingsV0244MovePowderSnowFast = MoveSettings<"V0244_MOVE_POWDER_SNOW_FAST">;
export type MoveSettingsV0245MoveCloseCombat = MoveSettings<"V0245_MOVE_CLOSE_COMBAT">;
export type MoveSettingsV0246MoveDynamicPunch = MoveSettings<"V0246_MOVE_DYNAMIC_PUNCH">;
export type MoveSettingsV0247MoveFocusBlast = MoveSettings<"V0247_MOVE_FOCUS_BLAST">;
export type MoveSettingsV0248MoveAuroraBeam = MoveSettings<"V0248_MOVE_AURORA_BEAM">;
export type MoveSettingsV0249MoveChargeBeamFast = MoveSettings<"V0249_MOVE_CHARGE_BEAM_FAST">;
export type MoveSettingsV0250MoveVoltSwitchFast = MoveSettings<"V0250_MOVE_VOLT_SWITCH_FAST">;
export type MoveSettingsV0251MoveWildCharge = MoveSettings<"V0251_MOVE_WILD_CHARGE">;
export type MoveSettingsV0252MoveZapCannon = MoveSettings<"V0252_MOVE_ZAP_CANNON">;
export type MoveSettingsV0253MoveDragonTailFast = MoveSettings<"V0253_MOVE_DRAGON_TAIL_FAST">;
export type MoveSettingsV0254MoveAvalanche = MoveSettings<"V0254_MOVE_AVALANCHE">;
export type MoveSettingsV0255MoveAirSlashFast = MoveSettings<"V0255_MOVE_AIR_SLASH_FAST">;
export type MoveSettingsV0256MoveBraveBird = MoveSettings<"V0256_MOVE_BRAVE_BIRD">;
export type MoveSettingsV0257MoveSkyAttack = MoveSettings<"V0257_MOVE_SKY_ATTACK">;
export type MoveSettingsV0258MoveSandTomb = MoveSettings<"V0258_MOVE_SAND_TOMB">;
export type MoveSettingsV0259MoveRockBlast = MoveSettings<"V0259_MOVE_ROCK_BLAST">;
export type MoveSettingsV0260MoveInfestationFast = MoveSettings<"V0260_MOVE_INFESTATION_FAST">;
export type MoveSettingsV0261MoveStruggleBugFast = MoveSettings<"V0261_MOVE_STRUGGLE_BUG_FAST">;
export type MoveSettingsV0262MoveSilverWind = MoveSettings<"V0262_MOVE_SILVER_WIND">;
export type MoveSettingsV0263MoveAstonishFast = MoveSettings<"V0263_MOVE_ASTONISH_FAST">;
export type MoveSettingsV0264MoveHexFast = MoveSettings<"V0264_MOVE_HEX_FAST">;
export type MoveSettingsV0265MoveNightShade = MoveSettings<"V0265_MOVE_NIGHT_SHADE">;
export type MoveSettingsV0266MoveIronTailFast = MoveSettings<"V0266_MOVE_IRON_TAIL_FAST">;
export type MoveSettingsV0267MoveGyroBall = MoveSettings<"V0267_MOVE_GYRO_BALL">;
export type MoveSettingsV0268MoveHeavySlam = MoveSettings<"V0268_MOVE_HEAVY_SLAM">;
export type MoveSettingsV0269MoveFireSpinFast = MoveSettings<"V0269_MOVE_FIRE_SPIN_FAST">;
export type MoveSettingsV0270MoveOverheat = MoveSettings<"V0270_MOVE_OVERHEAT">;
export type MoveSettingsV0271MoveBulletSeedFast = MoveSettings<"V0271_MOVE_BULLET_SEED_FAST">;
export type MoveSettingsV0272MoveGrassKnot = MoveSettings<"V0272_MOVE_GRASS_KNOT">;
export type MoveSettingsV0273MoveEnergyBall = MoveSettings<"V0273_MOVE_ENERGY_BALL">;
export type MoveSettingsV0274MoveExtrasensoryFast = MoveSettings<"V0274_MOVE_EXTRASENSORY_FAST">;
export type MoveSettingsV0275MoveFuturesight = MoveSettings<"V0275_MOVE_FUTURESIGHT">;
export type MoveSettingsV0276MoveMirrorCoat = MoveSettings<"V0276_MOVE_MIRROR_COAT">;
export type MoveSettingsV0277MoveOutrage = MoveSettings<"V0277_MOVE_OUTRAGE">;
export type MoveSettingsV0278MoveSnarlFast = MoveSettings<"V0278_MOVE_SNARL_FAST">;
export type MoveSettingsV0279MoveCrunch = MoveSettings<"V0279_MOVE_CRUNCH">;
export type MoveSettingsV0280MoveFoulPlay = MoveSettings<"V0280_MOVE_FOUL_PLAY">;
export type MoveSettingsV0281MoveHiddenPowerFast = MoveSettings<"V0281_MOVE_HIDDEN_POWER_FAST">;
export type MoveSettingsV0282MoveTakeDownFast = MoveSettings<"V0282_MOVE_TAKE_DOWN_FAST">;
export type MoveSettingsV0283MoveWaterfallFast = MoveSettings<"V0283_MOVE_WATERFALL_FAST">;
export type MoveSettingsV0284MoveSurf = MoveSettings<"V0284_MOVE_SURF">;
export type MoveSettingsV0285MoveDracoMeteor = MoveSettings<"V0285_MOVE_DRACO_METEOR">;
export type MoveSettingsV0286MoveDoomDesire = MoveSettings<"V0286_MOVE_DOOM_DESIRE">;
export type MoveSettingsV0287MoveYawnFast = MoveSettings<"V0287_MOVE_YAWN_FAST">;
export type MoveSettingsV0288MovePsychoBoost = MoveSettings<"V0288_MOVE_PSYCHO_BOOST">;
export type MoveSettingsV0289MoveOriginPulse = MoveSettings<"V0289_MOVE_ORIGIN_PULSE">;
export type MoveSettingsV0290MovePrecipiceBlades = MoveSettings<"V0290_MOVE_PRECIPICE_BLADES">;
export type MoveSettingsV0291MovePresentFast = MoveSettings<"V0291_MOVE_PRESENT_FAST">;
export type MoveSettingsV0292MoveWeatherBallFire = MoveSettings<"V0292_MOVE_WEATHER_BALL_FIRE">;
export type MoveSettingsV0293MoveWeatherBallIce = MoveSettings<"V0293_MOVE_WEATHER_BALL_ICE">;
export type MoveSettingsV0294MoveWeatherBallRock = MoveSettings<"V0294_MOVE_WEATHER_BALL_ROCK">;
export type MoveSettingsV0295MoveWeatherBallWater = MoveSettings<"V0295_MOVE_WEATHER_BALL_WATER">;
export type MoveSettingsV0296MoveFrenzyPlant = MoveSettings<"V0296_MOVE_FRENZY_PLANT">;
export type MoveSettingsV0297MoveSmackDownFast = MoveSettings<"V0297_MOVE_SMACK_DOWN_FAST">;
export type MoveSettingsV0298MoveBlastBurn = MoveSettings<"V0298_MOVE_BLAST_BURN">;
export type MoveSettingsV0299MoveHydroCannon = MoveSettings<"V0299_MOVE_HYDRO_CANNON">;
export type MoveSettingsV0300MoveLastResort = MoveSettings<"V0300_MOVE_LAST_RESORT">;
export type MoveSettingsV0301MoveMeteorMash = MoveSettings<"V0301_MOVE_METEOR_MASH">;
export type MoveSettingsV0302MoveSkullBash = MoveSettings<"V0302_MOVE_SKULL_BASH">;
export type MoveSettingsV0303MoveAcidSpray = MoveSettings<"V0303_MOVE_ACID_SPRAY">;
export type MoveSettingsV0304MoveEarthPower = MoveSettings<"V0304_MOVE_EARTH_POWER">;
export type MoveSettingsV0305MoveCrabhammer = MoveSettings<"V0305_MOVE_CRABHAMMER">;
export type MoveSettingsV0306MoveLunge = MoveSettings<"V0306_MOVE_LUNGE">;
export type MoveSettingsV0307MoveCrushClaw = MoveSettings<"V0307_MOVE_CRUSH_CLAW">;
export type MoveSettingsV0308MoveOctazooka = MoveSettings<"V0308_MOVE_OCTAZOOKA">;
export type MoveSettingsV0309MoveMirrorShot = MoveSettings<"V0309_MOVE_MIRROR_SHOT">;
export type MoveSettingsV0310MoveSuperPower = MoveSettings<"V0310_MOVE_SUPER_POWER">;
export type MoveSettingsV0311MoveFellStinger = MoveSettings<"V0311_MOVE_FELL_STINGER">;
export type MoveSettingsV0312MoveLeafTornado = MoveSettings<"V0312_MOVE_LEAF_TORNADO">;
export type MoveSettingsV0313MoveLeechLife = MoveSettings<"V0313_MOVE_LEECH_LIFE">;
export type MoveSettingsV0314MoveDrainPunch = MoveSettings<"V0314_MOVE_DRAIN_PUNCH">;
export type MoveSettingsV0315MoveShadowBone = MoveSettings<"V0315_MOVE_SHADOW_BONE">;
export type MoveSettingsV0316MoveMuddyWater = MoveSettings<"V0316_MOVE_MUDDY_WATER">;
export type MoveSettingsV0317MoveBlazeKick = MoveSettings<"V0317_MOVE_BLAZE_KICK">;
export type MoveSettingsV0318MoveRazorShell = MoveSettings<"V0318_MOVE_RAZOR_SHELL">;
export type MoveSettingsV0319MovePowerUpPunch = MoveSettings<"V0319_MOVE_POWER_UP_PUNCH">;
export type MoveSettingsV0320MoveCharmFast = MoveSettings<"V0320_MOVE_CHARM_FAST">;
export type MoveSettingsV0321MoveGigaImpact = MoveSettings<"V0321_MOVE_GIGA_IMPACT">;
export type MoveSettingsV0322MoveFrustration = MoveSettings<"V0322_MOVE_FRUSTRATION">;
export type MoveSettingsV0323MoveReturn = MoveSettings<"V0323_MOVE_RETURN">;
export type MoveSettingsV0324MoveSynchronoise = MoveSettings<"V0324_MOVE_SYNCHRONOISE">;
export type MoveSettingsV0325MoveLockOnFast = MoveSettings<"V0325_MOVE_LOCK_ON_FAST">;
export type MoveSettingsV0326MoveThunderFangFast = MoveSettings<"V0326_MOVE_THUNDER_FANG_FAST">;
export type MoveSettingsV0327MoveIceFangFast = MoveSettings<"V0327_MOVE_ICE_FANG_FAST">;
export type MoveSettingsV0328MoveHornDrill = MoveSettings<"V0328_MOVE_HORN_DRILL">;
export type MoveSettingsV0329MoveFissure = MoveSettings<"V0329_MOVE_FISSURE">;
export type MoveSettingsV0330MoveSacredSword = MoveSettings<"V0330_MOVE_SACRED_SWORD">;
export type MoveSettingsV0331MoveFlyingPress = MoveSettings<"V0331_MOVE_FLYING_PRESS">;
export type MoveSettingsV0332MoveAuraSphere = MoveSettings<"V0332_MOVE_AURA_SPHERE">;
export type MoveSettingsV0333MovePayback = MoveSettings<"V0333_MOVE_PAYBACK">;
export type MoveSettingsV0334MoveRockWrecker = MoveSettings<"V0334_MOVE_ROCK_WRECKER">;
export type MoveSettingsV0335MoveAeroblast = MoveSettings<"V0335_MOVE_AEROBLAST">;
export type MoveSettingsV0336MoveTechnoBlastNormal = MoveSettings<"V0336_MOVE_TECHNO_BLAST_NORMAL">;
export type MoveSettingsV0337MoveTechnoBlastBurn = MoveSettings<"V0337_MOVE_TECHNO_BLAST_BURN">;
export type MoveSettingsV0338MoveTechnoBlastChill = MoveSettings<"V0338_MOVE_TECHNO_BLAST_CHILL">;
export type MoveSettingsV0339MoveTechnoBlastWater = MoveSettings<"V0339_MOVE_TECHNO_BLAST_WATER">;
export type MoveSettingsV0340MoveTechnoBlastShock = MoveSettings<"V0340_MOVE_TECHNO_BLAST_SHOCK">;
export type MoveSettingsV0341MoveFly = MoveSettings<"V0341_MOVE_FLY">;
export type MoveSettingsV0342MoveVCreate = MoveSettings<"V0342_MOVE_V_CREATE">;
export type MoveSettingsV0343MoveLeafStorm = MoveSettings<"V0343_MOVE_LEAF_STORM">;
export type MoveSettingsV0344MoveTriAttack = MoveSettings<"V0344_MOVE_TRI_ATTACK">;
export type MoveSettingsV0345MoveGustFast = MoveSettings<"V0345_MOVE_GUST_FAST">;
export type MoveSettingsV0346MoveIncinerateFast = MoveSettings<"V0346_MOVE_INCINERATE_FAST">;
export type MoveSettingsV0348MoveFeatherDance = MoveSettings<"V0348_MOVE_FEATHER_DANCE">;
export type MoveSettingsV0350MoveFairyWindFast = MoveSettings<"V0350_MOVE_FAIRY_WIND_FAST">;
export type MoveSettingsV0352MoveWeatherBallNormal = MoveSettings<"V0352_MOVE_WEATHER_BALL_NORMAL">;
export type MoveSettingsV0353MovePsychicFangs = MoveSettings<"V0353_MOVE_PSYCHIC_FANGS">;
export type MoveSettingsV0356MoveDoubleKickFast = MoveSettings<"V0356_MOVE_DOUBLE_KICK_FAST">;
export type MoveSettingsV0357MoveMagicalLeafFast = MoveSettings<"V0357_MOVE_MAGICAL_LEAF_FAST">;
export type MoveSettingsV0358MoveSacredFire = MoveSettings<"V0358_MOVE_SACRED_FIRE">;
export type MoveSettingsV0359MoveIcicleSpear = MoveSettings<"V0359_MOVE_ICICLE_SPEAR">;
export type MoveSettingsV0360MoveAeroblastPlus = MoveSettings<"V0360_MOVE_AEROBLAST_PLUS">;
export type MoveSettingsV0361MoveAeroblastPlusPlus = MoveSettings<"V0361_MOVE_AEROBLAST_PLUS_PLUS">;
export type MoveSettingsV0362MoveSacredFirePlus = MoveSettings<"V0362_MOVE_SACRED_FIRE_PLUS">;
export type MoveSettingsV0363MoveSacredFirePlusPlus = MoveSettings<"V0363_MOVE_SACRED_FIRE_PLUS_PLUS">;
export type MoveSettingsV0364MoveAcrobatics = MoveSettings<"V0364_MOVE_ACROBATICS">;
export type MoveSettingsV0365MoveLusterPurge = MoveSettings<"V0365_MOVE_LUSTER_PURGE">;
export type MoveSettingsV0366MoveMistBall = MoveSettings<"V0366_MOVE_MIST_BALL">;
export type MoveSettingsV0367MoveBrutalSwing = MoveSettings<"V0367_MOVE_BRUTAL_SWING">;
export type MoveSettingsV0368MoveRolloutFast = MoveSettings<"V0368_MOVE_ROLLOUT_FAST">;
export type MoveSettingsV0369MoveSeedFlare = MoveSettings<"V0369_MOVE_SEED_FLARE">;
export type MoveSettingsV0370MoveObstruct = MoveSettings<"V0370_MOVE_OBSTRUCT">;
export type MoveSettingsV0371MoveShadowForce = MoveSettings<"V0371_MOVE_SHADOW_FORCE">;
export type MoveSettingsV0372MoveMeteorBeam = MoveSettings<"V0372_MOVE_METEOR_BEAM">;
export type MoveSettingsV0373MoveWaterShurikenFast = MoveSettings<"V0373_MOVE_WATER_SHURIKEN_FAST">;
export type MoveSettingsV0374MoveFusionBolt = MoveSettings<"V0374_MOVE_FUSION_BOLT">;
export type MoveSettingsV0375MoveFusionFlare = MoveSettings<"V0375_MOVE_FUSION_FLARE">;
export type MoveSettingsV0376MovePoltergeist = MoveSettings<"V0376_MOVE_POLTERGEIST">;
export type MoveSettingsV0377MoveHighHorsepower = MoveSettings<"V0377_MOVE_HIGH_HORSEPOWER">;
export type MoveSettingsV0378MoveGlaciate = MoveSettings<"V0378_MOVE_GLACIATE">;
export type MoveSettingsV0379MoveBreakingSwipe = MoveSettings<"V0379_MOVE_BREAKING_SWIPE">;
export type MoveSettingsV0380MoveBoomburst = MoveSettings<"V0380_MOVE_BOOMBURST">;
export type MoveSettingsV0381MoveDoubleIronBash = MoveSettings<"V0381_MOVE_DOUBLE_IRON_BASH">;
export type MoveSettingsV0382MoveMysticalFire = MoveSettings<"V0382_MOVE_MYSTICAL_FIRE">;
export type MoveSettingsV0383MoveLiquidation = MoveSettings<"V0383_MOVE_LIQUIDATION">;
export type MoveSettingsV0384MoveDragonAscent = MoveSettings<"V0384_MOVE_DRAGON_ASCENT">;
export type MoveSettingsV0385MoveLeafageFast = MoveSettings<"V0385_MOVE_LEAFAGE_FAST">;
export type MoveSettingsV0386MoveMagmaStorm = MoveSettings<"V0386_MOVE_MAGMA_STORM">;
export type MoveSettingsV0387MoveGeomancyFast = MoveSettings<"V0387_MOVE_GEOMANCY_FAST">;
export type MoveSettingsV0388MoveSpacialRend = MoveSettings<"V0388_MOVE_SPACIAL_REND">;
export type MoveSettingsV0389MoveOblivionWing = MoveSettings<"V0389_MOVE_OBLIVION_WING">;
export type MoveSettingsV0390MoveNaturesMadness = MoveSettings<"V0390_MOVE_NATURES_MADNESS">;
export type MoveSettingsV0391MoveTripleAxel = MoveSettings<"V0391_MOVE_TRIPLE_AXEL">;
export type MoveSettingsV0392MoveTrailblaze = MoveSettings<"V0392_MOVE_TRAILBLAZE">;
export type MoveSettingsV0393MoveScorchingSands = MoveSettings<"V0393_MOVE_SCORCHING_SANDS">;
export type MoveSettingsV0394MoveRoarOfTime = MoveSettings<"V0394_MOVE_ROAR_OF_TIME">;
export type MoveSettingsV0395MoveBleakwindStorm = MoveSettings<"V0395_MOVE_BLEAKWIND_STORM">;
export type MoveSettingsV0396MoveSandsearStorm = MoveSettings<"V0396_MOVE_SANDSEAR_STORM">;
export type MoveSettingsV0397MoveWildboltStorm = MoveSettings<"V0397_MOVE_WILDBOLT_STORM">;
export type MoveSettingsV0398MoveSpiritShackle = MoveSettings<"V0398_MOVE_SPIRIT_SHACKLE">;
export type MoveSettingsV0399MoveVoltTackle = MoveSettings<"V0399_MOVE_VOLT_TACKLE">;
export type MoveSettingsV0400MoveDarkestLariat = MoveSettings<"V0400_MOVE_DARKEST_LARIAT">;
export type MoveSettingsV0401MovePsywaveFast = MoveSettings<"V0401_MOVE_PSYWAVE_FAST">;
export type MoveSettingsV0402MoveMetalSoundFast = MoveSettings<"V0402_MOVE_METAL_SOUND_FAST">;
export type MoveSettingsV0403MoveSandAttackFast = MoveSettings<"V0403_MOVE_SAND_ATTACK_FAST">;
export type MoveSettingsV0404MoveSunsteelStrike = MoveSettings<"V0404_MOVE_SUNSTEEL_STRIKE">;
export type MoveSettingsV0405MoveMoongeistBeam = MoveSettings<"V0405_MOVE_MOONGEIST_BEAM">;
export type MoveSettingsV0406MoveAuraWheelElectric = MoveSettings<"V0406_MOVE_AURA_WHEEL_ELECTRIC">;
export type MoveSettingsV0407MoveAuraWheelDark = MoveSettings<"V0407_MOVE_AURA_WHEEL_DARK">;
export type MoveSettingsV0408MoveHighJumpKick = MoveSettings<"V0408_MOVE_HIGH_JUMP_KICK">;
export type MoveSettingsV0462MoveForcePalmFast = MoveSettings<"V0462_MOVE_FORCE_PALM_FAST">;
export type MoveSettingsV0463MoveSparklingAria = MoveSettings<"V0463_MOVE_SPARKLING_ARIA">;
export type MoveSettingsV0464MoveRageFist = MoveSettings<"V0464_MOVE_RAGE_FIST">;
export type MoveSettingsV0465MoveFlowerTrick = MoveSettings<"V0465_MOVE_FLOWER_TRICK">;
export type MoveSettingsV0466MoveFreezeShock = MoveSettings<"V0466_MOVE_FREEZE_SHOCK">;
export type MoveSettingsV0467MoveIceBurn = MoveSettings<"V0467_MOVE_ICE_BURN">;
export type MoveSettingsV0468MoveTorchSong = MoveSettings<"V0468_MOVE_TORCH_SONG">;
export type MoveSettingsV0469MoveBehemothBlade = MoveSettings<"V0469_MOVE_BEHEMOTH_BLADE">;
export type MoveSettingsV0470MoveBehemothBash = MoveSettings<"V0470_MOVE_BEHEMOTH_BASH">;
export type MoveSettingsV0471MoveUpperHand = MoveSettings<"V0471_MOVE_UPPER_HAND">;
export type MoveSettingsV0472MoveThunderCage = MoveSettings<"V0472_MOVE_THUNDER_CAGE">;
export type MoveSettingsV0482MoveDynamaxCannon = MoveSettings<"V0482_MOVE_DYNAMAX_CANNON">;
export type MoveSettingsV0484MoveClangingScales = MoveSettings<"V0484_MOVE_CLANGING_SCALES">;
export type MoveSettingsV0485MoveCrushGrip = MoveSettings<"V0485_MOVE_CRUSH_GRIP">;
export type MoveSettingsV0486MoveDragonEnergy = MoveSettings<"V0486_MOVE_DRAGON_ENERGY">;
export type MoveSettingsV0487MoveAquaStep = MoveSettings<"V0487_MOVE_AQUA_STEP">;
export type MoveSettingsV0488MoveChillingWater = MoveSettings<"V0488_MOVE_CHILLING_WATER">;
export type MoveSettingsV0489MoveSecretSword = MoveSettings<"V0489_MOVE_SECRET_SWORD">;
export type MoveSettingsV0490MoveBeakBlast = MoveSettings<"V0490_MOVE_BEAK_BLAST">;
export type MoveSettingsV0491MoveMindBlown = MoveSettings<"V0491_MOVE_MIND_BLOWN">;
export type MoveSettingsV0492MoveDrumBeating = MoveSettings<"V0492_MOVE_DRUM_BEATING">;
export type MoveSettingsV0493MovePyroball = MoveSettings<"V0493_MOVE_PYROBALL">;
export type MoveSettingsV0494MoveGigatonHammer = MoveSettings<"V0494_MOVE_GIGATON_HAMMER">;
export type MoveSettingsVnBm001 = MoveSettings<"VN_BM_001">;
export type MoveSettingsVnBm002 = MoveSettings<"VN_BM_002">;
export type MoveSettingsVnBm003 = MoveSettings<"VN_BM_003">;
export type MoveSettingsVnBm004 = MoveSettings<"VN_BM_004">;
export type MoveSettingsVnBm005 = MoveSettings<"VN_BM_005">;
export type MoveSettingsVnBm006 = MoveSettings<"VN_BM_006">;
export type MoveSettingsVnBm007 = MoveSettings<"VN_BM_007">;
export type MoveSettingsVnBm008 = MoveSettings<"VN_BM_008">;
export type MoveSettingsVnBm009 = MoveSettings<"VN_BM_009">;
export type MoveSettingsVnBm010 = MoveSettings<"VN_BM_010">;
export type MoveSettingsVnBm011 = MoveSettings<"VN_BM_011">;
export type MoveSettingsVnBm012 = MoveSettings<"VN_BM_012">;
export type MoveSettingsVnBm013 = MoveSettings<"VN_BM_013">;
export type MoveSettingsVnBm014 = MoveSettings<"VN_BM_014">;
export type MoveSettingsVnBm015 = MoveSettings<"VN_BM_015">;
export type MoveSettingsVnBm016 = MoveSettings<"VN_BM_016">;
export type MoveSettingsVnBm017 = MoveSettings<"VN_BM_017">;
export type MoveSettingsVnBm018 = MoveSettings<"VN_BM_018">;
export type MoveSettingsVnBm019 = MoveSettings<"VN_BM_019">;
export type MoveSettingsVnBm020 = MoveSettings<"VN_BM_020">;
export type MoveSettingsVnBm021 = MoveSettings<"VN_BM_021">;
export type MoveSettingsVnBm022 = MoveSettings<"VN_BM_022">;
export type MoveSettingsVnBm023 = MoveSettings<"VN_BM_023">;
export type MoveSettingsVnBm024 = MoveSettings<"VN_BM_024">;
export type MoveSettingsVnBm025 = MoveSettings<"VN_BM_025">;
export type MoveSettingsVnBm026 = MoveSettings<"VN_BM_026">;
export type MoveSettingsVnBm027 = MoveSettings<"VN_BM_027">;
export type MoveSettingsVnBm028 = MoveSettings<"VN_BM_028">;
export type MoveSettingsVnBm029 = MoveSettings<"VN_BM_029">;
export type MoveSettingsVnBm030 = MoveSettings<"VN_BM_030">;
export type MoveSettingsVnBm031 = MoveSettings<"VN_BM_031">;
export type MoveSettingsVnBm032 = MoveSettings<"VN_BM_032">;
export type MoveSettingsVnBm033 = MoveSettings<"VN_BM_033">;
export type MoveSettingsVnBm034 = MoveSettings<"VN_BM_034">;
export type MoveSettingsVnBm035 = MoveSettings<"VN_BM_035">;
export type MoveSettingsVnBm036 = MoveSettings<"VN_BM_036">;
export type MoveSettingsVnBm037 = MoveSettings<"VN_BM_037">;
export type MoveSettingsVnBm038 = MoveSettings<"VN_BM_038">;
export type MoveSettingsVnBm039 = MoveSettings<"VN_BM_039">;
export type MoveSettingsVnBm040 = MoveSettings<"VN_BM_040">;
export type MoveSettingsVnBm041 = MoveSettings<"VN_BM_041">;
export type MoveSettingsVnBm042 = MoveSettings<"VN_BM_042">;
export type MoveSettingsVnBm043 = MoveSettings<"VN_BM_043">;
export type MoveSettingsVnBm044 = MoveSettings<"VN_BM_044">;
export type MoveSettingsVnBm045 = MoveSettings<"VN_BM_045">;
export type MoveSettingsVnBm046 = MoveSettings<"VN_BM_046">;
export type MoveSettingsVnBm047 = MoveSettings<"VN_BM_047">;
export type MoveSettingsVnBm048 = MoveSettings<"VN_BM_048">;
export type MoveSettingsVnBm049 = MoveSettings<"VN_BM_049">;
export type MoveSettingsVnBm050 = MoveSettings<"VN_BM_050">;
export type MoveSettingsVnBm051 = MoveSettings<"VN_BM_051">;
export type MoveSettingsVnBm052 = MoveSettings<"VN_BM_052">;
export type MoveSettingsVnBm053 = MoveSettings<"VN_BM_053">;
export type MoveSettingsVnBm054 = MoveSettings<"VN_BM_054">;
export type MoveSettingsVnBm055 = MoveSettings<"VN_BM_055">;
export type MoveSettingsVnBm056 = MoveSettings<"VN_BM_056">;
export type MoveSettingsVnBm057 = MoveSettings<"VN_BM_057">;
export type MoveSettingsVnBm058 = MoveSettings<"VN_BM_058">;
export type MoveSettingsVnBm059 = MoveSettings<"VN_BM_059">;
export type MoveSettingsVnBm060 = MoveSettings<"VN_BM_060">;
export type MoveSettingsVnBm061 = MoveSettings<"VN_BM_061">;
export type MoveSettingsVnBm062 = MoveSettings<"VN_BM_062">;

export type MoveSettingsMasterfileEntry =
	| MoveSettingsV0013MoveWrap
	| MoveSettingsV0014MoveHyperBeam
	| MoveSettingsV0016MoveDarkPulse
	| MoveSettingsV0018MoveSludge
	| MoveSettingsV0020MoveViceGrip
	| MoveSettingsV0021MoveFlameWheel
	| MoveSettingsV0022MoveMegahorn
	| MoveSettingsV0024MoveFlamethrower
	| MoveSettingsV0026MoveDig
	| MoveSettingsV0028MoveCrossChop
	| MoveSettingsV0030MovePsybeam
	| MoveSettingsV0031MoveEarthquake
	| MoveSettingsV0032MoveStoneEdge
	| MoveSettingsV0033MoveIcePunch
	| MoveSettingsV0034MoveHeartStamp
	| MoveSettingsV0035MoveDischarge
	| MoveSettingsV0036MoveFlashCannon
	| MoveSettingsV0038MoveDrillPeck
	| MoveSettingsV0039MoveIceBeam
	| MoveSettingsV0040MoveBlizzard
	| MoveSettingsV0042MoveHeatWave
	| MoveSettingsV0045MoveAerialAce
	| MoveSettingsV0046MoveDrillRun
	| MoveSettingsV0047MovePetalBlizzard
	| MoveSettingsV0048MoveMegaDrain
	| MoveSettingsV0049MoveBugBuzz
	| MoveSettingsV0050MovePoisonFang
	| MoveSettingsV0051MoveNightSlash
	| MoveSettingsV0053MoveBubbleBeam
	| MoveSettingsV0054MoveSubmission
	| MoveSettingsV0056MoveLowSweep
	| MoveSettingsV0057MoveAquaJet
	| MoveSettingsV0058MoveAquaTail
	| MoveSettingsV0059MoveSeedBomb
	| MoveSettingsV0060MovePsyshock
	| MoveSettingsV0062MoveAncientPower
	| MoveSettingsV0063MoveRockTomb
	| MoveSettingsV0064MoveRockSlide
	| MoveSettingsV0065MovePowerGem
	| MoveSettingsV0066MoveShadowSneak
	| MoveSettingsV0067MoveShadowPunch
	| MoveSettingsV0069MoveOminousWind
	| MoveSettingsV0070MoveShadowBall
	| MoveSettingsV0072MoveMagnetBomb
	| MoveSettingsV0074MoveIronHead
	| MoveSettingsV0075MoveParabolicCharge
	| MoveSettingsV0077MoveThunderPunch
	| MoveSettingsV0078MoveThunder
	| MoveSettingsV0079MoveThunderbolt
	| MoveSettingsV0080MoveTwister
	| MoveSettingsV0082MoveDragonPulse
	| MoveSettingsV0083MoveDragonClaw
	| MoveSettingsV0084MoveDisarmingVoice
	| MoveSettingsV0085MoveDrainingKiss
	| MoveSettingsV0086MoveDazzlingGleam
	| MoveSettingsV0087MoveMoonblast
	| MoveSettingsV0088MovePlayRough
	| MoveSettingsV0089MoveCrossPoison
	| MoveSettingsV0090MoveSludgeBomb
	| MoveSettingsV0091MoveSludgeWave
	| MoveSettingsV0092MoveGunkShot
	| MoveSettingsV0094MoveBoneClub
	| MoveSettingsV0095MoveBulldoze
	| MoveSettingsV0096MoveMudBomb
	| MoveSettingsV0099MoveSignalBeam
	| MoveSettingsV0100MoveXScissor
	| MoveSettingsV0101MoveFlameCharge
	| MoveSettingsV0102MoveFlameBurst
	| MoveSettingsV0103MoveFireBlast
	| MoveSettingsV0104MoveBrine
	| MoveSettingsV0105MoveWaterPulse
	| MoveSettingsV0106MoveScald
	| MoveSettingsV0107MoveHydroPump
	| MoveSettingsV0108MovePsychic
	| MoveSettingsV0109MovePsystrike
	| MoveSettingsV0111MoveIcyWind
	| MoveSettingsV0114MoveGigaDrain
	| MoveSettingsV0115MoveFirePunch
	| MoveSettingsV0116MoveSolarBeam
	| MoveSettingsV0117MoveLeafBlade
	| MoveSettingsV0118MovePowerWhip
	| MoveSettingsV0121MoveAirCutter
	| MoveSettingsV0122MoveHurricane
	| MoveSettingsV0123MoveBrickBreak
	| MoveSettingsV0125MoveSwift
	| MoveSettingsV0126MoveHornAttack
	| MoveSettingsV0127MoveStomp
	| MoveSettingsV0129MoveHyperFang
	| MoveSettingsV0131MoveBodySlam
	| MoveSettingsV0132MoveRest
	| MoveSettingsV0133MoveStruggle
	| MoveSettingsV0134MoveScaldBlastoise
	| MoveSettingsV0135MoveHydroPumpBlastoise
	| MoveSettingsV0136MoveWrapGreen
	| MoveSettingsV0137MoveWrapPink
	| MoveSettingsV0200MoveFuryCutterFast
	| MoveSettingsV0201MoveBugBiteFast
	| MoveSettingsV0202MoveBiteFast
	| MoveSettingsV0203MoveSuckerPunchFast
	| MoveSettingsV0204MoveDragonBreathFast
	| MoveSettingsV0205MoveThunderShockFast
	| MoveSettingsV0206MoveSparkFast
	| MoveSettingsV0207MoveLowKickFast
	| MoveSettingsV0208MoveKarateChopFast
	| MoveSettingsV0209MoveEmberFast
	| MoveSettingsV0210MoveWingAttackFast
	| MoveSettingsV0211MovePeckFast
	| MoveSettingsV0212MoveLickFast
	| MoveSettingsV0213MoveShadowClawFast
	| MoveSettingsV0214MoveVineWhipFast
	| MoveSettingsV0215MoveRazorLeafFast
	| MoveSettingsV0216MoveMudShotFast
	| MoveSettingsV0217MoveIceShardFast
	| MoveSettingsV0218MoveFrostBreathFast
	| MoveSettingsV0219MoveQuickAttackFast
	| MoveSettingsV0220MoveScratchFast
	| MoveSettingsV0221MoveTackleFast
	| MoveSettingsV0222MovePoundFast
	| MoveSettingsV0223MoveCutFast
	| MoveSettingsV0224MovePoisonJabFast
	| MoveSettingsV0225MoveAcidFast
	| MoveSettingsV0226MovePsychoCutFast
	| MoveSettingsV0227MoveRockThrowFast
	| MoveSettingsV0228MoveMetalClawFast
	| MoveSettingsV0229MoveBulletPunchFast
	| MoveSettingsV0230MoveWaterGunFast
	| MoveSettingsV0231MoveSplashFast
	| MoveSettingsV0232MoveWaterGunFastBlastoise
	| MoveSettingsV0233MoveMudSlapFast
	| MoveSettingsV0234MoveZenHeadbuttFast
	| MoveSettingsV0235MoveConfusionFast
	| MoveSettingsV0236MovePoisonStingFast
	| MoveSettingsV0237MoveBubbleFast
	| MoveSettingsV0238MoveFeintAttackFast
	| MoveSettingsV0239MoveSteelWingFast
	| MoveSettingsV0240MoveFireFangFast
	| MoveSettingsV0241MoveRockSmashFast
	| MoveSettingsV0242MoveTransformFast
	| MoveSettingsV0243MoveCounterFast
	| MoveSettingsV0244MovePowderSnowFast
	| MoveSettingsV0245MoveCloseCombat
	| MoveSettingsV0246MoveDynamicPunch
	| MoveSettingsV0247MoveFocusBlast
	| MoveSettingsV0248MoveAuroraBeam
	| MoveSettingsV0249MoveChargeBeamFast
	| MoveSettingsV0250MoveVoltSwitchFast
	| MoveSettingsV0251MoveWildCharge
	| MoveSettingsV0252MoveZapCannon
	| MoveSettingsV0253MoveDragonTailFast
	| MoveSettingsV0254MoveAvalanche
	| MoveSettingsV0255MoveAirSlashFast
	| MoveSettingsV0256MoveBraveBird
	| MoveSettingsV0257MoveSkyAttack
	| MoveSettingsV0258MoveSandTomb
	| MoveSettingsV0259MoveRockBlast
	| MoveSettingsV0260MoveInfestationFast
	| MoveSettingsV0261MoveStruggleBugFast
	| MoveSettingsV0262MoveSilverWind
	| MoveSettingsV0263MoveAstonishFast
	| MoveSettingsV0264MoveHexFast
	| MoveSettingsV0265MoveNightShade
	| MoveSettingsV0266MoveIronTailFast
	| MoveSettingsV0267MoveGyroBall
	| MoveSettingsV0268MoveHeavySlam
	| MoveSettingsV0269MoveFireSpinFast
	| MoveSettingsV0270MoveOverheat
	| MoveSettingsV0271MoveBulletSeedFast
	| MoveSettingsV0272MoveGrassKnot
	| MoveSettingsV0273MoveEnergyBall
	| MoveSettingsV0274MoveExtrasensoryFast
	| MoveSettingsV0275MoveFuturesight
	| MoveSettingsV0276MoveMirrorCoat
	| MoveSettingsV0277MoveOutrage
	| MoveSettingsV0278MoveSnarlFast
	| MoveSettingsV0279MoveCrunch
	| MoveSettingsV0280MoveFoulPlay
	| MoveSettingsV0281MoveHiddenPowerFast
	| MoveSettingsV0282MoveTakeDownFast
	| MoveSettingsV0283MoveWaterfallFast
	| MoveSettingsV0284MoveSurf
	| MoveSettingsV0285MoveDracoMeteor
	| MoveSettingsV0286MoveDoomDesire
	| MoveSettingsV0287MoveYawnFast
	| MoveSettingsV0288MovePsychoBoost
	| MoveSettingsV0289MoveOriginPulse
	| MoveSettingsV0290MovePrecipiceBlades
	| MoveSettingsV0291MovePresentFast
	| MoveSettingsV0292MoveWeatherBallFire
	| MoveSettingsV0293MoveWeatherBallIce
	| MoveSettingsV0294MoveWeatherBallRock
	| MoveSettingsV0295MoveWeatherBallWater
	| MoveSettingsV0296MoveFrenzyPlant
	| MoveSettingsV0297MoveSmackDownFast
	| MoveSettingsV0298MoveBlastBurn
	| MoveSettingsV0299MoveHydroCannon
	| MoveSettingsV0300MoveLastResort
	| MoveSettingsV0301MoveMeteorMash
	| MoveSettingsV0302MoveSkullBash
	| MoveSettingsV0303MoveAcidSpray
	| MoveSettingsV0304MoveEarthPower
	| MoveSettingsV0305MoveCrabhammer
	| MoveSettingsV0306MoveLunge
	| MoveSettingsV0307MoveCrushClaw
	| MoveSettingsV0308MoveOctazooka
	| MoveSettingsV0309MoveMirrorShot
	| MoveSettingsV0310MoveSuperPower
	| MoveSettingsV0311MoveFellStinger
	| MoveSettingsV0312MoveLeafTornado
	| MoveSettingsV0313MoveLeechLife
	| MoveSettingsV0314MoveDrainPunch
	| MoveSettingsV0315MoveShadowBone
	| MoveSettingsV0316MoveMuddyWater
	| MoveSettingsV0317MoveBlazeKick
	| MoveSettingsV0318MoveRazorShell
	| MoveSettingsV0319MovePowerUpPunch
	| MoveSettingsV0320MoveCharmFast
	| MoveSettingsV0321MoveGigaImpact
	| MoveSettingsV0322MoveFrustration
	| MoveSettingsV0323MoveReturn
	| MoveSettingsV0324MoveSynchronoise
	| MoveSettingsV0325MoveLockOnFast
	| MoveSettingsV0326MoveThunderFangFast
	| MoveSettingsV0327MoveIceFangFast
	| MoveSettingsV0328MoveHornDrill
	| MoveSettingsV0329MoveFissure
	| MoveSettingsV0330MoveSacredSword
	| MoveSettingsV0331MoveFlyingPress
	| MoveSettingsV0332MoveAuraSphere
	| MoveSettingsV0333MovePayback
	| MoveSettingsV0334MoveRockWrecker
	| MoveSettingsV0335MoveAeroblast
	| MoveSettingsV0336MoveTechnoBlastNormal
	| MoveSettingsV0337MoveTechnoBlastBurn
	| MoveSettingsV0338MoveTechnoBlastChill
	| MoveSettingsV0339MoveTechnoBlastWater
	| MoveSettingsV0340MoveTechnoBlastShock
	| MoveSettingsV0341MoveFly
	| MoveSettingsV0342MoveVCreate
	| MoveSettingsV0343MoveLeafStorm
	| MoveSettingsV0344MoveTriAttack
	| MoveSettingsV0345MoveGustFast
	| MoveSettingsV0346MoveIncinerateFast
	| MoveSettingsV0348MoveFeatherDance
	| MoveSettingsV0350MoveFairyWindFast
	| MoveSettingsV0352MoveWeatherBallNormal
	| MoveSettingsV0353MovePsychicFangs
	| MoveSettingsV0356MoveDoubleKickFast
	| MoveSettingsV0357MoveMagicalLeafFast
	| MoveSettingsV0358MoveSacredFire
	| MoveSettingsV0359MoveIcicleSpear
	| MoveSettingsV0360MoveAeroblastPlus
	| MoveSettingsV0361MoveAeroblastPlusPlus
	| MoveSettingsV0362MoveSacredFirePlus
	| MoveSettingsV0363MoveSacredFirePlusPlus
	| MoveSettingsV0364MoveAcrobatics
	| MoveSettingsV0365MoveLusterPurge
	| MoveSettingsV0366MoveMistBall
	| MoveSettingsV0367MoveBrutalSwing
	| MoveSettingsV0368MoveRolloutFast
	| MoveSettingsV0369MoveSeedFlare
	| MoveSettingsV0370MoveObstruct
	| MoveSettingsV0371MoveShadowForce
	| MoveSettingsV0372MoveMeteorBeam
	| MoveSettingsV0373MoveWaterShurikenFast
	| MoveSettingsV0374MoveFusionBolt
	| MoveSettingsV0375MoveFusionFlare
	| MoveSettingsV0376MovePoltergeist
	| MoveSettingsV0377MoveHighHorsepower
	| MoveSettingsV0378MoveGlaciate
	| MoveSettingsV0379MoveBreakingSwipe
	| MoveSettingsV0380MoveBoomburst
	| MoveSettingsV0381MoveDoubleIronBash
	| MoveSettingsV0382MoveMysticalFire
	| MoveSettingsV0383MoveLiquidation
	| MoveSettingsV0384MoveDragonAscent
	| MoveSettingsV0385MoveLeafageFast
	| MoveSettingsV0386MoveMagmaStorm
	| MoveSettingsV0387MoveGeomancyFast
	| MoveSettingsV0388MoveSpacialRend
	| MoveSettingsV0389MoveOblivionWing
	| MoveSettingsV0390MoveNaturesMadness
	| MoveSettingsV0391MoveTripleAxel
	| MoveSettingsV0392MoveTrailblaze
	| MoveSettingsV0393MoveScorchingSands
	| MoveSettingsV0394MoveRoarOfTime
	| MoveSettingsV0395MoveBleakwindStorm
	| MoveSettingsV0396MoveSandsearStorm
	| MoveSettingsV0397MoveWildboltStorm
	| MoveSettingsV0398MoveSpiritShackle
	| MoveSettingsV0399MoveVoltTackle
	| MoveSettingsV0400MoveDarkestLariat
	| MoveSettingsV0401MovePsywaveFast
	| MoveSettingsV0402MoveMetalSoundFast
	| MoveSettingsV0403MoveSandAttackFast
	| MoveSettingsV0404MoveSunsteelStrike
	| MoveSettingsV0405MoveMoongeistBeam
	| MoveSettingsV0406MoveAuraWheelElectric
	| MoveSettingsV0407MoveAuraWheelDark
	| MoveSettingsV0408MoveHighJumpKick
	| MoveSettingsV0462MoveForcePalmFast
	| MoveSettingsV0463MoveSparklingAria
	| MoveSettingsV0464MoveRageFist
	| MoveSettingsV0465MoveFlowerTrick
	| MoveSettingsV0466MoveFreezeShock
	| MoveSettingsV0467MoveIceBurn
	| MoveSettingsV0468MoveTorchSong
	| MoveSettingsV0469MoveBehemothBlade
	| MoveSettingsV0470MoveBehemothBash
	| MoveSettingsV0471MoveUpperHand
	| MoveSettingsV0472MoveThunderCage
	| MoveSettingsV0482MoveDynamaxCannon
	| MoveSettingsV0484MoveClangingScales
	| MoveSettingsV0485MoveCrushGrip
	| MoveSettingsV0486MoveDragonEnergy
	| MoveSettingsV0487MoveAquaStep
	| MoveSettingsV0488MoveChillingWater
	| MoveSettingsV0489MoveSecretSword
	| MoveSettingsV0490MoveBeakBlast
	| MoveSettingsV0491MoveMindBlown
	| MoveSettingsV0492MoveDrumBeating
	| MoveSettingsV0493MovePyroball
	| MoveSettingsV0494MoveGigatonHammer
	| MoveSettingsVnBm001
	| MoveSettingsVnBm002
	| MoveSettingsVnBm003
	| MoveSettingsVnBm004
	| MoveSettingsVnBm005
	| MoveSettingsVnBm006
	| MoveSettingsVnBm007
	| MoveSettingsVnBm008
	| MoveSettingsVnBm009
	| MoveSettingsVnBm010
	| MoveSettingsVnBm011
	| MoveSettingsVnBm012
	| MoveSettingsVnBm013
	| MoveSettingsVnBm014
	| MoveSettingsVnBm015
	| MoveSettingsVnBm016
	| MoveSettingsVnBm017
	| MoveSettingsVnBm018
	| MoveSettingsVnBm019
	| MoveSettingsVnBm020
	| MoveSettingsVnBm021
	| MoveSettingsVnBm022
	| MoveSettingsVnBm023
	| MoveSettingsVnBm024
	| MoveSettingsVnBm025
	| MoveSettingsVnBm026
	| MoveSettingsVnBm027
	| MoveSettingsVnBm028
	| MoveSettingsVnBm029
	| MoveSettingsVnBm030
	| MoveSettingsVnBm031
	| MoveSettingsVnBm032
	| MoveSettingsVnBm033
	| MoveSettingsVnBm034
	| MoveSettingsVnBm035
	| MoveSettingsVnBm036
	| MoveSettingsVnBm037
	| MoveSettingsVnBm038
	| MoveSettingsVnBm039
	| MoveSettingsVnBm040
	| MoveSettingsVnBm041
	| MoveSettingsVnBm042
	| MoveSettingsVnBm043
	| MoveSettingsVnBm044
	| MoveSettingsVnBm045
	| MoveSettingsVnBm046
	| MoveSettingsVnBm047
	| MoveSettingsVnBm048
	| MoveSettingsVnBm049
	| MoveSettingsVnBm050
	| MoveSettingsVnBm051
	| MoveSettingsVnBm052
	| MoveSettingsVnBm053
	| MoveSettingsVnBm054
	| MoveSettingsVnBm055
	| MoveSettingsVnBm056
	| MoveSettingsVnBm057
	| MoveSettingsVnBm058
	| MoveSettingsVnBm059
	| MoveSettingsVnBm060
	| MoveSettingsVnBm061
	| MoveSettingsVnBm062;

export type MoveSettingsTemplateID = MoveSettingsMasterfileEntry["templateId"];

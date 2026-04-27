// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", 67 entries (structural types).

export type * from "./variants";

export interface InvasionNpcDisplaySettings<TemplateID extends string = string, TData extends InvasionNpcDisplaySettingsData = InvasionNpcDisplaySettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		invasionNpcDisplaySettings: TData;
	};
}

export interface InvasionNpcDisplaySettingsData {
	avatar: {
		avatar?: number;
		avatarBackpack?:
			| "AVATAR_f_backpack_default_3"
			| "AVATAR_f_backpack_snapcamera"
			| "AVATAR_f_backpack_swshdlc2costume"
			| "AVATAR_f_backpack_ultra_0"
			| "AVATAR_m_backpack_empty"
			| "AVATAR_m_backpack_gengar_0"
			| "AVATAR_m_backpack_guitarcasebackpack";
		avatarBelt?: "AVATAR_f_belt_empty" | "AVATAR_m_belt_empty";
		avatarEyes?: "AVATAR_f_eyes_1" | "AVATAR_f_eyes_3" | "AVATAR_m_eyes_3";
		avatarFace?: "AVATAR_f_face_empty" | "AVATAR_m_face_empty";
		avatarGlasses?:
			| "AVATAR_f_glasses_empty"
			| "AVATAR_f_glasses_teardrop_0"
			| "AVATAR_m_glasses_3d"
			| "AVATAR_m_glasses_empty"
			| "AVATAR_m_glasses_roundsunglasses";
		avatarGloves?:
			| "AVATAR_f_gloves_default_0"
			| "AVATAR_f_gloves_frlg_0"
			| "AVATAR_f_gloves_swshdlc2costume"
			| "AVATAR_m_gloves_default_0"
			| "AVATAR_m_gloves_gymleader_0"
			| "AVATAR_m_gloves_swshuniformdragon";
		avatarHair?:
			| "AVATAR_f_hair_default_19"
			| "AVATAR_f_hair_default_4"
			| "AVATAR_f_hair_default_7"
			| "AVATAR_f_hair_default_8"
			| "AVATAR_m_hair_default_10"
			| "AVATAR_m_hair_default_2"
			| "AVATAR_m_hair_default_5";
		avatarHat?:
			| "AVATAR_f_hat_laprasbandana"
			| "AVATAR_f_hat_movie2020"
			| "AVATAR_f_hat_pkmncap_1"
			| "AVATAR_f_hat_sylveonitems"
			| "AVATAR_m_hat_default_1"
			| "AVATAR_m_hat_empty"
			| "AVATAR_m_hat_munnapack_1"
			| "AVATAR_m_hat_sableyegoggles";
		avatarNecklace?: "AVATAR_f_necklace_empty" | "AVATAR_f_necklace_heart_0" | "AVATAR_m_necklace_empty";
		avatarPants?:
			| "AVATAR_f_pants_acetrainerbw"
			| "AVATAR_f_pants_misty"
			| "AVATAR_f_pants_ultra_0"
			| "AVATAR_m_pants_mewtwo"
			| "AVATAR_m_pants_skinnyjeans_0"
			| "AVATAR_m_pants_teamcandela"
			| "AVATAR_m_pants_teamrocket_0";
		avatarPose?:
			| "AVATAR_f_pose_05"
			| "AVATAR_f_pose_10"
			| "AVATAR_f_pose_11"
			| "AVATAR_f_pose_19"
			| "AVATAR_m_pose_02"
			| "AVATAR_m_pose_05"
			| "AVATAR_m_pose_31"
			| "AVATAR_m_pose_empty";
		avatarShirt?:
			| "AVATAR_f_shirt_battlegirl_0"
			| "AVATAR_f_shirt_regiicejersies"
			| "AVATAR_f_shirt_ruinmaniac"
			| "AVATAR_f_shirt_teamaqua"
			| "AVATAR_m_shirt_acetrainersm"
			| "AVATAR_m_shirt_mewtwo"
			| "AVATAR_m_shirt_pkmnshirts_201"
			| "AVATAR_m_shirt_pkmnshirts2021_01";
		avatarShoes?:
			| "AVATAR_f_shoes_pikachulibre"
			| "AVATAR_f_shoes_ss"
			| "AVATAR_f_shoes_sylveonitems"
			| "AVATAR_f_shoes_teamrocket_1"
			| "AVATAR_m_shoes_acetrainersm"
			| "AVATAR_m_shoes_mewtwo"
			| "AVATAR_m_shoes_registeeljersies"
			| "AVATAR_m_shoes_steven";
		avatarSocks?:
			| "AVATAR_f_socks_default_0"
			| "AVATAR_f_socks_empty"
			| "AVATAR_f_socks_swshuniformdefault"
			| "AVATAR_f_socks_teamaqua"
			| "AVATAR_m_socks_default_0"
			| "AVATAR_m_socks_default_3"
			| "AVATAR_m_socks_empty";
		skin?: number;
	};
	backdropImageBundle?: "combat_blanche_backdrop" | "combat_candela_backdrop" | "combat_spark_backdrop";
	customCombatMusic?: "CombatMusic" | "GoTour2022Music02";
	customIncidentMusic?: "CombatLeaguePickerMusic" | "QuestMusic";
	iconUrl:
		| "https://prodholoholo-public-images.nianticlabs.com/Icon_Blanche.png"
		| "https://prodholoholo-public-images.nianticlabs.com/Icon_Candela.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Arlo.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Cliff.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Giovanni.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Sierra.png"
		| "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
	isMale?: boolean;
	modelName:
		| "combat_blanche"
		| "combat_candela"
		| "combat_execblue"
		| "combat_execred"
		| "combat_execyellow"
		| "combat_explorer"
		| "combat_giovanni"
		| "combat_spark"
		| "f_combat_grunt"
		| "f_combat_gruntb"
		| "m_combat_grunt"
		| "m_combat_gruntb"
		| "player_female"
		| "player_male";
	tipsType?:
		| "POKEMON_TYPE_BUG"
		| "POKEMON_TYPE_DARK"
		| "POKEMON_TYPE_DRAGON"
		| "POKEMON_TYPE_ELECTRIC"
		| "POKEMON_TYPE_FAIRY"
		| "POKEMON_TYPE_FIGHTING"
		| "POKEMON_TYPE_FIRE"
		| "POKEMON_TYPE_FLYING"
		| "POKEMON_TYPE_GHOST"
		| "POKEMON_TYPE_GRASS"
		| "POKEMON_TYPE_GROUND"
		| "POKEMON_TYPE_ICE"
		| "POKEMON_TYPE_NORMAL"
		| "POKEMON_TYPE_POISON"
		| "POKEMON_TYPE_PSYCHIC"
		| "POKEMON_TYPE_ROCK"
		| "POKEMON_TYPE_STEEL"
		| "POKEMON_TYPE_WATER";
	trainerName:
		| "combat_arlo_name"
		| "combat_blanche"
		| "combat_candela"
		| "combat_cliff_name"
		| "combat_giovanni_name"
		| "combat_grunt_bf_name"
		| "combat_grunt_bm_name"
		| "combat_grunt_decoy_name"
		| "combat_grunt_name"
		| "combat_sierra_name"
		| "combat_spark"
		| "event_fashion_week_sept21_npc00_title"
		| "event_fashion_week_sept21_npc01_title"
		| "event_fashion_week_sept21_npc02_title"
		| "event_fashion_week_sept21_npc03_title"
		| "event_fashion_week_sept21_npc04_title"
		| "event_fashion_week_sept21_npc05_title"
		| "event_fashion_week_sept21_npc06_title"
		| "event_fashion_week_sept21_npc07_title"
		| "gotoursik_elitefour_b_name"
		| "gotoursik_elitefour_c_name"
		| "gotoursik_elitefour_d_name"
		| "routes_NPC_explorer";
	trainerQuote:
		| "{grunt_dynamic_quote}"
		| "combat_arlo_quote"
		| "combat_blanche_quote"
		| "combat_candela_quote"
		| "combat_cliff_quote"
		| "combat_giovanni_quote"
		| "combat_grunt_decoy_quote"
		| "combat_grunt_quote_bug"
		| "combat_grunt_quote_dark"
		| "combat_grunt_quote_dragon"
		| "combat_grunt_quote_electric"
		| "combat_grunt_quote_fairy"
		| "combat_grunt_quote_fighting"
		| "combat_grunt_quote_fire"
		| "combat_grunt_quote_flying"
		| "combat_grunt_quote_ghost"
		| "combat_grunt_quote_grass"
		| "combat_grunt_quote_ground"
		| "combat_grunt_quote_ice"
		| "combat_grunt_quote_normal"
		| "combat_grunt_quote_poison"
		| "combat_grunt_quote_psychic"
		| "combat_grunt_quote_rock"
		| "combat_grunt_quote_steel"
		| "combat_grunt_quote_water"
		| "combat_sierra_quote"
		| "combat_spark_quote"
		| "event_fashion_week_sept21_npc00_combat_quote"
		| "event_fashion_week_sept21_npc01_combat_quote"
		| "event_fashion_week_sept21_npc02_combat_quote"
		| "event_fashion_week_sept21_npc03_combat_quote"
		| "event_fashion_week_sept21_npc04_combat_quote"
		| "event_fashion_week_sept21_npc05_combat_quote"
		| "event_fashion_week_sept21_npc06_combat_quote"
		| "event_fashion_week_sept21_npc07_combat_quote"
		| "gotoursik_elitefour_b_quote"
		| "gotoursik_elitefour_c_quote"
		| "gotoursik_elitefour_d_quote"
		| "grunt_bf_combat_quote"
		| "grunt_bm_combat_quote";
	trainerTitle:
		| "combat_arlo_title"
		| "combat_blanche_title"
		| "combat_candela_title"
		| "combat_cliff_title"
		| "combat_giovanni_title"
		| "combat_grunt_decoy_title"
		| "combat_grunt_title"
		| "combat_sierra_title"
		| "combat_spark_title"
		| "event_fashion_challenger_title"
		| "event_wcs_challenger_title"
		| "gotoursik_elitefour_title"
		| "routes_NPC_activity_ge";
	tutorialOnLossString?:
		| "{grunt_dynamic_tutorial}"
		| "event_gotour_2021_npc00_victory__female_speaker"
		| "event_gotour_2021_npc00_victory__male_speaker"
		| "type_tutorial_bug"
		| "type_tutorial_dark"
		| "type_tutorial_dragon"
		| "type_tutorial_electric"
		| "type_tutorial_fairy"
		| "type_tutorial_fighting"
		| "type_tutorial_fire"
		| "type_tutorial_flying"
		| "type_tutorial_ghost"
		| "type_tutorial_grass"
		| "type_tutorial_ground"
		| "type_tutorial_ice"
		| "type_tutorial_normal"
		| "type_tutorial_poison"
		| "type_tutorial_psychic"
		| "type_tutorial_rock"
		| "type_tutorial_steel"
		| "type_tutorial_water";
}

export type InvasionNpcDisplaySettingsMasterfileEntry =
	| InvasionNpcDisplaySettingsBlanche
	| InvasionNpcDisplaySettingsBugGruntFemale
	| InvasionNpcDisplaySettingsBugGruntMale
	| InvasionNpcDisplaySettingsCandela
	| InvasionNpcDisplaySettingsDarkGruntFemale
	| InvasionNpcDisplaySettingsDarkGruntMale
	| InvasionNpcDisplaySettingsDecoyGruntFemale
	| InvasionNpcDisplaySettingsDecoyGruntMale
	| InvasionNpcDisplaySettingsDragonGruntFemale
	| InvasionNpcDisplaySettingsDragonGruntMale
	| InvasionNpcDisplaySettingsElectricGruntFemale
	| InvasionNpcDisplaySettingsElectricGruntMale
	| InvasionNpcDisplaySettingsEventArloUnticketed
	| InvasionNpcDisplaySettingsEventCliffUnticketed
	| InvasionNpcDisplaySettingsEventGiovanniUnticketed
	| InvasionNpcDisplaySettingsEventNpc0
	| InvasionNpcDisplaySettingsEventNpc1
	| InvasionNpcDisplaySettingsEventNpc10
	| InvasionNpcDisplaySettingsEventNpc2
	| InvasionNpcDisplaySettingsEventNpc3
	| InvasionNpcDisplaySettingsEventNpc4
	| InvasionNpcDisplaySettingsEventNpc5
	| InvasionNpcDisplaySettingsEventNpc6
	| InvasionNpcDisplaySettingsEventNpc7
	| InvasionNpcDisplaySettingsEventNpc8
	| InvasionNpcDisplaySettingsEventNpc9
	| InvasionNpcDisplaySettingsEventSierraUnticketed
	| InvasionNpcDisplaySettingsExecutiveArlo
	| InvasionNpcDisplaySettingsExecutiveCliff
	| InvasionNpcDisplaySettingsExecutiveSierra
	| InvasionNpcDisplaySettingsExplorer
	| InvasionNpcDisplaySettingsFairyGruntFemale
	| InvasionNpcDisplaySettingsFairyGruntMale
	| InvasionNpcDisplaySettingsFightingGruntFemale
	| InvasionNpcDisplaySettingsFightingGruntMale
	| InvasionNpcDisplaySettingsFireGruntFemale
	| InvasionNpcDisplaySettingsFireGruntMale
	| InvasionNpcDisplaySettingsFlyingGruntFemale
	| InvasionNpcDisplaySettingsFlyingGruntMale
	| InvasionNpcDisplaySettingsGhostGruntFemale
	| InvasionNpcDisplaySettingsGhostGruntMale
	| InvasionNpcDisplaySettingsGiovanni
	| InvasionNpcDisplaySettingsGrassGruntFemale
	| InvasionNpcDisplaySettingsGrassGruntMale
	| InvasionNpcDisplaySettingsGroundGruntFemale
	| InvasionNpcDisplaySettingsGroundGruntMale
	| InvasionNpcDisplaySettingsGruntbFemale
	| InvasionNpcDisplaySettingsGruntbMale
	| InvasionNpcDisplaySettingsGruntFemale
	| InvasionNpcDisplaySettingsGruntMale
	| InvasionNpcDisplaySettingsIceGruntFemale
	| InvasionNpcDisplaySettingsIceGruntMale
	| InvasionNpcDisplaySettingsMetalGruntFemale
	| InvasionNpcDisplaySettingsMetalGruntMale
	| InvasionNpcDisplaySettingsNormalGruntFemale
	| InvasionNpcDisplaySettingsNormalGruntMale
	| InvasionNpcDisplaySettingsPoisonGruntFemale
	| InvasionNpcDisplaySettingsPoisonGruntMale
	| InvasionNpcDisplaySettingsPsychicGruntFemale
	| InvasionNpcDisplaySettingsPsychicGruntMale
	| InvasionNpcDisplaySettingsRockGruntFemale
	| InvasionNpcDisplaySettingsRockGruntMale
	| InvasionNpcDisplaySettingsSpark
	| InvasionNpcDisplaySettingsWaterGruntFemale
	| InvasionNpcDisplaySettingsWaterGruntMale
	| InvasionNpcDisplaySettingsWillow
	| InvasionNpcDisplaySettingsWillowb;

export type InvasionNpcDisplaySettingsTemplateID = InvasionNpcDisplaySettingsMasterfileEntry["templateId"];

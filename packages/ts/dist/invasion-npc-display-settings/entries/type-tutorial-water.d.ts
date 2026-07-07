// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-water", 5 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsEventNpc9 = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EVENT_NPC_9",
		{
			avatar: {
				avatar: 1;
				avatarBackpack: "AVATAR_f_backpack_ultra_0";
				avatarBelt: "AVATAR_f_belt_empty";
				avatarEyes: "AVATAR_f_eyes_3";
				avatarFace: "AVATAR_f_face_empty";
				avatarGlasses: "AVATAR_f_glasses_empty";
				avatarGloves: "AVATAR_f_gloves_frlg_0";
				avatarHair: "AVATAR_f_hair_default_7";
				avatarHat: "AVATAR_f_hat_movie2020";
				avatarNecklace: "AVATAR_f_necklace_empty";
				avatarPants: "AVATAR_f_pants_misty";
				avatarPose: "AVATAR_f_pose_19";
				avatarShirt: "AVATAR_f_shirt_regiicejersies";
				avatarShoes: "AVATAR_f_shoes_teamrocket_1";
				avatarSocks: "AVATAR_f_socks_default_0";
				skin: 9;
			};
			backdropImageBundle: "combat_spark_backdrop";
			customCombatMusic: "GoTour2022Music02";
			customIncidentMusic: "CombatLeaguePickerMusic";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
			modelName: "player_female";
			trainerName: "gotoursik_elitefour_c_name";
			trainerQuote: "gotoursik_elitefour_c_quote";
			trainerTitle: "gotoursik_elitefour_title";
			tutorialOnLossString: "type_tutorial_water";
		}
	>
>;
export type InvasionNpcDisplaySettingsWaterBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WATER_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_WATER";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_water";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_water";
		}
	>
>;
export type InvasionNpcDisplaySettingsWaterBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WATER_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_WATER";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_water";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_water";
		}
	>
>;
export type InvasionNpcDisplaySettingsWaterGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WATER_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_WATER";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_water";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_water";
		}
	>
>;
export type InvasionNpcDisplaySettingsWaterGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WATER_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_WATER";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_water";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_water";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialWaterMasterfileEntry =
	| InvasionNpcDisplaySettingsEventNpc9
	| InvasionNpcDisplaySettingsWaterBalloonGruntFemale
	| InvasionNpcDisplaySettingsWaterBalloonGruntMale
	| InvasionNpcDisplaySettingsWaterGruntFemale
	| InvasionNpcDisplaySettingsWaterGruntMale;

// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-fire", 5 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsEventNpc10 = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EVENT_NPC_10",
		{
			avatar: {
				avatar: 1;
				avatarBackpack: "AVATAR_f_backpack_snapcamera";
				avatarBelt: "AVATAR_f_belt_empty";
				avatarEyes: "AVATAR_f_eyes_3";
				avatarFace: "AVATAR_f_face_empty";
				avatarGlasses: "AVATAR_f_glasses_teardrop_0";
				avatarGloves: "AVATAR_f_gloves_frlg_0";
				avatarHair: "AVATAR_f_hair_default_19";
				avatarHat: "AVATAR_f_hat_pkmncap_1";
				avatarNecklace: "AVATAR_f_necklace_empty";
				avatarPants: "AVATAR_f_pants_acetrainerbw";
				avatarPose: "AVATAR_f_pose_05";
				avatarShirt: "AVATAR_f_shirt_battlegirl_0";
				avatarShoes: "AVATAR_f_shoes_pikachulibre";
				avatarSocks: "AVATAR_f_socks_empty";
				skin: 3;
			};
			backdropImageBundle: "combat_spark_backdrop";
			customCombatMusic: "GoTour2022Music02";
			customIncidentMusic: "CombatLeaguePickerMusic";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
			modelName: "player_female";
			trainerName: "gotoursik_elitefour_d_name";
			trainerQuote: "gotoursik_elitefour_d_quote";
			trainerTitle: "gotoursik_elitefour_title";
			tutorialOnLossString: "type_tutorial_fire";
		}
	>
>;
export type InvasionNpcDisplaySettingsFireBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIRE_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FIRE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fire";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fire";
		}
	>
>;
export type InvasionNpcDisplaySettingsFireBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIRE_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FIRE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fire";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fire";
		}
	>
>;
export type InvasionNpcDisplaySettingsFireGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIRE_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FIRE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fire";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fire";
		}
	>
>;
export type InvasionNpcDisplaySettingsFireGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIRE_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FIRE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fire";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fire";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialFireMasterfileEntry =
	| InvasionNpcDisplaySettingsEventNpc10
	| InvasionNpcDisplaySettingsFireBalloonGruntFemale
	| InvasionNpcDisplaySettingsFireBalloonGruntMale
	| InvasionNpcDisplaySettingsFireGruntFemale
	| InvasionNpcDisplaySettingsFireGruntMale;

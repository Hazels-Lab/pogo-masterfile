// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-poison", 5 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsEventNpc8 = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EVENT_NPC_8",
		{
			avatar: {
				avatarBackpack: "AVATAR_m_backpack_gengar_0";
				avatarEyes: "AVATAR_m_eyes_3";
				avatarGlasses: "AVATAR_m_glasses_empty";
				avatarGloves: "AVATAR_m_gloves_gymleader_0";
				avatarHair: "AVATAR_m_hair_default_5";
				avatarHat: "AVATAR_m_hat_sableyegoggles";
				avatarPants: "AVATAR_m_pants_teamrocket_0";
				avatarPose: "AVATAR_m_pose_05";
				avatarShirt: "AVATAR_m_shirt_pkmnshirts2021_01";
				avatarShoes: "AVATAR_m_shoes_steven";
				avatarSocks: "AVATAR_m_socks_default_3";
				skin: 10;
			};
			backdropImageBundle: "combat_blanche_backdrop";
			customCombatMusic: "GoTour2022Music02";
			customIncidentMusic: "CombatLeaguePickerMusic";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "player_male";
			trainerName: "gotoursik_elitefour_b_name";
			trainerQuote: "gotoursik_elitefour_b_quote";
			trainerTitle: "gotoursik_elitefour_title";
			tutorialOnLossString: "type_tutorial_poison";
		}
	>
>;
export type InvasionNpcDisplaySettingsPoisonBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_POISON_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_POISON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_poison";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_poison";
		}
	>
>;
export type InvasionNpcDisplaySettingsPoisonBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_POISON_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_POISON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_poison";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_poison";
		}
	>
>;
export type InvasionNpcDisplaySettingsPoisonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_POISON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_POISON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_poison";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_poison";
		}
	>
>;
export type InvasionNpcDisplaySettingsPoisonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_POISON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_POISON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_poison";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_poison";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialPoisonMasterfileEntry =
	| InvasionNpcDisplaySettingsEventNpc8
	| InvasionNpcDisplaySettingsPoisonBalloonGruntFemale
	| InvasionNpcDisplaySettingsPoisonBalloonGruntMale
	| InvasionNpcDisplaySettingsPoisonGruntFemale
	| InvasionNpcDisplaySettingsPoisonGruntMale;

// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-normal", 6 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsDecoyGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DECOY_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://prodholoholo-public-images.nianticlabs.com/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			trainerName: "combat_grunt_decoy_name";
			trainerQuote: "combat_grunt_decoy_quote";
			trainerTitle: "combat_grunt_decoy_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;
export type InvasionNpcDisplaySettingsDecoyGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DECOY_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			trainerName: "combat_grunt_decoy_name";
			trainerQuote: "combat_grunt_decoy_quote";
			trainerTitle: "combat_grunt_decoy_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;
export type InvasionNpcDisplaySettingsNormalBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_NORMAL_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_NORMAL";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_normal";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;
export type InvasionNpcDisplaySettingsNormalBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_NORMAL_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_NORMAL";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_normal";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;
export type InvasionNpcDisplaySettingsNormalGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_NORMAL_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_NORMAL";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_normal";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;
export type InvasionNpcDisplaySettingsNormalGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_NORMAL_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_NORMAL";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_normal";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_normal";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialNormalMasterfileEntry =
	| InvasionNpcDisplaySettingsDecoyGruntFemale
	| InvasionNpcDisplaySettingsDecoyGruntMale
	| InvasionNpcDisplaySettingsNormalBalloonGruntFemale
	| InvasionNpcDisplaySettingsNormalBalloonGruntMale
	| InvasionNpcDisplaySettingsNormalGruntFemale
	| InvasionNpcDisplaySettingsNormalGruntMale;

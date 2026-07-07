// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-dark", 6 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsDarkBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DARK_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://prodholoholo-public-images.nianticlabs.com/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_DARK";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dark";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;
export type InvasionNpcDisplaySettingsDarkBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DARK_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_DARK";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dark";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;
export type InvasionNpcDisplaySettingsDarkGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DARK_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://prodholoholo-public-images.nianticlabs.com/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_DARK";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dark";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;
export type InvasionNpcDisplaySettingsDarkGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DARK_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_DARK";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dark";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;
export type InvasionNpcDisplaySettingsEventSierraUnticketed = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EVENT_SIERRA_UNTICKETED",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Sierra.png";
			modelName: "combat_execyellow";
			trainerName: "combat_sierra_name";
			trainerQuote: "combat_sierra_quote";
			trainerTitle: "combat_sierra_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;
export type InvasionNpcDisplaySettingsExecutiveSierra = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EXECUTIVE_SIERRA",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Sierra.png";
			modelName: "combat_execyellow";
			trainerName: "combat_sierra_name";
			trainerQuote: "combat_sierra_quote";
			trainerTitle: "combat_sierra_title";
			tutorialOnLossString: "type_tutorial_dark";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialDarkMasterfileEntry =
	| InvasionNpcDisplaySettingsDarkBalloonGruntFemale
	| InvasionNpcDisplaySettingsDarkBalloonGruntMale
	| InvasionNpcDisplaySettingsDarkGruntFemale
	| InvasionNpcDisplaySettingsDarkGruntMale
	| InvasionNpcDisplaySettingsEventSierraUnticketed
	| InvasionNpcDisplaySettingsExecutiveSierra;

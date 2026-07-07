// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-fighting", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsFightingBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIGHTING_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FIGHTING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fighting";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fighting";
		}
	>
>;
export type InvasionNpcDisplaySettingsFightingBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIGHTING_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FIGHTING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fighting";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fighting";
		}
	>
>;
export type InvasionNpcDisplaySettingsFightingGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIGHTING_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FIGHTING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fighting";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fighting";
		}
	>
>;
export type InvasionNpcDisplaySettingsFightingGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FIGHTING_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FIGHTING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fighting";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fighting";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialFightingMasterfileEntry =
	| InvasionNpcDisplaySettingsFightingBalloonGruntFemale
	| InvasionNpcDisplaySettingsFightingBalloonGruntMale
	| InvasionNpcDisplaySettingsFightingGruntFemale
	| InvasionNpcDisplaySettingsFightingGruntMale;

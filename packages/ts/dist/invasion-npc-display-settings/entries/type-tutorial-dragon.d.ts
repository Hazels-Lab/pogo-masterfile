// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-dragon", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsDragonBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DRAGON_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_DRAGON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dragon";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dragon";
		}
	>
>;
export type InvasionNpcDisplaySettingsDragonBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DRAGON_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_DRAGON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dragon";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dragon";
		}
	>
>;
export type InvasionNpcDisplaySettingsDragonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DRAGON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_DRAGON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dragon";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dragon";
		}
	>
>;
export type InvasionNpcDisplaySettingsDragonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_DRAGON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_DRAGON";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_dragon";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_dragon";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialDragonMasterfileEntry =
	| InvasionNpcDisplaySettingsDragonBalloonGruntFemale
	| InvasionNpcDisplaySettingsDragonBalloonGruntMale
	| InvasionNpcDisplaySettingsDragonGruntFemale
	| InvasionNpcDisplaySettingsDragonGruntMale;

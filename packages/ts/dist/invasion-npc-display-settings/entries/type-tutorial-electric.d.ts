// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-electric", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsElectricBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ELECTRIC_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_ELECTRIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_electric";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_electric";
		}
	>
>;
export type InvasionNpcDisplaySettingsElectricBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ELECTRIC_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_ELECTRIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_electric";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_electric";
		}
	>
>;
export type InvasionNpcDisplaySettingsElectricGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ELECTRIC_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_ELECTRIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_electric";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_electric";
		}
	>
>;
export type InvasionNpcDisplaySettingsElectricGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ELECTRIC_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_ELECTRIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_electric";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_electric";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialElectricMasterfileEntry =
	| InvasionNpcDisplaySettingsElectricBalloonGruntFemale
	| InvasionNpcDisplaySettingsElectricBalloonGruntMale
	| InvasionNpcDisplaySettingsElectricGruntFemale
	| InvasionNpcDisplaySettingsElectricGruntMale;

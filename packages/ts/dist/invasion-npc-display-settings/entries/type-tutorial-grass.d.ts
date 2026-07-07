// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-grass", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsGrassBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRASS_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GRASS";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_grass";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_grass";
		}
	>
>;
export type InvasionNpcDisplaySettingsGrassBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRASS_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GRASS";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_grass";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_grass";
		}
	>
>;
export type InvasionNpcDisplaySettingsGrassGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRASS_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GRASS";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_grass";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_grass";
		}
	>
>;
export type InvasionNpcDisplaySettingsGrassGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRASS_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GRASS";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_grass";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_grass";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialGrassMasterfileEntry =
	| InvasionNpcDisplaySettingsGrassBalloonGruntFemale
	| InvasionNpcDisplaySettingsGrassBalloonGruntMale
	| InvasionNpcDisplaySettingsGrassGruntFemale
	| InvasionNpcDisplaySettingsGrassGruntMale;

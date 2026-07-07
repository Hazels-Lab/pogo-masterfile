// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-ground", 6 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsEventGiovanniUnticketed = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EVENT_GIOVANNI_UNTICKETED",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Giovanni.png";
			isMale: true;
			modelName: "combat_giovanni";
			trainerName: "combat_giovanni_name";
			trainerQuote: "combat_giovanni_quote";
			trainerTitle: "combat_giovanni_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;
export type InvasionNpcDisplaySettingsGiovanni = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GIOVANNI",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Giovanni.png";
			isMale: true;
			modelName: "combat_giovanni";
			trainerName: "combat_giovanni_name";
			trainerQuote: "combat_giovanni_quote";
			trainerTitle: "combat_giovanni_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;
export type InvasionNpcDisplaySettingsGroundBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GROUND_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GROUND";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ground";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;
export type InvasionNpcDisplaySettingsGroundBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GROUND_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GROUND";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ground";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;
export type InvasionNpcDisplaySettingsGroundGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GROUND_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GROUND";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ground";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;
export type InvasionNpcDisplaySettingsGroundGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GROUND_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GROUND";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ground";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ground";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialGroundMasterfileEntry =
	| InvasionNpcDisplaySettingsEventGiovanniUnticketed
	| InvasionNpcDisplaySettingsGiovanni
	| InvasionNpcDisplaySettingsGroundBalloonGruntFemale
	| InvasionNpcDisplaySettingsGroundBalloonGruntMale
	| InvasionNpcDisplaySettingsGroundGruntFemale
	| InvasionNpcDisplaySettingsGroundGruntMale;

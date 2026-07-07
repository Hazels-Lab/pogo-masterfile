// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-ice", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsIceBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ICE_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_ICE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ice";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ice";
		}
	>
>;
export type InvasionNpcDisplaySettingsIceBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ICE_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_ICE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ice";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ice";
		}
	>
>;
export type InvasionNpcDisplaySettingsIceGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ICE_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_ICE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ice";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ice";
		}
	>
>;
export type InvasionNpcDisplaySettingsIceGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_ICE_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_ICE";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ice";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ice";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialIceMasterfileEntry =
	| InvasionNpcDisplaySettingsIceBalloonGruntFemale
	| InvasionNpcDisplaySettingsIceBalloonGruntMale
	| InvasionNpcDisplaySettingsIceGruntFemale
	| InvasionNpcDisplaySettingsIceGruntMale;

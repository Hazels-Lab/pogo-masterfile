// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-fairy", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsFairyBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FAIRY_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FAIRY";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fairy";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fairy";
		}
	>
>;
export type InvasionNpcDisplaySettingsFairyBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FAIRY_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FAIRY";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fairy";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fairy";
		}
	>
>;
export type InvasionNpcDisplaySettingsFairyGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FAIRY_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FAIRY";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fairy";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fairy";
		}
	>
>;
export type InvasionNpcDisplaySettingsFairyGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FAIRY_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FAIRY";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_fairy";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_fairy";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialFairyMasterfileEntry =
	| InvasionNpcDisplaySettingsFairyBalloonGruntFemale
	| InvasionNpcDisplaySettingsFairyBalloonGruntMale
	| InvasionNpcDisplaySettingsFairyGruntFemale
	| InvasionNpcDisplaySettingsFairyGruntMale;

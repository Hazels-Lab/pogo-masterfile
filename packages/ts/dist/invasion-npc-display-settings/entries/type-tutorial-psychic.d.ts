// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-psychic", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsPsychicBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_PSYCHIC_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_PSYCHIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_psychic";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_psychic";
		}
	>
>;
export type InvasionNpcDisplaySettingsPsychicBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_PSYCHIC_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_PSYCHIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_psychic";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_psychic";
		}
	>
>;
export type InvasionNpcDisplaySettingsPsychicGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_PSYCHIC_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_PSYCHIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_psychic";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_psychic";
		}
	>
>;
export type InvasionNpcDisplaySettingsPsychicGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_PSYCHIC_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_PSYCHIC";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_psychic";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_psychic";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialPsychicMasterfileEntry =
	| InvasionNpcDisplaySettingsPsychicBalloonGruntFemale
	| InvasionNpcDisplaySettingsPsychicBalloonGruntMale
	| InvasionNpcDisplaySettingsPsychicGruntFemale
	| InvasionNpcDisplaySettingsPsychicGruntMale;

// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "{grunt-dynamic-tutorial}", 6 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			trainerName: "combat_grunt_name";
			trainerQuote: "{grunt_dynamic_quote}";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;
export type InvasionNpcDisplaySettingsBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			trainerName: "combat_grunt_name";
			trainerQuote: "{grunt_dynamic_quote}";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;
export type InvasionNpcDisplaySettingsGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			trainerName: "combat_grunt_name";
			trainerQuote: "{grunt_dynamic_quote}";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;
export type InvasionNpcDisplaySettingsGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			trainerName: "combat_grunt_name";
			trainerQuote: "{grunt_dynamic_quote}";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;
export type InvasionNpcDisplaySettingsGruntbFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRUNTB_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Giovanni.png";
			modelName: "f_combat_gruntb";
			trainerName: "combat_grunt_bf_name";
			trainerQuote: "grunt_bf_combat_quote";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;
export type InvasionNpcDisplaySettingsGruntbMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GRUNTB_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Giovanni.png";
			isMale: true;
			modelName: "m_combat_gruntb";
			trainerName: "combat_grunt_bm_name";
			trainerQuote: "grunt_bm_combat_quote";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "{grunt_dynamic_tutorial}";
		}
	>
>;

export type InvasionNpcDisplaySettingsGruntDynamicTutorialMasterfileEntry =
	| InvasionNpcDisplaySettingsBalloonGruntFemale
	| InvasionNpcDisplaySettingsBalloonGruntMale
	| InvasionNpcDisplaySettingsGruntFemale
	| InvasionNpcDisplaySettingsGruntMale
	| InvasionNpcDisplaySettingsGruntbFemale
	| InvasionNpcDisplaySettingsGruntbMale;

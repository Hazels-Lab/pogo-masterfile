// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-flying", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsFlyingBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FLYING_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FLYING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_flying";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_flying";
		}
	>
>;
export type InvasionNpcDisplaySettingsFlyingBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FLYING_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FLYING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_flying";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_flying";
		}
	>
>;
export type InvasionNpcDisplaySettingsFlyingGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FLYING_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_FLYING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_flying";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_flying";
		}
	>
>;
export type InvasionNpcDisplaySettingsFlyingGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_FLYING_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_FLYING";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_flying";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_flying";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialFlyingMasterfileEntry =
	| InvasionNpcDisplaySettingsFlyingBalloonGruntFemale
	| InvasionNpcDisplaySettingsFlyingBalloonGruntMale
	| InvasionNpcDisplaySettingsFlyingGruntFemale
	| InvasionNpcDisplaySettingsFlyingGruntMale;

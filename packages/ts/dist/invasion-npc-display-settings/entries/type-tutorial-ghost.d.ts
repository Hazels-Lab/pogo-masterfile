// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "type-tutorial-ghost", 4 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsGhostBalloonGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GHOST_BALLOON_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GHOST";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ghost";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ghost";
		}
	>
>;
export type InvasionNpcDisplaySettingsGhostBalloonGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GHOST_BALLOON_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GHOST";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ghost";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ghost";
		}
	>
>;
export type InvasionNpcDisplaySettingsGhostGruntFemale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GHOST_GRUNT_FEMALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "f_combat_grunt";
			tipsType: "POKEMON_TYPE_GHOST";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ghost";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ghost";
		}
	>
>;
export type InvasionNpcDisplaySettingsGhostGruntMale = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_GHOST_GRUNT_MALE",
		{
			avatar: {
				avatar: 2;
			};
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			isMale: true;
			modelName: "m_combat_grunt";
			tipsType: "POKEMON_TYPE_GHOST";
			trainerName: "combat_grunt_name";
			trainerQuote: "combat_grunt_quote_ghost";
			trainerTitle: "combat_grunt_title";
			tutorialOnLossString: "type_tutorial_ghost";
		}
	>
>;

export type InvasionNpcDisplaySettingsTypeTutorialGhostMasterfileEntry =
	| InvasionNpcDisplaySettingsGhostBalloonGruntFemale
	| InvasionNpcDisplaySettingsGhostBalloonGruntMale
	| InvasionNpcDisplaySettingsGhostGruntFemale
	| InvasionNpcDisplaySettingsGhostGruntMale;

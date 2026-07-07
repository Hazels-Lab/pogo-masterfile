// Generated from Pokémon GO masterfile — group "invasionNpcDisplaySettings", split "no-tutorial-on-loss-string", 6 entries.

import type { S } from "../../_utils";
import type { InvasionNpcDisplaySettings } from "../types";

export type InvasionNpcDisplaySettingsBlanche = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_BLANCHE",
		{
			avatar: {
				avatar: 2;
			};
			backdropImageBundle: "combat_blanche_backdrop";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "combat_blanche";
			trainerName: "combat_blanche";
			trainerQuote: "combat_blanche_quote";
			trainerTitle: "combat_blanche_title";
		}
	>
>;
export type InvasionNpcDisplaySettingsCandela = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_CANDELA",
		{
			avatar: {
				avatar: 2;
			};
			backdropImageBundle: "combat_candela_backdrop";
			iconUrl: "https://prodholoholo-public-images.nianticlabs.com/Icon_Candela.png";
			modelName: "combat_candela";
			trainerName: "combat_candela";
			trainerQuote: "combat_candela_quote";
			trainerTitle: "combat_candela_title";
		}
	>
>;
export type InvasionNpcDisplaySettingsExplorer = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_EXPLORER",
		{
			avatar: {
				avatar: 2;
			};
			backdropImageBundle: "combat_spark_backdrop";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
			isMale: true;
			modelName: "combat_explorer";
			trainerName: "routes_NPC_explorer";
			trainerQuote: "combat_spark_quote";
			trainerTitle: "routes_NPC_activity_ge";
		}
	>
>;
export type InvasionNpcDisplaySettingsSpark = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_SPARK",
		{
			avatar: {
				avatar: 2;
			};
			backdropImageBundle: "combat_spark_backdrop";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Spark.png";
			isMale: true;
			modelName: "combat_spark";
			trainerName: "combat_spark";
			trainerQuote: "combat_spark_quote";
			trainerTitle: "combat_spark_title";
		}
	>
>;
export type InvasionNpcDisplaySettingsWillow = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WILLOW",
		{
			avatar: {
				avatar: 2;
			};
			customIncidentMusic: "QuestMusic";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "combat_blanche";
			trainerName: "combat_blanche";
			trainerQuote: "combat_blanche_quote";
			trainerTitle: "combat_blanche_title";
		}
	>
>;
export type InvasionNpcDisplaySettingsWillowb = S<
	InvasionNpcDisplaySettings<
		"CHARACTER_WILLOWB",
		{
			avatar: {
				avatar: 2;
			};
			customIncidentMusic: "QuestMusic";
			iconUrl: "https://storage.googleapis.com/prod-public-images/Icon_Blanche.png";
			modelName: "combat_blanche";
			trainerName: "combat_blanche";
			trainerQuote: "combat_blanche_quote";
			trainerTitle: "combat_blanche_title";
		}
	>
>;

export type InvasionNpcDisplaySettingsNoTutorialOnLossStringMasterfileEntry =
	| InvasionNpcDisplaySettingsBlanche
	| InvasionNpcDisplaySettingsCandela
	| InvasionNpcDisplaySettingsExplorer
	| InvasionNpcDisplaySettingsSpark
	| InvasionNpcDisplaySettingsWillow
	| InvasionNpcDisplaySettingsWillowb;

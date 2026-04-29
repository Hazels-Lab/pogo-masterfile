// Generated from Pokémon GO masterfile — group "combatRankingProtoSettings", 21 entries (structural types).

import type { W } from "../_utils";

export interface CombatRankingProtoSettings<TemplateID extends string = string, TData extends CombatRankingProtoSettingsData = CombatRankingProtoSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatRankingProtoSettings: TData & {
			requiredForRewards: {
				additionalTotalBattlesRequired: 5;
				rankLevel: 1;
			};
		};
	};
}
export type CombatRankingProtoSettingsType = W<CombatRankingProtoSettings>;

export interface CombatRankingProtoSettingsData {
	minRankToDisplayRating: number;
	minRatingRequired?: number;
	rankLevel: Array<{
		additionalTotalBattlesRequired?: number;
		additionalWinsRequired?: number;
		minRatingRequired?: number;
		rankLevel: number;
	}>;
}

export type CombatRanking =
	| "COMBAT_RANKING_SETTINGS"
	| "COMBAT_RANKING_SETTINGS_S10"
	| "COMBAT_RANKING_SETTINGS_S13"
	| "COMBAT_RANKING_SETTINGS_S14"
	| "COMBAT_RANKING_SETTINGS_S15"
	| "COMBAT_RANKING_SETTINGS_S16"
	| "COMBAT_RANKING_SETTINGS_S17"
	| "COMBAT_RANKING_SETTINGS_S18"
	| "COMBAT_RANKING_SETTINGS_S19"
	| "COMBAT_RANKING_SETTINGS_S20"
	| "COMBAT_RANKING_SETTINGS_S21"
	| "COMBAT_RANKING_SETTINGS_S22"
	| "COMBAT_RANKING_SETTINGS_S23"
	| "COMBAT_RANKING_SETTINGS_S24"
	| "COMBAT_RANKING_SETTINGS_S25"
	| "COMBAT_RANKING_SETTINGS_S26"
	| "COMBAT_RANKING_SETTINGS_S27"
	| "COMBAT_RANKING_SETTINGS_S28"
	| "COMBAT_RANKING_SETTINGS_S29"
	| "COMBAT_RANKING_SETTINGS_S8"
	| "COMBAT_RANKING_SETTINGS_S9";

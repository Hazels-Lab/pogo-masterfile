// Generated from Pokémon GO masterfile — group "combatRankingProtoSettings", 21 entries (structural types).

export type * from "./variants";

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

export type CombatRankingProtoSettingsMasterfileEntry =
	| CombatRankingProtoSettingsSettings
	| CombatRankingProtoSettingsSettingsS10
	| CombatRankingProtoSettingsSettingsS13
	| CombatRankingProtoSettingsSettingsS14
	| CombatRankingProtoSettingsSettingsS15
	| CombatRankingProtoSettingsSettingsS16
	| CombatRankingProtoSettingsSettingsS17
	| CombatRankingProtoSettingsSettingsS18
	| CombatRankingProtoSettingsSettingsS19
	| CombatRankingProtoSettingsSettingsS20
	| CombatRankingProtoSettingsSettingsS21
	| CombatRankingProtoSettingsSettingsS22
	| CombatRankingProtoSettingsSettingsS23
	| CombatRankingProtoSettingsSettingsS24
	| CombatRankingProtoSettingsSettingsS25
	| CombatRankingProtoSettingsSettingsS26
	| CombatRankingProtoSettingsSettingsS27
	| CombatRankingProtoSettingsSettingsS28
	| CombatRankingProtoSettingsSettingsS29
	| CombatRankingProtoSettingsSettingsS8
	| CombatRankingProtoSettingsSettingsS9;

export type CombatRankingProtoSettingsTemplateID = CombatRankingProtoSettingsMasterfileEntry["templateId"];

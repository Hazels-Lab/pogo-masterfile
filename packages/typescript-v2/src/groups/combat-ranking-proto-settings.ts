export interface CombatRankingProtoSettings<T extends string> {
	templateId: T;
	data: CombatRankingProtoSettingsData<T>;
}

export interface CombatRankingProtoSettingsData<T extends string> {
	templateId: T;
	combatRankingProtoSettings: {
		minRankToDisplayRating: 11 | 17 | 20 | 24;
		minRatingRequired?: 8 | 9 | 10 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29;
		rankLevel: Array<
			{
				additionalTotalBattlesRequired?: 5;
				additionalWinsRequired?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13 | 14 | 15 | 17 | 18 | 19 | 20 | 25;
				minRatingRequired?: 2000 | 2500 | 2750 | 3000 | 9999;
				rankLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
			}
		>;
		requiredForRewards: {
			additionalTotalBattlesRequired: 5;
			rankLevel: 1;
		};
	};
}

export type CombatRankingProtoSettingsSettings = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS">;
export type CombatRankingProtoSettingsSettingsS10 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S10">;
export type CombatRankingProtoSettingsSettingsS13 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S13">;
export type CombatRankingProtoSettingsSettingsS14 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S14">;
export type CombatRankingProtoSettingsSettingsS15 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S15">;
export type CombatRankingProtoSettingsSettingsS16 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S16">;
export type CombatRankingProtoSettingsSettingsS17 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S17">;
export type CombatRankingProtoSettingsSettingsS18 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S18">;
export type CombatRankingProtoSettingsSettingsS19 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S19">;
export type CombatRankingProtoSettingsSettingsS20 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S20">;
export type CombatRankingProtoSettingsSettingsS21 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S21">;
export type CombatRankingProtoSettingsSettingsS22 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S22">;
export type CombatRankingProtoSettingsSettingsS23 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S23">;
export type CombatRankingProtoSettingsSettingsS24 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S24">;
export type CombatRankingProtoSettingsSettingsS25 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S25">;
export type CombatRankingProtoSettingsSettingsS26 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S26">;
export type CombatRankingProtoSettingsSettingsS27 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S27">;
export type CombatRankingProtoSettingsSettingsS28 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S28">;
export type CombatRankingProtoSettingsSettingsS29 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S29">;
export type CombatRankingProtoSettingsSettingsS8 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S8">;
export type CombatRankingProtoSettingsSettingsS9 = CombatRankingProtoSettings<"COMBAT_RANKING_SETTINGS_S9">;

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

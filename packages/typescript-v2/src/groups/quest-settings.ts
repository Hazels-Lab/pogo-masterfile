export interface QuestSettings<T extends string> {
	templateId: T;
	data: QuestSettingsData<T>;
}

export interface QuestSettingsData<T extends string> {
	templateId: T;
	questSettings: {
		dailyQuest: {
			bonusMultiplier?: 2;
			bucketsPerDay: 1;
			streakBonusMultiplier?: 3;
			streakLength: 7;
		};
		questType: "QUEST_FIRST_CATCH_OF_THE_DAY" | "QUEST_FIRST_POKESTOP_OF_THE_DAY" | "QUEST_FIRST_ROUTE_OF_THE_DAY";
	};
}

export type QuestSettingsCatchOfTheDay = QuestSettings<"QUEST_FIRST_CATCH_OF_THE_DAY">;
export type QuestSettingsPokestopOfTheDay = QuestSettings<"QUEST_FIRST_POKESTOP_OF_THE_DAY">;
export type QuestSettingsRouteOfTheDay = QuestSettings<"QUEST_FIRST_ROUTE_OF_THE_DAY">;

export type QuestSettingsMasterfileEntry =
	| QuestSettingsCatchOfTheDay
	| QuestSettingsPokestopOfTheDay
	| QuestSettingsRouteOfTheDay;

export type QuestSettingsTemplateID = QuestSettingsMasterfileEntry["templateId"];

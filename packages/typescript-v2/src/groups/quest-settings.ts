export interface QuestSettings<T extends string> {
	templateId: T;
	data: QuestSettingsData<T>;
}

export interface QuestSettingsData<T extends string> {
	templateId: T;
	questSettings: unknown;
}

export type QuestSettingsCatchOfTheDay = QuestSettings<"QUEST_FIRST_CATCH_OF_THE_DAY">;
export type QuestSettingsPokestopOfTheDay = QuestSettings<"QUEST_FIRST_POKESTOP_OF_THE_DAY">;
export type QuestSettingsRouteOfTheDay = QuestSettings<"QUEST_FIRST_ROUTE_OF_THE_DAY">;

export type QuestSettingsMasterfileEntry =
	| QuestSettingsCatchOfTheDay
	| QuestSettingsPokestopOfTheDay
	| QuestSettingsRouteOfTheDay;

export type QuestSettingsTemplateID = QuestSettingsMasterfileEntry["templateId"];

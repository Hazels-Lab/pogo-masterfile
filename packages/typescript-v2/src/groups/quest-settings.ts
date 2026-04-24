export interface QuestSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: QuestSettingsData<TemplateID>;
}

export interface QuestSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	questSettings: {
		dailyQuest: {
			bonusMultiplier?: 2;
			bucketsPerDay: 1;
			streakBonusMultiplier?: 3;
			streakLength: 7;
		};
		questType: TemplateID;
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

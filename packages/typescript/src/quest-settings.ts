// Generated from Pokémon GO masterfile — group "questSettings", 3 entries.

import type { S } from "./_utils";
export interface QuestSettings<TemplateID extends string = string, TData extends QuestSettingsData = QuestSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		questSettings: TData & {
			dailyQuest: {
				bucketsPerDay: 1;
				streakLength: 7;
			};
			questType: TemplateID;
		};
	};
}

export interface QuestSettingsData {
	dailyQuest: {
		bonusMultiplier?: number;
		streakBonusMultiplier?: number;
	};
}

export type QuestSettingsCatchOfTheDay = S<
	QuestSettings<
		"QUEST_FIRST_CATCH_OF_THE_DAY",
		{
			dailyQuest: object;
		}
	>
>;
export type QuestSettingsPokestopOfTheDay = S<
	QuestSettings<
		"QUEST_FIRST_POKESTOP_OF_THE_DAY",
		{
			dailyQuest: {
				bonusMultiplier: 2;
				streakBonusMultiplier: 3;
			};
		}
	>
>;
export type QuestSettingsRouteOfTheDay = S<
	QuestSettings<
		"QUEST_FIRST_ROUTE_OF_THE_DAY",
		{
			dailyQuest: object;
		}
	>
>;

export type QuestSettingsMasterfileEntry = QuestSettingsCatchOfTheDay | QuestSettingsPokestopOfTheDay | QuestSettingsRouteOfTheDay;

export type QuestSettingsTemplateID = QuestSettingsMasterfileEntry["templateId"];

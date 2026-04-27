// Generated from Pokémon GO masterfile — group "questSettings", 3 entries (structural types).

export type * from "./variants";

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

export type QuestSettingsMasterfileEntry = QuestSettingsCatchOfTheDay | QuestSettingsPokestopOfTheDay | QuestSettingsRouteOfTheDay;

export type QuestSettingsTemplateID = QuestSettingsMasterfileEntry["templateId"];

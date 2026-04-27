// Generated from Pokémon GO masterfile — group "questSettings", 3 entries (structural types).

import type { W } from "../_utils";

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
export type QuestSettingsType = W<QuestSettings>;

export interface QuestSettingsData {
	dailyQuest: {
		bonusMultiplier?: number;
		streakBonusMultiplier?: number;
	};
}

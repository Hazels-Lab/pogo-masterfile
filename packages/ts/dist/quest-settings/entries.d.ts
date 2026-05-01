// Generated from Pokémon GO masterfile — group "questSettings", 3 entries (variant aliases).

import type { S } from "../_utils";
import type { QuestSettings, QuestSettingsData } from "./index";

export type QuestSettingsCatchOfTheDay = S<QuestSettings<"QUEST_FIRST_CATCH_OF_THE_DAY", {
    dailyQuest: object;
}>>;
export type QuestSettingsPokestopOfTheDay = S<QuestSettings<"QUEST_FIRST_POKESTOP_OF_THE_DAY", {
    dailyQuest: {
        bonusMultiplier: 2;
        streakBonusMultiplier: 3;
    };
}>>;
export type QuestSettingsRouteOfTheDay = S<QuestSettings<"QUEST_FIRST_ROUTE_OF_THE_DAY", {
    dailyQuest: object;
}>>;

export type QuestSettingsMasterfileEntry = QuestSettingsCatchOfTheDay | QuestSettingsPokestopOfTheDay | QuestSettingsRouteOfTheDay;

export type QuestSettingsTemplateID = QuestSettingsMasterfileEntry["templateId"];

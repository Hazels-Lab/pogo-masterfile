// Generated from Pokémon GO masterfile — group "languageSettings", 3 entries (variant aliases).

import type { S } from "../_utils";
import type { LanguageSettings, LanguageSettingsData } from "./index";

export type LanguageSettingsHindi = S<LanguageSettings<"Hindi", {
    language: "Hindi";
}>>;
export type LanguageSettingsIndonesian = S<LanguageSettings<"Indonesian", {
    language: "Indonesian";
}>>;
export type LanguageSettingsLatam = S<LanguageSettings<"LATAM", {
    language: "spanishlatinamerican";
}>>;

export type LanguageSettingsMasterfileEntry = LanguageSettingsHindi | LanguageSettingsIndonesian | LanguageSettingsLatam;

export type LanguageSettingsTemplateID = LanguageSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "genderSettings" entries barrel.

import type { GenderSettingsFormMasterfileEntry } from "./form";
import type { GenderSettingsMiscMasterfileEntry } from "./misc";

export type * from "./form";
export type * from "./misc";

export type GenderSettingsMasterfileEntry = GenderSettingsFormMasterfileEntry | GenderSettingsMiscMasterfileEntry;

export type GenderSettingsTemplateID = GenderSettingsMasterfileEntry["templateId"];

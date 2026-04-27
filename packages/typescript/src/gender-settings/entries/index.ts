// Generated from Pokémon GO masterfile — group "genderSettings" entries barrel.

import type { GenderSettingsBaseMasterfileEntry } from "./base";
import type { GenderSettingsFormMasterfileEntry } from "./form";

export type * from "./base";
export type * from "./form";

export type GenderSettingsMasterfileEntry = GenderSettingsBaseMasterfileEntry | GenderSettingsFormMasterfileEntry;
export type GenderSettingsTemplateID = GenderSettingsMasterfileEntry["templateId"];

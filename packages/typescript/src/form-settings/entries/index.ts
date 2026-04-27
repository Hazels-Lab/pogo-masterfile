// Generated from Pokémon GO masterfile — group "formSettings" entries barrel.

import type { FormSettingsBaseMasterfileEntry } from "./base";
import type { FormSettingsFormsMasterfileEntry } from "./forms";

export type * from "./base";
export type * from "./forms";

export type FormSettingsMasterfileEntry = FormSettingsBaseMasterfileEntry | FormSettingsFormsMasterfileEntry;

export type FormSettingsTemplateID = FormSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "formSettings" entries barrel.

import type { FormSettingsFormsMasterfileEntry } from "./forms";
import type { FormSettingsMiscMasterfileEntry } from "./misc";

export type * from "./forms";
export type * from "./misc";

export type FormSettingsMasterfileEntry = FormSettingsFormsMasterfileEntry | FormSettingsMiscMasterfileEntry;

export type FormSettingsTemplateID = FormSettingsMasterfileEntry["templateId"];

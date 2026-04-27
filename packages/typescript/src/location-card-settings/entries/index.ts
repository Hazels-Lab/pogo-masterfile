// Generated from Pokémon GO masterfile — group "locationCardSettings" entries barrel.

import type { LocationCardSettingsBaseMasterfileEntry } from "./base";
import type { LocationCardSettingsCardTypeMasterfileEntry } from "./card-type";
import type { LocationCardSettingsCardTypeVfxAddressMasterfileEntry } from "./card-type-vfx-address";

export type * from "./base";
export type * from "./card-type";
export type * from "./card-type-vfx-address";

export type LocationCardSettingsMasterfileEntry =
	| LocationCardSettingsBaseMasterfileEntry
	| LocationCardSettingsCardTypeMasterfileEntry
	| LocationCardSettingsCardTypeVfxAddressMasterfileEntry;
export type LocationCardSettingsTemplateID = LocationCardSettingsMasterfileEntry["templateId"];

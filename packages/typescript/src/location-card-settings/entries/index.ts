// Generated from Pokémon GO masterfile — group "locationCardSettings" entries barrel.

import type { LocationCardSettingsCardTypeMasterfileEntry } from "./card-type";
import type { LocationCardSettingsCardTypeVfxAddressMasterfileEntry } from "./card-type-vfx-address";
import type { LocationCardSettingsMiscMasterfileEntry } from "./misc";

export type * from "./card-type";
export type * from "./card-type-vfx-address";
export type * from "./misc";

export type LocationCardSettingsMasterfileEntry =
	| LocationCardSettingsCardTypeMasterfileEntry
	| LocationCardSettingsCardTypeVfxAddressMasterfileEntry
	| LocationCardSettingsMiscMasterfileEntry;

export type LocationCardSettingsTemplateID = LocationCardSettingsMasterfileEntry["templateId"];

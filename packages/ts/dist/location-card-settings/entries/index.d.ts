// Generated from Pokémon GO masterfile — group "locationCardSettings" entries barrel.

import type { LocationCardSettings2023MasterfileEntry } from "./2023";
import type { LocationCardSettings2024MasterfileEntry } from "./2024";
import type { LocationCardSettings2025MasterfileEntry } from "./2025";
import type { LocationCardSettings2026MasterfileEntry } from "./2026";
import type { LocationCardSettingsCitysafari2025MasterfileEntry } from "./citysafari2025";
import type { LocationCardSettingsCrMasterfileEntry } from "./cr";
import type { LocationCardSettingsIdMasterfileEntry } from "./id";
import type { LocationCardSettingsJapanMasterfileEntry } from "./japan";
import type { LocationCardSettingsJejuMasterfileEntry } from "./jeju";
import type { LocationCardSettingsNtMasterfileEntry } from "./nt";
import type { LocationCardSettingsPokelidMasterfileEntry } from "./pokelid";
import type { LocationCardSettingsSpecialMasterfileEntry } from "./special";
import type { LocationCardSettingsSpecialbackgroundMasterfileEntry } from "./specialbackground";
import type { LocationCardSettingsTokmunMasterfileEntry } from "./tokmun";

export type * from "./2023";
export type * from "./2024";
export type * from "./2025";
export type * from "./2026";
export type * from "./citysafari2025";
export type * from "./cr";
export type * from "./id";
export type * from "./japan";
export type * from "./jeju";
export type * from "./nt";
export type * from "./pokelid";
export type * from "./special";
export type * from "./specialbackground";
export type * from "./tokmun";

export type LocationCardSettingsMasterfileEntry =
	| LocationCardSettings2023MasterfileEntry
	| LocationCardSettings2024MasterfileEntry
	| LocationCardSettings2025MasterfileEntry
	| LocationCardSettings2026MasterfileEntry
	| LocationCardSettingsCitysafari2025MasterfileEntry
	| LocationCardSettingsCrMasterfileEntry
	| LocationCardSettingsIdMasterfileEntry
	| LocationCardSettingsJapanMasterfileEntry
	| LocationCardSettingsJejuMasterfileEntry
	| LocationCardSettingsNtMasterfileEntry
	| LocationCardSettingsPokelidMasterfileEntry
	| LocationCardSettingsSpecialMasterfileEntry
	| LocationCardSettingsSpecialbackgroundMasterfileEntry
	| LocationCardSettingsTokmunMasterfileEntry;

export type LocationCardSettingsTemplateID = LocationCardSettingsMasterfileEntry["templateId"];

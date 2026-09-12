// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeMegasquads2026MasterfileEntry } from "./megasquads2026";
import type { EventPassTierSettingsFreeSeptember2026MasterfileEntry } from "./september2026";

export type * from "./megasquads2026";
export type * from "./september2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeMegasquads2026MasterfileEntry
	| EventPassTierSettingsFreeSeptember2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

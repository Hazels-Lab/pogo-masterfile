// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsFreeGofest2026MasterfileEntry } from "./gofest2026";
import type { EventPassTierSettingsFreeMegasquads2026MasterfileEntry } from "./megasquads2026";
import type { EventPassTierSettingsFreeSeptember2026MasterfileEntry } from "./september2026";

export type * from "./august2026";
export type * from "./gofest2026";
export type * from "./megasquads2026";
export type * from "./september2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeAugust2026MasterfileEntry
	| EventPassTierSettingsFreeGofest2026MasterfileEntry
	| EventPassTierSettingsFreeMegasquads2026MasterfileEntry
	| EventPassTierSettingsFreeSeptember2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

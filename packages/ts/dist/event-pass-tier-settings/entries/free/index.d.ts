// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsFreeJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsFreeSummerMasterfileEntry } from "./summer";

export type * from "./august2026";
export type * from "./july2026";
export type * from "./summer";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeAugust2026MasterfileEntry
	| EventPassTierSettingsFreeJuly2026MasterfileEntry
	| EventPassTierSettingsFreeSummerMasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

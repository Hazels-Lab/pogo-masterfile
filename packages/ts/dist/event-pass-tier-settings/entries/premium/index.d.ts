// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumWcs2026MasterfileEntry } from "./wcs2026";

export type * from "./august2026";
export type * from "./wcs2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAugust2026MasterfileEntry
	| EventPassTierSettingsPremiumWcs2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

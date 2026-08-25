// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumUuMasterfileEntry } from "./uu";
import type { EventPassTierSettingsPremiumWcs2026MasterfileEntry } from "./wcs2026";

export type * from "./august2026";
export type * from "./uu";
export type * from "./wcs2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAugust2026MasterfileEntry
	| EventPassTierSettingsPremiumUuMasterfileEntry
	| EventPassTierSettingsPremiumWcs2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

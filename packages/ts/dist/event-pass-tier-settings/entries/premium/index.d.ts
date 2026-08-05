// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsPremiumSummerMasterfileEntry } from "./summer";

export type * from "./august2026";
export type * from "./july2026";
export type * from "./summer";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAugust2026MasterfileEntry
	| EventPassTierSettingsPremiumJuly2026MasterfileEntry
	| EventPassTierSettingsPremiumSummerMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

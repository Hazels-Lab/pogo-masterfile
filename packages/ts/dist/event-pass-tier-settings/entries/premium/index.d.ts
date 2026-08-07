// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumSummerMasterfileEntry } from "./summer";

export type * from "./august2026";
export type * from "./summer";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAugust2026MasterfileEntry
	| EventPassTierSettingsPremiumSummerMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

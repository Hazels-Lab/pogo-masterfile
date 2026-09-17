// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumHorizonsMasterfileEntry } from "./horizons";
import type { EventPassTierSettingsPremiumSeptember2026MasterfileEntry } from "./september2026";

export type * from "./horizons";
export type * from "./september2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumHorizonsMasterfileEntry
	| EventPassTierSettingsPremiumSeptember2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

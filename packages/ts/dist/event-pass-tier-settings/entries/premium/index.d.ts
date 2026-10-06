// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumHarvestfestival2026MasterfileEntry } from "./harvestfestival2026";
import type { EventPassTierSettingsPremiumOctober2026MasterfileEntry } from "./october2026";
import type { EventPassTierSettingsPremiumSeptember2026MasterfileEntry } from "./september2026";

export type * from "./harvestfestival2026";
export type * from "./october2026";
export type * from "./september2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumHarvestfestival2026MasterfileEntry
	| EventPassTierSettingsPremiumOctober2026MasterfileEntry
	| EventPassTierSettingsPremiumSeptember2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumHalloweenMasterfileEntry } from "./halloween";
import type { EventPassTierSettingsPremiumNovember2026MasterfileEntry } from "./november2026";
import type { EventPassTierSettingsPremiumOctober2026MasterfileEntry } from "./october2026";

export type * from "./halloween";
export type * from "./november2026";
export type * from "./october2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumHalloweenMasterfileEntry
	| EventPassTierSettingsPremiumNovember2026MasterfileEntry
	| EventPassTierSettingsPremiumOctober2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumHalloweenMasterfileEntry } from "./halloween";
import type { EventPassTierSettingsPremiumOctober2026MasterfileEntry } from "./october2026";

export type * from "./halloween";
export type * from "./october2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumHalloweenMasterfileEntry
	| EventPassTierSettingsPremiumOctober2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

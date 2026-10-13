// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumFallmarathon2026MasterfileEntry } from "./fallmarathon2026";
import type { EventPassTierSettingsPremiumOctober2026MasterfileEntry } from "./october2026";

export type * from "./fallmarathon2026";
export type * from "./october2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumFallmarathon2026MasterfileEntry
	| EventPassTierSettingsPremiumOctober2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumMay2026MasterfileEntry } from "./may2026";
import type { EventPassTierSettingsPremiumSpringmarathon2026MasterfileEntry } from "./springmarathon2026";

export type * from "./may2026";
export type * from "./springmarathon2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumMay2026MasterfileEntry
	| EventPassTierSettingsPremiumSpringmarathon2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumGowa2026MasterfileEntry } from "./gowa2026";
import type { EventPassTierSettingsPremiumNovember2026MasterfileEntry } from "./november2026";

export type * from "./gowa2026";
export type * from "./november2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumGowa2026MasterfileEntry
	| EventPassTierSettingsPremiumNovember2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

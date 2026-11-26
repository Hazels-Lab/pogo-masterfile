// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumNovember2026MasterfileEntry } from "./november2026";
import type { EventPassTierSettingsPremiumTwilightMasterfileEntry } from "./twilight";

export type * from "./november2026";
export type * from "./twilight";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumNovember2026MasterfileEntry
	| EventPassTierSettingsPremiumTwilightMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

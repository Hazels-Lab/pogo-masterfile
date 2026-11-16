// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumGlobalMasterfileEntry } from "./global";
import type { EventPassTierSettingsPremiumLeadoutMasterfileEntry } from "./leadout";
import type { EventPassTierSettingsPremiumSeasonMasterfileEntry } from "./season";

export type * from "./global";
export type * from "./leadout";
export type * from "./season";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumGlobalMasterfileEntry
	| EventPassTierSettingsPremiumLeadoutMasterfileEntry
	| EventPassTierSettingsPremiumSeasonMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeGlobalMasterfileEntry } from "./global";
import type { EventPassTierSettingsFreeLeadoutMasterfileEntry } from "./leadout";
import type { EventPassTierSettingsFreeSeasonMasterfileEntry } from "./season";

export type * from "./global";
export type * from "./leadout";
export type * from "./season";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeGlobalMasterfileEntry
	| EventPassTierSettingsFreeLeadoutMasterfileEntry
	| EventPassTierSettingsFreeSeasonMasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

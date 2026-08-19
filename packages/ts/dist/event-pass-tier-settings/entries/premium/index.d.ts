// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumUuMasterfileEntry } from "./uu";

export type * from "./august2026";
export type * from "./uu";

export type EventPassTierSettingsPremiumMasterfileEntry = EventPassTierSettingsPremiumAugust2026MasterfileEntry | EventPassTierSettingsPremiumUuMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

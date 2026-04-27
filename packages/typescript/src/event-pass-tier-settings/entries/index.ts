// Generated from Pokémon GO masterfile — group "eventPassTierSettings" entries barrel.

import type { EventPassTierSettingsFreeMasterfileEntry } from "./free";
import type { EventPassTierSettingsPremiumMasterfileEntry } from "./premium";

export type * from "./free";
export type * from "./premium";

export type EventPassTierSettingsMasterfileEntry = EventPassTierSettingsFreeMasterfileEntry | EventPassTierSettingsPremiumMasterfileEntry;
export type EventPassTierSettingsTemplateID = EventPassTierSettingsMasterfileEntry["templateId"];

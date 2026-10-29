// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeHalloweenMasterfileEntry } from "./halloween";
import type { EventPassTierSettingsFreeOctober2026MasterfileEntry } from "./october2026";

export type * from "./halloween";
export type * from "./october2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeHalloweenMasterfileEntry | EventPassTierSettingsFreeOctober2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

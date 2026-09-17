// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeHorizonsMasterfileEntry } from "./horizons";
import type { EventPassTierSettingsFreeSeptember2026MasterfileEntry } from "./september2026";

export type * from "./horizons";
export type * from "./september2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeHorizonsMasterfileEntry | EventPassTierSettingsFreeSeptember2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

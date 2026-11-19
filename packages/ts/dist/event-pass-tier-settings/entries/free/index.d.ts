// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeGowa2026MasterfileEntry } from "./gowa2026";
import type { EventPassTierSettingsFreeNovember2026MasterfileEntry } from "./november2026";

export type * from "./gowa2026";
export type * from "./november2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeGowa2026MasterfileEntry | EventPassTierSettingsFreeNovember2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

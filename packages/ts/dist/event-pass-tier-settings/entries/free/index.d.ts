// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsFreeGofest2026MasterfileEntry } from "./gofest2026";

export type * from "./august2026";
export type * from "./gofest2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeAugust2026MasterfileEntry | EventPassTierSettingsFreeGofest2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

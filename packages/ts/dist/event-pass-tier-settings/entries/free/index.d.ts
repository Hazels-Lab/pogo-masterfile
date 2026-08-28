// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsFreeWcs2026MasterfileEntry } from "./wcs2026";

export type * from "./august2026";
export type * from "./wcs2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeAugust2026MasterfileEntry | EventPassTierSettingsFreeWcs2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeGofest2026MasterfileEntry } from "./gofest2026";
import type { EventPassTierSettingsFreeJune2026MasterfileEntry } from "./june2026";

export type * from "./gofest2026";
export type * from "./june2026";

export type EventPassTierSettingsFreeMasterfileEntry = EventPassTierSettingsFreeGofest2026MasterfileEntry | EventPassTierSettingsFreeJune2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

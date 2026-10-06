// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeHarvestfestival2026MasterfileEntry } from "./harvestfestival2026";
import type { EventPassTierSettingsFreeOctober2026MasterfileEntry } from "./october2026";
import type { EventPassTierSettingsFreeSeptember2026MasterfileEntry } from "./september2026";

export type * from "./harvestfestival2026";
export type * from "./october2026";
export type * from "./september2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeHarvestfestival2026MasterfileEntry
	| EventPassTierSettingsFreeOctober2026MasterfileEntry
	| EventPassTierSettingsFreeSeptember2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeMay2026MasterfileEntry } from "./may2026";
import type { EventPassTierSettingsFreeSpringmarathon2026MasterfileEntry } from "./springmarathon2026";

export type * from "./may2026";
export type * from "./springmarathon2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeMay2026MasterfileEntry
	| EventPassTierSettingsFreeSpringmarathon2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

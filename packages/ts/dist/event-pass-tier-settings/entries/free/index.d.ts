// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeFallmarathon2026MasterfileEntry } from "./fallmarathon2026";
import type { EventPassTierSettingsFreeOctober2026MasterfileEntry } from "./october2026";

export type * from "./fallmarathon2026";
export type * from "./october2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeFallmarathon2026MasterfileEntry
	| EventPassTierSettingsFreeOctober2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

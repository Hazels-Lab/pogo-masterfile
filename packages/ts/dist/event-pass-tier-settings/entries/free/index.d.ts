// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeAfterparty2026MasterfileEntry } from "./afterparty2026";
import type { EventPassTierSettingsFreeJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsFreePikachuMasterfileEntry } from "./pikachu";

export type * from "./afterparty2026";
export type * from "./july2026";
export type * from "./pikachu";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeAfterparty2026MasterfileEntry
	| EventPassTierSettingsFreeJuly2026MasterfileEntry
	| EventPassTierSettingsFreePikachuMasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

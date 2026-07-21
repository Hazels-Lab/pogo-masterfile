// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAfterparty2026MasterfileEntry } from "./afterparty2026";
import type { EventPassTierSettingsPremiumJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsPremiumPikachuMasterfileEntry } from "./pikachu";

export type * from "./afterparty2026";
export type * from "./july2026";
export type * from "./pikachu";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAfterparty2026MasterfileEntry
	| EventPassTierSettingsPremiumJuly2026MasterfileEntry
	| EventPassTierSettingsPremiumPikachuMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

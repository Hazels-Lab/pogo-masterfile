// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsPremiumPikachuMasterfileEntry } from "./pikachu";

export type * from "./july2026";
export type * from "./pikachu";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumJuly2026MasterfileEntry
	| EventPassTierSettingsPremiumPikachuMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

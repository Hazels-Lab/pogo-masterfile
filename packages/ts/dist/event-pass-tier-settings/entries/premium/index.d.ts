// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumGofest2026MasterfileEntry } from "./gofest2026";
import type { EventPassTierSettingsPremiumJuly2026MasterfileEntry } from "./july2026";
import type { EventPassTierSettingsPremiumPikachuMasterfileEntry } from "./pikachu";

export type * from "./gofest2026";
export type * from "./july2026";
export type * from "./pikachu";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumGofest2026MasterfileEntry
	| EventPassTierSettingsPremiumJuly2026MasterfileEntry
	| EventPassTierSettingsPremiumPikachuMasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumAugust2026MasterfileEntry } from "./august2026";
import type { EventPassTierSettingsPremiumGofest2026MasterfileEntry } from "./gofest2026";

export type * from "./august2026";
export type * from "./gofest2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumAugust2026MasterfileEntry
	| EventPassTierSettingsPremiumGofest2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumGofest2026MasterfileEntry } from "./gofest2026";
import type { EventPassTierSettingsPremiumJune2026MasterfileEntry } from "./june2026";

export type * from "./gofest2026";
export type * from "./june2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumGofest2026MasterfileEntry
	| EventPassTierSettingsPremiumJune2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

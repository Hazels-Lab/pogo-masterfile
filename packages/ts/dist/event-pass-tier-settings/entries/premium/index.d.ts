// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumApril2026MasterfileEntry } from "./april2026";
import type { EventPassTierSettingsPremiumMay2026MasterfileEntry } from "./may2026";
import type { EventPassTierSettingsPremiumSteeledresolve2026MasterfileEntry } from "./steeledresolve2026";

export type * from "./april2026";
export type * from "./may2026";
export type * from "./steeledresolve2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumApril2026MasterfileEntry
	| EventPassTierSettingsPremiumMay2026MasterfileEntry
	| EventPassTierSettingsPremiumSteeledresolve2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

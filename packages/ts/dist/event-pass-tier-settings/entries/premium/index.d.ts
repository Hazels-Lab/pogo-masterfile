// Generated from Pokémon GO masterfile — group "eventPassTierSettings premium" entries barrel.

import type { EventPassTierSettingsPremiumMegasquads2026MasterfileEntry } from "./megasquads2026";
import type { EventPassTierSettingsPremiumSeptember2026MasterfileEntry } from "./september2026";

export type * from "./megasquads2026";
export type * from "./september2026";

export type EventPassTierSettingsPremiumMasterfileEntry =
	| EventPassTierSettingsPremiumMegasquads2026MasterfileEntry
	| EventPassTierSettingsPremiumSeptember2026MasterfileEntry;

export type EventPassTierSettingsPremiumTemplateID = EventPassTierSettingsPremiumMasterfileEntry["templateId"];

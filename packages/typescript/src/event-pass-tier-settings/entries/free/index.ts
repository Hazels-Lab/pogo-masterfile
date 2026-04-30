// Generated from Pokémon GO masterfile — group "eventPassTierSettings free" entries barrel.

import type { EventPassTierSettingsFreeApril2026MasterfileEntry } from "./april2026";
import type { EventPassTierSettingsFreeSteeledresolve2026MasterfileEntry } from "./steeledresolve2026";

export type * from "./april2026";
export type * from "./steeledresolve2026";

export type EventPassTierSettingsFreeMasterfileEntry =
	| EventPassTierSettingsFreeApril2026MasterfileEntry
	| EventPassTierSettingsFreeSteeledresolve2026MasterfileEntry;

export type EventPassTierSettingsFreeTemplateID = EventPassTierSettingsFreeMasterfileEntry["templateId"];

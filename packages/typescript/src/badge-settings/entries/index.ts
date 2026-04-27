// Generated from Pokémon GO masterfile — group "badgeSettings" entries barrel.

import type { BadgeSettingsBaseMasterfileEntry } from "./base";
import type { BadgeSettingsCaptureRewardMasterfileEntry } from "./capture-reward";
import type { BadgeSettingsEventBadgeMasterfileEntry } from "./event-badge";
import type { BadgeSettingsEventBadgeEventBadgeSettingsMasterfileEntry } from "./event-badge-event-badge-settings";

export type * from "./base";
export type * from "./capture-reward";
export type * from "./event-badge";
export type * from "./event-badge-event-badge-settings";

export type BadgeSettingsMasterfileEntry =
	| BadgeSettingsBaseMasterfileEntry
	| BadgeSettingsCaptureRewardMasterfileEntry
	| BadgeSettingsEventBadgeMasterfileEntry
	| BadgeSettingsEventBadgeEventBadgeSettingsMasterfileEntry;
export type BadgeSettingsTemplateID = BadgeSettingsMasterfileEntry["templateId"];

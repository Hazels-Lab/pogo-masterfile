// Generated from Pokémon GO masterfile — group "badgeSettings" entries barrel.

import type { BadgeSettingsCaptureRewardMasterfileEntry } from "./capture-reward";
import type { BadgeSettingsEventBadgeMasterfileEntry } from "./event-badge";
import type { BadgeSettingsEventBadgeEventBadgeSettingsMasterfileEntry } from "./event-badge-event-badge-settings";
import type { BadgeSettingsMiscMasterfileEntry } from "./misc";

export type * from "./capture-reward";
export type * from "./event-badge";
export type * from "./event-badge-event-badge-settings";
export type * from "./misc";

export type BadgeSettingsMasterfileEntry = BadgeSettingsCaptureRewardMasterfileEntry | BadgeSettingsEventBadgeMasterfileEntry | BadgeSettingsEventBadgeEventBadgeSettingsMasterfileEntry | BadgeSettingsMiscMasterfileEntry;

export type BadgeSettingsTemplateID = BadgeSettingsMasterfileEntry["templateId"];

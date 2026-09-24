// Generated from Pokémon GO masterfile — group "quickInviteSettings", 6 entries (variant aliases).

import type { S } from "../../_utils";
import type { QuickInviteSettings } from "../types";

export type QuickInviteSettingsDmax = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_DMAX">>;
export type QuickInviteSettingsGmax = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_GMAX">>;
export type QuickInviteSettingsGmaxRsvp = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_GMAX_RSVP">>;
export type QuickInviteSettingsRaid = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_RAID">>;
export type QuickInviteSettingsRaidRsvp = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_RAID_RSVP">>;
export type QuickInviteSettingsWeeklyChallenge = S<QuickInviteSettings<"QUICK_INVITE_SETTINGS_WEEKLY_CHALLENGE">>;

export type QuickInviteSettingsMasterfileEntry =
	| QuickInviteSettingsDmax
	| QuickInviteSettingsGmax
	| QuickInviteSettingsGmaxRsvp
	| QuickInviteSettingsRaid
	| QuickInviteSettingsRaidRsvp
	| QuickInviteSettingsWeeklyChallenge;

export type QuickInviteSettingsTemplateID = QuickInviteSettingsMasterfileEntry["templateId"];

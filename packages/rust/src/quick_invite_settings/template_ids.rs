//! Generated from Pokémon GO masterfile — group "quickInviteSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum QuickInviteSettingsTemplateId {
    #[serde(rename = "QUICK_INVITE_SETTINGS_DMAX")]
    QuickInviteSettingsDmax,
    #[serde(rename = "QUICK_INVITE_SETTINGS_GMAX")]
    QuickInviteSettingsGmax,
    #[serde(rename = "QUICK_INVITE_SETTINGS_GMAX_RSVP")]
    QuickInviteSettingsGmaxRsvp,
    #[serde(rename = "QUICK_INVITE_SETTINGS_RAID")]
    QuickInviteSettingsRaid,
    #[serde(rename = "QUICK_INVITE_SETTINGS_RAID_RSVP")]
    QuickInviteSettingsRaidRsvp,
    #[serde(rename = "QUICK_INVITE_SETTINGS_WEEKLY_CHALLENGE")]
    QuickInviteSettingsWeeklyChallenge,
}

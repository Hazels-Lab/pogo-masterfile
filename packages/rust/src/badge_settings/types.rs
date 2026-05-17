//! Generated from Pokémon GO masterfile — BadgeSettings.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventBadge {
    pub badge_rank: u64,
    pub badge_type: String,
    pub event_badge: bool,
    pub targets: [u64; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BadgeTypeValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventBadgeSettings {
    pub ob_event_badge_settings_number6: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventBadgeEventBadgeSettings {
    pub badge_rank: u64,
    pub badge_type: BadgeTypeValue,
    pub event_badge: bool,
    pub event_badge_settings: EventBadgeSettings,
    pub targets: [u64; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub badge_rank: u64,
    pub badge_type: String,
    pub targets: Vec<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV2 {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV3 {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV4 {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV5 {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV6 {
    pub reward_types: Option<[String; 1]>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureReward {
    pub badge_rank: u64,
    pub badge_type: String,
    pub capture_reward: (
        CaptureRewardV2,
        CaptureRewardV3,
        CaptureRewardV4,
        CaptureRewardV5,
        CaptureRewardV6,
    ),
    pub targets: [u64; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BadgeSettings {
    EventBadge(EventBadge),
    EventBadgeEventBadgeSettings(EventBadgeEventBadgeSettings),
    Misc(Misc),
    CaptureReward(CaptureReward),
}

crate::masterfile_entry!(BadgeSettingsEntry, BadgeSettingsEntryData, badge_settings: BadgeSettings);

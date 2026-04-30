// Generated from Pokémon GO masterfile — group "badgeSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsEventBadge {
    pub badge_rank: u64,
    pub badge_type: serde_json::Value,
    pub event_badge: bool,
    pub targets: [u64; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsEventBadgeEventBadgeSettingsEventBadgeSettings {
    pub ob_event_badge_settings_number6: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsEventBadgeEventBadgeSettings {
    pub badge_rank: u64,
    pub badge_type: serde_json::Value,
    pub event_badge: bool,
    pub event_badge_settings: BadgeSettingsEventBadgeEventBadgeSettingsEventBadgeSettings,
    pub targets: [u64; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsMisc {
    pub badge_rank: u64,
    pub badge_type: String,
    pub targets: Vec<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsCaptureRewardCaptureReward {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsCaptureRewardCaptureRewardV2 {
    pub reward_types: Option<[String; 1]>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsCaptureReward {
    pub badge_rank: u64,
    pub badge_type: String,
    pub capture_reward: (BadgeSettingsCaptureRewardCaptureReward, BadgeSettingsCaptureRewardCaptureReward, BadgeSettingsCaptureRewardCaptureReward, BadgeSettingsCaptureRewardCaptureReward, BadgeSettingsCaptureRewardCaptureRewardV2),
    pub targets: [u64; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BadgeSettings {
    EventBadge(BadgeSettingsEventBadge),
    EventBadgeEventBadgeSettings(BadgeSettingsEventBadgeEventBadgeSettings),
    Misc(BadgeSettingsMisc),
    CaptureReward(BadgeSettingsCaptureReward),
}

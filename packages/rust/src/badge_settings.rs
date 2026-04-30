// Generated from Pokémon GO masterfile — group "badgeSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventBadge {
    pub badge_rank: u64,
    pub badge_type: serde_json::Value,
    pub event_badge: bool,
    pub targets: [u64; 1],
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
    pub badge_type: serde_json::Value,
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
pub struct CaptureReward {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV2 {
    pub reward_types: Option<[String; 1]>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureRewardV3 {
    pub badge_rank: u64,
    pub badge_type: String,
    pub capture_reward: (CaptureReward, CaptureReward, CaptureReward, CaptureReward, CaptureRewardV2),
    pub targets: [u64; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BadgeSettings {
    EventBadge(EventBadge),
    EventBadgeEventBadgeSettings(EventBadgeEventBadgeSettings),
    Misc(Misc),
    CaptureReward(CaptureRewardV3),
}

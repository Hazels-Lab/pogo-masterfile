//! Generated from Pokémon GO masterfile — group "eventPassSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BonusBoxes {
    pub icon_type: String,
    pub quantity: u64,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTrackUpgradeDescriptions {
    pub details_link_key: String,
    pub event_duration_key: String,
    pub event_pass_track_to_upgrade_to: String,
    pub pass_track_upgrade_header_description: String,
    pub ranks_to_highlight_rewards: [u64; 3],
    pub track_unlock_image_url: String,
    pub track_unlock_plus_points_image_url: String,
    pub track_unlock_plus_points_sku_id: String,
    pub track_unlock_sku_id: String,
    pub upgrade_description_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassDisplaySettings {
    pub bonus_boxes: [BonusBoxes; 3],
    pub event_pass_title_key: String,
    pub event_pass_track_upgrade_descriptions: [EventPassTrackUpgradeDescriptions; 1],
    pub header_icon_url: String,
    pub premium_reward_banner_bottom: String,
    pub premium_reward_banner_image_url: String,
    pub premium_reward_banner_middle: String,
    pub premium_reward_banner_top: String,
    pub premium_rewards_description: String,
    pub section_display_priority: u64,
    pub today_view_section: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TrackConditions {
    pub track: String,
    pub track_title_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TrackConditionsV2 {
    pub badge: String,
    pub track: String,
    pub track_title_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassSettings {
    pub additional_bonus_tiers_level: u64,
    pub event_pass_display_settings: EventPassDisplaySettings,
    pub expiration_time: String,
    pub grace_period_end_time: String,
    pub max_tier_level: u64,
    pub points_item_id: String,
    pub prefix: String,
    pub track_conditions: (TrackConditions, TrackConditionsV2),
}

crate::masterfile_entry!(EventPassSettingsEntry, EventPassSettingsEntryData, event_pass_settings: EventPassSettings);

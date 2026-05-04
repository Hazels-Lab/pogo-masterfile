//! Generated from Pokémon GO masterfile — BuddyEmotionLevelSettings.

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinEmotionPointsRequired {
    pub emotion_animation: String,
    pub emotion_level: String,
    pub min_emotion_points_required: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub emotion_animation: String,
    pub emotion_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BuddyEmotionLevelSettings {
    MinEmotionPointsRequired(MinEmotionPointsRequired),
    Misc(Misc),
}

crate::masterfile_entry!(BuddyEmotionLevelSettingsEntry, BuddyEmotionLevelSettingsEntryData, buddy_emotion_level_settings: BuddyEmotionLevelSettings);

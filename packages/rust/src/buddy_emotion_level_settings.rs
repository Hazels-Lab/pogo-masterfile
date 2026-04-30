// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyEmotionLevelSettingsMinEmotionPointsRequired {
    pub emotion_animation: String,
    pub emotion_level: String,
    pub min_emotion_points_required: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyEmotionLevelSettingsMisc {
    pub emotion_animation: String,
    pub emotion_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BuddyEmotionLevelSettings {
    MinEmotionPointsRequired(BuddyEmotionLevelSettingsMinEmotionPointsRequired),
    Misc(BuddyEmotionLevelSettingsMisc),
}

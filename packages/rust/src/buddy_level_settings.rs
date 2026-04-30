// Generated from Pokémon GO masterfile — group "buddyLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinNonCumulativePointsRequiredUnlockedTraits {
    pub level: String,
    pub min_non_cumulative_points_required: u64,
    pub unlocked_traits: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BuddyLevelSettings {
    MinNonCumulativePointsRequiredUnlockedTraits(MinNonCumulativePointsRequiredUnlockedTraits),
    Misc(Misc),
}

crate::masterfile_entry!(BuddyLevelSettingsEntry, BuddyLevelSettingsEntryData, buddy_level_settings: BuddyLevelSettings);

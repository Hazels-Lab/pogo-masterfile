//! Generated from Pokémon GO masterfile — group "questSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DailyQuest {
    pub bonus_multiplier: Option<f64>,
    pub buckets_per_day: u64,
    pub streak_bonus_multiplier: Option<f64>,
    pub streak_length: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuestSettings {
    pub daily_quest: DailyQuest,
    pub quest_type: String,
}

crate::masterfile_entry!(QuestSettingsEntry, QuestSettingsEntryData, quest_settings: QuestSettings);

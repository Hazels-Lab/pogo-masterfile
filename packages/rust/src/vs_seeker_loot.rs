// Generated from Pokémon GO masterfile — group "vsSeekerLoot".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub count: u64,
    pub item: Option<String>,
    pub stardust: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Reward {
    pub item: Option<Item>,
    pub item_ranking_loot_table_count: Option<u64>,
    pub pokemon_reward: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub rank_level: u64,
    pub reward: [Reward; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RewardTrack {
    pub rank_level: u64,
    pub reward: [Reward; 5],
    pub reward_track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum VsSeekerLoot {
    Misc(Misc),
    RewardTrack(RewardTrack),
}

crate::masterfile_entry!(VsSeekerLootEntry, VsSeekerLootEntryData, vs_seeker_loot: VsSeekerLoot);

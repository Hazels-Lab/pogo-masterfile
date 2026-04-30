// Generated from Pokémon GO masterfile — group "vsSeekerLoot".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerLootMiscRewardItem {
    pub count: u64,
    pub item: Option<String>,
    pub stardust: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerLootMiscReward {
    pub item: Option<VsSeekerLootMiscRewardItem>,
    pub item_ranking_loot_table_count: Option<u64>,
    pub pokemon_reward: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerLootMisc {
    pub rank_level: u64,
    pub reward: [VsSeekerLootMiscReward; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerLootRewardTrack {
    pub rank_level: u64,
    pub reward: [VsSeekerLootMiscReward; 5],
    pub reward_track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum VsSeekerLoot {
    Misc(VsSeekerLootMisc),
    RewardTrack(VsSeekerLootRewardTrack),
}

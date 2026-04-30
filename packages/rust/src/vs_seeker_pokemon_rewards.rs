//! Generated from Pokémon GO masterfile — group "vsSeekerPokemonRewards".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Range {
    pub max: u64,
    pub min: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AttackIvOverride {
    pub range: Range,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Pokemon {
    pub pokemon_display: PokemonDisplay,
    pub pokemon_id: String,
    pub shiny_probability: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GuaranteedLimitedPokemonReward {
    pub identifier: String,
    pub lifetime_max_count: Option<u64>,
    pub per_competitive_combat_season_max_count: Option<u64>,
    pub pokemon: Pokemon,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonV2 {
    pub pokemon_display: PokemonDisplay,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvailablePokemon {
    pub attack_iv_override: AttackIvOverride,
    pub defense_iv_override: AttackIvOverride,
    pub guaranteed_limited_pokemon_reward: Option<GuaranteedLimitedPokemonReward>,
    pub pokemon: Option<PokemonV2>,
    pub stamina_iv_override: AttackIvOverride,
    pub unlocked_at_rank: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub available_pokemon: Vec<AvailablePokemon>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RewardTrack {
    pub available_pokemon: Vec<AvailablePokemon>,
    pub reward_track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum VsSeekerPokemonRewards {
    Misc(Misc),
    RewardTrack(RewardTrack),
}

crate::masterfile_entry!(VsSeekerPokemonRewardsEntry, VsSeekerPokemonRewardsEntryData, vs_seeker_pokemon_rewards: VsSeekerPokemonRewards);

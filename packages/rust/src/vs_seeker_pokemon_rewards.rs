// Generated from Pokémon GO masterfile — group "vsSeekerPokemonRewards".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverrideRange {
    pub max: u64,
    pub min: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride {
    pub range: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverrideRange,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonPokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemon {
    pub pokemon_display: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonPokemonDisplay,
    pub pokemon_id: String,
    pub shiny_probability: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonReward {
    pub identifier: String,
    pub per_competitive_combat_season_max_count: u64,
    pub pokemon: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemon,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemon {
    pub attack_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub defense_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub guaranteed_limited_pokemon_reward: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonReward,
    pub stamina_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub unlocked_at_rank: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonV2 {
    pub pokemon_display: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonPokemonDisplay,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardV2 {
    pub identifier: String,
    pub lifetime_max_count: u64,
    pub pokemon: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonV2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonV2 {
    pub attack_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub defense_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub guaranteed_limited_pokemon_reward: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardV2,
    pub stamina_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub unlocked_at_rank: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMiscAvailablePokemonV3 {
    pub attack_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub defense_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub pokemon: VsSeekerPokemonRewardsMiscAvailablePokemonGuaranteedLimitedPokemonRewardPokemonV2,
    pub stamina_iv_override: VsSeekerPokemonRewardsMiscAvailablePokemonAttackIvOverride,
    pub unlocked_at_rank: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsMisc {
    pub available_pokemon: (VsSeekerPokemonRewardsMiscAvailablePokemon, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerPokemonRewardsRewardTrack {
    pub available_pokemon: (VsSeekerPokemonRewardsMiscAvailablePokemon, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV2, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3, VsSeekerPokemonRewardsMiscAvailablePokemonV3),
    pub reward_track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum VsSeekerPokemonRewards {
    Misc(VsSeekerPokemonRewardsMisc),
    RewardTrack(VsSeekerPokemonRewardsRewardTrack),
}

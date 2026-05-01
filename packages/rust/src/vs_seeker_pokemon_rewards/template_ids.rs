//! Generated from Pokémon GO masterfile — group "vsSeekerPokemonRewards" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum VsSeekerPokemonRewardsTemplateId {
    #[serde(rename = "VS_SEEKER_POKEMON_REWARDS_FREE")]
    VsSeekerPokemonRewardsFree,
    #[serde(rename = "VS_SEEKER_POKEMON_REWARDS_PREMIUM")]
    VsSeekerPokemonRewardsPremium,
}

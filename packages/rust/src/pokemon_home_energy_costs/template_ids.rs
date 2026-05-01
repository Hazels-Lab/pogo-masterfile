//! Generated from Pokémon GO masterfile — group "pokemonHomeEnergyCosts" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonHomeEnergyCostsTemplateId {
    #[serde(rename = "ENERGY_COSTS_POKEMON_CLASS_LEGENDARY")]
    EnergyCostsPokemonClassLegendary,
    #[serde(rename = "ENERGY_COSTS_POKEMON_CLASS_MYTHIC")]
    EnergyCostsPokemonClassMythic,
    #[serde(rename = "ENERGY_COSTS_POKEMON_CLASS_NORMAL")]
    EnergyCostsPokemonClassNormal,
    #[serde(rename = "ENERGY_COSTS_POKEMON_CLASS_ULTRA_BEAST")]
    EnergyCostsPokemonClassUltraBeast,
}

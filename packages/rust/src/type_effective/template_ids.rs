//! Generated from Pokémon GO masterfile — group "typeEffective" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum TypeEffectiveTemplateId {
    #[serde(rename = "POKEMON_TYPE_BUG")]
    PokemonTypeBug,
    #[serde(rename = "POKEMON_TYPE_DARK")]
    PokemonTypeDark,
    #[serde(rename = "POKEMON_TYPE_DRAGON")]
    PokemonTypeDragon,
    #[serde(rename = "POKEMON_TYPE_ELECTRIC")]
    PokemonTypeElectric,
    #[serde(rename = "POKEMON_TYPE_FAIRY")]
    PokemonTypeFairy,
    #[serde(rename = "POKEMON_TYPE_FIGHTING")]
    PokemonTypeFighting,
    #[serde(rename = "POKEMON_TYPE_FIRE")]
    PokemonTypeFire,
    #[serde(rename = "POKEMON_TYPE_FLYING")]
    PokemonTypeFlying,
    #[serde(rename = "POKEMON_TYPE_GHOST")]
    PokemonTypeGhost,
    #[serde(rename = "POKEMON_TYPE_GRASS")]
    PokemonTypeGrass,
    #[serde(rename = "POKEMON_TYPE_GROUND")]
    PokemonTypeGround,
    #[serde(rename = "POKEMON_TYPE_ICE")]
    PokemonTypeIce,
    #[serde(rename = "POKEMON_TYPE_NORMAL")]
    PokemonTypeNormal,
    #[serde(rename = "POKEMON_TYPE_POISON")]
    PokemonTypePoison,
    #[serde(rename = "POKEMON_TYPE_PSYCHIC")]
    PokemonTypePsychic,
    #[serde(rename = "POKEMON_TYPE_ROCK")]
    PokemonTypeRock,
    #[serde(rename = "POKEMON_TYPE_STEEL")]
    PokemonTypeSteel,
    #[serde(rename = "POKEMON_TYPE_WATER")]
    PokemonTypeWater,
}

//! Generated from Pokémon GO masterfile — group "combatType" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum CombatTypeTemplateId {
    #[serde(rename = "COMBAT_POKEMON_TYPE_BUG")]
    CombatPokemonTypeBug,
    #[serde(rename = "COMBAT_POKEMON_TYPE_DARK")]
    CombatPokemonTypeDark,
    #[serde(rename = "COMBAT_POKEMON_TYPE_DRAGON")]
    CombatPokemonTypeDragon,
    #[serde(rename = "COMBAT_POKEMON_TYPE_ELECTRIC")]
    CombatPokemonTypeElectric,
    #[serde(rename = "COMBAT_POKEMON_TYPE_FAIRY")]
    CombatPokemonTypeFairy,
    #[serde(rename = "COMBAT_POKEMON_TYPE_FIGHTING")]
    CombatPokemonTypeFighting,
    #[serde(rename = "COMBAT_POKEMON_TYPE_FIRE")]
    CombatPokemonTypeFire,
    #[serde(rename = "COMBAT_POKEMON_TYPE_FLYING")]
    CombatPokemonTypeFlying,
    #[serde(rename = "COMBAT_POKEMON_TYPE_GHOST")]
    CombatPokemonTypeGhost,
    #[serde(rename = "COMBAT_POKEMON_TYPE_GRASS")]
    CombatPokemonTypeGrass,
    #[serde(rename = "COMBAT_POKEMON_TYPE_GROUND")]
    CombatPokemonTypeGround,
    #[serde(rename = "COMBAT_POKEMON_TYPE_ICE")]
    CombatPokemonTypeIce,
    #[serde(rename = "COMBAT_POKEMON_TYPE_NORMAL")]
    CombatPokemonTypeNormal,
    #[serde(rename = "COMBAT_POKEMON_TYPE_POISON")]
    CombatPokemonTypePoison,
    #[serde(rename = "COMBAT_POKEMON_TYPE_PSYCHIC")]
    CombatPokemonTypePsychic,
    #[serde(rename = "COMBAT_POKEMON_TYPE_ROCK")]
    CombatPokemonTypeRock,
    #[serde(rename = "COMBAT_POKEMON_TYPE_STEEL")]
    CombatPokemonTypeSteel,
    #[serde(rename = "COMBAT_POKEMON_TYPE_WATER")]
    CombatPokemonTypeWater,
}

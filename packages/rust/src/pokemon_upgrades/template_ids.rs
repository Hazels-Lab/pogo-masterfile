//! Generated from Pokémon GO masterfile — group "pokemonUpgrades" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonUpgradesTemplateId {
    #[serde(rename = "POKEMON_UPGRADE_OVERRIDE_SETTINGS_V0890_POKEMON_ETERNATUS")]
    PokemonUpgradeOverrideSettingsV0890PokemonEternatus,
    #[serde(rename = "POKEMON_UPGRADE_SETTINGS")]
    PokemonUpgradeSettings,
}

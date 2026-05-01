//! Generated from Pokémon GO masterfile — group "pokemonScaleSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonScaleSettingsTemplateId {
    #[serde(rename = "POKEMON_SCALE_SETTINGS_BATTLE_POKEMON_SCALE")]
    PokemonScaleSettingsBattlePokemonScale,
    #[serde(rename = "POKEMON_SCALE_SETTINGS_GUI_SCALE")]
    PokemonScaleSettingsGuiScale,
    #[serde(rename = "POKEMON_SCALE_SETTINGS_GYM_TOPPER_SCALE")]
    PokemonScaleSettingsGymTopperScale,
    #[serde(rename = "POKEMON_SCALE_SETTINGS_MAP_POKEMON_SCALE")]
    PokemonScaleSettingsMapPokemonScale,
    #[serde(rename = "POKEMON_SCALE_SETTINGS_NATURAL_SCALE")]
    PokemonScaleSettingsNaturalScale,
    #[serde(rename = "POKEMON_SCALE_SETTINGS_RAID_BOSS_SCALE")]
    PokemonScaleSettingsRaidBossScale,
}

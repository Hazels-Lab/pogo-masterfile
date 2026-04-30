// Generated from Pokémon GO masterfile — group "pokemonUpgrades".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonUpgrades {
    pub allowed_levels_above_player: u64,
    pub candy_cost: Vec<u64>,
    pub default_cp_boost_additional_level: u64,
    pub max_normal_upgrade_level: u64,
    pub purified_candy_multiplier: f64,
    pub purified_stardust_multiplier: f64,
    pub shadow_candy_multiplier: f64,
    pub shadow_stardust_multiplier: f64,
    pub stardust_cost: Vec<u64>,
    pub upgrades_per_level: u64,
    pub xl_candy_cost: [u64; 10],
    pub xl_candy_min_player_level: u64,
    pub xl_candy_min_pokemon_level: u64,
}

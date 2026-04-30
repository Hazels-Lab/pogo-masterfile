// Generated from Pokémon GO masterfile — group "pokemonScaleSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonScaleMode {
    pub max_height: f64,
    pub min_height: f64,
    pub pokemon_scale_mode: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub max_height: f64,
    pub min_height: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PokemonScaleSettings {
    PokemonScaleMode(PokemonScaleMode),
    Misc(Misc),
}

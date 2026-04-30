// Generated from Pokémon GO masterfile — group "pokemonFamily".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFamilyMisc {
    pub candy_per_xl_candy: u64,
    pub family_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFamilyMegaEvolvablePokemonId {
    pub candy_per_xl_candy: u64,
    pub family_id: String,
    pub mega_evolvable_pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFamilyMegaEvolvablePokemonIds {
    pub candy_per_xl_candy: u64,
    pub family_id: String,
    pub mega_evolvable_pokemon_ids: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PokemonFamily {
    Misc(PokemonFamilyMisc),
    MegaEvolvablePokemonId(PokemonFamilyMegaEvolvablePokemonId),
    MegaEvolvablePokemonIds(PokemonFamilyMegaEvolvablePokemonIds),
}

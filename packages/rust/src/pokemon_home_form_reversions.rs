// Generated from Pokémon GO masterfile — group "pokemonHomeFormReversions".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormMapping {
    pub reverted_form: String,
    pub reverted_form_string: String,
    pub unauthorized_forms: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonHomeFormReversions {
    pub form_mapping: Vec<FormMapping>,
    pub pokemon_id: String,
}

crate::masterfile_entry!(PokemonHomeFormReversionsEntry, PokemonHomeFormReversionsEntryData, pokemon_home_form_reversions: PokemonHomeFormReversions);

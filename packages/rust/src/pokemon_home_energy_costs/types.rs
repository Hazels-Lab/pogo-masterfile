use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonClass {
    pub base: u64,
    pub cp1001_to2000: u64,
    pub cp2001_to_inf: u64,
    pub pokemon_class: String,
    pub shiny: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub base: u64,
    pub cp1001_to2000: u64,
    pub cp2001_to_inf: u64,
    pub shiny: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PokemonHomeEnergyCosts {
    PokemonClass(PokemonClass),
    Misc(Misc),
}

crate::masterfile_entry!(PokemonHomeEnergyCostsEntry, PokemonHomeEnergyCostsEntryData, pokemon_home_energy_costs: PokemonHomeEnergyCosts);

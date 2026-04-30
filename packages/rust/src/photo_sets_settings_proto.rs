// Generated from Pokémon GO masterfile — group "photoSetsSettingsProto".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PhotoSetsSettingsProtoPokemon {
    pub form: Option<String>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PhotoSetsSettingsProto {
    pub display_order: u64,
    pub frame_color: String,
    pub minimum_pokemon: u64,
    pub name_key: String,
    pub pokemon: Vec<PhotoSetsSettingsProtoPokemon>,
}

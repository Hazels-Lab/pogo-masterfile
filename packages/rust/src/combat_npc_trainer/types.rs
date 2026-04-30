use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvailablePokemon {
    pub pokemon_display: Option<PokemonDisplay>,
    pub pokemon_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Avatar {
    pub avatar: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatNpcTrainer {
    pub available_pokemon: [AvailablePokemon; 3],
    pub avatar: Avatar,
    pub backdrop_image_bundle: String,
    pub combat_league_template_id: String,
    pub combat_personality_id: String,
    pub icon_url: String,
    pub trainer_name: String,
    pub trainer_quote: String,
    pub trainer_title: String,
}

crate::masterfile_entry!(CombatNpcTrainerEntry, CombatNpcTrainerEntryData, combat_npc_trainer: CombatNpcTrainer);

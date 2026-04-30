// Generated from Pokémon GO masterfile — group "combatNpcTrainer".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatNpcTrainerAvailablePokemonPokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatNpcTrainerAvailablePokemon {
    pub pokemon_display: Option<CombatNpcTrainerAvailablePokemonPokemonDisplay>,
    pub pokemon_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatNpcTrainerAvatar {
    pub avatar: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatNpcTrainer {
    pub available_pokemon: [CombatNpcTrainerAvailablePokemon; 3],
    pub avatar: CombatNpcTrainerAvatar,
    pub backdrop_image_bundle: String,
    pub combat_league_template_id: String,
    pub combat_personality_id: String,
    pub icon_url: String,
    pub trainer_name: String,
    pub trainer_quote: String,
    pub trainer_title: String,
}

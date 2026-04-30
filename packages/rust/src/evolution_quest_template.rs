//! Generated from Pokémon GO masterfile — group "evolutionQuestTemplate".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Display {
    pub description: String,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithCombatType {
    pub combat_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithOpponentPokemonBattleStatus {
    pub opponent_pokemon_type: Vec<String>,
    pub require_defeat: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithPokemonType {
    pub pokemon_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithThrowType {
    pub throw_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Condition {
    pub r#type: String,
    pub with_combat_type: Option<WithCombatType>,
    pub with_opponent_pokemon_battle_status: Option<WithOpponentPokemonBattleStatus>,
    pub with_pokemon_type: Option<WithPokemonType>,
    pub with_throw_type: Option<WithThrowType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Goals {
    pub condition: Option<Vec<Condition>>,
    pub target: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplate {
    pub context: String,
    pub display: Display,
    pub goals: [Goals; 1],
    pub quest_template_id: String,
    pub quest_type: String,
}

crate::masterfile_entry!(EvolutionQuestTemplateEntry, EvolutionQuestTemplateEntryData, evolution_quest_template: EvolutionQuestTemplate);

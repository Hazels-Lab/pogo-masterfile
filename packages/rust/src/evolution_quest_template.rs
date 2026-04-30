// Generated from Pokémon GO masterfile — group "evolutionQuestTemplate".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateDisplay {
    pub description: String,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoalsConditionWithCombatType {
    pub combat_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoalsConditionWithOpponentPokemonBattleStatus {
    pub opponent_pokemon_type: Vec<String>,
    pub require_defeat: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoalsConditionWithPokemonType {
    pub pokemon_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoalsConditionWithThrowType {
    pub throw_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoalsCondition {
    pub r#type: String,
    pub with_combat_type: Option<EvolutionQuestTemplateGoalsConditionWithCombatType>,
    pub with_opponent_pokemon_battle_status: Option<EvolutionQuestTemplateGoalsConditionWithOpponentPokemonBattleStatus>,
    pub with_pokemon_type: Option<EvolutionQuestTemplateGoalsConditionWithPokemonType>,
    pub with_throw_type: Option<EvolutionQuestTemplateGoalsConditionWithThrowType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplateGoals {
    pub condition: Option<Vec<EvolutionQuestTemplateGoalsCondition>>,
    pub target: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionQuestTemplate {
    pub context: String,
    pub display: EvolutionQuestTemplateDisplay,
    pub goals: [EvolutionQuestTemplateGoals; 1],
    pub quest_template_id: String,
    pub quest_type: String,
}

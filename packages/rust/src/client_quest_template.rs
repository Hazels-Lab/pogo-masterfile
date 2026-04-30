// Generated from Pokémon GO masterfile — group "clientQuestTemplate".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithBadgeType {
    pub badge_rank: u64,
    pub badge_types_to_exclude: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithCombatType {
    pub combat_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithDistance {
    pub distance_km: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithInvasionCharacter {
    pub category: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithPokemonLevel {
    pub max_level: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithQuestContext {
    pub context: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalConditionWithThrowType {
    pub throw_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoalCondition {
    pub type: String,
    pub with_badge_type: Option<ClientQuestTemplateQuestGoalConditionWithBadgeType>,
    pub with_combat_type: Option<ClientQuestTemplateQuestGoalConditionWithCombatType>,
    pub with_distance: Option<ClientQuestTemplateQuestGoalConditionWithDistance>,
    pub with_invasion_character: Option<ClientQuestTemplateQuestGoalConditionWithInvasionCharacter>,
    pub with_pokemon_level: Option<ClientQuestTemplateQuestGoalConditionWithPokemonLevel>,
    pub with_quest_context: Option<ClientQuestTemplateQuestGoalConditionWithQuestContext>,
    pub with_throw_type: Option<ClientQuestTemplateQuestGoalConditionWithThrowType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestGoal {
    pub condition: Option<Vec<ClientQuestTemplateQuestGoalCondition>>,
    pub target: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestMultiPartSubQuests {
    pub quest_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestMultiPart {
    pub sub_quests: [ClientQuestTemplateQuestMultiPartSubQuests; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestQuestRewardsItem {
    pub amount: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestQuestRewardsPokemonEncounterPokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestQuestRewardsPokemonEncounter {
    pub pokemon_display: ClientQuestTemplateQuestQuestRewardsPokemonEncounterPokemonDisplay,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestQuestRewards {
    pub exp: Option<u64>,
    pub friendship_points: Option<u64>,
    pub item: Option<ClientQuestTemplateQuestQuestRewardsItem>,
    pub level_cap: Option<u64>,
    pub pokemon_encounter: Option<ClientQuestTemplateQuestQuestRewardsPokemonEncounter>,
    pub stardust: Option<u64>,
    pub type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuest {
    pub difficulty: Option<String>,
    pub goal: Option<ClientQuestTemplateQuestGoal>,
    pub multi_part: Option<ClientQuestTemplateQuestMultiPart>,
    pub quest_context: String,
    pub quest_id: String,
    pub quest_rewards: Vec<ClientQuestTemplateQuestQuestRewards>,
    pub quest_type: String,
    pub quest_update_toast_progress_percentage_threshold: Option<f64>,
    pub template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateQuestDisplay {
    pub description: Option<String>,
    pub subquest_displays: Option<[ClientQuestTemplateQuestMultiPartSubQuests; 4]>,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplate {
    pub quest: ClientQuestTemplateQuest,
    pub quest_display: ClientQuestTemplateQuestDisplay,
}

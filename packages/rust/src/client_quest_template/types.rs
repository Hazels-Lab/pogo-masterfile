use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithBadgeType {
    pub badge_rank: u64,
    pub badge_types_to_exclude: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithCombatType {
    pub combat_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithDistance {
    pub distance_km: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithInvasionCharacter {
    pub category: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithPokemonLevel {
    pub max_level: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithQuestContext {
    pub context: String,
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
    pub with_badge_type: Option<WithBadgeType>,
    pub with_combat_type: Option<WithCombatType>,
    pub with_distance: Option<WithDistance>,
    pub with_invasion_character: Option<WithInvasionCharacter>,
    pub with_pokemon_level: Option<WithPokemonLevel>,
    pub with_quest_context: Option<WithQuestContext>,
    pub with_throw_type: Option<WithThrowType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Goal {
    pub condition: Option<Vec<Condition>>,
    pub target: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SubQuests {
    pub quest_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiPart {
    pub sub_quests: [SubQuests; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub amount: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonDisplay {
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonEncounter {
    pub pokemon_display: PokemonDisplay,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuestRewards {
    pub exp: Option<u64>,
    pub friendship_points: Option<u64>,
    pub item: Option<Item>,
    pub level_cap: Option<u64>,
    pub pokemon_encounter: Option<PokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Quest {
    pub difficulty: Option<String>,
    pub goal: Option<Goal>,
    pub multi_part: Option<MultiPart>,
    pub quest_context: String,
    pub quest_id: String,
    pub quest_rewards: Vec<QuestRewards>,
    pub quest_type: String,
    pub quest_update_toast_progress_percentage_threshold: Option<f64>,
    pub template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuestDisplay {
    pub description: Option<String>,
    pub subquest_displays: Option<[SubQuests; 4]>,
    pub title: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplate {
    pub quest: Quest,
    pub quest_display: QuestDisplay,
}

crate::masterfile_entry!(ClientQuestTemplateEntry, ClientQuestTemplateEntryData, client_quest_template: ClientQuestTemplate);

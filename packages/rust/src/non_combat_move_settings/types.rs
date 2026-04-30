use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Attributes {
    pub attack_multiplier: Option<f64>,
    pub combat_types: [String; 1],
    pub defense_multiplier: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AttributesV2 {
    pub attack_multiplier: Option<f64>,
    pub combat_types: [String; 2],
    pub defense_multiplier: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AttackDefenseBonus {
    pub attributes: (Attributes, AttributesV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DayNightBonus {
    pub incense_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxMoveBonus {
    pub excluded_pokedex_ids: [String; 2],
    pub num_all_max_move_level_increase: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SlowFreezeBonus {
    pub catch_circle_outer_time_scale_override: f64,
    pub catch_circle_speed_change_threshold: f64,
    pub catch_circle_time_scale_override: f64,
    pub catch_rate_increase_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SpaceBonus {
    pub encounter_range_meters: f64,
    pub pokemon_visible_range_meters: f64,
    pub server_allowable_encounter_range_meters: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TimeBonus {
    pub affected_items: [String; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BonusEffect {
    pub attack_defense_bonus: Option<AttackDefenseBonus>,
    pub day_night_bonus: Option<DayNightBonus>,
    pub max_move_bonus: Option<MaxMoveBonus>,
    pub slow_freeze_bonus: Option<SlowFreezeBonus>,
    pub space_bonus: Option<SpaceBonus>,
    pub time_bonus: Option<TimeBonus>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Cost {
    pub candy_cost: u64,
    pub stardust_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettings {
    pub bonus_effect: BonusEffect,
    pub bonus_type: String,
    pub cost: Cost,
    pub duration_ms: String,
    pub enable_multi_use: bool,
    pub enable_non_combat_move: bool,
    pub extra_duration_ms: String,
    pub unique_id: String,
}

crate::masterfile_entry!(NonCombatMoveSettingsEntry, NonCombatMoveSettingsEntryData, non_combat_move_settings: NonCombatMoveSettings);

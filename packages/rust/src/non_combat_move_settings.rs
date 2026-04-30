// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectAttackDefenseBonusAttributes {
    pub attack_multiplier: Option<f64>,
    pub combat_types: [String; 1],
    pub defense_multiplier: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectAttackDefenseBonusAttributesV2 {
    pub attack_multiplier: Option<f64>,
    pub combat_types: [String; 2],
    pub defense_multiplier: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectAttackDefenseBonus {
    pub attributes: (NonCombatMoveSettingsBonusEffectAttackDefenseBonusAttributes, NonCombatMoveSettingsBonusEffectAttackDefenseBonusAttributesV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectDayNightBonus {
    pub incense_item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectMaxMoveBonus {
    pub excluded_pokedex_ids: [String; 2],
    pub num_all_max_move_level_increase: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectSlowFreezeBonus {
    pub catch_circle_outer_time_scale_override: f64,
    pub catch_circle_speed_change_threshold: f64,
    pub catch_circle_time_scale_override: f64,
    pub catch_rate_increase_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectSpaceBonus {
    pub encounter_range_meters: u64,
    pub pokemon_visible_range_meters: u64,
    pub server_allowable_encounter_range_meters: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffectTimeBonus {
    pub affected_items: [String; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsBonusEffect {
    pub attack_defense_bonus: Option<NonCombatMoveSettingsBonusEffectAttackDefenseBonus>,
    pub day_night_bonus: Option<NonCombatMoveSettingsBonusEffectDayNightBonus>,
    pub max_move_bonus: Option<NonCombatMoveSettingsBonusEffectMaxMoveBonus>,
    pub slow_freeze_bonus: Option<NonCombatMoveSettingsBonusEffectSlowFreezeBonus>,
    pub space_bonus: Option<NonCombatMoveSettingsBonusEffectSpaceBonus>,
    pub time_bonus: Option<NonCombatMoveSettingsBonusEffectTimeBonus>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettingsCost {
    pub candy_cost: u64,
    pub stardust_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NonCombatMoveSettings {
    pub bonus_effect: NonCombatMoveSettingsBonusEffect,
    pub bonus_type: String,
    pub cost: NonCombatMoveSettingsCost,
    pub duration_ms: String,
    pub enable_multi_use: bool,
    pub enable_non_combat_move: bool,
    pub extra_duration_ms: String,
    pub unique_id: String,
}

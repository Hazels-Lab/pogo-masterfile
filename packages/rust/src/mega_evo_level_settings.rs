//! Generated from Pokémon GO masterfile — group "megaEvoLevelSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Cooldown {
    pub bypass_cost_initial: u64,
    pub bypass_cost_rounding_value: u64,
    pub duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Effects {
    pub different_type_attack_boost: f64,
    pub same_type_attack_boost: f64,
    pub same_type_extra_catch_candy: u64,
    pub same_type_extra_catch_candy_xl_chance: Option<f64>,
    pub same_type_extra_catch_xp: Option<u64>,
    pub self_cp_boost_additional_level: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Progression {
    pub points_limit_per_period: u64,
    pub points_per_mega_evo_action: u64,
    pub points_required: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MegaEvoLevelSettings {
    pub cooldown: Cooldown,
    pub effects: Effects,
    pub ftue_expiration_timestamp: Option<String>,
    pub level: Option<u64>,
    pub mega_energy_cost_to_unlock: Option<u64>,
    pub pokemon_id: Option<String>,
    pub progression: Progression,
}

crate::masterfile_entry!(MegaEvoLevelSettingsEntry, MegaEvoLevelSettingsEntryData, mega_evo_level_settings: MegaEvoLevelSettings);

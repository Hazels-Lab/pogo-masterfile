// Generated from Pokémon GO masterfile — group "moveSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MoveSettings {
    pub accuracy_chance: u64,
    pub animation_id: u64,
    pub critical_chance: Option<f64>,
    pub damage_window_end_ms: u64,
    pub damage_window_start_ms: Option<u64>,
    pub duration_ms: u64,
    pub energy_delta: Option<i64>,
    pub heal_scalar: Option<f64>,
    pub is_locked: Option<bool>,
    pub movement_id: String,
    pub ob_move_settings_number18: Option<[u64; 4]>,
    pub pokemon_type: String,
    pub power: Option<u64>,
    pub stamina_loss_scalar: Option<f64>,
    pub trainer_level_max: Option<u64>,
    pub trainer_level_min: Option<u64>,
    pub vfx_name: String,
}

crate::masterfile_entry!(MoveSettingsEntry, MoveSettingsEntryData, move_settings: MoveSettings);

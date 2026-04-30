// Generated from Pokémon GO masterfile — group "combatMove".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Buffs {
    pub attacker_attack_stat_stage_change: Option<i64>,
    pub attacker_defense_stat_stage_change: Option<i64>,
    pub buff_activation_chance: Option<f64>,
    pub target_attack_stat_stage_change: Option<i64>,
    pub target_defense_stat_stage_change: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatMove {
    pub buffs: Option<Buffs>,
    pub duration_turns: Option<u64>,
    pub energy_delta: Option<i64>,
    pub power: Option<u64>,
    pub r#type: String,
    pub unique_id: String,
    pub vfx_name: String,
}

crate::masterfile_entry!(CombatMoveEntry, CombatMoveEntryData, combat_move: CombatMove);

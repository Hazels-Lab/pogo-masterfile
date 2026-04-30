// Generated from Pokémon GO masterfile — group "combatNpcPersonality".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub offensive_maximum_score: f64,
    pub offensive_minimum_score: f64,
    pub personality_name: String,
    pub special_chance: f64,
    pub super_effective_chance: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefensiveMaximumScoreDefensiveMinimumScore {
    pub defensive_maximum_score: u64,
    pub defensive_minimum_score: u64,
    pub offensive_maximum_score: u64,
    pub offensive_minimum_score: u64,
    pub personality_name: String,
    pub special_chance: u64,
    pub super_effective_chance: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CombatNpcPersonality {
    Misc(Misc),
    DefensiveMaximumScoreDefensiveMinimumScore(DefensiveMaximumScoreDefensiveMinimumScore),
}

crate::masterfile_entry!(CombatNpcPersonalityEntry, CombatNpcPersonalityEntryData, combat_npc_personality: CombatNpcPersonality);

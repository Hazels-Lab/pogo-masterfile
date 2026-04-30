// Generated from Pokémon GO masterfile — group "combatLeague".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonBanListPokemon {
    pub forms: Option<Vec<String>>,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonBanList {
    pub pokemon: Vec<CombatLeaguePokemonConditionPokemonBanListPokemon>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonCaughtTimestamp {
    pub after_timestamp: String,
    pub before_timestamp: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonLevelRange {
    pub max_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonWhiteListPokemon {
    pub form: Option<String>,
    pub forms: Option<Vec<String>>,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionPokemonWhiteList {
    pub pokemon: Vec<CombatLeaguePokemonConditionPokemonWhiteListPokemon>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionWithPokemonCpLimit {
    pub max_cp: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonConditionWithPokemonType {
    pub pokemon_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeaguePokemonCondition {
    pub pokemon_ban_list: Option<CombatLeaguePokemonConditionPokemonBanList>,
    pub pokemon_caught_timestamp: Option<CombatLeaguePokemonConditionPokemonCaughtTimestamp>,
    pub pokemon_level_range: Option<CombatLeaguePokemonConditionPokemonLevelRange>,
    pub pokemon_white_list: Option<CombatLeaguePokemonConditionPokemonWhiteList>,
    pub r#type: String,
    pub with_pokemon_cp_limit: Option<CombatLeaguePokemonConditionWithPokemonCpLimit>,
    pub with_pokemon_type: Option<CombatLeaguePokemonConditionWithPokemonType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeagueUnlockConditionWithPokemonCpLimit {
    pub max_cp: u64,
    pub min_cp: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeagueUnlockCondition {
    pub min_pokemon_count: u64,
    pub r#type: String,
    pub with_pokemon_cp_limit: Option<CombatLeagueUnlockConditionWithPokemonCpLimit>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeague {
    pub allow_temp_evos: Option<bool>,
    pub badge_type: String,
    pub banned_pokemon: Option<Vec<String>>,
    pub battle_party_combat_league_template_id: Option<String>,
    pub enabled: bool,
    pub icon_url: String,
    pub league_type: String,
    pub pokemon_condition: Vec<CombatLeaguePokemonCondition>,
    pub pokemon_count: u64,
    pub title: String,
    pub unlock_condition: Option<[CombatLeagueUnlockCondition; 1]>,
}

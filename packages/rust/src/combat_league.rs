//! Generated from Pokémon GO masterfile — group "combatLeague".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Pokemon {
    pub forms: Option<Vec<String>>,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonBanList {
    pub pokemon: Vec<Pokemon>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonCaughtTimestamp {
    pub after_timestamp: String,
    pub before_timestamp: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonLevelRange {
    pub max_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonV2 {
    pub form: Option<String>,
    pub forms: Option<Vec<String>>,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWhiteList {
    pub pokemon: Vec<PokemonV2>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithPokemonCpLimit {
    pub max_cp: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithPokemonType {
    pub pokemon_type: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonCondition {
    pub pokemon_ban_list: Option<PokemonBanList>,
    pub pokemon_caught_timestamp: Option<PokemonCaughtTimestamp>,
    pub pokemon_level_range: Option<PokemonLevelRange>,
    pub pokemon_white_list: Option<PokemonWhiteList>,
    pub r#type: String,
    pub with_pokemon_cp_limit: Option<WithPokemonCpLimit>,
    pub with_pokemon_type: Option<WithPokemonType>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WithPokemonCpLimitV2 {
    pub max_cp: u64,
    pub min_cp: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnlockCondition {
    pub min_pokemon_count: u64,
    pub r#type: String,
    pub with_pokemon_cp_limit: Option<WithPokemonCpLimitV2>,
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
    pub pokemon_condition: Vec<PokemonCondition>,
    pub pokemon_count: u64,
    pub title: String,
    pub unlock_condition: Option<[UnlockCondition; 1]>,
}

crate::masterfile_entry!(CombatLeagueEntry, CombatLeagueEntryData, combat_league: CombatLeague);

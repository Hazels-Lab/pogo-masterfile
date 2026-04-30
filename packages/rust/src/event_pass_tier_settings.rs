//! Generated from Pokémon GO masterfile — group "eventPassTierSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Candy {
    pub amount: u64,
    pub pokemon_id: String,
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
    pub bread_mode_enum: Option<String>,
    pub form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatsLimitsOverride {
    pub max_pokemon_level: u64,
    pub min_pokemon_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonEncounter {
    pub is_featured_pokemon: bool,
    pub pokemon_display: Option<PokemonDisplay>,
    pub pokemon_id: String,
    pub stats_limits_override: Option<StatsLimitsOverride>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Rewards {
    pub candy: Option<Candy>,
    pub exp: Option<u64>,
    pub item: Option<Item>,
    pub pokemon_encounter: Option<PokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinPointsRequiredRewards {
    pub min_points_required: u64,
    pub rank: u64,
    pub rewards: Vec<Rewards>,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlayerAttribute {
    pub duration_mins: u64,
    pub key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonEncounterV2 {
    pub is_featured_pokemon: bool,
    pub pokemon_display: Option<PokemonDisplay>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RewardsV3 {
    pub candy: Option<Candy>,
    pub exp: Option<u64>,
    pub item: Option<Item>,
    pub player_attribute: Option<PlayerAttribute>,
    pub pokemon_encounter: Option<PokemonEncounterV2>,
    pub stardust: Option<u64>,
    pub r#type: String,
    pub xl_candy: Option<Candy>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RewardsV2 {
    pub rank: u64,
    pub rewards: Vec<RewardsV3>,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BonusBoxes {
    pub icon_type: String,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ActiveBonusDisplaySettings {
    pub bonus_boxes: Vec<BonusBoxes>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BonusSettings {
    pub bonus_boxes: Vec<BonusBoxes>,
    pub event_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RewardsV4 {
    pub player_attribute: PlayerAttribute,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ActiveBonusDisplaySettingsPlus3 {
    pub active_bonus_display_settings: ActiveBonusDisplaySettings,
    pub bonus_settings: BonusSettings,
    pub min_points_required: u64,
    pub rank: u64,
    pub rewards: Vec<RewardsV4>,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub rank: u64,
    pub track: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EventPassTierSettings {
    MinPointsRequiredRewards(MinPointsRequiredRewards),
    Rewards(RewardsV2),
    ActiveBonusDisplaySettingsPlus3(ActiveBonusDisplaySettingsPlus3),
    Misc(Misc),
}

crate::masterfile_entry!(EventPassTierSettingsEntry, EventPassTierSettingsEntryData, event_pass_tier_settings: EventPassTierSettings);

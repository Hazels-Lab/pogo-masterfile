use serde::{Deserialize, Serialize};

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
    pub event_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BonusSettings {
    pub bonus_boxes: Vec<BonusBoxes>,
    pub event_name: String,
}

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
pub struct PlayerAttribute {
    pub duration_mins: u64,
    pub key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCard {
    pub location_card: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonDisplay {
    pub bread_mode_enum: Option<String>,
    pub costume: Option<String>,
    pub form: String,
    pub location_card: Option<LocationCard>,
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
    pub player_attribute: Option<PlayerAttribute>,
    pub pokecoin: Option<u64>,
    pub pokemon_encounter: Option<PokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
    pub xl_candy: Option<Candy>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettings {
    pub active_bonus_display_settings: Option<ActiveBonusDisplaySettings>,
    pub bonus_settings: Option<BonusSettings>,
    pub min_points_required: Option<u64>,
    pub rank: u64,
    pub rewards: Option<Vec<Rewards>>,
    pub track: String,
}

crate::masterfile_entry!(EventPassTierSettingsEntry, EventPassTierSettingsEntryData, event_pass_tier_settings: EventPassTierSettings);

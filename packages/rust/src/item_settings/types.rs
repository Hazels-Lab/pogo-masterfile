use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpiredIncubatorReplacement {
    pub incubator_replacement: String,
    pub uses_count_override: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EggIncubator {
    pub distance_multiplier: f64,
    pub expired_incubator_replacement: Option<ExpiredIncubatorReplacement>,
    pub incubator_type: String,
    pub max_hatch_summary_entries: Option<u64>,
    pub use_bonus_incubator_attributes: Option<bool>,
    pub uses: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassPoint {
    pub event_pass_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Food {
    pub berry_multiplier: Option<f64>,
    pub growth_percent: Option<f64>,
    pub item_effect: Option<Vec<String>>,
    pub item_effect_percent: Option<Vec<f64>>,
    pub map_duration_ms: Option<String>,
    pub num_buddy_affection_points: Option<u64>,
    pub num_buddy_hunger_points: Option<u64>,
    pub remote_berry_multiplier: Option<f64>,
    pub time_full_duration_ms: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum GiftItemValue {
    Uint(u64),
    String(String),
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
    pub amount: Option<u64>,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarItemTemplate {
    pub display_template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonDisplay {
    pub form: String,
    pub shiny: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonEncounter {
    pub pokemon_display: Option<PokemonDisplay>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IconRewards {
    pub candy: Option<Candy>,
    pub exp: Option<u64>,
    pub item: Option<Item>,
    pub neutral_avatar_item_template: Option<NeutralAvatarItemTemplate>,
    pub pokemon_encounter: Option<PokemonEncounter>,
    pub stardust: Option<u64>,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GlobalEventTicket {
    pub background_image_url: Option<String>,
    pub client_event_end_time_utc_ms: String,
    pub client_event_start_time_utc_ms: String,
    pub details_link_key: Option<String>,
    pub display_v2_enabled: Option<bool>,
    pub event_badge: Option<String>,
    pub event_banner_url: Option<String>,
    pub event_datetime_range_key: Option<String>,
    pub event_end_time: String,
    pub event_start_time: String,
    pub giftable: Option<bool>,
    pub gift_item: Option<GiftItemValue>,
    pub grant_badge_before_event_start_ms: Option<String>,
    pub icon_rewards: Option<Vec<IconRewards>>,
    pub item_bag_description_key: String,
    pub text_rewards_key: Option<String>,
    pub ticket_item: Option<String>,
    pub title_image_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Incense {
    pub incense_lifetime_seconds: u64,
    pub spawn_table_probability: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentTicket {
    pub ignore_full_inventory: Option<bool>,
    pub upgraded_item: Option<String>,
    pub upgrade_requirement_count: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InventoryUpgrade {
    pub additional_storage: u64,
    pub upgrade_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Potion {
    pub sta_amount: Option<u64>,
    pub sta_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReplenishMp {
    pub mp_amount: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Revive {
    pub sta_percent: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StardustBoost {
    pub boost_duration_ms: u64,
    pub stardust_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatIncrease {
    pub stats_to_increase_limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlayerActivity {
    pub limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TimePeriodCounters {
    pub player_activity: PlayerActivity,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct XpBoost {
    pub boost_duration_ms: u64,
    pub xp_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettings {
    pub category: String,
    pub description_override: Option<String>,
    pub drop_trainer_level: Option<u64>,
    pub egg_incubator: Option<EggIncubator>,
    pub event_pass_point: Option<EventPassPoint>,
    pub food: Option<Food>,
    pub global_event_ticket: Option<GlobalEventTicket>,
    pub hide_item_in_inventory: Option<bool>,
    pub ignore_inventory_space: Option<bool>,
    pub incense: Option<Incense>,
    pub incident_ticket: Option<IncidentTicket>,
    pub inventory_upgrade: Option<InventoryUpgrade>,
    pub item_cap: Option<u64>,
    pub item_id: GiftItemValue,
    pub item_type: String,
    pub name_override: Option<String>,
    pub potion: Option<Potion>,
    pub replenish_mp: Option<ReplenishMp>,
    pub revive: Option<Revive>,
    pub stardust_boost: Option<StardustBoost>,
    pub stat_increase: Option<StatIncrease>,
    pub time_period_counters: Option<TimePeriodCounters>,
    pub xp_boost: Option<XpBoost>,
}

crate::masterfile_entry!(ItemSettingsEntry, ItemSettingsEntryData, item_settings: ItemSettings);

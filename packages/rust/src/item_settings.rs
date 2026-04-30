// Generated from Pokémon GO masterfile — group "itemSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsEggIncubatorExpiredIncubatorReplacement {
    pub incubator_replacement: String,
    pub uses_count_override: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsEggIncubator {
    pub distance_multiplier: f64,
    pub expired_incubator_replacement: Option<ItemSettingsEggIncubatorExpiredIncubatorReplacement>,
    pub incubator_type: String,
    pub max_hatch_summary_entries: Option<u64>,
    pub use_bonus_incubator_attributes: Option<bool>,
    pub uses: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsEventPassPoint {
    pub event_pass_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsFood {
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
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewardsCandy {
    pub amount: u64,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewardsItem {
    pub amount: Option<u64>,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewardsNeutralAvatarItemTemplate {
    pub display_template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewardsPokemonEncounterPokemonDisplay {
    pub form: String,
    pub shiny: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewardsPokemonEncounter {
    pub pokemon_display: Option<ItemSettingsGlobalEventTicketIconRewardsPokemonEncounterPokemonDisplay>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicketIconRewards {
    pub candy: Option<ItemSettingsGlobalEventTicketIconRewardsCandy>,
    pub exp: Option<u64>,
    pub item: Option<ItemSettingsGlobalEventTicketIconRewardsItem>,
    pub neutral_avatar_item_template: Option<ItemSettingsGlobalEventTicketIconRewardsNeutralAvatarItemTemplate>,
    pub pokemon_encounter: Option<ItemSettingsGlobalEventTicketIconRewardsPokemonEncounter>,
    pub stardust: Option<u64>,
    pub type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsGlobalEventTicket {
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
    pub gift_item: Option<String>,
    pub grant_badge_before_event_start_ms: Option<String>,
    pub icon_rewards: Option<Vec<ItemSettingsGlobalEventTicketIconRewards>>,
    pub item_bag_description_key: String,
    pub text_rewards_key: Option<String>,
    pub ticket_item: Option<String>,
    pub title_image_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsIncense {
    pub incense_lifetime_seconds: u64,
    pub spawn_table_probability: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsIncidentTicket {
    pub ignore_full_inventory: Option<bool>,
    pub upgraded_item: Option<String>,
    pub upgrade_requirement_count: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsInventoryUpgrade {
    pub additional_storage: u64,
    pub upgrade_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsPotion {
    pub sta_amount: Option<u64>,
    pub sta_percent: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsReplenishMp {
    pub mp_amount: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsRevive {
    pub sta_percent: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsStardustBoost {
    pub boost_duration_ms: u64,
    pub stardust_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsStatIncrease {
    pub stats_to_increase_limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsTimePeriodCountersPlayerActivity {
    pub limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsTimePeriodCounters {
    pub player_activity: ItemSettingsTimePeriodCountersPlayerActivity,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettingsXpBoost {
    pub boost_duration_ms: u64,
    pub xp_multiplier: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemSettings {
    pub category: String,
    pub description_override: Option<String>,
    pub drop_trainer_level: Option<u64>,
    pub egg_incubator: Option<ItemSettingsEggIncubator>,
    pub event_pass_point: Option<ItemSettingsEventPassPoint>,
    pub food: Option<ItemSettingsFood>,
    pub global_event_ticket: Option<ItemSettingsGlobalEventTicket>,
    pub hide_item_in_inventory: Option<bool>,
    pub ignore_inventory_space: Option<bool>,
    pub incense: Option<ItemSettingsIncense>,
    pub incident_ticket: Option<ItemSettingsIncidentTicket>,
    pub inventory_upgrade: Option<ItemSettingsInventoryUpgrade>,
    pub item_cap: Option<u64>,
    pub item_id: String,
    pub item_type: String,
    pub name_override: Option<String>,
    pub potion: Option<ItemSettingsPotion>,
    pub replenish_mp: Option<ItemSettingsReplenishMp>,
    pub revive: Option<ItemSettingsRevive>,
    pub stardust_boost: Option<ItemSettingsStardustBoost>,
    pub stat_increase: Option<ItemSettingsStatIncrease>,
    pub time_period_counters: Option<ItemSettingsTimePeriodCounters>,
    pub xp_boost: Option<ItemSettingsXpBoost>,
}

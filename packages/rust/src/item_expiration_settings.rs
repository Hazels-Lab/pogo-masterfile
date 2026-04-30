//! Generated from Pokémon GO masterfile — group "itemExpirationSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EmergencyExpirationTime {
    pub emergency_expiration_time: String,
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LootItem {
    pub count: u64,
    pub stardust: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConsolationItemsV2 {
    pub loot_item: Vec<LootItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConsolationItems {
    pub consolation_items: ConsolationItemsV2,
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnabledTimePeriods {
    pub enabled_end_time: String,
    pub enabled_start_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemEnablementSettings {
    pub enabled_time_periods: Vec<EnabledTimePeriods>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EmergencyExpirationTimeItemEnablementSettings {
    pub emergency_expiration_time: String,
    pub expiration_time: String,
    pub item: String,
    pub item_enablement_settings: ItemEnablementSettings,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ItemExpirationSettings {
    EmergencyExpirationTime(EmergencyExpirationTime),
    Misc(Misc),
    ConsolationItems(ConsolationItems),
    EmergencyExpirationTimeItemEnablementSettings(EmergencyExpirationTimeItemEnablementSettings),
}

crate::masterfile_entry!(ItemExpirationSettingsEntry, ItemExpirationSettingsEntryData, item_expiration_settings: ItemExpirationSettings);

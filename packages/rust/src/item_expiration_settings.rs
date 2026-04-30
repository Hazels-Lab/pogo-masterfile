// Generated from Pokémon GO masterfile — group "itemExpirationSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsEmergencyExpirationTime {
    pub emergency_expiration_time: String,
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsMisc {
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsConsolationItemsConsolationItemsLootItem {
    pub count: u64,
    pub stardust: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsConsolationItemsConsolationItems {
    pub loot_item: [ItemExpirationSettingsConsolationItemsConsolationItemsLootItem; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsConsolationItems {
    pub consolation_items: ItemExpirationSettingsConsolationItemsConsolationItems,
    pub expiration_time: String,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettingsItemEnablementSettingsEnabledTimePeriods {
    pub enabled_end_time: String,
    pub enabled_start_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettingsItemEnablementSettings {
    pub enabled_time_periods: [ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettingsItemEnablementSettingsEnabledTimePeriods; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettings {
    pub emergency_expiration_time: String,
    pub expiration_time: String,
    pub item: String,
    pub item_enablement_settings: ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettingsItemEnablementSettings,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ItemExpirationSettings {
    EmergencyExpirationTime(ItemExpirationSettingsEmergencyExpirationTime),
    Misc(ItemExpirationSettingsMisc),
    ConsolationItems(ItemExpirationSettingsConsolationItems),
    EmergencyExpirationTimeItemEnablementSettings(ItemExpirationSettingsEmergencyExpirationTimeItemEnablementSettings),
}

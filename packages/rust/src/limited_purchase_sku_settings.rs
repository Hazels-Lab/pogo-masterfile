// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LimitedPurchaseSkuSettingsVersion {
    pub purchase_limit: u64,
    pub version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LimitedPurchaseSkuSettingsMisc {
    pub purchase_limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LimitedPurchaseSkuSettingsChronoUnitLootTableIdResetInterval {
    pub chrono_unit: String,
    pub loot_table_id: String,
    pub purchase_limit: u64,
    pub reset_interval: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LimitedPurchaseSkuSettings {
    Version(LimitedPurchaseSkuSettingsVersion),
    Misc(LimitedPurchaseSkuSettingsMisc),
    ChronoUnitLootTableIdResetInterval(LimitedPurchaseSkuSettingsChronoUnitLootTableIdResetInterval),
}

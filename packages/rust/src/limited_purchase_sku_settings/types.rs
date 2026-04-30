use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Version {
    pub purchase_limit: u64,
    pub version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub purchase_limit: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ChronoUnitLootTableIdResetInterval {
    pub chrono_unit: String,
    pub loot_table_id: String,
    pub purchase_limit: u64,
    pub reset_interval: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LimitedPurchaseSkuSettings {
    Version(Version),
    Misc(Misc),
    ChronoUnitLootTableIdResetInterval(ChronoUnitLootTableIdResetInterval),
}

crate::masterfile_entry!(LimitedPurchaseSkuSettingsEntry, LimitedPurchaseSkuSettingsEntryData, limited_purchase_sku_settings: LimitedPurchaseSkuSettings);

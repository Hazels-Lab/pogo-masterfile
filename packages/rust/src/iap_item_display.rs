// Generated from Pokémon GO masterfile — group "iapItemDisplay".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapItemDisplay {
    pub category: Option<String>,
    pub description: Option<String>,
    pub hidden: Option<bool>,
    pub image_url: Option<String>,
    pub max_level: Option<u64>,
    pub sale: Option<bool>,
    pub show_discount_tag: Option<bool>,
    pub show_strikethrough_price: Option<bool>,
    pub sku: String,
    pub sku_disable_time: Option<String>,
    pub sku_disable_time_utc_ms: Option<String>,
    pub sku_enable_time: Option<String>,
    pub sku_enable_time_utc_ms: Option<String>,
    pub sort_order: Option<i64>,
    pub sprite_id: Option<String>,
    pub title: Option<String>,
    pub total_value: Option<u64>,
    pub webstore_sku_id: Option<String>,
    pub webstore_sku_price_e6: Option<u64>,
}

crate::masterfile_entry!(IapItemDisplayEntry, IapItemDisplayEntryData, iap_item_display: IapItemDisplay);

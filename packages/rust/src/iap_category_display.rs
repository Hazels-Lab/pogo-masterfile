//! Generated from Pokémon GO masterfile — group "iapCategoryDisplay".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CategoryValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapCategoryDisplay {
    pub banner_enabled: Option<bool>,
    pub banner_title: Option<String>,
    pub category: Option<CategoryValue>,
    pub description: Option<String>,
    pub display_rows: Option<u64>,
    pub hidden: Option<bool>,
    pub image_url: Option<String>,
    pub name: Option<String>,
    pub sort_order: Option<u64>,
}

crate::masterfile_entry!(IapCategoryDisplayEntry, IapCategoryDisplayEntryData, iap_category_display: IapCategoryDisplay);

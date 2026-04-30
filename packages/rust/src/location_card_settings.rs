// Generated from Pokémon GO masterfile — group "locationCardSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardSettingsMisc {
    pub image_url: String,
    pub location_card: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardSettingsCardTypeVfxAddress {
    pub card_type: String,
    pub image_url: String,
    pub location_card: String,
    pub vfx_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardSettingsCardType {
    pub card_type: String,
    pub image_url: String,
    pub location_card: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LocationCardSettings {
    Misc(LocationCardSettingsMisc),
    CardTypeVfxAddress(LocationCardSettingsCardTypeVfxAddress),
    CardType(LocationCardSettingsCardType),
}

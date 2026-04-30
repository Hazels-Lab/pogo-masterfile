// Generated from Pokémon GO masterfile — group "locationCardSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Misc {
    pub image_url: String,
    pub location_card: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CardTypeVfxAddress {
    pub card_type: String,
    pub image_url: String,
    pub location_card: String,
    pub vfx_address: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CardType {
    pub card_type: String,
    pub image_url: String,
    pub location_card: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LocationCardSettings {
    Misc(Misc),
    CardTypeVfxAddress(CardTypeVfxAddress),
    CardType(CardType),
}

crate::masterfile_entry!(LocationCardSettingsEntry, LocationCardSettingsEntryData, location_card_settings: LocationCardSettings);

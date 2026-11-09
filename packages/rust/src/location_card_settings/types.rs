use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardSettings {
    pub background_eligibility_status: Option<String>,
    pub card_treatment: Option<String>,
    pub card_type: Option<String>,
    pub image_url: String,
    pub location_card: String,
    pub vfx_address: Option<String>,
}

crate::masterfile_entry!(LocationCardSettingsEntry, LocationCardSettingsEntryData, location_card_settings: LocationCardSettings);

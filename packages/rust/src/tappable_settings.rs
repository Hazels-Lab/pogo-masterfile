//! Generated from Pokémon GO masterfile — group "tappableSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveWhenTappedTappableAssetKey {
    pub remove_when_tapped: bool,
    pub tappable_asset_key: String,
    pub visible_radius_meters: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvgTappablesInViewPlus3 {
    pub avg_tappables_in_view: f64,
    pub buddy_fov_degress: f64,
    pub movement_respawn_threshold_meters: f64,
    pub spawn_angle_degrees: f64,
    pub visible_radius_meters: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvgTappablesInViewPlus5 {
    pub avg_tappables_in_view: f64,
    pub buddy_fov_degress: f64,
    pub movement_respawn_threshold_meters: f64,
    pub remove_when_tapped: bool,
    pub spawn_angle_degrees: f64,
    pub r#type: String,
    pub visible_radius_meters: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TappableSettings {
    RemoveWhenTappedTappableAssetKey(RemoveWhenTappedTappableAssetKey),
    AvgTappablesInViewPlus3(AvgTappablesInViewPlus3),
    AvgTappablesInViewPlus5(AvgTappablesInViewPlus5),
}

crate::masterfile_entry!(TappableSettingsEntry, TappableSettingsEntryData, tappable_settings: TappableSettings);

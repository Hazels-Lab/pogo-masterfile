// Generated from Pokémon GO masterfile — group "tappableSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TappableSettingsRemoveWhenTappedTappableAssetKey {
    pub remove_when_tapped: bool,
    pub tappable_asset_key: String,
    pub visible_radius_meters: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TappableSettingsAvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersSpawnAngleDegrees {
    pub avg_tappables_in_view: u64,
    pub buddy_fov_degress: u64,
    pub movement_respawn_threshold_meters: u64,
    pub spawn_angle_degrees: u64,
    pub visible_radius_meters: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TappableSettingsAvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersRemoveWhenTappedSpawnAngleDegreesType {
    pub avg_tappables_in_view: u64,
    pub buddy_fov_degress: u64,
    pub movement_respawn_threshold_meters: u64,
    pub remove_when_tapped: bool,
    pub spawn_angle_degrees: u64,
    pub r#type: String,
    pub visible_radius_meters: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TappableSettings {
    RemoveWhenTappedTappableAssetKey(TappableSettingsRemoveWhenTappedTappableAssetKey),
    AvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersSpawnAngleDegrees(TappableSettingsAvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersSpawnAngleDegrees),
    AvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersRemoveWhenTappedSpawnAngleDegreesType(TappableSettingsAvgTappablesInViewBuddyFovDegressMovementRespawnThresholdMetersRemoveWhenTappedSpawnAngleDegreesType),
}

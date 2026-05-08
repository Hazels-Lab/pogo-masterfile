use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BreadModeValue {
    Uint(u64),
    String(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Camera {
    pub cylinder_ground_m: Option<f64>,
    pub cylinder_height_m: f64,
    pub cylinder_radius_m: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CatchOverrideSettings {
    pub collision_head_radius_m: f64,
    pub collision_height_m: Option<f64>,
    pub collision_radius_m: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxBattleTrainerVisualSettings {
    pub x_offset: Option<f64>,
    pub y_offset: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxBattleVisualSettings {
    pub scale: Option<f64>,
    pub x_offset: Option<f64>,
    pub y_offset: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxEncounterVisualSettings {
    pub camera_distance: Option<f64>,
    pub camera_fov: Option<f64>,
    pub max_reticle_size: Option<f64>,
    pub scale: Option<f64>,
    pub y_offset: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxLobbyVisualSettings {
    pub camera_distance: Option<f64>,
    pub camera_fov: Option<f64>,
    pub scale: Option<f64>,
    pub x_offset: Option<f64>,
    pub y_offset: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxPowerspotTopperVisualSettings {
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SizeSettings {
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xxl_upper_bound: Option<f64>,
    pub xxs_lower_bound: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadOverrides {
    pub average_height_m: Option<f64>,
    pub average_weight_kg: Option<f64>,
    pub bread_mode: Option<BreadModeValue>,
    pub camera: Option<Camera>,
    pub catch_override_settings: Option<CatchOverrideSettings>,
    pub max_battle_trainer_visual_settings: Option<MaxBattleTrainerVisualSettings>,
    pub max_battle_visual_settings: Option<MaxBattleVisualSettings>,
    pub max_encounter_visual_settings: Option<MaxEncounterVisualSettings>,
    pub max_lobby_visual_settings: Option<MaxLobbyVisualSettings>,
    pub max_powerspot_topper_visual_settings: Option<MaxPowerspotTopperVisualSettings>,
    pub max_station_visual_settings: Option<MaxBattleVisualSettings>,
    pub model_height: Option<f64>,
    pub model_scale_v2: Option<f64>,
    pub size_settings: Option<SizeSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SizeSettingsV2 {
    pub disable_pokedex_record_display_for_forms: Option<bool>,
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_scale_multiplier: Option<f64>,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xs_scale_multiplier: Option<f64>,
    pub xxl_scale_multiplier: Option<f64>,
    pub xxl_upper_bound: f64,
    pub xxs_lower_bound: f64,
    pub xxs_scale_multiplier: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SizeSettingsV3 {
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xxl_upper_bound: f64,
    pub xxs_lower_bound: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TempEvoOverrides {
    pub size_settings: SizeSettingsV3,
    pub temp_evo_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettings {
    pub bread_overrides: Option<Vec<BreadOverrides>>,
    pub form: Option<String>,
    pub size_settings: SizeSettingsV2,
    pub temp_evo_overrides: Option<Vec<TempEvoOverrides>>,
    pub unique_id: String,
}

crate::masterfile_entry!(PokemonExtendedSettingsEntry, PokemonExtendedSettingsEntryData, pokemon_extended_settings: PokemonExtendedSettings);

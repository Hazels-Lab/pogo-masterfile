// Generated from Pokémon GO masterfile — group "pokemonExtendedSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesCamera {
    pub cylinder_ground_m: Option<f64>,
    pub cylinder_height_m: f64,
    pub cylinder_radius_m: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesCatchOverrideSettings {
    pub collision_head_radius_m: f64,
    pub collision_height_m: Option<f64>,
    pub collision_radius_m: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxBattleTrainerVisualSettings {
    pub x_offset: Option<f64>,
    pub y_offset: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxBattleVisualSettings {
    pub scale: Option<f64>,
    pub x_offset: Option<f64>,
    pub y_offset: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxEncounterVisualSettings {
    pub camera_distance: Option<f64>,
    pub camera_fov: Option<u64>,
    pub max_reticle_size: Option<u64>,
    pub scale: Option<f64>,
    pub y_offset: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxLobbyVisualSettings {
    pub camera_distance: Option<u64>,
    pub camera_fov: Option<i64>,
    pub scale: Option<u64>,
    pub x_offset: Option<u64>,
    pub y_offset: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxPowerspotTopperVisualSettings {
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesMaxStationVisualSettings {
    pub scale: Option<f64>,
    pub x_offset: Option<f64>,
    pub y_offset: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverridesSizeSettings {
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xxl_upper_bound: Option<f64>,
    pub xxs_lower_bound: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsBreadOverrides {
    pub average_height_m: Option<u64>,
    pub average_weight_kg: Option<f64>,
    pub bread_mode: Option<serde_json::Value>,
    pub camera: Option<PokemonExtendedSettingsBreadOverridesCamera>,
    pub catch_override_settings: Option<PokemonExtendedSettingsBreadOverridesCatchOverrideSettings>,
    pub max_battle_trainer_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxBattleTrainerVisualSettings>,
    pub max_battle_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxBattleVisualSettings>,
    pub max_encounter_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxEncounterVisualSettings>,
    pub max_lobby_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxLobbyVisualSettings>,
    pub max_powerspot_topper_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxPowerspotTopperVisualSettings>,
    pub max_station_visual_settings: Option<PokemonExtendedSettingsBreadOverridesMaxStationVisualSettings>,
    pub model_height: Option<f64>,
    pub model_scale_v2: Option<f64>,
    pub size_settings: Option<PokemonExtendedSettingsBreadOverridesSizeSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsSizeSettings {
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
pub struct PokemonExtendedSettingsTempEvoOverridesSizeSettings {
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xxl_upper_bound: f64,
    pub xxs_lower_bound: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettingsTempEvoOverrides {
    pub size_settings: PokemonExtendedSettingsTempEvoOverridesSizeSettings,
    pub temp_evo_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonExtendedSettings {
    pub bread_overrides: Option<Vec<PokemonExtendedSettingsBreadOverrides>>,
    pub form: Option<serde_json::Value>,
    pub size_settings: PokemonExtendedSettingsSizeSettings,
    pub temp_evo_overrides: Option<Vec<PokemonExtendedSettingsTempEvoOverrides>>,
    pub unique_id: String,
}

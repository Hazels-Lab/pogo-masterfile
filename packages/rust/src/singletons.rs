//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AccessibilitySettings {
    pub enabled: bool,
    pub plugin_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveSceneSettings {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AddressablePokemonSettings {
    pub addressable_pokemon_ids: [String; 9],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AddressBookImportSettings {
    pub is_enabled: bool,
    pub onboarding_screen_level: u64,
    pub reprompt_onboarding_for_v1: bool,
    pub show_opt_out_checkbox: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdvancedSettings {
    pub download_all_assets_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CaptureSettings {
    pub contextual_check_interval_seconds: f64,
    pub countdown_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ErrorReportingSettings {
    pub is_enabled: bool,
    pub max_events_per_sliding_window: u64,
    pub max_total_events_before_shutdown: String,
    pub percent_chance_player_sends: u64,
    pub sliding_window_length_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Incentives {
    pub incentive_icon_name: String,
    pub incentive_string_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedForms {
    pub excluded_forms: [String; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV2 {
    pub excluded_forms: [String; 19],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV3 {
    pub excluded_forms: [String; 18],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV4 {
    pub excluded_forms: [String; 2],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV5 {
    pub excluded_forms: [String; 5],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV6 {
    pub excluded_forms: [String; 4],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV7 {
    pub excluded_forms: [String; 9],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonWithExcludedFormsV8 {
    pub excluded_forms: [String; 3],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlags {
    pub ar_menu_entry_enabled: i64,
    pub capture_settings: CaptureSettings,
    pub error_reporting_settings: ErrorReportingSettings,
    pub excluded_pokemon_ids: Vec<String>,
    pub incentives: [Incentives; 2],
    pub incentives_enabled: bool,
    pub is_feature_enabled: bool,
    pub lapsed_days_cutoff: u64,
    pub main_menu_entry_enabled: i64,
    pub new_days_cutoff: u64,
    pub pokemon_with_excluded_forms: Vec<PokemonWithExcludedForms>,
    pub pre_login_device_allow_list: [String; 6],
    pub pre_login_metrics_enabled: i64,
    pub pre_login_roll_out_ratio: u64,
    pub share_functionality_enabled: u64,
    pub show_sticker: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArTelemetrySettings {
    pub battery_sampling_interval_ms: u64,
    pub enable_ardk_telemetry: bool,
    pub framerate_sampling_interval_ms: u64,
    pub measure_battery: bool,
    pub measure_framerate: bool,
    pub percentage_sessions_to_sample: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssetRefreshProto {
    pub string_refresh_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarFeatureFlags {
    pub corndog_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarStoreFooterFlags {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AvatarStoreSubcategoryFilteringFlags {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BackgroundModeSettings {
    pub weekly_fitness_goal_level1_distance_km: u64,
    pub weekly_fitness_goal_level2_distance_km: u64,
    pub weekly_fitness_goal_level3_distance_km: u64,
    pub weekly_fitness_goal_level4_distance_km: u64,
    pub weekly_fitness_goal_reminder_km: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FastAttackSettings {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatAnimationConfiguration {
    pub fast_attack_settings: FastAttackSettings,
    pub projected_health_animation_duration_seconds: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FastAttackSettingsV2 {
    pub cross_fade_duration_seconds: f64,
    pub normalized_start_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxBattleAnimationConfiguration {
    pub fast_attack_settings: FastAttackSettingsV2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettings {
    pub combat_animation_configuration: CombatAnimationConfiguration,
    pub max_battle_animation_configuration: MaxBattleAnimationConfiguration,
    pub raids_animation_configuration: MaxBattleAnimationConfiguration,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubBadgeSettings {
    pub combat_hub_displayed_badges: [String; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Section {
    pub main_section: String,
    pub subsection: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SectionGroup {
    pub section: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SectionGroupV2 {
    pub section: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubOrderSettings {
    pub section: [Section; 1],
    pub section_group: (SectionGroup, SectionGroupV2, SectionGroupV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadInputBufferPriorityList {
    pub event_priority: [String; 2],
    pub priority_event_type_list: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatInputBufferPriorityList {
    pub event_priority: [String; 1],
    pub priority_event_type_list: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidsInputBufferPriorityList {
    pub event_priority: [String; 4],
    pub priority_event_type_list: [String; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleInputBufferSettings {
    pub bread_input_buffer_priority_list: BreadInputBufferPriorityList,
    pub combat_input_buffer_priority_list: CombatInputBufferPriorityList,
    pub raids_input_buffer_priority_list: RaidsInputBufferPriorityList,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattlePartySettings {
    pub enable_battle_party_saving: bool,
    pub max_battle_parties: u64,
    pub overall_parties_cap: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleSettings {
    pub attack_server_interval: u64,
    pub bonus_time_per_ally_seconds: u64,
    pub boss_energy_regeneration_per_health_lost: f64,
    pub dodge_damage_reduction_percent: f64,
    pub dodge_duration_ms: u64,
    pub enemy_attack_interval: f64,
    pub energy_delta_per_health_lost: f64,
    pub maximum_attackers_per_battle: u64,
    pub maximum_energy: u64,
    pub minimum_player_level: u64,
    pub minimum_raid_player_level: u64,
    pub purified_pokemon_attack_multiplier_vs_shadow: u64,
    pub retarget_seconds: f64,
    pub round_duration_seconds: u64,
    pub same_type_attack_bonus_multiplier: f64,
    pub shadow_pokemon_attack_bonus_multiplier: f64,
    pub shadow_pokemon_defense_bonus_multiplier: f64,
    pub swap_duration_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleVisualSettings {
    pub banner_texture_asset: String,
    pub crowd_texture_asset: String,
    pub enhancements_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BelugaPokemonWhitelist {
    pub additional_pokemon_allowed: [String; 2],
    pub costumes_allowed: [String; 1],
    pub max_allowed_pokemon_pokedex_number: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BestFriendsPlusSettings {
    pub enabled: bool,
    pub tutorial_time_cutoff: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleClientSettings {
    pub bread_battle_min_player_level: u64,
    pub can_invite_friends_in_person: bool,
    pub can_invite_friends_remotely: bool,
    pub fetch_profile_from_social_enabled: bool,
    pub friend_invite_cutoff_time_sec: u64,
    pub invite_cooldown_duration_millis: String,
    pub max_num_friend_invites: u64,
    pub max_num_friend_invites_per_action: u64,
    pub max_num_friend_invites_to_bread_dough_lobby_per_action: u64,
    pub max_players_per_bread_dough_lobby: u64,
    pub max_players_per_bread_lobby: u64,
    pub max_players_to_prepare_bread_dough_lobby: u64,
    pub max_remote_bread_battle_passes_allowed: u64,
    pub max_remote_players_per_bread_dough_lobby: u64,
    pub max_remote_players_per_bread_lobby: u64,
    pub min_players_to_prepare_bread_lobby: u64,
    pub prepare_bread_lobby_cutoff_ms: u64,
    pub prepare_bread_lobby_enabled: bool,
    pub prepare_bread_lobby_solo_ms: u64,
    pub remote_bread_battle_enabled: bool,
    pub remote_bread_battle_min_player_level: u64,
    pub rvn_version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadFeatureFlags {
    pub battle_enabled: bool,
    pub battle_spawn_mode: String,
    pub boost_item_enabled: bool,
    pub bread_post_battle_recovery_enabled: bool,
    pub can_use_master_ball_post_battle: bool,
    pub debug_rpc_enabled: bool,
    pub discovery_enabled: bool,
    pub enabled: bool,
    pub minimum_player_level: u64,
    pub mp_enabled: bool,
    pub nearby_lobby_counter_enabled: bool,
    pub power_spot_edits_enabled: bool,
    pub station_discovery_mode: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadLobbyCounterSettings {
    pub bread_dough_lobby_max_count_to_update: u64,
    pub publish_cutoff_time_ms: String,
    pub show_counter_radius_meters: u64,
    pub subscribe_s2_level: u64,
    pub subscription_namespace: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadLobbyUpdateSettings {
    pub join_publish_cutoff_time_ms: String,
    pub server_publish_rate_limit_interval_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Mappings {
    pub r#move: String,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveMappings {
    pub mappings: [Mappings; 18],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleTrainerVisualData {
    pub x_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleVisualData {
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadEncounterVisiualData {
    pub camera_distance: u64,
    pub max_reticle_size: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualData {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormData {
    pub pokemon_form: String,
    pub visual_data: [VisualData; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettings {
    pub pokemon_form_data: [PokemonFormData; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadEncounterVisiualDataV2 {
    pub camera_distance: f64,
    pub max_reticle_size: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV2 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV2 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV2; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV2 {
    pub pokemon_form_data: [PokemonFormDataV2; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleTrainerVisualDataV2 {
    pub x_offset: u64,
    pub y_offset: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV3 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualDataV2,
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleVisualDataV2 {
    pub scale: f64,
    pub y_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV4 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualDataV2,
    pub bread_battle_visual_data: BreadBattleVisualDataV2,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV3 {
    pub pokemon_form: String,
    pub visual_data: (VisualDataV3, VisualDataV4),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV3 {
    pub pokemon_form_data: [PokemonFormDataV3; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV5 {
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleTrainerVisualDataV3 {
    pub x_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV6 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualDataV3,
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV4 {
    pub pokemon_form: String,
    pub visual_data: (VisualDataV5, VisualDataV6),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV4 {
    pub pokemon_form_data: [PokemonFormDataV4; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV7 {
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleTrainerVisualDataV4 {
    pub x_offset: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleVisualDataV3 {
    pub scale: f64,
    pub x_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV8 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualDataV4,
    pub bread_battle_visual_data: BreadBattleVisualDataV3,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualDataV3,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV5 {
    pub pokemon_form: String,
    pub visual_data: (VisualDataV7, VisualDataV8),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV5 {
    pub pokemon_form_data: [PokemonFormDataV5; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV6 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV5; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV6 {
    pub pokemon_form_data: [PokemonFormDataV6; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV7 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV7; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV7 {
    pub pokemon_form_data: [PokemonFormDataV7; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadStationVisualData {
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV9 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV8 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV9; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV8 {
    pub pokemon_form_data: [PokemonFormDataV8; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV10 {
    pub bread_battle_visual_data: BreadStationVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV9 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV10; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV9 {
    pub pokemon_form_data: [PokemonFormDataV9; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadEncounterVisiualDataV3 {
    pub camera_distance: u64,
    pub max_reticle_size: u64,
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV11 {
    pub bread_battle_visual_data: BreadStationVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV10 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV11; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV10 {
    pub pokemon_form_data: [PokemonFormDataV10; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV12 {
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV11 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV12; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV11 {
    pub pokemon_form_data: [PokemonFormDataV11; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV12 {
    pub visual_data: [VisualDataV7; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV12 {
    pub pokemon_form_data: [PokemonFormDataV12; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV13 {
    pub visual_data: [VisualDataV2; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV13 {
    pub pokemon_form_data: [PokemonFormDataV13; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV13 {
    pub bread_battle_visual_data: BreadBattleVisualDataV2,
    pub bread_encounter_visiual_data: BreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV14 {
    pub visual_data: [VisualDataV13; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV14 {
    pub pokemon_form_data: [PokemonFormDataV14; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV15 {
    pub visual_data: [VisualDataV6; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV15 {
    pub pokemon_form_data: [PokemonFormDataV15; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV16 {
    pub visual_data: [VisualDataV5; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV16 {
    pub pokemon_form_data: [PokemonFormDataV16; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleVisualDataV4 {
    pub scale: u64,
    pub y_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV14 {
    pub bread_battle_trainer_visual_data: BreadBattleTrainerVisualDataV4,
    pub bread_battle_visual_data: BreadBattleVisualDataV4,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV17 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV14; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV17 {
    pub pokemon_form_data: [PokemonFormDataV17; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV15 {
    pub bread_battle_visual_data: BreadStationVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV18 {
    pub visual_data: [VisualDataV15; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV18 {
    pub pokemon_form_data: [PokemonFormDataV18; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadEncounterVisiualDataV4 {
    pub camera_distance: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV16 {
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV4,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV19 {
    pub visual_data: [VisualDataV16; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV19 {
    pub pokemon_form_data: [PokemonFormDataV19; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadEncounterVisiualDataV5 {
    pub camera_distance: f64,
    pub max_reticle_size: u64,
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV17 {
    pub bread_battle_visual_data: BreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadEncounterVisiualDataV5,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV20 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV17; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV20 {
    pub pokemon_form_data: [PokemonFormDataV20; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleBossVisualData {
    pub scale: f64,
    pub x_offset: f64,
    pub y_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualDataV18 {
    pub bread_battle_boss_visual_data: BreadBattleBossVisualData,
    pub bread_mode: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormDataV21 {
    pub pokemon_form: String,
    pub visual_data: [VisualDataV18; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VisualSettingsV21 {
    pub pokemon_form_data: [PokemonFormDataV21; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettings {
    pub visual_settings: Vec<VisualSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AllowedSourdoughPokemon {
    pub bread_mode: String,
    pub form: [String; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AllowedSourdoughPokemonV2 {
    pub bread_mode: String,
    pub form: [String; 2],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadBattleAvailability {
    pub bread_battle_availability_end_minute: u64,
    pub bread_battle_availability_start_minute: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadSettings {
    pub allowed_sourdough_pokemon: Vec<AllowedSourdoughPokemon>,
    pub bread_battle_availability: BreadBattleAvailability,
    pub max_range_for_nearby_state_meters: u64,
    pub max_stationed_pokemon: u64,
    pub max_stationed_pokemon_display_count: u64,
    pub max_stationed_pokemon_per_player: u64,
    pub min_ms_to_receive_release_station_rewards: String,
    pub num_stationed_pokemon_to_return: u64,
    pub show_timer_when_far: bool,
    pub start_of_day_offset_duration_ms: String,
    pub tutorial_max_boost_item_duration_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyEncounterCameoSettings {
    pub buddy_invasion_encounter_cameo_chance_percent: f64,
    pub buddy_quest_encounter_cameo_chance_percent: f64,
    pub buddy_raid_encounter_cameo_chance_percent: f64,
    pub buddy_wild_encounter_cameo_chance_percent: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyHungerSettings {
    pub cooldown_duration_ms: String,
    pub decay_duration_after_full_ms: String,
    pub decay_points_per_bucket: u64,
    pub milliseconds_per_bucket: String,
    pub num_hunger_points_required_for_full: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyInteractionSettings {
    pub feed_item_whitelist: [String; 6],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddySwapSettings {
    pub enable_quick_swap: bool,
    pub enable_swap_free_evolution: bool,
    pub max_swaps_per_day: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyWalkSettings {
    pub km_required_per_affection_point: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BulkHealingSettings {
    pub enabled: bool,
    pub max_pokemons_per_heal: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ButterflyCollectorSettings {
    pub daily_progress_from_inventory: u64,
    pub enabled: bool,
    pub region: [String; 18],
    pub version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CampfireSettings {
    pub ar_catch_card_enabled: bool,
    pub ar_catch_card_share_campfire_enabled: bool,
    pub campfire_enabled: bool,
    pub catch_card_available_seconds: u64,
    pub catch_card_enabled: bool,
    pub catch_card_share_campfire_enabled: bool,
    pub map_buttons_enabled: bool,
    pub meetup_query_timer_ms: String,
    pub passwordless_login_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CatchRadiusMultiplierSettings {
    pub catch_radius_multiplier_settings_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatCompetitiveSeasonSettings {
    pub ranking_adjustment_percentage: f64,
    pub rating_adjustment_percentage: f64,
    pub season_end_time_timestamp: [String; 30],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatLeagueSettings {
    pub combat_league_template_id: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClockSyncSettings {
    pub enabled: bool,
    pub sync_attempt_count: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatFeatureFlags {
    pub real_device_time_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatSettings {
    pub blocked_flyout_duration_turns: u64,
    pub change_pokemon_duration_seconds: u64,
    pub charge_attack_bonus_multiplier: f64,
    pub charge_score_base: f64,
    pub charge_score_excellent: u64,
    pub charge_score_great: f64,
    pub charge_score_nice: f64,
    pub clock_sync_settings: ClockSyncSettings,
    pub combat_experiment: Vec<serde_json::Value>,
    pub combat_feature_flags: CombatFeatureFlags,
    pub defender_minigame_multiplier: u64,
    pub defense_bonus_multiplier: u64,
    pub fast_attack_bonus_multiplier: f64,
    pub flyin_duration_turns: u64,
    pub max_energy: u64,
    pub minigame_bonus_base_multiplier: f64,
    pub minigame_bonus_variable_multiplier: u64,
    pub minigame_duration_seconds: u64,
    pub minigame_submit_score_duration_seconds: f64,
    pub normal_effective_flyout_duration_turns: u64,
    pub not_very_effective_flyout_duration_turns: u64,
    pub ob_combat_settings_not_pushed_bool2: bool,
    pub purified_pokemon_attack_multiplier_vs_shadow: u64,
    pub quick_swap_cooldown_duration_seconds: u64,
    pub round_duration_seconds: u64,
    pub same_type_attack_bonus_multiplier: f64,
    pub shadow_pokemon_attack_bonus_multiplier: f64,
    pub shadow_pokemon_defense_bonus_multiplier: f64,
    pub show_quick_swap_buttons_during_countdown: bool,
    pub super_effective_flyout_duration_turns: u64,
    pub turn_duration_seconds: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatStatStageSettings {
    pub attack_buff_multiplier: [f64; 9],
    pub defense_buff_multiplier: [f64; 9],
    pub maximum_stat_stage: u64,
    pub minimum_stat_stage: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestLengthThresholds {
    pub length: String,
    pub max_duration_ms: String,
    pub min_duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestMetric {
    pub pokemon_metric: String,
    pub ranking_standard: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestLimits {
    pub contest_metric: ContestMetric,
    pub contest_occurrence: String,
    pub per_contest_max_entries: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSize {
    pub height_coefficient: u64,
    pub iv_coefficient: u64,
    pub weight_coefficient: u64,
    pub xxl_adjustment_factor: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestScoreCoefficient {
    pub pokemon_size: PokemonSize,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestWarmupAndCooldownDurationsMs {
    pub contest_occurrence: String,
    pub cycle_cooldown_duration_ms: String,
    pub cycle_warmup_duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettings {
    pub catch_prompt_timeout_ms: u64,
    pub contest_length_thresholds: [ContestLengthThresholds; 3],
    pub contest_limits: [ContestLimits; 1],
    pub contest_score_coefficient: [ContestScoreCoefficient; 1],
    pub contest_warmup_and_cooldown_durations_ms: [ContestWarmupAndCooldownDurationsMs; 2],
    pub default_contest_max_entries: u64,
    pub default_cycle_cooldown_duration_ms: String,
    pub default_cycle_warmup_duration_ms: String,
    pub is_anticheat_removal_enabled: bool,
    pub is_contest_in_nearby_menu: bool,
    pub is_feature_enabled: bool,
    pub is_friends_display_enabled: bool,
    pub is_normalized_score_to_species: bool,
    pub is_pokemon_scalar_enabled: bool,
    pub is_v2_feature_enabled: bool,
    pub is_v2_focuses_enabled: bool,
    pub max_catch_prompt_range: u64,
    pub min_cooldown_before_season_end_ms: String,
    pub player_contest_max_entries: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFormAppraisalOverrides {
    pub add_to_start: bool,
    pub appraisal_key: String,
    pub form: String,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConversationSettings {
    pub pokemon_form_appraisal_overrides: [PokemonFormAppraisalOverrides; 8],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CrossGameSocialSettings {
    pub niantic_profile_enabled_override_level: bool,
    pub online_status_enabled_override_level: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LootItem {
    pub count: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokeballGrant {
    pub loot_item: [LootItem; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DailyAdventureIncenseSettings {
    pub enabled: bool,
    pub enable_push_notification: bool,
    pub local_delivery_time: String,
    pub pokeball_grant: PokeballGrant,
    pub pokeball_grant_threshold: u64,
    pub push_notification_hour_of_day: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeepLinkingSettings {
    pub actions_that_execute_before_map_loads: (String, u64),
    pub actions_that_ignore_min_level: (String, u64),
    pub ios_action_button_enabled: bool,
    pub min_player_level_for_external_link: u64,
    pub min_player_level_for_notification_link: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EggHatchImprovementsSettings {
    pub boot_delay_ms: u64,
    pub feature_enabled: bool,
    pub raid_invite_hard_cap_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EncounterSettings {
    pub ar_close_proximity_threshold: f64,
    pub ar_low_awareness_threshold: f64,
    pub ar_plus_mode_enabled: bool,
    pub enable_item_selection_slider_v2: bool,
    pub excellent_throw_threshold: f64,
    pub great_throw_threshold: f64,
    pub milestone_threshold: u64,
    pub nice_throw_threshold: u64,
    pub spin_bonus_threshold: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPlannerPopularNotificationSettings {
    pub battle_levels: [u64; 9],
    pub first_scan_offset_seconds: String,
    pub max_notif_per_day: u64,
    pub nearby_poi_threshold: u64,
    pub notif_delay_intervals_seconds: String,
    pub rural_threshold: u64,
    pub scan_interval_seconds: String,
    pub timeslot_buffer_window_seconds: String,
    pub urban_threshold: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalAddressableAssetsSettings {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FeatureUnlockLevelSettings {
    pub lures_unlock_level: u64,
    pub rare_candy_conversion_unlock_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GeotargetedQuestSettings {
    pub enable_geotargeted_quests: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StardustMultiplier {
    pub multiplier: u64,
    pub random_weight: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GiftingSettings {
    pub enable_gift_to_stardust: bool,
    pub flow_polish_enabled: bool,
    pub multi_major_reward_ui_enabled: bool,
    pub stardust_multiplier: [StardustMultiplier; 3],
    pub stardust_per_gift: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GuiSearchSettings {
    pub complete_start_letter_count_per_language: [String; 15],
    pub gui_search_enabled: bool,
    pub max_number_favorite_searches: u64,
    pub max_number_recent_searches: u64,
    pub max_query_length: u64,
    pub search_help_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GymBadgeSettings {
    pub battle_winning_score_per_defender_cp: f64,
    pub berry_feeding_score: u64,
    pub gym_defending_score_per_minute: u64,
    pub lose_all_battles_score: u64,
    pub pokemon_deploy_score: u64,
    pub raid_battle_winning_score: u64,
    pub target: [u64; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HapticsSettings {
    pub advanced_haptics_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapSettings {
    pub daily_defender_bonus_currency: [String; 2],
    pub daily_defender_bonus_max_defenders: u64,
    pub daily_defender_bonus_per_pokemon: [u64; 2],
    pub min_time_between_claims_ms: String,
    pub prohibit_purchase_in_test_envirnment: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IbfcLightweightSettings {
    pub default_defense_multiplier: u64,
    pub default_defense_override: u64,
    pub default_energy_charge_override: u64,
    pub default_stamina_override: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImpressionTrackingSettings {
    pub approach_gym_tracking_enabled: bool,
    pub approach_raid_tracking_enabled: bool,
    pub full_screen_ad_view_tracking_enabled: bool,
    pub impression_tracking_enabled: bool,
    pub pokestop_spinner_interaction_tracking_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InAppSurveySettings {
    pub survey_poll_frequency_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentPriority {
    pub display_type: String,
    pub priority: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentPrioritySettings {
    pub incident_priority: [IncidentPriority; 7],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentVisibilitySettings {
    pub hide_incident_for_character: [String; 11],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BagUpgradeTimerStages {
    pub dismiss_stage_secs: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InventorySettings {
    pub bag_upgrade_banner_contexts: [String; 5],
    pub bag_upgrade_banner_enabled: bool,
    pub bag_upgrade_timer_stages: [BagUpgradeTimerStages; 4],
    pub base_bag_items: u64,
    pub base_daily_adventure_eggs: u64,
    pub base_eggs: u64,
    pub base_pokemon: u64,
    pub base_postcards: u64,
    pub can_raid_pass_overflow_bag_space: bool,
    pub easy_incubator_buy_enabled: bool,
    pub enable_eggs_not_inventory: bool,
    pub lucky_friend_applicator_settings_toggle_enabled: bool,
    pub max_bag_items: u64,
    pub max_item_boost_duration_ms: String,
    pub max_pokemon: u64,
    pub max_postcards: u64,
    pub max_stone_acount: u64,
    pub max_team_changes: u64,
    pub special_egg_overflow_spots: u64,
    pub team_change_item_reset_period_in_days: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IrisSocialSettings {
    pub add_pokemon_modal_delay_ms: u64,
    pub banned_pokedex_ids: [String; 21],
    pub combined_shadows_enabled: bool,
    pub enable_sqc_guidance: bool,
    pub expression_update_broadcast_method: String,
    pub ftue_version: String,
    pub gameplay_reports_active: bool,
    pub ground_focus_guardrail_enabled: bool,
    pub ground_focus_guardrail_enter_angle: u64,
    pub ground_focus_guardrail_exit_angle: u64,
    pub guidance_in_car_threshold: f64,
    pub guidance_path_nearby_finish_delay_ms: u64,
    pub guidance_path_nearby_finish_distance_meters: u64,
    pub iris_social_enabled: bool,
    pub iris_social_poi_deactivation_cooldown_ms: String,
    pub limited_localization_timeout_duration_ms: String,
    pub limited_pokedex_ids: Vec<String>,
    pub localization_guidance_path_enabled: bool,
    pub localization_timeout_duration_ms: String,
    pub location_manager_jpeg_compression_quality: u64,
    pub max_boundary_area_sq_meters: u64,
    pub max_distance_allow_localization_meters: String,
    pub max_num_pokemon_per_player: u64,
    pub max_num_pokemon_per_scene: u64,
    pub max_time_bg_mode_before_expulsion_ms: String,
    pub max_time_no_activity_player_inactive_ms: String,
    pub min_boundary_area_sq_meters: u64,
    pub pokeball_ping_time_delay_ms: u64,
    pub pokemon_expire_after_ms: String,
    pub pokemon_spawn_stagger_duration_ms: String,
    pub push_gateway_enabled: bool,
    pub sunrise_threshold_offset_ms: String,
    pub sunset_threshold_offset_ms: String,
    pub sun_threshold_check_enabled: bool,
    pub use_boundary_vertices_from_data_flow: bool,
    pub use_vps_enabled_status: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventStep {
    pub event: String,
    pub step_number: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventStepV2 {
    pub event: u64,
    pub step_number: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IrisSocialUxFunnelSettings {
    pub event_step: Vec<EventStep>,
    pub ux_funnel_version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CategoryProto {
    pub category: [String; 1],
    pub category_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CategoryProtoV2 {
    pub category: [String; 1],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CategoryProtoV3 {
    pub category: [String; 3],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CategoryProtoV4 {
    pub category: [String; 4],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CategoryProtoV5 {
    pub category: [String; 7],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettings {
    pub category_proto: (CategoryProto, CategoryProtoV2, CategoryProtoV2, CategoryProtoV2, CategoryProtoV3, CategoryProtoV4, CategoryProtoV5, CategoryProtoV3, CategoryProtoV2, CategoryProtoV4, CategoryProtoV2, CategoryProtoV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct JoinRaidViaFriendListSettings {
    pub enabled: bool,
    pub friend_activities_background_update_period_ms: String,
    pub max_battle_enabled: bool,
    pub max_battle_min_friendship_score: u64,
    pub max_battle_min_player_level: u64,
    pub min_friendship_score: u64,
    pub min_player_level: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LanguageSelectorSettings {
    pub language_selector_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LuckyPokemonSettings {
    pub power_up_stardust_discount_percent: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MainMenuChanges {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MapDisplaySettings {
    pub show_enhanced_sky: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MapObjectsInteractionRangeSettings {
    pub far_interaction_range_meters: u64,
    pub interaction_range_meters: u64,
    pub remote_interaction_range_meters: u64,
    pub white_pulse_radius_meters: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MegaEvoSettings {
    pub active_mega_bonus_catch_candy: u64,
    pub attack_boost_from_mega_different_type: f64,
    pub attack_boost_from_mega_same_type: f64,
    pub client_mega_cooldown_buffer_ms: u64,
    pub enable_buddy_walking_mega_energy_award: bool,
    pub enable_mega_evolve_in_lobby: bool,
    pub enable_mega_level: bool,
    pub enable_mega_level_legacy_award: bool,
    pub evolution_length_ms: String,
    pub max_candy_hoard_size: u64,
    pub num_mega_levels: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MonodepthSettings {
    pub enable_ground_suppression: bool,
    pub enable_occlusions: bool,
    pub min_ground_suppression_thresh: f64,
    pub occlusions_toggle_visible: bool,
    pub suppression_channel_id: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleMpCostPerTier {
    pub battle_level: String,
    pub bread_battle_catch_mp_cost: u64,
    pub bread_battle_remote_catch_mp_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleMpCostPerTierV2 {
    pub battle_level: u64,
    pub bread_battle_catch_mp_cost: u64,
    pub bread_battle_remote_catch_mp_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MpSettings {
    pub battle_mp_cost_per_tier: (BattleMpCostPerTier, BattleMpCostPerTier, BattleMpCostPerTier, BattleMpCostPerTier, BattleMpCostPerTier, BattleMpCostPerTier, BattleMpCostPerTierV2),
    pub debug_allow_remove_walk_quest: bool,
    pub ftue_mp_capacity: u64,
    pub mp_base_daily_limit: u64,
    pub mp_capacity: u64,
    pub mp_claim_particle_speed_multiplier: u64,
    pub num_extra_mp_from_first_loot_station: u64,
    pub num_meters_goal: u64,
    pub num_mp_from_loot_station: u64,
    pub num_mp_from_walk_quest: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NaturalArtDayNightFeatureSettings {
    pub day_end_time: String,
    pub day_start_time: String,
    pub dbs_spawn_radius_meters: u64,
    pub night_end_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NearbyPokemonSettings {
    pub ob_enabled: bool,
    pub ob_nearby_pokemon_settings_bool1: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BustSlider {
    pub max_bounds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SizeSlider {
    pub max_bounds: f64,
    pub min_bounds: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BodySliderSettings {
    pub bust_slider: BustSlider,
    pub hips_slider: BustSlider,
    pub muscle_slider: BustSlider,
    pub shoulder_slider: BustSlider,
    pub size_slider: SizeSlider,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Backpack {
    pub article_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Articles {
    pub backpack: Backpack,
    pub body_preset: Backpack,
    pub eyebrow: Backpack,
    pub eyelash: Backpack,
    pub face_preset: Backpack,
    pub gloves: Backpack,
    pub hair: Backpack,
    pub pants: Backpack,
    pub pose: Backpack,
    pub shirt: Backpack,
    pub shoes: Backpack,
    pub socks: Backpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BodyBlend {
    pub hips: f64,
    pub musculature: f64,
    pub shoulders: f64,
    pub size: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EarSelection {
    pub selection: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeys {
    pub key_position: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeysV2 {
    pub blue: f64,
    pub green: f64,
    pub key_position: f64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeysV3 {
    pub blue: u64,
    pub green: u64,
    pub key_position: u64,
    pub red: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EyeGradient {
    pub color_keys: (ColorKeys, ColorKeysV2, ColorKeysV2, ColorKeysV3),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FacePositions {
    pub brow_depth: f64,
    pub brow_vertical: f64,
    pub eye_depth: f64,
    pub eye_horizontal: f64,
    pub eye_vertical: f64,
    pub mouth_depth: f64,
    pub mouth_horizontal: f64,
    pub mouth_vertical: f64,
    pub nose_depth: f64,
    pub nose_vertical: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeysV4 {
    pub blue: f64,
    pub green: f64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeysV5 {
    pub blue: f64,
    pub green: f64,
    pub key_position: u64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HairGradient {
    pub color_keys: (ColorKeysV4, ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV5),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorKeysV6 {
    pub blue: f64,
    pub green: f64,
    pub key_position: f64,
    pub red: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SkinGradient {
    pub color_keys: (ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV6),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNeutralAvatar {
    pub articles: Articles,
    pub body_blend: BodyBlend,
    pub ear_selection: EarSelection,
    pub eye_gradient: EyeGradient,
    pub eye_selection: EarSelection,
    pub face_positions: FacePositions,
    pub hair_gradient: HairGradient,
    pub head_selection: EarSelection,
    pub mouth_selection: EarSelection,
    pub nose_selection: EarSelection,
    pub skin_gradient: SkinGradient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArticlesV2 {
    pub backpack: Backpack,
    pub belt: Backpack,
    pub body_preset: Backpack,
    pub eyebrow: Backpack,
    pub eyelash: Backpack,
    pub face_preset: Backpack,
    pub gloves: Backpack,
    pub hair: Backpack,
    pub hat: Backpack,
    pub necklace: Backpack,
    pub pants: Backpack,
    pub pose: Backpack,
    pub shirt: Backpack,
    pub shoes: Backpack,
    pub socks: Backpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BodyBlendV2 {
    pub bust: f64,
    pub hips: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FacePositionsV2 {
    pub brow_depth: f64,
    pub brow_horizontal: f64,
    pub brow_vertical: f64,
    pub eye_depth: f64,
    pub eye_horizontal: f64,
    pub eye_vertical: f64,
    pub mouth_depth: f64,
    pub mouth_horizontal: f64,
    pub mouth_vertical: f64,
    pub nose_depth: f64,
    pub nose_vertical: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SkinGradientV2 {
    pub color_keys: (ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV2, ColorKeysV6),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FemaleNeutralAvatar {
    pub articles: ArticlesV2,
    pub body_blend: BodyBlendV2,
    pub ear_selection: EarSelection,
    pub eye_gradient: EyeGradient,
    pub eye_selection: EarSelection,
    pub face_positions: FacePositionsV2,
    pub hair_gradient: HairGradient,
    pub head_selection: EarSelection,
    pub mouth_selection: EarSelection,
    pub nose_selection: EarSelection,
    pub skin_gradient: SkinGradientV2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArticlesV3 {
    pub backpack: Backpack,
    pub body_preset: Backpack,
    pub eyebrow: Backpack,
    pub eyelash: Backpack,
    pub face_preset: Backpack,
    pub gloves: Backpack,
    pub hair: Backpack,
    pub hat: Backpack,
    pub pants: Backpack,
    pub pose: Backpack,
    pub shirt: Backpack,
    pub shoes: Backpack,
    pub socks: Backpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BodyBlendV3 {
    pub hips: f64,
    pub musculature: f64,
    pub shoulders: u64,
    pub size: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaleNeutralAvatar {
    pub articles: ArticlesV3,
    pub body_blend: BodyBlendV3,
    pub ear_selection: EarSelection,
    pub eye_gradient: EyeGradient,
    pub eye_selection: EarSelection,
    pub face_positions: FacePositionsV2,
    pub hair_gradient: HairGradient,
    pub head_selection: EarSelection,
    pub mouth_selection: EarSelection,
    pub nose_selection: EarSelection,
    pub skin_gradient: SkinGradientV2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettings {
    pub body_slider_settings: BodySliderSettings,
    pub default_neutral_avatar: DefaultNeutralAvatar,
    pub female_neutral_avatar: FemaleNeutralAvatar,
    pub male_neutral_avatar: MaleNeutralAvatar,
    pub neutral_avatar_legacy_mapping_version: u64,
    pub neutral_avatar_settings_enabled: bool,
    pub neutral_avatar_settings_sentinel_value: u64,
    pub ob_move_settings_number101: bool,
    pub ob_move_settings_number120: bool,
    pub ob_move_settings_number123: bool,
    pub ob_move_settings_number124: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnboardingSettings {
    pub adventure_sync_prompt_step: u64,
    pub ar_prompt_player_level: u64,
    pub disable_initial_ar_prompt: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OptimizationsProto {
    pub adaptive_performance_min_resolution_scale: f64,
    pub adaptive_performance_update_interval: u64,
    pub optimization_physics_toggle_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateOrJoinWaitProbability {
    pub wait_time_ms: u64,
    pub weight: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LeavePartyProbablity {
    pub max_duration_ms: u64,
    pub weight: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyDarkLaunchSettings {
    pub create_or_join_wait_probability: [CreateOrJoinWaitProbability; 4],
    pub leave_party_probablity: [LeavePartyProbablity; 4],
    pub probability_to_create_percent: u64,
    pub rollout_players_per_billion: u64,
    pub update_location_enabled: bool,
    pub update_location_override_period_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Boost {
    pub daily_contribution_limit: u64,
    pub duration_multiplier: f64,
    pub supported_item_types: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyIapBoostsSettings {
    pub boost: [Boost; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyRecommendationSettings {
    pub mega_evo_combat_rating_scale: f64,
    pub mode: String,
    pub third_move_weight: f64,
    pub variance: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PhotoSettings {
    pub banner_image_url: [String; 3],
    pub iris_flags: u64,
    pub is_iris_enabled: bool,
    pub screen_capture_size: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MessageTiming {
    pub message_send_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MessageTimingV2 {
    pub message_send_before_event_seconds: u64,
    pub message_send_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventSettings {
    pub max_rsvps_per_slot: u64,
    pub max_timeslots: u64,
    pub message_timing: (MessageTiming, MessageTimingV2),
    pub rsvp_bonus_time_window_minutes: u64,
    pub rsvp_clear_inventory_minutes: u64,
    pub rsvp_invite_enabled: bool,
    pub rsvp_timeslot_duration_seconds: u64,
    pub timeslot_gap_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventSettingsV2 {
    pub event_type: String,
    pub max_rsvps_per_slot: u64,
    pub max_timeslots: u64,
    pub message_timing: (MessageTiming, MessageTimingV2),
    pub rsvp_bonus_time_window_minutes: u64,
    pub rsvp_clear_inventory_minutes: u64,
    pub rsvp_invite_enabled: bool,
    pub rsvp_timeslot_duration_seconds: u64,
    pub timeslot_gap_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlannerSettings {
    pub active_reminder_time_seconds: u64,
    pub enabled: bool,
    pub event_settings: (EventSettings, EventSettingsV2),
    pub max_pending_rsvp_invites: u64,
    pub max_rsvp_display_distance_m: u64,
    pub max_rsvp_invites: u64,
    pub max_rsvps_per_trainer: u64,
    pub nearby_rsvp_tab_enabled: bool,
    pub rsvp_count_geo_push_gateway_namespace: String,
    pub rsvp_count_push_gateway_namespace: String,
    pub rsvp_count_topper_polling_time_seconds: u64,
    pub rsvp_count_update_time_seconds: u64,
    pub send_rsvp_invite_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlayerBonusSystemSettings {
    pub day_night_evo_enabled: bool,
    pub max_bonus_duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct XpRewardV2thresholds {
    pub source: String,
    pub threshold: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlayerLevel {
    pub cp_multiplier: Vec<f64>,
    pub extended_player_level_threshold: u64,
    pub level_requirements_v2_enabled: bool,
    pub level_up_screen_v3_enabled: bool,
    pub max_egg_player_level: u64,
    pub max_encounter_player_level: u64,
    pub max_quest_encounter_player_level: u64,
    pub milestone_levels: [u64; 8],
    pub rank_num: Vec<u64>,
    pub required_experience: Vec<u64>,
    pub smore_ftue_image_url: String,
    pub xp_reward_v2_enabled: bool,
    pub xp_reward_v2_thresholds: XpRewardV2thresholds,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CurveballModifier {
    pub x: u64,
    pub y: f64,
    pub z: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LaunchVelocityMultiplier {
    pub x: u64,
    pub y: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ThrowProperties {
    pub below_ground_fly_timeout_seconds: u64,
    pub curveball_modifier: CurveballModifier,
    pub drag_snap_speed: u64,
    pub fly_timeout_duration: u64,
    pub launch_speed_threshold: f64,
    pub launch_velocity_multiplier: LaunchVelocityMultiplier,
    pub max_angular_velocity: u64,
    pub max_launch_angle: u64,
    pub max_launch_angle_height: f64,
    pub max_launch_speed: u64,
    pub min_launch_angle: u64,
    pub min_spin_particle_amount: f64,
    pub overshoot_correction: f64,
    pub throw_proerties_category: String,
    pub undershoot_correction: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokeballThrowPropertySettings {
    pub throw_properties: [ThrowProperties; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokecoinPurchaseDisplayGmt {
    pub feature_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategorySettingsInOrder {
    pub milestone_goal: u64,
    pub pokedex_category: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategorySettingsInOrderV2 {
    pub milestone_goal: u64,
    pub pokedex_category: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategorySettingsInOrderV3 {
    pub milestone_goal: u64,
    pub pokedex_category: String,
    pub visually_hidden: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategoriesSettings {
    pub client_shiny_form_check: bool,
    pub feature_enabled: bool,
    pub pokedex_category_settings_in_order: (PokedexCategorySettingsInOrder, PokedexCategorySettingsInOrder, PokedexCategorySettingsInOrderV2, PokedexCategorySettingsInOrderV2, PokedexCategorySettingsInOrderV3, PokedexCategorySettingsInOrderV3, PokedexCategorySettingsInOrderV3, PokedexCategorySettingsInOrderV3, PokedexCategorySettingsInOrderV3, PokedexCategorySettingsInOrder, PokedexCategorySettingsInOrder, PokedexCategorySettingsInOrder),
    pub search_enabled: bool,
    pub show_dex_after_new_form_enabled: bool,
    pub show_shiny_dex_celebration_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexSizeStatsSystemSettings {
    pub display_enabled: bool,
    pub enable_randomized_height_and_weight_for_wild_pokemon: bool,
    pub num_days_new_bubble_track: u64,
    pub pokedex_display_pokemon_tracked_threshold: u64,
    pub record_display_pokemon_tracked_threshold: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Pokedexv2featureFlags {
    pub celeb_v1_flag: i64,
    pub detail_battle_flag: i64,
    pub detail_v1_flag: i64,
    pub is_feature_enabled: bool,
    pub navigation_flag: u64,
    pub notification_flag: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexV2settings {
    pub max_tracked_pokemon: u64,
    pub pokemon_alert_excluded: [String; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonFxSettings {
    pub hiding_in_photo: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonHomeSettings {
    pub energy_sku_id: String,
    pub player_min_level: u64,
    pub transporter_energy_gain_per_hour: u64,
    pub transporter_max_energy: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ColorBinding {
    pub color: String,
    pub hex_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonTagSettings {
    pub color_binding: [ColorBinding; 8],
    pub max_num_tags_allowed: u64,
    pub min_player_level_for_pokemon_tagging: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PopupControlSettings {
    pub hide_aware_of_your_surroundings_popup: bool,
    pub hide_medal_earned_popup_unit_after_first_pokemon: bool,
    pub hide_weather_warning_popup: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostcardCollectionSettings {
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PowerUpPokestopsSettings {
    pub power_up_pokestops_min_player_level: u64,
    pub validate_pokestop_on_fort_search_percent: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CommonTempSettings {
    pub enable_buddy_walking_temp_evo_energy_award: bool,
    pub evolution_length_ms: String,
    pub num_temp_evo_levels: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeBoosts {
    pub boost_type: [String; 3],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimalEvoSettings {
    pub common_temp_settings: CommonTempSettings,
    pub max_candy_hoard_size: u64,
    pub type_boosts: [TypeBoosts; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PtcOauthSettings {
    pub end_time_ms: String,
    pub linking_reward_item: String,
    pub ptc_account_linking_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuickInviteSettings {
    pub enabled: bool,
    pub suggested_players_variation: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidLobbyCounterSettings {
    pub map_display_enabled: bool,
    pub max_count_to_update: u64,
    pub nearby_display_enabled: bool,
    pub polling_enabled: bool,
    pub polling_interval_ms: u64,
    pub polling_radius_meters: u64,
    pub publish_cutoff_time_ms: u64,
    pub publish_enabled: bool,
    pub show_counter_radius_meters: u64,
    pub subscribe_enabled: bool,
    pub subscribe_s2_level: u64,
    pub subscription_namespace: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonMusicOverrides {
    pub battle_music_key: String,
    pub forms: [String; 2],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonMusicOverridesV2 {
    pub battle_music_key: String,
    pub forms: [String; 3],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonMusicOverridesV3 {
    pub battle_music_key: String,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonMusicOverridesV4 {
    pub battle_music_key: String,
    pub forms: [String; 4],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonMusicOverridesV5 {
    pub battle_music_key: String,
    pub forms: Option<[String; 2]>,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidFeatureFlags {
    pub use_cached_raid_boss_pokemon: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidLevelMusicOverrides {
    pub battle_music_key: String,
    pub raid_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettings {
    pub ablcemdnbkc: bool,
    pub boot_cutoff_ms: u64,
    pub boot_raid_enabled: bool,
    pub boot_solo_ms: u64,
    pub can_invite_friends_in_person: bool,
    pub can_invite_friends_remotely: bool,
    pub failed_friend_invite_info_enabled: bool,
    pub fetch_profile_from_social_enabled: bool,
    pub friend_invite_cutoff_time_sec: u64,
    pub friend_requests_enabled: bool,
    pub invite_cooldown_duration_millis: String,
    pub max_num_friend_invites: u64,
    pub max_num_friend_invites_per_action: u64,
    pub max_players_per_lobby: u64,
    pub max_remote_players_per_lobby: u64,
    pub max_remote_raid_passes: u64,
    pub min_players_to_boot: u64,
    pub ob_raid_client_settings_number1: u64,
    pub ob_raid_client_settings_number29: u64,
    pub pokemon_music_overrides: Vec<PokemonMusicOverridesV5>,
    pub popup_time_ms: u64,
    pub raid_feature_flags: RaidFeatureFlags,
    pub raid_level_music_overrides: [RaidLevelMusicOverrides; 5],
    pub remote_damage_modifier: u64,
    pub remote_raid_distance_validation: bool,
    pub remote_raid_enabled: bool,
    pub remote_raids_min_player_level: u64,
    pub unsupported_raid_levels_for_friend_invites: [String; 2],
    pub unsupported_remote_raid_levels: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RecentFeatures {
    pub description: String,
    pub feature_name: String,
    pub icon_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RecentFeaturesV2 {
    pub description: String,
    pub feature_name: String,
    pub icon_type: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReferralSettings {
    pub add_referrer_grace_period_ms: String,
    pub deep_link_url: String,
    pub feature_enabled: bool,
    pub image_share_referral_enabled: bool,
    pub min_num_days_without_session_for_lapsed_player: u64,
    pub recent_features: (RecentFeatures, RecentFeaturesV2, RecentFeatures),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoteTradeSettings {
    pub enabled: bool,
    pub max_remote_trades_per_day: u64,
    pub pokemon_untradable_days: u64,
    pub requested_pokemon_count: u64,
    pub tagging_unlock_point_threshold: u64,
    pub time_limit_minutes: u64,
    pub trade_expiry_reminder_minutes: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteBadgeSettings {
    pub target: [u64; 4],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientBreadcrumbSettings {
    pub as_fallback_foreground_reporting_inverval_s: u64,
    pub session_duration_m: u64,
    pub update_interval_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteCreationSettings {
    pub allowable_gps_drift_meters: u64,
    pub allow_appeals: bool,
    pub client_breadcrumb_settings: ClientBreadcrumbSettings,
    pub creation_limit_per_window: u64,
    pub creation_limit_window_days: u64,
    pub disabled_tags: [String; 9],
    pub duration_buffer_s: u64,
    pub duration_distance_to_speed_multiplier: f64,
    pub enabled: bool,
    pub enable_immediate_route_ingestion: bool,
    pub interaction_range_meters: u64,
    pub max_client_map_panning_distance_m: u64,
    pub max_description_length: u64,
    pub max_distance_from_anchor_pots_m: u64,
    pub max_distance_warning_distance_meters: u64,
    pub max_name_length: u64,
    pub max_open_routes: u64,
    pub max_post_punishment_ban_time_ms: String,
    pub max_recall_count_threshold: u64,
    pub max_recording_speed_meters_per_second: u64,
    pub max_submission_count_threshold: u64,
    pub max_total_distance_m: u64,
    pub min_breadcrumb_distance_delta_meters: u64,
    pub min_player_level: u64,
    pub min_total_distance_m: u64,
    pub moderation_enabled: bool,
    pub resume_range_meters: u64,
    pub show_submission_status_history: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteDiscoverySettings {
    pub enable_badge_routes_discovery: bool,
    pub max_badge_routes_discovery_spanner_txns: u64,
    pub max_client_map_panning_distance_meters: u64,
    pub max_favorite_routes: u64,
    pub max_routes_viewable: u64,
    pub nearby_visible_radius_meters: u64,
    pub new_route_threshold: u64,
    pub popular_routes_fraction: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PinMessage {
    pub category: [String; 2],
    pub key: String,
    pub level_required: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PinMessageV2 {
    pub category: [String; 1],
    pub key: String,
    pub level_required: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RoutePinSettings {
    pub creator_max: u64,
    pub max_distance_from_route_m: u64,
    pub max_named_stickers_per_pin: u64,
    pub max_pins_for_client_display: u64,
    pub max_pins_per_route: u64,
    pub pin_message: (PinMessage, PinMessageV2, PinMessageV2, PinMessageV2),
    pub player_max: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RoutePlaySettings {
    pub bonus_active_distance_threshold_meters: u64,
    pub enable_route_rating_details: bool,
    pub margin_minimum_meters: u64,
    pub margin_percentage: f64,
    pub min_player_level: u64,
    pub ob_route_play_settings_number29: u64,
    pub ob_route_play_settings_number30: u64,
    pub ob_route_play_settings_number33: u64,
    pub ob_route_play_settings_number45: u64,
    pub resume_range_meters: u64,
    pub route_engagement_stats_shard_count: u64,
    pub route_expiration_minutes: u64,
    pub route_pause_distance_m: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RoutesNearbyNotifSettings {
    pub max_notifs: u64,
    pub time_between_notifs_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RoutesPartyPlayInteropSettings {
    pub consumption_interoperable: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteStampCategorySettings {
    pub active: bool,
    pub category: String,
    pub collection_size: u64,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SharedFusionSettings {
    pub fusion_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SharedMoveSettings {
    pub purified_third_move_unlock_candy_multiplier: f64,
    pub purified_third_move_unlock_stardust_multiplier: f64,
    pub shadow_third_move_unlock_candy_multiplier: f64,
    pub shadow_third_move_unlock_stardust_multiplier: f64,
    pub shared_move_settings_bool1: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MappingsV2 {
    pub form: String,
    pub r#move: String,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MappingsV3 {
    pub r#move: String,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OptionalBmoveOverride {
    pub r#move: String,
    pub r#override: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MappingsV4 {
    pub form: String,
    pub r#move: String,
    pub optional_bmove_override: OptionalBmoveOverride,
    pub optional_cmove_override: OptionalBmoveOverride,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MappingsV5 {
    pub form: Option<String>,
    pub r#move: String,
    pub optional_bmove_override: Option<OptionalBmoveOverride>,
    pub optional_cmove_override: Option<OptionalBmoveOverride>,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SourdoughMoveMappingSettings {
    pub mappings: Vec<MappingsV5>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SpecialEggSettings {
    pub enabled: bool,
    pub map_icon_enabled: bool,
    pub min_level: u64,
    pub xp_reward: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BalloonGiftSettings {
    pub balloon_auto_dismiss_time_ms: u64,
    pub enable_balloon_gift: bool,
    pub enable_balloon_web_view: bool,
    pub get_wasabi_ad_rpc_interval_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SponsoredGeofenceGiftSettings {
    pub balloon_gift_settings: BalloonGiftSettings,
    pub enable_sponsored_geofence_gift: bool,
    pub fullscreen_disable_exit_button_time_ms: u64,
    pub gift_persistence_time_ms: u64,
    pub map_presentation_time_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SquashSettings {
    pub daily_squash_limit: u64,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StampCollectionSettings {
    pub default_color_pool: [String; 4],
    pub gifting_min_friendship_level: u64,
    pub min_player_level: u64,
    pub version: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TierBoosts {
    pub num_boost_icons: u64,
    pub num_stationed: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StationedPokemonTableSettings {
    pub stationed_pokemon_table_enum: String,
    pub tier_boosts: [TierBoosts; 20],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategory {
    pub active: bool,
    pub category: String,
    pub preferred_category_icon: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategoryV2 {
    pub active: bool,
    pub category: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategorySettings {
    pub enabled: bool,
    pub sticker_category: (StickerCategory, StickerCategoryV2, StickerCategory, StickerCategory, StickerCategory, StickerCategory, StickerCategory),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StyleShopSettings {
    pub cart_disabled: bool,
    pub recommended_item_icon_names: [String; 5],
    pub sets_enabled: bool,
    pub v2_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TicketGiftingSettings {
    pub daily_player_gifting_limit: u64,
    pub min_player_level: u64,
    pub min_required_friendship_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TodayViewSettings {
    pub favorite_quest_enabled: bool,
    pub notification_server_authoritative: bool,
    pub pin_claimable_quest_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub count: u64,
    pub item_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialItemRewards {
    pub item: [Item; 2],
    pub tutorial: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialItemRewardsV2 {
    pub tutorial: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialSettings {
    pub friends_tutorial_enabled: bool,
    pub gifts_tutorial_enabled: bool,
    pub lucky_friend_tutorial_enabled: bool,
    pub lucky_trade_tutorial_enabled: bool,
    pub lures_tutorial_enabled: bool,
    pub pokemon_tagging_tutorial_enabled: bool,
    pub razzberry_catch_tutorial_enabled: bool,
    pub revives_and_potions_tutorial_enabled: bool,
    pub task_help_tutorials_enabled: bool,
    pub trading_tutorial_enabled: bool,
    pub tutorial_item_rewards: (TutorialItemRewards, TutorialItemRewardsV2),
    pub type_effectiveness_tips_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UsernameSuggestionSettings {
    pub feature_enabled: bool,
    pub num_suggestions_displayed: u64,
    pub num_suggestions_generated: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VerboseLogCombatSettings {
    pub client_log_decay_time_in_hours: u64,
    pub enable_combat_challenge_setup: bool,
    pub enable_combat_vs_seeker_setup: bool,
    pub enable_core_combat: bool,
    pub enabled: bool,
    pub enable_exception_caught: bool,
    pub enable_on_application_focus: bool,
    pub enable_on_application_pause: bool,
    pub enable_on_application_quit: bool,
    pub enable_rpc_error_data: bool,
    pub enable_web_socket: bool,
    pub progress_token_priority: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VerboseLogRaidSettings {
    pub enable_attack_raid: bool,
    pub enable_client_prediction_inconsistency_data: bool,
    pub enable_exception_caught: bool,
    pub enable_get_raid_details: bool,
    pub enable_join_lobby: bool,
    pub enable_leave_lobby: bool,
    pub enable_on_application_focus: bool,
    pub enable_on_application_pause: bool,
    pub enable_on_application_quit: bool,
    pub enable_progress_token: bool,
    pub enable_rpc_error_data: bool,
    pub enable_send_raid_invitation: bool,
    pub enable_start_raid_battle: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VistaGeneralSettings {
    pub is_feature_enabled: bool,
    pub is_vista_battle_enabled: bool,
    pub is_vista_encounter_enabled: bool,
    pub is_vista_map_enabled: bool,
    pub is_vista_spawns_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MaxBattleConfig {
    pub bad_network_warning_threshold_turns: String,
    pub battle_end_timeout_threshold_ms: String,
    pub dead_network_disconnect_threshold_turns: String,
    pub no_opponent_connection_disconnect_threshold_turns: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VnextBattleConfig {
    pub max_battle_config: MaxBattleConfig,
    pub pvp_battle_config: MaxBattleConfig,
    pub raids_battle_config: MaxBattleConfig,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerClientSettings {
    pub allowed_vs_seeker_league_template_id: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerSchedules {
    pub end_time_ms: String,
    pub start_time_ms: String,
    pub vs_seeker_league_tempalte_id: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerSchedulesV2 {
    pub end_time_ms: String,
    pub start_time_ms: String,
    pub vs_seeker_league_tempalte_id: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SeasonSchedules {
    pub blog_url: String,
    pub description_key: String,
    pub season_title: String,
    pub vs_seeker_schedules: Vec<VsSeekerSchedules>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerScheduleSettings {
    pub enable_combat_hub_main: bool,
    pub enable_combat_league_view: bool,
    pub enable_today_view: bool,
    pub season_schedules: [SeasonSchedules; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WeatherBonusSettings {
    pub attack_bonus_multiplier: f64,
    pub cp_base_level_bonus: u64,
    pub guaranteed_individual_values: u64,
    pub raid_encounter_cp_base_level_bonus: u64,
    pub raid_encounter_guaranteed_individual_values: u64,
    pub stardust_bonus_multiplier: f64,
}

crate::masterfile_entry!(AccessibilitySettingsEntry, AccessibilitySettingsEntryData, accessibility_settings: AccessibilitySettings);

crate::masterfile_entry!(AdditiveSceneSettingsEntry, AdditiveSceneSettingsEntryData, additive_scene_settings: AdditiveSceneSettings);

crate::masterfile_entry!(AddressablePokemonSettingsEntry, AddressablePokemonSettingsEntryData, addressable_pokemon_settings: AddressablePokemonSettings);

crate::masterfile_entry!(AddressBookImportSettingsEntry, AddressBookImportSettingsEntryData, address_book_import_settings: AddressBookImportSettings);

crate::masterfile_entry!(AdvancedSettingsEntry, AdvancedSettingsEntryData, advanced_settings: AdvancedSettings);

crate::masterfile_entry!(ArPhotoFeatureFlagsEntry, ArPhotoFeatureFlagsEntryData, ar_photo_feature_flags: ArPhotoFeatureFlags);

crate::masterfile_entry!(ArTelemetrySettingsEntry, ArTelemetrySettingsEntryData, ar_telemetry_settings: ArTelemetrySettings);

crate::masterfile_entry!(AssetRefreshProtoEntry, AssetRefreshProtoEntryData, asset_refresh_proto: AssetRefreshProto);

crate::masterfile_entry!(AvatarFeatureFlagsEntry, AvatarFeatureFlagsEntryData, avatar_feature_flags: AvatarFeatureFlags);

crate::masterfile_entry!(AvatarStoreFooterFlagsEntry, AvatarStoreFooterFlagsEntryData, avatar_store_footer_flags: AvatarStoreFooterFlags);

crate::masterfile_entry!(AvatarStoreSubcategoryFilteringFlagsEntry, AvatarStoreSubcategoryFilteringFlagsEntryData, avatar_store_subcategory_filtering_flags: AvatarStoreSubcategoryFilteringFlags);

crate::masterfile_entry!(BackgroundModeSettingsEntry, BackgroundModeSettingsEntryData, background_mode_settings: BackgroundModeSettings);

crate::masterfile_entry!(BattleAnimationSettingsEntry, BattleAnimationSettingsEntryData, battle_animation_settings: BattleAnimationSettings);

crate::masterfile_entry!(BattleHubBadgeSettingsEntry, BattleHubBadgeSettingsEntryData, battle_hub_badge_settings: BattleHubBadgeSettings);

crate::masterfile_entry!(BattleHubOrderSettingsEntry, BattleHubOrderSettingsEntryData, battle_hub_order_settings: BattleHubOrderSettings);

crate::masterfile_entry!(BattleInputBufferSettingsEntry, BattleInputBufferSettingsEntryData, battle_input_buffer_settings: BattleInputBufferSettings);

crate::masterfile_entry!(BattlePartySettingsEntry, BattlePartySettingsEntryData, battle_party_settings: BattlePartySettings);

crate::masterfile_entry!(BattleSettingsEntry, BattleSettingsEntryData, battle_settings: BattleSettings);

crate::masterfile_entry!(BattleVisualSettingsEntry, BattleVisualSettingsEntryData, battle_visual_settings: BattleVisualSettings);

crate::masterfile_entry!(BelugaPokemonWhitelistEntry, BelugaPokemonWhitelistEntryData, beluga_pokemon_whitelist: BelugaPokemonWhitelist);

crate::masterfile_entry!(BestFriendsPlusSettingsEntry, BestFriendsPlusSettingsEntryData, best_friends_plus_settings: BestFriendsPlusSettings);

crate::masterfile_entry!(BreadBattleClientSettingsEntry, BreadBattleClientSettingsEntryData, bread_battle_client_settings: BreadBattleClientSettings);

crate::masterfile_entry!(BreadFeatureFlagsEntry, BreadFeatureFlagsEntryData, bread_feature_flags: BreadFeatureFlags);

crate::masterfile_entry!(BreadLobbyCounterSettingsEntry, BreadLobbyCounterSettingsEntryData, bread_lobby_counter_settings: BreadLobbyCounterSettings);

crate::masterfile_entry!(BreadLobbyUpdateSettingsEntry, BreadLobbyUpdateSettingsEntryData, bread_lobby_update_settings: BreadLobbyUpdateSettings);

crate::masterfile_entry!(BreadMoveMappingsEntry, BreadMoveMappingsEntryData, bread_move_mappings: BreadMoveMappings);

crate::masterfile_entry!(BreadPokemonScalingSettingsEntry, BreadPokemonScalingSettingsEntryData, bread_pokemon_scaling_settings: BreadPokemonScalingSettings);

crate::masterfile_entry!(BreadSettingsEntry, BreadSettingsEntryData, bread_settings: BreadSettings);

crate::masterfile_entry!(BuddyEncounterCameoSettingsEntry, BuddyEncounterCameoSettingsEntryData, buddy_encounter_cameo_settings: BuddyEncounterCameoSettings);

crate::masterfile_entry!(BuddyHungerSettingsEntry, BuddyHungerSettingsEntryData, buddy_hunger_settings: BuddyHungerSettings);

crate::masterfile_entry!(BuddyInteractionSettingsEntry, BuddyInteractionSettingsEntryData, buddy_interaction_settings: BuddyInteractionSettings);

crate::masterfile_entry!(BuddySwapSettingsEntry, BuddySwapSettingsEntryData, buddy_swap_settings: BuddySwapSettings);

crate::masterfile_entry!(BuddyWalkSettingsEntry, BuddyWalkSettingsEntryData, buddy_walk_settings: BuddyWalkSettings);

crate::masterfile_entry!(BulkHealingSettingsEntry, BulkHealingSettingsEntryData, bulk_healing_settings: BulkHealingSettings);

crate::masterfile_entry!(ButterflyCollectorSettingsEntry, ButterflyCollectorSettingsEntryData, butterfly_collector_settings: ButterflyCollectorSettings);

crate::masterfile_entry!(CampfireSettingsEntry, CampfireSettingsEntryData, campfire_settings: CampfireSettings);

crate::masterfile_entry!(CatchRadiusMultiplierSettingsEntry, CatchRadiusMultiplierSettingsEntryData, catch_radius_multiplier_settings: CatchRadiusMultiplierSettings);

crate::masterfile_entry!(CombatCompetitiveSeasonSettingsEntry, CombatCompetitiveSeasonSettingsEntryData, combat_competitive_season_settings: CombatCompetitiveSeasonSettings);

crate::masterfile_entry!(CombatLeagueSettingsEntry, CombatLeagueSettingsEntryData, combat_league_settings: CombatLeagueSettings);

crate::masterfile_entry!(CombatSettingsEntry, CombatSettingsEntryData, combat_settings: CombatSettings);

crate::masterfile_entry!(CombatStatStageSettingsEntry, CombatStatStageSettingsEntryData, combat_stat_stage_settings: CombatStatStageSettings);

crate::masterfile_entry!(ContestSettingsEntry, ContestSettingsEntryData, contest_settings: ContestSettings);

crate::masterfile_entry!(ConversationSettingsEntry, ConversationSettingsEntryData, conversation_settings: ConversationSettings);

crate::masterfile_entry!(CrossGameSocialSettingsEntry, CrossGameSocialSettingsEntryData, cross_game_social_settings: CrossGameSocialSettings);

crate::masterfile_entry!(DailyAdventureIncenseSettingsEntry, DailyAdventureIncenseSettingsEntryData, daily_adventure_incense_settings: DailyAdventureIncenseSettings);

crate::masterfile_entry!(DeepLinkingSettingsEntry, DeepLinkingSettingsEntryData, deep_linking_settings: DeepLinkingSettings);

crate::masterfile_entry!(EggHatchImprovementsSettingsEntry, EggHatchImprovementsSettingsEntryData, egg_hatch_improvements_settings: EggHatchImprovementsSettings);

crate::masterfile_entry!(EncounterSettingsEntry, EncounterSettingsEntryData, encounter_settings: EncounterSettings);

crate::masterfile_entry!(EventPlannerPopularNotificationSettingsEntry, EventPlannerPopularNotificationSettingsEntryData, event_planner_popular_notification_settings: EventPlannerPopularNotificationSettings);

crate::masterfile_entry!(ExternalAddressableAssetsSettingsEntry, ExternalAddressableAssetsSettingsEntryData, external_addressable_assets_settings: ExternalAddressableAssetsSettings);

crate::masterfile_entry!(FeatureUnlockLevelSettingsEntry, FeatureUnlockLevelSettingsEntryData, feature_unlock_level_settings: FeatureUnlockLevelSettings);

crate::masterfile_entry!(GeotargetedQuestSettingsEntry, GeotargetedQuestSettingsEntryData, geotargeted_quest_settings: GeotargetedQuestSettings);

crate::masterfile_entry!(GiftingSettingsEntry, GiftingSettingsEntryData, gifting_settings: GiftingSettings);

crate::masterfile_entry!(GuiSearchSettingsEntry, GuiSearchSettingsEntryData, gui_search_settings: GuiSearchSettings);

crate::masterfile_entry!(GymBadgeSettingsEntry, GymBadgeSettingsEntryData, gym_badge_settings: GymBadgeSettings);

crate::masterfile_entry!(HapticsSettingsEntry, HapticsSettingsEntryData, haptics_settings: HapticsSettings);

crate::masterfile_entry!(IapSettingsEntry, IapSettingsEntryData, iap_settings: IapSettings);

crate::masterfile_entry!(IbfcLightweightSettingsEntry, IbfcLightweightSettingsEntryData, ibfc_lightweight_settings: IbfcLightweightSettings);

crate::masterfile_entry!(ImpressionTrackingSettingsEntry, ImpressionTrackingSettingsEntryData, impression_tracking_settings: ImpressionTrackingSettings);

crate::masterfile_entry!(InAppSurveySettingsEntry, InAppSurveySettingsEntryData, in_app_survey_settings: InAppSurveySettings);

crate::masterfile_entry!(IncidentPrioritySettingsEntry, IncidentPrioritySettingsEntryData, incident_priority_settings: IncidentPrioritySettings);

crate::masterfile_entry!(IncidentVisibilitySettingsEntry, IncidentVisibilitySettingsEntryData, incident_visibility_settings: IncidentVisibilitySettings);

crate::masterfile_entry!(InventorySettingsEntry, InventorySettingsEntryData, inventory_settings: InventorySettings);

crate::masterfile_entry!(IrisSocialSettingsEntry, IrisSocialSettingsEntryData, iris_social_settings: IrisSocialSettings);

crate::masterfile_entry!(IrisSocialUxFunnelSettingsEntry, IrisSocialUxFunnelSettingsEntryData, iris_social_ux_funnel_settings: IrisSocialUxFunnelSettings);

crate::masterfile_stub_entry!(ItemCurrencyValuesEntry, ItemCurrencyValuesEntryData);

crate::masterfile_entry!(ItemInventoryUpdateSettingsEntry, ItemInventoryUpdateSettingsEntryData, item_inventory_update_settings: ItemInventoryUpdateSettings);

crate::masterfile_entry!(JoinRaidViaFriendListSettingsEntry, JoinRaidViaFriendListSettingsEntryData, join_raid_via_friend_list_settings: JoinRaidViaFriendListSettings);

crate::masterfile_entry!(LanguageSelectorSettingsEntry, LanguageSelectorSettingsEntryData, language_selector_settings: LanguageSelectorSettings);

crate::masterfile_entry!(LuckyPokemonSettingsEntry, LuckyPokemonSettingsEntryData, lucky_pokemon_settings: LuckyPokemonSettings);

crate::masterfile_entry!(MainMenuChangesEntry, MainMenuChangesEntryData, main_menu_changes: MainMenuChanges);

crate::masterfile_entry!(MapDisplaySettingsEntry, MapDisplaySettingsEntryData, map_display_settings: MapDisplaySettings);

crate::masterfile_entry!(MapObjectsInteractionRangeSettingsEntry, MapObjectsInteractionRangeSettingsEntryData, map_objects_interaction_range_settings: MapObjectsInteractionRangeSettings);

crate::masterfile_entry!(MegaEvoSettingsEntry, MegaEvoSettingsEntryData, mega_evo_settings: MegaEvoSettings);

crate::masterfile_entry!(MonodepthSettingsEntry, MonodepthSettingsEntryData, monodepth_settings: MonodepthSettings);

crate::masterfile_entry!(MpSettingsEntry, MpSettingsEntryData, mp_settings: MpSettings);

crate::masterfile_entry!(NaturalArtDayNightFeatureSettingsEntry, NaturalArtDayNightFeatureSettingsEntryData, natural_art_day_night_feature_settings: NaturalArtDayNightFeatureSettings);

crate::masterfile_entry!(NearbyPokemonSettingsEntry, NearbyPokemonSettingsEntryData, nearby_pokemon_settings: NearbyPokemonSettings);

crate::masterfile_entry!(NeutralAvatarSettingsEntry, NeutralAvatarSettingsEntryData, neutral_avatar_settings: NeutralAvatarSettings);

crate::masterfile_entry!(OnboardingSettingsEntry, OnboardingSettingsEntryData, onboarding_settings: OnboardingSettings);

crate::masterfile_entry!(OptimizationsProtoEntry, OptimizationsProtoEntryData, optimizations_proto: OptimizationsProto);

crate::masterfile_entry!(PartyDarkLaunchSettingsEntry, PartyDarkLaunchSettingsEntryData, party_dark_launch_settings: PartyDarkLaunchSettings);

crate::masterfile_entry!(PartyIapBoostsSettingsEntry, PartyIapBoostsSettingsEntryData, party_iap_boosts_settings: PartyIapBoostsSettings);

crate::masterfile_entry!(PartyRecommendationSettingsEntry, PartyRecommendationSettingsEntryData, party_recommendation_settings: PartyRecommendationSettings);

crate::masterfile_entry!(PhotoSettingsEntry, PhotoSettingsEntryData, photo_settings: PhotoSettings);

crate::masterfile_entry!(PlannerSettingsEntry, PlannerSettingsEntryData, planner_settings: PlannerSettings);

crate::masterfile_entry!(PlayerBonusSystemSettingsEntry, PlayerBonusSystemSettingsEntryData, player_bonus_system_settings: PlayerBonusSystemSettings);

crate::masterfile_entry!(PlayerLevelEntry, PlayerLevelEntryData, player_level: PlayerLevel);

crate::masterfile_entry!(PokeballThrowPropertySettingsEntry, PokeballThrowPropertySettingsEntryData, pokeball_throw_property_settings: PokeballThrowPropertySettings);

crate::masterfile_entry!(PokecoinPurchaseDisplayGmtEntry, PokecoinPurchaseDisplayGmtEntryData, pokecoin_purchase_display_gmt: PokecoinPurchaseDisplayGmt);

crate::masterfile_entry!(PokedexCategoriesSettingsEntry, PokedexCategoriesSettingsEntryData, pokedex_categories_settings: PokedexCategoriesSettings);

crate::masterfile_entry!(PokedexSizeStatsSystemSettingsEntry, PokedexSizeStatsSystemSettingsEntryData, pokedex_size_stats_system_settings: PokedexSizeStatsSystemSettings);

crate::masterfile_entry!(Pokedexv2featureFlagsEntry, Pokedexv2featureFlagsEntryData, pokedexv2_feature_flags: Pokedexv2featureFlags);

crate::masterfile_entry!(PokedexV2settingsEntry, PokedexV2settingsEntryData, pokedex_v2_settings: PokedexV2settings);

crate::masterfile_entry!(PokemonFxSettingsEntry, PokemonFxSettingsEntryData, pokemon_fx_settings: PokemonFxSettings);

crate::masterfile_entry!(PokemonHomeSettingsEntry, PokemonHomeSettingsEntryData, pokemon_home_settings: PokemonHomeSettings);

crate::masterfile_entry!(PokemonTagSettingsEntry, PokemonTagSettingsEntryData, pokemon_tag_settings: PokemonTagSettings);

crate::masterfile_entry!(PopupControlSettingsEntry, PopupControlSettingsEntryData, popup_control_settings: PopupControlSettings);

crate::masterfile_entry!(PostcardCollectionSettingsEntry, PostcardCollectionSettingsEntryData, postcard_collection_settings: PostcardCollectionSettings);

crate::masterfile_entry!(PowerUpPokestopsSettingsEntry, PowerUpPokestopsSettingsEntryData, power_up_pokestops_settings: PowerUpPokestopsSettings);

crate::masterfile_entry!(PrimalEvoSettingsEntry, PrimalEvoSettingsEntryData, primal_evo_settings: PrimalEvoSettings);

crate::masterfile_entry!(PtcOauthSettingsEntry, PtcOauthSettingsEntryData, ptc_oauth_settings: PtcOauthSettings);

crate::masterfile_stub_entry!(QuestDialogueInboxSettingsEntry, QuestDialogueInboxSettingsEntryData);

crate::masterfile_entry!(QuickInviteSettingsEntry, QuickInviteSettingsEntryData, quick_invite_settings: QuickInviteSettings);

crate::masterfile_stub_entry!(RaidEntryCostSettingsEntry, RaidEntryCostSettingsEntryData);

crate::masterfile_entry!(RaidLobbyCounterSettingsEntry, RaidLobbyCounterSettingsEntryData, raid_lobby_counter_settings: RaidLobbyCounterSettings);

crate::masterfile_entry!(RaidSettingsEntry, RaidSettingsEntryData, raid_settings: RaidSettings);

crate::masterfile_entry!(ReferralSettingsEntry, ReferralSettingsEntryData, referral_settings: ReferralSettings);

crate::masterfile_entry!(RemoteTradeSettingsEntry, RemoteTradeSettingsEntryData, remote_trade_settings: RemoteTradeSettings);

crate::masterfile_entry!(RouteBadgeSettingsEntry, RouteBadgeSettingsEntryData, route_badge_settings: RouteBadgeSettings);

crate::masterfile_entry!(RouteCreationSettingsEntry, RouteCreationSettingsEntryData, route_creation_settings: RouteCreationSettings);

crate::masterfile_entry!(RouteDiscoverySettingsEntry, RouteDiscoverySettingsEntryData, route_discovery_settings: RouteDiscoverySettings);

crate::masterfile_entry!(RoutePinSettingsEntry, RoutePinSettingsEntryData, route_pin_settings: RoutePinSettings);

crate::masterfile_entry!(RoutePlaySettingsEntry, RoutePlaySettingsEntryData, route_play_settings: RoutePlaySettings);

crate::masterfile_entry!(RoutesNearbyNotifSettingsEntry, RoutesNearbyNotifSettingsEntryData, routes_nearby_notif_settings: RoutesNearbyNotifSettings);

crate::masterfile_entry!(RoutesPartyPlayInteropSettingsEntry, RoutesPartyPlayInteropSettingsEntryData, routes_party_play_interop_settings: RoutesPartyPlayInteropSettings);

crate::masterfile_entry!(RouteStampCategorySettingsEntry, RouteStampCategorySettingsEntryData, route_stamp_category_settings: RouteStampCategorySettings);

crate::masterfile_entry!(SharedFusionSettingsEntry, SharedFusionSettingsEntryData, shared_fusion_settings: SharedFusionSettings);

crate::masterfile_entry!(SharedMoveSettingsEntry, SharedMoveSettingsEntryData, shared_move_settings: SharedMoveSettings);

crate::masterfile_stub_entry!(SoftSfidaSettingsEntry, SoftSfidaSettingsEntryData);

crate::masterfile_entry!(SourdoughMoveMappingSettingsEntry, SourdoughMoveMappingSettingsEntryData, sourdough_move_mapping_settings: SourdoughMoveMappingSettings);

crate::masterfile_entry!(SpecialEggSettingsEntry, SpecialEggSettingsEntryData, special_egg_settings: SpecialEggSettings);

crate::masterfile_entry!(SponsoredGeofenceGiftSettingsEntry, SponsoredGeofenceGiftSettingsEntryData, sponsored_geofence_gift_settings: SponsoredGeofenceGiftSettings);

crate::masterfile_entry!(SquashSettingsEntry, SquashSettingsEntryData, squash_settings: SquashSettings);

crate::masterfile_entry!(StampCollectionSettingsEntry, StampCollectionSettingsEntryData, stamp_collection_settings: StampCollectionSettings);

crate::masterfile_entry!(StationedPokemonTableSettingsEntry, StationedPokemonTableSettingsEntryData, stationed_pokemon_table_settings: StationedPokemonTableSettings);

crate::masterfile_entry!(StickerCategorySettingsEntry, StickerCategorySettingsEntryData, sticker_category_settings: StickerCategorySettings);

crate::masterfile_entry!(StyleShopSettingsEntry, StyleShopSettingsEntryData, style_shop_settings: StyleShopSettings);

crate::masterfile_entry!(TicketGiftingSettingsEntry, TicketGiftingSettingsEntryData, ticket_gifting_settings: TicketGiftingSettings);

crate::masterfile_entry!(TodayViewSettingsEntry, TodayViewSettingsEntryData, today_view_settings: TodayViewSettings);

crate::masterfile_entry!(TutorialSettingsEntry, TutorialSettingsEntryData, tutorial_settings: TutorialSettings);

crate::masterfile_entry!(UsernameSuggestionSettingsEntry, UsernameSuggestionSettingsEntryData, username_suggestion_settings: UsernameSuggestionSettings);

crate::masterfile_entry!(VerboseLogCombatSettingsEntry, VerboseLogCombatSettingsEntryData, verbose_log_combat_settings: VerboseLogCombatSettings);

crate::masterfile_entry!(VerboseLogRaidSettingsEntry, VerboseLogRaidSettingsEntryData, verbose_log_raid_settings: VerboseLogRaidSettings);

crate::masterfile_entry!(VistaGeneralSettingsEntry, VistaGeneralSettingsEntryData, vista_general_settings: VistaGeneralSettings);

crate::masterfile_entry!(VnextBattleConfigEntry, VnextBattleConfigEntryData, vnext_battle_config: VnextBattleConfig);

crate::masterfile_entry!(VsSeekerClientSettingsEntry, VsSeekerClientSettingsEntryData, vs_seeker_client_settings: VsSeekerClientSettings);

crate::masterfile_entry!(VsSeekerScheduleSettingsEntry, VsSeekerScheduleSettingsEntryData, vs_seeker_schedule_settings: VsSeekerScheduleSettings);

crate::masterfile_entry!(WeatherBonusSettingsEntry, WeatherBonusSettingsEntryData, weather_bonus_settings: WeatherBonusSettings);

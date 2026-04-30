// Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ItemCurrencyValues;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuestDialogueInboxSettings;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RaidEntryCostSettings;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SoftSfidaSettings;

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
pub struct ArPhotoFeatureFlagsCaptureSettings {
    pub contextual_check_interval_seconds: f64,
    pub countdown_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsErrorReportingSettings {
    pub is_enabled: bool,
    pub max_events_per_sliding_window: u64,
    pub max_total_events_before_shutdown: String,
    pub percent_chance_player_sends: u64,
    pub sliding_window_length_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsIncentives {
    pub incentive_icon_name: String,
    pub incentive_string_key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedForms {
    pub excluded_forms: [String; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV2 {
    pub excluded_forms: [String; 19],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV3 {
    pub excluded_forms: [String; 18],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV4 {
    pub excluded_forms: [String; 2],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV5 {
    pub excluded_forms: [String; 5],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV6 {
    pub excluded_forms: [String; 4],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV7 {
    pub excluded_forms: [String; 9],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlagsPokemonWithExcludedFormsV8 {
    pub excluded_forms: [String; 3],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArPhotoFeatureFlags {
    pub ar_menu_entry_enabled: i64,
    pub capture_settings: ArPhotoFeatureFlagsCaptureSettings,
    pub error_reporting_settings: ArPhotoFeatureFlagsErrorReportingSettings,
    pub excluded_pokemon_ids: Vec<String>,
    pub incentives: [ArPhotoFeatureFlagsIncentives; 2],
    pub incentives_enabled: bool,
    pub is_feature_enabled: bool,
    pub lapsed_days_cutoff: u64,
    pub main_menu_entry_enabled: i64,
    pub new_days_cutoff: u64,
    pub pokemon_with_excluded_forms: Vec<serde_json::Value>,
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
pub struct BackgroundModeSettings {
    pub weekly_fitness_goal_level1_distance_km: u64,
    pub weekly_fitness_goal_level2_distance_km: u64,
    pub weekly_fitness_goal_level3_distance_km: u64,
    pub weekly_fitness_goal_level4_distance_km: u64,
    pub weekly_fitness_goal_reminder_km: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettingsCombatAnimationConfigurationFastAttackSettings {}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettingsCombatAnimationConfiguration {
    pub fast_attack_settings: BattleAnimationSettingsCombatAnimationConfigurationFastAttackSettings,
    pub projected_health_animation_duration_seconds: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettingsMaxBattleAnimationConfigurationFastAttackSettings {
    pub cross_fade_duration_seconds: f64,
    pub normalized_start_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettingsMaxBattleAnimationConfiguration {
    pub fast_attack_settings: BattleAnimationSettingsMaxBattleAnimationConfigurationFastAttackSettings,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleAnimationSettings {
    pub combat_animation_configuration: BattleAnimationSettingsCombatAnimationConfiguration,
    pub max_battle_animation_configuration: BattleAnimationSettingsMaxBattleAnimationConfiguration,
    pub raids_animation_configuration: BattleAnimationSettingsMaxBattleAnimationConfiguration,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubBadgeSettings {
    pub combat_hub_displayed_badges: [String; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubOrderSettingsSection {
    pub main_section: String,
    pub subsection: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubOrderSettingsSectionGroup {
    pub section: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubOrderSettingsSectionGroupV2 {
    pub section: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleHubOrderSettings {
    pub section: [BattleHubOrderSettingsSection; 1],
    pub section_group: (BattleHubOrderSettingsSectionGroup, BattleHubOrderSettingsSectionGroupV2, BattleHubOrderSettingsSectionGroupV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleInputBufferSettingsBreadInputBufferPriorityList {
    pub event_priority: [String; 2],
    pub priority_event_type_list: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleInputBufferSettingsCombatInputBufferPriorityList {
    pub event_priority: [String; 1],
    pub priority_event_type_list: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleInputBufferSettingsRaidsInputBufferPriorityList {
    pub event_priority: [String; 4],
    pub priority_event_type_list: [String; 5],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BattleInputBufferSettings {
    pub bread_input_buffer_priority_list: BattleInputBufferSettingsBreadInputBufferPriorityList,
    pub combat_input_buffer_priority_list: BattleInputBufferSettingsCombatInputBufferPriorityList,
    pub raids_input_buffer_priority_list: BattleInputBufferSettingsRaidsInputBufferPriorityList,
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
pub struct BreadMoveMappingsMappings {
    pub r#move: String,
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadMoveMappings {
    pub mappings: [BreadMoveMappingsMappings; 18],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualData {
    pub x_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData {
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData {
    pub camera_distance: u64,
    pub max_reticle_size: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualData {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormData {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualData; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettings {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormData; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2 {
    pub camera_distance: f64,
    pub max_reticle_size: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV2 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV2 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV2; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV2 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV2; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV2 {
    pub x_offset: u64,
    pub y_offset: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV3 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV2,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV2 {
    pub scale: f64,
    pub y_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV4 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV2,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV2,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV3 {
    pub pokemon_form: String,
    pub visual_data: (BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV3, BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV4),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV3 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV3; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV5 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV3 {
    pub x_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV6 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV3,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV4 {
    pub pokemon_form: String,
    pub visual_data: (BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV5, BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV6),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV4 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV4; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV7 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV4 {
    pub x_offset: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV3 {
    pub scale: f64,
    pub x_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV8 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV4,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV3,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV2,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV3,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV5 {
    pub pokemon_form: String,
    pub visual_data: (BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV7, BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV8),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV5 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV5; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV6 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV5; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV6 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV6; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV7 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV7; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV7 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV7; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData {
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV9 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualData,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV8 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV9; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV8 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV8; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV10 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV9 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV10; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV9 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV9; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV3 {
    pub camera_distance: u64,
    pub max_reticle_size: u64,
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV11 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV10 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV11; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV10 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV10; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV12 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV11 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV12; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV11 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV11; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV12 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV7; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV12 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV12; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV13 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV2; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV13 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV13; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV13 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV2,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualData,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV14 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV13; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV14 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV14; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV15 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV6; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV15 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV15; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV16 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV5; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV16 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV16; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV4 {
    pub scale: u64,
    pub y_offset: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV14 {
    pub bread_battle_trainer_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleTrainerVisualDataV4,
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualDataV4,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV17 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV14; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV17 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV17; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV15 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadStationVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV3,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV18 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV15; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV18 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV18; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV4 {
    pub camera_distance: u64,
    pub scale: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV16 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV4,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV19 {
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV16; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV19 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV19; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV5 {
    pub camera_distance: f64,
    pub max_reticle_size: u64,
    pub scale: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV17 {
    pub bread_battle_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
    pub bread_encounter_visiual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadEncounterVisiualDataV5,
    pub bread_mode: String,
    pub bread_station_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleVisualData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV20 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV17; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV20 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV20; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleBossVisualData {
    pub scale: f64,
    pub x_offset: f64,
    pub y_offset: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV18 {
    pub bread_battle_boss_visual_data: BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataBreadBattleBossVisualData,
    pub bread_mode: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV21 {
    pub pokemon_form: String,
    pub visual_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataVisualDataV18; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettingsVisualSettingsV21 {
    pub pokemon_form_data: [BreadPokemonScalingSettingsVisualSettingsPokemonFormDataV21; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadPokemonScalingSettings {
    pub visual_settings: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadSettingsAllowedSourdoughPokemon {
    pub bread_mode: String,
    pub form: [String; 1],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadSettingsAllowedSourdoughPokemonV2 {
    pub bread_mode: String,
    pub form: [String; 2],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadSettingsBreadBattleAvailability {
    pub bread_battle_availability_end_minute: u64,
    pub bread_battle_availability_start_minute: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreadSettings {
    pub allowed_sourdough_pokemon: Vec<serde_json::Value>,
    pub bread_battle_availability: BreadSettingsBreadBattleAvailability,
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
pub struct CombatSettingsClockSyncSettings {
    pub enabled: bool,
    pub sync_attempt_count: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CombatSettingsCombatFeatureFlags {
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
    pub clock_sync_settings: CombatSettingsClockSyncSettings,
    pub combat_experiment: Vec<serde_json::Value>,
    pub combat_feature_flags: CombatSettingsCombatFeatureFlags,
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
pub struct ContestSettingsContestLengthThresholds {
    pub length: String,
    pub max_duration_ms: String,
    pub min_duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettingsContestLimitsContestMetric {
    pub pokemon_metric: String,
    pub ranking_standard: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettingsContestLimits {
    pub contest_metric: ContestSettingsContestLimitsContestMetric,
    pub contest_occurrence: String,
    pub per_contest_max_entries: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettingsContestScoreCoefficientPokemonSize {
    pub height_coefficient: u64,
    pub iv_coefficient: u64,
    pub weight_coefficient: u64,
    pub xxl_adjustment_factor: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettingsContestScoreCoefficient {
    pub pokemon_size: ContestSettingsContestScoreCoefficientPokemonSize,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettingsContestWarmupAndCooldownDurationsMs {
    pub contest_occurrence: String,
    pub cycle_cooldown_duration_ms: String,
    pub cycle_warmup_duration_ms: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContestSettings {
    pub catch_prompt_timeout_ms: u64,
    pub contest_length_thresholds: [ContestSettingsContestLengthThresholds; 3],
    pub contest_limits: [ContestSettingsContestLimits; 1],
    pub contest_score_coefficient: [ContestSettingsContestScoreCoefficient; 1],
    pub contest_warmup_and_cooldown_durations_ms: [ContestSettingsContestWarmupAndCooldownDurationsMs; 2],
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
pub struct ConversationSettingsPokemonFormAppraisalOverrides {
    pub add_to_start: bool,
    pub appraisal_key: String,
    pub form: String,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConversationSettings {
    pub pokemon_form_appraisal_overrides: [ConversationSettingsPokemonFormAppraisalOverrides; 8],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CrossGameSocialSettings {
    pub niantic_profile_enabled_override_level: bool,
    pub online_status_enabled_override_level: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DailyAdventureIncenseSettingsPokeballGrantLootItem {
    pub count: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DailyAdventureIncenseSettingsPokeballGrant {
    pub loot_item: [DailyAdventureIncenseSettingsPokeballGrantLootItem; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DailyAdventureIncenseSettings {
    pub enabled: bool,
    pub enable_push_notification: bool,
    pub local_delivery_time: String,
    pub pokeball_grant: DailyAdventureIncenseSettingsPokeballGrant,
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
pub struct GiftingSettingsStardustMultiplier {
    pub multiplier: u64,
    pub random_weight: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GiftingSettings {
    pub enable_gift_to_stardust: bool,
    pub flow_polish_enabled: bool,
    pub multi_major_reward_ui_enabled: bool,
    pub stardust_multiplier: [GiftingSettingsStardustMultiplier; 3],
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
pub struct IncidentPrioritySettingsIncidentPriority {
    pub display_type: String,
    pub priority: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentPrioritySettings {
    pub incident_priority: [IncidentPrioritySettingsIncidentPriority; 7],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncidentVisibilitySettings {
    pub hide_incident_for_character: [String; 11],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InventorySettingsBagUpgradeTimerStages {
    pub dismiss_stage_secs: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InventorySettings {
    pub bag_upgrade_banner_contexts: [String; 5],
    pub bag_upgrade_banner_enabled: bool,
    pub bag_upgrade_timer_stages: [InventorySettingsBagUpgradeTimerStages; 4],
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
pub struct IrisSocialUxFunnelSettingsEventStep {
    pub event: String,
    pub step_number: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IrisSocialUxFunnelSettingsEventStepV2 {
    pub event: u64,
    pub step_number: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IrisSocialUxFunnelSettings {
    pub event_step: Vec<serde_json::Value>,
    pub ux_funnel_version: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettingsCategoryProto {
    pub category: [String; 1],
    pub category_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettingsCategoryProtoV2 {
    pub category: [String; 1],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettingsCategoryProtoV3 {
    pub category: [String; 3],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettingsCategoryProtoV4 {
    pub category: [String; 4],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettingsCategoryProtoV5 {
    pub category: [String; 7],
    pub category_name: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ItemInventoryUpdateSettings {
    pub category_proto: (ItemInventoryUpdateSettingsCategoryProto, ItemInventoryUpdateSettingsCategoryProtoV2, ItemInventoryUpdateSettingsCategoryProtoV2, ItemInventoryUpdateSettingsCategoryProtoV2, ItemInventoryUpdateSettingsCategoryProtoV3, ItemInventoryUpdateSettingsCategoryProtoV4, ItemInventoryUpdateSettingsCategoryProtoV5, ItemInventoryUpdateSettingsCategoryProtoV3, ItemInventoryUpdateSettingsCategoryProtoV2, ItemInventoryUpdateSettingsCategoryProtoV4, ItemInventoryUpdateSettingsCategoryProtoV2, ItemInventoryUpdateSettingsCategoryProtoV2),
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
pub struct MpSettingsBattleMpCostPerTier {
    pub battle_level: String,
    pub bread_battle_catch_mp_cost: u64,
    pub bread_battle_remote_catch_mp_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MpSettingsBattleMpCostPerTierV2 {
    pub battle_level: u64,
    pub bread_battle_catch_mp_cost: u64,
    pub bread_battle_remote_catch_mp_cost: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MpSettings {
    pub battle_mp_cost_per_tier: (MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTier, MpSettingsBattleMpCostPerTierV2),
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
pub struct NeutralAvatarSettingsBodySliderSettingsBustSlider {
    pub max_bounds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsBodySliderSettingsSizeSlider {
    pub max_bounds: f64,
    pub min_bounds: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsBodySliderSettings {
    pub bust_slider: NeutralAvatarSettingsBodySliderSettingsBustSlider,
    pub hips_slider: NeutralAvatarSettingsBodySliderSettingsBustSlider,
    pub muscle_slider: NeutralAvatarSettingsBodySliderSettingsBustSlider,
    pub shoulder_slider: NeutralAvatarSettingsBodySliderSettingsBustSlider,
    pub size_slider: NeutralAvatarSettingsBodySliderSettingsSizeSlider,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack {
    pub article_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarArticles {
    pub backpack: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub body_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyebrow: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyelash: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub face_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub gloves: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub hair: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pants: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pose: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shirt: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shoes: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub socks: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarBodyBlend {
    pub hips: f64,
    pub musculature: f64,
    pub shoulders: f64,
    pub size: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarEarSelection {
    pub selection: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeys {
    pub key_position: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2 {
    pub blue: f64,
    pub green: f64,
    pub key_position: f64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV3 {
    pub blue: u64,
    pub green: u64,
    pub key_position: u64,
    pub red: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarEyeGradient {
    pub color_keys: (NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeys, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV3),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarFacePositions {
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
pub struct NeutralAvatarSettingsDefaultNeutralAvatarHairGradientColorKeys {
    pub blue: f64,
    pub green: f64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarHairGradientColorKeysV2 {
    pub blue: f64,
    pub green: f64,
    pub key_position: u64,
    pub red: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarHairGradient {
    pub color_keys: (NeutralAvatarSettingsDefaultNeutralAvatarHairGradientColorKeys, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarHairGradientColorKeysV2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarSkinGradientColorKeys {
    pub blue: f64,
    pub green: f64,
    pub key_position: f64,
    pub red: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatarSkinGradient {
    pub color_keys: (NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarSkinGradientColorKeys),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsDefaultNeutralAvatar {
    pub articles: NeutralAvatarSettingsDefaultNeutralAvatarArticles,
    pub body_blend: NeutralAvatarSettingsDefaultNeutralAvatarBodyBlend,
    pub ear_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub eye_gradient: NeutralAvatarSettingsDefaultNeutralAvatarEyeGradient,
    pub eye_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub face_positions: NeutralAvatarSettingsDefaultNeutralAvatarFacePositions,
    pub hair_gradient: NeutralAvatarSettingsDefaultNeutralAvatarHairGradient,
    pub head_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub mouth_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub nose_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub skin_gradient: NeutralAvatarSettingsDefaultNeutralAvatarSkinGradient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsFemaleNeutralAvatarArticles {
    pub backpack: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub belt: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub body_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyebrow: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyelash: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub face_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub gloves: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub hair: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub hat: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub necklace: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pants: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pose: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shirt: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shoes: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub socks: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsFemaleNeutralAvatarBodyBlend {
    pub bust: f64,
    pub hips: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsFemaleNeutralAvatarFacePositions {
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
pub struct NeutralAvatarSettingsFemaleNeutralAvatarSkinGradient {
    pub color_keys: (NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarEyeGradientColorKeysV2, NeutralAvatarSettingsDefaultNeutralAvatarSkinGradientColorKeys),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsFemaleNeutralAvatar {
    pub articles: NeutralAvatarSettingsFemaleNeutralAvatarArticles,
    pub body_blend: NeutralAvatarSettingsFemaleNeutralAvatarBodyBlend,
    pub ear_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub eye_gradient: NeutralAvatarSettingsDefaultNeutralAvatarEyeGradient,
    pub eye_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub face_positions: NeutralAvatarSettingsFemaleNeutralAvatarFacePositions,
    pub hair_gradient: NeutralAvatarSettingsDefaultNeutralAvatarHairGradient,
    pub head_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub mouth_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub nose_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub skin_gradient: NeutralAvatarSettingsFemaleNeutralAvatarSkinGradient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsMaleNeutralAvatarArticles {
    pub backpack: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub body_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyebrow: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub eyelash: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub face_preset: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub gloves: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub hair: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub hat: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pants: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub pose: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shirt: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub shoes: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
    pub socks: NeutralAvatarSettingsDefaultNeutralAvatarArticlesBackpack,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsMaleNeutralAvatarBodyBlend {
    pub hips: f64,
    pub musculature: f64,
    pub shoulders: u64,
    pub size: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettingsMaleNeutralAvatar {
    pub articles: NeutralAvatarSettingsMaleNeutralAvatarArticles,
    pub body_blend: NeutralAvatarSettingsMaleNeutralAvatarBodyBlend,
    pub ear_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub eye_gradient: NeutralAvatarSettingsDefaultNeutralAvatarEyeGradient,
    pub eye_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub face_positions: NeutralAvatarSettingsFemaleNeutralAvatarFacePositions,
    pub hair_gradient: NeutralAvatarSettingsDefaultNeutralAvatarHairGradient,
    pub head_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub mouth_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub nose_selection: NeutralAvatarSettingsDefaultNeutralAvatarEarSelection,
    pub skin_gradient: NeutralAvatarSettingsFemaleNeutralAvatarSkinGradient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NeutralAvatarSettings {
    pub body_slider_settings: NeutralAvatarSettingsBodySliderSettings,
    pub default_neutral_avatar: NeutralAvatarSettingsDefaultNeutralAvatar,
    pub female_neutral_avatar: NeutralAvatarSettingsFemaleNeutralAvatar,
    pub male_neutral_avatar: NeutralAvatarSettingsMaleNeutralAvatar,
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
pub struct PartyDarkLaunchSettingsCreateOrJoinWaitProbability {
    pub wait_time_ms: u64,
    pub weight: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyDarkLaunchSettingsLeavePartyProbablity {
    pub max_duration_ms: u64,
    pub weight: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyDarkLaunchSettings {
    pub create_or_join_wait_probability: [PartyDarkLaunchSettingsCreateOrJoinWaitProbability; 4],
    pub leave_party_probablity: [PartyDarkLaunchSettingsLeavePartyProbablity; 4],
    pub probability_to_create_percent: u64,
    pub rollout_players_per_billion: u64,
    pub update_location_enabled: bool,
    pub update_location_override_period_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyIapBoostsSettingsBoost {
    pub daily_contribution_limit: u64,
    pub duration_multiplier: f64,
    pub supported_item_types: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartyIapBoostsSettings {
    pub boost: [PartyIapBoostsSettingsBoost; 3],
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
pub struct PlannerSettingsEventSettingsMessageTiming {
    pub message_send_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlannerSettingsEventSettingsMessageTimingV2 {
    pub message_send_before_event_seconds: u64,
    pub message_send_time: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlannerSettingsEventSettings {
    pub max_rsvps_per_slot: u64,
    pub max_timeslots: u64,
    pub message_timing: (PlannerSettingsEventSettingsMessageTiming, PlannerSettingsEventSettingsMessageTimingV2),
    pub rsvp_bonus_time_window_minutes: u64,
    pub rsvp_clear_inventory_minutes: u64,
    pub rsvp_invite_enabled: bool,
    pub rsvp_timeslot_duration_seconds: u64,
    pub timeslot_gap_seconds: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlannerSettingsEventSettingsV2 {
    pub event_type: String,
    pub max_rsvps_per_slot: u64,
    pub max_timeslots: u64,
    pub message_timing: (PlannerSettingsEventSettingsMessageTiming, PlannerSettingsEventSettingsMessageTimingV2),
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
    pub event_settings: (PlannerSettingsEventSettings, PlannerSettingsEventSettingsV2),
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
pub struct PlayerLevelXpRewardV2thresholds {
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
    pub xp_reward_v2_thresholds: PlayerLevelXpRewardV2thresholds,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokeballThrowPropertySettingsThrowPropertiesCurveballModifier {
    pub x: u64,
    pub y: f64,
    pub z: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokeballThrowPropertySettingsThrowPropertiesLaunchVelocityMultiplier {
    pub x: u64,
    pub y: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokeballThrowPropertySettingsThrowProperties {
    pub below_ground_fly_timeout_seconds: u64,
    pub curveball_modifier: PokeballThrowPropertySettingsThrowPropertiesCurveballModifier,
    pub drag_snap_speed: u64,
    pub fly_timeout_duration: u64,
    pub launch_speed_threshold: f64,
    pub launch_velocity_multiplier: PokeballThrowPropertySettingsThrowPropertiesLaunchVelocityMultiplier,
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
    pub throw_properties: [PokeballThrowPropertySettingsThrowProperties; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokecoinPurchaseDisplayGmt {
    pub feature_enabled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategoriesSettingsPokedexCategorySettingsInOrder {
    pub milestone_goal: u64,
    pub pokedex_category: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategoriesSettingsPokedexCategorySettingsInOrderV2 {
    pub milestone_goal: u64,
    pub pokedex_category: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3 {
    pub milestone_goal: u64,
    pub pokedex_category: String,
    pub visually_hidden: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokedexCategoriesSettings {
    pub client_shiny_form_check: bool,
    pub feature_enabled: bool,
    pub pokedex_category_settings_in_order: (PokedexCategoriesSettingsPokedexCategorySettingsInOrder, PokedexCategoriesSettingsPokedexCategorySettingsInOrder, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV2, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV2, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3, PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3, PokedexCategoriesSettingsPokedexCategorySettingsInOrder, PokedexCategoriesSettingsPokedexCategorySettingsInOrder, PokedexCategoriesSettingsPokedexCategorySettingsInOrder),
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
pub struct PokemonTagSettingsColorBinding {
    pub color: String,
    pub hex_code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonTagSettings {
    pub color_binding: [PokemonTagSettingsColorBinding; 8],
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
pub struct PowerUpPokestopsSettings {
    pub power_up_pokestops_min_player_level: u64,
    pub validate_pokestop_on_fort_search_percent: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimalEvoSettingsCommonTempSettings {
    pub enable_buddy_walking_temp_evo_energy_award: bool,
    pub evolution_length_ms: String,
    pub num_temp_evo_levels: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimalEvoSettingsTypeBoosts {
    pub boost_type: [String; 3],
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimalEvoSettings {
    pub common_temp_settings: PrimalEvoSettingsCommonTempSettings,
    pub max_candy_hoard_size: u64,
    pub type_boosts: [PrimalEvoSettingsTypeBoosts; 3],
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
pub struct RaidSettingsPokemonMusicOverrides {
    pub battle_music_key: String,
    pub forms: [String; 2],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettingsPokemonMusicOverridesV2 {
    pub battle_music_key: String,
    pub forms: [String; 3],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettingsPokemonMusicOverridesV3 {
    pub battle_music_key: String,
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettingsPokemonMusicOverridesV4 {
    pub battle_music_key: String,
    pub forms: [String; 4],
    pub pokemon: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettingsRaidFeatureFlags {
    pub use_cached_raid_boss_pokemon: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RaidSettingsRaidLevelMusicOverrides {
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
    pub pokemon_music_overrides: Vec<serde_json::Value>,
    pub popup_time_ms: u64,
    pub raid_feature_flags: RaidSettingsRaidFeatureFlags,
    pub raid_level_music_overrides: [RaidSettingsRaidLevelMusicOverrides; 5],
    pub remote_damage_modifier: u64,
    pub remote_raid_distance_validation: bool,
    pub remote_raid_enabled: bool,
    pub remote_raids_min_player_level: u64,
    pub unsupported_raid_levels_for_friend_invites: [String; 2],
    pub unsupported_remote_raid_levels: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReferralSettingsRecentFeatures {
    pub description: String,
    pub feature_name: String,
    pub icon_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReferralSettingsRecentFeaturesV2 {
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
    pub recent_features: (ReferralSettingsRecentFeatures, ReferralSettingsRecentFeaturesV2, ReferralSettingsRecentFeatures),
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
pub struct RouteCreationSettingsClientBreadcrumbSettings {
    pub as_fallback_foreground_reporting_inverval_s: u64,
    pub session_duration_m: u64,
    pub update_interval_s: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteCreationSettings {
    pub allowable_gps_drift_meters: u64,
    pub allow_appeals: bool,
    pub client_breadcrumb_settings: RouteCreationSettingsClientBreadcrumbSettings,
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
pub struct RoutePinSettingsPinMessage {
    pub category: [String; 2],
    pub key: String,
    pub level_required: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RoutePinSettingsPinMessageV2 {
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
    pub pin_message: (RoutePinSettingsPinMessage, RoutePinSettingsPinMessageV2, RoutePinSettingsPinMessageV2, RoutePinSettingsPinMessageV2),
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
pub struct SourdoughMoveMappingSettingsMappings {
    pub form: String,
    pub r#move: String,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SourdoughMoveMappingSettingsMappingsV2 {
    pub r#move: String,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SourdoughMoveMappingSettingsMappingsOptionalBmoveOverride {
    pub r#move: String,
    pub r#override: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SourdoughMoveMappingSettingsMappingsV3 {
    pub form: String,
    pub r#move: String,
    pub optional_bmove_override: SourdoughMoveMappingSettingsMappingsOptionalBmoveOverride,
    pub optional_cmove_override: SourdoughMoveMappingSettingsMappingsOptionalBmoveOverride,
    pub pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SourdoughMoveMappingSettings {
    pub mappings: Vec<serde_json::Value>,
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
pub struct SponsoredGeofenceGiftSettingsBalloonGiftSettings {
    pub balloon_auto_dismiss_time_ms: u64,
    pub enable_balloon_gift: bool,
    pub enable_balloon_web_view: bool,
    pub get_wasabi_ad_rpc_interval_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SponsoredGeofenceGiftSettings {
    pub balloon_gift_settings: SponsoredGeofenceGiftSettingsBalloonGiftSettings,
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
pub struct StationedPokemonTableSettingsTierBoosts {
    pub num_boost_icons: u64,
    pub num_stationed: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StationedPokemonTableSettings {
    pub stationed_pokemon_table_enum: String,
    pub tier_boosts: [StationedPokemonTableSettingsTierBoosts; 20],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategorySettingsStickerCategory {
    pub active: bool,
    pub category: String,
    pub preferred_category_icon: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategorySettingsStickerCategoryV2 {
    pub active: bool,
    pub category: String,
    pub sort_order: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StickerCategorySettings {
    pub enabled: bool,
    pub sticker_category: (StickerCategorySettingsStickerCategory, StickerCategorySettingsStickerCategoryV2, StickerCategorySettingsStickerCategory, StickerCategorySettingsStickerCategory, StickerCategorySettingsStickerCategory, StickerCategorySettingsStickerCategory, StickerCategorySettingsStickerCategory),
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
pub struct TutorialSettingsTutorialItemRewardsItem {
    pub count: u64,
    pub item_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialSettingsTutorialItemRewards {
    pub item: [TutorialSettingsTutorialItemRewardsItem; 2],
    pub tutorial: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialSettingsTutorialItemRewardsV2 {
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
    pub tutorial_item_rewards: (TutorialSettingsTutorialItemRewards, TutorialSettingsTutorialItemRewardsV2),
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
pub struct VnextBattleConfigMaxBattleConfig {
    pub bad_network_warning_threshold_turns: String,
    pub battle_end_timeout_threshold_ms: String,
    pub dead_network_disconnect_threshold_turns: String,
    pub no_opponent_connection_disconnect_threshold_turns: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VnextBattleConfig {
    pub max_battle_config: VnextBattleConfigMaxBattleConfig,
    pub pvp_battle_config: VnextBattleConfigMaxBattleConfig,
    pub raids_battle_config: VnextBattleConfigMaxBattleConfig,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerClientSettings {
    pub allowed_vs_seeker_league_template_id: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerScheduleSettingsSeasonSchedulesVsSeekerSchedules {
    pub end_time_ms: String,
    pub start_time_ms: String,
    pub vs_seeker_league_tempalte_id: [String; 2],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerScheduleSettingsSeasonSchedulesVsSeekerSchedulesV2 {
    pub end_time_ms: String,
    pub start_time_ms: String,
    pub vs_seeker_league_tempalte_id: [String; 3],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerScheduleSettingsSeasonSchedules {
    pub blog_url: String,
    pub description_key: String,
    pub season_title: String,
    pub vs_seeker_schedules: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VsSeekerScheduleSettings {
    pub enable_combat_hub_main: bool,
    pub enable_combat_league_view: bool,
    pub enable_today_view: bool,
    pub season_schedules: [VsSeekerScheduleSettingsSeasonSchedules; 1],
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

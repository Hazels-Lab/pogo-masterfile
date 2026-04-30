// Generated from Pokémon GO masterfile — group "pokemonSettings".

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsBuddyWalkedMegaEnergyAwards {
    pub mega_energy_award_amount: u64,
    pub mega_pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsBuddyWalkedMegaEnergyAwardsV2 {
    pub gender_requirement: String,
    pub mega_energy_award_amount: u64,
    pub mega_pokemon_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsCamera {
    pub cylinder_ground_m: Option<f64>,
    pub cylinder_height_m: Option<f64>,
    pub cylinder_radius_m: Option<f64>,
    pub disk_radius_m: Option<f64>,
    pub shoulder_mode_scale: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsEncounter {
    pub attack_probability: Option<f64>,
    pub attack_timer_s: Option<u64>,
    pub bonus_candy_capture_reward: Option<u64>,
    pub bonus_stardust_capture_reward: Option<u64>,
    pub bonus_xl_candy_capture_reward: Option<u64>,
    pub camera_distance: Option<f64>,
    pub collision_head_radius_m: Option<f64>,
    pub collision_height_m: Option<f64>,
    pub collision_radius_m: Option<f64>,
    pub dodge_distance: Option<f64>,
    pub dodge_duration_s: Option<f64>,
    pub dodge_probability: Option<f64>,
    pub jump_time_s: Option<f64>,
    pub max_pokemon_action_frequency_s: Option<f64>,
    pub min_pokemon_action_frequency_s: Option<f64>,
    pub movement_timer_s: Option<u64>,
    pub movement_type: Option<String>,
    pub shadow_attack_probability: Option<f64>,
    pub shadow_base_capture_rate: Option<f64>,
    pub shadow_dodge_probability: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsEvolutionBranchQuestDisplay {
    pub quest_requirement_template_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsEvolutionBranch {
    pub candy_cost: Option<u64>,
    pub candy_cost_purified: Option<u64>,
    pub evolution: Option<String>,
    pub evolution_item_requirement: Option<String>,
    pub evolution_item_requirement_cost: Option<u64>,
    pub evolution_likelihood_weight: Option<u64>,
    pub evolution_move_requirement: Option<String>,
    pub form: Option<String>,
    pub gender_requirement: Option<String>,
    pub km_buddy_distance_requirement: Option<u64>,
    pub lure_item_requirement: Option<String>,
    pub must_be_buddy: Option<bool>,
    pub no_candy_cost_via_trade: Option<bool>,
    pub only_daytime: Option<bool>,
    pub only_dusk_period: Option<bool>,
    pub only_full_moon: Option<bool>,
    pub only_nighttime: Option<bool>,
    pub only_upside_down: Option<bool>,
    pub priority: Option<u64>,
    pub quest_display: Option<[PokemonSettingsEvolutionBranchQuestDisplay; 1]>,
    pub temporary_evolution: Option<String>,
    pub temporary_evolution_energy_cost: Option<u64>,
    pub temporary_evolution_energy_cost_subsequent: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsExclusiveKeyItem {
    pub count: u64,
    pub item: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeComponentPokemonSettingsLocationCardSettings {
    pub base_pokemon_location_card: String,
    pub component_pokemon_location_card: String,
    pub fusion_pokemon_location_card: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeComponentPokemonSettings {
    pub component_candy_cost: Option<u64>,
    pub family_id: String,
    pub form_change_type: String,
    pub location_card_settings: Option<[PokemonSettingsFormChangeComponentPokemonSettingsLocationCardSettings; 1]>,
    pub pokedex_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeFormChangeBonusAttributesMaxMoves {
    pub move_level: String,
    pub move_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeFormChangeBonusAttributes {
    pub bread_mode: Option<String>,
    pub clear_bread_mode: Option<bool>,
    pub max_moves: Option<[PokemonSettingsFormChangeFormChangeBonusAttributesMaxMoves; 1]>,
    pub target_form: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeLocationCardSettings {
    pub existing_location_card: String,
    pub replacement_location_card: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeMoveReassignmentCinematicMoves {
    pub existing_moves: Option<[String; 1]>,
    pub replacement_moves: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeMoveReassignment {
    pub cinematic_moves: [PokemonSettingsFormChangeMoveReassignmentCinematicMoves; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeRequiredBreadMoves {
    pub move_level: String,
    pub move_types: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChangeRequiredCinematicMoves {
    pub required_moves: [String; 1],
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsFormChange {
    pub available_form: Vec<String>,
    pub candy_cost: Option<u64>,
    pub component_pokemon_settings: Option<PokemonSettingsFormChangeComponentPokemonSettings>,
    pub form_change_bonus_attributes: Option<[PokemonSettingsFormChangeFormChangeBonusAttributes; 1]>,
    pub item: Option<String>,
    pub item_cost_count: Option<u64>,
    pub location_card_settings: Option<[PokemonSettingsFormChangeLocationCardSettings; 1]>,
    pub move_reassignment: Option<PokemonSettingsFormChangeMoveReassignment>,
    pub priority: Option<u64>,
    pub required_bread_moves: Option<[PokemonSettingsFormChangeRequiredBreadMoves; 1]>,
    pub required_cinematic_moves: Option<[PokemonSettingsFormChangeRequiredCinematicMoves; 1]>,
    pub stardust_cost: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsIbfcAlternateToDefaultIbfcSettings {
    pub animation_duration_turns: u64,
    pub animation_play_point: String,
    pub current_move: Option<String>,
    pub ibfc_vfx_key: String,
    pub replacement_move: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsIbfc {
    pub alternate_form: Option<String>,
    pub alternate_to_default_ibfc_settings: Option<PokemonSettingsIbfcAlternateToDefaultIbfcSettings>,
    pub combat_enable: Option<bool>,
    pub default_form: Option<String>,
    pub default_to_alternate_ibfc_settings: Option<PokemonSettingsIbfcAlternateToDefaultIbfcSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsShadow {
    pub purification_candy_needed: u64,
    pub purification_stardust_needed: u64,
    pub purified_charge_move: String,
    pub shadow_charge_move: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsSizeSettings {
    pub disable_pokedex_record_display_for_forms: bool,
    pub m_lower_bound: f64,
    pub m_upper_bound: f64,
    pub xl_scale_multiplier: f64,
    pub xl_upper_bound: f64,
    pub xs_lower_bound: f64,
    pub xs_scale_multiplier: f64,
    pub xxl_scale_multiplier: f64,
    pub xxl_upper_bound: f64,
    pub xxs_lower_bound: f64,
    pub xxs_scale_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsStats {
    pub base_attack: u64,
    pub base_defense: u64,
    pub base_stamina: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsTempEvoOverridesCamera {
    pub cylinder_ground_m: Option<f64>,
    pub cylinder_height_m: Option<f64>,
    pub cylinder_radius_m: Option<f64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsTempEvoOverrides {
    pub average_height_m: Option<f64>,
    pub average_weight_kg: Option<f64>,
    pub buddy_offset_female: Option<[f64; 3]>,
    pub buddy_offset_male: Option<[f64; 3]>,
    pub buddy_portrait_offset: Option<[i64; 3]>,
    pub buddy_portrait_rotation: Option<[u64; 3]>,
    pub camera: Option<PokemonSettingsTempEvoOverridesCamera>,
    pub model_height: Option<f64>,
    pub model_scale_v2: Option<f64>,
    pub raid_boss_distance_offset: Option<f64>,
    pub stats: Option<PokemonSettingsStats>,
    pub temp_evo_id: Option<String>,
    pub type_override1: Option<String>,
    pub type_override2: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettingsThirdMove {
    pub candy_to_unlock: u64,
    pub stardust_to_unlock: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonSettings {
    pub allow_noevolve_evolution: Option<[String; 1]>,
    pub animation_time: Option<Vec<f64>>,
    pub bread_tier_group: Option<String>,
    pub buddy_group_number: Option<u64>,
    pub buddy_offset_female: Option<[f64; 3]>,
    pub buddy_offset_male: Option<[f64; 3]>,
    pub buddy_portrait_offset: Option<[f64; 3]>,
    pub buddy_portrait_rotation: Option<[i64; 3]>,
    pub buddy_scale: Option<f64>,
    pub buddy_size: Option<String>,
    pub buddy_walked_mega_energy_award: Option<u64>,
    pub buddy_walked_mega_energy_awards: Option<(PokemonSettingsBuddyWalkedMegaEnergyAwards, PokemonSettingsBuddyWalkedMegaEnergyAwardsV2)>,
    pub camera: PokemonSettingsCamera,
    pub candy_to_evolve: Option<u64>,
    pub cinematic_moves: Option<Vec<String>>,
    pub combat_default_camera_angle: Option<[f64; 3]>,
    pub combat_opponent_focus_camera_angle: Option<[f64; 3]>,
    pub combat_player_focus_camera_angle: Option<[f64; 3]>,
    pub combat_player_pokemon_position_offset: Option<[u64; 3]>,
    pub combat_shoulder_camera_angle: Option<[f64; 3]>,
    pub disable_transfer_to_pokemon_home: Option<bool>,
    pub elite_cinematic_move: Option<Vec<String>>,
    pub elite_quick_move: Option<Vec<String>>,
    pub encounter: PokemonSettingsEncounter,
    pub evolution_branch: Option<Vec<PokemonSettingsEvolutionBranch>>,
    pub evolution_ids: Option<Vec<String>>,
    pub evolution_pips: Option<u64>,
    pub exclusive_key_item: Option<PokemonSettingsExclusiveKeyItem>,
    pub family_id: String,
    pub form: Option<serde_json::Value>,
    pub form_change: Option<Vec<PokemonSettingsFormChange>>,
    pub height_std_dev: f64,
    pub ibfc: PokemonSettingsIbfc,
    pub iris_flying_height_limit_meters: Option<u64>,
    pub iris_photo_emote1: Option<String>,
    pub iris_photo_emote2: Option<String>,
    pub iris_photo_hue_order: Option<u64>,
    pub iris_photo_shiny_hue_order: Option<u64>,
    pub is_deployable: Option<bool>,
    pub is_tradable: Option<bool>,
    pub is_transferable: Option<bool>,
    pub km_buddy_distance: u64,
    pub model_height: Option<f64>,
    pub model_scale: Option<f64>,
    pub model_scale_v2: Option<f64>,
    pub non_tm_cinematic_moves: Option<[String; 1]>,
    pub parent_pokemon_id: Option<String>,
    pub pokedex_height_m: f64,
    pub pokedex_weight_kg: f64,
    pub pokemon_class: Option<String>,
    pub pokemon_id: String,
    pub quick_moves: Option<Vec<String>>,
    pub raid_boss_distance_offset: Option<f64>,
    pub shadow: Option<PokemonSettingsShadow>,
    pub size_settings: Option<PokemonSettingsSizeSettings>,
    pub stats: PokemonSettingsStats,
    pub temp_evo_overrides: Option<Vec<PokemonSettingsTempEvoOverrides>>,
    pub third_move: PokemonSettingsThirdMove,
    pub type: String,
    pub type2: Option<String>,
    pub use_iris_flying_placement: Option<bool>,
    pub weight_std_dev: f64,
}

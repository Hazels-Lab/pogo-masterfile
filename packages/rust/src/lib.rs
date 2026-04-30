// Generated from Pokémon GO masterfile — root crate barrel.

/// Defines an Entry + EntryData pair for a discriminator that carries a payload.
/// Used by the codegen; consumers of this crate normally don't invoke directly.
#[macro_export]
macro_rules! masterfile_entry {
	($entry:ident, $data:ident, $field:ident: $ty:ty) => {
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $entry {
			pub template_id: String,
			pub data: $data,
		}
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $data {
			pub template_id: String,
			pub $field: $ty,
		}
	};
}

/// Defines an Entry + EntryData pair for a stub discriminator (no payload).
/// Stub entries have JSON shape `{ templateId, data: { templateId } }`.
#[macro_export]
macro_rules! masterfile_stub_entry {
	($entry:ident, $data:ident) => {
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $entry {
			pub template_id: String,
			pub data: $data,
		}
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $data {
			pub template_id: String,
		}
	};
}

pub mod avatar_customization;
pub mod avatar_group_order_settings;
pub mod avatar_item_display;
pub mod badge_settings;
pub mod bread_move_level_settings;
pub mod buddy_activity_category_settings;
pub mod buddy_emotion_level_settings;
pub mod buddy_level_settings;
pub mod client_quest_template;
pub mod code_gate_proto;
pub mod combat_league;
pub mod combat_move;
pub mod combat_npc_personality;
pub mod combat_npc_trainer;
pub mod combat_ranking_proto_settings;
pub mod combat_type;
pub mod event_pass_settings;
pub mod event_pass_tier_settings;
pub mod evolution_chain_display_settings;
pub mod evolution_quest_template;
pub mod feature_gate;
pub mod form_settings;
pub mod fort_power_up_level_settings;
pub mod friendship_milestone_settings;
pub mod gender_settings;
pub mod iap_category_display;
pub mod iap_item_display;
pub mod invasion_npc_display_settings;
pub mod item_expiration_settings;
pub mod item_settings;
pub mod language_settings;
pub mod level_up_rewards;
pub mod limited_purchase_sku_settings;
pub mod location_card_settings;
pub mod mega_evo_level_settings;
pub mod move_sequence_settings;
pub mod move_settings;
pub mod non_combat_move_settings;
pub mod party_play_general_settings;
pub mod photo_sets_settings_proto;
pub mod pokemon_extended_settings;
pub mod pokemon_family;
pub mod pokemon_home_energy_costs;
pub mod pokemon_home_form_reversions;
pub mod pokemon_scale_settings;
pub mod pokemon_settings;
pub mod pokemon_upgrades;
pub mod pokestop_invasion_availability_settings;
pub mod quest_settings;
pub mod recommended_search_settings;
pub mod roll_back;
pub mod settings_override_rule;
pub mod singletons;
pub mod sticker_metadata;
pub mod tappable_settings;
pub mod temporary_evolution_settings;
pub mod type_effective;
pub mod vs_seeker_loot;
pub mod vs_seeker_pokemon_rewards;
pub mod weather_affinities;

//! Generated from Pokémon GO masterfile — runtime API.
//!
//! Crate root. The hand-written templates (`masterfile.rs`, `error.rs`,
//! `fetcher.rs`, `builder.rs`, `blocking.rs`) are copied verbatim by codegen;
//! everything in THIS file (per-group accessor methods, the `GroupIndexes`
//! storage struct, upstream re-exports) is regenerated on every
//! `bun run generate`.

use std::collections::HashMap;

pub mod accessor;
#[cfg(feature = "async")]
pub mod builder;
pub mod error;
pub mod fetcher;
mod masterfile;

#[cfg(feature = "blocking")]
pub mod blocking;

#[cfg(feature = "async")]
pub use crate::builder::MasterfileBuilder;
pub use crate::error::{Error, Result};
pub use crate::fetcher::DEFAULT_MASTERFILE_URL;
#[cfg(feature = "async")]
pub use crate::fetcher::{Fetcher, ReqwestFetcher};
pub use crate::masterfile::Masterfile;

pub use pogo_masterfile_types::{MasterfileEntry, UnknownTemplateId, parse_masterfile};

// Bring the per-group TemplateId types into a flat module path so GroupIndexes
// can name them without a giant import block.
mod template_ids {
    pub use pogo_masterfile_types::avatar_customization::AvatarCustomizationTemplateId;
    pub use pogo_masterfile_types::avatar_group_order_settings::AvatarGroupOrderSettingsTemplateId;
    pub use pogo_masterfile_types::avatar_item_display::AvatarItemDisplayTemplateId;
    pub use pogo_masterfile_types::badge_settings::BadgeSettingsTemplateId;
    pub use pogo_masterfile_types::bread_move_level_settings::BreadMoveLevelSettingsTemplateId;
    pub use pogo_masterfile_types::buddy_activity_category_settings::BuddyActivityCategorySettingsTemplateId;
    pub use pogo_masterfile_types::buddy_emotion_level_settings::BuddyEmotionLevelSettingsTemplateId;
    pub use pogo_masterfile_types::buddy_level_settings::BuddyLevelSettingsTemplateId;
    pub use pogo_masterfile_types::client_quest_template::ClientQuestTemplateTemplateId;
    pub use pogo_masterfile_types::code_gate_proto::CodeGateProtoTemplateId;
    pub use pogo_masterfile_types::combat_league::CombatLeagueTemplateId;
    pub use pogo_masterfile_types::combat_move::CombatMoveTemplateId;
    pub use pogo_masterfile_types::combat_npc_personality::CombatNpcPersonalityTemplateId;
    pub use pogo_masterfile_types::combat_npc_trainer::CombatNpcTrainerTemplateId;
    pub use pogo_masterfile_types::combat_ranking_proto_settings::CombatRankingProtoSettingsTemplateId;
    pub use pogo_masterfile_types::combat_type::CombatTypeTemplateId;
    pub use pogo_masterfile_types::event_pass_tier_settings::EventPassTierSettingsTemplateId;
    pub use pogo_masterfile_types::evolution_chain_display_settings::EvolutionChainDisplaySettingsTemplateId;
    pub use pogo_masterfile_types::evolution_quest_template::EvolutionQuestTemplateTemplateId;
    pub use pogo_masterfile_types::feature_gate::FeatureGateTemplateId;
    pub use pogo_masterfile_types::form_settings::FormSettingsTemplateId;
    pub use pogo_masterfile_types::fort_power_up_level_settings::FortPowerUpLevelSettingsTemplateId;
    pub use pogo_masterfile_types::friendship_milestone_settings::FriendshipMilestoneSettingsTemplateId;
    pub use pogo_masterfile_types::gender_settings::GenderSettingsTemplateId;
    pub use pogo_masterfile_types::iap_category_display::IapCategoryDisplayTemplateId;
    pub use pogo_masterfile_types::iap_item_display::IapItemDisplayTemplateId;
    pub use pogo_masterfile_types::invasion_npc_display_settings::InvasionNpcDisplaySettingsTemplateId;
    pub use pogo_masterfile_types::item_expiration_settings::ItemExpirationSettingsTemplateId;
    pub use pogo_masterfile_types::item_settings::ItemSettingsTemplateId;
    pub use pogo_masterfile_types::language_settings::LanguageSettingsTemplateId;
    pub use pogo_masterfile_types::level_up_rewards::LevelUpRewardsTemplateId;
    pub use pogo_masterfile_types::limited_purchase_sku_settings::LimitedPurchaseSkuSettingsTemplateId;
    pub use pogo_masterfile_types::location_card_settings::LocationCardSettingsTemplateId;
    pub use pogo_masterfile_types::mega_evo_level_settings::MegaEvoLevelSettingsTemplateId;
    pub use pogo_masterfile_types::move_sequence_settings::MoveSequenceSettingsTemplateId;
    pub use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;
    pub use pogo_masterfile_types::non_combat_move_settings::NonCombatMoveSettingsTemplateId;
    pub use pogo_masterfile_types::party_play_general_settings::PartyPlayGeneralSettingsTemplateId;
    pub use pogo_masterfile_types::photo_sets_settings_proto::PhotoSetsSettingsProtoTemplateId;
    pub use pogo_masterfile_types::pokemon_extended_settings::PokemonExtendedSettingsTemplateId;
    pub use pogo_masterfile_types::pokemon_family::PokemonFamilyTemplateId;
    pub use pogo_masterfile_types::pokemon_home_energy_costs::PokemonHomeEnergyCostsTemplateId;
    pub use pogo_masterfile_types::pokemon_home_form_reversions::PokemonHomeFormReversionsTemplateId;
    pub use pogo_masterfile_types::pokemon_scale_settings::PokemonScaleSettingsTemplateId;
    pub use pogo_masterfile_types::pokemon_settings::PokemonSettingsTemplateId;
    pub use pogo_masterfile_types::pokemon_upgrades::PokemonUpgradesTemplateId;
    pub use pogo_masterfile_types::pokestop_invasion_availability_settings::PokestopInvasionAvailabilitySettingsTemplateId;
    pub use pogo_masterfile_types::quest_settings::QuestSettingsTemplateId;
    pub use pogo_masterfile_types::recommended_search_settings::RecommendedSearchSettingsTemplateId;
    pub use pogo_masterfile_types::roll_back::RollBackTemplateId;
    pub use pogo_masterfile_types::settings_override_rule::SettingsOverrideRuleTemplateId;
    pub use pogo_masterfile_types::sticker_metadata::StickerMetadataTemplateId;
    pub use pogo_masterfile_types::tappable_settings::TappableSettingsTemplateId;
    pub use pogo_masterfile_types::temporary_evolution_settings::TemporaryEvolutionSettingsTemplateId;
    pub use pogo_masterfile_types::type_effective::TypeEffectiveTemplateId;
    pub use pogo_masterfile_types::vs_seeker_loot::VsSeekerLootTemplateId;
    pub use pogo_masterfile_types::vs_seeker_pokemon_rewards::VsSeekerPokemonRewardsTemplateId;
    pub use pogo_masterfile_types::weather_affinities::WeatherAffinitiesTemplateId;
}
use template_ids::*;

/// Per-group index storage. Owned by `Masterfile`. The hand-written
/// `masterfile.rs` template references this struct generically — the
/// per-group fields are filled in here so the template never has to know
/// the group set.
pub(crate) struct GroupIndexes {
    pub(crate) avatar_customization_index: HashMap<AvatarCustomizationTemplateId, usize>,
    pub(crate) avatar_customization_order: Vec<usize>,
    pub(crate) avatar_group_order_settings_index:
        HashMap<AvatarGroupOrderSettingsTemplateId, usize>,
    pub(crate) avatar_group_order_settings_order: Vec<usize>,
    pub(crate) avatar_item_display_index: HashMap<AvatarItemDisplayTemplateId, usize>,
    pub(crate) avatar_item_display_order: Vec<usize>,
    pub(crate) badge_settings_index: HashMap<BadgeSettingsTemplateId, usize>,
    pub(crate) badge_settings_order: Vec<usize>,
    pub(crate) bread_move_level_settings_index: HashMap<BreadMoveLevelSettingsTemplateId, usize>,
    pub(crate) bread_move_level_settings_order: Vec<usize>,
    pub(crate) buddy_activity_category_settings_index:
        HashMap<BuddyActivityCategorySettingsTemplateId, usize>,
    pub(crate) buddy_activity_category_settings_order: Vec<usize>,
    pub(crate) buddy_emotion_level_settings_index:
        HashMap<BuddyEmotionLevelSettingsTemplateId, usize>,
    pub(crate) buddy_emotion_level_settings_order: Vec<usize>,
    pub(crate) buddy_level_settings_index: HashMap<BuddyLevelSettingsTemplateId, usize>,
    pub(crate) buddy_level_settings_order: Vec<usize>,
    pub(crate) client_quest_template_index: HashMap<ClientQuestTemplateTemplateId, usize>,
    pub(crate) client_quest_template_order: Vec<usize>,
    pub(crate) code_gate_proto_index: HashMap<CodeGateProtoTemplateId, usize>,
    pub(crate) code_gate_proto_order: Vec<usize>,
    pub(crate) combat_league_index: HashMap<CombatLeagueTemplateId, usize>,
    pub(crate) combat_league_order: Vec<usize>,
    pub(crate) combat_move_index: HashMap<CombatMoveTemplateId, usize>,
    pub(crate) combat_move_order: Vec<usize>,
    pub(crate) combat_npc_personality_index: HashMap<CombatNpcPersonalityTemplateId, usize>,
    pub(crate) combat_npc_personality_order: Vec<usize>,
    pub(crate) combat_npc_trainer_index: HashMap<CombatNpcTrainerTemplateId, usize>,
    pub(crate) combat_npc_trainer_order: Vec<usize>,
    pub(crate) combat_ranking_proto_settings_index:
        HashMap<CombatRankingProtoSettingsTemplateId, usize>,
    pub(crate) combat_ranking_proto_settings_order: Vec<usize>,
    pub(crate) combat_type_index: HashMap<CombatTypeTemplateId, usize>,
    pub(crate) combat_type_order: Vec<usize>,
    pub(crate) event_pass_tier_settings_index: HashMap<EventPassTierSettingsTemplateId, usize>,
    pub(crate) event_pass_tier_settings_order: Vec<usize>,
    pub(crate) evolution_chain_display_settings_index:
        HashMap<EvolutionChainDisplaySettingsTemplateId, usize>,
    pub(crate) evolution_chain_display_settings_order: Vec<usize>,
    pub(crate) evolution_quest_template_index: HashMap<EvolutionQuestTemplateTemplateId, usize>,
    pub(crate) evolution_quest_template_order: Vec<usize>,
    pub(crate) feature_gate_index: HashMap<FeatureGateTemplateId, usize>,
    pub(crate) feature_gate_order: Vec<usize>,
    pub(crate) form_settings_index: HashMap<FormSettingsTemplateId, usize>,
    pub(crate) form_settings_order: Vec<usize>,
    pub(crate) fort_power_up_level_settings_index:
        HashMap<FortPowerUpLevelSettingsTemplateId, usize>,
    pub(crate) fort_power_up_level_settings_order: Vec<usize>,
    pub(crate) friendship_milestone_settings_index:
        HashMap<FriendshipMilestoneSettingsTemplateId, usize>,
    pub(crate) friendship_milestone_settings_order: Vec<usize>,
    pub(crate) gender_settings_index: HashMap<GenderSettingsTemplateId, usize>,
    pub(crate) gender_settings_order: Vec<usize>,
    pub(crate) iap_category_display_index: HashMap<IapCategoryDisplayTemplateId, usize>,
    pub(crate) iap_category_display_order: Vec<usize>,
    pub(crate) iap_item_display_index: HashMap<IapItemDisplayTemplateId, usize>,
    pub(crate) iap_item_display_order: Vec<usize>,
    pub(crate) invasion_npc_display_settings_index:
        HashMap<InvasionNpcDisplaySettingsTemplateId, usize>,
    pub(crate) invasion_npc_display_settings_order: Vec<usize>,
    pub(crate) item_expiration_settings_index: HashMap<ItemExpirationSettingsTemplateId, usize>,
    pub(crate) item_expiration_settings_order: Vec<usize>,
    pub(crate) item_settings_index: HashMap<ItemSettingsTemplateId, usize>,
    pub(crate) item_settings_order: Vec<usize>,
    pub(crate) language_settings_index: HashMap<LanguageSettingsTemplateId, usize>,
    pub(crate) language_settings_order: Vec<usize>,
    pub(crate) level_up_rewards_index: HashMap<LevelUpRewardsTemplateId, usize>,
    pub(crate) level_up_rewards_order: Vec<usize>,
    pub(crate) limited_purchase_sku_settings_index:
        HashMap<LimitedPurchaseSkuSettingsTemplateId, usize>,
    pub(crate) limited_purchase_sku_settings_order: Vec<usize>,
    pub(crate) location_card_settings_index: HashMap<LocationCardSettingsTemplateId, usize>,
    pub(crate) location_card_settings_order: Vec<usize>,
    pub(crate) mega_evo_level_settings_index: HashMap<MegaEvoLevelSettingsTemplateId, usize>,
    pub(crate) mega_evo_level_settings_order: Vec<usize>,
    pub(crate) move_sequence_settings_index: HashMap<MoveSequenceSettingsTemplateId, usize>,
    pub(crate) move_sequence_settings_order: Vec<usize>,
    pub(crate) move_settings_index: HashMap<MoveSettingsTemplateId, usize>,
    pub(crate) move_settings_order: Vec<usize>,
    pub(crate) non_combat_move_settings_index: HashMap<NonCombatMoveSettingsTemplateId, usize>,
    pub(crate) non_combat_move_settings_order: Vec<usize>,
    pub(crate) party_play_general_settings_index:
        HashMap<PartyPlayGeneralSettingsTemplateId, usize>,
    pub(crate) party_play_general_settings_order: Vec<usize>,
    pub(crate) photo_sets_settings_proto_index: HashMap<PhotoSetsSettingsProtoTemplateId, usize>,
    pub(crate) photo_sets_settings_proto_order: Vec<usize>,
    pub(crate) pokemon_extended_settings_index: HashMap<PokemonExtendedSettingsTemplateId, usize>,
    pub(crate) pokemon_extended_settings_order: Vec<usize>,
    pub(crate) pokemon_family_index: HashMap<PokemonFamilyTemplateId, usize>,
    pub(crate) pokemon_family_order: Vec<usize>,
    pub(crate) pokemon_home_energy_costs_index: HashMap<PokemonHomeEnergyCostsTemplateId, usize>,
    pub(crate) pokemon_home_energy_costs_order: Vec<usize>,
    pub(crate) pokemon_home_form_reversions_index:
        HashMap<PokemonHomeFormReversionsTemplateId, usize>,
    pub(crate) pokemon_home_form_reversions_order: Vec<usize>,
    pub(crate) pokemon_scale_settings_index: HashMap<PokemonScaleSettingsTemplateId, usize>,
    pub(crate) pokemon_scale_settings_order: Vec<usize>,
    pub(crate) pokemon_settings_index: HashMap<PokemonSettingsTemplateId, usize>,
    pub(crate) pokemon_settings_order: Vec<usize>,
    pub(crate) pokemon_upgrades_index: HashMap<PokemonUpgradesTemplateId, usize>,
    pub(crate) pokemon_upgrades_order: Vec<usize>,
    pub(crate) pokestop_invasion_availability_settings_index:
        HashMap<PokestopInvasionAvailabilitySettingsTemplateId, usize>,
    pub(crate) pokestop_invasion_availability_settings_order: Vec<usize>,
    pub(crate) quest_settings_index: HashMap<QuestSettingsTemplateId, usize>,
    pub(crate) quest_settings_order: Vec<usize>,
    pub(crate) recommended_search_settings_index:
        HashMap<RecommendedSearchSettingsTemplateId, usize>,
    pub(crate) recommended_search_settings_order: Vec<usize>,
    pub(crate) roll_back_index: HashMap<RollBackTemplateId, usize>,
    pub(crate) roll_back_order: Vec<usize>,
    pub(crate) settings_override_rule_index: HashMap<SettingsOverrideRuleTemplateId, usize>,
    pub(crate) settings_override_rule_order: Vec<usize>,
    pub(crate) sticker_metadata_index: HashMap<StickerMetadataTemplateId, usize>,
    pub(crate) sticker_metadata_order: Vec<usize>,
    pub(crate) tappable_settings_index: HashMap<TappableSettingsTemplateId, usize>,
    pub(crate) tappable_settings_order: Vec<usize>,
    pub(crate) temporary_evolution_settings_index:
        HashMap<TemporaryEvolutionSettingsTemplateId, usize>,
    pub(crate) temporary_evolution_settings_order: Vec<usize>,
    pub(crate) type_effective_index: HashMap<TypeEffectiveTemplateId, usize>,
    pub(crate) type_effective_order: Vec<usize>,
    pub(crate) vs_seeker_loot_index: HashMap<VsSeekerLootTemplateId, usize>,
    pub(crate) vs_seeker_loot_order: Vec<usize>,
    pub(crate) vs_seeker_pokemon_rewards_index: HashMap<VsSeekerPokemonRewardsTemplateId, usize>,
    pub(crate) vs_seeker_pokemon_rewards_order: Vec<usize>,
    pub(crate) weather_affinities_index: HashMap<WeatherAffinitiesTemplateId, usize>,
    pub(crate) weather_affinities_order: Vec<usize>,
}

impl GroupIndexes {
    /// Walk every entry once, dispatching by variant into the right per-group
    /// index + order. Singletons fall through the wildcard arm — they're
    /// addressable via the global `by_id` map but don't get a per-group bucket.
    pub(crate) fn build(entries: &[MasterfileEntry]) -> Self {
        let mut avatar_customization_index: HashMap<AvatarCustomizationTemplateId, usize> =
            HashMap::new();
        let mut avatar_customization_order: Vec<usize> = Vec::new();
        let mut avatar_group_order_settings_index: HashMap<
            AvatarGroupOrderSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut avatar_group_order_settings_order: Vec<usize> = Vec::new();
        let mut avatar_item_display_index: HashMap<AvatarItemDisplayTemplateId, usize> =
            HashMap::new();
        let mut avatar_item_display_order: Vec<usize> = Vec::new();
        let mut badge_settings_index: HashMap<BadgeSettingsTemplateId, usize> = HashMap::new();
        let mut badge_settings_order: Vec<usize> = Vec::new();
        let mut bread_move_level_settings_index: HashMap<BreadMoveLevelSettingsTemplateId, usize> =
            HashMap::new();
        let mut bread_move_level_settings_order: Vec<usize> = Vec::new();
        let mut buddy_activity_category_settings_index: HashMap<
            BuddyActivityCategorySettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut buddy_activity_category_settings_order: Vec<usize> = Vec::new();
        let mut buddy_emotion_level_settings_index: HashMap<
            BuddyEmotionLevelSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut buddy_emotion_level_settings_order: Vec<usize> = Vec::new();
        let mut buddy_level_settings_index: HashMap<BuddyLevelSettingsTemplateId, usize> =
            HashMap::new();
        let mut buddy_level_settings_order: Vec<usize> = Vec::new();
        let mut client_quest_template_index: HashMap<ClientQuestTemplateTemplateId, usize> =
            HashMap::new();
        let mut client_quest_template_order: Vec<usize> = Vec::new();
        let mut code_gate_proto_index: HashMap<CodeGateProtoTemplateId, usize> = HashMap::new();
        let mut code_gate_proto_order: Vec<usize> = Vec::new();
        let mut combat_league_index: HashMap<CombatLeagueTemplateId, usize> = HashMap::new();
        let mut combat_league_order: Vec<usize> = Vec::new();
        let mut combat_move_index: HashMap<CombatMoveTemplateId, usize> = HashMap::new();
        let mut combat_move_order: Vec<usize> = Vec::new();
        let mut combat_npc_personality_index: HashMap<CombatNpcPersonalityTemplateId, usize> =
            HashMap::new();
        let mut combat_npc_personality_order: Vec<usize> = Vec::new();
        let mut combat_npc_trainer_index: HashMap<CombatNpcTrainerTemplateId, usize> =
            HashMap::new();
        let mut combat_npc_trainer_order: Vec<usize> = Vec::new();
        let mut combat_ranking_proto_settings_index: HashMap<
            CombatRankingProtoSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut combat_ranking_proto_settings_order: Vec<usize> = Vec::new();
        let mut combat_type_index: HashMap<CombatTypeTemplateId, usize> = HashMap::new();
        let mut combat_type_order: Vec<usize> = Vec::new();
        let mut event_pass_tier_settings_index: HashMap<EventPassTierSettingsTemplateId, usize> =
            HashMap::new();
        let mut event_pass_tier_settings_order: Vec<usize> = Vec::new();
        let mut evolution_chain_display_settings_index: HashMap<
            EvolutionChainDisplaySettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut evolution_chain_display_settings_order: Vec<usize> = Vec::new();
        let mut evolution_quest_template_index: HashMap<EvolutionQuestTemplateTemplateId, usize> =
            HashMap::new();
        let mut evolution_quest_template_order: Vec<usize> = Vec::new();
        let mut feature_gate_index: HashMap<FeatureGateTemplateId, usize> = HashMap::new();
        let mut feature_gate_order: Vec<usize> = Vec::new();
        let mut form_settings_index: HashMap<FormSettingsTemplateId, usize> = HashMap::new();
        let mut form_settings_order: Vec<usize> = Vec::new();
        let mut fort_power_up_level_settings_index: HashMap<
            FortPowerUpLevelSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut fort_power_up_level_settings_order: Vec<usize> = Vec::new();
        let mut friendship_milestone_settings_index: HashMap<
            FriendshipMilestoneSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut friendship_milestone_settings_order: Vec<usize> = Vec::new();
        let mut gender_settings_index: HashMap<GenderSettingsTemplateId, usize> = HashMap::new();
        let mut gender_settings_order: Vec<usize> = Vec::new();
        let mut iap_category_display_index: HashMap<IapCategoryDisplayTemplateId, usize> =
            HashMap::new();
        let mut iap_category_display_order: Vec<usize> = Vec::new();
        let mut iap_item_display_index: HashMap<IapItemDisplayTemplateId, usize> = HashMap::new();
        let mut iap_item_display_order: Vec<usize> = Vec::new();
        let mut invasion_npc_display_settings_index: HashMap<
            InvasionNpcDisplaySettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut invasion_npc_display_settings_order: Vec<usize> = Vec::new();
        let mut item_expiration_settings_index: HashMap<ItemExpirationSettingsTemplateId, usize> =
            HashMap::new();
        let mut item_expiration_settings_order: Vec<usize> = Vec::new();
        let mut item_settings_index: HashMap<ItemSettingsTemplateId, usize> = HashMap::new();
        let mut item_settings_order: Vec<usize> = Vec::new();
        let mut language_settings_index: HashMap<LanguageSettingsTemplateId, usize> =
            HashMap::new();
        let mut language_settings_order: Vec<usize> = Vec::new();
        let mut level_up_rewards_index: HashMap<LevelUpRewardsTemplateId, usize> = HashMap::new();
        let mut level_up_rewards_order: Vec<usize> = Vec::new();
        let mut limited_purchase_sku_settings_index: HashMap<
            LimitedPurchaseSkuSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut limited_purchase_sku_settings_order: Vec<usize> = Vec::new();
        let mut location_card_settings_index: HashMap<LocationCardSettingsTemplateId, usize> =
            HashMap::new();
        let mut location_card_settings_order: Vec<usize> = Vec::new();
        let mut mega_evo_level_settings_index: HashMap<MegaEvoLevelSettingsTemplateId, usize> =
            HashMap::new();
        let mut mega_evo_level_settings_order: Vec<usize> = Vec::new();
        let mut move_sequence_settings_index: HashMap<MoveSequenceSettingsTemplateId, usize> =
            HashMap::new();
        let mut move_sequence_settings_order: Vec<usize> = Vec::new();
        let mut move_settings_index: HashMap<MoveSettingsTemplateId, usize> = HashMap::new();
        let mut move_settings_order: Vec<usize> = Vec::new();
        let mut non_combat_move_settings_index: HashMap<NonCombatMoveSettingsTemplateId, usize> =
            HashMap::new();
        let mut non_combat_move_settings_order: Vec<usize> = Vec::new();
        let mut party_play_general_settings_index: HashMap<
            PartyPlayGeneralSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut party_play_general_settings_order: Vec<usize> = Vec::new();
        let mut photo_sets_settings_proto_index: HashMap<PhotoSetsSettingsProtoTemplateId, usize> =
            HashMap::new();
        let mut photo_sets_settings_proto_order: Vec<usize> = Vec::new();
        let mut pokemon_extended_settings_index: HashMap<PokemonExtendedSettingsTemplateId, usize> =
            HashMap::new();
        let mut pokemon_extended_settings_order: Vec<usize> = Vec::new();
        let mut pokemon_family_index: HashMap<PokemonFamilyTemplateId, usize> = HashMap::new();
        let mut pokemon_family_order: Vec<usize> = Vec::new();
        let mut pokemon_home_energy_costs_index: HashMap<PokemonHomeEnergyCostsTemplateId, usize> =
            HashMap::new();
        let mut pokemon_home_energy_costs_order: Vec<usize> = Vec::new();
        let mut pokemon_home_form_reversions_index: HashMap<
            PokemonHomeFormReversionsTemplateId,
            usize,
        > = HashMap::new();
        let mut pokemon_home_form_reversions_order: Vec<usize> = Vec::new();
        let mut pokemon_scale_settings_index: HashMap<PokemonScaleSettingsTemplateId, usize> =
            HashMap::new();
        let mut pokemon_scale_settings_order: Vec<usize> = Vec::new();
        let mut pokemon_settings_index: HashMap<PokemonSettingsTemplateId, usize> = HashMap::new();
        let mut pokemon_settings_order: Vec<usize> = Vec::new();
        let mut pokemon_upgrades_index: HashMap<PokemonUpgradesTemplateId, usize> = HashMap::new();
        let mut pokemon_upgrades_order: Vec<usize> = Vec::new();
        let mut pokestop_invasion_availability_settings_index: HashMap<
            PokestopInvasionAvailabilitySettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut pokestop_invasion_availability_settings_order: Vec<usize> = Vec::new();
        let mut quest_settings_index: HashMap<QuestSettingsTemplateId, usize> = HashMap::new();
        let mut quest_settings_order: Vec<usize> = Vec::new();
        let mut recommended_search_settings_index: HashMap<
            RecommendedSearchSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut recommended_search_settings_order: Vec<usize> = Vec::new();
        let mut roll_back_index: HashMap<RollBackTemplateId, usize> = HashMap::new();
        let mut roll_back_order: Vec<usize> = Vec::new();
        let mut settings_override_rule_index: HashMap<SettingsOverrideRuleTemplateId, usize> =
            HashMap::new();
        let mut settings_override_rule_order: Vec<usize> = Vec::new();
        let mut sticker_metadata_index: HashMap<StickerMetadataTemplateId, usize> = HashMap::new();
        let mut sticker_metadata_order: Vec<usize> = Vec::new();
        let mut tappable_settings_index: HashMap<TappableSettingsTemplateId, usize> =
            HashMap::new();
        let mut tappable_settings_order: Vec<usize> = Vec::new();
        let mut temporary_evolution_settings_index: HashMap<
            TemporaryEvolutionSettingsTemplateId,
            usize,
        > = HashMap::new();
        let mut temporary_evolution_settings_order: Vec<usize> = Vec::new();
        let mut type_effective_index: HashMap<TypeEffectiveTemplateId, usize> = HashMap::new();
        let mut type_effective_order: Vec<usize> = Vec::new();
        let mut vs_seeker_loot_index: HashMap<VsSeekerLootTemplateId, usize> = HashMap::new();
        let mut vs_seeker_loot_order: Vec<usize> = Vec::new();
        let mut vs_seeker_pokemon_rewards_index: HashMap<VsSeekerPokemonRewardsTemplateId, usize> =
            HashMap::new();
        let mut vs_seeker_pokemon_rewards_order: Vec<usize> = Vec::new();
        let mut weather_affinities_index: HashMap<WeatherAffinitiesTemplateId, usize> =
            HashMap::new();
        let mut weather_affinities_order: Vec<usize> = Vec::new();

        for (idx, entry) in entries.iter().enumerate() {
            match entry {
                MasterfileEntry::AvatarCustomization(_) => {
                    if let Ok(typed) = entry.template_id().parse::<AvatarCustomizationTemplateId>()
                    {
                        avatar_customization_index.insert(typed, idx);
                        avatar_customization_order.push(idx);
                    }
                }
                MasterfileEntry::AvatarGroupOrderSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<AvatarGroupOrderSettingsTemplateId>()
                    {
                        avatar_group_order_settings_index.insert(typed, idx);
                        avatar_group_order_settings_order.push(idx);
                    }
                }
                MasterfileEntry::AvatarItemDisplay(_) => {
                    if let Ok(typed) = entry.template_id().parse::<AvatarItemDisplayTemplateId>() {
                        avatar_item_display_index.insert(typed, idx);
                        avatar_item_display_order.push(idx);
                    }
                }
                MasterfileEntry::BadgeSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<BadgeSettingsTemplateId>() {
                        badge_settings_index.insert(typed, idx);
                        badge_settings_order.push(idx);
                    }
                }
                MasterfileEntry::BreadMoveLevelSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<BreadMoveLevelSettingsTemplateId>()
                    {
                        bread_move_level_settings_index.insert(typed, idx);
                        bread_move_level_settings_order.push(idx);
                    }
                }
                MasterfileEntry::BuddyActivityCategorySettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<BuddyActivityCategorySettingsTemplateId>()
                    {
                        buddy_activity_category_settings_index.insert(typed, idx);
                        buddy_activity_category_settings_order.push(idx);
                    }
                }
                MasterfileEntry::BuddyEmotionLevelSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<BuddyEmotionLevelSettingsTemplateId>()
                    {
                        buddy_emotion_level_settings_index.insert(typed, idx);
                        buddy_emotion_level_settings_order.push(idx);
                    }
                }
                MasterfileEntry::BuddyLevelSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<BuddyLevelSettingsTemplateId>() {
                        buddy_level_settings_index.insert(typed, idx);
                        buddy_level_settings_order.push(idx);
                    }
                }
                MasterfileEntry::ClientQuestTemplate(_) => {
                    if let Ok(typed) = entry.template_id().parse::<ClientQuestTemplateTemplateId>()
                    {
                        client_quest_template_index.insert(typed, idx);
                        client_quest_template_order.push(idx);
                    }
                }
                MasterfileEntry::CodeGateProto(_) => {
                    if let Ok(typed) = entry.template_id().parse::<CodeGateProtoTemplateId>() {
                        code_gate_proto_index.insert(typed, idx);
                        code_gate_proto_order.push(idx);
                    }
                }
                MasterfileEntry::CombatLeague(_) => {
                    if let Ok(typed) = entry.template_id().parse::<CombatLeagueTemplateId>() {
                        combat_league_index.insert(typed, idx);
                        combat_league_order.push(idx);
                    }
                }
                MasterfileEntry::CombatMove(_) => {
                    if let Ok(typed) = entry.template_id().parse::<CombatMoveTemplateId>() {
                        combat_move_index.insert(typed, idx);
                        combat_move_order.push(idx);
                    }
                }
                MasterfileEntry::CombatNpcPersonality(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<CombatNpcPersonalityTemplateId>()
                    {
                        combat_npc_personality_index.insert(typed, idx);
                        combat_npc_personality_order.push(idx);
                    }
                }
                MasterfileEntry::CombatNpcTrainer(_) => {
                    if let Ok(typed) = entry.template_id().parse::<CombatNpcTrainerTemplateId>() {
                        combat_npc_trainer_index.insert(typed, idx);
                        combat_npc_trainer_order.push(idx);
                    }
                }
                MasterfileEntry::CombatRankingProtoSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<CombatRankingProtoSettingsTemplateId>()
                    {
                        combat_ranking_proto_settings_index.insert(typed, idx);
                        combat_ranking_proto_settings_order.push(idx);
                    }
                }
                MasterfileEntry::CombatType(_) => {
                    if let Ok(typed) = entry.template_id().parse::<CombatTypeTemplateId>() {
                        combat_type_index.insert(typed, idx);
                        combat_type_order.push(idx);
                    }
                }
                MasterfileEntry::EventPassTierSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<EventPassTierSettingsTemplateId>()
                    {
                        event_pass_tier_settings_index.insert(typed, idx);
                        event_pass_tier_settings_order.push(idx);
                    }
                }
                MasterfileEntry::EvolutionChainDisplaySettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<EvolutionChainDisplaySettingsTemplateId>()
                    {
                        evolution_chain_display_settings_index.insert(typed, idx);
                        evolution_chain_display_settings_order.push(idx);
                    }
                }
                MasterfileEntry::EvolutionQuestTemplate(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<EvolutionQuestTemplateTemplateId>()
                    {
                        evolution_quest_template_index.insert(typed, idx);
                        evolution_quest_template_order.push(idx);
                    }
                }
                MasterfileEntry::FeatureGate(_) => {
                    if let Ok(typed) = entry.template_id().parse::<FeatureGateTemplateId>() {
                        feature_gate_index.insert(typed, idx);
                        feature_gate_order.push(idx);
                    }
                }
                MasterfileEntry::FormSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<FormSettingsTemplateId>() {
                        form_settings_index.insert(typed, idx);
                        form_settings_order.push(idx);
                    }
                }
                MasterfileEntry::FortPowerUpLevelSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<FortPowerUpLevelSettingsTemplateId>()
                    {
                        fort_power_up_level_settings_index.insert(typed, idx);
                        fort_power_up_level_settings_order.push(idx);
                    }
                }
                MasterfileEntry::FriendshipMilestoneSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<FriendshipMilestoneSettingsTemplateId>()
                    {
                        friendship_milestone_settings_index.insert(typed, idx);
                        friendship_milestone_settings_order.push(idx);
                    }
                }
                MasterfileEntry::GenderSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<GenderSettingsTemplateId>() {
                        gender_settings_index.insert(typed, idx);
                        gender_settings_order.push(idx);
                    }
                }
                MasterfileEntry::IapCategoryDisplay(_) => {
                    if let Ok(typed) = entry.template_id().parse::<IapCategoryDisplayTemplateId>() {
                        iap_category_display_index.insert(typed, idx);
                        iap_category_display_order.push(idx);
                    }
                }
                MasterfileEntry::IapItemDisplay(_) => {
                    if let Ok(typed) = entry.template_id().parse::<IapItemDisplayTemplateId>() {
                        iap_item_display_index.insert(typed, idx);
                        iap_item_display_order.push(idx);
                    }
                }
                MasterfileEntry::InvasionNpcDisplaySettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<InvasionNpcDisplaySettingsTemplateId>()
                    {
                        invasion_npc_display_settings_index.insert(typed, idx);
                        invasion_npc_display_settings_order.push(idx);
                    }
                }
                MasterfileEntry::ItemExpirationSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<ItemExpirationSettingsTemplateId>()
                    {
                        item_expiration_settings_index.insert(typed, idx);
                        item_expiration_settings_order.push(idx);
                    }
                }
                MasterfileEntry::ItemSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<ItemSettingsTemplateId>() {
                        item_settings_index.insert(typed, idx);
                        item_settings_order.push(idx);
                    }
                }
                MasterfileEntry::LanguageSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<LanguageSettingsTemplateId>() {
                        language_settings_index.insert(typed, idx);
                        language_settings_order.push(idx);
                    }
                }
                MasterfileEntry::LevelUpRewards(_) => {
                    if let Ok(typed) = entry.template_id().parse::<LevelUpRewardsTemplateId>() {
                        level_up_rewards_index.insert(typed, idx);
                        level_up_rewards_order.push(idx);
                    }
                }
                MasterfileEntry::LimitedPurchaseSkuSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<LimitedPurchaseSkuSettingsTemplateId>()
                    {
                        limited_purchase_sku_settings_index.insert(typed, idx);
                        limited_purchase_sku_settings_order.push(idx);
                    }
                }
                MasterfileEntry::LocationCardSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<LocationCardSettingsTemplateId>()
                    {
                        location_card_settings_index.insert(typed, idx);
                        location_card_settings_order.push(idx);
                    }
                }
                MasterfileEntry::MegaEvoLevelSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<MegaEvoLevelSettingsTemplateId>()
                    {
                        mega_evo_level_settings_index.insert(typed, idx);
                        mega_evo_level_settings_order.push(idx);
                    }
                }
                MasterfileEntry::MoveSequenceSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<MoveSequenceSettingsTemplateId>()
                    {
                        move_sequence_settings_index.insert(typed, idx);
                        move_sequence_settings_order.push(idx);
                    }
                }
                MasterfileEntry::MoveSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<MoveSettingsTemplateId>() {
                        move_settings_index.insert(typed, idx);
                        move_settings_order.push(idx);
                    }
                }
                MasterfileEntry::NonCombatMoveSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<NonCombatMoveSettingsTemplateId>()
                    {
                        non_combat_move_settings_index.insert(typed, idx);
                        non_combat_move_settings_order.push(idx);
                    }
                }
                MasterfileEntry::PartyPlayGeneralSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PartyPlayGeneralSettingsTemplateId>()
                    {
                        party_play_general_settings_index.insert(typed, idx);
                        party_play_general_settings_order.push(idx);
                    }
                }
                MasterfileEntry::PhotoSetsSettingsProto(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PhotoSetsSettingsProtoTemplateId>()
                    {
                        photo_sets_settings_proto_index.insert(typed, idx);
                        photo_sets_settings_proto_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonExtendedSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PokemonExtendedSettingsTemplateId>()
                    {
                        pokemon_extended_settings_index.insert(typed, idx);
                        pokemon_extended_settings_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonFamily(_) => {
                    if let Ok(typed) = entry.template_id().parse::<PokemonFamilyTemplateId>() {
                        pokemon_family_index.insert(typed, idx);
                        pokemon_family_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonHomeEnergyCosts(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PokemonHomeEnergyCostsTemplateId>()
                    {
                        pokemon_home_energy_costs_index.insert(typed, idx);
                        pokemon_home_energy_costs_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonHomeFormReversions(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PokemonHomeFormReversionsTemplateId>()
                    {
                        pokemon_home_form_reversions_index.insert(typed, idx);
                        pokemon_home_form_reversions_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonScaleSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PokemonScaleSettingsTemplateId>()
                    {
                        pokemon_scale_settings_index.insert(typed, idx);
                        pokemon_scale_settings_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<PokemonSettingsTemplateId>() {
                        pokemon_settings_index.insert(typed, idx);
                        pokemon_settings_order.push(idx);
                    }
                }
                MasterfileEntry::PokemonUpgrades(_) => {
                    if let Ok(typed) = entry.template_id().parse::<PokemonUpgradesTemplateId>() {
                        pokemon_upgrades_index.insert(typed, idx);
                        pokemon_upgrades_order.push(idx);
                    }
                }
                MasterfileEntry::PokestopInvasionAvailabilitySettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<PokestopInvasionAvailabilitySettingsTemplateId>()
                    {
                        pokestop_invasion_availability_settings_index.insert(typed, idx);
                        pokestop_invasion_availability_settings_order.push(idx);
                    }
                }
                MasterfileEntry::QuestSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<QuestSettingsTemplateId>() {
                        quest_settings_index.insert(typed, idx);
                        quest_settings_order.push(idx);
                    }
                }
                MasterfileEntry::RecommendedSearchSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<RecommendedSearchSettingsTemplateId>()
                    {
                        recommended_search_settings_index.insert(typed, idx);
                        recommended_search_settings_order.push(idx);
                    }
                }
                MasterfileEntry::RollBack(_) => {
                    if let Ok(typed) = entry.template_id().parse::<RollBackTemplateId>() {
                        roll_back_index.insert(typed, idx);
                        roll_back_order.push(idx);
                    }
                }
                MasterfileEntry::SettingsOverrideRule(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<SettingsOverrideRuleTemplateId>()
                    {
                        settings_override_rule_index.insert(typed, idx);
                        settings_override_rule_order.push(idx);
                    }
                }
                MasterfileEntry::StickerMetadata(_) => {
                    if let Ok(typed) = entry.template_id().parse::<StickerMetadataTemplateId>() {
                        sticker_metadata_index.insert(typed, idx);
                        sticker_metadata_order.push(idx);
                    }
                }
                MasterfileEntry::TappableSettings(_) => {
                    if let Ok(typed) = entry.template_id().parse::<TappableSettingsTemplateId>() {
                        tappable_settings_index.insert(typed, idx);
                        tappable_settings_order.push(idx);
                    }
                }
                MasterfileEntry::TemporaryEvolutionSettings(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<TemporaryEvolutionSettingsTemplateId>()
                    {
                        temporary_evolution_settings_index.insert(typed, idx);
                        temporary_evolution_settings_order.push(idx);
                    }
                }
                MasterfileEntry::TypeEffective(_) => {
                    if let Ok(typed) = entry.template_id().parse::<TypeEffectiveTemplateId>() {
                        type_effective_index.insert(typed, idx);
                        type_effective_order.push(idx);
                    }
                }
                MasterfileEntry::VsSeekerLoot(_) => {
                    if let Ok(typed) = entry.template_id().parse::<VsSeekerLootTemplateId>() {
                        vs_seeker_loot_index.insert(typed, idx);
                        vs_seeker_loot_order.push(idx);
                    }
                }
                MasterfileEntry::VsSeekerPokemonRewards(_) => {
                    if let Ok(typed) = entry
                        .template_id()
                        .parse::<VsSeekerPokemonRewardsTemplateId>()
                    {
                        vs_seeker_pokemon_rewards_index.insert(typed, idx);
                        vs_seeker_pokemon_rewards_order.push(idx);
                    }
                }
                MasterfileEntry::WeatherAffinities(_) => {
                    if let Ok(typed) = entry.template_id().parse::<WeatherAffinitiesTemplateId>() {
                        weather_affinities_index.insert(typed, idx);
                        weather_affinities_order.push(idx);
                    }
                }
                _ => {}
            }
        }

        Self {
            avatar_customization_index,
            avatar_customization_order,
            avatar_group_order_settings_index,
            avatar_group_order_settings_order,
            avatar_item_display_index,
            avatar_item_display_order,
            badge_settings_index,
            badge_settings_order,
            bread_move_level_settings_index,
            bread_move_level_settings_order,
            buddy_activity_category_settings_index,
            buddy_activity_category_settings_order,
            buddy_emotion_level_settings_index,
            buddy_emotion_level_settings_order,
            buddy_level_settings_index,
            buddy_level_settings_order,
            client_quest_template_index,
            client_quest_template_order,
            code_gate_proto_index,
            code_gate_proto_order,
            combat_league_index,
            combat_league_order,
            combat_move_index,
            combat_move_order,
            combat_npc_personality_index,
            combat_npc_personality_order,
            combat_npc_trainer_index,
            combat_npc_trainer_order,
            combat_ranking_proto_settings_index,
            combat_ranking_proto_settings_order,
            combat_type_index,
            combat_type_order,
            event_pass_tier_settings_index,
            event_pass_tier_settings_order,
            evolution_chain_display_settings_index,
            evolution_chain_display_settings_order,
            evolution_quest_template_index,
            evolution_quest_template_order,
            feature_gate_index,
            feature_gate_order,
            form_settings_index,
            form_settings_order,
            fort_power_up_level_settings_index,
            fort_power_up_level_settings_order,
            friendship_milestone_settings_index,
            friendship_milestone_settings_order,
            gender_settings_index,
            gender_settings_order,
            iap_category_display_index,
            iap_category_display_order,
            iap_item_display_index,
            iap_item_display_order,
            invasion_npc_display_settings_index,
            invasion_npc_display_settings_order,
            item_expiration_settings_index,
            item_expiration_settings_order,
            item_settings_index,
            item_settings_order,
            language_settings_index,
            language_settings_order,
            level_up_rewards_index,
            level_up_rewards_order,
            limited_purchase_sku_settings_index,
            limited_purchase_sku_settings_order,
            location_card_settings_index,
            location_card_settings_order,
            mega_evo_level_settings_index,
            mega_evo_level_settings_order,
            move_sequence_settings_index,
            move_sequence_settings_order,
            move_settings_index,
            move_settings_order,
            non_combat_move_settings_index,
            non_combat_move_settings_order,
            party_play_general_settings_index,
            party_play_general_settings_order,
            photo_sets_settings_proto_index,
            photo_sets_settings_proto_order,
            pokemon_extended_settings_index,
            pokemon_extended_settings_order,
            pokemon_family_index,
            pokemon_family_order,
            pokemon_home_energy_costs_index,
            pokemon_home_energy_costs_order,
            pokemon_home_form_reversions_index,
            pokemon_home_form_reversions_order,
            pokemon_scale_settings_index,
            pokemon_scale_settings_order,
            pokemon_settings_index,
            pokemon_settings_order,
            pokemon_upgrades_index,
            pokemon_upgrades_order,
            pokestop_invasion_availability_settings_index,
            pokestop_invasion_availability_settings_order,
            quest_settings_index,
            quest_settings_order,
            recommended_search_settings_index,
            recommended_search_settings_order,
            roll_back_index,
            roll_back_order,
            settings_override_rule_index,
            settings_override_rule_order,
            sticker_metadata_index,
            sticker_metadata_order,
            tappable_settings_index,
            tappable_settings_order,
            temporary_evolution_settings_index,
            temporary_evolution_settings_order,
            type_effective_index,
            type_effective_order,
            vs_seeker_loot_index,
            vs_seeker_loot_order,
            vs_seeker_pokemon_rewards_index,
            vs_seeker_pokemon_rewards_order,
            weather_affinities_index,
            weather_affinities_order,
        }
    }
}

impl Masterfile {
    pub fn avatar_customization(&self) -> accessor::AvatarCustomizationAccessor<'_> {
        accessor::AvatarCustomizationAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_customization_index,
            order: &self.groups.avatar_customization_order,
        }
    }

    pub fn avatar_group_order_settings(&self) -> accessor::AvatarGroupOrderSettingsAccessor<'_> {
        accessor::AvatarGroupOrderSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_group_order_settings_index,
            order: &self.groups.avatar_group_order_settings_order,
        }
    }

    pub fn avatar_item_display(&self) -> accessor::AvatarItemDisplayAccessor<'_> {
        accessor::AvatarItemDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_item_display_index,
            order: &self.groups.avatar_item_display_order,
        }
    }

    pub fn badge_settings(&self) -> accessor::BadgeSettingsAccessor<'_> {
        accessor::BadgeSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.badge_settings_index,
            order: &self.groups.badge_settings_order,
        }
    }

    pub fn bread_move_level_settings(&self) -> accessor::BreadMoveLevelSettingsAccessor<'_> {
        accessor::BreadMoveLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.bread_move_level_settings_index,
            order: &self.groups.bread_move_level_settings_order,
        }
    }

    pub fn buddy_activity_category_settings(
        &self,
    ) -> accessor::BuddyActivityCategorySettingsAccessor<'_> {
        accessor::BuddyActivityCategorySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_activity_category_settings_index,
            order: &self.groups.buddy_activity_category_settings_order,
        }
    }

    pub fn buddy_emotion_level_settings(&self) -> accessor::BuddyEmotionLevelSettingsAccessor<'_> {
        accessor::BuddyEmotionLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_emotion_level_settings_index,
            order: &self.groups.buddy_emotion_level_settings_order,
        }
    }

    pub fn buddy_level_settings(&self) -> accessor::BuddyLevelSettingsAccessor<'_> {
        accessor::BuddyLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_level_settings_index,
            order: &self.groups.buddy_level_settings_order,
        }
    }

    pub fn client_quest_template(&self) -> accessor::ClientQuestTemplateAccessor<'_> {
        accessor::ClientQuestTemplateAccessor {
            entries: &self.entries,
            index: &self.groups.client_quest_template_index,
            order: &self.groups.client_quest_template_order,
        }
    }

    pub fn code_gate_proto(&self) -> accessor::CodeGateProtoAccessor<'_> {
        accessor::CodeGateProtoAccessor {
            entries: &self.entries,
            index: &self.groups.code_gate_proto_index,
            order: &self.groups.code_gate_proto_order,
        }
    }

    pub fn combat_league(&self) -> accessor::CombatLeagueAccessor<'_> {
        accessor::CombatLeagueAccessor {
            entries: &self.entries,
            index: &self.groups.combat_league_index,
            order: &self.groups.combat_league_order,
        }
    }

    pub fn combat_move(&self) -> accessor::CombatMoveAccessor<'_> {
        accessor::CombatMoveAccessor {
            entries: &self.entries,
            index: &self.groups.combat_move_index,
            order: &self.groups.combat_move_order,
        }
    }

    pub fn combat_npc_personality(&self) -> accessor::CombatNpcPersonalityAccessor<'_> {
        accessor::CombatNpcPersonalityAccessor {
            entries: &self.entries,
            index: &self.groups.combat_npc_personality_index,
            order: &self.groups.combat_npc_personality_order,
        }
    }

    pub fn combat_npc_trainer(&self) -> accessor::CombatNpcTrainerAccessor<'_> {
        accessor::CombatNpcTrainerAccessor {
            entries: &self.entries,
            index: &self.groups.combat_npc_trainer_index,
            order: &self.groups.combat_npc_trainer_order,
        }
    }

    pub fn combat_ranking_proto_settings(
        &self,
    ) -> accessor::CombatRankingProtoSettingsAccessor<'_> {
        accessor::CombatRankingProtoSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.combat_ranking_proto_settings_index,
            order: &self.groups.combat_ranking_proto_settings_order,
        }
    }

    pub fn combat_type(&self) -> accessor::CombatTypeAccessor<'_> {
        accessor::CombatTypeAccessor {
            entries: &self.entries,
            index: &self.groups.combat_type_index,
            order: &self.groups.combat_type_order,
        }
    }

    pub fn event_pass_tier_settings(&self) -> accessor::EventPassTierSettingsAccessor<'_> {
        accessor::EventPassTierSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.event_pass_tier_settings_index,
            order: &self.groups.event_pass_tier_settings_order,
        }
    }

    pub fn evolution_chain_display_settings(
        &self,
    ) -> accessor::EvolutionChainDisplaySettingsAccessor<'_> {
        accessor::EvolutionChainDisplaySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.evolution_chain_display_settings_index,
            order: &self.groups.evolution_chain_display_settings_order,
        }
    }

    pub fn evolution_quest_template(&self) -> accessor::EvolutionQuestTemplateAccessor<'_> {
        accessor::EvolutionQuestTemplateAccessor {
            entries: &self.entries,
            index: &self.groups.evolution_quest_template_index,
            order: &self.groups.evolution_quest_template_order,
        }
    }

    pub fn feature_gate(&self) -> accessor::FeatureGateAccessor<'_> {
        accessor::FeatureGateAccessor {
            entries: &self.entries,
            index: &self.groups.feature_gate_index,
            order: &self.groups.feature_gate_order,
        }
    }

    pub fn form_settings(&self) -> accessor::FormSettingsAccessor<'_> {
        accessor::FormSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.form_settings_index,
            order: &self.groups.form_settings_order,
        }
    }

    pub fn fort_power_up_level_settings(&self) -> accessor::FortPowerUpLevelSettingsAccessor<'_> {
        accessor::FortPowerUpLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.fort_power_up_level_settings_index,
            order: &self.groups.fort_power_up_level_settings_order,
        }
    }

    pub fn friendship_milestone_settings(
        &self,
    ) -> accessor::FriendshipMilestoneSettingsAccessor<'_> {
        accessor::FriendshipMilestoneSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.friendship_milestone_settings_index,
            order: &self.groups.friendship_milestone_settings_order,
        }
    }

    pub fn gender_settings(&self) -> accessor::GenderSettingsAccessor<'_> {
        accessor::GenderSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.gender_settings_index,
            order: &self.groups.gender_settings_order,
        }
    }

    pub fn iap_category_display(&self) -> accessor::IapCategoryDisplayAccessor<'_> {
        accessor::IapCategoryDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.iap_category_display_index,
            order: &self.groups.iap_category_display_order,
        }
    }

    pub fn iap_item_display(&self) -> accessor::IapItemDisplayAccessor<'_> {
        accessor::IapItemDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.iap_item_display_index,
            order: &self.groups.iap_item_display_order,
        }
    }

    pub fn invasion_npc_display_settings(
        &self,
    ) -> accessor::InvasionNpcDisplaySettingsAccessor<'_> {
        accessor::InvasionNpcDisplaySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.invasion_npc_display_settings_index,
            order: &self.groups.invasion_npc_display_settings_order,
        }
    }

    pub fn item_expiration_settings(&self) -> accessor::ItemExpirationSettingsAccessor<'_> {
        accessor::ItemExpirationSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.item_expiration_settings_index,
            order: &self.groups.item_expiration_settings_order,
        }
    }

    pub fn item_settings(&self) -> accessor::ItemSettingsAccessor<'_> {
        accessor::ItemSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.item_settings_index,
            order: &self.groups.item_settings_order,
        }
    }

    pub fn language_settings(&self) -> accessor::LanguageSettingsAccessor<'_> {
        accessor::LanguageSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.language_settings_index,
            order: &self.groups.language_settings_order,
        }
    }

    pub fn level_up_rewards(&self) -> accessor::LevelUpRewardsAccessor<'_> {
        accessor::LevelUpRewardsAccessor {
            entries: &self.entries,
            index: &self.groups.level_up_rewards_index,
            order: &self.groups.level_up_rewards_order,
        }
    }

    pub fn limited_purchase_sku_settings(
        &self,
    ) -> accessor::LimitedPurchaseSkuSettingsAccessor<'_> {
        accessor::LimitedPurchaseSkuSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.limited_purchase_sku_settings_index,
            order: &self.groups.limited_purchase_sku_settings_order,
        }
    }

    pub fn location_card_settings(&self) -> accessor::LocationCardSettingsAccessor<'_> {
        accessor::LocationCardSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.location_card_settings_index,
            order: &self.groups.location_card_settings_order,
        }
    }

    pub fn mega_evo_level_settings(&self) -> accessor::MegaEvoLevelSettingsAccessor<'_> {
        accessor::MegaEvoLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.mega_evo_level_settings_index,
            order: &self.groups.mega_evo_level_settings_order,
        }
    }

    pub fn move_sequence_settings(&self) -> accessor::MoveSequenceSettingsAccessor<'_> {
        accessor::MoveSequenceSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.move_sequence_settings_index,
            order: &self.groups.move_sequence_settings_order,
        }
    }

    pub fn move_settings(&self) -> accessor::MoveSettingsAccessor<'_> {
        accessor::MoveSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.move_settings_index,
            order: &self.groups.move_settings_order,
        }
    }

    pub fn non_combat_move_settings(&self) -> accessor::NonCombatMoveSettingsAccessor<'_> {
        accessor::NonCombatMoveSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.non_combat_move_settings_index,
            order: &self.groups.non_combat_move_settings_order,
        }
    }

    pub fn party_play_general_settings(&self) -> accessor::PartyPlayGeneralSettingsAccessor<'_> {
        accessor::PartyPlayGeneralSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.party_play_general_settings_index,
            order: &self.groups.party_play_general_settings_order,
        }
    }

    pub fn photo_sets_settings_proto(&self) -> accessor::PhotoSetsSettingsProtoAccessor<'_> {
        accessor::PhotoSetsSettingsProtoAccessor {
            entries: &self.entries,
            index: &self.groups.photo_sets_settings_proto_index,
            order: &self.groups.photo_sets_settings_proto_order,
        }
    }

    pub fn pokemon_extended_settings(&self) -> accessor::PokemonExtendedSettingsAccessor<'_> {
        accessor::PokemonExtendedSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_extended_settings_index,
            order: &self.groups.pokemon_extended_settings_order,
        }
    }

    pub fn pokemon_family(&self) -> accessor::PokemonFamilyAccessor<'_> {
        accessor::PokemonFamilyAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_family_index,
            order: &self.groups.pokemon_family_order,
        }
    }

    pub fn pokemon_home_energy_costs(&self) -> accessor::PokemonHomeEnergyCostsAccessor<'_> {
        accessor::PokemonHomeEnergyCostsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_home_energy_costs_index,
            order: &self.groups.pokemon_home_energy_costs_order,
        }
    }

    pub fn pokemon_home_form_reversions(&self) -> accessor::PokemonHomeFormReversionsAccessor<'_> {
        accessor::PokemonHomeFormReversionsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_home_form_reversions_index,
            order: &self.groups.pokemon_home_form_reversions_order,
        }
    }

    pub fn pokemon_scale_settings(&self) -> accessor::PokemonScaleSettingsAccessor<'_> {
        accessor::PokemonScaleSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_scale_settings_index,
            order: &self.groups.pokemon_scale_settings_order,
        }
    }

    pub fn pokemon_settings(&self) -> accessor::PokemonSettingsAccessor<'_> {
        accessor::PokemonSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_settings_index,
            order: &self.groups.pokemon_settings_order,
        }
    }

    pub fn pokemon_upgrades(&self) -> accessor::PokemonUpgradesAccessor<'_> {
        accessor::PokemonUpgradesAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_upgrades_index,
            order: &self.groups.pokemon_upgrades_order,
        }
    }

    pub fn pokestop_invasion_availability_settings(
        &self,
    ) -> accessor::PokestopInvasionAvailabilitySettingsAccessor<'_> {
        accessor::PokestopInvasionAvailabilitySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokestop_invasion_availability_settings_index,
            order: &self.groups.pokestop_invasion_availability_settings_order,
        }
    }

    pub fn quest_settings(&self) -> accessor::QuestSettingsAccessor<'_> {
        accessor::QuestSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.quest_settings_index,
            order: &self.groups.quest_settings_order,
        }
    }

    pub fn recommended_search_settings(&self) -> accessor::RecommendedSearchSettingsAccessor<'_> {
        accessor::RecommendedSearchSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.recommended_search_settings_index,
            order: &self.groups.recommended_search_settings_order,
        }
    }

    pub fn roll_back(&self) -> accessor::RollBackAccessor<'_> {
        accessor::RollBackAccessor {
            entries: &self.entries,
            index: &self.groups.roll_back_index,
            order: &self.groups.roll_back_order,
        }
    }

    pub fn settings_override_rule(&self) -> accessor::SettingsOverrideRuleAccessor<'_> {
        accessor::SettingsOverrideRuleAccessor {
            entries: &self.entries,
            index: &self.groups.settings_override_rule_index,
            order: &self.groups.settings_override_rule_order,
        }
    }

    pub fn sticker_metadata(&self) -> accessor::StickerMetadataAccessor<'_> {
        accessor::StickerMetadataAccessor {
            entries: &self.entries,
            index: &self.groups.sticker_metadata_index,
            order: &self.groups.sticker_metadata_order,
        }
    }

    pub fn tappable_settings(&self) -> accessor::TappableSettingsAccessor<'_> {
        accessor::TappableSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.tappable_settings_index,
            order: &self.groups.tappable_settings_order,
        }
    }

    pub fn temporary_evolution_settings(&self) -> accessor::TemporaryEvolutionSettingsAccessor<'_> {
        accessor::TemporaryEvolutionSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.temporary_evolution_settings_index,
            order: &self.groups.temporary_evolution_settings_order,
        }
    }

    pub fn type_effective(&self) -> accessor::TypeEffectiveAccessor<'_> {
        accessor::TypeEffectiveAccessor {
            entries: &self.entries,
            index: &self.groups.type_effective_index,
            order: &self.groups.type_effective_order,
        }
    }

    pub fn vs_seeker_loot(&self) -> accessor::VsSeekerLootAccessor<'_> {
        accessor::VsSeekerLootAccessor {
            entries: &self.entries,
            index: &self.groups.vs_seeker_loot_index,
            order: &self.groups.vs_seeker_loot_order,
        }
    }

    pub fn vs_seeker_pokemon_rewards(&self) -> accessor::VsSeekerPokemonRewardsAccessor<'_> {
        accessor::VsSeekerPokemonRewardsAccessor {
            entries: &self.entries,
            index: &self.groups.vs_seeker_pokemon_rewards_index,
            order: &self.groups.vs_seeker_pokemon_rewards_order,
        }
    }

    pub fn weather_affinities(&self) -> accessor::WeatherAffinitiesAccessor<'_> {
        accessor::WeatherAffinitiesAccessor {
            entries: &self.entries,
            index: &self.groups.weather_affinities_index,
            order: &self.groups.weather_affinities_order,
        }
    }
}

#[cfg(feature = "blocking")]
impl blocking::Masterfile {
    pub fn avatar_customization(&self) -> accessor::AvatarCustomizationAccessor<'_> {
        accessor::AvatarCustomizationAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_customization_index,
            order: &self.groups.avatar_customization_order,
        }
    }

    pub fn avatar_group_order_settings(&self) -> accessor::AvatarGroupOrderSettingsAccessor<'_> {
        accessor::AvatarGroupOrderSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_group_order_settings_index,
            order: &self.groups.avatar_group_order_settings_order,
        }
    }

    pub fn avatar_item_display(&self) -> accessor::AvatarItemDisplayAccessor<'_> {
        accessor::AvatarItemDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.avatar_item_display_index,
            order: &self.groups.avatar_item_display_order,
        }
    }

    pub fn badge_settings(&self) -> accessor::BadgeSettingsAccessor<'_> {
        accessor::BadgeSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.badge_settings_index,
            order: &self.groups.badge_settings_order,
        }
    }

    pub fn bread_move_level_settings(&self) -> accessor::BreadMoveLevelSettingsAccessor<'_> {
        accessor::BreadMoveLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.bread_move_level_settings_index,
            order: &self.groups.bread_move_level_settings_order,
        }
    }

    pub fn buddy_activity_category_settings(
        &self,
    ) -> accessor::BuddyActivityCategorySettingsAccessor<'_> {
        accessor::BuddyActivityCategorySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_activity_category_settings_index,
            order: &self.groups.buddy_activity_category_settings_order,
        }
    }

    pub fn buddy_emotion_level_settings(&self) -> accessor::BuddyEmotionLevelSettingsAccessor<'_> {
        accessor::BuddyEmotionLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_emotion_level_settings_index,
            order: &self.groups.buddy_emotion_level_settings_order,
        }
    }

    pub fn buddy_level_settings(&self) -> accessor::BuddyLevelSettingsAccessor<'_> {
        accessor::BuddyLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.buddy_level_settings_index,
            order: &self.groups.buddy_level_settings_order,
        }
    }

    pub fn client_quest_template(&self) -> accessor::ClientQuestTemplateAccessor<'_> {
        accessor::ClientQuestTemplateAccessor {
            entries: &self.entries,
            index: &self.groups.client_quest_template_index,
            order: &self.groups.client_quest_template_order,
        }
    }

    pub fn code_gate_proto(&self) -> accessor::CodeGateProtoAccessor<'_> {
        accessor::CodeGateProtoAccessor {
            entries: &self.entries,
            index: &self.groups.code_gate_proto_index,
            order: &self.groups.code_gate_proto_order,
        }
    }

    pub fn combat_league(&self) -> accessor::CombatLeagueAccessor<'_> {
        accessor::CombatLeagueAccessor {
            entries: &self.entries,
            index: &self.groups.combat_league_index,
            order: &self.groups.combat_league_order,
        }
    }

    pub fn combat_move(&self) -> accessor::CombatMoveAccessor<'_> {
        accessor::CombatMoveAccessor {
            entries: &self.entries,
            index: &self.groups.combat_move_index,
            order: &self.groups.combat_move_order,
        }
    }

    pub fn combat_npc_personality(&self) -> accessor::CombatNpcPersonalityAccessor<'_> {
        accessor::CombatNpcPersonalityAccessor {
            entries: &self.entries,
            index: &self.groups.combat_npc_personality_index,
            order: &self.groups.combat_npc_personality_order,
        }
    }

    pub fn combat_npc_trainer(&self) -> accessor::CombatNpcTrainerAccessor<'_> {
        accessor::CombatNpcTrainerAccessor {
            entries: &self.entries,
            index: &self.groups.combat_npc_trainer_index,
            order: &self.groups.combat_npc_trainer_order,
        }
    }

    pub fn combat_ranking_proto_settings(
        &self,
    ) -> accessor::CombatRankingProtoSettingsAccessor<'_> {
        accessor::CombatRankingProtoSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.combat_ranking_proto_settings_index,
            order: &self.groups.combat_ranking_proto_settings_order,
        }
    }

    pub fn combat_type(&self) -> accessor::CombatTypeAccessor<'_> {
        accessor::CombatTypeAccessor {
            entries: &self.entries,
            index: &self.groups.combat_type_index,
            order: &self.groups.combat_type_order,
        }
    }

    pub fn event_pass_tier_settings(&self) -> accessor::EventPassTierSettingsAccessor<'_> {
        accessor::EventPassTierSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.event_pass_tier_settings_index,
            order: &self.groups.event_pass_tier_settings_order,
        }
    }

    pub fn evolution_chain_display_settings(
        &self,
    ) -> accessor::EvolutionChainDisplaySettingsAccessor<'_> {
        accessor::EvolutionChainDisplaySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.evolution_chain_display_settings_index,
            order: &self.groups.evolution_chain_display_settings_order,
        }
    }

    pub fn evolution_quest_template(&self) -> accessor::EvolutionQuestTemplateAccessor<'_> {
        accessor::EvolutionQuestTemplateAccessor {
            entries: &self.entries,
            index: &self.groups.evolution_quest_template_index,
            order: &self.groups.evolution_quest_template_order,
        }
    }

    pub fn feature_gate(&self) -> accessor::FeatureGateAccessor<'_> {
        accessor::FeatureGateAccessor {
            entries: &self.entries,
            index: &self.groups.feature_gate_index,
            order: &self.groups.feature_gate_order,
        }
    }

    pub fn form_settings(&self) -> accessor::FormSettingsAccessor<'_> {
        accessor::FormSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.form_settings_index,
            order: &self.groups.form_settings_order,
        }
    }

    pub fn fort_power_up_level_settings(&self) -> accessor::FortPowerUpLevelSettingsAccessor<'_> {
        accessor::FortPowerUpLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.fort_power_up_level_settings_index,
            order: &self.groups.fort_power_up_level_settings_order,
        }
    }

    pub fn friendship_milestone_settings(
        &self,
    ) -> accessor::FriendshipMilestoneSettingsAccessor<'_> {
        accessor::FriendshipMilestoneSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.friendship_milestone_settings_index,
            order: &self.groups.friendship_milestone_settings_order,
        }
    }

    pub fn gender_settings(&self) -> accessor::GenderSettingsAccessor<'_> {
        accessor::GenderSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.gender_settings_index,
            order: &self.groups.gender_settings_order,
        }
    }

    pub fn iap_category_display(&self) -> accessor::IapCategoryDisplayAccessor<'_> {
        accessor::IapCategoryDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.iap_category_display_index,
            order: &self.groups.iap_category_display_order,
        }
    }

    pub fn iap_item_display(&self) -> accessor::IapItemDisplayAccessor<'_> {
        accessor::IapItemDisplayAccessor {
            entries: &self.entries,
            index: &self.groups.iap_item_display_index,
            order: &self.groups.iap_item_display_order,
        }
    }

    pub fn invasion_npc_display_settings(
        &self,
    ) -> accessor::InvasionNpcDisplaySettingsAccessor<'_> {
        accessor::InvasionNpcDisplaySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.invasion_npc_display_settings_index,
            order: &self.groups.invasion_npc_display_settings_order,
        }
    }

    pub fn item_expiration_settings(&self) -> accessor::ItemExpirationSettingsAccessor<'_> {
        accessor::ItemExpirationSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.item_expiration_settings_index,
            order: &self.groups.item_expiration_settings_order,
        }
    }

    pub fn item_settings(&self) -> accessor::ItemSettingsAccessor<'_> {
        accessor::ItemSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.item_settings_index,
            order: &self.groups.item_settings_order,
        }
    }

    pub fn language_settings(&self) -> accessor::LanguageSettingsAccessor<'_> {
        accessor::LanguageSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.language_settings_index,
            order: &self.groups.language_settings_order,
        }
    }

    pub fn level_up_rewards(&self) -> accessor::LevelUpRewardsAccessor<'_> {
        accessor::LevelUpRewardsAccessor {
            entries: &self.entries,
            index: &self.groups.level_up_rewards_index,
            order: &self.groups.level_up_rewards_order,
        }
    }

    pub fn limited_purchase_sku_settings(
        &self,
    ) -> accessor::LimitedPurchaseSkuSettingsAccessor<'_> {
        accessor::LimitedPurchaseSkuSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.limited_purchase_sku_settings_index,
            order: &self.groups.limited_purchase_sku_settings_order,
        }
    }

    pub fn location_card_settings(&self) -> accessor::LocationCardSettingsAccessor<'_> {
        accessor::LocationCardSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.location_card_settings_index,
            order: &self.groups.location_card_settings_order,
        }
    }

    pub fn mega_evo_level_settings(&self) -> accessor::MegaEvoLevelSettingsAccessor<'_> {
        accessor::MegaEvoLevelSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.mega_evo_level_settings_index,
            order: &self.groups.mega_evo_level_settings_order,
        }
    }

    pub fn move_sequence_settings(&self) -> accessor::MoveSequenceSettingsAccessor<'_> {
        accessor::MoveSequenceSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.move_sequence_settings_index,
            order: &self.groups.move_sequence_settings_order,
        }
    }

    pub fn move_settings(&self) -> accessor::MoveSettingsAccessor<'_> {
        accessor::MoveSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.move_settings_index,
            order: &self.groups.move_settings_order,
        }
    }

    pub fn non_combat_move_settings(&self) -> accessor::NonCombatMoveSettingsAccessor<'_> {
        accessor::NonCombatMoveSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.non_combat_move_settings_index,
            order: &self.groups.non_combat_move_settings_order,
        }
    }

    pub fn party_play_general_settings(&self) -> accessor::PartyPlayGeneralSettingsAccessor<'_> {
        accessor::PartyPlayGeneralSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.party_play_general_settings_index,
            order: &self.groups.party_play_general_settings_order,
        }
    }

    pub fn photo_sets_settings_proto(&self) -> accessor::PhotoSetsSettingsProtoAccessor<'_> {
        accessor::PhotoSetsSettingsProtoAccessor {
            entries: &self.entries,
            index: &self.groups.photo_sets_settings_proto_index,
            order: &self.groups.photo_sets_settings_proto_order,
        }
    }

    pub fn pokemon_extended_settings(&self) -> accessor::PokemonExtendedSettingsAccessor<'_> {
        accessor::PokemonExtendedSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_extended_settings_index,
            order: &self.groups.pokemon_extended_settings_order,
        }
    }

    pub fn pokemon_family(&self) -> accessor::PokemonFamilyAccessor<'_> {
        accessor::PokemonFamilyAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_family_index,
            order: &self.groups.pokemon_family_order,
        }
    }

    pub fn pokemon_home_energy_costs(&self) -> accessor::PokemonHomeEnergyCostsAccessor<'_> {
        accessor::PokemonHomeEnergyCostsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_home_energy_costs_index,
            order: &self.groups.pokemon_home_energy_costs_order,
        }
    }

    pub fn pokemon_home_form_reversions(&self) -> accessor::PokemonHomeFormReversionsAccessor<'_> {
        accessor::PokemonHomeFormReversionsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_home_form_reversions_index,
            order: &self.groups.pokemon_home_form_reversions_order,
        }
    }

    pub fn pokemon_scale_settings(&self) -> accessor::PokemonScaleSettingsAccessor<'_> {
        accessor::PokemonScaleSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_scale_settings_index,
            order: &self.groups.pokemon_scale_settings_order,
        }
    }

    pub fn pokemon_settings(&self) -> accessor::PokemonSettingsAccessor<'_> {
        accessor::PokemonSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_settings_index,
            order: &self.groups.pokemon_settings_order,
        }
    }

    pub fn pokemon_upgrades(&self) -> accessor::PokemonUpgradesAccessor<'_> {
        accessor::PokemonUpgradesAccessor {
            entries: &self.entries,
            index: &self.groups.pokemon_upgrades_index,
            order: &self.groups.pokemon_upgrades_order,
        }
    }

    pub fn pokestop_invasion_availability_settings(
        &self,
    ) -> accessor::PokestopInvasionAvailabilitySettingsAccessor<'_> {
        accessor::PokestopInvasionAvailabilitySettingsAccessor {
            entries: &self.entries,
            index: &self.groups.pokestop_invasion_availability_settings_index,
            order: &self.groups.pokestop_invasion_availability_settings_order,
        }
    }

    pub fn quest_settings(&self) -> accessor::QuestSettingsAccessor<'_> {
        accessor::QuestSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.quest_settings_index,
            order: &self.groups.quest_settings_order,
        }
    }

    pub fn recommended_search_settings(&self) -> accessor::RecommendedSearchSettingsAccessor<'_> {
        accessor::RecommendedSearchSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.recommended_search_settings_index,
            order: &self.groups.recommended_search_settings_order,
        }
    }

    pub fn roll_back(&self) -> accessor::RollBackAccessor<'_> {
        accessor::RollBackAccessor {
            entries: &self.entries,
            index: &self.groups.roll_back_index,
            order: &self.groups.roll_back_order,
        }
    }

    pub fn settings_override_rule(&self) -> accessor::SettingsOverrideRuleAccessor<'_> {
        accessor::SettingsOverrideRuleAccessor {
            entries: &self.entries,
            index: &self.groups.settings_override_rule_index,
            order: &self.groups.settings_override_rule_order,
        }
    }

    pub fn sticker_metadata(&self) -> accessor::StickerMetadataAccessor<'_> {
        accessor::StickerMetadataAccessor {
            entries: &self.entries,
            index: &self.groups.sticker_metadata_index,
            order: &self.groups.sticker_metadata_order,
        }
    }

    pub fn tappable_settings(&self) -> accessor::TappableSettingsAccessor<'_> {
        accessor::TappableSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.tappable_settings_index,
            order: &self.groups.tappable_settings_order,
        }
    }

    pub fn temporary_evolution_settings(&self) -> accessor::TemporaryEvolutionSettingsAccessor<'_> {
        accessor::TemporaryEvolutionSettingsAccessor {
            entries: &self.entries,
            index: &self.groups.temporary_evolution_settings_index,
            order: &self.groups.temporary_evolution_settings_order,
        }
    }

    pub fn type_effective(&self) -> accessor::TypeEffectiveAccessor<'_> {
        accessor::TypeEffectiveAccessor {
            entries: &self.entries,
            index: &self.groups.type_effective_index,
            order: &self.groups.type_effective_order,
        }
    }

    pub fn vs_seeker_loot(&self) -> accessor::VsSeekerLootAccessor<'_> {
        accessor::VsSeekerLootAccessor {
            entries: &self.entries,
            index: &self.groups.vs_seeker_loot_index,
            order: &self.groups.vs_seeker_loot_order,
        }
    }

    pub fn vs_seeker_pokemon_rewards(&self) -> accessor::VsSeekerPokemonRewardsAccessor<'_> {
        accessor::VsSeekerPokemonRewardsAccessor {
            entries: &self.entries,
            index: &self.groups.vs_seeker_pokemon_rewards_index,
            order: &self.groups.vs_seeker_pokemon_rewards_order,
        }
    }

    pub fn weather_affinities(&self) -> accessor::WeatherAffinitiesAccessor<'_> {
        accessor::WeatherAffinitiesAccessor {
            entries: &self.entries,
            index: &self.groups.weather_affinities_index,
            order: &self.groups.weather_affinities_order,
        }
    }
}

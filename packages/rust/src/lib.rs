//! Generated Rust types for the Pokémon GO masterfile.
//!
//! # Quick start
//!
//! ```no_run
//! use pogo_masterfile_types::{parse_masterfile, MasterfileEntry};
//!
//! let json = std::fs::read_to_string("masterfile.json").unwrap();
//! let entries = parse_masterfile(&json).unwrap();
//! for entry in entries {
//!     match entry {
//!         MasterfileEntry::PokemonSettings(e) => {
//!             println!("pokémon: {}", e.template_id);
//!         }
//!         _ => {}
//!     }
//! }
//! ```
//!
//! # Generated structure
//!
//! Each masterfile discriminator maps to its own module containing three
//! types:
//!
//! - **`Entry`** (e.g. [`pokemon_settings::PokemonSettingsEntry`]): the outer
//!   JSON shape, `{ templateId, data: { ... } }`.
//! - **`EntryData`** (e.g. [`pokemon_settings::PokemonSettingsEntryData`]): the
//!   inner `data` object, with the discriminator-keyed payload field.
//! - **The payload type** (e.g. [`pokemon_settings::PokemonSettings`]): the
//!   shape of the payload itself. For multi-shape groups this is a Rust
//!   enum dispatching to per-cluster variant structs.
//!
//! Singletons (entries unique by `templateId`) are bundled into a single
//! [`singletons`] module rather than emitted one file each.

use serde::{Deserialize, Serialize};

/// Defines an Entry + EntryData pair for a discriminator that carries a payload.
/// Used by the codegen; consumers of this crate normally don't invoke directly.
#[macro_export]
macro_rules! masterfile_entry {
	($entry:ident, $data:ident, $field:ident: $ty:ty) => {
		/// Outer masterfile wrapper: `{ templateId, data: { ... } }`.
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $entry {
			pub template_id: String,
			pub data: $data,
		}
		/// Inner `data` object: `{ templateId, [discriminator]: payload }`.
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
		/// Outer masterfile wrapper for a stub entry (no payload).
		#[derive(Debug, Clone, ::serde::Serialize, ::serde::Deserialize)]
		#[serde(rename_all = "camelCase")]
		pub struct $entry {
			pub template_id: String,
			pub data: $data,
		}
		/// Inner `data` object for a stub entry: `{ templateId }`.
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

/// Every typed entry the Pokémon GO masterfile can hold.
///
/// Variants are ordered most-frequent-first (by entry count in the source
/// masterfile). Serde's `#[serde(untagged)]` dispatch tries variants in
/// declaration order, so the most common entries short-circuit fastest.
///
/// **Caveat:** stub entries (the few discriminators with
/// `data: { templateId }` only) are shape-indistinguishable under untagged
/// dispatch — they all match whichever stub variant is declared first;
/// inspect `template_id` to recover the specific kind. Likewise, entries
/// whose payload doesn't strictly type-check against the inferred shape
/// (e.g. JSON has `1.0` where the inferred type expected `u64`) may match
/// a permissive stub variant rather than erroring. Round-trip JSON to
/// verify if you need certainty.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MasterfileEntry {
    PokemonExtendedSettings(pokemon_extended_settings::PokemonExtendedSettingsEntry),
    GenderSettings(gender_settings::GenderSettingsEntry),
    PokemonSettings(pokemon_settings::PokemonSettingsEntry),
    AvatarCustomization(avatar_customization::AvatarCustomizationEntry),
    AvatarItemDisplay(avatar_item_display::AvatarItemDisplayEntry),
    IapItemDisplay(iap_item_display::IapItemDisplayEntry),
    FormSettings(form_settings::FormSettingsEntry),
    BadgeSettings(badge_settings::BadgeSettingsEntry),
    StickerMetadata(sticker_metadata::StickerMetadataEntry),
    EventPassTierSettings(event_pass_tier_settings::EventPassTierSettingsEntry),
    PokemonFamily(pokemon_family::PokemonFamilyEntry),
    MoveSettings(move_settings::MoveSettingsEntry),
    MoveSequenceSettings(move_sequence_settings::MoveSequenceSettingsEntry),
    CombatMove(combat_move::CombatMoveEntry),
    SettingsOverrideRule(settings_override_rule::SettingsOverrideRuleEntry),
    LocationCardSettings(location_card_settings::LocationCardSettingsEntry),
    ItemSettings(item_settings::ItemSettingsEntry),
    CombatLeague(combat_league::CombatLeagueEntry),
    MegaEvoLevelSettings(mega_evo_level_settings::MegaEvoLevelSettingsEntry),
    LevelUpRewards(level_up_rewards::LevelUpRewardsEntry),
    EvolutionChainDisplaySettings(evolution_chain_display_settings::EvolutionChainDisplaySettingsEntry),
    InvasionNpcDisplaySettings(invasion_npc_display_settings::InvasionNpcDisplaySettingsEntry),
    ClientQuestTemplate(client_quest_template::ClientQuestTemplateEntry),
    TemporaryEvolutionSettings(temporary_evolution_settings::TemporaryEvolutionSettingsEntry),
    VsSeekerLoot(vs_seeker_loot::VsSeekerLootEntry),
    PhotoSetsSettingsProto(photo_sets_settings_proto::PhotoSetsSettingsProtoEntry),
    EvolutionQuestTemplate(evolution_quest_template::EvolutionQuestTemplateEntry),
    LimitedPurchaseSkuSettings(limited_purchase_sku_settings::LimitedPurchaseSkuSettingsEntry),
    ItemExpirationSettings(item_expiration_settings::ItemExpirationSettingsEntry),
    CombatRankingProtoSettings(combat_ranking_proto_settings::CombatRankingProtoSettingsEntry),
    CombatType(combat_type::CombatTypeEntry),
    TypeEffective(type_effective::TypeEffectiveEntry),
    FeatureGate(feature_gate::FeatureGateEntry),
    CodeGateProto(code_gate_proto::CodeGateProtoEntry),
    IapCategoryDisplay(iap_category_display::IapCategoryDisplayEntry),
    RecommendedSearchSettings(recommended_search_settings::RecommendedSearchSettingsEntry),
    CombatNpcTrainer(combat_npc_trainer::CombatNpcTrainerEntry),
    NonCombatMoveSettings(non_combat_move_settings::NonCombatMoveSettingsEntry),
    BuddyActivityCategorySettings(buddy_activity_category_settings::BuddyActivityCategorySettingsEntry),
    BreadMoveLevelSettings(bread_move_level_settings::BreadMoveLevelSettingsEntry),
    BuddyEmotionLevelSettings(buddy_emotion_level_settings::BuddyEmotionLevelSettingsEntry),
    PokemonHomeFormReversions(pokemon_home_form_reversions::PokemonHomeFormReversionsEntry),
    PokestopInvasionAvailabilitySettings(pokestop_invasion_availability_settings::PokestopInvasionAvailabilitySettingsEntry),
    WeatherAffinities(weather_affinities::WeatherAffinitiesEntry),
    FriendshipMilestoneSettings(friendship_milestone_settings::FriendshipMilestoneSettingsEntry),
    PokemonScaleSettings(pokemon_scale_settings::PokemonScaleSettingsEntry),
    BuddyLevelSettings(buddy_level_settings::BuddyLevelSettingsEntry),
    TappableSettings(tappable_settings::TappableSettingsEntry),
    FortPowerUpLevelSettings(fort_power_up_level_settings::FortPowerUpLevelSettingsEntry),
    PokemonHomeEnergyCosts(pokemon_home_energy_costs::PokemonHomeEnergyCostsEntry),
    CombatNpcPersonality(combat_npc_personality::CombatNpcPersonalityEntry),
    LanguageSettings(language_settings::LanguageSettingsEntry),
    QuestSettings(quest_settings::QuestSettingsEntry),
    RollBack(roll_back::RollBackEntry),
    AvatarGroupOrderSettings(avatar_group_order_settings::AvatarGroupOrderSettingsEntry),
    EventPassSettings(event_pass_settings::EventPassSettingsEntry),
    PartyPlayGeneralSettings(party_play_general_settings::PartyPlayGeneralSettingsEntry),
    PokemonUpgrades(pokemon_upgrades::PokemonUpgradesEntry),
    VsSeekerPokemonRewards(vs_seeker_pokemon_rewards::VsSeekerPokemonRewardsEntry),
    AccessibilitySettings(singletons::AccessibilitySettingsEntry),
    AdditiveSceneSettings(singletons::AdditiveSceneSettingsEntry),
    AddressablePokemonSettings(singletons::AddressablePokemonSettingsEntry),
    AddressBookImportSettings(singletons::AddressBookImportSettingsEntry),
    AdvancedSettings(singletons::AdvancedSettingsEntry),
    ArPhotoFeatureFlags(singletons::ArPhotoFeatureFlagsEntry),
    ArTelemetrySettings(singletons::ArTelemetrySettingsEntry),
    AssetRefreshProto(singletons::AssetRefreshProtoEntry),
    AvatarFeatureFlags(singletons::AvatarFeatureFlagsEntry),
    AvatarStoreFooterFlags(singletons::AvatarStoreFooterFlagsEntry),
    AvatarStoreSubcategoryFilteringFlags(singletons::AvatarStoreSubcategoryFilteringFlagsEntry),
    BackgroundModeSettings(singletons::BackgroundModeSettingsEntry),
    BattleAnimationSettings(singletons::BattleAnimationSettingsEntry),
    BattleHubBadgeSettings(singletons::BattleHubBadgeSettingsEntry),
    BattleHubOrderSettings(singletons::BattleHubOrderSettingsEntry),
    BattleInputBufferSettings(singletons::BattleInputBufferSettingsEntry),
    BattlePartySettings(singletons::BattlePartySettingsEntry),
    BattleSettings(singletons::BattleSettingsEntry),
    BattleVisualSettings(singletons::BattleVisualSettingsEntry),
    BelugaPokemonWhitelist(singletons::BelugaPokemonWhitelistEntry),
    BestFriendsPlusSettings(singletons::BestFriendsPlusSettingsEntry),
    BreadBattleClientSettings(singletons::BreadBattleClientSettingsEntry),
    BreadFeatureFlags(singletons::BreadFeatureFlagsEntry),
    BreadLobbyCounterSettings(singletons::BreadLobbyCounterSettingsEntry),
    BreadLobbyUpdateSettings(singletons::BreadLobbyUpdateSettingsEntry),
    BreadMoveMappings(singletons::BreadMoveMappingsEntry),
    BreadPokemonScalingSettings(singletons::BreadPokemonScalingSettingsEntry),
    BreadSettings(singletons::BreadSettingsEntry),
    BuddyEncounterCameoSettings(singletons::BuddyEncounterCameoSettingsEntry),
    BuddyHungerSettings(singletons::BuddyHungerSettingsEntry),
    BuddyInteractionSettings(singletons::BuddyInteractionSettingsEntry),
    BuddySwapSettings(singletons::BuddySwapSettingsEntry),
    BuddyWalkSettings(singletons::BuddyWalkSettingsEntry),
    BulkHealingSettings(singletons::BulkHealingSettingsEntry),
    ButterflyCollectorSettings(singletons::ButterflyCollectorSettingsEntry),
    CampfireSettings(singletons::CampfireSettingsEntry),
    CatchRadiusMultiplierSettings(singletons::CatchRadiusMultiplierSettingsEntry),
    CombatCompetitiveSeasonSettings(singletons::CombatCompetitiveSeasonSettingsEntry),
    CombatLeagueSettings(singletons::CombatLeagueSettingsEntry),
    CombatSettings(singletons::CombatSettingsEntry),
    CombatStatStageSettings(singletons::CombatStatStageSettingsEntry),
    ContestSettings(singletons::ContestSettingsEntry),
    ConversationSettings(singletons::ConversationSettingsEntry),
    CrossGameSocialSettings(singletons::CrossGameSocialSettingsEntry),
    DailyAdventureIncenseSettings(singletons::DailyAdventureIncenseSettingsEntry),
    DeepLinkingSettings(singletons::DeepLinkingSettingsEntry),
    EggHatchImprovementsSettings(singletons::EggHatchImprovementsSettingsEntry),
    EncounterSettings(singletons::EncounterSettingsEntry),
    EventPlannerPopularNotificationSettings(singletons::EventPlannerPopularNotificationSettingsEntry),
    ExternalAddressableAssetsSettings(singletons::ExternalAddressableAssetsSettingsEntry),
    FeatureUnlockLevelSettings(singletons::FeatureUnlockLevelSettingsEntry),
    GeotargetedQuestSettings(singletons::GeotargetedQuestSettingsEntry),
    GiftingSettings(singletons::GiftingSettingsEntry),
    GuiSearchSettings(singletons::GuiSearchSettingsEntry),
    GymBadgeSettings(singletons::GymBadgeSettingsEntry),
    HapticsSettings(singletons::HapticsSettingsEntry),
    IapSettings(singletons::IapSettingsEntry),
    IbfcLightweightSettings(singletons::IbfcLightweightSettingsEntry),
    ImpressionTrackingSettings(singletons::ImpressionTrackingSettingsEntry),
    InAppSurveySettings(singletons::InAppSurveySettingsEntry),
    IncidentPrioritySettings(singletons::IncidentPrioritySettingsEntry),
    IncidentVisibilitySettings(singletons::IncidentVisibilitySettingsEntry),
    InventorySettings(singletons::InventorySettingsEntry),
    IrisSocialSettings(singletons::IrisSocialSettingsEntry),
    IrisSocialUxFunnelSettings(singletons::IrisSocialUxFunnelSettingsEntry),
    ItemCurrencyValues(singletons::ItemCurrencyValuesEntry),
    ItemInventoryUpdateSettings(singletons::ItemInventoryUpdateSettingsEntry),
    JoinRaidViaFriendListSettings(singletons::JoinRaidViaFriendListSettingsEntry),
    LanguageSelectorSettings(singletons::LanguageSelectorSettingsEntry),
    LuckyPokemonSettings(singletons::LuckyPokemonSettingsEntry),
    MainMenuChanges(singletons::MainMenuChangesEntry),
    MapDisplaySettings(singletons::MapDisplaySettingsEntry),
    MapObjectsInteractionRangeSettings(singletons::MapObjectsInteractionRangeSettingsEntry),
    MegaEvoSettings(singletons::MegaEvoSettingsEntry),
    MonodepthSettings(singletons::MonodepthSettingsEntry),
    MpSettings(singletons::MpSettingsEntry),
    NaturalArtDayNightFeatureSettings(singletons::NaturalArtDayNightFeatureSettingsEntry),
    NearbyPokemonSettings(singletons::NearbyPokemonSettingsEntry),
    NeutralAvatarSettings(singletons::NeutralAvatarSettingsEntry),
    OnboardingSettings(singletons::OnboardingSettingsEntry),
    OptimizationsProto(singletons::OptimizationsProtoEntry),
    PartyDarkLaunchSettings(singletons::PartyDarkLaunchSettingsEntry),
    PartyIapBoostsSettings(singletons::PartyIapBoostsSettingsEntry),
    PartyRecommendationSettings(singletons::PartyRecommendationSettingsEntry),
    PhotoSettings(singletons::PhotoSettingsEntry),
    PlannerSettings(singletons::PlannerSettingsEntry),
    PlayerBonusSystemSettings(singletons::PlayerBonusSystemSettingsEntry),
    PlayerLevel(singletons::PlayerLevelEntry),
    PokeballThrowPropertySettings(singletons::PokeballThrowPropertySettingsEntry),
    PokecoinPurchaseDisplayGmt(singletons::PokecoinPurchaseDisplayGmtEntry),
    PokedexCategoriesSettings(singletons::PokedexCategoriesSettingsEntry),
    PokedexSizeStatsSystemSettings(singletons::PokedexSizeStatsSystemSettingsEntry),
    Pokedexv2featureFlags(singletons::Pokedexv2featureFlagsEntry),
    PokedexV2settings(singletons::PokedexV2settingsEntry),
    PokemonFxSettings(singletons::PokemonFxSettingsEntry),
    PokemonHomeSettings(singletons::PokemonHomeSettingsEntry),
    PokemonTagSettings(singletons::PokemonTagSettingsEntry),
    PopupControlSettings(singletons::PopupControlSettingsEntry),
    PostcardCollectionSettings(singletons::PostcardCollectionSettingsEntry),
    PowerUpPokestopsSettings(singletons::PowerUpPokestopsSettingsEntry),
    PrimalEvoSettings(singletons::PrimalEvoSettingsEntry),
    PtcOauthSettings(singletons::PtcOauthSettingsEntry),
    QuestDialogueInboxSettings(singletons::QuestDialogueInboxSettingsEntry),
    QuickInviteSettings(singletons::QuickInviteSettingsEntry),
    RaidEntryCostSettings(singletons::RaidEntryCostSettingsEntry),
    RaidLobbyCounterSettings(singletons::RaidLobbyCounterSettingsEntry),
    RaidSettings(singletons::RaidSettingsEntry),
    ReferralSettings(singletons::ReferralSettingsEntry),
    RemoteTradeSettings(singletons::RemoteTradeSettingsEntry),
    RouteBadgeSettings(singletons::RouteBadgeSettingsEntry),
    RouteCreationSettings(singletons::RouteCreationSettingsEntry),
    RouteDiscoverySettings(singletons::RouteDiscoverySettingsEntry),
    RoutePinSettings(singletons::RoutePinSettingsEntry),
    RoutePlaySettings(singletons::RoutePlaySettingsEntry),
    RoutesNearbyNotifSettings(singletons::RoutesNearbyNotifSettingsEntry),
    RoutesPartyPlayInteropSettings(singletons::RoutesPartyPlayInteropSettingsEntry),
    RouteStampCategorySettings(singletons::RouteStampCategorySettingsEntry),
    SharedFusionSettings(singletons::SharedFusionSettingsEntry),
    SharedMoveSettings(singletons::SharedMoveSettingsEntry),
    SoftSfidaSettings(singletons::SoftSfidaSettingsEntry),
    SourdoughMoveMappingSettings(singletons::SourdoughMoveMappingSettingsEntry),
    SpecialEggSettings(singletons::SpecialEggSettingsEntry),
    SponsoredGeofenceGiftSettings(singletons::SponsoredGeofenceGiftSettingsEntry),
    SquashSettings(singletons::SquashSettingsEntry),
    StampCollectionSettings(singletons::StampCollectionSettingsEntry),
    StationedPokemonTableSettings(singletons::StationedPokemonTableSettingsEntry),
    StickerCategorySettings(singletons::StickerCategorySettingsEntry),
    StyleShopSettings(singletons::StyleShopSettingsEntry),
    TicketGiftingSettings(singletons::TicketGiftingSettingsEntry),
    TodayViewSettings(singletons::TodayViewSettingsEntry),
    TutorialSettings(singletons::TutorialSettingsEntry),
    UsernameSuggestionSettings(singletons::UsernameSuggestionSettingsEntry),
    VerboseLogCombatSettings(singletons::VerboseLogCombatSettingsEntry),
    VerboseLogRaidSettings(singletons::VerboseLogRaidSettingsEntry),
    VistaGeneralSettings(singletons::VistaGeneralSettingsEntry),
    VnextBattleConfig(singletons::VnextBattleConfigEntry),
    VsSeekerClientSettings(singletons::VsSeekerClientSettingsEntry),
    VsSeekerScheduleSettings(singletons::VsSeekerScheduleSettingsEntry),
    WeatherBonusSettings(singletons::WeatherBonusSettingsEntry),
}

/// Parse a masterfile JSON string into a vector of typed entries.
///
/// # Errors
///
/// Returns the underlying [`serde_json::Error`] on malformed JSON or on a
/// JSON entry that doesn't match any [`MasterfileEntry`] variant.
///
/// # Example
///
/// ```no_run
/// let json = std::fs::read_to_string("masterfile.json").unwrap();
/// let entries = pogo_masterfile_types::parse_masterfile(&json).unwrap();
/// println!("{} entries", entries.len());
/// ```
pub fn parse_masterfile(json: &str) -> serde_json::Result<Vec<MasterfileEntry>> {
    serde_json::from_str(json)
}

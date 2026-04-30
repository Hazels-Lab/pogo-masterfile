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
/// masterfile). Serialization uses `#[serde(untagged)]` so the JSON shape
/// round-trips as the inner Entry struct directly. Deserialization is a
/// custom impl that peeks at `data`'s non-`templateId` key for O(1)
/// dispatch — see the impl below.
///
/// **Caveat:** stub entries (the few discriminators with
/// `data: { templateId }` only) are shape-indistinguishable. They all
/// dispatch via `templateId` value match in the deserializer; inspect
/// `template_id` post-parse if you need to branch on the specific kind.
#[derive(Debug, Clone, Serialize)]
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

// O(1)-dispatch deserializer for MasterfileEntry. Avoids serde's untagged
// fallback (which scans variants in declaration order, partially parsing
// each before realizing the discriminator's wrong) by:
//
//   1. Materializing the entry once as a serde_json::Value.
//   2. Inspecting `data`'s key set to find the non-templateId key — that's
//      the discriminator that uniquely identifies the variant.
//   3. For stubs (no payload key in data), falling back to `templateId`
//      value as the dispatch key.
//   4. Re-deserializing the captured Value into the chosen variant's
//      Entry type via `from_value`.
impl<'de> Deserialize<'de> for MasterfileEntry {
	fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
	where
		D: serde::Deserializer<'de>,
	{
		let value = serde_json::Value::deserialize(deserializer)?;
		let discriminator: Option<String> = value
			.get("data")
			.and_then(|d| d.as_object())
			.and_then(|m| m.keys().find(|k| k.as_str() != "templateId"))
			.cloned();
		match discriminator.as_deref() {
			Some("pokemonExtendedSettings") => Ok(Self::PokemonExtendedSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("genderSettings") => Ok(Self::GenderSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonSettings") => Ok(Self::PokemonSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarCustomization") => Ok(Self::AvatarCustomization(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarItemDisplay") => Ok(Self::AvatarItemDisplay(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("iapItemDisplay") => Ok(Self::IapItemDisplay(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("formSettings") => Ok(Self::FormSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("badgeSettings") => Ok(Self::BadgeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("stickerMetadata") => Ok(Self::StickerMetadata(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("eventPassTierSettings") => Ok(Self::EventPassTierSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonFamily") => Ok(Self::PokemonFamily(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("moveSettings") => Ok(Self::MoveSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("moveSequenceSettings") => Ok(Self::MoveSequenceSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatMove") => Ok(Self::CombatMove(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("settingsOverrideRule") => Ok(Self::SettingsOverrideRule(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("locationCardSettings") => Ok(Self::LocationCardSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("itemSettings") => Ok(Self::ItemSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatLeague") => Ok(Self::CombatLeague(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("megaEvoLevelSettings") => Ok(Self::MegaEvoLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("levelUpRewards") => Ok(Self::LevelUpRewards(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("evolutionChainDisplaySettings") => Ok(Self::EvolutionChainDisplaySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("invasionNpcDisplaySettings") => Ok(Self::InvasionNpcDisplaySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("clientQuestTemplate") => Ok(Self::ClientQuestTemplate(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("temporaryEvolutionSettings") => Ok(Self::TemporaryEvolutionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vsSeekerLoot") => Ok(Self::VsSeekerLoot(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("photoSetsSettingsProto") => Ok(Self::PhotoSetsSettingsProto(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("evolutionQuestTemplate") => Ok(Self::EvolutionQuestTemplate(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("limitedPurchaseSkuSettings") => Ok(Self::LimitedPurchaseSkuSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("itemExpirationSettings") => Ok(Self::ItemExpirationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatRankingProtoSettings") => Ok(Self::CombatRankingProtoSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatType") => Ok(Self::CombatType(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("typeEffective") => Ok(Self::TypeEffective(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("featureGate") => Ok(Self::FeatureGate(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("codeGateProto") => Ok(Self::CodeGateProto(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("iapCategoryDisplay") => Ok(Self::IapCategoryDisplay(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("recommendedSearchSettings") => Ok(Self::RecommendedSearchSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatNpcTrainer") => Ok(Self::CombatNpcTrainer(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("nonCombatMoveSettings") => Ok(Self::NonCombatMoveSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyActivityCategorySettings") => Ok(Self::BuddyActivityCategorySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadMoveLevelSettings") => Ok(Self::BreadMoveLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyEmotionLevelSettings") => Ok(Self::BuddyEmotionLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonHomeFormReversions") => Ok(Self::PokemonHomeFormReversions(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokestopInvasionAvailabilitySettings") => Ok(Self::PokestopInvasionAvailabilitySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("weatherAffinities") => Ok(Self::WeatherAffinities(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("friendshipMilestoneSettings") => Ok(Self::FriendshipMilestoneSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonScaleSettings") => Ok(Self::PokemonScaleSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyLevelSettings") => Ok(Self::BuddyLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("tappableSettings") => Ok(Self::TappableSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("fortPowerUpLevelSettings") => Ok(Self::FortPowerUpLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonHomeEnergyCosts") => Ok(Self::PokemonHomeEnergyCosts(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatNpcPersonality") => Ok(Self::CombatNpcPersonality(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("languageSettings") => Ok(Self::LanguageSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("questSettings") => Ok(Self::QuestSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("rollBack") => Ok(Self::RollBack(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarGroupOrderSettings") => Ok(Self::AvatarGroupOrderSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("eventPassSettings") => Ok(Self::EventPassSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("partyPlayGeneralSettings") => Ok(Self::PartyPlayGeneralSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonUpgrades") => Ok(Self::PokemonUpgrades(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vsSeekerPokemonRewards") => Ok(Self::VsSeekerPokemonRewards(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("accessibilitySettings") => Ok(Self::AccessibilitySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("additiveSceneSettings") => Ok(Self::AdditiveSceneSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("addressablePokemonSettings") => Ok(Self::AddressablePokemonSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("addressBookImportSettings") => Ok(Self::AddressBookImportSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("advancedSettings") => Ok(Self::AdvancedSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("arPhotoFeatureFlags") => Ok(Self::ArPhotoFeatureFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("arTelemetrySettings") => Ok(Self::ArTelemetrySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("assetRefreshProto") => Ok(Self::AssetRefreshProto(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarFeatureFlags") => Ok(Self::AvatarFeatureFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarStoreFooterFlags") => Ok(Self::AvatarStoreFooterFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("avatarStoreSubcategoryFilteringFlags") => Ok(Self::AvatarStoreSubcategoryFilteringFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("backgroundModeSettings") => Ok(Self::BackgroundModeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleAnimationSettings") => Ok(Self::BattleAnimationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleHubBadgeSettings") => Ok(Self::BattleHubBadgeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleHubOrderSettings") => Ok(Self::BattleHubOrderSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleInputBufferSettings") => Ok(Self::BattleInputBufferSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battlePartySettings") => Ok(Self::BattlePartySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleSettings") => Ok(Self::BattleSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("battleVisualSettings") => Ok(Self::BattleVisualSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("belugaPokemonWhitelist") => Ok(Self::BelugaPokemonWhitelist(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("bestFriendsPlusSettings") => Ok(Self::BestFriendsPlusSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadBattleClientSettings") => Ok(Self::BreadBattleClientSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadFeatureFlags") => Ok(Self::BreadFeatureFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadLobbyCounterSettings") => Ok(Self::BreadLobbyCounterSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadLobbyUpdateSettings") => Ok(Self::BreadLobbyUpdateSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadMoveMappings") => Ok(Self::BreadMoveMappings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadPokemonScalingSettings") => Ok(Self::BreadPokemonScalingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("breadSettings") => Ok(Self::BreadSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyEncounterCameoSettings") => Ok(Self::BuddyEncounterCameoSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyHungerSettings") => Ok(Self::BuddyHungerSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyInteractionSettings") => Ok(Self::BuddyInteractionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddySwapSettings") => Ok(Self::BuddySwapSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("buddyWalkSettings") => Ok(Self::BuddyWalkSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("bulkHealingSettings") => Ok(Self::BulkHealingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("butterflyCollectorSettings") => Ok(Self::ButterflyCollectorSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("campfireSettings") => Ok(Self::CampfireSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("catchRadiusMultiplierSettings") => Ok(Self::CatchRadiusMultiplierSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatCompetitiveSeasonSettings") => Ok(Self::CombatCompetitiveSeasonSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatLeagueSettings") => Ok(Self::CombatLeagueSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatSettings") => Ok(Self::CombatSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("combatStatStageSettings") => Ok(Self::CombatStatStageSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("contestSettings") => Ok(Self::ContestSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("conversationSettings") => Ok(Self::ConversationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("crossGameSocialSettings") => Ok(Self::CrossGameSocialSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("dailyAdventureIncenseSettings") => Ok(Self::DailyAdventureIncenseSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("deepLinkingSettings") => Ok(Self::DeepLinkingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("eggHatchImprovementsSettings") => Ok(Self::EggHatchImprovementsSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("encounterSettings") => Ok(Self::EncounterSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("eventPlannerPopularNotificationSettings") => Ok(Self::EventPlannerPopularNotificationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("externalAddressableAssetsSettings") => Ok(Self::ExternalAddressableAssetsSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("featureUnlockLevelSettings") => Ok(Self::FeatureUnlockLevelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("geotargetedQuestSettings") => Ok(Self::GeotargetedQuestSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("giftingSettings") => Ok(Self::GiftingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("guiSearchSettings") => Ok(Self::GuiSearchSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("gymBadgeSettings") => Ok(Self::GymBadgeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("hapticsSettings") => Ok(Self::HapticsSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("iapSettings") => Ok(Self::IapSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("ibfcLightweightSettings") => Ok(Self::IbfcLightweightSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("impressionTrackingSettings") => Ok(Self::ImpressionTrackingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("inAppSurveySettings") => Ok(Self::InAppSurveySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("incidentPrioritySettings") => Ok(Self::IncidentPrioritySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("incidentVisibilitySettings") => Ok(Self::IncidentVisibilitySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("inventorySettings") => Ok(Self::InventorySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("irisSocialSettings") => Ok(Self::IrisSocialSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("irisSocialUxFunnelSettings") => Ok(Self::IrisSocialUxFunnelSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("itemInventoryUpdateSettings") => Ok(Self::ItemInventoryUpdateSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("joinRaidViaFriendListSettings") => Ok(Self::JoinRaidViaFriendListSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("languageSelectorSettings") => Ok(Self::LanguageSelectorSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("luckyPokemonSettings") => Ok(Self::LuckyPokemonSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("mainMenuChanges") => Ok(Self::MainMenuChanges(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("mapDisplaySettings") => Ok(Self::MapDisplaySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("mapObjectsInteractionRangeSettings") => Ok(Self::MapObjectsInteractionRangeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("megaEvoSettings") => Ok(Self::MegaEvoSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("monodepthSettings") => Ok(Self::MonodepthSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("mpSettings") => Ok(Self::MpSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("naturalArtDayNightFeatureSettings") => Ok(Self::NaturalArtDayNightFeatureSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("nearbyPokemonSettings") => Ok(Self::NearbyPokemonSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("neutralAvatarSettings") => Ok(Self::NeutralAvatarSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("onboardingSettings") => Ok(Self::OnboardingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("optimizationsProto") => Ok(Self::OptimizationsProto(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("partyDarkLaunchSettings") => Ok(Self::PartyDarkLaunchSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("partyIapBoostsSettings") => Ok(Self::PartyIapBoostsSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("partyRecommendationSettings") => Ok(Self::PartyRecommendationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("photoSettings") => Ok(Self::PhotoSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("plannerSettings") => Ok(Self::PlannerSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("playerBonusSystemSettings") => Ok(Self::PlayerBonusSystemSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("playerLevel") => Ok(Self::PlayerLevel(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokeballThrowPropertySettings") => Ok(Self::PokeballThrowPropertySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokecoinPurchaseDisplayGmt") => Ok(Self::PokecoinPurchaseDisplayGmt(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokedexCategoriesSettings") => Ok(Self::PokedexCategoriesSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokedexSizeStatsSystemSettings") => Ok(Self::PokedexSizeStatsSystemSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokedexv2FeatureFlags") => Ok(Self::Pokedexv2featureFlags(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokedexV2Settings") => Ok(Self::PokedexV2settings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonFxSettings") => Ok(Self::PokemonFxSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonHomeSettings") => Ok(Self::PokemonHomeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("pokemonTagSettings") => Ok(Self::PokemonTagSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("popupControlSettings") => Ok(Self::PopupControlSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("postcardCollectionSettings") => Ok(Self::PostcardCollectionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("powerUpPokestopsSettings") => Ok(Self::PowerUpPokestopsSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("primalEvoSettings") => Ok(Self::PrimalEvoSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("ptcOauthSettings") => Ok(Self::PtcOauthSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("quickInviteSettings") => Ok(Self::QuickInviteSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("raidLobbyCounterSettings") => Ok(Self::RaidLobbyCounterSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("raidSettings") => Ok(Self::RaidSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("referralSettings") => Ok(Self::ReferralSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("remoteTradeSettings") => Ok(Self::RemoteTradeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routeBadgeSettings") => Ok(Self::RouteBadgeSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routeCreationSettings") => Ok(Self::RouteCreationSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routeDiscoverySettings") => Ok(Self::RouteDiscoverySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routePinSettings") => Ok(Self::RoutePinSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routePlaySettings") => Ok(Self::RoutePlaySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routesNearbyNotifSettings") => Ok(Self::RoutesNearbyNotifSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routesPartyPlayInteropSettings") => Ok(Self::RoutesPartyPlayInteropSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("routeStampCategorySettings") => Ok(Self::RouteStampCategorySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("sharedFusionSettings") => Ok(Self::SharedFusionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("sharedMoveSettings") => Ok(Self::SharedMoveSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("sourdoughMoveMappingSettings") => Ok(Self::SourdoughMoveMappingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("specialEggSettings") => Ok(Self::SpecialEggSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("sponsoredGeofenceGiftSettings") => Ok(Self::SponsoredGeofenceGiftSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("squashSettings") => Ok(Self::SquashSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("stampCollectionSettings") => Ok(Self::StampCollectionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("stationedPokemonTableSettings") => Ok(Self::StationedPokemonTableSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("stickerCategorySettings") => Ok(Self::StickerCategorySettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("styleShopSettings") => Ok(Self::StyleShopSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("ticketGiftingSettings") => Ok(Self::TicketGiftingSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("todayViewSettings") => Ok(Self::TodayViewSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("tutorialSettings") => Ok(Self::TutorialSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("usernameSuggestionSettings") => Ok(Self::UsernameSuggestionSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("verboseLogCombatSettings") => Ok(Self::VerboseLogCombatSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("verboseLogRaidSettings") => Ok(Self::VerboseLogRaidSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vistaGeneralSettings") => Ok(Self::VistaGeneralSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vnextBattleConfig") => Ok(Self::VnextBattleConfig(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vsSeekerClientSettings") => Ok(Self::VsSeekerClientSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("vsSeekerScheduleSettings") => Ok(Self::VsSeekerScheduleSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			Some("weatherBonusSettings") => Ok(Self::WeatherBonusSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
			None => {
				let template_id = value
					.get("templateId")
					.and_then(|t| t.as_str())
					.ok_or_else(|| ::serde::de::Error::custom("stub entry missing templateId"))?;
				match template_id {
				"ITEM_CURRENCY_VALUES" => Ok(Self::ItemCurrencyValues(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
				"QUEST_DIALOGUE_INBOX_SETTINGS" => Ok(Self::QuestDialogueInboxSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
				"RAID_ENTRY_COST_SETTINGS" => Ok(Self::RaidEntryCostSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
				"SOFT_SFIDA_SETTINGS" => Ok(Self::SoftSfidaSettings(::serde_json::from_value(value).map_err(::serde::de::Error::custom)?)),
					other => Err(::serde::de::Error::custom(format!(
						"unknown stub templateId: {}", other
					))),
				}
			}
			Some(other) => Err(::serde::de::Error::custom(format!(
				"unknown discriminator: {}", other
			))),
		}
	}
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

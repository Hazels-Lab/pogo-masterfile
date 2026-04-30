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

#![allow(clippy::large_enum_variant)]

use serde::{Deserialize, Serialize};

pub use pogo_masterfile_macros::{AllVariants, AsStr, FromStrEnum};

/// Error returned by `FromStr` impls on generated templateId enums when the
/// input string does not match any known templateId for the group.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct UnknownTemplateId(pub String);

impl core::fmt::Display for UnknownTemplateId {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        write!(f, "unknown templateId: {}", self.0)
    }
}

impl std::error::Error for UnknownTemplateId {}

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
    EvolutionChainDisplaySettings(
        evolution_chain_display_settings::EvolutionChainDisplaySettingsEntry,
    ),
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
    BuddyActivityCategorySettings(
        buddy_activity_category_settings::BuddyActivityCategorySettingsEntry,
    ),
    BreadMoveLevelSettings(bread_move_level_settings::BreadMoveLevelSettingsEntry),
    BuddyEmotionLevelSettings(buddy_emotion_level_settings::BuddyEmotionLevelSettingsEntry),
    PokemonHomeFormReversions(pokemon_home_form_reversions::PokemonHomeFormReversionsEntry),
    PokestopInvasionAvailabilitySettings(
        pokestop_invasion_availability_settings::PokestopInvasionAvailabilitySettingsEntry,
    ),
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
    EventPlannerPopularNotificationSettings(
        singletons::EventPlannerPopularNotificationSettingsEntry,
    ),
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
        use serde::de::Error;
        let value = serde_json::Value::deserialize(deserializer)?;
        let discriminator = value
            .get("data")
            .and_then(|d| d.as_object())
            .and_then(|m| m.keys().find(|k| k.as_str() != "templateId"))
            .cloned();

        let result: serde_json::Result<Self> = if let Some(disc) = discriminator.as_deref() {
            match disc {
                "pokemonExtendedSettings" => {
                    serde_json::from_value(value).map(Self::PokemonExtendedSettings)
                }
                "genderSettings" => serde_json::from_value(value).map(Self::GenderSettings),
                "pokemonSettings" => serde_json::from_value(value).map(Self::PokemonSettings),
                "avatarCustomization" => {
                    serde_json::from_value(value).map(Self::AvatarCustomization)
                }
                "avatarItemDisplay" => serde_json::from_value(value).map(Self::AvatarItemDisplay),
                "iapItemDisplay" => serde_json::from_value(value).map(Self::IapItemDisplay),
                "formSettings" => serde_json::from_value(value).map(Self::FormSettings),
                "badgeSettings" => serde_json::from_value(value).map(Self::BadgeSettings),
                "stickerMetadata" => serde_json::from_value(value).map(Self::StickerMetadata),
                "eventPassTierSettings" => {
                    serde_json::from_value(value).map(Self::EventPassTierSettings)
                }
                "pokemonFamily" => serde_json::from_value(value).map(Self::PokemonFamily),
                "moveSettings" => serde_json::from_value(value).map(Self::MoveSettings),
                "moveSequenceSettings" => {
                    serde_json::from_value(value).map(Self::MoveSequenceSettings)
                }
                "combatMove" => serde_json::from_value(value).map(Self::CombatMove),
                "settingsOverrideRule" => {
                    serde_json::from_value(value).map(Self::SettingsOverrideRule)
                }
                "locationCardSettings" => {
                    serde_json::from_value(value).map(Self::LocationCardSettings)
                }
                "itemSettings" => serde_json::from_value(value).map(Self::ItemSettings),
                "combatLeague" => serde_json::from_value(value).map(Self::CombatLeague),
                "megaEvoLevelSettings" => {
                    serde_json::from_value(value).map(Self::MegaEvoLevelSettings)
                }
                "levelUpRewards" => serde_json::from_value(value).map(Self::LevelUpRewards),
                "evolutionChainDisplaySettings" => {
                    serde_json::from_value(value).map(Self::EvolutionChainDisplaySettings)
                }
                "invasionNpcDisplaySettings" => {
                    serde_json::from_value(value).map(Self::InvasionNpcDisplaySettings)
                }
                "clientQuestTemplate" => {
                    serde_json::from_value(value).map(Self::ClientQuestTemplate)
                }
                "temporaryEvolutionSettings" => {
                    serde_json::from_value(value).map(Self::TemporaryEvolutionSettings)
                }
                "vsSeekerLoot" => serde_json::from_value(value).map(Self::VsSeekerLoot),
                "photoSetsSettingsProto" => {
                    serde_json::from_value(value).map(Self::PhotoSetsSettingsProto)
                }
                "evolutionQuestTemplate" => {
                    serde_json::from_value(value).map(Self::EvolutionQuestTemplate)
                }
                "limitedPurchaseSkuSettings" => {
                    serde_json::from_value(value).map(Self::LimitedPurchaseSkuSettings)
                }
                "itemExpirationSettings" => {
                    serde_json::from_value(value).map(Self::ItemExpirationSettings)
                }
                "combatRankingProtoSettings" => {
                    serde_json::from_value(value).map(Self::CombatRankingProtoSettings)
                }
                "combatType" => serde_json::from_value(value).map(Self::CombatType),
                "typeEffective" => serde_json::from_value(value).map(Self::TypeEffective),
                "featureGate" => serde_json::from_value(value).map(Self::FeatureGate),
                "codeGateProto" => serde_json::from_value(value).map(Self::CodeGateProto),
                "iapCategoryDisplay" => serde_json::from_value(value).map(Self::IapCategoryDisplay),
                "recommendedSearchSettings" => {
                    serde_json::from_value(value).map(Self::RecommendedSearchSettings)
                }
                "combatNpcTrainer" => serde_json::from_value(value).map(Self::CombatNpcTrainer),
                "nonCombatMoveSettings" => {
                    serde_json::from_value(value).map(Self::NonCombatMoveSettings)
                }
                "buddyActivityCategorySettings" => {
                    serde_json::from_value(value).map(Self::BuddyActivityCategorySettings)
                }
                "breadMoveLevelSettings" => {
                    serde_json::from_value(value).map(Self::BreadMoveLevelSettings)
                }
                "buddyEmotionLevelSettings" => {
                    serde_json::from_value(value).map(Self::BuddyEmotionLevelSettings)
                }
                "pokemonHomeFormReversions" => {
                    serde_json::from_value(value).map(Self::PokemonHomeFormReversions)
                }
                "pokestopInvasionAvailabilitySettings" => {
                    serde_json::from_value(value).map(Self::PokestopInvasionAvailabilitySettings)
                }
                "weatherAffinities" => serde_json::from_value(value).map(Self::WeatherAffinities),
                "friendshipMilestoneSettings" => {
                    serde_json::from_value(value).map(Self::FriendshipMilestoneSettings)
                }
                "pokemonScaleSettings" => {
                    serde_json::from_value(value).map(Self::PokemonScaleSettings)
                }
                "buddyLevelSettings" => serde_json::from_value(value).map(Self::BuddyLevelSettings),
                "tappableSettings" => serde_json::from_value(value).map(Self::TappableSettings),
                "fortPowerUpLevelSettings" => {
                    serde_json::from_value(value).map(Self::FortPowerUpLevelSettings)
                }
                "pokemonHomeEnergyCosts" => {
                    serde_json::from_value(value).map(Self::PokemonHomeEnergyCosts)
                }
                "combatNpcPersonality" => {
                    serde_json::from_value(value).map(Self::CombatNpcPersonality)
                }
                "languageSettings" => serde_json::from_value(value).map(Self::LanguageSettings),
                "questSettings" => serde_json::from_value(value).map(Self::QuestSettings),
                "rollBack" => serde_json::from_value(value).map(Self::RollBack),
                "avatarGroupOrderSettings" => {
                    serde_json::from_value(value).map(Self::AvatarGroupOrderSettings)
                }
                "eventPassSettings" => serde_json::from_value(value).map(Self::EventPassSettings),
                "partyPlayGeneralSettings" => {
                    serde_json::from_value(value).map(Self::PartyPlayGeneralSettings)
                }
                "pokemonUpgrades" => serde_json::from_value(value).map(Self::PokemonUpgrades),
                "vsSeekerPokemonRewards" => {
                    serde_json::from_value(value).map(Self::VsSeekerPokemonRewards)
                }
                "accessibilitySettings" => {
                    serde_json::from_value(value).map(Self::AccessibilitySettings)
                }
                "additiveSceneSettings" => {
                    serde_json::from_value(value).map(Self::AdditiveSceneSettings)
                }
                "addressablePokemonSettings" => {
                    serde_json::from_value(value).map(Self::AddressablePokemonSettings)
                }
                "addressBookImportSettings" => {
                    serde_json::from_value(value).map(Self::AddressBookImportSettings)
                }
                "advancedSettings" => serde_json::from_value(value).map(Self::AdvancedSettings),
                "arPhotoFeatureFlags" => {
                    serde_json::from_value(value).map(Self::ArPhotoFeatureFlags)
                }
                "arTelemetrySettings" => {
                    serde_json::from_value(value).map(Self::ArTelemetrySettings)
                }
                "assetRefreshProto" => serde_json::from_value(value).map(Self::AssetRefreshProto),
                "avatarFeatureFlags" => serde_json::from_value(value).map(Self::AvatarFeatureFlags),
                "avatarStoreFooterFlags" => {
                    serde_json::from_value(value).map(Self::AvatarStoreFooterFlags)
                }
                "avatarStoreSubcategoryFilteringFlags" => {
                    serde_json::from_value(value).map(Self::AvatarStoreSubcategoryFilteringFlags)
                }
                "backgroundModeSettings" => {
                    serde_json::from_value(value).map(Self::BackgroundModeSettings)
                }
                "battleAnimationSettings" => {
                    serde_json::from_value(value).map(Self::BattleAnimationSettings)
                }
                "battleHubBadgeSettings" => {
                    serde_json::from_value(value).map(Self::BattleHubBadgeSettings)
                }
                "battleHubOrderSettings" => {
                    serde_json::from_value(value).map(Self::BattleHubOrderSettings)
                }
                "battleInputBufferSettings" => {
                    serde_json::from_value(value).map(Self::BattleInputBufferSettings)
                }
                "battlePartySettings" => {
                    serde_json::from_value(value).map(Self::BattlePartySettings)
                }
                "battleSettings" => serde_json::from_value(value).map(Self::BattleSettings),
                "battleVisualSettings" => {
                    serde_json::from_value(value).map(Self::BattleVisualSettings)
                }
                "belugaPokemonWhitelist" => {
                    serde_json::from_value(value).map(Self::BelugaPokemonWhitelist)
                }
                "bestFriendsPlusSettings" => {
                    serde_json::from_value(value).map(Self::BestFriendsPlusSettings)
                }
                "breadBattleClientSettings" => {
                    serde_json::from_value(value).map(Self::BreadBattleClientSettings)
                }
                "breadFeatureFlags" => serde_json::from_value(value).map(Self::BreadFeatureFlags),
                "breadLobbyCounterSettings" => {
                    serde_json::from_value(value).map(Self::BreadLobbyCounterSettings)
                }
                "breadLobbyUpdateSettings" => {
                    serde_json::from_value(value).map(Self::BreadLobbyUpdateSettings)
                }
                "breadMoveMappings" => serde_json::from_value(value).map(Self::BreadMoveMappings),
                "breadPokemonScalingSettings" => {
                    serde_json::from_value(value).map(Self::BreadPokemonScalingSettings)
                }
                "breadSettings" => serde_json::from_value(value).map(Self::BreadSettings),
                "buddyEncounterCameoSettings" => {
                    serde_json::from_value(value).map(Self::BuddyEncounterCameoSettings)
                }
                "buddyHungerSettings" => {
                    serde_json::from_value(value).map(Self::BuddyHungerSettings)
                }
                "buddyInteractionSettings" => {
                    serde_json::from_value(value).map(Self::BuddyInteractionSettings)
                }
                "buddySwapSettings" => serde_json::from_value(value).map(Self::BuddySwapSettings),
                "buddyWalkSettings" => serde_json::from_value(value).map(Self::BuddyWalkSettings),
                "bulkHealingSettings" => {
                    serde_json::from_value(value).map(Self::BulkHealingSettings)
                }
                "butterflyCollectorSettings" => {
                    serde_json::from_value(value).map(Self::ButterflyCollectorSettings)
                }
                "campfireSettings" => serde_json::from_value(value).map(Self::CampfireSettings),
                "catchRadiusMultiplierSettings" => {
                    serde_json::from_value(value).map(Self::CatchRadiusMultiplierSettings)
                }
                "combatCompetitiveSeasonSettings" => {
                    serde_json::from_value(value).map(Self::CombatCompetitiveSeasonSettings)
                }
                "combatLeagueSettings" => {
                    serde_json::from_value(value).map(Self::CombatLeagueSettings)
                }
                "combatSettings" => serde_json::from_value(value).map(Self::CombatSettings),
                "combatStatStageSettings" => {
                    serde_json::from_value(value).map(Self::CombatStatStageSettings)
                }
                "contestSettings" => serde_json::from_value(value).map(Self::ContestSettings),
                "conversationSettings" => {
                    serde_json::from_value(value).map(Self::ConversationSettings)
                }
                "crossGameSocialSettings" => {
                    serde_json::from_value(value).map(Self::CrossGameSocialSettings)
                }
                "dailyAdventureIncenseSettings" => {
                    serde_json::from_value(value).map(Self::DailyAdventureIncenseSettings)
                }
                "deepLinkingSettings" => {
                    serde_json::from_value(value).map(Self::DeepLinkingSettings)
                }
                "eggHatchImprovementsSettings" => {
                    serde_json::from_value(value).map(Self::EggHatchImprovementsSettings)
                }
                "encounterSettings" => serde_json::from_value(value).map(Self::EncounterSettings),
                "eventPlannerPopularNotificationSettings" => {
                    serde_json::from_value(value).map(Self::EventPlannerPopularNotificationSettings)
                }
                "externalAddressableAssetsSettings" => {
                    serde_json::from_value(value).map(Self::ExternalAddressableAssetsSettings)
                }
                "featureUnlockLevelSettings" => {
                    serde_json::from_value(value).map(Self::FeatureUnlockLevelSettings)
                }
                "geotargetedQuestSettings" => {
                    serde_json::from_value(value).map(Self::GeotargetedQuestSettings)
                }
                "giftingSettings" => serde_json::from_value(value).map(Self::GiftingSettings),
                "guiSearchSettings" => serde_json::from_value(value).map(Self::GuiSearchSettings),
                "gymBadgeSettings" => serde_json::from_value(value).map(Self::GymBadgeSettings),
                "hapticsSettings" => serde_json::from_value(value).map(Self::HapticsSettings),
                "iapSettings" => serde_json::from_value(value).map(Self::IapSettings),
                "ibfcLightweightSettings" => {
                    serde_json::from_value(value).map(Self::IbfcLightweightSettings)
                }
                "impressionTrackingSettings" => {
                    serde_json::from_value(value).map(Self::ImpressionTrackingSettings)
                }
                "inAppSurveySettings" => {
                    serde_json::from_value(value).map(Self::InAppSurveySettings)
                }
                "incidentPrioritySettings" => {
                    serde_json::from_value(value).map(Self::IncidentPrioritySettings)
                }
                "incidentVisibilitySettings" => {
                    serde_json::from_value(value).map(Self::IncidentVisibilitySettings)
                }
                "inventorySettings" => serde_json::from_value(value).map(Self::InventorySettings),
                "irisSocialSettings" => serde_json::from_value(value).map(Self::IrisSocialSettings),
                "irisSocialUxFunnelSettings" => {
                    serde_json::from_value(value).map(Self::IrisSocialUxFunnelSettings)
                }
                "itemInventoryUpdateSettings" => {
                    serde_json::from_value(value).map(Self::ItemInventoryUpdateSettings)
                }
                "joinRaidViaFriendListSettings" => {
                    serde_json::from_value(value).map(Self::JoinRaidViaFriendListSettings)
                }
                "languageSelectorSettings" => {
                    serde_json::from_value(value).map(Self::LanguageSelectorSettings)
                }
                "luckyPokemonSettings" => {
                    serde_json::from_value(value).map(Self::LuckyPokemonSettings)
                }
                "mainMenuChanges" => serde_json::from_value(value).map(Self::MainMenuChanges),
                "mapDisplaySettings" => serde_json::from_value(value).map(Self::MapDisplaySettings),
                "mapObjectsInteractionRangeSettings" => {
                    serde_json::from_value(value).map(Self::MapObjectsInteractionRangeSettings)
                }
                "megaEvoSettings" => serde_json::from_value(value).map(Self::MegaEvoSettings),
                "monodepthSettings" => serde_json::from_value(value).map(Self::MonodepthSettings),
                "mpSettings" => serde_json::from_value(value).map(Self::MpSettings),
                "naturalArtDayNightFeatureSettings" => {
                    serde_json::from_value(value).map(Self::NaturalArtDayNightFeatureSettings)
                }
                "nearbyPokemonSettings" => {
                    serde_json::from_value(value).map(Self::NearbyPokemonSettings)
                }
                "neutralAvatarSettings" => {
                    serde_json::from_value(value).map(Self::NeutralAvatarSettings)
                }
                "onboardingSettings" => serde_json::from_value(value).map(Self::OnboardingSettings),
                "optimizationsProto" => serde_json::from_value(value).map(Self::OptimizationsProto),
                "partyDarkLaunchSettings" => {
                    serde_json::from_value(value).map(Self::PartyDarkLaunchSettings)
                }
                "partyIapBoostsSettings" => {
                    serde_json::from_value(value).map(Self::PartyIapBoostsSettings)
                }
                "partyRecommendationSettings" => {
                    serde_json::from_value(value).map(Self::PartyRecommendationSettings)
                }
                "photoSettings" => serde_json::from_value(value).map(Self::PhotoSettings),
                "plannerSettings" => serde_json::from_value(value).map(Self::PlannerSettings),
                "playerBonusSystemSettings" => {
                    serde_json::from_value(value).map(Self::PlayerBonusSystemSettings)
                }
                "playerLevel" => serde_json::from_value(value).map(Self::PlayerLevel),
                "pokeballThrowPropertySettings" => {
                    serde_json::from_value(value).map(Self::PokeballThrowPropertySettings)
                }
                "pokecoinPurchaseDisplayGmt" => {
                    serde_json::from_value(value).map(Self::PokecoinPurchaseDisplayGmt)
                }
                "pokedexCategoriesSettings" => {
                    serde_json::from_value(value).map(Self::PokedexCategoriesSettings)
                }
                "pokedexSizeStatsSystemSettings" => {
                    serde_json::from_value(value).map(Self::PokedexSizeStatsSystemSettings)
                }
                "pokedexv2FeatureFlags" => {
                    serde_json::from_value(value).map(Self::Pokedexv2featureFlags)
                }
                "pokedexV2Settings" => serde_json::from_value(value).map(Self::PokedexV2settings),
                "pokemonFxSettings" => serde_json::from_value(value).map(Self::PokemonFxSettings),
                "pokemonHomeSettings" => {
                    serde_json::from_value(value).map(Self::PokemonHomeSettings)
                }
                "pokemonTagSettings" => serde_json::from_value(value).map(Self::PokemonTagSettings),
                "popupControlSettings" => {
                    serde_json::from_value(value).map(Self::PopupControlSettings)
                }
                "postcardCollectionSettings" => {
                    serde_json::from_value(value).map(Self::PostcardCollectionSettings)
                }
                "powerUpPokestopsSettings" => {
                    serde_json::from_value(value).map(Self::PowerUpPokestopsSettings)
                }
                "primalEvoSettings" => serde_json::from_value(value).map(Self::PrimalEvoSettings),
                "ptcOauthSettings" => serde_json::from_value(value).map(Self::PtcOauthSettings),
                "quickInviteSettings" => {
                    serde_json::from_value(value).map(Self::QuickInviteSettings)
                }
                "raidLobbyCounterSettings" => {
                    serde_json::from_value(value).map(Self::RaidLobbyCounterSettings)
                }
                "raidSettings" => serde_json::from_value(value).map(Self::RaidSettings),
                "referralSettings" => serde_json::from_value(value).map(Self::ReferralSettings),
                "remoteTradeSettings" => {
                    serde_json::from_value(value).map(Self::RemoteTradeSettings)
                }
                "routeBadgeSettings" => serde_json::from_value(value).map(Self::RouteBadgeSettings),
                "routeCreationSettings" => {
                    serde_json::from_value(value).map(Self::RouteCreationSettings)
                }
                "routeDiscoverySettings" => {
                    serde_json::from_value(value).map(Self::RouteDiscoverySettings)
                }
                "routePinSettings" => serde_json::from_value(value).map(Self::RoutePinSettings),
                "routePlaySettings" => serde_json::from_value(value).map(Self::RoutePlaySettings),
                "routesNearbyNotifSettings" => {
                    serde_json::from_value(value).map(Self::RoutesNearbyNotifSettings)
                }
                "routesPartyPlayInteropSettings" => {
                    serde_json::from_value(value).map(Self::RoutesPartyPlayInteropSettings)
                }
                "routeStampCategorySettings" => {
                    serde_json::from_value(value).map(Self::RouteStampCategorySettings)
                }
                "sharedFusionSettings" => {
                    serde_json::from_value(value).map(Self::SharedFusionSettings)
                }
                "sharedMoveSettings" => serde_json::from_value(value).map(Self::SharedMoveSettings),
                "sourdoughMoveMappingSettings" => {
                    serde_json::from_value(value).map(Self::SourdoughMoveMappingSettings)
                }
                "specialEggSettings" => serde_json::from_value(value).map(Self::SpecialEggSettings),
                "sponsoredGeofenceGiftSettings" => {
                    serde_json::from_value(value).map(Self::SponsoredGeofenceGiftSettings)
                }
                "squashSettings" => serde_json::from_value(value).map(Self::SquashSettings),
                "stampCollectionSettings" => {
                    serde_json::from_value(value).map(Self::StampCollectionSettings)
                }
                "stationedPokemonTableSettings" => {
                    serde_json::from_value(value).map(Self::StationedPokemonTableSettings)
                }
                "stickerCategorySettings" => {
                    serde_json::from_value(value).map(Self::StickerCategorySettings)
                }
                "styleShopSettings" => serde_json::from_value(value).map(Self::StyleShopSettings),
                "ticketGiftingSettings" => {
                    serde_json::from_value(value).map(Self::TicketGiftingSettings)
                }
                "todayViewSettings" => serde_json::from_value(value).map(Self::TodayViewSettings),
                "tutorialSettings" => serde_json::from_value(value).map(Self::TutorialSettings),
                "usernameSuggestionSettings" => {
                    serde_json::from_value(value).map(Self::UsernameSuggestionSettings)
                }
                "verboseLogCombatSettings" => {
                    serde_json::from_value(value).map(Self::VerboseLogCombatSettings)
                }
                "verboseLogRaidSettings" => {
                    serde_json::from_value(value).map(Self::VerboseLogRaidSettings)
                }
                "vistaGeneralSettings" => {
                    serde_json::from_value(value).map(Self::VistaGeneralSettings)
                }
                "vnextBattleConfig" => serde_json::from_value(value).map(Self::VnextBattleConfig),
                "vsSeekerClientSettings" => {
                    serde_json::from_value(value).map(Self::VsSeekerClientSettings)
                }
                "vsSeekerScheduleSettings" => {
                    serde_json::from_value(value).map(Self::VsSeekerScheduleSettings)
                }
                "weatherBonusSettings" => {
                    serde_json::from_value(value).map(Self::WeatherBonusSettings)
                }
                other => Err(serde_json::Error::custom(format!(
                    "unknown discriminator: {}",
                    other
                ))),
            }
        } else {
            let template_id = value
                .get("templateId")
                .and_then(|t| t.as_str())
                .map(String::from);
            match template_id.as_deref() {
                Some("ITEM_CURRENCY_VALUES") => {
                    serde_json::from_value(value).map(Self::ItemCurrencyValues)
                }
                Some("QUEST_DIALOGUE_INBOX_SETTINGS") => {
                    serde_json::from_value(value).map(Self::QuestDialogueInboxSettings)
                }
                Some("RAID_ENTRY_COST_SETTINGS") => {
                    serde_json::from_value(value).map(Self::RaidEntryCostSettings)
                }
                Some("SOFT_SFIDA_SETTINGS") => {
                    serde_json::from_value(value).map(Self::SoftSfidaSettings)
                }
                Some(other) => Err(serde_json::Error::custom(format!(
                    "unknown stub templateId: {}",
                    other
                ))),
                None => Err(serde_json::Error::custom("stub entry missing templateId")),
            }
        };

        result.map_err(D::Error::custom)
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

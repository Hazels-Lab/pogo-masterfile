// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

use serde::{Deserialize, Serialize};

#[deprecated(note = "lastSeen 2025-06-06 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct _markerData {}

#[deprecated(note = "lastSeen 2025-06-06 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct _marker {
    pub template_id: String,
    pub data: _markerBody,
}

#[deprecated(note = "lastSeen 2025-06-06 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct _markerBody {
    pub template_id: String,
    pub marker: _markerData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AdventureSyncV2GmtData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdventureSyncV2Gmt {
    pub template_id: String,
    pub data: AdventureSyncV2GmtBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdventureSyncV2GmtBody {
    pub template_id: String,
    pub adventure_sync_v2_gmt: AdventureSyncV2GmtData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AndroidBackButtonRefactorSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AndroidBackButtonRefactorSettings {
    pub template_id: String,
    pub data: AndroidBackButtonRefactorSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AndroidBackButtonRefactorSettingsBody {
    pub template_id: String,
    pub android_back_button_refactor_settings: AndroidBackButtonRefactorSettingsData,
}

#[deprecated(note = "lastSeen 2024-11-11 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadgeSettingsData {}

#[deprecated(note = "lastSeen 2024-11-11 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettings {
    pub template_id: String,
    pub data: BadgeSettingsBody,
}

#[deprecated(note = "lastSeen 2024-11-11 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BadgeSettingsBody {
    pub template_id: String,
    pub badge_settings: BadgeSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BootSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BootSettings {
    pub template_id: String,
    pub data: BootSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BootSettingsBody {
    pub template_id: String,
    pub boot_settings: BootSettingsData,
}

#[deprecated(note = "lastSeen 2025-02-03 — 18 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BuddyActivitySettingsData {}

#[deprecated(note = "lastSeen 2025-02-03 — 18 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyActivitySettings {
    pub template_id: String,
    pub data: BuddyActivitySettingsBody,
}

#[deprecated(note = "lastSeen 2025-02-03 — 18 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuddyActivitySettingsBody {
    pub template_id: String,
    pub buddy_activity_settings: BuddyActivitySettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BuffSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuffSettings {
    pub template_id: String,
    pub data: BuffSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BuffSettingsBody {
    pub template_id: String,
    pub buff_settings: BuffSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 322 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CameraData {}

#[deprecated(note = "lastSeen 2025-01-10 — 322 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Camera {
    pub template_id: String,
    pub data: CameraBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 322 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CameraBody {
    pub template_id: String,
    pub camera: CameraData,
}

#[deprecated(note = "lastSeen 2025-10-16 — 50 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClientQuestTemplateData {}

#[deprecated(note = "lastSeen 2025-10-16 — 50 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplate {
    pub template_id: String,
    pub data: ClientQuestTemplateBody,
}

#[deprecated(note = "lastSeen 2025-10-16 — 50 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClientQuestTemplateBody {
    pub template_id: String,
    pub client_quest_template: ClientQuestTemplateData,
}

#[deprecated(note = "lastSeen 2026-01-24 — 30 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CodeGateProtoData {}

#[deprecated(note = "lastSeen 2026-01-24 — 30 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProto {
    pub template_id: String,
    pub data: CodeGateProtoBody,
}

#[deprecated(note = "lastSeen 2026-01-24 — 30 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CodeGateProtoBody {
    pub template_id: String,
    pub code_gate_proto: CodeGateProtoData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EggTransparencySettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EggTransparencySettings {
    pub template_id: String,
    pub data: EggTransparencySettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EggTransparencySettingsBody {
    pub template_id: String,
    pub egg_transparency_settings: EggTransparencySettingsData,
}

#[deprecated(note = "lastSeen 2026-04-22 — 23 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EventPassSettingsData {}

#[deprecated(note = "lastSeen 2026-04-22 — 23 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassSettings {
    pub template_id: String,
    pub data: EventPassSettingsBody,
}

#[deprecated(note = "lastSeen 2026-04-22 — 23 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassSettingsBody {
    pub template_id: String,
    pub event_pass_settings: EventPassSettingsData,
}

#[deprecated(note = "lastSeen 2026-04-22 — 11890 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EventPassTierSettingsData {}

#[deprecated(note = "lastSeen 2026-04-22 — 11890 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettings {
    pub template_id: String,
    pub data: EventPassTierSettingsBody,
}

#[deprecated(note = "lastSeen 2026-04-22 — 11890 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPassTierSettingsBody {
    pub template_id: String,
    pub event_pass_tier_settings: EventPassTierSettingsData,
}

#[deprecated(note = "lastSeen 2025-10-16 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EvolutionChainDisplaySettingsData {}

#[deprecated(note = "lastSeen 2025-10-16 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettings {
    pub template_id: String,
    pub data: EvolutionChainDisplaySettingsBody,
}

#[deprecated(note = "lastSeen 2025-10-16 — 3 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolutionChainDisplaySettingsBody {
    pub template_id: String,
    pub evolution_chain_display_settings: EvolutionChainDisplaySettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EvolvePreviewSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolvePreviewSettings {
    pub template_id: String,
    pub data: EvolvePreviewSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EvolvePreviewSettingsBody {
    pub template_id: String,
    pub evolve_preview_settings: EvolvePreviewSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExtendedPrimalSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExtendedPrimalSettings {
    pub template_id: String,
    pub data: ExtendedPrimalSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExtendedPrimalSettingsBody {
    pub template_id: String,
    pub extended_primal_settings: ExtendedPrimalSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FormsRefactorSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormsRefactorSettings {
    pub template_id: String,
    pub data: FormsRefactorSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormsRefactorSettingsBody {
    pub template_id: String,
    pub forms_refactor_settings: FormsRefactorSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FriendProfileSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FriendProfileSettings {
    pub template_id: String,
    pub data: FriendProfileSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FriendProfileSettingsBody {
    pub template_id: String,
    pub friend_profile_settings: FriendProfileSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GymLevelData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GymLevel {
    pub template_id: String,
    pub data: GymLevelBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GymLevelBody {
    pub template_id: String,
    pub gym_level: GymLevelData,
}

#[deprecated(note = "lastSeen 2024-10-14 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IapCategoryDisplayData {}

#[deprecated(note = "lastSeen 2024-10-14 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapCategoryDisplay {
    pub template_id: String,
    pub data: IapCategoryDisplayBody,
}

#[deprecated(note = "lastSeen 2024-10-14 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapCategoryDisplayBody {
    pub template_id: String,
    pub iap_category_display: IapCategoryDisplayData,
}

#[deprecated(note = "lastSeen 2026-05-01 — 41 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IapItemDisplayData {}

#[deprecated(note = "lastSeen 2026-05-01 — 41 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapItemDisplay {
    pub template_id: String,
    pub data: IapItemDisplayBody,
}

#[deprecated(note = "lastSeen 2026-05-01 — 41 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IapItemDisplayBody {
    pub template_id: String,
    pub iap_item_display: IapItemDisplayData,
}

#[deprecated(note = "lastSeen 2025-07-20 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IbfcLightweightSettingsData {}

#[deprecated(note = "lastSeen 2025-07-20 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IbfcLightweightSettings {
    pub template_id: String,
    pub data: IbfcLightweightSettingsBody,
}

#[deprecated(note = "lastSeen 2025-07-20 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IbfcLightweightSettingsBody {
    pub template_id: String,
    pub ibfc_lightweight_settings: IbfcLightweightSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IncubatorFlowSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncubatorFlowSettings {
    pub template_id: String,
    pub data: IncubatorFlowSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IncubatorFlowSettingsBody {
    pub template_id: String,
    pub incubator_flow_settings: IncubatorFlowSettingsData,
}

#[deprecated(note = "lastSeen 2024-10-07 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LanguageSettingsData {}

#[deprecated(note = "lastSeen 2024-10-07 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LanguageSettings {
    pub template_id: String,
    pub data: LanguageSettingsBody,
}

#[deprecated(note = "lastSeen 2024-10-07 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LanguageSettingsBody {
    pub template_id: String,
    pub language_settings: LanguageSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LoadingScreenSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LoadingScreenSettings {
    pub template_id: String,
    pub data: LoadingScreenSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LoadingScreenSettingsBody {
    pub template_id: String,
    pub loading_screen_settings: LoadingScreenSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LocationCardFeatureSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardFeatureSettings {
    pub template_id: String,
    pub data: LocationCardFeatureSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocationCardFeatureSettingsBody {
    pub template_id: String,
    pub location_card_feature_settings: LocationCardFeatureSettingsData,
}

#[deprecated(note = "lastSeen 2026-03-01 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MusicSettingsData {}

#[deprecated(note = "lastSeen 2026-03-01 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MusicSettings {
    pub template_id: String,
    pub data: MusicSettingsBody,
}

#[deprecated(note = "lastSeen 2026-03-01 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MusicSettingsBody {
    pub template_id: String,
    pub music_settings: MusicSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewsFeedClientSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NewsFeedClientSettings {
    pub template_id: String,
    pub data: NewsFeedClientSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NewsFeedClientSettingsBody {
    pub template_id: String,
    pub news_feed_client_settings: NewsFeedClientSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OnboardingV2SettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnboardingV2Settings {
    pub template_id: String,
    pub data: OnboardingV2SettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnboardingV2SettingsBody {
    pub template_id: String,
    pub onboarding_v2_settings: OnboardingV2SettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PlatypusRolloutSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlatypusRolloutSettings {
    pub template_id: String,
    pub data: PlatypusRolloutSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PlatypusRolloutSettingsBody {
    pub template_id: String,
    pub platypus_rollout_settings: PlatypusRolloutSettingsData,
}

#[deprecated(note = "lastSeen 2025-02-03 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PokemonCutsceneRefactorSettingsData {}

#[deprecated(note = "lastSeen 2025-02-03 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonCutsceneRefactorSettings {
    pub template_id: String,
    pub data: PokemonCutsceneRefactorSettingsBody,
}

#[deprecated(note = "lastSeen 2025-02-03 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonCutsceneRefactorSettingsBody {
    pub template_id: String,
    pub pokemon_cutscene_refactor_settings: PokemonCutsceneRefactorSettingsData,
}

#[deprecated(note = "lastSeen 2025-09-11 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PokemonInfoPanelSettingsData {}

#[deprecated(note = "lastSeen 2025-09-11 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonInfoPanelSettings {
    pub template_id: String,
    pub data: PokemonInfoPanelSettingsBody,
}

#[deprecated(note = "lastSeen 2025-09-11 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PokemonInfoPanelSettingsBody {
    pub template_id: String,
    pub pokemon_info_panel_settings: PokemonInfoPanelSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuestEvolutionSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuestEvolutionSettings {
    pub template_id: String,
    pub data: QuestEvolutionSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QuestEvolutionSettingsBody {
    pub template_id: String,
    pub quest_evolution_settings: QuestEvolutionSettingsData,
}

#[deprecated(note = "lastSeen 2026-04-07 — 5 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RollBackData {}

#[deprecated(note = "lastSeen 2026-04-07 — 5 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RollBack {
    pub template_id: String,
    pub data: RollBackBody,
}

#[deprecated(note = "lastSeen 2026-04-07 — 5 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RollBackBody {
    pub template_id: String,
    pub roll_back: RollBackData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RouteNpcGiftSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteNpcGiftSettings {
    pub template_id: String,
    pub data: RouteNpcGiftSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RouteNpcGiftSettingsBody {
    pub template_id: String,
    pub route_npc_gift_settings: RouteNpcGiftSettingsData,
}

#[deprecated(note = "lastSeen 2026-01-07 — 4 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SettingsOverrideRuleData {}

#[deprecated(note = "lastSeen 2026-01-07 — 4 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SettingsOverrideRule {
    pub template_id: String,
    pub data: SettingsOverrideRuleBody,
}

#[deprecated(note = "lastSeen 2026-01-07 — 4 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SettingsOverrideRuleBody {
    pub template_id: String,
    pub settings_override_rule: SettingsOverrideRuleData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SharedNonCombatMoveSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SharedNonCombatMoveSettings {
    pub template_id: String,
    pub data: SharedNonCombatMoveSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SharedNonCombatMoveSettingsBody {
    pub template_id: String,
    pub shared_non_combat_move_settings: SharedNonCombatMoveSettingsData,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SmeargleMovesSettingsData {}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SmeargleMovesSettings {
    pub template_id: String,
    pub data: SmeargleMovesSettingsBody,
}

#[deprecated(note = "lastSeen 2025-01-10 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SmeargleMovesSettingsBody {
    pub template_id: String,
    pub smeargle_moves_settings: SmeargleMovesSettingsData,
}

#[deprecated(note = "lastSeen 2025-08-19 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TutorialSettingsData {}

#[deprecated(note = "lastSeen 2025-08-19 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialSettings {
    pub template_id: String,
    pub data: TutorialSettingsBody,
}

#[deprecated(note = "lastSeen 2025-08-19 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TutorialSettingsBody {
    pub template_id: String,
    pub tutorial_settings: TutorialSettingsData,
}

#[deprecated(note = "lastSeen 2025-07-21 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TwoForOneFlagsData {}

#[deprecated(note = "lastSeen 2025-07-21 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TwoForOneFlags {
    pub template_id: String,
    pub data: TwoForOneFlagsBody,
}

#[deprecated(note = "lastSeen 2025-07-21 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TwoForOneFlagsBody {
    pub template_id: String,
    pub two_for_one_flags: TwoForOneFlagsData,
}

#[deprecated(note = "lastSeen 2025-08-16 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VistaGeneralSettingsData {}

#[deprecated(note = "lastSeen 2025-08-16 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VistaGeneralSettings {
    pub template_id: String,
    pub data: VistaGeneralSettingsBody,
}

#[deprecated(note = "lastSeen 2025-08-16 — 1 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VistaGeneralSettingsBody {
    pub template_id: String,
    pub vista_general_settings: VistaGeneralSettingsData,
}

#[deprecated(note = "lastSeen 2026-04-28 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VnextBattleConfigData {}

#[deprecated(note = "lastSeen 2026-04-28 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VnextBattleConfig {
    pub template_id: String,
    pub data: VnextBattleConfigBody,
}

#[deprecated(note = "lastSeen 2026-04-28 — 2 entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VnextBattleConfigBody {
    pub template_id: String,
    pub vnext_battle_config: VnextBattleConfigData,
}

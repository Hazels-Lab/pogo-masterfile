// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

package deprecated

// Deprecated: lastSeen 2025-06-06, 2 entries
type _markerData struct{}

// Deprecated: lastSeen 2025-06-06, 2 entries
type _marker struct {
	TemplateID string      `json:"templateId"`
	Data       _markerBody `json:"data"`
}

// Deprecated: lastSeen 2025-06-06, 2 entries
type _markerBody struct {
	TemplateID string      `json:"templateId"`
	_marker    _markerData `json:"_marker"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AdventureSyncV2GmtData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AdventureSyncV2Gmt struct {
	TemplateID string                 `json:"templateId"`
	Data       AdventureSyncV2GmtBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AdventureSyncV2GmtBody struct {
	TemplateID         string                 `json:"templateId"`
	AdventureSyncV2Gmt AdventureSyncV2GmtData `json:"adventureSyncV2Gmt"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AndroidBackButtonRefactorSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AndroidBackButtonRefactorSettings struct {
	TemplateID string                                `json:"templateId"`
	Data       AndroidBackButtonRefactorSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type AndroidBackButtonRefactorSettingsBody struct {
	TemplateID                        string                                `json:"templateId"`
	AndroidBackButtonRefactorSettings AndroidBackButtonRefactorSettingsData `json:"androidBackButtonRefactorSettings"`
}

// Deprecated: lastSeen 2024-11-11, 3 entries
type BadgeSettingsData struct{}

// Deprecated: lastSeen 2024-11-11, 3 entries
type BadgeSettings struct {
	TemplateID string            `json:"templateId"`
	Data       BadgeSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2024-11-11, 3 entries
type BadgeSettingsBody struct {
	TemplateID    string            `json:"templateId"`
	BadgeSettings BadgeSettingsData `json:"badgeSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BootSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BootSettings struct {
	TemplateID string           `json:"templateId"`
	Data       BootSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BootSettingsBody struct {
	TemplateID   string           `json:"templateId"`
	BootSettings BootSettingsData `json:"bootSettings"`
}

// Deprecated: lastSeen 2025-02-03, 18 entries
type BuddyActivitySettingsData struct{}

// Deprecated: lastSeen 2025-02-03, 18 entries
type BuddyActivitySettings struct {
	TemplateID string                    `json:"templateId"`
	Data       BuddyActivitySettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-02-03, 18 entries
type BuddyActivitySettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	BuddyActivitySettings BuddyActivitySettingsData `json:"buddyActivitySettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BuffSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BuffSettings struct {
	TemplateID string           `json:"templateId"`
	Data       BuffSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type BuffSettingsBody struct {
	TemplateID   string           `json:"templateId"`
	BuffSettings BuffSettingsData `json:"buffSettings"`
}

// Deprecated: lastSeen 2025-01-10, 322 entries
type CameraData struct{}

// Deprecated: lastSeen 2025-01-10, 322 entries
type Camera struct {
	TemplateID string     `json:"templateId"`
	Data       CameraBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 322 entries
type CameraBody struct {
	TemplateID string     `json:"templateId"`
	Camera     CameraData `json:"camera"`
}

// Deprecated: lastSeen 2025-10-16, 50 entries
type ClientQuestTemplateData struct{}

// Deprecated: lastSeen 2025-10-16, 50 entries
type ClientQuestTemplate struct {
	TemplateID string                  `json:"templateId"`
	Data       ClientQuestTemplateBody `json:"data"`
}

// Deprecated: lastSeen 2025-10-16, 50 entries
type ClientQuestTemplateBody struct {
	TemplateID          string                  `json:"templateId"`
	ClientQuestTemplate ClientQuestTemplateData `json:"clientQuestTemplate"`
}

// Deprecated: lastSeen 2026-01-24, 30 entries
type CodeGateProtoData struct{}

// Deprecated: lastSeen 2026-01-24, 30 entries
type CodeGateProto struct {
	TemplateID string            `json:"templateId"`
	Data       CodeGateProtoBody `json:"data"`
}

// Deprecated: lastSeen 2026-01-24, 30 entries
type CodeGateProtoBody struct {
	TemplateID    string            `json:"templateId"`
	CodeGateProto CodeGateProtoData `json:"codeGateProto"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EggTransparencySettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EggTransparencySettings struct {
	TemplateID string                      `json:"templateId"`
	Data       EggTransparencySettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EggTransparencySettingsBody struct {
	TemplateID              string                      `json:"templateId"`
	EggTransparencySettings EggTransparencySettingsData `json:"eggTransparencySettings"`
}

// Deprecated: lastSeen 2026-04-22, 23 entries
type EventPassSettingsData struct{}

// Deprecated: lastSeen 2026-04-22, 23 entries
type EventPassSettings struct {
	TemplateID string                `json:"templateId"`
	Data       EventPassSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2026-04-22, 23 entries
type EventPassSettingsBody struct {
	TemplateID        string                `json:"templateId"`
	EventPassSettings EventPassSettingsData `json:"eventPassSettings"`
}

// Deprecated: lastSeen 2026-04-22, 11890 entries
type EventPassTierSettingsData struct{}

// Deprecated: lastSeen 2026-04-22, 11890 entries
type EventPassTierSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       EventPassTierSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2026-04-22, 11890 entries
type EventPassTierSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	EventPassTierSettings EventPassTierSettingsData `json:"eventPassTierSettings"`
}

// Deprecated: lastSeen 2025-10-16, 3 entries
type EvolutionChainDisplaySettingsData struct{}

// Deprecated: lastSeen 2025-10-16, 3 entries
type EvolutionChainDisplaySettings struct {
	TemplateID string                            `json:"templateId"`
	Data       EvolutionChainDisplaySettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-10-16, 3 entries
type EvolutionChainDisplaySettingsBody struct {
	TemplateID                    string                            `json:"templateId"`
	EvolutionChainDisplaySettings EvolutionChainDisplaySettingsData `json:"evolutionChainDisplaySettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EvolvePreviewSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EvolvePreviewSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       EvolvePreviewSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type EvolvePreviewSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	EvolvePreviewSettings EvolvePreviewSettingsData `json:"evolvePreviewSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type ExtendedPrimalSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type ExtendedPrimalSettings struct {
	TemplateID string                     `json:"templateId"`
	Data       ExtendedPrimalSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type ExtendedPrimalSettingsBody struct {
	TemplateID             string                     `json:"templateId"`
	ExtendedPrimalSettings ExtendedPrimalSettingsData `json:"extendedPrimalSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type FormsRefactorSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type FormsRefactorSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       FormsRefactorSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type FormsRefactorSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	FormsRefactorSettings FormsRefactorSettingsData `json:"formsRefactorSettings"`
}

// Deprecated: lastSeen 2025-01-10, 2 entries
type FriendProfileSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 2 entries
type FriendProfileSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       FriendProfileSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 2 entries
type FriendProfileSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	FriendProfileSettings FriendProfileSettingsData `json:"friendProfileSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type GymLevelData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type GymLevel struct {
	TemplateID string       `json:"templateId"`
	Data       GymLevelBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type GymLevelBody struct {
	TemplateID string       `json:"templateId"`
	GymLevel   GymLevelData `json:"gymLevel"`
}

// Deprecated: lastSeen 2024-10-14, 1 entries
type IapCategoryDisplayData struct{}

// Deprecated: lastSeen 2024-10-14, 1 entries
type IapCategoryDisplay struct {
	TemplateID string                 `json:"templateId"`
	Data       IapCategoryDisplayBody `json:"data"`
}

// Deprecated: lastSeen 2024-10-14, 1 entries
type IapCategoryDisplayBody struct {
	TemplateID         string                 `json:"templateId"`
	IapCategoryDisplay IapCategoryDisplayData `json:"iapCategoryDisplay"`
}

// Deprecated: lastSeen 2026-05-01, 41 entries
type IapItemDisplayData struct{}

// Deprecated: lastSeen 2026-05-01, 41 entries
type IapItemDisplay struct {
	TemplateID string             `json:"templateId"`
	Data       IapItemDisplayBody `json:"data"`
}

// Deprecated: lastSeen 2026-05-01, 41 entries
type IapItemDisplayBody struct {
	TemplateID     string             `json:"templateId"`
	IapItemDisplay IapItemDisplayData `json:"iapItemDisplay"`
}

// Deprecated: lastSeen 2025-07-20, 1 entries
type IbfcLightweightSettingsData struct{}

// Deprecated: lastSeen 2025-07-20, 1 entries
type IbfcLightweightSettings struct {
	TemplateID string                      `json:"templateId"`
	Data       IbfcLightweightSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-07-20, 1 entries
type IbfcLightweightSettingsBody struct {
	TemplateID              string                      `json:"templateId"`
	IbfcLightweightSettings IbfcLightweightSettingsData `json:"ibfcLightweightSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type IncubatorFlowSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type IncubatorFlowSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       IncubatorFlowSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type IncubatorFlowSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	IncubatorFlowSettings IncubatorFlowSettingsData `json:"incubatorFlowSettings"`
}

// Deprecated: lastSeen 2024-10-07, 1 entries
type LanguageSettingsData struct{}

// Deprecated: lastSeen 2024-10-07, 1 entries
type LanguageSettings struct {
	TemplateID string               `json:"templateId"`
	Data       LanguageSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2024-10-07, 1 entries
type LanguageSettingsBody struct {
	TemplateID       string               `json:"templateId"`
	LanguageSettings LanguageSettingsData `json:"languageSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LoadingScreenSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LoadingScreenSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       LoadingScreenSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LoadingScreenSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	LoadingScreenSettings LoadingScreenSettingsData `json:"loadingScreenSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LocationCardFeatureSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LocationCardFeatureSettings struct {
	TemplateID string                          `json:"templateId"`
	Data       LocationCardFeatureSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type LocationCardFeatureSettingsBody struct {
	TemplateID                  string                          `json:"templateId"`
	LocationCardFeatureSettings LocationCardFeatureSettingsData `json:"locationCardFeatureSettings"`
}

// Deprecated: lastSeen 2026-03-01, 1 entries
type MusicSettingsData struct{}

// Deprecated: lastSeen 2026-03-01, 1 entries
type MusicSettings struct {
	TemplateID string            `json:"templateId"`
	Data       MusicSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2026-03-01, 1 entries
type MusicSettingsBody struct {
	TemplateID    string            `json:"templateId"`
	MusicSettings MusicSettingsData `json:"musicSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type NewsFeedClientSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type NewsFeedClientSettings struct {
	TemplateID string                     `json:"templateId"`
	Data       NewsFeedClientSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type NewsFeedClientSettingsBody struct {
	TemplateID             string                     `json:"templateId"`
	NewsFeedClientSettings NewsFeedClientSettingsData `json:"newsFeedClientSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type OnboardingV2SettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type OnboardingV2Settings struct {
	TemplateID string                   `json:"templateId"`
	Data       OnboardingV2SettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type OnboardingV2SettingsBody struct {
	TemplateID           string                   `json:"templateId"`
	OnboardingV2Settings OnboardingV2SettingsData `json:"onboardingV2Settings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type PlatypusRolloutSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type PlatypusRolloutSettings struct {
	TemplateID string                      `json:"templateId"`
	Data       PlatypusRolloutSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type PlatypusRolloutSettingsBody struct {
	TemplateID              string                      `json:"templateId"`
	PlatypusRolloutSettings PlatypusRolloutSettingsData `json:"platypusRolloutSettings"`
}

// Deprecated: lastSeen 2025-02-03, 1 entries
type PokemonCutsceneRefactorSettingsData struct{}

// Deprecated: lastSeen 2025-02-03, 1 entries
type PokemonCutsceneRefactorSettings struct {
	TemplateID string                              `json:"templateId"`
	Data       PokemonCutsceneRefactorSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-02-03, 1 entries
type PokemonCutsceneRefactorSettingsBody struct {
	TemplateID                      string                              `json:"templateId"`
	PokemonCutsceneRefactorSettings PokemonCutsceneRefactorSettingsData `json:"pokemonCutsceneRefactorSettings"`
}

// Deprecated: lastSeen 2025-09-11, 1 entries
type PokemonInfoPanelSettingsData struct{}

// Deprecated: lastSeen 2025-09-11, 1 entries
type PokemonInfoPanelSettings struct {
	TemplateID string                       `json:"templateId"`
	Data       PokemonInfoPanelSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-09-11, 1 entries
type PokemonInfoPanelSettingsBody struct {
	TemplateID               string                       `json:"templateId"`
	PokemonInfoPanelSettings PokemonInfoPanelSettingsData `json:"pokemonInfoPanelSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type QuestEvolutionSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type QuestEvolutionSettings struct {
	TemplateID string                     `json:"templateId"`
	Data       QuestEvolutionSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type QuestEvolutionSettingsBody struct {
	TemplateID             string                     `json:"templateId"`
	QuestEvolutionSettings QuestEvolutionSettingsData `json:"questEvolutionSettings"`
}

// Deprecated: lastSeen 2026-04-07, 5 entries
type RollBackData struct{}

// Deprecated: lastSeen 2026-04-07, 5 entries
type RollBack struct {
	TemplateID string       `json:"templateId"`
	Data       RollBackBody `json:"data"`
}

// Deprecated: lastSeen 2026-04-07, 5 entries
type RollBackBody struct {
	TemplateID string       `json:"templateId"`
	RollBack   RollBackData `json:"rollBack"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type RouteNpcGiftSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type RouteNpcGiftSettings struct {
	TemplateID string                   `json:"templateId"`
	Data       RouteNpcGiftSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type RouteNpcGiftSettingsBody struct {
	TemplateID           string                   `json:"templateId"`
	RouteNpcGiftSettings RouteNpcGiftSettingsData `json:"routeNpcGiftSettings"`
}

// Deprecated: lastSeen 2026-01-07, 4 entries
type SettingsOverrideRuleData struct{}

// Deprecated: lastSeen 2026-01-07, 4 entries
type SettingsOverrideRule struct {
	TemplateID string                   `json:"templateId"`
	Data       SettingsOverrideRuleBody `json:"data"`
}

// Deprecated: lastSeen 2026-01-07, 4 entries
type SettingsOverrideRuleBody struct {
	TemplateID           string                   `json:"templateId"`
	SettingsOverrideRule SettingsOverrideRuleData `json:"settingsOverrideRule"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SharedNonCombatMoveSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SharedNonCombatMoveSettings struct {
	TemplateID string                          `json:"templateId"`
	Data       SharedNonCombatMoveSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SharedNonCombatMoveSettingsBody struct {
	TemplateID                  string                          `json:"templateId"`
	SharedNonCombatMoveSettings SharedNonCombatMoveSettingsData `json:"sharedNonCombatMoveSettings"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SmeargleMovesSettingsData struct{}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SmeargleMovesSettings struct {
	TemplateID string                    `json:"templateId"`
	Data       SmeargleMovesSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-01-10, 1 entries
type SmeargleMovesSettingsBody struct {
	TemplateID            string                    `json:"templateId"`
	SmeargleMovesSettings SmeargleMovesSettingsData `json:"smeargleMovesSettings"`
}

// Deprecated: lastSeen 2025-08-19, 1 entries
type TutorialSettingsData struct{}

// Deprecated: lastSeen 2025-08-19, 1 entries
type TutorialSettings struct {
	TemplateID string               `json:"templateId"`
	Data       TutorialSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-08-19, 1 entries
type TutorialSettingsBody struct {
	TemplateID       string               `json:"templateId"`
	TutorialSettings TutorialSettingsData `json:"tutorialSettings"`
}

// Deprecated: lastSeen 2025-07-21, 1 entries
type TwoForOneFlagsData struct{}

// Deprecated: lastSeen 2025-07-21, 1 entries
type TwoForOneFlags struct {
	TemplateID string             `json:"templateId"`
	Data       TwoForOneFlagsBody `json:"data"`
}

// Deprecated: lastSeen 2025-07-21, 1 entries
type TwoForOneFlagsBody struct {
	TemplateID     string             `json:"templateId"`
	TwoForOneFlags TwoForOneFlagsData `json:"twoForOneFlags"`
}

// Deprecated: lastSeen 2025-08-16, 1 entries
type VistaGeneralSettingsData struct{}

// Deprecated: lastSeen 2025-08-16, 1 entries
type VistaGeneralSettings struct {
	TemplateID string                   `json:"templateId"`
	Data       VistaGeneralSettingsBody `json:"data"`
}

// Deprecated: lastSeen 2025-08-16, 1 entries
type VistaGeneralSettingsBody struct {
	TemplateID           string                   `json:"templateId"`
	VistaGeneralSettings VistaGeneralSettingsData `json:"vistaGeneralSettings"`
}

// Deprecated: lastSeen 2026-04-28, 2 entries
type VnextBattleConfigData struct{}

// Deprecated: lastSeen 2026-04-28, 2 entries
type VnextBattleConfig struct {
	TemplateID string                `json:"templateId"`
	Data       VnextBattleConfigBody `json:"data"`
}

// Deprecated: lastSeen 2026-04-28, 2 entries
type VnextBattleConfigBody struct {
	TemplateID        string                `json:"templateId"`
	VnextBattleConfig VnextBattleConfigData `json:"vnextBattleConfig"`
}

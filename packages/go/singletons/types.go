// Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).

package singletons

type AccessibilitySettings struct {
	Enabled       bool `json:"enabled"`
	PluginEnabled bool `json:"pluginEnabled"`
}

type AdditiveSceneSettings struct {
	Enabled bool `json:"enabled"`
}

type AddressablePokemonSettings struct {
	AddressablePokemonIds [9]string `json:"addressablePokemonIds"`
}

type AddressBookImportSettings struct {
	IsEnabled               bool   `json:"isEnabled"`
	OnboardingScreenLevel   uint64 `json:"onboardingScreenLevel"`
	RepromptOnboardingForV1 bool   `json:"repromptOnboardingForV1"`
	ShowOptOutCheckbox      bool   `json:"showOptOutCheckbox"`
}

type AdvancedSettings struct {
	DownloadAllAssetsEnabled bool `json:"downloadAllAssetsEnabled"`
}

type ArPhotoFeatureFlagsCaptureSettings struct {
	ContextualCheckIntervalSeconds float64 `json:"contextualCheckIntervalSeconds"`
	CountdownSeconds               uint64  `json:"countdownSeconds"`
}

type ArPhotoFeatureFlagsErrorReportingSettings struct {
	IsEnabled                    bool    `json:"isEnabled"`
	MaxEventsPerSlidingWindow    uint64  `json:"maxEventsPerSlidingWindow"`
	MaxTotalEventsBeforeShutdown string  `json:"maxTotalEventsBeforeShutdown"`
	PercentChancePlayerSends     float64 `json:"percentChancePlayerSends"`
	SlidingWindowLengthS         uint64  `json:"slidingWindowLengthS"`
}

type ArPhotoFeatureFlagsIncentives struct {
	IncentiveIconName  string `json:"incentiveIconName"`
	IncentiveStringKey string `json:"incentiveStringKey"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedForms struct {
	ExcludedForms [1]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV2 struct {
	ExcludedForms [19]string `json:"excludedForms"`
	PokemonId     string     `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV3 struct {
	ExcludedForms [18]string `json:"excludedForms"`
	PokemonId     string     `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV4 struct {
	ExcludedForms [2]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV5 struct {
	ExcludedForms [5]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV6 struct {
	ExcludedForms [4]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV7 struct {
	ExcludedForms [9]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlagsPokemonWithExcludedFormsV8 struct {
	ExcludedForms [3]string `json:"excludedForms"`
	PokemonId     string    `json:"pokemonId"`
}

type ArPhotoFeatureFlags struct {
	ArMenuEntryEnabled        int64                                     `json:"arMenuEntryEnabled"`
	CaptureSettings           ArPhotoFeatureFlagsCaptureSettings        `json:"captureSettings"`
	DownloadMessageEnabled    bool                                      `json:"downloadMessageEnabled"`
	ErrorReportingSettings    ArPhotoFeatureFlagsErrorReportingSettings `json:"errorReportingSettings"`
	ExcludedPokemonIds        []string                                  `json:"excludedPokemonIds"`
	Incentives                [2]ArPhotoFeatureFlagsIncentives          `json:"incentives"`
	IncentivesEnabled         bool                                      `json:"incentivesEnabled"`
	IsFeatureEnabled          bool                                      `json:"isFeatureEnabled"`
	LapsedDaysCutoff          uint64                                    `json:"lapsedDaysCutoff"`
	MainMenuEntryEnabled      int64                                     `json:"mainMenuEntryEnabled"`
	NewDaysCutoff             uint64                                    `json:"newDaysCutoff"`
	PokemonWithExcludedForms  []any                                     `json:"pokemonWithExcludedForms"`
	PreLoginDeviceAllowList   [6]string                                 `json:"preLoginDeviceAllowList"`
	PreLoginMetricsEnabled    int64                                     `json:"preLoginMetricsEnabled"`
	PreLoginRollOutRatio      float64                                   `json:"preLoginRollOutRatio"`
	ReorderSummary            bool                                      `json:"reorderSummary"`
	ShareFunctionalityEnabled uint64                                    `json:"shareFunctionalityEnabled"`
	ShareMessageEnabled       bool                                      `json:"shareMessageEnabled"`
	ShowSticker               string                                    `json:"showSticker"`
	SignInButtonEnabled       bool                                      `json:"signInButtonEnabled"`
}

type ArTelemetrySettings struct {
	BatterySamplingIntervalMs   uint64  `json:"batterySamplingIntervalMs"`
	EnableArdkTelemetry         bool    `json:"enableArdkTelemetry"`
	FramerateSamplingIntervalMs uint64  `json:"framerateSamplingIntervalMs"`
	MeasureBattery              bool    `json:"measureBattery"`
	MeasureFramerate            bool    `json:"measureFramerate"`
	PercentageSessionsToSample  float64 `json:"percentageSessionsToSample"`
}

type AssetRefreshProto struct {
	StringRefreshSeconds uint64 `json:"stringRefreshSeconds"`
}

type AvatarFeatureFlags struct {
	CorndogEnabled bool `json:"corndogEnabled"`
}

type AvatarStoreFooterFlags struct {
	Enabled bool `json:"enabled"`
}

type AvatarStoreSubcategoryFilteringFlags struct {
	Enabled bool `json:"enabled"`
}

type BackgroundModeSettings struct {
	WeeklyFitnessGoalLevel1distanceKm float64 `json:"weeklyFitnessGoalLevel1DistanceKm"`
	WeeklyFitnessGoalLevel2distanceKm float64 `json:"weeklyFitnessGoalLevel2DistanceKm"`
	WeeklyFitnessGoalLevel3distanceKm float64 `json:"weeklyFitnessGoalLevel3DistanceKm"`
	WeeklyFitnessGoalLevel4distanceKm float64 `json:"weeklyFitnessGoalLevel4DistanceKm"`
	WeeklyFitnessGoalReminderKm       float64 `json:"weeklyFitnessGoalReminderKm"`
}

type BattleAnimationSettingsFastAttackSettings struct{}

type BattleAnimationSettingsUiCameraAnimationSettings struct {
	TransitionInDurationSeconds   float64 `json:"transitionInDurationSeconds"`
	TransitionInterimDelaySeconds float64 `json:"transitionInterimDelaySeconds"`
	TransitionOutDurationSeconds  float64 `json:"transitionOutDurationSeconds"`
}

type BattleAnimationSettingsCombatAnimationConfiguration struct {
	FastAttackSettings                      BattleAnimationSettingsFastAttackSettings        `json:"fastAttackSettings"`
	ProjectedHealthAnimationDurationSeconds float64                                          `json:"projectedHealthAnimationDurationSeconds"`
	UiCameraAnimationSettings               BattleAnimationSettingsUiCameraAnimationSettings `json:"uiCameraAnimationSettings"`
}

type BattleAnimationSettingsFastAttackSettingsV2 struct {
	CrossFadeDurationSeconds float64 `json:"crossFadeDurationSeconds"`
	NormalizedStartOffset    float64 `json:"normalizedStartOffset"`
}

type BattleAnimationSettingsMaxBattleAnimationConfiguration struct {
	FastAttackSettings BattleAnimationSettingsFastAttackSettingsV2 `json:"fastAttackSettings"`
}

type BattleAnimationSettings struct {
	CombatAnimationConfiguration    BattleAnimationSettingsCombatAnimationConfiguration    `json:"combatAnimationConfiguration"`
	MaxBattleAnimationConfiguration BattleAnimationSettingsMaxBattleAnimationConfiguration `json:"maxBattleAnimationConfiguration"`
	RaidsAnimationConfiguration     BattleAnimationSettingsMaxBattleAnimationConfiguration `json:"raidsAnimationConfiguration"`
}

type BattleHubBadgeSettings struct {
	CombatHubDisplayedBadges [5]string `json:"combatHubDisplayedBadges"`
}

type BattleHubOrderSettingsSection struct {
	MainSection string    `json:"mainSection"`
	Subsection  [3]string `json:"subsection"`
}

type BattleHubOrderSettingsSectionGroup struct {
	Section [3]string `json:"section"`
}

type BattleHubOrderSettingsSectionGroupV2 struct {
	Section [1]string `json:"section"`
}

type BattleHubOrderSettings struct {
	Section      [1]BattleHubOrderSettingsSection `json:"section"`
	SectionGroup []any                            `json:"sectionGroup"`
}

type BattleInputBufferSettingsInputBlockExceptionList struct {
	AllowedBufferedActions [1]string `json:"allowedBufferedActions"`
	CurrentAction          string    `json:"currentAction"`
}

type BattleInputBufferSettingsBreadInputBufferPriorityList struct {
	BufferBlockingEventTypeList [2]string                                           `json:"bufferBlockingEventTypeList"`
	EventPriority               [2]string                                           `json:"eventPriority"`
	InputBlockExceptionList     [1]BattleInputBufferSettingsInputBlockExceptionList `json:"inputBlockExceptionList"`
	PriorityEventTypeList       [3]string                                           `json:"priorityEventTypeList"`
}

type BattleInputBufferSettingsCombatInputBufferPriorityList struct {
	BufferBlockingEventTypeList [2]string `json:"bufferBlockingEventTypeList"`
	EventPriority               [1]string `json:"eventPriority"`
	PriorityEventTypeList       [2]string `json:"priorityEventTypeList"`
}

type BattleInputBufferSettingsInputBlockExceptionListV2 struct {
	AllowedBufferedActions [2]string `json:"allowedBufferedActions"`
	CurrentAction          string    `json:"currentAction"`
}

type BattleInputBufferSettingsRaidsInputBufferPriorityList struct {
	BufferBlockingEventTypeList [1]string                                             `json:"bufferBlockingEventTypeList"`
	EventPriority               [4]string                                             `json:"eventPriority"`
	InputBlockExceptionList     [1]BattleInputBufferSettingsInputBlockExceptionListV2 `json:"inputBlockExceptionList"`
	PriorityEventTypeList       [5]string                                             `json:"priorityEventTypeList"`
}

type BattleInputBufferSettings struct {
	BreadInputBufferPriorityList  BattleInputBufferSettingsBreadInputBufferPriorityList  `json:"breadInputBufferPriorityList"`
	CombatInputBufferPriorityList BattleInputBufferSettingsCombatInputBufferPriorityList `json:"combatInputBufferPriorityList"`
	RaidsInputBufferPriorityList  BattleInputBufferSettingsRaidsInputBufferPriorityList  `json:"raidsInputBufferPriorityList"`
}

type BattlePartySettings struct {
	EnableBattlePartySaving bool   `json:"enableBattlePartySaving"`
	MaxBattleParties        uint64 `json:"maxBattleParties"`
	OverallPartiesCap       uint64 `json:"overallPartiesCap"`
}

type BattleSettings struct {
	AttackServerInterval                    float64 `json:"attackServerInterval"`
	BonusTimePerAllySeconds                 float64 `json:"bonusTimePerAllySeconds"`
	BossEnergyRegenerationPerHealthLost     float64 `json:"bossEnergyRegenerationPerHealthLost"`
	DodgeDamageReductionPercent             float64 `json:"dodgeDamageReductionPercent"`
	DodgeDurationMs                         uint64  `json:"dodgeDurationMs"`
	EnemyAttackInterval                     float64 `json:"enemyAttackInterval"`
	EnergyDeltaPerHealthLost                float64 `json:"energyDeltaPerHealthLost"`
	MaximumAttackersPerBattle               uint64  `json:"maximumAttackersPerBattle"`
	MaximumEnergy                           uint64  `json:"maximumEnergy"`
	MinimumPlayerLevel                      uint64  `json:"minimumPlayerLevel"`
	MinimumRaidPlayerLevel                  uint64  `json:"minimumRaidPlayerLevel"`
	PurifiedPokemonAttackMultiplierVsShadow float64 `json:"purifiedPokemonAttackMultiplierVsShadow"`
	RetargetSeconds                         float64 `json:"retargetSeconds"`
	RoundDurationSeconds                    float64 `json:"roundDurationSeconds"`
	SameTypeAttackBonusMultiplier           float64 `json:"sameTypeAttackBonusMultiplier"`
	ShadowPokemonAttackBonusMultiplier      float64 `json:"shadowPokemonAttackBonusMultiplier"`
	ShadowPokemonDefenseBonusMultiplier     float64 `json:"shadowPokemonDefenseBonusMultiplier"`
	SwapDurationMs                          uint64  `json:"swapDurationMs"`
}

type BattleVisualSettings struct {
	BannerTextureAsset  string `json:"bannerTextureAsset"`
	CrowdTextureAsset   string `json:"crowdTextureAsset"`
	EnhancementsEnabled bool   `json:"enhancementsEnabled"`
}

type BelugaPokemonWhitelist struct {
	AdditionalPokemonAllowed       [2]string `json:"additionalPokemonAllowed"`
	CostumesAllowed                [1]string `json:"costumesAllowed"`
	MaxAllowedPokemonPokedexNumber uint64    `json:"maxAllowedPokemonPokedexNumber"`
}

type BestFriendsPlusSettings struct {
	Enabled            bool   `json:"enabled"`
	TutorialTimeCutoff string `json:"tutorialTimeCutoff"`
}

type BreadBattleClientSettings struct {
	BreadBattleMinPlayerLevel                     uint64 `json:"breadBattleMinPlayerLevel"`
	CanInviteFriendsInPerson                      bool   `json:"canInviteFriendsInPerson"`
	CanInviteFriendsRemotely                      bool   `json:"canInviteFriendsRemotely"`
	FetchProfileFromSocialEnabled                 bool   `json:"fetchProfileFromSocialEnabled"`
	FriendInviteCutoffTimeSec                     uint64 `json:"friendInviteCutoffTimeSec"`
	InviteCooldownDurationMillis                  string `json:"inviteCooldownDurationMillis"`
	MaxNumFriendInvites                           uint64 `json:"maxNumFriendInvites"`
	MaxNumFriendInvitesPerAction                  uint64 `json:"maxNumFriendInvitesPerAction"`
	MaxNumFriendInvitesToBreadDoughLobbyPerAction uint64 `json:"maxNumFriendInvitesToBreadDoughLobbyPerAction"`
	MaxPlayersPerBreadDoughLobby                  uint64 `json:"maxPlayersPerBreadDoughLobby"`
	MaxPlayersPerBreadLobby                       uint64 `json:"maxPlayersPerBreadLobby"`
	MaxPlayersToPrepareBreadDoughLobby            uint64 `json:"maxPlayersToPrepareBreadDoughLobby"`
	MaxRemoteBreadBattlePassesAllowed             uint64 `json:"maxRemoteBreadBattlePassesAllowed"`
	MaxRemotePlayersPerBreadDoughLobby            uint64 `json:"maxRemotePlayersPerBreadDoughLobby"`
	MaxRemotePlayersPerBreadLobby                 uint64 `json:"maxRemotePlayersPerBreadLobby"`
	MinPlayersToPrepareBreadLobby                 uint64 `json:"minPlayersToPrepareBreadLobby"`
	PrepareBreadLobbyCutoffMs                     uint64 `json:"prepareBreadLobbyCutoffMs"`
	PrepareBreadLobbyEnabled                      bool   `json:"prepareBreadLobbyEnabled"`
	PrepareBreadLobbySoloMs                       uint64 `json:"prepareBreadLobbySoloMs"`
	RemoteBreadBattleEnabled                      bool   `json:"remoteBreadBattleEnabled"`
	RemoteBreadBattleMinPlayerLevel               uint64 `json:"remoteBreadBattleMinPlayerLevel"`
	RvnVersion                                    uint64 `json:"rvnVersion"`
}

type BreadFeatureFlags struct {
	BattleEnabled                  bool   `json:"battleEnabled"`
	BattleSpawnMode                string `json:"battleSpawnMode"`
	BoostItemEnabled               bool   `json:"boostItemEnabled"`
	BreadPostBattleRecoveryEnabled bool   `json:"breadPostBattleRecoveryEnabled"`
	CanUseMasterBallPostBattle     bool   `json:"canUseMasterBallPostBattle"`
	DebugRpcEnabled                bool   `json:"debugRpcEnabled"`
	DiscoveryEnabled               bool   `json:"discoveryEnabled"`
	Enabled                        bool   `json:"enabled"`
	MinimumPlayerLevel             uint64 `json:"minimumPlayerLevel"`
	MpEnabled                      bool   `json:"mpEnabled"`
	NearbyLobbyCounterEnabled      bool   `json:"nearbyLobbyCounterEnabled"`
	PowerSpotEditsEnabled          bool   `json:"powerSpotEditsEnabled"`
	StationDiscoveryMode           string `json:"stationDiscoveryMode"`
}

type BreadLobbyCounterSettings struct {
	BreadDoughLobbyMaxCountToUpdate uint64  `json:"breadDoughLobbyMaxCountToUpdate"`
	PublishCutoffTimeMs             string  `json:"publishCutoffTimeMs"`
	ShowCounterRadiusMeters         float64 `json:"showCounterRadiusMeters"`
	SubscribeS2level                uint64  `json:"subscribeS2Level"`
	SubscriptionNamespace           string  `json:"subscriptionNamespace"`
}

type BreadLobbyUpdateSettings struct {
	JoinPublishCutoffTimeMs          string `json:"joinPublishCutoffTimeMs"`
	ServerPublishRateLimitIntervalMs string `json:"serverPublishRateLimitIntervalMs"`
}

type BreadMoveMappingsMappings struct {
	Move string `json:"move"`
	Type string `json:"type"`
}

type BreadMoveMappings struct {
	Mappings [18]BreadMoveMappingsMappings `json:"mappings"`
}

type BreadPokemonScalingSettingsBreadBattleTrainerVisualData struct {
	XOffset float64 `json:"xOffset"`
}

type BreadPokemonScalingSettingsBreadBattleVisualData struct {
	Scale float64 `json:"scale"`
}

type BreadPokemonScalingSettingsBreadEncounterVisualData struct {
	CameraDistance float64 `json:"cameraDistance"`
	MaxReticleSize float64 `json:"maxReticleSize"`
	Scale          float64 `json:"scale"`
}

type BreadPokemonScalingSettingsVisualData struct {
	BreadBattleTrainerVisualData BreadPokemonScalingSettingsBreadBattleTrainerVisualData `json:"breadBattleTrainerVisualData"`
	BreadBattleVisualData        BreadPokemonScalingSettingsBreadBattleVisualData        `json:"breadBattleVisualData"`
	BreadEncounterVisualData     BreadPokemonScalingSettingsBreadEncounterVisualData     `json:"breadEncounterVisualData"`
	BreadMode                    string                                                  `json:"breadMode"`
	BreadStationVisualData       BreadPokemonScalingSettingsBreadBattleVisualData        `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormData struct {
	PokemonForm string                                   `json:"pokemonForm"`
	VisualData  [1]BreadPokemonScalingSettingsVisualData `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettings struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormData `json:"pokemonFormData"`
	PokemonId       string                                        `json:"pokemonId"`
}

type BreadPokemonScalingSettingsBreadBattleTrainerVisualDataV2 struct {
	XOffset float64 `json:"xOffset"`
	YOffset float64 `json:"yOffset"`
}

type BreadPokemonScalingSettingsVisualDataV2 struct {
	BreadBattleTrainerVisualData BreadPokemonScalingSettingsBreadBattleTrainerVisualDataV2 `json:"breadBattleTrainerVisualData"`
	BreadBattleVisualData        BreadPokemonScalingSettingsBreadBattleVisualData          `json:"breadBattleVisualData"`
	BreadEncounterVisualData     BreadPokemonScalingSettingsBreadEncounterVisualData       `json:"breadEncounterVisualData"`
	BreadMode                    string                                                    `json:"breadMode"`
	BreadStationVisualData       BreadPokemonScalingSettingsBreadBattleVisualData          `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsBreadBattleVisualDataV2 struct {
	Scale   float64 `json:"scale"`
	YOffset float64 `json:"yOffset"`
}

type BreadPokemonScalingSettingsVisualDataV3 struct {
	BreadBattleTrainerVisualData BreadPokemonScalingSettingsBreadBattleTrainerVisualDataV2 `json:"breadBattleTrainerVisualData"`
	BreadBattleVisualData        BreadPokemonScalingSettingsBreadBattleVisualDataV2        `json:"breadBattleVisualData"`
	BreadEncounterVisualData     BreadPokemonScalingSettingsBreadEncounterVisualData       `json:"breadEncounterVisualData"`
	BreadMode                    string                                                    `json:"breadMode"`
	BreadStationVisualData       BreadPokemonScalingSettingsBreadBattleVisualData          `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormDataV2 struct {
	PokemonForm string `json:"pokemonForm"`
	VisualData  []any  `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV2 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV2 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsVisualDataV4 struct {
	BreadBattleVisualData    BreadPokemonScalingSettingsBreadBattleVisualData    `json:"breadBattleVisualData"`
	BreadEncounterVisualData BreadPokemonScalingSettingsBreadEncounterVisualData `json:"breadEncounterVisualData"`
	BreadMode                string                                              `json:"breadMode"`
	BreadStationVisualData   BreadPokemonScalingSettingsBreadBattleVisualData    `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsBreadBattleVisualDataV3 struct {
	Scale   float64 `json:"scale"`
	XOffset float64 `json:"xOffset"`
}

type BreadPokemonScalingSettingsVisualDataV5 struct {
	BreadBattleTrainerVisualData BreadPokemonScalingSettingsBreadBattleTrainerVisualData `json:"breadBattleTrainerVisualData"`
	BreadBattleVisualData        BreadPokemonScalingSettingsBreadBattleVisualDataV3      `json:"breadBattleVisualData"`
	BreadEncounterVisualData     BreadPokemonScalingSettingsBreadEncounterVisualData     `json:"breadEncounterVisualData"`
	BreadMode                    string                                                  `json:"breadMode"`
	BreadStationVisualData       BreadPokemonScalingSettingsBreadBattleVisualDataV3      `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormDataV3 struct {
	PokemonForm string                                     `json:"pokemonForm"`
	VisualData  [1]BreadPokemonScalingSettingsVisualDataV4 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV3 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV3 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsPokemonFormDataV4 struct {
	VisualData [1]BreadPokemonScalingSettingsVisualDataV4 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV4 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV4 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsPokemonFormDataV5 struct {
	VisualData [1]BreadPokemonScalingSettingsVisualData `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV5 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV5 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsVisualDataV6 struct {
	BreadBattleVisualData    BreadPokemonScalingSettingsBreadBattleVisualDataV2  `json:"breadBattleVisualData"`
	BreadEncounterVisualData BreadPokemonScalingSettingsBreadEncounterVisualData `json:"breadEncounterVisualData"`
	BreadMode                string                                              `json:"breadMode"`
	BreadStationVisualData   BreadPokemonScalingSettingsBreadBattleVisualData    `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormDataV6 struct {
	VisualData [1]BreadPokemonScalingSettingsVisualDataV6 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV6 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV6 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsVisualDataV7 struct {
	BreadBattleTrainerVisualData BreadPokemonScalingSettingsBreadBattleTrainerVisualData `json:"breadBattleTrainerVisualData"`
	BreadBattleVisualData        BreadPokemonScalingSettingsBreadBattleVisualDataV2      `json:"breadBattleVisualData"`
	BreadEncounterVisualData     BreadPokemonScalingSettingsBreadEncounterVisualData     `json:"breadEncounterVisualData"`
	BreadMode                    string                                                  `json:"breadMode"`
	BreadStationVisualData       BreadPokemonScalingSettingsBreadBattleVisualData        `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormDataV7 struct {
	PokemonForm string                                     `json:"pokemonForm"`
	VisualData  [1]BreadPokemonScalingSettingsVisualDataV7 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV7 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV7 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsBreadEncounterVisualDataV2 struct {
	CameraDistance float64 `json:"cameraDistance"`
	Scale          float64 `json:"scale"`
}

type BreadPokemonScalingSettingsVisualDataV8 struct {
	BreadBattleVisualData    BreadPokemonScalingSettingsBreadBattleVisualData      `json:"breadBattleVisualData"`
	BreadEncounterVisualData BreadPokemonScalingSettingsBreadEncounterVisualDataV2 `json:"breadEncounterVisualData"`
	BreadMode                string                                                `json:"breadMode"`
	BreadStationVisualData   BreadPokemonScalingSettingsBreadBattleVisualData      `json:"breadStationVisualData"`
}

type BreadPokemonScalingSettingsPokemonFormDataV8 struct {
	VisualData [1]BreadPokemonScalingSettingsVisualDataV8 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV8 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV8 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettingsBreadBattleBossVisualData struct {
	Scale   float64 `json:"scale"`
	XOffset float64 `json:"xOffset"`
	YOffset float64 `json:"yOffset"`
}

type BreadPokemonScalingSettingsVisualDataV9 struct {
	BreadBattleBossVisualData BreadPokemonScalingSettingsBreadBattleBossVisualData `json:"breadBattleBossVisualData"`
	BreadMode                 string                                               `json:"breadMode"`
}

type BreadPokemonScalingSettingsPokemonFormDataV9 struct {
	PokemonForm string                                     `json:"pokemonForm"`
	VisualData  [1]BreadPokemonScalingSettingsVisualDataV9 `json:"visualData"`
}

type BreadPokemonScalingSettingsVisualSettingsV9 struct {
	PokemonFormData [1]BreadPokemonScalingSettingsPokemonFormDataV9 `json:"pokemonFormData"`
	PokemonId       string                                          `json:"pokemonId"`
}

type BreadPokemonScalingSettings struct {
	VisualSettings []any `json:"visualSettings"`
}

type BreadSettingsAllowedSourdoughPokemon struct {
	BreadMode string    `json:"breadMode"`
	Form      [1]string `json:"form"`
	PokemonId string    `json:"pokemonId"`
}

type BreadSettingsAllowedSourdoughPokemonV2 struct {
	BreadMode string    `json:"breadMode"`
	Form      [2]string `json:"form"`
	PokemonId string    `json:"pokemonId"`
}

type BreadSettingsBreadBattleAvailability struct {
	BreadBattleAvailabilityEndMinute   uint64 `json:"breadBattleAvailabilityEndMinute"`
	BreadBattleAvailabilityStartMinute uint64 `json:"breadBattleAvailabilityStartMinute"`
}

type BreadSettings struct {
	AllowedSourdoughPokemon             []any                                `json:"allowedSourdoughPokemon"`
	BreadBattleAvailability             BreadSettingsBreadBattleAvailability `json:"breadBattleAvailability"`
	MaxRangeForNearbyStateMeters        uint64                               `json:"maxRangeForNearbyStateMeters"`
	MaxStationedPokemon                 uint64                               `json:"maxStationedPokemon"`
	MaxStationedPokemonDisplayCount     uint64                               `json:"maxStationedPokemonDisplayCount"`
	MaxStationedPokemonPerPlayer        uint64                               `json:"maxStationedPokemonPerPlayer"`
	MinMsToReceiveReleaseStationRewards string                               `json:"minMsToReceiveReleaseStationRewards"`
	NumStationedPokemonToReturn         uint64                               `json:"numStationedPokemonToReturn"`
	ShowTimerWhenFar                    bool                                 `json:"showTimerWhenFar"`
	StartOfDayOffsetDurationMs          string                               `json:"startOfDayOffsetDurationMs"`
	TutorialMaxBoostItemDurationS       float64                              `json:"tutorialMaxBoostItemDurationS"`
}

type BuddyEncounterCameoSettings struct {
	BuddyInvasionEncounterCameoChancePercent float64 `json:"buddyInvasionEncounterCameoChancePercent"`
	BuddyQuestEncounterCameoChancePercent    float64 `json:"buddyQuestEncounterCameoChancePercent"`
	BuddyRaidEncounterCameoChancePercent     float64 `json:"buddyRaidEncounterCameoChancePercent"`
	BuddyWildEncounterCameoChancePercent     float64 `json:"buddyWildEncounterCameoChancePercent"`
}

type BuddyHungerSettings struct {
	CooldownDurationMs             string `json:"cooldownDurationMs"`
	DecayDurationAfterFullMs       string `json:"decayDurationAfterFullMs"`
	DecayPointsPerBucket           uint64 `json:"decayPointsPerBucket"`
	MillisecondsPerBucket          string `json:"millisecondsPerBucket"`
	NumHungerPointsRequiredForFull uint64 `json:"numHungerPointsRequiredForFull"`
}

type BuddyInteractionSettings struct {
	FeedItemWhitelist [6]string `json:"feedItemWhitelist"`
}

type BuddySwapSettings struct {
	EnableQuickSwap         bool   `json:"enableQuickSwap"`
	EnableSwapFreeEvolution bool   `json:"enableSwapFreeEvolution"`
	MaxSwapsPerDay          uint64 `json:"maxSwapsPerDay"`
}

type BuddyWalkSettings struct {
	KmRequiredPerAffectionPoint float64 `json:"kmRequiredPerAffectionPoint"`
}

type BulkHealingSettings struct {
	Enabled            bool   `json:"enabled"`
	MaxPokemonsPerHeal uint64 `json:"maxPokemonsPerHeal"`
}

type ButterflyCollectorSettings struct {
	DailyProgressFromInventory uint64     `json:"dailyProgressFromInventory"`
	Enabled                    bool       `json:"enabled"`
	Region                     [18]string `json:"region"`
	Version                    uint64     `json:"version"`
}

type CampfireSettings struct {
	ArCatchCardEnabled              bool   `json:"arCatchCardEnabled"`
	ArCatchCardShareCampfireEnabled bool   `json:"arCatchCardShareCampfireEnabled"`
	CampfireEnabled                 bool   `json:"campfireEnabled"`
	CatchCardAvailableSeconds       uint64 `json:"catchCardAvailableSeconds"`
	CatchCardEnabled                bool   `json:"catchCardEnabled"`
	CatchCardShareCampfireEnabled   bool   `json:"catchCardShareCampfireEnabled"`
	MapButtonsEnabled               bool   `json:"mapButtonsEnabled"`
	MeetupQueryTimerMs              string `json:"meetupQueryTimerMs"`
	PasswordlessLoginEnabled        bool   `json:"passwordlessLoginEnabled"`
}

type CatchRadiusMultiplierSettings struct {
	CatchRadiusMultiplierSettingsEnabled bool `json:"catchRadiusMultiplierSettingsEnabled"`
}

type CombatCompetitiveSeasonSettings struct {
	RankingAdjustmentPercentage float64    `json:"rankingAdjustmentPercentage"`
	RatingAdjustmentPercentage  float64    `json:"ratingAdjustmentPercentage"`
	SeasonEndTimeTimestamp      [31]string `json:"seasonEndTimeTimestamp"`
}

type CombatLeagueSettings struct {
	CombatLeagueTemplateId [4]string `json:"combatLeagueTemplateId"`
}

type CombatSettingsClockSyncSettings struct {
	Enabled          bool   `json:"enabled"`
	SyncAttemptCount uint64 `json:"syncAttemptCount"`
}

type CombatSettingsCombatFeatureFlags struct {
	RealDeviceTimeEnabled bool `json:"realDeviceTimeEnabled"`
}

type CombatSettings struct {
	BlockedFlyoutDurationTurns              uint64                           `json:"blockedFlyoutDurationTurns"`
	ChangePokemonDurationSeconds            float64                          `json:"changePokemonDurationSeconds"`
	ChargeAttackBonusMultiplier             float64                          `json:"chargeAttackBonusMultiplier"`
	ChargeScoreBase                         float64                          `json:"chargeScoreBase"`
	ChargeScoreExcellent                    float64                          `json:"chargeScoreExcellent"`
	ChargeScoreGreat                        float64                          `json:"chargeScoreGreat"`
	ChargeScoreNice                         float64                          `json:"chargeScoreNice"`
	ClockSyncSettings                       CombatSettingsClockSyncSettings  `json:"clockSyncSettings"`
	CombatExperiment                        []any                            `json:"combatExperiment"`
	CombatFeatureFlags                      CombatSettingsCombatFeatureFlags `json:"combatFeatureFlags"`
	DefenderMinigameMultiplier              float64                          `json:"defenderMinigameMultiplier"`
	DefenseBonusMultiplier                  float64                          `json:"defenseBonusMultiplier"`
	FastAttackBonusMultiplier               float64                          `json:"fastAttackBonusMultiplier"`
	FlyinDurationTurns                      uint64                           `json:"flyinDurationTurns"`
	MaxEnergy                               uint64                           `json:"maxEnergy"`
	MinigameBonusBaseMultiplier             float64                          `json:"minigameBonusBaseMultiplier"`
	MinigameBonusVariableMultiplier         float64                          `json:"minigameBonusVariableMultiplier"`
	MinigameDurationSeconds                 float64                          `json:"minigameDurationSeconds"`
	MinigameSubmitScoreDurationSeconds      float64                          `json:"minigameSubmitScoreDurationSeconds"`
	NormalEffectiveFlyoutDurationTurns      uint64                           `json:"normalEffectiveFlyoutDurationTurns"`
	NotVeryEffectiveFlyoutDurationTurns     uint64                           `json:"notVeryEffectiveFlyoutDurationTurns"`
	ObCombatSettingsNotPushedBool2          bool                             `json:"obCombatSettingsNotPushedBool2"`
	PurifiedPokemonAttackMultiplierVsShadow float64                          `json:"purifiedPokemonAttackMultiplierVsShadow"`
	QuickSwapCooldownDurationSeconds        float64                          `json:"quickSwapCooldownDurationSeconds"`
	RoundDurationSeconds                    float64                          `json:"roundDurationSeconds"`
	SameTypeAttackBonusMultiplier           float64                          `json:"sameTypeAttackBonusMultiplier"`
	ShadowPokemonAttackBonusMultiplier      float64                          `json:"shadowPokemonAttackBonusMultiplier"`
	ShadowPokemonDefenseBonusMultiplier     float64                          `json:"shadowPokemonDefenseBonusMultiplier"`
	ShowQuickSwapButtonsDuringCountdown     bool                             `json:"showQuickSwapButtonsDuringCountdown"`
	SuperEffectiveFlyoutDurationTurns       uint64                           `json:"superEffectiveFlyoutDurationTurns"`
	TurnDurationSeconds                     float64                          `json:"turnDurationSeconds"`
}

type CombatStatStageSettings struct {
	AttackBuffMultiplier  [9]float64 `json:"attackBuffMultiplier"`
	DefenseBuffMultiplier [9]float64 `json:"defenseBuffMultiplier"`
	MaximumStatStage      uint64     `json:"maximumStatStage"`
	MinimumStatStage      int64      `json:"minimumStatStage"`
}

type ContestSettingsContestLengthThresholds struct {
	Length        string `json:"length"`
	MaxDurationMs string `json:"maxDurationMs"`
	MinDurationMs string `json:"minDurationMs"`
}

type ContestSettingsContestMetric struct {
	PokemonMetric   string `json:"pokemonMetric"`
	RankingStandard string `json:"rankingStandard"`
}

type ContestSettingsContestLimits struct {
	ContestMetric        ContestSettingsContestMetric `json:"contestMetric"`
	ContestOccurrence    string                       `json:"contestOccurrence"`
	PerContestMaxEntries uint64                       `json:"perContestMaxEntries"`
}

type ContestSettingsPokemonSize struct {
	HeightCoefficient   float64 `json:"heightCoefficient"`
	IvCoefficient       float64 `json:"ivCoefficient"`
	WeightCoefficient   float64 `json:"weightCoefficient"`
	XxlAdjustmentFactor float64 `json:"xxlAdjustmentFactor"`
}

type ContestSettingsContestScoreCoefficient struct {
	PokemonSize ContestSettingsPokemonSize `json:"pokemonSize"`
}

type ContestSettingsContestWarmupAndCooldownDurationsMs struct {
	ContestOccurrence       string `json:"contestOccurrence"`
	CycleCooldownDurationMs string `json:"cycleCooldownDurationMs"`
	CycleWarmupDurationMs   string `json:"cycleWarmupDurationMs"`
}

type ContestSettings struct {
	CatchPromptTimeoutMs                float64                                               `json:"catchPromptTimeoutMs"`
	ContestLengthThresholds             [3]ContestSettingsContestLengthThresholds             `json:"contestLengthThresholds"`
	ContestLimits                       [1]ContestSettingsContestLimits                       `json:"contestLimits"`
	ContestScoreCoefficient             [1]ContestSettingsContestScoreCoefficient             `json:"contestScoreCoefficient"`
	ContestWarmupAndCooldownDurationsMs [2]ContestSettingsContestWarmupAndCooldownDurationsMs `json:"contestWarmupAndCooldownDurationsMs"`
	DefaultContestMaxEntries            uint64                                                `json:"defaultContestMaxEntries"`
	DefaultCycleCooldownDurationMs      string                                                `json:"defaultCycleCooldownDurationMs"`
	DefaultCycleWarmupDurationMs        string                                                `json:"defaultCycleWarmupDurationMs"`
	IsAnticheatRemovalEnabled           bool                                                  `json:"isAnticheatRemovalEnabled"`
	IsContestInNearbyMenu               bool                                                  `json:"isContestInNearbyMenu"`
	IsFeatureEnabled                    bool                                                  `json:"isFeatureEnabled"`
	IsFriendsDisplayEnabled             bool                                                  `json:"isFriendsDisplayEnabled"`
	IsV2featureEnabled                  bool                                                  `json:"isV2FeatureEnabled"`
	IsV2focusesEnabled                  bool                                                  `json:"isV2FocusesEnabled"`
	MaxCatchPromptRange                 float64                                               `json:"maxCatchPromptRange"`
	MinCooldownBeforeSeasonEndMs        string                                                `json:"minCooldownBeforeSeasonEndMs"`
	PlayerContestMaxEntries             uint64                                                `json:"playerContestMaxEntries"`
}

type ConversationSettingsPokemonFormAppraisalOverrides struct {
	AddToStart   bool   `json:"addToStart"`
	AppraisalKey string `json:"appraisalKey"`
	Form         string `json:"form"`
	Id           string `json:"id"`
}

type ConversationSettings struct {
	PokemonFormAppraisalOverrides [8]ConversationSettingsPokemonFormAppraisalOverrides `json:"pokemonFormAppraisalOverrides"`
}

type CrossGameSocialSettings struct {
	NianticProfileEnabledOverrideLevel bool `json:"nianticProfileEnabledOverrideLevel"`
	OnlineStatusEnabledOverrideLevel   bool `json:"onlineStatusEnabledOverrideLevel"`
}

type DailyAdventureIncenseSettingsLootItem struct {
	Count uint64 `json:"count"`
	Item  string `json:"item"`
}

type DailyAdventureIncenseSettingsPokeballGrant struct {
	LootItem [1]DailyAdventureIncenseSettingsLootItem `json:"lootItem"`
}

type DailyAdventureIncenseSettings struct {
	Enabled                   bool                                       `json:"enabled"`
	EnablePushNotification    bool                                       `json:"enablePushNotification"`
	LocalDeliveryTime         string                                     `json:"localDeliveryTime"`
	PokeballGrant             DailyAdventureIncenseSettingsPokeballGrant `json:"pokeballGrant"`
	PokeballGrantThreshold    uint64                                     `json:"pokeballGrantThreshold"`
	PushNotificationHourOfDay uint64                                     `json:"pushNotificationHourOfDay"`
}

type DeepLinkingSettings struct {
	ActionsThatExecuteBeforeMapLoads  []any  `json:"actionsThatExecuteBeforeMapLoads"`
	ActionsThatIgnoreMinLevel         []any  `json:"actionsThatIgnoreMinLevel"`
	IosActionButtonEnabled            bool   `json:"iosActionButtonEnabled"`
	MinPlayerLevelForExternalLink     uint64 `json:"minPlayerLevelForExternalLink"`
	MinPlayerLevelForNotificationLink uint64 `json:"minPlayerLevelForNotificationLink"`
}

type EggHatchImprovementsSettings struct {
	BootDelayMs         uint64 `json:"bootDelayMs"`
	FeatureEnabled      bool   `json:"featureEnabled"`
	RaidInviteHardCapMs uint64 `json:"raidInviteHardCapMs"`
}

type EncounterSettings struct {
	ArCloseProximityThreshold   float64 `json:"arCloseProximityThreshold"`
	ArLowAwarenessThreshold     float64 `json:"arLowAwarenessThreshold"`
	ArPlusModeEnabled           bool    `json:"arPlusModeEnabled"`
	EnableItemSelectionSliderV2 bool    `json:"enableItemSelectionSliderV2"`
	ExcellentThrowThreshold     float64 `json:"excellentThrowThreshold"`
	GreatThrowThreshold         float64 `json:"greatThrowThreshold"`
	MilestoneThreshold          uint64  `json:"milestoneThreshold"`
	NiceThrowThreshold          float64 `json:"niceThrowThreshold"`
	SpinBonusThreshold          float64 `json:"spinBonusThreshold"`
}

type ErrorReportingSettings struct {
	EventSampleRate              float64 `json:"eventSampleRate"`
	IsEnabled                    bool    `json:"isEnabled"`
	MaxEventsPerSlidingWindow    uint64  `json:"maxEventsPerSlidingWindow"`
	MaxTotalEventsBeforeShutdown string  `json:"maxTotalEventsBeforeShutdown"`
	PercentChancePlayerSends     float64 `json:"percentChancePlayerSends"`
	SlidingWindowLengthS         uint64  `json:"slidingWindowLengthS"`
}

type EventPlannerPopularNotificationSettings struct {
	BattleLevels                [9]uint64 `json:"battleLevels"`
	FirstScanOffsetSeconds      string    `json:"firstScanOffsetSeconds"`
	MaxNotifPerDay              uint64    `json:"maxNotifPerDay"`
	NearbyPoiThreshold          uint64    `json:"nearbyPoiThreshold"`
	NotifDelayIntervalsSeconds  string    `json:"notifDelayIntervalsSeconds"`
	RuralThreshold              uint64    `json:"ruralThreshold"`
	ScanIntervalSeconds         string    `json:"scanIntervalSeconds"`
	TimeslotBufferWindowSeconds string    `json:"timeslotBufferWindowSeconds"`
	UrbanThreshold              uint64    `json:"urbanThreshold"`
}

type ExternalAddressableAssetsSettings struct{}

type FeatureUnlockLevelSettings struct {
	LuresUnlockLevel               uint64 `json:"luresUnlockLevel"`
	RareCandyConversionUnlockLevel uint64 `json:"rareCandyConversionUnlockLevel"`
}

type GeotargetedQuestSettings struct {
	EnableGeotargetedQuests bool `json:"enableGeotargetedQuests"`
}

type GiftingSettingsStardustMultiplier struct {
	Multiplier   float64 `json:"multiplier"`
	RandomWeight float64 `json:"randomWeight"`
}

type GiftingSettings struct {
	EnableGiftToStardust      bool                                 `json:"enableGiftToStardust"`
	FlowPolishEnabled         bool                                 `json:"flowPolishEnabled"`
	MultiMajorRewardUiEnabled bool                                 `json:"multiMajorRewardUiEnabled"`
	StardustMultiplier        [3]GiftingSettingsStardustMultiplier `json:"stardustMultiplier"`
	StardustPerGift           uint64                               `json:"stardustPerGift"`
}

type GuiSearchSettings struct {
	CompleteStartLetterCountPerLanguage [15]string `json:"completeStartLetterCountPerLanguage"`
	GuiSearchEnabled                    bool       `json:"guiSearchEnabled"`
	MaxNumberFavoriteSearches           uint64     `json:"maxNumberFavoriteSearches"`
	MaxNumberRecentSearches             uint64     `json:"maxNumberRecentSearches"`
	MaxQueryLength                      uint64     `json:"maxQueryLength"`
	SearchHelpUrl                       string     `json:"searchHelpUrl"`
}

type GymBadgeSettings struct {
	BattleWinningScorePerDefenderCp float64   `json:"battleWinningScorePerDefenderCp"`
	BerryFeedingScore               uint64    `json:"berryFeedingScore"`
	GymDefendingScorePerMinute      float64   `json:"gymDefendingScorePerMinute"`
	LoseAllBattlesScore             uint64    `json:"loseAllBattlesScore"`
	PokemonDeployScore              uint64    `json:"pokemonDeployScore"`
	RaidBattleWinningScore          uint64    `json:"raidBattleWinningScore"`
	Target                          [3]uint64 `json:"target"`
}

type HapticsSettings struct {
	AdvancedHapticsEnabled bool `json:"advancedHapticsEnabled"`
}

type IapSettings struct {
	DailyDefenderBonusCurrency       [2]string `json:"dailyDefenderBonusCurrency"`
	DailyDefenderBonusMaxDefenders   uint64    `json:"dailyDefenderBonusMaxDefenders"`
	DailyDefenderBonusPerPokemon     [2]uint64 `json:"dailyDefenderBonusPerPokemon"`
	MinTimeBetweenClaimsMs           string    `json:"minTimeBetweenClaimsMs"`
	ProhibitPurchaseInTestEnvirnment bool      `json:"prohibitPurchaseInTestEnvirnment"`
}

type IbfcLightweightSettings struct {
	DefaultDefenseMultiplier    float64 `json:"defaultDefenseMultiplier"`
	DefaultDefenseOverride      float64 `json:"defaultDefenseOverride"`
	DefaultEnergyChargeOverride float64 `json:"defaultEnergyChargeOverride"`
	DefaultStaminaOverride      float64 `json:"defaultStaminaOverride"`
}

type ImpressionTrackingSettings struct {
	ApproachGymTrackingEnabled                bool `json:"approachGymTrackingEnabled"`
	ApproachRaidTrackingEnabled               bool `json:"approachRaidTrackingEnabled"`
	FullScreenAdViewTrackingEnabled           bool `json:"fullScreenAdViewTrackingEnabled"`
	ImpressionTrackingEnabled                 bool `json:"impressionTrackingEnabled"`
	PokestopSpinnerInteractionTrackingEnabled bool `json:"pokestopSpinnerInteractionTrackingEnabled"`
}

type InAppSurveySettings struct {
	SurveyPollFrequencyS uint64 `json:"surveyPollFrequencyS"`
}

type IncidentPrioritySettingsIncidentPriority struct {
	DisplayType string `json:"displayType"`
	Priority    uint64 `json:"priority"`
}

type IncidentPrioritySettings struct {
	IncidentPriority [7]IncidentPrioritySettingsIncidentPriority `json:"incidentPriority"`
}

type IncidentVisibilitySettings struct {
	HideIncidentForCharacter [11]string `json:"hideIncidentForCharacter"`
}

type InventorySettingsBagUpgradeTimerStages struct {
	DismissStageSecs float64 `json:"dismissStageSecs"`
}

type InventorySettings struct {
	BagUpgradeBannerContexts                   [5]string                                 `json:"bagUpgradeBannerContexts"`
	BagUpgradeBannerEnabled                    bool                                      `json:"bagUpgradeBannerEnabled"`
	BagUpgradeTimerStages                      [4]InventorySettingsBagUpgradeTimerStages `json:"bagUpgradeTimerStages"`
	BaseBagItems                               uint64                                    `json:"baseBagItems"`
	BaseDailyAdventureEggs                     uint64                                    `json:"baseDailyAdventureEggs"`
	BaseEggs                                   uint64                                    `json:"baseEggs"`
	BasePokemon                                uint64                                    `json:"basePokemon"`
	BasePostcards                              uint64                                    `json:"basePostcards"`
	CanRaidPassOverflowBagSpace                bool                                      `json:"canRaidPassOverflowBagSpace"`
	EasyIncubatorBuyEnabled                    bool                                      `json:"easyIncubatorBuyEnabled"`
	EnableEggsNotInventory                     bool                                      `json:"enableEggsNotInventory"`
	LuckyFriendApplicatorSettingsToggleEnabled bool                                      `json:"luckyFriendApplicatorSettingsToggleEnabled"`
	MaxBagItems                                uint64                                    `json:"maxBagItems"`
	MaxItemBoostDurationMs                     string                                    `json:"maxItemBoostDurationMs"`
	MaxPokemon                                 uint64                                    `json:"maxPokemon"`
	MaxPostcards                               uint64                                    `json:"maxPostcards"`
	MaxStoneAcount                             uint64                                    `json:"maxStoneACount"`
	MaxTeamChanges                             uint64                                    `json:"maxTeamChanges"`
	SpecialEggOverflowSpots                    uint64                                    `json:"specialEggOverflowSpots"`
	TeamChangeItemResetPeriodInDays            string                                    `json:"teamChangeItemResetPeriodInDays"`
}

type IrisSocialSettings struct {
	AddPokemonModalDelayMs                 float64    `json:"addPokemonModalDelayMs"`
	BannedPokedexIds                       [21]string `json:"bannedPokedexIds"`
	CombinedShadowsEnabled                 bool       `json:"combinedShadowsEnabled"`
	EnableSqcGuidance                      bool       `json:"enableSqcGuidance"`
	ExpressionUpdateBroadcastMethod        string     `json:"expressionUpdateBroadcastMethod"`
	FtueVersion                            string     `json:"ftueVersion"`
	GameplayReportsActive                  bool       `json:"gameplayReportsActive"`
	GroundFocusGuardrailEnabled            bool       `json:"groundFocusGuardrailEnabled"`
	GroundFocusGuardrailEnterAngle         float64    `json:"groundFocusGuardrailEnterAngle"`
	GroundFocusGuardrailExitAngle          float64    `json:"groundFocusGuardrailExitAngle"`
	GuidanceInCarThreshold                 float64    `json:"guidanceInCarThreshold"`
	GuidancePathNearbyFinishDelayMs        float64    `json:"guidancePathNearbyFinishDelayMs"`
	GuidancePathNearbyFinishDistanceMeters float64    `json:"guidancePathNearbyFinishDistanceMeters"`
	IrisSocialPoiDeactivationCooldownMs    string     `json:"irisSocialPoiDeactivationCooldownMs"`
	LimitedLocalizationTimeoutDurationMs   string     `json:"limitedLocalizationTimeoutDurationMs"`
	LimitedPokedexIds                      []string   `json:"limitedPokedexIds"`
	LocalizationGuidancePathEnabled        bool       `json:"localizationGuidancePathEnabled"`
	LocalizationTimeoutDurationMs          string     `json:"localizationTimeoutDurationMs"`
	LocationManagerJpegCompressionQuality  uint64     `json:"locationManagerJpegCompressionQuality"`
	MaxBoundaryAreaSqMeters                float64    `json:"maxBoundaryAreaSqMeters"`
	MaxDistanceAllowLocalizationMeters     string     `json:"maxDistanceAllowLocalizationMeters"`
	MaxNumPokemonPerPlayer                 uint64     `json:"maxNumPokemonPerPlayer"`
	MaxNumPokemonPerScene                  uint64     `json:"maxNumPokemonPerScene"`
	MaxTimeBgModeBeforeExpulsionMs         string     `json:"maxTimeBgModeBeforeExpulsionMs"`
	MaxTimeNoActivityPlayerInactiveMs      string     `json:"maxTimeNoActivityPlayerInactiveMs"`
	MinBoundaryAreaSqMeters                float64    `json:"minBoundaryAreaSqMeters"`
	MinVpsScore                            float64    `json:"minVpsScore"`
	PokeballPingTimeDelayMs                float64    `json:"pokeballPingTimeDelayMs"`
	PokemonExpireAfterMs                   string     `json:"pokemonExpireAfterMs"`
	PokemonSpawnStaggerDurationMs          string     `json:"pokemonSpawnStaggerDurationMs"`
	PushGatewayEnabled                     bool       `json:"pushGatewayEnabled"`
	SunriseThresholdOffsetMs               string     `json:"sunriseThresholdOffsetMs"`
	SunsetThresholdOffsetMs                string     `json:"sunsetThresholdOffsetMs"`
	SunThresholdCheckEnabled               bool       `json:"sunThresholdCheckEnabled"`
	UseBoundaryVerticesFromDataFlow        bool       `json:"useBoundaryVerticesFromDataFlow"`
	UseVpsEnabledStatus                    bool       `json:"useVpsEnabledStatus"`
}

type IrisSocialUxFunnelSettingsEventStep struct {
	Event      string `json:"event"`
	StepNumber uint64 `json:"stepNumber"`
}

type IrisSocialUxFunnelSettingsEventStepV2 struct {
	Event      uint64 `json:"event"`
	StepNumber uint64 `json:"stepNumber"`
}

type IrisSocialUxFunnelSettings struct {
	EventStep       []any  `json:"eventStep"`
	UxFunnelVersion uint64 `json:"uxFunnelVersion"`
}

type ItemCurrencyValuesItemCoinValues struct {
	CoinValue float64 `json:"coinValue"`
	Item      string  `json:"item"`
}

type ItemCurrencyValues struct {
	ItemCoinValues [23]ItemCurrencyValuesItemCoinValues `json:"itemCoinValues"`
}

type ItemInventoryUpdateSettingsCategoryProto struct {
	Category     [1]string `json:"category"`
	CategoryName string    `json:"categoryName"`
}

type ItemInventoryUpdateSettingsCategoryProtoV2 struct {
	Category     [1]string `json:"category"`
	CategoryName string    `json:"categoryName"`
	SortOrder    uint64    `json:"sortOrder"`
}

type ItemInventoryUpdateSettingsCategoryProtoV3 struct {
	Category     [3]string `json:"category"`
	CategoryName string    `json:"categoryName"`
	SortOrder    uint64    `json:"sortOrder"`
}

type ItemInventoryUpdateSettingsCategoryProtoV4 struct {
	Category     [4]string `json:"category"`
	CategoryName string    `json:"categoryName"`
	SortOrder    uint64    `json:"sortOrder"`
}

type ItemInventoryUpdateSettingsCategoryProtoV5 struct {
	Category     [7]string `json:"category"`
	CategoryName string    `json:"categoryName"`
	SortOrder    uint64    `json:"sortOrder"`
}

type ItemInventoryUpdateSettings struct {
	CategoryProto []any `json:"categoryProto"`
}

type JoinRaidViaFriendListSettings struct {
	Enabled                                  bool   `json:"enabled"`
	FriendActivitiesBackgroundUpdatePeriodMs string `json:"friendActivitiesBackgroundUpdatePeriodMs"`
	MaxBattleEnabled                         bool   `json:"maxBattleEnabled"`
	MaxBattleMinFriendshipScore              uint64 `json:"maxBattleMinFriendshipScore"`
	MaxBattleMinPlayerLevel                  uint64 `json:"maxBattleMinPlayerLevel"`
	MinFriendshipScore                       uint64 `json:"minFriendshipScore"`
	MinPlayerLevel                           uint64 `json:"minPlayerLevel"`
}

type LanguageSelectorSettings struct {
	LanguageSelectorEnabled bool `json:"languageSelectorEnabled"`
}

type LuckyPokemonSettings struct {
	PowerUpStardustDiscountPercent float64 `json:"powerUpStardustDiscountPercent"`
}

type MainMenuChanges struct {
	Enabled bool `json:"enabled"`
}

type MapDisplaySettings struct {
	ShowEnhancedSky bool `json:"showEnhancedSky"`
}

type MapObjectsInteractionRangeSettings struct {
	FarInteractionRangeMeters    float64 `json:"farInteractionRangeMeters"`
	InteractionRangeMeters       float64 `json:"interactionRangeMeters"`
	RemoteInteractionRangeMeters float64 `json:"remoteInteractionRangeMeters"`
	WhitePulseRadiusMeters       float64 `json:"whitePulseRadiusMeters"`
}

type MegaEvoSettings struct {
	ActiveMegaBonusCatchCandy         uint64  `json:"activeMegaBonusCatchCandy"`
	AttackBoostFromMegaDifferentType  float64 `json:"attackBoostFromMegaDifferentType"`
	AttackBoostFromMegaSameType       float64 `json:"attackBoostFromMegaSameType"`
	ClientMegaCooldownBufferMs        uint64  `json:"clientMegaCooldownBufferMs"`
	EnableBuddyWalkingMegaEnergyAward bool    `json:"enableBuddyWalkingMegaEnergyAward"`
	EnableMegaEvolveInLobby           bool    `json:"enableMegaEvolveInLobby"`
	EnableMegaLevel                   bool    `json:"enableMegaLevel"`
	EnableMegaLevelLegacyAward        bool    `json:"enableMegaLevelLegacyAward"`
	EvolutionLengthMs                 string  `json:"evolutionLengthMs"`
	MaxCandyHoardSize                 uint64  `json:"maxCandyHoardSize"`
	NumMegaLevels                     uint64  `json:"numMegaLevels"`
}

type MonodepthSettings struct {
	EnableGroundSuppression    bool    `json:"enableGroundSuppression"`
	EnableOcclusions           bool    `json:"enableOcclusions"`
	MinGroundSuppressionThresh float64 `json:"minGroundSuppressionThresh"`
	OcclusionsToggleVisible    bool    `json:"occlusionsToggleVisible"`
	SuppressionChannelId       uint64  `json:"suppressionChannelId"`
}

type MpSettingsBattleMpCostPerTier struct {
	BattleLevel                  string `json:"battleLevel"`
	BreadBattleCatchMpCost       uint64 `json:"breadBattleCatchMpCost"`
	BreadBattleRemoteCatchMpCost uint64 `json:"breadBattleRemoteCatchMpCost"`
}

type MpSettingsBattleMpCostPerTierV2 struct {
	BattleLevel                  uint64 `json:"battleLevel"`
	BreadBattleCatchMpCost       uint64 `json:"breadBattleCatchMpCost"`
	BreadBattleRemoteCatchMpCost uint64 `json:"breadBattleRemoteCatchMpCost"`
}

type MpSettings struct {
	BattleMpCostPerTier            []any   `json:"battleMpCostPerTier"`
	DebugAllowRemoveWalkQuest      bool    `json:"debugAllowRemoveWalkQuest"`
	FtueMpCapacity                 uint64  `json:"ftueMpCapacity"`
	MpBaseDailyLimit               uint64  `json:"mpBaseDailyLimit"`
	MpCapacity                     uint64  `json:"mpCapacity"`
	MpClaimParticleSpeedMultiplier float64 `json:"mpClaimParticleSpeedMultiplier"`
	NumExtraMpFromFirstLootStation uint64  `json:"numExtraMpFromFirstLootStation"`
	NumMetersGoal                  uint64  `json:"numMetersGoal"`
	NumMpFromLootStation           uint64  `json:"numMpFromLootStation"`
	NumMpFromWalkQuest             uint64  `json:"numMpFromWalkQuest"`
}

type NaturalArtDayNightFeatureSettings struct {
	DayEndTime           string  `json:"dayEndTime"`
	DayStartTime         string  `json:"dayStartTime"`
	DbsSpawnRadiusMeters float64 `json:"dbsSpawnRadiusMeters"`
	NightEndTime         string  `json:"nightEndTime"`
}

type NearbyPokemonSettings struct {
	ObEnabled                    bool `json:"obEnabled"`
	ObNearbyPokemonSettingsBool1 bool `json:"obNearbyPokemonSettingsBool1"`
}

type NeutralAvatarSettingsBustSlider struct {
	MaxBounds float64 `json:"maxBounds"`
}

type NeutralAvatarSettingsSizeSlider struct {
	MaxBounds float64 `json:"maxBounds"`
	MinBounds float64 `json:"minBounds"`
}

type NeutralAvatarSettingsBodySliderSettings struct {
	BustSlider     NeutralAvatarSettingsBustSlider `json:"bustSlider"`
	HipsSlider     NeutralAvatarSettingsBustSlider `json:"hipsSlider"`
	MuscleSlider   NeutralAvatarSettingsBustSlider `json:"muscleSlider"`
	ShoulderSlider NeutralAvatarSettingsBustSlider `json:"shoulderSlider"`
	SizeSlider     NeutralAvatarSettingsSizeSlider `json:"sizeSlider"`
}

type NeutralAvatarSettingsBackpack struct {
	ArticleId string `json:"articleId"`
}

type NeutralAvatarSettingsArticles struct {
	Backpack   NeutralAvatarSettingsBackpack `json:"backpack"`
	BodyPreset NeutralAvatarSettingsBackpack `json:"bodyPreset"`
	Eyebrow    NeutralAvatarSettingsBackpack `json:"eyebrow"`
	Eyelash    NeutralAvatarSettingsBackpack `json:"eyelash"`
	FacePreset NeutralAvatarSettingsBackpack `json:"facePreset"`
	Gloves     NeutralAvatarSettingsBackpack `json:"gloves"`
	Hair       NeutralAvatarSettingsBackpack `json:"hair"`
	Pants      NeutralAvatarSettingsBackpack `json:"pants"`
	Pose       NeutralAvatarSettingsBackpack `json:"pose"`
	Shirt      NeutralAvatarSettingsBackpack `json:"shirt"`
	Shoes      NeutralAvatarSettingsBackpack `json:"shoes"`
	Socks      NeutralAvatarSettingsBackpack `json:"socks"`
}

type NeutralAvatarSettingsBodyBlend struct {
	Hips        float64 `json:"hips"`
	Musculature float64 `json:"musculature"`
	Shoulders   float64 `json:"shoulders"`
	Size        float64 `json:"size"`
}

type NeutralAvatarSettingsEarSelection struct {
	Selection string `json:"selection"`
}

type NeutralAvatarSettingsColorKeys struct {
	KeyPosition float64 `json:"keyPosition"`
}

type NeutralAvatarSettingsColorKeysV2 struct {
	Blue        float64 `json:"blue"`
	Green       float64 `json:"green"`
	KeyPosition float64 `json:"keyPosition"`
	Red         float64 `json:"red"`
}

type NeutralAvatarSettingsEyeGradient struct {
	ColorKeys []any `json:"colorKeys"`
}

type NeutralAvatarSettingsFacePositions struct {
	BrowDepth       float64 `json:"browDepth"`
	BrowVertical    float64 `json:"browVertical"`
	EyeDepth        float64 `json:"eyeDepth"`
	EyeHorizontal   float64 `json:"eyeHorizontal"`
	EyeVertical     float64 `json:"eyeVertical"`
	MouthDepth      float64 `json:"mouthDepth"`
	MouthHorizontal float64 `json:"mouthHorizontal"`
	MouthVertical   float64 `json:"mouthVertical"`
	NoseDepth       float64 `json:"noseDepth"`
	NoseVertical    float64 `json:"noseVertical"`
}

type NeutralAvatarSettingsColorKeysV3 struct {
	Blue  float64 `json:"blue"`
	Green float64 `json:"green"`
	Red   float64 `json:"red"`
}

type NeutralAvatarSettingsSkinGradient struct {
	ColorKeys [5]NeutralAvatarSettingsColorKeysV2 `json:"colorKeys"`
}

type NeutralAvatarSettingsDefaultNeutralAvatar struct {
	Articles       NeutralAvatarSettingsArticles      `json:"articles"`
	BodyBlend      NeutralAvatarSettingsBodyBlend     `json:"bodyBlend"`
	EarSelection   NeutralAvatarSettingsEarSelection  `json:"earSelection"`
	EyeGradient    NeutralAvatarSettingsEyeGradient   `json:"eyeGradient"`
	EyeSelection   NeutralAvatarSettingsEarSelection  `json:"eyeSelection"`
	FacePositions  NeutralAvatarSettingsFacePositions `json:"facePositions"`
	HairGradient   NeutralAvatarSettingsEyeGradient   `json:"hairGradient"`
	HeadSelection  NeutralAvatarSettingsEarSelection  `json:"headSelection"`
	MouthSelection NeutralAvatarSettingsEarSelection  `json:"mouthSelection"`
	NoseSelection  NeutralAvatarSettingsEarSelection  `json:"noseSelection"`
	SkinGradient   NeutralAvatarSettingsSkinGradient  `json:"skinGradient"`
}

type NeutralAvatarSettingsArticlesV2 struct {
	Backpack   NeutralAvatarSettingsBackpack `json:"backpack"`
	Belt       NeutralAvatarSettingsBackpack `json:"belt"`
	BodyPreset NeutralAvatarSettingsBackpack `json:"bodyPreset"`
	Eyebrow    NeutralAvatarSettingsBackpack `json:"eyebrow"`
	Eyelash    NeutralAvatarSettingsBackpack `json:"eyelash"`
	FacePreset NeutralAvatarSettingsBackpack `json:"facePreset"`
	Gloves     NeutralAvatarSettingsBackpack `json:"gloves"`
	Hair       NeutralAvatarSettingsBackpack `json:"hair"`
	Hat        NeutralAvatarSettingsBackpack `json:"hat"`
	Necklace   NeutralAvatarSettingsBackpack `json:"necklace"`
	Pants      NeutralAvatarSettingsBackpack `json:"pants"`
	Pose       NeutralAvatarSettingsBackpack `json:"pose"`
	Shirt      NeutralAvatarSettingsBackpack `json:"shirt"`
	Shoes      NeutralAvatarSettingsBackpack `json:"shoes"`
	Socks      NeutralAvatarSettingsBackpack `json:"socks"`
}

type NeutralAvatarSettingsBodyBlendV2 struct {
	Bust float64 `json:"bust"`
	Hips float64 `json:"hips"`
}

type NeutralAvatarSettingsFacePositionsV2 struct {
	BrowDepth       float64 `json:"browDepth"`
	BrowHorizontal  float64 `json:"browHorizontal"`
	BrowVertical    float64 `json:"browVertical"`
	EyeDepth        float64 `json:"eyeDepth"`
	EyeHorizontal   float64 `json:"eyeHorizontal"`
	EyeVertical     float64 `json:"eyeVertical"`
	MouthDepth      float64 `json:"mouthDepth"`
	MouthHorizontal float64 `json:"mouthHorizontal"`
	MouthVertical   float64 `json:"mouthVertical"`
	NoseDepth       float64 `json:"noseDepth"`
	NoseVertical    float64 `json:"noseVertical"`
}

type NeutralAvatarSettingsSkinGradientV2 struct {
	ColorKeys [6]NeutralAvatarSettingsColorKeysV2 `json:"colorKeys"`
}

type NeutralAvatarSettingsFemaleNeutralAvatar struct {
	Articles       NeutralAvatarSettingsArticlesV2      `json:"articles"`
	BodyBlend      NeutralAvatarSettingsBodyBlendV2     `json:"bodyBlend"`
	EarSelection   NeutralAvatarSettingsEarSelection    `json:"earSelection"`
	EyeGradient    NeutralAvatarSettingsEyeGradient     `json:"eyeGradient"`
	EyeSelection   NeutralAvatarSettingsEarSelection    `json:"eyeSelection"`
	FacePositions  NeutralAvatarSettingsFacePositionsV2 `json:"facePositions"`
	HairGradient   NeutralAvatarSettingsEyeGradient     `json:"hairGradient"`
	HeadSelection  NeutralAvatarSettingsEarSelection    `json:"headSelection"`
	MouthSelection NeutralAvatarSettingsEarSelection    `json:"mouthSelection"`
	NoseSelection  NeutralAvatarSettingsEarSelection    `json:"noseSelection"`
	SkinGradient   NeutralAvatarSettingsSkinGradientV2  `json:"skinGradient"`
}

type NeutralAvatarSettingsArticlesV3 struct {
	Backpack   NeutralAvatarSettingsBackpack `json:"backpack"`
	BodyPreset NeutralAvatarSettingsBackpack `json:"bodyPreset"`
	Eyebrow    NeutralAvatarSettingsBackpack `json:"eyebrow"`
	Eyelash    NeutralAvatarSettingsBackpack `json:"eyelash"`
	FacePreset NeutralAvatarSettingsBackpack `json:"facePreset"`
	Gloves     NeutralAvatarSettingsBackpack `json:"gloves"`
	Hair       NeutralAvatarSettingsBackpack `json:"hair"`
	Hat        NeutralAvatarSettingsBackpack `json:"hat"`
	Pants      NeutralAvatarSettingsBackpack `json:"pants"`
	Pose       NeutralAvatarSettingsBackpack `json:"pose"`
	Shirt      NeutralAvatarSettingsBackpack `json:"shirt"`
	Shoes      NeutralAvatarSettingsBackpack `json:"shoes"`
	Socks      NeutralAvatarSettingsBackpack `json:"socks"`
}

type NeutralAvatarSettingsMaleNeutralAvatar struct {
	Articles       NeutralAvatarSettingsArticlesV3      `json:"articles"`
	BodyBlend      NeutralAvatarSettingsBodyBlend       `json:"bodyBlend"`
	EarSelection   NeutralAvatarSettingsEarSelection    `json:"earSelection"`
	EyeGradient    NeutralAvatarSettingsEyeGradient     `json:"eyeGradient"`
	EyeSelection   NeutralAvatarSettingsEarSelection    `json:"eyeSelection"`
	FacePositions  NeutralAvatarSettingsFacePositionsV2 `json:"facePositions"`
	HairGradient   NeutralAvatarSettingsEyeGradient     `json:"hairGradient"`
	HeadSelection  NeutralAvatarSettingsEarSelection    `json:"headSelection"`
	MouthSelection NeutralAvatarSettingsEarSelection    `json:"mouthSelection"`
	NoseSelection  NeutralAvatarSettingsEarSelection    `json:"noseSelection"`
	SkinGradient   NeutralAvatarSettingsSkinGradientV2  `json:"skinGradient"`
}

type NeutralAvatarSettings struct {
	BodySliderSettings                 NeutralAvatarSettingsBodySliderSettings   `json:"bodySliderSettings"`
	DefaultNeutralAvatar               NeutralAvatarSettingsDefaultNeutralAvatar `json:"defaultNeutralAvatar"`
	FemaleNeutralAvatar                NeutralAvatarSettingsFemaleNeutralAvatar  `json:"femaleNeutralAvatar"`
	MaleNeutralAvatar                  NeutralAvatarSettingsMaleNeutralAvatar    `json:"maleNeutralAvatar"`
	NeutralAvatarLegacyMappingVersion  uint64                                    `json:"neutralAvatarLegacyMappingVersion"`
	NeutralAvatarSettingsEnabled       bool                                      `json:"neutralAvatarSettingsEnabled"`
	NeutralAvatarSettingsSentinelValue uint64                                    `json:"neutralAvatarSettingsSentinelValue"`
	ObMoveSettingsNumber101            bool                                      `json:"obMoveSettingsNumber101"`
	ObMoveSettingsNumber120            bool                                      `json:"obMoveSettingsNumber120"`
	ObMoveSettingsNumber123            bool                                      `json:"obMoveSettingsNumber123"`
	ObMoveSettingsNumber124            bool                                      `json:"obMoveSettingsNumber124"`
}

type OnboardingSettings struct {
	AdventureSyncPromptStep uint64 `json:"adventureSyncPromptStep"`
	ArPromptPlayerLevel     uint64 `json:"arPromptPlayerLevel"`
	DisableInitialArPrompt  bool   `json:"disableInitialArPrompt"`
}

type OptimizationsProto struct {
	AdaptivePerformanceMinResolutionScale float64 `json:"adaptivePerformanceMinResolutionScale"`
	AdaptivePerformanceUpdateInterval     float64 `json:"adaptivePerformanceUpdateInterval"`
	OptimizationPhysicsToggleEnabled      bool    `json:"optimizationPhysicsToggleEnabled"`
}

type PartyDarkLaunchSettingsCreateOrJoinWaitProbability struct {
	WaitTimeMs uint64 `json:"waitTimeMs"`
	Weight     uint64 `json:"weight"`
}

type PartyDarkLaunchSettingsLeavePartyProbablity struct {
	MaxDurationMs uint64 `json:"maxDurationMs"`
	Weight        uint64 `json:"weight"`
}

type PartyDarkLaunchSettings struct {
	CreateOrJoinWaitProbability    [4]PartyDarkLaunchSettingsCreateOrJoinWaitProbability `json:"createOrJoinWaitProbability"`
	LeavePartyProbablity           [4]PartyDarkLaunchSettingsLeavePartyProbablity        `json:"leavePartyProbablity"`
	ProbabilityToCreatePercent     uint64                                                `json:"probabilityToCreatePercent"`
	RolloutPlayersPerBillion       uint64                                                `json:"rolloutPlayersPerBillion"`
	UpdateLocationEnabled          bool                                                  `json:"updateLocationEnabled"`
	UpdateLocationOverridePeriodMs uint64                                                `json:"updateLocationOverridePeriodMs"`
}

type PartyIapBoostsSettingsBoost struct {
	DailyContributionLimit uint64  `json:"dailyContributionLimit"`
	DurationMultiplier     float64 `json:"durationMultiplier"`
	SupportedItemTypes     string  `json:"supportedItemTypes"`
}

type PartyIapBoostsSettings struct {
	Boost [3]PartyIapBoostsSettingsBoost `json:"boost"`
}

type PartyRecommendationSettings struct {
	MegaEvoCombatRatingScale float64 `json:"megaEvoCombatRatingScale"`
	Mode                     string  `json:"mode"`
	ThirdMoveWeight          float64 `json:"thirdMoveWeight"`
	Variance                 float64 `json:"variance"`
}

type PhotoSettings struct {
	BannerImageUrl    [3]string `json:"bannerImageUrl"`
	IrisFlags         uint64    `json:"irisFlags"`
	IsIrisEnabled     bool      `json:"isIrisEnabled"`
	ScreenCaptureSize float64   `json:"screenCaptureSize"`
}

type PlannerSettingsMessageTiming struct {
	MessageSendTime string `json:"messageSendTime"`
}

type PlannerSettingsMessageTimingV2 struct {
	MessageSendBeforeEventSeconds uint64 `json:"messageSendBeforeEventSeconds"`
	MessageSendTime               string `json:"messageSendTime"`
}

type PlannerSettingsEventSettings struct {
	MaxRsvpsPerSlot             uint64 `json:"maxRsvpsPerSlot"`
	MaxTimeslots                uint64 `json:"maxTimeslots"`
	MessageTiming               []any  `json:"messageTiming"`
	RsvpBonusTimeWindowMinutes  uint64 `json:"rsvpBonusTimeWindowMinutes"`
	RsvpClearInventoryMinutes   uint64 `json:"rsvpClearInventoryMinutes"`
	RsvpInviteEnabled           bool   `json:"rsvpInviteEnabled"`
	RsvpTimeslotDurationSeconds uint64 `json:"rsvpTimeslotDurationSeconds"`
	TimeslotGapSeconds          uint64 `json:"timeslotGapSeconds"`
}

type PlannerSettingsEventSettingsV2 struct {
	EventType                   string `json:"eventType"`
	MaxRsvpsPerSlot             uint64 `json:"maxRsvpsPerSlot"`
	MaxTimeslots                uint64 `json:"maxTimeslots"`
	MessageTiming               []any  `json:"messageTiming"`
	RsvpBonusTimeWindowMinutes  uint64 `json:"rsvpBonusTimeWindowMinutes"`
	RsvpClearInventoryMinutes   uint64 `json:"rsvpClearInventoryMinutes"`
	RsvpInviteEnabled           bool   `json:"rsvpInviteEnabled"`
	RsvpTimeslotDurationSeconds uint64 `json:"rsvpTimeslotDurationSeconds"`
	TimeslotGapSeconds          uint64 `json:"timeslotGapSeconds"`
}

type PlannerSettings struct {
	ActiveReminderTimeSeconds         uint64 `json:"activeReminderTimeSeconds"`
	Enabled                           bool   `json:"enabled"`
	EventSettings                     []any  `json:"eventSettings"`
	MaxPendingRsvpInvites             uint64 `json:"maxPendingRsvpInvites"`
	MaxRsvpDisplayDistanceM           uint64 `json:"maxRsvpDisplayDistanceM"`
	MaxRsvpInvites                    uint64 `json:"maxRsvpInvites"`
	MaxRsvpsPerTrainer                uint64 `json:"maxRsvpsPerTrainer"`
	NearbyRsvpTabEnabled              bool   `json:"nearbyRsvpTabEnabled"`
	RsvpCountGeoPushGatewayNamespace  string `json:"rsvpCountGeoPushGatewayNamespace"`
	RsvpCountPushGatewayNamespace     string `json:"rsvpCountPushGatewayNamespace"`
	RsvpCountTopperPollingTimeSeconds uint64 `json:"rsvpCountTopperPollingTimeSeconds"`
	RsvpCountUpdateTimeSeconds        uint64 `json:"rsvpCountUpdateTimeSeconds"`
	SendRsvpInviteEnabled             bool   `json:"sendRsvpInviteEnabled"`
}

type PlayerBonusSystemSettings struct {
	DayNightEvoEnabled bool   `json:"dayNightEvoEnabled"`
	MaxBonusDurationMs string `json:"maxBonusDurationMs"`
}

type PlayerLevelXpRewardV2thresholds struct {
	Source    string `json:"source"`
	Threshold uint64 `json:"threshold"`
}

type PlayerLevel struct {
	CpMultiplier                 []float64                       `json:"cpMultiplier"`
	MaxEggPlayerLevel            uint64                          `json:"maxEggPlayerLevel"`
	MaxEncounterPlayerLevel      uint64                          `json:"maxEncounterPlayerLevel"`
	MaxQuestEncounterPlayerLevel uint64                          `json:"maxQuestEncounterPlayerLevel"`
	MilestoneLevels              [8]uint64                       `json:"milestoneLevels"`
	RankNum                      []uint64                        `json:"rankNum"`
	RequiredExperience           []uint64                        `json:"requiredExperience"`
	SmoreFtueImageUrl            string                          `json:"smoreFtueImageUrl"`
	XpRewardV2thresholds         PlayerLevelXpRewardV2thresholds `json:"xpRewardV2Thresholds"`
}

type PokeballThrowPropertySettingsCurveballModifier struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
	Z float64 `json:"z"`
}

type PokeballThrowPropertySettingsLaunchVelocityMultiplier struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

type PokeballThrowPropertySettingsThrowProperties struct {
	BelowGroundFlyTimeoutSeconds float64                                               `json:"belowGroundFlyTimeoutSeconds"`
	CurveballModifier            PokeballThrowPropertySettingsCurveballModifier        `json:"curveballModifier"`
	DragSnapSpeed                float64                                               `json:"dragSnapSpeed"`
	FlyTimeoutDuration           float64                                               `json:"flyTimeoutDuration"`
	LaunchSpeedThreshold         float64                                               `json:"launchSpeedThreshold"`
	LaunchVelocityMultiplier     PokeballThrowPropertySettingsLaunchVelocityMultiplier `json:"launchVelocityMultiplier"`
	MaxAngularVelocity           float64                                               `json:"maxAngularVelocity"`
	MaxLaunchAngle               float64                                               `json:"maxLaunchAngle"`
	MaxLaunchAngleHeight         float64                                               `json:"maxLaunchAngleHeight"`
	MaxLaunchSpeed               float64                                               `json:"maxLaunchSpeed"`
	MinLaunchAngle               float64                                               `json:"minLaunchAngle"`
	MinSpinParticleAmount        float64                                               `json:"minSpinParticleAmount"`
	OvershootCorrection          float64                                               `json:"overshootCorrection"`
	ThrowProertiesCategory       string                                                `json:"throwProertiesCategory"`
	UndershootCorrection         float64                                               `json:"undershootCorrection"`
}

type PokeballThrowPropertySettings struct {
	ThrowProperties [1]PokeballThrowPropertySettingsThrowProperties `json:"throwProperties"`
}

type PokecoinPurchaseDisplayGmt struct {
	FeatureEnabled bool `json:"featureEnabled"`
}

type PokedexCategoriesSettingsPokedexCategorySettingsInOrder struct {
	MilestoneGoal   uint64 `json:"milestoneGoal"`
	PokedexCategory string `json:"pokedexCategory"`
}

type PokedexCategoriesSettingsPokedexCategorySettingsInOrderV2 struct {
	MilestoneGoal   uint64 `json:"milestoneGoal"`
	PokedexCategory uint64 `json:"pokedexCategory"`
}

type PokedexCategoriesSettingsPokedexCategorySettingsInOrderV3 struct {
	MilestoneGoal   uint64 `json:"milestoneGoal"`
	PokedexCategory string `json:"pokedexCategory"`
	VisuallyHidden  bool   `json:"visuallyHidden"`
}

type PokedexCategoriesSettings struct {
	ClientShinyFormCheck           bool  `json:"clientShinyFormCheck"`
	FeatureEnabled                 bool  `json:"featureEnabled"`
	PokedexCategorySettingsInOrder []any `json:"pokedexCategorySettingsInOrder"`
	SearchEnabled                  bool  `json:"searchEnabled"`
	ShowDexAfterNewFormEnabled     bool  `json:"showDexAfterNewFormEnabled"`
	ShowShinyDexCelebrationEnabled bool  `json:"showShinyDexCelebrationEnabled"`
}

type PokedexSizeStatsSystemSettings struct {
	DisplayEnabled                                bool    `json:"displayEnabled"`
	EnableRandomizedHeightAndWeightForWildPokemon bool    `json:"enableRandomizedHeightAndWeightForWildPokemon"`
	NumDaysNewBubbleTrack                         float64 `json:"numDaysNewBubbleTrack"`
	PokedexDisplayPokemonTrackedThreshold         uint64  `json:"pokedexDisplayPokemonTrackedThreshold"`
	RecordDisplayPokemonTrackedThreshold          uint64  `json:"recordDisplayPokemonTrackedThreshold"`
}

type Pokedexv2featureFlags struct {
	CelebV1flag      int64  `json:"celebV1Flag"`
	DetailBattleFlag int64  `json:"detailBattleFlag"`
	DetailV1flag     int64  `json:"detailV1Flag"`
	IsFeatureEnabled bool   `json:"isFeatureEnabled"`
	NavigationFlag   uint64 `json:"navigationFlag"`
	NotificationFlag int64  `json:"notificationFlag"`
}

type PokedexV2settings struct {
	MaxTrackedPokemon    uint64    `json:"maxTrackedPokemon"`
	PokemonAlertExcluded [5]string `json:"pokemonAlertExcluded"`
}

type PokemonFxSettings struct {
	HidingInPhoto bool `json:"hidingInPhoto"`
}

type PokemonHomeSettings struct {
	EnergySkuId                  string `json:"energySkuId"`
	PlayerMinLevel               uint64 `json:"playerMinLevel"`
	TransporterEnergyGainPerHour uint64 `json:"transporterEnergyGainPerHour"`
	TransporterMaxEnergy         uint64 `json:"transporterMaxEnergy"`
}

type PokemonTagSettingsColorBinding struct {
	Color   string `json:"color"`
	HexCode string `json:"hexCode"`
}

type PokemonTagSettings struct {
	ColorBinding                    [8]PokemonTagSettingsColorBinding `json:"colorBinding"`
	MaxNumTagsAllowed               uint64                            `json:"maxNumTagsAllowed"`
	MinPlayerLevelForPokemonTagging uint64                            `json:"minPlayerLevelForPokemonTagging"`
}

type PopupControlSettings struct {
	HideAwareOfYourSurroundingsPopup          bool `json:"hideAwareOfYourSurroundingsPopup"`
	HideMedalEarnedPopupUnitAfterFirstPokemon bool `json:"hideMedalEarnedPopupUnitAfterFirstPokemon"`
	HideWeatherWarningPopup                   bool `json:"hideWeatherWarningPopup"`
}

type PostcardCollectionSettings struct {
	Enabled bool `json:"enabled"`
}

type PowerUpPokestopsSettings struct {
	PowerUpPokestopsMinPlayerLevel      uint64  `json:"powerUpPokestopsMinPlayerLevel"`
	ValidatePokestopOnFortSearchPercent float64 `json:"validatePokestopOnFortSearchPercent"`
}

type PrimalEvoSettingsCommonTempSettings struct {
	EnableBuddyWalkingTempEvoEnergyAward bool   `json:"enableBuddyWalkingTempEvoEnergyAward"`
	EvolutionLengthMs                    string `json:"evolutionLengthMs"`
	NumTempEvoLevels                     uint64 `json:"numTempEvoLevels"`
}

type PrimalEvoSettingsTypeBoosts struct {
	BoostType [3]string `json:"boostType"`
	PokemonId string    `json:"pokemonId"`
}

type PrimalEvoSettings struct {
	CommonTempSettings PrimalEvoSettingsCommonTempSettings `json:"commonTempSettings"`
	MaxCandyHoardSize  uint64                              `json:"maxCandyHoardSize"`
	TypeBoosts         [3]PrimalEvoSettingsTypeBoosts      `json:"typeBoosts"`
}

type PtcOauthSettings struct {
	EndTimeMs                string `json:"endTimeMs"`
	LinkingRewardItem        string `json:"linkingRewardItem"`
	PtcAccountLinkingEnabled bool   `json:"ptcAccountLinkingEnabled"`
}

type QuickInviteSettings struct {
	Enabled                   bool   `json:"enabled"`
	SuggestedPlayersVariation string `json:"suggestedPlayersVariation"`
}

type RaidLobbyCounterSettings struct {
	MapDisplayEnabled       bool    `json:"mapDisplayEnabled"`
	MaxCountToUpdate        uint64  `json:"maxCountToUpdate"`
	NearbyDisplayEnabled    bool    `json:"nearbyDisplayEnabled"`
	PollingEnabled          bool    `json:"pollingEnabled"`
	PollingIntervalMs       uint64  `json:"pollingIntervalMs"`
	PollingRadiusMeters     float64 `json:"pollingRadiusMeters"`
	PublishCutoffTimeMs     uint64  `json:"publishCutoffTimeMs"`
	PublishEnabled          bool    `json:"publishEnabled"`
	ShowCounterRadiusMeters float64 `json:"showCounterRadiusMeters"`
	SubscribeEnabled        bool    `json:"subscribeEnabled"`
	SubscribeS2level        uint64  `json:"subscribeS2Level"`
	SubscriptionNamespace   string  `json:"subscriptionNamespace"`
}

type RaidSettingsPokemonMusicOverrides struct {
	BattleMusicKey string    `json:"battleMusicKey"`
	Forms          [2]string `json:"forms"`
	Pokemon        string    `json:"pokemon"`
}

type RaidSettingsPokemonMusicOverridesV2 struct {
	BattleMusicKey string    `json:"battleMusicKey"`
	Forms          [3]string `json:"forms"`
	Pokemon        string    `json:"pokemon"`
}

type RaidSettingsPokemonMusicOverridesV3 struct {
	BattleMusicKey string `json:"battleMusicKey"`
	Pokemon        string `json:"pokemon"`
}

type RaidSettingsPokemonMusicOverridesV4 struct {
	BattleMusicKey string    `json:"battleMusicKey"`
	Forms          [4]string `json:"forms"`
	Pokemon        string    `json:"pokemon"`
}

type RaidSettingsRaidFeatureFlags struct {
	UseCachedRaidBossPokemon bool `json:"useCachedRaidBossPokemon"`
}

type RaidSettingsRaidLevelMusicOverrides struct {
	BattleMusicKey string `json:"battleMusicKey"`
	RaidLevel      string `json:"raidLevel"`
}

type RaidSettings struct {
	Ablcemdnbkc                           bool                                   `json:"ablcemdnbkc"`
	BootCutoffMs                          uint64                                 `json:"bootCutoffMs"`
	BootRaidEnabled                       bool                                   `json:"bootRaidEnabled"`
	BootSoloMs                            uint64                                 `json:"bootSoloMs"`
	CanInviteFriendsInPerson              bool                                   `json:"canInviteFriendsInPerson"`
	CanInviteFriendsRemotely              bool                                   `json:"canInviteFriendsRemotely"`
	FetchProfileFromSocialEnabled         bool                                   `json:"fetchProfileFromSocialEnabled"`
	FriendInviteCutoffTimeSec             uint64                                 `json:"friendInviteCutoffTimeSec"`
	FriendRequestsEnabled                 bool                                   `json:"friendRequestsEnabled"`
	InviteCooldownDurationMillis          string                                 `json:"inviteCooldownDurationMillis"`
	MaxNumFriendInvites                   uint64                                 `json:"maxNumFriendInvites"`
	MaxNumFriendInvitesPerAction          uint64                                 `json:"maxNumFriendInvitesPerAction"`
	MaxPlayersPerLobby                    uint64                                 `json:"maxPlayersPerLobby"`
	MaxRemotePlayersPerLobby              uint64                                 `json:"maxRemotePlayersPerLobby"`
	MaxRemoteRaidPasses                   uint64                                 `json:"maxRemoteRaidPasses"`
	MinPlayersToBoot                      uint64                                 `json:"minPlayersToBoot"`
	ObRaidClientSettingsNumber1           uint64                                 `json:"obRaidClientSettingsNumber1"`
	ObRaidClientSettingsNumber29          uint64                                 `json:"obRaidClientSettingsNumber29"`
	PokemonMusicOverrides                 []any                                  `json:"pokemonMusicOverrides"`
	PopupTimeMs                           uint64                                 `json:"popupTimeMs"`
	RaidFeatureFlags                      RaidSettingsRaidFeatureFlags           `json:"raidFeatureFlags"`
	RaidLevelMusicOverrides               [5]RaidSettingsRaidLevelMusicOverrides `json:"raidLevelMusicOverrides"`
	RemoteDamageModifier                  float64                                `json:"remoteDamageModifier"`
	RemoteRaidDistanceValidation          bool                                   `json:"remoteRaidDistanceValidation"`
	RemoteRaidEnabled                     bool                                   `json:"remoteRaidEnabled"`
	RemoteRaidsMinPlayerLevel             uint64                                 `json:"remoteRaidsMinPlayerLevel"`
	UnsupportedRaidLevelsForFriendInvites []any                                  `json:"unsupportedRaidLevelsForFriendInvites"`
	UnsupportedRemoteRaidLevels           []any                                  `json:"unsupportedRemoteRaidLevels"`
}

type ReferralSettingsRecentFeatures struct {
	Description string `json:"description"`
	FeatureName string `json:"featureName"`
	IconType    string `json:"iconType"`
}

type ReferralSettingsRecentFeaturesV2 struct {
	Description string `json:"description"`
	FeatureName string `json:"featureName"`
	IconType    uint64 `json:"iconType"`
}

type ReferralSettings struct {
	AddReferrerGracePeriodMs                string `json:"addReferrerGracePeriodMs"`
	DeepLinkUrl                             string `json:"deepLinkUrl"`
	FeatureEnabled                          bool   `json:"featureEnabled"`
	ImageShareReferralEnabled               bool   `json:"imageShareReferralEnabled"`
	MinNumDaysWithoutSessionForLapsedPlayer uint64 `json:"minNumDaysWithoutSessionForLapsedPlayer"`
	RecentFeatures                          []any  `json:"recentFeatures"`
}

type RemoteTradeSettings struct {
	Enabled                     bool   `json:"enabled"`
	MaxRemoteTradesPerDay       uint64 `json:"maxRemoteTradesPerDay"`
	PokemonUntradableDays       uint64 `json:"pokemonUntradableDays"`
	RequestedPokemonCount       uint64 `json:"requestedPokemonCount"`
	TaggingUnlockPointThreshold uint64 `json:"taggingUnlockPointThreshold"`
	TimeLimitMinutes            uint64 `json:"timeLimitMinutes"`
	TradeExpiryReminderMinutes  uint64 `json:"tradeExpiryReminderMinutes"`
}

type RouteBadgeSettings struct {
	Target [4]uint64 `json:"target"`
}

type RouteCreationSettingsClientBreadcrumbSettings struct {
	AsFallbackForegroundReportingInvervalS float64 `json:"asFallbackForegroundReportingInvervalS"`
	SessionDurationM                       float64 `json:"sessionDurationM"`
	UpdateIntervalS                        float64 `json:"updateIntervalS"`
}

type RouteCreationSettings struct {
	AllowableGpsDriftMeters           uint64                                        `json:"allowableGpsDriftMeters"`
	AllowAppeals                      bool                                          `json:"allowAppeals"`
	ClientBreadcrumbSettings          RouteCreationSettingsClientBreadcrumbSettings `json:"clientBreadcrumbSettings"`
	CreationLimitPerWindow            uint64                                        `json:"creationLimitPerWindow"`
	CreationLimitWindowDays           uint64                                        `json:"creationLimitWindowDays"`
	DisabledTags                      [9]string                                     `json:"disabledTags"`
	DurationBufferS                   uint64                                        `json:"durationBufferS"`
	DurationDistanceToSpeedMultiplier float64                                       `json:"durationDistanceToSpeedMultiplier"`
	Enabled                           bool                                          `json:"enabled"`
	EnableImmediateRouteIngestion     bool                                          `json:"enableImmediateRouteIngestion"`
	InteractionRangeMeters            float64                                       `json:"interactionRangeMeters"`
	MaxClientMapPanningDistanceM      float64                                       `json:"maxClientMapPanningDistanceM"`
	MaxDescriptionLength              uint64                                        `json:"maxDescriptionLength"`
	MaxDistanceFromAnchorPotsM        float64                                       `json:"maxDistanceFromAnchorPotsM"`
	MaxDistanceWarningDistanceMeters  uint64                                        `json:"maxDistanceWarningDistanceMeters"`
	MaxNameLength                     uint64                                        `json:"maxNameLength"`
	MaxOpenRoutes                     uint64                                        `json:"maxOpenRoutes"`
	MaxPostPunishmentBanTimeMs        string                                        `json:"maxPostPunishmentBanTimeMs"`
	MaxRecallCountThreshold           uint64                                        `json:"maxRecallCountThreshold"`
	MaxRecordingSpeedMetersPerSecond  uint64                                        `json:"maxRecordingSpeedMetersPerSecond"`
	MaxSubmissionCountThreshold       uint64                                        `json:"maxSubmissionCountThreshold"`
	MaxTotalDistanceM                 float64                                       `json:"maxTotalDistanceM"`
	MinBreadcrumbDistanceDeltaMeters  uint64                                        `json:"minBreadcrumbDistanceDeltaMeters"`
	MinPlayerLevel                    uint64                                        `json:"minPlayerLevel"`
	MinTotalDistanceM                 float64                                       `json:"minTotalDistanceM"`
	ModerationEnabled                 bool                                          `json:"moderationEnabled"`
	ResumeRangeMeters                 uint64                                        `json:"resumeRangeMeters"`
	ShowSubmissionStatusHistory       bool                                          `json:"showSubmissionStatusHistory"`
}

type RouteDiscoverySettings struct {
	EnableBadgeRoutesDiscovery         bool    `json:"enableBadgeRoutesDiscovery"`
	MaxBadgeRoutesDiscoverySpannerTxns uint64  `json:"maxBadgeRoutesDiscoverySpannerTxns"`
	MaxClientMapPanningDistanceMeters  float64 `json:"maxClientMapPanningDistanceMeters"`
	MaxFavoriteRoutes                  uint64  `json:"maxFavoriteRoutes"`
	MaxRoutesViewable                  uint64  `json:"maxRoutesViewable"`
	NearbyVisibleRadiusMeters          float64 `json:"nearbyVisibleRadiusMeters"`
	NewRouteThreshold                  uint64  `json:"newRouteThreshold"`
	PopularRoutesFraction              float64 `json:"popularRoutesFraction"`
}

type RoutePinSettingsPinMessage struct {
	Category      [2]string `json:"category"`
	Key           string    `json:"key"`
	LevelRequired uint64    `json:"levelRequired"`
}

type RoutePinSettingsPinMessageV2 struct {
	Category      [1]string `json:"category"`
	Key           string    `json:"key"`
	LevelRequired uint64    `json:"levelRequired"`
}

type RoutePinSettings struct {
	CreatorMax              uint64  `json:"creatorMax"`
	MaxDistanceFromRouteM   float64 `json:"maxDistanceFromRouteM"`
	MaxNamedStickersPerPin  uint64  `json:"maxNamedStickersPerPin"`
	MaxPinsForClientDisplay uint64  `json:"maxPinsForClientDisplay"`
	MaxPinsPerRoute         uint64  `json:"maxPinsPerRoute"`
	PinMessage              []any   `json:"pinMessage"`
	PlayerMax               uint64  `json:"playerMax"`
}

type RoutePlaySettings struct {
	BonusActiveDistanceThresholdMeters uint64  `json:"bonusActiveDistanceThresholdMeters"`
	EnableRouteRatingDetails           bool    `json:"enableRouteRatingDetails"`
	MarginMinimumMeters                uint64  `json:"marginMinimumMeters"`
	MarginPercentage                   float64 `json:"marginPercentage"`
	MinPlayerLevel                     uint64  `json:"minPlayerLevel"`
	ObRoutePlaySettingsNumber29        uint64  `json:"obRoutePlaySettingsNumber29"`
	ObRoutePlaySettingsNumber30        float64 `json:"obRoutePlaySettingsNumber30"`
	ObRoutePlaySettingsNumber33        float64 `json:"obRoutePlaySettingsNumber33"`
	ObRoutePlaySettingsNumber45        uint64  `json:"obRoutePlaySettingsNumber45"`
	ResumeRangeMeters                  uint64  `json:"resumeRangeMeters"`
	RouteEngagementStatsShardCount     uint64  `json:"routeEngagementStatsShardCount"`
	RouteExpirationMinutes             uint64  `json:"routeExpirationMinutes"`
	RoutePauseDistanceM                uint64  `json:"routePauseDistanceM"`
}

type RoutesNearbyNotifSettings struct {
	MaxNotifs           uint64 `json:"maxNotifs"`
	TimeBetweenNotifsMs string `json:"timeBetweenNotifsMs"`
}

type RoutesPartyPlayInteropSettings struct {
	ConsumptionInteroperable bool `json:"consumptionInteroperable"`
}

type RouteStampCategorySettings struct {
	Active         bool   `json:"active"`
	Category       string `json:"category"`
	CollectionSize uint64 `json:"collectionSize"`
	SortOrder      uint64 `json:"sortOrder"`
}

type SharedFusionSettings struct {
	FusionEnabled bool `json:"fusionEnabled"`
}

type SharedMoveSettings struct {
	PurifiedThirdMoveUnlockCandyMultiplier    float64 `json:"purifiedThirdMoveUnlockCandyMultiplier"`
	PurifiedThirdMoveUnlockStardustMultiplier float64 `json:"purifiedThirdMoveUnlockStardustMultiplier"`
	ShadowThirdMoveUnlockCandyMultiplier      float64 `json:"shadowThirdMoveUnlockCandyMultiplier"`
	ShadowThirdMoveUnlockStardustMultiplier   float64 `json:"shadowThirdMoveUnlockStardustMultiplier"`
	SharedMoveSettingsBool1                   bool    `json:"sharedMoveSettingsBool1"`
}

type SourdoughMoveMappingSettingsMappings struct {
	Form      string `json:"form"`
	Move      string `json:"move"`
	PokemonId string `json:"pokemonId"`
}

type SourdoughMoveMappingSettingsMappingsV2 struct {
	Move      string `json:"move"`
	PokemonId string `json:"pokemonId"`
}

type SourdoughMoveMappingSettingsOptionalBmoveOverride struct {
	Move     string `json:"move"`
	Override bool   `json:"override"`
}

type SourdoughMoveMappingSettingsMappingsV3 struct {
	Form                  string                                            `json:"form"`
	Move                  string                                            `json:"move"`
	OptionalBmoveOverride SourdoughMoveMappingSettingsOptionalBmoveOverride `json:"optionalBMoveOverride"`
	OptionalCmoveOverride SourdoughMoveMappingSettingsOptionalBmoveOverride `json:"optionalCMoveOverride"`
	PokemonId             string                                            `json:"pokemonId"`
}

type SourdoughMoveMappingSettings struct {
	Mappings []any `json:"mappings"`
}

type SpecialEggSettings struct {
	Enabled        bool   `json:"enabled"`
	MapIconEnabled bool   `json:"mapIconEnabled"`
	MinLevel       uint64 `json:"minLevel"`
	XpReward       uint64 `json:"xpReward"`
}

type SponsoredGeofenceGiftSettingsBalloonGiftSettings struct {
	BalloonAutoDismissTimeMs uint64 `json:"balloonAutoDismissTimeMs"`
	EnableBalloonGift        bool   `json:"enableBalloonGift"`
	EnableBalloonWebView     bool   `json:"enableBalloonWebView"`
	GetWasabiAdRpcIntervalMs uint64 `json:"getWasabiAdRpcIntervalMs"`
}

type SponsoredGeofenceGiftSettings struct {
	BalloonGiftSettings               SponsoredGeofenceGiftSettingsBalloonGiftSettings `json:"balloonGiftSettings"`
	EnableSponsoredGeofenceGift       bool                                             `json:"enableSponsoredGeofenceGift"`
	FullscreenDisableExitButtonTimeMs uint64                                           `json:"fullscreenDisableExitButtonTimeMs"`
	GiftPersistenceTimeMs             uint64                                           `json:"giftPersistenceTimeMs"`
	MapPresentationTimeMs             uint64                                           `json:"mapPresentationTimeMs"`
}

type SquashSettings struct {
	DailySquashLimit uint64 `json:"dailySquashLimit"`
}

type StampCollectionSettings struct {
	DefaultColorPool          [4]string `json:"defaultColorPool"`
	GiftingMinFriendshipLevel uint64    `json:"giftingMinFriendshipLevel"`
	MinPlayerLevel            uint64    `json:"minPlayerLevel"`
	Version                   int64     `json:"version"`
}

type StationedPokemonTableSettingsTierBoosts struct {
	NumBoostIcons uint64 `json:"numBoostIcons"`
	NumStationed  uint64 `json:"numStationed"`
}

type StationedPokemonTableSettings struct {
	StationedPokemonTableEnum string                                      `json:"stationedPokemonTableEnum"`
	TierBoosts                [20]StationedPokemonTableSettingsTierBoosts `json:"tierBoosts"`
}

type StickerCategorySettingsStickerCategory struct {
	Active                bool   `json:"active"`
	Category              string `json:"category"`
	PreferredCategoryIcon string `json:"preferredCategoryIcon"`
	SortOrder             uint64 `json:"sortOrder"`
}

type StickerCategorySettingsStickerCategoryV2 struct {
	Active    bool   `json:"active"`
	Category  string `json:"category"`
	SortOrder uint64 `json:"sortOrder"`
}

type StickerCategorySettings struct {
	Enabled         bool  `json:"enabled"`
	StickerCategory []any `json:"stickerCategory"`
}

type StyleShopSettings struct {
	CartDisabled             bool      `json:"cartDisabled"`
	RecommendedItemIconNames [5]string `json:"recommendedItemIconNames"`
	SetsEnabled              bool      `json:"setsEnabled"`
	V2enabled                bool      `json:"v2Enabled"`
}

type TicketGiftingSettings struct {
	DailyPlayerGiftingLimit    uint64 `json:"dailyPlayerGiftingLimit"`
	MinPlayerLevel             uint64 `json:"minPlayerLevel"`
	MinRequiredFriendshipLevel string `json:"minRequiredFriendshipLevel"`
}

type TodayViewSettings struct {
	FavoriteQuestEnabled            bool `json:"favoriteQuestEnabled"`
	NotificationServerAuthoritative bool `json:"notificationServerAuthoritative"`
	PinClaimableQuestEnabled        bool `json:"pinClaimableQuestEnabled"`
}

type TutorialSettingsItem struct {
	Count  uint64 `json:"count"`
	ItemId string `json:"itemId"`
}

type TutorialSettingsTutorialItemRewards struct {
	Item     [2]TutorialSettingsItem `json:"item"`
	Tutorial string                  `json:"tutorial"`
}

type TutorialSettingsTutorialItemRewardsV2 struct {
	Tutorial uint64 `json:"tutorial"`
}

type TutorialSettings struct {
	FriendsTutorialEnabled           bool  `json:"friendsTutorialEnabled"`
	GiftsTutorialEnabled             bool  `json:"giftsTutorialEnabled"`
	LuckyFriendTutorialEnabled       bool  `json:"luckyFriendTutorialEnabled"`
	LuckyTradeTutorialEnabled        bool  `json:"luckyTradeTutorialEnabled"`
	LuresTutorialEnabled             bool  `json:"luresTutorialEnabled"`
	PokemonTaggingTutorialEnabled    bool  `json:"pokemonTaggingTutorialEnabled"`
	RazzberryCatchTutorialEnabled    bool  `json:"razzberryCatchTutorialEnabled"`
	RevivesAndPotionsTutorialEnabled bool  `json:"revivesAndPotionsTutorialEnabled"`
	TaskHelpTutorialsEnabled         bool  `json:"taskHelpTutorialsEnabled"`
	TradingTutorialEnabled           bool  `json:"tradingTutorialEnabled"`
	TutorialItemRewards              []any `json:"tutorialItemRewards"`
	TypeEffectivenessTipsEnabled     bool  `json:"typeEffectivenessTipsEnabled"`
}

type UsernameSuggestionSettings struct {
	FeatureEnabled          bool   `json:"featureEnabled"`
	NumSuggestionsDisplayed uint64 `json:"numSuggestionsDisplayed"`
	NumSuggestionsGenerated uint64 `json:"numSuggestionsGenerated"`
}

type VerboseLogCombatSettings struct {
	ClientLogDecayTimeInHours  uint64 `json:"clientLogDecayTimeInHours"`
	EnableCombatChallengeSetup bool   `json:"enableCombatChallengeSetup"`
	EnableCombatVsSeekerSetup  bool   `json:"enableCombatVsSeekerSetup"`
	EnableCoreCombat           bool   `json:"enableCoreCombat"`
	Enabled                    bool   `json:"enabled"`
	EnableExceptionCaught      bool   `json:"enableExceptionCaught"`
	EnableOnApplicationFocus   bool   `json:"enableOnApplicationFocus"`
	EnableOnApplicationPause   bool   `json:"enableOnApplicationPause"`
	EnableOnApplicationQuit    bool   `json:"enableOnApplicationQuit"`
	EnableRpcErrorData         bool   `json:"enableRpcErrorData"`
	EnableWebSocket            bool   `json:"enableWebSocket"`
	ProgressTokenPriority      uint64 `json:"progressTokenPriority"`
}

type VerboseLogRaidSettings struct {
	EnableAttackRaid                        bool `json:"enableAttackRaid"`
	EnableClientPredictionInconsistencyData bool `json:"enableClientPredictionInconsistencyData"`
	EnableExceptionCaught                   bool `json:"enableExceptionCaught"`
	EnableGetRaidDetails                    bool `json:"enableGetRaidDetails"`
	EnableJoinLobby                         bool `json:"enableJoinLobby"`
	EnableLeaveLobby                        bool `json:"enableLeaveLobby"`
	EnableOnApplicationFocus                bool `json:"enableOnApplicationFocus"`
	EnableOnApplicationPause                bool `json:"enableOnApplicationPause"`
	EnableOnApplicationQuit                 bool `json:"enableOnApplicationQuit"`
	EnableProgressToken                     bool `json:"enableProgressToken"`
	EnableRpcErrorData                      bool `json:"enableRpcErrorData"`
	EnableSendRaidInvitation                bool `json:"enableSendRaidInvitation"`
	EnableStartRaidBattle                   bool `json:"enableStartRaidBattle"`
}

type VistaGeneralSettings struct {
	IsFeatureEnabled        bool `json:"isFeatureEnabled"`
	IsVistaBattleEnabled    bool `json:"isVistaBattleEnabled"`
	IsVistaEncounterEnabled bool `json:"isVistaEncounterEnabled"`
	IsVistaMapEnabled       bool `json:"isVistaMapEnabled"`
	IsVistaSpawnsEnabled    bool `json:"isVistaSpawnsEnabled"`
}

type VnextBattleConfigMaxBattleConfig struct {
	BadNetworkWarningThresholdTurns              string `json:"badNetworkWarningThresholdTurns"`
	BattleEndTimeoutThresholdMs                  string `json:"battleEndTimeoutThresholdMs"`
	DeadNetworkDisconnectThresholdTurns          string `json:"deadNetworkDisconnectThresholdTurns"`
	NoOpponentConnectionDisconnectThresholdTurns string `json:"noOpponentConnectionDisconnectThresholdTurns"`
}

type VnextBattleConfigPvpBattleConfig struct {
	BadNetworkWarningThresholdTurns              string `json:"badNetworkWarningThresholdTurns"`
	BattleEndTimeoutThresholdMs                  string `json:"battleEndTimeoutThresholdMs"`
	DeadNetworkDisconnectThresholdTurns          string `json:"deadNetworkDisconnectThresholdTurns"`
	NoOpponentConnectionDisconnectThresholdTurns string `json:"noOpponentConnectionDisconnectThresholdTurns"`
	PreResponseInputBlockDurationMs              string `json:"preResponseInputBlockDurationMs"`
	SubmitTurnNumberWithPlayerAction             bool   `json:"submitTurnNumberWithPlayerAction"`
}

type VnextBattleConfig struct {
	MaxBattleConfig   VnextBattleConfigMaxBattleConfig `json:"maxBattleConfig"`
	PvpBattleConfig   VnextBattleConfigPvpBattleConfig `json:"pvpBattleConfig"`
	RaidsBattleConfig VnextBattleConfigMaxBattleConfig `json:"raidsBattleConfig"`
}

type VsSeekerClientSettings struct {
	AllowedVsSeekerLeagueTemplateId [3]string `json:"allowedVsSeekerLeagueTemplateId"`
}

type VsSeekerScheduleSettingsVsSeekerSchedules struct {
	EndTimeMs                string    `json:"endTimeMs"`
	StartTimeMs              string    `json:"startTimeMs"`
	VsSeekerLeagueTempalteId [2]string `json:"vsSeekerLeagueTempalteId"`
}

type VsSeekerScheduleSettingsVsSeekerSchedulesV2 struct {
	EndTimeMs                string    `json:"endTimeMs"`
	StartTimeMs              string    `json:"startTimeMs"`
	VsSeekerLeagueTempalteId [3]string `json:"vsSeekerLeagueTempalteId"`
}

type VsSeekerScheduleSettingsSeasonSchedules struct {
	DescriptionKey    string `json:"descriptionKey"`
	SeasonTitle       string `json:"seasonTitle"`
	VsSeekerSchedules []any  `json:"vsSeekerSchedules"`
}

type VsSeekerScheduleSettings struct {
	EnableCombatHubMain    bool                                       `json:"enableCombatHubMain"`
	EnableCombatLeagueView bool                                       `json:"enableCombatLeagueView"`
	EnableTodayView        bool                                       `json:"enableTodayView"`
	SeasonSchedules        [1]VsSeekerScheduleSettingsSeasonSchedules `json:"seasonSchedules"`
}

type WeatherBonusSettings struct {
	AttackBonusMultiplier                   float64 `json:"attackBonusMultiplier"`
	CpBaseLevelBonus                        uint64  `json:"cpBaseLevelBonus"`
	GuaranteedIndividualValues              uint64  `json:"guaranteedIndividualValues"`
	RaidEncounterCpBaseLevelBonus           uint64  `json:"raidEncounterCpBaseLevelBonus"`
	RaidEncounterGuaranteedIndividualValues uint64  `json:"raidEncounterGuaranteedIndividualValues"`
	StardustBonusMultiplier                 float64 `json:"stardustBonusMultiplier"`
}

type AccessibilitySettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       AccessibilitySettingsEntryData `json:"data"`
}

func (AccessibilitySettingsEntry) MasterfileEntry() {}

type AccessibilitySettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	AccessibilitySettings AccessibilitySettings `json:"accessibilitySettings"`
}

type AdditiveSceneSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       AdditiveSceneSettingsEntryData `json:"data"`
}

func (AdditiveSceneSettingsEntry) MasterfileEntry() {}

type AdditiveSceneSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	AdditiveSceneSettings AdditiveSceneSettings `json:"additiveSceneSettings"`
}

type AddressablePokemonSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       AddressablePokemonSettingsEntryData `json:"data"`
}

func (AddressablePokemonSettingsEntry) MasterfileEntry() {}

type AddressablePokemonSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	AddressablePokemonSettings AddressablePokemonSettings `json:"addressablePokemonSettings"`
}

type AddressBookImportSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       AddressBookImportSettingsEntryData `json:"data"`
}

func (AddressBookImportSettingsEntry) MasterfileEntry() {}

type AddressBookImportSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	AddressBookImportSettings AddressBookImportSettings `json:"addressBookImportSettings"`
}

type AdvancedSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       AdvancedSettingsEntryData `json:"data"`
}

func (AdvancedSettingsEntry) MasterfileEntry() {}

type AdvancedSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	AdvancedSettings AdvancedSettings `json:"advancedSettings"`
}

type AmuseBoucheWelcomeBackRewardsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       AmuseBoucheWelcomeBackRewardsEntryData `json:"data"`
}

func (AmuseBoucheWelcomeBackRewardsEntry) MasterfileEntry() {}

type AmuseBoucheWelcomeBackRewardsEntryData struct {
	TemplateID string `json:"templateId"`
}

type ArPhotoFeatureFlagsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       ArPhotoFeatureFlagsEntryData `json:"data"`
}

func (ArPhotoFeatureFlagsEntry) MasterfileEntry() {}

type ArPhotoFeatureFlagsEntryData struct {
	TemplateID          string              `json:"templateId"`
	ArPhotoFeatureFlags ArPhotoFeatureFlags `json:"arPhotoFeatureFlags"`
}

type ArTelemetrySettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       ArTelemetrySettingsEntryData `json:"data"`
}

func (ArTelemetrySettingsEntry) MasterfileEntry() {}

type ArTelemetrySettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	ArTelemetrySettings ArTelemetrySettings `json:"arTelemetrySettings"`
}

type AssetRefreshProtoEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       AssetRefreshProtoEntryData `json:"data"`
}

func (AssetRefreshProtoEntry) MasterfileEntry() {}

type AssetRefreshProtoEntryData struct {
	TemplateID        string            `json:"templateId"`
	AssetRefreshProto AssetRefreshProto `json:"assetRefreshProto"`
}

type AvatarFeatureFlagsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       AvatarFeatureFlagsEntryData `json:"data"`
}

func (AvatarFeatureFlagsEntry) MasterfileEntry() {}

type AvatarFeatureFlagsEntryData struct {
	TemplateID         string             `json:"templateId"`
	AvatarFeatureFlags AvatarFeatureFlags `json:"avatarFeatureFlags"`
}

type AvatarStoreFooterFlagsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       AvatarStoreFooterFlagsEntryData `json:"data"`
}

func (AvatarStoreFooterFlagsEntry) MasterfileEntry() {}

type AvatarStoreFooterFlagsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	AvatarStoreFooterFlags AvatarStoreFooterFlags `json:"avatarStoreFooterFlags"`
}

type AvatarStoreSubcategoryFilteringFlagsEntry struct {
	TemplateID string                                        `json:"templateId"`
	Data       AvatarStoreSubcategoryFilteringFlagsEntryData `json:"data"`
}

func (AvatarStoreSubcategoryFilteringFlagsEntry) MasterfileEntry() {}

type AvatarStoreSubcategoryFilteringFlagsEntryData struct {
	TemplateID                           string                               `json:"templateId"`
	AvatarStoreSubcategoryFilteringFlags AvatarStoreSubcategoryFilteringFlags `json:"avatarStoreSubcategoryFilteringFlags"`
}

type BackgroundModeSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       BackgroundModeSettingsEntryData `json:"data"`
}

func (BackgroundModeSettingsEntry) MasterfileEntry() {}

type BackgroundModeSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	BackgroundModeSettings BackgroundModeSettings `json:"backgroundModeSettings"`
}

type BattleAnimationSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       BattleAnimationSettingsEntryData `json:"data"`
}

func (BattleAnimationSettingsEntry) MasterfileEntry() {}

type BattleAnimationSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	BattleAnimationSettings BattleAnimationSettings `json:"battleAnimationSettings"`
}

type BattleHubBadgeSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       BattleHubBadgeSettingsEntryData `json:"data"`
}

func (BattleHubBadgeSettingsEntry) MasterfileEntry() {}

type BattleHubBadgeSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	BattleHubBadgeSettings BattleHubBadgeSettings `json:"battleHubBadgeSettings"`
}

type BattleHubOrderSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       BattleHubOrderSettingsEntryData `json:"data"`
}

func (BattleHubOrderSettingsEntry) MasterfileEntry() {}

type BattleHubOrderSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	BattleHubOrderSettings BattleHubOrderSettings `json:"battleHubOrderSettings"`
}

type BattleInputBufferSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       BattleInputBufferSettingsEntryData `json:"data"`
}

func (BattleInputBufferSettingsEntry) MasterfileEntry() {}

type BattleInputBufferSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	BattleInputBufferSettings BattleInputBufferSettings `json:"battleInputBufferSettings"`
}

type BattlePartySettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       BattlePartySettingsEntryData `json:"data"`
}

func (BattlePartySettingsEntry) MasterfileEntry() {}

type BattlePartySettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	BattlePartySettings BattlePartySettings `json:"battlePartySettings"`
}

type BattleSettingsEntry struct {
	TemplateID string                  `json:"templateId"`
	Data       BattleSettingsEntryData `json:"data"`
}

func (BattleSettingsEntry) MasterfileEntry() {}

type BattleSettingsEntryData struct {
	TemplateID     string         `json:"templateId"`
	BattleSettings BattleSettings `json:"battleSettings"`
}

type BattleVisualSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       BattleVisualSettingsEntryData `json:"data"`
}

func (BattleVisualSettingsEntry) MasterfileEntry() {}

type BattleVisualSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	BattleVisualSettings BattleVisualSettings `json:"battleVisualSettings"`
}

type BelugaPokemonWhitelistEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       BelugaPokemonWhitelistEntryData `json:"data"`
}

func (BelugaPokemonWhitelistEntry) MasterfileEntry() {}

type BelugaPokemonWhitelistEntryData struct {
	TemplateID             string                 `json:"templateId"`
	BelugaPokemonWhitelist BelugaPokemonWhitelist `json:"belugaPokemonWhitelist"`
}

type BestFriendsPlusSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       BestFriendsPlusSettingsEntryData `json:"data"`
}

func (BestFriendsPlusSettingsEntry) MasterfileEntry() {}

type BestFriendsPlusSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	BestFriendsPlusSettings BestFriendsPlusSettings `json:"bestFriendsPlusSettings"`
}

type BreadBattleClientSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       BreadBattleClientSettingsEntryData `json:"data"`
}

func (BreadBattleClientSettingsEntry) MasterfileEntry() {}

type BreadBattleClientSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	BreadBattleClientSettings BreadBattleClientSettings `json:"breadBattleClientSettings"`
}

type BreadFeatureFlagsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       BreadFeatureFlagsEntryData `json:"data"`
}

func (BreadFeatureFlagsEntry) MasterfileEntry() {}

type BreadFeatureFlagsEntryData struct {
	TemplateID        string            `json:"templateId"`
	BreadFeatureFlags BreadFeatureFlags `json:"breadFeatureFlags"`
}

type BreadLobbyCounterSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       BreadLobbyCounterSettingsEntryData `json:"data"`
}

func (BreadLobbyCounterSettingsEntry) MasterfileEntry() {}

type BreadLobbyCounterSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	BreadLobbyCounterSettings BreadLobbyCounterSettings `json:"breadLobbyCounterSettings"`
}

type BreadLobbyUpdateSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       BreadLobbyUpdateSettingsEntryData `json:"data"`
}

func (BreadLobbyUpdateSettingsEntry) MasterfileEntry() {}

type BreadLobbyUpdateSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	BreadLobbyUpdateSettings BreadLobbyUpdateSettings `json:"breadLobbyUpdateSettings"`
}

type BreadMoveMappingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       BreadMoveMappingsEntryData `json:"data"`
}

func (BreadMoveMappingsEntry) MasterfileEntry() {}

type BreadMoveMappingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	BreadMoveMappings BreadMoveMappings `json:"breadMoveMappings"`
}

type BreadPokemonScalingSettingsEntry struct {
	TemplateID string                               `json:"templateId"`
	Data       BreadPokemonScalingSettingsEntryData `json:"data"`
}

func (BreadPokemonScalingSettingsEntry) MasterfileEntry() {}

type BreadPokemonScalingSettingsEntryData struct {
	TemplateID                  string                      `json:"templateId"`
	BreadPokemonScalingSettings BreadPokemonScalingSettings `json:"breadPokemonScalingSettings"`
}

type BreadSettingsEntry struct {
	TemplateID string                 `json:"templateId"`
	Data       BreadSettingsEntryData `json:"data"`
}

func (BreadSettingsEntry) MasterfileEntry() {}

type BreadSettingsEntryData struct {
	TemplateID    string        `json:"templateId"`
	BreadSettings BreadSettings `json:"breadSettings"`
}

type BuddyEncounterCameoSettingsEntry struct {
	TemplateID string                               `json:"templateId"`
	Data       BuddyEncounterCameoSettingsEntryData `json:"data"`
}

func (BuddyEncounterCameoSettingsEntry) MasterfileEntry() {}

type BuddyEncounterCameoSettingsEntryData struct {
	TemplateID                  string                      `json:"templateId"`
	BuddyEncounterCameoSettings BuddyEncounterCameoSettings `json:"buddyEncounterCameoSettings"`
}

type BuddyHungerSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       BuddyHungerSettingsEntryData `json:"data"`
}

func (BuddyHungerSettingsEntry) MasterfileEntry() {}

type BuddyHungerSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	BuddyHungerSettings BuddyHungerSettings `json:"buddyHungerSettings"`
}

type BuddyInteractionSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       BuddyInteractionSettingsEntryData `json:"data"`
}

func (BuddyInteractionSettingsEntry) MasterfileEntry() {}

type BuddyInteractionSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	BuddyInteractionSettings BuddyInteractionSettings `json:"buddyInteractionSettings"`
}

type BuddySwapSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       BuddySwapSettingsEntryData `json:"data"`
}

func (BuddySwapSettingsEntry) MasterfileEntry() {}

type BuddySwapSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	BuddySwapSettings BuddySwapSettings `json:"buddySwapSettings"`
}

type BuddyWalkSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       BuddyWalkSettingsEntryData `json:"data"`
}

func (BuddyWalkSettingsEntry) MasterfileEntry() {}

type BuddyWalkSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	BuddyWalkSettings BuddyWalkSettings `json:"buddyWalkSettings"`
}

type BulkHealingSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       BulkHealingSettingsEntryData `json:"data"`
}

func (BulkHealingSettingsEntry) MasterfileEntry() {}

type BulkHealingSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	BulkHealingSettings BulkHealingSettings `json:"bulkHealingSettings"`
}

type ButterflyCollectorSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       ButterflyCollectorSettingsEntryData `json:"data"`
}

func (ButterflyCollectorSettingsEntry) MasterfileEntry() {}

type ButterflyCollectorSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	ButterflyCollectorSettings ButterflyCollectorSettings `json:"butterflyCollectorSettings"`
}

type CampfireSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       CampfireSettingsEntryData `json:"data"`
}

func (CampfireSettingsEntry) MasterfileEntry() {}

type CampfireSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	CampfireSettings CampfireSettings `json:"campfireSettings"`
}

type CatchRadiusMultiplierSettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       CatchRadiusMultiplierSettingsEntryData `json:"data"`
}

func (CatchRadiusMultiplierSettingsEntry) MasterfileEntry() {}

type CatchRadiusMultiplierSettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	CatchRadiusMultiplierSettings CatchRadiusMultiplierSettings `json:"catchRadiusMultiplierSettings"`
}

type CombatCompetitiveSeasonSettingsEntry struct {
	TemplateID string                                   `json:"templateId"`
	Data       CombatCompetitiveSeasonSettingsEntryData `json:"data"`
}

func (CombatCompetitiveSeasonSettingsEntry) MasterfileEntry() {}

type CombatCompetitiveSeasonSettingsEntryData struct {
	TemplateID                      string                          `json:"templateId"`
	CombatCompetitiveSeasonSettings CombatCompetitiveSeasonSettings `json:"combatCompetitiveSeasonSettings"`
}

type CombatLeagueSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       CombatLeagueSettingsEntryData `json:"data"`
}

func (CombatLeagueSettingsEntry) MasterfileEntry() {}

type CombatLeagueSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	CombatLeagueSettings CombatLeagueSettings `json:"combatLeagueSettings"`
}

type CombatSettingsEntry struct {
	TemplateID string                  `json:"templateId"`
	Data       CombatSettingsEntryData `json:"data"`
}

func (CombatSettingsEntry) MasterfileEntry() {}

type CombatSettingsEntryData struct {
	TemplateID     string         `json:"templateId"`
	CombatSettings CombatSettings `json:"combatSettings"`
}

type CombatStatStageSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       CombatStatStageSettingsEntryData `json:"data"`
}

func (CombatStatStageSettingsEntry) MasterfileEntry() {}

type CombatStatStageSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	CombatStatStageSettings CombatStatStageSettings `json:"combatStatStageSettings"`
}

type ContestSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       ContestSettingsEntryData `json:"data"`
}

func (ContestSettingsEntry) MasterfileEntry() {}

type ContestSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	ContestSettings ContestSettings `json:"contestSettings"`
}

type ConversationSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       ConversationSettingsEntryData `json:"data"`
}

func (ConversationSettingsEntry) MasterfileEntry() {}

type ConversationSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	ConversationSettings ConversationSettings `json:"conversationSettings"`
}

type CrossGameSocialSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       CrossGameSocialSettingsEntryData `json:"data"`
}

func (CrossGameSocialSettingsEntry) MasterfileEntry() {}

type CrossGameSocialSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	CrossGameSocialSettings CrossGameSocialSettings `json:"crossGameSocialSettings"`
}

type DailyAdventureIncenseSettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       DailyAdventureIncenseSettingsEntryData `json:"data"`
}

func (DailyAdventureIncenseSettingsEntry) MasterfileEntry() {}

type DailyAdventureIncenseSettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	DailyAdventureIncenseSettings DailyAdventureIncenseSettings `json:"dailyAdventureIncenseSettings"`
}

type DeepLinkingSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       DeepLinkingSettingsEntryData `json:"data"`
}

func (DeepLinkingSettingsEntry) MasterfileEntry() {}

type DeepLinkingSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	DeepLinkingSettings DeepLinkingSettings `json:"deepLinkingSettings"`
}

type EggHatchImprovementsSettingsEntry struct {
	TemplateID string                                `json:"templateId"`
	Data       EggHatchImprovementsSettingsEntryData `json:"data"`
}

func (EggHatchImprovementsSettingsEntry) MasterfileEntry() {}

type EggHatchImprovementsSettingsEntryData struct {
	TemplateID                   string                       `json:"templateId"`
	EggHatchImprovementsSettings EggHatchImprovementsSettings `json:"eggHatchImprovementsSettings"`
}

type EncounterSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       EncounterSettingsEntryData `json:"data"`
}

func (EncounterSettingsEntry) MasterfileEntry() {}

type EncounterSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	EncounterSettings EncounterSettings `json:"encounterSettings"`
}

type ErrorReportingSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       ErrorReportingSettingsEntryData `json:"data"`
}

func (ErrorReportingSettingsEntry) MasterfileEntry() {}

type ErrorReportingSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	ErrorReportingSettings ErrorReportingSettings `json:"errorReportingSettings"`
}

type EventPlannerPopularNotificationSettingsEntry struct {
	TemplateID string                                           `json:"templateId"`
	Data       EventPlannerPopularNotificationSettingsEntryData `json:"data"`
}

func (EventPlannerPopularNotificationSettingsEntry) MasterfileEntry() {}

type EventPlannerPopularNotificationSettingsEntryData struct {
	TemplateID                              string                                  `json:"templateId"`
	EventPlannerPopularNotificationSettings EventPlannerPopularNotificationSettings `json:"eventPlannerPopularNotificationSettings"`
}

type EventServerSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       EventServerSettingsEntryData `json:"data"`
}

func (EventServerSettingsEntry) MasterfileEntry() {}

type EventServerSettingsEntryData struct {
	TemplateID string `json:"templateId"`
}

type ExternalAddressableAssetsSettingsEntry struct {
	TemplateID string                                     `json:"templateId"`
	Data       ExternalAddressableAssetsSettingsEntryData `json:"data"`
}

func (ExternalAddressableAssetsSettingsEntry) MasterfileEntry() {}

type ExternalAddressableAssetsSettingsEntryData struct {
	TemplateID                        string                            `json:"templateId"`
	ExternalAddressableAssetsSettings ExternalAddressableAssetsSettings `json:"externalAddressableAssetsSettings"`
}

type FeatureUnlockLevelSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       FeatureUnlockLevelSettingsEntryData `json:"data"`
}

func (FeatureUnlockLevelSettingsEntry) MasterfileEntry() {}

type FeatureUnlockLevelSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	FeatureUnlockLevelSettings FeatureUnlockLevelSettings `json:"featureUnlockLevelSettings"`
}

type GeotargetedQuestSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       GeotargetedQuestSettingsEntryData `json:"data"`
}

func (GeotargetedQuestSettingsEntry) MasterfileEntry() {}

type GeotargetedQuestSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	GeotargetedQuestSettings GeotargetedQuestSettings `json:"geotargetedQuestSettings"`
}

type GiftingSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       GiftingSettingsEntryData `json:"data"`
}

func (GiftingSettingsEntry) MasterfileEntry() {}

type GiftingSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	GiftingSettings GiftingSettings `json:"giftingSettings"`
}

type GuiSearchSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       GuiSearchSettingsEntryData `json:"data"`
}

func (GuiSearchSettingsEntry) MasterfileEntry() {}

type GuiSearchSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	GuiSearchSettings GuiSearchSettings `json:"guiSearchSettings"`
}

type GymBadgeSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       GymBadgeSettingsEntryData `json:"data"`
}

func (GymBadgeSettingsEntry) MasterfileEntry() {}

type GymBadgeSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	GymBadgeSettings GymBadgeSettings `json:"gymBadgeSettings"`
}

type HapticsSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       HapticsSettingsEntryData `json:"data"`
}

func (HapticsSettingsEntry) MasterfileEntry() {}

type HapticsSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	HapticsSettings HapticsSettings `json:"hapticsSettings"`
}

type IapSettingsEntry struct {
	TemplateID string               `json:"templateId"`
	Data       IapSettingsEntryData `json:"data"`
}

func (IapSettingsEntry) MasterfileEntry() {}

type IapSettingsEntryData struct {
	TemplateID  string      `json:"templateId"`
	IapSettings IapSettings `json:"iapSettings"`
}

type IbfcLightweightSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       IbfcLightweightSettingsEntryData `json:"data"`
}

func (IbfcLightweightSettingsEntry) MasterfileEntry() {}

type IbfcLightweightSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	IbfcLightweightSettings IbfcLightweightSettings `json:"ibfcLightweightSettings"`
}

type ImpressionTrackingSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       ImpressionTrackingSettingsEntryData `json:"data"`
}

func (ImpressionTrackingSettingsEntry) MasterfileEntry() {}

type ImpressionTrackingSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	ImpressionTrackingSettings ImpressionTrackingSettings `json:"impressionTrackingSettings"`
}

type InAppSurveySettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       InAppSurveySettingsEntryData `json:"data"`
}

func (InAppSurveySettingsEntry) MasterfileEntry() {}

type InAppSurveySettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	InAppSurveySettings InAppSurveySettings `json:"inAppSurveySettings"`
}

type IncidentPrioritySettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       IncidentPrioritySettingsEntryData `json:"data"`
}

func (IncidentPrioritySettingsEntry) MasterfileEntry() {}

type IncidentPrioritySettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	IncidentPrioritySettings IncidentPrioritySettings `json:"incidentPrioritySettings"`
}

type IncidentVisibilitySettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       IncidentVisibilitySettingsEntryData `json:"data"`
}

func (IncidentVisibilitySettingsEntry) MasterfileEntry() {}

type IncidentVisibilitySettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	IncidentVisibilitySettings IncidentVisibilitySettings `json:"incidentVisibilitySettings"`
}

type InventorySettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       InventorySettingsEntryData `json:"data"`
}

func (InventorySettingsEntry) MasterfileEntry() {}

type InventorySettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	InventorySettings InventorySettings `json:"inventorySettings"`
}

type IrisSocialSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       IrisSocialSettingsEntryData `json:"data"`
}

func (IrisSocialSettingsEntry) MasterfileEntry() {}

type IrisSocialSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	IrisSocialSettings IrisSocialSettings `json:"irisSocialSettings"`
}

type IrisSocialUxFunnelSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       IrisSocialUxFunnelSettingsEntryData `json:"data"`
}

func (IrisSocialUxFunnelSettingsEntry) MasterfileEntry() {}

type IrisSocialUxFunnelSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	IrisSocialUxFunnelSettings IrisSocialUxFunnelSettings `json:"irisSocialUxFunnelSettings"`
}

type ItemCurrencyValuesEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       ItemCurrencyValuesEntryData `json:"data"`
}

func (ItemCurrencyValuesEntry) MasterfileEntry() {}

type ItemCurrencyValuesEntryData struct {
	TemplateID         string             `json:"templateId"`
	ItemCurrencyValues ItemCurrencyValues `json:"itemCurrencyValues"`
}

type ItemInventoryUpdateSettingsEntry struct {
	TemplateID string                               `json:"templateId"`
	Data       ItemInventoryUpdateSettingsEntryData `json:"data"`
}

func (ItemInventoryUpdateSettingsEntry) MasterfileEntry() {}

type ItemInventoryUpdateSettingsEntryData struct {
	TemplateID                  string                      `json:"templateId"`
	ItemInventoryUpdateSettings ItemInventoryUpdateSettings `json:"itemInventoryUpdateSettings"`
}

type JoinRaidViaFriendListSettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       JoinRaidViaFriendListSettingsEntryData `json:"data"`
}

func (JoinRaidViaFriendListSettingsEntry) MasterfileEntry() {}

type JoinRaidViaFriendListSettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	JoinRaidViaFriendListSettings JoinRaidViaFriendListSettings `json:"joinRaidViaFriendListSettings"`
}

type LanguageSelectorSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       LanguageSelectorSettingsEntryData `json:"data"`
}

func (LanguageSelectorSettingsEntry) MasterfileEntry() {}

type LanguageSelectorSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	LanguageSelectorSettings LanguageSelectorSettings `json:"languageSelectorSettings"`
}

type LuckyPokemonSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       LuckyPokemonSettingsEntryData `json:"data"`
}

func (LuckyPokemonSettingsEntry) MasterfileEntry() {}

type LuckyPokemonSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	LuckyPokemonSettings LuckyPokemonSettings `json:"luckyPokemonSettings"`
}

type MainMenuChangesEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       MainMenuChangesEntryData `json:"data"`
}

func (MainMenuChangesEntry) MasterfileEntry() {}

type MainMenuChangesEntryData struct {
	TemplateID      string          `json:"templateId"`
	MainMenuChanges MainMenuChanges `json:"mainMenuChanges"`
}

type MapDisplaySettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       MapDisplaySettingsEntryData `json:"data"`
}

func (MapDisplaySettingsEntry) MasterfileEntry() {}

type MapDisplaySettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	MapDisplaySettings MapDisplaySettings `json:"mapDisplaySettings"`
}

type MapObjectsInteractionRangeSettingsEntry struct {
	TemplateID string                                      `json:"templateId"`
	Data       MapObjectsInteractionRangeSettingsEntryData `json:"data"`
}

func (MapObjectsInteractionRangeSettingsEntry) MasterfileEntry() {}

type MapObjectsInteractionRangeSettingsEntryData struct {
	TemplateID                         string                             `json:"templateId"`
	MapObjectsInteractionRangeSettings MapObjectsInteractionRangeSettings `json:"mapObjectsInteractionRangeSettings"`
}

type MegaEvoSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       MegaEvoSettingsEntryData `json:"data"`
}

func (MegaEvoSettingsEntry) MasterfileEntry() {}

type MegaEvoSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	MegaEvoSettings MegaEvoSettings `json:"megaEvoSettings"`
}

type MonodepthSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       MonodepthSettingsEntryData `json:"data"`
}

func (MonodepthSettingsEntry) MasterfileEntry() {}

type MonodepthSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	MonodepthSettings MonodepthSettings `json:"monodepthSettings"`
}

type MpSettingsEntry struct {
	TemplateID string              `json:"templateId"`
	Data       MpSettingsEntryData `json:"data"`
}

func (MpSettingsEntry) MasterfileEntry() {}

type MpSettingsEntryData struct {
	TemplateID string     `json:"templateId"`
	MpSettings MpSettings `json:"mpSettings"`
}

type NaturalArtDayNightFeatureSettingsEntry struct {
	TemplateID string                                     `json:"templateId"`
	Data       NaturalArtDayNightFeatureSettingsEntryData `json:"data"`
}

func (NaturalArtDayNightFeatureSettingsEntry) MasterfileEntry() {}

type NaturalArtDayNightFeatureSettingsEntryData struct {
	TemplateID                        string                            `json:"templateId"`
	NaturalArtDayNightFeatureSettings NaturalArtDayNightFeatureSettings `json:"naturalArtDayNightFeatureSettings"`
}

type NearbyPokemonSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       NearbyPokemonSettingsEntryData `json:"data"`
}

func (NearbyPokemonSettingsEntry) MasterfileEntry() {}

type NearbyPokemonSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	NearbyPokemonSettings NearbyPokemonSettings `json:"nearbyPokemonSettings"`
}

type NeutralAvatarSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       NeutralAvatarSettingsEntryData `json:"data"`
}

func (NeutralAvatarSettingsEntry) MasterfileEntry() {}

type NeutralAvatarSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	NeutralAvatarSettings NeutralAvatarSettings `json:"neutralAvatarSettings"`
}

type OnboardingSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       OnboardingSettingsEntryData `json:"data"`
}

func (OnboardingSettingsEntry) MasterfileEntry() {}

type OnboardingSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	OnboardingSettings OnboardingSettings `json:"onboardingSettings"`
}

type OptimizationsProtoEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       OptimizationsProtoEntryData `json:"data"`
}

func (OptimizationsProtoEntry) MasterfileEntry() {}

type OptimizationsProtoEntryData struct {
	TemplateID         string             `json:"templateId"`
	OptimizationsProto OptimizationsProto `json:"optimizationsProto"`
}

type PartyDarkLaunchSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       PartyDarkLaunchSettingsEntryData `json:"data"`
}

func (PartyDarkLaunchSettingsEntry) MasterfileEntry() {}

type PartyDarkLaunchSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	PartyDarkLaunchSettings PartyDarkLaunchSettings `json:"partyDarkLaunchSettings"`
}

type PartyIapBoostsSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       PartyIapBoostsSettingsEntryData `json:"data"`
}

func (PartyIapBoostsSettingsEntry) MasterfileEntry() {}

type PartyIapBoostsSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	PartyIapBoostsSettings PartyIapBoostsSettings `json:"partyIapBoostsSettings"`
}

type PartyRecommendationSettingsEntry struct {
	TemplateID string                               `json:"templateId"`
	Data       PartyRecommendationSettingsEntryData `json:"data"`
}

func (PartyRecommendationSettingsEntry) MasterfileEntry() {}

type PartyRecommendationSettingsEntryData struct {
	TemplateID                  string                      `json:"templateId"`
	PartyRecommendationSettings PartyRecommendationSettings `json:"partyRecommendationSettings"`
}

type PhotoSettingsEntry struct {
	TemplateID string                 `json:"templateId"`
	Data       PhotoSettingsEntryData `json:"data"`
}

func (PhotoSettingsEntry) MasterfileEntry() {}

type PhotoSettingsEntryData struct {
	TemplateID    string        `json:"templateId"`
	PhotoSettings PhotoSettings `json:"photoSettings"`
}

type PlannerSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       PlannerSettingsEntryData `json:"data"`
}

func (PlannerSettingsEntry) MasterfileEntry() {}

type PlannerSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	PlannerSettings PlannerSettings `json:"plannerSettings"`
}

type PlayerBonusSystemSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       PlayerBonusSystemSettingsEntryData `json:"data"`
}

func (PlayerBonusSystemSettingsEntry) MasterfileEntry() {}

type PlayerBonusSystemSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	PlayerBonusSystemSettings PlayerBonusSystemSettings `json:"playerBonusSystemSettings"`
}

type PlayerLevelEntry struct {
	TemplateID string               `json:"templateId"`
	Data       PlayerLevelEntryData `json:"data"`
}

func (PlayerLevelEntry) MasterfileEntry() {}

type PlayerLevelEntryData struct {
	TemplateID  string      `json:"templateId"`
	PlayerLevel PlayerLevel `json:"playerLevel"`
}

type PokeballThrowPropertySettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       PokeballThrowPropertySettingsEntryData `json:"data"`
}

func (PokeballThrowPropertySettingsEntry) MasterfileEntry() {}

type PokeballThrowPropertySettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	PokeballThrowPropertySettings PokeballThrowPropertySettings `json:"pokeballThrowPropertySettings"`
}

type PokecoinPurchaseDisplayGmtEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       PokecoinPurchaseDisplayGmtEntryData `json:"data"`
}

func (PokecoinPurchaseDisplayGmtEntry) MasterfileEntry() {}

type PokecoinPurchaseDisplayGmtEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	PokecoinPurchaseDisplayGmt PokecoinPurchaseDisplayGmt `json:"pokecoinPurchaseDisplayGmt"`
}

type PokedexCategoriesSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       PokedexCategoriesSettingsEntryData `json:"data"`
}

func (PokedexCategoriesSettingsEntry) MasterfileEntry() {}

type PokedexCategoriesSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	PokedexCategoriesSettings PokedexCategoriesSettings `json:"pokedexCategoriesSettings"`
}

type PokedexSizeStatsSystemSettingsEntry struct {
	TemplateID string                                  `json:"templateId"`
	Data       PokedexSizeStatsSystemSettingsEntryData `json:"data"`
}

func (PokedexSizeStatsSystemSettingsEntry) MasterfileEntry() {}

type PokedexSizeStatsSystemSettingsEntryData struct {
	TemplateID                     string                         `json:"templateId"`
	PokedexSizeStatsSystemSettings PokedexSizeStatsSystemSettings `json:"pokedexSizeStatsSystemSettings"`
}

type Pokedexv2featureFlagsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       Pokedexv2featureFlagsEntryData `json:"data"`
}

func (Pokedexv2featureFlagsEntry) MasterfileEntry() {}

type Pokedexv2featureFlagsEntryData struct {
	TemplateID            string                `json:"templateId"`
	Pokedexv2featureFlags Pokedexv2featureFlags `json:"pokedexv2FeatureFlags"`
}

type PokedexV2settingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       PokedexV2settingsEntryData `json:"data"`
}

func (PokedexV2settingsEntry) MasterfileEntry() {}

type PokedexV2settingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	PokedexV2settings PokedexV2settings `json:"pokedexV2Settings"`
}

type PokemonFxSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       PokemonFxSettingsEntryData `json:"data"`
}

func (PokemonFxSettingsEntry) MasterfileEntry() {}

type PokemonFxSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	PokemonFxSettings PokemonFxSettings `json:"pokemonFxSettings"`
}

type PokemonHomeSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       PokemonHomeSettingsEntryData `json:"data"`
}

func (PokemonHomeSettingsEntry) MasterfileEntry() {}

type PokemonHomeSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	PokemonHomeSettings PokemonHomeSettings `json:"pokemonHomeSettings"`
}

type PokemonTagSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       PokemonTagSettingsEntryData `json:"data"`
}

func (PokemonTagSettingsEntry) MasterfileEntry() {}

type PokemonTagSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	PokemonTagSettings PokemonTagSettings `json:"pokemonTagSettings"`
}

type PopupControlSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       PopupControlSettingsEntryData `json:"data"`
}

func (PopupControlSettingsEntry) MasterfileEntry() {}

type PopupControlSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	PopupControlSettings PopupControlSettings `json:"popupControlSettings"`
}

type PostcardCollectionSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       PostcardCollectionSettingsEntryData `json:"data"`
}

func (PostcardCollectionSettingsEntry) MasterfileEntry() {}

type PostcardCollectionSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	PostcardCollectionSettings PostcardCollectionSettings `json:"postcardCollectionSettings"`
}

type PowerUpPokestopsSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       PowerUpPokestopsSettingsEntryData `json:"data"`
}

func (PowerUpPokestopsSettingsEntry) MasterfileEntry() {}

type PowerUpPokestopsSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	PowerUpPokestopsSettings PowerUpPokestopsSettings `json:"powerUpPokestopsSettings"`
}

type PrimalEvoSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       PrimalEvoSettingsEntryData `json:"data"`
}

func (PrimalEvoSettingsEntry) MasterfileEntry() {}

type PrimalEvoSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	PrimalEvoSettings PrimalEvoSettings `json:"primalEvoSettings"`
}

type PtcOauthSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       PtcOauthSettingsEntryData `json:"data"`
}

func (PtcOauthSettingsEntry) MasterfileEntry() {}

type PtcOauthSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	PtcOauthSettings PtcOauthSettings `json:"ptcOauthSettings"`
}

type QuestDialogueInboxSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       QuestDialogueInboxSettingsEntryData `json:"data"`
}

func (QuestDialogueInboxSettingsEntry) MasterfileEntry() {}

type QuestDialogueInboxSettingsEntryData struct {
	TemplateID string `json:"templateId"`
}

type QuickInviteSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       QuickInviteSettingsEntryData `json:"data"`
}

func (QuickInviteSettingsEntry) MasterfileEntry() {}

type QuickInviteSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	QuickInviteSettings QuickInviteSettings `json:"quickInviteSettings"`
}

type RaidEntryCostSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       RaidEntryCostSettingsEntryData `json:"data"`
}

func (RaidEntryCostSettingsEntry) MasterfileEntry() {}

type RaidEntryCostSettingsEntryData struct {
	TemplateID string `json:"templateId"`
}

type RaidLobbyCounterSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       RaidLobbyCounterSettingsEntryData `json:"data"`
}

func (RaidLobbyCounterSettingsEntry) MasterfileEntry() {}

type RaidLobbyCounterSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	RaidLobbyCounterSettings RaidLobbyCounterSettings `json:"raidLobbyCounterSettings"`
}

type RaidSettingsEntry struct {
	TemplateID string                `json:"templateId"`
	Data       RaidSettingsEntryData `json:"data"`
}

func (RaidSettingsEntry) MasterfileEntry() {}

type RaidSettingsEntryData struct {
	TemplateID   string       `json:"templateId"`
	RaidSettings RaidSettings `json:"raidSettings"`
}

type ReferralSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       ReferralSettingsEntryData `json:"data"`
}

func (ReferralSettingsEntry) MasterfileEntry() {}

type ReferralSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	ReferralSettings ReferralSettings `json:"referralSettings"`
}

type RemoteTradeSettingsEntry struct {
	TemplateID string                       `json:"templateId"`
	Data       RemoteTradeSettingsEntryData `json:"data"`
}

func (RemoteTradeSettingsEntry) MasterfileEntry() {}

type RemoteTradeSettingsEntryData struct {
	TemplateID          string              `json:"templateId"`
	RemoteTradeSettings RemoteTradeSettings `json:"remoteTradeSettings"`
}

type RouteBadgeSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       RouteBadgeSettingsEntryData `json:"data"`
}

func (RouteBadgeSettingsEntry) MasterfileEntry() {}

type RouteBadgeSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	RouteBadgeSettings RouteBadgeSettings `json:"routeBadgeSettings"`
}

type RouteCreationSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       RouteCreationSettingsEntryData `json:"data"`
}

func (RouteCreationSettingsEntry) MasterfileEntry() {}

type RouteCreationSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	RouteCreationSettings RouteCreationSettings `json:"routeCreationSettings"`
}

type RouteDiscoverySettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       RouteDiscoverySettingsEntryData `json:"data"`
}

func (RouteDiscoverySettingsEntry) MasterfileEntry() {}

type RouteDiscoverySettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	RouteDiscoverySettings RouteDiscoverySettings `json:"routeDiscoverySettings"`
}

type RoutePinSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       RoutePinSettingsEntryData `json:"data"`
}

func (RoutePinSettingsEntry) MasterfileEntry() {}

type RoutePinSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	RoutePinSettings RoutePinSettings `json:"routePinSettings"`
}

type RoutePlaySettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       RoutePlaySettingsEntryData `json:"data"`
}

func (RoutePlaySettingsEntry) MasterfileEntry() {}

type RoutePlaySettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	RoutePlaySettings RoutePlaySettings `json:"routePlaySettings"`
}

type RoutesNearbyNotifSettingsEntry struct {
	TemplateID string                             `json:"templateId"`
	Data       RoutesNearbyNotifSettingsEntryData `json:"data"`
}

func (RoutesNearbyNotifSettingsEntry) MasterfileEntry() {}

type RoutesNearbyNotifSettingsEntryData struct {
	TemplateID                string                    `json:"templateId"`
	RoutesNearbyNotifSettings RoutesNearbyNotifSettings `json:"routesNearbyNotifSettings"`
}

type RoutesPartyPlayInteropSettingsEntry struct {
	TemplateID string                                  `json:"templateId"`
	Data       RoutesPartyPlayInteropSettingsEntryData `json:"data"`
}

func (RoutesPartyPlayInteropSettingsEntry) MasterfileEntry() {}

type RoutesPartyPlayInteropSettingsEntryData struct {
	TemplateID                     string                         `json:"templateId"`
	RoutesPartyPlayInteropSettings RoutesPartyPlayInteropSettings `json:"routesPartyPlayInteropSettings"`
}

type RouteStampCategorySettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       RouteStampCategorySettingsEntryData `json:"data"`
}

func (RouteStampCategorySettingsEntry) MasterfileEntry() {}

type RouteStampCategorySettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	RouteStampCategorySettings RouteStampCategorySettings `json:"routeStampCategorySettings"`
}

type SharedFusionSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       SharedFusionSettingsEntryData `json:"data"`
}

func (SharedFusionSettingsEntry) MasterfileEntry() {}

type SharedFusionSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	SharedFusionSettings SharedFusionSettings `json:"sharedFusionSettings"`
}

type SharedMoveSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       SharedMoveSettingsEntryData `json:"data"`
}

func (SharedMoveSettingsEntry) MasterfileEntry() {}

type SharedMoveSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	SharedMoveSettings SharedMoveSettings `json:"sharedMoveSettings"`
}

type SoftSfidaSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       SoftSfidaSettingsEntryData `json:"data"`
}

func (SoftSfidaSettingsEntry) MasterfileEntry() {}

type SoftSfidaSettingsEntryData struct {
	TemplateID string `json:"templateId"`
}

type SourdoughMoveMappingSettingsEntry struct {
	TemplateID string                                `json:"templateId"`
	Data       SourdoughMoveMappingSettingsEntryData `json:"data"`
}

func (SourdoughMoveMappingSettingsEntry) MasterfileEntry() {}

type SourdoughMoveMappingSettingsEntryData struct {
	TemplateID                   string                       `json:"templateId"`
	SourdoughMoveMappingSettings SourdoughMoveMappingSettings `json:"sourdoughMoveMappingSettings"`
}

type SpecialEggSettingsEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       SpecialEggSettingsEntryData `json:"data"`
}

func (SpecialEggSettingsEntry) MasterfileEntry() {}

type SpecialEggSettingsEntryData struct {
	TemplateID         string             `json:"templateId"`
	SpecialEggSettings SpecialEggSettings `json:"specialEggSettings"`
}

type SpecialResearchVisualRefreshSettingsEntry struct {
	TemplateID string                                        `json:"templateId"`
	Data       SpecialResearchVisualRefreshSettingsEntryData `json:"data"`
}

func (SpecialResearchVisualRefreshSettingsEntry) MasterfileEntry() {}

type SpecialResearchVisualRefreshSettingsEntryData struct {
	TemplateID string `json:"templateId"`
}

type SponsoredGeofenceGiftSettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       SponsoredGeofenceGiftSettingsEntryData `json:"data"`
}

func (SponsoredGeofenceGiftSettingsEntry) MasterfileEntry() {}

type SponsoredGeofenceGiftSettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	SponsoredGeofenceGiftSettings SponsoredGeofenceGiftSettings `json:"sponsoredGeofenceGiftSettings"`
}

type SquashSettingsEntry struct {
	TemplateID string                  `json:"templateId"`
	Data       SquashSettingsEntryData `json:"data"`
}

func (SquashSettingsEntry) MasterfileEntry() {}

type SquashSettingsEntryData struct {
	TemplateID     string         `json:"templateId"`
	SquashSettings SquashSettings `json:"squashSettings"`
}

type StampCollectionSettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       StampCollectionSettingsEntryData `json:"data"`
}

func (StampCollectionSettingsEntry) MasterfileEntry() {}

type StampCollectionSettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	StampCollectionSettings StampCollectionSettings `json:"stampCollectionSettings"`
}

type StationedPokemonTableSettingsEntry struct {
	TemplateID string                                 `json:"templateId"`
	Data       StationedPokemonTableSettingsEntryData `json:"data"`
}

func (StationedPokemonTableSettingsEntry) MasterfileEntry() {}

type StationedPokemonTableSettingsEntryData struct {
	TemplateID                    string                        `json:"templateId"`
	StationedPokemonTableSettings StationedPokemonTableSettings `json:"stationedPokemonTableSettings"`
}

type StickerCategorySettingsEntry struct {
	TemplateID string                           `json:"templateId"`
	Data       StickerCategorySettingsEntryData `json:"data"`
}

func (StickerCategorySettingsEntry) MasterfileEntry() {}

type StickerCategorySettingsEntryData struct {
	TemplateID              string                  `json:"templateId"`
	StickerCategorySettings StickerCategorySettings `json:"stickerCategorySettings"`
}

type StyleShopSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       StyleShopSettingsEntryData `json:"data"`
}

func (StyleShopSettingsEntry) MasterfileEntry() {}

type StyleShopSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	StyleShopSettings StyleShopSettings `json:"styleShopSettings"`
}

type TicketGiftingSettingsEntry struct {
	TemplateID string                         `json:"templateId"`
	Data       TicketGiftingSettingsEntryData `json:"data"`
}

func (TicketGiftingSettingsEntry) MasterfileEntry() {}

type TicketGiftingSettingsEntryData struct {
	TemplateID            string                `json:"templateId"`
	TicketGiftingSettings TicketGiftingSettings `json:"ticketGiftingSettings"`
}

type TodayViewSettingsEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       TodayViewSettingsEntryData `json:"data"`
}

func (TodayViewSettingsEntry) MasterfileEntry() {}

type TodayViewSettingsEntryData struct {
	TemplateID        string            `json:"templateId"`
	TodayViewSettings TodayViewSettings `json:"todayViewSettings"`
}

type TutorialSettingsEntry struct {
	TemplateID string                    `json:"templateId"`
	Data       TutorialSettingsEntryData `json:"data"`
}

func (TutorialSettingsEntry) MasterfileEntry() {}

type TutorialSettingsEntryData struct {
	TemplateID       string           `json:"templateId"`
	TutorialSettings TutorialSettings `json:"tutorialSettings"`
}

type UsernameSuggestionSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       UsernameSuggestionSettingsEntryData `json:"data"`
}

func (UsernameSuggestionSettingsEntry) MasterfileEntry() {}

type UsernameSuggestionSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	UsernameSuggestionSettings UsernameSuggestionSettings `json:"usernameSuggestionSettings"`
}

type VerboseLogCombatSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       VerboseLogCombatSettingsEntryData `json:"data"`
}

func (VerboseLogCombatSettingsEntry) MasterfileEntry() {}

type VerboseLogCombatSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	VerboseLogCombatSettings VerboseLogCombatSettings `json:"verboseLogCombatSettings"`
}

type VerboseLogRaidSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       VerboseLogRaidSettingsEntryData `json:"data"`
}

func (VerboseLogRaidSettingsEntry) MasterfileEntry() {}

type VerboseLogRaidSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	VerboseLogRaidSettings VerboseLogRaidSettings `json:"verboseLogRaidSettings"`
}

type VistaGeneralSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       VistaGeneralSettingsEntryData `json:"data"`
}

func (VistaGeneralSettingsEntry) MasterfileEntry() {}

type VistaGeneralSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	VistaGeneralSettings VistaGeneralSettings `json:"vistaGeneralSettings"`
}

type VnextBattleConfigEntry struct {
	TemplateID string                     `json:"templateId"`
	Data       VnextBattleConfigEntryData `json:"data"`
}

func (VnextBattleConfigEntry) MasterfileEntry() {}

type VnextBattleConfigEntryData struct {
	TemplateID        string            `json:"templateId"`
	VnextBattleConfig VnextBattleConfig `json:"vnextBattleConfig"`
}

type VsSeekerClientSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       VsSeekerClientSettingsEntryData `json:"data"`
}

func (VsSeekerClientSettingsEntry) MasterfileEntry() {}

type VsSeekerClientSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	VsSeekerClientSettings VsSeekerClientSettings `json:"vsSeekerClientSettings"`
}

type VsSeekerScheduleSettingsEntry struct {
	TemplateID string                            `json:"templateId"`
	Data       VsSeekerScheduleSettingsEntryData `json:"data"`
}

func (VsSeekerScheduleSettingsEntry) MasterfileEntry() {}

type VsSeekerScheduleSettingsEntryData struct {
	TemplateID               string                   `json:"templateId"`
	VsSeekerScheduleSettings VsSeekerScheduleSettings `json:"vsSeekerScheduleSettings"`
}

type WeatherBonusSettingsEntry struct {
	TemplateID string                        `json:"templateId"`
	Data       WeatherBonusSettingsEntryData `json:"data"`
}

func (WeatherBonusSettingsEntry) MasterfileEntry() {}

type WeatherBonusSettingsEntryData struct {
	TemplateID           string               `json:"templateId"`
	WeatherBonusSettings WeatherBonusSettings `json:"weatherBonusSettings"`
}

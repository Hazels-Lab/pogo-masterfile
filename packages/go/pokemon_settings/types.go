// Generated from Pokémon GO masterfile — group "pokemonSettings".

package pokemon_settings

type PokemonSettingsBuddyWalkedMegaEnergyAwards struct {
	MegaEnergyAwardAmount uint64 `json:"megaEnergyAwardAmount"`
	MegaPokemonId         string `json:"megaPokemonId"`
}

type PokemonSettingsBuddyWalkedMegaEnergyAwardsV2 struct {
	GenderRequirement     string `json:"genderRequirement"`
	MegaEnergyAwardAmount uint64 `json:"megaEnergyAwardAmount"`
	MegaPokemonId         string `json:"megaPokemonId"`
}

type PokemonSettingsCamera struct {
	CylinderGroundM   *float64 `json:"cylinderGroundM,omitempty"`
	CylinderHeightM   *float64 `json:"cylinderHeightM,omitempty"`
	CylinderRadiusM   *float64 `json:"cylinderRadiusM,omitempty"`
	DiskRadiusM       *float64 `json:"diskRadiusM,omitempty"`
	ShoulderModeScale *float64 `json:"shoulderModeScale,omitempty"`
}

type PokemonSettingsEncounter struct {
	AttackProbability          *float64 `json:"attackProbability,omitempty"`
	AttackTimerS               *float64 `json:"attackTimerS,omitempty"`
	BonusCandyCaptureReward    *uint64  `json:"bonusCandyCaptureReward,omitempty"`
	BonusStardustCaptureReward *uint64  `json:"bonusStardustCaptureReward,omitempty"`
	BonusXlCandyCaptureReward  *uint64  `json:"bonusXlCandyCaptureReward,omitempty"`
	CameraDistance             *float64 `json:"cameraDistance,omitempty"`
	CollisionHeadRadiusM       *float64 `json:"collisionHeadRadiusM,omitempty"`
	CollisionHeightM           *float64 `json:"collisionHeightM,omitempty"`
	CollisionRadiusM           *float64 `json:"collisionRadiusM,omitempty"`
	DodgeDistance              *float64 `json:"dodgeDistance,omitempty"`
	DodgeDurationS             *float64 `json:"dodgeDurationS,omitempty"`
	DodgeProbability           *float64 `json:"dodgeProbability,omitempty"`
	JumpTimeS                  *float64 `json:"jumpTimeS,omitempty"`
	MaxPokemonActionFrequencyS *float64 `json:"maxPokemonActionFrequencyS,omitempty"`
	MinPokemonActionFrequencyS *float64 `json:"minPokemonActionFrequencyS,omitempty"`
	MovementTimerS             *float64 `json:"movementTimerS,omitempty"`
	MovementType               *string  `json:"movementType,omitempty"`
	ShadowAttackProbability    *float64 `json:"shadowAttackProbability,omitempty"`
	ShadowBaseCaptureRate      *float64 `json:"shadowBaseCaptureRate,omitempty"`
	ShadowDodgeProbability     *float64 `json:"shadowDodgeProbability,omitempty"`
}

type PokemonSettingsQuestDisplay struct {
	QuestRequirementTemplateId string `json:"questRequirementTemplateId"`
}

type PokemonSettingsEvolutionBranch struct {
	CandyCost                              *uint64                         `json:"candyCost,omitempty"`
	CandyCostPurified                      *uint64                         `json:"candyCostPurified,omitempty"`
	Evolution                              *string                         `json:"evolution,omitempty"`
	EvolutionItemRequirement               *string                         `json:"evolutionItemRequirement,omitempty"`
	EvolutionItemRequirementCost           *uint64                         `json:"evolutionItemRequirementCost,omitempty"`
	EvolutionLikelihoodWeight              *uint64                         `json:"evolutionLikelihoodWeight,omitempty"`
	EvolutionMoveRequirement               *string                         `json:"evolutionMoveRequirement,omitempty"`
	Form                                   *string                         `json:"form,omitempty"`
	GenderRequirement                      *string                         `json:"genderRequirement,omitempty"`
	KmBuddyDistanceRequirement             *float64                        `json:"kmBuddyDistanceRequirement,omitempty"`
	LureItemRequirement                    *string                         `json:"lureItemRequirement,omitempty"`
	MustBeBuddy                            *bool                           `json:"mustBeBuddy,omitempty"`
	NoCandyCostViaTrade                    *bool                           `json:"noCandyCostViaTrade,omitempty"`
	OnlyDaytime                            *bool                           `json:"onlyDaytime,omitempty"`
	OnlyDuskPeriod                         *bool                           `json:"onlyDuskPeriod,omitempty"`
	OnlyFullMoon                           *bool                           `json:"onlyFullMoon,omitempty"`
	OnlyNighttime                          *bool                           `json:"onlyNighttime,omitempty"`
	OnlyUpsideDown                         *bool                           `json:"onlyUpsideDown,omitempty"`
	Priority                               *uint64                         `json:"priority,omitempty"`
	QuestDisplay                           *[1]PokemonSettingsQuestDisplay `json:"questDisplay,omitempty"`
	TemporaryEvolution                     *string                         `json:"temporaryEvolution,omitempty"`
	TemporaryEvolutionEnergyCost           *uint64                         `json:"temporaryEvolutionEnergyCost,omitempty"`
	TemporaryEvolutionEnergyCostSubsequent *uint64                         `json:"temporaryEvolutionEnergyCostSubsequent,omitempty"`
}

type PokemonSettingsExclusiveKeyItem struct {
	Count uint64 `json:"count"`
	Item  string `json:"item"`
}

type PokemonSettingsLocationCardSettings struct {
	BasePokemonLocationCard      string `json:"basePokemonLocationCard"`
	ComponentPokemonLocationCard string `json:"componentPokemonLocationCard"`
	FusionPokemonLocationCard    string `json:"fusionPokemonLocationCard"`
}

type PokemonSettingsComponentPokemonSettings struct {
	ComponentCandyCost   *uint64                                 `json:"componentCandyCost,omitempty"`
	FamilyId             string                                  `json:"familyId"`
	FormChangeType       string                                  `json:"formChangeType"`
	LocationCardSettings *[1]PokemonSettingsLocationCardSettings `json:"locationCardSettings,omitempty"`
	PokedexId            string                                  `json:"pokedexId"`
}

type PokemonSettingsMaxMoves struct {
	MoveLevel string `json:"moveLevel"`
	MoveType  string `json:"moveType"`
}

type PokemonSettingsFormChangeBonusAttributes struct {
	BreadMode      *string                     `json:"breadMode,omitempty"`
	ClearBreadMode *bool                       `json:"clearBreadMode,omitempty"`
	MaxMoves       *[1]PokemonSettingsMaxMoves `json:"maxMoves,omitempty"`
	TargetForm     string                      `json:"targetForm"`
}

type PokemonSettingsLocationCardSettingsV2 struct {
	ExistingLocationCard    string `json:"existingLocationCard"`
	ReplacementLocationCard string `json:"replacementLocationCard"`
}

type PokemonSettingsCinematicMoves struct {
	ExistingMoves    *[1]string `json:"existingMoves,omitempty"`
	ReplacementMoves []string   `json:"replacementMoves"`
}

type PokemonSettingsMoveReassignment struct {
	CinematicMoves [1]PokemonSettingsCinematicMoves `json:"cinematicMoves"`
}

type PokemonSettingsRequiredBreadMoves struct {
	MoveLevel string    `json:"moveLevel"`
	MoveTypes [1]string `json:"moveTypes"`
}

type PokemonSettingsRequiredCinematicMoves struct {
	RequiredMoves [1]string `json:"requiredMoves"`
}

type PokemonSettingsFormChange struct {
	AvailableForm             []string                                     `json:"availableForm"`
	CandyCost                 *uint64                                      `json:"candyCost,omitempty"`
	ComponentPokemonSettings  *PokemonSettingsComponentPokemonSettings     `json:"componentPokemonSettings,omitempty"`
	FormChangeBonusAttributes *[1]PokemonSettingsFormChangeBonusAttributes `json:"formChangeBonusAttributes,omitempty"`
	Item                      *string                                      `json:"item,omitempty"`
	ItemCostCount             *uint64                                      `json:"itemCostCount,omitempty"`
	LocationCardSettings      *[1]PokemonSettingsLocationCardSettingsV2    `json:"locationCardSettings,omitempty"`
	MoveReassignment          *PokemonSettingsMoveReassignment             `json:"moveReassignment,omitempty"`
	Priority                  *uint64                                      `json:"priority,omitempty"`
	RequiredBreadMoves        *[1]PokemonSettingsRequiredBreadMoves        `json:"requiredBreadMoves,omitempty"`
	RequiredCinematicMoves    *[1]PokemonSettingsRequiredCinematicMoves    `json:"requiredCinematicMoves,omitempty"`
	StardustCost              *uint64                                      `json:"stardustCost,omitempty"`
}

type PokemonSettingsAlternateToDefaultIbfcSettings struct {
	AnimationDurationTurns uint64  `json:"animationDurationTurns"`
	AnimationPlayPoint     string  `json:"animationPlayPoint"`
	CurrentMove            *string `json:"currentMove,omitempty"`
	IbfcVfxKey             string  `json:"ibfcVfxKey"`
	ReplacementMove        *string `json:"replacementMove,omitempty"`
}

type PokemonSettingsIbfc struct {
	AlternateForm                  *string                                        `json:"alternateForm,omitempty"`
	AlternateToDefaultIbfcSettings *PokemonSettingsAlternateToDefaultIbfcSettings `json:"alternateToDefaultIbfcSettings,omitempty"`
	CombatEnable                   *bool                                          `json:"combatEnable,omitempty"`
	DefaultForm                    *string                                        `json:"defaultForm,omitempty"`
	DefaultToAlternateIbfcSettings *PokemonSettingsAlternateToDefaultIbfcSettings `json:"defaultToAlternateIbfcSettings,omitempty"`
}

type PokemonSettingsShadow struct {
	PurificationCandyNeeded    uint64 `json:"purificationCandyNeeded"`
	PurificationStardustNeeded uint64 `json:"purificationStardustNeeded"`
	PurifiedChargeMove         string `json:"purifiedChargeMove"`
	ShadowChargeMove           string `json:"shadowChargeMove"`
}

type PokemonSettingsSizeSettings struct {
	DisablePokedexRecordDisplayForForms bool    `json:"disablePokedexRecordDisplayForForms"`
	MLowerBound                         float64 `json:"mLowerBound"`
	MUpperBound                         float64 `json:"mUpperBound"`
	XlScaleMultiplier                   float64 `json:"xlScaleMultiplier"`
	XlUpperBound                        float64 `json:"xlUpperBound"`
	XsLowerBound                        float64 `json:"xsLowerBound"`
	XsScaleMultiplier                   float64 `json:"xsScaleMultiplier"`
	XxlScaleMultiplier                  float64 `json:"xxlScaleMultiplier"`
	XxlUpperBound                       float64 `json:"xxlUpperBound"`
	XxsLowerBound                       float64 `json:"xxsLowerBound"`
	XxsScaleMultiplier                  float64 `json:"xxsScaleMultiplier"`
}

type PokemonSettingsStats struct {
	BaseAttack  uint64 `json:"baseAttack"`
	BaseDefense uint64 `json:"baseDefense"`
	BaseStamina uint64 `json:"baseStamina"`
}

type PokemonSettingsCameraV2 struct {
	CylinderGroundM *float64 `json:"cylinderGroundM,omitempty"`
	CylinderHeightM *float64 `json:"cylinderHeightM,omitempty"`
	CylinderRadiusM *float64 `json:"cylinderRadiusM,omitempty"`
}

type PokemonSettingsTempEvoOverrides struct {
	AverageHeightM         *float64                 `json:"averageHeightM,omitempty"`
	AverageWeightKg        *float64                 `json:"averageWeightKg,omitempty"`
	BuddyOffsetFemale      *[3]float64              `json:"buddyOffsetFemale,omitempty"`
	BuddyOffsetMale        *[3]float64              `json:"buddyOffsetMale,omitempty"`
	BuddyPortraitOffset    *[3]float64              `json:"buddyPortraitOffset,omitempty"`
	BuddyPortraitRotation  *[3]float64              `json:"buddyPortraitRotation,omitempty"`
	Camera                 *PokemonSettingsCameraV2 `json:"camera,omitempty"`
	ModelHeight            *float64                 `json:"modelHeight,omitempty"`
	ModelScaleV2           *float64                 `json:"modelScaleV2,omitempty"`
	RaidBossDistanceOffset *float64                 `json:"raidBossDistanceOffset,omitempty"`
	Stats                  *PokemonSettingsStats    `json:"stats,omitempty"`
	TempEvoId              *string                  `json:"tempEvoId,omitempty"`
	TypeOverride1          *string                  `json:"typeOverride1,omitempty"`
	TypeOverride2          *string                  `json:"typeOverride2,omitempty"`
}

type PokemonSettingsThirdMove struct {
	CandyToUnlock    uint64  `json:"candyToUnlock"`
	StardustToUnlock *uint64 `json:"stardustToUnlock,omitempty"`
}

type PokemonSettings struct {
	AllowNoevolveEvolution            *[1]string                        `json:"allowNoevolveEvolution,omitempty"`
	AnimationTime                     []float64                         `json:"animationTime,omitempty"`
	BreadTierGroup                    *string                           `json:"breadTierGroup,omitempty"`
	BuddyGroupNumber                  *uint64                           `json:"buddyGroupNumber,omitempty"`
	BuddyOffsetFemale                 *[3]float64                       `json:"buddyOffsetFemale,omitempty"`
	BuddyOffsetMale                   *[3]float64                       `json:"buddyOffsetMale,omitempty"`
	BuddyPortraitOffset               *[3]float64                       `json:"buddyPortraitOffset,omitempty"`
	BuddyPortraitRotation             *[3]float64                       `json:"buddyPortraitRotation,omitempty"`
	BuddyScale                        *float64                          `json:"buddyScale,omitempty"`
	BuddySize                         *string                           `json:"buddySize,omitempty"`
	BuddyWalkedMegaEnergyAward        *uint64                           `json:"buddyWalkedMegaEnergyAward,omitempty"`
	BuddyWalkedMegaEnergyAwards       []any                             `json:"buddyWalkedMegaEnergyAwards,omitempty"`
	Camera                            PokemonSettingsCamera             `json:"camera"`
	CandyToEvolve                     *uint64                           `json:"candyToEvolve,omitempty"`
	CinematicMoves                    []string                          `json:"cinematicMoves,omitempty"`
	CombatDefaultCameraAngle          *[3]float64                       `json:"combatDefaultCameraAngle,omitempty"`
	CombatOpponentFocusCameraAngle    *[3]float64                       `json:"combatOpponentFocusCameraAngle,omitempty"`
	CombatPlayerFocusCameraAngle      *[3]float64                       `json:"combatPlayerFocusCameraAngle,omitempty"`
	CombatPlayerPokemonPositionOffset *[3]float64                       `json:"combatPlayerPokemonPositionOffset,omitempty"`
	CombatShoulderCameraAngle         *[3]float64                       `json:"combatShoulderCameraAngle,omitempty"`
	DisableTransferToPokemonHome      *bool                             `json:"disableTransferToPokemonHome,omitempty"`
	EliteCinematicMove                []string                          `json:"eliteCinematicMove,omitempty"`
	EliteQuickMove                    []string                          `json:"eliteQuickMove,omitempty"`
	Encounter                         PokemonSettingsEncounter          `json:"encounter"`
	EvolutionBranch                   []PokemonSettingsEvolutionBranch  `json:"evolutionBranch,omitempty"`
	EvolutionIds                      []string                          `json:"evolutionIds,omitempty"`
	EvolutionPips                     *uint64                           `json:"evolutionPips,omitempty"`
	ExclusiveKeyItem                  *PokemonSettingsExclusiveKeyItem  `json:"exclusiveKeyItem,omitempty"`
	FamilyId                          string                            `json:"familyId"`
	Form                              *string                           `json:"form,omitempty"`
	FormChange                        []PokemonSettingsFormChange       `json:"formChange,omitempty"`
	HeightStdDev                      float64                           `json:"heightStdDev"`
	Ibfc                              PokemonSettingsIbfc               `json:"ibfc"`
	IrisFlyingHeightLimitMeters       *float64                          `json:"irisFlyingHeightLimitMeters,omitempty"`
	IrisPhotoEmote1                   *string                           `json:"irisPhotoEmote1,omitempty"`
	IrisPhotoEmote2                   *string                           `json:"irisPhotoEmote2,omitempty"`
	IrisPhotoHueOrder                 *uint64                           `json:"irisPhotoHueOrder,omitempty"`
	IrisPhotoShinyHueOrder            *uint64                           `json:"irisPhotoShinyHueOrder,omitempty"`
	IsDeployable                      *bool                             `json:"isDeployable,omitempty"`
	IsTradable                        *bool                             `json:"isTradable,omitempty"`
	IsTransferable                    *bool                             `json:"isTransferable,omitempty"`
	KmBuddyDistance                   float64                           `json:"kmBuddyDistance"`
	ModelHeight                       *float64                          `json:"modelHeight,omitempty"`
	ModelScale                        *float64                          `json:"modelScale,omitempty"`
	ModelScaleV2                      *float64                          `json:"modelScaleV2,omitempty"`
	NonTmCinematicMoves               *[1]string                        `json:"nonTmCinematicMoves,omitempty"`
	ParentPokemonId                   *string                           `json:"parentPokemonId,omitempty"`
	PokedexHeightM                    float64                           `json:"pokedexHeightM"`
	PokedexWeightKg                   float64                           `json:"pokedexWeightKg"`
	PokemonClass                      *string                           `json:"pokemonClass,omitempty"`
	PokemonId                         string                            `json:"pokemonId"`
	QuickMoves                        []string                          `json:"quickMoves,omitempty"`
	RaidBossDistanceOffset            *float64                          `json:"raidBossDistanceOffset,omitempty"`
	Shadow                            *PokemonSettingsShadow            `json:"shadow,omitempty"`
	SizeSettings                      *PokemonSettingsSizeSettings      `json:"sizeSettings,omitempty"`
	Stats                             PokemonSettingsStats              `json:"stats"`
	TempEvoOverrides                  []PokemonSettingsTempEvoOverrides `json:"tempEvoOverrides,omitempty"`
	ThirdMove                         PokemonSettingsThirdMove          `json:"thirdMove"`
	Type                              string                            `json:"type"`
	Type2                             *string                           `json:"type2,omitempty"`
	UseIrisFlyingPlacement            *bool                             `json:"useIrisFlyingPlacement,omitempty"`
	WeightStdDev                      float64                           `json:"weightStdDev"`
}

type PokemonSettingsEntry struct {
	TemplateID string                   `json:"templateId"`
	Data       PokemonSettingsEntryData `json:"data"`
}

func (PokemonSettingsEntry) MasterfileEntry() {}

type PokemonSettingsEntryData struct {
	TemplateID      string          `json:"templateId"`
	PokemonSettings PokemonSettings `json:"pokemonSettings"`
}

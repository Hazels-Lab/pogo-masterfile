// Generated from Pokémon GO masterfile — root lookup table.
//
// Composed via interface inheritance from each group's lookup-table file.
// Materialized shape is identical to a single big interface, but the source
// is split per-group so the editor can lazily load the slice relevant to the
// current cursor position.

import type {
	AvatarCustomizationMasterfileEntry,
	AvatarCustomizationTemplateID,
	AvatarGroupOrderSettingsMasterfileEntry,
	AvatarGroupOrderSettingsTemplateID,
	AvatarItemDisplayMasterfileEntry,
	AvatarItemDisplayTemplateID,
	BadgeSettingsMasterfileEntry,
	BadgeSettingsTemplateID,
	BreadMoveLevelSettingsMasterfileEntry,
	BreadMoveLevelSettingsTemplateID,
	BuddyActivityCategorySettingsMasterfileEntry,
	BuddyActivityCategorySettingsTemplateID,
	BuddyEmotionLevelSettingsMasterfileEntry,
	BuddyEmotionLevelSettingsTemplateID,
	BuddyLevelSettingsMasterfileEntry,
	BuddyLevelSettingsTemplateID,
	ClientQuestTemplateMasterfileEntry,
	ClientQuestTemplateTemplateID,
	CodeGateProtoMasterfileEntry,
	CodeGateProtoTemplateID,
	CombatLeagueMasterfileEntry,
	CombatLeagueTemplateID,
	CombatMoveMasterfileEntry,
	CombatMoveTemplateID,
	CombatNpcPersonalityMasterfileEntry,
	CombatNpcPersonalityTemplateID,
	CombatNpcTrainerMasterfileEntry,
	CombatNpcTrainerTemplateID,
	CombatRankingProtoSettingsMasterfileEntry,
	CombatRankingProtoSettingsTemplateID,
	CombatTypeMasterfileEntry,
	CombatTypeTemplateID,
	EventPassSettingsMasterfileEntry,
	EventPassSettingsTemplateID,
	EventPassTierSettingsMasterfileEntry,
	EventPassTierSettingsTemplateID,
	EvolutionChainDisplaySettingsMasterfileEntry,
	EvolutionChainDisplaySettingsTemplateID,
	EvolutionQuestTemplateMasterfileEntry,
	EvolutionQuestTemplateTemplateID,
	FeatureGateMasterfileEntry,
	FeatureGateTemplateID,
	FormSettingsMasterfileEntry,
	FormSettingsTemplateID,
	FortPowerUpLevelSettingsMasterfileEntry,
	FortPowerUpLevelSettingsTemplateID,
	FriendshipMilestoneSettingsMasterfileEntry,
	FriendshipMilestoneSettingsTemplateID,
	GenderSettingsMasterfileEntry,
	GenderSettingsTemplateID,
	IapCategoryDisplayMasterfileEntry,
	IapCategoryDisplayTemplateID,
	IapItemDisplayMasterfileEntry,
	IapItemDisplayTemplateID,
	InvasionNpcDisplaySettingsMasterfileEntry,
	InvasionNpcDisplaySettingsTemplateID,
	ItemExpirationSettingsMasterfileEntry,
	ItemExpirationSettingsTemplateID,
	ItemSettingsMasterfileEntry,
	ItemSettingsTemplateID,
	LanguageSettingsMasterfileEntry,
	LanguageSettingsTemplateID,
	LevelUpRewardsMasterfileEntry,
	LevelUpRewardsTemplateID,
	LimitedPurchaseSkuSettingsMasterfileEntry,
	LimitedPurchaseSkuSettingsTemplateID,
	LocationCardSettingsMasterfileEntry,
	LocationCardSettingsTemplateID,
	MegaEvoLevelSettingsMasterfileEntry,
	MegaEvoLevelSettingsTemplateID,
	MoveSequenceSettingsMasterfileEntry,
	MoveSequenceSettingsTemplateID,
	MoveSettingsMasterfileEntry,
	MoveSettingsTemplateID,
	NonCombatMoveSettingsMasterfileEntry,
	NonCombatMoveSettingsTemplateID,
	PartyPlayGeneralSettingsMasterfileEntry,
	PartyPlayGeneralSettingsTemplateID,
	PhotoSetsSettingsProtoMasterfileEntry,
	PhotoSetsSettingsProtoTemplateID,
	PokemonExtendedSettingsMasterfileEntry,
	PokemonExtendedSettingsTemplateID,
	PokemonFamilyMasterfileEntry,
	PokemonFamilyTemplateID,
	PokemonHomeEnergyCostsMasterfileEntry,
	PokemonHomeEnergyCostsTemplateID,
	PokemonHomeFormReversionsMasterfileEntry,
	PokemonHomeFormReversionsTemplateID,
	PokemonScaleSettingsMasterfileEntry,
	PokemonScaleSettingsTemplateID,
	PokemonSettingsMasterfileEntry,
	PokemonSettingsTemplateID,
	PokemonUpgradesMasterfileEntry,
	PokemonUpgradesTemplateID,
	PokestopInvasionAvailabilitySettingsMasterfileEntry,
	PokestopInvasionAvailabilitySettingsTemplateID,
	QuestSettingsMasterfileEntry,
	QuestSettingsTemplateID,
	RecommendedSearchSettingsMasterfileEntry,
	RecommendedSearchSettingsTemplateID,
	RollBackMasterfileEntry,
	RollBackTemplateID,
	SettingsOverrideRuleMasterfileEntry,
	SettingsOverrideRuleTemplateID,
	SingletonsMasterfileEntry,
	SingletonsTemplateID,
	StickerMetadataMasterfileEntry,
	StickerMetadataTemplateID,
	TappableSettingsMasterfileEntry,
	TappableSettingsTemplateID,
	TemporaryEvolutionSettingsMasterfileEntry,
	TemporaryEvolutionSettingsTemplateID,
	TypeEffectiveMasterfileEntry,
	TypeEffectiveTemplateID,
	VsSeekerLootMasterfileEntry,
	VsSeekerLootTemplateID,
	VsSeekerPokemonRewardsMasterfileEntry,
	VsSeekerPokemonRewardsTemplateID,
	WeatherAffinitiesMasterfileEntry,
	WeatherAffinitiesTemplateID,
} from "./entries";
import type { AvatarCustomizationLookup } from "./avatar-customization/lookup-table";
import type { AvatarGroupOrderSettingsLookup } from "./avatar-group-order-settings/lookup-table";
import type { AvatarItemDisplayLookup } from "./avatar-item-display/lookup-table";
import type { BadgeSettingsLookup } from "./badge-settings/lookup-table";
import type { BreadMoveLevelSettingsLookup } from "./bread-move-level-settings/lookup-table";
import type { BuddyActivityCategorySettingsLookup } from "./buddy-activity-category-settings/lookup-table";
import type { BuddyEmotionLevelSettingsLookup } from "./buddy-emotion-level-settings/lookup-table";
import type { BuddyLevelSettingsLookup } from "./buddy-level-settings/lookup-table";
import type { ClientQuestTemplateLookup } from "./client-quest-template/lookup-table";
import type { CodeGateProtoLookup } from "./code-gate-proto/lookup-table";
import type { CombatLeagueLookup } from "./combat-league/lookup-table";
import type { CombatMoveLookup } from "./combat-move/lookup-table";
import type { CombatNpcPersonalityLookup } from "./combat-npc-personality/lookup-table";
import type { CombatNpcTrainerLookup } from "./combat-npc-trainer/lookup-table";
import type { CombatRankingProtoSettingsLookup } from "./combat-ranking-proto-settings/lookup-table";
import type { CombatTypeLookup } from "./combat-type/lookup-table";
import type { EventPassSettingsLookup } from "./event-pass-settings/lookup-table";
import type { EventPassTierSettingsLookup } from "./event-pass-tier-settings/lookup-table";
import type { EvolutionChainDisplaySettingsLookup } from "./evolution-chain-display-settings/lookup-table";
import type { EvolutionQuestTemplateLookup } from "./evolution-quest-template/lookup-table";
import type { FeatureGateLookup } from "./feature-gate/lookup-table";
import type { FormSettingsLookup } from "./form-settings/lookup-table";
import type { FortPowerUpLevelSettingsLookup } from "./fort-power-up-level-settings/lookup-table";
import type { FriendshipMilestoneSettingsLookup } from "./friendship-milestone-settings/lookup-table";
import type { GenderSettingsLookup } from "./gender-settings/lookup-table";
import type { IapCategoryDisplayLookup } from "./iap-category-display/lookup-table";
import type { IapItemDisplayLookup } from "./iap-item-display/lookup-table";
import type { InvasionNpcDisplaySettingsLookup } from "./invasion-npc-display-settings/lookup-table";
import type { ItemExpirationSettingsLookup } from "./item-expiration-settings/lookup-table";
import type { ItemSettingsLookup } from "./item-settings/lookup-table";
import type { LanguageSettingsLookup } from "./language-settings/lookup-table";
import type { LevelUpRewardsLookup } from "./level-up-rewards/lookup-table";
import type { LimitedPurchaseSkuSettingsLookup } from "./limited-purchase-sku-settings/lookup-table";
import type { LocationCardSettingsLookup } from "./location-card-settings/lookup-table";
import type { MegaEvoLevelSettingsLookup } from "./mega-evo-level-settings/lookup-table";
import type { MoveSequenceSettingsLookup } from "./move-sequence-settings/lookup-table";
import type { MoveSettingsLookup } from "./move-settings/lookup-table";
import type { NonCombatMoveSettingsLookup } from "./non-combat-move-settings/lookup-table";
import type { PartyPlayGeneralSettingsLookup } from "./party-play-general-settings/lookup-table";
import type { PhotoSetsSettingsProtoLookup } from "./photo-sets-settings-proto/lookup-table";
import type { PokemonExtendedSettingsLookup } from "./pokemon-extended-settings/lookup-table";
import type { PokemonFamilyLookup } from "./pokemon-family/lookup-table";
import type { PokemonHomeEnergyCostsLookup } from "./pokemon-home-energy-costs/lookup-table";
import type { PokemonHomeFormReversionsLookup } from "./pokemon-home-form-reversions/lookup-table";
import type { PokemonScaleSettingsLookup } from "./pokemon-scale-settings/lookup-table";
import type { PokemonSettingsLookup } from "./pokemon-settings/lookup-table";
import type { PokemonUpgradesLookup } from "./pokemon-upgrades/lookup-table";
import type { PokestopInvasionAvailabilitySettingsLookup } from "./pokestop-invasion-availability-settings/lookup-table";
import type { QuestSettingsLookup } from "./quest-settings/lookup-table";
import type { RecommendedSearchSettingsLookup } from "./recommended-search-settings/lookup-table";
import type { RollBackLookup } from "./roll-back/lookup-table";
import type { SettingsOverrideRuleLookup } from "./settings-override-rule/lookup-table";
import type { StickerMetadataLookup } from "./sticker-metadata/lookup-table";
import type { TappableSettingsLookup } from "./tappable-settings/lookup-table";
import type { TemporaryEvolutionSettingsLookup } from "./temporary-evolution-settings/lookup-table";
import type { TypeEffectiveLookup } from "./type-effective/lookup-table";
import type { VsSeekerLootLookup } from "./vs-seeker-loot/lookup-table";
import type { VsSeekerPokemonRewardsLookup } from "./vs-seeker-pokemon-rewards/lookup-table";
import type { WeatherAffinitiesLookup } from "./weather-affinities/lookup-table";
import type { SingletonsLookup } from "./singletons/lookup-table";

export type { AvatarCustomizationLookup } from "./avatar-customization/lookup-table";
export type { AvatarGroupOrderSettingsLookup } from "./avatar-group-order-settings/lookup-table";
export type { AvatarItemDisplayLookup } from "./avatar-item-display/lookup-table";
export type { BadgeSettingsLookup } from "./badge-settings/lookup-table";
export type { BreadMoveLevelSettingsLookup } from "./bread-move-level-settings/lookup-table";
export type { BuddyActivityCategorySettingsLookup } from "./buddy-activity-category-settings/lookup-table";
export type { BuddyEmotionLevelSettingsLookup } from "./buddy-emotion-level-settings/lookup-table";
export type { BuddyLevelSettingsLookup } from "./buddy-level-settings/lookup-table";
export type { ClientQuestTemplateLookup } from "./client-quest-template/lookup-table";
export type { CodeGateProtoLookup } from "./code-gate-proto/lookup-table";
export type { CombatLeagueLookup } from "./combat-league/lookup-table";
export type { CombatMoveLookup } from "./combat-move/lookup-table";
export type { CombatNpcPersonalityLookup } from "./combat-npc-personality/lookup-table";
export type { CombatNpcTrainerLookup } from "./combat-npc-trainer/lookup-table";
export type { CombatRankingProtoSettingsLookup } from "./combat-ranking-proto-settings/lookup-table";
export type { CombatTypeLookup } from "./combat-type/lookup-table";
export type { EventPassSettingsLookup } from "./event-pass-settings/lookup-table";
export type { EventPassTierSettingsLookup } from "./event-pass-tier-settings/lookup-table";
export type { EvolutionChainDisplaySettingsLookup } from "./evolution-chain-display-settings/lookup-table";
export type { EvolutionQuestTemplateLookup } from "./evolution-quest-template/lookup-table";
export type { FeatureGateLookup } from "./feature-gate/lookup-table";
export type { FormSettingsLookup } from "./form-settings/lookup-table";
export type { FortPowerUpLevelSettingsLookup } from "./fort-power-up-level-settings/lookup-table";
export type { FriendshipMilestoneSettingsLookup } from "./friendship-milestone-settings/lookup-table";
export type { GenderSettingsLookup } from "./gender-settings/lookup-table";
export type { IapCategoryDisplayLookup } from "./iap-category-display/lookup-table";
export type { IapItemDisplayLookup } from "./iap-item-display/lookup-table";
export type { InvasionNpcDisplaySettingsLookup } from "./invasion-npc-display-settings/lookup-table";
export type { ItemExpirationSettingsLookup } from "./item-expiration-settings/lookup-table";
export type { ItemSettingsLookup } from "./item-settings/lookup-table";
export type { LanguageSettingsLookup } from "./language-settings/lookup-table";
export type { LevelUpRewardsLookup } from "./level-up-rewards/lookup-table";
export type { LimitedPurchaseSkuSettingsLookup } from "./limited-purchase-sku-settings/lookup-table";
export type { LocationCardSettingsLookup } from "./location-card-settings/lookup-table";
export type { MegaEvoLevelSettingsLookup } from "./mega-evo-level-settings/lookup-table";
export type { MoveSequenceSettingsLookup } from "./move-sequence-settings/lookup-table";
export type { MoveSettingsLookup } from "./move-settings/lookup-table";
export type { NonCombatMoveSettingsLookup } from "./non-combat-move-settings/lookup-table";
export type { PartyPlayGeneralSettingsLookup } from "./party-play-general-settings/lookup-table";
export type { PhotoSetsSettingsProtoLookup } from "./photo-sets-settings-proto/lookup-table";
export type { PokemonExtendedSettingsLookup } from "./pokemon-extended-settings/lookup-table";
export type { PokemonFamilyLookup } from "./pokemon-family/lookup-table";
export type { PokemonHomeEnergyCostsLookup } from "./pokemon-home-energy-costs/lookup-table";
export type { PokemonHomeFormReversionsLookup } from "./pokemon-home-form-reversions/lookup-table";
export type { PokemonScaleSettingsLookup } from "./pokemon-scale-settings/lookup-table";
export type { PokemonSettingsLookup } from "./pokemon-settings/lookup-table";
export type { PokemonUpgradesLookup } from "./pokemon-upgrades/lookup-table";
export type { PokestopInvasionAvailabilitySettingsLookup } from "./pokestop-invasion-availability-settings/lookup-table";
export type { QuestSettingsLookup } from "./quest-settings/lookup-table";
export type { RecommendedSearchSettingsLookup } from "./recommended-search-settings/lookup-table";
export type { RollBackLookup } from "./roll-back/lookup-table";
export type { SettingsOverrideRuleLookup } from "./settings-override-rule/lookup-table";
export type { StickerMetadataLookup } from "./sticker-metadata/lookup-table";
export type { TappableSettingsLookup } from "./tappable-settings/lookup-table";
export type { TemporaryEvolutionSettingsLookup } from "./temporary-evolution-settings/lookup-table";
export type { TypeEffectiveLookup } from "./type-effective/lookup-table";
export type { VsSeekerLootLookup } from "./vs-seeker-loot/lookup-table";
export type { VsSeekerPokemonRewardsLookup } from "./vs-seeker-pokemon-rewards/lookup-table";
export type { WeatherAffinitiesLookup } from "./weather-affinities/lookup-table";
export type { SingletonsLookup } from "./singletons/lookup-table";

export type GroupName =
	| "avatarCustomization"
	| "avatarGroupOrderSettings"
	| "avatarItemDisplay"
	| "badgeSettings"
	| "breadMoveLevelSettings"
	| "buddyActivityCategorySettings"
	| "buddyEmotionLevelSettings"
	| "buddyLevelSettings"
	| "clientQuestTemplate"
	| "codeGateProto"
	| "combatLeague"
	| "combatMove"
	| "combatNpcPersonality"
	| "combatNpcTrainer"
	| "combatRankingProtoSettings"
	| "combatType"
	| "eventPassSettings"
	| "eventPassTierSettings"
	| "evolutionChainDisplaySettings"
	| "evolutionQuestTemplate"
	| "featureGate"
	| "formSettings"
	| "fortPowerUpLevelSettings"
	| "friendshipMilestoneSettings"
	| "genderSettings"
	| "iapCategoryDisplay"
	| "iapItemDisplay"
	| "invasionNpcDisplaySettings"
	| "itemExpirationSettings"
	| "itemSettings"
	| "languageSettings"
	| "levelUpRewards"
	| "limitedPurchaseSkuSettings"
	| "locationCardSettings"
	| "megaEvoLevelSettings"
	| "moveSequenceSettings"
	| "moveSettings"
	| "nonCombatMoveSettings"
	| "partyPlayGeneralSettings"
	| "photoSetsSettingsProto"
	| "pokemonExtendedSettings"
	| "pokemonFamily"
	| "pokemonHomeEnergyCosts"
	| "pokemonHomeFormReversions"
	| "pokemonScaleSettings"
	| "pokemonSettings"
	| "pokemonUpgrades"
	| "pokestopInvasionAvailabilitySettings"
	| "questSettings"
	| "recommendedSearchSettings"
	| "rollBack"
	| "settingsOverrideRule"
	| "stickerMetadata"
	| "tappableSettings"
	| "temporaryEvolutionSettings"
	| "typeEffective"
	| "vsSeekerLoot"
	| "vsSeekerPokemonRewards"
	| "weatherAffinities"
	| "singletons";

export interface EntryByTemplateID
	extends AvatarCustomizationLookup,
		AvatarGroupOrderSettingsLookup,
		AvatarItemDisplayLookup,
		BadgeSettingsLookup,
		BreadMoveLevelSettingsLookup,
		BuddyActivityCategorySettingsLookup,
		BuddyEmotionLevelSettingsLookup,
		BuddyLevelSettingsLookup,
		ClientQuestTemplateLookup,
		CodeGateProtoLookup,
		CombatLeagueLookup,
		CombatMoveLookup,
		CombatNpcPersonalityLookup,
		CombatNpcTrainerLookup,
		CombatRankingProtoSettingsLookup,
		CombatTypeLookup,
		EventPassSettingsLookup,
		EventPassTierSettingsLookup,
		EvolutionChainDisplaySettingsLookup,
		EvolutionQuestTemplateLookup,
		FeatureGateLookup,
		FormSettingsLookup,
		FortPowerUpLevelSettingsLookup,
		FriendshipMilestoneSettingsLookup,
		GenderSettingsLookup,
		IapCategoryDisplayLookup,
		IapItemDisplayLookup,
		InvasionNpcDisplaySettingsLookup,
		ItemExpirationSettingsLookup,
		ItemSettingsLookup,
		LanguageSettingsLookup,
		LevelUpRewardsLookup,
		LimitedPurchaseSkuSettingsLookup,
		LocationCardSettingsLookup,
		MegaEvoLevelSettingsLookup,
		MoveSequenceSettingsLookup,
		MoveSettingsLookup,
		NonCombatMoveSettingsLookup,
		PartyPlayGeneralSettingsLookup,
		PhotoSetsSettingsProtoLookup,
		PokemonExtendedSettingsLookup,
		PokemonFamilyLookup,
		PokemonHomeEnergyCostsLookup,
		PokemonHomeFormReversionsLookup,
		PokemonScaleSettingsLookup,
		PokemonSettingsLookup,
		PokemonUpgradesLookup,
		PokestopInvasionAvailabilitySettingsLookup,
		QuestSettingsLookup,
		RecommendedSearchSettingsLookup,
		RollBackLookup,
		SettingsOverrideRuleLookup,
		StickerMetadataLookup,
		TappableSettingsLookup,
		TemporaryEvolutionSettingsLookup,
		TypeEffectiveLookup,
		VsSeekerLootLookup,
		VsSeekerPokemonRewardsLookup,
		WeatherAffinitiesLookup,
		SingletonsLookup {}

export interface EntriesByGroup {
	avatarCustomization: AvatarCustomizationMasterfileEntry;
	avatarGroupOrderSettings: AvatarGroupOrderSettingsMasterfileEntry;
	avatarItemDisplay: AvatarItemDisplayMasterfileEntry;
	badgeSettings: BadgeSettingsMasterfileEntry;
	breadMoveLevelSettings: BreadMoveLevelSettingsMasterfileEntry;
	buddyActivityCategorySettings: BuddyActivityCategorySettingsMasterfileEntry;
	buddyEmotionLevelSettings: BuddyEmotionLevelSettingsMasterfileEntry;
	buddyLevelSettings: BuddyLevelSettingsMasterfileEntry;
	clientQuestTemplate: ClientQuestTemplateMasterfileEntry;
	codeGateProto: CodeGateProtoMasterfileEntry;
	combatLeague: CombatLeagueMasterfileEntry;
	combatMove: CombatMoveMasterfileEntry;
	combatNpcPersonality: CombatNpcPersonalityMasterfileEntry;
	combatNpcTrainer: CombatNpcTrainerMasterfileEntry;
	combatRankingProtoSettings: CombatRankingProtoSettingsMasterfileEntry;
	combatType: CombatTypeMasterfileEntry;
	eventPassSettings: EventPassSettingsMasterfileEntry;
	eventPassTierSettings: EventPassTierSettingsMasterfileEntry;
	evolutionChainDisplaySettings: EvolutionChainDisplaySettingsMasterfileEntry;
	evolutionQuestTemplate: EvolutionQuestTemplateMasterfileEntry;
	featureGate: FeatureGateMasterfileEntry;
	formSettings: FormSettingsMasterfileEntry;
	fortPowerUpLevelSettings: FortPowerUpLevelSettingsMasterfileEntry;
	friendshipMilestoneSettings: FriendshipMilestoneSettingsMasterfileEntry;
	genderSettings: GenderSettingsMasterfileEntry;
	iapCategoryDisplay: IapCategoryDisplayMasterfileEntry;
	iapItemDisplay: IapItemDisplayMasterfileEntry;
	invasionNpcDisplaySettings: InvasionNpcDisplaySettingsMasterfileEntry;
	itemExpirationSettings: ItemExpirationSettingsMasterfileEntry;
	itemSettings: ItemSettingsMasterfileEntry;
	languageSettings: LanguageSettingsMasterfileEntry;
	levelUpRewards: LevelUpRewardsMasterfileEntry;
	limitedPurchaseSkuSettings: LimitedPurchaseSkuSettingsMasterfileEntry;
	locationCardSettings: LocationCardSettingsMasterfileEntry;
	megaEvoLevelSettings: MegaEvoLevelSettingsMasterfileEntry;
	moveSequenceSettings: MoveSequenceSettingsMasterfileEntry;
	moveSettings: MoveSettingsMasterfileEntry;
	nonCombatMoveSettings: NonCombatMoveSettingsMasterfileEntry;
	partyPlayGeneralSettings: PartyPlayGeneralSettingsMasterfileEntry;
	photoSetsSettingsProto: PhotoSetsSettingsProtoMasterfileEntry;
	pokemonExtendedSettings: PokemonExtendedSettingsMasterfileEntry;
	pokemonFamily: PokemonFamilyMasterfileEntry;
	pokemonHomeEnergyCosts: PokemonHomeEnergyCostsMasterfileEntry;
	pokemonHomeFormReversions: PokemonHomeFormReversionsMasterfileEntry;
	pokemonScaleSettings: PokemonScaleSettingsMasterfileEntry;
	pokemonSettings: PokemonSettingsMasterfileEntry;
	pokemonUpgrades: PokemonUpgradesMasterfileEntry;
	pokestopInvasionAvailabilitySettings: PokestopInvasionAvailabilitySettingsMasterfileEntry;
	questSettings: QuestSettingsMasterfileEntry;
	recommendedSearchSettings: RecommendedSearchSettingsMasterfileEntry;
	rollBack: RollBackMasterfileEntry;
	settingsOverrideRule: SettingsOverrideRuleMasterfileEntry;
	stickerMetadata: StickerMetadataMasterfileEntry;
	tappableSettings: TappableSettingsMasterfileEntry;
	temporaryEvolutionSettings: TemporaryEvolutionSettingsMasterfileEntry;
	typeEffective: TypeEffectiveMasterfileEntry;
	vsSeekerLoot: VsSeekerLootMasterfileEntry;
	vsSeekerPokemonRewards: VsSeekerPokemonRewardsMasterfileEntry;
	weatherAffinities: WeatherAffinitiesMasterfileEntry;
	singletons: SingletonsMasterfileEntry;
}

export interface TemplateIDsByGroup {
	avatarCustomization: AvatarCustomizationTemplateID;
	avatarGroupOrderSettings: AvatarGroupOrderSettingsTemplateID;
	avatarItemDisplay: AvatarItemDisplayTemplateID;
	badgeSettings: BadgeSettingsTemplateID;
	breadMoveLevelSettings: BreadMoveLevelSettingsTemplateID;
	buddyActivityCategorySettings: BuddyActivityCategorySettingsTemplateID;
	buddyEmotionLevelSettings: BuddyEmotionLevelSettingsTemplateID;
	buddyLevelSettings: BuddyLevelSettingsTemplateID;
	clientQuestTemplate: ClientQuestTemplateTemplateID;
	codeGateProto: CodeGateProtoTemplateID;
	combatLeague: CombatLeagueTemplateID;
	combatMove: CombatMoveTemplateID;
	combatNpcPersonality: CombatNpcPersonalityTemplateID;
	combatNpcTrainer: CombatNpcTrainerTemplateID;
	combatRankingProtoSettings: CombatRankingProtoSettingsTemplateID;
	combatType: CombatTypeTemplateID;
	eventPassSettings: EventPassSettingsTemplateID;
	eventPassTierSettings: EventPassTierSettingsTemplateID;
	evolutionChainDisplaySettings: EvolutionChainDisplaySettingsTemplateID;
	evolutionQuestTemplate: EvolutionQuestTemplateTemplateID;
	featureGate: FeatureGateTemplateID;
	formSettings: FormSettingsTemplateID;
	fortPowerUpLevelSettings: FortPowerUpLevelSettingsTemplateID;
	friendshipMilestoneSettings: FriendshipMilestoneSettingsTemplateID;
	genderSettings: GenderSettingsTemplateID;
	iapCategoryDisplay: IapCategoryDisplayTemplateID;
	iapItemDisplay: IapItemDisplayTemplateID;
	invasionNpcDisplaySettings: InvasionNpcDisplaySettingsTemplateID;
	itemExpirationSettings: ItemExpirationSettingsTemplateID;
	itemSettings: ItemSettingsTemplateID;
	languageSettings: LanguageSettingsTemplateID;
	levelUpRewards: LevelUpRewardsTemplateID;
	limitedPurchaseSkuSettings: LimitedPurchaseSkuSettingsTemplateID;
	locationCardSettings: LocationCardSettingsTemplateID;
	megaEvoLevelSettings: MegaEvoLevelSettingsTemplateID;
	moveSequenceSettings: MoveSequenceSettingsTemplateID;
	moveSettings: MoveSettingsTemplateID;
	nonCombatMoveSettings: NonCombatMoveSettingsTemplateID;
	partyPlayGeneralSettings: PartyPlayGeneralSettingsTemplateID;
	photoSetsSettingsProto: PhotoSetsSettingsProtoTemplateID;
	pokemonExtendedSettings: PokemonExtendedSettingsTemplateID;
	pokemonFamily: PokemonFamilyTemplateID;
	pokemonHomeEnergyCosts: PokemonHomeEnergyCostsTemplateID;
	pokemonHomeFormReversions: PokemonHomeFormReversionsTemplateID;
	pokemonScaleSettings: PokemonScaleSettingsTemplateID;
	pokemonSettings: PokemonSettingsTemplateID;
	pokemonUpgrades: PokemonUpgradesTemplateID;
	pokestopInvasionAvailabilitySettings: PokestopInvasionAvailabilitySettingsTemplateID;
	questSettings: QuestSettingsTemplateID;
	recommendedSearchSettings: RecommendedSearchSettingsTemplateID;
	rollBack: RollBackTemplateID;
	settingsOverrideRule: SettingsOverrideRuleTemplateID;
	stickerMetadata: StickerMetadataTemplateID;
	tappableSettings: TappableSettingsTemplateID;
	temporaryEvolutionSettings: TemporaryEvolutionSettingsTemplateID;
	typeEffective: TypeEffectiveTemplateID;
	vsSeekerLoot: VsSeekerLootTemplateID;
	vsSeekerPokemonRewards: VsSeekerPokemonRewardsTemplateID;
	weatherAffinities: WeatherAffinitiesTemplateID;
	singletons: SingletonsTemplateID;
}

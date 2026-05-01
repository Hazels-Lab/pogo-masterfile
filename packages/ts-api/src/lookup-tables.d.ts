// Generated from Pokémon GO masterfile — typed lookup tables (per-group composition).

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
} from "pogo-masterfile-types/entries";
import type { AvatarCustomizationLookup } from "./lookup-tables/avatar-customization";
import type { AvatarGroupOrderSettingsLookup } from "./lookup-tables/avatar-group-order-settings";
import type { AvatarItemDisplayLookup } from "./lookup-tables/avatar-item-display";
import type { BadgeSettingsLookup } from "./lookup-tables/badge-settings";
import type { BreadMoveLevelSettingsLookup } from "./lookup-tables/bread-move-level-settings";
import type { BuddyActivityCategorySettingsLookup } from "./lookup-tables/buddy-activity-category-settings";
import type { BuddyEmotionLevelSettingsLookup } from "./lookup-tables/buddy-emotion-level-settings";
import type { BuddyLevelSettingsLookup } from "./lookup-tables/buddy-level-settings";
import type { ClientQuestTemplateLookup } from "./lookup-tables/client-quest-template";
import type { CodeGateProtoLookup } from "./lookup-tables/code-gate-proto";
import type { CombatLeagueLookup } from "./lookup-tables/combat-league";
import type { CombatMoveLookup } from "./lookup-tables/combat-move";
import type { CombatNpcPersonalityLookup } from "./lookup-tables/combat-npc-personality";
import type { CombatNpcTrainerLookup } from "./lookup-tables/combat-npc-trainer";
import type { CombatRankingProtoSettingsLookup } from "./lookup-tables/combat-ranking-proto-settings";
import type { CombatTypeLookup } from "./lookup-tables/combat-type";
import type { EventPassSettingsLookup } from "./lookup-tables/event-pass-settings";
import type { EventPassTierSettingsLookup } from "./lookup-tables/event-pass-tier-settings";
import type { EvolutionChainDisplaySettingsLookup } from "./lookup-tables/evolution-chain-display-settings";
import type { EvolutionQuestTemplateLookup } from "./lookup-tables/evolution-quest-template";
import type { FeatureGateLookup } from "./lookup-tables/feature-gate";
import type { FormSettingsLookup } from "./lookup-tables/form-settings";
import type { FortPowerUpLevelSettingsLookup } from "./lookup-tables/fort-power-up-level-settings";
import type { FriendshipMilestoneSettingsLookup } from "./lookup-tables/friendship-milestone-settings";
import type { GenderSettingsLookup } from "./lookup-tables/gender-settings";
import type { IapCategoryDisplayLookup } from "./lookup-tables/iap-category-display";
import type { IapItemDisplayLookup } from "./lookup-tables/iap-item-display";
import type { InvasionNpcDisplaySettingsLookup } from "./lookup-tables/invasion-npc-display-settings";
import type { ItemExpirationSettingsLookup } from "./lookup-tables/item-expiration-settings";
import type { ItemSettingsLookup } from "./lookup-tables/item-settings";
import type { LanguageSettingsLookup } from "./lookup-tables/language-settings";
import type { LevelUpRewardsLookup } from "./lookup-tables/level-up-rewards";
import type { LimitedPurchaseSkuSettingsLookup } from "./lookup-tables/limited-purchase-sku-settings";
import type { LocationCardSettingsLookup } from "./lookup-tables/location-card-settings";
import type { MegaEvoLevelSettingsLookup } from "./lookup-tables/mega-evo-level-settings";
import type { MoveSequenceSettingsLookup } from "./lookup-tables/move-sequence-settings";
import type { MoveSettingsLookup } from "./lookup-tables/move-settings";
import type { NonCombatMoveSettingsLookup } from "./lookup-tables/non-combat-move-settings";
import type { PartyPlayGeneralSettingsLookup } from "./lookup-tables/party-play-general-settings";
import type { PhotoSetsSettingsProtoLookup } from "./lookup-tables/photo-sets-settings-proto";
import type { PokemonExtendedSettingsLookup } from "./lookup-tables/pokemon-extended-settings";
import type { PokemonFamilyLookup } from "./lookup-tables/pokemon-family";
import type { PokemonHomeEnergyCostsLookup } from "./lookup-tables/pokemon-home-energy-costs";
import type { PokemonHomeFormReversionsLookup } from "./lookup-tables/pokemon-home-form-reversions";
import type { PokemonScaleSettingsLookup } from "./lookup-tables/pokemon-scale-settings";
import type { PokemonSettingsLookup } from "./lookup-tables/pokemon-settings";
import type { PokemonUpgradesLookup } from "./lookup-tables/pokemon-upgrades";
import type { PokestopInvasionAvailabilitySettingsLookup } from "./lookup-tables/pokestop-invasion-availability-settings";
import type { QuestSettingsLookup } from "./lookup-tables/quest-settings";
import type { RecommendedSearchSettingsLookup } from "./lookup-tables/recommended-search-settings";
import type { RollBackLookup } from "./lookup-tables/roll-back";
import type { SettingsOverrideRuleLookup } from "./lookup-tables/settings-override-rule";
import type { StickerMetadataLookup } from "./lookup-tables/sticker-metadata";
import type { TappableSettingsLookup } from "./lookup-tables/tappable-settings";
import type { TemporaryEvolutionSettingsLookup } from "./lookup-tables/temporary-evolution-settings";
import type { TypeEffectiveLookup } from "./lookup-tables/type-effective";
import type { VsSeekerLootLookup } from "./lookup-tables/vs-seeker-loot";
import type { VsSeekerPokemonRewardsLookup } from "./lookup-tables/vs-seeker-pokemon-rewards";
import type { WeatherAffinitiesLookup } from "./lookup-tables/weather-affinities";
import type { SingletonsLookup } from "./lookup-tables/singletons";

export type { GroupName } from "./group-names";
export type { AvatarCustomizationLookup } from "./lookup-tables/avatar-customization";
export type { AvatarGroupOrderSettingsLookup } from "./lookup-tables/avatar-group-order-settings";
export type { AvatarItemDisplayLookup } from "./lookup-tables/avatar-item-display";
export type { BadgeSettingsLookup } from "./lookup-tables/badge-settings";
export type { BreadMoveLevelSettingsLookup } from "./lookup-tables/bread-move-level-settings";
export type { BuddyActivityCategorySettingsLookup } from "./lookup-tables/buddy-activity-category-settings";
export type { BuddyEmotionLevelSettingsLookup } from "./lookup-tables/buddy-emotion-level-settings";
export type { BuddyLevelSettingsLookup } from "./lookup-tables/buddy-level-settings";
export type { ClientQuestTemplateLookup } from "./lookup-tables/client-quest-template";
export type { CodeGateProtoLookup } from "./lookup-tables/code-gate-proto";
export type { CombatLeagueLookup } from "./lookup-tables/combat-league";
export type { CombatMoveLookup } from "./lookup-tables/combat-move";
export type { CombatNpcPersonalityLookup } from "./lookup-tables/combat-npc-personality";
export type { CombatNpcTrainerLookup } from "./lookup-tables/combat-npc-trainer";
export type { CombatRankingProtoSettingsLookup } from "./lookup-tables/combat-ranking-proto-settings";
export type { CombatTypeLookup } from "./lookup-tables/combat-type";
export type { EventPassSettingsLookup } from "./lookup-tables/event-pass-settings";
export type { EventPassTierSettingsLookup } from "./lookup-tables/event-pass-tier-settings";
export type { EvolutionChainDisplaySettingsLookup } from "./lookup-tables/evolution-chain-display-settings";
export type { EvolutionQuestTemplateLookup } from "./lookup-tables/evolution-quest-template";
export type { FeatureGateLookup } from "./lookup-tables/feature-gate";
export type { FormSettingsLookup } from "./lookup-tables/form-settings";
export type { FortPowerUpLevelSettingsLookup } from "./lookup-tables/fort-power-up-level-settings";
export type { FriendshipMilestoneSettingsLookup } from "./lookup-tables/friendship-milestone-settings";
export type { GenderSettingsLookup } from "./lookup-tables/gender-settings";
export type { IapCategoryDisplayLookup } from "./lookup-tables/iap-category-display";
export type { IapItemDisplayLookup } from "./lookup-tables/iap-item-display";
export type { InvasionNpcDisplaySettingsLookup } from "./lookup-tables/invasion-npc-display-settings";
export type { ItemExpirationSettingsLookup } from "./lookup-tables/item-expiration-settings";
export type { ItemSettingsLookup } from "./lookup-tables/item-settings";
export type { LanguageSettingsLookup } from "./lookup-tables/language-settings";
export type { LevelUpRewardsLookup } from "./lookup-tables/level-up-rewards";
export type { LimitedPurchaseSkuSettingsLookup } from "./lookup-tables/limited-purchase-sku-settings";
export type { LocationCardSettingsLookup } from "./lookup-tables/location-card-settings";
export type { MegaEvoLevelSettingsLookup } from "./lookup-tables/mega-evo-level-settings";
export type { MoveSequenceSettingsLookup } from "./lookup-tables/move-sequence-settings";
export type { MoveSettingsLookup } from "./lookup-tables/move-settings";
export type { NonCombatMoveSettingsLookup } from "./lookup-tables/non-combat-move-settings";
export type { PartyPlayGeneralSettingsLookup } from "./lookup-tables/party-play-general-settings";
export type { PhotoSetsSettingsProtoLookup } from "./lookup-tables/photo-sets-settings-proto";
export type { PokemonExtendedSettingsLookup } from "./lookup-tables/pokemon-extended-settings";
export type { PokemonFamilyLookup } from "./lookup-tables/pokemon-family";
export type { PokemonHomeEnergyCostsLookup } from "./lookup-tables/pokemon-home-energy-costs";
export type { PokemonHomeFormReversionsLookup } from "./lookup-tables/pokemon-home-form-reversions";
export type { PokemonScaleSettingsLookup } from "./lookup-tables/pokemon-scale-settings";
export type { PokemonSettingsLookup } from "./lookup-tables/pokemon-settings";
export type { PokemonUpgradesLookup } from "./lookup-tables/pokemon-upgrades";
export type { PokestopInvasionAvailabilitySettingsLookup } from "./lookup-tables/pokestop-invasion-availability-settings";
export type { QuestSettingsLookup } from "./lookup-tables/quest-settings";
export type { RecommendedSearchSettingsLookup } from "./lookup-tables/recommended-search-settings";
export type { RollBackLookup } from "./lookup-tables/roll-back";
export type { SettingsOverrideRuleLookup } from "./lookup-tables/settings-override-rule";
export type { StickerMetadataLookup } from "./lookup-tables/sticker-metadata";
export type { TappableSettingsLookup } from "./lookup-tables/tappable-settings";
export type { TemporaryEvolutionSettingsLookup } from "./lookup-tables/temporary-evolution-settings";
export type { TypeEffectiveLookup } from "./lookup-tables/type-effective";
export type { VsSeekerLootLookup } from "./lookup-tables/vs-seeker-loot";
export type { VsSeekerPokemonRewardsLookup } from "./lookup-tables/vs-seeker-pokemon-rewards";
export type { WeatherAffinitiesLookup } from "./lookup-tables/weather-affinities";
export type { SingletonsLookup } from "./lookup-tables/singletons";

// Composed via interface inheritance — same materialized shape as a single
// 18k-key interface, but split per-group so the editor only needs to fully
// resolve the groups relevant to the current usage.
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

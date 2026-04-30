// Generated from Pokémon GO masterfile — package entry point.
// Package documentation lives in doc.go.

package masterfile

import (
	"encoding/json"
	"fmt"
)

// MasterfileEntry is the sealed interface implemented by every per-discriminator
// Entry type generated alongside this file. Use a type switch to extract a
// concrete entry from a parse result.
type MasterfileEntry interface {
	isMasterfileEntry()
}

// ParseMasterfile parses a masterfile JSON byte slice into a slice of typed
// entries. Each entry is dispatched to the concrete `*Entry` type matching
// its discriminator (the non-templateId key inside `data`).
func ParseMasterfile(data []byte) ([]MasterfileEntry, error) {
	var raw []json.RawMessage
	if err := json.Unmarshal(data, &raw); err != nil {
		return nil, fmt.Errorf("masterfile is not a JSON array: %w", err)
	}

	entries := make([]MasterfileEntry, 0, len(raw))
	for i, m := range raw {
		e, err := parseEntry(m)
		if err != nil {
			return nil, fmt.Errorf("entry %d: %w", i, err)
		}
		entries = append(entries, e)
	}
	return entries, nil
}

func parseEntry(data json.RawMessage) (MasterfileEntry, error) {
	var probe struct {
		TemplateID string                     `json:"templateId"`
		Data       map[string]json.RawMessage `json:"data"`
	}
	if err := json.Unmarshal(data, &probe); err != nil {
		return nil, fmt.Errorf("parse entry shell: %w", err)
	}

	var disc string
	for k := range probe.Data {
		if k != "templateId" {
			disc = k
			break
		}
	}

	switch disc {
	case "pokemonExtendedSettings":
		var e PokemonExtendedSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "genderSettings":
		var e GenderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonSettings":
		var e PokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarCustomization":
		var e AvatarCustomizationEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarItemDisplay":
		var e AvatarItemDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapItemDisplay":
		var e IapItemDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "formSettings":
		var e FormSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "badgeSettings":
		var e BadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stickerMetadata":
		var e StickerMetadataEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPassTierSettings":
		var e EventPassTierSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonFamily":
		var e PokemonFamilyEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "moveSettings":
		var e MoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "moveSequenceSettings":
		var e MoveSequenceSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatMove":
		var e CombatMoveEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "settingsOverrideRule":
		var e SettingsOverrideRuleEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "locationCardSettings":
		var e LocationCardSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemSettings":
		var e ItemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatLeague":
		var e CombatLeagueEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "megaEvoLevelSettings":
		var e MegaEvoLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "levelUpRewards":
		var e LevelUpRewardsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "evolutionChainDisplaySettings":
		var e EvolutionChainDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "invasionNpcDisplaySettings":
		var e InvasionNpcDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "clientQuestTemplate":
		var e ClientQuestTemplateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "temporaryEvolutionSettings":
		var e TemporaryEvolutionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerLoot":
		var e VsSeekerLootEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "photoSetsSettingsProto":
		var e PhotoSetsSettingsProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "evolutionQuestTemplate":
		var e EvolutionQuestTemplateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "limitedPurchaseSkuSettings":
		var e LimitedPurchaseSkuSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemExpirationSettings":
		var e ItemExpirationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatRankingProtoSettings":
		var e CombatRankingProtoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatType":
		var e CombatTypeEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "typeEffective":
		var e TypeEffectiveEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "featureGate":
		var e FeatureGateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "codeGateProto":
		var e CodeGateProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapCategoryDisplay":
		var e IapCategoryDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "recommendedSearchSettings":
		var e RecommendedSearchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatNpcTrainer":
		var e CombatNpcTrainerEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "nonCombatMoveSettings":
		var e NonCombatMoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyActivityCategorySettings":
		var e BuddyActivityCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadMoveLevelSettings":
		var e BreadMoveLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyEmotionLevelSettings":
		var e BuddyEmotionLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeFormReversions":
		var e PokemonHomeFormReversionsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokestopInvasionAvailabilitySettings":
		var e PokestopInvasionAvailabilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "weatherAffinities":
		var e WeatherAffinitiesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "friendshipMilestoneSettings":
		var e FriendshipMilestoneSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonScaleSettings":
		var e PokemonScaleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyLevelSettings":
		var e BuddyLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "tappableSettings":
		var e TappableSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "fortPowerUpLevelSettings":
		var e FortPowerUpLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeEnergyCosts":
		var e PokemonHomeEnergyCostsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatNpcPersonality":
		var e CombatNpcPersonalityEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "languageSettings":
		var e LanguageSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "questSettings":
		var e QuestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "rollBack":
		var e RollBackEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarGroupOrderSettings":
		var e AvatarGroupOrderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPassSettings":
		var e EventPassSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyPlayGeneralSettings":
		var e PartyPlayGeneralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonUpgrades":
		var e PokemonUpgradesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerPokemonRewards":
		var e VsSeekerPokemonRewardsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "accessibilitySettings":
		var e AccessibilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "additiveSceneSettings":
		var e AdditiveSceneSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "addressablePokemonSettings":
		var e AddressablePokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "addressBookImportSettings":
		var e AddressBookImportSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "advancedSettings":
		var e AdvancedSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "arPhotoFeatureFlags":
		var e ArPhotoFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "arTelemetrySettings":
		var e ArTelemetrySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "assetRefreshProto":
		var e AssetRefreshProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarFeatureFlags":
		var e AvatarFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarStoreFooterFlags":
		var e AvatarStoreFooterFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarStoreSubcategoryFilteringFlags":
		var e AvatarStoreSubcategoryFilteringFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "backgroundModeSettings":
		var e BackgroundModeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleAnimationSettings":
		var e BattleAnimationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleHubBadgeSettings":
		var e BattleHubBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleHubOrderSettings":
		var e BattleHubOrderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleInputBufferSettings":
		var e BattleInputBufferSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battlePartySettings":
		var e BattlePartySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleSettings":
		var e BattleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleVisualSettings":
		var e BattleVisualSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "belugaPokemonWhitelist":
		var e BelugaPokemonWhitelistEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "bestFriendsPlusSettings":
		var e BestFriendsPlusSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadBattleClientSettings":
		var e BreadBattleClientSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadFeatureFlags":
		var e BreadFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadLobbyCounterSettings":
		var e BreadLobbyCounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadLobbyUpdateSettings":
		var e BreadLobbyUpdateSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadMoveMappings":
		var e BreadMoveMappingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadPokemonScalingSettings":
		var e BreadPokemonScalingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadSettings":
		var e BreadSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyEncounterCameoSettings":
		var e BuddyEncounterCameoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyHungerSettings":
		var e BuddyHungerSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyInteractionSettings":
		var e BuddyInteractionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddySwapSettings":
		var e BuddySwapSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyWalkSettings":
		var e BuddyWalkSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "bulkHealingSettings":
		var e BulkHealingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "butterflyCollectorSettings":
		var e ButterflyCollectorSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "campfireSettings":
		var e CampfireSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "catchRadiusMultiplierSettings":
		var e CatchRadiusMultiplierSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatCompetitiveSeasonSettings":
		var e CombatCompetitiveSeasonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatLeagueSettings":
		var e CombatLeagueSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatSettings":
		var e CombatSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatStatStageSettings":
		var e CombatStatStageSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "contestSettings":
		var e ContestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "conversationSettings":
		var e ConversationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "crossGameSocialSettings":
		var e CrossGameSocialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "dailyAdventureIncenseSettings":
		var e DailyAdventureIncenseSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "deepLinkingSettings":
		var e DeepLinkingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eggHatchImprovementsSettings":
		var e EggHatchImprovementsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "encounterSettings":
		var e EncounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPlannerPopularNotificationSettings":
		var e EventPlannerPopularNotificationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "externalAddressableAssetsSettings":
		var e ExternalAddressableAssetsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "featureUnlockLevelSettings":
		var e FeatureUnlockLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "geotargetedQuestSettings":
		var e GeotargetedQuestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "giftingSettings":
		var e GiftingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "guiSearchSettings":
		var e GuiSearchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "gymBadgeSettings":
		var e GymBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "hapticsSettings":
		var e HapticsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapSettings":
		var e IapSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ibfcLightweightSettings":
		var e IbfcLightweightSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "impressionTrackingSettings":
		var e ImpressionTrackingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "inAppSurveySettings":
		var e InAppSurveySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "incidentPrioritySettings":
		var e IncidentPrioritySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "incidentVisibilitySettings":
		var e IncidentVisibilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "inventorySettings":
		var e InventorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "irisSocialSettings":
		var e IrisSocialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "irisSocialUxFunnelSettings":
		var e IrisSocialUxFunnelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemInventoryUpdateSettings":
		var e ItemInventoryUpdateSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "joinRaidViaFriendListSettings":
		var e JoinRaidViaFriendListSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "languageSelectorSettings":
		var e LanguageSelectorSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "luckyPokemonSettings":
		var e LuckyPokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mainMenuChanges":
		var e MainMenuChangesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mapDisplaySettings":
		var e MapDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mapObjectsInteractionRangeSettings":
		var e MapObjectsInteractionRangeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "megaEvoSettings":
		var e MegaEvoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "monodepthSettings":
		var e MonodepthSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mpSettings":
		var e MpSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "naturalArtDayNightFeatureSettings":
		var e NaturalArtDayNightFeatureSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "nearbyPokemonSettings":
		var e NearbyPokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "neutralAvatarSettings":
		var e NeutralAvatarSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "onboardingSettings":
		var e OnboardingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "optimizationsProto":
		var e OptimizationsProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyDarkLaunchSettings":
		var e PartyDarkLaunchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyIapBoostsSettings":
		var e PartyIapBoostsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyRecommendationSettings":
		var e PartyRecommendationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "photoSettings":
		var e PhotoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "plannerSettings":
		var e PlannerSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "playerBonusSystemSettings":
		var e PlayerBonusSystemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "playerLevel":
		var e PlayerLevelEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokeballThrowPropertySettings":
		var e PokeballThrowPropertySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokecoinPurchaseDisplayGmt":
		var e PokecoinPurchaseDisplayGmtEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexCategoriesSettings":
		var e PokedexCategoriesSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexSizeStatsSystemSettings":
		var e PokedexSizeStatsSystemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexv2FeatureFlags":
		var e Pokedexv2featureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexV2Settings":
		var e PokedexV2settingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonFxSettings":
		var e PokemonFxSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeSettings":
		var e PokemonHomeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonTagSettings":
		var e PokemonTagSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "popupControlSettings":
		var e PopupControlSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "postcardCollectionSettings":
		var e PostcardCollectionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "powerUpPokestopsSettings":
		var e PowerUpPokestopsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "primalEvoSettings":
		var e PrimalEvoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ptcOauthSettings":
		var e PtcOauthSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "quickInviteSettings":
		var e QuickInviteSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "raidLobbyCounterSettings":
		var e RaidLobbyCounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "raidSettings":
		var e RaidSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "referralSettings":
		var e ReferralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "remoteTradeSettings":
		var e RemoteTradeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeBadgeSettings":
		var e RouteBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeCreationSettings":
		var e RouteCreationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeDiscoverySettings":
		var e RouteDiscoverySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routePinSettings":
		var e RoutePinSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routePlaySettings":
		var e RoutePlaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routesNearbyNotifSettings":
		var e RoutesNearbyNotifSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routesPartyPlayInteropSettings":
		var e RoutesPartyPlayInteropSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeStampCategorySettings":
		var e RouteStampCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sharedFusionSettings":
		var e SharedFusionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sharedMoveSettings":
		var e SharedMoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sourdoughMoveMappingSettings":
		var e SourdoughMoveMappingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "specialEggSettings":
		var e SpecialEggSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sponsoredGeofenceGiftSettings":
		var e SponsoredGeofenceGiftSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "squashSettings":
		var e SquashSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stampCollectionSettings":
		var e StampCollectionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stationedPokemonTableSettings":
		var e StationedPokemonTableSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stickerCategorySettings":
		var e StickerCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "styleShopSettings":
		var e StyleShopSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ticketGiftingSettings":
		var e TicketGiftingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "todayViewSettings":
		var e TodayViewSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "tutorialSettings":
		var e TutorialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "usernameSuggestionSettings":
		var e UsernameSuggestionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "verboseLogCombatSettings":
		var e VerboseLogCombatSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "verboseLogRaidSettings":
		var e VerboseLogRaidSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vistaGeneralSettings":
		var e VistaGeneralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vnextBattleConfig":
		var e VnextBattleConfigEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerClientSettings":
		var e VsSeekerClientSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerScheduleSettings":
		var e VsSeekerScheduleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "weatherBonusSettings":
		var e WeatherBonusSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "":
		switch probe.TemplateID {
		case "ITEM_CURRENCY_VALUES":
			var e ItemCurrencyValuesEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "QUEST_DIALOGUE_INBOX_SETTINGS":
			var e QuestDialogueInboxSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "RAID_ENTRY_COST_SETTINGS":
			var e RaidEntryCostSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "SOFT_SFIDA_SETTINGS":
			var e SoftSfidaSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		default:
			return nil, fmt.Errorf("unknown stub templateId: %s", probe.TemplateID)
		}
	default:
		return nil, fmt.Errorf("unknown discriminator: %s", disc)
	}
}

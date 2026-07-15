// Generated from Pokémon GO masterfile — DO NOT EDIT MANUALLY.
// Package documentation lives in doc.go.

package masterfile

import (
	"encoding/json"
	"fmt"

	"github.com/Hazels-Lab/pogo-masterfile/packages/go/avatar_customization"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/avatar_group_order_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/avatar_item_display"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/badge_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/bread_move_level_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/buddy_activity_category_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/buddy_emotion_level_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/buddy_level_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/client_quest_template"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/code_gate_proto"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_league"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_move"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_npc_personality"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_npc_trainer"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_ranking_proto_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/combat_type"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/event_pass_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/event_pass_tier_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/evolution_chain_display_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/evolution_quest_template"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/feature_gate"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/form_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/fort_power_up_level_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/friendship_milestone_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/gender_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/iap_category_display"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/iap_item_display"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/invasion_npc_display_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/item_expiration_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/item_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/language_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/level_up_rewards"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/limited_purchase_sku_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/location_card_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/mega_evo_level_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/move_sequence_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/move_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/non_combat_move_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/party_play_general_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/photo_sets_settings_proto"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_extended_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_family"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_home_energy_costs"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_home_form_reversions"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_scale_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokemon_upgrades"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/pokestop_invasion_availability_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/quest_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/recommended_search_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/roll_back"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/settings_override_rule"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/singletons"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/sticker_metadata"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/tappable_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/temporary_evolution_settings"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/type_effective"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/vs_seeker_loot"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/vs_seeker_pokemon_rewards"
	"github.com/Hazels-Lab/pogo-masterfile/packages/go/weather_affinities"
)

// MasterfileEntry is the marker interface implemented by every per-discriminator
// Entry type generated under this module. Use a type switch to extract a
// concrete entry from a parse result.
//
// The marker method is exported because Go's unexported-method sealing trick
// only works within a single package. Foreign types could implement this
// interface, but the only thing that produces values of it is ParseMasterfile
// which only returns generated types.
type MasterfileEntry interface {
	MasterfileEntry()
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
		var e pokemon_extended_settings.PokemonExtendedSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "genderSettings":
		var e gender_settings.GenderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonSettings":
		var e pokemon_settings.PokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarCustomization":
		var e avatar_customization.AvatarCustomizationEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarItemDisplay":
		var e avatar_item_display.AvatarItemDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapItemDisplay":
		var e iap_item_display.IapItemDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "formSettings":
		var e form_settings.FormSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "badgeSettings":
		var e badge_settings.BadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stickerMetadata":
		var e sticker_metadata.StickerMetadataEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonFamily":
		var e pokemon_family.PokemonFamilyEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPassTierSettings":
		var e event_pass_tier_settings.EventPassTierSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "moveSettings":
		var e move_settings.MoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "moveSequenceSettings":
		var e move_sequence_settings.MoveSequenceSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatMove":
		var e combat_move.CombatMoveEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "settingsOverrideRule":
		var e settings_override_rule.SettingsOverrideRuleEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "locationCardSettings":
		var e location_card_settings.LocationCardSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemSettings":
		var e item_settings.ItemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "megaEvoLevelSettings":
		var e mega_evo_level_settings.MegaEvoLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatLeague":
		var e combat_league.CombatLeagueEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "invasionNpcDisplaySettings":
		var e invasion_npc_display_settings.InvasionNpcDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "levelUpRewards":
		var e level_up_rewards.LevelUpRewardsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "evolutionChainDisplaySettings":
		var e evolution_chain_display_settings.EvolutionChainDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "clientQuestTemplate":
		var e client_quest_template.ClientQuestTemplateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "temporaryEvolutionSettings":
		var e temporary_evolution_settings.TemporaryEvolutionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerLoot":
		var e vs_seeker_loot.VsSeekerLootEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "photoSetsSettingsProto":
		var e photo_sets_settings_proto.PhotoSetsSettingsProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "evolutionQuestTemplate":
		var e evolution_quest_template.EvolutionQuestTemplateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "limitedPurchaseSkuSettings":
		var e limited_purchase_sku_settings.LimitedPurchaseSkuSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatRankingProtoSettings":
		var e combat_ranking_proto_settings.CombatRankingProtoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemExpirationSettings":
		var e item_expiration_settings.ItemExpirationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatType":
		var e combat_type.CombatTypeEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "typeEffective":
		var e type_effective.TypeEffectiveEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "featureGate":
		var e feature_gate.FeatureGateEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapCategoryDisplay":
		var e iap_category_display.IapCategoryDisplayEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "codeGateProto":
		var e code_gate_proto.CodeGateProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "recommendedSearchSettings":
		var e recommended_search_settings.RecommendedSearchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatNpcTrainer":
		var e combat_npc_trainer.CombatNpcTrainerEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "nonCombatMoveSettings":
		var e non_combat_move_settings.NonCombatMoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyActivityCategorySettings":
		var e buddy_activity_category_settings.BuddyActivityCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadMoveLevelSettings":
		var e bread_move_level_settings.BreadMoveLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyEmotionLevelSettings":
		var e buddy_emotion_level_settings.BuddyEmotionLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeFormReversions":
		var e pokemon_home_form_reversions.PokemonHomeFormReversionsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokestopInvasionAvailabilitySettings":
		var e pokestop_invasion_availability_settings.PokestopInvasionAvailabilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "weatherAffinities":
		var e weather_affinities.WeatherAffinitiesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "friendshipMilestoneSettings":
		var e friendship_milestone_settings.FriendshipMilestoneSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonScaleSettings":
		var e pokemon_scale_settings.PokemonScaleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyLevelSettings":
		var e buddy_level_settings.BuddyLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "rollBack":
		var e roll_back.RollBackEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "tappableSettings":
		var e tappable_settings.TappableSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "fortPowerUpLevelSettings":
		var e fort_power_up_level_settings.FortPowerUpLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeEnergyCosts":
		var e pokemon_home_energy_costs.PokemonHomeEnergyCostsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatNpcPersonality":
		var e combat_npc_personality.CombatNpcPersonalityEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "languageSettings":
		var e language_settings.LanguageSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "questSettings":
		var e quest_settings.QuestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarGroupOrderSettings":
		var e avatar_group_order_settings.AvatarGroupOrderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPassSettings":
		var e event_pass_settings.EventPassSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyPlayGeneralSettings":
		var e party_play_general_settings.PartyPlayGeneralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonUpgrades":
		var e pokemon_upgrades.PokemonUpgradesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerPokemonRewards":
		var e vs_seeker_pokemon_rewards.VsSeekerPokemonRewardsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "accessibilitySettings":
		var e singletons.AccessibilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "additiveSceneSettings":
		var e singletons.AdditiveSceneSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "addressablePokemonSettings":
		var e singletons.AddressablePokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "addressBookImportSettings":
		var e singletons.AddressBookImportSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "advancedSettings":
		var e singletons.AdvancedSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "arPhotoFeatureFlags":
		var e singletons.ArPhotoFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "arTelemetrySettings":
		var e singletons.ArTelemetrySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "assetRefreshProto":
		var e singletons.AssetRefreshProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarFeatureFlags":
		var e singletons.AvatarFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarStoreFooterFlags":
		var e singletons.AvatarStoreFooterFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "avatarStoreSubcategoryFilteringFlags":
		var e singletons.AvatarStoreSubcategoryFilteringFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "backgroundModeSettings":
		var e singletons.BackgroundModeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleAnimationSettings":
		var e singletons.BattleAnimationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleHubBadgeSettings":
		var e singletons.BattleHubBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleHubOrderSettings":
		var e singletons.BattleHubOrderSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleInputBufferSettings":
		var e singletons.BattleInputBufferSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battlePartySettings":
		var e singletons.BattlePartySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleSettings":
		var e singletons.BattleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "battleVisualSettings":
		var e singletons.BattleVisualSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "belugaPokemonWhitelist":
		var e singletons.BelugaPokemonWhitelistEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "bestFriendsPlusSettings":
		var e singletons.BestFriendsPlusSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadBattleClientSettings":
		var e singletons.BreadBattleClientSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadFeatureFlags":
		var e singletons.BreadFeatureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadLobbyCounterSettings":
		var e singletons.BreadLobbyCounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadLobbyUpdateSettings":
		var e singletons.BreadLobbyUpdateSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadMoveMappings":
		var e singletons.BreadMoveMappingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadPokemonScalingSettings":
		var e singletons.BreadPokemonScalingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "breadSettings":
		var e singletons.BreadSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyEncounterCameoSettings":
		var e singletons.BuddyEncounterCameoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyHungerSettings":
		var e singletons.BuddyHungerSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyInteractionSettings":
		var e singletons.BuddyInteractionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddySwapSettings":
		var e singletons.BuddySwapSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "buddyWalkSettings":
		var e singletons.BuddyWalkSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "bulkHealingSettings":
		var e singletons.BulkHealingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "butterflyCollectorSettings":
		var e singletons.ButterflyCollectorSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "campfireSettings":
		var e singletons.CampfireSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "catchRadiusMultiplierSettings":
		var e singletons.CatchRadiusMultiplierSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatCompetitiveSeasonSettings":
		var e singletons.CombatCompetitiveSeasonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatLeagueSettings":
		var e singletons.CombatLeagueSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatSettings":
		var e singletons.CombatSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "combatStatStageSettings":
		var e singletons.CombatStatStageSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "contestSettings":
		var e singletons.ContestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "conversationSettings":
		var e singletons.ConversationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "crossGameSocialSettings":
		var e singletons.CrossGameSocialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "dailyAdventureIncenseSettings":
		var e singletons.DailyAdventureIncenseSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "deepLinkingSettings":
		var e singletons.DeepLinkingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eggHatchImprovementsSettings":
		var e singletons.EggHatchImprovementsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "encounterSettings":
		var e singletons.EncounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "errorReportingSettings":
		var e singletons.ErrorReportingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "eventPlannerPopularNotificationSettings":
		var e singletons.EventPlannerPopularNotificationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "externalAddressableAssetsSettings":
		var e singletons.ExternalAddressableAssetsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "featureUnlockLevelSettings":
		var e singletons.FeatureUnlockLevelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "geotargetedQuestSettings":
		var e singletons.GeotargetedQuestSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "giftingSettings":
		var e singletons.GiftingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "guiSearchSettings":
		var e singletons.GuiSearchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "gymBadgeSettings":
		var e singletons.GymBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "hapticsSettings":
		var e singletons.HapticsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "iapSettings":
		var e singletons.IapSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ibfcLightweightSettings":
		var e singletons.IbfcLightweightSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "impressionTrackingSettings":
		var e singletons.ImpressionTrackingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "inAppSurveySettings":
		var e singletons.InAppSurveySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "incidentPrioritySettings":
		var e singletons.IncidentPrioritySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "incidentVisibilitySettings":
		var e singletons.IncidentVisibilitySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "inventorySettings":
		var e singletons.InventorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "irisSocialSettings":
		var e singletons.IrisSocialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "irisSocialUxFunnelSettings":
		var e singletons.IrisSocialUxFunnelSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemCurrencyValues":
		var e singletons.ItemCurrencyValuesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "itemInventoryUpdateSettings":
		var e singletons.ItemInventoryUpdateSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "joinRaidViaFriendListSettings":
		var e singletons.JoinRaidViaFriendListSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "languageSelectorSettings":
		var e singletons.LanguageSelectorSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "luckyPokemonSettings":
		var e singletons.LuckyPokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mainMenuChanges":
		var e singletons.MainMenuChangesEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mapDisplaySettings":
		var e singletons.MapDisplaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mapObjectsInteractionRangeSettings":
		var e singletons.MapObjectsInteractionRangeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "megaEvoSettings":
		var e singletons.MegaEvoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "monodepthSettings":
		var e singletons.MonodepthSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "mpSettings":
		var e singletons.MpSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "naturalArtDayNightFeatureSettings":
		var e singletons.NaturalArtDayNightFeatureSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "nearbyPokemonSettings":
		var e singletons.NearbyPokemonSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "neutralAvatarSettings":
		var e singletons.NeutralAvatarSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "onboardingSettings":
		var e singletons.OnboardingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "optimizationsProto":
		var e singletons.OptimizationsProtoEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyDarkLaunchSettings":
		var e singletons.PartyDarkLaunchSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyIapBoostsSettings":
		var e singletons.PartyIapBoostsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "partyRecommendationSettings":
		var e singletons.PartyRecommendationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "photoSettings":
		var e singletons.PhotoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "plannerSettings":
		var e singletons.PlannerSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "playerBonusSystemSettings":
		var e singletons.PlayerBonusSystemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "playerLevel":
		var e singletons.PlayerLevelEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokeballThrowPropertySettings":
		var e singletons.PokeballThrowPropertySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokecoinPurchaseDisplayGmt":
		var e singletons.PokecoinPurchaseDisplayGmtEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexCategoriesSettings":
		var e singletons.PokedexCategoriesSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexSizeStatsSystemSettings":
		var e singletons.PokedexSizeStatsSystemSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexv2FeatureFlags":
		var e singletons.Pokedexv2featureFlagsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokedexV2Settings":
		var e singletons.PokedexV2settingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonFxSettings":
		var e singletons.PokemonFxSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonHomeSettings":
		var e singletons.PokemonHomeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "pokemonTagSettings":
		var e singletons.PokemonTagSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "popupControlSettings":
		var e singletons.PopupControlSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "postcardCollectionSettings":
		var e singletons.PostcardCollectionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "powerUpPokestopsSettings":
		var e singletons.PowerUpPokestopsSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "primalEvoSettings":
		var e singletons.PrimalEvoSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ptcOauthSettings":
		var e singletons.PtcOauthSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "quickInviteSettings":
		var e singletons.QuickInviteSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "raidLobbyCounterSettings":
		var e singletons.RaidLobbyCounterSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "raidSettings":
		var e singletons.RaidSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "referralSettings":
		var e singletons.ReferralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "remoteTradeSettings":
		var e singletons.RemoteTradeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeBadgeSettings":
		var e singletons.RouteBadgeSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeCreationSettings":
		var e singletons.RouteCreationSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeDiscoverySettings":
		var e singletons.RouteDiscoverySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routePinSettings":
		var e singletons.RoutePinSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routePlaySettings":
		var e singletons.RoutePlaySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routesNearbyNotifSettings":
		var e singletons.RoutesNearbyNotifSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routesPartyPlayInteropSettings":
		var e singletons.RoutesPartyPlayInteropSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "routeStampCategorySettings":
		var e singletons.RouteStampCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sharedFusionSettings":
		var e singletons.SharedFusionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sharedMoveSettings":
		var e singletons.SharedMoveSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sourdoughMoveMappingSettings":
		var e singletons.SourdoughMoveMappingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "specialEggSettings":
		var e singletons.SpecialEggSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "sponsoredGeofenceGiftSettings":
		var e singletons.SponsoredGeofenceGiftSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "squashSettings":
		var e singletons.SquashSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stampCollectionSettings":
		var e singletons.StampCollectionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stationedPokemonTableSettings":
		var e singletons.StationedPokemonTableSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "stickerCategorySettings":
		var e singletons.StickerCategorySettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "styleShopSettings":
		var e singletons.StyleShopSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "ticketGiftingSettings":
		var e singletons.TicketGiftingSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "todayViewSettings":
		var e singletons.TodayViewSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "tutorialSettings":
		var e singletons.TutorialSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "usernameSuggestionSettings":
		var e singletons.UsernameSuggestionSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "verboseLogCombatSettings":
		var e singletons.VerboseLogCombatSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "verboseLogRaidSettings":
		var e singletons.VerboseLogRaidSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vistaGeneralSettings":
		var e singletons.VistaGeneralSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vnextBattleConfig":
		var e singletons.VnextBattleConfigEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerClientSettings":
		var e singletons.VsSeekerClientSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "vsSeekerScheduleSettings":
		var e singletons.VsSeekerScheduleSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "weatherBonusSettings":
		var e singletons.WeatherBonusSettingsEntry
		if err := json.Unmarshal(data, &e); err != nil {
			return nil, err
		}
		return e, nil
	case "":
		switch probe.TemplateID {
		case "AMUSE_BOUCHE_WELCOME_BACK_REWARDS":
			var e singletons.AmuseBoucheWelcomeBackRewardsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "EVENT_SERVER_SETTINGS":
			var e singletons.EventServerSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "QUEST_DIALOGUE_INBOX_SETTINGS":
			var e singletons.QuestDialogueInboxSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "RAID_ENTRY_COST_SETTINGS":
			var e singletons.RaidEntryCostSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "SOFT_SFIDA_SETTINGS":
			var e singletons.SoftSfidaSettingsEntry
			if err := json.Unmarshal(data, &e); err != nil {
				return nil, err
			}
			return e, nil
		case "SPECIAL_RESEARCH_VISUAL_REFRESH_SETTINGS":
			var e singletons.SpecialResearchVisualRefreshSettingsEntry
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

// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings", 9 entries (variant aliases).

import type { S } from "../_utils";
import type { NonCombatMoveSettings } from "./index";

export type NonCombatMoveSettingsV0388MoveSpacialRend = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0388_MOVE_SPACIAL_REND",
		{
			bonusEffect: {
				spaceBonus: {
					encounterRangeMeters: 80;
					pokemonVisibleRangeMeters: 90;
					serverAllowableEncounterRangeMeters: 350;
				};
			};
			bonusType: "SPACE_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "600000";
			uniqueId: "SPACIAL_REND";
		}
	>
>;
export type NonCombatMoveSettingsV0394MoveRoarOfTime = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0394_MOVE_ROAR_OF_TIME",
		{
			bonusEffect: {
				timeBonus: {
					affectedItems: ["ITEM_INCENSE_ORDINARY", "ITEM_INCENSE_DAILY_ADVENTURE", "ITEM_STAR_PIECE", "ITEM_LUCKY_EGG"];
				};
			};
			bonusType: "TIME_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "360000";
			uniqueId: "ROAR_OF_TIME";
		}
	>
>;
export type NonCombatMoveSettingsV0404MoveSunsteelStrike = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE",
		{
			bonusEffect: {
				dayNightBonus: {
					incenseItem: "ITEM_INCENSE_DAY_BONUS";
				};
			};
			bonusType: "DAY_BONUS";
			cost: {
				candyCost: 3;
				stardustCost: 3000;
			};
			durationMs: "600000";
			uniqueId: "SUNSTEEL_STRIKE";
		}
	>
>;
export type NonCombatMoveSettingsV0405MoveMoongeistBeam = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM",
		{
			bonusEffect: {
				dayNightBonus: {
					incenseItem: "ITEM_INCENSE_NIGHT_BONUS";
				};
			};
			bonusType: "NIGHT_BONUS";
			cost: {
				candyCost: 3;
				stardustCost: 3000;
			};
			durationMs: "600000";
			uniqueId: "MOONGEIST_BEAM";
		}
	>
>;
export type NonCombatMoveSettingsV0466MoveFreezeShock = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0466_MOVE_FREEZE_SHOCK",
		{
			bonusEffect: {
				slowFreezeBonus: {
					catchCircleOuterTimeScaleOverride: 0.5;
					catchCircleSpeedChangeThreshold: 1;
					catchCircleTimeScaleOverride: 0.5;
					catchRateIncreaseMultiplier: 1.25;
				};
			};
			bonusType: "FREEZE_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "600000";
			uniqueId: "FREEZE_SHOCK";
		}
	>
>;
export type NonCombatMoveSettingsV0467MoveIceBurn = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0467_MOVE_ICE_BURN",
		{
			bonusEffect: {
				slowFreezeBonus: {
					catchCircleOuterTimeScaleOverride: 4;
					catchCircleSpeedChangeThreshold: 1.6;
					catchCircleTimeScaleOverride: 0.2;
					catchRateIncreaseMultiplier: 1.5;
				};
			};
			bonusType: "SLOW_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "600000";
			uniqueId: "ICE_BURN";
		}
	>
>;
export type NonCombatMoveSettingsV0469MoveBehemothBlade = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE",
		{
			bonusEffect: {
				attackDefenseBonus: {
					attributes: [
						{
							attackMultiplier: 1.1;
							combatTypes: ["COMBAT_TYPE_RAID"];
						},
						{
							attackMultiplier: 1.05;
							combatTypes: ["COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
						},
					];
				};
			};
			bonusType: "ATTACK_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "360000";
			uniqueId: "BEHEMOTH_BLADE";
		}
	>
>;
export type NonCombatMoveSettingsV0470MoveBehemothBash = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH",
		{
			bonusEffect: {
				attackDefenseBonus: {
					attributes: [
						{
							combatTypes: ["COMBAT_TYPE_RAID"];
							defenseMultiplier: 1.1;
						},
						{
							combatTypes: ["COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
							defenseMultiplier: 1.05;
						},
					];
				};
			};
			bonusType: "DEFENSE_BONUS";
			cost: {
				candyCost: 5;
				stardustCost: 5000;
			};
			durationMs: "360000";
			uniqueId: "BEHEMOTH_BASH";
		}
	>
>;
export type NonCombatMoveSettingsV0482MoveDynamaxCannon = S<
	NonCombatMoveSettings<
		"NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON",
		{
			bonusEffect: {
				maxMoveBonus: {
					excludedPokedexIds: ["ZACIAN", "ZAMAZENTA"];
					numAllMaxMoveLevelIncrease: 1;
				};
			};
			bonusType: "MAX_MOVE_BONUS";
			cost: {
				candyCost: 30;
				stardustCost: 5000;
			};
			durationMs: "600000";
			uniqueId: "DYNAMAX_CANNON";
		}
	>
>;

// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings", 9 entries (structural types).

import type { W } from "../_utils";

export interface NonCombatMoveSettings<TemplateID extends string = string, TData extends NonCombatMoveSettingsData = NonCombatMoveSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		nonCombatMoveSettings: TData & {
			enableMultiUse: true;
			enableNonCombatMove: true;
			extraDurationMs: "4000";
		};
	};
}
export type NonCombatMoveSettingsType = W<NonCombatMoveSettings>;

export interface NonCombatMoveSettingsData {
	bonusEffect: {
		attackDefenseBonus?: {
			attributes: [
				{
					attackMultiplier?: number;
					combatTypes: ["COMBAT_TYPE_RAID"];
					defenseMultiplier?: number;
				},
				{
					attackMultiplier?: number;
					combatTypes: ["COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
					defenseMultiplier?: number;
				},
			];
		};
		dayNightBonus?: {
			incenseItem: "ITEM_INCENSE_DAY_BONUS" | "ITEM_INCENSE_NIGHT_BONUS";
		};
		maxMoveBonus?: {
			excludedPokedexIds: ["ZACIAN", "ZAMAZENTA"];
			numAllMaxMoveLevelIncrease: number;
		};
		slowFreezeBonus?: {
			catchCircleOuterTimeScaleOverride: number;
			catchCircleSpeedChangeThreshold: number;
			catchCircleTimeScaleOverride: number;
			catchRateIncreaseMultiplier: number;
		};
		spaceBonus?: {
			encounterRangeMeters: number;
			pokemonVisibleRangeMeters: number;
			serverAllowableEncounterRangeMeters: number;
		};
		timeBonus?: {
			affectedItems: ["ITEM_INCENSE_ORDINARY", "ITEM_INCENSE_DAILY_ADVENTURE", "ITEM_STAR_PIECE", "ITEM_LUCKY_EGG"];
		};
	};
	bonusType: "ATTACK_BONUS" | "DAY_BONUS" | "DEFENSE_BONUS" | "FREEZE_BONUS" | "MAX_MOVE_BONUS" | "NIGHT_BONUS" | "SLOW_BONUS" | "SPACE_BONUS" | "TIME_BONUS";
	cost: {
		candyCost: number;
		stardustCost: number;
	};
	durationMs: "360000" | "600000";
	uniqueId:
		| "BEHEMOTH_BASH"
		| "BEHEMOTH_BLADE"
		| "DYNAMAX_CANNON"
		| "FREEZE_SHOCK"
		| "ICE_BURN"
		| "MOONGEIST_BEAM"
		| "ROAR_OF_TIME"
		| "SPACIAL_REND"
		| "SUNSTEEL_STRIKE";
}

export type NonCombat =
	| "NON_COMBAT_V0388_MOVE_SPACIAL_REND"
	| "NON_COMBAT_V0394_MOVE_ROAR_OF_TIME"
	| "NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE"
	| "NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM"
	| "NON_COMBAT_V0466_MOVE_FREEZE_SHOCK"
	| "NON_COMBAT_V0467_MOVE_ICE_BURN"
	| "NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE"
	| "NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH"
	| "NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON";

// Generated from Pokémon GO masterfile — group "nonCombatMoveSettings", 9 entries (structural types).

export type * from "./variants";

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

export type NonCombatMoveSettingsMasterfileEntry =
	| NonCombatMoveSettingsV0388MoveSpacialRend
	| NonCombatMoveSettingsV0394MoveRoarOfTime
	| NonCombatMoveSettingsV0404MoveSunsteelStrike
	| NonCombatMoveSettingsV0405MoveMoongeistBeam
	| NonCombatMoveSettingsV0466MoveFreezeShock
	| NonCombatMoveSettingsV0467MoveIceBurn
	| NonCombatMoveSettingsV0469MoveBehemothBlade
	| NonCombatMoveSettingsV0470MoveBehemothBash
	| NonCombatMoveSettingsV0482MoveDynamaxCannon;

export type NonCombatMoveSettingsTemplateID = NonCombatMoveSettingsMasterfileEntry["templateId"];

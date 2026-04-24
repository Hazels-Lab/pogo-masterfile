export interface NonCombatMoveSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: NonCombatMoveSettingsData<TemplateID>;
}

export interface NonCombatMoveSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	nonCombatMoveSettings: {
		bonusEffect: {
			attackDefenseBonus?: {
				attributes: [
					{
						attackMultiplier?: 1.1;
						combatTypes: [
							"COMBAT_TYPE_RAID"
						];
						defenseMultiplier?: 1.1;
					},
					{
						attackMultiplier?: 1.05;
						combatTypes: [
							"COMBAT_TYPE_DMAX",
							"COMBAT_TYPE_GMAX"
						];
						defenseMultiplier?: 1.05;
					}
				];
			};
			dayNightBonus?: {
				incenseItem: "ITEM_INCENSE_DAY_BONUS" | "ITEM_INCENSE_NIGHT_BONUS";
			};
			maxMoveBonus?: {
				excludedPokedexIds: [
					"ZACIAN",
					"ZAMAZENTA"
				];
				numAllMaxMoveLevelIncrease: 1;
			};
			slowFreezeBonus?: {
				catchCircleOuterTimeScaleOverride: 0.5 | 4;
				catchCircleSpeedChangeThreshold: 1 | 1.6;
				catchCircleTimeScaleOverride: 0.2 | 0.5;
				catchRateIncreaseMultiplier: 1.25 | 1.5;
			};
			spaceBonus?: {
				encounterRangeMeters: 80;
				pokemonVisibleRangeMeters: 90;
				serverAllowableEncounterRangeMeters: 350;
			};
			timeBonus?: {
				affectedItems: [
					"ITEM_INCENSE_ORDINARY",
					"ITEM_INCENSE_DAILY_ADVENTURE",
					"ITEM_STAR_PIECE",
					"ITEM_LUCKY_EGG"
				];
			};
		};
		bonusType: "ATTACK_BONUS" | "DAY_BONUS" | "DEFENSE_BONUS" | "FREEZE_BONUS" | "MAX_MOVE_BONUS" | "NIGHT_BONUS" | "SLOW_BONUS" | "SPACE_BONUS" | "TIME_BONUS";
		cost: {
			candyCost: 3 | 5 | 30;
			stardustCost: 3000 | 5000;
		};
		durationMs: "360000" | "600000";
		enableMultiUse: true;
		enableNonCombatMove: true;
		extraDurationMs: "4000";
		uniqueId: "BEHEMOTH_BASH" | "BEHEMOTH_BLADE" | "DYNAMAX_CANNON" | "FREEZE_SHOCK" | "ICE_BURN" | "MOONGEIST_BEAM" | "ROAR_OF_TIME" | "SPACIAL_REND" | "SUNSTEEL_STRIKE";
	};
}

export type NonCombatMoveSettingsV0388MoveSpacialRend = NonCombatMoveSettings<"NON_COMBAT_V0388_MOVE_SPACIAL_REND">;
export type NonCombatMoveSettingsV0394MoveRoarOfTime = NonCombatMoveSettings<"NON_COMBAT_V0394_MOVE_ROAR_OF_TIME">;
export type NonCombatMoveSettingsV0404MoveSunsteelStrike = NonCombatMoveSettings<"NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE">;
export type NonCombatMoveSettingsV0405MoveMoongeistBeam = NonCombatMoveSettings<"NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM">;
export type NonCombatMoveSettingsV0466MoveFreezeShock = NonCombatMoveSettings<"NON_COMBAT_V0466_MOVE_FREEZE_SHOCK">;
export type NonCombatMoveSettingsV0467MoveIceBurn = NonCombatMoveSettings<"NON_COMBAT_V0467_MOVE_ICE_BURN">;
export type NonCombatMoveSettingsV0469MoveBehemothBlade = NonCombatMoveSettings<"NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE">;
export type NonCombatMoveSettingsV0470MoveBehemothBash = NonCombatMoveSettings<"NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH">;
export type NonCombatMoveSettingsV0482MoveDynamaxCannon = NonCombatMoveSettings<"NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON">;

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

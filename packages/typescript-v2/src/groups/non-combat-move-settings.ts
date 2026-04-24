export interface NonCombatMoveSettings<T extends string> {
	templateId: T;
	data: NonCombatMoveSettingsData<T>;
}

export interface NonCombatMoveSettingsData<T extends string> {
	templateId: T;
	nonCombatMoveSettings: unknown;
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

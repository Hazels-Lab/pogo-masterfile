// Generated from Pokémon GO masterfile — group "combatMove", split "dragon", 13 entries.

import type { S } from "../../_utils";
import type { CombatMove } from "../types";

export type CombatMoveV0080MoveTwister = S<
	CombatMove<
		"COMBAT_V0080_MOVE_TWISTER",
		{
			energyDelta: -40;
			power: 70;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "TWISTER";
			vfxName: "twister";
		}
	>
>;
export type CombatMoveV0082MoveDragonPulse = S<
	CombatMove<
		"COMBAT_V0082_MOVE_DRAGON_PULSE",
		{
			energyDelta: -55;
			power: 90;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRAGON_PULSE";
			vfxName: "dragon_pulse";
		}
	>
>;
export type CombatMoveV0083MoveDragonClaw = S<
	CombatMove<
		"COMBAT_V0083_MOVE_DRAGON_CLAW",
		{
			energyDelta: -50;
			power: 80;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRAGON_CLAW";
			vfxName: "dragon_claw";
		}
	>
>;
export type CombatMoveV0204MoveDragonBreathFast = S<
	CombatMove<
		"COMBAT_V0204_MOVE_DRAGON_BREATH_FAST",
		{
			energyDelta: 4;
			power: 3;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRAGON_BREATH_FAST";
			vfxName: "dragon_breath_fast";
		}
	>
>;
export type CombatMoveV0253MoveDragonTailFast = S<
	CombatMove<
		"COMBAT_V0253_MOVE_DRAGON_TAIL_FAST",
		{
			durationTurns: 2;
			energyDelta: 12;
			power: 9;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRAGON_TAIL_FAST";
			vfxName: "dragon_tail_fast";
		}
	>
>;
export type CombatMoveV0277MoveOutrage = S<
	CombatMove<
		"COMBAT_V0277_MOVE_OUTRAGE",
		{
			energyDelta: -60;
			power: 110;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "OUTRAGE";
			vfxName: "outrage";
		}
	>
>;
export type CombatMoveV0285MoveDracoMeteor = S<
	CombatMove<
		"COMBAT_V0285_MOVE_DRACO_METEOR",
		{
			buffs: {
				attackerAttackStatStageChange: -2;
				buffActivationChance: 1;
			};
			energyDelta: -65;
			power: 150;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRACO_METEOR";
			vfxName: "draco_meteor";
		}
	>
>;
export type CombatMoveV0379MoveBreakingSwipe = S<
	CombatMove<
		"COMBAT_V0379_MOVE_BREAKING_SWIPE",
		{
			buffs: {
				buffActivationChance: 1;
				targetAttackStatStageChange: -1;
			};
			energyDelta: -50;
			power: 50;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "BREAKING_SWIPE";
			vfxName: "breaking_swipe";
		}
	>
>;
export type CombatMoveV0388MoveSpacialRend = S<
	CombatMove<
		"COMBAT_V0388_MOVE_SPACIAL_REND",
		{
			energyDelta: -55;
			power: 95;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "SPACIAL_REND";
			vfxName: "spacial_rend";
		}
	>
>;
export type CombatMoveV0394MoveRoarOfTime = S<
	CombatMove<
		"COMBAT_V0394_MOVE_ROAR_OF_TIME",
		{
			energyDelta: -65;
			power: 150;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "ROAR_OF_TIME";
			vfxName: "roar_of_time";
		}
	>
>;
export type CombatMoveV0482MoveDynamaxCannon = S<
	CombatMove<
		"COMBAT_V0482_MOVE_DYNAMAX_CANNON",
		{
			energyDelta: -45;
			power: 80;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DYNAMAX_CANNON";
			vfxName: "dynamax_cannon";
		}
	>
>;
export type CombatMoveV0484MoveClangingScales = S<
	CombatMove<
		"COMBAT_V0484_MOVE_CLANGING_SCALES",
		{
			buffs: {
				attackerDefenseStatStageChange: -1;
				buffActivationChance: 1;
			};
			energyDelta: -45;
			power: 120;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "CLANGING_SCALES";
			vfxName: "clanging_scales";
		}
	>
>;
export type CombatMoveV0486MoveDragonEnergy = S<
	CombatMove<
		"COMBAT_V0486_MOVE_DRAGON_ENERGY",
		{
			energyDelta: -45;
			power: 90;
			type: "POKEMON_TYPE_DRAGON";
			uniqueId: "DRAGON_ENERGY";
			vfxName: "dragon_energy";
		}
	>
>;

export type CombatMoveDragonMasterfileEntry =
	| CombatMoveV0080MoveTwister
	| CombatMoveV0082MoveDragonPulse
	| CombatMoveV0083MoveDragonClaw
	| CombatMoveV0204MoveDragonBreathFast
	| CombatMoveV0253MoveDragonTailFast
	| CombatMoveV0277MoveOutrage
	| CombatMoveV0285MoveDracoMeteor
	| CombatMoveV0379MoveBreakingSwipe
	| CombatMoveV0388MoveSpacialRend
	| CombatMoveV0394MoveRoarOfTime
	| CombatMoveV0482MoveDynamaxCannon
	| CombatMoveV0484MoveClangingScales
	| CombatMoveV0486MoveDragonEnergy;

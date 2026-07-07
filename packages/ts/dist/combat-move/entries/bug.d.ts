// Generated from Pokémon GO masterfile — group "combatMove", split "bug", 11 entries.

import type { S } from "../../_utils";
import type { CombatMove } from "../types";

export type CombatMoveV0022MoveMegahorn = S<
	CombatMove<
		"COMBAT_V0022_MOVE_MEGAHORN",
		{
			energyDelta: -55;
			power: 110;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "MEGAHORN";
			vfxName: "megahorn";
		}
	>
>;
export type CombatMoveV0049MoveBugBuzz = S<
	CombatMove<
		"COMBAT_V0049_MOVE_BUG_BUZZ",
		{
			buffs: {
				buffActivationChance: 0.3;
				targetDefenseStatStageChange: -1;
			};
			energyDelta: -60;
			power: 100;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "BUG_BUZZ";
			vfxName: "bug_buzz";
		}
	>
>;
export type CombatMoveV0099MoveSignalBeam = S<
	CombatMove<
		"COMBAT_V0099_MOVE_SIGNAL_BEAM",
		{
			buffs: {
				buffActivationChance: 0.2;
				targetAttackStatStageChange: -1;
				targetDefenseStatStageChange: -1;
			};
			energyDelta: -55;
			power: 75;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "SIGNAL_BEAM";
			vfxName: "signal_beam";
		}
	>
>;
export type CombatMoveV0100MoveXScissor = S<
	CombatMove<
		"COMBAT_V0100_MOVE_X_SCISSOR",
		{
			energyDelta: -40;
			power: 65;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "X_SCISSOR";
			vfxName: "x_scissor";
		}
	>
>;
export type CombatMoveV0200MoveFuryCutterFast = S<
	CombatMove<
		"COMBAT_V0200_MOVE_FURY_CUTTER_FAST",
		{
			energyDelta: 4;
			power: 3;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "FURY_CUTTER_FAST";
			vfxName: "fury_cutter_fast";
		}
	>
>;
export type CombatMoveV0201MoveBugBiteFast = S<
	CombatMove<
		"COMBAT_V0201_MOVE_BUG_BITE_FAST",
		{
			energyDelta: 3;
			power: 4;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "BUG_BITE_FAST";
			vfxName: "bug_bite_fast";
		}
	>
>;
export type CombatMoveV0260MoveInfestationFast = S<
	CombatMove<
		"COMBAT_V0260_MOVE_INFESTATION_FAST",
		{
			durationTurns: 2;
			energyDelta: 12;
			power: 6;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "INFESTATION_FAST";
			vfxName: "infestation_fast";
		}
	>
>;
export type CombatMoveV0261MoveStruggleBugFast = S<
	CombatMove<
		"COMBAT_V0261_MOVE_STRUGGLE_BUG_FAST",
		{
			durationTurns: 2;
			energyDelta: 8;
			power: 9;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "STRUGGLE_BUG_FAST";
			vfxName: "struggle_bug_fast";
		}
	>
>;
export type CombatMoveV0262MoveSilverWind = S<
	CombatMove<
		"COMBAT_V0262_MOVE_SILVER_WIND",
		{
			buffs: {
				attackerAttackStatStageChange: 1;
				attackerDefenseStatStageChange: 1;
				buffActivationChance: 0.1;
			};
			energyDelta: -45;
			power: 75;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "SILVER_WIND";
			vfxName: "silver_wind";
		}
	>
>;
export type CombatMoveV0306MoveLunge = S<
	CombatMove<
		"COMBAT_V0306_MOVE_LUNGE",
		{
			buffs: {
				buffActivationChance: 1;
				targetAttackStatStageChange: -1;
			};
			energyDelta: -45;
			power: 60;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "LUNGE";
			vfxName: "lunge";
		}
	>
>;
export type CombatMoveV0311MoveFellStinger = S<
	CombatMove<
		"COMBAT_V0311_MOVE_FELL_STINGER",
		{
			buffs: {
				attackerAttackStatStageChange: 1;
				buffActivationChance: 1;
			};
			energyDelta: -35;
			power: 20;
			type: "POKEMON_TYPE_BUG";
			uniqueId: "FELL_STINGER";
			vfxName: "fell_stinger";
		}
	>
>;

export type CombatMoveBugMasterfileEntry =
	| CombatMoveV0022MoveMegahorn
	| CombatMoveV0049MoveBugBuzz
	| CombatMoveV0099MoveSignalBeam
	| CombatMoveV0100MoveXScissor
	| CombatMoveV0200MoveFuryCutterFast
	| CombatMoveV0201MoveBugBiteFast
	| CombatMoveV0260MoveInfestationFast
	| CombatMoveV0261MoveStruggleBugFast
	| CombatMoveV0262MoveSilverWind
	| CombatMoveV0306MoveLunge
	| CombatMoveV0311MoveFellStinger;

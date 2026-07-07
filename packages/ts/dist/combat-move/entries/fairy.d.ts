// Generated from Pokémon GO masterfile — group "combatMove", split "fairy", 9 entries.

import type { S } from "../../_utils";
import type { CombatMove } from "../types";

export type CombatMoveV0084MoveDisarmingVoice = S<
	CombatMove<
		"COMBAT_V0084_MOVE_DISARMING_VOICE",
		{
			energyDelta: -45;
			power: 70;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "DISARMING_VOICE";
			vfxName: "disarming_voice";
		}
	>
>;
export type CombatMoveV0085MoveDrainingKiss = S<
	CombatMove<
		"COMBAT_V0085_MOVE_DRAINING_KISS",
		{
			energyDelta: -55;
			power: 60;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "DRAINING_KISS";
			vfxName: "draining_kiss";
		}
	>
>;
export type CombatMoveV0086MoveDazzlingGleam = S<
	CombatMove<
		"COMBAT_V0086_MOVE_DAZZLING_GLEAM",
		{
			energyDelta: -55;
			power: 90;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "DAZZLING_GLEAM";
			vfxName: "dazzling_gleam";
		}
	>
>;
export type CombatMoveV0087MoveMoonblast = S<
	CombatMove<
		"COMBAT_V0087_MOVE_MOONBLAST",
		{
			buffs: {
				buffActivationChance: 0.1;
				targetAttackStatStageChange: -1;
			};
			energyDelta: -60;
			power: 110;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "MOONBLAST";
			vfxName: "moonblast";
		}
	>
>;
export type CombatMoveV0088MovePlayRough = S<
	CombatMove<
		"COMBAT_V0088_MOVE_PLAY_ROUGH",
		{
			energyDelta: -60;
			power: 90;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "PLAY_ROUGH";
			vfxName: "play_rough";
		}
	>
>;
export type CombatMoveV0320MoveCharmFast = S<
	CombatMove<
		"COMBAT_V0320_MOVE_CHARM_FAST",
		{
			durationTurns: 2;
			energyDelta: 8;
			power: 12;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "CHARM_FAST";
			vfxName: "charm_fast";
		}
	>
>;
export type CombatMoveV0350MoveFairyWindFast = S<
	CombatMove<
		"COMBAT_V0350_MOVE_FAIRY_WIND_FAST",
		{
			durationTurns: 1;
			energyDelta: 9;
			power: 4;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "FAIRY_WIND_FAST";
			vfxName: "fairy_wind_fast";
		}
	>
>;
export type CombatMoveV0387MoveGeomancyFast = S<
	CombatMove<
		"COMBAT_V0387_MOVE_GEOMANCY_FAST",
		{
			durationTurns: 2;
			energyDelta: 13;
			power: 8;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "GEOMANCY_FAST";
			vfxName: "geomancy_fast";
		}
	>
>;
export type CombatMoveV0390MoveNaturesMadness = S<
	CombatMove<
		"COMBAT_V0390_MOVE_NATURES_MADNESS",
		{
			buffs: {
				buffActivationChance: 1;
				targetDefenseStatStageChange: -1;
			};
			energyDelta: -50;
			power: 80;
			type: "POKEMON_TYPE_FAIRY";
			uniqueId: "NATURES_MADNESS";
			vfxName: "natures_madness";
		}
	>
>;

export type CombatMoveFairyMasterfileEntry =
	| CombatMoveV0084MoveDisarmingVoice
	| CombatMoveV0085MoveDrainingKiss
	| CombatMoveV0086MoveDazzlingGleam
	| CombatMoveV0087MoveMoonblast
	| CombatMoveV0088MovePlayRough
	| CombatMoveV0320MoveCharmFast
	| CombatMoveV0350MoveFairyWindFast
	| CombatMoveV0387MoveGeomancyFast
	| CombatMoveV0390MoveNaturesMadness;

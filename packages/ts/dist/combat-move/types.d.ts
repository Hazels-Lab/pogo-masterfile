// Generated from Pokémon GO masterfile — group "combatMove", 319 entries (structural types).

import type { W } from "../_utils";
import type { TypeEffectiveTemplateID } from "../type-effective/entries";

export interface CombatMove<TemplateID extends string = string, TData extends CombatMoveData = CombatMoveData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatMove: TData;
	};
}
export type CombatMoveType = W<CombatMove>;

export interface CombatMoveData {
	buffs?: {
		attackerAttackStatStageChange?: number;
		attackerDefenseStatStageChange?: number;
		buffActivationChance?: number;
		targetAttackStatStageChange?: number;
		targetDefenseStatStageChange?: number;
	};
	durationTurns?: number;
	energyDelta?: number;
	power?: number;
	type: TypeEffectiveTemplateID;
	uniqueId: string;
	vfxName: string;
}

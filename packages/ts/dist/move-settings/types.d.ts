// Generated from Pokémon GO masterfile — group "moveSettings", 390 entries (structural types).

import type { W } from "../_utils";
import type { TypeEffectiveTemplateID } from "../type-effective/entries";

export interface MoveSettings<TemplateID extends string = string, TData extends MoveSettingsData = MoveSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		moveSettings: TData;
	};
}
export type MoveSettingsType = W<MoveSettings>;

export interface MoveSettingsData {
	accuracyChance?: number;
	animationId: number;
	criticalChance?: number;
	damageWindowEndMs?: number;
	damageWindowStartMs?: number;
	durationMs: number;
	energyDelta?: number;
	healScalar?: number;
	isLocked?: boolean;
	movementId: string;
	obMoveSettingsNumber18?: [number, number, number, number];
	pokemonType: TypeEffectiveTemplateID;
	power?: number;
	staminaLossScalar?: number;
	trainerLevelMax?: number;
	trainerLevelMin?: number;
	vfxName: string;
}

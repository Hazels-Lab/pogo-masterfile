export interface CombatNpcPersonality<T extends string> {
	templateId: T;
	data: CombatNpcPersonalityData<T>;
}

export interface CombatNpcPersonalityData<T extends string> {
	templateId: T;
	combatNpcPersonality: unknown;
}

export type CombatNpcPersonalityEasy = CombatNpcPersonality<"TRAINER_PERSONALITY_EASY">;
export type CombatNpcPersonalityHard = CombatNpcPersonality<"TRAINER_PERSONALITY_HARD">;
export type CombatNpcPersonalityMedium = CombatNpcPersonality<"TRAINER_PERSONALITY_MEDIUM">;

export type CombatNpcPersonalityMasterfileEntry =
	| CombatNpcPersonalityEasy
	| CombatNpcPersonalityHard
	| CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

export interface CombatNpcPersonality<T extends string> {
	templateId: T;
	data: CombatNpcPersonalityData<T>;
}

export interface CombatNpcPersonalityData<T extends string> {
	templateId: T;
	combatNpcPersonality: {
		defensiveMaximumScore?: 1;
		defensiveMinimumScore?: 1;
		offensiveMaximumScore: 0.75 | 1;
		offensiveMinimumScore: 0.5 | 0.75 | 1;
		personalityName: T;
		specialChance: 0.33 | 0.66 | 1;
		superEffectiveChance: 0.25 | 0.66 | 1;
	};
}

export type CombatNpcPersonalityEasy = CombatNpcPersonality<"TRAINER_PERSONALITY_EASY">;
export type CombatNpcPersonalityHard = CombatNpcPersonality<"TRAINER_PERSONALITY_HARD">;
export type CombatNpcPersonalityMedium = CombatNpcPersonality<"TRAINER_PERSONALITY_MEDIUM">;

export type CombatNpcPersonalityMasterfileEntry =
	| CombatNpcPersonalityEasy
	| CombatNpcPersonalityHard
	| CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

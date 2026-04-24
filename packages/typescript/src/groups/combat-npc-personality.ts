export interface CombatNpcPersonality<TemplateID extends string> {
	templateId: TemplateID;
	data: CombatNpcPersonalityData<TemplateID>;
}

export interface CombatNpcPersonalityData<TemplateID extends string> {
	templateId: TemplateID;
	combatNpcPersonality: {
		defensiveMaximumScore?: 1;
		defensiveMinimumScore?: 1;
		offensiveMaximumScore: CombatNpcPersonalityOffensiveMaximumScore;
		offensiveMinimumScore: CombatNpcPersonalityOffensiveMinimumScore;
		personalityName: TemplateID;
		specialChance: CombatNpcPersonalitySpecialChance;
		superEffectiveChance: CombatNpcPersonalitySuperEffectiveChance;
	};
}

export type CombatNpcPersonalityOffensiveMaximumScore = 0.75 | 1;

export type CombatNpcPersonalityOffensiveMinimumScore = 0.5 | 0.75 | 1;

export type CombatNpcPersonalitySpecialChance = 0.33 | 0.66 | 1;

export type CombatNpcPersonalitySuperEffectiveChance = 0.25 | 0.66 | 1;

export type CombatNpcPersonalityEasy = CombatNpcPersonality<"TRAINER_PERSONALITY_EASY">;
export type CombatNpcPersonalityHard = CombatNpcPersonality<"TRAINER_PERSONALITY_HARD">;
export type CombatNpcPersonalityMedium = CombatNpcPersonality<"TRAINER_PERSONALITY_MEDIUM">;

export type CombatNpcPersonalityMasterfileEntry =
	| CombatNpcPersonalityEasy
	| CombatNpcPersonalityHard
	| CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

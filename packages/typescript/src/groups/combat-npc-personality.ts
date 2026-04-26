export interface CombatNpcPersonality<
	TemplateID extends string = string,
	TData extends CombatNpcPersonalityData = CombatNpcPersonalityData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		combatNpcPersonality: TData & {
			personalityName: TemplateID;
		};
	};
}

export interface CombatNpcPersonalityData {
	defensiveMaximumScore?: number;
	defensiveMinimumScore?: number;
	offensiveMaximumScore?: number;
	offensiveMinimumScore?: number;
	specialChance?: number;
	superEffectiveChance?: number;
}

export type CombatNpcPersonalityEasy = CombatNpcPersonality<
	"TRAINER_PERSONALITY_EASY",
	{
		offensiveMaximumScore: 0.75;
		offensiveMinimumScore: 0.5;
		specialChance: 0.33;
		superEffectiveChance: 0.25;
	}
>;
export type CombatNpcPersonalityHard = CombatNpcPersonality<
	"TRAINER_PERSONALITY_HARD",
	{
		defensiveMaximumScore: 1;
		defensiveMinimumScore: 1;
		offensiveMaximumScore: 1;
		offensiveMinimumScore: 1;
		specialChance: 1;
		superEffectiveChance: 1;
	}
>;
export type CombatNpcPersonalityMedium = CombatNpcPersonality<
	"TRAINER_PERSONALITY_MEDIUM",
	{
		offensiveMaximumScore: 1;
		offensiveMinimumScore: 0.75;
		specialChance: 0.66;
		superEffectiveChance: 0.66;
	}
>;

export type CombatNpcPersonalityMasterfileEntry = CombatNpcPersonalityEasy | CombatNpcPersonalityHard | CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

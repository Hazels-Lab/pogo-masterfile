// Generated from Pokémon GO masterfile — group "combatNpcPersonality", 3 entries (structural types).

export interface CombatNpcPersonality<TemplateID extends string = string, TData extends CombatNpcPersonalityData = CombatNpcPersonalityData> {
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
	offensiveMaximumScore: number;
	offensiveMinimumScore: number;
	specialChance: number;
	superEffectiveChance: number;
}

// Generated from Pokémon GO masterfile — group "combatNpcPersonality", 3 entries (structural types).

export type * from "./variants";

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

export type CombatNpcPersonalityMasterfileEntry = CombatNpcPersonalityEasy | CombatNpcPersonalityHard | CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

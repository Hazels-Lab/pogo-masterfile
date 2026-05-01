// Generated from Pokémon GO masterfile — group "combatNpcPersonality", 3 entries (structural types).

import type { W } from "../_utils";

export interface CombatNpcPersonality<TemplateID extends string = string, TData extends CombatNpcPersonalityData = CombatNpcPersonalityData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        combatNpcPersonality: TData & {
            personalityName: TemplateID;
        };
    };
}
export type CombatNpcPersonalityType = W<CombatNpcPersonality>;

export interface CombatNpcPersonalityData {
    defensiveMaximumScore?: number;
    defensiveMinimumScore?: number;
    offensiveMaximumScore: number;
    offensiveMinimumScore: number;
    specialChance: number;
    superEffectiveChance: number;
}

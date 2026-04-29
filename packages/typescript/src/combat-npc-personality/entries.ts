// Generated from Pokémon GO masterfile — group "combatNpcPersonality", 3 entries (variant aliases).

import type { S } from "../_utils";
import type { CombatNpcPersonality } from "./index";

export type CombatNpcPersonalityEasy = S<
	CombatNpcPersonality<
		"TRAINER_PERSONALITY_EASY",
		{
			offensiveMaximumScore: 0.75;
			offensiveMinimumScore: 0.5;
			specialChance: 0.33;
			superEffectiveChance: 0.25;
		}
	>
>;
export type CombatNpcPersonalityHard = S<
	CombatNpcPersonality<
		"TRAINER_PERSONALITY_HARD",
		{
			defensiveMaximumScore: 1;
			defensiveMinimumScore: 1;
			offensiveMaximumScore: 1;
			offensiveMinimumScore: 1;
			specialChance: 1;
			superEffectiveChance: 1;
		}
	>
>;
export type CombatNpcPersonalityMedium = S<
	CombatNpcPersonality<
		"TRAINER_PERSONALITY_MEDIUM",
		{
			offensiveMaximumScore: 1;
			offensiveMinimumScore: 0.75;
			specialChance: 0.66;
			superEffectiveChance: 0.66;
		}
	>
>;

export type CombatNpcPersonalityMasterfileEntry = CombatNpcPersonalityEasy | CombatNpcPersonalityHard | CombatNpcPersonalityMedium;

export type CombatNpcPersonalityTemplateID = CombatNpcPersonalityMasterfileEntry["templateId"];

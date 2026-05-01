// Generated from Pokémon GO masterfile — group "evolutionQuestTemplate", 37 entries (structural types).

import type { W } from "../_utils";

export interface EvolutionQuestTemplate<TemplateID extends string = string, TData extends EvolutionQuestTemplateData = EvolutionQuestTemplateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		evolutionQuestTemplate: TData & {
			context: "EVOLUTION_QUEST";
			questTemplateId: TemplateID;
		};
	};
}
export type EvolutionQuestTemplateType = W<EvolutionQuestTemplate>;

export interface EvolutionQuestTemplateData {
	display: {
		description:
			| "CHALLENGE_BUDDY_AFFECTION_PLURAL"
			| "CHALLENGE_BUDDY_AFFECTION_SINGLE"
			| "CHALLENGE_BUDDY_TREAT_PLURAL"
			| "quest_buddy_walk_km_plural"
			| "quest_catch_type_dark_plural"
			| "quest_catch_type_dragon_plural"
			| "quest_catch_type_fighting_plural"
			| "quest_catch_type_poison_plural"
			| "quest_catch_type_psychic_plural"
			| "quest_defeat_dark_or_steel_type_raid"
			| "quest_defeat_dark_type_raid_and_max_battle"
			| "quest_defeat_water_type_raid_and_max_battle"
			| "quest_fight_type_ghost_plural"
			| "quest_fight_type_ghost_psychic_plural"
			| "quest_fight_type_psychic_plural"
			| "quest_incense_singular"
			| "quest_land_excellent_plural"
			| "quest_win_raid_plural";
		title:
			| "CHALLENGE_BUDDY_AFFECTION_PLURAL"
			| "CHALLENGE_BUDDY_AFFECTION_SINGLE"
			| "CHALLENGE_BUDDY_TREAT_PLURAL"
			| "quest_buddy_walk_km_plural"
			| "quest_catch_type_dark_plural"
			| "quest_catch_type_dragon_plural"
			| "quest_catch_type_fighting_plural"
			| "quest_catch_type_poison_plural"
			| "quest_catch_type_psychic_plural"
			| "quest_defeat_dark_or_steel_type_raid"
			| "quest_defeat_dark_type_raid_and_max_battle"
			| "quest_defeat_water_type_raid_and_max_battle"
			| "quest_fight_type_ghost_plural"
			| "quest_fight_type_ghost_psychic_plural"
			| "quest_fight_type_psychic_plural"
			| "quest_incense_singular"
			| "quest_land_excellent_plural"
			| "quest_win_raid_plural";
	};
	goals: [
		{
			condition?: Array<{
				type:
					| "WITH_COMBAT_TYPE"
					| "WITH_OPPONENT_POKEMON_BATTLE_STATUS"
					| "WITH_POKEMON_TYPE"
					| "WITH_THROW_TYPE"
					| "WITH_WIN_BATTLE_STATUS"
					| "WITH_WIN_RAID_STATUS";
				withCombatType?: {
					combatType: Array<"COMBAT_TYPE_DMAX" | "COMBAT_TYPE_GMAX" | "COMBAT_TYPE_RAID">;
				};
				withOpponentPokemonBattleStatus?: {
					opponentPokemonType: Array<"POKEMON_TYPE_GHOST" | "POKEMON_TYPE_PSYCHIC">;
					requireDefeat: boolean;
				};
				withPokemonType?: {
					pokemonType: Array<
						| "POKEMON_TYPE_DARK"
						| "POKEMON_TYPE_DRAGON"
						| "POKEMON_TYPE_FIGHTING"
						| "POKEMON_TYPE_POISON"
						| "POKEMON_TYPE_PSYCHIC"
						| "POKEMON_TYPE_STEEL"
						| "POKEMON_TYPE_WATER"
					>;
				};
				withThrowType?: {
					throwType: "ACTIVITY_CATCH_EXCELLENT_THROW";
				};
			}>;
			target: number;
		},
	];
	questType:
		| "QUEST_BUDDY_EARN_AFFECTION_POINTS"
		| "QUEST_BUDDY_EVOLUTION_WALK"
		| "QUEST_BUDDY_FEED"
		| "QUEST_CATCH_POKEMON"
		| "QUEST_COMPLETE_BATTLE"
		| "QUEST_COMPLETE_RAID_BATTLE"
		| "QUEST_FIGHT_POKEMON"
		| "QUEST_LAND_THROW"
		| "QUEST_USE_INCENSE";
}

// Generated from Pokémon GO masterfile — group "evolutionQuestTemplate", 37 entries.

export interface EvolutionQuestTemplate<
	TemplateID extends string = string,
	TData extends EvolutionQuestTemplateData = EvolutionQuestTemplateData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		evolutionQuestTemplate: TData & {
			context: "EVOLUTION_QUEST";
			questTemplateId: TemplateID;
		};
	};
}

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

export type EvolutionQuestTemplateAnnihilapeCdEvolutionQuest = EvolutionQuestTemplate<
	"ANNIHILAPE_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_fighting_plural";
			title: "quest_catch_type_fighting_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_FIGHTING"];
						};
					},
				];
				target: 20;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplateAnnihilapeEvolutionQuest = EvolutionQuestTemplate<
	"ANNIHILAPE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_fight_type_ghost_psychic_plural";
			title: "quest_fight_type_ghost_psychic_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
						withOpponentPokemonBattleStatus: {
							opponentPokemonType: ["POKEMON_TYPE_GHOST", "POKEMON_TYPE_PSYCHIC"];
							requireDefeat: true;
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_FIGHT_POKEMON";
	}
>;
export type EvolutionQuestTemplateBisharpKingambitEvolutionQuest = EvolutionQuestTemplate<
	"BISHARP_KINGAMBIT_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_defeat_dark_or_steel_type_raid";
			title: "quest_defeat_dark_or_steel_type_raid";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_WIN_BATTLE_STATUS";
					},
					{
						type: "WITH_COMBAT_TYPE";
						withCombatType: {
							combatType: ["COMBAT_TYPE_RAID"];
						};
					},
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DARK", "POKEMON_TYPE_STEEL"];
						};
					},
				];
				target: 15;
			},
		];
		questType: "QUEST_COMPLETE_BATTLE";
	}
>;
export type EvolutionQuestTemplateChanseyEvolutionQuest = EvolutionQuestTemplate<
	"CHANSEY_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 15;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateCharcadetArmarougeEvolutionQuest = EvolutionQuestTemplate<
	"CHARCADET_ARMAROUGE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_fight_type_psychic_plural";
			title: "quest_fight_type_psychic_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
						withOpponentPokemonBattleStatus: {
							opponentPokemonType: ["POKEMON_TYPE_PSYCHIC"];
							requireDefeat: true;
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_FIGHT_POKEMON";
	}
>;
export type EvolutionQuestTemplateCharcadetCeruledgeEvolutionQuest = EvolutionQuestTemplate<
	"CHARCADET_CERULEDGE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_fight_type_ghost_plural";
			title: "quest_fight_type_ghost_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
						withOpponentPokemonBattleStatus: {
							opponentPokemonType: ["POKEMON_TYPE_GHOST"];
							requireDefeat: true;
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_FIGHT_POKEMON";
	}
>;
export type EvolutionQuestTemplateDipplinEvolutionQuest = EvolutionQuestTemplate<
	"DIPPLIN_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_dragon_plural";
			title: "quest_catch_type_dragon_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DRAGON"];
						};
					},
				];
				target: 7;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplateEspeonCdEvolutionQuest = EvolutionQuestTemplate<
	"ESPEON_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 1;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateEspeonEvolutionQuest = EvolutionQuestTemplate<
	"ESPEON_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 10;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateFlorgesCdEvolutionQuest = EvolutionQuestTemplate<
	"FLORGES_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
			title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
		};
		goals: [
			{
				target: 7;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateFlorgesEvolutionQuest = EvolutionQuestTemplate<
	"FLORGES_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
			title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
		};
		goals: [
			{
				target: 20;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateKubfuRapidStrikeEvolutionQuest = EvolutionQuestTemplate<
	"KUBFU_RAPID_STRIKE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_defeat_water_type_raid_and_max_battle";
			title: "quest_defeat_water_type_raid_and_max_battle";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_WIN_BATTLE_STATUS";
					},
					{
						type: "WITH_COMBAT_TYPE";
						withCombatType: {
							combatType: ["COMBAT_TYPE_RAID", "COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
						};
					},
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_WATER"];
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_COMPLETE_BATTLE";
	}
>;
export type EvolutionQuestTemplateKubfuSingleStrikeEvolutionQuest = EvolutionQuestTemplate<
	"KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_defeat_dark_type_raid_and_max_battle";
			title: "quest_defeat_dark_type_raid_and_max_battle";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_WIN_BATTLE_STATUS";
					},
					{
						type: "WITH_COMBAT_TYPE";
						withCombatType: {
							combatType: ["COMBAT_TYPE_RAID", "COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
						};
					},
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DARK"];
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_COMPLETE_BATTLE";
	}
>;
export type EvolutionQuestTemplateMiloticEvolutionQuest = EvolutionQuestTemplate<
	"MILOTIC_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 20;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateMrMimeEvolutionQuest = EvolutionQuestTemplate<
	"MR_MIME_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 15;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateNaganadelEvolutionQuest = EvolutionQuestTemplate<
	"NAGANADEL_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_dragon_plural";
			title: "quest_catch_type_dragon_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DRAGON"];
						};
					},
				];
				target: 20;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplateOverqwilEvolutionQuest = EvolutionQuestTemplate<
	"OVERQWIL_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_win_raid_plural";
			title: "quest_win_raid_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_WIN_RAID_STATUS";
					},
				];
				target: 10;
			},
		];
		questType: "QUEST_COMPLETE_RAID_BATTLE";
	}
>;
export type EvolutionQuestTemplatePanchamBuddyEventEvolutionQuest = EvolutionQuestTemplate<
	"PANCHAM_BUDDY_EVENT_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_dark_plural";
			title: "quest_catch_type_dark_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DARK"];
						};
					},
				];
				target: 10;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplatePanchamEvolutionQuest = EvolutionQuestTemplate<
	"PANCHAM_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_dark_plural";
			title: "quest_catch_type_dark_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_DARK"];
						};
					},
				];
				target: 32;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplatePawmotBuddyEventEvolutionQuest = EvolutionQuestTemplate<
	"PAWMOT_BUDDY_EVENT_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 5;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplatePawmotCdEvolutionQuest = EvolutionQuestTemplate<
	"PAWMOT_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 1;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplatePawmotEvolutionQuest = EvolutionQuestTemplate<
	"PAWMOT_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 25;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateRunerigusEvolutionQuest = EvolutionQuestTemplate<
	"RUNERIGUS_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_win_raid_plural";
			title: "quest_win_raid_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_WIN_RAID_STATUS";
					},
				];
				target: 10;
			},
		];
		questType: "QUEST_COMPLETE_RAID_BATTLE";
	}
>;
export type EvolutionQuestTemplateSirfetchdEvolutionQuest = EvolutionQuestTemplate<
	"SIRFETCHD_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_land_excellent_plural";
			title: "quest_land_excellent_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_THROW_TYPE";
						withThrowType: {
							throwType: "ACTIVITY_CATCH_EXCELLENT_THROW";
						};
					},
				];
				target: 10;
			},
		];
		questType: "QUEST_LAND_THROW";
	}
>;
export type EvolutionQuestTemplateSlowbroGEvolutionQuest = EvolutionQuestTemplate<
	"SLOWBRO_G_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_poison_plural";
			title: "quest_catch_type_poison_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_POISON"];
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplateSlowkingGEvolutionQuest = EvolutionQuestTemplate<
	"SLOWKING_G_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_catch_type_psychic_plural";
			title: "quest_catch_type_psychic_plural";
		};
		goals: [
			{
				condition: [
					{
						type: "WITH_POKEMON_TYPE";
						withPokemonType: {
							pokemonType: ["POKEMON_TYPE_PSYCHIC"];
						};
					},
				];
				target: 30;
			},
		];
		questType: "QUEST_CATCH_POKEMON";
	}
>;
export type EvolutionQuestTemplateSneaslerEvolutionQuest = EvolutionQuestTemplate<
	"SNEASLER_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 7;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateSnomFrosmothEvolutionQuest = EvolutionQuestTemplate<
	"SNOM_FROSMOTH_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
			title: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
		};
		goals: [
			{
				target: 10;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateSpritzeeEvolutionQuest = EvolutionQuestTemplate<
	"SPRITZEE_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_incense_singular";
			title: "quest_incense_singular";
		};
		goals: [
			{
				target: 1;
			},
		];
		questType: "QUEST_USE_INCENSE";
	}
>;
export type EvolutionQuestTemplateSudowoodoEvolutionQuest = EvolutionQuestTemplate<
	"SUDOWOODO_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 15;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateSwirlixEvolutionQuest = EvolutionQuestTemplate<
	"SWIRLIX_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_TREAT_PLURAL";
			title: "CHALLENGE_BUDDY_TREAT_PLURAL";
		};
		goals: [
			{
				target: 25;
			},
		];
		questType: "QUEST_BUDDY_FEED";
	}
>;
export type EvolutionQuestTemplateSwoobatEvolutionQuest = EvolutionQuestTemplate<
	"SWOOBAT_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 1;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateSylveonBuddyEventEvolutionQuest = EvolutionQuestTemplate<
	"SYLVEON_BUDDY_EVENT_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
			title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
		};
		goals: [
			{
				target: 20;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateSylveonCdEvolutionQuest = EvolutionQuestTemplate<
	"SYLVEON_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
			title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
		};
		goals: [
			{
				target: 7;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateSylveonEvolutionQuest = EvolutionQuestTemplate<
	"SYLVEON_EVOLUTION_QUEST",
	{
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
			title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
		};
		goals: [
			{
				target: 70;
			},
		];
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
	}
>;
export type EvolutionQuestTemplateUmbreonCdEvolutionQuest = EvolutionQuestTemplate<
	"UMBREON_CD_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 1;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;
export type EvolutionQuestTemplateUmbreonEvolutionQuest = EvolutionQuestTemplate<
	"UMBREON_EVOLUTION_QUEST",
	{
		display: {
			description: "quest_buddy_walk_km_plural";
			title: "quest_buddy_walk_km_plural";
		};
		goals: [
			{
				target: 10;
			},
		];
		questType: "QUEST_BUDDY_EVOLUTION_WALK";
	}
>;

export type EvolutionQuestTemplateMasterfileEntry =
	| EvolutionQuestTemplateAnnihilapeCdEvolutionQuest
	| EvolutionQuestTemplateAnnihilapeEvolutionQuest
	| EvolutionQuestTemplateBisharpKingambitEvolutionQuest
	| EvolutionQuestTemplateChanseyEvolutionQuest
	| EvolutionQuestTemplateCharcadetArmarougeEvolutionQuest
	| EvolutionQuestTemplateCharcadetCeruledgeEvolutionQuest
	| EvolutionQuestTemplateDipplinEvolutionQuest
	| EvolutionQuestTemplateEspeonCdEvolutionQuest
	| EvolutionQuestTemplateEspeonEvolutionQuest
	| EvolutionQuestTemplateFlorgesCdEvolutionQuest
	| EvolutionQuestTemplateFlorgesEvolutionQuest
	| EvolutionQuestTemplateKubfuRapidStrikeEvolutionQuest
	| EvolutionQuestTemplateKubfuSingleStrikeEvolutionQuest
	| EvolutionQuestTemplateMiloticEvolutionQuest
	| EvolutionQuestTemplateMrMimeEvolutionQuest
	| EvolutionQuestTemplateNaganadelEvolutionQuest
	| EvolutionQuestTemplateOverqwilEvolutionQuest
	| EvolutionQuestTemplatePanchamBuddyEventEvolutionQuest
	| EvolutionQuestTemplatePanchamEvolutionQuest
	| EvolutionQuestTemplatePawmotBuddyEventEvolutionQuest
	| EvolutionQuestTemplatePawmotCdEvolutionQuest
	| EvolutionQuestTemplatePawmotEvolutionQuest
	| EvolutionQuestTemplateRunerigusEvolutionQuest
	| EvolutionQuestTemplateSirfetchdEvolutionQuest
	| EvolutionQuestTemplateSlowbroGEvolutionQuest
	| EvolutionQuestTemplateSlowkingGEvolutionQuest
	| EvolutionQuestTemplateSneaslerEvolutionQuest
	| EvolutionQuestTemplateSnomFrosmothEvolutionQuest
	| EvolutionQuestTemplateSpritzeeEvolutionQuest
	| EvolutionQuestTemplateSudowoodoEvolutionQuest
	| EvolutionQuestTemplateSwirlixEvolutionQuest
	| EvolutionQuestTemplateSwoobatEvolutionQuest
	| EvolutionQuestTemplateSylveonBuddyEventEvolutionQuest
	| EvolutionQuestTemplateSylveonCdEvolutionQuest
	| EvolutionQuestTemplateSylveonEvolutionQuest
	| EvolutionQuestTemplateUmbreonCdEvolutionQuest
	| EvolutionQuestTemplateUmbreonEvolutionQuest;

export type EvolutionQuestTemplateTemplateID = EvolutionQuestTemplateMasterfileEntry["templateId"];

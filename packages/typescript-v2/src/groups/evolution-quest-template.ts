export interface EvolutionQuestTemplate<TemplateID extends string> {
	templateId: TemplateID;
	data: EvolutionQuestTemplateData<TemplateID>;
}

export interface EvolutionQuestTemplateData<TemplateID extends string> {
	templateId: TemplateID;
	evolutionQuestTemplate: {
		context: "EVOLUTION_QUEST";
		display: {
			description: "CHALLENGE_BUDDY_AFFECTION_PLURAL" | "CHALLENGE_BUDDY_AFFECTION_SINGLE" | "CHALLENGE_BUDDY_TREAT_PLURAL" | "quest_buddy_walk_km_plural" | "quest_catch_type_dark_plural" | "quest_catch_type_dragon_plural" | "quest_catch_type_fighting_plural" | "quest_catch_type_poison_plural" | "quest_catch_type_psychic_plural" | "quest_defeat_dark_or_steel_type_raid" | "quest_defeat_dark_type_raid_and_max_battle" | "quest_defeat_water_type_raid_and_max_battle" | "quest_fight_type_ghost_plural" | "quest_fight_type_ghost_psychic_plural" | "quest_fight_type_psychic_plural" | "quest_incense_singular" | "quest_land_excellent_plural" | "quest_win_raid_plural";
			title: "CHALLENGE_BUDDY_AFFECTION_PLURAL" | "CHALLENGE_BUDDY_AFFECTION_SINGLE" | "CHALLENGE_BUDDY_TREAT_PLURAL" | "quest_buddy_walk_km_plural" | "quest_catch_type_dark_plural" | "quest_catch_type_dragon_plural" | "quest_catch_type_fighting_plural" | "quest_catch_type_poison_plural" | "quest_catch_type_psychic_plural" | "quest_defeat_dark_or_steel_type_raid" | "quest_defeat_dark_type_raid_and_max_battle" | "quest_defeat_water_type_raid_and_max_battle" | "quest_fight_type_ghost_plural" | "quest_fight_type_ghost_psychic_plural" | "quest_fight_type_psychic_plural" | "quest_incense_singular" | "quest_land_excellent_plural" | "quest_win_raid_plural";
		};
		goals: [
			{
				condition?: Array<
					{
						"type": "WITH_COMBAT_TYPE" | "WITH_OPPONENT_POKEMON_BATTLE_STATUS" | "WITH_POKEMON_TYPE" | "WITH_THROW_TYPE" | "WITH_WIN_BATTLE_STATUS" | "WITH_WIN_RAID_STATUS";
						withCombatType?: {
							combatType: Array<"COMBAT_TYPE_DMAX" | "COMBAT_TYPE_GMAX" | "COMBAT_TYPE_RAID">;
						};
						withOpponentPokemonBattleStatus?: {
							opponentPokemonType: Array<"POKEMON_TYPE_GHOST" | "POKEMON_TYPE_PSYCHIC">;
							requireDefeat: true;
						};
						withPokemonType?: {
							pokemonType: Array<"POKEMON_TYPE_DARK" | "POKEMON_TYPE_DRAGON" | "POKEMON_TYPE_FIGHTING" | "POKEMON_TYPE_POISON" | "POKEMON_TYPE_PSYCHIC" | "POKEMON_TYPE_STEEL" | "POKEMON_TYPE_WATER">;
						};
						withThrowType?: {
							throwType: "ACTIVITY_CATCH_EXCELLENT_THROW";
						};
					}
				>;
				target: 1 | 5 | 7 | 10 | 15 | 20 | 25 | 30 | 32 | 70;
			}
		];
		questTemplateId: TemplateID;
		questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS" | "QUEST_BUDDY_EVOLUTION_WALK" | "QUEST_BUDDY_FEED" | "QUEST_CATCH_POKEMON" | "QUEST_COMPLETE_BATTLE" | "QUEST_COMPLETE_RAID_BATTLE" | "QUEST_FIGHT_POKEMON" | "QUEST_LAND_THROW" | "QUEST_USE_INCENSE";
	};
}

export type EvolutionQuestTemplateAnnihilapeCdEvolutionQuest = EvolutionQuestTemplate<"ANNIHILAPE_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateAnnihilapeEvolutionQuest = EvolutionQuestTemplate<"ANNIHILAPE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateBisharpKingambitEvolutionQuest = EvolutionQuestTemplate<"BISHARP_KINGAMBIT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateChanseyEvolutionQuest = EvolutionQuestTemplate<"CHANSEY_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateCharcadetArmarougeEvolutionQuest = EvolutionQuestTemplate<"CHARCADET_ARMAROUGE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateCharcadetCeruledgeEvolutionQuest = EvolutionQuestTemplate<"CHARCADET_CERULEDGE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateDipplinEvolutionQuest = EvolutionQuestTemplate<"DIPPLIN_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateEspeonCdEvolutionQuest = EvolutionQuestTemplate<"ESPEON_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateEspeonEvolutionQuest = EvolutionQuestTemplate<"ESPEON_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateFlorgesCdEvolutionQuest = EvolutionQuestTemplate<"FLORGES_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateFlorgesEvolutionQuest = EvolutionQuestTemplate<"FLORGES_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateKubfuRapidStrikeEvolutionQuest = EvolutionQuestTemplate<"KUBFU_RAPID_STRIKE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateKubfuSingleStrikeEvolutionQuest = EvolutionQuestTemplate<"KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateMiloticEvolutionQuest = EvolutionQuestTemplate<"MILOTIC_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateMrMimeEvolutionQuest = EvolutionQuestTemplate<"MR_MIME_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateNaganadelEvolutionQuest = EvolutionQuestTemplate<"NAGANADEL_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateOverqwilEvolutionQuest = EvolutionQuestTemplate<"OVERQWIL_EVOLUTION_QUEST">;
export type EvolutionQuestTemplatePanchamBuddyEventEvolutionQuest = EvolutionQuestTemplate<"PANCHAM_BUDDY_EVENT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplatePanchamEvolutionQuest = EvolutionQuestTemplate<"PANCHAM_EVOLUTION_QUEST">;
export type EvolutionQuestTemplatePawmotBuddyEventEvolutionQuest = EvolutionQuestTemplate<"PAWMOT_BUDDY_EVENT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplatePawmotCdEvolutionQuest = EvolutionQuestTemplate<"PAWMOT_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplatePawmotEvolutionQuest = EvolutionQuestTemplate<"PAWMOT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateRunerigusEvolutionQuest = EvolutionQuestTemplate<"RUNERIGUS_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSirfetchdEvolutionQuest = EvolutionQuestTemplate<"SIRFETCHD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSlowbroGEvolutionQuest = EvolutionQuestTemplate<"SLOWBRO_G_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSlowkingGEvolutionQuest = EvolutionQuestTemplate<"SLOWKING_G_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSneaslerEvolutionQuest = EvolutionQuestTemplate<"SNEASLER_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSnomFrosmothEvolutionQuest = EvolutionQuestTemplate<"SNOM_FROSMOTH_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSpritzeeEvolutionQuest = EvolutionQuestTemplate<"SPRITZEE_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSudowoodoEvolutionQuest = EvolutionQuestTemplate<"SUDOWOODO_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSwirlixEvolutionQuest = EvolutionQuestTemplate<"SWIRLIX_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSwoobatEvolutionQuest = EvolutionQuestTemplate<"SWOOBAT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSylveonBuddyEventEvolutionQuest = EvolutionQuestTemplate<"SYLVEON_BUDDY_EVENT_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSylveonCdEvolutionQuest = EvolutionQuestTemplate<"SYLVEON_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateSylveonEvolutionQuest = EvolutionQuestTemplate<"SYLVEON_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateUmbreonCdEvolutionQuest = EvolutionQuestTemplate<"UMBREON_CD_EVOLUTION_QUEST">;
export type EvolutionQuestTemplateUmbreonEvolutionQuest = EvolutionQuestTemplate<"UMBREON_EVOLUTION_QUEST">;

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

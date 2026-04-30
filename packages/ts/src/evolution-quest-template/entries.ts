// Generated from Pokémon GO masterfile — group "evolutionQuestTemplate", 37 entries (variant aliases).

import type { S } from "../_utils";
import type { EvolutionQuestTemplate, EvolutionQuestTemplateData } from "./index";

export type EvolutionQuestTemplateAnnihilapeCdEvolutionQuest = S<EvolutionQuestTemplate<"ANNIHILAPE_CD_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_fighting_plural";
        title: "quest_catch_type_fighting_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_FIGHTING"
                        ];
                    };
                }
            ];
            target: 20;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplateAnnihilapeEvolutionQuest = S<EvolutionQuestTemplate<"ANNIHILAPE_EVOLUTION_QUEST", {
    display: {
        description: "quest_fight_type_ghost_psychic_plural";
        title: "quest_fight_type_ghost_psychic_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
                    withOpponentPokemonBattleStatus: {
                        opponentPokemonType: [
                            "POKEMON_TYPE_GHOST",
                            "POKEMON_TYPE_PSYCHIC"
                        ];
                        requireDefeat: true;
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_FIGHT_POKEMON";
}>>;
export type EvolutionQuestTemplateBisharpKingambitEvolutionQuest = S<EvolutionQuestTemplate<"BISHARP_KINGAMBIT_EVOLUTION_QUEST", {
    display: {
        description: "quest_defeat_dark_or_steel_type_raid";
        title: "quest_defeat_dark_or_steel_type_raid";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_WIN_BATTLE_STATUS";
                },
                {
                    "type": "WITH_COMBAT_TYPE";
                    withCombatType: {
                        combatType: [
                            "COMBAT_TYPE_RAID"
                        ];
                    };
                },
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DARK",
                            "POKEMON_TYPE_STEEL"
                        ];
                    };
                }
            ];
            target: 15;
        }
    ];
    questType: "QUEST_COMPLETE_BATTLE";
}>>;
export type EvolutionQuestTemplateChanseyEvolutionQuest = S<EvolutionQuestTemplate<"CHANSEY_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 15;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateCharcadetArmarougeEvolutionQuest = S<EvolutionQuestTemplate<"CHARCADET_ARMAROUGE_EVOLUTION_QUEST", {
    display: {
        description: "quest_fight_type_psychic_plural";
        title: "quest_fight_type_psychic_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
                    withOpponentPokemonBattleStatus: {
                        opponentPokemonType: [
                            "POKEMON_TYPE_PSYCHIC"
                        ];
                        requireDefeat: true;
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_FIGHT_POKEMON";
}>>;
export type EvolutionQuestTemplateCharcadetCeruledgeEvolutionQuest = S<EvolutionQuestTemplate<"CHARCADET_CERULEDGE_EVOLUTION_QUEST", {
    display: {
        description: "quest_fight_type_ghost_plural";
        title: "quest_fight_type_ghost_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_OPPONENT_POKEMON_BATTLE_STATUS";
                    withOpponentPokemonBattleStatus: {
                        opponentPokemonType: [
                            "POKEMON_TYPE_GHOST"
                        ];
                        requireDefeat: true;
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_FIGHT_POKEMON";
}>>;
export type EvolutionQuestTemplateDipplinEvolutionQuest = S<EvolutionQuestTemplate<"DIPPLIN_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_dragon_plural";
        title: "quest_catch_type_dragon_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DRAGON"
                        ];
                    };
                }
            ];
            target: 7;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplateEspeonCdEvolutionQuest = S<EvolutionQuestTemplate<"ESPEON_CD_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 1;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateEspeonEvolutionQuest = S<EvolutionQuestTemplate<"ESPEON_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 10;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateFlorgesCdEvolutionQuest = S<EvolutionQuestTemplate<"FLORGES_CD_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
        title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
    };
    goals: [
        {
            target: 7;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateFlorgesEvolutionQuest = S<EvolutionQuestTemplate<"FLORGES_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
        title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
    };
    goals: [
        {
            target: 20;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateKubfuRapidStrikeEvolutionQuest = S<EvolutionQuestTemplate<"KUBFU_RAPID_STRIKE_EVOLUTION_QUEST", {
    display: {
        description: "quest_defeat_water_type_raid_and_max_battle";
        title: "quest_defeat_water_type_raid_and_max_battle";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_WIN_BATTLE_STATUS";
                },
                {
                    "type": "WITH_COMBAT_TYPE";
                    withCombatType: {
                        combatType: [
                            "COMBAT_TYPE_RAID",
                            "COMBAT_TYPE_DMAX",
                            "COMBAT_TYPE_GMAX"
                        ];
                    };
                },
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_WATER"
                        ];
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_COMPLETE_BATTLE";
}>>;
export type EvolutionQuestTemplateKubfuSingleStrikeEvolutionQuest = S<EvolutionQuestTemplate<"KUBFU_SINGLE_STRIKE_EVOLUTION_QUEST", {
    display: {
        description: "quest_defeat_dark_type_raid_and_max_battle";
        title: "quest_defeat_dark_type_raid_and_max_battle";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_WIN_BATTLE_STATUS";
                },
                {
                    "type": "WITH_COMBAT_TYPE";
                    withCombatType: {
                        combatType: [
                            "COMBAT_TYPE_RAID",
                            "COMBAT_TYPE_DMAX",
                            "COMBAT_TYPE_GMAX"
                        ];
                    };
                },
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DARK"
                        ];
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_COMPLETE_BATTLE";
}>>;
export type EvolutionQuestTemplateMiloticEvolutionQuest = S<EvolutionQuestTemplate<"MILOTIC_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 20;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateMrMimeEvolutionQuest = S<EvolutionQuestTemplate<"MR_MIME_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 15;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateNaganadelEvolutionQuest = S<EvolutionQuestTemplate<"NAGANADEL_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_dragon_plural";
        title: "quest_catch_type_dragon_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DRAGON"
                        ];
                    };
                }
            ];
            target: 20;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplateOverqwilEvolutionQuest = S<EvolutionQuestTemplate<"OVERQWIL_EVOLUTION_QUEST", {
    display: {
        description: "quest_win_raid_plural";
        title: "quest_win_raid_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_WIN_RAID_STATUS";
                }
            ];
            target: 10;
        }
    ];
    questType: "QUEST_COMPLETE_RAID_BATTLE";
}>>;
export type EvolutionQuestTemplatePanchamBuddyEventEvolutionQuest = S<EvolutionQuestTemplate<"PANCHAM_BUDDY_EVENT_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_dark_plural";
        title: "quest_catch_type_dark_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DARK"
                        ];
                    };
                }
            ];
            target: 10;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplatePanchamEvolutionQuest = S<EvolutionQuestTemplate<"PANCHAM_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_dark_plural";
        title: "quest_catch_type_dark_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_DARK"
                        ];
                    };
                }
            ];
            target: 32;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplatePawmotBuddyEventEvolutionQuest = S<EvolutionQuestTemplate<"PAWMOT_BUDDY_EVENT_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 5;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplatePawmotCdEvolutionQuest = S<EvolutionQuestTemplate<"PAWMOT_CD_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 1;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplatePawmotEvolutionQuest = S<EvolutionQuestTemplate<"PAWMOT_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 25;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateRunerigusEvolutionQuest = S<EvolutionQuestTemplate<"RUNERIGUS_EVOLUTION_QUEST", {
    display: {
        description: "quest_win_raid_plural";
        title: "quest_win_raid_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_WIN_RAID_STATUS";
                }
            ];
            target: 10;
        }
    ];
    questType: "QUEST_COMPLETE_RAID_BATTLE";
}>>;
export type EvolutionQuestTemplateSirfetchdEvolutionQuest = S<EvolutionQuestTemplate<"SIRFETCHD_EVOLUTION_QUEST", {
    display: {
        description: "quest_land_excellent_plural";
        title: "quest_land_excellent_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_THROW_TYPE";
                    withThrowType: {
                        throwType: "ACTIVITY_CATCH_EXCELLENT_THROW";
                    };
                }
            ];
            target: 10;
        }
    ];
    questType: "QUEST_LAND_THROW";
}>>;
export type EvolutionQuestTemplateSlowbroGEvolutionQuest = S<EvolutionQuestTemplate<"SLOWBRO_G_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_poison_plural";
        title: "quest_catch_type_poison_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_POISON"
                        ];
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplateSlowkingGEvolutionQuest = S<EvolutionQuestTemplate<"SLOWKING_G_EVOLUTION_QUEST", {
    display: {
        description: "quest_catch_type_psychic_plural";
        title: "quest_catch_type_psychic_plural";
    };
    goals: [
        {
            condition: [
                {
                    "type": "WITH_POKEMON_TYPE";
                    withPokemonType: {
                        pokemonType: [
                            "POKEMON_TYPE_PSYCHIC"
                        ];
                    };
                }
            ];
            target: 30;
        }
    ];
    questType: "QUEST_CATCH_POKEMON";
}>>;
export type EvolutionQuestTemplateSneaslerEvolutionQuest = S<EvolutionQuestTemplate<"SNEASLER_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 7;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateSnomFrosmothEvolutionQuest = S<EvolutionQuestTemplate<"SNOM_FROSMOTH_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
        title: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
    };
    goals: [
        {
            target: 10;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateSpritzeeEvolutionQuest = S<EvolutionQuestTemplate<"SPRITZEE_EVOLUTION_QUEST", {
    display: {
        description: "quest_incense_singular";
        title: "quest_incense_singular";
    };
    goals: [
        {
            target: 1;
        }
    ];
    questType: "QUEST_USE_INCENSE";
}>>;
export type EvolutionQuestTemplateSudowoodoEvolutionQuest = S<EvolutionQuestTemplate<"SUDOWOODO_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 15;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateSwirlixEvolutionQuest = S<EvolutionQuestTemplate<"SWIRLIX_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_TREAT_PLURAL";
        title: "CHALLENGE_BUDDY_TREAT_PLURAL";
    };
    goals: [
        {
            target: 25;
        }
    ];
    questType: "QUEST_BUDDY_FEED";
}>>;
export type EvolutionQuestTemplateSwoobatEvolutionQuest = S<EvolutionQuestTemplate<"SWOOBAT_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 1;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateSylveonBuddyEventEvolutionQuest = S<EvolutionQuestTemplate<"SYLVEON_BUDDY_EVENT_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
        title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
    };
    goals: [
        {
            target: 20;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateSylveonCdEvolutionQuest = S<EvolutionQuestTemplate<"SYLVEON_CD_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
        title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
    };
    goals: [
        {
            target: 7;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateSylveonEvolutionQuest = S<EvolutionQuestTemplate<"SYLVEON_EVOLUTION_QUEST", {
    display: {
        description: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
        title: "CHALLENGE_BUDDY_AFFECTION_SINGLE";
    };
    goals: [
        {
            target: 70;
        }
    ];
    questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
}>>;
export type EvolutionQuestTemplateUmbreonCdEvolutionQuest = S<EvolutionQuestTemplate<"UMBREON_CD_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 1;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;
export type EvolutionQuestTemplateUmbreonEvolutionQuest = S<EvolutionQuestTemplate<"UMBREON_EVOLUTION_QUEST", {
    display: {
        description: "quest_buddy_walk_km_plural";
        title: "quest_buddy_walk_km_plural";
    };
    goals: [
        {
            target: 10;
        }
    ];
    questType: "QUEST_BUDDY_EVOLUTION_WALK";
}>>;

export type EvolutionQuestTemplateMasterfileEntry = EvolutionQuestTemplateAnnihilapeCdEvolutionQuest | EvolutionQuestTemplateAnnihilapeEvolutionQuest | EvolutionQuestTemplateBisharpKingambitEvolutionQuest | EvolutionQuestTemplateChanseyEvolutionQuest | EvolutionQuestTemplateCharcadetArmarougeEvolutionQuest | EvolutionQuestTemplateCharcadetCeruledgeEvolutionQuest | EvolutionQuestTemplateDipplinEvolutionQuest | EvolutionQuestTemplateEspeonCdEvolutionQuest | EvolutionQuestTemplateEspeonEvolutionQuest | EvolutionQuestTemplateFlorgesCdEvolutionQuest | EvolutionQuestTemplateFlorgesEvolutionQuest | EvolutionQuestTemplateKubfuRapidStrikeEvolutionQuest | EvolutionQuestTemplateKubfuSingleStrikeEvolutionQuest | EvolutionQuestTemplateMiloticEvolutionQuest | EvolutionQuestTemplateMrMimeEvolutionQuest | EvolutionQuestTemplateNaganadelEvolutionQuest | EvolutionQuestTemplateOverqwilEvolutionQuest | EvolutionQuestTemplatePanchamBuddyEventEvolutionQuest | EvolutionQuestTemplatePanchamEvolutionQuest | EvolutionQuestTemplatePawmotBuddyEventEvolutionQuest | EvolutionQuestTemplatePawmotCdEvolutionQuest | EvolutionQuestTemplatePawmotEvolutionQuest | EvolutionQuestTemplateRunerigusEvolutionQuest | EvolutionQuestTemplateSirfetchdEvolutionQuest | EvolutionQuestTemplateSlowbroGEvolutionQuest | EvolutionQuestTemplateSlowkingGEvolutionQuest | EvolutionQuestTemplateSneaslerEvolutionQuest | EvolutionQuestTemplateSnomFrosmothEvolutionQuest | EvolutionQuestTemplateSpritzeeEvolutionQuest | EvolutionQuestTemplateSudowoodoEvolutionQuest | EvolutionQuestTemplateSwirlixEvolutionQuest | EvolutionQuestTemplateSwoobatEvolutionQuest | EvolutionQuestTemplateSylveonBuddyEventEvolutionQuest | EvolutionQuestTemplateSylveonCdEvolutionQuest | EvolutionQuestTemplateSylveonEvolutionQuest | EvolutionQuestTemplateUmbreonCdEvolutionQuest | EvolutionQuestTemplateUmbreonEvolutionQuest;

export type EvolutionQuestTemplateTemplateID = EvolutionQuestTemplateMasterfileEntry["templateId"];

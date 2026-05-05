// Generated from Pokémon GO masterfile — group "clientQuestTemplate", 55 entries (variant aliases).

import type { S } from "../../_utils";
import type { ClientQuestTemplate } from "../types";

export type ClientQuestTemplateLevel71Cap = S<
	ClientQuestTemplate<
		"LEVEL_71_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_71_CAP_SUB_0";
						},
						{
							questId: "LEVEL_71_CAP_SUB_1";
						},
						{
							questId: "LEVEL_71_CAP_SUB_2";
						},
						{
							questId: "LEVEL_71_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 71;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_71_CAP_SUB_0";
					},
					{
						questId: "LEVEL_71_CAP_SUB_1";
					},
					{
						questId: "LEVEL_71_CAP_SUB_2";
					},
					{
						questId: "LEVEL_71_CAP_SUB_3";
					},
				];
				title: "title_level_71_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel71CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_71_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 15;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel71CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_71_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_LEGENDARY_POKEMON";
						},
					];
					target: 20;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_UPGRADE_POKEMON";
			};
			questDisplay: {
				description: "quest_power_up_legendary_plural";
				title: "quest_power_up_legendary_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel71CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_71_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_THROW_TYPE";
							withThrowType: {
								throwType: "ACTIVITY_CATCH_NICE_THROW";
							};
						},
					];
					target: 999;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_LAND_THROW";
			};
			questDisplay: {
				description: "quest_land_nice_plural";
				title: "quest_land_nice_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel71CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_71_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_SINGLE_DAY";
						},
					];
					target: 100;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_CATCH_POKEMON";
			};
			questDisplay: {
				description: "quest_catch_in_day_plural";
				title: "quest_catch_in_day_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel72Cap = S<
	ClientQuestTemplate<
		"LEVEL_72_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_72_CAP_SUB_0";
						},
						{
							questId: "LEVEL_72_CAP_SUB_1";
						},
						{
							questId: "LEVEL_72_CAP_SUB_2";
						},
						{
							questId: "LEVEL_72_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 72;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_72_CAP_SUB_0";
					},
					{
						questId: "LEVEL_72_CAP_SUB_1";
					},
					{
						questId: "LEVEL_72_CAP_SUB_2";
					},
					{
						questId: "LEVEL_72_CAP_SUB_3";
					},
				];
				title: "title_level_72_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel72CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_72_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 20;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel72CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_72_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_DAYS_IN_A_ROW";
						},
					];
					target: 7;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_ROUTE_COMPLETE";
			};
			questDisplay: {
				description: "quest_complete_routes_days_row_plural";
				title: "quest_complete_routes_days_row_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel72CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_72_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_SUPER_EFFECTIVE_CHARGE";
						},
					];
					target: 200;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_CHARGE_ATTACK";
			};
			questDisplay: {
				description: "quest_supereffective_charge_plural";
				title: "quest_supereffective_charge_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel72CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_72_CAP_SUB_3",
		{
			quest: {
				goal: {
					target: 1000000;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_GET_STARDUST";
			};
			questDisplay: {
				description: "quest_stardust_plural";
				title: "quest_stardust_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel73Cap = S<
	ClientQuestTemplate<
		"LEVEL_73_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_73_CAP_SUB_0";
						},
						{
							questId: "LEVEL_73_CAP_SUB_1";
						},
						{
							questId: "LEVEL_73_CAP_SUB_2";
						},
						{
							questId: "LEVEL_73_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 73;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_73_CAP_SUB_0";
					},
					{
						questId: "LEVEL_73_CAP_SUB_1";
					},
					{
						questId: "LEVEL_73_CAP_SUB_2";
					},
					{
						questId: "LEVEL_73_CAP_SUB_3";
					},
				];
				title: "title_level_73_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel73CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_73_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 25;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel73CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_73_CAP_SUB_1",
		{
			quest: {
				goal: {
					target: 100;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_PURIFY_POKEMON";
			};
			questDisplay: {
				description: "quest_rocket_purify_plural";
				title: "quest_rocket_purify_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel73CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_73_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_POKEMON_LEVEL";
							withPokemonLevel: {
								maxLevel: true;
							};
						},
					];
					target: 3;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_UPGRADE_POKEMON";
			};
			questDisplay: {
				description: "quest_power_up_max_plural";
				title: "quest_power_up_max_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel73CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_73_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_WIN_RAID_STATUS";
						},
					];
					target: 30;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_RAID_BATTLE";
			};
			questDisplay: {
				description: "quest_win_raid_plural";
				title: "quest_win_raid_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel74Cap = S<
	ClientQuestTemplate<
		"LEVEL_74_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_74_CAP_SUB_0";
						},
						{
							questId: "LEVEL_74_CAP_SUB_1";
						},
						{
							questId: "LEVEL_74_CAP_SUB_2";
						},
						{
							questId: "LEVEL_74_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 74;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_74_CAP_SUB_0";
					},
					{
						questId: "LEVEL_74_CAP_SUB_1";
					},
					{
						questId: "LEVEL_74_CAP_SUB_2";
					},
					{
						questId: "LEVEL_74_CAP_SUB_3";
					},
				];
				title: "title_level_74_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel74CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_74_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 30;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel74CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_74_CAP_SUB_1",
		{
			quest: {
				goal: {
					target: 20;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_ENHANCE_BREAD_MOVE";
			};
			questDisplay: {
				description: "levelup_max_move_plural";
				title: "levelup_max_move_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel74CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_74_CAP_SUB_2",
		{
			quest: {
				goal: {
					target: 200;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_WALK";
			};
			questDisplay: {
				description: "quest_explore_km";
				title: "quest_explore_km";
			};
		}
	>
>;
export type ClientQuestTemplateLevel74CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_74_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_QUEST_CONTEXT";
							withQuestContext: {
								context: "CHALLENGE_QUEST";
							};
						},
					];
					target: 250;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_QUEST";
			};
			questDisplay: {
				description: "quest_field_research_plural";
				title: "quest_field_research_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel75Cap = S<
	ClientQuestTemplate<
		"LEVEL_75_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_75_CAP_SUB_0";
						},
						{
							questId: "LEVEL_75_CAP_SUB_1";
						},
						{
							questId: "LEVEL_75_CAP_SUB_2";
						},
						{
							questId: "LEVEL_75_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 75;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_75_CAP_SUB_0";
					},
					{
						questId: "LEVEL_75_CAP_SUB_1";
					},
					{
						questId: "LEVEL_75_CAP_SUB_2";
					},
					{
						questId: "LEVEL_75_CAP_SUB_3";
					},
				];
				title: "title_level_75_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel75CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_75_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 34;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel75CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_75_CAP_SUB_1",
		{
			quest: {
				goal: {
					target: 75;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_HATCH_EGG";
			};
			questDisplay: {
				description: "quest_hatch_egg_plural";
				title: "quest_hatch_egg_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel75CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_75_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_THROW_TYPE";
							withThrowType: {
								throwType: "ACTIVITY_CATCH_GREAT_THROW";
							};
						},
					];
					target: 999;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_LAND_THROW";
			};
			questDisplay: {
				description: "quest_land_great_plural";
				title: "quest_land_great_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel75CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_75_CAP_SUB_3",
		{
			quest: {
				goal: {
					target: 500;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_SEND_GIFT";
			};
			questDisplay: {
				description: "quest_send_gifts_plural";
				title: "quest_send_gifts_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel76Cap = S<
	ClientQuestTemplate<
		"LEVEL_76_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_76_CAP_SUB_0";
						},
						{
							questId: "LEVEL_76_CAP_SUB_1";
						},
						{
							questId: "LEVEL_76_CAP_SUB_2";
						},
						{
							questId: "LEVEL_76_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 76;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_76_CAP_SUB_0";
					},
					{
						questId: "LEVEL_76_CAP_SUB_1";
					},
					{
						questId: "LEVEL_76_CAP_SUB_2";
					},
					{
						questId: "LEVEL_76_CAP_SUB_3";
					},
				];
				title: "title_level_76_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel76CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_76_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 38;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel76CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_76_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_INVASION_CHARACTER";
							withInvasionCharacter: {
								category: ["GRUNT"];
							};
						},
						{
							type: "WITH_WIN_BATTLE_STATUS";
						},
					];
					target: 100;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BATTLE_TEAM_ROCKET";
			};
			questDisplay: {
				description: "quest_rocket_battle_win_plural";
				title: "quest_rocket_battle_win_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel76CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_76_CAP_SUB_2",
		{
			quest: {
				goal: {
					target: 300;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_WALK";
			};
			questDisplay: {
				description: "quest_explore_km";
				title: "quest_explore_km";
			};
		}
	>
>;
export type ClientQuestTemplateLevel76CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_76_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_SINGLE_DAY";
						},
					];
					target: 200;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_CATCH_POKEMON";
			};
			questDisplay: {
				description: "quest_catch_in_day_plural";
				title: "quest_catch_in_day_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel77Cap = S<
	ClientQuestTemplate<
		"LEVEL_77_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_77_CAP_SUB_0";
						},
						{
							questId: "LEVEL_77_CAP_SUB_1";
						},
						{
							questId: "LEVEL_77_CAP_SUB_2";
						},
						{
							questId: "LEVEL_77_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 77;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_77_CAP_SUB_0";
					},
					{
						questId: "LEVEL_77_CAP_SUB_1";
					},
					{
						questId: "LEVEL_77_CAP_SUB_2";
					},
					{
						questId: "LEVEL_77_CAP_SUB_3";
					},
				];
				title: "title_level_77_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel77CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_77_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 41;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel77CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_77_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_POKEMON_LEVEL";
							withPokemonLevel: {
								maxLevel: true;
							};
						},
					];
					target: 7;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_UPGRADE_POKEMON";
			};
			questDisplay: {
				description: "quest_power_up_max_plural";
				title: "quest_power_up_max_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel77CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_77_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_COMBAT_TYPE";
							withCombatType: {
								combatType: ["COMBAT_TYPE_DMAX", "COMBAT_TYPE_GMAX"];
							};
						},
						{
							type: "WITH_WIN_BATTLE_STATUS";
						},
					];
					target: 100;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_BATTLE";
			};
			questDisplay: {
				description: "win_max_battle_plural";
				title: "win_max_battle_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel77CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_77_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_DISTANCE";
							withDistance: {
								distanceKm: 300;
							};
						},
					];
					target: 10;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_TRADE_POKEMON";
			};
			questDisplay: {
				description: "quest_trade_300km_plural";
				title: "quest_trade_300km_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel78Cap = S<
	ClientQuestTemplate<
		"LEVEL_78_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_78_CAP_SUB_0";
						},
						{
							questId: "LEVEL_78_CAP_SUB_1";
						},
						{
							questId: "LEVEL_78_CAP_SUB_2";
						},
						{
							questId: "LEVEL_78_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 78;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_78_CAP_SUB_0";
					},
					{
						questId: "LEVEL_78_CAP_SUB_1";
					},
					{
						questId: "LEVEL_78_CAP_SUB_2";
					},
					{
						questId: "LEVEL_78_CAP_SUB_3";
					},
				];
				title: "title_level_78_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel78CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_78_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 44;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel78CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_78_CAP_SUB_1",
		{
			quest: {
				goal: {
					target: 400;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BUDDY_EARN_AFFECTION_POINTS";
			};
			questDisplay: {
				description: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
				title: "CHALLENGE_BUDDY_AFFECTION_PLURAL";
			};
		}
	>
>;
export type ClientQuestTemplateLevel78CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_78_CAP_SUB_2",
		{
			quest: {
				goal: {
					target: 400;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_WALK";
			};
			questDisplay: {
				description: "quest_explore_km";
				title: "quest_explore_km";
			};
		}
	>
>;
export type ClientQuestTemplateLevel78CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_78_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_QUEST_CONTEXT";
							withQuestContext: {
								context: "CHALLENGE_QUEST";
							};
						},
					];
					target: 500;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_QUEST";
			};
			questDisplay: {
				description: "quest_field_research_plural";
				title: "quest_field_research_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel79Cap = S<
	ClientQuestTemplate<
		"LEVEL_79_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_79_CAP_SUB_0";
						},
						{
							questId: "LEVEL_79_CAP_SUB_1";
						},
						{
							questId: "LEVEL_79_CAP_SUB_2";
						},
						{
							questId: "LEVEL_79_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 79;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_79_CAP_SUB_0";
					},
					{
						questId: "LEVEL_79_CAP_SUB_1";
					},
					{
						questId: "LEVEL_79_CAP_SUB_2";
					},
					{
						questId: "LEVEL_79_CAP_SUB_3";
					},
				];
				title: "title_level_79_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel79CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_79_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 47;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel79CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_79_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_INVASION_CHARACTER";
							withInvasionCharacter: {
								category: ["ARLO", "CLIFF", "SIERRA"];
							};
						},
						{
							type: "WITH_WIN_BATTLE_STATUS";
						},
					];
					target: 30;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BATTLE_TEAM_ROCKET";
			};
			questDisplay: {
				description: "quest_ROCKETHQ1_leaders_win_plural";
				title: "quest_ROCKETHQ1_leaders_win_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel79CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_79_CAP_SUB_2",
		{
			quest: {
				goal: {
					target: 100;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_HATCH_EGG";
			};
			questDisplay: {
				description: "quest_hatch_egg_plural";
				title: "quest_hatch_egg_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel79CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_79_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_LUCKY_POKEMON";
						},
					];
					target: 50;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_TRADE_POKEMON";
			};
			questDisplay: {
				description: "quest_lucky_plural";
				title: "quest_lucky_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel80Cap = S<
	ClientQuestTemplate<
		"LEVEL_80_CAP",
		{
			quest: {
				multiPart: {
					subQuests: [
						{
							questId: "LEVEL_80_CAP_SUB_0";
						},
						{
							questId: "LEVEL_80_CAP_SUB_1";
						},
						{
							questId: "LEVEL_80_CAP_SUB_2";
						},
						{
							questId: "LEVEL_80_CAP_SUB_3";
						},
					];
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						levelCap: 80;
						type: "LEVEL_CAP";
					},
				];
				questType: "QUEST_MULTI_PART";
			};
			questDisplay: {
				subquestDisplays: [
					{
						questId: "LEVEL_80_CAP_SUB_0";
					},
					{
						questId: "LEVEL_80_CAP_SUB_1";
					},
					{
						questId: "LEVEL_80_CAP_SUB_2";
					},
					{
						questId: "LEVEL_80_CAP_SUB_3";
					},
				];
				title: "title_level_80_cap";
			};
		}
	>
>;
export type ClientQuestTemplateLevel80CapSub0 = S<
	ClientQuestTemplate<
		"LEVEL_80_CAP_SUB_0",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_BADGE_TYPE";
							withBadgeType: {
								badgeRank: 4;
								badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
							};
						},
					];
					target: 50;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_BADGE_RANK";
			};
			questDisplay: {
				description: "quest_platinum_medal_plural";
				title: "quest_platinum_medal_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel80CapSub1 = S<
	ClientQuestTemplate<
		"LEVEL_80_CAP_SUB_1",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_COMBAT_TYPE";
							withCombatType: {
								combatType: ["VS_SEEKER"];
							};
						},
						{
							type: "WITH_WIN_BATTLE_STATUS";
						},
					];
					target: 80;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_COMBAT";
			};
			questDisplay: {
				description: "quest_battle_gbl_win_plural";
				title: "quest_battle_gbl_win_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel80CapSub2 = S<
	ClientQuestTemplate<
		"LEVEL_80_CAP_SUB_2",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_THROW_TYPE";
							withThrowType: {
								throwType: "ACTIVITY_CATCH_EXCELLENT_THROW";
							};
						},
					];
					target: 999;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_LAND_THROW";
			};
			questDisplay: {
				description: "quest_land_excellent_plural";
				title: "quest_land_excellent_plural";
			};
		}
	>
>;
export type ClientQuestTemplateLevel80CapSub3 = S<
	ClientQuestTemplate<
		"LEVEL_80_CAP_SUB_3",
		{
			quest: {
				goal: {
					condition: [
						{
							type: "WITH_WIN_RAID_STATUS";
						},
					];
					target: 80;
				};
				questContext: "LEVEL_UP_QUEST";
				questRewards: [
					{
						exp: 800;
						type: "EXPERIENCE";
					},
				];
				questType: "QUEST_COMPLETE_RAID_BATTLE";
			};
			questDisplay: {
				description: "quest_win_raid_plural";
				title: "quest_win_raid_plural";
			};
		}
	>
>;
export type ClientQuestTemplateWeeklyChallengePartyQuest = S<
	ClientQuestTemplate<
		"WEEKLY_CHALLENGE_PARTY_QUEST",
		{
			quest: {
				difficulty: "EASY";
				goal: {
					target: 100;
				};
				questContext: "WEEKLY_CHALLENGE_QUEST";
				questRewards: [
					{
						stardust: 600;
						type: "STARDUST";
					},
					{
						friendshipPoints: 7;
						type: "FRIENDSHIP_POINTS";
					},
				];
				questType: "QUEST_CATCH_POKEMON";
			};
			questDisplay: {
				description: "quest_catch_pokemon_plural";
				title: "quest_catch_pokemon_plural";
			};
		}
	>
>;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek1 = S<
	ClientQuestTemplate<
		"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1",
		{
			quest: {
				difficulty: "EASY";
				goal: {
					target: 20;
				};
				questContext: "WEEKLY_CHALLENGE_QUEST";
				questRewards: [
					{
						stardust: 6000;
						type: "STARDUST";
					},
					{
						friendshipPoints: 7;
						type: "FRIENDSHIP_POINTS";
					},
					{
						exp: 20000;
						type: "EXPERIENCE";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "TANDEMAUS_NORMAL";
							};
							pokemonId: "TANDEMAUS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 250;
							item: "ITEM_ENHANCED_CURRENCY";
						};
						type: "ITEM";
					},
				];
				questType: "QUEST_HATCH_EGG";
			};
			questDisplay: {
				description: "quest_hatch_egg_plural";
				title: "quest_hatch_egg_plural";
			};
		}
	>
>;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek2 = S<
	ClientQuestTemplate<
		"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2",
		{
			quest: {
				difficulty: "EASY";
				goal: {
					target: 500;
				};
				questContext: "WEEKLY_CHALLENGE_QUEST";
				questRewards: [
					{
						stardust: 6000;
						type: "STARDUST";
					},
					{
						friendshipPoints: 7;
						type: "FRIENDSHIP_POINTS";
					},
					{
						exp: 20000;
						type: "EXPERIENCE";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "TANDEMAUS_NORMAL";
							};
							pokemonId: "TANDEMAUS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 250;
							item: "ITEM_ENHANCED_CURRENCY";
						};
						type: "ITEM";
					},
				];
				questType: "QUEST_CATCH_POKEMON";
			};
			questDisplay: {
				description: "quest_catch_pokemon_plural";
				title: "quest_catch_pokemon_plural";
			};
		}
	>
>;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek3 = S<
	ClientQuestTemplate<
		"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3",
		{
			quest: {
				difficulty: "EASY";
				goal: {
					target: 150;
				};
				questContext: "WEEKLY_CHALLENGE_QUEST";
				questRewards: [
					{
						stardust: 6000;
						type: "STARDUST";
					},
					{
						friendshipPoints: 7;
						type: "FRIENDSHIP_POINTS";
					},
					{
						exp: 20000;
						type: "EXPERIENCE";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "TANDEMAUS_NORMAL";
							};
							pokemonId: "TANDEMAUS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 250;
							item: "ITEM_ENHANCED_CURRENCY";
						};
						type: "ITEM";
					},
				];
				questType: "QUEST_SPIN_POKESTOP";
				questUpdateToastProgressPercentageThreshold: 0.02;
			};
			questDisplay: {
				description: "quest_visit_pokestops_plural";
				title: "quest_visit_pokestops_plural";
			};
		}
	>
>;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek4 = S<
	ClientQuestTemplate<
		"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4",
		{
			quest: {
				difficulty: "EASY";
				goal: {
					condition: [
						{
							type: "WITH_QUEST_CONTEXT";
							withQuestContext: {
								context: "CHALLENGE_QUEST";
							};
						},
					];
					target: 25;
				};
				questContext: "WEEKLY_CHALLENGE_QUEST";
				questRewards: [
					{
						stardust: 6000;
						type: "STARDUST";
					},
					{
						friendshipPoints: 7;
						type: "FRIENDSHIP_POINTS";
					},
					{
						exp: 20000;
						type: "EXPERIENCE";
					},
					{
						pokemonEncounter: {
							pokemonDisplay: {
								form: "TANDEMAUS_NORMAL";
							};
							pokemonId: "TANDEMAUS";
						};
						type: "POKEMON_ENCOUNTER";
					},
					{
						item: {
							amount: 250;
							item: "ITEM_ENHANCED_CURRENCY";
						};
						type: "ITEM";
					},
				];
				questType: "QUEST_COMPLETE_QUEST";
			};
			questDisplay: {
				description: "quest_field_research_plural";
				title: "quest_field_research_plural";
			};
		}
	>
>;

export type ClientQuestTemplateMasterfileEntry =
	| ClientQuestTemplateLevel71Cap
	| ClientQuestTemplateLevel71CapSub0
	| ClientQuestTemplateLevel71CapSub1
	| ClientQuestTemplateLevel71CapSub2
	| ClientQuestTemplateLevel71CapSub3
	| ClientQuestTemplateLevel72Cap
	| ClientQuestTemplateLevel72CapSub0
	| ClientQuestTemplateLevel72CapSub1
	| ClientQuestTemplateLevel72CapSub2
	| ClientQuestTemplateLevel72CapSub3
	| ClientQuestTemplateLevel73Cap
	| ClientQuestTemplateLevel73CapSub0
	| ClientQuestTemplateLevel73CapSub1
	| ClientQuestTemplateLevel73CapSub2
	| ClientQuestTemplateLevel73CapSub3
	| ClientQuestTemplateLevel74Cap
	| ClientQuestTemplateLevel74CapSub0
	| ClientQuestTemplateLevel74CapSub1
	| ClientQuestTemplateLevel74CapSub2
	| ClientQuestTemplateLevel74CapSub3
	| ClientQuestTemplateLevel75Cap
	| ClientQuestTemplateLevel75CapSub0
	| ClientQuestTemplateLevel75CapSub1
	| ClientQuestTemplateLevel75CapSub2
	| ClientQuestTemplateLevel75CapSub3
	| ClientQuestTemplateLevel76Cap
	| ClientQuestTemplateLevel76CapSub0
	| ClientQuestTemplateLevel76CapSub1
	| ClientQuestTemplateLevel76CapSub2
	| ClientQuestTemplateLevel76CapSub3
	| ClientQuestTemplateLevel77Cap
	| ClientQuestTemplateLevel77CapSub0
	| ClientQuestTemplateLevel77CapSub1
	| ClientQuestTemplateLevel77CapSub2
	| ClientQuestTemplateLevel77CapSub3
	| ClientQuestTemplateLevel78Cap
	| ClientQuestTemplateLevel78CapSub0
	| ClientQuestTemplateLevel78CapSub1
	| ClientQuestTemplateLevel78CapSub2
	| ClientQuestTemplateLevel78CapSub3
	| ClientQuestTemplateLevel79Cap
	| ClientQuestTemplateLevel79CapSub0
	| ClientQuestTemplateLevel79CapSub1
	| ClientQuestTemplateLevel79CapSub2
	| ClientQuestTemplateLevel79CapSub3
	| ClientQuestTemplateLevel80Cap
	| ClientQuestTemplateLevel80CapSub0
	| ClientQuestTemplateLevel80CapSub1
	| ClientQuestTemplateLevel80CapSub2
	| ClientQuestTemplateLevel80CapSub3
	| ClientQuestTemplateWeeklyChallengePartyQuest
	| ClientQuestTemplateWeeklyChallengePartyQuestWeek1
	| ClientQuestTemplateWeeklyChallengePartyQuestWeek2
	| ClientQuestTemplateWeeklyChallengePartyQuestWeek3
	| ClientQuestTemplateWeeklyChallengePartyQuestWeek4;

export type ClientQuestTemplateTemplateID = ClientQuestTemplateMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "clientQuestTemplate", 55 entries (structural types).

export interface ClientQuestTemplate<TemplateID extends string = string, TData extends ClientQuestTemplateData = ClientQuestTemplateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		clientQuestTemplate: TData & {
			quest: {
				questId: TemplateID;
				templateId: TemplateID;
			};
		};
	};
}

export interface ClientQuestTemplateData {
	quest: {
		difficulty?: "EASY";
		goal?: {
			condition?: Array<{
				type:
					| "WITH_BADGE_TYPE"
					| "WITH_COMBAT_TYPE"
					| "WITH_DAYS_IN_A_ROW"
					| "WITH_DISTANCE"
					| "WITH_INVASION_CHARACTER"
					| "WITH_LEGENDARY_POKEMON"
					| "WITH_LUCKY_POKEMON"
					| "WITH_POKEMON_LEVEL"
					| "WITH_QUEST_CONTEXT"
					| "WITH_SINGLE_DAY"
					| "WITH_SUPER_EFFECTIVE_CHARGE"
					| "WITH_THROW_TYPE"
					| "WITH_WIN_BATTLE_STATUS"
					| "WITH_WIN_RAID_STATUS";
				withBadgeType?: {
					badgeRank: number;
					badgeTypesToExclude: ["BADGE_MINI_COLLECTION"];
				};
				withCombatType?: {
					combatType: Array<"COMBAT_TYPE_DMAX" | "COMBAT_TYPE_GMAX" | "VS_SEEKER">;
				};
				withDistance?: {
					distanceKm: number;
				};
				withInvasionCharacter?: {
					category: Array<"ARLO" | "CLIFF" | "GRUNT" | "SIERRA">;
				};
				withPokemonLevel?: {
					maxLevel: boolean;
				};
				withQuestContext?: {
					context: "CHALLENGE_QUEST";
				};
				withThrowType?: {
					throwType: "ACTIVITY_CATCH_EXCELLENT_THROW" | "ACTIVITY_CATCH_GREAT_THROW" | "ACTIVITY_CATCH_NICE_THROW";
				};
			}>;
			target: number;
		};
		multiPart?: {
			subQuests: [
				{
					questId:
						| "LEVEL_71_CAP_SUB_0"
						| "LEVEL_72_CAP_SUB_0"
						| "LEVEL_73_CAP_SUB_0"
						| "LEVEL_74_CAP_SUB_0"
						| "LEVEL_75_CAP_SUB_0"
						| "LEVEL_76_CAP_SUB_0"
						| "LEVEL_77_CAP_SUB_0"
						| "LEVEL_78_CAP_SUB_0"
						| "LEVEL_79_CAP_SUB_0"
						| "LEVEL_80_CAP_SUB_0";
				},
				{
					questId:
						| "LEVEL_71_CAP_SUB_1"
						| "LEVEL_72_CAP_SUB_1"
						| "LEVEL_73_CAP_SUB_1"
						| "LEVEL_74_CAP_SUB_1"
						| "LEVEL_75_CAP_SUB_1"
						| "LEVEL_76_CAP_SUB_1"
						| "LEVEL_77_CAP_SUB_1"
						| "LEVEL_78_CAP_SUB_1"
						| "LEVEL_79_CAP_SUB_1"
						| "LEVEL_80_CAP_SUB_1";
				},
				{
					questId:
						| "LEVEL_71_CAP_SUB_2"
						| "LEVEL_72_CAP_SUB_2"
						| "LEVEL_73_CAP_SUB_2"
						| "LEVEL_74_CAP_SUB_2"
						| "LEVEL_75_CAP_SUB_2"
						| "LEVEL_76_CAP_SUB_2"
						| "LEVEL_77_CAP_SUB_2"
						| "LEVEL_78_CAP_SUB_2"
						| "LEVEL_79_CAP_SUB_2"
						| "LEVEL_80_CAP_SUB_2";
				},
				{
					questId:
						| "LEVEL_71_CAP_SUB_3"
						| "LEVEL_72_CAP_SUB_3"
						| "LEVEL_73_CAP_SUB_3"
						| "LEVEL_74_CAP_SUB_3"
						| "LEVEL_75_CAP_SUB_3"
						| "LEVEL_76_CAP_SUB_3"
						| "LEVEL_77_CAP_SUB_3"
						| "LEVEL_78_CAP_SUB_3"
						| "LEVEL_79_CAP_SUB_3"
						| "LEVEL_80_CAP_SUB_3";
				},
			];
		};
		questContext: "LEVEL_UP_QUEST" | "WEEKLY_CHALLENGE_QUEST";
		questRewards: Array<{
			exp?: number;
			friendshipPoints?: number;
			item?: {
				amount: number;
				item: "ITEM_ENHANCED_CURRENCY";
			};
			levelCap?: number;
			pokemonEncounter?: {
				pokemonDisplay: {
					form: "TANDEMAUS_NORMAL";
				};
				pokemonId: "TANDEMAUS";
			};
			stardust?: number;
			type: "EXPERIENCE" | "FRIENDSHIP_POINTS" | "ITEM" | "LEVEL_CAP" | "POKEMON_ENCOUNTER" | "STARDUST";
		}>;
		questType:
			| "QUEST_BADGE_RANK"
			| "QUEST_BATTLE_TEAM_ROCKET"
			| "QUEST_BUDDY_EARN_AFFECTION_POINTS"
			| "QUEST_CATCH_POKEMON"
			| "QUEST_CHARGE_ATTACK"
			| "QUEST_COMPLETE_BATTLE"
			| "QUEST_COMPLETE_COMBAT"
			| "QUEST_COMPLETE_QUEST"
			| "QUEST_COMPLETE_RAID_BATTLE"
			| "QUEST_ENHANCE_BREAD_MOVE"
			| "QUEST_GET_STARDUST"
			| "QUEST_HATCH_EGG"
			| "QUEST_LAND_THROW"
			| "QUEST_MULTI_PART"
			| "QUEST_PURIFY_POKEMON"
			| "QUEST_ROUTE_COMPLETE"
			| "QUEST_SEND_GIFT"
			| "QUEST_SPIN_POKESTOP"
			| "QUEST_TRADE_POKEMON"
			| "QUEST_UPGRADE_POKEMON"
			| "QUEST_WALK";
		questUpdateToastProgressPercentageThreshold?: number;
	};
	questDisplay: {
		description?:
			| "CHALLENGE_BUDDY_AFFECTION_PLURAL"
			| "levelup_max_move_plural"
			| "quest_battle_gbl_win_plural"
			| "quest_catch_in_day_plural"
			| "quest_catch_pokemon_plural"
			| "quest_complete_routes_days_row_plural"
			| "quest_explore_km"
			| "quest_field_research_plural"
			| "quest_hatch_egg_plural"
			| "quest_land_excellent_plural"
			| "quest_land_great_plural"
			| "quest_land_nice_plural"
			| "quest_lucky_plural"
			| "quest_platinum_medal_plural"
			| "quest_power_up_legendary_plural"
			| "quest_power_up_max_plural"
			| "quest_rocket_battle_win_plural"
			| "quest_rocket_purify_plural"
			| "quest_ROCKETHQ1_leaders_win_plural"
			| "quest_send_gifts_plural"
			| "quest_stardust_plural"
			| "quest_supereffective_charge_plural"
			| "quest_trade_300km_plural"
			| "quest_visit_pokestops_plural"
			| "quest_win_raid_plural"
			| "win_max_battle_plural";
		subquestDisplays?: [
			{
				questId:
					| "LEVEL_71_CAP_SUB_0"
					| "LEVEL_72_CAP_SUB_0"
					| "LEVEL_73_CAP_SUB_0"
					| "LEVEL_74_CAP_SUB_0"
					| "LEVEL_75_CAP_SUB_0"
					| "LEVEL_76_CAP_SUB_0"
					| "LEVEL_77_CAP_SUB_0"
					| "LEVEL_78_CAP_SUB_0"
					| "LEVEL_79_CAP_SUB_0"
					| "LEVEL_80_CAP_SUB_0";
			},
			{
				questId:
					| "LEVEL_71_CAP_SUB_1"
					| "LEVEL_72_CAP_SUB_1"
					| "LEVEL_73_CAP_SUB_1"
					| "LEVEL_74_CAP_SUB_1"
					| "LEVEL_75_CAP_SUB_1"
					| "LEVEL_76_CAP_SUB_1"
					| "LEVEL_77_CAP_SUB_1"
					| "LEVEL_78_CAP_SUB_1"
					| "LEVEL_79_CAP_SUB_1"
					| "LEVEL_80_CAP_SUB_1";
			},
			{
				questId:
					| "LEVEL_71_CAP_SUB_2"
					| "LEVEL_72_CAP_SUB_2"
					| "LEVEL_73_CAP_SUB_2"
					| "LEVEL_74_CAP_SUB_2"
					| "LEVEL_75_CAP_SUB_2"
					| "LEVEL_76_CAP_SUB_2"
					| "LEVEL_77_CAP_SUB_2"
					| "LEVEL_78_CAP_SUB_2"
					| "LEVEL_79_CAP_SUB_2"
					| "LEVEL_80_CAP_SUB_2";
			},
			{
				questId:
					| "LEVEL_71_CAP_SUB_3"
					| "LEVEL_72_CAP_SUB_3"
					| "LEVEL_73_CAP_SUB_3"
					| "LEVEL_74_CAP_SUB_3"
					| "LEVEL_75_CAP_SUB_3"
					| "LEVEL_76_CAP_SUB_3"
					| "LEVEL_77_CAP_SUB_3"
					| "LEVEL_78_CAP_SUB_3"
					| "LEVEL_79_CAP_SUB_3"
					| "LEVEL_80_CAP_SUB_3";
			},
		];
		title:
			| "CHALLENGE_BUDDY_AFFECTION_PLURAL"
			| "levelup_max_move_plural"
			| "quest_battle_gbl_win_plural"
			| "quest_catch_in_day_plural"
			| "quest_catch_pokemon_plural"
			| "quest_complete_routes_days_row_plural"
			| "quest_explore_km"
			| "quest_field_research_plural"
			| "quest_hatch_egg_plural"
			| "quest_land_excellent_plural"
			| "quest_land_great_plural"
			| "quest_land_nice_plural"
			| "quest_lucky_plural"
			| "quest_platinum_medal_plural"
			| "quest_power_up_legendary_plural"
			| "quest_power_up_max_plural"
			| "quest_rocket_battle_win_plural"
			| "quest_rocket_purify_plural"
			| "quest_ROCKETHQ1_leaders_win_plural"
			| "quest_send_gifts_plural"
			| "quest_stardust_plural"
			| "quest_supereffective_charge_plural"
			| "quest_trade_300km_plural"
			| "quest_visit_pokestops_plural"
			| "quest_win_raid_plural"
			| "title_level_71_cap"
			| "title_level_72_cap"
			| "title_level_73_cap"
			| "title_level_74_cap"
			| "title_level_75_cap"
			| "title_level_76_cap"
			| "title_level_77_cap"
			| "title_level_78_cap"
			| "title_level_79_cap"
			| "title_level_80_cap"
			| "win_max_battle_plural";
	};
}

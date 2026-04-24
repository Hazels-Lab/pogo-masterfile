export interface ClientQuestTemplate<TemplateID extends string> {
	templateId: TemplateID;
	data: ClientQuestTemplateData<TemplateID>;
}

export interface ClientQuestTemplateData<TemplateID extends string> {
	templateId: TemplateID;
	clientQuestTemplate: {
		quest: {
			difficulty?: "EASY";
			goal?: {
				condition?: Array<
					{
						"type": ClientQuestTemplateQuestGoalConditionType;
						withBadgeType?: {
							badgeRank: 4;
							badgeTypesToExclude: ClientQuestTemplateQuestGoalConditionWithBadgeTypeBadgeTypesToExclude;
						};
						withCombatType?: {
							combatType: Array<ClientQuestTemplateQuestGoalConditionWithCombatTypeCombatType>;
						};
						withDistance?: {
							distanceKm: 300;
						};
						withInvasionCharacter?: {
							category: Array<ClientQuestTemplateQuestGoalConditionWithInvasionCharacterCategory>;
						};
						withPokemonLevel?: {
							maxLevel: true;
						};
						withQuestContext?: {
							context: "CHALLENGE_QUEST";
						};
						withThrowType?: {
							throwType: ClientQuestTemplateQuestGoalConditionWithThrowTypeThrowType;
						};
					}
				>;
				target: ClientQuestTemplateQuestGoalTarget;
			};
			multiPart?: {
				subQuests: ClientQuestTemplateQuestMultiPartSubQuests;
			};
			questContext: ClientQuestTemplateQuestQuestContext;
			questId: ClientQuestTemplateQuestQuestID;
			questRewards: Array<
				{
					exp?: ClientQuestTemplateQuestQuestRewardsExp;
					friendshipPoints?: 7;
					item?: {
						amount: 250;
						item: "ITEM_ENHANCED_CURRENCY";
					};
					levelCap?: ClientQuestTemplateQuestQuestRewardsLevelCap;
					pokemonEncounter?: {
						pokemonDisplay: {
							form: "TANDEMAUS_NORMAL";
						};
						pokemonId: "TANDEMAUS";
					};
					stardust?: ClientQuestTemplateQuestQuestRewardsStardust;
					"type": ClientQuestTemplateQuestQuestRewardsType;
				}
			>;
			questType: ClientQuestTemplateQuestQuestType;
			questUpdateToastProgressPercentageThreshold?: 0.02;
			templateId: ClientQuestTemplateQuestTemplateID;
		};
		questDisplay: {
			description?: ClientQuestTemplateQuestDisplayDescription;
			subquestDisplays?: ClientQuestTemplateQuestDisplaySubquestDisplays;
			title: ClientQuestTemplateQuestDisplayTitle;
		};
	};
}

export type ClientQuestTemplateQuestGoalConditionType = "WITH_BADGE_TYPE" | "WITH_COMBAT_TYPE" | "WITH_DAYS_IN_A_ROW" | "WITH_DISTANCE" | "WITH_INVASION_CHARACTER" | "WITH_LEGENDARY_POKEMON" | "WITH_LUCKY_POKEMON" | "WITH_POKEMON_LEVEL" | "WITH_QUEST_CONTEXT" | "WITH_SINGLE_DAY" | "WITH_SUPER_EFFECTIVE_CHARGE" | "WITH_THROW_TYPE" | "WITH_WIN_BATTLE_STATUS" | "WITH_WIN_RAID_STATUS";

export type ClientQuestTemplateQuestGoalConditionWithBadgeTypeBadgeTypesToExclude = [
	"BADGE_MINI_COLLECTION"
];

export type ClientQuestTemplateQuestGoalConditionWithCombatTypeCombatType = "COMBAT_TYPE_DMAX" | "COMBAT_TYPE_GMAX" | "VS_SEEKER";

export type ClientQuestTemplateQuestGoalConditionWithInvasionCharacterCategory = "ARLO" | "CLIFF" | "GRUNT" | "SIERRA";

export type ClientQuestTemplateQuestGoalConditionWithThrowTypeThrowType = "ACTIVITY_CATCH_EXCELLENT_THROW" | "ACTIVITY_CATCH_GREAT_THROW" | "ACTIVITY_CATCH_NICE_THROW";

export type ClientQuestTemplateQuestGoalTarget = 3 | 7 | 10 | 15 | 20 | 25 | 30 | 34 | 38 | 41 | 44 | 47 | 50 | 75 | 80 | 100 | 150 | 200 | 250 | 300 | 400 | 500 | 999 | 1000000;

export type ClientQuestTemplateQuestMultiPartSubQuests = [
	{
		questId: "LEVEL_71_CAP_SUB_0" | "LEVEL_72_CAP_SUB_0" | "LEVEL_73_CAP_SUB_0" | "LEVEL_74_CAP_SUB_0" | "LEVEL_75_CAP_SUB_0" | "LEVEL_76_CAP_SUB_0" | "LEVEL_77_CAP_SUB_0" | "LEVEL_78_CAP_SUB_0" | "LEVEL_79_CAP_SUB_0" | "LEVEL_80_CAP_SUB_0";
	},
	{
		questId: "LEVEL_71_CAP_SUB_1" | "LEVEL_72_CAP_SUB_1" | "LEVEL_73_CAP_SUB_1" | "LEVEL_74_CAP_SUB_1" | "LEVEL_75_CAP_SUB_1" | "LEVEL_76_CAP_SUB_1" | "LEVEL_77_CAP_SUB_1" | "LEVEL_78_CAP_SUB_1" | "LEVEL_79_CAP_SUB_1" | "LEVEL_80_CAP_SUB_1";
	},
	{
		questId: "LEVEL_71_CAP_SUB_2" | "LEVEL_72_CAP_SUB_2" | "LEVEL_73_CAP_SUB_2" | "LEVEL_74_CAP_SUB_2" | "LEVEL_75_CAP_SUB_2" | "LEVEL_76_CAP_SUB_2" | "LEVEL_77_CAP_SUB_2" | "LEVEL_78_CAP_SUB_2" | "LEVEL_79_CAP_SUB_2" | "LEVEL_80_CAP_SUB_2";
	},
	{
		questId: "LEVEL_71_CAP_SUB_3" | "LEVEL_72_CAP_SUB_3" | "LEVEL_73_CAP_SUB_3" | "LEVEL_74_CAP_SUB_3" | "LEVEL_75_CAP_SUB_3" | "LEVEL_76_CAP_SUB_3" | "LEVEL_77_CAP_SUB_3" | "LEVEL_78_CAP_SUB_3" | "LEVEL_79_CAP_SUB_3" | "LEVEL_80_CAP_SUB_3";
	}
];

export type ClientQuestTemplateQuestQuestContext = "LEVEL_UP_QUEST" | "WEEKLY_CHALLENGE_QUEST";

export type ClientQuestTemplateQuestQuestID = "LEVEL_71_CAP" | "LEVEL_71_CAP_SUB_0" | "LEVEL_71_CAP_SUB_1" | "LEVEL_71_CAP_SUB_2" | "LEVEL_71_CAP_SUB_3" | "LEVEL_72_CAP" | "LEVEL_72_CAP_SUB_0" | "LEVEL_72_CAP_SUB_1" | "LEVEL_72_CAP_SUB_2" | "LEVEL_72_CAP_SUB_3" | "LEVEL_73_CAP" | "LEVEL_73_CAP_SUB_0" | "LEVEL_73_CAP_SUB_1" | "LEVEL_73_CAP_SUB_2" | "LEVEL_73_CAP_SUB_3" | "LEVEL_74_CAP" | "LEVEL_74_CAP_SUB_0" | "LEVEL_74_CAP_SUB_1" | "LEVEL_74_CAP_SUB_2" | "LEVEL_74_CAP_SUB_3" | "LEVEL_75_CAP" | "LEVEL_75_CAP_SUB_0" | "LEVEL_75_CAP_SUB_1" | "LEVEL_75_CAP_SUB_2" | "LEVEL_75_CAP_SUB_3" | "LEVEL_76_CAP" | "LEVEL_76_CAP_SUB_0" | "LEVEL_76_CAP_SUB_1" | "LEVEL_76_CAP_SUB_2" | "LEVEL_76_CAP_SUB_3" | "LEVEL_77_CAP" | "LEVEL_77_CAP_SUB_0" | "LEVEL_77_CAP_SUB_1" | "LEVEL_77_CAP_SUB_2" | "LEVEL_77_CAP_SUB_3" | "LEVEL_78_CAP" | "LEVEL_78_CAP_SUB_0" | "LEVEL_78_CAP_SUB_1" | "LEVEL_78_CAP_SUB_2" | "LEVEL_78_CAP_SUB_3" | "LEVEL_79_CAP" | "LEVEL_79_CAP_SUB_0" | "LEVEL_79_CAP_SUB_1" | "LEVEL_79_CAP_SUB_2" | "LEVEL_79_CAP_SUB_3" | "LEVEL_80_CAP" | "LEVEL_80_CAP_SUB_0" | "LEVEL_80_CAP_SUB_1" | "LEVEL_80_CAP_SUB_2" | "LEVEL_80_CAP_SUB_3" | "WEEKLY_CHALLENGE_PARTY_QUEST" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4";

export type ClientQuestTemplateQuestQuestRewardsExp = 800 | 20000;

export type ClientQuestTemplateQuestQuestRewardsLevelCap = 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80;

export type ClientQuestTemplateQuestQuestRewardsStardust = 600 | 6000;

export type ClientQuestTemplateQuestQuestRewardsType = "EXPERIENCE" | "FRIENDSHIP_POINTS" | "ITEM" | "LEVEL_CAP" | "POKEMON_ENCOUNTER" | "STARDUST";

export type ClientQuestTemplateQuestQuestType = "QUEST_BADGE_RANK" | "QUEST_BATTLE_TEAM_ROCKET" | "QUEST_BUDDY_EARN_AFFECTION_POINTS" | "QUEST_CATCH_POKEMON" | "QUEST_CHARGE_ATTACK" | "QUEST_COMPLETE_BATTLE" | "QUEST_COMPLETE_COMBAT" | "QUEST_COMPLETE_QUEST" | "QUEST_COMPLETE_RAID_BATTLE" | "QUEST_ENHANCE_BREAD_MOVE" | "QUEST_GET_STARDUST" | "QUEST_HATCH_EGG" | "QUEST_LAND_THROW" | "QUEST_MULTI_PART" | "QUEST_PURIFY_POKEMON" | "QUEST_ROUTE_COMPLETE" | "QUEST_SEND_GIFT" | "QUEST_SPIN_POKESTOP" | "QUEST_TRADE_POKEMON" | "QUEST_UPGRADE_POKEMON" | "QUEST_WALK";

export type ClientQuestTemplateQuestTemplateID = "LEVEL_71_CAP" | "LEVEL_71_CAP_SUB_0" | "LEVEL_71_CAP_SUB_1" | "LEVEL_71_CAP_SUB_2" | "LEVEL_71_CAP_SUB_3" | "LEVEL_72_CAP" | "LEVEL_72_CAP_SUB_0" | "LEVEL_72_CAP_SUB_1" | "LEVEL_72_CAP_SUB_2" | "LEVEL_72_CAP_SUB_3" | "LEVEL_73_CAP" | "LEVEL_73_CAP_SUB_0" | "LEVEL_73_CAP_SUB_1" | "LEVEL_73_CAP_SUB_2" | "LEVEL_73_CAP_SUB_3" | "LEVEL_74_CAP" | "LEVEL_74_CAP_SUB_0" | "LEVEL_74_CAP_SUB_1" | "LEVEL_74_CAP_SUB_2" | "LEVEL_74_CAP_SUB_3" | "LEVEL_75_CAP" | "LEVEL_75_CAP_SUB_0" | "LEVEL_75_CAP_SUB_1" | "LEVEL_75_CAP_SUB_2" | "LEVEL_75_CAP_SUB_3" | "LEVEL_76_CAP" | "LEVEL_76_CAP_SUB_0" | "LEVEL_76_CAP_SUB_1" | "LEVEL_76_CAP_SUB_2" | "LEVEL_76_CAP_SUB_3" | "LEVEL_77_CAP" | "LEVEL_77_CAP_SUB_0" | "LEVEL_77_CAP_SUB_1" | "LEVEL_77_CAP_SUB_2" | "LEVEL_77_CAP_SUB_3" | "LEVEL_78_CAP" | "LEVEL_78_CAP_SUB_0" | "LEVEL_78_CAP_SUB_1" | "LEVEL_78_CAP_SUB_2" | "LEVEL_78_CAP_SUB_3" | "LEVEL_79_CAP" | "LEVEL_79_CAP_SUB_0" | "LEVEL_79_CAP_SUB_1" | "LEVEL_79_CAP_SUB_2" | "LEVEL_79_CAP_SUB_3" | "LEVEL_80_CAP" | "LEVEL_80_CAP_SUB_0" | "LEVEL_80_CAP_SUB_1" | "LEVEL_80_CAP_SUB_2" | "LEVEL_80_CAP_SUB_3" | "WEEKLY_CHALLENGE_PARTY_QUEST" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3" | "WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4";

export type ClientQuestTemplateQuestDisplayDescription = "CHALLENGE_BUDDY_AFFECTION_PLURAL" | "levelup_max_move_plural" | "quest_battle_gbl_win_plural" | "quest_catch_in_day_plural" | "quest_catch_pokemon_plural" | "quest_complete_routes_days_row_plural" | "quest_explore_km" | "quest_field_research_plural" | "quest_hatch_egg_plural" | "quest_land_excellent_plural" | "quest_land_great_plural" | "quest_land_nice_plural" | "quest_lucky_plural" | "quest_platinum_medal_plural" | "quest_power_up_legendary_plural" | "quest_power_up_max_plural" | "quest_rocket_battle_win_plural" | "quest_rocket_purify_plural" | "quest_ROCKETHQ1_leaders_win_plural" | "quest_send_gifts_plural" | "quest_stardust_plural" | "quest_supereffective_charge_plural" | "quest_trade_300km_plural" | "quest_visit_pokestops_plural" | "quest_win_raid_plural" | "win_max_battle_plural";

export type ClientQuestTemplateQuestDisplaySubquestDisplays = [
	{
		questId: "LEVEL_71_CAP_SUB_0" | "LEVEL_72_CAP_SUB_0" | "LEVEL_73_CAP_SUB_0" | "LEVEL_74_CAP_SUB_0" | "LEVEL_75_CAP_SUB_0" | "LEVEL_76_CAP_SUB_0" | "LEVEL_77_CAP_SUB_0" | "LEVEL_78_CAP_SUB_0" | "LEVEL_79_CAP_SUB_0" | "LEVEL_80_CAP_SUB_0";
	},
	{
		questId: "LEVEL_71_CAP_SUB_1" | "LEVEL_72_CAP_SUB_1" | "LEVEL_73_CAP_SUB_1" | "LEVEL_74_CAP_SUB_1" | "LEVEL_75_CAP_SUB_1" | "LEVEL_76_CAP_SUB_1" | "LEVEL_77_CAP_SUB_1" | "LEVEL_78_CAP_SUB_1" | "LEVEL_79_CAP_SUB_1" | "LEVEL_80_CAP_SUB_1";
	},
	{
		questId: "LEVEL_71_CAP_SUB_2" | "LEVEL_72_CAP_SUB_2" | "LEVEL_73_CAP_SUB_2" | "LEVEL_74_CAP_SUB_2" | "LEVEL_75_CAP_SUB_2" | "LEVEL_76_CAP_SUB_2" | "LEVEL_77_CAP_SUB_2" | "LEVEL_78_CAP_SUB_2" | "LEVEL_79_CAP_SUB_2" | "LEVEL_80_CAP_SUB_2";
	},
	{
		questId: "LEVEL_71_CAP_SUB_3" | "LEVEL_72_CAP_SUB_3" | "LEVEL_73_CAP_SUB_3" | "LEVEL_74_CAP_SUB_3" | "LEVEL_75_CAP_SUB_3" | "LEVEL_76_CAP_SUB_3" | "LEVEL_77_CAP_SUB_3" | "LEVEL_78_CAP_SUB_3" | "LEVEL_79_CAP_SUB_3" | "LEVEL_80_CAP_SUB_3";
	}
];

export type ClientQuestTemplateQuestDisplayTitle = "CHALLENGE_BUDDY_AFFECTION_PLURAL" | "levelup_max_move_plural" | "quest_battle_gbl_win_plural" | "quest_catch_in_day_plural" | "quest_catch_pokemon_plural" | "quest_complete_routes_days_row_plural" | "quest_explore_km" | "quest_field_research_plural" | "quest_hatch_egg_plural" | "quest_land_excellent_plural" | "quest_land_great_plural" | "quest_land_nice_plural" | "quest_lucky_plural" | "quest_platinum_medal_plural" | "quest_power_up_legendary_plural" | "quest_power_up_max_plural" | "quest_rocket_battle_win_plural" | "quest_rocket_purify_plural" | "quest_ROCKETHQ1_leaders_win_plural" | "quest_send_gifts_plural" | "quest_stardust_plural" | "quest_supereffective_charge_plural" | "quest_trade_300km_plural" | "quest_visit_pokestops_plural" | "quest_win_raid_plural" | "title_level_71_cap" | "title_level_72_cap" | "title_level_73_cap" | "title_level_74_cap" | "title_level_75_cap" | "title_level_76_cap" | "title_level_77_cap" | "title_level_78_cap" | "title_level_79_cap" | "title_level_80_cap" | "win_max_battle_plural";

export type ClientQuestTemplateLevel71Cap = ClientQuestTemplate<"LEVEL_71_CAP">;
export type ClientQuestTemplateLevel71CapSub0 = ClientQuestTemplate<"LEVEL_71_CAP_SUB_0">;
export type ClientQuestTemplateLevel71CapSub1 = ClientQuestTemplate<"LEVEL_71_CAP_SUB_1">;
export type ClientQuestTemplateLevel71CapSub2 = ClientQuestTemplate<"LEVEL_71_CAP_SUB_2">;
export type ClientQuestTemplateLevel71CapSub3 = ClientQuestTemplate<"LEVEL_71_CAP_SUB_3">;
export type ClientQuestTemplateLevel72Cap = ClientQuestTemplate<"LEVEL_72_CAP">;
export type ClientQuestTemplateLevel72CapSub0 = ClientQuestTemplate<"LEVEL_72_CAP_SUB_0">;
export type ClientQuestTemplateLevel72CapSub1 = ClientQuestTemplate<"LEVEL_72_CAP_SUB_1">;
export type ClientQuestTemplateLevel72CapSub2 = ClientQuestTemplate<"LEVEL_72_CAP_SUB_2">;
export type ClientQuestTemplateLevel72CapSub3 = ClientQuestTemplate<"LEVEL_72_CAP_SUB_3">;
export type ClientQuestTemplateLevel73Cap = ClientQuestTemplate<"LEVEL_73_CAP">;
export type ClientQuestTemplateLevel73CapSub0 = ClientQuestTemplate<"LEVEL_73_CAP_SUB_0">;
export type ClientQuestTemplateLevel73CapSub1 = ClientQuestTemplate<"LEVEL_73_CAP_SUB_1">;
export type ClientQuestTemplateLevel73CapSub2 = ClientQuestTemplate<"LEVEL_73_CAP_SUB_2">;
export type ClientQuestTemplateLevel73CapSub3 = ClientQuestTemplate<"LEVEL_73_CAP_SUB_3">;
export type ClientQuestTemplateLevel74Cap = ClientQuestTemplate<"LEVEL_74_CAP">;
export type ClientQuestTemplateLevel74CapSub0 = ClientQuestTemplate<"LEVEL_74_CAP_SUB_0">;
export type ClientQuestTemplateLevel74CapSub1 = ClientQuestTemplate<"LEVEL_74_CAP_SUB_1">;
export type ClientQuestTemplateLevel74CapSub2 = ClientQuestTemplate<"LEVEL_74_CAP_SUB_2">;
export type ClientQuestTemplateLevel74CapSub3 = ClientQuestTemplate<"LEVEL_74_CAP_SUB_3">;
export type ClientQuestTemplateLevel75Cap = ClientQuestTemplate<"LEVEL_75_CAP">;
export type ClientQuestTemplateLevel75CapSub0 = ClientQuestTemplate<"LEVEL_75_CAP_SUB_0">;
export type ClientQuestTemplateLevel75CapSub1 = ClientQuestTemplate<"LEVEL_75_CAP_SUB_1">;
export type ClientQuestTemplateLevel75CapSub2 = ClientQuestTemplate<"LEVEL_75_CAP_SUB_2">;
export type ClientQuestTemplateLevel75CapSub3 = ClientQuestTemplate<"LEVEL_75_CAP_SUB_3">;
export type ClientQuestTemplateLevel76Cap = ClientQuestTemplate<"LEVEL_76_CAP">;
export type ClientQuestTemplateLevel76CapSub0 = ClientQuestTemplate<"LEVEL_76_CAP_SUB_0">;
export type ClientQuestTemplateLevel76CapSub1 = ClientQuestTemplate<"LEVEL_76_CAP_SUB_1">;
export type ClientQuestTemplateLevel76CapSub2 = ClientQuestTemplate<"LEVEL_76_CAP_SUB_2">;
export type ClientQuestTemplateLevel76CapSub3 = ClientQuestTemplate<"LEVEL_76_CAP_SUB_3">;
export type ClientQuestTemplateLevel77Cap = ClientQuestTemplate<"LEVEL_77_CAP">;
export type ClientQuestTemplateLevel77CapSub0 = ClientQuestTemplate<"LEVEL_77_CAP_SUB_0">;
export type ClientQuestTemplateLevel77CapSub1 = ClientQuestTemplate<"LEVEL_77_CAP_SUB_1">;
export type ClientQuestTemplateLevel77CapSub2 = ClientQuestTemplate<"LEVEL_77_CAP_SUB_2">;
export type ClientQuestTemplateLevel77CapSub3 = ClientQuestTemplate<"LEVEL_77_CAP_SUB_3">;
export type ClientQuestTemplateLevel78Cap = ClientQuestTemplate<"LEVEL_78_CAP">;
export type ClientQuestTemplateLevel78CapSub0 = ClientQuestTemplate<"LEVEL_78_CAP_SUB_0">;
export type ClientQuestTemplateLevel78CapSub1 = ClientQuestTemplate<"LEVEL_78_CAP_SUB_1">;
export type ClientQuestTemplateLevel78CapSub2 = ClientQuestTemplate<"LEVEL_78_CAP_SUB_2">;
export type ClientQuestTemplateLevel78CapSub3 = ClientQuestTemplate<"LEVEL_78_CAP_SUB_3">;
export type ClientQuestTemplateLevel79Cap = ClientQuestTemplate<"LEVEL_79_CAP">;
export type ClientQuestTemplateLevel79CapSub0 = ClientQuestTemplate<"LEVEL_79_CAP_SUB_0">;
export type ClientQuestTemplateLevel79CapSub1 = ClientQuestTemplate<"LEVEL_79_CAP_SUB_1">;
export type ClientQuestTemplateLevel79CapSub2 = ClientQuestTemplate<"LEVEL_79_CAP_SUB_2">;
export type ClientQuestTemplateLevel79CapSub3 = ClientQuestTemplate<"LEVEL_79_CAP_SUB_3">;
export type ClientQuestTemplateLevel80Cap = ClientQuestTemplate<"LEVEL_80_CAP">;
export type ClientQuestTemplateLevel80CapSub0 = ClientQuestTemplate<"LEVEL_80_CAP_SUB_0">;
export type ClientQuestTemplateLevel80CapSub1 = ClientQuestTemplate<"LEVEL_80_CAP_SUB_1">;
export type ClientQuestTemplateLevel80CapSub2 = ClientQuestTemplate<"LEVEL_80_CAP_SUB_2">;
export type ClientQuestTemplateLevel80CapSub3 = ClientQuestTemplate<"LEVEL_80_CAP_SUB_3">;
export type ClientQuestTemplateWeeklyChallengePartyQuest = ClientQuestTemplate<"WEEKLY_CHALLENGE_PARTY_QUEST">;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek1 = ClientQuestTemplate<"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK1">;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek2 = ClientQuestTemplate<"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK2">;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek3 = ClientQuestTemplate<"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK3">;
export type ClientQuestTemplateWeeklyChallengePartyQuestWeek4 = ClientQuestTemplate<"WEEKLY_CHALLENGE_PARTY_QUEST_WEEK4">;

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

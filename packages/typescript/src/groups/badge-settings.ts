export interface BadgeSettings<TemplateID extends string = string, TData extends BadgeSettingsData = BadgeSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		badgeSettings: TData;
	};
}

export interface BadgeSettingsData {
	badgeRank?: number;
	badgeType?: number | string;
	captureReward?: [
		Record<string, never>,
		Record<string, never>,
		Record<string, never>,
		Record<string, never>,
		{
			rewardTypes?: [string];
		},
	];
	eventBadge?: boolean;
	eventBadgeSettings?: {
		obEventBadgeSettingsNumber6?: number;
	};
	targets?: Array<number>;
}

export type BadgeSettings7DayStreaks = BadgeSettings<
	"BADGE_7_DAY_STREAKS",
	{
		badgeRank: 5;
		badgeType: "BADGE_7_DAY_STREAKS";
		targets: [1, 10, 50, 100];
	}
>;
export type BadgeSettingsAa2023JejuDay00 = BadgeSettings<
	"BADGE_AA_2023_JEJU_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2023_JEJU_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2023JejuDay01 = BadgeSettings<
	"BADGE_AA_2023_JEJU_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2023_JEJU_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2023JejuDay02 = BadgeSettings<
	"BADGE_AA_2023_JEJU_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2023_JEJU_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2023JejuDay03 = BadgeSettings<
	"BADGE_AA_2023_JEJU_DAY_03",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2023_JEJU_DAY_03";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024BaliDay00 = BadgeSettings<
	"BADGE_AA_2024_BALI_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_BALI_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024BaliDay01 = BadgeSettings<
	"BADGE_AA_2024_BALI_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_BALI_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024BaliDay02 = BadgeSettings<
	"BADGE_AA_2024_BALI_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_BALI_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024SurabayaDay00 = BadgeSettings<
	"BADGE_AA_2024_SURABAYA_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_SURABAYA_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024SurabayaDay01 = BadgeSettings<
	"BADGE_AA_2024_SURABAYA_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_SURABAYA_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024SurabayaDay02 = BadgeSettings<
	"BADGE_AA_2024_SURABAYA_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_SURABAYA_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024YogyakartaDay00 = BadgeSettings<
	"BADGE_AA_2024_YOGYAKARTA_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_YOGYAKARTA_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024YogyakartaDay01 = BadgeSettings<
	"BADGE_AA_2024_YOGYAKARTA_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_YOGYAKARTA_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsAa2024YogyakartaDay02 = BadgeSettings<
	"BADGE_AA_2024_YOGYAKARTA_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_AA_2024_YOGYAKARTA_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20181 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_1",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_1";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20182 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_2",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_2";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20183 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_3",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_3";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20184 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_4",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_4";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20185 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_5",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_5";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20186 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_6",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_6";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsApacPartnerJuly20187 = BadgeSettings<
	"BADGE_APAC_PARTNER_JULY_2018_7",
	{
		badgeRank: 2;
		badgeType: "BADGE_APAC_PARTNER_JULY_2018_7";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsBattleAttackWon = BadgeSettings<
	"BADGE_BATTLE_ATTACK_WON",
	{
		badgeRank: 5;
		badgeType: "BADGE_BATTLE_ATTACK_WON";
		targets: [10, 100, 1000, 4000];
	}
>;
export type BadgeSettingsBattleTrainingWon = BadgeSettings<
	"BADGE_BATTLE_TRAINING_WON",
	{
		badgeRank: 5;
		badgeType: "BADGE_BATTLE_TRAINING_WON";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsBerriesFed = BadgeSettings<
	"BADGE_BERRIES_FED",
	{
		badgeRank: 5;
		badgeType: "BADGE_BERRIES_FED";
		targets: [10, 100, 1000, 15000];
	}
>;
export type BadgeSettingsBestFriendsPlusEligible = BadgeSettings<
	"BADGE_BEST_FRIENDS_PLUS_ELIGIBLE",
	{
		badgeRank: 2;
		badgeType: "BADGE_BEST_FRIENDS_PLUS_ELIGIBLE";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsBigMagikarp = BadgeSettings<
	"BADGE_BIG_MAGIKARP",
	{
		badgeRank: 5;
		badgeType: "BADGE_BIG_MAGIKARP";
		targets: [3, 50, 300, 1000];
	}
>;
export type BadgeSettingsBuddyBest = BadgeSettings<
	"BADGE_BUDDY_BEST",
	{
		badgeRank: 5;
		badgeType: "BADGE_BUDDY_BEST";
		targets: [1, 10, 100, 200];
	}
>;
export type BadgeSettingsButterflyCollector = BadgeSettings<
	"BADGE_BUTTERFLY_COLLECTOR",
	{
		badgeRank: 5;
		badgeType: "BADGE_BUTTERFLY_COLLECTOR";
		targets: [1, 5, 10, 18];
	}
>;
export type BadgeSettingsCaptureLargePokemon = BadgeSettings<
	"BADGE_CAPTURE_LARGE_POKEMON",
	{
		badgeRank: 5;
		badgeType: "BADGE_CAPTURE_LARGE_POKEMON";
		targets: [5, 25, 100, 500];
	}
>;
export type BadgeSettingsCaptureSmallPokemon = BadgeSettings<
	"BADGE_CAPTURE_SMALL_POKEMON",
	{
		badgeRank: 5;
		badgeType: "BADGE_CAPTURE_SMALL_POKEMON";
		targets: [5, 25, 100, 500];
	}
>;
export type BadgeSettingsCaptureTotal = BadgeSettings<
	"BADGE_CAPTURE_TOTAL",
	{
		badgeRank: 5;
		badgeType: "BADGE_CAPTURE_TOTAL";
		targets: [30, 500, 2000, 50000];
	}
>;
export type BadgeSettingsChallengeQuests = BadgeSettings<
	"BADGE_CHALLENGE_QUESTS",
	{
		badgeRank: 5;
		badgeType: "BADGE_CHALLENGE_QUESTS";
		targets: [10, 100, 1000, 2500];
	}
>;
export type BadgeSettingsCheckIns = BadgeSettings<
	"BADGE_CHECK_INS",
	{
		badgeRank: 5;
		badgeType: "BADGE_CHECK_INS";
		targets: [1, 20, 50, 100];
	}
>;
export type BadgeSettingsChicagoFestJuly2017 = BadgeSettings<
	"BADGE_CHICAGO_FEST_JULY_2017",
	{
		badgeRank: 2;
		badgeType: "BADGE_CHICAGO_FEST_JULY_2017";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsChicagoFestJuly2018SatNorth = BadgeSettings<
	"BADGE_CHICAGO_FEST_JULY_2018_SAT_NORTH",
	{
		badgeRank: 2;
		badgeType: "BADGE_CHICAGO_FEST_JULY_2018_SAT_NORTH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsChicagoFestJuly2018SatSouth = BadgeSettings<
	"BADGE_CHICAGO_FEST_JULY_2018_SAT_SOUTH",
	{
		badgeRank: 2;
		badgeType: "BADGE_CHICAGO_FEST_JULY_2018_SAT_SOUTH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsChicagoFestJuly2018SunNorth = BadgeSettings<
	"BADGE_CHICAGO_FEST_JULY_2018_SUN_NORTH",
	{
		badgeRank: 2;
		badgeType: "BADGE_CHICAGO_FEST_JULY_2018_SUN_NORTH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsChicagoFestJuly2018SunSouth = BadgeSettings<
	"BADGE_CHICAGO_FEST_JULY_2018_SUN_SOUTH",
	{
		badgeRank: 2;
		badgeType: "BADGE_CHICAGO_FEST_JULY_2018_SUN_SOUTH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsCityExplorerPass00 = BadgeSettings<
	"BADGE_CITY_EXPLORER_PASS_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_CITY_EXPLORER_PASS_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsCityExplorerPass01 = BadgeSettings<
	"BADGE_CITY_EXPLORER_PASS_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_CITY_EXPLORER_PASS_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsCityExplorerPass02 = BadgeSettings<
	"BADGE_CITY_EXPLORER_PASS_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_CITY_EXPLORER_PASS_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsCityExplorerPass03 = BadgeSettings<
	"BADGE_CITY_EXPLORER_PASS_03",
	{
		badgeRank: 2;
		badgeType: "BADGE_CITY_EXPLORER_PASS_03";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0001 = BadgeSettings<
	"BADGE_EVENT_0001",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0001";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0002 = BadgeSettings<
	"BADGE_EVENT_0002",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0002";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0003 = BadgeSettings<
	"BADGE_EVENT_0003",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0003";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0004 = BadgeSettings<
	"BADGE_EVENT_0004",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0004";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0005 = BadgeSettings<
	"BADGE_EVENT_0005",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0005";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0006 = BadgeSettings<
	"BADGE_EVENT_0006",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0006";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0007 = BadgeSettings<
	"BADGE_EVENT_0007",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0007";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0009 = BadgeSettings<
	"BADGE_EVENT_0009",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0009";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0010 = BadgeSettings<
	"BADGE_EVENT_0010",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0010";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0011 = BadgeSettings<
	"BADGE_EVENT_0011",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0011";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0012 = BadgeSettings<
	"BADGE_EVENT_0012",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0012";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0013 = BadgeSettings<
	"BADGE_EVENT_0013",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0013";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0014 = BadgeSettings<
	"BADGE_EVENT_0014",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0014";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0015 = BadgeSettings<
	"BADGE_EVENT_0015",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0015";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0016 = BadgeSettings<
	"BADGE_EVENT_0016",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0016";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0017 = BadgeSettings<
	"BADGE_EVENT_0017",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0017";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0018 = BadgeSettings<
	"BADGE_EVENT_0018",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0018";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0019 = BadgeSettings<
	"BADGE_EVENT_0019",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0020 = BadgeSettings<
	"BADGE_EVENT_0020",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0020";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0022 = BadgeSettings<
	"BADGE_EVENT_0022",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0022";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0023 = BadgeSettings<
	"BADGE_EVENT_0023",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0023";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0024 = BadgeSettings<
	"BADGE_EVENT_0024",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0024";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0025 = BadgeSettings<
	"BADGE_EVENT_0025",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0025";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0026 = BadgeSettings<
	"BADGE_EVENT_0026",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0026";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0027 = BadgeSettings<
	"BADGE_EVENT_0027",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0027";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0028 = BadgeSettings<
	"BADGE_EVENT_0028",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0028";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0029 = BadgeSettings<
	"BADGE_EVENT_0029",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0029";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0031 = BadgeSettings<
	"BADGE_EVENT_0031",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0031";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0032 = BadgeSettings<
	"BADGE_EVENT_0032",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0032";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0033 = BadgeSettings<
	"BADGE_EVENT_0033",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0033";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0034 = BadgeSettings<
	"BADGE_EVENT_0034",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0034";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0035 = BadgeSettings<
	"BADGE_EVENT_0035",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0035";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0036 = BadgeSettings<
	"BADGE_EVENT_0036",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0036";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0037 = BadgeSettings<
	"BADGE_EVENT_0037",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0037";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0038 = BadgeSettings<
	"BADGE_EVENT_0038",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0038";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0039 = BadgeSettings<
	"BADGE_EVENT_0039",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0039";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0040 = BadgeSettings<
	"BADGE_EVENT_0040",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0040";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0041 = BadgeSettings<
	"BADGE_EVENT_0041",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0041";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0043 = BadgeSettings<
	"BADGE_EVENT_0043",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0043";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0044 = BadgeSettings<
	"BADGE_EVENT_0044",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0044";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0045 = BadgeSettings<
	"BADGE_EVENT_0045",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0045";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0046 = BadgeSettings<
	"BADGE_EVENT_0046",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0046";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0047 = BadgeSettings<
	"BADGE_EVENT_0047",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0047";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0048 = BadgeSettings<
	"BADGE_EVENT_0048",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0048";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0049 = BadgeSettings<
	"BADGE_EVENT_0049",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0049";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0050 = BadgeSettings<
	"BADGE_EVENT_0050",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0050";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0051 = BadgeSettings<
	"BADGE_EVENT_0051",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0051";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0052 = BadgeSettings<
	"BADGE_EVENT_0052",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0052";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0053 = BadgeSettings<
	"BADGE_EVENT_0053",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0053";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0054 = BadgeSettings<
	"BADGE_EVENT_0054",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0054";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0055 = BadgeSettings<
	"BADGE_EVENT_0055",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0055";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0057 = BadgeSettings<
	"BADGE_EVENT_0057",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0057";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0080 = BadgeSettings<
	"BADGE_EVENT_0080",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0080";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0103 = BadgeSettings<
	"BADGE_EVENT_0103",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0103";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0105 = BadgeSettings<
	"BADGE_EVENT_0105",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0105";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0106 = BadgeSettings<
	"BADGE_EVENT_0106",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0106";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0107 = BadgeSettings<
	"BADGE_EVENT_0107",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0107";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0112 = BadgeSettings<
	"BADGE_EVENT_0112",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0112";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0113 = BadgeSettings<
	"BADGE_EVENT_0113",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0113";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0114 = BadgeSettings<
	"BADGE_EVENT_0114",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0114";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0115 = BadgeSettings<
	"BADGE_EVENT_0115",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0115";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0116 = BadgeSettings<
	"BADGE_EVENT_0116",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0116";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0117 = BadgeSettings<
	"BADGE_EVENT_0117",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0117";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0118 = BadgeSettings<
	"BADGE_EVENT_0118",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0118";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0119 = BadgeSettings<
	"BADGE_EVENT_0119",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0119";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0120 = BadgeSettings<
	"BADGE_EVENT_0120",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0120";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0128 = BadgeSettings<
	"BADGE_EVENT_0128",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0128";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0129 = BadgeSettings<
	"BADGE_EVENT_0129",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0129";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0130 = BadgeSettings<
	"BADGE_EVENT_0130",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0130";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0133 = BadgeSettings<
	"BADGE_EVENT_0133",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0133";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0134 = BadgeSettings<
	"BADGE_EVENT_0134",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0134";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0135 = BadgeSettings<
	"BADGE_EVENT_0135",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0135";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0137 = BadgeSettings<
	"BADGE_EVENT_0137",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0137";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0138 = BadgeSettings<
	"BADGE_EVENT_0138",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0138";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0139 = BadgeSettings<
	"BADGE_EVENT_0139",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0139";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0140 = BadgeSettings<
	"BADGE_EVENT_0140",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0140";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0141 = BadgeSettings<
	"BADGE_EVENT_0141",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0141";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0142 = BadgeSettings<
	"BADGE_EVENT_0142",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0142";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0144 = BadgeSettings<
	"BADGE_EVENT_0144",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0144";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0145 = BadgeSettings<
	"BADGE_EVENT_0145",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0145";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0146 = BadgeSettings<
	"BADGE_EVENT_0146",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0146";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0148 = BadgeSettings<
	"BADGE_EVENT_0148",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0148";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0149 = BadgeSettings<
	"BADGE_EVENT_0149",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0149";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0151 = BadgeSettings<
	"BADGE_EVENT_0151",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0151";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0152 = BadgeSettings<
	"BADGE_EVENT_0152",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0152";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0153 = BadgeSettings<
	"BADGE_EVENT_0153",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0153";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0154 = BadgeSettings<
	"BADGE_EVENT_0154",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0154";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0170 = BadgeSettings<
	"BADGE_EVENT_0170",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0170";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0171 = BadgeSettings<
	"BADGE_EVENT_0171",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0171";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsEvent0172 = BadgeSettings<
	"BADGE_EVENT_0172",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0172";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0173 = BadgeSettings<
	"BADGE_EVENT_0173",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0173";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0174 = BadgeSettings<
	"BADGE_EVENT_0174",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0174";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0175 = BadgeSettings<
	"BADGE_EVENT_0175",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0175";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0176 = BadgeSettings<
	"BADGE_EVENT_0176",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0176";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0177 = BadgeSettings<
	"BADGE_EVENT_0177",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0177";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0178 = BadgeSettings<
	"BADGE_EVENT_0178",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0178";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0179 = BadgeSettings<
	"BADGE_EVENT_0179",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0179";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0183 = BadgeSettings<
	"BADGE_EVENT_0183",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0183";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0184 = BadgeSettings<
	"BADGE_EVENT_0184",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0184";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0185 = BadgeSettings<
	"BADGE_EVENT_0185",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0185";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0186 = BadgeSettings<
	"BADGE_EVENT_0186",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0186";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0187 = BadgeSettings<
	"BADGE_EVENT_0187",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0187";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0188 = BadgeSettings<
	"BADGE_EVENT_0188",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0188";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0189 = BadgeSettings<
	"BADGE_EVENT_0189",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0189";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0194 = BadgeSettings<
	"BADGE_EVENT_0194",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0194";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0196 = BadgeSettings<
	"BADGE_EVENT_0196",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0196";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0200 = BadgeSettings<
	"BADGE_EVENT_0200",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0200";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvent0280 = BadgeSettings<
	"BADGE_EVENT_0280",
	{
		badgeRank: 2;
		badgeType: "BADGE_EVENT_0280";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsEvolvedTotal = BadgeSettings<
	"BADGE_EVOLVED_TOTAL",
	{
		badgeRank: 5;
		badgeType: "BADGE_EVOLVED_TOTAL";
		targets: [3, 20, 200, 2000];
	}
>;
export type BadgeSettingsGlobalTicketedEvent = BadgeSettings<
	"BADGE_GLOBAL_TICKETED_EVENT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GLOBAL_TICKETED_EVENT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay00NorthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_00_NORTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_00_NORTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay00NorthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_00_NORTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_00_NORTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay00SouthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_00_SOUTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_00_SOUTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay00SouthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_00_SOUTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_00_SOUTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay01NorthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_01_NORTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_01_NORTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay01NorthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_01_NORTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_01_NORTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay01SouthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_01_SOUTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_01_SOUTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay01SouthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_01_SOUTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_01_SOUTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay02NorthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_02_NORTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_02_NORTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay02NorthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_02_NORTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_02_NORTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay02SouthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_02_SOUTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_02_SOUTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay02SouthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_02_SOUTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_02_SOUTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay03NorthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_03_NORTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_03_NORTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay03NorthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_03_NORTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_03_NORTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay03SouthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_03_SOUTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_03_SOUTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay03SouthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_03_SOUTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_03_SOUTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay04NorthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_04_NORTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_04_NORTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay04NorthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_04_NORTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_04_NORTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay04SouthEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_04_SOUTH_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_04_SOUTH_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019AmericasDay04SouthGeneral = BadgeSettings<
	"BADGE_GOFEST_2019_AMERICAS_DAY_04_SOUTH_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_AMERICAS_DAY_04_SOUTH_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay00General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay01General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay02General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay03General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay04General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_04_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_04_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay05General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_05_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_05_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay06General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_06_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_06_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019ApacDay07General = BadgeSettings<
	"BADGE_GOFEST_2019_APAC_DAY_07_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_APAC_DAY_07_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay00Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay00General = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay01Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay01General = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay02Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay02General = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay03Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay03General = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay04Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_04_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_04_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2019EmeaDay04General = BadgeSettings<
	"BADGE_GOFEST_2019_EMEA_DAY_04_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2019_EMEA_DAY_04_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2020Global = BadgeSettings<
	"BADGE_GOFEST_2020_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2020_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2020Test = BadgeSettings<
	"BADGE_GOFEST_2020_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2020_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2021Global = BadgeSettings<
	"BADGE_GOFEST_2021_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2021_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2021Test = BadgeSettings<
	"BADGE_GOFEST_2021_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2021_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay01Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay01General = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay02Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay02General = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay03Earlyaccess = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinDay03General = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinTestEarlyaccess = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_TEST_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_TEST_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022BerlinTestGeneral = BadgeSettings<
	"BADGE_GOFEST_2022_BERLIN_TEST_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_BERLIN_TEST_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022Global = BadgeSettings<
	"BADGE_GOFEST_2022_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay01CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_01_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_01_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay01CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_01_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_01_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay01ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_01_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_01_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay01ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_01_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_01_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay02CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_02_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_02_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay02CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_02_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_02_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay02ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_02_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_02_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay02ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_02_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_02_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay03CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_03_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_03_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay03CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_03_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_03_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay03ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_03_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_03_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoDay03ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_DAY_03_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_DAY_03_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoTestCityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_TEST_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_TEST_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoTestCityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_TEST_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_TEST_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoTestParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SapporoTestParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SAPPORO_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SAPPORO_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay01CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_01_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_01_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay01CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_01_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_01_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay01ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_01_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_01_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay01ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_01_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_01_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay02CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_02_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_02_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay02CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_02_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_02_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay02ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_02_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_02_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay02ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_02_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_02_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay03CityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_03_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_03_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay03CityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_03_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_03_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay03ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_03_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_03_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleDay03ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_DAY_03_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_DAY_03_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleTestCityAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_TEST_CITY_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_TEST_CITY_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleTestCityMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_TEST_CITY_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_TEST_CITY_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleTestParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022SeattleTestParkMorning = BadgeSettings<
	"BADGE_GOFEST_2022_SEATTLE_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_SEATTLE_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2022Test = BadgeSettings<
	"BADGE_GOFEST_2022_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2022_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023Global = BadgeSettings<
	"BADGE_GOFEST_2023_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonCity2Test = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonCityTest = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay1City = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay2City = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay3City = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonPark2Test = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonParkTest = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023LondonVip = BadgeSettings<
	"BADGE_GOFEST_2023_LONDON_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_LONDON_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkCity2Test = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkCityTest = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay1City = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay2City = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay3City = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkPark2Test = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkParkTest = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023NewyorkVip = BadgeSettings<
	"BADGE_GOFEST_2023_NEWYORK_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_NEWYORK_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaCity2Test = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaCityTest = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay1City = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay2City = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay3City = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaPark2Test = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaParkTest = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023OsakaVip = BadgeSettings<
	"BADGE_GOFEST_2023_OSAKA_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_OSAKA_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2023Test = BadgeSettings<
	"BADGE_GOFEST_2023_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2023_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024Global = BadgeSettings<
	"BADGE_GOFEST_2024_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024GlobalTest = BadgeSettings<
	"BADGE_GOFEST_2024_GLOBAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_GLOBAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridCity2Test = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridCityTest = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay1City = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay2City = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay3City = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridPark2Test = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridParkTest = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024MadridVip = BadgeSettings<
	"BADGE_GOFEST_2024_MADRID_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_MADRID_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkCity2Test = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkCityTest = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay1City = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay2City = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay3City = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkPark2Test = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkParkTest = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024NewyorkVip = BadgeSettings<
	"BADGE_GOFEST_2024_NEWYORK_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_NEWYORK_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024PjcsCity = BadgeSettings<
	"BADGE_GOFEST_2024_PJCS_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_PJCS_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024PjcsTest = BadgeSettings<
	"BADGE_GOFEST_2024_PJCS_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_PJCS_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiAddonHatchTest = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiAddonRaidTest = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiCity2Test = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_CITY_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_CITY_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiCityTest = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_CITY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_CITY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay0City = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY0_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY0_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay0ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY0_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY0_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay0ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY0_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY0_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay1City = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY1_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY1_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay1ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY1_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY1_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay1ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY1_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY1_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay2City = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY2_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY2_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay2ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY2_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY2_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay2ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY2_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY2_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay3City = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY3_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY3_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay3ParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY3_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY3_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiDay3ParkMorning = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_DAY3_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_DAY3_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiPark2Test = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_PARK_2_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_PARK_2_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiParkTest = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_PARK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_PARK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2024SendaiVip = BadgeSettings<
	"BADGE_GOFEST_2024_SENDAI_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2024_SENDAI_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025EventPassDeluxe = BadgeSettings<
	"BADGE_GOFEST_2025_EVENT_PASS_DELUXE",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_EVENT_PASS_DELUXE";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025Global = BadgeSettings<
	"BADGE_GOFEST_2025_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025GlobalTest = BadgeSettings<
	"BADGE_GOFEST_2025_GLOBAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_GLOBAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityFridayCity = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityFridayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityFridayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityFridayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_FRIDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySaturdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySaturdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySaturdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySaturdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SATURDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySundayCity = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySundayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySundayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycitySundayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_SUNDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestCity = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestEssential = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_ESSENTIAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityTestParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityThursdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityThursdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityThursdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityThursdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_THURSDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025JerseycityVip = BadgeSettings<
	"BADGE_GOFEST_2025_JERSEYCITY_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_JERSEYCITY_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaFridayCity = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaFridayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_FRIDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_FRIDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaFridayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_FRIDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_FRIDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaFridayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_FRIDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_FRIDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSaturdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSaturdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SATURDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SATURDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSaturdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SATURDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SATURDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSaturdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SATURDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SATURDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSundayCity = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSundayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SUNDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SUNDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSundayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SUNDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SUNDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaSundayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_SUNDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_SUNDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestCity = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestEssential = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_ESSENTIAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaTestParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaThursdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_THURSDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_THURSDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaThursdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_THURSDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_THURSDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaThursdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_THURSDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_THURSDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaThursdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_THURSDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_THURSDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025OsakaVip = BadgeSettings<
	"BADGE_GOFEST_2025_OSAKA_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_OSAKA_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisFridayCity = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisFridayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_FRIDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_FRIDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisFridayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_FRIDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_FRIDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisFridayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_FRIDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_FRIDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSaturdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSaturdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SATURDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SATURDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSaturdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SATURDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SATURDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSaturdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SATURDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SATURDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSundayCity = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSundayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SUNDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SUNDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSundayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SUNDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SUNDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisSundayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_SUNDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_SUNDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestAddonHatch = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestAddonRaid = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestCity = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestEssential = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_ESSENTIAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisTestParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisThursdayCity = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_THURSDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_THURSDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisThursdayEssential = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_THURSDAY_ESSENTIAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_THURSDAY_ESSENTIAL";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisThursdayParkAfternoon = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_THURSDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_THURSDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisThursdayParkMorning = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_THURSDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_THURSDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2025ParisVip = BadgeSettings<
	"BADGE_GOFEST_2025_PARIS_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOFEST_2025_PARIS_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2026EventPassDeluxe = BadgeSettings<
	"BADGE_GOFEST_2026_EVENT_PASS_DELUXE",
	{
		badgeRank: 2;
		badgeType: 6212;
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGofest2026Global = BadgeSettings<
	"BADGE_GOFEST_2026_GLOBAL",
	{
		badgeRank: 2;
		badgeType: 6210;
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGofest2026GlobalTest = BadgeSettings<
	"BADGE_GOFEST_2026_GLOBAL_TEST",
	{
		badgeRank: 2;
		badgeType: 6211;
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2021GreenGlobal = BadgeSettings<
	"BADGE_GOTOUR_2021_GREEN_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2021_GREEN_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2021GreenTest = BadgeSettings<
	"BADGE_GOTOUR_2021_GREEN_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2021_GREEN_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2021RedGlobal = BadgeSettings<
	"BADGE_GOTOUR_2021_RED_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2021_RED_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2021RedTest = BadgeSettings<
	"BADGE_GOTOUR_2021_RED_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2021_RED_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022GoldGlobal = BadgeSettings<
	"BADGE_GOTOUR_2022_GOLD_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_GOLD_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022GoldTest = BadgeSettings<
	"BADGE_GOTOUR_2022_GOLD_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_GOLD_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022LiveAGlobal = BadgeSettings<
	"BADGE_GOTOUR_2022_LIVE_A_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_LIVE_A_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022LiveATest = BadgeSettings<
	"BADGE_GOTOUR_2022_LIVE_A_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_LIVE_A_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022LiveBGlobal = BadgeSettings<
	"BADGE_GOTOUR_2022_LIVE_B_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_LIVE_B_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022LiveBTest = BadgeSettings<
	"BADGE_GOTOUR_2022_LIVE_B_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_LIVE_B_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022SilverGlobal = BadgeSettings<
	"BADGE_GOTOUR_2022_SILVER_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_SILVER_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2022SilverTest = BadgeSettings<
	"BADGE_GOTOUR_2022_SILVER_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2022_SILVER_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023HatchAddon = BadgeSettings<
	"BADGE_GOTOUR_2023_HATCH_ADDON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_HATCH_ADDON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023HatchAddonTest = BadgeSettings<
	"BADGE_GOTOUR_2023_HATCH_ADDON_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_HATCH_ADDON_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023RaidAddon = BadgeSettings<
	"BADGE_GOTOUR_2023_RAID_ADDON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_RAID_ADDON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023RaidAddonTest = BadgeSettings<
	"BADGE_GOTOUR_2023_RAID_ADDON_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_RAID_ADDON_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023RubyGlobal = BadgeSettings<
	"BADGE_GOTOUR_2023_RUBY_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_RUBY_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023RubyTest = BadgeSettings<
	"BADGE_GOTOUR_2023_RUBY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_RUBY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023SapphireGlobal = BadgeSettings<
	"BADGE_GOTOUR_2023_SAPPHIRE_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_SAPPHIRE_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2023SapphireTest = BadgeSettings<
	"BADGE_GOTOUR_2023_SAPPHIRE_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2023_SAPPHIRE_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Diamond = BadgeSettings<
	"BADGE_GOTOUR_2024_DIAMOND",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_DIAMOND";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024DiamondTest = BadgeSettings<
	"BADGE_GOTOUR_2024_DIAMOND_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_DIAMOND_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Pearl = BadgeSettings<
	"BADGE_GOTOUR_2024_PEARL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_PEARL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024PearlTest = BadgeSettings<
	"BADGE_GOTOUR_2024_PEARL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_PEARL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Secret00 = BadgeSettings<
	"BADGE_GOTOUR_2024_SECRET_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_SECRET_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Secret01 = BadgeSettings<
	"BADGE_GOTOUR_2024_SECRET_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_SECRET_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Secret02 = BadgeSettings<
	"BADGE_GOTOUR_2024_SECRET_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_SECRET_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotour2024Secret03 = BadgeSettings<
	"BADGE_GOTOUR_2024_SECRET_03",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_2024_SECRET_03";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2023Day00 = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2023_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2023_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2023Day01 = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2023_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2023_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2023Day02 = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2023_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2023_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024AddonHatch = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024AddonRaid = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024Day01City = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_DAY_01_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_DAY_01_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024Day01Park = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_DAY_01_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_DAY_01_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024Day02City = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_DAY_02_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_DAY_02_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024Day02Park = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_DAY_02_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_DAY_02_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024DayPreview = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_DAY_PREVIEW",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_DAY_PREVIEW";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024TestAddonHatch = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_TEST_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_TEST_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024TestAddonRaid = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_TEST_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_TEST_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024TestCity = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024TestPark = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_TEST_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_TEST_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGotourLive2024Vip = BadgeSettings<
	"BADGE_GOTOUR_LIVE_2024_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOTOUR_LIVE_2024_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024Global = BadgeSettings<
	"BADGE_GOWA_2024_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlAddonHatch = BadgeSettings<
	"BADGE_GOWA_2024_IRL_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlAddonHatchTest = BadgeSettings<
	"BADGE_GOWA_2024_IRL_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlAddonRaid = BadgeSettings<
	"BADGE_GOWA_2024_IRL_ADDON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_ADDON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlAddonRaidTest = BadgeSettings<
	"BADGE_GOWA_2024_IRL_ADDON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_ADDON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlFulltest = BadgeSettings<
	"BADGE_GOWA_2024_IRL_FULLTEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_FULLTEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSaturdayCity = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSaturdayParkAfternoon = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SATURDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SATURDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSaturdayParkMorning = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SATURDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SATURDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSundayCity = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSundayParkAfternoon = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SUNDAY_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SUNDAY_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlSundayParkMorning = BadgeSettings<
	"BADGE_GOWA_2024_IRL_SUNDAY_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_SUNDAY_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlTestCity = BadgeSettings<
	"BADGE_GOWA_2024_IRL_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlTestParkAfternoon = BadgeSettings<
	"BADGE_GOWA_2024_IRL_TEST_PARK_AFTERNOON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_TEST_PARK_AFTERNOON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024IrlTestParkMorning = BadgeSettings<
	"BADGE_GOWA_2024_IRL_TEST_PARK_MORNING",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_IRL_TEST_PARK_MORNING";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024SpecialResearchA = BadgeSettings<
	"BADGE_GOWA_2024_SPECIAL_RESEARCH_A",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_SPECIAL_RESEARCH_A";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024SpecialResearchB = BadgeSettings<
	"BADGE_GOWA_2024_SPECIAL_RESEARCH_B",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_SPECIAL_RESEARCH_B";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2024Test = BadgeSettings<
	"BADGE_GOWA_2024_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2024_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025Global = BadgeSettings<
	"BADGE_GOWA_2025_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025GlobalTest = BadgeSettings<
	"BADGE_GOWA_2025_GLOBAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_GLOBAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlAddonBattle = BadgeSettings<
	"BADGE_GOWA_2025_IRL_ADDON_BATTLE",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_ADDON_BATTLE";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlAddonBattleTest = BadgeSettings<
	"BADGE_GOWA_2025_IRL_ADDON_BATTLE_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_ADDON_BATTLE_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlAddonExtraDayTest = BadgeSettings<
	"BADGE_GOWA_2025_IRL_ADDON_EXTRA_DAY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_ADDON_EXTRA_DAY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlAddonHatch = BadgeSettings<
	"BADGE_GOWA_2025_IRL_ADDON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_ADDON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlAddonHatchTest = BadgeSettings<
	"BADGE_GOWA_2025_IRL_ADDON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_ADDON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlFridayCityAddon = BadgeSettings<
	"BADGE_GOWA_2025_IRL_FRIDAY_CITY_ADDON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_FRIDAY_CITY_ADDON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlFridayTicketedCity = BadgeSettings<
	"BADGE_GOWA_2025_IRL_FRIDAY_TICKETED_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_FRIDAY_TICKETED_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlFulltest = BadgeSettings<
	"BADGE_GOWA_2025_IRL_FULLTEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_FULLTEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlSaturdayCityAddon = BadgeSettings<
	"BADGE_GOWA_2025_IRL_SATURDAY_CITY_ADDON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_SATURDAY_CITY_ADDON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlSaturdayTicketedCity = BadgeSettings<
	"BADGE_GOWA_2025_IRL_SATURDAY_TICKETED_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_SATURDAY_TICKETED_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlSundayCityAddon = BadgeSettings<
	"BADGE_GOWA_2025_IRL_SUNDAY_CITY_ADDON",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_SUNDAY_CITY_ADDON";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025IrlSundayTicketedCity = BadgeSettings<
	"BADGE_GOWA_2025_IRL_SUNDAY_TICKETED_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_IRL_SUNDAY_TICKETED_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025SpecialResearchA = BadgeSettings<
	"BADGE_GOWA_2025_SPECIAL_RESEARCH_A",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_SPECIAL_RESEARCH_A";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGowa2025SpecialResearchB = BadgeSettings<
	"BADGE_GOWA_2025_SPECIAL_RESEARCH_B",
	{
		badgeRank: 2;
		badgeType: "BADGE_GOWA_2025_SPECIAL_RESEARCH_B";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025GlobalBlackVersion = BadgeSettings<
	"BADGE_GO_TOUR_2025_GLOBAL_BLACK_VERSION",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_GLOBAL_BLACK_VERSION";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025GlobalWhiteVersion = BadgeSettings<
	"BADGE_GO_TOUR_2025_GLOBAL_WHITE_VERSION",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_GLOBAL_WHITE_VERSION";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesAddOnHatch = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesAddOnHatchTest = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesAddOnRaid = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesAddOnRaidTest = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesFridayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesFridayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_FRIDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_FRIDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesSaturdayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesSaturdayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_SATURDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_SATURDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesSundayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesSundayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_SUNDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_SUNDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesTestCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesTestPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_TEST_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_TEST_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025LosAngelesVip = BadgeSettings<
	"BADGE_GO_TOUR_2025_LOS_ANGELES_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_LOS_ANGELES_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityAddOnHatch = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityAddOnHatchTest = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityAddOnRaid = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityAddOnRaidTest = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityFridayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityFridayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_FRIDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_FRIDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCitySaturdayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCitySaturdayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SATURDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SATURDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCitySundayCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCitySundayPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SUNDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_SUNDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityTestCity = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityTestPark = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_TEST_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_TEST_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2025NewTaipeiCityVip = BadgeSettings<
	"BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2025_NEW_TAIPEI_CITY_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026DeluxePass = BadgeSettings<
	"BADGE_GO_TOUR_2026_DELUXE_PASS",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_DELUXE_PASS";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026Global = BadgeSettings<
	"BADGE_GO_TOUR_2026_GLOBAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_GLOBAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026GlobalSecret01 = BadgeSettings<
	"BADGE_GO_TOUR_2026_GLOBAL_SECRET_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_GLOBAL_SECRET_01";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026GlobalTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_GLOBAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_GLOBAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026GlobalXVersion = BadgeSettings<
	"BADGE_GO_TOUR_2026_GLOBAL_X_VERSION",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_GLOBAL_X_VERSION";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026GlobalYVersion = BadgeSettings<
	"BADGE_GO_TOUR_2026_GLOBAL_Y_VERSION",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_GLOBAL_Y_VERSION";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesAddOnHatch = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesAddOnHatchTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesAddOnRaid = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesAddOnRaidTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesFridayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesFridayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesFridayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_FRIDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesMegaNightTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_MEGA_NIGHT_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_MEGA_NIGHT_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSaturdayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSaturdayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSaturdayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SATURDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSundayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSundayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesSundayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_SUNDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesTestCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesTestPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_TEST_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_TEST_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026LosAngelesVip = BadgeSettings<
	"BADGE_GO_TOUR_2026_LOS_ANGELES_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_LOS_ANGELES_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanAddOnHatch = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanAddOnHatchTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanAddOnRaid = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanAddOnRaidTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanFridayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_FRIDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_FRIDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanFridayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_FRIDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_FRIDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanFridayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_FRIDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_FRIDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanMegaNightTest = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_MEGA_NIGHT_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_MEGA_NIGHT_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSaturdayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SATURDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SATURDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSaturdayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SATURDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SATURDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSaturdayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SATURDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SATURDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSundayCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SUNDAY_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SUNDAY_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSundayMegaNight = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SUNDAY_MEGA_NIGHT",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SUNDAY_MEGA_NIGHT";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanSundayPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_SUNDAY_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_SUNDAY_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanTestCity = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_TEST_CITY",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_TEST_CITY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanTestPark = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_TEST_PARK",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_TEST_PARK";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGoTour2026TainanVip = BadgeSettings<
	"BADGE_GO_TOUR_2026_TAINAN_VIP",
	{
		badgeRank: 2;
		badgeType: "BADGE_GO_TOUR_2026_TAINAN_VIP";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsGreatLeague = BadgeSettings<
	"BADGE_GREAT_LEAGUE",
	{
		badgeRank: 5;
		badgeType: "BADGE_GREAT_LEAGUE";
		targets: [5, 50, 200, 1000];
	}
>;
export type BadgeSettingsHatchedTotal = BadgeSettings<
	"BADGE_HATCHED_TOTAL",
	{
		badgeRank: 5;
		badgeType: "BADGE_HATCHED_TOTAL";
		targets: [10, 100, 500, 2500];
	}
>;
export type BadgeSettingsHoursDefended = BadgeSettings<
	"BADGE_HOURS_DEFENDED",
	{
		badgeRank: 5;
		badgeType: "BADGE_HOURS_DEFENDED";
		targets: [10, 100, 1000, 15000];
	}
>;
export type BadgeSettingsLegendaryBattleWon = BadgeSettings<
	"BADGE_LEGENDARY_BATTLE_WON",
	{
		badgeRank: 5;
		badgeType: "BADGE_LEGENDARY_BATTLE_WON";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsLevel40 = BadgeSettings<
	"BADGE_LEVEL_40",
	{
		badgeRank: 2;
		badgeType: "BADGE_LEVEL_40";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsMasterLeague = BadgeSettings<
	"BADGE_MASTER_LEAGUE",
	{
		badgeRank: 5;
		badgeType: "BADGE_MASTER_LEAGUE";
		targets: [5, 50, 200, 1000];
	}
>;
export type BadgeSettingsMaxLevelFriends = BadgeSettings<
	"BADGE_MAX_LEVEL_FRIENDS",
	{
		badgeRank: 5;
		badgeType: "BADGE_MAX_LEVEL_FRIENDS";
		targets: [1, 2, 3, 20];
	}
>;
export type BadgeSettingsMaxSizeFirstPlaceWin = BadgeSettings<
	"BADGE_MAX_SIZE_FIRST_PLACE_WIN",
	{
		badgeRank: 5;
		badgeType: "BADGE_MAX_SIZE_FIRST_PLACE_WIN";
		captureReward: [
			Record<string, never>,
			Record<string, never>,
			Record<string, never>,
			Record<string, never>,
			{
				rewardTypes: ["POKEMON_ENCOUNTER"];
			},
		];
		targets: [1, 10, 50, 100];
	}
>;
export type BadgeSettingsMiniCollection = BadgeSettings<
	"BADGE_MINI_COLLECTION",
	{
		badgeRank: 2;
		badgeType: "BADGE_MINI_COLLECTION";
		targets: [1];
	}
>;
export type BadgeSettingsPartnerEvent20190 = BadgeSettings<
	"BADGE_PARTNER_EVENT_2019_0",
	{
		badgeRank: 2;
		badgeType: "BADGE_PARTNER_EVENT_2019_0";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsPartnerEvent20191 = BadgeSettings<
	"BADGE_PARTNER_EVENT_2019_1",
	{
		badgeRank: 2;
		badgeType: "BADGE_PARTNER_EVENT_2019_1";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsPartyChallengesCompleted = BadgeSettings<
	"BADGE_PARTY_CHALLENGES_COMPLETED",
	{
		badgeRank: 5;
		badgeType: "BADGE_PARTY_CHALLENGES_COMPLETED";
		targets: [10, 50, 100, 200];
	}
>;
export type BadgeSettingsPhotobomb = BadgeSettings<
	"BADGE_PHOTOBOMB",
	{
		badgeRank: 5;
		badgeType: "BADGE_PHOTOBOMB";
		targets: [10, 50, 200, 400];
	}
>;
export type BadgeSettingsPikachu = BadgeSettings<
	"BADGE_PIKACHU",
	{
		badgeRank: 5;
		badgeType: "BADGE_PIKACHU";
		targets: [3, 50, 300, 1000];
	}
>;
export type BadgeSettingsPikachuOutbreakYokohama2017 = BadgeSettings<
	"BADGE_PIKACHU_OUTBREAK_YOKOHAMA_2017",
	{
		badgeRank: 2;
		badgeType: "BADGE_PIKACHU_OUTBREAK_YOKOHAMA_2017";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsPokedexEntries = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES";
		targets: [5, 50, 100, 151];
	}
>;
export type BadgeSettingsPokedexEntriesGen2 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN2",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN2";
		targets: [5, 30, 70, 100];
	}
>;
export type BadgeSettingsPokedexEntriesGen3 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN3",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN3";
		targets: [5, 40, 90, 135];
	}
>;
export type BadgeSettingsPokedexEntriesGen4 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN4",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN4";
		targets: [5, 30, 80, 107];
	}
>;
export type BadgeSettingsPokedexEntriesGen5 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN5",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN5";
		targets: [5, 50, 100, 156];
	}
>;
export type BadgeSettingsPokedexEntriesGen6 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN6",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN6";
		targets: [5, 25, 50, 72];
	}
>;
export type BadgeSettingsPokedexEntriesGen7 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN7",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN7";
		targets: [5, 25, 50, 86];
	}
>;
export type BadgeSettingsPokedexEntriesGen8 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN8",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN8";
		targets: [5, 25, 50, 89];
	}
>;
export type BadgeSettingsPokedexEntriesGen8a = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN8A",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN8A";
		targets: [1, 3, 5, 7];
	}
>;
export type BadgeSettingsPokedexEntriesGen9 = BadgeSettings<
	"BADGE_POKEDEX_ENTRIES_GEN9",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEDEX_ENTRIES_GEN9";
		targets: [5, 30, 80, 103];
	}
>;
export type BadgeSettingsPokemonCaughtAtYourLures = BadgeSettings<
	"BADGE_POKEMON_CAUGHT_AT_YOUR_LURES",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEMON_CAUGHT_AT_YOUR_LURES";
		targets: [5, 25, 500, 2500];
	}
>;
export type BadgeSettingsPokemonPurified = BadgeSettings<
	"BADGE_POKEMON_PURIFIED",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKEMON_PURIFIED";
		targets: [5, 50, 500, 1000];
	}
>;
export type BadgeSettingsPokestopsVisited = BadgeSettings<
	"BADGE_POKESTOPS_VISITED",
	{
		badgeRank: 5;
		badgeType: "BADGE_POKESTOPS_VISITED";
		targets: [100, 1000, 2000, 50000];
	}
>;
export type BadgeSettingsQuestDialogueInboxControl = BadgeSettings<
	"BADGE_QUEST_DIALOGUE_INBOX_CONTROL",
	{
		badgeRank: 2;
		badgeType: 6214;
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsQuestDialogueInboxRollout = BadgeSettings<
	"BADGE_QUEST_DIALOGUE_INBOX_ROLLOUT",
	{
		badgeRank: 2;
		badgeType: 6213;
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsRaidsWithFriends = BadgeSettings<
	"BADGE_RAIDS_WITH_FRIENDS",
	{
		badgeRank: 5;
		badgeType: "BADGE_RAIDS_WITH_FRIENDS";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsRaidBattleStat = BadgeSettings<
	"BADGE_RAID_BATTLE_STAT",
	{
		badgeRank: 5;
		badgeType: "BADGE_RAID_BATTLE_STAT";
		targets: [1, 50, 200, 500];
	}
>;
export type BadgeSettingsRaidBattleWon = BadgeSettings<
	"BADGE_RAID_BATTLE_WON",
	{
		badgeRank: 5;
		badgeType: "BADGE_RAID_BATTLE_WON";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsRocketGiovanniDefeated = BadgeSettings<
	"BADGE_ROCKET_GIOVANNI_DEFEATED",
	{
		badgeRank: 5;
		badgeType: "BADGE_ROCKET_GIOVANNI_DEFEATED";
		targets: [1, 5, 20, 50];
	}
>;
export type BadgeSettingsRocketGruntsDefeated = BadgeSettings<
	"BADGE_ROCKET_GRUNTS_DEFEATED",
	{
		badgeRank: 5;
		badgeType: "BADGE_ROCKET_GRUNTS_DEFEATED";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2019MontrealDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2019_MONTREAL_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2019_MONTREAL_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020LiverpoolDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_LIVERPOOL_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020PhiladelphiaDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_PHILADELPHIA_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2020StlouisDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2020_STLOUIS_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2020_STLOUIS_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SevilleDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SEVILLE_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SEVILLE_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay00EarlyaccessTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_00_EARLYACCESS_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_00_EARLYACCESS_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay00GeneralTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_00_GENERAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_00_GENERAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay01EarlyaccessTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_01_EARLYACCESS_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_01_EARLYACCESS_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay01GeneralTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_01_GENERAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_01_GENERAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay02EarlyaccessTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_02_EARLYACCESS_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_02_EARLYACCESS_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay02GeneralTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_02_GENERAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_02_GENERAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay03EarlyaccessTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_03_EARLYACCESS_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_03_EARLYACCESS_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022SingaporeDay03GeneralTest = BadgeSettings<
	"BADGE_SAFARIZONE_2022_SINGAPORE_DAY_03_GENERAL_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_SINGAPORE_DAY_03_GENERAL_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay00Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_00_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_00_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay00General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_00_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_00_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay01Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_01_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_01_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay01General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_01_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_01_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay02Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_02_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_02_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay02General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_02_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_02_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay03Earlyaccess = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_03_EARLYACCESS",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_03_EARLYACCESS";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafarizone2022TaipeiDay03General = BadgeSettings<
	"BADGE_SAFARIZONE_2022_TAIPEI_DAY_03_GENERAL",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARIZONE_2022_TAIPEI_DAY_03_GENERAL";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023BarcelonaAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2023_BARCELONA_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_BARCELONA_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023BarcelonaAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2023_BARCELONA_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_BARCELONA_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023BarcelonaDay00 = BadgeSettings<
	"BADGE_SAFARI_2023_BARCELONA_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_BARCELONA_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023BarcelonaDay01 = BadgeSettings<
	"BADGE_SAFARI_2023_BARCELONA_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_BARCELONA_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023BarcelonaDay02 = BadgeSettings<
	"BADGE_SAFARI_2023_BARCELONA_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_BARCELONA_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023MexcityAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2023_MEXCITY_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_MEXCITY_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023MexcityAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2023_MEXCITY_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_MEXCITY_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023MexcityDay00 = BadgeSettings<
	"BADGE_SAFARI_2023_MEXCITY_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_MEXCITY_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023MexcityDay01 = BadgeSettings<
	"BADGE_SAFARI_2023_MEXCITY_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_MEXCITY_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023MexcityDay02 = BadgeSettings<
	"BADGE_SAFARI_2023_MEXCITY_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_MEXCITY_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023SeoulAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2023_SEOUL_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_SEOUL_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023SeoulAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2023_SEOUL_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_SEOUL_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023SeoulDay00 = BadgeSettings<
	"BADGE_SAFARI_2023_SEOUL_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_SEOUL_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023SeoulDay01 = BadgeSettings<
	"BADGE_SAFARI_2023_SEOUL_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_SEOUL_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2023SeoulDay02 = BadgeSettings<
	"BADGE_SAFARI_2023_SEOUL_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2023_SEOUL_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongDay01 = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongDay02 = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024HongKongTest = BadgeSettings<
	"BADGE_SAFARI_2024_HONG_KONG_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_HONG_KONG_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay00 = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay00Citywide = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_00_CITYWIDE",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_00_CITYWIDE";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay01 = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay01Citywide = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_01_CITYWIDE",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_01_CITYWIDE";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay02 = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay02Citywide = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_02_CITYWIDE",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_02_CITYWIDE";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay03 = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_03",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_03";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024IncheonDay03Citywide = BadgeSettings<
	"BADGE_SAFARI_2024_INCHEON_DAY_03_CITYWIDE",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_INCHEON_DAY_03_CITYWIDE";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaDay00 = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaDay01 = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024JakartaDay02 = BadgeSettings<
	"BADGE_SAFARI_2024_JAKARTA_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_JAKARTA_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloDay01 = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloDay02 = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024SaoPauloTest = BadgeSettings<
	"BADGE_SAFARI_2024_SAO_PAULO_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_SAO_PAULO_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanDay00 = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_DAY_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_DAY_00";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanDay01 = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2024TainanDay02 = BadgeSettings<
	"BADGE_SAFARI_2024_TAINAN_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2024_TAINAN_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamSunday = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025AmsterdamTest = BadgeSettings<
	"BADGE_SAFARI_2025_AMSTERDAM_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_AMSTERDAM_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokSunday = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BangkokTest = BadgeSettings<
	"BADGE_SAFARI_2025_BANGKOK_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BANGKOK_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresSunday = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025BuenosAiresTest = BadgeSettings<
	"BADGE_SAFARI_2025_BUENOS_AIRES_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_BUENOS_AIRES_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunSunday = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025CancunTest = BadgeSettings<
	"BADGE_SAFARI_2025_CANCUN_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_CANCUN_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiSunday = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MiamiTest = BadgeSettings<
	"BADGE_SAFARI_2025_MIAMI_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MIAMI_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanDay01 = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanDay02 = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MilanTest = BadgeSettings<
	"BADGE_SAFARI_2025_MILAN_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MILAN_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiDay01 = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiDay02 = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025MumbaiTest = BadgeSettings<
	"BADGE_SAFARI_2025_MUMBAI_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_MUMBAI_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoDay01 = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoDay02 = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SantiagoTest = BadgeSettings<
	"BADGE_SAFARI_2025_SANTIAGO_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SANTIAGO_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeDay01 = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_DAY_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_DAY_01";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeDay02 = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_DAY_02",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_DAY_02";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SingaporeTest = BadgeSettings<
	"BADGE_SAFARI_2025_SINGAPORE_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SINGAPORE_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneyAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneyAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneyAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneyAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneySaturday = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneySunday = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025SydneyTest = BadgeSettings<
	"BADGE_SAFARI_2025_SYDNEY_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_SYDNEY_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaSunday = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025ValenciaTest = BadgeSettings<
	"BADGE_SAFARI_2025_VALENCIA_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VALENCIA_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverAddOnHatch = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_ADD_ON_HATCH",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_ADD_ON_HATCH";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverAddOnHatchTest = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_ADD_ON_HATCH_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_ADD_ON_HATCH_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverAddOnRaid = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_ADD_ON_RAID",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_ADD_ON_RAID";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverAddOnRaidTest = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_ADD_ON_RAID_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_ADD_ON_RAID_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverSaturday = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_SATURDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_SATURDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverSunday = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_SUNDAY",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_SUNDAY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafari2025VancouverTest = BadgeSettings<
	"BADGE_SAFARI_2025_VANCOUVER_TEST",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_2025_VANCOUVER_TEST";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafariZoneEurope2017 = BadgeSettings<
	"BADGE_SAFARI_ZONE_EUROPE_2017",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_ZONE_EUROPE_2017";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafariZoneEurope20171007 = BadgeSettings<
	"BADGE_SAFARI_ZONE_EUROPE_2017_10_07",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_ZONE_EUROPE_2017_10_07";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSafariZoneEurope20171014 = BadgeSettings<
	"BADGE_SAFARI_ZONE_EUROPE_2017_10_14",
	{
		badgeRank: 2;
		badgeType: "BADGE_SAFARI_ZONE_EUROPE_2017_10_14";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSentosa18Apr2019 = BadgeSettings<
	"BADGE_SENTOSA_18_APR_2019",
	{
		badgeRank: 2;
		badgeType: "BADGE_SENTOSA_18_APR_2019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSentosa19Apr2019 = BadgeSettings<
	"BADGE_SENTOSA_19_APR_2019",
	{
		badgeRank: 2;
		badgeType: "BADGE_SENTOSA_19_APR_2019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSentosa20Apr2019 = BadgeSettings<
	"BADGE_SENTOSA_20_APR_2019",
	{
		badgeRank: 2;
		badgeType: "BADGE_SENTOSA_20_APR_2019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSentosa21Apr2019 = BadgeSettings<
	"BADGE_SENTOSA_21_APR_2019",
	{
		badgeRank: 2;
		badgeType: "BADGE_SENTOSA_21_APR_2019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSentosa22Apr2019 = BadgeSettings<
	"BADGE_SENTOSA_22_APR_2019",
	{
		badgeRank: 2;
		badgeType: "BADGE_SENTOSA_22_APR_2019";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsSmallRattata = BadgeSettings<
	"BADGE_SMALL_RATTATA",
	{
		badgeRank: 5;
		badgeType: "BADGE_SMALL_RATTATA";
		targets: [3, 50, 300, 1000];
	}
>;
export type BadgeSettingsSmores00 = BadgeSettings<
	"BADGE_SMORES_00",
	{
		badgeRank: 2;
		badgeType: "BADGE_SMORES_00";
		targets: [
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
		];
	}
>;
export type BadgeSettingsSmores01 = BadgeSettings<
	"BADGE_SMORES_01",
	{
		badgeRank: 2;
		badgeType: "BADGE_SMORES_01";
		targets: [
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
			100,
		];
	}
>;
export type BadgeSettingsTopBanana1 = BadgeSettings<
	"BADGE_TOP_BANANA_1",
	{
		badgeRank: 2;
		badgeType: "BADGE_TOP_BANANA_1";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsTopBanana2 = BadgeSettings<
	"BADGE_TOP_BANANA_2",
	{
		badgeRank: 2;
		badgeType: "BADGE_TOP_BANANA_2";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsTopBanana3 = BadgeSettings<
	"BADGE_TOP_BANANA_3",
	{
		badgeRank: 2;
		badgeType: "BADGE_TOP_BANANA_3";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsTotalMegaEvos = BadgeSettings<
	"BADGE_TOTAL_MEGA_EVOS",
	{
		badgeRank: 5;
		badgeType: "BADGE_TOTAL_MEGA_EVOS";
		targets: [1, 50, 500, 1000];
	}
>;
export type BadgeSettingsTotalRoutePlay = BadgeSettings<
	"BADGE_TOTAL_ROUTE_PLAY",
	{
		badgeRank: 5;
		badgeType: "BADGE_TOTAL_ROUTE_PLAY";
		targets: [10, 50, 200, 600];
	}
>;
export type BadgeSettingsTrading = BadgeSettings<
	"BADGE_TRADING",
	{
		badgeRank: 5;
		badgeType: "BADGE_TRADING";
		targets: [10, 100, 1000, 2500];
	}
>;
export type BadgeSettingsTradingCard0001 = BadgeSettings<
	"BADGE_TRADING_CARD_0001",
	{
		badgeRank: 2;
		badgeType: "BADGE_TRADING_CARD_0001";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsTradingDistance = BadgeSettings<
	"BADGE_TRADING_DISTANCE",
	{
		badgeRank: 5;
		badgeType: "BADGE_TRADING_DISTANCE";
		targets: [1000, 100000, 1000000, 10000000];
	}
>;
export type BadgeSettingsTrainersReferred = BadgeSettings<
	"BADGE_TRAINERS_REFERRED",
	{
		badgeRank: 5;
		badgeType: "BADGE_TRAINERS_REFERRED";
		targets: [1, 10, 20, 50];
	}
>;
export type BadgeSettingsTravelKm = BadgeSettings<
	"BADGE_TRAVEL_KM",
	{
		badgeRank: 5;
		badgeType: "BADGE_TRAVEL_KM";
		targets: [10, 100, 1000, 10000];
	}
>;
export type BadgeSettingsTypeBug = BadgeSettings<
	"BADGE_TYPE_BUG",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_BUG";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeDark = BadgeSettings<
	"BADGE_TYPE_DARK",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_DARK";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeDragon = BadgeSettings<
	"BADGE_TYPE_DRAGON",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_DRAGON";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeElectric = BadgeSettings<
	"BADGE_TYPE_ELECTRIC",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_ELECTRIC";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeFairy = BadgeSettings<
	"BADGE_TYPE_FAIRY",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_FAIRY";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeFighting = BadgeSettings<
	"BADGE_TYPE_FIGHTING",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_FIGHTING";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeFire = BadgeSettings<
	"BADGE_TYPE_FIRE",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_FIRE";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeFlying = BadgeSettings<
	"BADGE_TYPE_FLYING",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_FLYING";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeGhost = BadgeSettings<
	"BADGE_TYPE_GHOST",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_GHOST";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeGrass = BadgeSettings<
	"BADGE_TYPE_GRASS",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_GRASS";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeGround = BadgeSettings<
	"BADGE_TYPE_GROUND",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_GROUND";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeIce = BadgeSettings<
	"BADGE_TYPE_ICE",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_ICE";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeNormal = BadgeSettings<
	"BADGE_TYPE_NORMAL",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_NORMAL";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypePoison = BadgeSettings<
	"BADGE_TYPE_POISON",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_POISON";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypePsychic = BadgeSettings<
	"BADGE_TYPE_PSYCHIC",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_PSYCHIC";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeRock = BadgeSettings<
	"BADGE_TYPE_ROCK",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_ROCK";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeSteel = BadgeSettings<
	"BADGE_TYPE_STEEL",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_STEEL";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsTypeWater = BadgeSettings<
	"BADGE_TYPE_WATER",
	{
		badgeRank: 5;
		badgeType: "BADGE_TYPE_WATER";
		captureReward: [Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>, Record<string, never>];
		targets: [10, 50, 200, 2500];
	}
>;
export type BadgeSettingsUltraLeague = BadgeSettings<
	"BADGE_ULTRA_LEAGUE",
	{
		badgeRank: 5;
		badgeType: "BADGE_ULTRA_LEAGUE";
		targets: [5, 50, 200, 1000];
	}
>;
export type BadgeSettingsUniqueMegaEvos = BadgeSettings<
	"BADGE_UNIQUE_MEGA_EVOS",
	{
		badgeRank: 5;
		badgeType: "BADGE_UNIQUE_MEGA_EVOS";
		targets: [1, 24, 36, 46];
	}
>;
export type BadgeSettingsUniquePokestops = BadgeSettings<
	"BADGE_UNIQUE_POKESTOPS",
	{
		badgeRank: 5;
		badgeType: "BADGE_UNIQUE_POKESTOPS";
		targets: [10, 100, 1000, 2000];
	}
>;
export type BadgeSettingsUniqueRaidBossesDefeated = BadgeSettings<
	"BADGE_UNIQUE_RAID_BOSSES_DEFEATED",
	{
		badgeRank: 5;
		badgeType: "BADGE_UNIQUE_RAID_BOSSES_DEFEATED";
		targets: [2, 10, 50, 150];
	}
>;
export type BadgeSettingsUnown = BadgeSettings<
	"BADGE_UNOWN",
	{
		badgeRank: 5;
		badgeType: "BADGE_UNOWN";
		targets: [3, 10, 26, 28];
	}
>;
export type BadgeSettingsWayfarer = BadgeSettings<
	"BADGE_WAYFARER",
	{
		badgeRank: 5;
		badgeType: "BADGE_WAYFARER";
		targets: [50, 500, 1000, 1500];
	}
>;
export type BadgeSettingsWeeklyChallengeEligible = BadgeSettings<
	"BADGE_WEEKLY_CHALLENGE_ELIGIBLE",
	{
		badgeRank: 2;
		badgeType: "BADGE_WEEKLY_CHALLENGE_ELIGIBLE";
		eventBadge: true;
		eventBadgeSettings: {
			obEventBadgeSettingsNumber6: 1;
		};
		targets: [100];
	}
>;
export type BadgeSettingsYokosuka1Sep2018Verny = BadgeSettings<
	"BADGE_YOKOSUKA_1_SEP_2018_VERNY",
	{
		badgeRank: 2;
		badgeType: "BADGE_YOKOSUKA_1_SEP_2018_VERNY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsYokosuka29Aug2018Verny = BadgeSettings<
	"BADGE_YOKOSUKA_29_AUG_2018_VERNY",
	{
		badgeRank: 2;
		badgeType: "BADGE_YOKOSUKA_29_AUG_2018_VERNY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsYokosuka2Sep2018Verny = BadgeSettings<
	"BADGE_YOKOSUKA_2_SEP_2018_VERNY",
	{
		badgeRank: 2;
		badgeType: "BADGE_YOKOSUKA_2_SEP_2018_VERNY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsYokosuka30Aug2018Verny = BadgeSettings<
	"BADGE_YOKOSUKA_30_AUG_2018_VERNY",
	{
		badgeRank: 2;
		badgeType: "BADGE_YOKOSUKA_30_AUG_2018_VERNY";
		eventBadge: true;
		targets: [100];
	}
>;
export type BadgeSettingsYokosuka31Aug2018Verny = BadgeSettings<
	"BADGE_YOKOSUKA_31_AUG_2018_VERNY",
	{
		badgeRank: 2;
		badgeType: "BADGE_YOKOSUKA_31_AUG_2018_VERNY";
		eventBadge: true;
		targets: [100];
	}
>;

export type BadgeSettingsMasterfileEntry =
	| BadgeSettings7DayStreaks
	| BadgeSettingsAa2023JejuDay00
	| BadgeSettingsAa2023JejuDay01
	| BadgeSettingsAa2023JejuDay02
	| BadgeSettingsAa2023JejuDay03
	| BadgeSettingsAa2024BaliDay00
	| BadgeSettingsAa2024BaliDay01
	| BadgeSettingsAa2024BaliDay02
	| BadgeSettingsAa2024SurabayaDay00
	| BadgeSettingsAa2024SurabayaDay01
	| BadgeSettingsAa2024SurabayaDay02
	| BadgeSettingsAa2024YogyakartaDay00
	| BadgeSettingsAa2024YogyakartaDay01
	| BadgeSettingsAa2024YogyakartaDay02
	| BadgeSettingsApacPartnerJuly20181
	| BadgeSettingsApacPartnerJuly20182
	| BadgeSettingsApacPartnerJuly20183
	| BadgeSettingsApacPartnerJuly20184
	| BadgeSettingsApacPartnerJuly20185
	| BadgeSettingsApacPartnerJuly20186
	| BadgeSettingsApacPartnerJuly20187
	| BadgeSettingsBattleAttackWon
	| BadgeSettingsBattleTrainingWon
	| BadgeSettingsBerriesFed
	| BadgeSettingsBestFriendsPlusEligible
	| BadgeSettingsBigMagikarp
	| BadgeSettingsBuddyBest
	| BadgeSettingsButterflyCollector
	| BadgeSettingsCaptureLargePokemon
	| BadgeSettingsCaptureSmallPokemon
	| BadgeSettingsCaptureTotal
	| BadgeSettingsChallengeQuests
	| BadgeSettingsCheckIns
	| BadgeSettingsChicagoFestJuly2017
	| BadgeSettingsChicagoFestJuly2018SatNorth
	| BadgeSettingsChicagoFestJuly2018SatSouth
	| BadgeSettingsChicagoFestJuly2018SunNorth
	| BadgeSettingsChicagoFestJuly2018SunSouth
	| BadgeSettingsCityExplorerPass00
	| BadgeSettingsCityExplorerPass01
	| BadgeSettingsCityExplorerPass02
	| BadgeSettingsCityExplorerPass03
	| BadgeSettingsEvent0001
	| BadgeSettingsEvent0002
	| BadgeSettingsEvent0003
	| BadgeSettingsEvent0004
	| BadgeSettingsEvent0005
	| BadgeSettingsEvent0006
	| BadgeSettingsEvent0007
	| BadgeSettingsEvent0009
	| BadgeSettingsEvent0010
	| BadgeSettingsEvent0011
	| BadgeSettingsEvent0012
	| BadgeSettingsEvent0013
	| BadgeSettingsEvent0014
	| BadgeSettingsEvent0015
	| BadgeSettingsEvent0016
	| BadgeSettingsEvent0017
	| BadgeSettingsEvent0018
	| BadgeSettingsEvent0019
	| BadgeSettingsEvent0020
	| BadgeSettingsEvent0022
	| BadgeSettingsEvent0023
	| BadgeSettingsEvent0024
	| BadgeSettingsEvent0025
	| BadgeSettingsEvent0026
	| BadgeSettingsEvent0027
	| BadgeSettingsEvent0028
	| BadgeSettingsEvent0029
	| BadgeSettingsEvent0031
	| BadgeSettingsEvent0032
	| BadgeSettingsEvent0033
	| BadgeSettingsEvent0034
	| BadgeSettingsEvent0035
	| BadgeSettingsEvent0036
	| BadgeSettingsEvent0037
	| BadgeSettingsEvent0038
	| BadgeSettingsEvent0039
	| BadgeSettingsEvent0040
	| BadgeSettingsEvent0041
	| BadgeSettingsEvent0043
	| BadgeSettingsEvent0044
	| BadgeSettingsEvent0045
	| BadgeSettingsEvent0046
	| BadgeSettingsEvent0047
	| BadgeSettingsEvent0048
	| BadgeSettingsEvent0049
	| BadgeSettingsEvent0050
	| BadgeSettingsEvent0051
	| BadgeSettingsEvent0052
	| BadgeSettingsEvent0053
	| BadgeSettingsEvent0054
	| BadgeSettingsEvent0055
	| BadgeSettingsEvent0057
	| BadgeSettingsEvent0080
	| BadgeSettingsEvent0103
	| BadgeSettingsEvent0105
	| BadgeSettingsEvent0106
	| BadgeSettingsEvent0107
	| BadgeSettingsEvent0112
	| BadgeSettingsEvent0113
	| BadgeSettingsEvent0114
	| BadgeSettingsEvent0115
	| BadgeSettingsEvent0116
	| BadgeSettingsEvent0117
	| BadgeSettingsEvent0118
	| BadgeSettingsEvent0119
	| BadgeSettingsEvent0120
	| BadgeSettingsEvent0128
	| BadgeSettingsEvent0129
	| BadgeSettingsEvent0130
	| BadgeSettingsEvent0133
	| BadgeSettingsEvent0134
	| BadgeSettingsEvent0135
	| BadgeSettingsEvent0137
	| BadgeSettingsEvent0138
	| BadgeSettingsEvent0139
	| BadgeSettingsEvent0140
	| BadgeSettingsEvent0141
	| BadgeSettingsEvent0142
	| BadgeSettingsEvent0144
	| BadgeSettingsEvent0145
	| BadgeSettingsEvent0146
	| BadgeSettingsEvent0148
	| BadgeSettingsEvent0149
	| BadgeSettingsEvent0151
	| BadgeSettingsEvent0152
	| BadgeSettingsEvent0153
	| BadgeSettingsEvent0154
	| BadgeSettingsEvent0170
	| BadgeSettingsEvent0171
	| BadgeSettingsEvent0172
	| BadgeSettingsEvent0173
	| BadgeSettingsEvent0174
	| BadgeSettingsEvent0175
	| BadgeSettingsEvent0176
	| BadgeSettingsEvent0177
	| BadgeSettingsEvent0178
	| BadgeSettingsEvent0179
	| BadgeSettingsEvent0183
	| BadgeSettingsEvent0184
	| BadgeSettingsEvent0185
	| BadgeSettingsEvent0186
	| BadgeSettingsEvent0187
	| BadgeSettingsEvent0188
	| BadgeSettingsEvent0189
	| BadgeSettingsEvent0194
	| BadgeSettingsEvent0196
	| BadgeSettingsEvent0200
	| BadgeSettingsEvent0280
	| BadgeSettingsEvolvedTotal
	| BadgeSettingsGlobalTicketedEvent
	| BadgeSettingsGofest2019AmericasDay00NorthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay00NorthGeneral
	| BadgeSettingsGofest2019AmericasDay00SouthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay00SouthGeneral
	| BadgeSettingsGofest2019AmericasDay01NorthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay01NorthGeneral
	| BadgeSettingsGofest2019AmericasDay01SouthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay01SouthGeneral
	| BadgeSettingsGofest2019AmericasDay02NorthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay02NorthGeneral
	| BadgeSettingsGofest2019AmericasDay02SouthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay02SouthGeneral
	| BadgeSettingsGofest2019AmericasDay03NorthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay03NorthGeneral
	| BadgeSettingsGofest2019AmericasDay03SouthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay03SouthGeneral
	| BadgeSettingsGofest2019AmericasDay04NorthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay04NorthGeneral
	| BadgeSettingsGofest2019AmericasDay04SouthEarlyaccess
	| BadgeSettingsGofest2019AmericasDay04SouthGeneral
	| BadgeSettingsGofest2019ApacDay00General
	| BadgeSettingsGofest2019ApacDay01General
	| BadgeSettingsGofest2019ApacDay02General
	| BadgeSettingsGofest2019ApacDay03General
	| BadgeSettingsGofest2019ApacDay04General
	| BadgeSettingsGofest2019ApacDay05General
	| BadgeSettingsGofest2019ApacDay06General
	| BadgeSettingsGofest2019ApacDay07General
	| BadgeSettingsGofest2019EmeaDay00Earlyaccess
	| BadgeSettingsGofest2019EmeaDay00General
	| BadgeSettingsGofest2019EmeaDay01Earlyaccess
	| BadgeSettingsGofest2019EmeaDay01General
	| BadgeSettingsGofest2019EmeaDay02Earlyaccess
	| BadgeSettingsGofest2019EmeaDay02General
	| BadgeSettingsGofest2019EmeaDay03Earlyaccess
	| BadgeSettingsGofest2019EmeaDay03General
	| BadgeSettingsGofest2019EmeaDay04Earlyaccess
	| BadgeSettingsGofest2019EmeaDay04General
	| BadgeSettingsGofest2020Global
	| BadgeSettingsGofest2020Test
	| BadgeSettingsGofest2021Global
	| BadgeSettingsGofest2021Test
	| BadgeSettingsGofest2022BerlinAddonHatch
	| BadgeSettingsGofest2022BerlinAddonHatchTest
	| BadgeSettingsGofest2022BerlinAddonRaid
	| BadgeSettingsGofest2022BerlinAddonRaidTest
	| BadgeSettingsGofest2022BerlinDay01Earlyaccess
	| BadgeSettingsGofest2022BerlinDay01General
	| BadgeSettingsGofest2022BerlinDay02Earlyaccess
	| BadgeSettingsGofest2022BerlinDay02General
	| BadgeSettingsGofest2022BerlinDay03Earlyaccess
	| BadgeSettingsGofest2022BerlinDay03General
	| BadgeSettingsGofest2022BerlinTestEarlyaccess
	| BadgeSettingsGofest2022BerlinTestGeneral
	| BadgeSettingsGofest2022Global
	| BadgeSettingsGofest2022SapporoAddonHatch
	| BadgeSettingsGofest2022SapporoAddonHatchTest
	| BadgeSettingsGofest2022SapporoAddonRaid
	| BadgeSettingsGofest2022SapporoAddonRaidTest
	| BadgeSettingsGofest2022SapporoDay01CityAfternoon
	| BadgeSettingsGofest2022SapporoDay01CityMorning
	| BadgeSettingsGofest2022SapporoDay01ParkAfternoon
	| BadgeSettingsGofest2022SapporoDay01ParkMorning
	| BadgeSettingsGofest2022SapporoDay02CityAfternoon
	| BadgeSettingsGofest2022SapporoDay02CityMorning
	| BadgeSettingsGofest2022SapporoDay02ParkAfternoon
	| BadgeSettingsGofest2022SapporoDay02ParkMorning
	| BadgeSettingsGofest2022SapporoDay03CityAfternoon
	| BadgeSettingsGofest2022SapporoDay03CityMorning
	| BadgeSettingsGofest2022SapporoDay03ParkAfternoon
	| BadgeSettingsGofest2022SapporoDay03ParkMorning
	| BadgeSettingsGofest2022SapporoTestCityAfternoon
	| BadgeSettingsGofest2022SapporoTestCityMorning
	| BadgeSettingsGofest2022SapporoTestParkAfternoon
	| BadgeSettingsGofest2022SapporoTestParkMorning
	| BadgeSettingsGofest2022SeattleAddonHatch
	| BadgeSettingsGofest2022SeattleAddonHatchTest
	| BadgeSettingsGofest2022SeattleAddonRaid
	| BadgeSettingsGofest2022SeattleAddonRaidTest
	| BadgeSettingsGofest2022SeattleDay01CityAfternoon
	| BadgeSettingsGofest2022SeattleDay01CityMorning
	| BadgeSettingsGofest2022SeattleDay01ParkAfternoon
	| BadgeSettingsGofest2022SeattleDay01ParkMorning
	| BadgeSettingsGofest2022SeattleDay02CityAfternoon
	| BadgeSettingsGofest2022SeattleDay02CityMorning
	| BadgeSettingsGofest2022SeattleDay02ParkAfternoon
	| BadgeSettingsGofest2022SeattleDay02ParkMorning
	| BadgeSettingsGofest2022SeattleDay03CityAfternoon
	| BadgeSettingsGofest2022SeattleDay03CityMorning
	| BadgeSettingsGofest2022SeattleDay03ParkAfternoon
	| BadgeSettingsGofest2022SeattleDay03ParkMorning
	| BadgeSettingsGofest2022SeattleTestCityAfternoon
	| BadgeSettingsGofest2022SeattleTestCityMorning
	| BadgeSettingsGofest2022SeattleTestParkAfternoon
	| BadgeSettingsGofest2022SeattleTestParkMorning
	| BadgeSettingsGofest2022Test
	| BadgeSettingsGofest2023Global
	| BadgeSettingsGofest2023LondonAddonHatch
	| BadgeSettingsGofest2023LondonAddonHatchTest
	| BadgeSettingsGofest2023LondonAddonRaid
	| BadgeSettingsGofest2023LondonAddonRaidTest
	| BadgeSettingsGofest2023LondonCity2Test
	| BadgeSettingsGofest2023LondonCityTest
	| BadgeSettingsGofest2023LondonDay1City
	| BadgeSettingsGofest2023LondonDay1ParkAfternoon
	| BadgeSettingsGofest2023LondonDay1ParkMorning
	| BadgeSettingsGofest2023LondonDay2City
	| BadgeSettingsGofest2023LondonDay2ParkAfternoon
	| BadgeSettingsGofest2023LondonDay2ParkMorning
	| BadgeSettingsGofest2023LondonDay3City
	| BadgeSettingsGofest2023LondonDay3ParkAfternoon
	| BadgeSettingsGofest2023LondonDay3ParkMorning
	| BadgeSettingsGofest2023LondonPark2Test
	| BadgeSettingsGofest2023LondonParkTest
	| BadgeSettingsGofest2023LondonVip
	| BadgeSettingsGofest2023NewyorkAddonHatch
	| BadgeSettingsGofest2023NewyorkAddonHatchTest
	| BadgeSettingsGofest2023NewyorkAddonRaid
	| BadgeSettingsGofest2023NewyorkAddonRaidTest
	| BadgeSettingsGofest2023NewyorkCity2Test
	| BadgeSettingsGofest2023NewyorkCityTest
	| BadgeSettingsGofest2023NewyorkDay1City
	| BadgeSettingsGofest2023NewyorkDay1ParkAfternoon
	| BadgeSettingsGofest2023NewyorkDay1ParkMorning
	| BadgeSettingsGofest2023NewyorkDay2City
	| BadgeSettingsGofest2023NewyorkDay2ParkAfternoon
	| BadgeSettingsGofest2023NewyorkDay2ParkMorning
	| BadgeSettingsGofest2023NewyorkDay3City
	| BadgeSettingsGofest2023NewyorkDay3ParkAfternoon
	| BadgeSettingsGofest2023NewyorkDay3ParkMorning
	| BadgeSettingsGofest2023NewyorkPark2Test
	| BadgeSettingsGofest2023NewyorkParkTest
	| BadgeSettingsGofest2023NewyorkVip
	| BadgeSettingsGofest2023OsakaAddonHatch
	| BadgeSettingsGofest2023OsakaAddonHatchTest
	| BadgeSettingsGofest2023OsakaAddonRaid
	| BadgeSettingsGofest2023OsakaAddonRaidTest
	| BadgeSettingsGofest2023OsakaCity2Test
	| BadgeSettingsGofest2023OsakaCityTest
	| BadgeSettingsGofest2023OsakaDay1City
	| BadgeSettingsGofest2023OsakaDay1ParkAfternoon
	| BadgeSettingsGofest2023OsakaDay1ParkMorning
	| BadgeSettingsGofest2023OsakaDay2City
	| BadgeSettingsGofest2023OsakaDay2ParkAfternoon
	| BadgeSettingsGofest2023OsakaDay2ParkMorning
	| BadgeSettingsGofest2023OsakaDay3City
	| BadgeSettingsGofest2023OsakaDay3ParkAfternoon
	| BadgeSettingsGofest2023OsakaDay3ParkMorning
	| BadgeSettingsGofest2023OsakaPark2Test
	| BadgeSettingsGofest2023OsakaParkTest
	| BadgeSettingsGofest2023OsakaVip
	| BadgeSettingsGofest2023Test
	| BadgeSettingsGofest2024Global
	| BadgeSettingsGofest2024GlobalTest
	| BadgeSettingsGofest2024MadridAddonHatch
	| BadgeSettingsGofest2024MadridAddonHatchTest
	| BadgeSettingsGofest2024MadridAddonRaid
	| BadgeSettingsGofest2024MadridAddonRaidTest
	| BadgeSettingsGofest2024MadridCity2Test
	| BadgeSettingsGofest2024MadridCityTest
	| BadgeSettingsGofest2024MadridDay1City
	| BadgeSettingsGofest2024MadridDay1ParkAfternoon
	| BadgeSettingsGofest2024MadridDay1ParkMorning
	| BadgeSettingsGofest2024MadridDay2City
	| BadgeSettingsGofest2024MadridDay2ParkAfternoon
	| BadgeSettingsGofest2024MadridDay2ParkMorning
	| BadgeSettingsGofest2024MadridDay3City
	| BadgeSettingsGofest2024MadridDay3ParkAfternoon
	| BadgeSettingsGofest2024MadridDay3ParkMorning
	| BadgeSettingsGofest2024MadridPark2Test
	| BadgeSettingsGofest2024MadridParkTest
	| BadgeSettingsGofest2024MadridVip
	| BadgeSettingsGofest2024NewyorkAddonHatch
	| BadgeSettingsGofest2024NewyorkAddonHatchTest
	| BadgeSettingsGofest2024NewyorkAddonRaid
	| BadgeSettingsGofest2024NewyorkAddonRaidTest
	| BadgeSettingsGofest2024NewyorkCity2Test
	| BadgeSettingsGofest2024NewyorkCityTest
	| BadgeSettingsGofest2024NewyorkDay1City
	| BadgeSettingsGofest2024NewyorkDay1ParkAfternoon
	| BadgeSettingsGofest2024NewyorkDay1ParkMorning
	| BadgeSettingsGofest2024NewyorkDay2City
	| BadgeSettingsGofest2024NewyorkDay2ParkAfternoon
	| BadgeSettingsGofest2024NewyorkDay2ParkMorning
	| BadgeSettingsGofest2024NewyorkDay3City
	| BadgeSettingsGofest2024NewyorkDay3ParkAfternoon
	| BadgeSettingsGofest2024NewyorkDay3ParkMorning
	| BadgeSettingsGofest2024NewyorkPark2Test
	| BadgeSettingsGofest2024NewyorkParkTest
	| BadgeSettingsGofest2024NewyorkVip
	| BadgeSettingsGofest2024PjcsCity
	| BadgeSettingsGofest2024PjcsTest
	| BadgeSettingsGofest2024SendaiAddonHatch
	| BadgeSettingsGofest2024SendaiAddonHatchTest
	| BadgeSettingsGofest2024SendaiAddonRaid
	| BadgeSettingsGofest2024SendaiAddonRaidTest
	| BadgeSettingsGofest2024SendaiCity2Test
	| BadgeSettingsGofest2024SendaiCityTest
	| BadgeSettingsGofest2024SendaiDay0City
	| BadgeSettingsGofest2024SendaiDay0ParkAfternoon
	| BadgeSettingsGofest2024SendaiDay0ParkMorning
	| BadgeSettingsGofest2024SendaiDay1City
	| BadgeSettingsGofest2024SendaiDay1ParkAfternoon
	| BadgeSettingsGofest2024SendaiDay1ParkMorning
	| BadgeSettingsGofest2024SendaiDay2City
	| BadgeSettingsGofest2024SendaiDay2ParkAfternoon
	| BadgeSettingsGofest2024SendaiDay2ParkMorning
	| BadgeSettingsGofest2024SendaiDay3City
	| BadgeSettingsGofest2024SendaiDay3ParkAfternoon
	| BadgeSettingsGofest2024SendaiDay3ParkMorning
	| BadgeSettingsGofest2024SendaiPark2Test
	| BadgeSettingsGofest2024SendaiParkTest
	| BadgeSettingsGofest2024SendaiVip
	| BadgeSettingsGofest2025EventPassDeluxe
	| BadgeSettingsGofest2025Global
	| BadgeSettingsGofest2025GlobalTest
	| BadgeSettingsGofest2025JerseycityAddonHatch
	| BadgeSettingsGofest2025JerseycityAddonRaid
	| BadgeSettingsGofest2025JerseycityFridayCity
	| BadgeSettingsGofest2025JerseycityFridayEssential
	| BadgeSettingsGofest2025JerseycityFridayParkAfternoon
	| BadgeSettingsGofest2025JerseycityFridayParkMorning
	| BadgeSettingsGofest2025JerseycitySaturdayCity
	| BadgeSettingsGofest2025JerseycitySaturdayEssential
	| BadgeSettingsGofest2025JerseycitySaturdayParkAfternoon
	| BadgeSettingsGofest2025JerseycitySaturdayParkMorning
	| BadgeSettingsGofest2025JerseycitySundayCity
	| BadgeSettingsGofest2025JerseycitySundayEssential
	| BadgeSettingsGofest2025JerseycitySundayParkAfternoon
	| BadgeSettingsGofest2025JerseycitySundayParkMorning
	| BadgeSettingsGofest2025JerseycityTestAddonHatch
	| BadgeSettingsGofest2025JerseycityTestAddonRaid
	| BadgeSettingsGofest2025JerseycityTestCity
	| BadgeSettingsGofest2025JerseycityTestEssential
	| BadgeSettingsGofest2025JerseycityTestParkAfternoon
	| BadgeSettingsGofest2025JerseycityTestParkMorning
	| BadgeSettingsGofest2025JerseycityThursdayCity
	| BadgeSettingsGofest2025JerseycityThursdayEssential
	| BadgeSettingsGofest2025JerseycityThursdayParkAfternoon
	| BadgeSettingsGofest2025JerseycityThursdayParkMorning
	| BadgeSettingsGofest2025JerseycityVip
	| BadgeSettingsGofest2025OsakaAddonHatch
	| BadgeSettingsGofest2025OsakaAddonRaid
	| BadgeSettingsGofest2025OsakaFridayCity
	| BadgeSettingsGofest2025OsakaFridayEssential
	| BadgeSettingsGofest2025OsakaFridayParkAfternoon
	| BadgeSettingsGofest2025OsakaFridayParkMorning
	| BadgeSettingsGofest2025OsakaSaturdayCity
	| BadgeSettingsGofest2025OsakaSaturdayEssential
	| BadgeSettingsGofest2025OsakaSaturdayParkAfternoon
	| BadgeSettingsGofest2025OsakaSaturdayParkMorning
	| BadgeSettingsGofest2025OsakaSundayCity
	| BadgeSettingsGofest2025OsakaSundayEssential
	| BadgeSettingsGofest2025OsakaSundayParkAfternoon
	| BadgeSettingsGofest2025OsakaSundayParkMorning
	| BadgeSettingsGofest2025OsakaTestAddonHatch
	| BadgeSettingsGofest2025OsakaTestAddonRaid
	| BadgeSettingsGofest2025OsakaTestCity
	| BadgeSettingsGofest2025OsakaTestEssential
	| BadgeSettingsGofest2025OsakaTestParkAfternoon
	| BadgeSettingsGofest2025OsakaTestParkMorning
	| BadgeSettingsGofest2025OsakaThursdayCity
	| BadgeSettingsGofest2025OsakaThursdayEssential
	| BadgeSettingsGofest2025OsakaThursdayParkAfternoon
	| BadgeSettingsGofest2025OsakaThursdayParkMorning
	| BadgeSettingsGofest2025OsakaVip
	| BadgeSettingsGofest2025ParisAddonHatch
	| BadgeSettingsGofest2025ParisAddonRaid
	| BadgeSettingsGofest2025ParisFridayCity
	| BadgeSettingsGofest2025ParisFridayEssential
	| BadgeSettingsGofest2025ParisFridayParkAfternoon
	| BadgeSettingsGofest2025ParisFridayParkMorning
	| BadgeSettingsGofest2025ParisSaturdayCity
	| BadgeSettingsGofest2025ParisSaturdayEssential
	| BadgeSettingsGofest2025ParisSaturdayParkAfternoon
	| BadgeSettingsGofest2025ParisSaturdayParkMorning
	| BadgeSettingsGofest2025ParisSundayCity
	| BadgeSettingsGofest2025ParisSundayEssential
	| BadgeSettingsGofest2025ParisSundayParkAfternoon
	| BadgeSettingsGofest2025ParisSundayParkMorning
	| BadgeSettingsGofest2025ParisTestAddonHatch
	| BadgeSettingsGofest2025ParisTestAddonRaid
	| BadgeSettingsGofest2025ParisTestCity
	| BadgeSettingsGofest2025ParisTestEssential
	| BadgeSettingsGofest2025ParisTestParkAfternoon
	| BadgeSettingsGofest2025ParisTestParkMorning
	| BadgeSettingsGofest2025ParisThursdayCity
	| BadgeSettingsGofest2025ParisThursdayEssential
	| BadgeSettingsGofest2025ParisThursdayParkAfternoon
	| BadgeSettingsGofest2025ParisThursdayParkMorning
	| BadgeSettingsGofest2025ParisVip
	| BadgeSettingsGofest2026EventPassDeluxe
	| BadgeSettingsGofest2026Global
	| BadgeSettingsGofest2026GlobalTest
	| BadgeSettingsGotour2021GreenGlobal
	| BadgeSettingsGotour2021GreenTest
	| BadgeSettingsGotour2021RedGlobal
	| BadgeSettingsGotour2021RedTest
	| BadgeSettingsGotour2022GoldGlobal
	| BadgeSettingsGotour2022GoldTest
	| BadgeSettingsGotour2022LiveAGlobal
	| BadgeSettingsGotour2022LiveATest
	| BadgeSettingsGotour2022LiveBGlobal
	| BadgeSettingsGotour2022LiveBTest
	| BadgeSettingsGotour2022SilverGlobal
	| BadgeSettingsGotour2022SilverTest
	| BadgeSettingsGotour2023HatchAddon
	| BadgeSettingsGotour2023HatchAddonTest
	| BadgeSettingsGotour2023RaidAddon
	| BadgeSettingsGotour2023RaidAddonTest
	| BadgeSettingsGotour2023RubyGlobal
	| BadgeSettingsGotour2023RubyTest
	| BadgeSettingsGotour2023SapphireGlobal
	| BadgeSettingsGotour2023SapphireTest
	| BadgeSettingsGotour2024Diamond
	| BadgeSettingsGotour2024DiamondTest
	| BadgeSettingsGotour2024Pearl
	| BadgeSettingsGotour2024PearlTest
	| BadgeSettingsGotour2024Secret00
	| BadgeSettingsGotour2024Secret01
	| BadgeSettingsGotour2024Secret02
	| BadgeSettingsGotour2024Secret03
	| BadgeSettingsGotourLive2023Day00
	| BadgeSettingsGotourLive2023Day01
	| BadgeSettingsGotourLive2023Day02
	| BadgeSettingsGotourLive2024AddonHatch
	| BadgeSettingsGotourLive2024AddonRaid
	| BadgeSettingsGotourLive2024Day01City
	| BadgeSettingsGotourLive2024Day01Park
	| BadgeSettingsGotourLive2024Day02City
	| BadgeSettingsGotourLive2024Day02Park
	| BadgeSettingsGotourLive2024DayPreview
	| BadgeSettingsGotourLive2024TestAddonHatch
	| BadgeSettingsGotourLive2024TestAddonRaid
	| BadgeSettingsGotourLive2024TestCity
	| BadgeSettingsGotourLive2024TestPark
	| BadgeSettingsGotourLive2024Vip
	| BadgeSettingsGowa2024Global
	| BadgeSettingsGowa2024IrlAddonHatch
	| BadgeSettingsGowa2024IrlAddonHatchTest
	| BadgeSettingsGowa2024IrlAddonRaid
	| BadgeSettingsGowa2024IrlAddonRaidTest
	| BadgeSettingsGowa2024IrlFulltest
	| BadgeSettingsGowa2024IrlSaturdayCity
	| BadgeSettingsGowa2024IrlSaturdayParkAfternoon
	| BadgeSettingsGowa2024IrlSaturdayParkMorning
	| BadgeSettingsGowa2024IrlSundayCity
	| BadgeSettingsGowa2024IrlSundayParkAfternoon
	| BadgeSettingsGowa2024IrlSundayParkMorning
	| BadgeSettingsGowa2024IrlTestCity
	| BadgeSettingsGowa2024IrlTestParkAfternoon
	| BadgeSettingsGowa2024IrlTestParkMorning
	| BadgeSettingsGowa2024SpecialResearchA
	| BadgeSettingsGowa2024SpecialResearchB
	| BadgeSettingsGowa2024Test
	| BadgeSettingsGowa2025Global
	| BadgeSettingsGowa2025GlobalTest
	| BadgeSettingsGowa2025IrlAddonBattle
	| BadgeSettingsGowa2025IrlAddonBattleTest
	| BadgeSettingsGowa2025IrlAddonExtraDayTest
	| BadgeSettingsGowa2025IrlAddonHatch
	| BadgeSettingsGowa2025IrlAddonHatchTest
	| BadgeSettingsGowa2025IrlFridayCityAddon
	| BadgeSettingsGowa2025IrlFridayTicketedCity
	| BadgeSettingsGowa2025IrlFulltest
	| BadgeSettingsGowa2025IrlSaturdayCityAddon
	| BadgeSettingsGowa2025IrlSaturdayTicketedCity
	| BadgeSettingsGowa2025IrlSundayCityAddon
	| BadgeSettingsGowa2025IrlSundayTicketedCity
	| BadgeSettingsGowa2025SpecialResearchA
	| BadgeSettingsGowa2025SpecialResearchB
	| BadgeSettingsGoTour2025GlobalBlackVersion
	| BadgeSettingsGoTour2025GlobalWhiteVersion
	| BadgeSettingsGoTour2025LosAngelesAddOnHatch
	| BadgeSettingsGoTour2025LosAngelesAddOnHatchTest
	| BadgeSettingsGoTour2025LosAngelesAddOnRaid
	| BadgeSettingsGoTour2025LosAngelesAddOnRaidTest
	| BadgeSettingsGoTour2025LosAngelesFridayCity
	| BadgeSettingsGoTour2025LosAngelesFridayPark
	| BadgeSettingsGoTour2025LosAngelesSaturdayCity
	| BadgeSettingsGoTour2025LosAngelesSaturdayPark
	| BadgeSettingsGoTour2025LosAngelesSundayCity
	| BadgeSettingsGoTour2025LosAngelesSundayPark
	| BadgeSettingsGoTour2025LosAngelesTestCity
	| BadgeSettingsGoTour2025LosAngelesTestPark
	| BadgeSettingsGoTour2025LosAngelesVip
	| BadgeSettingsGoTour2025NewTaipeiCityAddOnHatch
	| BadgeSettingsGoTour2025NewTaipeiCityAddOnHatchTest
	| BadgeSettingsGoTour2025NewTaipeiCityAddOnRaid
	| BadgeSettingsGoTour2025NewTaipeiCityAddOnRaidTest
	| BadgeSettingsGoTour2025NewTaipeiCityFridayCity
	| BadgeSettingsGoTour2025NewTaipeiCityFridayPark
	| BadgeSettingsGoTour2025NewTaipeiCitySaturdayCity
	| BadgeSettingsGoTour2025NewTaipeiCitySaturdayPark
	| BadgeSettingsGoTour2025NewTaipeiCitySundayCity
	| BadgeSettingsGoTour2025NewTaipeiCitySundayPark
	| BadgeSettingsGoTour2025NewTaipeiCityTestCity
	| BadgeSettingsGoTour2025NewTaipeiCityTestPark
	| BadgeSettingsGoTour2025NewTaipeiCityVip
	| BadgeSettingsGoTour2026DeluxePass
	| BadgeSettingsGoTour2026Global
	| BadgeSettingsGoTour2026GlobalSecret01
	| BadgeSettingsGoTour2026GlobalTest
	| BadgeSettingsGoTour2026GlobalXVersion
	| BadgeSettingsGoTour2026GlobalYVersion
	| BadgeSettingsGoTour2026LosAngelesAddOnHatch
	| BadgeSettingsGoTour2026LosAngelesAddOnHatchTest
	| BadgeSettingsGoTour2026LosAngelesAddOnRaid
	| BadgeSettingsGoTour2026LosAngelesAddOnRaidTest
	| BadgeSettingsGoTour2026LosAngelesFridayCity
	| BadgeSettingsGoTour2026LosAngelesFridayMegaNight
	| BadgeSettingsGoTour2026LosAngelesFridayPark
	| BadgeSettingsGoTour2026LosAngelesMegaNightTest
	| BadgeSettingsGoTour2026LosAngelesSaturdayCity
	| BadgeSettingsGoTour2026LosAngelesSaturdayMegaNight
	| BadgeSettingsGoTour2026LosAngelesSaturdayPark
	| BadgeSettingsGoTour2026LosAngelesSundayCity
	| BadgeSettingsGoTour2026LosAngelesSundayMegaNight
	| BadgeSettingsGoTour2026LosAngelesSundayPark
	| BadgeSettingsGoTour2026LosAngelesTestCity
	| BadgeSettingsGoTour2026LosAngelesTestPark
	| BadgeSettingsGoTour2026LosAngelesVip
	| BadgeSettingsGoTour2026TainanAddOnHatch
	| BadgeSettingsGoTour2026TainanAddOnHatchTest
	| BadgeSettingsGoTour2026TainanAddOnRaid
	| BadgeSettingsGoTour2026TainanAddOnRaidTest
	| BadgeSettingsGoTour2026TainanFridayCity
	| BadgeSettingsGoTour2026TainanFridayMegaNight
	| BadgeSettingsGoTour2026TainanFridayPark
	| BadgeSettingsGoTour2026TainanMegaNightTest
	| BadgeSettingsGoTour2026TainanSaturdayCity
	| BadgeSettingsGoTour2026TainanSaturdayMegaNight
	| BadgeSettingsGoTour2026TainanSaturdayPark
	| BadgeSettingsGoTour2026TainanSundayCity
	| BadgeSettingsGoTour2026TainanSundayMegaNight
	| BadgeSettingsGoTour2026TainanSundayPark
	| BadgeSettingsGoTour2026TainanTestCity
	| BadgeSettingsGoTour2026TainanTestPark
	| BadgeSettingsGoTour2026TainanVip
	| BadgeSettingsGreatLeague
	| BadgeSettingsHatchedTotal
	| BadgeSettingsHoursDefended
	| BadgeSettingsLegendaryBattleWon
	| BadgeSettingsLevel40
	| BadgeSettingsMasterLeague
	| BadgeSettingsMaxLevelFriends
	| BadgeSettingsMaxSizeFirstPlaceWin
	| BadgeSettingsMiniCollection
	| BadgeSettingsPartnerEvent20190
	| BadgeSettingsPartnerEvent20191
	| BadgeSettingsPartyChallengesCompleted
	| BadgeSettingsPhotobomb
	| BadgeSettingsPikachu
	| BadgeSettingsPikachuOutbreakYokohama2017
	| BadgeSettingsPokedexEntries
	| BadgeSettingsPokedexEntriesGen2
	| BadgeSettingsPokedexEntriesGen3
	| BadgeSettingsPokedexEntriesGen4
	| BadgeSettingsPokedexEntriesGen5
	| BadgeSettingsPokedexEntriesGen6
	| BadgeSettingsPokedexEntriesGen7
	| BadgeSettingsPokedexEntriesGen8
	| BadgeSettingsPokedexEntriesGen8a
	| BadgeSettingsPokedexEntriesGen9
	| BadgeSettingsPokemonCaughtAtYourLures
	| BadgeSettingsPokemonPurified
	| BadgeSettingsPokestopsVisited
	| BadgeSettingsQuestDialogueInboxControl
	| BadgeSettingsQuestDialogueInboxRollout
	| BadgeSettingsRaidsWithFriends
	| BadgeSettingsRaidBattleStat
	| BadgeSettingsRaidBattleWon
	| BadgeSettingsRocketGiovanniDefeated
	| BadgeSettingsRocketGruntsDefeated
	| BadgeSettingsSafarizone2019MontrealDay00Earlyaccess
	| BadgeSettingsSafarizone2019MontrealDay00General
	| BadgeSettingsSafarizone2019MontrealDay01Earlyaccess
	| BadgeSettingsSafarizone2019MontrealDay01General
	| BadgeSettingsSafarizone2019MontrealDay02Earlyaccess
	| BadgeSettingsSafarizone2019MontrealDay02General
	| BadgeSettingsSafarizone2019MontrealDay03Earlyaccess
	| BadgeSettingsSafarizone2019MontrealDay03General
	| BadgeSettingsSafarizone2020LiverpoolDay00Earlyaccess
	| BadgeSettingsSafarizone2020LiverpoolDay00General
	| BadgeSettingsSafarizone2020LiverpoolDay01Earlyaccess
	| BadgeSettingsSafarizone2020LiverpoolDay01General
	| BadgeSettingsSafarizone2020LiverpoolDay02Earlyaccess
	| BadgeSettingsSafarizone2020LiverpoolDay02General
	| BadgeSettingsSafarizone2020LiverpoolDay03Earlyaccess
	| BadgeSettingsSafarizone2020LiverpoolDay03General
	| BadgeSettingsSafarizone2020PhiladelphiaDay00Earlyaccess
	| BadgeSettingsSafarizone2020PhiladelphiaDay00General
	| BadgeSettingsSafarizone2020PhiladelphiaDay01Earlyaccess
	| BadgeSettingsSafarizone2020PhiladelphiaDay01General
	| BadgeSettingsSafarizone2020PhiladelphiaDay02Earlyaccess
	| BadgeSettingsSafarizone2020PhiladelphiaDay02General
	| BadgeSettingsSafarizone2020PhiladelphiaDay03Earlyaccess
	| BadgeSettingsSafarizone2020PhiladelphiaDay03General
	| BadgeSettingsSafarizone2020StlouisDay00Earlyaccess
	| BadgeSettingsSafarizone2020StlouisDay00General
	| BadgeSettingsSafarizone2020StlouisDay01Earlyaccess
	| BadgeSettingsSafarizone2020StlouisDay01General
	| BadgeSettingsSafarizone2020StlouisDay02Earlyaccess
	| BadgeSettingsSafarizone2020StlouisDay02General
	| BadgeSettingsSafarizone2020StlouisDay03Earlyaccess
	| BadgeSettingsSafarizone2020StlouisDay03General
	| BadgeSettingsSafarizone2022SevilleDay00Earlyaccess
	| BadgeSettingsSafarizone2022SevilleDay00General
	| BadgeSettingsSafarizone2022SevilleDay01Earlyaccess
	| BadgeSettingsSafarizone2022SevilleDay01General
	| BadgeSettingsSafarizone2022SevilleDay02Earlyaccess
	| BadgeSettingsSafarizone2022SevilleDay02General
	| BadgeSettingsSafarizone2022SevilleDay03Earlyaccess
	| BadgeSettingsSafarizone2022SevilleDay03General
	| BadgeSettingsSafarizone2022SingaporeDay00EarlyaccessTest
	| BadgeSettingsSafarizone2022SingaporeDay00GeneralTest
	| BadgeSettingsSafarizone2022SingaporeDay01EarlyaccessTest
	| BadgeSettingsSafarizone2022SingaporeDay01GeneralTest
	| BadgeSettingsSafarizone2022SingaporeDay02EarlyaccessTest
	| BadgeSettingsSafarizone2022SingaporeDay02GeneralTest
	| BadgeSettingsSafarizone2022SingaporeDay03EarlyaccessTest
	| BadgeSettingsSafarizone2022SingaporeDay03GeneralTest
	| BadgeSettingsSafarizone2022TaipeiDay00Earlyaccess
	| BadgeSettingsSafarizone2022TaipeiDay00General
	| BadgeSettingsSafarizone2022TaipeiDay01Earlyaccess
	| BadgeSettingsSafarizone2022TaipeiDay01General
	| BadgeSettingsSafarizone2022TaipeiDay02Earlyaccess
	| BadgeSettingsSafarizone2022TaipeiDay02General
	| BadgeSettingsSafarizone2022TaipeiDay03Earlyaccess
	| BadgeSettingsSafarizone2022TaipeiDay03General
	| BadgeSettingsSafari2023BarcelonaAddOnHatch
	| BadgeSettingsSafari2023BarcelonaAddOnRaid
	| BadgeSettingsSafari2023BarcelonaDay00
	| BadgeSettingsSafari2023BarcelonaDay01
	| BadgeSettingsSafari2023BarcelonaDay02
	| BadgeSettingsSafari2023MexcityAddOnHatch
	| BadgeSettingsSafari2023MexcityAddOnRaid
	| BadgeSettingsSafari2023MexcityDay00
	| BadgeSettingsSafari2023MexcityDay01
	| BadgeSettingsSafari2023MexcityDay02
	| BadgeSettingsSafari2023SeoulAddOnHatch
	| BadgeSettingsSafari2023SeoulAddOnRaid
	| BadgeSettingsSafari2023SeoulDay00
	| BadgeSettingsSafari2023SeoulDay01
	| BadgeSettingsSafari2023SeoulDay02
	| BadgeSettingsSafari2024HongKongAddOnHatch
	| BadgeSettingsSafari2024HongKongAddOnHatchTest
	| BadgeSettingsSafari2024HongKongAddOnRaid
	| BadgeSettingsSafari2024HongKongAddOnRaidTest
	| BadgeSettingsSafari2024HongKongDay01
	| BadgeSettingsSafari2024HongKongDay02
	| BadgeSettingsSafari2024HongKongTest
	| BadgeSettingsSafari2024IncheonDay00
	| BadgeSettingsSafari2024IncheonDay00Citywide
	| BadgeSettingsSafari2024IncheonDay01
	| BadgeSettingsSafari2024IncheonDay01Citywide
	| BadgeSettingsSafari2024IncheonDay02
	| BadgeSettingsSafari2024IncheonDay02Citywide
	| BadgeSettingsSafari2024IncheonDay03
	| BadgeSettingsSafari2024IncheonDay03Citywide
	| BadgeSettingsSafari2024JakartaAddOnHatch
	| BadgeSettingsSafari2024JakartaAddOnHatchTest
	| BadgeSettingsSafari2024JakartaAddOnRaid
	| BadgeSettingsSafari2024JakartaAddOnRaidTest
	| BadgeSettingsSafari2024JakartaDay00
	| BadgeSettingsSafari2024JakartaDay01
	| BadgeSettingsSafari2024JakartaDay02
	| BadgeSettingsSafari2024SaoPauloAddOnHatch
	| BadgeSettingsSafari2024SaoPauloAddOnHatchTest
	| BadgeSettingsSafari2024SaoPauloAddOnRaid
	| BadgeSettingsSafari2024SaoPauloAddOnRaidTest
	| BadgeSettingsSafari2024SaoPauloDay01
	| BadgeSettingsSafari2024SaoPauloDay02
	| BadgeSettingsSafari2024SaoPauloTest
	| BadgeSettingsSafari2024TainanAddOnHatch
	| BadgeSettingsSafari2024TainanAddOnHatchTest
	| BadgeSettingsSafari2024TainanAddOnRaid
	| BadgeSettingsSafari2024TainanAddOnRaidTest
	| BadgeSettingsSafari2024TainanDay00
	| BadgeSettingsSafari2024TainanDay01
	| BadgeSettingsSafari2024TainanDay02
	| BadgeSettingsSafari2025AmsterdamAddOnHatch
	| BadgeSettingsSafari2025AmsterdamAddOnHatchTest
	| BadgeSettingsSafari2025AmsterdamAddOnRaid
	| BadgeSettingsSafari2025AmsterdamAddOnRaidTest
	| BadgeSettingsSafari2025AmsterdamSaturday
	| BadgeSettingsSafari2025AmsterdamSunday
	| BadgeSettingsSafari2025AmsterdamTest
	| BadgeSettingsSafari2025BangkokAddOnHatch
	| BadgeSettingsSafari2025BangkokAddOnHatchTest
	| BadgeSettingsSafari2025BangkokAddOnRaid
	| BadgeSettingsSafari2025BangkokAddOnRaidTest
	| BadgeSettingsSafari2025BangkokSaturday
	| BadgeSettingsSafari2025BangkokSunday
	| BadgeSettingsSafari2025BangkokTest
	| BadgeSettingsSafari2025BuenosAiresAddOnHatch
	| BadgeSettingsSafari2025BuenosAiresAddOnHatchTest
	| BadgeSettingsSafari2025BuenosAiresAddOnRaid
	| BadgeSettingsSafari2025BuenosAiresAddOnRaidTest
	| BadgeSettingsSafari2025BuenosAiresSaturday
	| BadgeSettingsSafari2025BuenosAiresSunday
	| BadgeSettingsSafari2025BuenosAiresTest
	| BadgeSettingsSafari2025CancunAddOnHatch
	| BadgeSettingsSafari2025CancunAddOnHatchTest
	| BadgeSettingsSafari2025CancunAddOnRaid
	| BadgeSettingsSafari2025CancunAddOnRaidTest
	| BadgeSettingsSafari2025CancunSaturday
	| BadgeSettingsSafari2025CancunSunday
	| BadgeSettingsSafari2025CancunTest
	| BadgeSettingsSafari2025MiamiAddOnHatch
	| BadgeSettingsSafari2025MiamiAddOnHatchTest
	| BadgeSettingsSafari2025MiamiAddOnRaid
	| BadgeSettingsSafari2025MiamiAddOnRaidTest
	| BadgeSettingsSafari2025MiamiSaturday
	| BadgeSettingsSafari2025MiamiSunday
	| BadgeSettingsSafari2025MiamiTest
	| BadgeSettingsSafari2025MilanAddOnHatch
	| BadgeSettingsSafari2025MilanAddOnHatchTest
	| BadgeSettingsSafari2025MilanAddOnRaid
	| BadgeSettingsSafari2025MilanAddOnRaidTest
	| BadgeSettingsSafari2025MilanDay01
	| BadgeSettingsSafari2025MilanDay02
	| BadgeSettingsSafari2025MilanTest
	| BadgeSettingsSafari2025MumbaiAddOnHatch
	| BadgeSettingsSafari2025MumbaiAddOnHatchTest
	| BadgeSettingsSafari2025MumbaiAddOnRaid
	| BadgeSettingsSafari2025MumbaiAddOnRaidTest
	| BadgeSettingsSafari2025MumbaiDay01
	| BadgeSettingsSafari2025MumbaiDay02
	| BadgeSettingsSafari2025MumbaiTest
	| BadgeSettingsSafari2025SantiagoAddOnHatch
	| BadgeSettingsSafari2025SantiagoAddOnHatchTest
	| BadgeSettingsSafari2025SantiagoAddOnRaid
	| BadgeSettingsSafari2025SantiagoAddOnRaidTest
	| BadgeSettingsSafari2025SantiagoDay01
	| BadgeSettingsSafari2025SantiagoDay02
	| BadgeSettingsSafari2025SantiagoTest
	| BadgeSettingsSafari2025SingaporeAddOnHatch
	| BadgeSettingsSafari2025SingaporeAddOnHatchTest
	| BadgeSettingsSafari2025SingaporeAddOnRaid
	| BadgeSettingsSafari2025SingaporeAddOnRaidTest
	| BadgeSettingsSafari2025SingaporeDay01
	| BadgeSettingsSafari2025SingaporeDay02
	| BadgeSettingsSafari2025SingaporeTest
	| BadgeSettingsSafari2025SydneyAddOnHatch
	| BadgeSettingsSafari2025SydneyAddOnHatchTest
	| BadgeSettingsSafari2025SydneyAddOnRaid
	| BadgeSettingsSafari2025SydneyAddOnRaidTest
	| BadgeSettingsSafari2025SydneySaturday
	| BadgeSettingsSafari2025SydneySunday
	| BadgeSettingsSafari2025SydneyTest
	| BadgeSettingsSafari2025ValenciaAddOnHatch
	| BadgeSettingsSafari2025ValenciaAddOnHatchTest
	| BadgeSettingsSafari2025ValenciaAddOnRaid
	| BadgeSettingsSafari2025ValenciaAddOnRaidTest
	| BadgeSettingsSafari2025ValenciaSaturday
	| BadgeSettingsSafari2025ValenciaSunday
	| BadgeSettingsSafari2025ValenciaTest
	| BadgeSettingsSafari2025VancouverAddOnHatch
	| BadgeSettingsSafari2025VancouverAddOnHatchTest
	| BadgeSettingsSafari2025VancouverAddOnRaid
	| BadgeSettingsSafari2025VancouverAddOnRaidTest
	| BadgeSettingsSafari2025VancouverSaturday
	| BadgeSettingsSafari2025VancouverSunday
	| BadgeSettingsSafari2025VancouverTest
	| BadgeSettingsSafariZoneEurope2017
	| BadgeSettingsSafariZoneEurope20171007
	| BadgeSettingsSafariZoneEurope20171014
	| BadgeSettingsSentosa18Apr2019
	| BadgeSettingsSentosa19Apr2019
	| BadgeSettingsSentosa20Apr2019
	| BadgeSettingsSentosa21Apr2019
	| BadgeSettingsSentosa22Apr2019
	| BadgeSettingsSmallRattata
	| BadgeSettingsSmores00
	| BadgeSettingsSmores01
	| BadgeSettingsTopBanana1
	| BadgeSettingsTopBanana2
	| BadgeSettingsTopBanana3
	| BadgeSettingsTotalMegaEvos
	| BadgeSettingsTotalRoutePlay
	| BadgeSettingsTrading
	| BadgeSettingsTradingCard0001
	| BadgeSettingsTradingDistance
	| BadgeSettingsTrainersReferred
	| BadgeSettingsTravelKm
	| BadgeSettingsTypeBug
	| BadgeSettingsTypeDark
	| BadgeSettingsTypeDragon
	| BadgeSettingsTypeElectric
	| BadgeSettingsTypeFairy
	| BadgeSettingsTypeFighting
	| BadgeSettingsTypeFire
	| BadgeSettingsTypeFlying
	| BadgeSettingsTypeGhost
	| BadgeSettingsTypeGrass
	| BadgeSettingsTypeGround
	| BadgeSettingsTypeIce
	| BadgeSettingsTypeNormal
	| BadgeSettingsTypePoison
	| BadgeSettingsTypePsychic
	| BadgeSettingsTypeRock
	| BadgeSettingsTypeSteel
	| BadgeSettingsTypeWater
	| BadgeSettingsUltraLeague
	| BadgeSettingsUniqueMegaEvos
	| BadgeSettingsUniquePokestops
	| BadgeSettingsUniqueRaidBossesDefeated
	| BadgeSettingsUnown
	| BadgeSettingsWayfarer
	| BadgeSettingsWeeklyChallengeEligible
	| BadgeSettingsYokosuka1Sep2018Verny
	| BadgeSettingsYokosuka29Aug2018Verny
	| BadgeSettingsYokosuka2Sep2018Verny
	| BadgeSettingsYokosuka30Aug2018Verny
	| BadgeSettingsYokosuka31Aug2018Verny;

export type BadgeSettingsTemplateID = BadgeSettingsMasterfileEntry["templateId"];

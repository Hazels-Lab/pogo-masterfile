// Generated from Pokémon GO masterfile — group "itemExpirationSettings", 22 entries.

export interface ItemExpirationSettings<
	TemplateID extends string = string,
	TData extends ItemExpirationSettingsData = ItemExpirationSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		itemExpirationSettings: TData;
	};
}

export interface ItemExpirationSettingsData {
	consolationItems?: {
		lootItem: [
			{
				count: number;
				stardust: boolean;
			},
		];
	};
	emergencyExpirationTime?:
		| "2025-09-25T21:00:00"
		| "2025-11-16T18:00:00"
		| "2026-01-10T10:00:00"
		| "2026-02-07T10:00:00"
		| "2026-03-07T10:00:00"
		| "2026-03-27T10:00:00"
		| "2026-04-10T10:00:00"
		| "2026-04-11T10:00:00"
		| "2026-04-25T10:00:00"
		| "2026-05-09T10:00:00"
		| "2026-05-13T10:00:00"
		| "2026-06-06T10:00:00";
	expirationTime:
		| "2025-06-29T23:59:59"
		| "2025-07-06T23:59:59"
		| "2025-08-26T21:00:00"
		| "2025-11-16T18:00:00"
		| "2025-11-24T23:59:59"
		| "2026-01-08T10:00:00"
		| "2026-01-13T10:00:00"
		| "2026-02-05T10:00:00"
		| "2026-02-22T17:00:00"
		| "2026-03-03T18:00:00"
		| "2026-03-05T10:00:00"
		| "2026-03-25T20:00:00"
		| "2026-04-08T20:00:00"
		| "2026-04-09T10:00:00"
		| "2026-04-24T20:00:00"
		| "2026-05-07T10:00:00"
		| "2026-05-08T20:00:00"
		| "2026-05-12T23:59:00"
		| "2026-06-04T10:00:00";
	item:
		| "ITEM_EVENT_PASS_POINT_GO_FEST_01"
		| "ITEM_EVENT_PASS_POINT_GO_FEST_02"
		| "ITEM_EVENT_PASS_POINT_GO_TOUR_01"
		| "ITEM_EVENT_PASS_POINT_GO_TOUR_02"
		| "ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_01"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_02"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_03"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_04"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_05"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_06"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_07"
		| "ITEM_EVENT_PASS_POINT_LIVE_OPS_08"
		| "ITEM_EVENT_PASS_POINT_MONTHLY_01"
		| "ITEM_EVENT_PASS_POINT_MONTHLY_02"
		| "ITEM_EVENT_PASS_POINT_MONTHLY_03"
		| "ITEM_INCUBATOR_TIMED"
		| "ITEM_LUCKY_FRIEND_APPLICATOR"
		| "ITEM_SINGLE_STAT_INCREASE"
		| "ITEM_TRIPLE_STAT_INCREASE"
		| "ITEM_WILD_BALL"
		| "ITEM_WILD_BALL_PREMIER";
	itemEnablementSettings?: {
		enabledTimePeriods: [
			{
				enabledEndTime: "2025-11-15T18:00:00";
				enabledStartTime: "2025-11-15T10:00:00";
			},
			{
				enabledEndTime: "2025-11-16T18:00:00";
				enabledStartTime: "2025-11-16T10:00:00";
			},
		];
	};
}

export type ItemExpirationSettingsEventPassPointGoFest01 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_01",
	{
		expirationTime: "2025-06-29T23:59:59";
		item: "ITEM_EVENT_PASS_POINT_GO_FEST_01";
	}
>;
export type ItemExpirationSettingsEventPassPointGoFest02 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_02",
	{
		emergencyExpirationTime: "2025-09-25T21:00:00";
		expirationTime: "2025-08-26T21:00:00";
		item: "ITEM_EVENT_PASS_POINT_GO_FEST_02";
	}
>;
export type ItemExpirationSettingsEventPassPointGoTour01 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_01",
	{
		expirationTime: "2026-03-03T18:00:00";
		item: "ITEM_EVENT_PASS_POINT_GO_TOUR_01";
	}
>;
export type ItemExpirationSettingsEventPassPointGoTour02 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_02",
	{
		expirationTime: "2026-02-22T17:00:00";
		item: "ITEM_EVENT_PASS_POINT_GO_TOUR_02";
	}
>;
export type ItemExpirationSettingsEventPassPointGoWildArea01 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01",
	{
		expirationTime: "2025-11-16T18:00:00";
		item: "ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps01 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_01",
	{
		emergencyExpirationTime: "2026-01-10T10:00:00";
		expirationTime: "2026-01-08T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_01";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps02 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_02",
	{
		emergencyExpirationTime: "2026-02-07T10:00:00";
		expirationTime: "2026-02-05T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_02";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps03 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_03",
	{
		emergencyExpirationTime: "2026-03-07T10:00:00";
		expirationTime: "2026-03-05T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_03";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps04 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_04",
	{
		emergencyExpirationTime: "2026-05-09T10:00:00";
		expirationTime: "2026-05-08T20:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_04";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps05 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_05",
	{
		emergencyExpirationTime: "2026-03-27T10:00:00";
		expirationTime: "2026-03-25T20:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_05";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps06 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_06",
	{
		emergencyExpirationTime: "2026-04-10T10:00:00";
		expirationTime: "2026-04-08T20:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_06";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps07 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_07",
	{
		emergencyExpirationTime: "2026-04-25T10:00:00";
		expirationTime: "2026-04-24T20:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_07";
	}
>;
export type ItemExpirationSettingsEventPassPointLiveOps08 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_08",
	{
		emergencyExpirationTime: "2026-05-09T10:00:00";
		expirationTime: "2026-05-08T20:00:00";
		item: "ITEM_EVENT_PASS_POINT_LIVE_OPS_08";
	}
>;
export type ItemExpirationSettingsEventPassPointMonthly01 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_01",
	{
		emergencyExpirationTime: "2026-04-11T10:00:00";
		expirationTime: "2026-04-09T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_MONTHLY_01";
	}
>;
export type ItemExpirationSettingsEventPassPointMonthly02 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_02",
	{
		emergencyExpirationTime: "2026-05-09T10:00:00";
		expirationTime: "2026-05-07T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_MONTHLY_02";
	}
>;
export type ItemExpirationSettingsEventPassPointMonthly03 = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_03",
	{
		emergencyExpirationTime: "2026-06-06T10:00:00";
		expirationTime: "2026-06-04T10:00:00";
		item: "ITEM_EVENT_PASS_POINT_MONTHLY_03";
	}
>;
export type ItemExpirationSettingsIncubatorTimed = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_INCUBATOR_TIMED",
	{
		expirationTime: "2026-01-13T10:00:00";
		item: "ITEM_INCUBATOR_TIMED";
	}
>;
export type ItemExpirationSettingsLuckyFriendApplicator = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_LUCKY_FRIEND_APPLICATOR",
	{
		emergencyExpirationTime: "2026-05-13T10:00:00";
		expirationTime: "2026-05-12T23:59:00";
		item: "ITEM_LUCKY_FRIEND_APPLICATOR";
	}
>;
export type ItemExpirationSettingsSingleStatIncrease = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_SINGLE_STAT_INCREASE",
	{
		consolationItems: {
			lootItem: [
				{
					count: 50000;
					stardust: true;
				},
			];
		};
		expirationTime: "2025-11-24T23:59:59";
		item: "ITEM_SINGLE_STAT_INCREASE";
	}
>;
export type ItemExpirationSettingsTripleStatIncrease = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_TRIPLE_STAT_INCREASE",
	{
		consolationItems: {
			lootItem: [
				{
					count: 50000;
					stardust: true;
				},
			];
		};
		expirationTime: "2025-07-06T23:59:59";
		item: "ITEM_TRIPLE_STAT_INCREASE";
	}
>;
export type ItemExpirationSettingsWildBall = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_WILD_BALL",
	{
		emergencyExpirationTime: "2025-11-16T18:00:00";
		expirationTime: "2025-11-16T18:00:00";
		item: "ITEM_WILD_BALL";
		itemEnablementSettings: {
			enabledTimePeriods: [
				{
					enabledEndTime: "2025-11-15T18:00:00";
					enabledStartTime: "2025-11-15T10:00:00";
				},
				{
					enabledEndTime: "2025-11-16T18:00:00";
					enabledStartTime: "2025-11-16T10:00:00";
				},
			];
		};
	}
>;
export type ItemExpirationSettingsWildBallPremier = ItemExpirationSettings<
	"ITEM_EXPIRATION_ITEM_WILD_BALL_PREMIER",
	{
		emergencyExpirationTime: "2025-11-16T18:00:00";
		expirationTime: "2025-11-16T18:00:00";
		item: "ITEM_WILD_BALL_PREMIER";
		itemEnablementSettings: {
			enabledTimePeriods: [
				{
					enabledEndTime: "2025-11-15T18:00:00";
					enabledStartTime: "2025-11-15T10:00:00";
				},
				{
					enabledEndTime: "2025-11-16T18:00:00";
					enabledStartTime: "2025-11-16T10:00:00";
				},
			];
		};
	}
>;

export type ItemExpirationSettingsMasterfileEntry =
	| ItemExpirationSettingsEventPassPointGoFest01
	| ItemExpirationSettingsEventPassPointGoFest02
	| ItemExpirationSettingsEventPassPointGoTour01
	| ItemExpirationSettingsEventPassPointGoTour02
	| ItemExpirationSettingsEventPassPointGoWildArea01
	| ItemExpirationSettingsEventPassPointLiveOps01
	| ItemExpirationSettingsEventPassPointLiveOps02
	| ItemExpirationSettingsEventPassPointLiveOps03
	| ItemExpirationSettingsEventPassPointLiveOps04
	| ItemExpirationSettingsEventPassPointLiveOps05
	| ItemExpirationSettingsEventPassPointLiveOps06
	| ItemExpirationSettingsEventPassPointLiveOps07
	| ItemExpirationSettingsEventPassPointLiveOps08
	| ItemExpirationSettingsEventPassPointMonthly01
	| ItemExpirationSettingsEventPassPointMonthly02
	| ItemExpirationSettingsEventPassPointMonthly03
	| ItemExpirationSettingsIncubatorTimed
	| ItemExpirationSettingsLuckyFriendApplicator
	| ItemExpirationSettingsSingleStatIncrease
	| ItemExpirationSettingsTripleStatIncrease
	| ItemExpirationSettingsWildBall
	| ItemExpirationSettingsWildBallPremier;

export type ItemExpirationSettingsTemplateID = ItemExpirationSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "itemExpirationSettings", 22 entries (structural types).

export type * from "./variants";

export interface ItemExpirationSettings<TemplateID extends string = string, TData extends ItemExpirationSettingsData = ItemExpirationSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		itemExpirationSettings: TData & {
			item: TemplateID extends `ITEM_EXPIRATION_${infer Rest}` ? Rest : string;
		};
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

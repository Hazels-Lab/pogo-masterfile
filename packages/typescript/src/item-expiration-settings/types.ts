// Generated from Pokémon GO masterfile — group "itemExpirationSettings", 22 entries (structural types).

import type { W } from "../_utils";

export interface ItemExpirationSettings<TemplateID extends string = string, TData extends ItemExpirationSettingsData = ItemExpirationSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		itemExpirationSettings: TData & {
			item: TemplateID extends `ITEM_EXPIRATION_${infer Rest}` ? Rest : string;
		};
	};
}
export type ItemExpirationSettingsType = W<ItemExpirationSettings>;

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

export type ItemExpirationItem =
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_01"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_FEST_02"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_01"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_TOUR_02"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_GO_WILD_AREA_01"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_01"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_02"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_03"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_04"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_05"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_06"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_07"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_LIVE_OPS_08"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_01"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_02"
	| "ITEM_EXPIRATION_ITEM_EVENT_PASS_POINT_MONTHLY_03"
	| "ITEM_EXPIRATION_ITEM_INCUBATOR_TIMED"
	| "ITEM_EXPIRATION_ITEM_LUCKY_FRIEND_APPLICATOR"
	| "ITEM_EXPIRATION_ITEM_SINGLE_STAT_INCREASE"
	| "ITEM_EXPIRATION_ITEM_TRIPLE_STAT_INCREASE"
	| "ITEM_EXPIRATION_ITEM_WILD_BALL"
	| "ITEM_EXPIRATION_ITEM_WILD_BALL_PREMIER";

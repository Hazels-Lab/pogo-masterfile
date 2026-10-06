// Generated from Pokémon GO masterfile — group "itemExpirationSettings", 23 entries (structural types).

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
		| "2026-06-20T10:00:00"
		| "2026-07-04T10:00:00"
		| "2026-08-01T10:00:00"
		| "2026-08-15T10:00:00"
		| "2026-09-04T10:00:00"
		| "2026-09-12T10:00:00"
		| "2026-09-19T10:00:00"
		| "2026-09-27T10:00:00"
		| "2026-10-10T10:00:00"
		| "2026-10-13T10:00:00"
		| "2026-10-24T10:00:00"
		| "2026-11-07T10:00:00"
		| "2026-11-09T10:00:00"
		| "2026-11-15T18:00:00";
	expirationTime:
		| "2025-11-16T18:00:00"
		| "2025-11-24T23:59:59"
		| "2026-02-22T17:00:00"
		| "2026-03-03T18:00:00"
		| "2026-06-19T20:00:00"
		| "2026-07-03T20:00:00"
		| "2026-07-14T23:59:59"
		| "2026-07-19T23:59:59"
		| "2026-07-31T20:00:00"
		| "2026-08-14T20:00:00"
		| "2026-08-31T20:00:00"
		| "2026-09-03T20:00:00"
		| "2026-09-08T23:59:59"
		| "2026-09-10T10:00:00"
		| "2026-09-18T20:00:00"
		| "2026-09-26T20:00:00"
		| "2026-10-08T10:00:00"
		| "2026-10-09T20:00:00"
		| "2026-10-13T10:00:00"
		| "2026-10-23T20:00:00"
		| "2026-11-05T10:00:00"
		| "2026-11-08T23:59:00"
		| "2026-11-15T18:00:00";
	itemEnablementSettings?: {
		enabledTimePeriods: [
			{
				enabledEndTime: "2026-11-14T18:00:00";
				enabledStartTime: "2026-11-14T10:00:00";
			},
			{
				enabledEndTime: "2026-11-15T18:00:00";
				enabledStartTime: "2026-11-15T10:00:00";
			},
		];
	};
}

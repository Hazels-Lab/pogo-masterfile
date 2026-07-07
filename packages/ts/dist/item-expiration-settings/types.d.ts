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
		| "2026-05-09T10:00:00"
		| "2026-05-23T10:00:00"
		| "2026-06-06T10:00:00"
		| "2026-06-13T10:00:00"
		| "2026-06-20T10:00:00"
		| "2026-07-04T10:00:00"
		| "2026-07-11T10:00:00"
		| "2026-07-25T10:00:00"
		| "2026-08-08T10:00:00";
	expirationTime:
		| "2025-08-26T21:00:00"
		| "2025-11-16T18:00:00"
		| "2025-11-24T23:59:59"
		| "2026-02-22T17:00:00"
		| "2026-03-03T18:00:00"
		| "2026-05-08T20:00:00"
		| "2026-05-22T20:00:00"
		| "2026-06-04T10:00:00"
		| "2026-06-05T20:00:00"
		| "2026-06-12T20:00:00"
		| "2026-06-19T20:00:00"
		| "2026-07-03T20:00:00"
		| "2026-07-09T10:00:00"
		| "2026-07-14T10:00:00"
		| "2026-07-14T23:59:59"
		| "2026-07-19T23:59:59"
		| "2026-07-24T20:00:00"
		| "2026-08-06T10:00:00";
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

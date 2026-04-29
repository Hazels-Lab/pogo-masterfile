// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings", 34 entries (structural types).

import type { W } from "../_utils";

export interface LimitedPurchaseSkuSettings<TemplateID extends string = string, TData extends LimitedPurchaseSkuSettingsData = LimitedPurchaseSkuSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		limitedPurchaseSkuSettings: TData;
	};
}
export type LimitedPurchaseSkuSettingsType = W<LimitedPurchaseSkuSettings>;

export interface LimitedPurchaseSkuSettingsData {
	chronoUnit?: "DAY";
	lootTableId?: "BUNDLE_GENERAL1_FREE1_1_LOOT_TABLE";
	purchaseLimit: number;
	resetInterval?: number;
	version?: number;
}

export type Lpsku =
	| "LPSKU_bundle.flair.firsttime.1"
	| "LPSKU_bundle.general1.free.1"
	| "LPSKU_bundle.general1.medium.1"
	| "LPSKU_bundle.general1.medium.2"
	| "LPSKU_bundle.general1.medium.3"
	| "LPSKU_bundle.general1.rocket.1"
	| "LPSKU_bundle.general1.tiny.2"
	| "LPSKU_bundle.general1.tiny.3"
	| "LPSKU_bundle.general1.tiny.4"
	| "LPSKU_bundle.general2.free.1"
	| "LPSKU_bundle.general2.large.1"
	| "LPSKU_bundle.general2.medium.1"
	| "LPSKU_bundle.general4.small.2"
	| "LPSKU_bundle.general5.large.1"
	| "LPSKU_bundle.general5.small.1"
	| "LPSKU_bundle.general5.small.2"
	| "LPSKU_bundle.general5.small.3"
	| "LPSKU_bundle.general5.small.4"
	| "LPSKU_bundle.general5.small.5"
	| "LPSKU_bundle.general6.small.1"
	| "LPSKU_bundle.halloween.adventure.1"
	| "LPSKU_bundle.webstore_box.1"
	| "LPSKU_bundle.webstore_box.2"
	| "LPSKU_bundle.webstore_box.3"
	| "LPSKU_bundle.webstore_box.4"
	| "LPSKU_bundle.webstore_promo.1"
	| "LPSKU_bundle.webstore_thanksgiving.1"
	| "LPSKU_bundle.webstore_thanksgiving.2"
	| "LPSKU_bundle.webstore_thanksgiving.3"
	| "LPSKU_bundle.welcomebox.1"
	| "LPSKU_incense_bundle.general2.small.1"
	| "LPSKU_incense.general2.medium.1"
	| "LPSKU_remotepass.bundle.general3.small.1"
	| "LPSKU_weekly_balls.general2.medium.1";

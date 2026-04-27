// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings", 34 entries (structural types).

export type * from "./variants";

export interface LimitedPurchaseSkuSettings<TemplateID extends string = string, TData extends LimitedPurchaseSkuSettingsData = LimitedPurchaseSkuSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		limitedPurchaseSkuSettings: TData;
	};
}

export interface LimitedPurchaseSkuSettingsData {
	chronoUnit?: "DAY";
	lootTableId?: "BUNDLE_GENERAL1_FREE1_1_LOOT_TABLE";
	purchaseLimit: number;
	resetInterval?: number;
	version?: number;
}

export type LimitedPurchaseSkuSettingsMasterfileEntry =
	| LimitedPurchaseSkuSettingsBundleFlairFirsttime1
	| LimitedPurchaseSkuSettingsBundleGeneral1Free1
	| LimitedPurchaseSkuSettingsBundleGeneral1Medium1
	| LimitedPurchaseSkuSettingsBundleGeneral1Medium2
	| LimitedPurchaseSkuSettingsBundleGeneral1Medium3
	| LimitedPurchaseSkuSettingsBundleGeneral1Rocket1
	| LimitedPurchaseSkuSettingsBundleGeneral1Tiny2
	| LimitedPurchaseSkuSettingsBundleGeneral1Tiny3
	| LimitedPurchaseSkuSettingsBundleGeneral1Tiny4
	| LimitedPurchaseSkuSettingsBundleGeneral2Free1
	| LimitedPurchaseSkuSettingsBundleGeneral2Large1
	| LimitedPurchaseSkuSettingsBundleGeneral2Medium1
	| LimitedPurchaseSkuSettingsBundleGeneral4Small2
	| LimitedPurchaseSkuSettingsBundleGeneral5Large1
	| LimitedPurchaseSkuSettingsBundleGeneral5Small1
	| LimitedPurchaseSkuSettingsBundleGeneral5Small2
	| LimitedPurchaseSkuSettingsBundleGeneral5Small3
	| LimitedPurchaseSkuSettingsBundleGeneral5Small4
	| LimitedPurchaseSkuSettingsBundleGeneral5Small5
	| LimitedPurchaseSkuSettingsBundleGeneral6Small1
	| LimitedPurchaseSkuSettingsBundleHalloweenAdventure1
	| LimitedPurchaseSkuSettingsBundleWebstoreBox1
	| LimitedPurchaseSkuSettingsBundleWebstoreBox2
	| LimitedPurchaseSkuSettingsBundleWebstoreBox3
	| LimitedPurchaseSkuSettingsBundleWebstoreBox4
	| LimitedPurchaseSkuSettingsBundleWebstorePromo1
	| LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving1
	| LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving2
	| LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving3
	| LimitedPurchaseSkuSettingsBundleWelcomebox1
	| LimitedPurchaseSkuSettingsIncenseGeneral2Medium1
	| LimitedPurchaseSkuSettingsIncenseBundleGeneral2Small1
	| LimitedPurchaseSkuSettingsRemotepassBundleGeneral3Small1
	| LimitedPurchaseSkuSettingsWeeklyBallsGeneral2Medium1;

export type LimitedPurchaseSkuSettingsTemplateID = LimitedPurchaseSkuSettingsMasterfileEntry["templateId"];

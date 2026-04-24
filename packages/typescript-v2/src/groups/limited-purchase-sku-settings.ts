export interface LimitedPurchaseSkuSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: LimitedPurchaseSkuSettingsData<TemplateID>;
}

export interface LimitedPurchaseSkuSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	limitedPurchaseSkuSettings: {
		chronoUnit?: "DAY";
		lootTableId?: "BUNDLE_GENERAL1_FREE1_1_LOOT_TABLE";
		purchaseLimit: 1 | 3 | 5;
		resetInterval?: 1;
		version?: 1 | 2 | 3 | 9 | 10 | 11 | 12 | 13 | 14 | 16 | 18 | 19 | 22 | 30 | 33 | 41 | 45 | 57 | 64;
	};
}

export type LimitedPurchaseSkuSettingsBundleFlairFirsttime1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.flair.firsttime.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Free1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.free.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Medium1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.medium.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Medium2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.medium.2">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Medium3 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.medium.3">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Rocket1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.rocket.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Tiny2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.tiny.2">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Tiny3 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.tiny.3">;
export type LimitedPurchaseSkuSettingsBundleGeneral1Tiny4 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general1.tiny.4">;
export type LimitedPurchaseSkuSettingsBundleGeneral2Free1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general2.free.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral2Large1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general2.large.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral2Medium1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general2.medium.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral4Small2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general4.small.2">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Large1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.large.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Small1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.small.1">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Small2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.small.2">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Small3 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.small.3">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Small4 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.small.4">;
export type LimitedPurchaseSkuSettingsBundleGeneral5Small5 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general5.small.5">;
export type LimitedPurchaseSkuSettingsBundleGeneral6Small1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.general6.small.1">;
export type LimitedPurchaseSkuSettingsBundleHalloweenAdventure1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.halloween.adventure.1">;
export type LimitedPurchaseSkuSettingsBundleWebstoreBox1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_box.1">;
export type LimitedPurchaseSkuSettingsBundleWebstoreBox2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_box.2">;
export type LimitedPurchaseSkuSettingsBundleWebstoreBox3 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_box.3">;
export type LimitedPurchaseSkuSettingsBundleWebstoreBox4 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_box.4">;
export type LimitedPurchaseSkuSettingsBundleWebstorePromo1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_promo.1">;
export type LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_thanksgiving.1">;
export type LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving2 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_thanksgiving.2">;
export type LimitedPurchaseSkuSettingsBundleWebstoreThanksgiving3 = LimitedPurchaseSkuSettings<"LPSKU_bundle.webstore_thanksgiving.3">;
export type LimitedPurchaseSkuSettingsBundleWelcomebox1 = LimitedPurchaseSkuSettings<"LPSKU_bundle.welcomebox.1">;
export type LimitedPurchaseSkuSettingsIncenseGeneral2Medium1 = LimitedPurchaseSkuSettings<"LPSKU_incense.general2.medium.1">;
export type LimitedPurchaseSkuSettingsIncenseBundleGeneral2Small1 = LimitedPurchaseSkuSettings<"LPSKU_incense_bundle.general2.small.1">;
export type LimitedPurchaseSkuSettingsRemotepassBundleGeneral3Small1 = LimitedPurchaseSkuSettings<"LPSKU_remotepass.bundle.general3.small.1">;
export type LimitedPurchaseSkuSettingsWeeklyBallsGeneral2Medium1 = LimitedPurchaseSkuSettings<"LPSKU_weekly_balls.general2.medium.1">;

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

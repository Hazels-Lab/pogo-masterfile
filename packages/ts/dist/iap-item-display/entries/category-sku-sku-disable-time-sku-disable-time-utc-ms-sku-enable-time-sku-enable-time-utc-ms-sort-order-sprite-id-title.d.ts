// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayBundleGofest20266 = S<
	IapItemDisplay<
		"bundle.GOFest2026.6",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sku: "bundle.GOFest2026.6";
			skuDisableTime: "2026-07-12T22:00:00";
			skuDisableTimeUtcMs: "1783893600000";
			skuEnableTime: "2023-10-10T11:00:00";
			skuEnableTimeUtcMs: "1696935600000";
			sortOrder: 7;
			spriteId: "bundle.general.premiumbox.large.1";
			title: "master_raid_box_title";
		}
	>
>;
export type IapItemDisplayBundleGofest20267 = S<
	IapItemDisplay<
		"bundle.GOFest2026.7",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sku: "bundle.GOFest2026.7";
			skuDisableTime: "2026-07-12T22:00:00";
			skuDisableTimeUtcMs: "1783893600000";
			skuEnableTime: "2023-10-10T11:00:00";
			skuEnableTimeUtcMs: "1696935600000";
			sortOrder: 7;
			spriteId: "bundle.xmas.medium.1";
			title: "sticker_box";
		}
	>
>;

export type IapItemDisplayCategorySkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleMasterfileEntry =
	| IapItemDisplayBundleGofest20266
	| IapItemDisplayBundleGofest20267;

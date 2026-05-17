// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-sale-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayBundleCd20221 = S<
	IapItemDisplay<
		"bundle.cd2022.1",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sale: true;
			sku: "bundle.cd2022.1";
			skuDisableTime: "2026-05-17T23:59:59";
			skuDisableTimeUtcMs: "1779062399000";
			skuEnableTime: "2022-10-13T12:00:00";
			skuEnableTimeUtcMs: "1665662400000";
			sortOrder: 1;
			spriteId: "bundle.general4.small.1";
			title: "bundle.general4.small.1_title";
		}
	>
>;
export type IapItemDisplayBundleCd20222 = S<
	IapItemDisplay<
		"bundle.cd2022.2",
		{
			category: "IAP_CATEGORY_BUNDLE";
			sale: true;
			sku: "bundle.cd2022.2";
			skuDisableTime: "2026-05-17T23:59:59";
			skuDisableTimeUtcMs: "1779062399000";
			skuEnableTime: "2022-10-13T12:00:00";
			skuEnableTimeUtcMs: "1665662400000";
			sortOrder: 2;
			spriteId: "bundle.general1.medium.1";
			title: "bundle.general1.medium.1_title";
		}
	>
>;

export type IapItemDisplayCategorySaleSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleMasterfileEntry =
	| IapItemDisplayBundleCd20221
	| IapItemDisplayBundleCd20222;

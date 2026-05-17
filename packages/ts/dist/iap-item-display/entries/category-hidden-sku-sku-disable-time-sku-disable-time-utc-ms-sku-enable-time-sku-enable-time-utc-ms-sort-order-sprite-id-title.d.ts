// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-hidden-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayPgoreleaseBundleGeneralThirdpartyMedium1 = S<
	IapItemDisplay<
		"pgorelease.bundle.general.thirdparty.medium.1",
		{
			category: "IAP_CATEGORY_BUNDLE";
			hidden: true;
			sku: "pgorelease.bundle.general.thirdparty.medium.1";
			skuDisableTime: "2026-01-25T23:59:00";
			skuDisableTimeUtcMs: "1769385540000";
			skuEnableTime: "2019-10-31T21:00:00";
			skuEnableTimeUtcMs: "1572555600000";
			sortOrder: 1;
			spriteId: "bundle1.sprite.a";
			title: "battle_box";
		}
	>
>;
export type IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall2 = S<
	IapItemDisplay<
		"pgorelease.bundle.general.thirdparty.small.2",
		{
			category: "IAP_CATEGORY_BUNDLE";
			hidden: true;
			sku: "pgorelease.bundle.general.thirdparty.small.2";
			skuDisableTime: "2026-01-08T20:00:00";
			skuDisableTimeUtcMs: "1767902400000";
			skuEnableTime: "2019-10-31T21:00:00";
			skuEnableTimeUtcMs: "1572555600000";
			sortOrder: 1;
			spriteId: "bundle.general2.small.1";
			title: "holiday_box";
		}
	>
>;

export type IapItemDisplayCategoryHiddenSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleMasterfileEntry =
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartyMedium1
	| IapItemDisplayPgoreleaseBundleGeneralThirdpartySmall2;

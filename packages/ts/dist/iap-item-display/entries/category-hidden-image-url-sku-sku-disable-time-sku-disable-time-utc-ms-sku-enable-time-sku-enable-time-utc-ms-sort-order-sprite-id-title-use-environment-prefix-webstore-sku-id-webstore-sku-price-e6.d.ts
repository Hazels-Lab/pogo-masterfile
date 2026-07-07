// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-hidden-image-url-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title-use-environment-prefix-webstore-sku-id-webstore-sku-price-e6", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayGeneral1Ticket5 = S<
	IapItemDisplay<
		"general1.ticket.5",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-entei-shadow-raid-day-2026-nologo.jpg";
			sku: "pgorelease.general1.ticket.5";
			skuDisableTime: "2026-05-02T17:00:00";
			skuDisableTimeUtcMs: "1777741200000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.5";
			title: "general1.ticket.5.ENTEI_SHADOW_RAID_DAY";
			useEnvironmentPrefix: true;
			webstoreSkuId: "web-shadow-entei-raid-box-ultra";
			webstoreSkuPriceE6: 4990000;
		}
	>
>;
export type IapItemDisplayGeneral2Ticket6 = S<
	IapItemDisplay<
		"general2.ticket.6",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fpgo-gmax-kanto-max-battle-day-2026-nologo.jpg";
			sku: "pgorelease.general2.ticket.6";
			skuDisableTime: "2026-04-25T17:00:00";
			skuDisableTimeUtcMs: "1777136400000";
			skuEnableTime: "2023-01-01T11:00:04";
			skuEnableTimeUtcMs: "1672570804000";
			sortOrder: 1;
			spriteId: "general2.ticket.6";
			title: "general2.ticket.6.REPLAY_GO_BIGGER";
			useEnvironmentPrefix: true;
			webstoreSkuId: "web-gmax-kanto-box-ultra";
			webstoreSkuPriceE6: 4990000;
		}
	>
>;

export type IapItemDisplayCategoryHiddenImageUrlSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleUseEnvironmentPrefixWebstoreSkuIdWebstoreSkuPriceE6MasterfileEntry =
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral2Ticket6;

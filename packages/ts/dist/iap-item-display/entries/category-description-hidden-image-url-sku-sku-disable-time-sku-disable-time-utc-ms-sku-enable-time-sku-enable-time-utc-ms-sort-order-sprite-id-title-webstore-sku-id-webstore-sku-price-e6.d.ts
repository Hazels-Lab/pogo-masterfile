// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-description-hidden-image-url-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title-webstore-sku-id-webstore-sku-price-e6", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayGeneral2Ticket1 = S<
	IapItemDisplay<
		"general2.ticket.1",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "text_rewards_key_GOWA25";
			hidden: true;
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FGO_Wild_Area_2025_Global_1024x512_logo.png";
			sku: "general2.ticket.1";
			skuDisableTime: "2025-11-16T18:00:00";
			skuDisableTimeUtcMs: "1763316000000";
			skuEnableTime: "2024-01-01T00:00:00";
			skuEnableTimeUtcMs: "1704067200000";
			sortOrder: 1;
			spriteId: "general2.ticket.10";
			title: "general2.ticket._GOWA25_title";
			webstoreSkuId: "web-2025-gowa-ticket-box";
			webstoreSkuPriceE6: 11990000;
		}
	>
>;
export type IapItemDisplayPgoreleaseGeneral2Ticket1 = S<
	IapItemDisplay<
		"pgorelease.general2.ticket.1",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "text_rewards_key_GOWA25";
			hidden: true;
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FGO_Wild_Area_2025_Global_1024x512_logo.png";
			sku: "pgorelease.general2.ticket.1";
			skuDisableTime: "2025-11-16T18:00:00";
			skuDisableTimeUtcMs: "1763316000000";
			skuEnableTime: "2024-01-01T00:00:00";
			skuEnableTimeUtcMs: "1704067200000";
			sortOrder: 1;
			spriteId: "general2.ticket.10";
			title: "general2.ticket._GOWA25_title";
			webstoreSkuId: "web-2025-gowa-ticket-box";
			webstoreSkuPriceE6: 11990000;
		}
	>
>;

export type IapItemDisplayCategoryDescriptionHiddenImageUrlSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleWebstoreSkuIdWebstoreSkuPriceE6MasterfileEntry =
	| IapItemDisplayGeneral2Ticket1
	| IapItemDisplayPgoreleaseGeneral2Ticket1;

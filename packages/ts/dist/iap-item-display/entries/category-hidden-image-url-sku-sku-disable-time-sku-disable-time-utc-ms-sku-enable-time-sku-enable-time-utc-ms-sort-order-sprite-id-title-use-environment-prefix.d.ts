// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-hidden-image-url-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title-use-environment-prefix", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayGeneral2Ticket3 = S<
	IapItemDisplay<
		"general2.ticket.3",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Ff314609f_PGO_MCS_CD_KeyArt_Sobble_v2-1024x576-nologo.jpg";
			sku: "pgorelease.general2.ticket.3";
			skuDisableTime: "2026-07-04T17:00:00";
			skuDisableTimeUtcMs: "1783184400000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.2";
			title: "general1.ticket_CD_Sobble26_title";
			useEnvironmentPrefix: true;
		}
	>
>;
export type IapItemDisplayGeneral2Ticket9 = S<
	IapItemDisplay<
		"general2.ticket.9",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2F9398cb22_PGO-MCS_Skarmory_Super_Mega_Raid_Day_v4-1024x576.jpg";
			sku: "pgorelease.general2.ticket.9";
			skuDisableTime: "2026-06-27T17:00:00";
			skuDisableTimeUtcMs: "1782579600000";
			skuEnableTime: "2026-03-03T13:00:00";
			skuEnableTimeUtcMs: "1772542800000";
			sortOrder: 2;
			spriteId: "general2.ticket.9";
			title: "general2.ticket.5_MegaSkarmoryRaidDay";
			useEnvironmentPrefix: true;
		}
	>
>;

export type IapItemDisplayCategoryHiddenImageUrlSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderSpriteIdTitleUseEnvironmentPrefixMasterfileEntry =
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket9;

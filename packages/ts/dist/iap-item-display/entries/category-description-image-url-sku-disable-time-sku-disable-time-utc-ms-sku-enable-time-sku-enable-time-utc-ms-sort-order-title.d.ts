// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-description-image-url-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayEventPassApril3EventStoreRedirect = S<
	IapItemDisplay<
		"EVENT_PASS_APRIL3_EVENT_STORE_REDIRECT",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGO-MCS_Memory_Lane_Meltan_Celebration_SRR_v1-1024x576.jpg";
			sku: "pgorelease.april3_2026_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-05-06T20:00:00";
			skuDisableTimeUtcMs: "1778097600000";
			skuEnableTime: "2025-04-28T10:00:00";
			skuEnableTimeUtcMs: "1745834400000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_steeled_resolve_2026";
		}
	>
>;
export type IapItemDisplayEventPassMonth2SeasonStoreRedirect = S<
	IapItemDisplay<
		"EVENT_PASS_MONTH2_SEASON_STORE_REDIRECT",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2Fpgo-deluxe-gopass-april-nologo.jpg";
			sku: "pgorelease.month2_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-05-07T10:00:00";
			skuDisableTimeUtcMs: "1778148000000";
			skuEnableTime: "2025-04-07T10:00:00";
			skuEnableTimeUtcMs: "1744020000000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_april";
		}
	>
>;

export type IapItemDisplayCategoryDescriptionImageUrlSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderTitleMasterfileEntry =
	| IapItemDisplayEventPassApril3EventStoreRedirect
	| IapItemDisplayEventPassMonth2SeasonStoreRedirect;

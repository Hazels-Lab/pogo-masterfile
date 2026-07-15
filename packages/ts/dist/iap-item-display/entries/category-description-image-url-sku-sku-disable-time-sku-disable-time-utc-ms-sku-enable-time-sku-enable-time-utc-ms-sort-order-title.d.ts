// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "category-description-image-url-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayEventPassMonth2SeasonStoreRedirect = S<
	IapItemDisplay<
		"EVENT_PASS_MONTH2_SEASON_STORE_REDIRECT",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Ff2c7f843_PGO-MCS_GO_Pass_July_2026_ticket_v1-1024x576_nologo.jpg";
			sku: "pgorelease.month2_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-08-06T10:00:00";
			skuDisableTimeUtcMs: "1786010400000";
			skuEnableTime: "2025-05-26T10:00:00";
			skuEnableTimeUtcMs: "1748253600000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_july";
		}
	>
>;
export type IapItemDisplayPgoreleaseJuly1DeluxeEventPassTrackRedirect = S<
	IapItemDisplay<
		"pgorelease.july1_deluxe_event_pass_track_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "pikachu_celebration_2026_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F68bf81f3_PGO-MCS_GO_Pass_Special_Anniversary_Pikachu_Celebration_v1-1024x576.jpg";
			sku: "pgorelease.july1_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-07-22T20:00:00";
			skuDisableTimeUtcMs: "1784750400000";
			skuEnableTime: "2025-07-13T10:00:00";
			skuEnableTimeUtcMs: "1752400800000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_pikachu_celebration_2026";
		}
	>
>;

export type IapItemDisplayCategoryDescriptionImageUrlSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderTitleMasterfileEntry =
	| IapItemDisplayEventPassMonth2SeasonStoreRedirect
	| IapItemDisplayPgoreleaseJuly1DeluxeEventPassTrackRedirect;

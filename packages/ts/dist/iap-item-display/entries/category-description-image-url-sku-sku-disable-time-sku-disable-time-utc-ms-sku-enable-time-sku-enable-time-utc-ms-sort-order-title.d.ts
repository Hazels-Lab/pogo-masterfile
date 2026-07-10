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
export type IapItemDisplayPgoreleaseGofest2025DeluxeEventPassTrackRedirect = S<
	IapItemDisplay<
		"pgorelease.gofest_2025_deluxe_event_pass_track_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fd07cba0c_PGO-MCS_GOFest_2026_GOPass_v3-16x9.jpg";
			sku: "pgorelease.gofest_2025_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-07-14T23:59:59";
			skuDisableTimeUtcMs: "1784073599000";
			skuEnableTime: "2025-07-06T00:00:00";
			skuEnableTimeUtcMs: "1751760000000";
			sortOrder: 1;
			title: "event_pass_gofest2026_premium_track_title";
		}
	>
>;

export type IapItemDisplayCategoryDescriptionImageUrlSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderTitleMasterfileEntry =
	| IapItemDisplayEventPassMonth2SeasonStoreRedirect
	| IapItemDisplayPgoreleaseGofest2025DeluxeEventPassTrackRedirect;

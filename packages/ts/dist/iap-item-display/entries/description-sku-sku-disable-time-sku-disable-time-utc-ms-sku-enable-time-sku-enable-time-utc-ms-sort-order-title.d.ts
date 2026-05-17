// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "description-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayPgoreleaseMonth3DeluxeEventPassTrackUnlock = S<
	IapItemDisplay<
		"pgorelease.month3_deluxe_event_pass_track_unlock",
		{
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			sku: "pgorelease.month3_deluxe_event_pass_track_unlock";
			skuDisableTime: "2026-06-04T10:00:00";
			skuDisableTimeUtcMs: "1780567200000";
			skuEnableTime: "2025-04-28T10:00:00";
			skuEnableTimeUtcMs: "1745834400000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_may";
		}
	>
>;
export type IapItemDisplayPgoreleaseMonth3DeluxeEventPassTrackUnlockPlusPoints = S<
	IapItemDisplay<
		"pgorelease.month3_deluxe_event_pass_track_unlock_plus_points",
		{
			description: "gotour_2025_deluxe_event_pass_track_unlock_plus_points_description";
			sku: "pgorelease.month3_deluxe_event_pass_track_unlock_plus_points";
			skuDisableTime: "2026-06-04T10:00:00";
			skuDisableTimeUtcMs: "1780567200000";
			skuEnableTime: "2025-04-28T10:00:00";
			skuEnableTimeUtcMs: "1745834400000";
			sortOrder: 1;
			title: "season_pass_premium_track_plus_ten_ranks_title_may";
		}
	>
>;

export type IapItemDisplayDescriptionSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderTitleMasterfileEntry =
	| IapItemDisplayPgoreleaseMonth3DeluxeEventPassTrackUnlock
	| IapItemDisplayPgoreleaseMonth3DeluxeEventPassTrackUnlockPlusPoints;

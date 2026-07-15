// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "description-sku-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-title", 2 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlock = S<
	IapItemDisplay<
		"pgorelease.month2_deluxe_event_pass_track_unlock",
		{
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			sku: "pgorelease.month2_deluxe_event_pass_track_unlock";
			skuDisableTime: "2026-08-06T10:00:00";
			skuDisableTimeUtcMs: "1786010400000";
			skuEnableTime: "2025-05-26T10:00:00";
			skuEnableTimeUtcMs: "1748253600000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_july";
		}
	>
>;
export type IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlockPlusPoints = S<
	IapItemDisplay<
		"pgorelease.month2_deluxe_event_pass_track_unlock_plus_points",
		{
			description: "gotour_2025_deluxe_event_pass_track_unlock_plus_points_description";
			sku: "pgorelease.month2_deluxe_event_pass_track_unlock_plus_points";
			skuDisableTime: "2026-08-06T10:00:00";
			skuDisableTimeUtcMs: "1786010400000";
			skuEnableTime: "2025-05-26T10:00:00";
			skuEnableTimeUtcMs: "1748253600000";
			sortOrder: 1;
			title: "season_pass_premium_track_plus_ten_ranks_title_july";
		}
	>
>;

export type IapItemDisplayDescriptionSkuSkuDisableTimeSkuDisableTimeUtcMsSkuEnableTimeSkuEnableTimeUtcMsSortOrderTitleMasterfileEntry =
	| IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlock
	| IapItemDisplayPgoreleaseMonth2DeluxeEventPassTrackUnlockPlusPoints;

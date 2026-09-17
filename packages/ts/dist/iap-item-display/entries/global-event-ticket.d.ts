// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "global-event-ticket", 5 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayEventPassMonth1SeasonStoreRedirect = S<
	IapItemDisplay<
		"EVENT_PASS_MONTH1_SEASON_STORE_REDIRECT",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fb8786503_PGO-MCS_GO_Pass_September_2026_TICKET_v1-1024x576.jpg";
			sku: "pgorelease.month1_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-10-08T10:00:00";
			skuDisableTimeUtcMs: "1791453600000";
			skuEnableTime: "2025-06-02T10:00:00";
			skuEnableTimeUtcMs: "1748858400000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_sep";
		}
	>
>;
export type IapItemDisplayGeneral1Ticket5 = S<
	IapItemDisplay<
		"general1.ticket.5",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fc397eb56_PGO-MCS_Staraptor_Super_Mega_Raid_Day_v1-1024x576.jpg";
			sku: "pgorelease.general1.ticket.5";
			skuDisableTime: "2026-09-19T17:00:00";
			skuDisableTimeUtcMs: "1789837200000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.5";
			title: "general1.ticket.5_MegaStaraptorRaidDay";
			useEnvironmentPrefix: true;
		}
	>
>;
export type IapItemDisplayGeneral2Ticket3 = S<
	IapItemDisplay<
		"general2.ticket.3",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdaa6a9dd_PGO_MCS_CD_Classic_KeyArt_Gible_v1-1024x576.jpg";
			sku: "pgorelease.general2.ticket.3";
			skuDisableTime: "2026-09-12T17:00:00";
			skuDisableTimeUtcMs: "1789232400000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.2";
			title: "general1.ticket_CDC_Gible26_title";
			useEnvironmentPrefix: true;
		}
	>
>;
export type IapItemDisplayGeneral2Ticket11 = S<
	IapItemDisplay<
		"general2.ticket.11",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F833d6091_PGO_GOWA-2026-Global-KeyArt_1024x512_sku.png";
			sku: "general2.ticket.11";
			skuDisableTime: "2026-11-15T20:00:00";
			skuDisableTimeUtcMs: "1794772800000";
			skuEnableTime: "2020-01-01T00:00:00";
			skuEnableTimeUtcMs: "1577836800000";
			sortOrder: 1;
			spriteId: "general1.ticket.4";
			title: "general2.ticket._GOWA26_title";
			webstoreSkuId: "web-gowa-global-2026-ticket";
			webstoreSkuPriceE6: 11990000;
		}
	>
>;
export type IapItemDisplayPgoreleaseSeptember22026DeluxeEventPassTrackUnlockRedirect = S<
	IapItemDisplay<
		"pgorelease.september2_2026_deluxe_event_pass_track_unlock_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fec63551c_PGO-MCS_Horizon_Celebration_2026_TICKET_v1-1024x576.jpg";
			sku: "pgorelease.september2_2026_deluxe_event_pass_track_unlock_redirect";
			skuDisableTime: "2026-09-24T20:00:00";
			skuDisableTimeUtcMs: "1790280000000";
			skuEnableTime: "2025-09-16T10:00:00";
			skuEnableTimeUtcMs: "1758016800000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_horizons_fall_2026";
		}
	>
>;

export type IapItemDisplayGlobalEventTicketMasterfileEntry =
	| IapItemDisplayEventPassMonth1SeasonStoreRedirect
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket11
	| IapItemDisplayPgoreleaseSeptember22026DeluxeEventPassTrackUnlockRedirect;

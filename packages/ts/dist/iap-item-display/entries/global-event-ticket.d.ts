// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "global-event-ticket", 6 entries.

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
export type IapItemDisplayEventPassSeptember3EventStoreRedirect = S<
	IapItemDisplay<
		"EVENT_PASS_SEPTEMBER3_EVENT_STORE_REDIRECT",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "gotour_2025_deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F3cd7734c_PGO-MCS_Harvest_Festival_2026_TICKET_v1-1024x512_nologo.png";
			sku: "pgorelease.september3_2026_deluxe_event_pass_track_unlock_redirect";
			skuDisableTime: "2026-10-07T20:00:00";
			skuDisableTimeUtcMs: "1791403200000";
			skuEnableTime: "2025-09-29T10:00:00";
			skuEnableTimeUtcMs: "1759140000000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_harvest_festival_2026";
		}
	>
>;
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
export type IapItemDisplayGeneral2Ticket3 = S<
	IapItemDisplay<
		"general2.ticket.3",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F7278ea4f_PGO_MCS_CD_KeyArt_Zorua_v3-1024x576-nologo.jpg";
			sku: "pgorelease.general2.ticket.3";
			skuDisableTime: "2026-10-10T17:00:00";
			skuDisableTimeUtcMs: "1791651600000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.2";
			title: "general1.ticket_CD_Zorua26_title";
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
export type IapItemDisplayMonth2DeluxeEventPassTrackRedirect = S<
	IapItemDisplay<
		"month2_deluxe_event_pass_track_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F918345fc_PGO-MCS_S24_GO_Pass_TICKET_v1-1024x576.jpg";
			sku: "pgorelease.month2_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-11-05T10:00:00";
			skuDisableTimeUtcMs: "1793872800000";
			skuEnableTime: "2025-10-06T10:00:00";
			skuEnableTimeUtcMs: "1759744800000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_oct";
			useEnvironmentPrefix: true;
		}
	>
>;

export type IapItemDisplayGlobalEventTicketMasterfileEntry =
	| IapItemDisplayEventPassMonth1SeasonStoreRedirect
	| IapItemDisplayEventPassSeptember3EventStoreRedirect
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket11
	| IapItemDisplayMonth2DeluxeEventPassTrackRedirect;

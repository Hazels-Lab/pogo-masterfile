// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "global-event-ticket", 4 entries.

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
export type IapItemDisplayGeneral2Ticket3 = S<
	IapItemDisplay<
		"general2.ticket.3",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Ff0183154_PGO_MCS_CD_KeyArt_Pawniard_v2_1024x576_nologo.jpg";
			sku: "pgorelease.general2.ticket.3";
			skuDisableTime: "2026-11-21T17:00:00";
			skuDisableTimeUtcMs: "1795280400000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general1.ticket.2";
			title: "general1.ticket_CD_Pawniard26_title";
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
export type IapItemDisplayMonth3DeluxeEventPassTrackRedirect = S<
	IapItemDisplay<
		"month3_deluxe_event_pass_track_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F25acca32_PGO-MCS_Ticket%20Art_Poke%CC%81Coin_1024x576.png";
			sku: "pgorelease.month3_deluxe_event_pass_track_redirect";
			skuDisableTime: "2026-12-03T10:00:00";
			skuDisableTimeUtcMs: "1796292000000";
			skuEnableTime: "2025-11-03T10:00:00";
			skuEnableTimeUtcMs: "1762164000000";
			sortOrder: 1;
			title: "season_pass_premium_track_title_nov";
			useEnvironmentPrefix: true;
		}
	>
>;

export type IapItemDisplayGlobalEventTicketMasterfileEntry =
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket11
	| IapItemDisplayMonth3DeluxeEventPassTrackRedirect;

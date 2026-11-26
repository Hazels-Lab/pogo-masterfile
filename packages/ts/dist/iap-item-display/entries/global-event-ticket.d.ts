// Generated from Pokémon GO masterfile — group "iapItemDisplay", split "global-event-ticket", 6 entries.

import type { S } from "../../_utils";
import type { IapItemDisplay } from "../types";

export type IapItemDisplayGeneral1Ticket5 = S<
	IapItemDisplay<
		"general1.ticket.5",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F93565839_PGO-MCS_Clefable_Super_Mega_Raid_Day_v1-1024x576.jpg";
			sku: "pgorelease.general1.ticket.5";
			skuDisableTime: "2026-11-28T17:00:00";
			skuDisableTimeUtcMs: "1795885200000";
			skuEnableTime: "2019-03-14T08:00:00";
			skuEnableTimeUtcMs: "1552550400000";
			sortOrder: 2;
			spriteId: "general2.ticket.5";
			title: "general2.ticket.5_MegaClefableRaidDay";
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
			hidden: true;
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
export type IapItemDisplayGotourticket1 = S<
	IapItemDisplay<
		"gotourticket.1",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "item_global_event_ticket_desc_GOTour2027";
			hidden: true;
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F19ec3f96_PGO-MCS_GO_Tour_2027_Shiny_Poipole_v2-1025x512.jpg";
			sku: "pgorelease.gotourticket.1";
			sortOrder: 1;
			spriteId: "general2.ticket.5";
			title: "GOTour_2027_ticket_title";
			useEnvironmentPrefix: true;
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
export type IapItemDisplayNovember12026DeluxeEventPassTrackUnlockRedirect = S<
	IapItemDisplay<
		"november1_2026_deluxe_event_pass_track_unlock_redirect",
		{
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "deluxe_event_pass_track_unlock_description";
			imageUrl: "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F3b514292_PGO-MCS_S24_Finale_Key_Art_TICKET_v4_1024x576.jpg";
			sku: "pgorelease.november1_2026_deluxe_event_pass_track_unlock_redirect";
			skuDisableTime: "2026-12-02T20:00:00";
			skuDisableTimeUtcMs: "1796241600000";
			skuEnableTime: "2025-11-24T10:00:00";
			skuEnableTimeUtcMs: "1763978400000";
			sortOrder: 1;
			title: "twilight_trails_finale_event_pass_deluxe_title";
			useEnvironmentPrefix: true;
		}
	>
>;

export type IapItemDisplayGlobalEventTicketMasterfileEntry =
	| IapItemDisplayGeneral1Ticket5
	| IapItemDisplayGeneral2Ticket3
	| IapItemDisplayGeneral2Ticket11
	| IapItemDisplayGotourticket1
	| IapItemDisplayMonth3DeluxeEventPassTrackRedirect
	| IapItemDisplayNovember12026DeluxeEventPassTrackUnlockRedirect;

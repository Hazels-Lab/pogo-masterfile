// Generated from Pokémon GO masterfile — group "iapItemDisplay", 1073 entries (structural types).

import type { W } from "../_utils";

export interface IapItemDisplay<TemplateID extends string = string, TData extends IapItemDisplayData = IapItemDisplayData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		iapItemDisplay: TData;
	};
}
export type IapItemDisplayType = W<IapItemDisplay>;

export interface IapItemDisplayData {
	category?:
		| "IAP_CATEGORY_BUNDLE"
		| "IAP_CATEGORY_FLAIR_BUNDLE"
		| "IAP_CATEGORY_FREE"
		| "IAP_CATEGORY_GLOBAL_EVENT_TICKET"
		| "IAP_CATEGORY_ITEMS"
		| "IAP_CATEGORY_POKECOINS"
		| "IAP_CATEGORY_STICKER"
		| "IAP_CATEGORY_TRANSPORTER_ENERGY"
		| "IAP_CATEGORY_UPGRADES";
	description?:
		| "battle_pass_ticket_IAP_description"
		| "deluxe_event_pass_track_unlock_description"
		| "deluxe_event_pass_track_unlock_plus_points_description"
		| "event_pass_plus_points_6_ranks_description"
		| "gosafariball.10_description"
		| "gosafariball.25_description"
		| "gosafariball.50_description"
		| "gotour_2025_deluxe_event_pass_track_unlock_description"
		| "iris_flair_free_description"
		| "MAXPOTION.5_DESCRIPTION"
		| "MAXREVIVE.3_DESCRIPTION"
		| "POSTCARD_EXPANSION_1_description";
	hidden?: boolean;
	imageUrl?:
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F3cd7734c_PGO-MCS_Harvest_Festival_2026_TICKET_v1-1024x512_nologo.png"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F13d4dacd_PGO-MCS_Avatar_Maschiff_Top_v2-1024x576%20no%20logo.png"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F035aa0ae_PGO-MCS_S24_GBL_v1-1024x576.jpg"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2F833d6091_PGO_GOWA-2026-Global-KeyArt_1024x512_sku.png"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fb8786503_PGO-MCS_GO_Pass_September_2026_TICKET_v1-1024x576.jpg"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fc397eb56_PGO-MCS_Staraptor_Super_Mega_Raid_Day_v1-1024x576.jpg"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fdaa6a9dd_PGO_MCS_CD_Classic_KeyArt_Gible_v1-1024x576.jpg"
		| "https://asset-cdn-rel.nianticstatic.com/GameDesignAssets%2Fec63551c_PGO-MCS_Horizon_Celebration_2026_TICKET_v1-1024x576.jpg";
	maxLevel?: number;
	sale?: boolean;
	showDiscountTag?: boolean;
	showStrikethroughPrice?: boolean;
	sku: string;
	skuDisableTime?:
		| "2024-11-30T20:00:00"
		| "2025-09-16T20:00:00"
		| "2025-10-07T20:00:00"
		| "2026-01-25T23:59:00"
		| "2026-09-12T17:00:00"
		| "2026-09-19T17:00:00"
		| "2026-09-20T17:00:00"
		| "2026-09-22T13:00:00"
		| "2026-09-24T20:00:00"
		| "2026-10-08T10:00:00"
		| "2026-11-15T20:00:00";
	skuDisableTimeUtcMs?:
		| "1732996800000"
		| "1758052800000"
		| "1759867200000"
		| "1769385540000"
		| "1789232400000"
		| "1789837200000"
		| "1789923600000"
		| "1790082000000"
		| "1790280000000"
		| "1791453600000"
		| "1794772800000";
	skuEnableTime?:
		| "2019-03-14T08:00:00"
		| "2019-10-31T21:00:00"
		| "2020-01-01T00:00:00"
		| "2022-10-13T12:00:00"
		| "2023-02-27T20:00:00"
		| "2023-10-10T11:00:00"
		| "2025-06-02T10:00:00"
		| "2025-09-08T10:00:00"
		| "2025-09-16T10:00:00"
		| "2025-09-29T10:00:00";
	skuEnableTimeUtcMs?:
		| "1552550400000"
		| "1572555600000"
		| "1577836800000"
		| "1665662400000"
		| "1677528000000"
		| "1696935600000"
		| "1748858400000"
		| "1757325600000"
		| "1758016800000"
		| "1759140000000";
	sortOrder?: number;
	spriteId?: string;
	title?: string;
	totalValue?: number;
	useEnvironmentPrefix?: boolean;
	webstoreSkuId?: "web-gowa-global-2026-ticket";
	webstoreSkuPriceE6?: number;
}

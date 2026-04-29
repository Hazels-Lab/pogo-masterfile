// Generated from Pokémon GO masterfile — group "iapCategoryDisplay", 13 entries (variant aliases).

import type { S } from "../_utils";
import type { IapCategoryDisplay } from "./index";

export type IapCategoryDisplayAvatar = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_AVATAR",
		{
			category: "IAP_CATEGORY_AVATAR";
			description: "avatar_shop_description_new";
			imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGOAvatar_HammerPose_1024%20x%20512%20no%20logo.jpg";
			sortOrder: 5;
		}
	>
>;
export type IapCategoryDisplayBundle = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_BUNDLE",
		{
			bannerEnabled: true;
			bannerTitle: "shop_limited_time";
			category: "IAP_CATEGORY_BUNDLE";
			sortOrder: 3;
		}
	>
>;
export type IapCategoryDisplayFlairBundle = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_FLAIR_BUNDLE",
		{
			category: "IAP_CATEGORY_FLAIR_BUNDLE";
			hidden: true;
		}
	>
>;
export type IapCategoryDisplayFree = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_FREE",
		{
			category: "IAP_CATEGORY_FREE";
			sortOrder: 7;
		}
	>
>;
export type IapCategoryDisplayGlobalEventTicket = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_GLOBAL_EVENT_TICKET",
		{
			bannerEnabled: true;
			bannerTitle: "shop_category_global_events";
			category: "IAP_CATEGORY_GLOBAL_EVENT_TICKET";
			description: "live_events_shop_category_description";
			imageUrl: "https://storage.googleapis.com/prod-public-images/GOFestFinaleTicket.jpg";
			name: "shop_category_global_events";
			sortOrder: 1;
		}
	>
>;
export type IapCategoryDisplayItems = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_ITEMS",
		{
			category: "IAP_CATEGORY_ITEMS";
			sortOrder: 9;
		}
	>
>;
export type IapCategoryDisplayNone = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_NONE",
		{
			hidden: true;
		}
	>
>;
export type IapCategoryDisplayPokecoins = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_POKECOINS",
		{
			category: "IAP_CATEGORY_POKECOINS";
			sortOrder: 17;
		}
	>
>;
export type IapCategoryDisplayRewardedSpend = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_REWARDED_SPEND",
		{
			category: 19;
			description: "rewarded_spend_category_description";
			name: "REWARDED_SPEND_MONTHLY_REWARD_ROAD_KEY";
		}
	>
>;
export type IapCategoryDisplaySticker = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_STICKER",
		{
			category: "IAP_CATEGORY_STICKER";
			displayRows: 2;
			name: "shop_sticker";
			sortOrder: 13;
		}
	>
>;
export type IapCategoryDisplayTeamChange = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_TEAM_CHANGE",
		{
			category: "IAP_CATEGORY_TEAM_CHANGE";
			sortOrder: 15;
		}
	>
>;
export type IapCategoryDisplayTransporterEnergy = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_TRANSPORTER_ENERGY",
		{
			category: "IAP_CATEGORY_TRANSPORTER_ENERGY";
			hidden: true;
		}
	>
>;
export type IapCategoryDisplayUpgrades = S<
	IapCategoryDisplay<
		"IAP_CATEGORY_UPGRADES",
		{
			category: "IAP_CATEGORY_UPGRADES";
			sortOrder: 11;
		}
	>
>;

export type IapCategoryDisplayMasterfileEntry =
	| IapCategoryDisplayAvatar
	| IapCategoryDisplayBundle
	| IapCategoryDisplayFlairBundle
	| IapCategoryDisplayFree
	| IapCategoryDisplayGlobalEventTicket
	| IapCategoryDisplayItems
	| IapCategoryDisplayNone
	| IapCategoryDisplayPokecoins
	| IapCategoryDisplayRewardedSpend
	| IapCategoryDisplaySticker
	| IapCategoryDisplayTeamChange
	| IapCategoryDisplayTransporterEnergy
	| IapCategoryDisplayUpgrades;

export type IapCategoryDisplayTemplateID = IapCategoryDisplayMasterfileEntry["templateId"];

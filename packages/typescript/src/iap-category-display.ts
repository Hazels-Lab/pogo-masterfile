// Generated from Pokémon GO masterfile — group "iapCategoryDisplay", 13 entries.

export interface IapCategoryDisplay<TemplateID extends string = string, TData extends IapCategoryDisplayData = IapCategoryDisplayData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		iapCategoryDisplay: TData;
	};
}

export interface IapCategoryDisplayData {
	bannerEnabled?: boolean;
	bannerTitle?: "shop_category_global_events" | "shop_limited_time";
	category?:
		| number
		| "IAP_CATEGORY_AVATAR"
		| "IAP_CATEGORY_BUNDLE"
		| "IAP_CATEGORY_FLAIR_BUNDLE"
		| "IAP_CATEGORY_FREE"
		| "IAP_CATEGORY_GLOBAL_EVENT_TICKET"
		| "IAP_CATEGORY_ITEMS"
		| "IAP_CATEGORY_POKECOINS"
		| "IAP_CATEGORY_STICKER"
		| "IAP_CATEGORY_TEAM_CHANGE"
		| "IAP_CATEGORY_TRANSPORTER_ENERGY"
		| "IAP_CATEGORY_UPGRADES";
	description?: "avatar_shop_description_new" | "live_events_shop_category_description" | "rewarded_spend_category_description";
	displayRows?: number;
	hidden?: boolean;
	imageUrl?:
		| "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGOAvatar_HammerPose_1024%20x%20512%20no%20logo.jpg"
		| "https://storage.googleapis.com/prod-public-images/GOFestFinaleTicket.jpg";
	name?: "REWARDED_SPEND_MONTHLY_REWARD_ROAD_KEY" | "shop_category_global_events" | "shop_sticker";
	sortOrder?: number;
}

export type IapCategoryDisplayAvatar = IapCategoryDisplay<
	"IAP_CATEGORY_AVATAR",
	{
		category: "IAP_CATEGORY_AVATAR";
		description: "avatar_shop_description_new";
		imageUrl: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGOAvatar_HammerPose_1024%20x%20512%20no%20logo.jpg";
		sortOrder: 5;
	}
>;
export type IapCategoryDisplayBundle = IapCategoryDisplay<
	"IAP_CATEGORY_BUNDLE",
	{
		bannerEnabled: true;
		bannerTitle: "shop_limited_time";
		category: "IAP_CATEGORY_BUNDLE";
		sortOrder: 3;
	}
>;
export type IapCategoryDisplayFlairBundle = IapCategoryDisplay<
	"IAP_CATEGORY_FLAIR_BUNDLE",
	{
		category: "IAP_CATEGORY_FLAIR_BUNDLE";
		hidden: true;
	}
>;
export type IapCategoryDisplayFree = IapCategoryDisplay<
	"IAP_CATEGORY_FREE",
	{
		category: "IAP_CATEGORY_FREE";
		sortOrder: 7;
	}
>;
export type IapCategoryDisplayGlobalEventTicket = IapCategoryDisplay<
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
>;
export type IapCategoryDisplayItems = IapCategoryDisplay<
	"IAP_CATEGORY_ITEMS",
	{
		category: "IAP_CATEGORY_ITEMS";
		sortOrder: 9;
	}
>;
export type IapCategoryDisplayNone = IapCategoryDisplay<
	"IAP_CATEGORY_NONE",
	{
		hidden: true;
	}
>;
export type IapCategoryDisplayPokecoins = IapCategoryDisplay<
	"IAP_CATEGORY_POKECOINS",
	{
		category: "IAP_CATEGORY_POKECOINS";
		sortOrder: 17;
	}
>;
export type IapCategoryDisplayRewardedSpend = IapCategoryDisplay<
	"IAP_CATEGORY_REWARDED_SPEND",
	{
		category: 19;
		description: "rewarded_spend_category_description";
		name: "REWARDED_SPEND_MONTHLY_REWARD_ROAD_KEY";
	}
>;
export type IapCategoryDisplaySticker = IapCategoryDisplay<
	"IAP_CATEGORY_STICKER",
	{
		category: "IAP_CATEGORY_STICKER";
		displayRows: 2;
		name: "shop_sticker";
		sortOrder: 13;
	}
>;
export type IapCategoryDisplayTeamChange = IapCategoryDisplay<
	"IAP_CATEGORY_TEAM_CHANGE",
	{
		category: "IAP_CATEGORY_TEAM_CHANGE";
		sortOrder: 15;
	}
>;
export type IapCategoryDisplayTransporterEnergy = IapCategoryDisplay<
	"IAP_CATEGORY_TRANSPORTER_ENERGY",
	{
		category: "IAP_CATEGORY_TRANSPORTER_ENERGY";
		hidden: true;
	}
>;
export type IapCategoryDisplayUpgrades = IapCategoryDisplay<
	"IAP_CATEGORY_UPGRADES",
	{
		category: "IAP_CATEGORY_UPGRADES";
		sortOrder: 11;
	}
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

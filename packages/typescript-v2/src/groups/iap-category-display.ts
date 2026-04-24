export interface IapCategoryDisplay<TemplateID extends string> {
	templateId: TemplateID;
	data: IapCategoryDisplayData<TemplateID>;
}

export interface IapCategoryDisplayData<TemplateID extends string> {
	templateId: TemplateID;
	iapCategoryDisplay: {
		bannerEnabled?: true;
		bannerTitle?: "shop_category_global_events" | "shop_limited_time";
		category?: 19 | "IAP_CATEGORY_AVATAR" | "IAP_CATEGORY_BUNDLE" | "IAP_CATEGORY_FLAIR_BUNDLE" | "IAP_CATEGORY_FREE" | "IAP_CATEGORY_GLOBAL_EVENT_TICKET" | "IAP_CATEGORY_ITEMS" | "IAP_CATEGORY_POKECOINS" | "IAP_CATEGORY_STICKER" | "IAP_CATEGORY_TEAM_CHANGE" | "IAP_CATEGORY_TRANSPORTER_ENERGY" | "IAP_CATEGORY_UPGRADES";
		description?: "avatar_shop_description_new" | "live_events_shop_category_description" | "rewarded_spend_category_description";
		displayRows?: 2;
		hidden?: true;
		imageUrl?: "https://pgorelease-assets.nianticstatic.com/GameDesignAssets%2FPGOAvatar_HammerPose_1024%20x%20512%20no%20logo.jpg" | "https://storage.googleapis.com/prod-public-images/GOFestFinaleTicket.jpg";
		name?: "REWARDED_SPEND_MONTHLY_REWARD_ROAD_KEY" | "shop_category_global_events" | "shop_sticker";
		sortOrder?: 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17;
	};
}

export type IapCategoryDisplayAvatar = IapCategoryDisplay<"IAP_CATEGORY_AVATAR">;
export type IapCategoryDisplayBundle = IapCategoryDisplay<"IAP_CATEGORY_BUNDLE">;
export type IapCategoryDisplayFlairBundle = IapCategoryDisplay<"IAP_CATEGORY_FLAIR_BUNDLE">;
export type IapCategoryDisplayFree = IapCategoryDisplay<"IAP_CATEGORY_FREE">;
export type IapCategoryDisplayGlobalEventTicket = IapCategoryDisplay<"IAP_CATEGORY_GLOBAL_EVENT_TICKET">;
export type IapCategoryDisplayItems = IapCategoryDisplay<"IAP_CATEGORY_ITEMS">;
export type IapCategoryDisplayNone = IapCategoryDisplay<"IAP_CATEGORY_NONE">;
export type IapCategoryDisplayPokecoins = IapCategoryDisplay<"IAP_CATEGORY_POKECOINS">;
export type IapCategoryDisplayRewardedSpend = IapCategoryDisplay<"IAP_CATEGORY_REWARDED_SPEND">;
export type IapCategoryDisplaySticker = IapCategoryDisplay<"IAP_CATEGORY_STICKER">;
export type IapCategoryDisplayTeamChange = IapCategoryDisplay<"IAP_CATEGORY_TEAM_CHANGE">;
export type IapCategoryDisplayTransporterEnergy = IapCategoryDisplay<"IAP_CATEGORY_TRANSPORTER_ENERGY">;
export type IapCategoryDisplayUpgrades = IapCategoryDisplay<"IAP_CATEGORY_UPGRADES">;

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

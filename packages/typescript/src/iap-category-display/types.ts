// Generated from Pokémon GO masterfile — group "iapCategoryDisplay", 13 entries (structural types).

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

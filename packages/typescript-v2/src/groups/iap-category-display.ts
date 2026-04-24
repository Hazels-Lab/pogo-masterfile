export interface IapCategoryDisplay<T extends string> {
	templateId: T;
	data: IapCategoryDisplayData<T>;
}

export interface IapCategoryDisplayData<T extends string> {
	templateId: T;
	iapCategoryDisplay: unknown;
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

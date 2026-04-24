export interface BuddyActivityCategorySettings<T extends string> {
	templateId: T;
	data: BuddyActivityCategorySettingsData<T>;
}

export interface BuddyActivityCategorySettingsData<T extends string> {
	templateId: T;
	buddyActivityCategorySettings: unknown;
}

export type BuddyActivityCategorySettingsBattle = BuddyActivityCategorySettings<"BUDDY_CATEGORY_BATTLE">;
export type BuddyActivityCategorySettingsBonus = BuddyActivityCategorySettings<"BUDDY_CATEGORY_BONUS">;
export type BuddyActivityCategorySettingsCare = BuddyActivityCategorySettings<"BUDDY_CATEGORY_CARE">;
export type BuddyActivityCategorySettingsExplore = BuddyActivityCategorySettings<"BUDDY_CATEGORY_EXPLORE">;
export type BuddyActivityCategorySettingsFeed = BuddyActivityCategorySettings<"BUDDY_CATEGORY_FEED">;
export type BuddyActivityCategorySettingsRoute = BuddyActivityCategorySettings<"BUDDY_CATEGORY_ROUTE">;
export type BuddyActivityCategorySettingsSnapshot = BuddyActivityCategorySettings<"BUDDY_CATEGORY_SNAPSHOT">;
export type BuddyActivityCategorySettingsWalk = BuddyActivityCategorySettings<"BUDDY_CATEGORY_WALK">;

export type BuddyActivityCategorySettingsMasterfileEntry =
	| BuddyActivityCategorySettingsBattle
	| BuddyActivityCategorySettingsBonus
	| BuddyActivityCategorySettingsCare
	| BuddyActivityCategorySettingsExplore
	| BuddyActivityCategorySettingsFeed
	| BuddyActivityCategorySettingsRoute
	| BuddyActivityCategorySettingsSnapshot
	| BuddyActivityCategorySettingsWalk;

export type BuddyActivityCategorySettingsTemplateID = BuddyActivityCategorySettingsMasterfileEntry["templateId"];

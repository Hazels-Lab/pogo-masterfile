// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings", 8 entries.

export interface BuddyActivityCategorySettings<
	TemplateID extends string = string,
	TData extends BuddyActivityCategorySettingsData = BuddyActivityCategorySettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		buddyActivityCategorySettings: TData & {
			activityCategory: TemplateID;
		};
	};
}

export interface BuddyActivityCategorySettingsData {
	maxPointsPerDay: number;
}

export type BuddyActivityCategorySettingsBattle = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_BATTLE",
	{
		maxPointsPerDay: 3;
	}
>;
export type BuddyActivityCategorySettingsBonus = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_BONUS",
	{
		maxPointsPerDay: 6;
	}
>;
export type BuddyActivityCategorySettingsCare = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_CARE",
	{
		maxPointsPerDay: 1;
	}
>;
export type BuddyActivityCategorySettingsExplore = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_EXPLORE",
	{
		maxPointsPerDay: 1;
	}
>;
export type BuddyActivityCategorySettingsFeed = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_FEED",
	{
		maxPointsPerDay: 3;
	}
>;
export type BuddyActivityCategorySettingsRoute = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_ROUTE",
	{
		maxPointsPerDay: 1;
	}
>;
export type BuddyActivityCategorySettingsSnapshot = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_SNAPSHOT",
	{
		maxPointsPerDay: 1;
	}
>;
export type BuddyActivityCategorySettingsWalk = BuddyActivityCategorySettings<
	"BUDDY_CATEGORY_WALK",
	{
		maxPointsPerDay: 3;
	}
>;

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

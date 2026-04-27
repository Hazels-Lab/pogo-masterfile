// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings", 8 entries (structural types).

export type * from "./variants";

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

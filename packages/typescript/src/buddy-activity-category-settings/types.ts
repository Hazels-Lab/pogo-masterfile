// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings", 8 entries (structural types).

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

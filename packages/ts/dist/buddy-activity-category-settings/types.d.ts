// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings", 8 entries (structural types).

import type { W } from "../_utils";

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
export type BuddyActivityCategorySettingsType = W<BuddyActivityCategorySettings>;

export interface BuddyActivityCategorySettingsData {
	maxPointsPerDay: number;
}

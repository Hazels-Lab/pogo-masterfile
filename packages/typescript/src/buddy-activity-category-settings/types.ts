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

export type BuddyCategory =
	| "BUDDY_CATEGORY_BATTLE"
	| "BUDDY_CATEGORY_BONUS"
	| "BUDDY_CATEGORY_CARE"
	| "BUDDY_CATEGORY_EXPLORE"
	| "BUDDY_CATEGORY_FEED"
	| "BUDDY_CATEGORY_ROUTE"
	| "BUDDY_CATEGORY_SNAPSHOT"
	| "BUDDY_CATEGORY_WALK";

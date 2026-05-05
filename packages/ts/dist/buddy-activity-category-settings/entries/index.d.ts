// Generated from Pokémon GO masterfile — group "buddyActivityCategorySettings", 8 entries (variant aliases).

import type { S } from "../../_utils";
import type { BuddyActivityCategorySettings } from "../types";

export type BuddyActivityCategorySettingsBattle = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_BATTLE",
		{
			maxPointsPerDay: 3;
		}
	>
>;
export type BuddyActivityCategorySettingsBonus = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_BONUS",
		{
			maxPointsPerDay: 6;
		}
	>
>;
export type BuddyActivityCategorySettingsCare = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_CARE",
		{
			maxPointsPerDay: 1;
		}
	>
>;
export type BuddyActivityCategorySettingsExplore = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_EXPLORE",
		{
			maxPointsPerDay: 1;
		}
	>
>;
export type BuddyActivityCategorySettingsFeed = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_FEED",
		{
			maxPointsPerDay: 3;
		}
	>
>;
export type BuddyActivityCategorySettingsRoute = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_ROUTE",
		{
			maxPointsPerDay: 1;
		}
	>
>;
export type BuddyActivityCategorySettingsSnapshot = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_SNAPSHOT",
		{
			maxPointsPerDay: 1;
		}
	>
>;
export type BuddyActivityCategorySettingsWalk = S<
	BuddyActivityCategorySettings<
		"BUDDY_CATEGORY_WALK",
		{
			maxPointsPerDay: 3;
		}
	>
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

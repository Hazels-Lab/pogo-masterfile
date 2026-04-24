export interface BuddyLevelSettings<T extends string> {
	templateId: T;
	data: BuddyLevelSettingsData<T>;
}

export interface BuddyLevelSettingsData<T extends string> {
	templateId: T;
	buddyLevelSettings: {
		level: T;
		minNonCumulativePointsRequired?: 1 | 70 | 150 | 300;
		unlockedTraits?: Array<"BEST_BUDDY_ASSET" | "CP_BOOST" | "EMOTION_INDICATOR" | "ENCOUNTER_CAMEO" | "FIND_ATTRACTIVE_POIS" | "MAP_DEPLOY" | "PICK_UP_CONSUMABLES" | "PICK_UP_SOUVENIRS" | "TRAINING">;
	};
}

export type BuddyLevelSettings0 = BuddyLevelSettings<"BUDDY_LEVEL_0">;
export type BuddyLevelSettings1 = BuddyLevelSettings<"BUDDY_LEVEL_1">;
export type BuddyLevelSettings2 = BuddyLevelSettings<"BUDDY_LEVEL_2">;
export type BuddyLevelSettings3 = BuddyLevelSettings<"BUDDY_LEVEL_3">;
export type BuddyLevelSettings4 = BuddyLevelSettings<"BUDDY_LEVEL_4">;

export type BuddyLevelSettingsMasterfileEntry =
	| BuddyLevelSettings0
	| BuddyLevelSettings1
	| BuddyLevelSettings2
	| BuddyLevelSettings3
	| BuddyLevelSettings4;

export type BuddyLevelSettingsTemplateID = BuddyLevelSettingsMasterfileEntry["templateId"];

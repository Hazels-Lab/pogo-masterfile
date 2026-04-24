export interface BuddyLevelSettings<T extends string> {
	templateId: T;
	data: BuddyLevelSettingsData<T>;
}

export interface BuddyLevelSettingsData<T extends string> {
	templateId: T;
	buddyLevelSettings: unknown;
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

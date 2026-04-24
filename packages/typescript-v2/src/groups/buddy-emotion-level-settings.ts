export interface BuddyEmotionLevelSettings<T extends string> {
	templateId: T;
	data: BuddyEmotionLevelSettingsData<T>;
}

export interface BuddyEmotionLevelSettingsData<T extends string> {
	templateId: T;
	buddyEmotionLevelSettings: {
		emotionAnimation: "BUDDY_ANIMATION_HAPPY" | "BUDDY_ANIMATION_HATE";
		emotionLevel: "BUDDY_EMOTION_LEVEL_0" | "BUDDY_EMOTION_LEVEL_1" | "BUDDY_EMOTION_LEVEL_2" | "BUDDY_EMOTION_LEVEL_3" | "BUDDY_EMOTION_LEVEL_4" | "BUDDY_EMOTION_LEVEL_5" | "BUDDY_EMOTION_LEVEL_6";
		minEmotionPointsRequired?: 1 | 2 | 4 | 8 | 16 | 32;
	};
}

export type BuddyEmotionLevelSettings0 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_0">;
export type BuddyEmotionLevelSettings1 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_1">;
export type BuddyEmotionLevelSettings2 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_2">;
export type BuddyEmotionLevelSettings3 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_3">;
export type BuddyEmotionLevelSettings4 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_4">;
export type BuddyEmotionLevelSettings5 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_5">;
export type BuddyEmotionLevelSettings6 = BuddyEmotionLevelSettings<"BUDDY_EMOTION_LEVEL_6">;

export type BuddyEmotionLevelSettingsMasterfileEntry =
	| BuddyEmotionLevelSettings0
	| BuddyEmotionLevelSettings1
	| BuddyEmotionLevelSettings2
	| BuddyEmotionLevelSettings3
	| BuddyEmotionLevelSettings4
	| BuddyEmotionLevelSettings5
	| BuddyEmotionLevelSettings6;

export type BuddyEmotionLevelSettingsTemplateID = BuddyEmotionLevelSettingsMasterfileEntry["templateId"];

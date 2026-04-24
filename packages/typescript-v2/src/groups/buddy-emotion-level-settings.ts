export interface BuddyEmotionLevelSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: BuddyEmotionLevelSettingsData<TemplateID>;
}

export interface BuddyEmotionLevelSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	buddyEmotionLevelSettings: {
		emotionAnimation: "BUDDY_ANIMATION_HAPPY" | "BUDDY_ANIMATION_HATE";
		emotionLevel: TemplateID;
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

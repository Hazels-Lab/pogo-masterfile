// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings", 7 entries (structural types).

import type { W } from "../_utils";

export interface BuddyEmotionLevelSettings<TemplateID extends string = string, TData extends BuddyEmotionLevelSettingsData = BuddyEmotionLevelSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		buddyEmotionLevelSettings: TData & {
			emotionLevel: TemplateID;
		};
	};
}
export type BuddyEmotionLevelSettingsType = W<BuddyEmotionLevelSettings>;

export interface BuddyEmotionLevelSettingsData {
	emotionAnimation: "BUDDY_ANIMATION_HAPPY" | "BUDDY_ANIMATION_HATE";
	minEmotionPointsRequired?: number;
}

export type BuddyEmotionLevel =
	| "BUDDY_EMOTION_LEVEL_0"
	| "BUDDY_EMOTION_LEVEL_1"
	| "BUDDY_EMOTION_LEVEL_2"
	| "BUDDY_EMOTION_LEVEL_3"
	| "BUDDY_EMOTION_LEVEL_4"
	| "BUDDY_EMOTION_LEVEL_5"
	| "BUDDY_EMOTION_LEVEL_6";

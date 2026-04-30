// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings", 7 entries (variant aliases).

import type { S } from "../_utils";
import type { BuddyEmotionLevelSettings } from "./index";

export type BuddyEmotionLevelSettings0 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_0",
		{
			emotionAnimation: "BUDDY_ANIMATION_HATE";
		}
	>
>;
export type BuddyEmotionLevelSettings1 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_1",
		{
			emotionAnimation: "BUDDY_ANIMATION_HATE";
			minEmotionPointsRequired: 1;
		}
	>
>;
export type BuddyEmotionLevelSettings2 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_2",
		{
			emotionAnimation: "BUDDY_ANIMATION_HAPPY";
			minEmotionPointsRequired: 2;
		}
	>
>;
export type BuddyEmotionLevelSettings3 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_3",
		{
			emotionAnimation: "BUDDY_ANIMATION_HAPPY";
			minEmotionPointsRequired: 4;
		}
	>
>;
export type BuddyEmotionLevelSettings4 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_4",
		{
			emotionAnimation: "BUDDY_ANIMATION_HAPPY";
			minEmotionPointsRequired: 8;
		}
	>
>;
export type BuddyEmotionLevelSettings5 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_5",
		{
			emotionAnimation: "BUDDY_ANIMATION_HAPPY";
			minEmotionPointsRequired: 16;
		}
	>
>;
export type BuddyEmotionLevelSettings6 = S<
	BuddyEmotionLevelSettings<
		"BUDDY_EMOTION_LEVEL_6",
		{
			emotionAnimation: "BUDDY_ANIMATION_HAPPY";
			minEmotionPointsRequired: 32;
		}
	>
>;

export type BuddyEmotionLevelSettingsMasterfileEntry =
	| BuddyEmotionLevelSettings0
	| BuddyEmotionLevelSettings1
	| BuddyEmotionLevelSettings2
	| BuddyEmotionLevelSettings3
	| BuddyEmotionLevelSettings4
	| BuddyEmotionLevelSettings5
	| BuddyEmotionLevelSettings6;

export type BuddyEmotionLevelSettingsTemplateID = BuddyEmotionLevelSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "buddyEmotionLevelSettings", 7 entries (structural types).

export type * from "./variants";

export interface BuddyEmotionLevelSettings<TemplateID extends string = string, TData extends BuddyEmotionLevelSettingsData = BuddyEmotionLevelSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		buddyEmotionLevelSettings: TData & {
			emotionLevel: TemplateID;
		};
	};
}

export interface BuddyEmotionLevelSettingsData {
	emotionAnimation: "BUDDY_ANIMATION_HAPPY" | "BUDDY_ANIMATION_HATE";
	minEmotionPointsRequired?: number;
}

export type BuddyEmotionLevelSettingsMasterfileEntry =
	| BuddyEmotionLevelSettings0
	| BuddyEmotionLevelSettings1
	| BuddyEmotionLevelSettings2
	| BuddyEmotionLevelSettings3
	| BuddyEmotionLevelSettings4
	| BuddyEmotionLevelSettings5
	| BuddyEmotionLevelSettings6;

export type BuddyEmotionLevelSettingsTemplateID = BuddyEmotionLevelSettingsMasterfileEntry["templateId"];

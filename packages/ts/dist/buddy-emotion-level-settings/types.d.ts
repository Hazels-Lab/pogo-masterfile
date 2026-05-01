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

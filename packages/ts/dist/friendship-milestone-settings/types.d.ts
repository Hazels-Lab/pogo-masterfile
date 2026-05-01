// Generated from Pokémon GO masterfile — group "friendshipMilestoneSettings", 6 entries (structural types).

import type { W } from "../_utils";

export interface FriendshipMilestoneSettings<TemplateID extends string = string, TData extends FriendshipMilestoneSettingsData = FriendshipMilestoneSettingsData> {
    templateId: TemplateID;
    data: {
        templateId: TemplateID;
        friendshipMilestoneSettings: TData;
    };
}
export type FriendshipMilestoneSettingsType = W<FriendshipMilestoneSettings>;

export interface FriendshipMilestoneSettingsData {
    attackBonusPercentage: number;
    milestoneXpReward: number;
    minPointsToReach?: number;
    raidBallBonus?: number;
    relativePointsToReach?: number;
    tradingDiscount?: number;
    unlockedLuckyFriendApplicator?: boolean;
    unlockedTrading: Array<"FORM_NON_POKEDEX" | "GMAX_IN_POKEDEX" | "GMAX_NON_POKEDEX" | "LEGENDARY_NON_POKEDEX" | "REGIONAL_NON_POKEDEX" | "REGULAR_IN_POKEDEX" | "REGULAR_NON_POKEDEX" | "SHINY_NON_POKEDEX" | "SPECIAL_IN_POKEDEX">;
}

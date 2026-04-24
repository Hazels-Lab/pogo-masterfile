export interface FriendshipMilestoneSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: FriendshipMilestoneSettingsData<TemplateID>;
}

export interface FriendshipMilestoneSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	friendshipMilestoneSettings: {
		attackBonusPercentage: 1 | 1.03 | 1.05 | 1.07 | 1.1 | 1.12;
		milestoneXpReward: 1000 | 3000 | 10000 | 50000 | 100000 | 150000;
		minPointsToReach?: 1 | 7 | 30 | 90;
		raidBallBonus?: 1 | 2 | 4;
		relativePointsToReach?: 90;
		tradingDiscount?: 0.2 | 0.92 | 0.96;
		unlockedLuckyFriendApplicator?: true;
		unlockedTrading: Array<"FORM_NON_POKEDEX" | "GMAX_IN_POKEDEX" | "GMAX_NON_POKEDEX" | "LEGENDARY_NON_POKEDEX" | "REGIONAL_NON_POKEDEX" | "REGULAR_IN_POKEDEX" | "REGULAR_NON_POKEDEX" | "SHINY_NON_POKEDEX" | "SPECIAL_IN_POKEDEX">;
	};
}

export type FriendshipMilestoneSettings0 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_0">;
export type FriendshipMilestoneSettings1 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_1">;
export type FriendshipMilestoneSettings2 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_2">;
export type FriendshipMilestoneSettings3 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_3">;
export type FriendshipMilestoneSettings4 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_4">;
export type FriendshipMilestoneSettings5 = FriendshipMilestoneSettings<"FRIENDSHIP_LEVEL_5">;

export type FriendshipMilestoneSettingsMasterfileEntry =
	| FriendshipMilestoneSettings0
	| FriendshipMilestoneSettings1
	| FriendshipMilestoneSettings2
	| FriendshipMilestoneSettings3
	| FriendshipMilestoneSettings4
	| FriendshipMilestoneSettings5;

export type FriendshipMilestoneSettingsTemplateID = FriendshipMilestoneSettingsMasterfileEntry["templateId"];

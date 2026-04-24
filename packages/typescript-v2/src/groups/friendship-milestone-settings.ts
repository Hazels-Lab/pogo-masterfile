export interface FriendshipMilestoneSettings<T extends string> {
	templateId: T;
	data: FriendshipMilestoneSettingsData<T>;
}

export interface FriendshipMilestoneSettingsData<T extends string> {
	templateId: T;
	friendshipMilestoneSettings: unknown;
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

export interface BuddyLevelSettings<
	TemplateID extends string = string,
	TData extends BuddyLevelSettingsData = BuddyLevelSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		buddyLevelSettings: TData & {
			level: TemplateID;
		};
	};
}

export interface BuddyLevelSettingsData {
	minNonCumulativePointsRequired?: number;
	unlockedTraits?: Array<string>;
}

export type BuddyLevelSettings0 = BuddyLevelSettings<"BUDDY_LEVEL_0">;
export type BuddyLevelSettings1 = BuddyLevelSettings<
	"BUDDY_LEVEL_1",
	{
		minNonCumulativePointsRequired: 1;
		unlockedTraits: ["MAP_DEPLOY", "EMOTION_INDICATOR", "TRAINING"];
	}
>;
export type BuddyLevelSettings2 = BuddyLevelSettings<
	"BUDDY_LEVEL_2",
	{
		minNonCumulativePointsRequired: 70;
		unlockedTraits: ["MAP_DEPLOY", "EMOTION_INDICATOR", "ENCOUNTER_CAMEO", "PICK_UP_CONSUMABLES", "TRAINING"];
	}
>;
export type BuddyLevelSettings3 = BuddyLevelSettings<
	"BUDDY_LEVEL_3",
	{
		minNonCumulativePointsRequired: 150;
		unlockedTraits: [
			"MAP_DEPLOY",
			"EMOTION_INDICATOR",
			"ENCOUNTER_CAMEO",
			"PICK_UP_CONSUMABLES",
			"PICK_UP_SOUVENIRS",
			"FIND_ATTRACTIVE_POIS",
			"TRAINING",
		];
	}
>;
export type BuddyLevelSettings4 = BuddyLevelSettings<
	"BUDDY_LEVEL_4",
	{
		minNonCumulativePointsRequired: 300;
		unlockedTraits: [
			"MAP_DEPLOY",
			"EMOTION_INDICATOR",
			"ENCOUNTER_CAMEO",
			"PICK_UP_CONSUMABLES",
			"PICK_UP_SOUVENIRS",
			"FIND_ATTRACTIVE_POIS",
			"BEST_BUDDY_ASSET",
			"CP_BOOST",
			"TRAINING",
		];
	}
>;

export type BuddyLevelSettingsMasterfileEntry =
	| BuddyLevelSettings0
	| BuddyLevelSettings1
	| BuddyLevelSettings2
	| BuddyLevelSettings3
	| BuddyLevelSettings4;

export type BuddyLevelSettingsTemplateID = BuddyLevelSettingsMasterfileEntry["templateId"];

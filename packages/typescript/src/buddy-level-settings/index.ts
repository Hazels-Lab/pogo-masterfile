// Generated from Pokémon GO masterfile — group "buddyLevelSettings", 5 entries (structural types).

export type * from "./variants";

export interface BuddyLevelSettings<TemplateID extends string = string, TData extends BuddyLevelSettingsData = BuddyLevelSettingsData> {
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
	unlockedTraits?: Array<
		| "BEST_BUDDY_ASSET"
		| "CP_BOOST"
		| "EMOTION_INDICATOR"
		| "ENCOUNTER_CAMEO"
		| "FIND_ATTRACTIVE_POIS"
		| "MAP_DEPLOY"
		| "PICK_UP_CONSUMABLES"
		| "PICK_UP_SOUVENIRS"
		| "TRAINING"
	>;
}

export type BuddyLevelSettingsMasterfileEntry = BuddyLevelSettings0 | BuddyLevelSettings1 | BuddyLevelSettings2 | BuddyLevelSettings3 | BuddyLevelSettings4;

export type BuddyLevelSettingsTemplateID = BuddyLevelSettingsMasterfileEntry["templateId"];

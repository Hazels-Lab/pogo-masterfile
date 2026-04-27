// Generated from Pokémon GO masterfile — group "buddyLevelSettings", 5 entries (structural types).

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

export interface BreadMoveLevelSettings<T extends string> {
	templateId: T;
	data: BreadMoveLevelSettingsData<T>;
}

export interface BreadMoveLevelSettingsData<T extends string> {
	templateId: T;
	breadMoveLevelSettings: unknown;
}

export type BreadMoveLevelSettings1 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_1">;
export type BreadMoveLevelSettings2 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_2">;
export type BreadMoveLevelSettings3 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_3">;
export type BreadMoveLevelSettings4 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_4">;
export type BreadMoveLevelSettings7 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_7">;
export type BreadMoveLevelSettings8 = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_8">;
export type BreadMoveLevelSettingsZ = BreadMoveLevelSettings<"BREAD_MOVE_LEVEL_SETTINGS_GROUP_Z">;

export type BreadMoveLevelSettingsMasterfileEntry =
	| BreadMoveLevelSettings1
	| BreadMoveLevelSettings2
	| BreadMoveLevelSettings3
	| BreadMoveLevelSettings4
	| BreadMoveLevelSettings7
	| BreadMoveLevelSettings8
	| BreadMoveLevelSettingsZ;

export type BreadMoveLevelSettingsTemplateID = BreadMoveLevelSettingsMasterfileEntry["templateId"];

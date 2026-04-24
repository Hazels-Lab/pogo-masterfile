export interface BreadMoveLevelSettings<T extends string> {
	templateId: T;
	data: BreadMoveLevelSettingsData<T>;
}

export interface BreadMoveLevelSettingsData<T extends string> {
	templateId: T;
	breadMoveLevelSettings: {
		aSettings: [
			{
				candyCost: 1;
				mpCost?: 1;
				stardustCost?: 1;
			},
			{
				candyCost: 100 | 110 | 120 | 130 | 1200;
				mpCost?: 600;
				stardustCost?: 50000;
				xpRewards: 6000;
			},
			{
				candyCost?: 1200;
				mpCost?: 800;
				stardustCost?: 100000;
				xlCandyCost: 40 | 45 | 50 | 55 | 320;
				xpRewards: 8000;
			}
		];
		bSettings: [
			{
				candyCost: 50 | 60 | 70 | 80 | 400;
				mpCost?: 400;
				stardustCost?: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 100 | 110 | 120 | 130 | 1200;
				mpCost?: 600;
				stardustCost?: 50000;
				xpRewards: 6000;
			},
			{
				candyCost?: 1200;
				mpCost?: 800;
				stardustCost?: 100000;
				xlCandyCost: 40 | 45 | 50 | 55 | 320;
				xpRewards: 8000;
			}
		];
		cSettings: [
			{
				candyCost: 50 | 60 | 70 | 80 | 400;
				mpCost?: 400;
				stardustCost?: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 100 | 110 | 120 | 130 | 1200;
				mpCost?: 600;
				stardustCost?: 50000;
				xpRewards: 6000;
			},
			{
				candyCost?: 1200;
				mpCost?: 800;
				stardustCost?: 100000;
				xlCandyCost: 40 | 45 | 50 | 55 | 320;
				xpRewards: 8000;
			}
		];
		group: 7 | 8 | "GROUP_1" | "GROUP_2" | "GROUP_3" | "GROUP_4";
	};
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

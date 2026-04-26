export interface BreadMoveLevelSettings<
	TemplateID extends string = string,
	TData extends BreadMoveLevelSettingsData = BreadMoveLevelSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		breadMoveLevelSettings: TData;
	};
}

export interface BreadMoveLevelSettingsData {
	aSettings?: [
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
		},
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
			xpRewards: number;
		},
		{
			candyCost?: number;
			mpCost?: number;
			stardustCost?: number;
			xlCandyCost: number;
			xpRewards: number;
		},
	];
	bSettings?: [
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
			xpRewards: number;
		},
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
			xpRewards: number;
		},
		{
			candyCost?: number;
			mpCost?: number;
			stardustCost?: number;
			xlCandyCost: number;
			xpRewards: number;
		},
	];
	cSettings?: [
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
			xpRewards: number;
		},
		{
			candyCost: number;
			mpCost?: number;
			stardustCost?: number;
			xpRewards: number;
		},
		{
			candyCost?: number;
			mpCost?: number;
			stardustCost?: number;
			xlCandyCost: number;
			xpRewards: number;
		},
	];
	group?: number | string;
}

export type BreadMoveLevelSettings1 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_1",
	{
		aSettings: [
			{
				candyCost: 1;
				mpCost: 1;
			},
			{
				candyCost: 100;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 40;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 50;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 100;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 40;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 50;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 100;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 40;
				xpRewards: 8000;
			},
		];
		group: "GROUP_1";
	}
>;
export type BreadMoveLevelSettings2 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_2",
	{
		aSettings: [
			{
				candyCost: 1;
				mpCost: 1;
			},
			{
				candyCost: 110;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 45;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 60;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 110;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 45;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 60;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 110;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 45;
				xpRewards: 8000;
			},
		];
		group: "GROUP_2";
	}
>;
export type BreadMoveLevelSettings3 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_3",
	{
		aSettings: [
			{
				candyCost: 1;
				mpCost: 1;
			},
			{
				candyCost: 120;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 50;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 70;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 120;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 50;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 70;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 120;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 50;
				xpRewards: 8000;
			},
		];
		group: "GROUP_3";
	}
>;
export type BreadMoveLevelSettings4 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_4",
	{
		aSettings: [
			{
				candyCost: 1;
				mpCost: 1;
			},
			{
				candyCost: 130;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 80;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 80;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				mpCost: 800;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		group: "GROUP_4";
	}
>;
export type BreadMoveLevelSettings7 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_7",
	{
		aSettings: [
			{
				candyCost: 1;
				stardustCost: 1;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 80;
				stardustCost: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 80;
				stardustCost: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		group: 7;
	}
>;
export type BreadMoveLevelSettings8 = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_8",
	{
		aSettings: [
			{
				candyCost: 1;
				mpCost: 1;
			},
			{
				candyCost: 1200;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				candyCost: 1200;
				mpCost: 800;
				xlCandyCost: 320;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 400;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 1200;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				candyCost: 1200;
				mpCost: 800;
				xlCandyCost: 320;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 400;
				mpCost: 400;
				xpRewards: 4000;
			},
			{
				candyCost: 1200;
				mpCost: 600;
				xpRewards: 6000;
			},
			{
				candyCost: 1200;
				mpCost: 800;
				xlCandyCost: 320;
				xpRewards: 8000;
			},
		];
		group: 8;
	}
>;
export type BreadMoveLevelSettingsZ = BreadMoveLevelSettings<
	"BREAD_MOVE_LEVEL_SETTINGS_GROUP_Z",
	{
		aSettings: [
			{
				candyCost: 1;
				stardustCost: 1;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		bSettings: [
			{
				candyCost: 80;
				stardustCost: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		cSettings: [
			{
				candyCost: 80;
				stardustCost: 25000;
				xpRewards: 4000;
			},
			{
				candyCost: 130;
				stardustCost: 50000;
				xpRewards: 6000;
			},
			{
				stardustCost: 100000;
				xlCandyCost: 55;
				xpRewards: 8000;
			},
		];
		group: 7;
	}
>;

export type BreadMoveLevelSettingsMasterfileEntry =
	| BreadMoveLevelSettings1
	| BreadMoveLevelSettings2
	| BreadMoveLevelSettings3
	| BreadMoveLevelSettings4
	| BreadMoveLevelSettings7
	| BreadMoveLevelSettings8
	| BreadMoveLevelSettingsZ;

export type BreadMoveLevelSettingsTemplateID = BreadMoveLevelSettingsMasterfileEntry["templateId"];

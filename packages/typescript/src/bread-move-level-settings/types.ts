// Generated from Pokémon GO masterfile — group "breadMoveLevelSettings", 7 entries (structural types).

export interface BreadMoveLevelSettings<TemplateID extends string = string, TData extends BreadMoveLevelSettingsData = BreadMoveLevelSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		breadMoveLevelSettings: TData;
	};
}

export interface BreadMoveLevelSettingsData {
	aSettings: [
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
	bSettings: [
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
	cSettings: [
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
	group: number | "GROUP_1" | "GROUP_2" | "GROUP_3" | "GROUP_4";
}

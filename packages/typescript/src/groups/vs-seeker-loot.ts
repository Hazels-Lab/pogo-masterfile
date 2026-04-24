export interface VsSeekerLoot<TemplateID extends string> {
	templateId: TemplateID;
	data: VsSeekerLootData<TemplateID>;
}

export interface VsSeekerLootData<TemplateID extends string> {
	templateId: TemplateID;
	vsSeekerLoot: {
		rankLevel: VsSeekerLootRankLevel;
		reward: VsSeekerLootReward;
		rewardTrack?: "PREMIUM";
	};
}

export type VsSeekerLootRankLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export type VsSeekerLootReward = [
	{
		item?: {
			count: 2 | 3 | 1200 | 1320 | 1480 | 1600 | 1720 | 1880 | 2120 | 2280 | 2400 | 2640 | 2800 | 2920 | 2960 | 3000 | 3080 | 3200 | 3440 | 3480 | 3600 | 3760 | 4240 | 4560 | 4800 | 5600 | 5840 | 6000 | 6160 | 6960 | 7200;
			item?: "ITEM_RARE_CANDY";
			stardust?: true;
		};
		itemRankingLootTableCount?: 1;
		pokemonReward?: true;
	},
	{
		item?: {
			count: 2 | 3 | 3000 | 6000;
			item?: "ITEM_RARE_CANDY";
			stardust?: true;
		};
		itemRankingLootTableCount?: 1;
		pokemonReward?: true;
	},
	{
		item?: {
			count: 2 | 3 | 3000 | 6000;
			item?: "ITEM_RARE_CANDY";
			stardust?: true;
		};
		itemRankingLootTableCount?: 1;
		pokemonReward?: true;
	},
	{
		item?: {
			count: 2 | 3 | 3000 | 6000;
			item?: "ITEM_RARE_CANDY";
			stardust?: true;
		};
		itemRankingLootTableCount?: 1;
		pokemonReward?: true;
	},
	{
		item?: {
			count: 2 | 3 | 2400 | 2640 | 2960 | 3000 | 3200 | 3440 | 3760 | 4240 | 4560 | 4800 | 5280 | 5600 | 5840 | 5920 | 6000 | 6160 | 6400 | 6880 | 6960 | 7200 | 7520 | 8480 | 9120 | 9600 | 11200 | 11680 | 12320 | 13920 | 14400;
			item?: "ITEM_RARE_CANDY";
			stardust?: true;
		};
		itemRankingLootTableCount?: 1;
		pokemonReward?: true;
	}
];

export type VsSeekerLoot10Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_10_FREE">;
export type VsSeekerLoot10Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_10_PREMIUM">;
export type VsSeekerLoot11Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_11_FREE">;
export type VsSeekerLoot11Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_11_PREMIUM">;
export type VsSeekerLoot12Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_12_FREE">;
export type VsSeekerLoot12Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_12_PREMIUM">;
export type VsSeekerLoot13Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_13_FREE">;
export type VsSeekerLoot13Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_13_PREMIUM">;
export type VsSeekerLoot14Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_14_FREE">;
export type VsSeekerLoot14Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_14_PREMIUM">;
export type VsSeekerLoot15Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_15_FREE">;
export type VsSeekerLoot15Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_15_PREMIUM">;
export type VsSeekerLoot16Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_16_FREE">;
export type VsSeekerLoot16Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_16_PREMIUM">;
export type VsSeekerLoot17Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_17_FREE">;
export type VsSeekerLoot17Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_17_PREMIUM">;
export type VsSeekerLoot18Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_18_FREE">;
export type VsSeekerLoot18Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_18_PREMIUM">;
export type VsSeekerLoot19Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_19_FREE">;
export type VsSeekerLoot19Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_19_PREMIUM">;
export type VsSeekerLoot1Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_1_FREE">;
export type VsSeekerLoot1Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_1_PREMIUM">;
export type VsSeekerLoot20Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_20_FREE">;
export type VsSeekerLoot20Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_20_PREMIUM">;
export type VsSeekerLoot21Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_21_FREE">;
export type VsSeekerLoot21Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_21_PREMIUM">;
export type VsSeekerLoot22Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_22_FREE">;
export type VsSeekerLoot22Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_22_PREMIUM">;
export type VsSeekerLoot23Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_23_FREE">;
export type VsSeekerLoot23Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_23_PREMIUM">;
export type VsSeekerLoot24Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_24_FREE">;
export type VsSeekerLoot24Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_24_PREMIUM">;
export type VsSeekerLoot2Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_2_FREE">;
export type VsSeekerLoot2Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_2_PREMIUM">;
export type VsSeekerLoot3Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_3_FREE">;
export type VsSeekerLoot3Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_3_PREMIUM">;
export type VsSeekerLoot4Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_4_FREE">;
export type VsSeekerLoot4Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_4_PREMIUM">;
export type VsSeekerLoot5Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_5_FREE">;
export type VsSeekerLoot5Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_5_PREMIUM">;
export type VsSeekerLoot6Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_6_FREE">;
export type VsSeekerLoot6Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_6_PREMIUM">;
export type VsSeekerLoot7Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_7_FREE">;
export type VsSeekerLoot7Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_7_PREMIUM">;
export type VsSeekerLoot8Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_8_FREE">;
export type VsSeekerLoot8Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_8_PREMIUM">;
export type VsSeekerLoot9Free = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_9_FREE">;
export type VsSeekerLoot9Premium = VsSeekerLoot<"VS_SEEKER_LOOT_PER_WIN_SETTINGS_RANK_9_PREMIUM">;

export type VsSeekerLootMasterfileEntry =
	| VsSeekerLoot10Free
	| VsSeekerLoot10Premium
	| VsSeekerLoot11Free
	| VsSeekerLoot11Premium
	| VsSeekerLoot12Free
	| VsSeekerLoot12Premium
	| VsSeekerLoot13Free
	| VsSeekerLoot13Premium
	| VsSeekerLoot14Free
	| VsSeekerLoot14Premium
	| VsSeekerLoot15Free
	| VsSeekerLoot15Premium
	| VsSeekerLoot16Free
	| VsSeekerLoot16Premium
	| VsSeekerLoot17Free
	| VsSeekerLoot17Premium
	| VsSeekerLoot18Free
	| VsSeekerLoot18Premium
	| VsSeekerLoot19Free
	| VsSeekerLoot19Premium
	| VsSeekerLoot1Free
	| VsSeekerLoot1Premium
	| VsSeekerLoot20Free
	| VsSeekerLoot20Premium
	| VsSeekerLoot21Free
	| VsSeekerLoot21Premium
	| VsSeekerLoot22Free
	| VsSeekerLoot22Premium
	| VsSeekerLoot23Free
	| VsSeekerLoot23Premium
	| VsSeekerLoot24Free
	| VsSeekerLoot24Premium
	| VsSeekerLoot2Free
	| VsSeekerLoot2Premium
	| VsSeekerLoot3Free
	| VsSeekerLoot3Premium
	| VsSeekerLoot4Free
	| VsSeekerLoot4Premium
	| VsSeekerLoot5Free
	| VsSeekerLoot5Premium
	| VsSeekerLoot6Free
	| VsSeekerLoot6Premium
	| VsSeekerLoot7Free
	| VsSeekerLoot7Premium
	| VsSeekerLoot8Free
	| VsSeekerLoot8Premium
	| VsSeekerLoot9Free
	| VsSeekerLoot9Premium;

export type VsSeekerLootTemplateID = VsSeekerLootMasterfileEntry["templateId"];

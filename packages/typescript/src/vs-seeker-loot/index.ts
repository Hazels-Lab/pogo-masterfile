// Generated from Pokémon GO masterfile — group "vsSeekerLoot", 48 entries (structural types).

export type * from "./variants";

export interface VsSeekerLoot<TemplateID extends string = string, TData extends VsSeekerLootData = VsSeekerLootData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		vsSeekerLoot: TData;
	};
}

export interface VsSeekerLootData {
	rankLevel: number;
	reward: [
		{
			item?: {
				count: number;
				item?: "ITEM_RARE_CANDY";
				stardust?: boolean;
			};
			itemRankingLootTableCount?: number;
			pokemonReward?: boolean;
		},
		{
			item?: {
				count: number;
				item?: "ITEM_RARE_CANDY";
				stardust?: boolean;
			};
			itemRankingLootTableCount?: number;
			pokemonReward?: boolean;
		},
		{
			item?: {
				count: number;
				item?: "ITEM_RARE_CANDY";
				stardust?: boolean;
			};
			itemRankingLootTableCount?: number;
			pokemonReward?: boolean;
		},
		{
			item?: {
				count: number;
				item?: "ITEM_RARE_CANDY";
				stardust?: boolean;
			};
			itemRankingLootTableCount?: number;
			pokemonReward?: boolean;
		},
		{
			item?: {
				count: number;
				item?: "ITEM_RARE_CANDY";
				stardust?: boolean;
			};
			itemRankingLootTableCount?: number;
			pokemonReward?: boolean;
		},
	];
	rewardTrack?: "PREMIUM";
}

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

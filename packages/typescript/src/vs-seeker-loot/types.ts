// Generated from Pokémon GO masterfile — group "vsSeekerLoot", 48 entries (structural types).

import type { W } from "../_utils";

export interface VsSeekerLoot<TemplateID extends string = string, TData extends VsSeekerLootData = VsSeekerLootData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		vsSeekerLoot: TData;
	};
}
export type VsSeekerLootType = W<VsSeekerLoot>;

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

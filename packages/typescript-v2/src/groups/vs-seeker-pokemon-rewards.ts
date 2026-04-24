export interface VsSeekerPokemonRewards<T extends string> {
	templateId: T;
	data: VsSeekerPokemonRewardsData<T>;
}

export interface VsSeekerPokemonRewardsData<T extends string> {
	templateId: T;
	vsSeekerPokemonRewards: unknown;
}

export type VsSeekerPokemonRewardsFree = VsSeekerPokemonRewards<"VS_SEEKER_POKEMON_REWARDS_FREE">;
export type VsSeekerPokemonRewardsPremium = VsSeekerPokemonRewards<"VS_SEEKER_POKEMON_REWARDS_PREMIUM">;

export type VsSeekerPokemonRewardsMasterfileEntry =
	| VsSeekerPokemonRewardsFree
	| VsSeekerPokemonRewardsPremium;

export type VsSeekerPokemonRewardsTemplateID = VsSeekerPokemonRewardsMasterfileEntry["templateId"];

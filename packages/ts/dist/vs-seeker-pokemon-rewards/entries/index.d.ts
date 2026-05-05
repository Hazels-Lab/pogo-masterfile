// Generated from Pokémon GO masterfile — group "vsSeekerPokemonRewards", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { VsSeekerPokemonRewards } from "../types";

export type VsSeekerPokemonRewardsFree = S<VsSeekerPokemonRewards<"VS_SEEKER_POKEMON_REWARDS_FREE">>;
export type VsSeekerPokemonRewardsPremium = S<
	VsSeekerPokemonRewards<
		"VS_SEEKER_POKEMON_REWARDS_PREMIUM",
		{
			rewardTrack: "PREMIUM";
		}
	>
>;

export type VsSeekerPokemonRewardsMasterfileEntry = VsSeekerPokemonRewardsFree | VsSeekerPokemonRewardsPremium;

export type VsSeekerPokemonRewardsTemplateID = VsSeekerPokemonRewardsMasterfileEntry["templateId"];

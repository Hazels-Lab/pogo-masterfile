// Generated from Pokémon GO masterfile — group "rollBack", 6 entries (variant aliases).

import type { S } from "../../_utils";
import type { RollBack } from "../types";

export type RollBackCombatVnextUseMatchingStartTurnForFastAttackEnable = S<RollBack<"COMBAT_VNEXT_USE_MATCHING_START_TURN_FOR_FAST_ATTACK_ENABLE_ROLL_BACK">>;
export type RollBackFriendsAndSocialLazyLoad = S<RollBack<"FRIENDS_AND_SOCIAL_LAZY_LOAD_ROLL_BACK">>;
export type RollBackMapRadiusEnhanceGraphics = S<RollBack<"MAP_RADIUS_ENHANCE_GRAPHICS_ROLL_BACK">>;
export type RollBackOptimizeRaidLobbyAvatarDetails = S<RollBack<"OPTIMIZE_RAID_LOBBY_AVATAR_DETAILS_ROLL_BACK">>;
export type RollBackPeriodicMapUnload = S<RollBack<"PERIODIC_MAP_UNLOAD_ROLL_BACK">>;
export type RollBackRealtimePokemonShadowNullRootBoneCrashFix = S<RollBack<"REALTIME_POKEMON_SHADOW_NULL_ROOT_BONE_CRASH_FIX_ROLL_BACK">>;

export type RollBackMasterfileEntry =
	| RollBackCombatVnextUseMatchingStartTurnForFastAttackEnable
	| RollBackFriendsAndSocialLazyLoad
	| RollBackMapRadiusEnhanceGraphics
	| RollBackOptimizeRaidLobbyAvatarDetails
	| RollBackPeriodicMapUnload
	| RollBackRealtimePokemonShadowNullRootBoneCrashFix;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];

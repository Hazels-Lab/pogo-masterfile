// Generated from Pokémon GO masterfile — group "rollBack", 6 entries (variant aliases).

import type { S } from "../../_utils";
import type { RollBack } from "../types";

export type RollBackCombatVnextUseMatchingStartTurnForFastAttackEnable = S<RollBack<"COMBAT_VNEXT_USE_MATCHING_START_TURN_FOR_FAST_ATTACK_ENABLE_ROLL_BACK">>;
export type RollBackFriendsAndSocialLazyLoad = S<RollBack<"FRIENDS_AND_SOCIAL_LAZY_LOAD_ROLL_BACK">>;
export type RollBackOptimizeRaidLobbyAvatarDetails = S<RollBack<"OPTIMIZE_RAID_LOBBY_AVATAR_DETAILS_ROLL_BACK">>;
export type RollBackPeriodicMapUnload = S<RollBack<"PERIODIC_MAP_UNLOAD_ROLL_BACK">>;
export type RollBackScenePopMemCleanup = S<RollBack<"SCENE_POP_MEM_CLEANUP_ROLL_BACK">>;
export type RollBackUnloadAllAssetsCodeGate = S<RollBack<"UNLOAD_ALL_ASSETS_CODE_GATE">>;

export type RollBackMasterfileEntry =
	| RollBackCombatVnextUseMatchingStartTurnForFastAttackEnable
	| RollBackFriendsAndSocialLazyLoad
	| RollBackOptimizeRaidLobbyAvatarDetails
	| RollBackPeriodicMapUnload
	| RollBackScenePopMemCleanup
	| RollBackUnloadAllAssetsCodeGate;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];

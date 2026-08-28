// Generated from Pokémon GO masterfile — group "rollBack", 4 entries (variant aliases).

import type { S } from "../../_utils";
import type { RollBack } from "../types";

export type RollBackFriendsAndSocialLazyLoad = S<RollBack<"FRIENDS_AND_SOCIAL_LAZY_LOAD_ROLL_BACK">>;
export type RollBackGetFriendDetailsPaginated = S<RollBack<"GET_FRIEND_DETAILS_PAGINATED_ROLL_BACK">>;
export type RollBackMapRadiusEnhanceGraphics = S<RollBack<"MAP_RADIUS_ENHANCE_GRAPHICS_ROLL_BACK">>;
export type RollBackPeriodicMapUnload = S<RollBack<"PERIODIC_MAP_UNLOAD_ROLL_BACK">>;

export type RollBackMasterfileEntry =
	| RollBackFriendsAndSocialLazyLoad
	| RollBackGetFriendDetailsPaginated
	| RollBackMapRadiusEnhanceGraphics
	| RollBackPeriodicMapUnload;

export type RollBackTemplateID = RollBackMasterfileEntry["templateId"];

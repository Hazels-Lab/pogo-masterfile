// Generated from Pokémon GO masterfile — group "itemSettings", split "xp-boost", 2 entries.

import type { S } from "../../_utils";
import type { ItemSettings, ItemSettingsData } from "../types";

export type ItemSettingsItemLuckyEgg = S<ItemSettings<"ITEM_LUCKY_EGG", {
    category: "ITEM_CATEGORY_XP_BOOST";
    dropTrainerLevel: 1;
    itemType: "ITEM_TYPE_XP_BOOST";
    xpBoost: {
        boostDurationMs: 1800000;
        xpMultiplier: 2;
    };
}>>;
export type ItemSettingsItemLuckyFriendApplicator = S<ItemSettings<"ITEM_LUCKY_FRIEND_APPLICATOR", {
    category: "ITEM_CATEGORY_XP_BOOST";
    itemType: "ITEM_TYPE_FRIEND_BOOST";
}>>;

export type ItemSettingsXpBoostMasterfileEntry = ItemSettingsItemLuckyEgg | ItemSettingsItemLuckyFriendApplicator;

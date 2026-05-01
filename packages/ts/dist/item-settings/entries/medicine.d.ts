// Generated from Pokémon GO masterfile — group "itemSettings", split "medicine", 6 entries.

import type { S } from "../../_utils";
import type { ItemSettings, ItemSettingsData } from "../types";

export type ItemSettingsItemHyperPotion = S<ItemSettings<"ITEM_HYPER_POTION", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 15;
    itemType: "ITEM_TYPE_POTION";
    potion: {
        staAmount: 200;
    };
}>>;
export type ItemSettingsItemMaxPotion = S<ItemSettings<"ITEM_MAX_POTION", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 25;
    itemType: "ITEM_TYPE_POTION";
    potion: {
        staPercent: 1;
    };
}>>;
export type ItemSettingsItemMaxRevive = S<ItemSettings<"ITEM_MAX_REVIVE", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 30;
    itemType: "ITEM_TYPE_REVIVE";
    revive: {
        staPercent: 1;
    };
}>>;
export type ItemSettingsItemPotion = S<ItemSettings<"ITEM_POTION", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 5;
    itemType: "ITEM_TYPE_POTION";
    potion: {
        staAmount: 20;
    };
}>>;
export type ItemSettingsItemRevive = S<ItemSettings<"ITEM_REVIVE", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 5;
    itemType: "ITEM_TYPE_REVIVE";
    revive: {
        staPercent: 0.5;
    };
}>>;
export type ItemSettingsItemSuperPotion = S<ItemSettings<"ITEM_SUPER_POTION", {
    category: "ITEM_CATEGORY_MEDICINE";
    dropTrainerLevel: 10;
    itemType: "ITEM_TYPE_POTION";
    potion: {
        staAmount: 50;
    };
}>>;

export type ItemSettingsMedicineMasterfileEntry = ItemSettingsItemHyperPotion | ItemSettingsItemMaxPotion | ItemSettingsItemMaxRevive | ItemSettingsItemPotion | ItemSettingsItemRevive | ItemSettingsItemSuperPotion;

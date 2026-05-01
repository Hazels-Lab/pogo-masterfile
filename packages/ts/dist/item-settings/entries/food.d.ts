// Generated from Pokémon GO masterfile — group "itemSettings", split "food", 7 entries.

import type { S } from "../../_utils";
import type { ItemSettings, ItemSettingsData } from "../types";

export type ItemSettingsItemBlukBerry = S<ItemSettings<"ITEM_BLUK_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 100;
    food: {
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CAP_NO_MOVEMENT"
        ];
        itemEffectPercent: [
            1
        ];
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemGoldenPinapBerry = S<ItemSettings<"ITEM_GOLDEN_PINAP_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 20;
    food: {
        berryMultiplier: 2;
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CANDY_AWARD",
            "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW"
        ];
        itemEffectPercent: [
            2.3334,
            1.8
        ];
        mapDurationMs: "10800000";
        numBuddyAffectionPoints: 2;
        numBuddyHungerPoints: 6;
        remoteBerryMultiplier: 0.5;
        timeFullDurationMs: "10800000";
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemGoldenRazzBerry = S<ItemSettings<"ITEM_GOLDEN_RAZZ_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 10;
    food: {
        berryMultiplier: 1;
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW",
            "ITEM_EFFECT_FULL_MOTIVATION"
        ];
        itemEffectPercent: [
            2.5,
            1
        ];
        mapDurationMs: "10800000";
        numBuddyAffectionPoints: 2;
        numBuddyHungerPoints: 6;
        remoteBerryMultiplier: 1;
        timeFullDurationMs: "10800000";
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemNanabBerry = S<ItemSettings<"ITEM_NANAB_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 4;
    food: {
        berryMultiplier: 1.25;
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CAP_TARGET_SLOW"
        ];
        itemEffectPercent: [
            0
        ];
        mapDurationMs: "3600000";
        numBuddyAffectionPoints: 1;
        numBuddyHungerPoints: 2;
        remoteBerryMultiplier: 0.3125;
        timeFullDurationMs: "3600000";
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemPinapBerry = S<ItemSettings<"ITEM_PINAP_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 18;
    food: {
        berryMultiplier: 1;
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CANDY_AWARD"
        ];
        itemEffectPercent: [
            2
        ];
        mapDurationMs: "3600000";
        numBuddyAffectionPoints: 1;
        numBuddyHungerPoints: 2;
        remoteBerryMultiplier: 0.25;
        timeFullDurationMs: "3600000";
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemRazzBerry = S<ItemSettings<"ITEM_RAZZ_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 8;
    food: {
        berryMultiplier: 1;
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW"
        ];
        itemEffectPercent: [
            1.5
        ];
        mapDurationMs: "3600000";
        numBuddyAffectionPoints: 1;
        numBuddyHungerPoints: 2;
        remoteBerryMultiplier: 0.25;
        timeFullDurationMs: "3600000";
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;
export type ItemSettingsItemWeparBerry = S<ItemSettings<"ITEM_WEPAR_BERRY", {
    category: "ITEM_CATEGORY_FOOD";
    dropTrainerLevel: 100;
    food: {
        growthPercent: 0.1;
        itemEffect: [
            "ITEM_EFFECT_CAP_TARGET_MAX"
        ];
        itemEffectPercent: [
            1
        ];
    };
    itemType: "ITEM_TYPE_FOOD";
}>>;

export type ItemSettingsFoodMasterfileEntry = ItemSettingsItemBlukBerry | ItemSettingsItemGoldenPinapBerry | ItemSettingsItemGoldenRazzBerry | ItemSettingsItemNanabBerry | ItemSettingsItemPinapBerry | ItemSettingsItemRazzBerry | ItemSettingsItemWeparBerry;

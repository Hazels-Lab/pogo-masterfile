// Generated from Pokémon GO masterfile — group "tappableSettings", 5 entries (variant aliases).

import type { S } from "../_utils";
import type { TappableSettings, TappableSettingsData } from "./index";

export type TappableSettingsSettings = S<TappableSettings<"TAPPABLE_SETTINGS", {
    avgTappablesInView: 1;
    buddyFovDegress: 130;
    movementRespawnThresholdMeters: 5;
    spawnAngleDegrees: 45;
}>>;
export type TappableSettingsSettingsBreakfast = S<TappableSettings<"TAPPABLE_SETTINGS_BREAKFAST", {
    avgTappablesInView: 1;
    buddyFovDegress: 130;
    movementRespawnThresholdMeters: 5;
    removeWhenTapped: true;
    spawnAngleDegrees: 45;
    "type": "TAPPABLE_TYPE_BREAKFAST";
}>>;
export type TappableSettingsTypeHat = S<TappableSettings<"TAPPABLE_TYPE_HAT", {
    removeWhenTapped: true;
    tappableAssetKey: "TAPPABLE_TYPE_HAT";
}>>;
export type TappableSettingsTypeMaple = S<TappableSettings<"TAPPABLE_TYPE_MAPLE", {
    removeWhenTapped: true;
    tappableAssetKey: "TAPPABLE_TYPE_MAPLE";
}>>;
export type TappableSettingsTypePokeball = S<TappableSettings<"TAPPABLE_TYPE_POKEBALL", {
    removeWhenTapped: true;
    tappableAssetKey: "TAPPABLE_TYPE_POKEBALL";
}>>;

export type TappableSettingsMasterfileEntry = TappableSettingsSettings | TappableSettingsSettingsBreakfast | TappableSettingsTypeHat | TappableSettingsTypeMaple | TappableSettingsTypePokeball;

export type TappableSettingsTemplateID = TappableSettingsMasterfileEntry["templateId"];

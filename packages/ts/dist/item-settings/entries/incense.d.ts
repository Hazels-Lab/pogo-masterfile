// Generated from Pokémon GO masterfile — group "itemSettings", split "incense", 6 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemIncenseBelugaBox = S<
	ItemSettings<
		"ITEM_INCENSE_BELUGA_BOX",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseDailyAdventure = S<
	ItemSettings<
		"ITEM_INCENSE_DAILY_ADVENTURE",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 6;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 1800;
				spawnTableProbability: 0.25;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseDayBonus = S<
	ItemSettings<
		"ITEM_INCENSE_DAY_BONUS",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseNightBonus = S<
	ItemSettings<
		"ITEM_INCENSE_NIGHT_BONUS",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			incense: {
				incenseLifetimeSeconds: 3600;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseOrdinary = S<
	ItemSettings<
		"ITEM_INCENSE_ORDINARY",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 7200;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;
export type ItemSettingsItemIncenseSparkly = S<
	ItemSettings<
		"ITEM_INCENSE_SPARKLY",
		{
			category: "ITEM_CATEGORY_INCENSE";
			dropTrainerLevel: 1;
			incense: {
				incenseLifetimeSeconds: 1800;
				spawnTableProbability: 1;
			};
			itemType: "ITEM_TYPE_INCENSE";
		}
	>
>;

export type ItemSettingsIncenseMasterfileEntry =
	| ItemSettingsItemIncenseBelugaBox
	| ItemSettingsItemIncenseDailyAdventure
	| ItemSettingsItemIncenseDayBonus
	| ItemSettingsItemIncenseNightBonus
	| ItemSettingsItemIncenseOrdinary
	| ItemSettingsItemIncenseSparkly;

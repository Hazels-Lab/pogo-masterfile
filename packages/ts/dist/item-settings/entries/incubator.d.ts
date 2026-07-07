// Generated from Pokémon GO masterfile — group "itemSettings", split "incubator", 5 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemIncubatorBasic = S<
	ItemSettings<
		"ITEM_INCUBATOR_BASIC",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 1;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
				uses: 3;
			};
			itemId: "ITEM_INCUBATOR_BASIC";
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorBasicUnlimited = S<
	ItemSettings<
		"ITEM_INCUBATOR_BASIC_UNLIMITED",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 100;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
			};
			itemId: "ITEM_INCUBATOR_BASIC_UNLIMITED";
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorSpecial = S<
	ItemSettings<
		"ITEM_INCUBATOR_SPECIAL",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 15;
			eggIncubator: {
				distanceMultiplier: 1;
				incubatorType: "INCUBATOR_DISTANCE";
			};
			hideItemInInventory: true;
			ignoreInventorySpace: true;
			itemId: "ITEM_INCUBATOR_SPECIAL";
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorSuper = S<
	ItemSettings<
		"ITEM_INCUBATOR_SUPER",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 1;
			eggIncubator: {
				distanceMultiplier: 0.6666667;
				incubatorType: "INCUBATOR_DISTANCE";
				uses: 3;
			};
			itemId: "ITEM_INCUBATOR_SUPER";
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;
export type ItemSettingsItemIncubatorTimed = S<
	ItemSettings<
		"ITEM_INCUBATOR_TIMED",
		{
			category: "ITEM_CATEGORY_INCUBATOR";
			dropTrainerLevel: 100;
			eggIncubator: {
				distanceMultiplier: 1;
				expiredIncubatorReplacement: {
					incubatorReplacement: "ITEM_INCUBATOR_BASIC";
					usesCountOverride: 1;
				};
				incubatorType: "INCUBATOR_DISTANCE";
				maxHatchSummaryEntries: 10;
				useBonusIncubatorAttributes: true;
			};
			itemId: "ITEM_INCUBATOR_TIMED";
			itemType: "ITEM_TYPE_INCUBATOR";
		}
	>
>;

export type ItemSettingsIncubatorMasterfileEntry =
	| ItemSettingsItemIncubatorBasic
	| ItemSettingsItemIncubatorBasicUnlimited
	| ItemSettingsItemIncubatorSpecial
	| ItemSettingsItemIncubatorSuper
	| ItemSettingsItemIncubatorTimed;

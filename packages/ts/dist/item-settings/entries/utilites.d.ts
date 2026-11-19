// Generated from Pokémon GO masterfile — group "itemSettings", split "utilites", 2 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemBreakfast = S<
	ItemSettings<
		"ITEM_BREAKFAST",
		{
			category: "ITEM_CATEGORY_UTILITES";
			dropTrainerLevel: 1;
			ignoreInventorySpace: true;
			itemCap: 1;
			itemId: "ITEM_BREAKFAST";
			itemType: "ITEM_TYPE_BREAKFAST";
		}
	>
>;
export type ItemSettingsItemSoftSfida = S<
	ItemSettings<
		"ITEM_SOFT_SFIDA",
		{
			category: "ITEM_CATEGORY_UTILITES";
			dropTrainerLevel: 99;
			ignoreInventorySpace: true;
			itemId: "ITEM_SOFT_SFIDA";
			itemType: "ITEM_TYPE_SOFT_SFIDA";
		}
	>
>;

export type ItemSettingsUtilitesMasterfileEntry = ItemSettingsItemBreakfast | ItemSettingsItemSoftSfida;

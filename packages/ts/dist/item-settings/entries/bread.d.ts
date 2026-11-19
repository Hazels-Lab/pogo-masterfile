// Generated from Pokémon GO masterfile — group "itemSettings", split "bread", 1 entry.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemMpReplenish = S<
	ItemSettings<
		"ITEM_MP_REPLENISH",
		{
			category: "ITEM_CATEGORY_BREAD";
			dropTrainerLevel: 1;
			itemCap: 12;
			itemId: "ITEM_MP_REPLENISH";
			itemType: "ITEM_TYPE_MP_REPLENISH";
			replenishMp: {
				mpAmount: 800;
			};
		}
	>
>;

export type ItemSettingsBreadMasterfileEntry = ItemSettingsItemMpReplenish;

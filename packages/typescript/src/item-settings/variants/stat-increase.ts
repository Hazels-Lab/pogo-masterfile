// Generated from Pokémon GO masterfile — group "itemSettings", split "stat-increase", 2 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "..";

export type ItemSettingsItemSingleStatIncrease = S<
	ItemSettings<
		"ITEM_SINGLE_STAT_INCREASE",
		{
			category: "ITEM_CATEGORY_STAT_INCREASE";
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_STAT_INCREASE";
			statIncrease: {
				statsToIncreaseLimit: 1;
			};
		}
	>
>;
export type ItemSettingsItemTripleStatIncrease = S<
	ItemSettings<
		"ITEM_TRIPLE_STAT_INCREASE",
		{
			category: "ITEM_CATEGORY_STAT_INCREASE";
			ignoreInventorySpace: true;
			itemType: "ITEM_TYPE_STAT_INCREASE";
			statIncrease: {
				statsToIncreaseLimit: 3;
			};
		}
	>
>;

// Generated from Pokémon GO masterfile — group "itemSettings", split "candy", 2 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemRareCandy = S<
	ItemSettings<
		"ITEM_RARE_CANDY",
		{
			category: "ITEM_CATEGORY_CANDY";
			dropTrainerLevel: 5;
			itemType: "ITEM_TYPE_CANDY";
		}
	>
>;
export type ItemSettingsItemXlRareCandy = S<
	ItemSettings<
		"ITEM_XL_RARE_CANDY",
		{
			category: "ITEM_CATEGORY_CANDY";
			dropTrainerLevel: 31;
			itemType: "ITEM_TYPE_CANDY";
		}
	>
>;

export type ItemSettingsCandyMasterfileEntry = ItemSettingsItemRareCandy | ItemSettingsItemXlRareCandy;

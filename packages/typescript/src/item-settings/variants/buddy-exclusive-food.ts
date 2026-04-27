// Generated from Pokémon GO masterfile — group "itemSettings", split "buddy-exclusive-food", 1 entry.

import type { S } from "../../_utils";
import type { ItemSettings } from "..";

export type ItemSettingsItemPoffin = S<
	ItemSettings<
		"ITEM_POFFIN",
		{
			category: "ITEM_CATEGORY_BUDDY_EXCLUSIVE_FOOD";
			food: {
				mapDurationMs: "21600000";
				numBuddyAffectionPoints: 1;
				numBuddyHungerPoints: 6;
				timeFullDurationMs: "21600000";
			};
			itemType: "ITEM_TYPE_FOOD";
		}
	>
>;

// Generated from Pokémon GO masterfile — group "itemSettings", split "stardust-boost", 1 entry.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemStarPiece = S<
	ItemSettings<
		"ITEM_STAR_PIECE",
		{
			category: "ITEM_CATEGORY_STARDUST_BOOST";
			dropTrainerLevel: 1;
			itemId: "ITEM_STAR_PIECE";
			itemType: "ITEM_TYPE_STARDUST_BOOST";
			stardustBoost: {
				boostDurationMs: 1800000;
				stardustMultiplier: 1.5;
			};
		}
	>
>;

export type ItemSettingsStardustBoostMasterfileEntry = ItemSettingsItemStarPiece;

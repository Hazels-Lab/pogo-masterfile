// Generated from Pokémon GO masterfile — group "itemSettings", split "boost", 4 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemMaxBoost = S<
	ItemSettings<
		"ITEM_MAX_BOOST",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 12;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemXAttack = S<
	ItemSettings<
		"ITEM_X_ATTACK",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemXDefense = S<
	ItemSettings<
		"ITEM_X_DEFENSE",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;
export type ItemSettingsItemXMiracle = S<
	ItemSettings<
		"ITEM_X_MIRACLE",
		{
			category: "ITEM_CATEGORY_BOOST";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_BATTLE";
		}
	>
>;

export type ItemSettingsBoostMasterfileEntry = ItemSettingsItemMaxBoost | ItemSettingsItemXAttack | ItemSettingsItemXDefense | ItemSettingsItemXMiracle;

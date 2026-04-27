// Generated from Pokémon GO masterfile — group "itemSettings", split "inventory-upgrade", 3 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "..";

export type ItemSettingsItemItemStorageUpgrade = S<
	ItemSettings<
		"ITEM_ITEM_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_ITEM_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;
export type ItemSettingsItemPokemonStorageUpgrade = S<
	ItemSettings<
		"ITEM_POKEMON_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_POKEMON_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;
export type ItemSettingsItemPostcardStorageUpgrade = S<
	ItemSettings<
		"ITEM_POSTCARD_STORAGE_UPGRADE",
		{
			category: "ITEM_CATEGORY_INVENTORY_UPGRADE";
			dropTrainerLevel: 100;
			inventoryUpgrade: {
				additionalStorage: 50;
				upgradeType: "INCREASE_POSTCARD_STORAGE";
			};
			itemType: "ITEM_TYPE_INVENTORY_UPGRADE";
		}
	>
>;

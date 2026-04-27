// Generated from Pokémon GO masterfile — group "itemSettings", split "pokeball", 8 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemBeastBall = S<
	ItemSettings<
		"ITEM_BEAST_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemGreatBall = S<
	ItemSettings<
		"ITEM_GREAT_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 12;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemMasterBall = S<
	ItemSettings<
		"ITEM_MASTER_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemPokeBall = S<
	ItemSettings<
		"ITEM_POKE_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemPremierBall = S<
	ItemSettings<
		"ITEM_PREMIER_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 100;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemUltraBall = S<
	ItemSettings<
		"ITEM_ULTRA_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 20;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemWildBall = S<
	ItemSettings<
		"ITEM_WILD_BALL",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;
export type ItemSettingsItemWildBallPremier = S<
	ItemSettings<
		"ITEM_WILD_BALL_PREMIER",
		{
			category: "ITEM_CATEGORY_POKEBALL";
			dropTrainerLevel: 1;
			itemType: "ITEM_TYPE_POKEBALL";
		}
	>
>;

export type ItemSettingsPokeballMasterfileEntry =
	| ItemSettingsItemBeastBall
	| ItemSettingsItemGreatBall
	| ItemSettingsItemMasterBall
	| ItemSettingsItemPokeBall
	| ItemSettingsItemPremierBall
	| ItemSettingsItemUltraBall
	| ItemSettingsItemWildBall
	| ItemSettingsItemWildBallPremier;

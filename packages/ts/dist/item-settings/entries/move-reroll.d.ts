// Generated from Pokémon GO masterfile — group "itemSettings", split "move-reroll", 5 entries.

import type { S } from "../../_utils";
import type { ItemSettings } from "../types";

export type ItemSettingsItemMoveRerollEliteFastAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_ELITE_FAST_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 1;
			itemId: "ITEM_MOVE_REROLL_ELITE_FAST_ATTACK";
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollEliteSpecialAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 1;
			itemId: "ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK";
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollFastAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_FAST_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 15;
			itemId: "ITEM_MOVE_REROLL_FAST_ATTACK";
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollOtherSpecialAttackA = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			ignoreInventorySpace: true;
			itemId: "ITEM_MOVE_REROLL_OTHER_SPECIAL_ATTACK_A";
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;
export type ItemSettingsItemMoveRerollSpecialAttack = S<
	ItemSettings<
		"ITEM_MOVE_REROLL_SPECIAL_ATTACK",
		{
			category: "ITEM_CATEGORY_MOVE_REROLL";
			dropTrainerLevel: 25;
			itemId: "ITEM_MOVE_REROLL_SPECIAL_ATTACK";
			itemType: "ITEM_TYPE_MOVE_REROLL";
		}
	>
>;

export type ItemSettingsMoveRerollMasterfileEntry =
	| ItemSettingsItemMoveRerollEliteFastAttack
	| ItemSettingsItemMoveRerollEliteSpecialAttack
	| ItemSettingsItemMoveRerollFastAttack
	| ItemSettingsItemMoveRerollOtherSpecialAttackA
	| ItemSettingsItemMoveRerollSpecialAttack;

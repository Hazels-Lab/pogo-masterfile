// Generated from Pokémon GO masterfile — group "levelUpRewards", 97 entries (structural types).

import type { W } from "../_utils";

export interface LevelUpRewards<TemplateID extends string = string, TData extends LevelUpRewardsData = LevelUpRewardsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		levelUpRewards: TData;
	};
}
export type LevelUpRewardsType = W<LevelUpRewards>;

export interface LevelUpRewardsData {
	clientOverrideDisplayOrder?: boolean;
	featuresUnlocked?: Array<
		| "FEATURE_CANDY_XL"
		| "FEATURE_COMBAT_LEAGUE"
		| "FEATURE_EGG_HATCHING"
		| "FEATURE_EGG_SPECIAL"
		| "FEATURE_GYM"
		| "FEATURE_LUCKY_CHANCE_INCREASE"
		| "FEATURE_MAX_BATTLE"
		| "FEATURE_MEGA"
		| "FEATURE_PARTY_PLAY"
		| "FEATURE_POKESTOP_NOMINATION"
		| "FEATURE_RAID"
		| "FEATURE_ROCKET"
		| "FEATURE_ROUTES"
		| "FEATURE_ROUTES_CREATION"
		| "FEATURE_TAG"
		| "FEATURE_TRADE"
		| "FEATURE_WEEKLY_CHALLENGES"
	>;
	isBackfill?: boolean;
	items: Array<
		| "ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"
		| "ITEM_GOLDEN_RAZZ_BERRY"
		| "ITEM_GREAT_BALL"
		| "ITEM_HYPER_POTION"
		| "ITEM_INCENSE_ORDINARY"
		| "ITEM_INCUBATOR_BASIC"
		| "ITEM_INCUBATOR_SUPER"
		| "ITEM_ITEM_STORAGE_UPGRADE_EARNED"
		| "ITEM_LUCKY_EGG"
		| "ITEM_MASTER_BALL"
		| "ITEM_MAX_BOOST"
		| "ITEM_MAX_POTION"
		| "ITEM_MAX_REVIVE"
		| "ITEM_MOVE_REROLL_ELITE_FAST_ATTACK"
		| "ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK"
		| "ITEM_MOVE_REROLL_FAST_ATTACK"
		| "ITEM_MP_REPLENISH"
		| "ITEM_NANAB_BERRY"
		| "ITEM_PAID_RAID_TICKET"
		| "ITEM_PINAP_BERRY"
		| "ITEM_POKE_BALL"
		| "ITEM_POKEMON_STORAGE_UPGRADE_EARNED"
		| "ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"
		| "ITEM_POTION"
		| "ITEM_RAZZ_BERRY"
		| "ITEM_REVIVE"
		| "ITEM_STAR_PIECE"
		| "ITEM_SUPER_POTION"
		| "ITEM_TROY_DISK"
		| "ITEM_ULTRA_BALL"
		| "ITEM_XL_RARE_CANDY"
	>;
	itemsCount: Array<number>;
	itemsUnlocked?: Array<
		| "ITEM_GOLDEN_PINAP_BERRY"
		| "ITEM_GOLDEN_RAZZ_BERRY"
		| "ITEM_GREAT_BALL"
		| "ITEM_HYPER_POTION"
		| "ITEM_INCENSE_DAILY_ADVENTURE"
		| "ITEM_MAX_POTION"
		| "ITEM_MAX_REVIVE"
		| "ITEM_MOVE_REROLL_FAST_ATTACK"
		| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
		| "ITEM_NANAB_BERRY"
		| "ITEM_PINAP_BERRY"
		| "ITEM_POTION"
		| "ITEM_RAZZ_BERRY"
		| "ITEM_REVIVE"
		| "ITEM_SUPER_POTION"
		| "ITEM_TROY_DISK"
		| "ITEM_ULTRA_BALL"
	>;
	level: number;
	neutralAvatarItemTemplates?: {
		displayTemplateId:
			| "N_DISPLAY_n_glasses_lvl73-visorspecs_0"
			| "N_DISPLAY_n_hair_lvl79-urbanphantom_0"
			| "N_DISPLAY_n_hat_pokeballitems-basic_0"
			| "N_DISPLAY_n_hat_pokeballitems-great_0"
			| "N_DISPLAY_n_hat_pokeballitems-ultra_0"
			| "N_DISPLAY_n_pants_lvl75-techtrousers_0"
			| "N_DISPLAY_n_pose_lvl77"
			| "N_DISPLAY_n_shirt_lvl80-circuitjacket_0"
			| "N_DISPLAY_n_shirt_pokeballitems-basic_0"
			| "N_DISPLAY_n_shirt_pokeballitems-great_0"
			| "N_DISPLAY_n_shirt_pokeballitems-ultra_0"
			| "N_DISPLAY_n_shoes_lvl71-cyberkicks_0"
			| "N_DISPLAY_n_shoes_pokeballitems-basic_0"
			| "N_DISPLAY_n_shoes_pokeballitems-great_0"
			| "N_DISPLAY_n_shoes_pokeballitems-ultra_0";
		itemTemplateId:
			| "N_AVATAR_n_glasses_lvl73-visorspecs_0"
			| "N_AVATAR_n_hair_lvl79-urbanphantom_0"
			| "N_AVATAR_n_hat_pokeballitems-basic_0"
			| "N_AVATAR_n_hat_pokeballitems-great_0"
			| "N_AVATAR_n_hat_pokeballitems-ultra_0"
			| "N_AVATAR_n_pants_lvl75-techtrousers_0"
			| "N_AVATAR_n_pose_lvl77"
			| "N_AVATAR_n_shirt_lvl80-circuitjacket_0"
			| "N_AVATAR_n_shirt_pokeballitems-basic_0"
			| "N_AVATAR_n_shirt_pokeballitems-great_0"
			| "N_AVATAR_n_shirt_pokeballitems-ultra_0"
			| "N_AVATAR_n_shoes_lvl71-cyberkicks_0"
			| "N_AVATAR_n_shoes_pokeballitems-basic_0"
			| "N_AVATAR_n_shoes_pokeballitems-great_0"
			| "N_AVATAR_n_shoes_pokeballitems-ultra_0";
	};
	obLevelUpRewardsNumber9?: number;
}

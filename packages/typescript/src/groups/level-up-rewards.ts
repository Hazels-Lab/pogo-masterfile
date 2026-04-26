export interface LevelUpRewards<TemplateID extends string = string, TData extends LevelUpRewardsData = LevelUpRewardsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		levelUpRewards: TData;
	};
}

export interface LevelUpRewardsData {
	clientOverrideDisplayOrder?: boolean;
	featuresUnlocked?: Array<string>;
	isBackfill?: boolean;
	items?: Array<string>;
	itemsCount?: Array<number>;
	itemsUnlocked?: Array<string>;
	level?: number;
	neutralAvatarItemTemplates?: {
		displayTemplateId?: string;
		itemTemplateId?: string;
	};
	obLevelUpRewardsNumber9?: number;
}

export type LevelUpRewardsAwardsLevel10 = LevelUpRewards<
	"AWARDS_LEVEL_10",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_COMBAT_LEAGUE", "FEATURE_TRADE"];
		items: [
			"ITEM_POKE_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_POTION",
			"ITEM_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [20, 3, 10, 10, 1, 1, 25];
		level: 10;
	}
>;
export type LevelUpRewardsAwardsLevel11 = LevelUpRewards<
	"AWARDS_LEVEL_11",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY", "ITEM_POTION"];
		itemsCount: [10, 3, 5];
		level: 11;
	}
>;
export type LevelUpRewardsAwardsLevel12 = LevelUpRewards<
	"AWARDS_LEVEL_12",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_RAZZ_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 12;
	}
>;
export type LevelUpRewardsAwardsLevel13 = LevelUpRewards<
	"AWARDS_LEVEL_13",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_WEEKLY_CHALLENGES"];
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY", "ITEM_POTION", "ITEM_GOLDEN_RAZZ_BERRY"];
		itemsCount: [10, 3, 5, 1];
		itemsUnlocked: ["ITEM_GOLDEN_RAZZ_BERRY"];
		level: 13;
	}
>;
export type LevelUpRewardsAwardsLevel14 = LevelUpRewards<
	"AWARDS_LEVEL_14",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_TAG"];
		items: ["ITEM_GREAT_BALL", "ITEM_RAZZ_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		itemsUnlocked: ["ITEM_GREAT_BALL"];
		level: 14;
	}
>;
export type LevelUpRewardsAwardsLevel15 = LevelUpRewards<
	"AWARDS_LEVEL_15",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_EGG_SPECIAL"];
		items: [
			"ITEM_GREAT_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_POTION",
			"ITEM_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
		];
		itemsCount: [15, 3, 10, 5, 1, 1, 1];
		level: 15;
	}
>;
export type LevelUpRewardsAwardsLevel16 = LevelUpRewards<
	"AWARDS_LEVEL_16",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_GREAT_BALL", "ITEM_RAZZ_BERRY", "ITEM_SUPER_POTION"];
		itemsCount: [10, 3, 10];
		itemsUnlocked: ["ITEM_SUPER_POTION"];
		level: 16;
	}
>;
export type LevelUpRewardsAwardsLevel17 = LevelUpRewards<
	"AWARDS_LEVEL_17",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_GREAT_BALL", "ITEM_PINAP_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		itemsUnlocked: ["ITEM_PINAP_BERRY"];
		level: 17;
	}
>;
export type LevelUpRewardsAwardsLevel18 = LevelUpRewards<
	"AWARDS_LEVEL_18",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_MEGA"];
		items: ["ITEM_GREAT_BALL", "ITEM_NANAB_BERRY", "ITEM_SUPER_POTION"];
		itemsCount: [10, 3, 10];
		level: 18;
	}
>;
export type LevelUpRewardsAwardsLevel19 = LevelUpRewards<
	"AWARDS_LEVEL_19",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_GREAT_BALL", "ITEM_RAZZ_BERRY", "ITEM_REVIVE", "ITEM_MOVE_REROLL_FAST_ATTACK"];
		itemsCount: [10, 3, 5, 1];
		itemsUnlocked: ["ITEM_MOVE_REROLL_FAST_ATTACK"];
		level: 19;
	}
>;
export type LevelUpRewardsAwardsLevel2 = LevelUpRewards<
	"AWARDS_LEVEL_2",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_EGG_HATCHING"];
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY"];
		itemsCount: [10, 3];
		itemsUnlocked: ["ITEM_NANAB_BERRY"];
		level: 2;
	}
>;
export type LevelUpRewardsAwardsLevel20 = LevelUpRewards<
	"AWARDS_LEVEL_20",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_MAX_BATTLE"];
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_SUPER_POTION",
			"ITEM_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [20, 3, 20, 10, 1, 1, 1, 25];
		itemsUnlocked: ["ITEM_ULTRA_BALL"];
		level: 20;
	}
>;
export type LevelUpRewardsAwardsLevel21 = LevelUpRewards<
	"AWARDS_LEVEL_21",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_PARTY_PLAY"];
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 21;
	}
>;
export type LevelUpRewardsAwardsLevel22 = LevelUpRewards<
	"AWARDS_LEVEL_22",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_HYPER_POTION"];
		itemsCount: [10, 3, 10];
		itemsUnlocked: ["ITEM_HYPER_POTION"];
		level: 22;
	}
>;
export type LevelUpRewardsAwardsLevel23 = LevelUpRewards<
	"AWARDS_LEVEL_23",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		itemsUnlocked: ["ITEM_MOVE_REROLL_SPECIAL_ATTACK"];
		level: 23;
	}
>;
export type LevelUpRewardsAwardsLevel24 = LevelUpRewards<
	"AWARDS_LEVEL_24",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_HYPER_POTION"];
		itemsCount: [10, 3, 10];
		itemsUnlocked: ["ITEM_GOLDEN_PINAP_BERRY"];
		level: 24;
	}
>;
export type LevelUpRewardsAwardsLevel25 = LevelUpRewards<
	"AWARDS_LEVEL_25",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [15, 3, 20, 10, 1, 1, 1, 25];
		itemsUnlocked: ["ITEM_MAX_POTION"];
		level: 25;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel26 = LevelUpRewards<
	"AWARDS_LEVEL_26",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 26;
	}
>;
export type LevelUpRewardsAwardsLevel27 = LevelUpRewards<
	"AWARDS_LEVEL_27",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 27;
	}
>;
export type LevelUpRewardsAwardsLevel28 = LevelUpRewards<
	"AWARDS_LEVEL_28",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 28;
	}
>;
export type LevelUpRewardsAwardsLevel29 = LevelUpRewards<
	"AWARDS_LEVEL_29",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 29;
	}
>;
export type LevelUpRewardsAwardsLevel3 = LevelUpRewards<
	"AWARDS_LEVEL_3",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY"];
		itemsCount: [10, 3];
		level: 3;
	}
>;
export type LevelUpRewardsAwardsLevel30 = LevelUpRewards<
	"AWARDS_LEVEL_30",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_ROUTES_CREATION"];
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [20, 3, 20, 10, 2, 2, 2, 100];
		itemsUnlocked: ["ITEM_MAX_REVIVE"];
		level: 30;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel31 = LevelUpRewards<
	"AWARDS_LEVEL_31",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_CANDY_XL"];
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 31;
	}
>;
export type LevelUpRewardsAwardsLevel32 = LevelUpRewards<
	"AWARDS_LEVEL_32",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 32;
	}
>;
export type LevelUpRewardsAwardsLevel33 = LevelUpRewards<
	"AWARDS_LEVEL_33",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 33;
	}
>;
export type LevelUpRewardsAwardsLevel34 = LevelUpRewards<
	"AWARDS_LEVEL_34",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 34;
	}
>;
export type LevelUpRewardsAwardsLevel35 = LevelUpRewards<
	"AWARDS_LEVEL_35",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_POKESTOP_NOMINATION"];
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [15, 3, 20, 10, 1, 1, 1, 50];
		level: 35;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel36 = LevelUpRewards<
	"AWARDS_LEVEL_36",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 36;
	}
>;
export type LevelUpRewardsAwardsLevel37 = LevelUpRewards<
	"AWARDS_LEVEL_37",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 37;
	}
>;
export type LevelUpRewardsAwardsLevel38 = LevelUpRewards<
	"AWARDS_LEVEL_38",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_POTION"];
		itemsCount: [10, 3, 10];
		level: 38;
	}
>;
export type LevelUpRewardsAwardsLevel39 = LevelUpRewards<
	"AWARDS_LEVEL_39",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_REVIVE"];
		itemsCount: [10, 3, 5];
		level: 39;
	}
>;
export type LevelUpRewardsAwardsLevel4 = LevelUpRewards<
	"AWARDS_LEVEL_4",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY"];
		itemsCount: [10, 3];
		itemsUnlocked: ["ITEM_INCENSE_DAILY_ADVENTURE"];
		level: 4;
	}
>;
export type LevelUpRewardsAwardsLevel40 = LevelUpRewards<
	"AWARDS_LEVEL_40",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_MOVE_REROLL_ELITE_FAST_ATTACK",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 3, 20, 10, 2, 2, 2, 1, 50, 75];
		level: 40;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel41 = LevelUpRewards<
	"AWARDS_LEVEL_41",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_POTION", "ITEM_LUCKY_EGG"];
		itemsCount: [10, 3, 10, 1];
		level: 41;
	}
>;
export type LevelUpRewardsAwardsLevel42 = LevelUpRewards<
	"AWARDS_LEVEL_42",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 2, 1];
		level: 42;
	}
>;
export type LevelUpRewardsAwardsLevel43 = LevelUpRewards<
	"AWARDS_LEVEL_43",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 10, 5];
		level: 43;
	}
>;
export type LevelUpRewardsAwardsLevel44 = LevelUpRewards<
	"AWARDS_LEVEL_44",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCENSE_ORDINARY"];
		itemsCount: [10, 3, 2, 1];
		level: 44;
	}
>;
export type LevelUpRewardsAwardsLevel45 = LevelUpRewards<
	"AWARDS_LEVEL_45",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [15, 3, 20, 10, 1, 1, 1, 50];
		level: 45;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel46 = LevelUpRewards<
	"AWARDS_LEVEL_46",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_STAR_PIECE"];
		itemsCount: [10, 3, 10, 1];
		level: 46;
	}
>;
export type LevelUpRewardsAwardsLevel47 = LevelUpRewards<
	"AWARDS_LEVEL_47",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 5, 50];
		level: 47;
	}
>;
export type LevelUpRewardsAwardsLevel48 = LevelUpRewards<
	"AWARDS_LEVEL_48",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_POTION", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 10, 1];
		level: 48;
	}
>;
export type LevelUpRewardsAwardsLevel49 = LevelUpRewards<
	"AWARDS_LEVEL_49",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_REVIVE", "ITEM_TROY_DISK"];
		itemsCount: [10, 3, 5, 1];
		level: 49;
	}
>;
export type LevelUpRewardsAwardsLevel5 = LevelUpRewards<
	"AWARDS_LEVEL_5",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_GYM", "FEATURE_RAID"];
		items: ["ITEM_POKE_BALL", "ITEM_POTION", "ITEM_REVIVE", "ITEM_INCENSE_ORDINARY"];
		itemsCount: [15, 10, 5, 1];
		itemsUnlocked: ["ITEM_POTION", "ITEM_REVIVE"];
		level: 5;
	}
>;
export type LevelUpRewardsAwardsLevel50 = LevelUpRewards<
	"AWARDS_LEVEL_50",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_MOVE_REROLL_ELITE_SPECIAL_ATTACK",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 3, 20, 10, 3, 3, 3, 1, 75];
		level: 50;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel51 = LevelUpRewards<
	"AWARDS_LEVEL_51",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_POTION", "ITEM_LUCKY_EGG"];
		itemsCount: [10, 3, 10, 1];
		level: 51;
	}
>;
export type LevelUpRewardsAwardsLevel52 = LevelUpRewards<
	"AWARDS_LEVEL_52",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 5, 1];
		level: 52;
	}
>;
export type LevelUpRewardsAwardsLevel53 = LevelUpRewards<
	"AWARDS_LEVEL_53",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 10, 5];
		level: 53;
	}
>;
export type LevelUpRewardsAwardsLevel54 = LevelUpRewards<
	"AWARDS_LEVEL_54",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCENSE_ORDINARY"];
		itemsCount: [10, 3, 5, 1];
		level: 54;
	}
>;
export type LevelUpRewardsAwardsLevel55 = LevelUpRewards<
	"AWARDS_LEVEL_55",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [15, 3, 20, 10, 2, 2, 2, 25, 50];
		level: 55;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel56 = LevelUpRewards<
	"AWARDS_LEVEL_56",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_STAR_PIECE"];
		itemsCount: [10, 3, 10, 1];
		level: 56;
	}
>;
export type LevelUpRewardsAwardsLevel57 = LevelUpRewards<
	"AWARDS_LEVEL_57",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 5, 50];
		level: 57;
	}
>;
export type LevelUpRewardsAwardsLevel58 = LevelUpRewards<
	"AWARDS_LEVEL_58",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_POTION", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 10, 1];
		level: 58;
	}
>;
export type LevelUpRewardsAwardsLevel59 = LevelUpRewards<
	"AWARDS_LEVEL_59",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_REVIVE", "ITEM_TROY_DISK"];
		itemsCount: [10, 3, 5, 1];
		level: 59;
	}
>;
export type LevelUpRewardsAwardsLevel6 = LevelUpRewards<
	"AWARDS_LEVEL_6",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_POTION", "ITEM_TROY_DISK"];
		itemsCount: [10, 5, 1];
		itemsUnlocked: ["ITEM_TROY_DISK"];
		level: 6;
	}
>;
export type LevelUpRewardsAwardsLevel60 = LevelUpRewards<
	"AWARDS_LEVEL_60",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 3, 20, 10, 4, 4, 4, 50, 75];
		level: 60;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel61 = LevelUpRewards<
	"AWARDS_LEVEL_61",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_POTION", "ITEM_LUCKY_EGG"];
		itemsCount: [10, 3, 10, 1];
		level: 61;
	}
>;
export type LevelUpRewardsAwardsLevel62 = LevelUpRewards<
	"AWARDS_LEVEL_62",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 5, 1];
		level: 62;
	}
>;
export type LevelUpRewardsAwardsLevel63 = LevelUpRewards<
	"AWARDS_LEVEL_63",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 10, 5];
		level: 63;
	}
>;
export type LevelUpRewardsAwardsLevel64 = LevelUpRewards<
	"AWARDS_LEVEL_64",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_INCENSE_ORDINARY"];
		itemsCount: [10, 3, 5, 1];
		level: 64;
	}
>;
export type LevelUpRewardsAwardsLevel65 = LevelUpRewards<
	"AWARDS_LEVEL_65",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_TROY_DISK",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [15, 3, 20, 10, 3, 3, 3, 50];
		level: 65;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel66 = LevelUpRewards<
	"AWARDS_LEVEL_66",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_STAR_PIECE"];
		itemsCount: [10, 3, 10, 1];
		level: 66;
	}
>;
export type LevelUpRewardsAwardsLevel67 = LevelUpRewards<
	"AWARDS_LEVEL_67",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_REVIVE", "ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [10, 3, 5, 50];
		level: 67;
	}
>;
export type LevelUpRewardsAwardsLevel68 = LevelUpRewards<
	"AWARDS_LEVEL_68",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_POTION", "ITEM_INCUBATOR_BASIC"];
		itemsCount: [10, 3, 10, 1];
		level: 68;
	}
>;
export type LevelUpRewardsAwardsLevel69 = LevelUpRewards<
	"AWARDS_LEVEL_69",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_REVIVE", "ITEM_TROY_DISK"];
		itemsCount: [10, 3, 5, 1];
		level: 69;
	}
>;
export type LevelUpRewardsAwardsLevel7 = LevelUpRewards<
	"AWARDS_LEVEL_7",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_ROUTES"];
		items: ["ITEM_POKE_BALL", "ITEM_NANAB_BERRY"];
		itemsCount: [10, 3];
		level: 7;
	}
>;
export type LevelUpRewardsAwardsLevel70 = LevelUpRewards<
	"AWARDS_LEVEL_70",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_LUCKY_CHANCE_INCREASE"];
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_SUPER",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_MASTER_BALL",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 3, 20, 10, 6, 3, 6, 1, 75];
		level: 70;
		obLevelUpRewardsNumber9: 0.01;
	}
>;
export type LevelUpRewardsAwardsLevel71 = LevelUpRewards<
	"AWARDS_LEVEL_71",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_NANAB_BERRY", "ITEM_MAX_POTION", "ITEM_PAID_RAID_TICKET", "ITEM_XL_RARE_CANDY"];
		itemsCount: [30, 25, 20, 1, 1];
		level: 71;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_lvl71-cyberkicks_0";
			itemTemplateId: "N_AVATAR_n_shoes_lvl71-cyberkicks_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel72 = LevelUpRewards<
	"AWARDS_LEVEL_72",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_RAZZ_BERRY", "ITEM_MAX_REVIVE", "ITEM_PAID_RAID_TICKET", "ITEM_XL_RARE_CANDY", "ITEM_LUCKY_EGG"];
		itemsCount: [30, 25, 10, 1, 1, 1];
		level: 72;
	}
>;
export type LevelUpRewardsAwardsLevel73 = LevelUpRewards<
	"AWARDS_LEVEL_73",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_PAID_RAID_TICKET",
			"ITEM_XL_RARE_CANDY",
			"ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 25, 20, 1, 1, 5];
		level: 73;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_glasses_lvl73-visorspecs_0";
			itemTemplateId: "N_AVATAR_n_glasses_lvl73-visorspecs_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel74 = LevelUpRewards<
	"AWARDS_LEVEL_74",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_NANAB_BERRY",
			"ITEM_MAX_REVIVE",
			"ITEM_PAID_RAID_TICKET",
			"ITEM_XL_RARE_CANDY",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_POSTCARD_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 25, 10, 1, 1, 1, 50];
		level: 74;
	}
>;
export type LevelUpRewardsAwardsLevel75 = LevelUpRewards<
	"AWARDS_LEVEL_75",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_STAR_PIECE",
			"ITEM_INCUBATOR_SUPER",
			"ITEM_TROY_DISK",
			"ITEM_MP_REPLENISH",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [50, 35, 30, 15, 5, 2, 5, 1, 25];
		level: 75;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_pants_lvl75-techtrousers_0";
			itemTemplateId: "N_AVATAR_n_pants_lvl75-techtrousers_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel76 = LevelUpRewards<
	"AWARDS_LEVEL_76",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_POTION", "ITEM_PAID_RAID_TICKET", "ITEM_XL_RARE_CANDY", "ITEM_LUCKY_EGG"];
		itemsCount: [30, 25, 20, 1, 1, 1];
		level: 76;
	}
>;
export type LevelUpRewardsAwardsLevel77 = LevelUpRewards<
	"AWARDS_LEVEL_77",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_NANAB_BERRY",
			"ITEM_MAX_REVIVE",
			"ITEM_PAID_RAID_TICKET",
			"ITEM_XL_RARE_CANDY",
			"ITEM_INCUBATOR_BASIC",
			"ITEM_POSTCARD_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 25, 10, 1, 1, 1, 50];
		level: 77;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_pose_lvl77";
			itemTemplateId: "N_AVATAR_n_pose_lvl77";
		};
	}
>;
export type LevelUpRewardsAwardsLevel78 = LevelUpRewards<
	"AWARDS_LEVEL_78",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_RAZZ_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_PAID_RAID_TICKET",
			"ITEM_XL_RARE_CANDY",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [30, 25, 20, 1, 1, 75];
		level: 78;
	}
>;
export type LevelUpRewardsAwardsLevel79 = LevelUpRewards<
	"AWARDS_LEVEL_79",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_ULTRA_BALL", "ITEM_PINAP_BERRY", "ITEM_MAX_REVIVE", "ITEM_PAID_RAID_TICKET", "ITEM_XL_RARE_CANDY"];
		itemsCount: [30, 25, 10, 1, 1];
		level: 79;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hair_lvl79-urbanphantom_0";
			itemTemplateId: "N_AVATAR_n_hair_lvl79-urbanphantom_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel8 = LevelUpRewards<
	"AWARDS_LEVEL_8",
	{
		clientOverrideDisplayOrder: true;
		featuresUnlocked: ["FEATURE_ROCKET"];
		items: ["ITEM_POKE_BALL", "ITEM_REVIVE"];
		itemsCount: [10, 5];
		level: 8;
	}
>;
export type LevelUpRewardsAwardsLevel80 = LevelUpRewards<
	"AWARDS_LEVEL_80",
	{
		clientOverrideDisplayOrder: true;
		items: [
			"ITEM_ULTRA_BALL",
			"ITEM_PINAP_BERRY",
			"ITEM_MAX_POTION",
			"ITEM_MAX_REVIVE",
			"ITEM_LUCKY_EGG",
			"ITEM_INCUBATOR_SUPER",
			"ITEM_INCENSE_ORDINARY",
			"ITEM_MAX_BOOST",
			"ITEM_ITEM_STORAGE_UPGRADE_EARNED",
			"ITEM_POKEMON_STORAGE_UPGRADE_EARNED",
		];
		itemsCount: [80, 70, 50, 25, 7, 5, 7, 1, 100, 100];
		level: 80;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_lvl80-circuitjacket_0";
			itemTemplateId: "N_AVATAR_n_shirt_lvl80-circuitjacket_0";
		};
	}
>;
export type LevelUpRewardsAwardsLevel9 = LevelUpRewards<
	"AWARDS_LEVEL_9",
	{
		clientOverrideDisplayOrder: true;
		items: ["ITEM_POKE_BALL", "ITEM_RAZZ_BERRY"];
		itemsCount: [10, 3];
		itemsUnlocked: ["ITEM_RAZZ_BERRY"];
		level: 9;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel10 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_10",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [25];
		level: 10;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel20 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_20",
	{
		isBackfill: true;
		items: ["ITEM_POKEMON_STORAGE_UPGRADE_EARNED"];
		itemsCount: [25];
		level: 20;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel25 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_25",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [25];
		level: 25;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel30 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_30",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [100];
		level: 30;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel35 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_35",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 35;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-basic_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-basic_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel40 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_40",
	{
		isBackfill: true;
		items: ["ITEM_POKEMON_STORAGE_UPGRADE_EARNED", "ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50, 75];
		level: 40;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel43 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_43",
	{
		isBackfill: true;
		items: ["ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [5];
		level: 43;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel45 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_45",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 45;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel47 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_47",
	{
		isBackfill: true;
		items: ["ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 47;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel50 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_50",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [75];
		level: 50;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-great_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-great_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel53 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_53",
	{
		isBackfill: true;
		items: ["ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [5];
		level: 53;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel55 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_55",
	{
		isBackfill: true;
		items: ["ITEM_POKEMON_STORAGE_UPGRADE_EARNED", "ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [25, 50];
		level: 55;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_hat_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_hat_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel57 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_57",
	{
		isBackfill: true;
		items: ["ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 57;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel60 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_60",
	{
		isBackfill: true;
		items: ["ITEM_POKEMON_STORAGE_UPGRADE_EARNED", "ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50, 75];
		level: 60;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shoes_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_shoes_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel63 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_63",
	{
		isBackfill: true;
		items: ["ITEM_GIFTBOX_STORAGE_UPGRADE_EARNED"];
		itemsCount: [5];
		level: 63;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel65 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_65",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 65;
		neutralAvatarItemTemplates: {
			displayTemplateId: "N_DISPLAY_n_shirt_pokeballitems-ultra_0";
			itemTemplateId: "N_AVATAR_n_shirt_pokeballitems-ultra_0";
		};
	}
>;
export type LevelUpRewardsBackfillAwardsLevel67 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_67",
	{
		isBackfill: true;
		items: ["ITEM_POSTCARD_STORAGE_UPGRADE_EARNED"];
		itemsCount: [50];
		level: 67;
	}
>;
export type LevelUpRewardsBackfillAwardsLevel70 = LevelUpRewards<
	"BACKFILL_AWARDS_LEVEL_70",
	{
		isBackfill: true;
		items: ["ITEM_ITEM_STORAGE_UPGRADE_EARNED"];
		itemsCount: [75];
		level: 70;
		obLevelUpRewardsNumber9: 0.01;
	}
>;

export type LevelUpRewardsMasterfileEntry =
	| LevelUpRewardsAwardsLevel10
	| LevelUpRewardsAwardsLevel11
	| LevelUpRewardsAwardsLevel12
	| LevelUpRewardsAwardsLevel13
	| LevelUpRewardsAwardsLevel14
	| LevelUpRewardsAwardsLevel15
	| LevelUpRewardsAwardsLevel16
	| LevelUpRewardsAwardsLevel17
	| LevelUpRewardsAwardsLevel18
	| LevelUpRewardsAwardsLevel19
	| LevelUpRewardsAwardsLevel2
	| LevelUpRewardsAwardsLevel20
	| LevelUpRewardsAwardsLevel21
	| LevelUpRewardsAwardsLevel22
	| LevelUpRewardsAwardsLevel23
	| LevelUpRewardsAwardsLevel24
	| LevelUpRewardsAwardsLevel25
	| LevelUpRewardsAwardsLevel26
	| LevelUpRewardsAwardsLevel27
	| LevelUpRewardsAwardsLevel28
	| LevelUpRewardsAwardsLevel29
	| LevelUpRewardsAwardsLevel3
	| LevelUpRewardsAwardsLevel30
	| LevelUpRewardsAwardsLevel31
	| LevelUpRewardsAwardsLevel32
	| LevelUpRewardsAwardsLevel33
	| LevelUpRewardsAwardsLevel34
	| LevelUpRewardsAwardsLevel35
	| LevelUpRewardsAwardsLevel36
	| LevelUpRewardsAwardsLevel37
	| LevelUpRewardsAwardsLevel38
	| LevelUpRewardsAwardsLevel39
	| LevelUpRewardsAwardsLevel4
	| LevelUpRewardsAwardsLevel40
	| LevelUpRewardsAwardsLevel41
	| LevelUpRewardsAwardsLevel42
	| LevelUpRewardsAwardsLevel43
	| LevelUpRewardsAwardsLevel44
	| LevelUpRewardsAwardsLevel45
	| LevelUpRewardsAwardsLevel46
	| LevelUpRewardsAwardsLevel47
	| LevelUpRewardsAwardsLevel48
	| LevelUpRewardsAwardsLevel49
	| LevelUpRewardsAwardsLevel5
	| LevelUpRewardsAwardsLevel50
	| LevelUpRewardsAwardsLevel51
	| LevelUpRewardsAwardsLevel52
	| LevelUpRewardsAwardsLevel53
	| LevelUpRewardsAwardsLevel54
	| LevelUpRewardsAwardsLevel55
	| LevelUpRewardsAwardsLevel56
	| LevelUpRewardsAwardsLevel57
	| LevelUpRewardsAwardsLevel58
	| LevelUpRewardsAwardsLevel59
	| LevelUpRewardsAwardsLevel6
	| LevelUpRewardsAwardsLevel60
	| LevelUpRewardsAwardsLevel61
	| LevelUpRewardsAwardsLevel62
	| LevelUpRewardsAwardsLevel63
	| LevelUpRewardsAwardsLevel64
	| LevelUpRewardsAwardsLevel65
	| LevelUpRewardsAwardsLevel66
	| LevelUpRewardsAwardsLevel67
	| LevelUpRewardsAwardsLevel68
	| LevelUpRewardsAwardsLevel69
	| LevelUpRewardsAwardsLevel7
	| LevelUpRewardsAwardsLevel70
	| LevelUpRewardsAwardsLevel71
	| LevelUpRewardsAwardsLevel72
	| LevelUpRewardsAwardsLevel73
	| LevelUpRewardsAwardsLevel74
	| LevelUpRewardsAwardsLevel75
	| LevelUpRewardsAwardsLevel76
	| LevelUpRewardsAwardsLevel77
	| LevelUpRewardsAwardsLevel78
	| LevelUpRewardsAwardsLevel79
	| LevelUpRewardsAwardsLevel8
	| LevelUpRewardsAwardsLevel80
	| LevelUpRewardsAwardsLevel9
	| LevelUpRewardsBackfillAwardsLevel10
	| LevelUpRewardsBackfillAwardsLevel20
	| LevelUpRewardsBackfillAwardsLevel25
	| LevelUpRewardsBackfillAwardsLevel30
	| LevelUpRewardsBackfillAwardsLevel35
	| LevelUpRewardsBackfillAwardsLevel40
	| LevelUpRewardsBackfillAwardsLevel43
	| LevelUpRewardsBackfillAwardsLevel45
	| LevelUpRewardsBackfillAwardsLevel47
	| LevelUpRewardsBackfillAwardsLevel50
	| LevelUpRewardsBackfillAwardsLevel53
	| LevelUpRewardsBackfillAwardsLevel55
	| LevelUpRewardsBackfillAwardsLevel57
	| LevelUpRewardsBackfillAwardsLevel60
	| LevelUpRewardsBackfillAwardsLevel63
	| LevelUpRewardsBackfillAwardsLevel65
	| LevelUpRewardsBackfillAwardsLevel67
	| LevelUpRewardsBackfillAwardsLevel70;

export type LevelUpRewardsTemplateID = LevelUpRewardsMasterfileEntry["templateId"];

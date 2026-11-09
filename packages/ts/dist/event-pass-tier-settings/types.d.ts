// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 1600 entries (structural types).

import type { W } from "../_utils";

export interface EventPassTierSettings<TemplateID extends string = string, TData extends EventPassTierSettingsData = EventPassTierSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassTierSettings: TData;
	};
}
export type EventPassTierSettingsType = W<EventPassTierSettings>;

export interface EventPassTierSettingsData {
	activeBonusDisplaySettings?: {
		bonusBoxes: Array<{
			iconType: "CANDY_GENERAL" | "CANDY_XL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "MAX_PARTICLE" | "TRADE" | "XP";
			text:
				| "additional_candy_max_battle_singular"
				| "additional_xl_max_raid_singular"
				| "bonus_5000_xp_raid"
				| "bonus_candy_raids_all"
				| "bonus_discount_mp_unlock_level"
				| "dai_duration_double"
				| "extra_guranteed_xl_candy_raids"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "incubator_distance_half"
				| "max_battle_win_plus5000_bonus"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "active_bonuses_label" | "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "CANDY_GENERAL" | "CANDY_XL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "MAX_PARTICLE" | "TRADE" | "XP";
			text:
				| "additional_candy_max_battle_singular"
				| "additional_xl_max_raid_singular"
				| "bonus_5000_xp_raid"
				| "bonus_candy_raids_all"
				| "bonus_discount_mp_unlock_level"
				| "dai_duration_double"
				| "extra_guranteed_xl_candy_raids"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "incubator_distance_half"
				| "max_battle_win_plus5000_bonus"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName:
			| "event_pass_gowa_2025_bonus_1"
			| "event_pass_gowa_2025_bonus_2"
			| "event_pass_gowa_2025_bonus_3"
			| "season_pass_milestone_bonus_title_01"
			| "season_pass_milestone_bonus_title_02"
			| "season_pass_milestone_bonus_title_03"
			| "season_pass_milestone_bonus_title_04"
			| "short_incubator_distance_half";
	};
	isMilestoneRank?: boolean;
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId:
				| "ABSOL"
				| "COMBEE"
				| "DEINO"
				| "DHELMISE"
				| "DIGLETT"
				| "DRATINI"
				| "DRILBUR"
				| "DURALUDON"
				| "FALINKS"
				| "FIDOUGH"
				| "FLITTLE"
				| "GIBLE"
				| "GIMMIGHOUL"
				| "GREAVARD"
				| "GROUDON"
				| "HATENNA"
				| "IMPIDIMP"
				| "KLINK"
				| "MACHOP"
				| "MAGNEMITE"
				| "MELTAN"
				| "MILTANK"
				| "NICKIT"
				| "NOIBAT"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SKRELP"
				| "SLAKOTH"
				| "SLUGMA"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TOGEDEMARU"
				| "TRAPINCH"
				| "TURTONATOR";
		};
		eventBadgeId?: "BADGE_GOWA_2026_EVENT_02";
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_GOLDEN_PINAP_BERRY"
				| "ITEM_GOLDEN_RAZZ_BERRY"
				| "ITEM_GREAT_BALL"
				| "ITEM_HYPER_POTION"
				| "ITEM_INCENSE_ORDINARY"
				| "ITEM_INCUBATOR_SUPER"
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_MAX_BOOST"
				| "ITEM_MAX_POTION"
				| "ITEM_MAX_REVIVE"
				| "ITEM_METAL_COAT"
				| "ITEM_MOVE_REROLL_ELITE_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_PINAP_BERRY"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_POTION"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_REVIVE"
				| "ITEM_SINGLE_STAT_INCREASE"
				| "ITEM_STAR_PIECE"
				| "ITEM_SUPER_POTION"
				| "ITEM_TROY_DISK"
				| "ITEM_TROY_DISK_SPARKLY"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_pants_duraludon" | "N_DISPLAY_n_shirt_gowa2026-maroon";
			itemTemplateId: "N_AVATAR_n_pants_duraludon" | "N_AVATAR_n_shirt_gowa2026-maroon";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "gowa_2026_pass_milestone_01"
				| "gowa_2026_pass_milestone_02"
				| "gowa_2026_pass_milestone_03"
				| "gowa_2026_pass_milestone_04"
				| "november2026_season_pass_entitlement"
				| "november2026_season_pass_rank_01"
				| "november2026_season_pass_rank_02"
				| "november2026_season_pass_rank_03"
				| "november2026_season_pass_rank_04";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "ABSOL_NORMAL"
					| "COMBEE_NORMAL"
					| "DEINO_NORMAL"
					| "DHELMISE_NORMAL"
					| "DRAGONAIR_NORMAL"
					| "DRILBUR_NORMAL"
					| "DUGTRIO_ALOLA"
					| "DURALUDON_NORMAL"
					| "FALINKS_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FLITTLE_NORMAL"
					| "GIBLE_NORMAL"
					| "GIMMIGHOUL_NORMAL"
					| "GREAVARD_NORMAL"
					| "GROUDON_NORMAL"
					| "HATENNA_NORMAL"
					| "IMPIDIMP_NORMAL"
					| "KLINK_NORMAL"
					| "MACHAMP_WILDAREA_2026_01"
					| "MACHOP_NORMAL"
					| "MAGCARGO_NORMAL"
					| "MAGNEMITE_NORMAL"
					| "MELTAN_NORMAL"
					| "MILTANK_NORMAL"
					| "NICKIT_NORMAL"
					| "NOIBAT_NORMAL"
					| "PHANPY_NORMAL"
					| "RALTS_NORMAL"
					| "ROOKIDEE_NORMAL"
					| "SANDSHREW_ALOLA"
					| "SANDYGAST_NORMAL"
					| "SKRELP_NORMAL"
					| "SWABLU_NORMAL"
					| "TADBULB_NORMAL"
					| "TINKATINK_NORMAL"
					| "TOGEDEMARU_NORMAL"
					| "TRAPINCH_NORMAL"
					| "TURTONATOR_NORMAL"
					| "VIGOROTH_NORMAL";
			};
			pokemonId:
				| "ABSOL"
				| "COMBEE"
				| "DEINO"
				| "DHELMISE"
				| "DRAGONAIR"
				| "DRILBUR"
				| "DUGTRIO"
				| "DURALUDON"
				| "FALINKS"
				| "FIDOUGH"
				| "FLITTLE"
				| "GIBLE"
				| "GIMMIGHOUL"
				| "GREAVARD"
				| "GROUDON"
				| "HATENNA"
				| "IMPIDIMP"
				| "KLINK"
				| "MACHAMP"
				| "MACHOP"
				| "MAGCARGO"
				| "MAGNEMITE"
				| "MELTAN"
				| "MILTANK"
				| "NICKIT"
				| "NOIBAT"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "RALTS"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SKRELP"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TOGEDEMARU"
				| "TRAPINCH"
				| "TURTONATOR"
				| "VIGOROTH";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "AVATAR_CLOTHING" | "CANDY" | "EVENT_BADGE" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKECOIN" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "COMBEE"
				| "DEINO"
				| "DIGLETT"
				| "DRATINI"
				| "DRILBUR"
				| "DURALUDON"
				| "FALINKS"
				| "FIDOUGH"
				| "GIBLE"
				| "GIMMIGHOUL"
				| "GREAVARD"
				| "GROUDON"
				| "HATENNA"
				| "KLINK"
				| "MACHOP"
				| "MAGNEMITE"
				| "MELTAN"
				| "MILTANK"
				| "NICKIT"
				| "NOIBAT"
				| "PHANPY"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SKRELP"
				| "SLAKOTH"
				| "SLUGMA"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TOGEDEMARU"
				| "TRAPINCH";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

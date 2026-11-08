// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 400 entries (structural types).

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
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "TRADE";
			text:
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "TRADE";
			text:
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName:
			| "season_pass_milestone_bonus_title_01"
			| "season_pass_milestone_bonus_title_02"
			| "season_pass_milestone_bonus_title_03"
			| "season_pass_milestone_bonus_title_04";
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
				| "DHELMISE"
				| "DIGLETT"
				| "DRATINI"
				| "DURALUDON"
				| "FALINKS"
				| "FIDOUGH"
				| "FLITTLE"
				| "GIBLE"
				| "GREAVARD"
				| "GROUDON"
				| "IMPIDIMP"
				| "KLINK"
				| "MILTANK"
				| "NICKIT"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SLAKOTH"
				| "SLUGMA"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TURTONATOR";
		};
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_GOLDEN_PINAP_BERRY"
				| "ITEM_GOLDEN_RAZZ_BERRY"
				| "ITEM_GREAT_BALL"
				| "ITEM_INCUBATOR_SUPER"
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		playerAttribute?: {
			durationMins: number;
			key:
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
					| "DHELMISE_NORMAL"
					| "DRAGONAIR_NORMAL"
					| "DUGTRIO_ALOLA"
					| "DURALUDON_NORMAL"
					| "FALINKS_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FLITTLE_NORMAL"
					| "GIBLE_NORMAL"
					| "GREAVARD_NORMAL"
					| "GROUDON_NORMAL"
					| "IMPIDIMP_NORMAL"
					| "KLINK_NORMAL"
					| "MAGCARGO_NORMAL"
					| "MILTANK_NORMAL"
					| "NICKIT_NORMAL"
					| "PHANPY_NORMAL"
					| "ROOKIDEE_NORMAL"
					| "SANDSHREW_ALOLA"
					| "SANDYGAST_NORMAL"
					| "SWABLU_NORMAL"
					| "TADBULB_NORMAL"
					| "TINKATINK_NORMAL"
					| "TURTONATOR_NORMAL"
					| "VIGOROTH_NORMAL";
			};
			pokemonId:
				| "ABSOL"
				| "COMBEE"
				| "DHELMISE"
				| "DRAGONAIR"
				| "DUGTRIO"
				| "DURALUDON"
				| "FALINKS"
				| "FIDOUGH"
				| "FLITTLE"
				| "GIBLE"
				| "GREAVARD"
				| "GROUDON"
				| "IMPIDIMP"
				| "KLINK"
				| "MAGCARGO"
				| "MILTANK"
				| "NICKIT"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TURTONATOR"
				| "VIGOROTH";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKECOIN" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "COMBEE"
				| "DIGLETT"
				| "DRATINI"
				| "FALINKS"
				| "FIDOUGH"
				| "GIBLE"
				| "GREAVARD"
				| "GROUDON"
				| "KLINK"
				| "MILTANK"
				| "NICKIT"
				| "PHANPY"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "SLAKOTH"
				| "SLUGMA"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

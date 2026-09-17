// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 520 entries (structural types).

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
			iconType: "CANDY_GENERAL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "LURE_MODULE" | "STARDUST" | "TRADE";
			text:
				| "catch_candy_double"
				| "catch_candy_triple"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatenna_wattrel_stardust_catch"
				| "lure_duration_double"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "CANDY_GENERAL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "LURE_MODULE" | "STARDUST" | "TRADE";
			text:
				| "catch_candy_double"
				| "catch_candy_triple"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatenna_wattrel_stardust_catch"
				| "lure_duration_double"
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
				| "ARROKUDA"
				| "BAGON"
				| "BLIPBUG"
				| "DRATINI"
				| "DRILBUR"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "FLITTLE"
				| "GOSSIFLEUR"
				| "HATENNA"
				| "HONEDGE"
				| "INKAY"
				| "LATIOS"
				| "LILLIPUP"
				| "MINCCINO"
				| "NACLI"
				| "NICKIT"
				| "NUMEL"
				| "ORTHWORM"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SIZZLIPEDE"
				| "SNOM"
				| "STARYU"
				| "VOLTORB"
				| "WATTREL"
				| "WIMPOD"
				| "YAMPER";
		};
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_GOLDEN_PINAP_BERRY"
				| "ITEM_GOLDEN_RAZZ_BERRY"
				| "ITEM_GREAT_BALL"
				| "ITEM_INCENSE_ORDINARY"
				| "ITEM_INCUBATOR_BASIC"
				| "ITEM_INCUBATOR_SUPER"
				| "ITEM_INCUBATOR_TIMED"
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_PINAP_BERRY"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_STAR_PIECE"
				| "ITEM_TROY_DISK"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "horizonsfall2026_season_pass_entitlement"
				| "horizonsfall2026_season_pass_rank_01"
				| "horizonsfall2026_season_pass_rank_01_paid"
				| "horizonsfall2026_season_pass_rank_02"
				| "horizonsfall2026_season_pass_rank_03"
				| "september2026_season_pass_entitlement"
				| "september2026_season_pass_rank_01"
				| "september2026_season_pass_rank_02"
				| "september2026_season_pass_rank_03"
				| "september2026_season_pass_rank_04";
		};
		pokemonEncounter?: {
			isFeaturedPokemon?: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "ARROKUDA_NORMAL"
					| "BLIPBUG_NORMAL"
					| "CAMERUPT_NORMAL"
					| "CHARMANDER_GOGGLES_2026"
					| "CINCCINO_NORMAL"
					| "CROCALOR_NORMAL"
					| "DRATINI_NORMAL"
					| "DRILBUR_NORMAL"
					| "EEVEE_NORMAL"
					| "ESPURR_NORMAL"
					| "FERROTHORN_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FLITTLE_NORMAL"
					| "FLORAGATO_NORMAL"
					| "FUECOCO_NORMAL"
					| "GOSSIFLEUR_NORMAL"
					| "HATENNA_NORMAL"
					| "HONEDGE_NORMAL"
					| "INKAY_NORMAL"
					| "KLEAVOR_NORMAL"
					| "LATIOS_NORMAL"
					| "LILLIPUP_NORMAL"
					| "NACLI_NORMAL"
					| "NICKIT_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PIKACHU_HORIZONS"
					| "QUAXLY_NORMAL"
					| "QUAXWELL_NORMAL"
					| "ROGGENROLA_NORMAL"
					| "SHELGON_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SNOM_NORMAL"
					| "SPRIGATITO_NORMAL"
					| "STARYU_NORMAL"
					| "VOLTORB_HISUIAN"
					| "WATTREL_NORMAL"
					| "WIMPOD_NORMAL"
					| "YAMPER_NORMAL";
			};
			pokemonId:
				| "ARROKUDA"
				| "BLIPBUG"
				| "CAMERUPT"
				| "CHARMANDER"
				| "CINCCINO"
				| "CROCALOR"
				| "DRATINI"
				| "DRILBUR"
				| "EEVEE"
				| "ESPURR"
				| "FERROTHORN"
				| "FIDOUGH"
				| "FLITTLE"
				| "FLORAGATO"
				| "FUECOCO"
				| "GOSSIFLEUR"
				| "HATENNA"
				| "HONEDGE"
				| "INKAY"
				| "KLEAVOR"
				| "LATIOS"
				| "LILLIPUP"
				| "NACLI"
				| "NICKIT"
				| "ORTHWORM"
				| "PIKACHU"
				| "QUAXLY"
				| "QUAXWELL"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SHELGON"
				| "SIZZLIPEDE"
				| "SNOM"
				| "SPRIGATITO"
				| "STARYU"
				| "VOLTORB"
				| "WATTREL"
				| "WIMPOD"
				| "YAMPER";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "BAGON"
				| "BLIPBUG"
				| "DRATINI"
				| "DRILBUR"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "GOSSIFLEUR"
				| "INKAY"
				| "LATIOS"
				| "LILLIPUP"
				| "NICKIT"
				| "NUMEL"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SIZZLIPEDE"
				| "STARYU"
				| "VOLTORB"
				| "WIMPOD"
				| "YAMPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

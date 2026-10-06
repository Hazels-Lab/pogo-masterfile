// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 920 entries (structural types).

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
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "LURE_MODULE" | "SPAWN_UNKNOWN" | "TEAM_ROCKET" | "TRADE";
			text:
				| "applin_apple_drop_bonus"
				| "bonus_tgr_stardust"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "mossy_lure_duration_double"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "LURE_MODULE" | "SPAWN_UNKNOWN" | "TEAM_ROCKET" | "TRADE";
			text:
				| "applin_apple_drop_bonus"
				| "bonus_tgr_stardust"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "mossy_lure_duration_double"
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
				| "APPLIN"
				| "ARROKUDA"
				| "BAGON"
				| "BELDUM"
				| "BLIPBUG"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "DRATINI"
				| "DRILBUR"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "HONEDGE"
				| "INKAY"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "LATIOS"
				| "LILLIPUP"
				| "MAREEP"
				| "MEOWTH"
				| "MINCCINO"
				| "NACLI"
				| "NICKIT"
				| "NUMEL"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SHINX"
				| "SIZZLIPEDE"
				| "SKARMORY"
				| "SKIDDO"
				| "SNOM"
				| "STARYU"
				| "TYMPOLE"
				| "VOLTORB"
				| "WIMPOD"
				| "YAMASK"
				| "YAMPER";
		};
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_GIOVANNI_MAP"
				| "ITEM_GOLDEN_PINAP_BERRY"
				| "ITEM_GOLDEN_RAZZ_BERRY"
				| "ITEM_GREAT_BALL"
				| "ITEM_INCENSE_ORDINARY"
				| "ITEM_INCUBATOR_BASIC"
				| "ITEM_INCUBATOR_SUPER"
				| "ITEM_INCUBATOR_TIMED"
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_LUCKY_FRIEND_APPLICATOR"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_A"
				| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_B"
				| "ITEM_OTHER_EVOLUTION_STONE_MAPLE_C"
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_STAR_PIECE"
				| "ITEM_TROY_DISK"
				| "ITEM_TROY_DISK_MOSSY"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "harvestfestival2026_season_pass_entitlement"
				| "harvestfestival2026_season_pass_rank_01"
				| "harvestfestival2026_season_pass_rank_02"
				| "harvestfestival2026_season_pass_rank_03"
				| "october2026_season_pass_entitlement"
				| "october2026_season_pass_rank_01"
				| "october2026_season_pass_rank_02"
				| "october2026_season_pass_rank_03"
				| "october2026_season_pass_rank_04"
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
				costume?: "SPRING_2024";
				form:
					| "AMPHAROS_NORMAL"
					| "APPLIN_NORMAL"
					| "ARROKUDA_NORMAL"
					| "BLIPBUG_NORMAL"
					| "BOUNSWEET_NORMAL"
					| "CAMERUPT_NORMAL"
					| "CHANSEY_NORMAL"
					| "CINCCINO_NORMAL"
					| "COTTONEE_NORMAL"
					| "DEDENNE_NORMAL"
					| "DRATINI_NORMAL"
					| "DRILBUR_NORMAL"
					| "ESPURR_NORMAL"
					| "FERROTHORN_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FINNEON_NORMAL"
					| "FLITTLE_NORMAL"
					| "FOMANTIS_NORMAL"
					| "FOONGUS_NORMAL"
					| "FRILLISH_FEMALE"
					| "FURFROU_NATURAL"
					| "GASTLY_NORMAL"
					| "GLIMMET_NORMAL"
					| "GOSSIFLEUR_NORMAL"
					| "HONEDGE_NORMAL"
					| "INKAY_NORMAL"
					| "KLEAVOR_NORMAL"
					| "KOMALA_NORMAL"
					| "KYOGRE_NORMAL"
					| "LARVITAR_NORMAL"
					| "LATIOS_NORMAL"
					| "LECHONK_NORMAL"
					| "LILLIPUP_NORMAL"
					| "METANG_NORMAL"
					| "NACLI_NORMAL"
					| "NICKIT_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PERSIAN_ALOLA"
					| "PORYGON_NORMAL"
					| "QWILFISH_HISUIAN"
					| "ROCKRUFF_NORMAL"
					| "ROGGENROLA_NORMAL"
					| "SHELGON_NORMAL"
					| "SHINX_NORMAL"
					| "SHROOMISH_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SKARMORY_NORMAL"
					| "SKIDDO_NORMAL"
					| "SMOLIV_NORMAL"
					| "SNOM_NORMAL"
					| "SNORLAX_NORMAL"
					| "STARYU_NORMAL"
					| "TYMPOLE_NORMAL"
					| "VOLTORB_HISUIAN"
					| "WIMPOD_NORMAL"
					| "YAMASK_GALARIAN"
					| "YAMPER_NORMAL";
			};
			pokemonId:
				| "AMPHAROS"
				| "APPLIN"
				| "ARROKUDA"
				| "BLIPBUG"
				| "BOUNSWEET"
				| "CAMERUPT"
				| "CHANSEY"
				| "CINCCINO"
				| "COTTONEE"
				| "DEDENNE"
				| "DRATINI"
				| "DRILBUR"
				| "ESPURR"
				| "FERROTHORN"
				| "FIDOUGH"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FOONGUS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "HONEDGE"
				| "INKAY"
				| "KLEAVOR"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "LATIOS"
				| "LECHONK"
				| "LILLIPUP"
				| "METANG"
				| "NACLI"
				| "NICKIT"
				| "ORTHWORM"
				| "PERSIAN"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SHELGON"
				| "SHINX"
				| "SHROOMISH"
				| "SIZZLIPEDE"
				| "SKARMORY"
				| "SKIDDO"
				| "SMOLIV"
				| "SNOM"
				| "SNORLAX"
				| "STARYU"
				| "TYMPOLE"
				| "VOLTORB"
				| "WIMPOD"
				| "YAMASK"
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
				| "BELDUM"
				| "BLIPBUG"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "DRATINI"
				| "DRILBUR"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "FINNEON"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "INKAY"
				| "KYOGRE"
				| "LARVITAR"
				| "LATIOS"
				| "LILLIPUP"
				| "MEOWTH"
				| "NICKIT"
				| "NUMEL"
				| "PORYGON"
				| "QWILFISH"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SHINX"
				| "SIZZLIPEDE"
				| "SKARMORY"
				| "SNOM"
				| "STARYU"
				| "TYMPOLE"
				| "VOLTORB"
				| "WIMPOD"
				| "YAMASK"
				| "YAMPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

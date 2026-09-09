// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 940 entries (structural types).

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
			iconType: "EGG" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "SPAWN_UNKNOWN" | "TRADE";
			text:
				| "dai_duration_double"
				| "daily_free_single_incubator"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_stardust_double"
				| "incubator_distance_half"
				| "mega_energy_weedle_pidgey_houndour_carvanha"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "EGG" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "SPAWN_UNKNOWN" | "TRADE";
			text:
				| "dai_duration_double"
				| "daily_free_single_incubator"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_stardust_double"
				| "incubator_distance_half"
				| "mega_energy_weedle_pidgey_houndour_carvanha"
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
				| "ABRA"
				| "AERODACTYL"
				| "ARROKUDA"
				| "AUDINO"
				| "BAGON"
				| "BLIPBUG"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DONDOZO"
				| "DRATINI"
				| "DRILBUR"
				| "EEVEE"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "FLITTLE"
				| "FRILLISH"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "GROWLITHE"
				| "HONEDGE"
				| "INKAY"
				| "JANGMO_O"
				| "LATIAS"
				| "LATIOS"
				| "LILLIPUP"
				| "MEOWTH"
				| "MINCCINO"
				| "MUDKIP"
				| "NACLI"
				| "NICKIT"
				| "NUMEL"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SNOM"
				| "SOBBLE"
				| "STANTLER"
				| "STARYU"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE"
				| "VOLTORB"
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
				| "ITEM_LUCKY_FRIEND_APPLICATOR"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_STAR_PIECE"
				| "ITEM_TROY_DISK"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		megaResource?: {
			amount: number;
			pokemonId: "BEEDRILL" | "HOUNDOOM";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_shirt_maschiff";
			itemTemplateId: "N_AVATAR_n_shirt_maschiff";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "august2026_season_pass_entitlement"
				| "august2026_season_pass_rank_01"
				| "august2026_season_pass_rank_01_paid"
				| "august2026_season_pass_rank_02"
				| "august2026_season_pass_rank_03"
				| "august2026_season_pass_rank_04"
				| "megasquads2026_season_pass_entitlement"
				| "megasquads2026_season_pass_rank_01"
				| "megasquads2026_season_pass_rank_01_paid_not_used"
				| "megasquads2026_season_pass_rank_02"
				| "megasquads2026_season_pass_rank_02_paid"
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
					| "AERODACTYL_NORMAL"
					| "ALAKAZAM_NORMAL"
					| "ARROKUDA_NORMAL"
					| "AUDINO_NORMAL"
					| "BEEDRILL_NORMAL"
					| "BLIPBUG_NORMAL"
					| "CAMERUPT_NORMAL"
					| "CARVANHA_NORMAL"
					| "CHIMECHO_NORMAL"
					| "CINCCINO_NORMAL"
					| "CLAMPERL_NORMAL"
					| "CORVISQUIRE_NORMAL"
					| "DONDOZO_NORMAL"
					| "DRATINI_NORMAL"
					| "DRILBUR_NORMAL"
					| "EEVEE_NORMAL"
					| "ESPURR_NORMAL"
					| "FERROTHORN_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FLAMIGO_NORMAL"
					| "FLETCHINDER_NORMAL"
					| "FLETCHLING_NORMAL"
					| "FLITTLE_NORMAL"
					| "FRILLISH_NORMAL"
					| "GLIMMET_NORMAL"
					| "GOSSIFLEUR_NORMAL"
					| "GROWLITHE_HISUIAN"
					| "GROWLITHE_NORMAL"
					| "HITMONCHAN_NORMAL"
					| "HONEDGE_NORMAL"
					| "HOUNDOOM_NORMAL"
					| "HOUNDOUR_NORMAL"
					| "INKAY_NORMAL"
					| "JANGMO_O_NORMAL"
					| "KLEAVOR_NORMAL"
					| "LATIAS_NORMAL"
					| "LATIOS_NORMAL"
					| "LILLIPUP_NORMAL"
					| "MASCHIFF_NORMAL"
					| "MEOWTH_ALOLA"
					| "MEOWTH_NORMAL"
					| "MUDKIP_NORMAL"
					| "NACLI_NORMAL"
					| "NICKIT_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PIDGEOTTO_NORMAL"
					| "PIDGEY_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "ROGGENROLA_NORMAL"
					| "ROOKIDEE_NORMAL"
					| "SHELGON_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SNOM_NORMAL"
					| "SOBBLE_NORMAL"
					| "STARYU_NORMAL"
					| "SWINUB_NORMAL"
					| "TOGEDEMARU_NORMAL"
					| "VOLTORB_HISUIAN"
					| "WEEDLE_NORMAL"
					| "WIMPOD_NORMAL"
					| "WYRDEER_NORMAL"
					| "YAMPER_NORMAL"
					| "ZWEILOUS_NORMAL";
			};
			pokemonId:
				| "AERODACTYL"
				| "ALAKAZAM"
				| "ARROKUDA"
				| "AUDINO"
				| "BEEDRILL"
				| "BLIPBUG"
				| "CAMERUPT"
				| "CARVANHA"
				| "CHIMECHO"
				| "CINCCINO"
				| "CLAMPERL"
				| "CORVISQUIRE"
				| "DONDOZO"
				| "DRATINI"
				| "DRILBUR"
				| "EEVEE"
				| "ESPURR"
				| "FERROTHORN"
				| "FIDOUGH"
				| "FLAMIGO"
				| "FLETCHINDER"
				| "FLETCHLING"
				| "FLITTLE"
				| "FRILLISH"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "GROWLITHE"
				| "HITMONCHAN"
				| "HONEDGE"
				| "HOUNDOOM"
				| "HOUNDOUR"
				| "INKAY"
				| "JANGMO_O"
				| "KLEAVOR"
				| "LATIAS"
				| "LATIOS"
				| "LILLIPUP"
				| "MASCHIFF"
				| "MEOWTH"
				| "MUDKIP"
				| "NACLI"
				| "NICKIT"
				| "ORTHWORM"
				| "PIDGEOTTO"
				| "PIDGEY"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "ROOKIDEE"
				| "SHELGON"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SNOM"
				| "SOBBLE"
				| "STARYU"
				| "SWINUB"
				| "TOGEDEMARU"
				| "VOLTORB"
				| "WEEDLE"
				| "WIMPOD"
				| "WYRDEER"
				| "YAMPER"
				| "ZWEILOUS";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "MEGA_RESOURCE" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "AERODACTYL"
				| "AUDINO"
				| "BAGON"
				| "BLIPBUG"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DRATINI"
				| "DRILBUR"
				| "EEVEE"
				| "ESPURR"
				| "FERROSEED"
				| "FIDOUGH"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "GROWLITHE"
				| "INKAY"
				| "JANGMO_O"
				| "LATIAS"
				| "LATIOS"
				| "LILLIPUP"
				| "MEOWTH"
				| "NICKIT"
				| "NUMEL"
				| "ROGGENROLA"
				| "SCYTHER"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SNOM"
				| "SOBBLE"
				| "STANTLER"
				| "STARYU"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE"
				| "VOLTORB"
				| "WIMPOD"
				| "YAMPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

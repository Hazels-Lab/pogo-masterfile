// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 420 entries (structural types).

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
				| "daily_free_single_incubator"
				| "gift_open_more_daily"
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
				| "daily_free_single_incubator"
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
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId:
				| "ABRA"
				| "AERODACTYL"
				| "AUDINO"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DONDOZO"
				| "EEVEE"
				| "FRILLISH"
				| "GLIMMET"
				| "GROWLITHE"
				| "JANGMO_O"
				| "LATIAS"
				| "MEOWTH"
				| "MUDKIP"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "SINISTEA"
				| "SNOM"
				| "SOBBLE"
				| "STANTLER"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE";
		};
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_GOLDEN_PINAP_BERRY"
				| "ITEM_GOLDEN_RAZZ_BERRY"
				| "ITEM_GREAT_BALL"
				| "ITEM_INCENSE_ORDINARY"
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
		playerAttribute?: {
			durationMins: number;
			key:
				| "august2026_season_pass_entitlement"
				| "august2026_season_pass_rank_01"
				| "august2026_season_pass_rank_01_paid"
				| "august2026_season_pass_rank_02"
				| "august2026_season_pass_rank_03"
				| "august2026_season_pass_rank_04";
		};
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "AERODACTYL_NORMAL"
					| "ALAKAZAM_NORMAL"
					| "AUDINO_NORMAL"
					| "CHIMECHO_NORMAL"
					| "CLAMPERL_NORMAL"
					| "DONDOZO_NORMAL"
					| "EEVEE_NORMAL"
					| "FRILLISH_NORMAL"
					| "GLIMMET_NORMAL"
					| "GROWLITHE_HISUIAN"
					| "GROWLITHE_NORMAL"
					| "HITMONCHAN_NORMAL"
					| "JANGMO_O_NORMAL"
					| "LATIAS_NORMAL"
					| "MEOWTH_ALOLA"
					| "MEOWTH_NORMAL"
					| "MUDKIP_NORMAL"
					| "ORTHWORM_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "SNOM_NORMAL"
					| "SOBBLE_NORMAL"
					| "SWINUB_NORMAL"
					| "TOGEDEMARU_NORMAL"
					| "WYRDEER_NORMAL"
					| "ZWEILOUS_NORMAL";
			};
			pokemonId:
				| "AERODACTYL"
				| "ALAKAZAM"
				| "AUDINO"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DONDOZO"
				| "EEVEE"
				| "FRILLISH"
				| "GLIMMET"
				| "GROWLITHE"
				| "HITMONCHAN"
				| "JANGMO_O"
				| "LATIAS"
				| "MEOWTH"
				| "MUDKIP"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "SINISTEA"
				| "SNOM"
				| "SOBBLE"
				| "SWINUB"
				| "TOGEDEMARU"
				| "WYRDEER"
				| "ZWEILOUS";
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
				| "AERODACTYL"
				| "AUDINO"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "EEVEE"
				| "GLIMMET"
				| "GROWLITHE"
				| "JANGMO_O"
				| "LATIAS"
				| "MEOWTH"
				| "SINISTEA"
				| "SNOM"
				| "SOBBLE"
				| "STANTLER"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

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
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DRAMPA"
				| "EEVEE"
				| "FRILLISH"
				| "FURFROU"
				| "GOOMY"
				| "HIPPOPOTAS"
				| "HO_OH"
				| "HOUNDOUR"
				| "KABUTO"
				| "MR_MIME"
				| "POLTCHAGEIST"
				| "PONYTA"
				| "ROCKRUFF"
				| "SCORBUNNY"
				| "SHELLDER"
				| "SINISTEA"
				| "SNOM"
				| "TADBULB"
				| "TINKATINK"
				| "TORCHIC"
				| "TYROGUE"
				| "VULPIX";
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
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_STAR_PIECE"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "july2026_season_pass_entitlement"
				| "july2026_season_pass_rank_01"
				| "july2026_season_pass_rank_02"
				| "july2026_season_pass_rank_03"
				| "july2026_season_pass_rank_04";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "CHIMECHO_NORMAL"
					| "CLAMPERL_NORMAL"
					| "CLOYSTER_NORMAL"
					| "DRAMPA_NORMAL"
					| "EEVEE_NORMAL"
					| "FRILLISH_NORMAL"
					| "FURFROU_NATURAL"
					| "GIMMIGHOUL_COIN_A2_2026"
					| "GOOMY_NORMAL"
					| "HIPPOPOTAS_NORMAL"
					| "HITMONCHAN_NORMAL"
					| "HO_OH_NORMAL"
					| "HOUNDOOM_NORMAL"
					| "KABUTOPS_NORMAL"
					| "MR_MIME_GALARIAN"
					| "PONYTA_GALARIAN"
					| "PONYTA_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "SCORBUNNY_NORMAL"
					| "SNOM_NORMAL"
					| "TADBULB_NORMAL"
					| "TINKATINK_NORMAL"
					| "TORCHIC_NORMAL"
					| "VULPIX_ALOLA"
					| "VULPIX_NORMAL"
					| "ZWEILOUS_NORMAL";
				locationCard?: {
					locationCard: "LC_SPECIALBACKGROUND_GG2026";
				};
			};
			pokemonId:
				| "CHIMECHO"
				| "CLAMPERL"
				| "CLOYSTER"
				| "DRAMPA"
				| "EEVEE"
				| "FRILLISH"
				| "FURFROU"
				| "GIMMIGHOUL"
				| "GOOMY"
				| "HIPPOPOTAS"
				| "HITMONCHAN"
				| "HO_OH"
				| "HOUNDOOM"
				| "KABUTOPS"
				| "MR_MIME"
				| "POLTCHAGEIST"
				| "PONYTA"
				| "ROCKRUFF"
				| "SCORBUNNY"
				| "SINISTEA"
				| "SNOM"
				| "TADBULB"
				| "TINKATINK"
				| "TORCHIC"
				| "VULPIX"
				| "ZWEILOUS";
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
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "EEVEE"
				| "FURFROU"
				| "GOOMY"
				| "HIPPOPOTAS"
				| "HO_OH"
				| "KABUTO"
				| "MR_MIME"
				| "PONYTA"
				| "SCORBUNNY"
				| "SHELLDER"
				| "SINISTEA"
				| "SNOM"
				| "TADBULB"
				| "TYROGUE"
				| "VULPIX";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

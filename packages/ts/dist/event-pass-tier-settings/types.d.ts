// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 1840 entries (structural types).

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
			iconType: number | "CANDY_GENERAL" | "CANDY_XL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE" | "XP";
			text:
				| "bonus_go_tour_2023_add_on_raid_02"
				| "bonus_link_charge_cap_2000"
				| "bonus_raid_1_xl_candy"
				| "bonus_raid_3_candy"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_storage_more"
				| "hatch_candy_double"
				| "hatch_stardust_double"
				| "incubator_distance_half"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "active_bonuses_label" | "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "CANDY_GENERAL" | "CANDY_XL" | "EGG_INCUBATOR" | "EVENT" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE" | "XP";
			text:
				| "bonus_go_tour_2023_add_on_raid_02"
				| "bonus_link_charge_cap_2000"
				| "bonus_raid_1_xl_candy"
				| "bonus_raid_3_candy"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_candy_double"
				| "hatch_stardust_double"
				| "incubator_distance_half"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName:
			| "season_pass_milestone_bonus_title_01"
			| "season_pass_milestone_bonus_title_02"
			| "season_pass_milestone_bonus_title_03"
			| "season_pass_milestone_bonus_title_04"
			| "short_bonus_go_tour_2023_add_on_raid_02"
			| "short_bonus_link_charge_cap_2000"
			| "short_bonus_raid_1_xl_candy"
			| "short_bonus_raid_3_candy"
			| "short_hatch_candy_double"
			| "short_hatch_stardust_double"
			| "short_incubator_distance_half";
	};
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId: string;
		};
		exp?: number;
		item?: {
			amount: number;
			item:
				| "ITEM_ENHANCED_CURRENCY"
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
				| "ITEM_TRIPLE_STAT_INCREASE"
				| "ITEM_TROY_DISK"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		megaResource?: {
			amount: number;
			pokemonId: "GARDEVOIR";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_pose_gofest2026" | "N_DISPLAY_n_shirt_gofest2026-purple";
			itemTemplateId: "N_AVATAR_n_pose_gofest2026" | "N_AVATAR_n_shirt_gofest2026-purple";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "EVENT_PASS_GOFEST2026_HALF_HATCH"
				| "EVENT_PASS_GOFEST2026_HATCH_CANDY"
				| "EVENT_PASS_GOFEST2026_HATCH_STARDUST"
				| "EVENT_PASS_GOFEST2026_LINK_CHARGE"
				| "EVENT_PASS_GOFEST2026_RAID_CANDY"
				| "EVENT_PASS_GOFEST2026_RAID_XL_CANDY"
				| "EVENT_PASS_GOFEST2026_RAID_XP"
				| "july2026_season_pass_entitlement"
				| "july2026_season_pass_rank_01"
				| "july2026_season_pass_rank_02"
				| "july2026_season_pass_rank_03"
				| "july2026_season_pass_rank_04"
				| "june2026_season_pass_entitlement"
				| "june2026_season_pass_rank_01"
				| "june2026_season_pass_rank_02"
				| "june2026_season_pass_rank_03"
				| "june2026_season_pass_rank_04";
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
					| "DHELMISE_NORMAL"
					| "DRAMPA_NORMAL"
					| "EEVEE_NORMAL"
					| "FLITTLE_NORMAL"
					| "FRILLISH_NORMAL"
					| "FURFROU_NATURAL"
					| "GARBODOR_NORMAL"
					| "GARDEVOIR_NORMAL"
					| "GIBLE_NORMAL"
					| "GIMMIGHOUL_COIN_A2_2026"
					| "GOOMY_NORMAL"
					| "GROOKEY_NORMAL"
					| "HIPPOPOTAS_NORMAL"
					| "HITMONCHAN_NORMAL"
					| "HITMONLEE_NORMAL"
					| "HO_OH_NORMAL"
					| "HOUNDOOM_NORMAL"
					| "KABUTOPS_NORMAL"
					| "LILLIGANT_HISUIAN"
					| "LUGIA_NORMAL"
					| "MEDICHAM_NORMAL"
					| "MEOWTH_GALARIAN"
					| "MEOWTH_NORMAL"
					| "MEWTWO_NORMAL"
					| "MR_MIME_GALARIAN"
					| "OMASTAR_NORMAL"
					| "PIKACHU_GOFEST_2026_CAP_BLUE"
					| "PIKACHU_GOFEST_2026_CAP_RED"
					| "PIKACHU_GOFEST_2026_CAP_YELLOW"
					| "PONYTA_GALARIAN"
					| "PONYTA_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "SCORBUNNY_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SNEASEL_HISUIAN"
					| "SNEASEL_NORMAL"
					| "SNOM_NORMAL"
					| "STANTLER_NORMAL"
					| "TADBULB_NORMAL"
					| "TINKATINK_NORMAL"
					| "TORCHIC_NORMAL"
					| "TRAPINCH_NORMAL"
					| "TREECKO_NORMAL"
					| "VULPIX_ALOLA"
					| "VULPIX_NORMAL"
					| "ZWEILOUS_NORMAL";
				locationCard?: {
					locationCard: "LC_SPECIALBACKGROUND_2026_MEWTWO_001" | "LC_SPECIALBACKGROUND_GG2026";
				};
			};
			pokemonId:
				| "CHIMECHO"
				| "CLAMPERL"
				| "CLOYSTER"
				| "DHELMISE"
				| "DRAMPA"
				| "EEVEE"
				| "FLITTLE"
				| "FRILLISH"
				| "FURFROU"
				| "GARBODOR"
				| "GARDEVOIR"
				| "GIBLE"
				| "GIMMIGHOUL"
				| "GOOMY"
				| "GROOKEY"
				| "HIPPOPOTAS"
				| "HITMONCHAN"
				| "HITMONLEE"
				| "HO_OH"
				| "HOUNDOOM"
				| "KABUTOPS"
				| "LILLIGANT"
				| "LUGIA"
				| "MEDICHAM"
				| "MEOWTH"
				| "MEWTWO"
				| "MR_MIME"
				| "OMASTAR"
				| "PIKACHU"
				| "POLTCHAGEIST"
				| "PONYTA"
				| "ROCKRUFF"
				| "SCORBUNNY"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SNEASEL"
				| "SNOM"
				| "STANTLER"
				| "TADBULB"
				| "TINKATINK"
				| "TORCHIC"
				| "TRAPINCH"
				| "TREECKO"
				| "VULPIX"
				| "ZWEILOUS";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type:
			| "AVATAR_CLOTHING"
			| "CANDY"
			| "EXPERIENCE"
			| "ITEM"
			| "MEGA_RESOURCE"
			| "PLAYER_ATTRIBUTE"
			| "POKECOIN"
			| "POKEMON_ENCOUNTER"
			| "STARDUST"
			| "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId: string;
		};
	}>;
	track: "FREE" | "PREMIUM";
}

// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 1620 entries (structural types).

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
			iconType: number | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "RAID" | "SPAWN_UNKNOWN" | "TRADE";
			text:
				| "bonus_link_charge_cap_2000"
				| "dai_duration_double"
				| "daily_free_single_incubator"
				| "event_pass_gofest2026_finale_chosen_starter_shiny_bonus"
				| "event_pass_gofest2026_finale_mega_raid_rewards_bonus"
				| "event_pass_gofest2026_finale_t4_mega_raid_shiny_bonus"
				| "event_pass_gofest2026_finale_weekend_wild_shiny_bonus"
				| "gift_open_more_daily"
				| "gift_storage_more"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "active_bonuses_label" | "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: number | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "RAID" | "SPAWN_UNKNOWN" | "TRADE";
			text:
				| "bonus_link_charge_cap_2000"
				| "dai_duration_double"
				| "daily_free_single_incubator"
				| "event_pass_gofest2026_finale_chosen_starter_shiny_bonus"
				| "event_pass_gofest2026_finale_mega_raid_rewards_bonus"
				| "event_pass_gofest2026_finale_t4_mega_raid_shiny_bonus"
				| "event_pass_gofest2026_finale_weekend_wild_shiny_bonus"
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
			| "season_pass_milestone_bonus_title_04"
			| "short_bonus_link_charge_cap_2000"
			| "short_event_pass_gofest2026_finale_chosen_starter_shiny_bonus"
			| "short_event_pass_gofest2026_finale_mega_raid_rewards_bonus"
			| "short_event_pass_gofest2026_finale_t4_mega_raid_shiny_bonus"
			| "short_event_pass_gofest2026_finale_weekend_wild_shiny_bonus";
	};
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId:
				| "ABRA"
				| "AERODACTYL"
				| "ARON"
				| "AUDINO"
				| "BELLSPROUT"
				| "BUNEARY"
				| "CARVANHA"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DONDOZO"
				| "DRATINI"
				| "EEVEE"
				| "ELECTRIKE"
				| "FALINKS"
				| "FENNEKIN"
				| "FRILLISH"
				| "GASTLY"
				| "GLIMMET"
				| "GROWLITHE"
				| "HOUNDOUR"
				| "INKAY"
				| "JANGMO_O"
				| "LATIAS"
				| "MAGIKARP"
				| "MAREEP"
				| "MAWILE"
				| "MEDITITE"
				| "MEOWTH"
				| "MUDKIP"
				| "NUMEL"
				| "ONIX"
				| "ORTHWORM"
				| "PIKACHU"
				| "PINSIR"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "SABLEYE"
				| "SHUPPET"
				| "SINISTEA"
				| "SKARMORY"
				| "SLOWPOKE"
				| "SNOM"
				| "SNORUNT"
				| "SNOVER"
				| "SOBBLE"
				| "STANTLER"
				| "STARYU"
				| "SWABLU"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE"
				| "WEEDLE";
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
			pokemonId:
				| "ABOMASNOW"
				| "AERODACTYL"
				| "AGGRON"
				| "ALAKAZAM"
				| "ALTARIA"
				| "AMPHAROS"
				| "AUDINO"
				| "BANETTE"
				| "BEEDRILL"
				| "CAMERUPT"
				| "DELPHOX"
				| "DRAGONITE"
				| "FALINKS"
				| "GENGAR"
				| "GLALIE"
				| "GYARADOS"
				| "HOUNDOOM"
				| "LOPUNNY"
				| "MALAMAR"
				| "MANECTRIC"
				| "MAWILE"
				| "MEDICHAM"
				| "PINSIR"
				| "SABLEYE"
				| "SHARPEDO"
				| "SKARMORY"
				| "SLOWBRO"
				| "STARMIE"
				| "STEELIX"
				| "VICTREEBEL";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_shirt_gofest2026finred";
			itemTemplateId: "N_AVATAR_n_shirt_gofest2026finred";
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
				| "EVENT_PASS_GOFEST2026_FINALE_FENNEKIN_SHINY"
				| "EVENT_PASS_GOFEST2026_FINALE_LINK_CHARGE"
				| "EVENT_PASS_GOFEST2026_FINALE_RAID_REWARDS"
				| "EVENT_PASS_GOFEST2026_FINALE_RAID_SHINY"
				| "EVENT_PASS_GOFEST2026_FINALE_WEEKEND_WILD_SHINY";
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
					| "DELPHOX_NORMAL"
					| "DONDOZO_NORMAL"
					| "EEVEE_NORMAL"
					| "FENNEKIN_NORMAL"
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
				locationCard?: {
					locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001";
				};
			};
			pokemonId:
				| "AERODACTYL"
				| "ALAKAZAM"
				| "AUDINO"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DELPHOX"
				| "DONDOZO"
				| "EEVEE"
				| "FENNEKIN"
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
		type: number | "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "MEGA_RESOURCE" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "ABRA"
				| "AERODACTYL"
				| "ARON"
				| "AUDINO"
				| "BELLSPROUT"
				| "BUNEARY"
				| "CARVANHA"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DRATINI"
				| "EEVEE"
				| "ELECTRIKE"
				| "FALINKS"
				| "FENNEKIN"
				| "GASTLY"
				| "GLIMMET"
				| "GROWLITHE"
				| "HOUNDOUR"
				| "INKAY"
				| "JANGMO_O"
				| "LATIAS"
				| "MAGIKARP"
				| "MAREEP"
				| "MAWILE"
				| "MEDITITE"
				| "MEOWTH"
				| "NUMEL"
				| "ONIX"
				| "PIKACHU"
				| "PINSIR"
				| "SABLEYE"
				| "SHUPPET"
				| "SINISTEA"
				| "SKARMORY"
				| "SLOWPOKE"
				| "SNOM"
				| "SNORUNT"
				| "SNOVER"
				| "SOBBLE"
				| "STANTLER"
				| "STARYU"
				| "SWABLU"
				| "SWINUB"
				| "TOGEDEMARU"
				| "TYROGUE"
				| "WEEDLE";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

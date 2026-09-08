// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 2140 entries (structural types).

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
			iconType: number | "EGG" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "RAID" | "SPAWN_UNKNOWN" | "TRADE";
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
				| "hatch_stardust_double"
				| "incubator_distance_half"
				| "mega_energy_weedle_pidgey_houndour_carvanha"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "active_bonuses_label" | "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: number | "EGG" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "RAID" | "SPAWN_UNKNOWN" | "TRADE";
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
			| "season_pass_milestone_bonus_title_04"
			| "short_bonus_link_charge_cap_2000"
			| "short_event_pass_gofest2026_finale_chosen_starter_shiny_bonus"
			| "short_event_pass_gofest2026_finale_mega_raid_rewards_bonus"
			| "short_event_pass_gofest2026_finale_t4_mega_raid_shiny_bonus"
			| "short_event_pass_gofest2026_finale_weekend_wild_shiny_bonus";
	};
	isMilestoneRank?: boolean;
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
			displayTemplateId: "N_DISPLAY_n_shirt_gofest2026finred" | "N_DISPLAY_n_shirt_maschiff";
			itemTemplateId: "N_AVATAR_n_shirt_gofest2026finred" | "N_AVATAR_n_shirt_maschiff";
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
				| "EVENT_PASS_GOFEST2026_FINALE_WEEKEND_WILD_SHINY"
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
				form: string;
				locationCard?: {
					locationCard: "LC_SPECIALBACKGROUND_2026_GLOBAL_MEGA_001";
				};
			};
			pokemonId: string;
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		tempEvoResource?: {
			amount: number;
			tempEvoPokemonBranch: {
				pokedexId: "RAICHU";
				tempEvoId: "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y";
			};
		};
		type: number | "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "MEGA_RESOURCE" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "ABRA"
				| "AERODACTYL"
				| "ARON"
				| "AUDINO"
				| "BAGON"
				| "BELLSPROUT"
				| "BLIPBUG"
				| "BUNEARY"
				| "CARVANHA"
				| "CHIMECHO"
				| "CLAMPERL"
				| "DEINO"
				| "DRATINI"
				| "DRILBUR"
				| "EEVEE"
				| "ELECTRIKE"
				| "ESPURR"
				| "FALINKS"
				| "FENNEKIN"
				| "FERROSEED"
				| "FIDOUGH"
				| "GASTLY"
				| "GLIMMET"
				| "GOSSIFLEUR"
				| "GROWLITHE"
				| "HOUNDOUR"
				| "INKAY"
				| "JANGMO_O"
				| "LATIAS"
				| "LATIOS"
				| "LILLIPUP"
				| "MAGIKARP"
				| "MAREEP"
				| "MAWILE"
				| "MEDITITE"
				| "MEOWTH"
				| "NICKIT"
				| "NUMEL"
				| "ONIX"
				| "PIKACHU"
				| "PINSIR"
				| "ROGGENROLA"
				| "SABLEYE"
				| "SCYTHER"
				| "SHUPPET"
				| "SINISTEA"
				| "SIZZLIPEDE"
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
				| "VOLTORB"
				| "WEEDLE"
				| "WIMPOD"
				| "YAMPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

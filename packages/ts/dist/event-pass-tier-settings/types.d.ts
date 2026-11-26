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
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE";
			text:
				| "catch_stardust_double"
				| "catch_stardust_triple"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "lucky_friend_increase"
				| "lucky_trade_increase"
				| "season_pass_bonus_hatch_xp_stardust"
				| "trade_extra_candy"
				| "trade_guaranteed_candyxl";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE";
			text:
				| "catch_stardust_double"
				| "catch_stardust_triple"
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "lucky_friend_increase"
				| "lucky_trade_increase"
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
				| "ITEM_PAID_RAID_TICKET"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_STAR_PIECE"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		megaResource?: {
			amount: number;
			pokemonId: "BEEDRILL" | "HOUNDOOM" | "MANECTRIC" | "SABLEYE";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_pose_starballoon";
			itemTemplateId: "N_AVATAR_n_pose_starballoon";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "november2026_season_pass_entitlement"
				| "november2026_season_pass_rank_01"
				| "november2026_season_pass_rank_02"
				| "november2026_season_pass_rank_03"
				| "november2026_season_pass_rank_04"
				| "twilight_trails_finale_event_pass_entitlement"
				| "twilight_trails_finale_event_pass_milestone_1"
				| "twilight_trails_finale_event_pass_milestone_3"
				| "twilight_trails_finale_event_pass_milestone_3_paid";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				costume?: "FALL_2022_NOEVOLVE" | "HALLOWEEN_2021_NOEVOLVE" | "SPRING_2024";
				form:
					| "ABSOL_NORMAL"
					| "APPLIN_NORMAL"
					| "BRAMBLIN_NORMAL"
					| "CHIMECHO_NORMAL"
					| "COMBEE_NORMAL"
					| "COTTONEE_NORMAL"
					| "DHELMISE_NORMAL"
					| "DRAGONAIR_NORMAL"
					| "DRIFBLIM_NORMAL"
					| "DUGTRIO_ALOLA"
					| "DURALUDON_NORMAL"
					| "ELECTRIKE_NORMAL"
					| "ELGYEM_NORMAL"
					| "ESPEON_GOFEST_2024_SSCARF"
					| "FALINKS_NORMAL"
					| "FIDOUGH_NORMAL"
					| "FLAMIGO_NORMAL"
					| "FLITTLE_NORMAL"
					| "GENGAR_NORMAL"
					| "GIBLE_NORMAL"
					| "GREAVARD_NORMAL"
					| "GROUDON_NORMAL"
					| "IMPIDIMP_NORMAL"
					| "KLINK_NORMAL"
					| "MAGCARGO_NORMAL"
					| "MASCHIFF_NORMAL"
					| "MILTANK_NORMAL"
					| "MUNNA_NORMAL"
					| "NICKIT_NORMAL"
					| "PHANPY_NORMAL"
					| "PIKACHU_GOFEST_2024_MTIARA"
					| "PIKACHU_GOFEST_2024_STIARA"
					| "ROOKIDEE_NORMAL"
					| "SANDSHREW_ALOLA"
					| "SANDYGAST_NORMAL"
					| "STARYU_NORMAL"
					| "SWABLU_NORMAL"
					| "TADBULB_NORMAL"
					| "TINKATINK_NORMAL"
					| "TURTONATOR_NORMAL"
					| "UMBREON_GOFEST_2024_MSCARF"
					| "VIGOROTH_NORMAL";
			};
			pokemonId:
				| "ABSOL"
				| "APPLIN"
				| "BRAMBLIN"
				| "CHIMECHO"
				| "COMBEE"
				| "COTTONEE"
				| "DHELMISE"
				| "DRAGONAIR"
				| "DRIFBLIM"
				| "DUGTRIO"
				| "DURALUDON"
				| "ELECTRIKE"
				| "ELGYEM"
				| "ESPEON"
				| "FALINKS"
				| "FIDOUGH"
				| "FLAMIGO"
				| "FLITTLE"
				| "GENGAR"
				| "GIBLE"
				| "GREAVARD"
				| "GROUDON"
				| "IMPIDIMP"
				| "KLINK"
				| "MAGCARGO"
				| "MASCHIFF"
				| "MILTANK"
				| "MUNNA"
				| "NICKIT"
				| "PHANPY"
				| "PIKACHU"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "ROOKIDEE"
				| "SANDSHREW"
				| "SANDYGAST"
				| "STARYU"
				| "SWABLU"
				| "TADBULB"
				| "TINKATINK"
				| "TURTONATOR"
				| "UMBREON"
				| "VIGOROTH";
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

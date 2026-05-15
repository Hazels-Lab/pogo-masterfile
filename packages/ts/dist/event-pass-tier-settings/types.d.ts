// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 540 entries (structural types).

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
		bonusBoxes?: Array<{
			iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
			text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "EGG" | "GIFT" | "INCENSE" | "LUCKY_EGG" | "POKESTOP" | "STARDUST";
			text:
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_stardust_double"
				| "hatch_xp_double"
				| "incubator_distance_half"
				| "pokestop_spin_xp_double"
				| "pokestop_spin_xp_triple";
		}>;
		eventName: "season_pass_milestone_bonus_title_01" | "season_pass_milestone_bonus_title_02" | "season_pass_milestone_bonus_title_03";
	};
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId:
				| "AXEW"
				| "BOMBIRDIER"
				| "BUNEARY"
				| "CHANSEY"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "FLITTLE"
				| "HONEDGE"
				| "MANTINE"
				| "NATU"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROSELIA"
				| "RUFFLET"
				| "SEWADDLE"
				| "SHROOMISH"
				| "SINISTEA"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SPRIGATITO"
				| "SUICUNE"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT";
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
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_PINAP_BERRY"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_shoes_pikachuathletic";
			itemTemplateId: "N_AVATAR_n_shoes_pikachuathletic";
		};
		playerAttribute?: {
			durationMins: number;
			key:
				| "may2026_season_pass_entitlement"
				| "may2026_season_pass_rank_01"
				| "may2026_season_pass_rank_02"
				| "may2026_season_pass_rank_03"
				| "springmarathon2026_season_pass_entitlement"
				| "springmarathon2026_season_pass_rank_01"
				| "springmarathon2026_season_pass_rank_01_paid"
				| "springmarathon2026_season_pass_rank_02";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				costume?: "APRIL_2020_NOEVOLVE" | "NOVEMBER_2018" | "SPRING_2024";
				form:
					| "AUDINO_NORMAL"
					| "BOMBIRDIER_NORMAL"
					| "BRAVIARY_HISUIAN"
					| "BRELOOM_NORMAL"
					| "BUNEARY_NORMAL"
					| "CHANSEY_NORMAL"
					| "COMBEE_NORMAL"
					| "COTTONEE_NORMAL"
					| "DEINO_NORMAL"
					| "DRILBUR_NORMAL"
					| "FLABEBE_WHITE"
					| "FLITTLE_NORMAL"
					| "FRAXURE_NORMAL"
					| "HONEDGE_NORMAL"
					| "JUMPLUFF_NORMAL"
					| "LEAVANNY_NORMAL"
					| "MANTINE_NORMAL"
					| "ORTHWORM_NORMAL"
					| "QWILFISH_HISUIAN"
					| "QWILFISH_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "ROSELIA_NORMAL"
					| "SKIDDO_NORMAL"
					| "SKRELP_NORMAL"
					| "SLOWPOKE_GALARIAN"
					| "SLOWPOKE_NORMAL"
					| "SNOM_NORMAL"
					| "SPHEAL_NORMAL"
					| "SPRIGATITO_NORMAL"
					| "SUICUNE_NORMAL"
					| "TOGETIC_NORMAL"
					| "TOTODILE_NORMAL"
					| "WAILMER_NORMAL"
					| "WOOBAT_NORMAL"
					| "XATU_NORMAL";
			};
			pokemonId:
				| "AUDINO"
				| "BOMBIRDIER"
				| "BRAVIARY"
				| "BRELOOM"
				| "BUNEARY"
				| "CHANSEY"
				| "COMBEE"
				| "COTTONEE"
				| "DEINO"
				| "DRILBUR"
				| "FLABEBE"
				| "FLITTLE"
				| "FRAXURE"
				| "HONEDGE"
				| "JUMPLUFF"
				| "LEAVANNY"
				| "MANTINE"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROSELIA"
				| "SINISTEA"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SPRIGATITO"
				| "SUICUNE"
				| "TOGETIC"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT"
				| "XATU";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKECOIN" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "AXEW"
				| "BUNEARY"
				| "CHANSEY"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "FLITTLE"
				| "HONEDGE"
				| "MANTINE"
				| "NATU"
				| "QWILFISH"
				| "ROSELIA"
				| "RUFFLET"
				| "SINISTEA"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SPRIGATITO"
				| "SUICUNE"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

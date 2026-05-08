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
			iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
			text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
		}>;
		eventName: "go_pass_cumulative_bonuses_header";
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
			text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
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
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "HONEDGE"
				| "MANTINE"
				| "NATU"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "RUFFLET"
				| "SEWADDLE"
				| "SHROOMISH"
				| "SINISTEA"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
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
				| "ITEM_INCUBATOR_SUPER"
				| "ITEM_LEADER_MAP_FRAGMENT"
				| "ITEM_LUCKY_EGG"
				| "ITEM_MOVE_REROLL_FAST_ATTACK"
				| "ITEM_MOVE_REROLL_SPECIAL_ATTACK"
				| "ITEM_MP"
				| "ITEM_NANAB_BERRY"
				| "ITEM_POFFIN"
				| "ITEM_POKE_BALL"
				| "ITEM_RARE_CANDY"
				| "ITEM_RAZZ_BERRY"
				| "ITEM_ULTRA_BALL"
				| "ITEM_XL_RARE_CANDY";
		};
		playerAttribute?: {
			durationMins: number;
			key: "may2026_season_pass_entitlement" | "may2026_season_pass_rank_01" | "may2026_season_pass_rank_02" | "may2026_season_pass_rank_03";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "BOMBIRDIER_NORMAL"
					| "BRAVIARY_HISUIAN"
					| "BRELOOM_NORMAL"
					| "COMBEE_NORMAL"
					| "DEINO_NORMAL"
					| "DRILBUR_NORMAL"
					| "FRAXURE_NORMAL"
					| "HONEDGE_NORMAL"
					| "LEAVANNY_NORMAL"
					| "MANTINE_NORMAL"
					| "ORTHWORM_NORMAL"
					| "QWILFISH_HISUIAN"
					| "QWILFISH_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "SKIDDO_NORMAL"
					| "SKRELP_NORMAL"
					| "SLOWPOKE_GALARIAN"
					| "SLOWPOKE_NORMAL"
					| "SNOM_NORMAL"
					| "SPHEAL_NORMAL"
					| "SUICUNE_NORMAL"
					| "TOTODILE_NORMAL"
					| "WAILMER_NORMAL"
					| "WOOBAT_NORMAL"
					| "XATU_NORMAL";
			};
			pokemonId:
				| "BOMBIRDIER"
				| "BRAVIARY"
				| "BRELOOM"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "FRAXURE"
				| "HONEDGE"
				| "LEAVANNY"
				| "MANTINE"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "SINISTEA"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SUICUNE"
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
		type: "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKECOIN" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "AXEW"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "HONEDGE"
				| "MANTINE"
				| "NATU"
				| "QWILFISH"
				| "RUFFLET"
				| "SINISTEA"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SUICUNE"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

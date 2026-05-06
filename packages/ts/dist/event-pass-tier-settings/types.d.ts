// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 840 entries (structural types).

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
		eventName?: "go_pass_cumulative_bonuses_header";
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
				| "BELDUM"
				| "BINACLE"
				| "BLIPBUG"
				| "BOMBIRDIER"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "DRUDDIGON"
				| "DUCKLETT"
				| "ENTEI"
				| "EXEGGCUTE"
				| "FOONGUS"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "HONEDGE"
				| "HOPPIP"
				| "MANTINE"
				| "NATU"
				| "ORTHWORM"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "RUFFLET"
				| "SEWADDLE"
				| "SHROOMISH"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SUICUNE"
				| "TEPIG"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT"
				| "WOOPER";
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
				| "april2026_season_pass_entitlement"
				| "april2026_season_pass_rank_01"
				| "april2026_season_pass_rank_02"
				| "april2026_season_pass_rank_03"
				| "may2026_season_pass_entitlement"
				| "may2026_season_pass_rank_01"
				| "may2026_season_pass_rank_02"
				| "may2026_season_pass_rank_03";
		};
		pokecoin?: number;
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "AMOONGUSS_NORMAL"
					| "BELDUM_NORMAL"
					| "BINACLE_NORMAL"
					| "BLIPBUG_NORMAL"
					| "BOMBIRDIER_NORMAL"
					| "BRAVIARY_HISUIAN"
					| "BRELOOM_NORMAL"
					| "COMBEE_NORMAL"
					| "DEINO_NORMAL"
					| "DRILBUR_NORMAL"
					| "DRUDDIGON_NORMAL"
					| "ENTEI_NORMAL"
					| "EXEGGUTOR_ALOLA"
					| "FRAXURE_NORMAL"
					| "GIRAFARIG_NORMAL"
					| "GROWLITHE_NORMAL"
					| "HATENNA_NORMAL"
					| "HONEDGE_NORMAL"
					| "JUMPLUFF_NORMAL"
					| "LEAVANNY_NORMAL"
					| "MANTINE_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PHANPY_NORMAL"
					| "QWILFISH_HISUIAN"
					| "QWILFISH_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "ROGGENROLA_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SKIDDO_NORMAL"
					| "SKRELP_NORMAL"
					| "SLOWPOKE_GALARIAN"
					| "SLOWPOKE_NORMAL"
					| "SNOM_NORMAL"
					| "SPHEAL_NORMAL"
					| "SUICUNE_NORMAL"
					| "SWANNA_NORMAL"
					| "TEPIG_NORMAL"
					| "TOTODILE_NORMAL"
					| "WAILMER_NORMAL"
					| "WOOBAT_NORMAL"
					| "WOOPER_NORMAL"
					| "WOOPER_PALDEA"
					| "XATU_NORMAL";
			};
			pokemonId:
				| "AMOONGUSS"
				| "BELDUM"
				| "BINACLE"
				| "BLIPBUG"
				| "BOMBIRDIER"
				| "BRAVIARY"
				| "BRELOOM"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "DRUDDIGON"
				| "ENTEI"
				| "EXEGGUTOR"
				| "FRAXURE"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "HONEDGE"
				| "JUMPLUFF"
				| "LEAVANNY"
				| "MANTINE"
				| "ORTHWORM"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SKRELP"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SUICUNE"
				| "SWANNA"
				| "TEPIG"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT"
				| "WOOPER"
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
				| "BELDUM"
				| "COMBEE"
				| "DEINO"
				| "DRILBUR"
				| "DUCKLETT"
				| "ENTEI"
				| "EXEGGCUTE"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "HONEDGE"
				| "MANTINE"
				| "NATU"
				| "PHANPY"
				| "QWILFISH"
				| "ROGGENROLA"
				| "RUFFLET"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "SPHEAL"
				| "SUICUNE"
				| "TEPIG"
				| "TOTODILE"
				| "WAILMER"
				| "WOOBAT"
				| "WOOPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

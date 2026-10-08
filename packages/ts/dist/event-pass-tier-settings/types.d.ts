// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 400 entries (structural types).

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
				| "gift_send_more_daily"
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
	isMilestoneRank?: boolean;
	minPointsRequired?: number;
	rank: number;
	rewards?: Array<{
		candy?: {
			amount: number;
			pokemonId:
				| "BELDUM"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "MAREEP"
				| "MEOWTH"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "SHINX"
				| "SKARMORY"
				| "SKIDDO"
				| "SNOM"
				| "TYMPOLE"
				| "YAMASK";
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
				| "october2026_season_pass_entitlement"
				| "october2026_season_pass_rank_01"
				| "october2026_season_pass_rank_02"
				| "october2026_season_pass_rank_03"
				| "october2026_season_pass_rank_04";
		};
		pokemonEncounter?: {
			isFeaturedPokemon?: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "AMPHAROS_NORMAL"
					| "BOUNSWEET_NORMAL"
					| "CHANSEY_NORMAL"
					| "DEDENNE_NORMAL"
					| "FINNEON_NORMAL"
					| "FLITTLE_NORMAL"
					| "FOMANTIS_NORMAL"
					| "FRILLISH_FEMALE"
					| "FURFROU_NATURAL"
					| "GASTLY_NORMAL"
					| "GLIMMET_NORMAL"
					| "KOMALA_NORMAL"
					| "KYOGRE_NORMAL"
					| "LARVITAR_NORMAL"
					| "METANG_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PERSIAN_ALOLA"
					| "PORYGON_NORMAL"
					| "QWILFISH_HISUIAN"
					| "ROCKRUFF_NORMAL"
					| "SHINX_NORMAL"
					| "SKARMORY_NORMAL"
					| "SKIDDO_NORMAL"
					| "SNOM_NORMAL"
					| "TYMPOLE_NORMAL"
					| "YAMASK_GALARIAN";
			};
			pokemonId:
				| "AMPHAROS"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "METANG"
				| "ORTHWORM"
				| "PERSIAN"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "SHINX"
				| "SKARMORY"
				| "SKIDDO"
				| "SNOM"
				| "TYMPOLE"
				| "YAMASK";
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
				| "BELDUM"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "FINNEON"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "KYOGRE"
				| "LARVITAR"
				| "MEOWTH"
				| "PORYGON"
				| "QWILFISH"
				| "SHINX"
				| "SKARMORY"
				| "SNOM"
				| "TYMPOLE"
				| "YAMASK";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 616 entries (structural types).

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
			iconType: "CANDY_GENERAL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE";
			text:
				| "catch_candy_double"
				| "catch_candy_triple"
				| "catch_stardust_double"
				| "catch_stardust_triple"
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
			iconType: "CANDY_GENERAL" | "EGG_INCUBATOR" | "GIFT" | "INCENSE" | "STARDUST" | "TRADE";
			text:
				| "catch_candy_double"
				| "catch_candy_triple"
				| "catch_stardust_double"
				| "catch_stardust_triple"
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
				| "DRIFLOON"
				| "DUSKULL"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "GREAVARD"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "MAREEP"
				| "MEOWTH"
				| "MISDREAVUS"
				| "ORTHWORM"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "SABLEYE"
				| "SANDYGAST"
				| "SHINX"
				| "SHUPPET"
				| "SINISTEA"
				| "SKARMORY"
				| "SKIDDO"
				| "SNOM"
				| "TYMPOLE"
				| "YAMASK"
				| "ZUBAT";
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
		neutralAvatarItemTemplate?: {
			displayTemplateId: "N_DISPLAY_n_pants_halloween2026" | "N_DISPLAY_n_shirt_halloween2026";
			itemTemplateId: "N_AVATAR_n_pants_halloween2026" | "N_AVATAR_n_shirt_halloween2026";
		};
		playerAttribute?: {
			durationMins?: number;
			key:
				| "halloween2026_season_pass_entitlement"
				| "halloween2026_season_pass_rank_01"
				| "halloween2026_season_pass_rank_01_paid"
				| "halloween2026_season_pass_rank_02"
				| "halloween2026_season_pass_rank_02_paid"
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
				costume?: "FALL_2022_NOEVOLVE" | "FALL_2024" | "HALLOWEEN_2021_NOEVOLVE" | "HALLOWEEN_2025";
				form:
					| number
					| "AMPHAROS_NORMAL"
					| "BOUNSWEET_NORMAL"
					| "CHANSEY_NORMAL"
					| "DEDENNE_NORMAL"
					| "DRIFBLIM_NORMAL"
					| "DUSKULL_NORMAL"
					| "FINNEON_NORMAL"
					| "FLITTLE_NORMAL"
					| "FOMANTIS_NORMAL"
					| "FRILLISH_FEMALE"
					| "FROAKIE_NORMAL"
					| "FURFROU_NATURAL"
					| "GASTLY_NORMAL"
					| "GENGAR_NORMAL"
					| "GLIMMET_NORMAL"
					| "GREAVARD_NORMAL"
					| "KOMALA_NORMAL"
					| "KYOGRE_NORMAL"
					| "LARVITAR_NORMAL"
					| "METANG_NORMAL"
					| "MISDREAVUS_NORMAL"
					| "NOIBAT_NORMAL"
					| "ORTHWORM_NORMAL"
					| "PERSIAN_ALOLA"
					| "PIKACHU_HALLOWEEN_2026"
					| "PIPLUP_NORMAL"
					| "PORYGON_NORMAL"
					| "QWILFISH_HISUIAN"
					| "ROCKRUFF_NORMAL"
					| "ROTOM_NORMAL"
					| "ROWLET_NORMAL"
					| "SABLEYE_NORMAL"
					| "SANDYGAST_NORMAL"
					| "SHINX_NORMAL"
					| "SHUPPET_NORMAL"
					| "SKARMORY_NORMAL"
					| "SKIDDO_NORMAL"
					| "SNOM_NORMAL"
					| "SPIRITOMB_NORMAL"
					| "TYMPOLE_NORMAL"
					| "YAMASK_GALARIAN";
			};
			pokemonId:
				| "AMPHAROS"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "DRIFBLIM"
				| "DUSKULL"
				| "FINNEON"
				| "FLITTLE"
				| "FOMANTIS"
				| "FRILLISH"
				| "FROAKIE"
				| "FURFROU"
				| "GASTLY"
				| "GENGAR"
				| "GLIMMET"
				| "GREAVARD"
				| "KOMALA"
				| "KYOGRE"
				| "LARVITAR"
				| "METANG"
				| "MISDREAVUS"
				| "NOIBAT"
				| "ORTHWORM"
				| "PERSIAN"
				| "PIKACHU"
				| "PIPLUP"
				| "POLTCHAGEIST"
				| "PORYGON"
				| "QWILFISH"
				| "ROCKRUFF"
				| "ROTOM"
				| "ROWLET"
				| "SABLEYE"
				| "SANDYGAST"
				| "SHINX"
				| "SHUPPET"
				| "SINISTEA"
				| "SKARMORY"
				| "SKIDDO"
				| "SNOM"
				| "SPIRITOMB"
				| "TYMPOLE"
				| "YAMASK"
				| "ZUBAT";
			statsLimitsOverride?: {
				maxPokemonLevel: number;
				minPokemonLevel: number;
			};
		};
		stardust?: number;
		type: "AVATAR_CLOTHING" | "CANDY" | "EXPERIENCE" | "ITEM" | "PLAYER_ATTRIBUTE" | "POKEMON_ENCOUNTER" | "STARDUST" | "XL_CANDY";
		xlCandy?: {
			amount: number;
			pokemonId:
				| "BELDUM"
				| "BOUNSWEET"
				| "CHANSEY"
				| "DEDENNE"
				| "DUSKULL"
				| "FINNEON"
				| "FOMANTIS"
				| "FRILLISH"
				| "FURFROU"
				| "GASTLY"
				| "GLIMMET"
				| "GREAVARD"
				| "KYOGRE"
				| "LARVITAR"
				| "MEOWTH"
				| "MISDREAVUS"
				| "PORYGON"
				| "QWILFISH"
				| "SANDYGAST"
				| "SHINX"
				| "SHUPPET"
				| "SKARMORY"
				| "SNOM"
				| "TYMPOLE"
				| "YAMASK";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

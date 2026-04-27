// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 420 entries (structural types).

export interface EventPassTierSettings<TemplateID extends string = string, TData extends EventPassTierSettingsData = EventPassTierSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		eventPassTierSettings: TData;
	};
}

export interface EventPassTierSettingsData {
	activeBonusDisplaySettings?: {
		bonusBoxes: Array<{
			iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
			text: "dai_duration_double" | "gift_open_more_daily" | "gift_send_more_daily" | "gift_storage_more" | "hatch_stardust_double" | "hatch_xp_double";
		}>;
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
				| "COMBEE"
				| "DRUDDIGON"
				| "DUCKLETT"
				| "ENTEI"
				| "EXEGGCUTE"
				| "FOONGUS"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "HOPPIP"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "TEPIG"
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
			key: "april2026_season_pass_entitlement" | "april2026_season_pass_rank_01" | "april2026_season_pass_rank_02" | "april2026_season_pass_rank_03";
		};
		pokemonEncounter?: {
			isFeaturedPokemon: boolean;
			pokemonDisplay?: {
				breadModeEnum?: "BREAD_MODE";
				form:
					| "AMOONGUSS_NORMAL"
					| "BELDUM_NORMAL"
					| "BINACLE_NORMAL"
					| "BLIPBUG_NORMAL"
					| "COMBEE_NORMAL"
					| "DRUDDIGON_NORMAL"
					| "ENTEI_NORMAL"
					| "EXEGGUTOR_ALOLA"
					| "FRAXURE_NORMAL"
					| "GIRAFARIG_NORMAL"
					| "GROWLITHE_NORMAL"
					| "HATENNA_NORMAL"
					| "JUMPLUFF_NORMAL"
					| "PHANPY_NORMAL"
					| "ROCKRUFF_NORMAL"
					| "ROGGENROLA_NORMAL"
					| "SIZZLIPEDE_NORMAL"
					| "SKIDDO_NORMAL"
					| "SLOWPOKE_GALARIAN"
					| "SLOWPOKE_NORMAL"
					| "SNOM_NORMAL"
					| "SWANNA_NORMAL"
					| "TEPIG_NORMAL"
					| "WOOPER_NORMAL"
					| "WOOPER_PALDEA";
			};
			pokemonId:
				| "AMOONGUSS"
				| "BELDUM"
				| "BINACLE"
				| "BLIPBUG"
				| "COMBEE"
				| "DRUDDIGON"
				| "ENTEI"
				| "EXEGGUTOR"
				| "FRAXURE"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "JUMPLUFF"
				| "PHANPY"
				| "POLTCHAGEIST"
				| "ROCKRUFF"
				| "ROGGENROLA"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "SWANNA"
				| "TEPIG"
				| "WOOPER";
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
				| "AXEW"
				| "BELDUM"
				| "COMBEE"
				| "DUCKLETT"
				| "ENTEI"
				| "EXEGGCUTE"
				| "GIRAFARIG"
				| "GROWLITHE"
				| "HATENNA"
				| "PHANPY"
				| "ROGGENROLA"
				| "SINISTEA"
				| "SIZZLIPEDE"
				| "SKIDDO"
				| "SLOWPOKE"
				| "SNOM"
				| "TEPIG"
				| "WOOPER";
		};
	}>;
	track: "FREE" | "PREMIUM";
}

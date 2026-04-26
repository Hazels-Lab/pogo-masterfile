// Generated from Pokémon GO masterfile — group "eventPassTierSettings", 420 entries.

export interface EventPassTierSettings<
	TemplateID extends string = string,
	TData extends EventPassTierSettingsData = EventPassTierSettingsData,
> {
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
			text:
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_stardust_double"
				| "hatch_xp_double";
		}>;
	};
	bonusSettings?: {
		bonusBoxes: Array<{
			iconType: "GIFT" | "INCENSE" | "LUCKY_EGG" | "STARDUST";
			text:
				| "dai_duration_double"
				| "gift_open_more_daily"
				| "gift_send_more_daily"
				| "gift_storage_more"
				| "hatch_stardust_double"
				| "hatch_xp_double";
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
			key:
				| "april2026_season_pass_entitlement"
				| "april2026_season_pass_rank_01"
				| "april2026_season_pass_rank_02"
				| "april2026_season_pass_rank_03";
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

export type EventPassTierSettings100Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_100_FREE",
	{
		minPointsRequired: 9900;
		rank: 100;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "ENTEI_NORMAL";
					};
					pokemonId: "ENTEI";
					statsLimitsOverride: {
						maxPokemonLevel: 20;
						minPokemonLevel: 20;
					};
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings100Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_100_PREMIUM",
	{
		rank: 100;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_LUCKY_FRIEND_APPLICATOR";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings101Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_101_FREE",
	{
		minPointsRequired: 10000;
		rank: 101;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings101Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_101_PREMIUM",
	{
		rank: 101;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings102Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_102_FREE",
	{
		minPointsRequired: 10100;
		rank: 102;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings102Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_102_PREMIUM",
	{
		rank: 102;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings103Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_103_FREE",
	{
		minPointsRequired: 10200;
		rank: 103;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings103Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_103_PREMIUM",
	{
		rank: 103;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings104Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_104_FREE",
	{
		minPointsRequired: 10300;
		rank: 104;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings104Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_104_PREMIUM",
	{
		rank: 104;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings105Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_105_FREE",
	{
		minPointsRequired: 10400;
		rank: 105;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings105Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_105_PREMIUM",
	{
		rank: 105;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings106Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_106_FREE",
	{
		minPointsRequired: 10500;
		rank: 106;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings106Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_106_PREMIUM",
	{
		rank: 106;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings107Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_107_FREE",
	{
		minPointsRequired: 10600;
		rank: 107;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings107Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_107_PREMIUM",
	{
		rank: 107;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings108Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_108_FREE",
	{
		minPointsRequired: 10700;
		rank: 108;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings108Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_108_PREMIUM",
	{
		rank: 108;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings109Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_109_FREE",
	{
		minPointsRequired: 10800;
		rank: 109;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings109Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_109_PREMIUM",
	{
		rank: 109;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings10Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_10_FREE",
	{
		minPointsRequired: 900;
		rank: 10;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_INCENSE_ORDINARY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings10Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_10_PREMIUM",
	{
		rank: 10;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_INCENSE_ORDINARY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings110Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_110_FREE",
	{
		minPointsRequired: 10900;
		rank: 110;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings110Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_110_PREMIUM",
	{
		rank: 110;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings111Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_111_FREE",
	{
		minPointsRequired: 11000;
		rank: 111;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings111Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_111_PREMIUM",
	{
		rank: 111;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings112Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_112_FREE",
	{
		minPointsRequired: 11100;
		rank: 112;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings112Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_112_PREMIUM",
	{
		rank: 112;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings113Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_113_FREE",
	{
		minPointsRequired: 11200;
		rank: 113;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings113Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_113_PREMIUM",
	{
		rank: 113;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings114Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_114_FREE",
	{
		minPointsRequired: 11300;
		rank: 114;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings114Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_114_PREMIUM",
	{
		rank: 114;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings115Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_115_FREE",
	{
		minPointsRequired: 11400;
		rank: 115;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings115Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_115_PREMIUM",
	{
		rank: 115;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings116Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_116_FREE",
	{
		minPointsRequired: 11500;
		rank: 116;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings116Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_116_PREMIUM",
	{
		rank: 116;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings117Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_117_FREE",
	{
		minPointsRequired: 11600;
		rank: 117;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings117Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_117_PREMIUM",
	{
		rank: 117;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings118Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_118_FREE",
	{
		minPointsRequired: 11700;
		rank: 118;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings118Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_118_PREMIUM",
	{
		rank: 118;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings119Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_119_FREE",
	{
		minPointsRequired: 11800;
		rank: 119;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings119Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_119_PREMIUM",
	{
		rank: 119;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings11Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_11_FREE",
	{
		minPointsRequired: 1000;
		rank: 11;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_POKE_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings11Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_11_PREMIUM",
	{
		rank: 11;
		rewards: [
			{
				item: {
					amount: 25;
					item: "ITEM_POKE_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings120Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_120_FREE",
	{
		minPointsRequired: 11900;
		rank: 120;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings120Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_120_PREMIUM",
	{
		rank: 120;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings121Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_121_FREE",
	{
		minPointsRequired: 12000;
		rank: 121;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings121Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_121_PREMIUM",
	{
		rank: 121;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings122Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_122_FREE",
	{
		minPointsRequired: 12100;
		rank: 122;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings122Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_122_PREMIUM",
	{
		rank: 122;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings123Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_123_FREE",
	{
		minPointsRequired: 12200;
		rank: 123;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings123Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_123_PREMIUM",
	{
		rank: 123;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings124Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_124_FREE",
	{
		minPointsRequired: 12300;
		rank: 124;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings124Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_124_PREMIUM",
	{
		rank: 124;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings125Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_125_FREE",
	{
		minPointsRequired: 12400;
		rank: 125;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings125Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_125_PREMIUM",
	{
		rank: 125;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings126Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_126_FREE",
	{
		minPointsRequired: 12500;
		rank: 126;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings126Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_126_PREMIUM",
	{
		rank: 126;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings127Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_127_FREE",
	{
		minPointsRequired: 12600;
		rank: 127;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings127Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_127_PREMIUM",
	{
		rank: 127;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings128Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_128_FREE",
	{
		minPointsRequired: 12700;
		rank: 128;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings128Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_128_PREMIUM",
	{
		rank: 128;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings129Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_129_FREE",
	{
		minPointsRequired: 12800;
		rank: 129;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings129Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_129_PREMIUM",
	{
		rank: 129;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings12Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_12_FREE",
	{
		minPointsRequired: 1100;
		rank: 12;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SLOWPOKE_NORMAL";
					};
					pokemonId: "SLOWPOKE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings12Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_12_PREMIUM",
	{
		rank: 12;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SLOWPOKE";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings130Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_130_FREE",
	{
		minPointsRequired: 12900;
		rank: 130;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings130Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_130_PREMIUM",
	{
		rank: 130;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings131Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_131_FREE",
	{
		minPointsRequired: 13000;
		rank: 131;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings131Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_131_PREMIUM",
	{
		rank: 131;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings132Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_132_FREE",
	{
		minPointsRequired: 13100;
		rank: 132;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings132Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_132_PREMIUM",
	{
		rank: 132;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings133Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_133_FREE",
	{
		minPointsRequired: 13200;
		rank: 133;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings133Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_133_PREMIUM",
	{
		rank: 133;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings134Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_134_FREE",
	{
		minPointsRequired: 13300;
		rank: 134;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings134Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_134_PREMIUM",
	{
		rank: 134;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings135Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_135_FREE",
	{
		minPointsRequired: 13400;
		rank: 135;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings135Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_135_PREMIUM",
	{
		rank: 135;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings136Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_136_FREE",
	{
		minPointsRequired: 13500;
		rank: 136;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings136Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_136_PREMIUM",
	{
		rank: 136;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings137Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_137_FREE",
	{
		minPointsRequired: 13600;
		rank: 137;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings137Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_137_PREMIUM",
	{
		rank: 137;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings138Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_138_FREE",
	{
		minPointsRequired: 13700;
		rank: 138;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings138Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_138_PREMIUM",
	{
		rank: 138;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings139Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_139_FREE",
	{
		minPointsRequired: 13800;
		rank: 139;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings139Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_139_PREMIUM",
	{
		rank: 139;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings13Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_13_FREE",
	{
		minPointsRequired: 1200;
		rank: 13;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SLOWPOKE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings13Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_13_PREMIUM",
	{
		rank: 13;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SLOWPOKE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings140Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_140_FREE",
	{
		minPointsRequired: 13900;
		rank: 140;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings140Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_140_PREMIUM",
	{
		rank: 140;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings141Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_141_FREE",
	{
		minPointsRequired: 14000;
		rank: 141;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings141Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_141_PREMIUM",
	{
		rank: 141;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings142Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_142_FREE",
	{
		minPointsRequired: 14100;
		rank: 142;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings142Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_142_PREMIUM",
	{
		rank: 142;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings143Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_143_FREE",
	{
		minPointsRequired: 14200;
		rank: 143;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings143Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_143_PREMIUM",
	{
		rank: 143;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings144Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_144_FREE",
	{
		minPointsRequired: 14300;
		rank: 144;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings144Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_144_PREMIUM",
	{
		rank: 144;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings145Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_145_FREE",
	{
		minPointsRequired: 14400;
		rank: 145;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings145Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_145_PREMIUM",
	{
		rank: 145;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings146Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_146_FREE",
	{
		minPointsRequired: 14500;
		rank: 146;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings146Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_146_PREMIUM",
	{
		rank: 146;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings147Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_147_FREE",
	{
		minPointsRequired: 14600;
		rank: 147;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings147Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_147_PREMIUM",
	{
		rank: 147;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings148Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_148_FREE",
	{
		minPointsRequired: 14700;
		rank: 148;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings148Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_148_PREMIUM",
	{
		rank: 148;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings149Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_149_FREE",
	{
		minPointsRequired: 14800;
		rank: 149;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings149Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_149_PREMIUM",
	{
		rank: 149;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings14Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_14_FREE",
	{
		minPointsRequired: 1300;
		rank: 14;
		rewards: [
			{
				item: {
					amount: 10;
					item: "ITEM_RAZZ_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings14Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_14_PREMIUM",
	{
		rank: 14;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_GOLDEN_RAZZ_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings150Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_150_FREE",
	{
		minPointsRequired: 14900;
		rank: 150;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings150Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_150_PREMIUM",
	{
		rank: 150;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings151Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_151_FREE",
	{
		minPointsRequired: 15000;
		rank: 151;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings151Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_151_PREMIUM",
	{
		rank: 151;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings152Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_152_FREE",
	{
		minPointsRequired: 15100;
		rank: 152;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings152Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_152_PREMIUM",
	{
		rank: 152;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings153Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_153_FREE",
	{
		minPointsRequired: 15200;
		rank: 153;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings153Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_153_PREMIUM",
	{
		rank: 153;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings154Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_154_FREE",
	{
		minPointsRequired: 15300;
		rank: 154;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings154Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_154_PREMIUM",
	{
		rank: 154;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings155Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_155_FREE",
	{
		minPointsRequired: 15400;
		rank: 155;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings155Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_155_PREMIUM",
	{
		rank: 155;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings156Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_156_FREE",
	{
		minPointsRequired: 15500;
		rank: 156;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings156Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_156_PREMIUM",
	{
		rank: 156;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings157Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_157_FREE",
	{
		minPointsRequired: 15600;
		rank: 157;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings157Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_157_PREMIUM",
	{
		rank: 157;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings158Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_158_FREE",
	{
		minPointsRequired: 15700;
		rank: 158;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings158Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_158_PREMIUM",
	{
		rank: 158;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings159Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_159_FREE",
	{
		minPointsRequired: 15800;
		rank: 159;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings159Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_159_PREMIUM",
	{
		rank: 159;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings15Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_15_FREE",
	{
		minPointsRequired: 1400;
		rank: 15;
		rewards: [
			{
				exp: 750;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings15Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_15_PREMIUM",
	{
		rank: 15;
		rewards: [
			{
				exp: 2250;
				type: "EXPERIENCE";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings160Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_160_FREE",
	{
		minPointsRequired: 15900;
		rank: 160;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings160Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_160_PREMIUM",
	{
		rank: 160;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings161Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_161_FREE",
	{
		minPointsRequired: 16000;
		rank: 161;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings161Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_161_PREMIUM",
	{
		rank: 161;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings162Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_162_FREE",
	{
		minPointsRequired: 16100;
		rank: 162;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings162Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_162_PREMIUM",
	{
		rank: 162;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings163Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_163_FREE",
	{
		minPointsRequired: 16200;
		rank: 163;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings163Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_163_PREMIUM",
	{
		rank: 163;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings164Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_164_FREE",
	{
		minPointsRequired: 16300;
		rank: 164;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings164Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_164_PREMIUM",
	{
		rank: 164;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings165Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_165_FREE",
	{
		minPointsRequired: 16400;
		rank: 165;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings165Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_165_PREMIUM",
	{
		rank: 165;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings166Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_166_FREE",
	{
		minPointsRequired: 16500;
		rank: 166;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings166Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_166_PREMIUM",
	{
		rank: 166;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings167Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_167_FREE",
	{
		minPointsRequired: 16600;
		rank: 167;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings167Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_167_PREMIUM",
	{
		rank: 167;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings168Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_168_FREE",
	{
		minPointsRequired: 16700;
		rank: 168;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings168Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_168_PREMIUM",
	{
		rank: 168;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings169Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_169_FREE",
	{
		minPointsRequired: 16800;
		rank: 169;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings169Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_169_PREMIUM",
	{
		rank: 169;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings16Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_16_FREE",
	{
		minPointsRequired: 1500;
		rank: 16;
		rewards: [
			{
				stardust: 750;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings16Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_16_PREMIUM",
	{
		rank: 16;
		rewards: [
			{
				stardust: 2250;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings170Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_170_FREE",
	{
		minPointsRequired: 16900;
		rank: 170;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings170Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_170_PREMIUM",
	{
		rank: 170;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings171Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_171_FREE",
	{
		minPointsRequired: 17000;
		rank: 171;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings171Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_171_PREMIUM",
	{
		rank: 171;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings172Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_172_FREE",
	{
		minPointsRequired: 17100;
		rank: 172;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings172Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_172_PREMIUM",
	{
		rank: 172;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings173Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_173_FREE",
	{
		minPointsRequired: 17200;
		rank: 173;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings173Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_173_PREMIUM",
	{
		rank: 173;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings174Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_174_FREE",
	{
		minPointsRequired: 17300;
		rank: 174;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings174Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_174_PREMIUM",
	{
		rank: 174;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings175Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_175_FREE",
	{
		minPointsRequired: 17400;
		rank: 175;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings175Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_175_PREMIUM",
	{
		rank: 175;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings176Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_176_FREE",
	{
		minPointsRequired: 17500;
		rank: 176;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings176Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_176_PREMIUM",
	{
		rank: 176;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings177Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_177_FREE",
	{
		minPointsRequired: 17600;
		rank: 177;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings177Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_177_PREMIUM",
	{
		rank: 177;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings178Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_178_FREE",
	{
		minPointsRequired: 17700;
		rank: 178;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings178Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_178_PREMIUM",
	{
		rank: 178;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings179Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_179_FREE",
	{
		minPointsRequired: 17800;
		rank: 179;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings179Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_179_PREMIUM",
	{
		rank: 179;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings17Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_17_FREE",
	{
		minPointsRequired: 1600;
		rank: 17;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "COMBEE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings17Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_17_PREMIUM",
	{
		rank: 17;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "COMBEE_NORMAL";
					};
					pokemonId: "COMBEE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings180Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_180_FREE",
	{
		minPointsRequired: 17900;
		rank: 180;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings180Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_180_PREMIUM",
	{
		rank: 180;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings181Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_181_FREE",
	{
		minPointsRequired: 18000;
		rank: 181;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings181Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_181_PREMIUM",
	{
		rank: 181;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings182Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_182_FREE",
	{
		minPointsRequired: 18100;
		rank: 182;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings182Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_182_PREMIUM",
	{
		rank: 182;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings183Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_183_FREE",
	{
		minPointsRequired: 18200;
		rank: 183;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings183Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_183_PREMIUM",
	{
		rank: 183;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings184Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_184_FREE",
	{
		minPointsRequired: 18300;
		rank: 184;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings184Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_184_PREMIUM",
	{
		rank: 184;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings185Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_185_FREE",
	{
		minPointsRequired: 18400;
		rank: 185;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings185Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_185_PREMIUM",
	{
		rank: 185;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings186Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_186_FREE",
	{
		minPointsRequired: 18500;
		rank: 186;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings186Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_186_PREMIUM",
	{
		rank: 186;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings187Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_187_FREE",
	{
		minPointsRequired: 18600;
		rank: 187;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings187Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_187_PREMIUM",
	{
		rank: 187;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings188Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_188_FREE",
	{
		minPointsRequired: 18700;
		rank: 188;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings188Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_188_PREMIUM",
	{
		rank: 188;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings189Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_189_FREE",
	{
		minPointsRequired: 18800;
		rank: 189;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings189Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_189_PREMIUM",
	{
		rank: 189;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings18Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_18_FREE",
	{
		minPointsRequired: 1700;
		rank: 18;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "COMBEE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings18Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_18_PREMIUM",
	{
		rank: 18;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "COMBEE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings190Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_190_FREE",
	{
		minPointsRequired: 18900;
		rank: 190;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings190Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_190_PREMIUM",
	{
		rank: 190;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings191Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_191_FREE",
	{
		minPointsRequired: 19000;
		rank: 191;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings191Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_191_PREMIUM",
	{
		rank: 191;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings192Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_192_FREE",
	{
		minPointsRequired: 19100;
		rank: 192;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings192Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_192_PREMIUM",
	{
		rank: 192;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings193Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_193_FREE",
	{
		minPointsRequired: 19200;
		rank: 193;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings193Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_193_PREMIUM",
	{
		rank: 193;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings194Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_194_FREE",
	{
		minPointsRequired: 19300;
		rank: 194;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings194Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_194_PREMIUM",
	{
		rank: 194;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings195Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_195_FREE",
	{
		minPointsRequired: 19400;
		rank: 195;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings195Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_195_PREMIUM",
	{
		rank: 195;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings196Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_196_FREE",
	{
		minPointsRequired: 19500;
		rank: 196;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings196Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_196_PREMIUM",
	{
		rank: 196;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings197Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_197_FREE",
	{
		minPointsRequired: 19600;
		rank: 197;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings197Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_197_PREMIUM",
	{
		rank: 197;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings198Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_198_FREE",
	{
		minPointsRequired: 19700;
		rank: 198;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings198Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_198_PREMIUM",
	{
		rank: 198;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings199Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_199_FREE",
	{
		minPointsRequired: 19800;
		rank: 199;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings199Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_199_PREMIUM",
	{
		rank: 199;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings19Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_19_FREE",
	{
		minPointsRequired: 1800;
		rank: 19;
		rewards: [
			{
				item: {
					amount: 100;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings19Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_19_PREMIUM",
	{
		rank: 19;
		rewards: [
			{
				item: {
					amount: 400;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings1Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_1_FREE",
	{
		rank: 1;
		rewards: [
			{
				exp: 10000;
				type: "EXPERIENCE";
			},
			{
				playerAttribute: {
					durationMins: 131487;
					key: "april2026_season_pass_entitlement";
				};
				type: "PLAYER_ATTRIBUTE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings1Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_1_PREMIUM",
	{
		rank: 1;
		rewards: [
			{
				stardust: 10000;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings200Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_200_FREE",
	{
		minPointsRequired: 19900;
		rank: 200;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings200Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_200_PREMIUM",
	{
		rank: 200;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings201Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_201_FREE",
	{
		minPointsRequired: 20000;
		rank: 201;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings201Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_201_PREMIUM",
	{
		rank: 201;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings202Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_202_FREE",
	{
		minPointsRequired: 20100;
		rank: 202;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings202Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_202_PREMIUM",
	{
		rank: 202;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings203Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_203_FREE",
	{
		minPointsRequired: 20200;
		rank: 203;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings203Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_203_PREMIUM",
	{
		rank: 203;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings204Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_204_FREE",
	{
		minPointsRequired: 20300;
		rank: 204;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings204Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_204_PREMIUM",
	{
		rank: 204;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings205Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_205_FREE",
	{
		minPointsRequired: 20400;
		rank: 205;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings205Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_205_PREMIUM",
	{
		rank: 205;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings206Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_206_FREE",
	{
		minPointsRequired: 20500;
		rank: 206;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings206Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_206_PREMIUM",
	{
		rank: 206;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings207Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_207_FREE",
	{
		minPointsRequired: 20600;
		rank: 207;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings207Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_207_PREMIUM",
	{
		rank: 207;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings208Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_208_FREE",
	{
		minPointsRequired: 20700;
		rank: 208;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings208Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_208_PREMIUM",
	{
		rank: 208;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings209Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_209_FREE",
	{
		minPointsRequired: 20800;
		rank: 209;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings209Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_209_PREMIUM",
	{
		rank: 209;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings20Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_20_FREE",
	{
		minPointsRequired: 1900;
		rank: 20;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_MOVE_REROLL_FAST_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings20Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_20_PREMIUM",
	{
		rank: 20;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_LUCKY_EGG";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings210Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_210_FREE",
	{
		minPointsRequired: 20900;
		rank: 210;
		rewards: [
			{
				stardust: 50;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings210Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_210_PREMIUM",
	{
		rank: 210;
		rewards: [
			{
				stardust: 100;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings21Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_21_FREE",
	{
		minPointsRequired: 2000;
		rank: 21;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings21Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_21_PREMIUM",
	{
		rank: 21;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings22Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_22_FREE",
	{
		minPointsRequired: 2100;
		rank: 22;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "WOOPER_NORMAL";
					};
					pokemonId: "WOOPER";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings22Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_22_PREMIUM",
	{
		rank: 22;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "WOOPER";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings23Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_23_FREE",
	{
		minPointsRequired: 2200;
		rank: 23;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "WOOPER";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings23Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_23_PREMIUM",
	{
		rank: 23;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "WOOPER";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings24Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_24_FREE",
	{
		minPointsRequired: 2300;
		rank: 24;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "HOPPIP";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings24Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_24_PREMIUM",
	{
		rank: 24;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "JUMPLUFF_NORMAL";
					};
					pokemonId: "JUMPLUFF";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings25Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_25_FREE",
	{
		activeBonusDisplaySettings: {
			bonusBoxes: [
				{
					iconType: "GIFT";
					text: "gift_send_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_open_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_storage_more";
				},
			];
		};
		bonusSettings: {
			bonusBoxes: [
				{
					iconType: "GIFT";
					text: "gift_send_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_open_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_storage_more";
				},
			];
			eventName: "season_pass_milestone_bonus_title_01";
		};
		minPointsRequired: 2400;
		rank: 25;
		rewards: [
			{
				playerAttribute: {
					durationMins: 131487;
					key: "april2026_season_pass_rank_01";
				};
				type: "PLAYER_ATTRIBUTE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings25Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_25_PREMIUM",
	{
		rank: 25;
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings26Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_26_FREE",
	{
		minPointsRequired: 2500;
		rank: 26;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings26Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_26_PREMIUM",
	{
		rank: 26;
		rewards: [
			{
				item: {
					amount: 25;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings27Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_27_FREE",
	{
		minPointsRequired: 2600;
		rank: 27;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "ROGGENROLA";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings27Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_27_PREMIUM",
	{
		rank: 27;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						breadModeEnum: "BREAD_MODE";
						form: "ROGGENROLA_NORMAL";
					};
					pokemonId: "ROGGENROLA";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings28Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_28_FREE",
	{
		minPointsRequired: 2700;
		rank: 28;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "ROGGENROLA";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings28Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_28_PREMIUM",
	{
		rank: 28;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "ROGGENROLA";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings29Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_29_FREE",
	{
		minPointsRequired: 2800;
		rank: 29;
		rewards: [
			{
				item: {
					amount: 10;
					item: "ITEM_NANAB_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings29Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_29_PREMIUM",
	{
		rank: 29;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_GOLDEN_PINAP_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings2Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_2_FREE",
	{
		minPointsRequired: 100;
		rank: 2;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_POKE_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings2Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_2_PREMIUM",
	{
		rank: 2;
		rewards: [
			{
				item: {
					amount: 25;
					item: "ITEM_POKE_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings30Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_30_FREE",
	{
		minPointsRequired: 2900;
		rank: 30;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_MOVE_REROLL_SPECIAL_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings30Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_30_PREMIUM",
	{
		rank: 30;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_TROY_DISK";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings31Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_31_FREE",
	{
		minPointsRequired: 3000;
		rank: 31;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_POFFIN";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings31Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_31_PREMIUM",
	{
		rank: 31;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_POFFIN";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings32Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_32_FREE",
	{
		minPointsRequired: 3100;
		rank: 32;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "WOOPER_PALDEA";
					};
					pokemonId: "WOOPER";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings32Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_32_PREMIUM",
	{
		rank: 32;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "WOOPER";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings33Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_33_FREE",
	{
		minPointsRequired: 3200;
		rank: 33;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "WOOPER";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings33Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_33_PREMIUM",
	{
		rank: 33;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "WOOPER";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings34Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_34_FREE",
	{
		minPointsRequired: 3300;
		rank: 34;
		rewards: [
			{
				exp: 1000;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings34Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_34_PREMIUM",
	{
		rank: 34;
		rewards: [
			{
				exp: 3000;
				type: "EXPERIENCE";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings35Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_35_FREE",
	{
		minPointsRequired: 3400;
		rank: 35;
		rewards: [
			{
				item: {
					amount: 10;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings35Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_35_PREMIUM",
	{
		rank: 35;
		rewards: [
			{
				item: {
					amount: 40;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings36Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_36_FREE",
	{
		minPointsRequired: 3500;
		rank: 36;
		rewards: [
			{
				stardust: 1000;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings36Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_36_PREMIUM",
	{
		rank: 36;
		rewards: [
			{
				stardust: 3000;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings37Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_37_FREE",
	{
		minPointsRequired: 3600;
		rank: 37;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "GIRAFARIG_NORMAL";
					};
					pokemonId: "GIRAFARIG";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings37Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_37_PREMIUM",
	{
		rank: 37;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "GIRAFARIG";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings38Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_38_FREE",
	{
		minPointsRequired: 3700;
		rank: 38;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "GIRAFARIG";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings38Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_38_PREMIUM",
	{
		rank: 38;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "GIRAFARIG";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings39Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_39_FREE",
	{
		minPointsRequired: 3800;
		rank: 39;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "BLIPBUG";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings39Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_39_PREMIUM",
	{
		rank: 39;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "BLIPBUG_NORMAL";
					};
					pokemonId: "BLIPBUG";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings3Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_3_FREE",
	{
		minPointsRequired: 200;
		rank: 3;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						breadModeEnum: "BREAD_MODE";
						form: "HATENNA_NORMAL";
					};
					pokemonId: "HATENNA";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings3Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_3_PREMIUM",
	{
		rank: 3;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "HATENNA";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings40Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_40_FREE",
	{
		minPointsRequired: 3900;
		rank: 40;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings40Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_40_PREMIUM",
	{
		rank: 40;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_INCENSE_ORDINARY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings41Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_41_FREE",
	{
		minPointsRequired: 4000;
		rank: 41;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings41Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_41_PREMIUM",
	{
		rank: 41;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings42Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_42_FREE",
	{
		minPointsRequired: 4100;
		rank: 42;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SIZZLIPEDE_NORMAL";
					};
					pokemonId: "SIZZLIPEDE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings42Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_42_PREMIUM",
	{
		rank: 42;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SIZZLIPEDE";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings43Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_43_FREE",
	{
		minPointsRequired: 4200;
		rank: 43;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SIZZLIPEDE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings43Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_43_PREMIUM",
	{
		rank: 43;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SIZZLIPEDE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings44Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_44_FREE",
	{
		minPointsRequired: 4300;
		rank: 44;
		rewards: [
			{
				exp: 1500;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings44Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_44_PREMIUM",
	{
		rank: 44;
		rewards: [
			{
				exp: 4500;
				type: "EXPERIENCE";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings45Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_45_FREE",
	{
		minPointsRequired: 4400;
		rank: 45;
		rewards: [
			{
				item: {
					amount: 10;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings45Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_45_PREMIUM",
	{
		rank: 45;
		rewards: [
			{
				item: {
					amount: 40;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings46Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_46_FREE",
	{
		minPointsRequired: 4500;
		rank: 46;
		rewards: [
			{
				stardust: 1500;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings46Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_46_PREMIUM",
	{
		rank: 46;
		rewards: [
			{
				stardust: 4500;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings47Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_47_FREE",
	{
		minPointsRequired: 4600;
		rank: 47;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "PHANPY_NORMAL";
					};
					pokemonId: "PHANPY";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings47Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_47_PREMIUM",
	{
		rank: 47;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "PHANPY";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings48Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_48_FREE",
	{
		minPointsRequired: 4700;
		rank: 48;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "PHANPY";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings48Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_48_PREMIUM",
	{
		rank: 48;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "PHANPY";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings49Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_49_FREE",
	{
		minPointsRequired: 4800;
		rank: 49;
		rewards: [
			{
				item: {
					amount: 100;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings49Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_49_PREMIUM",
	{
		rank: 49;
		rewards: [
			{
				item: {
					amount: 400;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings4Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_4_FREE",
	{
		minPointsRequired: 300;
		rank: 4;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "HATENNA";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings4Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_4_PREMIUM",
	{
		rank: 4;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "HATENNA";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings50Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_50_FREE",
	{
		activeBonusDisplaySettings: {
			bonusBoxes: [
				{
					iconType: "INCENSE";
					text: "dai_duration_double";
				},
				{
					iconType: "GIFT";
					text: "gift_send_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_open_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_storage_more";
				},
			];
		};
		bonusSettings: {
			bonusBoxes: [
				{
					iconType: "INCENSE";
					text: "dai_duration_double";
				},
			];
			eventName: "season_pass_milestone_bonus_title_02";
		};
		minPointsRequired: 4900;
		rank: 50;
		rewards: [
			{
				playerAttribute: {
					durationMins: 131487;
					key: "april2026_season_pass_rank_02";
				};
				type: "PLAYER_ATTRIBUTE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings50Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_50_PREMIUM",
	{
		rank: 50;
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings51Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_51_FREE",
	{
		minPointsRequired: 5000;
		rank: 51;
		rewards: [
			{
				item: {
					amount: 15;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings51Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_51_PREMIUM",
	{
		rank: 51;
		rewards: [
			{
				item: {
					amount: 50;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings52Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_52_FREE",
	{
		minPointsRequired: 5100;
		rank: 52;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonId: "SINISTEA";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings52Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_52_PREMIUM",
	{
		rank: 52;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SINISTEA";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings53Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_53_FREE",
	{
		minPointsRequired: 5200;
		rank: 53;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SINISTEA";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings53Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_53_PREMIUM",
	{
		rank: 53;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SINISTEA";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings54Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_54_FREE",
	{
		minPointsRequired: 5300;
		rank: 54;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "FOONGUS";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings54Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_54_PREMIUM",
	{
		rank: 54;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "AMOONGUSS_NORMAL";
					};
					pokemonId: "AMOONGUSS";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings55Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_55_FREE",
	{
		minPointsRequired: 5400;
		rank: 55;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_LUCKY_EGG";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings55Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_55_PREMIUM",
	{
		rank: 55;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings56Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_56_FREE",
	{
		minPointsRequired: 5500;
		rank: 56;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings56Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_56_PREMIUM",
	{
		rank: 56;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_LEADER_MAP_FRAGMENT";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings57Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_57_FREE",
	{
		minPointsRequired: 5600;
		rank: 57;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SWANNA_NORMAL";
					};
					pokemonId: "SWANNA";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings57Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_57_PREMIUM",
	{
		rank: 57;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "DUCKLETT";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings58Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_58_FREE",
	{
		minPointsRequired: 5700;
		rank: 58;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "DUCKLETT";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings58Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_58_PREMIUM",
	{
		rank: 58;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "DUCKLETT";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings59Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_59_FREE",
	{
		minPointsRequired: 5800;
		rank: 59;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_MOVE_REROLL_FAST_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings59Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_59_PREMIUM",
	{
		rank: 59;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_MOVE_REROLL_FAST_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings5Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_5_FREE",
	{
		minPointsRequired: 400;
		rank: 5;
		rewards: [
			{
				exp: 500;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings5Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_5_PREMIUM",
	{
		rank: 5;
		rewards: [
			{
				exp: 1500;
				type: "EXPERIENCE";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings60Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_60_FREE",
	{
		minPointsRequired: 5900;
		rank: 60;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_STAR_PIECE";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings60Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_60_PREMIUM",
	{
		rank: 60;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_PAID_RAID_TICKET";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings61Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_61_FREE",
	{
		minPointsRequired: 6000;
		rank: 61;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_MOVE_REROLL_SPECIAL_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings61Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_61_PREMIUM",
	{
		rank: 61;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_MOVE_REROLL_SPECIAL_ATTACK";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings62Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_62_FREE",
	{
		minPointsRequired: 6100;
		rank: 62;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SKIDDO";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings62Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_62_PREMIUM",
	{
		rank: 62;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SKIDDO_NORMAL";
					};
					pokemonId: "SKIDDO";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings63Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_63_FREE",
	{
		minPointsRequired: 6200;
		rank: 63;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SKIDDO";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings63Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_63_PREMIUM",
	{
		rank: 63;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SKIDDO";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings64Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_64_FREE",
	{
		minPointsRequired: 6300;
		rank: 64;
		rewards: [
			{
				exp: 2000;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings64Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_64_PREMIUM",
	{
		rank: 64;
		rewards: [
			{
				exp: 6000;
				type: "EXPERIENCE";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings65Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_65_FREE",
	{
		minPointsRequired: 6400;
		rank: 65;
		rewards: [
			{
				item: {
					amount: 15;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings65Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_65_PREMIUM",
	{
		rank: 65;
		rewards: [
			{
				item: {
					amount: 50;
					item: "ITEM_GREAT_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings66Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_66_FREE",
	{
		minPointsRequired: 6500;
		rank: 66;
		rewards: [
			{
				stardust: 2000;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings66Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_66_PREMIUM",
	{
		rank: 66;
		rewards: [
			{
				stardust: 6000;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings67Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_67_FREE",
	{
		minPointsRequired: 6600;
		rank: 67;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "FRAXURE_NORMAL";
					};
					pokemonId: "FRAXURE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings67Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_67_PREMIUM",
	{
		rank: 67;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "AXEW";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings68Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_68_FREE",
	{
		minPointsRequired: 6700;
		rank: 68;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "AXEW";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings68Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_68_PREMIUM",
	{
		rank: 68;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "AXEW";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings69Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_69_FREE",
	{
		minPointsRequired: 6800;
		rank: 69;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "POLTCHAGEIST";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings69Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_69_PREMIUM",
	{
		rank: 69;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonId: "POLTCHAGEIST";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings6Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_6_FREE",
	{
		minPointsRequired: 500;
		rank: 6;
		rewards: [
			{
				stardust: 500;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings6Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_6_PREMIUM",
	{
		rank: 6;
		rewards: [
			{
				stardust: 1500;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings70Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_70_FREE",
	{
		minPointsRequired: 6900;
		rank: 70;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_TROY_DISK";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings70Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_70_PREMIUM",
	{
		rank: 70;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_TROY_DISK";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings71Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_71_FREE",
	{
		minPointsRequired: 7000;
		rank: 71;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_GOLDEN_PINAP_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings71Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_71_PREMIUM",
	{
		rank: 71;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_GOLDEN_PINAP_BERRY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings72Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_72_FREE",
	{
		minPointsRequired: 7100;
		rank: 72;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SLOWPOKE_GALARIAN";
					};
					pokemonId: "SLOWPOKE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings72Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_72_PREMIUM",
	{
		rank: 72;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SLOWPOKE";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings73Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_73_FREE",
	{
		minPointsRequired: 7200;
		rank: 73;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SLOWPOKE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings73Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_73_PREMIUM",
	{
		rank: 73;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SLOWPOKE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings74Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_74_FREE",
	{
		minPointsRequired: 7300;
		rank: 74;
		rewards: [
			{
				item: {
					amount: 100;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings74Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_74_PREMIUM",
	{
		rank: 74;
		rewards: [
			{
				item: {
					amount: 400;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings75Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_75_FREE",
	{
		activeBonusDisplaySettings: {
			bonusBoxes: [
				{
					iconType: "STARDUST";
					text: "hatch_stardust_double";
				},
				{
					iconType: "LUCKY_EGG";
					text: "hatch_xp_double";
				},
				{
					iconType: "INCENSE";
					text: "dai_duration_double";
				},
				{
					iconType: "GIFT";
					text: "gift_send_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_open_more_daily";
				},
				{
					iconType: "GIFT";
					text: "gift_storage_more";
				},
			];
		};
		bonusSettings: {
			bonusBoxes: [
				{
					iconType: "STARDUST";
					text: "hatch_stardust_double";
				},
				{
					iconType: "LUCKY_EGG";
					text: "hatch_xp_double";
				},
			];
			eventName: "season_pass_milestone_bonus_title_03";
		};
		minPointsRequired: 7400;
		rank: 75;
		rewards: [
			{
				playerAttribute: {
					durationMins: 131487;
					key: "april2026_season_pass_rank_03";
				};
				type: "PLAYER_ATTRIBUTE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings75Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_75_PREMIUM",
	{
		rank: 75;
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings76Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_76_FREE",
	{
		minPointsRequired: 7500;
		rank: 76;
		rewards: [
			{
				item: {
					amount: 10;
					item: "ITEM_ULTRA_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings76Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_76_PREMIUM",
	{
		rank: 76;
		rewards: [
			{
				item: {
					amount: 40;
					item: "ITEM_ULTRA_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings77Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_77_FREE",
	{
		minPointsRequired: 7600;
		rank: 77;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						breadModeEnum: "BREAD_MODE";
						form: "GROWLITHE_NORMAL";
					};
					pokemonId: "GROWLITHE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings77Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_77_PREMIUM",
	{
		rank: 77;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "GROWLITHE";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings78Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_78_FREE",
	{
		minPointsRequired: 7700;
		rank: 78;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "GROWLITHE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings78Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_78_PREMIUM",
	{
		rank: 78;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "GROWLITHE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings79Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_79_FREE",
	{
		minPointsRequired: 7800;
		rank: 79;
		rewards: [
			{
				exp: 2500;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings79Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_79_PREMIUM",
	{
		rank: 79;
		rewards: [
			{
				stardust: 7500;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings7Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_7_FREE",
	{
		minPointsRequired: 600;
		rank: 7;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "TEPIG_NORMAL";
					};
					pokemonId: "TEPIG";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings7Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_7_PREMIUM",
	{
		rank: 7;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "TEPIG";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings80Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_80_FREE",
	{
		minPointsRequired: 7900;
		rank: 80;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_LUCKY_EGG";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings80Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_80_PREMIUM",
	{
		rank: 80;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_PAID_RAID_TICKET";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings81Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_81_FREE",
	{
		minPointsRequired: 8000;
		rank: 81;
		rewards: [
			{
				stardust: 2500;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings81Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_81_PREMIUM",
	{
		rank: 81;
		rewards: [
			{
				stardust: 7500;
				type: "STARDUST";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings82Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_82_FREE",
	{
		minPointsRequired: 8100;
		rank: 82;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SNOM";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings82Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_82_PREMIUM",
	{
		rank: 82;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "SNOM_NORMAL";
					};
					pokemonId: "SNOM";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings83Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_83_FREE",
	{
		minPointsRequired: 8200;
		rank: 83;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "SNOM";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings83Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_83_PREMIUM",
	{
		rank: 83;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "SNOM";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings84Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_84_FREE",
	{
		minPointsRequired: 8300;
		rank: 84;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "ROCKRUFF";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings84Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_84_PREMIUM",
	{
		rank: 84;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "ROCKRUFF_NORMAL";
					};
					pokemonId: "ROCKRUFF";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings85Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_85_FREE",
	{
		minPointsRequired: 8400;
		rank: 85;
		rewards: [
			{
				item: {
					amount: 15;
					item: "ITEM_ULTRA_BALL";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings85Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_85_PREMIUM",
	{
		rank: 85;
		rewards: [
			{
				item: {
					amount: 50;
					item: "ITEM_ULTRA_BALL";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings86Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_86_FREE",
	{
		minPointsRequired: 8500;
		rank: 86;
		rewards: [
			{
				item: {
					amount: 200;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings86Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_86_PREMIUM",
	{
		rank: 86;
		rewards: [
			{
				item: {
					amount: 800;
					item: "ITEM_MP";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings87Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_87_FREE",
	{
		minPointsRequired: 8600;
		rank: 87;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "EXEGGUTOR_ALOLA";
					};
					pokemonId: "EXEGGUTOR";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings87Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_87_PREMIUM",
	{
		rank: 87;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "EXEGGCUTE";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings88Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_88_FREE",
	{
		minPointsRequired: 8700;
		rank: 88;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "EXEGGCUTE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings88Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_88_PREMIUM",
	{
		rank: 88;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "EXEGGCUTE";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings89Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_89_FREE",
	{
		minPointsRequired: 8800;
		rank: 89;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings89Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_89_PREMIUM",
	{
		rank: 89;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings8Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_8_FREE",
	{
		minPointsRequired: 700;
		rank: 8;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "TEPIG";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings8Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_8_PREMIUM",
	{
		rank: 8;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "TEPIG";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings90Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_90_FREE",
	{
		minPointsRequired: 8900;
		rank: 90;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_PAID_RAID_TICKET";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings90Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_90_PREMIUM",
	{
		rank: 90;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_INCUBATOR_BASIC";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings91Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_91_FREE",
	{
		minPointsRequired: 9000;
		rank: 91;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_XL_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings91Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_91_PREMIUM",
	{
		rank: 91;
		rewards: [
			{
				item: {
					amount: 3;
					item: "ITEM_XL_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings92Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_92_FREE",
	{
		minPointsRequired: 9100;
		rank: 92;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "BELDUM_NORMAL";
					};
					pokemonId: "BELDUM";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings92Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_92_PREMIUM",
	{
		rank: 92;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "BELDUM";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings93Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_93_FREE",
	{
		minPointsRequired: 9200;
		rank: 93;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "BELDUM";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings93Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_93_PREMIUM",
	{
		rank: 93;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "BELDUM";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings94Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_94_FREE",
	{
		minPointsRequired: 9300;
		rank: 94;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "DRUDDIGON";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings94Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_94_PREMIUM",
	{
		rank: 94;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "DRUDDIGON_NORMAL";
					};
					pokemonId: "DRUDDIGON";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings95Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_95_FREE",
	{
		minPointsRequired: 9400;
		rank: 95;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings95Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_95_PREMIUM",
	{
		rank: 95;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_XL_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings96Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_96_FREE",
	{
		minPointsRequired: 9500;
		rank: 96;
		rewards: [
			{
				item: {
					amount: 5;
					item: "ITEM_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings96Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_96_PREMIUM",
	{
		rank: 96;
		rewards: [
			{
				item: {
					amount: 2;
					item: "ITEM_XL_RARE_CANDY";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings97Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_97_FREE",
	{
		minPointsRequired: 9600;
		rank: 97;
		rewards: [
			{
				candy: {
					amount: 3;
					pokemonId: "ENTEI";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings97Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_97_PREMIUM",
	{
		rank: 97;
		rewards: [
			{
				candy: {
					amount: 10;
					pokemonId: "ENTEI";
				};
				type: "CANDY";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings98Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_98_FREE",
	{
		minPointsRequired: 9700;
		rank: 98;
		rewards: [
			{
				stardust: 5000;
				type: "STARDUST";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings98Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_98_PREMIUM",
	{
		rank: 98;
		rewards: [
			{
				type: "XL_CANDY";
				xlCandy: {
					amount: 3;
					pokemonId: "ENTEI";
				};
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings99Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_99_FREE",
	{
		minPointsRequired: 9800;
		rank: 99;
		rewards: [
			{
				exp: 5000;
				type: "EXPERIENCE";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings99Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_99_PREMIUM",
	{
		rank: 99;
		rewards: [
			{
				item: {
					amount: 1;
					item: "ITEM_INCUBATOR_SUPER";
				};
				type: "ITEM";
			},
		];
		track: "PREMIUM";
	}
>;
export type EventPassTierSettings9Free = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_9_FREE",
	{
		minPointsRequired: 800;
		rank: 9;
		rewards: [
			{
				candy: {
					amount: 5;
					pokemonId: "BINACLE";
				};
				type: "CANDY";
			},
		];
		track: "FREE";
	}
>;
export type EventPassTierSettings9Premium = EventPassTierSettings<
	"EVENT_PASS_APRIL2026_SEASON_9_PREMIUM",
	{
		rank: 9;
		rewards: [
			{
				pokemonEncounter: {
					isFeaturedPokemon: true;
					pokemonDisplay: {
						form: "BINACLE_NORMAL";
					};
					pokemonId: "BINACLE";
				};
				type: "POKEMON_ENCOUNTER";
			},
		];
		track: "PREMIUM";
	}
>;

export type EventPassTierSettingsMasterfileEntry =
	| EventPassTierSettings100Free
	| EventPassTierSettings100Premium
	| EventPassTierSettings101Free
	| EventPassTierSettings101Premium
	| EventPassTierSettings102Free
	| EventPassTierSettings102Premium
	| EventPassTierSettings103Free
	| EventPassTierSettings103Premium
	| EventPassTierSettings104Free
	| EventPassTierSettings104Premium
	| EventPassTierSettings105Free
	| EventPassTierSettings105Premium
	| EventPassTierSettings106Free
	| EventPassTierSettings106Premium
	| EventPassTierSettings107Free
	| EventPassTierSettings107Premium
	| EventPassTierSettings108Free
	| EventPassTierSettings108Premium
	| EventPassTierSettings109Free
	| EventPassTierSettings109Premium
	| EventPassTierSettings10Free
	| EventPassTierSettings10Premium
	| EventPassTierSettings110Free
	| EventPassTierSettings110Premium
	| EventPassTierSettings111Free
	| EventPassTierSettings111Premium
	| EventPassTierSettings112Free
	| EventPassTierSettings112Premium
	| EventPassTierSettings113Free
	| EventPassTierSettings113Premium
	| EventPassTierSettings114Free
	| EventPassTierSettings114Premium
	| EventPassTierSettings115Free
	| EventPassTierSettings115Premium
	| EventPassTierSettings116Free
	| EventPassTierSettings116Premium
	| EventPassTierSettings117Free
	| EventPassTierSettings117Premium
	| EventPassTierSettings118Free
	| EventPassTierSettings118Premium
	| EventPassTierSettings119Free
	| EventPassTierSettings119Premium
	| EventPassTierSettings11Free
	| EventPassTierSettings11Premium
	| EventPassTierSettings120Free
	| EventPassTierSettings120Premium
	| EventPassTierSettings121Free
	| EventPassTierSettings121Premium
	| EventPassTierSettings122Free
	| EventPassTierSettings122Premium
	| EventPassTierSettings123Free
	| EventPassTierSettings123Premium
	| EventPassTierSettings124Free
	| EventPassTierSettings124Premium
	| EventPassTierSettings125Free
	| EventPassTierSettings125Premium
	| EventPassTierSettings126Free
	| EventPassTierSettings126Premium
	| EventPassTierSettings127Free
	| EventPassTierSettings127Premium
	| EventPassTierSettings128Free
	| EventPassTierSettings128Premium
	| EventPassTierSettings129Free
	| EventPassTierSettings129Premium
	| EventPassTierSettings12Free
	| EventPassTierSettings12Premium
	| EventPassTierSettings130Free
	| EventPassTierSettings130Premium
	| EventPassTierSettings131Free
	| EventPassTierSettings131Premium
	| EventPassTierSettings132Free
	| EventPassTierSettings132Premium
	| EventPassTierSettings133Free
	| EventPassTierSettings133Premium
	| EventPassTierSettings134Free
	| EventPassTierSettings134Premium
	| EventPassTierSettings135Free
	| EventPassTierSettings135Premium
	| EventPassTierSettings136Free
	| EventPassTierSettings136Premium
	| EventPassTierSettings137Free
	| EventPassTierSettings137Premium
	| EventPassTierSettings138Free
	| EventPassTierSettings138Premium
	| EventPassTierSettings139Free
	| EventPassTierSettings139Premium
	| EventPassTierSettings13Free
	| EventPassTierSettings13Premium
	| EventPassTierSettings140Free
	| EventPassTierSettings140Premium
	| EventPassTierSettings141Free
	| EventPassTierSettings141Premium
	| EventPassTierSettings142Free
	| EventPassTierSettings142Premium
	| EventPassTierSettings143Free
	| EventPassTierSettings143Premium
	| EventPassTierSettings144Free
	| EventPassTierSettings144Premium
	| EventPassTierSettings145Free
	| EventPassTierSettings145Premium
	| EventPassTierSettings146Free
	| EventPassTierSettings146Premium
	| EventPassTierSettings147Free
	| EventPassTierSettings147Premium
	| EventPassTierSettings148Free
	| EventPassTierSettings148Premium
	| EventPassTierSettings149Free
	| EventPassTierSettings149Premium
	| EventPassTierSettings14Free
	| EventPassTierSettings14Premium
	| EventPassTierSettings150Free
	| EventPassTierSettings150Premium
	| EventPassTierSettings151Free
	| EventPassTierSettings151Premium
	| EventPassTierSettings152Free
	| EventPassTierSettings152Premium
	| EventPassTierSettings153Free
	| EventPassTierSettings153Premium
	| EventPassTierSettings154Free
	| EventPassTierSettings154Premium
	| EventPassTierSettings155Free
	| EventPassTierSettings155Premium
	| EventPassTierSettings156Free
	| EventPassTierSettings156Premium
	| EventPassTierSettings157Free
	| EventPassTierSettings157Premium
	| EventPassTierSettings158Free
	| EventPassTierSettings158Premium
	| EventPassTierSettings159Free
	| EventPassTierSettings159Premium
	| EventPassTierSettings15Free
	| EventPassTierSettings15Premium
	| EventPassTierSettings160Free
	| EventPassTierSettings160Premium
	| EventPassTierSettings161Free
	| EventPassTierSettings161Premium
	| EventPassTierSettings162Free
	| EventPassTierSettings162Premium
	| EventPassTierSettings163Free
	| EventPassTierSettings163Premium
	| EventPassTierSettings164Free
	| EventPassTierSettings164Premium
	| EventPassTierSettings165Free
	| EventPassTierSettings165Premium
	| EventPassTierSettings166Free
	| EventPassTierSettings166Premium
	| EventPassTierSettings167Free
	| EventPassTierSettings167Premium
	| EventPassTierSettings168Free
	| EventPassTierSettings168Premium
	| EventPassTierSettings169Free
	| EventPassTierSettings169Premium
	| EventPassTierSettings16Free
	| EventPassTierSettings16Premium
	| EventPassTierSettings170Free
	| EventPassTierSettings170Premium
	| EventPassTierSettings171Free
	| EventPassTierSettings171Premium
	| EventPassTierSettings172Free
	| EventPassTierSettings172Premium
	| EventPassTierSettings173Free
	| EventPassTierSettings173Premium
	| EventPassTierSettings174Free
	| EventPassTierSettings174Premium
	| EventPassTierSettings175Free
	| EventPassTierSettings175Premium
	| EventPassTierSettings176Free
	| EventPassTierSettings176Premium
	| EventPassTierSettings177Free
	| EventPassTierSettings177Premium
	| EventPassTierSettings178Free
	| EventPassTierSettings178Premium
	| EventPassTierSettings179Free
	| EventPassTierSettings179Premium
	| EventPassTierSettings17Free
	| EventPassTierSettings17Premium
	| EventPassTierSettings180Free
	| EventPassTierSettings180Premium
	| EventPassTierSettings181Free
	| EventPassTierSettings181Premium
	| EventPassTierSettings182Free
	| EventPassTierSettings182Premium
	| EventPassTierSettings183Free
	| EventPassTierSettings183Premium
	| EventPassTierSettings184Free
	| EventPassTierSettings184Premium
	| EventPassTierSettings185Free
	| EventPassTierSettings185Premium
	| EventPassTierSettings186Free
	| EventPassTierSettings186Premium
	| EventPassTierSettings187Free
	| EventPassTierSettings187Premium
	| EventPassTierSettings188Free
	| EventPassTierSettings188Premium
	| EventPassTierSettings189Free
	| EventPassTierSettings189Premium
	| EventPassTierSettings18Free
	| EventPassTierSettings18Premium
	| EventPassTierSettings190Free
	| EventPassTierSettings190Premium
	| EventPassTierSettings191Free
	| EventPassTierSettings191Premium
	| EventPassTierSettings192Free
	| EventPassTierSettings192Premium
	| EventPassTierSettings193Free
	| EventPassTierSettings193Premium
	| EventPassTierSettings194Free
	| EventPassTierSettings194Premium
	| EventPassTierSettings195Free
	| EventPassTierSettings195Premium
	| EventPassTierSettings196Free
	| EventPassTierSettings196Premium
	| EventPassTierSettings197Free
	| EventPassTierSettings197Premium
	| EventPassTierSettings198Free
	| EventPassTierSettings198Premium
	| EventPassTierSettings199Free
	| EventPassTierSettings199Premium
	| EventPassTierSettings19Free
	| EventPassTierSettings19Premium
	| EventPassTierSettings1Free
	| EventPassTierSettings1Premium
	| EventPassTierSettings200Free
	| EventPassTierSettings200Premium
	| EventPassTierSettings201Free
	| EventPassTierSettings201Premium
	| EventPassTierSettings202Free
	| EventPassTierSettings202Premium
	| EventPassTierSettings203Free
	| EventPassTierSettings203Premium
	| EventPassTierSettings204Free
	| EventPassTierSettings204Premium
	| EventPassTierSettings205Free
	| EventPassTierSettings205Premium
	| EventPassTierSettings206Free
	| EventPassTierSettings206Premium
	| EventPassTierSettings207Free
	| EventPassTierSettings207Premium
	| EventPassTierSettings208Free
	| EventPassTierSettings208Premium
	| EventPassTierSettings209Free
	| EventPassTierSettings209Premium
	| EventPassTierSettings20Free
	| EventPassTierSettings20Premium
	| EventPassTierSettings210Free
	| EventPassTierSettings210Premium
	| EventPassTierSettings21Free
	| EventPassTierSettings21Premium
	| EventPassTierSettings22Free
	| EventPassTierSettings22Premium
	| EventPassTierSettings23Free
	| EventPassTierSettings23Premium
	| EventPassTierSettings24Free
	| EventPassTierSettings24Premium
	| EventPassTierSettings25Free
	| EventPassTierSettings25Premium
	| EventPassTierSettings26Free
	| EventPassTierSettings26Premium
	| EventPassTierSettings27Free
	| EventPassTierSettings27Premium
	| EventPassTierSettings28Free
	| EventPassTierSettings28Premium
	| EventPassTierSettings29Free
	| EventPassTierSettings29Premium
	| EventPassTierSettings2Free
	| EventPassTierSettings2Premium
	| EventPassTierSettings30Free
	| EventPassTierSettings30Premium
	| EventPassTierSettings31Free
	| EventPassTierSettings31Premium
	| EventPassTierSettings32Free
	| EventPassTierSettings32Premium
	| EventPassTierSettings33Free
	| EventPassTierSettings33Premium
	| EventPassTierSettings34Free
	| EventPassTierSettings34Premium
	| EventPassTierSettings35Free
	| EventPassTierSettings35Premium
	| EventPassTierSettings36Free
	| EventPassTierSettings36Premium
	| EventPassTierSettings37Free
	| EventPassTierSettings37Premium
	| EventPassTierSettings38Free
	| EventPassTierSettings38Premium
	| EventPassTierSettings39Free
	| EventPassTierSettings39Premium
	| EventPassTierSettings3Free
	| EventPassTierSettings3Premium
	| EventPassTierSettings40Free
	| EventPassTierSettings40Premium
	| EventPassTierSettings41Free
	| EventPassTierSettings41Premium
	| EventPassTierSettings42Free
	| EventPassTierSettings42Premium
	| EventPassTierSettings43Free
	| EventPassTierSettings43Premium
	| EventPassTierSettings44Free
	| EventPassTierSettings44Premium
	| EventPassTierSettings45Free
	| EventPassTierSettings45Premium
	| EventPassTierSettings46Free
	| EventPassTierSettings46Premium
	| EventPassTierSettings47Free
	| EventPassTierSettings47Premium
	| EventPassTierSettings48Free
	| EventPassTierSettings48Premium
	| EventPassTierSettings49Free
	| EventPassTierSettings49Premium
	| EventPassTierSettings4Free
	| EventPassTierSettings4Premium
	| EventPassTierSettings50Free
	| EventPassTierSettings50Premium
	| EventPassTierSettings51Free
	| EventPassTierSettings51Premium
	| EventPassTierSettings52Free
	| EventPassTierSettings52Premium
	| EventPassTierSettings53Free
	| EventPassTierSettings53Premium
	| EventPassTierSettings54Free
	| EventPassTierSettings54Premium
	| EventPassTierSettings55Free
	| EventPassTierSettings55Premium
	| EventPassTierSettings56Free
	| EventPassTierSettings56Premium
	| EventPassTierSettings57Free
	| EventPassTierSettings57Premium
	| EventPassTierSettings58Free
	| EventPassTierSettings58Premium
	| EventPassTierSettings59Free
	| EventPassTierSettings59Premium
	| EventPassTierSettings5Free
	| EventPassTierSettings5Premium
	| EventPassTierSettings60Free
	| EventPassTierSettings60Premium
	| EventPassTierSettings61Free
	| EventPassTierSettings61Premium
	| EventPassTierSettings62Free
	| EventPassTierSettings62Premium
	| EventPassTierSettings63Free
	| EventPassTierSettings63Premium
	| EventPassTierSettings64Free
	| EventPassTierSettings64Premium
	| EventPassTierSettings65Free
	| EventPassTierSettings65Premium
	| EventPassTierSettings66Free
	| EventPassTierSettings66Premium
	| EventPassTierSettings67Free
	| EventPassTierSettings67Premium
	| EventPassTierSettings68Free
	| EventPassTierSettings68Premium
	| EventPassTierSettings69Free
	| EventPassTierSettings69Premium
	| EventPassTierSettings6Free
	| EventPassTierSettings6Premium
	| EventPassTierSettings70Free
	| EventPassTierSettings70Premium
	| EventPassTierSettings71Free
	| EventPassTierSettings71Premium
	| EventPassTierSettings72Free
	| EventPassTierSettings72Premium
	| EventPassTierSettings73Free
	| EventPassTierSettings73Premium
	| EventPassTierSettings74Free
	| EventPassTierSettings74Premium
	| EventPassTierSettings75Free
	| EventPassTierSettings75Premium
	| EventPassTierSettings76Free
	| EventPassTierSettings76Premium
	| EventPassTierSettings77Free
	| EventPassTierSettings77Premium
	| EventPassTierSettings78Free
	| EventPassTierSettings78Premium
	| EventPassTierSettings79Free
	| EventPassTierSettings79Premium
	| EventPassTierSettings7Free
	| EventPassTierSettings7Premium
	| EventPassTierSettings80Free
	| EventPassTierSettings80Premium
	| EventPassTierSettings81Free
	| EventPassTierSettings81Premium
	| EventPassTierSettings82Free
	| EventPassTierSettings82Premium
	| EventPassTierSettings83Free
	| EventPassTierSettings83Premium
	| EventPassTierSettings84Free
	| EventPassTierSettings84Premium
	| EventPassTierSettings85Free
	| EventPassTierSettings85Premium
	| EventPassTierSettings86Free
	| EventPassTierSettings86Premium
	| EventPassTierSettings87Free
	| EventPassTierSettings87Premium
	| EventPassTierSettings88Free
	| EventPassTierSettings88Premium
	| EventPassTierSettings89Free
	| EventPassTierSettings89Premium
	| EventPassTierSettings8Free
	| EventPassTierSettings8Premium
	| EventPassTierSettings90Free
	| EventPassTierSettings90Premium
	| EventPassTierSettings91Free
	| EventPassTierSettings91Premium
	| EventPassTierSettings92Free
	| EventPassTierSettings92Premium
	| EventPassTierSettings93Free
	| EventPassTierSettings93Premium
	| EventPassTierSettings94Free
	| EventPassTierSettings94Premium
	| EventPassTierSettings95Free
	| EventPassTierSettings95Premium
	| EventPassTierSettings96Free
	| EventPassTierSettings96Premium
	| EventPassTierSettings97Free
	| EventPassTierSettings97Premium
	| EventPassTierSettings98Free
	| EventPassTierSettings98Premium
	| EventPassTierSettings99Free
	| EventPassTierSettings99Premium
	| EventPassTierSettings9Free
	| EventPassTierSettings9Premium;

export type EventPassTierSettingsTemplateID = EventPassTierSettingsMasterfileEntry["templateId"];

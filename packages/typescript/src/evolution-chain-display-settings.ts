export interface EvolutionChainDisplaySettings<
	TemplateID extends string = string,
	TData extends EvolutionChainDisplaySettingsData = EvolutionChainDisplaySettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		evolutionChainDisplaySettings: TData;
	};
}

export interface EvolutionChainDisplaySettingsData {
	evolutionChains?: Array<{
		evolutionInfos: Array<{
			form?: string;
			gender?: string;
			pokemon: string;
		}>;
		headerMessage?: string;
	}>;
	pokemon?: string;
}

export type EvolutionChainDisplaySettingsV0052PokemonMeowth = EvolutionChainDisplaySettings<
	"EVOLUTION_V0052_POKEMON_MEOWTH",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "MEOWTH";
					},
					{
						pokemon: "PERSIAN";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "MEOWTH_ALOLA";
						pokemon: "MEOWTH";
					},
					{
						form: "PERSIAN_ALOLA";
						pokemon: "PERSIAN";
					},
				];
				headerMessage: "alola_pokedex_header";
			},
			{
				evolutionInfos: [
					{
						form: "MEOWTH_GALARIAN";
						pokemon: "MEOWTH";
					},
					{
						pokemon: "PERRSERKER";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "MEOWTH";
	}
>;
export type EvolutionChainDisplaySettingsV0083PokemonFarfetchd = EvolutionChainDisplaySettings<
	"EVOLUTION_V0083_POKEMON_FARFETCHD",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "FARFETCHD";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FARFETCHD_GALARIAN";
						pokemon: "FARFETCHD";
					},
					{
						form: "SIRFETCHD_NORMAL";
						pokemon: "SIRFETCHD";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "FARFETCHD";
	}
>;
export type EvolutionChainDisplaySettingsV0122PokemonMrMime = EvolutionChainDisplaySettings<
	"EVOLUTION_V0122_POKEMON_MR_MIME",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "MIME_JR";
					},
					{
						pokemon: "MR_MIME";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "MR_MIME_GALARIAN";
						pokemon: "MR_MIME";
					},
					{
						form: "MR_RIME_NORMAL";
						pokemon: "MR_RIME";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "MR_MIME";
	}
>;
export type EvolutionChainDisplaySettingsV0123PokemonScyther = EvolutionChainDisplaySettings<
	"EVOLUTION_V0123_POKEMON_SCYTHER",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "SCYTHER";
					},
					{
						pokemon: "SCIZOR";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "SCYTHER";
					},
					{
						pokemon: "KLEAVOR";
					},
				];
			},
		];
		pokemon: "SCYTHER";
	}
>;
export type EvolutionChainDisplaySettingsV0150PokemonMewtwo = EvolutionChainDisplaySettings<
	"EVOLUTION_V0150_POKEMON_MEWTWO",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "GENDERLESS";
						pokemon: "MEWTWO";
					},
				];
			},
		];
		pokemon: "MEWTWO";
	}
>;
export type EvolutionChainDisplaySettingsV0155PokemonCyndaquil = EvolutionChainDisplaySettings<
	"EVOLUTION_V0155_POKEMON_CYNDAQUIL",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CYNDAQUIL";
					},
					{
						pokemon: "QUILAVA";
					},
					{
						pokemon: "TYPHLOSION";
					},
				];
			},
		];
		pokemon: "CYNDAQUIL";
	}
>;
export type EvolutionChainDisplaySettingsV0156PokemonQuilava = EvolutionChainDisplaySettings<
	"EVOLUTION_V0156_POKEMON_QUILAVA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CYNDAQUIL";
					},
					{
						pokemon: "QUILAVA";
					},
					{
						pokemon: "TYPHLOSION";
					},
				];
			},
		];
		pokemon: "QUILAVA";
	}
>;
export type EvolutionChainDisplaySettingsV0157PokemonTyphlosion = EvolutionChainDisplaySettings<
	"EVOLUTION_V0157_POKEMON_TYPHLOSION",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CYNDAQUIL";
					},
					{
						pokemon: "QUILAVA";
					},
					{
						pokemon: "TYPHLOSION";
					},
				];
			},
		];
		pokemon: "TYPHLOSION";
	}
>;
export type EvolutionChainDisplaySettingsV0194PokemonWooper = EvolutionChainDisplaySettings<
	"EVOLUTION_V0194_POKEMON_WOOPER",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "WOOPER";
					},
					{
						pokemon: "QUAGSIRE";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "WOOPER_PALDEA";
						pokemon: "WOOPER";
					},
					{
						pokemon: "CLODSIRE";
					},
				];
				headerMessage: "paldean_pokedex_header";
			},
		];
		pokemon: "WOOPER";
	}
>;
export type EvolutionChainDisplaySettingsV0211PokemonQwilfish = EvolutionChainDisplaySettings<
	"EVOLUTION_V0211_POKEMON_QWILFISH",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "QWILFISH";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "QWILFISH_HISUIAN";
						pokemon: "QWILFISH";
					},
					{
						pokemon: "OVERQWIL";
					},
				];
				headerMessage: "hisuian_pokedex_header";
			},
		];
		pokemon: "QWILFISH";
	}
>;
export type EvolutionChainDisplaySettingsV0215PokemonSneasel = EvolutionChainDisplaySettings<
	"EVOLUTION_V0215_POKEMON_SNEASEL",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "SNEASEL";
					},
					{
						pokemon: "WEAVILE";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SNEASEL_HISUIAN";
						pokemon: "SNEASEL";
					},
					{
						pokemon: "SNEASLER";
					},
				];
				headerMessage: "hisuian_pokedex_header";
			},
		];
		pokemon: "SNEASEL";
	}
>;
export type EvolutionChainDisplaySettingsV0222PokemonCorsola = EvolutionChainDisplaySettings<
	"EVOLUTION_V0222_POKEMON_CORSOLA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CORSOLA";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "CORSOLA_GALARIAN";
						pokemon: "CORSOLA";
					},
					{
						form: "CURSOLA_NORMAL";
						pokemon: "CURSOLA";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "CORSOLA";
	}
>;
export type EvolutionChainDisplaySettingsV0234PokemonStantler = EvolutionChainDisplaySettings<
	"EVOLUTION_V0234_POKEMON_STANTLER",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "STANTLER";
					},
				];
			},
		];
		pokemon: "STANTLER";
	}
>;
export type EvolutionChainDisplaySettingsV0263PokemonZigzagoon = EvolutionChainDisplaySettings<
	"EVOLUTION_V0263_POKEMON_ZIGZAGOON",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "ZIGZAGOON";
					},
					{
						pokemon: "LINOONE";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ZIGZAGOON_GALARIAN";
						pokemon: "ZIGZAGOON";
					},
					{
						form: "LINOONE_GALARIAN";
						pokemon: "LINOONE";
					},
					{
						form: "OBSTAGOON_NORMAL";
						pokemon: "OBSTAGOON";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "ZIGZAGOON";
	}
>;
export type EvolutionChainDisplaySettingsV0264PokemonLinoone = EvolutionChainDisplaySettings<
	"EVOLUTION_V0264_POKEMON_LINOONE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "ZIGZAGOON";
					},
					{
						pokemon: "LINOONE";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ZIGZAGOON_GALARIAN";
						pokemon: "ZIGZAGOON";
					},
					{
						form: "LINOONE_GALARIAN";
						pokemon: "LINOONE";
					},
					{
						form: "OBSTAGOON_NORMAL";
						pokemon: "OBSTAGOON";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "LINOONE";
	}
>;
export type EvolutionChainDisplaySettingsV0290PokemonNincada = EvolutionChainDisplaySettings<
	"EVOLUTION_V0290_POKEMON_NINCADA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "NINCADA_NORMAL";
						pokemon: "NINCADA";
					},
					{
						form: "NINJASK_NORMAL";
						pokemon: "NINJASK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "NINCADA_NORMAL";
						pokemon: "NINCADA";
					},
					{
						form: "SHEDINJA_NORMAL";
						pokemon: "SHEDINJA";
					},
				];
			},
		];
		pokemon: "NINCADA";
	}
>;
export type EvolutionChainDisplaySettingsV0412PokemonBurmy = EvolutionChainDisplaySettings<
	"EVOLUTION_V0412_POKEMON_BURMY",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "BURMY_PLANT";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_SANDY";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_TRASH";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_PLANT";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_PLANT";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
				headerMessage: "gender_female";
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_SANDY";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_SANDY";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_TRASH";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_TRASH";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
			},
		];
		pokemon: "BURMY";
	}
>;
export type EvolutionChainDisplaySettingsV0413PokemonWormadam = EvolutionChainDisplaySettings<
	"EVOLUTION_V0413_POKEMON_WORMADAM",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "BURMY_PLANT";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_PLANT";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
				headerMessage: "gender_female";
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_SANDY";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_SANDY";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_TRASH";
						pokemon: "BURMY";
					},
					{
						form: "WORMADAM_TRASH";
						gender: "FEMALE";
						pokemon: "WORMADAM";
					},
				];
			},
		];
		pokemon: "WORMADAM";
	}
>;
export type EvolutionChainDisplaySettingsV0414PokemonMothim = EvolutionChainDisplaySettings<
	"EVOLUTION_V0414_POKEMON_MOTHIM",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "BURMY_PLANT";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_SANDY";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BURMY_TRASH";
						pokemon: "BURMY";
					},
					{
						gender: "MALE";
						pokemon: "MOTHIM";
					},
				];
			},
		];
		pokemon: "MOTHIM";
	}
>;
export type EvolutionChainDisplaySettingsV0420PokemonCherubi = EvolutionChainDisplaySettings<
	"EVOLUTION_V0420_POKEMON_CHERUBI",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CHERUBI";
					},
					{
						form: "CHERRIM_OVERCAST";
						pokemon: "CHERRIM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "CHERUBI";
					},
					{
						form: "CHERRIM_SUNNY";
						pokemon: "CHERRIM";
					},
				];
			},
		];
		pokemon: "CHERUBI";
	}
>;
export type EvolutionChainDisplaySettingsV0421PokemonCherrim = EvolutionChainDisplaySettings<
	"EVOLUTION_V0421_POKEMON_CHERRIM",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "CHERUBI";
					},
					{
						form: "CHERRIM_OVERCAST";
						pokemon: "CHERRIM";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "CHERUBI";
					},
					{
						form: "CHERRIM_SUNNY";
						pokemon: "CHERRIM";
					},
				];
			},
		];
		pokemon: "CHERRIM";
	}
>;
export type EvolutionChainDisplaySettingsV0422PokemonShellos = EvolutionChainDisplaySettings<
	"EVOLUTION_V0422_POKEMON_SHELLOS",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SHELLOS_WEST_SEA";
						pokemon: "SHELLOS";
					},
					{
						form: "GASTRODON_WEST_SEA";
						pokemon: "GASTRODON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SHELLOS_EAST_SEA";
						pokemon: "SHELLOS";
					},
					{
						form: "GASTRODON_EAST_SEA";
						pokemon: "GASTRODON";
					},
				];
			},
		];
		pokemon: "SHELLOS";
	}
>;
export type EvolutionChainDisplaySettingsV0423PokemonGastrodon = EvolutionChainDisplaySettings<
	"EVOLUTION_V0423_POKEMON_GASTRODON",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SHELLOS_WEST_SEA";
						pokemon: "SHELLOS";
					},
					{
						form: "GASTRODON_WEST_SEA";
						pokemon: "GASTRODON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SHELLOS_EAST_SEA";
						pokemon: "SHELLOS";
					},
					{
						form: "GASTRODON_EAST_SEA";
						pokemon: "GASTRODON";
					},
				];
			},
		];
		pokemon: "GASTRODON";
	}
>;
export type EvolutionChainDisplaySettingsV0449PokemonHippopotas = EvolutionChainDisplaySettings<
	"EVOLUTION_V0449_POKEMON_HIPPOPOTAS",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "HIPPOPOTAS";
					},
					{
						gender: "MALE";
						pokemon: "HIPPOWDON";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "HIPPOPOTAS";
					},
					{
						gender: "FEMALE";
						pokemon: "HIPPOWDON";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "HIPPOPOTAS";
	}
>;
export type EvolutionChainDisplaySettingsV0450PokemonHippowdon = EvolutionChainDisplaySettings<
	"EVOLUTION_V0450_POKEMON_HIPPOWDON",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "HIPPOPOTAS";
					},
					{
						gender: "MALE";
						pokemon: "HIPPOWDON";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "HIPPOPOTAS";
					},
					{
						gender: "FEMALE";
						pokemon: "HIPPOWDON";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "HIPPOWDON";
	}
>;
export type EvolutionChainDisplaySettingsV0501PokemonOshawott = EvolutionChainDisplaySettings<
	"EVOLUTION_V0501_POKEMON_OSHAWOTT",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "OSHAWOTT";
					},
					{
						pokemon: "DEWOTT";
					},
					{
						pokemon: "SAMUROTT";
					},
				];
			},
		];
		pokemon: "OSHAWOTT";
	}
>;
export type EvolutionChainDisplaySettingsV0502PokemonDewott = EvolutionChainDisplaySettings<
	"EVOLUTION_V0502_POKEMON_DEWOTT",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "OSHAWOTT";
					},
					{
						pokemon: "DEWOTT";
					},
					{
						pokemon: "SAMUROTT";
					},
				];
			},
		];
		pokemon: "DEWOTT";
	}
>;
export type EvolutionChainDisplaySettingsV0503PokemonSamurott = EvolutionChainDisplaySettings<
	"EVOLUTION_V0503_POKEMON_SAMUROTT",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "OSHAWOTT";
					},
					{
						pokemon: "DEWOTT";
					},
					{
						pokemon: "SAMUROTT";
					},
				];
			},
		];
		pokemon: "SAMUROTT";
	}
>;
export type EvolutionChainDisplaySettingsV0519PokemonPidove = EvolutionChainDisplaySettings<
	"EVOLUTION_V0519_POKEMON_PIDOVE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "MALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "MALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "FEMALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "FEMALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "PIDOVE";
	}
>;
export type EvolutionChainDisplaySettingsV0520PokemonTranquill = EvolutionChainDisplaySettings<
	"EVOLUTION_V0520_POKEMON_TRANQUILL",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "MALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "MALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "FEMALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "FEMALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "TRANQUILL";
	}
>;
export type EvolutionChainDisplaySettingsV0521PokemonUnfezant = EvolutionChainDisplaySettings<
	"EVOLUTION_V0521_POKEMON_UNFEZANT",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "MALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "MALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "PIDOVE";
					},
					{
						gender: "FEMALE";
						pokemon: "TRANQUILL";
					},
					{
						gender: "FEMALE";
						pokemon: "UNFEZANT";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "UNFEZANT";
	}
>;
export type EvolutionChainDisplaySettingsV0550PokemonBasculin = EvolutionChainDisplaySettings<
	"EVOLUTION_V0550_POKEMON_BASCULIN",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "BASCULIN_RED_STRIPED";
						pokemon: "BASCULIN";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BASCULIN_BLUE_STRIPED";
						pokemon: "BASCULIN";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "BASCULIN_WHITE_STRIPED";
						pokemon: "BASCULIN";
					},
				];
			},
		];
		pokemon: "BASCULIN";
	}
>;
export type EvolutionChainDisplaySettingsV0554PokemonDarumaka = EvolutionChainDisplaySettings<
	"EVOLUTION_V0554_POKEMON_DARUMAKA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "DARUMAKA";
					},
					{
						form: "DARMANITAN_STANDARD";
						pokemon: "DARMANITAN";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DARUMAKA_GALARIAN";
						pokemon: "DARUMAKA";
					},
					{
						form: "DARMANITAN_GALARIAN_STANDARD";
						pokemon: "DARMANITAN";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "DARUMAKA";
	}
>;
export type EvolutionChainDisplaySettingsV0562PokemonYamask = EvolutionChainDisplaySettings<
	"EVOLUTION_V0562_POKEMON_YAMASK",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "YAMASK";
					},
					{
						pokemon: "COFAGRIGUS";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "YAMASK_GALARIAN";
						pokemon: "YAMASK";
					},
					{
						form: "RUNERIGUS_NORMAL";
						pokemon: "RUNERIGUS";
					},
				];
				headerMessage: "galarian_pokedex_header";
			},
		];
		pokemon: "YAMASK";
	}
>;
export type EvolutionChainDisplaySettingsV0585PokemonDeerling = EvolutionChainDisplaySettings<
	"EVOLUTION_V0585_POKEMON_DEERLING",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "DEERLING_SPRING";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_SPRING";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_SUMMER";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_SUMMER";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_AUTUMN";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_AUTUMN";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_WINTER";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_WINTER";
						pokemon: "SAWSBUCK";
					},
				];
			},
		];
		pokemon: "DEERLING";
	}
>;
export type EvolutionChainDisplaySettingsV0586PokemonSawsbuck = EvolutionChainDisplaySettings<
	"EVOLUTION_V0586_POKEMON_SAWSBUCK",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "DEERLING_SPRING";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_SPRING";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_SUMMER";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_SUMMER";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_AUTUMN";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_AUTUMN";
						pokemon: "SAWSBUCK";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "DEERLING_WINTER";
						pokemon: "DEERLING";
					},
					{
						form: "SAWSBUCK_WINTER";
						pokemon: "SAWSBUCK";
					},
				];
			},
		];
		pokemon: "SAWSBUCK";
	}
>;
export type EvolutionChainDisplaySettingsV0592PokemonFrillish = EvolutionChainDisplaySettings<
	"EVOLUTION_V0592_POKEMON_FRILLISH",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FRILLISH_NORMAL";
						gender: "MALE";
						pokemon: "FRILLISH";
					},
					{
						form: "JELLICENT_NORMAL";
						gender: "MALE";
						pokemon: "JELLICENT";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						form: "FRILLISH_FEMALE";
						gender: "FEMALE";
						pokemon: "FRILLISH";
					},
					{
						form: "JELLICENT_FEMALE";
						gender: "FEMALE";
						pokemon: "JELLICENT";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "FRILLISH";
	}
>;
export type EvolutionChainDisplaySettingsV0593PokemonJellicent = EvolutionChainDisplaySettings<
	"EVOLUTION_V0593_POKEMON_JELLICENT",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FRILLISH_NORMAL";
						gender: "MALE";
						pokemon: "FRILLISH";
					},
					{
						form: "JELLICENT_NORMAL";
						gender: "MALE";
						pokemon: "JELLICENT";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						form: "FRILLISH_FEMALE";
						gender: "FEMALE";
						pokemon: "FRILLISH";
					},
					{
						form: "JELLICENT_FEMALE";
						gender: "FEMALE";
						pokemon: "JELLICENT";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "JELLICENT";
	}
>;
export type EvolutionChainDisplaySettingsV0664PokemonScatterbug = EvolutionChainDisplaySettings<
	"EVOLUTION_V0664_POKEMON_SCATTERBUG",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ARCHIPELAGO";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ARCHIPELAGO";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ARCHIPELAGO";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_CONTINENTAL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_CONTINENTAL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_CONTINENTAL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ELEGANT";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ELEGANT";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ELEGANT";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_FANCY";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_FANCY";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_FANCY";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_GARDEN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_GARDEN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_GARDEN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_HIGH_PLAINS";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_HIGH_PLAINS";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_HIGH_PLAINS";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ICY_SNOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ICY_SNOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ICY_SNOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_JUNGLE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_JUNGLE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_JUNGLE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MARINE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MARINE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MARINE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MEADOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MEADOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MEADOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MODERN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MODERN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MODERN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MONSOON";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MONSOON";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MONSOON";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_OCEAN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_OCEAN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_OCEAN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POKEBALL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POKEBALL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POKEBALL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POLAR";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POLAR";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POLAR";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_RIVER";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_RIVER";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_RIVER";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SANDSTORM";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SANDSTORM";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SANDSTORM";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SAVANNA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SAVANNA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SAVANNA";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SUN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SUN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SUN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_TUNDRA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_TUNDRA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_TUNDRA";
						pokemon: "VIVILLON";
					},
				];
			},
		];
		pokemon: "SCATTERBUG";
	}
>;
export type EvolutionChainDisplaySettingsV0665PokemonSpewpa = EvolutionChainDisplaySettings<
	"EVOLUTION_V0665_POKEMON_SPEWPA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ARCHIPELAGO";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ARCHIPELAGO";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ARCHIPELAGO";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_CONTINENTAL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_CONTINENTAL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_CONTINENTAL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ELEGANT";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ELEGANT";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ELEGANT";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_FANCY";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_FANCY";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_FANCY";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_GARDEN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_GARDEN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_GARDEN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_HIGH_PLAINS";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_HIGH_PLAINS";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_HIGH_PLAINS";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ICY_SNOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ICY_SNOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ICY_SNOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_JUNGLE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_JUNGLE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_JUNGLE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MARINE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MARINE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MARINE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MEADOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MEADOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MEADOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MODERN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MODERN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MODERN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MONSOON";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MONSOON";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MONSOON";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_OCEAN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_OCEAN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_OCEAN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POKEBALL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POKEBALL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POKEBALL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POLAR";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POLAR";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POLAR";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_RIVER";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_RIVER";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_RIVER";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SANDSTORM";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SANDSTORM";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SANDSTORM";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SAVANNA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SAVANNA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SAVANNA";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SUN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SUN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SUN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_TUNDRA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_TUNDRA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_TUNDRA";
						pokemon: "VIVILLON";
					},
				];
			},
		];
		pokemon: "SPEWPA";
	}
>;
export type EvolutionChainDisplaySettingsV0666PokemonVivillon = EvolutionChainDisplaySettings<
	"EVOLUTION_V0666_POKEMON_VIVILLON",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ARCHIPELAGO";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ARCHIPELAGO";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ARCHIPELAGO";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_CONTINENTAL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_CONTINENTAL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_CONTINENTAL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ELEGANT";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ELEGANT";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ELEGANT";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_FANCY";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_FANCY";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_FANCY";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_GARDEN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_GARDEN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_GARDEN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_HIGH_PLAINS";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_HIGH_PLAINS";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_HIGH_PLAINS";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_ICY_SNOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_ICY_SNOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_ICY_SNOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_JUNGLE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_JUNGLE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_JUNGLE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MARINE";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MARINE";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MARINE";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MEADOW";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MEADOW";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MEADOW";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MODERN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MODERN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MODERN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_MONSOON";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_MONSOON";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_MONSOON";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_OCEAN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_OCEAN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_OCEAN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POKEBALL";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POKEBALL";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POKEBALL";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_POLAR";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_POLAR";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_POLAR";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_RIVER";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_RIVER";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_RIVER";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SANDSTORM";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SANDSTORM";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SANDSTORM";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SAVANNA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SAVANNA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SAVANNA";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_SUN";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_SUN";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_SUN";
						pokemon: "VIVILLON";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "SCATTERBUG_TUNDRA";
						pokemon: "SCATTERBUG";
					},
					{
						form: "SPEWPA_TUNDRA";
						pokemon: "SPEWPA";
					},
					{
						form: "VIVILLON_TUNDRA";
						pokemon: "VIVILLON";
					},
				];
			},
		];
		pokemon: "VIVILLON";
	}
>;
export type EvolutionChainDisplaySettingsV0667PokemonLitleo = EvolutionChainDisplaySettings<
	"EVOLUTION_V0667_POKEMON_LITLEO",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "LITLEO";
					},
					{
						form: "PYROAR_NORMAL";
						gender: "MALE";
						pokemon: "PYROAR";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "LITLEO";
					},
					{
						form: "PYROAR_FEMALE";
						gender: "FEMALE";
						pokemon: "PYROAR";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "LITLEO";
	}
>;
export type EvolutionChainDisplaySettingsV0668PokemonPyroar = EvolutionChainDisplaySettings<
	"EVOLUTION_V0668_POKEMON_PYROAR",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "LITLEO";
					},
					{
						form: "PYROAR_NORMAL";
						gender: "MALE";
						pokemon: "PYROAR";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "LITLEO";
					},
					{
						form: "PYROAR_FEMALE";
						gender: "FEMALE";
						pokemon: "PYROAR";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "PYROAR";
	}
>;
export type EvolutionChainDisplaySettingsV0669PokemonFlabebe = EvolutionChainDisplaySettings<
	"EVOLUTION_V0669_POKEMON_FLABEBE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FLABEBE_RED";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_RED";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_RED";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_YELLOW";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_YELLOW";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_YELLOW";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_ORANGE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_ORANGE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_ORANGE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_BLUE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_BLUE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_BLUE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_WHITE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_WHITE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_WHITE";
						pokemon: "FLORGES";
					},
				];
			},
		];
		pokemon: "FLABEBE";
	}
>;
export type EvolutionChainDisplaySettingsV0670PokemonFloette = EvolutionChainDisplaySettings<
	"EVOLUTION_V0670_POKEMON_FLOETTE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FLABEBE_RED";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_RED";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_RED";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_YELLOW";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_YELLOW";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_YELLOW";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_ORANGE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_ORANGE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_ORANGE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_BLUE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_BLUE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_BLUE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_WHITE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_WHITE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_WHITE";
						pokemon: "FLORGES";
					},
				];
			},
		];
		pokemon: "FLOETTE";
	}
>;
export type EvolutionChainDisplaySettingsV0671PokemonFlorges = EvolutionChainDisplaySettings<
	"EVOLUTION_V0671_POKEMON_FLORGES",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FLABEBE_RED";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_RED";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_RED";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_YELLOW";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_YELLOW";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_YELLOW";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_ORANGE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_ORANGE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_ORANGE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_BLUE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_BLUE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_BLUE";
						pokemon: "FLORGES";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "FLABEBE_WHITE";
						pokemon: "FLABEBE";
					},
					{
						form: "FLOETTE_WHITE";
						pokemon: "FLOETTE";
					},
					{
						form: "FLORGES_WHITE";
						pokemon: "FLORGES";
					},
				];
			},
		];
		pokemon: "FLORGES";
	}
>;
export type EvolutionChainDisplaySettingsV0677PokemonEspurr = EvolutionChainDisplaySettings<
	"EVOLUTION_V0677_POKEMON_ESPURR",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "ESPURR";
					},
					{
						form: "MEOWSTIC_NORMAL";
						gender: "MALE";
						pokemon: "MEOWSTIC";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "ESPURR";
					},
					{
						form: "MEOWSTIC_FEMALE";
						gender: "FEMALE";
						pokemon: "MEOWSTIC";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "ESPURR";
	}
>;
export type EvolutionChainDisplaySettingsV0678PokemonMeowstic = EvolutionChainDisplaySettings<
	"EVOLUTION_V0678_POKEMON_MEOWSTIC",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "ESPURR";
					},
					{
						form: "MEOWSTIC_NORMAL";
						gender: "MALE";
						pokemon: "MEOWSTIC";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "ESPURR";
					},
					{
						form: "MEOWSTIC_FEMALE";
						gender: "FEMALE";
						pokemon: "MEOWSTIC";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "MEOWSTIC";
	}
>;
export type EvolutionChainDisplaySettingsV0679PokemonHonedge = EvolutionChainDisplaySettings<
	"EVOLUTION_V0679_POKEMON_HONEDGE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "HONEDGE";
					},
					{
						pokemon: "DOUBLADE";
					},
					{
						form: "AEGISLASH_SHIELD";
						pokemon: "AEGISLASH";
					},
				];
			},
		];
		pokemon: "HONEDGE";
	}
>;
export type EvolutionChainDisplaySettingsV0680PokemonDoublade = EvolutionChainDisplaySettings<
	"EVOLUTION_V0680_POKEMON_DOUBLADE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "HONEDGE";
					},
					{
						pokemon: "DOUBLADE";
					},
					{
						form: "AEGISLASH_SHIELD";
						pokemon: "AEGISLASH";
					},
				];
			},
		];
		pokemon: "DOUBLADE";
	}
>;
export type EvolutionChainDisplaySettingsV0681PokemonAegislash = EvolutionChainDisplaySettings<
	"EVOLUTION_V0681_POKEMON_AEGISLASH",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "HONEDGE";
					},
					{
						pokemon: "DOUBLADE";
					},
					{
						form: "AEGISLASH_SHIELD";
						pokemon: "AEGISLASH";
					},
				];
			},
		];
		pokemon: "AEGISLASH";
	}
>;
export type EvolutionChainDisplaySettingsV0710PokemonPumpkaboo = EvolutionChainDisplaySettings<
	"EVOLUTION_V0710_POKEMON_PUMPKABOO",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_SMALL";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_SMALL";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_AVERAGE";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_AVERAGE";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_LARGE";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_LARGE";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_SUPER";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_SUPER";
						pokemon: "GOURGEIST";
					},
				];
			},
		];
		pokemon: "PUMPKABOO";
	}
>;
export type EvolutionChainDisplaySettingsV0711PokemonGourgeist = EvolutionChainDisplaySettings<
	"EVOLUTION_V0711_POKEMON_GOURGEIST",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_SMALL";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_SMALL";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_AVERAGE";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_AVERAGE";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_LARGE";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_LARGE";
						pokemon: "GOURGEIST";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "PUMPKABOO_SUPER";
						pokemon: "PUMPKABOO";
					},
					{
						form: "GOURGEIST_SUPER";
						pokemon: "GOURGEIST";
					},
				];
			},
		];
		pokemon: "GOURGEIST";
	}
>;
export type EvolutionChainDisplaySettingsV0718PokemonZygarde = EvolutionChainDisplaySettings<
	"EVOLUTION_V0718_POKEMON_ZYGARDE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "ZYGARDE_TEN_PERCENT";
						pokemon: "ZYGARDE";
					},
				];
			},
		];
		pokemon: "ZYGARDE";
	}
>;
export type EvolutionChainDisplaySettingsV0722PokemonRowlet = EvolutionChainDisplaySettings<
	"EVOLUTION_V0722_POKEMON_ROWLET",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "ROWLET";
					},
					{
						pokemon: "DARTRIX";
					},
					{
						pokemon: "DECIDUEYE";
					},
				];
			},
		];
		pokemon: "ROWLET";
	}
>;
export type EvolutionChainDisplaySettingsV0723PokemonDartrix = EvolutionChainDisplaySettings<
	"EVOLUTION_V0723_POKEMON_DARTRIX",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "ROWLET";
					},
					{
						pokemon: "DARTRIX";
					},
					{
						pokemon: "DECIDUEYE";
					},
				];
			},
		];
		pokemon: "DARTRIX";
	}
>;
export type EvolutionChainDisplaySettingsV0724PokemonDecidueye = EvolutionChainDisplaySettings<
	"EVOLUTION_V0724_POKEMON_DECIDUEYE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "ROWLET";
					},
					{
						pokemon: "DARTRIX";
					},
					{
						pokemon: "DECIDUEYE";
					},
				];
			},
		];
		pokemon: "DECIDUEYE";
	}
>;
export type EvolutionChainDisplaySettingsV0744PokemonRockruff = EvolutionChainDisplaySettings<
	"EVOLUTION_V0744_POKEMON_ROCKRUFF",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_NORMAL";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_MIDDAY";
						pokemon: "LYCANROC";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_NORMAL";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_MIDNIGHT";
						pokemon: "LYCANROC";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_DUSK";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_DUSK";
						pokemon: "LYCANROC";
					},
				];
			},
		];
		pokemon: "ROCKRUFF";
	}
>;
export type EvolutionChainDisplaySettingsV0745PokemonLycanroc = EvolutionChainDisplaySettings<
	"EVOLUTION_V0745_POKEMON_LYCANROC",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_NORMAL";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_MIDDAY";
						pokemon: "LYCANROC";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_NORMAL";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_MIDNIGHT";
						pokemon: "LYCANROC";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "ROCKRUFF_DUSK";
						pokemon: "ROCKRUFF";
					},
					{
						form: "LYCANROC_DUSK";
						pokemon: "LYCANROC";
					},
				];
			},
		];
		pokemon: "LYCANROC";
	}
>;
export type EvolutionChainDisplaySettingsV0800PokemonNecrozma = EvolutionChainDisplaySettings<
	"EVOLUTION_V0800_POKEMON_NECROZMA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "NECROZMA_NORMAL";
						pokemon: "NECROZMA";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "NECROZMA_DUSK_MANE";
						pokemon: "NECROZMA";
					},
				];
			},
			{
				evolutionInfos: [
					{
						form: "NECROZMA_DAWN_WINGS";
						pokemon: "NECROZMA";
					},
				];
			},
		];
		pokemon: "NECROZMA";
	}
>;
export type EvolutionChainDisplaySettingsV0848PokemonToxel = EvolutionChainDisplaySettings<
	"EVOLUTION_V0848_POKEMON_TOXEL",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "TOXEL";
					},
					{
						form: "TOXTRICITY_LOW_KEY";
						pokemon: "TOXTRICITY";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "TOXEL";
					},
					{
						form: "TOXTRICITY_AMPED";
						pokemon: "TOXTRICITY";
					},
				];
			},
		];
		pokemon: "TOXEL";
	}
>;
export type EvolutionChainDisplaySettingsV0849PokemonToxtricity = EvolutionChainDisplaySettings<
	"EVOLUTION_V0849_POKEMON_TOXTRICITY",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "TOXEL";
					},
					{
						form: "TOXTRICITY_LOW_KEY";
						pokemon: "TOXTRICITY";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "TOXEL";
					},
					{
						form: "TOXTRICITY_AMPED";
						pokemon: "TOXTRICITY";
					},
				];
			},
		];
		pokemon: "TOXTRICITY";
	}
>;
export type EvolutionChainDisplaySettingsV0862PokemonObstagoon = EvolutionChainDisplaySettings<
	"EVOLUTION_V0862_POKEMON_OBSTAGOON",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "ZIGZAGOON_GALARIAN";
						pokemon: "ZIGZAGOON";
					},
					{
						form: "LINOONE_GALARIAN";
						pokemon: "LINOONE";
					},
					{
						form: "OBSTAGOON_NORMAL";
						pokemon: "OBSTAGOON";
					},
				];
			},
		];
		pokemon: "OBSTAGOON";
	}
>;
export type EvolutionChainDisplaySettingsV0863PokemonPerrserker = EvolutionChainDisplaySettings<
	"EVOLUTION_V0863_POKEMON_PERRSERKER",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "MEOWTH_GALARIAN";
						pokemon: "MEOWTH";
					},
					{
						form: "PERRSERKER_NORMAL";
						pokemon: "PERRSERKER";
					},
				];
			},
		];
		pokemon: "PERRSERKER";
	}
>;
export type EvolutionChainDisplaySettingsV0864PokemonCursola = EvolutionChainDisplaySettings<
	"EVOLUTION_V0864_POKEMON_CURSOLA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "CORSOLA_GALARIAN";
						pokemon: "CORSOLA";
					},
					{
						form: "CURSOLA_NORMAL";
						pokemon: "CURSOLA";
					},
				];
			},
		];
		pokemon: "CURSOLA";
	}
>;
export type EvolutionChainDisplaySettingsV0865PokemonSirfetchd = EvolutionChainDisplaySettings<
	"EVOLUTION_V0865_POKEMON_SIRFETCHD",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "FARFETCHD_GALARIAN";
						pokemon: "FARFETCHD";
					},
					{
						form: "SIRFETCHD_NORMAL";
						pokemon: "SIRFETCHD";
					},
				];
			},
		];
		pokemon: "SIRFETCHD";
	}
>;
export type EvolutionChainDisplaySettingsV0866PokemonMrRime = EvolutionChainDisplaySettings<
	"EVOLUTION_V0866_POKEMON_MR_RIME",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "MR_MIME_GALARIAN";
						pokemon: "MR_MIME";
					},
					{
						form: "MR_RIME_NORMAL";
						pokemon: "MR_RIME";
					},
				];
			},
		];
		pokemon: "MR_RIME";
	}
>;
export type EvolutionChainDisplaySettingsV0867PokemonRunerigus = EvolutionChainDisplaySettings<
	"EVOLUTION_V0867_POKEMON_RUNERIGUS",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "YAMASK_GALARIAN";
						pokemon: "YAMASK";
					},
					{
						form: "RUNERIGUS_NORMAL";
						pokemon: "RUNERIGUS";
					},
				];
			},
		];
		pokemon: "RUNERIGUS";
	}
>;
export type EvolutionChainDisplaySettingsV0899PokemonWyrdeer = EvolutionChainDisplaySettings<
	"EVOLUTION_V0899_POKEMON_WYRDEER",
	{
		pokemon: "WYRDEER";
	}
>;
export type EvolutionChainDisplaySettingsV0900PokemonKleavor = EvolutionChainDisplaySettings<
	"EVOLUTION_V0900_POKEMON_KLEAVOR",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "SCYTHER";
					},
					{
						pokemon: "KLEAVOR";
					},
				];
			},
		];
		pokemon: "KLEAVOR";
	}
>;
export type EvolutionChainDisplaySettingsV0903PokemonSneasler = EvolutionChainDisplaySettings<
	"EVOLUTION_V0903_POKEMON_SNEASLER",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "SNEASEL_HISUIAN";
						pokemon: "SNEASEL";
					},
					{
						pokemon: "SNEASLER";
					},
				];
			},
		];
		pokemon: "SNEASLER";
	}
>;
export type EvolutionChainDisplaySettingsV0904PokemonOverqwil = EvolutionChainDisplaySettings<
	"EVOLUTION_V0904_POKEMON_OVERQWIL",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "QWILFISH_HISUIAN";
						pokemon: "QWILFISH";
					},
					{
						pokemon: "OVERQWIL";
					},
				];
			},
		];
		pokemon: "OVERQWIL";
	}
>;
export type EvolutionChainDisplaySettingsV0915PokemonLechonk = EvolutionChainDisplaySettings<
	"EVOLUTION_V0915_POKEMON_LECHONK",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "LECHONK";
					},
					{
						form: "OINKOLOGNE_NORMAL";
						gender: "MALE";
						pokemon: "OINKOLOGNE";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "LECHONK";
					},
					{
						form: "OINKOLOGNE_FEMALE";
						gender: "FEMALE";
						pokemon: "OINKOLOGNE";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "LECHONK";
	}
>;
export type EvolutionChainDisplaySettingsV0916PokemonOinkologne = EvolutionChainDisplaySettings<
	"EVOLUTION_V0916_POKEMON_OINKOLOGNE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						gender: "MALE";
						pokemon: "LECHONK";
					},
					{
						form: "OINKOLOGNE_NORMAL";
						gender: "MALE";
						pokemon: "OINKOLOGNE";
					},
				];
				headerMessage: "gender_male";
			},
			{
				evolutionInfos: [
					{
						gender: "FEMALE";
						pokemon: "LECHONK";
					},
					{
						form: "OINKOLOGNE_FEMALE";
						gender: "FEMALE";
						pokemon: "OINKOLOGNE";
					},
				];
				headerMessage: "gender_female";
			},
		];
		pokemon: "OINKOLOGNE";
	}
>;
export type EvolutionChainDisplaySettingsV0924PokemonTandemaus = EvolutionChainDisplaySettings<
	"EVOLUTION_V0924_POKEMON_TANDEMAUS",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "TANDEMAUS";
					},
					{
						form: "MAUSHOLD_FAMILY_OF_FOUR";
						pokemon: "MAUSHOLD";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "TANDEMAUS";
					},
					{
						form: "MAUSHOLD_FAMILY_OF_THREE";
						pokemon: "MAUSHOLD";
					},
				];
			},
		];
		pokemon: "TANDEMAUS";
	}
>;
export type EvolutionChainDisplaySettingsV0925PokemonMaushold = EvolutionChainDisplaySettings<
	"EVOLUTION_V0925_POKEMON_MAUSHOLD",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						pokemon: "TANDEMAUS";
					},
					{
						form: "MAUSHOLD_FAMILY_OF_FOUR";
						pokemon: "MAUSHOLD";
					},
				];
			},
			{
				evolutionInfos: [
					{
						pokemon: "TANDEMAUS";
					},
					{
						form: "MAUSHOLD_FAMILY_OF_THREE";
						pokemon: "MAUSHOLD";
					},
				];
			},
		];
		pokemon: "MAUSHOLD";
	}
>;
export type EvolutionChainDisplaySettingsV0980PokemonClodsire = EvolutionChainDisplaySettings<
	"EVOLUTION_V0980_POKEMON_CLODSIRE",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "WOOPER_PALDEA";
						pokemon: "WOOPER";
					},
					{
						pokemon: "CLODSIRE";
					},
				];
			},
		];
		pokemon: "CLODSIRE";
	}
>;
export type EvolutionChainDisplaySettingsV1012PokemonPoltchageist = EvolutionChainDisplaySettings<
	"EVOLUTION_V1012_POKEMON_POLTCHAGEIST",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "POLTCHAGEIST_COUNTERFEIT";
						pokemon: "POLTCHAGEIST";
					},
					{
						form: "SINISTCHA_UNREMARKABLE";
						pokemon: "SINISTCHA";
					},
				];
				headerMessage: "form_counterfeit";
			},
			{
				evolutionInfos: [
					{
						form: "POLTCHAGEIST_ARTISAN";
						pokemon: "POLTCHAGEIST";
					},
					{
						form: "SINISTCHA_MASTERPIECE";
						pokemon: "SINISTCHA";
					},
				];
				headerMessage: "form_masterpiece";
			},
		];
		pokemon: "POLTCHAGEIST";
	}
>;
export type EvolutionChainDisplaySettingsV1013PokemonSinistcha = EvolutionChainDisplaySettings<
	"EVOLUTION_V1013_POKEMON_SINISTCHA",
	{
		evolutionChains: [
			{
				evolutionInfos: [
					{
						form: "POLTCHAGEIST_COUNTERFEIT";
						pokemon: "POLTCHAGEIST";
					},
					{
						form: "SINISTCHA_UNREMARKABLE";
						pokemon: "SINISTCHA";
					},
				];
				headerMessage: "form_artisan";
			},
			{
				evolutionInfos: [
					{
						form: "POLTCHAGEIST_ARTISAN";
						pokemon: "POLTCHAGEIST";
					},
					{
						form: "SINISTCHA_MASTERPIECE";
						pokemon: "SINISTCHA";
					},
				];
				headerMessage: "form_masterpiece";
			},
		];
		pokemon: "SINISTCHA";
	}
>;

export type EvolutionChainDisplaySettingsMasterfileEntry =
	| EvolutionChainDisplaySettingsV0052PokemonMeowth
	| EvolutionChainDisplaySettingsV0083PokemonFarfetchd
	| EvolutionChainDisplaySettingsV0122PokemonMrMime
	| EvolutionChainDisplaySettingsV0123PokemonScyther
	| EvolutionChainDisplaySettingsV0150PokemonMewtwo
	| EvolutionChainDisplaySettingsV0155PokemonCyndaquil
	| EvolutionChainDisplaySettingsV0156PokemonQuilava
	| EvolutionChainDisplaySettingsV0157PokemonTyphlosion
	| EvolutionChainDisplaySettingsV0194PokemonWooper
	| EvolutionChainDisplaySettingsV0211PokemonQwilfish
	| EvolutionChainDisplaySettingsV0215PokemonSneasel
	| EvolutionChainDisplaySettingsV0222PokemonCorsola
	| EvolutionChainDisplaySettingsV0234PokemonStantler
	| EvolutionChainDisplaySettingsV0263PokemonZigzagoon
	| EvolutionChainDisplaySettingsV0264PokemonLinoone
	| EvolutionChainDisplaySettingsV0290PokemonNincada
	| EvolutionChainDisplaySettingsV0412PokemonBurmy
	| EvolutionChainDisplaySettingsV0413PokemonWormadam
	| EvolutionChainDisplaySettingsV0414PokemonMothim
	| EvolutionChainDisplaySettingsV0420PokemonCherubi
	| EvolutionChainDisplaySettingsV0421PokemonCherrim
	| EvolutionChainDisplaySettingsV0422PokemonShellos
	| EvolutionChainDisplaySettingsV0423PokemonGastrodon
	| EvolutionChainDisplaySettingsV0449PokemonHippopotas
	| EvolutionChainDisplaySettingsV0450PokemonHippowdon
	| EvolutionChainDisplaySettingsV0501PokemonOshawott
	| EvolutionChainDisplaySettingsV0502PokemonDewott
	| EvolutionChainDisplaySettingsV0503PokemonSamurott
	| EvolutionChainDisplaySettingsV0519PokemonPidove
	| EvolutionChainDisplaySettingsV0520PokemonTranquill
	| EvolutionChainDisplaySettingsV0521PokemonUnfezant
	| EvolutionChainDisplaySettingsV0550PokemonBasculin
	| EvolutionChainDisplaySettingsV0554PokemonDarumaka
	| EvolutionChainDisplaySettingsV0562PokemonYamask
	| EvolutionChainDisplaySettingsV0585PokemonDeerling
	| EvolutionChainDisplaySettingsV0586PokemonSawsbuck
	| EvolutionChainDisplaySettingsV0592PokemonFrillish
	| EvolutionChainDisplaySettingsV0593PokemonJellicent
	| EvolutionChainDisplaySettingsV0664PokemonScatterbug
	| EvolutionChainDisplaySettingsV0665PokemonSpewpa
	| EvolutionChainDisplaySettingsV0666PokemonVivillon
	| EvolutionChainDisplaySettingsV0667PokemonLitleo
	| EvolutionChainDisplaySettingsV0668PokemonPyroar
	| EvolutionChainDisplaySettingsV0669PokemonFlabebe
	| EvolutionChainDisplaySettingsV0670PokemonFloette
	| EvolutionChainDisplaySettingsV0671PokemonFlorges
	| EvolutionChainDisplaySettingsV0677PokemonEspurr
	| EvolutionChainDisplaySettingsV0678PokemonMeowstic
	| EvolutionChainDisplaySettingsV0679PokemonHonedge
	| EvolutionChainDisplaySettingsV0680PokemonDoublade
	| EvolutionChainDisplaySettingsV0681PokemonAegislash
	| EvolutionChainDisplaySettingsV0710PokemonPumpkaboo
	| EvolutionChainDisplaySettingsV0711PokemonGourgeist
	| EvolutionChainDisplaySettingsV0718PokemonZygarde
	| EvolutionChainDisplaySettingsV0722PokemonRowlet
	| EvolutionChainDisplaySettingsV0723PokemonDartrix
	| EvolutionChainDisplaySettingsV0724PokemonDecidueye
	| EvolutionChainDisplaySettingsV0744PokemonRockruff
	| EvolutionChainDisplaySettingsV0745PokemonLycanroc
	| EvolutionChainDisplaySettingsV0800PokemonNecrozma
	| EvolutionChainDisplaySettingsV0848PokemonToxel
	| EvolutionChainDisplaySettingsV0849PokemonToxtricity
	| EvolutionChainDisplaySettingsV0862PokemonObstagoon
	| EvolutionChainDisplaySettingsV0863PokemonPerrserker
	| EvolutionChainDisplaySettingsV0864PokemonCursola
	| EvolutionChainDisplaySettingsV0865PokemonSirfetchd
	| EvolutionChainDisplaySettingsV0866PokemonMrRime
	| EvolutionChainDisplaySettingsV0867PokemonRunerigus
	| EvolutionChainDisplaySettingsV0899PokemonWyrdeer
	| EvolutionChainDisplaySettingsV0900PokemonKleavor
	| EvolutionChainDisplaySettingsV0903PokemonSneasler
	| EvolutionChainDisplaySettingsV0904PokemonOverqwil
	| EvolutionChainDisplaySettingsV0915PokemonLechonk
	| EvolutionChainDisplaySettingsV0916PokemonOinkologne
	| EvolutionChainDisplaySettingsV0924PokemonTandemaus
	| EvolutionChainDisplaySettingsV0925PokemonMaushold
	| EvolutionChainDisplaySettingsV0980PokemonClodsire
	| EvolutionChainDisplaySettingsV1012PokemonPoltchageist
	| EvolutionChainDisplaySettingsV1013PokemonSinistcha;

export type EvolutionChainDisplaySettingsTemplateID = EvolutionChainDisplaySettingsMasterfileEntry["templateId"];

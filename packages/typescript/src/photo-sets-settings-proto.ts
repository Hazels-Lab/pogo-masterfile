// Generated from Pokémon GO masterfile — group "photoSetsSettingsProto", 45 entries.

export interface PhotoSetsSettingsProto<
	TemplateID extends string = string,
	TData extends PhotoSetsSettingsProtoData = PhotoSetsSettingsProtoData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		photoSetsSettingsProto: TData & {
			minimumPokemon: 1;
		};
	};
}

export interface PhotoSetsSettingsProtoData {
	displayOrder: number;
	frameColor:
		| "Beachside"
		| "BusyBugs"
		| "Fighting"
		| "FloralFriends"
		| "GreenShoots"
		| "Halloween"
		| "Museum"
		| "Nightfall"
		| "PinkPals"
		| "RainyDay"
		| "Safarizone"
		| "SummerVibes"
		| "TinyBuddies"
		| "UkiyoEuphoria";
	nameKey:
		| "PHOTO_SET_ALOLA"
		| "PHOTO_SET_BABIES"
		| "PHOTO_SET_BATTLE_POKEMON"
		| "PHOTO_SET_BEACH"
		| "PHOTO_SET_CITY"
		| "PHOTO_SET_CLAWED_CUTIES"
		| "PHOTO_SET_CUTE_POKEMON_PINK"
		| "PHOTO_SET_FALL_VIBES"
		| "PHOTO_SET_FANCY"
		| "PHOTO_SET_FEATHERED_FRIENDS"
		| "PHOTO_SET_FEATHERED_FRIENDS_SMALL"
		| "PHOTO_SET_FOSSIL"
		| "PHOTO_SET_FURRY_FRIENDS"
		| "PHOTO_SET_FURRY_FRIENDS_BIG"
		| "PHOTO_SET_GARDEN"
		| "PHOTO_SET_GRACEFUL_FLYERS"
		| "PHOTO_SET_HISUI"
		| "PHOTO_SET_HOENN"
		| "PHOTO_SET_JOHTO"
		| "PHOTO_SET_KALOS"
		| "PHOTO_SET_KANTO"
		| "PHOTO_SET_LITTLE_CHONKERS"
		| "PHOTO_SET_LOVELY"
		| "PHOTO_SET_MOUNTAIN"
		| "PHOTO_SET_MUSEUM_FOSSILS"
		| "PHOTO_SET_NIGHT"
		| "PHOTO_SET_PALDEA"
		| "PHOTO_SET_PLAYFUL_PALS_BIG"
		| "PHOTO_SET_SAFARI"
		| "PHOTO_SET_SINNOH"
		| "PHOTO_SET_SMALL_AND_CUTE"
		| "PHOTO_SET_SMALL_CUTE_POKEMON"
		| "PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE"
		| "PHOTO_SET_SMALL_CUTE_POKEMON_PINK"
		| "PHOTO_SET_SMALL_FLOWER_POKEMON"
		| "PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM"
		| "PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS"
		| "PHOTO_SET_SMALL_WATER_POKEMON"
		| "PHOTO_SET_SPRING_VIBES"
		| "PHOTO_SET_STARTERS"
		| "PHOTO_SET_SUMMER_VIBES"
		| "PHOTO_SET_TINY_TIKES"
		| "PHOTO_SET_UNOVA"
		| "PHOTO_SET_WINGS_POKEMON"
		| "PHOTO_SET_WINTER_VIBES";
	pokemon: Array<{
		form?: string;
		pokemonId: string;
	}>;
}

export type PhotoSetsSettingsProtoAlola = PhotoSetsSettingsProto<
	"PHOTO_SET_ALOLA",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_ALOLA";
		pokemon: [
			{
				pokemonId: "ROWLET";
			},
			{
				pokemonId: "LITTEN";
			},
			{
				pokemonId: "POPPLIO";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoAncientFossils = PhotoSetsSettingsProto<
	"PHOTO_SET_ANCIENT_FOSSILS",
	{
		displayOrder: 40;
		frameColor: "Beachside";
		nameKey: "PHOTO_SET_FOSSIL";
		pokemon: [
			{
				pokemonId: "TYRUNT";
			},
			{
				pokemonId: "ARCHEN";
			},
			{
				pokemonId: "CRANIDOS";
			},
			{
				pokemonId: "LILEEP";
			},
			{
				pokemonId: "OMASTAR";
			},
			{
				pokemonId: "KABUTO";
			},
			{
				pokemonId: "ANORITH";
			},
			{
				pokemonId: "OMANYTE";
			},
			{
				pokemonId: "KABUTOPS";
			},
			{
				pokemonId: "AERODACTYL";
			},
			{
				form: "AERODACTYL_SUMMER_2023";
				pokemonId: "AERODACTYL";
			},
			{
				pokemonId: "CRADILY";
			},
			{
				pokemonId: "ARMALDO";
			},
			{
				pokemonId: "RAMPARDOS";
			},
			{
				pokemonId: "SHIELDON";
			},
			{
				pokemonId: "BASTIODON";
			},
			{
				pokemonId: "TIRTOUGA";
			},
			{
				pokemonId: "CARRACOSTA";
			},
			{
				pokemonId: "ARCHEOPS";
			},
			{
				pokemonId: "TYRANTRUM";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoBattlePokemon = PhotoSetsSettingsProto<
	"PHOTO_SET_BATTLE_POKEMON",
	{
		displayOrder: 12;
		frameColor: "Fighting";
		nameKey: "PHOTO_SET_BATTLE_POKEMON";
		pokemon: [
			{
				pokemonId: "HITMONTOP";
			},
			{
				pokemonId: "HITMONCHAN";
			},
			{
				pokemonId: "HITMONLEE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoBundleOfJoy = PhotoSetsSettingsProto<
	"PHOTO_SET_BUNDLE_OF_JOY",
	{
		displayOrder: 40;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_BABIES";
		pokemon: [
			{
				pokemonId: "PICHU";
			},
			{
				pokemonId: "CLEFFA";
			},
			{
				pokemonId: "IGGLYBUFF";
			},
			{
				pokemonId: "TOGEPI";
			},
			{
				pokemonId: "TYROGUE";
			},
			{
				pokemonId: "SMOOCHUM";
			},
			{
				pokemonId: "ELEKID";
			},
			{
				pokemonId: "MAGBY";
			},
			{
				pokemonId: "AZURILL";
			},
			{
				pokemonId: "WYNAUT";
			},
			{
				pokemonId: "BUDEW";
			},
			{
				pokemonId: "CHINGLING";
			},
			{
				pokemonId: "BONSLY";
			},
			{
				pokemonId: "MIME_JR";
			},
			{
				pokemonId: "HAPPINY";
			},
			{
				pokemonId: "MUNCHLAX";
			},
			{
				pokemonId: "RIOLU";
			},
			{
				pokemonId: "MANTYKE";
			},
			{
				form: "DEERLING_AUTUMN";
				pokemonId: "DEERLING";
			},
			{
				form: "DEERLING_SPRING";
				pokemonId: "DEERLING";
			},
			{
				form: "DEERLING_SUMMER";
				pokemonId: "DEERLING";
			},
			{
				form: "DEERLING_WINTER";
				pokemonId: "DEERLING";
			},
			{
				pokemonId: "PHANTUMP";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoBusyCity = PhotoSetsSettingsProto<
	"PHOTO_SET_BUSY_CITY",
	{
		displayOrder: 40;
		frameColor: "Nightfall";
		nameKey: "PHOTO_SET_CITY";
		pokemon: [
			{
				pokemonId: "KOFFING";
			},
			{
				pokemonId: "GRIMER";
			},
			{
				pokemonId: "GROWLITHE";
			},
			{
				pokemonId: "RATICATE";
			},
			{
				pokemonId: "ELECTABUZZ";
			},
			{
				pokemonId: "PIDGEY";
			},
			{
				pokemonId: "MEOWTH";
			},
			{
				pokemonId: "PIDGEOTTO";
			},
			{
				pokemonId: "WIGGLYTUFF";
			},
			{
				pokemonId: "PERSIAN";
			},
			{
				pokemonId: "JIGGLYPUFF";
			},
			{
				pokemonId: "GASTLY";
			},
			{
				form: "MUK_ALOLA";
				pokemonId: "MUK";
			},
			{
				pokemonId: "VOLTORB";
			},
			{
				pokemonId: "MAGMAR";
			},
			{
				pokemonId: "JOLTEON";
			},
			{
				pokemonId: "SNORLAX";
			},
			{
				pokemonId: "PORYGON";
			},
			{
				pokemonId: "EEVEE";
			},
			{
				form: "WEEZING_GALARIAN";
				pokemonId: "WEEZING";
			},
			{
				pokemonId: "JYNX";
			},
			{
				pokemonId: "WEEZING";
			},
			{
				pokemonId: "HAUNTER";
			},
			{
				pokemonId: "SPEAROW";
			},
			{
				pokemonId: "MUK";
			},
			{
				form: "GRIMER_ALOLA";
				pokemonId: "GRIMER";
			},
			{
				pokemonId: "MAGNEMITE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoClawedCuties = PhotoSetsSettingsProto<
	"PHOTO_SET_CLAWED_CUTIES",
	{
		displayOrder: 40;
		frameColor: "RainyDay";
		nameKey: "PHOTO_SET_CLAWED_CUTIES";
		pokemon: [
			{
				form: "MEOWTH_GALARIAN";
				pokemonId: "MEOWTH";
			},
			{
				pokemonId: "SHINX";
			},
			{
				pokemonId: "GLAMEOW";
			},
			{
				pokemonId: "ESPURR";
			},
			{
				form: "MEOWSTIC_FEMALE";
				pokemonId: "MEOWSTIC";
			},
			{
				pokemonId: "LITTEN";
			},
			{
				pokemonId: "SPRIGATITO";
			},
			{
				pokemonId: "PURRLOIN";
			},
			{
				pokemonId: "LITLEO";
			},
			{
				form: "MEOWTH_ALOLA";
				pokemonId: "MEOWTH";
			},
			{
				pokemonId: "ESPEON";
			},
			{
				form: "SNEASEL_HISUIAN";
				pokemonId: "SNEASEL";
			},
			{
				pokemonId: "SNEASEL";
			},
			{
				pokemonId: "MEOWTH";
			},
			{
				pokemonId: "MEOWSTIC";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoCutePokemonPink = PhotoSetsSettingsProto<
	"PHOTO_SET_CUTE_POKEMON_PINK",
	{
		displayOrder: 779;
		frameColor: "PinkPals";
		nameKey: "PHOTO_SET_CUTE_POKEMON_PINK";
		pokemon: [
			{
				pokemonId: "CLEFAIRY";
			},
			{
				pokemonId: "SYLVEON";
			},
			{
				pokemonId: "AUDINO";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFallVibes = PhotoSetsSettingsProto<
	"PHOTO_SET_FALL_VIBES",
	{
		displayOrder: 40;
		frameColor: "Halloween";
		nameKey: "PHOTO_SET_FALL_VIBES";
		pokemon: [
			{
				pokemonId: "SEEDOT";
			},
			{
				pokemonId: "STARLY";
			},
			{
				pokemonId: "SKWOVET";
			},
			{
				pokemonId: "FOONGUS";
			},
			{
				pokemonId: "WEEDLE";
			},
			{
				pokemonId: "PARAS";
			},
			{
				form: "DEERLING_AUTUMN";
				pokemonId: "DEERLING";
			},
			{
				pokemonId: "MURKROW";
			},
			{
				form: "SAWSBUCK_AUTUMN";
				pokemonId: "SAWSBUCK";
			},
			{
				pokemonId: "RUFFLET";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFeatheredFriends = PhotoSetsSettingsProto<
	"PHOTO_SET_FEATHERED_FRIENDS",
	{
		displayOrder: 40;
		frameColor: "UkiyoEuphoria";
		nameKey: "PHOTO_SET_FEATHERED_FRIENDS_SMALL";
		pokemon: [
			{
				pokemonId: "PIDGEY";
			},
			{
				pokemonId: "ROWLET";
			},
			{
				pokemonId: "PIKIPEK";
			},
			{
				pokemonId: "SWABLU";
			},
			{
				pokemonId: "STARLY";
			},
			{
				pokemonId: "CHATOT";
			},
			{
				pokemonId: "WINGULL";
			},
			{
				pokemonId: "PIDOVE";
			},
			{
				pokemonId: "ARCHEN";
			},
			{
				form: "ORICORIO_BAILE";
				pokemonId: "ORICORIO";
			},
			{
				pokemonId: "DUCKLETT";
			},
			{
				pokemonId: "FLETCHLING";
			},
			{
				pokemonId: "NATU";
			},
			{
				form: "ORICORIO_POMPOM";
				pokemonId: "ORICORIO";
			},
			{
				form: "ORICORIO_PAU";
				pokemonId: "ORICORIO";
			},
			{
				form: "ORICORIO_SENSU";
				pokemonId: "ORICORIO";
			},
			{
				pokemonId: "RUFFLET";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFeatheredFriendsLarge = PhotoSetsSettingsProto<
	"PHOTO_SET_FEATHERED_FRIENDS_LARGE",
	{
		displayOrder: 40;
		frameColor: "UkiyoEuphoria";
		nameKey: "PHOTO_SET_FEATHERED_FRIENDS";
		pokemon: [
			{
				pokemonId: "HOOTHOOT";
			},
			{
				pokemonId: "PELIPPER";
			},
			{
				pokemonId: "HAWLUCHA";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFeelingFancy = PhotoSetsSettingsProto<
	"PHOTO_SET_FEELING_FANCY",
	{
		displayOrder: 40;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_FANCY";
		pokemon: [
			{
				form: "FURFROU_HEART";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_STAR";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_MATRON";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_LA_REINE";
				pokemonId: "FURFROU";
			},
			{
				pokemonId: "DELCATTY";
			},
			{
				pokemonId: "BEAUTIFLY";
			},
			{
				form: "VIVILLON_FANCY";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_ELEGANT";
				pokemonId: "VIVILLON";
			},
			{
				pokemonId: "JYNX";
			},
			{
				pokemonId: "FLAAFFY";
			},
			{
				pokemonId: "BELLOSSOM";
			},
			{
				pokemonId: "SWABLU";
			},
			{
				pokemonId: "GLAMEOW";
			},
			{
				form: "FURFROU_DANDY";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_DEBUTANTE";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_DIAMOND";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_KABUKI";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_NATURAL";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_PHARAOH";
				pokemonId: "FURFROU";
			},
			{
				form: "ORICORIO_BAILE";
				pokemonId: "ORICORIO";
			},
			{
				form: "ORICORIO_SENSU";
				pokemonId: "ORICORIO";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFurryFriends = PhotoSetsSettingsProto<
	"PHOTO_SET_FURRY_FRIENDS",
	{
		displayOrder: 40;
		frameColor: "Beachside";
		nameKey: "PHOTO_SET_FURRY_FRIENDS";
		pokemon: [
			{
				pokemonId: "SKITTY";
			},
			{
				pokemonId: "SPRIGATITO";
			},
			{
				pokemonId: "LITTEN";
			},
			{
				pokemonId: "PURRLOIN";
			},
			{
				pokemonId: "GLAMEOW";
			},
			{
				pokemonId: "SHINX";
			},
			{
				pokemonId: "MEOWSTIC";
			},
			{
				form: "MEOWSTIC_FEMALE";
				pokemonId: "MEOWSTIC";
			},
			{
				pokemonId: "PERRSERKER";
			},
			{
				pokemonId: "MEOWTH";
			},
			{
				form: "MEOWTH_ALOLA";
				pokemonId: "MEOWTH";
			},
			{
				form: "MEOWTH_GALARIAN";
				pokemonId: "MEOWTH";
			},
			{
				pokemonId: "ESPEON";
			},
			{
				pokemonId: "LUXIO";
			},
			{
				pokemonId: "LITLEO";
			},
			{
				pokemonId: "ESPURR";
			},
			{
				pokemonId: "TORRACAT";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoFurryFriendsLarge = PhotoSetsSettingsProto<
	"PHOTO_SET_FURRY_FRIENDS_LARGE",
	{
		displayOrder: 40;
		frameColor: "Beachside";
		nameKey: "PHOTO_SET_FURRY_FRIENDS_BIG";
		pokemon: [
			{
				form: "PYROAR_FEMALE";
				pokemonId: "PYROAR";
			},
			{
				pokemonId: "LIEPARD";
			},
			{
				pokemonId: "DELCATTY";
			},
			{
				form: "PERSIAN_ALOLA";
				pokemonId: "PERSIAN";
			},
			{
				pokemonId: "PERSIAN";
			},
			{
				pokemonId: "PURUGLY";
			},
			{
				pokemonId: "PYROAR";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoGracefulFlyers = PhotoSetsSettingsProto<
	"PHOTO_SET_GRACEFUL_FLYERS",
	{
		displayOrder: 40;
		frameColor: "UkiyoEuphoria";
		nameKey: "PHOTO_SET_GRACEFUL_FLYERS";
		pokemon: [
			{
				pokemonId: "BUTTERFREE";
			},
			{
				pokemonId: "BEAUTIFLY";
			},
			{
				pokemonId: "COMBEE";
			},
			{
				pokemonId: "RIBOMBEE";
			},
			{
				form: "VIVILLON_ARCHIPELAGO";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_CONTINENTAL";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_ELEGANT";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_FANCY";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_GARDEN";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_HIGH_PLAINS";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_ICY_SNOW";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_JUNGLE";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_MARINE";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_MEADOW";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_MODERN";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_MONSOON";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_OCEAN";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_POKEBALL";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_POLAR";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_RIVER";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_SANDSTORM";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_SAVANNA";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_SUN";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_TUNDRA";
				pokemonId: "VIVILLON";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoHisui = PhotoSetsSettingsProto<
	"PHOTO_SET_HISUI",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_HISUI";
		pokemon: [
			{
				pokemonId: "ROWLET";
			},
			{
				pokemonId: "CYNDAQUIL";
			},
			{
				pokemonId: "OSHAWOTT";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoHoenn = PhotoSetsSettingsProto<
	"PHOTO_SET_HOENN",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_HOENN";
		pokemon: [
			{
				pokemonId: "TREECKO";
			},
			{
				pokemonId: "TORCHIC";
			},
			{
				pokemonId: "MUDKIP";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoJohto = PhotoSetsSettingsProto<
	"PHOTO_SET_JOHTO",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_JOHTO";
		pokemon: [
			{
				pokemonId: "CHIKORITA";
			},
			{
				pokemonId: "CYNDAQUIL";
			},
			{
				pokemonId: "TOTODILE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoJustLovely = PhotoSetsSettingsProto<
	"PHOTO_SET_JUST_LOVELY",
	{
		displayOrder: 40;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_LOVELY";
		pokemon: [
			{
				pokemonId: "AROMATISSE";
			},
			{
				pokemonId: "SNUBBULL";
			},
			{
				pokemonId: "STUFFUL";
			},
			{
				pokemonId: "SMOOCHUM";
			},
			{
				pokemonId: "TOGEPI";
			},
			{
				pokemonId: "JIGGLYPUFF";
			},
			{
				form: "VIVILLON_ELEGANT";
				pokemonId: "VIVILLON";
			},
			{
				form: "VIVILLON_MEADOW";
				pokemonId: "VIVILLON";
			},
			{
				pokemonId: "LUVDISC";
			},
			{
				pokemonId: "SWIRLIX";
			},
			{
				pokemonId: "SLURPUFF";
			},
			{
				pokemonId: "SYLVEON";
			},
			{
				pokemonId: "CHANSEY";
			},
			{
				pokemonId: "TOGETIC";
			},
			{
				pokemonId: "ROSELIA";
			},
			{
				pokemonId: "CHERUBI";
			},
			{
				pokemonId: "MESPRIT";
			},
			{
				pokemonId: "MUNNA";
			},
			{
				pokemonId: "PYROAR";
			},
			{
				form: "PYROAR_FEMALE";
				pokemonId: "PYROAR";
			},
			{
				pokemonId: "SPRITZEE";
			},
			{
				pokemonId: "BOUNSWEET";
			},
			{
				pokemonId: "TAPU_LELE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoKalos = PhotoSetsSettingsProto<
	"PHOTO_SET_KALOS",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_KALOS";
		pokemon: [
			{
				pokemonId: "CHESPIN";
			},
			{
				pokemonId: "FENNEKIN";
			},
			{
				pokemonId: "FROAKIE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoKanto = PhotoSetsSettingsProto<
	"PHOTO_SET_KANTO",
	{
		displayOrder: 1;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_KANTO";
		pokemon: [
			{
				pokemonId: "BULBASAUR";
			},
			{
				pokemonId: "CHARMANDER";
			},
			{
				pokemonId: "SQUIRTLE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoLittleChonkers = PhotoSetsSettingsProto<
	"PHOTO_SET_LITTLE_CHONKERS",
	{
		displayOrder: 40;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_LITTLE_CHONKERS";
		pokemon: [
			{
				pokemonId: "DARUMAKA";
			},
			{
				pokemonId: "SLURPUFF";
			},
			{
				pokemonId: "BIDOOF";
			},
			{
				pokemonId: "MUNCHLAX";
			},
			{
				pokemonId: "VULLABY";
			},
			{
				pokemonId: "QUILLADIN";
			},
			{
				pokemonId: "FUECOCO";
			},
			{
				pokemonId: "LECHONK";
			},
			{
				pokemonId: "TOGEDEMARU";
			},
			{
				pokemonId: "PALPITOAD";
			},
			{
				form: "DARUMAKA_GALARIAN";
				pokemonId: "DARUMAKA";
			},
			{
				pokemonId: "HIPPOPOTAS";
			},
			{
				pokemonId: "SPHEAL";
			},
			{
				pokemonId: "SWINUB";
			},
			{
				pokemonId: "GULPIN";
			},
			{
				pokemonId: "BULBASAUR";
			},
			{
				pokemonId: "PSYDUCK";
			},
			{
				pokemonId: "PRIMEAPE";
			},
			{
				pokemonId: "POLIWHIRL";
			},
			{
				pokemonId: "SHELGON";
			},
			{
				pokemonId: "PURUGLY";
			},
			{
				pokemonId: "MUNNA";
			},
			{
				pokemonId: "CHARJABUG";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoMountainPass = PhotoSetsSettingsProto<
	"PHOTO_SET_MOUNTAIN_PASS",
	{
		displayOrder: 40;
		frameColor: "RainyDay";
		nameKey: "PHOTO_SET_MOUNTAIN";
		pokemon: [
			{
				form: "SANDSHREW_ALOLA";
				pokemonId: "SANDSHREW";
			},
			{
				form: "VULPIX_ALOLA";
				pokemonId: "VULPIX";
			},
			{
				pokemonId: "SWINUB";
			},
			{
				pokemonId: "SNORUNT";
			},
			{
				pokemonId: "SNOVER";
			},
			{
				pokemonId: "GLACEON";
			},
			{
				pokemonId: "CUBCHOO";
			},
			{
				pokemonId: "BERGMITE";
			},
			{
				pokemonId: "VANILLITE";
			},
			{
				pokemonId: "SNEASEL";
			},
			{
				form: "CASTFORM_SNOWY";
				pokemonId: "CASTFORM";
			},
			{
				pokemonId: "VANILLISH";
			},
			{
				pokemonId: "CRYOGONAL";
			},
			{
				pokemonId: "CRABOMINABLE";
			},
			{
				pokemonId: "FRIGIBAX";
			},
			{
				pokemonId: "ARCTIBAX";
			},
			{
				form: "SANDSLASH_ALOLA";
				pokemonId: "SANDSLASH";
			},
			{
				form: "NINETALES_ALOLA";
				pokemonId: "NINETALES";
			},
			{
				pokemonId: "KABUTO";
			},
			{
				pokemonId: "MAMOSWINE";
			},
			{
				pokemonId: "FROSLASS";
			},
			{
				pokemonId: "VANILLUXE";
			},
			{
				pokemonId: "BEARTIC";
			},
			{
				pokemonId: "GLALIE";
			},
			{
				pokemonId: "AVALUGG";
			},
			{
				form: "AVALUGG_HISUIAN";
				pokemonId: "AVALUGG";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoMuseumFossils = PhotoSetsSettingsProto<
	"PHOTO_SET_MUSEUM_FOSSILS",
	{
		displayOrder: 2572;
		frameColor: "Museum";
		nameKey: "PHOTO_SET_MUSEUM_FOSSILS";
		pokemon: [
			{
				pokemonId: "AMAURA";
			},
			{
				pokemonId: "TYRUNT";
			},
			{
				pokemonId: "SHIELDON";
			},
			{
				pokemonId: "CRANIDOS";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoPaldea = PhotoSetsSettingsProto<
	"PHOTO_SET_PALDEA",
	{
		displayOrder: 286;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_PALDEA";
		pokemon: [
			{
				pokemonId: "SPRIGATITO";
			},
			{
				pokemonId: "FUECOCO";
			},
			{
				pokemonId: "QUAXLY";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoPlayfulPalsLarge = PhotoSetsSettingsProto<
	"PHOTO_SET_PLAYFUL_PALS_LARGE",
	{
		displayOrder: 40;
		frameColor: "Safarizone";
		nameKey: "PHOTO_SET_PLAYFUL_PALS_BIG";
		pokemon: [
			{
				form: "GROWLITHE_HISUIAN";
				pokemonId: "GROWLITHE";
			},
			{
				pokemonId: "HOUNDOUR";
			},
			{
				pokemonId: "POOCHYENA";
			},
			{
				pokemonId: "GREAVARD";
			},
			{
				pokemonId: "GROWLITHE";
			},
			{
				pokemonId: "LILLIPUP";
			},
			{
				pokemonId: "ROCKRUFF";
			},
			{
				pokemonId: "SNUBBULL";
			},
			{
				form: "FURFROU_DANDY";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_DEBUTANTE";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_DIAMOND";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_HEART";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_KABUKI";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_LA_REINE";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_MATRON";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_NATURAL";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_PHARAOH";
				pokemonId: "FURFROU";
			},
			{
				form: "FURFROU_STAR";
				pokemonId: "FURFROU";
			},
			{
				pokemonId: "SMEARGLE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoRelaxingGarden = PhotoSetsSettingsProto<
	"PHOTO_SET_RELAXING_GARDEN",
	{
		displayOrder: 40;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_GARDEN";
		pokemon: [
			{
				pokemonId: "BELLOSSOM";
			},
			{
				pokemonId: "SEEDOT";
			},
			{
				pokemonId: "ROWLET";
			},
			{
				pokemonId: "SUNKERN";
			},
			{
				pokemonId: "HOPPIP";
			},
			{
				pokemonId: "ROSELIA";
			},
			{
				pokemonId: "SNIVY";
			},
			{
				pokemonId: "ODDISH";
			},
			{
				pokemonId: "BELLSPROUT";
			},
			{
				pokemonId: "PANSAGE";
			},
			{
				pokemonId: "PETILIL";
			},
			{
				pokemonId: "DOLLIV";
			},
			{
				pokemonId: "BULBASAUR";
			},
			{
				pokemonId: "CATERPIE";
			},
			{
				pokemonId: "METAPOD";
			},
			{
				pokemonId: "WEEDLE";
			},
			{
				pokemonId: "KAKUNA";
			},
			{
				pokemonId: "BEEDRILL";
			},
			{
				pokemonId: "DIGLETT";
			},
			{
				pokemonId: "TANGELA";
			},
			{
				pokemonId: "CHIKORITA";
			},
			{
				pokemonId: "SPINARAK";
			},
			{
				pokemonId: "SUNFLORA";
			},
			{
				pokemonId: "CELEBI";
			},
			{
				pokemonId: "TREECKO";
			},
			{
				pokemonId: "LOTAD";
			},
			{
				form: "WORMADAM_PLANT";
				pokemonId: "WORMADAM";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSafariTrek = PhotoSetsSettingsProto<
	"PHOTO_SET_SAFARI_TREK",
	{
		displayOrder: 40;
		frameColor: "Safarizone";
		nameKey: "PHOTO_SET_SAFARI";
		pokemon: [
			{
				pokemonId: "ZEBSTRIKA";
			},
			{
				pokemonId: "KROOKODILE";
			},
			{
				pokemonId: "PYROAR";
			},
			{
				form: "PYROAR_FEMALE";
				pokemonId: "PYROAR";
			},
			{
				pokemonId: "HIPPOWDON";
			},
			{
				pokemonId: "DODUO";
			},
			{
				pokemonId: "DODRIO";
			},
			{
				pokemonId: "RHYHORN";
			},
			{
				pokemonId: "RHYDON";
			},
			{
				pokemonId: "GIRAFARIG";
			},
			{
				pokemonId: "PHANPY";
			},
			{
				pokemonId: "DONPHAN";
			},
			{
				pokemonId: "HIPPOPOTAS";
			},
			{
				pokemonId: "BLITZLE";
			},
			{
				pokemonId: "SANDILE";
			},
			{
				pokemonId: "KROKOROK";
			},
			{
				pokemonId: "LITLEO";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSandyShoreline = PhotoSetsSettingsProto<
	"PHOTO_SET_SANDY_SHORELINE",
	{
		displayOrder: 40;
		frameColor: "Beachside";
		nameKey: "PHOTO_SET_BEACH";
		pokemon: [
			{
				form: "RAICHU_ALOLA";
				pokemonId: "RAICHU";
			},
			{
				form: "GASTRODON_EAST_SEA";
				pokemonId: "GASTRODON";
			},
			{
				pokemonId: "BRIONNE";
			},
			{
				pokemonId: "SANDYGAST";
			},
			{
				pokemonId: "WINGULL";
			},
			{
				pokemonId: "CRABRAWLER";
			},
			{
				pokemonId: "KINGLER";
			},
			{
				pokemonId: "PALOSSAND";
			},
			{
				form: "GASTRODON_WEST_SEA";
				pokemonId: "GASTRODON";
			},
			{
				pokemonId: "PELIPPER";
			},
			{
				pokemonId: "STARYU";
			},
			{
				pokemonId: "SHELLDER";
			},
			{
				pokemonId: "CLOYSTER";
			},
			{
				pokemonId: "KRABBY";
			},
			{
				pokemonId: "STARMIE";
			},
			{
				form: "SHELLOS_EAST_SEA";
				pokemonId: "SHELLOS";
			},
			{
				form: "SHELLOS_WEST_SEA";
				pokemonId: "SHELLOS";
			},
			{
				pokemonId: "BINACLE";
			},
			{
				pokemonId: "BARBARACLE";
			},
			{
				pokemonId: "POPPLIO";
			},
			{
				pokemonId: "PRIMARINA";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoShadowsOfNight = PhotoSetsSettingsProto<
	"PHOTO_SET_SHADOWS_OF_NIGHT",
	{
		displayOrder: 40;
		frameColor: "Nightfall";
		nameKey: "PHOTO_SET_NIGHT";
		pokemon: [
			{
				pokemonId: "NOIBAT";
			},
			{
				pokemonId: "MURKROW";
			},
			{
				pokemonId: "HOUNDOUR";
			},
			{
				pokemonId: "HOOTHOOT";
			},
			{
				pokemonId: "ZUBAT";
			},
			{
				pokemonId: "DUSKULL";
			},
			{
				pokemonId: "UMBREON";
			},
			{
				pokemonId: "LUNATONE";
			},
			{
				pokemonId: "WOOBAT";
			},
			{
				pokemonId: "LITWICK";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSinnoh = PhotoSetsSettingsProto<
	"PHOTO_SET_SINNOH",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_SINNOH";
		pokemon: [
			{
				pokemonId: "TURTWIG";
			},
			{
				pokemonId: "CHIMCHAR";
			},
			{
				pokemonId: "PIPLUP";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallAndCute = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_AND_CUTE",
	{
		displayOrder: 40;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_SMALL_AND_CUTE";
		pokemon: [
			{
				pokemonId: "JIGGLYPUFF";
			},
			{
				pokemonId: "TOGEPI";
			},
			{
				pokemonId: "PACHIRISU";
			},
			{
				pokemonId: "EMOLGA";
			},
			{
				pokemonId: "BOUNSWEET";
			},
			{
				pokemonId: "PAWMI";
			},
			{
				pokemonId: "FENNEKIN";
			},
			{
				pokemonId: "MINCCINO";
			},
			{
				pokemonId: "BUNEARY";
			},
			{
				pokemonId: "AZURILL";
			},
			{
				pokemonId: "BELLOSSOM";
			},
			{
				pokemonId: "MEW";
			},
			{
				pokemonId: "CLEFFA";
			},
			{
				pokemonId: "VULPIX";
			},
			{
				form: "VULPIX_ALOLA";
				pokemonId: "VULPIX";
			},
			{
				form: "FLABEBE_RED";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_BLUE";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_ORANGE";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_YELLOW";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_WHITE";
				pokemonId: "FLABEBE";
			},
			{
				pokemonId: "CUTIEFLY";
			},
			{
				pokemonId: "STUFFUL";
			},
			{
				pokemonId: "SMOLIV";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallCutePokemon = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_CUTE_POKEMON",
	{
		displayOrder: 10;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_SMALL_CUTE_POKEMON";
		pokemon: [
			{
				pokemonId: "PICHU";
			},
			{
				pokemonId: "HAPPINY";
			},
			{
				pokemonId: "TOGEPI";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallCutePokemonPikachuAndEevee = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE",
	{
		displayOrder: 522;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE";
		pokemon: [
			{
				pokemonId: "PIKACHU";
			},
			{
				pokemonId: "EEVEE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallCutePokemonPink = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_CUTE_POKEMON_PINK",
	{
		displayOrder: 11;
		frameColor: "PinkPals";
		nameKey: "PHOTO_SET_SMALL_CUTE_POKEMON_PINK";
		pokemon: [
			{
				pokemonId: "CLEFFA";
			},
			{
				pokemonId: "IGGLYBUFF";
			},
			{
				pokemonId: "HAPPINY";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallFlowerPokemon = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_FLOWER_POKEMON",
	{
		displayOrder: 1803;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_SMALL_FLOWER_POKEMON";
		pokemon: [
			{
				pokemonId: "BELLOSSOM";
			},
			{
				pokemonId: "SUNKERN";
			},
			{
				pokemonId: "ROSELIA";
			},
			{
				pokemonId: "ODDISH";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallFlowerPokemonMedium = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM",
	{
		displayOrder: 11;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM";
		pokemon: [
			{
				pokemonId: "LILLIGANT";
			},
			{
				pokemonId: "SUNFLORA";
			},
			{
				pokemonId: "ROSERADE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallFlowerPokemonSeeds = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS",
	{
		displayOrder: 11;
		frameColor: "GreenShoots";
		nameKey: "PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS";
		pokemon: [
			{
				pokemonId: "PETILIL";
			},
			{
				pokemonId: "SMOLIV";
			},
			{
				pokemonId: "BUDEW";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSmallWaterPokemon = PhotoSetsSettingsProto<
	"PHOTO_SET_SMALL_WATER_POKEMON",
	{
		displayOrder: 12;
		frameColor: "UkiyoEuphoria";
		nameKey: "PHOTO_SET_SMALL_WATER_POKEMON";
		pokemon: [
			{
				pokemonId: "PIPLUP";
			},
			{
				pokemonId: "HORSEA";
			},
			{
				pokemonId: "POPPLIO";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSpringVibes = PhotoSetsSettingsProto<
	"PHOTO_SET_SPRING_VIBES",
	{
		displayOrder: 808;
		frameColor: "FloralFriends";
		nameKey: "PHOTO_SET_SPRING_VIBES";
		pokemon: [
			{
				pokemonId: "PETILIL";
			},
			{
				pokemonId: "MARILL";
			},
			{
				form: "DEERLING_SPRING";
				pokemonId: "DEERLING";
			},
			{
				pokemonId: "WYNAUT";
			},
			{
				pokemonId: "BIDOOF";
			},
			{
				pokemonId: "BELLSPROUT";
			},
			{
				pokemonId: "COMBEE";
			},
			{
				pokemonId: "SEWADDLE";
			},
			{
				pokemonId: "LEDYBA";
			},
			{
				pokemonId: "SUDOWOODO";
			},
			{
				form: "CASTFORM_RAINY";
				pokemonId: "CASTFORM";
			},
			{
				pokemonId: "BUDEW";
			},
			{
				pokemonId: "CHERUBI";
			},
			{
				form: "SAWSBUCK_SPRING";
				pokemonId: "SAWSBUCK";
			},
			{
				form: "FLABEBE_RED";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_WHITE";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLOETTE_BLUE";
				pokemonId: "FLOETTE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoStarters = PhotoSetsSettingsProto<
	"PHOTO_SET_STARTERS",
	{
		displayOrder: 10240;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_STARTERS";
		pokemon: [
			{
				pokemonId: "BULBASAUR";
			},
			{
				pokemonId: "CHARMANDER";
			},
			{
				pokemonId: "SQUIRTLE";
			},
			{
				pokemonId: "CHIKORITA";
			},
			{
				pokemonId: "CYNDAQUIL";
			},
			{
				pokemonId: "TOTODILE";
			},
			{
				pokemonId: "TREECKO";
			},
			{
				pokemonId: "TORCHIC";
			},
			{
				pokemonId: "MUDKIP";
			},
			{
				pokemonId: "TURTWIG";
			},
			{
				pokemonId: "CHIMCHAR";
			},
			{
				pokemonId: "PIPLUP";
			},
			{
				pokemonId: "SNIVY";
			},
			{
				pokemonId: "TEPIG";
			},
			{
				pokemonId: "OSHAWOTT";
			},
			{
				pokemonId: "CHESPIN";
			},
			{
				pokemonId: "FENNEKIN";
			},
			{
				pokemonId: "FROAKIE";
			},
			{
				pokemonId: "ROWLET";
			},
			{
				pokemonId: "LITTEN";
			},
			{
				pokemonId: "POPPLIO";
			},
			{
				pokemonId: "SPRIGATITO";
			},
			{
				pokemonId: "FUECOCO";
			},
			{
				pokemonId: "QUAXLY";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoSummerVibes = PhotoSetsSettingsProto<
	"PHOTO_SET_SUMMER_VIBES",
	{
		displayOrder: 40;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_SUMMER_VIBES";
		pokemon: [
			{
				form: "DEERLING_SUMMER";
				pokemonId: "DEERLING";
			},
			{
				pokemonId: "OSHAWOTT";
			},
			{
				pokemonId: "SANDSHREW";
			},
			{
				pokemonId: "SUNFLORA";
			},
			{
				pokemonId: "KRABBY";
			},
			{
				pokemonId: "PANSAGE";
			},
			{
				pokemonId: "POLITOED";
			},
			{
				pokemonId: "SANDSLASH";
			},
			{
				pokemonId: "CHIMECHO";
			},
			{
				form: "SAWSBUCK_SUMMER";
				pokemonId: "SAWSBUCK";
			},
			{
				pokemonId: "EMOLGA";
			},
			{
				pokemonId: "DEDENNE";
			},
			{
				pokemonId: "PIKIPEK";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoTinyTikes = PhotoSetsSettingsProto<
	"PHOTO_SET_TINY_TIKES",
	{
		displayOrder: 40;
		frameColor: "TinyBuddies";
		nameKey: "PHOTO_SET_TINY_TIKES";
		pokemon: [
			{
				pokemonId: "PICHU";
			},
			{
				pokemonId: "PIKIPEK";
			},
			{
				pokemonId: "CUTIEFLY";
			},
			{
				pokemonId: "SMOLIV";
			},
			{
				pokemonId: "AZURILL";
			},
			{
				pokemonId: "COSMOEM";
			},
			{
				pokemonId: "COSMOG";
			},
			{
				pokemonId: "GIMMIGHOUL";
			},
			{
				pokemonId: "SPRITZEE";
			},
			{
				form: "FLABEBE_RED";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_BLUE";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_ORANGE";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_YELLOW";
				pokemonId: "FLABEBE";
			},
			{
				form: "FLABEBE_WHITE";
				pokemonId: "FLABEBE";
			},
			{
				pokemonId: "JOLTIK";
			},
			{
				pokemonId: "NATU";
			},
			{
				pokemonId: "DIGLETT";
			},
			{
				form: "DIGLETT_ALOLA";
				pokemonId: "DIGLETT";
			},
			{
				pokemonId: "MAGNEMITE";
			},
			{
				pokemonId: "WEEDLE";
			},
			{
				pokemonId: "WURMPLE";
			},
			{
				form: "BURMY_PLANT";
				pokemonId: "BURMY";
			},
			{
				form: "BURMY_SANDY";
				pokemonId: "BURMY";
			},
			{
				form: "BURMY_TRASH";
				pokemonId: "BURMY";
			},
			{
				pokemonId: "TYNAMO";
			},
			{
				pokemonId: "COMFEY";
			},
			{
				pokemonId: "NYMBLE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoUnova = PhotoSetsSettingsProto<
	"PHOTO_SET_UNOVA",
	{
		displayOrder: 30;
		frameColor: "SummerVibes";
		nameKey: "PHOTO_SET_UNOVA";
		pokemon: [
			{
				pokemonId: "SNIVY";
			},
			{
				pokemonId: "TEPIG";
			},
			{
				pokemonId: "OSHAWOTT";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoWingsPokemon = PhotoSetsSettingsProto<
	"PHOTO_SET_WINGS_POKEMON",
	{
		displayOrder: 12;
		frameColor: "BusyBugs";
		nameKey: "PHOTO_SET_WINGS_POKEMON";
		pokemon: [
			{
				pokemonId: "COMBEE";
			},
			{
				pokemonId: "LEDYBA";
			},
			{
				pokemonId: "VOLBEAT";
			},
			{
				pokemonId: "ILLUMISE";
			},
		];
	}
>;
export type PhotoSetsSettingsProtoWinterVibes = PhotoSetsSettingsProto<
	"PHOTO_SET_WINTER_VIBES",
	{
		displayOrder: 40;
		frameColor: "RainyDay";
		nameKey: "PHOTO_SET_WINTER_VIBES";
		pokemon: [
			{
				form: "VULPIX_ALOLA";
				pokemonId: "VULPIX";
			},
			{
				form: "SANDSHREW_ALOLA";
				pokemonId: "SANDSHREW";
			},
			{
				pokemonId: "VANILLITE";
			},
			{
				pokemonId: "PACHIRISU";
			},
			{
				pokemonId: "PIPLUP";
			},
			{
				pokemonId: "SNORUNT";
			},
			{
				form: "DEERLING_WINTER";
				pokemonId: "DEERLING";
			},
			{
				pokemonId: "CUBCHOO";
			},
			{
				pokemonId: "SEEL";
			},
			{
				form: "SANDSLASH_ALOLA";
				pokemonId: "SANDSLASH";
			},
			{
				form: "NINETALES_ALOLA";
				pokemonId: "NINETALES";
			},
			{
				pokemonId: "SWINUB";
			},
			{
				form: "CASTFORM_SNOWY";
				pokemonId: "CASTFORM";
			},
			{
				pokemonId: "SNOVER";
			},
			{
				form: "SAWSBUCK_WINTER";
				pokemonId: "SAWSBUCK";
			},
			{
				form: "CUBCHOO_WINTER_2020";
				pokemonId: "CUBCHOO";
			},
			{
				pokemonId: "BERGMITE";
			},
		];
	}
>;

export type PhotoSetsSettingsProtoMasterfileEntry =
	| PhotoSetsSettingsProtoAlola
	| PhotoSetsSettingsProtoAncientFossils
	| PhotoSetsSettingsProtoBattlePokemon
	| PhotoSetsSettingsProtoBundleOfJoy
	| PhotoSetsSettingsProtoBusyCity
	| PhotoSetsSettingsProtoClawedCuties
	| PhotoSetsSettingsProtoCutePokemonPink
	| PhotoSetsSettingsProtoFallVibes
	| PhotoSetsSettingsProtoFeatheredFriends
	| PhotoSetsSettingsProtoFeatheredFriendsLarge
	| PhotoSetsSettingsProtoFeelingFancy
	| PhotoSetsSettingsProtoFurryFriends
	| PhotoSetsSettingsProtoFurryFriendsLarge
	| PhotoSetsSettingsProtoGracefulFlyers
	| PhotoSetsSettingsProtoHisui
	| PhotoSetsSettingsProtoHoenn
	| PhotoSetsSettingsProtoJohto
	| PhotoSetsSettingsProtoJustLovely
	| PhotoSetsSettingsProtoKalos
	| PhotoSetsSettingsProtoKanto
	| PhotoSetsSettingsProtoLittleChonkers
	| PhotoSetsSettingsProtoMountainPass
	| PhotoSetsSettingsProtoMuseumFossils
	| PhotoSetsSettingsProtoPaldea
	| PhotoSetsSettingsProtoPlayfulPalsLarge
	| PhotoSetsSettingsProtoRelaxingGarden
	| PhotoSetsSettingsProtoSafariTrek
	| PhotoSetsSettingsProtoSandyShoreline
	| PhotoSetsSettingsProtoShadowsOfNight
	| PhotoSetsSettingsProtoSinnoh
	| PhotoSetsSettingsProtoSmallAndCute
	| PhotoSetsSettingsProtoSmallCutePokemon
	| PhotoSetsSettingsProtoSmallCutePokemonPikachuAndEevee
	| PhotoSetsSettingsProtoSmallCutePokemonPink
	| PhotoSetsSettingsProtoSmallFlowerPokemon
	| PhotoSetsSettingsProtoSmallFlowerPokemonMedium
	| PhotoSetsSettingsProtoSmallFlowerPokemonSeeds
	| PhotoSetsSettingsProtoSmallWaterPokemon
	| PhotoSetsSettingsProtoSpringVibes
	| PhotoSetsSettingsProtoStarters
	| PhotoSetsSettingsProtoSummerVibes
	| PhotoSetsSettingsProtoTinyTikes
	| PhotoSetsSettingsProtoUnova
	| PhotoSetsSettingsProtoWingsPokemon
	| PhotoSetsSettingsProtoWinterVibes;

export type PhotoSetsSettingsProtoTemplateID = PhotoSetsSettingsProtoMasterfileEntry["templateId"];

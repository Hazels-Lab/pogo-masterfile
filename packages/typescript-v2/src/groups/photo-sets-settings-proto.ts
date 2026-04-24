export interface PhotoSetsSettingsProto<T extends string> {
	templateId: T;
	data: PhotoSetsSettingsProtoData<T>;
}

export interface PhotoSetsSettingsProtoData<T extends string> {
	templateId: T;
	photoSetsSettingsProto: {
		displayOrder: 1 | 10 | 11 | 12 | 30 | 40 | 286 | 522 | 779 | 808 | 1803 | 2572 | 10240;
		frameColor: "Beachside" | "BusyBugs" | "Fighting" | "FloralFriends" | "GreenShoots" | "Halloween" | "Museum" | "Nightfall" | "PinkPals" | "RainyDay" | "Safarizone" | "SummerVibes" | "TinyBuddies" | "UkiyoEuphoria";
		minimumPokemon: 1;
		nameKey: "PHOTO_SET_ALOLA" | "PHOTO_SET_BABIES" | "PHOTO_SET_BATTLE_POKEMON" | "PHOTO_SET_BEACH" | "PHOTO_SET_CITY" | "PHOTO_SET_CLAWED_CUTIES" | "PHOTO_SET_CUTE_POKEMON_PINK" | "PHOTO_SET_FALL_VIBES" | "PHOTO_SET_FANCY" | "PHOTO_SET_FEATHERED_FRIENDS" | "PHOTO_SET_FEATHERED_FRIENDS_SMALL" | "PHOTO_SET_FOSSIL" | "PHOTO_SET_FURRY_FRIENDS" | "PHOTO_SET_FURRY_FRIENDS_BIG" | "PHOTO_SET_GARDEN" | "PHOTO_SET_GRACEFUL_FLYERS" | "PHOTO_SET_HISUI" | "PHOTO_SET_HOENN" | "PHOTO_SET_JOHTO" | "PHOTO_SET_KALOS" | "PHOTO_SET_KANTO" | "PHOTO_SET_LITTLE_CHONKERS" | "PHOTO_SET_LOVELY" | "PHOTO_SET_MOUNTAIN" | "PHOTO_SET_MUSEUM_FOSSILS" | "PHOTO_SET_NIGHT" | "PHOTO_SET_PALDEA" | "PHOTO_SET_PLAYFUL_PALS_BIG" | "PHOTO_SET_SAFARI" | "PHOTO_SET_SINNOH" | "PHOTO_SET_SMALL_AND_CUTE" | "PHOTO_SET_SMALL_CUTE_POKEMON" | "PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE" | "PHOTO_SET_SMALL_CUTE_POKEMON_PINK" | "PHOTO_SET_SMALL_FLOWER_POKEMON" | "PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM" | "PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS" | "PHOTO_SET_SMALL_WATER_POKEMON" | "PHOTO_SET_SPRING_VIBES" | "PHOTO_SET_STARTERS" | "PHOTO_SET_SUMMER_VIBES" | "PHOTO_SET_TINY_TIKES" | "PHOTO_SET_UNOVA" | "PHOTO_SET_WINGS_POKEMON" | "PHOTO_SET_WINTER_VIBES";
		pokemon: Array<
			{
				form?: "AERODACTYL_SUMMER_2023" | "AVALUGG_HISUIAN" | "BURMY_PLANT" | "BURMY_SANDY" | "BURMY_TRASH" | "CASTFORM_RAINY" | "CASTFORM_SNOWY" | "CUBCHOO_WINTER_2020" | "DARUMAKA_GALARIAN" | "DEERLING_AUTUMN" | "DEERLING_SPRING" | "DEERLING_SUMMER" | "DEERLING_WINTER" | "DIGLETT_ALOLA" | "FLABEBE_BLUE" | "FLABEBE_ORANGE" | "FLABEBE_RED" | "FLABEBE_WHITE" | "FLABEBE_YELLOW" | "FLOETTE_BLUE" | "FURFROU_DANDY" | "FURFROU_DEBUTANTE" | "FURFROU_DIAMOND" | "FURFROU_HEART" | "FURFROU_KABUKI" | "FURFROU_LA_REINE" | "FURFROU_MATRON" | "FURFROU_NATURAL" | "FURFROU_PHARAOH" | "FURFROU_STAR" | "GASTRODON_EAST_SEA" | "GASTRODON_WEST_SEA" | "GRIMER_ALOLA" | "GROWLITHE_HISUIAN" | "MEOWSTIC_FEMALE" | "MEOWTH_ALOLA" | "MEOWTH_GALARIAN" | "MUK_ALOLA" | "NINETALES_ALOLA" | "ORICORIO_BAILE" | "ORICORIO_PAU" | "ORICORIO_POMPOM" | "ORICORIO_SENSU" | "PERSIAN_ALOLA" | "PYROAR_FEMALE" | "RAICHU_ALOLA" | "SANDSHREW_ALOLA" | "SANDSLASH_ALOLA" | "SAWSBUCK_AUTUMN" | "SAWSBUCK_SPRING" | "SAWSBUCK_SUMMER" | "SAWSBUCK_WINTER" | "SHELLOS_EAST_SEA" | "SHELLOS_WEST_SEA" | "SNEASEL_HISUIAN" | "VIVILLON_ARCHIPELAGO" | "VIVILLON_CONTINENTAL" | "VIVILLON_ELEGANT" | "VIVILLON_FANCY" | "VIVILLON_GARDEN" | "VIVILLON_HIGH_PLAINS" | "VIVILLON_ICY_SNOW" | "VIVILLON_JUNGLE" | "VIVILLON_MARINE" | "VIVILLON_MEADOW" | "VIVILLON_MODERN" | "VIVILLON_MONSOON" | "VIVILLON_OCEAN" | "VIVILLON_POKEBALL" | "VIVILLON_POLAR" | "VIVILLON_RIVER" | "VIVILLON_SANDSTORM" | "VIVILLON_SAVANNA" | "VIVILLON_SUN" | "VIVILLON_TUNDRA" | "VULPIX_ALOLA" | "WEEZING_GALARIAN" | "WORMADAM_PLANT";
				pokemonId: "AERODACTYL" | "AMAURA" | "ANORITH" | "ARCHEN" | "ARCHEOPS" | "ARCTIBAX" | "ARMALDO" | "AROMATISSE" | "AUDINO" | "AVALUGG" | "AZURILL" | "BARBARACLE" | "BASTIODON" | "BEARTIC" | "BEAUTIFLY" | "BEEDRILL" | "BELLOSSOM" | "BELLSPROUT" | "BERGMITE" | "BIDOOF" | "BINACLE" | "BLITZLE" | "BONSLY" | "BOUNSWEET" | "BRIONNE" | "BUDEW" | "BULBASAUR" | "BUNEARY" | "BURMY" | "BUTTERFREE" | "CARRACOSTA" | "CASTFORM" | "CATERPIE" | "CELEBI" | "CHANSEY" | "CHARJABUG" | "CHARMANDER" | "CHATOT" | "CHERUBI" | "CHESPIN" | "CHIKORITA" | "CHIMCHAR" | "CHIMECHO" | "CHINGLING" | "CLEFAIRY" | "CLEFFA" | "CLOYSTER" | "COMBEE" | "COMFEY" | "COSMOEM" | "COSMOG" | "CRABOMINABLE" | "CRABRAWLER" | "CRADILY" | "CRANIDOS" | "CRYOGONAL" | "CUBCHOO" | "CUTIEFLY" | "CYNDAQUIL" | "DARUMAKA" | "DEDENNE" | "DEERLING" | "DELCATTY" | "DIGLETT" | "DODRIO" | "DODUO" | "DOLLIV" | "DONPHAN" | "DUCKLETT" | "DUSKULL" | "EEVEE" | "ELECTABUZZ" | "ELEKID" | "EMOLGA" | "ESPEON" | "ESPURR" | "FENNEKIN" | "FLAAFFY" | "FLABEBE" | "FLETCHLING" | "FLOETTE" | "FOONGUS" | "FRIGIBAX" | "FROAKIE" | "FROSLASS" | "FUECOCO" | "FURFROU" | "GASTLY" | "GASTRODON" | "GIMMIGHOUL" | "GIRAFARIG" | "GLACEON" | "GLALIE" | "GLAMEOW" | "GREAVARD" | "GRIMER" | "GROWLITHE" | "GULPIN" | "HAPPINY" | "HAUNTER" | "HAWLUCHA" | "HIPPOPOTAS" | "HIPPOWDON" | "HITMONCHAN" | "HITMONLEE" | "HITMONTOP" | "HOOTHOOT" | "HOPPIP" | "HORSEA" | "HOUNDOUR" | "IGGLYBUFF" | "ILLUMISE" | "JIGGLYPUFF" | "JOLTEON" | "JOLTIK" | "JYNX" | "KABUTO" | "KABUTOPS" | "KAKUNA" | "KINGLER" | "KOFFING" | "KRABBY" | "KROKOROK" | "KROOKODILE" | "LECHONK" | "LEDYBA" | "LIEPARD" | "LILEEP" | "LILLIGANT" | "LILLIPUP" | "LITLEO" | "LITTEN" | "LITWICK" | "LOTAD" | "LUNATONE" | "LUVDISC" | "LUXIO" | "MAGBY" | "MAGMAR" | "MAGNEMITE" | "MAMOSWINE" | "MANTYKE" | "MARILL" | "MEOWSTIC" | "MEOWTH" | "MESPRIT" | "METAPOD" | "MEW" | "MIME_JR" | "MINCCINO" | "MUDKIP" | "MUK" | "MUNCHLAX" | "MUNNA" | "MURKROW" | "NATU" | "NINETALES" | "NOIBAT" | "NYMBLE" | "ODDISH" | "OMANYTE" | "OMASTAR" | "ORICORIO" | "OSHAWOTT" | "PACHIRISU" | "PALOSSAND" | "PALPITOAD" | "PANSAGE" | "PARAS" | "PAWMI" | "PELIPPER" | "PERRSERKER" | "PERSIAN" | "PETILIL" | "PHANPY" | "PHANTUMP" | "PICHU" | "PIDGEOTTO" | "PIDGEY" | "PIDOVE" | "PIKACHU" | "PIKIPEK" | "PIPLUP" | "POLITOED" | "POLIWHIRL" | "POOCHYENA" | "POPPLIO" | "PORYGON" | "PRIMARINA" | "PRIMEAPE" | "PSYDUCK" | "PURRLOIN" | "PURUGLY" | "PYROAR" | "QUAXLY" | "QUILLADIN" | "RAICHU" | "RAMPARDOS" | "RATICATE" | "RHYDON" | "RHYHORN" | "RIBOMBEE" | "RIOLU" | "ROCKRUFF" | "ROSELIA" | "ROSERADE" | "ROWLET" | "RUFFLET" | "SANDILE" | "SANDSHREW" | "SANDSLASH" | "SANDYGAST" | "SAWSBUCK" | "SEEDOT" | "SEEL" | "SEWADDLE" | "SHELGON" | "SHELLDER" | "SHELLOS" | "SHIELDON" | "SHINX" | "SKITTY" | "SKWOVET" | "SLURPUFF" | "SMEARGLE" | "SMOLIV" | "SMOOCHUM" | "SNEASEL" | "SNIVY" | "SNORLAX" | "SNORUNT" | "SNOVER" | "SNUBBULL" | "SPEAROW" | "SPHEAL" | "SPINARAK" | "SPRIGATITO" | "SPRITZEE" | "SQUIRTLE" | "STARLY" | "STARMIE" | "STARYU" | "STUFFUL" | "SUDOWOODO" | "SUNFLORA" | "SUNKERN" | "SWABLU" | "SWINUB" | "SWIRLIX" | "SYLVEON" | "TANGELA" | "TAPU_LELE" | "TEPIG" | "TIRTOUGA" | "TOGEDEMARU" | "TOGEPI" | "TOGETIC" | "TORCHIC" | "TORRACAT" | "TOTODILE" | "TREECKO" | "TURTWIG" | "TYNAMO" | "TYRANTRUM" | "TYROGUE" | "TYRUNT" | "UMBREON" | "VANILLISH" | "VANILLITE" | "VANILLUXE" | "VIVILLON" | "VOLBEAT" | "VOLTORB" | "VULLABY" | "VULPIX" | "WEEDLE" | "WEEZING" | "WIGGLYTUFF" | "WINGULL" | "WOOBAT" | "WORMADAM" | "WURMPLE" | "WYNAUT" | "ZEBSTRIKA" | "ZUBAT";
			}
		>;
	};
}

export type PhotoSetsSettingsProtoAlola = PhotoSetsSettingsProto<"PHOTO_SET_ALOLA">;
export type PhotoSetsSettingsProtoAncientFossils = PhotoSetsSettingsProto<"PHOTO_SET_ANCIENT_FOSSILS">;
export type PhotoSetsSettingsProtoBattlePokemon = PhotoSetsSettingsProto<"PHOTO_SET_BATTLE_POKEMON">;
export type PhotoSetsSettingsProtoBundleOfJoy = PhotoSetsSettingsProto<"PHOTO_SET_BUNDLE_OF_JOY">;
export type PhotoSetsSettingsProtoBusyCity = PhotoSetsSettingsProto<"PHOTO_SET_BUSY_CITY">;
export type PhotoSetsSettingsProtoClawedCuties = PhotoSetsSettingsProto<"PHOTO_SET_CLAWED_CUTIES">;
export type PhotoSetsSettingsProtoCutePokemonPink = PhotoSetsSettingsProto<"PHOTO_SET_CUTE_POKEMON_PINK">;
export type PhotoSetsSettingsProtoFallVibes = PhotoSetsSettingsProto<"PHOTO_SET_FALL_VIBES">;
export type PhotoSetsSettingsProtoFeatheredFriends = PhotoSetsSettingsProto<"PHOTO_SET_FEATHERED_FRIENDS">;
export type PhotoSetsSettingsProtoFeatheredFriendsLarge = PhotoSetsSettingsProto<"PHOTO_SET_FEATHERED_FRIENDS_LARGE">;
export type PhotoSetsSettingsProtoFeelingFancy = PhotoSetsSettingsProto<"PHOTO_SET_FEELING_FANCY">;
export type PhotoSetsSettingsProtoFurryFriends = PhotoSetsSettingsProto<"PHOTO_SET_FURRY_FRIENDS">;
export type PhotoSetsSettingsProtoFurryFriendsLarge = PhotoSetsSettingsProto<"PHOTO_SET_FURRY_FRIENDS_LARGE">;
export type PhotoSetsSettingsProtoGracefulFlyers = PhotoSetsSettingsProto<"PHOTO_SET_GRACEFUL_FLYERS">;
export type PhotoSetsSettingsProtoHisui = PhotoSetsSettingsProto<"PHOTO_SET_HISUI">;
export type PhotoSetsSettingsProtoHoenn = PhotoSetsSettingsProto<"PHOTO_SET_HOENN">;
export type PhotoSetsSettingsProtoJohto = PhotoSetsSettingsProto<"PHOTO_SET_JOHTO">;
export type PhotoSetsSettingsProtoJustLovely = PhotoSetsSettingsProto<"PHOTO_SET_JUST_LOVELY">;
export type PhotoSetsSettingsProtoKalos = PhotoSetsSettingsProto<"PHOTO_SET_KALOS">;
export type PhotoSetsSettingsProtoKanto = PhotoSetsSettingsProto<"PHOTO_SET_KANTO">;
export type PhotoSetsSettingsProtoLittleChonkers = PhotoSetsSettingsProto<"PHOTO_SET_LITTLE_CHONKERS">;
export type PhotoSetsSettingsProtoMountainPass = PhotoSetsSettingsProto<"PHOTO_SET_MOUNTAIN_PASS">;
export type PhotoSetsSettingsProtoMuseumFossils = PhotoSetsSettingsProto<"PHOTO_SET_MUSEUM_FOSSILS">;
export type PhotoSetsSettingsProtoPaldea = PhotoSetsSettingsProto<"PHOTO_SET_PALDEA">;
export type PhotoSetsSettingsProtoPlayfulPalsLarge = PhotoSetsSettingsProto<"PHOTO_SET_PLAYFUL_PALS_LARGE">;
export type PhotoSetsSettingsProtoRelaxingGarden = PhotoSetsSettingsProto<"PHOTO_SET_RELAXING_GARDEN">;
export type PhotoSetsSettingsProtoSafariTrek = PhotoSetsSettingsProto<"PHOTO_SET_SAFARI_TREK">;
export type PhotoSetsSettingsProtoSandyShoreline = PhotoSetsSettingsProto<"PHOTO_SET_SANDY_SHORELINE">;
export type PhotoSetsSettingsProtoShadowsOfNight = PhotoSetsSettingsProto<"PHOTO_SET_SHADOWS_OF_NIGHT">;
export type PhotoSetsSettingsProtoSinnoh = PhotoSetsSettingsProto<"PHOTO_SET_SINNOH">;
export type PhotoSetsSettingsProtoSmallAndCute = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_AND_CUTE">;
export type PhotoSetsSettingsProtoSmallCutePokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON">;
export type PhotoSetsSettingsProtoSmallCutePokemonPikachuAndEevee = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE">;
export type PhotoSetsSettingsProtoSmallCutePokemonPink = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON_PINK">;
export type PhotoSetsSettingsProtoSmallFlowerPokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON">;
export type PhotoSetsSettingsProtoSmallFlowerPokemonMedium = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM">;
export type PhotoSetsSettingsProtoSmallFlowerPokemonSeeds = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS">;
export type PhotoSetsSettingsProtoSmallWaterPokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_WATER_POKEMON">;
export type PhotoSetsSettingsProtoSpringVibes = PhotoSetsSettingsProto<"PHOTO_SET_SPRING_VIBES">;
export type PhotoSetsSettingsProtoStarters = PhotoSetsSettingsProto<"PHOTO_SET_STARTERS">;
export type PhotoSetsSettingsProtoSummerVibes = PhotoSetsSettingsProto<"PHOTO_SET_SUMMER_VIBES">;
export type PhotoSetsSettingsProtoTinyTikes = PhotoSetsSettingsProto<"PHOTO_SET_TINY_TIKES">;
export type PhotoSetsSettingsProtoUnova = PhotoSetsSettingsProto<"PHOTO_SET_UNOVA">;
export type PhotoSetsSettingsProtoWingsPokemon = PhotoSetsSettingsProto<"PHOTO_SET_WINGS_POKEMON">;
export type PhotoSetsSettingsProtoWinterVibes = PhotoSetsSettingsProto<"PHOTO_SET_WINTER_VIBES">;

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

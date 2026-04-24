export interface PokemonFamily<T extends string> {
	templateId: T;
	data: PokemonFamilyData<T>;
}

export interface PokemonFamilyData<T extends string> {
	templateId: T;
	pokemonFamily: {
		candyPerXlCandy: 100;
		familyId: "FAMILY_ABRA" | "FAMILY_ABSOL" | "FAMILY_AERODACTYL" | "FAMILY_AIPOM" | "FAMILY_ALOMOMOLA" | "FAMILY_AMAURA" | "FAMILY_ANORITH" | "FAMILY_APPLIN" | "FAMILY_ARCEUS" | "FAMILY_ARCHEN" | "FAMILY_ARCTOVISH" | "FAMILY_ARCTOZOLT" | "FAMILY_ARON" | "FAMILY_ARROKUDA" | "FAMILY_ARTICUNO" | "FAMILY_AUDINO" | "FAMILY_AXEW" | "FAMILY_AZELF" | "FAMILY_BAGON" | "FAMILY_BALTOY" | "FAMILY_BARBOACH" | "FAMILY_BASCULIN" | "FAMILY_BELDUM" | "FAMILY_BELLSPROUT" | "FAMILY_BERGMITE" | "FAMILY_BIDOOF" | "FAMILY_BINACLE" | "FAMILY_BLACEPHALON" | "FAMILY_BLIPBUG" | "FAMILY_BLITZLE" | "FAMILY_BOMBIRDIER" | "FAMILY_BOUFFALANT" | "FAMILY_BOUNSWEET" | "FAMILY_BRAMBLIN" | "FAMILY_BRONZOR" | "FAMILY_BRUTEBONNET" | "FAMILY_BRUXISH" | "FAMILY_BUIZEL" | "FAMILY_BULBASAUR" | "FAMILY_BUNEARY" | "FAMILY_BUNNELBY" | "FAMILY_BURMY" | "FAMILY_BUZZWOLE" | "FAMILY_CACNEA" | "FAMILY_CALYREX" | "FAMILY_CAPSAKID" | "FAMILY_CARBINK" | "FAMILY_CARNIVINE" | "FAMILY_CARVANHA" | "FAMILY_CASTFORM" | "FAMILY_CATERPIE" | "FAMILY_CELEBI" | "FAMILY_CELESTEELA" | "FAMILY_CETODDLE" | "FAMILY_CHANSEY" | "FAMILY_CHARCADET" | "FAMILY_CHARMANDER" | "FAMILY_CHATOT" | "FAMILY_CHERUBI" | "FAMILY_CHESPIN" | "FAMILY_CHEWTLE" | "FAMILY_CHIENPAO" | "FAMILY_CHIKORITA" | "FAMILY_CHIMCHAR" | "FAMILY_CHIMECHO" | "FAMILY_CHINCHOU" | "FAMILY_CHIYU" | "FAMILY_CLAMPERL" | "FAMILY_CLAUNCHER" | "FAMILY_CLEFAIRY" | "FAMILY_CLOBBOPUS" | "FAMILY_COBALION" | "FAMILY_COMBEE" | "FAMILY_COMFEY" | "FAMILY_CORPHISH" | "FAMILY_CORSOLA" | "FAMILY_COSMOG" | "FAMILY_COTTONEE" | "FAMILY_CRABRAWLER" | "FAMILY_CRAMORANT" | "FAMILY_CRANIDOS" | "FAMILY_CRESSELIA" | "FAMILY_CROAGUNK" | "FAMILY_CRYOGONAL" | "FAMILY_CUBCHOO" | "FAMILY_CUBONE" | "FAMILY_CUFANT" | "FAMILY_CUTIEFLY" | "FAMILY_CYCLIZAR" | "FAMILY_CYNDAQUIL" | "FAMILY_DARKRAI" | "FAMILY_DARUMAKA" | "FAMILY_DEDENNE" | "FAMILY_DEERLING" | "FAMILY_DEINO" | "FAMILY_DELIBIRD" | "FAMILY_DEOXYS" | "FAMILY_DEWPIDER" | "FAMILY_DHELMISE" | "FAMILY_DIALGA" | "FAMILY_DIANCIE" | "FAMILY_DIGLETT" | "FAMILY_DITTO" | "FAMILY_DODUO" | "FAMILY_DONDOZO" | "FAMILY_DRACOVISH" | "FAMILY_DRACOZOLT" | "FAMILY_DRAMPA" | "FAMILY_DRATINI" | "FAMILY_DREEPY" | "FAMILY_DRIFLOON" | "FAMILY_DRILBUR" | "FAMILY_DROWZEE" | "FAMILY_DRUDDIGON" | "FAMILY_DUCKLETT" | "FAMILY_DUNSPARCE" | "FAMILY_DURALUDON" | "FAMILY_DURANT" | "FAMILY_DUSKULL" | "FAMILY_DWEBBLE" | "FAMILY_EEVEE" | "FAMILY_EISCUE" | "FAMILY_EKANS" | "FAMILY_ELECTABUZZ" | "FAMILY_ELECTRIKE" | "FAMILY_ELGYEM" | "FAMILY_EMOLGA" | "FAMILY_ENAMORUS" | "FAMILY_ENTEI" | "FAMILY_ESPURR" | "FAMILY_ETERNATUS" | "FAMILY_EXEGGCUTE" | "FAMILY_FALINKS" | "FAMILY_FARFETCHD" | "FAMILY_FEEBAS" | "FAMILY_FENNEKIN" | "FAMILY_FERROSEED" | "FAMILY_FEZANDIPITI" | "FAMILY_FIDOUGH" | "FAMILY_FINIZEN" | "FAMILY_FINNEON" | "FAMILY_FLABEBE" | "FAMILY_FLAMIGO" | "FAMILY_FLETCHLING" | "FAMILY_FLITTLE" | "FAMILY_FLUTTERMANE" | "FAMILY_FOMANTIS" | "FAMILY_FOONGUS" | "FAMILY_FRIGIBAX" | "FAMILY_FRILLISH" | "FAMILY_FROAKIE" | "FAMILY_FUECOCO" | "FAMILY_FURFROU" | "FAMILY_GASTLY" | "FAMILY_GENESECT" | "FAMILY_GEODUDE" | "FAMILY_GIBLE" | "FAMILY_GIMMIGHOUL" | "FAMILY_GIRAFARIG" | "FAMILY_GIRATINA" | "FAMILY_GLAMEOW" | "FAMILY_GLASTRIER" | "FAMILY_GLIGAR" | "FAMILY_GLIMMET" | "FAMILY_GOLDEEN" | "FAMILY_GOLETT" | "FAMILY_GOOMY" | "FAMILY_GOSSIFLEUR" | "FAMILY_GOTHITA" | "FAMILY_GOUGINGFIRE" | "FAMILY_GREATTUSK" | "FAMILY_GREAVARD" | "FAMILY_GRIMER" | "FAMILY_GROOKEY" | "FAMILY_GROUDON" | "FAMILY_GROWLITHE" | "FAMILY_GRUBBIN" | "FAMILY_GULPIN" | "FAMILY_GUZZLORD" | "FAMILY_HATENNA" | "FAMILY_HAWLUCHA" | "FAMILY_HEATMOR" | "FAMILY_HEATRAN" | "FAMILY_HELIOPTILE" | "FAMILY_HERACROSS" | "FAMILY_HIPPOPOTAS" | "FAMILY_HO_OH" | "FAMILY_HONEDGE" | "FAMILY_HOOPA" | "FAMILY_HOOTHOOT" | "FAMILY_HOPPIP" | "FAMILY_HORSEA" | "FAMILY_HOUNDOUR" | "FAMILY_ILLUMISE" | "FAMILY_IMPIDIMP" | "FAMILY_INDEEDEE" | "FAMILY_INKAY" | "FAMILY_IRONBOULDER" | "FAMILY_IRONBUNDLE" | "FAMILY_IRONCROWN" | "FAMILY_IRONHANDS" | "FAMILY_IRONJUGULIS" | "FAMILY_IRONLEAVES" | "FAMILY_IRONMOTH" | "FAMILY_IRONTHORNS" | "FAMILY_IRONTREADS" | "FAMILY_IRONVALIANT" | "FAMILY_JANGMO_O" | "FAMILY_JIGGLYPUFF" | "FAMILY_JIRACHI" | "FAMILY_JOLTIK" | "FAMILY_JYNX" | "FAMILY_KABUTO" | "FAMILY_KANGASKHAN" | "FAMILY_KARRABLAST" | "FAMILY_KARTANA" | "FAMILY_KECLEON" | "FAMILY_KELDEO" | "FAMILY_KLAWF" | "FAMILY_KLEFKI" | "FAMILY_KLINK" | "FAMILY_KOFFING" | "FAMILY_KOMALA" | "FAMILY_KORAIDON" | "FAMILY_KRABBY" | "FAMILY_KRICKETOT" | "FAMILY_KUBFU" | "FAMILY_KYOGRE" | "FAMILY_KYUREM" | "FAMILY_LANDORUS" | "FAMILY_LAPRAS" | "FAMILY_LARVESTA" | "FAMILY_LARVITAR" | "FAMILY_LATIAS" | "FAMILY_LATIOS" | "FAMILY_LECHONK" | "FAMILY_LEDYBA" | "FAMILY_LICKITUNG" | "FAMILY_LILEEP" | "FAMILY_LILLIPUP" | "FAMILY_LITLEO" | "FAMILY_LITTEN" | "FAMILY_LITWICK" | "FAMILY_LOTAD" | "FAMILY_LUCARIO" | "FAMILY_LUGIA" | "FAMILY_LUNATONE" | "FAMILY_LUVDISC" | "FAMILY_MACHOP" | "FAMILY_MAGEARNA" | "FAMILY_MAGIKARP" | "FAMILY_MAGMAR" | "FAMILY_MAGNEMITE" | "FAMILY_MAKUHITA" | "FAMILY_MANAPHY" | "FAMILY_MANKEY" | "FAMILY_MANTINE" | "FAMILY_MARACTUS" | "FAMILY_MAREANIE" | "FAMILY_MAREEP" | "FAMILY_MARILL" | "FAMILY_MARSHADOW" | "FAMILY_MASCHIFF" | "FAMILY_MAWILE" | "FAMILY_MEDITITE" | "FAMILY_MELOETTA" | "FAMILY_MELTAN" | "FAMILY_MEOWTH" | "FAMILY_MESPRIT" | "FAMILY_MEW" | "FAMILY_MEWTWO" | "FAMILY_MIENFOO" | "FAMILY_MILCERY" | "FAMILY_MILTANK" | "FAMILY_MIMIKYU" | "FAMILY_MINCCINO" | "FAMILY_MINIOR" | "FAMILY_MINUN" | "FAMILY_MIRAIDON" | "FAMILY_MISDREAVUS" | "FAMILY_MOLTRES" | "FAMILY_MORELULL" | "FAMILY_MORPEKO" | "FAMILY_MR_MIME" | "FAMILY_MUDBRAY" | "FAMILY_MUDKIP" | "FAMILY_MUNKIDORI" | "FAMILY_MUNNA" | "FAMILY_MURKROW" | "FAMILY_NACLI" | "FAMILY_NATU" | "FAMILY_NECROZMA" | "FAMILY_NICKIT" | "FAMILY_NIDORAN_FEMALE" | "FAMILY_NIDORAN_MALE" | "FAMILY_NIHILEGO" | "FAMILY_NINCADA" | "FAMILY_NOIBAT" | "FAMILY_NOSEPASS" | "FAMILY_NUMEL" | "FAMILY_NYMBLE" | "FAMILY_ODDISH" | "FAMILY_OGERPON" | "FAMILY_OKIDOGI" | "FAMILY_OMANYTE" | "FAMILY_ONIX" | "FAMILY_ORANGURU" | "FAMILY_ORICORIO" | "FAMILY_ORTHWORM" | "FAMILY_OSHAWOTT" | "FAMILY_PACHIRISU" | "FAMILY_PALKIA" | "FAMILY_PANCHAM" | "FAMILY_PANPOUR" | "FAMILY_PANSAGE" | "FAMILY_PANSEAR" | "FAMILY_PARAS" | "FAMILY_PASSIMIAN" | "FAMILY_PATRAT" | "FAMILY_PAWMI" | "FAMILY_PAWNIARD" | "FAMILY_PECHARUNT" | "FAMILY_PETILIL" | "FAMILY_PHANPY" | "FAMILY_PHANTUMP" | "FAMILY_PHEROMOSA" | "FAMILY_PHIONE" | "FAMILY_PIDGEY" | "FAMILY_PIDOVE" | "FAMILY_PIKACHU" | "FAMILY_PIKIPEK" | "FAMILY_PINCURCHIN" | "FAMILY_PINECO" | "FAMILY_PINSIR" | "FAMILY_PIPLUP" | "FAMILY_PLUSLE" | "FAMILY_POIPOLE" | "FAMILY_POLIWAG" | "FAMILY_POLTCHAGEIST" | "FAMILY_PONYTA" | "FAMILY_POOCHYENA" | "FAMILY_POPPLIO" | "FAMILY_PORYGON" | "FAMILY_PSYDUCK" | "FAMILY_PUMPKABOO" | "FAMILY_PURRLOIN" | "FAMILY_PYUKUMUKU" | "FAMILY_QUAXLY" | "FAMILY_QWILFISH" | "FAMILY_RAGINGBOLT" | "FAMILY_RAIKOU" | "FAMILY_RALTS" | "FAMILY_RATTATA" | "FAMILY_RAYQUAZA" | "FAMILY_REGICE" | "FAMILY_REGIDRAGO" | "FAMILY_REGIELEKI" | "FAMILY_REGIGIGAS" | "FAMILY_REGIROCK" | "FAMILY_REGISTEEL" | "FAMILY_RELICANTH" | "FAMILY_RELLOR" | "FAMILY_REMORAID" | "FAMILY_RESHIRAM" | "FAMILY_RHYHORN" | "FAMILY_ROARINGMOON" | "FAMILY_ROCKRUFF" | "FAMILY_ROGGENROLA" | "FAMILY_ROLYCOLY" | "FAMILY_ROOKIDEE" | "FAMILY_ROSELIA" | "FAMILY_ROTOM" | "FAMILY_ROWLET" | "FAMILY_RUFFLET" | "FAMILY_SABLEYE" | "FAMILY_SALANDIT" | "FAMILY_SANDILE" | "FAMILY_SANDSHREW" | "FAMILY_SANDYGAST" | "FAMILY_SANDYSHOCKS" | "FAMILY_SAWK" | "FAMILY_SCATTERBUG" | "FAMILY_SCORBUNNY" | "FAMILY_SCRAGGY" | "FAMILY_SCREAMTAIL" | "FAMILY_SCYTHER" | "FAMILY_SEEDOT" | "FAMILY_SEEL" | "FAMILY_SENTRET" | "FAMILY_SEVIPER" | "FAMILY_SEWADDLE" | "FAMILY_SHAYMIN" | "FAMILY_SHELLDER" | "FAMILY_SHELLOS" | "FAMILY_SHELMET" | "FAMILY_SHIELDON" | "FAMILY_SHINX" | "FAMILY_SHROODLE" | "FAMILY_SHROOMISH" | "FAMILY_SHUCKLE" | "FAMILY_SHUPPET" | "FAMILY_SIGILYPH" | "FAMILY_SILICOBRA" | "FAMILY_SINISTEA" | "FAMILY_SIZZLIPEDE" | "FAMILY_SKARMORY" | "FAMILY_SKIDDO" | "FAMILY_SKITTY" | "FAMILY_SKORUPI" | "FAMILY_SKRELP" | "FAMILY_SKWOVET" | "FAMILY_SLAKOTH" | "FAMILY_SLITHERWING" | "FAMILY_SLOWPOKE" | "FAMILY_SLUGMA" | "FAMILY_SMEARGLE" | "FAMILY_SMOLIV" | "FAMILY_SNEASEL" | "FAMILY_SNIVY" | "FAMILY_SNOM" | "FAMILY_SNORLAX" | "FAMILY_SNORUNT" | "FAMILY_SNOVER" | "FAMILY_SNUBBULL" | "FAMILY_SOBBLE" | "FAMILY_SOLOSIS" | "FAMILY_SOLROCK" | "FAMILY_SPEAROW" | "FAMILY_SPECTRIER" | "FAMILY_SPHEAL" | "FAMILY_SPINARAK" | "FAMILY_SPINDA" | "FAMILY_SPIRITOMB" | "FAMILY_SPOINK" | "FAMILY_SPRIGATITO" | "FAMILY_SPRITZEE" | "FAMILY_SQUAWKABILLY" | "FAMILY_SQUIRTLE" | "FAMILY_STAKATAKA" | "FAMILY_STANTLER" | "FAMILY_STARLY" | "FAMILY_STARYU" | "FAMILY_STONJOURNER" | "FAMILY_STUFFUL" | "FAMILY_STUNFISK" | "FAMILY_STUNKY" | "FAMILY_SUDOWOODO" | "FAMILY_SUICUNE" | "FAMILY_SUNKERN" | "FAMILY_SURSKIT" | "FAMILY_SWABLU" | "FAMILY_SWINUB" | "FAMILY_SWIRLIX" | "FAMILY_TADBULB" | "FAMILY_TAILLOW" | "FAMILY_TANDEMAUS" | "FAMILY_TANGELA" | "FAMILY_TAPU_BULU" | "FAMILY_TAPU_FINI" | "FAMILY_TAPU_KOKO" | "FAMILY_TAPU_LELE" | "FAMILY_TAROUNTULA" | "FAMILY_TATSUGIRI" | "FAMILY_TAUROS" | "FAMILY_TEDDIURSA" | "FAMILY_TENTACOOL" | "FAMILY_TEPIG" | "FAMILY_TERAPAGOS" | "FAMILY_TERRAKION" | "FAMILY_THROH" | "FAMILY_THUNDURUS" | "FAMILY_TIMBURR" | "FAMILY_TINGLU" | "FAMILY_TINKATINK" | "FAMILY_TIRTOUGA" | "FAMILY_TOEDSCOOL" | "FAMILY_TOGEDEMARU" | "FAMILY_TOGEPI" | "FAMILY_TORCHIC" | "FAMILY_TORKOAL" | "FAMILY_TORNADUS" | "FAMILY_TOTODILE" | "FAMILY_TOXEL" | "FAMILY_TRAPINCH" | "FAMILY_TREECKO" | "FAMILY_TROPIUS" | "FAMILY_TRUBBISH" | "FAMILY_TURTONATOR" | "FAMILY_TURTWIG" | "FAMILY_TYMPOLE" | "FAMILY_TYNAMO" | "FAMILY_TYPE_NULL" | "FAMILY_TYROGUE" | "FAMILY_TYRUNT" | "FAMILY_UNOWN" | "FAMILY_UXIE" | "FAMILY_VANILLITE" | "FAMILY_VAROOM" | "FAMILY_VELUZA" | "FAMILY_VENIPEDE" | "FAMILY_VENONAT" | "FAMILY_VICTINI" | "FAMILY_VIRIZION" | "FAMILY_VOLBEAT" | "FAMILY_VOLCANION" | "FAMILY_VOLTORB" | "FAMILY_VULLABY" | "FAMILY_VULPIX" | "FAMILY_WAILMER" | "FAMILY_WALKINGWAKE" | "FAMILY_WATTREL" | "FAMILY_WEEDLE" | "FAMILY_WHISMUR" | "FAMILY_WIGLETT" | "FAMILY_WIMPOD" | "FAMILY_WINGULL" | "FAMILY_WISHIWASHI" | "FAMILY_WOBBUFFET" | "FAMILY_WOCHIEN" | "FAMILY_WOOBAT" | "FAMILY_WOOLOO" | "FAMILY_WOOPER" | "FAMILY_WURMPLE" | "FAMILY_XERNEAS" | "FAMILY_XURKITREE" | "FAMILY_YAMASK" | "FAMILY_YAMPER" | "FAMILY_YANMA" | "FAMILY_YUNGOOS" | "FAMILY_YVELTAL" | "FAMILY_ZACIAN" | "FAMILY_ZAMAZENTA" | "FAMILY_ZANGOOSE" | "FAMILY_ZAPDOS" | "FAMILY_ZARUDE" | "FAMILY_ZEKROM" | "FAMILY_ZERAORA" | "FAMILY_ZIGZAGOON" | "FAMILY_ZORUA" | "FAMILY_ZUBAT" | "FAMILY_ZYGARDE";
		megaEvolvablePokemonId?: "ABOMASNOW" | "ABSOL" | "AERODACTYL" | "AGGRON" | "ALAKAZAM" | "ALTARIA" | "AMPHAROS" | "AUDINO" | "BANETTE" | "BEEDRILL" | "BLASTOISE" | "BLAZIKEN" | "CAMERUPT" | "CHARIZARD" | "DIANCIE" | "DRAGONITE" | "GARCHOMP" | "GENGAR" | "GLALIE" | "GROUDON" | "GYARADOS" | "HERACROSS" | "HOUNDOOM" | "KANGASKHAN" | "KYOGRE" | "LATIAS" | "LATIOS" | "LOPUNNY" | "LUCARIO" | "MALAMAR" | "MANECTRIC" | "MAWILE" | "MEDICHAM" | "METAGROSS" | "PIDGEOT" | "PINSIR" | "RAYQUAZA" | "SABLEYE" | "SALAMENCE" | "SCEPTILE" | "SCIZOR" | "SHARPEDO" | "SLOWBRO" | "STEELIX" | "SWAMPERT" | "TYRANITAR" | "VENUSAUR" | "VICTREEBEL";
		megaEvolvablePokemonIds?: [
			"GARDEVOIR",
			"GALLADE"
		];
	};
}

export type PokemonFamilyV0001FamilyBulbasaur = PokemonFamily<"V0001_FAMILY_BULBASAUR">;
export type PokemonFamilyV0004FamilyCharmander = PokemonFamily<"V0004_FAMILY_CHARMANDER">;
export type PokemonFamilyV0007FamilySquirtle = PokemonFamily<"V0007_FAMILY_SQUIRTLE">;
export type PokemonFamilyV0010FamilyCaterpie = PokemonFamily<"V0010_FAMILY_CATERPIE">;
export type PokemonFamilyV0013FamilyWeedle = PokemonFamily<"V0013_FAMILY_WEEDLE">;
export type PokemonFamilyV0016FamilyPidgey = PokemonFamily<"V0016_FAMILY_PIDGEY">;
export type PokemonFamilyV0019FamilyRattata = PokemonFamily<"V0019_FAMILY_RATTATA">;
export type PokemonFamilyV0021FamilySpearow = PokemonFamily<"V0021_FAMILY_SPEAROW">;
export type PokemonFamilyV0023FamilyEkans = PokemonFamily<"V0023_FAMILY_EKANS">;
export type PokemonFamilyV0025FamilyPikachu = PokemonFamily<"V0025_FAMILY_PIKACHU">;
export type PokemonFamilyV0027FamilySandshrew = PokemonFamily<"V0027_FAMILY_SANDSHREW">;
export type PokemonFamilyV0029FamilyNidoran = PokemonFamily<"V0029_FAMILY_NIDORAN">;
export type PokemonFamilyV0032FamilyNidoran = PokemonFamily<"V0032_FAMILY_NIDORAN">;
export type PokemonFamilyV0035FamilyClefairy = PokemonFamily<"V0035_FAMILY_CLEFAIRY">;
export type PokemonFamilyV0037FamilyVulpix = PokemonFamily<"V0037_FAMILY_VULPIX">;
export type PokemonFamilyV0039FamilyJigglypuff = PokemonFamily<"V0039_FAMILY_JIGGLYPUFF">;
export type PokemonFamilyV0041FamilyZubat = PokemonFamily<"V0041_FAMILY_ZUBAT">;
export type PokemonFamilyV0043FamilyOddish = PokemonFamily<"V0043_FAMILY_ODDISH">;
export type PokemonFamilyV0046FamilyParas = PokemonFamily<"V0046_FAMILY_PARAS">;
export type PokemonFamilyV0048FamilyVenonat = PokemonFamily<"V0048_FAMILY_VENONAT">;
export type PokemonFamilyV0050FamilyDiglett = PokemonFamily<"V0050_FAMILY_DIGLETT">;
export type PokemonFamilyV0052FamilyMeowth = PokemonFamily<"V0052_FAMILY_MEOWTH">;
export type PokemonFamilyV0054FamilyPsyduck = PokemonFamily<"V0054_FAMILY_PSYDUCK">;
export type PokemonFamilyV0056FamilyMankey = PokemonFamily<"V0056_FAMILY_MANKEY">;
export type PokemonFamilyV0058FamilyGrowlithe = PokemonFamily<"V0058_FAMILY_GROWLITHE">;
export type PokemonFamilyV0060FamilyPoliwag = PokemonFamily<"V0060_FAMILY_POLIWAG">;
export type PokemonFamilyV0063FamilyAbra = PokemonFamily<"V0063_FAMILY_ABRA">;
export type PokemonFamilyV0066FamilyMachop = PokemonFamily<"V0066_FAMILY_MACHOP">;
export type PokemonFamilyV0069FamilyBellsprout = PokemonFamily<"V0069_FAMILY_BELLSPROUT">;
export type PokemonFamilyV0072FamilyTentacool = PokemonFamily<"V0072_FAMILY_TENTACOOL">;
export type PokemonFamilyV0074FamilyGeodude = PokemonFamily<"V0074_FAMILY_GEODUDE">;
export type PokemonFamilyV0077FamilyPonyta = PokemonFamily<"V0077_FAMILY_PONYTA">;
export type PokemonFamilyV0079FamilySlowpoke = PokemonFamily<"V0079_FAMILY_SLOWPOKE">;
export type PokemonFamilyV0081FamilyMagnemite = PokemonFamily<"V0081_FAMILY_MAGNEMITE">;
export type PokemonFamilyV0083FamilyFarfetchd = PokemonFamily<"V0083_FAMILY_FARFETCHD">;
export type PokemonFamilyV0084FamilyDoduo = PokemonFamily<"V0084_FAMILY_DODUO">;
export type PokemonFamilyV0086FamilySeel = PokemonFamily<"V0086_FAMILY_SEEL">;
export type PokemonFamilyV0088FamilyGrimer = PokemonFamily<"V0088_FAMILY_GRIMER">;
export type PokemonFamilyV0090FamilyShellder = PokemonFamily<"V0090_FAMILY_SHELLDER">;
export type PokemonFamilyV0092FamilyGastly = PokemonFamily<"V0092_FAMILY_GASTLY">;
export type PokemonFamilyV0095FamilyOnix = PokemonFamily<"V0095_FAMILY_ONIX">;
export type PokemonFamilyV0096FamilyDrowzee = PokemonFamily<"V0096_FAMILY_DROWZEE">;
export type PokemonFamilyV0098FamilyKrabby = PokemonFamily<"V0098_FAMILY_KRABBY">;
export type PokemonFamilyV0100FamilyVoltorb = PokemonFamily<"V0100_FAMILY_VOLTORB">;
export type PokemonFamilyV0102FamilyExeggcute = PokemonFamily<"V0102_FAMILY_EXEGGCUTE">;
export type PokemonFamilyV0104FamilyCubone = PokemonFamily<"V0104_FAMILY_CUBONE">;
export type PokemonFamilyV0108FamilyLickitung = PokemonFamily<"V0108_FAMILY_LICKITUNG">;
export type PokemonFamilyV0109FamilyKoffing = PokemonFamily<"V0109_FAMILY_KOFFING">;
export type PokemonFamilyV0111FamilyRhyhorn = PokemonFamily<"V0111_FAMILY_RHYHORN">;
export type PokemonFamilyV0113FamilyChansey = PokemonFamily<"V0113_FAMILY_CHANSEY">;
export type PokemonFamilyV0114FamilyTangela = PokemonFamily<"V0114_FAMILY_TANGELA">;
export type PokemonFamilyV0115FamilyKangaskhan = PokemonFamily<"V0115_FAMILY_KANGASKHAN">;
export type PokemonFamilyV0116FamilyHorsea = PokemonFamily<"V0116_FAMILY_HORSEA">;
export type PokemonFamilyV0118FamilyGoldeen = PokemonFamily<"V0118_FAMILY_GOLDEEN">;
export type PokemonFamilyV0120FamilyStaryu = PokemonFamily<"V0120_FAMILY_STARYU">;
export type PokemonFamilyV0122FamilyMrMime = PokemonFamily<"V0122_FAMILY_MR_MIME">;
export type PokemonFamilyV0123FamilyScyther = PokemonFamily<"V0123_FAMILY_SCYTHER">;
export type PokemonFamilyV0124FamilyJynx = PokemonFamily<"V0124_FAMILY_JYNX">;
export type PokemonFamilyV0125FamilyElectabuzz = PokemonFamily<"V0125_FAMILY_ELECTABUZZ">;
export type PokemonFamilyV0126FamilyMagmar = PokemonFamily<"V0126_FAMILY_MAGMAR">;
export type PokemonFamilyV0127FamilyPinsir = PokemonFamily<"V0127_FAMILY_PINSIR">;
export type PokemonFamilyV0128FamilyTauros = PokemonFamily<"V0128_FAMILY_TAUROS">;
export type PokemonFamilyV0129FamilyMagikarp = PokemonFamily<"V0129_FAMILY_MAGIKARP">;
export type PokemonFamilyV0131FamilyLapras = PokemonFamily<"V0131_FAMILY_LAPRAS">;
export type PokemonFamilyV0132FamilyDitto = PokemonFamily<"V0132_FAMILY_DITTO">;
export type PokemonFamilyV0133FamilyEevee = PokemonFamily<"V0133_FAMILY_EEVEE">;
export type PokemonFamilyV0137FamilyPorygon = PokemonFamily<"V0137_FAMILY_PORYGON">;
export type PokemonFamilyV0138FamilyOmanyte = PokemonFamily<"V0138_FAMILY_OMANYTE">;
export type PokemonFamilyV0140FamilyKabuto = PokemonFamily<"V0140_FAMILY_KABUTO">;
export type PokemonFamilyV0142FamilyAerodactyl = PokemonFamily<"V0142_FAMILY_AERODACTYL">;
export type PokemonFamilyV0143FamilySnorlax = PokemonFamily<"V0143_FAMILY_SNORLAX">;
export type PokemonFamilyV0144FamilyArticuno = PokemonFamily<"V0144_FAMILY_ARTICUNO">;
export type PokemonFamilyV0145FamilyZapdos = PokemonFamily<"V0145_FAMILY_ZAPDOS">;
export type PokemonFamilyV0146FamilyMoltres = PokemonFamily<"V0146_FAMILY_MOLTRES">;
export type PokemonFamilyV0147FamilyDratini = PokemonFamily<"V0147_FAMILY_DRATINI">;
export type PokemonFamilyV0150FamilyMewtwo = PokemonFamily<"V0150_FAMILY_MEWTWO">;
export type PokemonFamilyV0151FamilyMew = PokemonFamily<"V0151_FAMILY_MEW">;
export type PokemonFamilyV0152FamilyChikorita = PokemonFamily<"V0152_FAMILY_CHIKORITA">;
export type PokemonFamilyV0155FamilyCyndaquil = PokemonFamily<"V0155_FAMILY_CYNDAQUIL">;
export type PokemonFamilyV0158FamilyTotodile = PokemonFamily<"V0158_FAMILY_TOTODILE">;
export type PokemonFamilyV0161FamilySentret = PokemonFamily<"V0161_FAMILY_SENTRET">;
export type PokemonFamilyV0163FamilyHoothoot = PokemonFamily<"V0163_FAMILY_HOOTHOOT">;
export type PokemonFamilyV0165FamilyLedyba = PokemonFamily<"V0165_FAMILY_LEDYBA">;
export type PokemonFamilyV0167FamilySpinarak = PokemonFamily<"V0167_FAMILY_SPINARAK">;
export type PokemonFamilyV0170FamilyChinchou = PokemonFamily<"V0170_FAMILY_CHINCHOU">;
export type PokemonFamilyV0175FamilyTogepi = PokemonFamily<"V0175_FAMILY_TOGEPI">;
export type PokemonFamilyV0177FamilyNatu = PokemonFamily<"V0177_FAMILY_NATU">;
export type PokemonFamilyV0179FamilyMareep = PokemonFamily<"V0179_FAMILY_MAREEP">;
export type PokemonFamilyV0183FamilyMarill = PokemonFamily<"V0183_FAMILY_MARILL">;
export type PokemonFamilyV0185FamilySudowoodo = PokemonFamily<"V0185_FAMILY_SUDOWOODO">;
export type PokemonFamilyV0187FamilyHoppip = PokemonFamily<"V0187_FAMILY_HOPPIP">;
export type PokemonFamilyV0190FamilyAipom = PokemonFamily<"V0190_FAMILY_AIPOM">;
export type PokemonFamilyV0191FamilySunkern = PokemonFamily<"V0191_FAMILY_SUNKERN">;
export type PokemonFamilyV0193FamilyYanma = PokemonFamily<"V0193_FAMILY_YANMA">;
export type PokemonFamilyV0194FamilyWooper = PokemonFamily<"V0194_FAMILY_WOOPER">;
export type PokemonFamilyV0198FamilyMurkrow = PokemonFamily<"V0198_FAMILY_MURKROW">;
export type PokemonFamilyV0200FamilyMisdreavus = PokemonFamily<"V0200_FAMILY_MISDREAVUS">;
export type PokemonFamilyV0201FamilyUnown = PokemonFamily<"V0201_FAMILY_UNOWN">;
export type PokemonFamilyV0202FamilyWobbuffet = PokemonFamily<"V0202_FAMILY_WOBBUFFET">;
export type PokemonFamilyV0203FamilyGirafarig = PokemonFamily<"V0203_FAMILY_GIRAFARIG">;
export type PokemonFamilyV0204FamilyPineco = PokemonFamily<"V0204_FAMILY_PINECO">;
export type PokemonFamilyV0206FamilyDunsparce = PokemonFamily<"V0206_FAMILY_DUNSPARCE">;
export type PokemonFamilyV0207FamilyGligar = PokemonFamily<"V0207_FAMILY_GLIGAR">;
export type PokemonFamilyV0209FamilySnubbull = PokemonFamily<"V0209_FAMILY_SNUBBULL">;
export type PokemonFamilyV0211FamilyQwilfish = PokemonFamily<"V0211_FAMILY_QWILFISH">;
export type PokemonFamilyV0213FamilyShuckle = PokemonFamily<"V0213_FAMILY_SHUCKLE">;
export type PokemonFamilyV0214FamilyHeracross = PokemonFamily<"V0214_FAMILY_HERACROSS">;
export type PokemonFamilyV0215FamilySneasel = PokemonFamily<"V0215_FAMILY_SNEASEL">;
export type PokemonFamilyV0216FamilyTeddiursa = PokemonFamily<"V0216_FAMILY_TEDDIURSA">;
export type PokemonFamilyV0218FamilySlugma = PokemonFamily<"V0218_FAMILY_SLUGMA">;
export type PokemonFamilyV0220FamilySwinub = PokemonFamily<"V0220_FAMILY_SWINUB">;
export type PokemonFamilyV0222FamilyCorsola = PokemonFamily<"V0222_FAMILY_CORSOLA">;
export type PokemonFamilyV0223FamilyRemoraid = PokemonFamily<"V0223_FAMILY_REMORAID">;
export type PokemonFamilyV0225FamilyDelibird = PokemonFamily<"V0225_FAMILY_DELIBIRD">;
export type PokemonFamilyV0226FamilyMantine = PokemonFamily<"V0226_FAMILY_MANTINE">;
export type PokemonFamilyV0227FamilySkarmory = PokemonFamily<"V0227_FAMILY_SKARMORY">;
export type PokemonFamilyV0228FamilyHoundour = PokemonFamily<"V0228_FAMILY_HOUNDOUR">;
export type PokemonFamilyV0231FamilyPhanpy = PokemonFamily<"V0231_FAMILY_PHANPY">;
export type PokemonFamilyV0234FamilyStantler = PokemonFamily<"V0234_FAMILY_STANTLER">;
export type PokemonFamilyV0235FamilySmeargle = PokemonFamily<"V0235_FAMILY_SMEARGLE">;
export type PokemonFamilyV0236FamilyTyrogue = PokemonFamily<"V0236_FAMILY_TYROGUE">;
export type PokemonFamilyV0241FamilyMiltank = PokemonFamily<"V0241_FAMILY_MILTANK">;
export type PokemonFamilyV0243FamilyRaikou = PokemonFamily<"V0243_FAMILY_RAIKOU">;
export type PokemonFamilyV0244FamilyEntei = PokemonFamily<"V0244_FAMILY_ENTEI">;
export type PokemonFamilyV0245FamilySuicune = PokemonFamily<"V0245_FAMILY_SUICUNE">;
export type PokemonFamilyV0246FamilyLarvitar = PokemonFamily<"V0246_FAMILY_LARVITAR">;
export type PokemonFamilyV0249FamilyLugia = PokemonFamily<"V0249_FAMILY_LUGIA">;
export type PokemonFamilyV0250FamilyHoOh = PokemonFamily<"V0250_FAMILY_HO_OH">;
export type PokemonFamilyV0251FamilyCelebi = PokemonFamily<"V0251_FAMILY_CELEBI">;
export type PokemonFamilyV0252FamilyTreecko = PokemonFamily<"V0252_FAMILY_TREECKO">;
export type PokemonFamilyV0255FamilyTorchic = PokemonFamily<"V0255_FAMILY_TORCHIC">;
export type PokemonFamilyV0258FamilyMudkip = PokemonFamily<"V0258_FAMILY_MUDKIP">;
export type PokemonFamilyV0261FamilyPoochyena = PokemonFamily<"V0261_FAMILY_POOCHYENA">;
export type PokemonFamilyV0263FamilyZigzagoon = PokemonFamily<"V0263_FAMILY_ZIGZAGOON">;
export type PokemonFamilyV0265FamilyWurmple = PokemonFamily<"V0265_FAMILY_WURMPLE">;
export type PokemonFamilyV0270FamilyLotad = PokemonFamily<"V0270_FAMILY_LOTAD">;
export type PokemonFamilyV0273FamilySeedot = PokemonFamily<"V0273_FAMILY_SEEDOT">;
export type PokemonFamilyV0276FamilyTaillow = PokemonFamily<"V0276_FAMILY_TAILLOW">;
export type PokemonFamilyV0278FamilyWingull = PokemonFamily<"V0278_FAMILY_WINGULL">;
export type PokemonFamilyV0280FamilyRalts = PokemonFamily<"V0280_FAMILY_RALTS">;
export type PokemonFamilyV0283FamilySurskit = PokemonFamily<"V0283_FAMILY_SURSKIT">;
export type PokemonFamilyV0285FamilyShroomish = PokemonFamily<"V0285_FAMILY_SHROOMISH">;
export type PokemonFamilyV0287FamilySlakoth = PokemonFamily<"V0287_FAMILY_SLAKOTH">;
export type PokemonFamilyV0290FamilyNincada = PokemonFamily<"V0290_FAMILY_NINCADA">;
export type PokemonFamilyV0293FamilyWhismur = PokemonFamily<"V0293_FAMILY_WHISMUR">;
export type PokemonFamilyV0296FamilyMakuhita = PokemonFamily<"V0296_FAMILY_MAKUHITA">;
export type PokemonFamilyV0299FamilyNosepass = PokemonFamily<"V0299_FAMILY_NOSEPASS">;
export type PokemonFamilyV0300FamilySkitty = PokemonFamily<"V0300_FAMILY_SKITTY">;
export type PokemonFamilyV0302FamilySableye = PokemonFamily<"V0302_FAMILY_SABLEYE">;
export type PokemonFamilyV0303FamilyMawile = PokemonFamily<"V0303_FAMILY_MAWILE">;
export type PokemonFamilyV0304FamilyAron = PokemonFamily<"V0304_FAMILY_ARON">;
export type PokemonFamilyV0307FamilyMeditite = PokemonFamily<"V0307_FAMILY_MEDITITE">;
export type PokemonFamilyV0309FamilyElectrike = PokemonFamily<"V0309_FAMILY_ELECTRIKE">;
export type PokemonFamilyV0311FamilyPlusle = PokemonFamily<"V0311_FAMILY_PLUSLE">;
export type PokemonFamilyV0312FamilyMinun = PokemonFamily<"V0312_FAMILY_MINUN">;
export type PokemonFamilyV0313FamilyVolbeat = PokemonFamily<"V0313_FAMILY_VOLBEAT">;
export type PokemonFamilyV0314FamilyIllumise = PokemonFamily<"V0314_FAMILY_ILLUMISE">;
export type PokemonFamilyV0315FamilyRoselia = PokemonFamily<"V0315_FAMILY_ROSELIA">;
export type PokemonFamilyV0316FamilyGulpin = PokemonFamily<"V0316_FAMILY_GULPIN">;
export type PokemonFamilyV0318FamilyCarvanha = PokemonFamily<"V0318_FAMILY_CARVANHA">;
export type PokemonFamilyV0320FamilyWailmer = PokemonFamily<"V0320_FAMILY_WAILMER">;
export type PokemonFamilyV0322FamilyNumel = PokemonFamily<"V0322_FAMILY_NUMEL">;
export type PokemonFamilyV0324FamilyTorkoal = PokemonFamily<"V0324_FAMILY_TORKOAL">;
export type PokemonFamilyV0325FamilySpoink = PokemonFamily<"V0325_FAMILY_SPOINK">;
export type PokemonFamilyV0327FamilySpinda = PokemonFamily<"V0327_FAMILY_SPINDA">;
export type PokemonFamilyV0328FamilyTrapinch = PokemonFamily<"V0328_FAMILY_TRAPINCH">;
export type PokemonFamilyV0331FamilyCacnea = PokemonFamily<"V0331_FAMILY_CACNEA">;
export type PokemonFamilyV0333FamilySwablu = PokemonFamily<"V0333_FAMILY_SWABLU">;
export type PokemonFamilyV0335FamilyZangoose = PokemonFamily<"V0335_FAMILY_ZANGOOSE">;
export type PokemonFamilyV0336FamilySeviper = PokemonFamily<"V0336_FAMILY_SEVIPER">;
export type PokemonFamilyV0337FamilyLunatone = PokemonFamily<"V0337_FAMILY_LUNATONE">;
export type PokemonFamilyV0338FamilySolrock = PokemonFamily<"V0338_FAMILY_SOLROCK">;
export type PokemonFamilyV0339FamilyBarboach = PokemonFamily<"V0339_FAMILY_BARBOACH">;
export type PokemonFamilyV0341FamilyCorphish = PokemonFamily<"V0341_FAMILY_CORPHISH">;
export type PokemonFamilyV0343FamilyBaltoy = PokemonFamily<"V0343_FAMILY_BALTOY">;
export type PokemonFamilyV0345FamilyLileep = PokemonFamily<"V0345_FAMILY_LILEEP">;
export type PokemonFamilyV0347FamilyAnorith = PokemonFamily<"V0347_FAMILY_ANORITH">;
export type PokemonFamilyV0349FamilyFeebas = PokemonFamily<"V0349_FAMILY_FEEBAS">;
export type PokemonFamilyV0351FamilyCastform = PokemonFamily<"V0351_FAMILY_CASTFORM">;
export type PokemonFamilyV0352FamilyKecleon = PokemonFamily<"V0352_FAMILY_KECLEON">;
export type PokemonFamilyV0353FamilyShuppet = PokemonFamily<"V0353_FAMILY_SHUPPET">;
export type PokemonFamilyV0355FamilyDuskull = PokemonFamily<"V0355_FAMILY_DUSKULL">;
export type PokemonFamilyV0357FamilyTropius = PokemonFamily<"V0357_FAMILY_TROPIUS">;
export type PokemonFamilyV0358FamilyChimecho = PokemonFamily<"V0358_FAMILY_CHIMECHO">;
export type PokemonFamilyV0359FamilyAbsol = PokemonFamily<"V0359_FAMILY_ABSOL">;
export type PokemonFamilyV0361FamilySnorunt = PokemonFamily<"V0361_FAMILY_SNORUNT">;
export type PokemonFamilyV0363FamilySpheal = PokemonFamily<"V0363_FAMILY_SPHEAL">;
export type PokemonFamilyV0366FamilyClamperl = PokemonFamily<"V0366_FAMILY_CLAMPERL">;
export type PokemonFamilyV0369FamilyRelicanth = PokemonFamily<"V0369_FAMILY_RELICANTH">;
export type PokemonFamilyV0370FamilyLuvdisc = PokemonFamily<"V0370_FAMILY_LUVDISC">;
export type PokemonFamilyV0371FamilyBagon = PokemonFamily<"V0371_FAMILY_BAGON">;
export type PokemonFamilyV0374FamilyBeldum = PokemonFamily<"V0374_FAMILY_BELDUM">;
export type PokemonFamilyV0377FamilyRegirock = PokemonFamily<"V0377_FAMILY_REGIROCK">;
export type PokemonFamilyV0378FamilyRegice = PokemonFamily<"V0378_FAMILY_REGICE">;
export type PokemonFamilyV0379FamilyRegisteel = PokemonFamily<"V0379_FAMILY_REGISTEEL">;
export type PokemonFamilyV0380FamilyLatias = PokemonFamily<"V0380_FAMILY_LATIAS">;
export type PokemonFamilyV0381FamilyLatios = PokemonFamily<"V0381_FAMILY_LATIOS">;
export type PokemonFamilyV0382FamilyKyogre = PokemonFamily<"V0382_FAMILY_KYOGRE">;
export type PokemonFamilyV0383FamilyGroudon = PokemonFamily<"V0383_FAMILY_GROUDON">;
export type PokemonFamilyV0384FamilyRayquaza = PokemonFamily<"V0384_FAMILY_RAYQUAZA">;
export type PokemonFamilyV0385FamilyJirachi = PokemonFamily<"V0385_FAMILY_JIRACHI">;
export type PokemonFamilyV0386FamilyDeoxys = PokemonFamily<"V0386_FAMILY_DEOXYS">;
export type PokemonFamilyV0387FamilyTurtwig = PokemonFamily<"V0387_FAMILY_TURTWIG">;
export type PokemonFamilyV0390FamilyChimchar = PokemonFamily<"V0390_FAMILY_CHIMCHAR">;
export type PokemonFamilyV0393FamilyPiplup = PokemonFamily<"V0393_FAMILY_PIPLUP">;
export type PokemonFamilyV0396FamilyStarly = PokemonFamily<"V0396_FAMILY_STARLY">;
export type PokemonFamilyV0399FamilyBidoof = PokemonFamily<"V0399_FAMILY_BIDOOF">;
export type PokemonFamilyV0401FamilyKricketot = PokemonFamily<"V0401_FAMILY_KRICKETOT">;
export type PokemonFamilyV0403FamilyShinx = PokemonFamily<"V0403_FAMILY_SHINX">;
export type PokemonFamilyV0408FamilyCranidos = PokemonFamily<"V0408_FAMILY_CRANIDOS">;
export type PokemonFamilyV0410FamilyShieldon = PokemonFamily<"V0410_FAMILY_SHIELDON">;
export type PokemonFamilyV0412FamilyBurmy = PokemonFamily<"V0412_FAMILY_BURMY">;
export type PokemonFamilyV0415FamilyCombee = PokemonFamily<"V0415_FAMILY_COMBEE">;
export type PokemonFamilyV0417FamilyPachirisu = PokemonFamily<"V0417_FAMILY_PACHIRISU">;
export type PokemonFamilyV0418FamilyBuizel = PokemonFamily<"V0418_FAMILY_BUIZEL">;
export type PokemonFamilyV0420FamilyCherubi = PokemonFamily<"V0420_FAMILY_CHERUBI">;
export type PokemonFamilyV0422FamilyShellos = PokemonFamily<"V0422_FAMILY_SHELLOS">;
export type PokemonFamilyV0425FamilyDrifloon = PokemonFamily<"V0425_FAMILY_DRIFLOON">;
export type PokemonFamilyV0427FamilyBuneary = PokemonFamily<"V0427_FAMILY_BUNEARY">;
export type PokemonFamilyV0431FamilyGlameow = PokemonFamily<"V0431_FAMILY_GLAMEOW">;
export type PokemonFamilyV0434FamilyStunky = PokemonFamily<"V0434_FAMILY_STUNKY">;
export type PokemonFamilyV0436FamilyBronzor = PokemonFamily<"V0436_FAMILY_BRONZOR">;
export type PokemonFamilyV0441FamilyChatot = PokemonFamily<"V0441_FAMILY_CHATOT">;
export type PokemonFamilyV0442FamilySpiritomb = PokemonFamily<"V0442_FAMILY_SPIRITOMB">;
export type PokemonFamilyV0443FamilyGible = PokemonFamily<"V0443_FAMILY_GIBLE">;
export type PokemonFamilyV0448FamilyLucario = PokemonFamily<"V0448_FAMILY_LUCARIO">;
export type PokemonFamilyV0449FamilyHippopotas = PokemonFamily<"V0449_FAMILY_HIPPOPOTAS">;
export type PokemonFamilyV0451FamilySkorupi = PokemonFamily<"V0451_FAMILY_SKORUPI">;
export type PokemonFamilyV0453FamilyCroagunk = PokemonFamily<"V0453_FAMILY_CROAGUNK">;
export type PokemonFamilyV0455FamilyCarnivine = PokemonFamily<"V0455_FAMILY_CARNIVINE">;
export type PokemonFamilyV0456FamilyFinneon = PokemonFamily<"V0456_FAMILY_FINNEON">;
export type PokemonFamilyV0459FamilySnover = PokemonFamily<"V0459_FAMILY_SNOVER">;
export type PokemonFamilyV0479FamilyRotom = PokemonFamily<"V0479_FAMILY_ROTOM">;
export type PokemonFamilyV0480FamilyUxie = PokemonFamily<"V0480_FAMILY_UXIE">;
export type PokemonFamilyV0481FamilyMesprit = PokemonFamily<"V0481_FAMILY_MESPRIT">;
export type PokemonFamilyV0482FamilyAzelf = PokemonFamily<"V0482_FAMILY_AZELF">;
export type PokemonFamilyV0483FamilyDialga = PokemonFamily<"V0483_FAMILY_DIALGA">;
export type PokemonFamilyV0484FamilyPalkia = PokemonFamily<"V0484_FAMILY_PALKIA">;
export type PokemonFamilyV0485FamilyHeatran = PokemonFamily<"V0485_FAMILY_HEATRAN">;
export type PokemonFamilyV0486FamilyRegigigas = PokemonFamily<"V0486_FAMILY_REGIGIGAS">;
export type PokemonFamilyV0487FamilyGiratina = PokemonFamily<"V0487_FAMILY_GIRATINA">;
export type PokemonFamilyV0488FamilyCresselia = PokemonFamily<"V0488_FAMILY_CRESSELIA">;
export type PokemonFamilyV0489FamilyPhione = PokemonFamily<"V0489_FAMILY_PHIONE">;
export type PokemonFamilyV0490FamilyManaphy = PokemonFamily<"V0490_FAMILY_MANAPHY">;
export type PokemonFamilyV0491FamilyDarkrai = PokemonFamily<"V0491_FAMILY_DARKRAI">;
export type PokemonFamilyV0492FamilyShaymin = PokemonFamily<"V0492_FAMILY_SHAYMIN">;
export type PokemonFamilyV0493FamilyArceus = PokemonFamily<"V0493_FAMILY_ARCEUS">;
export type PokemonFamilyV0494FamilyVictini = PokemonFamily<"V0494_FAMILY_VICTINI">;
export type PokemonFamilyV0495FamilySnivy = PokemonFamily<"V0495_FAMILY_SNIVY">;
export type PokemonFamilyV0498FamilyTepig = PokemonFamily<"V0498_FAMILY_TEPIG">;
export type PokemonFamilyV0501FamilyOshawott = PokemonFamily<"V0501_FAMILY_OSHAWOTT">;
export type PokemonFamilyV0504FamilyPatrat = PokemonFamily<"V0504_FAMILY_PATRAT">;
export type PokemonFamilyV0506FamilyLillipup = PokemonFamily<"V0506_FAMILY_LILLIPUP">;
export type PokemonFamilyV0509FamilyPurrloin = PokemonFamily<"V0509_FAMILY_PURRLOIN">;
export type PokemonFamilyV0511FamilyPansage = PokemonFamily<"V0511_FAMILY_PANSAGE">;
export type PokemonFamilyV0513FamilyPansear = PokemonFamily<"V0513_FAMILY_PANSEAR">;
export type PokemonFamilyV0515FamilyPanpour = PokemonFamily<"V0515_FAMILY_PANPOUR">;
export type PokemonFamilyV0517FamilyMunna = PokemonFamily<"V0517_FAMILY_MUNNA">;
export type PokemonFamilyV0519FamilyPidove = PokemonFamily<"V0519_FAMILY_PIDOVE">;
export type PokemonFamilyV0522FamilyBlitzle = PokemonFamily<"V0522_FAMILY_BLITZLE">;
export type PokemonFamilyV0524FamilyRoggenrola = PokemonFamily<"V0524_FAMILY_ROGGENROLA">;
export type PokemonFamilyV0527FamilyWoobat = PokemonFamily<"V0527_FAMILY_WOOBAT">;
export type PokemonFamilyV0529FamilyDrilbur = PokemonFamily<"V0529_FAMILY_DRILBUR">;
export type PokemonFamilyV0531FamilyAudino = PokemonFamily<"V0531_FAMILY_AUDINO">;
export type PokemonFamilyV0532FamilyTimburr = PokemonFamily<"V0532_FAMILY_TIMBURR">;
export type PokemonFamilyV0535FamilyTympole = PokemonFamily<"V0535_FAMILY_TYMPOLE">;
export type PokemonFamilyV0538FamilyThroh = PokemonFamily<"V0538_FAMILY_THROH">;
export type PokemonFamilyV0539FamilySawk = PokemonFamily<"V0539_FAMILY_SAWK">;
export type PokemonFamilyV0540FamilySewaddle = PokemonFamily<"V0540_FAMILY_SEWADDLE">;
export type PokemonFamilyV0543FamilyVenipede = PokemonFamily<"V0543_FAMILY_VENIPEDE">;
export type PokemonFamilyV0546FamilyCottonee = PokemonFamily<"V0546_FAMILY_COTTONEE">;
export type PokemonFamilyV0548FamilyPetilil = PokemonFamily<"V0548_FAMILY_PETILIL">;
export type PokemonFamilyV0550FamilyBasculin = PokemonFamily<"V0550_FAMILY_BASCULIN">;
export type PokemonFamilyV0551FamilySandile = PokemonFamily<"V0551_FAMILY_SANDILE">;
export type PokemonFamilyV0554FamilyDarumaka = PokemonFamily<"V0554_FAMILY_DARUMAKA">;
export type PokemonFamilyV0556FamilyMaractus = PokemonFamily<"V0556_FAMILY_MARACTUS">;
export type PokemonFamilyV0557FamilyDwebble = PokemonFamily<"V0557_FAMILY_DWEBBLE">;
export type PokemonFamilyV0559FamilyScraggy = PokemonFamily<"V0559_FAMILY_SCRAGGY">;
export type PokemonFamilyV0561FamilySigilyph = PokemonFamily<"V0561_FAMILY_SIGILYPH">;
export type PokemonFamilyV0562FamilyYamask = PokemonFamily<"V0562_FAMILY_YAMASK">;
export type PokemonFamilyV0564FamilyTirtouga = PokemonFamily<"V0564_FAMILY_TIRTOUGA">;
export type PokemonFamilyV0566FamilyArchen = PokemonFamily<"V0566_FAMILY_ARCHEN">;
export type PokemonFamilyV0568FamilyTrubbish = PokemonFamily<"V0568_FAMILY_TRUBBISH">;
export type PokemonFamilyV0570FamilyZorua = PokemonFamily<"V0570_FAMILY_ZORUA">;
export type PokemonFamilyV0572FamilyMinccino = PokemonFamily<"V0572_FAMILY_MINCCINO">;
export type PokemonFamilyV0574FamilyGothita = PokemonFamily<"V0574_FAMILY_GOTHITA">;
export type PokemonFamilyV0577FamilySolosis = PokemonFamily<"V0577_FAMILY_SOLOSIS">;
export type PokemonFamilyV0580FamilyDucklett = PokemonFamily<"V0580_FAMILY_DUCKLETT">;
export type PokemonFamilyV0582FamilyVanillite = PokemonFamily<"V0582_FAMILY_VANILLITE">;
export type PokemonFamilyV0585FamilyDeerling = PokemonFamily<"V0585_FAMILY_DEERLING">;
export type PokemonFamilyV0587FamilyEmolga = PokemonFamily<"V0587_FAMILY_EMOLGA">;
export type PokemonFamilyV0588FamilyKarrablast = PokemonFamily<"V0588_FAMILY_KARRABLAST">;
export type PokemonFamilyV0590FamilyFoongus = PokemonFamily<"V0590_FAMILY_FOONGUS">;
export type PokemonFamilyV0592FamilyFrillish = PokemonFamily<"V0592_FAMILY_FRILLISH">;
export type PokemonFamilyV0594FamilyAlomomola = PokemonFamily<"V0594_FAMILY_ALOMOMOLA">;
export type PokemonFamilyV0595FamilyJoltik = PokemonFamily<"V0595_FAMILY_JOLTIK">;
export type PokemonFamilyV0597FamilyFerroseed = PokemonFamily<"V0597_FAMILY_FERROSEED">;
export type PokemonFamilyV0599FamilyKlink = PokemonFamily<"V0599_FAMILY_KLINK">;
export type PokemonFamilyV0602FamilyTynamo = PokemonFamily<"V0602_FAMILY_TYNAMO">;
export type PokemonFamilyV0605FamilyElgyem = PokemonFamily<"V0605_FAMILY_ELGYEM">;
export type PokemonFamilyV0607FamilyLitwick = PokemonFamily<"V0607_FAMILY_LITWICK">;
export type PokemonFamilyV0610FamilyAxew = PokemonFamily<"V0610_FAMILY_AXEW">;
export type PokemonFamilyV0613FamilyCubchoo = PokemonFamily<"V0613_FAMILY_CUBCHOO">;
export type PokemonFamilyV0615FamilyCryogonal = PokemonFamily<"V0615_FAMILY_CRYOGONAL">;
export type PokemonFamilyV0616FamilyShelmet = PokemonFamily<"V0616_FAMILY_SHELMET">;
export type PokemonFamilyV0618FamilyStunfisk = PokemonFamily<"V0618_FAMILY_STUNFISK">;
export type PokemonFamilyV0619FamilyMienfoo = PokemonFamily<"V0619_FAMILY_MIENFOO">;
export type PokemonFamilyV0621FamilyDruddigon = PokemonFamily<"V0621_FAMILY_DRUDDIGON">;
export type PokemonFamilyV0622FamilyGolett = PokemonFamily<"V0622_FAMILY_GOLETT">;
export type PokemonFamilyV0624FamilyPawniard = PokemonFamily<"V0624_FAMILY_PAWNIARD">;
export type PokemonFamilyV0626FamilyBouffalant = PokemonFamily<"V0626_FAMILY_BOUFFALANT">;
export type PokemonFamilyV0627FamilyRufflet = PokemonFamily<"V0627_FAMILY_RUFFLET">;
export type PokemonFamilyV0629FamilyVullaby = PokemonFamily<"V0629_FAMILY_VULLABY">;
export type PokemonFamilyV0631FamilyHeatmor = PokemonFamily<"V0631_FAMILY_HEATMOR">;
export type PokemonFamilyV0632FamilyDurant = PokemonFamily<"V0632_FAMILY_DURANT">;
export type PokemonFamilyV0633FamilyDeino = PokemonFamily<"V0633_FAMILY_DEINO">;
export type PokemonFamilyV0636FamilyLarvesta = PokemonFamily<"V0636_FAMILY_LARVESTA">;
export type PokemonFamilyV0638FamilyCobalion = PokemonFamily<"V0638_FAMILY_COBALION">;
export type PokemonFamilyV0639FamilyTerrakion = PokemonFamily<"V0639_FAMILY_TERRAKION">;
export type PokemonFamilyV0640FamilyVirizion = PokemonFamily<"V0640_FAMILY_VIRIZION">;
export type PokemonFamilyV0641FamilyTornadus = PokemonFamily<"V0641_FAMILY_TORNADUS">;
export type PokemonFamilyV0642FamilyThundurus = PokemonFamily<"V0642_FAMILY_THUNDURUS">;
export type PokemonFamilyV0643FamilyReshiram = PokemonFamily<"V0643_FAMILY_RESHIRAM">;
export type PokemonFamilyV0644FamilyZekrom = PokemonFamily<"V0644_FAMILY_ZEKROM">;
export type PokemonFamilyV0645FamilyLandorus = PokemonFamily<"V0645_FAMILY_LANDORUS">;
export type PokemonFamilyV0646FamilyKyurem = PokemonFamily<"V0646_FAMILY_KYUREM">;
export type PokemonFamilyV0647FamilyKeldeo = PokemonFamily<"V0647_FAMILY_KELDEO">;
export type PokemonFamilyV0648FamilyMeloetta = PokemonFamily<"V0648_FAMILY_MELOETTA">;
export type PokemonFamilyV0649FamilyGenesect = PokemonFamily<"V0649_FAMILY_GENESECT">;
export type PokemonFamilyV0650FamilyChespin = PokemonFamily<"V0650_FAMILY_CHESPIN">;
export type PokemonFamilyV0653FamilyFennekin = PokemonFamily<"V0653_FAMILY_FENNEKIN">;
export type PokemonFamilyV0656FamilyFroakie = PokemonFamily<"V0656_FAMILY_FROAKIE">;
export type PokemonFamilyV0659FamilyBunnelby = PokemonFamily<"V0659_FAMILY_BUNNELBY">;
export type PokemonFamilyV0661FamilyFletchling = PokemonFamily<"V0661_FAMILY_FLETCHLING">;
export type PokemonFamilyV0664FamilyScatterbug = PokemonFamily<"V0664_FAMILY_SCATTERBUG">;
export type PokemonFamilyV0667FamilyLitleo = PokemonFamily<"V0667_FAMILY_LITLEO">;
export type PokemonFamilyV0669FamilyFlabebe = PokemonFamily<"V0669_FAMILY_FLABEBE">;
export type PokemonFamilyV0672FamilySkiddo = PokemonFamily<"V0672_FAMILY_SKIDDO">;
export type PokemonFamilyV0674FamilyPancham = PokemonFamily<"V0674_FAMILY_PANCHAM">;
export type PokemonFamilyV0676FamilyFurfrou = PokemonFamily<"V0676_FAMILY_FURFROU">;
export type PokemonFamilyV0677FamilyEspurr = PokemonFamily<"V0677_FAMILY_ESPURR">;
export type PokemonFamilyV0679FamilyHonedge = PokemonFamily<"V0679_FAMILY_HONEDGE">;
export type PokemonFamilyV0682FamilySpritzee = PokemonFamily<"V0682_FAMILY_SPRITZEE">;
export type PokemonFamilyV0684FamilySwirlix = PokemonFamily<"V0684_FAMILY_SWIRLIX">;
export type PokemonFamilyV0686FamilyInkay = PokemonFamily<"V0686_FAMILY_INKAY">;
export type PokemonFamilyV0688FamilyBinacle = PokemonFamily<"V0688_FAMILY_BINACLE">;
export type PokemonFamilyV0690FamilySkrelp = PokemonFamily<"V0690_FAMILY_SKRELP">;
export type PokemonFamilyV0692FamilyClauncher = PokemonFamily<"V0692_FAMILY_CLAUNCHER">;
export type PokemonFamilyV0694FamilyHelioptile = PokemonFamily<"V0694_FAMILY_HELIOPTILE">;
export type PokemonFamilyV0696FamilyTyrunt = PokemonFamily<"V0696_FAMILY_TYRUNT">;
export type PokemonFamilyV0698FamilyAmaura = PokemonFamily<"V0698_FAMILY_AMAURA">;
export type PokemonFamilyV0701FamilyHawlucha = PokemonFamily<"V0701_FAMILY_HAWLUCHA">;
export type PokemonFamilyV0702FamilyDedenne = PokemonFamily<"V0702_FAMILY_DEDENNE">;
export type PokemonFamilyV0703FamilyCarbink = PokemonFamily<"V0703_FAMILY_CARBINK">;
export type PokemonFamilyV0704FamilyGoomy = PokemonFamily<"V0704_FAMILY_GOOMY">;
export type PokemonFamilyV0707FamilyKlefki = PokemonFamily<"V0707_FAMILY_KLEFKI">;
export type PokemonFamilyV0708FamilyPhantump = PokemonFamily<"V0708_FAMILY_PHANTUMP">;
export type PokemonFamilyV0710FamilyPumpkaboo = PokemonFamily<"V0710_FAMILY_PUMPKABOO">;
export type PokemonFamilyV0712FamilyBergmite = PokemonFamily<"V0712_FAMILY_BERGMITE">;
export type PokemonFamilyV0714FamilyNoibat = PokemonFamily<"V0714_FAMILY_NOIBAT">;
export type PokemonFamilyV0716FamilyXerneas = PokemonFamily<"V0716_FAMILY_XERNEAS">;
export type PokemonFamilyV0717FamilyYveltal = PokemonFamily<"V0717_FAMILY_YVELTAL">;
export type PokemonFamilyV0718FamilyZygarde = PokemonFamily<"V0718_FAMILY_ZYGARDE">;
export type PokemonFamilyV0719FamilyDiancie = PokemonFamily<"V0719_FAMILY_DIANCIE">;
export type PokemonFamilyV0720FamilyHoopa = PokemonFamily<"V0720_FAMILY_HOOPA">;
export type PokemonFamilyV0721FamilyVolcanion = PokemonFamily<"V0721_FAMILY_VOLCANION">;
export type PokemonFamilyV0722FamilyRowlet = PokemonFamily<"V0722_FAMILY_ROWLET">;
export type PokemonFamilyV0725FamilyLitten = PokemonFamily<"V0725_FAMILY_LITTEN">;
export type PokemonFamilyV0728FamilyPopplio = PokemonFamily<"V0728_FAMILY_POPPLIO">;
export type PokemonFamilyV0731FamilyPikipek = PokemonFamily<"V0731_FAMILY_PIKIPEK">;
export type PokemonFamilyV0734FamilyYungoos = PokemonFamily<"V0734_FAMILY_YUNGOOS">;
export type PokemonFamilyV0736FamilyGrubbin = PokemonFamily<"V0736_FAMILY_GRUBBIN">;
export type PokemonFamilyV0739FamilyCrabrawler = PokemonFamily<"V0739_FAMILY_CRABRAWLER">;
export type PokemonFamilyV0741FamilyOricorio = PokemonFamily<"V0741_FAMILY_ORICORIO">;
export type PokemonFamilyV0742FamilyCutiefly = PokemonFamily<"V0742_FAMILY_CUTIEFLY">;
export type PokemonFamilyV0744FamilyRockruff = PokemonFamily<"V0744_FAMILY_ROCKRUFF">;
export type PokemonFamilyV0746FamilyWishiwashi = PokemonFamily<"V0746_FAMILY_WISHIWASHI">;
export type PokemonFamilyV0747FamilyMareanie = PokemonFamily<"V0747_FAMILY_MAREANIE">;
export type PokemonFamilyV0749FamilyMudbray = PokemonFamily<"V0749_FAMILY_MUDBRAY">;
export type PokemonFamilyV0751FamilyDewpider = PokemonFamily<"V0751_FAMILY_DEWPIDER">;
export type PokemonFamilyV0753FamilyFomantis = PokemonFamily<"V0753_FAMILY_FOMANTIS">;
export type PokemonFamilyV0755FamilyMorelull = PokemonFamily<"V0755_FAMILY_MORELULL">;
export type PokemonFamilyV0757FamilySalandit = PokemonFamily<"V0757_FAMILY_SALANDIT">;
export type PokemonFamilyV0759FamilyStufful = PokemonFamily<"V0759_FAMILY_STUFFUL">;
export type PokemonFamilyV0761FamilyBounsweet = PokemonFamily<"V0761_FAMILY_BOUNSWEET">;
export type PokemonFamilyV0764FamilyComfey = PokemonFamily<"V0764_FAMILY_COMFEY">;
export type PokemonFamilyV0765FamilyOranguru = PokemonFamily<"V0765_FAMILY_ORANGURU">;
export type PokemonFamilyV0766FamilyPassimian = PokemonFamily<"V0766_FAMILY_PASSIMIAN">;
export type PokemonFamilyV0767FamilyWimpod = PokemonFamily<"V0767_FAMILY_WIMPOD">;
export type PokemonFamilyV0769FamilySandygast = PokemonFamily<"V0769_FAMILY_SANDYGAST">;
export type PokemonFamilyV0771FamilyPyukumuku = PokemonFamily<"V0771_FAMILY_PYUKUMUKU">;
export type PokemonFamilyV0772FamilyTypeNull = PokemonFamily<"V0772_FAMILY_TYPE_NULL">;
export type PokemonFamilyV0774FamilyMinior = PokemonFamily<"V0774_FAMILY_MINIOR">;
export type PokemonFamilyV0775FamilyKomala = PokemonFamily<"V0775_FAMILY_KOMALA">;
export type PokemonFamilyV0776FamilyTurtonator = PokemonFamily<"V0776_FAMILY_TURTONATOR">;
export type PokemonFamilyV0777FamilyTogedemaru = PokemonFamily<"V0777_FAMILY_TOGEDEMARU">;
export type PokemonFamilyV0778FamilyMimikyu = PokemonFamily<"V0778_FAMILY_MIMIKYU">;
export type PokemonFamilyV0779FamilyBruxish = PokemonFamily<"V0779_FAMILY_BRUXISH">;
export type PokemonFamilyV0780FamilyDrampa = PokemonFamily<"V0780_FAMILY_DRAMPA">;
export type PokemonFamilyV0781FamilyDhelmise = PokemonFamily<"V0781_FAMILY_DHELMISE">;
export type PokemonFamilyV0782FamilyJangmoO = PokemonFamily<"V0782_FAMILY_JANGMO_O">;
export type PokemonFamilyV0785FamilyTapuKoko = PokemonFamily<"V0785_FAMILY_TAPU_KOKO">;
export type PokemonFamilyV0786FamilyTapuLele = PokemonFamily<"V0786_FAMILY_TAPU_LELE">;
export type PokemonFamilyV0787FamilyTapuBulu = PokemonFamily<"V0787_FAMILY_TAPU_BULU">;
export type PokemonFamilyV0788FamilyTapuFini = PokemonFamily<"V0788_FAMILY_TAPU_FINI">;
export type PokemonFamilyV0789FamilyCosmog = PokemonFamily<"V0789_FAMILY_COSMOG">;
export type PokemonFamilyV0793FamilyNihilego = PokemonFamily<"V0793_FAMILY_NIHILEGO">;
export type PokemonFamilyV0794FamilyBuzzwole = PokemonFamily<"V0794_FAMILY_BUZZWOLE">;
export type PokemonFamilyV0795FamilyPheromosa = PokemonFamily<"V0795_FAMILY_PHEROMOSA">;
export type PokemonFamilyV0796FamilyXurkitree = PokemonFamily<"V0796_FAMILY_XURKITREE">;
export type PokemonFamilyV0797FamilyCelesteela = PokemonFamily<"V0797_FAMILY_CELESTEELA">;
export type PokemonFamilyV0798FamilyKartana = PokemonFamily<"V0798_FAMILY_KARTANA">;
export type PokemonFamilyV0799FamilyGuzzlord = PokemonFamily<"V0799_FAMILY_GUZZLORD">;
export type PokemonFamilyV0800FamilyNecrozma = PokemonFamily<"V0800_FAMILY_NECROZMA">;
export type PokemonFamilyV0801FamilyMagearna = PokemonFamily<"V0801_FAMILY_MAGEARNA">;
export type PokemonFamilyV0802FamilyMarshadow = PokemonFamily<"V0802_FAMILY_MARSHADOW">;
export type PokemonFamilyV0803FamilyPoipole = PokemonFamily<"V0803_FAMILY_POIPOLE">;
export type PokemonFamilyV0805FamilyStakataka = PokemonFamily<"V0805_FAMILY_STAKATAKA">;
export type PokemonFamilyV0806FamilyBlacephalon = PokemonFamily<"V0806_FAMILY_BLACEPHALON">;
export type PokemonFamilyV0807FamilyZeraora = PokemonFamily<"V0807_FAMILY_ZERAORA">;
export type PokemonFamilyV0808FamilyMeltan = PokemonFamily<"V0808_FAMILY_MELTAN">;
export type PokemonFamilyV0810FamilyGrookey = PokemonFamily<"V0810_FAMILY_GROOKEY">;
export type PokemonFamilyV0813FamilyScorbunny = PokemonFamily<"V0813_FAMILY_SCORBUNNY">;
export type PokemonFamilyV0816FamilySobble = PokemonFamily<"V0816_FAMILY_SOBBLE">;
export type PokemonFamilyV0819FamilySkwovet = PokemonFamily<"V0819_FAMILY_SKWOVET">;
export type PokemonFamilyV0821FamilyRookidee = PokemonFamily<"V0821_FAMILY_ROOKIDEE">;
export type PokemonFamilyV0824FamilyBlipbug = PokemonFamily<"V0824_FAMILY_BLIPBUG">;
export type PokemonFamilyV0827FamilyNickit = PokemonFamily<"V0827_FAMILY_NICKIT">;
export type PokemonFamilyV0829FamilyGossifleur = PokemonFamily<"V0829_FAMILY_GOSSIFLEUR">;
export type PokemonFamilyV0831FamilyWooloo = PokemonFamily<"V0831_FAMILY_WOOLOO">;
export type PokemonFamilyV0833FamilyChewtle = PokemonFamily<"V0833_FAMILY_CHEWTLE">;
export type PokemonFamilyV0835FamilyYamper = PokemonFamily<"V0835_FAMILY_YAMPER">;
export type PokemonFamilyV0837FamilyRolycoly = PokemonFamily<"V0837_FAMILY_ROLYCOLY">;
export type PokemonFamilyV0840FamilyApplin = PokemonFamily<"V0840_FAMILY_APPLIN">;
export type PokemonFamilyV0843FamilySilicobra = PokemonFamily<"V0843_FAMILY_SILICOBRA">;
export type PokemonFamilyV0845FamilyCramorant = PokemonFamily<"V0845_FAMILY_CRAMORANT">;
export type PokemonFamilyV0846FamilyArrokuda = PokemonFamily<"V0846_FAMILY_ARROKUDA">;
export type PokemonFamilyV0848FamilyToxel = PokemonFamily<"V0848_FAMILY_TOXEL">;
export type PokemonFamilyV0850FamilySizzlipede = PokemonFamily<"V0850_FAMILY_SIZZLIPEDE">;
export type PokemonFamilyV0852FamilyClobbopus = PokemonFamily<"V0852_FAMILY_CLOBBOPUS">;
export type PokemonFamilyV0854FamilySinistea = PokemonFamily<"V0854_FAMILY_SINISTEA">;
export type PokemonFamilyV0856FamilyHatenna = PokemonFamily<"V0856_FAMILY_HATENNA">;
export type PokemonFamilyV0859FamilyImpidimp = PokemonFamily<"V0859_FAMILY_IMPIDIMP">;
export type PokemonFamilyV0868FamilyMilcery = PokemonFamily<"V0868_FAMILY_MILCERY">;
export type PokemonFamilyV0870FamilyFalinks = PokemonFamily<"V0870_FAMILY_FALINKS">;
export type PokemonFamilyV0871FamilyPincurchin = PokemonFamily<"V0871_FAMILY_PINCURCHIN">;
export type PokemonFamilyV0872FamilySnom = PokemonFamily<"V0872_FAMILY_SNOM">;
export type PokemonFamilyV0874FamilyStonjourner = PokemonFamily<"V0874_FAMILY_STONJOURNER">;
export type PokemonFamilyV0875FamilyEiscue = PokemonFamily<"V0875_FAMILY_EISCUE">;
export type PokemonFamilyV0876FamilyIndeedee = PokemonFamily<"V0876_FAMILY_INDEEDEE">;
export type PokemonFamilyV0877FamilyMorpeko = PokemonFamily<"V0877_FAMILY_MORPEKO">;
export type PokemonFamilyV0878FamilyCufant = PokemonFamily<"V0878_FAMILY_CUFANT">;
export type PokemonFamilyV0880FamilyDracozolt = PokemonFamily<"V0880_FAMILY_DRACOZOLT">;
export type PokemonFamilyV0881FamilyArctozolt = PokemonFamily<"V0881_FAMILY_ARCTOZOLT">;
export type PokemonFamilyV0882FamilyDracovish = PokemonFamily<"V0882_FAMILY_DRACOVISH">;
export type PokemonFamilyV0883FamilyArctovish = PokemonFamily<"V0883_FAMILY_ARCTOVISH">;
export type PokemonFamilyV0884FamilyDuraludon = PokemonFamily<"V0884_FAMILY_DURALUDON">;
export type PokemonFamilyV0885FamilyDreepy = PokemonFamily<"V0885_FAMILY_DREEPY">;
export type PokemonFamilyV0888FamilyZacian = PokemonFamily<"V0888_FAMILY_ZACIAN">;
export type PokemonFamilyV0889FamilyZamazenta = PokemonFamily<"V0889_FAMILY_ZAMAZENTA">;
export type PokemonFamilyV0890FamilyEternatus = PokemonFamily<"V0890_FAMILY_ETERNATUS">;
export type PokemonFamilyV0891FamilyKubfu = PokemonFamily<"V0891_FAMILY_KUBFU">;
export type PokemonFamilyV0893FamilyZarude = PokemonFamily<"V0893_FAMILY_ZARUDE">;
export type PokemonFamilyV0894FamilyRegieleki = PokemonFamily<"V0894_FAMILY_REGIELEKI">;
export type PokemonFamilyV0895FamilyRegidrago = PokemonFamily<"V0895_FAMILY_REGIDRAGO">;
export type PokemonFamilyV0896FamilyGlastrier = PokemonFamily<"V0896_FAMILY_GLASTRIER">;
export type PokemonFamilyV0897FamilySpectrier = PokemonFamily<"V0897_FAMILY_SPECTRIER">;
export type PokemonFamilyV0898FamilyCalyrex = PokemonFamily<"V0898_FAMILY_CALYREX">;
export type PokemonFamilyV0905FamilyEnamorus = PokemonFamily<"V0905_FAMILY_ENAMORUS">;
export type PokemonFamilyV0906FamilySprigatito = PokemonFamily<"V0906_FAMILY_SPRIGATITO">;
export type PokemonFamilyV0909FamilyFuecoco = PokemonFamily<"V0909_FAMILY_FUECOCO">;
export type PokemonFamilyV0912FamilyQuaxly = PokemonFamily<"V0912_FAMILY_QUAXLY">;
export type PokemonFamilyV0915FamilyLechonk = PokemonFamily<"V0915_FAMILY_LECHONK">;
export type PokemonFamilyV0917FamilyTarountula = PokemonFamily<"V0917_FAMILY_TAROUNTULA">;
export type PokemonFamilyV0919FamilyNymble = PokemonFamily<"V0919_FAMILY_NYMBLE">;
export type PokemonFamilyV0921FamilyPawmi = PokemonFamily<"V0921_FAMILY_PAWMI">;
export type PokemonFamilyV0924FamilyTandemaus = PokemonFamily<"V0924_FAMILY_TANDEMAUS">;
export type PokemonFamilyV0926FamilyFidough = PokemonFamily<"V0926_FAMILY_FIDOUGH">;
export type PokemonFamilyV0928FamilySmoliv = PokemonFamily<"V0928_FAMILY_SMOLIV">;
export type PokemonFamilyV0931FamilySquawkabilly = PokemonFamily<"V0931_FAMILY_SQUAWKABILLY">;
export type PokemonFamilyV0932FamilyNacli = PokemonFamily<"V0932_FAMILY_NACLI">;
export type PokemonFamilyV0935FamilyCharcadet = PokemonFamily<"V0935_FAMILY_CHARCADET">;
export type PokemonFamilyV0938FamilyTadbulb = PokemonFamily<"V0938_FAMILY_TADBULB">;
export type PokemonFamilyV0940FamilyWattrel = PokemonFamily<"V0940_FAMILY_WATTREL">;
export type PokemonFamilyV0942FamilyMaschiff = PokemonFamily<"V0942_FAMILY_MASCHIFF">;
export type PokemonFamilyV0944FamilyShroodle = PokemonFamily<"V0944_FAMILY_SHROODLE">;
export type PokemonFamilyV0946FamilyBramblin = PokemonFamily<"V0946_FAMILY_BRAMBLIN">;
export type PokemonFamilyV0948FamilyToedscool = PokemonFamily<"V0948_FAMILY_TOEDSCOOL">;
export type PokemonFamilyV0950FamilyKlawf = PokemonFamily<"V0950_FAMILY_KLAWF">;
export type PokemonFamilyV0951FamilyCapsakid = PokemonFamily<"V0951_FAMILY_CAPSAKID">;
export type PokemonFamilyV0953FamilyRellor = PokemonFamily<"V0953_FAMILY_RELLOR">;
export type PokemonFamilyV0955FamilyFlittle = PokemonFamily<"V0955_FAMILY_FLITTLE">;
export type PokemonFamilyV0957FamilyTinkatink = PokemonFamily<"V0957_FAMILY_TINKATINK">;
export type PokemonFamilyV0960FamilyWiglett = PokemonFamily<"V0960_FAMILY_WIGLETT">;
export type PokemonFamilyV0962FamilyBombirdier = PokemonFamily<"V0962_FAMILY_BOMBIRDIER">;
export type PokemonFamilyV0963FamilyFinizen = PokemonFamily<"V0963_FAMILY_FINIZEN">;
export type PokemonFamilyV0965FamilyVaroom = PokemonFamily<"V0965_FAMILY_VAROOM">;
export type PokemonFamilyV0967FamilyCyclizar = PokemonFamily<"V0967_FAMILY_CYCLIZAR">;
export type PokemonFamilyV0968FamilyOrthworm = PokemonFamily<"V0968_FAMILY_ORTHWORM">;
export type PokemonFamilyV0969FamilyGlimmet = PokemonFamily<"V0969_FAMILY_GLIMMET">;
export type PokemonFamilyV0971FamilyGreavard = PokemonFamily<"V0971_FAMILY_GREAVARD">;
export type PokemonFamilyV0973FamilyFlamigo = PokemonFamily<"V0973_FAMILY_FLAMIGO">;
export type PokemonFamilyV0974FamilyCetoddle = PokemonFamily<"V0974_FAMILY_CETODDLE">;
export type PokemonFamilyV0976FamilyVeluza = PokemonFamily<"V0976_FAMILY_VELUZA">;
export type PokemonFamilyV0977FamilyDondozo = PokemonFamily<"V0977_FAMILY_DONDOZO">;
export type PokemonFamilyV0978FamilyTatsugiri = PokemonFamily<"V0978_FAMILY_TATSUGIRI">;
export type PokemonFamilyV0984FamilyGreattusk = PokemonFamily<"V0984_FAMILY_GREATTUSK">;
export type PokemonFamilyV0985FamilyScreamtail = PokemonFamily<"V0985_FAMILY_SCREAMTAIL">;
export type PokemonFamilyV0986FamilyBrutebonnet = PokemonFamily<"V0986_FAMILY_BRUTEBONNET">;
export type PokemonFamilyV0987FamilyFluttermane = PokemonFamily<"V0987_FAMILY_FLUTTERMANE">;
export type PokemonFamilyV0988FamilySlitherwing = PokemonFamily<"V0988_FAMILY_SLITHERWING">;
export type PokemonFamilyV0989FamilySandyshocks = PokemonFamily<"V0989_FAMILY_SANDYSHOCKS">;
export type PokemonFamilyV0990FamilyIrontreads = PokemonFamily<"V0990_FAMILY_IRONTREADS">;
export type PokemonFamilyV0991FamilyIronbundle = PokemonFamily<"V0991_FAMILY_IRONBUNDLE">;
export type PokemonFamilyV0992FamilyIronhands = PokemonFamily<"V0992_FAMILY_IRONHANDS">;
export type PokemonFamilyV0993FamilyIronjugulis = PokemonFamily<"V0993_FAMILY_IRONJUGULIS">;
export type PokemonFamilyV0994FamilyIronmoth = PokemonFamily<"V0994_FAMILY_IRONMOTH">;
export type PokemonFamilyV0995FamilyIronthorns = PokemonFamily<"V0995_FAMILY_IRONTHORNS">;
export type PokemonFamilyV0996FamilyFrigibax = PokemonFamily<"V0996_FAMILY_FRIGIBAX">;
export type PokemonFamilyV0999FamilyGimmighoul = PokemonFamily<"V0999_FAMILY_GIMMIGHOUL">;
export type PokemonFamilyV1001FamilyWochien = PokemonFamily<"V1001_FAMILY_WOCHIEN">;
export type PokemonFamilyV1002FamilyChienpao = PokemonFamily<"V1002_FAMILY_CHIENPAO">;
export type PokemonFamilyV1003FamilyTinglu = PokemonFamily<"V1003_FAMILY_TINGLU">;
export type PokemonFamilyV1004FamilyChiyu = PokemonFamily<"V1004_FAMILY_CHIYU">;
export type PokemonFamilyV1005FamilyRoaringmoon = PokemonFamily<"V1005_FAMILY_ROARINGMOON">;
export type PokemonFamilyV1006FamilyIronvaliant = PokemonFamily<"V1006_FAMILY_IRONVALIANT">;
export type PokemonFamilyV1007FamilyKoraidon = PokemonFamily<"V1007_FAMILY_KORAIDON">;
export type PokemonFamilyV1008FamilyMiraidon = PokemonFamily<"V1008_FAMILY_MIRAIDON">;
export type PokemonFamilyV1009FamilyWalkingwake = PokemonFamily<"V1009_FAMILY_WALKINGWAKE">;
export type PokemonFamilyV1010FamilyIronleaves = PokemonFamily<"V1010_FAMILY_IRONLEAVES">;
export type PokemonFamilyV1012FamilyPoltchageist = PokemonFamily<"V1012_FAMILY_POLTCHAGEIST">;
export type PokemonFamilyV1014FamilyOkidogi = PokemonFamily<"V1014_FAMILY_OKIDOGI">;
export type PokemonFamilyV1015FamilyMunkidori = PokemonFamily<"V1015_FAMILY_MUNKIDORI">;
export type PokemonFamilyV1016FamilyFezandipiti = PokemonFamily<"V1016_FAMILY_FEZANDIPITI">;
export type PokemonFamilyV1017FamilyOgerpon = PokemonFamily<"V1017_FAMILY_OGERPON">;
export type PokemonFamilyV1020FamilyGougingfire = PokemonFamily<"V1020_FAMILY_GOUGINGFIRE">;
export type PokemonFamilyV1021FamilyRagingbolt = PokemonFamily<"V1021_FAMILY_RAGINGBOLT">;
export type PokemonFamilyV1022FamilyIronboulder = PokemonFamily<"V1022_FAMILY_IRONBOULDER">;
export type PokemonFamilyV1023FamilyIroncrown = PokemonFamily<"V1023_FAMILY_IRONCROWN">;
export type PokemonFamilyV1024FamilyTerapagos = PokemonFamily<"V1024_FAMILY_TERAPAGOS">;
export type PokemonFamilyV1025FamilyPecharunt = PokemonFamily<"V1025_FAMILY_PECHARUNT">;

export type PokemonFamilyMasterfileEntry =
	| PokemonFamilyV0001FamilyBulbasaur
	| PokemonFamilyV0004FamilyCharmander
	| PokemonFamilyV0007FamilySquirtle
	| PokemonFamilyV0010FamilyCaterpie
	| PokemonFamilyV0013FamilyWeedle
	| PokemonFamilyV0016FamilyPidgey
	| PokemonFamilyV0019FamilyRattata
	| PokemonFamilyV0021FamilySpearow
	| PokemonFamilyV0023FamilyEkans
	| PokemonFamilyV0025FamilyPikachu
	| PokemonFamilyV0027FamilySandshrew
	| PokemonFamilyV0029FamilyNidoran
	| PokemonFamilyV0032FamilyNidoran
	| PokemonFamilyV0035FamilyClefairy
	| PokemonFamilyV0037FamilyVulpix
	| PokemonFamilyV0039FamilyJigglypuff
	| PokemonFamilyV0041FamilyZubat
	| PokemonFamilyV0043FamilyOddish
	| PokemonFamilyV0046FamilyParas
	| PokemonFamilyV0048FamilyVenonat
	| PokemonFamilyV0050FamilyDiglett
	| PokemonFamilyV0052FamilyMeowth
	| PokemonFamilyV0054FamilyPsyduck
	| PokemonFamilyV0056FamilyMankey
	| PokemonFamilyV0058FamilyGrowlithe
	| PokemonFamilyV0060FamilyPoliwag
	| PokemonFamilyV0063FamilyAbra
	| PokemonFamilyV0066FamilyMachop
	| PokemonFamilyV0069FamilyBellsprout
	| PokemonFamilyV0072FamilyTentacool
	| PokemonFamilyV0074FamilyGeodude
	| PokemonFamilyV0077FamilyPonyta
	| PokemonFamilyV0079FamilySlowpoke
	| PokemonFamilyV0081FamilyMagnemite
	| PokemonFamilyV0083FamilyFarfetchd
	| PokemonFamilyV0084FamilyDoduo
	| PokemonFamilyV0086FamilySeel
	| PokemonFamilyV0088FamilyGrimer
	| PokemonFamilyV0090FamilyShellder
	| PokemonFamilyV0092FamilyGastly
	| PokemonFamilyV0095FamilyOnix
	| PokemonFamilyV0096FamilyDrowzee
	| PokemonFamilyV0098FamilyKrabby
	| PokemonFamilyV0100FamilyVoltorb
	| PokemonFamilyV0102FamilyExeggcute
	| PokemonFamilyV0104FamilyCubone
	| PokemonFamilyV0108FamilyLickitung
	| PokemonFamilyV0109FamilyKoffing
	| PokemonFamilyV0111FamilyRhyhorn
	| PokemonFamilyV0113FamilyChansey
	| PokemonFamilyV0114FamilyTangela
	| PokemonFamilyV0115FamilyKangaskhan
	| PokemonFamilyV0116FamilyHorsea
	| PokemonFamilyV0118FamilyGoldeen
	| PokemonFamilyV0120FamilyStaryu
	| PokemonFamilyV0122FamilyMrMime
	| PokemonFamilyV0123FamilyScyther
	| PokemonFamilyV0124FamilyJynx
	| PokemonFamilyV0125FamilyElectabuzz
	| PokemonFamilyV0126FamilyMagmar
	| PokemonFamilyV0127FamilyPinsir
	| PokemonFamilyV0128FamilyTauros
	| PokemonFamilyV0129FamilyMagikarp
	| PokemonFamilyV0131FamilyLapras
	| PokemonFamilyV0132FamilyDitto
	| PokemonFamilyV0133FamilyEevee
	| PokemonFamilyV0137FamilyPorygon
	| PokemonFamilyV0138FamilyOmanyte
	| PokemonFamilyV0140FamilyKabuto
	| PokemonFamilyV0142FamilyAerodactyl
	| PokemonFamilyV0143FamilySnorlax
	| PokemonFamilyV0144FamilyArticuno
	| PokemonFamilyV0145FamilyZapdos
	| PokemonFamilyV0146FamilyMoltres
	| PokemonFamilyV0147FamilyDratini
	| PokemonFamilyV0150FamilyMewtwo
	| PokemonFamilyV0151FamilyMew
	| PokemonFamilyV0152FamilyChikorita
	| PokemonFamilyV0155FamilyCyndaquil
	| PokemonFamilyV0158FamilyTotodile
	| PokemonFamilyV0161FamilySentret
	| PokemonFamilyV0163FamilyHoothoot
	| PokemonFamilyV0165FamilyLedyba
	| PokemonFamilyV0167FamilySpinarak
	| PokemonFamilyV0170FamilyChinchou
	| PokemonFamilyV0175FamilyTogepi
	| PokemonFamilyV0177FamilyNatu
	| PokemonFamilyV0179FamilyMareep
	| PokemonFamilyV0183FamilyMarill
	| PokemonFamilyV0185FamilySudowoodo
	| PokemonFamilyV0187FamilyHoppip
	| PokemonFamilyV0190FamilyAipom
	| PokemonFamilyV0191FamilySunkern
	| PokemonFamilyV0193FamilyYanma
	| PokemonFamilyV0194FamilyWooper
	| PokemonFamilyV0198FamilyMurkrow
	| PokemonFamilyV0200FamilyMisdreavus
	| PokemonFamilyV0201FamilyUnown
	| PokemonFamilyV0202FamilyWobbuffet
	| PokemonFamilyV0203FamilyGirafarig
	| PokemonFamilyV0204FamilyPineco
	| PokemonFamilyV0206FamilyDunsparce
	| PokemonFamilyV0207FamilyGligar
	| PokemonFamilyV0209FamilySnubbull
	| PokemonFamilyV0211FamilyQwilfish
	| PokemonFamilyV0213FamilyShuckle
	| PokemonFamilyV0214FamilyHeracross
	| PokemonFamilyV0215FamilySneasel
	| PokemonFamilyV0216FamilyTeddiursa
	| PokemonFamilyV0218FamilySlugma
	| PokemonFamilyV0220FamilySwinub
	| PokemonFamilyV0222FamilyCorsola
	| PokemonFamilyV0223FamilyRemoraid
	| PokemonFamilyV0225FamilyDelibird
	| PokemonFamilyV0226FamilyMantine
	| PokemonFamilyV0227FamilySkarmory
	| PokemonFamilyV0228FamilyHoundour
	| PokemonFamilyV0231FamilyPhanpy
	| PokemonFamilyV0234FamilyStantler
	| PokemonFamilyV0235FamilySmeargle
	| PokemonFamilyV0236FamilyTyrogue
	| PokemonFamilyV0241FamilyMiltank
	| PokemonFamilyV0243FamilyRaikou
	| PokemonFamilyV0244FamilyEntei
	| PokemonFamilyV0245FamilySuicune
	| PokemonFamilyV0246FamilyLarvitar
	| PokemonFamilyV0249FamilyLugia
	| PokemonFamilyV0250FamilyHoOh
	| PokemonFamilyV0251FamilyCelebi
	| PokemonFamilyV0252FamilyTreecko
	| PokemonFamilyV0255FamilyTorchic
	| PokemonFamilyV0258FamilyMudkip
	| PokemonFamilyV0261FamilyPoochyena
	| PokemonFamilyV0263FamilyZigzagoon
	| PokemonFamilyV0265FamilyWurmple
	| PokemonFamilyV0270FamilyLotad
	| PokemonFamilyV0273FamilySeedot
	| PokemonFamilyV0276FamilyTaillow
	| PokemonFamilyV0278FamilyWingull
	| PokemonFamilyV0280FamilyRalts
	| PokemonFamilyV0283FamilySurskit
	| PokemonFamilyV0285FamilyShroomish
	| PokemonFamilyV0287FamilySlakoth
	| PokemonFamilyV0290FamilyNincada
	| PokemonFamilyV0293FamilyWhismur
	| PokemonFamilyV0296FamilyMakuhita
	| PokemonFamilyV0299FamilyNosepass
	| PokemonFamilyV0300FamilySkitty
	| PokemonFamilyV0302FamilySableye
	| PokemonFamilyV0303FamilyMawile
	| PokemonFamilyV0304FamilyAron
	| PokemonFamilyV0307FamilyMeditite
	| PokemonFamilyV0309FamilyElectrike
	| PokemonFamilyV0311FamilyPlusle
	| PokemonFamilyV0312FamilyMinun
	| PokemonFamilyV0313FamilyVolbeat
	| PokemonFamilyV0314FamilyIllumise
	| PokemonFamilyV0315FamilyRoselia
	| PokemonFamilyV0316FamilyGulpin
	| PokemonFamilyV0318FamilyCarvanha
	| PokemonFamilyV0320FamilyWailmer
	| PokemonFamilyV0322FamilyNumel
	| PokemonFamilyV0324FamilyTorkoal
	| PokemonFamilyV0325FamilySpoink
	| PokemonFamilyV0327FamilySpinda
	| PokemonFamilyV0328FamilyTrapinch
	| PokemonFamilyV0331FamilyCacnea
	| PokemonFamilyV0333FamilySwablu
	| PokemonFamilyV0335FamilyZangoose
	| PokemonFamilyV0336FamilySeviper
	| PokemonFamilyV0337FamilyLunatone
	| PokemonFamilyV0338FamilySolrock
	| PokemonFamilyV0339FamilyBarboach
	| PokemonFamilyV0341FamilyCorphish
	| PokemonFamilyV0343FamilyBaltoy
	| PokemonFamilyV0345FamilyLileep
	| PokemonFamilyV0347FamilyAnorith
	| PokemonFamilyV0349FamilyFeebas
	| PokemonFamilyV0351FamilyCastform
	| PokemonFamilyV0352FamilyKecleon
	| PokemonFamilyV0353FamilyShuppet
	| PokemonFamilyV0355FamilyDuskull
	| PokemonFamilyV0357FamilyTropius
	| PokemonFamilyV0358FamilyChimecho
	| PokemonFamilyV0359FamilyAbsol
	| PokemonFamilyV0361FamilySnorunt
	| PokemonFamilyV0363FamilySpheal
	| PokemonFamilyV0366FamilyClamperl
	| PokemonFamilyV0369FamilyRelicanth
	| PokemonFamilyV0370FamilyLuvdisc
	| PokemonFamilyV0371FamilyBagon
	| PokemonFamilyV0374FamilyBeldum
	| PokemonFamilyV0377FamilyRegirock
	| PokemonFamilyV0378FamilyRegice
	| PokemonFamilyV0379FamilyRegisteel
	| PokemonFamilyV0380FamilyLatias
	| PokemonFamilyV0381FamilyLatios
	| PokemonFamilyV0382FamilyKyogre
	| PokemonFamilyV0383FamilyGroudon
	| PokemonFamilyV0384FamilyRayquaza
	| PokemonFamilyV0385FamilyJirachi
	| PokemonFamilyV0386FamilyDeoxys
	| PokemonFamilyV0387FamilyTurtwig
	| PokemonFamilyV0390FamilyChimchar
	| PokemonFamilyV0393FamilyPiplup
	| PokemonFamilyV0396FamilyStarly
	| PokemonFamilyV0399FamilyBidoof
	| PokemonFamilyV0401FamilyKricketot
	| PokemonFamilyV0403FamilyShinx
	| PokemonFamilyV0408FamilyCranidos
	| PokemonFamilyV0410FamilyShieldon
	| PokemonFamilyV0412FamilyBurmy
	| PokemonFamilyV0415FamilyCombee
	| PokemonFamilyV0417FamilyPachirisu
	| PokemonFamilyV0418FamilyBuizel
	| PokemonFamilyV0420FamilyCherubi
	| PokemonFamilyV0422FamilyShellos
	| PokemonFamilyV0425FamilyDrifloon
	| PokemonFamilyV0427FamilyBuneary
	| PokemonFamilyV0431FamilyGlameow
	| PokemonFamilyV0434FamilyStunky
	| PokemonFamilyV0436FamilyBronzor
	| PokemonFamilyV0441FamilyChatot
	| PokemonFamilyV0442FamilySpiritomb
	| PokemonFamilyV0443FamilyGible
	| PokemonFamilyV0448FamilyLucario
	| PokemonFamilyV0449FamilyHippopotas
	| PokemonFamilyV0451FamilySkorupi
	| PokemonFamilyV0453FamilyCroagunk
	| PokemonFamilyV0455FamilyCarnivine
	| PokemonFamilyV0456FamilyFinneon
	| PokemonFamilyV0459FamilySnover
	| PokemonFamilyV0479FamilyRotom
	| PokemonFamilyV0480FamilyUxie
	| PokemonFamilyV0481FamilyMesprit
	| PokemonFamilyV0482FamilyAzelf
	| PokemonFamilyV0483FamilyDialga
	| PokemonFamilyV0484FamilyPalkia
	| PokemonFamilyV0485FamilyHeatran
	| PokemonFamilyV0486FamilyRegigigas
	| PokemonFamilyV0487FamilyGiratina
	| PokemonFamilyV0488FamilyCresselia
	| PokemonFamilyV0489FamilyPhione
	| PokemonFamilyV0490FamilyManaphy
	| PokemonFamilyV0491FamilyDarkrai
	| PokemonFamilyV0492FamilyShaymin
	| PokemonFamilyV0493FamilyArceus
	| PokemonFamilyV0494FamilyVictini
	| PokemonFamilyV0495FamilySnivy
	| PokemonFamilyV0498FamilyTepig
	| PokemonFamilyV0501FamilyOshawott
	| PokemonFamilyV0504FamilyPatrat
	| PokemonFamilyV0506FamilyLillipup
	| PokemonFamilyV0509FamilyPurrloin
	| PokemonFamilyV0511FamilyPansage
	| PokemonFamilyV0513FamilyPansear
	| PokemonFamilyV0515FamilyPanpour
	| PokemonFamilyV0517FamilyMunna
	| PokemonFamilyV0519FamilyPidove
	| PokemonFamilyV0522FamilyBlitzle
	| PokemonFamilyV0524FamilyRoggenrola
	| PokemonFamilyV0527FamilyWoobat
	| PokemonFamilyV0529FamilyDrilbur
	| PokemonFamilyV0531FamilyAudino
	| PokemonFamilyV0532FamilyTimburr
	| PokemonFamilyV0535FamilyTympole
	| PokemonFamilyV0538FamilyThroh
	| PokemonFamilyV0539FamilySawk
	| PokemonFamilyV0540FamilySewaddle
	| PokemonFamilyV0543FamilyVenipede
	| PokemonFamilyV0546FamilyCottonee
	| PokemonFamilyV0548FamilyPetilil
	| PokemonFamilyV0550FamilyBasculin
	| PokemonFamilyV0551FamilySandile
	| PokemonFamilyV0554FamilyDarumaka
	| PokemonFamilyV0556FamilyMaractus
	| PokemonFamilyV0557FamilyDwebble
	| PokemonFamilyV0559FamilyScraggy
	| PokemonFamilyV0561FamilySigilyph
	| PokemonFamilyV0562FamilyYamask
	| PokemonFamilyV0564FamilyTirtouga
	| PokemonFamilyV0566FamilyArchen
	| PokemonFamilyV0568FamilyTrubbish
	| PokemonFamilyV0570FamilyZorua
	| PokemonFamilyV0572FamilyMinccino
	| PokemonFamilyV0574FamilyGothita
	| PokemonFamilyV0577FamilySolosis
	| PokemonFamilyV0580FamilyDucklett
	| PokemonFamilyV0582FamilyVanillite
	| PokemonFamilyV0585FamilyDeerling
	| PokemonFamilyV0587FamilyEmolga
	| PokemonFamilyV0588FamilyKarrablast
	| PokemonFamilyV0590FamilyFoongus
	| PokemonFamilyV0592FamilyFrillish
	| PokemonFamilyV0594FamilyAlomomola
	| PokemonFamilyV0595FamilyJoltik
	| PokemonFamilyV0597FamilyFerroseed
	| PokemonFamilyV0599FamilyKlink
	| PokemonFamilyV0602FamilyTynamo
	| PokemonFamilyV0605FamilyElgyem
	| PokemonFamilyV0607FamilyLitwick
	| PokemonFamilyV0610FamilyAxew
	| PokemonFamilyV0613FamilyCubchoo
	| PokemonFamilyV0615FamilyCryogonal
	| PokemonFamilyV0616FamilyShelmet
	| PokemonFamilyV0618FamilyStunfisk
	| PokemonFamilyV0619FamilyMienfoo
	| PokemonFamilyV0621FamilyDruddigon
	| PokemonFamilyV0622FamilyGolett
	| PokemonFamilyV0624FamilyPawniard
	| PokemonFamilyV0626FamilyBouffalant
	| PokemonFamilyV0627FamilyRufflet
	| PokemonFamilyV0629FamilyVullaby
	| PokemonFamilyV0631FamilyHeatmor
	| PokemonFamilyV0632FamilyDurant
	| PokemonFamilyV0633FamilyDeino
	| PokemonFamilyV0636FamilyLarvesta
	| PokemonFamilyV0638FamilyCobalion
	| PokemonFamilyV0639FamilyTerrakion
	| PokemonFamilyV0640FamilyVirizion
	| PokemonFamilyV0641FamilyTornadus
	| PokemonFamilyV0642FamilyThundurus
	| PokemonFamilyV0643FamilyReshiram
	| PokemonFamilyV0644FamilyZekrom
	| PokemonFamilyV0645FamilyLandorus
	| PokemonFamilyV0646FamilyKyurem
	| PokemonFamilyV0647FamilyKeldeo
	| PokemonFamilyV0648FamilyMeloetta
	| PokemonFamilyV0649FamilyGenesect
	| PokemonFamilyV0650FamilyChespin
	| PokemonFamilyV0653FamilyFennekin
	| PokemonFamilyV0656FamilyFroakie
	| PokemonFamilyV0659FamilyBunnelby
	| PokemonFamilyV0661FamilyFletchling
	| PokemonFamilyV0664FamilyScatterbug
	| PokemonFamilyV0667FamilyLitleo
	| PokemonFamilyV0669FamilyFlabebe
	| PokemonFamilyV0672FamilySkiddo
	| PokemonFamilyV0674FamilyPancham
	| PokemonFamilyV0676FamilyFurfrou
	| PokemonFamilyV0677FamilyEspurr
	| PokemonFamilyV0679FamilyHonedge
	| PokemonFamilyV0682FamilySpritzee
	| PokemonFamilyV0684FamilySwirlix
	| PokemonFamilyV0686FamilyInkay
	| PokemonFamilyV0688FamilyBinacle
	| PokemonFamilyV0690FamilySkrelp
	| PokemonFamilyV0692FamilyClauncher
	| PokemonFamilyV0694FamilyHelioptile
	| PokemonFamilyV0696FamilyTyrunt
	| PokemonFamilyV0698FamilyAmaura
	| PokemonFamilyV0701FamilyHawlucha
	| PokemonFamilyV0702FamilyDedenne
	| PokemonFamilyV0703FamilyCarbink
	| PokemonFamilyV0704FamilyGoomy
	| PokemonFamilyV0707FamilyKlefki
	| PokemonFamilyV0708FamilyPhantump
	| PokemonFamilyV0710FamilyPumpkaboo
	| PokemonFamilyV0712FamilyBergmite
	| PokemonFamilyV0714FamilyNoibat
	| PokemonFamilyV0716FamilyXerneas
	| PokemonFamilyV0717FamilyYveltal
	| PokemonFamilyV0718FamilyZygarde
	| PokemonFamilyV0719FamilyDiancie
	| PokemonFamilyV0720FamilyHoopa
	| PokemonFamilyV0721FamilyVolcanion
	| PokemonFamilyV0722FamilyRowlet
	| PokemonFamilyV0725FamilyLitten
	| PokemonFamilyV0728FamilyPopplio
	| PokemonFamilyV0731FamilyPikipek
	| PokemonFamilyV0734FamilyYungoos
	| PokemonFamilyV0736FamilyGrubbin
	| PokemonFamilyV0739FamilyCrabrawler
	| PokemonFamilyV0741FamilyOricorio
	| PokemonFamilyV0742FamilyCutiefly
	| PokemonFamilyV0744FamilyRockruff
	| PokemonFamilyV0746FamilyWishiwashi
	| PokemonFamilyV0747FamilyMareanie
	| PokemonFamilyV0749FamilyMudbray
	| PokemonFamilyV0751FamilyDewpider
	| PokemonFamilyV0753FamilyFomantis
	| PokemonFamilyV0755FamilyMorelull
	| PokemonFamilyV0757FamilySalandit
	| PokemonFamilyV0759FamilyStufful
	| PokemonFamilyV0761FamilyBounsweet
	| PokemonFamilyV0764FamilyComfey
	| PokemonFamilyV0765FamilyOranguru
	| PokemonFamilyV0766FamilyPassimian
	| PokemonFamilyV0767FamilyWimpod
	| PokemonFamilyV0769FamilySandygast
	| PokemonFamilyV0771FamilyPyukumuku
	| PokemonFamilyV0772FamilyTypeNull
	| PokemonFamilyV0774FamilyMinior
	| PokemonFamilyV0775FamilyKomala
	| PokemonFamilyV0776FamilyTurtonator
	| PokemonFamilyV0777FamilyTogedemaru
	| PokemonFamilyV0778FamilyMimikyu
	| PokemonFamilyV0779FamilyBruxish
	| PokemonFamilyV0780FamilyDrampa
	| PokemonFamilyV0781FamilyDhelmise
	| PokemonFamilyV0782FamilyJangmoO
	| PokemonFamilyV0785FamilyTapuKoko
	| PokemonFamilyV0786FamilyTapuLele
	| PokemonFamilyV0787FamilyTapuBulu
	| PokemonFamilyV0788FamilyTapuFini
	| PokemonFamilyV0789FamilyCosmog
	| PokemonFamilyV0793FamilyNihilego
	| PokemonFamilyV0794FamilyBuzzwole
	| PokemonFamilyV0795FamilyPheromosa
	| PokemonFamilyV0796FamilyXurkitree
	| PokemonFamilyV0797FamilyCelesteela
	| PokemonFamilyV0798FamilyKartana
	| PokemonFamilyV0799FamilyGuzzlord
	| PokemonFamilyV0800FamilyNecrozma
	| PokemonFamilyV0801FamilyMagearna
	| PokemonFamilyV0802FamilyMarshadow
	| PokemonFamilyV0803FamilyPoipole
	| PokemonFamilyV0805FamilyStakataka
	| PokemonFamilyV0806FamilyBlacephalon
	| PokemonFamilyV0807FamilyZeraora
	| PokemonFamilyV0808FamilyMeltan
	| PokemonFamilyV0810FamilyGrookey
	| PokemonFamilyV0813FamilyScorbunny
	| PokemonFamilyV0816FamilySobble
	| PokemonFamilyV0819FamilySkwovet
	| PokemonFamilyV0821FamilyRookidee
	| PokemonFamilyV0824FamilyBlipbug
	| PokemonFamilyV0827FamilyNickit
	| PokemonFamilyV0829FamilyGossifleur
	| PokemonFamilyV0831FamilyWooloo
	| PokemonFamilyV0833FamilyChewtle
	| PokemonFamilyV0835FamilyYamper
	| PokemonFamilyV0837FamilyRolycoly
	| PokemonFamilyV0840FamilyApplin
	| PokemonFamilyV0843FamilySilicobra
	| PokemonFamilyV0845FamilyCramorant
	| PokemonFamilyV0846FamilyArrokuda
	| PokemonFamilyV0848FamilyToxel
	| PokemonFamilyV0850FamilySizzlipede
	| PokemonFamilyV0852FamilyClobbopus
	| PokemonFamilyV0854FamilySinistea
	| PokemonFamilyV0856FamilyHatenna
	| PokemonFamilyV0859FamilyImpidimp
	| PokemonFamilyV0868FamilyMilcery
	| PokemonFamilyV0870FamilyFalinks
	| PokemonFamilyV0871FamilyPincurchin
	| PokemonFamilyV0872FamilySnom
	| PokemonFamilyV0874FamilyStonjourner
	| PokemonFamilyV0875FamilyEiscue
	| PokemonFamilyV0876FamilyIndeedee
	| PokemonFamilyV0877FamilyMorpeko
	| PokemonFamilyV0878FamilyCufant
	| PokemonFamilyV0880FamilyDracozolt
	| PokemonFamilyV0881FamilyArctozolt
	| PokemonFamilyV0882FamilyDracovish
	| PokemonFamilyV0883FamilyArctovish
	| PokemonFamilyV0884FamilyDuraludon
	| PokemonFamilyV0885FamilyDreepy
	| PokemonFamilyV0888FamilyZacian
	| PokemonFamilyV0889FamilyZamazenta
	| PokemonFamilyV0890FamilyEternatus
	| PokemonFamilyV0891FamilyKubfu
	| PokemonFamilyV0893FamilyZarude
	| PokemonFamilyV0894FamilyRegieleki
	| PokemonFamilyV0895FamilyRegidrago
	| PokemonFamilyV0896FamilyGlastrier
	| PokemonFamilyV0897FamilySpectrier
	| PokemonFamilyV0898FamilyCalyrex
	| PokemonFamilyV0905FamilyEnamorus
	| PokemonFamilyV0906FamilySprigatito
	| PokemonFamilyV0909FamilyFuecoco
	| PokemonFamilyV0912FamilyQuaxly
	| PokemonFamilyV0915FamilyLechonk
	| PokemonFamilyV0917FamilyTarountula
	| PokemonFamilyV0919FamilyNymble
	| PokemonFamilyV0921FamilyPawmi
	| PokemonFamilyV0924FamilyTandemaus
	| PokemonFamilyV0926FamilyFidough
	| PokemonFamilyV0928FamilySmoliv
	| PokemonFamilyV0931FamilySquawkabilly
	| PokemonFamilyV0932FamilyNacli
	| PokemonFamilyV0935FamilyCharcadet
	| PokemonFamilyV0938FamilyTadbulb
	| PokemonFamilyV0940FamilyWattrel
	| PokemonFamilyV0942FamilyMaschiff
	| PokemonFamilyV0944FamilyShroodle
	| PokemonFamilyV0946FamilyBramblin
	| PokemonFamilyV0948FamilyToedscool
	| PokemonFamilyV0950FamilyKlawf
	| PokemonFamilyV0951FamilyCapsakid
	| PokemonFamilyV0953FamilyRellor
	| PokemonFamilyV0955FamilyFlittle
	| PokemonFamilyV0957FamilyTinkatink
	| PokemonFamilyV0960FamilyWiglett
	| PokemonFamilyV0962FamilyBombirdier
	| PokemonFamilyV0963FamilyFinizen
	| PokemonFamilyV0965FamilyVaroom
	| PokemonFamilyV0967FamilyCyclizar
	| PokemonFamilyV0968FamilyOrthworm
	| PokemonFamilyV0969FamilyGlimmet
	| PokemonFamilyV0971FamilyGreavard
	| PokemonFamilyV0973FamilyFlamigo
	| PokemonFamilyV0974FamilyCetoddle
	| PokemonFamilyV0976FamilyVeluza
	| PokemonFamilyV0977FamilyDondozo
	| PokemonFamilyV0978FamilyTatsugiri
	| PokemonFamilyV0984FamilyGreattusk
	| PokemonFamilyV0985FamilyScreamtail
	| PokemonFamilyV0986FamilyBrutebonnet
	| PokemonFamilyV0987FamilyFluttermane
	| PokemonFamilyV0988FamilySlitherwing
	| PokemonFamilyV0989FamilySandyshocks
	| PokemonFamilyV0990FamilyIrontreads
	| PokemonFamilyV0991FamilyIronbundle
	| PokemonFamilyV0992FamilyIronhands
	| PokemonFamilyV0993FamilyIronjugulis
	| PokemonFamilyV0994FamilyIronmoth
	| PokemonFamilyV0995FamilyIronthorns
	| PokemonFamilyV0996FamilyFrigibax
	| PokemonFamilyV0999FamilyGimmighoul
	| PokemonFamilyV1001FamilyWochien
	| PokemonFamilyV1002FamilyChienpao
	| PokemonFamilyV1003FamilyTinglu
	| PokemonFamilyV1004FamilyChiyu
	| PokemonFamilyV1005FamilyRoaringmoon
	| PokemonFamilyV1006FamilyIronvaliant
	| PokemonFamilyV1007FamilyKoraidon
	| PokemonFamilyV1008FamilyMiraidon
	| PokemonFamilyV1009FamilyWalkingwake
	| PokemonFamilyV1010FamilyIronleaves
	| PokemonFamilyV1012FamilyPoltchageist
	| PokemonFamilyV1014FamilyOkidogi
	| PokemonFamilyV1015FamilyMunkidori
	| PokemonFamilyV1016FamilyFezandipiti
	| PokemonFamilyV1017FamilyOgerpon
	| PokemonFamilyV1020FamilyGougingfire
	| PokemonFamilyV1021FamilyRagingbolt
	| PokemonFamilyV1022FamilyIronboulder
	| PokemonFamilyV1023FamilyIroncrown
	| PokemonFamilyV1024FamilyTerapagos
	| PokemonFamilyV1025FamilyPecharunt;

export type PokemonFamilyTemplateID = PokemonFamilyMasterfileEntry["templateId"];

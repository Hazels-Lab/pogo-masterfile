// Generated from Pokémon GO masterfile — group "pokemonFamily", 541 entries.

export interface PokemonFamily<TemplateID extends string = string, TData extends PokemonFamilyData = PokemonFamilyData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonFamily: TData & {
			candyPerXlCandy: 100;
		};
	};
}

export interface PokemonFamilyData {
	familyId: string;
	megaEvolvablePokemonId?:
		| "ABOMASNOW"
		| "ABSOL"
		| "AERODACTYL"
		| "AGGRON"
		| "ALAKAZAM"
		| "ALTARIA"
		| "AMPHAROS"
		| "AUDINO"
		| "BANETTE"
		| "BEEDRILL"
		| "BLASTOISE"
		| "BLAZIKEN"
		| "CAMERUPT"
		| "CHARIZARD"
		| "DIANCIE"
		| "DRAGONITE"
		| "GARCHOMP"
		| "GENGAR"
		| "GLALIE"
		| "GROUDON"
		| "GYARADOS"
		| "HERACROSS"
		| "HOUNDOOM"
		| "KANGASKHAN"
		| "KYOGRE"
		| "LATIAS"
		| "LATIOS"
		| "LOPUNNY"
		| "LUCARIO"
		| "MALAMAR"
		| "MANECTRIC"
		| "MAWILE"
		| "MEDICHAM"
		| "METAGROSS"
		| "PIDGEOT"
		| "PINSIR"
		| "RAYQUAZA"
		| "SABLEYE"
		| "SALAMENCE"
		| "SCEPTILE"
		| "SCIZOR"
		| "SHARPEDO"
		| "SLOWBRO"
		| "STEELIX"
		| "SWAMPERT"
		| "TYRANITAR"
		| "VENUSAUR"
		| "VICTREEBEL";
	megaEvolvablePokemonIds?: ["GARDEVOIR", "GALLADE"];
}

export type PokemonFamilyV0001FamilyBulbasaur = PokemonFamily<
	"V0001_FAMILY_BULBASAUR",
	{
		familyId: "FAMILY_BULBASAUR";
		megaEvolvablePokemonId: "VENUSAUR";
	}
>;
export type PokemonFamilyV0004FamilyCharmander = PokemonFamily<
	"V0004_FAMILY_CHARMANDER",
	{
		familyId: "FAMILY_CHARMANDER";
		megaEvolvablePokemonId: "CHARIZARD";
	}
>;
export type PokemonFamilyV0007FamilySquirtle = PokemonFamily<
	"V0007_FAMILY_SQUIRTLE",
	{
		familyId: "FAMILY_SQUIRTLE";
		megaEvolvablePokemonId: "BLASTOISE";
	}
>;
export type PokemonFamilyV0010FamilyCaterpie = PokemonFamily<
	"V0010_FAMILY_CATERPIE",
	{
		familyId: "FAMILY_CATERPIE";
	}
>;
export type PokemonFamilyV0013FamilyWeedle = PokemonFamily<
	"V0013_FAMILY_WEEDLE",
	{
		familyId: "FAMILY_WEEDLE";
		megaEvolvablePokemonId: "BEEDRILL";
	}
>;
export type PokemonFamilyV0016FamilyPidgey = PokemonFamily<
	"V0016_FAMILY_PIDGEY",
	{
		familyId: "FAMILY_PIDGEY";
		megaEvolvablePokemonId: "PIDGEOT";
	}
>;
export type PokemonFamilyV0019FamilyRattata = PokemonFamily<
	"V0019_FAMILY_RATTATA",
	{
		familyId: "FAMILY_RATTATA";
	}
>;
export type PokemonFamilyV0021FamilySpearow = PokemonFamily<
	"V0021_FAMILY_SPEAROW",
	{
		familyId: "FAMILY_SPEAROW";
	}
>;
export type PokemonFamilyV0023FamilyEkans = PokemonFamily<
	"V0023_FAMILY_EKANS",
	{
		familyId: "FAMILY_EKANS";
	}
>;
export type PokemonFamilyV0025FamilyPikachu = PokemonFamily<
	"V0025_FAMILY_PIKACHU",
	{
		familyId: "FAMILY_PIKACHU";
	}
>;
export type PokemonFamilyV0027FamilySandshrew = PokemonFamily<
	"V0027_FAMILY_SANDSHREW",
	{
		familyId: "FAMILY_SANDSHREW";
	}
>;
export type PokemonFamilyV0029FamilyNidoran = PokemonFamily<
	"V0029_FAMILY_NIDORAN",
	{
		familyId: "FAMILY_NIDORAN_FEMALE";
	}
>;
export type PokemonFamilyV0032FamilyNidoran = PokemonFamily<
	"V0032_FAMILY_NIDORAN",
	{
		familyId: "FAMILY_NIDORAN_MALE";
	}
>;
export type PokemonFamilyV0035FamilyClefairy = PokemonFamily<
	"V0035_FAMILY_CLEFAIRY",
	{
		familyId: "FAMILY_CLEFAIRY";
	}
>;
export type PokemonFamilyV0037FamilyVulpix = PokemonFamily<
	"V0037_FAMILY_VULPIX",
	{
		familyId: "FAMILY_VULPIX";
	}
>;
export type PokemonFamilyV0039FamilyJigglypuff = PokemonFamily<
	"V0039_FAMILY_JIGGLYPUFF",
	{
		familyId: "FAMILY_JIGGLYPUFF";
	}
>;
export type PokemonFamilyV0041FamilyZubat = PokemonFamily<
	"V0041_FAMILY_ZUBAT",
	{
		familyId: "FAMILY_ZUBAT";
	}
>;
export type PokemonFamilyV0043FamilyOddish = PokemonFamily<
	"V0043_FAMILY_ODDISH",
	{
		familyId: "FAMILY_ODDISH";
	}
>;
export type PokemonFamilyV0046FamilyParas = PokemonFamily<
	"V0046_FAMILY_PARAS",
	{
		familyId: "FAMILY_PARAS";
	}
>;
export type PokemonFamilyV0048FamilyVenonat = PokemonFamily<
	"V0048_FAMILY_VENONAT",
	{
		familyId: "FAMILY_VENONAT";
	}
>;
export type PokemonFamilyV0050FamilyDiglett = PokemonFamily<
	"V0050_FAMILY_DIGLETT",
	{
		familyId: "FAMILY_DIGLETT";
	}
>;
export type PokemonFamilyV0052FamilyMeowth = PokemonFamily<
	"V0052_FAMILY_MEOWTH",
	{
		familyId: "FAMILY_MEOWTH";
	}
>;
export type PokemonFamilyV0054FamilyPsyduck = PokemonFamily<
	"V0054_FAMILY_PSYDUCK",
	{
		familyId: "FAMILY_PSYDUCK";
	}
>;
export type PokemonFamilyV0056FamilyMankey = PokemonFamily<
	"V0056_FAMILY_MANKEY",
	{
		familyId: "FAMILY_MANKEY";
	}
>;
export type PokemonFamilyV0058FamilyGrowlithe = PokemonFamily<
	"V0058_FAMILY_GROWLITHE",
	{
		familyId: "FAMILY_GROWLITHE";
	}
>;
export type PokemonFamilyV0060FamilyPoliwag = PokemonFamily<
	"V0060_FAMILY_POLIWAG",
	{
		familyId: "FAMILY_POLIWAG";
	}
>;
export type PokemonFamilyV0063FamilyAbra = PokemonFamily<
	"V0063_FAMILY_ABRA",
	{
		familyId: "FAMILY_ABRA";
		megaEvolvablePokemonId: "ALAKAZAM";
	}
>;
export type PokemonFamilyV0066FamilyMachop = PokemonFamily<
	"V0066_FAMILY_MACHOP",
	{
		familyId: "FAMILY_MACHOP";
	}
>;
export type PokemonFamilyV0069FamilyBellsprout = PokemonFamily<
	"V0069_FAMILY_BELLSPROUT",
	{
		familyId: "FAMILY_BELLSPROUT";
		megaEvolvablePokemonId: "VICTREEBEL";
	}
>;
export type PokemonFamilyV0072FamilyTentacool = PokemonFamily<
	"V0072_FAMILY_TENTACOOL",
	{
		familyId: "FAMILY_TENTACOOL";
	}
>;
export type PokemonFamilyV0074FamilyGeodude = PokemonFamily<
	"V0074_FAMILY_GEODUDE",
	{
		familyId: "FAMILY_GEODUDE";
	}
>;
export type PokemonFamilyV0077FamilyPonyta = PokemonFamily<
	"V0077_FAMILY_PONYTA",
	{
		familyId: "FAMILY_PONYTA";
	}
>;
export type PokemonFamilyV0079FamilySlowpoke = PokemonFamily<
	"V0079_FAMILY_SLOWPOKE",
	{
		familyId: "FAMILY_SLOWPOKE";
		megaEvolvablePokemonId: "SLOWBRO";
	}
>;
export type PokemonFamilyV0081FamilyMagnemite = PokemonFamily<
	"V0081_FAMILY_MAGNEMITE",
	{
		familyId: "FAMILY_MAGNEMITE";
	}
>;
export type PokemonFamilyV0083FamilyFarfetchd = PokemonFamily<
	"V0083_FAMILY_FARFETCHD",
	{
		familyId: "FAMILY_FARFETCHD";
	}
>;
export type PokemonFamilyV0084FamilyDoduo = PokemonFamily<
	"V0084_FAMILY_DODUO",
	{
		familyId: "FAMILY_DODUO";
	}
>;
export type PokemonFamilyV0086FamilySeel = PokemonFamily<
	"V0086_FAMILY_SEEL",
	{
		familyId: "FAMILY_SEEL";
	}
>;
export type PokemonFamilyV0088FamilyGrimer = PokemonFamily<
	"V0088_FAMILY_GRIMER",
	{
		familyId: "FAMILY_GRIMER";
	}
>;
export type PokemonFamilyV0090FamilyShellder = PokemonFamily<
	"V0090_FAMILY_SHELLDER",
	{
		familyId: "FAMILY_SHELLDER";
	}
>;
export type PokemonFamilyV0092FamilyGastly = PokemonFamily<
	"V0092_FAMILY_GASTLY",
	{
		familyId: "FAMILY_GASTLY";
		megaEvolvablePokemonId: "GENGAR";
	}
>;
export type PokemonFamilyV0095FamilyOnix = PokemonFamily<
	"V0095_FAMILY_ONIX",
	{
		familyId: "FAMILY_ONIX";
		megaEvolvablePokemonId: "STEELIX";
	}
>;
export type PokemonFamilyV0096FamilyDrowzee = PokemonFamily<
	"V0096_FAMILY_DROWZEE",
	{
		familyId: "FAMILY_DROWZEE";
	}
>;
export type PokemonFamilyV0098FamilyKrabby = PokemonFamily<
	"V0098_FAMILY_KRABBY",
	{
		familyId: "FAMILY_KRABBY";
	}
>;
export type PokemonFamilyV0100FamilyVoltorb = PokemonFamily<
	"V0100_FAMILY_VOLTORB",
	{
		familyId: "FAMILY_VOLTORB";
	}
>;
export type PokemonFamilyV0102FamilyExeggcute = PokemonFamily<
	"V0102_FAMILY_EXEGGCUTE",
	{
		familyId: "FAMILY_EXEGGCUTE";
	}
>;
export type PokemonFamilyV0104FamilyCubone = PokemonFamily<
	"V0104_FAMILY_CUBONE",
	{
		familyId: "FAMILY_CUBONE";
	}
>;
export type PokemonFamilyV0108FamilyLickitung = PokemonFamily<
	"V0108_FAMILY_LICKITUNG",
	{
		familyId: "FAMILY_LICKITUNG";
	}
>;
export type PokemonFamilyV0109FamilyKoffing = PokemonFamily<
	"V0109_FAMILY_KOFFING",
	{
		familyId: "FAMILY_KOFFING";
	}
>;
export type PokemonFamilyV0111FamilyRhyhorn = PokemonFamily<
	"V0111_FAMILY_RHYHORN",
	{
		familyId: "FAMILY_RHYHORN";
	}
>;
export type PokemonFamilyV0113FamilyChansey = PokemonFamily<
	"V0113_FAMILY_CHANSEY",
	{
		familyId: "FAMILY_CHANSEY";
	}
>;
export type PokemonFamilyV0114FamilyTangela = PokemonFamily<
	"V0114_FAMILY_TANGELA",
	{
		familyId: "FAMILY_TANGELA";
	}
>;
export type PokemonFamilyV0115FamilyKangaskhan = PokemonFamily<
	"V0115_FAMILY_KANGASKHAN",
	{
		familyId: "FAMILY_KANGASKHAN";
		megaEvolvablePokemonId: "KANGASKHAN";
	}
>;
export type PokemonFamilyV0116FamilyHorsea = PokemonFamily<
	"V0116_FAMILY_HORSEA",
	{
		familyId: "FAMILY_HORSEA";
	}
>;
export type PokemonFamilyV0118FamilyGoldeen = PokemonFamily<
	"V0118_FAMILY_GOLDEEN",
	{
		familyId: "FAMILY_GOLDEEN";
	}
>;
export type PokemonFamilyV0120FamilyStaryu = PokemonFamily<
	"V0120_FAMILY_STARYU",
	{
		familyId: "FAMILY_STARYU";
	}
>;
export type PokemonFamilyV0122FamilyMrMime = PokemonFamily<
	"V0122_FAMILY_MR_MIME",
	{
		familyId: "FAMILY_MR_MIME";
	}
>;
export type PokemonFamilyV0123FamilyScyther = PokemonFamily<
	"V0123_FAMILY_SCYTHER",
	{
		familyId: "FAMILY_SCYTHER";
		megaEvolvablePokemonId: "SCIZOR";
	}
>;
export type PokemonFamilyV0124FamilyJynx = PokemonFamily<
	"V0124_FAMILY_JYNX",
	{
		familyId: "FAMILY_JYNX";
	}
>;
export type PokemonFamilyV0125FamilyElectabuzz = PokemonFamily<
	"V0125_FAMILY_ELECTABUZZ",
	{
		familyId: "FAMILY_ELECTABUZZ";
	}
>;
export type PokemonFamilyV0126FamilyMagmar = PokemonFamily<
	"V0126_FAMILY_MAGMAR",
	{
		familyId: "FAMILY_MAGMAR";
	}
>;
export type PokemonFamilyV0127FamilyPinsir = PokemonFamily<
	"V0127_FAMILY_PINSIR",
	{
		familyId: "FAMILY_PINSIR";
		megaEvolvablePokemonId: "PINSIR";
	}
>;
export type PokemonFamilyV0128FamilyTauros = PokemonFamily<
	"V0128_FAMILY_TAUROS",
	{
		familyId: "FAMILY_TAUROS";
	}
>;
export type PokemonFamilyV0129FamilyMagikarp = PokemonFamily<
	"V0129_FAMILY_MAGIKARP",
	{
		familyId: "FAMILY_MAGIKARP";
		megaEvolvablePokemonId: "GYARADOS";
	}
>;
export type PokemonFamilyV0131FamilyLapras = PokemonFamily<
	"V0131_FAMILY_LAPRAS",
	{
		familyId: "FAMILY_LAPRAS";
	}
>;
export type PokemonFamilyV0132FamilyDitto = PokemonFamily<
	"V0132_FAMILY_DITTO",
	{
		familyId: "FAMILY_DITTO";
	}
>;
export type PokemonFamilyV0133FamilyEevee = PokemonFamily<
	"V0133_FAMILY_EEVEE",
	{
		familyId: "FAMILY_EEVEE";
	}
>;
export type PokemonFamilyV0137FamilyPorygon = PokemonFamily<
	"V0137_FAMILY_PORYGON",
	{
		familyId: "FAMILY_PORYGON";
	}
>;
export type PokemonFamilyV0138FamilyOmanyte = PokemonFamily<
	"V0138_FAMILY_OMANYTE",
	{
		familyId: "FAMILY_OMANYTE";
	}
>;
export type PokemonFamilyV0140FamilyKabuto = PokemonFamily<
	"V0140_FAMILY_KABUTO",
	{
		familyId: "FAMILY_KABUTO";
	}
>;
export type PokemonFamilyV0142FamilyAerodactyl = PokemonFamily<
	"V0142_FAMILY_AERODACTYL",
	{
		familyId: "FAMILY_AERODACTYL";
		megaEvolvablePokemonId: "AERODACTYL";
	}
>;
export type PokemonFamilyV0143FamilySnorlax = PokemonFamily<
	"V0143_FAMILY_SNORLAX",
	{
		familyId: "FAMILY_SNORLAX";
	}
>;
export type PokemonFamilyV0144FamilyArticuno = PokemonFamily<
	"V0144_FAMILY_ARTICUNO",
	{
		familyId: "FAMILY_ARTICUNO";
	}
>;
export type PokemonFamilyV0145FamilyZapdos = PokemonFamily<
	"V0145_FAMILY_ZAPDOS",
	{
		familyId: "FAMILY_ZAPDOS";
	}
>;
export type PokemonFamilyV0146FamilyMoltres = PokemonFamily<
	"V0146_FAMILY_MOLTRES",
	{
		familyId: "FAMILY_MOLTRES";
	}
>;
export type PokemonFamilyV0147FamilyDratini = PokemonFamily<
	"V0147_FAMILY_DRATINI",
	{
		familyId: "FAMILY_DRATINI";
		megaEvolvablePokemonId: "DRAGONITE";
	}
>;
export type PokemonFamilyV0150FamilyMewtwo = PokemonFamily<
	"V0150_FAMILY_MEWTWO",
	{
		familyId: "FAMILY_MEWTWO";
	}
>;
export type PokemonFamilyV0151FamilyMew = PokemonFamily<
	"V0151_FAMILY_MEW",
	{
		familyId: "FAMILY_MEW";
	}
>;
export type PokemonFamilyV0152FamilyChikorita = PokemonFamily<
	"V0152_FAMILY_CHIKORITA",
	{
		familyId: "FAMILY_CHIKORITA";
	}
>;
export type PokemonFamilyV0155FamilyCyndaquil = PokemonFamily<
	"V0155_FAMILY_CYNDAQUIL",
	{
		familyId: "FAMILY_CYNDAQUIL";
	}
>;
export type PokemonFamilyV0158FamilyTotodile = PokemonFamily<
	"V0158_FAMILY_TOTODILE",
	{
		familyId: "FAMILY_TOTODILE";
	}
>;
export type PokemonFamilyV0161FamilySentret = PokemonFamily<
	"V0161_FAMILY_SENTRET",
	{
		familyId: "FAMILY_SENTRET";
	}
>;
export type PokemonFamilyV0163FamilyHoothoot = PokemonFamily<
	"V0163_FAMILY_HOOTHOOT",
	{
		familyId: "FAMILY_HOOTHOOT";
	}
>;
export type PokemonFamilyV0165FamilyLedyba = PokemonFamily<
	"V0165_FAMILY_LEDYBA",
	{
		familyId: "FAMILY_LEDYBA";
	}
>;
export type PokemonFamilyV0167FamilySpinarak = PokemonFamily<
	"V0167_FAMILY_SPINARAK",
	{
		familyId: "FAMILY_SPINARAK";
	}
>;
export type PokemonFamilyV0170FamilyChinchou = PokemonFamily<
	"V0170_FAMILY_CHINCHOU",
	{
		familyId: "FAMILY_CHINCHOU";
	}
>;
export type PokemonFamilyV0175FamilyTogepi = PokemonFamily<
	"V0175_FAMILY_TOGEPI",
	{
		familyId: "FAMILY_TOGEPI";
	}
>;
export type PokemonFamilyV0177FamilyNatu = PokemonFamily<
	"V0177_FAMILY_NATU",
	{
		familyId: "FAMILY_NATU";
	}
>;
export type PokemonFamilyV0179FamilyMareep = PokemonFamily<
	"V0179_FAMILY_MAREEP",
	{
		familyId: "FAMILY_MAREEP";
		megaEvolvablePokemonId: "AMPHAROS";
	}
>;
export type PokemonFamilyV0183FamilyMarill = PokemonFamily<
	"V0183_FAMILY_MARILL",
	{
		familyId: "FAMILY_MARILL";
	}
>;
export type PokemonFamilyV0185FamilySudowoodo = PokemonFamily<
	"V0185_FAMILY_SUDOWOODO",
	{
		familyId: "FAMILY_SUDOWOODO";
	}
>;
export type PokemonFamilyV0187FamilyHoppip = PokemonFamily<
	"V0187_FAMILY_HOPPIP",
	{
		familyId: "FAMILY_HOPPIP";
	}
>;
export type PokemonFamilyV0190FamilyAipom = PokemonFamily<
	"V0190_FAMILY_AIPOM",
	{
		familyId: "FAMILY_AIPOM";
	}
>;
export type PokemonFamilyV0191FamilySunkern = PokemonFamily<
	"V0191_FAMILY_SUNKERN",
	{
		familyId: "FAMILY_SUNKERN";
	}
>;
export type PokemonFamilyV0193FamilyYanma = PokemonFamily<
	"V0193_FAMILY_YANMA",
	{
		familyId: "FAMILY_YANMA";
	}
>;
export type PokemonFamilyV0194FamilyWooper = PokemonFamily<
	"V0194_FAMILY_WOOPER",
	{
		familyId: "FAMILY_WOOPER";
	}
>;
export type PokemonFamilyV0198FamilyMurkrow = PokemonFamily<
	"V0198_FAMILY_MURKROW",
	{
		familyId: "FAMILY_MURKROW";
	}
>;
export type PokemonFamilyV0200FamilyMisdreavus = PokemonFamily<
	"V0200_FAMILY_MISDREAVUS",
	{
		familyId: "FAMILY_MISDREAVUS";
	}
>;
export type PokemonFamilyV0201FamilyUnown = PokemonFamily<
	"V0201_FAMILY_UNOWN",
	{
		familyId: "FAMILY_UNOWN";
	}
>;
export type PokemonFamilyV0202FamilyWobbuffet = PokemonFamily<
	"V0202_FAMILY_WOBBUFFET",
	{
		familyId: "FAMILY_WOBBUFFET";
	}
>;
export type PokemonFamilyV0203FamilyGirafarig = PokemonFamily<
	"V0203_FAMILY_GIRAFARIG",
	{
		familyId: "FAMILY_GIRAFARIG";
	}
>;
export type PokemonFamilyV0204FamilyPineco = PokemonFamily<
	"V0204_FAMILY_PINECO",
	{
		familyId: "FAMILY_PINECO";
	}
>;
export type PokemonFamilyV0206FamilyDunsparce = PokemonFamily<
	"V0206_FAMILY_DUNSPARCE",
	{
		familyId: "FAMILY_DUNSPARCE";
	}
>;
export type PokemonFamilyV0207FamilyGligar = PokemonFamily<
	"V0207_FAMILY_GLIGAR",
	{
		familyId: "FAMILY_GLIGAR";
	}
>;
export type PokemonFamilyV0209FamilySnubbull = PokemonFamily<
	"V0209_FAMILY_SNUBBULL",
	{
		familyId: "FAMILY_SNUBBULL";
	}
>;
export type PokemonFamilyV0211FamilyQwilfish = PokemonFamily<
	"V0211_FAMILY_QWILFISH",
	{
		familyId: "FAMILY_QWILFISH";
	}
>;
export type PokemonFamilyV0213FamilyShuckle = PokemonFamily<
	"V0213_FAMILY_SHUCKLE",
	{
		familyId: "FAMILY_SHUCKLE";
	}
>;
export type PokemonFamilyV0214FamilyHeracross = PokemonFamily<
	"V0214_FAMILY_HERACROSS",
	{
		familyId: "FAMILY_HERACROSS";
		megaEvolvablePokemonId: "HERACROSS";
	}
>;
export type PokemonFamilyV0215FamilySneasel = PokemonFamily<
	"V0215_FAMILY_SNEASEL",
	{
		familyId: "FAMILY_SNEASEL";
	}
>;
export type PokemonFamilyV0216FamilyTeddiursa = PokemonFamily<
	"V0216_FAMILY_TEDDIURSA",
	{
		familyId: "FAMILY_TEDDIURSA";
	}
>;
export type PokemonFamilyV0218FamilySlugma = PokemonFamily<
	"V0218_FAMILY_SLUGMA",
	{
		familyId: "FAMILY_SLUGMA";
	}
>;
export type PokemonFamilyV0220FamilySwinub = PokemonFamily<
	"V0220_FAMILY_SWINUB",
	{
		familyId: "FAMILY_SWINUB";
	}
>;
export type PokemonFamilyV0222FamilyCorsola = PokemonFamily<
	"V0222_FAMILY_CORSOLA",
	{
		familyId: "FAMILY_CORSOLA";
	}
>;
export type PokemonFamilyV0223FamilyRemoraid = PokemonFamily<
	"V0223_FAMILY_REMORAID",
	{
		familyId: "FAMILY_REMORAID";
	}
>;
export type PokemonFamilyV0225FamilyDelibird = PokemonFamily<
	"V0225_FAMILY_DELIBIRD",
	{
		familyId: "FAMILY_DELIBIRD";
	}
>;
export type PokemonFamilyV0226FamilyMantine = PokemonFamily<
	"V0226_FAMILY_MANTINE",
	{
		familyId: "FAMILY_MANTINE";
	}
>;
export type PokemonFamilyV0227FamilySkarmory = PokemonFamily<
	"V0227_FAMILY_SKARMORY",
	{
		familyId: "FAMILY_SKARMORY";
	}
>;
export type PokemonFamilyV0228FamilyHoundour = PokemonFamily<
	"V0228_FAMILY_HOUNDOUR",
	{
		familyId: "FAMILY_HOUNDOUR";
		megaEvolvablePokemonId: "HOUNDOOM";
	}
>;
export type PokemonFamilyV0231FamilyPhanpy = PokemonFamily<
	"V0231_FAMILY_PHANPY",
	{
		familyId: "FAMILY_PHANPY";
	}
>;
export type PokemonFamilyV0234FamilyStantler = PokemonFamily<
	"V0234_FAMILY_STANTLER",
	{
		familyId: "FAMILY_STANTLER";
	}
>;
export type PokemonFamilyV0235FamilySmeargle = PokemonFamily<
	"V0235_FAMILY_SMEARGLE",
	{
		familyId: "FAMILY_SMEARGLE";
	}
>;
export type PokemonFamilyV0236FamilyTyrogue = PokemonFamily<
	"V0236_FAMILY_TYROGUE",
	{
		familyId: "FAMILY_TYROGUE";
	}
>;
export type PokemonFamilyV0241FamilyMiltank = PokemonFamily<
	"V0241_FAMILY_MILTANK",
	{
		familyId: "FAMILY_MILTANK";
	}
>;
export type PokemonFamilyV0243FamilyRaikou = PokemonFamily<
	"V0243_FAMILY_RAIKOU",
	{
		familyId: "FAMILY_RAIKOU";
	}
>;
export type PokemonFamilyV0244FamilyEntei = PokemonFamily<
	"V0244_FAMILY_ENTEI",
	{
		familyId: "FAMILY_ENTEI";
	}
>;
export type PokemonFamilyV0245FamilySuicune = PokemonFamily<
	"V0245_FAMILY_SUICUNE",
	{
		familyId: "FAMILY_SUICUNE";
	}
>;
export type PokemonFamilyV0246FamilyLarvitar = PokemonFamily<
	"V0246_FAMILY_LARVITAR",
	{
		familyId: "FAMILY_LARVITAR";
		megaEvolvablePokemonId: "TYRANITAR";
	}
>;
export type PokemonFamilyV0249FamilyLugia = PokemonFamily<
	"V0249_FAMILY_LUGIA",
	{
		familyId: "FAMILY_LUGIA";
	}
>;
export type PokemonFamilyV0250FamilyHoOh = PokemonFamily<
	"V0250_FAMILY_HO_OH",
	{
		familyId: "FAMILY_HO_OH";
	}
>;
export type PokemonFamilyV0251FamilyCelebi = PokemonFamily<
	"V0251_FAMILY_CELEBI",
	{
		familyId: "FAMILY_CELEBI";
	}
>;
export type PokemonFamilyV0252FamilyTreecko = PokemonFamily<
	"V0252_FAMILY_TREECKO",
	{
		familyId: "FAMILY_TREECKO";
		megaEvolvablePokemonId: "SCEPTILE";
	}
>;
export type PokemonFamilyV0255FamilyTorchic = PokemonFamily<
	"V0255_FAMILY_TORCHIC",
	{
		familyId: "FAMILY_TORCHIC";
		megaEvolvablePokemonId: "BLAZIKEN";
	}
>;
export type PokemonFamilyV0258FamilyMudkip = PokemonFamily<
	"V0258_FAMILY_MUDKIP",
	{
		familyId: "FAMILY_MUDKIP";
		megaEvolvablePokemonId: "SWAMPERT";
	}
>;
export type PokemonFamilyV0261FamilyPoochyena = PokemonFamily<
	"V0261_FAMILY_POOCHYENA",
	{
		familyId: "FAMILY_POOCHYENA";
	}
>;
export type PokemonFamilyV0263FamilyZigzagoon = PokemonFamily<
	"V0263_FAMILY_ZIGZAGOON",
	{
		familyId: "FAMILY_ZIGZAGOON";
	}
>;
export type PokemonFamilyV0265FamilyWurmple = PokemonFamily<
	"V0265_FAMILY_WURMPLE",
	{
		familyId: "FAMILY_WURMPLE";
	}
>;
export type PokemonFamilyV0270FamilyLotad = PokemonFamily<
	"V0270_FAMILY_LOTAD",
	{
		familyId: "FAMILY_LOTAD";
	}
>;
export type PokemonFamilyV0273FamilySeedot = PokemonFamily<
	"V0273_FAMILY_SEEDOT",
	{
		familyId: "FAMILY_SEEDOT";
	}
>;
export type PokemonFamilyV0276FamilyTaillow = PokemonFamily<
	"V0276_FAMILY_TAILLOW",
	{
		familyId: "FAMILY_TAILLOW";
	}
>;
export type PokemonFamilyV0278FamilyWingull = PokemonFamily<
	"V0278_FAMILY_WINGULL",
	{
		familyId: "FAMILY_WINGULL";
	}
>;
export type PokemonFamilyV0280FamilyRalts = PokemonFamily<
	"V0280_FAMILY_RALTS",
	{
		familyId: "FAMILY_RALTS";
		megaEvolvablePokemonIds: ["GARDEVOIR", "GALLADE"];
	}
>;
export type PokemonFamilyV0283FamilySurskit = PokemonFamily<
	"V0283_FAMILY_SURSKIT",
	{
		familyId: "FAMILY_SURSKIT";
	}
>;
export type PokemonFamilyV0285FamilyShroomish = PokemonFamily<
	"V0285_FAMILY_SHROOMISH",
	{
		familyId: "FAMILY_SHROOMISH";
	}
>;
export type PokemonFamilyV0287FamilySlakoth = PokemonFamily<
	"V0287_FAMILY_SLAKOTH",
	{
		familyId: "FAMILY_SLAKOTH";
	}
>;
export type PokemonFamilyV0290FamilyNincada = PokemonFamily<
	"V0290_FAMILY_NINCADA",
	{
		familyId: "FAMILY_NINCADA";
	}
>;
export type PokemonFamilyV0293FamilyWhismur = PokemonFamily<
	"V0293_FAMILY_WHISMUR",
	{
		familyId: "FAMILY_WHISMUR";
	}
>;
export type PokemonFamilyV0296FamilyMakuhita = PokemonFamily<
	"V0296_FAMILY_MAKUHITA",
	{
		familyId: "FAMILY_MAKUHITA";
	}
>;
export type PokemonFamilyV0299FamilyNosepass = PokemonFamily<
	"V0299_FAMILY_NOSEPASS",
	{
		familyId: "FAMILY_NOSEPASS";
	}
>;
export type PokemonFamilyV0300FamilySkitty = PokemonFamily<
	"V0300_FAMILY_SKITTY",
	{
		familyId: "FAMILY_SKITTY";
	}
>;
export type PokemonFamilyV0302FamilySableye = PokemonFamily<
	"V0302_FAMILY_SABLEYE",
	{
		familyId: "FAMILY_SABLEYE";
		megaEvolvablePokemonId: "SABLEYE";
	}
>;
export type PokemonFamilyV0303FamilyMawile = PokemonFamily<
	"V0303_FAMILY_MAWILE",
	{
		familyId: "FAMILY_MAWILE";
		megaEvolvablePokemonId: "MAWILE";
	}
>;
export type PokemonFamilyV0304FamilyAron = PokemonFamily<
	"V0304_FAMILY_ARON",
	{
		familyId: "FAMILY_ARON";
		megaEvolvablePokemonId: "AGGRON";
	}
>;
export type PokemonFamilyV0307FamilyMeditite = PokemonFamily<
	"V0307_FAMILY_MEDITITE",
	{
		familyId: "FAMILY_MEDITITE";
		megaEvolvablePokemonId: "MEDICHAM";
	}
>;
export type PokemonFamilyV0309FamilyElectrike = PokemonFamily<
	"V0309_FAMILY_ELECTRIKE",
	{
		familyId: "FAMILY_ELECTRIKE";
		megaEvolvablePokemonId: "MANECTRIC";
	}
>;
export type PokemonFamilyV0311FamilyPlusle = PokemonFamily<
	"V0311_FAMILY_PLUSLE",
	{
		familyId: "FAMILY_PLUSLE";
	}
>;
export type PokemonFamilyV0312FamilyMinun = PokemonFamily<
	"V0312_FAMILY_MINUN",
	{
		familyId: "FAMILY_MINUN";
	}
>;
export type PokemonFamilyV0313FamilyVolbeat = PokemonFamily<
	"V0313_FAMILY_VOLBEAT",
	{
		familyId: "FAMILY_VOLBEAT";
	}
>;
export type PokemonFamilyV0314FamilyIllumise = PokemonFamily<
	"V0314_FAMILY_ILLUMISE",
	{
		familyId: "FAMILY_ILLUMISE";
	}
>;
export type PokemonFamilyV0315FamilyRoselia = PokemonFamily<
	"V0315_FAMILY_ROSELIA",
	{
		familyId: "FAMILY_ROSELIA";
	}
>;
export type PokemonFamilyV0316FamilyGulpin = PokemonFamily<
	"V0316_FAMILY_GULPIN",
	{
		familyId: "FAMILY_GULPIN";
	}
>;
export type PokemonFamilyV0318FamilyCarvanha = PokemonFamily<
	"V0318_FAMILY_CARVANHA",
	{
		familyId: "FAMILY_CARVANHA";
		megaEvolvablePokemonId: "SHARPEDO";
	}
>;
export type PokemonFamilyV0320FamilyWailmer = PokemonFamily<
	"V0320_FAMILY_WAILMER",
	{
		familyId: "FAMILY_WAILMER";
	}
>;
export type PokemonFamilyV0322FamilyNumel = PokemonFamily<
	"V0322_FAMILY_NUMEL",
	{
		familyId: "FAMILY_NUMEL";
		megaEvolvablePokemonId: "CAMERUPT";
	}
>;
export type PokemonFamilyV0324FamilyTorkoal = PokemonFamily<
	"V0324_FAMILY_TORKOAL",
	{
		familyId: "FAMILY_TORKOAL";
	}
>;
export type PokemonFamilyV0325FamilySpoink = PokemonFamily<
	"V0325_FAMILY_SPOINK",
	{
		familyId: "FAMILY_SPOINK";
	}
>;
export type PokemonFamilyV0327FamilySpinda = PokemonFamily<
	"V0327_FAMILY_SPINDA",
	{
		familyId: "FAMILY_SPINDA";
	}
>;
export type PokemonFamilyV0328FamilyTrapinch = PokemonFamily<
	"V0328_FAMILY_TRAPINCH",
	{
		familyId: "FAMILY_TRAPINCH";
	}
>;
export type PokemonFamilyV0331FamilyCacnea = PokemonFamily<
	"V0331_FAMILY_CACNEA",
	{
		familyId: "FAMILY_CACNEA";
	}
>;
export type PokemonFamilyV0333FamilySwablu = PokemonFamily<
	"V0333_FAMILY_SWABLU",
	{
		familyId: "FAMILY_SWABLU";
		megaEvolvablePokemonId: "ALTARIA";
	}
>;
export type PokemonFamilyV0335FamilyZangoose = PokemonFamily<
	"V0335_FAMILY_ZANGOOSE",
	{
		familyId: "FAMILY_ZANGOOSE";
	}
>;
export type PokemonFamilyV0336FamilySeviper = PokemonFamily<
	"V0336_FAMILY_SEVIPER",
	{
		familyId: "FAMILY_SEVIPER";
	}
>;
export type PokemonFamilyV0337FamilyLunatone = PokemonFamily<
	"V0337_FAMILY_LUNATONE",
	{
		familyId: "FAMILY_LUNATONE";
	}
>;
export type PokemonFamilyV0338FamilySolrock = PokemonFamily<
	"V0338_FAMILY_SOLROCK",
	{
		familyId: "FAMILY_SOLROCK";
	}
>;
export type PokemonFamilyV0339FamilyBarboach = PokemonFamily<
	"V0339_FAMILY_BARBOACH",
	{
		familyId: "FAMILY_BARBOACH";
	}
>;
export type PokemonFamilyV0341FamilyCorphish = PokemonFamily<
	"V0341_FAMILY_CORPHISH",
	{
		familyId: "FAMILY_CORPHISH";
	}
>;
export type PokemonFamilyV0343FamilyBaltoy = PokemonFamily<
	"V0343_FAMILY_BALTOY",
	{
		familyId: "FAMILY_BALTOY";
	}
>;
export type PokemonFamilyV0345FamilyLileep = PokemonFamily<
	"V0345_FAMILY_LILEEP",
	{
		familyId: "FAMILY_LILEEP";
	}
>;
export type PokemonFamilyV0347FamilyAnorith = PokemonFamily<
	"V0347_FAMILY_ANORITH",
	{
		familyId: "FAMILY_ANORITH";
	}
>;
export type PokemonFamilyV0349FamilyFeebas = PokemonFamily<
	"V0349_FAMILY_FEEBAS",
	{
		familyId: "FAMILY_FEEBAS";
	}
>;
export type PokemonFamilyV0351FamilyCastform = PokemonFamily<
	"V0351_FAMILY_CASTFORM",
	{
		familyId: "FAMILY_CASTFORM";
	}
>;
export type PokemonFamilyV0352FamilyKecleon = PokemonFamily<
	"V0352_FAMILY_KECLEON",
	{
		familyId: "FAMILY_KECLEON";
	}
>;
export type PokemonFamilyV0353FamilyShuppet = PokemonFamily<
	"V0353_FAMILY_SHUPPET",
	{
		familyId: "FAMILY_SHUPPET";
		megaEvolvablePokemonId: "BANETTE";
	}
>;
export type PokemonFamilyV0355FamilyDuskull = PokemonFamily<
	"V0355_FAMILY_DUSKULL",
	{
		familyId: "FAMILY_DUSKULL";
	}
>;
export type PokemonFamilyV0357FamilyTropius = PokemonFamily<
	"V0357_FAMILY_TROPIUS",
	{
		familyId: "FAMILY_TROPIUS";
	}
>;
export type PokemonFamilyV0358FamilyChimecho = PokemonFamily<
	"V0358_FAMILY_CHIMECHO",
	{
		familyId: "FAMILY_CHIMECHO";
	}
>;
export type PokemonFamilyV0359FamilyAbsol = PokemonFamily<
	"V0359_FAMILY_ABSOL",
	{
		familyId: "FAMILY_ABSOL";
		megaEvolvablePokemonId: "ABSOL";
	}
>;
export type PokemonFamilyV0361FamilySnorunt = PokemonFamily<
	"V0361_FAMILY_SNORUNT",
	{
		familyId: "FAMILY_SNORUNT";
		megaEvolvablePokemonId: "GLALIE";
	}
>;
export type PokemonFamilyV0363FamilySpheal = PokemonFamily<
	"V0363_FAMILY_SPHEAL",
	{
		familyId: "FAMILY_SPHEAL";
	}
>;
export type PokemonFamilyV0366FamilyClamperl = PokemonFamily<
	"V0366_FAMILY_CLAMPERL",
	{
		familyId: "FAMILY_CLAMPERL";
	}
>;
export type PokemonFamilyV0369FamilyRelicanth = PokemonFamily<
	"V0369_FAMILY_RELICANTH",
	{
		familyId: "FAMILY_RELICANTH";
	}
>;
export type PokemonFamilyV0370FamilyLuvdisc = PokemonFamily<
	"V0370_FAMILY_LUVDISC",
	{
		familyId: "FAMILY_LUVDISC";
	}
>;
export type PokemonFamilyV0371FamilyBagon = PokemonFamily<
	"V0371_FAMILY_BAGON",
	{
		familyId: "FAMILY_BAGON";
		megaEvolvablePokemonId: "SALAMENCE";
	}
>;
export type PokemonFamilyV0374FamilyBeldum = PokemonFamily<
	"V0374_FAMILY_BELDUM",
	{
		familyId: "FAMILY_BELDUM";
		megaEvolvablePokemonId: "METAGROSS";
	}
>;
export type PokemonFamilyV0377FamilyRegirock = PokemonFamily<
	"V0377_FAMILY_REGIROCK",
	{
		familyId: "FAMILY_REGIROCK";
	}
>;
export type PokemonFamilyV0378FamilyRegice = PokemonFamily<
	"V0378_FAMILY_REGICE",
	{
		familyId: "FAMILY_REGICE";
	}
>;
export type PokemonFamilyV0379FamilyRegisteel = PokemonFamily<
	"V0379_FAMILY_REGISTEEL",
	{
		familyId: "FAMILY_REGISTEEL";
	}
>;
export type PokemonFamilyV0380FamilyLatias = PokemonFamily<
	"V0380_FAMILY_LATIAS",
	{
		familyId: "FAMILY_LATIAS";
		megaEvolvablePokemonId: "LATIAS";
	}
>;
export type PokemonFamilyV0381FamilyLatios = PokemonFamily<
	"V0381_FAMILY_LATIOS",
	{
		familyId: "FAMILY_LATIOS";
		megaEvolvablePokemonId: "LATIOS";
	}
>;
export type PokemonFamilyV0382FamilyKyogre = PokemonFamily<
	"V0382_FAMILY_KYOGRE",
	{
		familyId: "FAMILY_KYOGRE";
		megaEvolvablePokemonId: "KYOGRE";
	}
>;
export type PokemonFamilyV0383FamilyGroudon = PokemonFamily<
	"V0383_FAMILY_GROUDON",
	{
		familyId: "FAMILY_GROUDON";
		megaEvolvablePokemonId: "GROUDON";
	}
>;
export type PokemonFamilyV0384FamilyRayquaza = PokemonFamily<
	"V0384_FAMILY_RAYQUAZA",
	{
		familyId: "FAMILY_RAYQUAZA";
		megaEvolvablePokemonId: "RAYQUAZA";
	}
>;
export type PokemonFamilyV0385FamilyJirachi = PokemonFamily<
	"V0385_FAMILY_JIRACHI",
	{
		familyId: "FAMILY_JIRACHI";
	}
>;
export type PokemonFamilyV0386FamilyDeoxys = PokemonFamily<
	"V0386_FAMILY_DEOXYS",
	{
		familyId: "FAMILY_DEOXYS";
	}
>;
export type PokemonFamilyV0387FamilyTurtwig = PokemonFamily<
	"V0387_FAMILY_TURTWIG",
	{
		familyId: "FAMILY_TURTWIG";
	}
>;
export type PokemonFamilyV0390FamilyChimchar = PokemonFamily<
	"V0390_FAMILY_CHIMCHAR",
	{
		familyId: "FAMILY_CHIMCHAR";
	}
>;
export type PokemonFamilyV0393FamilyPiplup = PokemonFamily<
	"V0393_FAMILY_PIPLUP",
	{
		familyId: "FAMILY_PIPLUP";
	}
>;
export type PokemonFamilyV0396FamilyStarly = PokemonFamily<
	"V0396_FAMILY_STARLY",
	{
		familyId: "FAMILY_STARLY";
	}
>;
export type PokemonFamilyV0399FamilyBidoof = PokemonFamily<
	"V0399_FAMILY_BIDOOF",
	{
		familyId: "FAMILY_BIDOOF";
	}
>;
export type PokemonFamilyV0401FamilyKricketot = PokemonFamily<
	"V0401_FAMILY_KRICKETOT",
	{
		familyId: "FAMILY_KRICKETOT";
	}
>;
export type PokemonFamilyV0403FamilyShinx = PokemonFamily<
	"V0403_FAMILY_SHINX",
	{
		familyId: "FAMILY_SHINX";
	}
>;
export type PokemonFamilyV0408FamilyCranidos = PokemonFamily<
	"V0408_FAMILY_CRANIDOS",
	{
		familyId: "FAMILY_CRANIDOS";
	}
>;
export type PokemonFamilyV0410FamilyShieldon = PokemonFamily<
	"V0410_FAMILY_SHIELDON",
	{
		familyId: "FAMILY_SHIELDON";
	}
>;
export type PokemonFamilyV0412FamilyBurmy = PokemonFamily<
	"V0412_FAMILY_BURMY",
	{
		familyId: "FAMILY_BURMY";
	}
>;
export type PokemonFamilyV0415FamilyCombee = PokemonFamily<
	"V0415_FAMILY_COMBEE",
	{
		familyId: "FAMILY_COMBEE";
	}
>;
export type PokemonFamilyV0417FamilyPachirisu = PokemonFamily<
	"V0417_FAMILY_PACHIRISU",
	{
		familyId: "FAMILY_PACHIRISU";
	}
>;
export type PokemonFamilyV0418FamilyBuizel = PokemonFamily<
	"V0418_FAMILY_BUIZEL",
	{
		familyId: "FAMILY_BUIZEL";
	}
>;
export type PokemonFamilyV0420FamilyCherubi = PokemonFamily<
	"V0420_FAMILY_CHERUBI",
	{
		familyId: "FAMILY_CHERUBI";
	}
>;
export type PokemonFamilyV0422FamilyShellos = PokemonFamily<
	"V0422_FAMILY_SHELLOS",
	{
		familyId: "FAMILY_SHELLOS";
	}
>;
export type PokemonFamilyV0425FamilyDrifloon = PokemonFamily<
	"V0425_FAMILY_DRIFLOON",
	{
		familyId: "FAMILY_DRIFLOON";
	}
>;
export type PokemonFamilyV0427FamilyBuneary = PokemonFamily<
	"V0427_FAMILY_BUNEARY",
	{
		familyId: "FAMILY_BUNEARY";
		megaEvolvablePokemonId: "LOPUNNY";
	}
>;
export type PokemonFamilyV0431FamilyGlameow = PokemonFamily<
	"V0431_FAMILY_GLAMEOW",
	{
		familyId: "FAMILY_GLAMEOW";
	}
>;
export type PokemonFamilyV0434FamilyStunky = PokemonFamily<
	"V0434_FAMILY_STUNKY",
	{
		familyId: "FAMILY_STUNKY";
	}
>;
export type PokemonFamilyV0436FamilyBronzor = PokemonFamily<
	"V0436_FAMILY_BRONZOR",
	{
		familyId: "FAMILY_BRONZOR";
	}
>;
export type PokemonFamilyV0441FamilyChatot = PokemonFamily<
	"V0441_FAMILY_CHATOT",
	{
		familyId: "FAMILY_CHATOT";
	}
>;
export type PokemonFamilyV0442FamilySpiritomb = PokemonFamily<
	"V0442_FAMILY_SPIRITOMB",
	{
		familyId: "FAMILY_SPIRITOMB";
	}
>;
export type PokemonFamilyV0443FamilyGible = PokemonFamily<
	"V0443_FAMILY_GIBLE",
	{
		familyId: "FAMILY_GIBLE";
		megaEvolvablePokemonId: "GARCHOMP";
	}
>;
export type PokemonFamilyV0448FamilyLucario = PokemonFamily<
	"V0448_FAMILY_LUCARIO",
	{
		familyId: "FAMILY_LUCARIO";
		megaEvolvablePokemonId: "LUCARIO";
	}
>;
export type PokemonFamilyV0449FamilyHippopotas = PokemonFamily<
	"V0449_FAMILY_HIPPOPOTAS",
	{
		familyId: "FAMILY_HIPPOPOTAS";
	}
>;
export type PokemonFamilyV0451FamilySkorupi = PokemonFamily<
	"V0451_FAMILY_SKORUPI",
	{
		familyId: "FAMILY_SKORUPI";
	}
>;
export type PokemonFamilyV0453FamilyCroagunk = PokemonFamily<
	"V0453_FAMILY_CROAGUNK",
	{
		familyId: "FAMILY_CROAGUNK";
	}
>;
export type PokemonFamilyV0455FamilyCarnivine = PokemonFamily<
	"V0455_FAMILY_CARNIVINE",
	{
		familyId: "FAMILY_CARNIVINE";
	}
>;
export type PokemonFamilyV0456FamilyFinneon = PokemonFamily<
	"V0456_FAMILY_FINNEON",
	{
		familyId: "FAMILY_FINNEON";
	}
>;
export type PokemonFamilyV0459FamilySnover = PokemonFamily<
	"V0459_FAMILY_SNOVER",
	{
		familyId: "FAMILY_SNOVER";
		megaEvolvablePokemonId: "ABOMASNOW";
	}
>;
export type PokemonFamilyV0479FamilyRotom = PokemonFamily<
	"V0479_FAMILY_ROTOM",
	{
		familyId: "FAMILY_ROTOM";
	}
>;
export type PokemonFamilyV0480FamilyUxie = PokemonFamily<
	"V0480_FAMILY_UXIE",
	{
		familyId: "FAMILY_UXIE";
	}
>;
export type PokemonFamilyV0481FamilyMesprit = PokemonFamily<
	"V0481_FAMILY_MESPRIT",
	{
		familyId: "FAMILY_MESPRIT";
	}
>;
export type PokemonFamilyV0482FamilyAzelf = PokemonFamily<
	"V0482_FAMILY_AZELF",
	{
		familyId: "FAMILY_AZELF";
	}
>;
export type PokemonFamilyV0483FamilyDialga = PokemonFamily<
	"V0483_FAMILY_DIALGA",
	{
		familyId: "FAMILY_DIALGA";
	}
>;
export type PokemonFamilyV0484FamilyPalkia = PokemonFamily<
	"V0484_FAMILY_PALKIA",
	{
		familyId: "FAMILY_PALKIA";
	}
>;
export type PokemonFamilyV0485FamilyHeatran = PokemonFamily<
	"V0485_FAMILY_HEATRAN",
	{
		familyId: "FAMILY_HEATRAN";
	}
>;
export type PokemonFamilyV0486FamilyRegigigas = PokemonFamily<
	"V0486_FAMILY_REGIGIGAS",
	{
		familyId: "FAMILY_REGIGIGAS";
	}
>;
export type PokemonFamilyV0487FamilyGiratina = PokemonFamily<
	"V0487_FAMILY_GIRATINA",
	{
		familyId: "FAMILY_GIRATINA";
	}
>;
export type PokemonFamilyV0488FamilyCresselia = PokemonFamily<
	"V0488_FAMILY_CRESSELIA",
	{
		familyId: "FAMILY_CRESSELIA";
	}
>;
export type PokemonFamilyV0489FamilyPhione = PokemonFamily<
	"V0489_FAMILY_PHIONE",
	{
		familyId: "FAMILY_PHIONE";
	}
>;
export type PokemonFamilyV0490FamilyManaphy = PokemonFamily<
	"V0490_FAMILY_MANAPHY",
	{
		familyId: "FAMILY_MANAPHY";
	}
>;
export type PokemonFamilyV0491FamilyDarkrai = PokemonFamily<
	"V0491_FAMILY_DARKRAI",
	{
		familyId: "FAMILY_DARKRAI";
	}
>;
export type PokemonFamilyV0492FamilyShaymin = PokemonFamily<
	"V0492_FAMILY_SHAYMIN",
	{
		familyId: "FAMILY_SHAYMIN";
	}
>;
export type PokemonFamilyV0493FamilyArceus = PokemonFamily<
	"V0493_FAMILY_ARCEUS",
	{
		familyId: "FAMILY_ARCEUS";
	}
>;
export type PokemonFamilyV0494FamilyVictini = PokemonFamily<
	"V0494_FAMILY_VICTINI",
	{
		familyId: "FAMILY_VICTINI";
	}
>;
export type PokemonFamilyV0495FamilySnivy = PokemonFamily<
	"V0495_FAMILY_SNIVY",
	{
		familyId: "FAMILY_SNIVY";
	}
>;
export type PokemonFamilyV0498FamilyTepig = PokemonFamily<
	"V0498_FAMILY_TEPIG",
	{
		familyId: "FAMILY_TEPIG";
	}
>;
export type PokemonFamilyV0501FamilyOshawott = PokemonFamily<
	"V0501_FAMILY_OSHAWOTT",
	{
		familyId: "FAMILY_OSHAWOTT";
	}
>;
export type PokemonFamilyV0504FamilyPatrat = PokemonFamily<
	"V0504_FAMILY_PATRAT",
	{
		familyId: "FAMILY_PATRAT";
	}
>;
export type PokemonFamilyV0506FamilyLillipup = PokemonFamily<
	"V0506_FAMILY_LILLIPUP",
	{
		familyId: "FAMILY_LILLIPUP";
	}
>;
export type PokemonFamilyV0509FamilyPurrloin = PokemonFamily<
	"V0509_FAMILY_PURRLOIN",
	{
		familyId: "FAMILY_PURRLOIN";
	}
>;
export type PokemonFamilyV0511FamilyPansage = PokemonFamily<
	"V0511_FAMILY_PANSAGE",
	{
		familyId: "FAMILY_PANSAGE";
	}
>;
export type PokemonFamilyV0513FamilyPansear = PokemonFamily<
	"V0513_FAMILY_PANSEAR",
	{
		familyId: "FAMILY_PANSEAR";
	}
>;
export type PokemonFamilyV0515FamilyPanpour = PokemonFamily<
	"V0515_FAMILY_PANPOUR",
	{
		familyId: "FAMILY_PANPOUR";
	}
>;
export type PokemonFamilyV0517FamilyMunna = PokemonFamily<
	"V0517_FAMILY_MUNNA",
	{
		familyId: "FAMILY_MUNNA";
	}
>;
export type PokemonFamilyV0519FamilyPidove = PokemonFamily<
	"V0519_FAMILY_PIDOVE",
	{
		familyId: "FAMILY_PIDOVE";
	}
>;
export type PokemonFamilyV0522FamilyBlitzle = PokemonFamily<
	"V0522_FAMILY_BLITZLE",
	{
		familyId: "FAMILY_BLITZLE";
	}
>;
export type PokemonFamilyV0524FamilyRoggenrola = PokemonFamily<
	"V0524_FAMILY_ROGGENROLA",
	{
		familyId: "FAMILY_ROGGENROLA";
	}
>;
export type PokemonFamilyV0527FamilyWoobat = PokemonFamily<
	"V0527_FAMILY_WOOBAT",
	{
		familyId: "FAMILY_WOOBAT";
	}
>;
export type PokemonFamilyV0529FamilyDrilbur = PokemonFamily<
	"V0529_FAMILY_DRILBUR",
	{
		familyId: "FAMILY_DRILBUR";
	}
>;
export type PokemonFamilyV0531FamilyAudino = PokemonFamily<
	"V0531_FAMILY_AUDINO",
	{
		familyId: "FAMILY_AUDINO";
		megaEvolvablePokemonId: "AUDINO";
	}
>;
export type PokemonFamilyV0532FamilyTimburr = PokemonFamily<
	"V0532_FAMILY_TIMBURR",
	{
		familyId: "FAMILY_TIMBURR";
	}
>;
export type PokemonFamilyV0535FamilyTympole = PokemonFamily<
	"V0535_FAMILY_TYMPOLE",
	{
		familyId: "FAMILY_TYMPOLE";
	}
>;
export type PokemonFamilyV0538FamilyThroh = PokemonFamily<
	"V0538_FAMILY_THROH",
	{
		familyId: "FAMILY_THROH";
	}
>;
export type PokemonFamilyV0539FamilySawk = PokemonFamily<
	"V0539_FAMILY_SAWK",
	{
		familyId: "FAMILY_SAWK";
	}
>;
export type PokemonFamilyV0540FamilySewaddle = PokemonFamily<
	"V0540_FAMILY_SEWADDLE",
	{
		familyId: "FAMILY_SEWADDLE";
	}
>;
export type PokemonFamilyV0543FamilyVenipede = PokemonFamily<
	"V0543_FAMILY_VENIPEDE",
	{
		familyId: "FAMILY_VENIPEDE";
	}
>;
export type PokemonFamilyV0546FamilyCottonee = PokemonFamily<
	"V0546_FAMILY_COTTONEE",
	{
		familyId: "FAMILY_COTTONEE";
	}
>;
export type PokemonFamilyV0548FamilyPetilil = PokemonFamily<
	"V0548_FAMILY_PETILIL",
	{
		familyId: "FAMILY_PETILIL";
	}
>;
export type PokemonFamilyV0550FamilyBasculin = PokemonFamily<
	"V0550_FAMILY_BASCULIN",
	{
		familyId: "FAMILY_BASCULIN";
	}
>;
export type PokemonFamilyV0551FamilySandile = PokemonFamily<
	"V0551_FAMILY_SANDILE",
	{
		familyId: "FAMILY_SANDILE";
	}
>;
export type PokemonFamilyV0554FamilyDarumaka = PokemonFamily<
	"V0554_FAMILY_DARUMAKA",
	{
		familyId: "FAMILY_DARUMAKA";
	}
>;
export type PokemonFamilyV0556FamilyMaractus = PokemonFamily<
	"V0556_FAMILY_MARACTUS",
	{
		familyId: "FAMILY_MARACTUS";
	}
>;
export type PokemonFamilyV0557FamilyDwebble = PokemonFamily<
	"V0557_FAMILY_DWEBBLE",
	{
		familyId: "FAMILY_DWEBBLE";
	}
>;
export type PokemonFamilyV0559FamilyScraggy = PokemonFamily<
	"V0559_FAMILY_SCRAGGY",
	{
		familyId: "FAMILY_SCRAGGY";
	}
>;
export type PokemonFamilyV0561FamilySigilyph = PokemonFamily<
	"V0561_FAMILY_SIGILYPH",
	{
		familyId: "FAMILY_SIGILYPH";
	}
>;
export type PokemonFamilyV0562FamilyYamask = PokemonFamily<
	"V0562_FAMILY_YAMASK",
	{
		familyId: "FAMILY_YAMASK";
	}
>;
export type PokemonFamilyV0564FamilyTirtouga = PokemonFamily<
	"V0564_FAMILY_TIRTOUGA",
	{
		familyId: "FAMILY_TIRTOUGA";
	}
>;
export type PokemonFamilyV0566FamilyArchen = PokemonFamily<
	"V0566_FAMILY_ARCHEN",
	{
		familyId: "FAMILY_ARCHEN";
	}
>;
export type PokemonFamilyV0568FamilyTrubbish = PokemonFamily<
	"V0568_FAMILY_TRUBBISH",
	{
		familyId: "FAMILY_TRUBBISH";
	}
>;
export type PokemonFamilyV0570FamilyZorua = PokemonFamily<
	"V0570_FAMILY_ZORUA",
	{
		familyId: "FAMILY_ZORUA";
	}
>;
export type PokemonFamilyV0572FamilyMinccino = PokemonFamily<
	"V0572_FAMILY_MINCCINO",
	{
		familyId: "FAMILY_MINCCINO";
	}
>;
export type PokemonFamilyV0574FamilyGothita = PokemonFamily<
	"V0574_FAMILY_GOTHITA",
	{
		familyId: "FAMILY_GOTHITA";
	}
>;
export type PokemonFamilyV0577FamilySolosis = PokemonFamily<
	"V0577_FAMILY_SOLOSIS",
	{
		familyId: "FAMILY_SOLOSIS";
	}
>;
export type PokemonFamilyV0580FamilyDucklett = PokemonFamily<
	"V0580_FAMILY_DUCKLETT",
	{
		familyId: "FAMILY_DUCKLETT";
	}
>;
export type PokemonFamilyV0582FamilyVanillite = PokemonFamily<
	"V0582_FAMILY_VANILLITE",
	{
		familyId: "FAMILY_VANILLITE";
	}
>;
export type PokemonFamilyV0585FamilyDeerling = PokemonFamily<
	"V0585_FAMILY_DEERLING",
	{
		familyId: "FAMILY_DEERLING";
	}
>;
export type PokemonFamilyV0587FamilyEmolga = PokemonFamily<
	"V0587_FAMILY_EMOLGA",
	{
		familyId: "FAMILY_EMOLGA";
	}
>;
export type PokemonFamilyV0588FamilyKarrablast = PokemonFamily<
	"V0588_FAMILY_KARRABLAST",
	{
		familyId: "FAMILY_KARRABLAST";
	}
>;
export type PokemonFamilyV0590FamilyFoongus = PokemonFamily<
	"V0590_FAMILY_FOONGUS",
	{
		familyId: "FAMILY_FOONGUS";
	}
>;
export type PokemonFamilyV0592FamilyFrillish = PokemonFamily<
	"V0592_FAMILY_FRILLISH",
	{
		familyId: "FAMILY_FRILLISH";
	}
>;
export type PokemonFamilyV0594FamilyAlomomola = PokemonFamily<
	"V0594_FAMILY_ALOMOMOLA",
	{
		familyId: "FAMILY_ALOMOMOLA";
	}
>;
export type PokemonFamilyV0595FamilyJoltik = PokemonFamily<
	"V0595_FAMILY_JOLTIK",
	{
		familyId: "FAMILY_JOLTIK";
	}
>;
export type PokemonFamilyV0597FamilyFerroseed = PokemonFamily<
	"V0597_FAMILY_FERROSEED",
	{
		familyId: "FAMILY_FERROSEED";
	}
>;
export type PokemonFamilyV0599FamilyKlink = PokemonFamily<
	"V0599_FAMILY_KLINK",
	{
		familyId: "FAMILY_KLINK";
	}
>;
export type PokemonFamilyV0602FamilyTynamo = PokemonFamily<
	"V0602_FAMILY_TYNAMO",
	{
		familyId: "FAMILY_TYNAMO";
	}
>;
export type PokemonFamilyV0605FamilyElgyem = PokemonFamily<
	"V0605_FAMILY_ELGYEM",
	{
		familyId: "FAMILY_ELGYEM";
	}
>;
export type PokemonFamilyV0607FamilyLitwick = PokemonFamily<
	"V0607_FAMILY_LITWICK",
	{
		familyId: "FAMILY_LITWICK";
	}
>;
export type PokemonFamilyV0610FamilyAxew = PokemonFamily<
	"V0610_FAMILY_AXEW",
	{
		familyId: "FAMILY_AXEW";
	}
>;
export type PokemonFamilyV0613FamilyCubchoo = PokemonFamily<
	"V0613_FAMILY_CUBCHOO",
	{
		familyId: "FAMILY_CUBCHOO";
	}
>;
export type PokemonFamilyV0615FamilyCryogonal = PokemonFamily<
	"V0615_FAMILY_CRYOGONAL",
	{
		familyId: "FAMILY_CRYOGONAL";
	}
>;
export type PokemonFamilyV0616FamilyShelmet = PokemonFamily<
	"V0616_FAMILY_SHELMET",
	{
		familyId: "FAMILY_SHELMET";
	}
>;
export type PokemonFamilyV0618FamilyStunfisk = PokemonFamily<
	"V0618_FAMILY_STUNFISK",
	{
		familyId: "FAMILY_STUNFISK";
	}
>;
export type PokemonFamilyV0619FamilyMienfoo = PokemonFamily<
	"V0619_FAMILY_MIENFOO",
	{
		familyId: "FAMILY_MIENFOO";
	}
>;
export type PokemonFamilyV0621FamilyDruddigon = PokemonFamily<
	"V0621_FAMILY_DRUDDIGON",
	{
		familyId: "FAMILY_DRUDDIGON";
	}
>;
export type PokemonFamilyV0622FamilyGolett = PokemonFamily<
	"V0622_FAMILY_GOLETT",
	{
		familyId: "FAMILY_GOLETT";
	}
>;
export type PokemonFamilyV0624FamilyPawniard = PokemonFamily<
	"V0624_FAMILY_PAWNIARD",
	{
		familyId: "FAMILY_PAWNIARD";
	}
>;
export type PokemonFamilyV0626FamilyBouffalant = PokemonFamily<
	"V0626_FAMILY_BOUFFALANT",
	{
		familyId: "FAMILY_BOUFFALANT";
	}
>;
export type PokemonFamilyV0627FamilyRufflet = PokemonFamily<
	"V0627_FAMILY_RUFFLET",
	{
		familyId: "FAMILY_RUFFLET";
	}
>;
export type PokemonFamilyV0629FamilyVullaby = PokemonFamily<
	"V0629_FAMILY_VULLABY",
	{
		familyId: "FAMILY_VULLABY";
	}
>;
export type PokemonFamilyV0631FamilyHeatmor = PokemonFamily<
	"V0631_FAMILY_HEATMOR",
	{
		familyId: "FAMILY_HEATMOR";
	}
>;
export type PokemonFamilyV0632FamilyDurant = PokemonFamily<
	"V0632_FAMILY_DURANT",
	{
		familyId: "FAMILY_DURANT";
	}
>;
export type PokemonFamilyV0633FamilyDeino = PokemonFamily<
	"V0633_FAMILY_DEINO",
	{
		familyId: "FAMILY_DEINO";
	}
>;
export type PokemonFamilyV0636FamilyLarvesta = PokemonFamily<
	"V0636_FAMILY_LARVESTA",
	{
		familyId: "FAMILY_LARVESTA";
	}
>;
export type PokemonFamilyV0638FamilyCobalion = PokemonFamily<
	"V0638_FAMILY_COBALION",
	{
		familyId: "FAMILY_COBALION";
	}
>;
export type PokemonFamilyV0639FamilyTerrakion = PokemonFamily<
	"V0639_FAMILY_TERRAKION",
	{
		familyId: "FAMILY_TERRAKION";
	}
>;
export type PokemonFamilyV0640FamilyVirizion = PokemonFamily<
	"V0640_FAMILY_VIRIZION",
	{
		familyId: "FAMILY_VIRIZION";
	}
>;
export type PokemonFamilyV0641FamilyTornadus = PokemonFamily<
	"V0641_FAMILY_TORNADUS",
	{
		familyId: "FAMILY_TORNADUS";
	}
>;
export type PokemonFamilyV0642FamilyThundurus = PokemonFamily<
	"V0642_FAMILY_THUNDURUS",
	{
		familyId: "FAMILY_THUNDURUS";
	}
>;
export type PokemonFamilyV0643FamilyReshiram = PokemonFamily<
	"V0643_FAMILY_RESHIRAM",
	{
		familyId: "FAMILY_RESHIRAM";
	}
>;
export type PokemonFamilyV0644FamilyZekrom = PokemonFamily<
	"V0644_FAMILY_ZEKROM",
	{
		familyId: "FAMILY_ZEKROM";
	}
>;
export type PokemonFamilyV0645FamilyLandorus = PokemonFamily<
	"V0645_FAMILY_LANDORUS",
	{
		familyId: "FAMILY_LANDORUS";
	}
>;
export type PokemonFamilyV0646FamilyKyurem = PokemonFamily<
	"V0646_FAMILY_KYUREM",
	{
		familyId: "FAMILY_KYUREM";
	}
>;
export type PokemonFamilyV0647FamilyKeldeo = PokemonFamily<
	"V0647_FAMILY_KELDEO",
	{
		familyId: "FAMILY_KELDEO";
	}
>;
export type PokemonFamilyV0648FamilyMeloetta = PokemonFamily<
	"V0648_FAMILY_MELOETTA",
	{
		familyId: "FAMILY_MELOETTA";
	}
>;
export type PokemonFamilyV0649FamilyGenesect = PokemonFamily<
	"V0649_FAMILY_GENESECT",
	{
		familyId: "FAMILY_GENESECT";
	}
>;
export type PokemonFamilyV0650FamilyChespin = PokemonFamily<
	"V0650_FAMILY_CHESPIN",
	{
		familyId: "FAMILY_CHESPIN";
	}
>;
export type PokemonFamilyV0653FamilyFennekin = PokemonFamily<
	"V0653_FAMILY_FENNEKIN",
	{
		familyId: "FAMILY_FENNEKIN";
	}
>;
export type PokemonFamilyV0656FamilyFroakie = PokemonFamily<
	"V0656_FAMILY_FROAKIE",
	{
		familyId: "FAMILY_FROAKIE";
	}
>;
export type PokemonFamilyV0659FamilyBunnelby = PokemonFamily<
	"V0659_FAMILY_BUNNELBY",
	{
		familyId: "FAMILY_BUNNELBY";
	}
>;
export type PokemonFamilyV0661FamilyFletchling = PokemonFamily<
	"V0661_FAMILY_FLETCHLING",
	{
		familyId: "FAMILY_FLETCHLING";
	}
>;
export type PokemonFamilyV0664FamilyScatterbug = PokemonFamily<
	"V0664_FAMILY_SCATTERBUG",
	{
		familyId: "FAMILY_SCATTERBUG";
	}
>;
export type PokemonFamilyV0667FamilyLitleo = PokemonFamily<
	"V0667_FAMILY_LITLEO",
	{
		familyId: "FAMILY_LITLEO";
	}
>;
export type PokemonFamilyV0669FamilyFlabebe = PokemonFamily<
	"V0669_FAMILY_FLABEBE",
	{
		familyId: "FAMILY_FLABEBE";
	}
>;
export type PokemonFamilyV0672FamilySkiddo = PokemonFamily<
	"V0672_FAMILY_SKIDDO",
	{
		familyId: "FAMILY_SKIDDO";
	}
>;
export type PokemonFamilyV0674FamilyPancham = PokemonFamily<
	"V0674_FAMILY_PANCHAM",
	{
		familyId: "FAMILY_PANCHAM";
	}
>;
export type PokemonFamilyV0676FamilyFurfrou = PokemonFamily<
	"V0676_FAMILY_FURFROU",
	{
		familyId: "FAMILY_FURFROU";
	}
>;
export type PokemonFamilyV0677FamilyEspurr = PokemonFamily<
	"V0677_FAMILY_ESPURR",
	{
		familyId: "FAMILY_ESPURR";
	}
>;
export type PokemonFamilyV0679FamilyHonedge = PokemonFamily<
	"V0679_FAMILY_HONEDGE",
	{
		familyId: "FAMILY_HONEDGE";
	}
>;
export type PokemonFamilyV0682FamilySpritzee = PokemonFamily<
	"V0682_FAMILY_SPRITZEE",
	{
		familyId: "FAMILY_SPRITZEE";
	}
>;
export type PokemonFamilyV0684FamilySwirlix = PokemonFamily<
	"V0684_FAMILY_SWIRLIX",
	{
		familyId: "FAMILY_SWIRLIX";
	}
>;
export type PokemonFamilyV0686FamilyInkay = PokemonFamily<
	"V0686_FAMILY_INKAY",
	{
		familyId: "FAMILY_INKAY";
		megaEvolvablePokemonId: "MALAMAR";
	}
>;
export type PokemonFamilyV0688FamilyBinacle = PokemonFamily<
	"V0688_FAMILY_BINACLE",
	{
		familyId: "FAMILY_BINACLE";
	}
>;
export type PokemonFamilyV0690FamilySkrelp = PokemonFamily<
	"V0690_FAMILY_SKRELP",
	{
		familyId: "FAMILY_SKRELP";
	}
>;
export type PokemonFamilyV0692FamilyClauncher = PokemonFamily<
	"V0692_FAMILY_CLAUNCHER",
	{
		familyId: "FAMILY_CLAUNCHER";
	}
>;
export type PokemonFamilyV0694FamilyHelioptile = PokemonFamily<
	"V0694_FAMILY_HELIOPTILE",
	{
		familyId: "FAMILY_HELIOPTILE";
	}
>;
export type PokemonFamilyV0696FamilyTyrunt = PokemonFamily<
	"V0696_FAMILY_TYRUNT",
	{
		familyId: "FAMILY_TYRUNT";
	}
>;
export type PokemonFamilyV0698FamilyAmaura = PokemonFamily<
	"V0698_FAMILY_AMAURA",
	{
		familyId: "FAMILY_AMAURA";
	}
>;
export type PokemonFamilyV0701FamilyHawlucha = PokemonFamily<
	"V0701_FAMILY_HAWLUCHA",
	{
		familyId: "FAMILY_HAWLUCHA";
	}
>;
export type PokemonFamilyV0702FamilyDedenne = PokemonFamily<
	"V0702_FAMILY_DEDENNE",
	{
		familyId: "FAMILY_DEDENNE";
	}
>;
export type PokemonFamilyV0703FamilyCarbink = PokemonFamily<
	"V0703_FAMILY_CARBINK",
	{
		familyId: "FAMILY_CARBINK";
	}
>;
export type PokemonFamilyV0704FamilyGoomy = PokemonFamily<
	"V0704_FAMILY_GOOMY",
	{
		familyId: "FAMILY_GOOMY";
	}
>;
export type PokemonFamilyV0707FamilyKlefki = PokemonFamily<
	"V0707_FAMILY_KLEFKI",
	{
		familyId: "FAMILY_KLEFKI";
	}
>;
export type PokemonFamilyV0708FamilyPhantump = PokemonFamily<
	"V0708_FAMILY_PHANTUMP",
	{
		familyId: "FAMILY_PHANTUMP";
	}
>;
export type PokemonFamilyV0710FamilyPumpkaboo = PokemonFamily<
	"V0710_FAMILY_PUMPKABOO",
	{
		familyId: "FAMILY_PUMPKABOO";
	}
>;
export type PokemonFamilyV0712FamilyBergmite = PokemonFamily<
	"V0712_FAMILY_BERGMITE",
	{
		familyId: "FAMILY_BERGMITE";
	}
>;
export type PokemonFamilyV0714FamilyNoibat = PokemonFamily<
	"V0714_FAMILY_NOIBAT",
	{
		familyId: "FAMILY_NOIBAT";
	}
>;
export type PokemonFamilyV0716FamilyXerneas = PokemonFamily<
	"V0716_FAMILY_XERNEAS",
	{
		familyId: "FAMILY_XERNEAS";
	}
>;
export type PokemonFamilyV0717FamilyYveltal = PokemonFamily<
	"V0717_FAMILY_YVELTAL",
	{
		familyId: "FAMILY_YVELTAL";
	}
>;
export type PokemonFamilyV0718FamilyZygarde = PokemonFamily<
	"V0718_FAMILY_ZYGARDE",
	{
		familyId: "FAMILY_ZYGARDE";
	}
>;
export type PokemonFamilyV0719FamilyDiancie = PokemonFamily<
	"V0719_FAMILY_DIANCIE",
	{
		familyId: "FAMILY_DIANCIE";
		megaEvolvablePokemonId: "DIANCIE";
	}
>;
export type PokemonFamilyV0720FamilyHoopa = PokemonFamily<
	"V0720_FAMILY_HOOPA",
	{
		familyId: "FAMILY_HOOPA";
	}
>;
export type PokemonFamilyV0721FamilyVolcanion = PokemonFamily<
	"V0721_FAMILY_VOLCANION",
	{
		familyId: "FAMILY_VOLCANION";
	}
>;
export type PokemonFamilyV0722FamilyRowlet = PokemonFamily<
	"V0722_FAMILY_ROWLET",
	{
		familyId: "FAMILY_ROWLET";
	}
>;
export type PokemonFamilyV0725FamilyLitten = PokemonFamily<
	"V0725_FAMILY_LITTEN",
	{
		familyId: "FAMILY_LITTEN";
	}
>;
export type PokemonFamilyV0728FamilyPopplio = PokemonFamily<
	"V0728_FAMILY_POPPLIO",
	{
		familyId: "FAMILY_POPPLIO";
	}
>;
export type PokemonFamilyV0731FamilyPikipek = PokemonFamily<
	"V0731_FAMILY_PIKIPEK",
	{
		familyId: "FAMILY_PIKIPEK";
	}
>;
export type PokemonFamilyV0734FamilyYungoos = PokemonFamily<
	"V0734_FAMILY_YUNGOOS",
	{
		familyId: "FAMILY_YUNGOOS";
	}
>;
export type PokemonFamilyV0736FamilyGrubbin = PokemonFamily<
	"V0736_FAMILY_GRUBBIN",
	{
		familyId: "FAMILY_GRUBBIN";
	}
>;
export type PokemonFamilyV0739FamilyCrabrawler = PokemonFamily<
	"V0739_FAMILY_CRABRAWLER",
	{
		familyId: "FAMILY_CRABRAWLER";
	}
>;
export type PokemonFamilyV0741FamilyOricorio = PokemonFamily<
	"V0741_FAMILY_ORICORIO",
	{
		familyId: "FAMILY_ORICORIO";
	}
>;
export type PokemonFamilyV0742FamilyCutiefly = PokemonFamily<
	"V0742_FAMILY_CUTIEFLY",
	{
		familyId: "FAMILY_CUTIEFLY";
	}
>;
export type PokemonFamilyV0744FamilyRockruff = PokemonFamily<
	"V0744_FAMILY_ROCKRUFF",
	{
		familyId: "FAMILY_ROCKRUFF";
	}
>;
export type PokemonFamilyV0746FamilyWishiwashi = PokemonFamily<
	"V0746_FAMILY_WISHIWASHI",
	{
		familyId: "FAMILY_WISHIWASHI";
	}
>;
export type PokemonFamilyV0747FamilyMareanie = PokemonFamily<
	"V0747_FAMILY_MAREANIE",
	{
		familyId: "FAMILY_MAREANIE";
	}
>;
export type PokemonFamilyV0749FamilyMudbray = PokemonFamily<
	"V0749_FAMILY_MUDBRAY",
	{
		familyId: "FAMILY_MUDBRAY";
	}
>;
export type PokemonFamilyV0751FamilyDewpider = PokemonFamily<
	"V0751_FAMILY_DEWPIDER",
	{
		familyId: "FAMILY_DEWPIDER";
	}
>;
export type PokemonFamilyV0753FamilyFomantis = PokemonFamily<
	"V0753_FAMILY_FOMANTIS",
	{
		familyId: "FAMILY_FOMANTIS";
	}
>;
export type PokemonFamilyV0755FamilyMorelull = PokemonFamily<
	"V0755_FAMILY_MORELULL",
	{
		familyId: "FAMILY_MORELULL";
	}
>;
export type PokemonFamilyV0757FamilySalandit = PokemonFamily<
	"V0757_FAMILY_SALANDIT",
	{
		familyId: "FAMILY_SALANDIT";
	}
>;
export type PokemonFamilyV0759FamilyStufful = PokemonFamily<
	"V0759_FAMILY_STUFFUL",
	{
		familyId: "FAMILY_STUFFUL";
	}
>;
export type PokemonFamilyV0761FamilyBounsweet = PokemonFamily<
	"V0761_FAMILY_BOUNSWEET",
	{
		familyId: "FAMILY_BOUNSWEET";
	}
>;
export type PokemonFamilyV0764FamilyComfey = PokemonFamily<
	"V0764_FAMILY_COMFEY",
	{
		familyId: "FAMILY_COMFEY";
	}
>;
export type PokemonFamilyV0765FamilyOranguru = PokemonFamily<
	"V0765_FAMILY_ORANGURU",
	{
		familyId: "FAMILY_ORANGURU";
	}
>;
export type PokemonFamilyV0766FamilyPassimian = PokemonFamily<
	"V0766_FAMILY_PASSIMIAN",
	{
		familyId: "FAMILY_PASSIMIAN";
	}
>;
export type PokemonFamilyV0767FamilyWimpod = PokemonFamily<
	"V0767_FAMILY_WIMPOD",
	{
		familyId: "FAMILY_WIMPOD";
	}
>;
export type PokemonFamilyV0769FamilySandygast = PokemonFamily<
	"V0769_FAMILY_SANDYGAST",
	{
		familyId: "FAMILY_SANDYGAST";
	}
>;
export type PokemonFamilyV0771FamilyPyukumuku = PokemonFamily<
	"V0771_FAMILY_PYUKUMUKU",
	{
		familyId: "FAMILY_PYUKUMUKU";
	}
>;
export type PokemonFamilyV0772FamilyTypeNull = PokemonFamily<
	"V0772_FAMILY_TYPE_NULL",
	{
		familyId: "FAMILY_TYPE_NULL";
	}
>;
export type PokemonFamilyV0774FamilyMinior = PokemonFamily<
	"V0774_FAMILY_MINIOR",
	{
		familyId: "FAMILY_MINIOR";
	}
>;
export type PokemonFamilyV0775FamilyKomala = PokemonFamily<
	"V0775_FAMILY_KOMALA",
	{
		familyId: "FAMILY_KOMALA";
	}
>;
export type PokemonFamilyV0776FamilyTurtonator = PokemonFamily<
	"V0776_FAMILY_TURTONATOR",
	{
		familyId: "FAMILY_TURTONATOR";
	}
>;
export type PokemonFamilyV0777FamilyTogedemaru = PokemonFamily<
	"V0777_FAMILY_TOGEDEMARU",
	{
		familyId: "FAMILY_TOGEDEMARU";
	}
>;
export type PokemonFamilyV0778FamilyMimikyu = PokemonFamily<
	"V0778_FAMILY_MIMIKYU",
	{
		familyId: "FAMILY_MIMIKYU";
	}
>;
export type PokemonFamilyV0779FamilyBruxish = PokemonFamily<
	"V0779_FAMILY_BRUXISH",
	{
		familyId: "FAMILY_BRUXISH";
	}
>;
export type PokemonFamilyV0780FamilyDrampa = PokemonFamily<
	"V0780_FAMILY_DRAMPA",
	{
		familyId: "FAMILY_DRAMPA";
	}
>;
export type PokemonFamilyV0781FamilyDhelmise = PokemonFamily<
	"V0781_FAMILY_DHELMISE",
	{
		familyId: "FAMILY_DHELMISE";
	}
>;
export type PokemonFamilyV0782FamilyJangmoO = PokemonFamily<
	"V0782_FAMILY_JANGMO_O",
	{
		familyId: "FAMILY_JANGMO_O";
	}
>;
export type PokemonFamilyV0785FamilyTapuKoko = PokemonFamily<
	"V0785_FAMILY_TAPU_KOKO",
	{
		familyId: "FAMILY_TAPU_KOKO";
	}
>;
export type PokemonFamilyV0786FamilyTapuLele = PokemonFamily<
	"V0786_FAMILY_TAPU_LELE",
	{
		familyId: "FAMILY_TAPU_LELE";
	}
>;
export type PokemonFamilyV0787FamilyTapuBulu = PokemonFamily<
	"V0787_FAMILY_TAPU_BULU",
	{
		familyId: "FAMILY_TAPU_BULU";
	}
>;
export type PokemonFamilyV0788FamilyTapuFini = PokemonFamily<
	"V0788_FAMILY_TAPU_FINI",
	{
		familyId: "FAMILY_TAPU_FINI";
	}
>;
export type PokemonFamilyV0789FamilyCosmog = PokemonFamily<
	"V0789_FAMILY_COSMOG",
	{
		familyId: "FAMILY_COSMOG";
	}
>;
export type PokemonFamilyV0793FamilyNihilego = PokemonFamily<
	"V0793_FAMILY_NIHILEGO",
	{
		familyId: "FAMILY_NIHILEGO";
	}
>;
export type PokemonFamilyV0794FamilyBuzzwole = PokemonFamily<
	"V0794_FAMILY_BUZZWOLE",
	{
		familyId: "FAMILY_BUZZWOLE";
	}
>;
export type PokemonFamilyV0795FamilyPheromosa = PokemonFamily<
	"V0795_FAMILY_PHEROMOSA",
	{
		familyId: "FAMILY_PHEROMOSA";
	}
>;
export type PokemonFamilyV0796FamilyXurkitree = PokemonFamily<
	"V0796_FAMILY_XURKITREE",
	{
		familyId: "FAMILY_XURKITREE";
	}
>;
export type PokemonFamilyV0797FamilyCelesteela = PokemonFamily<
	"V0797_FAMILY_CELESTEELA",
	{
		familyId: "FAMILY_CELESTEELA";
	}
>;
export type PokemonFamilyV0798FamilyKartana = PokemonFamily<
	"V0798_FAMILY_KARTANA",
	{
		familyId: "FAMILY_KARTANA";
	}
>;
export type PokemonFamilyV0799FamilyGuzzlord = PokemonFamily<
	"V0799_FAMILY_GUZZLORD",
	{
		familyId: "FAMILY_GUZZLORD";
	}
>;
export type PokemonFamilyV0800FamilyNecrozma = PokemonFamily<
	"V0800_FAMILY_NECROZMA",
	{
		familyId: "FAMILY_NECROZMA";
	}
>;
export type PokemonFamilyV0801FamilyMagearna = PokemonFamily<
	"V0801_FAMILY_MAGEARNA",
	{
		familyId: "FAMILY_MAGEARNA";
	}
>;
export type PokemonFamilyV0802FamilyMarshadow = PokemonFamily<
	"V0802_FAMILY_MARSHADOW",
	{
		familyId: "FAMILY_MARSHADOW";
	}
>;
export type PokemonFamilyV0803FamilyPoipole = PokemonFamily<
	"V0803_FAMILY_POIPOLE",
	{
		familyId: "FAMILY_POIPOLE";
	}
>;
export type PokemonFamilyV0805FamilyStakataka = PokemonFamily<
	"V0805_FAMILY_STAKATAKA",
	{
		familyId: "FAMILY_STAKATAKA";
	}
>;
export type PokemonFamilyV0806FamilyBlacephalon = PokemonFamily<
	"V0806_FAMILY_BLACEPHALON",
	{
		familyId: "FAMILY_BLACEPHALON";
	}
>;
export type PokemonFamilyV0807FamilyZeraora = PokemonFamily<
	"V0807_FAMILY_ZERAORA",
	{
		familyId: "FAMILY_ZERAORA";
	}
>;
export type PokemonFamilyV0808FamilyMeltan = PokemonFamily<
	"V0808_FAMILY_MELTAN",
	{
		familyId: "FAMILY_MELTAN";
	}
>;
export type PokemonFamilyV0810FamilyGrookey = PokemonFamily<
	"V0810_FAMILY_GROOKEY",
	{
		familyId: "FAMILY_GROOKEY";
	}
>;
export type PokemonFamilyV0813FamilyScorbunny = PokemonFamily<
	"V0813_FAMILY_SCORBUNNY",
	{
		familyId: "FAMILY_SCORBUNNY";
	}
>;
export type PokemonFamilyV0816FamilySobble = PokemonFamily<
	"V0816_FAMILY_SOBBLE",
	{
		familyId: "FAMILY_SOBBLE";
	}
>;
export type PokemonFamilyV0819FamilySkwovet = PokemonFamily<
	"V0819_FAMILY_SKWOVET",
	{
		familyId: "FAMILY_SKWOVET";
	}
>;
export type PokemonFamilyV0821FamilyRookidee = PokemonFamily<
	"V0821_FAMILY_ROOKIDEE",
	{
		familyId: "FAMILY_ROOKIDEE";
	}
>;
export type PokemonFamilyV0824FamilyBlipbug = PokemonFamily<
	"V0824_FAMILY_BLIPBUG",
	{
		familyId: "FAMILY_BLIPBUG";
	}
>;
export type PokemonFamilyV0827FamilyNickit = PokemonFamily<
	"V0827_FAMILY_NICKIT",
	{
		familyId: "FAMILY_NICKIT";
	}
>;
export type PokemonFamilyV0829FamilyGossifleur = PokemonFamily<
	"V0829_FAMILY_GOSSIFLEUR",
	{
		familyId: "FAMILY_GOSSIFLEUR";
	}
>;
export type PokemonFamilyV0831FamilyWooloo = PokemonFamily<
	"V0831_FAMILY_WOOLOO",
	{
		familyId: "FAMILY_WOOLOO";
	}
>;
export type PokemonFamilyV0833FamilyChewtle = PokemonFamily<
	"V0833_FAMILY_CHEWTLE",
	{
		familyId: "FAMILY_CHEWTLE";
	}
>;
export type PokemonFamilyV0835FamilyYamper = PokemonFamily<
	"V0835_FAMILY_YAMPER",
	{
		familyId: "FAMILY_YAMPER";
	}
>;
export type PokemonFamilyV0837FamilyRolycoly = PokemonFamily<
	"V0837_FAMILY_ROLYCOLY",
	{
		familyId: "FAMILY_ROLYCOLY";
	}
>;
export type PokemonFamilyV0840FamilyApplin = PokemonFamily<
	"V0840_FAMILY_APPLIN",
	{
		familyId: "FAMILY_APPLIN";
	}
>;
export type PokemonFamilyV0843FamilySilicobra = PokemonFamily<
	"V0843_FAMILY_SILICOBRA",
	{
		familyId: "FAMILY_SILICOBRA";
	}
>;
export type PokemonFamilyV0845FamilyCramorant = PokemonFamily<
	"V0845_FAMILY_CRAMORANT",
	{
		familyId: "FAMILY_CRAMORANT";
	}
>;
export type PokemonFamilyV0846FamilyArrokuda = PokemonFamily<
	"V0846_FAMILY_ARROKUDA",
	{
		familyId: "FAMILY_ARROKUDA";
	}
>;
export type PokemonFamilyV0848FamilyToxel = PokemonFamily<
	"V0848_FAMILY_TOXEL",
	{
		familyId: "FAMILY_TOXEL";
	}
>;
export type PokemonFamilyV0850FamilySizzlipede = PokemonFamily<
	"V0850_FAMILY_SIZZLIPEDE",
	{
		familyId: "FAMILY_SIZZLIPEDE";
	}
>;
export type PokemonFamilyV0852FamilyClobbopus = PokemonFamily<
	"V0852_FAMILY_CLOBBOPUS",
	{
		familyId: "FAMILY_CLOBBOPUS";
	}
>;
export type PokemonFamilyV0854FamilySinistea = PokemonFamily<
	"V0854_FAMILY_SINISTEA",
	{
		familyId: "FAMILY_SINISTEA";
	}
>;
export type PokemonFamilyV0856FamilyHatenna = PokemonFamily<
	"V0856_FAMILY_HATENNA",
	{
		familyId: "FAMILY_HATENNA";
	}
>;
export type PokemonFamilyV0859FamilyImpidimp = PokemonFamily<
	"V0859_FAMILY_IMPIDIMP",
	{
		familyId: "FAMILY_IMPIDIMP";
	}
>;
export type PokemonFamilyV0868FamilyMilcery = PokemonFamily<
	"V0868_FAMILY_MILCERY",
	{
		familyId: "FAMILY_MILCERY";
	}
>;
export type PokemonFamilyV0870FamilyFalinks = PokemonFamily<
	"V0870_FAMILY_FALINKS",
	{
		familyId: "FAMILY_FALINKS";
	}
>;
export type PokemonFamilyV0871FamilyPincurchin = PokemonFamily<
	"V0871_FAMILY_PINCURCHIN",
	{
		familyId: "FAMILY_PINCURCHIN";
	}
>;
export type PokemonFamilyV0872FamilySnom = PokemonFamily<
	"V0872_FAMILY_SNOM",
	{
		familyId: "FAMILY_SNOM";
	}
>;
export type PokemonFamilyV0874FamilyStonjourner = PokemonFamily<
	"V0874_FAMILY_STONJOURNER",
	{
		familyId: "FAMILY_STONJOURNER";
	}
>;
export type PokemonFamilyV0875FamilyEiscue = PokemonFamily<
	"V0875_FAMILY_EISCUE",
	{
		familyId: "FAMILY_EISCUE";
	}
>;
export type PokemonFamilyV0876FamilyIndeedee = PokemonFamily<
	"V0876_FAMILY_INDEEDEE",
	{
		familyId: "FAMILY_INDEEDEE";
	}
>;
export type PokemonFamilyV0877FamilyMorpeko = PokemonFamily<
	"V0877_FAMILY_MORPEKO",
	{
		familyId: "FAMILY_MORPEKO";
	}
>;
export type PokemonFamilyV0878FamilyCufant = PokemonFamily<
	"V0878_FAMILY_CUFANT",
	{
		familyId: "FAMILY_CUFANT";
	}
>;
export type PokemonFamilyV0880FamilyDracozolt = PokemonFamily<
	"V0880_FAMILY_DRACOZOLT",
	{
		familyId: "FAMILY_DRACOZOLT";
	}
>;
export type PokemonFamilyV0881FamilyArctozolt = PokemonFamily<
	"V0881_FAMILY_ARCTOZOLT",
	{
		familyId: "FAMILY_ARCTOZOLT";
	}
>;
export type PokemonFamilyV0882FamilyDracovish = PokemonFamily<
	"V0882_FAMILY_DRACOVISH",
	{
		familyId: "FAMILY_DRACOVISH";
	}
>;
export type PokemonFamilyV0883FamilyArctovish = PokemonFamily<
	"V0883_FAMILY_ARCTOVISH",
	{
		familyId: "FAMILY_ARCTOVISH";
	}
>;
export type PokemonFamilyV0884FamilyDuraludon = PokemonFamily<
	"V0884_FAMILY_DURALUDON",
	{
		familyId: "FAMILY_DURALUDON";
	}
>;
export type PokemonFamilyV0885FamilyDreepy = PokemonFamily<
	"V0885_FAMILY_DREEPY",
	{
		familyId: "FAMILY_DREEPY";
	}
>;
export type PokemonFamilyV0888FamilyZacian = PokemonFamily<
	"V0888_FAMILY_ZACIAN",
	{
		familyId: "FAMILY_ZACIAN";
	}
>;
export type PokemonFamilyV0889FamilyZamazenta = PokemonFamily<
	"V0889_FAMILY_ZAMAZENTA",
	{
		familyId: "FAMILY_ZAMAZENTA";
	}
>;
export type PokemonFamilyV0890FamilyEternatus = PokemonFamily<
	"V0890_FAMILY_ETERNATUS",
	{
		familyId: "FAMILY_ETERNATUS";
	}
>;
export type PokemonFamilyV0891FamilyKubfu = PokemonFamily<
	"V0891_FAMILY_KUBFU",
	{
		familyId: "FAMILY_KUBFU";
	}
>;
export type PokemonFamilyV0893FamilyZarude = PokemonFamily<
	"V0893_FAMILY_ZARUDE",
	{
		familyId: "FAMILY_ZARUDE";
	}
>;
export type PokemonFamilyV0894FamilyRegieleki = PokemonFamily<
	"V0894_FAMILY_REGIELEKI",
	{
		familyId: "FAMILY_REGIELEKI";
	}
>;
export type PokemonFamilyV0895FamilyRegidrago = PokemonFamily<
	"V0895_FAMILY_REGIDRAGO",
	{
		familyId: "FAMILY_REGIDRAGO";
	}
>;
export type PokemonFamilyV0896FamilyGlastrier = PokemonFamily<
	"V0896_FAMILY_GLASTRIER",
	{
		familyId: "FAMILY_GLASTRIER";
	}
>;
export type PokemonFamilyV0897FamilySpectrier = PokemonFamily<
	"V0897_FAMILY_SPECTRIER",
	{
		familyId: "FAMILY_SPECTRIER";
	}
>;
export type PokemonFamilyV0898FamilyCalyrex = PokemonFamily<
	"V0898_FAMILY_CALYREX",
	{
		familyId: "FAMILY_CALYREX";
	}
>;
export type PokemonFamilyV0905FamilyEnamorus = PokemonFamily<
	"V0905_FAMILY_ENAMORUS",
	{
		familyId: "FAMILY_ENAMORUS";
	}
>;
export type PokemonFamilyV0906FamilySprigatito = PokemonFamily<
	"V0906_FAMILY_SPRIGATITO",
	{
		familyId: "FAMILY_SPRIGATITO";
	}
>;
export type PokemonFamilyV0909FamilyFuecoco = PokemonFamily<
	"V0909_FAMILY_FUECOCO",
	{
		familyId: "FAMILY_FUECOCO";
	}
>;
export type PokemonFamilyV0912FamilyQuaxly = PokemonFamily<
	"V0912_FAMILY_QUAXLY",
	{
		familyId: "FAMILY_QUAXLY";
	}
>;
export type PokemonFamilyV0915FamilyLechonk = PokemonFamily<
	"V0915_FAMILY_LECHONK",
	{
		familyId: "FAMILY_LECHONK";
	}
>;
export type PokemonFamilyV0917FamilyTarountula = PokemonFamily<
	"V0917_FAMILY_TAROUNTULA",
	{
		familyId: "FAMILY_TAROUNTULA";
	}
>;
export type PokemonFamilyV0919FamilyNymble = PokemonFamily<
	"V0919_FAMILY_NYMBLE",
	{
		familyId: "FAMILY_NYMBLE";
	}
>;
export type PokemonFamilyV0921FamilyPawmi = PokemonFamily<
	"V0921_FAMILY_PAWMI",
	{
		familyId: "FAMILY_PAWMI";
	}
>;
export type PokemonFamilyV0924FamilyTandemaus = PokemonFamily<
	"V0924_FAMILY_TANDEMAUS",
	{
		familyId: "FAMILY_TANDEMAUS";
	}
>;
export type PokemonFamilyV0926FamilyFidough = PokemonFamily<
	"V0926_FAMILY_FIDOUGH",
	{
		familyId: "FAMILY_FIDOUGH";
	}
>;
export type PokemonFamilyV0928FamilySmoliv = PokemonFamily<
	"V0928_FAMILY_SMOLIV",
	{
		familyId: "FAMILY_SMOLIV";
	}
>;
export type PokemonFamilyV0931FamilySquawkabilly = PokemonFamily<
	"V0931_FAMILY_SQUAWKABILLY",
	{
		familyId: "FAMILY_SQUAWKABILLY";
	}
>;
export type PokemonFamilyV0932FamilyNacli = PokemonFamily<
	"V0932_FAMILY_NACLI",
	{
		familyId: "FAMILY_NACLI";
	}
>;
export type PokemonFamilyV0935FamilyCharcadet = PokemonFamily<
	"V0935_FAMILY_CHARCADET",
	{
		familyId: "FAMILY_CHARCADET";
	}
>;
export type PokemonFamilyV0938FamilyTadbulb = PokemonFamily<
	"V0938_FAMILY_TADBULB",
	{
		familyId: "FAMILY_TADBULB";
	}
>;
export type PokemonFamilyV0940FamilyWattrel = PokemonFamily<
	"V0940_FAMILY_WATTREL",
	{
		familyId: "FAMILY_WATTREL";
	}
>;
export type PokemonFamilyV0942FamilyMaschiff = PokemonFamily<
	"V0942_FAMILY_MASCHIFF",
	{
		familyId: "FAMILY_MASCHIFF";
	}
>;
export type PokemonFamilyV0944FamilyShroodle = PokemonFamily<
	"V0944_FAMILY_SHROODLE",
	{
		familyId: "FAMILY_SHROODLE";
	}
>;
export type PokemonFamilyV0946FamilyBramblin = PokemonFamily<
	"V0946_FAMILY_BRAMBLIN",
	{
		familyId: "FAMILY_BRAMBLIN";
	}
>;
export type PokemonFamilyV0948FamilyToedscool = PokemonFamily<
	"V0948_FAMILY_TOEDSCOOL",
	{
		familyId: "FAMILY_TOEDSCOOL";
	}
>;
export type PokemonFamilyV0950FamilyKlawf = PokemonFamily<
	"V0950_FAMILY_KLAWF",
	{
		familyId: "FAMILY_KLAWF";
	}
>;
export type PokemonFamilyV0951FamilyCapsakid = PokemonFamily<
	"V0951_FAMILY_CAPSAKID",
	{
		familyId: "FAMILY_CAPSAKID";
	}
>;
export type PokemonFamilyV0953FamilyRellor = PokemonFamily<
	"V0953_FAMILY_RELLOR",
	{
		familyId: "FAMILY_RELLOR";
	}
>;
export type PokemonFamilyV0955FamilyFlittle = PokemonFamily<
	"V0955_FAMILY_FLITTLE",
	{
		familyId: "FAMILY_FLITTLE";
	}
>;
export type PokemonFamilyV0957FamilyTinkatink = PokemonFamily<
	"V0957_FAMILY_TINKATINK",
	{
		familyId: "FAMILY_TINKATINK";
	}
>;
export type PokemonFamilyV0960FamilyWiglett = PokemonFamily<
	"V0960_FAMILY_WIGLETT",
	{
		familyId: "FAMILY_WIGLETT";
	}
>;
export type PokemonFamilyV0962FamilyBombirdier = PokemonFamily<
	"V0962_FAMILY_BOMBIRDIER",
	{
		familyId: "FAMILY_BOMBIRDIER";
	}
>;
export type PokemonFamilyV0963FamilyFinizen = PokemonFamily<
	"V0963_FAMILY_FINIZEN",
	{
		familyId: "FAMILY_FINIZEN";
	}
>;
export type PokemonFamilyV0965FamilyVaroom = PokemonFamily<
	"V0965_FAMILY_VAROOM",
	{
		familyId: "FAMILY_VAROOM";
	}
>;
export type PokemonFamilyV0967FamilyCyclizar = PokemonFamily<
	"V0967_FAMILY_CYCLIZAR",
	{
		familyId: "FAMILY_CYCLIZAR";
	}
>;
export type PokemonFamilyV0968FamilyOrthworm = PokemonFamily<
	"V0968_FAMILY_ORTHWORM",
	{
		familyId: "FAMILY_ORTHWORM";
	}
>;
export type PokemonFamilyV0969FamilyGlimmet = PokemonFamily<
	"V0969_FAMILY_GLIMMET",
	{
		familyId: "FAMILY_GLIMMET";
	}
>;
export type PokemonFamilyV0971FamilyGreavard = PokemonFamily<
	"V0971_FAMILY_GREAVARD",
	{
		familyId: "FAMILY_GREAVARD";
	}
>;
export type PokemonFamilyV0973FamilyFlamigo = PokemonFamily<
	"V0973_FAMILY_FLAMIGO",
	{
		familyId: "FAMILY_FLAMIGO";
	}
>;
export type PokemonFamilyV0974FamilyCetoddle = PokemonFamily<
	"V0974_FAMILY_CETODDLE",
	{
		familyId: "FAMILY_CETODDLE";
	}
>;
export type PokemonFamilyV0976FamilyVeluza = PokemonFamily<
	"V0976_FAMILY_VELUZA",
	{
		familyId: "FAMILY_VELUZA";
	}
>;
export type PokemonFamilyV0977FamilyDondozo = PokemonFamily<
	"V0977_FAMILY_DONDOZO",
	{
		familyId: "FAMILY_DONDOZO";
	}
>;
export type PokemonFamilyV0978FamilyTatsugiri = PokemonFamily<
	"V0978_FAMILY_TATSUGIRI",
	{
		familyId: "FAMILY_TATSUGIRI";
	}
>;
export type PokemonFamilyV0984FamilyGreattusk = PokemonFamily<
	"V0984_FAMILY_GREATTUSK",
	{
		familyId: "FAMILY_GREATTUSK";
	}
>;
export type PokemonFamilyV0985FamilyScreamtail = PokemonFamily<
	"V0985_FAMILY_SCREAMTAIL",
	{
		familyId: "FAMILY_SCREAMTAIL";
	}
>;
export type PokemonFamilyV0986FamilyBrutebonnet = PokemonFamily<
	"V0986_FAMILY_BRUTEBONNET",
	{
		familyId: "FAMILY_BRUTEBONNET";
	}
>;
export type PokemonFamilyV0987FamilyFluttermane = PokemonFamily<
	"V0987_FAMILY_FLUTTERMANE",
	{
		familyId: "FAMILY_FLUTTERMANE";
	}
>;
export type PokemonFamilyV0988FamilySlitherwing = PokemonFamily<
	"V0988_FAMILY_SLITHERWING",
	{
		familyId: "FAMILY_SLITHERWING";
	}
>;
export type PokemonFamilyV0989FamilySandyshocks = PokemonFamily<
	"V0989_FAMILY_SANDYSHOCKS",
	{
		familyId: "FAMILY_SANDYSHOCKS";
	}
>;
export type PokemonFamilyV0990FamilyIrontreads = PokemonFamily<
	"V0990_FAMILY_IRONTREADS",
	{
		familyId: "FAMILY_IRONTREADS";
	}
>;
export type PokemonFamilyV0991FamilyIronbundle = PokemonFamily<
	"V0991_FAMILY_IRONBUNDLE",
	{
		familyId: "FAMILY_IRONBUNDLE";
	}
>;
export type PokemonFamilyV0992FamilyIronhands = PokemonFamily<
	"V0992_FAMILY_IRONHANDS",
	{
		familyId: "FAMILY_IRONHANDS";
	}
>;
export type PokemonFamilyV0993FamilyIronjugulis = PokemonFamily<
	"V0993_FAMILY_IRONJUGULIS",
	{
		familyId: "FAMILY_IRONJUGULIS";
	}
>;
export type PokemonFamilyV0994FamilyIronmoth = PokemonFamily<
	"V0994_FAMILY_IRONMOTH",
	{
		familyId: "FAMILY_IRONMOTH";
	}
>;
export type PokemonFamilyV0995FamilyIronthorns = PokemonFamily<
	"V0995_FAMILY_IRONTHORNS",
	{
		familyId: "FAMILY_IRONTHORNS";
	}
>;
export type PokemonFamilyV0996FamilyFrigibax = PokemonFamily<
	"V0996_FAMILY_FRIGIBAX",
	{
		familyId: "FAMILY_FRIGIBAX";
	}
>;
export type PokemonFamilyV0999FamilyGimmighoul = PokemonFamily<
	"V0999_FAMILY_GIMMIGHOUL",
	{
		familyId: "FAMILY_GIMMIGHOUL";
	}
>;
export type PokemonFamilyV1001FamilyWochien = PokemonFamily<
	"V1001_FAMILY_WOCHIEN",
	{
		familyId: "FAMILY_WOCHIEN";
	}
>;
export type PokemonFamilyV1002FamilyChienpao = PokemonFamily<
	"V1002_FAMILY_CHIENPAO",
	{
		familyId: "FAMILY_CHIENPAO";
	}
>;
export type PokemonFamilyV1003FamilyTinglu = PokemonFamily<
	"V1003_FAMILY_TINGLU",
	{
		familyId: "FAMILY_TINGLU";
	}
>;
export type PokemonFamilyV1004FamilyChiyu = PokemonFamily<
	"V1004_FAMILY_CHIYU",
	{
		familyId: "FAMILY_CHIYU";
	}
>;
export type PokemonFamilyV1005FamilyRoaringmoon = PokemonFamily<
	"V1005_FAMILY_ROARINGMOON",
	{
		familyId: "FAMILY_ROARINGMOON";
	}
>;
export type PokemonFamilyV1006FamilyIronvaliant = PokemonFamily<
	"V1006_FAMILY_IRONVALIANT",
	{
		familyId: "FAMILY_IRONVALIANT";
	}
>;
export type PokemonFamilyV1007FamilyKoraidon = PokemonFamily<
	"V1007_FAMILY_KORAIDON",
	{
		familyId: "FAMILY_KORAIDON";
	}
>;
export type PokemonFamilyV1008FamilyMiraidon = PokemonFamily<
	"V1008_FAMILY_MIRAIDON",
	{
		familyId: "FAMILY_MIRAIDON";
	}
>;
export type PokemonFamilyV1009FamilyWalkingwake = PokemonFamily<
	"V1009_FAMILY_WALKINGWAKE",
	{
		familyId: "FAMILY_WALKINGWAKE";
	}
>;
export type PokemonFamilyV1010FamilyIronleaves = PokemonFamily<
	"V1010_FAMILY_IRONLEAVES",
	{
		familyId: "FAMILY_IRONLEAVES";
	}
>;
export type PokemonFamilyV1012FamilyPoltchageist = PokemonFamily<
	"V1012_FAMILY_POLTCHAGEIST",
	{
		familyId: "FAMILY_POLTCHAGEIST";
	}
>;
export type PokemonFamilyV1014FamilyOkidogi = PokemonFamily<
	"V1014_FAMILY_OKIDOGI",
	{
		familyId: "FAMILY_OKIDOGI";
	}
>;
export type PokemonFamilyV1015FamilyMunkidori = PokemonFamily<
	"V1015_FAMILY_MUNKIDORI",
	{
		familyId: "FAMILY_MUNKIDORI";
	}
>;
export type PokemonFamilyV1016FamilyFezandipiti = PokemonFamily<
	"V1016_FAMILY_FEZANDIPITI",
	{
		familyId: "FAMILY_FEZANDIPITI";
	}
>;
export type PokemonFamilyV1017FamilyOgerpon = PokemonFamily<
	"V1017_FAMILY_OGERPON",
	{
		familyId: "FAMILY_OGERPON";
	}
>;
export type PokemonFamilyV1020FamilyGougingfire = PokemonFamily<
	"V1020_FAMILY_GOUGINGFIRE",
	{
		familyId: "FAMILY_GOUGINGFIRE";
	}
>;
export type PokemonFamilyV1021FamilyRagingbolt = PokemonFamily<
	"V1021_FAMILY_RAGINGBOLT",
	{
		familyId: "FAMILY_RAGINGBOLT";
	}
>;
export type PokemonFamilyV1022FamilyIronboulder = PokemonFamily<
	"V1022_FAMILY_IRONBOULDER",
	{
		familyId: "FAMILY_IRONBOULDER";
	}
>;
export type PokemonFamilyV1023FamilyIroncrown = PokemonFamily<
	"V1023_FAMILY_IRONCROWN",
	{
		familyId: "FAMILY_IRONCROWN";
	}
>;
export type PokemonFamilyV1024FamilyTerapagos = PokemonFamily<
	"V1024_FAMILY_TERAPAGOS",
	{
		familyId: "FAMILY_TERAPAGOS";
	}
>;
export type PokemonFamilyV1025FamilyPecharunt = PokemonFamily<
	"V1025_FAMILY_PECHARUNT",
	{
		familyId: "FAMILY_PECHARUNT";
	}
>;

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

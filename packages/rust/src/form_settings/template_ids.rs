//! Generated from Pokémon GO masterfile — group "formSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum FormSettingsTemplateId {
    #[serde(rename = "FORMS_V0001_POKEMON_BULBASAUR")]
    FormsV0001PokemonBulbasaur,
    #[serde(rename = "FORMS_V0002_POKEMON_IVYSAUR")]
    FormsV0002PokemonIvysaur,
    #[serde(rename = "FORMS_V0003_POKEMON_VENUSAUR")]
    FormsV0003PokemonVenusaur,
    #[serde(rename = "FORMS_V0004_POKEMON_CHARMANDER")]
    FormsV0004PokemonCharmander,
    #[serde(rename = "FORMS_V0005_POKEMON_CHARMELEON")]
    FormsV0005PokemonCharmeleon,
    #[serde(rename = "FORMS_V0006_POKEMON_CHARIZARD")]
    FormsV0006PokemonCharizard,
    #[serde(rename = "FORMS_V0007_POKEMON_SQUIRTLE")]
    FormsV0007PokemonSquirtle,
    #[serde(rename = "FORMS_V0008_POKEMON_WARTORTLE")]
    FormsV0008PokemonWartortle,
    #[serde(rename = "FORMS_V0009_POKEMON_BLASTOISE")]
    FormsV0009PokemonBlastoise,
    #[serde(rename = "FORMS_V0010_POKEMON_CATERPIE")]
    FormsV0010PokemonCaterpie,
    #[serde(rename = "FORMS_V0011_POKEMON_METAPOD")]
    FormsV0011PokemonMetapod,
    #[serde(rename = "FORMS_V0012_POKEMON_BUTTERFREE")]
    FormsV0012PokemonButterfree,
    #[serde(rename = "FORMS_V0013_POKEMON_WEEDLE")]
    FormsV0013PokemonWeedle,
    #[serde(rename = "FORMS_V0014_POKEMON_KAKUNA")]
    FormsV0014PokemonKakuna,
    #[serde(rename = "FORMS_V0015_POKEMON_BEEDRILL")]
    FormsV0015PokemonBeedrill,
    #[serde(rename = "FORMS_V0016_POKEMON_PIDGEY")]
    FormsV0016PokemonPidgey,
    #[serde(rename = "FORMS_V0017_POKEMON_PIDGEOTTO")]
    FormsV0017PokemonPidgeotto,
    #[serde(rename = "FORMS_V0018_POKEMON_PIDGEOT")]
    FormsV0018PokemonPidgeot,
    #[serde(rename = "FORMS_V0019_POKEMON_RATTATA")]
    FormsV0019PokemonRattata,
    #[serde(rename = "FORMS_V0020_POKEMON_RATICATE")]
    FormsV0020PokemonRaticate,
    #[serde(rename = "FORMS_V0021_POKEMON_SPEAROW")]
    FormsV0021PokemonSpearow,
    #[serde(rename = "FORMS_V0022_POKEMON_FEAROW")]
    FormsV0022PokemonFearow,
    #[serde(rename = "FORMS_V0023_POKEMON_EKANS")]
    FormsV0023PokemonEkans,
    #[serde(rename = "FORMS_V0024_POKEMON_ARBOK")]
    FormsV0024PokemonArbok,
    #[serde(rename = "FORMS_V0025_POKEMON_PIKACHU")]
    FormsV0025PokemonPikachu,
    #[serde(rename = "FORMS_V0026_POKEMON_RAICHU")]
    FormsV0026PokemonRaichu,
    #[serde(rename = "FORMS_V0027_POKEMON_SANDSHREW")]
    FormsV0027PokemonSandshrew,
    #[serde(rename = "FORMS_V0028_POKEMON_SANDSLASH")]
    FormsV0028PokemonSandslash,
    #[serde(rename = "FORMS_V0029_POKEMON_NIDORAN")]
    FormsV0029PokemonNidoran,
    #[serde(rename = "FORMS_V0030_POKEMON_NIDORINA")]
    FormsV0030PokemonNidorina,
    #[serde(rename = "FORMS_V0031_POKEMON_NIDOQUEEN")]
    FormsV0031PokemonNidoqueen,
    #[serde(rename = "FORMS_V0032_POKEMON_NIDORAN")]
    FormsV0032PokemonNidoran,
    #[serde(rename = "FORMS_V0033_POKEMON_NIDORINO")]
    FormsV0033PokemonNidorino,
    #[serde(rename = "FORMS_V0034_POKEMON_NIDOKING")]
    FormsV0034PokemonNidoking,
    #[serde(rename = "FORMS_V0035_POKEMON_CLEFAIRY")]
    FormsV0035PokemonClefairy,
    #[serde(rename = "FORMS_V0036_POKEMON_CLEFABLE")]
    FormsV0036PokemonClefable,
    #[serde(rename = "FORMS_V0037_POKEMON_VULPIX")]
    FormsV0037PokemonVulpix,
    #[serde(rename = "FORMS_V0038_POKEMON_NINETALES")]
    FormsV0038PokemonNinetales,
    #[serde(rename = "FORMS_V0039_POKEMON_JIGGLYPUFF")]
    FormsV0039PokemonJigglypuff,
    #[serde(rename = "FORMS_V0040_POKEMON_WIGGLYTUFF")]
    FormsV0040PokemonWigglytuff,
    #[serde(rename = "FORMS_V0041_POKEMON_ZUBAT")]
    FormsV0041PokemonZubat,
    #[serde(rename = "FORMS_V0042_POKEMON_GOLBAT")]
    FormsV0042PokemonGolbat,
    #[serde(rename = "FORMS_V0043_POKEMON_ODDISH")]
    FormsV0043PokemonOddish,
    #[serde(rename = "FORMS_V0044_POKEMON_GLOOM")]
    FormsV0044PokemonGloom,
    #[serde(rename = "FORMS_V0045_POKEMON_VILEPLUME")]
    FormsV0045PokemonVileplume,
    #[serde(rename = "FORMS_V0046_POKEMON_PARAS")]
    FormsV0046PokemonParas,
    #[serde(rename = "FORMS_V0047_POKEMON_PARASECT")]
    FormsV0047PokemonParasect,
    #[serde(rename = "FORMS_V0048_POKEMON_VENONAT")]
    FormsV0048PokemonVenonat,
    #[serde(rename = "FORMS_V0049_POKEMON_VENOMOTH")]
    FormsV0049PokemonVenomoth,
    #[serde(rename = "FORMS_V0050_POKEMON_DIGLETT")]
    FormsV0050PokemonDiglett,
    #[serde(rename = "FORMS_V0051_POKEMON_DUGTRIO")]
    FormsV0051PokemonDugtrio,
    #[serde(rename = "FORMS_V0052_POKEMON_MEOWTH")]
    FormsV0052PokemonMeowth,
    #[serde(rename = "FORMS_V0053_POKEMON_PERSIAN")]
    FormsV0053PokemonPersian,
    #[serde(rename = "FORMS_V0054_POKEMON_PSYDUCK")]
    FormsV0054PokemonPsyduck,
    #[serde(rename = "FORMS_V0055_POKEMON_GOLDUCK")]
    FormsV0055PokemonGolduck,
    #[serde(rename = "FORMS_V0056_POKEMON_MANKEY")]
    FormsV0056PokemonMankey,
    #[serde(rename = "FORMS_V0057_POKEMON_PRIMEAPE")]
    FormsV0057PokemonPrimeape,
    #[serde(rename = "FORMS_V0058_POKEMON_GROWLITHE")]
    FormsV0058PokemonGrowlithe,
    #[serde(rename = "FORMS_V0059_POKEMON_ARCANINE")]
    FormsV0059PokemonArcanine,
    #[serde(rename = "FORMS_V0060_POKEMON_POLIWAG")]
    FormsV0060PokemonPoliwag,
    #[serde(rename = "FORMS_V0061_POKEMON_POLIWHIRL")]
    FormsV0061PokemonPoliwhirl,
    #[serde(rename = "FORMS_V0062_POKEMON_POLIWRATH")]
    FormsV0062PokemonPoliwrath,
    #[serde(rename = "FORMS_V0063_POKEMON_ABRA")]
    FormsV0063PokemonAbra,
    #[serde(rename = "FORMS_V0064_POKEMON_KADABRA")]
    FormsV0064PokemonKadabra,
    #[serde(rename = "FORMS_V0065_POKEMON_ALAKAZAM")]
    FormsV0065PokemonAlakazam,
    #[serde(rename = "FORMS_V0066_POKEMON_MACHOP")]
    FormsV0066PokemonMachop,
    #[serde(rename = "FORMS_V0067_POKEMON_MACHOKE")]
    FormsV0067PokemonMachoke,
    #[serde(rename = "FORMS_V0068_POKEMON_MACHAMP")]
    FormsV0068PokemonMachamp,
    #[serde(rename = "FORMS_V0069_POKEMON_BELLSPROUT")]
    FormsV0069PokemonBellsprout,
    #[serde(rename = "FORMS_V0070_POKEMON_WEEPINBELL")]
    FormsV0070PokemonWeepinbell,
    #[serde(rename = "FORMS_V0071_POKEMON_VICTREEBEL")]
    FormsV0071PokemonVictreebel,
    #[serde(rename = "FORMS_V0072_POKEMON_TENTACOOL")]
    FormsV0072PokemonTentacool,
    #[serde(rename = "FORMS_V0073_POKEMON_TENTACRUEL")]
    FormsV0073PokemonTentacruel,
    #[serde(rename = "FORMS_V0074_POKEMON_GEODUDE")]
    FormsV0074PokemonGeodude,
    #[serde(rename = "FORMS_V0075_POKEMON_GRAVELER")]
    FormsV0075PokemonGraveler,
    #[serde(rename = "FORMS_V0076_POKEMON_GOLEM")]
    FormsV0076PokemonGolem,
    #[serde(rename = "FORMS_V0077_POKEMON_PONYTA")]
    FormsV0077PokemonPonyta,
    #[serde(rename = "FORMS_V0078_POKEMON_RAPIDASH")]
    FormsV0078PokemonRapidash,
    #[serde(rename = "FORMS_V0079_POKEMON_SLOWPOKE")]
    FormsV0079PokemonSlowpoke,
    #[serde(rename = "FORMS_V0080_POKEMON_SLOWBRO")]
    FormsV0080PokemonSlowbro,
    #[serde(rename = "FORMS_V0081_POKEMON_MAGNEMITE")]
    FormsV0081PokemonMagnemite,
    #[serde(rename = "FORMS_V0082_POKEMON_MAGNETON")]
    FormsV0082PokemonMagneton,
    #[serde(rename = "FORMS_V0083_POKEMON_FARFETCHD")]
    FormsV0083PokemonFarfetchd,
    #[serde(rename = "FORMS_V0084_POKEMON_DODUO")]
    FormsV0084PokemonDoduo,
    #[serde(rename = "FORMS_V0085_POKEMON_DODRIO")]
    FormsV0085PokemonDodrio,
    #[serde(rename = "FORMS_V0086_POKEMON_SEEL")]
    FormsV0086PokemonSeel,
    #[serde(rename = "FORMS_V0087_POKEMON_DEWGONG")]
    FormsV0087PokemonDewgong,
    #[serde(rename = "FORMS_V0088_POKEMON_GRIMER")]
    FormsV0088PokemonGrimer,
    #[serde(rename = "FORMS_V0089_POKEMON_MUK")]
    FormsV0089PokemonMuk,
    #[serde(rename = "FORMS_V0090_POKEMON_SHELLDER")]
    FormsV0090PokemonShellder,
    #[serde(rename = "FORMS_V0091_POKEMON_CLOYSTER")]
    FormsV0091PokemonCloyster,
    #[serde(rename = "FORMS_V0092_POKEMON_GASTLY")]
    FormsV0092PokemonGastly,
    #[serde(rename = "FORMS_V0093_POKEMON_HAUNTER")]
    FormsV0093PokemonHaunter,
    #[serde(rename = "FORMS_V0094_POKEMON_GENGAR")]
    FormsV0094PokemonGengar,
    #[serde(rename = "FORMS_V0095_POKEMON_ONIX")]
    FormsV0095PokemonOnix,
    #[serde(rename = "FORMS_V0096_POKEMON_DROWZEE")]
    FormsV0096PokemonDrowzee,
    #[serde(rename = "FORMS_V0097_POKEMON_HYPNO")]
    FormsV0097PokemonHypno,
    #[serde(rename = "FORMS_V0098_POKEMON_KRABBY")]
    FormsV0098PokemonKrabby,
    #[serde(rename = "FORMS_V0099_POKEMON_KINGLER")]
    FormsV0099PokemonKingler,
    #[serde(rename = "FORMS_V0100_POKEMON_VOLTORB")]
    FormsV0100PokemonVoltorb,
    #[serde(rename = "FORMS_V0101_POKEMON_ELECTRODE")]
    FormsV0101PokemonElectrode,
    #[serde(rename = "FORMS_V0102_POKEMON_EXEGGCUTE")]
    FormsV0102PokemonExeggcute,
    #[serde(rename = "FORMS_V0103_POKEMON_EXEGGUTOR")]
    FormsV0103PokemonExeggutor,
    #[serde(rename = "FORMS_V0104_POKEMON_CUBONE")]
    FormsV0104PokemonCubone,
    #[serde(rename = "FORMS_V0105_POKEMON_MAROWAK")]
    FormsV0105PokemonMarowak,
    #[serde(rename = "FORMS_V0106_POKEMON_HITMONLEE")]
    FormsV0106PokemonHitmonlee,
    #[serde(rename = "FORMS_V0107_POKEMON_HITMONCHAN")]
    FormsV0107PokemonHitmonchan,
    #[serde(rename = "FORMS_V0108_POKEMON_LICKITUNG")]
    FormsV0108PokemonLickitung,
    #[serde(rename = "FORMS_V0109_POKEMON_KOFFING")]
    FormsV0109PokemonKoffing,
    #[serde(rename = "FORMS_V0110_POKEMON_WEEZING")]
    FormsV0110PokemonWeezing,
    #[serde(rename = "FORMS_V0111_POKEMON_RHYHORN")]
    FormsV0111PokemonRhyhorn,
    #[serde(rename = "FORMS_V0112_POKEMON_RHYDON")]
    FormsV0112PokemonRhydon,
    #[serde(rename = "FORMS_V0113_POKEMON_CHANSEY")]
    FormsV0113PokemonChansey,
    #[serde(rename = "FORMS_V0114_POKEMON_TANGELA")]
    FormsV0114PokemonTangela,
    #[serde(rename = "FORMS_V0115_POKEMON_KANGASKHAN")]
    FormsV0115PokemonKangaskhan,
    #[serde(rename = "FORMS_V0116_POKEMON_HORSEA")]
    FormsV0116PokemonHorsea,
    #[serde(rename = "FORMS_V0117_POKEMON_SEADRA")]
    FormsV0117PokemonSeadra,
    #[serde(rename = "FORMS_V0118_POKEMON_GOLDEEN")]
    FormsV0118PokemonGoldeen,
    #[serde(rename = "FORMS_V0119_POKEMON_SEAKING")]
    FormsV0119PokemonSeaking,
    #[serde(rename = "FORMS_V0120_POKEMON_STARYU")]
    FormsV0120PokemonStaryu,
    #[serde(rename = "FORMS_V0121_POKEMON_STARMIE")]
    FormsV0121PokemonStarmie,
    #[serde(rename = "FORMS_V0122_POKEMON_MR_MIME")]
    FormsV0122PokemonMrMime,
    #[serde(rename = "FORMS_V0123_POKEMON_SCYTHER")]
    FormsV0123PokemonScyther,
    #[serde(rename = "FORMS_V0124_POKEMON_JYNX")]
    FormsV0124PokemonJynx,
    #[serde(rename = "FORMS_V0125_POKEMON_ELECTABUZZ")]
    FormsV0125PokemonElectabuzz,
    #[serde(rename = "FORMS_V0126_POKEMON_MAGMAR")]
    FormsV0126PokemonMagmar,
    #[serde(rename = "FORMS_V0127_POKEMON_PINSIR")]
    FormsV0127PokemonPinsir,
    #[serde(rename = "FORMS_V0128_POKEMON_TAUROS")]
    FormsV0128PokemonTauros,
    #[serde(rename = "FORMS_V0129_POKEMON_MAGIKARP")]
    FormsV0129PokemonMagikarp,
    #[serde(rename = "FORMS_V0130_POKEMON_GYARADOS")]
    FormsV0130PokemonGyarados,
    #[serde(rename = "FORMS_V0131_POKEMON_LAPRAS")]
    FormsV0131PokemonLapras,
    #[serde(rename = "FORMS_V0132_POKEMON_DITTO")]
    FormsV0132PokemonDitto,
    #[serde(rename = "FORMS_V0133_POKEMON_EEVEE")]
    FormsV0133PokemonEevee,
    #[serde(rename = "FORMS_V0134_POKEMON_VAPOREON")]
    FormsV0134PokemonVaporeon,
    #[serde(rename = "FORMS_V0135_POKEMON_JOLTEON")]
    FormsV0135PokemonJolteon,
    #[serde(rename = "FORMS_V0136_POKEMON_FLAREON")]
    FormsV0136PokemonFlareon,
    #[serde(rename = "FORMS_V0137_POKEMON_PORYGON")]
    FormsV0137PokemonPorygon,
    #[serde(rename = "FORMS_V0138_POKEMON_OMANYTE")]
    FormsV0138PokemonOmanyte,
    #[serde(rename = "FORMS_V0139_POKEMON_OMASTAR")]
    FormsV0139PokemonOmastar,
    #[serde(rename = "FORMS_V0140_POKEMON_KABUTO")]
    FormsV0140PokemonKabuto,
    #[serde(rename = "FORMS_V0141_POKEMON_KABUTOPS")]
    FormsV0141PokemonKabutops,
    #[serde(rename = "FORMS_V0142_POKEMON_AERODACTYL")]
    FormsV0142PokemonAerodactyl,
    #[serde(rename = "FORMS_V0143_POKEMON_SNORLAX")]
    FormsV0143PokemonSnorlax,
    #[serde(rename = "FORMS_V0144_POKEMON_ARTICUNO")]
    FormsV0144PokemonArticuno,
    #[serde(rename = "FORMS_V0145_POKEMON_ZAPDOS")]
    FormsV0145PokemonZapdos,
    #[serde(rename = "FORMS_V0146_POKEMON_MOLTRES")]
    FormsV0146PokemonMoltres,
    #[serde(rename = "FORMS_V0147_POKEMON_DRATINI")]
    FormsV0147PokemonDratini,
    #[serde(rename = "FORMS_V0148_POKEMON_DRAGONAIR")]
    FormsV0148PokemonDragonair,
    #[serde(rename = "FORMS_V0149_POKEMON_DRAGONITE")]
    FormsV0149PokemonDragonite,
    #[serde(rename = "FORMS_V0150_POKEMON_MEWTWO")]
    FormsV0150PokemonMewtwo,
    #[serde(rename = "FORMS_V0151_POKEMON_MEW")]
    FormsV0151PokemonMew,
    #[serde(rename = "FORMS_V0152_POKEMON_CHIKORITA")]
    FormsV0152PokemonChikorita,
    #[serde(rename = "FORMS_V0153_POKEMON_BAYLEEF")]
    FormsV0153PokemonBayleef,
    #[serde(rename = "FORMS_V0154_POKEMON_MEGANIUM")]
    FormsV0154PokemonMeganium,
    #[serde(rename = "FORMS_V0155_POKEMON_CYNDAQUIL")]
    FormsV0155PokemonCyndaquil,
    #[serde(rename = "FORMS_V0156_POKEMON_QUILAVA")]
    FormsV0156PokemonQuilava,
    #[serde(rename = "FORMS_V0157_POKEMON_TYPHLOSION")]
    FormsV0157PokemonTyphlosion,
    #[serde(rename = "FORMS_V0158_POKEMON_TOTODILE")]
    FormsV0158PokemonTotodile,
    #[serde(rename = "FORMS_V0159_POKEMON_CROCONAW")]
    FormsV0159PokemonCroconaw,
    #[serde(rename = "FORMS_V0160_POKEMON_FERALIGATR")]
    FormsV0160PokemonFeraligatr,
    #[serde(rename = "FORMS_V0161_POKEMON_SENTRET")]
    FormsV0161PokemonSentret,
    #[serde(rename = "FORMS_V0162_POKEMON_FURRET")]
    FormsV0162PokemonFurret,
    #[serde(rename = "FORMS_V0163_POKEMON_HOOTHOOT")]
    FormsV0163PokemonHoothoot,
    #[serde(rename = "FORMS_V0164_POKEMON_NOCTOWL")]
    FormsV0164PokemonNoctowl,
    #[serde(rename = "FORMS_V0165_POKEMON_LEDYBA")]
    FormsV0165PokemonLedyba,
    #[serde(rename = "FORMS_V0166_POKEMON_LEDIAN")]
    FormsV0166PokemonLedian,
    #[serde(rename = "FORMS_V0167_POKEMON_SPINARAK")]
    FormsV0167PokemonSpinarak,
    #[serde(rename = "FORMS_V0168_POKEMON_ARIADOS")]
    FormsV0168PokemonAriados,
    #[serde(rename = "FORMS_V0169_POKEMON_CROBAT")]
    FormsV0169PokemonCrobat,
    #[serde(rename = "FORMS_V0170_POKEMON_CHINCHOU")]
    FormsV0170PokemonChinchou,
    #[serde(rename = "FORMS_V0171_POKEMON_LANTURN")]
    FormsV0171PokemonLanturn,
    #[serde(rename = "FORMS_V0172_POKEMON_PICHU")]
    FormsV0172PokemonPichu,
    #[serde(rename = "FORMS_V0173_POKEMON_CLEFFA")]
    FormsV0173PokemonCleffa,
    #[serde(rename = "FORMS_V0174_POKEMON_IGGLYBUFF")]
    FormsV0174PokemonIgglybuff,
    #[serde(rename = "FORMS_V0175_POKEMON_TOGEPI")]
    FormsV0175PokemonTogepi,
    #[serde(rename = "FORMS_V0176_POKEMON_TOGETIC")]
    FormsV0176PokemonTogetic,
    #[serde(rename = "FORMS_V0177_POKEMON_NATU")]
    FormsV0177PokemonNatu,
    #[serde(rename = "FORMS_V0178_POKEMON_XATU")]
    FormsV0178PokemonXatu,
    #[serde(rename = "FORMS_V0179_POKEMON_MAREEP")]
    FormsV0179PokemonMareep,
    #[serde(rename = "FORMS_V0180_POKEMON_FLAAFFY")]
    FormsV0180PokemonFlaaffy,
    #[serde(rename = "FORMS_V0181_POKEMON_AMPHAROS")]
    FormsV0181PokemonAmpharos,
    #[serde(rename = "FORMS_V0182_POKEMON_BELLOSSOM")]
    FormsV0182PokemonBellossom,
    #[serde(rename = "FORMS_V0183_POKEMON_MARILL")]
    FormsV0183PokemonMarill,
    #[serde(rename = "FORMS_V0184_POKEMON_AZUMARILL")]
    FormsV0184PokemonAzumarill,
    #[serde(rename = "FORMS_V0185_POKEMON_SUDOWOODO")]
    FormsV0185PokemonSudowoodo,
    #[serde(rename = "FORMS_V0186_POKEMON_POLITOED")]
    FormsV0186PokemonPolitoed,
    #[serde(rename = "FORMS_V0187_POKEMON_HOPPIP")]
    FormsV0187PokemonHoppip,
    #[serde(rename = "FORMS_V0188_POKEMON_SKIPLOOM")]
    FormsV0188PokemonSkiploom,
    #[serde(rename = "FORMS_V0189_POKEMON_JUMPLUFF")]
    FormsV0189PokemonJumpluff,
    #[serde(rename = "FORMS_V0190_POKEMON_AIPOM")]
    FormsV0190PokemonAipom,
    #[serde(rename = "FORMS_V0191_POKEMON_SUNKERN")]
    FormsV0191PokemonSunkern,
    #[serde(rename = "FORMS_V0192_POKEMON_SUNFLORA")]
    FormsV0192PokemonSunflora,
    #[serde(rename = "FORMS_V0193_POKEMON_YANMA")]
    FormsV0193PokemonYanma,
    #[serde(rename = "FORMS_V0194_POKEMON_WOOPER")]
    FormsV0194PokemonWooper,
    #[serde(rename = "FORMS_V0195_POKEMON_QUAGSIRE")]
    FormsV0195PokemonQuagsire,
    #[serde(rename = "FORMS_V0196_POKEMON_ESPEON")]
    FormsV0196PokemonEspeon,
    #[serde(rename = "FORMS_V0197_POKEMON_UMBREON")]
    FormsV0197PokemonUmbreon,
    #[serde(rename = "FORMS_V0198_POKEMON_MURKROW")]
    FormsV0198PokemonMurkrow,
    #[serde(rename = "FORMS_V0199_POKEMON_SLOWKING")]
    FormsV0199PokemonSlowking,
    #[serde(rename = "FORMS_V0200_POKEMON_MISDREAVUS")]
    FormsV0200PokemonMisdreavus,
    #[serde(rename = "FORMS_V0201_POKEMON_UNOWN")]
    FormsV0201PokemonUnown,
    #[serde(rename = "FORMS_V0202_POKEMON_WOBBUFFET")]
    FormsV0202PokemonWobbuffet,
    #[serde(rename = "FORMS_V0203_POKEMON_GIRAFARIG")]
    FormsV0203PokemonGirafarig,
    #[serde(rename = "FORMS_V0204_POKEMON_PINECO")]
    FormsV0204PokemonPineco,
    #[serde(rename = "FORMS_V0205_POKEMON_FORRETRESS")]
    FormsV0205PokemonForretress,
    #[serde(rename = "FORMS_V0206_POKEMON_DUNSPARCE")]
    FormsV0206PokemonDunsparce,
    #[serde(rename = "FORMS_V0207_POKEMON_GLIGAR")]
    FormsV0207PokemonGligar,
    #[serde(rename = "FORMS_V0208_POKEMON_STEELIX")]
    FormsV0208PokemonSteelix,
    #[serde(rename = "FORMS_V0209_POKEMON_SNUBBULL")]
    FormsV0209PokemonSnubbull,
    #[serde(rename = "FORMS_V0210_POKEMON_GRANBULL")]
    FormsV0210PokemonGranbull,
    #[serde(rename = "FORMS_V0211_POKEMON_QWILFISH")]
    FormsV0211PokemonQwilfish,
    #[serde(rename = "FORMS_V0212_POKEMON_SCIZOR")]
    FormsV0212PokemonScizor,
    #[serde(rename = "FORMS_V0213_POKEMON_SHUCKLE")]
    FormsV0213PokemonShuckle,
    #[serde(rename = "FORMS_V0214_POKEMON_HERACROSS")]
    FormsV0214PokemonHeracross,
    #[serde(rename = "FORMS_V0215_POKEMON_SNEASEL")]
    FormsV0215PokemonSneasel,
    #[serde(rename = "FORMS_V0216_POKEMON_TEDDIURSA")]
    FormsV0216PokemonTeddiursa,
    #[serde(rename = "FORMS_V0217_POKEMON_URSARING")]
    FormsV0217PokemonUrsaring,
    #[serde(rename = "FORMS_V0218_POKEMON_SLUGMA")]
    FormsV0218PokemonSlugma,
    #[serde(rename = "FORMS_V0219_POKEMON_MAGCARGO")]
    FormsV0219PokemonMagcargo,
    #[serde(rename = "FORMS_V0220_POKEMON_SWINUB")]
    FormsV0220PokemonSwinub,
    #[serde(rename = "FORMS_V0221_POKEMON_PILOSWINE")]
    FormsV0221PokemonPiloswine,
    #[serde(rename = "FORMS_V0222_POKEMON_CORSOLA")]
    FormsV0222PokemonCorsola,
    #[serde(rename = "FORMS_V0223_POKEMON_REMORAID")]
    FormsV0223PokemonRemoraid,
    #[serde(rename = "FORMS_V0224_POKEMON_OCTILLERY")]
    FormsV0224PokemonOctillery,
    #[serde(rename = "FORMS_V0225_POKEMON_DELIBIRD")]
    FormsV0225PokemonDelibird,
    #[serde(rename = "FORMS_V0226_POKEMON_MANTINE")]
    FormsV0226PokemonMantine,
    #[serde(rename = "FORMS_V0227_POKEMON_SKARMORY")]
    FormsV0227PokemonSkarmory,
    #[serde(rename = "FORMS_V0228_POKEMON_HOUNDOUR")]
    FormsV0228PokemonHoundour,
    #[serde(rename = "FORMS_V0229_POKEMON_HOUNDOOM")]
    FormsV0229PokemonHoundoom,
    #[serde(rename = "FORMS_V0230_POKEMON_KINGDRA")]
    FormsV0230PokemonKingdra,
    #[serde(rename = "FORMS_V0231_POKEMON_PHANPY")]
    FormsV0231PokemonPhanpy,
    #[serde(rename = "FORMS_V0232_POKEMON_DONPHAN")]
    FormsV0232PokemonDonphan,
    #[serde(rename = "FORMS_V0233_POKEMON_PORYGON2")]
    FormsV0233PokemonPorygon2,
    #[serde(rename = "FORMS_V0234_POKEMON_STANTLER")]
    FormsV0234PokemonStantler,
    #[serde(rename = "FORMS_V0235_POKEMON_SMEARGLE")]
    FormsV0235PokemonSmeargle,
    #[serde(rename = "FORMS_V0236_POKEMON_TYROGUE")]
    FormsV0236PokemonTyrogue,
    #[serde(rename = "FORMS_V0237_POKEMON_HITMONTOP")]
    FormsV0237PokemonHitmontop,
    #[serde(rename = "FORMS_V0238_POKEMON_SMOOCHUM")]
    FormsV0238PokemonSmoochum,
    #[serde(rename = "FORMS_V0239_POKEMON_ELEKID")]
    FormsV0239PokemonElekid,
    #[serde(rename = "FORMS_V0240_POKEMON_MAGBY")]
    FormsV0240PokemonMagby,
    #[serde(rename = "FORMS_V0241_POKEMON_MILTANK")]
    FormsV0241PokemonMiltank,
    #[serde(rename = "FORMS_V0242_POKEMON_BLISSEY")]
    FormsV0242PokemonBlissey,
    #[serde(rename = "FORMS_V0243_POKEMON_RAIKOU")]
    FormsV0243PokemonRaikou,
    #[serde(rename = "FORMS_V0244_POKEMON_ENTEI")]
    FormsV0244PokemonEntei,
    #[serde(rename = "FORMS_V0245_POKEMON_SUICUNE")]
    FormsV0245PokemonSuicune,
    #[serde(rename = "FORMS_V0246_POKEMON_LARVITAR")]
    FormsV0246PokemonLarvitar,
    #[serde(rename = "FORMS_V0247_POKEMON_PUPITAR")]
    FormsV0247PokemonPupitar,
    #[serde(rename = "FORMS_V0248_POKEMON_TYRANITAR")]
    FormsV0248PokemonTyranitar,
    #[serde(rename = "FORMS_V0249_POKEMON_LUGIA")]
    FormsV0249PokemonLugia,
    #[serde(rename = "FORMS_V0250_POKEMON_HO_OH")]
    FormsV0250PokemonHoOh,
    #[serde(rename = "FORMS_V0251_POKEMON_CELEBI")]
    FormsV0251PokemonCelebi,
    #[serde(rename = "FORMS_V0252_POKEMON_TREECKO")]
    FormsV0252PokemonTreecko,
    #[serde(rename = "FORMS_V0253_POKEMON_GROVYLE")]
    FormsV0253PokemonGrovyle,
    #[serde(rename = "FORMS_V0254_POKEMON_SCEPTILE")]
    FormsV0254PokemonSceptile,
    #[serde(rename = "FORMS_V0255_POKEMON_TORCHIC")]
    FormsV0255PokemonTorchic,
    #[serde(rename = "FORMS_V0256_POKEMON_COMBUSKEN")]
    FormsV0256PokemonCombusken,
    #[serde(rename = "FORMS_V0257_POKEMON_BLAZIKEN")]
    FormsV0257PokemonBlaziken,
    #[serde(rename = "FORMS_V0258_POKEMON_MUDKIP")]
    FormsV0258PokemonMudkip,
    #[serde(rename = "FORMS_V0259_POKEMON_MARSHTOMP")]
    FormsV0259PokemonMarshtomp,
    #[serde(rename = "FORMS_V0260_POKEMON_SWAMPERT")]
    FormsV0260PokemonSwampert,
    #[serde(rename = "FORMS_V0261_POKEMON_POOCHYENA")]
    FormsV0261PokemonPoochyena,
    #[serde(rename = "FORMS_V0262_POKEMON_MIGHTYENA")]
    FormsV0262PokemonMightyena,
    #[serde(rename = "FORMS_V0263_POKEMON_ZIGZAGOON")]
    FormsV0263PokemonZigzagoon,
    #[serde(rename = "FORMS_V0264_POKEMON_LINOONE")]
    FormsV0264PokemonLinoone,
    #[serde(rename = "FORMS_V0265_POKEMON_WURMPLE")]
    FormsV0265PokemonWurmple,
    #[serde(rename = "FORMS_V0266_POKEMON_SILCOON")]
    FormsV0266PokemonSilcoon,
    #[serde(rename = "FORMS_V0267_POKEMON_BEAUTIFLY")]
    FormsV0267PokemonBeautifly,
    #[serde(rename = "FORMS_V0268_POKEMON_CASCOON")]
    FormsV0268PokemonCascoon,
    #[serde(rename = "FORMS_V0269_POKEMON_DUSTOX")]
    FormsV0269PokemonDustox,
    #[serde(rename = "FORMS_V0270_POKEMON_LOTAD")]
    FormsV0270PokemonLotad,
    #[serde(rename = "FORMS_V0271_POKEMON_LOMBRE")]
    FormsV0271PokemonLombre,
    #[serde(rename = "FORMS_V0272_POKEMON_LUDICOLO")]
    FormsV0272PokemonLudicolo,
    #[serde(rename = "FORMS_V0273_POKEMON_SEEDOT")]
    FormsV0273PokemonSeedot,
    #[serde(rename = "FORMS_V0274_POKEMON_NUZLEAF")]
    FormsV0274PokemonNuzleaf,
    #[serde(rename = "FORMS_V0275_POKEMON_SHIFTRY")]
    FormsV0275PokemonShiftry,
    #[serde(rename = "FORMS_V0276_POKEMON_TAILLOW")]
    FormsV0276PokemonTaillow,
    #[serde(rename = "FORMS_V0277_POKEMON_SWELLOW")]
    FormsV0277PokemonSwellow,
    #[serde(rename = "FORMS_V0278_POKEMON_WINGULL")]
    FormsV0278PokemonWingull,
    #[serde(rename = "FORMS_V0279_POKEMON_PELIPPER")]
    FormsV0279PokemonPelipper,
    #[serde(rename = "FORMS_V0280_POKEMON_RALTS")]
    FormsV0280PokemonRalts,
    #[serde(rename = "FORMS_V0281_POKEMON_KIRLIA")]
    FormsV0281PokemonKirlia,
    #[serde(rename = "FORMS_V0282_POKEMON_GARDEVOIR")]
    FormsV0282PokemonGardevoir,
    #[serde(rename = "FORMS_V0283_POKEMON_SURSKIT")]
    FormsV0283PokemonSurskit,
    #[serde(rename = "FORMS_V0284_POKEMON_MASQUERAIN")]
    FormsV0284PokemonMasquerain,
    #[serde(rename = "FORMS_V0285_POKEMON_SHROOMISH")]
    FormsV0285PokemonShroomish,
    #[serde(rename = "FORMS_V0286_POKEMON_BRELOOM")]
    FormsV0286PokemonBreloom,
    #[serde(rename = "FORMS_V0287_POKEMON_SLAKOTH")]
    FormsV0287PokemonSlakoth,
    #[serde(rename = "FORMS_V0288_POKEMON_VIGOROTH")]
    FormsV0288PokemonVigoroth,
    #[serde(rename = "FORMS_V0289_POKEMON_SLAKING")]
    FormsV0289PokemonSlaking,
    #[serde(rename = "FORMS_V0290_POKEMON_NINCADA")]
    FormsV0290PokemonNincada,
    #[serde(rename = "FORMS_V0291_POKEMON_NINJASK")]
    FormsV0291PokemonNinjask,
    #[serde(rename = "FORMS_V0292_POKEMON_SHEDINJA")]
    FormsV0292PokemonShedinja,
    #[serde(rename = "FORMS_V0293_POKEMON_WHISMUR")]
    FormsV0293PokemonWhismur,
    #[serde(rename = "FORMS_V0294_POKEMON_LOUDRED")]
    FormsV0294PokemonLoudred,
    #[serde(rename = "FORMS_V0295_POKEMON_EXPLOUD")]
    FormsV0295PokemonExploud,
    #[serde(rename = "FORMS_V0296_POKEMON_MAKUHITA")]
    FormsV0296PokemonMakuhita,
    #[serde(rename = "FORMS_V0297_POKEMON_HARIYAMA")]
    FormsV0297PokemonHariyama,
    #[serde(rename = "FORMS_V0298_POKEMON_AZURILL")]
    FormsV0298PokemonAzurill,
    #[serde(rename = "FORMS_V0299_POKEMON_NOSEPASS")]
    FormsV0299PokemonNosepass,
    #[serde(rename = "FORMS_V0300_POKEMON_SKITTY")]
    FormsV0300PokemonSkitty,
    #[serde(rename = "FORMS_V0301_POKEMON_DELCATTY")]
    FormsV0301PokemonDelcatty,
    #[serde(rename = "FORMS_V0302_POKEMON_SABLEYE")]
    FormsV0302PokemonSableye,
    #[serde(rename = "FORMS_V0303_POKEMON_MAWILE")]
    FormsV0303PokemonMawile,
    #[serde(rename = "FORMS_V0304_POKEMON_ARON")]
    FormsV0304PokemonAron,
    #[serde(rename = "FORMS_V0305_POKEMON_LAIRON")]
    FormsV0305PokemonLairon,
    #[serde(rename = "FORMS_V0306_POKEMON_AGGRON")]
    FormsV0306PokemonAggron,
    #[serde(rename = "FORMS_V0307_POKEMON_MEDITITE")]
    FormsV0307PokemonMeditite,
    #[serde(rename = "FORMS_V0308_POKEMON_MEDICHAM")]
    FormsV0308PokemonMedicham,
    #[serde(rename = "FORMS_V0309_POKEMON_ELECTRIKE")]
    FormsV0309PokemonElectrike,
    #[serde(rename = "FORMS_V0310_POKEMON_MANECTRIC")]
    FormsV0310PokemonManectric,
    #[serde(rename = "FORMS_V0311_POKEMON_PLUSLE")]
    FormsV0311PokemonPlusle,
    #[serde(rename = "FORMS_V0312_POKEMON_MINUN")]
    FormsV0312PokemonMinun,
    #[serde(rename = "FORMS_V0313_POKEMON_VOLBEAT")]
    FormsV0313PokemonVolbeat,
    #[serde(rename = "FORMS_V0314_POKEMON_ILLUMISE")]
    FormsV0314PokemonIllumise,
    #[serde(rename = "FORMS_V0315_POKEMON_ROSELIA")]
    FormsV0315PokemonRoselia,
    #[serde(rename = "FORMS_V0316_POKEMON_GULPIN")]
    FormsV0316PokemonGulpin,
    #[serde(rename = "FORMS_V0317_POKEMON_SWALOT")]
    FormsV0317PokemonSwalot,
    #[serde(rename = "FORMS_V0318_POKEMON_CARVANHA")]
    FormsV0318PokemonCarvanha,
    #[serde(rename = "FORMS_V0319_POKEMON_SHARPEDO")]
    FormsV0319PokemonSharpedo,
    #[serde(rename = "FORMS_V0320_POKEMON_WAILMER")]
    FormsV0320PokemonWailmer,
    #[serde(rename = "FORMS_V0321_POKEMON_WAILORD")]
    FormsV0321PokemonWailord,
    #[serde(rename = "FORMS_V0322_POKEMON_NUMEL")]
    FormsV0322PokemonNumel,
    #[serde(rename = "FORMS_V0323_POKEMON_CAMERUPT")]
    FormsV0323PokemonCamerupt,
    #[serde(rename = "FORMS_V0324_POKEMON_TORKOAL")]
    FormsV0324PokemonTorkoal,
    #[serde(rename = "FORMS_V0325_POKEMON_SPOINK")]
    FormsV0325PokemonSpoink,
    #[serde(rename = "FORMS_V0326_POKEMON_GRUMPIG")]
    FormsV0326PokemonGrumpig,
    #[serde(rename = "FORMS_V0327_POKEMON_SPINDA")]
    FormsV0327PokemonSpinda,
    #[serde(rename = "FORMS_V0328_POKEMON_TRAPINCH")]
    FormsV0328PokemonTrapinch,
    #[serde(rename = "FORMS_V0329_POKEMON_VIBRAVA")]
    FormsV0329PokemonVibrava,
    #[serde(rename = "FORMS_V0330_POKEMON_FLYGON")]
    FormsV0330PokemonFlygon,
    #[serde(rename = "FORMS_V0331_POKEMON_CACNEA")]
    FormsV0331PokemonCacnea,
    #[serde(rename = "FORMS_V0332_POKEMON_CACTURNE")]
    FormsV0332PokemonCacturne,
    #[serde(rename = "FORMS_V0333_POKEMON_SWABLU")]
    FormsV0333PokemonSwablu,
    #[serde(rename = "FORMS_V0334_POKEMON_ALTARIA")]
    FormsV0334PokemonAltaria,
    #[serde(rename = "FORMS_V0335_POKEMON_ZANGOOSE")]
    FormsV0335PokemonZangoose,
    #[serde(rename = "FORMS_V0336_POKEMON_SEVIPER")]
    FormsV0336PokemonSeviper,
    #[serde(rename = "FORMS_V0337_POKEMON_LUNATONE")]
    FormsV0337PokemonLunatone,
    #[serde(rename = "FORMS_V0338_POKEMON_SOLROCK")]
    FormsV0338PokemonSolrock,
    #[serde(rename = "FORMS_V0339_POKEMON_BARBOACH")]
    FormsV0339PokemonBarboach,
    #[serde(rename = "FORMS_V0340_POKEMON_WHISCASH")]
    FormsV0340PokemonWhiscash,
    #[serde(rename = "FORMS_V0341_POKEMON_CORPHISH")]
    FormsV0341PokemonCorphish,
    #[serde(rename = "FORMS_V0342_POKEMON_CRAWDAUNT")]
    FormsV0342PokemonCrawdaunt,
    #[serde(rename = "FORMS_V0343_POKEMON_BALTOY")]
    FormsV0343PokemonBaltoy,
    #[serde(rename = "FORMS_V0344_POKEMON_CLAYDOL")]
    FormsV0344PokemonClaydol,
    #[serde(rename = "FORMS_V0345_POKEMON_LILEEP")]
    FormsV0345PokemonLileep,
    #[serde(rename = "FORMS_V0346_POKEMON_CRADILY")]
    FormsV0346PokemonCradily,
    #[serde(rename = "FORMS_V0347_POKEMON_ANORITH")]
    FormsV0347PokemonAnorith,
    #[serde(rename = "FORMS_V0348_POKEMON_ARMALDO")]
    FormsV0348PokemonArmaldo,
    #[serde(rename = "FORMS_V0349_POKEMON_FEEBAS")]
    FormsV0349PokemonFeebas,
    #[serde(rename = "FORMS_V0350_POKEMON_MILOTIC")]
    FormsV0350PokemonMilotic,
    #[serde(rename = "FORMS_V0351_POKEMON_CASTFORM")]
    FormsV0351PokemonCastform,
    #[serde(rename = "FORMS_V0352_POKEMON_KECLEON")]
    FormsV0352PokemonKecleon,
    #[serde(rename = "FORMS_V0353_POKEMON_SHUPPET")]
    FormsV0353PokemonShuppet,
    #[serde(rename = "FORMS_V0354_POKEMON_BANETTE")]
    FormsV0354PokemonBanette,
    #[serde(rename = "FORMS_V0355_POKEMON_DUSKULL")]
    FormsV0355PokemonDuskull,
    #[serde(rename = "FORMS_V0356_POKEMON_DUSCLOPS")]
    FormsV0356PokemonDusclops,
    #[serde(rename = "FORMS_V0357_POKEMON_TROPIUS")]
    FormsV0357PokemonTropius,
    #[serde(rename = "FORMS_V0358_POKEMON_CHIMECHO")]
    FormsV0358PokemonChimecho,
    #[serde(rename = "FORMS_V0359_POKEMON_ABSOL")]
    FormsV0359PokemonAbsol,
    #[serde(rename = "FORMS_V0360_POKEMON_WYNAUT")]
    FormsV0360PokemonWynaut,
    #[serde(rename = "FORMS_V0361_POKEMON_SNORUNT")]
    FormsV0361PokemonSnorunt,
    #[serde(rename = "FORMS_V0362_POKEMON_GLALIE")]
    FormsV0362PokemonGlalie,
    #[serde(rename = "FORMS_V0363_POKEMON_SPHEAL")]
    FormsV0363PokemonSpheal,
    #[serde(rename = "FORMS_V0364_POKEMON_SEALEO")]
    FormsV0364PokemonSealeo,
    #[serde(rename = "FORMS_V0365_POKEMON_WALREIN")]
    FormsV0365PokemonWalrein,
    #[serde(rename = "FORMS_V0366_POKEMON_CLAMPERL")]
    FormsV0366PokemonClamperl,
    #[serde(rename = "FORMS_V0367_POKEMON_HUNTAIL")]
    FormsV0367PokemonHuntail,
    #[serde(rename = "FORMS_V0368_POKEMON_GOREBYSS")]
    FormsV0368PokemonGorebyss,
    #[serde(rename = "FORMS_V0369_POKEMON_RELICANTH")]
    FormsV0369PokemonRelicanth,
    #[serde(rename = "FORMS_V0370_POKEMON_LUVDISC")]
    FormsV0370PokemonLuvdisc,
    #[serde(rename = "FORMS_V0371_POKEMON_BAGON")]
    FormsV0371PokemonBagon,
    #[serde(rename = "FORMS_V0372_POKEMON_SHELGON")]
    FormsV0372PokemonShelgon,
    #[serde(rename = "FORMS_V0373_POKEMON_SALAMENCE")]
    FormsV0373PokemonSalamence,
    #[serde(rename = "FORMS_V0374_POKEMON_BELDUM")]
    FormsV0374PokemonBeldum,
    #[serde(rename = "FORMS_V0375_POKEMON_METANG")]
    FormsV0375PokemonMetang,
    #[serde(rename = "FORMS_V0376_POKEMON_METAGROSS")]
    FormsV0376PokemonMetagross,
    #[serde(rename = "FORMS_V0377_POKEMON_REGIROCK")]
    FormsV0377PokemonRegirock,
    #[serde(rename = "FORMS_V0378_POKEMON_REGICE")]
    FormsV0378PokemonRegice,
    #[serde(rename = "FORMS_V0379_POKEMON_REGISTEEL")]
    FormsV0379PokemonRegisteel,
    #[serde(rename = "FORMS_V0380_POKEMON_LATIAS")]
    FormsV0380PokemonLatias,
    #[serde(rename = "FORMS_V0381_POKEMON_LATIOS")]
    FormsV0381PokemonLatios,
    #[serde(rename = "FORMS_V0382_POKEMON_KYOGRE")]
    FormsV0382PokemonKyogre,
    #[serde(rename = "FORMS_V0383_POKEMON_GROUDON")]
    FormsV0383PokemonGroudon,
    #[serde(rename = "FORMS_V0384_POKEMON_RAYQUAZA")]
    FormsV0384PokemonRayquaza,
    #[serde(rename = "FORMS_V0385_POKEMON_JIRACHI")]
    FormsV0385PokemonJirachi,
    #[serde(rename = "FORMS_V0386_POKEMON_DEOXYS")]
    FormsV0386PokemonDeoxys,
    #[serde(rename = "FORMS_V0387_POKEMON_TURTWIG")]
    FormsV0387PokemonTurtwig,
    #[serde(rename = "FORMS_V0388_POKEMON_GROTLE")]
    FormsV0388PokemonGrotle,
    #[serde(rename = "FORMS_V0389_POKEMON_TORTERRA")]
    FormsV0389PokemonTorterra,
    #[serde(rename = "FORMS_V0390_POKEMON_CHIMCHAR")]
    FormsV0390PokemonChimchar,
    #[serde(rename = "FORMS_V0391_POKEMON_MONFERNO")]
    FormsV0391PokemonMonferno,
    #[serde(rename = "FORMS_V0392_POKEMON_INFERNAPE")]
    FormsV0392PokemonInfernape,
    #[serde(rename = "FORMS_V0393_POKEMON_PIPLUP")]
    FormsV0393PokemonPiplup,
    #[serde(rename = "FORMS_V0394_POKEMON_PRINPLUP")]
    FormsV0394PokemonPrinplup,
    #[serde(rename = "FORMS_V0395_POKEMON_EMPOLEON")]
    FormsV0395PokemonEmpoleon,
    #[serde(rename = "FORMS_V0396_POKEMON_STARLY")]
    FormsV0396PokemonStarly,
    #[serde(rename = "FORMS_V0397_POKEMON_STARAVIA")]
    FormsV0397PokemonStaravia,
    #[serde(rename = "FORMS_V0398_POKEMON_STARAPTOR")]
    FormsV0398PokemonStaraptor,
    #[serde(rename = "FORMS_V0399_POKEMON_BIDOOF")]
    FormsV0399PokemonBidoof,
    #[serde(rename = "FORMS_V0400_POKEMON_BIBAREL")]
    FormsV0400PokemonBibarel,
    #[serde(rename = "FORMS_V0401_POKEMON_KRICKETOT")]
    FormsV0401PokemonKricketot,
    #[serde(rename = "FORMS_V0402_POKEMON_KRICKETUNE")]
    FormsV0402PokemonKricketune,
    #[serde(rename = "FORMS_V0403_POKEMON_SHINX")]
    FormsV0403PokemonShinx,
    #[serde(rename = "FORMS_V0404_POKEMON_LUXIO")]
    FormsV0404PokemonLuxio,
    #[serde(rename = "FORMS_V0405_POKEMON_LUXRAY")]
    FormsV0405PokemonLuxray,
    #[serde(rename = "FORMS_V0406_POKEMON_BUDEW")]
    FormsV0406PokemonBudew,
    #[serde(rename = "FORMS_V0407_POKEMON_ROSERADE")]
    FormsV0407PokemonRoserade,
    #[serde(rename = "FORMS_V0408_POKEMON_CRANIDOS")]
    FormsV0408PokemonCranidos,
    #[serde(rename = "FORMS_V0409_POKEMON_RAMPARDOS")]
    FormsV0409PokemonRampardos,
    #[serde(rename = "FORMS_V0410_POKEMON_SHIELDON")]
    FormsV0410PokemonShieldon,
    #[serde(rename = "FORMS_V0411_POKEMON_BASTIODON")]
    FormsV0411PokemonBastiodon,
    #[serde(rename = "FORMS_V0412_POKEMON_BURMY")]
    FormsV0412PokemonBurmy,
    #[serde(rename = "FORMS_V0413_POKEMON_WORMADAM")]
    FormsV0413PokemonWormadam,
    #[serde(rename = "FORMS_V0414_POKEMON_MOTHIM")]
    FormsV0414PokemonMothim,
    #[serde(rename = "FORMS_V0415_POKEMON_COMBEE")]
    FormsV0415PokemonCombee,
    #[serde(rename = "FORMS_V0416_POKEMON_VESPIQUEN")]
    FormsV0416PokemonVespiquen,
    #[serde(rename = "FORMS_V0417_POKEMON_PACHIRISU")]
    FormsV0417PokemonPachirisu,
    #[serde(rename = "FORMS_V0418_POKEMON_BUIZEL")]
    FormsV0418PokemonBuizel,
    #[serde(rename = "FORMS_V0419_POKEMON_FLOATZEL")]
    FormsV0419PokemonFloatzel,
    #[serde(rename = "FORMS_V0420_POKEMON_CHERUBI")]
    FormsV0420PokemonCherubi,
    #[serde(rename = "FORMS_V0421_POKEMON_CHERRIM")]
    FormsV0421PokemonCherrim,
    #[serde(rename = "FORMS_V0422_POKEMON_SHELLOS")]
    FormsV0422PokemonShellos,
    #[serde(rename = "FORMS_V0423_POKEMON_GASTRODON")]
    FormsV0423PokemonGastrodon,
    #[serde(rename = "FORMS_V0424_POKEMON_AMBIPOM")]
    FormsV0424PokemonAmbipom,
    #[serde(rename = "FORMS_V0425_POKEMON_DRIFLOON")]
    FormsV0425PokemonDrifloon,
    #[serde(rename = "FORMS_V0426_POKEMON_DRIFBLIM")]
    FormsV0426PokemonDrifblim,
    #[serde(rename = "FORMS_V0427_POKEMON_BUNEARY")]
    FormsV0427PokemonBuneary,
    #[serde(rename = "FORMS_V0428_POKEMON_LOPUNNY")]
    FormsV0428PokemonLopunny,
    #[serde(rename = "FORMS_V0429_POKEMON_MISMAGIUS")]
    FormsV0429PokemonMismagius,
    #[serde(rename = "FORMS_V0430_POKEMON_HONCHKROW")]
    FormsV0430PokemonHonchkrow,
    #[serde(rename = "FORMS_V0431_POKEMON_GLAMEOW")]
    FormsV0431PokemonGlameow,
    #[serde(rename = "FORMS_V0432_POKEMON_PURUGLY")]
    FormsV0432PokemonPurugly,
    #[serde(rename = "FORMS_V0433_POKEMON_CHINGLING")]
    FormsV0433PokemonChingling,
    #[serde(rename = "FORMS_V0434_POKEMON_STUNKY")]
    FormsV0434PokemonStunky,
    #[serde(rename = "FORMS_V0435_POKEMON_SKUNTANK")]
    FormsV0435PokemonSkuntank,
    #[serde(rename = "FORMS_V0436_POKEMON_BRONZOR")]
    FormsV0436PokemonBronzor,
    #[serde(rename = "FORMS_V0437_POKEMON_BRONZONG")]
    FormsV0437PokemonBronzong,
    #[serde(rename = "FORMS_V0438_POKEMON_BONSLY")]
    FormsV0438PokemonBonsly,
    #[serde(rename = "FORMS_V0439_POKEMON_MIME_JR")]
    FormsV0439PokemonMimeJr,
    #[serde(rename = "FORMS_V0440_POKEMON_HAPPINY")]
    FormsV0440PokemonHappiny,
    #[serde(rename = "FORMS_V0441_POKEMON_CHATOT")]
    FormsV0441PokemonChatot,
    #[serde(rename = "FORMS_V0442_POKEMON_SPIRITOMB")]
    FormsV0442PokemonSpiritomb,
    #[serde(rename = "FORMS_V0443_POKEMON_GIBLE")]
    FormsV0443PokemonGible,
    #[serde(rename = "FORMS_V0444_POKEMON_GABITE")]
    FormsV0444PokemonGabite,
    #[serde(rename = "FORMS_V0445_POKEMON_GARCHOMP")]
    FormsV0445PokemonGarchomp,
    #[serde(rename = "FORMS_V0446_POKEMON_MUNCHLAX")]
    FormsV0446PokemonMunchlax,
    #[serde(rename = "FORMS_V0447_POKEMON_RIOLU")]
    FormsV0447PokemonRiolu,
    #[serde(rename = "FORMS_V0448_POKEMON_LUCARIO")]
    FormsV0448PokemonLucario,
    #[serde(rename = "FORMS_V0449_POKEMON_HIPPOPOTAS")]
    FormsV0449PokemonHippopotas,
    #[serde(rename = "FORMS_V0450_POKEMON_HIPPOWDON")]
    FormsV0450PokemonHippowdon,
    #[serde(rename = "FORMS_V0451_POKEMON_SKORUPI")]
    FormsV0451PokemonSkorupi,
    #[serde(rename = "FORMS_V0452_POKEMON_DRAPION")]
    FormsV0452PokemonDrapion,
    #[serde(rename = "FORMS_V0453_POKEMON_CROAGUNK")]
    FormsV0453PokemonCroagunk,
    #[serde(rename = "FORMS_V0454_POKEMON_TOXICROAK")]
    FormsV0454PokemonToxicroak,
    #[serde(rename = "FORMS_V0455_POKEMON_CARNIVINE")]
    FormsV0455PokemonCarnivine,
    #[serde(rename = "FORMS_V0456_POKEMON_FINNEON")]
    FormsV0456PokemonFinneon,
    #[serde(rename = "FORMS_V0457_POKEMON_LUMINEON")]
    FormsV0457PokemonLumineon,
    #[serde(rename = "FORMS_V0458_POKEMON_MANTYKE")]
    FormsV0458PokemonMantyke,
    #[serde(rename = "FORMS_V0459_POKEMON_SNOVER")]
    FormsV0459PokemonSnover,
    #[serde(rename = "FORMS_V0460_POKEMON_ABOMASNOW")]
    FormsV0460PokemonAbomasnow,
    #[serde(rename = "FORMS_V0461_POKEMON_WEAVILE")]
    FormsV0461PokemonWeavile,
    #[serde(rename = "FORMS_V0462_POKEMON_MAGNEZONE")]
    FormsV0462PokemonMagnezone,
    #[serde(rename = "FORMS_V0463_POKEMON_LICKILICKY")]
    FormsV0463PokemonLickilicky,
    #[serde(rename = "FORMS_V0464_POKEMON_RHYPERIOR")]
    FormsV0464PokemonRhyperior,
    #[serde(rename = "FORMS_V0465_POKEMON_TANGROWTH")]
    FormsV0465PokemonTangrowth,
    #[serde(rename = "FORMS_V0466_POKEMON_ELECTIVIRE")]
    FormsV0466PokemonElectivire,
    #[serde(rename = "FORMS_V0467_POKEMON_MAGMORTAR")]
    FormsV0467PokemonMagmortar,
    #[serde(rename = "FORMS_V0468_POKEMON_TOGEKISS")]
    FormsV0468PokemonTogekiss,
    #[serde(rename = "FORMS_V0469_POKEMON_YANMEGA")]
    FormsV0469PokemonYanmega,
    #[serde(rename = "FORMS_V0470_POKEMON_LEAFEON")]
    FormsV0470PokemonLeafeon,
    #[serde(rename = "FORMS_V0471_POKEMON_GLACEON")]
    FormsV0471PokemonGlaceon,
    #[serde(rename = "FORMS_V0472_POKEMON_GLISCOR")]
    FormsV0472PokemonGliscor,
    #[serde(rename = "FORMS_V0473_POKEMON_MAMOSWINE")]
    FormsV0473PokemonMamoswine,
    #[serde(rename = "FORMS_V0474_POKEMON_PORYGON_Z")]
    FormsV0474PokemonPorygonZ,
    #[serde(rename = "FORMS_V0475_POKEMON_GALLADE")]
    FormsV0475PokemonGallade,
    #[serde(rename = "FORMS_V0476_POKEMON_PROBOPASS")]
    FormsV0476PokemonProbopass,
    #[serde(rename = "FORMS_V0477_POKEMON_DUSKNOIR")]
    FormsV0477PokemonDusknoir,
    #[serde(rename = "FORMS_V0478_POKEMON_FROSLASS")]
    FormsV0478PokemonFroslass,
    #[serde(rename = "FORMS_V0479_POKEMON_ROTOM")]
    FormsV0479PokemonRotom,
    #[serde(rename = "FORMS_V0480_POKEMON_UXIE")]
    FormsV0480PokemonUxie,
    #[serde(rename = "FORMS_V0481_POKEMON_MESPRIT")]
    FormsV0481PokemonMesprit,
    #[serde(rename = "FORMS_V0482_POKEMON_AZELF")]
    FormsV0482PokemonAzelf,
    #[serde(rename = "FORMS_V0483_POKEMON_DIALGA")]
    FormsV0483PokemonDialga,
    #[serde(rename = "FORMS_V0484_POKEMON_PALKIA")]
    FormsV0484PokemonPalkia,
    #[serde(rename = "FORMS_V0485_POKEMON_HEATRAN")]
    FormsV0485PokemonHeatran,
    #[serde(rename = "FORMS_V0486_POKEMON_REGIGIGAS")]
    FormsV0486PokemonRegigigas,
    #[serde(rename = "FORMS_V0487_POKEMON_GIRATINA")]
    FormsV0487PokemonGiratina,
    #[serde(rename = "FORMS_V0488_POKEMON_CRESSELIA")]
    FormsV0488PokemonCresselia,
    #[serde(rename = "FORMS_V0489_POKEMON_PHIONE")]
    FormsV0489PokemonPhione,
    #[serde(rename = "FORMS_V0490_POKEMON_MANAPHY")]
    FormsV0490PokemonManaphy,
    #[serde(rename = "FORMS_V0491_POKEMON_DARKRAI")]
    FormsV0491PokemonDarkrai,
    #[serde(rename = "FORMS_V0492_POKEMON_SHAYMIN")]
    FormsV0492PokemonShaymin,
    #[serde(rename = "FORMS_V0493_POKEMON_ARCEUS")]
    FormsV0493PokemonArceus,
    #[serde(rename = "FORMS_V0494_POKEMON_VICTINI")]
    FormsV0494PokemonVictini,
    #[serde(rename = "FORMS_V0495_POKEMON_SNIVY")]
    FormsV0495PokemonSnivy,
    #[serde(rename = "FORMS_V0496_POKEMON_SERVINE")]
    FormsV0496PokemonServine,
    #[serde(rename = "FORMS_V0497_POKEMON_SERPERIOR")]
    FormsV0497PokemonSerperior,
    #[serde(rename = "FORMS_V0498_POKEMON_TEPIG")]
    FormsV0498PokemonTepig,
    #[serde(rename = "FORMS_V0499_POKEMON_PIGNITE")]
    FormsV0499PokemonPignite,
    #[serde(rename = "FORMS_V0500_POKEMON_EMBOAR")]
    FormsV0500PokemonEmboar,
    #[serde(rename = "FORMS_V0501_POKEMON_OSHAWOTT")]
    FormsV0501PokemonOshawott,
    #[serde(rename = "FORMS_V0502_POKEMON_DEWOTT")]
    FormsV0502PokemonDewott,
    #[serde(rename = "FORMS_V0503_POKEMON_SAMUROTT")]
    FormsV0503PokemonSamurott,
    #[serde(rename = "FORMS_V0504_POKEMON_PATRAT")]
    FormsV0504PokemonPatrat,
    #[serde(rename = "FORMS_V0505_POKEMON_WATCHOG")]
    FormsV0505PokemonWatchog,
    #[serde(rename = "FORMS_V0506_POKEMON_LILLIPUP")]
    FormsV0506PokemonLillipup,
    #[serde(rename = "FORMS_V0507_POKEMON_HERDIER")]
    FormsV0507PokemonHerdier,
    #[serde(rename = "FORMS_V0508_POKEMON_STOUTLAND")]
    FormsV0508PokemonStoutland,
    #[serde(rename = "FORMS_V0509_POKEMON_PURRLOIN")]
    FormsV0509PokemonPurrloin,
    #[serde(rename = "FORMS_V0510_POKEMON_LIEPARD")]
    FormsV0510PokemonLiepard,
    #[serde(rename = "FORMS_V0511_POKEMON_PANSAGE")]
    FormsV0511PokemonPansage,
    #[serde(rename = "FORMS_V0512_POKEMON_SIMISAGE")]
    FormsV0512PokemonSimisage,
    #[serde(rename = "FORMS_V0513_POKEMON_PANSEAR")]
    FormsV0513PokemonPansear,
    #[serde(rename = "FORMS_V0514_POKEMON_SIMISEAR")]
    FormsV0514PokemonSimisear,
    #[serde(rename = "FORMS_V0515_POKEMON_PANPOUR")]
    FormsV0515PokemonPanpour,
    #[serde(rename = "FORMS_V0516_POKEMON_SIMIPOUR")]
    FormsV0516PokemonSimipour,
    #[serde(rename = "FORMS_V0517_POKEMON_MUNNA")]
    FormsV0517PokemonMunna,
    #[serde(rename = "FORMS_V0518_POKEMON_MUSHARNA")]
    FormsV0518PokemonMusharna,
    #[serde(rename = "FORMS_V0519_POKEMON_PIDOVE")]
    FormsV0519PokemonPidove,
    #[serde(rename = "FORMS_V0520_POKEMON_TRANQUILL")]
    FormsV0520PokemonTranquill,
    #[serde(rename = "FORMS_V0521_POKEMON_UNFEZANT")]
    FormsV0521PokemonUnfezant,
    #[serde(rename = "FORMS_V0522_POKEMON_BLITZLE")]
    FormsV0522PokemonBlitzle,
    #[serde(rename = "FORMS_V0523_POKEMON_ZEBSTRIKA")]
    FormsV0523PokemonZebstrika,
    #[serde(rename = "FORMS_V0524_POKEMON_ROGGENROLA")]
    FormsV0524PokemonRoggenrola,
    #[serde(rename = "FORMS_V0525_POKEMON_BOLDORE")]
    FormsV0525PokemonBoldore,
    #[serde(rename = "FORMS_V0526_POKEMON_GIGALITH")]
    FormsV0526PokemonGigalith,
    #[serde(rename = "FORMS_V0527_POKEMON_WOOBAT")]
    FormsV0527PokemonWoobat,
    #[serde(rename = "FORMS_V0528_POKEMON_SWOOBAT")]
    FormsV0528PokemonSwoobat,
    #[serde(rename = "FORMS_V0529_POKEMON_DRILBUR")]
    FormsV0529PokemonDrilbur,
    #[serde(rename = "FORMS_V0530_POKEMON_EXCADRILL")]
    FormsV0530PokemonExcadrill,
    #[serde(rename = "FORMS_V0531_POKEMON_AUDINO")]
    FormsV0531PokemonAudino,
    #[serde(rename = "FORMS_V0532_POKEMON_TIMBURR")]
    FormsV0532PokemonTimburr,
    #[serde(rename = "FORMS_V0533_POKEMON_GURDURR")]
    FormsV0533PokemonGurdurr,
    #[serde(rename = "FORMS_V0534_POKEMON_CONKELDURR")]
    FormsV0534PokemonConkeldurr,
    #[serde(rename = "FORMS_V0535_POKEMON_TYMPOLE")]
    FormsV0535PokemonTympole,
    #[serde(rename = "FORMS_V0536_POKEMON_PALPITOAD")]
    FormsV0536PokemonPalpitoad,
    #[serde(rename = "FORMS_V0537_POKEMON_SEISMITOAD")]
    FormsV0537PokemonSeismitoad,
    #[serde(rename = "FORMS_V0538_POKEMON_THROH")]
    FormsV0538PokemonThroh,
    #[serde(rename = "FORMS_V0539_POKEMON_SAWK")]
    FormsV0539PokemonSawk,
    #[serde(rename = "FORMS_V0540_POKEMON_SEWADDLE")]
    FormsV0540PokemonSewaddle,
    #[serde(rename = "FORMS_V0541_POKEMON_SWADLOON")]
    FormsV0541PokemonSwadloon,
    #[serde(rename = "FORMS_V0542_POKEMON_LEAVANNY")]
    FormsV0542PokemonLeavanny,
    #[serde(rename = "FORMS_V0543_POKEMON_VENIPEDE")]
    FormsV0543PokemonVenipede,
    #[serde(rename = "FORMS_V0544_POKEMON_WHIRLIPEDE")]
    FormsV0544PokemonWhirlipede,
    #[serde(rename = "FORMS_V0545_POKEMON_SCOLIPEDE")]
    FormsV0545PokemonScolipede,
    #[serde(rename = "FORMS_V0546_POKEMON_COTTONEE")]
    FormsV0546PokemonCottonee,
    #[serde(rename = "FORMS_V0547_POKEMON_WHIMSICOTT")]
    FormsV0547PokemonWhimsicott,
    #[serde(rename = "FORMS_V0548_POKEMON_PETILIL")]
    FormsV0548PokemonPetilil,
    #[serde(rename = "FORMS_V0549_POKEMON_LILLIGANT")]
    FormsV0549PokemonLilligant,
    #[serde(rename = "FORMS_V0550_POKEMON_BASCULIN")]
    FormsV0550PokemonBasculin,
    #[serde(rename = "FORMS_V0551_POKEMON_SANDILE")]
    FormsV0551PokemonSandile,
    #[serde(rename = "FORMS_V0552_POKEMON_KROKOROK")]
    FormsV0552PokemonKrokorok,
    #[serde(rename = "FORMS_V0553_POKEMON_KROOKODILE")]
    FormsV0553PokemonKrookodile,
    #[serde(rename = "FORMS_V0554_POKEMON_DARUMAKA")]
    FormsV0554PokemonDarumaka,
    #[serde(rename = "FORMS_V0555_POKEMON_DARMANITAN")]
    FormsV0555PokemonDarmanitan,
    #[serde(rename = "FORMS_V0556_POKEMON_MARACTUS")]
    FormsV0556PokemonMaractus,
    #[serde(rename = "FORMS_V0557_POKEMON_DWEBBLE")]
    FormsV0557PokemonDwebble,
    #[serde(rename = "FORMS_V0558_POKEMON_CRUSTLE")]
    FormsV0558PokemonCrustle,
    #[serde(rename = "FORMS_V0559_POKEMON_SCRAGGY")]
    FormsV0559PokemonScraggy,
    #[serde(rename = "FORMS_V0560_POKEMON_SCRAFTY")]
    FormsV0560PokemonScrafty,
    #[serde(rename = "FORMS_V0561_POKEMON_SIGILYPH")]
    FormsV0561PokemonSigilyph,
    #[serde(rename = "FORMS_V0562_POKEMON_YAMASK")]
    FormsV0562PokemonYamask,
    #[serde(rename = "FORMS_V0563_POKEMON_COFAGRIGUS")]
    FormsV0563PokemonCofagrigus,
    #[serde(rename = "FORMS_V0564_POKEMON_TIRTOUGA")]
    FormsV0564PokemonTirtouga,
    #[serde(rename = "FORMS_V0565_POKEMON_CARRACOSTA")]
    FormsV0565PokemonCarracosta,
    #[serde(rename = "FORMS_V0566_POKEMON_ARCHEN")]
    FormsV0566PokemonArchen,
    #[serde(rename = "FORMS_V0567_POKEMON_ARCHEOPS")]
    FormsV0567PokemonArcheops,
    #[serde(rename = "FORMS_V0568_POKEMON_TRUBBISH")]
    FormsV0568PokemonTrubbish,
    #[serde(rename = "FORMS_V0569_POKEMON_GARBODOR")]
    FormsV0569PokemonGarbodor,
    #[serde(rename = "FORMS_V0570_POKEMON_ZORUA")]
    FormsV0570PokemonZorua,
    #[serde(rename = "FORMS_V0571_POKEMON_ZOROARK")]
    FormsV0571PokemonZoroark,
    #[serde(rename = "FORMS_V0572_POKEMON_MINCCINO")]
    FormsV0572PokemonMinccino,
    #[serde(rename = "FORMS_V0573_POKEMON_CINCCINO")]
    FormsV0573PokemonCinccino,
    #[serde(rename = "FORMS_V0574_POKEMON_GOTHITA")]
    FormsV0574PokemonGothita,
    #[serde(rename = "FORMS_V0575_POKEMON_GOTHORITA")]
    FormsV0575PokemonGothorita,
    #[serde(rename = "FORMS_V0576_POKEMON_GOTHITELLE")]
    FormsV0576PokemonGothitelle,
    #[serde(rename = "FORMS_V0577_POKEMON_SOLOSIS")]
    FormsV0577PokemonSolosis,
    #[serde(rename = "FORMS_V0578_POKEMON_DUOSION")]
    FormsV0578PokemonDuosion,
    #[serde(rename = "FORMS_V0579_POKEMON_REUNICLUS")]
    FormsV0579PokemonReuniclus,
    #[serde(rename = "FORMS_V0580_POKEMON_DUCKLETT")]
    FormsV0580PokemonDucklett,
    #[serde(rename = "FORMS_V0581_POKEMON_SWANNA")]
    FormsV0581PokemonSwanna,
    #[serde(rename = "FORMS_V0582_POKEMON_VANILLITE")]
    FormsV0582PokemonVanillite,
    #[serde(rename = "FORMS_V0583_POKEMON_VANILLISH")]
    FormsV0583PokemonVanillish,
    #[serde(rename = "FORMS_V0584_POKEMON_VANILLUXE")]
    FormsV0584PokemonVanilluxe,
    #[serde(rename = "FORMS_V0585_POKEMON_DEERLING")]
    FormsV0585PokemonDeerling,
    #[serde(rename = "FORMS_V0586_POKEMON_SAWSBUCK")]
    FormsV0586PokemonSawsbuck,
    #[serde(rename = "FORMS_V0587_POKEMON_EMOLGA")]
    FormsV0587PokemonEmolga,
    #[serde(rename = "FORMS_V0588_POKEMON_KARRABLAST")]
    FormsV0588PokemonKarrablast,
    #[serde(rename = "FORMS_V0589_POKEMON_ESCAVALIER")]
    FormsV0589PokemonEscavalier,
    #[serde(rename = "FORMS_V0590_POKEMON_FOONGUS")]
    FormsV0590PokemonFoongus,
    #[serde(rename = "FORMS_V0591_POKEMON_AMOONGUSS")]
    FormsV0591PokemonAmoonguss,
    #[serde(rename = "FORMS_V0592_POKEMON_FRILLISH")]
    FormsV0592PokemonFrillish,
    #[serde(rename = "FORMS_V0593_POKEMON_JELLICENT")]
    FormsV0593PokemonJellicent,
    #[serde(rename = "FORMS_V0594_POKEMON_ALOMOMOLA")]
    FormsV0594PokemonAlomomola,
    #[serde(rename = "FORMS_V0595_POKEMON_JOLTIK")]
    FormsV0595PokemonJoltik,
    #[serde(rename = "FORMS_V0596_POKEMON_GALVANTULA")]
    FormsV0596PokemonGalvantula,
    #[serde(rename = "FORMS_V0597_POKEMON_FERROSEED")]
    FormsV0597PokemonFerroseed,
    #[serde(rename = "FORMS_V0598_POKEMON_FERROTHORN")]
    FormsV0598PokemonFerrothorn,
    #[serde(rename = "FORMS_V0599_POKEMON_KLINK")]
    FormsV0599PokemonKlink,
    #[serde(rename = "FORMS_V0600_POKEMON_KLANG")]
    FormsV0600PokemonKlang,
    #[serde(rename = "FORMS_V0601_POKEMON_KLINKLANG")]
    FormsV0601PokemonKlinklang,
    #[serde(rename = "FORMS_V0602_POKEMON_TYNAMO")]
    FormsV0602PokemonTynamo,
    #[serde(rename = "FORMS_V0603_POKEMON_EELEKTRIK")]
    FormsV0603PokemonEelektrik,
    #[serde(rename = "FORMS_V0604_POKEMON_EELEKTROSS")]
    FormsV0604PokemonEelektross,
    #[serde(rename = "FORMS_V0605_POKEMON_ELGYEM")]
    FormsV0605PokemonElgyem,
    #[serde(rename = "FORMS_V0606_POKEMON_BEHEEYEM")]
    FormsV0606PokemonBeheeyem,
    #[serde(rename = "FORMS_V0607_POKEMON_LITWICK")]
    FormsV0607PokemonLitwick,
    #[serde(rename = "FORMS_V0608_POKEMON_LAMPENT")]
    FormsV0608PokemonLampent,
    #[serde(rename = "FORMS_V0609_POKEMON_CHANDELURE")]
    FormsV0609PokemonChandelure,
    #[serde(rename = "FORMS_V0610_POKEMON_AXEW")]
    FormsV0610PokemonAxew,
    #[serde(rename = "FORMS_V0611_POKEMON_FRAXURE")]
    FormsV0611PokemonFraxure,
    #[serde(rename = "FORMS_V0612_POKEMON_HAXORUS")]
    FormsV0612PokemonHaxorus,
    #[serde(rename = "FORMS_V0613_POKEMON_CUBCHOO")]
    FormsV0613PokemonCubchoo,
    #[serde(rename = "FORMS_V0614_POKEMON_BEARTIC")]
    FormsV0614PokemonBeartic,
    #[serde(rename = "FORMS_V0615_POKEMON_CRYOGONAL")]
    FormsV0615PokemonCryogonal,
    #[serde(rename = "FORMS_V0616_POKEMON_SHELMET")]
    FormsV0616PokemonShelmet,
    #[serde(rename = "FORMS_V0617_POKEMON_ACCELGOR")]
    FormsV0617PokemonAccelgor,
    #[serde(rename = "FORMS_V0618_POKEMON_STUNFISK")]
    FormsV0618PokemonStunfisk,
    #[serde(rename = "FORMS_V0619_POKEMON_MIENFOO")]
    FormsV0619PokemonMienfoo,
    #[serde(rename = "FORMS_V0620_POKEMON_MIENSHAO")]
    FormsV0620PokemonMienshao,
    #[serde(rename = "FORMS_V0621_POKEMON_DRUDDIGON")]
    FormsV0621PokemonDruddigon,
    #[serde(rename = "FORMS_V0622_POKEMON_GOLETT")]
    FormsV0622PokemonGolett,
    #[serde(rename = "FORMS_V0623_POKEMON_GOLURK")]
    FormsV0623PokemonGolurk,
    #[serde(rename = "FORMS_V0624_POKEMON_PAWNIARD")]
    FormsV0624PokemonPawniard,
    #[serde(rename = "FORMS_V0625_POKEMON_BISHARP")]
    FormsV0625PokemonBisharp,
    #[serde(rename = "FORMS_V0626_POKEMON_BOUFFALANT")]
    FormsV0626PokemonBouffalant,
    #[serde(rename = "FORMS_V0627_POKEMON_RUFFLET")]
    FormsV0627PokemonRufflet,
    #[serde(rename = "FORMS_V0628_POKEMON_BRAVIARY")]
    FormsV0628PokemonBraviary,
    #[serde(rename = "FORMS_V0629_POKEMON_VULLABY")]
    FormsV0629PokemonVullaby,
    #[serde(rename = "FORMS_V0630_POKEMON_MANDIBUZZ")]
    FormsV0630PokemonMandibuzz,
    #[serde(rename = "FORMS_V0631_POKEMON_HEATMOR")]
    FormsV0631PokemonHeatmor,
    #[serde(rename = "FORMS_V0632_POKEMON_DURANT")]
    FormsV0632PokemonDurant,
    #[serde(rename = "FORMS_V0633_POKEMON_DEINO")]
    FormsV0633PokemonDeino,
    #[serde(rename = "FORMS_V0634_POKEMON_ZWEILOUS")]
    FormsV0634PokemonZweilous,
    #[serde(rename = "FORMS_V0635_POKEMON_HYDREIGON")]
    FormsV0635PokemonHydreigon,
    #[serde(rename = "FORMS_V0636_POKEMON_LARVESTA")]
    FormsV0636PokemonLarvesta,
    #[serde(rename = "FORMS_V0637_POKEMON_VOLCARONA")]
    FormsV0637PokemonVolcarona,
    #[serde(rename = "FORMS_V0638_POKEMON_COBALION")]
    FormsV0638PokemonCobalion,
    #[serde(rename = "FORMS_V0639_POKEMON_TERRAKION")]
    FormsV0639PokemonTerrakion,
    #[serde(rename = "FORMS_V0640_POKEMON_VIRIZION")]
    FormsV0640PokemonVirizion,
    #[serde(rename = "FORMS_V0641_POKEMON_TORNADUS")]
    FormsV0641PokemonTornadus,
    #[serde(rename = "FORMS_V0642_POKEMON_THUNDURUS")]
    FormsV0642PokemonThundurus,
    #[serde(rename = "FORMS_V0643_POKEMON_RESHIRAM")]
    FormsV0643PokemonReshiram,
    #[serde(rename = "FORMS_V0644_POKEMON_ZEKROM")]
    FormsV0644PokemonZekrom,
    #[serde(rename = "FORMS_V0645_POKEMON_LANDORUS")]
    FormsV0645PokemonLandorus,
    #[serde(rename = "FORMS_V0646_POKEMON_KYUREM")]
    FormsV0646PokemonKyurem,
    #[serde(rename = "FORMS_V0647_POKEMON_KELDEO")]
    FormsV0647PokemonKeldeo,
    #[serde(rename = "FORMS_V0648_POKEMON_MELOETTA")]
    FormsV0648PokemonMeloetta,
    #[serde(rename = "FORMS_V0649_POKEMON_GENESECT")]
    FormsV0649PokemonGenesect,
    #[serde(rename = "FORMS_V0650_POKEMON_CHESPIN")]
    FormsV0650PokemonChespin,
    #[serde(rename = "FORMS_V0651_POKEMON_QUILLADIN")]
    FormsV0651PokemonQuilladin,
    #[serde(rename = "FORMS_V0652_POKEMON_CHESNAUGHT")]
    FormsV0652PokemonChesnaught,
    #[serde(rename = "FORMS_V0653_POKEMON_FENNEKIN")]
    FormsV0653PokemonFennekin,
    #[serde(rename = "FORMS_V0654_POKEMON_BRAIXEN")]
    FormsV0654PokemonBraixen,
    #[serde(rename = "FORMS_V0655_POKEMON_DELPHOX")]
    FormsV0655PokemonDelphox,
    #[serde(rename = "FORMS_V0656_POKEMON_FROAKIE")]
    FormsV0656PokemonFroakie,
    #[serde(rename = "FORMS_V0657_POKEMON_FROGADIER")]
    FormsV0657PokemonFrogadier,
    #[serde(rename = "FORMS_V0658_POKEMON_GRENINJA")]
    FormsV0658PokemonGreninja,
    #[serde(rename = "FORMS_V0659_POKEMON_BUNNELBY")]
    FormsV0659PokemonBunnelby,
    #[serde(rename = "FORMS_V0660_POKEMON_DIGGERSBY")]
    FormsV0660PokemonDiggersby,
    #[serde(rename = "FORMS_V0661_POKEMON_FLETCHLING")]
    FormsV0661PokemonFletchling,
    #[serde(rename = "FORMS_V0662_POKEMON_FLETCHINDER")]
    FormsV0662PokemonFletchinder,
    #[serde(rename = "FORMS_V0663_POKEMON_TALONFLAME")]
    FormsV0663PokemonTalonflame,
    #[serde(rename = "FORMS_V0664_POKEMON_SCATTERBUG")]
    FormsV0664PokemonScatterbug,
    #[serde(rename = "FORMS_V0665_POKEMON_SPEWPA")]
    FormsV0665PokemonSpewpa,
    #[serde(rename = "FORMS_V0666_POKEMON_VIVILLON")]
    FormsV0666PokemonVivillon,
    #[serde(rename = "FORMS_V0667_POKEMON_LITLEO")]
    FormsV0667PokemonLitleo,
    #[serde(rename = "FORMS_V0668_POKEMON_PYROAR")]
    FormsV0668PokemonPyroar,
    #[serde(rename = "FORMS_V0669_POKEMON_FLABEBE")]
    FormsV0669PokemonFlabebe,
    #[serde(rename = "FORMS_V0670_POKEMON_FLOETTE")]
    FormsV0670PokemonFloette,
    #[serde(rename = "FORMS_V0671_POKEMON_FLORGES")]
    FormsV0671PokemonFlorges,
    #[serde(rename = "FORMS_V0672_POKEMON_SKIDDO")]
    FormsV0672PokemonSkiddo,
    #[serde(rename = "FORMS_V0673_POKEMON_GOGOAT")]
    FormsV0673PokemonGogoat,
    #[serde(rename = "FORMS_V0674_POKEMON_PANCHAM")]
    FormsV0674PokemonPancham,
    #[serde(rename = "FORMS_V0675_POKEMON_PANGORO")]
    FormsV0675PokemonPangoro,
    #[serde(rename = "FORMS_V0676_POKEMON_FURFROU")]
    FormsV0676PokemonFurfrou,
    #[serde(rename = "FORMS_V0677_POKEMON_ESPURR")]
    FormsV0677PokemonEspurr,
    #[serde(rename = "FORMS_V0678_POKEMON_MEOWSTIC")]
    FormsV0678PokemonMeowstic,
    #[serde(rename = "FORMS_V0679_POKEMON_HONEDGE")]
    FormsV0679PokemonHonedge,
    #[serde(rename = "FORMS_V0680_POKEMON_DOUBLADE")]
    FormsV0680PokemonDoublade,
    #[serde(rename = "FORMS_V0681_POKEMON_AEGISLASH")]
    FormsV0681PokemonAegislash,
    #[serde(rename = "FORMS_V0682_POKEMON_SPRITZEE")]
    FormsV0682PokemonSpritzee,
    #[serde(rename = "FORMS_V0683_POKEMON_AROMATISSE")]
    FormsV0683PokemonAromatisse,
    #[serde(rename = "FORMS_V0684_POKEMON_SWIRLIX")]
    FormsV0684PokemonSwirlix,
    #[serde(rename = "FORMS_V0685_POKEMON_SLURPUFF")]
    FormsV0685PokemonSlurpuff,
    #[serde(rename = "FORMS_V0686_POKEMON_INKAY")]
    FormsV0686PokemonInkay,
    #[serde(rename = "FORMS_V0687_POKEMON_MALAMAR")]
    FormsV0687PokemonMalamar,
    #[serde(rename = "FORMS_V0688_POKEMON_BINACLE")]
    FormsV0688PokemonBinacle,
    #[serde(rename = "FORMS_V0689_POKEMON_BARBARACLE")]
    FormsV0689PokemonBarbaracle,
    #[serde(rename = "FORMS_V0690_POKEMON_SKRELP")]
    FormsV0690PokemonSkrelp,
    #[serde(rename = "FORMS_V0691_POKEMON_DRAGALGE")]
    FormsV0691PokemonDragalge,
    #[serde(rename = "FORMS_V0692_POKEMON_CLAUNCHER")]
    FormsV0692PokemonClauncher,
    #[serde(rename = "FORMS_V0693_POKEMON_CLAWITZER")]
    FormsV0693PokemonClawitzer,
    #[serde(rename = "FORMS_V0694_POKEMON_HELIOPTILE")]
    FormsV0694PokemonHelioptile,
    #[serde(rename = "FORMS_V0695_POKEMON_HELIOLISK")]
    FormsV0695PokemonHeliolisk,
    #[serde(rename = "FORMS_V0696_POKEMON_TYRUNT")]
    FormsV0696PokemonTyrunt,
    #[serde(rename = "FORMS_V0697_POKEMON_TYRANTRUM")]
    FormsV0697PokemonTyrantrum,
    #[serde(rename = "FORMS_V0698_POKEMON_AMAURA")]
    FormsV0698PokemonAmaura,
    #[serde(rename = "FORMS_V0699_POKEMON_AURORUS")]
    FormsV0699PokemonAurorus,
    #[serde(rename = "FORMS_V0700_POKEMON_SYLVEON")]
    FormsV0700PokemonSylveon,
    #[serde(rename = "FORMS_V0701_POKEMON_HAWLUCHA")]
    FormsV0701PokemonHawlucha,
    #[serde(rename = "FORMS_V0702_POKEMON_DEDENNE")]
    FormsV0702PokemonDedenne,
    #[serde(rename = "FORMS_V0703_POKEMON_CARBINK")]
    FormsV0703PokemonCarbink,
    #[serde(rename = "FORMS_V0704_POKEMON_GOOMY")]
    FormsV0704PokemonGoomy,
    #[serde(rename = "FORMS_V0705_POKEMON_SLIGGOO")]
    FormsV0705PokemonSliggoo,
    #[serde(rename = "FORMS_V0706_POKEMON_GOODRA")]
    FormsV0706PokemonGoodra,
    #[serde(rename = "FORMS_V0707_POKEMON_KLEFKI")]
    FormsV0707PokemonKlefki,
    #[serde(rename = "FORMS_V0708_POKEMON_PHANTUMP")]
    FormsV0708PokemonPhantump,
    #[serde(rename = "FORMS_V0709_POKEMON_TREVENANT")]
    FormsV0709PokemonTrevenant,
    #[serde(rename = "FORMS_V0710_POKEMON_PUMPKABOO")]
    FormsV0710PokemonPumpkaboo,
    #[serde(rename = "FORMS_V0711_POKEMON_GOURGEIST")]
    FormsV0711PokemonGourgeist,
    #[serde(rename = "FORMS_V0712_POKEMON_BERGMITE")]
    FormsV0712PokemonBergmite,
    #[serde(rename = "FORMS_V0713_POKEMON_AVALUGG")]
    FormsV0713PokemonAvalugg,
    #[serde(rename = "FORMS_V0714_POKEMON_NOIBAT")]
    FormsV0714PokemonNoibat,
    #[serde(rename = "FORMS_V0715_POKEMON_NOIVERN")]
    FormsV0715PokemonNoivern,
    #[serde(rename = "FORMS_V0716_POKEMON_XERNEAS")]
    FormsV0716PokemonXerneas,
    #[serde(rename = "FORMS_V0717_POKEMON_YVELTAL")]
    FormsV0717PokemonYveltal,
    #[serde(rename = "FORMS_V0718_POKEMON_ZYGARDE")]
    FormsV0718PokemonZygarde,
    #[serde(rename = "FORMS_V0719_POKEMON_DIANCIE")]
    FormsV0719PokemonDiancie,
    #[serde(rename = "FORMS_V0720_POKEMON_HOOPA")]
    FormsV0720PokemonHoopa,
    #[serde(rename = "FORMS_V0721_POKEMON_VOLCANION")]
    FormsV0721PokemonVolcanion,
    #[serde(rename = "FORMS_V0722_POKEMON_ROWLET")]
    FormsV0722PokemonRowlet,
    #[serde(rename = "FORMS_V0723_POKEMON_DARTRIX")]
    FormsV0723PokemonDartrix,
    #[serde(rename = "FORMS_V0724_POKEMON_DECIDUEYE")]
    FormsV0724PokemonDecidueye,
    #[serde(rename = "FORMS_V0725_POKEMON_LITTEN")]
    FormsV0725PokemonLitten,
    #[serde(rename = "FORMS_V0726_POKEMON_TORRACAT")]
    FormsV0726PokemonTorracat,
    #[serde(rename = "FORMS_V0727_POKEMON_INCINEROAR")]
    FormsV0727PokemonIncineroar,
    #[serde(rename = "FORMS_V0728_POKEMON_POPPLIO")]
    FormsV0728PokemonPopplio,
    #[serde(rename = "FORMS_V0729_POKEMON_BRIONNE")]
    FormsV0729PokemonBrionne,
    #[serde(rename = "FORMS_V0730_POKEMON_PRIMARINA")]
    FormsV0730PokemonPrimarina,
    #[serde(rename = "FORMS_V0731_POKEMON_PIKIPEK")]
    FormsV0731PokemonPikipek,
    #[serde(rename = "FORMS_V0732_POKEMON_TRUMBEAK")]
    FormsV0732PokemonTrumbeak,
    #[serde(rename = "FORMS_V0733_POKEMON_TOUCANNON")]
    FormsV0733PokemonToucannon,
    #[serde(rename = "FORMS_V0734_POKEMON_YUNGOOS")]
    FormsV0734PokemonYungoos,
    #[serde(rename = "FORMS_V0735_POKEMON_GUMSHOOS")]
    FormsV0735PokemonGumshoos,
    #[serde(rename = "FORMS_V0736_POKEMON_GRUBBIN")]
    FormsV0736PokemonGrubbin,
    #[serde(rename = "FORMS_V0737_POKEMON_CHARJABUG")]
    FormsV0737PokemonCharjabug,
    #[serde(rename = "FORMS_V0738_POKEMON_VIKAVOLT")]
    FormsV0738PokemonVikavolt,
    #[serde(rename = "FORMS_V0739_POKEMON_CRABRAWLER")]
    FormsV0739PokemonCrabrawler,
    #[serde(rename = "FORMS_V0740_POKEMON_CRABOMINABLE")]
    FormsV0740PokemonCrabominable,
    #[serde(rename = "FORMS_V0741_POKEMON_ORICORIO")]
    FormsV0741PokemonOricorio,
    #[serde(rename = "FORMS_V0742_POKEMON_CUTIEFLY")]
    FormsV0742PokemonCutiefly,
    #[serde(rename = "FORMS_V0743_POKEMON_RIBOMBEE")]
    FormsV0743PokemonRibombee,
    #[serde(rename = "FORMS_V0744_POKEMON_ROCKRUFF")]
    FormsV0744PokemonRockruff,
    #[serde(rename = "FORMS_V0745_POKEMON_LYCANROC")]
    FormsV0745PokemonLycanroc,
    #[serde(rename = "FORMS_V0746_POKEMON_WISHIWASHI")]
    FormsV0746PokemonWishiwashi,
    #[serde(rename = "FORMS_V0747_POKEMON_MAREANIE")]
    FormsV0747PokemonMareanie,
    #[serde(rename = "FORMS_V0748_POKEMON_TOXAPEX")]
    FormsV0748PokemonToxapex,
    #[serde(rename = "FORMS_V0749_POKEMON_MUDBRAY")]
    FormsV0749PokemonMudbray,
    #[serde(rename = "FORMS_V0750_POKEMON_MUDSDALE")]
    FormsV0750PokemonMudsdale,
    #[serde(rename = "FORMS_V0751_POKEMON_DEWPIDER")]
    FormsV0751PokemonDewpider,
    #[serde(rename = "FORMS_V0752_POKEMON_ARAQUANID")]
    FormsV0752PokemonAraquanid,
    #[serde(rename = "FORMS_V0753_POKEMON_FOMANTIS")]
    FormsV0753PokemonFomantis,
    #[serde(rename = "FORMS_V0754_POKEMON_LURANTIS")]
    FormsV0754PokemonLurantis,
    #[serde(rename = "FORMS_V0755_POKEMON_MORELULL")]
    FormsV0755PokemonMorelull,
    #[serde(rename = "FORMS_V0756_POKEMON_SHIINOTIC")]
    FormsV0756PokemonShiinotic,
    #[serde(rename = "FORMS_V0757_POKEMON_SALANDIT")]
    FormsV0757PokemonSalandit,
    #[serde(rename = "FORMS_V0758_POKEMON_SALAZZLE")]
    FormsV0758PokemonSalazzle,
    #[serde(rename = "FORMS_V0759_POKEMON_STUFFUL")]
    FormsV0759PokemonStufful,
    #[serde(rename = "FORMS_V0760_POKEMON_BEWEAR")]
    FormsV0760PokemonBewear,
    #[serde(rename = "FORMS_V0761_POKEMON_BOUNSWEET")]
    FormsV0761PokemonBounsweet,
    #[serde(rename = "FORMS_V0762_POKEMON_STEENEE")]
    FormsV0762PokemonSteenee,
    #[serde(rename = "FORMS_V0763_POKEMON_TSAREENA")]
    FormsV0763PokemonTsareena,
    #[serde(rename = "FORMS_V0764_POKEMON_COMFEY")]
    FormsV0764PokemonComfey,
    #[serde(rename = "FORMS_V0765_POKEMON_ORANGURU")]
    FormsV0765PokemonOranguru,
    #[serde(rename = "FORMS_V0766_POKEMON_PASSIMIAN")]
    FormsV0766PokemonPassimian,
    #[serde(rename = "FORMS_V0767_POKEMON_WIMPOD")]
    FormsV0767PokemonWimpod,
    #[serde(rename = "FORMS_V0768_POKEMON_GOLISOPOD")]
    FormsV0768PokemonGolisopod,
    #[serde(rename = "FORMS_V0769_POKEMON_SANDYGAST")]
    FormsV0769PokemonSandygast,
    #[serde(rename = "FORMS_V0770_POKEMON_PALOSSAND")]
    FormsV0770PokemonPalossand,
    #[serde(rename = "FORMS_V0771_POKEMON_PYUKUMUKU")]
    FormsV0771PokemonPyukumuku,
    #[serde(rename = "FORMS_V0772_POKEMON_TYPE_NULL")]
    FormsV0772PokemonTypeNull,
    #[serde(rename = "FORMS_V0773_POKEMON_SILVALLY")]
    FormsV0773PokemonSilvally,
    #[serde(rename = "FORMS_V0774_POKEMON_MINIOR")]
    FormsV0774PokemonMinior,
    #[serde(rename = "FORMS_V0775_POKEMON_KOMALA")]
    FormsV0775PokemonKomala,
    #[serde(rename = "FORMS_V0776_POKEMON_TURTONATOR")]
    FormsV0776PokemonTurtonator,
    #[serde(rename = "FORMS_V0777_POKEMON_TOGEDEMARU")]
    FormsV0777PokemonTogedemaru,
    #[serde(rename = "FORMS_V0778_POKEMON_MIMIKYU")]
    FormsV0778PokemonMimikyu,
    #[serde(rename = "FORMS_V0779_POKEMON_BRUXISH")]
    FormsV0779PokemonBruxish,
    #[serde(rename = "FORMS_V0780_POKEMON_DRAMPA")]
    FormsV0780PokemonDrampa,
    #[serde(rename = "FORMS_V0781_POKEMON_DHELMISE")]
    FormsV0781PokemonDhelmise,
    #[serde(rename = "FORMS_V0782_POKEMON_JANGMO_O")]
    FormsV0782PokemonJangmoO,
    #[serde(rename = "FORMS_V0783_POKEMON_HAKAMO_O")]
    FormsV0783PokemonHakamoO,
    #[serde(rename = "FORMS_V0784_POKEMON_KOMMO_O")]
    FormsV0784PokemonKommoO,
    #[serde(rename = "FORMS_V0785_POKEMON_TAPU_KOKO")]
    FormsV0785PokemonTapuKoko,
    #[serde(rename = "FORMS_V0786_POKEMON_TAPU_LELE")]
    FormsV0786PokemonTapuLele,
    #[serde(rename = "FORMS_V0787_POKEMON_TAPU_BULU")]
    FormsV0787PokemonTapuBulu,
    #[serde(rename = "FORMS_V0788_POKEMON_TAPU_FINI")]
    FormsV0788PokemonTapuFini,
    #[serde(rename = "FORMS_V0789_POKEMON_COSMOG")]
    FormsV0789PokemonCosmog,
    #[serde(rename = "FORMS_V0790_POKEMON_COSMOEM")]
    FormsV0790PokemonCosmoem,
    #[serde(rename = "FORMS_V0791_POKEMON_SOLGALEO")]
    FormsV0791PokemonSolgaleo,
    #[serde(rename = "FORMS_V0792_POKEMON_LUNALA")]
    FormsV0792PokemonLunala,
    #[serde(rename = "FORMS_V0793_POKEMON_NIHILEGO")]
    FormsV0793PokemonNihilego,
    #[serde(rename = "FORMS_V0794_POKEMON_BUZZWOLE")]
    FormsV0794PokemonBuzzwole,
    #[serde(rename = "FORMS_V0795_POKEMON_PHEROMOSA")]
    FormsV0795PokemonPheromosa,
    #[serde(rename = "FORMS_V0796_POKEMON_XURKITREE")]
    FormsV0796PokemonXurkitree,
    #[serde(rename = "FORMS_V0797_POKEMON_CELESTEELA")]
    FormsV0797PokemonCelesteela,
    #[serde(rename = "FORMS_V0798_POKEMON_KARTANA")]
    FormsV0798PokemonKartana,
    #[serde(rename = "FORMS_V0799_POKEMON_GUZZLORD")]
    FormsV0799PokemonGuzzlord,
    #[serde(rename = "FORMS_V0800_POKEMON_NECROZMA")]
    FormsV0800PokemonNecrozma,
    #[serde(rename = "FORMS_V0801_POKEMON_MAGEARNA")]
    FormsV0801PokemonMagearna,
    #[serde(rename = "FORMS_V0802_POKEMON_MARSHADOW")]
    FormsV0802PokemonMarshadow,
    #[serde(rename = "FORMS_V0803_POKEMON_POIPOLE")]
    FormsV0803PokemonPoipole,
    #[serde(rename = "FORMS_V0804_POKEMON_NAGANADEL")]
    FormsV0804PokemonNaganadel,
    #[serde(rename = "FORMS_V0805_POKEMON_STAKATAKA")]
    FormsV0805PokemonStakataka,
    #[serde(rename = "FORMS_V0806_POKEMON_BLACEPHALON")]
    FormsV0806PokemonBlacephalon,
    #[serde(rename = "FORMS_V0807_POKEMON_ZERAORA")]
    FormsV0807PokemonZeraora,
    #[serde(rename = "FORMS_V0808_POKEMON_MELTAN")]
    FormsV0808PokemonMeltan,
    #[serde(rename = "FORMS_V0809_POKEMON_MELMETAL")]
    FormsV0809PokemonMelmetal,
    #[serde(rename = "FORMS_V0810_POKEMON_GROOKEY")]
    FormsV0810PokemonGrookey,
    #[serde(rename = "FORMS_V0811_POKEMON_THWACKEY")]
    FormsV0811PokemonThwackey,
    #[serde(rename = "FORMS_V0812_POKEMON_RILLABOOM")]
    FormsV0812PokemonRillaboom,
    #[serde(rename = "FORMS_V0813_POKEMON_SCORBUNNY")]
    FormsV0813PokemonScorbunny,
    #[serde(rename = "FORMS_V0814_POKEMON_RABOOT")]
    FormsV0814PokemonRaboot,
    #[serde(rename = "FORMS_V0815_POKEMON_CINDERACE")]
    FormsV0815PokemonCinderace,
    #[serde(rename = "FORMS_V0816_POKEMON_SOBBLE")]
    FormsV0816PokemonSobble,
    #[serde(rename = "FORMS_V0817_POKEMON_DRIZZILE")]
    FormsV0817PokemonDrizzile,
    #[serde(rename = "FORMS_V0818_POKEMON_INTELEON")]
    FormsV0818PokemonInteleon,
    #[serde(rename = "FORMS_V0819_POKEMON_SKWOVET")]
    FormsV0819PokemonSkwovet,
    #[serde(rename = "FORMS_V0820_POKEMON_GREEDENT")]
    FormsV0820PokemonGreedent,
    #[serde(rename = "FORMS_V0821_POKEMON_ROOKIDEE")]
    FormsV0821PokemonRookidee,
    #[serde(rename = "FORMS_V0822_POKEMON_CORVISQUIRE")]
    FormsV0822PokemonCorvisquire,
    #[serde(rename = "FORMS_V0823_POKEMON_CORVIKNIGHT")]
    FormsV0823PokemonCorviknight,
    #[serde(rename = "FORMS_V0824_POKEMON_BLIPBUG")]
    FormsV0824PokemonBlipbug,
    #[serde(rename = "FORMS_V0825_POKEMON_DOTTLER")]
    FormsV0825PokemonDottler,
    #[serde(rename = "FORMS_V0826_POKEMON_ORBEETLE")]
    FormsV0826PokemonOrbeetle,
    #[serde(rename = "FORMS_V0827_POKEMON_NICKIT")]
    FormsV0827PokemonNickit,
    #[serde(rename = "FORMS_V0828_POKEMON_THIEVUL")]
    FormsV0828PokemonThievul,
    #[serde(rename = "FORMS_V0829_POKEMON_GOSSIFLEUR")]
    FormsV0829PokemonGossifleur,
    #[serde(rename = "FORMS_V0830_POKEMON_ELDEGOSS")]
    FormsV0830PokemonEldegoss,
    #[serde(rename = "FORMS_V0831_POKEMON_WOOLOO")]
    FormsV0831PokemonWooloo,
    #[serde(rename = "FORMS_V0832_POKEMON_DUBWOOL")]
    FormsV0832PokemonDubwool,
    #[serde(rename = "FORMS_V0833_POKEMON_CHEWTLE")]
    FormsV0833PokemonChewtle,
    #[serde(rename = "FORMS_V0834_POKEMON_DREDNAW")]
    FormsV0834PokemonDrednaw,
    #[serde(rename = "FORMS_V0835_POKEMON_YAMPER")]
    FormsV0835PokemonYamper,
    #[serde(rename = "FORMS_V0836_POKEMON_BOLTUND")]
    FormsV0836PokemonBoltund,
    #[serde(rename = "FORMS_V0837_POKEMON_ROLYCOLY")]
    FormsV0837PokemonRolycoly,
    #[serde(rename = "FORMS_V0838_POKEMON_CARKOL")]
    FormsV0838PokemonCarkol,
    #[serde(rename = "FORMS_V0839_POKEMON_COALOSSAL")]
    FormsV0839PokemonCoalossal,
    #[serde(rename = "FORMS_V0840_POKEMON_APPLIN")]
    FormsV0840PokemonApplin,
    #[serde(rename = "FORMS_V0841_POKEMON_FLAPPLE")]
    FormsV0841PokemonFlapple,
    #[serde(rename = "FORMS_V0842_POKEMON_APPLETUN")]
    FormsV0842PokemonAppletun,
    #[serde(rename = "FORMS_V0843_POKEMON_SILICOBRA")]
    FormsV0843PokemonSilicobra,
    #[serde(rename = "FORMS_V0844_POKEMON_SANDACONDA")]
    FormsV0844PokemonSandaconda,
    #[serde(rename = "FORMS_V0845_POKEMON_CRAMORANT")]
    FormsV0845PokemonCramorant,
    #[serde(rename = "FORMS_V0846_POKEMON_ARROKUDA")]
    FormsV0846PokemonArrokuda,
    #[serde(rename = "FORMS_V0847_POKEMON_BARRASKEWDA")]
    FormsV0847PokemonBarraskewda,
    #[serde(rename = "FORMS_V0848_POKEMON_TOXEL")]
    FormsV0848PokemonToxel,
    #[serde(rename = "FORMS_V0849_POKEMON_TOXTRICITY")]
    FormsV0849PokemonToxtricity,
    #[serde(rename = "FORMS_V0850_POKEMON_SIZZLIPEDE")]
    FormsV0850PokemonSizzlipede,
    #[serde(rename = "FORMS_V0851_POKEMON_CENTISKORCH")]
    FormsV0851PokemonCentiskorch,
    #[serde(rename = "FORMS_V0852_POKEMON_CLOBBOPUS")]
    FormsV0852PokemonClobbopus,
    #[serde(rename = "FORMS_V0853_POKEMON_GRAPPLOCT")]
    FormsV0853PokemonGrapploct,
    #[serde(rename = "FORMS_V0854_POKEMON_SINISTEA")]
    FormsV0854PokemonSinistea,
    #[serde(rename = "FORMS_V0855_POKEMON_POLTEAGEIST")]
    FormsV0855PokemonPolteageist,
    #[serde(rename = "FORMS_V0856_POKEMON_HATENNA")]
    FormsV0856PokemonHatenna,
    #[serde(rename = "FORMS_V0857_POKEMON_HATTREM")]
    FormsV0857PokemonHattrem,
    #[serde(rename = "FORMS_V0858_POKEMON_HATTERENE")]
    FormsV0858PokemonHatterene,
    #[serde(rename = "FORMS_V0859_POKEMON_IMPIDIMP")]
    FormsV0859PokemonImpidimp,
    #[serde(rename = "FORMS_V0860_POKEMON_MORGREM")]
    FormsV0860PokemonMorgrem,
    #[serde(rename = "FORMS_V0861_POKEMON_GRIMMSNARL")]
    FormsV0861PokemonGrimmsnarl,
    #[serde(rename = "FORMS_V0862_POKEMON_OBSTAGOON")]
    FormsV0862PokemonObstagoon,
    #[serde(rename = "FORMS_V0863_POKEMON_PERRSERKER")]
    FormsV0863PokemonPerrserker,
    #[serde(rename = "FORMS_V0864_POKEMON_CURSOLA")]
    FormsV0864PokemonCursola,
    #[serde(rename = "FORMS_V0865_POKEMON_SIRFETCHD")]
    FormsV0865PokemonSirfetchd,
    #[serde(rename = "FORMS_V0866_POKEMON_MR_RIME")]
    FormsV0866PokemonMrRime,
    #[serde(rename = "FORMS_V0867_POKEMON_RUNERIGUS")]
    FormsV0867PokemonRunerigus,
    #[serde(rename = "FORMS_V0868_POKEMON_MILCERY")]
    FormsV0868PokemonMilcery,
    #[serde(rename = "FORMS_V0869_POKEMON_ALCREMIE")]
    FormsV0869PokemonAlcremie,
    #[serde(rename = "FORMS_V0870_POKEMON_FALINKS")]
    FormsV0870PokemonFalinks,
    #[serde(rename = "FORMS_V0871_POKEMON_PINCURCHIN")]
    FormsV0871PokemonPincurchin,
    #[serde(rename = "FORMS_V0872_POKEMON_SNOM")]
    FormsV0872PokemonSnom,
    #[serde(rename = "FORMS_V0873_POKEMON_FROSMOTH")]
    FormsV0873PokemonFrosmoth,
    #[serde(rename = "FORMS_V0874_POKEMON_STONJOURNER")]
    FormsV0874PokemonStonjourner,
    #[serde(rename = "FORMS_V0875_POKEMON_EISCUE")]
    FormsV0875PokemonEiscue,
    #[serde(rename = "FORMS_V0876_POKEMON_INDEEDEE")]
    FormsV0876PokemonIndeedee,
    #[serde(rename = "FORMS_V0877_POKEMON_MORPEKO")]
    FormsV0877PokemonMorpeko,
    #[serde(rename = "FORMS_V0878_POKEMON_CUFANT")]
    FormsV0878PokemonCufant,
    #[serde(rename = "FORMS_V0879_POKEMON_COPPERAJAH")]
    FormsV0879PokemonCopperajah,
    #[serde(rename = "FORMS_V0880_POKEMON_DRACOZOLT")]
    FormsV0880PokemonDracozolt,
    #[serde(rename = "FORMS_V0881_POKEMON_ARCTOZOLT")]
    FormsV0881PokemonArctozolt,
    #[serde(rename = "FORMS_V0882_POKEMON_DRACOVISH")]
    FormsV0882PokemonDracovish,
    #[serde(rename = "FORMS_V0883_POKEMON_ARCTOVISH")]
    FormsV0883PokemonArctovish,
    #[serde(rename = "FORMS_V0884_POKEMON_DURALUDON")]
    FormsV0884PokemonDuraludon,
    #[serde(rename = "FORMS_V0885_POKEMON_DREEPY")]
    FormsV0885PokemonDreepy,
    #[serde(rename = "FORMS_V0886_POKEMON_DRAKLOAK")]
    FormsV0886PokemonDrakloak,
    #[serde(rename = "FORMS_V0887_POKEMON_DRAGAPULT")]
    FormsV0887PokemonDragapult,
    #[serde(rename = "FORMS_V0888_POKEMON_ZACIAN")]
    FormsV0888PokemonZacian,
    #[serde(rename = "FORMS_V0889_POKEMON_ZAMAZENTA")]
    FormsV0889PokemonZamazenta,
    #[serde(rename = "FORMS_V0890_POKEMON_ETERNATUS")]
    FormsV0890PokemonEternatus,
    #[serde(rename = "FORMS_V0891_POKEMON_KUBFU")]
    FormsV0891PokemonKubfu,
    #[serde(rename = "FORMS_V0892_POKEMON_URSHIFU")]
    FormsV0892PokemonUrshifu,
    #[serde(rename = "FORMS_V0893_POKEMON_ZARUDE")]
    FormsV0893PokemonZarude,
    #[serde(rename = "FORMS_V0894_POKEMON_REGIELEKI")]
    FormsV0894PokemonRegieleki,
    #[serde(rename = "FORMS_V0895_POKEMON_REGIDRAGO")]
    FormsV0895PokemonRegidrago,
    #[serde(rename = "FORMS_V0896_POKEMON_GLASTRIER")]
    FormsV0896PokemonGlastrier,
    #[serde(rename = "FORMS_V0897_POKEMON_SPECTRIER")]
    FormsV0897PokemonSpectrier,
    #[serde(rename = "FORMS_V0898_POKEMON_CALYREX")]
    FormsV0898PokemonCalyrex,
    #[serde(rename = "FORMS_V0899_POKEMON_WYRDEER")]
    FormsV0899PokemonWyrdeer,
    #[serde(rename = "FORMS_V0900_POKEMON_KLEAVOR")]
    FormsV0900PokemonKleavor,
    #[serde(rename = "FORMS_V0901_POKEMON_URSALUNA")]
    FormsV0901PokemonUrsaluna,
    #[serde(rename = "FORMS_V0902_POKEMON_BASCULEGION")]
    FormsV0902PokemonBasculegion,
    #[serde(rename = "FORMS_V0903_POKEMON_SNEASLER")]
    FormsV0903PokemonSneasler,
    #[serde(rename = "FORMS_V0904_POKEMON_OVERQWIL")]
    FormsV0904PokemonOverqwil,
    #[serde(rename = "FORMS_V0905_POKEMON_ENAMORUS")]
    FormsV0905PokemonEnamorus,
    #[serde(rename = "FORMS_V0906_POKEMON_SPRIGATITO")]
    FormsV0906PokemonSprigatito,
    #[serde(rename = "FORMS_V0907_POKEMON_FLORAGATO")]
    FormsV0907PokemonFloragato,
    #[serde(rename = "FORMS_V0908_POKEMON_MEOWSCARADA")]
    FormsV0908PokemonMeowscarada,
    #[serde(rename = "FORMS_V0909_POKEMON_FUECOCO")]
    FormsV0909PokemonFuecoco,
    #[serde(rename = "FORMS_V0910_POKEMON_CROCALOR")]
    FormsV0910PokemonCrocalor,
    #[serde(rename = "FORMS_V0911_POKEMON_SKELEDIRGE")]
    FormsV0911PokemonSkeledirge,
    #[serde(rename = "FORMS_V0912_POKEMON_QUAXLY")]
    FormsV0912PokemonQuaxly,
    #[serde(rename = "FORMS_V0913_POKEMON_QUAXWELL")]
    FormsV0913PokemonQuaxwell,
    #[serde(rename = "FORMS_V0914_POKEMON_QUAQUAVAL")]
    FormsV0914PokemonQuaquaval,
    #[serde(rename = "FORMS_V0915_POKEMON_LECHONK")]
    FormsV0915PokemonLechonk,
    #[serde(rename = "FORMS_V0916_POKEMON_OINKOLOGNE")]
    FormsV0916PokemonOinkologne,
    #[serde(rename = "FORMS_V0917_POKEMON_TAROUNTULA")]
    FormsV0917PokemonTarountula,
    #[serde(rename = "FORMS_V0918_POKEMON_SPIDOPS")]
    FormsV0918PokemonSpidops,
    #[serde(rename = "FORMS_V0919_POKEMON_NYMBLE")]
    FormsV0919PokemonNymble,
    #[serde(rename = "FORMS_V0920_POKEMON_LOKIX")]
    FormsV0920PokemonLokix,
    #[serde(rename = "FORMS_V0921_POKEMON_PAWMI")]
    FormsV0921PokemonPawmi,
    #[serde(rename = "FORMS_V0922_POKEMON_PAWMO")]
    FormsV0922PokemonPawmo,
    #[serde(rename = "FORMS_V0923_POKEMON_PAWMOT")]
    FormsV0923PokemonPawmot,
    #[serde(rename = "FORMS_V0924_POKEMON_TANDEMAUS")]
    FormsV0924PokemonTandemaus,
    #[serde(rename = "FORMS_V0925_POKEMON_MAUSHOLD")]
    FormsV0925PokemonMaushold,
    #[serde(rename = "FORMS_V0926_POKEMON_FIDOUGH")]
    FormsV0926PokemonFidough,
    #[serde(rename = "FORMS_V0927_POKEMON_DACHSBUN")]
    FormsV0927PokemonDachsbun,
    #[serde(rename = "FORMS_V0928_POKEMON_SMOLIV")]
    FormsV0928PokemonSmoliv,
    #[serde(rename = "FORMS_V0929_POKEMON_DOLLIV")]
    FormsV0929PokemonDolliv,
    #[serde(rename = "FORMS_V0930_POKEMON_ARBOLIVA")]
    FormsV0930PokemonArboliva,
    #[serde(rename = "FORMS_V0931_POKEMON_SQUAWKABILLY")]
    FormsV0931PokemonSquawkabilly,
    #[serde(rename = "FORMS_V0932_POKEMON_NACLI")]
    FormsV0932PokemonNacli,
    #[serde(rename = "FORMS_V0933_POKEMON_NACLSTACK")]
    FormsV0933PokemonNaclstack,
    #[serde(rename = "FORMS_V0934_POKEMON_GARGANACL")]
    FormsV0934PokemonGarganacl,
    #[serde(rename = "FORMS_V0935_POKEMON_CHARCADET")]
    FormsV0935PokemonCharcadet,
    #[serde(rename = "FORMS_V0936_POKEMON_ARMAROUGE")]
    FormsV0936PokemonArmarouge,
    #[serde(rename = "FORMS_V0937_POKEMON_CERULEDGE")]
    FormsV0937PokemonCeruledge,
    #[serde(rename = "FORMS_V0938_POKEMON_TADBULB")]
    FormsV0938PokemonTadbulb,
    #[serde(rename = "FORMS_V0939_POKEMON_BELLIBOLT")]
    FormsV0939PokemonBellibolt,
    #[serde(rename = "FORMS_V0940_POKEMON_WATTREL")]
    FormsV0940PokemonWattrel,
    #[serde(rename = "FORMS_V0941_POKEMON_KILOWATTREL")]
    FormsV0941PokemonKilowattrel,
    #[serde(rename = "FORMS_V0942_POKEMON_MASCHIFF")]
    FormsV0942PokemonMaschiff,
    #[serde(rename = "FORMS_V0943_POKEMON_MABOSSTIFF")]
    FormsV0943PokemonMabosstiff,
    #[serde(rename = "FORMS_V0944_POKEMON_SHROODLE")]
    FormsV0944PokemonShroodle,
    #[serde(rename = "FORMS_V0945_POKEMON_GRAFAIAI")]
    FormsV0945PokemonGrafaiai,
    #[serde(rename = "FORMS_V0946_POKEMON_BRAMBLIN")]
    FormsV0946PokemonBramblin,
    #[serde(rename = "FORMS_V0947_POKEMON_BRAMBLEGHAST")]
    FormsV0947PokemonBrambleghast,
    #[serde(rename = "FORMS_V0948_POKEMON_TOEDSCOOL")]
    FormsV0948PokemonToedscool,
    #[serde(rename = "FORMS_V0949_POKEMON_TOEDSCRUEL")]
    FormsV0949PokemonToedscruel,
    #[serde(rename = "FORMS_V0950_POKEMON_KLAWF")]
    FormsV0950PokemonKlawf,
    #[serde(rename = "FORMS_V0951_POKEMON_CAPSAKID")]
    FormsV0951PokemonCapsakid,
    #[serde(rename = "FORMS_V0952_POKEMON_SCOVILLAIN")]
    FormsV0952PokemonScovillain,
    #[serde(rename = "FORMS_V0953_POKEMON_RELLOR")]
    FormsV0953PokemonRellor,
    #[serde(rename = "FORMS_V0954_POKEMON_RABSCA")]
    FormsV0954PokemonRabsca,
    #[serde(rename = "FORMS_V0955_POKEMON_FLITTLE")]
    FormsV0955PokemonFlittle,
    #[serde(rename = "FORMS_V0956_POKEMON_ESPATHRA")]
    FormsV0956PokemonEspathra,
    #[serde(rename = "FORMS_V0957_POKEMON_TINKATINK")]
    FormsV0957PokemonTinkatink,
    #[serde(rename = "FORMS_V0958_POKEMON_TINKATUFF")]
    FormsV0958PokemonTinkatuff,
    #[serde(rename = "FORMS_V0959_POKEMON_TINKATON")]
    FormsV0959PokemonTinkaton,
    #[serde(rename = "FORMS_V0960_POKEMON_WIGLETT")]
    FormsV0960PokemonWiglett,
    #[serde(rename = "FORMS_V0961_POKEMON_WUGTRIO")]
    FormsV0961PokemonWugtrio,
    #[serde(rename = "FORMS_V0962_POKEMON_BOMBIRDIER")]
    FormsV0962PokemonBombirdier,
    #[serde(rename = "FORMS_V0963_POKEMON_FINIZEN")]
    FormsV0963PokemonFinizen,
    #[serde(rename = "FORMS_V0964_POKEMON_PALAFIN")]
    FormsV0964PokemonPalafin,
    #[serde(rename = "FORMS_V0965_POKEMON_VAROOM")]
    FormsV0965PokemonVaroom,
    #[serde(rename = "FORMS_V0966_POKEMON_REVAVROOM")]
    FormsV0966PokemonRevavroom,
    #[serde(rename = "FORMS_V0967_POKEMON_CYCLIZAR")]
    FormsV0967PokemonCyclizar,
    #[serde(rename = "FORMS_V0968_POKEMON_ORTHWORM")]
    FormsV0968PokemonOrthworm,
    #[serde(rename = "FORMS_V0969_POKEMON_GLIMMET")]
    FormsV0969PokemonGlimmet,
    #[serde(rename = "FORMS_V0970_POKEMON_GLIMMORA")]
    FormsV0970PokemonGlimmora,
    #[serde(rename = "FORMS_V0971_POKEMON_GREAVARD")]
    FormsV0971PokemonGreavard,
    #[serde(rename = "FORMS_V0972_POKEMON_HOUNDSTONE")]
    FormsV0972PokemonHoundstone,
    #[serde(rename = "FORMS_V0973_POKEMON_FLAMIGO")]
    FormsV0973PokemonFlamigo,
    #[serde(rename = "FORMS_V0974_POKEMON_CETODDLE")]
    FormsV0974PokemonCetoddle,
    #[serde(rename = "FORMS_V0975_POKEMON_CETITAN")]
    FormsV0975PokemonCetitan,
    #[serde(rename = "FORMS_V0976_POKEMON_VELUZA")]
    FormsV0976PokemonVeluza,
    #[serde(rename = "FORMS_V0977_POKEMON_DONDOZO")]
    FormsV0977PokemonDondozo,
    #[serde(rename = "FORMS_V0978_POKEMON_TATSUGIRI")]
    FormsV0978PokemonTatsugiri,
    #[serde(rename = "FORMS_V0979_POKEMON_ANNIHILAPE")]
    FormsV0979PokemonAnnihilape,
    #[serde(rename = "FORMS_V0980_POKEMON_CLODSIRE")]
    FormsV0980PokemonClodsire,
    #[serde(rename = "FORMS_V0981_POKEMON_FARIGIRAF")]
    FormsV0981PokemonFarigiraf,
    #[serde(rename = "FORMS_V0982_POKEMON_DUDUNSPARCE")]
    FormsV0982PokemonDudunsparce,
    #[serde(rename = "FORMS_V0983_POKEMON_KINGAMBIT")]
    FormsV0983PokemonKingambit,
    #[serde(rename = "FORMS_V0984_POKEMON_GREATTUSK")]
    FormsV0984PokemonGreattusk,
    #[serde(rename = "FORMS_V0985_POKEMON_SCREAMTAIL")]
    FormsV0985PokemonScreamtail,
    #[serde(rename = "FORMS_V0986_POKEMON_BRUTEBONNET")]
    FormsV0986PokemonBrutebonnet,
    #[serde(rename = "FORMS_V0987_POKEMON_FLUTTERMANE")]
    FormsV0987PokemonFluttermane,
    #[serde(rename = "FORMS_V0988_POKEMON_SLITHERWING")]
    FormsV0988PokemonSlitherwing,
    #[serde(rename = "FORMS_V0989_POKEMON_SANDYSHOCKS")]
    FormsV0989PokemonSandyshocks,
    #[serde(rename = "FORMS_V0990_POKEMON_IRONTREADS")]
    FormsV0990PokemonIrontreads,
    #[serde(rename = "FORMS_V0991_POKEMON_IRONBUNDLE")]
    FormsV0991PokemonIronbundle,
    #[serde(rename = "FORMS_V0992_POKEMON_IRONHANDS")]
    FormsV0992PokemonIronhands,
    #[serde(rename = "FORMS_V0993_POKEMON_IRONJUGULIS")]
    FormsV0993PokemonIronjugulis,
    #[serde(rename = "FORMS_V0994_POKEMON_IRONMOTH")]
    FormsV0994PokemonIronmoth,
    #[serde(rename = "FORMS_V0995_POKEMON_IRONTHORNS")]
    FormsV0995PokemonIronthorns,
    #[serde(rename = "FORMS_V0996_POKEMON_FRIGIBAX")]
    FormsV0996PokemonFrigibax,
    #[serde(rename = "FORMS_V0997_POKEMON_ARCTIBAX")]
    FormsV0997PokemonArctibax,
    #[serde(rename = "FORMS_V0998_POKEMON_BAXCALIBUR")]
    FormsV0998PokemonBaxcalibur,
    #[serde(rename = "FORMS_V0999_POKEMON_GIMMIGHOUL")]
    FormsV0999PokemonGimmighoul,
    #[serde(rename = "FORMS_V1000_POKEMON_GHOLDENGO")]
    FormsV1000PokemonGholdengo,
    #[serde(rename = "FORMS_V1001_POKEMON_WOCHIEN")]
    FormsV1001PokemonWochien,
    #[serde(rename = "FORMS_V1002_POKEMON_CHIENPAO")]
    FormsV1002PokemonChienpao,
    #[serde(rename = "FORMS_V1003_POKEMON_TINGLU")]
    FormsV1003PokemonTinglu,
    #[serde(rename = "FORMS_V1004_POKEMON_CHIYU")]
    FormsV1004PokemonChiyu,
    #[serde(rename = "FORMS_V1005_POKEMON_ROARINGMOON")]
    FormsV1005PokemonRoaringmoon,
    #[serde(rename = "FORMS_V1006_POKEMON_IRONVALIANT")]
    FormsV1006PokemonIronvaliant,
    #[serde(rename = "FORMS_V1007_POKEMON_KORAIDON")]
    FormsV1007PokemonKoraidon,
    #[serde(rename = "FORMS_V1008_POKEMON_MIRAIDON")]
    FormsV1008PokemonMiraidon,
    #[serde(rename = "FORMS_V1009_POKEMON_WALKINGWAKE")]
    FormsV1009PokemonWalkingwake,
    #[serde(rename = "FORMS_V1010_POKEMON_IRONLEAVES")]
    FormsV1010PokemonIronleaves,
    #[serde(rename = "FORMS_V1011_POKEMON_DIPPLIN")]
    FormsV1011PokemonDipplin,
    #[serde(rename = "FORMS_V1012_POKEMON_POLTCHAGEIST")]
    FormsV1012PokemonPoltchageist,
    #[serde(rename = "FORMS_V1013_POKEMON_SINISTCHA")]
    FormsV1013PokemonSinistcha,
    #[serde(rename = "FORMS_V1014_POKEMON_OKIDOGI")]
    FormsV1014PokemonOkidogi,
    #[serde(rename = "FORMS_V1015_POKEMON_MUNKIDORI")]
    FormsV1015PokemonMunkidori,
    #[serde(rename = "FORMS_V1016_POKEMON_FEZANDIPITI")]
    FormsV1016PokemonFezandipiti,
    #[serde(rename = "FORMS_V1017_POKEMON_OGERPON")]
    FormsV1017PokemonOgerpon,
    #[serde(rename = "FORMS_V1018_POKEMON_ARCHALUDON")]
    FormsV1018PokemonArchaludon,
    #[serde(rename = "FORMS_V1019_POKEMON_HYDRAPPLE")]
    FormsV1019PokemonHydrapple,
    #[serde(rename = "FORMS_V1020_POKEMON_GOUGINGFIRE")]
    FormsV1020PokemonGougingfire,
    #[serde(rename = "FORMS_V1021_POKEMON_RAGINGBOLT")]
    FormsV1021PokemonRagingbolt,
    #[serde(rename = "FORMS_V1022_POKEMON_IRONBOULDER")]
    FormsV1022PokemonIronboulder,
    #[serde(rename = "FORMS_V1023_POKEMON_IRONCROWN")]
    FormsV1023PokemonIroncrown,
    #[serde(rename = "FORMS_V1024_POKEMON_TERAPAGOS")]
    FormsV1024PokemonTerapagos,
    #[serde(rename = "FORMS_V1025_POKEMON_PECHARUNT")]
    FormsV1025PokemonPecharunt,
}

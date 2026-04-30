//! Generated from Pokémon GO masterfile — group "pokemonFamily" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonFamilyTemplateId {
    #[serde(rename = "V0001_FAMILY_BULBASAUR")]
    V0001FamilyBulbasaur,
    #[serde(rename = "V0004_FAMILY_CHARMANDER")]
    V0004FamilyCharmander,
    #[serde(rename = "V0007_FAMILY_SQUIRTLE")]
    V0007FamilySquirtle,
    #[serde(rename = "V0010_FAMILY_CATERPIE")]
    V0010FamilyCaterpie,
    #[serde(rename = "V0013_FAMILY_WEEDLE")]
    V0013FamilyWeedle,
    #[serde(rename = "V0016_FAMILY_PIDGEY")]
    V0016FamilyPidgey,
    #[serde(rename = "V0019_FAMILY_RATTATA")]
    V0019FamilyRattata,
    #[serde(rename = "V0021_FAMILY_SPEAROW")]
    V0021FamilySpearow,
    #[serde(rename = "V0023_FAMILY_EKANS")]
    V0023FamilyEkans,
    #[serde(rename = "V0025_FAMILY_PIKACHU")]
    V0025FamilyPikachu,
    #[serde(rename = "V0027_FAMILY_SANDSHREW")]
    V0027FamilySandshrew,
    #[serde(rename = "V0029_FAMILY_NIDORAN")]
    V0029FamilyNidoran,
    #[serde(rename = "V0032_FAMILY_NIDORAN")]
    V0032FamilyNidoran,
    #[serde(rename = "V0035_FAMILY_CLEFAIRY")]
    V0035FamilyClefairy,
    #[serde(rename = "V0037_FAMILY_VULPIX")]
    V0037FamilyVulpix,
    #[serde(rename = "V0039_FAMILY_JIGGLYPUFF")]
    V0039FamilyJigglypuff,
    #[serde(rename = "V0041_FAMILY_ZUBAT")]
    V0041FamilyZubat,
    #[serde(rename = "V0043_FAMILY_ODDISH")]
    V0043FamilyOddish,
    #[serde(rename = "V0046_FAMILY_PARAS")]
    V0046FamilyParas,
    #[serde(rename = "V0048_FAMILY_VENONAT")]
    V0048FamilyVenonat,
    #[serde(rename = "V0050_FAMILY_DIGLETT")]
    V0050FamilyDiglett,
    #[serde(rename = "V0052_FAMILY_MEOWTH")]
    V0052FamilyMeowth,
    #[serde(rename = "V0054_FAMILY_PSYDUCK")]
    V0054FamilyPsyduck,
    #[serde(rename = "V0056_FAMILY_MANKEY")]
    V0056FamilyMankey,
    #[serde(rename = "V0058_FAMILY_GROWLITHE")]
    V0058FamilyGrowlithe,
    #[serde(rename = "V0060_FAMILY_POLIWAG")]
    V0060FamilyPoliwag,
    #[serde(rename = "V0063_FAMILY_ABRA")]
    V0063FamilyAbra,
    #[serde(rename = "V0066_FAMILY_MACHOP")]
    V0066FamilyMachop,
    #[serde(rename = "V0069_FAMILY_BELLSPROUT")]
    V0069FamilyBellsprout,
    #[serde(rename = "V0072_FAMILY_TENTACOOL")]
    V0072FamilyTentacool,
    #[serde(rename = "V0074_FAMILY_GEODUDE")]
    V0074FamilyGeodude,
    #[serde(rename = "V0077_FAMILY_PONYTA")]
    V0077FamilyPonyta,
    #[serde(rename = "V0079_FAMILY_SLOWPOKE")]
    V0079FamilySlowpoke,
    #[serde(rename = "V0081_FAMILY_MAGNEMITE")]
    V0081FamilyMagnemite,
    #[serde(rename = "V0083_FAMILY_FARFETCHD")]
    V0083FamilyFarfetchd,
    #[serde(rename = "V0084_FAMILY_DODUO")]
    V0084FamilyDoduo,
    #[serde(rename = "V0086_FAMILY_SEEL")]
    V0086FamilySeel,
    #[serde(rename = "V0088_FAMILY_GRIMER")]
    V0088FamilyGrimer,
    #[serde(rename = "V0090_FAMILY_SHELLDER")]
    V0090FamilyShellder,
    #[serde(rename = "V0092_FAMILY_GASTLY")]
    V0092FamilyGastly,
    #[serde(rename = "V0095_FAMILY_ONIX")]
    V0095FamilyOnix,
    #[serde(rename = "V0096_FAMILY_DROWZEE")]
    V0096FamilyDrowzee,
    #[serde(rename = "V0098_FAMILY_KRABBY")]
    V0098FamilyKrabby,
    #[serde(rename = "V0100_FAMILY_VOLTORB")]
    V0100FamilyVoltorb,
    #[serde(rename = "V0102_FAMILY_EXEGGCUTE")]
    V0102FamilyExeggcute,
    #[serde(rename = "V0104_FAMILY_CUBONE")]
    V0104FamilyCubone,
    #[serde(rename = "V0108_FAMILY_LICKITUNG")]
    V0108FamilyLickitung,
    #[serde(rename = "V0109_FAMILY_KOFFING")]
    V0109FamilyKoffing,
    #[serde(rename = "V0111_FAMILY_RHYHORN")]
    V0111FamilyRhyhorn,
    #[serde(rename = "V0113_FAMILY_CHANSEY")]
    V0113FamilyChansey,
    #[serde(rename = "V0114_FAMILY_TANGELA")]
    V0114FamilyTangela,
    #[serde(rename = "V0115_FAMILY_KANGASKHAN")]
    V0115FamilyKangaskhan,
    #[serde(rename = "V0116_FAMILY_HORSEA")]
    V0116FamilyHorsea,
    #[serde(rename = "V0118_FAMILY_GOLDEEN")]
    V0118FamilyGoldeen,
    #[serde(rename = "V0120_FAMILY_STARYU")]
    V0120FamilyStaryu,
    #[serde(rename = "V0122_FAMILY_MR_MIME")]
    V0122FamilyMrMime,
    #[serde(rename = "V0123_FAMILY_SCYTHER")]
    V0123FamilyScyther,
    #[serde(rename = "V0124_FAMILY_JYNX")]
    V0124FamilyJynx,
    #[serde(rename = "V0125_FAMILY_ELECTABUZZ")]
    V0125FamilyElectabuzz,
    #[serde(rename = "V0126_FAMILY_MAGMAR")]
    V0126FamilyMagmar,
    #[serde(rename = "V0127_FAMILY_PINSIR")]
    V0127FamilyPinsir,
    #[serde(rename = "V0128_FAMILY_TAUROS")]
    V0128FamilyTauros,
    #[serde(rename = "V0129_FAMILY_MAGIKARP")]
    V0129FamilyMagikarp,
    #[serde(rename = "V0131_FAMILY_LAPRAS")]
    V0131FamilyLapras,
    #[serde(rename = "V0132_FAMILY_DITTO")]
    V0132FamilyDitto,
    #[serde(rename = "V0133_FAMILY_EEVEE")]
    V0133FamilyEevee,
    #[serde(rename = "V0137_FAMILY_PORYGON")]
    V0137FamilyPorygon,
    #[serde(rename = "V0138_FAMILY_OMANYTE")]
    V0138FamilyOmanyte,
    #[serde(rename = "V0140_FAMILY_KABUTO")]
    V0140FamilyKabuto,
    #[serde(rename = "V0142_FAMILY_AERODACTYL")]
    V0142FamilyAerodactyl,
    #[serde(rename = "V0143_FAMILY_SNORLAX")]
    V0143FamilySnorlax,
    #[serde(rename = "V0144_FAMILY_ARTICUNO")]
    V0144FamilyArticuno,
    #[serde(rename = "V0145_FAMILY_ZAPDOS")]
    V0145FamilyZapdos,
    #[serde(rename = "V0146_FAMILY_MOLTRES")]
    V0146FamilyMoltres,
    #[serde(rename = "V0147_FAMILY_DRATINI")]
    V0147FamilyDratini,
    #[serde(rename = "V0150_FAMILY_MEWTWO")]
    V0150FamilyMewtwo,
    #[serde(rename = "V0151_FAMILY_MEW")]
    V0151FamilyMew,
    #[serde(rename = "V0152_FAMILY_CHIKORITA")]
    V0152FamilyChikorita,
    #[serde(rename = "V0155_FAMILY_CYNDAQUIL")]
    V0155FamilyCyndaquil,
    #[serde(rename = "V0158_FAMILY_TOTODILE")]
    V0158FamilyTotodile,
    #[serde(rename = "V0161_FAMILY_SENTRET")]
    V0161FamilySentret,
    #[serde(rename = "V0163_FAMILY_HOOTHOOT")]
    V0163FamilyHoothoot,
    #[serde(rename = "V0165_FAMILY_LEDYBA")]
    V0165FamilyLedyba,
    #[serde(rename = "V0167_FAMILY_SPINARAK")]
    V0167FamilySpinarak,
    #[serde(rename = "V0170_FAMILY_CHINCHOU")]
    V0170FamilyChinchou,
    #[serde(rename = "V0175_FAMILY_TOGEPI")]
    V0175FamilyTogepi,
    #[serde(rename = "V0177_FAMILY_NATU")]
    V0177FamilyNatu,
    #[serde(rename = "V0179_FAMILY_MAREEP")]
    V0179FamilyMareep,
    #[serde(rename = "V0183_FAMILY_MARILL")]
    V0183FamilyMarill,
    #[serde(rename = "V0185_FAMILY_SUDOWOODO")]
    V0185FamilySudowoodo,
    #[serde(rename = "V0187_FAMILY_HOPPIP")]
    V0187FamilyHoppip,
    #[serde(rename = "V0190_FAMILY_AIPOM")]
    V0190FamilyAipom,
    #[serde(rename = "V0191_FAMILY_SUNKERN")]
    V0191FamilySunkern,
    #[serde(rename = "V0193_FAMILY_YANMA")]
    V0193FamilyYanma,
    #[serde(rename = "V0194_FAMILY_WOOPER")]
    V0194FamilyWooper,
    #[serde(rename = "V0198_FAMILY_MURKROW")]
    V0198FamilyMurkrow,
    #[serde(rename = "V0200_FAMILY_MISDREAVUS")]
    V0200FamilyMisdreavus,
    #[serde(rename = "V0201_FAMILY_UNOWN")]
    V0201FamilyUnown,
    #[serde(rename = "V0202_FAMILY_WOBBUFFET")]
    V0202FamilyWobbuffet,
    #[serde(rename = "V0203_FAMILY_GIRAFARIG")]
    V0203FamilyGirafarig,
    #[serde(rename = "V0204_FAMILY_PINECO")]
    V0204FamilyPineco,
    #[serde(rename = "V0206_FAMILY_DUNSPARCE")]
    V0206FamilyDunsparce,
    #[serde(rename = "V0207_FAMILY_GLIGAR")]
    V0207FamilyGligar,
    #[serde(rename = "V0209_FAMILY_SNUBBULL")]
    V0209FamilySnubbull,
    #[serde(rename = "V0211_FAMILY_QWILFISH")]
    V0211FamilyQwilfish,
    #[serde(rename = "V0213_FAMILY_SHUCKLE")]
    V0213FamilyShuckle,
    #[serde(rename = "V0214_FAMILY_HERACROSS")]
    V0214FamilyHeracross,
    #[serde(rename = "V0215_FAMILY_SNEASEL")]
    V0215FamilySneasel,
    #[serde(rename = "V0216_FAMILY_TEDDIURSA")]
    V0216FamilyTeddiursa,
    #[serde(rename = "V0218_FAMILY_SLUGMA")]
    V0218FamilySlugma,
    #[serde(rename = "V0220_FAMILY_SWINUB")]
    V0220FamilySwinub,
    #[serde(rename = "V0222_FAMILY_CORSOLA")]
    V0222FamilyCorsola,
    #[serde(rename = "V0223_FAMILY_REMORAID")]
    V0223FamilyRemoraid,
    #[serde(rename = "V0225_FAMILY_DELIBIRD")]
    V0225FamilyDelibird,
    #[serde(rename = "V0226_FAMILY_MANTINE")]
    V0226FamilyMantine,
    #[serde(rename = "V0227_FAMILY_SKARMORY")]
    V0227FamilySkarmory,
    #[serde(rename = "V0228_FAMILY_HOUNDOUR")]
    V0228FamilyHoundour,
    #[serde(rename = "V0231_FAMILY_PHANPY")]
    V0231FamilyPhanpy,
    #[serde(rename = "V0234_FAMILY_STANTLER")]
    V0234FamilyStantler,
    #[serde(rename = "V0235_FAMILY_SMEARGLE")]
    V0235FamilySmeargle,
    #[serde(rename = "V0236_FAMILY_TYROGUE")]
    V0236FamilyTyrogue,
    #[serde(rename = "V0241_FAMILY_MILTANK")]
    V0241FamilyMiltank,
    #[serde(rename = "V0243_FAMILY_RAIKOU")]
    V0243FamilyRaikou,
    #[serde(rename = "V0244_FAMILY_ENTEI")]
    V0244FamilyEntei,
    #[serde(rename = "V0245_FAMILY_SUICUNE")]
    V0245FamilySuicune,
    #[serde(rename = "V0246_FAMILY_LARVITAR")]
    V0246FamilyLarvitar,
    #[serde(rename = "V0249_FAMILY_LUGIA")]
    V0249FamilyLugia,
    #[serde(rename = "V0250_FAMILY_HO_OH")]
    V0250FamilyHoOh,
    #[serde(rename = "V0251_FAMILY_CELEBI")]
    V0251FamilyCelebi,
    #[serde(rename = "V0252_FAMILY_TREECKO")]
    V0252FamilyTreecko,
    #[serde(rename = "V0255_FAMILY_TORCHIC")]
    V0255FamilyTorchic,
    #[serde(rename = "V0258_FAMILY_MUDKIP")]
    V0258FamilyMudkip,
    #[serde(rename = "V0261_FAMILY_POOCHYENA")]
    V0261FamilyPoochyena,
    #[serde(rename = "V0263_FAMILY_ZIGZAGOON")]
    V0263FamilyZigzagoon,
    #[serde(rename = "V0265_FAMILY_WURMPLE")]
    V0265FamilyWurmple,
    #[serde(rename = "V0270_FAMILY_LOTAD")]
    V0270FamilyLotad,
    #[serde(rename = "V0273_FAMILY_SEEDOT")]
    V0273FamilySeedot,
    #[serde(rename = "V0276_FAMILY_TAILLOW")]
    V0276FamilyTaillow,
    #[serde(rename = "V0278_FAMILY_WINGULL")]
    V0278FamilyWingull,
    #[serde(rename = "V0280_FAMILY_RALTS")]
    V0280FamilyRalts,
    #[serde(rename = "V0283_FAMILY_SURSKIT")]
    V0283FamilySurskit,
    #[serde(rename = "V0285_FAMILY_SHROOMISH")]
    V0285FamilyShroomish,
    #[serde(rename = "V0287_FAMILY_SLAKOTH")]
    V0287FamilySlakoth,
    #[serde(rename = "V0290_FAMILY_NINCADA")]
    V0290FamilyNincada,
    #[serde(rename = "V0293_FAMILY_WHISMUR")]
    V0293FamilyWhismur,
    #[serde(rename = "V0296_FAMILY_MAKUHITA")]
    V0296FamilyMakuhita,
    #[serde(rename = "V0299_FAMILY_NOSEPASS")]
    V0299FamilyNosepass,
    #[serde(rename = "V0300_FAMILY_SKITTY")]
    V0300FamilySkitty,
    #[serde(rename = "V0302_FAMILY_SABLEYE")]
    V0302FamilySableye,
    #[serde(rename = "V0303_FAMILY_MAWILE")]
    V0303FamilyMawile,
    #[serde(rename = "V0304_FAMILY_ARON")]
    V0304FamilyAron,
    #[serde(rename = "V0307_FAMILY_MEDITITE")]
    V0307FamilyMeditite,
    #[serde(rename = "V0309_FAMILY_ELECTRIKE")]
    V0309FamilyElectrike,
    #[serde(rename = "V0311_FAMILY_PLUSLE")]
    V0311FamilyPlusle,
    #[serde(rename = "V0312_FAMILY_MINUN")]
    V0312FamilyMinun,
    #[serde(rename = "V0313_FAMILY_VOLBEAT")]
    V0313FamilyVolbeat,
    #[serde(rename = "V0314_FAMILY_ILLUMISE")]
    V0314FamilyIllumise,
    #[serde(rename = "V0315_FAMILY_ROSELIA")]
    V0315FamilyRoselia,
    #[serde(rename = "V0316_FAMILY_GULPIN")]
    V0316FamilyGulpin,
    #[serde(rename = "V0318_FAMILY_CARVANHA")]
    V0318FamilyCarvanha,
    #[serde(rename = "V0320_FAMILY_WAILMER")]
    V0320FamilyWailmer,
    #[serde(rename = "V0322_FAMILY_NUMEL")]
    V0322FamilyNumel,
    #[serde(rename = "V0324_FAMILY_TORKOAL")]
    V0324FamilyTorkoal,
    #[serde(rename = "V0325_FAMILY_SPOINK")]
    V0325FamilySpoink,
    #[serde(rename = "V0327_FAMILY_SPINDA")]
    V0327FamilySpinda,
    #[serde(rename = "V0328_FAMILY_TRAPINCH")]
    V0328FamilyTrapinch,
    #[serde(rename = "V0331_FAMILY_CACNEA")]
    V0331FamilyCacnea,
    #[serde(rename = "V0333_FAMILY_SWABLU")]
    V0333FamilySwablu,
    #[serde(rename = "V0335_FAMILY_ZANGOOSE")]
    V0335FamilyZangoose,
    #[serde(rename = "V0336_FAMILY_SEVIPER")]
    V0336FamilySeviper,
    #[serde(rename = "V0337_FAMILY_LUNATONE")]
    V0337FamilyLunatone,
    #[serde(rename = "V0338_FAMILY_SOLROCK")]
    V0338FamilySolrock,
    #[serde(rename = "V0339_FAMILY_BARBOACH")]
    V0339FamilyBarboach,
    #[serde(rename = "V0341_FAMILY_CORPHISH")]
    V0341FamilyCorphish,
    #[serde(rename = "V0343_FAMILY_BALTOY")]
    V0343FamilyBaltoy,
    #[serde(rename = "V0345_FAMILY_LILEEP")]
    V0345FamilyLileep,
    #[serde(rename = "V0347_FAMILY_ANORITH")]
    V0347FamilyAnorith,
    #[serde(rename = "V0349_FAMILY_FEEBAS")]
    V0349FamilyFeebas,
    #[serde(rename = "V0351_FAMILY_CASTFORM")]
    V0351FamilyCastform,
    #[serde(rename = "V0352_FAMILY_KECLEON")]
    V0352FamilyKecleon,
    #[serde(rename = "V0353_FAMILY_SHUPPET")]
    V0353FamilyShuppet,
    #[serde(rename = "V0355_FAMILY_DUSKULL")]
    V0355FamilyDuskull,
    #[serde(rename = "V0357_FAMILY_TROPIUS")]
    V0357FamilyTropius,
    #[serde(rename = "V0358_FAMILY_CHIMECHO")]
    V0358FamilyChimecho,
    #[serde(rename = "V0359_FAMILY_ABSOL")]
    V0359FamilyAbsol,
    #[serde(rename = "V0361_FAMILY_SNORUNT")]
    V0361FamilySnorunt,
    #[serde(rename = "V0363_FAMILY_SPHEAL")]
    V0363FamilySpheal,
    #[serde(rename = "V0366_FAMILY_CLAMPERL")]
    V0366FamilyClamperl,
    #[serde(rename = "V0369_FAMILY_RELICANTH")]
    V0369FamilyRelicanth,
    #[serde(rename = "V0370_FAMILY_LUVDISC")]
    V0370FamilyLuvdisc,
    #[serde(rename = "V0371_FAMILY_BAGON")]
    V0371FamilyBagon,
    #[serde(rename = "V0374_FAMILY_BELDUM")]
    V0374FamilyBeldum,
    #[serde(rename = "V0377_FAMILY_REGIROCK")]
    V0377FamilyRegirock,
    #[serde(rename = "V0378_FAMILY_REGICE")]
    V0378FamilyRegice,
    #[serde(rename = "V0379_FAMILY_REGISTEEL")]
    V0379FamilyRegisteel,
    #[serde(rename = "V0380_FAMILY_LATIAS")]
    V0380FamilyLatias,
    #[serde(rename = "V0381_FAMILY_LATIOS")]
    V0381FamilyLatios,
    #[serde(rename = "V0382_FAMILY_KYOGRE")]
    V0382FamilyKyogre,
    #[serde(rename = "V0383_FAMILY_GROUDON")]
    V0383FamilyGroudon,
    #[serde(rename = "V0384_FAMILY_RAYQUAZA")]
    V0384FamilyRayquaza,
    #[serde(rename = "V0385_FAMILY_JIRACHI")]
    V0385FamilyJirachi,
    #[serde(rename = "V0386_FAMILY_DEOXYS")]
    V0386FamilyDeoxys,
    #[serde(rename = "V0387_FAMILY_TURTWIG")]
    V0387FamilyTurtwig,
    #[serde(rename = "V0390_FAMILY_CHIMCHAR")]
    V0390FamilyChimchar,
    #[serde(rename = "V0393_FAMILY_PIPLUP")]
    V0393FamilyPiplup,
    #[serde(rename = "V0396_FAMILY_STARLY")]
    V0396FamilyStarly,
    #[serde(rename = "V0399_FAMILY_BIDOOF")]
    V0399FamilyBidoof,
    #[serde(rename = "V0401_FAMILY_KRICKETOT")]
    V0401FamilyKricketot,
    #[serde(rename = "V0403_FAMILY_SHINX")]
    V0403FamilyShinx,
    #[serde(rename = "V0408_FAMILY_CRANIDOS")]
    V0408FamilyCranidos,
    #[serde(rename = "V0410_FAMILY_SHIELDON")]
    V0410FamilyShieldon,
    #[serde(rename = "V0412_FAMILY_BURMY")]
    V0412FamilyBurmy,
    #[serde(rename = "V0415_FAMILY_COMBEE")]
    V0415FamilyCombee,
    #[serde(rename = "V0417_FAMILY_PACHIRISU")]
    V0417FamilyPachirisu,
    #[serde(rename = "V0418_FAMILY_BUIZEL")]
    V0418FamilyBuizel,
    #[serde(rename = "V0420_FAMILY_CHERUBI")]
    V0420FamilyCherubi,
    #[serde(rename = "V0422_FAMILY_SHELLOS")]
    V0422FamilyShellos,
    #[serde(rename = "V0425_FAMILY_DRIFLOON")]
    V0425FamilyDrifloon,
    #[serde(rename = "V0427_FAMILY_BUNEARY")]
    V0427FamilyBuneary,
    #[serde(rename = "V0431_FAMILY_GLAMEOW")]
    V0431FamilyGlameow,
    #[serde(rename = "V0434_FAMILY_STUNKY")]
    V0434FamilyStunky,
    #[serde(rename = "V0436_FAMILY_BRONZOR")]
    V0436FamilyBronzor,
    #[serde(rename = "V0441_FAMILY_CHATOT")]
    V0441FamilyChatot,
    #[serde(rename = "V0442_FAMILY_SPIRITOMB")]
    V0442FamilySpiritomb,
    #[serde(rename = "V0443_FAMILY_GIBLE")]
    V0443FamilyGible,
    #[serde(rename = "V0448_FAMILY_LUCARIO")]
    V0448FamilyLucario,
    #[serde(rename = "V0449_FAMILY_HIPPOPOTAS")]
    V0449FamilyHippopotas,
    #[serde(rename = "V0451_FAMILY_SKORUPI")]
    V0451FamilySkorupi,
    #[serde(rename = "V0453_FAMILY_CROAGUNK")]
    V0453FamilyCroagunk,
    #[serde(rename = "V0455_FAMILY_CARNIVINE")]
    V0455FamilyCarnivine,
    #[serde(rename = "V0456_FAMILY_FINNEON")]
    V0456FamilyFinneon,
    #[serde(rename = "V0459_FAMILY_SNOVER")]
    V0459FamilySnover,
    #[serde(rename = "V0479_FAMILY_ROTOM")]
    V0479FamilyRotom,
    #[serde(rename = "V0480_FAMILY_UXIE")]
    V0480FamilyUxie,
    #[serde(rename = "V0481_FAMILY_MESPRIT")]
    V0481FamilyMesprit,
    #[serde(rename = "V0482_FAMILY_AZELF")]
    V0482FamilyAzelf,
    #[serde(rename = "V0483_FAMILY_DIALGA")]
    V0483FamilyDialga,
    #[serde(rename = "V0484_FAMILY_PALKIA")]
    V0484FamilyPalkia,
    #[serde(rename = "V0485_FAMILY_HEATRAN")]
    V0485FamilyHeatran,
    #[serde(rename = "V0486_FAMILY_REGIGIGAS")]
    V0486FamilyRegigigas,
    #[serde(rename = "V0487_FAMILY_GIRATINA")]
    V0487FamilyGiratina,
    #[serde(rename = "V0488_FAMILY_CRESSELIA")]
    V0488FamilyCresselia,
    #[serde(rename = "V0489_FAMILY_PHIONE")]
    V0489FamilyPhione,
    #[serde(rename = "V0490_FAMILY_MANAPHY")]
    V0490FamilyManaphy,
    #[serde(rename = "V0491_FAMILY_DARKRAI")]
    V0491FamilyDarkrai,
    #[serde(rename = "V0492_FAMILY_SHAYMIN")]
    V0492FamilyShaymin,
    #[serde(rename = "V0493_FAMILY_ARCEUS")]
    V0493FamilyArceus,
    #[serde(rename = "V0494_FAMILY_VICTINI")]
    V0494FamilyVictini,
    #[serde(rename = "V0495_FAMILY_SNIVY")]
    V0495FamilySnivy,
    #[serde(rename = "V0498_FAMILY_TEPIG")]
    V0498FamilyTepig,
    #[serde(rename = "V0501_FAMILY_OSHAWOTT")]
    V0501FamilyOshawott,
    #[serde(rename = "V0504_FAMILY_PATRAT")]
    V0504FamilyPatrat,
    #[serde(rename = "V0506_FAMILY_LILLIPUP")]
    V0506FamilyLillipup,
    #[serde(rename = "V0509_FAMILY_PURRLOIN")]
    V0509FamilyPurrloin,
    #[serde(rename = "V0511_FAMILY_PANSAGE")]
    V0511FamilyPansage,
    #[serde(rename = "V0513_FAMILY_PANSEAR")]
    V0513FamilyPansear,
    #[serde(rename = "V0515_FAMILY_PANPOUR")]
    V0515FamilyPanpour,
    #[serde(rename = "V0517_FAMILY_MUNNA")]
    V0517FamilyMunna,
    #[serde(rename = "V0519_FAMILY_PIDOVE")]
    V0519FamilyPidove,
    #[serde(rename = "V0522_FAMILY_BLITZLE")]
    V0522FamilyBlitzle,
    #[serde(rename = "V0524_FAMILY_ROGGENROLA")]
    V0524FamilyRoggenrola,
    #[serde(rename = "V0527_FAMILY_WOOBAT")]
    V0527FamilyWoobat,
    #[serde(rename = "V0529_FAMILY_DRILBUR")]
    V0529FamilyDrilbur,
    #[serde(rename = "V0531_FAMILY_AUDINO")]
    V0531FamilyAudino,
    #[serde(rename = "V0532_FAMILY_TIMBURR")]
    V0532FamilyTimburr,
    #[serde(rename = "V0535_FAMILY_TYMPOLE")]
    V0535FamilyTympole,
    #[serde(rename = "V0538_FAMILY_THROH")]
    V0538FamilyThroh,
    #[serde(rename = "V0539_FAMILY_SAWK")]
    V0539FamilySawk,
    #[serde(rename = "V0540_FAMILY_SEWADDLE")]
    V0540FamilySewaddle,
    #[serde(rename = "V0543_FAMILY_VENIPEDE")]
    V0543FamilyVenipede,
    #[serde(rename = "V0546_FAMILY_COTTONEE")]
    V0546FamilyCottonee,
    #[serde(rename = "V0548_FAMILY_PETILIL")]
    V0548FamilyPetilil,
    #[serde(rename = "V0550_FAMILY_BASCULIN")]
    V0550FamilyBasculin,
    #[serde(rename = "V0551_FAMILY_SANDILE")]
    V0551FamilySandile,
    #[serde(rename = "V0554_FAMILY_DARUMAKA")]
    V0554FamilyDarumaka,
    #[serde(rename = "V0556_FAMILY_MARACTUS")]
    V0556FamilyMaractus,
    #[serde(rename = "V0557_FAMILY_DWEBBLE")]
    V0557FamilyDwebble,
    #[serde(rename = "V0559_FAMILY_SCRAGGY")]
    V0559FamilyScraggy,
    #[serde(rename = "V0561_FAMILY_SIGILYPH")]
    V0561FamilySigilyph,
    #[serde(rename = "V0562_FAMILY_YAMASK")]
    V0562FamilyYamask,
    #[serde(rename = "V0564_FAMILY_TIRTOUGA")]
    V0564FamilyTirtouga,
    #[serde(rename = "V0566_FAMILY_ARCHEN")]
    V0566FamilyArchen,
    #[serde(rename = "V0568_FAMILY_TRUBBISH")]
    V0568FamilyTrubbish,
    #[serde(rename = "V0570_FAMILY_ZORUA")]
    V0570FamilyZorua,
    #[serde(rename = "V0572_FAMILY_MINCCINO")]
    V0572FamilyMinccino,
    #[serde(rename = "V0574_FAMILY_GOTHITA")]
    V0574FamilyGothita,
    #[serde(rename = "V0577_FAMILY_SOLOSIS")]
    V0577FamilySolosis,
    #[serde(rename = "V0580_FAMILY_DUCKLETT")]
    V0580FamilyDucklett,
    #[serde(rename = "V0582_FAMILY_VANILLITE")]
    V0582FamilyVanillite,
    #[serde(rename = "V0585_FAMILY_DEERLING")]
    V0585FamilyDeerling,
    #[serde(rename = "V0587_FAMILY_EMOLGA")]
    V0587FamilyEmolga,
    #[serde(rename = "V0588_FAMILY_KARRABLAST")]
    V0588FamilyKarrablast,
    #[serde(rename = "V0590_FAMILY_FOONGUS")]
    V0590FamilyFoongus,
    #[serde(rename = "V0592_FAMILY_FRILLISH")]
    V0592FamilyFrillish,
    #[serde(rename = "V0594_FAMILY_ALOMOMOLA")]
    V0594FamilyAlomomola,
    #[serde(rename = "V0595_FAMILY_JOLTIK")]
    V0595FamilyJoltik,
    #[serde(rename = "V0597_FAMILY_FERROSEED")]
    V0597FamilyFerroseed,
    #[serde(rename = "V0599_FAMILY_KLINK")]
    V0599FamilyKlink,
    #[serde(rename = "V0602_FAMILY_TYNAMO")]
    V0602FamilyTynamo,
    #[serde(rename = "V0605_FAMILY_ELGYEM")]
    V0605FamilyElgyem,
    #[serde(rename = "V0607_FAMILY_LITWICK")]
    V0607FamilyLitwick,
    #[serde(rename = "V0610_FAMILY_AXEW")]
    V0610FamilyAxew,
    #[serde(rename = "V0613_FAMILY_CUBCHOO")]
    V0613FamilyCubchoo,
    #[serde(rename = "V0615_FAMILY_CRYOGONAL")]
    V0615FamilyCryogonal,
    #[serde(rename = "V0616_FAMILY_SHELMET")]
    V0616FamilyShelmet,
    #[serde(rename = "V0618_FAMILY_STUNFISK")]
    V0618FamilyStunfisk,
    #[serde(rename = "V0619_FAMILY_MIENFOO")]
    V0619FamilyMienfoo,
    #[serde(rename = "V0621_FAMILY_DRUDDIGON")]
    V0621FamilyDruddigon,
    #[serde(rename = "V0622_FAMILY_GOLETT")]
    V0622FamilyGolett,
    #[serde(rename = "V0624_FAMILY_PAWNIARD")]
    V0624FamilyPawniard,
    #[serde(rename = "V0626_FAMILY_BOUFFALANT")]
    V0626FamilyBouffalant,
    #[serde(rename = "V0627_FAMILY_RUFFLET")]
    V0627FamilyRufflet,
    #[serde(rename = "V0629_FAMILY_VULLABY")]
    V0629FamilyVullaby,
    #[serde(rename = "V0631_FAMILY_HEATMOR")]
    V0631FamilyHeatmor,
    #[serde(rename = "V0632_FAMILY_DURANT")]
    V0632FamilyDurant,
    #[serde(rename = "V0633_FAMILY_DEINO")]
    V0633FamilyDeino,
    #[serde(rename = "V0636_FAMILY_LARVESTA")]
    V0636FamilyLarvesta,
    #[serde(rename = "V0638_FAMILY_COBALION")]
    V0638FamilyCobalion,
    #[serde(rename = "V0639_FAMILY_TERRAKION")]
    V0639FamilyTerrakion,
    #[serde(rename = "V0640_FAMILY_VIRIZION")]
    V0640FamilyVirizion,
    #[serde(rename = "V0641_FAMILY_TORNADUS")]
    V0641FamilyTornadus,
    #[serde(rename = "V0642_FAMILY_THUNDURUS")]
    V0642FamilyThundurus,
    #[serde(rename = "V0643_FAMILY_RESHIRAM")]
    V0643FamilyReshiram,
    #[serde(rename = "V0644_FAMILY_ZEKROM")]
    V0644FamilyZekrom,
    #[serde(rename = "V0645_FAMILY_LANDORUS")]
    V0645FamilyLandorus,
    #[serde(rename = "V0646_FAMILY_KYUREM")]
    V0646FamilyKyurem,
    #[serde(rename = "V0647_FAMILY_KELDEO")]
    V0647FamilyKeldeo,
    #[serde(rename = "V0648_FAMILY_MELOETTA")]
    V0648FamilyMeloetta,
    #[serde(rename = "V0649_FAMILY_GENESECT")]
    V0649FamilyGenesect,
    #[serde(rename = "V0650_FAMILY_CHESPIN")]
    V0650FamilyChespin,
    #[serde(rename = "V0653_FAMILY_FENNEKIN")]
    V0653FamilyFennekin,
    #[serde(rename = "V0656_FAMILY_FROAKIE")]
    V0656FamilyFroakie,
    #[serde(rename = "V0659_FAMILY_BUNNELBY")]
    V0659FamilyBunnelby,
    #[serde(rename = "V0661_FAMILY_FLETCHLING")]
    V0661FamilyFletchling,
    #[serde(rename = "V0664_FAMILY_SCATTERBUG")]
    V0664FamilyScatterbug,
    #[serde(rename = "V0667_FAMILY_LITLEO")]
    V0667FamilyLitleo,
    #[serde(rename = "V0669_FAMILY_FLABEBE")]
    V0669FamilyFlabebe,
    #[serde(rename = "V0672_FAMILY_SKIDDO")]
    V0672FamilySkiddo,
    #[serde(rename = "V0674_FAMILY_PANCHAM")]
    V0674FamilyPancham,
    #[serde(rename = "V0676_FAMILY_FURFROU")]
    V0676FamilyFurfrou,
    #[serde(rename = "V0677_FAMILY_ESPURR")]
    V0677FamilyEspurr,
    #[serde(rename = "V0679_FAMILY_HONEDGE")]
    V0679FamilyHonedge,
    #[serde(rename = "V0682_FAMILY_SPRITZEE")]
    V0682FamilySpritzee,
    #[serde(rename = "V0684_FAMILY_SWIRLIX")]
    V0684FamilySwirlix,
    #[serde(rename = "V0686_FAMILY_INKAY")]
    V0686FamilyInkay,
    #[serde(rename = "V0688_FAMILY_BINACLE")]
    V0688FamilyBinacle,
    #[serde(rename = "V0690_FAMILY_SKRELP")]
    V0690FamilySkrelp,
    #[serde(rename = "V0692_FAMILY_CLAUNCHER")]
    V0692FamilyClauncher,
    #[serde(rename = "V0694_FAMILY_HELIOPTILE")]
    V0694FamilyHelioptile,
    #[serde(rename = "V0696_FAMILY_TYRUNT")]
    V0696FamilyTyrunt,
    #[serde(rename = "V0698_FAMILY_AMAURA")]
    V0698FamilyAmaura,
    #[serde(rename = "V0701_FAMILY_HAWLUCHA")]
    V0701FamilyHawlucha,
    #[serde(rename = "V0702_FAMILY_DEDENNE")]
    V0702FamilyDedenne,
    #[serde(rename = "V0703_FAMILY_CARBINK")]
    V0703FamilyCarbink,
    #[serde(rename = "V0704_FAMILY_GOOMY")]
    V0704FamilyGoomy,
    #[serde(rename = "V0707_FAMILY_KLEFKI")]
    V0707FamilyKlefki,
    #[serde(rename = "V0708_FAMILY_PHANTUMP")]
    V0708FamilyPhantump,
    #[serde(rename = "V0710_FAMILY_PUMPKABOO")]
    V0710FamilyPumpkaboo,
    #[serde(rename = "V0712_FAMILY_BERGMITE")]
    V0712FamilyBergmite,
    #[serde(rename = "V0714_FAMILY_NOIBAT")]
    V0714FamilyNoibat,
    #[serde(rename = "V0716_FAMILY_XERNEAS")]
    V0716FamilyXerneas,
    #[serde(rename = "V0717_FAMILY_YVELTAL")]
    V0717FamilyYveltal,
    #[serde(rename = "V0718_FAMILY_ZYGARDE")]
    V0718FamilyZygarde,
    #[serde(rename = "V0719_FAMILY_DIANCIE")]
    V0719FamilyDiancie,
    #[serde(rename = "V0720_FAMILY_HOOPA")]
    V0720FamilyHoopa,
    #[serde(rename = "V0721_FAMILY_VOLCANION")]
    V0721FamilyVolcanion,
    #[serde(rename = "V0722_FAMILY_ROWLET")]
    V0722FamilyRowlet,
    #[serde(rename = "V0725_FAMILY_LITTEN")]
    V0725FamilyLitten,
    #[serde(rename = "V0728_FAMILY_POPPLIO")]
    V0728FamilyPopplio,
    #[serde(rename = "V0731_FAMILY_PIKIPEK")]
    V0731FamilyPikipek,
    #[serde(rename = "V0734_FAMILY_YUNGOOS")]
    V0734FamilyYungoos,
    #[serde(rename = "V0736_FAMILY_GRUBBIN")]
    V0736FamilyGrubbin,
    #[serde(rename = "V0739_FAMILY_CRABRAWLER")]
    V0739FamilyCrabrawler,
    #[serde(rename = "V0741_FAMILY_ORICORIO")]
    V0741FamilyOricorio,
    #[serde(rename = "V0742_FAMILY_CUTIEFLY")]
    V0742FamilyCutiefly,
    #[serde(rename = "V0744_FAMILY_ROCKRUFF")]
    V0744FamilyRockruff,
    #[serde(rename = "V0746_FAMILY_WISHIWASHI")]
    V0746FamilyWishiwashi,
    #[serde(rename = "V0747_FAMILY_MAREANIE")]
    V0747FamilyMareanie,
    #[serde(rename = "V0749_FAMILY_MUDBRAY")]
    V0749FamilyMudbray,
    #[serde(rename = "V0751_FAMILY_DEWPIDER")]
    V0751FamilyDewpider,
    #[serde(rename = "V0753_FAMILY_FOMANTIS")]
    V0753FamilyFomantis,
    #[serde(rename = "V0755_FAMILY_MORELULL")]
    V0755FamilyMorelull,
    #[serde(rename = "V0757_FAMILY_SALANDIT")]
    V0757FamilySalandit,
    #[serde(rename = "V0759_FAMILY_STUFFUL")]
    V0759FamilyStufful,
    #[serde(rename = "V0761_FAMILY_BOUNSWEET")]
    V0761FamilyBounsweet,
    #[serde(rename = "V0764_FAMILY_COMFEY")]
    V0764FamilyComfey,
    #[serde(rename = "V0765_FAMILY_ORANGURU")]
    V0765FamilyOranguru,
    #[serde(rename = "V0766_FAMILY_PASSIMIAN")]
    V0766FamilyPassimian,
    #[serde(rename = "V0767_FAMILY_WIMPOD")]
    V0767FamilyWimpod,
    #[serde(rename = "V0769_FAMILY_SANDYGAST")]
    V0769FamilySandygast,
    #[serde(rename = "V0771_FAMILY_PYUKUMUKU")]
    V0771FamilyPyukumuku,
    #[serde(rename = "V0772_FAMILY_TYPE_NULL")]
    V0772FamilyTypeNull,
    #[serde(rename = "V0774_FAMILY_MINIOR")]
    V0774FamilyMinior,
    #[serde(rename = "V0775_FAMILY_KOMALA")]
    V0775FamilyKomala,
    #[serde(rename = "V0776_FAMILY_TURTONATOR")]
    V0776FamilyTurtonator,
    #[serde(rename = "V0777_FAMILY_TOGEDEMARU")]
    V0777FamilyTogedemaru,
    #[serde(rename = "V0778_FAMILY_MIMIKYU")]
    V0778FamilyMimikyu,
    #[serde(rename = "V0779_FAMILY_BRUXISH")]
    V0779FamilyBruxish,
    #[serde(rename = "V0780_FAMILY_DRAMPA")]
    V0780FamilyDrampa,
    #[serde(rename = "V0781_FAMILY_DHELMISE")]
    V0781FamilyDhelmise,
    #[serde(rename = "V0782_FAMILY_JANGMO_O")]
    V0782FamilyJangmoO,
    #[serde(rename = "V0785_FAMILY_TAPU_KOKO")]
    V0785FamilyTapuKoko,
    #[serde(rename = "V0786_FAMILY_TAPU_LELE")]
    V0786FamilyTapuLele,
    #[serde(rename = "V0787_FAMILY_TAPU_BULU")]
    V0787FamilyTapuBulu,
    #[serde(rename = "V0788_FAMILY_TAPU_FINI")]
    V0788FamilyTapuFini,
    #[serde(rename = "V0789_FAMILY_COSMOG")]
    V0789FamilyCosmog,
    #[serde(rename = "V0793_FAMILY_NIHILEGO")]
    V0793FamilyNihilego,
    #[serde(rename = "V0794_FAMILY_BUZZWOLE")]
    V0794FamilyBuzzwole,
    #[serde(rename = "V0795_FAMILY_PHEROMOSA")]
    V0795FamilyPheromosa,
    #[serde(rename = "V0796_FAMILY_XURKITREE")]
    V0796FamilyXurkitree,
    #[serde(rename = "V0797_FAMILY_CELESTEELA")]
    V0797FamilyCelesteela,
    #[serde(rename = "V0798_FAMILY_KARTANA")]
    V0798FamilyKartana,
    #[serde(rename = "V0799_FAMILY_GUZZLORD")]
    V0799FamilyGuzzlord,
    #[serde(rename = "V0800_FAMILY_NECROZMA")]
    V0800FamilyNecrozma,
    #[serde(rename = "V0801_FAMILY_MAGEARNA")]
    V0801FamilyMagearna,
    #[serde(rename = "V0802_FAMILY_MARSHADOW")]
    V0802FamilyMarshadow,
    #[serde(rename = "V0803_FAMILY_POIPOLE")]
    V0803FamilyPoipole,
    #[serde(rename = "V0805_FAMILY_STAKATAKA")]
    V0805FamilyStakataka,
    #[serde(rename = "V0806_FAMILY_BLACEPHALON")]
    V0806FamilyBlacephalon,
    #[serde(rename = "V0807_FAMILY_ZERAORA")]
    V0807FamilyZeraora,
    #[serde(rename = "V0808_FAMILY_MELTAN")]
    V0808FamilyMeltan,
    #[serde(rename = "V0810_FAMILY_GROOKEY")]
    V0810FamilyGrookey,
    #[serde(rename = "V0813_FAMILY_SCORBUNNY")]
    V0813FamilyScorbunny,
    #[serde(rename = "V0816_FAMILY_SOBBLE")]
    V0816FamilySobble,
    #[serde(rename = "V0819_FAMILY_SKWOVET")]
    V0819FamilySkwovet,
    #[serde(rename = "V0821_FAMILY_ROOKIDEE")]
    V0821FamilyRookidee,
    #[serde(rename = "V0824_FAMILY_BLIPBUG")]
    V0824FamilyBlipbug,
    #[serde(rename = "V0827_FAMILY_NICKIT")]
    V0827FamilyNickit,
    #[serde(rename = "V0829_FAMILY_GOSSIFLEUR")]
    V0829FamilyGossifleur,
    #[serde(rename = "V0831_FAMILY_WOOLOO")]
    V0831FamilyWooloo,
    #[serde(rename = "V0833_FAMILY_CHEWTLE")]
    V0833FamilyChewtle,
    #[serde(rename = "V0835_FAMILY_YAMPER")]
    V0835FamilyYamper,
    #[serde(rename = "V0837_FAMILY_ROLYCOLY")]
    V0837FamilyRolycoly,
    #[serde(rename = "V0840_FAMILY_APPLIN")]
    V0840FamilyApplin,
    #[serde(rename = "V0843_FAMILY_SILICOBRA")]
    V0843FamilySilicobra,
    #[serde(rename = "V0845_FAMILY_CRAMORANT")]
    V0845FamilyCramorant,
    #[serde(rename = "V0846_FAMILY_ARROKUDA")]
    V0846FamilyArrokuda,
    #[serde(rename = "V0848_FAMILY_TOXEL")]
    V0848FamilyToxel,
    #[serde(rename = "V0850_FAMILY_SIZZLIPEDE")]
    V0850FamilySizzlipede,
    #[serde(rename = "V0852_FAMILY_CLOBBOPUS")]
    V0852FamilyClobbopus,
    #[serde(rename = "V0854_FAMILY_SINISTEA")]
    V0854FamilySinistea,
    #[serde(rename = "V0856_FAMILY_HATENNA")]
    V0856FamilyHatenna,
    #[serde(rename = "V0859_FAMILY_IMPIDIMP")]
    V0859FamilyImpidimp,
    #[serde(rename = "V0868_FAMILY_MILCERY")]
    V0868FamilyMilcery,
    #[serde(rename = "V0870_FAMILY_FALINKS")]
    V0870FamilyFalinks,
    #[serde(rename = "V0871_FAMILY_PINCURCHIN")]
    V0871FamilyPincurchin,
    #[serde(rename = "V0872_FAMILY_SNOM")]
    V0872FamilySnom,
    #[serde(rename = "V0874_FAMILY_STONJOURNER")]
    V0874FamilyStonjourner,
    #[serde(rename = "V0875_FAMILY_EISCUE")]
    V0875FamilyEiscue,
    #[serde(rename = "V0876_FAMILY_INDEEDEE")]
    V0876FamilyIndeedee,
    #[serde(rename = "V0877_FAMILY_MORPEKO")]
    V0877FamilyMorpeko,
    #[serde(rename = "V0878_FAMILY_CUFANT")]
    V0878FamilyCufant,
    #[serde(rename = "V0880_FAMILY_DRACOZOLT")]
    V0880FamilyDracozolt,
    #[serde(rename = "V0881_FAMILY_ARCTOZOLT")]
    V0881FamilyArctozolt,
    #[serde(rename = "V0882_FAMILY_DRACOVISH")]
    V0882FamilyDracovish,
    #[serde(rename = "V0883_FAMILY_ARCTOVISH")]
    V0883FamilyArctovish,
    #[serde(rename = "V0884_FAMILY_DURALUDON")]
    V0884FamilyDuraludon,
    #[serde(rename = "V0885_FAMILY_DREEPY")]
    V0885FamilyDreepy,
    #[serde(rename = "V0888_FAMILY_ZACIAN")]
    V0888FamilyZacian,
    #[serde(rename = "V0889_FAMILY_ZAMAZENTA")]
    V0889FamilyZamazenta,
    #[serde(rename = "V0890_FAMILY_ETERNATUS")]
    V0890FamilyEternatus,
    #[serde(rename = "V0891_FAMILY_KUBFU")]
    V0891FamilyKubfu,
    #[serde(rename = "V0893_FAMILY_ZARUDE")]
    V0893FamilyZarude,
    #[serde(rename = "V0894_FAMILY_REGIELEKI")]
    V0894FamilyRegieleki,
    #[serde(rename = "V0895_FAMILY_REGIDRAGO")]
    V0895FamilyRegidrago,
    #[serde(rename = "V0896_FAMILY_GLASTRIER")]
    V0896FamilyGlastrier,
    #[serde(rename = "V0897_FAMILY_SPECTRIER")]
    V0897FamilySpectrier,
    #[serde(rename = "V0898_FAMILY_CALYREX")]
    V0898FamilyCalyrex,
    #[serde(rename = "V0905_FAMILY_ENAMORUS")]
    V0905FamilyEnamorus,
    #[serde(rename = "V0906_FAMILY_SPRIGATITO")]
    V0906FamilySprigatito,
    #[serde(rename = "V0909_FAMILY_FUECOCO")]
    V0909FamilyFuecoco,
    #[serde(rename = "V0912_FAMILY_QUAXLY")]
    V0912FamilyQuaxly,
    #[serde(rename = "V0915_FAMILY_LECHONK")]
    V0915FamilyLechonk,
    #[serde(rename = "V0917_FAMILY_TAROUNTULA")]
    V0917FamilyTarountula,
    #[serde(rename = "V0919_FAMILY_NYMBLE")]
    V0919FamilyNymble,
    #[serde(rename = "V0921_FAMILY_PAWMI")]
    V0921FamilyPawmi,
    #[serde(rename = "V0924_FAMILY_TANDEMAUS")]
    V0924FamilyTandemaus,
    #[serde(rename = "V0926_FAMILY_FIDOUGH")]
    V0926FamilyFidough,
    #[serde(rename = "V0928_FAMILY_SMOLIV")]
    V0928FamilySmoliv,
    #[serde(rename = "V0931_FAMILY_SQUAWKABILLY")]
    V0931FamilySquawkabilly,
    #[serde(rename = "V0932_FAMILY_NACLI")]
    V0932FamilyNacli,
    #[serde(rename = "V0935_FAMILY_CHARCADET")]
    V0935FamilyCharcadet,
    #[serde(rename = "V0938_FAMILY_TADBULB")]
    V0938FamilyTadbulb,
    #[serde(rename = "V0940_FAMILY_WATTREL")]
    V0940FamilyWattrel,
    #[serde(rename = "V0942_FAMILY_MASCHIFF")]
    V0942FamilyMaschiff,
    #[serde(rename = "V0944_FAMILY_SHROODLE")]
    V0944FamilyShroodle,
    #[serde(rename = "V0946_FAMILY_BRAMBLIN")]
    V0946FamilyBramblin,
    #[serde(rename = "V0948_FAMILY_TOEDSCOOL")]
    V0948FamilyToedscool,
    #[serde(rename = "V0950_FAMILY_KLAWF")]
    V0950FamilyKlawf,
    #[serde(rename = "V0951_FAMILY_CAPSAKID")]
    V0951FamilyCapsakid,
    #[serde(rename = "V0953_FAMILY_RELLOR")]
    V0953FamilyRellor,
    #[serde(rename = "V0955_FAMILY_FLITTLE")]
    V0955FamilyFlittle,
    #[serde(rename = "V0957_FAMILY_TINKATINK")]
    V0957FamilyTinkatink,
    #[serde(rename = "V0960_FAMILY_WIGLETT")]
    V0960FamilyWiglett,
    #[serde(rename = "V0962_FAMILY_BOMBIRDIER")]
    V0962FamilyBombirdier,
    #[serde(rename = "V0963_FAMILY_FINIZEN")]
    V0963FamilyFinizen,
    #[serde(rename = "V0965_FAMILY_VAROOM")]
    V0965FamilyVaroom,
    #[serde(rename = "V0967_FAMILY_CYCLIZAR")]
    V0967FamilyCyclizar,
    #[serde(rename = "V0968_FAMILY_ORTHWORM")]
    V0968FamilyOrthworm,
    #[serde(rename = "V0969_FAMILY_GLIMMET")]
    V0969FamilyGlimmet,
    #[serde(rename = "V0971_FAMILY_GREAVARD")]
    V0971FamilyGreavard,
    #[serde(rename = "V0973_FAMILY_FLAMIGO")]
    V0973FamilyFlamigo,
    #[serde(rename = "V0974_FAMILY_CETODDLE")]
    V0974FamilyCetoddle,
    #[serde(rename = "V0976_FAMILY_VELUZA")]
    V0976FamilyVeluza,
    #[serde(rename = "V0977_FAMILY_DONDOZO")]
    V0977FamilyDondozo,
    #[serde(rename = "V0978_FAMILY_TATSUGIRI")]
    V0978FamilyTatsugiri,
    #[serde(rename = "V0984_FAMILY_GREATTUSK")]
    V0984FamilyGreattusk,
    #[serde(rename = "V0985_FAMILY_SCREAMTAIL")]
    V0985FamilyScreamtail,
    #[serde(rename = "V0986_FAMILY_BRUTEBONNET")]
    V0986FamilyBrutebonnet,
    #[serde(rename = "V0987_FAMILY_FLUTTERMANE")]
    V0987FamilyFluttermane,
    #[serde(rename = "V0988_FAMILY_SLITHERWING")]
    V0988FamilySlitherwing,
    #[serde(rename = "V0989_FAMILY_SANDYSHOCKS")]
    V0989FamilySandyshocks,
    #[serde(rename = "V0990_FAMILY_IRONTREADS")]
    V0990FamilyIrontreads,
    #[serde(rename = "V0991_FAMILY_IRONBUNDLE")]
    V0991FamilyIronbundle,
    #[serde(rename = "V0992_FAMILY_IRONHANDS")]
    V0992FamilyIronhands,
    #[serde(rename = "V0993_FAMILY_IRONJUGULIS")]
    V0993FamilyIronjugulis,
    #[serde(rename = "V0994_FAMILY_IRONMOTH")]
    V0994FamilyIronmoth,
    #[serde(rename = "V0995_FAMILY_IRONTHORNS")]
    V0995FamilyIronthorns,
    #[serde(rename = "V0996_FAMILY_FRIGIBAX")]
    V0996FamilyFrigibax,
    #[serde(rename = "V0999_FAMILY_GIMMIGHOUL")]
    V0999FamilyGimmighoul,
    #[serde(rename = "V1001_FAMILY_WOCHIEN")]
    V1001FamilyWochien,
    #[serde(rename = "V1002_FAMILY_CHIENPAO")]
    V1002FamilyChienpao,
    #[serde(rename = "V1003_FAMILY_TINGLU")]
    V1003FamilyTinglu,
    #[serde(rename = "V1004_FAMILY_CHIYU")]
    V1004FamilyChiyu,
    #[serde(rename = "V1005_FAMILY_ROARINGMOON")]
    V1005FamilyRoaringmoon,
    #[serde(rename = "V1006_FAMILY_IRONVALIANT")]
    V1006FamilyIronvaliant,
    #[serde(rename = "V1007_FAMILY_KORAIDON")]
    V1007FamilyKoraidon,
    #[serde(rename = "V1008_FAMILY_MIRAIDON")]
    V1008FamilyMiraidon,
    #[serde(rename = "V1009_FAMILY_WALKINGWAKE")]
    V1009FamilyWalkingwake,
    #[serde(rename = "V1010_FAMILY_IRONLEAVES")]
    V1010FamilyIronleaves,
    #[serde(rename = "V1012_FAMILY_POLTCHAGEIST")]
    V1012FamilyPoltchageist,
    #[serde(rename = "V1014_FAMILY_OKIDOGI")]
    V1014FamilyOkidogi,
    #[serde(rename = "V1015_FAMILY_MUNKIDORI")]
    V1015FamilyMunkidori,
    #[serde(rename = "V1016_FAMILY_FEZANDIPITI")]
    V1016FamilyFezandipiti,
    #[serde(rename = "V1017_FAMILY_OGERPON")]
    V1017FamilyOgerpon,
    #[serde(rename = "V1020_FAMILY_GOUGINGFIRE")]
    V1020FamilyGougingfire,
    #[serde(rename = "V1021_FAMILY_RAGINGBOLT")]
    V1021FamilyRagingbolt,
    #[serde(rename = "V1022_FAMILY_IRONBOULDER")]
    V1022FamilyIronboulder,
    #[serde(rename = "V1023_FAMILY_IRONCROWN")]
    V1023FamilyIroncrown,
    #[serde(rename = "V1024_FAMILY_TERAPAGOS")]
    V1024FamilyTerapagos,
    #[serde(rename = "V1025_FAMILY_PECHARUNT")]
    V1025FamilyPecharunt,
}

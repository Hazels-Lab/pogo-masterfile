//! Generated from Pokémon GO masterfile — group "evolutionChainDisplaySettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum EvolutionChainDisplaySettingsTemplateId {
    #[serde(rename = "EVOLUTION_V0052_POKEMON_MEOWTH")]
    EvolutionV0052PokemonMeowth,
    #[serde(rename = "EVOLUTION_V0083_POKEMON_FARFETCHD")]
    EvolutionV0083PokemonFarfetchd,
    #[serde(rename = "EVOLUTION_V0122_POKEMON_MR_MIME")]
    EvolutionV0122PokemonMrMime,
    #[serde(rename = "EVOLUTION_V0123_POKEMON_SCYTHER")]
    EvolutionV0123PokemonScyther,
    #[serde(rename = "EVOLUTION_V0150_POKEMON_MEWTWO")]
    EvolutionV0150PokemonMewtwo,
    #[serde(rename = "EVOLUTION_V0155_POKEMON_CYNDAQUIL")]
    EvolutionV0155PokemonCyndaquil,
    #[serde(rename = "EVOLUTION_V0156_POKEMON_QUILAVA")]
    EvolutionV0156PokemonQuilava,
    #[serde(rename = "EVOLUTION_V0157_POKEMON_TYPHLOSION")]
    EvolutionV0157PokemonTyphlosion,
    #[serde(rename = "EVOLUTION_V0194_POKEMON_WOOPER")]
    EvolutionV0194PokemonWooper,
    #[serde(rename = "EVOLUTION_V0211_POKEMON_QWILFISH")]
    EvolutionV0211PokemonQwilfish,
    #[serde(rename = "EVOLUTION_V0215_POKEMON_SNEASEL")]
    EvolutionV0215PokemonSneasel,
    #[serde(rename = "EVOLUTION_V0222_POKEMON_CORSOLA")]
    EvolutionV0222PokemonCorsola,
    #[serde(rename = "EVOLUTION_V0234_POKEMON_STANTLER")]
    EvolutionV0234PokemonStantler,
    #[serde(rename = "EVOLUTION_V0263_POKEMON_ZIGZAGOON")]
    EvolutionV0263PokemonZigzagoon,
    #[serde(rename = "EVOLUTION_V0264_POKEMON_LINOONE")]
    EvolutionV0264PokemonLinoone,
    #[serde(rename = "EVOLUTION_V0290_POKEMON_NINCADA")]
    EvolutionV0290PokemonNincada,
    #[serde(rename = "EVOLUTION_V0412_POKEMON_BURMY")]
    EvolutionV0412PokemonBurmy,
    #[serde(rename = "EVOLUTION_V0413_POKEMON_WORMADAM")]
    EvolutionV0413PokemonWormadam,
    #[serde(rename = "EVOLUTION_V0414_POKEMON_MOTHIM")]
    EvolutionV0414PokemonMothim,
    #[serde(rename = "EVOLUTION_V0420_POKEMON_CHERUBI")]
    EvolutionV0420PokemonCherubi,
    #[serde(rename = "EVOLUTION_V0421_POKEMON_CHERRIM")]
    EvolutionV0421PokemonCherrim,
    #[serde(rename = "EVOLUTION_V0422_POKEMON_SHELLOS")]
    EvolutionV0422PokemonShellos,
    #[serde(rename = "EVOLUTION_V0423_POKEMON_GASTRODON")]
    EvolutionV0423PokemonGastrodon,
    #[serde(rename = "EVOLUTION_V0449_POKEMON_HIPPOPOTAS")]
    EvolutionV0449PokemonHippopotas,
    #[serde(rename = "EVOLUTION_V0450_POKEMON_HIPPOWDON")]
    EvolutionV0450PokemonHippowdon,
    #[serde(rename = "EVOLUTION_V0501_POKEMON_OSHAWOTT")]
    EvolutionV0501PokemonOshawott,
    #[serde(rename = "EVOLUTION_V0502_POKEMON_DEWOTT")]
    EvolutionV0502PokemonDewott,
    #[serde(rename = "EVOLUTION_V0503_POKEMON_SAMUROTT")]
    EvolutionV0503PokemonSamurott,
    #[serde(rename = "EVOLUTION_V0519_POKEMON_PIDOVE")]
    EvolutionV0519PokemonPidove,
    #[serde(rename = "EVOLUTION_V0520_POKEMON_TRANQUILL")]
    EvolutionV0520PokemonTranquill,
    #[serde(rename = "EVOLUTION_V0521_POKEMON_UNFEZANT")]
    EvolutionV0521PokemonUnfezant,
    #[serde(rename = "EVOLUTION_V0550_POKEMON_BASCULIN")]
    EvolutionV0550PokemonBasculin,
    #[serde(rename = "EVOLUTION_V0554_POKEMON_DARUMAKA")]
    EvolutionV0554PokemonDarumaka,
    #[serde(rename = "EVOLUTION_V0562_POKEMON_YAMASK")]
    EvolutionV0562PokemonYamask,
    #[serde(rename = "EVOLUTION_V0585_POKEMON_DEERLING")]
    EvolutionV0585PokemonDeerling,
    #[serde(rename = "EVOLUTION_V0586_POKEMON_SAWSBUCK")]
    EvolutionV0586PokemonSawsbuck,
    #[serde(rename = "EVOLUTION_V0592_POKEMON_FRILLISH")]
    EvolutionV0592PokemonFrillish,
    #[serde(rename = "EVOLUTION_V0593_POKEMON_JELLICENT")]
    EvolutionV0593PokemonJellicent,
    #[serde(rename = "EVOLUTION_V0664_POKEMON_SCATTERBUG")]
    EvolutionV0664PokemonScatterbug,
    #[serde(rename = "EVOLUTION_V0665_POKEMON_SPEWPA")]
    EvolutionV0665PokemonSpewpa,
    #[serde(rename = "EVOLUTION_V0666_POKEMON_VIVILLON")]
    EvolutionV0666PokemonVivillon,
    #[serde(rename = "EVOLUTION_V0667_POKEMON_LITLEO")]
    EvolutionV0667PokemonLitleo,
    #[serde(rename = "EVOLUTION_V0668_POKEMON_PYROAR")]
    EvolutionV0668PokemonPyroar,
    #[serde(rename = "EVOLUTION_V0669_POKEMON_FLABEBE")]
    EvolutionV0669PokemonFlabebe,
    #[serde(rename = "EVOLUTION_V0670_POKEMON_FLOETTE")]
    EvolutionV0670PokemonFloette,
    #[serde(rename = "EVOLUTION_V0671_POKEMON_FLORGES")]
    EvolutionV0671PokemonFlorges,
    #[serde(rename = "EVOLUTION_V0677_POKEMON_ESPURR")]
    EvolutionV0677PokemonEspurr,
    #[serde(rename = "EVOLUTION_V0678_POKEMON_MEOWSTIC")]
    EvolutionV0678PokemonMeowstic,
    #[serde(rename = "EVOLUTION_V0679_POKEMON_HONEDGE")]
    EvolutionV0679PokemonHonedge,
    #[serde(rename = "EVOLUTION_V0680_POKEMON_DOUBLADE")]
    EvolutionV0680PokemonDoublade,
    #[serde(rename = "EVOLUTION_V0681_POKEMON_AEGISLASH")]
    EvolutionV0681PokemonAegislash,
    #[serde(rename = "EVOLUTION_V0710_POKEMON_PUMPKABOO")]
    EvolutionV0710PokemonPumpkaboo,
    #[serde(rename = "EVOLUTION_V0711_POKEMON_GOURGEIST")]
    EvolutionV0711PokemonGourgeist,
    #[serde(rename = "EVOLUTION_V0718_POKEMON_ZYGARDE")]
    EvolutionV0718PokemonZygarde,
    #[serde(rename = "EVOLUTION_V0722_POKEMON_ROWLET")]
    EvolutionV0722PokemonRowlet,
    #[serde(rename = "EVOLUTION_V0723_POKEMON_DARTRIX")]
    EvolutionV0723PokemonDartrix,
    #[serde(rename = "EVOLUTION_V0724_POKEMON_DECIDUEYE")]
    EvolutionV0724PokemonDecidueye,
    #[serde(rename = "EVOLUTION_V0744_POKEMON_ROCKRUFF")]
    EvolutionV0744PokemonRockruff,
    #[serde(rename = "EVOLUTION_V0745_POKEMON_LYCANROC")]
    EvolutionV0745PokemonLycanroc,
    #[serde(rename = "EVOLUTION_V0800_POKEMON_NECROZMA")]
    EvolutionV0800PokemonNecrozma,
    #[serde(rename = "EVOLUTION_V0848_POKEMON_TOXEL")]
    EvolutionV0848PokemonToxel,
    #[serde(rename = "EVOLUTION_V0849_POKEMON_TOXTRICITY")]
    EvolutionV0849PokemonToxtricity,
    #[serde(rename = "EVOLUTION_V0862_POKEMON_OBSTAGOON")]
    EvolutionV0862PokemonObstagoon,
    #[serde(rename = "EVOLUTION_V0863_POKEMON_PERRSERKER")]
    EvolutionV0863PokemonPerrserker,
    #[serde(rename = "EVOLUTION_V0864_POKEMON_CURSOLA")]
    EvolutionV0864PokemonCursola,
    #[serde(rename = "EVOLUTION_V0865_POKEMON_SIRFETCHD")]
    EvolutionV0865PokemonSirfetchd,
    #[serde(rename = "EVOLUTION_V0866_POKEMON_MR_RIME")]
    EvolutionV0866PokemonMrRime,
    #[serde(rename = "EVOLUTION_V0867_POKEMON_RUNERIGUS")]
    EvolutionV0867PokemonRunerigus,
    #[serde(rename = "EVOLUTION_V0899_POKEMON_WYRDEER")]
    EvolutionV0899PokemonWyrdeer,
    #[serde(rename = "EVOLUTION_V0900_POKEMON_KLEAVOR")]
    EvolutionV0900PokemonKleavor,
    #[serde(rename = "EVOLUTION_V0903_POKEMON_SNEASLER")]
    EvolutionV0903PokemonSneasler,
    #[serde(rename = "EVOLUTION_V0904_POKEMON_OVERQWIL")]
    EvolutionV0904PokemonOverqwil,
    #[serde(rename = "EVOLUTION_V0915_POKEMON_LECHONK")]
    EvolutionV0915PokemonLechonk,
    #[serde(rename = "EVOLUTION_V0916_POKEMON_OINKOLOGNE")]
    EvolutionV0916PokemonOinkologne,
    #[serde(rename = "EVOLUTION_V0924_POKEMON_TANDEMAUS")]
    EvolutionV0924PokemonTandemaus,
    #[serde(rename = "EVOLUTION_V0925_POKEMON_MAUSHOLD")]
    EvolutionV0925PokemonMaushold,
    #[serde(rename = "EVOLUTION_V0980_POKEMON_CLODSIRE")]
    EvolutionV0980PokemonClodsire,
    #[serde(rename = "EVOLUTION_V1012_POKEMON_POLTCHAGEIST")]
    EvolutionV1012PokemonPoltchageist,
    #[serde(rename = "EVOLUTION_V1013_POKEMON_SINISTCHA")]
    EvolutionV1013PokemonSinistcha,
}

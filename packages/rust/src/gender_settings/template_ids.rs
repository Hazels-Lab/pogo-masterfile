//! Generated from Pokémon GO masterfile — group "genderSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum GenderSettingsTemplateId {
    #[serde(rename = "SPAWN_V0001_POKEMON_BULBASAUR")]
    SpawnV0001PokemonBulbasaur,
    #[serde(rename = "SPAWN_V0001_POKEMON_BULBASAUR_FALL_2019")]
    SpawnV0001PokemonBulbasaurFall2019,
    #[serde(rename = "SPAWN_V0001_POKEMON_BULBASAUR_NORMAL")]
    SpawnV0001PokemonBulbasaurNormal,
    #[serde(rename = "SPAWN_V0002_POKEMON_IVYSAUR")]
    SpawnV0002PokemonIvysaur,
    #[serde(rename = "SPAWN_V0002_POKEMON_IVYSAUR_NORMAL")]
    SpawnV0002PokemonIvysaurNormal,
    #[serde(rename = "SPAWN_V0003_POKEMON_VENUSAUR")]
    SpawnV0003PokemonVenusaur,
    #[serde(rename = "SPAWN_V0003_POKEMON_VENUSAUR_COPY_2019")]
    SpawnV0003PokemonVenusaurCopy2019,
    #[serde(rename = "SPAWN_V0003_POKEMON_VENUSAUR_NORMAL")]
    SpawnV0003PokemonVenusaurNormal,
    #[serde(rename = "SPAWN_V0004_POKEMON_CHARMANDER")]
    SpawnV0004PokemonCharmander,
    #[serde(rename = "SPAWN_V0004_POKEMON_CHARMANDER_FALL_2019")]
    SpawnV0004PokemonCharmanderFall2019,
    #[serde(rename = "SPAWN_V0004_POKEMON_CHARMANDER_NORMAL")]
    SpawnV0004PokemonCharmanderNormal,
    #[serde(rename = "SPAWN_V0005_POKEMON_CHARMELEON")]
    SpawnV0005PokemonCharmeleon,
    #[serde(rename = "SPAWN_V0005_POKEMON_CHARMELEON_NORMAL")]
    SpawnV0005PokemonCharmeleonNormal,
    #[serde(rename = "SPAWN_V0006_POKEMON_CHARIZARD")]
    SpawnV0006PokemonCharizard,
    #[serde(rename = "SPAWN_V0006_POKEMON_CHARIZARD_COPY_2019")]
    SpawnV0006PokemonCharizardCopy2019,
    #[serde(rename = "SPAWN_V0006_POKEMON_CHARIZARD_NORMAL")]
    SpawnV0006PokemonCharizardNormal,
    #[serde(rename = "SPAWN_V0007_POKEMON_SQUIRTLE")]
    SpawnV0007PokemonSquirtle,
    #[serde(rename = "SPAWN_V0007_POKEMON_SQUIRTLE_FALL_2019")]
    SpawnV0007PokemonSquirtleFall2019,
    #[serde(rename = "SPAWN_V0007_POKEMON_SQUIRTLE_NORMAL")]
    SpawnV0007PokemonSquirtleNormal,
    #[serde(rename = "SPAWN_V0008_POKEMON_WARTORTLE")]
    SpawnV0008PokemonWartortle,
    #[serde(rename = "SPAWN_V0008_POKEMON_WARTORTLE_NORMAL")]
    SpawnV0008PokemonWartortleNormal,
    #[serde(rename = "SPAWN_V0009_POKEMON_BLASTOISE")]
    SpawnV0009PokemonBlastoise,
    #[serde(rename = "SPAWN_V0009_POKEMON_BLASTOISE_COPY_2019")]
    SpawnV0009PokemonBlastoiseCopy2019,
    #[serde(rename = "SPAWN_V0009_POKEMON_BLASTOISE_NORMAL")]
    SpawnV0009PokemonBlastoiseNormal,
    #[serde(rename = "SPAWN_V0010_POKEMON_CATERPIE")]
    SpawnV0010PokemonCaterpie,
    #[serde(rename = "SPAWN_V0010_POKEMON_CATERPIE_GOFEST_2026")]
    SpawnV0010PokemonCaterpieGofest2026,
    #[serde(rename = "SPAWN_V0010_POKEMON_CATERPIE_NORMAL")]
    SpawnV0010PokemonCaterpieNormal,
    #[serde(rename = "SPAWN_V0011_POKEMON_METAPOD")]
    SpawnV0011PokemonMetapod,
    #[serde(rename = "SPAWN_V0011_POKEMON_METAPOD_NORMAL")]
    SpawnV0011PokemonMetapodNormal,
    #[serde(rename = "SPAWN_V0012_POKEMON_BUTTERFREE")]
    SpawnV0012PokemonButterfree,
    #[serde(rename = "SPAWN_V0012_POKEMON_BUTTERFREE_NORMAL")]
    SpawnV0012PokemonButterfreeNormal,
    #[serde(rename = "SPAWN_V0013_POKEMON_WEEDLE")]
    SpawnV0013PokemonWeedle,
    #[serde(rename = "SPAWN_V0013_POKEMON_WEEDLE_NORMAL")]
    SpawnV0013PokemonWeedleNormal,
    #[serde(rename = "SPAWN_V0014_POKEMON_KAKUNA")]
    SpawnV0014PokemonKakuna,
    #[serde(rename = "SPAWN_V0014_POKEMON_KAKUNA_NORMAL")]
    SpawnV0014PokemonKakunaNormal,
    #[serde(rename = "SPAWN_V0015_POKEMON_BEEDRILL")]
    SpawnV0015PokemonBeedrill,
    #[serde(rename = "SPAWN_V0015_POKEMON_BEEDRILL_NORMAL")]
    SpawnV0015PokemonBeedrillNormal,
    #[serde(rename = "SPAWN_V0016_POKEMON_PIDGEY")]
    SpawnV0016PokemonPidgey,
    #[serde(rename = "SPAWN_V0016_POKEMON_PIDGEY_NORMAL")]
    SpawnV0016PokemonPidgeyNormal,
    #[serde(rename = "SPAWN_V0017_POKEMON_PIDGEOTTO")]
    SpawnV0017PokemonPidgeotto,
    #[serde(rename = "SPAWN_V0017_POKEMON_PIDGEOTTO_NORMAL")]
    SpawnV0017PokemonPidgeottoNormal,
    #[serde(rename = "SPAWN_V0018_POKEMON_PIDGEOT")]
    SpawnV0018PokemonPidgeot,
    #[serde(rename = "SPAWN_V0018_POKEMON_PIDGEOT_NORMAL")]
    SpawnV0018PokemonPidgeotNormal,
    #[serde(rename = "SPAWN_V0019_POKEMON_RATTATA")]
    SpawnV0019PokemonRattata,
    #[serde(rename = "SPAWN_V0019_POKEMON_RATTATA_ALOLA")]
    SpawnV0019PokemonRattataAlola,
    #[serde(rename = "SPAWN_V0019_POKEMON_RATTATA_NORMAL")]
    SpawnV0019PokemonRattataNormal,
    #[serde(rename = "SPAWN_V0020_POKEMON_RATICATE")]
    SpawnV0020PokemonRaticate,
    #[serde(rename = "SPAWN_V0020_POKEMON_RATICATE_ALOLA")]
    SpawnV0020PokemonRaticateAlola,
    #[serde(rename = "SPAWN_V0020_POKEMON_RATICATE_NORMAL")]
    SpawnV0020PokemonRaticateNormal,
    #[serde(rename = "SPAWN_V0021_POKEMON_SPEAROW")]
    SpawnV0021PokemonSpearow,
    #[serde(rename = "SPAWN_V0021_POKEMON_SPEAROW_NORMAL")]
    SpawnV0021PokemonSpearowNormal,
    #[serde(rename = "SPAWN_V0022_POKEMON_FEAROW")]
    SpawnV0022PokemonFearow,
    #[serde(rename = "SPAWN_V0022_POKEMON_FEAROW_NORMAL")]
    SpawnV0022PokemonFearowNormal,
    #[serde(rename = "SPAWN_V0023_POKEMON_EKANS")]
    SpawnV0023PokemonEkans,
    #[serde(rename = "SPAWN_V0023_POKEMON_EKANS_NORMAL")]
    SpawnV0023PokemonEkansNormal,
    #[serde(rename = "SPAWN_V0024_POKEMON_ARBOK")]
    SpawnV0024PokemonArbok,
    #[serde(rename = "SPAWN_V0024_POKEMON_ARBOK_NORMAL")]
    SpawnV0024PokemonArbokNormal,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU")]
    SpawnV0025PokemonPikachu,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_ADVENTURE_HAT_2020")]
    SpawnV0025PokemonPikachuAdventureHat2020,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_BB_2026")]
    SpawnV0025PokemonPikachuBb2026,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_COPY_2019")]
    SpawnV0025PokemonPikachuCopy2019,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_COSTUME_2020")]
    SpawnV0025PokemonPikachuCostume2020,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_DIWALI_2024")]
    SpawnV0025PokemonPikachuDiwali2024,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_DOCTOR")]
    SpawnV0025PokemonPikachuDoctor,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FALL_2019")]
    SpawnV0025PokemonPikachuFall2019,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_01")]
    SpawnV0025PokemonPikachuFlying01,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_02")]
    SpawnV0025PokemonPikachuFlying02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_03")]
    SpawnV0025PokemonPikachuFlying03,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_04")]
    SpawnV0025PokemonPikachuFlying04,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_5TH_ANNIV")]
    SpawnV0025PokemonPikachuFlying5thAnniv,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_FLYING_OKINAWA")]
    SpawnV0025PokemonPikachuFlyingOkinawa,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2022")]
    SpawnV0025PokemonPikachuGofest2022,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2024_MTIARA")]
    SpawnV0025PokemonPikachuGofest2024Mtiara,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2024_STIARA")]
    SpawnV0025PokemonPikachuGofest2024Stiara,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_BLUE")]
    SpawnV0025PokemonPikachuGofest2025GogglesBlue,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_RED")]
    SpawnV0025PokemonPikachuGofest2025GogglesRed,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_YELLOW")]
    SpawnV0025PokemonPikachuGofest2025GogglesYellow,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_BLUE")]
    SpawnV0025PokemonPikachuGofest2025MonocleBlue,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_RED")]
    SpawnV0025PokemonPikachuGofest2025MonocleRed,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_YELLOW")]
    SpawnV0025PokemonPikachuGofest2025MonocleYellow,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_BLUE")]
    SpawnV0025PokemonPikachuGofest2026CapBlue,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_RED")]
    SpawnV0025PokemonPikachuGofest2026CapRed,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_YELLOW")]
    SpawnV0025PokemonPikachuGofest2026CapYellow,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_A")]
    SpawnV0025PokemonPikachuGotour2024A,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_A_02")]
    SpawnV0025PokemonPikachuGotour2024A02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_B")]
    SpawnV0025PokemonPikachuGotour2024B,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_B_02")]
    SpawnV0025PokemonPikachuGotour2024B02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_A")]
    SpawnV0025PokemonPikachuGotour2025A,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_A_02")]
    SpawnV0025PokemonPikachuGotour2025A02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_B")]
    SpawnV0025PokemonPikachuGotour2025B,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_B_02")]
    SpawnV0025PokemonPikachuGotour2025B02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_A")]
    SpawnV0025PokemonPikachuGotour2026A,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_A_02")]
    SpawnV0025PokemonPikachuGotour2026A02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_B")]
    SpawnV0025PokemonPikachuGotour2026B,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_B_02")]
    SpawnV0025PokemonPikachuGotour2026B02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_C")]
    SpawnV0025PokemonPikachuGotour2026C,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_C_02")]
    SpawnV0025PokemonPikachuGotour2026C02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_HORIZONS")]
    SpawnV0025PokemonPikachuHorizons,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_JEJU")]
    SpawnV0025PokemonPikachuJeju,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_KARIYUSHI")]
    SpawnV0025PokemonPikachuKariyushi,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_KURTA")]
    SpawnV0025PokemonPikachuKurta,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_NORMAL")]
    SpawnV0025PokemonPikachuNormal,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_POP_STAR")]
    SpawnV0025PokemonPikachuPopStar,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_ROCK_STAR")]
    SpawnV0025PokemonPikachuRockStar,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_A")]
    SpawnV0025PokemonPikachuSummer2023A,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_B")]
    SpawnV0025PokemonPikachuSummer2023B,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_C")]
    SpawnV0025PokemonPikachuSummer2023C,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_D")]
    SpawnV0025PokemonPikachuSummer2023D,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_E")]
    SpawnV0025PokemonPikachuSummer2023E,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_01")]
    SpawnV0025PokemonPikachuTshirt01,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_02")]
    SpawnV0025PokemonPikachuTshirt02,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_03")]
    SpawnV0025PokemonPikachuTshirt03,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_VS_2019")]
    SpawnV0025PokemonPikachuVs2019,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_WCS_2022")]
    SpawnV0025PokemonPikachuWcs2022,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_WCS_2023")]
    SpawnV0025PokemonPikachuWcs2023,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_WCS_2024")]
    SpawnV0025PokemonPikachuWcs2024,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_WCS_2025")]
    SpawnV0025PokemonPikachuWcs2025,
    #[serde(rename = "SPAWN_V0025_POKEMON_PIKACHU_WINTER_2020")]
    SpawnV0025PokemonPikachuWinter2020,
    #[serde(rename = "SPAWN_V0026_POKEMON_RAICHU")]
    SpawnV0026PokemonRaichu,
    #[serde(rename = "SPAWN_V0026_POKEMON_RAICHU_ALOLA")]
    SpawnV0026PokemonRaichuAlola,
    #[serde(rename = "SPAWN_V0026_POKEMON_RAICHU_NORMAL")]
    SpawnV0026PokemonRaichuNormal,
    #[serde(rename = "SPAWN_V0027_POKEMON_SANDSHREW")]
    SpawnV0027PokemonSandshrew,
    #[serde(rename = "SPAWN_V0027_POKEMON_SANDSHREW_ALOLA")]
    SpawnV0027PokemonSandshrewAlola,
    #[serde(rename = "SPAWN_V0027_POKEMON_SANDSHREW_NORMAL")]
    SpawnV0027PokemonSandshrewNormal,
    #[serde(rename = "SPAWN_V0028_POKEMON_SANDSLASH")]
    SpawnV0028PokemonSandslash,
    #[serde(rename = "SPAWN_V0028_POKEMON_SANDSLASH_ALOLA")]
    SpawnV0028PokemonSandslashAlola,
    #[serde(rename = "SPAWN_V0028_POKEMON_SANDSLASH_NORMAL")]
    SpawnV0028PokemonSandslashNormal,
    #[serde(rename = "SPAWN_V0029_POKEMON_NIDORAN")]
    SpawnV0029PokemonNidoran,
    #[serde(rename = "SPAWN_V0029_POKEMON_NIDORAN_NORMAL")]
    SpawnV0029PokemonNidoranNormal,
    #[serde(rename = "SPAWN_V0030_POKEMON_NIDORINA")]
    SpawnV0030PokemonNidorina,
    #[serde(rename = "SPAWN_V0030_POKEMON_NIDORINA_NORMAL")]
    SpawnV0030PokemonNidorinaNormal,
    #[serde(rename = "SPAWN_V0031_POKEMON_NIDOQUEEN")]
    SpawnV0031PokemonNidoqueen,
    #[serde(rename = "SPAWN_V0031_POKEMON_NIDOQUEEN_NORMAL")]
    SpawnV0031PokemonNidoqueenNormal,
    #[serde(rename = "SPAWN_V0032_POKEMON_NIDORAN")]
    SpawnV0032PokemonNidoran,
    #[serde(rename = "SPAWN_V0032_POKEMON_NIDORAN_NORMAL")]
    SpawnV0032PokemonNidoranNormal,
    #[serde(rename = "SPAWN_V0033_POKEMON_NIDORINO")]
    SpawnV0033PokemonNidorino,
    #[serde(rename = "SPAWN_V0033_POKEMON_NIDORINO_NORMAL")]
    SpawnV0033PokemonNidorinoNormal,
    #[serde(rename = "SPAWN_V0034_POKEMON_NIDOKING")]
    SpawnV0034PokemonNidoking,
    #[serde(rename = "SPAWN_V0034_POKEMON_NIDOKING_NORMAL")]
    SpawnV0034PokemonNidokingNormal,
    #[serde(rename = "SPAWN_V0035_POKEMON_CLEFAIRY")]
    SpawnV0035PokemonClefairy,
    #[serde(rename = "SPAWN_V0035_POKEMON_CLEFAIRY_NORMAL")]
    SpawnV0035PokemonClefairyNormal,
    #[serde(rename = "SPAWN_V0036_POKEMON_CLEFABLE")]
    SpawnV0036PokemonClefable,
    #[serde(rename = "SPAWN_V0036_POKEMON_CLEFABLE_NORMAL")]
    SpawnV0036PokemonClefableNormal,
    #[serde(rename = "SPAWN_V0037_POKEMON_VULPIX")]
    SpawnV0037PokemonVulpix,
    #[serde(rename = "SPAWN_V0037_POKEMON_VULPIX_ALOLA")]
    SpawnV0037PokemonVulpixAlola,
    #[serde(rename = "SPAWN_V0037_POKEMON_VULPIX_NORMAL")]
    SpawnV0037PokemonVulpixNormal,
    #[serde(rename = "SPAWN_V0038_POKEMON_NINETALES")]
    SpawnV0038PokemonNinetales,
    #[serde(rename = "SPAWN_V0038_POKEMON_NINETALES_ALOLA")]
    SpawnV0038PokemonNinetalesAlola,
    #[serde(rename = "SPAWN_V0038_POKEMON_NINETALES_NORMAL")]
    SpawnV0038PokemonNinetalesNormal,
    #[serde(rename = "SPAWN_V0039_POKEMON_JIGGLYPUFF")]
    SpawnV0039PokemonJigglypuff,
    #[serde(rename = "SPAWN_V0039_POKEMON_JIGGLYPUFF_NORMAL")]
    SpawnV0039PokemonJigglypuffNormal,
    #[serde(rename = "SPAWN_V0040_POKEMON_WIGGLYTUFF")]
    SpawnV0040PokemonWigglytuff,
    #[serde(rename = "SPAWN_V0040_POKEMON_WIGGLYTUFF_NORMAL")]
    SpawnV0040PokemonWigglytuffNormal,
    #[serde(rename = "SPAWN_V0041_POKEMON_ZUBAT")]
    SpawnV0041PokemonZubat,
    #[serde(rename = "SPAWN_V0041_POKEMON_ZUBAT_NORMAL")]
    SpawnV0041PokemonZubatNormal,
    #[serde(rename = "SPAWN_V0042_POKEMON_GOLBAT")]
    SpawnV0042PokemonGolbat,
    #[serde(rename = "SPAWN_V0042_POKEMON_GOLBAT_NORMAL")]
    SpawnV0042PokemonGolbatNormal,
    #[serde(rename = "SPAWN_V0043_POKEMON_ODDISH")]
    SpawnV0043PokemonOddish,
    #[serde(rename = "SPAWN_V0043_POKEMON_ODDISH_NORMAL")]
    SpawnV0043PokemonOddishNormal,
    #[serde(rename = "SPAWN_V0044_POKEMON_GLOOM")]
    SpawnV0044PokemonGloom,
    #[serde(rename = "SPAWN_V0044_POKEMON_GLOOM_NORMAL")]
    SpawnV0044PokemonGloomNormal,
    #[serde(rename = "SPAWN_V0045_POKEMON_VILEPLUME")]
    SpawnV0045PokemonVileplume,
    #[serde(rename = "SPAWN_V0045_POKEMON_VILEPLUME_NORMAL")]
    SpawnV0045PokemonVileplumeNormal,
    #[serde(rename = "SPAWN_V0046_POKEMON_PARAS")]
    SpawnV0046PokemonParas,
    #[serde(rename = "SPAWN_V0046_POKEMON_PARAS_NORMAL")]
    SpawnV0046PokemonParasNormal,
    #[serde(rename = "SPAWN_V0047_POKEMON_PARASECT")]
    SpawnV0047PokemonParasect,
    #[serde(rename = "SPAWN_V0047_POKEMON_PARASECT_NORMAL")]
    SpawnV0047PokemonParasectNormal,
    #[serde(rename = "SPAWN_V0048_POKEMON_VENONAT")]
    SpawnV0048PokemonVenonat,
    #[serde(rename = "SPAWN_V0048_POKEMON_VENONAT_NORMAL")]
    SpawnV0048PokemonVenonatNormal,
    #[serde(rename = "SPAWN_V0049_POKEMON_VENOMOTH")]
    SpawnV0049PokemonVenomoth,
    #[serde(rename = "SPAWN_V0049_POKEMON_VENOMOTH_NORMAL")]
    SpawnV0049PokemonVenomothNormal,
    #[serde(rename = "SPAWN_V0050_POKEMON_DIGLETT")]
    SpawnV0050PokemonDiglett,
    #[serde(rename = "SPAWN_V0050_POKEMON_DIGLETT_ALOLA")]
    SpawnV0050PokemonDiglettAlola,
    #[serde(rename = "SPAWN_V0050_POKEMON_DIGLETT_NORMAL")]
    SpawnV0050PokemonDiglettNormal,
    #[serde(rename = "SPAWN_V0051_POKEMON_DUGTRIO")]
    SpawnV0051PokemonDugtrio,
    #[serde(rename = "SPAWN_V0051_POKEMON_DUGTRIO_ALOLA")]
    SpawnV0051PokemonDugtrioAlola,
    #[serde(rename = "SPAWN_V0051_POKEMON_DUGTRIO_NORMAL")]
    SpawnV0051PokemonDugtrioNormal,
    #[serde(rename = "SPAWN_V0052_POKEMON_MEOWTH")]
    SpawnV0052PokemonMeowth,
    #[serde(rename = "SPAWN_V0052_POKEMON_MEOWTH_ALOLA")]
    SpawnV0052PokemonMeowthAlola,
    #[serde(rename = "SPAWN_V0052_POKEMON_MEOWTH_GALARIAN")]
    SpawnV0052PokemonMeowthGalarian,
    #[serde(rename = "SPAWN_V0052_POKEMON_MEOWTH_NORMAL")]
    SpawnV0052PokemonMeowthNormal,
    #[serde(rename = "SPAWN_V0053_POKEMON_PERSIAN")]
    SpawnV0053PokemonPersian,
    #[serde(rename = "SPAWN_V0053_POKEMON_PERSIAN_ALOLA")]
    SpawnV0053PokemonPersianAlola,
    #[serde(rename = "SPAWN_V0053_POKEMON_PERSIAN_NORMAL")]
    SpawnV0053PokemonPersianNormal,
    #[serde(rename = "SPAWN_V0054_POKEMON_PSYDUCK")]
    SpawnV0054PokemonPsyduck,
    #[serde(rename = "SPAWN_V0054_POKEMON_PSYDUCK_NORMAL")]
    SpawnV0054PokemonPsyduckNormal,
    #[serde(rename = "SPAWN_V0054_POKEMON_PSYDUCK_SWIM_2025")]
    SpawnV0054PokemonPsyduckSwim2025,
    #[serde(rename = "SPAWN_V0055_POKEMON_GOLDUCK")]
    SpawnV0055PokemonGolduck,
    #[serde(rename = "SPAWN_V0055_POKEMON_GOLDUCK_NORMAL")]
    SpawnV0055PokemonGolduckNormal,
    #[serde(rename = "SPAWN_V0056_POKEMON_MANKEY")]
    SpawnV0056PokemonMankey,
    #[serde(rename = "SPAWN_V0056_POKEMON_MANKEY_NORMAL")]
    SpawnV0056PokemonMankeyNormal,
    #[serde(rename = "SPAWN_V0057_POKEMON_PRIMEAPE")]
    SpawnV0057PokemonPrimeape,
    #[serde(rename = "SPAWN_V0057_POKEMON_PRIMEAPE_NORMAL")]
    SpawnV0057PokemonPrimeapeNormal,
    #[serde(rename = "SPAWN_V0058_POKEMON_GROWLITHE")]
    SpawnV0058PokemonGrowlithe,
    #[serde(rename = "SPAWN_V0058_POKEMON_GROWLITHE_HISUIAN")]
    SpawnV0058PokemonGrowlitheHisuian,
    #[serde(rename = "SPAWN_V0058_POKEMON_GROWLITHE_NORMAL")]
    SpawnV0058PokemonGrowlitheNormal,
    #[serde(rename = "SPAWN_V0059_POKEMON_ARCANINE")]
    SpawnV0059PokemonArcanine,
    #[serde(rename = "SPAWN_V0059_POKEMON_ARCANINE_HISUIAN")]
    SpawnV0059PokemonArcanineHisuian,
    #[serde(rename = "SPAWN_V0059_POKEMON_ARCANINE_NORMAL")]
    SpawnV0059PokemonArcanineNormal,
    #[serde(rename = "SPAWN_V0060_POKEMON_POLIWAG")]
    SpawnV0060PokemonPoliwag,
    #[serde(rename = "SPAWN_V0060_POKEMON_POLIWAG_NORMAL")]
    SpawnV0060PokemonPoliwagNormal,
    #[serde(rename = "SPAWN_V0061_POKEMON_POLIWHIRL")]
    SpawnV0061PokemonPoliwhirl,
    #[serde(rename = "SPAWN_V0061_POKEMON_POLIWHIRL_NORMAL")]
    SpawnV0061PokemonPoliwhirlNormal,
    #[serde(rename = "SPAWN_V0062_POKEMON_POLIWRATH")]
    SpawnV0062PokemonPoliwrath,
    #[serde(rename = "SPAWN_V0062_POKEMON_POLIWRATH_NORMAL")]
    SpawnV0062PokemonPoliwrathNormal,
    #[serde(rename = "SPAWN_V0063_POKEMON_ABRA")]
    SpawnV0063PokemonAbra,
    #[serde(rename = "SPAWN_V0063_POKEMON_ABRA_NORMAL")]
    SpawnV0063PokemonAbraNormal,
    #[serde(rename = "SPAWN_V0064_POKEMON_KADABRA")]
    SpawnV0064PokemonKadabra,
    #[serde(rename = "SPAWN_V0064_POKEMON_KADABRA_NORMAL")]
    SpawnV0064PokemonKadabraNormal,
    #[serde(rename = "SPAWN_V0065_POKEMON_ALAKAZAM")]
    SpawnV0065PokemonAlakazam,
    #[serde(rename = "SPAWN_V0065_POKEMON_ALAKAZAM_NORMAL")]
    SpawnV0065PokemonAlakazamNormal,
    #[serde(rename = "SPAWN_V0066_POKEMON_MACHOP")]
    SpawnV0066PokemonMachop,
    #[serde(rename = "SPAWN_V0066_POKEMON_MACHOP_NORMAL")]
    SpawnV0066PokemonMachopNormal,
    #[serde(rename = "SPAWN_V0067_POKEMON_MACHOKE")]
    SpawnV0067PokemonMachoke,
    #[serde(rename = "SPAWN_V0067_POKEMON_MACHOKE_NORMAL")]
    SpawnV0067PokemonMachokeNormal,
    #[serde(rename = "SPAWN_V0068_POKEMON_MACHAMP")]
    SpawnV0068PokemonMachamp,
    #[serde(rename = "SPAWN_V0068_POKEMON_MACHAMP_NORMAL")]
    SpawnV0068PokemonMachampNormal,
    #[serde(rename = "SPAWN_V0069_POKEMON_BELLSPROUT")]
    SpawnV0069PokemonBellsprout,
    #[serde(rename = "SPAWN_V0069_POKEMON_BELLSPROUT_NORMAL")]
    SpawnV0069PokemonBellsproutNormal,
    #[serde(rename = "SPAWN_V0070_POKEMON_WEEPINBELL")]
    SpawnV0070PokemonWeepinbell,
    #[serde(rename = "SPAWN_V0070_POKEMON_WEEPINBELL_NORMAL")]
    SpawnV0070PokemonWeepinbellNormal,
    #[serde(rename = "SPAWN_V0071_POKEMON_VICTREEBEL")]
    SpawnV0071PokemonVictreebel,
    #[serde(rename = "SPAWN_V0071_POKEMON_VICTREEBEL_NORMAL")]
    SpawnV0071PokemonVictreebelNormal,
    #[serde(rename = "SPAWN_V0072_POKEMON_TENTACOOL")]
    SpawnV0072PokemonTentacool,
    #[serde(rename = "SPAWN_V0072_POKEMON_TENTACOOL_NORMAL")]
    SpawnV0072PokemonTentacoolNormal,
    #[serde(rename = "SPAWN_V0073_POKEMON_TENTACRUEL")]
    SpawnV0073PokemonTentacruel,
    #[serde(rename = "SPAWN_V0073_POKEMON_TENTACRUEL_NORMAL")]
    SpawnV0073PokemonTentacruelNormal,
    #[serde(rename = "SPAWN_V0074_POKEMON_GEODUDE")]
    SpawnV0074PokemonGeodude,
    #[serde(rename = "SPAWN_V0074_POKEMON_GEODUDE_ALOLA")]
    SpawnV0074PokemonGeodudeAlola,
    #[serde(rename = "SPAWN_V0074_POKEMON_GEODUDE_NORMAL")]
    SpawnV0074PokemonGeodudeNormal,
    #[serde(rename = "SPAWN_V0075_POKEMON_GRAVELER")]
    SpawnV0075PokemonGraveler,
    #[serde(rename = "SPAWN_V0075_POKEMON_GRAVELER_ALOLA")]
    SpawnV0075PokemonGravelerAlola,
    #[serde(rename = "SPAWN_V0075_POKEMON_GRAVELER_NORMAL")]
    SpawnV0075PokemonGravelerNormal,
    #[serde(rename = "SPAWN_V0076_POKEMON_GOLEM")]
    SpawnV0076PokemonGolem,
    #[serde(rename = "SPAWN_V0076_POKEMON_GOLEM_ALOLA")]
    SpawnV0076PokemonGolemAlola,
    #[serde(rename = "SPAWN_V0076_POKEMON_GOLEM_NORMAL")]
    SpawnV0076PokemonGolemNormal,
    #[serde(rename = "SPAWN_V0077_POKEMON_PONYTA")]
    SpawnV0077PokemonPonyta,
    #[serde(rename = "SPAWN_V0077_POKEMON_PONYTA_GALARIAN")]
    SpawnV0077PokemonPonytaGalarian,
    #[serde(rename = "SPAWN_V0077_POKEMON_PONYTA_NORMAL")]
    SpawnV0077PokemonPonytaNormal,
    #[serde(rename = "SPAWN_V0078_POKEMON_RAPIDASH")]
    SpawnV0078PokemonRapidash,
    #[serde(rename = "SPAWN_V0078_POKEMON_RAPIDASH_GALARIAN")]
    SpawnV0078PokemonRapidashGalarian,
    #[serde(rename = "SPAWN_V0078_POKEMON_RAPIDASH_NORMAL")]
    SpawnV0078PokemonRapidashNormal,
    #[serde(rename = "SPAWN_V0079_POKEMON_SLOWPOKE")]
    SpawnV0079PokemonSlowpoke,
    #[serde(rename = "SPAWN_V0079_POKEMON_SLOWPOKE_2020")]
    SpawnV0079PokemonSlowpoke2020,
    #[serde(rename = "SPAWN_V0079_POKEMON_SLOWPOKE_GALARIAN")]
    SpawnV0079PokemonSlowpokeGalarian,
    #[serde(rename = "SPAWN_V0079_POKEMON_SLOWPOKE_NORMAL")]
    SpawnV0079PokemonSlowpokeNormal,
    #[serde(rename = "SPAWN_V0080_POKEMON_SLOWBRO")]
    SpawnV0080PokemonSlowbro,
    #[serde(rename = "SPAWN_V0080_POKEMON_SLOWBRO_2021")]
    SpawnV0080PokemonSlowbro2021,
    #[serde(rename = "SPAWN_V0080_POKEMON_SLOWBRO_GALARIAN")]
    SpawnV0080PokemonSlowbroGalarian,
    #[serde(rename = "SPAWN_V0080_POKEMON_SLOWBRO_NORMAL")]
    SpawnV0080PokemonSlowbroNormal,
    #[serde(rename = "SPAWN_V0081_POKEMON_MAGNEMITE")]
    SpawnV0081PokemonMagnemite,
    #[serde(rename = "SPAWN_V0081_POKEMON_MAGNEMITE_NORMAL")]
    SpawnV0081PokemonMagnemiteNormal,
    #[serde(rename = "SPAWN_V0082_POKEMON_MAGNETON")]
    SpawnV0082PokemonMagneton,
    #[serde(rename = "SPAWN_V0082_POKEMON_MAGNETON_NORMAL")]
    SpawnV0082PokemonMagnetonNormal,
    #[serde(rename = "SPAWN_V0083_POKEMON_FARFETCHD")]
    SpawnV0083PokemonFarfetchd,
    #[serde(rename = "SPAWN_V0083_POKEMON_FARFETCHD_GALARIAN")]
    SpawnV0083PokemonFarfetchdGalarian,
    #[serde(rename = "SPAWN_V0083_POKEMON_FARFETCHD_NORMAL")]
    SpawnV0083PokemonFarfetchdNormal,
    #[serde(rename = "SPAWN_V0084_POKEMON_DODUO")]
    SpawnV0084PokemonDoduo,
    #[serde(rename = "SPAWN_V0084_POKEMON_DODUO_NORMAL")]
    SpawnV0084PokemonDoduoNormal,
    #[serde(rename = "SPAWN_V0085_POKEMON_DODRIO")]
    SpawnV0085PokemonDodrio,
    #[serde(rename = "SPAWN_V0085_POKEMON_DODRIO_NORMAL")]
    SpawnV0085PokemonDodrioNormal,
    #[serde(rename = "SPAWN_V0086_POKEMON_SEEL")]
    SpawnV0086PokemonSeel,
    #[serde(rename = "SPAWN_V0086_POKEMON_SEEL_NORMAL")]
    SpawnV0086PokemonSeelNormal,
    #[serde(rename = "SPAWN_V0087_POKEMON_DEWGONG")]
    SpawnV0087PokemonDewgong,
    #[serde(rename = "SPAWN_V0087_POKEMON_DEWGONG_NORMAL")]
    SpawnV0087PokemonDewgongNormal,
    #[serde(rename = "SPAWN_V0088_POKEMON_GRIMER")]
    SpawnV0088PokemonGrimer,
    #[serde(rename = "SPAWN_V0088_POKEMON_GRIMER_ALOLA")]
    SpawnV0088PokemonGrimerAlola,
    #[serde(rename = "SPAWN_V0088_POKEMON_GRIMER_NORMAL")]
    SpawnV0088PokemonGrimerNormal,
    #[serde(rename = "SPAWN_V0089_POKEMON_MUK")]
    SpawnV0089PokemonMuk,
    #[serde(rename = "SPAWN_V0089_POKEMON_MUK_ALOLA")]
    SpawnV0089PokemonMukAlola,
    #[serde(rename = "SPAWN_V0089_POKEMON_MUK_NORMAL")]
    SpawnV0089PokemonMukNormal,
    #[serde(rename = "SPAWN_V0090_POKEMON_SHELLDER")]
    SpawnV0090PokemonShellder,
    #[serde(rename = "SPAWN_V0090_POKEMON_SHELLDER_NORMAL")]
    SpawnV0090PokemonShellderNormal,
    #[serde(rename = "SPAWN_V0091_POKEMON_CLOYSTER")]
    SpawnV0091PokemonCloyster,
    #[serde(rename = "SPAWN_V0091_POKEMON_CLOYSTER_NORMAL")]
    SpawnV0091PokemonCloysterNormal,
    #[serde(rename = "SPAWN_V0092_POKEMON_GASTLY")]
    SpawnV0092PokemonGastly,
    #[serde(rename = "SPAWN_V0092_POKEMON_GASTLY_NORMAL")]
    SpawnV0092PokemonGastlyNormal,
    #[serde(rename = "SPAWN_V0093_POKEMON_HAUNTER")]
    SpawnV0093PokemonHaunter,
    #[serde(rename = "SPAWN_V0093_POKEMON_HAUNTER_NORMAL")]
    SpawnV0093PokemonHaunterNormal,
    #[serde(rename = "SPAWN_V0094_POKEMON_GENGAR")]
    SpawnV0094PokemonGengar,
    #[serde(rename = "SPAWN_V0094_POKEMON_GENGAR_COSTUME_2020")]
    SpawnV0094PokemonGengarCostume2020,
    #[serde(rename = "SPAWN_V0094_POKEMON_GENGAR_NORMAL")]
    SpawnV0094PokemonGengarNormal,
    #[serde(rename = "SPAWN_V0095_POKEMON_ONIX")]
    SpawnV0095PokemonOnix,
    #[serde(rename = "SPAWN_V0095_POKEMON_ONIX_NORMAL")]
    SpawnV0095PokemonOnixNormal,
    #[serde(rename = "SPAWN_V0096_POKEMON_DROWZEE")]
    SpawnV0096PokemonDrowzee,
    #[serde(rename = "SPAWN_V0096_POKEMON_DROWZEE_NORMAL")]
    SpawnV0096PokemonDrowzeeNormal,
    #[serde(rename = "SPAWN_V0097_POKEMON_HYPNO")]
    SpawnV0097PokemonHypno,
    #[serde(rename = "SPAWN_V0097_POKEMON_HYPNO_NORMAL")]
    SpawnV0097PokemonHypnoNormal,
    #[serde(rename = "SPAWN_V0098_POKEMON_KRABBY")]
    SpawnV0098PokemonKrabby,
    #[serde(rename = "SPAWN_V0098_POKEMON_KRABBY_NORMAL")]
    SpawnV0098PokemonKrabbyNormal,
    #[serde(rename = "SPAWN_V0099_POKEMON_KINGLER")]
    SpawnV0099PokemonKingler,
    #[serde(rename = "SPAWN_V0099_POKEMON_KINGLER_NORMAL")]
    SpawnV0099PokemonKinglerNormal,
    #[serde(rename = "SPAWN_V0100_POKEMON_VOLTORB")]
    SpawnV0100PokemonVoltorb,
    #[serde(rename = "SPAWN_V0100_POKEMON_VOLTORB_HISUIAN")]
    SpawnV0100PokemonVoltorbHisuian,
    #[serde(rename = "SPAWN_V0100_POKEMON_VOLTORB_NORMAL")]
    SpawnV0100PokemonVoltorbNormal,
    #[serde(rename = "SPAWN_V0101_POKEMON_ELECTRODE")]
    SpawnV0101PokemonElectrode,
    #[serde(rename = "SPAWN_V0101_POKEMON_ELECTRODE_HISUIAN")]
    SpawnV0101PokemonElectrodeHisuian,
    #[serde(rename = "SPAWN_V0101_POKEMON_ELECTRODE_NORMAL")]
    SpawnV0101PokemonElectrodeNormal,
    #[serde(rename = "SPAWN_V0102_POKEMON_EXEGGCUTE")]
    SpawnV0102PokemonExeggcute,
    #[serde(rename = "SPAWN_V0102_POKEMON_EXEGGCUTE_NORMAL")]
    SpawnV0102PokemonExeggcuteNormal,
    #[serde(rename = "SPAWN_V0103_POKEMON_EXEGGUTOR")]
    SpawnV0103PokemonExeggutor,
    #[serde(rename = "SPAWN_V0103_POKEMON_EXEGGUTOR_ALOLA")]
    SpawnV0103PokemonExeggutorAlola,
    #[serde(rename = "SPAWN_V0103_POKEMON_EXEGGUTOR_NORMAL")]
    SpawnV0103PokemonExeggutorNormal,
    #[serde(rename = "SPAWN_V0104_POKEMON_CUBONE")]
    SpawnV0104PokemonCubone,
    #[serde(rename = "SPAWN_V0104_POKEMON_CUBONE_NORMAL")]
    SpawnV0104PokemonCuboneNormal,
    #[serde(rename = "SPAWN_V0105_POKEMON_MAROWAK")]
    SpawnV0105PokemonMarowak,
    #[serde(rename = "SPAWN_V0105_POKEMON_MAROWAK_ALOLA")]
    SpawnV0105PokemonMarowakAlola,
    #[serde(rename = "SPAWN_V0105_POKEMON_MAROWAK_NORMAL")]
    SpawnV0105PokemonMarowakNormal,
    #[serde(rename = "SPAWN_V0106_POKEMON_HITMONLEE")]
    SpawnV0106PokemonHitmonlee,
    #[serde(rename = "SPAWN_V0106_POKEMON_HITMONLEE_NORMAL")]
    SpawnV0106PokemonHitmonleeNormal,
    #[serde(rename = "SPAWN_V0107_POKEMON_HITMONCHAN")]
    SpawnV0107PokemonHitmonchan,
    #[serde(rename = "SPAWN_V0107_POKEMON_HITMONCHAN_NORMAL")]
    SpawnV0107PokemonHitmonchanNormal,
    #[serde(rename = "SPAWN_V0108_POKEMON_LICKITUNG")]
    SpawnV0108PokemonLickitung,
    #[serde(rename = "SPAWN_V0108_POKEMON_LICKITUNG_NORMAL")]
    SpawnV0108PokemonLickitungNormal,
    #[serde(rename = "SPAWN_V0109_POKEMON_KOFFING")]
    SpawnV0109PokemonKoffing,
    #[serde(rename = "SPAWN_V0109_POKEMON_KOFFING_NORMAL")]
    SpawnV0109PokemonKoffingNormal,
    #[serde(rename = "SPAWN_V0110_POKEMON_WEEZING")]
    SpawnV0110PokemonWeezing,
    #[serde(rename = "SPAWN_V0110_POKEMON_WEEZING_GALARIAN")]
    SpawnV0110PokemonWeezingGalarian,
    #[serde(rename = "SPAWN_V0110_POKEMON_WEEZING_NORMAL")]
    SpawnV0110PokemonWeezingNormal,
    #[serde(rename = "SPAWN_V0111_POKEMON_RHYHORN")]
    SpawnV0111PokemonRhyhorn,
    #[serde(rename = "SPAWN_V0111_POKEMON_RHYHORN_NORMAL")]
    SpawnV0111PokemonRhyhornNormal,
    #[serde(rename = "SPAWN_V0112_POKEMON_RHYDON")]
    SpawnV0112PokemonRhydon,
    #[serde(rename = "SPAWN_V0112_POKEMON_RHYDON_NORMAL")]
    SpawnV0112PokemonRhydonNormal,
    #[serde(rename = "SPAWN_V0113_POKEMON_CHANSEY")]
    SpawnV0113PokemonChansey,
    #[serde(rename = "SPAWN_V0113_POKEMON_CHANSEY_NORMAL")]
    SpawnV0113PokemonChanseyNormal,
    #[serde(rename = "SPAWN_V0114_POKEMON_TANGELA")]
    SpawnV0114PokemonTangela,
    #[serde(rename = "SPAWN_V0114_POKEMON_TANGELA_NORMAL")]
    SpawnV0114PokemonTangelaNormal,
    #[serde(rename = "SPAWN_V0115_POKEMON_KANGASKHAN")]
    SpawnV0115PokemonKangaskhan,
    #[serde(rename = "SPAWN_V0115_POKEMON_KANGASKHAN_NORMAL")]
    SpawnV0115PokemonKangaskhanNormal,
    #[serde(rename = "SPAWN_V0116_POKEMON_HORSEA")]
    SpawnV0116PokemonHorsea,
    #[serde(rename = "SPAWN_V0116_POKEMON_HORSEA_NORMAL")]
    SpawnV0116PokemonHorseaNormal,
    #[serde(rename = "SPAWN_V0117_POKEMON_SEADRA")]
    SpawnV0117PokemonSeadra,
    #[serde(rename = "SPAWN_V0117_POKEMON_SEADRA_NORMAL")]
    SpawnV0117PokemonSeadraNormal,
    #[serde(rename = "SPAWN_V0118_POKEMON_GOLDEEN")]
    SpawnV0118PokemonGoldeen,
    #[serde(rename = "SPAWN_V0118_POKEMON_GOLDEEN_NORMAL")]
    SpawnV0118PokemonGoldeenNormal,
    #[serde(rename = "SPAWN_V0119_POKEMON_SEAKING")]
    SpawnV0119PokemonSeaking,
    #[serde(rename = "SPAWN_V0119_POKEMON_SEAKING_NORMAL")]
    SpawnV0119PokemonSeakingNormal,
    #[serde(rename = "SPAWN_V0120_POKEMON_STARYU")]
    SpawnV0120PokemonStaryu,
    #[serde(rename = "SPAWN_V0120_POKEMON_STARYU_NORMAL")]
    SpawnV0120PokemonStaryuNormal,
    #[serde(rename = "SPAWN_V0121_POKEMON_STARMIE")]
    SpawnV0121PokemonStarmie,
    #[serde(rename = "SPAWN_V0121_POKEMON_STARMIE_NORMAL")]
    SpawnV0121PokemonStarmieNormal,
    #[serde(rename = "SPAWN_V0122_POKEMON_MR_MIME")]
    SpawnV0122PokemonMrMime,
    #[serde(rename = "SPAWN_V0122_POKEMON_MR_MIME_GALARIAN")]
    SpawnV0122PokemonMrMimeGalarian,
    #[serde(rename = "SPAWN_V0122_POKEMON_MR_MIME_NORMAL")]
    SpawnV0122PokemonMrMimeNormal,
    #[serde(rename = "SPAWN_V0123_POKEMON_SCYTHER")]
    SpawnV0123PokemonScyther,
    #[serde(rename = "SPAWN_V0123_POKEMON_SCYTHER_NORMAL")]
    SpawnV0123PokemonScytherNormal,
    #[serde(rename = "SPAWN_V0124_POKEMON_JYNX")]
    SpawnV0124PokemonJynx,
    #[serde(rename = "SPAWN_V0124_POKEMON_JYNX_NORMAL")]
    SpawnV0124PokemonJynxNormal,
    #[serde(rename = "SPAWN_V0125_POKEMON_ELECTABUZZ")]
    SpawnV0125PokemonElectabuzz,
    #[serde(rename = "SPAWN_V0125_POKEMON_ELECTABUZZ_NORMAL")]
    SpawnV0125PokemonElectabuzzNormal,
    #[serde(rename = "SPAWN_V0126_POKEMON_MAGMAR")]
    SpawnV0126PokemonMagmar,
    #[serde(rename = "SPAWN_V0126_POKEMON_MAGMAR_NORMAL")]
    SpawnV0126PokemonMagmarNormal,
    #[serde(rename = "SPAWN_V0127_POKEMON_PINSIR")]
    SpawnV0127PokemonPinsir,
    #[serde(rename = "SPAWN_V0127_POKEMON_PINSIR_NORMAL")]
    SpawnV0127PokemonPinsirNormal,
    #[serde(rename = "SPAWN_V0128_POKEMON_TAUROS")]
    SpawnV0128PokemonTauros,
    #[serde(rename = "SPAWN_V0128_POKEMON_TAUROS_NORMAL")]
    SpawnV0128PokemonTaurosNormal,
    #[serde(rename = "SPAWN_V0128_POKEMON_TAUROS_PALDEA_AQUA")]
    SpawnV0128PokemonTaurosPaldeaAqua,
    #[serde(rename = "SPAWN_V0128_POKEMON_TAUROS_PALDEA_BLAZE")]
    SpawnV0128PokemonTaurosPaldeaBlaze,
    #[serde(rename = "SPAWN_V0128_POKEMON_TAUROS_PALDEA_COMBAT")]
    SpawnV0128PokemonTaurosPaldeaCombat,
    #[serde(rename = "SPAWN_V0129_POKEMON_MAGIKARP")]
    SpawnV0129PokemonMagikarp,
    #[serde(rename = "SPAWN_V0129_POKEMON_MAGIKARP_NORMAL")]
    SpawnV0129PokemonMagikarpNormal,
    #[serde(rename = "SPAWN_V0130_POKEMON_GYARADOS")]
    SpawnV0130PokemonGyarados,
    #[serde(rename = "SPAWN_V0130_POKEMON_GYARADOS_NORMAL")]
    SpawnV0130PokemonGyaradosNormal,
    #[serde(rename = "SPAWN_V0131_POKEMON_LAPRAS")]
    SpawnV0131PokemonLapras,
    #[serde(rename = "SPAWN_V0131_POKEMON_LAPRAS_COSTUME_2020")]
    SpawnV0131PokemonLaprasCostume2020,
    #[serde(rename = "SPAWN_V0131_POKEMON_LAPRAS_NORMAL")]
    SpawnV0131PokemonLaprasNormal,
    #[serde(rename = "SPAWN_V0132_POKEMON_DITTO")]
    SpawnV0132PokemonDitto,
    #[serde(rename = "SPAWN_V0132_POKEMON_DITTO_NORMAL")]
    SpawnV0132PokemonDittoNormal,
    #[serde(rename = "SPAWN_V0132_POKEMON_DITTO_SPRING_2026_A")]
    SpawnV0132PokemonDittoSpring2026A,
    #[serde(rename = "SPAWN_V0132_POKEMON_DITTO_SPRING_2026_B")]
    SpawnV0132PokemonDittoSpring2026B,
    #[serde(rename = "SPAWN_V0133_POKEMON_EEVEE")]
    SpawnV0133PokemonEevee,
    #[serde(rename = "SPAWN_V0133_POKEMON_EEVEE_GOFEST_2024_MTIARA")]
    SpawnV0133PokemonEeveeGofest2024Mtiara,
    #[serde(rename = "SPAWN_V0133_POKEMON_EEVEE_GOFEST_2024_STIARA")]
    SpawnV0133PokemonEeveeGofest2024Stiara,
    #[serde(rename = "SPAWN_V0133_POKEMON_EEVEE_NORMAL")]
    SpawnV0133PokemonEeveeNormal,
    #[serde(rename = "SPAWN_V0134_POKEMON_VAPOREON")]
    SpawnV0134PokemonVaporeon,
    #[serde(rename = "SPAWN_V0134_POKEMON_VAPOREON_NORMAL")]
    SpawnV0134PokemonVaporeonNormal,
    #[serde(rename = "SPAWN_V0135_POKEMON_JOLTEON")]
    SpawnV0135PokemonJolteon,
    #[serde(rename = "SPAWN_V0135_POKEMON_JOLTEON_NORMAL")]
    SpawnV0135PokemonJolteonNormal,
    #[serde(rename = "SPAWN_V0136_POKEMON_FLAREON")]
    SpawnV0136PokemonFlareon,
    #[serde(rename = "SPAWN_V0136_POKEMON_FLAREON_NORMAL")]
    SpawnV0136PokemonFlareonNormal,
    #[serde(rename = "SPAWN_V0137_POKEMON_PORYGON")]
    SpawnV0137PokemonPorygon,
    #[serde(rename = "SPAWN_V0137_POKEMON_PORYGON_NORMAL")]
    SpawnV0137PokemonPorygonNormal,
    #[serde(rename = "SPAWN_V0138_POKEMON_OMANYTE")]
    SpawnV0138PokemonOmanyte,
    #[serde(rename = "SPAWN_V0138_POKEMON_OMANYTE_NORMAL")]
    SpawnV0138PokemonOmanyteNormal,
    #[serde(rename = "SPAWN_V0139_POKEMON_OMASTAR")]
    SpawnV0139PokemonOmastar,
    #[serde(rename = "SPAWN_V0139_POKEMON_OMASTAR_NORMAL")]
    SpawnV0139PokemonOmastarNormal,
    #[serde(rename = "SPAWN_V0140_POKEMON_KABUTO")]
    SpawnV0140PokemonKabuto,
    #[serde(rename = "SPAWN_V0140_POKEMON_KABUTO_NORMAL")]
    SpawnV0140PokemonKabutoNormal,
    #[serde(rename = "SPAWN_V0141_POKEMON_KABUTOPS")]
    SpawnV0141PokemonKabutops,
    #[serde(rename = "SPAWN_V0141_POKEMON_KABUTOPS_NORMAL")]
    SpawnV0141PokemonKabutopsNormal,
    #[serde(rename = "SPAWN_V0142_POKEMON_AERODACTYL")]
    SpawnV0142PokemonAerodactyl,
    #[serde(rename = "SPAWN_V0142_POKEMON_AERODACTYL_NORMAL")]
    SpawnV0142PokemonAerodactylNormal,
    #[serde(rename = "SPAWN_V0142_POKEMON_AERODACTYL_SUMMER_2023")]
    SpawnV0142PokemonAerodactylSummer2023,
    #[serde(rename = "SPAWN_V0143_POKEMON_SNORLAX")]
    SpawnV0143PokemonSnorlax,
    #[serde(rename = "SPAWN_V0143_POKEMON_SNORLAX_NORMAL")]
    SpawnV0143PokemonSnorlaxNormal,
    #[serde(rename = "SPAWN_V0143_POKEMON_SNORLAX_WILDAREA_2024")]
    SpawnV0143PokemonSnorlaxWildarea2024,
    #[serde(rename = "SPAWN_V0144_POKEMON_ARTICUNO")]
    SpawnV0144PokemonArticuno,
    #[serde(rename = "SPAWN_V0144_POKEMON_ARTICUNO_GALARIAN")]
    SpawnV0144PokemonArticunoGalarian,
    #[serde(rename = "SPAWN_V0144_POKEMON_ARTICUNO_NORMAL")]
    SpawnV0144PokemonArticunoNormal,
    #[serde(rename = "SPAWN_V0145_POKEMON_ZAPDOS")]
    SpawnV0145PokemonZapdos,
    #[serde(rename = "SPAWN_V0145_POKEMON_ZAPDOS_GALARIAN")]
    SpawnV0145PokemonZapdosGalarian,
    #[serde(rename = "SPAWN_V0145_POKEMON_ZAPDOS_NORMAL")]
    SpawnV0145PokemonZapdosNormal,
    #[serde(rename = "SPAWN_V0146_POKEMON_MOLTRES")]
    SpawnV0146PokemonMoltres,
    #[serde(rename = "SPAWN_V0146_POKEMON_MOLTRES_GALARIAN")]
    SpawnV0146PokemonMoltresGalarian,
    #[serde(rename = "SPAWN_V0146_POKEMON_MOLTRES_NORMAL")]
    SpawnV0146PokemonMoltresNormal,
    #[serde(rename = "SPAWN_V0147_POKEMON_DRATINI")]
    SpawnV0147PokemonDratini,
    #[serde(rename = "SPAWN_V0147_POKEMON_DRATINI_NORMAL")]
    SpawnV0147PokemonDratiniNormal,
    #[serde(rename = "SPAWN_V0148_POKEMON_DRAGONAIR")]
    SpawnV0148PokemonDragonair,
    #[serde(rename = "SPAWN_V0148_POKEMON_DRAGONAIR_NORMAL")]
    SpawnV0148PokemonDragonairNormal,
    #[serde(rename = "SPAWN_V0149_POKEMON_DRAGONITE")]
    SpawnV0149PokemonDragonite,
    #[serde(rename = "SPAWN_V0149_POKEMON_DRAGONITE_NORMAL")]
    SpawnV0149PokemonDragoniteNormal,
    #[serde(rename = "SPAWN_V0150_POKEMON_MEWTWO")]
    SpawnV0150PokemonMewtwo,
    #[serde(rename = "SPAWN_V0150_POKEMON_MEWTWO_A")]
    SpawnV0150PokemonMewtwoA,
    #[serde(rename = "SPAWN_V0150_POKEMON_MEWTWO_NORMAL")]
    SpawnV0150PokemonMewtwoNormal,
    #[serde(rename = "SPAWN_V0151_POKEMON_MEW")]
    SpawnV0151PokemonMew,
    #[serde(rename = "SPAWN_V0151_POKEMON_MEW_NORMAL")]
    SpawnV0151PokemonMewNormal,
    #[serde(rename = "SPAWN_V0152_POKEMON_CHIKORITA")]
    SpawnV0152PokemonChikorita,
    #[serde(rename = "SPAWN_V0152_POKEMON_CHIKORITA_NORMAL")]
    SpawnV0152PokemonChikoritaNormal,
    #[serde(rename = "SPAWN_V0153_POKEMON_BAYLEEF")]
    SpawnV0153PokemonBayleef,
    #[serde(rename = "SPAWN_V0153_POKEMON_BAYLEEF_NORMAL")]
    SpawnV0153PokemonBayleefNormal,
    #[serde(rename = "SPAWN_V0154_POKEMON_MEGANIUM")]
    SpawnV0154PokemonMeganium,
    #[serde(rename = "SPAWN_V0154_POKEMON_MEGANIUM_NORMAL")]
    SpawnV0154PokemonMeganiumNormal,
    #[serde(rename = "SPAWN_V0155_POKEMON_CYNDAQUIL")]
    SpawnV0155PokemonCyndaquil,
    #[serde(rename = "SPAWN_V0155_POKEMON_CYNDAQUIL_NORMAL")]
    SpawnV0155PokemonCyndaquilNormal,
    #[serde(rename = "SPAWN_V0156_POKEMON_QUILAVA")]
    SpawnV0156PokemonQuilava,
    #[serde(rename = "SPAWN_V0156_POKEMON_QUILAVA_NORMAL")]
    SpawnV0156PokemonQuilavaNormal,
    #[serde(rename = "SPAWN_V0157_POKEMON_TYPHLOSION")]
    SpawnV0157PokemonTyphlosion,
    #[serde(rename = "SPAWN_V0157_POKEMON_TYPHLOSION_HISUIAN")]
    SpawnV0157PokemonTyphlosionHisuian,
    #[serde(rename = "SPAWN_V0157_POKEMON_TYPHLOSION_NORMAL")]
    SpawnV0157PokemonTyphlosionNormal,
    #[serde(rename = "SPAWN_V0158_POKEMON_TOTODILE")]
    SpawnV0158PokemonTotodile,
    #[serde(rename = "SPAWN_V0158_POKEMON_TOTODILE_NORMAL")]
    SpawnV0158PokemonTotodileNormal,
    #[serde(rename = "SPAWN_V0159_POKEMON_CROCONAW")]
    SpawnV0159PokemonCroconaw,
    #[serde(rename = "SPAWN_V0159_POKEMON_CROCONAW_NORMAL")]
    SpawnV0159PokemonCroconawNormal,
    #[serde(rename = "SPAWN_V0160_POKEMON_FERALIGATR")]
    SpawnV0160PokemonFeraligatr,
    #[serde(rename = "SPAWN_V0160_POKEMON_FERALIGATR_NORMAL")]
    SpawnV0160PokemonFeraligatrNormal,
    #[serde(rename = "SPAWN_V0161_POKEMON_SENTRET")]
    SpawnV0161PokemonSentret,
    #[serde(rename = "SPAWN_V0161_POKEMON_SENTRET_NORMAL")]
    SpawnV0161PokemonSentretNormal,
    #[serde(rename = "SPAWN_V0162_POKEMON_FURRET")]
    SpawnV0162PokemonFurret,
    #[serde(rename = "SPAWN_V0162_POKEMON_FURRET_NORMAL")]
    SpawnV0162PokemonFurretNormal,
    #[serde(rename = "SPAWN_V0163_POKEMON_HOOTHOOT")]
    SpawnV0163PokemonHoothoot,
    #[serde(rename = "SPAWN_V0163_POKEMON_HOOTHOOT_NORMAL")]
    SpawnV0163PokemonHoothootNormal,
    #[serde(rename = "SPAWN_V0164_POKEMON_NOCTOWL")]
    SpawnV0164PokemonNoctowl,
    #[serde(rename = "SPAWN_V0164_POKEMON_NOCTOWL_NORMAL")]
    SpawnV0164PokemonNoctowlNormal,
    #[serde(rename = "SPAWN_V0165_POKEMON_LEDYBA")]
    SpawnV0165PokemonLedyba,
    #[serde(rename = "SPAWN_V0165_POKEMON_LEDYBA_NORMAL")]
    SpawnV0165PokemonLedybaNormal,
    #[serde(rename = "SPAWN_V0166_POKEMON_LEDIAN")]
    SpawnV0166PokemonLedian,
    #[serde(rename = "SPAWN_V0166_POKEMON_LEDIAN_NORMAL")]
    SpawnV0166PokemonLedianNormal,
    #[serde(rename = "SPAWN_V0167_POKEMON_SPINARAK")]
    SpawnV0167PokemonSpinarak,
    #[serde(rename = "SPAWN_V0167_POKEMON_SPINARAK_NORMAL")]
    SpawnV0167PokemonSpinarakNormal,
    #[serde(rename = "SPAWN_V0168_POKEMON_ARIADOS")]
    SpawnV0168PokemonAriados,
    #[serde(rename = "SPAWN_V0168_POKEMON_ARIADOS_NORMAL")]
    SpawnV0168PokemonAriadosNormal,
    #[serde(rename = "SPAWN_V0169_POKEMON_CROBAT")]
    SpawnV0169PokemonCrobat,
    #[serde(rename = "SPAWN_V0169_POKEMON_CROBAT_NORMAL")]
    SpawnV0169PokemonCrobatNormal,
    #[serde(rename = "SPAWN_V0170_POKEMON_CHINCHOU")]
    SpawnV0170PokemonChinchou,
    #[serde(rename = "SPAWN_V0170_POKEMON_CHINCHOU_NORMAL")]
    SpawnV0170PokemonChinchouNormal,
    #[serde(rename = "SPAWN_V0171_POKEMON_LANTURN")]
    SpawnV0171PokemonLanturn,
    #[serde(rename = "SPAWN_V0171_POKEMON_LANTURN_NORMAL")]
    SpawnV0171PokemonLanturnNormal,
    #[serde(rename = "SPAWN_V0172_POKEMON_PICHU")]
    SpawnV0172PokemonPichu,
    #[serde(rename = "SPAWN_V0172_POKEMON_PICHU_NORMAL")]
    SpawnV0172PokemonPichuNormal,
    #[serde(rename = "SPAWN_V0173_POKEMON_CLEFFA")]
    SpawnV0173PokemonCleffa,
    #[serde(rename = "SPAWN_V0173_POKEMON_CLEFFA_NORMAL")]
    SpawnV0173PokemonCleffaNormal,
    #[serde(rename = "SPAWN_V0174_POKEMON_IGGLYBUFF")]
    SpawnV0174PokemonIgglybuff,
    #[serde(rename = "SPAWN_V0174_POKEMON_IGGLYBUFF_NORMAL")]
    SpawnV0174PokemonIgglybuffNormal,
    #[serde(rename = "SPAWN_V0175_POKEMON_TOGEPI")]
    SpawnV0175PokemonTogepi,
    #[serde(rename = "SPAWN_V0175_POKEMON_TOGEPI_NORMAL")]
    SpawnV0175PokemonTogepiNormal,
    #[serde(rename = "SPAWN_V0176_POKEMON_TOGETIC")]
    SpawnV0176PokemonTogetic,
    #[serde(rename = "SPAWN_V0176_POKEMON_TOGETIC_NORMAL")]
    SpawnV0176PokemonTogeticNormal,
    #[serde(rename = "SPAWN_V0177_POKEMON_NATU")]
    SpawnV0177PokemonNatu,
    #[serde(rename = "SPAWN_V0177_POKEMON_NATU_NORMAL")]
    SpawnV0177PokemonNatuNormal,
    #[serde(rename = "SPAWN_V0178_POKEMON_XATU")]
    SpawnV0178PokemonXatu,
    #[serde(rename = "SPAWN_V0178_POKEMON_XATU_NORMAL")]
    SpawnV0178PokemonXatuNormal,
    #[serde(rename = "SPAWN_V0179_POKEMON_MAREEP")]
    SpawnV0179PokemonMareep,
    #[serde(rename = "SPAWN_V0179_POKEMON_MAREEP_NORMAL")]
    SpawnV0179PokemonMareepNormal,
    #[serde(rename = "SPAWN_V0180_POKEMON_FLAAFFY")]
    SpawnV0180PokemonFlaaffy,
    #[serde(rename = "SPAWN_V0180_POKEMON_FLAAFFY_NORMAL")]
    SpawnV0180PokemonFlaaffyNormal,
    #[serde(rename = "SPAWN_V0181_POKEMON_AMPHAROS")]
    SpawnV0181PokemonAmpharos,
    #[serde(rename = "SPAWN_V0181_POKEMON_AMPHAROS_NORMAL")]
    SpawnV0181PokemonAmpharosNormal,
    #[serde(rename = "SPAWN_V0182_POKEMON_BELLOSSOM")]
    SpawnV0182PokemonBellossom,
    #[serde(rename = "SPAWN_V0182_POKEMON_BELLOSSOM_NORMAL")]
    SpawnV0182PokemonBellossomNormal,
    #[serde(rename = "SPAWN_V0183_POKEMON_MARILL")]
    SpawnV0183PokemonMarill,
    #[serde(rename = "SPAWN_V0183_POKEMON_MARILL_NORMAL")]
    SpawnV0183PokemonMarillNormal,
    #[serde(rename = "SPAWN_V0184_POKEMON_AZUMARILL")]
    SpawnV0184PokemonAzumarill,
    #[serde(rename = "SPAWN_V0184_POKEMON_AZUMARILL_NORMAL")]
    SpawnV0184PokemonAzumarillNormal,
    #[serde(rename = "SPAWN_V0185_POKEMON_SUDOWOODO")]
    SpawnV0185PokemonSudowoodo,
    #[serde(rename = "SPAWN_V0185_POKEMON_SUDOWOODO_NORMAL")]
    SpawnV0185PokemonSudowoodoNormal,
    #[serde(rename = "SPAWN_V0185_POKEMON_SUDOWOODO_WINTER_2025")]
    SpawnV0185PokemonSudowoodoWinter2025,
    #[serde(rename = "SPAWN_V0186_POKEMON_POLITOED")]
    SpawnV0186PokemonPolitoed,
    #[serde(rename = "SPAWN_V0186_POKEMON_POLITOED_NORMAL")]
    SpawnV0186PokemonPolitoedNormal,
    #[serde(rename = "SPAWN_V0187_POKEMON_HOPPIP")]
    SpawnV0187PokemonHoppip,
    #[serde(rename = "SPAWN_V0187_POKEMON_HOPPIP_NORMAL")]
    SpawnV0187PokemonHoppipNormal,
    #[serde(rename = "SPAWN_V0188_POKEMON_SKIPLOOM")]
    SpawnV0188PokemonSkiploom,
    #[serde(rename = "SPAWN_V0188_POKEMON_SKIPLOOM_NORMAL")]
    SpawnV0188PokemonSkiploomNormal,
    #[serde(rename = "SPAWN_V0189_POKEMON_JUMPLUFF")]
    SpawnV0189PokemonJumpluff,
    #[serde(rename = "SPAWN_V0189_POKEMON_JUMPLUFF_NORMAL")]
    SpawnV0189PokemonJumpluffNormal,
    #[serde(rename = "SPAWN_V0190_POKEMON_AIPOM")]
    SpawnV0190PokemonAipom,
    #[serde(rename = "SPAWN_V0190_POKEMON_AIPOM_NORMAL")]
    SpawnV0190PokemonAipomNormal,
    #[serde(rename = "SPAWN_V0191_POKEMON_SUNKERN")]
    SpawnV0191PokemonSunkern,
    #[serde(rename = "SPAWN_V0191_POKEMON_SUNKERN_NORMAL")]
    SpawnV0191PokemonSunkernNormal,
    #[serde(rename = "SPAWN_V0192_POKEMON_SUNFLORA")]
    SpawnV0192PokemonSunflora,
    #[serde(rename = "SPAWN_V0192_POKEMON_SUNFLORA_NORMAL")]
    SpawnV0192PokemonSunfloraNormal,
    #[serde(rename = "SPAWN_V0193_POKEMON_YANMA")]
    SpawnV0193PokemonYanma,
    #[serde(rename = "SPAWN_V0193_POKEMON_YANMA_NORMAL")]
    SpawnV0193PokemonYanmaNormal,
    #[serde(rename = "SPAWN_V0194_POKEMON_WOOPER")]
    SpawnV0194PokemonWooper,
    #[serde(rename = "SPAWN_V0194_POKEMON_WOOPER_NORMAL")]
    SpawnV0194PokemonWooperNormal,
    #[serde(rename = "SPAWN_V0194_POKEMON_WOOPER_PALDEA")]
    SpawnV0194PokemonWooperPaldea,
    #[serde(rename = "SPAWN_V0195_POKEMON_QUAGSIRE")]
    SpawnV0195PokemonQuagsire,
    #[serde(rename = "SPAWN_V0195_POKEMON_QUAGSIRE_NORMAL")]
    SpawnV0195PokemonQuagsireNormal,
    #[serde(rename = "SPAWN_V0196_POKEMON_ESPEON")]
    SpawnV0196PokemonEspeon,
    #[serde(rename = "SPAWN_V0196_POKEMON_ESPEON_GOFEST_2024_SSCARF")]
    SpawnV0196PokemonEspeonGofest2024Sscarf,
    #[serde(rename = "SPAWN_V0196_POKEMON_ESPEON_NORMAL")]
    SpawnV0196PokemonEspeonNormal,
    #[serde(rename = "SPAWN_V0197_POKEMON_UMBREON")]
    SpawnV0197PokemonUmbreon,
    #[serde(rename = "SPAWN_V0197_POKEMON_UMBREON_GOFEST_2024_MSCARF")]
    SpawnV0197PokemonUmbreonGofest2024Mscarf,
    #[serde(rename = "SPAWN_V0197_POKEMON_UMBREON_NORMAL")]
    SpawnV0197PokemonUmbreonNormal,
    #[serde(rename = "SPAWN_V0198_POKEMON_MURKROW")]
    SpawnV0198PokemonMurkrow,
    #[serde(rename = "SPAWN_V0198_POKEMON_MURKROW_NORMAL")]
    SpawnV0198PokemonMurkrowNormal,
    #[serde(rename = "SPAWN_V0199_POKEMON_SLOWKING")]
    SpawnV0199PokemonSlowking,
    #[serde(rename = "SPAWN_V0199_POKEMON_SLOWKING_2022")]
    SpawnV0199PokemonSlowking2022,
    #[serde(rename = "SPAWN_V0199_POKEMON_SLOWKING_GALARIAN")]
    SpawnV0199PokemonSlowkingGalarian,
    #[serde(rename = "SPAWN_V0199_POKEMON_SLOWKING_NORMAL")]
    SpawnV0199PokemonSlowkingNormal,
    #[serde(rename = "SPAWN_V0200_POKEMON_MISDREAVUS")]
    SpawnV0200PokemonMisdreavus,
    #[serde(rename = "SPAWN_V0200_POKEMON_MISDREAVUS_NORMAL")]
    SpawnV0200PokemonMisdreavusNormal,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN")]
    SpawnV0201PokemonUnown,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_A")]
    SpawnV0201PokemonUnownA,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_B")]
    SpawnV0201PokemonUnownB,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_C")]
    SpawnV0201PokemonUnownC,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_D")]
    SpawnV0201PokemonUnownD,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_E")]
    SpawnV0201PokemonUnownE,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_EXCLAMATION_POINT")]
    SpawnV0201PokemonUnownExclamationPoint,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_F")]
    SpawnV0201PokemonUnownF,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_G")]
    SpawnV0201PokemonUnownG,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_H")]
    SpawnV0201PokemonUnownH,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_I")]
    SpawnV0201PokemonUnownI,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_J")]
    SpawnV0201PokemonUnownJ,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_K")]
    SpawnV0201PokemonUnownK,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_L")]
    SpawnV0201PokemonUnownL,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_M")]
    SpawnV0201PokemonUnownM,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_N")]
    SpawnV0201PokemonUnownN,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_O")]
    SpawnV0201PokemonUnownO,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_P")]
    SpawnV0201PokemonUnownP,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_Q")]
    SpawnV0201PokemonUnownQ,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_QUESTION_MARK")]
    SpawnV0201PokemonUnownQuestionMark,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_R")]
    SpawnV0201PokemonUnownR,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_S")]
    SpawnV0201PokemonUnownS,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_T")]
    SpawnV0201PokemonUnownT,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_U")]
    SpawnV0201PokemonUnownU,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_V")]
    SpawnV0201PokemonUnownV,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_W")]
    SpawnV0201PokemonUnownW,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_X")]
    SpawnV0201PokemonUnownX,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_Y")]
    SpawnV0201PokemonUnownY,
    #[serde(rename = "SPAWN_V0201_POKEMON_UNOWN_Z")]
    SpawnV0201PokemonUnownZ,
    #[serde(rename = "SPAWN_V0202_POKEMON_WOBBUFFET")]
    SpawnV0202PokemonWobbuffet,
    #[serde(rename = "SPAWN_V0202_POKEMON_WOBBUFFET_NORMAL")]
    SpawnV0202PokemonWobbuffetNormal,
    #[serde(rename = "SPAWN_V0203_POKEMON_GIRAFARIG")]
    SpawnV0203PokemonGirafarig,
    #[serde(rename = "SPAWN_V0203_POKEMON_GIRAFARIG_NORMAL")]
    SpawnV0203PokemonGirafarigNormal,
    #[serde(rename = "SPAWN_V0204_POKEMON_PINECO")]
    SpawnV0204PokemonPineco,
    #[serde(rename = "SPAWN_V0204_POKEMON_PINECO_NORMAL")]
    SpawnV0204PokemonPinecoNormal,
    #[serde(rename = "SPAWN_V0205_POKEMON_FORRETRESS")]
    SpawnV0205PokemonForretress,
    #[serde(rename = "SPAWN_V0205_POKEMON_FORRETRESS_NORMAL")]
    SpawnV0205PokemonForretressNormal,
    #[serde(rename = "SPAWN_V0206_POKEMON_DUNSPARCE")]
    SpawnV0206PokemonDunsparce,
    #[serde(rename = "SPAWN_V0206_POKEMON_DUNSPARCE_NORMAL")]
    SpawnV0206PokemonDunsparceNormal,
    #[serde(rename = "SPAWN_V0207_POKEMON_GLIGAR")]
    SpawnV0207PokemonGligar,
    #[serde(rename = "SPAWN_V0207_POKEMON_GLIGAR_NORMAL")]
    SpawnV0207PokemonGligarNormal,
    #[serde(rename = "SPAWN_V0208_POKEMON_STEELIX")]
    SpawnV0208PokemonSteelix,
    #[serde(rename = "SPAWN_V0208_POKEMON_STEELIX_NORMAL")]
    SpawnV0208PokemonSteelixNormal,
    #[serde(rename = "SPAWN_V0209_POKEMON_SNUBBULL")]
    SpawnV0209PokemonSnubbull,
    #[serde(rename = "SPAWN_V0209_POKEMON_SNUBBULL_NORMAL")]
    SpawnV0209PokemonSnubbullNormal,
    #[serde(rename = "SPAWN_V0210_POKEMON_GRANBULL")]
    SpawnV0210PokemonGranbull,
    #[serde(rename = "SPAWN_V0210_POKEMON_GRANBULL_NORMAL")]
    SpawnV0210PokemonGranbullNormal,
    #[serde(rename = "SPAWN_V0211_POKEMON_QWILFISH")]
    SpawnV0211PokemonQwilfish,
    #[serde(rename = "SPAWN_V0211_POKEMON_QWILFISH_HISUIAN")]
    SpawnV0211PokemonQwilfishHisuian,
    #[serde(rename = "SPAWN_V0211_POKEMON_QWILFISH_NORMAL")]
    SpawnV0211PokemonQwilfishNormal,
    #[serde(rename = "SPAWN_V0212_POKEMON_SCIZOR")]
    SpawnV0212PokemonScizor,
    #[serde(rename = "SPAWN_V0212_POKEMON_SCIZOR_NORMAL")]
    SpawnV0212PokemonScizorNormal,
    #[serde(rename = "SPAWN_V0213_POKEMON_SHUCKLE")]
    SpawnV0213PokemonShuckle,
    #[serde(rename = "SPAWN_V0213_POKEMON_SHUCKLE_NORMAL")]
    SpawnV0213PokemonShuckleNormal,
    #[serde(rename = "SPAWN_V0214_POKEMON_HERACROSS")]
    SpawnV0214PokemonHeracross,
    #[serde(rename = "SPAWN_V0214_POKEMON_HERACROSS_NORMAL")]
    SpawnV0214PokemonHeracrossNormal,
    #[serde(rename = "SPAWN_V0215_POKEMON_SNEASEL")]
    SpawnV0215PokemonSneasel,
    #[serde(rename = "SPAWN_V0215_POKEMON_SNEASEL_HISUIAN")]
    SpawnV0215PokemonSneaselHisuian,
    #[serde(rename = "SPAWN_V0215_POKEMON_SNEASEL_NORMAL")]
    SpawnV0215PokemonSneaselNormal,
    #[serde(rename = "SPAWN_V0216_POKEMON_TEDDIURSA")]
    SpawnV0216PokemonTeddiursa,
    #[serde(rename = "SPAWN_V0216_POKEMON_TEDDIURSA_NORMAL")]
    SpawnV0216PokemonTeddiursaNormal,
    #[serde(rename = "SPAWN_V0217_POKEMON_URSARING")]
    SpawnV0217PokemonUrsaring,
    #[serde(rename = "SPAWN_V0217_POKEMON_URSARING_NORMAL")]
    SpawnV0217PokemonUrsaringNormal,
    #[serde(rename = "SPAWN_V0218_POKEMON_SLUGMA")]
    SpawnV0218PokemonSlugma,
    #[serde(rename = "SPAWN_V0218_POKEMON_SLUGMA_NORMAL")]
    SpawnV0218PokemonSlugmaNormal,
    #[serde(rename = "SPAWN_V0219_POKEMON_MAGCARGO")]
    SpawnV0219PokemonMagcargo,
    #[serde(rename = "SPAWN_V0219_POKEMON_MAGCARGO_NORMAL")]
    SpawnV0219PokemonMagcargoNormal,
    #[serde(rename = "SPAWN_V0220_POKEMON_SWINUB")]
    SpawnV0220PokemonSwinub,
    #[serde(rename = "SPAWN_V0220_POKEMON_SWINUB_NORMAL")]
    SpawnV0220PokemonSwinubNormal,
    #[serde(rename = "SPAWN_V0221_POKEMON_PILOSWINE")]
    SpawnV0221PokemonPiloswine,
    #[serde(rename = "SPAWN_V0221_POKEMON_PILOSWINE_NORMAL")]
    SpawnV0221PokemonPiloswineNormal,
    #[serde(rename = "SPAWN_V0222_POKEMON_CORSOLA")]
    SpawnV0222PokemonCorsola,
    #[serde(rename = "SPAWN_V0222_POKEMON_CORSOLA_GALARIAN")]
    SpawnV0222PokemonCorsolaGalarian,
    #[serde(rename = "SPAWN_V0222_POKEMON_CORSOLA_NORMAL")]
    SpawnV0222PokemonCorsolaNormal,
    #[serde(rename = "SPAWN_V0222_POKEMON_CORSOLA_SPRING_2026")]
    SpawnV0222PokemonCorsolaSpring2026,
    #[serde(rename = "SPAWN_V0223_POKEMON_REMORAID")]
    SpawnV0223PokemonRemoraid,
    #[serde(rename = "SPAWN_V0223_POKEMON_REMORAID_NORMAL")]
    SpawnV0223PokemonRemoraidNormal,
    #[serde(rename = "SPAWN_V0224_POKEMON_OCTILLERY")]
    SpawnV0224PokemonOctillery,
    #[serde(rename = "SPAWN_V0224_POKEMON_OCTILLERY_NORMAL")]
    SpawnV0224PokemonOctilleryNormal,
    #[serde(rename = "SPAWN_V0225_POKEMON_DELIBIRD")]
    SpawnV0225PokemonDelibird,
    #[serde(rename = "SPAWN_V0225_POKEMON_DELIBIRD_NORMAL")]
    SpawnV0225PokemonDelibirdNormal,
    #[serde(rename = "SPAWN_V0225_POKEMON_DELIBIRD_WINTER_2020")]
    SpawnV0225PokemonDelibirdWinter2020,
    #[serde(rename = "SPAWN_V0226_POKEMON_MANTINE")]
    SpawnV0226PokemonMantine,
    #[serde(rename = "SPAWN_V0226_POKEMON_MANTINE_NORMAL")]
    SpawnV0226PokemonMantineNormal,
    #[serde(rename = "SPAWN_V0227_POKEMON_SKARMORY")]
    SpawnV0227PokemonSkarmory,
    #[serde(rename = "SPAWN_V0227_POKEMON_SKARMORY_NORMAL")]
    SpawnV0227PokemonSkarmoryNormal,
    #[serde(rename = "SPAWN_V0228_POKEMON_HOUNDOUR")]
    SpawnV0228PokemonHoundour,
    #[serde(rename = "SPAWN_V0228_POKEMON_HOUNDOUR_NORMAL")]
    SpawnV0228PokemonHoundourNormal,
    #[serde(rename = "SPAWN_V0229_POKEMON_HOUNDOOM")]
    SpawnV0229PokemonHoundoom,
    #[serde(rename = "SPAWN_V0229_POKEMON_HOUNDOOM_NORMAL")]
    SpawnV0229PokemonHoundoomNormal,
    #[serde(rename = "SPAWN_V0230_POKEMON_KINGDRA")]
    SpawnV0230PokemonKingdra,
    #[serde(rename = "SPAWN_V0230_POKEMON_KINGDRA_NORMAL")]
    SpawnV0230PokemonKingdraNormal,
    #[serde(rename = "SPAWN_V0231_POKEMON_PHANPY")]
    SpawnV0231PokemonPhanpy,
    #[serde(rename = "SPAWN_V0231_POKEMON_PHANPY_NORMAL")]
    SpawnV0231PokemonPhanpyNormal,
    #[serde(rename = "SPAWN_V0232_POKEMON_DONPHAN")]
    SpawnV0232PokemonDonphan,
    #[serde(rename = "SPAWN_V0232_POKEMON_DONPHAN_NORMAL")]
    SpawnV0232PokemonDonphanNormal,
    #[serde(rename = "SPAWN_V0233_POKEMON_PORYGON2")]
    SpawnV0233PokemonPorygon2,
    #[serde(rename = "SPAWN_V0233_POKEMON_PORYGON2_NORMAL")]
    SpawnV0233PokemonPorygon2Normal,
    #[serde(rename = "SPAWN_V0234_POKEMON_STANTLER")]
    SpawnV0234PokemonStantler,
    #[serde(rename = "SPAWN_V0234_POKEMON_STANTLER_NORMAL")]
    SpawnV0234PokemonStantlerNormal,
    #[serde(rename = "SPAWN_V0235_POKEMON_SMEARGLE")]
    SpawnV0235PokemonSmeargle,
    #[serde(rename = "SPAWN_V0235_POKEMON_SMEARGLE_NORMAL")]
    SpawnV0235PokemonSmeargleNormal,
    #[serde(rename = "SPAWN_V0236_POKEMON_TYROGUE")]
    SpawnV0236PokemonTyrogue,
    #[serde(rename = "SPAWN_V0236_POKEMON_TYROGUE_NORMAL")]
    SpawnV0236PokemonTyrogueNormal,
    #[serde(rename = "SPAWN_V0237_POKEMON_HITMONTOP")]
    SpawnV0237PokemonHitmontop,
    #[serde(rename = "SPAWN_V0237_POKEMON_HITMONTOP_NORMAL")]
    SpawnV0237PokemonHitmontopNormal,
    #[serde(rename = "SPAWN_V0238_POKEMON_SMOOCHUM")]
    SpawnV0238PokemonSmoochum,
    #[serde(rename = "SPAWN_V0238_POKEMON_SMOOCHUM_NORMAL")]
    SpawnV0238PokemonSmoochumNormal,
    #[serde(rename = "SPAWN_V0239_POKEMON_ELEKID")]
    SpawnV0239PokemonElekid,
    #[serde(rename = "SPAWN_V0239_POKEMON_ELEKID_NORMAL")]
    SpawnV0239PokemonElekidNormal,
    #[serde(rename = "SPAWN_V0240_POKEMON_MAGBY")]
    SpawnV0240PokemonMagby,
    #[serde(rename = "SPAWN_V0240_POKEMON_MAGBY_NORMAL")]
    SpawnV0240PokemonMagbyNormal,
    #[serde(rename = "SPAWN_V0241_POKEMON_MILTANK")]
    SpawnV0241PokemonMiltank,
    #[serde(rename = "SPAWN_V0241_POKEMON_MILTANK_NORMAL")]
    SpawnV0241PokemonMiltankNormal,
    #[serde(rename = "SPAWN_V0242_POKEMON_BLISSEY")]
    SpawnV0242PokemonBlissey,
    #[serde(rename = "SPAWN_V0242_POKEMON_BLISSEY_NORMAL")]
    SpawnV0242PokemonBlisseyNormal,
    #[serde(rename = "SPAWN_V0243_POKEMON_RAIKOU")]
    SpawnV0243PokemonRaikou,
    #[serde(rename = "SPAWN_V0243_POKEMON_RAIKOU_NORMAL")]
    SpawnV0243PokemonRaikouNormal,
    #[serde(rename = "SPAWN_V0243_POKEMON_RAIKOU_S")]
    SpawnV0243PokemonRaikouS,
    #[serde(rename = "SPAWN_V0244_POKEMON_ENTEI")]
    SpawnV0244PokemonEntei,
    #[serde(rename = "SPAWN_V0244_POKEMON_ENTEI_NORMAL")]
    SpawnV0244PokemonEnteiNormal,
    #[serde(rename = "SPAWN_V0244_POKEMON_ENTEI_S")]
    SpawnV0244PokemonEnteiS,
    #[serde(rename = "SPAWN_V0245_POKEMON_SUICUNE")]
    SpawnV0245PokemonSuicune,
    #[serde(rename = "SPAWN_V0245_POKEMON_SUICUNE_NORMAL")]
    SpawnV0245PokemonSuicuneNormal,
    #[serde(rename = "SPAWN_V0245_POKEMON_SUICUNE_S")]
    SpawnV0245PokemonSuicuneS,
    #[serde(rename = "SPAWN_V0246_POKEMON_LARVITAR")]
    SpawnV0246PokemonLarvitar,
    #[serde(rename = "SPAWN_V0246_POKEMON_LARVITAR_NORMAL")]
    SpawnV0246PokemonLarvitarNormal,
    #[serde(rename = "SPAWN_V0247_POKEMON_PUPITAR")]
    SpawnV0247PokemonPupitar,
    #[serde(rename = "SPAWN_V0247_POKEMON_PUPITAR_NORMAL")]
    SpawnV0247PokemonPupitarNormal,
    #[serde(rename = "SPAWN_V0248_POKEMON_TYRANITAR")]
    SpawnV0248PokemonTyranitar,
    #[serde(rename = "SPAWN_V0248_POKEMON_TYRANITAR_NORMAL")]
    SpawnV0248PokemonTyranitarNormal,
    #[serde(rename = "SPAWN_V0249_POKEMON_LUGIA")]
    SpawnV0249PokemonLugia,
    #[serde(rename = "SPAWN_V0249_POKEMON_LUGIA_NORMAL")]
    SpawnV0249PokemonLugiaNormal,
    #[serde(rename = "SPAWN_V0249_POKEMON_LUGIA_S")]
    SpawnV0249PokemonLugiaS,
    #[serde(rename = "SPAWN_V0250_POKEMON_HO_OH")]
    SpawnV0250PokemonHoOh,
    #[serde(rename = "SPAWN_V0250_POKEMON_HO_OH_NORMAL")]
    SpawnV0250PokemonHoOhNormal,
    #[serde(rename = "SPAWN_V0250_POKEMON_HO_OH_S")]
    SpawnV0250PokemonHoOhS,
    #[serde(rename = "SPAWN_V0251_POKEMON_CELEBI")]
    SpawnV0251PokemonCelebi,
    #[serde(rename = "SPAWN_V0251_POKEMON_CELEBI_NORMAL")]
    SpawnV0251PokemonCelebiNormal,
    #[serde(rename = "SPAWN_V0252_POKEMON_TREECKO")]
    SpawnV0252PokemonTreecko,
    #[serde(rename = "SPAWN_V0252_POKEMON_TREECKO_NORMAL")]
    SpawnV0252PokemonTreeckoNormal,
    #[serde(rename = "SPAWN_V0253_POKEMON_GROVYLE")]
    SpawnV0253PokemonGrovyle,
    #[serde(rename = "SPAWN_V0253_POKEMON_GROVYLE_NORMAL")]
    SpawnV0253PokemonGrovyleNormal,
    #[serde(rename = "SPAWN_V0254_POKEMON_SCEPTILE")]
    SpawnV0254PokemonSceptile,
    #[serde(rename = "SPAWN_V0254_POKEMON_SCEPTILE_NORMAL")]
    SpawnV0254PokemonSceptileNormal,
    #[serde(rename = "SPAWN_V0255_POKEMON_TORCHIC")]
    SpawnV0255PokemonTorchic,
    #[serde(rename = "SPAWN_V0255_POKEMON_TORCHIC_NORMAL")]
    SpawnV0255PokemonTorchicNormal,
    #[serde(rename = "SPAWN_V0256_POKEMON_COMBUSKEN")]
    SpawnV0256PokemonCombusken,
    #[serde(rename = "SPAWN_V0256_POKEMON_COMBUSKEN_NORMAL")]
    SpawnV0256PokemonCombuskenNormal,
    #[serde(rename = "SPAWN_V0257_POKEMON_BLAZIKEN")]
    SpawnV0257PokemonBlaziken,
    #[serde(rename = "SPAWN_V0257_POKEMON_BLAZIKEN_NORMAL")]
    SpawnV0257PokemonBlazikenNormal,
    #[serde(rename = "SPAWN_V0258_POKEMON_MUDKIP")]
    SpawnV0258PokemonMudkip,
    #[serde(rename = "SPAWN_V0258_POKEMON_MUDKIP_NORMAL")]
    SpawnV0258PokemonMudkipNormal,
    #[serde(rename = "SPAWN_V0259_POKEMON_MARSHTOMP")]
    SpawnV0259PokemonMarshtomp,
    #[serde(rename = "SPAWN_V0259_POKEMON_MARSHTOMP_NORMAL")]
    SpawnV0259PokemonMarshtompNormal,
    #[serde(rename = "SPAWN_V0260_POKEMON_SWAMPERT")]
    SpawnV0260PokemonSwampert,
    #[serde(rename = "SPAWN_V0260_POKEMON_SWAMPERT_NORMAL")]
    SpawnV0260PokemonSwampertNormal,
    #[serde(rename = "SPAWN_V0261_POKEMON_POOCHYENA")]
    SpawnV0261PokemonPoochyena,
    #[serde(rename = "SPAWN_V0261_POKEMON_POOCHYENA_NORMAL")]
    SpawnV0261PokemonPoochyenaNormal,
    #[serde(rename = "SPAWN_V0262_POKEMON_MIGHTYENA")]
    SpawnV0262PokemonMightyena,
    #[serde(rename = "SPAWN_V0262_POKEMON_MIGHTYENA_NORMAL")]
    SpawnV0262PokemonMightyenaNormal,
    #[serde(rename = "SPAWN_V0263_POKEMON_ZIGZAGOON")]
    SpawnV0263PokemonZigzagoon,
    #[serde(rename = "SPAWN_V0263_POKEMON_ZIGZAGOON_GALARIAN")]
    SpawnV0263PokemonZigzagoonGalarian,
    #[serde(rename = "SPAWN_V0263_POKEMON_ZIGZAGOON_NORMAL")]
    SpawnV0263PokemonZigzagoonNormal,
    #[serde(rename = "SPAWN_V0264_POKEMON_LINOONE")]
    SpawnV0264PokemonLinoone,
    #[serde(rename = "SPAWN_V0264_POKEMON_LINOONE_GALARIAN")]
    SpawnV0264PokemonLinooneGalarian,
    #[serde(rename = "SPAWN_V0264_POKEMON_LINOONE_NORMAL")]
    SpawnV0264PokemonLinooneNormal,
    #[serde(rename = "SPAWN_V0265_POKEMON_WURMPLE")]
    SpawnV0265PokemonWurmple,
    #[serde(rename = "SPAWN_V0265_POKEMON_WURMPLE_NORMAL")]
    SpawnV0265PokemonWurmpleNormal,
    #[serde(rename = "SPAWN_V0266_POKEMON_SILCOON")]
    SpawnV0266PokemonSilcoon,
    #[serde(rename = "SPAWN_V0266_POKEMON_SILCOON_NORMAL")]
    SpawnV0266PokemonSilcoonNormal,
    #[serde(rename = "SPAWN_V0267_POKEMON_BEAUTIFLY")]
    SpawnV0267PokemonBeautifly,
    #[serde(rename = "SPAWN_V0267_POKEMON_BEAUTIFLY_NORMAL")]
    SpawnV0267PokemonBeautiflyNormal,
    #[serde(rename = "SPAWN_V0268_POKEMON_CASCOON")]
    SpawnV0268PokemonCascoon,
    #[serde(rename = "SPAWN_V0268_POKEMON_CASCOON_NORMAL")]
    SpawnV0268PokemonCascoonNormal,
    #[serde(rename = "SPAWN_V0269_POKEMON_DUSTOX")]
    SpawnV0269PokemonDustox,
    #[serde(rename = "SPAWN_V0269_POKEMON_DUSTOX_NORMAL")]
    SpawnV0269PokemonDustoxNormal,
    #[serde(rename = "SPAWN_V0270_POKEMON_LOTAD")]
    SpawnV0270PokemonLotad,
    #[serde(rename = "SPAWN_V0270_POKEMON_LOTAD_NORMAL")]
    SpawnV0270PokemonLotadNormal,
    #[serde(rename = "SPAWN_V0271_POKEMON_LOMBRE")]
    SpawnV0271PokemonLombre,
    #[serde(rename = "SPAWN_V0271_POKEMON_LOMBRE_NORMAL")]
    SpawnV0271PokemonLombreNormal,
    #[serde(rename = "SPAWN_V0272_POKEMON_LUDICOLO")]
    SpawnV0272PokemonLudicolo,
    #[serde(rename = "SPAWN_V0272_POKEMON_LUDICOLO_NORMAL")]
    SpawnV0272PokemonLudicoloNormal,
    #[serde(rename = "SPAWN_V0273_POKEMON_SEEDOT")]
    SpawnV0273PokemonSeedot,
    #[serde(rename = "SPAWN_V0273_POKEMON_SEEDOT_NORMAL")]
    SpawnV0273PokemonSeedotNormal,
    #[serde(rename = "SPAWN_V0274_POKEMON_NUZLEAF")]
    SpawnV0274PokemonNuzleaf,
    #[serde(rename = "SPAWN_V0274_POKEMON_NUZLEAF_NORMAL")]
    SpawnV0274PokemonNuzleafNormal,
    #[serde(rename = "SPAWN_V0275_POKEMON_SHIFTRY")]
    SpawnV0275PokemonShiftry,
    #[serde(rename = "SPAWN_V0275_POKEMON_SHIFTRY_NORMAL")]
    SpawnV0275PokemonShiftryNormal,
    #[serde(rename = "SPAWN_V0276_POKEMON_TAILLOW")]
    SpawnV0276PokemonTaillow,
    #[serde(rename = "SPAWN_V0276_POKEMON_TAILLOW_NORMAL")]
    SpawnV0276PokemonTaillowNormal,
    #[serde(rename = "SPAWN_V0277_POKEMON_SWELLOW")]
    SpawnV0277PokemonSwellow,
    #[serde(rename = "SPAWN_V0277_POKEMON_SWELLOW_NORMAL")]
    SpawnV0277PokemonSwellowNormal,
    #[serde(rename = "SPAWN_V0278_POKEMON_WINGULL")]
    SpawnV0278PokemonWingull,
    #[serde(rename = "SPAWN_V0278_POKEMON_WINGULL_NORMAL")]
    SpawnV0278PokemonWingullNormal,
    #[serde(rename = "SPAWN_V0279_POKEMON_PELIPPER")]
    SpawnV0279PokemonPelipper,
    #[serde(rename = "SPAWN_V0279_POKEMON_PELIPPER_NORMAL")]
    SpawnV0279PokemonPelipperNormal,
    #[serde(rename = "SPAWN_V0280_POKEMON_RALTS")]
    SpawnV0280PokemonRalts,
    #[serde(rename = "SPAWN_V0280_POKEMON_RALTS_NORMAL")]
    SpawnV0280PokemonRaltsNormal,
    #[serde(rename = "SPAWN_V0281_POKEMON_KIRLIA")]
    SpawnV0281PokemonKirlia,
    #[serde(rename = "SPAWN_V0281_POKEMON_KIRLIA_NORMAL")]
    SpawnV0281PokemonKirliaNormal,
    #[serde(rename = "SPAWN_V0282_POKEMON_GARDEVOIR")]
    SpawnV0282PokemonGardevoir,
    #[serde(rename = "SPAWN_V0282_POKEMON_GARDEVOIR_NORMAL")]
    SpawnV0282PokemonGardevoirNormal,
    #[serde(rename = "SPAWN_V0283_POKEMON_SURSKIT")]
    SpawnV0283PokemonSurskit,
    #[serde(rename = "SPAWN_V0283_POKEMON_SURSKIT_NORMAL")]
    SpawnV0283PokemonSurskitNormal,
    #[serde(rename = "SPAWN_V0284_POKEMON_MASQUERAIN")]
    SpawnV0284PokemonMasquerain,
    #[serde(rename = "SPAWN_V0284_POKEMON_MASQUERAIN_NORMAL")]
    SpawnV0284PokemonMasquerainNormal,
    #[serde(rename = "SPAWN_V0285_POKEMON_SHROOMISH")]
    SpawnV0285PokemonShroomish,
    #[serde(rename = "SPAWN_V0285_POKEMON_SHROOMISH_NORMAL")]
    SpawnV0285PokemonShroomishNormal,
    #[serde(rename = "SPAWN_V0286_POKEMON_BRELOOM")]
    SpawnV0286PokemonBreloom,
    #[serde(rename = "SPAWN_V0286_POKEMON_BRELOOM_NORMAL")]
    SpawnV0286PokemonBreloomNormal,
    #[serde(rename = "SPAWN_V0287_POKEMON_SLAKOTH")]
    SpawnV0287PokemonSlakoth,
    #[serde(rename = "SPAWN_V0287_POKEMON_SLAKOTH_NORMAL")]
    SpawnV0287PokemonSlakothNormal,
    #[serde(rename = "SPAWN_V0288_POKEMON_VIGOROTH")]
    SpawnV0288PokemonVigoroth,
    #[serde(rename = "SPAWN_V0288_POKEMON_VIGOROTH_NORMAL")]
    SpawnV0288PokemonVigorothNormal,
    #[serde(rename = "SPAWN_V0289_POKEMON_SLAKING")]
    SpawnV0289PokemonSlaking,
    #[serde(rename = "SPAWN_V0289_POKEMON_SLAKING_NORMAL")]
    SpawnV0289PokemonSlakingNormal,
    #[serde(rename = "SPAWN_V0290_POKEMON_NINCADA")]
    SpawnV0290PokemonNincada,
    #[serde(rename = "SPAWN_V0290_POKEMON_NINCADA_NORMAL")]
    SpawnV0290PokemonNincadaNormal,
    #[serde(rename = "SPAWN_V0291_POKEMON_NINJASK")]
    SpawnV0291PokemonNinjask,
    #[serde(rename = "SPAWN_V0291_POKEMON_NINJASK_NORMAL")]
    SpawnV0291PokemonNinjaskNormal,
    #[serde(rename = "SPAWN_V0292_POKEMON_SHEDINJA")]
    SpawnV0292PokemonShedinja,
    #[serde(rename = "SPAWN_V0292_POKEMON_SHEDINJA_NORMAL")]
    SpawnV0292PokemonShedinjaNormal,
    #[serde(rename = "SPAWN_V0293_POKEMON_WHISMUR")]
    SpawnV0293PokemonWhismur,
    #[serde(rename = "SPAWN_V0293_POKEMON_WHISMUR_NORMAL")]
    SpawnV0293PokemonWhismurNormal,
    #[serde(rename = "SPAWN_V0294_POKEMON_LOUDRED")]
    SpawnV0294PokemonLoudred,
    #[serde(rename = "SPAWN_V0294_POKEMON_LOUDRED_NORMAL")]
    SpawnV0294PokemonLoudredNormal,
    #[serde(rename = "SPAWN_V0295_POKEMON_EXPLOUD")]
    SpawnV0295PokemonExploud,
    #[serde(rename = "SPAWN_V0295_POKEMON_EXPLOUD_NORMAL")]
    SpawnV0295PokemonExploudNormal,
    #[serde(rename = "SPAWN_V0296_POKEMON_MAKUHITA")]
    SpawnV0296PokemonMakuhita,
    #[serde(rename = "SPAWN_V0296_POKEMON_MAKUHITA_NORMAL")]
    SpawnV0296PokemonMakuhitaNormal,
    #[serde(rename = "SPAWN_V0297_POKEMON_HARIYAMA")]
    SpawnV0297PokemonHariyama,
    #[serde(rename = "SPAWN_V0297_POKEMON_HARIYAMA_NORMAL")]
    SpawnV0297PokemonHariyamaNormal,
    #[serde(rename = "SPAWN_V0298_POKEMON_AZURILL")]
    SpawnV0298PokemonAzurill,
    #[serde(rename = "SPAWN_V0298_POKEMON_AZURILL_NORMAL")]
    SpawnV0298PokemonAzurillNormal,
    #[serde(rename = "SPAWN_V0299_POKEMON_NOSEPASS")]
    SpawnV0299PokemonNosepass,
    #[serde(rename = "SPAWN_V0299_POKEMON_NOSEPASS_NORMAL")]
    SpawnV0299PokemonNosepassNormal,
    #[serde(rename = "SPAWN_V0300_POKEMON_SKITTY")]
    SpawnV0300PokemonSkitty,
    #[serde(rename = "SPAWN_V0300_POKEMON_SKITTY_NORMAL")]
    SpawnV0300PokemonSkittyNormal,
    #[serde(rename = "SPAWN_V0301_POKEMON_DELCATTY")]
    SpawnV0301PokemonDelcatty,
    #[serde(rename = "SPAWN_V0301_POKEMON_DELCATTY_NORMAL")]
    SpawnV0301PokemonDelcattyNormal,
    #[serde(rename = "SPAWN_V0302_POKEMON_SABLEYE")]
    SpawnV0302PokemonSableye,
    #[serde(rename = "SPAWN_V0302_POKEMON_SABLEYE_COSTUME_2020")]
    SpawnV0302PokemonSableyeCostume2020,
    #[serde(rename = "SPAWN_V0302_POKEMON_SABLEYE_NORMAL")]
    SpawnV0302PokemonSableyeNormal,
    #[serde(rename = "SPAWN_V0303_POKEMON_MAWILE")]
    SpawnV0303PokemonMawile,
    #[serde(rename = "SPAWN_V0303_POKEMON_MAWILE_NORMAL")]
    SpawnV0303PokemonMawileNormal,
    #[serde(rename = "SPAWN_V0304_POKEMON_ARON")]
    SpawnV0304PokemonAron,
    #[serde(rename = "SPAWN_V0304_POKEMON_ARON_NORMAL")]
    SpawnV0304PokemonAronNormal,
    #[serde(rename = "SPAWN_V0305_POKEMON_LAIRON")]
    SpawnV0305PokemonLairon,
    #[serde(rename = "SPAWN_V0305_POKEMON_LAIRON_NORMAL")]
    SpawnV0305PokemonLaironNormal,
    #[serde(rename = "SPAWN_V0306_POKEMON_AGGRON")]
    SpawnV0306PokemonAggron,
    #[serde(rename = "SPAWN_V0306_POKEMON_AGGRON_NORMAL")]
    SpawnV0306PokemonAggronNormal,
    #[serde(rename = "SPAWN_V0307_POKEMON_MEDITITE")]
    SpawnV0307PokemonMeditite,
    #[serde(rename = "SPAWN_V0307_POKEMON_MEDITITE_NORMAL")]
    SpawnV0307PokemonMedititeNormal,
    #[serde(rename = "SPAWN_V0308_POKEMON_MEDICHAM")]
    SpawnV0308PokemonMedicham,
    #[serde(rename = "SPAWN_V0308_POKEMON_MEDICHAM_NORMAL")]
    SpawnV0308PokemonMedichamNormal,
    #[serde(rename = "SPAWN_V0309_POKEMON_ELECTRIKE")]
    SpawnV0309PokemonElectrike,
    #[serde(rename = "SPAWN_V0309_POKEMON_ELECTRIKE_NORMAL")]
    SpawnV0309PokemonElectrikeNormal,
    #[serde(rename = "SPAWN_V0310_POKEMON_MANECTRIC")]
    SpawnV0310PokemonManectric,
    #[serde(rename = "SPAWN_V0310_POKEMON_MANECTRIC_NORMAL")]
    SpawnV0310PokemonManectricNormal,
    #[serde(rename = "SPAWN_V0311_POKEMON_PLUSLE")]
    SpawnV0311PokemonPlusle,
    #[serde(rename = "SPAWN_V0311_POKEMON_PLUSLE_NORMAL")]
    SpawnV0311PokemonPlusleNormal,
    #[serde(rename = "SPAWN_V0312_POKEMON_MINUN")]
    SpawnV0312PokemonMinun,
    #[serde(rename = "SPAWN_V0312_POKEMON_MINUN_NORMAL")]
    SpawnV0312PokemonMinunNormal,
    #[serde(rename = "SPAWN_V0313_POKEMON_VOLBEAT")]
    SpawnV0313PokemonVolbeat,
    #[serde(rename = "SPAWN_V0313_POKEMON_VOLBEAT_NORMAL")]
    SpawnV0313PokemonVolbeatNormal,
    #[serde(rename = "SPAWN_V0314_POKEMON_ILLUMISE")]
    SpawnV0314PokemonIllumise,
    #[serde(rename = "SPAWN_V0314_POKEMON_ILLUMISE_NORMAL")]
    SpawnV0314PokemonIllumiseNormal,
    #[serde(rename = "SPAWN_V0315_POKEMON_ROSELIA")]
    SpawnV0315PokemonRoselia,
    #[serde(rename = "SPAWN_V0315_POKEMON_ROSELIA_NORMAL")]
    SpawnV0315PokemonRoseliaNormal,
    #[serde(rename = "SPAWN_V0316_POKEMON_GULPIN")]
    SpawnV0316PokemonGulpin,
    #[serde(rename = "SPAWN_V0316_POKEMON_GULPIN_NORMAL")]
    SpawnV0316PokemonGulpinNormal,
    #[serde(rename = "SPAWN_V0317_POKEMON_SWALOT")]
    SpawnV0317PokemonSwalot,
    #[serde(rename = "SPAWN_V0317_POKEMON_SWALOT_NORMAL")]
    SpawnV0317PokemonSwalotNormal,
    #[serde(rename = "SPAWN_V0318_POKEMON_CARVANHA")]
    SpawnV0318PokemonCarvanha,
    #[serde(rename = "SPAWN_V0318_POKEMON_CARVANHA_NORMAL")]
    SpawnV0318PokemonCarvanhaNormal,
    #[serde(rename = "SPAWN_V0319_POKEMON_SHARPEDO")]
    SpawnV0319PokemonSharpedo,
    #[serde(rename = "SPAWN_V0319_POKEMON_SHARPEDO_NORMAL")]
    SpawnV0319PokemonSharpedoNormal,
    #[serde(rename = "SPAWN_V0320_POKEMON_WAILMER")]
    SpawnV0320PokemonWailmer,
    #[serde(rename = "SPAWN_V0320_POKEMON_WAILMER_NORMAL")]
    SpawnV0320PokemonWailmerNormal,
    #[serde(rename = "SPAWN_V0321_POKEMON_WAILORD")]
    SpawnV0321PokemonWailord,
    #[serde(rename = "SPAWN_V0321_POKEMON_WAILORD_NORMAL")]
    SpawnV0321PokemonWailordNormal,
    #[serde(rename = "SPAWN_V0322_POKEMON_NUMEL")]
    SpawnV0322PokemonNumel,
    #[serde(rename = "SPAWN_V0322_POKEMON_NUMEL_NORMAL")]
    SpawnV0322PokemonNumelNormal,
    #[serde(rename = "SPAWN_V0323_POKEMON_CAMERUPT")]
    SpawnV0323PokemonCamerupt,
    #[serde(rename = "SPAWN_V0323_POKEMON_CAMERUPT_NORMAL")]
    SpawnV0323PokemonCameruptNormal,
    #[serde(rename = "SPAWN_V0324_POKEMON_TORKOAL")]
    SpawnV0324PokemonTorkoal,
    #[serde(rename = "SPAWN_V0324_POKEMON_TORKOAL_NORMAL")]
    SpawnV0324PokemonTorkoalNormal,
    #[serde(rename = "SPAWN_V0325_POKEMON_SPOINK")]
    SpawnV0325PokemonSpoink,
    #[serde(rename = "SPAWN_V0325_POKEMON_SPOINK_NORMAL")]
    SpawnV0325PokemonSpoinkNormal,
    #[serde(rename = "SPAWN_V0326_POKEMON_GRUMPIG")]
    SpawnV0326PokemonGrumpig,
    #[serde(rename = "SPAWN_V0326_POKEMON_GRUMPIG_NORMAL")]
    SpawnV0326PokemonGrumpigNormal,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA")]
    SpawnV0327PokemonSpinda,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_00")]
    SpawnV0327PokemonSpinda00,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_01")]
    SpawnV0327PokemonSpinda01,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_02")]
    SpawnV0327PokemonSpinda02,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_03")]
    SpawnV0327PokemonSpinda03,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_04")]
    SpawnV0327PokemonSpinda04,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_05")]
    SpawnV0327PokemonSpinda05,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_06")]
    SpawnV0327PokemonSpinda06,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_07")]
    SpawnV0327PokemonSpinda07,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_08")]
    SpawnV0327PokemonSpinda08,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_09")]
    SpawnV0327PokemonSpinda09,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_10")]
    SpawnV0327PokemonSpinda10,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_11")]
    SpawnV0327PokemonSpinda11,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_12")]
    SpawnV0327PokemonSpinda12,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_13")]
    SpawnV0327PokemonSpinda13,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_14")]
    SpawnV0327PokemonSpinda14,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_15")]
    SpawnV0327PokemonSpinda15,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_16")]
    SpawnV0327PokemonSpinda16,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_17")]
    SpawnV0327PokemonSpinda17,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_18")]
    SpawnV0327PokemonSpinda18,
    #[serde(rename = "SPAWN_V0327_POKEMON_SPINDA_19")]
    SpawnV0327PokemonSpinda19,
    #[serde(rename = "SPAWN_V0328_POKEMON_TRAPINCH")]
    SpawnV0328PokemonTrapinch,
    #[serde(rename = "SPAWN_V0328_POKEMON_TRAPINCH_NORMAL")]
    SpawnV0328PokemonTrapinchNormal,
    #[serde(rename = "SPAWN_V0329_POKEMON_VIBRAVA")]
    SpawnV0329PokemonVibrava,
    #[serde(rename = "SPAWN_V0329_POKEMON_VIBRAVA_NORMAL")]
    SpawnV0329PokemonVibravaNormal,
    #[serde(rename = "SPAWN_V0330_POKEMON_FLYGON")]
    SpawnV0330PokemonFlygon,
    #[serde(rename = "SPAWN_V0330_POKEMON_FLYGON_NORMAL")]
    SpawnV0330PokemonFlygonNormal,
    #[serde(rename = "SPAWN_V0331_POKEMON_CACNEA")]
    SpawnV0331PokemonCacnea,
    #[serde(rename = "SPAWN_V0331_POKEMON_CACNEA_NORMAL")]
    SpawnV0331PokemonCacneaNormal,
    #[serde(rename = "SPAWN_V0332_POKEMON_CACTURNE")]
    SpawnV0332PokemonCacturne,
    #[serde(rename = "SPAWN_V0332_POKEMON_CACTURNE_NORMAL")]
    SpawnV0332PokemonCacturneNormal,
    #[serde(rename = "SPAWN_V0333_POKEMON_SWABLU")]
    SpawnV0333PokemonSwablu,
    #[serde(rename = "SPAWN_V0333_POKEMON_SWABLU_NORMAL")]
    SpawnV0333PokemonSwabluNormal,
    #[serde(rename = "SPAWN_V0334_POKEMON_ALTARIA")]
    SpawnV0334PokemonAltaria,
    #[serde(rename = "SPAWN_V0334_POKEMON_ALTARIA_NORMAL")]
    SpawnV0334PokemonAltariaNormal,
    #[serde(rename = "SPAWN_V0335_POKEMON_ZANGOOSE")]
    SpawnV0335PokemonZangoose,
    #[serde(rename = "SPAWN_V0335_POKEMON_ZANGOOSE_NORMAL")]
    SpawnV0335PokemonZangooseNormal,
    #[serde(rename = "SPAWN_V0336_POKEMON_SEVIPER")]
    SpawnV0336PokemonSeviper,
    #[serde(rename = "SPAWN_V0336_POKEMON_SEVIPER_NORMAL")]
    SpawnV0336PokemonSeviperNormal,
    #[serde(rename = "SPAWN_V0337_POKEMON_LUNATONE")]
    SpawnV0337PokemonLunatone,
    #[serde(rename = "SPAWN_V0337_POKEMON_LUNATONE_NORMAL")]
    SpawnV0337PokemonLunatoneNormal,
    #[serde(rename = "SPAWN_V0338_POKEMON_SOLROCK")]
    SpawnV0338PokemonSolrock,
    #[serde(rename = "SPAWN_V0338_POKEMON_SOLROCK_NORMAL")]
    SpawnV0338PokemonSolrockNormal,
    #[serde(rename = "SPAWN_V0339_POKEMON_BARBOACH")]
    SpawnV0339PokemonBarboach,
    #[serde(rename = "SPAWN_V0339_POKEMON_BARBOACH_NORMAL")]
    SpawnV0339PokemonBarboachNormal,
    #[serde(rename = "SPAWN_V0340_POKEMON_WHISCASH")]
    SpawnV0340PokemonWhiscash,
    #[serde(rename = "SPAWN_V0340_POKEMON_WHISCASH_NORMAL")]
    SpawnV0340PokemonWhiscashNormal,
    #[serde(rename = "SPAWN_V0341_POKEMON_CORPHISH")]
    SpawnV0341PokemonCorphish,
    #[serde(rename = "SPAWN_V0341_POKEMON_CORPHISH_NORMAL")]
    SpawnV0341PokemonCorphishNormal,
    #[serde(rename = "SPAWN_V0342_POKEMON_CRAWDAUNT")]
    SpawnV0342PokemonCrawdaunt,
    #[serde(rename = "SPAWN_V0342_POKEMON_CRAWDAUNT_NORMAL")]
    SpawnV0342PokemonCrawdauntNormal,
    #[serde(rename = "SPAWN_V0343_POKEMON_BALTOY")]
    SpawnV0343PokemonBaltoy,
    #[serde(rename = "SPAWN_V0343_POKEMON_BALTOY_NORMAL")]
    SpawnV0343PokemonBaltoyNormal,
    #[serde(rename = "SPAWN_V0344_POKEMON_CLAYDOL")]
    SpawnV0344PokemonClaydol,
    #[serde(rename = "SPAWN_V0344_POKEMON_CLAYDOL_NORMAL")]
    SpawnV0344PokemonClaydolNormal,
    #[serde(rename = "SPAWN_V0345_POKEMON_LILEEP")]
    SpawnV0345PokemonLileep,
    #[serde(rename = "SPAWN_V0345_POKEMON_LILEEP_NORMAL")]
    SpawnV0345PokemonLileepNormal,
    #[serde(rename = "SPAWN_V0346_POKEMON_CRADILY")]
    SpawnV0346PokemonCradily,
    #[serde(rename = "SPAWN_V0346_POKEMON_CRADILY_NORMAL")]
    SpawnV0346PokemonCradilyNormal,
    #[serde(rename = "SPAWN_V0347_POKEMON_ANORITH")]
    SpawnV0347PokemonAnorith,
    #[serde(rename = "SPAWN_V0347_POKEMON_ANORITH_NORMAL")]
    SpawnV0347PokemonAnorithNormal,
    #[serde(rename = "SPAWN_V0348_POKEMON_ARMALDO")]
    SpawnV0348PokemonArmaldo,
    #[serde(rename = "SPAWN_V0348_POKEMON_ARMALDO_NORMAL")]
    SpawnV0348PokemonArmaldoNormal,
    #[serde(rename = "SPAWN_V0349_POKEMON_FEEBAS")]
    SpawnV0349PokemonFeebas,
    #[serde(rename = "SPAWN_V0349_POKEMON_FEEBAS_NORMAL")]
    SpawnV0349PokemonFeebasNormal,
    #[serde(rename = "SPAWN_V0350_POKEMON_MILOTIC")]
    SpawnV0350PokemonMilotic,
    #[serde(rename = "SPAWN_V0350_POKEMON_MILOTIC_NORMAL")]
    SpawnV0350PokemonMiloticNormal,
    #[serde(rename = "SPAWN_V0351_POKEMON_CASTFORM")]
    SpawnV0351PokemonCastform,
    #[serde(rename = "SPAWN_V0351_POKEMON_CASTFORM_NORMAL")]
    SpawnV0351PokemonCastformNormal,
    #[serde(rename = "SPAWN_V0351_POKEMON_CASTFORM_RAINY")]
    SpawnV0351PokemonCastformRainy,
    #[serde(rename = "SPAWN_V0351_POKEMON_CASTFORM_SNOWY")]
    SpawnV0351PokemonCastformSnowy,
    #[serde(rename = "SPAWN_V0351_POKEMON_CASTFORM_SUNNY")]
    SpawnV0351PokemonCastformSunny,
    #[serde(rename = "SPAWN_V0352_POKEMON_KECLEON")]
    SpawnV0352PokemonKecleon,
    #[serde(rename = "SPAWN_V0352_POKEMON_KECLEON_NORMAL")]
    SpawnV0352PokemonKecleonNormal,
    #[serde(rename = "SPAWN_V0353_POKEMON_SHUPPET")]
    SpawnV0353PokemonShuppet,
    #[serde(rename = "SPAWN_V0353_POKEMON_SHUPPET_NORMAL")]
    SpawnV0353PokemonShuppetNormal,
    #[serde(rename = "SPAWN_V0354_POKEMON_BANETTE")]
    SpawnV0354PokemonBanette,
    #[serde(rename = "SPAWN_V0354_POKEMON_BANETTE_NORMAL")]
    SpawnV0354PokemonBanetteNormal,
    #[serde(rename = "SPAWN_V0355_POKEMON_DUSKULL")]
    SpawnV0355PokemonDuskull,
    #[serde(rename = "SPAWN_V0355_POKEMON_DUSKULL_NORMAL")]
    SpawnV0355PokemonDuskullNormal,
    #[serde(rename = "SPAWN_V0356_POKEMON_DUSCLOPS")]
    SpawnV0356PokemonDusclops,
    #[serde(rename = "SPAWN_V0356_POKEMON_DUSCLOPS_NORMAL")]
    SpawnV0356PokemonDusclopsNormal,
    #[serde(rename = "SPAWN_V0357_POKEMON_TROPIUS")]
    SpawnV0357PokemonTropius,
    #[serde(rename = "SPAWN_V0357_POKEMON_TROPIUS_NORMAL")]
    SpawnV0357PokemonTropiusNormal,
    #[serde(rename = "SPAWN_V0358_POKEMON_CHIMECHO")]
    SpawnV0358PokemonChimecho,
    #[serde(rename = "SPAWN_V0358_POKEMON_CHIMECHO_NORMAL")]
    SpawnV0358PokemonChimechoNormal,
    #[serde(rename = "SPAWN_V0359_POKEMON_ABSOL")]
    SpawnV0359PokemonAbsol,
    #[serde(rename = "SPAWN_V0359_POKEMON_ABSOL_NORMAL")]
    SpawnV0359PokemonAbsolNormal,
    #[serde(rename = "SPAWN_V0360_POKEMON_WYNAUT")]
    SpawnV0360PokemonWynaut,
    #[serde(rename = "SPAWN_V0360_POKEMON_WYNAUT_NORMAL")]
    SpawnV0360PokemonWynautNormal,
    #[serde(rename = "SPAWN_V0361_POKEMON_SNORUNT")]
    SpawnV0361PokemonSnorunt,
    #[serde(rename = "SPAWN_V0361_POKEMON_SNORUNT_NORMAL")]
    SpawnV0361PokemonSnoruntNormal,
    #[serde(rename = "SPAWN_V0362_POKEMON_GLALIE")]
    SpawnV0362PokemonGlalie,
    #[serde(rename = "SPAWN_V0362_POKEMON_GLALIE_NORMAL")]
    SpawnV0362PokemonGlalieNormal,
    #[serde(rename = "SPAWN_V0363_POKEMON_SPHEAL")]
    SpawnV0363PokemonSpheal,
    #[serde(rename = "SPAWN_V0363_POKEMON_SPHEAL_NORMAL")]
    SpawnV0363PokemonSphealNormal,
    #[serde(rename = "SPAWN_V0364_POKEMON_SEALEO")]
    SpawnV0364PokemonSealeo,
    #[serde(rename = "SPAWN_V0364_POKEMON_SEALEO_NORMAL")]
    SpawnV0364PokemonSealeoNormal,
    #[serde(rename = "SPAWN_V0365_POKEMON_WALREIN")]
    SpawnV0365PokemonWalrein,
    #[serde(rename = "SPAWN_V0365_POKEMON_WALREIN_NORMAL")]
    SpawnV0365PokemonWalreinNormal,
    #[serde(rename = "SPAWN_V0366_POKEMON_CLAMPERL")]
    SpawnV0366PokemonClamperl,
    #[serde(rename = "SPAWN_V0366_POKEMON_CLAMPERL_NORMAL")]
    SpawnV0366PokemonClamperlNormal,
    #[serde(rename = "SPAWN_V0367_POKEMON_HUNTAIL")]
    SpawnV0367PokemonHuntail,
    #[serde(rename = "SPAWN_V0367_POKEMON_HUNTAIL_NORMAL")]
    SpawnV0367PokemonHuntailNormal,
    #[serde(rename = "SPAWN_V0368_POKEMON_GOREBYSS")]
    SpawnV0368PokemonGorebyss,
    #[serde(rename = "SPAWN_V0368_POKEMON_GOREBYSS_NORMAL")]
    SpawnV0368PokemonGorebyssNormal,
    #[serde(rename = "SPAWN_V0369_POKEMON_RELICANTH")]
    SpawnV0369PokemonRelicanth,
    #[serde(rename = "SPAWN_V0369_POKEMON_RELICANTH_NORMAL")]
    SpawnV0369PokemonRelicanthNormal,
    #[serde(rename = "SPAWN_V0370_POKEMON_LUVDISC")]
    SpawnV0370PokemonLuvdisc,
    #[serde(rename = "SPAWN_V0370_POKEMON_LUVDISC_NORMAL")]
    SpawnV0370PokemonLuvdiscNormal,
    #[serde(rename = "SPAWN_V0371_POKEMON_BAGON")]
    SpawnV0371PokemonBagon,
    #[serde(rename = "SPAWN_V0371_POKEMON_BAGON_NORMAL")]
    SpawnV0371PokemonBagonNormal,
    #[serde(rename = "SPAWN_V0372_POKEMON_SHELGON")]
    SpawnV0372PokemonShelgon,
    #[serde(rename = "SPAWN_V0372_POKEMON_SHELGON_NORMAL")]
    SpawnV0372PokemonShelgonNormal,
    #[serde(rename = "SPAWN_V0373_POKEMON_SALAMENCE")]
    SpawnV0373PokemonSalamence,
    #[serde(rename = "SPAWN_V0373_POKEMON_SALAMENCE_NORMAL")]
    SpawnV0373PokemonSalamenceNormal,
    #[serde(rename = "SPAWN_V0374_POKEMON_BELDUM")]
    SpawnV0374PokemonBeldum,
    #[serde(rename = "SPAWN_V0374_POKEMON_BELDUM_NORMAL")]
    SpawnV0374PokemonBeldumNormal,
    #[serde(rename = "SPAWN_V0375_POKEMON_METANG")]
    SpawnV0375PokemonMetang,
    #[serde(rename = "SPAWN_V0375_POKEMON_METANG_NORMAL")]
    SpawnV0375PokemonMetangNormal,
    #[serde(rename = "SPAWN_V0376_POKEMON_METAGROSS")]
    SpawnV0376PokemonMetagross,
    #[serde(rename = "SPAWN_V0376_POKEMON_METAGROSS_NORMAL")]
    SpawnV0376PokemonMetagrossNormal,
    #[serde(rename = "SPAWN_V0377_POKEMON_REGIROCK")]
    SpawnV0377PokemonRegirock,
    #[serde(rename = "SPAWN_V0377_POKEMON_REGIROCK_NORMAL")]
    SpawnV0377PokemonRegirockNormal,
    #[serde(rename = "SPAWN_V0378_POKEMON_REGICE")]
    SpawnV0378PokemonRegice,
    #[serde(rename = "SPAWN_V0378_POKEMON_REGICE_NORMAL")]
    SpawnV0378PokemonRegiceNormal,
    #[serde(rename = "SPAWN_V0379_POKEMON_REGISTEEL")]
    SpawnV0379PokemonRegisteel,
    #[serde(rename = "SPAWN_V0379_POKEMON_REGISTEEL_NORMAL")]
    SpawnV0379PokemonRegisteelNormal,
    #[serde(rename = "SPAWN_V0380_POKEMON_LATIAS")]
    SpawnV0380PokemonLatias,
    #[serde(rename = "SPAWN_V0380_POKEMON_LATIAS_NORMAL")]
    SpawnV0380PokemonLatiasNormal,
    #[serde(rename = "SPAWN_V0380_POKEMON_LATIAS_S")]
    SpawnV0380PokemonLatiasS,
    #[serde(rename = "SPAWN_V0381_POKEMON_LATIOS")]
    SpawnV0381PokemonLatios,
    #[serde(rename = "SPAWN_V0381_POKEMON_LATIOS_NORMAL")]
    SpawnV0381PokemonLatiosNormal,
    #[serde(rename = "SPAWN_V0381_POKEMON_LATIOS_S")]
    SpawnV0381PokemonLatiosS,
    #[serde(rename = "SPAWN_V0382_POKEMON_KYOGRE")]
    SpawnV0382PokemonKyogre,
    #[serde(rename = "SPAWN_V0382_POKEMON_KYOGRE_NORMAL")]
    SpawnV0382PokemonKyogreNormal,
    #[serde(rename = "SPAWN_V0383_POKEMON_GROUDON")]
    SpawnV0383PokemonGroudon,
    #[serde(rename = "SPAWN_V0383_POKEMON_GROUDON_NORMAL")]
    SpawnV0383PokemonGroudonNormal,
    #[serde(rename = "SPAWN_V0384_POKEMON_RAYQUAZA")]
    SpawnV0384PokemonRayquaza,
    #[serde(rename = "SPAWN_V0384_POKEMON_RAYQUAZA_NORMAL")]
    SpawnV0384PokemonRayquazaNormal,
    #[serde(rename = "SPAWN_V0385_POKEMON_JIRACHI")]
    SpawnV0385PokemonJirachi,
    #[serde(rename = "SPAWN_V0385_POKEMON_JIRACHI_NORMAL")]
    SpawnV0385PokemonJirachiNormal,
    #[serde(rename = "SPAWN_V0386_POKEMON_DEOXYS")]
    SpawnV0386PokemonDeoxys,
    #[serde(rename = "SPAWN_V0386_POKEMON_DEOXYS_ATTACK")]
    SpawnV0386PokemonDeoxysAttack,
    #[serde(rename = "SPAWN_V0386_POKEMON_DEOXYS_DEFENSE")]
    SpawnV0386PokemonDeoxysDefense,
    #[serde(rename = "SPAWN_V0386_POKEMON_DEOXYS_NORMAL")]
    SpawnV0386PokemonDeoxysNormal,
    #[serde(rename = "SPAWN_V0386_POKEMON_DEOXYS_SPEED")]
    SpawnV0386PokemonDeoxysSpeed,
    #[serde(rename = "SPAWN_V0387_POKEMON_TURTWIG")]
    SpawnV0387PokemonTurtwig,
    #[serde(rename = "SPAWN_V0387_POKEMON_TURTWIG_NORMAL")]
    SpawnV0387PokemonTurtwigNormal,
    #[serde(rename = "SPAWN_V0388_POKEMON_GROTLE")]
    SpawnV0388PokemonGrotle,
    #[serde(rename = "SPAWN_V0388_POKEMON_GROTLE_NORMAL")]
    SpawnV0388PokemonGrotleNormal,
    #[serde(rename = "SPAWN_V0389_POKEMON_TORTERRA")]
    SpawnV0389PokemonTorterra,
    #[serde(rename = "SPAWN_V0389_POKEMON_TORTERRA_NORMAL")]
    SpawnV0389PokemonTorterraNormal,
    #[serde(rename = "SPAWN_V0390_POKEMON_CHIMCHAR")]
    SpawnV0390PokemonChimchar,
    #[serde(rename = "SPAWN_V0390_POKEMON_CHIMCHAR_NORMAL")]
    SpawnV0390PokemonChimcharNormal,
    #[serde(rename = "SPAWN_V0391_POKEMON_MONFERNO")]
    SpawnV0391PokemonMonferno,
    #[serde(rename = "SPAWN_V0391_POKEMON_MONFERNO_NORMAL")]
    SpawnV0391PokemonMonfernoNormal,
    #[serde(rename = "SPAWN_V0392_POKEMON_INFERNAPE")]
    SpawnV0392PokemonInfernape,
    #[serde(rename = "SPAWN_V0392_POKEMON_INFERNAPE_NORMAL")]
    SpawnV0392PokemonInfernapeNormal,
    #[serde(rename = "SPAWN_V0393_POKEMON_PIPLUP")]
    SpawnV0393PokemonPiplup,
    #[serde(rename = "SPAWN_V0393_POKEMON_PIPLUP_NORMAL")]
    SpawnV0393PokemonPiplupNormal,
    #[serde(rename = "SPAWN_V0394_POKEMON_PRINPLUP")]
    SpawnV0394PokemonPrinplup,
    #[serde(rename = "SPAWN_V0394_POKEMON_PRINPLUP_NORMAL")]
    SpawnV0394PokemonPrinplupNormal,
    #[serde(rename = "SPAWN_V0395_POKEMON_EMPOLEON")]
    SpawnV0395PokemonEmpoleon,
    #[serde(rename = "SPAWN_V0395_POKEMON_EMPOLEON_NORMAL")]
    SpawnV0395PokemonEmpoleonNormal,
    #[serde(rename = "SPAWN_V0396_POKEMON_STARLY")]
    SpawnV0396PokemonStarly,
    #[serde(rename = "SPAWN_V0396_POKEMON_STARLY_NORMAL")]
    SpawnV0396PokemonStarlyNormal,
    #[serde(rename = "SPAWN_V0397_POKEMON_STARAVIA")]
    SpawnV0397PokemonStaravia,
    #[serde(rename = "SPAWN_V0397_POKEMON_STARAVIA_NORMAL")]
    SpawnV0397PokemonStaraviaNormal,
    #[serde(rename = "SPAWN_V0398_POKEMON_STARAPTOR")]
    SpawnV0398PokemonStaraptor,
    #[serde(rename = "SPAWN_V0398_POKEMON_STARAPTOR_NORMAL")]
    SpawnV0398PokemonStaraptorNormal,
    #[serde(rename = "SPAWN_V0399_POKEMON_BIDOOF")]
    SpawnV0399PokemonBidoof,
    #[serde(rename = "SPAWN_V0399_POKEMON_BIDOOF_NORMAL")]
    SpawnV0399PokemonBidoofNormal,
    #[serde(rename = "SPAWN_V0400_POKEMON_BIBAREL")]
    SpawnV0400PokemonBibarel,
    #[serde(rename = "SPAWN_V0400_POKEMON_BIBAREL_NORMAL")]
    SpawnV0400PokemonBibarelNormal,
    #[serde(rename = "SPAWN_V0401_POKEMON_KRICKETOT")]
    SpawnV0401PokemonKricketot,
    #[serde(rename = "SPAWN_V0401_POKEMON_KRICKETOT_NORMAL")]
    SpawnV0401PokemonKricketotNormal,
    #[serde(rename = "SPAWN_V0402_POKEMON_KRICKETUNE")]
    SpawnV0402PokemonKricketune,
    #[serde(rename = "SPAWN_V0402_POKEMON_KRICKETUNE_NORMAL")]
    SpawnV0402PokemonKricketuneNormal,
    #[serde(rename = "SPAWN_V0403_POKEMON_SHINX")]
    SpawnV0403PokemonShinx,
    #[serde(rename = "SPAWN_V0403_POKEMON_SHINX_NORMAL")]
    SpawnV0403PokemonShinxNormal,
    #[serde(rename = "SPAWN_V0404_POKEMON_LUXIO")]
    SpawnV0404PokemonLuxio,
    #[serde(rename = "SPAWN_V0404_POKEMON_LUXIO_NORMAL")]
    SpawnV0404PokemonLuxioNormal,
    #[serde(rename = "SPAWN_V0405_POKEMON_LUXRAY")]
    SpawnV0405PokemonLuxray,
    #[serde(rename = "SPAWN_V0405_POKEMON_LUXRAY_NORMAL")]
    SpawnV0405PokemonLuxrayNormal,
    #[serde(rename = "SPAWN_V0406_POKEMON_BUDEW")]
    SpawnV0406PokemonBudew,
    #[serde(rename = "SPAWN_V0406_POKEMON_BUDEW_NORMAL")]
    SpawnV0406PokemonBudewNormal,
    #[serde(rename = "SPAWN_V0407_POKEMON_ROSERADE")]
    SpawnV0407PokemonRoserade,
    #[serde(rename = "SPAWN_V0407_POKEMON_ROSERADE_NORMAL")]
    SpawnV0407PokemonRoseradeNormal,
    #[serde(rename = "SPAWN_V0408_POKEMON_CRANIDOS")]
    SpawnV0408PokemonCranidos,
    #[serde(rename = "SPAWN_V0408_POKEMON_CRANIDOS_NORMAL")]
    SpawnV0408PokemonCranidosNormal,
    #[serde(rename = "SPAWN_V0409_POKEMON_RAMPARDOS")]
    SpawnV0409PokemonRampardos,
    #[serde(rename = "SPAWN_V0409_POKEMON_RAMPARDOS_NORMAL")]
    SpawnV0409PokemonRampardosNormal,
    #[serde(rename = "SPAWN_V0410_POKEMON_SHIELDON")]
    SpawnV0410PokemonShieldon,
    #[serde(rename = "SPAWN_V0410_POKEMON_SHIELDON_NORMAL")]
    SpawnV0410PokemonShieldonNormal,
    #[serde(rename = "SPAWN_V0411_POKEMON_BASTIODON")]
    SpawnV0411PokemonBastiodon,
    #[serde(rename = "SPAWN_V0411_POKEMON_BASTIODON_NORMAL")]
    SpawnV0411PokemonBastiodonNormal,
    #[serde(rename = "SPAWN_V0412_POKEMON_BURMY")]
    SpawnV0412PokemonBurmy,
    #[serde(rename = "SPAWN_V0412_POKEMON_BURMY_PLANT")]
    SpawnV0412PokemonBurmyPlant,
    #[serde(rename = "SPAWN_V0412_POKEMON_BURMY_SANDY")]
    SpawnV0412PokemonBurmySandy,
    #[serde(rename = "SPAWN_V0412_POKEMON_BURMY_TRASH")]
    SpawnV0412PokemonBurmyTrash,
    #[serde(rename = "SPAWN_V0413_POKEMON_WORMADAM")]
    SpawnV0413PokemonWormadam,
    #[serde(rename = "SPAWN_V0413_POKEMON_WORMADAM_PLANT")]
    SpawnV0413PokemonWormadamPlant,
    #[serde(rename = "SPAWN_V0413_POKEMON_WORMADAM_SANDY")]
    SpawnV0413PokemonWormadamSandy,
    #[serde(rename = "SPAWN_V0413_POKEMON_WORMADAM_TRASH")]
    SpawnV0413PokemonWormadamTrash,
    #[serde(rename = "SPAWN_V0414_POKEMON_MOTHIM")]
    SpawnV0414PokemonMothim,
    #[serde(rename = "SPAWN_V0414_POKEMON_MOTHIM_NORMAL")]
    SpawnV0414PokemonMothimNormal,
    #[serde(rename = "SPAWN_V0415_POKEMON_COMBEE")]
    SpawnV0415PokemonCombee,
    #[serde(rename = "SPAWN_V0415_POKEMON_COMBEE_NORMAL")]
    SpawnV0415PokemonCombeeNormal,
    #[serde(rename = "SPAWN_V0416_POKEMON_VESPIQUEN")]
    SpawnV0416PokemonVespiquen,
    #[serde(rename = "SPAWN_V0416_POKEMON_VESPIQUEN_NORMAL")]
    SpawnV0416PokemonVespiquenNormal,
    #[serde(rename = "SPAWN_V0417_POKEMON_PACHIRISU")]
    SpawnV0417PokemonPachirisu,
    #[serde(rename = "SPAWN_V0417_POKEMON_PACHIRISU_NORMAL")]
    SpawnV0417PokemonPachirisuNormal,
    #[serde(rename = "SPAWN_V0418_POKEMON_BUIZEL")]
    SpawnV0418PokemonBuizel,
    #[serde(rename = "SPAWN_V0418_POKEMON_BUIZEL_NORMAL")]
    SpawnV0418PokemonBuizelNormal,
    #[serde(rename = "SPAWN_V0419_POKEMON_FLOATZEL")]
    SpawnV0419PokemonFloatzel,
    #[serde(rename = "SPAWN_V0419_POKEMON_FLOATZEL_NORMAL")]
    SpawnV0419PokemonFloatzelNormal,
    #[serde(rename = "SPAWN_V0420_POKEMON_CHERUBI")]
    SpawnV0420PokemonCherubi,
    #[serde(rename = "SPAWN_V0420_POKEMON_CHERUBI_NORMAL")]
    SpawnV0420PokemonCherubiNormal,
    #[serde(rename = "SPAWN_V0421_POKEMON_CHERRIM")]
    SpawnV0421PokemonCherrim,
    #[serde(rename = "SPAWN_V0421_POKEMON_CHERRIM_OVERCAST")]
    SpawnV0421PokemonCherrimOvercast,
    #[serde(rename = "SPAWN_V0421_POKEMON_CHERRIM_SUNNY")]
    SpawnV0421PokemonCherrimSunny,
    #[serde(rename = "SPAWN_V0422_POKEMON_SHELLOS")]
    SpawnV0422PokemonShellos,
    #[serde(rename = "SPAWN_V0422_POKEMON_SHELLOS_EAST_SEA")]
    SpawnV0422PokemonShellosEastSea,
    #[serde(rename = "SPAWN_V0422_POKEMON_SHELLOS_WEST_SEA")]
    SpawnV0422PokemonShellosWestSea,
    #[serde(rename = "SPAWN_V0423_POKEMON_GASTRODON")]
    SpawnV0423PokemonGastrodon,
    #[serde(rename = "SPAWN_V0423_POKEMON_GASTRODON_EAST_SEA")]
    SpawnV0423PokemonGastrodonEastSea,
    #[serde(rename = "SPAWN_V0423_POKEMON_GASTRODON_WEST_SEA")]
    SpawnV0423PokemonGastrodonWestSea,
    #[serde(rename = "SPAWN_V0424_POKEMON_AMBIPOM")]
    SpawnV0424PokemonAmbipom,
    #[serde(rename = "SPAWN_V0424_POKEMON_AMBIPOM_NORMAL")]
    SpawnV0424PokemonAmbipomNormal,
    #[serde(rename = "SPAWN_V0425_POKEMON_DRIFLOON")]
    SpawnV0425PokemonDrifloon,
    #[serde(rename = "SPAWN_V0425_POKEMON_DRIFLOON_NORMAL")]
    SpawnV0425PokemonDrifloonNormal,
    #[serde(rename = "SPAWN_V0426_POKEMON_DRIFBLIM")]
    SpawnV0426PokemonDrifblim,
    #[serde(rename = "SPAWN_V0426_POKEMON_DRIFBLIM_NORMAL")]
    SpawnV0426PokemonDrifblimNormal,
    #[serde(rename = "SPAWN_V0427_POKEMON_BUNEARY")]
    SpawnV0427PokemonBuneary,
    #[serde(rename = "SPAWN_V0427_POKEMON_BUNEARY_NORMAL")]
    SpawnV0427PokemonBunearyNormal,
    #[serde(rename = "SPAWN_V0428_POKEMON_LOPUNNY")]
    SpawnV0428PokemonLopunny,
    #[serde(rename = "SPAWN_V0428_POKEMON_LOPUNNY_NORMAL")]
    SpawnV0428PokemonLopunnyNormal,
    #[serde(rename = "SPAWN_V0429_POKEMON_MISMAGIUS")]
    SpawnV0429PokemonMismagius,
    #[serde(rename = "SPAWN_V0429_POKEMON_MISMAGIUS_NORMAL")]
    SpawnV0429PokemonMismagiusNormal,
    #[serde(rename = "SPAWN_V0430_POKEMON_HONCHKROW")]
    SpawnV0430PokemonHonchkrow,
    #[serde(rename = "SPAWN_V0430_POKEMON_HONCHKROW_NORMAL")]
    SpawnV0430PokemonHonchkrowNormal,
    #[serde(rename = "SPAWN_V0431_POKEMON_GLAMEOW")]
    SpawnV0431PokemonGlameow,
    #[serde(rename = "SPAWN_V0431_POKEMON_GLAMEOW_NORMAL")]
    SpawnV0431PokemonGlameowNormal,
    #[serde(rename = "SPAWN_V0432_POKEMON_PURUGLY")]
    SpawnV0432PokemonPurugly,
    #[serde(rename = "SPAWN_V0432_POKEMON_PURUGLY_NORMAL")]
    SpawnV0432PokemonPuruglyNormal,
    #[serde(rename = "SPAWN_V0433_POKEMON_CHINGLING")]
    SpawnV0433PokemonChingling,
    #[serde(rename = "SPAWN_V0433_POKEMON_CHINGLING_NORMAL")]
    SpawnV0433PokemonChinglingNormal,
    #[serde(rename = "SPAWN_V0434_POKEMON_STUNKY")]
    SpawnV0434PokemonStunky,
    #[serde(rename = "SPAWN_V0434_POKEMON_STUNKY_NORMAL")]
    SpawnV0434PokemonStunkyNormal,
    #[serde(rename = "SPAWN_V0435_POKEMON_SKUNTANK")]
    SpawnV0435PokemonSkuntank,
    #[serde(rename = "SPAWN_V0435_POKEMON_SKUNTANK_NORMAL")]
    SpawnV0435PokemonSkuntankNormal,
    #[serde(rename = "SPAWN_V0436_POKEMON_BRONZOR")]
    SpawnV0436PokemonBronzor,
    #[serde(rename = "SPAWN_V0436_POKEMON_BRONZOR_NORMAL")]
    SpawnV0436PokemonBronzorNormal,
    #[serde(rename = "SPAWN_V0437_POKEMON_BRONZONG")]
    SpawnV0437PokemonBronzong,
    #[serde(rename = "SPAWN_V0437_POKEMON_BRONZONG_NORMAL")]
    SpawnV0437PokemonBronzongNormal,
    #[serde(rename = "SPAWN_V0438_POKEMON_BONSLY")]
    SpawnV0438PokemonBonsly,
    #[serde(rename = "SPAWN_V0438_POKEMON_BONSLY_NORMAL")]
    SpawnV0438PokemonBonslyNormal,
    #[serde(rename = "SPAWN_V0439_POKEMON_MIME_JR")]
    SpawnV0439PokemonMimeJr,
    #[serde(rename = "SPAWN_V0439_POKEMON_MIME_JR_NORMAL")]
    SpawnV0439PokemonMimeJrNormal,
    #[serde(rename = "SPAWN_V0440_POKEMON_HAPPINY")]
    SpawnV0440PokemonHappiny,
    #[serde(rename = "SPAWN_V0440_POKEMON_HAPPINY_NORMAL")]
    SpawnV0440PokemonHappinyNormal,
    #[serde(rename = "SPAWN_V0441_POKEMON_CHATOT")]
    SpawnV0441PokemonChatot,
    #[serde(rename = "SPAWN_V0441_POKEMON_CHATOT_NORMAL")]
    SpawnV0441PokemonChatotNormal,
    #[serde(rename = "SPAWN_V0442_POKEMON_SPIRITOMB")]
    SpawnV0442PokemonSpiritomb,
    #[serde(rename = "SPAWN_V0442_POKEMON_SPIRITOMB_NORMAL")]
    SpawnV0442PokemonSpiritombNormal,
    #[serde(rename = "SPAWN_V0443_POKEMON_GIBLE")]
    SpawnV0443PokemonGible,
    #[serde(rename = "SPAWN_V0443_POKEMON_GIBLE_NORMAL")]
    SpawnV0443PokemonGibleNormal,
    #[serde(rename = "SPAWN_V0444_POKEMON_GABITE")]
    SpawnV0444PokemonGabite,
    #[serde(rename = "SPAWN_V0444_POKEMON_GABITE_NORMAL")]
    SpawnV0444PokemonGabiteNormal,
    #[serde(rename = "SPAWN_V0445_POKEMON_GARCHOMP")]
    SpawnV0445PokemonGarchomp,
    #[serde(rename = "SPAWN_V0445_POKEMON_GARCHOMP_NORMAL")]
    SpawnV0445PokemonGarchompNormal,
    #[serde(rename = "SPAWN_V0446_POKEMON_MUNCHLAX")]
    SpawnV0446PokemonMunchlax,
    #[serde(rename = "SPAWN_V0446_POKEMON_MUNCHLAX_NORMAL")]
    SpawnV0446PokemonMunchlaxNormal,
    #[serde(rename = "SPAWN_V0447_POKEMON_RIOLU")]
    SpawnV0447PokemonRiolu,
    #[serde(rename = "SPAWN_V0447_POKEMON_RIOLU_NORMAL")]
    SpawnV0447PokemonRioluNormal,
    #[serde(rename = "SPAWN_V0448_POKEMON_LUCARIO")]
    SpawnV0448PokemonLucario,
    #[serde(rename = "SPAWN_V0448_POKEMON_LUCARIO_NORMAL")]
    SpawnV0448PokemonLucarioNormal,
    #[serde(rename = "SPAWN_V0449_POKEMON_HIPPOPOTAS")]
    SpawnV0449PokemonHippopotas,
    #[serde(rename = "SPAWN_V0449_POKEMON_HIPPOPOTAS_NORMAL")]
    SpawnV0449PokemonHippopotasNormal,
    #[serde(rename = "SPAWN_V0450_POKEMON_HIPPOWDON")]
    SpawnV0450PokemonHippowdon,
    #[serde(rename = "SPAWN_V0450_POKEMON_HIPPOWDON_NORMAL")]
    SpawnV0450PokemonHippowdonNormal,
    #[serde(rename = "SPAWN_V0451_POKEMON_SKORUPI")]
    SpawnV0451PokemonSkorupi,
    #[serde(rename = "SPAWN_V0451_POKEMON_SKORUPI_NORMAL")]
    SpawnV0451PokemonSkorupiNormal,
    #[serde(rename = "SPAWN_V0452_POKEMON_DRAPION")]
    SpawnV0452PokemonDrapion,
    #[serde(rename = "SPAWN_V0452_POKEMON_DRAPION_NORMAL")]
    SpawnV0452PokemonDrapionNormal,
    #[serde(rename = "SPAWN_V0453_POKEMON_CROAGUNK")]
    SpawnV0453PokemonCroagunk,
    #[serde(rename = "SPAWN_V0453_POKEMON_CROAGUNK_NORMAL")]
    SpawnV0453PokemonCroagunkNormal,
    #[serde(rename = "SPAWN_V0454_POKEMON_TOXICROAK")]
    SpawnV0454PokemonToxicroak,
    #[serde(rename = "SPAWN_V0454_POKEMON_TOXICROAK_NORMAL")]
    SpawnV0454PokemonToxicroakNormal,
    #[serde(rename = "SPAWN_V0455_POKEMON_CARNIVINE")]
    SpawnV0455PokemonCarnivine,
    #[serde(rename = "SPAWN_V0455_POKEMON_CARNIVINE_NORMAL")]
    SpawnV0455PokemonCarnivineNormal,
    #[serde(rename = "SPAWN_V0456_POKEMON_FINNEON")]
    SpawnV0456PokemonFinneon,
    #[serde(rename = "SPAWN_V0456_POKEMON_FINNEON_NORMAL")]
    SpawnV0456PokemonFinneonNormal,
    #[serde(rename = "SPAWN_V0457_POKEMON_LUMINEON")]
    SpawnV0457PokemonLumineon,
    #[serde(rename = "SPAWN_V0457_POKEMON_LUMINEON_NORMAL")]
    SpawnV0457PokemonLumineonNormal,
    #[serde(rename = "SPAWN_V0458_POKEMON_MANTYKE")]
    SpawnV0458PokemonMantyke,
    #[serde(rename = "SPAWN_V0458_POKEMON_MANTYKE_NORMAL")]
    SpawnV0458PokemonMantykeNormal,
    #[serde(rename = "SPAWN_V0459_POKEMON_SNOVER")]
    SpawnV0459PokemonSnover,
    #[serde(rename = "SPAWN_V0459_POKEMON_SNOVER_NORMAL")]
    SpawnV0459PokemonSnoverNormal,
    #[serde(rename = "SPAWN_V0460_POKEMON_ABOMASNOW")]
    SpawnV0460PokemonAbomasnow,
    #[serde(rename = "SPAWN_V0460_POKEMON_ABOMASNOW_NORMAL")]
    SpawnV0460PokemonAbomasnowNormal,
    #[serde(rename = "SPAWN_V0461_POKEMON_WEAVILE")]
    SpawnV0461PokemonWeavile,
    #[serde(rename = "SPAWN_V0461_POKEMON_WEAVILE_NORMAL")]
    SpawnV0461PokemonWeavileNormal,
    #[serde(rename = "SPAWN_V0462_POKEMON_MAGNEZONE")]
    SpawnV0462PokemonMagnezone,
    #[serde(rename = "SPAWN_V0462_POKEMON_MAGNEZONE_NORMAL")]
    SpawnV0462PokemonMagnezoneNormal,
    #[serde(rename = "SPAWN_V0463_POKEMON_LICKILICKY")]
    SpawnV0463PokemonLickilicky,
    #[serde(rename = "SPAWN_V0463_POKEMON_LICKILICKY_NORMAL")]
    SpawnV0463PokemonLickilickyNormal,
    #[serde(rename = "SPAWN_V0464_POKEMON_RHYPERIOR")]
    SpawnV0464PokemonRhyperior,
    #[serde(rename = "SPAWN_V0464_POKEMON_RHYPERIOR_NORMAL")]
    SpawnV0464PokemonRhyperiorNormal,
    #[serde(rename = "SPAWN_V0465_POKEMON_TANGROWTH")]
    SpawnV0465PokemonTangrowth,
    #[serde(rename = "SPAWN_V0465_POKEMON_TANGROWTH_NORMAL")]
    SpawnV0465PokemonTangrowthNormal,
    #[serde(rename = "SPAWN_V0466_POKEMON_ELECTIVIRE")]
    SpawnV0466PokemonElectivire,
    #[serde(rename = "SPAWN_V0466_POKEMON_ELECTIVIRE_NORMAL")]
    SpawnV0466PokemonElectivireNormal,
    #[serde(rename = "SPAWN_V0467_POKEMON_MAGMORTAR")]
    SpawnV0467PokemonMagmortar,
    #[serde(rename = "SPAWN_V0467_POKEMON_MAGMORTAR_NORMAL")]
    SpawnV0467PokemonMagmortarNormal,
    #[serde(rename = "SPAWN_V0468_POKEMON_TOGEKISS")]
    SpawnV0468PokemonTogekiss,
    #[serde(rename = "SPAWN_V0468_POKEMON_TOGEKISS_NORMAL")]
    SpawnV0468PokemonTogekissNormal,
    #[serde(rename = "SPAWN_V0469_POKEMON_YANMEGA")]
    SpawnV0469PokemonYanmega,
    #[serde(rename = "SPAWN_V0469_POKEMON_YANMEGA_NORMAL")]
    SpawnV0469PokemonYanmegaNormal,
    #[serde(rename = "SPAWN_V0470_POKEMON_LEAFEON")]
    SpawnV0470PokemonLeafeon,
    #[serde(rename = "SPAWN_V0470_POKEMON_LEAFEON_NORMAL")]
    SpawnV0470PokemonLeafeonNormal,
    #[serde(rename = "SPAWN_V0471_POKEMON_GLACEON")]
    SpawnV0471PokemonGlaceon,
    #[serde(rename = "SPAWN_V0471_POKEMON_GLACEON_NORMAL")]
    SpawnV0471PokemonGlaceonNormal,
    #[serde(rename = "SPAWN_V0472_POKEMON_GLISCOR")]
    SpawnV0472PokemonGliscor,
    #[serde(rename = "SPAWN_V0472_POKEMON_GLISCOR_NORMAL")]
    SpawnV0472PokemonGliscorNormal,
    #[serde(rename = "SPAWN_V0473_POKEMON_MAMOSWINE")]
    SpawnV0473PokemonMamoswine,
    #[serde(rename = "SPAWN_V0473_POKEMON_MAMOSWINE_NORMAL")]
    SpawnV0473PokemonMamoswineNormal,
    #[serde(rename = "SPAWN_V0474_POKEMON_PORYGON_Z")]
    SpawnV0474PokemonPorygonZ,
    #[serde(rename = "SPAWN_V0474_POKEMON_PORYGON_Z_NORMAL")]
    SpawnV0474PokemonPorygonZNormal,
    #[serde(rename = "SPAWN_V0475_POKEMON_GALLADE")]
    SpawnV0475PokemonGallade,
    #[serde(rename = "SPAWN_V0475_POKEMON_GALLADE_NORMAL")]
    SpawnV0475PokemonGalladeNormal,
    #[serde(rename = "SPAWN_V0476_POKEMON_PROBOPASS")]
    SpawnV0476PokemonProbopass,
    #[serde(rename = "SPAWN_V0476_POKEMON_PROBOPASS_NORMAL")]
    SpawnV0476PokemonProbopassNormal,
    #[serde(rename = "SPAWN_V0477_POKEMON_DUSKNOIR")]
    SpawnV0477PokemonDusknoir,
    #[serde(rename = "SPAWN_V0477_POKEMON_DUSKNOIR_NORMAL")]
    SpawnV0477PokemonDusknoirNormal,
    #[serde(rename = "SPAWN_V0478_POKEMON_FROSLASS")]
    SpawnV0478PokemonFroslass,
    #[serde(rename = "SPAWN_V0478_POKEMON_FROSLASS_NORMAL")]
    SpawnV0478PokemonFroslassNormal,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM")]
    SpawnV0479PokemonRotom,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_FAN")]
    SpawnV0479PokemonRotomFan,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_FROST")]
    SpawnV0479PokemonRotomFrost,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_HEAT")]
    SpawnV0479PokemonRotomHeat,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_MOW")]
    SpawnV0479PokemonRotomMow,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_NORMAL")]
    SpawnV0479PokemonRotomNormal,
    #[serde(rename = "SPAWN_V0479_POKEMON_ROTOM_WASH")]
    SpawnV0479PokemonRotomWash,
    #[serde(rename = "SPAWN_V0480_POKEMON_UXIE")]
    SpawnV0480PokemonUxie,
    #[serde(rename = "SPAWN_V0480_POKEMON_UXIE_NORMAL")]
    SpawnV0480PokemonUxieNormal,
    #[serde(rename = "SPAWN_V0481_POKEMON_MESPRIT")]
    SpawnV0481PokemonMesprit,
    #[serde(rename = "SPAWN_V0481_POKEMON_MESPRIT_NORMAL")]
    SpawnV0481PokemonMespritNormal,
    #[serde(rename = "SPAWN_V0482_POKEMON_AZELF")]
    SpawnV0482PokemonAzelf,
    #[serde(rename = "SPAWN_V0482_POKEMON_AZELF_NORMAL")]
    SpawnV0482PokemonAzelfNormal,
    #[serde(rename = "SPAWN_V0483_POKEMON_DIALGA")]
    SpawnV0483PokemonDialga,
    #[serde(rename = "SPAWN_V0483_POKEMON_DIALGA_NORMAL")]
    SpawnV0483PokemonDialgaNormal,
    #[serde(rename = "SPAWN_V0483_POKEMON_DIALGA_ORIGIN")]
    SpawnV0483PokemonDialgaOrigin,
    #[serde(rename = "SPAWN_V0484_POKEMON_PALKIA")]
    SpawnV0484PokemonPalkia,
    #[serde(rename = "SPAWN_V0484_POKEMON_PALKIA_NORMAL")]
    SpawnV0484PokemonPalkiaNormal,
    #[serde(rename = "SPAWN_V0484_POKEMON_PALKIA_ORIGIN")]
    SpawnV0484PokemonPalkiaOrigin,
    #[serde(rename = "SPAWN_V0485_POKEMON_HEATRAN")]
    SpawnV0485PokemonHeatran,
    #[serde(rename = "SPAWN_V0485_POKEMON_HEATRAN_NORMAL")]
    SpawnV0485PokemonHeatranNormal,
    #[serde(rename = "SPAWN_V0486_POKEMON_REGIGIGAS")]
    SpawnV0486PokemonRegigigas,
    #[serde(rename = "SPAWN_V0486_POKEMON_REGIGIGAS_NORMAL")]
    SpawnV0486PokemonRegigigasNormal,
    #[serde(rename = "SPAWN_V0487_POKEMON_GIRATINA")]
    SpawnV0487PokemonGiratina,
    #[serde(rename = "SPAWN_V0487_POKEMON_GIRATINA_ALTERED")]
    SpawnV0487PokemonGiratinaAltered,
    #[serde(rename = "SPAWN_V0487_POKEMON_GIRATINA_ORIGIN")]
    SpawnV0487PokemonGiratinaOrigin,
    #[serde(rename = "SPAWN_V0488_POKEMON_CRESSELIA")]
    SpawnV0488PokemonCresselia,
    #[serde(rename = "SPAWN_V0488_POKEMON_CRESSELIA_NORMAL")]
    SpawnV0488PokemonCresseliaNormal,
    #[serde(rename = "SPAWN_V0489_POKEMON_PHIONE")]
    SpawnV0489PokemonPhione,
    #[serde(rename = "SPAWN_V0489_POKEMON_PHIONE_NORMAL")]
    SpawnV0489PokemonPhioneNormal,
    #[serde(rename = "SPAWN_V0490_POKEMON_MANAPHY")]
    SpawnV0490PokemonManaphy,
    #[serde(rename = "SPAWN_V0490_POKEMON_MANAPHY_NORMAL")]
    SpawnV0490PokemonManaphyNormal,
    #[serde(rename = "SPAWN_V0491_POKEMON_DARKRAI")]
    SpawnV0491PokemonDarkrai,
    #[serde(rename = "SPAWN_V0491_POKEMON_DARKRAI_NORMAL")]
    SpawnV0491PokemonDarkraiNormal,
    #[serde(rename = "SPAWN_V0492_POKEMON_SHAYMIN")]
    SpawnV0492PokemonShaymin,
    #[serde(rename = "SPAWN_V0492_POKEMON_SHAYMIN_LAND")]
    SpawnV0492PokemonShayminLand,
    #[serde(rename = "SPAWN_V0492_POKEMON_SHAYMIN_SKY")]
    SpawnV0492PokemonShayminSky,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS")]
    SpawnV0493PokemonArceus,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_BUG")]
    SpawnV0493PokemonArceusBug,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_DARK")]
    SpawnV0493PokemonArceusDark,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_DRAGON")]
    SpawnV0493PokemonArceusDragon,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_ELECTRIC")]
    SpawnV0493PokemonArceusElectric,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_FAIRY")]
    SpawnV0493PokemonArceusFairy,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_FIGHTING")]
    SpawnV0493PokemonArceusFighting,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_FIRE")]
    SpawnV0493PokemonArceusFire,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_FLYING")]
    SpawnV0493PokemonArceusFlying,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_GHOST")]
    SpawnV0493PokemonArceusGhost,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_GRASS")]
    SpawnV0493PokemonArceusGrass,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_GROUND")]
    SpawnV0493PokemonArceusGround,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_ICE")]
    SpawnV0493PokemonArceusIce,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_NORMAL")]
    SpawnV0493PokemonArceusNormal,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_POISON")]
    SpawnV0493PokemonArceusPoison,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_PSYCHIC")]
    SpawnV0493PokemonArceusPsychic,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_ROCK")]
    SpawnV0493PokemonArceusRock,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_STEEL")]
    SpawnV0493PokemonArceusSteel,
    #[serde(rename = "SPAWN_V0493_POKEMON_ARCEUS_WATER")]
    SpawnV0493PokemonArceusWater,
    #[serde(rename = "SPAWN_V0494_POKEMON_VICTINI")]
    SpawnV0494PokemonVictini,
    #[serde(rename = "SPAWN_V0494_POKEMON_VICTINI_NORMAL")]
    SpawnV0494PokemonVictiniNormal,
    #[serde(rename = "SPAWN_V0495_POKEMON_SNIVY")]
    SpawnV0495PokemonSnivy,
    #[serde(rename = "SPAWN_V0495_POKEMON_SNIVY_NORMAL")]
    SpawnV0495PokemonSnivyNormal,
    #[serde(rename = "SPAWN_V0496_POKEMON_SERVINE")]
    SpawnV0496PokemonServine,
    #[serde(rename = "SPAWN_V0496_POKEMON_SERVINE_NORMAL")]
    SpawnV0496PokemonServineNormal,
    #[serde(rename = "SPAWN_V0497_POKEMON_SERPERIOR")]
    SpawnV0497PokemonSerperior,
    #[serde(rename = "SPAWN_V0497_POKEMON_SERPERIOR_NORMAL")]
    SpawnV0497PokemonSerperiorNormal,
    #[serde(rename = "SPAWN_V0498_POKEMON_TEPIG")]
    SpawnV0498PokemonTepig,
    #[serde(rename = "SPAWN_V0498_POKEMON_TEPIG_NORMAL")]
    SpawnV0498PokemonTepigNormal,
    #[serde(rename = "SPAWN_V0499_POKEMON_PIGNITE")]
    SpawnV0499PokemonPignite,
    #[serde(rename = "SPAWN_V0499_POKEMON_PIGNITE_NORMAL")]
    SpawnV0499PokemonPigniteNormal,
    #[serde(rename = "SPAWN_V0500_POKEMON_EMBOAR")]
    SpawnV0500PokemonEmboar,
    #[serde(rename = "SPAWN_V0500_POKEMON_EMBOAR_NORMAL")]
    SpawnV0500PokemonEmboarNormal,
    #[serde(rename = "SPAWN_V0501_POKEMON_OSHAWOTT")]
    SpawnV0501PokemonOshawott,
    #[serde(rename = "SPAWN_V0501_POKEMON_OSHAWOTT_NORMAL")]
    SpawnV0501PokemonOshawottNormal,
    #[serde(rename = "SPAWN_V0502_POKEMON_DEWOTT")]
    SpawnV0502PokemonDewott,
    #[serde(rename = "SPAWN_V0502_POKEMON_DEWOTT_NORMAL")]
    SpawnV0502PokemonDewottNormal,
    #[serde(rename = "SPAWN_V0503_POKEMON_SAMUROTT")]
    SpawnV0503PokemonSamurott,
    #[serde(rename = "SPAWN_V0503_POKEMON_SAMUROTT_HISUIAN")]
    SpawnV0503PokemonSamurottHisuian,
    #[serde(rename = "SPAWN_V0503_POKEMON_SAMUROTT_NORMAL")]
    SpawnV0503PokemonSamurottNormal,
    #[serde(rename = "SPAWN_V0504_POKEMON_PATRAT")]
    SpawnV0504PokemonPatrat,
    #[serde(rename = "SPAWN_V0504_POKEMON_PATRAT_NORMAL")]
    SpawnV0504PokemonPatratNormal,
    #[serde(rename = "SPAWN_V0505_POKEMON_WATCHOG")]
    SpawnV0505PokemonWatchog,
    #[serde(rename = "SPAWN_V0505_POKEMON_WATCHOG_NORMAL")]
    SpawnV0505PokemonWatchogNormal,
    #[serde(rename = "SPAWN_V0506_POKEMON_LILLIPUP")]
    SpawnV0506PokemonLillipup,
    #[serde(rename = "SPAWN_V0506_POKEMON_LILLIPUP_NORMAL")]
    SpawnV0506PokemonLillipupNormal,
    #[serde(rename = "SPAWN_V0507_POKEMON_HERDIER")]
    SpawnV0507PokemonHerdier,
    #[serde(rename = "SPAWN_V0507_POKEMON_HERDIER_NORMAL")]
    SpawnV0507PokemonHerdierNormal,
    #[serde(rename = "SPAWN_V0508_POKEMON_STOUTLAND")]
    SpawnV0508PokemonStoutland,
    #[serde(rename = "SPAWN_V0508_POKEMON_STOUTLAND_NORMAL")]
    SpawnV0508PokemonStoutlandNormal,
    #[serde(rename = "SPAWN_V0509_POKEMON_PURRLOIN")]
    SpawnV0509PokemonPurrloin,
    #[serde(rename = "SPAWN_V0509_POKEMON_PURRLOIN_NORMAL")]
    SpawnV0509PokemonPurrloinNormal,
    #[serde(rename = "SPAWN_V0510_POKEMON_LIEPARD")]
    SpawnV0510PokemonLiepard,
    #[serde(rename = "SPAWN_V0510_POKEMON_LIEPARD_NORMAL")]
    SpawnV0510PokemonLiepardNormal,
    #[serde(rename = "SPAWN_V0511_POKEMON_PANSAGE")]
    SpawnV0511PokemonPansage,
    #[serde(rename = "SPAWN_V0511_POKEMON_PANSAGE_NORMAL")]
    SpawnV0511PokemonPansageNormal,
    #[serde(rename = "SPAWN_V0512_POKEMON_SIMISAGE")]
    SpawnV0512PokemonSimisage,
    #[serde(rename = "SPAWN_V0512_POKEMON_SIMISAGE_NORMAL")]
    SpawnV0512PokemonSimisageNormal,
    #[serde(rename = "SPAWN_V0513_POKEMON_PANSEAR")]
    SpawnV0513PokemonPansear,
    #[serde(rename = "SPAWN_V0513_POKEMON_PANSEAR_NORMAL")]
    SpawnV0513PokemonPansearNormal,
    #[serde(rename = "SPAWN_V0514_POKEMON_SIMISEAR")]
    SpawnV0514PokemonSimisear,
    #[serde(rename = "SPAWN_V0514_POKEMON_SIMISEAR_NORMAL")]
    SpawnV0514PokemonSimisearNormal,
    #[serde(rename = "SPAWN_V0515_POKEMON_PANPOUR")]
    SpawnV0515PokemonPanpour,
    #[serde(rename = "SPAWN_V0515_POKEMON_PANPOUR_NORMAL")]
    SpawnV0515PokemonPanpourNormal,
    #[serde(rename = "SPAWN_V0516_POKEMON_SIMIPOUR")]
    SpawnV0516PokemonSimipour,
    #[serde(rename = "SPAWN_V0516_POKEMON_SIMIPOUR_NORMAL")]
    SpawnV0516PokemonSimipourNormal,
    #[serde(rename = "SPAWN_V0517_POKEMON_MUNNA")]
    SpawnV0517PokemonMunna,
    #[serde(rename = "SPAWN_V0517_POKEMON_MUNNA_NORMAL")]
    SpawnV0517PokemonMunnaNormal,
    #[serde(rename = "SPAWN_V0518_POKEMON_MUSHARNA")]
    SpawnV0518PokemonMusharna,
    #[serde(rename = "SPAWN_V0518_POKEMON_MUSHARNA_NORMAL")]
    SpawnV0518PokemonMusharnaNormal,
    #[serde(rename = "SPAWN_V0519_POKEMON_PIDOVE")]
    SpawnV0519PokemonPidove,
    #[serde(rename = "SPAWN_V0519_POKEMON_PIDOVE_NORMAL")]
    SpawnV0519PokemonPidoveNormal,
    #[serde(rename = "SPAWN_V0520_POKEMON_TRANQUILL")]
    SpawnV0520PokemonTranquill,
    #[serde(rename = "SPAWN_V0520_POKEMON_TRANQUILL_NORMAL")]
    SpawnV0520PokemonTranquillNormal,
    #[serde(rename = "SPAWN_V0521_POKEMON_UNFEZANT")]
    SpawnV0521PokemonUnfezant,
    #[serde(rename = "SPAWN_V0521_POKEMON_UNFEZANT_NORMAL")]
    SpawnV0521PokemonUnfezantNormal,
    #[serde(rename = "SPAWN_V0522_POKEMON_BLITZLE")]
    SpawnV0522PokemonBlitzle,
    #[serde(rename = "SPAWN_V0522_POKEMON_BLITZLE_NORMAL")]
    SpawnV0522PokemonBlitzleNormal,
    #[serde(rename = "SPAWN_V0523_POKEMON_ZEBSTRIKA")]
    SpawnV0523PokemonZebstrika,
    #[serde(rename = "SPAWN_V0523_POKEMON_ZEBSTRIKA_NORMAL")]
    SpawnV0523PokemonZebstrikaNormal,
    #[serde(rename = "SPAWN_V0524_POKEMON_ROGGENROLA")]
    SpawnV0524PokemonRoggenrola,
    #[serde(rename = "SPAWN_V0524_POKEMON_ROGGENROLA_NORMAL")]
    SpawnV0524PokemonRoggenrolaNormal,
    #[serde(rename = "SPAWN_V0525_POKEMON_BOLDORE")]
    SpawnV0525PokemonBoldore,
    #[serde(rename = "SPAWN_V0525_POKEMON_BOLDORE_NORMAL")]
    SpawnV0525PokemonBoldoreNormal,
    #[serde(rename = "SPAWN_V0526_POKEMON_GIGALITH")]
    SpawnV0526PokemonGigalith,
    #[serde(rename = "SPAWN_V0526_POKEMON_GIGALITH_NORMAL")]
    SpawnV0526PokemonGigalithNormal,
    #[serde(rename = "SPAWN_V0527_POKEMON_WOOBAT")]
    SpawnV0527PokemonWoobat,
    #[serde(rename = "SPAWN_V0527_POKEMON_WOOBAT_NORMAL")]
    SpawnV0527PokemonWoobatNormal,
    #[serde(rename = "SPAWN_V0528_POKEMON_SWOOBAT")]
    SpawnV0528PokemonSwoobat,
    #[serde(rename = "SPAWN_V0528_POKEMON_SWOOBAT_NORMAL")]
    SpawnV0528PokemonSwoobatNormal,
    #[serde(rename = "SPAWN_V0529_POKEMON_DRILBUR")]
    SpawnV0529PokemonDrilbur,
    #[serde(rename = "SPAWN_V0529_POKEMON_DRILBUR_NORMAL")]
    SpawnV0529PokemonDrilburNormal,
    #[serde(rename = "SPAWN_V0530_POKEMON_EXCADRILL")]
    SpawnV0530PokemonExcadrill,
    #[serde(rename = "SPAWN_V0530_POKEMON_EXCADRILL_NORMAL")]
    SpawnV0530PokemonExcadrillNormal,
    #[serde(rename = "SPAWN_V0531_POKEMON_AUDINO")]
    SpawnV0531PokemonAudino,
    #[serde(rename = "SPAWN_V0531_POKEMON_AUDINO_NORMAL")]
    SpawnV0531PokemonAudinoNormal,
    #[serde(rename = "SPAWN_V0532_POKEMON_TIMBURR")]
    SpawnV0532PokemonTimburr,
    #[serde(rename = "SPAWN_V0532_POKEMON_TIMBURR_NORMAL")]
    SpawnV0532PokemonTimburrNormal,
    #[serde(rename = "SPAWN_V0533_POKEMON_GURDURR")]
    SpawnV0533PokemonGurdurr,
    #[serde(rename = "SPAWN_V0533_POKEMON_GURDURR_NORMAL")]
    SpawnV0533PokemonGurdurrNormal,
    #[serde(rename = "SPAWN_V0534_POKEMON_CONKELDURR")]
    SpawnV0534PokemonConkeldurr,
    #[serde(rename = "SPAWN_V0534_POKEMON_CONKELDURR_NORMAL")]
    SpawnV0534PokemonConkeldurrNormal,
    #[serde(rename = "SPAWN_V0535_POKEMON_TYMPOLE")]
    SpawnV0535PokemonTympole,
    #[serde(rename = "SPAWN_V0535_POKEMON_TYMPOLE_NORMAL")]
    SpawnV0535PokemonTympoleNormal,
    #[serde(rename = "SPAWN_V0536_POKEMON_PALPITOAD")]
    SpawnV0536PokemonPalpitoad,
    #[serde(rename = "SPAWN_V0536_POKEMON_PALPITOAD_NORMAL")]
    SpawnV0536PokemonPalpitoadNormal,
    #[serde(rename = "SPAWN_V0537_POKEMON_SEISMITOAD")]
    SpawnV0537PokemonSeismitoad,
    #[serde(rename = "SPAWN_V0537_POKEMON_SEISMITOAD_NORMAL")]
    SpawnV0537PokemonSeismitoadNormal,
    #[serde(rename = "SPAWN_V0538_POKEMON_THROH")]
    SpawnV0538PokemonThroh,
    #[serde(rename = "SPAWN_V0538_POKEMON_THROH_NORMAL")]
    SpawnV0538PokemonThrohNormal,
    #[serde(rename = "SPAWN_V0539_POKEMON_SAWK")]
    SpawnV0539PokemonSawk,
    #[serde(rename = "SPAWN_V0539_POKEMON_SAWK_NORMAL")]
    SpawnV0539PokemonSawkNormal,
    #[serde(rename = "SPAWN_V0540_POKEMON_SEWADDLE")]
    SpawnV0540PokemonSewaddle,
    #[serde(rename = "SPAWN_V0540_POKEMON_SEWADDLE_NORMAL")]
    SpawnV0540PokemonSewaddleNormal,
    #[serde(rename = "SPAWN_V0541_POKEMON_SWADLOON")]
    SpawnV0541PokemonSwadloon,
    #[serde(rename = "SPAWN_V0541_POKEMON_SWADLOON_NORMAL")]
    SpawnV0541PokemonSwadloonNormal,
    #[serde(rename = "SPAWN_V0542_POKEMON_LEAVANNY")]
    SpawnV0542PokemonLeavanny,
    #[serde(rename = "SPAWN_V0542_POKEMON_LEAVANNY_NORMAL")]
    SpawnV0542PokemonLeavannyNormal,
    #[serde(rename = "SPAWN_V0543_POKEMON_VENIPEDE")]
    SpawnV0543PokemonVenipede,
    #[serde(rename = "SPAWN_V0543_POKEMON_VENIPEDE_NORMAL")]
    SpawnV0543PokemonVenipedeNormal,
    #[serde(rename = "SPAWN_V0544_POKEMON_WHIRLIPEDE")]
    SpawnV0544PokemonWhirlipede,
    #[serde(rename = "SPAWN_V0544_POKEMON_WHIRLIPEDE_NORMAL")]
    SpawnV0544PokemonWhirlipedeNormal,
    #[serde(rename = "SPAWN_V0545_POKEMON_SCOLIPEDE")]
    SpawnV0545PokemonScolipede,
    #[serde(rename = "SPAWN_V0545_POKEMON_SCOLIPEDE_NORMAL")]
    SpawnV0545PokemonScolipedeNormal,
    #[serde(rename = "SPAWN_V0546_POKEMON_COTTONEE")]
    SpawnV0546PokemonCottonee,
    #[serde(rename = "SPAWN_V0546_POKEMON_COTTONEE_NORMAL")]
    SpawnV0546PokemonCottoneeNormal,
    #[serde(rename = "SPAWN_V0547_POKEMON_WHIMSICOTT")]
    SpawnV0547PokemonWhimsicott,
    #[serde(rename = "SPAWN_V0547_POKEMON_WHIMSICOTT_NORMAL")]
    SpawnV0547PokemonWhimsicottNormal,
    #[serde(rename = "SPAWN_V0548_POKEMON_PETILIL")]
    SpawnV0548PokemonPetilil,
    #[serde(rename = "SPAWN_V0548_POKEMON_PETILIL_NORMAL")]
    SpawnV0548PokemonPetililNormal,
    #[serde(rename = "SPAWN_V0549_POKEMON_LILLIGANT")]
    SpawnV0549PokemonLilligant,
    #[serde(rename = "SPAWN_V0549_POKEMON_LILLIGANT_HISUIAN")]
    SpawnV0549PokemonLilligantHisuian,
    #[serde(rename = "SPAWN_V0549_POKEMON_LILLIGANT_NORMAL")]
    SpawnV0549PokemonLilligantNormal,
    #[serde(rename = "SPAWN_V0550_POKEMON_BASCULIN")]
    SpawnV0550PokemonBasculin,
    #[serde(rename = "SPAWN_V0550_POKEMON_BASCULIN_BLUE_STRIPED")]
    SpawnV0550PokemonBasculinBlueStriped,
    #[serde(rename = "SPAWN_V0550_POKEMON_BASCULIN_RED_STRIPED")]
    SpawnV0550PokemonBasculinRedStriped,
    #[serde(rename = "SPAWN_V0550_POKEMON_BASCULIN_WHITE_STRIPED")]
    SpawnV0550PokemonBasculinWhiteStriped,
    #[serde(rename = "SPAWN_V0551_POKEMON_SANDILE")]
    SpawnV0551PokemonSandile,
    #[serde(rename = "SPAWN_V0551_POKEMON_SANDILE_NORMAL")]
    SpawnV0551PokemonSandileNormal,
    #[serde(rename = "SPAWN_V0552_POKEMON_KROKOROK")]
    SpawnV0552PokemonKrokorok,
    #[serde(rename = "SPAWN_V0552_POKEMON_KROKOROK_NORMAL")]
    SpawnV0552PokemonKrokorokNormal,
    #[serde(rename = "SPAWN_V0553_POKEMON_KROOKODILE")]
    SpawnV0553PokemonKrookodile,
    #[serde(rename = "SPAWN_V0553_POKEMON_KROOKODILE_NORMAL")]
    SpawnV0553PokemonKrookodileNormal,
    #[serde(rename = "SPAWN_V0554_POKEMON_DARUMAKA")]
    SpawnV0554PokemonDarumaka,
    #[serde(rename = "SPAWN_V0554_POKEMON_DARUMAKA_GALARIAN")]
    SpawnV0554PokemonDarumakaGalarian,
    #[serde(rename = "SPAWN_V0554_POKEMON_DARUMAKA_NORMAL")]
    SpawnV0554PokemonDarumakaNormal,
    #[serde(rename = "SPAWN_V0555_POKEMON_DARMANITAN")]
    SpawnV0555PokemonDarmanitan,
    #[serde(rename = "SPAWN_V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD")]
    SpawnV0555PokemonDarmanitanGalarianStandard,
    #[serde(rename = "SPAWN_V0555_POKEMON_DARMANITAN_GALARIAN_ZEN")]
    SpawnV0555PokemonDarmanitanGalarianZen,
    #[serde(rename = "SPAWN_V0555_POKEMON_DARMANITAN_STANDARD")]
    SpawnV0555PokemonDarmanitanStandard,
    #[serde(rename = "SPAWN_V0555_POKEMON_DARMANITAN_ZEN")]
    SpawnV0555PokemonDarmanitanZen,
    #[serde(rename = "SPAWN_V0556_POKEMON_MARACTUS")]
    SpawnV0556PokemonMaractus,
    #[serde(rename = "SPAWN_V0556_POKEMON_MARACTUS_NORMAL")]
    SpawnV0556PokemonMaractusNormal,
    #[serde(rename = "SPAWN_V0557_POKEMON_DWEBBLE")]
    SpawnV0557PokemonDwebble,
    #[serde(rename = "SPAWN_V0557_POKEMON_DWEBBLE_NORMAL")]
    SpawnV0557PokemonDwebbleNormal,
    #[serde(rename = "SPAWN_V0558_POKEMON_CRUSTLE")]
    SpawnV0558PokemonCrustle,
    #[serde(rename = "SPAWN_V0558_POKEMON_CRUSTLE_NORMAL")]
    SpawnV0558PokemonCrustleNormal,
    #[serde(rename = "SPAWN_V0559_POKEMON_SCRAGGY")]
    SpawnV0559PokemonScraggy,
    #[serde(rename = "SPAWN_V0559_POKEMON_SCRAGGY_NORMAL")]
    SpawnV0559PokemonScraggyNormal,
    #[serde(rename = "SPAWN_V0560_POKEMON_SCRAFTY")]
    SpawnV0560PokemonScrafty,
    #[serde(rename = "SPAWN_V0560_POKEMON_SCRAFTY_NORMAL")]
    SpawnV0560PokemonScraftyNormal,
    #[serde(rename = "SPAWN_V0561_POKEMON_SIGILYPH")]
    SpawnV0561PokemonSigilyph,
    #[serde(rename = "SPAWN_V0561_POKEMON_SIGILYPH_NORMAL")]
    SpawnV0561PokemonSigilyphNormal,
    #[serde(rename = "SPAWN_V0562_POKEMON_YAMASK")]
    SpawnV0562PokemonYamask,
    #[serde(rename = "SPAWN_V0562_POKEMON_YAMASK_GALARIAN")]
    SpawnV0562PokemonYamaskGalarian,
    #[serde(rename = "SPAWN_V0562_POKEMON_YAMASK_NORMAL")]
    SpawnV0562PokemonYamaskNormal,
    #[serde(rename = "SPAWN_V0563_POKEMON_COFAGRIGUS")]
    SpawnV0563PokemonCofagrigus,
    #[serde(rename = "SPAWN_V0563_POKEMON_COFAGRIGUS_NORMAL")]
    SpawnV0563PokemonCofagrigusNormal,
    #[serde(rename = "SPAWN_V0564_POKEMON_TIRTOUGA")]
    SpawnV0564PokemonTirtouga,
    #[serde(rename = "SPAWN_V0564_POKEMON_TIRTOUGA_NORMAL")]
    SpawnV0564PokemonTirtougaNormal,
    #[serde(rename = "SPAWN_V0565_POKEMON_CARRACOSTA")]
    SpawnV0565PokemonCarracosta,
    #[serde(rename = "SPAWN_V0565_POKEMON_CARRACOSTA_NORMAL")]
    SpawnV0565PokemonCarracostaNormal,
    #[serde(rename = "SPAWN_V0566_POKEMON_ARCHEN")]
    SpawnV0566PokemonArchen,
    #[serde(rename = "SPAWN_V0566_POKEMON_ARCHEN_NORMAL")]
    SpawnV0566PokemonArchenNormal,
    #[serde(rename = "SPAWN_V0567_POKEMON_ARCHEOPS")]
    SpawnV0567PokemonArcheops,
    #[serde(rename = "SPAWN_V0567_POKEMON_ARCHEOPS_NORMAL")]
    SpawnV0567PokemonArcheopsNormal,
    #[serde(rename = "SPAWN_V0568_POKEMON_TRUBBISH")]
    SpawnV0568PokemonTrubbish,
    #[serde(rename = "SPAWN_V0568_POKEMON_TRUBBISH_NORMAL")]
    SpawnV0568PokemonTrubbishNormal,
    #[serde(rename = "SPAWN_V0569_POKEMON_GARBODOR")]
    SpawnV0569PokemonGarbodor,
    #[serde(rename = "SPAWN_V0569_POKEMON_GARBODOR_NORMAL")]
    SpawnV0569PokemonGarbodorNormal,
    #[serde(rename = "SPAWN_V0570_POKEMON_ZORUA")]
    SpawnV0570PokemonZorua,
    #[serde(rename = "SPAWN_V0570_POKEMON_ZORUA_HISUIAN")]
    SpawnV0570PokemonZoruaHisuian,
    #[serde(rename = "SPAWN_V0570_POKEMON_ZORUA_NORMAL")]
    SpawnV0570PokemonZoruaNormal,
    #[serde(rename = "SPAWN_V0571_POKEMON_ZOROARK")]
    SpawnV0571PokemonZoroark,
    #[serde(rename = "SPAWN_V0571_POKEMON_ZOROARK_HISUIAN")]
    SpawnV0571PokemonZoroarkHisuian,
    #[serde(rename = "SPAWN_V0571_POKEMON_ZOROARK_NORMAL")]
    SpawnV0571PokemonZoroarkNormal,
    #[serde(rename = "SPAWN_V0572_POKEMON_MINCCINO")]
    SpawnV0572PokemonMinccino,
    #[serde(rename = "SPAWN_V0572_POKEMON_MINCCINO_NORMAL")]
    SpawnV0572PokemonMinccinoNormal,
    #[serde(rename = "SPAWN_V0573_POKEMON_CINCCINO")]
    SpawnV0573PokemonCinccino,
    #[serde(rename = "SPAWN_V0573_POKEMON_CINCCINO_NORMAL")]
    SpawnV0573PokemonCinccinoNormal,
    #[serde(rename = "SPAWN_V0574_POKEMON_GOTHITA")]
    SpawnV0574PokemonGothita,
    #[serde(rename = "SPAWN_V0574_POKEMON_GOTHITA_NORMAL")]
    SpawnV0574PokemonGothitaNormal,
    #[serde(rename = "SPAWN_V0575_POKEMON_GOTHORITA")]
    SpawnV0575PokemonGothorita,
    #[serde(rename = "SPAWN_V0575_POKEMON_GOTHORITA_NORMAL")]
    SpawnV0575PokemonGothoritaNormal,
    #[serde(rename = "SPAWN_V0576_POKEMON_GOTHITELLE")]
    SpawnV0576PokemonGothitelle,
    #[serde(rename = "SPAWN_V0576_POKEMON_GOTHITELLE_NORMAL")]
    SpawnV0576PokemonGothitelleNormal,
    #[serde(rename = "SPAWN_V0577_POKEMON_SOLOSIS")]
    SpawnV0577PokemonSolosis,
    #[serde(rename = "SPAWN_V0577_POKEMON_SOLOSIS_NORMAL")]
    SpawnV0577PokemonSolosisNormal,
    #[serde(rename = "SPAWN_V0578_POKEMON_DUOSION")]
    SpawnV0578PokemonDuosion,
    #[serde(rename = "SPAWN_V0578_POKEMON_DUOSION_NORMAL")]
    SpawnV0578PokemonDuosionNormal,
    #[serde(rename = "SPAWN_V0579_POKEMON_REUNICLUS")]
    SpawnV0579PokemonReuniclus,
    #[serde(rename = "SPAWN_V0579_POKEMON_REUNICLUS_NORMAL")]
    SpawnV0579PokemonReuniclusNormal,
    #[serde(rename = "SPAWN_V0580_POKEMON_DUCKLETT")]
    SpawnV0580PokemonDucklett,
    #[serde(rename = "SPAWN_V0580_POKEMON_DUCKLETT_NORMAL")]
    SpawnV0580PokemonDucklettNormal,
    #[serde(rename = "SPAWN_V0581_POKEMON_SWANNA")]
    SpawnV0581PokemonSwanna,
    #[serde(rename = "SPAWN_V0581_POKEMON_SWANNA_NORMAL")]
    SpawnV0581PokemonSwannaNormal,
    #[serde(rename = "SPAWN_V0582_POKEMON_VANILLITE")]
    SpawnV0582PokemonVanillite,
    #[serde(rename = "SPAWN_V0582_POKEMON_VANILLITE_NORMAL")]
    SpawnV0582PokemonVanilliteNormal,
    #[serde(rename = "SPAWN_V0583_POKEMON_VANILLISH")]
    SpawnV0583PokemonVanillish,
    #[serde(rename = "SPAWN_V0583_POKEMON_VANILLISH_NORMAL")]
    SpawnV0583PokemonVanillishNormal,
    #[serde(rename = "SPAWN_V0584_POKEMON_VANILLUXE")]
    SpawnV0584PokemonVanilluxe,
    #[serde(rename = "SPAWN_V0584_POKEMON_VANILLUXE_NORMAL")]
    SpawnV0584PokemonVanilluxeNormal,
    #[serde(rename = "SPAWN_V0585_POKEMON_DEERLING")]
    SpawnV0585PokemonDeerling,
    #[serde(rename = "SPAWN_V0585_POKEMON_DEERLING_AUTUMN")]
    SpawnV0585PokemonDeerlingAutumn,
    #[serde(rename = "SPAWN_V0585_POKEMON_DEERLING_SPRING")]
    SpawnV0585PokemonDeerlingSpring,
    #[serde(rename = "SPAWN_V0585_POKEMON_DEERLING_SUMMER")]
    SpawnV0585PokemonDeerlingSummer,
    #[serde(rename = "SPAWN_V0585_POKEMON_DEERLING_WINTER")]
    SpawnV0585PokemonDeerlingWinter,
    #[serde(rename = "SPAWN_V0586_POKEMON_SAWSBUCK")]
    SpawnV0586PokemonSawsbuck,
    #[serde(rename = "SPAWN_V0586_POKEMON_SAWSBUCK_AUTUMN")]
    SpawnV0586PokemonSawsbuckAutumn,
    #[serde(rename = "SPAWN_V0586_POKEMON_SAWSBUCK_SPRING")]
    SpawnV0586PokemonSawsbuckSpring,
    #[serde(rename = "SPAWN_V0586_POKEMON_SAWSBUCK_SUMMER")]
    SpawnV0586PokemonSawsbuckSummer,
    #[serde(rename = "SPAWN_V0586_POKEMON_SAWSBUCK_WINTER")]
    SpawnV0586PokemonSawsbuckWinter,
    #[serde(rename = "SPAWN_V0587_POKEMON_EMOLGA")]
    SpawnV0587PokemonEmolga,
    #[serde(rename = "SPAWN_V0587_POKEMON_EMOLGA_NORMAL")]
    SpawnV0587PokemonEmolgaNormal,
    #[serde(rename = "SPAWN_V0588_POKEMON_KARRABLAST")]
    SpawnV0588PokemonKarrablast,
    #[serde(rename = "SPAWN_V0588_POKEMON_KARRABLAST_NORMAL")]
    SpawnV0588PokemonKarrablastNormal,
    #[serde(rename = "SPAWN_V0589_POKEMON_ESCAVALIER")]
    SpawnV0589PokemonEscavalier,
    #[serde(rename = "SPAWN_V0589_POKEMON_ESCAVALIER_NORMAL")]
    SpawnV0589PokemonEscavalierNormal,
    #[serde(rename = "SPAWN_V0590_POKEMON_FOONGUS")]
    SpawnV0590PokemonFoongus,
    #[serde(rename = "SPAWN_V0590_POKEMON_FOONGUS_NORMAL")]
    SpawnV0590PokemonFoongusNormal,
    #[serde(rename = "SPAWN_V0591_POKEMON_AMOONGUSS")]
    SpawnV0591PokemonAmoonguss,
    #[serde(rename = "SPAWN_V0591_POKEMON_AMOONGUSS_NORMAL")]
    SpawnV0591PokemonAmoongussNormal,
    #[serde(rename = "SPAWN_V0592_POKEMON_FRILLISH")]
    SpawnV0592PokemonFrillish,
    #[serde(rename = "SPAWN_V0592_POKEMON_FRILLISH_FEMALE")]
    SpawnV0592PokemonFrillishFemale,
    #[serde(rename = "SPAWN_V0592_POKEMON_FRILLISH_NORMAL")]
    SpawnV0592PokemonFrillishNormal,
    #[serde(rename = "SPAWN_V0593_POKEMON_JELLICENT")]
    SpawnV0593PokemonJellicent,
    #[serde(rename = "SPAWN_V0593_POKEMON_JELLICENT_FEMALE")]
    SpawnV0593PokemonJellicentFemale,
    #[serde(rename = "SPAWN_V0593_POKEMON_JELLICENT_NORMAL")]
    SpawnV0593PokemonJellicentNormal,
    #[serde(rename = "SPAWN_V0594_POKEMON_ALOMOMOLA")]
    SpawnV0594PokemonAlomomola,
    #[serde(rename = "SPAWN_V0594_POKEMON_ALOMOMOLA_NORMAL")]
    SpawnV0594PokemonAlomomolaNormal,
    #[serde(rename = "SPAWN_V0595_POKEMON_JOLTIK")]
    SpawnV0595PokemonJoltik,
    #[serde(rename = "SPAWN_V0595_POKEMON_JOLTIK_NORMAL")]
    SpawnV0595PokemonJoltikNormal,
    #[serde(rename = "SPAWN_V0596_POKEMON_GALVANTULA")]
    SpawnV0596PokemonGalvantula,
    #[serde(rename = "SPAWN_V0596_POKEMON_GALVANTULA_NORMAL")]
    SpawnV0596PokemonGalvantulaNormal,
    #[serde(rename = "SPAWN_V0597_POKEMON_FERROSEED")]
    SpawnV0597PokemonFerroseed,
    #[serde(rename = "SPAWN_V0597_POKEMON_FERROSEED_NORMAL")]
    SpawnV0597PokemonFerroseedNormal,
    #[serde(rename = "SPAWN_V0598_POKEMON_FERROTHORN")]
    SpawnV0598PokemonFerrothorn,
    #[serde(rename = "SPAWN_V0598_POKEMON_FERROTHORN_NORMAL")]
    SpawnV0598PokemonFerrothornNormal,
    #[serde(rename = "SPAWN_V0599_POKEMON_KLINK")]
    SpawnV0599PokemonKlink,
    #[serde(rename = "SPAWN_V0599_POKEMON_KLINK_NORMAL")]
    SpawnV0599PokemonKlinkNormal,
    #[serde(rename = "SPAWN_V0600_POKEMON_KLANG")]
    SpawnV0600PokemonKlang,
    #[serde(rename = "SPAWN_V0600_POKEMON_KLANG_NORMAL")]
    SpawnV0600PokemonKlangNormal,
    #[serde(rename = "SPAWN_V0601_POKEMON_KLINKLANG")]
    SpawnV0601PokemonKlinklang,
    #[serde(rename = "SPAWN_V0601_POKEMON_KLINKLANG_NORMAL")]
    SpawnV0601PokemonKlinklangNormal,
    #[serde(rename = "SPAWN_V0602_POKEMON_TYNAMO")]
    SpawnV0602PokemonTynamo,
    #[serde(rename = "SPAWN_V0602_POKEMON_TYNAMO_NORMAL")]
    SpawnV0602PokemonTynamoNormal,
    #[serde(rename = "SPAWN_V0603_POKEMON_EELEKTRIK")]
    SpawnV0603PokemonEelektrik,
    #[serde(rename = "SPAWN_V0603_POKEMON_EELEKTRIK_NORMAL")]
    SpawnV0603PokemonEelektrikNormal,
    #[serde(rename = "SPAWN_V0604_POKEMON_EELEKTROSS")]
    SpawnV0604PokemonEelektross,
    #[serde(rename = "SPAWN_V0604_POKEMON_EELEKTROSS_NORMAL")]
    SpawnV0604PokemonEelektrossNormal,
    #[serde(rename = "SPAWN_V0605_POKEMON_ELGYEM")]
    SpawnV0605PokemonElgyem,
    #[serde(rename = "SPAWN_V0605_POKEMON_ELGYEM_NORMAL")]
    SpawnV0605PokemonElgyemNormal,
    #[serde(rename = "SPAWN_V0606_POKEMON_BEHEEYEM")]
    SpawnV0606PokemonBeheeyem,
    #[serde(rename = "SPAWN_V0606_POKEMON_BEHEEYEM_NORMAL")]
    SpawnV0606PokemonBeheeyemNormal,
    #[serde(rename = "SPAWN_V0607_POKEMON_LITWICK")]
    SpawnV0607PokemonLitwick,
    #[serde(rename = "SPAWN_V0607_POKEMON_LITWICK_NORMAL")]
    SpawnV0607PokemonLitwickNormal,
    #[serde(rename = "SPAWN_V0608_POKEMON_LAMPENT")]
    SpawnV0608PokemonLampent,
    #[serde(rename = "SPAWN_V0608_POKEMON_LAMPENT_NORMAL")]
    SpawnV0608PokemonLampentNormal,
    #[serde(rename = "SPAWN_V0609_POKEMON_CHANDELURE")]
    SpawnV0609PokemonChandelure,
    #[serde(rename = "SPAWN_V0609_POKEMON_CHANDELURE_NORMAL")]
    SpawnV0609PokemonChandelureNormal,
    #[serde(rename = "SPAWN_V0610_POKEMON_AXEW")]
    SpawnV0610PokemonAxew,
    #[serde(rename = "SPAWN_V0610_POKEMON_AXEW_NORMAL")]
    SpawnV0610PokemonAxewNormal,
    #[serde(rename = "SPAWN_V0611_POKEMON_FRAXURE")]
    SpawnV0611PokemonFraxure,
    #[serde(rename = "SPAWN_V0611_POKEMON_FRAXURE_NORMAL")]
    SpawnV0611PokemonFraxureNormal,
    #[serde(rename = "SPAWN_V0612_POKEMON_HAXORUS")]
    SpawnV0612PokemonHaxorus,
    #[serde(rename = "SPAWN_V0612_POKEMON_HAXORUS_NORMAL")]
    SpawnV0612PokemonHaxorusNormal,
    #[serde(rename = "SPAWN_V0613_POKEMON_CUBCHOO")]
    SpawnV0613PokemonCubchoo,
    #[serde(rename = "SPAWN_V0613_POKEMON_CUBCHOO_NORMAL")]
    SpawnV0613PokemonCubchooNormal,
    #[serde(rename = "SPAWN_V0613_POKEMON_CUBCHOO_WINTER_2020")]
    SpawnV0613PokemonCubchooWinter2020,
    #[serde(rename = "SPAWN_V0614_POKEMON_BEARTIC")]
    SpawnV0614PokemonBeartic,
    #[serde(rename = "SPAWN_V0614_POKEMON_BEARTIC_NORMAL")]
    SpawnV0614PokemonBearticNormal,
    #[serde(rename = "SPAWN_V0614_POKEMON_BEARTIC_WINTER_2020")]
    SpawnV0614PokemonBearticWinter2020,
    #[serde(rename = "SPAWN_V0615_POKEMON_CRYOGONAL")]
    SpawnV0615PokemonCryogonal,
    #[serde(rename = "SPAWN_V0615_POKEMON_CRYOGONAL_NORMAL")]
    SpawnV0615PokemonCryogonalNormal,
    #[serde(rename = "SPAWN_V0616_POKEMON_SHELMET")]
    SpawnV0616PokemonShelmet,
    #[serde(rename = "SPAWN_V0616_POKEMON_SHELMET_NORMAL")]
    SpawnV0616PokemonShelmetNormal,
    #[serde(rename = "SPAWN_V0617_POKEMON_ACCELGOR")]
    SpawnV0617PokemonAccelgor,
    #[serde(rename = "SPAWN_V0617_POKEMON_ACCELGOR_NORMAL")]
    SpawnV0617PokemonAccelgorNormal,
    #[serde(rename = "SPAWN_V0618_POKEMON_STUNFISK")]
    SpawnV0618PokemonStunfisk,
    #[serde(rename = "SPAWN_V0618_POKEMON_STUNFISK_GALARIAN")]
    SpawnV0618PokemonStunfiskGalarian,
    #[serde(rename = "SPAWN_V0618_POKEMON_STUNFISK_NORMAL")]
    SpawnV0618PokemonStunfiskNormal,
    #[serde(rename = "SPAWN_V0619_POKEMON_MIENFOO")]
    SpawnV0619PokemonMienfoo,
    #[serde(rename = "SPAWN_V0619_POKEMON_MIENFOO_NORMAL")]
    SpawnV0619PokemonMienfooNormal,
    #[serde(rename = "SPAWN_V0620_POKEMON_MIENSHAO")]
    SpawnV0620PokemonMienshao,
    #[serde(rename = "SPAWN_V0620_POKEMON_MIENSHAO_NORMAL")]
    SpawnV0620PokemonMienshaoNormal,
    #[serde(rename = "SPAWN_V0621_POKEMON_DRUDDIGON")]
    SpawnV0621PokemonDruddigon,
    #[serde(rename = "SPAWN_V0621_POKEMON_DRUDDIGON_NORMAL")]
    SpawnV0621PokemonDruddigonNormal,
    #[serde(rename = "SPAWN_V0622_POKEMON_GOLETT")]
    SpawnV0622PokemonGolett,
    #[serde(rename = "SPAWN_V0622_POKEMON_GOLETT_NORMAL")]
    SpawnV0622PokemonGolettNormal,
    #[serde(rename = "SPAWN_V0623_POKEMON_GOLURK")]
    SpawnV0623PokemonGolurk,
    #[serde(rename = "SPAWN_V0623_POKEMON_GOLURK_NORMAL")]
    SpawnV0623PokemonGolurkNormal,
    #[serde(rename = "SPAWN_V0624_POKEMON_PAWNIARD")]
    SpawnV0624PokemonPawniard,
    #[serde(rename = "SPAWN_V0624_POKEMON_PAWNIARD_NORMAL")]
    SpawnV0624PokemonPawniardNormal,
    #[serde(rename = "SPAWN_V0625_POKEMON_BISHARP")]
    SpawnV0625PokemonBisharp,
    #[serde(rename = "SPAWN_V0625_POKEMON_BISHARP_NORMAL")]
    SpawnV0625PokemonBisharpNormal,
    #[serde(rename = "SPAWN_V0626_POKEMON_BOUFFALANT")]
    SpawnV0626PokemonBouffalant,
    #[serde(rename = "SPAWN_V0626_POKEMON_BOUFFALANT_NORMAL")]
    SpawnV0626PokemonBouffalantNormal,
    #[serde(rename = "SPAWN_V0627_POKEMON_RUFFLET")]
    SpawnV0627PokemonRufflet,
    #[serde(rename = "SPAWN_V0627_POKEMON_RUFFLET_NORMAL")]
    SpawnV0627PokemonRuffletNormal,
    #[serde(rename = "SPAWN_V0628_POKEMON_BRAVIARY")]
    SpawnV0628PokemonBraviary,
    #[serde(rename = "SPAWN_V0628_POKEMON_BRAVIARY_HISUIAN")]
    SpawnV0628PokemonBraviaryHisuian,
    #[serde(rename = "SPAWN_V0628_POKEMON_BRAVIARY_NORMAL")]
    SpawnV0628PokemonBraviaryNormal,
    #[serde(rename = "SPAWN_V0629_POKEMON_VULLABY")]
    SpawnV0629PokemonVullaby,
    #[serde(rename = "SPAWN_V0629_POKEMON_VULLABY_NORMAL")]
    SpawnV0629PokemonVullabyNormal,
    #[serde(rename = "SPAWN_V0630_POKEMON_MANDIBUZZ")]
    SpawnV0630PokemonMandibuzz,
    #[serde(rename = "SPAWN_V0630_POKEMON_MANDIBUZZ_NORMAL")]
    SpawnV0630PokemonMandibuzzNormal,
    #[serde(rename = "SPAWN_V0631_POKEMON_HEATMOR")]
    SpawnV0631PokemonHeatmor,
    #[serde(rename = "SPAWN_V0631_POKEMON_HEATMOR_NORMAL")]
    SpawnV0631PokemonHeatmorNormal,
    #[serde(rename = "SPAWN_V0632_POKEMON_DURANT")]
    SpawnV0632PokemonDurant,
    #[serde(rename = "SPAWN_V0632_POKEMON_DURANT_NORMAL")]
    SpawnV0632PokemonDurantNormal,
    #[serde(rename = "SPAWN_V0633_POKEMON_DEINO")]
    SpawnV0633PokemonDeino,
    #[serde(rename = "SPAWN_V0633_POKEMON_DEINO_NORMAL")]
    SpawnV0633PokemonDeinoNormal,
    #[serde(rename = "SPAWN_V0634_POKEMON_ZWEILOUS")]
    SpawnV0634PokemonZweilous,
    #[serde(rename = "SPAWN_V0634_POKEMON_ZWEILOUS_NORMAL")]
    SpawnV0634PokemonZweilousNormal,
    #[serde(rename = "SPAWN_V0635_POKEMON_HYDREIGON")]
    SpawnV0635PokemonHydreigon,
    #[serde(rename = "SPAWN_V0635_POKEMON_HYDREIGON_NORMAL")]
    SpawnV0635PokemonHydreigonNormal,
    #[serde(rename = "SPAWN_V0636_POKEMON_LARVESTA")]
    SpawnV0636PokemonLarvesta,
    #[serde(rename = "SPAWN_V0636_POKEMON_LARVESTA_NORMAL")]
    SpawnV0636PokemonLarvestaNormal,
    #[serde(rename = "SPAWN_V0637_POKEMON_VOLCARONA")]
    SpawnV0637PokemonVolcarona,
    #[serde(rename = "SPAWN_V0637_POKEMON_VOLCARONA_NORMAL")]
    SpawnV0637PokemonVolcaronaNormal,
    #[serde(rename = "SPAWN_V0638_POKEMON_COBALION")]
    SpawnV0638PokemonCobalion,
    #[serde(rename = "SPAWN_V0638_POKEMON_COBALION_NORMAL")]
    SpawnV0638PokemonCobalionNormal,
    #[serde(rename = "SPAWN_V0639_POKEMON_TERRAKION")]
    SpawnV0639PokemonTerrakion,
    #[serde(rename = "SPAWN_V0639_POKEMON_TERRAKION_NORMAL")]
    SpawnV0639PokemonTerrakionNormal,
    #[serde(rename = "SPAWN_V0640_POKEMON_VIRIZION")]
    SpawnV0640PokemonVirizion,
    #[serde(rename = "SPAWN_V0640_POKEMON_VIRIZION_NORMAL")]
    SpawnV0640PokemonVirizionNormal,
    #[serde(rename = "SPAWN_V0641_POKEMON_TORNADUS")]
    SpawnV0641PokemonTornadus,
    #[serde(rename = "SPAWN_V0641_POKEMON_TORNADUS_INCARNATE")]
    SpawnV0641PokemonTornadusIncarnate,
    #[serde(rename = "SPAWN_V0641_POKEMON_TORNADUS_THERIAN")]
    SpawnV0641PokemonTornadusTherian,
    #[serde(rename = "SPAWN_V0642_POKEMON_THUNDURUS")]
    SpawnV0642PokemonThundurus,
    #[serde(rename = "SPAWN_V0642_POKEMON_THUNDURUS_INCARNATE")]
    SpawnV0642PokemonThundurusIncarnate,
    #[serde(rename = "SPAWN_V0642_POKEMON_THUNDURUS_THERIAN")]
    SpawnV0642PokemonThundurusTherian,
    #[serde(rename = "SPAWN_V0643_POKEMON_RESHIRAM")]
    SpawnV0643PokemonReshiram,
    #[serde(rename = "SPAWN_V0643_POKEMON_RESHIRAM_NORMAL")]
    SpawnV0643PokemonReshiramNormal,
    #[serde(rename = "SPAWN_V0644_POKEMON_ZEKROM")]
    SpawnV0644PokemonZekrom,
    #[serde(rename = "SPAWN_V0644_POKEMON_ZEKROM_NORMAL")]
    SpawnV0644PokemonZekromNormal,
    #[serde(rename = "SPAWN_V0645_POKEMON_LANDORUS")]
    SpawnV0645PokemonLandorus,
    #[serde(rename = "SPAWN_V0645_POKEMON_LANDORUS_INCARNATE")]
    SpawnV0645PokemonLandorusIncarnate,
    #[serde(rename = "SPAWN_V0645_POKEMON_LANDORUS_THERIAN")]
    SpawnV0645PokemonLandorusTherian,
    #[serde(rename = "SPAWN_V0646_POKEMON_KYUREM")]
    SpawnV0646PokemonKyurem,
    #[serde(rename = "SPAWN_V0646_POKEMON_KYUREM_BLACK")]
    SpawnV0646PokemonKyuremBlack,
    #[serde(rename = "SPAWN_V0646_POKEMON_KYUREM_NORMAL")]
    SpawnV0646PokemonKyuremNormal,
    #[serde(rename = "SPAWN_V0646_POKEMON_KYUREM_WHITE")]
    SpawnV0646PokemonKyuremWhite,
    #[serde(rename = "SPAWN_V0647_POKEMON_KELDEO")]
    SpawnV0647PokemonKeldeo,
    #[serde(rename = "SPAWN_V0647_POKEMON_KELDEO_ORDINARY")]
    SpawnV0647PokemonKeldeoOrdinary,
    #[serde(rename = "SPAWN_V0647_POKEMON_KELDEO_RESOLUTE")]
    SpawnV0647PokemonKeldeoResolute,
    #[serde(rename = "SPAWN_V0648_POKEMON_MELOETTA")]
    SpawnV0648PokemonMeloetta,
    #[serde(rename = "SPAWN_V0648_POKEMON_MELOETTA_ARIA")]
    SpawnV0648PokemonMeloettaAria,
    #[serde(rename = "SPAWN_V0648_POKEMON_MELOETTA_PIROUETTE")]
    SpawnV0648PokemonMeloettaPirouette,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT")]
    SpawnV0649PokemonGenesect,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT_BURN")]
    SpawnV0649PokemonGenesectBurn,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT_CHILL")]
    SpawnV0649PokemonGenesectChill,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT_DOUSE")]
    SpawnV0649PokemonGenesectDouse,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT_NORMAL")]
    SpawnV0649PokemonGenesectNormal,
    #[serde(rename = "SPAWN_V0649_POKEMON_GENESECT_SHOCK")]
    SpawnV0649PokemonGenesectShock,
    #[serde(rename = "SPAWN_V0650_POKEMON_CHESPIN")]
    SpawnV0650PokemonChespin,
    #[serde(rename = "SPAWN_V0650_POKEMON_CHESPIN_NORMAL")]
    SpawnV0650PokemonChespinNormal,
    #[serde(rename = "SPAWN_V0651_POKEMON_QUILLADIN")]
    SpawnV0651PokemonQuilladin,
    #[serde(rename = "SPAWN_V0651_POKEMON_QUILLADIN_NORMAL")]
    SpawnV0651PokemonQuilladinNormal,
    #[serde(rename = "SPAWN_V0652_POKEMON_CHESNAUGHT")]
    SpawnV0652PokemonChesnaught,
    #[serde(rename = "SPAWN_V0652_POKEMON_CHESNAUGHT_NORMAL")]
    SpawnV0652PokemonChesnaughtNormal,
    #[serde(rename = "SPAWN_V0653_POKEMON_FENNEKIN")]
    SpawnV0653PokemonFennekin,
    #[serde(rename = "SPAWN_V0653_POKEMON_FENNEKIN_NORMAL")]
    SpawnV0653PokemonFennekinNormal,
    #[serde(rename = "SPAWN_V0654_POKEMON_BRAIXEN")]
    SpawnV0654PokemonBraixen,
    #[serde(rename = "SPAWN_V0654_POKEMON_BRAIXEN_NORMAL")]
    SpawnV0654PokemonBraixenNormal,
    #[serde(rename = "SPAWN_V0655_POKEMON_DELPHOX")]
    SpawnV0655PokemonDelphox,
    #[serde(rename = "SPAWN_V0655_POKEMON_DELPHOX_NORMAL")]
    SpawnV0655PokemonDelphoxNormal,
    #[serde(rename = "SPAWN_V0656_POKEMON_FROAKIE")]
    SpawnV0656PokemonFroakie,
    #[serde(rename = "SPAWN_V0656_POKEMON_FROAKIE_NORMAL")]
    SpawnV0656PokemonFroakieNormal,
    #[serde(rename = "SPAWN_V0657_POKEMON_FROGADIER")]
    SpawnV0657PokemonFrogadier,
    #[serde(rename = "SPAWN_V0657_POKEMON_FROGADIER_NORMAL")]
    SpawnV0657PokemonFrogadierNormal,
    #[serde(rename = "SPAWN_V0658_POKEMON_GRENINJA")]
    SpawnV0658PokemonGreninja,
    #[serde(rename = "SPAWN_V0658_POKEMON_GRENINJA_NORMAL")]
    SpawnV0658PokemonGreninjaNormal,
    #[serde(rename = "SPAWN_V0659_POKEMON_BUNNELBY")]
    SpawnV0659PokemonBunnelby,
    #[serde(rename = "SPAWN_V0659_POKEMON_BUNNELBY_NORMAL")]
    SpawnV0659PokemonBunnelbyNormal,
    #[serde(rename = "SPAWN_V0660_POKEMON_DIGGERSBY")]
    SpawnV0660PokemonDiggersby,
    #[serde(rename = "SPAWN_V0660_POKEMON_DIGGERSBY_NORMAL")]
    SpawnV0660PokemonDiggersbyNormal,
    #[serde(rename = "SPAWN_V0661_POKEMON_FLETCHLING")]
    SpawnV0661PokemonFletchling,
    #[serde(rename = "SPAWN_V0661_POKEMON_FLETCHLING_NORMAL")]
    SpawnV0661PokemonFletchlingNormal,
    #[serde(rename = "SPAWN_V0662_POKEMON_FLETCHINDER")]
    SpawnV0662PokemonFletchinder,
    #[serde(rename = "SPAWN_V0662_POKEMON_FLETCHINDER_NORMAL")]
    SpawnV0662PokemonFletchinderNormal,
    #[serde(rename = "SPAWN_V0663_POKEMON_TALONFLAME")]
    SpawnV0663PokemonTalonflame,
    #[serde(rename = "SPAWN_V0663_POKEMON_TALONFLAME_NORMAL")]
    SpawnV0663PokemonTalonflameNormal,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG")]
    SpawnV0664PokemonScatterbug,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_ARCHIPELAGO")]
    SpawnV0664PokemonScatterbugArchipelago,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_CONTINENTAL")]
    SpawnV0664PokemonScatterbugContinental,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_ELEGANT")]
    SpawnV0664PokemonScatterbugElegant,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_FANCY")]
    SpawnV0664PokemonScatterbugFancy,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_GARDEN")]
    SpawnV0664PokemonScatterbugGarden,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_HIGH_PLAINS")]
    SpawnV0664PokemonScatterbugHighPlains,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_ICY_SNOW")]
    SpawnV0664PokemonScatterbugIcySnow,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_JUNGLE")]
    SpawnV0664PokemonScatterbugJungle,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_MARINE")]
    SpawnV0664PokemonScatterbugMarine,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_MEADOW")]
    SpawnV0664PokemonScatterbugMeadow,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_MODERN")]
    SpawnV0664PokemonScatterbugModern,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_MONSOON")]
    SpawnV0664PokemonScatterbugMonsoon,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_OCEAN")]
    SpawnV0664PokemonScatterbugOcean,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_POKEBALL")]
    SpawnV0664PokemonScatterbugPokeball,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_POLAR")]
    SpawnV0664PokemonScatterbugPolar,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_RIVER")]
    SpawnV0664PokemonScatterbugRiver,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_SANDSTORM")]
    SpawnV0664PokemonScatterbugSandstorm,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_SAVANNA")]
    SpawnV0664PokemonScatterbugSavanna,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_SUN")]
    SpawnV0664PokemonScatterbugSun,
    #[serde(rename = "SPAWN_V0664_POKEMON_SCATTERBUG_TUNDRA")]
    SpawnV0664PokemonScatterbugTundra,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA")]
    SpawnV0665PokemonSpewpa,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_ARCHIPELAGO")]
    SpawnV0665PokemonSpewpaArchipelago,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_CONTINENTAL")]
    SpawnV0665PokemonSpewpaContinental,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_ELEGANT")]
    SpawnV0665PokemonSpewpaElegant,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_FANCY")]
    SpawnV0665PokemonSpewpaFancy,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_GARDEN")]
    SpawnV0665PokemonSpewpaGarden,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_HIGH_PLAINS")]
    SpawnV0665PokemonSpewpaHighPlains,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_ICY_SNOW")]
    SpawnV0665PokemonSpewpaIcySnow,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_JUNGLE")]
    SpawnV0665PokemonSpewpaJungle,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_MARINE")]
    SpawnV0665PokemonSpewpaMarine,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_MEADOW")]
    SpawnV0665PokemonSpewpaMeadow,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_MODERN")]
    SpawnV0665PokemonSpewpaModern,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_MONSOON")]
    SpawnV0665PokemonSpewpaMonsoon,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_OCEAN")]
    SpawnV0665PokemonSpewpaOcean,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_POKEBALL")]
    SpawnV0665PokemonSpewpaPokeball,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_POLAR")]
    SpawnV0665PokemonSpewpaPolar,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_RIVER")]
    SpawnV0665PokemonSpewpaRiver,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_SANDSTORM")]
    SpawnV0665PokemonSpewpaSandstorm,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_SAVANNA")]
    SpawnV0665PokemonSpewpaSavanna,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_SUN")]
    SpawnV0665PokemonSpewpaSun,
    #[serde(rename = "SPAWN_V0665_POKEMON_SPEWPA_TUNDRA")]
    SpawnV0665PokemonSpewpaTundra,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON")]
    SpawnV0666PokemonVivillon,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_ARCHIPELAGO")]
    SpawnV0666PokemonVivillonArchipelago,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_CONTINENTAL")]
    SpawnV0666PokemonVivillonContinental,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_ELEGANT")]
    SpawnV0666PokemonVivillonElegant,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_FANCY")]
    SpawnV0666PokemonVivillonFancy,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_GARDEN")]
    SpawnV0666PokemonVivillonGarden,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_HIGH_PLAINS")]
    SpawnV0666PokemonVivillonHighPlains,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_ICY_SNOW")]
    SpawnV0666PokemonVivillonIcySnow,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_JUNGLE")]
    SpawnV0666PokemonVivillonJungle,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_MARINE")]
    SpawnV0666PokemonVivillonMarine,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_MEADOW")]
    SpawnV0666PokemonVivillonMeadow,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_MODERN")]
    SpawnV0666PokemonVivillonModern,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_MONSOON")]
    SpawnV0666PokemonVivillonMonsoon,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_OCEAN")]
    SpawnV0666PokemonVivillonOcean,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_POKEBALL")]
    SpawnV0666PokemonVivillonPokeball,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_POLAR")]
    SpawnV0666PokemonVivillonPolar,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_RIVER")]
    SpawnV0666PokemonVivillonRiver,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_SANDSTORM")]
    SpawnV0666PokemonVivillonSandstorm,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_SAVANNA")]
    SpawnV0666PokemonVivillonSavanna,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_SUN")]
    SpawnV0666PokemonVivillonSun,
    #[serde(rename = "SPAWN_V0666_POKEMON_VIVILLON_TUNDRA")]
    SpawnV0666PokemonVivillonTundra,
    #[serde(rename = "SPAWN_V0667_POKEMON_LITLEO")]
    SpawnV0667PokemonLitleo,
    #[serde(rename = "SPAWN_V0667_POKEMON_LITLEO_NORMAL")]
    SpawnV0667PokemonLitleoNormal,
    #[serde(rename = "SPAWN_V0668_POKEMON_PYROAR")]
    SpawnV0668PokemonPyroar,
    #[serde(rename = "SPAWN_V0668_POKEMON_PYROAR_FEMALE")]
    SpawnV0668PokemonPyroarFemale,
    #[serde(rename = "SPAWN_V0668_POKEMON_PYROAR_NORMAL")]
    SpawnV0668PokemonPyroarNormal,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE")]
    SpawnV0669PokemonFlabebe,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE_BLUE")]
    SpawnV0669PokemonFlabebeBlue,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE_ORANGE")]
    SpawnV0669PokemonFlabebeOrange,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE_RED")]
    SpawnV0669PokemonFlabebeRed,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE_WHITE")]
    SpawnV0669PokemonFlabebeWhite,
    #[serde(rename = "SPAWN_V0669_POKEMON_FLABEBE_YELLOW")]
    SpawnV0669PokemonFlabebeYellow,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE")]
    SpawnV0670PokemonFloette,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE_BLUE")]
    SpawnV0670PokemonFloetteBlue,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE_ORANGE")]
    SpawnV0670PokemonFloetteOrange,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE_RED")]
    SpawnV0670PokemonFloetteRed,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE_WHITE")]
    SpawnV0670PokemonFloetteWhite,
    #[serde(rename = "SPAWN_V0670_POKEMON_FLOETTE_YELLOW")]
    SpawnV0670PokemonFloetteYellow,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES")]
    SpawnV0671PokemonFlorges,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES_BLUE")]
    SpawnV0671PokemonFlorgesBlue,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES_ORANGE")]
    SpawnV0671PokemonFlorgesOrange,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES_RED")]
    SpawnV0671PokemonFlorgesRed,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES_WHITE")]
    SpawnV0671PokemonFlorgesWhite,
    #[serde(rename = "SPAWN_V0671_POKEMON_FLORGES_YELLOW")]
    SpawnV0671PokemonFlorgesYellow,
    #[serde(rename = "SPAWN_V0672_POKEMON_SKIDDO")]
    SpawnV0672PokemonSkiddo,
    #[serde(rename = "SPAWN_V0672_POKEMON_SKIDDO_NORMAL")]
    SpawnV0672PokemonSkiddoNormal,
    #[serde(rename = "SPAWN_V0673_POKEMON_GOGOAT")]
    SpawnV0673PokemonGogoat,
    #[serde(rename = "SPAWN_V0673_POKEMON_GOGOAT_NORMAL")]
    SpawnV0673PokemonGogoatNormal,
    #[serde(rename = "SPAWN_V0674_POKEMON_PANCHAM")]
    SpawnV0674PokemonPancham,
    #[serde(rename = "SPAWN_V0674_POKEMON_PANCHAM_NORMAL")]
    SpawnV0674PokemonPanchamNormal,
    #[serde(rename = "SPAWN_V0675_POKEMON_PANGORO")]
    SpawnV0675PokemonPangoro,
    #[serde(rename = "SPAWN_V0675_POKEMON_PANGORO_NORMAL")]
    SpawnV0675PokemonPangoroNormal,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU")]
    SpawnV0676PokemonFurfrou,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_DANDY")]
    SpawnV0676PokemonFurfrouDandy,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_DEBUTANTE")]
    SpawnV0676PokemonFurfrouDebutante,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_DIAMOND")]
    SpawnV0676PokemonFurfrouDiamond,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_HEART")]
    SpawnV0676PokemonFurfrouHeart,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_KABUKI")]
    SpawnV0676PokemonFurfrouKabuki,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_LA_REINE")]
    SpawnV0676PokemonFurfrouLaReine,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_MATRON")]
    SpawnV0676PokemonFurfrouMatron,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_NATURAL")]
    SpawnV0676PokemonFurfrouNatural,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_PHARAOH")]
    SpawnV0676PokemonFurfrouPharaoh,
    #[serde(rename = "SPAWN_V0676_POKEMON_FURFROU_STAR")]
    SpawnV0676PokemonFurfrouStar,
    #[serde(rename = "SPAWN_V0677_POKEMON_ESPURR")]
    SpawnV0677PokemonEspurr,
    #[serde(rename = "SPAWN_V0677_POKEMON_ESPURR_NORMAL")]
    SpawnV0677PokemonEspurrNormal,
    #[serde(rename = "SPAWN_V0678_POKEMON_MEOWSTIC")]
    SpawnV0678PokemonMeowstic,
    #[serde(rename = "SPAWN_V0678_POKEMON_MEOWSTIC_FEMALE")]
    SpawnV0678PokemonMeowsticFemale,
    #[serde(rename = "SPAWN_V0678_POKEMON_MEOWSTIC_NORMAL")]
    SpawnV0678PokemonMeowsticNormal,
    #[serde(rename = "SPAWN_V0679_POKEMON_HONEDGE")]
    SpawnV0679PokemonHonedge,
    #[serde(rename = "SPAWN_V0679_POKEMON_HONEDGE_NORMAL")]
    SpawnV0679PokemonHonedgeNormal,
    #[serde(rename = "SPAWN_V0680_POKEMON_DOUBLADE")]
    SpawnV0680PokemonDoublade,
    #[serde(rename = "SPAWN_V0680_POKEMON_DOUBLADE_NORMAL")]
    SpawnV0680PokemonDoubladeNormal,
    #[serde(rename = "SPAWN_V0681_POKEMON_AEGISLASH")]
    SpawnV0681PokemonAegislash,
    #[serde(rename = "SPAWN_V0681_POKEMON_AEGISLASH_BLADE")]
    SpawnV0681PokemonAegislashBlade,
    #[serde(rename = "SPAWN_V0681_POKEMON_AEGISLASH_SHIELD")]
    SpawnV0681PokemonAegislashShield,
    #[serde(rename = "SPAWN_V0682_POKEMON_SPRITZEE")]
    SpawnV0682PokemonSpritzee,
    #[serde(rename = "SPAWN_V0682_POKEMON_SPRITZEE_NORMAL")]
    SpawnV0682PokemonSpritzeeNormal,
    #[serde(rename = "SPAWN_V0683_POKEMON_AROMATISSE")]
    SpawnV0683PokemonAromatisse,
    #[serde(rename = "SPAWN_V0683_POKEMON_AROMATISSE_NORMAL")]
    SpawnV0683PokemonAromatisseNormal,
    #[serde(rename = "SPAWN_V0684_POKEMON_SWIRLIX")]
    SpawnV0684PokemonSwirlix,
    #[serde(rename = "SPAWN_V0684_POKEMON_SWIRLIX_NORMAL")]
    SpawnV0684PokemonSwirlixNormal,
    #[serde(rename = "SPAWN_V0685_POKEMON_SLURPUFF")]
    SpawnV0685PokemonSlurpuff,
    #[serde(rename = "SPAWN_V0685_POKEMON_SLURPUFF_NORMAL")]
    SpawnV0685PokemonSlurpuffNormal,
    #[serde(rename = "SPAWN_V0686_POKEMON_INKAY")]
    SpawnV0686PokemonInkay,
    #[serde(rename = "SPAWN_V0686_POKEMON_INKAY_NORMAL")]
    SpawnV0686PokemonInkayNormal,
    #[serde(rename = "SPAWN_V0687_POKEMON_MALAMAR")]
    SpawnV0687PokemonMalamar,
    #[serde(rename = "SPAWN_V0687_POKEMON_MALAMAR_NORMAL")]
    SpawnV0687PokemonMalamarNormal,
    #[serde(rename = "SPAWN_V0688_POKEMON_BINACLE")]
    SpawnV0688PokemonBinacle,
    #[serde(rename = "SPAWN_V0688_POKEMON_BINACLE_NORMAL")]
    SpawnV0688PokemonBinacleNormal,
    #[serde(rename = "SPAWN_V0689_POKEMON_BARBARACLE")]
    SpawnV0689PokemonBarbaracle,
    #[serde(rename = "SPAWN_V0689_POKEMON_BARBARACLE_NORMAL")]
    SpawnV0689PokemonBarbaracleNormal,
    #[serde(rename = "SPAWN_V0690_POKEMON_SKRELP")]
    SpawnV0690PokemonSkrelp,
    #[serde(rename = "SPAWN_V0690_POKEMON_SKRELP_NORMAL")]
    SpawnV0690PokemonSkrelpNormal,
    #[serde(rename = "SPAWN_V0691_POKEMON_DRAGALGE")]
    SpawnV0691PokemonDragalge,
    #[serde(rename = "SPAWN_V0691_POKEMON_DRAGALGE_NORMAL")]
    SpawnV0691PokemonDragalgeNormal,
    #[serde(rename = "SPAWN_V0692_POKEMON_CLAUNCHER")]
    SpawnV0692PokemonClauncher,
    #[serde(rename = "SPAWN_V0692_POKEMON_CLAUNCHER_NORMAL")]
    SpawnV0692PokemonClauncherNormal,
    #[serde(rename = "SPAWN_V0693_POKEMON_CLAWITZER")]
    SpawnV0693PokemonClawitzer,
    #[serde(rename = "SPAWN_V0693_POKEMON_CLAWITZER_NORMAL")]
    SpawnV0693PokemonClawitzerNormal,
    #[serde(rename = "SPAWN_V0694_POKEMON_HELIOPTILE")]
    SpawnV0694PokemonHelioptile,
    #[serde(rename = "SPAWN_V0694_POKEMON_HELIOPTILE_NORMAL")]
    SpawnV0694PokemonHelioptileNormal,
    #[serde(rename = "SPAWN_V0695_POKEMON_HELIOLISK")]
    SpawnV0695PokemonHeliolisk,
    #[serde(rename = "SPAWN_V0695_POKEMON_HELIOLISK_NORMAL")]
    SpawnV0695PokemonHelioliskNormal,
    #[serde(rename = "SPAWN_V0696_POKEMON_TYRUNT")]
    SpawnV0696PokemonTyrunt,
    #[serde(rename = "SPAWN_V0696_POKEMON_TYRUNT_NORMAL")]
    SpawnV0696PokemonTyruntNormal,
    #[serde(rename = "SPAWN_V0697_POKEMON_TYRANTRUM")]
    SpawnV0697PokemonTyrantrum,
    #[serde(rename = "SPAWN_V0697_POKEMON_TYRANTRUM_NORMAL")]
    SpawnV0697PokemonTyrantrumNormal,
    #[serde(rename = "SPAWN_V0698_POKEMON_AMAURA")]
    SpawnV0698PokemonAmaura,
    #[serde(rename = "SPAWN_V0698_POKEMON_AMAURA_NORMAL")]
    SpawnV0698PokemonAmauraNormal,
    #[serde(rename = "SPAWN_V0699_POKEMON_AURORUS")]
    SpawnV0699PokemonAurorus,
    #[serde(rename = "SPAWN_V0699_POKEMON_AURORUS_NORMAL")]
    SpawnV0699PokemonAurorusNormal,
    #[serde(rename = "SPAWN_V0700_POKEMON_SYLVEON")]
    SpawnV0700PokemonSylveon,
    #[serde(rename = "SPAWN_V0700_POKEMON_SYLVEON_NORMAL")]
    SpawnV0700PokemonSylveonNormal,
    #[serde(rename = "SPAWN_V0701_POKEMON_HAWLUCHA")]
    SpawnV0701PokemonHawlucha,
    #[serde(rename = "SPAWN_V0701_POKEMON_HAWLUCHA_NORMAL")]
    SpawnV0701PokemonHawluchaNormal,
    #[serde(rename = "SPAWN_V0702_POKEMON_DEDENNE")]
    SpawnV0702PokemonDedenne,
    #[serde(rename = "SPAWN_V0702_POKEMON_DEDENNE_NORMAL")]
    SpawnV0702PokemonDedenneNormal,
    #[serde(rename = "SPAWN_V0703_POKEMON_CARBINK")]
    SpawnV0703PokemonCarbink,
    #[serde(rename = "SPAWN_V0703_POKEMON_CARBINK_NORMAL")]
    SpawnV0703PokemonCarbinkNormal,
    #[serde(rename = "SPAWN_V0704_POKEMON_GOOMY")]
    SpawnV0704PokemonGoomy,
    #[serde(rename = "SPAWN_V0704_POKEMON_GOOMY_NORMAL")]
    SpawnV0704PokemonGoomyNormal,
    #[serde(rename = "SPAWN_V0705_POKEMON_SLIGGOO")]
    SpawnV0705PokemonSliggoo,
    #[serde(rename = "SPAWN_V0705_POKEMON_SLIGGOO_NORMAL")]
    SpawnV0705PokemonSliggooNormal,
    #[serde(rename = "SPAWN_V0706_POKEMON_GOODRA")]
    SpawnV0706PokemonGoodra,
    #[serde(rename = "SPAWN_V0706_POKEMON_GOODRA_NORMAL")]
    SpawnV0706PokemonGoodraNormal,
    #[serde(rename = "SPAWN_V0707_POKEMON_KLEFKI")]
    SpawnV0707PokemonKlefki,
    #[serde(rename = "SPAWN_V0707_POKEMON_KLEFKI_NORMAL")]
    SpawnV0707PokemonKlefkiNormal,
    #[serde(rename = "SPAWN_V0708_POKEMON_PHANTUMP")]
    SpawnV0708PokemonPhantump,
    #[serde(rename = "SPAWN_V0708_POKEMON_PHANTUMP_NORMAL")]
    SpawnV0708PokemonPhantumpNormal,
    #[serde(rename = "SPAWN_V0709_POKEMON_TREVENANT")]
    SpawnV0709PokemonTrevenant,
    #[serde(rename = "SPAWN_V0709_POKEMON_TREVENANT_NORMAL")]
    SpawnV0709PokemonTrevenantNormal,
    #[serde(rename = "SPAWN_V0710_POKEMON_PUMPKABOO")]
    SpawnV0710PokemonPumpkaboo,
    #[serde(rename = "SPAWN_V0710_POKEMON_PUMPKABOO_AVERAGE")]
    SpawnV0710PokemonPumpkabooAverage,
    #[serde(rename = "SPAWN_V0710_POKEMON_PUMPKABOO_LARGE")]
    SpawnV0710PokemonPumpkabooLarge,
    #[serde(rename = "SPAWN_V0710_POKEMON_PUMPKABOO_SMALL")]
    SpawnV0710PokemonPumpkabooSmall,
    #[serde(rename = "SPAWN_V0710_POKEMON_PUMPKABOO_SUPER")]
    SpawnV0710PokemonPumpkabooSuper,
    #[serde(rename = "SPAWN_V0711_POKEMON_GOURGEIST")]
    SpawnV0711PokemonGourgeist,
    #[serde(rename = "SPAWN_V0711_POKEMON_GOURGEIST_AVERAGE")]
    SpawnV0711PokemonGourgeistAverage,
    #[serde(rename = "SPAWN_V0711_POKEMON_GOURGEIST_LARGE")]
    SpawnV0711PokemonGourgeistLarge,
    #[serde(rename = "SPAWN_V0711_POKEMON_GOURGEIST_SMALL")]
    SpawnV0711PokemonGourgeistSmall,
    #[serde(rename = "SPAWN_V0711_POKEMON_GOURGEIST_SUPER")]
    SpawnV0711PokemonGourgeistSuper,
    #[serde(rename = "SPAWN_V0712_POKEMON_BERGMITE")]
    SpawnV0712PokemonBergmite,
    #[serde(rename = "SPAWN_V0712_POKEMON_BERGMITE_NORMAL")]
    SpawnV0712PokemonBergmiteNormal,
    #[serde(rename = "SPAWN_V0713_POKEMON_AVALUGG")]
    SpawnV0713PokemonAvalugg,
    #[serde(rename = "SPAWN_V0713_POKEMON_AVALUGG_HISUIAN")]
    SpawnV0713PokemonAvaluggHisuian,
    #[serde(rename = "SPAWN_V0713_POKEMON_AVALUGG_NORMAL")]
    SpawnV0713PokemonAvaluggNormal,
    #[serde(rename = "SPAWN_V0714_POKEMON_NOIBAT")]
    SpawnV0714PokemonNoibat,
    #[serde(rename = "SPAWN_V0714_POKEMON_NOIBAT_NORMAL")]
    SpawnV0714PokemonNoibatNormal,
    #[serde(rename = "SPAWN_V0715_POKEMON_NOIVERN")]
    SpawnV0715PokemonNoivern,
    #[serde(rename = "SPAWN_V0715_POKEMON_NOIVERN_NORMAL")]
    SpawnV0715PokemonNoivernNormal,
    #[serde(rename = "SPAWN_V0716_POKEMON_XERNEAS")]
    SpawnV0716PokemonXerneas,
    #[serde(rename = "SPAWN_V0716_POKEMON_XERNEAS_NORMAL")]
    SpawnV0716PokemonXerneasNormal,
    #[serde(rename = "SPAWN_V0717_POKEMON_YVELTAL")]
    SpawnV0717PokemonYveltal,
    #[serde(rename = "SPAWN_V0717_POKEMON_YVELTAL_NORMAL")]
    SpawnV0717PokemonYveltalNormal,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE")]
    SpawnV0718PokemonZygarde,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE")]
    SpawnV0718PokemonZygardeComplete,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE_FIFTY_PERCENT")]
    SpawnV0718PokemonZygardeCompleteFiftyPercent,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE_TEN_PERCENT")]
    SpawnV0718PokemonZygardeCompleteTenPercent,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE_FIFTY_PERCENT")]
    SpawnV0718PokemonZygardeFiftyPercent,
    #[serde(rename = "SPAWN_V0718_POKEMON_ZYGARDE_TEN_PERCENT")]
    SpawnV0718PokemonZygardeTenPercent,
    #[serde(rename = "SPAWN_V0719_POKEMON_DIANCIE")]
    SpawnV0719PokemonDiancie,
    #[serde(rename = "SPAWN_V0719_POKEMON_DIANCIE_NORMAL")]
    SpawnV0719PokemonDiancieNormal,
    #[serde(rename = "SPAWN_V0720_POKEMON_HOOPA")]
    SpawnV0720PokemonHoopa,
    #[serde(rename = "SPAWN_V0720_POKEMON_HOOPA_CONFINED")]
    SpawnV0720PokemonHoopaConfined,
    #[serde(rename = "SPAWN_V0720_POKEMON_HOOPA_UNBOUND")]
    SpawnV0720PokemonHoopaUnbound,
    #[serde(rename = "SPAWN_V0721_POKEMON_VOLCANION")]
    SpawnV0721PokemonVolcanion,
    #[serde(rename = "SPAWN_V0721_POKEMON_VOLCANION_NORMAL")]
    SpawnV0721PokemonVolcanionNormal,
    #[serde(rename = "SPAWN_V0722_POKEMON_ROWLET")]
    SpawnV0722PokemonRowlet,
    #[serde(rename = "SPAWN_V0722_POKEMON_ROWLET_NORMAL")]
    SpawnV0722PokemonRowletNormal,
    #[serde(rename = "SPAWN_V0723_POKEMON_DARTRIX")]
    SpawnV0723PokemonDartrix,
    #[serde(rename = "SPAWN_V0723_POKEMON_DARTRIX_NORMAL")]
    SpawnV0723PokemonDartrixNormal,
    #[serde(rename = "SPAWN_V0724_POKEMON_DECIDUEYE")]
    SpawnV0724PokemonDecidueye,
    #[serde(rename = "SPAWN_V0724_POKEMON_DECIDUEYE_HISUIAN")]
    SpawnV0724PokemonDecidueyeHisuian,
    #[serde(rename = "SPAWN_V0724_POKEMON_DECIDUEYE_NORMAL")]
    SpawnV0724PokemonDecidueyeNormal,
    #[serde(rename = "SPAWN_V0725_POKEMON_LITTEN")]
    SpawnV0725PokemonLitten,
    #[serde(rename = "SPAWN_V0725_POKEMON_LITTEN_NORMAL")]
    SpawnV0725PokemonLittenNormal,
    #[serde(rename = "SPAWN_V0726_POKEMON_TORRACAT")]
    SpawnV0726PokemonTorracat,
    #[serde(rename = "SPAWN_V0726_POKEMON_TORRACAT_NORMAL")]
    SpawnV0726PokemonTorracatNormal,
    #[serde(rename = "SPAWN_V0727_POKEMON_INCINEROAR")]
    SpawnV0727PokemonIncineroar,
    #[serde(rename = "SPAWN_V0727_POKEMON_INCINEROAR_NORMAL")]
    SpawnV0727PokemonIncineroarNormal,
    #[serde(rename = "SPAWN_V0728_POKEMON_POPPLIO")]
    SpawnV0728PokemonPopplio,
    #[serde(rename = "SPAWN_V0728_POKEMON_POPPLIO_NORMAL")]
    SpawnV0728PokemonPopplioNormal,
    #[serde(rename = "SPAWN_V0729_POKEMON_BRIONNE")]
    SpawnV0729PokemonBrionne,
    #[serde(rename = "SPAWN_V0729_POKEMON_BRIONNE_NORMAL")]
    SpawnV0729PokemonBrionneNormal,
    #[serde(rename = "SPAWN_V0730_POKEMON_PRIMARINA")]
    SpawnV0730PokemonPrimarina,
    #[serde(rename = "SPAWN_V0730_POKEMON_PRIMARINA_NORMAL")]
    SpawnV0730PokemonPrimarinaNormal,
    #[serde(rename = "SPAWN_V0731_POKEMON_PIKIPEK")]
    SpawnV0731PokemonPikipek,
    #[serde(rename = "SPAWN_V0731_POKEMON_PIKIPEK_NORMAL")]
    SpawnV0731PokemonPikipekNormal,
    #[serde(rename = "SPAWN_V0732_POKEMON_TRUMBEAK")]
    SpawnV0732PokemonTrumbeak,
    #[serde(rename = "SPAWN_V0732_POKEMON_TRUMBEAK_NORMAL")]
    SpawnV0732PokemonTrumbeakNormal,
    #[serde(rename = "SPAWN_V0733_POKEMON_TOUCANNON")]
    SpawnV0733PokemonToucannon,
    #[serde(rename = "SPAWN_V0733_POKEMON_TOUCANNON_NORMAL")]
    SpawnV0733PokemonToucannonNormal,
    #[serde(rename = "SPAWN_V0734_POKEMON_YUNGOOS")]
    SpawnV0734PokemonYungoos,
    #[serde(rename = "SPAWN_V0734_POKEMON_YUNGOOS_NORMAL")]
    SpawnV0734PokemonYungoosNormal,
    #[serde(rename = "SPAWN_V0735_POKEMON_GUMSHOOS")]
    SpawnV0735PokemonGumshoos,
    #[serde(rename = "SPAWN_V0735_POKEMON_GUMSHOOS_NORMAL")]
    SpawnV0735PokemonGumshoosNormal,
    #[serde(rename = "SPAWN_V0736_POKEMON_GRUBBIN")]
    SpawnV0736PokemonGrubbin,
    #[serde(rename = "SPAWN_V0736_POKEMON_GRUBBIN_NORMAL")]
    SpawnV0736PokemonGrubbinNormal,
    #[serde(rename = "SPAWN_V0737_POKEMON_CHARJABUG")]
    SpawnV0737PokemonCharjabug,
    #[serde(rename = "SPAWN_V0737_POKEMON_CHARJABUG_NORMAL")]
    SpawnV0737PokemonCharjabugNormal,
    #[serde(rename = "SPAWN_V0737_POKEMON_CHARJABUG_WINTER_2025")]
    SpawnV0737PokemonCharjabugWinter2025,
    #[serde(rename = "SPAWN_V0738_POKEMON_VIKAVOLT")]
    SpawnV0738PokemonVikavolt,
    #[serde(rename = "SPAWN_V0738_POKEMON_VIKAVOLT_NORMAL")]
    SpawnV0738PokemonVikavoltNormal,
    #[serde(rename = "SPAWN_V0738_POKEMON_VIKAVOLT_WINTER_2025")]
    SpawnV0738PokemonVikavoltWinter2025,
    #[serde(rename = "SPAWN_V0739_POKEMON_CRABRAWLER")]
    SpawnV0739PokemonCrabrawler,
    #[serde(rename = "SPAWN_V0739_POKEMON_CRABRAWLER_NORMAL")]
    SpawnV0739PokemonCrabrawlerNormal,
    #[serde(rename = "SPAWN_V0740_POKEMON_CRABOMINABLE")]
    SpawnV0740PokemonCrabominable,
    #[serde(rename = "SPAWN_V0740_POKEMON_CRABOMINABLE_NORMAL")]
    SpawnV0740PokemonCrabominableNormal,
    #[serde(rename = "SPAWN_V0741_POKEMON_ORICORIO")]
    SpawnV0741PokemonOricorio,
    #[serde(rename = "SPAWN_V0741_POKEMON_ORICORIO_BAILE")]
    SpawnV0741PokemonOricorioBaile,
    #[serde(rename = "SPAWN_V0741_POKEMON_ORICORIO_PAU")]
    SpawnV0741PokemonOricorioPau,
    #[serde(rename = "SPAWN_V0741_POKEMON_ORICORIO_POMPOM")]
    SpawnV0741PokemonOricorioPompom,
    #[serde(rename = "SPAWN_V0741_POKEMON_ORICORIO_SENSU")]
    SpawnV0741PokemonOricorioSensu,
    #[serde(rename = "SPAWN_V0742_POKEMON_CUTIEFLY")]
    SpawnV0742PokemonCutiefly,
    #[serde(rename = "SPAWN_V0742_POKEMON_CUTIEFLY_NORMAL")]
    SpawnV0742PokemonCutieflyNormal,
    #[serde(rename = "SPAWN_V0743_POKEMON_RIBOMBEE")]
    SpawnV0743PokemonRibombee,
    #[serde(rename = "SPAWN_V0743_POKEMON_RIBOMBEE_NORMAL")]
    SpawnV0743PokemonRibombeeNormal,
    #[serde(rename = "SPAWN_V0744_POKEMON_ROCKRUFF")]
    SpawnV0744PokemonRockruff,
    #[serde(rename = "SPAWN_V0744_POKEMON_ROCKRUFF_DUSK")]
    SpawnV0744PokemonRockruffDusk,
    #[serde(rename = "SPAWN_V0744_POKEMON_ROCKRUFF_NORMAL")]
    SpawnV0744PokemonRockruffNormal,
    #[serde(rename = "SPAWN_V0745_POKEMON_LYCANROC")]
    SpawnV0745PokemonLycanroc,
    #[serde(rename = "SPAWN_V0745_POKEMON_LYCANROC_DUSK")]
    SpawnV0745PokemonLycanrocDusk,
    #[serde(rename = "SPAWN_V0745_POKEMON_LYCANROC_MIDDAY")]
    SpawnV0745PokemonLycanrocMidday,
    #[serde(rename = "SPAWN_V0745_POKEMON_LYCANROC_MIDNIGHT")]
    SpawnV0745PokemonLycanrocMidnight,
    #[serde(rename = "SPAWN_V0746_POKEMON_WISHIWASHI")]
    SpawnV0746PokemonWishiwashi,
    #[serde(rename = "SPAWN_V0746_POKEMON_WISHIWASHI_SCHOOL")]
    SpawnV0746PokemonWishiwashiSchool,
    #[serde(rename = "SPAWN_V0746_POKEMON_WISHIWASHI_SOLO")]
    SpawnV0746PokemonWishiwashiSolo,
    #[serde(rename = "SPAWN_V0747_POKEMON_MAREANIE")]
    SpawnV0747PokemonMareanie,
    #[serde(rename = "SPAWN_V0747_POKEMON_MAREANIE_NORMAL")]
    SpawnV0747PokemonMareanieNormal,
    #[serde(rename = "SPAWN_V0748_POKEMON_TOXAPEX")]
    SpawnV0748PokemonToxapex,
    #[serde(rename = "SPAWN_V0748_POKEMON_TOXAPEX_NORMAL")]
    SpawnV0748PokemonToxapexNormal,
    #[serde(rename = "SPAWN_V0749_POKEMON_MUDBRAY")]
    SpawnV0749PokemonMudbray,
    #[serde(rename = "SPAWN_V0749_POKEMON_MUDBRAY_NORMAL")]
    SpawnV0749PokemonMudbrayNormal,
    #[serde(rename = "SPAWN_V0750_POKEMON_MUDSDALE")]
    SpawnV0750PokemonMudsdale,
    #[serde(rename = "SPAWN_V0750_POKEMON_MUDSDALE_NORMAL")]
    SpawnV0750PokemonMudsdaleNormal,
    #[serde(rename = "SPAWN_V0751_POKEMON_DEWPIDER")]
    SpawnV0751PokemonDewpider,
    #[serde(rename = "SPAWN_V0751_POKEMON_DEWPIDER_NORMAL")]
    SpawnV0751PokemonDewpiderNormal,
    #[serde(rename = "SPAWN_V0752_POKEMON_ARAQUANID")]
    SpawnV0752PokemonAraquanid,
    #[serde(rename = "SPAWN_V0752_POKEMON_ARAQUANID_NORMAL")]
    SpawnV0752PokemonAraquanidNormal,
    #[serde(rename = "SPAWN_V0753_POKEMON_FOMANTIS")]
    SpawnV0753PokemonFomantis,
    #[serde(rename = "SPAWN_V0753_POKEMON_FOMANTIS_NORMAL")]
    SpawnV0753PokemonFomantisNormal,
    #[serde(rename = "SPAWN_V0754_POKEMON_LURANTIS")]
    SpawnV0754PokemonLurantis,
    #[serde(rename = "SPAWN_V0754_POKEMON_LURANTIS_NORMAL")]
    SpawnV0754PokemonLurantisNormal,
    #[serde(rename = "SPAWN_V0755_POKEMON_MORELULL")]
    SpawnV0755PokemonMorelull,
    #[serde(rename = "SPAWN_V0755_POKEMON_MORELULL_NORMAL")]
    SpawnV0755PokemonMorelullNormal,
    #[serde(rename = "SPAWN_V0756_POKEMON_SHIINOTIC")]
    SpawnV0756PokemonShiinotic,
    #[serde(rename = "SPAWN_V0756_POKEMON_SHIINOTIC_NORMAL")]
    SpawnV0756PokemonShiinoticNormal,
    #[serde(rename = "SPAWN_V0757_POKEMON_SALANDIT")]
    SpawnV0757PokemonSalandit,
    #[serde(rename = "SPAWN_V0757_POKEMON_SALANDIT_NORMAL")]
    SpawnV0757PokemonSalanditNormal,
    #[serde(rename = "SPAWN_V0758_POKEMON_SALAZZLE")]
    SpawnV0758PokemonSalazzle,
    #[serde(rename = "SPAWN_V0758_POKEMON_SALAZZLE_NORMAL")]
    SpawnV0758PokemonSalazzleNormal,
    #[serde(rename = "SPAWN_V0759_POKEMON_STUFFUL")]
    SpawnV0759PokemonStufful,
    #[serde(rename = "SPAWN_V0759_POKEMON_STUFFUL_NORMAL")]
    SpawnV0759PokemonStuffulNormal,
    #[serde(rename = "SPAWN_V0760_POKEMON_BEWEAR")]
    SpawnV0760PokemonBewear,
    #[serde(rename = "SPAWN_V0760_POKEMON_BEWEAR_NORMAL")]
    SpawnV0760PokemonBewearNormal,
    #[serde(rename = "SPAWN_V0760_POKEMON_BEWEAR_WILDAREA_2025")]
    SpawnV0760PokemonBewearWildarea2025,
    #[serde(rename = "SPAWN_V0761_POKEMON_BOUNSWEET")]
    SpawnV0761PokemonBounsweet,
    #[serde(rename = "SPAWN_V0761_POKEMON_BOUNSWEET_NORMAL")]
    SpawnV0761PokemonBounsweetNormal,
    #[serde(rename = "SPAWN_V0762_POKEMON_STEENEE")]
    SpawnV0762PokemonSteenee,
    #[serde(rename = "SPAWN_V0762_POKEMON_STEENEE_NORMAL")]
    SpawnV0762PokemonSteeneeNormal,
    #[serde(rename = "SPAWN_V0763_POKEMON_TSAREENA")]
    SpawnV0763PokemonTsareena,
    #[serde(rename = "SPAWN_V0763_POKEMON_TSAREENA_NORMAL")]
    SpawnV0763PokemonTsareenaNormal,
    #[serde(rename = "SPAWN_V0764_POKEMON_COMFEY")]
    SpawnV0764PokemonComfey,
    #[serde(rename = "SPAWN_V0764_POKEMON_COMFEY_NORMAL")]
    SpawnV0764PokemonComfeyNormal,
    #[serde(rename = "SPAWN_V0765_POKEMON_ORANGURU")]
    SpawnV0765PokemonOranguru,
    #[serde(rename = "SPAWN_V0765_POKEMON_ORANGURU_NORMAL")]
    SpawnV0765PokemonOranguruNormal,
    #[serde(rename = "SPAWN_V0766_POKEMON_PASSIMIAN")]
    SpawnV0766PokemonPassimian,
    #[serde(rename = "SPAWN_V0766_POKEMON_PASSIMIAN_NORMAL")]
    SpawnV0766PokemonPassimianNormal,
    #[serde(rename = "SPAWN_V0767_POKEMON_WIMPOD")]
    SpawnV0767PokemonWimpod,
    #[serde(rename = "SPAWN_V0767_POKEMON_WIMPOD_NORMAL")]
    SpawnV0767PokemonWimpodNormal,
    #[serde(rename = "SPAWN_V0768_POKEMON_GOLISOPOD")]
    SpawnV0768PokemonGolisopod,
    #[serde(rename = "SPAWN_V0768_POKEMON_GOLISOPOD_NORMAL")]
    SpawnV0768PokemonGolisopodNormal,
    #[serde(rename = "SPAWN_V0769_POKEMON_SANDYGAST")]
    SpawnV0769PokemonSandygast,
    #[serde(rename = "SPAWN_V0769_POKEMON_SANDYGAST_NORMAL")]
    SpawnV0769PokemonSandygastNormal,
    #[serde(rename = "SPAWN_V0770_POKEMON_PALOSSAND")]
    SpawnV0770PokemonPalossand,
    #[serde(rename = "SPAWN_V0770_POKEMON_PALOSSAND_NORMAL")]
    SpawnV0770PokemonPalossandNormal,
    #[serde(rename = "SPAWN_V0771_POKEMON_PYUKUMUKU")]
    SpawnV0771PokemonPyukumuku,
    #[serde(rename = "SPAWN_V0771_POKEMON_PYUKUMUKU_NORMAL")]
    SpawnV0771PokemonPyukumukuNormal,
    #[serde(rename = "SPAWN_V0772_POKEMON_TYPE_NULL")]
    SpawnV0772PokemonTypeNull,
    #[serde(rename = "SPAWN_V0772_POKEMON_TYPE_NULL_NORMAL")]
    SpawnV0772PokemonTypeNullNormal,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY")]
    SpawnV0773PokemonSilvally,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_BUG")]
    SpawnV0773PokemonSilvallyBug,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_DARK")]
    SpawnV0773PokemonSilvallyDark,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_DRAGON")]
    SpawnV0773PokemonSilvallyDragon,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_ELECTRIC")]
    SpawnV0773PokemonSilvallyElectric,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_FAIRY")]
    SpawnV0773PokemonSilvallyFairy,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_FIGHTING")]
    SpawnV0773PokemonSilvallyFighting,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_FIRE")]
    SpawnV0773PokemonSilvallyFire,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_FLYING")]
    SpawnV0773PokemonSilvallyFlying,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_GHOST")]
    SpawnV0773PokemonSilvallyGhost,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_GRASS")]
    SpawnV0773PokemonSilvallyGrass,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_GROUND")]
    SpawnV0773PokemonSilvallyGround,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_ICE")]
    SpawnV0773PokemonSilvallyIce,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_NORMAL")]
    SpawnV0773PokemonSilvallyNormal,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_POISON")]
    SpawnV0773PokemonSilvallyPoison,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_PSYCHIC")]
    SpawnV0773PokemonSilvallyPsychic,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_ROCK")]
    SpawnV0773PokemonSilvallyRock,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_STEEL")]
    SpawnV0773PokemonSilvallySteel,
    #[serde(rename = "SPAWN_V0773_POKEMON_SILVALLY_WATER")]
    SpawnV0773PokemonSilvallyWater,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR")]
    SpawnV0774PokemonMinior,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_BLUE")]
    SpawnV0774PokemonMiniorBlue,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_GREEN")]
    SpawnV0774PokemonMiniorGreen,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_INDIGO")]
    SpawnV0774PokemonMiniorIndigo,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_ORANGE")]
    SpawnV0774PokemonMiniorOrange,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_RED")]
    SpawnV0774PokemonMiniorRed,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_VIOLET")]
    SpawnV0774PokemonMiniorViolet,
    #[serde(rename = "SPAWN_V0774_POKEMON_MINIOR_YELLOW")]
    SpawnV0774PokemonMiniorYellow,
    #[serde(rename = "SPAWN_V0775_POKEMON_KOMALA")]
    SpawnV0775PokemonKomala,
    #[serde(rename = "SPAWN_V0775_POKEMON_KOMALA_NORMAL")]
    SpawnV0775PokemonKomalaNormal,
    #[serde(rename = "SPAWN_V0776_POKEMON_TURTONATOR")]
    SpawnV0776PokemonTurtonator,
    #[serde(rename = "SPAWN_V0776_POKEMON_TURTONATOR_NORMAL")]
    SpawnV0776PokemonTurtonatorNormal,
    #[serde(rename = "SPAWN_V0777_POKEMON_TOGEDEMARU")]
    SpawnV0777PokemonTogedemaru,
    #[serde(rename = "SPAWN_V0777_POKEMON_TOGEDEMARU_NORMAL")]
    SpawnV0777PokemonTogedemaruNormal,
    #[serde(rename = "SPAWN_V0778_POKEMON_MIMIKYU")]
    SpawnV0778PokemonMimikyu,
    #[serde(rename = "SPAWN_V0778_POKEMON_MIMIKYU_BUSTED")]
    SpawnV0778PokemonMimikyuBusted,
    #[serde(rename = "SPAWN_V0778_POKEMON_MIMIKYU_DISGUISED")]
    SpawnV0778PokemonMimikyuDisguised,
    #[serde(rename = "SPAWN_V0779_POKEMON_BRUXISH")]
    SpawnV0779PokemonBruxish,
    #[serde(rename = "SPAWN_V0779_POKEMON_BRUXISH_NORMAL")]
    SpawnV0779PokemonBruxishNormal,
    #[serde(rename = "SPAWN_V0780_POKEMON_DRAMPA")]
    SpawnV0780PokemonDrampa,
    #[serde(rename = "SPAWN_V0780_POKEMON_DRAMPA_NORMAL")]
    SpawnV0780PokemonDrampaNormal,
    #[serde(rename = "SPAWN_V0781_POKEMON_DHELMISE")]
    SpawnV0781PokemonDhelmise,
    #[serde(rename = "SPAWN_V0781_POKEMON_DHELMISE_NORMAL")]
    SpawnV0781PokemonDhelmiseNormal,
    #[serde(rename = "SPAWN_V0782_POKEMON_JANGMO_O")]
    SpawnV0782PokemonJangmoO,
    #[serde(rename = "SPAWN_V0782_POKEMON_JANGMO_O_NORMAL")]
    SpawnV0782PokemonJangmoONormal,
    #[serde(rename = "SPAWN_V0783_POKEMON_HAKAMO_O")]
    SpawnV0783PokemonHakamoO,
    #[serde(rename = "SPAWN_V0783_POKEMON_HAKAMO_O_NORMAL")]
    SpawnV0783PokemonHakamoONormal,
    #[serde(rename = "SPAWN_V0784_POKEMON_KOMMO_O")]
    SpawnV0784PokemonKommoO,
    #[serde(rename = "SPAWN_V0784_POKEMON_KOMMO_O_NORMAL")]
    SpawnV0784PokemonKommoONormal,
    #[serde(rename = "SPAWN_V0785_POKEMON_TAPU_KOKO")]
    SpawnV0785PokemonTapuKoko,
    #[serde(rename = "SPAWN_V0785_POKEMON_TAPU_KOKO_NORMAL")]
    SpawnV0785PokemonTapuKokoNormal,
    #[serde(rename = "SPAWN_V0786_POKEMON_TAPU_LELE")]
    SpawnV0786PokemonTapuLele,
    #[serde(rename = "SPAWN_V0786_POKEMON_TAPU_LELE_NORMAL")]
    SpawnV0786PokemonTapuLeleNormal,
    #[serde(rename = "SPAWN_V0787_POKEMON_TAPU_BULU")]
    SpawnV0787PokemonTapuBulu,
    #[serde(rename = "SPAWN_V0787_POKEMON_TAPU_BULU_NORMAL")]
    SpawnV0787PokemonTapuBuluNormal,
    #[serde(rename = "SPAWN_V0788_POKEMON_TAPU_FINI")]
    SpawnV0788PokemonTapuFini,
    #[serde(rename = "SPAWN_V0788_POKEMON_TAPU_FINI_NORMAL")]
    SpawnV0788PokemonTapuFiniNormal,
    #[serde(rename = "SPAWN_V0789_POKEMON_COSMOG")]
    SpawnV0789PokemonCosmog,
    #[serde(rename = "SPAWN_V0789_POKEMON_COSMOG_NORMAL")]
    SpawnV0789PokemonCosmogNormal,
    #[serde(rename = "SPAWN_V0790_POKEMON_COSMOEM")]
    SpawnV0790PokemonCosmoem,
    #[serde(rename = "SPAWN_V0790_POKEMON_COSMOEM_NORMAL")]
    SpawnV0790PokemonCosmoemNormal,
    #[serde(rename = "SPAWN_V0791_POKEMON_SOLGALEO")]
    SpawnV0791PokemonSolgaleo,
    #[serde(rename = "SPAWN_V0791_POKEMON_SOLGALEO_NORMAL")]
    SpawnV0791PokemonSolgaleoNormal,
    #[serde(rename = "SPAWN_V0792_POKEMON_LUNALA")]
    SpawnV0792PokemonLunala,
    #[serde(rename = "SPAWN_V0792_POKEMON_LUNALA_NORMAL")]
    SpawnV0792PokemonLunalaNormal,
    #[serde(rename = "SPAWN_V0793_POKEMON_NIHILEGO")]
    SpawnV0793PokemonNihilego,
    #[serde(rename = "SPAWN_V0793_POKEMON_NIHILEGO_NORMAL")]
    SpawnV0793PokemonNihilegoNormal,
    #[serde(rename = "SPAWN_V0794_POKEMON_BUZZWOLE")]
    SpawnV0794PokemonBuzzwole,
    #[serde(rename = "SPAWN_V0794_POKEMON_BUZZWOLE_NORMAL")]
    SpawnV0794PokemonBuzzwoleNormal,
    #[serde(rename = "SPAWN_V0795_POKEMON_PHEROMOSA")]
    SpawnV0795PokemonPheromosa,
    #[serde(rename = "SPAWN_V0795_POKEMON_PHEROMOSA_NORMAL")]
    SpawnV0795PokemonPheromosaNormal,
    #[serde(rename = "SPAWN_V0796_POKEMON_XURKITREE")]
    SpawnV0796PokemonXurkitree,
    #[serde(rename = "SPAWN_V0796_POKEMON_XURKITREE_NORMAL")]
    SpawnV0796PokemonXurkitreeNormal,
    #[serde(rename = "SPAWN_V0797_POKEMON_CELESTEELA")]
    SpawnV0797PokemonCelesteela,
    #[serde(rename = "SPAWN_V0797_POKEMON_CELESTEELA_NORMAL")]
    SpawnV0797PokemonCelesteelaNormal,
    #[serde(rename = "SPAWN_V0798_POKEMON_KARTANA")]
    SpawnV0798PokemonKartana,
    #[serde(rename = "SPAWN_V0798_POKEMON_KARTANA_NORMAL")]
    SpawnV0798PokemonKartanaNormal,
    #[serde(rename = "SPAWN_V0799_POKEMON_GUZZLORD")]
    SpawnV0799PokemonGuzzlord,
    #[serde(rename = "SPAWN_V0799_POKEMON_GUZZLORD_NORMAL")]
    SpawnV0799PokemonGuzzlordNormal,
    #[serde(rename = "SPAWN_V0800_POKEMON_NECROZMA")]
    SpawnV0800PokemonNecrozma,
    #[serde(rename = "SPAWN_V0800_POKEMON_NECROZMA_DAWN_WINGS")]
    SpawnV0800PokemonNecrozmaDawnWings,
    #[serde(rename = "SPAWN_V0800_POKEMON_NECROZMA_DUSK_MANE")]
    SpawnV0800PokemonNecrozmaDuskMane,
    #[serde(rename = "SPAWN_V0800_POKEMON_NECROZMA_NORMAL")]
    SpawnV0800PokemonNecrozmaNormal,
    #[serde(rename = "SPAWN_V0800_POKEMON_NECROZMA_ULTRA")]
    SpawnV0800PokemonNecrozmaUltra,
    #[serde(rename = "SPAWN_V0801_POKEMON_MAGEARNA")]
    SpawnV0801PokemonMagearna,
    #[serde(rename = "SPAWN_V0801_POKEMON_MAGEARNA_NORMAL")]
    SpawnV0801PokemonMagearnaNormal,
    #[serde(rename = "SPAWN_V0801_POKEMON_MAGEARNA_ORIGINAL_COLOR")]
    SpawnV0801PokemonMagearnaOriginalColor,
    #[serde(rename = "SPAWN_V0802_POKEMON_MARSHADOW")]
    SpawnV0802PokemonMarshadow,
    #[serde(rename = "SPAWN_V0802_POKEMON_MARSHADOW_NORMAL")]
    SpawnV0802PokemonMarshadowNormal,
    #[serde(rename = "SPAWN_V0803_POKEMON_POIPOLE")]
    SpawnV0803PokemonPoipole,
    #[serde(rename = "SPAWN_V0803_POKEMON_POIPOLE_NORMAL")]
    SpawnV0803PokemonPoipoleNormal,
    #[serde(rename = "SPAWN_V0804_POKEMON_NAGANADEL")]
    SpawnV0804PokemonNaganadel,
    #[serde(rename = "SPAWN_V0804_POKEMON_NAGANADEL_NORMAL")]
    SpawnV0804PokemonNaganadelNormal,
    #[serde(rename = "SPAWN_V0805_POKEMON_STAKATAKA")]
    SpawnV0805PokemonStakataka,
    #[serde(rename = "SPAWN_V0805_POKEMON_STAKATAKA_NORMAL")]
    SpawnV0805PokemonStakatakaNormal,
    #[serde(rename = "SPAWN_V0806_POKEMON_BLACEPHALON")]
    SpawnV0806PokemonBlacephalon,
    #[serde(rename = "SPAWN_V0806_POKEMON_BLACEPHALON_NORMAL")]
    SpawnV0806PokemonBlacephalonNormal,
    #[serde(rename = "SPAWN_V0807_POKEMON_ZERAORA")]
    SpawnV0807PokemonZeraora,
    #[serde(rename = "SPAWN_V0807_POKEMON_ZERAORA_NORMAL")]
    SpawnV0807PokemonZeraoraNormal,
    #[serde(rename = "SPAWN_V0808_POKEMON_MELTAN")]
    SpawnV0808PokemonMeltan,
    #[serde(rename = "SPAWN_V0808_POKEMON_MELTAN_NORMAL")]
    SpawnV0808PokemonMeltanNormal,
    #[serde(rename = "SPAWN_V0809_POKEMON_MELMETAL")]
    SpawnV0809PokemonMelmetal,
    #[serde(rename = "SPAWN_V0809_POKEMON_MELMETAL_NORMAL")]
    SpawnV0809PokemonMelmetalNormal,
    #[serde(rename = "SPAWN_V0810_POKEMON_GROOKEY")]
    SpawnV0810PokemonGrookey,
    #[serde(rename = "SPAWN_V0810_POKEMON_GROOKEY_NORMAL")]
    SpawnV0810PokemonGrookeyNormal,
    #[serde(rename = "SPAWN_V0811_POKEMON_THWACKEY")]
    SpawnV0811PokemonThwackey,
    #[serde(rename = "SPAWN_V0811_POKEMON_THWACKEY_NORMAL")]
    SpawnV0811PokemonThwackeyNormal,
    #[serde(rename = "SPAWN_V0812_POKEMON_RILLABOOM")]
    SpawnV0812PokemonRillaboom,
    #[serde(rename = "SPAWN_V0812_POKEMON_RILLABOOM_NORMAL")]
    SpawnV0812PokemonRillaboomNormal,
    #[serde(rename = "SPAWN_V0813_POKEMON_SCORBUNNY")]
    SpawnV0813PokemonScorbunny,
    #[serde(rename = "SPAWN_V0813_POKEMON_SCORBUNNY_NORMAL")]
    SpawnV0813PokemonScorbunnyNormal,
    #[serde(rename = "SPAWN_V0814_POKEMON_RABOOT")]
    SpawnV0814PokemonRaboot,
    #[serde(rename = "SPAWN_V0814_POKEMON_RABOOT_NORMAL")]
    SpawnV0814PokemonRabootNormal,
    #[serde(rename = "SPAWN_V0815_POKEMON_CINDERACE")]
    SpawnV0815PokemonCinderace,
    #[serde(rename = "SPAWN_V0815_POKEMON_CINDERACE_NORMAL")]
    SpawnV0815PokemonCinderaceNormal,
    #[serde(rename = "SPAWN_V0816_POKEMON_SOBBLE")]
    SpawnV0816PokemonSobble,
    #[serde(rename = "SPAWN_V0816_POKEMON_SOBBLE_NORMAL")]
    SpawnV0816PokemonSobbleNormal,
    #[serde(rename = "SPAWN_V0817_POKEMON_DRIZZILE")]
    SpawnV0817PokemonDrizzile,
    #[serde(rename = "SPAWN_V0817_POKEMON_DRIZZILE_NORMAL")]
    SpawnV0817PokemonDrizzileNormal,
    #[serde(rename = "SPAWN_V0818_POKEMON_INTELEON")]
    SpawnV0818PokemonInteleon,
    #[serde(rename = "SPAWN_V0818_POKEMON_INTELEON_NORMAL")]
    SpawnV0818PokemonInteleonNormal,
    #[serde(rename = "SPAWN_V0819_POKEMON_SKWOVET")]
    SpawnV0819PokemonSkwovet,
    #[serde(rename = "SPAWN_V0819_POKEMON_SKWOVET_NORMAL")]
    SpawnV0819PokemonSkwovetNormal,
    #[serde(rename = "SPAWN_V0820_POKEMON_GREEDENT")]
    SpawnV0820PokemonGreedent,
    #[serde(rename = "SPAWN_V0820_POKEMON_GREEDENT_NORMAL")]
    SpawnV0820PokemonGreedentNormal,
    #[serde(rename = "SPAWN_V0821_POKEMON_ROOKIDEE")]
    SpawnV0821PokemonRookidee,
    #[serde(rename = "SPAWN_V0821_POKEMON_ROOKIDEE_NORMAL")]
    SpawnV0821PokemonRookideeNormal,
    #[serde(rename = "SPAWN_V0822_POKEMON_CORVISQUIRE")]
    SpawnV0822PokemonCorvisquire,
    #[serde(rename = "SPAWN_V0822_POKEMON_CORVISQUIRE_NORMAL")]
    SpawnV0822PokemonCorvisquireNormal,
    #[serde(rename = "SPAWN_V0823_POKEMON_CORVIKNIGHT")]
    SpawnV0823PokemonCorviknight,
    #[serde(rename = "SPAWN_V0823_POKEMON_CORVIKNIGHT_NORMAL")]
    SpawnV0823PokemonCorviknightNormal,
    #[serde(rename = "SPAWN_V0824_POKEMON_BLIPBUG")]
    SpawnV0824PokemonBlipbug,
    #[serde(rename = "SPAWN_V0824_POKEMON_BLIPBUG_NORMAL")]
    SpawnV0824PokemonBlipbugNormal,
    #[serde(rename = "SPAWN_V0825_POKEMON_DOTTLER")]
    SpawnV0825PokemonDottler,
    #[serde(rename = "SPAWN_V0825_POKEMON_DOTTLER_NORMAL")]
    SpawnV0825PokemonDottlerNormal,
    #[serde(rename = "SPAWN_V0826_POKEMON_ORBEETLE")]
    SpawnV0826PokemonOrbeetle,
    #[serde(rename = "SPAWN_V0826_POKEMON_ORBEETLE_NORMAL")]
    SpawnV0826PokemonOrbeetleNormal,
    #[serde(rename = "SPAWN_V0827_POKEMON_NICKIT")]
    SpawnV0827PokemonNickit,
    #[serde(rename = "SPAWN_V0827_POKEMON_NICKIT_NORMAL")]
    SpawnV0827PokemonNickitNormal,
    #[serde(rename = "SPAWN_V0828_POKEMON_THIEVUL")]
    SpawnV0828PokemonThievul,
    #[serde(rename = "SPAWN_V0828_POKEMON_THIEVUL_NORMAL")]
    SpawnV0828PokemonThievulNormal,
    #[serde(rename = "SPAWN_V0829_POKEMON_GOSSIFLEUR")]
    SpawnV0829PokemonGossifleur,
    #[serde(rename = "SPAWN_V0829_POKEMON_GOSSIFLEUR_NORMAL")]
    SpawnV0829PokemonGossifleurNormal,
    #[serde(rename = "SPAWN_V0830_POKEMON_ELDEGOSS")]
    SpawnV0830PokemonEldegoss,
    #[serde(rename = "SPAWN_V0830_POKEMON_ELDEGOSS_NORMAL")]
    SpawnV0830PokemonEldegossNormal,
    #[serde(rename = "SPAWN_V0831_POKEMON_WOOLOO")]
    SpawnV0831PokemonWooloo,
    #[serde(rename = "SPAWN_V0831_POKEMON_WOOLOO_NORMAL")]
    SpawnV0831PokemonWoolooNormal,
    #[serde(rename = "SPAWN_V0832_POKEMON_DUBWOOL")]
    SpawnV0832PokemonDubwool,
    #[serde(rename = "SPAWN_V0832_POKEMON_DUBWOOL_NORMAL")]
    SpawnV0832PokemonDubwoolNormal,
    #[serde(rename = "SPAWN_V0833_POKEMON_CHEWTLE")]
    SpawnV0833PokemonChewtle,
    #[serde(rename = "SPAWN_V0833_POKEMON_CHEWTLE_NORMAL")]
    SpawnV0833PokemonChewtleNormal,
    #[serde(rename = "SPAWN_V0834_POKEMON_DREDNAW")]
    SpawnV0834PokemonDrednaw,
    #[serde(rename = "SPAWN_V0834_POKEMON_DREDNAW_NORMAL")]
    SpawnV0834PokemonDrednawNormal,
    #[serde(rename = "SPAWN_V0835_POKEMON_YAMPER")]
    SpawnV0835PokemonYamper,
    #[serde(rename = "SPAWN_V0835_POKEMON_YAMPER_NORMAL")]
    SpawnV0835PokemonYamperNormal,
    #[serde(rename = "SPAWN_V0836_POKEMON_BOLTUND")]
    SpawnV0836PokemonBoltund,
    #[serde(rename = "SPAWN_V0836_POKEMON_BOLTUND_NORMAL")]
    SpawnV0836PokemonBoltundNormal,
    #[serde(rename = "SPAWN_V0837_POKEMON_ROLYCOLY")]
    SpawnV0837PokemonRolycoly,
    #[serde(rename = "SPAWN_V0837_POKEMON_ROLYCOLY_NORMAL")]
    SpawnV0837PokemonRolycolyNormal,
    #[serde(rename = "SPAWN_V0838_POKEMON_CARKOL")]
    SpawnV0838PokemonCarkol,
    #[serde(rename = "SPAWN_V0838_POKEMON_CARKOL_NORMAL")]
    SpawnV0838PokemonCarkolNormal,
    #[serde(rename = "SPAWN_V0839_POKEMON_COALOSSAL")]
    SpawnV0839PokemonCoalossal,
    #[serde(rename = "SPAWN_V0839_POKEMON_COALOSSAL_NORMAL")]
    SpawnV0839PokemonCoalossalNormal,
    #[serde(rename = "SPAWN_V0840_POKEMON_APPLIN")]
    SpawnV0840PokemonApplin,
    #[serde(rename = "SPAWN_V0840_POKEMON_APPLIN_NORMAL")]
    SpawnV0840PokemonApplinNormal,
    #[serde(rename = "SPAWN_V0841_POKEMON_FLAPPLE")]
    SpawnV0841PokemonFlapple,
    #[serde(rename = "SPAWN_V0841_POKEMON_FLAPPLE_NORMAL")]
    SpawnV0841PokemonFlappleNormal,
    #[serde(rename = "SPAWN_V0842_POKEMON_APPLETUN")]
    SpawnV0842PokemonAppletun,
    #[serde(rename = "SPAWN_V0842_POKEMON_APPLETUN_NORMAL")]
    SpawnV0842PokemonAppletunNormal,
    #[serde(rename = "SPAWN_V0843_POKEMON_SILICOBRA")]
    SpawnV0843PokemonSilicobra,
    #[serde(rename = "SPAWN_V0843_POKEMON_SILICOBRA_NORMAL")]
    SpawnV0843PokemonSilicobraNormal,
    #[serde(rename = "SPAWN_V0844_POKEMON_SANDACONDA")]
    SpawnV0844PokemonSandaconda,
    #[serde(rename = "SPAWN_V0844_POKEMON_SANDACONDA_NORMAL")]
    SpawnV0844PokemonSandacondaNormal,
    #[serde(rename = "SPAWN_V0845_POKEMON_CRAMORANT")]
    SpawnV0845PokemonCramorant,
    #[serde(rename = "SPAWN_V0845_POKEMON_CRAMORANT_NORMAL")]
    SpawnV0845PokemonCramorantNormal,
    #[serde(rename = "SPAWN_V0846_POKEMON_ARROKUDA")]
    SpawnV0846PokemonArrokuda,
    #[serde(rename = "SPAWN_V0846_POKEMON_ARROKUDA_NORMAL")]
    SpawnV0846PokemonArrokudaNormal,
    #[serde(rename = "SPAWN_V0847_POKEMON_BARRASKEWDA")]
    SpawnV0847PokemonBarraskewda,
    #[serde(rename = "SPAWN_V0847_POKEMON_BARRASKEWDA_NORMAL")]
    SpawnV0847PokemonBarraskewdaNormal,
    #[serde(rename = "SPAWN_V0848_POKEMON_TOXEL")]
    SpawnV0848PokemonToxel,
    #[serde(rename = "SPAWN_V0848_POKEMON_TOXEL_NORMAL")]
    SpawnV0848PokemonToxelNormal,
    #[serde(rename = "SPAWN_V0849_POKEMON_TOXTRICITY")]
    SpawnV0849PokemonToxtricity,
    #[serde(rename = "SPAWN_V0849_POKEMON_TOXTRICITY_AMPED")]
    SpawnV0849PokemonToxtricityAmped,
    #[serde(rename = "SPAWN_V0849_POKEMON_TOXTRICITY_LOW_KEY")]
    SpawnV0849PokemonToxtricityLowKey,
    #[serde(rename = "SPAWN_V0850_POKEMON_SIZZLIPEDE")]
    SpawnV0850PokemonSizzlipede,
    #[serde(rename = "SPAWN_V0850_POKEMON_SIZZLIPEDE_NORMAL")]
    SpawnV0850PokemonSizzlipedeNormal,
    #[serde(rename = "SPAWN_V0851_POKEMON_CENTISKORCH")]
    SpawnV0851PokemonCentiskorch,
    #[serde(rename = "SPAWN_V0851_POKEMON_CENTISKORCH_NORMAL")]
    SpawnV0851PokemonCentiskorchNormal,
    #[serde(rename = "SPAWN_V0852_POKEMON_CLOBBOPUS")]
    SpawnV0852PokemonClobbopus,
    #[serde(rename = "SPAWN_V0852_POKEMON_CLOBBOPUS_NORMAL")]
    SpawnV0852PokemonClobbopusNormal,
    #[serde(rename = "SPAWN_V0853_POKEMON_GRAPPLOCT")]
    SpawnV0853PokemonGrapploct,
    #[serde(rename = "SPAWN_V0853_POKEMON_GRAPPLOCT_NORMAL")]
    SpawnV0853PokemonGrapploctNormal,
    #[serde(rename = "SPAWN_V0854_POKEMON_SINISTEA")]
    SpawnV0854PokemonSinistea,
    #[serde(rename = "SPAWN_V0854_POKEMON_SINISTEA_ANTIQUE")]
    SpawnV0854PokemonSinisteaAntique,
    #[serde(rename = "SPAWN_V0854_POKEMON_SINISTEA_PHONY")]
    SpawnV0854PokemonSinisteaPhony,
    #[serde(rename = "SPAWN_V0855_POKEMON_POLTEAGEIST")]
    SpawnV0855PokemonPolteageist,
    #[serde(rename = "SPAWN_V0855_POKEMON_POLTEAGEIST_ANTIQUE")]
    SpawnV0855PokemonPolteageistAntique,
    #[serde(rename = "SPAWN_V0855_POKEMON_POLTEAGEIST_PHONY")]
    SpawnV0855PokemonPolteageistPhony,
    #[serde(rename = "SPAWN_V0856_POKEMON_HATENNA")]
    SpawnV0856PokemonHatenna,
    #[serde(rename = "SPAWN_V0856_POKEMON_HATENNA_NORMAL")]
    SpawnV0856PokemonHatennaNormal,
    #[serde(rename = "SPAWN_V0857_POKEMON_HATTREM")]
    SpawnV0857PokemonHattrem,
    #[serde(rename = "SPAWN_V0857_POKEMON_HATTREM_NORMAL")]
    SpawnV0857PokemonHattremNormal,
    #[serde(rename = "SPAWN_V0858_POKEMON_HATTERENE")]
    SpawnV0858PokemonHatterene,
    #[serde(rename = "SPAWN_V0858_POKEMON_HATTERENE_NORMAL")]
    SpawnV0858PokemonHattereneNormal,
    #[serde(rename = "SPAWN_V0859_POKEMON_IMPIDIMP")]
    SpawnV0859PokemonImpidimp,
    #[serde(rename = "SPAWN_V0859_POKEMON_IMPIDIMP_NORMAL")]
    SpawnV0859PokemonImpidimpNormal,
    #[serde(rename = "SPAWN_V0860_POKEMON_MORGREM")]
    SpawnV0860PokemonMorgrem,
    #[serde(rename = "SPAWN_V0860_POKEMON_MORGREM_NORMAL")]
    SpawnV0860PokemonMorgremNormal,
    #[serde(rename = "SPAWN_V0861_POKEMON_GRIMMSNARL")]
    SpawnV0861PokemonGrimmsnarl,
    #[serde(rename = "SPAWN_V0861_POKEMON_GRIMMSNARL_NORMAL")]
    SpawnV0861PokemonGrimmsnarlNormal,
    #[serde(rename = "SPAWN_V0862_POKEMON_OBSTAGOON")]
    SpawnV0862PokemonObstagoon,
    #[serde(rename = "SPAWN_V0862_POKEMON_OBSTAGOON_NORMAL")]
    SpawnV0862PokemonObstagoonNormal,
    #[serde(rename = "SPAWN_V0863_POKEMON_PERRSERKER")]
    SpawnV0863PokemonPerrserker,
    #[serde(rename = "SPAWN_V0863_POKEMON_PERRSERKER_NORMAL")]
    SpawnV0863PokemonPerrserkerNormal,
    #[serde(rename = "SPAWN_V0864_POKEMON_CURSOLA")]
    SpawnV0864PokemonCursola,
    #[serde(rename = "SPAWN_V0864_POKEMON_CURSOLA_NORMAL")]
    SpawnV0864PokemonCursolaNormal,
    #[serde(rename = "SPAWN_V0865_POKEMON_SIRFETCHD")]
    SpawnV0865PokemonSirfetchd,
    #[serde(rename = "SPAWN_V0865_POKEMON_SIRFETCHD_NORMAL")]
    SpawnV0865PokemonSirfetchdNormal,
    #[serde(rename = "SPAWN_V0866_POKEMON_MR_RIME")]
    SpawnV0866PokemonMrRime,
    #[serde(rename = "SPAWN_V0866_POKEMON_MR_RIME_NORMAL")]
    SpawnV0866PokemonMrRimeNormal,
    #[serde(rename = "SPAWN_V0867_POKEMON_RUNERIGUS")]
    SpawnV0867PokemonRunerigus,
    #[serde(rename = "SPAWN_V0867_POKEMON_RUNERIGUS_NORMAL")]
    SpawnV0867PokemonRunerigusNormal,
    #[serde(rename = "SPAWN_V0868_POKEMON_MILCERY")]
    SpawnV0868PokemonMilcery,
    #[serde(rename = "SPAWN_V0868_POKEMON_MILCERY_NORMAL")]
    SpawnV0868PokemonMilceryNormal,
    #[serde(rename = "SPAWN_V0869_POKEMON_ALCREMIE")]
    SpawnV0869PokemonAlcremie,
    #[serde(rename = "SPAWN_V0869_POKEMON_ALCREMIE_NORMAL")]
    SpawnV0869PokemonAlcremieNormal,
    #[serde(rename = "SPAWN_V0870_POKEMON_FALINKS")]
    SpawnV0870PokemonFalinks,
    #[serde(rename = "SPAWN_V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR")]
    SpawnV0870PokemonFalinksGofest2025TrainConductor,
    #[serde(rename = "SPAWN_V0870_POKEMON_FALINKS_NORMAL")]
    SpawnV0870PokemonFalinksNormal,
    #[serde(rename = "SPAWN_V0871_POKEMON_PINCURCHIN")]
    SpawnV0871PokemonPincurchin,
    #[serde(rename = "SPAWN_V0871_POKEMON_PINCURCHIN_NORMAL")]
    SpawnV0871PokemonPincurchinNormal,
    #[serde(rename = "SPAWN_V0872_POKEMON_SNOM")]
    SpawnV0872PokemonSnom,
    #[serde(rename = "SPAWN_V0872_POKEMON_SNOM_NORMAL")]
    SpawnV0872PokemonSnomNormal,
    #[serde(rename = "SPAWN_V0873_POKEMON_FROSMOTH")]
    SpawnV0873PokemonFrosmoth,
    #[serde(rename = "SPAWN_V0873_POKEMON_FROSMOTH_NORMAL")]
    SpawnV0873PokemonFrosmothNormal,
    #[serde(rename = "SPAWN_V0874_POKEMON_STONJOURNER")]
    SpawnV0874PokemonStonjourner,
    #[serde(rename = "SPAWN_V0874_POKEMON_STONJOURNER_NORMAL")]
    SpawnV0874PokemonStonjournerNormal,
    #[serde(rename = "SPAWN_V0875_POKEMON_EISCUE")]
    SpawnV0875PokemonEiscue,
    #[serde(rename = "SPAWN_V0875_POKEMON_EISCUE_ICE")]
    SpawnV0875PokemonEiscueIce,
    #[serde(rename = "SPAWN_V0875_POKEMON_EISCUE_NOICE")]
    SpawnV0875PokemonEiscueNoice,
    #[serde(rename = "SPAWN_V0876_POKEMON_INDEEDEE")]
    SpawnV0876PokemonIndeedee,
    #[serde(rename = "SPAWN_V0876_POKEMON_INDEEDEE_FEMALE")]
    SpawnV0876PokemonIndeedeeFemale,
    #[serde(rename = "SPAWN_V0876_POKEMON_INDEEDEE_MALE")]
    SpawnV0876PokemonIndeedeeMale,
    #[serde(rename = "SPAWN_V0877_POKEMON_MORPEKO")]
    SpawnV0877PokemonMorpeko,
    #[serde(rename = "SPAWN_V0877_POKEMON_MORPEKO_FULL_BELLY")]
    SpawnV0877PokemonMorpekoFullBelly,
    #[serde(rename = "SPAWN_V0877_POKEMON_MORPEKO_HANGRY")]
    SpawnV0877PokemonMorpekoHangry,
    #[serde(rename = "SPAWN_V0878_POKEMON_CUFANT")]
    SpawnV0878PokemonCufant,
    #[serde(rename = "SPAWN_V0878_POKEMON_CUFANT_NORMAL")]
    SpawnV0878PokemonCufantNormal,
    #[serde(rename = "SPAWN_V0879_POKEMON_COPPERAJAH")]
    SpawnV0879PokemonCopperajah,
    #[serde(rename = "SPAWN_V0879_POKEMON_COPPERAJAH_NORMAL")]
    SpawnV0879PokemonCopperajahNormal,
    #[serde(rename = "SPAWN_V0880_POKEMON_DRACOZOLT")]
    SpawnV0880PokemonDracozolt,
    #[serde(rename = "SPAWN_V0880_POKEMON_DRACOZOLT_NORMAL")]
    SpawnV0880PokemonDracozoltNormal,
    #[serde(rename = "SPAWN_V0881_POKEMON_ARCTOZOLT")]
    SpawnV0881PokemonArctozolt,
    #[serde(rename = "SPAWN_V0881_POKEMON_ARCTOZOLT_NORMAL")]
    SpawnV0881PokemonArctozoltNormal,
    #[serde(rename = "SPAWN_V0882_POKEMON_DRACOVISH")]
    SpawnV0882PokemonDracovish,
    #[serde(rename = "SPAWN_V0882_POKEMON_DRACOVISH_NORMAL")]
    SpawnV0882PokemonDracovishNormal,
    #[serde(rename = "SPAWN_V0883_POKEMON_ARCTOVISH")]
    SpawnV0883PokemonArctovish,
    #[serde(rename = "SPAWN_V0883_POKEMON_ARCTOVISH_NORMAL")]
    SpawnV0883PokemonArctovishNormal,
    #[serde(rename = "SPAWN_V0884_POKEMON_DURALUDON")]
    SpawnV0884PokemonDuraludon,
    #[serde(rename = "SPAWN_V0884_POKEMON_DURALUDON_NORMAL")]
    SpawnV0884PokemonDuraludonNormal,
    #[serde(rename = "SPAWN_V0885_POKEMON_DREEPY")]
    SpawnV0885PokemonDreepy,
    #[serde(rename = "SPAWN_V0885_POKEMON_DREEPY_NORMAL")]
    SpawnV0885PokemonDreepyNormal,
    #[serde(rename = "SPAWN_V0886_POKEMON_DRAKLOAK")]
    SpawnV0886PokemonDrakloak,
    #[serde(rename = "SPAWN_V0886_POKEMON_DRAKLOAK_NORMAL")]
    SpawnV0886PokemonDrakloakNormal,
    #[serde(rename = "SPAWN_V0887_POKEMON_DRAGAPULT")]
    SpawnV0887PokemonDragapult,
    #[serde(rename = "SPAWN_V0887_POKEMON_DRAGAPULT_NORMAL")]
    SpawnV0887PokemonDragapultNormal,
    #[serde(rename = "SPAWN_V0888_POKEMON_ZACIAN")]
    SpawnV0888PokemonZacian,
    #[serde(rename = "SPAWN_V0888_POKEMON_ZACIAN_CROWNED_SWORD")]
    SpawnV0888PokemonZacianCrownedSword,
    #[serde(rename = "SPAWN_V0888_POKEMON_ZACIAN_HERO")]
    SpawnV0888PokemonZacianHero,
    #[serde(rename = "SPAWN_V0889_POKEMON_ZAMAZENTA")]
    SpawnV0889PokemonZamazenta,
    #[serde(rename = "SPAWN_V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD")]
    SpawnV0889PokemonZamazentaCrownedShield,
    #[serde(rename = "SPAWN_V0889_POKEMON_ZAMAZENTA_HERO")]
    SpawnV0889PokemonZamazentaHero,
    #[serde(rename = "SPAWN_V0890_POKEMON_ETERNATUS")]
    SpawnV0890PokemonEternatus,
    #[serde(rename = "SPAWN_V0890_POKEMON_ETERNATUS_ETERNAMAX")]
    SpawnV0890PokemonEternatusEternamax,
    #[serde(rename = "SPAWN_V0890_POKEMON_ETERNATUS_NORMAL")]
    SpawnV0890PokemonEternatusNormal,
    #[serde(rename = "SPAWN_V0891_POKEMON_KUBFU")]
    SpawnV0891PokemonKubfu,
    #[serde(rename = "SPAWN_V0891_POKEMON_KUBFU_NORMAL")]
    SpawnV0891PokemonKubfuNormal,
    #[serde(rename = "SPAWN_V0892_POKEMON_URSHIFU")]
    SpawnV0892PokemonUrshifu,
    #[serde(rename = "SPAWN_V0892_POKEMON_URSHIFU_RAPID_STRIKE")]
    SpawnV0892PokemonUrshifuRapidStrike,
    #[serde(rename = "SPAWN_V0892_POKEMON_URSHIFU_SINGLE_STRIKE")]
    SpawnV0892PokemonUrshifuSingleStrike,
    #[serde(rename = "SPAWN_V0893_POKEMON_ZARUDE")]
    SpawnV0893PokemonZarude,
    #[serde(rename = "SPAWN_V0893_POKEMON_ZARUDE_NORMAL")]
    SpawnV0893PokemonZarudeNormal,
    #[serde(rename = "SPAWN_V0894_POKEMON_REGIELEKI")]
    SpawnV0894PokemonRegieleki,
    #[serde(rename = "SPAWN_V0894_POKEMON_REGIELEKI_NORMAL")]
    SpawnV0894PokemonRegielekiNormal,
    #[serde(rename = "SPAWN_V0895_POKEMON_REGIDRAGO")]
    SpawnV0895PokemonRegidrago,
    #[serde(rename = "SPAWN_V0895_POKEMON_REGIDRAGO_NORMAL")]
    SpawnV0895PokemonRegidragoNormal,
    #[serde(rename = "SPAWN_V0896_POKEMON_GLASTRIER")]
    SpawnV0896PokemonGlastrier,
    #[serde(rename = "SPAWN_V0896_POKEMON_GLASTRIER_NORMAL")]
    SpawnV0896PokemonGlastrierNormal,
    #[serde(rename = "SPAWN_V0897_POKEMON_SPECTRIER")]
    SpawnV0897PokemonSpectrier,
    #[serde(rename = "SPAWN_V0897_POKEMON_SPECTRIER_NORMAL")]
    SpawnV0897PokemonSpectrierNormal,
    #[serde(rename = "SPAWN_V0898_POKEMON_CALYREX")]
    SpawnV0898PokemonCalyrex,
    #[serde(rename = "SPAWN_V0898_POKEMON_CALYREX_ICE_RIDER")]
    SpawnV0898PokemonCalyrexIceRider,
    #[serde(rename = "SPAWN_V0898_POKEMON_CALYREX_NORMAL")]
    SpawnV0898PokemonCalyrexNormal,
    #[serde(rename = "SPAWN_V0898_POKEMON_CALYREX_SHADOW_RIDER")]
    SpawnV0898PokemonCalyrexShadowRider,
    #[serde(rename = "SPAWN_V0899_POKEMON_WYRDEER")]
    SpawnV0899PokemonWyrdeer,
    #[serde(rename = "SPAWN_V0899_POKEMON_WYRDEER_NORMAL")]
    SpawnV0899PokemonWyrdeerNormal,
    #[serde(rename = "SPAWN_V0900_POKEMON_KLEAVOR")]
    SpawnV0900PokemonKleavor,
    #[serde(rename = "SPAWN_V0900_POKEMON_KLEAVOR_NORMAL")]
    SpawnV0900PokemonKleavorNormal,
    #[serde(rename = "SPAWN_V0901_POKEMON_URSALUNA")]
    SpawnV0901PokemonUrsaluna,
    #[serde(rename = "SPAWN_V0901_POKEMON_URSALUNA_NORMAL")]
    SpawnV0901PokemonUrsalunaNormal,
    #[serde(rename = "SPAWN_V0902_POKEMON_BASCULEGION")]
    SpawnV0902PokemonBasculegion,
    #[serde(rename = "SPAWN_V0902_POKEMON_BASCULEGION_FEMALE")]
    SpawnV0902PokemonBasculegionFemale,
    #[serde(rename = "SPAWN_V0902_POKEMON_BASCULEGION_NORMAL")]
    SpawnV0902PokemonBasculegionNormal,
    #[serde(rename = "SPAWN_V0903_POKEMON_SNEASLER")]
    SpawnV0903PokemonSneasler,
    #[serde(rename = "SPAWN_V0903_POKEMON_SNEASLER_NORMAL")]
    SpawnV0903PokemonSneaslerNormal,
    #[serde(rename = "SPAWN_V0904_POKEMON_OVERQWIL")]
    SpawnV0904PokemonOverqwil,
    #[serde(rename = "SPAWN_V0904_POKEMON_OVERQWIL_NORMAL")]
    SpawnV0904PokemonOverqwilNormal,
    #[serde(rename = "SPAWN_V0905_POKEMON_ENAMORUS")]
    SpawnV0905PokemonEnamorus,
    #[serde(rename = "SPAWN_V0905_POKEMON_ENAMORUS_INCARNATE")]
    SpawnV0905PokemonEnamorusIncarnate,
    #[serde(rename = "SPAWN_V0905_POKEMON_ENAMORUS_THERIAN")]
    SpawnV0905PokemonEnamorusTherian,
    #[serde(rename = "SPAWN_V0906_POKEMON_SPRIGATITO")]
    SpawnV0906PokemonSprigatito,
    #[serde(rename = "SPAWN_V0906_POKEMON_SPRIGATITO_NORMAL")]
    SpawnV0906PokemonSprigatitoNormal,
    #[serde(rename = "SPAWN_V0907_POKEMON_FLORAGATO")]
    SpawnV0907PokemonFloragato,
    #[serde(rename = "SPAWN_V0907_POKEMON_FLORAGATO_NORMAL")]
    SpawnV0907PokemonFloragatoNormal,
    #[serde(rename = "SPAWN_V0908_POKEMON_MEOWSCARADA")]
    SpawnV0908PokemonMeowscarada,
    #[serde(rename = "SPAWN_V0908_POKEMON_MEOWSCARADA_NORMAL")]
    SpawnV0908PokemonMeowscaradaNormal,
    #[serde(rename = "SPAWN_V0909_POKEMON_FUECOCO")]
    SpawnV0909PokemonFuecoco,
    #[serde(rename = "SPAWN_V0909_POKEMON_FUECOCO_NORMAL")]
    SpawnV0909PokemonFuecocoNormal,
    #[serde(rename = "SPAWN_V0910_POKEMON_CROCALOR")]
    SpawnV0910PokemonCrocalor,
    #[serde(rename = "SPAWN_V0910_POKEMON_CROCALOR_NORMAL")]
    SpawnV0910PokemonCrocalorNormal,
    #[serde(rename = "SPAWN_V0911_POKEMON_SKELEDIRGE")]
    SpawnV0911PokemonSkeledirge,
    #[serde(rename = "SPAWN_V0911_POKEMON_SKELEDIRGE_NORMAL")]
    SpawnV0911PokemonSkeledirgeNormal,
    #[serde(rename = "SPAWN_V0912_POKEMON_QUAXLY")]
    SpawnV0912PokemonQuaxly,
    #[serde(rename = "SPAWN_V0912_POKEMON_QUAXLY_NORMAL")]
    SpawnV0912PokemonQuaxlyNormal,
    #[serde(rename = "SPAWN_V0913_POKEMON_QUAXWELL")]
    SpawnV0913PokemonQuaxwell,
    #[serde(rename = "SPAWN_V0913_POKEMON_QUAXWELL_NORMAL")]
    SpawnV0913PokemonQuaxwellNormal,
    #[serde(rename = "SPAWN_V0914_POKEMON_QUAQUAVAL")]
    SpawnV0914PokemonQuaquaval,
    #[serde(rename = "SPAWN_V0914_POKEMON_QUAQUAVAL_NORMAL")]
    SpawnV0914PokemonQuaquavalNormal,
    #[serde(rename = "SPAWN_V0915_POKEMON_LECHONK")]
    SpawnV0915PokemonLechonk,
    #[serde(rename = "SPAWN_V0915_POKEMON_LECHONK_NORMAL")]
    SpawnV0915PokemonLechonkNormal,
    #[serde(rename = "SPAWN_V0916_POKEMON_OINKOLOGNE")]
    SpawnV0916PokemonOinkologne,
    #[serde(rename = "SPAWN_V0916_POKEMON_OINKOLOGNE_FEMALE")]
    SpawnV0916PokemonOinkologneFemale,
    #[serde(rename = "SPAWN_V0916_POKEMON_OINKOLOGNE_NORMAL")]
    SpawnV0916PokemonOinkologneNormal,
    #[serde(rename = "SPAWN_V0917_POKEMON_TAROUNTULA")]
    SpawnV0917PokemonTarountula,
    #[serde(rename = "SPAWN_V0917_POKEMON_TAROUNTULA_NORMAL")]
    SpawnV0917PokemonTarountulaNormal,
    #[serde(rename = "SPAWN_V0918_POKEMON_SPIDOPS")]
    SpawnV0918PokemonSpidops,
    #[serde(rename = "SPAWN_V0918_POKEMON_SPIDOPS_NORMAL")]
    SpawnV0918PokemonSpidopsNormal,
    #[serde(rename = "SPAWN_V0919_POKEMON_NYMBLE")]
    SpawnV0919PokemonNymble,
    #[serde(rename = "SPAWN_V0919_POKEMON_NYMBLE_NORMAL")]
    SpawnV0919PokemonNymbleNormal,
    #[serde(rename = "SPAWN_V0920_POKEMON_LOKIX")]
    SpawnV0920PokemonLokix,
    #[serde(rename = "SPAWN_V0920_POKEMON_LOKIX_NORMAL")]
    SpawnV0920PokemonLokixNormal,
    #[serde(rename = "SPAWN_V0921_POKEMON_PAWMI")]
    SpawnV0921PokemonPawmi,
    #[serde(rename = "SPAWN_V0921_POKEMON_PAWMI_NORMAL")]
    SpawnV0921PokemonPawmiNormal,
    #[serde(rename = "SPAWN_V0922_POKEMON_PAWMO")]
    SpawnV0922PokemonPawmo,
    #[serde(rename = "SPAWN_V0922_POKEMON_PAWMO_NORMAL")]
    SpawnV0922PokemonPawmoNormal,
    #[serde(rename = "SPAWN_V0923_POKEMON_PAWMOT")]
    SpawnV0923PokemonPawmot,
    #[serde(rename = "SPAWN_V0923_POKEMON_PAWMOT_NORMAL")]
    SpawnV0923PokemonPawmotNormal,
    #[serde(rename = "SPAWN_V0924_POKEMON_TANDEMAUS")]
    SpawnV0924PokemonTandemaus,
    #[serde(rename = "SPAWN_V0924_POKEMON_TANDEMAUS_NORMAL")]
    SpawnV0924PokemonTandemausNormal,
    #[serde(rename = "SPAWN_V0925_POKEMON_MAUSHOLD")]
    SpawnV0925PokemonMaushold,
    #[serde(rename = "SPAWN_V0925_POKEMON_MAUSHOLD_FAMILY_OF_FOUR")]
    SpawnV0925PokemonMausholdFamilyOfFour,
    #[serde(rename = "SPAWN_V0925_POKEMON_MAUSHOLD_FAMILY_OF_THREE")]
    SpawnV0925PokemonMausholdFamilyOfThree,
    #[serde(rename = "SPAWN_V0926_POKEMON_FIDOUGH")]
    SpawnV0926PokemonFidough,
    #[serde(rename = "SPAWN_V0926_POKEMON_FIDOUGH_NORMAL")]
    SpawnV0926PokemonFidoughNormal,
    #[serde(rename = "SPAWN_V0927_POKEMON_DACHSBUN")]
    SpawnV0927PokemonDachsbun,
    #[serde(rename = "SPAWN_V0927_POKEMON_DACHSBUN_NORMAL")]
    SpawnV0927PokemonDachsbunNormal,
    #[serde(rename = "SPAWN_V0928_POKEMON_SMOLIV")]
    SpawnV0928PokemonSmoliv,
    #[serde(rename = "SPAWN_V0928_POKEMON_SMOLIV_NORMAL")]
    SpawnV0928PokemonSmolivNormal,
    #[serde(rename = "SPAWN_V0929_POKEMON_DOLLIV")]
    SpawnV0929PokemonDolliv,
    #[serde(rename = "SPAWN_V0929_POKEMON_DOLLIV_NORMAL")]
    SpawnV0929PokemonDollivNormal,
    #[serde(rename = "SPAWN_V0930_POKEMON_ARBOLIVA")]
    SpawnV0930PokemonArboliva,
    #[serde(rename = "SPAWN_V0930_POKEMON_ARBOLIVA_NORMAL")]
    SpawnV0930PokemonArbolivaNormal,
    #[serde(rename = "SPAWN_V0931_POKEMON_SQUAWKABILLY")]
    SpawnV0931PokemonSquawkabilly,
    #[serde(rename = "SPAWN_V0931_POKEMON_SQUAWKABILLY_BLUE")]
    SpawnV0931PokemonSquawkabillyBlue,
    #[serde(rename = "SPAWN_V0931_POKEMON_SQUAWKABILLY_GREEN")]
    SpawnV0931PokemonSquawkabillyGreen,
    #[serde(rename = "SPAWN_V0931_POKEMON_SQUAWKABILLY_WHITE")]
    SpawnV0931PokemonSquawkabillyWhite,
    #[serde(rename = "SPAWN_V0931_POKEMON_SQUAWKABILLY_YELLOW")]
    SpawnV0931PokemonSquawkabillyYellow,
    #[serde(rename = "SPAWN_V0932_POKEMON_NACLI")]
    SpawnV0932PokemonNacli,
    #[serde(rename = "SPAWN_V0932_POKEMON_NACLI_NORMAL")]
    SpawnV0932PokemonNacliNormal,
    #[serde(rename = "SPAWN_V0933_POKEMON_NACLSTACK")]
    SpawnV0933PokemonNaclstack,
    #[serde(rename = "SPAWN_V0933_POKEMON_NACLSTACK_NORMAL")]
    SpawnV0933PokemonNaclstackNormal,
    #[serde(rename = "SPAWN_V0934_POKEMON_GARGANACL")]
    SpawnV0934PokemonGarganacl,
    #[serde(rename = "SPAWN_V0934_POKEMON_GARGANACL_NORMAL")]
    SpawnV0934PokemonGarganaclNormal,
    #[serde(rename = "SPAWN_V0935_POKEMON_CHARCADET")]
    SpawnV0935PokemonCharcadet,
    #[serde(rename = "SPAWN_V0935_POKEMON_CHARCADET_NORMAL")]
    SpawnV0935PokemonCharcadetNormal,
    #[serde(rename = "SPAWN_V0936_POKEMON_ARMAROUGE")]
    SpawnV0936PokemonArmarouge,
    #[serde(rename = "SPAWN_V0936_POKEMON_ARMAROUGE_NORMAL")]
    SpawnV0936PokemonArmarougeNormal,
    #[serde(rename = "SPAWN_V0937_POKEMON_CERULEDGE")]
    SpawnV0937PokemonCeruledge,
    #[serde(rename = "SPAWN_V0937_POKEMON_CERULEDGE_NORMAL")]
    SpawnV0937PokemonCeruledgeNormal,
    #[serde(rename = "SPAWN_V0938_POKEMON_TADBULB")]
    SpawnV0938PokemonTadbulb,
    #[serde(rename = "SPAWN_V0938_POKEMON_TADBULB_NORMAL")]
    SpawnV0938PokemonTadbulbNormal,
    #[serde(rename = "SPAWN_V0939_POKEMON_BELLIBOLT")]
    SpawnV0939PokemonBellibolt,
    #[serde(rename = "SPAWN_V0939_POKEMON_BELLIBOLT_NORMAL")]
    SpawnV0939PokemonBelliboltNormal,
    #[serde(rename = "SPAWN_V0940_POKEMON_WATTREL")]
    SpawnV0940PokemonWattrel,
    #[serde(rename = "SPAWN_V0940_POKEMON_WATTREL_NORMAL")]
    SpawnV0940PokemonWattrelNormal,
    #[serde(rename = "SPAWN_V0941_POKEMON_KILOWATTREL")]
    SpawnV0941PokemonKilowattrel,
    #[serde(rename = "SPAWN_V0941_POKEMON_KILOWATTREL_NORMAL")]
    SpawnV0941PokemonKilowattrelNormal,
    #[serde(rename = "SPAWN_V0942_POKEMON_MASCHIFF")]
    SpawnV0942PokemonMaschiff,
    #[serde(rename = "SPAWN_V0942_POKEMON_MASCHIFF_NORMAL")]
    SpawnV0942PokemonMaschiffNormal,
    #[serde(rename = "SPAWN_V0943_POKEMON_MABOSSTIFF")]
    SpawnV0943PokemonMabosstiff,
    #[serde(rename = "SPAWN_V0943_POKEMON_MABOSSTIFF_NORMAL")]
    SpawnV0943PokemonMabosstiffNormal,
    #[serde(rename = "SPAWN_V0944_POKEMON_SHROODLE")]
    SpawnV0944PokemonShroodle,
    #[serde(rename = "SPAWN_V0944_POKEMON_SHROODLE_NORMAL")]
    SpawnV0944PokemonShroodleNormal,
    #[serde(rename = "SPAWN_V0945_POKEMON_GRAFAIAI")]
    SpawnV0945PokemonGrafaiai,
    #[serde(rename = "SPAWN_V0945_POKEMON_GRAFAIAI_NORMAL")]
    SpawnV0945PokemonGrafaiaiNormal,
    #[serde(rename = "SPAWN_V0946_POKEMON_BRAMBLIN")]
    SpawnV0946PokemonBramblin,
    #[serde(rename = "SPAWN_V0946_POKEMON_BRAMBLIN_NORMAL")]
    SpawnV0946PokemonBramblinNormal,
    #[serde(rename = "SPAWN_V0947_POKEMON_BRAMBLEGHAST")]
    SpawnV0947PokemonBrambleghast,
    #[serde(rename = "SPAWN_V0947_POKEMON_BRAMBLEGHAST_NORMAL")]
    SpawnV0947PokemonBrambleghastNormal,
    #[serde(rename = "SPAWN_V0948_POKEMON_TOEDSCOOL")]
    SpawnV0948PokemonToedscool,
    #[serde(rename = "SPAWN_V0948_POKEMON_TOEDSCOOL_NORMAL")]
    SpawnV0948PokemonToedscoolNormal,
    #[serde(rename = "SPAWN_V0949_POKEMON_TOEDSCRUEL")]
    SpawnV0949PokemonToedscruel,
    #[serde(rename = "SPAWN_V0949_POKEMON_TOEDSCRUEL_NORMAL")]
    SpawnV0949PokemonToedscruelNormal,
    #[serde(rename = "SPAWN_V0950_POKEMON_KLAWF")]
    SpawnV0950PokemonKlawf,
    #[serde(rename = "SPAWN_V0950_POKEMON_KLAWF_NORMAL")]
    SpawnV0950PokemonKlawfNormal,
    #[serde(rename = "SPAWN_V0951_POKEMON_CAPSAKID")]
    SpawnV0951PokemonCapsakid,
    #[serde(rename = "SPAWN_V0951_POKEMON_CAPSAKID_NORMAL")]
    SpawnV0951PokemonCapsakidNormal,
    #[serde(rename = "SPAWN_V0952_POKEMON_SCOVILLAIN")]
    SpawnV0952PokemonScovillain,
    #[serde(rename = "SPAWN_V0952_POKEMON_SCOVILLAIN_NORMAL")]
    SpawnV0952PokemonScovillainNormal,
    #[serde(rename = "SPAWN_V0953_POKEMON_RELLOR")]
    SpawnV0953PokemonRellor,
    #[serde(rename = "SPAWN_V0953_POKEMON_RELLOR_NORMAL")]
    SpawnV0953PokemonRellorNormal,
    #[serde(rename = "SPAWN_V0954_POKEMON_RABSCA")]
    SpawnV0954PokemonRabsca,
    #[serde(rename = "SPAWN_V0954_POKEMON_RABSCA_NORMAL")]
    SpawnV0954PokemonRabscaNormal,
    #[serde(rename = "SPAWN_V0955_POKEMON_FLITTLE")]
    SpawnV0955PokemonFlittle,
    #[serde(rename = "SPAWN_V0955_POKEMON_FLITTLE_NORMAL")]
    SpawnV0955PokemonFlittleNormal,
    #[serde(rename = "SPAWN_V0956_POKEMON_ESPATHRA")]
    SpawnV0956PokemonEspathra,
    #[serde(rename = "SPAWN_V0956_POKEMON_ESPATHRA_NORMAL")]
    SpawnV0956PokemonEspathraNormal,
    #[serde(rename = "SPAWN_V0957_POKEMON_TINKATINK")]
    SpawnV0957PokemonTinkatink,
    #[serde(rename = "SPAWN_V0957_POKEMON_TINKATINK_NORMAL")]
    SpawnV0957PokemonTinkatinkNormal,
    #[serde(rename = "SPAWN_V0958_POKEMON_TINKATUFF")]
    SpawnV0958PokemonTinkatuff,
    #[serde(rename = "SPAWN_V0958_POKEMON_TINKATUFF_NORMAL")]
    SpawnV0958PokemonTinkatuffNormal,
    #[serde(rename = "SPAWN_V0959_POKEMON_TINKATON")]
    SpawnV0959PokemonTinkaton,
    #[serde(rename = "SPAWN_V0959_POKEMON_TINKATON_NORMAL")]
    SpawnV0959PokemonTinkatonNormal,
    #[serde(rename = "SPAWN_V0960_POKEMON_WIGLETT")]
    SpawnV0960PokemonWiglett,
    #[serde(rename = "SPAWN_V0960_POKEMON_WIGLETT_NORMAL")]
    SpawnV0960PokemonWiglettNormal,
    #[serde(rename = "SPAWN_V0961_POKEMON_WUGTRIO")]
    SpawnV0961PokemonWugtrio,
    #[serde(rename = "SPAWN_V0961_POKEMON_WUGTRIO_NORMAL")]
    SpawnV0961PokemonWugtrioNormal,
    #[serde(rename = "SPAWN_V0962_POKEMON_BOMBIRDIER")]
    SpawnV0962PokemonBombirdier,
    #[serde(rename = "SPAWN_V0962_POKEMON_BOMBIRDIER_NORMAL")]
    SpawnV0962PokemonBombirdierNormal,
    #[serde(rename = "SPAWN_V0963_POKEMON_FINIZEN")]
    SpawnV0963PokemonFinizen,
    #[serde(rename = "SPAWN_V0963_POKEMON_FINIZEN_NORMAL")]
    SpawnV0963PokemonFinizenNormal,
    #[serde(rename = "SPAWN_V0964_POKEMON_PALAFIN")]
    SpawnV0964PokemonPalafin,
    #[serde(rename = "SPAWN_V0964_POKEMON_PALAFIN_HERO")]
    SpawnV0964PokemonPalafinHero,
    #[serde(rename = "SPAWN_V0964_POKEMON_PALAFIN_ZERO")]
    SpawnV0964PokemonPalafinZero,
    #[serde(rename = "SPAWN_V0965_POKEMON_VAROOM")]
    SpawnV0965PokemonVaroom,
    #[serde(rename = "SPAWN_V0965_POKEMON_VAROOM_NORMAL")]
    SpawnV0965PokemonVaroomNormal,
    #[serde(rename = "SPAWN_V0966_POKEMON_REVAVROOM")]
    SpawnV0966PokemonRevavroom,
    #[serde(rename = "SPAWN_V0966_POKEMON_REVAVROOM_NORMAL")]
    SpawnV0966PokemonRevavroomNormal,
    #[serde(rename = "SPAWN_V0967_POKEMON_CYCLIZAR")]
    SpawnV0967PokemonCyclizar,
    #[serde(rename = "SPAWN_V0967_POKEMON_CYCLIZAR_NORMAL")]
    SpawnV0967PokemonCyclizarNormal,
    #[serde(rename = "SPAWN_V0968_POKEMON_ORTHWORM")]
    SpawnV0968PokemonOrthworm,
    #[serde(rename = "SPAWN_V0968_POKEMON_ORTHWORM_NORMAL")]
    SpawnV0968PokemonOrthwormNormal,
    #[serde(rename = "SPAWN_V0969_POKEMON_GLIMMET")]
    SpawnV0969PokemonGlimmet,
    #[serde(rename = "SPAWN_V0969_POKEMON_GLIMMET_NORMAL")]
    SpawnV0969PokemonGlimmetNormal,
    #[serde(rename = "SPAWN_V0970_POKEMON_GLIMMORA")]
    SpawnV0970PokemonGlimmora,
    #[serde(rename = "SPAWN_V0970_POKEMON_GLIMMORA_NORMAL")]
    SpawnV0970PokemonGlimmoraNormal,
    #[serde(rename = "SPAWN_V0971_POKEMON_GREAVARD")]
    SpawnV0971PokemonGreavard,
    #[serde(rename = "SPAWN_V0971_POKEMON_GREAVARD_NORMAL")]
    SpawnV0971PokemonGreavardNormal,
    #[serde(rename = "SPAWN_V0972_POKEMON_HOUNDSTONE")]
    SpawnV0972PokemonHoundstone,
    #[serde(rename = "SPAWN_V0972_POKEMON_HOUNDSTONE_NORMAL")]
    SpawnV0972PokemonHoundstoneNormal,
    #[serde(rename = "SPAWN_V0973_POKEMON_FLAMIGO")]
    SpawnV0973PokemonFlamigo,
    #[serde(rename = "SPAWN_V0973_POKEMON_FLAMIGO_NORMAL")]
    SpawnV0973PokemonFlamigoNormal,
    #[serde(rename = "SPAWN_V0974_POKEMON_CETODDLE")]
    SpawnV0974PokemonCetoddle,
    #[serde(rename = "SPAWN_V0974_POKEMON_CETODDLE_NORMAL")]
    SpawnV0974PokemonCetoddleNormal,
    #[serde(rename = "SPAWN_V0975_POKEMON_CETITAN")]
    SpawnV0975PokemonCetitan,
    #[serde(rename = "SPAWN_V0975_POKEMON_CETITAN_NORMAL")]
    SpawnV0975PokemonCetitanNormal,
    #[serde(rename = "SPAWN_V0976_POKEMON_VELUZA")]
    SpawnV0976PokemonVeluza,
    #[serde(rename = "SPAWN_V0976_POKEMON_VELUZA_NORMAL")]
    SpawnV0976PokemonVeluzaNormal,
    #[serde(rename = "SPAWN_V0977_POKEMON_DONDOZO")]
    SpawnV0977PokemonDondozo,
    #[serde(rename = "SPAWN_V0977_POKEMON_DONDOZO_NORMAL")]
    SpawnV0977PokemonDondozoNormal,
    #[serde(rename = "SPAWN_V0978_POKEMON_TATSUGIRI")]
    SpawnV0978PokemonTatsugiri,
    #[serde(rename = "SPAWN_V0978_POKEMON_TATSUGIRI_CURLY")]
    SpawnV0978PokemonTatsugiriCurly,
    #[serde(rename = "SPAWN_V0978_POKEMON_TATSUGIRI_DROOPY")]
    SpawnV0978PokemonTatsugiriDroopy,
    #[serde(rename = "SPAWN_V0978_POKEMON_TATSUGIRI_STRETCHY")]
    SpawnV0978PokemonTatsugiriStretchy,
    #[serde(rename = "SPAWN_V0979_POKEMON_ANNIHILAPE")]
    SpawnV0979PokemonAnnihilape,
    #[serde(rename = "SPAWN_V0979_POKEMON_ANNIHILAPE_NORMAL")]
    SpawnV0979PokemonAnnihilapeNormal,
    #[serde(rename = "SPAWN_V0980_POKEMON_CLODSIRE")]
    SpawnV0980PokemonClodsire,
    #[serde(rename = "SPAWN_V0980_POKEMON_CLODSIRE_NORMAL")]
    SpawnV0980PokemonClodsireNormal,
    #[serde(rename = "SPAWN_V0981_POKEMON_FARIGIRAF")]
    SpawnV0981PokemonFarigiraf,
    #[serde(rename = "SPAWN_V0981_POKEMON_FARIGIRAF_NORMAL")]
    SpawnV0981PokemonFarigirafNormal,
    #[serde(rename = "SPAWN_V0982_POKEMON_DUDUNSPARCE")]
    SpawnV0982PokemonDudunsparce,
    #[serde(rename = "SPAWN_V0982_POKEMON_DUDUNSPARCE_THREE")]
    SpawnV0982PokemonDudunsparceThree,
    #[serde(rename = "SPAWN_V0982_POKEMON_DUDUNSPARCE_TWO")]
    SpawnV0982PokemonDudunsparceTwo,
    #[serde(rename = "SPAWN_V0983_POKEMON_KINGAMBIT")]
    SpawnV0983PokemonKingambit,
    #[serde(rename = "SPAWN_V0983_POKEMON_KINGAMBIT_NORMAL")]
    SpawnV0983PokemonKingambitNormal,
    #[serde(rename = "SPAWN_V0984_POKEMON_GREATTUSK")]
    SpawnV0984PokemonGreattusk,
    #[serde(rename = "SPAWN_V0984_POKEMON_GREATTUSK_NORMAL")]
    SpawnV0984PokemonGreattuskNormal,
    #[serde(rename = "SPAWN_V0985_POKEMON_SCREAMTAIL")]
    SpawnV0985PokemonScreamtail,
    #[serde(rename = "SPAWN_V0985_POKEMON_SCREAMTAIL_NORMAL")]
    SpawnV0985PokemonScreamtailNormal,
    #[serde(rename = "SPAWN_V0986_POKEMON_BRUTEBONNET")]
    SpawnV0986PokemonBrutebonnet,
    #[serde(rename = "SPAWN_V0986_POKEMON_BRUTEBONNET_NORMAL")]
    SpawnV0986PokemonBrutebonnetNormal,
    #[serde(rename = "SPAWN_V0987_POKEMON_FLUTTERMANE")]
    SpawnV0987PokemonFluttermane,
    #[serde(rename = "SPAWN_V0987_POKEMON_FLUTTERMANE_NORMAL")]
    SpawnV0987PokemonFluttermaneNormal,
    #[serde(rename = "SPAWN_V0988_POKEMON_SLITHERWING")]
    SpawnV0988PokemonSlitherwing,
    #[serde(rename = "SPAWN_V0988_POKEMON_SLITHERWING_NORMAL")]
    SpawnV0988PokemonSlitherwingNormal,
    #[serde(rename = "SPAWN_V0989_POKEMON_SANDYSHOCKS")]
    SpawnV0989PokemonSandyshocks,
    #[serde(rename = "SPAWN_V0989_POKEMON_SANDYSHOCKS_NORMAL")]
    SpawnV0989PokemonSandyshocksNormal,
    #[serde(rename = "SPAWN_V0990_POKEMON_IRONTREADS")]
    SpawnV0990PokemonIrontreads,
    #[serde(rename = "SPAWN_V0990_POKEMON_IRONTREADS_NORMAL")]
    SpawnV0990PokemonIrontreadsNormal,
    #[serde(rename = "SPAWN_V0991_POKEMON_IRONBUNDLE")]
    SpawnV0991PokemonIronbundle,
    #[serde(rename = "SPAWN_V0991_POKEMON_IRONBUNDLE_NORMAL")]
    SpawnV0991PokemonIronbundleNormal,
    #[serde(rename = "SPAWN_V0992_POKEMON_IRONHANDS")]
    SpawnV0992PokemonIronhands,
    #[serde(rename = "SPAWN_V0992_POKEMON_IRONHANDS_NORMAL")]
    SpawnV0992PokemonIronhandsNormal,
    #[serde(rename = "SPAWN_V0993_POKEMON_IRONJUGULIS")]
    SpawnV0993PokemonIronjugulis,
    #[serde(rename = "SPAWN_V0993_POKEMON_IRONJUGULIS_NORMAL")]
    SpawnV0993PokemonIronjugulisNormal,
    #[serde(rename = "SPAWN_V0994_POKEMON_IRONMOTH")]
    SpawnV0994PokemonIronmoth,
    #[serde(rename = "SPAWN_V0994_POKEMON_IRONMOTH_NORMAL")]
    SpawnV0994PokemonIronmothNormal,
    #[serde(rename = "SPAWN_V0995_POKEMON_IRONTHORNS")]
    SpawnV0995PokemonIronthorns,
    #[serde(rename = "SPAWN_V0995_POKEMON_IRONTHORNS_NORMAL")]
    SpawnV0995PokemonIronthornsNormal,
    #[serde(rename = "SPAWN_V0996_POKEMON_FRIGIBAX")]
    SpawnV0996PokemonFrigibax,
    #[serde(rename = "SPAWN_V0996_POKEMON_FRIGIBAX_NORMAL")]
    SpawnV0996PokemonFrigibaxNormal,
    #[serde(rename = "SPAWN_V0997_POKEMON_ARCTIBAX")]
    SpawnV0997PokemonArctibax,
    #[serde(rename = "SPAWN_V0997_POKEMON_ARCTIBAX_NORMAL")]
    SpawnV0997PokemonArctibaxNormal,
    #[serde(rename = "SPAWN_V0998_POKEMON_BAXCALIBUR")]
    SpawnV0998PokemonBaxcalibur,
    #[serde(rename = "SPAWN_V0998_POKEMON_BAXCALIBUR_NORMAL")]
    SpawnV0998PokemonBaxcaliburNormal,
    #[serde(rename = "SPAWN_V0999_POKEMON_GIMMIGHOUL")]
    SpawnV0999PokemonGimmighoul,
    #[serde(rename = "SPAWN_V0999_POKEMON_GIMMIGHOUL_COIN_A1")]
    SpawnV0999PokemonGimmighoulCoinA1,
    #[serde(rename = "SPAWN_V0999_POKEMON_GIMMIGHOUL_NORMAL")]
    SpawnV0999PokemonGimmighoulNormal,
    #[serde(rename = "SPAWN_V1000_POKEMON_GHOLDENGO")]
    SpawnV1000PokemonGholdengo,
    #[serde(rename = "SPAWN_V1000_POKEMON_GHOLDENGO_NORMAL")]
    SpawnV1000PokemonGholdengoNormal,
    #[serde(rename = "SPAWN_V1001_POKEMON_WOCHIEN")]
    SpawnV1001PokemonWochien,
    #[serde(rename = "SPAWN_V1001_POKEMON_WOCHIEN_NORMAL")]
    SpawnV1001PokemonWochienNormal,
    #[serde(rename = "SPAWN_V1002_POKEMON_CHIENPAO")]
    SpawnV1002PokemonChienpao,
    #[serde(rename = "SPAWN_V1002_POKEMON_CHIENPAO_NORMAL")]
    SpawnV1002PokemonChienpaoNormal,
    #[serde(rename = "SPAWN_V1003_POKEMON_TINGLU")]
    SpawnV1003PokemonTinglu,
    #[serde(rename = "SPAWN_V1003_POKEMON_TINGLU_NORMAL")]
    SpawnV1003PokemonTingluNormal,
    #[serde(rename = "SPAWN_V1004_POKEMON_CHIYU")]
    SpawnV1004PokemonChiyu,
    #[serde(rename = "SPAWN_V1004_POKEMON_CHIYU_NORMAL")]
    SpawnV1004PokemonChiyuNormal,
    #[serde(rename = "SPAWN_V1005_POKEMON_ROARINGMOON")]
    SpawnV1005PokemonRoaringmoon,
    #[serde(rename = "SPAWN_V1005_POKEMON_ROARINGMOON_NORMAL")]
    SpawnV1005PokemonRoaringmoonNormal,
    #[serde(rename = "SPAWN_V1006_POKEMON_IRONVALIANT")]
    SpawnV1006PokemonIronvaliant,
    #[serde(rename = "SPAWN_V1006_POKEMON_IRONVALIANT_NORMAL")]
    SpawnV1006PokemonIronvaliantNormal,
    #[serde(rename = "SPAWN_V1007_POKEMON_KORAIDON")]
    SpawnV1007PokemonKoraidon,
    #[serde(rename = "SPAWN_V1007_POKEMON_KORAIDON_APEX")]
    SpawnV1007PokemonKoraidonApex,
    #[serde(rename = "SPAWN_V1008_POKEMON_MIRAIDON")]
    SpawnV1008PokemonMiraidon,
    #[serde(rename = "SPAWN_V1008_POKEMON_MIRAIDON_ULTIMATE")]
    SpawnV1008PokemonMiraidonUltimate,
    #[serde(rename = "SPAWN_V1009_POKEMON_WALKINGWAKE")]
    SpawnV1009PokemonWalkingwake,
    #[serde(rename = "SPAWN_V1009_POKEMON_WALKINGWAKE_NORMAL")]
    SpawnV1009PokemonWalkingwakeNormal,
    #[serde(rename = "SPAWN_V1010_POKEMON_IRONLEAVES")]
    SpawnV1010PokemonIronleaves,
    #[serde(rename = "SPAWN_V1010_POKEMON_IRONLEAVES_NORMAL")]
    SpawnV1010PokemonIronleavesNormal,
    #[serde(rename = "SPAWN_V1011_POKEMON_DIPPLIN")]
    SpawnV1011PokemonDipplin,
    #[serde(rename = "SPAWN_V1011_POKEMON_DIPPLIN_NORMAL")]
    SpawnV1011PokemonDipplinNormal,
    #[serde(rename = "SPAWN_V1012_POKEMON_POLTCHAGEIST")]
    SpawnV1012PokemonPoltchageist,
    #[serde(rename = "SPAWN_V1012_POKEMON_POLTCHAGEIST_ARTISAN")]
    SpawnV1012PokemonPoltchageistArtisan,
    #[serde(rename = "SPAWN_V1012_POKEMON_POLTCHAGEIST_COUNTERFEIT")]
    SpawnV1012PokemonPoltchageistCounterfeit,
    #[serde(rename = "SPAWN_V1013_POKEMON_SINISTCHA")]
    SpawnV1013PokemonSinistcha,
    #[serde(rename = "SPAWN_V1013_POKEMON_SINISTCHA_MASTERPIECE")]
    SpawnV1013PokemonSinistchaMasterpiece,
    #[serde(rename = "SPAWN_V1013_POKEMON_SINISTCHA_UNREMARKABLE")]
    SpawnV1013PokemonSinistchaUnremarkable,
    #[serde(rename = "SPAWN_V1014_POKEMON_OKIDOGI")]
    SpawnV1014PokemonOkidogi,
    #[serde(rename = "SPAWN_V1014_POKEMON_OKIDOGI_NORMAL")]
    SpawnV1014PokemonOkidogiNormal,
    #[serde(rename = "SPAWN_V1015_POKEMON_MUNKIDORI")]
    SpawnV1015PokemonMunkidori,
    #[serde(rename = "SPAWN_V1015_POKEMON_MUNKIDORI_NORMAL")]
    SpawnV1015PokemonMunkidoriNormal,
    #[serde(rename = "SPAWN_V1016_POKEMON_FEZANDIPITI")]
    SpawnV1016PokemonFezandipiti,
    #[serde(rename = "SPAWN_V1016_POKEMON_FEZANDIPITI_NORMAL")]
    SpawnV1016PokemonFezandipitiNormal,
    #[serde(rename = "SPAWN_V1017_POKEMON_OGERPON")]
    SpawnV1017PokemonOgerpon,
    #[serde(rename = "SPAWN_V1018_POKEMON_ARCHALUDON")]
    SpawnV1018PokemonArchaludon,
    #[serde(rename = "SPAWN_V1018_POKEMON_ARCHALUDON_NORMAL")]
    SpawnV1018PokemonArchaludonNormal,
    #[serde(rename = "SPAWN_V1019_POKEMON_HYDRAPPLE")]
    SpawnV1019PokemonHydrapple,
    #[serde(rename = "SPAWN_V1019_POKEMON_HYDRAPPLE_NORMAL")]
    SpawnV1019PokemonHydrappleNormal,
    #[serde(rename = "SPAWN_V1020_POKEMON_GOUGINGFIRE")]
    SpawnV1020PokemonGougingfire,
    #[serde(rename = "SPAWN_V1020_POKEMON_GOUGINGFIRE_NORMAL")]
    SpawnV1020PokemonGougingfireNormal,
    #[serde(rename = "SPAWN_V1021_POKEMON_RAGINGBOLT")]
    SpawnV1021PokemonRagingbolt,
    #[serde(rename = "SPAWN_V1021_POKEMON_RAGINGBOLT_NORMAL")]
    SpawnV1021PokemonRagingboltNormal,
    #[serde(rename = "SPAWN_V1022_POKEMON_IRONBOULDER")]
    SpawnV1022PokemonIronboulder,
    #[serde(rename = "SPAWN_V1022_POKEMON_IRONBOULDER_NORMAL")]
    SpawnV1022PokemonIronboulderNormal,
    #[serde(rename = "SPAWN_V1023_POKEMON_IRONCROWN")]
    SpawnV1023PokemonIroncrown,
    #[serde(rename = "SPAWN_V1023_POKEMON_IRONCROWN_NORMAL")]
    SpawnV1023PokemonIroncrownNormal,
    #[serde(rename = "SPAWN_V1024_POKEMON_TERAPAGOS")]
    SpawnV1024PokemonTerapagos,
    #[serde(rename = "SPAWN_V1024_POKEMON_TERAPAGOS_NORMAL")]
    SpawnV1024PokemonTerapagosNormal,
    #[serde(rename = "SPAWN_V1025_POKEMON_PECHARUNT")]
    SpawnV1025PokemonPecharunt,
    #[serde(rename = "SPAWN_V1025_POKEMON_PECHARUNT_NORMAL")]
    SpawnV1025PokemonPecharuntNormal,
}

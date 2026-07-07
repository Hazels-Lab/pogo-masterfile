//! Generated from Pokémon GO masterfile — group "pokemonSettings" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum,
)]
pub enum PokemonSettingsTemplateId {
    #[serde(rename = "V0001_POKEMON_BULBASAUR")]
    V0001PokemonBulbasaur,
    #[serde(rename = "V0001_POKEMON_BULBASAUR_FALL_2019")]
    V0001PokemonBulbasaurFall2019,
    #[serde(rename = "V0001_POKEMON_BULBASAUR_NORMAL")]
    V0001PokemonBulbasaurNormal,
    #[serde(rename = "V0002_POKEMON_IVYSAUR")]
    V0002PokemonIvysaur,
    #[serde(rename = "V0002_POKEMON_IVYSAUR_NORMAL")]
    V0002PokemonIvysaurNormal,
    #[serde(rename = "V0003_POKEMON_VENUSAUR")]
    V0003PokemonVenusaur,
    #[serde(rename = "V0003_POKEMON_VENUSAUR_COPY_2019")]
    V0003PokemonVenusaurCopy2019,
    #[serde(rename = "V0003_POKEMON_VENUSAUR_NORMAL")]
    V0003PokemonVenusaurNormal,
    #[serde(rename = "V0004_POKEMON_CHARMANDER")]
    V0004PokemonCharmander,
    #[serde(rename = "V0004_POKEMON_CHARMANDER_FALL_2019")]
    V0004PokemonCharmanderFall2019,
    #[serde(rename = "V0004_POKEMON_CHARMANDER_NORMAL")]
    V0004PokemonCharmanderNormal,
    #[serde(rename = "V0005_POKEMON_CHARMELEON")]
    V0005PokemonCharmeleon,
    #[serde(rename = "V0005_POKEMON_CHARMELEON_NORMAL")]
    V0005PokemonCharmeleonNormal,
    #[serde(rename = "V0006_POKEMON_CHARIZARD")]
    V0006PokemonCharizard,
    #[serde(rename = "V0006_POKEMON_CHARIZARD_COPY_2019")]
    V0006PokemonCharizardCopy2019,
    #[serde(rename = "V0006_POKEMON_CHARIZARD_NORMAL")]
    V0006PokemonCharizardNormal,
    #[serde(rename = "V0007_POKEMON_SQUIRTLE")]
    V0007PokemonSquirtle,
    #[serde(rename = "V0007_POKEMON_SQUIRTLE_FALL_2019")]
    V0007PokemonSquirtleFall2019,
    #[serde(rename = "V0007_POKEMON_SQUIRTLE_NORMAL")]
    V0007PokemonSquirtleNormal,
    #[serde(rename = "V0008_POKEMON_WARTORTLE")]
    V0008PokemonWartortle,
    #[serde(rename = "V0008_POKEMON_WARTORTLE_NORMAL")]
    V0008PokemonWartortleNormal,
    #[serde(rename = "V0009_POKEMON_BLASTOISE")]
    V0009PokemonBlastoise,
    #[serde(rename = "V0009_POKEMON_BLASTOISE_COPY_2019")]
    V0009PokemonBlastoiseCopy2019,
    #[serde(rename = "V0009_POKEMON_BLASTOISE_NORMAL")]
    V0009PokemonBlastoiseNormal,
    #[serde(rename = "V0010_POKEMON_CATERPIE")]
    V0010PokemonCaterpie,
    #[serde(rename = "V0010_POKEMON_CATERPIE_GOFEST_2026")]
    V0010PokemonCaterpieGofest2026,
    #[serde(rename = "V0010_POKEMON_CATERPIE_NORMAL")]
    V0010PokemonCaterpieNormal,
    #[serde(rename = "V0011_POKEMON_METAPOD")]
    V0011PokemonMetapod,
    #[serde(rename = "V0011_POKEMON_METAPOD_NORMAL")]
    V0011PokemonMetapodNormal,
    #[serde(rename = "V0012_POKEMON_BUTTERFREE")]
    V0012PokemonButterfree,
    #[serde(rename = "V0012_POKEMON_BUTTERFREE_NORMAL")]
    V0012PokemonButterfreeNormal,
    #[serde(rename = "V0013_POKEMON_WEEDLE")]
    V0013PokemonWeedle,
    #[serde(rename = "V0013_POKEMON_WEEDLE_NORMAL")]
    V0013PokemonWeedleNormal,
    #[serde(rename = "V0014_POKEMON_KAKUNA")]
    V0014PokemonKakuna,
    #[serde(rename = "V0014_POKEMON_KAKUNA_NORMAL")]
    V0014PokemonKakunaNormal,
    #[serde(rename = "V0015_POKEMON_BEEDRILL")]
    V0015PokemonBeedrill,
    #[serde(rename = "V0015_POKEMON_BEEDRILL_NORMAL")]
    V0015PokemonBeedrillNormal,
    #[serde(rename = "V0016_POKEMON_PIDGEY")]
    V0016PokemonPidgey,
    #[serde(rename = "V0016_POKEMON_PIDGEY_NORMAL")]
    V0016PokemonPidgeyNormal,
    #[serde(rename = "V0017_POKEMON_PIDGEOTTO")]
    V0017PokemonPidgeotto,
    #[serde(rename = "V0017_POKEMON_PIDGEOTTO_NORMAL")]
    V0017PokemonPidgeottoNormal,
    #[serde(rename = "V0018_POKEMON_PIDGEOT")]
    V0018PokemonPidgeot,
    #[serde(rename = "V0018_POKEMON_PIDGEOT_NORMAL")]
    V0018PokemonPidgeotNormal,
    #[serde(rename = "V0019_POKEMON_RATTATA")]
    V0019PokemonRattata,
    #[serde(rename = "V0019_POKEMON_RATTATA_ALOLA")]
    V0019PokemonRattataAlola,
    #[serde(rename = "V0019_POKEMON_RATTATA_NORMAL")]
    V0019PokemonRattataNormal,
    #[serde(rename = "V0020_POKEMON_RATICATE")]
    V0020PokemonRaticate,
    #[serde(rename = "V0020_POKEMON_RATICATE_ALOLA")]
    V0020PokemonRaticateAlola,
    #[serde(rename = "V0020_POKEMON_RATICATE_NORMAL")]
    V0020PokemonRaticateNormal,
    #[serde(rename = "V0021_POKEMON_SPEAROW")]
    V0021PokemonSpearow,
    #[serde(rename = "V0021_POKEMON_SPEAROW_NORMAL")]
    V0021PokemonSpearowNormal,
    #[serde(rename = "V0022_POKEMON_FEAROW")]
    V0022PokemonFearow,
    #[serde(rename = "V0022_POKEMON_FEAROW_NORMAL")]
    V0022PokemonFearowNormal,
    #[serde(rename = "V0023_POKEMON_EKANS")]
    V0023PokemonEkans,
    #[serde(rename = "V0023_POKEMON_EKANS_NORMAL")]
    V0023PokemonEkansNormal,
    #[serde(rename = "V0024_POKEMON_ARBOK")]
    V0024PokemonArbok,
    #[serde(rename = "V0024_POKEMON_ARBOK_NORMAL")]
    V0024PokemonArbokNormal,
    #[serde(rename = "V0025_POKEMON_PIKACHU")]
    V0025PokemonPikachu,
    #[serde(rename = "V0025_POKEMON_PIKACHU_ADVENTURE_HAT_2020")]
    V0025PokemonPikachuAdventureHat2020,
    #[serde(rename = "V0025_POKEMON_PIKACHU_BB_2026")]
    V0025PokemonPikachuBb2026,
    #[serde(rename = "V0025_POKEMON_PIKACHU_COPY_2019")]
    V0025PokemonPikachuCopy2019,
    #[serde(rename = "V0025_POKEMON_PIKACHU_COSTUME_2020")]
    V0025PokemonPikachuCostume2020,
    #[serde(rename = "V0025_POKEMON_PIKACHU_DIWALI_2024")]
    V0025PokemonPikachuDiwali2024,
    #[serde(rename = "V0025_POKEMON_PIKACHU_DOCTOR")]
    V0025PokemonPikachuDoctor,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FALL_2019")]
    V0025PokemonPikachuFall2019,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_01")]
    V0025PokemonPikachuFlying01,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_02")]
    V0025PokemonPikachuFlying02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_03")]
    V0025PokemonPikachuFlying03,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_04")]
    V0025PokemonPikachuFlying04,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_5TH_ANNIV")]
    V0025PokemonPikachuFlying5thAnniv,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FLYING_OKINAWA")]
    V0025PokemonPikachuFlyingOkinawa,
    #[serde(rename = "V0025_POKEMON_PIKACHU_FOSSIL_2026")]
    V0025PokemonPikachuFossil2026,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2022")]
    V0025PokemonPikachuGofest2022,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2024_MTIARA")]
    V0025PokemonPikachuGofest2024Mtiara,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2024_STIARA")]
    V0025PokemonPikachuGofest2024Stiara,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_BLUE")]
    V0025PokemonPikachuGofest2025GogglesBlue,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_RED")]
    V0025PokemonPikachuGofest2025GogglesRed,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_YELLOW")]
    V0025PokemonPikachuGofest2025GogglesYellow,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_BLUE")]
    V0025PokemonPikachuGofest2025MonocleBlue,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_RED")]
    V0025PokemonPikachuGofest2025MonocleRed,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_YELLOW")]
    V0025PokemonPikachuGofest2025MonocleYellow,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_BLUE")]
    V0025PokemonPikachuGofest2026CapBlue,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_RED")]
    V0025PokemonPikachuGofest2026CapRed,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_YELLOW")]
    V0025PokemonPikachuGofest2026CapYellow,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2024_A")]
    V0025PokemonPikachuGotour2024A,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2024_A_02")]
    V0025PokemonPikachuGotour2024A02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2024_B")]
    V0025PokemonPikachuGotour2024B,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2024_B_02")]
    V0025PokemonPikachuGotour2024B02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2025_A")]
    V0025PokemonPikachuGotour2025A,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2025_A_02")]
    V0025PokemonPikachuGotour2025A02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2025_B")]
    V0025PokemonPikachuGotour2025B,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2025_B_02")]
    V0025PokemonPikachuGotour2025B02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_A")]
    V0025PokemonPikachuGotour2026A,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_A_02")]
    V0025PokemonPikachuGotour2026A02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_B")]
    V0025PokemonPikachuGotour2026B,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_B_02")]
    V0025PokemonPikachuGotour2026B02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_C")]
    V0025PokemonPikachuGotour2026C,
    #[serde(rename = "V0025_POKEMON_PIKACHU_GOTOUR_2026_C_02")]
    V0025PokemonPikachuGotour2026C02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_HORIZONS")]
    V0025PokemonPikachuHorizons,
    #[serde(rename = "V0025_POKEMON_PIKACHU_JEJU")]
    V0025PokemonPikachuJeju,
    #[serde(rename = "V0025_POKEMON_PIKACHU_KARIYUSHI")]
    V0025PokemonPikachuKariyushi,
    #[serde(rename = "V0025_POKEMON_PIKACHU_KURTA")]
    V0025PokemonPikachuKurta,
    #[serde(rename = "V0025_POKEMON_PIKACHU_NORMAL")]
    V0025PokemonPikachuNormal,
    #[serde(rename = "V0025_POKEMON_PIKACHU_POP_STAR")]
    V0025PokemonPikachuPopStar,
    #[serde(rename = "V0025_POKEMON_PIKACHU_ROCK_STAR")]
    V0025PokemonPikachuRockStar,
    #[serde(rename = "V0025_POKEMON_PIKACHU_SUMMER_2023_A")]
    V0025PokemonPikachuSummer2023A,
    #[serde(rename = "V0025_POKEMON_PIKACHU_SUMMER_2023_B")]
    V0025PokemonPikachuSummer2023B,
    #[serde(rename = "V0025_POKEMON_PIKACHU_SUMMER_2023_C")]
    V0025PokemonPikachuSummer2023C,
    #[serde(rename = "V0025_POKEMON_PIKACHU_SUMMER_2023_D")]
    V0025PokemonPikachuSummer2023D,
    #[serde(rename = "V0025_POKEMON_PIKACHU_SUMMER_2023_E")]
    V0025PokemonPikachuSummer2023E,
    #[serde(rename = "V0025_POKEMON_PIKACHU_TSHIRT_01")]
    V0025PokemonPikachuTshirt01,
    #[serde(rename = "V0025_POKEMON_PIKACHU_TSHIRT_02")]
    V0025PokemonPikachuTshirt02,
    #[serde(rename = "V0025_POKEMON_PIKACHU_TSHIRT_03")]
    V0025PokemonPikachuTshirt03,
    #[serde(rename = "V0025_POKEMON_PIKACHU_VISOR_2026")]
    V0025PokemonPikachuVisor2026,
    #[serde(rename = "V0025_POKEMON_PIKACHU_VS_2019")]
    V0025PokemonPikachuVs2019,
    #[serde(rename = "V0025_POKEMON_PIKACHU_WCS_2022")]
    V0025PokemonPikachuWcs2022,
    #[serde(rename = "V0025_POKEMON_PIKACHU_WCS_2023")]
    V0025PokemonPikachuWcs2023,
    #[serde(rename = "V0025_POKEMON_PIKACHU_WCS_2024")]
    V0025PokemonPikachuWcs2024,
    #[serde(rename = "V0025_POKEMON_PIKACHU_WCS_2025")]
    V0025PokemonPikachuWcs2025,
    #[serde(rename = "V0025_POKEMON_PIKACHU_WINTER_2020")]
    V0025PokemonPikachuWinter2020,
    #[serde(rename = "V0026_POKEMON_RAICHU")]
    V0026PokemonRaichu,
    #[serde(rename = "V0026_POKEMON_RAICHU_ALOLA")]
    V0026PokemonRaichuAlola,
    #[serde(rename = "V0026_POKEMON_RAICHU_NORMAL")]
    V0026PokemonRaichuNormal,
    #[serde(rename = "V0027_POKEMON_SANDSHREW")]
    V0027PokemonSandshrew,
    #[serde(rename = "V0027_POKEMON_SANDSHREW_ALOLA")]
    V0027PokemonSandshrewAlola,
    #[serde(rename = "V0027_POKEMON_SANDSHREW_NORMAL")]
    V0027PokemonSandshrewNormal,
    #[serde(rename = "V0028_POKEMON_SANDSLASH")]
    V0028PokemonSandslash,
    #[serde(rename = "V0028_POKEMON_SANDSLASH_ALOLA")]
    V0028PokemonSandslashAlola,
    #[serde(rename = "V0028_POKEMON_SANDSLASH_NORMAL")]
    V0028PokemonSandslashNormal,
    #[serde(rename = "V0029_POKEMON_NIDORAN")]
    V0029PokemonNidoran,
    #[serde(rename = "V0029_POKEMON_NIDORAN_NORMAL")]
    V0029PokemonNidoranNormal,
    #[serde(rename = "V0030_POKEMON_NIDORINA")]
    V0030PokemonNidorina,
    #[serde(rename = "V0030_POKEMON_NIDORINA_NORMAL")]
    V0030PokemonNidorinaNormal,
    #[serde(rename = "V0031_POKEMON_NIDOQUEEN")]
    V0031PokemonNidoqueen,
    #[serde(rename = "V0031_POKEMON_NIDOQUEEN_NORMAL")]
    V0031PokemonNidoqueenNormal,
    #[serde(rename = "V0032_POKEMON_NIDORAN")]
    V0032PokemonNidoran,
    #[serde(rename = "V0032_POKEMON_NIDORAN_NORMAL")]
    V0032PokemonNidoranNormal,
    #[serde(rename = "V0033_POKEMON_NIDORINO")]
    V0033PokemonNidorino,
    #[serde(rename = "V0033_POKEMON_NIDORINO_NORMAL")]
    V0033PokemonNidorinoNormal,
    #[serde(rename = "V0034_POKEMON_NIDOKING")]
    V0034PokemonNidoking,
    #[serde(rename = "V0034_POKEMON_NIDOKING_NORMAL")]
    V0034PokemonNidokingNormal,
    #[serde(rename = "V0035_POKEMON_CLEFAIRY")]
    V0035PokemonClefairy,
    #[serde(rename = "V0035_POKEMON_CLEFAIRY_NORMAL")]
    V0035PokemonClefairyNormal,
    #[serde(rename = "V0036_POKEMON_CLEFABLE")]
    V0036PokemonClefable,
    #[serde(rename = "V0036_POKEMON_CLEFABLE_NORMAL")]
    V0036PokemonClefableNormal,
    #[serde(rename = "V0037_POKEMON_VULPIX")]
    V0037PokemonVulpix,
    #[serde(rename = "V0037_POKEMON_VULPIX_ALOLA")]
    V0037PokemonVulpixAlola,
    #[serde(rename = "V0037_POKEMON_VULPIX_NORMAL")]
    V0037PokemonVulpixNormal,
    #[serde(rename = "V0038_POKEMON_NINETALES")]
    V0038PokemonNinetales,
    #[serde(rename = "V0038_POKEMON_NINETALES_ALOLA")]
    V0038PokemonNinetalesAlola,
    #[serde(rename = "V0038_POKEMON_NINETALES_NORMAL")]
    V0038PokemonNinetalesNormal,
    #[serde(rename = "V0039_POKEMON_JIGGLYPUFF")]
    V0039PokemonJigglypuff,
    #[serde(rename = "V0039_POKEMON_JIGGLYPUFF_NORMAL")]
    V0039PokemonJigglypuffNormal,
    #[serde(rename = "V0040_POKEMON_WIGGLYTUFF")]
    V0040PokemonWigglytuff,
    #[serde(rename = "V0040_POKEMON_WIGGLYTUFF_NORMAL")]
    V0040PokemonWigglytuffNormal,
    #[serde(rename = "V0041_POKEMON_ZUBAT")]
    V0041PokemonZubat,
    #[serde(rename = "V0041_POKEMON_ZUBAT_NORMAL")]
    V0041PokemonZubatNormal,
    #[serde(rename = "V0042_POKEMON_GOLBAT")]
    V0042PokemonGolbat,
    #[serde(rename = "V0042_POKEMON_GOLBAT_NORMAL")]
    V0042PokemonGolbatNormal,
    #[serde(rename = "V0043_POKEMON_ODDISH")]
    V0043PokemonOddish,
    #[serde(rename = "V0043_POKEMON_ODDISH_NORMAL")]
    V0043PokemonOddishNormal,
    #[serde(rename = "V0044_POKEMON_GLOOM")]
    V0044PokemonGloom,
    #[serde(rename = "V0044_POKEMON_GLOOM_NORMAL")]
    V0044PokemonGloomNormal,
    #[serde(rename = "V0045_POKEMON_VILEPLUME")]
    V0045PokemonVileplume,
    #[serde(rename = "V0045_POKEMON_VILEPLUME_NORMAL")]
    V0045PokemonVileplumeNormal,
    #[serde(rename = "V0046_POKEMON_PARAS")]
    V0046PokemonParas,
    #[serde(rename = "V0046_POKEMON_PARAS_NORMAL")]
    V0046PokemonParasNormal,
    #[serde(rename = "V0047_POKEMON_PARASECT")]
    V0047PokemonParasect,
    #[serde(rename = "V0047_POKEMON_PARASECT_NORMAL")]
    V0047PokemonParasectNormal,
    #[serde(rename = "V0048_POKEMON_VENONAT")]
    V0048PokemonVenonat,
    #[serde(rename = "V0048_POKEMON_VENONAT_NORMAL")]
    V0048PokemonVenonatNormal,
    #[serde(rename = "V0049_POKEMON_VENOMOTH")]
    V0049PokemonVenomoth,
    #[serde(rename = "V0049_POKEMON_VENOMOTH_NORMAL")]
    V0049PokemonVenomothNormal,
    #[serde(rename = "V0050_POKEMON_DIGLETT")]
    V0050PokemonDiglett,
    #[serde(rename = "V0050_POKEMON_DIGLETT_ALOLA")]
    V0050PokemonDiglettAlola,
    #[serde(rename = "V0050_POKEMON_DIGLETT_NORMAL")]
    V0050PokemonDiglettNormal,
    #[serde(rename = "V0051_POKEMON_DUGTRIO")]
    V0051PokemonDugtrio,
    #[serde(rename = "V0051_POKEMON_DUGTRIO_ALOLA")]
    V0051PokemonDugtrioAlola,
    #[serde(rename = "V0051_POKEMON_DUGTRIO_NORMAL")]
    V0051PokemonDugtrioNormal,
    #[serde(rename = "V0052_POKEMON_MEOWTH")]
    V0052PokemonMeowth,
    #[serde(rename = "V0052_POKEMON_MEOWTH_ALOLA")]
    V0052PokemonMeowthAlola,
    #[serde(rename = "V0052_POKEMON_MEOWTH_GALARIAN")]
    V0052PokemonMeowthGalarian,
    #[serde(rename = "V0052_POKEMON_MEOWTH_NORMAL")]
    V0052PokemonMeowthNormal,
    #[serde(rename = "V0053_POKEMON_PERSIAN")]
    V0053PokemonPersian,
    #[serde(rename = "V0053_POKEMON_PERSIAN_ALOLA")]
    V0053PokemonPersianAlola,
    #[serde(rename = "V0053_POKEMON_PERSIAN_NORMAL")]
    V0053PokemonPersianNormal,
    #[serde(rename = "V0054_POKEMON_PSYDUCK")]
    V0054PokemonPsyduck,
    #[serde(rename = "V0054_POKEMON_PSYDUCK_NORMAL")]
    V0054PokemonPsyduckNormal,
    #[serde(rename = "V0054_POKEMON_PSYDUCK_SWIM_2025")]
    V0054PokemonPsyduckSwim2025,
    #[serde(rename = "V0055_POKEMON_GOLDUCK")]
    V0055PokemonGolduck,
    #[serde(rename = "V0055_POKEMON_GOLDUCK_NORMAL")]
    V0055PokemonGolduckNormal,
    #[serde(rename = "V0056_POKEMON_MANKEY")]
    V0056PokemonMankey,
    #[serde(rename = "V0056_POKEMON_MANKEY_NORMAL")]
    V0056PokemonMankeyNormal,
    #[serde(rename = "V0057_POKEMON_PRIMEAPE")]
    V0057PokemonPrimeape,
    #[serde(rename = "V0057_POKEMON_PRIMEAPE_NORMAL")]
    V0057PokemonPrimeapeNormal,
    #[serde(rename = "V0058_POKEMON_GROWLITHE")]
    V0058PokemonGrowlithe,
    #[serde(rename = "V0058_POKEMON_GROWLITHE_HISUIAN")]
    V0058PokemonGrowlitheHisuian,
    #[serde(rename = "V0058_POKEMON_GROWLITHE_NORMAL")]
    V0058PokemonGrowlitheNormal,
    #[serde(rename = "V0059_POKEMON_ARCANINE")]
    V0059PokemonArcanine,
    #[serde(rename = "V0059_POKEMON_ARCANINE_HISUIAN")]
    V0059PokemonArcanineHisuian,
    #[serde(rename = "V0059_POKEMON_ARCANINE_NORMAL")]
    V0059PokemonArcanineNormal,
    #[serde(rename = "V0060_POKEMON_POLIWAG")]
    V0060PokemonPoliwag,
    #[serde(rename = "V0060_POKEMON_POLIWAG_NORMAL")]
    V0060PokemonPoliwagNormal,
    #[serde(rename = "V0061_POKEMON_POLIWHIRL")]
    V0061PokemonPoliwhirl,
    #[serde(rename = "V0061_POKEMON_POLIWHIRL_NORMAL")]
    V0061PokemonPoliwhirlNormal,
    #[serde(rename = "V0062_POKEMON_POLIWRATH")]
    V0062PokemonPoliwrath,
    #[serde(rename = "V0062_POKEMON_POLIWRATH_NORMAL")]
    V0062PokemonPoliwrathNormal,
    #[serde(rename = "V0063_POKEMON_ABRA")]
    V0063PokemonAbra,
    #[serde(rename = "V0063_POKEMON_ABRA_NORMAL")]
    V0063PokemonAbraNormal,
    #[serde(rename = "V0064_POKEMON_KADABRA")]
    V0064PokemonKadabra,
    #[serde(rename = "V0064_POKEMON_KADABRA_NORMAL")]
    V0064PokemonKadabraNormal,
    #[serde(rename = "V0065_POKEMON_ALAKAZAM")]
    V0065PokemonAlakazam,
    #[serde(rename = "V0065_POKEMON_ALAKAZAM_NORMAL")]
    V0065PokemonAlakazamNormal,
    #[serde(rename = "V0066_POKEMON_MACHOP")]
    V0066PokemonMachop,
    #[serde(rename = "V0066_POKEMON_MACHOP_NORMAL")]
    V0066PokemonMachopNormal,
    #[serde(rename = "V0067_POKEMON_MACHOKE")]
    V0067PokemonMachoke,
    #[serde(rename = "V0067_POKEMON_MACHOKE_NORMAL")]
    V0067PokemonMachokeNormal,
    #[serde(rename = "V0068_POKEMON_MACHAMP")]
    V0068PokemonMachamp,
    #[serde(rename = "V0068_POKEMON_MACHAMP_NORMAL")]
    V0068PokemonMachampNormal,
    #[serde(rename = "V0069_POKEMON_BELLSPROUT")]
    V0069PokemonBellsprout,
    #[serde(rename = "V0069_POKEMON_BELLSPROUT_NORMAL")]
    V0069PokemonBellsproutNormal,
    #[serde(rename = "V0070_POKEMON_WEEPINBELL")]
    V0070PokemonWeepinbell,
    #[serde(rename = "V0070_POKEMON_WEEPINBELL_NORMAL")]
    V0070PokemonWeepinbellNormal,
    #[serde(rename = "V0071_POKEMON_VICTREEBEL")]
    V0071PokemonVictreebel,
    #[serde(rename = "V0071_POKEMON_VICTREEBEL_NORMAL")]
    V0071PokemonVictreebelNormal,
    #[serde(rename = "V0072_POKEMON_TENTACOOL")]
    V0072PokemonTentacool,
    #[serde(rename = "V0072_POKEMON_TENTACOOL_NORMAL")]
    V0072PokemonTentacoolNormal,
    #[serde(rename = "V0073_POKEMON_TENTACRUEL")]
    V0073PokemonTentacruel,
    #[serde(rename = "V0073_POKEMON_TENTACRUEL_NORMAL")]
    V0073PokemonTentacruelNormal,
    #[serde(rename = "V0074_POKEMON_GEODUDE")]
    V0074PokemonGeodude,
    #[serde(rename = "V0074_POKEMON_GEODUDE_ALOLA")]
    V0074PokemonGeodudeAlola,
    #[serde(rename = "V0074_POKEMON_GEODUDE_NORMAL")]
    V0074PokemonGeodudeNormal,
    #[serde(rename = "V0075_POKEMON_GRAVELER")]
    V0075PokemonGraveler,
    #[serde(rename = "V0075_POKEMON_GRAVELER_ALOLA")]
    V0075PokemonGravelerAlola,
    #[serde(rename = "V0075_POKEMON_GRAVELER_NORMAL")]
    V0075PokemonGravelerNormal,
    #[serde(rename = "V0076_POKEMON_GOLEM")]
    V0076PokemonGolem,
    #[serde(rename = "V0076_POKEMON_GOLEM_ALOLA")]
    V0076PokemonGolemAlola,
    #[serde(rename = "V0076_POKEMON_GOLEM_NORMAL")]
    V0076PokemonGolemNormal,
    #[serde(rename = "V0077_POKEMON_PONYTA")]
    V0077PokemonPonyta,
    #[serde(rename = "V0077_POKEMON_PONYTA_GALARIAN")]
    V0077PokemonPonytaGalarian,
    #[serde(rename = "V0077_POKEMON_PONYTA_NORMAL")]
    V0077PokemonPonytaNormal,
    #[serde(rename = "V0078_POKEMON_RAPIDASH")]
    V0078PokemonRapidash,
    #[serde(rename = "V0078_POKEMON_RAPIDASH_GALARIAN")]
    V0078PokemonRapidashGalarian,
    #[serde(rename = "V0078_POKEMON_RAPIDASH_NORMAL")]
    V0078PokemonRapidashNormal,
    #[serde(rename = "V0079_POKEMON_SLOWPOKE")]
    V0079PokemonSlowpoke,
    #[serde(rename = "V0079_POKEMON_SLOWPOKE_2020")]
    V0079PokemonSlowpoke2020,
    #[serde(rename = "V0079_POKEMON_SLOWPOKE_GALARIAN")]
    V0079PokemonSlowpokeGalarian,
    #[serde(rename = "V0079_POKEMON_SLOWPOKE_NORMAL")]
    V0079PokemonSlowpokeNormal,
    #[serde(rename = "V0080_POKEMON_SLOWBRO")]
    V0080PokemonSlowbro,
    #[serde(rename = "V0080_POKEMON_SLOWBRO_2021")]
    V0080PokemonSlowbro2021,
    #[serde(rename = "V0080_POKEMON_SLOWBRO_GALARIAN")]
    V0080PokemonSlowbroGalarian,
    #[serde(rename = "V0080_POKEMON_SLOWBRO_NORMAL")]
    V0080PokemonSlowbroNormal,
    #[serde(rename = "V0081_POKEMON_MAGNEMITE")]
    V0081PokemonMagnemite,
    #[serde(rename = "V0081_POKEMON_MAGNEMITE_NORMAL")]
    V0081PokemonMagnemiteNormal,
    #[serde(rename = "V0082_POKEMON_MAGNETON")]
    V0082PokemonMagneton,
    #[serde(rename = "V0082_POKEMON_MAGNETON_NORMAL")]
    V0082PokemonMagnetonNormal,
    #[serde(rename = "V0083_POKEMON_FARFETCHD")]
    V0083PokemonFarfetchd,
    #[serde(rename = "V0083_POKEMON_FARFETCHD_GALARIAN")]
    V0083PokemonFarfetchdGalarian,
    #[serde(rename = "V0083_POKEMON_FARFETCHD_NORMAL")]
    V0083PokemonFarfetchdNormal,
    #[serde(rename = "V0084_POKEMON_DODUO")]
    V0084PokemonDoduo,
    #[serde(rename = "V0084_POKEMON_DODUO_NORMAL")]
    V0084PokemonDoduoNormal,
    #[serde(rename = "V0085_POKEMON_DODRIO")]
    V0085PokemonDodrio,
    #[serde(rename = "V0085_POKEMON_DODRIO_NORMAL")]
    V0085PokemonDodrioNormal,
    #[serde(rename = "V0086_POKEMON_SEEL")]
    V0086PokemonSeel,
    #[serde(rename = "V0086_POKEMON_SEEL_NORMAL")]
    V0086PokemonSeelNormal,
    #[serde(rename = "V0087_POKEMON_DEWGONG")]
    V0087PokemonDewgong,
    #[serde(rename = "V0087_POKEMON_DEWGONG_NORMAL")]
    V0087PokemonDewgongNormal,
    #[serde(rename = "V0088_POKEMON_GRIMER")]
    V0088PokemonGrimer,
    #[serde(rename = "V0088_POKEMON_GRIMER_ALOLA")]
    V0088PokemonGrimerAlola,
    #[serde(rename = "V0088_POKEMON_GRIMER_NORMAL")]
    V0088PokemonGrimerNormal,
    #[serde(rename = "V0089_POKEMON_MUK")]
    V0089PokemonMuk,
    #[serde(rename = "V0089_POKEMON_MUK_ALOLA")]
    V0089PokemonMukAlola,
    #[serde(rename = "V0089_POKEMON_MUK_NORMAL")]
    V0089PokemonMukNormal,
    #[serde(rename = "V0090_POKEMON_SHELLDER")]
    V0090PokemonShellder,
    #[serde(rename = "V0090_POKEMON_SHELLDER_NORMAL")]
    V0090PokemonShellderNormal,
    #[serde(rename = "V0091_POKEMON_CLOYSTER")]
    V0091PokemonCloyster,
    #[serde(rename = "V0091_POKEMON_CLOYSTER_NORMAL")]
    V0091PokemonCloysterNormal,
    #[serde(rename = "V0092_POKEMON_GASTLY")]
    V0092PokemonGastly,
    #[serde(rename = "V0092_POKEMON_GASTLY_NORMAL")]
    V0092PokemonGastlyNormal,
    #[serde(rename = "V0093_POKEMON_HAUNTER")]
    V0093PokemonHaunter,
    #[serde(rename = "V0093_POKEMON_HAUNTER_NORMAL")]
    V0093PokemonHaunterNormal,
    #[serde(rename = "V0094_POKEMON_GENGAR")]
    V0094PokemonGengar,
    #[serde(rename = "V0094_POKEMON_GENGAR_COSTUME_2020")]
    V0094PokemonGengarCostume2020,
    #[serde(rename = "V0094_POKEMON_GENGAR_NORMAL")]
    V0094PokemonGengarNormal,
    #[serde(rename = "V0095_POKEMON_ONIX")]
    V0095PokemonOnix,
    #[serde(rename = "V0095_POKEMON_ONIX_NORMAL")]
    V0095PokemonOnixNormal,
    #[serde(rename = "V0096_POKEMON_DROWZEE")]
    V0096PokemonDrowzee,
    #[serde(rename = "V0096_POKEMON_DROWZEE_NORMAL")]
    V0096PokemonDrowzeeNormal,
    #[serde(rename = "V0097_POKEMON_HYPNO")]
    V0097PokemonHypno,
    #[serde(rename = "V0097_POKEMON_HYPNO_NORMAL")]
    V0097PokemonHypnoNormal,
    #[serde(rename = "V0098_POKEMON_KRABBY")]
    V0098PokemonKrabby,
    #[serde(rename = "V0098_POKEMON_KRABBY_NORMAL")]
    V0098PokemonKrabbyNormal,
    #[serde(rename = "V0099_POKEMON_KINGLER")]
    V0099PokemonKingler,
    #[serde(rename = "V0099_POKEMON_KINGLER_NORMAL")]
    V0099PokemonKinglerNormal,
    #[serde(rename = "V0100_POKEMON_VOLTORB")]
    V0100PokemonVoltorb,
    #[serde(rename = "V0100_POKEMON_VOLTORB_HISUIAN")]
    V0100PokemonVoltorbHisuian,
    #[serde(rename = "V0100_POKEMON_VOLTORB_NORMAL")]
    V0100PokemonVoltorbNormal,
    #[serde(rename = "V0101_POKEMON_ELECTRODE")]
    V0101PokemonElectrode,
    #[serde(rename = "V0101_POKEMON_ELECTRODE_HISUIAN")]
    V0101PokemonElectrodeHisuian,
    #[serde(rename = "V0101_POKEMON_ELECTRODE_NORMAL")]
    V0101PokemonElectrodeNormal,
    #[serde(rename = "V0102_POKEMON_EXEGGCUTE")]
    V0102PokemonExeggcute,
    #[serde(rename = "V0102_POKEMON_EXEGGCUTE_NORMAL")]
    V0102PokemonExeggcuteNormal,
    #[serde(rename = "V0103_POKEMON_EXEGGUTOR")]
    V0103PokemonExeggutor,
    #[serde(rename = "V0103_POKEMON_EXEGGUTOR_ALOLA")]
    V0103PokemonExeggutorAlola,
    #[serde(rename = "V0103_POKEMON_EXEGGUTOR_NORMAL")]
    V0103PokemonExeggutorNormal,
    #[serde(rename = "V0104_POKEMON_CUBONE")]
    V0104PokemonCubone,
    #[serde(rename = "V0104_POKEMON_CUBONE_NORMAL")]
    V0104PokemonCuboneNormal,
    #[serde(rename = "V0105_POKEMON_MAROWAK")]
    V0105PokemonMarowak,
    #[serde(rename = "V0105_POKEMON_MAROWAK_ALOLA")]
    V0105PokemonMarowakAlola,
    #[serde(rename = "V0105_POKEMON_MAROWAK_NORMAL")]
    V0105PokemonMarowakNormal,
    #[serde(rename = "V0106_POKEMON_HITMONLEE")]
    V0106PokemonHitmonlee,
    #[serde(rename = "V0106_POKEMON_HITMONLEE_NORMAL")]
    V0106PokemonHitmonleeNormal,
    #[serde(rename = "V0107_POKEMON_HITMONCHAN")]
    V0107PokemonHitmonchan,
    #[serde(rename = "V0107_POKEMON_HITMONCHAN_NORMAL")]
    V0107PokemonHitmonchanNormal,
    #[serde(rename = "V0108_POKEMON_LICKITUNG")]
    V0108PokemonLickitung,
    #[serde(rename = "V0108_POKEMON_LICKITUNG_NORMAL")]
    V0108PokemonLickitungNormal,
    #[serde(rename = "V0109_POKEMON_KOFFING")]
    V0109PokemonKoffing,
    #[serde(rename = "V0109_POKEMON_KOFFING_NORMAL")]
    V0109PokemonKoffingNormal,
    #[serde(rename = "V0110_POKEMON_WEEZING")]
    V0110PokemonWeezing,
    #[serde(rename = "V0110_POKEMON_WEEZING_GALARIAN")]
    V0110PokemonWeezingGalarian,
    #[serde(rename = "V0110_POKEMON_WEEZING_NORMAL")]
    V0110PokemonWeezingNormal,
    #[serde(rename = "V0111_POKEMON_RHYHORN")]
    V0111PokemonRhyhorn,
    #[serde(rename = "V0111_POKEMON_RHYHORN_NORMAL")]
    V0111PokemonRhyhornNormal,
    #[serde(rename = "V0112_POKEMON_RHYDON")]
    V0112PokemonRhydon,
    #[serde(rename = "V0112_POKEMON_RHYDON_NORMAL")]
    V0112PokemonRhydonNormal,
    #[serde(rename = "V0113_POKEMON_CHANSEY")]
    V0113PokemonChansey,
    #[serde(rename = "V0113_POKEMON_CHANSEY_NORMAL")]
    V0113PokemonChanseyNormal,
    #[serde(rename = "V0114_POKEMON_TANGELA")]
    V0114PokemonTangela,
    #[serde(rename = "V0114_POKEMON_TANGELA_NORMAL")]
    V0114PokemonTangelaNormal,
    #[serde(rename = "V0115_POKEMON_KANGASKHAN")]
    V0115PokemonKangaskhan,
    #[serde(rename = "V0115_POKEMON_KANGASKHAN_NORMAL")]
    V0115PokemonKangaskhanNormal,
    #[serde(rename = "V0116_POKEMON_HORSEA")]
    V0116PokemonHorsea,
    #[serde(rename = "V0116_POKEMON_HORSEA_NORMAL")]
    V0116PokemonHorseaNormal,
    #[serde(rename = "V0117_POKEMON_SEADRA")]
    V0117PokemonSeadra,
    #[serde(rename = "V0117_POKEMON_SEADRA_NORMAL")]
    V0117PokemonSeadraNormal,
    #[serde(rename = "V0118_POKEMON_GOLDEEN")]
    V0118PokemonGoldeen,
    #[serde(rename = "V0118_POKEMON_GOLDEEN_NORMAL")]
    V0118PokemonGoldeenNormal,
    #[serde(rename = "V0119_POKEMON_SEAKING")]
    V0119PokemonSeaking,
    #[serde(rename = "V0119_POKEMON_SEAKING_NORMAL")]
    V0119PokemonSeakingNormal,
    #[serde(rename = "V0120_POKEMON_STARYU")]
    V0120PokemonStaryu,
    #[serde(rename = "V0120_POKEMON_STARYU_NORMAL")]
    V0120PokemonStaryuNormal,
    #[serde(rename = "V0121_POKEMON_STARMIE")]
    V0121PokemonStarmie,
    #[serde(rename = "V0121_POKEMON_STARMIE_NORMAL")]
    V0121PokemonStarmieNormal,
    #[serde(rename = "V0122_POKEMON_MR_MIME")]
    V0122PokemonMrMime,
    #[serde(rename = "V0122_POKEMON_MR_MIME_GALARIAN")]
    V0122PokemonMrMimeGalarian,
    #[serde(rename = "V0122_POKEMON_MR_MIME_NORMAL")]
    V0122PokemonMrMimeNormal,
    #[serde(rename = "V0123_POKEMON_SCYTHER")]
    V0123PokemonScyther,
    #[serde(rename = "V0123_POKEMON_SCYTHER_NORMAL")]
    V0123PokemonScytherNormal,
    #[serde(rename = "V0124_POKEMON_JYNX")]
    V0124PokemonJynx,
    #[serde(rename = "V0124_POKEMON_JYNX_NORMAL")]
    V0124PokemonJynxNormal,
    #[serde(rename = "V0125_POKEMON_ELECTABUZZ")]
    V0125PokemonElectabuzz,
    #[serde(rename = "V0125_POKEMON_ELECTABUZZ_NORMAL")]
    V0125PokemonElectabuzzNormal,
    #[serde(rename = "V0126_POKEMON_MAGMAR")]
    V0126PokemonMagmar,
    #[serde(rename = "V0126_POKEMON_MAGMAR_NORMAL")]
    V0126PokemonMagmarNormal,
    #[serde(rename = "V0127_POKEMON_PINSIR")]
    V0127PokemonPinsir,
    #[serde(rename = "V0127_POKEMON_PINSIR_NORMAL")]
    V0127PokemonPinsirNormal,
    #[serde(rename = "V0128_POKEMON_TAUROS")]
    V0128PokemonTauros,
    #[serde(rename = "V0128_POKEMON_TAUROS_NORMAL")]
    V0128PokemonTaurosNormal,
    #[serde(rename = "V0128_POKEMON_TAUROS_PALDEA_AQUA")]
    V0128PokemonTaurosPaldeaAqua,
    #[serde(rename = "V0128_POKEMON_TAUROS_PALDEA_BLAZE")]
    V0128PokemonTaurosPaldeaBlaze,
    #[serde(rename = "V0128_POKEMON_TAUROS_PALDEA_COMBAT")]
    V0128PokemonTaurosPaldeaCombat,
    #[serde(rename = "V0129_POKEMON_MAGIKARP")]
    V0129PokemonMagikarp,
    #[serde(rename = "V0129_POKEMON_MAGIKARP_NORMAL")]
    V0129PokemonMagikarpNormal,
    #[serde(rename = "V0130_POKEMON_GYARADOS")]
    V0130PokemonGyarados,
    #[serde(rename = "V0130_POKEMON_GYARADOS_NORMAL")]
    V0130PokemonGyaradosNormal,
    #[serde(rename = "V0131_POKEMON_LAPRAS")]
    V0131PokemonLapras,
    #[serde(rename = "V0131_POKEMON_LAPRAS_COSTUME_2020")]
    V0131PokemonLaprasCostume2020,
    #[serde(rename = "V0131_POKEMON_LAPRAS_NORMAL")]
    V0131PokemonLaprasNormal,
    #[serde(rename = "V0132_POKEMON_DITTO")]
    V0132PokemonDitto,
    #[serde(rename = "V0132_POKEMON_DITTO_NORMAL")]
    V0132PokemonDittoNormal,
    #[serde(rename = "V0132_POKEMON_DITTO_SPRING_2026_A")]
    V0132PokemonDittoSpring2026A,
    #[serde(rename = "V0132_POKEMON_DITTO_SPRING_2026_B")]
    V0132PokemonDittoSpring2026B,
    #[serde(rename = "V0133_POKEMON_EEVEE")]
    V0133PokemonEevee,
    #[serde(rename = "V0133_POKEMON_EEVEE_GOFEST_2024_MTIARA")]
    V0133PokemonEeveeGofest2024Mtiara,
    #[serde(rename = "V0133_POKEMON_EEVEE_GOFEST_2024_STIARA")]
    V0133PokemonEeveeGofest2024Stiara,
    #[serde(rename = "V0133_POKEMON_EEVEE_NORMAL")]
    V0133PokemonEeveeNormal,
    #[serde(rename = "V0134_POKEMON_VAPOREON")]
    V0134PokemonVaporeon,
    #[serde(rename = "V0134_POKEMON_VAPOREON_NORMAL")]
    V0134PokemonVaporeonNormal,
    #[serde(rename = "V0135_POKEMON_JOLTEON")]
    V0135PokemonJolteon,
    #[serde(rename = "V0135_POKEMON_JOLTEON_NORMAL")]
    V0135PokemonJolteonNormal,
    #[serde(rename = "V0136_POKEMON_FLAREON")]
    V0136PokemonFlareon,
    #[serde(rename = "V0136_POKEMON_FLAREON_NORMAL")]
    V0136PokemonFlareonNormal,
    #[serde(rename = "V0137_POKEMON_PORYGON")]
    V0137PokemonPorygon,
    #[serde(rename = "V0137_POKEMON_PORYGON_NORMAL")]
    V0137PokemonPorygonNormal,
    #[serde(rename = "V0138_POKEMON_OMANYTE")]
    V0138PokemonOmanyte,
    #[serde(rename = "V0138_POKEMON_OMANYTE_NORMAL")]
    V0138PokemonOmanyteNormal,
    #[serde(rename = "V0139_POKEMON_OMASTAR")]
    V0139PokemonOmastar,
    #[serde(rename = "V0139_POKEMON_OMASTAR_NORMAL")]
    V0139PokemonOmastarNormal,
    #[serde(rename = "V0140_POKEMON_KABUTO")]
    V0140PokemonKabuto,
    #[serde(rename = "V0140_POKEMON_KABUTO_NORMAL")]
    V0140PokemonKabutoNormal,
    #[serde(rename = "V0141_POKEMON_KABUTOPS")]
    V0141PokemonKabutops,
    #[serde(rename = "V0141_POKEMON_KABUTOPS_NORMAL")]
    V0141PokemonKabutopsNormal,
    #[serde(rename = "V0142_POKEMON_AERODACTYL")]
    V0142PokemonAerodactyl,
    #[serde(rename = "V0142_POKEMON_AERODACTYL_NORMAL")]
    V0142PokemonAerodactylNormal,
    #[serde(rename = "V0142_POKEMON_AERODACTYL_SUMMER_2023")]
    V0142PokemonAerodactylSummer2023,
    #[serde(rename = "V0143_POKEMON_SNORLAX")]
    V0143PokemonSnorlax,
    #[serde(rename = "V0143_POKEMON_SNORLAX_NORMAL")]
    V0143PokemonSnorlaxNormal,
    #[serde(rename = "V0143_POKEMON_SNORLAX_WILDAREA_2024")]
    V0143PokemonSnorlaxWildarea2024,
    #[serde(rename = "V0144_POKEMON_ARTICUNO")]
    V0144PokemonArticuno,
    #[serde(rename = "V0144_POKEMON_ARTICUNO_GALARIAN")]
    V0144PokemonArticunoGalarian,
    #[serde(rename = "V0144_POKEMON_ARTICUNO_NORMAL")]
    V0144PokemonArticunoNormal,
    #[serde(rename = "V0145_POKEMON_ZAPDOS")]
    V0145PokemonZapdos,
    #[serde(rename = "V0145_POKEMON_ZAPDOS_GALARIAN")]
    V0145PokemonZapdosGalarian,
    #[serde(rename = "V0145_POKEMON_ZAPDOS_NORMAL")]
    V0145PokemonZapdosNormal,
    #[serde(rename = "V0146_POKEMON_MOLTRES")]
    V0146PokemonMoltres,
    #[serde(rename = "V0146_POKEMON_MOLTRES_GALARIAN")]
    V0146PokemonMoltresGalarian,
    #[serde(rename = "V0146_POKEMON_MOLTRES_NORMAL")]
    V0146PokemonMoltresNormal,
    #[serde(rename = "V0147_POKEMON_DRATINI")]
    V0147PokemonDratini,
    #[serde(rename = "V0147_POKEMON_DRATINI_NORMAL")]
    V0147PokemonDratiniNormal,
    #[serde(rename = "V0148_POKEMON_DRAGONAIR")]
    V0148PokemonDragonair,
    #[serde(rename = "V0148_POKEMON_DRAGONAIR_NORMAL")]
    V0148PokemonDragonairNormal,
    #[serde(rename = "V0149_POKEMON_DRAGONITE")]
    V0149PokemonDragonite,
    #[serde(rename = "V0149_POKEMON_DRAGONITE_NORMAL")]
    V0149PokemonDragoniteNormal,
    #[serde(rename = "V0150_POKEMON_MEWTWO")]
    V0150PokemonMewtwo,
    #[serde(rename = "V0150_POKEMON_MEWTWO_A")]
    V0150PokemonMewtwoA,
    #[serde(rename = "V0150_POKEMON_MEWTWO_NORMAL")]
    V0150PokemonMewtwoNormal,
    #[serde(rename = "V0151_POKEMON_MEW")]
    V0151PokemonMew,
    #[serde(rename = "V0151_POKEMON_MEW_NORMAL")]
    V0151PokemonMewNormal,
    #[serde(rename = "V0152_POKEMON_CHIKORITA")]
    V0152PokemonChikorita,
    #[serde(rename = "V0152_POKEMON_CHIKORITA_NORMAL")]
    V0152PokemonChikoritaNormal,
    #[serde(rename = "V0153_POKEMON_BAYLEEF")]
    V0153PokemonBayleef,
    #[serde(rename = "V0153_POKEMON_BAYLEEF_NORMAL")]
    V0153PokemonBayleefNormal,
    #[serde(rename = "V0154_POKEMON_MEGANIUM")]
    V0154PokemonMeganium,
    #[serde(rename = "V0154_POKEMON_MEGANIUM_NORMAL")]
    V0154PokemonMeganiumNormal,
    #[serde(rename = "V0155_POKEMON_CYNDAQUIL")]
    V0155PokemonCyndaquil,
    #[serde(rename = "V0155_POKEMON_CYNDAQUIL_NORMAL")]
    V0155PokemonCyndaquilNormal,
    #[serde(rename = "V0156_POKEMON_QUILAVA")]
    V0156PokemonQuilava,
    #[serde(rename = "V0156_POKEMON_QUILAVA_NORMAL")]
    V0156PokemonQuilavaNormal,
    #[serde(rename = "V0157_POKEMON_TYPHLOSION")]
    V0157PokemonTyphlosion,
    #[serde(rename = "V0157_POKEMON_TYPHLOSION_HISUIAN")]
    V0157PokemonTyphlosionHisuian,
    #[serde(rename = "V0157_POKEMON_TYPHLOSION_NORMAL")]
    V0157PokemonTyphlosionNormal,
    #[serde(rename = "V0158_POKEMON_TOTODILE")]
    V0158PokemonTotodile,
    #[serde(rename = "V0158_POKEMON_TOTODILE_NORMAL")]
    V0158PokemonTotodileNormal,
    #[serde(rename = "V0159_POKEMON_CROCONAW")]
    V0159PokemonCroconaw,
    #[serde(rename = "V0159_POKEMON_CROCONAW_NORMAL")]
    V0159PokemonCroconawNormal,
    #[serde(rename = "V0160_POKEMON_FERALIGATR")]
    V0160PokemonFeraligatr,
    #[serde(rename = "V0160_POKEMON_FERALIGATR_NORMAL")]
    V0160PokemonFeraligatrNormal,
    #[serde(rename = "V0161_POKEMON_SENTRET")]
    V0161PokemonSentret,
    #[serde(rename = "V0161_POKEMON_SENTRET_NORMAL")]
    V0161PokemonSentretNormal,
    #[serde(rename = "V0162_POKEMON_FURRET")]
    V0162PokemonFurret,
    #[serde(rename = "V0162_POKEMON_FURRET_NORMAL")]
    V0162PokemonFurretNormal,
    #[serde(rename = "V0163_POKEMON_HOOTHOOT")]
    V0163PokemonHoothoot,
    #[serde(rename = "V0163_POKEMON_HOOTHOOT_NORMAL")]
    V0163PokemonHoothootNormal,
    #[serde(rename = "V0164_POKEMON_NOCTOWL")]
    V0164PokemonNoctowl,
    #[serde(rename = "V0164_POKEMON_NOCTOWL_NORMAL")]
    V0164PokemonNoctowlNormal,
    #[serde(rename = "V0165_POKEMON_LEDYBA")]
    V0165PokemonLedyba,
    #[serde(rename = "V0165_POKEMON_LEDYBA_NORMAL")]
    V0165PokemonLedybaNormal,
    #[serde(rename = "V0166_POKEMON_LEDIAN")]
    V0166PokemonLedian,
    #[serde(rename = "V0166_POKEMON_LEDIAN_NORMAL")]
    V0166PokemonLedianNormal,
    #[serde(rename = "V0167_POKEMON_SPINARAK")]
    V0167PokemonSpinarak,
    #[serde(rename = "V0167_POKEMON_SPINARAK_NORMAL")]
    V0167PokemonSpinarakNormal,
    #[serde(rename = "V0168_POKEMON_ARIADOS")]
    V0168PokemonAriados,
    #[serde(rename = "V0168_POKEMON_ARIADOS_NORMAL")]
    V0168PokemonAriadosNormal,
    #[serde(rename = "V0169_POKEMON_CROBAT")]
    V0169PokemonCrobat,
    #[serde(rename = "V0169_POKEMON_CROBAT_NORMAL")]
    V0169PokemonCrobatNormal,
    #[serde(rename = "V0170_POKEMON_CHINCHOU")]
    V0170PokemonChinchou,
    #[serde(rename = "V0170_POKEMON_CHINCHOU_NORMAL")]
    V0170PokemonChinchouNormal,
    #[serde(rename = "V0171_POKEMON_LANTURN")]
    V0171PokemonLanturn,
    #[serde(rename = "V0171_POKEMON_LANTURN_NORMAL")]
    V0171PokemonLanturnNormal,
    #[serde(rename = "V0172_POKEMON_PICHU")]
    V0172PokemonPichu,
    #[serde(rename = "V0172_POKEMON_PICHU_NORMAL")]
    V0172PokemonPichuNormal,
    #[serde(rename = "V0173_POKEMON_CLEFFA")]
    V0173PokemonCleffa,
    #[serde(rename = "V0173_POKEMON_CLEFFA_NORMAL")]
    V0173PokemonCleffaNormal,
    #[serde(rename = "V0174_POKEMON_IGGLYBUFF")]
    V0174PokemonIgglybuff,
    #[serde(rename = "V0174_POKEMON_IGGLYBUFF_NORMAL")]
    V0174PokemonIgglybuffNormal,
    #[serde(rename = "V0175_POKEMON_TOGEPI")]
    V0175PokemonTogepi,
    #[serde(rename = "V0175_POKEMON_TOGEPI_NORMAL")]
    V0175PokemonTogepiNormal,
    #[serde(rename = "V0176_POKEMON_TOGETIC")]
    V0176PokemonTogetic,
    #[serde(rename = "V0176_POKEMON_TOGETIC_NORMAL")]
    V0176PokemonTogeticNormal,
    #[serde(rename = "V0177_POKEMON_NATU")]
    V0177PokemonNatu,
    #[serde(rename = "V0177_POKEMON_NATU_NORMAL")]
    V0177PokemonNatuNormal,
    #[serde(rename = "V0178_POKEMON_XATU")]
    V0178PokemonXatu,
    #[serde(rename = "V0178_POKEMON_XATU_NORMAL")]
    V0178PokemonXatuNormal,
    #[serde(rename = "V0179_POKEMON_MAREEP")]
    V0179PokemonMareep,
    #[serde(rename = "V0179_POKEMON_MAREEP_NORMAL")]
    V0179PokemonMareepNormal,
    #[serde(rename = "V0180_POKEMON_FLAAFFY")]
    V0180PokemonFlaaffy,
    #[serde(rename = "V0180_POKEMON_FLAAFFY_NORMAL")]
    V0180PokemonFlaaffyNormal,
    #[serde(rename = "V0181_POKEMON_AMPHAROS")]
    V0181PokemonAmpharos,
    #[serde(rename = "V0181_POKEMON_AMPHAROS_NORMAL")]
    V0181PokemonAmpharosNormal,
    #[serde(rename = "V0182_POKEMON_BELLOSSOM")]
    V0182PokemonBellossom,
    #[serde(rename = "V0182_POKEMON_BELLOSSOM_NORMAL")]
    V0182PokemonBellossomNormal,
    #[serde(rename = "V0183_POKEMON_MARILL")]
    V0183PokemonMarill,
    #[serde(rename = "V0183_POKEMON_MARILL_NORMAL")]
    V0183PokemonMarillNormal,
    #[serde(rename = "V0184_POKEMON_AZUMARILL")]
    V0184PokemonAzumarill,
    #[serde(rename = "V0184_POKEMON_AZUMARILL_NORMAL")]
    V0184PokemonAzumarillNormal,
    #[serde(rename = "V0185_POKEMON_SUDOWOODO")]
    V0185PokemonSudowoodo,
    #[serde(rename = "V0185_POKEMON_SUDOWOODO_NORMAL")]
    V0185PokemonSudowoodoNormal,
    #[serde(rename = "V0185_POKEMON_SUDOWOODO_WINTER_2025")]
    V0185PokemonSudowoodoWinter2025,
    #[serde(rename = "V0186_POKEMON_POLITOED")]
    V0186PokemonPolitoed,
    #[serde(rename = "V0186_POKEMON_POLITOED_NORMAL")]
    V0186PokemonPolitoedNormal,
    #[serde(rename = "V0187_POKEMON_HOPPIP")]
    V0187PokemonHoppip,
    #[serde(rename = "V0187_POKEMON_HOPPIP_NORMAL")]
    V0187PokemonHoppipNormal,
    #[serde(rename = "V0188_POKEMON_SKIPLOOM")]
    V0188PokemonSkiploom,
    #[serde(rename = "V0188_POKEMON_SKIPLOOM_NORMAL")]
    V0188PokemonSkiploomNormal,
    #[serde(rename = "V0189_POKEMON_JUMPLUFF")]
    V0189PokemonJumpluff,
    #[serde(rename = "V0189_POKEMON_JUMPLUFF_NORMAL")]
    V0189PokemonJumpluffNormal,
    #[serde(rename = "V0190_POKEMON_AIPOM")]
    V0190PokemonAipom,
    #[serde(rename = "V0190_POKEMON_AIPOM_NORMAL")]
    V0190PokemonAipomNormal,
    #[serde(rename = "V0191_POKEMON_SUNKERN")]
    V0191PokemonSunkern,
    #[serde(rename = "V0191_POKEMON_SUNKERN_NORMAL")]
    V0191PokemonSunkernNormal,
    #[serde(rename = "V0192_POKEMON_SUNFLORA")]
    V0192PokemonSunflora,
    #[serde(rename = "V0192_POKEMON_SUNFLORA_NORMAL")]
    V0192PokemonSunfloraNormal,
    #[serde(rename = "V0193_POKEMON_YANMA")]
    V0193PokemonYanma,
    #[serde(rename = "V0193_POKEMON_YANMA_NORMAL")]
    V0193PokemonYanmaNormal,
    #[serde(rename = "V0194_POKEMON_WOOPER")]
    V0194PokemonWooper,
    #[serde(rename = "V0194_POKEMON_WOOPER_NORMAL")]
    V0194PokemonWooperNormal,
    #[serde(rename = "V0194_POKEMON_WOOPER_PALDEA")]
    V0194PokemonWooperPaldea,
    #[serde(rename = "V0195_POKEMON_QUAGSIRE")]
    V0195PokemonQuagsire,
    #[serde(rename = "V0195_POKEMON_QUAGSIRE_NORMAL")]
    V0195PokemonQuagsireNormal,
    #[serde(rename = "V0196_POKEMON_ESPEON")]
    V0196PokemonEspeon,
    #[serde(rename = "V0196_POKEMON_ESPEON_GOFEST_2024_SSCARF")]
    V0196PokemonEspeonGofest2024Sscarf,
    #[serde(rename = "V0196_POKEMON_ESPEON_NORMAL")]
    V0196PokemonEspeonNormal,
    #[serde(rename = "V0197_POKEMON_UMBREON")]
    V0197PokemonUmbreon,
    #[serde(rename = "V0197_POKEMON_UMBREON_GOFEST_2024_MSCARF")]
    V0197PokemonUmbreonGofest2024Mscarf,
    #[serde(rename = "V0197_POKEMON_UMBREON_NORMAL")]
    V0197PokemonUmbreonNormal,
    #[serde(rename = "V0198_POKEMON_MURKROW")]
    V0198PokemonMurkrow,
    #[serde(rename = "V0198_POKEMON_MURKROW_NORMAL")]
    V0198PokemonMurkrowNormal,
    #[serde(rename = "V0199_POKEMON_SLOWKING")]
    V0199PokemonSlowking,
    #[serde(rename = "V0199_POKEMON_SLOWKING_2022")]
    V0199PokemonSlowking2022,
    #[serde(rename = "V0199_POKEMON_SLOWKING_GALARIAN")]
    V0199PokemonSlowkingGalarian,
    #[serde(rename = "V0199_POKEMON_SLOWKING_NORMAL")]
    V0199PokemonSlowkingNormal,
    #[serde(rename = "V0200_POKEMON_MISDREAVUS")]
    V0200PokemonMisdreavus,
    #[serde(rename = "V0200_POKEMON_MISDREAVUS_NORMAL")]
    V0200PokemonMisdreavusNormal,
    #[serde(rename = "V0201_POKEMON_UNOWN")]
    V0201PokemonUnown,
    #[serde(rename = "V0201_POKEMON_UNOWN_A")]
    V0201PokemonUnownA,
    #[serde(rename = "V0201_POKEMON_UNOWN_B")]
    V0201PokemonUnownB,
    #[serde(rename = "V0201_POKEMON_UNOWN_C")]
    V0201PokemonUnownC,
    #[serde(rename = "V0201_POKEMON_UNOWN_D")]
    V0201PokemonUnownD,
    #[serde(rename = "V0201_POKEMON_UNOWN_E")]
    V0201PokemonUnownE,
    #[serde(rename = "V0201_POKEMON_UNOWN_EXCLAMATION_POINT")]
    V0201PokemonUnownExclamationPoint,
    #[serde(rename = "V0201_POKEMON_UNOWN_F")]
    V0201PokemonUnownF,
    #[serde(rename = "V0201_POKEMON_UNOWN_G")]
    V0201PokemonUnownG,
    #[serde(rename = "V0201_POKEMON_UNOWN_H")]
    V0201PokemonUnownH,
    #[serde(rename = "V0201_POKEMON_UNOWN_I")]
    V0201PokemonUnownI,
    #[serde(rename = "V0201_POKEMON_UNOWN_J")]
    V0201PokemonUnownJ,
    #[serde(rename = "V0201_POKEMON_UNOWN_K")]
    V0201PokemonUnownK,
    #[serde(rename = "V0201_POKEMON_UNOWN_L")]
    V0201PokemonUnownL,
    #[serde(rename = "V0201_POKEMON_UNOWN_M")]
    V0201PokemonUnownM,
    #[serde(rename = "V0201_POKEMON_UNOWN_N")]
    V0201PokemonUnownN,
    #[serde(rename = "V0201_POKEMON_UNOWN_O")]
    V0201PokemonUnownO,
    #[serde(rename = "V0201_POKEMON_UNOWN_P")]
    V0201PokemonUnownP,
    #[serde(rename = "V0201_POKEMON_UNOWN_Q")]
    V0201PokemonUnownQ,
    #[serde(rename = "V0201_POKEMON_UNOWN_QUESTION_MARK")]
    V0201PokemonUnownQuestionMark,
    #[serde(rename = "V0201_POKEMON_UNOWN_R")]
    V0201PokemonUnownR,
    #[serde(rename = "V0201_POKEMON_UNOWN_S")]
    V0201PokemonUnownS,
    #[serde(rename = "V0201_POKEMON_UNOWN_T")]
    V0201PokemonUnownT,
    #[serde(rename = "V0201_POKEMON_UNOWN_U")]
    V0201PokemonUnownU,
    #[serde(rename = "V0201_POKEMON_UNOWN_V")]
    V0201PokemonUnownV,
    #[serde(rename = "V0201_POKEMON_UNOWN_W")]
    V0201PokemonUnownW,
    #[serde(rename = "V0201_POKEMON_UNOWN_X")]
    V0201PokemonUnownX,
    #[serde(rename = "V0201_POKEMON_UNOWN_Y")]
    V0201PokemonUnownY,
    #[serde(rename = "V0201_POKEMON_UNOWN_Z")]
    V0201PokemonUnownZ,
    #[serde(rename = "V0202_POKEMON_WOBBUFFET")]
    V0202PokemonWobbuffet,
    #[serde(rename = "V0202_POKEMON_WOBBUFFET_NORMAL")]
    V0202PokemonWobbuffetNormal,
    #[serde(rename = "V0203_POKEMON_GIRAFARIG")]
    V0203PokemonGirafarig,
    #[serde(rename = "V0203_POKEMON_GIRAFARIG_NORMAL")]
    V0203PokemonGirafarigNormal,
    #[serde(rename = "V0204_POKEMON_PINECO")]
    V0204PokemonPineco,
    #[serde(rename = "V0204_POKEMON_PINECO_NORMAL")]
    V0204PokemonPinecoNormal,
    #[serde(rename = "V0205_POKEMON_FORRETRESS")]
    V0205PokemonForretress,
    #[serde(rename = "V0205_POKEMON_FORRETRESS_NORMAL")]
    V0205PokemonForretressNormal,
    #[serde(rename = "V0206_POKEMON_DUNSPARCE")]
    V0206PokemonDunsparce,
    #[serde(rename = "V0206_POKEMON_DUNSPARCE_NORMAL")]
    V0206PokemonDunsparceNormal,
    #[serde(rename = "V0207_POKEMON_GLIGAR")]
    V0207PokemonGligar,
    #[serde(rename = "V0207_POKEMON_GLIGAR_NORMAL")]
    V0207PokemonGligarNormal,
    #[serde(rename = "V0208_POKEMON_STEELIX")]
    V0208PokemonSteelix,
    #[serde(rename = "V0208_POKEMON_STEELIX_NORMAL")]
    V0208PokemonSteelixNormal,
    #[serde(rename = "V0209_POKEMON_SNUBBULL")]
    V0209PokemonSnubbull,
    #[serde(rename = "V0209_POKEMON_SNUBBULL_NORMAL")]
    V0209PokemonSnubbullNormal,
    #[serde(rename = "V0210_POKEMON_GRANBULL")]
    V0210PokemonGranbull,
    #[serde(rename = "V0210_POKEMON_GRANBULL_NORMAL")]
    V0210PokemonGranbullNormal,
    #[serde(rename = "V0211_POKEMON_QWILFISH")]
    V0211PokemonQwilfish,
    #[serde(rename = "V0211_POKEMON_QWILFISH_HISUIAN")]
    V0211PokemonQwilfishHisuian,
    #[serde(rename = "V0211_POKEMON_QWILFISH_NORMAL")]
    V0211PokemonQwilfishNormal,
    #[serde(rename = "V0212_POKEMON_SCIZOR")]
    V0212PokemonScizor,
    #[serde(rename = "V0212_POKEMON_SCIZOR_NORMAL")]
    V0212PokemonScizorNormal,
    #[serde(rename = "V0213_POKEMON_SHUCKLE")]
    V0213PokemonShuckle,
    #[serde(rename = "V0213_POKEMON_SHUCKLE_NORMAL")]
    V0213PokemonShuckleNormal,
    #[serde(rename = "V0214_POKEMON_HERACROSS")]
    V0214PokemonHeracross,
    #[serde(rename = "V0214_POKEMON_HERACROSS_NORMAL")]
    V0214PokemonHeracrossNormal,
    #[serde(rename = "V0215_POKEMON_SNEASEL")]
    V0215PokemonSneasel,
    #[serde(rename = "V0215_POKEMON_SNEASEL_HISUIAN")]
    V0215PokemonSneaselHisuian,
    #[serde(rename = "V0215_POKEMON_SNEASEL_NORMAL")]
    V0215PokemonSneaselNormal,
    #[serde(rename = "V0216_POKEMON_TEDDIURSA")]
    V0216PokemonTeddiursa,
    #[serde(rename = "V0216_POKEMON_TEDDIURSA_NORMAL")]
    V0216PokemonTeddiursaNormal,
    #[serde(rename = "V0217_POKEMON_URSARING")]
    V0217PokemonUrsaring,
    #[serde(rename = "V0217_POKEMON_URSARING_NORMAL")]
    V0217PokemonUrsaringNormal,
    #[serde(rename = "V0218_POKEMON_SLUGMA")]
    V0218PokemonSlugma,
    #[serde(rename = "V0218_POKEMON_SLUGMA_NORMAL")]
    V0218PokemonSlugmaNormal,
    #[serde(rename = "V0219_POKEMON_MAGCARGO")]
    V0219PokemonMagcargo,
    #[serde(rename = "V0219_POKEMON_MAGCARGO_NORMAL")]
    V0219PokemonMagcargoNormal,
    #[serde(rename = "V0220_POKEMON_SWINUB")]
    V0220PokemonSwinub,
    #[serde(rename = "V0220_POKEMON_SWINUB_NORMAL")]
    V0220PokemonSwinubNormal,
    #[serde(rename = "V0221_POKEMON_PILOSWINE")]
    V0221PokemonPiloswine,
    #[serde(rename = "V0221_POKEMON_PILOSWINE_NORMAL")]
    V0221PokemonPiloswineNormal,
    #[serde(rename = "V0222_POKEMON_CORSOLA")]
    V0222PokemonCorsola,
    #[serde(rename = "V0222_POKEMON_CORSOLA_GALARIAN")]
    V0222PokemonCorsolaGalarian,
    #[serde(rename = "V0222_POKEMON_CORSOLA_NORMAL")]
    V0222PokemonCorsolaNormal,
    #[serde(rename = "V0222_POKEMON_CORSOLA_SPRING_2026")]
    V0222PokemonCorsolaSpring2026,
    #[serde(rename = "V0223_POKEMON_REMORAID")]
    V0223PokemonRemoraid,
    #[serde(rename = "V0223_POKEMON_REMORAID_NORMAL")]
    V0223PokemonRemoraidNormal,
    #[serde(rename = "V0224_POKEMON_OCTILLERY")]
    V0224PokemonOctillery,
    #[serde(rename = "V0224_POKEMON_OCTILLERY_NORMAL")]
    V0224PokemonOctilleryNormal,
    #[serde(rename = "V0225_POKEMON_DELIBIRD")]
    V0225PokemonDelibird,
    #[serde(rename = "V0225_POKEMON_DELIBIRD_NORMAL")]
    V0225PokemonDelibirdNormal,
    #[serde(rename = "V0225_POKEMON_DELIBIRD_WINTER_2020")]
    V0225PokemonDelibirdWinter2020,
    #[serde(rename = "V0226_POKEMON_MANTINE")]
    V0226PokemonMantine,
    #[serde(rename = "V0226_POKEMON_MANTINE_NORMAL")]
    V0226PokemonMantineNormal,
    #[serde(rename = "V0227_POKEMON_SKARMORY")]
    V0227PokemonSkarmory,
    #[serde(rename = "V0227_POKEMON_SKARMORY_NORMAL")]
    V0227PokemonSkarmoryNormal,
    #[serde(rename = "V0228_POKEMON_HOUNDOUR")]
    V0228PokemonHoundour,
    #[serde(rename = "V0228_POKEMON_HOUNDOUR_NORMAL")]
    V0228PokemonHoundourNormal,
    #[serde(rename = "V0229_POKEMON_HOUNDOOM")]
    V0229PokemonHoundoom,
    #[serde(rename = "V0229_POKEMON_HOUNDOOM_NORMAL")]
    V0229PokemonHoundoomNormal,
    #[serde(rename = "V0230_POKEMON_KINGDRA")]
    V0230PokemonKingdra,
    #[serde(rename = "V0230_POKEMON_KINGDRA_NORMAL")]
    V0230PokemonKingdraNormal,
    #[serde(rename = "V0231_POKEMON_PHANPY")]
    V0231PokemonPhanpy,
    #[serde(rename = "V0231_POKEMON_PHANPY_NORMAL")]
    V0231PokemonPhanpyNormal,
    #[serde(rename = "V0232_POKEMON_DONPHAN")]
    V0232PokemonDonphan,
    #[serde(rename = "V0232_POKEMON_DONPHAN_NORMAL")]
    V0232PokemonDonphanNormal,
    #[serde(rename = "V0233_POKEMON_PORYGON2")]
    V0233PokemonPorygon2,
    #[serde(rename = "V0233_POKEMON_PORYGON2_NORMAL")]
    V0233PokemonPorygon2Normal,
    #[serde(rename = "V0234_POKEMON_STANTLER")]
    V0234PokemonStantler,
    #[serde(rename = "V0234_POKEMON_STANTLER_NORMAL")]
    V0234PokemonStantlerNormal,
    #[serde(rename = "V0235_POKEMON_SMEARGLE")]
    V0235PokemonSmeargle,
    #[serde(rename = "V0235_POKEMON_SMEARGLE_NORMAL")]
    V0235PokemonSmeargleNormal,
    #[serde(rename = "V0236_POKEMON_TYROGUE")]
    V0236PokemonTyrogue,
    #[serde(rename = "V0236_POKEMON_TYROGUE_NORMAL")]
    V0236PokemonTyrogueNormal,
    #[serde(rename = "V0237_POKEMON_HITMONTOP")]
    V0237PokemonHitmontop,
    #[serde(rename = "V0237_POKEMON_HITMONTOP_NORMAL")]
    V0237PokemonHitmontopNormal,
    #[serde(rename = "V0238_POKEMON_SMOOCHUM")]
    V0238PokemonSmoochum,
    #[serde(rename = "V0238_POKEMON_SMOOCHUM_NORMAL")]
    V0238PokemonSmoochumNormal,
    #[serde(rename = "V0239_POKEMON_ELEKID")]
    V0239PokemonElekid,
    #[serde(rename = "V0239_POKEMON_ELEKID_NORMAL")]
    V0239PokemonElekidNormal,
    #[serde(rename = "V0240_POKEMON_MAGBY")]
    V0240PokemonMagby,
    #[serde(rename = "V0240_POKEMON_MAGBY_NORMAL")]
    V0240PokemonMagbyNormal,
    #[serde(rename = "V0241_POKEMON_MILTANK")]
    V0241PokemonMiltank,
    #[serde(rename = "V0241_POKEMON_MILTANK_NORMAL")]
    V0241PokemonMiltankNormal,
    #[serde(rename = "V0242_POKEMON_BLISSEY")]
    V0242PokemonBlissey,
    #[serde(rename = "V0242_POKEMON_BLISSEY_NORMAL")]
    V0242PokemonBlisseyNormal,
    #[serde(rename = "V0243_POKEMON_RAIKOU")]
    V0243PokemonRaikou,
    #[serde(rename = "V0243_POKEMON_RAIKOU_NORMAL")]
    V0243PokemonRaikouNormal,
    #[serde(rename = "V0243_POKEMON_RAIKOU_S")]
    V0243PokemonRaikouS,
    #[serde(rename = "V0244_POKEMON_ENTEI")]
    V0244PokemonEntei,
    #[serde(rename = "V0244_POKEMON_ENTEI_NORMAL")]
    V0244PokemonEnteiNormal,
    #[serde(rename = "V0244_POKEMON_ENTEI_S")]
    V0244PokemonEnteiS,
    #[serde(rename = "V0245_POKEMON_SUICUNE")]
    V0245PokemonSuicune,
    #[serde(rename = "V0245_POKEMON_SUICUNE_NORMAL")]
    V0245PokemonSuicuneNormal,
    #[serde(rename = "V0245_POKEMON_SUICUNE_S")]
    V0245PokemonSuicuneS,
    #[serde(rename = "V0246_POKEMON_LARVITAR")]
    V0246PokemonLarvitar,
    #[serde(rename = "V0246_POKEMON_LARVITAR_NORMAL")]
    V0246PokemonLarvitarNormal,
    #[serde(rename = "V0247_POKEMON_PUPITAR")]
    V0247PokemonPupitar,
    #[serde(rename = "V0247_POKEMON_PUPITAR_NORMAL")]
    V0247PokemonPupitarNormal,
    #[serde(rename = "V0248_POKEMON_TYRANITAR")]
    V0248PokemonTyranitar,
    #[serde(rename = "V0248_POKEMON_TYRANITAR_NORMAL")]
    V0248PokemonTyranitarNormal,
    #[serde(rename = "V0249_POKEMON_LUGIA")]
    V0249PokemonLugia,
    #[serde(rename = "V0249_POKEMON_LUGIA_NORMAL")]
    V0249PokemonLugiaNormal,
    #[serde(rename = "V0249_POKEMON_LUGIA_S")]
    V0249PokemonLugiaS,
    #[serde(rename = "V0250_POKEMON_HO_OH")]
    V0250PokemonHoOh,
    #[serde(rename = "V0250_POKEMON_HO_OH_NORMAL")]
    V0250PokemonHoOhNormal,
    #[serde(rename = "V0250_POKEMON_HO_OH_S")]
    V0250PokemonHoOhS,
    #[serde(rename = "V0251_POKEMON_CELEBI")]
    V0251PokemonCelebi,
    #[serde(rename = "V0251_POKEMON_CELEBI_NORMAL")]
    V0251PokemonCelebiNormal,
    #[serde(rename = "V0252_POKEMON_TREECKO")]
    V0252PokemonTreecko,
    #[serde(rename = "V0252_POKEMON_TREECKO_NORMAL")]
    V0252PokemonTreeckoNormal,
    #[serde(rename = "V0253_POKEMON_GROVYLE")]
    V0253PokemonGrovyle,
    #[serde(rename = "V0253_POKEMON_GROVYLE_NORMAL")]
    V0253PokemonGrovyleNormal,
    #[serde(rename = "V0254_POKEMON_SCEPTILE")]
    V0254PokemonSceptile,
    #[serde(rename = "V0254_POKEMON_SCEPTILE_NORMAL")]
    V0254PokemonSceptileNormal,
    #[serde(rename = "V0255_POKEMON_TORCHIC")]
    V0255PokemonTorchic,
    #[serde(rename = "V0255_POKEMON_TORCHIC_NORMAL")]
    V0255PokemonTorchicNormal,
    #[serde(rename = "V0256_POKEMON_COMBUSKEN")]
    V0256PokemonCombusken,
    #[serde(rename = "V0256_POKEMON_COMBUSKEN_NORMAL")]
    V0256PokemonCombuskenNormal,
    #[serde(rename = "V0257_POKEMON_BLAZIKEN")]
    V0257PokemonBlaziken,
    #[serde(rename = "V0257_POKEMON_BLAZIKEN_NORMAL")]
    V0257PokemonBlazikenNormal,
    #[serde(rename = "V0258_POKEMON_MUDKIP")]
    V0258PokemonMudkip,
    #[serde(rename = "V0258_POKEMON_MUDKIP_NORMAL")]
    V0258PokemonMudkipNormal,
    #[serde(rename = "V0259_POKEMON_MARSHTOMP")]
    V0259PokemonMarshtomp,
    #[serde(rename = "V0259_POKEMON_MARSHTOMP_NORMAL")]
    V0259PokemonMarshtompNormal,
    #[serde(rename = "V0260_POKEMON_SWAMPERT")]
    V0260PokemonSwampert,
    #[serde(rename = "V0260_POKEMON_SWAMPERT_NORMAL")]
    V0260PokemonSwampertNormal,
    #[serde(rename = "V0261_POKEMON_POOCHYENA")]
    V0261PokemonPoochyena,
    #[serde(rename = "V0261_POKEMON_POOCHYENA_NORMAL")]
    V0261PokemonPoochyenaNormal,
    #[serde(rename = "V0262_POKEMON_MIGHTYENA")]
    V0262PokemonMightyena,
    #[serde(rename = "V0262_POKEMON_MIGHTYENA_NORMAL")]
    V0262PokemonMightyenaNormal,
    #[serde(rename = "V0263_POKEMON_ZIGZAGOON")]
    V0263PokemonZigzagoon,
    #[serde(rename = "V0263_POKEMON_ZIGZAGOON_GALARIAN")]
    V0263PokemonZigzagoonGalarian,
    #[serde(rename = "V0263_POKEMON_ZIGZAGOON_NORMAL")]
    V0263PokemonZigzagoonNormal,
    #[serde(rename = "V0264_POKEMON_LINOONE")]
    V0264PokemonLinoone,
    #[serde(rename = "V0264_POKEMON_LINOONE_GALARIAN")]
    V0264PokemonLinooneGalarian,
    #[serde(rename = "V0264_POKEMON_LINOONE_NORMAL")]
    V0264PokemonLinooneNormal,
    #[serde(rename = "V0265_POKEMON_WURMPLE")]
    V0265PokemonWurmple,
    #[serde(rename = "V0265_POKEMON_WURMPLE_NORMAL")]
    V0265PokemonWurmpleNormal,
    #[serde(rename = "V0266_POKEMON_SILCOON")]
    V0266PokemonSilcoon,
    #[serde(rename = "V0266_POKEMON_SILCOON_NORMAL")]
    V0266PokemonSilcoonNormal,
    #[serde(rename = "V0267_POKEMON_BEAUTIFLY")]
    V0267PokemonBeautifly,
    #[serde(rename = "V0267_POKEMON_BEAUTIFLY_NORMAL")]
    V0267PokemonBeautiflyNormal,
    #[serde(rename = "V0268_POKEMON_CASCOON")]
    V0268PokemonCascoon,
    #[serde(rename = "V0268_POKEMON_CASCOON_NORMAL")]
    V0268PokemonCascoonNormal,
    #[serde(rename = "V0269_POKEMON_DUSTOX")]
    V0269PokemonDustox,
    #[serde(rename = "V0269_POKEMON_DUSTOX_NORMAL")]
    V0269PokemonDustoxNormal,
    #[serde(rename = "V0270_POKEMON_LOTAD")]
    V0270PokemonLotad,
    #[serde(rename = "V0270_POKEMON_LOTAD_NORMAL")]
    V0270PokemonLotadNormal,
    #[serde(rename = "V0271_POKEMON_LOMBRE")]
    V0271PokemonLombre,
    #[serde(rename = "V0271_POKEMON_LOMBRE_NORMAL")]
    V0271PokemonLombreNormal,
    #[serde(rename = "V0272_POKEMON_LUDICOLO")]
    V0272PokemonLudicolo,
    #[serde(rename = "V0272_POKEMON_LUDICOLO_NORMAL")]
    V0272PokemonLudicoloNormal,
    #[serde(rename = "V0273_POKEMON_SEEDOT")]
    V0273PokemonSeedot,
    #[serde(rename = "V0273_POKEMON_SEEDOT_NORMAL")]
    V0273PokemonSeedotNormal,
    #[serde(rename = "V0274_POKEMON_NUZLEAF")]
    V0274PokemonNuzleaf,
    #[serde(rename = "V0274_POKEMON_NUZLEAF_NORMAL")]
    V0274PokemonNuzleafNormal,
    #[serde(rename = "V0275_POKEMON_SHIFTRY")]
    V0275PokemonShiftry,
    #[serde(rename = "V0275_POKEMON_SHIFTRY_NORMAL")]
    V0275PokemonShiftryNormal,
    #[serde(rename = "V0276_POKEMON_TAILLOW")]
    V0276PokemonTaillow,
    #[serde(rename = "V0276_POKEMON_TAILLOW_NORMAL")]
    V0276PokemonTaillowNormal,
    #[serde(rename = "V0277_POKEMON_SWELLOW")]
    V0277PokemonSwellow,
    #[serde(rename = "V0277_POKEMON_SWELLOW_NORMAL")]
    V0277PokemonSwellowNormal,
    #[serde(rename = "V0278_POKEMON_WINGULL")]
    V0278PokemonWingull,
    #[serde(rename = "V0278_POKEMON_WINGULL_NORMAL")]
    V0278PokemonWingullNormal,
    #[serde(rename = "V0279_POKEMON_PELIPPER")]
    V0279PokemonPelipper,
    #[serde(rename = "V0279_POKEMON_PELIPPER_NORMAL")]
    V0279PokemonPelipperNormal,
    #[serde(rename = "V0280_POKEMON_RALTS")]
    V0280PokemonRalts,
    #[serde(rename = "V0280_POKEMON_RALTS_NORMAL")]
    V0280PokemonRaltsNormal,
    #[serde(rename = "V0281_POKEMON_KIRLIA")]
    V0281PokemonKirlia,
    #[serde(rename = "V0281_POKEMON_KIRLIA_NORMAL")]
    V0281PokemonKirliaNormal,
    #[serde(rename = "V0282_POKEMON_GARDEVOIR")]
    V0282PokemonGardevoir,
    #[serde(rename = "V0282_POKEMON_GARDEVOIR_NORMAL")]
    V0282PokemonGardevoirNormal,
    #[serde(rename = "V0283_POKEMON_SURSKIT")]
    V0283PokemonSurskit,
    #[serde(rename = "V0283_POKEMON_SURSKIT_NORMAL")]
    V0283PokemonSurskitNormal,
    #[serde(rename = "V0284_POKEMON_MASQUERAIN")]
    V0284PokemonMasquerain,
    #[serde(rename = "V0284_POKEMON_MASQUERAIN_NORMAL")]
    V0284PokemonMasquerainNormal,
    #[serde(rename = "V0285_POKEMON_SHROOMISH")]
    V0285PokemonShroomish,
    #[serde(rename = "V0285_POKEMON_SHROOMISH_NORMAL")]
    V0285PokemonShroomishNormal,
    #[serde(rename = "V0286_POKEMON_BRELOOM")]
    V0286PokemonBreloom,
    #[serde(rename = "V0286_POKEMON_BRELOOM_NORMAL")]
    V0286PokemonBreloomNormal,
    #[serde(rename = "V0287_POKEMON_SLAKOTH")]
    V0287PokemonSlakoth,
    #[serde(rename = "V0287_POKEMON_SLAKOTH_NORMAL")]
    V0287PokemonSlakothNormal,
    #[serde(rename = "V0288_POKEMON_VIGOROTH")]
    V0288PokemonVigoroth,
    #[serde(rename = "V0288_POKEMON_VIGOROTH_NORMAL")]
    V0288PokemonVigorothNormal,
    #[serde(rename = "V0289_POKEMON_SLAKING")]
    V0289PokemonSlaking,
    #[serde(rename = "V0289_POKEMON_SLAKING_NORMAL")]
    V0289PokemonSlakingNormal,
    #[serde(rename = "V0290_POKEMON_NINCADA")]
    V0290PokemonNincada,
    #[serde(rename = "V0290_POKEMON_NINCADA_NORMAL")]
    V0290PokemonNincadaNormal,
    #[serde(rename = "V0291_POKEMON_NINJASK")]
    V0291PokemonNinjask,
    #[serde(rename = "V0291_POKEMON_NINJASK_NORMAL")]
    V0291PokemonNinjaskNormal,
    #[serde(rename = "V0292_POKEMON_SHEDINJA")]
    V0292PokemonShedinja,
    #[serde(rename = "V0292_POKEMON_SHEDINJA_NORMAL")]
    V0292PokemonShedinjaNormal,
    #[serde(rename = "V0293_POKEMON_WHISMUR")]
    V0293PokemonWhismur,
    #[serde(rename = "V0293_POKEMON_WHISMUR_NORMAL")]
    V0293PokemonWhismurNormal,
    #[serde(rename = "V0294_POKEMON_LOUDRED")]
    V0294PokemonLoudred,
    #[serde(rename = "V0294_POKEMON_LOUDRED_NORMAL")]
    V0294PokemonLoudredNormal,
    #[serde(rename = "V0295_POKEMON_EXPLOUD")]
    V0295PokemonExploud,
    #[serde(rename = "V0295_POKEMON_EXPLOUD_NORMAL")]
    V0295PokemonExploudNormal,
    #[serde(rename = "V0296_POKEMON_MAKUHITA")]
    V0296PokemonMakuhita,
    #[serde(rename = "V0296_POKEMON_MAKUHITA_NORMAL")]
    V0296PokemonMakuhitaNormal,
    #[serde(rename = "V0297_POKEMON_HARIYAMA")]
    V0297PokemonHariyama,
    #[serde(rename = "V0297_POKEMON_HARIYAMA_NORMAL")]
    V0297PokemonHariyamaNormal,
    #[serde(rename = "V0298_POKEMON_AZURILL")]
    V0298PokemonAzurill,
    #[serde(rename = "V0298_POKEMON_AZURILL_NORMAL")]
    V0298PokemonAzurillNormal,
    #[serde(rename = "V0299_POKEMON_NOSEPASS")]
    V0299PokemonNosepass,
    #[serde(rename = "V0299_POKEMON_NOSEPASS_NORMAL")]
    V0299PokemonNosepassNormal,
    #[serde(rename = "V0300_POKEMON_SKITTY")]
    V0300PokemonSkitty,
    #[serde(rename = "V0300_POKEMON_SKITTY_NORMAL")]
    V0300PokemonSkittyNormal,
    #[serde(rename = "V0301_POKEMON_DELCATTY")]
    V0301PokemonDelcatty,
    #[serde(rename = "V0301_POKEMON_DELCATTY_NORMAL")]
    V0301PokemonDelcattyNormal,
    #[serde(rename = "V0302_POKEMON_SABLEYE")]
    V0302PokemonSableye,
    #[serde(rename = "V0302_POKEMON_SABLEYE_COSTUME_2020")]
    V0302PokemonSableyeCostume2020,
    #[serde(rename = "V0302_POKEMON_SABLEYE_NORMAL")]
    V0302PokemonSableyeNormal,
    #[serde(rename = "V0303_POKEMON_MAWILE")]
    V0303PokemonMawile,
    #[serde(rename = "V0303_POKEMON_MAWILE_NORMAL")]
    V0303PokemonMawileNormal,
    #[serde(rename = "V0304_POKEMON_ARON")]
    V0304PokemonAron,
    #[serde(rename = "V0304_POKEMON_ARON_NORMAL")]
    V0304PokemonAronNormal,
    #[serde(rename = "V0305_POKEMON_LAIRON")]
    V0305PokemonLairon,
    #[serde(rename = "V0305_POKEMON_LAIRON_NORMAL")]
    V0305PokemonLaironNormal,
    #[serde(rename = "V0306_POKEMON_AGGRON")]
    V0306PokemonAggron,
    #[serde(rename = "V0306_POKEMON_AGGRON_NORMAL")]
    V0306PokemonAggronNormal,
    #[serde(rename = "V0307_POKEMON_MEDITITE")]
    V0307PokemonMeditite,
    #[serde(rename = "V0307_POKEMON_MEDITITE_NORMAL")]
    V0307PokemonMedititeNormal,
    #[serde(rename = "V0308_POKEMON_MEDICHAM")]
    V0308PokemonMedicham,
    #[serde(rename = "V0308_POKEMON_MEDICHAM_NORMAL")]
    V0308PokemonMedichamNormal,
    #[serde(rename = "V0309_POKEMON_ELECTRIKE")]
    V0309PokemonElectrike,
    #[serde(rename = "V0309_POKEMON_ELECTRIKE_NORMAL")]
    V0309PokemonElectrikeNormal,
    #[serde(rename = "V0310_POKEMON_MANECTRIC")]
    V0310PokemonManectric,
    #[serde(rename = "V0310_POKEMON_MANECTRIC_NORMAL")]
    V0310PokemonManectricNormal,
    #[serde(rename = "V0311_POKEMON_PLUSLE")]
    V0311PokemonPlusle,
    #[serde(rename = "V0311_POKEMON_PLUSLE_NORMAL")]
    V0311PokemonPlusleNormal,
    #[serde(rename = "V0312_POKEMON_MINUN")]
    V0312PokemonMinun,
    #[serde(rename = "V0312_POKEMON_MINUN_NORMAL")]
    V0312PokemonMinunNormal,
    #[serde(rename = "V0313_POKEMON_VOLBEAT")]
    V0313PokemonVolbeat,
    #[serde(rename = "V0313_POKEMON_VOLBEAT_NORMAL")]
    V0313PokemonVolbeatNormal,
    #[serde(rename = "V0314_POKEMON_ILLUMISE")]
    V0314PokemonIllumise,
    #[serde(rename = "V0314_POKEMON_ILLUMISE_NORMAL")]
    V0314PokemonIllumiseNormal,
    #[serde(rename = "V0315_POKEMON_ROSELIA")]
    V0315PokemonRoselia,
    #[serde(rename = "V0315_POKEMON_ROSELIA_NORMAL")]
    V0315PokemonRoseliaNormal,
    #[serde(rename = "V0316_POKEMON_GULPIN")]
    V0316PokemonGulpin,
    #[serde(rename = "V0316_POKEMON_GULPIN_NORMAL")]
    V0316PokemonGulpinNormal,
    #[serde(rename = "V0317_POKEMON_SWALOT")]
    V0317PokemonSwalot,
    #[serde(rename = "V0317_POKEMON_SWALOT_NORMAL")]
    V0317PokemonSwalotNormal,
    #[serde(rename = "V0318_POKEMON_CARVANHA")]
    V0318PokemonCarvanha,
    #[serde(rename = "V0318_POKEMON_CARVANHA_NORMAL")]
    V0318PokemonCarvanhaNormal,
    #[serde(rename = "V0319_POKEMON_SHARPEDO")]
    V0319PokemonSharpedo,
    #[serde(rename = "V0319_POKEMON_SHARPEDO_NORMAL")]
    V0319PokemonSharpedoNormal,
    #[serde(rename = "V0320_POKEMON_WAILMER")]
    V0320PokemonWailmer,
    #[serde(rename = "V0320_POKEMON_WAILMER_NORMAL")]
    V0320PokemonWailmerNormal,
    #[serde(rename = "V0321_POKEMON_WAILORD")]
    V0321PokemonWailord,
    #[serde(rename = "V0321_POKEMON_WAILORD_NORMAL")]
    V0321PokemonWailordNormal,
    #[serde(rename = "V0322_POKEMON_NUMEL")]
    V0322PokemonNumel,
    #[serde(rename = "V0322_POKEMON_NUMEL_NORMAL")]
    V0322PokemonNumelNormal,
    #[serde(rename = "V0323_POKEMON_CAMERUPT")]
    V0323PokemonCamerupt,
    #[serde(rename = "V0323_POKEMON_CAMERUPT_NORMAL")]
    V0323PokemonCameruptNormal,
    #[serde(rename = "V0324_POKEMON_TORKOAL")]
    V0324PokemonTorkoal,
    #[serde(rename = "V0324_POKEMON_TORKOAL_NORMAL")]
    V0324PokemonTorkoalNormal,
    #[serde(rename = "V0325_POKEMON_SPOINK")]
    V0325PokemonSpoink,
    #[serde(rename = "V0325_POKEMON_SPOINK_NORMAL")]
    V0325PokemonSpoinkNormal,
    #[serde(rename = "V0326_POKEMON_GRUMPIG")]
    V0326PokemonGrumpig,
    #[serde(rename = "V0326_POKEMON_GRUMPIG_NORMAL")]
    V0326PokemonGrumpigNormal,
    #[serde(rename = "V0327_POKEMON_SPINDA")]
    V0327PokemonSpinda,
    #[serde(rename = "V0327_POKEMON_SPINDA_00")]
    V0327PokemonSpinda00,
    #[serde(rename = "V0327_POKEMON_SPINDA_01")]
    V0327PokemonSpinda01,
    #[serde(rename = "V0327_POKEMON_SPINDA_02")]
    V0327PokemonSpinda02,
    #[serde(rename = "V0327_POKEMON_SPINDA_03")]
    V0327PokemonSpinda03,
    #[serde(rename = "V0327_POKEMON_SPINDA_04")]
    V0327PokemonSpinda04,
    #[serde(rename = "V0327_POKEMON_SPINDA_05")]
    V0327PokemonSpinda05,
    #[serde(rename = "V0327_POKEMON_SPINDA_06")]
    V0327PokemonSpinda06,
    #[serde(rename = "V0327_POKEMON_SPINDA_07")]
    V0327PokemonSpinda07,
    #[serde(rename = "V0327_POKEMON_SPINDA_08")]
    V0327PokemonSpinda08,
    #[serde(rename = "V0327_POKEMON_SPINDA_09")]
    V0327PokemonSpinda09,
    #[serde(rename = "V0327_POKEMON_SPINDA_10")]
    V0327PokemonSpinda10,
    #[serde(rename = "V0327_POKEMON_SPINDA_11")]
    V0327PokemonSpinda11,
    #[serde(rename = "V0327_POKEMON_SPINDA_12")]
    V0327PokemonSpinda12,
    #[serde(rename = "V0327_POKEMON_SPINDA_13")]
    V0327PokemonSpinda13,
    #[serde(rename = "V0327_POKEMON_SPINDA_14")]
    V0327PokemonSpinda14,
    #[serde(rename = "V0327_POKEMON_SPINDA_15")]
    V0327PokemonSpinda15,
    #[serde(rename = "V0327_POKEMON_SPINDA_16")]
    V0327PokemonSpinda16,
    #[serde(rename = "V0327_POKEMON_SPINDA_17")]
    V0327PokemonSpinda17,
    #[serde(rename = "V0327_POKEMON_SPINDA_18")]
    V0327PokemonSpinda18,
    #[serde(rename = "V0327_POKEMON_SPINDA_19")]
    V0327PokemonSpinda19,
    #[serde(rename = "V0328_POKEMON_TRAPINCH")]
    V0328PokemonTrapinch,
    #[serde(rename = "V0328_POKEMON_TRAPINCH_NORMAL")]
    V0328PokemonTrapinchNormal,
    #[serde(rename = "V0329_POKEMON_VIBRAVA")]
    V0329PokemonVibrava,
    #[serde(rename = "V0329_POKEMON_VIBRAVA_NORMAL")]
    V0329PokemonVibravaNormal,
    #[serde(rename = "V0330_POKEMON_FLYGON")]
    V0330PokemonFlygon,
    #[serde(rename = "V0330_POKEMON_FLYGON_NORMAL")]
    V0330PokemonFlygonNormal,
    #[serde(rename = "V0331_POKEMON_CACNEA")]
    V0331PokemonCacnea,
    #[serde(rename = "V0331_POKEMON_CACNEA_NORMAL")]
    V0331PokemonCacneaNormal,
    #[serde(rename = "V0332_POKEMON_CACTURNE")]
    V0332PokemonCacturne,
    #[serde(rename = "V0332_POKEMON_CACTURNE_NORMAL")]
    V0332PokemonCacturneNormal,
    #[serde(rename = "V0333_POKEMON_SWABLU")]
    V0333PokemonSwablu,
    #[serde(rename = "V0333_POKEMON_SWABLU_NORMAL")]
    V0333PokemonSwabluNormal,
    #[serde(rename = "V0334_POKEMON_ALTARIA")]
    V0334PokemonAltaria,
    #[serde(rename = "V0334_POKEMON_ALTARIA_NORMAL")]
    V0334PokemonAltariaNormal,
    #[serde(rename = "V0335_POKEMON_ZANGOOSE")]
    V0335PokemonZangoose,
    #[serde(rename = "V0335_POKEMON_ZANGOOSE_NORMAL")]
    V0335PokemonZangooseNormal,
    #[serde(rename = "V0336_POKEMON_SEVIPER")]
    V0336PokemonSeviper,
    #[serde(rename = "V0336_POKEMON_SEVIPER_NORMAL")]
    V0336PokemonSeviperNormal,
    #[serde(rename = "V0337_POKEMON_LUNATONE")]
    V0337PokemonLunatone,
    #[serde(rename = "V0337_POKEMON_LUNATONE_NORMAL")]
    V0337PokemonLunatoneNormal,
    #[serde(rename = "V0338_POKEMON_SOLROCK")]
    V0338PokemonSolrock,
    #[serde(rename = "V0338_POKEMON_SOLROCK_NORMAL")]
    V0338PokemonSolrockNormal,
    #[serde(rename = "V0339_POKEMON_BARBOACH")]
    V0339PokemonBarboach,
    #[serde(rename = "V0339_POKEMON_BARBOACH_NORMAL")]
    V0339PokemonBarboachNormal,
    #[serde(rename = "V0340_POKEMON_WHISCASH")]
    V0340PokemonWhiscash,
    #[serde(rename = "V0340_POKEMON_WHISCASH_NORMAL")]
    V0340PokemonWhiscashNormal,
    #[serde(rename = "V0341_POKEMON_CORPHISH")]
    V0341PokemonCorphish,
    #[serde(rename = "V0341_POKEMON_CORPHISH_NORMAL")]
    V0341PokemonCorphishNormal,
    #[serde(rename = "V0342_POKEMON_CRAWDAUNT")]
    V0342PokemonCrawdaunt,
    #[serde(rename = "V0342_POKEMON_CRAWDAUNT_NORMAL")]
    V0342PokemonCrawdauntNormal,
    #[serde(rename = "V0343_POKEMON_BALTOY")]
    V0343PokemonBaltoy,
    #[serde(rename = "V0343_POKEMON_BALTOY_NORMAL")]
    V0343PokemonBaltoyNormal,
    #[serde(rename = "V0344_POKEMON_CLAYDOL")]
    V0344PokemonClaydol,
    #[serde(rename = "V0344_POKEMON_CLAYDOL_NORMAL")]
    V0344PokemonClaydolNormal,
    #[serde(rename = "V0345_POKEMON_LILEEP")]
    V0345PokemonLileep,
    #[serde(rename = "V0345_POKEMON_LILEEP_NORMAL")]
    V0345PokemonLileepNormal,
    #[serde(rename = "V0346_POKEMON_CRADILY")]
    V0346PokemonCradily,
    #[serde(rename = "V0346_POKEMON_CRADILY_NORMAL")]
    V0346PokemonCradilyNormal,
    #[serde(rename = "V0347_POKEMON_ANORITH")]
    V0347PokemonAnorith,
    #[serde(rename = "V0347_POKEMON_ANORITH_NORMAL")]
    V0347PokemonAnorithNormal,
    #[serde(rename = "V0348_POKEMON_ARMALDO")]
    V0348PokemonArmaldo,
    #[serde(rename = "V0348_POKEMON_ARMALDO_NORMAL")]
    V0348PokemonArmaldoNormal,
    #[serde(rename = "V0349_POKEMON_FEEBAS")]
    V0349PokemonFeebas,
    #[serde(rename = "V0349_POKEMON_FEEBAS_NORMAL")]
    V0349PokemonFeebasNormal,
    #[serde(rename = "V0350_POKEMON_MILOTIC")]
    V0350PokemonMilotic,
    #[serde(rename = "V0350_POKEMON_MILOTIC_NORMAL")]
    V0350PokemonMiloticNormal,
    #[serde(rename = "V0351_POKEMON_CASTFORM")]
    V0351PokemonCastform,
    #[serde(rename = "V0351_POKEMON_CASTFORM_NORMAL")]
    V0351PokemonCastformNormal,
    #[serde(rename = "V0351_POKEMON_CASTFORM_RAINY")]
    V0351PokemonCastformRainy,
    #[serde(rename = "V0351_POKEMON_CASTFORM_SNOWY")]
    V0351PokemonCastformSnowy,
    #[serde(rename = "V0351_POKEMON_CASTFORM_SUNNY")]
    V0351PokemonCastformSunny,
    #[serde(rename = "V0352_POKEMON_KECLEON")]
    V0352PokemonKecleon,
    #[serde(rename = "V0352_POKEMON_KECLEON_NORMAL")]
    V0352PokemonKecleonNormal,
    #[serde(rename = "V0353_POKEMON_SHUPPET")]
    V0353PokemonShuppet,
    #[serde(rename = "V0353_POKEMON_SHUPPET_NORMAL")]
    V0353PokemonShuppetNormal,
    #[serde(rename = "V0354_POKEMON_BANETTE")]
    V0354PokemonBanette,
    #[serde(rename = "V0354_POKEMON_BANETTE_NORMAL")]
    V0354PokemonBanetteNormal,
    #[serde(rename = "V0355_POKEMON_DUSKULL")]
    V0355PokemonDuskull,
    #[serde(rename = "V0355_POKEMON_DUSKULL_NORMAL")]
    V0355PokemonDuskullNormal,
    #[serde(rename = "V0356_POKEMON_DUSCLOPS")]
    V0356PokemonDusclops,
    #[serde(rename = "V0356_POKEMON_DUSCLOPS_NORMAL")]
    V0356PokemonDusclopsNormal,
    #[serde(rename = "V0357_POKEMON_TROPIUS")]
    V0357PokemonTropius,
    #[serde(rename = "V0357_POKEMON_TROPIUS_NORMAL")]
    V0357PokemonTropiusNormal,
    #[serde(rename = "V0358_POKEMON_CHIMECHO")]
    V0358PokemonChimecho,
    #[serde(rename = "V0358_POKEMON_CHIMECHO_NORMAL")]
    V0358PokemonChimechoNormal,
    #[serde(rename = "V0359_POKEMON_ABSOL")]
    V0359PokemonAbsol,
    #[serde(rename = "V0359_POKEMON_ABSOL_NORMAL")]
    V0359PokemonAbsolNormal,
    #[serde(rename = "V0360_POKEMON_WYNAUT")]
    V0360PokemonWynaut,
    #[serde(rename = "V0360_POKEMON_WYNAUT_NORMAL")]
    V0360PokemonWynautNormal,
    #[serde(rename = "V0361_POKEMON_SNORUNT")]
    V0361PokemonSnorunt,
    #[serde(rename = "V0361_POKEMON_SNORUNT_NORMAL")]
    V0361PokemonSnoruntNormal,
    #[serde(rename = "V0362_POKEMON_GLALIE")]
    V0362PokemonGlalie,
    #[serde(rename = "V0362_POKEMON_GLALIE_NORMAL")]
    V0362PokemonGlalieNormal,
    #[serde(rename = "V0363_POKEMON_SPHEAL")]
    V0363PokemonSpheal,
    #[serde(rename = "V0363_POKEMON_SPHEAL_NORMAL")]
    V0363PokemonSphealNormal,
    #[serde(rename = "V0364_POKEMON_SEALEO")]
    V0364PokemonSealeo,
    #[serde(rename = "V0364_POKEMON_SEALEO_NORMAL")]
    V0364PokemonSealeoNormal,
    #[serde(rename = "V0365_POKEMON_WALREIN")]
    V0365PokemonWalrein,
    #[serde(rename = "V0365_POKEMON_WALREIN_NORMAL")]
    V0365PokemonWalreinNormal,
    #[serde(rename = "V0366_POKEMON_CLAMPERL")]
    V0366PokemonClamperl,
    #[serde(rename = "V0366_POKEMON_CLAMPERL_NORMAL")]
    V0366PokemonClamperlNormal,
    #[serde(rename = "V0367_POKEMON_HUNTAIL")]
    V0367PokemonHuntail,
    #[serde(rename = "V0367_POKEMON_HUNTAIL_NORMAL")]
    V0367PokemonHuntailNormal,
    #[serde(rename = "V0368_POKEMON_GOREBYSS")]
    V0368PokemonGorebyss,
    #[serde(rename = "V0368_POKEMON_GOREBYSS_NORMAL")]
    V0368PokemonGorebyssNormal,
    #[serde(rename = "V0369_POKEMON_RELICANTH")]
    V0369PokemonRelicanth,
    #[serde(rename = "V0369_POKEMON_RELICANTH_NORMAL")]
    V0369PokemonRelicanthNormal,
    #[serde(rename = "V0370_POKEMON_LUVDISC")]
    V0370PokemonLuvdisc,
    #[serde(rename = "V0370_POKEMON_LUVDISC_NORMAL")]
    V0370PokemonLuvdiscNormal,
    #[serde(rename = "V0371_POKEMON_BAGON")]
    V0371PokemonBagon,
    #[serde(rename = "V0371_POKEMON_BAGON_NORMAL")]
    V0371PokemonBagonNormal,
    #[serde(rename = "V0372_POKEMON_SHELGON")]
    V0372PokemonShelgon,
    #[serde(rename = "V0372_POKEMON_SHELGON_NORMAL")]
    V0372PokemonShelgonNormal,
    #[serde(rename = "V0373_POKEMON_SALAMENCE")]
    V0373PokemonSalamence,
    #[serde(rename = "V0373_POKEMON_SALAMENCE_NORMAL")]
    V0373PokemonSalamenceNormal,
    #[serde(rename = "V0374_POKEMON_BELDUM")]
    V0374PokemonBeldum,
    #[serde(rename = "V0374_POKEMON_BELDUM_NORMAL")]
    V0374PokemonBeldumNormal,
    #[serde(rename = "V0375_POKEMON_METANG")]
    V0375PokemonMetang,
    #[serde(rename = "V0375_POKEMON_METANG_NORMAL")]
    V0375PokemonMetangNormal,
    #[serde(rename = "V0376_POKEMON_METAGROSS")]
    V0376PokemonMetagross,
    #[serde(rename = "V0376_POKEMON_METAGROSS_NORMAL")]
    V0376PokemonMetagrossNormal,
    #[serde(rename = "V0377_POKEMON_REGIROCK")]
    V0377PokemonRegirock,
    #[serde(rename = "V0377_POKEMON_REGIROCK_NORMAL")]
    V0377PokemonRegirockNormal,
    #[serde(rename = "V0378_POKEMON_REGICE")]
    V0378PokemonRegice,
    #[serde(rename = "V0378_POKEMON_REGICE_NORMAL")]
    V0378PokemonRegiceNormal,
    #[serde(rename = "V0379_POKEMON_REGISTEEL")]
    V0379PokemonRegisteel,
    #[serde(rename = "V0379_POKEMON_REGISTEEL_NORMAL")]
    V0379PokemonRegisteelNormal,
    #[serde(rename = "V0380_POKEMON_LATIAS")]
    V0380PokemonLatias,
    #[serde(rename = "V0380_POKEMON_LATIAS_NORMAL")]
    V0380PokemonLatiasNormal,
    #[serde(rename = "V0380_POKEMON_LATIAS_S")]
    V0380PokemonLatiasS,
    #[serde(rename = "V0381_POKEMON_LATIOS")]
    V0381PokemonLatios,
    #[serde(rename = "V0381_POKEMON_LATIOS_NORMAL")]
    V0381PokemonLatiosNormal,
    #[serde(rename = "V0381_POKEMON_LATIOS_S")]
    V0381PokemonLatiosS,
    #[serde(rename = "V0382_POKEMON_KYOGRE")]
    V0382PokemonKyogre,
    #[serde(rename = "V0382_POKEMON_KYOGRE_NORMAL")]
    V0382PokemonKyogreNormal,
    #[serde(rename = "V0383_POKEMON_GROUDON")]
    V0383PokemonGroudon,
    #[serde(rename = "V0383_POKEMON_GROUDON_NORMAL")]
    V0383PokemonGroudonNormal,
    #[serde(rename = "V0384_POKEMON_RAYQUAZA")]
    V0384PokemonRayquaza,
    #[serde(rename = "V0384_POKEMON_RAYQUAZA_NORMAL")]
    V0384PokemonRayquazaNormal,
    #[serde(rename = "V0385_POKEMON_JIRACHI")]
    V0385PokemonJirachi,
    #[serde(rename = "V0385_POKEMON_JIRACHI_NORMAL")]
    V0385PokemonJirachiNormal,
    #[serde(rename = "V0386_POKEMON_DEOXYS")]
    V0386PokemonDeoxys,
    #[serde(rename = "V0386_POKEMON_DEOXYS_ATTACK")]
    V0386PokemonDeoxysAttack,
    #[serde(rename = "V0386_POKEMON_DEOXYS_DEFENSE")]
    V0386PokemonDeoxysDefense,
    #[serde(rename = "V0386_POKEMON_DEOXYS_NORMAL")]
    V0386PokemonDeoxysNormal,
    #[serde(rename = "V0386_POKEMON_DEOXYS_SPEED")]
    V0386PokemonDeoxysSpeed,
    #[serde(rename = "V0387_POKEMON_TURTWIG")]
    V0387PokemonTurtwig,
    #[serde(rename = "V0387_POKEMON_TURTWIG_NORMAL")]
    V0387PokemonTurtwigNormal,
    #[serde(rename = "V0388_POKEMON_GROTLE")]
    V0388PokemonGrotle,
    #[serde(rename = "V0388_POKEMON_GROTLE_NORMAL")]
    V0388PokemonGrotleNormal,
    #[serde(rename = "V0389_POKEMON_TORTERRA")]
    V0389PokemonTorterra,
    #[serde(rename = "V0389_POKEMON_TORTERRA_NORMAL")]
    V0389PokemonTorterraNormal,
    #[serde(rename = "V0390_POKEMON_CHIMCHAR")]
    V0390PokemonChimchar,
    #[serde(rename = "V0390_POKEMON_CHIMCHAR_NORMAL")]
    V0390PokemonChimcharNormal,
    #[serde(rename = "V0391_POKEMON_MONFERNO")]
    V0391PokemonMonferno,
    #[serde(rename = "V0391_POKEMON_MONFERNO_NORMAL")]
    V0391PokemonMonfernoNormal,
    #[serde(rename = "V0392_POKEMON_INFERNAPE")]
    V0392PokemonInfernape,
    #[serde(rename = "V0392_POKEMON_INFERNAPE_NORMAL")]
    V0392PokemonInfernapeNormal,
    #[serde(rename = "V0393_POKEMON_PIPLUP")]
    V0393PokemonPiplup,
    #[serde(rename = "V0393_POKEMON_PIPLUP_NORMAL")]
    V0393PokemonPiplupNormal,
    #[serde(rename = "V0394_POKEMON_PRINPLUP")]
    V0394PokemonPrinplup,
    #[serde(rename = "V0394_POKEMON_PRINPLUP_NORMAL")]
    V0394PokemonPrinplupNormal,
    #[serde(rename = "V0395_POKEMON_EMPOLEON")]
    V0395PokemonEmpoleon,
    #[serde(rename = "V0395_POKEMON_EMPOLEON_NORMAL")]
    V0395PokemonEmpoleonNormal,
    #[serde(rename = "V0396_POKEMON_STARLY")]
    V0396PokemonStarly,
    #[serde(rename = "V0396_POKEMON_STARLY_NORMAL")]
    V0396PokemonStarlyNormal,
    #[serde(rename = "V0397_POKEMON_STARAVIA")]
    V0397PokemonStaravia,
    #[serde(rename = "V0397_POKEMON_STARAVIA_NORMAL")]
    V0397PokemonStaraviaNormal,
    #[serde(rename = "V0398_POKEMON_STARAPTOR")]
    V0398PokemonStaraptor,
    #[serde(rename = "V0398_POKEMON_STARAPTOR_NORMAL")]
    V0398PokemonStaraptorNormal,
    #[serde(rename = "V0399_POKEMON_BIDOOF")]
    V0399PokemonBidoof,
    #[serde(rename = "V0399_POKEMON_BIDOOF_NORMAL")]
    V0399PokemonBidoofNormal,
    #[serde(rename = "V0400_POKEMON_BIBAREL")]
    V0400PokemonBibarel,
    #[serde(rename = "V0400_POKEMON_BIBAREL_NORMAL")]
    V0400PokemonBibarelNormal,
    #[serde(rename = "V0401_POKEMON_KRICKETOT")]
    V0401PokemonKricketot,
    #[serde(rename = "V0401_POKEMON_KRICKETOT_NORMAL")]
    V0401PokemonKricketotNormal,
    #[serde(rename = "V0402_POKEMON_KRICKETUNE")]
    V0402PokemonKricketune,
    #[serde(rename = "V0402_POKEMON_KRICKETUNE_NORMAL")]
    V0402PokemonKricketuneNormal,
    #[serde(rename = "V0403_POKEMON_SHINX")]
    V0403PokemonShinx,
    #[serde(rename = "V0403_POKEMON_SHINX_NORMAL")]
    V0403PokemonShinxNormal,
    #[serde(rename = "V0404_POKEMON_LUXIO")]
    V0404PokemonLuxio,
    #[serde(rename = "V0404_POKEMON_LUXIO_NORMAL")]
    V0404PokemonLuxioNormal,
    #[serde(rename = "V0405_POKEMON_LUXRAY")]
    V0405PokemonLuxray,
    #[serde(rename = "V0405_POKEMON_LUXRAY_NORMAL")]
    V0405PokemonLuxrayNormal,
    #[serde(rename = "V0406_POKEMON_BUDEW")]
    V0406PokemonBudew,
    #[serde(rename = "V0406_POKEMON_BUDEW_NORMAL")]
    V0406PokemonBudewNormal,
    #[serde(rename = "V0407_POKEMON_ROSERADE")]
    V0407PokemonRoserade,
    #[serde(rename = "V0407_POKEMON_ROSERADE_NORMAL")]
    V0407PokemonRoseradeNormal,
    #[serde(rename = "V0408_POKEMON_CRANIDOS")]
    V0408PokemonCranidos,
    #[serde(rename = "V0408_POKEMON_CRANIDOS_NORMAL")]
    V0408PokemonCranidosNormal,
    #[serde(rename = "V0409_POKEMON_RAMPARDOS")]
    V0409PokemonRampardos,
    #[serde(rename = "V0409_POKEMON_RAMPARDOS_NORMAL")]
    V0409PokemonRampardosNormal,
    #[serde(rename = "V0410_POKEMON_SHIELDON")]
    V0410PokemonShieldon,
    #[serde(rename = "V0410_POKEMON_SHIELDON_NORMAL")]
    V0410PokemonShieldonNormal,
    #[serde(rename = "V0411_POKEMON_BASTIODON")]
    V0411PokemonBastiodon,
    #[serde(rename = "V0411_POKEMON_BASTIODON_NORMAL")]
    V0411PokemonBastiodonNormal,
    #[serde(rename = "V0412_POKEMON_BURMY")]
    V0412PokemonBurmy,
    #[serde(rename = "V0412_POKEMON_BURMY_PLANT")]
    V0412PokemonBurmyPlant,
    #[serde(rename = "V0412_POKEMON_BURMY_SANDY")]
    V0412PokemonBurmySandy,
    #[serde(rename = "V0412_POKEMON_BURMY_TRASH")]
    V0412PokemonBurmyTrash,
    #[serde(rename = "V0413_POKEMON_WORMADAM")]
    V0413PokemonWormadam,
    #[serde(rename = "V0413_POKEMON_WORMADAM_PLANT")]
    V0413PokemonWormadamPlant,
    #[serde(rename = "V0413_POKEMON_WORMADAM_SANDY")]
    V0413PokemonWormadamSandy,
    #[serde(rename = "V0413_POKEMON_WORMADAM_TRASH")]
    V0413PokemonWormadamTrash,
    #[serde(rename = "V0414_POKEMON_MOTHIM")]
    V0414PokemonMothim,
    #[serde(rename = "V0414_POKEMON_MOTHIM_NORMAL")]
    V0414PokemonMothimNormal,
    #[serde(rename = "V0415_POKEMON_COMBEE")]
    V0415PokemonCombee,
    #[serde(rename = "V0415_POKEMON_COMBEE_NORMAL")]
    V0415PokemonCombeeNormal,
    #[serde(rename = "V0416_POKEMON_VESPIQUEN")]
    V0416PokemonVespiquen,
    #[serde(rename = "V0416_POKEMON_VESPIQUEN_NORMAL")]
    V0416PokemonVespiquenNormal,
    #[serde(rename = "V0417_POKEMON_PACHIRISU")]
    V0417PokemonPachirisu,
    #[serde(rename = "V0417_POKEMON_PACHIRISU_NORMAL")]
    V0417PokemonPachirisuNormal,
    #[serde(rename = "V0418_POKEMON_BUIZEL")]
    V0418PokemonBuizel,
    #[serde(rename = "V0418_POKEMON_BUIZEL_NORMAL")]
    V0418PokemonBuizelNormal,
    #[serde(rename = "V0419_POKEMON_FLOATZEL")]
    V0419PokemonFloatzel,
    #[serde(rename = "V0419_POKEMON_FLOATZEL_NORMAL")]
    V0419PokemonFloatzelNormal,
    #[serde(rename = "V0420_POKEMON_CHERUBI")]
    V0420PokemonCherubi,
    #[serde(rename = "V0420_POKEMON_CHERUBI_NORMAL")]
    V0420PokemonCherubiNormal,
    #[serde(rename = "V0421_POKEMON_CHERRIM")]
    V0421PokemonCherrim,
    #[serde(rename = "V0421_POKEMON_CHERRIM_OVERCAST")]
    V0421PokemonCherrimOvercast,
    #[serde(rename = "V0421_POKEMON_CHERRIM_SUNNY")]
    V0421PokemonCherrimSunny,
    #[serde(rename = "V0422_POKEMON_SHELLOS")]
    V0422PokemonShellos,
    #[serde(rename = "V0422_POKEMON_SHELLOS_EAST_SEA")]
    V0422PokemonShellosEastSea,
    #[serde(rename = "V0422_POKEMON_SHELLOS_WEST_SEA")]
    V0422PokemonShellosWestSea,
    #[serde(rename = "V0423_POKEMON_GASTRODON")]
    V0423PokemonGastrodon,
    #[serde(rename = "V0423_POKEMON_GASTRODON_EAST_SEA")]
    V0423PokemonGastrodonEastSea,
    #[serde(rename = "V0423_POKEMON_GASTRODON_WEST_SEA")]
    V0423PokemonGastrodonWestSea,
    #[serde(rename = "V0424_POKEMON_AMBIPOM")]
    V0424PokemonAmbipom,
    #[serde(rename = "V0424_POKEMON_AMBIPOM_NORMAL")]
    V0424PokemonAmbipomNormal,
    #[serde(rename = "V0425_POKEMON_DRIFLOON")]
    V0425PokemonDrifloon,
    #[serde(rename = "V0425_POKEMON_DRIFLOON_NORMAL")]
    V0425PokemonDrifloonNormal,
    #[serde(rename = "V0426_POKEMON_DRIFBLIM")]
    V0426PokemonDrifblim,
    #[serde(rename = "V0426_POKEMON_DRIFBLIM_NORMAL")]
    V0426PokemonDrifblimNormal,
    #[serde(rename = "V0427_POKEMON_BUNEARY")]
    V0427PokemonBuneary,
    #[serde(rename = "V0427_POKEMON_BUNEARY_NORMAL")]
    V0427PokemonBunearyNormal,
    #[serde(rename = "V0428_POKEMON_LOPUNNY")]
    V0428PokemonLopunny,
    #[serde(rename = "V0428_POKEMON_LOPUNNY_NORMAL")]
    V0428PokemonLopunnyNormal,
    #[serde(rename = "V0429_POKEMON_MISMAGIUS")]
    V0429PokemonMismagius,
    #[serde(rename = "V0429_POKEMON_MISMAGIUS_NORMAL")]
    V0429PokemonMismagiusNormal,
    #[serde(rename = "V0430_POKEMON_HONCHKROW")]
    V0430PokemonHonchkrow,
    #[serde(rename = "V0430_POKEMON_HONCHKROW_NORMAL")]
    V0430PokemonHonchkrowNormal,
    #[serde(rename = "V0431_POKEMON_GLAMEOW")]
    V0431PokemonGlameow,
    #[serde(rename = "V0431_POKEMON_GLAMEOW_NORMAL")]
    V0431PokemonGlameowNormal,
    #[serde(rename = "V0432_POKEMON_PURUGLY")]
    V0432PokemonPurugly,
    #[serde(rename = "V0432_POKEMON_PURUGLY_NORMAL")]
    V0432PokemonPuruglyNormal,
    #[serde(rename = "V0433_POKEMON_CHINGLING")]
    V0433PokemonChingling,
    #[serde(rename = "V0433_POKEMON_CHINGLING_NORMAL")]
    V0433PokemonChinglingNormal,
    #[serde(rename = "V0434_POKEMON_STUNKY")]
    V0434PokemonStunky,
    #[serde(rename = "V0434_POKEMON_STUNKY_NORMAL")]
    V0434PokemonStunkyNormal,
    #[serde(rename = "V0435_POKEMON_SKUNTANK")]
    V0435PokemonSkuntank,
    #[serde(rename = "V0435_POKEMON_SKUNTANK_NORMAL")]
    V0435PokemonSkuntankNormal,
    #[serde(rename = "V0436_POKEMON_BRONZOR")]
    V0436PokemonBronzor,
    #[serde(rename = "V0436_POKEMON_BRONZOR_NORMAL")]
    V0436PokemonBronzorNormal,
    #[serde(rename = "V0437_POKEMON_BRONZONG")]
    V0437PokemonBronzong,
    #[serde(rename = "V0437_POKEMON_BRONZONG_NORMAL")]
    V0437PokemonBronzongNormal,
    #[serde(rename = "V0438_POKEMON_BONSLY")]
    V0438PokemonBonsly,
    #[serde(rename = "V0438_POKEMON_BONSLY_NORMAL")]
    V0438PokemonBonslyNormal,
    #[serde(rename = "V0439_POKEMON_MIME_JR")]
    V0439PokemonMimeJr,
    #[serde(rename = "V0439_POKEMON_MIME_JR_NORMAL")]
    V0439PokemonMimeJrNormal,
    #[serde(rename = "V0440_POKEMON_HAPPINY")]
    V0440PokemonHappiny,
    #[serde(rename = "V0440_POKEMON_HAPPINY_NORMAL")]
    V0440PokemonHappinyNormal,
    #[serde(rename = "V0441_POKEMON_CHATOT")]
    V0441PokemonChatot,
    #[serde(rename = "V0441_POKEMON_CHATOT_NORMAL")]
    V0441PokemonChatotNormal,
    #[serde(rename = "V0442_POKEMON_SPIRITOMB")]
    V0442PokemonSpiritomb,
    #[serde(rename = "V0442_POKEMON_SPIRITOMB_NORMAL")]
    V0442PokemonSpiritombNormal,
    #[serde(rename = "V0443_POKEMON_GIBLE")]
    V0443PokemonGible,
    #[serde(rename = "V0443_POKEMON_GIBLE_NORMAL")]
    V0443PokemonGibleNormal,
    #[serde(rename = "V0444_POKEMON_GABITE")]
    V0444PokemonGabite,
    #[serde(rename = "V0444_POKEMON_GABITE_NORMAL")]
    V0444PokemonGabiteNormal,
    #[serde(rename = "V0445_POKEMON_GARCHOMP")]
    V0445PokemonGarchomp,
    #[serde(rename = "V0445_POKEMON_GARCHOMP_NORMAL")]
    V0445PokemonGarchompNormal,
    #[serde(rename = "V0446_POKEMON_MUNCHLAX")]
    V0446PokemonMunchlax,
    #[serde(rename = "V0446_POKEMON_MUNCHLAX_NORMAL")]
    V0446PokemonMunchlaxNormal,
    #[serde(rename = "V0447_POKEMON_RIOLU")]
    V0447PokemonRiolu,
    #[serde(rename = "V0447_POKEMON_RIOLU_NORMAL")]
    V0447PokemonRioluNormal,
    #[serde(rename = "V0448_POKEMON_LUCARIO")]
    V0448PokemonLucario,
    #[serde(rename = "V0448_POKEMON_LUCARIO_NORMAL")]
    V0448PokemonLucarioNormal,
    #[serde(rename = "V0449_POKEMON_HIPPOPOTAS")]
    V0449PokemonHippopotas,
    #[serde(rename = "V0449_POKEMON_HIPPOPOTAS_NORMAL")]
    V0449PokemonHippopotasNormal,
    #[serde(rename = "V0450_POKEMON_HIPPOWDON")]
    V0450PokemonHippowdon,
    #[serde(rename = "V0450_POKEMON_HIPPOWDON_NORMAL")]
    V0450PokemonHippowdonNormal,
    #[serde(rename = "V0451_POKEMON_SKORUPI")]
    V0451PokemonSkorupi,
    #[serde(rename = "V0451_POKEMON_SKORUPI_NORMAL")]
    V0451PokemonSkorupiNormal,
    #[serde(rename = "V0452_POKEMON_DRAPION")]
    V0452PokemonDrapion,
    #[serde(rename = "V0452_POKEMON_DRAPION_NORMAL")]
    V0452PokemonDrapionNormal,
    #[serde(rename = "V0453_POKEMON_CROAGUNK")]
    V0453PokemonCroagunk,
    #[serde(rename = "V0453_POKEMON_CROAGUNK_NORMAL")]
    V0453PokemonCroagunkNormal,
    #[serde(rename = "V0454_POKEMON_TOXICROAK")]
    V0454PokemonToxicroak,
    #[serde(rename = "V0454_POKEMON_TOXICROAK_NORMAL")]
    V0454PokemonToxicroakNormal,
    #[serde(rename = "V0455_POKEMON_CARNIVINE")]
    V0455PokemonCarnivine,
    #[serde(rename = "V0455_POKEMON_CARNIVINE_NORMAL")]
    V0455PokemonCarnivineNormal,
    #[serde(rename = "V0456_POKEMON_FINNEON")]
    V0456PokemonFinneon,
    #[serde(rename = "V0456_POKEMON_FINNEON_NORMAL")]
    V0456PokemonFinneonNormal,
    #[serde(rename = "V0457_POKEMON_LUMINEON")]
    V0457PokemonLumineon,
    #[serde(rename = "V0457_POKEMON_LUMINEON_NORMAL")]
    V0457PokemonLumineonNormal,
    #[serde(rename = "V0458_POKEMON_MANTYKE")]
    V0458PokemonMantyke,
    #[serde(rename = "V0458_POKEMON_MANTYKE_NORMAL")]
    V0458PokemonMantykeNormal,
    #[serde(rename = "V0459_POKEMON_SNOVER")]
    V0459PokemonSnover,
    #[serde(rename = "V0459_POKEMON_SNOVER_NORMAL")]
    V0459PokemonSnoverNormal,
    #[serde(rename = "V0460_POKEMON_ABOMASNOW")]
    V0460PokemonAbomasnow,
    #[serde(rename = "V0460_POKEMON_ABOMASNOW_NORMAL")]
    V0460PokemonAbomasnowNormal,
    #[serde(rename = "V0461_POKEMON_WEAVILE")]
    V0461PokemonWeavile,
    #[serde(rename = "V0461_POKEMON_WEAVILE_NORMAL")]
    V0461PokemonWeavileNormal,
    #[serde(rename = "V0462_POKEMON_MAGNEZONE")]
    V0462PokemonMagnezone,
    #[serde(rename = "V0462_POKEMON_MAGNEZONE_NORMAL")]
    V0462PokemonMagnezoneNormal,
    #[serde(rename = "V0463_POKEMON_LICKILICKY")]
    V0463PokemonLickilicky,
    #[serde(rename = "V0463_POKEMON_LICKILICKY_NORMAL")]
    V0463PokemonLickilickyNormal,
    #[serde(rename = "V0464_POKEMON_RHYPERIOR")]
    V0464PokemonRhyperior,
    #[serde(rename = "V0464_POKEMON_RHYPERIOR_NORMAL")]
    V0464PokemonRhyperiorNormal,
    #[serde(rename = "V0465_POKEMON_TANGROWTH")]
    V0465PokemonTangrowth,
    #[serde(rename = "V0465_POKEMON_TANGROWTH_NORMAL")]
    V0465PokemonTangrowthNormal,
    #[serde(rename = "V0466_POKEMON_ELECTIVIRE")]
    V0466PokemonElectivire,
    #[serde(rename = "V0466_POKEMON_ELECTIVIRE_NORMAL")]
    V0466PokemonElectivireNormal,
    #[serde(rename = "V0467_POKEMON_MAGMORTAR")]
    V0467PokemonMagmortar,
    #[serde(rename = "V0467_POKEMON_MAGMORTAR_NORMAL")]
    V0467PokemonMagmortarNormal,
    #[serde(rename = "V0468_POKEMON_TOGEKISS")]
    V0468PokemonTogekiss,
    #[serde(rename = "V0468_POKEMON_TOGEKISS_NORMAL")]
    V0468PokemonTogekissNormal,
    #[serde(rename = "V0469_POKEMON_YANMEGA")]
    V0469PokemonYanmega,
    #[serde(rename = "V0469_POKEMON_YANMEGA_NORMAL")]
    V0469PokemonYanmegaNormal,
    #[serde(rename = "V0470_POKEMON_LEAFEON")]
    V0470PokemonLeafeon,
    #[serde(rename = "V0470_POKEMON_LEAFEON_NORMAL")]
    V0470PokemonLeafeonNormal,
    #[serde(rename = "V0471_POKEMON_GLACEON")]
    V0471PokemonGlaceon,
    #[serde(rename = "V0471_POKEMON_GLACEON_NORMAL")]
    V0471PokemonGlaceonNormal,
    #[serde(rename = "V0472_POKEMON_GLISCOR")]
    V0472PokemonGliscor,
    #[serde(rename = "V0472_POKEMON_GLISCOR_NORMAL")]
    V0472PokemonGliscorNormal,
    #[serde(rename = "V0473_POKEMON_MAMOSWINE")]
    V0473PokemonMamoswine,
    #[serde(rename = "V0473_POKEMON_MAMOSWINE_NORMAL")]
    V0473PokemonMamoswineNormal,
    #[serde(rename = "V0474_POKEMON_PORYGON_Z")]
    V0474PokemonPorygonZ,
    #[serde(rename = "V0474_POKEMON_PORYGON_Z_NORMAL")]
    V0474PokemonPorygonZNormal,
    #[serde(rename = "V0475_POKEMON_GALLADE")]
    V0475PokemonGallade,
    #[serde(rename = "V0475_POKEMON_GALLADE_NORMAL")]
    V0475PokemonGalladeNormal,
    #[serde(rename = "V0476_POKEMON_PROBOPASS")]
    V0476PokemonProbopass,
    #[serde(rename = "V0476_POKEMON_PROBOPASS_NORMAL")]
    V0476PokemonProbopassNormal,
    #[serde(rename = "V0477_POKEMON_DUSKNOIR")]
    V0477PokemonDusknoir,
    #[serde(rename = "V0477_POKEMON_DUSKNOIR_NORMAL")]
    V0477PokemonDusknoirNormal,
    #[serde(rename = "V0478_POKEMON_FROSLASS")]
    V0478PokemonFroslass,
    #[serde(rename = "V0478_POKEMON_FROSLASS_NORMAL")]
    V0478PokemonFroslassNormal,
    #[serde(rename = "V0479_POKEMON_ROTOM")]
    V0479PokemonRotom,
    #[serde(rename = "V0479_POKEMON_ROTOM_FAN")]
    V0479PokemonRotomFan,
    #[serde(rename = "V0479_POKEMON_ROTOM_FROST")]
    V0479PokemonRotomFrost,
    #[serde(rename = "V0479_POKEMON_ROTOM_HEAT")]
    V0479PokemonRotomHeat,
    #[serde(rename = "V0479_POKEMON_ROTOM_MOW")]
    V0479PokemonRotomMow,
    #[serde(rename = "V0479_POKEMON_ROTOM_NORMAL")]
    V0479PokemonRotomNormal,
    #[serde(rename = "V0479_POKEMON_ROTOM_WASH")]
    V0479PokemonRotomWash,
    #[serde(rename = "V0480_POKEMON_UXIE")]
    V0480PokemonUxie,
    #[serde(rename = "V0480_POKEMON_UXIE_NORMAL")]
    V0480PokemonUxieNormal,
    #[serde(rename = "V0481_POKEMON_MESPRIT")]
    V0481PokemonMesprit,
    #[serde(rename = "V0481_POKEMON_MESPRIT_NORMAL")]
    V0481PokemonMespritNormal,
    #[serde(rename = "V0482_POKEMON_AZELF")]
    V0482PokemonAzelf,
    #[serde(rename = "V0482_POKEMON_AZELF_NORMAL")]
    V0482PokemonAzelfNormal,
    #[serde(rename = "V0483_POKEMON_DIALGA")]
    V0483PokemonDialga,
    #[serde(rename = "V0483_POKEMON_DIALGA_NORMAL")]
    V0483PokemonDialgaNormal,
    #[serde(rename = "V0483_POKEMON_DIALGA_ORIGIN")]
    V0483PokemonDialgaOrigin,
    #[serde(rename = "V0484_POKEMON_PALKIA")]
    V0484PokemonPalkia,
    #[serde(rename = "V0484_POKEMON_PALKIA_NORMAL")]
    V0484PokemonPalkiaNormal,
    #[serde(rename = "V0484_POKEMON_PALKIA_ORIGIN")]
    V0484PokemonPalkiaOrigin,
    #[serde(rename = "V0485_POKEMON_HEATRAN")]
    V0485PokemonHeatran,
    #[serde(rename = "V0485_POKEMON_HEATRAN_NORMAL")]
    V0485PokemonHeatranNormal,
    #[serde(rename = "V0486_POKEMON_REGIGIGAS")]
    V0486PokemonRegigigas,
    #[serde(rename = "V0486_POKEMON_REGIGIGAS_NORMAL")]
    V0486PokemonRegigigasNormal,
    #[serde(rename = "V0487_POKEMON_GIRATINA")]
    V0487PokemonGiratina,
    #[serde(rename = "V0487_POKEMON_GIRATINA_ALTERED")]
    V0487PokemonGiratinaAltered,
    #[serde(rename = "V0487_POKEMON_GIRATINA_ORIGIN")]
    V0487PokemonGiratinaOrigin,
    #[serde(rename = "V0488_POKEMON_CRESSELIA")]
    V0488PokemonCresselia,
    #[serde(rename = "V0488_POKEMON_CRESSELIA_NORMAL")]
    V0488PokemonCresseliaNormal,
    #[serde(rename = "V0489_POKEMON_PHIONE")]
    V0489PokemonPhione,
    #[serde(rename = "V0489_POKEMON_PHIONE_NORMAL")]
    V0489PokemonPhioneNormal,
    #[serde(rename = "V0490_POKEMON_MANAPHY")]
    V0490PokemonManaphy,
    #[serde(rename = "V0490_POKEMON_MANAPHY_NORMAL")]
    V0490PokemonManaphyNormal,
    #[serde(rename = "V0491_POKEMON_DARKRAI")]
    V0491PokemonDarkrai,
    #[serde(rename = "V0491_POKEMON_DARKRAI_NORMAL")]
    V0491PokemonDarkraiNormal,
    #[serde(rename = "V0492_POKEMON_SHAYMIN")]
    V0492PokemonShaymin,
    #[serde(rename = "V0492_POKEMON_SHAYMIN_LAND")]
    V0492PokemonShayminLand,
    #[serde(rename = "V0492_POKEMON_SHAYMIN_SKY")]
    V0492PokemonShayminSky,
    #[serde(rename = "V0493_POKEMON_ARCEUS")]
    V0493PokemonArceus,
    #[serde(rename = "V0493_POKEMON_ARCEUS_BUG")]
    V0493PokemonArceusBug,
    #[serde(rename = "V0493_POKEMON_ARCEUS_DARK")]
    V0493PokemonArceusDark,
    #[serde(rename = "V0493_POKEMON_ARCEUS_DRAGON")]
    V0493PokemonArceusDragon,
    #[serde(rename = "V0493_POKEMON_ARCEUS_ELECTRIC")]
    V0493PokemonArceusElectric,
    #[serde(rename = "V0493_POKEMON_ARCEUS_FAIRY")]
    V0493PokemonArceusFairy,
    #[serde(rename = "V0493_POKEMON_ARCEUS_FIGHTING")]
    V0493PokemonArceusFighting,
    #[serde(rename = "V0493_POKEMON_ARCEUS_FIRE")]
    V0493PokemonArceusFire,
    #[serde(rename = "V0493_POKEMON_ARCEUS_FLYING")]
    V0493PokemonArceusFlying,
    #[serde(rename = "V0493_POKEMON_ARCEUS_GHOST")]
    V0493PokemonArceusGhost,
    #[serde(rename = "V0493_POKEMON_ARCEUS_GRASS")]
    V0493PokemonArceusGrass,
    #[serde(rename = "V0493_POKEMON_ARCEUS_GROUND")]
    V0493PokemonArceusGround,
    #[serde(rename = "V0493_POKEMON_ARCEUS_ICE")]
    V0493PokemonArceusIce,
    #[serde(rename = "V0493_POKEMON_ARCEUS_NORMAL")]
    V0493PokemonArceusNormal,
    #[serde(rename = "V0493_POKEMON_ARCEUS_POISON")]
    V0493PokemonArceusPoison,
    #[serde(rename = "V0493_POKEMON_ARCEUS_PSYCHIC")]
    V0493PokemonArceusPsychic,
    #[serde(rename = "V0493_POKEMON_ARCEUS_ROCK")]
    V0493PokemonArceusRock,
    #[serde(rename = "V0493_POKEMON_ARCEUS_STEEL")]
    V0493PokemonArceusSteel,
    #[serde(rename = "V0493_POKEMON_ARCEUS_WATER")]
    V0493PokemonArceusWater,
    #[serde(rename = "V0494_POKEMON_VICTINI")]
    V0494PokemonVictini,
    #[serde(rename = "V0494_POKEMON_VICTINI_NORMAL")]
    V0494PokemonVictiniNormal,
    #[serde(rename = "V0495_POKEMON_SNIVY")]
    V0495PokemonSnivy,
    #[serde(rename = "V0495_POKEMON_SNIVY_NORMAL")]
    V0495PokemonSnivyNormal,
    #[serde(rename = "V0496_POKEMON_SERVINE")]
    V0496PokemonServine,
    #[serde(rename = "V0496_POKEMON_SERVINE_NORMAL")]
    V0496PokemonServineNormal,
    #[serde(rename = "V0497_POKEMON_SERPERIOR")]
    V0497PokemonSerperior,
    #[serde(rename = "V0497_POKEMON_SERPERIOR_NORMAL")]
    V0497PokemonSerperiorNormal,
    #[serde(rename = "V0498_POKEMON_TEPIG")]
    V0498PokemonTepig,
    #[serde(rename = "V0498_POKEMON_TEPIG_NORMAL")]
    V0498PokemonTepigNormal,
    #[serde(rename = "V0499_POKEMON_PIGNITE")]
    V0499PokemonPignite,
    #[serde(rename = "V0499_POKEMON_PIGNITE_NORMAL")]
    V0499PokemonPigniteNormal,
    #[serde(rename = "V0500_POKEMON_EMBOAR")]
    V0500PokemonEmboar,
    #[serde(rename = "V0500_POKEMON_EMBOAR_NORMAL")]
    V0500PokemonEmboarNormal,
    #[serde(rename = "V0501_POKEMON_OSHAWOTT")]
    V0501PokemonOshawott,
    #[serde(rename = "V0501_POKEMON_OSHAWOTT_NORMAL")]
    V0501PokemonOshawottNormal,
    #[serde(rename = "V0502_POKEMON_DEWOTT")]
    V0502PokemonDewott,
    #[serde(rename = "V0502_POKEMON_DEWOTT_NORMAL")]
    V0502PokemonDewottNormal,
    #[serde(rename = "V0503_POKEMON_SAMUROTT")]
    V0503PokemonSamurott,
    #[serde(rename = "V0503_POKEMON_SAMUROTT_HISUIAN")]
    V0503PokemonSamurottHisuian,
    #[serde(rename = "V0503_POKEMON_SAMUROTT_NORMAL")]
    V0503PokemonSamurottNormal,
    #[serde(rename = "V0504_POKEMON_PATRAT")]
    V0504PokemonPatrat,
    #[serde(rename = "V0504_POKEMON_PATRAT_NORMAL")]
    V0504PokemonPatratNormal,
    #[serde(rename = "V0505_POKEMON_WATCHOG")]
    V0505PokemonWatchog,
    #[serde(rename = "V0505_POKEMON_WATCHOG_NORMAL")]
    V0505PokemonWatchogNormal,
    #[serde(rename = "V0506_POKEMON_LILLIPUP")]
    V0506PokemonLillipup,
    #[serde(rename = "V0506_POKEMON_LILLIPUP_NORMAL")]
    V0506PokemonLillipupNormal,
    #[serde(rename = "V0507_POKEMON_HERDIER")]
    V0507PokemonHerdier,
    #[serde(rename = "V0507_POKEMON_HERDIER_NORMAL")]
    V0507PokemonHerdierNormal,
    #[serde(rename = "V0508_POKEMON_STOUTLAND")]
    V0508PokemonStoutland,
    #[serde(rename = "V0508_POKEMON_STOUTLAND_NORMAL")]
    V0508PokemonStoutlandNormal,
    #[serde(rename = "V0509_POKEMON_PURRLOIN")]
    V0509PokemonPurrloin,
    #[serde(rename = "V0509_POKEMON_PURRLOIN_NORMAL")]
    V0509PokemonPurrloinNormal,
    #[serde(rename = "V0510_POKEMON_LIEPARD")]
    V0510PokemonLiepard,
    #[serde(rename = "V0510_POKEMON_LIEPARD_NORMAL")]
    V0510PokemonLiepardNormal,
    #[serde(rename = "V0511_POKEMON_PANSAGE")]
    V0511PokemonPansage,
    #[serde(rename = "V0511_POKEMON_PANSAGE_NORMAL")]
    V0511PokemonPansageNormal,
    #[serde(rename = "V0512_POKEMON_SIMISAGE")]
    V0512PokemonSimisage,
    #[serde(rename = "V0512_POKEMON_SIMISAGE_NORMAL")]
    V0512PokemonSimisageNormal,
    #[serde(rename = "V0513_POKEMON_PANSEAR")]
    V0513PokemonPansear,
    #[serde(rename = "V0513_POKEMON_PANSEAR_NORMAL")]
    V0513PokemonPansearNormal,
    #[serde(rename = "V0514_POKEMON_SIMISEAR")]
    V0514PokemonSimisear,
    #[serde(rename = "V0514_POKEMON_SIMISEAR_NORMAL")]
    V0514PokemonSimisearNormal,
    #[serde(rename = "V0515_POKEMON_PANPOUR")]
    V0515PokemonPanpour,
    #[serde(rename = "V0515_POKEMON_PANPOUR_NORMAL")]
    V0515PokemonPanpourNormal,
    #[serde(rename = "V0516_POKEMON_SIMIPOUR")]
    V0516PokemonSimipour,
    #[serde(rename = "V0516_POKEMON_SIMIPOUR_NORMAL")]
    V0516PokemonSimipourNormal,
    #[serde(rename = "V0517_POKEMON_MUNNA")]
    V0517PokemonMunna,
    #[serde(rename = "V0517_POKEMON_MUNNA_NORMAL")]
    V0517PokemonMunnaNormal,
    #[serde(rename = "V0518_POKEMON_MUSHARNA")]
    V0518PokemonMusharna,
    #[serde(rename = "V0518_POKEMON_MUSHARNA_NORMAL")]
    V0518PokemonMusharnaNormal,
    #[serde(rename = "V0519_POKEMON_PIDOVE")]
    V0519PokemonPidove,
    #[serde(rename = "V0519_POKEMON_PIDOVE_NORMAL")]
    V0519PokemonPidoveNormal,
    #[serde(rename = "V0520_POKEMON_TRANQUILL")]
    V0520PokemonTranquill,
    #[serde(rename = "V0520_POKEMON_TRANQUILL_NORMAL")]
    V0520PokemonTranquillNormal,
    #[serde(rename = "V0521_POKEMON_UNFEZANT")]
    V0521PokemonUnfezant,
    #[serde(rename = "V0521_POKEMON_UNFEZANT_NORMAL")]
    V0521PokemonUnfezantNormal,
    #[serde(rename = "V0522_POKEMON_BLITZLE")]
    V0522PokemonBlitzle,
    #[serde(rename = "V0522_POKEMON_BLITZLE_NORMAL")]
    V0522PokemonBlitzleNormal,
    #[serde(rename = "V0523_POKEMON_ZEBSTRIKA")]
    V0523PokemonZebstrika,
    #[serde(rename = "V0523_POKEMON_ZEBSTRIKA_NORMAL")]
    V0523PokemonZebstrikaNormal,
    #[serde(rename = "V0524_POKEMON_ROGGENROLA")]
    V0524PokemonRoggenrola,
    #[serde(rename = "V0524_POKEMON_ROGGENROLA_NORMAL")]
    V0524PokemonRoggenrolaNormal,
    #[serde(rename = "V0525_POKEMON_BOLDORE")]
    V0525PokemonBoldore,
    #[serde(rename = "V0525_POKEMON_BOLDORE_NORMAL")]
    V0525PokemonBoldoreNormal,
    #[serde(rename = "V0526_POKEMON_GIGALITH")]
    V0526PokemonGigalith,
    #[serde(rename = "V0526_POKEMON_GIGALITH_NORMAL")]
    V0526PokemonGigalithNormal,
    #[serde(rename = "V0527_POKEMON_WOOBAT")]
    V0527PokemonWoobat,
    #[serde(rename = "V0527_POKEMON_WOOBAT_NORMAL")]
    V0527PokemonWoobatNormal,
    #[serde(rename = "V0528_POKEMON_SWOOBAT")]
    V0528PokemonSwoobat,
    #[serde(rename = "V0528_POKEMON_SWOOBAT_NORMAL")]
    V0528PokemonSwoobatNormal,
    #[serde(rename = "V0529_POKEMON_DRILBUR")]
    V0529PokemonDrilbur,
    #[serde(rename = "V0529_POKEMON_DRILBUR_NORMAL")]
    V0529PokemonDrilburNormal,
    #[serde(rename = "V0530_POKEMON_EXCADRILL")]
    V0530PokemonExcadrill,
    #[serde(rename = "V0530_POKEMON_EXCADRILL_NORMAL")]
    V0530PokemonExcadrillNormal,
    #[serde(rename = "V0531_POKEMON_AUDINO")]
    V0531PokemonAudino,
    #[serde(rename = "V0531_POKEMON_AUDINO_NORMAL")]
    V0531PokemonAudinoNormal,
    #[serde(rename = "V0532_POKEMON_TIMBURR")]
    V0532PokemonTimburr,
    #[serde(rename = "V0532_POKEMON_TIMBURR_NORMAL")]
    V0532PokemonTimburrNormal,
    #[serde(rename = "V0533_POKEMON_GURDURR")]
    V0533PokemonGurdurr,
    #[serde(rename = "V0533_POKEMON_GURDURR_NORMAL")]
    V0533PokemonGurdurrNormal,
    #[serde(rename = "V0534_POKEMON_CONKELDURR")]
    V0534PokemonConkeldurr,
    #[serde(rename = "V0534_POKEMON_CONKELDURR_NORMAL")]
    V0534PokemonConkeldurrNormal,
    #[serde(rename = "V0535_POKEMON_TYMPOLE")]
    V0535PokemonTympole,
    #[serde(rename = "V0535_POKEMON_TYMPOLE_NORMAL")]
    V0535PokemonTympoleNormal,
    #[serde(rename = "V0536_POKEMON_PALPITOAD")]
    V0536PokemonPalpitoad,
    #[serde(rename = "V0536_POKEMON_PALPITOAD_NORMAL")]
    V0536PokemonPalpitoadNormal,
    #[serde(rename = "V0537_POKEMON_SEISMITOAD")]
    V0537PokemonSeismitoad,
    #[serde(rename = "V0537_POKEMON_SEISMITOAD_NORMAL")]
    V0537PokemonSeismitoadNormal,
    #[serde(rename = "V0538_POKEMON_THROH")]
    V0538PokemonThroh,
    #[serde(rename = "V0538_POKEMON_THROH_NORMAL")]
    V0538PokemonThrohNormal,
    #[serde(rename = "V0539_POKEMON_SAWK")]
    V0539PokemonSawk,
    #[serde(rename = "V0539_POKEMON_SAWK_NORMAL")]
    V0539PokemonSawkNormal,
    #[serde(rename = "V0540_POKEMON_SEWADDLE")]
    V0540PokemonSewaddle,
    #[serde(rename = "V0540_POKEMON_SEWADDLE_NORMAL")]
    V0540PokemonSewaddleNormal,
    #[serde(rename = "V0541_POKEMON_SWADLOON")]
    V0541PokemonSwadloon,
    #[serde(rename = "V0541_POKEMON_SWADLOON_NORMAL")]
    V0541PokemonSwadloonNormal,
    #[serde(rename = "V0542_POKEMON_LEAVANNY")]
    V0542PokemonLeavanny,
    #[serde(rename = "V0542_POKEMON_LEAVANNY_NORMAL")]
    V0542PokemonLeavannyNormal,
    #[serde(rename = "V0543_POKEMON_VENIPEDE")]
    V0543PokemonVenipede,
    #[serde(rename = "V0543_POKEMON_VENIPEDE_NORMAL")]
    V0543PokemonVenipedeNormal,
    #[serde(rename = "V0544_POKEMON_WHIRLIPEDE")]
    V0544PokemonWhirlipede,
    #[serde(rename = "V0544_POKEMON_WHIRLIPEDE_NORMAL")]
    V0544PokemonWhirlipedeNormal,
    #[serde(rename = "V0545_POKEMON_SCOLIPEDE")]
    V0545PokemonScolipede,
    #[serde(rename = "V0545_POKEMON_SCOLIPEDE_NORMAL")]
    V0545PokemonScolipedeNormal,
    #[serde(rename = "V0546_POKEMON_COTTONEE")]
    V0546PokemonCottonee,
    #[serde(rename = "V0546_POKEMON_COTTONEE_NORMAL")]
    V0546PokemonCottoneeNormal,
    #[serde(rename = "V0547_POKEMON_WHIMSICOTT")]
    V0547PokemonWhimsicott,
    #[serde(rename = "V0547_POKEMON_WHIMSICOTT_NORMAL")]
    V0547PokemonWhimsicottNormal,
    #[serde(rename = "V0548_POKEMON_PETILIL")]
    V0548PokemonPetilil,
    #[serde(rename = "V0548_POKEMON_PETILIL_NORMAL")]
    V0548PokemonPetililNormal,
    #[serde(rename = "V0549_POKEMON_LILLIGANT")]
    V0549PokemonLilligant,
    #[serde(rename = "V0549_POKEMON_LILLIGANT_HISUIAN")]
    V0549PokemonLilligantHisuian,
    #[serde(rename = "V0549_POKEMON_LILLIGANT_NORMAL")]
    V0549PokemonLilligantNormal,
    #[serde(rename = "V0550_POKEMON_BASCULIN")]
    V0550PokemonBasculin,
    #[serde(rename = "V0550_POKEMON_BASCULIN_BLUE_STRIPED")]
    V0550PokemonBasculinBlueStriped,
    #[serde(rename = "V0550_POKEMON_BASCULIN_RED_STRIPED")]
    V0550PokemonBasculinRedStriped,
    #[serde(rename = "V0550_POKEMON_BASCULIN_WHITE_STRIPED")]
    V0550PokemonBasculinWhiteStriped,
    #[serde(rename = "V0551_POKEMON_SANDILE")]
    V0551PokemonSandile,
    #[serde(rename = "V0551_POKEMON_SANDILE_NORMAL")]
    V0551PokemonSandileNormal,
    #[serde(rename = "V0552_POKEMON_KROKOROK")]
    V0552PokemonKrokorok,
    #[serde(rename = "V0552_POKEMON_KROKOROK_NORMAL")]
    V0552PokemonKrokorokNormal,
    #[serde(rename = "V0553_POKEMON_KROOKODILE")]
    V0553PokemonKrookodile,
    #[serde(rename = "V0553_POKEMON_KROOKODILE_NORMAL")]
    V0553PokemonKrookodileNormal,
    #[serde(rename = "V0554_POKEMON_DARUMAKA")]
    V0554PokemonDarumaka,
    #[serde(rename = "V0554_POKEMON_DARUMAKA_GALARIAN")]
    V0554PokemonDarumakaGalarian,
    #[serde(rename = "V0554_POKEMON_DARUMAKA_NORMAL")]
    V0554PokemonDarumakaNormal,
    #[serde(rename = "V0555_POKEMON_DARMANITAN")]
    V0555PokemonDarmanitan,
    #[serde(rename = "V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD")]
    V0555PokemonDarmanitanGalarianStandard,
    #[serde(rename = "V0555_POKEMON_DARMANITAN_GALARIAN_ZEN")]
    V0555PokemonDarmanitanGalarianZen,
    #[serde(rename = "V0555_POKEMON_DARMANITAN_STANDARD")]
    V0555PokemonDarmanitanStandard,
    #[serde(rename = "V0555_POKEMON_DARMANITAN_ZEN")]
    V0555PokemonDarmanitanZen,
    #[serde(rename = "V0556_POKEMON_MARACTUS")]
    V0556PokemonMaractus,
    #[serde(rename = "V0556_POKEMON_MARACTUS_NORMAL")]
    V0556PokemonMaractusNormal,
    #[serde(rename = "V0557_POKEMON_DWEBBLE")]
    V0557PokemonDwebble,
    #[serde(rename = "V0557_POKEMON_DWEBBLE_NORMAL")]
    V0557PokemonDwebbleNormal,
    #[serde(rename = "V0558_POKEMON_CRUSTLE")]
    V0558PokemonCrustle,
    #[serde(rename = "V0558_POKEMON_CRUSTLE_NORMAL")]
    V0558PokemonCrustleNormal,
    #[serde(rename = "V0559_POKEMON_SCRAGGY")]
    V0559PokemonScraggy,
    #[serde(rename = "V0559_POKEMON_SCRAGGY_NORMAL")]
    V0559PokemonScraggyNormal,
    #[serde(rename = "V0560_POKEMON_SCRAFTY")]
    V0560PokemonScrafty,
    #[serde(rename = "V0560_POKEMON_SCRAFTY_NORMAL")]
    V0560PokemonScraftyNormal,
    #[serde(rename = "V0561_POKEMON_SIGILYPH")]
    V0561PokemonSigilyph,
    #[serde(rename = "V0561_POKEMON_SIGILYPH_NORMAL")]
    V0561PokemonSigilyphNormal,
    #[serde(rename = "V0562_POKEMON_YAMASK")]
    V0562PokemonYamask,
    #[serde(rename = "V0562_POKEMON_YAMASK_GALARIAN")]
    V0562PokemonYamaskGalarian,
    #[serde(rename = "V0562_POKEMON_YAMASK_NORMAL")]
    V0562PokemonYamaskNormal,
    #[serde(rename = "V0563_POKEMON_COFAGRIGUS")]
    V0563PokemonCofagrigus,
    #[serde(rename = "V0563_POKEMON_COFAGRIGUS_NORMAL")]
    V0563PokemonCofagrigusNormal,
    #[serde(rename = "V0564_POKEMON_TIRTOUGA")]
    V0564PokemonTirtouga,
    #[serde(rename = "V0564_POKEMON_TIRTOUGA_NORMAL")]
    V0564PokemonTirtougaNormal,
    #[serde(rename = "V0565_POKEMON_CARRACOSTA")]
    V0565PokemonCarracosta,
    #[serde(rename = "V0565_POKEMON_CARRACOSTA_NORMAL")]
    V0565PokemonCarracostaNormal,
    #[serde(rename = "V0566_POKEMON_ARCHEN")]
    V0566PokemonArchen,
    #[serde(rename = "V0566_POKEMON_ARCHEN_NORMAL")]
    V0566PokemonArchenNormal,
    #[serde(rename = "V0567_POKEMON_ARCHEOPS")]
    V0567PokemonArcheops,
    #[serde(rename = "V0567_POKEMON_ARCHEOPS_NORMAL")]
    V0567PokemonArcheopsNormal,
    #[serde(rename = "V0568_POKEMON_TRUBBISH")]
    V0568PokemonTrubbish,
    #[serde(rename = "V0568_POKEMON_TRUBBISH_NORMAL")]
    V0568PokemonTrubbishNormal,
    #[serde(rename = "V0569_POKEMON_GARBODOR")]
    V0569PokemonGarbodor,
    #[serde(rename = "V0569_POKEMON_GARBODOR_NORMAL")]
    V0569PokemonGarbodorNormal,
    #[serde(rename = "V0570_POKEMON_ZORUA")]
    V0570PokemonZorua,
    #[serde(rename = "V0570_POKEMON_ZORUA_HISUIAN")]
    V0570PokemonZoruaHisuian,
    #[serde(rename = "V0570_POKEMON_ZORUA_NORMAL")]
    V0570PokemonZoruaNormal,
    #[serde(rename = "V0571_POKEMON_ZOROARK")]
    V0571PokemonZoroark,
    #[serde(rename = "V0571_POKEMON_ZOROARK_HISUIAN")]
    V0571PokemonZoroarkHisuian,
    #[serde(rename = "V0571_POKEMON_ZOROARK_NORMAL")]
    V0571PokemonZoroarkNormal,
    #[serde(rename = "V0572_POKEMON_MINCCINO")]
    V0572PokemonMinccino,
    #[serde(rename = "V0572_POKEMON_MINCCINO_NORMAL")]
    V0572PokemonMinccinoNormal,
    #[serde(rename = "V0573_POKEMON_CINCCINO")]
    V0573PokemonCinccino,
    #[serde(rename = "V0573_POKEMON_CINCCINO_NORMAL")]
    V0573PokemonCinccinoNormal,
    #[serde(rename = "V0574_POKEMON_GOTHITA")]
    V0574PokemonGothita,
    #[serde(rename = "V0574_POKEMON_GOTHITA_NORMAL")]
    V0574PokemonGothitaNormal,
    #[serde(rename = "V0575_POKEMON_GOTHORITA")]
    V0575PokemonGothorita,
    #[serde(rename = "V0575_POKEMON_GOTHORITA_NORMAL")]
    V0575PokemonGothoritaNormal,
    #[serde(rename = "V0576_POKEMON_GOTHITELLE")]
    V0576PokemonGothitelle,
    #[serde(rename = "V0576_POKEMON_GOTHITELLE_NORMAL")]
    V0576PokemonGothitelleNormal,
    #[serde(rename = "V0577_POKEMON_SOLOSIS")]
    V0577PokemonSolosis,
    #[serde(rename = "V0577_POKEMON_SOLOSIS_NORMAL")]
    V0577PokemonSolosisNormal,
    #[serde(rename = "V0578_POKEMON_DUOSION")]
    V0578PokemonDuosion,
    #[serde(rename = "V0578_POKEMON_DUOSION_NORMAL")]
    V0578PokemonDuosionNormal,
    #[serde(rename = "V0579_POKEMON_REUNICLUS")]
    V0579PokemonReuniclus,
    #[serde(rename = "V0579_POKEMON_REUNICLUS_NORMAL")]
    V0579PokemonReuniclusNormal,
    #[serde(rename = "V0580_POKEMON_DUCKLETT")]
    V0580PokemonDucklett,
    #[serde(rename = "V0580_POKEMON_DUCKLETT_NORMAL")]
    V0580PokemonDucklettNormal,
    #[serde(rename = "V0581_POKEMON_SWANNA")]
    V0581PokemonSwanna,
    #[serde(rename = "V0581_POKEMON_SWANNA_NORMAL")]
    V0581PokemonSwannaNormal,
    #[serde(rename = "V0582_POKEMON_VANILLITE")]
    V0582PokemonVanillite,
    #[serde(rename = "V0582_POKEMON_VANILLITE_NORMAL")]
    V0582PokemonVanilliteNormal,
    #[serde(rename = "V0583_POKEMON_VANILLISH")]
    V0583PokemonVanillish,
    #[serde(rename = "V0583_POKEMON_VANILLISH_NORMAL")]
    V0583PokemonVanillishNormal,
    #[serde(rename = "V0584_POKEMON_VANILLUXE")]
    V0584PokemonVanilluxe,
    #[serde(rename = "V0584_POKEMON_VANILLUXE_NORMAL")]
    V0584PokemonVanilluxeNormal,
    #[serde(rename = "V0585_POKEMON_DEERLING")]
    V0585PokemonDeerling,
    #[serde(rename = "V0585_POKEMON_DEERLING_AUTUMN")]
    V0585PokemonDeerlingAutumn,
    #[serde(rename = "V0585_POKEMON_DEERLING_SPRING")]
    V0585PokemonDeerlingSpring,
    #[serde(rename = "V0585_POKEMON_DEERLING_SUMMER")]
    V0585PokemonDeerlingSummer,
    #[serde(rename = "V0585_POKEMON_DEERLING_WINTER")]
    V0585PokemonDeerlingWinter,
    #[serde(rename = "V0586_POKEMON_SAWSBUCK")]
    V0586PokemonSawsbuck,
    #[serde(rename = "V0586_POKEMON_SAWSBUCK_AUTUMN")]
    V0586PokemonSawsbuckAutumn,
    #[serde(rename = "V0586_POKEMON_SAWSBUCK_SPRING")]
    V0586PokemonSawsbuckSpring,
    #[serde(rename = "V0586_POKEMON_SAWSBUCK_SUMMER")]
    V0586PokemonSawsbuckSummer,
    #[serde(rename = "V0586_POKEMON_SAWSBUCK_WINTER")]
    V0586PokemonSawsbuckWinter,
    #[serde(rename = "V0587_POKEMON_EMOLGA")]
    V0587PokemonEmolga,
    #[serde(rename = "V0587_POKEMON_EMOLGA_NORMAL")]
    V0587PokemonEmolgaNormal,
    #[serde(rename = "V0588_POKEMON_KARRABLAST")]
    V0588PokemonKarrablast,
    #[serde(rename = "V0588_POKEMON_KARRABLAST_NORMAL")]
    V0588PokemonKarrablastNormal,
    #[serde(rename = "V0589_POKEMON_ESCAVALIER")]
    V0589PokemonEscavalier,
    #[serde(rename = "V0589_POKEMON_ESCAVALIER_NORMAL")]
    V0589PokemonEscavalierNormal,
    #[serde(rename = "V0590_POKEMON_FOONGUS")]
    V0590PokemonFoongus,
    #[serde(rename = "V0590_POKEMON_FOONGUS_NORMAL")]
    V0590PokemonFoongusNormal,
    #[serde(rename = "V0591_POKEMON_AMOONGUSS")]
    V0591PokemonAmoonguss,
    #[serde(rename = "V0591_POKEMON_AMOONGUSS_NORMAL")]
    V0591PokemonAmoongussNormal,
    #[serde(rename = "V0592_POKEMON_FRILLISH")]
    V0592PokemonFrillish,
    #[serde(rename = "V0592_POKEMON_FRILLISH_FEMALE")]
    V0592PokemonFrillishFemale,
    #[serde(rename = "V0592_POKEMON_FRILLISH_NORMAL")]
    V0592PokemonFrillishNormal,
    #[serde(rename = "V0593_POKEMON_JELLICENT")]
    V0593PokemonJellicent,
    #[serde(rename = "V0593_POKEMON_JELLICENT_FEMALE")]
    V0593PokemonJellicentFemale,
    #[serde(rename = "V0593_POKEMON_JELLICENT_NORMAL")]
    V0593PokemonJellicentNormal,
    #[serde(rename = "V0594_POKEMON_ALOMOMOLA")]
    V0594PokemonAlomomola,
    #[serde(rename = "V0594_POKEMON_ALOMOMOLA_NORMAL")]
    V0594PokemonAlomomolaNormal,
    #[serde(rename = "V0595_POKEMON_JOLTIK")]
    V0595PokemonJoltik,
    #[serde(rename = "V0595_POKEMON_JOLTIK_NORMAL")]
    V0595PokemonJoltikNormal,
    #[serde(rename = "V0596_POKEMON_GALVANTULA")]
    V0596PokemonGalvantula,
    #[serde(rename = "V0596_POKEMON_GALVANTULA_NORMAL")]
    V0596PokemonGalvantulaNormal,
    #[serde(rename = "V0597_POKEMON_FERROSEED")]
    V0597PokemonFerroseed,
    #[serde(rename = "V0597_POKEMON_FERROSEED_NORMAL")]
    V0597PokemonFerroseedNormal,
    #[serde(rename = "V0598_POKEMON_FERROTHORN")]
    V0598PokemonFerrothorn,
    #[serde(rename = "V0598_POKEMON_FERROTHORN_NORMAL")]
    V0598PokemonFerrothornNormal,
    #[serde(rename = "V0599_POKEMON_KLINK")]
    V0599PokemonKlink,
    #[serde(rename = "V0599_POKEMON_KLINK_NORMAL")]
    V0599PokemonKlinkNormal,
    #[serde(rename = "V0600_POKEMON_KLANG")]
    V0600PokemonKlang,
    #[serde(rename = "V0600_POKEMON_KLANG_NORMAL")]
    V0600PokemonKlangNormal,
    #[serde(rename = "V0601_POKEMON_KLINKLANG")]
    V0601PokemonKlinklang,
    #[serde(rename = "V0601_POKEMON_KLINKLANG_NORMAL")]
    V0601PokemonKlinklangNormal,
    #[serde(rename = "V0602_POKEMON_TYNAMO")]
    V0602PokemonTynamo,
    #[serde(rename = "V0602_POKEMON_TYNAMO_NORMAL")]
    V0602PokemonTynamoNormal,
    #[serde(rename = "V0603_POKEMON_EELEKTRIK")]
    V0603PokemonEelektrik,
    #[serde(rename = "V0603_POKEMON_EELEKTRIK_NORMAL")]
    V0603PokemonEelektrikNormal,
    #[serde(rename = "V0604_POKEMON_EELEKTROSS")]
    V0604PokemonEelektross,
    #[serde(rename = "V0604_POKEMON_EELEKTROSS_NORMAL")]
    V0604PokemonEelektrossNormal,
    #[serde(rename = "V0605_POKEMON_ELGYEM")]
    V0605PokemonElgyem,
    #[serde(rename = "V0605_POKEMON_ELGYEM_NORMAL")]
    V0605PokemonElgyemNormal,
    #[serde(rename = "V0606_POKEMON_BEHEEYEM")]
    V0606PokemonBeheeyem,
    #[serde(rename = "V0606_POKEMON_BEHEEYEM_NORMAL")]
    V0606PokemonBeheeyemNormal,
    #[serde(rename = "V0607_POKEMON_LITWICK")]
    V0607PokemonLitwick,
    #[serde(rename = "V0607_POKEMON_LITWICK_NORMAL")]
    V0607PokemonLitwickNormal,
    #[serde(rename = "V0608_POKEMON_LAMPENT")]
    V0608PokemonLampent,
    #[serde(rename = "V0608_POKEMON_LAMPENT_NORMAL")]
    V0608PokemonLampentNormal,
    #[serde(rename = "V0609_POKEMON_CHANDELURE")]
    V0609PokemonChandelure,
    #[serde(rename = "V0609_POKEMON_CHANDELURE_NORMAL")]
    V0609PokemonChandelureNormal,
    #[serde(rename = "V0610_POKEMON_AXEW")]
    V0610PokemonAxew,
    #[serde(rename = "V0610_POKEMON_AXEW_NORMAL")]
    V0610PokemonAxewNormal,
    #[serde(rename = "V0611_POKEMON_FRAXURE")]
    V0611PokemonFraxure,
    #[serde(rename = "V0611_POKEMON_FRAXURE_NORMAL")]
    V0611PokemonFraxureNormal,
    #[serde(rename = "V0612_POKEMON_HAXORUS")]
    V0612PokemonHaxorus,
    #[serde(rename = "V0612_POKEMON_HAXORUS_NORMAL")]
    V0612PokemonHaxorusNormal,
    #[serde(rename = "V0613_POKEMON_CUBCHOO")]
    V0613PokemonCubchoo,
    #[serde(rename = "V0613_POKEMON_CUBCHOO_NORMAL")]
    V0613PokemonCubchooNormal,
    #[serde(rename = "V0613_POKEMON_CUBCHOO_WINTER_2020")]
    V0613PokemonCubchooWinter2020,
    #[serde(rename = "V0614_POKEMON_BEARTIC")]
    V0614PokemonBeartic,
    #[serde(rename = "V0614_POKEMON_BEARTIC_NORMAL")]
    V0614PokemonBearticNormal,
    #[serde(rename = "V0614_POKEMON_BEARTIC_WINTER_2020")]
    V0614PokemonBearticWinter2020,
    #[serde(rename = "V0615_POKEMON_CRYOGONAL")]
    V0615PokemonCryogonal,
    #[serde(rename = "V0615_POKEMON_CRYOGONAL_NORMAL")]
    V0615PokemonCryogonalNormal,
    #[serde(rename = "V0616_POKEMON_SHELMET")]
    V0616PokemonShelmet,
    #[serde(rename = "V0616_POKEMON_SHELMET_NORMAL")]
    V0616PokemonShelmetNormal,
    #[serde(rename = "V0617_POKEMON_ACCELGOR")]
    V0617PokemonAccelgor,
    #[serde(rename = "V0617_POKEMON_ACCELGOR_NORMAL")]
    V0617PokemonAccelgorNormal,
    #[serde(rename = "V0618_POKEMON_STUNFISK")]
    V0618PokemonStunfisk,
    #[serde(rename = "V0618_POKEMON_STUNFISK_GALARIAN")]
    V0618PokemonStunfiskGalarian,
    #[serde(rename = "V0618_POKEMON_STUNFISK_NORMAL")]
    V0618PokemonStunfiskNormal,
    #[serde(rename = "V0619_POKEMON_MIENFOO")]
    V0619PokemonMienfoo,
    #[serde(rename = "V0619_POKEMON_MIENFOO_NORMAL")]
    V0619PokemonMienfooNormal,
    #[serde(rename = "V0620_POKEMON_MIENSHAO")]
    V0620PokemonMienshao,
    #[serde(rename = "V0620_POKEMON_MIENSHAO_NORMAL")]
    V0620PokemonMienshaoNormal,
    #[serde(rename = "V0621_POKEMON_DRUDDIGON")]
    V0621PokemonDruddigon,
    #[serde(rename = "V0621_POKEMON_DRUDDIGON_NORMAL")]
    V0621PokemonDruddigonNormal,
    #[serde(rename = "V0622_POKEMON_GOLETT")]
    V0622PokemonGolett,
    #[serde(rename = "V0622_POKEMON_GOLETT_NORMAL")]
    V0622PokemonGolettNormal,
    #[serde(rename = "V0623_POKEMON_GOLURK")]
    V0623PokemonGolurk,
    #[serde(rename = "V0623_POKEMON_GOLURK_NORMAL")]
    V0623PokemonGolurkNormal,
    #[serde(rename = "V0624_POKEMON_PAWNIARD")]
    V0624PokemonPawniard,
    #[serde(rename = "V0624_POKEMON_PAWNIARD_NORMAL")]
    V0624PokemonPawniardNormal,
    #[serde(rename = "V0625_POKEMON_BISHARP")]
    V0625PokemonBisharp,
    #[serde(rename = "V0625_POKEMON_BISHARP_NORMAL")]
    V0625PokemonBisharpNormal,
    #[serde(rename = "V0626_POKEMON_BOUFFALANT")]
    V0626PokemonBouffalant,
    #[serde(rename = "V0626_POKEMON_BOUFFALANT_NORMAL")]
    V0626PokemonBouffalantNormal,
    #[serde(rename = "V0627_POKEMON_RUFFLET")]
    V0627PokemonRufflet,
    #[serde(rename = "V0627_POKEMON_RUFFLET_NORMAL")]
    V0627PokemonRuffletNormal,
    #[serde(rename = "V0628_POKEMON_BRAVIARY")]
    V0628PokemonBraviary,
    #[serde(rename = "V0628_POKEMON_BRAVIARY_HISUIAN")]
    V0628PokemonBraviaryHisuian,
    #[serde(rename = "V0628_POKEMON_BRAVIARY_NORMAL")]
    V0628PokemonBraviaryNormal,
    #[serde(rename = "V0629_POKEMON_VULLABY")]
    V0629PokemonVullaby,
    #[serde(rename = "V0629_POKEMON_VULLABY_NORMAL")]
    V0629PokemonVullabyNormal,
    #[serde(rename = "V0630_POKEMON_MANDIBUZZ")]
    V0630PokemonMandibuzz,
    #[serde(rename = "V0630_POKEMON_MANDIBUZZ_NORMAL")]
    V0630PokemonMandibuzzNormal,
    #[serde(rename = "V0631_POKEMON_HEATMOR")]
    V0631PokemonHeatmor,
    #[serde(rename = "V0631_POKEMON_HEATMOR_NORMAL")]
    V0631PokemonHeatmorNormal,
    #[serde(rename = "V0632_POKEMON_DURANT")]
    V0632PokemonDurant,
    #[serde(rename = "V0632_POKEMON_DURANT_NORMAL")]
    V0632PokemonDurantNormal,
    #[serde(rename = "V0633_POKEMON_DEINO")]
    V0633PokemonDeino,
    #[serde(rename = "V0633_POKEMON_DEINO_NORMAL")]
    V0633PokemonDeinoNormal,
    #[serde(rename = "V0634_POKEMON_ZWEILOUS")]
    V0634PokemonZweilous,
    #[serde(rename = "V0634_POKEMON_ZWEILOUS_NORMAL")]
    V0634PokemonZweilousNormal,
    #[serde(rename = "V0635_POKEMON_HYDREIGON")]
    V0635PokemonHydreigon,
    #[serde(rename = "V0635_POKEMON_HYDREIGON_NORMAL")]
    V0635PokemonHydreigonNormal,
    #[serde(rename = "V0636_POKEMON_LARVESTA")]
    V0636PokemonLarvesta,
    #[serde(rename = "V0636_POKEMON_LARVESTA_NORMAL")]
    V0636PokemonLarvestaNormal,
    #[serde(rename = "V0637_POKEMON_VOLCARONA")]
    V0637PokemonVolcarona,
    #[serde(rename = "V0637_POKEMON_VOLCARONA_NORMAL")]
    V0637PokemonVolcaronaNormal,
    #[serde(rename = "V0638_POKEMON_COBALION")]
    V0638PokemonCobalion,
    #[serde(rename = "V0638_POKEMON_COBALION_NORMAL")]
    V0638PokemonCobalionNormal,
    #[serde(rename = "V0639_POKEMON_TERRAKION")]
    V0639PokemonTerrakion,
    #[serde(rename = "V0639_POKEMON_TERRAKION_NORMAL")]
    V0639PokemonTerrakionNormal,
    #[serde(rename = "V0640_POKEMON_VIRIZION")]
    V0640PokemonVirizion,
    #[serde(rename = "V0640_POKEMON_VIRIZION_NORMAL")]
    V0640PokemonVirizionNormal,
    #[serde(rename = "V0641_POKEMON_TORNADUS")]
    V0641PokemonTornadus,
    #[serde(rename = "V0641_POKEMON_TORNADUS_INCARNATE")]
    V0641PokemonTornadusIncarnate,
    #[serde(rename = "V0641_POKEMON_TORNADUS_THERIAN")]
    V0641PokemonTornadusTherian,
    #[serde(rename = "V0642_POKEMON_THUNDURUS")]
    V0642PokemonThundurus,
    #[serde(rename = "V0642_POKEMON_THUNDURUS_INCARNATE")]
    V0642PokemonThundurusIncarnate,
    #[serde(rename = "V0642_POKEMON_THUNDURUS_THERIAN")]
    V0642PokemonThundurusTherian,
    #[serde(rename = "V0643_POKEMON_RESHIRAM")]
    V0643PokemonReshiram,
    #[serde(rename = "V0643_POKEMON_RESHIRAM_NORMAL")]
    V0643PokemonReshiramNormal,
    #[serde(rename = "V0644_POKEMON_ZEKROM")]
    V0644PokemonZekrom,
    #[serde(rename = "V0644_POKEMON_ZEKROM_NORMAL")]
    V0644PokemonZekromNormal,
    #[serde(rename = "V0645_POKEMON_LANDORUS")]
    V0645PokemonLandorus,
    #[serde(rename = "V0645_POKEMON_LANDORUS_INCARNATE")]
    V0645PokemonLandorusIncarnate,
    #[serde(rename = "V0645_POKEMON_LANDORUS_THERIAN")]
    V0645PokemonLandorusTherian,
    #[serde(rename = "V0646_POKEMON_KYUREM")]
    V0646PokemonKyurem,
    #[serde(rename = "V0646_POKEMON_KYUREM_BLACK")]
    V0646PokemonKyuremBlack,
    #[serde(rename = "V0646_POKEMON_KYUREM_NORMAL")]
    V0646PokemonKyuremNormal,
    #[serde(rename = "V0646_POKEMON_KYUREM_WHITE")]
    V0646PokemonKyuremWhite,
    #[serde(rename = "V0647_POKEMON_KELDEO")]
    V0647PokemonKeldeo,
    #[serde(rename = "V0647_POKEMON_KELDEO_ORDINARY")]
    V0647PokemonKeldeoOrdinary,
    #[serde(rename = "V0647_POKEMON_KELDEO_RESOLUTE")]
    V0647PokemonKeldeoResolute,
    #[serde(rename = "V0648_POKEMON_MELOETTA")]
    V0648PokemonMeloetta,
    #[serde(rename = "V0648_POKEMON_MELOETTA_ARIA")]
    V0648PokemonMeloettaAria,
    #[serde(rename = "V0648_POKEMON_MELOETTA_PIROUETTE")]
    V0648PokemonMeloettaPirouette,
    #[serde(rename = "V0649_POKEMON_GENESECT")]
    V0649PokemonGenesect,
    #[serde(rename = "V0649_POKEMON_GENESECT_BURN")]
    V0649PokemonGenesectBurn,
    #[serde(rename = "V0649_POKEMON_GENESECT_CHILL")]
    V0649PokemonGenesectChill,
    #[serde(rename = "V0649_POKEMON_GENESECT_DOUSE")]
    V0649PokemonGenesectDouse,
    #[serde(rename = "V0649_POKEMON_GENESECT_NORMAL")]
    V0649PokemonGenesectNormal,
    #[serde(rename = "V0649_POKEMON_GENESECT_SHOCK")]
    V0649PokemonGenesectShock,
    #[serde(rename = "V0650_POKEMON_CHESPIN")]
    V0650PokemonChespin,
    #[serde(rename = "V0650_POKEMON_CHESPIN_NORMAL")]
    V0650PokemonChespinNormal,
    #[serde(rename = "V0651_POKEMON_QUILLADIN")]
    V0651PokemonQuilladin,
    #[serde(rename = "V0651_POKEMON_QUILLADIN_NORMAL")]
    V0651PokemonQuilladinNormal,
    #[serde(rename = "V0652_POKEMON_CHESNAUGHT")]
    V0652PokemonChesnaught,
    #[serde(rename = "V0652_POKEMON_CHESNAUGHT_NORMAL")]
    V0652PokemonChesnaughtNormal,
    #[serde(rename = "V0653_POKEMON_FENNEKIN")]
    V0653PokemonFennekin,
    #[serde(rename = "V0653_POKEMON_FENNEKIN_NORMAL")]
    V0653PokemonFennekinNormal,
    #[serde(rename = "V0654_POKEMON_BRAIXEN")]
    V0654PokemonBraixen,
    #[serde(rename = "V0654_POKEMON_BRAIXEN_NORMAL")]
    V0654PokemonBraixenNormal,
    #[serde(rename = "V0655_POKEMON_DELPHOX")]
    V0655PokemonDelphox,
    #[serde(rename = "V0655_POKEMON_DELPHOX_NORMAL")]
    V0655PokemonDelphoxNormal,
    #[serde(rename = "V0656_POKEMON_FROAKIE")]
    V0656PokemonFroakie,
    #[serde(rename = "V0656_POKEMON_FROAKIE_NORMAL")]
    V0656PokemonFroakieNormal,
    #[serde(rename = "V0657_POKEMON_FROGADIER")]
    V0657PokemonFrogadier,
    #[serde(rename = "V0657_POKEMON_FROGADIER_NORMAL")]
    V0657PokemonFrogadierNormal,
    #[serde(rename = "V0658_POKEMON_GRENINJA")]
    V0658PokemonGreninja,
    #[serde(rename = "V0658_POKEMON_GRENINJA_NORMAL")]
    V0658PokemonGreninjaNormal,
    #[serde(rename = "V0659_POKEMON_BUNNELBY")]
    V0659PokemonBunnelby,
    #[serde(rename = "V0659_POKEMON_BUNNELBY_NORMAL")]
    V0659PokemonBunnelbyNormal,
    #[serde(rename = "V0660_POKEMON_DIGGERSBY")]
    V0660PokemonDiggersby,
    #[serde(rename = "V0660_POKEMON_DIGGERSBY_NORMAL")]
    V0660PokemonDiggersbyNormal,
    #[serde(rename = "V0661_POKEMON_FLETCHLING")]
    V0661PokemonFletchling,
    #[serde(rename = "V0661_POKEMON_FLETCHLING_NORMAL")]
    V0661PokemonFletchlingNormal,
    #[serde(rename = "V0662_POKEMON_FLETCHINDER")]
    V0662PokemonFletchinder,
    #[serde(rename = "V0662_POKEMON_FLETCHINDER_NORMAL")]
    V0662PokemonFletchinderNormal,
    #[serde(rename = "V0663_POKEMON_TALONFLAME")]
    V0663PokemonTalonflame,
    #[serde(rename = "V0663_POKEMON_TALONFLAME_NORMAL")]
    V0663PokemonTalonflameNormal,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG")]
    V0664PokemonScatterbug,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_ARCHIPELAGO")]
    V0664PokemonScatterbugArchipelago,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_CONTINENTAL")]
    V0664PokemonScatterbugContinental,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_ELEGANT")]
    V0664PokemonScatterbugElegant,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_FANCY")]
    V0664PokemonScatterbugFancy,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_GARDEN")]
    V0664PokemonScatterbugGarden,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_HIGH_PLAINS")]
    V0664PokemonScatterbugHighPlains,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_ICY_SNOW")]
    V0664PokemonScatterbugIcySnow,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_JUNGLE")]
    V0664PokemonScatterbugJungle,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_MARINE")]
    V0664PokemonScatterbugMarine,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_MEADOW")]
    V0664PokemonScatterbugMeadow,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_MODERN")]
    V0664PokemonScatterbugModern,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_MONSOON")]
    V0664PokemonScatterbugMonsoon,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_OCEAN")]
    V0664PokemonScatterbugOcean,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_POKEBALL")]
    V0664PokemonScatterbugPokeball,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_POLAR")]
    V0664PokemonScatterbugPolar,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_RIVER")]
    V0664PokemonScatterbugRiver,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_SANDSTORM")]
    V0664PokemonScatterbugSandstorm,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_SAVANNA")]
    V0664PokemonScatterbugSavanna,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_SUN")]
    V0664PokemonScatterbugSun,
    #[serde(rename = "V0664_POKEMON_SCATTERBUG_TUNDRA")]
    V0664PokemonScatterbugTundra,
    #[serde(rename = "V0665_POKEMON_SPEWPA")]
    V0665PokemonSpewpa,
    #[serde(rename = "V0665_POKEMON_SPEWPA_ARCHIPELAGO")]
    V0665PokemonSpewpaArchipelago,
    #[serde(rename = "V0665_POKEMON_SPEWPA_CONTINENTAL")]
    V0665PokemonSpewpaContinental,
    #[serde(rename = "V0665_POKEMON_SPEWPA_ELEGANT")]
    V0665PokemonSpewpaElegant,
    #[serde(rename = "V0665_POKEMON_SPEWPA_FANCY")]
    V0665PokemonSpewpaFancy,
    #[serde(rename = "V0665_POKEMON_SPEWPA_GARDEN")]
    V0665PokemonSpewpaGarden,
    #[serde(rename = "V0665_POKEMON_SPEWPA_HIGH_PLAINS")]
    V0665PokemonSpewpaHighPlains,
    #[serde(rename = "V0665_POKEMON_SPEWPA_ICY_SNOW")]
    V0665PokemonSpewpaIcySnow,
    #[serde(rename = "V0665_POKEMON_SPEWPA_JUNGLE")]
    V0665PokemonSpewpaJungle,
    #[serde(rename = "V0665_POKEMON_SPEWPA_MARINE")]
    V0665PokemonSpewpaMarine,
    #[serde(rename = "V0665_POKEMON_SPEWPA_MEADOW")]
    V0665PokemonSpewpaMeadow,
    #[serde(rename = "V0665_POKEMON_SPEWPA_MODERN")]
    V0665PokemonSpewpaModern,
    #[serde(rename = "V0665_POKEMON_SPEWPA_MONSOON")]
    V0665PokemonSpewpaMonsoon,
    #[serde(rename = "V0665_POKEMON_SPEWPA_OCEAN")]
    V0665PokemonSpewpaOcean,
    #[serde(rename = "V0665_POKEMON_SPEWPA_POKEBALL")]
    V0665PokemonSpewpaPokeball,
    #[serde(rename = "V0665_POKEMON_SPEWPA_POLAR")]
    V0665PokemonSpewpaPolar,
    #[serde(rename = "V0665_POKEMON_SPEWPA_RIVER")]
    V0665PokemonSpewpaRiver,
    #[serde(rename = "V0665_POKEMON_SPEWPA_SANDSTORM")]
    V0665PokemonSpewpaSandstorm,
    #[serde(rename = "V0665_POKEMON_SPEWPA_SAVANNA")]
    V0665PokemonSpewpaSavanna,
    #[serde(rename = "V0665_POKEMON_SPEWPA_SUN")]
    V0665PokemonSpewpaSun,
    #[serde(rename = "V0665_POKEMON_SPEWPA_TUNDRA")]
    V0665PokemonSpewpaTundra,
    #[serde(rename = "V0666_POKEMON_VIVILLON")]
    V0666PokemonVivillon,
    #[serde(rename = "V0666_POKEMON_VIVILLON_ARCHIPELAGO")]
    V0666PokemonVivillonArchipelago,
    #[serde(rename = "V0666_POKEMON_VIVILLON_CONTINENTAL")]
    V0666PokemonVivillonContinental,
    #[serde(rename = "V0666_POKEMON_VIVILLON_ELEGANT")]
    V0666PokemonVivillonElegant,
    #[serde(rename = "V0666_POKEMON_VIVILLON_FANCY")]
    V0666PokemonVivillonFancy,
    #[serde(rename = "V0666_POKEMON_VIVILLON_GARDEN")]
    V0666PokemonVivillonGarden,
    #[serde(rename = "V0666_POKEMON_VIVILLON_HIGH_PLAINS")]
    V0666PokemonVivillonHighPlains,
    #[serde(rename = "V0666_POKEMON_VIVILLON_ICY_SNOW")]
    V0666PokemonVivillonIcySnow,
    #[serde(rename = "V0666_POKEMON_VIVILLON_JUNGLE")]
    V0666PokemonVivillonJungle,
    #[serde(rename = "V0666_POKEMON_VIVILLON_MARINE")]
    V0666PokemonVivillonMarine,
    #[serde(rename = "V0666_POKEMON_VIVILLON_MEADOW")]
    V0666PokemonVivillonMeadow,
    #[serde(rename = "V0666_POKEMON_VIVILLON_MODERN")]
    V0666PokemonVivillonModern,
    #[serde(rename = "V0666_POKEMON_VIVILLON_MONSOON")]
    V0666PokemonVivillonMonsoon,
    #[serde(rename = "V0666_POKEMON_VIVILLON_OCEAN")]
    V0666PokemonVivillonOcean,
    #[serde(rename = "V0666_POKEMON_VIVILLON_POKEBALL")]
    V0666PokemonVivillonPokeball,
    #[serde(rename = "V0666_POKEMON_VIVILLON_POLAR")]
    V0666PokemonVivillonPolar,
    #[serde(rename = "V0666_POKEMON_VIVILLON_RIVER")]
    V0666PokemonVivillonRiver,
    #[serde(rename = "V0666_POKEMON_VIVILLON_SANDSTORM")]
    V0666PokemonVivillonSandstorm,
    #[serde(rename = "V0666_POKEMON_VIVILLON_SAVANNA")]
    V0666PokemonVivillonSavanna,
    #[serde(rename = "V0666_POKEMON_VIVILLON_SUN")]
    V0666PokemonVivillonSun,
    #[serde(rename = "V0666_POKEMON_VIVILLON_TUNDRA")]
    V0666PokemonVivillonTundra,
    #[serde(rename = "V0667_POKEMON_LITLEO")]
    V0667PokemonLitleo,
    #[serde(rename = "V0667_POKEMON_LITLEO_NORMAL")]
    V0667PokemonLitleoNormal,
    #[serde(rename = "V0668_POKEMON_PYROAR")]
    V0668PokemonPyroar,
    #[serde(rename = "V0668_POKEMON_PYROAR_FEMALE")]
    V0668PokemonPyroarFemale,
    #[serde(rename = "V0668_POKEMON_PYROAR_NORMAL")]
    V0668PokemonPyroarNormal,
    #[serde(rename = "V0669_POKEMON_FLABEBE")]
    V0669PokemonFlabebe,
    #[serde(rename = "V0669_POKEMON_FLABEBE_BLUE")]
    V0669PokemonFlabebeBlue,
    #[serde(rename = "V0669_POKEMON_FLABEBE_ORANGE")]
    V0669PokemonFlabebeOrange,
    #[serde(rename = "V0669_POKEMON_FLABEBE_RED")]
    V0669PokemonFlabebeRed,
    #[serde(rename = "V0669_POKEMON_FLABEBE_WHITE")]
    V0669PokemonFlabebeWhite,
    #[serde(rename = "V0669_POKEMON_FLABEBE_YELLOW")]
    V0669PokemonFlabebeYellow,
    #[serde(rename = "V0670_POKEMON_FLOETTE")]
    V0670PokemonFloette,
    #[serde(rename = "V0670_POKEMON_FLOETTE_BLUE")]
    V0670PokemonFloetteBlue,
    #[serde(rename = "V0670_POKEMON_FLOETTE_ORANGE")]
    V0670PokemonFloetteOrange,
    #[serde(rename = "V0670_POKEMON_FLOETTE_RED")]
    V0670PokemonFloetteRed,
    #[serde(rename = "V0670_POKEMON_FLOETTE_WHITE")]
    V0670PokemonFloetteWhite,
    #[serde(rename = "V0670_POKEMON_FLOETTE_YELLOW")]
    V0670PokemonFloetteYellow,
    #[serde(rename = "V0671_POKEMON_FLORGES")]
    V0671PokemonFlorges,
    #[serde(rename = "V0671_POKEMON_FLORGES_BLUE")]
    V0671PokemonFlorgesBlue,
    #[serde(rename = "V0671_POKEMON_FLORGES_ORANGE")]
    V0671PokemonFlorgesOrange,
    #[serde(rename = "V0671_POKEMON_FLORGES_RED")]
    V0671PokemonFlorgesRed,
    #[serde(rename = "V0671_POKEMON_FLORGES_WHITE")]
    V0671PokemonFlorgesWhite,
    #[serde(rename = "V0671_POKEMON_FLORGES_YELLOW")]
    V0671PokemonFlorgesYellow,
    #[serde(rename = "V0672_POKEMON_SKIDDO")]
    V0672PokemonSkiddo,
    #[serde(rename = "V0672_POKEMON_SKIDDO_NORMAL")]
    V0672PokemonSkiddoNormal,
    #[serde(rename = "V0673_POKEMON_GOGOAT")]
    V0673PokemonGogoat,
    #[serde(rename = "V0673_POKEMON_GOGOAT_NORMAL")]
    V0673PokemonGogoatNormal,
    #[serde(rename = "V0674_POKEMON_PANCHAM")]
    V0674PokemonPancham,
    #[serde(rename = "V0674_POKEMON_PANCHAM_NORMAL")]
    V0674PokemonPanchamNormal,
    #[serde(rename = "V0675_POKEMON_PANGORO")]
    V0675PokemonPangoro,
    #[serde(rename = "V0675_POKEMON_PANGORO_NORMAL")]
    V0675PokemonPangoroNormal,
    #[serde(rename = "V0676_POKEMON_FURFROU")]
    V0676PokemonFurfrou,
    #[serde(rename = "V0676_POKEMON_FURFROU_DANDY")]
    V0676PokemonFurfrouDandy,
    #[serde(rename = "V0676_POKEMON_FURFROU_DEBUTANTE")]
    V0676PokemonFurfrouDebutante,
    #[serde(rename = "V0676_POKEMON_FURFROU_DIAMOND")]
    V0676PokemonFurfrouDiamond,
    #[serde(rename = "V0676_POKEMON_FURFROU_HEART")]
    V0676PokemonFurfrouHeart,
    #[serde(rename = "V0676_POKEMON_FURFROU_KABUKI")]
    V0676PokemonFurfrouKabuki,
    #[serde(rename = "V0676_POKEMON_FURFROU_LA_REINE")]
    V0676PokemonFurfrouLaReine,
    #[serde(rename = "V0676_POKEMON_FURFROU_MATRON")]
    V0676PokemonFurfrouMatron,
    #[serde(rename = "V0676_POKEMON_FURFROU_NATURAL")]
    V0676PokemonFurfrouNatural,
    #[serde(rename = "V0676_POKEMON_FURFROU_PHARAOH")]
    V0676PokemonFurfrouPharaoh,
    #[serde(rename = "V0676_POKEMON_FURFROU_STAR")]
    V0676PokemonFurfrouStar,
    #[serde(rename = "V0677_POKEMON_ESPURR")]
    V0677PokemonEspurr,
    #[serde(rename = "V0677_POKEMON_ESPURR_NORMAL")]
    V0677PokemonEspurrNormal,
    #[serde(rename = "V0678_POKEMON_MEOWSTIC")]
    V0678PokemonMeowstic,
    #[serde(rename = "V0678_POKEMON_MEOWSTIC_FEMALE")]
    V0678PokemonMeowsticFemale,
    #[serde(rename = "V0678_POKEMON_MEOWSTIC_NORMAL")]
    V0678PokemonMeowsticNormal,
    #[serde(rename = "V0679_POKEMON_HONEDGE")]
    V0679PokemonHonedge,
    #[serde(rename = "V0679_POKEMON_HONEDGE_NORMAL")]
    V0679PokemonHonedgeNormal,
    #[serde(rename = "V0680_POKEMON_DOUBLADE")]
    V0680PokemonDoublade,
    #[serde(rename = "V0680_POKEMON_DOUBLADE_NORMAL")]
    V0680PokemonDoubladeNormal,
    #[serde(rename = "V0681_POKEMON_AEGISLASH")]
    V0681PokemonAegislash,
    #[serde(rename = "V0681_POKEMON_AEGISLASH_BLADE")]
    V0681PokemonAegislashBlade,
    #[serde(rename = "V0681_POKEMON_AEGISLASH_SHIELD")]
    V0681PokemonAegislashShield,
    #[serde(rename = "V0682_POKEMON_SPRITZEE")]
    V0682PokemonSpritzee,
    #[serde(rename = "V0682_POKEMON_SPRITZEE_NORMAL")]
    V0682PokemonSpritzeeNormal,
    #[serde(rename = "V0683_POKEMON_AROMATISSE")]
    V0683PokemonAromatisse,
    #[serde(rename = "V0683_POKEMON_AROMATISSE_NORMAL")]
    V0683PokemonAromatisseNormal,
    #[serde(rename = "V0684_POKEMON_SWIRLIX")]
    V0684PokemonSwirlix,
    #[serde(rename = "V0684_POKEMON_SWIRLIX_NORMAL")]
    V0684PokemonSwirlixNormal,
    #[serde(rename = "V0685_POKEMON_SLURPUFF")]
    V0685PokemonSlurpuff,
    #[serde(rename = "V0685_POKEMON_SLURPUFF_NORMAL")]
    V0685PokemonSlurpuffNormal,
    #[serde(rename = "V0686_POKEMON_INKAY")]
    V0686PokemonInkay,
    #[serde(rename = "V0686_POKEMON_INKAY_NORMAL")]
    V0686PokemonInkayNormal,
    #[serde(rename = "V0687_POKEMON_MALAMAR")]
    V0687PokemonMalamar,
    #[serde(rename = "V0687_POKEMON_MALAMAR_NORMAL")]
    V0687PokemonMalamarNormal,
    #[serde(rename = "V0688_POKEMON_BINACLE")]
    V0688PokemonBinacle,
    #[serde(rename = "V0688_POKEMON_BINACLE_NORMAL")]
    V0688PokemonBinacleNormal,
    #[serde(rename = "V0689_POKEMON_BARBARACLE")]
    V0689PokemonBarbaracle,
    #[serde(rename = "V0689_POKEMON_BARBARACLE_NORMAL")]
    V0689PokemonBarbaracleNormal,
    #[serde(rename = "V0690_POKEMON_SKRELP")]
    V0690PokemonSkrelp,
    #[serde(rename = "V0690_POKEMON_SKRELP_NORMAL")]
    V0690PokemonSkrelpNormal,
    #[serde(rename = "V0691_POKEMON_DRAGALGE")]
    V0691PokemonDragalge,
    #[serde(rename = "V0691_POKEMON_DRAGALGE_NORMAL")]
    V0691PokemonDragalgeNormal,
    #[serde(rename = "V0692_POKEMON_CLAUNCHER")]
    V0692PokemonClauncher,
    #[serde(rename = "V0692_POKEMON_CLAUNCHER_NORMAL")]
    V0692PokemonClauncherNormal,
    #[serde(rename = "V0693_POKEMON_CLAWITZER")]
    V0693PokemonClawitzer,
    #[serde(rename = "V0693_POKEMON_CLAWITZER_NORMAL")]
    V0693PokemonClawitzerNormal,
    #[serde(rename = "V0694_POKEMON_HELIOPTILE")]
    V0694PokemonHelioptile,
    #[serde(rename = "V0694_POKEMON_HELIOPTILE_NORMAL")]
    V0694PokemonHelioptileNormal,
    #[serde(rename = "V0695_POKEMON_HELIOLISK")]
    V0695PokemonHeliolisk,
    #[serde(rename = "V0695_POKEMON_HELIOLISK_NORMAL")]
    V0695PokemonHelioliskNormal,
    #[serde(rename = "V0696_POKEMON_TYRUNT")]
    V0696PokemonTyrunt,
    #[serde(rename = "V0696_POKEMON_TYRUNT_NORMAL")]
    V0696PokemonTyruntNormal,
    #[serde(rename = "V0697_POKEMON_TYRANTRUM")]
    V0697PokemonTyrantrum,
    #[serde(rename = "V0697_POKEMON_TYRANTRUM_NORMAL")]
    V0697PokemonTyrantrumNormal,
    #[serde(rename = "V0698_POKEMON_AMAURA")]
    V0698PokemonAmaura,
    #[serde(rename = "V0698_POKEMON_AMAURA_NORMAL")]
    V0698PokemonAmauraNormal,
    #[serde(rename = "V0699_POKEMON_AURORUS")]
    V0699PokemonAurorus,
    #[serde(rename = "V0699_POKEMON_AURORUS_NORMAL")]
    V0699PokemonAurorusNormal,
    #[serde(rename = "V0700_POKEMON_SYLVEON")]
    V0700PokemonSylveon,
    #[serde(rename = "V0700_POKEMON_SYLVEON_NORMAL")]
    V0700PokemonSylveonNormal,
    #[serde(rename = "V0701_POKEMON_HAWLUCHA")]
    V0701PokemonHawlucha,
    #[serde(rename = "V0701_POKEMON_HAWLUCHA_NORMAL")]
    V0701PokemonHawluchaNormal,
    #[serde(rename = "V0702_POKEMON_DEDENNE")]
    V0702PokemonDedenne,
    #[serde(rename = "V0702_POKEMON_DEDENNE_NORMAL")]
    V0702PokemonDedenneNormal,
    #[serde(rename = "V0703_POKEMON_CARBINK")]
    V0703PokemonCarbink,
    #[serde(rename = "V0703_POKEMON_CARBINK_NORMAL")]
    V0703PokemonCarbinkNormal,
    #[serde(rename = "V0704_POKEMON_GOOMY")]
    V0704PokemonGoomy,
    #[serde(rename = "V0704_POKEMON_GOOMY_NORMAL")]
    V0704PokemonGoomyNormal,
    #[serde(rename = "V0705_POKEMON_SLIGGOO")]
    V0705PokemonSliggoo,
    #[serde(rename = "V0705_POKEMON_SLIGGOO_NORMAL")]
    V0705PokemonSliggooNormal,
    #[serde(rename = "V0706_POKEMON_GOODRA")]
    V0706PokemonGoodra,
    #[serde(rename = "V0706_POKEMON_GOODRA_NORMAL")]
    V0706PokemonGoodraNormal,
    #[serde(rename = "V0707_POKEMON_KLEFKI")]
    V0707PokemonKlefki,
    #[serde(rename = "V0707_POKEMON_KLEFKI_NORMAL")]
    V0707PokemonKlefkiNormal,
    #[serde(rename = "V0708_POKEMON_PHANTUMP")]
    V0708PokemonPhantump,
    #[serde(rename = "V0708_POKEMON_PHANTUMP_NORMAL")]
    V0708PokemonPhantumpNormal,
    #[serde(rename = "V0709_POKEMON_TREVENANT")]
    V0709PokemonTrevenant,
    #[serde(rename = "V0709_POKEMON_TREVENANT_NORMAL")]
    V0709PokemonTrevenantNormal,
    #[serde(rename = "V0710_POKEMON_PUMPKABOO")]
    V0710PokemonPumpkaboo,
    #[serde(rename = "V0710_POKEMON_PUMPKABOO_AVERAGE")]
    V0710PokemonPumpkabooAverage,
    #[serde(rename = "V0710_POKEMON_PUMPKABOO_LARGE")]
    V0710PokemonPumpkabooLarge,
    #[serde(rename = "V0710_POKEMON_PUMPKABOO_SMALL")]
    V0710PokemonPumpkabooSmall,
    #[serde(rename = "V0710_POKEMON_PUMPKABOO_SUPER")]
    V0710PokemonPumpkabooSuper,
    #[serde(rename = "V0711_POKEMON_GOURGEIST")]
    V0711PokemonGourgeist,
    #[serde(rename = "V0711_POKEMON_GOURGEIST_AVERAGE")]
    V0711PokemonGourgeistAverage,
    #[serde(rename = "V0711_POKEMON_GOURGEIST_LARGE")]
    V0711PokemonGourgeistLarge,
    #[serde(rename = "V0711_POKEMON_GOURGEIST_SMALL")]
    V0711PokemonGourgeistSmall,
    #[serde(rename = "V0711_POKEMON_GOURGEIST_SUPER")]
    V0711PokemonGourgeistSuper,
    #[serde(rename = "V0712_POKEMON_BERGMITE")]
    V0712PokemonBergmite,
    #[serde(rename = "V0712_POKEMON_BERGMITE_NORMAL")]
    V0712PokemonBergmiteNormal,
    #[serde(rename = "V0713_POKEMON_AVALUGG")]
    V0713PokemonAvalugg,
    #[serde(rename = "V0713_POKEMON_AVALUGG_HISUIAN")]
    V0713PokemonAvaluggHisuian,
    #[serde(rename = "V0713_POKEMON_AVALUGG_NORMAL")]
    V0713PokemonAvaluggNormal,
    #[serde(rename = "V0714_POKEMON_NOIBAT")]
    V0714PokemonNoibat,
    #[serde(rename = "V0714_POKEMON_NOIBAT_NORMAL")]
    V0714PokemonNoibatNormal,
    #[serde(rename = "V0715_POKEMON_NOIVERN")]
    V0715PokemonNoivern,
    #[serde(rename = "V0715_POKEMON_NOIVERN_NORMAL")]
    V0715PokemonNoivernNormal,
    #[serde(rename = "V0716_POKEMON_XERNEAS")]
    V0716PokemonXerneas,
    #[serde(rename = "V0716_POKEMON_XERNEAS_NORMAL")]
    V0716PokemonXerneasNormal,
    #[serde(rename = "V0717_POKEMON_YVELTAL")]
    V0717PokemonYveltal,
    #[serde(rename = "V0717_POKEMON_YVELTAL_NORMAL")]
    V0717PokemonYveltalNormal,
    #[serde(rename = "V0718_POKEMON_ZYGARDE")]
    V0718PokemonZygarde,
    #[serde(rename = "V0718_POKEMON_ZYGARDE_COMPLETE")]
    V0718PokemonZygardeComplete,
    #[serde(rename = "V0718_POKEMON_ZYGARDE_COMPLETE_FIFTY_PERCENT")]
    V0718PokemonZygardeCompleteFiftyPercent,
    #[serde(rename = "V0718_POKEMON_ZYGARDE_COMPLETE_TEN_PERCENT")]
    V0718PokemonZygardeCompleteTenPercent,
    #[serde(rename = "V0718_POKEMON_ZYGARDE_FIFTY_PERCENT")]
    V0718PokemonZygardeFiftyPercent,
    #[serde(rename = "V0718_POKEMON_ZYGARDE_TEN_PERCENT")]
    V0718PokemonZygardeTenPercent,
    #[serde(rename = "V0719_POKEMON_DIANCIE")]
    V0719PokemonDiancie,
    #[serde(rename = "V0719_POKEMON_DIANCIE_NORMAL")]
    V0719PokemonDiancieNormal,
    #[serde(rename = "V0720_POKEMON_HOOPA")]
    V0720PokemonHoopa,
    #[serde(rename = "V0720_POKEMON_HOOPA_CONFINED")]
    V0720PokemonHoopaConfined,
    #[serde(rename = "V0720_POKEMON_HOOPA_UNBOUND")]
    V0720PokemonHoopaUnbound,
    #[serde(rename = "V0721_POKEMON_VOLCANION")]
    V0721PokemonVolcanion,
    #[serde(rename = "V0721_POKEMON_VOLCANION_NORMAL")]
    V0721PokemonVolcanionNormal,
    #[serde(rename = "V0722_POKEMON_ROWLET")]
    V0722PokemonRowlet,
    #[serde(rename = "V0722_POKEMON_ROWLET_NORMAL")]
    V0722PokemonRowletNormal,
    #[serde(rename = "V0723_POKEMON_DARTRIX")]
    V0723PokemonDartrix,
    #[serde(rename = "V0723_POKEMON_DARTRIX_NORMAL")]
    V0723PokemonDartrixNormal,
    #[serde(rename = "V0724_POKEMON_DECIDUEYE")]
    V0724PokemonDecidueye,
    #[serde(rename = "V0724_POKEMON_DECIDUEYE_HISUIAN")]
    V0724PokemonDecidueyeHisuian,
    #[serde(rename = "V0724_POKEMON_DECIDUEYE_NORMAL")]
    V0724PokemonDecidueyeNormal,
    #[serde(rename = "V0725_POKEMON_LITTEN")]
    V0725PokemonLitten,
    #[serde(rename = "V0725_POKEMON_LITTEN_NORMAL")]
    V0725PokemonLittenNormal,
    #[serde(rename = "V0726_POKEMON_TORRACAT")]
    V0726PokemonTorracat,
    #[serde(rename = "V0726_POKEMON_TORRACAT_NORMAL")]
    V0726PokemonTorracatNormal,
    #[serde(rename = "V0727_POKEMON_INCINEROAR")]
    V0727PokemonIncineroar,
    #[serde(rename = "V0727_POKEMON_INCINEROAR_NORMAL")]
    V0727PokemonIncineroarNormal,
    #[serde(rename = "V0728_POKEMON_POPPLIO")]
    V0728PokemonPopplio,
    #[serde(rename = "V0728_POKEMON_POPPLIO_NORMAL")]
    V0728PokemonPopplioNormal,
    #[serde(rename = "V0729_POKEMON_BRIONNE")]
    V0729PokemonBrionne,
    #[serde(rename = "V0729_POKEMON_BRIONNE_NORMAL")]
    V0729PokemonBrionneNormal,
    #[serde(rename = "V0730_POKEMON_PRIMARINA")]
    V0730PokemonPrimarina,
    #[serde(rename = "V0730_POKEMON_PRIMARINA_NORMAL")]
    V0730PokemonPrimarinaNormal,
    #[serde(rename = "V0731_POKEMON_PIKIPEK")]
    V0731PokemonPikipek,
    #[serde(rename = "V0731_POKEMON_PIKIPEK_NORMAL")]
    V0731PokemonPikipekNormal,
    #[serde(rename = "V0732_POKEMON_TRUMBEAK")]
    V0732PokemonTrumbeak,
    #[serde(rename = "V0732_POKEMON_TRUMBEAK_NORMAL")]
    V0732PokemonTrumbeakNormal,
    #[serde(rename = "V0733_POKEMON_TOUCANNON")]
    V0733PokemonToucannon,
    #[serde(rename = "V0733_POKEMON_TOUCANNON_NORMAL")]
    V0733PokemonToucannonNormal,
    #[serde(rename = "V0734_POKEMON_YUNGOOS")]
    V0734PokemonYungoos,
    #[serde(rename = "V0734_POKEMON_YUNGOOS_NORMAL")]
    V0734PokemonYungoosNormal,
    #[serde(rename = "V0735_POKEMON_GUMSHOOS")]
    V0735PokemonGumshoos,
    #[serde(rename = "V0735_POKEMON_GUMSHOOS_NORMAL")]
    V0735PokemonGumshoosNormal,
    #[serde(rename = "V0736_POKEMON_GRUBBIN")]
    V0736PokemonGrubbin,
    #[serde(rename = "V0736_POKEMON_GRUBBIN_NORMAL")]
    V0736PokemonGrubbinNormal,
    #[serde(rename = "V0737_POKEMON_CHARJABUG")]
    V0737PokemonCharjabug,
    #[serde(rename = "V0737_POKEMON_CHARJABUG_NORMAL")]
    V0737PokemonCharjabugNormal,
    #[serde(rename = "V0737_POKEMON_CHARJABUG_WINTER_2025")]
    V0737PokemonCharjabugWinter2025,
    #[serde(rename = "V0738_POKEMON_VIKAVOLT")]
    V0738PokemonVikavolt,
    #[serde(rename = "V0738_POKEMON_VIKAVOLT_NORMAL")]
    V0738PokemonVikavoltNormal,
    #[serde(rename = "V0738_POKEMON_VIKAVOLT_WINTER_2025")]
    V0738PokemonVikavoltWinter2025,
    #[serde(rename = "V0739_POKEMON_CRABRAWLER")]
    V0739PokemonCrabrawler,
    #[serde(rename = "V0739_POKEMON_CRABRAWLER_NORMAL")]
    V0739PokemonCrabrawlerNormal,
    #[serde(rename = "V0740_POKEMON_CRABOMINABLE")]
    V0740PokemonCrabominable,
    #[serde(rename = "V0740_POKEMON_CRABOMINABLE_NORMAL")]
    V0740PokemonCrabominableNormal,
    #[serde(rename = "V0741_POKEMON_ORICORIO")]
    V0741PokemonOricorio,
    #[serde(rename = "V0741_POKEMON_ORICORIO_BAILE")]
    V0741PokemonOricorioBaile,
    #[serde(rename = "V0741_POKEMON_ORICORIO_PAU")]
    V0741PokemonOricorioPau,
    #[serde(rename = "V0741_POKEMON_ORICORIO_POMPOM")]
    V0741PokemonOricorioPompom,
    #[serde(rename = "V0741_POKEMON_ORICORIO_SENSU")]
    V0741PokemonOricorioSensu,
    #[serde(rename = "V0742_POKEMON_CUTIEFLY")]
    V0742PokemonCutiefly,
    #[serde(rename = "V0742_POKEMON_CUTIEFLY_NORMAL")]
    V0742PokemonCutieflyNormal,
    #[serde(rename = "V0743_POKEMON_RIBOMBEE")]
    V0743PokemonRibombee,
    #[serde(rename = "V0743_POKEMON_RIBOMBEE_NORMAL")]
    V0743PokemonRibombeeNormal,
    #[serde(rename = "V0744_POKEMON_ROCKRUFF")]
    V0744PokemonRockruff,
    #[serde(rename = "V0744_POKEMON_ROCKRUFF_DUSK")]
    V0744PokemonRockruffDusk,
    #[serde(rename = "V0744_POKEMON_ROCKRUFF_NORMAL")]
    V0744PokemonRockruffNormal,
    #[serde(rename = "V0745_POKEMON_LYCANROC")]
    V0745PokemonLycanroc,
    #[serde(rename = "V0745_POKEMON_LYCANROC_DUSK")]
    V0745PokemonLycanrocDusk,
    #[serde(rename = "V0745_POKEMON_LYCANROC_MIDDAY")]
    V0745PokemonLycanrocMidday,
    #[serde(rename = "V0745_POKEMON_LYCANROC_MIDNIGHT")]
    V0745PokemonLycanrocMidnight,
    #[serde(rename = "V0746_POKEMON_WISHIWASHI")]
    V0746PokemonWishiwashi,
    #[serde(rename = "V0746_POKEMON_WISHIWASHI_SCHOOL")]
    V0746PokemonWishiwashiSchool,
    #[serde(rename = "V0746_POKEMON_WISHIWASHI_SOLO")]
    V0746PokemonWishiwashiSolo,
    #[serde(rename = "V0747_POKEMON_MAREANIE")]
    V0747PokemonMareanie,
    #[serde(rename = "V0747_POKEMON_MAREANIE_NORMAL")]
    V0747PokemonMareanieNormal,
    #[serde(rename = "V0748_POKEMON_TOXAPEX")]
    V0748PokemonToxapex,
    #[serde(rename = "V0748_POKEMON_TOXAPEX_NORMAL")]
    V0748PokemonToxapexNormal,
    #[serde(rename = "V0749_POKEMON_MUDBRAY")]
    V0749PokemonMudbray,
    #[serde(rename = "V0749_POKEMON_MUDBRAY_NORMAL")]
    V0749PokemonMudbrayNormal,
    #[serde(rename = "V0750_POKEMON_MUDSDALE")]
    V0750PokemonMudsdale,
    #[serde(rename = "V0750_POKEMON_MUDSDALE_NORMAL")]
    V0750PokemonMudsdaleNormal,
    #[serde(rename = "V0751_POKEMON_DEWPIDER")]
    V0751PokemonDewpider,
    #[serde(rename = "V0751_POKEMON_DEWPIDER_NORMAL")]
    V0751PokemonDewpiderNormal,
    #[serde(rename = "V0752_POKEMON_ARAQUANID")]
    V0752PokemonAraquanid,
    #[serde(rename = "V0752_POKEMON_ARAQUANID_NORMAL")]
    V0752PokemonAraquanidNormal,
    #[serde(rename = "V0753_POKEMON_FOMANTIS")]
    V0753PokemonFomantis,
    #[serde(rename = "V0753_POKEMON_FOMANTIS_NORMAL")]
    V0753PokemonFomantisNormal,
    #[serde(rename = "V0754_POKEMON_LURANTIS")]
    V0754PokemonLurantis,
    #[serde(rename = "V0754_POKEMON_LURANTIS_NORMAL")]
    V0754PokemonLurantisNormal,
    #[serde(rename = "V0755_POKEMON_MORELULL")]
    V0755PokemonMorelull,
    #[serde(rename = "V0755_POKEMON_MORELULL_NORMAL")]
    V0755PokemonMorelullNormal,
    #[serde(rename = "V0756_POKEMON_SHIINOTIC")]
    V0756PokemonShiinotic,
    #[serde(rename = "V0756_POKEMON_SHIINOTIC_NORMAL")]
    V0756PokemonShiinoticNormal,
    #[serde(rename = "V0757_POKEMON_SALANDIT")]
    V0757PokemonSalandit,
    #[serde(rename = "V0757_POKEMON_SALANDIT_NORMAL")]
    V0757PokemonSalanditNormal,
    #[serde(rename = "V0758_POKEMON_SALAZZLE")]
    V0758PokemonSalazzle,
    #[serde(rename = "V0758_POKEMON_SALAZZLE_NORMAL")]
    V0758PokemonSalazzleNormal,
    #[serde(rename = "V0759_POKEMON_STUFFUL")]
    V0759PokemonStufful,
    #[serde(rename = "V0759_POKEMON_STUFFUL_NORMAL")]
    V0759PokemonStuffulNormal,
    #[serde(rename = "V0760_POKEMON_BEWEAR")]
    V0760PokemonBewear,
    #[serde(rename = "V0760_POKEMON_BEWEAR_NORMAL")]
    V0760PokemonBewearNormal,
    #[serde(rename = "V0760_POKEMON_BEWEAR_WILDAREA_2025")]
    V0760PokemonBewearWildarea2025,
    #[serde(rename = "V0761_POKEMON_BOUNSWEET")]
    V0761PokemonBounsweet,
    #[serde(rename = "V0761_POKEMON_BOUNSWEET_NORMAL")]
    V0761PokemonBounsweetNormal,
    #[serde(rename = "V0762_POKEMON_STEENEE")]
    V0762PokemonSteenee,
    #[serde(rename = "V0762_POKEMON_STEENEE_NORMAL")]
    V0762PokemonSteeneeNormal,
    #[serde(rename = "V0763_POKEMON_TSAREENA")]
    V0763PokemonTsareena,
    #[serde(rename = "V0763_POKEMON_TSAREENA_NORMAL")]
    V0763PokemonTsareenaNormal,
    #[serde(rename = "V0764_POKEMON_COMFEY")]
    V0764PokemonComfey,
    #[serde(rename = "V0764_POKEMON_COMFEY_NORMAL")]
    V0764PokemonComfeyNormal,
    #[serde(rename = "V0765_POKEMON_ORANGURU")]
    V0765PokemonOranguru,
    #[serde(rename = "V0765_POKEMON_ORANGURU_NORMAL")]
    V0765PokemonOranguruNormal,
    #[serde(rename = "V0766_POKEMON_PASSIMIAN")]
    V0766PokemonPassimian,
    #[serde(rename = "V0766_POKEMON_PASSIMIAN_NORMAL")]
    V0766PokemonPassimianNormal,
    #[serde(rename = "V0767_POKEMON_WIMPOD")]
    V0767PokemonWimpod,
    #[serde(rename = "V0767_POKEMON_WIMPOD_NORMAL")]
    V0767PokemonWimpodNormal,
    #[serde(rename = "V0768_POKEMON_GOLISOPOD")]
    V0768PokemonGolisopod,
    #[serde(rename = "V0768_POKEMON_GOLISOPOD_NORMAL")]
    V0768PokemonGolisopodNormal,
    #[serde(rename = "V0769_POKEMON_SANDYGAST")]
    V0769PokemonSandygast,
    #[serde(rename = "V0769_POKEMON_SANDYGAST_NORMAL")]
    V0769PokemonSandygastNormal,
    #[serde(rename = "V0770_POKEMON_PALOSSAND")]
    V0770PokemonPalossand,
    #[serde(rename = "V0770_POKEMON_PALOSSAND_NORMAL")]
    V0770PokemonPalossandNormal,
    #[serde(rename = "V0771_POKEMON_PYUKUMUKU")]
    V0771PokemonPyukumuku,
    #[serde(rename = "V0771_POKEMON_PYUKUMUKU_NORMAL")]
    V0771PokemonPyukumukuNormal,
    #[serde(rename = "V0772_POKEMON_TYPE_NULL")]
    V0772PokemonTypeNull,
    #[serde(rename = "V0772_POKEMON_TYPE_NULL_NORMAL")]
    V0772PokemonTypeNullNormal,
    #[serde(rename = "V0773_POKEMON_SILVALLY")]
    V0773PokemonSilvally,
    #[serde(rename = "V0773_POKEMON_SILVALLY_BUG")]
    V0773PokemonSilvallyBug,
    #[serde(rename = "V0773_POKEMON_SILVALLY_DARK")]
    V0773PokemonSilvallyDark,
    #[serde(rename = "V0773_POKEMON_SILVALLY_DRAGON")]
    V0773PokemonSilvallyDragon,
    #[serde(rename = "V0773_POKEMON_SILVALLY_ELECTRIC")]
    V0773PokemonSilvallyElectric,
    #[serde(rename = "V0773_POKEMON_SILVALLY_FAIRY")]
    V0773PokemonSilvallyFairy,
    #[serde(rename = "V0773_POKEMON_SILVALLY_FIGHTING")]
    V0773PokemonSilvallyFighting,
    #[serde(rename = "V0773_POKEMON_SILVALLY_FIRE")]
    V0773PokemonSilvallyFire,
    #[serde(rename = "V0773_POKEMON_SILVALLY_FLYING")]
    V0773PokemonSilvallyFlying,
    #[serde(rename = "V0773_POKEMON_SILVALLY_GHOST")]
    V0773PokemonSilvallyGhost,
    #[serde(rename = "V0773_POKEMON_SILVALLY_GRASS")]
    V0773PokemonSilvallyGrass,
    #[serde(rename = "V0773_POKEMON_SILVALLY_GROUND")]
    V0773PokemonSilvallyGround,
    #[serde(rename = "V0773_POKEMON_SILVALLY_ICE")]
    V0773PokemonSilvallyIce,
    #[serde(rename = "V0773_POKEMON_SILVALLY_NORMAL")]
    V0773PokemonSilvallyNormal,
    #[serde(rename = "V0773_POKEMON_SILVALLY_POISON")]
    V0773PokemonSilvallyPoison,
    #[serde(rename = "V0773_POKEMON_SILVALLY_PSYCHIC")]
    V0773PokemonSilvallyPsychic,
    #[serde(rename = "V0773_POKEMON_SILVALLY_ROCK")]
    V0773PokemonSilvallyRock,
    #[serde(rename = "V0773_POKEMON_SILVALLY_STEEL")]
    V0773PokemonSilvallySteel,
    #[serde(rename = "V0773_POKEMON_SILVALLY_WATER")]
    V0773PokemonSilvallyWater,
    #[serde(rename = "V0774_POKEMON_MINIOR")]
    V0774PokemonMinior,
    #[serde(rename = "V0774_POKEMON_MINIOR_BLUE")]
    V0774PokemonMiniorBlue,
    #[serde(rename = "V0774_POKEMON_MINIOR_GREEN")]
    V0774PokemonMiniorGreen,
    #[serde(rename = "V0774_POKEMON_MINIOR_INDIGO")]
    V0774PokemonMiniorIndigo,
    #[serde(rename = "V0774_POKEMON_MINIOR_ORANGE")]
    V0774PokemonMiniorOrange,
    #[serde(rename = "V0774_POKEMON_MINIOR_RED")]
    V0774PokemonMiniorRed,
    #[serde(rename = "V0774_POKEMON_MINIOR_VIOLET")]
    V0774PokemonMiniorViolet,
    #[serde(rename = "V0774_POKEMON_MINIOR_YELLOW")]
    V0774PokemonMiniorYellow,
    #[serde(rename = "V0775_POKEMON_KOMALA")]
    V0775PokemonKomala,
    #[serde(rename = "V0775_POKEMON_KOMALA_NORMAL")]
    V0775PokemonKomalaNormal,
    #[serde(rename = "V0776_POKEMON_TURTONATOR")]
    V0776PokemonTurtonator,
    #[serde(rename = "V0776_POKEMON_TURTONATOR_NORMAL")]
    V0776PokemonTurtonatorNormal,
    #[serde(rename = "V0777_POKEMON_TOGEDEMARU")]
    V0777PokemonTogedemaru,
    #[serde(rename = "V0777_POKEMON_TOGEDEMARU_NORMAL")]
    V0777PokemonTogedemaruNormal,
    #[serde(rename = "V0778_POKEMON_MIMIKYU")]
    V0778PokemonMimikyu,
    #[serde(rename = "V0778_POKEMON_MIMIKYU_BUSTED")]
    V0778PokemonMimikyuBusted,
    #[serde(rename = "V0778_POKEMON_MIMIKYU_DISGUISED")]
    V0778PokemonMimikyuDisguised,
    #[serde(rename = "V0779_POKEMON_BRUXISH")]
    V0779PokemonBruxish,
    #[serde(rename = "V0779_POKEMON_BRUXISH_NORMAL")]
    V0779PokemonBruxishNormal,
    #[serde(rename = "V0780_POKEMON_DRAMPA")]
    V0780PokemonDrampa,
    #[serde(rename = "V0780_POKEMON_DRAMPA_NORMAL")]
    V0780PokemonDrampaNormal,
    #[serde(rename = "V0781_POKEMON_DHELMISE")]
    V0781PokemonDhelmise,
    #[serde(rename = "V0781_POKEMON_DHELMISE_NORMAL")]
    V0781PokemonDhelmiseNormal,
    #[serde(rename = "V0782_POKEMON_JANGMO_O")]
    V0782PokemonJangmoO,
    #[serde(rename = "V0782_POKEMON_JANGMO_O_NORMAL")]
    V0782PokemonJangmoONormal,
    #[serde(rename = "V0783_POKEMON_HAKAMO_O")]
    V0783PokemonHakamoO,
    #[serde(rename = "V0783_POKEMON_HAKAMO_O_NORMAL")]
    V0783PokemonHakamoONormal,
    #[serde(rename = "V0784_POKEMON_KOMMO_O")]
    V0784PokemonKommoO,
    #[serde(rename = "V0784_POKEMON_KOMMO_O_NORMAL")]
    V0784PokemonKommoONormal,
    #[serde(rename = "V0785_POKEMON_TAPU_KOKO")]
    V0785PokemonTapuKoko,
    #[serde(rename = "V0785_POKEMON_TAPU_KOKO_NORMAL")]
    V0785PokemonTapuKokoNormal,
    #[serde(rename = "V0786_POKEMON_TAPU_LELE")]
    V0786PokemonTapuLele,
    #[serde(rename = "V0786_POKEMON_TAPU_LELE_NORMAL")]
    V0786PokemonTapuLeleNormal,
    #[serde(rename = "V0787_POKEMON_TAPU_BULU")]
    V0787PokemonTapuBulu,
    #[serde(rename = "V0787_POKEMON_TAPU_BULU_NORMAL")]
    V0787PokemonTapuBuluNormal,
    #[serde(rename = "V0788_POKEMON_TAPU_FINI")]
    V0788PokemonTapuFini,
    #[serde(rename = "V0788_POKEMON_TAPU_FINI_NORMAL")]
    V0788PokemonTapuFiniNormal,
    #[serde(rename = "V0789_POKEMON_COSMOG")]
    V0789PokemonCosmog,
    #[serde(rename = "V0789_POKEMON_COSMOG_NORMAL")]
    V0789PokemonCosmogNormal,
    #[serde(rename = "V0790_POKEMON_COSMOEM")]
    V0790PokemonCosmoem,
    #[serde(rename = "V0790_POKEMON_COSMOEM_NORMAL")]
    V0790PokemonCosmoemNormal,
    #[serde(rename = "V0791_POKEMON_SOLGALEO")]
    V0791PokemonSolgaleo,
    #[serde(rename = "V0791_POKEMON_SOLGALEO_NORMAL")]
    V0791PokemonSolgaleoNormal,
    #[serde(rename = "V0792_POKEMON_LUNALA")]
    V0792PokemonLunala,
    #[serde(rename = "V0792_POKEMON_LUNALA_NORMAL")]
    V0792PokemonLunalaNormal,
    #[serde(rename = "V0793_POKEMON_NIHILEGO")]
    V0793PokemonNihilego,
    #[serde(rename = "V0793_POKEMON_NIHILEGO_NORMAL")]
    V0793PokemonNihilegoNormal,
    #[serde(rename = "V0794_POKEMON_BUZZWOLE")]
    V0794PokemonBuzzwole,
    #[serde(rename = "V0794_POKEMON_BUZZWOLE_NORMAL")]
    V0794PokemonBuzzwoleNormal,
    #[serde(rename = "V0795_POKEMON_PHEROMOSA")]
    V0795PokemonPheromosa,
    #[serde(rename = "V0795_POKEMON_PHEROMOSA_NORMAL")]
    V0795PokemonPheromosaNormal,
    #[serde(rename = "V0796_POKEMON_XURKITREE")]
    V0796PokemonXurkitree,
    #[serde(rename = "V0796_POKEMON_XURKITREE_NORMAL")]
    V0796PokemonXurkitreeNormal,
    #[serde(rename = "V0797_POKEMON_CELESTEELA")]
    V0797PokemonCelesteela,
    #[serde(rename = "V0797_POKEMON_CELESTEELA_NORMAL")]
    V0797PokemonCelesteelaNormal,
    #[serde(rename = "V0798_POKEMON_KARTANA")]
    V0798PokemonKartana,
    #[serde(rename = "V0798_POKEMON_KARTANA_NORMAL")]
    V0798PokemonKartanaNormal,
    #[serde(rename = "V0799_POKEMON_GUZZLORD")]
    V0799PokemonGuzzlord,
    #[serde(rename = "V0799_POKEMON_GUZZLORD_NORMAL")]
    V0799PokemonGuzzlordNormal,
    #[serde(rename = "V0800_POKEMON_NECROZMA")]
    V0800PokemonNecrozma,
    #[serde(rename = "V0800_POKEMON_NECROZMA_DAWN_WINGS")]
    V0800PokemonNecrozmaDawnWings,
    #[serde(rename = "V0800_POKEMON_NECROZMA_DUSK_MANE")]
    V0800PokemonNecrozmaDuskMane,
    #[serde(rename = "V0800_POKEMON_NECROZMA_NORMAL")]
    V0800PokemonNecrozmaNormal,
    #[serde(rename = "V0800_POKEMON_NECROZMA_ULTRA")]
    V0800PokemonNecrozmaUltra,
    #[serde(rename = "V0801_POKEMON_MAGEARNA")]
    V0801PokemonMagearna,
    #[serde(rename = "V0801_POKEMON_MAGEARNA_NORMAL")]
    V0801PokemonMagearnaNormal,
    #[serde(rename = "V0801_POKEMON_MAGEARNA_ORIGINAL_COLOR")]
    V0801PokemonMagearnaOriginalColor,
    #[serde(rename = "V0802_POKEMON_MARSHADOW")]
    V0802PokemonMarshadow,
    #[serde(rename = "V0802_POKEMON_MARSHADOW_NORMAL")]
    V0802PokemonMarshadowNormal,
    #[serde(rename = "V0803_POKEMON_POIPOLE")]
    V0803PokemonPoipole,
    #[serde(rename = "V0803_POKEMON_POIPOLE_NORMAL")]
    V0803PokemonPoipoleNormal,
    #[serde(rename = "V0804_POKEMON_NAGANADEL")]
    V0804PokemonNaganadel,
    #[serde(rename = "V0804_POKEMON_NAGANADEL_NORMAL")]
    V0804PokemonNaganadelNormal,
    #[serde(rename = "V0805_POKEMON_STAKATAKA")]
    V0805PokemonStakataka,
    #[serde(rename = "V0805_POKEMON_STAKATAKA_NORMAL")]
    V0805PokemonStakatakaNormal,
    #[serde(rename = "V0806_POKEMON_BLACEPHALON")]
    V0806PokemonBlacephalon,
    #[serde(rename = "V0806_POKEMON_BLACEPHALON_NORMAL")]
    V0806PokemonBlacephalonNormal,
    #[serde(rename = "V0807_POKEMON_ZERAORA")]
    V0807PokemonZeraora,
    #[serde(rename = "V0807_POKEMON_ZERAORA_NORMAL")]
    V0807PokemonZeraoraNormal,
    #[serde(rename = "V0808_POKEMON_MELTAN")]
    V0808PokemonMeltan,
    #[serde(rename = "V0808_POKEMON_MELTAN_NORMAL")]
    V0808PokemonMeltanNormal,
    #[serde(rename = "V0809_POKEMON_MELMETAL")]
    V0809PokemonMelmetal,
    #[serde(rename = "V0809_POKEMON_MELMETAL_NORMAL")]
    V0809PokemonMelmetalNormal,
    #[serde(rename = "V0810_POKEMON_GROOKEY")]
    V0810PokemonGrookey,
    #[serde(rename = "V0810_POKEMON_GROOKEY_NORMAL")]
    V0810PokemonGrookeyNormal,
    #[serde(rename = "V0811_POKEMON_THWACKEY")]
    V0811PokemonThwackey,
    #[serde(rename = "V0811_POKEMON_THWACKEY_NORMAL")]
    V0811PokemonThwackeyNormal,
    #[serde(rename = "V0812_POKEMON_RILLABOOM")]
    V0812PokemonRillaboom,
    #[serde(rename = "V0812_POKEMON_RILLABOOM_NORMAL")]
    V0812PokemonRillaboomNormal,
    #[serde(rename = "V0813_POKEMON_SCORBUNNY")]
    V0813PokemonScorbunny,
    #[serde(rename = "V0813_POKEMON_SCORBUNNY_NORMAL")]
    V0813PokemonScorbunnyNormal,
    #[serde(rename = "V0814_POKEMON_RABOOT")]
    V0814PokemonRaboot,
    #[serde(rename = "V0814_POKEMON_RABOOT_NORMAL")]
    V0814PokemonRabootNormal,
    #[serde(rename = "V0815_POKEMON_CINDERACE")]
    V0815PokemonCinderace,
    #[serde(rename = "V0815_POKEMON_CINDERACE_NORMAL")]
    V0815PokemonCinderaceNormal,
    #[serde(rename = "V0816_POKEMON_SOBBLE")]
    V0816PokemonSobble,
    #[serde(rename = "V0816_POKEMON_SOBBLE_NORMAL")]
    V0816PokemonSobbleNormal,
    #[serde(rename = "V0817_POKEMON_DRIZZILE")]
    V0817PokemonDrizzile,
    #[serde(rename = "V0817_POKEMON_DRIZZILE_NORMAL")]
    V0817PokemonDrizzileNormal,
    #[serde(rename = "V0818_POKEMON_INTELEON")]
    V0818PokemonInteleon,
    #[serde(rename = "V0818_POKEMON_INTELEON_NORMAL")]
    V0818PokemonInteleonNormal,
    #[serde(rename = "V0819_POKEMON_SKWOVET")]
    V0819PokemonSkwovet,
    #[serde(rename = "V0819_POKEMON_SKWOVET_NORMAL")]
    V0819PokemonSkwovetNormal,
    #[serde(rename = "V0820_POKEMON_GREEDENT")]
    V0820PokemonGreedent,
    #[serde(rename = "V0820_POKEMON_GREEDENT_NORMAL")]
    V0820PokemonGreedentNormal,
    #[serde(rename = "V0821_POKEMON_ROOKIDEE")]
    V0821PokemonRookidee,
    #[serde(rename = "V0821_POKEMON_ROOKIDEE_NORMAL")]
    V0821PokemonRookideeNormal,
    #[serde(rename = "V0822_POKEMON_CORVISQUIRE")]
    V0822PokemonCorvisquire,
    #[serde(rename = "V0822_POKEMON_CORVISQUIRE_NORMAL")]
    V0822PokemonCorvisquireNormal,
    #[serde(rename = "V0823_POKEMON_CORVIKNIGHT")]
    V0823PokemonCorviknight,
    #[serde(rename = "V0823_POKEMON_CORVIKNIGHT_NORMAL")]
    V0823PokemonCorviknightNormal,
    #[serde(rename = "V0824_POKEMON_BLIPBUG")]
    V0824PokemonBlipbug,
    #[serde(rename = "V0824_POKEMON_BLIPBUG_NORMAL")]
    V0824PokemonBlipbugNormal,
    #[serde(rename = "V0825_POKEMON_DOTTLER")]
    V0825PokemonDottler,
    #[serde(rename = "V0825_POKEMON_DOTTLER_NORMAL")]
    V0825PokemonDottlerNormal,
    #[serde(rename = "V0826_POKEMON_ORBEETLE")]
    V0826PokemonOrbeetle,
    #[serde(rename = "V0826_POKEMON_ORBEETLE_NORMAL")]
    V0826PokemonOrbeetleNormal,
    #[serde(rename = "V0827_POKEMON_NICKIT")]
    V0827PokemonNickit,
    #[serde(rename = "V0827_POKEMON_NICKIT_NORMAL")]
    V0827PokemonNickitNormal,
    #[serde(rename = "V0828_POKEMON_THIEVUL")]
    V0828PokemonThievul,
    #[serde(rename = "V0828_POKEMON_THIEVUL_NORMAL")]
    V0828PokemonThievulNormal,
    #[serde(rename = "V0829_POKEMON_GOSSIFLEUR")]
    V0829PokemonGossifleur,
    #[serde(rename = "V0829_POKEMON_GOSSIFLEUR_NORMAL")]
    V0829PokemonGossifleurNormal,
    #[serde(rename = "V0830_POKEMON_ELDEGOSS")]
    V0830PokemonEldegoss,
    #[serde(rename = "V0830_POKEMON_ELDEGOSS_NORMAL")]
    V0830PokemonEldegossNormal,
    #[serde(rename = "V0831_POKEMON_WOOLOO")]
    V0831PokemonWooloo,
    #[serde(rename = "V0831_POKEMON_WOOLOO_NORMAL")]
    V0831PokemonWoolooNormal,
    #[serde(rename = "V0832_POKEMON_DUBWOOL")]
    V0832PokemonDubwool,
    #[serde(rename = "V0832_POKEMON_DUBWOOL_NORMAL")]
    V0832PokemonDubwoolNormal,
    #[serde(rename = "V0833_POKEMON_CHEWTLE")]
    V0833PokemonChewtle,
    #[serde(rename = "V0833_POKEMON_CHEWTLE_NORMAL")]
    V0833PokemonChewtleNormal,
    #[serde(rename = "V0834_POKEMON_DREDNAW")]
    V0834PokemonDrednaw,
    #[serde(rename = "V0834_POKEMON_DREDNAW_NORMAL")]
    V0834PokemonDrednawNormal,
    #[serde(rename = "V0835_POKEMON_YAMPER")]
    V0835PokemonYamper,
    #[serde(rename = "V0835_POKEMON_YAMPER_NORMAL")]
    V0835PokemonYamperNormal,
    #[serde(rename = "V0836_POKEMON_BOLTUND")]
    V0836PokemonBoltund,
    #[serde(rename = "V0836_POKEMON_BOLTUND_NORMAL")]
    V0836PokemonBoltundNormal,
    #[serde(rename = "V0837_POKEMON_ROLYCOLY")]
    V0837PokemonRolycoly,
    #[serde(rename = "V0837_POKEMON_ROLYCOLY_NORMAL")]
    V0837PokemonRolycolyNormal,
    #[serde(rename = "V0838_POKEMON_CARKOL")]
    V0838PokemonCarkol,
    #[serde(rename = "V0838_POKEMON_CARKOL_NORMAL")]
    V0838PokemonCarkolNormal,
    #[serde(rename = "V0839_POKEMON_COALOSSAL")]
    V0839PokemonCoalossal,
    #[serde(rename = "V0839_POKEMON_COALOSSAL_NORMAL")]
    V0839PokemonCoalossalNormal,
    #[serde(rename = "V0840_POKEMON_APPLIN")]
    V0840PokemonApplin,
    #[serde(rename = "V0840_POKEMON_APPLIN_NORMAL")]
    V0840PokemonApplinNormal,
    #[serde(rename = "V0841_POKEMON_FLAPPLE")]
    V0841PokemonFlapple,
    #[serde(rename = "V0841_POKEMON_FLAPPLE_NORMAL")]
    V0841PokemonFlappleNormal,
    #[serde(rename = "V0842_POKEMON_APPLETUN")]
    V0842PokemonAppletun,
    #[serde(rename = "V0842_POKEMON_APPLETUN_NORMAL")]
    V0842PokemonAppletunNormal,
    #[serde(rename = "V0843_POKEMON_SILICOBRA")]
    V0843PokemonSilicobra,
    #[serde(rename = "V0843_POKEMON_SILICOBRA_NORMAL")]
    V0843PokemonSilicobraNormal,
    #[serde(rename = "V0844_POKEMON_SANDACONDA")]
    V0844PokemonSandaconda,
    #[serde(rename = "V0844_POKEMON_SANDACONDA_NORMAL")]
    V0844PokemonSandacondaNormal,
    #[serde(rename = "V0845_POKEMON_CRAMORANT")]
    V0845PokemonCramorant,
    #[serde(rename = "V0845_POKEMON_CRAMORANT_NORMAL")]
    V0845PokemonCramorantNormal,
    #[serde(rename = "V0846_POKEMON_ARROKUDA")]
    V0846PokemonArrokuda,
    #[serde(rename = "V0846_POKEMON_ARROKUDA_NORMAL")]
    V0846PokemonArrokudaNormal,
    #[serde(rename = "V0847_POKEMON_BARRASKEWDA")]
    V0847PokemonBarraskewda,
    #[serde(rename = "V0847_POKEMON_BARRASKEWDA_NORMAL")]
    V0847PokemonBarraskewdaNormal,
    #[serde(rename = "V0848_POKEMON_TOXEL")]
    V0848PokemonToxel,
    #[serde(rename = "V0848_POKEMON_TOXEL_NORMAL")]
    V0848PokemonToxelNormal,
    #[serde(rename = "V0849_POKEMON_TOXTRICITY")]
    V0849PokemonToxtricity,
    #[serde(rename = "V0849_POKEMON_TOXTRICITY_AMPED")]
    V0849PokemonToxtricityAmped,
    #[serde(rename = "V0849_POKEMON_TOXTRICITY_LOW_KEY")]
    V0849PokemonToxtricityLowKey,
    #[serde(rename = "V0850_POKEMON_SIZZLIPEDE")]
    V0850PokemonSizzlipede,
    #[serde(rename = "V0850_POKEMON_SIZZLIPEDE_NORMAL")]
    V0850PokemonSizzlipedeNormal,
    #[serde(rename = "V0851_POKEMON_CENTISKORCH")]
    V0851PokemonCentiskorch,
    #[serde(rename = "V0851_POKEMON_CENTISKORCH_NORMAL")]
    V0851PokemonCentiskorchNormal,
    #[serde(rename = "V0852_POKEMON_CLOBBOPUS")]
    V0852PokemonClobbopus,
    #[serde(rename = "V0852_POKEMON_CLOBBOPUS_NORMAL")]
    V0852PokemonClobbopusNormal,
    #[serde(rename = "V0853_POKEMON_GRAPPLOCT")]
    V0853PokemonGrapploct,
    #[serde(rename = "V0853_POKEMON_GRAPPLOCT_NORMAL")]
    V0853PokemonGrapploctNormal,
    #[serde(rename = "V0854_POKEMON_SINISTEA")]
    V0854PokemonSinistea,
    #[serde(rename = "V0854_POKEMON_SINISTEA_ANTIQUE")]
    V0854PokemonSinisteaAntique,
    #[serde(rename = "V0854_POKEMON_SINISTEA_PHONY")]
    V0854PokemonSinisteaPhony,
    #[serde(rename = "V0855_POKEMON_POLTEAGEIST")]
    V0855PokemonPolteageist,
    #[serde(rename = "V0855_POKEMON_POLTEAGEIST_ANTIQUE")]
    V0855PokemonPolteageistAntique,
    #[serde(rename = "V0855_POKEMON_POLTEAGEIST_PHONY")]
    V0855PokemonPolteageistPhony,
    #[serde(rename = "V0856_POKEMON_HATENNA")]
    V0856PokemonHatenna,
    #[serde(rename = "V0856_POKEMON_HATENNA_NORMAL")]
    V0856PokemonHatennaNormal,
    #[serde(rename = "V0857_POKEMON_HATTREM")]
    V0857PokemonHattrem,
    #[serde(rename = "V0857_POKEMON_HATTREM_NORMAL")]
    V0857PokemonHattremNormal,
    #[serde(rename = "V0858_POKEMON_HATTERENE")]
    V0858PokemonHatterene,
    #[serde(rename = "V0858_POKEMON_HATTERENE_NORMAL")]
    V0858PokemonHattereneNormal,
    #[serde(rename = "V0859_POKEMON_IMPIDIMP")]
    V0859PokemonImpidimp,
    #[serde(rename = "V0859_POKEMON_IMPIDIMP_NORMAL")]
    V0859PokemonImpidimpNormal,
    #[serde(rename = "V0860_POKEMON_MORGREM")]
    V0860PokemonMorgrem,
    #[serde(rename = "V0860_POKEMON_MORGREM_NORMAL")]
    V0860PokemonMorgremNormal,
    #[serde(rename = "V0861_POKEMON_GRIMMSNARL")]
    V0861PokemonGrimmsnarl,
    #[serde(rename = "V0861_POKEMON_GRIMMSNARL_NORMAL")]
    V0861PokemonGrimmsnarlNormal,
    #[serde(rename = "V0862_POKEMON_OBSTAGOON")]
    V0862PokemonObstagoon,
    #[serde(rename = "V0862_POKEMON_OBSTAGOON_NORMAL")]
    V0862PokemonObstagoonNormal,
    #[serde(rename = "V0863_POKEMON_PERRSERKER")]
    V0863PokemonPerrserker,
    #[serde(rename = "V0863_POKEMON_PERRSERKER_NORMAL")]
    V0863PokemonPerrserkerNormal,
    #[serde(rename = "V0864_POKEMON_CURSOLA")]
    V0864PokemonCursola,
    #[serde(rename = "V0864_POKEMON_CURSOLA_NORMAL")]
    V0864PokemonCursolaNormal,
    #[serde(rename = "V0865_POKEMON_SIRFETCHD")]
    V0865PokemonSirfetchd,
    #[serde(rename = "V0865_POKEMON_SIRFETCHD_NORMAL")]
    V0865PokemonSirfetchdNormal,
    #[serde(rename = "V0866_POKEMON_MR_RIME")]
    V0866PokemonMrRime,
    #[serde(rename = "V0866_POKEMON_MR_RIME_NORMAL")]
    V0866PokemonMrRimeNormal,
    #[serde(rename = "V0867_POKEMON_RUNERIGUS")]
    V0867PokemonRunerigus,
    #[serde(rename = "V0867_POKEMON_RUNERIGUS_NORMAL")]
    V0867PokemonRunerigusNormal,
    #[serde(rename = "V0868_POKEMON_MILCERY")]
    V0868PokemonMilcery,
    #[serde(rename = "V0868_POKEMON_MILCERY_NORMAL")]
    V0868PokemonMilceryNormal,
    #[serde(rename = "V0869_POKEMON_ALCREMIE")]
    V0869PokemonAlcremie,
    #[serde(rename = "V0869_POKEMON_ALCREMIE_NORMAL")]
    V0869PokemonAlcremieNormal,
    #[serde(rename = "V0870_POKEMON_FALINKS")]
    V0870PokemonFalinks,
    #[serde(rename = "V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR")]
    V0870PokemonFalinksGofest2025TrainConductor,
    #[serde(rename = "V0870_POKEMON_FALINKS_NORMAL")]
    V0870PokemonFalinksNormal,
    #[serde(rename = "V0871_POKEMON_PINCURCHIN")]
    V0871PokemonPincurchin,
    #[serde(rename = "V0871_POKEMON_PINCURCHIN_NORMAL")]
    V0871PokemonPincurchinNormal,
    #[serde(rename = "V0872_POKEMON_SNOM")]
    V0872PokemonSnom,
    #[serde(rename = "V0872_POKEMON_SNOM_NORMAL")]
    V0872PokemonSnomNormal,
    #[serde(rename = "V0873_POKEMON_FROSMOTH")]
    V0873PokemonFrosmoth,
    #[serde(rename = "V0873_POKEMON_FROSMOTH_NORMAL")]
    V0873PokemonFrosmothNormal,
    #[serde(rename = "V0874_POKEMON_STONJOURNER")]
    V0874PokemonStonjourner,
    #[serde(rename = "V0874_POKEMON_STONJOURNER_NORMAL")]
    V0874PokemonStonjournerNormal,
    #[serde(rename = "V0875_POKEMON_EISCUE")]
    V0875PokemonEiscue,
    #[serde(rename = "V0875_POKEMON_EISCUE_ICE")]
    V0875PokemonEiscueIce,
    #[serde(rename = "V0875_POKEMON_EISCUE_NOICE")]
    V0875PokemonEiscueNoice,
    #[serde(rename = "V0876_POKEMON_INDEEDEE")]
    V0876PokemonIndeedee,
    #[serde(rename = "V0876_POKEMON_INDEEDEE_FEMALE")]
    V0876PokemonIndeedeeFemale,
    #[serde(rename = "V0876_POKEMON_INDEEDEE_MALE")]
    V0876PokemonIndeedeeMale,
    #[serde(rename = "V0877_POKEMON_MORPEKO")]
    V0877PokemonMorpeko,
    #[serde(rename = "V0877_POKEMON_MORPEKO_FULL_BELLY")]
    V0877PokemonMorpekoFullBelly,
    #[serde(rename = "V0877_POKEMON_MORPEKO_HANGRY")]
    V0877PokemonMorpekoHangry,
    #[serde(rename = "V0878_POKEMON_CUFANT")]
    V0878PokemonCufant,
    #[serde(rename = "V0878_POKEMON_CUFANT_NORMAL")]
    V0878PokemonCufantNormal,
    #[serde(rename = "V0879_POKEMON_COPPERAJAH")]
    V0879PokemonCopperajah,
    #[serde(rename = "V0879_POKEMON_COPPERAJAH_NORMAL")]
    V0879PokemonCopperajahNormal,
    #[serde(rename = "V0880_POKEMON_DRACOZOLT")]
    V0880PokemonDracozolt,
    #[serde(rename = "V0880_POKEMON_DRACOZOLT_NORMAL")]
    V0880PokemonDracozoltNormal,
    #[serde(rename = "V0881_POKEMON_ARCTOZOLT")]
    V0881PokemonArctozolt,
    #[serde(rename = "V0881_POKEMON_ARCTOZOLT_NORMAL")]
    V0881PokemonArctozoltNormal,
    #[serde(rename = "V0882_POKEMON_DRACOVISH")]
    V0882PokemonDracovish,
    #[serde(rename = "V0882_POKEMON_DRACOVISH_NORMAL")]
    V0882PokemonDracovishNormal,
    #[serde(rename = "V0883_POKEMON_ARCTOVISH")]
    V0883PokemonArctovish,
    #[serde(rename = "V0883_POKEMON_ARCTOVISH_NORMAL")]
    V0883PokemonArctovishNormal,
    #[serde(rename = "V0884_POKEMON_DURALUDON")]
    V0884PokemonDuraludon,
    #[serde(rename = "V0884_POKEMON_DURALUDON_NORMAL")]
    V0884PokemonDuraludonNormal,
    #[serde(rename = "V0885_POKEMON_DREEPY")]
    V0885PokemonDreepy,
    #[serde(rename = "V0885_POKEMON_DREEPY_NORMAL")]
    V0885PokemonDreepyNormal,
    #[serde(rename = "V0886_POKEMON_DRAKLOAK")]
    V0886PokemonDrakloak,
    #[serde(rename = "V0886_POKEMON_DRAKLOAK_NORMAL")]
    V0886PokemonDrakloakNormal,
    #[serde(rename = "V0887_POKEMON_DRAGAPULT")]
    V0887PokemonDragapult,
    #[serde(rename = "V0887_POKEMON_DRAGAPULT_NORMAL")]
    V0887PokemonDragapultNormal,
    #[serde(rename = "V0888_POKEMON_ZACIAN")]
    V0888PokemonZacian,
    #[serde(rename = "V0888_POKEMON_ZACIAN_CROWNED_SWORD")]
    V0888PokemonZacianCrownedSword,
    #[serde(rename = "V0888_POKEMON_ZACIAN_HERO")]
    V0888PokemonZacianHero,
    #[serde(rename = "V0889_POKEMON_ZAMAZENTA")]
    V0889PokemonZamazenta,
    #[serde(rename = "V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD")]
    V0889PokemonZamazentaCrownedShield,
    #[serde(rename = "V0889_POKEMON_ZAMAZENTA_HERO")]
    V0889PokemonZamazentaHero,
    #[serde(rename = "V0890_POKEMON_ETERNATUS")]
    V0890PokemonEternatus,
    #[serde(rename = "V0890_POKEMON_ETERNATUS_ETERNAMAX")]
    V0890PokemonEternatusEternamax,
    #[serde(rename = "V0890_POKEMON_ETERNATUS_NORMAL")]
    V0890PokemonEternatusNormal,
    #[serde(rename = "V0891_POKEMON_KUBFU")]
    V0891PokemonKubfu,
    #[serde(rename = "V0891_POKEMON_KUBFU_NORMAL")]
    V0891PokemonKubfuNormal,
    #[serde(rename = "V0892_POKEMON_URSHIFU")]
    V0892PokemonUrshifu,
    #[serde(rename = "V0892_POKEMON_URSHIFU_RAPID_STRIKE")]
    V0892PokemonUrshifuRapidStrike,
    #[serde(rename = "V0892_POKEMON_URSHIFU_SINGLE_STRIKE")]
    V0892PokemonUrshifuSingleStrike,
    #[serde(rename = "V0893_POKEMON_ZARUDE")]
    V0893PokemonZarude,
    #[serde(rename = "V0893_POKEMON_ZARUDE_NORMAL")]
    V0893PokemonZarudeNormal,
    #[serde(rename = "V0894_POKEMON_REGIELEKI")]
    V0894PokemonRegieleki,
    #[serde(rename = "V0894_POKEMON_REGIELEKI_NORMAL")]
    V0894PokemonRegielekiNormal,
    #[serde(rename = "V0895_POKEMON_REGIDRAGO")]
    V0895PokemonRegidrago,
    #[serde(rename = "V0895_POKEMON_REGIDRAGO_NORMAL")]
    V0895PokemonRegidragoNormal,
    #[serde(rename = "V0896_POKEMON_GLASTRIER")]
    V0896PokemonGlastrier,
    #[serde(rename = "V0896_POKEMON_GLASTRIER_NORMAL")]
    V0896PokemonGlastrierNormal,
    #[serde(rename = "V0897_POKEMON_SPECTRIER")]
    V0897PokemonSpectrier,
    #[serde(rename = "V0897_POKEMON_SPECTRIER_NORMAL")]
    V0897PokemonSpectrierNormal,
    #[serde(rename = "V0898_POKEMON_CALYREX")]
    V0898PokemonCalyrex,
    #[serde(rename = "V0898_POKEMON_CALYREX_ICE_RIDER")]
    V0898PokemonCalyrexIceRider,
    #[serde(rename = "V0898_POKEMON_CALYREX_NORMAL")]
    V0898PokemonCalyrexNormal,
    #[serde(rename = "V0898_POKEMON_CALYREX_SHADOW_RIDER")]
    V0898PokemonCalyrexShadowRider,
    #[serde(rename = "V0899_POKEMON_WYRDEER")]
    V0899PokemonWyrdeer,
    #[serde(rename = "V0899_POKEMON_WYRDEER_NORMAL")]
    V0899PokemonWyrdeerNormal,
    #[serde(rename = "V0900_POKEMON_KLEAVOR")]
    V0900PokemonKleavor,
    #[serde(rename = "V0900_POKEMON_KLEAVOR_NORMAL")]
    V0900PokemonKleavorNormal,
    #[serde(rename = "V0901_POKEMON_URSALUNA")]
    V0901PokemonUrsaluna,
    #[serde(rename = "V0901_POKEMON_URSALUNA_NORMAL")]
    V0901PokemonUrsalunaNormal,
    #[serde(rename = "V0903_POKEMON_SNEASLER")]
    V0903PokemonSneasler,
    #[serde(rename = "V0903_POKEMON_SNEASLER_NORMAL")]
    V0903PokemonSneaslerNormal,
    #[serde(rename = "V0904_POKEMON_OVERQWIL")]
    V0904PokemonOverqwil,
    #[serde(rename = "V0904_POKEMON_OVERQWIL_NORMAL")]
    V0904PokemonOverqwilNormal,
    #[serde(rename = "V0905_POKEMON_ENAMORUS")]
    V0905PokemonEnamorus,
    #[serde(rename = "V0905_POKEMON_ENAMORUS_INCARNATE")]
    V0905PokemonEnamorusIncarnate,
    #[serde(rename = "V0905_POKEMON_ENAMORUS_THERIAN")]
    V0905PokemonEnamorusTherian,
    #[serde(rename = "V0906_POKEMON_SPRIGATITO")]
    V0906PokemonSprigatito,
    #[serde(rename = "V0906_POKEMON_SPRIGATITO_NORMAL")]
    V0906PokemonSprigatitoNormal,
    #[serde(rename = "V0907_POKEMON_FLORAGATO")]
    V0907PokemonFloragato,
    #[serde(rename = "V0907_POKEMON_FLORAGATO_NORMAL")]
    V0907PokemonFloragatoNormal,
    #[serde(rename = "V0908_POKEMON_MEOWSCARADA")]
    V0908PokemonMeowscarada,
    #[serde(rename = "V0908_POKEMON_MEOWSCARADA_NORMAL")]
    V0908PokemonMeowscaradaNormal,
    #[serde(rename = "V0909_POKEMON_FUECOCO")]
    V0909PokemonFuecoco,
    #[serde(rename = "V0909_POKEMON_FUECOCO_NORMAL")]
    V0909PokemonFuecocoNormal,
    #[serde(rename = "V0910_POKEMON_CROCALOR")]
    V0910PokemonCrocalor,
    #[serde(rename = "V0910_POKEMON_CROCALOR_NORMAL")]
    V0910PokemonCrocalorNormal,
    #[serde(rename = "V0911_POKEMON_SKELEDIRGE")]
    V0911PokemonSkeledirge,
    #[serde(rename = "V0911_POKEMON_SKELEDIRGE_NORMAL")]
    V0911PokemonSkeledirgeNormal,
    #[serde(rename = "V0912_POKEMON_QUAXLY")]
    V0912PokemonQuaxly,
    #[serde(rename = "V0912_POKEMON_QUAXLY_NORMAL")]
    V0912PokemonQuaxlyNormal,
    #[serde(rename = "V0913_POKEMON_QUAXWELL")]
    V0913PokemonQuaxwell,
    #[serde(rename = "V0913_POKEMON_QUAXWELL_NORMAL")]
    V0913PokemonQuaxwellNormal,
    #[serde(rename = "V0914_POKEMON_QUAQUAVAL")]
    V0914PokemonQuaquaval,
    #[serde(rename = "V0914_POKEMON_QUAQUAVAL_NORMAL")]
    V0914PokemonQuaquavalNormal,
    #[serde(rename = "V0915_POKEMON_LECHONK")]
    V0915PokemonLechonk,
    #[serde(rename = "V0915_POKEMON_LECHONK_NORMAL")]
    V0915PokemonLechonkNormal,
    #[serde(rename = "V0916_POKEMON_OINKOLOGNE")]
    V0916PokemonOinkologne,
    #[serde(rename = "V0916_POKEMON_OINKOLOGNE_FEMALE")]
    V0916PokemonOinkologneFemale,
    #[serde(rename = "V0916_POKEMON_OINKOLOGNE_NORMAL")]
    V0916PokemonOinkologneNormal,
    #[serde(rename = "V0917_POKEMON_TAROUNTULA")]
    V0917PokemonTarountula,
    #[serde(rename = "V0917_POKEMON_TAROUNTULA_NORMAL")]
    V0917PokemonTarountulaNormal,
    #[serde(rename = "V0918_POKEMON_SPIDOPS")]
    V0918PokemonSpidops,
    #[serde(rename = "V0918_POKEMON_SPIDOPS_NORMAL")]
    V0918PokemonSpidopsNormal,
    #[serde(rename = "V0919_POKEMON_NYMBLE")]
    V0919PokemonNymble,
    #[serde(rename = "V0919_POKEMON_NYMBLE_NORMAL")]
    V0919PokemonNymbleNormal,
    #[serde(rename = "V0920_POKEMON_LOKIX")]
    V0920PokemonLokix,
    #[serde(rename = "V0920_POKEMON_LOKIX_NORMAL")]
    V0920PokemonLokixNormal,
    #[serde(rename = "V0921_POKEMON_PAWMI")]
    V0921PokemonPawmi,
    #[serde(rename = "V0921_POKEMON_PAWMI_NORMAL")]
    V0921PokemonPawmiNormal,
    #[serde(rename = "V0922_POKEMON_PAWMO")]
    V0922PokemonPawmo,
    #[serde(rename = "V0922_POKEMON_PAWMO_NORMAL")]
    V0922PokemonPawmoNormal,
    #[serde(rename = "V0923_POKEMON_PAWMOT")]
    V0923PokemonPawmot,
    #[serde(rename = "V0923_POKEMON_PAWMOT_NORMAL")]
    V0923PokemonPawmotNormal,
    #[serde(rename = "V0924_POKEMON_TANDEMAUS")]
    V0924PokemonTandemaus,
    #[serde(rename = "V0924_POKEMON_TANDEMAUS_NORMAL")]
    V0924PokemonTandemausNormal,
    #[serde(rename = "V0925_POKEMON_MAUSHOLD")]
    V0925PokemonMaushold,
    #[serde(rename = "V0925_POKEMON_MAUSHOLD_FAMILY_OF_FOUR")]
    V0925PokemonMausholdFamilyOfFour,
    #[serde(rename = "V0925_POKEMON_MAUSHOLD_FAMILY_OF_THREE")]
    V0925PokemonMausholdFamilyOfThree,
    #[serde(rename = "V0926_POKEMON_FIDOUGH")]
    V0926PokemonFidough,
    #[serde(rename = "V0926_POKEMON_FIDOUGH_NORMAL")]
    V0926PokemonFidoughNormal,
    #[serde(rename = "V0927_POKEMON_DACHSBUN")]
    V0927PokemonDachsbun,
    #[serde(rename = "V0927_POKEMON_DACHSBUN_NORMAL")]
    V0927PokemonDachsbunNormal,
    #[serde(rename = "V0928_POKEMON_SMOLIV")]
    V0928PokemonSmoliv,
    #[serde(rename = "V0928_POKEMON_SMOLIV_NORMAL")]
    V0928PokemonSmolivNormal,
    #[serde(rename = "V0929_POKEMON_DOLLIV")]
    V0929PokemonDolliv,
    #[serde(rename = "V0929_POKEMON_DOLLIV_NORMAL")]
    V0929PokemonDollivNormal,
    #[serde(rename = "V0930_POKEMON_ARBOLIVA")]
    V0930PokemonArboliva,
    #[serde(rename = "V0930_POKEMON_ARBOLIVA_NORMAL")]
    V0930PokemonArbolivaNormal,
    #[serde(rename = "V0931_POKEMON_SQUAWKABILLY")]
    V0931PokemonSquawkabilly,
    #[serde(rename = "V0931_POKEMON_SQUAWKABILLY_BLUE")]
    V0931PokemonSquawkabillyBlue,
    #[serde(rename = "V0931_POKEMON_SQUAWKABILLY_GREEN")]
    V0931PokemonSquawkabillyGreen,
    #[serde(rename = "V0931_POKEMON_SQUAWKABILLY_WHITE")]
    V0931PokemonSquawkabillyWhite,
    #[serde(rename = "V0931_POKEMON_SQUAWKABILLY_YELLOW")]
    V0931PokemonSquawkabillyYellow,
    #[serde(rename = "V0932_POKEMON_NACLI")]
    V0932PokemonNacli,
    #[serde(rename = "V0932_POKEMON_NACLI_NORMAL")]
    V0932PokemonNacliNormal,
    #[serde(rename = "V0933_POKEMON_NACLSTACK")]
    V0933PokemonNaclstack,
    #[serde(rename = "V0933_POKEMON_NACLSTACK_NORMAL")]
    V0933PokemonNaclstackNormal,
    #[serde(rename = "V0934_POKEMON_GARGANACL")]
    V0934PokemonGarganacl,
    #[serde(rename = "V0934_POKEMON_GARGANACL_NORMAL")]
    V0934PokemonGarganaclNormal,
    #[serde(rename = "V0935_POKEMON_CHARCADET")]
    V0935PokemonCharcadet,
    #[serde(rename = "V0935_POKEMON_CHARCADET_NORMAL")]
    V0935PokemonCharcadetNormal,
    #[serde(rename = "V0936_POKEMON_ARMAROUGE")]
    V0936PokemonArmarouge,
    #[serde(rename = "V0936_POKEMON_ARMAROUGE_NORMAL")]
    V0936PokemonArmarougeNormal,
    #[serde(rename = "V0937_POKEMON_CERULEDGE")]
    V0937PokemonCeruledge,
    #[serde(rename = "V0937_POKEMON_CERULEDGE_NORMAL")]
    V0937PokemonCeruledgeNormal,
    #[serde(rename = "V0938_POKEMON_TADBULB")]
    V0938PokemonTadbulb,
    #[serde(rename = "V0938_POKEMON_TADBULB_NORMAL")]
    V0938PokemonTadbulbNormal,
    #[serde(rename = "V0939_POKEMON_BELLIBOLT")]
    V0939PokemonBellibolt,
    #[serde(rename = "V0939_POKEMON_BELLIBOLT_NORMAL")]
    V0939PokemonBelliboltNormal,
    #[serde(rename = "V0940_POKEMON_WATTREL")]
    V0940PokemonWattrel,
    #[serde(rename = "V0940_POKEMON_WATTREL_NORMAL")]
    V0940PokemonWattrelNormal,
    #[serde(rename = "V0941_POKEMON_KILOWATTREL")]
    V0941PokemonKilowattrel,
    #[serde(rename = "V0941_POKEMON_KILOWATTREL_NORMAL")]
    V0941PokemonKilowattrelNormal,
    #[serde(rename = "V0942_POKEMON_MASCHIFF")]
    V0942PokemonMaschiff,
    #[serde(rename = "V0942_POKEMON_MASCHIFF_NORMAL")]
    V0942PokemonMaschiffNormal,
    #[serde(rename = "V0943_POKEMON_MABOSSTIFF")]
    V0943PokemonMabosstiff,
    #[serde(rename = "V0943_POKEMON_MABOSSTIFF_NORMAL")]
    V0943PokemonMabosstiffNormal,
    #[serde(rename = "V0944_POKEMON_SHROODLE")]
    V0944PokemonShroodle,
    #[serde(rename = "V0944_POKEMON_SHROODLE_NORMAL")]
    V0944PokemonShroodleNormal,
    #[serde(rename = "V0945_POKEMON_GRAFAIAI")]
    V0945PokemonGrafaiai,
    #[serde(rename = "V0945_POKEMON_GRAFAIAI_NORMAL")]
    V0945PokemonGrafaiaiNormal,
    #[serde(rename = "V0946_POKEMON_BRAMBLIN")]
    V0946PokemonBramblin,
    #[serde(rename = "V0946_POKEMON_BRAMBLIN_NORMAL")]
    V0946PokemonBramblinNormal,
    #[serde(rename = "V0947_POKEMON_BRAMBLEGHAST")]
    V0947PokemonBrambleghast,
    #[serde(rename = "V0947_POKEMON_BRAMBLEGHAST_NORMAL")]
    V0947PokemonBrambleghastNormal,
    #[serde(rename = "V0948_POKEMON_TOEDSCOOL")]
    V0948PokemonToedscool,
    #[serde(rename = "V0948_POKEMON_TOEDSCOOL_NORMAL")]
    V0948PokemonToedscoolNormal,
    #[serde(rename = "V0949_POKEMON_TOEDSCRUEL")]
    V0949PokemonToedscruel,
    #[serde(rename = "V0949_POKEMON_TOEDSCRUEL_NORMAL")]
    V0949PokemonToedscruelNormal,
    #[serde(rename = "V0950_POKEMON_KLAWF")]
    V0950PokemonKlawf,
    #[serde(rename = "V0950_POKEMON_KLAWF_NORMAL")]
    V0950PokemonKlawfNormal,
    #[serde(rename = "V0951_POKEMON_CAPSAKID")]
    V0951PokemonCapsakid,
    #[serde(rename = "V0951_POKEMON_CAPSAKID_NORMAL")]
    V0951PokemonCapsakidNormal,
    #[serde(rename = "V0952_POKEMON_SCOVILLAIN")]
    V0952PokemonScovillain,
    #[serde(rename = "V0952_POKEMON_SCOVILLAIN_NORMAL")]
    V0952PokemonScovillainNormal,
    #[serde(rename = "V0953_POKEMON_RELLOR")]
    V0953PokemonRellor,
    #[serde(rename = "V0953_POKEMON_RELLOR_NORMAL")]
    V0953PokemonRellorNormal,
    #[serde(rename = "V0954_POKEMON_RABSCA")]
    V0954PokemonRabsca,
    #[serde(rename = "V0954_POKEMON_RABSCA_NORMAL")]
    V0954PokemonRabscaNormal,
    #[serde(rename = "V0955_POKEMON_FLITTLE")]
    V0955PokemonFlittle,
    #[serde(rename = "V0955_POKEMON_FLITTLE_NORMAL")]
    V0955PokemonFlittleNormal,
    #[serde(rename = "V0956_POKEMON_ESPATHRA")]
    V0956PokemonEspathra,
    #[serde(rename = "V0956_POKEMON_ESPATHRA_NORMAL")]
    V0956PokemonEspathraNormal,
    #[serde(rename = "V0957_POKEMON_TINKATINK")]
    V0957PokemonTinkatink,
    #[serde(rename = "V0957_POKEMON_TINKATINK_NORMAL")]
    V0957PokemonTinkatinkNormal,
    #[serde(rename = "V0958_POKEMON_TINKATUFF")]
    V0958PokemonTinkatuff,
    #[serde(rename = "V0958_POKEMON_TINKATUFF_NORMAL")]
    V0958PokemonTinkatuffNormal,
    #[serde(rename = "V0959_POKEMON_TINKATON")]
    V0959PokemonTinkaton,
    #[serde(rename = "V0959_POKEMON_TINKATON_NORMAL")]
    V0959PokemonTinkatonNormal,
    #[serde(rename = "V0960_POKEMON_WIGLETT")]
    V0960PokemonWiglett,
    #[serde(rename = "V0960_POKEMON_WIGLETT_NORMAL")]
    V0960PokemonWiglettNormal,
    #[serde(rename = "V0961_POKEMON_WUGTRIO")]
    V0961PokemonWugtrio,
    #[serde(rename = "V0961_POKEMON_WUGTRIO_NORMAL")]
    V0961PokemonWugtrioNormal,
    #[serde(rename = "V0962_POKEMON_BOMBIRDIER")]
    V0962PokemonBombirdier,
    #[serde(rename = "V0962_POKEMON_BOMBIRDIER_NORMAL")]
    V0962PokemonBombirdierNormal,
    #[serde(rename = "V0963_POKEMON_FINIZEN")]
    V0963PokemonFinizen,
    #[serde(rename = "V0963_POKEMON_FINIZEN_NORMAL")]
    V0963PokemonFinizenNormal,
    #[serde(rename = "V0964_POKEMON_PALAFIN")]
    V0964PokemonPalafin,
    #[serde(rename = "V0964_POKEMON_PALAFIN_HERO")]
    V0964PokemonPalafinHero,
    #[serde(rename = "V0964_POKEMON_PALAFIN_ZERO")]
    V0964PokemonPalafinZero,
    #[serde(rename = "V0965_POKEMON_VAROOM")]
    V0965PokemonVaroom,
    #[serde(rename = "V0965_POKEMON_VAROOM_NORMAL")]
    V0965PokemonVaroomNormal,
    #[serde(rename = "V0966_POKEMON_REVAVROOM")]
    V0966PokemonRevavroom,
    #[serde(rename = "V0966_POKEMON_REVAVROOM_NORMAL")]
    V0966PokemonRevavroomNormal,
    #[serde(rename = "V0967_POKEMON_CYCLIZAR")]
    V0967PokemonCyclizar,
    #[serde(rename = "V0967_POKEMON_CYCLIZAR_NORMAL")]
    V0967PokemonCyclizarNormal,
    #[serde(rename = "V0968_POKEMON_ORTHWORM")]
    V0968PokemonOrthworm,
    #[serde(rename = "V0968_POKEMON_ORTHWORM_NORMAL")]
    V0968PokemonOrthwormNormal,
    #[serde(rename = "V0969_POKEMON_GLIMMET")]
    V0969PokemonGlimmet,
    #[serde(rename = "V0969_POKEMON_GLIMMET_NORMAL")]
    V0969PokemonGlimmetNormal,
    #[serde(rename = "V0970_POKEMON_GLIMMORA")]
    V0970PokemonGlimmora,
    #[serde(rename = "V0970_POKEMON_GLIMMORA_NORMAL")]
    V0970PokemonGlimmoraNormal,
    #[serde(rename = "V0971_POKEMON_GREAVARD")]
    V0971PokemonGreavard,
    #[serde(rename = "V0971_POKEMON_GREAVARD_NORMAL")]
    V0971PokemonGreavardNormal,
    #[serde(rename = "V0972_POKEMON_HOUNDSTONE")]
    V0972PokemonHoundstone,
    #[serde(rename = "V0972_POKEMON_HOUNDSTONE_NORMAL")]
    V0972PokemonHoundstoneNormal,
    #[serde(rename = "V0973_POKEMON_FLAMIGO")]
    V0973PokemonFlamigo,
    #[serde(rename = "V0973_POKEMON_FLAMIGO_NORMAL")]
    V0973PokemonFlamigoNormal,
    #[serde(rename = "V0974_POKEMON_CETODDLE")]
    V0974PokemonCetoddle,
    #[serde(rename = "V0974_POKEMON_CETODDLE_NORMAL")]
    V0974PokemonCetoddleNormal,
    #[serde(rename = "V0975_POKEMON_CETITAN")]
    V0975PokemonCetitan,
    #[serde(rename = "V0975_POKEMON_CETITAN_NORMAL")]
    V0975PokemonCetitanNormal,
    #[serde(rename = "V0976_POKEMON_VELUZA")]
    V0976PokemonVeluza,
    #[serde(rename = "V0976_POKEMON_VELUZA_NORMAL")]
    V0976PokemonVeluzaNormal,
    #[serde(rename = "V0977_POKEMON_DONDOZO")]
    V0977PokemonDondozo,
    #[serde(rename = "V0977_POKEMON_DONDOZO_NORMAL")]
    V0977PokemonDondozoNormal,
    #[serde(rename = "V0978_POKEMON_TATSUGIRI")]
    V0978PokemonTatsugiri,
    #[serde(rename = "V0978_POKEMON_TATSUGIRI_CURLY")]
    V0978PokemonTatsugiriCurly,
    #[serde(rename = "V0978_POKEMON_TATSUGIRI_DROOPY")]
    V0978PokemonTatsugiriDroopy,
    #[serde(rename = "V0978_POKEMON_TATSUGIRI_STRETCHY")]
    V0978PokemonTatsugiriStretchy,
    #[serde(rename = "V0979_POKEMON_ANNIHILAPE")]
    V0979PokemonAnnihilape,
    #[serde(rename = "V0979_POKEMON_ANNIHILAPE_NORMAL")]
    V0979PokemonAnnihilapeNormal,
    #[serde(rename = "V0980_POKEMON_CLODSIRE")]
    V0980PokemonClodsire,
    #[serde(rename = "V0980_POKEMON_CLODSIRE_NORMAL")]
    V0980PokemonClodsireNormal,
    #[serde(rename = "V0981_POKEMON_FARIGIRAF")]
    V0981PokemonFarigiraf,
    #[serde(rename = "V0981_POKEMON_FARIGIRAF_NORMAL")]
    V0981PokemonFarigirafNormal,
    #[serde(rename = "V0982_POKEMON_DUDUNSPARCE")]
    V0982PokemonDudunsparce,
    #[serde(rename = "V0982_POKEMON_DUDUNSPARCE_THREE")]
    V0982PokemonDudunsparceThree,
    #[serde(rename = "V0982_POKEMON_DUDUNSPARCE_TWO")]
    V0982PokemonDudunsparceTwo,
    #[serde(rename = "V0983_POKEMON_KINGAMBIT")]
    V0983PokemonKingambit,
    #[serde(rename = "V0983_POKEMON_KINGAMBIT_NORMAL")]
    V0983PokemonKingambitNormal,
    #[serde(rename = "V0984_POKEMON_GREATTUSK")]
    V0984PokemonGreattusk,
    #[serde(rename = "V0984_POKEMON_GREATTUSK_NORMAL")]
    V0984PokemonGreattuskNormal,
    #[serde(rename = "V0985_POKEMON_SCREAMTAIL")]
    V0985PokemonScreamtail,
    #[serde(rename = "V0985_POKEMON_SCREAMTAIL_NORMAL")]
    V0985PokemonScreamtailNormal,
    #[serde(rename = "V0986_POKEMON_BRUTEBONNET")]
    V0986PokemonBrutebonnet,
    #[serde(rename = "V0986_POKEMON_BRUTEBONNET_NORMAL")]
    V0986PokemonBrutebonnetNormal,
    #[serde(rename = "V0987_POKEMON_FLUTTERMANE")]
    V0987PokemonFluttermane,
    #[serde(rename = "V0987_POKEMON_FLUTTERMANE_NORMAL")]
    V0987PokemonFluttermaneNormal,
    #[serde(rename = "V0988_POKEMON_SLITHERWING")]
    V0988PokemonSlitherwing,
    #[serde(rename = "V0988_POKEMON_SLITHERWING_NORMAL")]
    V0988PokemonSlitherwingNormal,
    #[serde(rename = "V0989_POKEMON_SANDYSHOCKS")]
    V0989PokemonSandyshocks,
    #[serde(rename = "V0989_POKEMON_SANDYSHOCKS_NORMAL")]
    V0989PokemonSandyshocksNormal,
    #[serde(rename = "V0990_POKEMON_IRONTREADS")]
    V0990PokemonIrontreads,
    #[serde(rename = "V0990_POKEMON_IRONTREADS_NORMAL")]
    V0990PokemonIrontreadsNormal,
    #[serde(rename = "V0991_POKEMON_IRONBUNDLE")]
    V0991PokemonIronbundle,
    #[serde(rename = "V0991_POKEMON_IRONBUNDLE_NORMAL")]
    V0991PokemonIronbundleNormal,
    #[serde(rename = "V0992_POKEMON_IRONHANDS")]
    V0992PokemonIronhands,
    #[serde(rename = "V0992_POKEMON_IRONHANDS_NORMAL")]
    V0992PokemonIronhandsNormal,
    #[serde(rename = "V0993_POKEMON_IRONJUGULIS")]
    V0993PokemonIronjugulis,
    #[serde(rename = "V0993_POKEMON_IRONJUGULIS_NORMAL")]
    V0993PokemonIronjugulisNormal,
    #[serde(rename = "V0994_POKEMON_IRONMOTH")]
    V0994PokemonIronmoth,
    #[serde(rename = "V0994_POKEMON_IRONMOTH_NORMAL")]
    V0994PokemonIronmothNormal,
    #[serde(rename = "V0995_POKEMON_IRONTHORNS")]
    V0995PokemonIronthorns,
    #[serde(rename = "V0995_POKEMON_IRONTHORNS_NORMAL")]
    V0995PokemonIronthornsNormal,
    #[serde(rename = "V0996_POKEMON_FRIGIBAX")]
    V0996PokemonFrigibax,
    #[serde(rename = "V0996_POKEMON_FRIGIBAX_NORMAL")]
    V0996PokemonFrigibaxNormal,
    #[serde(rename = "V0997_POKEMON_ARCTIBAX")]
    V0997PokemonArctibax,
    #[serde(rename = "V0997_POKEMON_ARCTIBAX_NORMAL")]
    V0997PokemonArctibaxNormal,
    #[serde(rename = "V0998_POKEMON_BAXCALIBUR")]
    V0998PokemonBaxcalibur,
    #[serde(rename = "V0998_POKEMON_BAXCALIBUR_NORMAL")]
    V0998PokemonBaxcaliburNormal,
    #[serde(rename = "V0999_POKEMON_GIMMIGHOUL")]
    V0999PokemonGimmighoul,
    #[serde(rename = "V0999_POKEMON_GIMMIGHOUL_COIN_A1")]
    V0999PokemonGimmighoulCoinA1,
    #[serde(rename = "V0999_POKEMON_GIMMIGHOUL_COIN_A2_2026")]
    V0999PokemonGimmighoulCoinA22026,
    #[serde(rename = "V0999_POKEMON_GIMMIGHOUL_NORMAL")]
    V0999PokemonGimmighoulNormal,
    #[serde(rename = "V1000_POKEMON_GHOLDENGO")]
    V1000PokemonGholdengo,
    #[serde(rename = "V1000_POKEMON_GHOLDENGO_NORMAL")]
    V1000PokemonGholdengoNormal,
    #[serde(rename = "V1001_POKEMON_WOCHIEN")]
    V1001PokemonWochien,
    #[serde(rename = "V1001_POKEMON_WOCHIEN_NORMAL")]
    V1001PokemonWochienNormal,
    #[serde(rename = "V1002_POKEMON_CHIENPAO")]
    V1002PokemonChienpao,
    #[serde(rename = "V1002_POKEMON_CHIENPAO_NORMAL")]
    V1002PokemonChienpaoNormal,
    #[serde(rename = "V1003_POKEMON_TINGLU")]
    V1003PokemonTinglu,
    #[serde(rename = "V1003_POKEMON_TINGLU_NORMAL")]
    V1003PokemonTingluNormal,
    #[serde(rename = "V1004_POKEMON_CHIYU")]
    V1004PokemonChiyu,
    #[serde(rename = "V1004_POKEMON_CHIYU_NORMAL")]
    V1004PokemonChiyuNormal,
    #[serde(rename = "V1005_POKEMON_ROARINGMOON")]
    V1005PokemonRoaringmoon,
    #[serde(rename = "V1005_POKEMON_ROARINGMOON_NORMAL")]
    V1005PokemonRoaringmoonNormal,
    #[serde(rename = "V1006_POKEMON_IRONVALIANT")]
    V1006PokemonIronvaliant,
    #[serde(rename = "V1006_POKEMON_IRONVALIANT_NORMAL")]
    V1006PokemonIronvaliantNormal,
    #[serde(rename = "V1007_POKEMON_KORAIDON")]
    V1007PokemonKoraidon,
    #[serde(rename = "V1007_POKEMON_KORAIDON_APEX")]
    V1007PokemonKoraidonApex,
    #[serde(rename = "V1008_POKEMON_MIRAIDON")]
    V1008PokemonMiraidon,
    #[serde(rename = "V1008_POKEMON_MIRAIDON_ULTIMATE")]
    V1008PokemonMiraidonUltimate,
    #[serde(rename = "V1009_POKEMON_WALKINGWAKE")]
    V1009PokemonWalkingwake,
    #[serde(rename = "V1009_POKEMON_WALKINGWAKE_NORMAL")]
    V1009PokemonWalkingwakeNormal,
    #[serde(rename = "V1010_POKEMON_IRONLEAVES")]
    V1010PokemonIronleaves,
    #[serde(rename = "V1010_POKEMON_IRONLEAVES_NORMAL")]
    V1010PokemonIronleavesNormal,
    #[serde(rename = "V1011_POKEMON_DIPPLIN")]
    V1011PokemonDipplin,
    #[serde(rename = "V1011_POKEMON_DIPPLIN_NORMAL")]
    V1011PokemonDipplinNormal,
    #[serde(rename = "V1012_POKEMON_POLTCHAGEIST")]
    V1012PokemonPoltchageist,
    #[serde(rename = "V1012_POKEMON_POLTCHAGEIST_ARTISAN")]
    V1012PokemonPoltchageistArtisan,
    #[serde(rename = "V1012_POKEMON_POLTCHAGEIST_COUNTERFEIT")]
    V1012PokemonPoltchageistCounterfeit,
    #[serde(rename = "V1013_POKEMON_SINISTCHA")]
    V1013PokemonSinistcha,
    #[serde(rename = "V1013_POKEMON_SINISTCHA_MASTERPIECE")]
    V1013PokemonSinistchaMasterpiece,
    #[serde(rename = "V1013_POKEMON_SINISTCHA_UNREMARKABLE")]
    V1013PokemonSinistchaUnremarkable,
    #[serde(rename = "V1014_POKEMON_OKIDOGI")]
    V1014PokemonOkidogi,
    #[serde(rename = "V1014_POKEMON_OKIDOGI_NORMAL")]
    V1014PokemonOkidogiNormal,
    #[serde(rename = "V1015_POKEMON_MUNKIDORI")]
    V1015PokemonMunkidori,
    #[serde(rename = "V1015_POKEMON_MUNKIDORI_NORMAL")]
    V1015PokemonMunkidoriNormal,
    #[serde(rename = "V1016_POKEMON_FEZANDIPITI")]
    V1016PokemonFezandipiti,
    #[serde(rename = "V1016_POKEMON_FEZANDIPITI_NORMAL")]
    V1016PokemonFezandipitiNormal,
    #[serde(rename = "V1017_POKEMON_OGERPON")]
    V1017PokemonOgerpon,
    #[serde(rename = "V1018_POKEMON_ARCHALUDON")]
    V1018PokemonArchaludon,
    #[serde(rename = "V1018_POKEMON_ARCHALUDON_NORMAL")]
    V1018PokemonArchaludonNormal,
    #[serde(rename = "V1019_POKEMON_HYDRAPPLE")]
    V1019PokemonHydrapple,
    #[serde(rename = "V1019_POKEMON_HYDRAPPLE_NORMAL")]
    V1019PokemonHydrappleNormal,
    #[serde(rename = "V1020_POKEMON_GOUGINGFIRE")]
    V1020PokemonGougingfire,
    #[serde(rename = "V1020_POKEMON_GOUGINGFIRE_NORMAL")]
    V1020PokemonGougingfireNormal,
    #[serde(rename = "V1021_POKEMON_RAGINGBOLT")]
    V1021PokemonRagingbolt,
    #[serde(rename = "V1021_POKEMON_RAGINGBOLT_NORMAL")]
    V1021PokemonRagingboltNormal,
    #[serde(rename = "V1022_POKEMON_IRONBOULDER")]
    V1022PokemonIronboulder,
    #[serde(rename = "V1022_POKEMON_IRONBOULDER_NORMAL")]
    V1022PokemonIronboulderNormal,
    #[serde(rename = "V1023_POKEMON_IRONCROWN")]
    V1023PokemonIroncrown,
    #[serde(rename = "V1023_POKEMON_IRONCROWN_NORMAL")]
    V1023PokemonIroncrownNormal,
    #[serde(rename = "V1024_POKEMON_TERAPAGOS")]
    V1024PokemonTerapagos,
    #[serde(rename = "V1024_POKEMON_TERAPAGOS_NORMAL")]
    V1024PokemonTerapagosNormal,
    #[serde(rename = "V1025_POKEMON_PECHARUNT")]
    V1025PokemonPecharunt,
    #[serde(rename = "V1025_POKEMON_PECHARUNT_NORMAL")]
    V1025PokemonPecharuntNormal,
}

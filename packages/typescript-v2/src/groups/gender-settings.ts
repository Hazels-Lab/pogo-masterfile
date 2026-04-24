export interface GenderSettings<T extends string> {
	templateId: T;
	data: GenderSettingsData<T>;
}

export interface GenderSettingsData<T extends string> {
	templateId: T;
	genderSettings: unknown;
}

export type GenderSettingsV0001PokemonBulbasaur = GenderSettings<"SPAWN_V0001_POKEMON_BULBASAUR">;
export type GenderSettingsV0001PokemonBulbasaurFall2019 = GenderSettings<"SPAWN_V0001_POKEMON_BULBASAUR_FALL_2019">;
export type GenderSettingsV0001PokemonBulbasaurNormal = GenderSettings<"SPAWN_V0001_POKEMON_BULBASAUR_NORMAL">;
export type GenderSettingsV0002PokemonIvysaur = GenderSettings<"SPAWN_V0002_POKEMON_IVYSAUR">;
export type GenderSettingsV0002PokemonIvysaurNormal = GenderSettings<"SPAWN_V0002_POKEMON_IVYSAUR_NORMAL">;
export type GenderSettingsV0003PokemonVenusaur = GenderSettings<"SPAWN_V0003_POKEMON_VENUSAUR">;
export type GenderSettingsV0003PokemonVenusaurCopy2019 = GenderSettings<"SPAWN_V0003_POKEMON_VENUSAUR_COPY_2019">;
export type GenderSettingsV0003PokemonVenusaurNormal = GenderSettings<"SPAWN_V0003_POKEMON_VENUSAUR_NORMAL">;
export type GenderSettingsV0004PokemonCharmander = GenderSettings<"SPAWN_V0004_POKEMON_CHARMANDER">;
export type GenderSettingsV0004PokemonCharmanderFall2019 = GenderSettings<"SPAWN_V0004_POKEMON_CHARMANDER_FALL_2019">;
export type GenderSettingsV0004PokemonCharmanderNormal = GenderSettings<"SPAWN_V0004_POKEMON_CHARMANDER_NORMAL">;
export type GenderSettingsV0005PokemonCharmeleon = GenderSettings<"SPAWN_V0005_POKEMON_CHARMELEON">;
export type GenderSettingsV0005PokemonCharmeleonNormal = GenderSettings<"SPAWN_V0005_POKEMON_CHARMELEON_NORMAL">;
export type GenderSettingsV0006PokemonCharizard = GenderSettings<"SPAWN_V0006_POKEMON_CHARIZARD">;
export type GenderSettingsV0006PokemonCharizardCopy2019 = GenderSettings<"SPAWN_V0006_POKEMON_CHARIZARD_COPY_2019">;
export type GenderSettingsV0006PokemonCharizardNormal = GenderSettings<"SPAWN_V0006_POKEMON_CHARIZARD_NORMAL">;
export type GenderSettingsV0007PokemonSquirtle = GenderSettings<"SPAWN_V0007_POKEMON_SQUIRTLE">;
export type GenderSettingsV0007PokemonSquirtleFall2019 = GenderSettings<"SPAWN_V0007_POKEMON_SQUIRTLE_FALL_2019">;
export type GenderSettingsV0007PokemonSquirtleNormal = GenderSettings<"SPAWN_V0007_POKEMON_SQUIRTLE_NORMAL">;
export type GenderSettingsV0008PokemonWartortle = GenderSettings<"SPAWN_V0008_POKEMON_WARTORTLE">;
export type GenderSettingsV0008PokemonWartortleNormal = GenderSettings<"SPAWN_V0008_POKEMON_WARTORTLE_NORMAL">;
export type GenderSettingsV0009PokemonBlastoise = GenderSettings<"SPAWN_V0009_POKEMON_BLASTOISE">;
export type GenderSettingsV0009PokemonBlastoiseCopy2019 = GenderSettings<"SPAWN_V0009_POKEMON_BLASTOISE_COPY_2019">;
export type GenderSettingsV0009PokemonBlastoiseNormal = GenderSettings<"SPAWN_V0009_POKEMON_BLASTOISE_NORMAL">;
export type GenderSettingsV0010PokemonCaterpie = GenderSettings<"SPAWN_V0010_POKEMON_CATERPIE">;
export type GenderSettingsV0010PokemonCaterpieGofest2026 = GenderSettings<"SPAWN_V0010_POKEMON_CATERPIE_GOFEST_2026">;
export type GenderSettingsV0010PokemonCaterpieNormal = GenderSettings<"SPAWN_V0010_POKEMON_CATERPIE_NORMAL">;
export type GenderSettingsV0011PokemonMetapod = GenderSettings<"SPAWN_V0011_POKEMON_METAPOD">;
export type GenderSettingsV0011PokemonMetapodNormal = GenderSettings<"SPAWN_V0011_POKEMON_METAPOD_NORMAL">;
export type GenderSettingsV0012PokemonButterfree = GenderSettings<"SPAWN_V0012_POKEMON_BUTTERFREE">;
export type GenderSettingsV0012PokemonButterfreeNormal = GenderSettings<"SPAWN_V0012_POKEMON_BUTTERFREE_NORMAL">;
export type GenderSettingsV0013PokemonWeedle = GenderSettings<"SPAWN_V0013_POKEMON_WEEDLE">;
export type GenderSettingsV0013PokemonWeedleNormal = GenderSettings<"SPAWN_V0013_POKEMON_WEEDLE_NORMAL">;
export type GenderSettingsV0014PokemonKakuna = GenderSettings<"SPAWN_V0014_POKEMON_KAKUNA">;
export type GenderSettingsV0014PokemonKakunaNormal = GenderSettings<"SPAWN_V0014_POKEMON_KAKUNA_NORMAL">;
export type GenderSettingsV0015PokemonBeedrill = GenderSettings<"SPAWN_V0015_POKEMON_BEEDRILL">;
export type GenderSettingsV0015PokemonBeedrillNormal = GenderSettings<"SPAWN_V0015_POKEMON_BEEDRILL_NORMAL">;
export type GenderSettingsV0016PokemonPidgey = GenderSettings<"SPAWN_V0016_POKEMON_PIDGEY">;
export type GenderSettingsV0016PokemonPidgeyNormal = GenderSettings<"SPAWN_V0016_POKEMON_PIDGEY_NORMAL">;
export type GenderSettingsV0017PokemonPidgeotto = GenderSettings<"SPAWN_V0017_POKEMON_PIDGEOTTO">;
export type GenderSettingsV0017PokemonPidgeottoNormal = GenderSettings<"SPAWN_V0017_POKEMON_PIDGEOTTO_NORMAL">;
export type GenderSettingsV0018PokemonPidgeot = GenderSettings<"SPAWN_V0018_POKEMON_PIDGEOT">;
export type GenderSettingsV0018PokemonPidgeotNormal = GenderSettings<"SPAWN_V0018_POKEMON_PIDGEOT_NORMAL">;
export type GenderSettingsV0019PokemonRattata = GenderSettings<"SPAWN_V0019_POKEMON_RATTATA">;
export type GenderSettingsV0019PokemonRattataAlola = GenderSettings<"SPAWN_V0019_POKEMON_RATTATA_ALOLA">;
export type GenderSettingsV0019PokemonRattataNormal = GenderSettings<"SPAWN_V0019_POKEMON_RATTATA_NORMAL">;
export type GenderSettingsV0020PokemonRaticate = GenderSettings<"SPAWN_V0020_POKEMON_RATICATE">;
export type GenderSettingsV0020PokemonRaticateAlola = GenderSettings<"SPAWN_V0020_POKEMON_RATICATE_ALOLA">;
export type GenderSettingsV0020PokemonRaticateNormal = GenderSettings<"SPAWN_V0020_POKEMON_RATICATE_NORMAL">;
export type GenderSettingsV0021PokemonSpearow = GenderSettings<"SPAWN_V0021_POKEMON_SPEAROW">;
export type GenderSettingsV0021PokemonSpearowNormal = GenderSettings<"SPAWN_V0021_POKEMON_SPEAROW_NORMAL">;
export type GenderSettingsV0022PokemonFearow = GenderSettings<"SPAWN_V0022_POKEMON_FEAROW">;
export type GenderSettingsV0022PokemonFearowNormal = GenderSettings<"SPAWN_V0022_POKEMON_FEAROW_NORMAL">;
export type GenderSettingsV0023PokemonEkans = GenderSettings<"SPAWN_V0023_POKEMON_EKANS">;
export type GenderSettingsV0023PokemonEkansNormal = GenderSettings<"SPAWN_V0023_POKEMON_EKANS_NORMAL">;
export type GenderSettingsV0024PokemonArbok = GenderSettings<"SPAWN_V0024_POKEMON_ARBOK">;
export type GenderSettingsV0024PokemonArbokNormal = GenderSettings<"SPAWN_V0024_POKEMON_ARBOK_NORMAL">;
export type GenderSettingsV0025PokemonPikachu = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU">;
export type GenderSettingsV0025PokemonPikachuAdventureHat2020 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_ADVENTURE_HAT_2020">;
export type GenderSettingsV0025PokemonPikachuBb2026 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_BB_2026">;
export type GenderSettingsV0025PokemonPikachuCopy2019 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_COPY_2019">;
export type GenderSettingsV0025PokemonPikachuCostume2020 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_COSTUME_2020">;
export type GenderSettingsV0025PokemonPikachuDiwali2024 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_DIWALI_2024">;
export type GenderSettingsV0025PokemonPikachuDoctor = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_DOCTOR">;
export type GenderSettingsV0025PokemonPikachuFall2019 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FALL_2019">;
export type GenderSettingsV0025PokemonPikachuFlying01 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_01">;
export type GenderSettingsV0025PokemonPikachuFlying02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_02">;
export type GenderSettingsV0025PokemonPikachuFlying03 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_03">;
export type GenderSettingsV0025PokemonPikachuFlying04 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_04">;
export type GenderSettingsV0025PokemonPikachuFlying5thAnniv = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_5TH_ANNIV">;
export type GenderSettingsV0025PokemonPikachuFlyingOkinawa = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_FLYING_OKINAWA">;
export type GenderSettingsV0025PokemonPikachuGofest2022 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2022">;
export type GenderSettingsV0025PokemonPikachuGofest2024Mtiara = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2024_MTIARA">;
export type GenderSettingsV0025PokemonPikachuGofest2024Stiara = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2024_STIARA">;
export type GenderSettingsV0025PokemonPikachuGofest2025GogglesBlue = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_BLUE">;
export type GenderSettingsV0025PokemonPikachuGofest2025GogglesRed = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_RED">;
export type GenderSettingsV0025PokemonPikachuGofest2025GogglesYellow = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_YELLOW">;
export type GenderSettingsV0025PokemonPikachuGofest2025MonocleBlue = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_BLUE">;
export type GenderSettingsV0025PokemonPikachuGofest2025MonocleRed = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_RED">;
export type GenderSettingsV0025PokemonPikachuGofest2025MonocleYellow = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_YELLOW">;
export type GenderSettingsV0025PokemonPikachuGofest2026CapBlue = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_BLUE">;
export type GenderSettingsV0025PokemonPikachuGofest2026CapRed = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_RED">;
export type GenderSettingsV0025PokemonPikachuGofest2026CapYellow = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_YELLOW">;
export type GenderSettingsV0025PokemonPikachuGotour2024A = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_A">;
export type GenderSettingsV0025PokemonPikachuGotour2024A02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_A_02">;
export type GenderSettingsV0025PokemonPikachuGotour2024B = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_B">;
export type GenderSettingsV0025PokemonPikachuGotour2024B02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2024_B_02">;
export type GenderSettingsV0025PokemonPikachuGotour2025A = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_A">;
export type GenderSettingsV0025PokemonPikachuGotour2025A02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_A_02">;
export type GenderSettingsV0025PokemonPikachuGotour2025B = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_B">;
export type GenderSettingsV0025PokemonPikachuGotour2025B02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2025_B_02">;
export type GenderSettingsV0025PokemonPikachuGotour2026A = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_A">;
export type GenderSettingsV0025PokemonPikachuGotour2026A02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_A_02">;
export type GenderSettingsV0025PokemonPikachuGotour2026B = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_B">;
export type GenderSettingsV0025PokemonPikachuGotour2026B02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_B_02">;
export type GenderSettingsV0025PokemonPikachuGotour2026C = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_C">;
export type GenderSettingsV0025PokemonPikachuGotour2026C02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_GOTOUR_2026_C_02">;
export type GenderSettingsV0025PokemonPikachuHorizons = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_HORIZONS">;
export type GenderSettingsV0025PokemonPikachuJeju = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_JEJU">;
export type GenderSettingsV0025PokemonPikachuKariyushi = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_KARIYUSHI">;
export type GenderSettingsV0025PokemonPikachuKurta = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_KURTA">;
export type GenderSettingsV0025PokemonPikachuNormal = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_NORMAL">;
export type GenderSettingsV0025PokemonPikachuPopStar = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_POP_STAR">;
export type GenderSettingsV0025PokemonPikachuRockStar = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_ROCK_STAR">;
export type GenderSettingsV0025PokemonPikachuSummer2023A = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_A">;
export type GenderSettingsV0025PokemonPikachuSummer2023B = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_B">;
export type GenderSettingsV0025PokemonPikachuSummer2023C = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_C">;
export type GenderSettingsV0025PokemonPikachuSummer2023D = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_D">;
export type GenderSettingsV0025PokemonPikachuSummer2023E = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_SUMMER_2023_E">;
export type GenderSettingsV0025PokemonPikachuTshirt01 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_01">;
export type GenderSettingsV0025PokemonPikachuTshirt02 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_02">;
export type GenderSettingsV0025PokemonPikachuTshirt03 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_TSHIRT_03">;
export type GenderSettingsV0025PokemonPikachuVs2019 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_VS_2019">;
export type GenderSettingsV0025PokemonPikachuWcs2022 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_WCS_2022">;
export type GenderSettingsV0025PokemonPikachuWcs2023 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_WCS_2023">;
export type GenderSettingsV0025PokemonPikachuWcs2024 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_WCS_2024">;
export type GenderSettingsV0025PokemonPikachuWcs2025 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_WCS_2025">;
export type GenderSettingsV0025PokemonPikachuWinter2020 = GenderSettings<"SPAWN_V0025_POKEMON_PIKACHU_WINTER_2020">;
export type GenderSettingsV0026PokemonRaichu = GenderSettings<"SPAWN_V0026_POKEMON_RAICHU">;
export type GenderSettingsV0026PokemonRaichuAlola = GenderSettings<"SPAWN_V0026_POKEMON_RAICHU_ALOLA">;
export type GenderSettingsV0026PokemonRaichuNormal = GenderSettings<"SPAWN_V0026_POKEMON_RAICHU_NORMAL">;
export type GenderSettingsV0027PokemonSandshrew = GenderSettings<"SPAWN_V0027_POKEMON_SANDSHREW">;
export type GenderSettingsV0027PokemonSandshrewAlola = GenderSettings<"SPAWN_V0027_POKEMON_SANDSHREW_ALOLA">;
export type GenderSettingsV0027PokemonSandshrewNormal = GenderSettings<"SPAWN_V0027_POKEMON_SANDSHREW_NORMAL">;
export type GenderSettingsV0028PokemonSandslash = GenderSettings<"SPAWN_V0028_POKEMON_SANDSLASH">;
export type GenderSettingsV0028PokemonSandslashAlola = GenderSettings<"SPAWN_V0028_POKEMON_SANDSLASH_ALOLA">;
export type GenderSettingsV0028PokemonSandslashNormal = GenderSettings<"SPAWN_V0028_POKEMON_SANDSLASH_NORMAL">;
export type GenderSettingsV0029PokemonNidoran = GenderSettings<"SPAWN_V0029_POKEMON_NIDORAN">;
export type GenderSettingsV0029PokemonNidoranNormal = GenderSettings<"SPAWN_V0029_POKEMON_NIDORAN_NORMAL">;
export type GenderSettingsV0030PokemonNidorina = GenderSettings<"SPAWN_V0030_POKEMON_NIDORINA">;
export type GenderSettingsV0030PokemonNidorinaNormal = GenderSettings<"SPAWN_V0030_POKEMON_NIDORINA_NORMAL">;
export type GenderSettingsV0031PokemonNidoqueen = GenderSettings<"SPAWN_V0031_POKEMON_NIDOQUEEN">;
export type GenderSettingsV0031PokemonNidoqueenNormal = GenderSettings<"SPAWN_V0031_POKEMON_NIDOQUEEN_NORMAL">;
export type GenderSettingsV0032PokemonNidoran = GenderSettings<"SPAWN_V0032_POKEMON_NIDORAN">;
export type GenderSettingsV0032PokemonNidoranNormal = GenderSettings<"SPAWN_V0032_POKEMON_NIDORAN_NORMAL">;
export type GenderSettingsV0033PokemonNidorino = GenderSettings<"SPAWN_V0033_POKEMON_NIDORINO">;
export type GenderSettingsV0033PokemonNidorinoNormal = GenderSettings<"SPAWN_V0033_POKEMON_NIDORINO_NORMAL">;
export type GenderSettingsV0034PokemonNidoking = GenderSettings<"SPAWN_V0034_POKEMON_NIDOKING">;
export type GenderSettingsV0034PokemonNidokingNormal = GenderSettings<"SPAWN_V0034_POKEMON_NIDOKING_NORMAL">;
export type GenderSettingsV0035PokemonClefairy = GenderSettings<"SPAWN_V0035_POKEMON_CLEFAIRY">;
export type GenderSettingsV0035PokemonClefairyNormal = GenderSettings<"SPAWN_V0035_POKEMON_CLEFAIRY_NORMAL">;
export type GenderSettingsV0036PokemonClefable = GenderSettings<"SPAWN_V0036_POKEMON_CLEFABLE">;
export type GenderSettingsV0036PokemonClefableNormal = GenderSettings<"SPAWN_V0036_POKEMON_CLEFABLE_NORMAL">;
export type GenderSettingsV0037PokemonVulpix = GenderSettings<"SPAWN_V0037_POKEMON_VULPIX">;
export type GenderSettingsV0037PokemonVulpixAlola = GenderSettings<"SPAWN_V0037_POKEMON_VULPIX_ALOLA">;
export type GenderSettingsV0037PokemonVulpixNormal = GenderSettings<"SPAWN_V0037_POKEMON_VULPIX_NORMAL">;
export type GenderSettingsV0038PokemonNinetales = GenderSettings<"SPAWN_V0038_POKEMON_NINETALES">;
export type GenderSettingsV0038PokemonNinetalesAlola = GenderSettings<"SPAWN_V0038_POKEMON_NINETALES_ALOLA">;
export type GenderSettingsV0038PokemonNinetalesNormal = GenderSettings<"SPAWN_V0038_POKEMON_NINETALES_NORMAL">;
export type GenderSettingsV0039PokemonJigglypuff = GenderSettings<"SPAWN_V0039_POKEMON_JIGGLYPUFF">;
export type GenderSettingsV0039PokemonJigglypuffNormal = GenderSettings<"SPAWN_V0039_POKEMON_JIGGLYPUFF_NORMAL">;
export type GenderSettingsV0040PokemonWigglytuff = GenderSettings<"SPAWN_V0040_POKEMON_WIGGLYTUFF">;
export type GenderSettingsV0040PokemonWigglytuffNormal = GenderSettings<"SPAWN_V0040_POKEMON_WIGGLYTUFF_NORMAL">;
export type GenderSettingsV0041PokemonZubat = GenderSettings<"SPAWN_V0041_POKEMON_ZUBAT">;
export type GenderSettingsV0041PokemonZubatNormal = GenderSettings<"SPAWN_V0041_POKEMON_ZUBAT_NORMAL">;
export type GenderSettingsV0042PokemonGolbat = GenderSettings<"SPAWN_V0042_POKEMON_GOLBAT">;
export type GenderSettingsV0042PokemonGolbatNormal = GenderSettings<"SPAWN_V0042_POKEMON_GOLBAT_NORMAL">;
export type GenderSettingsV0043PokemonOddish = GenderSettings<"SPAWN_V0043_POKEMON_ODDISH">;
export type GenderSettingsV0043PokemonOddishNormal = GenderSettings<"SPAWN_V0043_POKEMON_ODDISH_NORMAL">;
export type GenderSettingsV0044PokemonGloom = GenderSettings<"SPAWN_V0044_POKEMON_GLOOM">;
export type GenderSettingsV0044PokemonGloomNormal = GenderSettings<"SPAWN_V0044_POKEMON_GLOOM_NORMAL">;
export type GenderSettingsV0045PokemonVileplume = GenderSettings<"SPAWN_V0045_POKEMON_VILEPLUME">;
export type GenderSettingsV0045PokemonVileplumeNormal = GenderSettings<"SPAWN_V0045_POKEMON_VILEPLUME_NORMAL">;
export type GenderSettingsV0046PokemonParas = GenderSettings<"SPAWN_V0046_POKEMON_PARAS">;
export type GenderSettingsV0046PokemonParasNormal = GenderSettings<"SPAWN_V0046_POKEMON_PARAS_NORMAL">;
export type GenderSettingsV0047PokemonParasect = GenderSettings<"SPAWN_V0047_POKEMON_PARASECT">;
export type GenderSettingsV0047PokemonParasectNormal = GenderSettings<"SPAWN_V0047_POKEMON_PARASECT_NORMAL">;
export type GenderSettingsV0048PokemonVenonat = GenderSettings<"SPAWN_V0048_POKEMON_VENONAT">;
export type GenderSettingsV0048PokemonVenonatNormal = GenderSettings<"SPAWN_V0048_POKEMON_VENONAT_NORMAL">;
export type GenderSettingsV0049PokemonVenomoth = GenderSettings<"SPAWN_V0049_POKEMON_VENOMOTH">;
export type GenderSettingsV0049PokemonVenomothNormal = GenderSettings<"SPAWN_V0049_POKEMON_VENOMOTH_NORMAL">;
export type GenderSettingsV0050PokemonDiglett = GenderSettings<"SPAWN_V0050_POKEMON_DIGLETT">;
export type GenderSettingsV0050PokemonDiglettAlola = GenderSettings<"SPAWN_V0050_POKEMON_DIGLETT_ALOLA">;
export type GenderSettingsV0050PokemonDiglettNormal = GenderSettings<"SPAWN_V0050_POKEMON_DIGLETT_NORMAL">;
export type GenderSettingsV0051PokemonDugtrio = GenderSettings<"SPAWN_V0051_POKEMON_DUGTRIO">;
export type GenderSettingsV0051PokemonDugtrioAlola = GenderSettings<"SPAWN_V0051_POKEMON_DUGTRIO_ALOLA">;
export type GenderSettingsV0051PokemonDugtrioNormal = GenderSettings<"SPAWN_V0051_POKEMON_DUGTRIO_NORMAL">;
export type GenderSettingsV0052PokemonMeowth = GenderSettings<"SPAWN_V0052_POKEMON_MEOWTH">;
export type GenderSettingsV0052PokemonMeowthAlola = GenderSettings<"SPAWN_V0052_POKEMON_MEOWTH_ALOLA">;
export type GenderSettingsV0052PokemonMeowthGalarian = GenderSettings<"SPAWN_V0052_POKEMON_MEOWTH_GALARIAN">;
export type GenderSettingsV0052PokemonMeowthNormal = GenderSettings<"SPAWN_V0052_POKEMON_MEOWTH_NORMAL">;
export type GenderSettingsV0053PokemonPersian = GenderSettings<"SPAWN_V0053_POKEMON_PERSIAN">;
export type GenderSettingsV0053PokemonPersianAlola = GenderSettings<"SPAWN_V0053_POKEMON_PERSIAN_ALOLA">;
export type GenderSettingsV0053PokemonPersianNormal = GenderSettings<"SPAWN_V0053_POKEMON_PERSIAN_NORMAL">;
export type GenderSettingsV0054PokemonPsyduck = GenderSettings<"SPAWN_V0054_POKEMON_PSYDUCK">;
export type GenderSettingsV0054PokemonPsyduckNormal = GenderSettings<"SPAWN_V0054_POKEMON_PSYDUCK_NORMAL">;
export type GenderSettingsV0054PokemonPsyduckSwim2025 = GenderSettings<"SPAWN_V0054_POKEMON_PSYDUCK_SWIM_2025">;
export type GenderSettingsV0055PokemonGolduck = GenderSettings<"SPAWN_V0055_POKEMON_GOLDUCK">;
export type GenderSettingsV0055PokemonGolduckNormal = GenderSettings<"SPAWN_V0055_POKEMON_GOLDUCK_NORMAL">;
export type GenderSettingsV0056PokemonMankey = GenderSettings<"SPAWN_V0056_POKEMON_MANKEY">;
export type GenderSettingsV0056PokemonMankeyNormal = GenderSettings<"SPAWN_V0056_POKEMON_MANKEY_NORMAL">;
export type GenderSettingsV0057PokemonPrimeape = GenderSettings<"SPAWN_V0057_POKEMON_PRIMEAPE">;
export type GenderSettingsV0057PokemonPrimeapeNormal = GenderSettings<"SPAWN_V0057_POKEMON_PRIMEAPE_NORMAL">;
export type GenderSettingsV0058PokemonGrowlithe = GenderSettings<"SPAWN_V0058_POKEMON_GROWLITHE">;
export type GenderSettingsV0058PokemonGrowlitheHisuian = GenderSettings<"SPAWN_V0058_POKEMON_GROWLITHE_HISUIAN">;
export type GenderSettingsV0058PokemonGrowlitheNormal = GenderSettings<"SPAWN_V0058_POKEMON_GROWLITHE_NORMAL">;
export type GenderSettingsV0059PokemonArcanine = GenderSettings<"SPAWN_V0059_POKEMON_ARCANINE">;
export type GenderSettingsV0059PokemonArcanineHisuian = GenderSettings<"SPAWN_V0059_POKEMON_ARCANINE_HISUIAN">;
export type GenderSettingsV0059PokemonArcanineNormal = GenderSettings<"SPAWN_V0059_POKEMON_ARCANINE_NORMAL">;
export type GenderSettingsV0060PokemonPoliwag = GenderSettings<"SPAWN_V0060_POKEMON_POLIWAG">;
export type GenderSettingsV0060PokemonPoliwagNormal = GenderSettings<"SPAWN_V0060_POKEMON_POLIWAG_NORMAL">;
export type GenderSettingsV0061PokemonPoliwhirl = GenderSettings<"SPAWN_V0061_POKEMON_POLIWHIRL">;
export type GenderSettingsV0061PokemonPoliwhirlNormal = GenderSettings<"SPAWN_V0061_POKEMON_POLIWHIRL_NORMAL">;
export type GenderSettingsV0062PokemonPoliwrath = GenderSettings<"SPAWN_V0062_POKEMON_POLIWRATH">;
export type GenderSettingsV0062PokemonPoliwrathNormal = GenderSettings<"SPAWN_V0062_POKEMON_POLIWRATH_NORMAL">;
export type GenderSettingsV0063PokemonAbra = GenderSettings<"SPAWN_V0063_POKEMON_ABRA">;
export type GenderSettingsV0063PokemonAbraNormal = GenderSettings<"SPAWN_V0063_POKEMON_ABRA_NORMAL">;
export type GenderSettingsV0064PokemonKadabra = GenderSettings<"SPAWN_V0064_POKEMON_KADABRA">;
export type GenderSettingsV0064PokemonKadabraNormal = GenderSettings<"SPAWN_V0064_POKEMON_KADABRA_NORMAL">;
export type GenderSettingsV0065PokemonAlakazam = GenderSettings<"SPAWN_V0065_POKEMON_ALAKAZAM">;
export type GenderSettingsV0065PokemonAlakazamNormal = GenderSettings<"SPAWN_V0065_POKEMON_ALAKAZAM_NORMAL">;
export type GenderSettingsV0066PokemonMachop = GenderSettings<"SPAWN_V0066_POKEMON_MACHOP">;
export type GenderSettingsV0066PokemonMachopNormal = GenderSettings<"SPAWN_V0066_POKEMON_MACHOP_NORMAL">;
export type GenderSettingsV0067PokemonMachoke = GenderSettings<"SPAWN_V0067_POKEMON_MACHOKE">;
export type GenderSettingsV0067PokemonMachokeNormal = GenderSettings<"SPAWN_V0067_POKEMON_MACHOKE_NORMAL">;
export type GenderSettingsV0068PokemonMachamp = GenderSettings<"SPAWN_V0068_POKEMON_MACHAMP">;
export type GenderSettingsV0068PokemonMachampNormal = GenderSettings<"SPAWN_V0068_POKEMON_MACHAMP_NORMAL">;
export type GenderSettingsV0069PokemonBellsprout = GenderSettings<"SPAWN_V0069_POKEMON_BELLSPROUT">;
export type GenderSettingsV0069PokemonBellsproutNormal = GenderSettings<"SPAWN_V0069_POKEMON_BELLSPROUT_NORMAL">;
export type GenderSettingsV0070PokemonWeepinbell = GenderSettings<"SPAWN_V0070_POKEMON_WEEPINBELL">;
export type GenderSettingsV0070PokemonWeepinbellNormal = GenderSettings<"SPAWN_V0070_POKEMON_WEEPINBELL_NORMAL">;
export type GenderSettingsV0071PokemonVictreebel = GenderSettings<"SPAWN_V0071_POKEMON_VICTREEBEL">;
export type GenderSettingsV0071PokemonVictreebelNormal = GenderSettings<"SPAWN_V0071_POKEMON_VICTREEBEL_NORMAL">;
export type GenderSettingsV0072PokemonTentacool = GenderSettings<"SPAWN_V0072_POKEMON_TENTACOOL">;
export type GenderSettingsV0072PokemonTentacoolNormal = GenderSettings<"SPAWN_V0072_POKEMON_TENTACOOL_NORMAL">;
export type GenderSettingsV0073PokemonTentacruel = GenderSettings<"SPAWN_V0073_POKEMON_TENTACRUEL">;
export type GenderSettingsV0073PokemonTentacruelNormal = GenderSettings<"SPAWN_V0073_POKEMON_TENTACRUEL_NORMAL">;
export type GenderSettingsV0074PokemonGeodude = GenderSettings<"SPAWN_V0074_POKEMON_GEODUDE">;
export type GenderSettingsV0074PokemonGeodudeAlola = GenderSettings<"SPAWN_V0074_POKEMON_GEODUDE_ALOLA">;
export type GenderSettingsV0074PokemonGeodudeNormal = GenderSettings<"SPAWN_V0074_POKEMON_GEODUDE_NORMAL">;
export type GenderSettingsV0075PokemonGraveler = GenderSettings<"SPAWN_V0075_POKEMON_GRAVELER">;
export type GenderSettingsV0075PokemonGravelerAlola = GenderSettings<"SPAWN_V0075_POKEMON_GRAVELER_ALOLA">;
export type GenderSettingsV0075PokemonGravelerNormal = GenderSettings<"SPAWN_V0075_POKEMON_GRAVELER_NORMAL">;
export type GenderSettingsV0076PokemonGolem = GenderSettings<"SPAWN_V0076_POKEMON_GOLEM">;
export type GenderSettingsV0076PokemonGolemAlola = GenderSettings<"SPAWN_V0076_POKEMON_GOLEM_ALOLA">;
export type GenderSettingsV0076PokemonGolemNormal = GenderSettings<"SPAWN_V0076_POKEMON_GOLEM_NORMAL">;
export type GenderSettingsV0077PokemonPonyta = GenderSettings<"SPAWN_V0077_POKEMON_PONYTA">;
export type GenderSettingsV0077PokemonPonytaGalarian = GenderSettings<"SPAWN_V0077_POKEMON_PONYTA_GALARIAN">;
export type GenderSettingsV0077PokemonPonytaNormal = GenderSettings<"SPAWN_V0077_POKEMON_PONYTA_NORMAL">;
export type GenderSettingsV0078PokemonRapidash = GenderSettings<"SPAWN_V0078_POKEMON_RAPIDASH">;
export type GenderSettingsV0078PokemonRapidashGalarian = GenderSettings<"SPAWN_V0078_POKEMON_RAPIDASH_GALARIAN">;
export type GenderSettingsV0078PokemonRapidashNormal = GenderSettings<"SPAWN_V0078_POKEMON_RAPIDASH_NORMAL">;
export type GenderSettingsV0079PokemonSlowpoke = GenderSettings<"SPAWN_V0079_POKEMON_SLOWPOKE">;
export type GenderSettingsV0079PokemonSlowpoke2020 = GenderSettings<"SPAWN_V0079_POKEMON_SLOWPOKE_2020">;
export type GenderSettingsV0079PokemonSlowpokeGalarian = GenderSettings<"SPAWN_V0079_POKEMON_SLOWPOKE_GALARIAN">;
export type GenderSettingsV0079PokemonSlowpokeNormal = GenderSettings<"SPAWN_V0079_POKEMON_SLOWPOKE_NORMAL">;
export type GenderSettingsV0080PokemonSlowbro = GenderSettings<"SPAWN_V0080_POKEMON_SLOWBRO">;
export type GenderSettingsV0080PokemonSlowbro2021 = GenderSettings<"SPAWN_V0080_POKEMON_SLOWBRO_2021">;
export type GenderSettingsV0080PokemonSlowbroGalarian = GenderSettings<"SPAWN_V0080_POKEMON_SLOWBRO_GALARIAN">;
export type GenderSettingsV0080PokemonSlowbroNormal = GenderSettings<"SPAWN_V0080_POKEMON_SLOWBRO_NORMAL">;
export type GenderSettingsV0081PokemonMagnemite = GenderSettings<"SPAWN_V0081_POKEMON_MAGNEMITE">;
export type GenderSettingsV0081PokemonMagnemiteNormal = GenderSettings<"SPAWN_V0081_POKEMON_MAGNEMITE_NORMAL">;
export type GenderSettingsV0082PokemonMagneton = GenderSettings<"SPAWN_V0082_POKEMON_MAGNETON">;
export type GenderSettingsV0082PokemonMagnetonNormal = GenderSettings<"SPAWN_V0082_POKEMON_MAGNETON_NORMAL">;
export type GenderSettingsV0083PokemonFarfetchd = GenderSettings<"SPAWN_V0083_POKEMON_FARFETCHD">;
export type GenderSettingsV0083PokemonFarfetchdGalarian = GenderSettings<"SPAWN_V0083_POKEMON_FARFETCHD_GALARIAN">;
export type GenderSettingsV0083PokemonFarfetchdNormal = GenderSettings<"SPAWN_V0083_POKEMON_FARFETCHD_NORMAL">;
export type GenderSettingsV0084PokemonDoduo = GenderSettings<"SPAWN_V0084_POKEMON_DODUO">;
export type GenderSettingsV0084PokemonDoduoNormal = GenderSettings<"SPAWN_V0084_POKEMON_DODUO_NORMAL">;
export type GenderSettingsV0085PokemonDodrio = GenderSettings<"SPAWN_V0085_POKEMON_DODRIO">;
export type GenderSettingsV0085PokemonDodrioNormal = GenderSettings<"SPAWN_V0085_POKEMON_DODRIO_NORMAL">;
export type GenderSettingsV0086PokemonSeel = GenderSettings<"SPAWN_V0086_POKEMON_SEEL">;
export type GenderSettingsV0086PokemonSeelNormal = GenderSettings<"SPAWN_V0086_POKEMON_SEEL_NORMAL">;
export type GenderSettingsV0087PokemonDewgong = GenderSettings<"SPAWN_V0087_POKEMON_DEWGONG">;
export type GenderSettingsV0087PokemonDewgongNormal = GenderSettings<"SPAWN_V0087_POKEMON_DEWGONG_NORMAL">;
export type GenderSettingsV0088PokemonGrimer = GenderSettings<"SPAWN_V0088_POKEMON_GRIMER">;
export type GenderSettingsV0088PokemonGrimerAlola = GenderSettings<"SPAWN_V0088_POKEMON_GRIMER_ALOLA">;
export type GenderSettingsV0088PokemonGrimerNormal = GenderSettings<"SPAWN_V0088_POKEMON_GRIMER_NORMAL">;
export type GenderSettingsV0089PokemonMuk = GenderSettings<"SPAWN_V0089_POKEMON_MUK">;
export type GenderSettingsV0089PokemonMukAlola = GenderSettings<"SPAWN_V0089_POKEMON_MUK_ALOLA">;
export type GenderSettingsV0089PokemonMukNormal = GenderSettings<"SPAWN_V0089_POKEMON_MUK_NORMAL">;
export type GenderSettingsV0090PokemonShellder = GenderSettings<"SPAWN_V0090_POKEMON_SHELLDER">;
export type GenderSettingsV0090PokemonShellderNormal = GenderSettings<"SPAWN_V0090_POKEMON_SHELLDER_NORMAL">;
export type GenderSettingsV0091PokemonCloyster = GenderSettings<"SPAWN_V0091_POKEMON_CLOYSTER">;
export type GenderSettingsV0091PokemonCloysterNormal = GenderSettings<"SPAWN_V0091_POKEMON_CLOYSTER_NORMAL">;
export type GenderSettingsV0092PokemonGastly = GenderSettings<"SPAWN_V0092_POKEMON_GASTLY">;
export type GenderSettingsV0092PokemonGastlyNormal = GenderSettings<"SPAWN_V0092_POKEMON_GASTLY_NORMAL">;
export type GenderSettingsV0093PokemonHaunter = GenderSettings<"SPAWN_V0093_POKEMON_HAUNTER">;
export type GenderSettingsV0093PokemonHaunterNormal = GenderSettings<"SPAWN_V0093_POKEMON_HAUNTER_NORMAL">;
export type GenderSettingsV0094PokemonGengar = GenderSettings<"SPAWN_V0094_POKEMON_GENGAR">;
export type GenderSettingsV0094PokemonGengarCostume2020 = GenderSettings<"SPAWN_V0094_POKEMON_GENGAR_COSTUME_2020">;
export type GenderSettingsV0094PokemonGengarNormal = GenderSettings<"SPAWN_V0094_POKEMON_GENGAR_NORMAL">;
export type GenderSettingsV0095PokemonOnix = GenderSettings<"SPAWN_V0095_POKEMON_ONIX">;
export type GenderSettingsV0095PokemonOnixNormal = GenderSettings<"SPAWN_V0095_POKEMON_ONIX_NORMAL">;
export type GenderSettingsV0096PokemonDrowzee = GenderSettings<"SPAWN_V0096_POKEMON_DROWZEE">;
export type GenderSettingsV0096PokemonDrowzeeNormal = GenderSettings<"SPAWN_V0096_POKEMON_DROWZEE_NORMAL">;
export type GenderSettingsV0097PokemonHypno = GenderSettings<"SPAWN_V0097_POKEMON_HYPNO">;
export type GenderSettingsV0097PokemonHypnoNormal = GenderSettings<"SPAWN_V0097_POKEMON_HYPNO_NORMAL">;
export type GenderSettingsV0098PokemonKrabby = GenderSettings<"SPAWN_V0098_POKEMON_KRABBY">;
export type GenderSettingsV0098PokemonKrabbyNormal = GenderSettings<"SPAWN_V0098_POKEMON_KRABBY_NORMAL">;
export type GenderSettingsV0099PokemonKingler = GenderSettings<"SPAWN_V0099_POKEMON_KINGLER">;
export type GenderSettingsV0099PokemonKinglerNormal = GenderSettings<"SPAWN_V0099_POKEMON_KINGLER_NORMAL">;
export type GenderSettingsV0100PokemonVoltorb = GenderSettings<"SPAWN_V0100_POKEMON_VOLTORB">;
export type GenderSettingsV0100PokemonVoltorbHisuian = GenderSettings<"SPAWN_V0100_POKEMON_VOLTORB_HISUIAN">;
export type GenderSettingsV0100PokemonVoltorbNormal = GenderSettings<"SPAWN_V0100_POKEMON_VOLTORB_NORMAL">;
export type GenderSettingsV0101PokemonElectrode = GenderSettings<"SPAWN_V0101_POKEMON_ELECTRODE">;
export type GenderSettingsV0101PokemonElectrodeHisuian = GenderSettings<"SPAWN_V0101_POKEMON_ELECTRODE_HISUIAN">;
export type GenderSettingsV0101PokemonElectrodeNormal = GenderSettings<"SPAWN_V0101_POKEMON_ELECTRODE_NORMAL">;
export type GenderSettingsV0102PokemonExeggcute = GenderSettings<"SPAWN_V0102_POKEMON_EXEGGCUTE">;
export type GenderSettingsV0102PokemonExeggcuteNormal = GenderSettings<"SPAWN_V0102_POKEMON_EXEGGCUTE_NORMAL">;
export type GenderSettingsV0103PokemonExeggutor = GenderSettings<"SPAWN_V0103_POKEMON_EXEGGUTOR">;
export type GenderSettingsV0103PokemonExeggutorAlola = GenderSettings<"SPAWN_V0103_POKEMON_EXEGGUTOR_ALOLA">;
export type GenderSettingsV0103PokemonExeggutorNormal = GenderSettings<"SPAWN_V0103_POKEMON_EXEGGUTOR_NORMAL">;
export type GenderSettingsV0104PokemonCubone = GenderSettings<"SPAWN_V0104_POKEMON_CUBONE">;
export type GenderSettingsV0104PokemonCuboneNormal = GenderSettings<"SPAWN_V0104_POKEMON_CUBONE_NORMAL">;
export type GenderSettingsV0105PokemonMarowak = GenderSettings<"SPAWN_V0105_POKEMON_MAROWAK">;
export type GenderSettingsV0105PokemonMarowakAlola = GenderSettings<"SPAWN_V0105_POKEMON_MAROWAK_ALOLA">;
export type GenderSettingsV0105PokemonMarowakNormal = GenderSettings<"SPAWN_V0105_POKEMON_MAROWAK_NORMAL">;
export type GenderSettingsV0106PokemonHitmonlee = GenderSettings<"SPAWN_V0106_POKEMON_HITMONLEE">;
export type GenderSettingsV0106PokemonHitmonleeNormal = GenderSettings<"SPAWN_V0106_POKEMON_HITMONLEE_NORMAL">;
export type GenderSettingsV0107PokemonHitmonchan = GenderSettings<"SPAWN_V0107_POKEMON_HITMONCHAN">;
export type GenderSettingsV0107PokemonHitmonchanNormal = GenderSettings<"SPAWN_V0107_POKEMON_HITMONCHAN_NORMAL">;
export type GenderSettingsV0108PokemonLickitung = GenderSettings<"SPAWN_V0108_POKEMON_LICKITUNG">;
export type GenderSettingsV0108PokemonLickitungNormal = GenderSettings<"SPAWN_V0108_POKEMON_LICKITUNG_NORMAL">;
export type GenderSettingsV0109PokemonKoffing = GenderSettings<"SPAWN_V0109_POKEMON_KOFFING">;
export type GenderSettingsV0109PokemonKoffingNormal = GenderSettings<"SPAWN_V0109_POKEMON_KOFFING_NORMAL">;
export type GenderSettingsV0110PokemonWeezing = GenderSettings<"SPAWN_V0110_POKEMON_WEEZING">;
export type GenderSettingsV0110PokemonWeezingGalarian = GenderSettings<"SPAWN_V0110_POKEMON_WEEZING_GALARIAN">;
export type GenderSettingsV0110PokemonWeezingNormal = GenderSettings<"SPAWN_V0110_POKEMON_WEEZING_NORMAL">;
export type GenderSettingsV0111PokemonRhyhorn = GenderSettings<"SPAWN_V0111_POKEMON_RHYHORN">;
export type GenderSettingsV0111PokemonRhyhornNormal = GenderSettings<"SPAWN_V0111_POKEMON_RHYHORN_NORMAL">;
export type GenderSettingsV0112PokemonRhydon = GenderSettings<"SPAWN_V0112_POKEMON_RHYDON">;
export type GenderSettingsV0112PokemonRhydonNormal = GenderSettings<"SPAWN_V0112_POKEMON_RHYDON_NORMAL">;
export type GenderSettingsV0113PokemonChansey = GenderSettings<"SPAWN_V0113_POKEMON_CHANSEY">;
export type GenderSettingsV0113PokemonChanseyNormal = GenderSettings<"SPAWN_V0113_POKEMON_CHANSEY_NORMAL">;
export type GenderSettingsV0114PokemonTangela = GenderSettings<"SPAWN_V0114_POKEMON_TANGELA">;
export type GenderSettingsV0114PokemonTangelaNormal = GenderSettings<"SPAWN_V0114_POKEMON_TANGELA_NORMAL">;
export type GenderSettingsV0115PokemonKangaskhan = GenderSettings<"SPAWN_V0115_POKEMON_KANGASKHAN">;
export type GenderSettingsV0115PokemonKangaskhanNormal = GenderSettings<"SPAWN_V0115_POKEMON_KANGASKHAN_NORMAL">;
export type GenderSettingsV0116PokemonHorsea = GenderSettings<"SPAWN_V0116_POKEMON_HORSEA">;
export type GenderSettingsV0116PokemonHorseaNormal = GenderSettings<"SPAWN_V0116_POKEMON_HORSEA_NORMAL">;
export type GenderSettingsV0117PokemonSeadra = GenderSettings<"SPAWN_V0117_POKEMON_SEADRA">;
export type GenderSettingsV0117PokemonSeadraNormal = GenderSettings<"SPAWN_V0117_POKEMON_SEADRA_NORMAL">;
export type GenderSettingsV0118PokemonGoldeen = GenderSettings<"SPAWN_V0118_POKEMON_GOLDEEN">;
export type GenderSettingsV0118PokemonGoldeenNormal = GenderSettings<"SPAWN_V0118_POKEMON_GOLDEEN_NORMAL">;
export type GenderSettingsV0119PokemonSeaking = GenderSettings<"SPAWN_V0119_POKEMON_SEAKING">;
export type GenderSettingsV0119PokemonSeakingNormal = GenderSettings<"SPAWN_V0119_POKEMON_SEAKING_NORMAL">;
export type GenderSettingsV0120PokemonStaryu = GenderSettings<"SPAWN_V0120_POKEMON_STARYU">;
export type GenderSettingsV0120PokemonStaryuNormal = GenderSettings<"SPAWN_V0120_POKEMON_STARYU_NORMAL">;
export type GenderSettingsV0121PokemonStarmie = GenderSettings<"SPAWN_V0121_POKEMON_STARMIE">;
export type GenderSettingsV0121PokemonStarmieNormal = GenderSettings<"SPAWN_V0121_POKEMON_STARMIE_NORMAL">;
export type GenderSettingsV0122PokemonMrMime = GenderSettings<"SPAWN_V0122_POKEMON_MR_MIME">;
export type GenderSettingsV0122PokemonMrMimeGalarian = GenderSettings<"SPAWN_V0122_POKEMON_MR_MIME_GALARIAN">;
export type GenderSettingsV0122PokemonMrMimeNormal = GenderSettings<"SPAWN_V0122_POKEMON_MR_MIME_NORMAL">;
export type GenderSettingsV0123PokemonScyther = GenderSettings<"SPAWN_V0123_POKEMON_SCYTHER">;
export type GenderSettingsV0123PokemonScytherNormal = GenderSettings<"SPAWN_V0123_POKEMON_SCYTHER_NORMAL">;
export type GenderSettingsV0124PokemonJynx = GenderSettings<"SPAWN_V0124_POKEMON_JYNX">;
export type GenderSettingsV0124PokemonJynxNormal = GenderSettings<"SPAWN_V0124_POKEMON_JYNX_NORMAL">;
export type GenderSettingsV0125PokemonElectabuzz = GenderSettings<"SPAWN_V0125_POKEMON_ELECTABUZZ">;
export type GenderSettingsV0125PokemonElectabuzzNormal = GenderSettings<"SPAWN_V0125_POKEMON_ELECTABUZZ_NORMAL">;
export type GenderSettingsV0126PokemonMagmar = GenderSettings<"SPAWN_V0126_POKEMON_MAGMAR">;
export type GenderSettingsV0126PokemonMagmarNormal = GenderSettings<"SPAWN_V0126_POKEMON_MAGMAR_NORMAL">;
export type GenderSettingsV0127PokemonPinsir = GenderSettings<"SPAWN_V0127_POKEMON_PINSIR">;
export type GenderSettingsV0127PokemonPinsirNormal = GenderSettings<"SPAWN_V0127_POKEMON_PINSIR_NORMAL">;
export type GenderSettingsV0128PokemonTauros = GenderSettings<"SPAWN_V0128_POKEMON_TAUROS">;
export type GenderSettingsV0128PokemonTaurosNormal = GenderSettings<"SPAWN_V0128_POKEMON_TAUROS_NORMAL">;
export type GenderSettingsV0128PokemonTaurosPaldeaAqua = GenderSettings<"SPAWN_V0128_POKEMON_TAUROS_PALDEA_AQUA">;
export type GenderSettingsV0128PokemonTaurosPaldeaBlaze = GenderSettings<"SPAWN_V0128_POKEMON_TAUROS_PALDEA_BLAZE">;
export type GenderSettingsV0128PokemonTaurosPaldeaCombat = GenderSettings<"SPAWN_V0128_POKEMON_TAUROS_PALDEA_COMBAT">;
export type GenderSettingsV0129PokemonMagikarp = GenderSettings<"SPAWN_V0129_POKEMON_MAGIKARP">;
export type GenderSettingsV0129PokemonMagikarpNormal = GenderSettings<"SPAWN_V0129_POKEMON_MAGIKARP_NORMAL">;
export type GenderSettingsV0130PokemonGyarados = GenderSettings<"SPAWN_V0130_POKEMON_GYARADOS">;
export type GenderSettingsV0130PokemonGyaradosNormal = GenderSettings<"SPAWN_V0130_POKEMON_GYARADOS_NORMAL">;
export type GenderSettingsV0131PokemonLapras = GenderSettings<"SPAWN_V0131_POKEMON_LAPRAS">;
export type GenderSettingsV0131PokemonLaprasCostume2020 = GenderSettings<"SPAWN_V0131_POKEMON_LAPRAS_COSTUME_2020">;
export type GenderSettingsV0131PokemonLaprasNormal = GenderSettings<"SPAWN_V0131_POKEMON_LAPRAS_NORMAL">;
export type GenderSettingsV0132PokemonDitto = GenderSettings<"SPAWN_V0132_POKEMON_DITTO">;
export type GenderSettingsV0132PokemonDittoNormal = GenderSettings<"SPAWN_V0132_POKEMON_DITTO_NORMAL">;
export type GenderSettingsV0132PokemonDittoSpring2026A = GenderSettings<"SPAWN_V0132_POKEMON_DITTO_SPRING_2026_A">;
export type GenderSettingsV0132PokemonDittoSpring2026B = GenderSettings<"SPAWN_V0132_POKEMON_DITTO_SPRING_2026_B">;
export type GenderSettingsV0133PokemonEevee = GenderSettings<"SPAWN_V0133_POKEMON_EEVEE">;
export type GenderSettingsV0133PokemonEeveeGofest2024Mtiara = GenderSettings<"SPAWN_V0133_POKEMON_EEVEE_GOFEST_2024_MTIARA">;
export type GenderSettingsV0133PokemonEeveeGofest2024Stiara = GenderSettings<"SPAWN_V0133_POKEMON_EEVEE_GOFEST_2024_STIARA">;
export type GenderSettingsV0133PokemonEeveeNormal = GenderSettings<"SPAWN_V0133_POKEMON_EEVEE_NORMAL">;
export type GenderSettingsV0134PokemonVaporeon = GenderSettings<"SPAWN_V0134_POKEMON_VAPOREON">;
export type GenderSettingsV0134PokemonVaporeonNormal = GenderSettings<"SPAWN_V0134_POKEMON_VAPOREON_NORMAL">;
export type GenderSettingsV0135PokemonJolteon = GenderSettings<"SPAWN_V0135_POKEMON_JOLTEON">;
export type GenderSettingsV0135PokemonJolteonNormal = GenderSettings<"SPAWN_V0135_POKEMON_JOLTEON_NORMAL">;
export type GenderSettingsV0136PokemonFlareon = GenderSettings<"SPAWN_V0136_POKEMON_FLAREON">;
export type GenderSettingsV0136PokemonFlareonNormal = GenderSettings<"SPAWN_V0136_POKEMON_FLAREON_NORMAL">;
export type GenderSettingsV0137PokemonPorygon = GenderSettings<"SPAWN_V0137_POKEMON_PORYGON">;
export type GenderSettingsV0137PokemonPorygonNormal = GenderSettings<"SPAWN_V0137_POKEMON_PORYGON_NORMAL">;
export type GenderSettingsV0138PokemonOmanyte = GenderSettings<"SPAWN_V0138_POKEMON_OMANYTE">;
export type GenderSettingsV0138PokemonOmanyteNormal = GenderSettings<"SPAWN_V0138_POKEMON_OMANYTE_NORMAL">;
export type GenderSettingsV0139PokemonOmastar = GenderSettings<"SPAWN_V0139_POKEMON_OMASTAR">;
export type GenderSettingsV0139PokemonOmastarNormal = GenderSettings<"SPAWN_V0139_POKEMON_OMASTAR_NORMAL">;
export type GenderSettingsV0140PokemonKabuto = GenderSettings<"SPAWN_V0140_POKEMON_KABUTO">;
export type GenderSettingsV0140PokemonKabutoNormal = GenderSettings<"SPAWN_V0140_POKEMON_KABUTO_NORMAL">;
export type GenderSettingsV0141PokemonKabutops = GenderSettings<"SPAWN_V0141_POKEMON_KABUTOPS">;
export type GenderSettingsV0141PokemonKabutopsNormal = GenderSettings<"SPAWN_V0141_POKEMON_KABUTOPS_NORMAL">;
export type GenderSettingsV0142PokemonAerodactyl = GenderSettings<"SPAWN_V0142_POKEMON_AERODACTYL">;
export type GenderSettingsV0142PokemonAerodactylNormal = GenderSettings<"SPAWN_V0142_POKEMON_AERODACTYL_NORMAL">;
export type GenderSettingsV0142PokemonAerodactylSummer2023 = GenderSettings<"SPAWN_V0142_POKEMON_AERODACTYL_SUMMER_2023">;
export type GenderSettingsV0143PokemonSnorlax = GenderSettings<"SPAWN_V0143_POKEMON_SNORLAX">;
export type GenderSettingsV0143PokemonSnorlaxNormal = GenderSettings<"SPAWN_V0143_POKEMON_SNORLAX_NORMAL">;
export type GenderSettingsV0143PokemonSnorlaxWildarea2024 = GenderSettings<"SPAWN_V0143_POKEMON_SNORLAX_WILDAREA_2024">;
export type GenderSettingsV0144PokemonArticuno = GenderSettings<"SPAWN_V0144_POKEMON_ARTICUNO">;
export type GenderSettingsV0144PokemonArticunoGalarian = GenderSettings<"SPAWN_V0144_POKEMON_ARTICUNO_GALARIAN">;
export type GenderSettingsV0144PokemonArticunoNormal = GenderSettings<"SPAWN_V0144_POKEMON_ARTICUNO_NORMAL">;
export type GenderSettingsV0145PokemonZapdos = GenderSettings<"SPAWN_V0145_POKEMON_ZAPDOS">;
export type GenderSettingsV0145PokemonZapdosGalarian = GenderSettings<"SPAWN_V0145_POKEMON_ZAPDOS_GALARIAN">;
export type GenderSettingsV0145PokemonZapdosNormal = GenderSettings<"SPAWN_V0145_POKEMON_ZAPDOS_NORMAL">;
export type GenderSettingsV0146PokemonMoltres = GenderSettings<"SPAWN_V0146_POKEMON_MOLTRES">;
export type GenderSettingsV0146PokemonMoltresGalarian = GenderSettings<"SPAWN_V0146_POKEMON_MOLTRES_GALARIAN">;
export type GenderSettingsV0146PokemonMoltresNormal = GenderSettings<"SPAWN_V0146_POKEMON_MOLTRES_NORMAL">;
export type GenderSettingsV0147PokemonDratini = GenderSettings<"SPAWN_V0147_POKEMON_DRATINI">;
export type GenderSettingsV0147PokemonDratiniNormal = GenderSettings<"SPAWN_V0147_POKEMON_DRATINI_NORMAL">;
export type GenderSettingsV0148PokemonDragonair = GenderSettings<"SPAWN_V0148_POKEMON_DRAGONAIR">;
export type GenderSettingsV0148PokemonDragonairNormal = GenderSettings<"SPAWN_V0148_POKEMON_DRAGONAIR_NORMAL">;
export type GenderSettingsV0149PokemonDragonite = GenderSettings<"SPAWN_V0149_POKEMON_DRAGONITE">;
export type GenderSettingsV0149PokemonDragoniteNormal = GenderSettings<"SPAWN_V0149_POKEMON_DRAGONITE_NORMAL">;
export type GenderSettingsV0150PokemonMewtwo = GenderSettings<"SPAWN_V0150_POKEMON_MEWTWO">;
export type GenderSettingsV0150PokemonMewtwoA = GenderSettings<"SPAWN_V0150_POKEMON_MEWTWO_A">;
export type GenderSettingsV0150PokemonMewtwoNormal = GenderSettings<"SPAWN_V0150_POKEMON_MEWTWO_NORMAL">;
export type GenderSettingsV0151PokemonMew = GenderSettings<"SPAWN_V0151_POKEMON_MEW">;
export type GenderSettingsV0151PokemonMewNormal = GenderSettings<"SPAWN_V0151_POKEMON_MEW_NORMAL">;
export type GenderSettingsV0152PokemonChikorita = GenderSettings<"SPAWN_V0152_POKEMON_CHIKORITA">;
export type GenderSettingsV0152PokemonChikoritaNormal = GenderSettings<"SPAWN_V0152_POKEMON_CHIKORITA_NORMAL">;
export type GenderSettingsV0153PokemonBayleef = GenderSettings<"SPAWN_V0153_POKEMON_BAYLEEF">;
export type GenderSettingsV0153PokemonBayleefNormal = GenderSettings<"SPAWN_V0153_POKEMON_BAYLEEF_NORMAL">;
export type GenderSettingsV0154PokemonMeganium = GenderSettings<"SPAWN_V0154_POKEMON_MEGANIUM">;
export type GenderSettingsV0154PokemonMeganiumNormal = GenderSettings<"SPAWN_V0154_POKEMON_MEGANIUM_NORMAL">;
export type GenderSettingsV0155PokemonCyndaquil = GenderSettings<"SPAWN_V0155_POKEMON_CYNDAQUIL">;
export type GenderSettingsV0155PokemonCyndaquilNormal = GenderSettings<"SPAWN_V0155_POKEMON_CYNDAQUIL_NORMAL">;
export type GenderSettingsV0156PokemonQuilava = GenderSettings<"SPAWN_V0156_POKEMON_QUILAVA">;
export type GenderSettingsV0156PokemonQuilavaNormal = GenderSettings<"SPAWN_V0156_POKEMON_QUILAVA_NORMAL">;
export type GenderSettingsV0157PokemonTyphlosion = GenderSettings<"SPAWN_V0157_POKEMON_TYPHLOSION">;
export type GenderSettingsV0157PokemonTyphlosionHisuian = GenderSettings<"SPAWN_V0157_POKEMON_TYPHLOSION_HISUIAN">;
export type GenderSettingsV0157PokemonTyphlosionNormal = GenderSettings<"SPAWN_V0157_POKEMON_TYPHLOSION_NORMAL">;
export type GenderSettingsV0158PokemonTotodile = GenderSettings<"SPAWN_V0158_POKEMON_TOTODILE">;
export type GenderSettingsV0158PokemonTotodileNormal = GenderSettings<"SPAWN_V0158_POKEMON_TOTODILE_NORMAL">;
export type GenderSettingsV0159PokemonCroconaw = GenderSettings<"SPAWN_V0159_POKEMON_CROCONAW">;
export type GenderSettingsV0159PokemonCroconawNormal = GenderSettings<"SPAWN_V0159_POKEMON_CROCONAW_NORMAL">;
export type GenderSettingsV0160PokemonFeraligatr = GenderSettings<"SPAWN_V0160_POKEMON_FERALIGATR">;
export type GenderSettingsV0160PokemonFeraligatrNormal = GenderSettings<"SPAWN_V0160_POKEMON_FERALIGATR_NORMAL">;
export type GenderSettingsV0161PokemonSentret = GenderSettings<"SPAWN_V0161_POKEMON_SENTRET">;
export type GenderSettingsV0161PokemonSentretNormal = GenderSettings<"SPAWN_V0161_POKEMON_SENTRET_NORMAL">;
export type GenderSettingsV0162PokemonFurret = GenderSettings<"SPAWN_V0162_POKEMON_FURRET">;
export type GenderSettingsV0162PokemonFurretNormal = GenderSettings<"SPAWN_V0162_POKEMON_FURRET_NORMAL">;
export type GenderSettingsV0163PokemonHoothoot = GenderSettings<"SPAWN_V0163_POKEMON_HOOTHOOT">;
export type GenderSettingsV0163PokemonHoothootNormal = GenderSettings<"SPAWN_V0163_POKEMON_HOOTHOOT_NORMAL">;
export type GenderSettingsV0164PokemonNoctowl = GenderSettings<"SPAWN_V0164_POKEMON_NOCTOWL">;
export type GenderSettingsV0164PokemonNoctowlNormal = GenderSettings<"SPAWN_V0164_POKEMON_NOCTOWL_NORMAL">;
export type GenderSettingsV0165PokemonLedyba = GenderSettings<"SPAWN_V0165_POKEMON_LEDYBA">;
export type GenderSettingsV0165PokemonLedybaNormal = GenderSettings<"SPAWN_V0165_POKEMON_LEDYBA_NORMAL">;
export type GenderSettingsV0166PokemonLedian = GenderSettings<"SPAWN_V0166_POKEMON_LEDIAN">;
export type GenderSettingsV0166PokemonLedianNormal = GenderSettings<"SPAWN_V0166_POKEMON_LEDIAN_NORMAL">;
export type GenderSettingsV0167PokemonSpinarak = GenderSettings<"SPAWN_V0167_POKEMON_SPINARAK">;
export type GenderSettingsV0167PokemonSpinarakNormal = GenderSettings<"SPAWN_V0167_POKEMON_SPINARAK_NORMAL">;
export type GenderSettingsV0168PokemonAriados = GenderSettings<"SPAWN_V0168_POKEMON_ARIADOS">;
export type GenderSettingsV0168PokemonAriadosNormal = GenderSettings<"SPAWN_V0168_POKEMON_ARIADOS_NORMAL">;
export type GenderSettingsV0169PokemonCrobat = GenderSettings<"SPAWN_V0169_POKEMON_CROBAT">;
export type GenderSettingsV0169PokemonCrobatNormal = GenderSettings<"SPAWN_V0169_POKEMON_CROBAT_NORMAL">;
export type GenderSettingsV0170PokemonChinchou = GenderSettings<"SPAWN_V0170_POKEMON_CHINCHOU">;
export type GenderSettingsV0170PokemonChinchouNormal = GenderSettings<"SPAWN_V0170_POKEMON_CHINCHOU_NORMAL">;
export type GenderSettingsV0171PokemonLanturn = GenderSettings<"SPAWN_V0171_POKEMON_LANTURN">;
export type GenderSettingsV0171PokemonLanturnNormal = GenderSettings<"SPAWN_V0171_POKEMON_LANTURN_NORMAL">;
export type GenderSettingsV0172PokemonPichu = GenderSettings<"SPAWN_V0172_POKEMON_PICHU">;
export type GenderSettingsV0172PokemonPichuNormal = GenderSettings<"SPAWN_V0172_POKEMON_PICHU_NORMAL">;
export type GenderSettingsV0173PokemonCleffa = GenderSettings<"SPAWN_V0173_POKEMON_CLEFFA">;
export type GenderSettingsV0173PokemonCleffaNormal = GenderSettings<"SPAWN_V0173_POKEMON_CLEFFA_NORMAL">;
export type GenderSettingsV0174PokemonIgglybuff = GenderSettings<"SPAWN_V0174_POKEMON_IGGLYBUFF">;
export type GenderSettingsV0174PokemonIgglybuffNormal = GenderSettings<"SPAWN_V0174_POKEMON_IGGLYBUFF_NORMAL">;
export type GenderSettingsV0175PokemonTogepi = GenderSettings<"SPAWN_V0175_POKEMON_TOGEPI">;
export type GenderSettingsV0175PokemonTogepiNormal = GenderSettings<"SPAWN_V0175_POKEMON_TOGEPI_NORMAL">;
export type GenderSettingsV0176PokemonTogetic = GenderSettings<"SPAWN_V0176_POKEMON_TOGETIC">;
export type GenderSettingsV0176PokemonTogeticNormal = GenderSettings<"SPAWN_V0176_POKEMON_TOGETIC_NORMAL">;
export type GenderSettingsV0177PokemonNatu = GenderSettings<"SPAWN_V0177_POKEMON_NATU">;
export type GenderSettingsV0177PokemonNatuNormal = GenderSettings<"SPAWN_V0177_POKEMON_NATU_NORMAL">;
export type GenderSettingsV0178PokemonXatu = GenderSettings<"SPAWN_V0178_POKEMON_XATU">;
export type GenderSettingsV0178PokemonXatuNormal = GenderSettings<"SPAWN_V0178_POKEMON_XATU_NORMAL">;
export type GenderSettingsV0179PokemonMareep = GenderSettings<"SPAWN_V0179_POKEMON_MAREEP">;
export type GenderSettingsV0179PokemonMareepNormal = GenderSettings<"SPAWN_V0179_POKEMON_MAREEP_NORMAL">;
export type GenderSettingsV0180PokemonFlaaffy = GenderSettings<"SPAWN_V0180_POKEMON_FLAAFFY">;
export type GenderSettingsV0180PokemonFlaaffyNormal = GenderSettings<"SPAWN_V0180_POKEMON_FLAAFFY_NORMAL">;
export type GenderSettingsV0181PokemonAmpharos = GenderSettings<"SPAWN_V0181_POKEMON_AMPHAROS">;
export type GenderSettingsV0181PokemonAmpharosNormal = GenderSettings<"SPAWN_V0181_POKEMON_AMPHAROS_NORMAL">;
export type GenderSettingsV0182PokemonBellossom = GenderSettings<"SPAWN_V0182_POKEMON_BELLOSSOM">;
export type GenderSettingsV0182PokemonBellossomNormal = GenderSettings<"SPAWN_V0182_POKEMON_BELLOSSOM_NORMAL">;
export type GenderSettingsV0183PokemonMarill = GenderSettings<"SPAWN_V0183_POKEMON_MARILL">;
export type GenderSettingsV0183PokemonMarillNormal = GenderSettings<"SPAWN_V0183_POKEMON_MARILL_NORMAL">;
export type GenderSettingsV0184PokemonAzumarill = GenderSettings<"SPAWN_V0184_POKEMON_AZUMARILL">;
export type GenderSettingsV0184PokemonAzumarillNormal = GenderSettings<"SPAWN_V0184_POKEMON_AZUMARILL_NORMAL">;
export type GenderSettingsV0185PokemonSudowoodo = GenderSettings<"SPAWN_V0185_POKEMON_SUDOWOODO">;
export type GenderSettingsV0185PokemonSudowoodoNormal = GenderSettings<"SPAWN_V0185_POKEMON_SUDOWOODO_NORMAL">;
export type GenderSettingsV0185PokemonSudowoodoWinter2025 = GenderSettings<"SPAWN_V0185_POKEMON_SUDOWOODO_WINTER_2025">;
export type GenderSettingsV0186PokemonPolitoed = GenderSettings<"SPAWN_V0186_POKEMON_POLITOED">;
export type GenderSettingsV0186PokemonPolitoedNormal = GenderSettings<"SPAWN_V0186_POKEMON_POLITOED_NORMAL">;
export type GenderSettingsV0187PokemonHoppip = GenderSettings<"SPAWN_V0187_POKEMON_HOPPIP">;
export type GenderSettingsV0187PokemonHoppipNormal = GenderSettings<"SPAWN_V0187_POKEMON_HOPPIP_NORMAL">;
export type GenderSettingsV0188PokemonSkiploom = GenderSettings<"SPAWN_V0188_POKEMON_SKIPLOOM">;
export type GenderSettingsV0188PokemonSkiploomNormal = GenderSettings<"SPAWN_V0188_POKEMON_SKIPLOOM_NORMAL">;
export type GenderSettingsV0189PokemonJumpluff = GenderSettings<"SPAWN_V0189_POKEMON_JUMPLUFF">;
export type GenderSettingsV0189PokemonJumpluffNormal = GenderSettings<"SPAWN_V0189_POKEMON_JUMPLUFF_NORMAL">;
export type GenderSettingsV0190PokemonAipom = GenderSettings<"SPAWN_V0190_POKEMON_AIPOM">;
export type GenderSettingsV0190PokemonAipomNormal = GenderSettings<"SPAWN_V0190_POKEMON_AIPOM_NORMAL">;
export type GenderSettingsV0191PokemonSunkern = GenderSettings<"SPAWN_V0191_POKEMON_SUNKERN">;
export type GenderSettingsV0191PokemonSunkernNormal = GenderSettings<"SPAWN_V0191_POKEMON_SUNKERN_NORMAL">;
export type GenderSettingsV0192PokemonSunflora = GenderSettings<"SPAWN_V0192_POKEMON_SUNFLORA">;
export type GenderSettingsV0192PokemonSunfloraNormal = GenderSettings<"SPAWN_V0192_POKEMON_SUNFLORA_NORMAL">;
export type GenderSettingsV0193PokemonYanma = GenderSettings<"SPAWN_V0193_POKEMON_YANMA">;
export type GenderSettingsV0193PokemonYanmaNormal = GenderSettings<"SPAWN_V0193_POKEMON_YANMA_NORMAL">;
export type GenderSettingsV0194PokemonWooper = GenderSettings<"SPAWN_V0194_POKEMON_WOOPER">;
export type GenderSettingsV0194PokemonWooperNormal = GenderSettings<"SPAWN_V0194_POKEMON_WOOPER_NORMAL">;
export type GenderSettingsV0194PokemonWooperPaldea = GenderSettings<"SPAWN_V0194_POKEMON_WOOPER_PALDEA">;
export type GenderSettingsV0195PokemonQuagsire = GenderSettings<"SPAWN_V0195_POKEMON_QUAGSIRE">;
export type GenderSettingsV0195PokemonQuagsireNormal = GenderSettings<"SPAWN_V0195_POKEMON_QUAGSIRE_NORMAL">;
export type GenderSettingsV0196PokemonEspeon = GenderSettings<"SPAWN_V0196_POKEMON_ESPEON">;
export type GenderSettingsV0196PokemonEspeonGofest2024Sscarf = GenderSettings<"SPAWN_V0196_POKEMON_ESPEON_GOFEST_2024_SSCARF">;
export type GenderSettingsV0196PokemonEspeonNormal = GenderSettings<"SPAWN_V0196_POKEMON_ESPEON_NORMAL">;
export type GenderSettingsV0197PokemonUmbreon = GenderSettings<"SPAWN_V0197_POKEMON_UMBREON">;
export type GenderSettingsV0197PokemonUmbreonGofest2024Mscarf = GenderSettings<"SPAWN_V0197_POKEMON_UMBREON_GOFEST_2024_MSCARF">;
export type GenderSettingsV0197PokemonUmbreonNormal = GenderSettings<"SPAWN_V0197_POKEMON_UMBREON_NORMAL">;
export type GenderSettingsV0198PokemonMurkrow = GenderSettings<"SPAWN_V0198_POKEMON_MURKROW">;
export type GenderSettingsV0198PokemonMurkrowNormal = GenderSettings<"SPAWN_V0198_POKEMON_MURKROW_NORMAL">;
export type GenderSettingsV0199PokemonSlowking = GenderSettings<"SPAWN_V0199_POKEMON_SLOWKING">;
export type GenderSettingsV0199PokemonSlowking2022 = GenderSettings<"SPAWN_V0199_POKEMON_SLOWKING_2022">;
export type GenderSettingsV0199PokemonSlowkingGalarian = GenderSettings<"SPAWN_V0199_POKEMON_SLOWKING_GALARIAN">;
export type GenderSettingsV0199PokemonSlowkingNormal = GenderSettings<"SPAWN_V0199_POKEMON_SLOWKING_NORMAL">;
export type GenderSettingsV0200PokemonMisdreavus = GenderSettings<"SPAWN_V0200_POKEMON_MISDREAVUS">;
export type GenderSettingsV0200PokemonMisdreavusNormal = GenderSettings<"SPAWN_V0200_POKEMON_MISDREAVUS_NORMAL">;
export type GenderSettingsV0201PokemonUnown = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN">;
export type GenderSettingsV0201PokemonUnownA = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_A">;
export type GenderSettingsV0201PokemonUnownB = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_B">;
export type GenderSettingsV0201PokemonUnownC = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_C">;
export type GenderSettingsV0201PokemonUnownD = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_D">;
export type GenderSettingsV0201PokemonUnownE = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_E">;
export type GenderSettingsV0201PokemonUnownExclamationPoint = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_EXCLAMATION_POINT">;
export type GenderSettingsV0201PokemonUnownF = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_F">;
export type GenderSettingsV0201PokemonUnownG = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_G">;
export type GenderSettingsV0201PokemonUnownH = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_H">;
export type GenderSettingsV0201PokemonUnownI = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_I">;
export type GenderSettingsV0201PokemonUnownJ = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_J">;
export type GenderSettingsV0201PokemonUnownK = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_K">;
export type GenderSettingsV0201PokemonUnownL = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_L">;
export type GenderSettingsV0201PokemonUnownM = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_M">;
export type GenderSettingsV0201PokemonUnownN = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_N">;
export type GenderSettingsV0201PokemonUnownO = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_O">;
export type GenderSettingsV0201PokemonUnownP = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_P">;
export type GenderSettingsV0201PokemonUnownQ = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_Q">;
export type GenderSettingsV0201PokemonUnownQuestionMark = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_QUESTION_MARK">;
export type GenderSettingsV0201PokemonUnownR = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_R">;
export type GenderSettingsV0201PokemonUnownS = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_S">;
export type GenderSettingsV0201PokemonUnownT = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_T">;
export type GenderSettingsV0201PokemonUnownU = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_U">;
export type GenderSettingsV0201PokemonUnownV = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_V">;
export type GenderSettingsV0201PokemonUnownW = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_W">;
export type GenderSettingsV0201PokemonUnownX = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_X">;
export type GenderSettingsV0201PokemonUnownY = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_Y">;
export type GenderSettingsV0201PokemonUnownZ = GenderSettings<"SPAWN_V0201_POKEMON_UNOWN_Z">;
export type GenderSettingsV0202PokemonWobbuffet = GenderSettings<"SPAWN_V0202_POKEMON_WOBBUFFET">;
export type GenderSettingsV0202PokemonWobbuffetNormal = GenderSettings<"SPAWN_V0202_POKEMON_WOBBUFFET_NORMAL">;
export type GenderSettingsV0203PokemonGirafarig = GenderSettings<"SPAWN_V0203_POKEMON_GIRAFARIG">;
export type GenderSettingsV0203PokemonGirafarigNormal = GenderSettings<"SPAWN_V0203_POKEMON_GIRAFARIG_NORMAL">;
export type GenderSettingsV0204PokemonPineco = GenderSettings<"SPAWN_V0204_POKEMON_PINECO">;
export type GenderSettingsV0204PokemonPinecoNormal = GenderSettings<"SPAWN_V0204_POKEMON_PINECO_NORMAL">;
export type GenderSettingsV0205PokemonForretress = GenderSettings<"SPAWN_V0205_POKEMON_FORRETRESS">;
export type GenderSettingsV0205PokemonForretressNormal = GenderSettings<"SPAWN_V0205_POKEMON_FORRETRESS_NORMAL">;
export type GenderSettingsV0206PokemonDunsparce = GenderSettings<"SPAWN_V0206_POKEMON_DUNSPARCE">;
export type GenderSettingsV0206PokemonDunsparceNormal = GenderSettings<"SPAWN_V0206_POKEMON_DUNSPARCE_NORMAL">;
export type GenderSettingsV0207PokemonGligar = GenderSettings<"SPAWN_V0207_POKEMON_GLIGAR">;
export type GenderSettingsV0207PokemonGligarNormal = GenderSettings<"SPAWN_V0207_POKEMON_GLIGAR_NORMAL">;
export type GenderSettingsV0208PokemonSteelix = GenderSettings<"SPAWN_V0208_POKEMON_STEELIX">;
export type GenderSettingsV0208PokemonSteelixNormal = GenderSettings<"SPAWN_V0208_POKEMON_STEELIX_NORMAL">;
export type GenderSettingsV0209PokemonSnubbull = GenderSettings<"SPAWN_V0209_POKEMON_SNUBBULL">;
export type GenderSettingsV0209PokemonSnubbullNormal = GenderSettings<"SPAWN_V0209_POKEMON_SNUBBULL_NORMAL">;
export type GenderSettingsV0210PokemonGranbull = GenderSettings<"SPAWN_V0210_POKEMON_GRANBULL">;
export type GenderSettingsV0210PokemonGranbullNormal = GenderSettings<"SPAWN_V0210_POKEMON_GRANBULL_NORMAL">;
export type GenderSettingsV0211PokemonQwilfish = GenderSettings<"SPAWN_V0211_POKEMON_QWILFISH">;
export type GenderSettingsV0211PokemonQwilfishHisuian = GenderSettings<"SPAWN_V0211_POKEMON_QWILFISH_HISUIAN">;
export type GenderSettingsV0211PokemonQwilfishNormal = GenderSettings<"SPAWN_V0211_POKEMON_QWILFISH_NORMAL">;
export type GenderSettingsV0212PokemonScizor = GenderSettings<"SPAWN_V0212_POKEMON_SCIZOR">;
export type GenderSettingsV0212PokemonScizorNormal = GenderSettings<"SPAWN_V0212_POKEMON_SCIZOR_NORMAL">;
export type GenderSettingsV0213PokemonShuckle = GenderSettings<"SPAWN_V0213_POKEMON_SHUCKLE">;
export type GenderSettingsV0213PokemonShuckleNormal = GenderSettings<"SPAWN_V0213_POKEMON_SHUCKLE_NORMAL">;
export type GenderSettingsV0214PokemonHeracross = GenderSettings<"SPAWN_V0214_POKEMON_HERACROSS">;
export type GenderSettingsV0214PokemonHeracrossNormal = GenderSettings<"SPAWN_V0214_POKEMON_HERACROSS_NORMAL">;
export type GenderSettingsV0215PokemonSneasel = GenderSettings<"SPAWN_V0215_POKEMON_SNEASEL">;
export type GenderSettingsV0215PokemonSneaselHisuian = GenderSettings<"SPAWN_V0215_POKEMON_SNEASEL_HISUIAN">;
export type GenderSettingsV0215PokemonSneaselNormal = GenderSettings<"SPAWN_V0215_POKEMON_SNEASEL_NORMAL">;
export type GenderSettingsV0216PokemonTeddiursa = GenderSettings<"SPAWN_V0216_POKEMON_TEDDIURSA">;
export type GenderSettingsV0216PokemonTeddiursaNormal = GenderSettings<"SPAWN_V0216_POKEMON_TEDDIURSA_NORMAL">;
export type GenderSettingsV0217PokemonUrsaring = GenderSettings<"SPAWN_V0217_POKEMON_URSARING">;
export type GenderSettingsV0217PokemonUrsaringNormal = GenderSettings<"SPAWN_V0217_POKEMON_URSARING_NORMAL">;
export type GenderSettingsV0218PokemonSlugma = GenderSettings<"SPAWN_V0218_POKEMON_SLUGMA">;
export type GenderSettingsV0218PokemonSlugmaNormal = GenderSettings<"SPAWN_V0218_POKEMON_SLUGMA_NORMAL">;
export type GenderSettingsV0219PokemonMagcargo = GenderSettings<"SPAWN_V0219_POKEMON_MAGCARGO">;
export type GenderSettingsV0219PokemonMagcargoNormal = GenderSettings<"SPAWN_V0219_POKEMON_MAGCARGO_NORMAL">;
export type GenderSettingsV0220PokemonSwinub = GenderSettings<"SPAWN_V0220_POKEMON_SWINUB">;
export type GenderSettingsV0220PokemonSwinubNormal = GenderSettings<"SPAWN_V0220_POKEMON_SWINUB_NORMAL">;
export type GenderSettingsV0221PokemonPiloswine = GenderSettings<"SPAWN_V0221_POKEMON_PILOSWINE">;
export type GenderSettingsV0221PokemonPiloswineNormal = GenderSettings<"SPAWN_V0221_POKEMON_PILOSWINE_NORMAL">;
export type GenderSettingsV0222PokemonCorsola = GenderSettings<"SPAWN_V0222_POKEMON_CORSOLA">;
export type GenderSettingsV0222PokemonCorsolaGalarian = GenderSettings<"SPAWN_V0222_POKEMON_CORSOLA_GALARIAN">;
export type GenderSettingsV0222PokemonCorsolaNormal = GenderSettings<"SPAWN_V0222_POKEMON_CORSOLA_NORMAL">;
export type GenderSettingsV0222PokemonCorsolaSpring2026 = GenderSettings<"SPAWN_V0222_POKEMON_CORSOLA_SPRING_2026">;
export type GenderSettingsV0223PokemonRemoraid = GenderSettings<"SPAWN_V0223_POKEMON_REMORAID">;
export type GenderSettingsV0223PokemonRemoraidNormal = GenderSettings<"SPAWN_V0223_POKEMON_REMORAID_NORMAL">;
export type GenderSettingsV0224PokemonOctillery = GenderSettings<"SPAWN_V0224_POKEMON_OCTILLERY">;
export type GenderSettingsV0224PokemonOctilleryNormal = GenderSettings<"SPAWN_V0224_POKEMON_OCTILLERY_NORMAL">;
export type GenderSettingsV0225PokemonDelibird = GenderSettings<"SPAWN_V0225_POKEMON_DELIBIRD">;
export type GenderSettingsV0225PokemonDelibirdNormal = GenderSettings<"SPAWN_V0225_POKEMON_DELIBIRD_NORMAL">;
export type GenderSettingsV0225PokemonDelibirdWinter2020 = GenderSettings<"SPAWN_V0225_POKEMON_DELIBIRD_WINTER_2020">;
export type GenderSettingsV0226PokemonMantine = GenderSettings<"SPAWN_V0226_POKEMON_MANTINE">;
export type GenderSettingsV0226PokemonMantineNormal = GenderSettings<"SPAWN_V0226_POKEMON_MANTINE_NORMAL">;
export type GenderSettingsV0227PokemonSkarmory = GenderSettings<"SPAWN_V0227_POKEMON_SKARMORY">;
export type GenderSettingsV0227PokemonSkarmoryNormal = GenderSettings<"SPAWN_V0227_POKEMON_SKARMORY_NORMAL">;
export type GenderSettingsV0228PokemonHoundour = GenderSettings<"SPAWN_V0228_POKEMON_HOUNDOUR">;
export type GenderSettingsV0228PokemonHoundourNormal = GenderSettings<"SPAWN_V0228_POKEMON_HOUNDOUR_NORMAL">;
export type GenderSettingsV0229PokemonHoundoom = GenderSettings<"SPAWN_V0229_POKEMON_HOUNDOOM">;
export type GenderSettingsV0229PokemonHoundoomNormal = GenderSettings<"SPAWN_V0229_POKEMON_HOUNDOOM_NORMAL">;
export type GenderSettingsV0230PokemonKingdra = GenderSettings<"SPAWN_V0230_POKEMON_KINGDRA">;
export type GenderSettingsV0230PokemonKingdraNormal = GenderSettings<"SPAWN_V0230_POKEMON_KINGDRA_NORMAL">;
export type GenderSettingsV0231PokemonPhanpy = GenderSettings<"SPAWN_V0231_POKEMON_PHANPY">;
export type GenderSettingsV0231PokemonPhanpyNormal = GenderSettings<"SPAWN_V0231_POKEMON_PHANPY_NORMAL">;
export type GenderSettingsV0232PokemonDonphan = GenderSettings<"SPAWN_V0232_POKEMON_DONPHAN">;
export type GenderSettingsV0232PokemonDonphanNormal = GenderSettings<"SPAWN_V0232_POKEMON_DONPHAN_NORMAL">;
export type GenderSettingsV0233PokemonPorygon2 = GenderSettings<"SPAWN_V0233_POKEMON_PORYGON2">;
export type GenderSettingsV0233PokemonPorygon2Normal = GenderSettings<"SPAWN_V0233_POKEMON_PORYGON2_NORMAL">;
export type GenderSettingsV0234PokemonStantler = GenderSettings<"SPAWN_V0234_POKEMON_STANTLER">;
export type GenderSettingsV0234PokemonStantlerNormal = GenderSettings<"SPAWN_V0234_POKEMON_STANTLER_NORMAL">;
export type GenderSettingsV0235PokemonSmeargle = GenderSettings<"SPAWN_V0235_POKEMON_SMEARGLE">;
export type GenderSettingsV0235PokemonSmeargleNormal = GenderSettings<"SPAWN_V0235_POKEMON_SMEARGLE_NORMAL">;
export type GenderSettingsV0236PokemonTyrogue = GenderSettings<"SPAWN_V0236_POKEMON_TYROGUE">;
export type GenderSettingsV0236PokemonTyrogueNormal = GenderSettings<"SPAWN_V0236_POKEMON_TYROGUE_NORMAL">;
export type GenderSettingsV0237PokemonHitmontop = GenderSettings<"SPAWN_V0237_POKEMON_HITMONTOP">;
export type GenderSettingsV0237PokemonHitmontopNormal = GenderSettings<"SPAWN_V0237_POKEMON_HITMONTOP_NORMAL">;
export type GenderSettingsV0238PokemonSmoochum = GenderSettings<"SPAWN_V0238_POKEMON_SMOOCHUM">;
export type GenderSettingsV0238PokemonSmoochumNormal = GenderSettings<"SPAWN_V0238_POKEMON_SMOOCHUM_NORMAL">;
export type GenderSettingsV0239PokemonElekid = GenderSettings<"SPAWN_V0239_POKEMON_ELEKID">;
export type GenderSettingsV0239PokemonElekidNormal = GenderSettings<"SPAWN_V0239_POKEMON_ELEKID_NORMAL">;
export type GenderSettingsV0240PokemonMagby = GenderSettings<"SPAWN_V0240_POKEMON_MAGBY">;
export type GenderSettingsV0240PokemonMagbyNormal = GenderSettings<"SPAWN_V0240_POKEMON_MAGBY_NORMAL">;
export type GenderSettingsV0241PokemonMiltank = GenderSettings<"SPAWN_V0241_POKEMON_MILTANK">;
export type GenderSettingsV0241PokemonMiltankNormal = GenderSettings<"SPAWN_V0241_POKEMON_MILTANK_NORMAL">;
export type GenderSettingsV0242PokemonBlissey = GenderSettings<"SPAWN_V0242_POKEMON_BLISSEY">;
export type GenderSettingsV0242PokemonBlisseyNormal = GenderSettings<"SPAWN_V0242_POKEMON_BLISSEY_NORMAL">;
export type GenderSettingsV0243PokemonRaikou = GenderSettings<"SPAWN_V0243_POKEMON_RAIKOU">;
export type GenderSettingsV0243PokemonRaikouNormal = GenderSettings<"SPAWN_V0243_POKEMON_RAIKOU_NORMAL">;
export type GenderSettingsV0243PokemonRaikouS = GenderSettings<"SPAWN_V0243_POKEMON_RAIKOU_S">;
export type GenderSettingsV0244PokemonEntei = GenderSettings<"SPAWN_V0244_POKEMON_ENTEI">;
export type GenderSettingsV0244PokemonEnteiNormal = GenderSettings<"SPAWN_V0244_POKEMON_ENTEI_NORMAL">;
export type GenderSettingsV0244PokemonEnteiS = GenderSettings<"SPAWN_V0244_POKEMON_ENTEI_S">;
export type GenderSettingsV0245PokemonSuicune = GenderSettings<"SPAWN_V0245_POKEMON_SUICUNE">;
export type GenderSettingsV0245PokemonSuicuneNormal = GenderSettings<"SPAWN_V0245_POKEMON_SUICUNE_NORMAL">;
export type GenderSettingsV0245PokemonSuicuneS = GenderSettings<"SPAWN_V0245_POKEMON_SUICUNE_S">;
export type GenderSettingsV0246PokemonLarvitar = GenderSettings<"SPAWN_V0246_POKEMON_LARVITAR">;
export type GenderSettingsV0246PokemonLarvitarNormal = GenderSettings<"SPAWN_V0246_POKEMON_LARVITAR_NORMAL">;
export type GenderSettingsV0247PokemonPupitar = GenderSettings<"SPAWN_V0247_POKEMON_PUPITAR">;
export type GenderSettingsV0247PokemonPupitarNormal = GenderSettings<"SPAWN_V0247_POKEMON_PUPITAR_NORMAL">;
export type GenderSettingsV0248PokemonTyranitar = GenderSettings<"SPAWN_V0248_POKEMON_TYRANITAR">;
export type GenderSettingsV0248PokemonTyranitarNormal = GenderSettings<"SPAWN_V0248_POKEMON_TYRANITAR_NORMAL">;
export type GenderSettingsV0249PokemonLugia = GenderSettings<"SPAWN_V0249_POKEMON_LUGIA">;
export type GenderSettingsV0249PokemonLugiaNormal = GenderSettings<"SPAWN_V0249_POKEMON_LUGIA_NORMAL">;
export type GenderSettingsV0249PokemonLugiaS = GenderSettings<"SPAWN_V0249_POKEMON_LUGIA_S">;
export type GenderSettingsV0250PokemonHoOh = GenderSettings<"SPAWN_V0250_POKEMON_HO_OH">;
export type GenderSettingsV0250PokemonHoOhNormal = GenderSettings<"SPAWN_V0250_POKEMON_HO_OH_NORMAL">;
export type GenderSettingsV0250PokemonHoOhS = GenderSettings<"SPAWN_V0250_POKEMON_HO_OH_S">;
export type GenderSettingsV0251PokemonCelebi = GenderSettings<"SPAWN_V0251_POKEMON_CELEBI">;
export type GenderSettingsV0251PokemonCelebiNormal = GenderSettings<"SPAWN_V0251_POKEMON_CELEBI_NORMAL">;
export type GenderSettingsV0252PokemonTreecko = GenderSettings<"SPAWN_V0252_POKEMON_TREECKO">;
export type GenderSettingsV0252PokemonTreeckoNormal = GenderSettings<"SPAWN_V0252_POKEMON_TREECKO_NORMAL">;
export type GenderSettingsV0253PokemonGrovyle = GenderSettings<"SPAWN_V0253_POKEMON_GROVYLE">;
export type GenderSettingsV0253PokemonGrovyleNormal = GenderSettings<"SPAWN_V0253_POKEMON_GROVYLE_NORMAL">;
export type GenderSettingsV0254PokemonSceptile = GenderSettings<"SPAWN_V0254_POKEMON_SCEPTILE">;
export type GenderSettingsV0254PokemonSceptileNormal = GenderSettings<"SPAWN_V0254_POKEMON_SCEPTILE_NORMAL">;
export type GenderSettingsV0255PokemonTorchic = GenderSettings<"SPAWN_V0255_POKEMON_TORCHIC">;
export type GenderSettingsV0255PokemonTorchicNormal = GenderSettings<"SPAWN_V0255_POKEMON_TORCHIC_NORMAL">;
export type GenderSettingsV0256PokemonCombusken = GenderSettings<"SPAWN_V0256_POKEMON_COMBUSKEN">;
export type GenderSettingsV0256PokemonCombuskenNormal = GenderSettings<"SPAWN_V0256_POKEMON_COMBUSKEN_NORMAL">;
export type GenderSettingsV0257PokemonBlaziken = GenderSettings<"SPAWN_V0257_POKEMON_BLAZIKEN">;
export type GenderSettingsV0257PokemonBlazikenNormal = GenderSettings<"SPAWN_V0257_POKEMON_BLAZIKEN_NORMAL">;
export type GenderSettingsV0258PokemonMudkip = GenderSettings<"SPAWN_V0258_POKEMON_MUDKIP">;
export type GenderSettingsV0258PokemonMudkipNormal = GenderSettings<"SPAWN_V0258_POKEMON_MUDKIP_NORMAL">;
export type GenderSettingsV0259PokemonMarshtomp = GenderSettings<"SPAWN_V0259_POKEMON_MARSHTOMP">;
export type GenderSettingsV0259PokemonMarshtompNormal = GenderSettings<"SPAWN_V0259_POKEMON_MARSHTOMP_NORMAL">;
export type GenderSettingsV0260PokemonSwampert = GenderSettings<"SPAWN_V0260_POKEMON_SWAMPERT">;
export type GenderSettingsV0260PokemonSwampertNormal = GenderSettings<"SPAWN_V0260_POKEMON_SWAMPERT_NORMAL">;
export type GenderSettingsV0261PokemonPoochyena = GenderSettings<"SPAWN_V0261_POKEMON_POOCHYENA">;
export type GenderSettingsV0261PokemonPoochyenaNormal = GenderSettings<"SPAWN_V0261_POKEMON_POOCHYENA_NORMAL">;
export type GenderSettingsV0262PokemonMightyena = GenderSettings<"SPAWN_V0262_POKEMON_MIGHTYENA">;
export type GenderSettingsV0262PokemonMightyenaNormal = GenderSettings<"SPAWN_V0262_POKEMON_MIGHTYENA_NORMAL">;
export type GenderSettingsV0263PokemonZigzagoon = GenderSettings<"SPAWN_V0263_POKEMON_ZIGZAGOON">;
export type GenderSettingsV0263PokemonZigzagoonGalarian = GenderSettings<"SPAWN_V0263_POKEMON_ZIGZAGOON_GALARIAN">;
export type GenderSettingsV0263PokemonZigzagoonNormal = GenderSettings<"SPAWN_V0263_POKEMON_ZIGZAGOON_NORMAL">;
export type GenderSettingsV0264PokemonLinoone = GenderSettings<"SPAWN_V0264_POKEMON_LINOONE">;
export type GenderSettingsV0264PokemonLinooneGalarian = GenderSettings<"SPAWN_V0264_POKEMON_LINOONE_GALARIAN">;
export type GenderSettingsV0264PokemonLinooneNormal = GenderSettings<"SPAWN_V0264_POKEMON_LINOONE_NORMAL">;
export type GenderSettingsV0265PokemonWurmple = GenderSettings<"SPAWN_V0265_POKEMON_WURMPLE">;
export type GenderSettingsV0265PokemonWurmpleNormal = GenderSettings<"SPAWN_V0265_POKEMON_WURMPLE_NORMAL">;
export type GenderSettingsV0266PokemonSilcoon = GenderSettings<"SPAWN_V0266_POKEMON_SILCOON">;
export type GenderSettingsV0266PokemonSilcoonNormal = GenderSettings<"SPAWN_V0266_POKEMON_SILCOON_NORMAL">;
export type GenderSettingsV0267PokemonBeautifly = GenderSettings<"SPAWN_V0267_POKEMON_BEAUTIFLY">;
export type GenderSettingsV0267PokemonBeautiflyNormal = GenderSettings<"SPAWN_V0267_POKEMON_BEAUTIFLY_NORMAL">;
export type GenderSettingsV0268PokemonCascoon = GenderSettings<"SPAWN_V0268_POKEMON_CASCOON">;
export type GenderSettingsV0268PokemonCascoonNormal = GenderSettings<"SPAWN_V0268_POKEMON_CASCOON_NORMAL">;
export type GenderSettingsV0269PokemonDustox = GenderSettings<"SPAWN_V0269_POKEMON_DUSTOX">;
export type GenderSettingsV0269PokemonDustoxNormal = GenderSettings<"SPAWN_V0269_POKEMON_DUSTOX_NORMAL">;
export type GenderSettingsV0270PokemonLotad = GenderSettings<"SPAWN_V0270_POKEMON_LOTAD">;
export type GenderSettingsV0270PokemonLotadNormal = GenderSettings<"SPAWN_V0270_POKEMON_LOTAD_NORMAL">;
export type GenderSettingsV0271PokemonLombre = GenderSettings<"SPAWN_V0271_POKEMON_LOMBRE">;
export type GenderSettingsV0271PokemonLombreNormal = GenderSettings<"SPAWN_V0271_POKEMON_LOMBRE_NORMAL">;
export type GenderSettingsV0272PokemonLudicolo = GenderSettings<"SPAWN_V0272_POKEMON_LUDICOLO">;
export type GenderSettingsV0272PokemonLudicoloNormal = GenderSettings<"SPAWN_V0272_POKEMON_LUDICOLO_NORMAL">;
export type GenderSettingsV0273PokemonSeedot = GenderSettings<"SPAWN_V0273_POKEMON_SEEDOT">;
export type GenderSettingsV0273PokemonSeedotNormal = GenderSettings<"SPAWN_V0273_POKEMON_SEEDOT_NORMAL">;
export type GenderSettingsV0274PokemonNuzleaf = GenderSettings<"SPAWN_V0274_POKEMON_NUZLEAF">;
export type GenderSettingsV0274PokemonNuzleafNormal = GenderSettings<"SPAWN_V0274_POKEMON_NUZLEAF_NORMAL">;
export type GenderSettingsV0275PokemonShiftry = GenderSettings<"SPAWN_V0275_POKEMON_SHIFTRY">;
export type GenderSettingsV0275PokemonShiftryNormal = GenderSettings<"SPAWN_V0275_POKEMON_SHIFTRY_NORMAL">;
export type GenderSettingsV0276PokemonTaillow = GenderSettings<"SPAWN_V0276_POKEMON_TAILLOW">;
export type GenderSettingsV0276PokemonTaillowNormal = GenderSettings<"SPAWN_V0276_POKEMON_TAILLOW_NORMAL">;
export type GenderSettingsV0277PokemonSwellow = GenderSettings<"SPAWN_V0277_POKEMON_SWELLOW">;
export type GenderSettingsV0277PokemonSwellowNormal = GenderSettings<"SPAWN_V0277_POKEMON_SWELLOW_NORMAL">;
export type GenderSettingsV0278PokemonWingull = GenderSettings<"SPAWN_V0278_POKEMON_WINGULL">;
export type GenderSettingsV0278PokemonWingullNormal = GenderSettings<"SPAWN_V0278_POKEMON_WINGULL_NORMAL">;
export type GenderSettingsV0279PokemonPelipper = GenderSettings<"SPAWN_V0279_POKEMON_PELIPPER">;
export type GenderSettingsV0279PokemonPelipperNormal = GenderSettings<"SPAWN_V0279_POKEMON_PELIPPER_NORMAL">;
export type GenderSettingsV0280PokemonRalts = GenderSettings<"SPAWN_V0280_POKEMON_RALTS">;
export type GenderSettingsV0280PokemonRaltsNormal = GenderSettings<"SPAWN_V0280_POKEMON_RALTS_NORMAL">;
export type GenderSettingsV0281PokemonKirlia = GenderSettings<"SPAWN_V0281_POKEMON_KIRLIA">;
export type GenderSettingsV0281PokemonKirliaNormal = GenderSettings<"SPAWN_V0281_POKEMON_KIRLIA_NORMAL">;
export type GenderSettingsV0282PokemonGardevoir = GenderSettings<"SPAWN_V0282_POKEMON_GARDEVOIR">;
export type GenderSettingsV0282PokemonGardevoirNormal = GenderSettings<"SPAWN_V0282_POKEMON_GARDEVOIR_NORMAL">;
export type GenderSettingsV0283PokemonSurskit = GenderSettings<"SPAWN_V0283_POKEMON_SURSKIT">;
export type GenderSettingsV0283PokemonSurskitNormal = GenderSettings<"SPAWN_V0283_POKEMON_SURSKIT_NORMAL">;
export type GenderSettingsV0284PokemonMasquerain = GenderSettings<"SPAWN_V0284_POKEMON_MASQUERAIN">;
export type GenderSettingsV0284PokemonMasquerainNormal = GenderSettings<"SPAWN_V0284_POKEMON_MASQUERAIN_NORMAL">;
export type GenderSettingsV0285PokemonShroomish = GenderSettings<"SPAWN_V0285_POKEMON_SHROOMISH">;
export type GenderSettingsV0285PokemonShroomishNormal = GenderSettings<"SPAWN_V0285_POKEMON_SHROOMISH_NORMAL">;
export type GenderSettingsV0286PokemonBreloom = GenderSettings<"SPAWN_V0286_POKEMON_BRELOOM">;
export type GenderSettingsV0286PokemonBreloomNormal = GenderSettings<"SPAWN_V0286_POKEMON_BRELOOM_NORMAL">;
export type GenderSettingsV0287PokemonSlakoth = GenderSettings<"SPAWN_V0287_POKEMON_SLAKOTH">;
export type GenderSettingsV0287PokemonSlakothNormal = GenderSettings<"SPAWN_V0287_POKEMON_SLAKOTH_NORMAL">;
export type GenderSettingsV0288PokemonVigoroth = GenderSettings<"SPAWN_V0288_POKEMON_VIGOROTH">;
export type GenderSettingsV0288PokemonVigorothNormal = GenderSettings<"SPAWN_V0288_POKEMON_VIGOROTH_NORMAL">;
export type GenderSettingsV0289PokemonSlaking = GenderSettings<"SPAWN_V0289_POKEMON_SLAKING">;
export type GenderSettingsV0289PokemonSlakingNormal = GenderSettings<"SPAWN_V0289_POKEMON_SLAKING_NORMAL">;
export type GenderSettingsV0290PokemonNincada = GenderSettings<"SPAWN_V0290_POKEMON_NINCADA">;
export type GenderSettingsV0290PokemonNincadaNormal = GenderSettings<"SPAWN_V0290_POKEMON_NINCADA_NORMAL">;
export type GenderSettingsV0291PokemonNinjask = GenderSettings<"SPAWN_V0291_POKEMON_NINJASK">;
export type GenderSettingsV0291PokemonNinjaskNormal = GenderSettings<"SPAWN_V0291_POKEMON_NINJASK_NORMAL">;
export type GenderSettingsV0292PokemonShedinja = GenderSettings<"SPAWN_V0292_POKEMON_SHEDINJA">;
export type GenderSettingsV0292PokemonShedinjaNormal = GenderSettings<"SPAWN_V0292_POKEMON_SHEDINJA_NORMAL">;
export type GenderSettingsV0293PokemonWhismur = GenderSettings<"SPAWN_V0293_POKEMON_WHISMUR">;
export type GenderSettingsV0293PokemonWhismurNormal = GenderSettings<"SPAWN_V0293_POKEMON_WHISMUR_NORMAL">;
export type GenderSettingsV0294PokemonLoudred = GenderSettings<"SPAWN_V0294_POKEMON_LOUDRED">;
export type GenderSettingsV0294PokemonLoudredNormal = GenderSettings<"SPAWN_V0294_POKEMON_LOUDRED_NORMAL">;
export type GenderSettingsV0295PokemonExploud = GenderSettings<"SPAWN_V0295_POKEMON_EXPLOUD">;
export type GenderSettingsV0295PokemonExploudNormal = GenderSettings<"SPAWN_V0295_POKEMON_EXPLOUD_NORMAL">;
export type GenderSettingsV0296PokemonMakuhita = GenderSettings<"SPAWN_V0296_POKEMON_MAKUHITA">;
export type GenderSettingsV0296PokemonMakuhitaNormal = GenderSettings<"SPAWN_V0296_POKEMON_MAKUHITA_NORMAL">;
export type GenderSettingsV0297PokemonHariyama = GenderSettings<"SPAWN_V0297_POKEMON_HARIYAMA">;
export type GenderSettingsV0297PokemonHariyamaNormal = GenderSettings<"SPAWN_V0297_POKEMON_HARIYAMA_NORMAL">;
export type GenderSettingsV0298PokemonAzurill = GenderSettings<"SPAWN_V0298_POKEMON_AZURILL">;
export type GenderSettingsV0298PokemonAzurillNormal = GenderSettings<"SPAWN_V0298_POKEMON_AZURILL_NORMAL">;
export type GenderSettingsV0299PokemonNosepass = GenderSettings<"SPAWN_V0299_POKEMON_NOSEPASS">;
export type GenderSettingsV0299PokemonNosepassNormal = GenderSettings<"SPAWN_V0299_POKEMON_NOSEPASS_NORMAL">;
export type GenderSettingsV0300PokemonSkitty = GenderSettings<"SPAWN_V0300_POKEMON_SKITTY">;
export type GenderSettingsV0300PokemonSkittyNormal = GenderSettings<"SPAWN_V0300_POKEMON_SKITTY_NORMAL">;
export type GenderSettingsV0301PokemonDelcatty = GenderSettings<"SPAWN_V0301_POKEMON_DELCATTY">;
export type GenderSettingsV0301PokemonDelcattyNormal = GenderSettings<"SPAWN_V0301_POKEMON_DELCATTY_NORMAL">;
export type GenderSettingsV0302PokemonSableye = GenderSettings<"SPAWN_V0302_POKEMON_SABLEYE">;
export type GenderSettingsV0302PokemonSableyeCostume2020 = GenderSettings<"SPAWN_V0302_POKEMON_SABLEYE_COSTUME_2020">;
export type GenderSettingsV0302PokemonSableyeNormal = GenderSettings<"SPAWN_V0302_POKEMON_SABLEYE_NORMAL">;
export type GenderSettingsV0303PokemonMawile = GenderSettings<"SPAWN_V0303_POKEMON_MAWILE">;
export type GenderSettingsV0303PokemonMawileNormal = GenderSettings<"SPAWN_V0303_POKEMON_MAWILE_NORMAL">;
export type GenderSettingsV0304PokemonAron = GenderSettings<"SPAWN_V0304_POKEMON_ARON">;
export type GenderSettingsV0304PokemonAronNormal = GenderSettings<"SPAWN_V0304_POKEMON_ARON_NORMAL">;
export type GenderSettingsV0305PokemonLairon = GenderSettings<"SPAWN_V0305_POKEMON_LAIRON">;
export type GenderSettingsV0305PokemonLaironNormal = GenderSettings<"SPAWN_V0305_POKEMON_LAIRON_NORMAL">;
export type GenderSettingsV0306PokemonAggron = GenderSettings<"SPAWN_V0306_POKEMON_AGGRON">;
export type GenderSettingsV0306PokemonAggronNormal = GenderSettings<"SPAWN_V0306_POKEMON_AGGRON_NORMAL">;
export type GenderSettingsV0307PokemonMeditite = GenderSettings<"SPAWN_V0307_POKEMON_MEDITITE">;
export type GenderSettingsV0307PokemonMedititeNormal = GenderSettings<"SPAWN_V0307_POKEMON_MEDITITE_NORMAL">;
export type GenderSettingsV0308PokemonMedicham = GenderSettings<"SPAWN_V0308_POKEMON_MEDICHAM">;
export type GenderSettingsV0308PokemonMedichamNormal = GenderSettings<"SPAWN_V0308_POKEMON_MEDICHAM_NORMAL">;
export type GenderSettingsV0309PokemonElectrike = GenderSettings<"SPAWN_V0309_POKEMON_ELECTRIKE">;
export type GenderSettingsV0309PokemonElectrikeNormal = GenderSettings<"SPAWN_V0309_POKEMON_ELECTRIKE_NORMAL">;
export type GenderSettingsV0310PokemonManectric = GenderSettings<"SPAWN_V0310_POKEMON_MANECTRIC">;
export type GenderSettingsV0310PokemonManectricNormal = GenderSettings<"SPAWN_V0310_POKEMON_MANECTRIC_NORMAL">;
export type GenderSettingsV0311PokemonPlusle = GenderSettings<"SPAWN_V0311_POKEMON_PLUSLE">;
export type GenderSettingsV0311PokemonPlusleNormal = GenderSettings<"SPAWN_V0311_POKEMON_PLUSLE_NORMAL">;
export type GenderSettingsV0312PokemonMinun = GenderSettings<"SPAWN_V0312_POKEMON_MINUN">;
export type GenderSettingsV0312PokemonMinunNormal = GenderSettings<"SPAWN_V0312_POKEMON_MINUN_NORMAL">;
export type GenderSettingsV0313PokemonVolbeat = GenderSettings<"SPAWN_V0313_POKEMON_VOLBEAT">;
export type GenderSettingsV0313PokemonVolbeatNormal = GenderSettings<"SPAWN_V0313_POKEMON_VOLBEAT_NORMAL">;
export type GenderSettingsV0314PokemonIllumise = GenderSettings<"SPAWN_V0314_POKEMON_ILLUMISE">;
export type GenderSettingsV0314PokemonIllumiseNormal = GenderSettings<"SPAWN_V0314_POKEMON_ILLUMISE_NORMAL">;
export type GenderSettingsV0315PokemonRoselia = GenderSettings<"SPAWN_V0315_POKEMON_ROSELIA">;
export type GenderSettingsV0315PokemonRoseliaNormal = GenderSettings<"SPAWN_V0315_POKEMON_ROSELIA_NORMAL">;
export type GenderSettingsV0316PokemonGulpin = GenderSettings<"SPAWN_V0316_POKEMON_GULPIN">;
export type GenderSettingsV0316PokemonGulpinNormal = GenderSettings<"SPAWN_V0316_POKEMON_GULPIN_NORMAL">;
export type GenderSettingsV0317PokemonSwalot = GenderSettings<"SPAWN_V0317_POKEMON_SWALOT">;
export type GenderSettingsV0317PokemonSwalotNormal = GenderSettings<"SPAWN_V0317_POKEMON_SWALOT_NORMAL">;
export type GenderSettingsV0318PokemonCarvanha = GenderSettings<"SPAWN_V0318_POKEMON_CARVANHA">;
export type GenderSettingsV0318PokemonCarvanhaNormal = GenderSettings<"SPAWN_V0318_POKEMON_CARVANHA_NORMAL">;
export type GenderSettingsV0319PokemonSharpedo = GenderSettings<"SPAWN_V0319_POKEMON_SHARPEDO">;
export type GenderSettingsV0319PokemonSharpedoNormal = GenderSettings<"SPAWN_V0319_POKEMON_SHARPEDO_NORMAL">;
export type GenderSettingsV0320PokemonWailmer = GenderSettings<"SPAWN_V0320_POKEMON_WAILMER">;
export type GenderSettingsV0320PokemonWailmerNormal = GenderSettings<"SPAWN_V0320_POKEMON_WAILMER_NORMAL">;
export type GenderSettingsV0321PokemonWailord = GenderSettings<"SPAWN_V0321_POKEMON_WAILORD">;
export type GenderSettingsV0321PokemonWailordNormal = GenderSettings<"SPAWN_V0321_POKEMON_WAILORD_NORMAL">;
export type GenderSettingsV0322PokemonNumel = GenderSettings<"SPAWN_V0322_POKEMON_NUMEL">;
export type GenderSettingsV0322PokemonNumelNormal = GenderSettings<"SPAWN_V0322_POKEMON_NUMEL_NORMAL">;
export type GenderSettingsV0323PokemonCamerupt = GenderSettings<"SPAWN_V0323_POKEMON_CAMERUPT">;
export type GenderSettingsV0323PokemonCameruptNormal = GenderSettings<"SPAWN_V0323_POKEMON_CAMERUPT_NORMAL">;
export type GenderSettingsV0324PokemonTorkoal = GenderSettings<"SPAWN_V0324_POKEMON_TORKOAL">;
export type GenderSettingsV0324PokemonTorkoalNormal = GenderSettings<"SPAWN_V0324_POKEMON_TORKOAL_NORMAL">;
export type GenderSettingsV0325PokemonSpoink = GenderSettings<"SPAWN_V0325_POKEMON_SPOINK">;
export type GenderSettingsV0325PokemonSpoinkNormal = GenderSettings<"SPAWN_V0325_POKEMON_SPOINK_NORMAL">;
export type GenderSettingsV0326PokemonGrumpig = GenderSettings<"SPAWN_V0326_POKEMON_GRUMPIG">;
export type GenderSettingsV0326PokemonGrumpigNormal = GenderSettings<"SPAWN_V0326_POKEMON_GRUMPIG_NORMAL">;
export type GenderSettingsV0327PokemonSpinda = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA">;
export type GenderSettingsV0327PokemonSpinda00 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_00">;
export type GenderSettingsV0327PokemonSpinda01 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_01">;
export type GenderSettingsV0327PokemonSpinda02 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_02">;
export type GenderSettingsV0327PokemonSpinda03 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_03">;
export type GenderSettingsV0327PokemonSpinda04 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_04">;
export type GenderSettingsV0327PokemonSpinda05 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_05">;
export type GenderSettingsV0327PokemonSpinda06 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_06">;
export type GenderSettingsV0327PokemonSpinda07 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_07">;
export type GenderSettingsV0327PokemonSpinda08 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_08">;
export type GenderSettingsV0327PokemonSpinda09 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_09">;
export type GenderSettingsV0327PokemonSpinda10 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_10">;
export type GenderSettingsV0327PokemonSpinda11 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_11">;
export type GenderSettingsV0327PokemonSpinda12 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_12">;
export type GenderSettingsV0327PokemonSpinda13 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_13">;
export type GenderSettingsV0327PokemonSpinda14 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_14">;
export type GenderSettingsV0327PokemonSpinda15 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_15">;
export type GenderSettingsV0327PokemonSpinda16 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_16">;
export type GenderSettingsV0327PokemonSpinda17 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_17">;
export type GenderSettingsV0327PokemonSpinda18 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_18">;
export type GenderSettingsV0327PokemonSpinda19 = GenderSettings<"SPAWN_V0327_POKEMON_SPINDA_19">;
export type GenderSettingsV0328PokemonTrapinch = GenderSettings<"SPAWN_V0328_POKEMON_TRAPINCH">;
export type GenderSettingsV0328PokemonTrapinchNormal = GenderSettings<"SPAWN_V0328_POKEMON_TRAPINCH_NORMAL">;
export type GenderSettingsV0329PokemonVibrava = GenderSettings<"SPAWN_V0329_POKEMON_VIBRAVA">;
export type GenderSettingsV0329PokemonVibravaNormal = GenderSettings<"SPAWN_V0329_POKEMON_VIBRAVA_NORMAL">;
export type GenderSettingsV0330PokemonFlygon = GenderSettings<"SPAWN_V0330_POKEMON_FLYGON">;
export type GenderSettingsV0330PokemonFlygonNormal = GenderSettings<"SPAWN_V0330_POKEMON_FLYGON_NORMAL">;
export type GenderSettingsV0331PokemonCacnea = GenderSettings<"SPAWN_V0331_POKEMON_CACNEA">;
export type GenderSettingsV0331PokemonCacneaNormal = GenderSettings<"SPAWN_V0331_POKEMON_CACNEA_NORMAL">;
export type GenderSettingsV0332PokemonCacturne = GenderSettings<"SPAWN_V0332_POKEMON_CACTURNE">;
export type GenderSettingsV0332PokemonCacturneNormal = GenderSettings<"SPAWN_V0332_POKEMON_CACTURNE_NORMAL">;
export type GenderSettingsV0333PokemonSwablu = GenderSettings<"SPAWN_V0333_POKEMON_SWABLU">;
export type GenderSettingsV0333PokemonSwabluNormal = GenderSettings<"SPAWN_V0333_POKEMON_SWABLU_NORMAL">;
export type GenderSettingsV0334PokemonAltaria = GenderSettings<"SPAWN_V0334_POKEMON_ALTARIA">;
export type GenderSettingsV0334PokemonAltariaNormal = GenderSettings<"SPAWN_V0334_POKEMON_ALTARIA_NORMAL">;
export type GenderSettingsV0335PokemonZangoose = GenderSettings<"SPAWN_V0335_POKEMON_ZANGOOSE">;
export type GenderSettingsV0335PokemonZangooseNormal = GenderSettings<"SPAWN_V0335_POKEMON_ZANGOOSE_NORMAL">;
export type GenderSettingsV0336PokemonSeviper = GenderSettings<"SPAWN_V0336_POKEMON_SEVIPER">;
export type GenderSettingsV0336PokemonSeviperNormal = GenderSettings<"SPAWN_V0336_POKEMON_SEVIPER_NORMAL">;
export type GenderSettingsV0337PokemonLunatone = GenderSettings<"SPAWN_V0337_POKEMON_LUNATONE">;
export type GenderSettingsV0337PokemonLunatoneNormal = GenderSettings<"SPAWN_V0337_POKEMON_LUNATONE_NORMAL">;
export type GenderSettingsV0338PokemonSolrock = GenderSettings<"SPAWN_V0338_POKEMON_SOLROCK">;
export type GenderSettingsV0338PokemonSolrockNormal = GenderSettings<"SPAWN_V0338_POKEMON_SOLROCK_NORMAL">;
export type GenderSettingsV0339PokemonBarboach = GenderSettings<"SPAWN_V0339_POKEMON_BARBOACH">;
export type GenderSettingsV0339PokemonBarboachNormal = GenderSettings<"SPAWN_V0339_POKEMON_BARBOACH_NORMAL">;
export type GenderSettingsV0340PokemonWhiscash = GenderSettings<"SPAWN_V0340_POKEMON_WHISCASH">;
export type GenderSettingsV0340PokemonWhiscashNormal = GenderSettings<"SPAWN_V0340_POKEMON_WHISCASH_NORMAL">;
export type GenderSettingsV0341PokemonCorphish = GenderSettings<"SPAWN_V0341_POKEMON_CORPHISH">;
export type GenderSettingsV0341PokemonCorphishNormal = GenderSettings<"SPAWN_V0341_POKEMON_CORPHISH_NORMAL">;
export type GenderSettingsV0342PokemonCrawdaunt = GenderSettings<"SPAWN_V0342_POKEMON_CRAWDAUNT">;
export type GenderSettingsV0342PokemonCrawdauntNormal = GenderSettings<"SPAWN_V0342_POKEMON_CRAWDAUNT_NORMAL">;
export type GenderSettingsV0343PokemonBaltoy = GenderSettings<"SPAWN_V0343_POKEMON_BALTOY">;
export type GenderSettingsV0343PokemonBaltoyNormal = GenderSettings<"SPAWN_V0343_POKEMON_BALTOY_NORMAL">;
export type GenderSettingsV0344PokemonClaydol = GenderSettings<"SPAWN_V0344_POKEMON_CLAYDOL">;
export type GenderSettingsV0344PokemonClaydolNormal = GenderSettings<"SPAWN_V0344_POKEMON_CLAYDOL_NORMAL">;
export type GenderSettingsV0345PokemonLileep = GenderSettings<"SPAWN_V0345_POKEMON_LILEEP">;
export type GenderSettingsV0345PokemonLileepNormal = GenderSettings<"SPAWN_V0345_POKEMON_LILEEP_NORMAL">;
export type GenderSettingsV0346PokemonCradily = GenderSettings<"SPAWN_V0346_POKEMON_CRADILY">;
export type GenderSettingsV0346PokemonCradilyNormal = GenderSettings<"SPAWN_V0346_POKEMON_CRADILY_NORMAL">;
export type GenderSettingsV0347PokemonAnorith = GenderSettings<"SPAWN_V0347_POKEMON_ANORITH">;
export type GenderSettingsV0347PokemonAnorithNormal = GenderSettings<"SPAWN_V0347_POKEMON_ANORITH_NORMAL">;
export type GenderSettingsV0348PokemonArmaldo = GenderSettings<"SPAWN_V0348_POKEMON_ARMALDO">;
export type GenderSettingsV0348PokemonArmaldoNormal = GenderSettings<"SPAWN_V0348_POKEMON_ARMALDO_NORMAL">;
export type GenderSettingsV0349PokemonFeebas = GenderSettings<"SPAWN_V0349_POKEMON_FEEBAS">;
export type GenderSettingsV0349PokemonFeebasNormal = GenderSettings<"SPAWN_V0349_POKEMON_FEEBAS_NORMAL">;
export type GenderSettingsV0350PokemonMilotic = GenderSettings<"SPAWN_V0350_POKEMON_MILOTIC">;
export type GenderSettingsV0350PokemonMiloticNormal = GenderSettings<"SPAWN_V0350_POKEMON_MILOTIC_NORMAL">;
export type GenderSettingsV0351PokemonCastform = GenderSettings<"SPAWN_V0351_POKEMON_CASTFORM">;
export type GenderSettingsV0351PokemonCastformNormal = GenderSettings<"SPAWN_V0351_POKEMON_CASTFORM_NORMAL">;
export type GenderSettingsV0351PokemonCastformRainy = GenderSettings<"SPAWN_V0351_POKEMON_CASTFORM_RAINY">;
export type GenderSettingsV0351PokemonCastformSnowy = GenderSettings<"SPAWN_V0351_POKEMON_CASTFORM_SNOWY">;
export type GenderSettingsV0351PokemonCastformSunny = GenderSettings<"SPAWN_V0351_POKEMON_CASTFORM_SUNNY">;
export type GenderSettingsV0352PokemonKecleon = GenderSettings<"SPAWN_V0352_POKEMON_KECLEON">;
export type GenderSettingsV0352PokemonKecleonNormal = GenderSettings<"SPAWN_V0352_POKEMON_KECLEON_NORMAL">;
export type GenderSettingsV0353PokemonShuppet = GenderSettings<"SPAWN_V0353_POKEMON_SHUPPET">;
export type GenderSettingsV0353PokemonShuppetNormal = GenderSettings<"SPAWN_V0353_POKEMON_SHUPPET_NORMAL">;
export type GenderSettingsV0354PokemonBanette = GenderSettings<"SPAWN_V0354_POKEMON_BANETTE">;
export type GenderSettingsV0354PokemonBanetteNormal = GenderSettings<"SPAWN_V0354_POKEMON_BANETTE_NORMAL">;
export type GenderSettingsV0355PokemonDuskull = GenderSettings<"SPAWN_V0355_POKEMON_DUSKULL">;
export type GenderSettingsV0355PokemonDuskullNormal = GenderSettings<"SPAWN_V0355_POKEMON_DUSKULL_NORMAL">;
export type GenderSettingsV0356PokemonDusclops = GenderSettings<"SPAWN_V0356_POKEMON_DUSCLOPS">;
export type GenderSettingsV0356PokemonDusclopsNormal = GenderSettings<"SPAWN_V0356_POKEMON_DUSCLOPS_NORMAL">;
export type GenderSettingsV0357PokemonTropius = GenderSettings<"SPAWN_V0357_POKEMON_TROPIUS">;
export type GenderSettingsV0357PokemonTropiusNormal = GenderSettings<"SPAWN_V0357_POKEMON_TROPIUS_NORMAL">;
export type GenderSettingsV0358PokemonChimecho = GenderSettings<"SPAWN_V0358_POKEMON_CHIMECHO">;
export type GenderSettingsV0358PokemonChimechoNormal = GenderSettings<"SPAWN_V0358_POKEMON_CHIMECHO_NORMAL">;
export type GenderSettingsV0359PokemonAbsol = GenderSettings<"SPAWN_V0359_POKEMON_ABSOL">;
export type GenderSettingsV0359PokemonAbsolNormal = GenderSettings<"SPAWN_V0359_POKEMON_ABSOL_NORMAL">;
export type GenderSettingsV0360PokemonWynaut = GenderSettings<"SPAWN_V0360_POKEMON_WYNAUT">;
export type GenderSettingsV0360PokemonWynautNormal = GenderSettings<"SPAWN_V0360_POKEMON_WYNAUT_NORMAL">;
export type GenderSettingsV0361PokemonSnorunt = GenderSettings<"SPAWN_V0361_POKEMON_SNORUNT">;
export type GenderSettingsV0361PokemonSnoruntNormal = GenderSettings<"SPAWN_V0361_POKEMON_SNORUNT_NORMAL">;
export type GenderSettingsV0362PokemonGlalie = GenderSettings<"SPAWN_V0362_POKEMON_GLALIE">;
export type GenderSettingsV0362PokemonGlalieNormal = GenderSettings<"SPAWN_V0362_POKEMON_GLALIE_NORMAL">;
export type GenderSettingsV0363PokemonSpheal = GenderSettings<"SPAWN_V0363_POKEMON_SPHEAL">;
export type GenderSettingsV0363PokemonSphealNormal = GenderSettings<"SPAWN_V0363_POKEMON_SPHEAL_NORMAL">;
export type GenderSettingsV0364PokemonSealeo = GenderSettings<"SPAWN_V0364_POKEMON_SEALEO">;
export type GenderSettingsV0364PokemonSealeoNormal = GenderSettings<"SPAWN_V0364_POKEMON_SEALEO_NORMAL">;
export type GenderSettingsV0365PokemonWalrein = GenderSettings<"SPAWN_V0365_POKEMON_WALREIN">;
export type GenderSettingsV0365PokemonWalreinNormal = GenderSettings<"SPAWN_V0365_POKEMON_WALREIN_NORMAL">;
export type GenderSettingsV0366PokemonClamperl = GenderSettings<"SPAWN_V0366_POKEMON_CLAMPERL">;
export type GenderSettingsV0366PokemonClamperlNormal = GenderSettings<"SPAWN_V0366_POKEMON_CLAMPERL_NORMAL">;
export type GenderSettingsV0367PokemonHuntail = GenderSettings<"SPAWN_V0367_POKEMON_HUNTAIL">;
export type GenderSettingsV0367PokemonHuntailNormal = GenderSettings<"SPAWN_V0367_POKEMON_HUNTAIL_NORMAL">;
export type GenderSettingsV0368PokemonGorebyss = GenderSettings<"SPAWN_V0368_POKEMON_GOREBYSS">;
export type GenderSettingsV0368PokemonGorebyssNormal = GenderSettings<"SPAWN_V0368_POKEMON_GOREBYSS_NORMAL">;
export type GenderSettingsV0369PokemonRelicanth = GenderSettings<"SPAWN_V0369_POKEMON_RELICANTH">;
export type GenderSettingsV0369PokemonRelicanthNormal = GenderSettings<"SPAWN_V0369_POKEMON_RELICANTH_NORMAL">;
export type GenderSettingsV0370PokemonLuvdisc = GenderSettings<"SPAWN_V0370_POKEMON_LUVDISC">;
export type GenderSettingsV0370PokemonLuvdiscNormal = GenderSettings<"SPAWN_V0370_POKEMON_LUVDISC_NORMAL">;
export type GenderSettingsV0371PokemonBagon = GenderSettings<"SPAWN_V0371_POKEMON_BAGON">;
export type GenderSettingsV0371PokemonBagonNormal = GenderSettings<"SPAWN_V0371_POKEMON_BAGON_NORMAL">;
export type GenderSettingsV0372PokemonShelgon = GenderSettings<"SPAWN_V0372_POKEMON_SHELGON">;
export type GenderSettingsV0372PokemonShelgonNormal = GenderSettings<"SPAWN_V0372_POKEMON_SHELGON_NORMAL">;
export type GenderSettingsV0373PokemonSalamence = GenderSettings<"SPAWN_V0373_POKEMON_SALAMENCE">;
export type GenderSettingsV0373PokemonSalamenceNormal = GenderSettings<"SPAWN_V0373_POKEMON_SALAMENCE_NORMAL">;
export type GenderSettingsV0374PokemonBeldum = GenderSettings<"SPAWN_V0374_POKEMON_BELDUM">;
export type GenderSettingsV0374PokemonBeldumNormal = GenderSettings<"SPAWN_V0374_POKEMON_BELDUM_NORMAL">;
export type GenderSettingsV0375PokemonMetang = GenderSettings<"SPAWN_V0375_POKEMON_METANG">;
export type GenderSettingsV0375PokemonMetangNormal = GenderSettings<"SPAWN_V0375_POKEMON_METANG_NORMAL">;
export type GenderSettingsV0376PokemonMetagross = GenderSettings<"SPAWN_V0376_POKEMON_METAGROSS">;
export type GenderSettingsV0376PokemonMetagrossNormal = GenderSettings<"SPAWN_V0376_POKEMON_METAGROSS_NORMAL">;
export type GenderSettingsV0377PokemonRegirock = GenderSettings<"SPAWN_V0377_POKEMON_REGIROCK">;
export type GenderSettingsV0377PokemonRegirockNormal = GenderSettings<"SPAWN_V0377_POKEMON_REGIROCK_NORMAL">;
export type GenderSettingsV0378PokemonRegice = GenderSettings<"SPAWN_V0378_POKEMON_REGICE">;
export type GenderSettingsV0378PokemonRegiceNormal = GenderSettings<"SPAWN_V0378_POKEMON_REGICE_NORMAL">;
export type GenderSettingsV0379PokemonRegisteel = GenderSettings<"SPAWN_V0379_POKEMON_REGISTEEL">;
export type GenderSettingsV0379PokemonRegisteelNormal = GenderSettings<"SPAWN_V0379_POKEMON_REGISTEEL_NORMAL">;
export type GenderSettingsV0380PokemonLatias = GenderSettings<"SPAWN_V0380_POKEMON_LATIAS">;
export type GenderSettingsV0380PokemonLatiasNormal = GenderSettings<"SPAWN_V0380_POKEMON_LATIAS_NORMAL">;
export type GenderSettingsV0380PokemonLatiasS = GenderSettings<"SPAWN_V0380_POKEMON_LATIAS_S">;
export type GenderSettingsV0381PokemonLatios = GenderSettings<"SPAWN_V0381_POKEMON_LATIOS">;
export type GenderSettingsV0381PokemonLatiosNormal = GenderSettings<"SPAWN_V0381_POKEMON_LATIOS_NORMAL">;
export type GenderSettingsV0381PokemonLatiosS = GenderSettings<"SPAWN_V0381_POKEMON_LATIOS_S">;
export type GenderSettingsV0382PokemonKyogre = GenderSettings<"SPAWN_V0382_POKEMON_KYOGRE">;
export type GenderSettingsV0382PokemonKyogreNormal = GenderSettings<"SPAWN_V0382_POKEMON_KYOGRE_NORMAL">;
export type GenderSettingsV0383PokemonGroudon = GenderSettings<"SPAWN_V0383_POKEMON_GROUDON">;
export type GenderSettingsV0383PokemonGroudonNormal = GenderSettings<"SPAWN_V0383_POKEMON_GROUDON_NORMAL">;
export type GenderSettingsV0384PokemonRayquaza = GenderSettings<"SPAWN_V0384_POKEMON_RAYQUAZA">;
export type GenderSettingsV0384PokemonRayquazaNormal = GenderSettings<"SPAWN_V0384_POKEMON_RAYQUAZA_NORMAL">;
export type GenderSettingsV0385PokemonJirachi = GenderSettings<"SPAWN_V0385_POKEMON_JIRACHI">;
export type GenderSettingsV0385PokemonJirachiNormal = GenderSettings<"SPAWN_V0385_POKEMON_JIRACHI_NORMAL">;
export type GenderSettingsV0386PokemonDeoxys = GenderSettings<"SPAWN_V0386_POKEMON_DEOXYS">;
export type GenderSettingsV0386PokemonDeoxysAttack = GenderSettings<"SPAWN_V0386_POKEMON_DEOXYS_ATTACK">;
export type GenderSettingsV0386PokemonDeoxysDefense = GenderSettings<"SPAWN_V0386_POKEMON_DEOXYS_DEFENSE">;
export type GenderSettingsV0386PokemonDeoxysNormal = GenderSettings<"SPAWN_V0386_POKEMON_DEOXYS_NORMAL">;
export type GenderSettingsV0386PokemonDeoxysSpeed = GenderSettings<"SPAWN_V0386_POKEMON_DEOXYS_SPEED">;
export type GenderSettingsV0387PokemonTurtwig = GenderSettings<"SPAWN_V0387_POKEMON_TURTWIG">;
export type GenderSettingsV0387PokemonTurtwigNormal = GenderSettings<"SPAWN_V0387_POKEMON_TURTWIG_NORMAL">;
export type GenderSettingsV0388PokemonGrotle = GenderSettings<"SPAWN_V0388_POKEMON_GROTLE">;
export type GenderSettingsV0388PokemonGrotleNormal = GenderSettings<"SPAWN_V0388_POKEMON_GROTLE_NORMAL">;
export type GenderSettingsV0389PokemonTorterra = GenderSettings<"SPAWN_V0389_POKEMON_TORTERRA">;
export type GenderSettingsV0389PokemonTorterraNormal = GenderSettings<"SPAWN_V0389_POKEMON_TORTERRA_NORMAL">;
export type GenderSettingsV0390PokemonChimchar = GenderSettings<"SPAWN_V0390_POKEMON_CHIMCHAR">;
export type GenderSettingsV0390PokemonChimcharNormal = GenderSettings<"SPAWN_V0390_POKEMON_CHIMCHAR_NORMAL">;
export type GenderSettingsV0391PokemonMonferno = GenderSettings<"SPAWN_V0391_POKEMON_MONFERNO">;
export type GenderSettingsV0391PokemonMonfernoNormal = GenderSettings<"SPAWN_V0391_POKEMON_MONFERNO_NORMAL">;
export type GenderSettingsV0392PokemonInfernape = GenderSettings<"SPAWN_V0392_POKEMON_INFERNAPE">;
export type GenderSettingsV0392PokemonInfernapeNormal = GenderSettings<"SPAWN_V0392_POKEMON_INFERNAPE_NORMAL">;
export type GenderSettingsV0393PokemonPiplup = GenderSettings<"SPAWN_V0393_POKEMON_PIPLUP">;
export type GenderSettingsV0393PokemonPiplupNormal = GenderSettings<"SPAWN_V0393_POKEMON_PIPLUP_NORMAL">;
export type GenderSettingsV0394PokemonPrinplup = GenderSettings<"SPAWN_V0394_POKEMON_PRINPLUP">;
export type GenderSettingsV0394PokemonPrinplupNormal = GenderSettings<"SPAWN_V0394_POKEMON_PRINPLUP_NORMAL">;
export type GenderSettingsV0395PokemonEmpoleon = GenderSettings<"SPAWN_V0395_POKEMON_EMPOLEON">;
export type GenderSettingsV0395PokemonEmpoleonNormal = GenderSettings<"SPAWN_V0395_POKEMON_EMPOLEON_NORMAL">;
export type GenderSettingsV0396PokemonStarly = GenderSettings<"SPAWN_V0396_POKEMON_STARLY">;
export type GenderSettingsV0396PokemonStarlyNormal = GenderSettings<"SPAWN_V0396_POKEMON_STARLY_NORMAL">;
export type GenderSettingsV0397PokemonStaravia = GenderSettings<"SPAWN_V0397_POKEMON_STARAVIA">;
export type GenderSettingsV0397PokemonStaraviaNormal = GenderSettings<"SPAWN_V0397_POKEMON_STARAVIA_NORMAL">;
export type GenderSettingsV0398PokemonStaraptor = GenderSettings<"SPAWN_V0398_POKEMON_STARAPTOR">;
export type GenderSettingsV0398PokemonStaraptorNormal = GenderSettings<"SPAWN_V0398_POKEMON_STARAPTOR_NORMAL">;
export type GenderSettingsV0399PokemonBidoof = GenderSettings<"SPAWN_V0399_POKEMON_BIDOOF">;
export type GenderSettingsV0399PokemonBidoofNormal = GenderSettings<"SPAWN_V0399_POKEMON_BIDOOF_NORMAL">;
export type GenderSettingsV0400PokemonBibarel = GenderSettings<"SPAWN_V0400_POKEMON_BIBAREL">;
export type GenderSettingsV0400PokemonBibarelNormal = GenderSettings<"SPAWN_V0400_POKEMON_BIBAREL_NORMAL">;
export type GenderSettingsV0401PokemonKricketot = GenderSettings<"SPAWN_V0401_POKEMON_KRICKETOT">;
export type GenderSettingsV0401PokemonKricketotNormal = GenderSettings<"SPAWN_V0401_POKEMON_KRICKETOT_NORMAL">;
export type GenderSettingsV0402PokemonKricketune = GenderSettings<"SPAWN_V0402_POKEMON_KRICKETUNE">;
export type GenderSettingsV0402PokemonKricketuneNormal = GenderSettings<"SPAWN_V0402_POKEMON_KRICKETUNE_NORMAL">;
export type GenderSettingsV0403PokemonShinx = GenderSettings<"SPAWN_V0403_POKEMON_SHINX">;
export type GenderSettingsV0403PokemonShinxNormal = GenderSettings<"SPAWN_V0403_POKEMON_SHINX_NORMAL">;
export type GenderSettingsV0404PokemonLuxio = GenderSettings<"SPAWN_V0404_POKEMON_LUXIO">;
export type GenderSettingsV0404PokemonLuxioNormal = GenderSettings<"SPAWN_V0404_POKEMON_LUXIO_NORMAL">;
export type GenderSettingsV0405PokemonLuxray = GenderSettings<"SPAWN_V0405_POKEMON_LUXRAY">;
export type GenderSettingsV0405PokemonLuxrayNormal = GenderSettings<"SPAWN_V0405_POKEMON_LUXRAY_NORMAL">;
export type GenderSettingsV0406PokemonBudew = GenderSettings<"SPAWN_V0406_POKEMON_BUDEW">;
export type GenderSettingsV0406PokemonBudewNormal = GenderSettings<"SPAWN_V0406_POKEMON_BUDEW_NORMAL">;
export type GenderSettingsV0407PokemonRoserade = GenderSettings<"SPAWN_V0407_POKEMON_ROSERADE">;
export type GenderSettingsV0407PokemonRoseradeNormal = GenderSettings<"SPAWN_V0407_POKEMON_ROSERADE_NORMAL">;
export type GenderSettingsV0408PokemonCranidos = GenderSettings<"SPAWN_V0408_POKEMON_CRANIDOS">;
export type GenderSettingsV0408PokemonCranidosNormal = GenderSettings<"SPAWN_V0408_POKEMON_CRANIDOS_NORMAL">;
export type GenderSettingsV0409PokemonRampardos = GenderSettings<"SPAWN_V0409_POKEMON_RAMPARDOS">;
export type GenderSettingsV0409PokemonRampardosNormal = GenderSettings<"SPAWN_V0409_POKEMON_RAMPARDOS_NORMAL">;
export type GenderSettingsV0410PokemonShieldon = GenderSettings<"SPAWN_V0410_POKEMON_SHIELDON">;
export type GenderSettingsV0410PokemonShieldonNormal = GenderSettings<"SPAWN_V0410_POKEMON_SHIELDON_NORMAL">;
export type GenderSettingsV0411PokemonBastiodon = GenderSettings<"SPAWN_V0411_POKEMON_BASTIODON">;
export type GenderSettingsV0411PokemonBastiodonNormal = GenderSettings<"SPAWN_V0411_POKEMON_BASTIODON_NORMAL">;
export type GenderSettingsV0412PokemonBurmy = GenderSettings<"SPAWN_V0412_POKEMON_BURMY">;
export type GenderSettingsV0412PokemonBurmyPlant = GenderSettings<"SPAWN_V0412_POKEMON_BURMY_PLANT">;
export type GenderSettingsV0412PokemonBurmySandy = GenderSettings<"SPAWN_V0412_POKEMON_BURMY_SANDY">;
export type GenderSettingsV0412PokemonBurmyTrash = GenderSettings<"SPAWN_V0412_POKEMON_BURMY_TRASH">;
export type GenderSettingsV0413PokemonWormadam = GenderSettings<"SPAWN_V0413_POKEMON_WORMADAM">;
export type GenderSettingsV0413PokemonWormadamPlant = GenderSettings<"SPAWN_V0413_POKEMON_WORMADAM_PLANT">;
export type GenderSettingsV0413PokemonWormadamSandy = GenderSettings<"SPAWN_V0413_POKEMON_WORMADAM_SANDY">;
export type GenderSettingsV0413PokemonWormadamTrash = GenderSettings<"SPAWN_V0413_POKEMON_WORMADAM_TRASH">;
export type GenderSettingsV0414PokemonMothim = GenderSettings<"SPAWN_V0414_POKEMON_MOTHIM">;
export type GenderSettingsV0414PokemonMothimNormal = GenderSettings<"SPAWN_V0414_POKEMON_MOTHIM_NORMAL">;
export type GenderSettingsV0415PokemonCombee = GenderSettings<"SPAWN_V0415_POKEMON_COMBEE">;
export type GenderSettingsV0415PokemonCombeeNormal = GenderSettings<"SPAWN_V0415_POKEMON_COMBEE_NORMAL">;
export type GenderSettingsV0416PokemonVespiquen = GenderSettings<"SPAWN_V0416_POKEMON_VESPIQUEN">;
export type GenderSettingsV0416PokemonVespiquenNormal = GenderSettings<"SPAWN_V0416_POKEMON_VESPIQUEN_NORMAL">;
export type GenderSettingsV0417PokemonPachirisu = GenderSettings<"SPAWN_V0417_POKEMON_PACHIRISU">;
export type GenderSettingsV0417PokemonPachirisuNormal = GenderSettings<"SPAWN_V0417_POKEMON_PACHIRISU_NORMAL">;
export type GenderSettingsV0418PokemonBuizel = GenderSettings<"SPAWN_V0418_POKEMON_BUIZEL">;
export type GenderSettingsV0418PokemonBuizelNormal = GenderSettings<"SPAWN_V0418_POKEMON_BUIZEL_NORMAL">;
export type GenderSettingsV0419PokemonFloatzel = GenderSettings<"SPAWN_V0419_POKEMON_FLOATZEL">;
export type GenderSettingsV0419PokemonFloatzelNormal = GenderSettings<"SPAWN_V0419_POKEMON_FLOATZEL_NORMAL">;
export type GenderSettingsV0420PokemonCherubi = GenderSettings<"SPAWN_V0420_POKEMON_CHERUBI">;
export type GenderSettingsV0420PokemonCherubiNormal = GenderSettings<"SPAWN_V0420_POKEMON_CHERUBI_NORMAL">;
export type GenderSettingsV0421PokemonCherrim = GenderSettings<"SPAWN_V0421_POKEMON_CHERRIM">;
export type GenderSettingsV0421PokemonCherrimOvercast = GenderSettings<"SPAWN_V0421_POKEMON_CHERRIM_OVERCAST">;
export type GenderSettingsV0421PokemonCherrimSunny = GenderSettings<"SPAWN_V0421_POKEMON_CHERRIM_SUNNY">;
export type GenderSettingsV0422PokemonShellos = GenderSettings<"SPAWN_V0422_POKEMON_SHELLOS">;
export type GenderSettingsV0422PokemonShellosEastSea = GenderSettings<"SPAWN_V0422_POKEMON_SHELLOS_EAST_SEA">;
export type GenderSettingsV0422PokemonShellosWestSea = GenderSettings<"SPAWN_V0422_POKEMON_SHELLOS_WEST_SEA">;
export type GenderSettingsV0423PokemonGastrodon = GenderSettings<"SPAWN_V0423_POKEMON_GASTRODON">;
export type GenderSettingsV0423PokemonGastrodonEastSea = GenderSettings<"SPAWN_V0423_POKEMON_GASTRODON_EAST_SEA">;
export type GenderSettingsV0423PokemonGastrodonWestSea = GenderSettings<"SPAWN_V0423_POKEMON_GASTRODON_WEST_SEA">;
export type GenderSettingsV0424PokemonAmbipom = GenderSettings<"SPAWN_V0424_POKEMON_AMBIPOM">;
export type GenderSettingsV0424PokemonAmbipomNormal = GenderSettings<"SPAWN_V0424_POKEMON_AMBIPOM_NORMAL">;
export type GenderSettingsV0425PokemonDrifloon = GenderSettings<"SPAWN_V0425_POKEMON_DRIFLOON">;
export type GenderSettingsV0425PokemonDrifloonNormal = GenderSettings<"SPAWN_V0425_POKEMON_DRIFLOON_NORMAL">;
export type GenderSettingsV0426PokemonDrifblim = GenderSettings<"SPAWN_V0426_POKEMON_DRIFBLIM">;
export type GenderSettingsV0426PokemonDrifblimNormal = GenderSettings<"SPAWN_V0426_POKEMON_DRIFBLIM_NORMAL">;
export type GenderSettingsV0427PokemonBuneary = GenderSettings<"SPAWN_V0427_POKEMON_BUNEARY">;
export type GenderSettingsV0427PokemonBunearyNormal = GenderSettings<"SPAWN_V0427_POKEMON_BUNEARY_NORMAL">;
export type GenderSettingsV0428PokemonLopunny = GenderSettings<"SPAWN_V0428_POKEMON_LOPUNNY">;
export type GenderSettingsV0428PokemonLopunnyNormal = GenderSettings<"SPAWN_V0428_POKEMON_LOPUNNY_NORMAL">;
export type GenderSettingsV0429PokemonMismagius = GenderSettings<"SPAWN_V0429_POKEMON_MISMAGIUS">;
export type GenderSettingsV0429PokemonMismagiusNormal = GenderSettings<"SPAWN_V0429_POKEMON_MISMAGIUS_NORMAL">;
export type GenderSettingsV0430PokemonHonchkrow = GenderSettings<"SPAWN_V0430_POKEMON_HONCHKROW">;
export type GenderSettingsV0430PokemonHonchkrowNormal = GenderSettings<"SPAWN_V0430_POKEMON_HONCHKROW_NORMAL">;
export type GenderSettingsV0431PokemonGlameow = GenderSettings<"SPAWN_V0431_POKEMON_GLAMEOW">;
export type GenderSettingsV0431PokemonGlameowNormal = GenderSettings<"SPAWN_V0431_POKEMON_GLAMEOW_NORMAL">;
export type GenderSettingsV0432PokemonPurugly = GenderSettings<"SPAWN_V0432_POKEMON_PURUGLY">;
export type GenderSettingsV0432PokemonPuruglyNormal = GenderSettings<"SPAWN_V0432_POKEMON_PURUGLY_NORMAL">;
export type GenderSettingsV0433PokemonChingling = GenderSettings<"SPAWN_V0433_POKEMON_CHINGLING">;
export type GenderSettingsV0433PokemonChinglingNormal = GenderSettings<"SPAWN_V0433_POKEMON_CHINGLING_NORMAL">;
export type GenderSettingsV0434PokemonStunky = GenderSettings<"SPAWN_V0434_POKEMON_STUNKY">;
export type GenderSettingsV0434PokemonStunkyNormal = GenderSettings<"SPAWN_V0434_POKEMON_STUNKY_NORMAL">;
export type GenderSettingsV0435PokemonSkuntank = GenderSettings<"SPAWN_V0435_POKEMON_SKUNTANK">;
export type GenderSettingsV0435PokemonSkuntankNormal = GenderSettings<"SPAWN_V0435_POKEMON_SKUNTANK_NORMAL">;
export type GenderSettingsV0436PokemonBronzor = GenderSettings<"SPAWN_V0436_POKEMON_BRONZOR">;
export type GenderSettingsV0436PokemonBronzorNormal = GenderSettings<"SPAWN_V0436_POKEMON_BRONZOR_NORMAL">;
export type GenderSettingsV0437PokemonBronzong = GenderSettings<"SPAWN_V0437_POKEMON_BRONZONG">;
export type GenderSettingsV0437PokemonBronzongNormal = GenderSettings<"SPAWN_V0437_POKEMON_BRONZONG_NORMAL">;
export type GenderSettingsV0438PokemonBonsly = GenderSettings<"SPAWN_V0438_POKEMON_BONSLY">;
export type GenderSettingsV0438PokemonBonslyNormal = GenderSettings<"SPAWN_V0438_POKEMON_BONSLY_NORMAL">;
export type GenderSettingsV0439PokemonMimeJr = GenderSettings<"SPAWN_V0439_POKEMON_MIME_JR">;
export type GenderSettingsV0439PokemonMimeJrNormal = GenderSettings<"SPAWN_V0439_POKEMON_MIME_JR_NORMAL">;
export type GenderSettingsV0440PokemonHappiny = GenderSettings<"SPAWN_V0440_POKEMON_HAPPINY">;
export type GenderSettingsV0440PokemonHappinyNormal = GenderSettings<"SPAWN_V0440_POKEMON_HAPPINY_NORMAL">;
export type GenderSettingsV0441PokemonChatot = GenderSettings<"SPAWN_V0441_POKEMON_CHATOT">;
export type GenderSettingsV0441PokemonChatotNormal = GenderSettings<"SPAWN_V0441_POKEMON_CHATOT_NORMAL">;
export type GenderSettingsV0442PokemonSpiritomb = GenderSettings<"SPAWN_V0442_POKEMON_SPIRITOMB">;
export type GenderSettingsV0442PokemonSpiritombNormal = GenderSettings<"SPAWN_V0442_POKEMON_SPIRITOMB_NORMAL">;
export type GenderSettingsV0443PokemonGible = GenderSettings<"SPAWN_V0443_POKEMON_GIBLE">;
export type GenderSettingsV0443PokemonGibleNormal = GenderSettings<"SPAWN_V0443_POKEMON_GIBLE_NORMAL">;
export type GenderSettingsV0444PokemonGabite = GenderSettings<"SPAWN_V0444_POKEMON_GABITE">;
export type GenderSettingsV0444PokemonGabiteNormal = GenderSettings<"SPAWN_V0444_POKEMON_GABITE_NORMAL">;
export type GenderSettingsV0445PokemonGarchomp = GenderSettings<"SPAWN_V0445_POKEMON_GARCHOMP">;
export type GenderSettingsV0445PokemonGarchompNormal = GenderSettings<"SPAWN_V0445_POKEMON_GARCHOMP_NORMAL">;
export type GenderSettingsV0446PokemonMunchlax = GenderSettings<"SPAWN_V0446_POKEMON_MUNCHLAX">;
export type GenderSettingsV0446PokemonMunchlaxNormal = GenderSettings<"SPAWN_V0446_POKEMON_MUNCHLAX_NORMAL">;
export type GenderSettingsV0447PokemonRiolu = GenderSettings<"SPAWN_V0447_POKEMON_RIOLU">;
export type GenderSettingsV0447PokemonRioluNormal = GenderSettings<"SPAWN_V0447_POKEMON_RIOLU_NORMAL">;
export type GenderSettingsV0448PokemonLucario = GenderSettings<"SPAWN_V0448_POKEMON_LUCARIO">;
export type GenderSettingsV0448PokemonLucarioNormal = GenderSettings<"SPAWN_V0448_POKEMON_LUCARIO_NORMAL">;
export type GenderSettingsV0449PokemonHippopotas = GenderSettings<"SPAWN_V0449_POKEMON_HIPPOPOTAS">;
export type GenderSettingsV0449PokemonHippopotasNormal = GenderSettings<"SPAWN_V0449_POKEMON_HIPPOPOTAS_NORMAL">;
export type GenderSettingsV0450PokemonHippowdon = GenderSettings<"SPAWN_V0450_POKEMON_HIPPOWDON">;
export type GenderSettingsV0450PokemonHippowdonNormal = GenderSettings<"SPAWN_V0450_POKEMON_HIPPOWDON_NORMAL">;
export type GenderSettingsV0451PokemonSkorupi = GenderSettings<"SPAWN_V0451_POKEMON_SKORUPI">;
export type GenderSettingsV0451PokemonSkorupiNormal = GenderSettings<"SPAWN_V0451_POKEMON_SKORUPI_NORMAL">;
export type GenderSettingsV0452PokemonDrapion = GenderSettings<"SPAWN_V0452_POKEMON_DRAPION">;
export type GenderSettingsV0452PokemonDrapionNormal = GenderSettings<"SPAWN_V0452_POKEMON_DRAPION_NORMAL">;
export type GenderSettingsV0453PokemonCroagunk = GenderSettings<"SPAWN_V0453_POKEMON_CROAGUNK">;
export type GenderSettingsV0453PokemonCroagunkNormal = GenderSettings<"SPAWN_V0453_POKEMON_CROAGUNK_NORMAL">;
export type GenderSettingsV0454PokemonToxicroak = GenderSettings<"SPAWN_V0454_POKEMON_TOXICROAK">;
export type GenderSettingsV0454PokemonToxicroakNormal = GenderSettings<"SPAWN_V0454_POKEMON_TOXICROAK_NORMAL">;
export type GenderSettingsV0455PokemonCarnivine = GenderSettings<"SPAWN_V0455_POKEMON_CARNIVINE">;
export type GenderSettingsV0455PokemonCarnivineNormal = GenderSettings<"SPAWN_V0455_POKEMON_CARNIVINE_NORMAL">;
export type GenderSettingsV0456PokemonFinneon = GenderSettings<"SPAWN_V0456_POKEMON_FINNEON">;
export type GenderSettingsV0456PokemonFinneonNormal = GenderSettings<"SPAWN_V0456_POKEMON_FINNEON_NORMAL">;
export type GenderSettingsV0457PokemonLumineon = GenderSettings<"SPAWN_V0457_POKEMON_LUMINEON">;
export type GenderSettingsV0457PokemonLumineonNormal = GenderSettings<"SPAWN_V0457_POKEMON_LUMINEON_NORMAL">;
export type GenderSettingsV0458PokemonMantyke = GenderSettings<"SPAWN_V0458_POKEMON_MANTYKE">;
export type GenderSettingsV0458PokemonMantykeNormal = GenderSettings<"SPAWN_V0458_POKEMON_MANTYKE_NORMAL">;
export type GenderSettingsV0459PokemonSnover = GenderSettings<"SPAWN_V0459_POKEMON_SNOVER">;
export type GenderSettingsV0459PokemonSnoverNormal = GenderSettings<"SPAWN_V0459_POKEMON_SNOVER_NORMAL">;
export type GenderSettingsV0460PokemonAbomasnow = GenderSettings<"SPAWN_V0460_POKEMON_ABOMASNOW">;
export type GenderSettingsV0460PokemonAbomasnowNormal = GenderSettings<"SPAWN_V0460_POKEMON_ABOMASNOW_NORMAL">;
export type GenderSettingsV0461PokemonWeavile = GenderSettings<"SPAWN_V0461_POKEMON_WEAVILE">;
export type GenderSettingsV0461PokemonWeavileNormal = GenderSettings<"SPAWN_V0461_POKEMON_WEAVILE_NORMAL">;
export type GenderSettingsV0462PokemonMagnezone = GenderSettings<"SPAWN_V0462_POKEMON_MAGNEZONE">;
export type GenderSettingsV0462PokemonMagnezoneNormal = GenderSettings<"SPAWN_V0462_POKEMON_MAGNEZONE_NORMAL">;
export type GenderSettingsV0463PokemonLickilicky = GenderSettings<"SPAWN_V0463_POKEMON_LICKILICKY">;
export type GenderSettingsV0463PokemonLickilickyNormal = GenderSettings<"SPAWN_V0463_POKEMON_LICKILICKY_NORMAL">;
export type GenderSettingsV0464PokemonRhyperior = GenderSettings<"SPAWN_V0464_POKEMON_RHYPERIOR">;
export type GenderSettingsV0464PokemonRhyperiorNormal = GenderSettings<"SPAWN_V0464_POKEMON_RHYPERIOR_NORMAL">;
export type GenderSettingsV0465PokemonTangrowth = GenderSettings<"SPAWN_V0465_POKEMON_TANGROWTH">;
export type GenderSettingsV0465PokemonTangrowthNormal = GenderSettings<"SPAWN_V0465_POKEMON_TANGROWTH_NORMAL">;
export type GenderSettingsV0466PokemonElectivire = GenderSettings<"SPAWN_V0466_POKEMON_ELECTIVIRE">;
export type GenderSettingsV0466PokemonElectivireNormal = GenderSettings<"SPAWN_V0466_POKEMON_ELECTIVIRE_NORMAL">;
export type GenderSettingsV0467PokemonMagmortar = GenderSettings<"SPAWN_V0467_POKEMON_MAGMORTAR">;
export type GenderSettingsV0467PokemonMagmortarNormal = GenderSettings<"SPAWN_V0467_POKEMON_MAGMORTAR_NORMAL">;
export type GenderSettingsV0468PokemonTogekiss = GenderSettings<"SPAWN_V0468_POKEMON_TOGEKISS">;
export type GenderSettingsV0468PokemonTogekissNormal = GenderSettings<"SPAWN_V0468_POKEMON_TOGEKISS_NORMAL">;
export type GenderSettingsV0469PokemonYanmega = GenderSettings<"SPAWN_V0469_POKEMON_YANMEGA">;
export type GenderSettingsV0469PokemonYanmegaNormal = GenderSettings<"SPAWN_V0469_POKEMON_YANMEGA_NORMAL">;
export type GenderSettingsV0470PokemonLeafeon = GenderSettings<"SPAWN_V0470_POKEMON_LEAFEON">;
export type GenderSettingsV0470PokemonLeafeonNormal = GenderSettings<"SPAWN_V0470_POKEMON_LEAFEON_NORMAL">;
export type GenderSettingsV0471PokemonGlaceon = GenderSettings<"SPAWN_V0471_POKEMON_GLACEON">;
export type GenderSettingsV0471PokemonGlaceonNormal = GenderSettings<"SPAWN_V0471_POKEMON_GLACEON_NORMAL">;
export type GenderSettingsV0472PokemonGliscor = GenderSettings<"SPAWN_V0472_POKEMON_GLISCOR">;
export type GenderSettingsV0472PokemonGliscorNormal = GenderSettings<"SPAWN_V0472_POKEMON_GLISCOR_NORMAL">;
export type GenderSettingsV0473PokemonMamoswine = GenderSettings<"SPAWN_V0473_POKEMON_MAMOSWINE">;
export type GenderSettingsV0473PokemonMamoswineNormal = GenderSettings<"SPAWN_V0473_POKEMON_MAMOSWINE_NORMAL">;
export type GenderSettingsV0474PokemonPorygonZ = GenderSettings<"SPAWN_V0474_POKEMON_PORYGON_Z">;
export type GenderSettingsV0474PokemonPorygonZNormal = GenderSettings<"SPAWN_V0474_POKEMON_PORYGON_Z_NORMAL">;
export type GenderSettingsV0475PokemonGallade = GenderSettings<"SPAWN_V0475_POKEMON_GALLADE">;
export type GenderSettingsV0475PokemonGalladeNormal = GenderSettings<"SPAWN_V0475_POKEMON_GALLADE_NORMAL">;
export type GenderSettingsV0476PokemonProbopass = GenderSettings<"SPAWN_V0476_POKEMON_PROBOPASS">;
export type GenderSettingsV0476PokemonProbopassNormal = GenderSettings<"SPAWN_V0476_POKEMON_PROBOPASS_NORMAL">;
export type GenderSettingsV0477PokemonDusknoir = GenderSettings<"SPAWN_V0477_POKEMON_DUSKNOIR">;
export type GenderSettingsV0477PokemonDusknoirNormal = GenderSettings<"SPAWN_V0477_POKEMON_DUSKNOIR_NORMAL">;
export type GenderSettingsV0478PokemonFroslass = GenderSettings<"SPAWN_V0478_POKEMON_FROSLASS">;
export type GenderSettingsV0478PokemonFroslassNormal = GenderSettings<"SPAWN_V0478_POKEMON_FROSLASS_NORMAL">;
export type GenderSettingsV0479PokemonRotom = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM">;
export type GenderSettingsV0479PokemonRotomFan = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_FAN">;
export type GenderSettingsV0479PokemonRotomFrost = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_FROST">;
export type GenderSettingsV0479PokemonRotomHeat = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_HEAT">;
export type GenderSettingsV0479PokemonRotomMow = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_MOW">;
export type GenderSettingsV0479PokemonRotomNormal = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_NORMAL">;
export type GenderSettingsV0479PokemonRotomWash = GenderSettings<"SPAWN_V0479_POKEMON_ROTOM_WASH">;
export type GenderSettingsV0480PokemonUxie = GenderSettings<"SPAWN_V0480_POKEMON_UXIE">;
export type GenderSettingsV0480PokemonUxieNormal = GenderSettings<"SPAWN_V0480_POKEMON_UXIE_NORMAL">;
export type GenderSettingsV0481PokemonMesprit = GenderSettings<"SPAWN_V0481_POKEMON_MESPRIT">;
export type GenderSettingsV0481PokemonMespritNormal = GenderSettings<"SPAWN_V0481_POKEMON_MESPRIT_NORMAL">;
export type GenderSettingsV0482PokemonAzelf = GenderSettings<"SPAWN_V0482_POKEMON_AZELF">;
export type GenderSettingsV0482PokemonAzelfNormal = GenderSettings<"SPAWN_V0482_POKEMON_AZELF_NORMAL">;
export type GenderSettingsV0483PokemonDialga = GenderSettings<"SPAWN_V0483_POKEMON_DIALGA">;
export type GenderSettingsV0483PokemonDialgaNormal = GenderSettings<"SPAWN_V0483_POKEMON_DIALGA_NORMAL">;
export type GenderSettingsV0483PokemonDialgaOrigin = GenderSettings<"SPAWN_V0483_POKEMON_DIALGA_ORIGIN">;
export type GenderSettingsV0484PokemonPalkia = GenderSettings<"SPAWN_V0484_POKEMON_PALKIA">;
export type GenderSettingsV0484PokemonPalkiaNormal = GenderSettings<"SPAWN_V0484_POKEMON_PALKIA_NORMAL">;
export type GenderSettingsV0484PokemonPalkiaOrigin = GenderSettings<"SPAWN_V0484_POKEMON_PALKIA_ORIGIN">;
export type GenderSettingsV0485PokemonHeatran = GenderSettings<"SPAWN_V0485_POKEMON_HEATRAN">;
export type GenderSettingsV0485PokemonHeatranNormal = GenderSettings<"SPAWN_V0485_POKEMON_HEATRAN_NORMAL">;
export type GenderSettingsV0486PokemonRegigigas = GenderSettings<"SPAWN_V0486_POKEMON_REGIGIGAS">;
export type GenderSettingsV0486PokemonRegigigasNormal = GenderSettings<"SPAWN_V0486_POKEMON_REGIGIGAS_NORMAL">;
export type GenderSettingsV0487PokemonGiratina = GenderSettings<"SPAWN_V0487_POKEMON_GIRATINA">;
export type GenderSettingsV0487PokemonGiratinaAltered = GenderSettings<"SPAWN_V0487_POKEMON_GIRATINA_ALTERED">;
export type GenderSettingsV0487PokemonGiratinaOrigin = GenderSettings<"SPAWN_V0487_POKEMON_GIRATINA_ORIGIN">;
export type GenderSettingsV0488PokemonCresselia = GenderSettings<"SPAWN_V0488_POKEMON_CRESSELIA">;
export type GenderSettingsV0488PokemonCresseliaNormal = GenderSettings<"SPAWN_V0488_POKEMON_CRESSELIA_NORMAL">;
export type GenderSettingsV0489PokemonPhione = GenderSettings<"SPAWN_V0489_POKEMON_PHIONE">;
export type GenderSettingsV0489PokemonPhioneNormal = GenderSettings<"SPAWN_V0489_POKEMON_PHIONE_NORMAL">;
export type GenderSettingsV0490PokemonManaphy = GenderSettings<"SPAWN_V0490_POKEMON_MANAPHY">;
export type GenderSettingsV0490PokemonManaphyNormal = GenderSettings<"SPAWN_V0490_POKEMON_MANAPHY_NORMAL">;
export type GenderSettingsV0491PokemonDarkrai = GenderSettings<"SPAWN_V0491_POKEMON_DARKRAI">;
export type GenderSettingsV0491PokemonDarkraiNormal = GenderSettings<"SPAWN_V0491_POKEMON_DARKRAI_NORMAL">;
export type GenderSettingsV0492PokemonShaymin = GenderSettings<"SPAWN_V0492_POKEMON_SHAYMIN">;
export type GenderSettingsV0492PokemonShayminLand = GenderSettings<"SPAWN_V0492_POKEMON_SHAYMIN_LAND">;
export type GenderSettingsV0492PokemonShayminSky = GenderSettings<"SPAWN_V0492_POKEMON_SHAYMIN_SKY">;
export type GenderSettingsV0493PokemonArceus = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS">;
export type GenderSettingsV0493PokemonArceusBug = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_BUG">;
export type GenderSettingsV0493PokemonArceusDark = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_DARK">;
export type GenderSettingsV0493PokemonArceusDragon = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_DRAGON">;
export type GenderSettingsV0493PokemonArceusElectric = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_ELECTRIC">;
export type GenderSettingsV0493PokemonArceusFairy = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_FAIRY">;
export type GenderSettingsV0493PokemonArceusFighting = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_FIGHTING">;
export type GenderSettingsV0493PokemonArceusFire = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_FIRE">;
export type GenderSettingsV0493PokemonArceusFlying = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_FLYING">;
export type GenderSettingsV0493PokemonArceusGhost = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_GHOST">;
export type GenderSettingsV0493PokemonArceusGrass = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_GRASS">;
export type GenderSettingsV0493PokemonArceusGround = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_GROUND">;
export type GenderSettingsV0493PokemonArceusIce = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_ICE">;
export type GenderSettingsV0493PokemonArceusNormal = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_NORMAL">;
export type GenderSettingsV0493PokemonArceusPoison = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_POISON">;
export type GenderSettingsV0493PokemonArceusPsychic = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_PSYCHIC">;
export type GenderSettingsV0493PokemonArceusRock = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_ROCK">;
export type GenderSettingsV0493PokemonArceusSteel = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_STEEL">;
export type GenderSettingsV0493PokemonArceusWater = GenderSettings<"SPAWN_V0493_POKEMON_ARCEUS_WATER">;
export type GenderSettingsV0494PokemonVictini = GenderSettings<"SPAWN_V0494_POKEMON_VICTINI">;
export type GenderSettingsV0494PokemonVictiniNormal = GenderSettings<"SPAWN_V0494_POKEMON_VICTINI_NORMAL">;
export type GenderSettingsV0495PokemonSnivy = GenderSettings<"SPAWN_V0495_POKEMON_SNIVY">;
export type GenderSettingsV0495PokemonSnivyNormal = GenderSettings<"SPAWN_V0495_POKEMON_SNIVY_NORMAL">;
export type GenderSettingsV0496PokemonServine = GenderSettings<"SPAWN_V0496_POKEMON_SERVINE">;
export type GenderSettingsV0496PokemonServineNormal = GenderSettings<"SPAWN_V0496_POKEMON_SERVINE_NORMAL">;
export type GenderSettingsV0497PokemonSerperior = GenderSettings<"SPAWN_V0497_POKEMON_SERPERIOR">;
export type GenderSettingsV0497PokemonSerperiorNormal = GenderSettings<"SPAWN_V0497_POKEMON_SERPERIOR_NORMAL">;
export type GenderSettingsV0498PokemonTepig = GenderSettings<"SPAWN_V0498_POKEMON_TEPIG">;
export type GenderSettingsV0498PokemonTepigNormal = GenderSettings<"SPAWN_V0498_POKEMON_TEPIG_NORMAL">;
export type GenderSettingsV0499PokemonPignite = GenderSettings<"SPAWN_V0499_POKEMON_PIGNITE">;
export type GenderSettingsV0499PokemonPigniteNormal = GenderSettings<"SPAWN_V0499_POKEMON_PIGNITE_NORMAL">;
export type GenderSettingsV0500PokemonEmboar = GenderSettings<"SPAWN_V0500_POKEMON_EMBOAR">;
export type GenderSettingsV0500PokemonEmboarNormal = GenderSettings<"SPAWN_V0500_POKEMON_EMBOAR_NORMAL">;
export type GenderSettingsV0501PokemonOshawott = GenderSettings<"SPAWN_V0501_POKEMON_OSHAWOTT">;
export type GenderSettingsV0501PokemonOshawottNormal = GenderSettings<"SPAWN_V0501_POKEMON_OSHAWOTT_NORMAL">;
export type GenderSettingsV0502PokemonDewott = GenderSettings<"SPAWN_V0502_POKEMON_DEWOTT">;
export type GenderSettingsV0502PokemonDewottNormal = GenderSettings<"SPAWN_V0502_POKEMON_DEWOTT_NORMAL">;
export type GenderSettingsV0503PokemonSamurott = GenderSettings<"SPAWN_V0503_POKEMON_SAMUROTT">;
export type GenderSettingsV0503PokemonSamurottHisuian = GenderSettings<"SPAWN_V0503_POKEMON_SAMUROTT_HISUIAN">;
export type GenderSettingsV0503PokemonSamurottNormal = GenderSettings<"SPAWN_V0503_POKEMON_SAMUROTT_NORMAL">;
export type GenderSettingsV0504PokemonPatrat = GenderSettings<"SPAWN_V0504_POKEMON_PATRAT">;
export type GenderSettingsV0504PokemonPatratNormal = GenderSettings<"SPAWN_V0504_POKEMON_PATRAT_NORMAL">;
export type GenderSettingsV0505PokemonWatchog = GenderSettings<"SPAWN_V0505_POKEMON_WATCHOG">;
export type GenderSettingsV0505PokemonWatchogNormal = GenderSettings<"SPAWN_V0505_POKEMON_WATCHOG_NORMAL">;
export type GenderSettingsV0506PokemonLillipup = GenderSettings<"SPAWN_V0506_POKEMON_LILLIPUP">;
export type GenderSettingsV0506PokemonLillipupNormal = GenderSettings<"SPAWN_V0506_POKEMON_LILLIPUP_NORMAL">;
export type GenderSettingsV0507PokemonHerdier = GenderSettings<"SPAWN_V0507_POKEMON_HERDIER">;
export type GenderSettingsV0507PokemonHerdierNormal = GenderSettings<"SPAWN_V0507_POKEMON_HERDIER_NORMAL">;
export type GenderSettingsV0508PokemonStoutland = GenderSettings<"SPAWN_V0508_POKEMON_STOUTLAND">;
export type GenderSettingsV0508PokemonStoutlandNormal = GenderSettings<"SPAWN_V0508_POKEMON_STOUTLAND_NORMAL">;
export type GenderSettingsV0509PokemonPurrloin = GenderSettings<"SPAWN_V0509_POKEMON_PURRLOIN">;
export type GenderSettingsV0509PokemonPurrloinNormal = GenderSettings<"SPAWN_V0509_POKEMON_PURRLOIN_NORMAL">;
export type GenderSettingsV0510PokemonLiepard = GenderSettings<"SPAWN_V0510_POKEMON_LIEPARD">;
export type GenderSettingsV0510PokemonLiepardNormal = GenderSettings<"SPAWN_V0510_POKEMON_LIEPARD_NORMAL">;
export type GenderSettingsV0511PokemonPansage = GenderSettings<"SPAWN_V0511_POKEMON_PANSAGE">;
export type GenderSettingsV0511PokemonPansageNormal = GenderSettings<"SPAWN_V0511_POKEMON_PANSAGE_NORMAL">;
export type GenderSettingsV0512PokemonSimisage = GenderSettings<"SPAWN_V0512_POKEMON_SIMISAGE">;
export type GenderSettingsV0512PokemonSimisageNormal = GenderSettings<"SPAWN_V0512_POKEMON_SIMISAGE_NORMAL">;
export type GenderSettingsV0513PokemonPansear = GenderSettings<"SPAWN_V0513_POKEMON_PANSEAR">;
export type GenderSettingsV0513PokemonPansearNormal = GenderSettings<"SPAWN_V0513_POKEMON_PANSEAR_NORMAL">;
export type GenderSettingsV0514PokemonSimisear = GenderSettings<"SPAWN_V0514_POKEMON_SIMISEAR">;
export type GenderSettingsV0514PokemonSimisearNormal = GenderSettings<"SPAWN_V0514_POKEMON_SIMISEAR_NORMAL">;
export type GenderSettingsV0515PokemonPanpour = GenderSettings<"SPAWN_V0515_POKEMON_PANPOUR">;
export type GenderSettingsV0515PokemonPanpourNormal = GenderSettings<"SPAWN_V0515_POKEMON_PANPOUR_NORMAL">;
export type GenderSettingsV0516PokemonSimipour = GenderSettings<"SPAWN_V0516_POKEMON_SIMIPOUR">;
export type GenderSettingsV0516PokemonSimipourNormal = GenderSettings<"SPAWN_V0516_POKEMON_SIMIPOUR_NORMAL">;
export type GenderSettingsV0517PokemonMunna = GenderSettings<"SPAWN_V0517_POKEMON_MUNNA">;
export type GenderSettingsV0517PokemonMunnaNormal = GenderSettings<"SPAWN_V0517_POKEMON_MUNNA_NORMAL">;
export type GenderSettingsV0518PokemonMusharna = GenderSettings<"SPAWN_V0518_POKEMON_MUSHARNA">;
export type GenderSettingsV0518PokemonMusharnaNormal = GenderSettings<"SPAWN_V0518_POKEMON_MUSHARNA_NORMAL">;
export type GenderSettingsV0519PokemonPidove = GenderSettings<"SPAWN_V0519_POKEMON_PIDOVE">;
export type GenderSettingsV0519PokemonPidoveNormal = GenderSettings<"SPAWN_V0519_POKEMON_PIDOVE_NORMAL">;
export type GenderSettingsV0520PokemonTranquill = GenderSettings<"SPAWN_V0520_POKEMON_TRANQUILL">;
export type GenderSettingsV0520PokemonTranquillNormal = GenderSettings<"SPAWN_V0520_POKEMON_TRANQUILL_NORMAL">;
export type GenderSettingsV0521PokemonUnfezant = GenderSettings<"SPAWN_V0521_POKEMON_UNFEZANT">;
export type GenderSettingsV0521PokemonUnfezantNormal = GenderSettings<"SPAWN_V0521_POKEMON_UNFEZANT_NORMAL">;
export type GenderSettingsV0522PokemonBlitzle = GenderSettings<"SPAWN_V0522_POKEMON_BLITZLE">;
export type GenderSettingsV0522PokemonBlitzleNormal = GenderSettings<"SPAWN_V0522_POKEMON_BLITZLE_NORMAL">;
export type GenderSettingsV0523PokemonZebstrika = GenderSettings<"SPAWN_V0523_POKEMON_ZEBSTRIKA">;
export type GenderSettingsV0523PokemonZebstrikaNormal = GenderSettings<"SPAWN_V0523_POKEMON_ZEBSTRIKA_NORMAL">;
export type GenderSettingsV0524PokemonRoggenrola = GenderSettings<"SPAWN_V0524_POKEMON_ROGGENROLA">;
export type GenderSettingsV0524PokemonRoggenrolaNormal = GenderSettings<"SPAWN_V0524_POKEMON_ROGGENROLA_NORMAL">;
export type GenderSettingsV0525PokemonBoldore = GenderSettings<"SPAWN_V0525_POKEMON_BOLDORE">;
export type GenderSettingsV0525PokemonBoldoreNormal = GenderSettings<"SPAWN_V0525_POKEMON_BOLDORE_NORMAL">;
export type GenderSettingsV0526PokemonGigalith = GenderSettings<"SPAWN_V0526_POKEMON_GIGALITH">;
export type GenderSettingsV0526PokemonGigalithNormal = GenderSettings<"SPAWN_V0526_POKEMON_GIGALITH_NORMAL">;
export type GenderSettingsV0527PokemonWoobat = GenderSettings<"SPAWN_V0527_POKEMON_WOOBAT">;
export type GenderSettingsV0527PokemonWoobatNormal = GenderSettings<"SPAWN_V0527_POKEMON_WOOBAT_NORMAL">;
export type GenderSettingsV0528PokemonSwoobat = GenderSettings<"SPAWN_V0528_POKEMON_SWOOBAT">;
export type GenderSettingsV0528PokemonSwoobatNormal = GenderSettings<"SPAWN_V0528_POKEMON_SWOOBAT_NORMAL">;
export type GenderSettingsV0529PokemonDrilbur = GenderSettings<"SPAWN_V0529_POKEMON_DRILBUR">;
export type GenderSettingsV0529PokemonDrilburNormal = GenderSettings<"SPAWN_V0529_POKEMON_DRILBUR_NORMAL">;
export type GenderSettingsV0530PokemonExcadrill = GenderSettings<"SPAWN_V0530_POKEMON_EXCADRILL">;
export type GenderSettingsV0530PokemonExcadrillNormal = GenderSettings<"SPAWN_V0530_POKEMON_EXCADRILL_NORMAL">;
export type GenderSettingsV0531PokemonAudino = GenderSettings<"SPAWN_V0531_POKEMON_AUDINO">;
export type GenderSettingsV0531PokemonAudinoNormal = GenderSettings<"SPAWN_V0531_POKEMON_AUDINO_NORMAL">;
export type GenderSettingsV0532PokemonTimburr = GenderSettings<"SPAWN_V0532_POKEMON_TIMBURR">;
export type GenderSettingsV0532PokemonTimburrNormal = GenderSettings<"SPAWN_V0532_POKEMON_TIMBURR_NORMAL">;
export type GenderSettingsV0533PokemonGurdurr = GenderSettings<"SPAWN_V0533_POKEMON_GURDURR">;
export type GenderSettingsV0533PokemonGurdurrNormal = GenderSettings<"SPAWN_V0533_POKEMON_GURDURR_NORMAL">;
export type GenderSettingsV0534PokemonConkeldurr = GenderSettings<"SPAWN_V0534_POKEMON_CONKELDURR">;
export type GenderSettingsV0534PokemonConkeldurrNormal = GenderSettings<"SPAWN_V0534_POKEMON_CONKELDURR_NORMAL">;
export type GenderSettingsV0535PokemonTympole = GenderSettings<"SPAWN_V0535_POKEMON_TYMPOLE">;
export type GenderSettingsV0535PokemonTympoleNormal = GenderSettings<"SPAWN_V0535_POKEMON_TYMPOLE_NORMAL">;
export type GenderSettingsV0536PokemonPalpitoad = GenderSettings<"SPAWN_V0536_POKEMON_PALPITOAD">;
export type GenderSettingsV0536PokemonPalpitoadNormal = GenderSettings<"SPAWN_V0536_POKEMON_PALPITOAD_NORMAL">;
export type GenderSettingsV0537PokemonSeismitoad = GenderSettings<"SPAWN_V0537_POKEMON_SEISMITOAD">;
export type GenderSettingsV0537PokemonSeismitoadNormal = GenderSettings<"SPAWN_V0537_POKEMON_SEISMITOAD_NORMAL">;
export type GenderSettingsV0538PokemonThroh = GenderSettings<"SPAWN_V0538_POKEMON_THROH">;
export type GenderSettingsV0538PokemonThrohNormal = GenderSettings<"SPAWN_V0538_POKEMON_THROH_NORMAL">;
export type GenderSettingsV0539PokemonSawk = GenderSettings<"SPAWN_V0539_POKEMON_SAWK">;
export type GenderSettingsV0539PokemonSawkNormal = GenderSettings<"SPAWN_V0539_POKEMON_SAWK_NORMAL">;
export type GenderSettingsV0540PokemonSewaddle = GenderSettings<"SPAWN_V0540_POKEMON_SEWADDLE">;
export type GenderSettingsV0540PokemonSewaddleNormal = GenderSettings<"SPAWN_V0540_POKEMON_SEWADDLE_NORMAL">;
export type GenderSettingsV0541PokemonSwadloon = GenderSettings<"SPAWN_V0541_POKEMON_SWADLOON">;
export type GenderSettingsV0541PokemonSwadloonNormal = GenderSettings<"SPAWN_V0541_POKEMON_SWADLOON_NORMAL">;
export type GenderSettingsV0542PokemonLeavanny = GenderSettings<"SPAWN_V0542_POKEMON_LEAVANNY">;
export type GenderSettingsV0542PokemonLeavannyNormal = GenderSettings<"SPAWN_V0542_POKEMON_LEAVANNY_NORMAL">;
export type GenderSettingsV0543PokemonVenipede = GenderSettings<"SPAWN_V0543_POKEMON_VENIPEDE">;
export type GenderSettingsV0543PokemonVenipedeNormal = GenderSettings<"SPAWN_V0543_POKEMON_VENIPEDE_NORMAL">;
export type GenderSettingsV0544PokemonWhirlipede = GenderSettings<"SPAWN_V0544_POKEMON_WHIRLIPEDE">;
export type GenderSettingsV0544PokemonWhirlipedeNormal = GenderSettings<"SPAWN_V0544_POKEMON_WHIRLIPEDE_NORMAL">;
export type GenderSettingsV0545PokemonScolipede = GenderSettings<"SPAWN_V0545_POKEMON_SCOLIPEDE">;
export type GenderSettingsV0545PokemonScolipedeNormal = GenderSettings<"SPAWN_V0545_POKEMON_SCOLIPEDE_NORMAL">;
export type GenderSettingsV0546PokemonCottonee = GenderSettings<"SPAWN_V0546_POKEMON_COTTONEE">;
export type GenderSettingsV0546PokemonCottoneeNormal = GenderSettings<"SPAWN_V0546_POKEMON_COTTONEE_NORMAL">;
export type GenderSettingsV0547PokemonWhimsicott = GenderSettings<"SPAWN_V0547_POKEMON_WHIMSICOTT">;
export type GenderSettingsV0547PokemonWhimsicottNormal = GenderSettings<"SPAWN_V0547_POKEMON_WHIMSICOTT_NORMAL">;
export type GenderSettingsV0548PokemonPetilil = GenderSettings<"SPAWN_V0548_POKEMON_PETILIL">;
export type GenderSettingsV0548PokemonPetililNormal = GenderSettings<"SPAWN_V0548_POKEMON_PETILIL_NORMAL">;
export type GenderSettingsV0549PokemonLilligant = GenderSettings<"SPAWN_V0549_POKEMON_LILLIGANT">;
export type GenderSettingsV0549PokemonLilligantHisuian = GenderSettings<"SPAWN_V0549_POKEMON_LILLIGANT_HISUIAN">;
export type GenderSettingsV0549PokemonLilligantNormal = GenderSettings<"SPAWN_V0549_POKEMON_LILLIGANT_NORMAL">;
export type GenderSettingsV0550PokemonBasculin = GenderSettings<"SPAWN_V0550_POKEMON_BASCULIN">;
export type GenderSettingsV0550PokemonBasculinBlueStriped = GenderSettings<"SPAWN_V0550_POKEMON_BASCULIN_BLUE_STRIPED">;
export type GenderSettingsV0550PokemonBasculinRedStriped = GenderSettings<"SPAWN_V0550_POKEMON_BASCULIN_RED_STRIPED">;
export type GenderSettingsV0550PokemonBasculinWhiteStriped = GenderSettings<"SPAWN_V0550_POKEMON_BASCULIN_WHITE_STRIPED">;
export type GenderSettingsV0551PokemonSandile = GenderSettings<"SPAWN_V0551_POKEMON_SANDILE">;
export type GenderSettingsV0551PokemonSandileNormal = GenderSettings<"SPAWN_V0551_POKEMON_SANDILE_NORMAL">;
export type GenderSettingsV0552PokemonKrokorok = GenderSettings<"SPAWN_V0552_POKEMON_KROKOROK">;
export type GenderSettingsV0552PokemonKrokorokNormal = GenderSettings<"SPAWN_V0552_POKEMON_KROKOROK_NORMAL">;
export type GenderSettingsV0553PokemonKrookodile = GenderSettings<"SPAWN_V0553_POKEMON_KROOKODILE">;
export type GenderSettingsV0553PokemonKrookodileNormal = GenderSettings<"SPAWN_V0553_POKEMON_KROOKODILE_NORMAL">;
export type GenderSettingsV0554PokemonDarumaka = GenderSettings<"SPAWN_V0554_POKEMON_DARUMAKA">;
export type GenderSettingsV0554PokemonDarumakaGalarian = GenderSettings<"SPAWN_V0554_POKEMON_DARUMAKA_GALARIAN">;
export type GenderSettingsV0554PokemonDarumakaNormal = GenderSettings<"SPAWN_V0554_POKEMON_DARUMAKA_NORMAL">;
export type GenderSettingsV0555PokemonDarmanitan = GenderSettings<"SPAWN_V0555_POKEMON_DARMANITAN">;
export type GenderSettingsV0555PokemonDarmanitanGalarianStandard = GenderSettings<"SPAWN_V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD">;
export type GenderSettingsV0555PokemonDarmanitanGalarianZen = GenderSettings<"SPAWN_V0555_POKEMON_DARMANITAN_GALARIAN_ZEN">;
export type GenderSettingsV0555PokemonDarmanitanStandard = GenderSettings<"SPAWN_V0555_POKEMON_DARMANITAN_STANDARD">;
export type GenderSettingsV0555PokemonDarmanitanZen = GenderSettings<"SPAWN_V0555_POKEMON_DARMANITAN_ZEN">;
export type GenderSettingsV0556PokemonMaractus = GenderSettings<"SPAWN_V0556_POKEMON_MARACTUS">;
export type GenderSettingsV0556PokemonMaractusNormal = GenderSettings<"SPAWN_V0556_POKEMON_MARACTUS_NORMAL">;
export type GenderSettingsV0557PokemonDwebble = GenderSettings<"SPAWN_V0557_POKEMON_DWEBBLE">;
export type GenderSettingsV0557PokemonDwebbleNormal = GenderSettings<"SPAWN_V0557_POKEMON_DWEBBLE_NORMAL">;
export type GenderSettingsV0558PokemonCrustle = GenderSettings<"SPAWN_V0558_POKEMON_CRUSTLE">;
export type GenderSettingsV0558PokemonCrustleNormal = GenderSettings<"SPAWN_V0558_POKEMON_CRUSTLE_NORMAL">;
export type GenderSettingsV0559PokemonScraggy = GenderSettings<"SPAWN_V0559_POKEMON_SCRAGGY">;
export type GenderSettingsV0559PokemonScraggyNormal = GenderSettings<"SPAWN_V0559_POKEMON_SCRAGGY_NORMAL">;
export type GenderSettingsV0560PokemonScrafty = GenderSettings<"SPAWN_V0560_POKEMON_SCRAFTY">;
export type GenderSettingsV0560PokemonScraftyNormal = GenderSettings<"SPAWN_V0560_POKEMON_SCRAFTY_NORMAL">;
export type GenderSettingsV0561PokemonSigilyph = GenderSettings<"SPAWN_V0561_POKEMON_SIGILYPH">;
export type GenderSettingsV0561PokemonSigilyphNormal = GenderSettings<"SPAWN_V0561_POKEMON_SIGILYPH_NORMAL">;
export type GenderSettingsV0562PokemonYamask = GenderSettings<"SPAWN_V0562_POKEMON_YAMASK">;
export type GenderSettingsV0562PokemonYamaskGalarian = GenderSettings<"SPAWN_V0562_POKEMON_YAMASK_GALARIAN">;
export type GenderSettingsV0562PokemonYamaskNormal = GenderSettings<"SPAWN_V0562_POKEMON_YAMASK_NORMAL">;
export type GenderSettingsV0563PokemonCofagrigus = GenderSettings<"SPAWN_V0563_POKEMON_COFAGRIGUS">;
export type GenderSettingsV0563PokemonCofagrigusNormal = GenderSettings<"SPAWN_V0563_POKEMON_COFAGRIGUS_NORMAL">;
export type GenderSettingsV0564PokemonTirtouga = GenderSettings<"SPAWN_V0564_POKEMON_TIRTOUGA">;
export type GenderSettingsV0564PokemonTirtougaNormal = GenderSettings<"SPAWN_V0564_POKEMON_TIRTOUGA_NORMAL">;
export type GenderSettingsV0565PokemonCarracosta = GenderSettings<"SPAWN_V0565_POKEMON_CARRACOSTA">;
export type GenderSettingsV0565PokemonCarracostaNormal = GenderSettings<"SPAWN_V0565_POKEMON_CARRACOSTA_NORMAL">;
export type GenderSettingsV0566PokemonArchen = GenderSettings<"SPAWN_V0566_POKEMON_ARCHEN">;
export type GenderSettingsV0566PokemonArchenNormal = GenderSettings<"SPAWN_V0566_POKEMON_ARCHEN_NORMAL">;
export type GenderSettingsV0567PokemonArcheops = GenderSettings<"SPAWN_V0567_POKEMON_ARCHEOPS">;
export type GenderSettingsV0567PokemonArcheopsNormal = GenderSettings<"SPAWN_V0567_POKEMON_ARCHEOPS_NORMAL">;
export type GenderSettingsV0568PokemonTrubbish = GenderSettings<"SPAWN_V0568_POKEMON_TRUBBISH">;
export type GenderSettingsV0568PokemonTrubbishNormal = GenderSettings<"SPAWN_V0568_POKEMON_TRUBBISH_NORMAL">;
export type GenderSettingsV0569PokemonGarbodor = GenderSettings<"SPAWN_V0569_POKEMON_GARBODOR">;
export type GenderSettingsV0569PokemonGarbodorNormal = GenderSettings<"SPAWN_V0569_POKEMON_GARBODOR_NORMAL">;
export type GenderSettingsV0570PokemonZorua = GenderSettings<"SPAWN_V0570_POKEMON_ZORUA">;
export type GenderSettingsV0570PokemonZoruaHisuian = GenderSettings<"SPAWN_V0570_POKEMON_ZORUA_HISUIAN">;
export type GenderSettingsV0570PokemonZoruaNormal = GenderSettings<"SPAWN_V0570_POKEMON_ZORUA_NORMAL">;
export type GenderSettingsV0571PokemonZoroark = GenderSettings<"SPAWN_V0571_POKEMON_ZOROARK">;
export type GenderSettingsV0571PokemonZoroarkHisuian = GenderSettings<"SPAWN_V0571_POKEMON_ZOROARK_HISUIAN">;
export type GenderSettingsV0571PokemonZoroarkNormal = GenderSettings<"SPAWN_V0571_POKEMON_ZOROARK_NORMAL">;
export type GenderSettingsV0572PokemonMinccino = GenderSettings<"SPAWN_V0572_POKEMON_MINCCINO">;
export type GenderSettingsV0572PokemonMinccinoNormal = GenderSettings<"SPAWN_V0572_POKEMON_MINCCINO_NORMAL">;
export type GenderSettingsV0573PokemonCinccino = GenderSettings<"SPAWN_V0573_POKEMON_CINCCINO">;
export type GenderSettingsV0573PokemonCinccinoNormal = GenderSettings<"SPAWN_V0573_POKEMON_CINCCINO_NORMAL">;
export type GenderSettingsV0574PokemonGothita = GenderSettings<"SPAWN_V0574_POKEMON_GOTHITA">;
export type GenderSettingsV0574PokemonGothitaNormal = GenderSettings<"SPAWN_V0574_POKEMON_GOTHITA_NORMAL">;
export type GenderSettingsV0575PokemonGothorita = GenderSettings<"SPAWN_V0575_POKEMON_GOTHORITA">;
export type GenderSettingsV0575PokemonGothoritaNormal = GenderSettings<"SPAWN_V0575_POKEMON_GOTHORITA_NORMAL">;
export type GenderSettingsV0576PokemonGothitelle = GenderSettings<"SPAWN_V0576_POKEMON_GOTHITELLE">;
export type GenderSettingsV0576PokemonGothitelleNormal = GenderSettings<"SPAWN_V0576_POKEMON_GOTHITELLE_NORMAL">;
export type GenderSettingsV0577PokemonSolosis = GenderSettings<"SPAWN_V0577_POKEMON_SOLOSIS">;
export type GenderSettingsV0577PokemonSolosisNormal = GenderSettings<"SPAWN_V0577_POKEMON_SOLOSIS_NORMAL">;
export type GenderSettingsV0578PokemonDuosion = GenderSettings<"SPAWN_V0578_POKEMON_DUOSION">;
export type GenderSettingsV0578PokemonDuosionNormal = GenderSettings<"SPAWN_V0578_POKEMON_DUOSION_NORMAL">;
export type GenderSettingsV0579PokemonReuniclus = GenderSettings<"SPAWN_V0579_POKEMON_REUNICLUS">;
export type GenderSettingsV0579PokemonReuniclusNormal = GenderSettings<"SPAWN_V0579_POKEMON_REUNICLUS_NORMAL">;
export type GenderSettingsV0580PokemonDucklett = GenderSettings<"SPAWN_V0580_POKEMON_DUCKLETT">;
export type GenderSettingsV0580PokemonDucklettNormal = GenderSettings<"SPAWN_V0580_POKEMON_DUCKLETT_NORMAL">;
export type GenderSettingsV0581PokemonSwanna = GenderSettings<"SPAWN_V0581_POKEMON_SWANNA">;
export type GenderSettingsV0581PokemonSwannaNormal = GenderSettings<"SPAWN_V0581_POKEMON_SWANNA_NORMAL">;
export type GenderSettingsV0582PokemonVanillite = GenderSettings<"SPAWN_V0582_POKEMON_VANILLITE">;
export type GenderSettingsV0582PokemonVanilliteNormal = GenderSettings<"SPAWN_V0582_POKEMON_VANILLITE_NORMAL">;
export type GenderSettingsV0583PokemonVanillish = GenderSettings<"SPAWN_V0583_POKEMON_VANILLISH">;
export type GenderSettingsV0583PokemonVanillishNormal = GenderSettings<"SPAWN_V0583_POKEMON_VANILLISH_NORMAL">;
export type GenderSettingsV0584PokemonVanilluxe = GenderSettings<"SPAWN_V0584_POKEMON_VANILLUXE">;
export type GenderSettingsV0584PokemonVanilluxeNormal = GenderSettings<"SPAWN_V0584_POKEMON_VANILLUXE_NORMAL">;
export type GenderSettingsV0585PokemonDeerling = GenderSettings<"SPAWN_V0585_POKEMON_DEERLING">;
export type GenderSettingsV0585PokemonDeerlingAutumn = GenderSettings<"SPAWN_V0585_POKEMON_DEERLING_AUTUMN">;
export type GenderSettingsV0585PokemonDeerlingSpring = GenderSettings<"SPAWN_V0585_POKEMON_DEERLING_SPRING">;
export type GenderSettingsV0585PokemonDeerlingSummer = GenderSettings<"SPAWN_V0585_POKEMON_DEERLING_SUMMER">;
export type GenderSettingsV0585PokemonDeerlingWinter = GenderSettings<"SPAWN_V0585_POKEMON_DEERLING_WINTER">;
export type GenderSettingsV0586PokemonSawsbuck = GenderSettings<"SPAWN_V0586_POKEMON_SAWSBUCK">;
export type GenderSettingsV0586PokemonSawsbuckAutumn = GenderSettings<"SPAWN_V0586_POKEMON_SAWSBUCK_AUTUMN">;
export type GenderSettingsV0586PokemonSawsbuckSpring = GenderSettings<"SPAWN_V0586_POKEMON_SAWSBUCK_SPRING">;
export type GenderSettingsV0586PokemonSawsbuckSummer = GenderSettings<"SPAWN_V0586_POKEMON_SAWSBUCK_SUMMER">;
export type GenderSettingsV0586PokemonSawsbuckWinter = GenderSettings<"SPAWN_V0586_POKEMON_SAWSBUCK_WINTER">;
export type GenderSettingsV0587PokemonEmolga = GenderSettings<"SPAWN_V0587_POKEMON_EMOLGA">;
export type GenderSettingsV0587PokemonEmolgaNormal = GenderSettings<"SPAWN_V0587_POKEMON_EMOLGA_NORMAL">;
export type GenderSettingsV0588PokemonKarrablast = GenderSettings<"SPAWN_V0588_POKEMON_KARRABLAST">;
export type GenderSettingsV0588PokemonKarrablastNormal = GenderSettings<"SPAWN_V0588_POKEMON_KARRABLAST_NORMAL">;
export type GenderSettingsV0589PokemonEscavalier = GenderSettings<"SPAWN_V0589_POKEMON_ESCAVALIER">;
export type GenderSettingsV0589PokemonEscavalierNormal = GenderSettings<"SPAWN_V0589_POKEMON_ESCAVALIER_NORMAL">;
export type GenderSettingsV0590PokemonFoongus = GenderSettings<"SPAWN_V0590_POKEMON_FOONGUS">;
export type GenderSettingsV0590PokemonFoongusNormal = GenderSettings<"SPAWN_V0590_POKEMON_FOONGUS_NORMAL">;
export type GenderSettingsV0591PokemonAmoonguss = GenderSettings<"SPAWN_V0591_POKEMON_AMOONGUSS">;
export type GenderSettingsV0591PokemonAmoongussNormal = GenderSettings<"SPAWN_V0591_POKEMON_AMOONGUSS_NORMAL">;
export type GenderSettingsV0592PokemonFrillish = GenderSettings<"SPAWN_V0592_POKEMON_FRILLISH">;
export type GenderSettingsV0592PokemonFrillishFemale = GenderSettings<"SPAWN_V0592_POKEMON_FRILLISH_FEMALE">;
export type GenderSettingsV0592PokemonFrillishNormal = GenderSettings<"SPAWN_V0592_POKEMON_FRILLISH_NORMAL">;
export type GenderSettingsV0593PokemonJellicent = GenderSettings<"SPAWN_V0593_POKEMON_JELLICENT">;
export type GenderSettingsV0593PokemonJellicentFemale = GenderSettings<"SPAWN_V0593_POKEMON_JELLICENT_FEMALE">;
export type GenderSettingsV0593PokemonJellicentNormal = GenderSettings<"SPAWN_V0593_POKEMON_JELLICENT_NORMAL">;
export type GenderSettingsV0594PokemonAlomomola = GenderSettings<"SPAWN_V0594_POKEMON_ALOMOMOLA">;
export type GenderSettingsV0594PokemonAlomomolaNormal = GenderSettings<"SPAWN_V0594_POKEMON_ALOMOMOLA_NORMAL">;
export type GenderSettingsV0595PokemonJoltik = GenderSettings<"SPAWN_V0595_POKEMON_JOLTIK">;
export type GenderSettingsV0595PokemonJoltikNormal = GenderSettings<"SPAWN_V0595_POKEMON_JOLTIK_NORMAL">;
export type GenderSettingsV0596PokemonGalvantula = GenderSettings<"SPAWN_V0596_POKEMON_GALVANTULA">;
export type GenderSettingsV0596PokemonGalvantulaNormal = GenderSettings<"SPAWN_V0596_POKEMON_GALVANTULA_NORMAL">;
export type GenderSettingsV0597PokemonFerroseed = GenderSettings<"SPAWN_V0597_POKEMON_FERROSEED">;
export type GenderSettingsV0597PokemonFerroseedNormal = GenderSettings<"SPAWN_V0597_POKEMON_FERROSEED_NORMAL">;
export type GenderSettingsV0598PokemonFerrothorn = GenderSettings<"SPAWN_V0598_POKEMON_FERROTHORN">;
export type GenderSettingsV0598PokemonFerrothornNormal = GenderSettings<"SPAWN_V0598_POKEMON_FERROTHORN_NORMAL">;
export type GenderSettingsV0599PokemonKlink = GenderSettings<"SPAWN_V0599_POKEMON_KLINK">;
export type GenderSettingsV0599PokemonKlinkNormal = GenderSettings<"SPAWN_V0599_POKEMON_KLINK_NORMAL">;
export type GenderSettingsV0600PokemonKlang = GenderSettings<"SPAWN_V0600_POKEMON_KLANG">;
export type GenderSettingsV0600PokemonKlangNormal = GenderSettings<"SPAWN_V0600_POKEMON_KLANG_NORMAL">;
export type GenderSettingsV0601PokemonKlinklang = GenderSettings<"SPAWN_V0601_POKEMON_KLINKLANG">;
export type GenderSettingsV0601PokemonKlinklangNormal = GenderSettings<"SPAWN_V0601_POKEMON_KLINKLANG_NORMAL">;
export type GenderSettingsV0602PokemonTynamo = GenderSettings<"SPAWN_V0602_POKEMON_TYNAMO">;
export type GenderSettingsV0602PokemonTynamoNormal = GenderSettings<"SPAWN_V0602_POKEMON_TYNAMO_NORMAL">;
export type GenderSettingsV0603PokemonEelektrik = GenderSettings<"SPAWN_V0603_POKEMON_EELEKTRIK">;
export type GenderSettingsV0603PokemonEelektrikNormal = GenderSettings<"SPAWN_V0603_POKEMON_EELEKTRIK_NORMAL">;
export type GenderSettingsV0604PokemonEelektross = GenderSettings<"SPAWN_V0604_POKEMON_EELEKTROSS">;
export type GenderSettingsV0604PokemonEelektrossNormal = GenderSettings<"SPAWN_V0604_POKEMON_EELEKTROSS_NORMAL">;
export type GenderSettingsV0605PokemonElgyem = GenderSettings<"SPAWN_V0605_POKEMON_ELGYEM">;
export type GenderSettingsV0605PokemonElgyemNormal = GenderSettings<"SPAWN_V0605_POKEMON_ELGYEM_NORMAL">;
export type GenderSettingsV0606PokemonBeheeyem = GenderSettings<"SPAWN_V0606_POKEMON_BEHEEYEM">;
export type GenderSettingsV0606PokemonBeheeyemNormal = GenderSettings<"SPAWN_V0606_POKEMON_BEHEEYEM_NORMAL">;
export type GenderSettingsV0607PokemonLitwick = GenderSettings<"SPAWN_V0607_POKEMON_LITWICK">;
export type GenderSettingsV0607PokemonLitwickNormal = GenderSettings<"SPAWN_V0607_POKEMON_LITWICK_NORMAL">;
export type GenderSettingsV0608PokemonLampent = GenderSettings<"SPAWN_V0608_POKEMON_LAMPENT">;
export type GenderSettingsV0608PokemonLampentNormal = GenderSettings<"SPAWN_V0608_POKEMON_LAMPENT_NORMAL">;
export type GenderSettingsV0609PokemonChandelure = GenderSettings<"SPAWN_V0609_POKEMON_CHANDELURE">;
export type GenderSettingsV0609PokemonChandelureNormal = GenderSettings<"SPAWN_V0609_POKEMON_CHANDELURE_NORMAL">;
export type GenderSettingsV0610PokemonAxew = GenderSettings<"SPAWN_V0610_POKEMON_AXEW">;
export type GenderSettingsV0610PokemonAxewNormal = GenderSettings<"SPAWN_V0610_POKEMON_AXEW_NORMAL">;
export type GenderSettingsV0611PokemonFraxure = GenderSettings<"SPAWN_V0611_POKEMON_FRAXURE">;
export type GenderSettingsV0611PokemonFraxureNormal = GenderSettings<"SPAWN_V0611_POKEMON_FRAXURE_NORMAL">;
export type GenderSettingsV0612PokemonHaxorus = GenderSettings<"SPAWN_V0612_POKEMON_HAXORUS">;
export type GenderSettingsV0612PokemonHaxorusNormal = GenderSettings<"SPAWN_V0612_POKEMON_HAXORUS_NORMAL">;
export type GenderSettingsV0613PokemonCubchoo = GenderSettings<"SPAWN_V0613_POKEMON_CUBCHOO">;
export type GenderSettingsV0613PokemonCubchooNormal = GenderSettings<"SPAWN_V0613_POKEMON_CUBCHOO_NORMAL">;
export type GenderSettingsV0613PokemonCubchooWinter2020 = GenderSettings<"SPAWN_V0613_POKEMON_CUBCHOO_WINTER_2020">;
export type GenderSettingsV0614PokemonBeartic = GenderSettings<"SPAWN_V0614_POKEMON_BEARTIC">;
export type GenderSettingsV0614PokemonBearticNormal = GenderSettings<"SPAWN_V0614_POKEMON_BEARTIC_NORMAL">;
export type GenderSettingsV0614PokemonBearticWinter2020 = GenderSettings<"SPAWN_V0614_POKEMON_BEARTIC_WINTER_2020">;
export type GenderSettingsV0615PokemonCryogonal = GenderSettings<"SPAWN_V0615_POKEMON_CRYOGONAL">;
export type GenderSettingsV0615PokemonCryogonalNormal = GenderSettings<"SPAWN_V0615_POKEMON_CRYOGONAL_NORMAL">;
export type GenderSettingsV0616PokemonShelmet = GenderSettings<"SPAWN_V0616_POKEMON_SHELMET">;
export type GenderSettingsV0616PokemonShelmetNormal = GenderSettings<"SPAWN_V0616_POKEMON_SHELMET_NORMAL">;
export type GenderSettingsV0617PokemonAccelgor = GenderSettings<"SPAWN_V0617_POKEMON_ACCELGOR">;
export type GenderSettingsV0617PokemonAccelgorNormal = GenderSettings<"SPAWN_V0617_POKEMON_ACCELGOR_NORMAL">;
export type GenderSettingsV0618PokemonStunfisk = GenderSettings<"SPAWN_V0618_POKEMON_STUNFISK">;
export type GenderSettingsV0618PokemonStunfiskGalarian = GenderSettings<"SPAWN_V0618_POKEMON_STUNFISK_GALARIAN">;
export type GenderSettingsV0618PokemonStunfiskNormal = GenderSettings<"SPAWN_V0618_POKEMON_STUNFISK_NORMAL">;
export type GenderSettingsV0619PokemonMienfoo = GenderSettings<"SPAWN_V0619_POKEMON_MIENFOO">;
export type GenderSettingsV0619PokemonMienfooNormal = GenderSettings<"SPAWN_V0619_POKEMON_MIENFOO_NORMAL">;
export type GenderSettingsV0620PokemonMienshao = GenderSettings<"SPAWN_V0620_POKEMON_MIENSHAO">;
export type GenderSettingsV0620PokemonMienshaoNormal = GenderSettings<"SPAWN_V0620_POKEMON_MIENSHAO_NORMAL">;
export type GenderSettingsV0621PokemonDruddigon = GenderSettings<"SPAWN_V0621_POKEMON_DRUDDIGON">;
export type GenderSettingsV0621PokemonDruddigonNormal = GenderSettings<"SPAWN_V0621_POKEMON_DRUDDIGON_NORMAL">;
export type GenderSettingsV0622PokemonGolett = GenderSettings<"SPAWN_V0622_POKEMON_GOLETT">;
export type GenderSettingsV0622PokemonGolettNormal = GenderSettings<"SPAWN_V0622_POKEMON_GOLETT_NORMAL">;
export type GenderSettingsV0623PokemonGolurk = GenderSettings<"SPAWN_V0623_POKEMON_GOLURK">;
export type GenderSettingsV0623PokemonGolurkNormal = GenderSettings<"SPAWN_V0623_POKEMON_GOLURK_NORMAL">;
export type GenderSettingsV0624PokemonPawniard = GenderSettings<"SPAWN_V0624_POKEMON_PAWNIARD">;
export type GenderSettingsV0624PokemonPawniardNormal = GenderSettings<"SPAWN_V0624_POKEMON_PAWNIARD_NORMAL">;
export type GenderSettingsV0625PokemonBisharp = GenderSettings<"SPAWN_V0625_POKEMON_BISHARP">;
export type GenderSettingsV0625PokemonBisharpNormal = GenderSettings<"SPAWN_V0625_POKEMON_BISHARP_NORMAL">;
export type GenderSettingsV0626PokemonBouffalant = GenderSettings<"SPAWN_V0626_POKEMON_BOUFFALANT">;
export type GenderSettingsV0626PokemonBouffalantNormal = GenderSettings<"SPAWN_V0626_POKEMON_BOUFFALANT_NORMAL">;
export type GenderSettingsV0627PokemonRufflet = GenderSettings<"SPAWN_V0627_POKEMON_RUFFLET">;
export type GenderSettingsV0627PokemonRuffletNormal = GenderSettings<"SPAWN_V0627_POKEMON_RUFFLET_NORMAL">;
export type GenderSettingsV0628PokemonBraviary = GenderSettings<"SPAWN_V0628_POKEMON_BRAVIARY">;
export type GenderSettingsV0628PokemonBraviaryHisuian = GenderSettings<"SPAWN_V0628_POKEMON_BRAVIARY_HISUIAN">;
export type GenderSettingsV0628PokemonBraviaryNormal = GenderSettings<"SPAWN_V0628_POKEMON_BRAVIARY_NORMAL">;
export type GenderSettingsV0629PokemonVullaby = GenderSettings<"SPAWN_V0629_POKEMON_VULLABY">;
export type GenderSettingsV0629PokemonVullabyNormal = GenderSettings<"SPAWN_V0629_POKEMON_VULLABY_NORMAL">;
export type GenderSettingsV0630PokemonMandibuzz = GenderSettings<"SPAWN_V0630_POKEMON_MANDIBUZZ">;
export type GenderSettingsV0630PokemonMandibuzzNormal = GenderSettings<"SPAWN_V0630_POKEMON_MANDIBUZZ_NORMAL">;
export type GenderSettingsV0631PokemonHeatmor = GenderSettings<"SPAWN_V0631_POKEMON_HEATMOR">;
export type GenderSettingsV0631PokemonHeatmorNormal = GenderSettings<"SPAWN_V0631_POKEMON_HEATMOR_NORMAL">;
export type GenderSettingsV0632PokemonDurant = GenderSettings<"SPAWN_V0632_POKEMON_DURANT">;
export type GenderSettingsV0632PokemonDurantNormal = GenderSettings<"SPAWN_V0632_POKEMON_DURANT_NORMAL">;
export type GenderSettingsV0633PokemonDeino = GenderSettings<"SPAWN_V0633_POKEMON_DEINO">;
export type GenderSettingsV0633PokemonDeinoNormal = GenderSettings<"SPAWN_V0633_POKEMON_DEINO_NORMAL">;
export type GenderSettingsV0634PokemonZweilous = GenderSettings<"SPAWN_V0634_POKEMON_ZWEILOUS">;
export type GenderSettingsV0634PokemonZweilousNormal = GenderSettings<"SPAWN_V0634_POKEMON_ZWEILOUS_NORMAL">;
export type GenderSettingsV0635PokemonHydreigon = GenderSettings<"SPAWN_V0635_POKEMON_HYDREIGON">;
export type GenderSettingsV0635PokemonHydreigonNormal = GenderSettings<"SPAWN_V0635_POKEMON_HYDREIGON_NORMAL">;
export type GenderSettingsV0636PokemonLarvesta = GenderSettings<"SPAWN_V0636_POKEMON_LARVESTA">;
export type GenderSettingsV0636PokemonLarvestaNormal = GenderSettings<"SPAWN_V0636_POKEMON_LARVESTA_NORMAL">;
export type GenderSettingsV0637PokemonVolcarona = GenderSettings<"SPAWN_V0637_POKEMON_VOLCARONA">;
export type GenderSettingsV0637PokemonVolcaronaNormal = GenderSettings<"SPAWN_V0637_POKEMON_VOLCARONA_NORMAL">;
export type GenderSettingsV0638PokemonCobalion = GenderSettings<"SPAWN_V0638_POKEMON_COBALION">;
export type GenderSettingsV0638PokemonCobalionNormal = GenderSettings<"SPAWN_V0638_POKEMON_COBALION_NORMAL">;
export type GenderSettingsV0639PokemonTerrakion = GenderSettings<"SPAWN_V0639_POKEMON_TERRAKION">;
export type GenderSettingsV0639PokemonTerrakionNormal = GenderSettings<"SPAWN_V0639_POKEMON_TERRAKION_NORMAL">;
export type GenderSettingsV0640PokemonVirizion = GenderSettings<"SPAWN_V0640_POKEMON_VIRIZION">;
export type GenderSettingsV0640PokemonVirizionNormal = GenderSettings<"SPAWN_V0640_POKEMON_VIRIZION_NORMAL">;
export type GenderSettingsV0641PokemonTornadus = GenderSettings<"SPAWN_V0641_POKEMON_TORNADUS">;
export type GenderSettingsV0641PokemonTornadusIncarnate = GenderSettings<"SPAWN_V0641_POKEMON_TORNADUS_INCARNATE">;
export type GenderSettingsV0641PokemonTornadusTherian = GenderSettings<"SPAWN_V0641_POKEMON_TORNADUS_THERIAN">;
export type GenderSettingsV0642PokemonThundurus = GenderSettings<"SPAWN_V0642_POKEMON_THUNDURUS">;
export type GenderSettingsV0642PokemonThundurusIncarnate = GenderSettings<"SPAWN_V0642_POKEMON_THUNDURUS_INCARNATE">;
export type GenderSettingsV0642PokemonThundurusTherian = GenderSettings<"SPAWN_V0642_POKEMON_THUNDURUS_THERIAN">;
export type GenderSettingsV0643PokemonReshiram = GenderSettings<"SPAWN_V0643_POKEMON_RESHIRAM">;
export type GenderSettingsV0643PokemonReshiramNormal = GenderSettings<"SPAWN_V0643_POKEMON_RESHIRAM_NORMAL">;
export type GenderSettingsV0644PokemonZekrom = GenderSettings<"SPAWN_V0644_POKEMON_ZEKROM">;
export type GenderSettingsV0644PokemonZekromNormal = GenderSettings<"SPAWN_V0644_POKEMON_ZEKROM_NORMAL">;
export type GenderSettingsV0645PokemonLandorus = GenderSettings<"SPAWN_V0645_POKEMON_LANDORUS">;
export type GenderSettingsV0645PokemonLandorusIncarnate = GenderSettings<"SPAWN_V0645_POKEMON_LANDORUS_INCARNATE">;
export type GenderSettingsV0645PokemonLandorusTherian = GenderSettings<"SPAWN_V0645_POKEMON_LANDORUS_THERIAN">;
export type GenderSettingsV0646PokemonKyurem = GenderSettings<"SPAWN_V0646_POKEMON_KYUREM">;
export type GenderSettingsV0646PokemonKyuremBlack = GenderSettings<"SPAWN_V0646_POKEMON_KYUREM_BLACK">;
export type GenderSettingsV0646PokemonKyuremNormal = GenderSettings<"SPAWN_V0646_POKEMON_KYUREM_NORMAL">;
export type GenderSettingsV0646PokemonKyuremWhite = GenderSettings<"SPAWN_V0646_POKEMON_KYUREM_WHITE">;
export type GenderSettingsV0647PokemonKeldeo = GenderSettings<"SPAWN_V0647_POKEMON_KELDEO">;
export type GenderSettingsV0647PokemonKeldeoOrdinary = GenderSettings<"SPAWN_V0647_POKEMON_KELDEO_ORDINARY">;
export type GenderSettingsV0647PokemonKeldeoResolute = GenderSettings<"SPAWN_V0647_POKEMON_KELDEO_RESOLUTE">;
export type GenderSettingsV0648PokemonMeloetta = GenderSettings<"SPAWN_V0648_POKEMON_MELOETTA">;
export type GenderSettingsV0648PokemonMeloettaAria = GenderSettings<"SPAWN_V0648_POKEMON_MELOETTA_ARIA">;
export type GenderSettingsV0648PokemonMeloettaPirouette = GenderSettings<"SPAWN_V0648_POKEMON_MELOETTA_PIROUETTE">;
export type GenderSettingsV0649PokemonGenesect = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT">;
export type GenderSettingsV0649PokemonGenesectBurn = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT_BURN">;
export type GenderSettingsV0649PokemonGenesectChill = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT_CHILL">;
export type GenderSettingsV0649PokemonGenesectDouse = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT_DOUSE">;
export type GenderSettingsV0649PokemonGenesectNormal = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT_NORMAL">;
export type GenderSettingsV0649PokemonGenesectShock = GenderSettings<"SPAWN_V0649_POKEMON_GENESECT_SHOCK">;
export type GenderSettingsV0650PokemonChespin = GenderSettings<"SPAWN_V0650_POKEMON_CHESPIN">;
export type GenderSettingsV0650PokemonChespinNormal = GenderSettings<"SPAWN_V0650_POKEMON_CHESPIN_NORMAL">;
export type GenderSettingsV0651PokemonQuilladin = GenderSettings<"SPAWN_V0651_POKEMON_QUILLADIN">;
export type GenderSettingsV0651PokemonQuilladinNormal = GenderSettings<"SPAWN_V0651_POKEMON_QUILLADIN_NORMAL">;
export type GenderSettingsV0652PokemonChesnaught = GenderSettings<"SPAWN_V0652_POKEMON_CHESNAUGHT">;
export type GenderSettingsV0652PokemonChesnaughtNormal = GenderSettings<"SPAWN_V0652_POKEMON_CHESNAUGHT_NORMAL">;
export type GenderSettingsV0653PokemonFennekin = GenderSettings<"SPAWN_V0653_POKEMON_FENNEKIN">;
export type GenderSettingsV0653PokemonFennekinNormal = GenderSettings<"SPAWN_V0653_POKEMON_FENNEKIN_NORMAL">;
export type GenderSettingsV0654PokemonBraixen = GenderSettings<"SPAWN_V0654_POKEMON_BRAIXEN">;
export type GenderSettingsV0654PokemonBraixenNormal = GenderSettings<"SPAWN_V0654_POKEMON_BRAIXEN_NORMAL">;
export type GenderSettingsV0655PokemonDelphox = GenderSettings<"SPAWN_V0655_POKEMON_DELPHOX">;
export type GenderSettingsV0655PokemonDelphoxNormal = GenderSettings<"SPAWN_V0655_POKEMON_DELPHOX_NORMAL">;
export type GenderSettingsV0656PokemonFroakie = GenderSettings<"SPAWN_V0656_POKEMON_FROAKIE">;
export type GenderSettingsV0656PokemonFroakieNormal = GenderSettings<"SPAWN_V0656_POKEMON_FROAKIE_NORMAL">;
export type GenderSettingsV0657PokemonFrogadier = GenderSettings<"SPAWN_V0657_POKEMON_FROGADIER">;
export type GenderSettingsV0657PokemonFrogadierNormal = GenderSettings<"SPAWN_V0657_POKEMON_FROGADIER_NORMAL">;
export type GenderSettingsV0658PokemonGreninja = GenderSettings<"SPAWN_V0658_POKEMON_GRENINJA">;
export type GenderSettingsV0658PokemonGreninjaNormal = GenderSettings<"SPAWN_V0658_POKEMON_GRENINJA_NORMAL">;
export type GenderSettingsV0659PokemonBunnelby = GenderSettings<"SPAWN_V0659_POKEMON_BUNNELBY">;
export type GenderSettingsV0659PokemonBunnelbyNormal = GenderSettings<"SPAWN_V0659_POKEMON_BUNNELBY_NORMAL">;
export type GenderSettingsV0660PokemonDiggersby = GenderSettings<"SPAWN_V0660_POKEMON_DIGGERSBY">;
export type GenderSettingsV0660PokemonDiggersbyNormal = GenderSettings<"SPAWN_V0660_POKEMON_DIGGERSBY_NORMAL">;
export type GenderSettingsV0661PokemonFletchling = GenderSettings<"SPAWN_V0661_POKEMON_FLETCHLING">;
export type GenderSettingsV0661PokemonFletchlingNormal = GenderSettings<"SPAWN_V0661_POKEMON_FLETCHLING_NORMAL">;
export type GenderSettingsV0662PokemonFletchinder = GenderSettings<"SPAWN_V0662_POKEMON_FLETCHINDER">;
export type GenderSettingsV0662PokemonFletchinderNormal = GenderSettings<"SPAWN_V0662_POKEMON_FLETCHINDER_NORMAL">;
export type GenderSettingsV0663PokemonTalonflame = GenderSettings<"SPAWN_V0663_POKEMON_TALONFLAME">;
export type GenderSettingsV0663PokemonTalonflameNormal = GenderSettings<"SPAWN_V0663_POKEMON_TALONFLAME_NORMAL">;
export type GenderSettingsV0664PokemonScatterbug = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG">;
export type GenderSettingsV0664PokemonScatterbugArchipelago = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_ARCHIPELAGO">;
export type GenderSettingsV0664PokemonScatterbugContinental = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_CONTINENTAL">;
export type GenderSettingsV0664PokemonScatterbugElegant = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_ELEGANT">;
export type GenderSettingsV0664PokemonScatterbugFancy = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_FANCY">;
export type GenderSettingsV0664PokemonScatterbugGarden = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_GARDEN">;
export type GenderSettingsV0664PokemonScatterbugHighPlains = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_HIGH_PLAINS">;
export type GenderSettingsV0664PokemonScatterbugIcySnow = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_ICY_SNOW">;
export type GenderSettingsV0664PokemonScatterbugJungle = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_JUNGLE">;
export type GenderSettingsV0664PokemonScatterbugMarine = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_MARINE">;
export type GenderSettingsV0664PokemonScatterbugMeadow = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_MEADOW">;
export type GenderSettingsV0664PokemonScatterbugModern = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_MODERN">;
export type GenderSettingsV0664PokemonScatterbugMonsoon = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_MONSOON">;
export type GenderSettingsV0664PokemonScatterbugOcean = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_OCEAN">;
export type GenderSettingsV0664PokemonScatterbugPokeball = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_POKEBALL">;
export type GenderSettingsV0664PokemonScatterbugPolar = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_POLAR">;
export type GenderSettingsV0664PokemonScatterbugRiver = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_RIVER">;
export type GenderSettingsV0664PokemonScatterbugSandstorm = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_SANDSTORM">;
export type GenderSettingsV0664PokemonScatterbugSavanna = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_SAVANNA">;
export type GenderSettingsV0664PokemonScatterbugSun = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_SUN">;
export type GenderSettingsV0664PokemonScatterbugTundra = GenderSettings<"SPAWN_V0664_POKEMON_SCATTERBUG_TUNDRA">;
export type GenderSettingsV0665PokemonSpewpa = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA">;
export type GenderSettingsV0665PokemonSpewpaArchipelago = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_ARCHIPELAGO">;
export type GenderSettingsV0665PokemonSpewpaContinental = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_CONTINENTAL">;
export type GenderSettingsV0665PokemonSpewpaElegant = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_ELEGANT">;
export type GenderSettingsV0665PokemonSpewpaFancy = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_FANCY">;
export type GenderSettingsV0665PokemonSpewpaGarden = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_GARDEN">;
export type GenderSettingsV0665PokemonSpewpaHighPlains = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_HIGH_PLAINS">;
export type GenderSettingsV0665PokemonSpewpaIcySnow = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_ICY_SNOW">;
export type GenderSettingsV0665PokemonSpewpaJungle = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_JUNGLE">;
export type GenderSettingsV0665PokemonSpewpaMarine = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_MARINE">;
export type GenderSettingsV0665PokemonSpewpaMeadow = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_MEADOW">;
export type GenderSettingsV0665PokemonSpewpaModern = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_MODERN">;
export type GenderSettingsV0665PokemonSpewpaMonsoon = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_MONSOON">;
export type GenderSettingsV0665PokemonSpewpaOcean = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_OCEAN">;
export type GenderSettingsV0665PokemonSpewpaPokeball = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_POKEBALL">;
export type GenderSettingsV0665PokemonSpewpaPolar = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_POLAR">;
export type GenderSettingsV0665PokemonSpewpaRiver = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_RIVER">;
export type GenderSettingsV0665PokemonSpewpaSandstorm = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_SANDSTORM">;
export type GenderSettingsV0665PokemonSpewpaSavanna = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_SAVANNA">;
export type GenderSettingsV0665PokemonSpewpaSun = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_SUN">;
export type GenderSettingsV0665PokemonSpewpaTundra = GenderSettings<"SPAWN_V0665_POKEMON_SPEWPA_TUNDRA">;
export type GenderSettingsV0666PokemonVivillon = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON">;
export type GenderSettingsV0666PokemonVivillonArchipelago = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_ARCHIPELAGO">;
export type GenderSettingsV0666PokemonVivillonContinental = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_CONTINENTAL">;
export type GenderSettingsV0666PokemonVivillonElegant = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_ELEGANT">;
export type GenderSettingsV0666PokemonVivillonFancy = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_FANCY">;
export type GenderSettingsV0666PokemonVivillonGarden = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_GARDEN">;
export type GenderSettingsV0666PokemonVivillonHighPlains = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_HIGH_PLAINS">;
export type GenderSettingsV0666PokemonVivillonIcySnow = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_ICY_SNOW">;
export type GenderSettingsV0666PokemonVivillonJungle = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_JUNGLE">;
export type GenderSettingsV0666PokemonVivillonMarine = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_MARINE">;
export type GenderSettingsV0666PokemonVivillonMeadow = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_MEADOW">;
export type GenderSettingsV0666PokemonVivillonModern = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_MODERN">;
export type GenderSettingsV0666PokemonVivillonMonsoon = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_MONSOON">;
export type GenderSettingsV0666PokemonVivillonOcean = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_OCEAN">;
export type GenderSettingsV0666PokemonVivillonPokeball = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_POKEBALL">;
export type GenderSettingsV0666PokemonVivillonPolar = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_POLAR">;
export type GenderSettingsV0666PokemonVivillonRiver = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_RIVER">;
export type GenderSettingsV0666PokemonVivillonSandstorm = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_SANDSTORM">;
export type GenderSettingsV0666PokemonVivillonSavanna = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_SAVANNA">;
export type GenderSettingsV0666PokemonVivillonSun = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_SUN">;
export type GenderSettingsV0666PokemonVivillonTundra = GenderSettings<"SPAWN_V0666_POKEMON_VIVILLON_TUNDRA">;
export type GenderSettingsV0667PokemonLitleo = GenderSettings<"SPAWN_V0667_POKEMON_LITLEO">;
export type GenderSettingsV0667PokemonLitleoNormal = GenderSettings<"SPAWN_V0667_POKEMON_LITLEO_NORMAL">;
export type GenderSettingsV0668PokemonPyroar = GenderSettings<"SPAWN_V0668_POKEMON_PYROAR">;
export type GenderSettingsV0668PokemonPyroarFemale = GenderSettings<"SPAWN_V0668_POKEMON_PYROAR_FEMALE">;
export type GenderSettingsV0668PokemonPyroarNormal = GenderSettings<"SPAWN_V0668_POKEMON_PYROAR_NORMAL">;
export type GenderSettingsV0669PokemonFlabebe = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE">;
export type GenderSettingsV0669PokemonFlabebeBlue = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE_BLUE">;
export type GenderSettingsV0669PokemonFlabebeOrange = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE_ORANGE">;
export type GenderSettingsV0669PokemonFlabebeRed = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE_RED">;
export type GenderSettingsV0669PokemonFlabebeWhite = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE_WHITE">;
export type GenderSettingsV0669PokemonFlabebeYellow = GenderSettings<"SPAWN_V0669_POKEMON_FLABEBE_YELLOW">;
export type GenderSettingsV0670PokemonFloette = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE">;
export type GenderSettingsV0670PokemonFloetteBlue = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE_BLUE">;
export type GenderSettingsV0670PokemonFloetteOrange = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE_ORANGE">;
export type GenderSettingsV0670PokemonFloetteRed = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE_RED">;
export type GenderSettingsV0670PokemonFloetteWhite = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE_WHITE">;
export type GenderSettingsV0670PokemonFloetteYellow = GenderSettings<"SPAWN_V0670_POKEMON_FLOETTE_YELLOW">;
export type GenderSettingsV0671PokemonFlorges = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES">;
export type GenderSettingsV0671PokemonFlorgesBlue = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES_BLUE">;
export type GenderSettingsV0671PokemonFlorgesOrange = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES_ORANGE">;
export type GenderSettingsV0671PokemonFlorgesRed = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES_RED">;
export type GenderSettingsV0671PokemonFlorgesWhite = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES_WHITE">;
export type GenderSettingsV0671PokemonFlorgesYellow = GenderSettings<"SPAWN_V0671_POKEMON_FLORGES_YELLOW">;
export type GenderSettingsV0672PokemonSkiddo = GenderSettings<"SPAWN_V0672_POKEMON_SKIDDO">;
export type GenderSettingsV0672PokemonSkiddoNormal = GenderSettings<"SPAWN_V0672_POKEMON_SKIDDO_NORMAL">;
export type GenderSettingsV0673PokemonGogoat = GenderSettings<"SPAWN_V0673_POKEMON_GOGOAT">;
export type GenderSettingsV0673PokemonGogoatNormal = GenderSettings<"SPAWN_V0673_POKEMON_GOGOAT_NORMAL">;
export type GenderSettingsV0674PokemonPancham = GenderSettings<"SPAWN_V0674_POKEMON_PANCHAM">;
export type GenderSettingsV0674PokemonPanchamNormal = GenderSettings<"SPAWN_V0674_POKEMON_PANCHAM_NORMAL">;
export type GenderSettingsV0675PokemonPangoro = GenderSettings<"SPAWN_V0675_POKEMON_PANGORO">;
export type GenderSettingsV0675PokemonPangoroNormal = GenderSettings<"SPAWN_V0675_POKEMON_PANGORO_NORMAL">;
export type GenderSettingsV0676PokemonFurfrou = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU">;
export type GenderSettingsV0676PokemonFurfrouDandy = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_DANDY">;
export type GenderSettingsV0676PokemonFurfrouDebutante = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_DEBUTANTE">;
export type GenderSettingsV0676PokemonFurfrouDiamond = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_DIAMOND">;
export type GenderSettingsV0676PokemonFurfrouHeart = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_HEART">;
export type GenderSettingsV0676PokemonFurfrouKabuki = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_KABUKI">;
export type GenderSettingsV0676PokemonFurfrouLaReine = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_LA_REINE">;
export type GenderSettingsV0676PokemonFurfrouMatron = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_MATRON">;
export type GenderSettingsV0676PokemonFurfrouNatural = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_NATURAL">;
export type GenderSettingsV0676PokemonFurfrouPharaoh = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_PHARAOH">;
export type GenderSettingsV0676PokemonFurfrouStar = GenderSettings<"SPAWN_V0676_POKEMON_FURFROU_STAR">;
export type GenderSettingsV0677PokemonEspurr = GenderSettings<"SPAWN_V0677_POKEMON_ESPURR">;
export type GenderSettingsV0677PokemonEspurrNormal = GenderSettings<"SPAWN_V0677_POKEMON_ESPURR_NORMAL">;
export type GenderSettingsV0678PokemonMeowstic = GenderSettings<"SPAWN_V0678_POKEMON_MEOWSTIC">;
export type GenderSettingsV0678PokemonMeowsticFemale = GenderSettings<"SPAWN_V0678_POKEMON_MEOWSTIC_FEMALE">;
export type GenderSettingsV0678PokemonMeowsticNormal = GenderSettings<"SPAWN_V0678_POKEMON_MEOWSTIC_NORMAL">;
export type GenderSettingsV0679PokemonHonedge = GenderSettings<"SPAWN_V0679_POKEMON_HONEDGE">;
export type GenderSettingsV0679PokemonHonedgeNormal = GenderSettings<"SPAWN_V0679_POKEMON_HONEDGE_NORMAL">;
export type GenderSettingsV0680PokemonDoublade = GenderSettings<"SPAWN_V0680_POKEMON_DOUBLADE">;
export type GenderSettingsV0680PokemonDoubladeNormal = GenderSettings<"SPAWN_V0680_POKEMON_DOUBLADE_NORMAL">;
export type GenderSettingsV0681PokemonAegislash = GenderSettings<"SPAWN_V0681_POKEMON_AEGISLASH">;
export type GenderSettingsV0681PokemonAegislashBlade = GenderSettings<"SPAWN_V0681_POKEMON_AEGISLASH_BLADE">;
export type GenderSettingsV0681PokemonAegislashShield = GenderSettings<"SPAWN_V0681_POKEMON_AEGISLASH_SHIELD">;
export type GenderSettingsV0682PokemonSpritzee = GenderSettings<"SPAWN_V0682_POKEMON_SPRITZEE">;
export type GenderSettingsV0682PokemonSpritzeeNormal = GenderSettings<"SPAWN_V0682_POKEMON_SPRITZEE_NORMAL">;
export type GenderSettingsV0683PokemonAromatisse = GenderSettings<"SPAWN_V0683_POKEMON_AROMATISSE">;
export type GenderSettingsV0683PokemonAromatisseNormal = GenderSettings<"SPAWN_V0683_POKEMON_AROMATISSE_NORMAL">;
export type GenderSettingsV0684PokemonSwirlix = GenderSettings<"SPAWN_V0684_POKEMON_SWIRLIX">;
export type GenderSettingsV0684PokemonSwirlixNormal = GenderSettings<"SPAWN_V0684_POKEMON_SWIRLIX_NORMAL">;
export type GenderSettingsV0685PokemonSlurpuff = GenderSettings<"SPAWN_V0685_POKEMON_SLURPUFF">;
export type GenderSettingsV0685PokemonSlurpuffNormal = GenderSettings<"SPAWN_V0685_POKEMON_SLURPUFF_NORMAL">;
export type GenderSettingsV0686PokemonInkay = GenderSettings<"SPAWN_V0686_POKEMON_INKAY">;
export type GenderSettingsV0686PokemonInkayNormal = GenderSettings<"SPAWN_V0686_POKEMON_INKAY_NORMAL">;
export type GenderSettingsV0687PokemonMalamar = GenderSettings<"SPAWN_V0687_POKEMON_MALAMAR">;
export type GenderSettingsV0687PokemonMalamarNormal = GenderSettings<"SPAWN_V0687_POKEMON_MALAMAR_NORMAL">;
export type GenderSettingsV0688PokemonBinacle = GenderSettings<"SPAWN_V0688_POKEMON_BINACLE">;
export type GenderSettingsV0688PokemonBinacleNormal = GenderSettings<"SPAWN_V0688_POKEMON_BINACLE_NORMAL">;
export type GenderSettingsV0689PokemonBarbaracle = GenderSettings<"SPAWN_V0689_POKEMON_BARBARACLE">;
export type GenderSettingsV0689PokemonBarbaracleNormal = GenderSettings<"SPAWN_V0689_POKEMON_BARBARACLE_NORMAL">;
export type GenderSettingsV0690PokemonSkrelp = GenderSettings<"SPAWN_V0690_POKEMON_SKRELP">;
export type GenderSettingsV0690PokemonSkrelpNormal = GenderSettings<"SPAWN_V0690_POKEMON_SKRELP_NORMAL">;
export type GenderSettingsV0691PokemonDragalge = GenderSettings<"SPAWN_V0691_POKEMON_DRAGALGE">;
export type GenderSettingsV0691PokemonDragalgeNormal = GenderSettings<"SPAWN_V0691_POKEMON_DRAGALGE_NORMAL">;
export type GenderSettingsV0692PokemonClauncher = GenderSettings<"SPAWN_V0692_POKEMON_CLAUNCHER">;
export type GenderSettingsV0692PokemonClauncherNormal = GenderSettings<"SPAWN_V0692_POKEMON_CLAUNCHER_NORMAL">;
export type GenderSettingsV0693PokemonClawitzer = GenderSettings<"SPAWN_V0693_POKEMON_CLAWITZER">;
export type GenderSettingsV0693PokemonClawitzerNormal = GenderSettings<"SPAWN_V0693_POKEMON_CLAWITZER_NORMAL">;
export type GenderSettingsV0694PokemonHelioptile = GenderSettings<"SPAWN_V0694_POKEMON_HELIOPTILE">;
export type GenderSettingsV0694PokemonHelioptileNormal = GenderSettings<"SPAWN_V0694_POKEMON_HELIOPTILE_NORMAL">;
export type GenderSettingsV0695PokemonHeliolisk = GenderSettings<"SPAWN_V0695_POKEMON_HELIOLISK">;
export type GenderSettingsV0695PokemonHelioliskNormal = GenderSettings<"SPAWN_V0695_POKEMON_HELIOLISK_NORMAL">;
export type GenderSettingsV0696PokemonTyrunt = GenderSettings<"SPAWN_V0696_POKEMON_TYRUNT">;
export type GenderSettingsV0696PokemonTyruntNormal = GenderSettings<"SPAWN_V0696_POKEMON_TYRUNT_NORMAL">;
export type GenderSettingsV0697PokemonTyrantrum = GenderSettings<"SPAWN_V0697_POKEMON_TYRANTRUM">;
export type GenderSettingsV0697PokemonTyrantrumNormal = GenderSettings<"SPAWN_V0697_POKEMON_TYRANTRUM_NORMAL">;
export type GenderSettingsV0698PokemonAmaura = GenderSettings<"SPAWN_V0698_POKEMON_AMAURA">;
export type GenderSettingsV0698PokemonAmauraNormal = GenderSettings<"SPAWN_V0698_POKEMON_AMAURA_NORMAL">;
export type GenderSettingsV0699PokemonAurorus = GenderSettings<"SPAWN_V0699_POKEMON_AURORUS">;
export type GenderSettingsV0699PokemonAurorusNormal = GenderSettings<"SPAWN_V0699_POKEMON_AURORUS_NORMAL">;
export type GenderSettingsV0700PokemonSylveon = GenderSettings<"SPAWN_V0700_POKEMON_SYLVEON">;
export type GenderSettingsV0700PokemonSylveonNormal = GenderSettings<"SPAWN_V0700_POKEMON_SYLVEON_NORMAL">;
export type GenderSettingsV0701PokemonHawlucha = GenderSettings<"SPAWN_V0701_POKEMON_HAWLUCHA">;
export type GenderSettingsV0701PokemonHawluchaNormal = GenderSettings<"SPAWN_V0701_POKEMON_HAWLUCHA_NORMAL">;
export type GenderSettingsV0702PokemonDedenne = GenderSettings<"SPAWN_V0702_POKEMON_DEDENNE">;
export type GenderSettingsV0702PokemonDedenneNormal = GenderSettings<"SPAWN_V0702_POKEMON_DEDENNE_NORMAL">;
export type GenderSettingsV0703PokemonCarbink = GenderSettings<"SPAWN_V0703_POKEMON_CARBINK">;
export type GenderSettingsV0703PokemonCarbinkNormal = GenderSettings<"SPAWN_V0703_POKEMON_CARBINK_NORMAL">;
export type GenderSettingsV0704PokemonGoomy = GenderSettings<"SPAWN_V0704_POKEMON_GOOMY">;
export type GenderSettingsV0704PokemonGoomyNormal = GenderSettings<"SPAWN_V0704_POKEMON_GOOMY_NORMAL">;
export type GenderSettingsV0705PokemonSliggoo = GenderSettings<"SPAWN_V0705_POKEMON_SLIGGOO">;
export type GenderSettingsV0705PokemonSliggooNormal = GenderSettings<"SPAWN_V0705_POKEMON_SLIGGOO_NORMAL">;
export type GenderSettingsV0706PokemonGoodra = GenderSettings<"SPAWN_V0706_POKEMON_GOODRA">;
export type GenderSettingsV0706PokemonGoodraNormal = GenderSettings<"SPAWN_V0706_POKEMON_GOODRA_NORMAL">;
export type GenderSettingsV0707PokemonKlefki = GenderSettings<"SPAWN_V0707_POKEMON_KLEFKI">;
export type GenderSettingsV0707PokemonKlefkiNormal = GenderSettings<"SPAWN_V0707_POKEMON_KLEFKI_NORMAL">;
export type GenderSettingsV0708PokemonPhantump = GenderSettings<"SPAWN_V0708_POKEMON_PHANTUMP">;
export type GenderSettingsV0708PokemonPhantumpNormal = GenderSettings<"SPAWN_V0708_POKEMON_PHANTUMP_NORMAL">;
export type GenderSettingsV0709PokemonTrevenant = GenderSettings<"SPAWN_V0709_POKEMON_TREVENANT">;
export type GenderSettingsV0709PokemonTrevenantNormal = GenderSettings<"SPAWN_V0709_POKEMON_TREVENANT_NORMAL">;
export type GenderSettingsV0710PokemonPumpkaboo = GenderSettings<"SPAWN_V0710_POKEMON_PUMPKABOO">;
export type GenderSettingsV0710PokemonPumpkabooAverage = GenderSettings<"SPAWN_V0710_POKEMON_PUMPKABOO_AVERAGE">;
export type GenderSettingsV0710PokemonPumpkabooLarge = GenderSettings<"SPAWN_V0710_POKEMON_PUMPKABOO_LARGE">;
export type GenderSettingsV0710PokemonPumpkabooSmall = GenderSettings<"SPAWN_V0710_POKEMON_PUMPKABOO_SMALL">;
export type GenderSettingsV0710PokemonPumpkabooSuper = GenderSettings<"SPAWN_V0710_POKEMON_PUMPKABOO_SUPER">;
export type GenderSettingsV0711PokemonGourgeist = GenderSettings<"SPAWN_V0711_POKEMON_GOURGEIST">;
export type GenderSettingsV0711PokemonGourgeistAverage = GenderSettings<"SPAWN_V0711_POKEMON_GOURGEIST_AVERAGE">;
export type GenderSettingsV0711PokemonGourgeistLarge = GenderSettings<"SPAWN_V0711_POKEMON_GOURGEIST_LARGE">;
export type GenderSettingsV0711PokemonGourgeistSmall = GenderSettings<"SPAWN_V0711_POKEMON_GOURGEIST_SMALL">;
export type GenderSettingsV0711PokemonGourgeistSuper = GenderSettings<"SPAWN_V0711_POKEMON_GOURGEIST_SUPER">;
export type GenderSettingsV0712PokemonBergmite = GenderSettings<"SPAWN_V0712_POKEMON_BERGMITE">;
export type GenderSettingsV0712PokemonBergmiteNormal = GenderSettings<"SPAWN_V0712_POKEMON_BERGMITE_NORMAL">;
export type GenderSettingsV0713PokemonAvalugg = GenderSettings<"SPAWN_V0713_POKEMON_AVALUGG">;
export type GenderSettingsV0713PokemonAvaluggHisuian = GenderSettings<"SPAWN_V0713_POKEMON_AVALUGG_HISUIAN">;
export type GenderSettingsV0713PokemonAvaluggNormal = GenderSettings<"SPAWN_V0713_POKEMON_AVALUGG_NORMAL">;
export type GenderSettingsV0714PokemonNoibat = GenderSettings<"SPAWN_V0714_POKEMON_NOIBAT">;
export type GenderSettingsV0714PokemonNoibatNormal = GenderSettings<"SPAWN_V0714_POKEMON_NOIBAT_NORMAL">;
export type GenderSettingsV0715PokemonNoivern = GenderSettings<"SPAWN_V0715_POKEMON_NOIVERN">;
export type GenderSettingsV0715PokemonNoivernNormal = GenderSettings<"SPAWN_V0715_POKEMON_NOIVERN_NORMAL">;
export type GenderSettingsV0716PokemonXerneas = GenderSettings<"SPAWN_V0716_POKEMON_XERNEAS">;
export type GenderSettingsV0716PokemonXerneasNormal = GenderSettings<"SPAWN_V0716_POKEMON_XERNEAS_NORMAL">;
export type GenderSettingsV0717PokemonYveltal = GenderSettings<"SPAWN_V0717_POKEMON_YVELTAL">;
export type GenderSettingsV0717PokemonYveltalNormal = GenderSettings<"SPAWN_V0717_POKEMON_YVELTAL_NORMAL">;
export type GenderSettingsV0718PokemonZygarde = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE">;
export type GenderSettingsV0718PokemonZygardeComplete = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE">;
export type GenderSettingsV0718PokemonZygardeCompleteFiftyPercent = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE_FIFTY_PERCENT">;
export type GenderSettingsV0718PokemonZygardeCompleteTenPercent = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE_COMPLETE_TEN_PERCENT">;
export type GenderSettingsV0718PokemonZygardeFiftyPercent = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE_FIFTY_PERCENT">;
export type GenderSettingsV0718PokemonZygardeTenPercent = GenderSettings<"SPAWN_V0718_POKEMON_ZYGARDE_TEN_PERCENT">;
export type GenderSettingsV0719PokemonDiancie = GenderSettings<"SPAWN_V0719_POKEMON_DIANCIE">;
export type GenderSettingsV0719PokemonDiancieNormal = GenderSettings<"SPAWN_V0719_POKEMON_DIANCIE_NORMAL">;
export type GenderSettingsV0720PokemonHoopa = GenderSettings<"SPAWN_V0720_POKEMON_HOOPA">;
export type GenderSettingsV0720PokemonHoopaConfined = GenderSettings<"SPAWN_V0720_POKEMON_HOOPA_CONFINED">;
export type GenderSettingsV0720PokemonHoopaUnbound = GenderSettings<"SPAWN_V0720_POKEMON_HOOPA_UNBOUND">;
export type GenderSettingsV0721PokemonVolcanion = GenderSettings<"SPAWN_V0721_POKEMON_VOLCANION">;
export type GenderSettingsV0721PokemonVolcanionNormal = GenderSettings<"SPAWN_V0721_POKEMON_VOLCANION_NORMAL">;
export type GenderSettingsV0722PokemonRowlet = GenderSettings<"SPAWN_V0722_POKEMON_ROWLET">;
export type GenderSettingsV0722PokemonRowletNormal = GenderSettings<"SPAWN_V0722_POKEMON_ROWLET_NORMAL">;
export type GenderSettingsV0723PokemonDartrix = GenderSettings<"SPAWN_V0723_POKEMON_DARTRIX">;
export type GenderSettingsV0723PokemonDartrixNormal = GenderSettings<"SPAWN_V0723_POKEMON_DARTRIX_NORMAL">;
export type GenderSettingsV0724PokemonDecidueye = GenderSettings<"SPAWN_V0724_POKEMON_DECIDUEYE">;
export type GenderSettingsV0724PokemonDecidueyeHisuian = GenderSettings<"SPAWN_V0724_POKEMON_DECIDUEYE_HISUIAN">;
export type GenderSettingsV0724PokemonDecidueyeNormal = GenderSettings<"SPAWN_V0724_POKEMON_DECIDUEYE_NORMAL">;
export type GenderSettingsV0725PokemonLitten = GenderSettings<"SPAWN_V0725_POKEMON_LITTEN">;
export type GenderSettingsV0725PokemonLittenNormal = GenderSettings<"SPAWN_V0725_POKEMON_LITTEN_NORMAL">;
export type GenderSettingsV0726PokemonTorracat = GenderSettings<"SPAWN_V0726_POKEMON_TORRACAT">;
export type GenderSettingsV0726PokemonTorracatNormal = GenderSettings<"SPAWN_V0726_POKEMON_TORRACAT_NORMAL">;
export type GenderSettingsV0727PokemonIncineroar = GenderSettings<"SPAWN_V0727_POKEMON_INCINEROAR">;
export type GenderSettingsV0727PokemonIncineroarNormal = GenderSettings<"SPAWN_V0727_POKEMON_INCINEROAR_NORMAL">;
export type GenderSettingsV0728PokemonPopplio = GenderSettings<"SPAWN_V0728_POKEMON_POPPLIO">;
export type GenderSettingsV0728PokemonPopplioNormal = GenderSettings<"SPAWN_V0728_POKEMON_POPPLIO_NORMAL">;
export type GenderSettingsV0729PokemonBrionne = GenderSettings<"SPAWN_V0729_POKEMON_BRIONNE">;
export type GenderSettingsV0729PokemonBrionneNormal = GenderSettings<"SPAWN_V0729_POKEMON_BRIONNE_NORMAL">;
export type GenderSettingsV0730PokemonPrimarina = GenderSettings<"SPAWN_V0730_POKEMON_PRIMARINA">;
export type GenderSettingsV0730PokemonPrimarinaNormal = GenderSettings<"SPAWN_V0730_POKEMON_PRIMARINA_NORMAL">;
export type GenderSettingsV0731PokemonPikipek = GenderSettings<"SPAWN_V0731_POKEMON_PIKIPEK">;
export type GenderSettingsV0731PokemonPikipekNormal = GenderSettings<"SPAWN_V0731_POKEMON_PIKIPEK_NORMAL">;
export type GenderSettingsV0732PokemonTrumbeak = GenderSettings<"SPAWN_V0732_POKEMON_TRUMBEAK">;
export type GenderSettingsV0732PokemonTrumbeakNormal = GenderSettings<"SPAWN_V0732_POKEMON_TRUMBEAK_NORMAL">;
export type GenderSettingsV0733PokemonToucannon = GenderSettings<"SPAWN_V0733_POKEMON_TOUCANNON">;
export type GenderSettingsV0733PokemonToucannonNormal = GenderSettings<"SPAWN_V0733_POKEMON_TOUCANNON_NORMAL">;
export type GenderSettingsV0734PokemonYungoos = GenderSettings<"SPAWN_V0734_POKEMON_YUNGOOS">;
export type GenderSettingsV0734PokemonYungoosNormal = GenderSettings<"SPAWN_V0734_POKEMON_YUNGOOS_NORMAL">;
export type GenderSettingsV0735PokemonGumshoos = GenderSettings<"SPAWN_V0735_POKEMON_GUMSHOOS">;
export type GenderSettingsV0735PokemonGumshoosNormal = GenderSettings<"SPAWN_V0735_POKEMON_GUMSHOOS_NORMAL">;
export type GenderSettingsV0736PokemonGrubbin = GenderSettings<"SPAWN_V0736_POKEMON_GRUBBIN">;
export type GenderSettingsV0736PokemonGrubbinNormal = GenderSettings<"SPAWN_V0736_POKEMON_GRUBBIN_NORMAL">;
export type GenderSettingsV0737PokemonCharjabug = GenderSettings<"SPAWN_V0737_POKEMON_CHARJABUG">;
export type GenderSettingsV0737PokemonCharjabugNormal = GenderSettings<"SPAWN_V0737_POKEMON_CHARJABUG_NORMAL">;
export type GenderSettingsV0737PokemonCharjabugWinter2025 = GenderSettings<"SPAWN_V0737_POKEMON_CHARJABUG_WINTER_2025">;
export type GenderSettingsV0738PokemonVikavolt = GenderSettings<"SPAWN_V0738_POKEMON_VIKAVOLT">;
export type GenderSettingsV0738PokemonVikavoltNormal = GenderSettings<"SPAWN_V0738_POKEMON_VIKAVOLT_NORMAL">;
export type GenderSettingsV0738PokemonVikavoltWinter2025 = GenderSettings<"SPAWN_V0738_POKEMON_VIKAVOLT_WINTER_2025">;
export type GenderSettingsV0739PokemonCrabrawler = GenderSettings<"SPAWN_V0739_POKEMON_CRABRAWLER">;
export type GenderSettingsV0739PokemonCrabrawlerNormal = GenderSettings<"SPAWN_V0739_POKEMON_CRABRAWLER_NORMAL">;
export type GenderSettingsV0740PokemonCrabominable = GenderSettings<"SPAWN_V0740_POKEMON_CRABOMINABLE">;
export type GenderSettingsV0740PokemonCrabominableNormal = GenderSettings<"SPAWN_V0740_POKEMON_CRABOMINABLE_NORMAL">;
export type GenderSettingsV0741PokemonOricorio = GenderSettings<"SPAWN_V0741_POKEMON_ORICORIO">;
export type GenderSettingsV0741PokemonOricorioBaile = GenderSettings<"SPAWN_V0741_POKEMON_ORICORIO_BAILE">;
export type GenderSettingsV0741PokemonOricorioPau = GenderSettings<"SPAWN_V0741_POKEMON_ORICORIO_PAU">;
export type GenderSettingsV0741PokemonOricorioPompom = GenderSettings<"SPAWN_V0741_POKEMON_ORICORIO_POMPOM">;
export type GenderSettingsV0741PokemonOricorioSensu = GenderSettings<"SPAWN_V0741_POKEMON_ORICORIO_SENSU">;
export type GenderSettingsV0742PokemonCutiefly = GenderSettings<"SPAWN_V0742_POKEMON_CUTIEFLY">;
export type GenderSettingsV0742PokemonCutieflyNormal = GenderSettings<"SPAWN_V0742_POKEMON_CUTIEFLY_NORMAL">;
export type GenderSettingsV0743PokemonRibombee = GenderSettings<"SPAWN_V0743_POKEMON_RIBOMBEE">;
export type GenderSettingsV0743PokemonRibombeeNormal = GenderSettings<"SPAWN_V0743_POKEMON_RIBOMBEE_NORMAL">;
export type GenderSettingsV0744PokemonRockruff = GenderSettings<"SPAWN_V0744_POKEMON_ROCKRUFF">;
export type GenderSettingsV0744PokemonRockruffDusk = GenderSettings<"SPAWN_V0744_POKEMON_ROCKRUFF_DUSK">;
export type GenderSettingsV0744PokemonRockruffNormal = GenderSettings<"SPAWN_V0744_POKEMON_ROCKRUFF_NORMAL">;
export type GenderSettingsV0745PokemonLycanroc = GenderSettings<"SPAWN_V0745_POKEMON_LYCANROC">;
export type GenderSettingsV0745PokemonLycanrocDusk = GenderSettings<"SPAWN_V0745_POKEMON_LYCANROC_DUSK">;
export type GenderSettingsV0745PokemonLycanrocMidday = GenderSettings<"SPAWN_V0745_POKEMON_LYCANROC_MIDDAY">;
export type GenderSettingsV0745PokemonLycanrocMidnight = GenderSettings<"SPAWN_V0745_POKEMON_LYCANROC_MIDNIGHT">;
export type GenderSettingsV0746PokemonWishiwashi = GenderSettings<"SPAWN_V0746_POKEMON_WISHIWASHI">;
export type GenderSettingsV0746PokemonWishiwashiSchool = GenderSettings<"SPAWN_V0746_POKEMON_WISHIWASHI_SCHOOL">;
export type GenderSettingsV0746PokemonWishiwashiSolo = GenderSettings<"SPAWN_V0746_POKEMON_WISHIWASHI_SOLO">;
export type GenderSettingsV0747PokemonMareanie = GenderSettings<"SPAWN_V0747_POKEMON_MAREANIE">;
export type GenderSettingsV0747PokemonMareanieNormal = GenderSettings<"SPAWN_V0747_POKEMON_MAREANIE_NORMAL">;
export type GenderSettingsV0748PokemonToxapex = GenderSettings<"SPAWN_V0748_POKEMON_TOXAPEX">;
export type GenderSettingsV0748PokemonToxapexNormal = GenderSettings<"SPAWN_V0748_POKEMON_TOXAPEX_NORMAL">;
export type GenderSettingsV0749PokemonMudbray = GenderSettings<"SPAWN_V0749_POKEMON_MUDBRAY">;
export type GenderSettingsV0749PokemonMudbrayNormal = GenderSettings<"SPAWN_V0749_POKEMON_MUDBRAY_NORMAL">;
export type GenderSettingsV0750PokemonMudsdale = GenderSettings<"SPAWN_V0750_POKEMON_MUDSDALE">;
export type GenderSettingsV0750PokemonMudsdaleNormal = GenderSettings<"SPAWN_V0750_POKEMON_MUDSDALE_NORMAL">;
export type GenderSettingsV0751PokemonDewpider = GenderSettings<"SPAWN_V0751_POKEMON_DEWPIDER">;
export type GenderSettingsV0751PokemonDewpiderNormal = GenderSettings<"SPAWN_V0751_POKEMON_DEWPIDER_NORMAL">;
export type GenderSettingsV0752PokemonAraquanid = GenderSettings<"SPAWN_V0752_POKEMON_ARAQUANID">;
export type GenderSettingsV0752PokemonAraquanidNormal = GenderSettings<"SPAWN_V0752_POKEMON_ARAQUANID_NORMAL">;
export type GenderSettingsV0753PokemonFomantis = GenderSettings<"SPAWN_V0753_POKEMON_FOMANTIS">;
export type GenderSettingsV0753PokemonFomantisNormal = GenderSettings<"SPAWN_V0753_POKEMON_FOMANTIS_NORMAL">;
export type GenderSettingsV0754PokemonLurantis = GenderSettings<"SPAWN_V0754_POKEMON_LURANTIS">;
export type GenderSettingsV0754PokemonLurantisNormal = GenderSettings<"SPAWN_V0754_POKEMON_LURANTIS_NORMAL">;
export type GenderSettingsV0755PokemonMorelull = GenderSettings<"SPAWN_V0755_POKEMON_MORELULL">;
export type GenderSettingsV0755PokemonMorelullNormal = GenderSettings<"SPAWN_V0755_POKEMON_MORELULL_NORMAL">;
export type GenderSettingsV0756PokemonShiinotic = GenderSettings<"SPAWN_V0756_POKEMON_SHIINOTIC">;
export type GenderSettingsV0756PokemonShiinoticNormal = GenderSettings<"SPAWN_V0756_POKEMON_SHIINOTIC_NORMAL">;
export type GenderSettingsV0757PokemonSalandit = GenderSettings<"SPAWN_V0757_POKEMON_SALANDIT">;
export type GenderSettingsV0757PokemonSalanditNormal = GenderSettings<"SPAWN_V0757_POKEMON_SALANDIT_NORMAL">;
export type GenderSettingsV0758PokemonSalazzle = GenderSettings<"SPAWN_V0758_POKEMON_SALAZZLE">;
export type GenderSettingsV0758PokemonSalazzleNormal = GenderSettings<"SPAWN_V0758_POKEMON_SALAZZLE_NORMAL">;
export type GenderSettingsV0759PokemonStufful = GenderSettings<"SPAWN_V0759_POKEMON_STUFFUL">;
export type GenderSettingsV0759PokemonStuffulNormal = GenderSettings<"SPAWN_V0759_POKEMON_STUFFUL_NORMAL">;
export type GenderSettingsV0760PokemonBewear = GenderSettings<"SPAWN_V0760_POKEMON_BEWEAR">;
export type GenderSettingsV0760PokemonBewearNormal = GenderSettings<"SPAWN_V0760_POKEMON_BEWEAR_NORMAL">;
export type GenderSettingsV0760PokemonBewearWildarea2025 = GenderSettings<"SPAWN_V0760_POKEMON_BEWEAR_WILDAREA_2025">;
export type GenderSettingsV0761PokemonBounsweet = GenderSettings<"SPAWN_V0761_POKEMON_BOUNSWEET">;
export type GenderSettingsV0761PokemonBounsweetNormal = GenderSettings<"SPAWN_V0761_POKEMON_BOUNSWEET_NORMAL">;
export type GenderSettingsV0762PokemonSteenee = GenderSettings<"SPAWN_V0762_POKEMON_STEENEE">;
export type GenderSettingsV0762PokemonSteeneeNormal = GenderSettings<"SPAWN_V0762_POKEMON_STEENEE_NORMAL">;
export type GenderSettingsV0763PokemonTsareena = GenderSettings<"SPAWN_V0763_POKEMON_TSAREENA">;
export type GenderSettingsV0763PokemonTsareenaNormal = GenderSettings<"SPAWN_V0763_POKEMON_TSAREENA_NORMAL">;
export type GenderSettingsV0764PokemonComfey = GenderSettings<"SPAWN_V0764_POKEMON_COMFEY">;
export type GenderSettingsV0764PokemonComfeyNormal = GenderSettings<"SPAWN_V0764_POKEMON_COMFEY_NORMAL">;
export type GenderSettingsV0765PokemonOranguru = GenderSettings<"SPAWN_V0765_POKEMON_ORANGURU">;
export type GenderSettingsV0765PokemonOranguruNormal = GenderSettings<"SPAWN_V0765_POKEMON_ORANGURU_NORMAL">;
export type GenderSettingsV0766PokemonPassimian = GenderSettings<"SPAWN_V0766_POKEMON_PASSIMIAN">;
export type GenderSettingsV0766PokemonPassimianNormal = GenderSettings<"SPAWN_V0766_POKEMON_PASSIMIAN_NORMAL">;
export type GenderSettingsV0767PokemonWimpod = GenderSettings<"SPAWN_V0767_POKEMON_WIMPOD">;
export type GenderSettingsV0767PokemonWimpodNormal = GenderSettings<"SPAWN_V0767_POKEMON_WIMPOD_NORMAL">;
export type GenderSettingsV0768PokemonGolisopod = GenderSettings<"SPAWN_V0768_POKEMON_GOLISOPOD">;
export type GenderSettingsV0768PokemonGolisopodNormal = GenderSettings<"SPAWN_V0768_POKEMON_GOLISOPOD_NORMAL">;
export type GenderSettingsV0769PokemonSandygast = GenderSettings<"SPAWN_V0769_POKEMON_SANDYGAST">;
export type GenderSettingsV0769PokemonSandygastNormal = GenderSettings<"SPAWN_V0769_POKEMON_SANDYGAST_NORMAL">;
export type GenderSettingsV0770PokemonPalossand = GenderSettings<"SPAWN_V0770_POKEMON_PALOSSAND">;
export type GenderSettingsV0770PokemonPalossandNormal = GenderSettings<"SPAWN_V0770_POKEMON_PALOSSAND_NORMAL">;
export type GenderSettingsV0771PokemonPyukumuku = GenderSettings<"SPAWN_V0771_POKEMON_PYUKUMUKU">;
export type GenderSettingsV0771PokemonPyukumukuNormal = GenderSettings<"SPAWN_V0771_POKEMON_PYUKUMUKU_NORMAL">;
export type GenderSettingsV0772PokemonTypeNull = GenderSettings<"SPAWN_V0772_POKEMON_TYPE_NULL">;
export type GenderSettingsV0772PokemonTypeNullNormal = GenderSettings<"SPAWN_V0772_POKEMON_TYPE_NULL_NORMAL">;
export type GenderSettingsV0773PokemonSilvally = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY">;
export type GenderSettingsV0773PokemonSilvallyBug = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_BUG">;
export type GenderSettingsV0773PokemonSilvallyDark = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_DARK">;
export type GenderSettingsV0773PokemonSilvallyDragon = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_DRAGON">;
export type GenderSettingsV0773PokemonSilvallyElectric = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_ELECTRIC">;
export type GenderSettingsV0773PokemonSilvallyFairy = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_FAIRY">;
export type GenderSettingsV0773PokemonSilvallyFighting = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_FIGHTING">;
export type GenderSettingsV0773PokemonSilvallyFire = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_FIRE">;
export type GenderSettingsV0773PokemonSilvallyFlying = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_FLYING">;
export type GenderSettingsV0773PokemonSilvallyGhost = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_GHOST">;
export type GenderSettingsV0773PokemonSilvallyGrass = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_GRASS">;
export type GenderSettingsV0773PokemonSilvallyGround = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_GROUND">;
export type GenderSettingsV0773PokemonSilvallyIce = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_ICE">;
export type GenderSettingsV0773PokemonSilvallyNormal = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_NORMAL">;
export type GenderSettingsV0773PokemonSilvallyPoison = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_POISON">;
export type GenderSettingsV0773PokemonSilvallyPsychic = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_PSYCHIC">;
export type GenderSettingsV0773PokemonSilvallyRock = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_ROCK">;
export type GenderSettingsV0773PokemonSilvallySteel = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_STEEL">;
export type GenderSettingsV0773PokemonSilvallyWater = GenderSettings<"SPAWN_V0773_POKEMON_SILVALLY_WATER">;
export type GenderSettingsV0774PokemonMinior = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR">;
export type GenderSettingsV0774PokemonMiniorBlue = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_BLUE">;
export type GenderSettingsV0774PokemonMiniorGreen = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_GREEN">;
export type GenderSettingsV0774PokemonMiniorIndigo = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_INDIGO">;
export type GenderSettingsV0774PokemonMiniorOrange = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_ORANGE">;
export type GenderSettingsV0774PokemonMiniorRed = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_RED">;
export type GenderSettingsV0774PokemonMiniorViolet = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_VIOLET">;
export type GenderSettingsV0774PokemonMiniorYellow = GenderSettings<"SPAWN_V0774_POKEMON_MINIOR_YELLOW">;
export type GenderSettingsV0775PokemonKomala = GenderSettings<"SPAWN_V0775_POKEMON_KOMALA">;
export type GenderSettingsV0775PokemonKomalaNormal = GenderSettings<"SPAWN_V0775_POKEMON_KOMALA_NORMAL">;
export type GenderSettingsV0776PokemonTurtonator = GenderSettings<"SPAWN_V0776_POKEMON_TURTONATOR">;
export type GenderSettingsV0776PokemonTurtonatorNormal = GenderSettings<"SPAWN_V0776_POKEMON_TURTONATOR_NORMAL">;
export type GenderSettingsV0777PokemonTogedemaru = GenderSettings<"SPAWN_V0777_POKEMON_TOGEDEMARU">;
export type GenderSettingsV0777PokemonTogedemaruNormal = GenderSettings<"SPAWN_V0777_POKEMON_TOGEDEMARU_NORMAL">;
export type GenderSettingsV0778PokemonMimikyu = GenderSettings<"SPAWN_V0778_POKEMON_MIMIKYU">;
export type GenderSettingsV0778PokemonMimikyuBusted = GenderSettings<"SPAWN_V0778_POKEMON_MIMIKYU_BUSTED">;
export type GenderSettingsV0778PokemonMimikyuDisguised = GenderSettings<"SPAWN_V0778_POKEMON_MIMIKYU_DISGUISED">;
export type GenderSettingsV0779PokemonBruxish = GenderSettings<"SPAWN_V0779_POKEMON_BRUXISH">;
export type GenderSettingsV0779PokemonBruxishNormal = GenderSettings<"SPAWN_V0779_POKEMON_BRUXISH_NORMAL">;
export type GenderSettingsV0780PokemonDrampa = GenderSettings<"SPAWN_V0780_POKEMON_DRAMPA">;
export type GenderSettingsV0780PokemonDrampaNormal = GenderSettings<"SPAWN_V0780_POKEMON_DRAMPA_NORMAL">;
export type GenderSettingsV0781PokemonDhelmise = GenderSettings<"SPAWN_V0781_POKEMON_DHELMISE">;
export type GenderSettingsV0781PokemonDhelmiseNormal = GenderSettings<"SPAWN_V0781_POKEMON_DHELMISE_NORMAL">;
export type GenderSettingsV0782PokemonJangmoO = GenderSettings<"SPAWN_V0782_POKEMON_JANGMO_O">;
export type GenderSettingsV0782PokemonJangmoONormal = GenderSettings<"SPAWN_V0782_POKEMON_JANGMO_O_NORMAL">;
export type GenderSettingsV0783PokemonHakamoO = GenderSettings<"SPAWN_V0783_POKEMON_HAKAMO_O">;
export type GenderSettingsV0783PokemonHakamoONormal = GenderSettings<"SPAWN_V0783_POKEMON_HAKAMO_O_NORMAL">;
export type GenderSettingsV0784PokemonKommoO = GenderSettings<"SPAWN_V0784_POKEMON_KOMMO_O">;
export type GenderSettingsV0784PokemonKommoONormal = GenderSettings<"SPAWN_V0784_POKEMON_KOMMO_O_NORMAL">;
export type GenderSettingsV0785PokemonTapuKoko = GenderSettings<"SPAWN_V0785_POKEMON_TAPU_KOKO">;
export type GenderSettingsV0785PokemonTapuKokoNormal = GenderSettings<"SPAWN_V0785_POKEMON_TAPU_KOKO_NORMAL">;
export type GenderSettingsV0786PokemonTapuLele = GenderSettings<"SPAWN_V0786_POKEMON_TAPU_LELE">;
export type GenderSettingsV0786PokemonTapuLeleNormal = GenderSettings<"SPAWN_V0786_POKEMON_TAPU_LELE_NORMAL">;
export type GenderSettingsV0787PokemonTapuBulu = GenderSettings<"SPAWN_V0787_POKEMON_TAPU_BULU">;
export type GenderSettingsV0787PokemonTapuBuluNormal = GenderSettings<"SPAWN_V0787_POKEMON_TAPU_BULU_NORMAL">;
export type GenderSettingsV0788PokemonTapuFini = GenderSettings<"SPAWN_V0788_POKEMON_TAPU_FINI">;
export type GenderSettingsV0788PokemonTapuFiniNormal = GenderSettings<"SPAWN_V0788_POKEMON_TAPU_FINI_NORMAL">;
export type GenderSettingsV0789PokemonCosmog = GenderSettings<"SPAWN_V0789_POKEMON_COSMOG">;
export type GenderSettingsV0789PokemonCosmogNormal = GenderSettings<"SPAWN_V0789_POKEMON_COSMOG_NORMAL">;
export type GenderSettingsV0790PokemonCosmoem = GenderSettings<"SPAWN_V0790_POKEMON_COSMOEM">;
export type GenderSettingsV0790PokemonCosmoemNormal = GenderSettings<"SPAWN_V0790_POKEMON_COSMOEM_NORMAL">;
export type GenderSettingsV0791PokemonSolgaleo = GenderSettings<"SPAWN_V0791_POKEMON_SOLGALEO">;
export type GenderSettingsV0791PokemonSolgaleoNormal = GenderSettings<"SPAWN_V0791_POKEMON_SOLGALEO_NORMAL">;
export type GenderSettingsV0792PokemonLunala = GenderSettings<"SPAWN_V0792_POKEMON_LUNALA">;
export type GenderSettingsV0792PokemonLunalaNormal = GenderSettings<"SPAWN_V0792_POKEMON_LUNALA_NORMAL">;
export type GenderSettingsV0793PokemonNihilego = GenderSettings<"SPAWN_V0793_POKEMON_NIHILEGO">;
export type GenderSettingsV0793PokemonNihilegoNormal = GenderSettings<"SPAWN_V0793_POKEMON_NIHILEGO_NORMAL">;
export type GenderSettingsV0794PokemonBuzzwole = GenderSettings<"SPAWN_V0794_POKEMON_BUZZWOLE">;
export type GenderSettingsV0794PokemonBuzzwoleNormal = GenderSettings<"SPAWN_V0794_POKEMON_BUZZWOLE_NORMAL">;
export type GenderSettingsV0795PokemonPheromosa = GenderSettings<"SPAWN_V0795_POKEMON_PHEROMOSA">;
export type GenderSettingsV0795PokemonPheromosaNormal = GenderSettings<"SPAWN_V0795_POKEMON_PHEROMOSA_NORMAL">;
export type GenderSettingsV0796PokemonXurkitree = GenderSettings<"SPAWN_V0796_POKEMON_XURKITREE">;
export type GenderSettingsV0796PokemonXurkitreeNormal = GenderSettings<"SPAWN_V0796_POKEMON_XURKITREE_NORMAL">;
export type GenderSettingsV0797PokemonCelesteela = GenderSettings<"SPAWN_V0797_POKEMON_CELESTEELA">;
export type GenderSettingsV0797PokemonCelesteelaNormal = GenderSettings<"SPAWN_V0797_POKEMON_CELESTEELA_NORMAL">;
export type GenderSettingsV0798PokemonKartana = GenderSettings<"SPAWN_V0798_POKEMON_KARTANA">;
export type GenderSettingsV0798PokemonKartanaNormal = GenderSettings<"SPAWN_V0798_POKEMON_KARTANA_NORMAL">;
export type GenderSettingsV0799PokemonGuzzlord = GenderSettings<"SPAWN_V0799_POKEMON_GUZZLORD">;
export type GenderSettingsV0799PokemonGuzzlordNormal = GenderSettings<"SPAWN_V0799_POKEMON_GUZZLORD_NORMAL">;
export type GenderSettingsV0800PokemonNecrozma = GenderSettings<"SPAWN_V0800_POKEMON_NECROZMA">;
export type GenderSettingsV0800PokemonNecrozmaDawnWings = GenderSettings<"SPAWN_V0800_POKEMON_NECROZMA_DAWN_WINGS">;
export type GenderSettingsV0800PokemonNecrozmaDuskMane = GenderSettings<"SPAWN_V0800_POKEMON_NECROZMA_DUSK_MANE">;
export type GenderSettingsV0800PokemonNecrozmaNormal = GenderSettings<"SPAWN_V0800_POKEMON_NECROZMA_NORMAL">;
export type GenderSettingsV0800PokemonNecrozmaUltra = GenderSettings<"SPAWN_V0800_POKEMON_NECROZMA_ULTRA">;
export type GenderSettingsV0801PokemonMagearna = GenderSettings<"SPAWN_V0801_POKEMON_MAGEARNA">;
export type GenderSettingsV0801PokemonMagearnaNormal = GenderSettings<"SPAWN_V0801_POKEMON_MAGEARNA_NORMAL">;
export type GenderSettingsV0801PokemonMagearnaOriginalColor = GenderSettings<"SPAWN_V0801_POKEMON_MAGEARNA_ORIGINAL_COLOR">;
export type GenderSettingsV0802PokemonMarshadow = GenderSettings<"SPAWN_V0802_POKEMON_MARSHADOW">;
export type GenderSettingsV0802PokemonMarshadowNormal = GenderSettings<"SPAWN_V0802_POKEMON_MARSHADOW_NORMAL">;
export type GenderSettingsV0803PokemonPoipole = GenderSettings<"SPAWN_V0803_POKEMON_POIPOLE">;
export type GenderSettingsV0803PokemonPoipoleNormal = GenderSettings<"SPAWN_V0803_POKEMON_POIPOLE_NORMAL">;
export type GenderSettingsV0804PokemonNaganadel = GenderSettings<"SPAWN_V0804_POKEMON_NAGANADEL">;
export type GenderSettingsV0804PokemonNaganadelNormal = GenderSettings<"SPAWN_V0804_POKEMON_NAGANADEL_NORMAL">;
export type GenderSettingsV0805PokemonStakataka = GenderSettings<"SPAWN_V0805_POKEMON_STAKATAKA">;
export type GenderSettingsV0805PokemonStakatakaNormal = GenderSettings<"SPAWN_V0805_POKEMON_STAKATAKA_NORMAL">;
export type GenderSettingsV0806PokemonBlacephalon = GenderSettings<"SPAWN_V0806_POKEMON_BLACEPHALON">;
export type GenderSettingsV0806PokemonBlacephalonNormal = GenderSettings<"SPAWN_V0806_POKEMON_BLACEPHALON_NORMAL">;
export type GenderSettingsV0807PokemonZeraora = GenderSettings<"SPAWN_V0807_POKEMON_ZERAORA">;
export type GenderSettingsV0807PokemonZeraoraNormal = GenderSettings<"SPAWN_V0807_POKEMON_ZERAORA_NORMAL">;
export type GenderSettingsV0808PokemonMeltan = GenderSettings<"SPAWN_V0808_POKEMON_MELTAN">;
export type GenderSettingsV0808PokemonMeltanNormal = GenderSettings<"SPAWN_V0808_POKEMON_MELTAN_NORMAL">;
export type GenderSettingsV0809PokemonMelmetal = GenderSettings<"SPAWN_V0809_POKEMON_MELMETAL">;
export type GenderSettingsV0809PokemonMelmetalNormal = GenderSettings<"SPAWN_V0809_POKEMON_MELMETAL_NORMAL">;
export type GenderSettingsV0810PokemonGrookey = GenderSettings<"SPAWN_V0810_POKEMON_GROOKEY">;
export type GenderSettingsV0810PokemonGrookeyNormal = GenderSettings<"SPAWN_V0810_POKEMON_GROOKEY_NORMAL">;
export type GenderSettingsV0811PokemonThwackey = GenderSettings<"SPAWN_V0811_POKEMON_THWACKEY">;
export type GenderSettingsV0811PokemonThwackeyNormal = GenderSettings<"SPAWN_V0811_POKEMON_THWACKEY_NORMAL">;
export type GenderSettingsV0812PokemonRillaboom = GenderSettings<"SPAWN_V0812_POKEMON_RILLABOOM">;
export type GenderSettingsV0812PokemonRillaboomNormal = GenderSettings<"SPAWN_V0812_POKEMON_RILLABOOM_NORMAL">;
export type GenderSettingsV0813PokemonScorbunny = GenderSettings<"SPAWN_V0813_POKEMON_SCORBUNNY">;
export type GenderSettingsV0813PokemonScorbunnyNormal = GenderSettings<"SPAWN_V0813_POKEMON_SCORBUNNY_NORMAL">;
export type GenderSettingsV0814PokemonRaboot = GenderSettings<"SPAWN_V0814_POKEMON_RABOOT">;
export type GenderSettingsV0814PokemonRabootNormal = GenderSettings<"SPAWN_V0814_POKEMON_RABOOT_NORMAL">;
export type GenderSettingsV0815PokemonCinderace = GenderSettings<"SPAWN_V0815_POKEMON_CINDERACE">;
export type GenderSettingsV0815PokemonCinderaceNormal = GenderSettings<"SPAWN_V0815_POKEMON_CINDERACE_NORMAL">;
export type GenderSettingsV0816PokemonSobble = GenderSettings<"SPAWN_V0816_POKEMON_SOBBLE">;
export type GenderSettingsV0816PokemonSobbleNormal = GenderSettings<"SPAWN_V0816_POKEMON_SOBBLE_NORMAL">;
export type GenderSettingsV0817PokemonDrizzile = GenderSettings<"SPAWN_V0817_POKEMON_DRIZZILE">;
export type GenderSettingsV0817PokemonDrizzileNormal = GenderSettings<"SPAWN_V0817_POKEMON_DRIZZILE_NORMAL">;
export type GenderSettingsV0818PokemonInteleon = GenderSettings<"SPAWN_V0818_POKEMON_INTELEON">;
export type GenderSettingsV0818PokemonInteleonNormal = GenderSettings<"SPAWN_V0818_POKEMON_INTELEON_NORMAL">;
export type GenderSettingsV0819PokemonSkwovet = GenderSettings<"SPAWN_V0819_POKEMON_SKWOVET">;
export type GenderSettingsV0819PokemonSkwovetNormal = GenderSettings<"SPAWN_V0819_POKEMON_SKWOVET_NORMAL">;
export type GenderSettingsV0820PokemonGreedent = GenderSettings<"SPAWN_V0820_POKEMON_GREEDENT">;
export type GenderSettingsV0820PokemonGreedentNormal = GenderSettings<"SPAWN_V0820_POKEMON_GREEDENT_NORMAL">;
export type GenderSettingsV0821PokemonRookidee = GenderSettings<"SPAWN_V0821_POKEMON_ROOKIDEE">;
export type GenderSettingsV0821PokemonRookideeNormal = GenderSettings<"SPAWN_V0821_POKEMON_ROOKIDEE_NORMAL">;
export type GenderSettingsV0822PokemonCorvisquire = GenderSettings<"SPAWN_V0822_POKEMON_CORVISQUIRE">;
export type GenderSettingsV0822PokemonCorvisquireNormal = GenderSettings<"SPAWN_V0822_POKEMON_CORVISQUIRE_NORMAL">;
export type GenderSettingsV0823PokemonCorviknight = GenderSettings<"SPAWN_V0823_POKEMON_CORVIKNIGHT">;
export type GenderSettingsV0823PokemonCorviknightNormal = GenderSettings<"SPAWN_V0823_POKEMON_CORVIKNIGHT_NORMAL">;
export type GenderSettingsV0824PokemonBlipbug = GenderSettings<"SPAWN_V0824_POKEMON_BLIPBUG">;
export type GenderSettingsV0824PokemonBlipbugNormal = GenderSettings<"SPAWN_V0824_POKEMON_BLIPBUG_NORMAL">;
export type GenderSettingsV0825PokemonDottler = GenderSettings<"SPAWN_V0825_POKEMON_DOTTLER">;
export type GenderSettingsV0825PokemonDottlerNormal = GenderSettings<"SPAWN_V0825_POKEMON_DOTTLER_NORMAL">;
export type GenderSettingsV0826PokemonOrbeetle = GenderSettings<"SPAWN_V0826_POKEMON_ORBEETLE">;
export type GenderSettingsV0826PokemonOrbeetleNormal = GenderSettings<"SPAWN_V0826_POKEMON_ORBEETLE_NORMAL">;
export type GenderSettingsV0827PokemonNickit = GenderSettings<"SPAWN_V0827_POKEMON_NICKIT">;
export type GenderSettingsV0827PokemonNickitNormal = GenderSettings<"SPAWN_V0827_POKEMON_NICKIT_NORMAL">;
export type GenderSettingsV0828PokemonThievul = GenderSettings<"SPAWN_V0828_POKEMON_THIEVUL">;
export type GenderSettingsV0828PokemonThievulNormal = GenderSettings<"SPAWN_V0828_POKEMON_THIEVUL_NORMAL">;
export type GenderSettingsV0829PokemonGossifleur = GenderSettings<"SPAWN_V0829_POKEMON_GOSSIFLEUR">;
export type GenderSettingsV0829PokemonGossifleurNormal = GenderSettings<"SPAWN_V0829_POKEMON_GOSSIFLEUR_NORMAL">;
export type GenderSettingsV0830PokemonEldegoss = GenderSettings<"SPAWN_V0830_POKEMON_ELDEGOSS">;
export type GenderSettingsV0830PokemonEldegossNormal = GenderSettings<"SPAWN_V0830_POKEMON_ELDEGOSS_NORMAL">;
export type GenderSettingsV0831PokemonWooloo = GenderSettings<"SPAWN_V0831_POKEMON_WOOLOO">;
export type GenderSettingsV0831PokemonWoolooNormal = GenderSettings<"SPAWN_V0831_POKEMON_WOOLOO_NORMAL">;
export type GenderSettingsV0832PokemonDubwool = GenderSettings<"SPAWN_V0832_POKEMON_DUBWOOL">;
export type GenderSettingsV0832PokemonDubwoolNormal = GenderSettings<"SPAWN_V0832_POKEMON_DUBWOOL_NORMAL">;
export type GenderSettingsV0833PokemonChewtle = GenderSettings<"SPAWN_V0833_POKEMON_CHEWTLE">;
export type GenderSettingsV0833PokemonChewtleNormal = GenderSettings<"SPAWN_V0833_POKEMON_CHEWTLE_NORMAL">;
export type GenderSettingsV0834PokemonDrednaw = GenderSettings<"SPAWN_V0834_POKEMON_DREDNAW">;
export type GenderSettingsV0834PokemonDrednawNormal = GenderSettings<"SPAWN_V0834_POKEMON_DREDNAW_NORMAL">;
export type GenderSettingsV0835PokemonYamper = GenderSettings<"SPAWN_V0835_POKEMON_YAMPER">;
export type GenderSettingsV0835PokemonYamperNormal = GenderSettings<"SPAWN_V0835_POKEMON_YAMPER_NORMAL">;
export type GenderSettingsV0836PokemonBoltund = GenderSettings<"SPAWN_V0836_POKEMON_BOLTUND">;
export type GenderSettingsV0836PokemonBoltundNormal = GenderSettings<"SPAWN_V0836_POKEMON_BOLTUND_NORMAL">;
export type GenderSettingsV0837PokemonRolycoly = GenderSettings<"SPAWN_V0837_POKEMON_ROLYCOLY">;
export type GenderSettingsV0837PokemonRolycolyNormal = GenderSettings<"SPAWN_V0837_POKEMON_ROLYCOLY_NORMAL">;
export type GenderSettingsV0838PokemonCarkol = GenderSettings<"SPAWN_V0838_POKEMON_CARKOL">;
export type GenderSettingsV0838PokemonCarkolNormal = GenderSettings<"SPAWN_V0838_POKEMON_CARKOL_NORMAL">;
export type GenderSettingsV0839PokemonCoalossal = GenderSettings<"SPAWN_V0839_POKEMON_COALOSSAL">;
export type GenderSettingsV0839PokemonCoalossalNormal = GenderSettings<"SPAWN_V0839_POKEMON_COALOSSAL_NORMAL">;
export type GenderSettingsV0840PokemonApplin = GenderSettings<"SPAWN_V0840_POKEMON_APPLIN">;
export type GenderSettingsV0840PokemonApplinNormal = GenderSettings<"SPAWN_V0840_POKEMON_APPLIN_NORMAL">;
export type GenderSettingsV0841PokemonFlapple = GenderSettings<"SPAWN_V0841_POKEMON_FLAPPLE">;
export type GenderSettingsV0841PokemonFlappleNormal = GenderSettings<"SPAWN_V0841_POKEMON_FLAPPLE_NORMAL">;
export type GenderSettingsV0842PokemonAppletun = GenderSettings<"SPAWN_V0842_POKEMON_APPLETUN">;
export type GenderSettingsV0842PokemonAppletunNormal = GenderSettings<"SPAWN_V0842_POKEMON_APPLETUN_NORMAL">;
export type GenderSettingsV0843PokemonSilicobra = GenderSettings<"SPAWN_V0843_POKEMON_SILICOBRA">;
export type GenderSettingsV0843PokemonSilicobraNormal = GenderSettings<"SPAWN_V0843_POKEMON_SILICOBRA_NORMAL">;
export type GenderSettingsV0844PokemonSandaconda = GenderSettings<"SPAWN_V0844_POKEMON_SANDACONDA">;
export type GenderSettingsV0844PokemonSandacondaNormal = GenderSettings<"SPAWN_V0844_POKEMON_SANDACONDA_NORMAL">;
export type GenderSettingsV0845PokemonCramorant = GenderSettings<"SPAWN_V0845_POKEMON_CRAMORANT">;
export type GenderSettingsV0845PokemonCramorantNormal = GenderSettings<"SPAWN_V0845_POKEMON_CRAMORANT_NORMAL">;
export type GenderSettingsV0846PokemonArrokuda = GenderSettings<"SPAWN_V0846_POKEMON_ARROKUDA">;
export type GenderSettingsV0846PokemonArrokudaNormal = GenderSettings<"SPAWN_V0846_POKEMON_ARROKUDA_NORMAL">;
export type GenderSettingsV0847PokemonBarraskewda = GenderSettings<"SPAWN_V0847_POKEMON_BARRASKEWDA">;
export type GenderSettingsV0847PokemonBarraskewdaNormal = GenderSettings<"SPAWN_V0847_POKEMON_BARRASKEWDA_NORMAL">;
export type GenderSettingsV0848PokemonToxel = GenderSettings<"SPAWN_V0848_POKEMON_TOXEL">;
export type GenderSettingsV0848PokemonToxelNormal = GenderSettings<"SPAWN_V0848_POKEMON_TOXEL_NORMAL">;
export type GenderSettingsV0849PokemonToxtricity = GenderSettings<"SPAWN_V0849_POKEMON_TOXTRICITY">;
export type GenderSettingsV0849PokemonToxtricityAmped = GenderSettings<"SPAWN_V0849_POKEMON_TOXTRICITY_AMPED">;
export type GenderSettingsV0849PokemonToxtricityLowKey = GenderSettings<"SPAWN_V0849_POKEMON_TOXTRICITY_LOW_KEY">;
export type GenderSettingsV0850PokemonSizzlipede = GenderSettings<"SPAWN_V0850_POKEMON_SIZZLIPEDE">;
export type GenderSettingsV0850PokemonSizzlipedeNormal = GenderSettings<"SPAWN_V0850_POKEMON_SIZZLIPEDE_NORMAL">;
export type GenderSettingsV0851PokemonCentiskorch = GenderSettings<"SPAWN_V0851_POKEMON_CENTISKORCH">;
export type GenderSettingsV0851PokemonCentiskorchNormal = GenderSettings<"SPAWN_V0851_POKEMON_CENTISKORCH_NORMAL">;
export type GenderSettingsV0852PokemonClobbopus = GenderSettings<"SPAWN_V0852_POKEMON_CLOBBOPUS">;
export type GenderSettingsV0852PokemonClobbopusNormal = GenderSettings<"SPAWN_V0852_POKEMON_CLOBBOPUS_NORMAL">;
export type GenderSettingsV0853PokemonGrapploct = GenderSettings<"SPAWN_V0853_POKEMON_GRAPPLOCT">;
export type GenderSettingsV0853PokemonGrapploctNormal = GenderSettings<"SPAWN_V0853_POKEMON_GRAPPLOCT_NORMAL">;
export type GenderSettingsV0854PokemonSinistea = GenderSettings<"SPAWN_V0854_POKEMON_SINISTEA">;
export type GenderSettingsV0854PokemonSinisteaAntique = GenderSettings<"SPAWN_V0854_POKEMON_SINISTEA_ANTIQUE">;
export type GenderSettingsV0854PokemonSinisteaPhony = GenderSettings<"SPAWN_V0854_POKEMON_SINISTEA_PHONY">;
export type GenderSettingsV0855PokemonPolteageist = GenderSettings<"SPAWN_V0855_POKEMON_POLTEAGEIST">;
export type GenderSettingsV0855PokemonPolteageistAntique = GenderSettings<"SPAWN_V0855_POKEMON_POLTEAGEIST_ANTIQUE">;
export type GenderSettingsV0855PokemonPolteageistPhony = GenderSettings<"SPAWN_V0855_POKEMON_POLTEAGEIST_PHONY">;
export type GenderSettingsV0856PokemonHatenna = GenderSettings<"SPAWN_V0856_POKEMON_HATENNA">;
export type GenderSettingsV0856PokemonHatennaNormal = GenderSettings<"SPAWN_V0856_POKEMON_HATENNA_NORMAL">;
export type GenderSettingsV0857PokemonHattrem = GenderSettings<"SPAWN_V0857_POKEMON_HATTREM">;
export type GenderSettingsV0857PokemonHattremNormal = GenderSettings<"SPAWN_V0857_POKEMON_HATTREM_NORMAL">;
export type GenderSettingsV0858PokemonHatterene = GenderSettings<"SPAWN_V0858_POKEMON_HATTERENE">;
export type GenderSettingsV0858PokemonHattereneNormal = GenderSettings<"SPAWN_V0858_POKEMON_HATTERENE_NORMAL">;
export type GenderSettingsV0859PokemonImpidimp = GenderSettings<"SPAWN_V0859_POKEMON_IMPIDIMP">;
export type GenderSettingsV0859PokemonImpidimpNormal = GenderSettings<"SPAWN_V0859_POKEMON_IMPIDIMP_NORMAL">;
export type GenderSettingsV0860PokemonMorgrem = GenderSettings<"SPAWN_V0860_POKEMON_MORGREM">;
export type GenderSettingsV0860PokemonMorgremNormal = GenderSettings<"SPAWN_V0860_POKEMON_MORGREM_NORMAL">;
export type GenderSettingsV0861PokemonGrimmsnarl = GenderSettings<"SPAWN_V0861_POKEMON_GRIMMSNARL">;
export type GenderSettingsV0861PokemonGrimmsnarlNormal = GenderSettings<"SPAWN_V0861_POKEMON_GRIMMSNARL_NORMAL">;
export type GenderSettingsV0862PokemonObstagoon = GenderSettings<"SPAWN_V0862_POKEMON_OBSTAGOON">;
export type GenderSettingsV0862PokemonObstagoonNormal = GenderSettings<"SPAWN_V0862_POKEMON_OBSTAGOON_NORMAL">;
export type GenderSettingsV0863PokemonPerrserker = GenderSettings<"SPAWN_V0863_POKEMON_PERRSERKER">;
export type GenderSettingsV0863PokemonPerrserkerNormal = GenderSettings<"SPAWN_V0863_POKEMON_PERRSERKER_NORMAL">;
export type GenderSettingsV0864PokemonCursola = GenderSettings<"SPAWN_V0864_POKEMON_CURSOLA">;
export type GenderSettingsV0864PokemonCursolaNormal = GenderSettings<"SPAWN_V0864_POKEMON_CURSOLA_NORMAL">;
export type GenderSettingsV0865PokemonSirfetchd = GenderSettings<"SPAWN_V0865_POKEMON_SIRFETCHD">;
export type GenderSettingsV0865PokemonSirfetchdNormal = GenderSettings<"SPAWN_V0865_POKEMON_SIRFETCHD_NORMAL">;
export type GenderSettingsV0866PokemonMrRime = GenderSettings<"SPAWN_V0866_POKEMON_MR_RIME">;
export type GenderSettingsV0866PokemonMrRimeNormal = GenderSettings<"SPAWN_V0866_POKEMON_MR_RIME_NORMAL">;
export type GenderSettingsV0867PokemonRunerigus = GenderSettings<"SPAWN_V0867_POKEMON_RUNERIGUS">;
export type GenderSettingsV0867PokemonRunerigusNormal = GenderSettings<"SPAWN_V0867_POKEMON_RUNERIGUS_NORMAL">;
export type GenderSettingsV0868PokemonMilcery = GenderSettings<"SPAWN_V0868_POKEMON_MILCERY">;
export type GenderSettingsV0868PokemonMilceryNormal = GenderSettings<"SPAWN_V0868_POKEMON_MILCERY_NORMAL">;
export type GenderSettingsV0869PokemonAlcremie = GenderSettings<"SPAWN_V0869_POKEMON_ALCREMIE">;
export type GenderSettingsV0869PokemonAlcremieNormal = GenderSettings<"SPAWN_V0869_POKEMON_ALCREMIE_NORMAL">;
export type GenderSettingsV0870PokemonFalinks = GenderSettings<"SPAWN_V0870_POKEMON_FALINKS">;
export type GenderSettingsV0870PokemonFalinksGofest2025TrainConductor = GenderSettings<"SPAWN_V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR">;
export type GenderSettingsV0870PokemonFalinksNormal = GenderSettings<"SPAWN_V0870_POKEMON_FALINKS_NORMAL">;
export type GenderSettingsV0871PokemonPincurchin = GenderSettings<"SPAWN_V0871_POKEMON_PINCURCHIN">;
export type GenderSettingsV0871PokemonPincurchinNormal = GenderSettings<"SPAWN_V0871_POKEMON_PINCURCHIN_NORMAL">;
export type GenderSettingsV0872PokemonSnom = GenderSettings<"SPAWN_V0872_POKEMON_SNOM">;
export type GenderSettingsV0872PokemonSnomNormal = GenderSettings<"SPAWN_V0872_POKEMON_SNOM_NORMAL">;
export type GenderSettingsV0873PokemonFrosmoth = GenderSettings<"SPAWN_V0873_POKEMON_FROSMOTH">;
export type GenderSettingsV0873PokemonFrosmothNormal = GenderSettings<"SPAWN_V0873_POKEMON_FROSMOTH_NORMAL">;
export type GenderSettingsV0874PokemonStonjourner = GenderSettings<"SPAWN_V0874_POKEMON_STONJOURNER">;
export type GenderSettingsV0874PokemonStonjournerNormal = GenderSettings<"SPAWN_V0874_POKEMON_STONJOURNER_NORMAL">;
export type GenderSettingsV0875PokemonEiscue = GenderSettings<"SPAWN_V0875_POKEMON_EISCUE">;
export type GenderSettingsV0875PokemonEiscueIce = GenderSettings<"SPAWN_V0875_POKEMON_EISCUE_ICE">;
export type GenderSettingsV0875PokemonEiscueNoice = GenderSettings<"SPAWN_V0875_POKEMON_EISCUE_NOICE">;
export type GenderSettingsV0876PokemonIndeedee = GenderSettings<"SPAWN_V0876_POKEMON_INDEEDEE">;
export type GenderSettingsV0876PokemonIndeedeeFemale = GenderSettings<"SPAWN_V0876_POKEMON_INDEEDEE_FEMALE">;
export type GenderSettingsV0876PokemonIndeedeeMale = GenderSettings<"SPAWN_V0876_POKEMON_INDEEDEE_MALE">;
export type GenderSettingsV0877PokemonMorpeko = GenderSettings<"SPAWN_V0877_POKEMON_MORPEKO">;
export type GenderSettingsV0877PokemonMorpekoFullBelly = GenderSettings<"SPAWN_V0877_POKEMON_MORPEKO_FULL_BELLY">;
export type GenderSettingsV0877PokemonMorpekoHangry = GenderSettings<"SPAWN_V0877_POKEMON_MORPEKO_HANGRY">;
export type GenderSettingsV0878PokemonCufant = GenderSettings<"SPAWN_V0878_POKEMON_CUFANT">;
export type GenderSettingsV0878PokemonCufantNormal = GenderSettings<"SPAWN_V0878_POKEMON_CUFANT_NORMAL">;
export type GenderSettingsV0879PokemonCopperajah = GenderSettings<"SPAWN_V0879_POKEMON_COPPERAJAH">;
export type GenderSettingsV0879PokemonCopperajahNormal = GenderSettings<"SPAWN_V0879_POKEMON_COPPERAJAH_NORMAL">;
export type GenderSettingsV0880PokemonDracozolt = GenderSettings<"SPAWN_V0880_POKEMON_DRACOZOLT">;
export type GenderSettingsV0880PokemonDracozoltNormal = GenderSettings<"SPAWN_V0880_POKEMON_DRACOZOLT_NORMAL">;
export type GenderSettingsV0881PokemonArctozolt = GenderSettings<"SPAWN_V0881_POKEMON_ARCTOZOLT">;
export type GenderSettingsV0881PokemonArctozoltNormal = GenderSettings<"SPAWN_V0881_POKEMON_ARCTOZOLT_NORMAL">;
export type GenderSettingsV0882PokemonDracovish = GenderSettings<"SPAWN_V0882_POKEMON_DRACOVISH">;
export type GenderSettingsV0882PokemonDracovishNormal = GenderSettings<"SPAWN_V0882_POKEMON_DRACOVISH_NORMAL">;
export type GenderSettingsV0883PokemonArctovish = GenderSettings<"SPAWN_V0883_POKEMON_ARCTOVISH">;
export type GenderSettingsV0883PokemonArctovishNormal = GenderSettings<"SPAWN_V0883_POKEMON_ARCTOVISH_NORMAL">;
export type GenderSettingsV0884PokemonDuraludon = GenderSettings<"SPAWN_V0884_POKEMON_DURALUDON">;
export type GenderSettingsV0884PokemonDuraludonNormal = GenderSettings<"SPAWN_V0884_POKEMON_DURALUDON_NORMAL">;
export type GenderSettingsV0885PokemonDreepy = GenderSettings<"SPAWN_V0885_POKEMON_DREEPY">;
export type GenderSettingsV0885PokemonDreepyNormal = GenderSettings<"SPAWN_V0885_POKEMON_DREEPY_NORMAL">;
export type GenderSettingsV0886PokemonDrakloak = GenderSettings<"SPAWN_V0886_POKEMON_DRAKLOAK">;
export type GenderSettingsV0886PokemonDrakloakNormal = GenderSettings<"SPAWN_V0886_POKEMON_DRAKLOAK_NORMAL">;
export type GenderSettingsV0887PokemonDragapult = GenderSettings<"SPAWN_V0887_POKEMON_DRAGAPULT">;
export type GenderSettingsV0887PokemonDragapultNormal = GenderSettings<"SPAWN_V0887_POKEMON_DRAGAPULT_NORMAL">;
export type GenderSettingsV0888PokemonZacian = GenderSettings<"SPAWN_V0888_POKEMON_ZACIAN">;
export type GenderSettingsV0888PokemonZacianCrownedSword = GenderSettings<"SPAWN_V0888_POKEMON_ZACIAN_CROWNED_SWORD">;
export type GenderSettingsV0888PokemonZacianHero = GenderSettings<"SPAWN_V0888_POKEMON_ZACIAN_HERO">;
export type GenderSettingsV0889PokemonZamazenta = GenderSettings<"SPAWN_V0889_POKEMON_ZAMAZENTA">;
export type GenderSettingsV0889PokemonZamazentaCrownedShield = GenderSettings<"SPAWN_V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD">;
export type GenderSettingsV0889PokemonZamazentaHero = GenderSettings<"SPAWN_V0889_POKEMON_ZAMAZENTA_HERO">;
export type GenderSettingsV0890PokemonEternatus = GenderSettings<"SPAWN_V0890_POKEMON_ETERNATUS">;
export type GenderSettingsV0890PokemonEternatusEternamax = GenderSettings<"SPAWN_V0890_POKEMON_ETERNATUS_ETERNAMAX">;
export type GenderSettingsV0890PokemonEternatusNormal = GenderSettings<"SPAWN_V0890_POKEMON_ETERNATUS_NORMAL">;
export type GenderSettingsV0891PokemonKubfu = GenderSettings<"SPAWN_V0891_POKEMON_KUBFU">;
export type GenderSettingsV0891PokemonKubfuNormal = GenderSettings<"SPAWN_V0891_POKEMON_KUBFU_NORMAL">;
export type GenderSettingsV0892PokemonUrshifu = GenderSettings<"SPAWN_V0892_POKEMON_URSHIFU">;
export type GenderSettingsV0892PokemonUrshifuRapidStrike = GenderSettings<"SPAWN_V0892_POKEMON_URSHIFU_RAPID_STRIKE">;
export type GenderSettingsV0892PokemonUrshifuSingleStrike = GenderSettings<"SPAWN_V0892_POKEMON_URSHIFU_SINGLE_STRIKE">;
export type GenderSettingsV0893PokemonZarude = GenderSettings<"SPAWN_V0893_POKEMON_ZARUDE">;
export type GenderSettingsV0893PokemonZarudeNormal = GenderSettings<"SPAWN_V0893_POKEMON_ZARUDE_NORMAL">;
export type GenderSettingsV0894PokemonRegieleki = GenderSettings<"SPAWN_V0894_POKEMON_REGIELEKI">;
export type GenderSettingsV0894PokemonRegielekiNormal = GenderSettings<"SPAWN_V0894_POKEMON_REGIELEKI_NORMAL">;
export type GenderSettingsV0895PokemonRegidrago = GenderSettings<"SPAWN_V0895_POKEMON_REGIDRAGO">;
export type GenderSettingsV0895PokemonRegidragoNormal = GenderSettings<"SPAWN_V0895_POKEMON_REGIDRAGO_NORMAL">;
export type GenderSettingsV0896PokemonGlastrier = GenderSettings<"SPAWN_V0896_POKEMON_GLASTRIER">;
export type GenderSettingsV0896PokemonGlastrierNormal = GenderSettings<"SPAWN_V0896_POKEMON_GLASTRIER_NORMAL">;
export type GenderSettingsV0897PokemonSpectrier = GenderSettings<"SPAWN_V0897_POKEMON_SPECTRIER">;
export type GenderSettingsV0897PokemonSpectrierNormal = GenderSettings<"SPAWN_V0897_POKEMON_SPECTRIER_NORMAL">;
export type GenderSettingsV0898PokemonCalyrex = GenderSettings<"SPAWN_V0898_POKEMON_CALYREX">;
export type GenderSettingsV0898PokemonCalyrexIceRider = GenderSettings<"SPAWN_V0898_POKEMON_CALYREX_ICE_RIDER">;
export type GenderSettingsV0898PokemonCalyrexNormal = GenderSettings<"SPAWN_V0898_POKEMON_CALYREX_NORMAL">;
export type GenderSettingsV0898PokemonCalyrexShadowRider = GenderSettings<"SPAWN_V0898_POKEMON_CALYREX_SHADOW_RIDER">;
export type GenderSettingsV0899PokemonWyrdeer = GenderSettings<"SPAWN_V0899_POKEMON_WYRDEER">;
export type GenderSettingsV0899PokemonWyrdeerNormal = GenderSettings<"SPAWN_V0899_POKEMON_WYRDEER_NORMAL">;
export type GenderSettingsV0900PokemonKleavor = GenderSettings<"SPAWN_V0900_POKEMON_KLEAVOR">;
export type GenderSettingsV0900PokemonKleavorNormal = GenderSettings<"SPAWN_V0900_POKEMON_KLEAVOR_NORMAL">;
export type GenderSettingsV0901PokemonUrsaluna = GenderSettings<"SPAWN_V0901_POKEMON_URSALUNA">;
export type GenderSettingsV0901PokemonUrsalunaNormal = GenderSettings<"SPAWN_V0901_POKEMON_URSALUNA_NORMAL">;
export type GenderSettingsV0902PokemonBasculegion = GenderSettings<"SPAWN_V0902_POKEMON_BASCULEGION">;
export type GenderSettingsV0902PokemonBasculegionFemale = GenderSettings<"SPAWN_V0902_POKEMON_BASCULEGION_FEMALE">;
export type GenderSettingsV0902PokemonBasculegionNormal = GenderSettings<"SPAWN_V0902_POKEMON_BASCULEGION_NORMAL">;
export type GenderSettingsV0903PokemonSneasler = GenderSettings<"SPAWN_V0903_POKEMON_SNEASLER">;
export type GenderSettingsV0903PokemonSneaslerNormal = GenderSettings<"SPAWN_V0903_POKEMON_SNEASLER_NORMAL">;
export type GenderSettingsV0904PokemonOverqwil = GenderSettings<"SPAWN_V0904_POKEMON_OVERQWIL">;
export type GenderSettingsV0904PokemonOverqwilNormal = GenderSettings<"SPAWN_V0904_POKEMON_OVERQWIL_NORMAL">;
export type GenderSettingsV0905PokemonEnamorus = GenderSettings<"SPAWN_V0905_POKEMON_ENAMORUS">;
export type GenderSettingsV0905PokemonEnamorusIncarnate = GenderSettings<"SPAWN_V0905_POKEMON_ENAMORUS_INCARNATE">;
export type GenderSettingsV0905PokemonEnamorusTherian = GenderSettings<"SPAWN_V0905_POKEMON_ENAMORUS_THERIAN">;
export type GenderSettingsV0906PokemonSprigatito = GenderSettings<"SPAWN_V0906_POKEMON_SPRIGATITO">;
export type GenderSettingsV0906PokemonSprigatitoNormal = GenderSettings<"SPAWN_V0906_POKEMON_SPRIGATITO_NORMAL">;
export type GenderSettingsV0907PokemonFloragato = GenderSettings<"SPAWN_V0907_POKEMON_FLORAGATO">;
export type GenderSettingsV0907PokemonFloragatoNormal = GenderSettings<"SPAWN_V0907_POKEMON_FLORAGATO_NORMAL">;
export type GenderSettingsV0908PokemonMeowscarada = GenderSettings<"SPAWN_V0908_POKEMON_MEOWSCARADA">;
export type GenderSettingsV0908PokemonMeowscaradaNormal = GenderSettings<"SPAWN_V0908_POKEMON_MEOWSCARADA_NORMAL">;
export type GenderSettingsV0909PokemonFuecoco = GenderSettings<"SPAWN_V0909_POKEMON_FUECOCO">;
export type GenderSettingsV0909PokemonFuecocoNormal = GenderSettings<"SPAWN_V0909_POKEMON_FUECOCO_NORMAL">;
export type GenderSettingsV0910PokemonCrocalor = GenderSettings<"SPAWN_V0910_POKEMON_CROCALOR">;
export type GenderSettingsV0910PokemonCrocalorNormal = GenderSettings<"SPAWN_V0910_POKEMON_CROCALOR_NORMAL">;
export type GenderSettingsV0911PokemonSkeledirge = GenderSettings<"SPAWN_V0911_POKEMON_SKELEDIRGE">;
export type GenderSettingsV0911PokemonSkeledirgeNormal = GenderSettings<"SPAWN_V0911_POKEMON_SKELEDIRGE_NORMAL">;
export type GenderSettingsV0912PokemonQuaxly = GenderSettings<"SPAWN_V0912_POKEMON_QUAXLY">;
export type GenderSettingsV0912PokemonQuaxlyNormal = GenderSettings<"SPAWN_V0912_POKEMON_QUAXLY_NORMAL">;
export type GenderSettingsV0913PokemonQuaxwell = GenderSettings<"SPAWN_V0913_POKEMON_QUAXWELL">;
export type GenderSettingsV0913PokemonQuaxwellNormal = GenderSettings<"SPAWN_V0913_POKEMON_QUAXWELL_NORMAL">;
export type GenderSettingsV0914PokemonQuaquaval = GenderSettings<"SPAWN_V0914_POKEMON_QUAQUAVAL">;
export type GenderSettingsV0914PokemonQuaquavalNormal = GenderSettings<"SPAWN_V0914_POKEMON_QUAQUAVAL_NORMAL">;
export type GenderSettingsV0915PokemonLechonk = GenderSettings<"SPAWN_V0915_POKEMON_LECHONK">;
export type GenderSettingsV0915PokemonLechonkNormal = GenderSettings<"SPAWN_V0915_POKEMON_LECHONK_NORMAL">;
export type GenderSettingsV0916PokemonOinkologne = GenderSettings<"SPAWN_V0916_POKEMON_OINKOLOGNE">;
export type GenderSettingsV0916PokemonOinkologneFemale = GenderSettings<"SPAWN_V0916_POKEMON_OINKOLOGNE_FEMALE">;
export type GenderSettingsV0916PokemonOinkologneNormal = GenderSettings<"SPAWN_V0916_POKEMON_OINKOLOGNE_NORMAL">;
export type GenderSettingsV0917PokemonTarountula = GenderSettings<"SPAWN_V0917_POKEMON_TAROUNTULA">;
export type GenderSettingsV0917PokemonTarountulaNormal = GenderSettings<"SPAWN_V0917_POKEMON_TAROUNTULA_NORMAL">;
export type GenderSettingsV0918PokemonSpidops = GenderSettings<"SPAWN_V0918_POKEMON_SPIDOPS">;
export type GenderSettingsV0918PokemonSpidopsNormal = GenderSettings<"SPAWN_V0918_POKEMON_SPIDOPS_NORMAL">;
export type GenderSettingsV0919PokemonNymble = GenderSettings<"SPAWN_V0919_POKEMON_NYMBLE">;
export type GenderSettingsV0919PokemonNymbleNormal = GenderSettings<"SPAWN_V0919_POKEMON_NYMBLE_NORMAL">;
export type GenderSettingsV0920PokemonLokix = GenderSettings<"SPAWN_V0920_POKEMON_LOKIX">;
export type GenderSettingsV0920PokemonLokixNormal = GenderSettings<"SPAWN_V0920_POKEMON_LOKIX_NORMAL">;
export type GenderSettingsV0921PokemonPawmi = GenderSettings<"SPAWN_V0921_POKEMON_PAWMI">;
export type GenderSettingsV0921PokemonPawmiNormal = GenderSettings<"SPAWN_V0921_POKEMON_PAWMI_NORMAL">;
export type GenderSettingsV0922PokemonPawmo = GenderSettings<"SPAWN_V0922_POKEMON_PAWMO">;
export type GenderSettingsV0922PokemonPawmoNormal = GenderSettings<"SPAWN_V0922_POKEMON_PAWMO_NORMAL">;
export type GenderSettingsV0923PokemonPawmot = GenderSettings<"SPAWN_V0923_POKEMON_PAWMOT">;
export type GenderSettingsV0923PokemonPawmotNormal = GenderSettings<"SPAWN_V0923_POKEMON_PAWMOT_NORMAL">;
export type GenderSettingsV0924PokemonTandemaus = GenderSettings<"SPAWN_V0924_POKEMON_TANDEMAUS">;
export type GenderSettingsV0924PokemonTandemausNormal = GenderSettings<"SPAWN_V0924_POKEMON_TANDEMAUS_NORMAL">;
export type GenderSettingsV0925PokemonMaushold = GenderSettings<"SPAWN_V0925_POKEMON_MAUSHOLD">;
export type GenderSettingsV0925PokemonMausholdFamilyOfFour = GenderSettings<"SPAWN_V0925_POKEMON_MAUSHOLD_FAMILY_OF_FOUR">;
export type GenderSettingsV0925PokemonMausholdFamilyOfThree = GenderSettings<"SPAWN_V0925_POKEMON_MAUSHOLD_FAMILY_OF_THREE">;
export type GenderSettingsV0926PokemonFidough = GenderSettings<"SPAWN_V0926_POKEMON_FIDOUGH">;
export type GenderSettingsV0926PokemonFidoughNormal = GenderSettings<"SPAWN_V0926_POKEMON_FIDOUGH_NORMAL">;
export type GenderSettingsV0927PokemonDachsbun = GenderSettings<"SPAWN_V0927_POKEMON_DACHSBUN">;
export type GenderSettingsV0927PokemonDachsbunNormal = GenderSettings<"SPAWN_V0927_POKEMON_DACHSBUN_NORMAL">;
export type GenderSettingsV0928PokemonSmoliv = GenderSettings<"SPAWN_V0928_POKEMON_SMOLIV">;
export type GenderSettingsV0928PokemonSmolivNormal = GenderSettings<"SPAWN_V0928_POKEMON_SMOLIV_NORMAL">;
export type GenderSettingsV0929PokemonDolliv = GenderSettings<"SPAWN_V0929_POKEMON_DOLLIV">;
export type GenderSettingsV0929PokemonDollivNormal = GenderSettings<"SPAWN_V0929_POKEMON_DOLLIV_NORMAL">;
export type GenderSettingsV0930PokemonArboliva = GenderSettings<"SPAWN_V0930_POKEMON_ARBOLIVA">;
export type GenderSettingsV0930PokemonArbolivaNormal = GenderSettings<"SPAWN_V0930_POKEMON_ARBOLIVA_NORMAL">;
export type GenderSettingsV0931PokemonSquawkabilly = GenderSettings<"SPAWN_V0931_POKEMON_SQUAWKABILLY">;
export type GenderSettingsV0931PokemonSquawkabillyBlue = GenderSettings<"SPAWN_V0931_POKEMON_SQUAWKABILLY_BLUE">;
export type GenderSettingsV0931PokemonSquawkabillyGreen = GenderSettings<"SPAWN_V0931_POKEMON_SQUAWKABILLY_GREEN">;
export type GenderSettingsV0931PokemonSquawkabillyWhite = GenderSettings<"SPAWN_V0931_POKEMON_SQUAWKABILLY_WHITE">;
export type GenderSettingsV0931PokemonSquawkabillyYellow = GenderSettings<"SPAWN_V0931_POKEMON_SQUAWKABILLY_YELLOW">;
export type GenderSettingsV0932PokemonNacli = GenderSettings<"SPAWN_V0932_POKEMON_NACLI">;
export type GenderSettingsV0932PokemonNacliNormal = GenderSettings<"SPAWN_V0932_POKEMON_NACLI_NORMAL">;
export type GenderSettingsV0933PokemonNaclstack = GenderSettings<"SPAWN_V0933_POKEMON_NACLSTACK">;
export type GenderSettingsV0933PokemonNaclstackNormal = GenderSettings<"SPAWN_V0933_POKEMON_NACLSTACK_NORMAL">;
export type GenderSettingsV0934PokemonGarganacl = GenderSettings<"SPAWN_V0934_POKEMON_GARGANACL">;
export type GenderSettingsV0934PokemonGarganaclNormal = GenderSettings<"SPAWN_V0934_POKEMON_GARGANACL_NORMAL">;
export type GenderSettingsV0935PokemonCharcadet = GenderSettings<"SPAWN_V0935_POKEMON_CHARCADET">;
export type GenderSettingsV0935PokemonCharcadetNormal = GenderSettings<"SPAWN_V0935_POKEMON_CHARCADET_NORMAL">;
export type GenderSettingsV0936PokemonArmarouge = GenderSettings<"SPAWN_V0936_POKEMON_ARMAROUGE">;
export type GenderSettingsV0936PokemonArmarougeNormal = GenderSettings<"SPAWN_V0936_POKEMON_ARMAROUGE_NORMAL">;
export type GenderSettingsV0937PokemonCeruledge = GenderSettings<"SPAWN_V0937_POKEMON_CERULEDGE">;
export type GenderSettingsV0937PokemonCeruledgeNormal = GenderSettings<"SPAWN_V0937_POKEMON_CERULEDGE_NORMAL">;
export type GenderSettingsV0938PokemonTadbulb = GenderSettings<"SPAWN_V0938_POKEMON_TADBULB">;
export type GenderSettingsV0938PokemonTadbulbNormal = GenderSettings<"SPAWN_V0938_POKEMON_TADBULB_NORMAL">;
export type GenderSettingsV0939PokemonBellibolt = GenderSettings<"SPAWN_V0939_POKEMON_BELLIBOLT">;
export type GenderSettingsV0939PokemonBelliboltNormal = GenderSettings<"SPAWN_V0939_POKEMON_BELLIBOLT_NORMAL">;
export type GenderSettingsV0940PokemonWattrel = GenderSettings<"SPAWN_V0940_POKEMON_WATTREL">;
export type GenderSettingsV0940PokemonWattrelNormal = GenderSettings<"SPAWN_V0940_POKEMON_WATTREL_NORMAL">;
export type GenderSettingsV0941PokemonKilowattrel = GenderSettings<"SPAWN_V0941_POKEMON_KILOWATTREL">;
export type GenderSettingsV0941PokemonKilowattrelNormal = GenderSettings<"SPAWN_V0941_POKEMON_KILOWATTREL_NORMAL">;
export type GenderSettingsV0942PokemonMaschiff = GenderSettings<"SPAWN_V0942_POKEMON_MASCHIFF">;
export type GenderSettingsV0942PokemonMaschiffNormal = GenderSettings<"SPAWN_V0942_POKEMON_MASCHIFF_NORMAL">;
export type GenderSettingsV0943PokemonMabosstiff = GenderSettings<"SPAWN_V0943_POKEMON_MABOSSTIFF">;
export type GenderSettingsV0943PokemonMabosstiffNormal = GenderSettings<"SPAWN_V0943_POKEMON_MABOSSTIFF_NORMAL">;
export type GenderSettingsV0944PokemonShroodle = GenderSettings<"SPAWN_V0944_POKEMON_SHROODLE">;
export type GenderSettingsV0944PokemonShroodleNormal = GenderSettings<"SPAWN_V0944_POKEMON_SHROODLE_NORMAL">;
export type GenderSettingsV0945PokemonGrafaiai = GenderSettings<"SPAWN_V0945_POKEMON_GRAFAIAI">;
export type GenderSettingsV0945PokemonGrafaiaiNormal = GenderSettings<"SPAWN_V0945_POKEMON_GRAFAIAI_NORMAL">;
export type GenderSettingsV0946PokemonBramblin = GenderSettings<"SPAWN_V0946_POKEMON_BRAMBLIN">;
export type GenderSettingsV0946PokemonBramblinNormal = GenderSettings<"SPAWN_V0946_POKEMON_BRAMBLIN_NORMAL">;
export type GenderSettingsV0947PokemonBrambleghast = GenderSettings<"SPAWN_V0947_POKEMON_BRAMBLEGHAST">;
export type GenderSettingsV0947PokemonBrambleghastNormal = GenderSettings<"SPAWN_V0947_POKEMON_BRAMBLEGHAST_NORMAL">;
export type GenderSettingsV0948PokemonToedscool = GenderSettings<"SPAWN_V0948_POKEMON_TOEDSCOOL">;
export type GenderSettingsV0948PokemonToedscoolNormal = GenderSettings<"SPAWN_V0948_POKEMON_TOEDSCOOL_NORMAL">;
export type GenderSettingsV0949PokemonToedscruel = GenderSettings<"SPAWN_V0949_POKEMON_TOEDSCRUEL">;
export type GenderSettingsV0949PokemonToedscruelNormal = GenderSettings<"SPAWN_V0949_POKEMON_TOEDSCRUEL_NORMAL">;
export type GenderSettingsV0950PokemonKlawf = GenderSettings<"SPAWN_V0950_POKEMON_KLAWF">;
export type GenderSettingsV0950PokemonKlawfNormal = GenderSettings<"SPAWN_V0950_POKEMON_KLAWF_NORMAL">;
export type GenderSettingsV0951PokemonCapsakid = GenderSettings<"SPAWN_V0951_POKEMON_CAPSAKID">;
export type GenderSettingsV0951PokemonCapsakidNormal = GenderSettings<"SPAWN_V0951_POKEMON_CAPSAKID_NORMAL">;
export type GenderSettingsV0952PokemonScovillain = GenderSettings<"SPAWN_V0952_POKEMON_SCOVILLAIN">;
export type GenderSettingsV0952PokemonScovillainNormal = GenderSettings<"SPAWN_V0952_POKEMON_SCOVILLAIN_NORMAL">;
export type GenderSettingsV0953PokemonRellor = GenderSettings<"SPAWN_V0953_POKEMON_RELLOR">;
export type GenderSettingsV0953PokemonRellorNormal = GenderSettings<"SPAWN_V0953_POKEMON_RELLOR_NORMAL">;
export type GenderSettingsV0954PokemonRabsca = GenderSettings<"SPAWN_V0954_POKEMON_RABSCA">;
export type GenderSettingsV0954PokemonRabscaNormal = GenderSettings<"SPAWN_V0954_POKEMON_RABSCA_NORMAL">;
export type GenderSettingsV0955PokemonFlittle = GenderSettings<"SPAWN_V0955_POKEMON_FLITTLE">;
export type GenderSettingsV0955PokemonFlittleNormal = GenderSettings<"SPAWN_V0955_POKEMON_FLITTLE_NORMAL">;
export type GenderSettingsV0956PokemonEspathra = GenderSettings<"SPAWN_V0956_POKEMON_ESPATHRA">;
export type GenderSettingsV0956PokemonEspathraNormal = GenderSettings<"SPAWN_V0956_POKEMON_ESPATHRA_NORMAL">;
export type GenderSettingsV0957PokemonTinkatink = GenderSettings<"SPAWN_V0957_POKEMON_TINKATINK">;
export type GenderSettingsV0957PokemonTinkatinkNormal = GenderSettings<"SPAWN_V0957_POKEMON_TINKATINK_NORMAL">;
export type GenderSettingsV0958PokemonTinkatuff = GenderSettings<"SPAWN_V0958_POKEMON_TINKATUFF">;
export type GenderSettingsV0958PokemonTinkatuffNormal = GenderSettings<"SPAWN_V0958_POKEMON_TINKATUFF_NORMAL">;
export type GenderSettingsV0959PokemonTinkaton = GenderSettings<"SPAWN_V0959_POKEMON_TINKATON">;
export type GenderSettingsV0959PokemonTinkatonNormal = GenderSettings<"SPAWN_V0959_POKEMON_TINKATON_NORMAL">;
export type GenderSettingsV0960PokemonWiglett = GenderSettings<"SPAWN_V0960_POKEMON_WIGLETT">;
export type GenderSettingsV0960PokemonWiglettNormal = GenderSettings<"SPAWN_V0960_POKEMON_WIGLETT_NORMAL">;
export type GenderSettingsV0961PokemonWugtrio = GenderSettings<"SPAWN_V0961_POKEMON_WUGTRIO">;
export type GenderSettingsV0961PokemonWugtrioNormal = GenderSettings<"SPAWN_V0961_POKEMON_WUGTRIO_NORMAL">;
export type GenderSettingsV0962PokemonBombirdier = GenderSettings<"SPAWN_V0962_POKEMON_BOMBIRDIER">;
export type GenderSettingsV0962PokemonBombirdierNormal = GenderSettings<"SPAWN_V0962_POKEMON_BOMBIRDIER_NORMAL">;
export type GenderSettingsV0963PokemonFinizen = GenderSettings<"SPAWN_V0963_POKEMON_FINIZEN">;
export type GenderSettingsV0963PokemonFinizenNormal = GenderSettings<"SPAWN_V0963_POKEMON_FINIZEN_NORMAL">;
export type GenderSettingsV0964PokemonPalafin = GenderSettings<"SPAWN_V0964_POKEMON_PALAFIN">;
export type GenderSettingsV0964PokemonPalafinHero = GenderSettings<"SPAWN_V0964_POKEMON_PALAFIN_HERO">;
export type GenderSettingsV0964PokemonPalafinZero = GenderSettings<"SPAWN_V0964_POKEMON_PALAFIN_ZERO">;
export type GenderSettingsV0965PokemonVaroom = GenderSettings<"SPAWN_V0965_POKEMON_VAROOM">;
export type GenderSettingsV0965PokemonVaroomNormal = GenderSettings<"SPAWN_V0965_POKEMON_VAROOM_NORMAL">;
export type GenderSettingsV0966PokemonRevavroom = GenderSettings<"SPAWN_V0966_POKEMON_REVAVROOM">;
export type GenderSettingsV0966PokemonRevavroomNormal = GenderSettings<"SPAWN_V0966_POKEMON_REVAVROOM_NORMAL">;
export type GenderSettingsV0967PokemonCyclizar = GenderSettings<"SPAWN_V0967_POKEMON_CYCLIZAR">;
export type GenderSettingsV0967PokemonCyclizarNormal = GenderSettings<"SPAWN_V0967_POKEMON_CYCLIZAR_NORMAL">;
export type GenderSettingsV0968PokemonOrthworm = GenderSettings<"SPAWN_V0968_POKEMON_ORTHWORM">;
export type GenderSettingsV0968PokemonOrthwormNormal = GenderSettings<"SPAWN_V0968_POKEMON_ORTHWORM_NORMAL">;
export type GenderSettingsV0969PokemonGlimmet = GenderSettings<"SPAWN_V0969_POKEMON_GLIMMET">;
export type GenderSettingsV0969PokemonGlimmetNormal = GenderSettings<"SPAWN_V0969_POKEMON_GLIMMET_NORMAL">;
export type GenderSettingsV0970PokemonGlimmora = GenderSettings<"SPAWN_V0970_POKEMON_GLIMMORA">;
export type GenderSettingsV0970PokemonGlimmoraNormal = GenderSettings<"SPAWN_V0970_POKEMON_GLIMMORA_NORMAL">;
export type GenderSettingsV0971PokemonGreavard = GenderSettings<"SPAWN_V0971_POKEMON_GREAVARD">;
export type GenderSettingsV0971PokemonGreavardNormal = GenderSettings<"SPAWN_V0971_POKEMON_GREAVARD_NORMAL">;
export type GenderSettingsV0972PokemonHoundstone = GenderSettings<"SPAWN_V0972_POKEMON_HOUNDSTONE">;
export type GenderSettingsV0972PokemonHoundstoneNormal = GenderSettings<"SPAWN_V0972_POKEMON_HOUNDSTONE_NORMAL">;
export type GenderSettingsV0973PokemonFlamigo = GenderSettings<"SPAWN_V0973_POKEMON_FLAMIGO">;
export type GenderSettingsV0973PokemonFlamigoNormal = GenderSettings<"SPAWN_V0973_POKEMON_FLAMIGO_NORMAL">;
export type GenderSettingsV0974PokemonCetoddle = GenderSettings<"SPAWN_V0974_POKEMON_CETODDLE">;
export type GenderSettingsV0974PokemonCetoddleNormal = GenderSettings<"SPAWN_V0974_POKEMON_CETODDLE_NORMAL">;
export type GenderSettingsV0975PokemonCetitan = GenderSettings<"SPAWN_V0975_POKEMON_CETITAN">;
export type GenderSettingsV0975PokemonCetitanNormal = GenderSettings<"SPAWN_V0975_POKEMON_CETITAN_NORMAL">;
export type GenderSettingsV0976PokemonVeluza = GenderSettings<"SPAWN_V0976_POKEMON_VELUZA">;
export type GenderSettingsV0976PokemonVeluzaNormal = GenderSettings<"SPAWN_V0976_POKEMON_VELUZA_NORMAL">;
export type GenderSettingsV0977PokemonDondozo = GenderSettings<"SPAWN_V0977_POKEMON_DONDOZO">;
export type GenderSettingsV0977PokemonDondozoNormal = GenderSettings<"SPAWN_V0977_POKEMON_DONDOZO_NORMAL">;
export type GenderSettingsV0978PokemonTatsugiri = GenderSettings<"SPAWN_V0978_POKEMON_TATSUGIRI">;
export type GenderSettingsV0978PokemonTatsugiriCurly = GenderSettings<"SPAWN_V0978_POKEMON_TATSUGIRI_CURLY">;
export type GenderSettingsV0978PokemonTatsugiriDroopy = GenderSettings<"SPAWN_V0978_POKEMON_TATSUGIRI_DROOPY">;
export type GenderSettingsV0978PokemonTatsugiriStretchy = GenderSettings<"SPAWN_V0978_POKEMON_TATSUGIRI_STRETCHY">;
export type GenderSettingsV0979PokemonAnnihilape = GenderSettings<"SPAWN_V0979_POKEMON_ANNIHILAPE">;
export type GenderSettingsV0979PokemonAnnihilapeNormal = GenderSettings<"SPAWN_V0979_POKEMON_ANNIHILAPE_NORMAL">;
export type GenderSettingsV0980PokemonClodsire = GenderSettings<"SPAWN_V0980_POKEMON_CLODSIRE">;
export type GenderSettingsV0980PokemonClodsireNormal = GenderSettings<"SPAWN_V0980_POKEMON_CLODSIRE_NORMAL">;
export type GenderSettingsV0981PokemonFarigiraf = GenderSettings<"SPAWN_V0981_POKEMON_FARIGIRAF">;
export type GenderSettingsV0981PokemonFarigirafNormal = GenderSettings<"SPAWN_V0981_POKEMON_FARIGIRAF_NORMAL">;
export type GenderSettingsV0982PokemonDudunsparce = GenderSettings<"SPAWN_V0982_POKEMON_DUDUNSPARCE">;
export type GenderSettingsV0982PokemonDudunsparceThree = GenderSettings<"SPAWN_V0982_POKEMON_DUDUNSPARCE_THREE">;
export type GenderSettingsV0982PokemonDudunsparceTwo = GenderSettings<"SPAWN_V0982_POKEMON_DUDUNSPARCE_TWO">;
export type GenderSettingsV0983PokemonKingambit = GenderSettings<"SPAWN_V0983_POKEMON_KINGAMBIT">;
export type GenderSettingsV0983PokemonKingambitNormal = GenderSettings<"SPAWN_V0983_POKEMON_KINGAMBIT_NORMAL">;
export type GenderSettingsV0984PokemonGreattusk = GenderSettings<"SPAWN_V0984_POKEMON_GREATTUSK">;
export type GenderSettingsV0984PokemonGreattuskNormal = GenderSettings<"SPAWN_V0984_POKEMON_GREATTUSK_NORMAL">;
export type GenderSettingsV0985PokemonScreamtail = GenderSettings<"SPAWN_V0985_POKEMON_SCREAMTAIL">;
export type GenderSettingsV0985PokemonScreamtailNormal = GenderSettings<"SPAWN_V0985_POKEMON_SCREAMTAIL_NORMAL">;
export type GenderSettingsV0986PokemonBrutebonnet = GenderSettings<"SPAWN_V0986_POKEMON_BRUTEBONNET">;
export type GenderSettingsV0986PokemonBrutebonnetNormal = GenderSettings<"SPAWN_V0986_POKEMON_BRUTEBONNET_NORMAL">;
export type GenderSettingsV0987PokemonFluttermane = GenderSettings<"SPAWN_V0987_POKEMON_FLUTTERMANE">;
export type GenderSettingsV0987PokemonFluttermaneNormal = GenderSettings<"SPAWN_V0987_POKEMON_FLUTTERMANE_NORMAL">;
export type GenderSettingsV0988PokemonSlitherwing = GenderSettings<"SPAWN_V0988_POKEMON_SLITHERWING">;
export type GenderSettingsV0988PokemonSlitherwingNormal = GenderSettings<"SPAWN_V0988_POKEMON_SLITHERWING_NORMAL">;
export type GenderSettingsV0989PokemonSandyshocks = GenderSettings<"SPAWN_V0989_POKEMON_SANDYSHOCKS">;
export type GenderSettingsV0989PokemonSandyshocksNormal = GenderSettings<"SPAWN_V0989_POKEMON_SANDYSHOCKS_NORMAL">;
export type GenderSettingsV0990PokemonIrontreads = GenderSettings<"SPAWN_V0990_POKEMON_IRONTREADS">;
export type GenderSettingsV0990PokemonIrontreadsNormal = GenderSettings<"SPAWN_V0990_POKEMON_IRONTREADS_NORMAL">;
export type GenderSettingsV0991PokemonIronbundle = GenderSettings<"SPAWN_V0991_POKEMON_IRONBUNDLE">;
export type GenderSettingsV0991PokemonIronbundleNormal = GenderSettings<"SPAWN_V0991_POKEMON_IRONBUNDLE_NORMAL">;
export type GenderSettingsV0992PokemonIronhands = GenderSettings<"SPAWN_V0992_POKEMON_IRONHANDS">;
export type GenderSettingsV0992PokemonIronhandsNormal = GenderSettings<"SPAWN_V0992_POKEMON_IRONHANDS_NORMAL">;
export type GenderSettingsV0993PokemonIronjugulis = GenderSettings<"SPAWN_V0993_POKEMON_IRONJUGULIS">;
export type GenderSettingsV0993PokemonIronjugulisNormal = GenderSettings<"SPAWN_V0993_POKEMON_IRONJUGULIS_NORMAL">;
export type GenderSettingsV0994PokemonIronmoth = GenderSettings<"SPAWN_V0994_POKEMON_IRONMOTH">;
export type GenderSettingsV0994PokemonIronmothNormal = GenderSettings<"SPAWN_V0994_POKEMON_IRONMOTH_NORMAL">;
export type GenderSettingsV0995PokemonIronthorns = GenderSettings<"SPAWN_V0995_POKEMON_IRONTHORNS">;
export type GenderSettingsV0995PokemonIronthornsNormal = GenderSettings<"SPAWN_V0995_POKEMON_IRONTHORNS_NORMAL">;
export type GenderSettingsV0996PokemonFrigibax = GenderSettings<"SPAWN_V0996_POKEMON_FRIGIBAX">;
export type GenderSettingsV0996PokemonFrigibaxNormal = GenderSettings<"SPAWN_V0996_POKEMON_FRIGIBAX_NORMAL">;
export type GenderSettingsV0997PokemonArctibax = GenderSettings<"SPAWN_V0997_POKEMON_ARCTIBAX">;
export type GenderSettingsV0997PokemonArctibaxNormal = GenderSettings<"SPAWN_V0997_POKEMON_ARCTIBAX_NORMAL">;
export type GenderSettingsV0998PokemonBaxcalibur = GenderSettings<"SPAWN_V0998_POKEMON_BAXCALIBUR">;
export type GenderSettingsV0998PokemonBaxcaliburNormal = GenderSettings<"SPAWN_V0998_POKEMON_BAXCALIBUR_NORMAL">;
export type GenderSettingsV0999PokemonGimmighoul = GenderSettings<"SPAWN_V0999_POKEMON_GIMMIGHOUL">;
export type GenderSettingsV0999PokemonGimmighoulCoinA1 = GenderSettings<"SPAWN_V0999_POKEMON_GIMMIGHOUL_COIN_A1">;
export type GenderSettingsV0999PokemonGimmighoulNormal = GenderSettings<"SPAWN_V0999_POKEMON_GIMMIGHOUL_NORMAL">;
export type GenderSettingsV1000PokemonGholdengo = GenderSettings<"SPAWN_V1000_POKEMON_GHOLDENGO">;
export type GenderSettingsV1000PokemonGholdengoNormal = GenderSettings<"SPAWN_V1000_POKEMON_GHOLDENGO_NORMAL">;
export type GenderSettingsV1001PokemonWochien = GenderSettings<"SPAWN_V1001_POKEMON_WOCHIEN">;
export type GenderSettingsV1001PokemonWochienNormal = GenderSettings<"SPAWN_V1001_POKEMON_WOCHIEN_NORMAL">;
export type GenderSettingsV1002PokemonChienpao = GenderSettings<"SPAWN_V1002_POKEMON_CHIENPAO">;
export type GenderSettingsV1002PokemonChienpaoNormal = GenderSettings<"SPAWN_V1002_POKEMON_CHIENPAO_NORMAL">;
export type GenderSettingsV1003PokemonTinglu = GenderSettings<"SPAWN_V1003_POKEMON_TINGLU">;
export type GenderSettingsV1003PokemonTingluNormal = GenderSettings<"SPAWN_V1003_POKEMON_TINGLU_NORMAL">;
export type GenderSettingsV1004PokemonChiyu = GenderSettings<"SPAWN_V1004_POKEMON_CHIYU">;
export type GenderSettingsV1004PokemonChiyuNormal = GenderSettings<"SPAWN_V1004_POKEMON_CHIYU_NORMAL">;
export type GenderSettingsV1005PokemonRoaringmoon = GenderSettings<"SPAWN_V1005_POKEMON_ROARINGMOON">;
export type GenderSettingsV1005PokemonRoaringmoonNormal = GenderSettings<"SPAWN_V1005_POKEMON_ROARINGMOON_NORMAL">;
export type GenderSettingsV1006PokemonIronvaliant = GenderSettings<"SPAWN_V1006_POKEMON_IRONVALIANT">;
export type GenderSettingsV1006PokemonIronvaliantNormal = GenderSettings<"SPAWN_V1006_POKEMON_IRONVALIANT_NORMAL">;
export type GenderSettingsV1007PokemonKoraidon = GenderSettings<"SPAWN_V1007_POKEMON_KORAIDON">;
export type GenderSettingsV1007PokemonKoraidonApex = GenderSettings<"SPAWN_V1007_POKEMON_KORAIDON_APEX">;
export type GenderSettingsV1008PokemonMiraidon = GenderSettings<"SPAWN_V1008_POKEMON_MIRAIDON">;
export type GenderSettingsV1008PokemonMiraidonUltimate = GenderSettings<"SPAWN_V1008_POKEMON_MIRAIDON_ULTIMATE">;
export type GenderSettingsV1009PokemonWalkingwake = GenderSettings<"SPAWN_V1009_POKEMON_WALKINGWAKE">;
export type GenderSettingsV1009PokemonWalkingwakeNormal = GenderSettings<"SPAWN_V1009_POKEMON_WALKINGWAKE_NORMAL">;
export type GenderSettingsV1010PokemonIronleaves = GenderSettings<"SPAWN_V1010_POKEMON_IRONLEAVES">;
export type GenderSettingsV1010PokemonIronleavesNormal = GenderSettings<"SPAWN_V1010_POKEMON_IRONLEAVES_NORMAL">;
export type GenderSettingsV1011PokemonDipplin = GenderSettings<"SPAWN_V1011_POKEMON_DIPPLIN">;
export type GenderSettingsV1011PokemonDipplinNormal = GenderSettings<"SPAWN_V1011_POKEMON_DIPPLIN_NORMAL">;
export type GenderSettingsV1012PokemonPoltchageist = GenderSettings<"SPAWN_V1012_POKEMON_POLTCHAGEIST">;
export type GenderSettingsV1012PokemonPoltchageistArtisan = GenderSettings<"SPAWN_V1012_POKEMON_POLTCHAGEIST_ARTISAN">;
export type GenderSettingsV1012PokemonPoltchageistCounterfeit = GenderSettings<"SPAWN_V1012_POKEMON_POLTCHAGEIST_COUNTERFEIT">;
export type GenderSettingsV1013PokemonSinistcha = GenderSettings<"SPAWN_V1013_POKEMON_SINISTCHA">;
export type GenderSettingsV1013PokemonSinistchaMasterpiece = GenderSettings<"SPAWN_V1013_POKEMON_SINISTCHA_MASTERPIECE">;
export type GenderSettingsV1013PokemonSinistchaUnremarkable = GenderSettings<"SPAWN_V1013_POKEMON_SINISTCHA_UNREMARKABLE">;
export type GenderSettingsV1014PokemonOkidogi = GenderSettings<"SPAWN_V1014_POKEMON_OKIDOGI">;
export type GenderSettingsV1014PokemonOkidogiNormal = GenderSettings<"SPAWN_V1014_POKEMON_OKIDOGI_NORMAL">;
export type GenderSettingsV1015PokemonMunkidori = GenderSettings<"SPAWN_V1015_POKEMON_MUNKIDORI">;
export type GenderSettingsV1015PokemonMunkidoriNormal = GenderSettings<"SPAWN_V1015_POKEMON_MUNKIDORI_NORMAL">;
export type GenderSettingsV1016PokemonFezandipiti = GenderSettings<"SPAWN_V1016_POKEMON_FEZANDIPITI">;
export type GenderSettingsV1016PokemonFezandipitiNormal = GenderSettings<"SPAWN_V1016_POKEMON_FEZANDIPITI_NORMAL">;
export type GenderSettingsV1017PokemonOgerpon = GenderSettings<"SPAWN_V1017_POKEMON_OGERPON">;
export type GenderSettingsV1018PokemonArchaludon = GenderSettings<"SPAWN_V1018_POKEMON_ARCHALUDON">;
export type GenderSettingsV1018PokemonArchaludonNormal = GenderSettings<"SPAWN_V1018_POKEMON_ARCHALUDON_NORMAL">;
export type GenderSettingsV1019PokemonHydrapple = GenderSettings<"SPAWN_V1019_POKEMON_HYDRAPPLE">;
export type GenderSettingsV1019PokemonHydrappleNormal = GenderSettings<"SPAWN_V1019_POKEMON_HYDRAPPLE_NORMAL">;
export type GenderSettingsV1020PokemonGougingfire = GenderSettings<"SPAWN_V1020_POKEMON_GOUGINGFIRE">;
export type GenderSettingsV1020PokemonGougingfireNormal = GenderSettings<"SPAWN_V1020_POKEMON_GOUGINGFIRE_NORMAL">;
export type GenderSettingsV1021PokemonRagingbolt = GenderSettings<"SPAWN_V1021_POKEMON_RAGINGBOLT">;
export type GenderSettingsV1021PokemonRagingboltNormal = GenderSettings<"SPAWN_V1021_POKEMON_RAGINGBOLT_NORMAL">;
export type GenderSettingsV1022PokemonIronboulder = GenderSettings<"SPAWN_V1022_POKEMON_IRONBOULDER">;
export type GenderSettingsV1022PokemonIronboulderNormal = GenderSettings<"SPAWN_V1022_POKEMON_IRONBOULDER_NORMAL">;
export type GenderSettingsV1023PokemonIroncrown = GenderSettings<"SPAWN_V1023_POKEMON_IRONCROWN">;
export type GenderSettingsV1023PokemonIroncrownNormal = GenderSettings<"SPAWN_V1023_POKEMON_IRONCROWN_NORMAL">;
export type GenderSettingsV1024PokemonTerapagos = GenderSettings<"SPAWN_V1024_POKEMON_TERAPAGOS">;
export type GenderSettingsV1024PokemonTerapagosNormal = GenderSettings<"SPAWN_V1024_POKEMON_TERAPAGOS_NORMAL">;
export type GenderSettingsV1025PokemonPecharunt = GenderSettings<"SPAWN_V1025_POKEMON_PECHARUNT">;
export type GenderSettingsV1025PokemonPecharuntNormal = GenderSettings<"SPAWN_V1025_POKEMON_PECHARUNT_NORMAL">;

export type GenderSettingsMasterfileEntry =
	| GenderSettingsV0001PokemonBulbasaur
	| GenderSettingsV0001PokemonBulbasaurFall2019
	| GenderSettingsV0001PokemonBulbasaurNormal
	| GenderSettingsV0002PokemonIvysaur
	| GenderSettingsV0002PokemonIvysaurNormal
	| GenderSettingsV0003PokemonVenusaur
	| GenderSettingsV0003PokemonVenusaurCopy2019
	| GenderSettingsV0003PokemonVenusaurNormal
	| GenderSettingsV0004PokemonCharmander
	| GenderSettingsV0004PokemonCharmanderFall2019
	| GenderSettingsV0004PokemonCharmanderNormal
	| GenderSettingsV0005PokemonCharmeleon
	| GenderSettingsV0005PokemonCharmeleonNormal
	| GenderSettingsV0006PokemonCharizard
	| GenderSettingsV0006PokemonCharizardCopy2019
	| GenderSettingsV0006PokemonCharizardNormal
	| GenderSettingsV0007PokemonSquirtle
	| GenderSettingsV0007PokemonSquirtleFall2019
	| GenderSettingsV0007PokemonSquirtleNormal
	| GenderSettingsV0008PokemonWartortle
	| GenderSettingsV0008PokemonWartortleNormal
	| GenderSettingsV0009PokemonBlastoise
	| GenderSettingsV0009PokemonBlastoiseCopy2019
	| GenderSettingsV0009PokemonBlastoiseNormal
	| GenderSettingsV0010PokemonCaterpie
	| GenderSettingsV0010PokemonCaterpieGofest2026
	| GenderSettingsV0010PokemonCaterpieNormal
	| GenderSettingsV0011PokemonMetapod
	| GenderSettingsV0011PokemonMetapodNormal
	| GenderSettingsV0012PokemonButterfree
	| GenderSettingsV0012PokemonButterfreeNormal
	| GenderSettingsV0013PokemonWeedle
	| GenderSettingsV0013PokemonWeedleNormal
	| GenderSettingsV0014PokemonKakuna
	| GenderSettingsV0014PokemonKakunaNormal
	| GenderSettingsV0015PokemonBeedrill
	| GenderSettingsV0015PokemonBeedrillNormal
	| GenderSettingsV0016PokemonPidgey
	| GenderSettingsV0016PokemonPidgeyNormal
	| GenderSettingsV0017PokemonPidgeotto
	| GenderSettingsV0017PokemonPidgeottoNormal
	| GenderSettingsV0018PokemonPidgeot
	| GenderSettingsV0018PokemonPidgeotNormal
	| GenderSettingsV0019PokemonRattata
	| GenderSettingsV0019PokemonRattataAlola
	| GenderSettingsV0019PokemonRattataNormal
	| GenderSettingsV0020PokemonRaticate
	| GenderSettingsV0020PokemonRaticateAlola
	| GenderSettingsV0020PokemonRaticateNormal
	| GenderSettingsV0021PokemonSpearow
	| GenderSettingsV0021PokemonSpearowNormal
	| GenderSettingsV0022PokemonFearow
	| GenderSettingsV0022PokemonFearowNormal
	| GenderSettingsV0023PokemonEkans
	| GenderSettingsV0023PokemonEkansNormal
	| GenderSettingsV0024PokemonArbok
	| GenderSettingsV0024PokemonArbokNormal
	| GenderSettingsV0025PokemonPikachu
	| GenderSettingsV0025PokemonPikachuAdventureHat2020
	| GenderSettingsV0025PokemonPikachuBb2026
	| GenderSettingsV0025PokemonPikachuCopy2019
	| GenderSettingsV0025PokemonPikachuCostume2020
	| GenderSettingsV0025PokemonPikachuDiwali2024
	| GenderSettingsV0025PokemonPikachuDoctor
	| GenderSettingsV0025PokemonPikachuFall2019
	| GenderSettingsV0025PokemonPikachuFlying01
	| GenderSettingsV0025PokemonPikachuFlying02
	| GenderSettingsV0025PokemonPikachuFlying03
	| GenderSettingsV0025PokemonPikachuFlying04
	| GenderSettingsV0025PokemonPikachuFlying5thAnniv
	| GenderSettingsV0025PokemonPikachuFlyingOkinawa
	| GenderSettingsV0025PokemonPikachuGofest2022
	| GenderSettingsV0025PokemonPikachuGofest2024Mtiara
	| GenderSettingsV0025PokemonPikachuGofest2024Stiara
	| GenderSettingsV0025PokemonPikachuGofest2025GogglesBlue
	| GenderSettingsV0025PokemonPikachuGofest2025GogglesRed
	| GenderSettingsV0025PokemonPikachuGofest2025GogglesYellow
	| GenderSettingsV0025PokemonPikachuGofest2025MonocleBlue
	| GenderSettingsV0025PokemonPikachuGofest2025MonocleRed
	| GenderSettingsV0025PokemonPikachuGofest2025MonocleYellow
	| GenderSettingsV0025PokemonPikachuGofest2026CapBlue
	| GenderSettingsV0025PokemonPikachuGofest2026CapRed
	| GenderSettingsV0025PokemonPikachuGofest2026CapYellow
	| GenderSettingsV0025PokemonPikachuGotour2024A
	| GenderSettingsV0025PokemonPikachuGotour2024A02
	| GenderSettingsV0025PokemonPikachuGotour2024B
	| GenderSettingsV0025PokemonPikachuGotour2024B02
	| GenderSettingsV0025PokemonPikachuGotour2025A
	| GenderSettingsV0025PokemonPikachuGotour2025A02
	| GenderSettingsV0025PokemonPikachuGotour2025B
	| GenderSettingsV0025PokemonPikachuGotour2025B02
	| GenderSettingsV0025PokemonPikachuGotour2026A
	| GenderSettingsV0025PokemonPikachuGotour2026A02
	| GenderSettingsV0025PokemonPikachuGotour2026B
	| GenderSettingsV0025PokemonPikachuGotour2026B02
	| GenderSettingsV0025PokemonPikachuGotour2026C
	| GenderSettingsV0025PokemonPikachuGotour2026C02
	| GenderSettingsV0025PokemonPikachuHorizons
	| GenderSettingsV0025PokemonPikachuJeju
	| GenderSettingsV0025PokemonPikachuKariyushi
	| GenderSettingsV0025PokemonPikachuKurta
	| GenderSettingsV0025PokemonPikachuNormal
	| GenderSettingsV0025PokemonPikachuPopStar
	| GenderSettingsV0025PokemonPikachuRockStar
	| GenderSettingsV0025PokemonPikachuSummer2023A
	| GenderSettingsV0025PokemonPikachuSummer2023B
	| GenderSettingsV0025PokemonPikachuSummer2023C
	| GenderSettingsV0025PokemonPikachuSummer2023D
	| GenderSettingsV0025PokemonPikachuSummer2023E
	| GenderSettingsV0025PokemonPikachuTshirt01
	| GenderSettingsV0025PokemonPikachuTshirt02
	| GenderSettingsV0025PokemonPikachuTshirt03
	| GenderSettingsV0025PokemonPikachuVs2019
	| GenderSettingsV0025PokemonPikachuWcs2022
	| GenderSettingsV0025PokemonPikachuWcs2023
	| GenderSettingsV0025PokemonPikachuWcs2024
	| GenderSettingsV0025PokemonPikachuWcs2025
	| GenderSettingsV0025PokemonPikachuWinter2020
	| GenderSettingsV0026PokemonRaichu
	| GenderSettingsV0026PokemonRaichuAlola
	| GenderSettingsV0026PokemonRaichuNormal
	| GenderSettingsV0027PokemonSandshrew
	| GenderSettingsV0027PokemonSandshrewAlola
	| GenderSettingsV0027PokemonSandshrewNormal
	| GenderSettingsV0028PokemonSandslash
	| GenderSettingsV0028PokemonSandslashAlola
	| GenderSettingsV0028PokemonSandslashNormal
	| GenderSettingsV0029PokemonNidoran
	| GenderSettingsV0029PokemonNidoranNormal
	| GenderSettingsV0030PokemonNidorina
	| GenderSettingsV0030PokemonNidorinaNormal
	| GenderSettingsV0031PokemonNidoqueen
	| GenderSettingsV0031PokemonNidoqueenNormal
	| GenderSettingsV0032PokemonNidoran
	| GenderSettingsV0032PokemonNidoranNormal
	| GenderSettingsV0033PokemonNidorino
	| GenderSettingsV0033PokemonNidorinoNormal
	| GenderSettingsV0034PokemonNidoking
	| GenderSettingsV0034PokemonNidokingNormal
	| GenderSettingsV0035PokemonClefairy
	| GenderSettingsV0035PokemonClefairyNormal
	| GenderSettingsV0036PokemonClefable
	| GenderSettingsV0036PokemonClefableNormal
	| GenderSettingsV0037PokemonVulpix
	| GenderSettingsV0037PokemonVulpixAlola
	| GenderSettingsV0037PokemonVulpixNormal
	| GenderSettingsV0038PokemonNinetales
	| GenderSettingsV0038PokemonNinetalesAlola
	| GenderSettingsV0038PokemonNinetalesNormal
	| GenderSettingsV0039PokemonJigglypuff
	| GenderSettingsV0039PokemonJigglypuffNormal
	| GenderSettingsV0040PokemonWigglytuff
	| GenderSettingsV0040PokemonWigglytuffNormal
	| GenderSettingsV0041PokemonZubat
	| GenderSettingsV0041PokemonZubatNormal
	| GenderSettingsV0042PokemonGolbat
	| GenderSettingsV0042PokemonGolbatNormal
	| GenderSettingsV0043PokemonOddish
	| GenderSettingsV0043PokemonOddishNormal
	| GenderSettingsV0044PokemonGloom
	| GenderSettingsV0044PokemonGloomNormal
	| GenderSettingsV0045PokemonVileplume
	| GenderSettingsV0045PokemonVileplumeNormal
	| GenderSettingsV0046PokemonParas
	| GenderSettingsV0046PokemonParasNormal
	| GenderSettingsV0047PokemonParasect
	| GenderSettingsV0047PokemonParasectNormal
	| GenderSettingsV0048PokemonVenonat
	| GenderSettingsV0048PokemonVenonatNormal
	| GenderSettingsV0049PokemonVenomoth
	| GenderSettingsV0049PokemonVenomothNormal
	| GenderSettingsV0050PokemonDiglett
	| GenderSettingsV0050PokemonDiglettAlola
	| GenderSettingsV0050PokemonDiglettNormal
	| GenderSettingsV0051PokemonDugtrio
	| GenderSettingsV0051PokemonDugtrioAlola
	| GenderSettingsV0051PokemonDugtrioNormal
	| GenderSettingsV0052PokemonMeowth
	| GenderSettingsV0052PokemonMeowthAlola
	| GenderSettingsV0052PokemonMeowthGalarian
	| GenderSettingsV0052PokemonMeowthNormal
	| GenderSettingsV0053PokemonPersian
	| GenderSettingsV0053PokemonPersianAlola
	| GenderSettingsV0053PokemonPersianNormal
	| GenderSettingsV0054PokemonPsyduck
	| GenderSettingsV0054PokemonPsyduckNormal
	| GenderSettingsV0054PokemonPsyduckSwim2025
	| GenderSettingsV0055PokemonGolduck
	| GenderSettingsV0055PokemonGolduckNormal
	| GenderSettingsV0056PokemonMankey
	| GenderSettingsV0056PokemonMankeyNormal
	| GenderSettingsV0057PokemonPrimeape
	| GenderSettingsV0057PokemonPrimeapeNormal
	| GenderSettingsV0058PokemonGrowlithe
	| GenderSettingsV0058PokemonGrowlitheHisuian
	| GenderSettingsV0058PokemonGrowlitheNormal
	| GenderSettingsV0059PokemonArcanine
	| GenderSettingsV0059PokemonArcanineHisuian
	| GenderSettingsV0059PokemonArcanineNormal
	| GenderSettingsV0060PokemonPoliwag
	| GenderSettingsV0060PokemonPoliwagNormal
	| GenderSettingsV0061PokemonPoliwhirl
	| GenderSettingsV0061PokemonPoliwhirlNormal
	| GenderSettingsV0062PokemonPoliwrath
	| GenderSettingsV0062PokemonPoliwrathNormal
	| GenderSettingsV0063PokemonAbra
	| GenderSettingsV0063PokemonAbraNormal
	| GenderSettingsV0064PokemonKadabra
	| GenderSettingsV0064PokemonKadabraNormal
	| GenderSettingsV0065PokemonAlakazam
	| GenderSettingsV0065PokemonAlakazamNormal
	| GenderSettingsV0066PokemonMachop
	| GenderSettingsV0066PokemonMachopNormal
	| GenderSettingsV0067PokemonMachoke
	| GenderSettingsV0067PokemonMachokeNormal
	| GenderSettingsV0068PokemonMachamp
	| GenderSettingsV0068PokemonMachampNormal
	| GenderSettingsV0069PokemonBellsprout
	| GenderSettingsV0069PokemonBellsproutNormal
	| GenderSettingsV0070PokemonWeepinbell
	| GenderSettingsV0070PokemonWeepinbellNormal
	| GenderSettingsV0071PokemonVictreebel
	| GenderSettingsV0071PokemonVictreebelNormal
	| GenderSettingsV0072PokemonTentacool
	| GenderSettingsV0072PokemonTentacoolNormal
	| GenderSettingsV0073PokemonTentacruel
	| GenderSettingsV0073PokemonTentacruelNormal
	| GenderSettingsV0074PokemonGeodude
	| GenderSettingsV0074PokemonGeodudeAlola
	| GenderSettingsV0074PokemonGeodudeNormal
	| GenderSettingsV0075PokemonGraveler
	| GenderSettingsV0075PokemonGravelerAlola
	| GenderSettingsV0075PokemonGravelerNormal
	| GenderSettingsV0076PokemonGolem
	| GenderSettingsV0076PokemonGolemAlola
	| GenderSettingsV0076PokemonGolemNormal
	| GenderSettingsV0077PokemonPonyta
	| GenderSettingsV0077PokemonPonytaGalarian
	| GenderSettingsV0077PokemonPonytaNormal
	| GenderSettingsV0078PokemonRapidash
	| GenderSettingsV0078PokemonRapidashGalarian
	| GenderSettingsV0078PokemonRapidashNormal
	| GenderSettingsV0079PokemonSlowpoke
	| GenderSettingsV0079PokemonSlowpoke2020
	| GenderSettingsV0079PokemonSlowpokeGalarian
	| GenderSettingsV0079PokemonSlowpokeNormal
	| GenderSettingsV0080PokemonSlowbro
	| GenderSettingsV0080PokemonSlowbro2021
	| GenderSettingsV0080PokemonSlowbroGalarian
	| GenderSettingsV0080PokemonSlowbroNormal
	| GenderSettingsV0081PokemonMagnemite
	| GenderSettingsV0081PokemonMagnemiteNormal
	| GenderSettingsV0082PokemonMagneton
	| GenderSettingsV0082PokemonMagnetonNormal
	| GenderSettingsV0083PokemonFarfetchd
	| GenderSettingsV0083PokemonFarfetchdGalarian
	| GenderSettingsV0083PokemonFarfetchdNormal
	| GenderSettingsV0084PokemonDoduo
	| GenderSettingsV0084PokemonDoduoNormal
	| GenderSettingsV0085PokemonDodrio
	| GenderSettingsV0085PokemonDodrioNormal
	| GenderSettingsV0086PokemonSeel
	| GenderSettingsV0086PokemonSeelNormal
	| GenderSettingsV0087PokemonDewgong
	| GenderSettingsV0087PokemonDewgongNormal
	| GenderSettingsV0088PokemonGrimer
	| GenderSettingsV0088PokemonGrimerAlola
	| GenderSettingsV0088PokemonGrimerNormal
	| GenderSettingsV0089PokemonMuk
	| GenderSettingsV0089PokemonMukAlola
	| GenderSettingsV0089PokemonMukNormal
	| GenderSettingsV0090PokemonShellder
	| GenderSettingsV0090PokemonShellderNormal
	| GenderSettingsV0091PokemonCloyster
	| GenderSettingsV0091PokemonCloysterNormal
	| GenderSettingsV0092PokemonGastly
	| GenderSettingsV0092PokemonGastlyNormal
	| GenderSettingsV0093PokemonHaunter
	| GenderSettingsV0093PokemonHaunterNormal
	| GenderSettingsV0094PokemonGengar
	| GenderSettingsV0094PokemonGengarCostume2020
	| GenderSettingsV0094PokemonGengarNormal
	| GenderSettingsV0095PokemonOnix
	| GenderSettingsV0095PokemonOnixNormal
	| GenderSettingsV0096PokemonDrowzee
	| GenderSettingsV0096PokemonDrowzeeNormal
	| GenderSettingsV0097PokemonHypno
	| GenderSettingsV0097PokemonHypnoNormal
	| GenderSettingsV0098PokemonKrabby
	| GenderSettingsV0098PokemonKrabbyNormal
	| GenderSettingsV0099PokemonKingler
	| GenderSettingsV0099PokemonKinglerNormal
	| GenderSettingsV0100PokemonVoltorb
	| GenderSettingsV0100PokemonVoltorbHisuian
	| GenderSettingsV0100PokemonVoltorbNormal
	| GenderSettingsV0101PokemonElectrode
	| GenderSettingsV0101PokemonElectrodeHisuian
	| GenderSettingsV0101PokemonElectrodeNormal
	| GenderSettingsV0102PokemonExeggcute
	| GenderSettingsV0102PokemonExeggcuteNormal
	| GenderSettingsV0103PokemonExeggutor
	| GenderSettingsV0103PokemonExeggutorAlola
	| GenderSettingsV0103PokemonExeggutorNormal
	| GenderSettingsV0104PokemonCubone
	| GenderSettingsV0104PokemonCuboneNormal
	| GenderSettingsV0105PokemonMarowak
	| GenderSettingsV0105PokemonMarowakAlola
	| GenderSettingsV0105PokemonMarowakNormal
	| GenderSettingsV0106PokemonHitmonlee
	| GenderSettingsV0106PokemonHitmonleeNormal
	| GenderSettingsV0107PokemonHitmonchan
	| GenderSettingsV0107PokemonHitmonchanNormal
	| GenderSettingsV0108PokemonLickitung
	| GenderSettingsV0108PokemonLickitungNormal
	| GenderSettingsV0109PokemonKoffing
	| GenderSettingsV0109PokemonKoffingNormal
	| GenderSettingsV0110PokemonWeezing
	| GenderSettingsV0110PokemonWeezingGalarian
	| GenderSettingsV0110PokemonWeezingNormal
	| GenderSettingsV0111PokemonRhyhorn
	| GenderSettingsV0111PokemonRhyhornNormal
	| GenderSettingsV0112PokemonRhydon
	| GenderSettingsV0112PokemonRhydonNormal
	| GenderSettingsV0113PokemonChansey
	| GenderSettingsV0113PokemonChanseyNormal
	| GenderSettingsV0114PokemonTangela
	| GenderSettingsV0114PokemonTangelaNormal
	| GenderSettingsV0115PokemonKangaskhan
	| GenderSettingsV0115PokemonKangaskhanNormal
	| GenderSettingsV0116PokemonHorsea
	| GenderSettingsV0116PokemonHorseaNormal
	| GenderSettingsV0117PokemonSeadra
	| GenderSettingsV0117PokemonSeadraNormal
	| GenderSettingsV0118PokemonGoldeen
	| GenderSettingsV0118PokemonGoldeenNormal
	| GenderSettingsV0119PokemonSeaking
	| GenderSettingsV0119PokemonSeakingNormal
	| GenderSettingsV0120PokemonStaryu
	| GenderSettingsV0120PokemonStaryuNormal
	| GenderSettingsV0121PokemonStarmie
	| GenderSettingsV0121PokemonStarmieNormal
	| GenderSettingsV0122PokemonMrMime
	| GenderSettingsV0122PokemonMrMimeGalarian
	| GenderSettingsV0122PokemonMrMimeNormal
	| GenderSettingsV0123PokemonScyther
	| GenderSettingsV0123PokemonScytherNormal
	| GenderSettingsV0124PokemonJynx
	| GenderSettingsV0124PokemonJynxNormal
	| GenderSettingsV0125PokemonElectabuzz
	| GenderSettingsV0125PokemonElectabuzzNormal
	| GenderSettingsV0126PokemonMagmar
	| GenderSettingsV0126PokemonMagmarNormal
	| GenderSettingsV0127PokemonPinsir
	| GenderSettingsV0127PokemonPinsirNormal
	| GenderSettingsV0128PokemonTauros
	| GenderSettingsV0128PokemonTaurosNormal
	| GenderSettingsV0128PokemonTaurosPaldeaAqua
	| GenderSettingsV0128PokemonTaurosPaldeaBlaze
	| GenderSettingsV0128PokemonTaurosPaldeaCombat
	| GenderSettingsV0129PokemonMagikarp
	| GenderSettingsV0129PokemonMagikarpNormal
	| GenderSettingsV0130PokemonGyarados
	| GenderSettingsV0130PokemonGyaradosNormal
	| GenderSettingsV0131PokemonLapras
	| GenderSettingsV0131PokemonLaprasCostume2020
	| GenderSettingsV0131PokemonLaprasNormal
	| GenderSettingsV0132PokemonDitto
	| GenderSettingsV0132PokemonDittoNormal
	| GenderSettingsV0132PokemonDittoSpring2026A
	| GenderSettingsV0132PokemonDittoSpring2026B
	| GenderSettingsV0133PokemonEevee
	| GenderSettingsV0133PokemonEeveeGofest2024Mtiara
	| GenderSettingsV0133PokemonEeveeGofest2024Stiara
	| GenderSettingsV0133PokemonEeveeNormal
	| GenderSettingsV0134PokemonVaporeon
	| GenderSettingsV0134PokemonVaporeonNormal
	| GenderSettingsV0135PokemonJolteon
	| GenderSettingsV0135PokemonJolteonNormal
	| GenderSettingsV0136PokemonFlareon
	| GenderSettingsV0136PokemonFlareonNormal
	| GenderSettingsV0137PokemonPorygon
	| GenderSettingsV0137PokemonPorygonNormal
	| GenderSettingsV0138PokemonOmanyte
	| GenderSettingsV0138PokemonOmanyteNormal
	| GenderSettingsV0139PokemonOmastar
	| GenderSettingsV0139PokemonOmastarNormal
	| GenderSettingsV0140PokemonKabuto
	| GenderSettingsV0140PokemonKabutoNormal
	| GenderSettingsV0141PokemonKabutops
	| GenderSettingsV0141PokemonKabutopsNormal
	| GenderSettingsV0142PokemonAerodactyl
	| GenderSettingsV0142PokemonAerodactylNormal
	| GenderSettingsV0142PokemonAerodactylSummer2023
	| GenderSettingsV0143PokemonSnorlax
	| GenderSettingsV0143PokemonSnorlaxNormal
	| GenderSettingsV0143PokemonSnorlaxWildarea2024
	| GenderSettingsV0144PokemonArticuno
	| GenderSettingsV0144PokemonArticunoGalarian
	| GenderSettingsV0144PokemonArticunoNormal
	| GenderSettingsV0145PokemonZapdos
	| GenderSettingsV0145PokemonZapdosGalarian
	| GenderSettingsV0145PokemonZapdosNormal
	| GenderSettingsV0146PokemonMoltres
	| GenderSettingsV0146PokemonMoltresGalarian
	| GenderSettingsV0146PokemonMoltresNormal
	| GenderSettingsV0147PokemonDratini
	| GenderSettingsV0147PokemonDratiniNormal
	| GenderSettingsV0148PokemonDragonair
	| GenderSettingsV0148PokemonDragonairNormal
	| GenderSettingsV0149PokemonDragonite
	| GenderSettingsV0149PokemonDragoniteNormal
	| GenderSettingsV0150PokemonMewtwo
	| GenderSettingsV0150PokemonMewtwoA
	| GenderSettingsV0150PokemonMewtwoNormal
	| GenderSettingsV0151PokemonMew
	| GenderSettingsV0151PokemonMewNormal
	| GenderSettingsV0152PokemonChikorita
	| GenderSettingsV0152PokemonChikoritaNormal
	| GenderSettingsV0153PokemonBayleef
	| GenderSettingsV0153PokemonBayleefNormal
	| GenderSettingsV0154PokemonMeganium
	| GenderSettingsV0154PokemonMeganiumNormal
	| GenderSettingsV0155PokemonCyndaquil
	| GenderSettingsV0155PokemonCyndaquilNormal
	| GenderSettingsV0156PokemonQuilava
	| GenderSettingsV0156PokemonQuilavaNormal
	| GenderSettingsV0157PokemonTyphlosion
	| GenderSettingsV0157PokemonTyphlosionHisuian
	| GenderSettingsV0157PokemonTyphlosionNormal
	| GenderSettingsV0158PokemonTotodile
	| GenderSettingsV0158PokemonTotodileNormal
	| GenderSettingsV0159PokemonCroconaw
	| GenderSettingsV0159PokemonCroconawNormal
	| GenderSettingsV0160PokemonFeraligatr
	| GenderSettingsV0160PokemonFeraligatrNormal
	| GenderSettingsV0161PokemonSentret
	| GenderSettingsV0161PokemonSentretNormal
	| GenderSettingsV0162PokemonFurret
	| GenderSettingsV0162PokemonFurretNormal
	| GenderSettingsV0163PokemonHoothoot
	| GenderSettingsV0163PokemonHoothootNormal
	| GenderSettingsV0164PokemonNoctowl
	| GenderSettingsV0164PokemonNoctowlNormal
	| GenderSettingsV0165PokemonLedyba
	| GenderSettingsV0165PokemonLedybaNormal
	| GenderSettingsV0166PokemonLedian
	| GenderSettingsV0166PokemonLedianNormal
	| GenderSettingsV0167PokemonSpinarak
	| GenderSettingsV0167PokemonSpinarakNormal
	| GenderSettingsV0168PokemonAriados
	| GenderSettingsV0168PokemonAriadosNormal
	| GenderSettingsV0169PokemonCrobat
	| GenderSettingsV0169PokemonCrobatNormal
	| GenderSettingsV0170PokemonChinchou
	| GenderSettingsV0170PokemonChinchouNormal
	| GenderSettingsV0171PokemonLanturn
	| GenderSettingsV0171PokemonLanturnNormal
	| GenderSettingsV0172PokemonPichu
	| GenderSettingsV0172PokemonPichuNormal
	| GenderSettingsV0173PokemonCleffa
	| GenderSettingsV0173PokemonCleffaNormal
	| GenderSettingsV0174PokemonIgglybuff
	| GenderSettingsV0174PokemonIgglybuffNormal
	| GenderSettingsV0175PokemonTogepi
	| GenderSettingsV0175PokemonTogepiNormal
	| GenderSettingsV0176PokemonTogetic
	| GenderSettingsV0176PokemonTogeticNormal
	| GenderSettingsV0177PokemonNatu
	| GenderSettingsV0177PokemonNatuNormal
	| GenderSettingsV0178PokemonXatu
	| GenderSettingsV0178PokemonXatuNormal
	| GenderSettingsV0179PokemonMareep
	| GenderSettingsV0179PokemonMareepNormal
	| GenderSettingsV0180PokemonFlaaffy
	| GenderSettingsV0180PokemonFlaaffyNormal
	| GenderSettingsV0181PokemonAmpharos
	| GenderSettingsV0181PokemonAmpharosNormal
	| GenderSettingsV0182PokemonBellossom
	| GenderSettingsV0182PokemonBellossomNormal
	| GenderSettingsV0183PokemonMarill
	| GenderSettingsV0183PokemonMarillNormal
	| GenderSettingsV0184PokemonAzumarill
	| GenderSettingsV0184PokemonAzumarillNormal
	| GenderSettingsV0185PokemonSudowoodo
	| GenderSettingsV0185PokemonSudowoodoNormal
	| GenderSettingsV0185PokemonSudowoodoWinter2025
	| GenderSettingsV0186PokemonPolitoed
	| GenderSettingsV0186PokemonPolitoedNormal
	| GenderSettingsV0187PokemonHoppip
	| GenderSettingsV0187PokemonHoppipNormal
	| GenderSettingsV0188PokemonSkiploom
	| GenderSettingsV0188PokemonSkiploomNormal
	| GenderSettingsV0189PokemonJumpluff
	| GenderSettingsV0189PokemonJumpluffNormal
	| GenderSettingsV0190PokemonAipom
	| GenderSettingsV0190PokemonAipomNormal
	| GenderSettingsV0191PokemonSunkern
	| GenderSettingsV0191PokemonSunkernNormal
	| GenderSettingsV0192PokemonSunflora
	| GenderSettingsV0192PokemonSunfloraNormal
	| GenderSettingsV0193PokemonYanma
	| GenderSettingsV0193PokemonYanmaNormal
	| GenderSettingsV0194PokemonWooper
	| GenderSettingsV0194PokemonWooperNormal
	| GenderSettingsV0194PokemonWooperPaldea
	| GenderSettingsV0195PokemonQuagsire
	| GenderSettingsV0195PokemonQuagsireNormal
	| GenderSettingsV0196PokemonEspeon
	| GenderSettingsV0196PokemonEspeonGofest2024Sscarf
	| GenderSettingsV0196PokemonEspeonNormal
	| GenderSettingsV0197PokemonUmbreon
	| GenderSettingsV0197PokemonUmbreonGofest2024Mscarf
	| GenderSettingsV0197PokemonUmbreonNormal
	| GenderSettingsV0198PokemonMurkrow
	| GenderSettingsV0198PokemonMurkrowNormal
	| GenderSettingsV0199PokemonSlowking
	| GenderSettingsV0199PokemonSlowking2022
	| GenderSettingsV0199PokemonSlowkingGalarian
	| GenderSettingsV0199PokemonSlowkingNormal
	| GenderSettingsV0200PokemonMisdreavus
	| GenderSettingsV0200PokemonMisdreavusNormal
	| GenderSettingsV0201PokemonUnown
	| GenderSettingsV0201PokemonUnownA
	| GenderSettingsV0201PokemonUnownB
	| GenderSettingsV0201PokemonUnownC
	| GenderSettingsV0201PokemonUnownD
	| GenderSettingsV0201PokemonUnownE
	| GenderSettingsV0201PokemonUnownExclamationPoint
	| GenderSettingsV0201PokemonUnownF
	| GenderSettingsV0201PokemonUnownG
	| GenderSettingsV0201PokemonUnownH
	| GenderSettingsV0201PokemonUnownI
	| GenderSettingsV0201PokemonUnownJ
	| GenderSettingsV0201PokemonUnownK
	| GenderSettingsV0201PokemonUnownL
	| GenderSettingsV0201PokemonUnownM
	| GenderSettingsV0201PokemonUnownN
	| GenderSettingsV0201PokemonUnownO
	| GenderSettingsV0201PokemonUnownP
	| GenderSettingsV0201PokemonUnownQ
	| GenderSettingsV0201PokemonUnownQuestionMark
	| GenderSettingsV0201PokemonUnownR
	| GenderSettingsV0201PokemonUnownS
	| GenderSettingsV0201PokemonUnownT
	| GenderSettingsV0201PokemonUnownU
	| GenderSettingsV0201PokemonUnownV
	| GenderSettingsV0201PokemonUnownW
	| GenderSettingsV0201PokemonUnownX
	| GenderSettingsV0201PokemonUnownY
	| GenderSettingsV0201PokemonUnownZ
	| GenderSettingsV0202PokemonWobbuffet
	| GenderSettingsV0202PokemonWobbuffetNormal
	| GenderSettingsV0203PokemonGirafarig
	| GenderSettingsV0203PokemonGirafarigNormal
	| GenderSettingsV0204PokemonPineco
	| GenderSettingsV0204PokemonPinecoNormal
	| GenderSettingsV0205PokemonForretress
	| GenderSettingsV0205PokemonForretressNormal
	| GenderSettingsV0206PokemonDunsparce
	| GenderSettingsV0206PokemonDunsparceNormal
	| GenderSettingsV0207PokemonGligar
	| GenderSettingsV0207PokemonGligarNormal
	| GenderSettingsV0208PokemonSteelix
	| GenderSettingsV0208PokemonSteelixNormal
	| GenderSettingsV0209PokemonSnubbull
	| GenderSettingsV0209PokemonSnubbullNormal
	| GenderSettingsV0210PokemonGranbull
	| GenderSettingsV0210PokemonGranbullNormal
	| GenderSettingsV0211PokemonQwilfish
	| GenderSettingsV0211PokemonQwilfishHisuian
	| GenderSettingsV0211PokemonQwilfishNormal
	| GenderSettingsV0212PokemonScizor
	| GenderSettingsV0212PokemonScizorNormal
	| GenderSettingsV0213PokemonShuckle
	| GenderSettingsV0213PokemonShuckleNormal
	| GenderSettingsV0214PokemonHeracross
	| GenderSettingsV0214PokemonHeracrossNormal
	| GenderSettingsV0215PokemonSneasel
	| GenderSettingsV0215PokemonSneaselHisuian
	| GenderSettingsV0215PokemonSneaselNormal
	| GenderSettingsV0216PokemonTeddiursa
	| GenderSettingsV0216PokemonTeddiursaNormal
	| GenderSettingsV0217PokemonUrsaring
	| GenderSettingsV0217PokemonUrsaringNormal
	| GenderSettingsV0218PokemonSlugma
	| GenderSettingsV0218PokemonSlugmaNormal
	| GenderSettingsV0219PokemonMagcargo
	| GenderSettingsV0219PokemonMagcargoNormal
	| GenderSettingsV0220PokemonSwinub
	| GenderSettingsV0220PokemonSwinubNormal
	| GenderSettingsV0221PokemonPiloswine
	| GenderSettingsV0221PokemonPiloswineNormal
	| GenderSettingsV0222PokemonCorsola
	| GenderSettingsV0222PokemonCorsolaGalarian
	| GenderSettingsV0222PokemonCorsolaNormal
	| GenderSettingsV0222PokemonCorsolaSpring2026
	| GenderSettingsV0223PokemonRemoraid
	| GenderSettingsV0223PokemonRemoraidNormal
	| GenderSettingsV0224PokemonOctillery
	| GenderSettingsV0224PokemonOctilleryNormal
	| GenderSettingsV0225PokemonDelibird
	| GenderSettingsV0225PokemonDelibirdNormal
	| GenderSettingsV0225PokemonDelibirdWinter2020
	| GenderSettingsV0226PokemonMantine
	| GenderSettingsV0226PokemonMantineNormal
	| GenderSettingsV0227PokemonSkarmory
	| GenderSettingsV0227PokemonSkarmoryNormal
	| GenderSettingsV0228PokemonHoundour
	| GenderSettingsV0228PokemonHoundourNormal
	| GenderSettingsV0229PokemonHoundoom
	| GenderSettingsV0229PokemonHoundoomNormal
	| GenderSettingsV0230PokemonKingdra
	| GenderSettingsV0230PokemonKingdraNormal
	| GenderSettingsV0231PokemonPhanpy
	| GenderSettingsV0231PokemonPhanpyNormal
	| GenderSettingsV0232PokemonDonphan
	| GenderSettingsV0232PokemonDonphanNormal
	| GenderSettingsV0233PokemonPorygon2
	| GenderSettingsV0233PokemonPorygon2Normal
	| GenderSettingsV0234PokemonStantler
	| GenderSettingsV0234PokemonStantlerNormal
	| GenderSettingsV0235PokemonSmeargle
	| GenderSettingsV0235PokemonSmeargleNormal
	| GenderSettingsV0236PokemonTyrogue
	| GenderSettingsV0236PokemonTyrogueNormal
	| GenderSettingsV0237PokemonHitmontop
	| GenderSettingsV0237PokemonHitmontopNormal
	| GenderSettingsV0238PokemonSmoochum
	| GenderSettingsV0238PokemonSmoochumNormal
	| GenderSettingsV0239PokemonElekid
	| GenderSettingsV0239PokemonElekidNormal
	| GenderSettingsV0240PokemonMagby
	| GenderSettingsV0240PokemonMagbyNormal
	| GenderSettingsV0241PokemonMiltank
	| GenderSettingsV0241PokemonMiltankNormal
	| GenderSettingsV0242PokemonBlissey
	| GenderSettingsV0242PokemonBlisseyNormal
	| GenderSettingsV0243PokemonRaikou
	| GenderSettingsV0243PokemonRaikouNormal
	| GenderSettingsV0243PokemonRaikouS
	| GenderSettingsV0244PokemonEntei
	| GenderSettingsV0244PokemonEnteiNormal
	| GenderSettingsV0244PokemonEnteiS
	| GenderSettingsV0245PokemonSuicune
	| GenderSettingsV0245PokemonSuicuneNormal
	| GenderSettingsV0245PokemonSuicuneS
	| GenderSettingsV0246PokemonLarvitar
	| GenderSettingsV0246PokemonLarvitarNormal
	| GenderSettingsV0247PokemonPupitar
	| GenderSettingsV0247PokemonPupitarNormal
	| GenderSettingsV0248PokemonTyranitar
	| GenderSettingsV0248PokemonTyranitarNormal
	| GenderSettingsV0249PokemonLugia
	| GenderSettingsV0249PokemonLugiaNormal
	| GenderSettingsV0249PokemonLugiaS
	| GenderSettingsV0250PokemonHoOh
	| GenderSettingsV0250PokemonHoOhNormal
	| GenderSettingsV0250PokemonHoOhS
	| GenderSettingsV0251PokemonCelebi
	| GenderSettingsV0251PokemonCelebiNormal
	| GenderSettingsV0252PokemonTreecko
	| GenderSettingsV0252PokemonTreeckoNormal
	| GenderSettingsV0253PokemonGrovyle
	| GenderSettingsV0253PokemonGrovyleNormal
	| GenderSettingsV0254PokemonSceptile
	| GenderSettingsV0254PokemonSceptileNormal
	| GenderSettingsV0255PokemonTorchic
	| GenderSettingsV0255PokemonTorchicNormal
	| GenderSettingsV0256PokemonCombusken
	| GenderSettingsV0256PokemonCombuskenNormal
	| GenderSettingsV0257PokemonBlaziken
	| GenderSettingsV0257PokemonBlazikenNormal
	| GenderSettingsV0258PokemonMudkip
	| GenderSettingsV0258PokemonMudkipNormal
	| GenderSettingsV0259PokemonMarshtomp
	| GenderSettingsV0259PokemonMarshtompNormal
	| GenderSettingsV0260PokemonSwampert
	| GenderSettingsV0260PokemonSwampertNormal
	| GenderSettingsV0261PokemonPoochyena
	| GenderSettingsV0261PokemonPoochyenaNormal
	| GenderSettingsV0262PokemonMightyena
	| GenderSettingsV0262PokemonMightyenaNormal
	| GenderSettingsV0263PokemonZigzagoon
	| GenderSettingsV0263PokemonZigzagoonGalarian
	| GenderSettingsV0263PokemonZigzagoonNormal
	| GenderSettingsV0264PokemonLinoone
	| GenderSettingsV0264PokemonLinooneGalarian
	| GenderSettingsV0264PokemonLinooneNormal
	| GenderSettingsV0265PokemonWurmple
	| GenderSettingsV0265PokemonWurmpleNormal
	| GenderSettingsV0266PokemonSilcoon
	| GenderSettingsV0266PokemonSilcoonNormal
	| GenderSettingsV0267PokemonBeautifly
	| GenderSettingsV0267PokemonBeautiflyNormal
	| GenderSettingsV0268PokemonCascoon
	| GenderSettingsV0268PokemonCascoonNormal
	| GenderSettingsV0269PokemonDustox
	| GenderSettingsV0269PokemonDustoxNormal
	| GenderSettingsV0270PokemonLotad
	| GenderSettingsV0270PokemonLotadNormal
	| GenderSettingsV0271PokemonLombre
	| GenderSettingsV0271PokemonLombreNormal
	| GenderSettingsV0272PokemonLudicolo
	| GenderSettingsV0272PokemonLudicoloNormal
	| GenderSettingsV0273PokemonSeedot
	| GenderSettingsV0273PokemonSeedotNormal
	| GenderSettingsV0274PokemonNuzleaf
	| GenderSettingsV0274PokemonNuzleafNormal
	| GenderSettingsV0275PokemonShiftry
	| GenderSettingsV0275PokemonShiftryNormal
	| GenderSettingsV0276PokemonTaillow
	| GenderSettingsV0276PokemonTaillowNormal
	| GenderSettingsV0277PokemonSwellow
	| GenderSettingsV0277PokemonSwellowNormal
	| GenderSettingsV0278PokemonWingull
	| GenderSettingsV0278PokemonWingullNormal
	| GenderSettingsV0279PokemonPelipper
	| GenderSettingsV0279PokemonPelipperNormal
	| GenderSettingsV0280PokemonRalts
	| GenderSettingsV0280PokemonRaltsNormal
	| GenderSettingsV0281PokemonKirlia
	| GenderSettingsV0281PokemonKirliaNormal
	| GenderSettingsV0282PokemonGardevoir
	| GenderSettingsV0282PokemonGardevoirNormal
	| GenderSettingsV0283PokemonSurskit
	| GenderSettingsV0283PokemonSurskitNormal
	| GenderSettingsV0284PokemonMasquerain
	| GenderSettingsV0284PokemonMasquerainNormal
	| GenderSettingsV0285PokemonShroomish
	| GenderSettingsV0285PokemonShroomishNormal
	| GenderSettingsV0286PokemonBreloom
	| GenderSettingsV0286PokemonBreloomNormal
	| GenderSettingsV0287PokemonSlakoth
	| GenderSettingsV0287PokemonSlakothNormal
	| GenderSettingsV0288PokemonVigoroth
	| GenderSettingsV0288PokemonVigorothNormal
	| GenderSettingsV0289PokemonSlaking
	| GenderSettingsV0289PokemonSlakingNormal
	| GenderSettingsV0290PokemonNincada
	| GenderSettingsV0290PokemonNincadaNormal
	| GenderSettingsV0291PokemonNinjask
	| GenderSettingsV0291PokemonNinjaskNormal
	| GenderSettingsV0292PokemonShedinja
	| GenderSettingsV0292PokemonShedinjaNormal
	| GenderSettingsV0293PokemonWhismur
	| GenderSettingsV0293PokemonWhismurNormal
	| GenderSettingsV0294PokemonLoudred
	| GenderSettingsV0294PokemonLoudredNormal
	| GenderSettingsV0295PokemonExploud
	| GenderSettingsV0295PokemonExploudNormal
	| GenderSettingsV0296PokemonMakuhita
	| GenderSettingsV0296PokemonMakuhitaNormal
	| GenderSettingsV0297PokemonHariyama
	| GenderSettingsV0297PokemonHariyamaNormal
	| GenderSettingsV0298PokemonAzurill
	| GenderSettingsV0298PokemonAzurillNormal
	| GenderSettingsV0299PokemonNosepass
	| GenderSettingsV0299PokemonNosepassNormal
	| GenderSettingsV0300PokemonSkitty
	| GenderSettingsV0300PokemonSkittyNormal
	| GenderSettingsV0301PokemonDelcatty
	| GenderSettingsV0301PokemonDelcattyNormal
	| GenderSettingsV0302PokemonSableye
	| GenderSettingsV0302PokemonSableyeCostume2020
	| GenderSettingsV0302PokemonSableyeNormal
	| GenderSettingsV0303PokemonMawile
	| GenderSettingsV0303PokemonMawileNormal
	| GenderSettingsV0304PokemonAron
	| GenderSettingsV0304PokemonAronNormal
	| GenderSettingsV0305PokemonLairon
	| GenderSettingsV0305PokemonLaironNormal
	| GenderSettingsV0306PokemonAggron
	| GenderSettingsV0306PokemonAggronNormal
	| GenderSettingsV0307PokemonMeditite
	| GenderSettingsV0307PokemonMedititeNormal
	| GenderSettingsV0308PokemonMedicham
	| GenderSettingsV0308PokemonMedichamNormal
	| GenderSettingsV0309PokemonElectrike
	| GenderSettingsV0309PokemonElectrikeNormal
	| GenderSettingsV0310PokemonManectric
	| GenderSettingsV0310PokemonManectricNormal
	| GenderSettingsV0311PokemonPlusle
	| GenderSettingsV0311PokemonPlusleNormal
	| GenderSettingsV0312PokemonMinun
	| GenderSettingsV0312PokemonMinunNormal
	| GenderSettingsV0313PokemonVolbeat
	| GenderSettingsV0313PokemonVolbeatNormal
	| GenderSettingsV0314PokemonIllumise
	| GenderSettingsV0314PokemonIllumiseNormal
	| GenderSettingsV0315PokemonRoselia
	| GenderSettingsV0315PokemonRoseliaNormal
	| GenderSettingsV0316PokemonGulpin
	| GenderSettingsV0316PokemonGulpinNormal
	| GenderSettingsV0317PokemonSwalot
	| GenderSettingsV0317PokemonSwalotNormal
	| GenderSettingsV0318PokemonCarvanha
	| GenderSettingsV0318PokemonCarvanhaNormal
	| GenderSettingsV0319PokemonSharpedo
	| GenderSettingsV0319PokemonSharpedoNormal
	| GenderSettingsV0320PokemonWailmer
	| GenderSettingsV0320PokemonWailmerNormal
	| GenderSettingsV0321PokemonWailord
	| GenderSettingsV0321PokemonWailordNormal
	| GenderSettingsV0322PokemonNumel
	| GenderSettingsV0322PokemonNumelNormal
	| GenderSettingsV0323PokemonCamerupt
	| GenderSettingsV0323PokemonCameruptNormal
	| GenderSettingsV0324PokemonTorkoal
	| GenderSettingsV0324PokemonTorkoalNormal
	| GenderSettingsV0325PokemonSpoink
	| GenderSettingsV0325PokemonSpoinkNormal
	| GenderSettingsV0326PokemonGrumpig
	| GenderSettingsV0326PokemonGrumpigNormal
	| GenderSettingsV0327PokemonSpinda
	| GenderSettingsV0327PokemonSpinda00
	| GenderSettingsV0327PokemonSpinda01
	| GenderSettingsV0327PokemonSpinda02
	| GenderSettingsV0327PokemonSpinda03
	| GenderSettingsV0327PokemonSpinda04
	| GenderSettingsV0327PokemonSpinda05
	| GenderSettingsV0327PokemonSpinda06
	| GenderSettingsV0327PokemonSpinda07
	| GenderSettingsV0327PokemonSpinda08
	| GenderSettingsV0327PokemonSpinda09
	| GenderSettingsV0327PokemonSpinda10
	| GenderSettingsV0327PokemonSpinda11
	| GenderSettingsV0327PokemonSpinda12
	| GenderSettingsV0327PokemonSpinda13
	| GenderSettingsV0327PokemonSpinda14
	| GenderSettingsV0327PokemonSpinda15
	| GenderSettingsV0327PokemonSpinda16
	| GenderSettingsV0327PokemonSpinda17
	| GenderSettingsV0327PokemonSpinda18
	| GenderSettingsV0327PokemonSpinda19
	| GenderSettingsV0328PokemonTrapinch
	| GenderSettingsV0328PokemonTrapinchNormal
	| GenderSettingsV0329PokemonVibrava
	| GenderSettingsV0329PokemonVibravaNormal
	| GenderSettingsV0330PokemonFlygon
	| GenderSettingsV0330PokemonFlygonNormal
	| GenderSettingsV0331PokemonCacnea
	| GenderSettingsV0331PokemonCacneaNormal
	| GenderSettingsV0332PokemonCacturne
	| GenderSettingsV0332PokemonCacturneNormal
	| GenderSettingsV0333PokemonSwablu
	| GenderSettingsV0333PokemonSwabluNormal
	| GenderSettingsV0334PokemonAltaria
	| GenderSettingsV0334PokemonAltariaNormal
	| GenderSettingsV0335PokemonZangoose
	| GenderSettingsV0335PokemonZangooseNormal
	| GenderSettingsV0336PokemonSeviper
	| GenderSettingsV0336PokemonSeviperNormal
	| GenderSettingsV0337PokemonLunatone
	| GenderSettingsV0337PokemonLunatoneNormal
	| GenderSettingsV0338PokemonSolrock
	| GenderSettingsV0338PokemonSolrockNormal
	| GenderSettingsV0339PokemonBarboach
	| GenderSettingsV0339PokemonBarboachNormal
	| GenderSettingsV0340PokemonWhiscash
	| GenderSettingsV0340PokemonWhiscashNormal
	| GenderSettingsV0341PokemonCorphish
	| GenderSettingsV0341PokemonCorphishNormal
	| GenderSettingsV0342PokemonCrawdaunt
	| GenderSettingsV0342PokemonCrawdauntNormal
	| GenderSettingsV0343PokemonBaltoy
	| GenderSettingsV0343PokemonBaltoyNormal
	| GenderSettingsV0344PokemonClaydol
	| GenderSettingsV0344PokemonClaydolNormal
	| GenderSettingsV0345PokemonLileep
	| GenderSettingsV0345PokemonLileepNormal
	| GenderSettingsV0346PokemonCradily
	| GenderSettingsV0346PokemonCradilyNormal
	| GenderSettingsV0347PokemonAnorith
	| GenderSettingsV0347PokemonAnorithNormal
	| GenderSettingsV0348PokemonArmaldo
	| GenderSettingsV0348PokemonArmaldoNormal
	| GenderSettingsV0349PokemonFeebas
	| GenderSettingsV0349PokemonFeebasNormal
	| GenderSettingsV0350PokemonMilotic
	| GenderSettingsV0350PokemonMiloticNormal
	| GenderSettingsV0351PokemonCastform
	| GenderSettingsV0351PokemonCastformNormal
	| GenderSettingsV0351PokemonCastformRainy
	| GenderSettingsV0351PokemonCastformSnowy
	| GenderSettingsV0351PokemonCastformSunny
	| GenderSettingsV0352PokemonKecleon
	| GenderSettingsV0352PokemonKecleonNormal
	| GenderSettingsV0353PokemonShuppet
	| GenderSettingsV0353PokemonShuppetNormal
	| GenderSettingsV0354PokemonBanette
	| GenderSettingsV0354PokemonBanetteNormal
	| GenderSettingsV0355PokemonDuskull
	| GenderSettingsV0355PokemonDuskullNormal
	| GenderSettingsV0356PokemonDusclops
	| GenderSettingsV0356PokemonDusclopsNormal
	| GenderSettingsV0357PokemonTropius
	| GenderSettingsV0357PokemonTropiusNormal
	| GenderSettingsV0358PokemonChimecho
	| GenderSettingsV0358PokemonChimechoNormal
	| GenderSettingsV0359PokemonAbsol
	| GenderSettingsV0359PokemonAbsolNormal
	| GenderSettingsV0360PokemonWynaut
	| GenderSettingsV0360PokemonWynautNormal
	| GenderSettingsV0361PokemonSnorunt
	| GenderSettingsV0361PokemonSnoruntNormal
	| GenderSettingsV0362PokemonGlalie
	| GenderSettingsV0362PokemonGlalieNormal
	| GenderSettingsV0363PokemonSpheal
	| GenderSettingsV0363PokemonSphealNormal
	| GenderSettingsV0364PokemonSealeo
	| GenderSettingsV0364PokemonSealeoNormal
	| GenderSettingsV0365PokemonWalrein
	| GenderSettingsV0365PokemonWalreinNormal
	| GenderSettingsV0366PokemonClamperl
	| GenderSettingsV0366PokemonClamperlNormal
	| GenderSettingsV0367PokemonHuntail
	| GenderSettingsV0367PokemonHuntailNormal
	| GenderSettingsV0368PokemonGorebyss
	| GenderSettingsV0368PokemonGorebyssNormal
	| GenderSettingsV0369PokemonRelicanth
	| GenderSettingsV0369PokemonRelicanthNormal
	| GenderSettingsV0370PokemonLuvdisc
	| GenderSettingsV0370PokemonLuvdiscNormal
	| GenderSettingsV0371PokemonBagon
	| GenderSettingsV0371PokemonBagonNormal
	| GenderSettingsV0372PokemonShelgon
	| GenderSettingsV0372PokemonShelgonNormal
	| GenderSettingsV0373PokemonSalamence
	| GenderSettingsV0373PokemonSalamenceNormal
	| GenderSettingsV0374PokemonBeldum
	| GenderSettingsV0374PokemonBeldumNormal
	| GenderSettingsV0375PokemonMetang
	| GenderSettingsV0375PokemonMetangNormal
	| GenderSettingsV0376PokemonMetagross
	| GenderSettingsV0376PokemonMetagrossNormal
	| GenderSettingsV0377PokemonRegirock
	| GenderSettingsV0377PokemonRegirockNormal
	| GenderSettingsV0378PokemonRegice
	| GenderSettingsV0378PokemonRegiceNormal
	| GenderSettingsV0379PokemonRegisteel
	| GenderSettingsV0379PokemonRegisteelNormal
	| GenderSettingsV0380PokemonLatias
	| GenderSettingsV0380PokemonLatiasNormal
	| GenderSettingsV0380PokemonLatiasS
	| GenderSettingsV0381PokemonLatios
	| GenderSettingsV0381PokemonLatiosNormal
	| GenderSettingsV0381PokemonLatiosS
	| GenderSettingsV0382PokemonKyogre
	| GenderSettingsV0382PokemonKyogreNormal
	| GenderSettingsV0383PokemonGroudon
	| GenderSettingsV0383PokemonGroudonNormal
	| GenderSettingsV0384PokemonRayquaza
	| GenderSettingsV0384PokemonRayquazaNormal
	| GenderSettingsV0385PokemonJirachi
	| GenderSettingsV0385PokemonJirachiNormal
	| GenderSettingsV0386PokemonDeoxys
	| GenderSettingsV0386PokemonDeoxysAttack
	| GenderSettingsV0386PokemonDeoxysDefense
	| GenderSettingsV0386PokemonDeoxysNormal
	| GenderSettingsV0386PokemonDeoxysSpeed
	| GenderSettingsV0387PokemonTurtwig
	| GenderSettingsV0387PokemonTurtwigNormal
	| GenderSettingsV0388PokemonGrotle
	| GenderSettingsV0388PokemonGrotleNormal
	| GenderSettingsV0389PokemonTorterra
	| GenderSettingsV0389PokemonTorterraNormal
	| GenderSettingsV0390PokemonChimchar
	| GenderSettingsV0390PokemonChimcharNormal
	| GenderSettingsV0391PokemonMonferno
	| GenderSettingsV0391PokemonMonfernoNormal
	| GenderSettingsV0392PokemonInfernape
	| GenderSettingsV0392PokemonInfernapeNormal
	| GenderSettingsV0393PokemonPiplup
	| GenderSettingsV0393PokemonPiplupNormal
	| GenderSettingsV0394PokemonPrinplup
	| GenderSettingsV0394PokemonPrinplupNormal
	| GenderSettingsV0395PokemonEmpoleon
	| GenderSettingsV0395PokemonEmpoleonNormal
	| GenderSettingsV0396PokemonStarly
	| GenderSettingsV0396PokemonStarlyNormal
	| GenderSettingsV0397PokemonStaravia
	| GenderSettingsV0397PokemonStaraviaNormal
	| GenderSettingsV0398PokemonStaraptor
	| GenderSettingsV0398PokemonStaraptorNormal
	| GenderSettingsV0399PokemonBidoof
	| GenderSettingsV0399PokemonBidoofNormal
	| GenderSettingsV0400PokemonBibarel
	| GenderSettingsV0400PokemonBibarelNormal
	| GenderSettingsV0401PokemonKricketot
	| GenderSettingsV0401PokemonKricketotNormal
	| GenderSettingsV0402PokemonKricketune
	| GenderSettingsV0402PokemonKricketuneNormal
	| GenderSettingsV0403PokemonShinx
	| GenderSettingsV0403PokemonShinxNormal
	| GenderSettingsV0404PokemonLuxio
	| GenderSettingsV0404PokemonLuxioNormal
	| GenderSettingsV0405PokemonLuxray
	| GenderSettingsV0405PokemonLuxrayNormal
	| GenderSettingsV0406PokemonBudew
	| GenderSettingsV0406PokemonBudewNormal
	| GenderSettingsV0407PokemonRoserade
	| GenderSettingsV0407PokemonRoseradeNormal
	| GenderSettingsV0408PokemonCranidos
	| GenderSettingsV0408PokemonCranidosNormal
	| GenderSettingsV0409PokemonRampardos
	| GenderSettingsV0409PokemonRampardosNormal
	| GenderSettingsV0410PokemonShieldon
	| GenderSettingsV0410PokemonShieldonNormal
	| GenderSettingsV0411PokemonBastiodon
	| GenderSettingsV0411PokemonBastiodonNormal
	| GenderSettingsV0412PokemonBurmy
	| GenderSettingsV0412PokemonBurmyPlant
	| GenderSettingsV0412PokemonBurmySandy
	| GenderSettingsV0412PokemonBurmyTrash
	| GenderSettingsV0413PokemonWormadam
	| GenderSettingsV0413PokemonWormadamPlant
	| GenderSettingsV0413PokemonWormadamSandy
	| GenderSettingsV0413PokemonWormadamTrash
	| GenderSettingsV0414PokemonMothim
	| GenderSettingsV0414PokemonMothimNormal
	| GenderSettingsV0415PokemonCombee
	| GenderSettingsV0415PokemonCombeeNormal
	| GenderSettingsV0416PokemonVespiquen
	| GenderSettingsV0416PokemonVespiquenNormal
	| GenderSettingsV0417PokemonPachirisu
	| GenderSettingsV0417PokemonPachirisuNormal
	| GenderSettingsV0418PokemonBuizel
	| GenderSettingsV0418PokemonBuizelNormal
	| GenderSettingsV0419PokemonFloatzel
	| GenderSettingsV0419PokemonFloatzelNormal
	| GenderSettingsV0420PokemonCherubi
	| GenderSettingsV0420PokemonCherubiNormal
	| GenderSettingsV0421PokemonCherrim
	| GenderSettingsV0421PokemonCherrimOvercast
	| GenderSettingsV0421PokemonCherrimSunny
	| GenderSettingsV0422PokemonShellos
	| GenderSettingsV0422PokemonShellosEastSea
	| GenderSettingsV0422PokemonShellosWestSea
	| GenderSettingsV0423PokemonGastrodon
	| GenderSettingsV0423PokemonGastrodonEastSea
	| GenderSettingsV0423PokemonGastrodonWestSea
	| GenderSettingsV0424PokemonAmbipom
	| GenderSettingsV0424PokemonAmbipomNormal
	| GenderSettingsV0425PokemonDrifloon
	| GenderSettingsV0425PokemonDrifloonNormal
	| GenderSettingsV0426PokemonDrifblim
	| GenderSettingsV0426PokemonDrifblimNormal
	| GenderSettingsV0427PokemonBuneary
	| GenderSettingsV0427PokemonBunearyNormal
	| GenderSettingsV0428PokemonLopunny
	| GenderSettingsV0428PokemonLopunnyNormal
	| GenderSettingsV0429PokemonMismagius
	| GenderSettingsV0429PokemonMismagiusNormal
	| GenderSettingsV0430PokemonHonchkrow
	| GenderSettingsV0430PokemonHonchkrowNormal
	| GenderSettingsV0431PokemonGlameow
	| GenderSettingsV0431PokemonGlameowNormal
	| GenderSettingsV0432PokemonPurugly
	| GenderSettingsV0432PokemonPuruglyNormal
	| GenderSettingsV0433PokemonChingling
	| GenderSettingsV0433PokemonChinglingNormal
	| GenderSettingsV0434PokemonStunky
	| GenderSettingsV0434PokemonStunkyNormal
	| GenderSettingsV0435PokemonSkuntank
	| GenderSettingsV0435PokemonSkuntankNormal
	| GenderSettingsV0436PokemonBronzor
	| GenderSettingsV0436PokemonBronzorNormal
	| GenderSettingsV0437PokemonBronzong
	| GenderSettingsV0437PokemonBronzongNormal
	| GenderSettingsV0438PokemonBonsly
	| GenderSettingsV0438PokemonBonslyNormal
	| GenderSettingsV0439PokemonMimeJr
	| GenderSettingsV0439PokemonMimeJrNormal
	| GenderSettingsV0440PokemonHappiny
	| GenderSettingsV0440PokemonHappinyNormal
	| GenderSettingsV0441PokemonChatot
	| GenderSettingsV0441PokemonChatotNormal
	| GenderSettingsV0442PokemonSpiritomb
	| GenderSettingsV0442PokemonSpiritombNormal
	| GenderSettingsV0443PokemonGible
	| GenderSettingsV0443PokemonGibleNormal
	| GenderSettingsV0444PokemonGabite
	| GenderSettingsV0444PokemonGabiteNormal
	| GenderSettingsV0445PokemonGarchomp
	| GenderSettingsV0445PokemonGarchompNormal
	| GenderSettingsV0446PokemonMunchlax
	| GenderSettingsV0446PokemonMunchlaxNormal
	| GenderSettingsV0447PokemonRiolu
	| GenderSettingsV0447PokemonRioluNormal
	| GenderSettingsV0448PokemonLucario
	| GenderSettingsV0448PokemonLucarioNormal
	| GenderSettingsV0449PokemonHippopotas
	| GenderSettingsV0449PokemonHippopotasNormal
	| GenderSettingsV0450PokemonHippowdon
	| GenderSettingsV0450PokemonHippowdonNormal
	| GenderSettingsV0451PokemonSkorupi
	| GenderSettingsV0451PokemonSkorupiNormal
	| GenderSettingsV0452PokemonDrapion
	| GenderSettingsV0452PokemonDrapionNormal
	| GenderSettingsV0453PokemonCroagunk
	| GenderSettingsV0453PokemonCroagunkNormal
	| GenderSettingsV0454PokemonToxicroak
	| GenderSettingsV0454PokemonToxicroakNormal
	| GenderSettingsV0455PokemonCarnivine
	| GenderSettingsV0455PokemonCarnivineNormal
	| GenderSettingsV0456PokemonFinneon
	| GenderSettingsV0456PokemonFinneonNormal
	| GenderSettingsV0457PokemonLumineon
	| GenderSettingsV0457PokemonLumineonNormal
	| GenderSettingsV0458PokemonMantyke
	| GenderSettingsV0458PokemonMantykeNormal
	| GenderSettingsV0459PokemonSnover
	| GenderSettingsV0459PokemonSnoverNormal
	| GenderSettingsV0460PokemonAbomasnow
	| GenderSettingsV0460PokemonAbomasnowNormal
	| GenderSettingsV0461PokemonWeavile
	| GenderSettingsV0461PokemonWeavileNormal
	| GenderSettingsV0462PokemonMagnezone
	| GenderSettingsV0462PokemonMagnezoneNormal
	| GenderSettingsV0463PokemonLickilicky
	| GenderSettingsV0463PokemonLickilickyNormal
	| GenderSettingsV0464PokemonRhyperior
	| GenderSettingsV0464PokemonRhyperiorNormal
	| GenderSettingsV0465PokemonTangrowth
	| GenderSettingsV0465PokemonTangrowthNormal
	| GenderSettingsV0466PokemonElectivire
	| GenderSettingsV0466PokemonElectivireNormal
	| GenderSettingsV0467PokemonMagmortar
	| GenderSettingsV0467PokemonMagmortarNormal
	| GenderSettingsV0468PokemonTogekiss
	| GenderSettingsV0468PokemonTogekissNormal
	| GenderSettingsV0469PokemonYanmega
	| GenderSettingsV0469PokemonYanmegaNormal
	| GenderSettingsV0470PokemonLeafeon
	| GenderSettingsV0470PokemonLeafeonNormal
	| GenderSettingsV0471PokemonGlaceon
	| GenderSettingsV0471PokemonGlaceonNormal
	| GenderSettingsV0472PokemonGliscor
	| GenderSettingsV0472PokemonGliscorNormal
	| GenderSettingsV0473PokemonMamoswine
	| GenderSettingsV0473PokemonMamoswineNormal
	| GenderSettingsV0474PokemonPorygonZ
	| GenderSettingsV0474PokemonPorygonZNormal
	| GenderSettingsV0475PokemonGallade
	| GenderSettingsV0475PokemonGalladeNormal
	| GenderSettingsV0476PokemonProbopass
	| GenderSettingsV0476PokemonProbopassNormal
	| GenderSettingsV0477PokemonDusknoir
	| GenderSettingsV0477PokemonDusknoirNormal
	| GenderSettingsV0478PokemonFroslass
	| GenderSettingsV0478PokemonFroslassNormal
	| GenderSettingsV0479PokemonRotom
	| GenderSettingsV0479PokemonRotomFan
	| GenderSettingsV0479PokemonRotomFrost
	| GenderSettingsV0479PokemonRotomHeat
	| GenderSettingsV0479PokemonRotomMow
	| GenderSettingsV0479PokemonRotomNormal
	| GenderSettingsV0479PokemonRotomWash
	| GenderSettingsV0480PokemonUxie
	| GenderSettingsV0480PokemonUxieNormal
	| GenderSettingsV0481PokemonMesprit
	| GenderSettingsV0481PokemonMespritNormal
	| GenderSettingsV0482PokemonAzelf
	| GenderSettingsV0482PokemonAzelfNormal
	| GenderSettingsV0483PokemonDialga
	| GenderSettingsV0483PokemonDialgaNormal
	| GenderSettingsV0483PokemonDialgaOrigin
	| GenderSettingsV0484PokemonPalkia
	| GenderSettingsV0484PokemonPalkiaNormal
	| GenderSettingsV0484PokemonPalkiaOrigin
	| GenderSettingsV0485PokemonHeatran
	| GenderSettingsV0485PokemonHeatranNormal
	| GenderSettingsV0486PokemonRegigigas
	| GenderSettingsV0486PokemonRegigigasNormal
	| GenderSettingsV0487PokemonGiratina
	| GenderSettingsV0487PokemonGiratinaAltered
	| GenderSettingsV0487PokemonGiratinaOrigin
	| GenderSettingsV0488PokemonCresselia
	| GenderSettingsV0488PokemonCresseliaNormal
	| GenderSettingsV0489PokemonPhione
	| GenderSettingsV0489PokemonPhioneNormal
	| GenderSettingsV0490PokemonManaphy
	| GenderSettingsV0490PokemonManaphyNormal
	| GenderSettingsV0491PokemonDarkrai
	| GenderSettingsV0491PokemonDarkraiNormal
	| GenderSettingsV0492PokemonShaymin
	| GenderSettingsV0492PokemonShayminLand
	| GenderSettingsV0492PokemonShayminSky
	| GenderSettingsV0493PokemonArceus
	| GenderSettingsV0493PokemonArceusBug
	| GenderSettingsV0493PokemonArceusDark
	| GenderSettingsV0493PokemonArceusDragon
	| GenderSettingsV0493PokemonArceusElectric
	| GenderSettingsV0493PokemonArceusFairy
	| GenderSettingsV0493PokemonArceusFighting
	| GenderSettingsV0493PokemonArceusFire
	| GenderSettingsV0493PokemonArceusFlying
	| GenderSettingsV0493PokemonArceusGhost
	| GenderSettingsV0493PokemonArceusGrass
	| GenderSettingsV0493PokemonArceusGround
	| GenderSettingsV0493PokemonArceusIce
	| GenderSettingsV0493PokemonArceusNormal
	| GenderSettingsV0493PokemonArceusPoison
	| GenderSettingsV0493PokemonArceusPsychic
	| GenderSettingsV0493PokemonArceusRock
	| GenderSettingsV0493PokemonArceusSteel
	| GenderSettingsV0493PokemonArceusWater
	| GenderSettingsV0494PokemonVictini
	| GenderSettingsV0494PokemonVictiniNormal
	| GenderSettingsV0495PokemonSnivy
	| GenderSettingsV0495PokemonSnivyNormal
	| GenderSettingsV0496PokemonServine
	| GenderSettingsV0496PokemonServineNormal
	| GenderSettingsV0497PokemonSerperior
	| GenderSettingsV0497PokemonSerperiorNormal
	| GenderSettingsV0498PokemonTepig
	| GenderSettingsV0498PokemonTepigNormal
	| GenderSettingsV0499PokemonPignite
	| GenderSettingsV0499PokemonPigniteNormal
	| GenderSettingsV0500PokemonEmboar
	| GenderSettingsV0500PokemonEmboarNormal
	| GenderSettingsV0501PokemonOshawott
	| GenderSettingsV0501PokemonOshawottNormal
	| GenderSettingsV0502PokemonDewott
	| GenderSettingsV0502PokemonDewottNormal
	| GenderSettingsV0503PokemonSamurott
	| GenderSettingsV0503PokemonSamurottHisuian
	| GenderSettingsV0503PokemonSamurottNormal
	| GenderSettingsV0504PokemonPatrat
	| GenderSettingsV0504PokemonPatratNormal
	| GenderSettingsV0505PokemonWatchog
	| GenderSettingsV0505PokemonWatchogNormal
	| GenderSettingsV0506PokemonLillipup
	| GenderSettingsV0506PokemonLillipupNormal
	| GenderSettingsV0507PokemonHerdier
	| GenderSettingsV0507PokemonHerdierNormal
	| GenderSettingsV0508PokemonStoutland
	| GenderSettingsV0508PokemonStoutlandNormal
	| GenderSettingsV0509PokemonPurrloin
	| GenderSettingsV0509PokemonPurrloinNormal
	| GenderSettingsV0510PokemonLiepard
	| GenderSettingsV0510PokemonLiepardNormal
	| GenderSettingsV0511PokemonPansage
	| GenderSettingsV0511PokemonPansageNormal
	| GenderSettingsV0512PokemonSimisage
	| GenderSettingsV0512PokemonSimisageNormal
	| GenderSettingsV0513PokemonPansear
	| GenderSettingsV0513PokemonPansearNormal
	| GenderSettingsV0514PokemonSimisear
	| GenderSettingsV0514PokemonSimisearNormal
	| GenderSettingsV0515PokemonPanpour
	| GenderSettingsV0515PokemonPanpourNormal
	| GenderSettingsV0516PokemonSimipour
	| GenderSettingsV0516PokemonSimipourNormal
	| GenderSettingsV0517PokemonMunna
	| GenderSettingsV0517PokemonMunnaNormal
	| GenderSettingsV0518PokemonMusharna
	| GenderSettingsV0518PokemonMusharnaNormal
	| GenderSettingsV0519PokemonPidove
	| GenderSettingsV0519PokemonPidoveNormal
	| GenderSettingsV0520PokemonTranquill
	| GenderSettingsV0520PokemonTranquillNormal
	| GenderSettingsV0521PokemonUnfezant
	| GenderSettingsV0521PokemonUnfezantNormal
	| GenderSettingsV0522PokemonBlitzle
	| GenderSettingsV0522PokemonBlitzleNormal
	| GenderSettingsV0523PokemonZebstrika
	| GenderSettingsV0523PokemonZebstrikaNormal
	| GenderSettingsV0524PokemonRoggenrola
	| GenderSettingsV0524PokemonRoggenrolaNormal
	| GenderSettingsV0525PokemonBoldore
	| GenderSettingsV0525PokemonBoldoreNormal
	| GenderSettingsV0526PokemonGigalith
	| GenderSettingsV0526PokemonGigalithNormal
	| GenderSettingsV0527PokemonWoobat
	| GenderSettingsV0527PokemonWoobatNormal
	| GenderSettingsV0528PokemonSwoobat
	| GenderSettingsV0528PokemonSwoobatNormal
	| GenderSettingsV0529PokemonDrilbur
	| GenderSettingsV0529PokemonDrilburNormal
	| GenderSettingsV0530PokemonExcadrill
	| GenderSettingsV0530PokemonExcadrillNormal
	| GenderSettingsV0531PokemonAudino
	| GenderSettingsV0531PokemonAudinoNormal
	| GenderSettingsV0532PokemonTimburr
	| GenderSettingsV0532PokemonTimburrNormal
	| GenderSettingsV0533PokemonGurdurr
	| GenderSettingsV0533PokemonGurdurrNormal
	| GenderSettingsV0534PokemonConkeldurr
	| GenderSettingsV0534PokemonConkeldurrNormal
	| GenderSettingsV0535PokemonTympole
	| GenderSettingsV0535PokemonTympoleNormal
	| GenderSettingsV0536PokemonPalpitoad
	| GenderSettingsV0536PokemonPalpitoadNormal
	| GenderSettingsV0537PokemonSeismitoad
	| GenderSettingsV0537PokemonSeismitoadNormal
	| GenderSettingsV0538PokemonThroh
	| GenderSettingsV0538PokemonThrohNormal
	| GenderSettingsV0539PokemonSawk
	| GenderSettingsV0539PokemonSawkNormal
	| GenderSettingsV0540PokemonSewaddle
	| GenderSettingsV0540PokemonSewaddleNormal
	| GenderSettingsV0541PokemonSwadloon
	| GenderSettingsV0541PokemonSwadloonNormal
	| GenderSettingsV0542PokemonLeavanny
	| GenderSettingsV0542PokemonLeavannyNormal
	| GenderSettingsV0543PokemonVenipede
	| GenderSettingsV0543PokemonVenipedeNormal
	| GenderSettingsV0544PokemonWhirlipede
	| GenderSettingsV0544PokemonWhirlipedeNormal
	| GenderSettingsV0545PokemonScolipede
	| GenderSettingsV0545PokemonScolipedeNormal
	| GenderSettingsV0546PokemonCottonee
	| GenderSettingsV0546PokemonCottoneeNormal
	| GenderSettingsV0547PokemonWhimsicott
	| GenderSettingsV0547PokemonWhimsicottNormal
	| GenderSettingsV0548PokemonPetilil
	| GenderSettingsV0548PokemonPetililNormal
	| GenderSettingsV0549PokemonLilligant
	| GenderSettingsV0549PokemonLilligantHisuian
	| GenderSettingsV0549PokemonLilligantNormal
	| GenderSettingsV0550PokemonBasculin
	| GenderSettingsV0550PokemonBasculinBlueStriped
	| GenderSettingsV0550PokemonBasculinRedStriped
	| GenderSettingsV0550PokemonBasculinWhiteStriped
	| GenderSettingsV0551PokemonSandile
	| GenderSettingsV0551PokemonSandileNormal
	| GenderSettingsV0552PokemonKrokorok
	| GenderSettingsV0552PokemonKrokorokNormal
	| GenderSettingsV0553PokemonKrookodile
	| GenderSettingsV0553PokemonKrookodileNormal
	| GenderSettingsV0554PokemonDarumaka
	| GenderSettingsV0554PokemonDarumakaGalarian
	| GenderSettingsV0554PokemonDarumakaNormal
	| GenderSettingsV0555PokemonDarmanitan
	| GenderSettingsV0555PokemonDarmanitanGalarianStandard
	| GenderSettingsV0555PokemonDarmanitanGalarianZen
	| GenderSettingsV0555PokemonDarmanitanStandard
	| GenderSettingsV0555PokemonDarmanitanZen
	| GenderSettingsV0556PokemonMaractus
	| GenderSettingsV0556PokemonMaractusNormal
	| GenderSettingsV0557PokemonDwebble
	| GenderSettingsV0557PokemonDwebbleNormal
	| GenderSettingsV0558PokemonCrustle
	| GenderSettingsV0558PokemonCrustleNormal
	| GenderSettingsV0559PokemonScraggy
	| GenderSettingsV0559PokemonScraggyNormal
	| GenderSettingsV0560PokemonScrafty
	| GenderSettingsV0560PokemonScraftyNormal
	| GenderSettingsV0561PokemonSigilyph
	| GenderSettingsV0561PokemonSigilyphNormal
	| GenderSettingsV0562PokemonYamask
	| GenderSettingsV0562PokemonYamaskGalarian
	| GenderSettingsV0562PokemonYamaskNormal
	| GenderSettingsV0563PokemonCofagrigus
	| GenderSettingsV0563PokemonCofagrigusNormal
	| GenderSettingsV0564PokemonTirtouga
	| GenderSettingsV0564PokemonTirtougaNormal
	| GenderSettingsV0565PokemonCarracosta
	| GenderSettingsV0565PokemonCarracostaNormal
	| GenderSettingsV0566PokemonArchen
	| GenderSettingsV0566PokemonArchenNormal
	| GenderSettingsV0567PokemonArcheops
	| GenderSettingsV0567PokemonArcheopsNormal
	| GenderSettingsV0568PokemonTrubbish
	| GenderSettingsV0568PokemonTrubbishNormal
	| GenderSettingsV0569PokemonGarbodor
	| GenderSettingsV0569PokemonGarbodorNormal
	| GenderSettingsV0570PokemonZorua
	| GenderSettingsV0570PokemonZoruaHisuian
	| GenderSettingsV0570PokemonZoruaNormal
	| GenderSettingsV0571PokemonZoroark
	| GenderSettingsV0571PokemonZoroarkHisuian
	| GenderSettingsV0571PokemonZoroarkNormal
	| GenderSettingsV0572PokemonMinccino
	| GenderSettingsV0572PokemonMinccinoNormal
	| GenderSettingsV0573PokemonCinccino
	| GenderSettingsV0573PokemonCinccinoNormal
	| GenderSettingsV0574PokemonGothita
	| GenderSettingsV0574PokemonGothitaNormal
	| GenderSettingsV0575PokemonGothorita
	| GenderSettingsV0575PokemonGothoritaNormal
	| GenderSettingsV0576PokemonGothitelle
	| GenderSettingsV0576PokemonGothitelleNormal
	| GenderSettingsV0577PokemonSolosis
	| GenderSettingsV0577PokemonSolosisNormal
	| GenderSettingsV0578PokemonDuosion
	| GenderSettingsV0578PokemonDuosionNormal
	| GenderSettingsV0579PokemonReuniclus
	| GenderSettingsV0579PokemonReuniclusNormal
	| GenderSettingsV0580PokemonDucklett
	| GenderSettingsV0580PokemonDucklettNormal
	| GenderSettingsV0581PokemonSwanna
	| GenderSettingsV0581PokemonSwannaNormal
	| GenderSettingsV0582PokemonVanillite
	| GenderSettingsV0582PokemonVanilliteNormal
	| GenderSettingsV0583PokemonVanillish
	| GenderSettingsV0583PokemonVanillishNormal
	| GenderSettingsV0584PokemonVanilluxe
	| GenderSettingsV0584PokemonVanilluxeNormal
	| GenderSettingsV0585PokemonDeerling
	| GenderSettingsV0585PokemonDeerlingAutumn
	| GenderSettingsV0585PokemonDeerlingSpring
	| GenderSettingsV0585PokemonDeerlingSummer
	| GenderSettingsV0585PokemonDeerlingWinter
	| GenderSettingsV0586PokemonSawsbuck
	| GenderSettingsV0586PokemonSawsbuckAutumn
	| GenderSettingsV0586PokemonSawsbuckSpring
	| GenderSettingsV0586PokemonSawsbuckSummer
	| GenderSettingsV0586PokemonSawsbuckWinter
	| GenderSettingsV0587PokemonEmolga
	| GenderSettingsV0587PokemonEmolgaNormal
	| GenderSettingsV0588PokemonKarrablast
	| GenderSettingsV0588PokemonKarrablastNormal
	| GenderSettingsV0589PokemonEscavalier
	| GenderSettingsV0589PokemonEscavalierNormal
	| GenderSettingsV0590PokemonFoongus
	| GenderSettingsV0590PokemonFoongusNormal
	| GenderSettingsV0591PokemonAmoonguss
	| GenderSettingsV0591PokemonAmoongussNormal
	| GenderSettingsV0592PokemonFrillish
	| GenderSettingsV0592PokemonFrillishFemale
	| GenderSettingsV0592PokemonFrillishNormal
	| GenderSettingsV0593PokemonJellicent
	| GenderSettingsV0593PokemonJellicentFemale
	| GenderSettingsV0593PokemonJellicentNormal
	| GenderSettingsV0594PokemonAlomomola
	| GenderSettingsV0594PokemonAlomomolaNormal
	| GenderSettingsV0595PokemonJoltik
	| GenderSettingsV0595PokemonJoltikNormal
	| GenderSettingsV0596PokemonGalvantula
	| GenderSettingsV0596PokemonGalvantulaNormal
	| GenderSettingsV0597PokemonFerroseed
	| GenderSettingsV0597PokemonFerroseedNormal
	| GenderSettingsV0598PokemonFerrothorn
	| GenderSettingsV0598PokemonFerrothornNormal
	| GenderSettingsV0599PokemonKlink
	| GenderSettingsV0599PokemonKlinkNormal
	| GenderSettingsV0600PokemonKlang
	| GenderSettingsV0600PokemonKlangNormal
	| GenderSettingsV0601PokemonKlinklang
	| GenderSettingsV0601PokemonKlinklangNormal
	| GenderSettingsV0602PokemonTynamo
	| GenderSettingsV0602PokemonTynamoNormal
	| GenderSettingsV0603PokemonEelektrik
	| GenderSettingsV0603PokemonEelektrikNormal
	| GenderSettingsV0604PokemonEelektross
	| GenderSettingsV0604PokemonEelektrossNormal
	| GenderSettingsV0605PokemonElgyem
	| GenderSettingsV0605PokemonElgyemNormal
	| GenderSettingsV0606PokemonBeheeyem
	| GenderSettingsV0606PokemonBeheeyemNormal
	| GenderSettingsV0607PokemonLitwick
	| GenderSettingsV0607PokemonLitwickNormal
	| GenderSettingsV0608PokemonLampent
	| GenderSettingsV0608PokemonLampentNormal
	| GenderSettingsV0609PokemonChandelure
	| GenderSettingsV0609PokemonChandelureNormal
	| GenderSettingsV0610PokemonAxew
	| GenderSettingsV0610PokemonAxewNormal
	| GenderSettingsV0611PokemonFraxure
	| GenderSettingsV0611PokemonFraxureNormal
	| GenderSettingsV0612PokemonHaxorus
	| GenderSettingsV0612PokemonHaxorusNormal
	| GenderSettingsV0613PokemonCubchoo
	| GenderSettingsV0613PokemonCubchooNormal
	| GenderSettingsV0613PokemonCubchooWinter2020
	| GenderSettingsV0614PokemonBeartic
	| GenderSettingsV0614PokemonBearticNormal
	| GenderSettingsV0614PokemonBearticWinter2020
	| GenderSettingsV0615PokemonCryogonal
	| GenderSettingsV0615PokemonCryogonalNormal
	| GenderSettingsV0616PokemonShelmet
	| GenderSettingsV0616PokemonShelmetNormal
	| GenderSettingsV0617PokemonAccelgor
	| GenderSettingsV0617PokemonAccelgorNormal
	| GenderSettingsV0618PokemonStunfisk
	| GenderSettingsV0618PokemonStunfiskGalarian
	| GenderSettingsV0618PokemonStunfiskNormal
	| GenderSettingsV0619PokemonMienfoo
	| GenderSettingsV0619PokemonMienfooNormal
	| GenderSettingsV0620PokemonMienshao
	| GenderSettingsV0620PokemonMienshaoNormal
	| GenderSettingsV0621PokemonDruddigon
	| GenderSettingsV0621PokemonDruddigonNormal
	| GenderSettingsV0622PokemonGolett
	| GenderSettingsV0622PokemonGolettNormal
	| GenderSettingsV0623PokemonGolurk
	| GenderSettingsV0623PokemonGolurkNormal
	| GenderSettingsV0624PokemonPawniard
	| GenderSettingsV0624PokemonPawniardNormal
	| GenderSettingsV0625PokemonBisharp
	| GenderSettingsV0625PokemonBisharpNormal
	| GenderSettingsV0626PokemonBouffalant
	| GenderSettingsV0626PokemonBouffalantNormal
	| GenderSettingsV0627PokemonRufflet
	| GenderSettingsV0627PokemonRuffletNormal
	| GenderSettingsV0628PokemonBraviary
	| GenderSettingsV0628PokemonBraviaryHisuian
	| GenderSettingsV0628PokemonBraviaryNormal
	| GenderSettingsV0629PokemonVullaby
	| GenderSettingsV0629PokemonVullabyNormal
	| GenderSettingsV0630PokemonMandibuzz
	| GenderSettingsV0630PokemonMandibuzzNormal
	| GenderSettingsV0631PokemonHeatmor
	| GenderSettingsV0631PokemonHeatmorNormal
	| GenderSettingsV0632PokemonDurant
	| GenderSettingsV0632PokemonDurantNormal
	| GenderSettingsV0633PokemonDeino
	| GenderSettingsV0633PokemonDeinoNormal
	| GenderSettingsV0634PokemonZweilous
	| GenderSettingsV0634PokemonZweilousNormal
	| GenderSettingsV0635PokemonHydreigon
	| GenderSettingsV0635PokemonHydreigonNormal
	| GenderSettingsV0636PokemonLarvesta
	| GenderSettingsV0636PokemonLarvestaNormal
	| GenderSettingsV0637PokemonVolcarona
	| GenderSettingsV0637PokemonVolcaronaNormal
	| GenderSettingsV0638PokemonCobalion
	| GenderSettingsV0638PokemonCobalionNormal
	| GenderSettingsV0639PokemonTerrakion
	| GenderSettingsV0639PokemonTerrakionNormal
	| GenderSettingsV0640PokemonVirizion
	| GenderSettingsV0640PokemonVirizionNormal
	| GenderSettingsV0641PokemonTornadus
	| GenderSettingsV0641PokemonTornadusIncarnate
	| GenderSettingsV0641PokemonTornadusTherian
	| GenderSettingsV0642PokemonThundurus
	| GenderSettingsV0642PokemonThundurusIncarnate
	| GenderSettingsV0642PokemonThundurusTherian
	| GenderSettingsV0643PokemonReshiram
	| GenderSettingsV0643PokemonReshiramNormal
	| GenderSettingsV0644PokemonZekrom
	| GenderSettingsV0644PokemonZekromNormal
	| GenderSettingsV0645PokemonLandorus
	| GenderSettingsV0645PokemonLandorusIncarnate
	| GenderSettingsV0645PokemonLandorusTherian
	| GenderSettingsV0646PokemonKyurem
	| GenderSettingsV0646PokemonKyuremBlack
	| GenderSettingsV0646PokemonKyuremNormal
	| GenderSettingsV0646PokemonKyuremWhite
	| GenderSettingsV0647PokemonKeldeo
	| GenderSettingsV0647PokemonKeldeoOrdinary
	| GenderSettingsV0647PokemonKeldeoResolute
	| GenderSettingsV0648PokemonMeloetta
	| GenderSettingsV0648PokemonMeloettaAria
	| GenderSettingsV0648PokemonMeloettaPirouette
	| GenderSettingsV0649PokemonGenesect
	| GenderSettingsV0649PokemonGenesectBurn
	| GenderSettingsV0649PokemonGenesectChill
	| GenderSettingsV0649PokemonGenesectDouse
	| GenderSettingsV0649PokemonGenesectNormal
	| GenderSettingsV0649PokemonGenesectShock
	| GenderSettingsV0650PokemonChespin
	| GenderSettingsV0650PokemonChespinNormal
	| GenderSettingsV0651PokemonQuilladin
	| GenderSettingsV0651PokemonQuilladinNormal
	| GenderSettingsV0652PokemonChesnaught
	| GenderSettingsV0652PokemonChesnaughtNormal
	| GenderSettingsV0653PokemonFennekin
	| GenderSettingsV0653PokemonFennekinNormal
	| GenderSettingsV0654PokemonBraixen
	| GenderSettingsV0654PokemonBraixenNormal
	| GenderSettingsV0655PokemonDelphox
	| GenderSettingsV0655PokemonDelphoxNormal
	| GenderSettingsV0656PokemonFroakie
	| GenderSettingsV0656PokemonFroakieNormal
	| GenderSettingsV0657PokemonFrogadier
	| GenderSettingsV0657PokemonFrogadierNormal
	| GenderSettingsV0658PokemonGreninja
	| GenderSettingsV0658PokemonGreninjaNormal
	| GenderSettingsV0659PokemonBunnelby
	| GenderSettingsV0659PokemonBunnelbyNormal
	| GenderSettingsV0660PokemonDiggersby
	| GenderSettingsV0660PokemonDiggersbyNormal
	| GenderSettingsV0661PokemonFletchling
	| GenderSettingsV0661PokemonFletchlingNormal
	| GenderSettingsV0662PokemonFletchinder
	| GenderSettingsV0662PokemonFletchinderNormal
	| GenderSettingsV0663PokemonTalonflame
	| GenderSettingsV0663PokemonTalonflameNormal
	| GenderSettingsV0664PokemonScatterbug
	| GenderSettingsV0664PokemonScatterbugArchipelago
	| GenderSettingsV0664PokemonScatterbugContinental
	| GenderSettingsV0664PokemonScatterbugElegant
	| GenderSettingsV0664PokemonScatterbugFancy
	| GenderSettingsV0664PokemonScatterbugGarden
	| GenderSettingsV0664PokemonScatterbugHighPlains
	| GenderSettingsV0664PokemonScatterbugIcySnow
	| GenderSettingsV0664PokemonScatterbugJungle
	| GenderSettingsV0664PokemonScatterbugMarine
	| GenderSettingsV0664PokemonScatterbugMeadow
	| GenderSettingsV0664PokemonScatterbugModern
	| GenderSettingsV0664PokemonScatterbugMonsoon
	| GenderSettingsV0664PokemonScatterbugOcean
	| GenderSettingsV0664PokemonScatterbugPokeball
	| GenderSettingsV0664PokemonScatterbugPolar
	| GenderSettingsV0664PokemonScatterbugRiver
	| GenderSettingsV0664PokemonScatterbugSandstorm
	| GenderSettingsV0664PokemonScatterbugSavanna
	| GenderSettingsV0664PokemonScatterbugSun
	| GenderSettingsV0664PokemonScatterbugTundra
	| GenderSettingsV0665PokemonSpewpa
	| GenderSettingsV0665PokemonSpewpaArchipelago
	| GenderSettingsV0665PokemonSpewpaContinental
	| GenderSettingsV0665PokemonSpewpaElegant
	| GenderSettingsV0665PokemonSpewpaFancy
	| GenderSettingsV0665PokemonSpewpaGarden
	| GenderSettingsV0665PokemonSpewpaHighPlains
	| GenderSettingsV0665PokemonSpewpaIcySnow
	| GenderSettingsV0665PokemonSpewpaJungle
	| GenderSettingsV0665PokemonSpewpaMarine
	| GenderSettingsV0665PokemonSpewpaMeadow
	| GenderSettingsV0665PokemonSpewpaModern
	| GenderSettingsV0665PokemonSpewpaMonsoon
	| GenderSettingsV0665PokemonSpewpaOcean
	| GenderSettingsV0665PokemonSpewpaPokeball
	| GenderSettingsV0665PokemonSpewpaPolar
	| GenderSettingsV0665PokemonSpewpaRiver
	| GenderSettingsV0665PokemonSpewpaSandstorm
	| GenderSettingsV0665PokemonSpewpaSavanna
	| GenderSettingsV0665PokemonSpewpaSun
	| GenderSettingsV0665PokemonSpewpaTundra
	| GenderSettingsV0666PokemonVivillon
	| GenderSettingsV0666PokemonVivillonArchipelago
	| GenderSettingsV0666PokemonVivillonContinental
	| GenderSettingsV0666PokemonVivillonElegant
	| GenderSettingsV0666PokemonVivillonFancy
	| GenderSettingsV0666PokemonVivillonGarden
	| GenderSettingsV0666PokemonVivillonHighPlains
	| GenderSettingsV0666PokemonVivillonIcySnow
	| GenderSettingsV0666PokemonVivillonJungle
	| GenderSettingsV0666PokemonVivillonMarine
	| GenderSettingsV0666PokemonVivillonMeadow
	| GenderSettingsV0666PokemonVivillonModern
	| GenderSettingsV0666PokemonVivillonMonsoon
	| GenderSettingsV0666PokemonVivillonOcean
	| GenderSettingsV0666PokemonVivillonPokeball
	| GenderSettingsV0666PokemonVivillonPolar
	| GenderSettingsV0666PokemonVivillonRiver
	| GenderSettingsV0666PokemonVivillonSandstorm
	| GenderSettingsV0666PokemonVivillonSavanna
	| GenderSettingsV0666PokemonVivillonSun
	| GenderSettingsV0666PokemonVivillonTundra
	| GenderSettingsV0667PokemonLitleo
	| GenderSettingsV0667PokemonLitleoNormal
	| GenderSettingsV0668PokemonPyroar
	| GenderSettingsV0668PokemonPyroarFemale
	| GenderSettingsV0668PokemonPyroarNormal
	| GenderSettingsV0669PokemonFlabebe
	| GenderSettingsV0669PokemonFlabebeBlue
	| GenderSettingsV0669PokemonFlabebeOrange
	| GenderSettingsV0669PokemonFlabebeRed
	| GenderSettingsV0669PokemonFlabebeWhite
	| GenderSettingsV0669PokemonFlabebeYellow
	| GenderSettingsV0670PokemonFloette
	| GenderSettingsV0670PokemonFloetteBlue
	| GenderSettingsV0670PokemonFloetteOrange
	| GenderSettingsV0670PokemonFloetteRed
	| GenderSettingsV0670PokemonFloetteWhite
	| GenderSettingsV0670PokemonFloetteYellow
	| GenderSettingsV0671PokemonFlorges
	| GenderSettingsV0671PokemonFlorgesBlue
	| GenderSettingsV0671PokemonFlorgesOrange
	| GenderSettingsV0671PokemonFlorgesRed
	| GenderSettingsV0671PokemonFlorgesWhite
	| GenderSettingsV0671PokemonFlorgesYellow
	| GenderSettingsV0672PokemonSkiddo
	| GenderSettingsV0672PokemonSkiddoNormal
	| GenderSettingsV0673PokemonGogoat
	| GenderSettingsV0673PokemonGogoatNormal
	| GenderSettingsV0674PokemonPancham
	| GenderSettingsV0674PokemonPanchamNormal
	| GenderSettingsV0675PokemonPangoro
	| GenderSettingsV0675PokemonPangoroNormal
	| GenderSettingsV0676PokemonFurfrou
	| GenderSettingsV0676PokemonFurfrouDandy
	| GenderSettingsV0676PokemonFurfrouDebutante
	| GenderSettingsV0676PokemonFurfrouDiamond
	| GenderSettingsV0676PokemonFurfrouHeart
	| GenderSettingsV0676PokemonFurfrouKabuki
	| GenderSettingsV0676PokemonFurfrouLaReine
	| GenderSettingsV0676PokemonFurfrouMatron
	| GenderSettingsV0676PokemonFurfrouNatural
	| GenderSettingsV0676PokemonFurfrouPharaoh
	| GenderSettingsV0676PokemonFurfrouStar
	| GenderSettingsV0677PokemonEspurr
	| GenderSettingsV0677PokemonEspurrNormal
	| GenderSettingsV0678PokemonMeowstic
	| GenderSettingsV0678PokemonMeowsticFemale
	| GenderSettingsV0678PokemonMeowsticNormal
	| GenderSettingsV0679PokemonHonedge
	| GenderSettingsV0679PokemonHonedgeNormal
	| GenderSettingsV0680PokemonDoublade
	| GenderSettingsV0680PokemonDoubladeNormal
	| GenderSettingsV0681PokemonAegislash
	| GenderSettingsV0681PokemonAegislashBlade
	| GenderSettingsV0681PokemonAegislashShield
	| GenderSettingsV0682PokemonSpritzee
	| GenderSettingsV0682PokemonSpritzeeNormal
	| GenderSettingsV0683PokemonAromatisse
	| GenderSettingsV0683PokemonAromatisseNormal
	| GenderSettingsV0684PokemonSwirlix
	| GenderSettingsV0684PokemonSwirlixNormal
	| GenderSettingsV0685PokemonSlurpuff
	| GenderSettingsV0685PokemonSlurpuffNormal
	| GenderSettingsV0686PokemonInkay
	| GenderSettingsV0686PokemonInkayNormal
	| GenderSettingsV0687PokemonMalamar
	| GenderSettingsV0687PokemonMalamarNormal
	| GenderSettingsV0688PokemonBinacle
	| GenderSettingsV0688PokemonBinacleNormal
	| GenderSettingsV0689PokemonBarbaracle
	| GenderSettingsV0689PokemonBarbaracleNormal
	| GenderSettingsV0690PokemonSkrelp
	| GenderSettingsV0690PokemonSkrelpNormal
	| GenderSettingsV0691PokemonDragalge
	| GenderSettingsV0691PokemonDragalgeNormal
	| GenderSettingsV0692PokemonClauncher
	| GenderSettingsV0692PokemonClauncherNormal
	| GenderSettingsV0693PokemonClawitzer
	| GenderSettingsV0693PokemonClawitzerNormal
	| GenderSettingsV0694PokemonHelioptile
	| GenderSettingsV0694PokemonHelioptileNormal
	| GenderSettingsV0695PokemonHeliolisk
	| GenderSettingsV0695PokemonHelioliskNormal
	| GenderSettingsV0696PokemonTyrunt
	| GenderSettingsV0696PokemonTyruntNormal
	| GenderSettingsV0697PokemonTyrantrum
	| GenderSettingsV0697PokemonTyrantrumNormal
	| GenderSettingsV0698PokemonAmaura
	| GenderSettingsV0698PokemonAmauraNormal
	| GenderSettingsV0699PokemonAurorus
	| GenderSettingsV0699PokemonAurorusNormal
	| GenderSettingsV0700PokemonSylveon
	| GenderSettingsV0700PokemonSylveonNormal
	| GenderSettingsV0701PokemonHawlucha
	| GenderSettingsV0701PokemonHawluchaNormal
	| GenderSettingsV0702PokemonDedenne
	| GenderSettingsV0702PokemonDedenneNormal
	| GenderSettingsV0703PokemonCarbink
	| GenderSettingsV0703PokemonCarbinkNormal
	| GenderSettingsV0704PokemonGoomy
	| GenderSettingsV0704PokemonGoomyNormal
	| GenderSettingsV0705PokemonSliggoo
	| GenderSettingsV0705PokemonSliggooNormal
	| GenderSettingsV0706PokemonGoodra
	| GenderSettingsV0706PokemonGoodraNormal
	| GenderSettingsV0707PokemonKlefki
	| GenderSettingsV0707PokemonKlefkiNormal
	| GenderSettingsV0708PokemonPhantump
	| GenderSettingsV0708PokemonPhantumpNormal
	| GenderSettingsV0709PokemonTrevenant
	| GenderSettingsV0709PokemonTrevenantNormal
	| GenderSettingsV0710PokemonPumpkaboo
	| GenderSettingsV0710PokemonPumpkabooAverage
	| GenderSettingsV0710PokemonPumpkabooLarge
	| GenderSettingsV0710PokemonPumpkabooSmall
	| GenderSettingsV0710PokemonPumpkabooSuper
	| GenderSettingsV0711PokemonGourgeist
	| GenderSettingsV0711PokemonGourgeistAverage
	| GenderSettingsV0711PokemonGourgeistLarge
	| GenderSettingsV0711PokemonGourgeistSmall
	| GenderSettingsV0711PokemonGourgeistSuper
	| GenderSettingsV0712PokemonBergmite
	| GenderSettingsV0712PokemonBergmiteNormal
	| GenderSettingsV0713PokemonAvalugg
	| GenderSettingsV0713PokemonAvaluggHisuian
	| GenderSettingsV0713PokemonAvaluggNormal
	| GenderSettingsV0714PokemonNoibat
	| GenderSettingsV0714PokemonNoibatNormal
	| GenderSettingsV0715PokemonNoivern
	| GenderSettingsV0715PokemonNoivernNormal
	| GenderSettingsV0716PokemonXerneas
	| GenderSettingsV0716PokemonXerneasNormal
	| GenderSettingsV0717PokemonYveltal
	| GenderSettingsV0717PokemonYveltalNormal
	| GenderSettingsV0718PokemonZygarde
	| GenderSettingsV0718PokemonZygardeComplete
	| GenderSettingsV0718PokemonZygardeCompleteFiftyPercent
	| GenderSettingsV0718PokemonZygardeCompleteTenPercent
	| GenderSettingsV0718PokemonZygardeFiftyPercent
	| GenderSettingsV0718PokemonZygardeTenPercent
	| GenderSettingsV0719PokemonDiancie
	| GenderSettingsV0719PokemonDiancieNormal
	| GenderSettingsV0720PokemonHoopa
	| GenderSettingsV0720PokemonHoopaConfined
	| GenderSettingsV0720PokemonHoopaUnbound
	| GenderSettingsV0721PokemonVolcanion
	| GenderSettingsV0721PokemonVolcanionNormal
	| GenderSettingsV0722PokemonRowlet
	| GenderSettingsV0722PokemonRowletNormal
	| GenderSettingsV0723PokemonDartrix
	| GenderSettingsV0723PokemonDartrixNormal
	| GenderSettingsV0724PokemonDecidueye
	| GenderSettingsV0724PokemonDecidueyeHisuian
	| GenderSettingsV0724PokemonDecidueyeNormal
	| GenderSettingsV0725PokemonLitten
	| GenderSettingsV0725PokemonLittenNormal
	| GenderSettingsV0726PokemonTorracat
	| GenderSettingsV0726PokemonTorracatNormal
	| GenderSettingsV0727PokemonIncineroar
	| GenderSettingsV0727PokemonIncineroarNormal
	| GenderSettingsV0728PokemonPopplio
	| GenderSettingsV0728PokemonPopplioNormal
	| GenderSettingsV0729PokemonBrionne
	| GenderSettingsV0729PokemonBrionneNormal
	| GenderSettingsV0730PokemonPrimarina
	| GenderSettingsV0730PokemonPrimarinaNormal
	| GenderSettingsV0731PokemonPikipek
	| GenderSettingsV0731PokemonPikipekNormal
	| GenderSettingsV0732PokemonTrumbeak
	| GenderSettingsV0732PokemonTrumbeakNormal
	| GenderSettingsV0733PokemonToucannon
	| GenderSettingsV0733PokemonToucannonNormal
	| GenderSettingsV0734PokemonYungoos
	| GenderSettingsV0734PokemonYungoosNormal
	| GenderSettingsV0735PokemonGumshoos
	| GenderSettingsV0735PokemonGumshoosNormal
	| GenderSettingsV0736PokemonGrubbin
	| GenderSettingsV0736PokemonGrubbinNormal
	| GenderSettingsV0737PokemonCharjabug
	| GenderSettingsV0737PokemonCharjabugNormal
	| GenderSettingsV0737PokemonCharjabugWinter2025
	| GenderSettingsV0738PokemonVikavolt
	| GenderSettingsV0738PokemonVikavoltNormal
	| GenderSettingsV0738PokemonVikavoltWinter2025
	| GenderSettingsV0739PokemonCrabrawler
	| GenderSettingsV0739PokemonCrabrawlerNormal
	| GenderSettingsV0740PokemonCrabominable
	| GenderSettingsV0740PokemonCrabominableNormal
	| GenderSettingsV0741PokemonOricorio
	| GenderSettingsV0741PokemonOricorioBaile
	| GenderSettingsV0741PokemonOricorioPau
	| GenderSettingsV0741PokemonOricorioPompom
	| GenderSettingsV0741PokemonOricorioSensu
	| GenderSettingsV0742PokemonCutiefly
	| GenderSettingsV0742PokemonCutieflyNormal
	| GenderSettingsV0743PokemonRibombee
	| GenderSettingsV0743PokemonRibombeeNormal
	| GenderSettingsV0744PokemonRockruff
	| GenderSettingsV0744PokemonRockruffDusk
	| GenderSettingsV0744PokemonRockruffNormal
	| GenderSettingsV0745PokemonLycanroc
	| GenderSettingsV0745PokemonLycanrocDusk
	| GenderSettingsV0745PokemonLycanrocMidday
	| GenderSettingsV0745PokemonLycanrocMidnight
	| GenderSettingsV0746PokemonWishiwashi
	| GenderSettingsV0746PokemonWishiwashiSchool
	| GenderSettingsV0746PokemonWishiwashiSolo
	| GenderSettingsV0747PokemonMareanie
	| GenderSettingsV0747PokemonMareanieNormal
	| GenderSettingsV0748PokemonToxapex
	| GenderSettingsV0748PokemonToxapexNormal
	| GenderSettingsV0749PokemonMudbray
	| GenderSettingsV0749PokemonMudbrayNormal
	| GenderSettingsV0750PokemonMudsdale
	| GenderSettingsV0750PokemonMudsdaleNormal
	| GenderSettingsV0751PokemonDewpider
	| GenderSettingsV0751PokemonDewpiderNormal
	| GenderSettingsV0752PokemonAraquanid
	| GenderSettingsV0752PokemonAraquanidNormal
	| GenderSettingsV0753PokemonFomantis
	| GenderSettingsV0753PokemonFomantisNormal
	| GenderSettingsV0754PokemonLurantis
	| GenderSettingsV0754PokemonLurantisNormal
	| GenderSettingsV0755PokemonMorelull
	| GenderSettingsV0755PokemonMorelullNormal
	| GenderSettingsV0756PokemonShiinotic
	| GenderSettingsV0756PokemonShiinoticNormal
	| GenderSettingsV0757PokemonSalandit
	| GenderSettingsV0757PokemonSalanditNormal
	| GenderSettingsV0758PokemonSalazzle
	| GenderSettingsV0758PokemonSalazzleNormal
	| GenderSettingsV0759PokemonStufful
	| GenderSettingsV0759PokemonStuffulNormal
	| GenderSettingsV0760PokemonBewear
	| GenderSettingsV0760PokemonBewearNormal
	| GenderSettingsV0760PokemonBewearWildarea2025
	| GenderSettingsV0761PokemonBounsweet
	| GenderSettingsV0761PokemonBounsweetNormal
	| GenderSettingsV0762PokemonSteenee
	| GenderSettingsV0762PokemonSteeneeNormal
	| GenderSettingsV0763PokemonTsareena
	| GenderSettingsV0763PokemonTsareenaNormal
	| GenderSettingsV0764PokemonComfey
	| GenderSettingsV0764PokemonComfeyNormal
	| GenderSettingsV0765PokemonOranguru
	| GenderSettingsV0765PokemonOranguruNormal
	| GenderSettingsV0766PokemonPassimian
	| GenderSettingsV0766PokemonPassimianNormal
	| GenderSettingsV0767PokemonWimpod
	| GenderSettingsV0767PokemonWimpodNormal
	| GenderSettingsV0768PokemonGolisopod
	| GenderSettingsV0768PokemonGolisopodNormal
	| GenderSettingsV0769PokemonSandygast
	| GenderSettingsV0769PokemonSandygastNormal
	| GenderSettingsV0770PokemonPalossand
	| GenderSettingsV0770PokemonPalossandNormal
	| GenderSettingsV0771PokemonPyukumuku
	| GenderSettingsV0771PokemonPyukumukuNormal
	| GenderSettingsV0772PokemonTypeNull
	| GenderSettingsV0772PokemonTypeNullNormal
	| GenderSettingsV0773PokemonSilvally
	| GenderSettingsV0773PokemonSilvallyBug
	| GenderSettingsV0773PokemonSilvallyDark
	| GenderSettingsV0773PokemonSilvallyDragon
	| GenderSettingsV0773PokemonSilvallyElectric
	| GenderSettingsV0773PokemonSilvallyFairy
	| GenderSettingsV0773PokemonSilvallyFighting
	| GenderSettingsV0773PokemonSilvallyFire
	| GenderSettingsV0773PokemonSilvallyFlying
	| GenderSettingsV0773PokemonSilvallyGhost
	| GenderSettingsV0773PokemonSilvallyGrass
	| GenderSettingsV0773PokemonSilvallyGround
	| GenderSettingsV0773PokemonSilvallyIce
	| GenderSettingsV0773PokemonSilvallyNormal
	| GenderSettingsV0773PokemonSilvallyPoison
	| GenderSettingsV0773PokemonSilvallyPsychic
	| GenderSettingsV0773PokemonSilvallyRock
	| GenderSettingsV0773PokemonSilvallySteel
	| GenderSettingsV0773PokemonSilvallyWater
	| GenderSettingsV0774PokemonMinior
	| GenderSettingsV0774PokemonMiniorBlue
	| GenderSettingsV0774PokemonMiniorGreen
	| GenderSettingsV0774PokemonMiniorIndigo
	| GenderSettingsV0774PokemonMiniorOrange
	| GenderSettingsV0774PokemonMiniorRed
	| GenderSettingsV0774PokemonMiniorViolet
	| GenderSettingsV0774PokemonMiniorYellow
	| GenderSettingsV0775PokemonKomala
	| GenderSettingsV0775PokemonKomalaNormal
	| GenderSettingsV0776PokemonTurtonator
	| GenderSettingsV0776PokemonTurtonatorNormal
	| GenderSettingsV0777PokemonTogedemaru
	| GenderSettingsV0777PokemonTogedemaruNormal
	| GenderSettingsV0778PokemonMimikyu
	| GenderSettingsV0778PokemonMimikyuBusted
	| GenderSettingsV0778PokemonMimikyuDisguised
	| GenderSettingsV0779PokemonBruxish
	| GenderSettingsV0779PokemonBruxishNormal
	| GenderSettingsV0780PokemonDrampa
	| GenderSettingsV0780PokemonDrampaNormal
	| GenderSettingsV0781PokemonDhelmise
	| GenderSettingsV0781PokemonDhelmiseNormal
	| GenderSettingsV0782PokemonJangmoO
	| GenderSettingsV0782PokemonJangmoONormal
	| GenderSettingsV0783PokemonHakamoO
	| GenderSettingsV0783PokemonHakamoONormal
	| GenderSettingsV0784PokemonKommoO
	| GenderSettingsV0784PokemonKommoONormal
	| GenderSettingsV0785PokemonTapuKoko
	| GenderSettingsV0785PokemonTapuKokoNormal
	| GenderSettingsV0786PokemonTapuLele
	| GenderSettingsV0786PokemonTapuLeleNormal
	| GenderSettingsV0787PokemonTapuBulu
	| GenderSettingsV0787PokemonTapuBuluNormal
	| GenderSettingsV0788PokemonTapuFini
	| GenderSettingsV0788PokemonTapuFiniNormal
	| GenderSettingsV0789PokemonCosmog
	| GenderSettingsV0789PokemonCosmogNormal
	| GenderSettingsV0790PokemonCosmoem
	| GenderSettingsV0790PokemonCosmoemNormal
	| GenderSettingsV0791PokemonSolgaleo
	| GenderSettingsV0791PokemonSolgaleoNormal
	| GenderSettingsV0792PokemonLunala
	| GenderSettingsV0792PokemonLunalaNormal
	| GenderSettingsV0793PokemonNihilego
	| GenderSettingsV0793PokemonNihilegoNormal
	| GenderSettingsV0794PokemonBuzzwole
	| GenderSettingsV0794PokemonBuzzwoleNormal
	| GenderSettingsV0795PokemonPheromosa
	| GenderSettingsV0795PokemonPheromosaNormal
	| GenderSettingsV0796PokemonXurkitree
	| GenderSettingsV0796PokemonXurkitreeNormal
	| GenderSettingsV0797PokemonCelesteela
	| GenderSettingsV0797PokemonCelesteelaNormal
	| GenderSettingsV0798PokemonKartana
	| GenderSettingsV0798PokemonKartanaNormal
	| GenderSettingsV0799PokemonGuzzlord
	| GenderSettingsV0799PokemonGuzzlordNormal
	| GenderSettingsV0800PokemonNecrozma
	| GenderSettingsV0800PokemonNecrozmaDawnWings
	| GenderSettingsV0800PokemonNecrozmaDuskMane
	| GenderSettingsV0800PokemonNecrozmaNormal
	| GenderSettingsV0800PokemonNecrozmaUltra
	| GenderSettingsV0801PokemonMagearna
	| GenderSettingsV0801PokemonMagearnaNormal
	| GenderSettingsV0801PokemonMagearnaOriginalColor
	| GenderSettingsV0802PokemonMarshadow
	| GenderSettingsV0802PokemonMarshadowNormal
	| GenderSettingsV0803PokemonPoipole
	| GenderSettingsV0803PokemonPoipoleNormal
	| GenderSettingsV0804PokemonNaganadel
	| GenderSettingsV0804PokemonNaganadelNormal
	| GenderSettingsV0805PokemonStakataka
	| GenderSettingsV0805PokemonStakatakaNormal
	| GenderSettingsV0806PokemonBlacephalon
	| GenderSettingsV0806PokemonBlacephalonNormal
	| GenderSettingsV0807PokemonZeraora
	| GenderSettingsV0807PokemonZeraoraNormal
	| GenderSettingsV0808PokemonMeltan
	| GenderSettingsV0808PokemonMeltanNormal
	| GenderSettingsV0809PokemonMelmetal
	| GenderSettingsV0809PokemonMelmetalNormal
	| GenderSettingsV0810PokemonGrookey
	| GenderSettingsV0810PokemonGrookeyNormal
	| GenderSettingsV0811PokemonThwackey
	| GenderSettingsV0811PokemonThwackeyNormal
	| GenderSettingsV0812PokemonRillaboom
	| GenderSettingsV0812PokemonRillaboomNormal
	| GenderSettingsV0813PokemonScorbunny
	| GenderSettingsV0813PokemonScorbunnyNormal
	| GenderSettingsV0814PokemonRaboot
	| GenderSettingsV0814PokemonRabootNormal
	| GenderSettingsV0815PokemonCinderace
	| GenderSettingsV0815PokemonCinderaceNormal
	| GenderSettingsV0816PokemonSobble
	| GenderSettingsV0816PokemonSobbleNormal
	| GenderSettingsV0817PokemonDrizzile
	| GenderSettingsV0817PokemonDrizzileNormal
	| GenderSettingsV0818PokemonInteleon
	| GenderSettingsV0818PokemonInteleonNormal
	| GenderSettingsV0819PokemonSkwovet
	| GenderSettingsV0819PokemonSkwovetNormal
	| GenderSettingsV0820PokemonGreedent
	| GenderSettingsV0820PokemonGreedentNormal
	| GenderSettingsV0821PokemonRookidee
	| GenderSettingsV0821PokemonRookideeNormal
	| GenderSettingsV0822PokemonCorvisquire
	| GenderSettingsV0822PokemonCorvisquireNormal
	| GenderSettingsV0823PokemonCorviknight
	| GenderSettingsV0823PokemonCorviknightNormal
	| GenderSettingsV0824PokemonBlipbug
	| GenderSettingsV0824PokemonBlipbugNormal
	| GenderSettingsV0825PokemonDottler
	| GenderSettingsV0825PokemonDottlerNormal
	| GenderSettingsV0826PokemonOrbeetle
	| GenderSettingsV0826PokemonOrbeetleNormal
	| GenderSettingsV0827PokemonNickit
	| GenderSettingsV0827PokemonNickitNormal
	| GenderSettingsV0828PokemonThievul
	| GenderSettingsV0828PokemonThievulNormal
	| GenderSettingsV0829PokemonGossifleur
	| GenderSettingsV0829PokemonGossifleurNormal
	| GenderSettingsV0830PokemonEldegoss
	| GenderSettingsV0830PokemonEldegossNormal
	| GenderSettingsV0831PokemonWooloo
	| GenderSettingsV0831PokemonWoolooNormal
	| GenderSettingsV0832PokemonDubwool
	| GenderSettingsV0832PokemonDubwoolNormal
	| GenderSettingsV0833PokemonChewtle
	| GenderSettingsV0833PokemonChewtleNormal
	| GenderSettingsV0834PokemonDrednaw
	| GenderSettingsV0834PokemonDrednawNormal
	| GenderSettingsV0835PokemonYamper
	| GenderSettingsV0835PokemonYamperNormal
	| GenderSettingsV0836PokemonBoltund
	| GenderSettingsV0836PokemonBoltundNormal
	| GenderSettingsV0837PokemonRolycoly
	| GenderSettingsV0837PokemonRolycolyNormal
	| GenderSettingsV0838PokemonCarkol
	| GenderSettingsV0838PokemonCarkolNormal
	| GenderSettingsV0839PokemonCoalossal
	| GenderSettingsV0839PokemonCoalossalNormal
	| GenderSettingsV0840PokemonApplin
	| GenderSettingsV0840PokemonApplinNormal
	| GenderSettingsV0841PokemonFlapple
	| GenderSettingsV0841PokemonFlappleNormal
	| GenderSettingsV0842PokemonAppletun
	| GenderSettingsV0842PokemonAppletunNormal
	| GenderSettingsV0843PokemonSilicobra
	| GenderSettingsV0843PokemonSilicobraNormal
	| GenderSettingsV0844PokemonSandaconda
	| GenderSettingsV0844PokemonSandacondaNormal
	| GenderSettingsV0845PokemonCramorant
	| GenderSettingsV0845PokemonCramorantNormal
	| GenderSettingsV0846PokemonArrokuda
	| GenderSettingsV0846PokemonArrokudaNormal
	| GenderSettingsV0847PokemonBarraskewda
	| GenderSettingsV0847PokemonBarraskewdaNormal
	| GenderSettingsV0848PokemonToxel
	| GenderSettingsV0848PokemonToxelNormal
	| GenderSettingsV0849PokemonToxtricity
	| GenderSettingsV0849PokemonToxtricityAmped
	| GenderSettingsV0849PokemonToxtricityLowKey
	| GenderSettingsV0850PokemonSizzlipede
	| GenderSettingsV0850PokemonSizzlipedeNormal
	| GenderSettingsV0851PokemonCentiskorch
	| GenderSettingsV0851PokemonCentiskorchNormal
	| GenderSettingsV0852PokemonClobbopus
	| GenderSettingsV0852PokemonClobbopusNormal
	| GenderSettingsV0853PokemonGrapploct
	| GenderSettingsV0853PokemonGrapploctNormal
	| GenderSettingsV0854PokemonSinistea
	| GenderSettingsV0854PokemonSinisteaAntique
	| GenderSettingsV0854PokemonSinisteaPhony
	| GenderSettingsV0855PokemonPolteageist
	| GenderSettingsV0855PokemonPolteageistAntique
	| GenderSettingsV0855PokemonPolteageistPhony
	| GenderSettingsV0856PokemonHatenna
	| GenderSettingsV0856PokemonHatennaNormal
	| GenderSettingsV0857PokemonHattrem
	| GenderSettingsV0857PokemonHattremNormal
	| GenderSettingsV0858PokemonHatterene
	| GenderSettingsV0858PokemonHattereneNormal
	| GenderSettingsV0859PokemonImpidimp
	| GenderSettingsV0859PokemonImpidimpNormal
	| GenderSettingsV0860PokemonMorgrem
	| GenderSettingsV0860PokemonMorgremNormal
	| GenderSettingsV0861PokemonGrimmsnarl
	| GenderSettingsV0861PokemonGrimmsnarlNormal
	| GenderSettingsV0862PokemonObstagoon
	| GenderSettingsV0862PokemonObstagoonNormal
	| GenderSettingsV0863PokemonPerrserker
	| GenderSettingsV0863PokemonPerrserkerNormal
	| GenderSettingsV0864PokemonCursola
	| GenderSettingsV0864PokemonCursolaNormal
	| GenderSettingsV0865PokemonSirfetchd
	| GenderSettingsV0865PokemonSirfetchdNormal
	| GenderSettingsV0866PokemonMrRime
	| GenderSettingsV0866PokemonMrRimeNormal
	| GenderSettingsV0867PokemonRunerigus
	| GenderSettingsV0867PokemonRunerigusNormal
	| GenderSettingsV0868PokemonMilcery
	| GenderSettingsV0868PokemonMilceryNormal
	| GenderSettingsV0869PokemonAlcremie
	| GenderSettingsV0869PokemonAlcremieNormal
	| GenderSettingsV0870PokemonFalinks
	| GenderSettingsV0870PokemonFalinksGofest2025TrainConductor
	| GenderSettingsV0870PokemonFalinksNormal
	| GenderSettingsV0871PokemonPincurchin
	| GenderSettingsV0871PokemonPincurchinNormal
	| GenderSettingsV0872PokemonSnom
	| GenderSettingsV0872PokemonSnomNormal
	| GenderSettingsV0873PokemonFrosmoth
	| GenderSettingsV0873PokemonFrosmothNormal
	| GenderSettingsV0874PokemonStonjourner
	| GenderSettingsV0874PokemonStonjournerNormal
	| GenderSettingsV0875PokemonEiscue
	| GenderSettingsV0875PokemonEiscueIce
	| GenderSettingsV0875PokemonEiscueNoice
	| GenderSettingsV0876PokemonIndeedee
	| GenderSettingsV0876PokemonIndeedeeFemale
	| GenderSettingsV0876PokemonIndeedeeMale
	| GenderSettingsV0877PokemonMorpeko
	| GenderSettingsV0877PokemonMorpekoFullBelly
	| GenderSettingsV0877PokemonMorpekoHangry
	| GenderSettingsV0878PokemonCufant
	| GenderSettingsV0878PokemonCufantNormal
	| GenderSettingsV0879PokemonCopperajah
	| GenderSettingsV0879PokemonCopperajahNormal
	| GenderSettingsV0880PokemonDracozolt
	| GenderSettingsV0880PokemonDracozoltNormal
	| GenderSettingsV0881PokemonArctozolt
	| GenderSettingsV0881PokemonArctozoltNormal
	| GenderSettingsV0882PokemonDracovish
	| GenderSettingsV0882PokemonDracovishNormal
	| GenderSettingsV0883PokemonArctovish
	| GenderSettingsV0883PokemonArctovishNormal
	| GenderSettingsV0884PokemonDuraludon
	| GenderSettingsV0884PokemonDuraludonNormal
	| GenderSettingsV0885PokemonDreepy
	| GenderSettingsV0885PokemonDreepyNormal
	| GenderSettingsV0886PokemonDrakloak
	| GenderSettingsV0886PokemonDrakloakNormal
	| GenderSettingsV0887PokemonDragapult
	| GenderSettingsV0887PokemonDragapultNormal
	| GenderSettingsV0888PokemonZacian
	| GenderSettingsV0888PokemonZacianCrownedSword
	| GenderSettingsV0888PokemonZacianHero
	| GenderSettingsV0889PokemonZamazenta
	| GenderSettingsV0889PokemonZamazentaCrownedShield
	| GenderSettingsV0889PokemonZamazentaHero
	| GenderSettingsV0890PokemonEternatus
	| GenderSettingsV0890PokemonEternatusEternamax
	| GenderSettingsV0890PokemonEternatusNormal
	| GenderSettingsV0891PokemonKubfu
	| GenderSettingsV0891PokemonKubfuNormal
	| GenderSettingsV0892PokemonUrshifu
	| GenderSettingsV0892PokemonUrshifuRapidStrike
	| GenderSettingsV0892PokemonUrshifuSingleStrike
	| GenderSettingsV0893PokemonZarude
	| GenderSettingsV0893PokemonZarudeNormal
	| GenderSettingsV0894PokemonRegieleki
	| GenderSettingsV0894PokemonRegielekiNormal
	| GenderSettingsV0895PokemonRegidrago
	| GenderSettingsV0895PokemonRegidragoNormal
	| GenderSettingsV0896PokemonGlastrier
	| GenderSettingsV0896PokemonGlastrierNormal
	| GenderSettingsV0897PokemonSpectrier
	| GenderSettingsV0897PokemonSpectrierNormal
	| GenderSettingsV0898PokemonCalyrex
	| GenderSettingsV0898PokemonCalyrexIceRider
	| GenderSettingsV0898PokemonCalyrexNormal
	| GenderSettingsV0898PokemonCalyrexShadowRider
	| GenderSettingsV0899PokemonWyrdeer
	| GenderSettingsV0899PokemonWyrdeerNormal
	| GenderSettingsV0900PokemonKleavor
	| GenderSettingsV0900PokemonKleavorNormal
	| GenderSettingsV0901PokemonUrsaluna
	| GenderSettingsV0901PokemonUrsalunaNormal
	| GenderSettingsV0902PokemonBasculegion
	| GenderSettingsV0902PokemonBasculegionFemale
	| GenderSettingsV0902PokemonBasculegionNormal
	| GenderSettingsV0903PokemonSneasler
	| GenderSettingsV0903PokemonSneaslerNormal
	| GenderSettingsV0904PokemonOverqwil
	| GenderSettingsV0904PokemonOverqwilNormal
	| GenderSettingsV0905PokemonEnamorus
	| GenderSettingsV0905PokemonEnamorusIncarnate
	| GenderSettingsV0905PokemonEnamorusTherian
	| GenderSettingsV0906PokemonSprigatito
	| GenderSettingsV0906PokemonSprigatitoNormal
	| GenderSettingsV0907PokemonFloragato
	| GenderSettingsV0907PokemonFloragatoNormal
	| GenderSettingsV0908PokemonMeowscarada
	| GenderSettingsV0908PokemonMeowscaradaNormal
	| GenderSettingsV0909PokemonFuecoco
	| GenderSettingsV0909PokemonFuecocoNormal
	| GenderSettingsV0910PokemonCrocalor
	| GenderSettingsV0910PokemonCrocalorNormal
	| GenderSettingsV0911PokemonSkeledirge
	| GenderSettingsV0911PokemonSkeledirgeNormal
	| GenderSettingsV0912PokemonQuaxly
	| GenderSettingsV0912PokemonQuaxlyNormal
	| GenderSettingsV0913PokemonQuaxwell
	| GenderSettingsV0913PokemonQuaxwellNormal
	| GenderSettingsV0914PokemonQuaquaval
	| GenderSettingsV0914PokemonQuaquavalNormal
	| GenderSettingsV0915PokemonLechonk
	| GenderSettingsV0915PokemonLechonkNormal
	| GenderSettingsV0916PokemonOinkologne
	| GenderSettingsV0916PokemonOinkologneFemale
	| GenderSettingsV0916PokemonOinkologneNormal
	| GenderSettingsV0917PokemonTarountula
	| GenderSettingsV0917PokemonTarountulaNormal
	| GenderSettingsV0918PokemonSpidops
	| GenderSettingsV0918PokemonSpidopsNormal
	| GenderSettingsV0919PokemonNymble
	| GenderSettingsV0919PokemonNymbleNormal
	| GenderSettingsV0920PokemonLokix
	| GenderSettingsV0920PokemonLokixNormal
	| GenderSettingsV0921PokemonPawmi
	| GenderSettingsV0921PokemonPawmiNormal
	| GenderSettingsV0922PokemonPawmo
	| GenderSettingsV0922PokemonPawmoNormal
	| GenderSettingsV0923PokemonPawmot
	| GenderSettingsV0923PokemonPawmotNormal
	| GenderSettingsV0924PokemonTandemaus
	| GenderSettingsV0924PokemonTandemausNormal
	| GenderSettingsV0925PokemonMaushold
	| GenderSettingsV0925PokemonMausholdFamilyOfFour
	| GenderSettingsV0925PokemonMausholdFamilyOfThree
	| GenderSettingsV0926PokemonFidough
	| GenderSettingsV0926PokemonFidoughNormal
	| GenderSettingsV0927PokemonDachsbun
	| GenderSettingsV0927PokemonDachsbunNormal
	| GenderSettingsV0928PokemonSmoliv
	| GenderSettingsV0928PokemonSmolivNormal
	| GenderSettingsV0929PokemonDolliv
	| GenderSettingsV0929PokemonDollivNormal
	| GenderSettingsV0930PokemonArboliva
	| GenderSettingsV0930PokemonArbolivaNormal
	| GenderSettingsV0931PokemonSquawkabilly
	| GenderSettingsV0931PokemonSquawkabillyBlue
	| GenderSettingsV0931PokemonSquawkabillyGreen
	| GenderSettingsV0931PokemonSquawkabillyWhite
	| GenderSettingsV0931PokemonSquawkabillyYellow
	| GenderSettingsV0932PokemonNacli
	| GenderSettingsV0932PokemonNacliNormal
	| GenderSettingsV0933PokemonNaclstack
	| GenderSettingsV0933PokemonNaclstackNormal
	| GenderSettingsV0934PokemonGarganacl
	| GenderSettingsV0934PokemonGarganaclNormal
	| GenderSettingsV0935PokemonCharcadet
	| GenderSettingsV0935PokemonCharcadetNormal
	| GenderSettingsV0936PokemonArmarouge
	| GenderSettingsV0936PokemonArmarougeNormal
	| GenderSettingsV0937PokemonCeruledge
	| GenderSettingsV0937PokemonCeruledgeNormal
	| GenderSettingsV0938PokemonTadbulb
	| GenderSettingsV0938PokemonTadbulbNormal
	| GenderSettingsV0939PokemonBellibolt
	| GenderSettingsV0939PokemonBelliboltNormal
	| GenderSettingsV0940PokemonWattrel
	| GenderSettingsV0940PokemonWattrelNormal
	| GenderSettingsV0941PokemonKilowattrel
	| GenderSettingsV0941PokemonKilowattrelNormal
	| GenderSettingsV0942PokemonMaschiff
	| GenderSettingsV0942PokemonMaschiffNormal
	| GenderSettingsV0943PokemonMabosstiff
	| GenderSettingsV0943PokemonMabosstiffNormal
	| GenderSettingsV0944PokemonShroodle
	| GenderSettingsV0944PokemonShroodleNormal
	| GenderSettingsV0945PokemonGrafaiai
	| GenderSettingsV0945PokemonGrafaiaiNormal
	| GenderSettingsV0946PokemonBramblin
	| GenderSettingsV0946PokemonBramblinNormal
	| GenderSettingsV0947PokemonBrambleghast
	| GenderSettingsV0947PokemonBrambleghastNormal
	| GenderSettingsV0948PokemonToedscool
	| GenderSettingsV0948PokemonToedscoolNormal
	| GenderSettingsV0949PokemonToedscruel
	| GenderSettingsV0949PokemonToedscruelNormal
	| GenderSettingsV0950PokemonKlawf
	| GenderSettingsV0950PokemonKlawfNormal
	| GenderSettingsV0951PokemonCapsakid
	| GenderSettingsV0951PokemonCapsakidNormal
	| GenderSettingsV0952PokemonScovillain
	| GenderSettingsV0952PokemonScovillainNormal
	| GenderSettingsV0953PokemonRellor
	| GenderSettingsV0953PokemonRellorNormal
	| GenderSettingsV0954PokemonRabsca
	| GenderSettingsV0954PokemonRabscaNormal
	| GenderSettingsV0955PokemonFlittle
	| GenderSettingsV0955PokemonFlittleNormal
	| GenderSettingsV0956PokemonEspathra
	| GenderSettingsV0956PokemonEspathraNormal
	| GenderSettingsV0957PokemonTinkatink
	| GenderSettingsV0957PokemonTinkatinkNormal
	| GenderSettingsV0958PokemonTinkatuff
	| GenderSettingsV0958PokemonTinkatuffNormal
	| GenderSettingsV0959PokemonTinkaton
	| GenderSettingsV0959PokemonTinkatonNormal
	| GenderSettingsV0960PokemonWiglett
	| GenderSettingsV0960PokemonWiglettNormal
	| GenderSettingsV0961PokemonWugtrio
	| GenderSettingsV0961PokemonWugtrioNormal
	| GenderSettingsV0962PokemonBombirdier
	| GenderSettingsV0962PokemonBombirdierNormal
	| GenderSettingsV0963PokemonFinizen
	| GenderSettingsV0963PokemonFinizenNormal
	| GenderSettingsV0964PokemonPalafin
	| GenderSettingsV0964PokemonPalafinHero
	| GenderSettingsV0964PokemonPalafinZero
	| GenderSettingsV0965PokemonVaroom
	| GenderSettingsV0965PokemonVaroomNormal
	| GenderSettingsV0966PokemonRevavroom
	| GenderSettingsV0966PokemonRevavroomNormal
	| GenderSettingsV0967PokemonCyclizar
	| GenderSettingsV0967PokemonCyclizarNormal
	| GenderSettingsV0968PokemonOrthworm
	| GenderSettingsV0968PokemonOrthwormNormal
	| GenderSettingsV0969PokemonGlimmet
	| GenderSettingsV0969PokemonGlimmetNormal
	| GenderSettingsV0970PokemonGlimmora
	| GenderSettingsV0970PokemonGlimmoraNormal
	| GenderSettingsV0971PokemonGreavard
	| GenderSettingsV0971PokemonGreavardNormal
	| GenderSettingsV0972PokemonHoundstone
	| GenderSettingsV0972PokemonHoundstoneNormal
	| GenderSettingsV0973PokemonFlamigo
	| GenderSettingsV0973PokemonFlamigoNormal
	| GenderSettingsV0974PokemonCetoddle
	| GenderSettingsV0974PokemonCetoddleNormal
	| GenderSettingsV0975PokemonCetitan
	| GenderSettingsV0975PokemonCetitanNormal
	| GenderSettingsV0976PokemonVeluza
	| GenderSettingsV0976PokemonVeluzaNormal
	| GenderSettingsV0977PokemonDondozo
	| GenderSettingsV0977PokemonDondozoNormal
	| GenderSettingsV0978PokemonTatsugiri
	| GenderSettingsV0978PokemonTatsugiriCurly
	| GenderSettingsV0978PokemonTatsugiriDroopy
	| GenderSettingsV0978PokemonTatsugiriStretchy
	| GenderSettingsV0979PokemonAnnihilape
	| GenderSettingsV0979PokemonAnnihilapeNormal
	| GenderSettingsV0980PokemonClodsire
	| GenderSettingsV0980PokemonClodsireNormal
	| GenderSettingsV0981PokemonFarigiraf
	| GenderSettingsV0981PokemonFarigirafNormal
	| GenderSettingsV0982PokemonDudunsparce
	| GenderSettingsV0982PokemonDudunsparceThree
	| GenderSettingsV0982PokemonDudunsparceTwo
	| GenderSettingsV0983PokemonKingambit
	| GenderSettingsV0983PokemonKingambitNormal
	| GenderSettingsV0984PokemonGreattusk
	| GenderSettingsV0984PokemonGreattuskNormal
	| GenderSettingsV0985PokemonScreamtail
	| GenderSettingsV0985PokemonScreamtailNormal
	| GenderSettingsV0986PokemonBrutebonnet
	| GenderSettingsV0986PokemonBrutebonnetNormal
	| GenderSettingsV0987PokemonFluttermane
	| GenderSettingsV0987PokemonFluttermaneNormal
	| GenderSettingsV0988PokemonSlitherwing
	| GenderSettingsV0988PokemonSlitherwingNormal
	| GenderSettingsV0989PokemonSandyshocks
	| GenderSettingsV0989PokemonSandyshocksNormal
	| GenderSettingsV0990PokemonIrontreads
	| GenderSettingsV0990PokemonIrontreadsNormal
	| GenderSettingsV0991PokemonIronbundle
	| GenderSettingsV0991PokemonIronbundleNormal
	| GenderSettingsV0992PokemonIronhands
	| GenderSettingsV0992PokemonIronhandsNormal
	| GenderSettingsV0993PokemonIronjugulis
	| GenderSettingsV0993PokemonIronjugulisNormal
	| GenderSettingsV0994PokemonIronmoth
	| GenderSettingsV0994PokemonIronmothNormal
	| GenderSettingsV0995PokemonIronthorns
	| GenderSettingsV0995PokemonIronthornsNormal
	| GenderSettingsV0996PokemonFrigibax
	| GenderSettingsV0996PokemonFrigibaxNormal
	| GenderSettingsV0997PokemonArctibax
	| GenderSettingsV0997PokemonArctibaxNormal
	| GenderSettingsV0998PokemonBaxcalibur
	| GenderSettingsV0998PokemonBaxcaliburNormal
	| GenderSettingsV0999PokemonGimmighoul
	| GenderSettingsV0999PokemonGimmighoulCoinA1
	| GenderSettingsV0999PokemonGimmighoulNormal
	| GenderSettingsV1000PokemonGholdengo
	| GenderSettingsV1000PokemonGholdengoNormal
	| GenderSettingsV1001PokemonWochien
	| GenderSettingsV1001PokemonWochienNormal
	| GenderSettingsV1002PokemonChienpao
	| GenderSettingsV1002PokemonChienpaoNormal
	| GenderSettingsV1003PokemonTinglu
	| GenderSettingsV1003PokemonTingluNormal
	| GenderSettingsV1004PokemonChiyu
	| GenderSettingsV1004PokemonChiyuNormal
	| GenderSettingsV1005PokemonRoaringmoon
	| GenderSettingsV1005PokemonRoaringmoonNormal
	| GenderSettingsV1006PokemonIronvaliant
	| GenderSettingsV1006PokemonIronvaliantNormal
	| GenderSettingsV1007PokemonKoraidon
	| GenderSettingsV1007PokemonKoraidonApex
	| GenderSettingsV1008PokemonMiraidon
	| GenderSettingsV1008PokemonMiraidonUltimate
	| GenderSettingsV1009PokemonWalkingwake
	| GenderSettingsV1009PokemonWalkingwakeNormal
	| GenderSettingsV1010PokemonIronleaves
	| GenderSettingsV1010PokemonIronleavesNormal
	| GenderSettingsV1011PokemonDipplin
	| GenderSettingsV1011PokemonDipplinNormal
	| GenderSettingsV1012PokemonPoltchageist
	| GenderSettingsV1012PokemonPoltchageistArtisan
	| GenderSettingsV1012PokemonPoltchageistCounterfeit
	| GenderSettingsV1013PokemonSinistcha
	| GenderSettingsV1013PokemonSinistchaMasterpiece
	| GenderSettingsV1013PokemonSinistchaUnremarkable
	| GenderSettingsV1014PokemonOkidogi
	| GenderSettingsV1014PokemonOkidogiNormal
	| GenderSettingsV1015PokemonMunkidori
	| GenderSettingsV1015PokemonMunkidoriNormal
	| GenderSettingsV1016PokemonFezandipiti
	| GenderSettingsV1016PokemonFezandipitiNormal
	| GenderSettingsV1017PokemonOgerpon
	| GenderSettingsV1018PokemonArchaludon
	| GenderSettingsV1018PokemonArchaludonNormal
	| GenderSettingsV1019PokemonHydrapple
	| GenderSettingsV1019PokemonHydrappleNormal
	| GenderSettingsV1020PokemonGougingfire
	| GenderSettingsV1020PokemonGougingfireNormal
	| GenderSettingsV1021PokemonRagingbolt
	| GenderSettingsV1021PokemonRagingboltNormal
	| GenderSettingsV1022PokemonIronboulder
	| GenderSettingsV1022PokemonIronboulderNormal
	| GenderSettingsV1023PokemonIroncrown
	| GenderSettingsV1023PokemonIroncrownNormal
	| GenderSettingsV1024PokemonTerapagos
	| GenderSettingsV1024PokemonTerapagosNormal
	| GenderSettingsV1025PokemonPecharunt
	| GenderSettingsV1025PokemonPecharuntNormal;

export type GenderSettingsTemplateID = GenderSettingsMasterfileEntry["templateId"];

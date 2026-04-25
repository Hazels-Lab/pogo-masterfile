export interface FormSettings<TemplateID extends string = string, TData extends FormSettingsData = FormSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		formSettings: TData;
	};
}

export interface FormSettingsData {
	forms?: Array<{
		assetBundleSuffix?: string;
		assetBundleValue?: number;
		form: number | string;
		isCostume?: boolean;
		sillouetteObfuscationGroup?: {
			groupNumber: number;
			overrideDisplayForm: string;
		};
	}>;
	pokemon?: string;
}

export type FormSettingsV0001PokemonBulbasaur = FormSettings<
	"FORMS_V0001_POKEMON_BULBASAUR",
	{
		forms: [
			{
				form: "BULBASAUR_NORMAL";
			},
			{
				assetBundleSuffix: "pm0001_00_pgo_fall2019";
				form: "BULBASAUR_FALL_2019";
				isCostume: true;
			},
		];
		pokemon: "BULBASAUR";
	}
>;
export type FormSettingsV0002PokemonIvysaur = FormSettings<
	"FORMS_V0002_POKEMON_IVYSAUR",
	{
		forms: [
			{
				form: "IVYSAUR_NORMAL";
			},
		];
		pokemon: "IVYSAUR";
	}
>;
export type FormSettingsV0003PokemonVenusaur = FormSettings<
	"FORMS_V0003_POKEMON_VENUSAUR",
	{
		forms: [
			{
				form: "VENUSAUR_NORMAL";
			},
			{
				assetBundleSuffix: "pm0003_00_pgo_copy2019";
				form: "VENUSAUR_COPY_2019";
			},
		];
		pokemon: "VENUSAUR";
	}
>;
export type FormSettingsV0004PokemonCharmander = FormSettings<
	"FORMS_V0004_POKEMON_CHARMANDER",
	{
		forms: [
			{
				form: "CHARMANDER_NORMAL";
			},
			{
				assetBundleSuffix: "pm0004_00_pgo_fall2019";
				form: "CHARMANDER_FALL_2019";
				isCostume: true;
			},
		];
		pokemon: "CHARMANDER";
	}
>;
export type FormSettingsV0005PokemonCharmeleon = FormSettings<
	"FORMS_V0005_POKEMON_CHARMELEON",
	{
		forms: [
			{
				form: "CHARMELEON_NORMAL";
			},
		];
		pokemon: "CHARMELEON";
	}
>;
export type FormSettingsV0006PokemonCharizard = FormSettings<
	"FORMS_V0006_POKEMON_CHARIZARD",
	{
		forms: [
			{
				form: "CHARIZARD_NORMAL";
			},
			{
				assetBundleSuffix: "pm0006_00_pgo_copy2019";
				form: "CHARIZARD_COPY_2019";
			},
		];
		pokemon: "CHARIZARD";
	}
>;
export type FormSettingsV0007PokemonSquirtle = FormSettings<
	"FORMS_V0007_POKEMON_SQUIRTLE",
	{
		forms: [
			{
				form: "SQUIRTLE_NORMAL";
			},
			{
				assetBundleSuffix: "pm0007_00_pgo_fall2019";
				form: "SQUIRTLE_FALL_2019";
				isCostume: true;
			},
		];
		pokemon: "SQUIRTLE";
	}
>;
export type FormSettingsV0008PokemonWartortle = FormSettings<
	"FORMS_V0008_POKEMON_WARTORTLE",
	{
		forms: [
			{
				form: "WARTORTLE_NORMAL";
			},
		];
		pokemon: "WARTORTLE";
	}
>;
export type FormSettingsV0009PokemonBlastoise = FormSettings<
	"FORMS_V0009_POKEMON_BLASTOISE",
	{
		forms: [
			{
				form: "BLASTOISE_NORMAL";
			},
			{
				assetBundleSuffix: "pm0009_00_pgo_copy2019";
				form: "BLASTOISE_COPY_2019";
			},
		];
		pokemon: "BLASTOISE";
	}
>;
export type FormSettingsV0010PokemonCaterpie = FormSettings<
	"FORMS_V0010_POKEMON_CATERPIE",
	{
		forms: [
			{
				form: "CATERPIE_NORMAL";
			},
			{
				form: 3346;
				isCostume: true;
			},
		];
		pokemon: "CATERPIE";
	}
>;
export type FormSettingsV0011PokemonMetapod = FormSettings<
	"FORMS_V0011_POKEMON_METAPOD",
	{
		forms: [
			{
				form: "METAPOD_NORMAL";
			},
		];
		pokemon: "METAPOD";
	}
>;
export type FormSettingsV0012PokemonButterfree = FormSettings<
	"FORMS_V0012_POKEMON_BUTTERFREE",
	{
		forms: [
			{
				form: "BUTTERFREE_NORMAL";
			},
		];
		pokemon: "BUTTERFREE";
	}
>;
export type FormSettingsV0013PokemonWeedle = FormSettings<
	"FORMS_V0013_POKEMON_WEEDLE",
	{
		forms: [
			{
				form: "WEEDLE_NORMAL";
			},
		];
		pokemon: "WEEDLE";
	}
>;
export type FormSettingsV0014PokemonKakuna = FormSettings<
	"FORMS_V0014_POKEMON_KAKUNA",
	{
		forms: [
			{
				form: "KAKUNA_NORMAL";
			},
		];
		pokemon: "KAKUNA";
	}
>;
export type FormSettingsV0015PokemonBeedrill = FormSettings<
	"FORMS_V0015_POKEMON_BEEDRILL",
	{
		forms: [
			{
				form: "BEEDRILL_NORMAL";
			},
		];
		pokemon: "BEEDRILL";
	}
>;
export type FormSettingsV0016PokemonPidgey = FormSettings<
	"FORMS_V0016_POKEMON_PIDGEY",
	{
		forms: [
			{
				form: "PIDGEY_NORMAL";
			},
		];
		pokemon: "PIDGEY";
	}
>;
export type FormSettingsV0017PokemonPidgeotto = FormSettings<
	"FORMS_V0017_POKEMON_PIDGEOTTO",
	{
		forms: [
			{
				form: "PIDGEOTTO_NORMAL";
			},
		];
		pokemon: "PIDGEOTTO";
	}
>;
export type FormSettingsV0018PokemonPidgeot = FormSettings<
	"FORMS_V0018_POKEMON_PIDGEOT",
	{
		forms: [
			{
				form: "PIDGEOT_NORMAL";
			},
		];
		pokemon: "PIDGEOT";
	}
>;
export type FormSettingsV0019PokemonRattata = FormSettings<
	"FORMS_V0019_POKEMON_RATTATA",
	{
		forms: [
			{
				form: "RATTATA_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "RATTATA_ALOLA";
			},
		];
		pokemon: "RATTATA";
	}
>;
export type FormSettingsV0020PokemonRaticate = FormSettings<
	"FORMS_V0020_POKEMON_RATICATE",
	{
		forms: [
			{
				form: "RATICATE_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "RATICATE_ALOLA";
			},
		];
		pokemon: "RATICATE";
	}
>;
export type FormSettingsV0021PokemonSpearow = FormSettings<
	"FORMS_V0021_POKEMON_SPEAROW",
	{
		forms: [
			{
				form: "SPEAROW_NORMAL";
			},
		];
		pokemon: "SPEAROW";
	}
>;
export type FormSettingsV0022PokemonFearow = FormSettings<
	"FORMS_V0022_POKEMON_FEAROW",
	{
		forms: [
			{
				form: "FEAROW_NORMAL";
			},
		];
		pokemon: "FEAROW";
	}
>;
export type FormSettingsV0023PokemonEkans = FormSettings<
	"FORMS_V0023_POKEMON_EKANS",
	{
		forms: [
			{
				form: "EKANS_NORMAL";
			},
		];
		pokemon: "EKANS";
	}
>;
export type FormSettingsV0024PokemonArbok = FormSettings<
	"FORMS_V0024_POKEMON_ARBOK",
	{
		forms: [
			{
				form: "ARBOK_NORMAL";
			},
		];
		pokemon: "ARBOK";
	}
>;
export type FormSettingsV0025PokemonPikachu = FormSettings<
	"FORMS_V0025_POKEMON_PIKACHU",
	{
		forms: [
			{
				form: "PIKACHU_NORMAL";
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_fall2019";
				form: "PIKACHU_FALL_2019";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_copy2019";
				form: "PIKACHU_COPY_2019";
			},
			{
				assetBundleValue: 16;
				form: "PIKACHU_VS_2019";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_4thanniversary";
				form: "PIKACHU_COSTUME_2020";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_movie2020";
				form: "PIKACHU_ADVENTURE_HAT_2020";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_winter2020";
				form: "PIKACHU_WINTER_2020";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pikachu_pgo_kariyushi";
				form: "PIKACHU_KARIYUSHI";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_popstar";
				form: "PIKACHU_POP_STAR";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_rockstar";
				form: "PIKACHU_ROCK_STAR";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_5thanniversary";
				form: "PIKACHU_FLYING_5TH_ANNIV";
				isCostume: true;
			},
			{
				form: "PIKACHU_FLYING_OKINAWA";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2022";
				isCostume: true;
			},
			{
				form: "PIKACHU_WCS_2022";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_tshirt";
				form: "PIKACHU_TSHIRT_01";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_tshirt";
				form: "PIKACHU_TSHIRT_02";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_flying";
				form: "PIKACHU_FLYING_01";
				isCostume: true;
			},
			{
				assetBundleSuffix: "pm0025_00_pgo_flying";
				form: "PIKACHU_FLYING_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_SUMMER_2023_A";
				isCostume: true;
			},
			{
				form: "PIKACHU_SUMMER_2023_B";
				isCostume: true;
			},
			{
				form: "PIKACHU_SUMMER_2023_C";
				isCostume: true;
			},
			{
				form: "PIKACHU_SUMMER_2023_D";
				isCostume: true;
			},
			{
				form: "PIKACHU_SUMMER_2023_E";
				isCostume: true;
			},
			{
				form: "PIKACHU_JEJU";
				isCostume: true;
			},
			{
				form: "PIKACHU_FLYING_03";
				isCostume: true;
			},
			{
				form: "PIKACHU_WCS_2023";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2024_A";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2024_A_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2024_B";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2024_B_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_TSHIRT_03";
				isCostume: true;
			},
			{
				form: "PIKACHU_FLYING_04";
				isCostume: true;
			},
			{
				form: "PIKACHU_HORIZONS";
				isCostume: true;
			},
			{
				form: "PIKACHU_DOCTOR";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2024_STIARA";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2024_MTIARA";
				isCostume: true;
			},
			{
				form: "PIKACHU_WCS_2024";
				isCostume: true;
			},
			{
				form: "PIKACHU_DIWALI_2024";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2025_A";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2025_A_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2025_B";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2025_B_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_KURTA";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_GOGGLES_RED";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_GOGGLES_BLUE";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_GOGGLES_YELLOW";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_MONOCLE_RED";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_MONOCLE_BLUE";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOFEST_2025_MONOCLE_YELLOW";
				isCostume: true;
			},
			{
				form: "PIKACHU_WCS_2025";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_A";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_A_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_B";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_B_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_C";
				isCostume: true;
			},
			{
				form: "PIKACHU_GOTOUR_2026_C_02";
				isCostume: true;
			},
			{
				form: "PIKACHU_BB_2026";
				isCostume: true;
			},
			{
				form: 3344;
				isCostume: true;
			},
			{
				form: 3343;
				isCostume: true;
			},
			{
				form: 3345;
				isCostume: true;
			},
		];
		pokemon: "PIKACHU";
	}
>;
export type FormSettingsV0026PokemonRaichu = FormSettings<
	"FORMS_V0026_POKEMON_RAICHU",
	{
		forms: [
			{
				form: "RAICHU_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "RAICHU_ALOLA";
			},
		];
		pokemon: "RAICHU";
	}
>;
export type FormSettingsV0027PokemonSandshrew = FormSettings<
	"FORMS_V0027_POKEMON_SANDSHREW",
	{
		forms: [
			{
				form: "SANDSHREW_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "SANDSHREW_ALOLA";
			},
		];
		pokemon: "SANDSHREW";
	}
>;
export type FormSettingsV0028PokemonSandslash = FormSettings<
	"FORMS_V0028_POKEMON_SANDSLASH",
	{
		forms: [
			{
				form: "SANDSLASH_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "SANDSLASH_ALOLA";
			},
		];
		pokemon: "SANDSLASH";
	}
>;
export type FormSettingsV0029PokemonNidoran = FormSettings<
	"FORMS_V0029_POKEMON_NIDORAN",
	{
		forms: [
			{
				form: "NIDORAN_NORMAL";
			},
		];
		pokemon: "NIDORAN_FEMALE";
	}
>;
export type FormSettingsV0030PokemonNidorina = FormSettings<
	"FORMS_V0030_POKEMON_NIDORINA",
	{
		forms: [
			{
				form: "NIDORINA_NORMAL";
			},
		];
		pokemon: "NIDORINA";
	}
>;
export type FormSettingsV0031PokemonNidoqueen = FormSettings<
	"FORMS_V0031_POKEMON_NIDOQUEEN",
	{
		forms: [
			{
				form: "NIDOQUEEN_NORMAL";
			},
		];
		pokemon: "NIDOQUEEN";
	}
>;
export type FormSettingsV0032PokemonNidoran = FormSettings<
	"FORMS_V0032_POKEMON_NIDORAN",
	{
		forms: [
			{
				form: "NIDORAN_NORMAL";
			},
		];
		pokemon: "NIDORAN_MALE";
	}
>;
export type FormSettingsV0033PokemonNidorino = FormSettings<
	"FORMS_V0033_POKEMON_NIDORINO",
	{
		forms: [
			{
				form: "NIDORINO_NORMAL";
			},
		];
		pokemon: "NIDORINO";
	}
>;
export type FormSettingsV0034PokemonNidoking = FormSettings<
	"FORMS_V0034_POKEMON_NIDOKING",
	{
		forms: [
			{
				form: "NIDOKING_NORMAL";
			},
		];
		pokemon: "NIDOKING";
	}
>;
export type FormSettingsV0035PokemonClefairy = FormSettings<
	"FORMS_V0035_POKEMON_CLEFAIRY",
	{
		forms: [
			{
				form: "CLEFAIRY_NORMAL";
			},
		];
		pokemon: "CLEFAIRY";
	}
>;
export type FormSettingsV0036PokemonClefable = FormSettings<
	"FORMS_V0036_POKEMON_CLEFABLE",
	{
		forms: [
			{
				form: "CLEFABLE_NORMAL";
			},
		];
		pokemon: "CLEFABLE";
	}
>;
export type FormSettingsV0037PokemonVulpix = FormSettings<
	"FORMS_V0037_POKEMON_VULPIX",
	{
		forms: [
			{
				form: "VULPIX_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "VULPIX_ALOLA";
			},
		];
		pokemon: "VULPIX";
	}
>;
export type FormSettingsV0038PokemonNinetales = FormSettings<
	"FORMS_V0038_POKEMON_NINETALES",
	{
		forms: [
			{
				form: "NINETALES_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "NINETALES_ALOLA";
			},
		];
		pokemon: "NINETALES";
	}
>;
export type FormSettingsV0039PokemonJigglypuff = FormSettings<
	"FORMS_V0039_POKEMON_JIGGLYPUFF",
	{
		forms: [
			{
				form: "JIGGLYPUFF_NORMAL";
			},
		];
		pokemon: "JIGGLYPUFF";
	}
>;
export type FormSettingsV0040PokemonWigglytuff = FormSettings<
	"FORMS_V0040_POKEMON_WIGGLYTUFF",
	{
		forms: [
			{
				form: "WIGGLYTUFF_NORMAL";
			},
		];
		pokemon: "WIGGLYTUFF";
	}
>;
export type FormSettingsV0041PokemonZubat = FormSettings<
	"FORMS_V0041_POKEMON_ZUBAT",
	{
		forms: [
			{
				form: "ZUBAT_NORMAL";
			},
		];
		pokemon: "ZUBAT";
	}
>;
export type FormSettingsV0042PokemonGolbat = FormSettings<
	"FORMS_V0042_POKEMON_GOLBAT",
	{
		forms: [
			{
				form: "GOLBAT_NORMAL";
			},
		];
		pokemon: "GOLBAT";
	}
>;
export type FormSettingsV0043PokemonOddish = FormSettings<
	"FORMS_V0043_POKEMON_ODDISH",
	{
		forms: [
			{
				form: "ODDISH_NORMAL";
			},
		];
		pokemon: "ODDISH";
	}
>;
export type FormSettingsV0044PokemonGloom = FormSettings<
	"FORMS_V0044_POKEMON_GLOOM",
	{
		forms: [
			{
				form: "GLOOM_NORMAL";
			},
		];
		pokemon: "GLOOM";
	}
>;
export type FormSettingsV0045PokemonVileplume = FormSettings<
	"FORMS_V0045_POKEMON_VILEPLUME",
	{
		forms: [
			{
				form: "VILEPLUME_NORMAL";
			},
		];
		pokemon: "VILEPLUME";
	}
>;
export type FormSettingsV0046PokemonParas = FormSettings<
	"FORMS_V0046_POKEMON_PARAS",
	{
		forms: [
			{
				form: "PARAS_NORMAL";
			},
		];
		pokemon: "PARAS";
	}
>;
export type FormSettingsV0047PokemonParasect = FormSettings<
	"FORMS_V0047_POKEMON_PARASECT",
	{
		forms: [
			{
				form: "PARASECT_NORMAL";
			},
		];
		pokemon: "PARASECT";
	}
>;
export type FormSettingsV0048PokemonVenonat = FormSettings<
	"FORMS_V0048_POKEMON_VENONAT",
	{
		forms: [
			{
				form: "VENONAT_NORMAL";
			},
		];
		pokemon: "VENONAT";
	}
>;
export type FormSettingsV0049PokemonVenomoth = FormSettings<
	"FORMS_V0049_POKEMON_VENOMOTH",
	{
		forms: [
			{
				form: "VENOMOTH_NORMAL";
			},
		];
		pokemon: "VENOMOTH";
	}
>;
export type FormSettingsV0050PokemonDiglett = FormSettings<
	"FORMS_V0050_POKEMON_DIGLETT",
	{
		forms: [
			{
				form: "DIGLETT_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "DIGLETT_ALOLA";
			},
		];
		pokemon: "DIGLETT";
	}
>;
export type FormSettingsV0051PokemonDugtrio = FormSettings<
	"FORMS_V0051_POKEMON_DUGTRIO",
	{
		forms: [
			{
				form: "DUGTRIO_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "DUGTRIO_ALOLA";
			},
		];
		pokemon: "DUGTRIO";
	}
>;
export type FormSettingsV0052PokemonMeowth = FormSettings<
	"FORMS_V0052_POKEMON_MEOWTH",
	{
		forms: [
			{
				form: "MEOWTH_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "MEOWTH_ALOLA";
			},
			{
				assetBundleValue: 31;
				form: "MEOWTH_GALARIAN";
			},
		];
		pokemon: "MEOWTH";
	}
>;
export type FormSettingsV0053PokemonPersian = FormSettings<
	"FORMS_V0053_POKEMON_PERSIAN",
	{
		forms: [
			{
				form: "PERSIAN_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "PERSIAN_ALOLA";
			},
		];
		pokemon: "PERSIAN";
	}
>;
export type FormSettingsV0054PokemonPsyduck = FormSettings<
	"FORMS_V0054_POKEMON_PSYDUCK",
	{
		forms: [
			{
				form: "PSYDUCK_NORMAL";
			},
			{
				form: "PSYDUCK_SWIM_2025";
			},
		];
		pokemon: "PSYDUCK";
	}
>;
export type FormSettingsV0055PokemonGolduck = FormSettings<
	"FORMS_V0055_POKEMON_GOLDUCK",
	{
		forms: [
			{
				form: "GOLDUCK_NORMAL";
			},
		];
		pokemon: "GOLDUCK";
	}
>;
export type FormSettingsV0056PokemonMankey = FormSettings<
	"FORMS_V0056_POKEMON_MANKEY",
	{
		forms: [
			{
				form: "MANKEY_NORMAL";
			},
		];
		pokemon: "MANKEY";
	}
>;
export type FormSettingsV0057PokemonPrimeape = FormSettings<
	"FORMS_V0057_POKEMON_PRIMEAPE",
	{
		forms: [
			{
				form: "PRIMEAPE_NORMAL";
			},
		];
		pokemon: "PRIMEAPE";
	}
>;
export type FormSettingsV0058PokemonGrowlithe = FormSettings<
	"FORMS_V0058_POKEMON_GROWLITHE",
	{
		forms: [
			{
				form: "GROWLITHE_NORMAL";
			},
			{
				form: "GROWLITHE_HISUIAN";
			},
		];
		pokemon: "GROWLITHE";
	}
>;
export type FormSettingsV0059PokemonArcanine = FormSettings<
	"FORMS_V0059_POKEMON_ARCANINE",
	{
		forms: [
			{
				form: "ARCANINE_NORMAL";
			},
			{
				form: "ARCANINE_HISUIAN";
			},
		];
		pokemon: "ARCANINE";
	}
>;
export type FormSettingsV0060PokemonPoliwag = FormSettings<
	"FORMS_V0060_POKEMON_POLIWAG",
	{
		forms: [
			{
				form: "POLIWAG_NORMAL";
			},
		];
		pokemon: "POLIWAG";
	}
>;
export type FormSettingsV0061PokemonPoliwhirl = FormSettings<
	"FORMS_V0061_POKEMON_POLIWHIRL",
	{
		forms: [
			{
				form: "POLIWHIRL_NORMAL";
			},
		];
		pokemon: "POLIWHIRL";
	}
>;
export type FormSettingsV0062PokemonPoliwrath = FormSettings<
	"FORMS_V0062_POKEMON_POLIWRATH",
	{
		forms: [
			{
				form: "POLIWRATH_NORMAL";
			},
		];
		pokemon: "POLIWRATH";
	}
>;
export type FormSettingsV0063PokemonAbra = FormSettings<
	"FORMS_V0063_POKEMON_ABRA",
	{
		forms: [
			{
				form: "ABRA_NORMAL";
			},
		];
		pokemon: "ABRA";
	}
>;
export type FormSettingsV0064PokemonKadabra = FormSettings<
	"FORMS_V0064_POKEMON_KADABRA",
	{
		forms: [
			{
				form: "KADABRA_NORMAL";
			},
		];
		pokemon: "KADABRA";
	}
>;
export type FormSettingsV0065PokemonAlakazam = FormSettings<
	"FORMS_V0065_POKEMON_ALAKAZAM",
	{
		forms: [
			{
				form: "ALAKAZAM_NORMAL";
			},
		];
		pokemon: "ALAKAZAM";
	}
>;
export type FormSettingsV0066PokemonMachop = FormSettings<
	"FORMS_V0066_POKEMON_MACHOP",
	{
		forms: [
			{
				form: "MACHOP_NORMAL";
			},
		];
		pokemon: "MACHOP";
	}
>;
export type FormSettingsV0067PokemonMachoke = FormSettings<
	"FORMS_V0067_POKEMON_MACHOKE",
	{
		forms: [
			{
				form: "MACHOKE_NORMAL";
			},
		];
		pokemon: "MACHOKE";
	}
>;
export type FormSettingsV0068PokemonMachamp = FormSettings<
	"FORMS_V0068_POKEMON_MACHAMP",
	{
		forms: [
			{
				form: "MACHAMP_NORMAL";
			},
		];
		pokemon: "MACHAMP";
	}
>;
export type FormSettingsV0069PokemonBellsprout = FormSettings<
	"FORMS_V0069_POKEMON_BELLSPROUT",
	{
		forms: [
			{
				form: "BELLSPROUT_NORMAL";
			},
		];
		pokemon: "BELLSPROUT";
	}
>;
export type FormSettingsV0070PokemonWeepinbell = FormSettings<
	"FORMS_V0070_POKEMON_WEEPINBELL",
	{
		forms: [
			{
				form: "WEEPINBELL_NORMAL";
			},
		];
		pokemon: "WEEPINBELL";
	}
>;
export type FormSettingsV0071PokemonVictreebel = FormSettings<
	"FORMS_V0071_POKEMON_VICTREEBEL",
	{
		forms: [
			{
				form: "VICTREEBEL_NORMAL";
			},
		];
		pokemon: "VICTREEBEL";
	}
>;
export type FormSettingsV0072PokemonTentacool = FormSettings<
	"FORMS_V0072_POKEMON_TENTACOOL",
	{
		forms: [
			{
				form: "TENTACOOL_NORMAL";
			},
		];
		pokemon: "TENTACOOL";
	}
>;
export type FormSettingsV0073PokemonTentacruel = FormSettings<
	"FORMS_V0073_POKEMON_TENTACRUEL",
	{
		forms: [
			{
				form: "TENTACRUEL_NORMAL";
			},
		];
		pokemon: "TENTACRUEL";
	}
>;
export type FormSettingsV0074PokemonGeodude = FormSettings<
	"FORMS_V0074_POKEMON_GEODUDE",
	{
		forms: [
			{
				form: "GEODUDE_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "GEODUDE_ALOLA";
			},
		];
		pokemon: "GEODUDE";
	}
>;
export type FormSettingsV0075PokemonGraveler = FormSettings<
	"FORMS_V0075_POKEMON_GRAVELER",
	{
		forms: [
			{
				form: "GRAVELER_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "GRAVELER_ALOLA";
			},
		];
		pokemon: "GRAVELER";
	}
>;
export type FormSettingsV0076PokemonGolem = FormSettings<
	"FORMS_V0076_POKEMON_GOLEM",
	{
		forms: [
			{
				form: "GOLEM_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "GOLEM_ALOLA";
			},
		];
		pokemon: "GOLEM";
	}
>;
export type FormSettingsV0077PokemonPonyta = FormSettings<
	"FORMS_V0077_POKEMON_PONYTA",
	{
		forms: [
			{
				form: "PONYTA_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "PONYTA_GALARIAN";
			},
		];
		pokemon: "PONYTA";
	}
>;
export type FormSettingsV0078PokemonRapidash = FormSettings<
	"FORMS_V0078_POKEMON_RAPIDASH",
	{
		forms: [
			{
				form: "RAPIDASH_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "RAPIDASH_GALARIAN";
			},
		];
		pokemon: "RAPIDASH";
	}
>;
export type FormSettingsV0079PokemonSlowpoke = FormSettings<
	"FORMS_V0079_POKEMON_SLOWPOKE",
	{
		forms: [
			{
				form: "SLOWPOKE_NORMAL";
			},
			{
				assetBundleSuffix: "pm0079_00_pgo_2020";
				form: "SLOWPOKE_2020";
				isCostume: true;
			},
			{
				assetBundleValue: 31;
				form: "SLOWPOKE_GALARIAN";
			},
		];
		pokemon: "SLOWPOKE";
	}
>;
export type FormSettingsV0080PokemonSlowbro = FormSettings<
	"FORMS_V0080_POKEMON_SLOWBRO",
	{
		forms: [
			{
				form: "SLOWBRO_NORMAL";
			},
			{
				assetBundleSuffix: "pm0080_00_pgo_2021";
				form: "SLOWBRO_2021";
				isCostume: true;
			},
			{
				assetBundleValue: 31;
				form: "SLOWBRO_GALARIAN";
			},
		];
		pokemon: "SLOWBRO";
	}
>;
export type FormSettingsV0081PokemonMagnemite = FormSettings<
	"FORMS_V0081_POKEMON_MAGNEMITE",
	{
		forms: [
			{
				form: "MAGNEMITE_NORMAL";
			},
		];
		pokemon: "MAGNEMITE";
	}
>;
export type FormSettingsV0082PokemonMagneton = FormSettings<
	"FORMS_V0082_POKEMON_MAGNETON",
	{
		forms: [
			{
				form: "MAGNETON_NORMAL";
			},
		];
		pokemon: "MAGNETON";
	}
>;
export type FormSettingsV0083PokemonFarfetchd = FormSettings<
	"FORMS_V0083_POKEMON_FARFETCHD",
	{
		forms: [
			{
				form: "FARFETCHD_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "FARFETCHD_GALARIAN";
			},
		];
		pokemon: "FARFETCHD";
	}
>;
export type FormSettingsV0084PokemonDoduo = FormSettings<
	"FORMS_V0084_POKEMON_DODUO",
	{
		forms: [
			{
				form: "DODUO_NORMAL";
			},
		];
		pokemon: "DODUO";
	}
>;
export type FormSettingsV0085PokemonDodrio = FormSettings<
	"FORMS_V0085_POKEMON_DODRIO",
	{
		forms: [
			{
				form: "DODRIO_NORMAL";
			},
		];
		pokemon: "DODRIO";
	}
>;
export type FormSettingsV0086PokemonSeel = FormSettings<
	"FORMS_V0086_POKEMON_SEEL",
	{
		forms: [
			{
				form: "SEEL_NORMAL";
			},
		];
		pokemon: "SEEL";
	}
>;
export type FormSettingsV0087PokemonDewgong = FormSettings<
	"FORMS_V0087_POKEMON_DEWGONG",
	{
		forms: [
			{
				form: "DEWGONG_NORMAL";
			},
		];
		pokemon: "DEWGONG";
	}
>;
export type FormSettingsV0088PokemonGrimer = FormSettings<
	"FORMS_V0088_POKEMON_GRIMER",
	{
		forms: [
			{
				form: "GRIMER_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "GRIMER_ALOLA";
			},
		];
		pokemon: "GRIMER";
	}
>;
export type FormSettingsV0089PokemonMuk = FormSettings<
	"FORMS_V0089_POKEMON_MUK",
	{
		forms: [
			{
				form: "MUK_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "MUK_ALOLA";
			},
		];
		pokemon: "MUK";
	}
>;
export type FormSettingsV0090PokemonShellder = FormSettings<
	"FORMS_V0090_POKEMON_SHELLDER",
	{
		forms: [
			{
				form: "SHELLDER_NORMAL";
			},
		];
		pokemon: "SHELLDER";
	}
>;
export type FormSettingsV0091PokemonCloyster = FormSettings<
	"FORMS_V0091_POKEMON_CLOYSTER",
	{
		forms: [
			{
				form: "CLOYSTER_NORMAL";
			},
		];
		pokemon: "CLOYSTER";
	}
>;
export type FormSettingsV0092PokemonGastly = FormSettings<
	"FORMS_V0092_POKEMON_GASTLY",
	{
		forms: [
			{
				form: "GASTLY_NORMAL";
			},
		];
		pokemon: "GASTLY";
	}
>;
export type FormSettingsV0093PokemonHaunter = FormSettings<
	"FORMS_V0093_POKEMON_HAUNTER",
	{
		forms: [
			{
				form: "HAUNTER_NORMAL";
			},
		];
		pokemon: "HAUNTER";
	}
>;
export type FormSettingsV0094PokemonGengar = FormSettings<
	"FORMS_V0094_POKEMON_GENGAR",
	{
		forms: [
			{
				form: "GENGAR_NORMAL";
			},
			{
				assetBundleValue: 26;
				form: "GENGAR_COSTUME_2020";
				isCostume: true;
			},
		];
		pokemon: "GENGAR";
	}
>;
export type FormSettingsV0095PokemonOnix = FormSettings<
	"FORMS_V0095_POKEMON_ONIX",
	{
		forms: [
			{
				form: "ONIX_NORMAL";
			},
		];
		pokemon: "ONIX";
	}
>;
export type FormSettingsV0096PokemonDrowzee = FormSettings<
	"FORMS_V0096_POKEMON_DROWZEE",
	{
		forms: [
			{
				form: "DROWZEE_NORMAL";
			},
		];
		pokemon: "DROWZEE";
	}
>;
export type FormSettingsV0097PokemonHypno = FormSettings<
	"FORMS_V0097_POKEMON_HYPNO",
	{
		forms: [
			{
				form: "HYPNO_NORMAL";
			},
		];
		pokemon: "HYPNO";
	}
>;
export type FormSettingsV0098PokemonKrabby = FormSettings<
	"FORMS_V0098_POKEMON_KRABBY",
	{
		forms: [
			{
				form: "KRABBY_NORMAL";
			},
		];
		pokemon: "KRABBY";
	}
>;
export type FormSettingsV0099PokemonKingler = FormSettings<
	"FORMS_V0099_POKEMON_KINGLER",
	{
		forms: [
			{
				form: "KINGLER_NORMAL";
			},
		];
		pokemon: "KINGLER";
	}
>;
export type FormSettingsV0100PokemonVoltorb = FormSettings<
	"FORMS_V0100_POKEMON_VOLTORB",
	{
		forms: [
			{
				form: "VOLTORB_NORMAL";
			},
			{
				form: "VOLTORB_HISUIAN";
			},
		];
		pokemon: "VOLTORB";
	}
>;
export type FormSettingsV0101PokemonElectrode = FormSettings<
	"FORMS_V0101_POKEMON_ELECTRODE",
	{
		forms: [
			{
				form: "ELECTRODE_NORMAL";
			},
			{
				form: "ELECTRODE_HISUIAN";
			},
		];
		pokemon: "ELECTRODE";
	}
>;
export type FormSettingsV0102PokemonExeggcute = FormSettings<
	"FORMS_V0102_POKEMON_EXEGGCUTE",
	{
		forms: [
			{
				form: "EXEGGCUTE_NORMAL";
			},
		];
		pokemon: "EXEGGCUTE";
	}
>;
export type FormSettingsV0103PokemonExeggutor = FormSettings<
	"FORMS_V0103_POKEMON_EXEGGUTOR",
	{
		forms: [
			{
				form: "EXEGGUTOR_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "EXEGGUTOR_ALOLA";
			},
		];
		pokemon: "EXEGGUTOR";
	}
>;
export type FormSettingsV0104PokemonCubone = FormSettings<
	"FORMS_V0104_POKEMON_CUBONE",
	{
		forms: [
			{
				form: "CUBONE_NORMAL";
			},
		];
		pokemon: "CUBONE";
	}
>;
export type FormSettingsV0105PokemonMarowak = FormSettings<
	"FORMS_V0105_POKEMON_MAROWAK",
	{
		forms: [
			{
				form: "MAROWAK_NORMAL";
			},
			{
				assetBundleValue: 61;
				form: "MAROWAK_ALOLA";
			},
		];
		pokemon: "MAROWAK";
	}
>;
export type FormSettingsV0106PokemonHitmonlee = FormSettings<
	"FORMS_V0106_POKEMON_HITMONLEE",
	{
		forms: [
			{
				form: "HITMONLEE_NORMAL";
			},
		];
		pokemon: "HITMONLEE";
	}
>;
export type FormSettingsV0107PokemonHitmonchan = FormSettings<
	"FORMS_V0107_POKEMON_HITMONCHAN",
	{
		forms: [
			{
				form: "HITMONCHAN_NORMAL";
			},
		];
		pokemon: "HITMONCHAN";
	}
>;
export type FormSettingsV0108PokemonLickitung = FormSettings<
	"FORMS_V0108_POKEMON_LICKITUNG",
	{
		forms: [
			{
				form: "LICKITUNG_NORMAL";
			},
		];
		pokemon: "LICKITUNG";
	}
>;
export type FormSettingsV0109PokemonKoffing = FormSettings<
	"FORMS_V0109_POKEMON_KOFFING",
	{
		forms: [
			{
				form: "KOFFING_NORMAL";
			},
		];
		pokemon: "KOFFING";
	}
>;
export type FormSettingsV0110PokemonWeezing = FormSettings<
	"FORMS_V0110_POKEMON_WEEZING",
	{
		forms: [
			{
				form: "WEEZING_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "WEEZING_GALARIAN";
			},
		];
		pokemon: "WEEZING";
	}
>;
export type FormSettingsV0111PokemonRhyhorn = FormSettings<
	"FORMS_V0111_POKEMON_RHYHORN",
	{
		forms: [
			{
				form: "RHYHORN_NORMAL";
			},
		];
		pokemon: "RHYHORN";
	}
>;
export type FormSettingsV0112PokemonRhydon = FormSettings<
	"FORMS_V0112_POKEMON_RHYDON",
	{
		forms: [
			{
				form: "RHYDON_NORMAL";
			},
		];
		pokemon: "RHYDON";
	}
>;
export type FormSettingsV0113PokemonChansey = FormSettings<
	"FORMS_V0113_POKEMON_CHANSEY",
	{
		forms: [
			{
				form: "CHANSEY_NORMAL";
			},
		];
		pokemon: "CHANSEY";
	}
>;
export type FormSettingsV0114PokemonTangela = FormSettings<
	"FORMS_V0114_POKEMON_TANGELA",
	{
		forms: [
			{
				form: "TANGELA_NORMAL";
			},
		];
		pokemon: "TANGELA";
	}
>;
export type FormSettingsV0115PokemonKangaskhan = FormSettings<
	"FORMS_V0115_POKEMON_KANGASKHAN",
	{
		forms: [
			{
				form: "KANGASKHAN_NORMAL";
			},
		];
		pokemon: "KANGASKHAN";
	}
>;
export type FormSettingsV0116PokemonHorsea = FormSettings<
	"FORMS_V0116_POKEMON_HORSEA",
	{
		forms: [
			{
				form: "HORSEA_NORMAL";
			},
		];
		pokemon: "HORSEA";
	}
>;
export type FormSettingsV0117PokemonSeadra = FormSettings<
	"FORMS_V0117_POKEMON_SEADRA",
	{
		forms: [
			{
				form: "SEADRA_NORMAL";
			},
		];
		pokemon: "SEADRA";
	}
>;
export type FormSettingsV0118PokemonGoldeen = FormSettings<
	"FORMS_V0118_POKEMON_GOLDEEN",
	{
		forms: [
			{
				form: "GOLDEEN_NORMAL";
			},
		];
		pokemon: "GOLDEEN";
	}
>;
export type FormSettingsV0119PokemonSeaking = FormSettings<
	"FORMS_V0119_POKEMON_SEAKING",
	{
		forms: [
			{
				form: "SEAKING_NORMAL";
			},
		];
		pokemon: "SEAKING";
	}
>;
export type FormSettingsV0120PokemonStaryu = FormSettings<
	"FORMS_V0120_POKEMON_STARYU",
	{
		forms: [
			{
				form: "STARYU_NORMAL";
			},
		];
		pokemon: "STARYU";
	}
>;
export type FormSettingsV0121PokemonStarmie = FormSettings<
	"FORMS_V0121_POKEMON_STARMIE",
	{
		forms: [
			{
				form: "STARMIE_NORMAL";
			},
		];
		pokemon: "STARMIE";
	}
>;
export type FormSettingsV0122PokemonMrMime = FormSettings<
	"FORMS_V0122_POKEMON_MR_MIME",
	{
		forms: [
			{
				form: "MR_MIME_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "MR_MIME_GALARIAN";
			},
		];
		pokemon: "MR_MIME";
	}
>;
export type FormSettingsV0123PokemonScyther = FormSettings<
	"FORMS_V0123_POKEMON_SCYTHER",
	{
		forms: [
			{
				form: "SCYTHER_NORMAL";
			},
		];
		pokemon: "SCYTHER";
	}
>;
export type FormSettingsV0124PokemonJynx = FormSettings<
	"FORMS_V0124_POKEMON_JYNX",
	{
		forms: [
			{
				form: "JYNX_NORMAL";
			},
		];
		pokemon: "JYNX";
	}
>;
export type FormSettingsV0125PokemonElectabuzz = FormSettings<
	"FORMS_V0125_POKEMON_ELECTABUZZ",
	{
		forms: [
			{
				form: "ELECTABUZZ_NORMAL";
			},
		];
		pokemon: "ELECTABUZZ";
	}
>;
export type FormSettingsV0126PokemonMagmar = FormSettings<
	"FORMS_V0126_POKEMON_MAGMAR",
	{
		forms: [
			{
				form: "MAGMAR_NORMAL";
			},
		];
		pokemon: "MAGMAR";
	}
>;
export type FormSettingsV0127PokemonPinsir = FormSettings<
	"FORMS_V0127_POKEMON_PINSIR",
	{
		forms: [
			{
				form: "PINSIR_NORMAL";
			},
		];
		pokemon: "PINSIR";
	}
>;
export type FormSettingsV0128PokemonTauros = FormSettings<
	"FORMS_V0128_POKEMON_TAUROS",
	{
		forms: [
			{
				form: "TAUROS_NORMAL";
			},
			{
				form: "TAUROS_PALDEA_COMBAT";
			},
			{
				form: "TAUROS_PALDEA_BLAZE";
			},
			{
				form: "TAUROS_PALDEA_AQUA";
			},
		];
		pokemon: "TAUROS";
	}
>;
export type FormSettingsV0129PokemonMagikarp = FormSettings<
	"FORMS_V0129_POKEMON_MAGIKARP",
	{
		forms: [
			{
				form: "MAGIKARP_NORMAL";
			},
		];
		pokemon: "MAGIKARP";
	}
>;
export type FormSettingsV0130PokemonGyarados = FormSettings<
	"FORMS_V0130_POKEMON_GYARADOS",
	{
		forms: [
			{
				form: "GYARADOS_NORMAL";
			},
		];
		pokemon: "GYARADOS";
	}
>;
export type FormSettingsV0131PokemonLapras = FormSettings<
	"FORMS_V0131_POKEMON_LAPRAS",
	{
		forms: [
			{
				form: "LAPRAS_NORMAL";
			},
			{
				form: "LAPRAS_COSTUME_2020";
				isCostume: true;
			},
		];
		pokemon: "LAPRAS";
	}
>;
export type FormSettingsV0132PokemonDitto = FormSettings<
	"FORMS_V0132_POKEMON_DITTO",
	{
		forms: [
			{
				form: "DITTO_NORMAL";
			},
			{
				form: "DITTO_SPRING_2026_A";
				isCostume: true;
			},
			{
				form: "DITTO_SPRING_2026_B";
				isCostume: true;
			},
		];
		pokemon: "DITTO";
	}
>;
export type FormSettingsV0133PokemonEevee = FormSettings<
	"FORMS_V0133_POKEMON_EEVEE",
	{
		forms: [
			{
				form: "EEVEE_NORMAL";
			},
			{
				form: "EEVEE_GOFEST_2024_STIARA";
				isCostume: true;
			},
			{
				form: "EEVEE_GOFEST_2024_MTIARA";
				isCostume: true;
			},
		];
		pokemon: "EEVEE";
	}
>;
export type FormSettingsV0134PokemonVaporeon = FormSettings<
	"FORMS_V0134_POKEMON_VAPOREON",
	{
		forms: [
			{
				form: "VAPOREON_NORMAL";
			},
		];
		pokemon: "VAPOREON";
	}
>;
export type FormSettingsV0135PokemonJolteon = FormSettings<
	"FORMS_V0135_POKEMON_JOLTEON",
	{
		forms: [
			{
				form: "JOLTEON_NORMAL";
			},
		];
		pokemon: "JOLTEON";
	}
>;
export type FormSettingsV0136PokemonFlareon = FormSettings<
	"FORMS_V0136_POKEMON_FLAREON",
	{
		forms: [
			{
				form: "FLAREON_NORMAL";
			},
		];
		pokemon: "FLAREON";
	}
>;
export type FormSettingsV0137PokemonPorygon = FormSettings<
	"FORMS_V0137_POKEMON_PORYGON",
	{
		forms: [
			{
				form: "PORYGON_NORMAL";
			},
		];
		pokemon: "PORYGON";
	}
>;
export type FormSettingsV0138PokemonOmanyte = FormSettings<
	"FORMS_V0138_POKEMON_OMANYTE",
	{
		forms: [
			{
				form: "OMANYTE_NORMAL";
			},
		];
		pokemon: "OMANYTE";
	}
>;
export type FormSettingsV0139PokemonOmastar = FormSettings<
	"FORMS_V0139_POKEMON_OMASTAR",
	{
		forms: [
			{
				form: "OMASTAR_NORMAL";
			},
		];
		pokemon: "OMASTAR";
	}
>;
export type FormSettingsV0140PokemonKabuto = FormSettings<
	"FORMS_V0140_POKEMON_KABUTO",
	{
		forms: [
			{
				form: "KABUTO_NORMAL";
			},
		];
		pokemon: "KABUTO";
	}
>;
export type FormSettingsV0141PokemonKabutops = FormSettings<
	"FORMS_V0141_POKEMON_KABUTOPS",
	{
		forms: [
			{
				form: "KABUTOPS_NORMAL";
			},
		];
		pokemon: "KABUTOPS";
	}
>;
export type FormSettingsV0142PokemonAerodactyl = FormSettings<
	"FORMS_V0142_POKEMON_AERODACTYL",
	{
		forms: [
			{
				form: "AERODACTYL_NORMAL";
			},
			{
				form: "AERODACTYL_SUMMER_2023";
				isCostume: true;
			},
		];
		pokemon: "AERODACTYL";
	}
>;
export type FormSettingsV0143PokemonSnorlax = FormSettings<
	"FORMS_V0143_POKEMON_SNORLAX",
	{
		forms: [
			{
				form: "SNORLAX_NORMAL";
			},
			{
				form: "SNORLAX_WILDAREA_2024";
				isCostume: true;
			},
		];
		pokemon: "SNORLAX";
	}
>;
export type FormSettingsV0144PokemonArticuno = FormSettings<
	"FORMS_V0144_POKEMON_ARTICUNO",
	{
		forms: [
			{
				form: "ARTICUNO_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "ARTICUNO_GALARIAN";
			},
		];
		pokemon: "ARTICUNO";
	}
>;
export type FormSettingsV0145PokemonZapdos = FormSettings<
	"FORMS_V0145_POKEMON_ZAPDOS",
	{
		forms: [
			{
				form: "ZAPDOS_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "ZAPDOS_GALARIAN";
			},
		];
		pokemon: "ZAPDOS";
	}
>;
export type FormSettingsV0146PokemonMoltres = FormSettings<
	"FORMS_V0146_POKEMON_MOLTRES",
	{
		forms: [
			{
				form: "MOLTRES_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "MOLTRES_GALARIAN";
			},
		];
		pokemon: "MOLTRES";
	}
>;
export type FormSettingsV0147PokemonDratini = FormSettings<
	"FORMS_V0147_POKEMON_DRATINI",
	{
		forms: [
			{
				form: "DRATINI_NORMAL";
			},
		];
		pokemon: "DRATINI";
	}
>;
export type FormSettingsV0148PokemonDragonair = FormSettings<
	"FORMS_V0148_POKEMON_DRAGONAIR",
	{
		forms: [
			{
				form: "DRAGONAIR_NORMAL";
			},
		];
		pokemon: "DRAGONAIR";
	}
>;
export type FormSettingsV0149PokemonDragonite = FormSettings<
	"FORMS_V0149_POKEMON_DRAGONITE",
	{
		forms: [
			{
				form: "DRAGONITE_NORMAL";
			},
		];
		pokemon: "DRAGONITE";
	}
>;
export type FormSettingsV0150PokemonMewtwo = FormSettings<
	"FORMS_V0150_POKEMON_MEWTWO",
	{
		forms: [
			{
				form: "MEWTWO_NORMAL";
			},
			{
				assetBundleSuffix: "pm0150_00_pgo_a";
				form: "MEWTWO_A";
				isCostume: true;
			},
		];
		pokemon: "MEWTWO";
	}
>;
export type FormSettingsV0151PokemonMew = FormSettings<
	"FORMS_V0151_POKEMON_MEW",
	{
		forms: [
			{
				form: "MEW_NORMAL";
			},
		];
		pokemon: "MEW";
	}
>;
export type FormSettingsV0152PokemonChikorita = FormSettings<
	"FORMS_V0152_POKEMON_CHIKORITA",
	{
		forms: [
			{
				form: "CHIKORITA_NORMAL";
			},
		];
		pokemon: "CHIKORITA";
	}
>;
export type FormSettingsV0153PokemonBayleef = FormSettings<
	"FORMS_V0153_POKEMON_BAYLEEF",
	{
		forms: [
			{
				form: "BAYLEEF_NORMAL";
			},
		];
		pokemon: "BAYLEEF";
	}
>;
export type FormSettingsV0154PokemonMeganium = FormSettings<
	"FORMS_V0154_POKEMON_MEGANIUM",
	{
		forms: [
			{
				form: "MEGANIUM_NORMAL";
			},
		];
		pokemon: "MEGANIUM";
	}
>;
export type FormSettingsV0155PokemonCyndaquil = FormSettings<
	"FORMS_V0155_POKEMON_CYNDAQUIL",
	{
		forms: [
			{
				form: "CYNDAQUIL_NORMAL";
			},
		];
		pokemon: "CYNDAQUIL";
	}
>;
export type FormSettingsV0156PokemonQuilava = FormSettings<
	"FORMS_V0156_POKEMON_QUILAVA",
	{
		forms: [
			{
				form: "QUILAVA_NORMAL";
			},
		];
		pokemon: "QUILAVA";
	}
>;
export type FormSettingsV0157PokemonTyphlosion = FormSettings<
	"FORMS_V0157_POKEMON_TYPHLOSION",
	{
		forms: [
			{
				form: "TYPHLOSION_NORMAL";
			},
			{
				form: "TYPHLOSION_HISUIAN";
			},
		];
		pokemon: "TYPHLOSION";
	}
>;
export type FormSettingsV0158PokemonTotodile = FormSettings<
	"FORMS_V0158_POKEMON_TOTODILE",
	{
		forms: [
			{
				form: "TOTODILE_NORMAL";
			},
		];
		pokemon: "TOTODILE";
	}
>;
export type FormSettingsV0159PokemonCroconaw = FormSettings<
	"FORMS_V0159_POKEMON_CROCONAW",
	{
		forms: [
			{
				form: "CROCONAW_NORMAL";
			},
		];
		pokemon: "CROCONAW";
	}
>;
export type FormSettingsV0160PokemonFeraligatr = FormSettings<
	"FORMS_V0160_POKEMON_FERALIGATR",
	{
		forms: [
			{
				form: "FERALIGATR_NORMAL";
			},
		];
		pokemon: "FERALIGATR";
	}
>;
export type FormSettingsV0161PokemonSentret = FormSettings<
	"FORMS_V0161_POKEMON_SENTRET",
	{
		forms: [
			{
				form: "SENTRET_NORMAL";
			},
		];
		pokemon: "SENTRET";
	}
>;
export type FormSettingsV0162PokemonFurret = FormSettings<
	"FORMS_V0162_POKEMON_FURRET",
	{
		forms: [
			{
				form: "FURRET_NORMAL";
			},
		];
		pokemon: "FURRET";
	}
>;
export type FormSettingsV0163PokemonHoothoot = FormSettings<
	"FORMS_V0163_POKEMON_HOOTHOOT",
	{
		forms: [
			{
				form: "HOOTHOOT_NORMAL";
			},
		];
		pokemon: "HOOTHOOT";
	}
>;
export type FormSettingsV0164PokemonNoctowl = FormSettings<
	"FORMS_V0164_POKEMON_NOCTOWL",
	{
		forms: [
			{
				form: "NOCTOWL_NORMAL";
			},
		];
		pokemon: "NOCTOWL";
	}
>;
export type FormSettingsV0165PokemonLedyba = FormSettings<
	"FORMS_V0165_POKEMON_LEDYBA",
	{
		forms: [
			{
				form: "LEDYBA_NORMAL";
			},
		];
		pokemon: "LEDYBA";
	}
>;
export type FormSettingsV0166PokemonLedian = FormSettings<
	"FORMS_V0166_POKEMON_LEDIAN",
	{
		forms: [
			{
				form: "LEDIAN_NORMAL";
			},
		];
		pokemon: "LEDIAN";
	}
>;
export type FormSettingsV0167PokemonSpinarak = FormSettings<
	"FORMS_V0167_POKEMON_SPINARAK",
	{
		forms: [
			{
				form: "SPINARAK_NORMAL";
			},
		];
		pokemon: "SPINARAK";
	}
>;
export type FormSettingsV0168PokemonAriados = FormSettings<
	"FORMS_V0168_POKEMON_ARIADOS",
	{
		forms: [
			{
				form: "ARIADOS_NORMAL";
			},
		];
		pokemon: "ARIADOS";
	}
>;
export type FormSettingsV0169PokemonCrobat = FormSettings<
	"FORMS_V0169_POKEMON_CROBAT",
	{
		forms: [
			{
				form: "CROBAT_NORMAL";
			},
		];
		pokemon: "CROBAT";
	}
>;
export type FormSettingsV0170PokemonChinchou = FormSettings<
	"FORMS_V0170_POKEMON_CHINCHOU",
	{
		forms: [
			{
				form: "CHINCHOU_NORMAL";
			},
		];
		pokemon: "CHINCHOU";
	}
>;
export type FormSettingsV0171PokemonLanturn = FormSettings<
	"FORMS_V0171_POKEMON_LANTURN",
	{
		forms: [
			{
				form: "LANTURN_NORMAL";
			},
		];
		pokemon: "LANTURN";
	}
>;
export type FormSettingsV0172PokemonPichu = FormSettings<
	"FORMS_V0172_POKEMON_PICHU",
	{
		forms: [
			{
				form: "PICHU_NORMAL";
			},
		];
		pokemon: "PICHU";
	}
>;
export type FormSettingsV0173PokemonCleffa = FormSettings<
	"FORMS_V0173_POKEMON_CLEFFA",
	{
		forms: [
			{
				form: "CLEFFA_NORMAL";
			},
		];
		pokemon: "CLEFFA";
	}
>;
export type FormSettingsV0174PokemonIgglybuff = FormSettings<
	"FORMS_V0174_POKEMON_IGGLYBUFF",
	{
		forms: [
			{
				form: "IGGLYBUFF_NORMAL";
			},
		];
		pokemon: "IGGLYBUFF";
	}
>;
export type FormSettingsV0175PokemonTogepi = FormSettings<
	"FORMS_V0175_POKEMON_TOGEPI",
	{
		forms: [
			{
				form: "TOGEPI_NORMAL";
			},
		];
		pokemon: "TOGEPI";
	}
>;
export type FormSettingsV0176PokemonTogetic = FormSettings<
	"FORMS_V0176_POKEMON_TOGETIC",
	{
		forms: [
			{
				form: "TOGETIC_NORMAL";
			},
		];
		pokemon: "TOGETIC";
	}
>;
export type FormSettingsV0177PokemonNatu = FormSettings<
	"FORMS_V0177_POKEMON_NATU",
	{
		forms: [
			{
				form: "NATU_NORMAL";
			},
		];
		pokemon: "NATU";
	}
>;
export type FormSettingsV0178PokemonXatu = FormSettings<
	"FORMS_V0178_POKEMON_XATU",
	{
		forms: [
			{
				form: "XATU_NORMAL";
			},
		];
		pokemon: "XATU";
	}
>;
export type FormSettingsV0179PokemonMareep = FormSettings<
	"FORMS_V0179_POKEMON_MAREEP",
	{
		forms: [
			{
				form: "MAREEP_NORMAL";
			},
		];
		pokemon: "MAREEP";
	}
>;
export type FormSettingsV0180PokemonFlaaffy = FormSettings<
	"FORMS_V0180_POKEMON_FLAAFFY",
	{
		forms: [
			{
				form: "FLAAFFY_NORMAL";
			},
		];
		pokemon: "FLAAFFY";
	}
>;
export type FormSettingsV0181PokemonAmpharos = FormSettings<
	"FORMS_V0181_POKEMON_AMPHAROS",
	{
		forms: [
			{
				form: "AMPHAROS_NORMAL";
			},
		];
		pokemon: "AMPHAROS";
	}
>;
export type FormSettingsV0182PokemonBellossom = FormSettings<
	"FORMS_V0182_POKEMON_BELLOSSOM",
	{
		forms: [
			{
				form: "BELLOSSOM_NORMAL";
			},
		];
		pokemon: "BELLOSSOM";
	}
>;
export type FormSettingsV0183PokemonMarill = FormSettings<
	"FORMS_V0183_POKEMON_MARILL",
	{
		forms: [
			{
				form: "MARILL_NORMAL";
			},
		];
		pokemon: "MARILL";
	}
>;
export type FormSettingsV0184PokemonAzumarill = FormSettings<
	"FORMS_V0184_POKEMON_AZUMARILL",
	{
		forms: [
			{
				form: "AZUMARILL_NORMAL";
			},
		];
		pokemon: "AZUMARILL";
	}
>;
export type FormSettingsV0185PokemonSudowoodo = FormSettings<
	"FORMS_V0185_POKEMON_SUDOWOODO",
	{
		forms: [
			{
				form: "SUDOWOODO_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "SUDOWOODO_WINTER_2025";
				isCostume: true;
			},
		];
		pokemon: "SUDOWOODO";
	}
>;
export type FormSettingsV0186PokemonPolitoed = FormSettings<
	"FORMS_V0186_POKEMON_POLITOED",
	{
		forms: [
			{
				form: "POLITOED_NORMAL";
			},
		];
		pokemon: "POLITOED";
	}
>;
export type FormSettingsV0187PokemonHoppip = FormSettings<
	"FORMS_V0187_POKEMON_HOPPIP",
	{
		forms: [
			{
				form: "HOPPIP_NORMAL";
			},
		];
		pokemon: "HOPPIP";
	}
>;
export type FormSettingsV0188PokemonSkiploom = FormSettings<
	"FORMS_V0188_POKEMON_SKIPLOOM",
	{
		forms: [
			{
				form: "SKIPLOOM_NORMAL";
			},
		];
		pokemon: "SKIPLOOM";
	}
>;
export type FormSettingsV0189PokemonJumpluff = FormSettings<
	"FORMS_V0189_POKEMON_JUMPLUFF",
	{
		forms: [
			{
				form: "JUMPLUFF_NORMAL";
			},
		];
		pokemon: "JUMPLUFF";
	}
>;
export type FormSettingsV0190PokemonAipom = FormSettings<
	"FORMS_V0190_POKEMON_AIPOM",
	{
		forms: [
			{
				form: "AIPOM_NORMAL";
			},
		];
		pokemon: "AIPOM";
	}
>;
export type FormSettingsV0191PokemonSunkern = FormSettings<
	"FORMS_V0191_POKEMON_SUNKERN",
	{
		forms: [
			{
				form: "SUNKERN_NORMAL";
			},
		];
		pokemon: "SUNKERN";
	}
>;
export type FormSettingsV0192PokemonSunflora = FormSettings<
	"FORMS_V0192_POKEMON_SUNFLORA",
	{
		forms: [
			{
				form: "SUNFLORA_NORMAL";
			},
		];
		pokemon: "SUNFLORA";
	}
>;
export type FormSettingsV0193PokemonYanma = FormSettings<
	"FORMS_V0193_POKEMON_YANMA",
	{
		forms: [
			{
				form: "YANMA_NORMAL";
			},
		];
		pokemon: "YANMA";
	}
>;
export type FormSettingsV0194PokemonWooper = FormSettings<
	"FORMS_V0194_POKEMON_WOOPER",
	{
		forms: [
			{
				form: "WOOPER_NORMAL";
			},
			{
				form: "WOOPER_PALDEA";
			},
		];
		pokemon: "WOOPER";
	}
>;
export type FormSettingsV0195PokemonQuagsire = FormSettings<
	"FORMS_V0195_POKEMON_QUAGSIRE",
	{
		forms: [
			{
				form: "QUAGSIRE_NORMAL";
			},
		];
		pokemon: "QUAGSIRE";
	}
>;
export type FormSettingsV0196PokemonEspeon = FormSettings<
	"FORMS_V0196_POKEMON_ESPEON",
	{
		forms: [
			{
				form: "ESPEON_NORMAL";
			},
			{
				form: "ESPEON_GOFEST_2024_SSCARF";
				isCostume: true;
			},
		];
		pokemon: "ESPEON";
	}
>;
export type FormSettingsV0197PokemonUmbreon = FormSettings<
	"FORMS_V0197_POKEMON_UMBREON",
	{
		forms: [
			{
				form: "UMBREON_NORMAL";
			},
			{
				form: "UMBREON_GOFEST_2024_MSCARF";
				isCostume: true;
			},
		];
		pokemon: "UMBREON";
	}
>;
export type FormSettingsV0198PokemonMurkrow = FormSettings<
	"FORMS_V0198_POKEMON_MURKROW",
	{
		forms: [
			{
				form: "MURKROW_NORMAL";
			},
		];
		pokemon: "MURKROW";
	}
>;
export type FormSettingsV0199PokemonSlowking = FormSettings<
	"FORMS_V0199_POKEMON_SLOWKING",
	{
		forms: [
			{
				form: "SLOWKING_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "SLOWKING_GALARIAN";
			},
			{
				form: "SLOWKING_2022";
				isCostume: true;
			},
		];
		pokemon: "SLOWKING";
	}
>;
export type FormSettingsV0200PokemonMisdreavus = FormSettings<
	"FORMS_V0200_POKEMON_MISDREAVUS",
	{
		forms: [
			{
				form: "MISDREAVUS_NORMAL";
			},
		];
		pokemon: "MISDREAVUS";
	}
>;
export type FormSettingsV0201PokemonUnown = FormSettings<
	"FORMS_V0201_POKEMON_UNOWN",
	{
		forms: [
			{
				assetBundleValue: 16;
				form: "UNOWN_F";
			},
			{
				assetBundleValue: 11;
				form: "UNOWN_A";
			},
			{
				assetBundleValue: 12;
				form: "UNOWN_B";
			},
			{
				assetBundleValue: 13;
				form: "UNOWN_C";
			},
			{
				assetBundleValue: 14;
				form: "UNOWN_D";
			},
			{
				assetBundleValue: 15;
				form: "UNOWN_E";
			},
			{
				assetBundleValue: 17;
				form: "UNOWN_G";
			},
			{
				assetBundleValue: 18;
				form: "UNOWN_H";
			},
			{
				assetBundleValue: 19;
				form: "UNOWN_I";
			},
			{
				assetBundleValue: 20;
				form: "UNOWN_J";
			},
			{
				assetBundleValue: 21;
				form: "UNOWN_K";
			},
			{
				assetBundleValue: 22;
				form: "UNOWN_L";
			},
			{
				assetBundleValue: 23;
				form: "UNOWN_M";
			},
			{
				assetBundleValue: 24;
				form: "UNOWN_N";
			},
			{
				assetBundleValue: 25;
				form: "UNOWN_O";
			},
			{
				assetBundleValue: 26;
				form: "UNOWN_P";
			},
			{
				assetBundleValue: 27;
				form: "UNOWN_Q";
			},
			{
				assetBundleValue: 28;
				form: "UNOWN_R";
			},
			{
				assetBundleValue: 29;
				form: "UNOWN_S";
			},
			{
				assetBundleValue: 30;
				form: "UNOWN_T";
			},
			{
				assetBundleValue: 31;
				form: "UNOWN_U";
			},
			{
				assetBundleValue: 32;
				form: "UNOWN_V";
			},
			{
				assetBundleValue: 33;
				form: "UNOWN_W";
			},
			{
				assetBundleValue: 34;
				form: "UNOWN_X";
			},
			{
				assetBundleValue: 35;
				form: "UNOWN_Y";
			},
			{
				assetBundleValue: 36;
				form: "UNOWN_Z";
			},
			{
				assetBundleValue: 37;
				form: "UNOWN_EXCLAMATION_POINT";
			},
			{
				assetBundleValue: 38;
				form: "UNOWN_QUESTION_MARK";
			},
		];
		pokemon: "UNOWN";
	}
>;
export type FormSettingsV0202PokemonWobbuffet = FormSettings<
	"FORMS_V0202_POKEMON_WOBBUFFET",
	{
		forms: [
			{
				form: "WOBBUFFET_NORMAL";
			},
		];
		pokemon: "WOBBUFFET";
	}
>;
export type FormSettingsV0203PokemonGirafarig = FormSettings<
	"FORMS_V0203_POKEMON_GIRAFARIG",
	{
		forms: [
			{
				form: "GIRAFARIG_NORMAL";
			},
		];
		pokemon: "GIRAFARIG";
	}
>;
export type FormSettingsV0204PokemonPineco = FormSettings<
	"FORMS_V0204_POKEMON_PINECO",
	{
		forms: [
			{
				form: "PINECO_NORMAL";
			},
		];
		pokemon: "PINECO";
	}
>;
export type FormSettingsV0205PokemonForretress = FormSettings<
	"FORMS_V0205_POKEMON_FORRETRESS",
	{
		forms: [
			{
				form: "FORRETRESS_NORMAL";
			},
		];
		pokemon: "FORRETRESS";
	}
>;
export type FormSettingsV0206PokemonDunsparce = FormSettings<
	"FORMS_V0206_POKEMON_DUNSPARCE",
	{
		forms: [
			{
				form: "DUNSPARCE_NORMAL";
			},
		];
		pokemon: "DUNSPARCE";
	}
>;
export type FormSettingsV0207PokemonGligar = FormSettings<
	"FORMS_V0207_POKEMON_GLIGAR",
	{
		forms: [
			{
				form: "GLIGAR_NORMAL";
			},
		];
		pokemon: "GLIGAR";
	}
>;
export type FormSettingsV0208PokemonSteelix = FormSettings<
	"FORMS_V0208_POKEMON_STEELIX",
	{
		forms: [
			{
				form: "STEELIX_NORMAL";
			},
		];
		pokemon: "STEELIX";
	}
>;
export type FormSettingsV0209PokemonSnubbull = FormSettings<
	"FORMS_V0209_POKEMON_SNUBBULL",
	{
		forms: [
			{
				form: "SNUBBULL_NORMAL";
			},
		];
		pokemon: "SNUBBULL";
	}
>;
export type FormSettingsV0210PokemonGranbull = FormSettings<
	"FORMS_V0210_POKEMON_GRANBULL",
	{
		forms: [
			{
				form: "GRANBULL_NORMAL";
			},
		];
		pokemon: "GRANBULL";
	}
>;
export type FormSettingsV0211PokemonQwilfish = FormSettings<
	"FORMS_V0211_POKEMON_QWILFISH",
	{
		forms: [
			{
				form: "QWILFISH_NORMAL";
			},
			{
				form: "QWILFISH_HISUIAN";
			},
		];
		pokemon: "QWILFISH";
	}
>;
export type FormSettingsV0212PokemonScizor = FormSettings<
	"FORMS_V0212_POKEMON_SCIZOR",
	{
		forms: [
			{
				form: "SCIZOR_NORMAL";
			},
		];
		pokemon: "SCIZOR";
	}
>;
export type FormSettingsV0213PokemonShuckle = FormSettings<
	"FORMS_V0213_POKEMON_SHUCKLE",
	{
		forms: [
			{
				form: "SHUCKLE_NORMAL";
			},
		];
		pokemon: "SHUCKLE";
	}
>;
export type FormSettingsV0214PokemonHeracross = FormSettings<
	"FORMS_V0214_POKEMON_HERACROSS",
	{
		forms: [
			{
				form: "HERACROSS_NORMAL";
			},
		];
		pokemon: "HERACROSS";
	}
>;
export type FormSettingsV0215PokemonSneasel = FormSettings<
	"FORMS_V0215_POKEMON_SNEASEL",
	{
		forms: [
			{
				form: "SNEASEL_NORMAL";
			},
			{
				form: "SNEASEL_HISUIAN";
			},
		];
		pokemon: "SNEASEL";
	}
>;
export type FormSettingsV0216PokemonTeddiursa = FormSettings<
	"FORMS_V0216_POKEMON_TEDDIURSA",
	{
		forms: [
			{
				form: "TEDDIURSA_NORMAL";
			},
		];
		pokemon: "TEDDIURSA";
	}
>;
export type FormSettingsV0217PokemonUrsaring = FormSettings<
	"FORMS_V0217_POKEMON_URSARING",
	{
		forms: [
			{
				form: "URSARING_NORMAL";
			},
		];
		pokemon: "URSARING";
	}
>;
export type FormSettingsV0218PokemonSlugma = FormSettings<
	"FORMS_V0218_POKEMON_SLUGMA",
	{
		forms: [
			{
				form: "SLUGMA_NORMAL";
			},
		];
		pokemon: "SLUGMA";
	}
>;
export type FormSettingsV0219PokemonMagcargo = FormSettings<
	"FORMS_V0219_POKEMON_MAGCARGO",
	{
		forms: [
			{
				form: "MAGCARGO_NORMAL";
			},
		];
		pokemon: "MAGCARGO";
	}
>;
export type FormSettingsV0220PokemonSwinub = FormSettings<
	"FORMS_V0220_POKEMON_SWINUB",
	{
		forms: [
			{
				form: "SWINUB_NORMAL";
			},
		];
		pokemon: "SWINUB";
	}
>;
export type FormSettingsV0221PokemonPiloswine = FormSettings<
	"FORMS_V0221_POKEMON_PILOSWINE",
	{
		forms: [
			{
				form: "PILOSWINE_NORMAL";
			},
		];
		pokemon: "PILOSWINE";
	}
>;
export type FormSettingsV0222PokemonCorsola = FormSettings<
	"FORMS_V0222_POKEMON_CORSOLA",
	{
		forms: [
			{
				form: "CORSOLA_NORMAL";
			},
			{
				form: "CORSOLA_GALARIAN";
			},
			{
				form: 3339;
				isCostume: true;
			},
		];
		pokemon: "CORSOLA";
	}
>;
export type FormSettingsV0223PokemonRemoraid = FormSettings<
	"FORMS_V0223_POKEMON_REMORAID",
	{
		forms: [
			{
				form: "REMORAID_NORMAL";
			},
		];
		pokemon: "REMORAID";
	}
>;
export type FormSettingsV0224PokemonOctillery = FormSettings<
	"FORMS_V0224_POKEMON_OCTILLERY",
	{
		forms: [
			{
				form: "OCTILLERY_NORMAL";
			},
		];
		pokemon: "OCTILLERY";
	}
>;
export type FormSettingsV0225PokemonDelibird = FormSettings<
	"FORMS_V0225_POKEMON_DELIBIRD",
	{
		forms: [
			{
				form: "DELIBIRD_NORMAL";
			},
			{
				assetBundleSuffix: "pm0225_00_pgo_winter2020";
				form: "DELIBIRD_WINTER_2020";
				isCostume: true;
			},
		];
		pokemon: "DELIBIRD";
	}
>;
export type FormSettingsV0226PokemonMantine = FormSettings<
	"FORMS_V0226_POKEMON_MANTINE",
	{
		forms: [
			{
				form: "MANTINE_NORMAL";
			},
		];
		pokemon: "MANTINE";
	}
>;
export type FormSettingsV0227PokemonSkarmory = FormSettings<
	"FORMS_V0227_POKEMON_SKARMORY",
	{
		forms: [
			{
				form: "SKARMORY_NORMAL";
			},
		];
		pokemon: "SKARMORY";
	}
>;
export type FormSettingsV0228PokemonHoundour = FormSettings<
	"FORMS_V0228_POKEMON_HOUNDOUR",
	{
		forms: [
			{
				form: "HOUNDOUR_NORMAL";
			},
		];
		pokemon: "HOUNDOUR";
	}
>;
export type FormSettingsV0229PokemonHoundoom = FormSettings<
	"FORMS_V0229_POKEMON_HOUNDOOM",
	{
		forms: [
			{
				form: "HOUNDOOM_NORMAL";
			},
		];
		pokemon: "HOUNDOOM";
	}
>;
export type FormSettingsV0230PokemonKingdra = FormSettings<
	"FORMS_V0230_POKEMON_KINGDRA",
	{
		forms: [
			{
				form: "KINGDRA_NORMAL";
			},
		];
		pokemon: "KINGDRA";
	}
>;
export type FormSettingsV0231PokemonPhanpy = FormSettings<
	"FORMS_V0231_POKEMON_PHANPY",
	{
		forms: [
			{
				form: "PHANPY_NORMAL";
			},
		];
		pokemon: "PHANPY";
	}
>;
export type FormSettingsV0232PokemonDonphan = FormSettings<
	"FORMS_V0232_POKEMON_DONPHAN",
	{
		forms: [
			{
				form: "DONPHAN_NORMAL";
			},
		];
		pokemon: "DONPHAN";
	}
>;
export type FormSettingsV0233PokemonPorygon2 = FormSettings<
	"FORMS_V0233_POKEMON_PORYGON2",
	{
		forms: [
			{
				form: "PORYGON2_NORMAL";
			},
		];
		pokemon: "PORYGON2";
	}
>;
export type FormSettingsV0234PokemonStantler = FormSettings<
	"FORMS_V0234_POKEMON_STANTLER",
	{
		forms: [
			{
				form: "STANTLER_NORMAL";
			},
		];
		pokemon: "STANTLER";
	}
>;
export type FormSettingsV0235PokemonSmeargle = FormSettings<
	"FORMS_V0235_POKEMON_SMEARGLE",
	{
		forms: [
			{
				form: "SMEARGLE_NORMAL";
			},
		];
		pokemon: "SMEARGLE";
	}
>;
export type FormSettingsV0236PokemonTyrogue = FormSettings<
	"FORMS_V0236_POKEMON_TYROGUE",
	{
		forms: [
			{
				form: "TYROGUE_NORMAL";
			},
		];
		pokemon: "TYROGUE";
	}
>;
export type FormSettingsV0237PokemonHitmontop = FormSettings<
	"FORMS_V0237_POKEMON_HITMONTOP",
	{
		forms: [
			{
				form: "HITMONTOP_NORMAL";
			},
		];
		pokemon: "HITMONTOP";
	}
>;
export type FormSettingsV0238PokemonSmoochum = FormSettings<
	"FORMS_V0238_POKEMON_SMOOCHUM",
	{
		forms: [
			{
				form: "SMOOCHUM_NORMAL";
			},
		];
		pokemon: "SMOOCHUM";
	}
>;
export type FormSettingsV0239PokemonElekid = FormSettings<
	"FORMS_V0239_POKEMON_ELEKID",
	{
		forms: [
			{
				form: "ELEKID_NORMAL";
			},
		];
		pokemon: "ELEKID";
	}
>;
export type FormSettingsV0240PokemonMagby = FormSettings<
	"FORMS_V0240_POKEMON_MAGBY",
	{
		forms: [
			{
				form: "MAGBY_NORMAL";
			},
		];
		pokemon: "MAGBY";
	}
>;
export type FormSettingsV0241PokemonMiltank = FormSettings<
	"FORMS_V0241_POKEMON_MILTANK",
	{
		forms: [
			{
				form: "MILTANK_NORMAL";
			},
		];
		pokemon: "MILTANK";
	}
>;
export type FormSettingsV0242PokemonBlissey = FormSettings<
	"FORMS_V0242_POKEMON_BLISSEY",
	{
		forms: [
			{
				form: "BLISSEY_NORMAL";
			},
		];
		pokemon: "BLISSEY";
	}
>;
export type FormSettingsV0243PokemonRaikou = FormSettings<
	"FORMS_V0243_POKEMON_RAIKOU",
	{
		forms: [
			{
				form: "RAIKOU_NORMAL";
			},
			{
				form: "RAIKOU_S";
			},
		];
		pokemon: "RAIKOU";
	}
>;
export type FormSettingsV0244PokemonEntei = FormSettings<
	"FORMS_V0244_POKEMON_ENTEI",
	{
		forms: [
			{
				form: "ENTEI_NORMAL";
			},
			{
				form: "ENTEI_S";
			},
		];
		pokemon: "ENTEI";
	}
>;
export type FormSettingsV0245PokemonSuicune = FormSettings<
	"FORMS_V0245_POKEMON_SUICUNE",
	{
		forms: [
			{
				form: "SUICUNE_NORMAL";
			},
			{
				form: "SUICUNE_S";
			},
		];
		pokemon: "SUICUNE";
	}
>;
export type FormSettingsV0246PokemonLarvitar = FormSettings<
	"FORMS_V0246_POKEMON_LARVITAR",
	{
		forms: [
			{
				form: "LARVITAR_NORMAL";
			},
		];
		pokemon: "LARVITAR";
	}
>;
export type FormSettingsV0247PokemonPupitar = FormSettings<
	"FORMS_V0247_POKEMON_PUPITAR",
	{
		forms: [
			{
				form: "PUPITAR_NORMAL";
			},
		];
		pokemon: "PUPITAR";
	}
>;
export type FormSettingsV0248PokemonTyranitar = FormSettings<
	"FORMS_V0248_POKEMON_TYRANITAR",
	{
		forms: [
			{
				form: "TYRANITAR_NORMAL";
			},
		];
		pokemon: "TYRANITAR";
	}
>;
export type FormSettingsV0249PokemonLugia = FormSettings<
	"FORMS_V0249_POKEMON_LUGIA",
	{
		forms: [
			{
				form: "LUGIA_NORMAL";
			},
			{
				form: "LUGIA_S";
			},
		];
		pokemon: "LUGIA";
	}
>;
export type FormSettingsV0250PokemonHoOh = FormSettings<
	"FORMS_V0250_POKEMON_HO_OH",
	{
		forms: [
			{
				form: "HO_OH_NORMAL";
			},
			{
				form: "HO_OH_S";
			},
		];
		pokemon: "HO_OH";
	}
>;
export type FormSettingsV0251PokemonCelebi = FormSettings<
	"FORMS_V0251_POKEMON_CELEBI",
	{
		forms: [
			{
				form: "CELEBI_NORMAL";
			},
		];
		pokemon: "CELEBI";
	}
>;
export type FormSettingsV0252PokemonTreecko = FormSettings<
	"FORMS_V0252_POKEMON_TREECKO",
	{
		forms: [
			{
				form: "TREECKO_NORMAL";
			},
		];
		pokemon: "TREECKO";
	}
>;
export type FormSettingsV0253PokemonGrovyle = FormSettings<
	"FORMS_V0253_POKEMON_GROVYLE",
	{
		forms: [
			{
				form: "GROVYLE_NORMAL";
			},
		];
		pokemon: "GROVYLE";
	}
>;
export type FormSettingsV0254PokemonSceptile = FormSettings<
	"FORMS_V0254_POKEMON_SCEPTILE",
	{
		forms: [
			{
				form: "SCEPTILE_NORMAL";
			},
		];
		pokemon: "SCEPTILE";
	}
>;
export type FormSettingsV0255PokemonTorchic = FormSettings<
	"FORMS_V0255_POKEMON_TORCHIC",
	{
		forms: [
			{
				form: "TORCHIC_NORMAL";
			},
		];
		pokemon: "TORCHIC";
	}
>;
export type FormSettingsV0256PokemonCombusken = FormSettings<
	"FORMS_V0256_POKEMON_COMBUSKEN",
	{
		forms: [
			{
				form: "COMBUSKEN_NORMAL";
			},
		];
		pokemon: "COMBUSKEN";
	}
>;
export type FormSettingsV0257PokemonBlaziken = FormSettings<
	"FORMS_V0257_POKEMON_BLAZIKEN",
	{
		forms: [
			{
				form: "BLAZIKEN_NORMAL";
			},
		];
		pokemon: "BLAZIKEN";
	}
>;
export type FormSettingsV0258PokemonMudkip = FormSettings<
	"FORMS_V0258_POKEMON_MUDKIP",
	{
		forms: [
			{
				form: "MUDKIP_NORMAL";
			},
		];
		pokemon: "MUDKIP";
	}
>;
export type FormSettingsV0259PokemonMarshtomp = FormSettings<
	"FORMS_V0259_POKEMON_MARSHTOMP",
	{
		forms: [
			{
				form: "MARSHTOMP_NORMAL";
			},
		];
		pokemon: "MARSHTOMP";
	}
>;
export type FormSettingsV0260PokemonSwampert = FormSettings<
	"FORMS_V0260_POKEMON_SWAMPERT",
	{
		forms: [
			{
				form: "SWAMPERT_NORMAL";
			},
		];
		pokemon: "SWAMPERT";
	}
>;
export type FormSettingsV0261PokemonPoochyena = FormSettings<
	"FORMS_V0261_POKEMON_POOCHYENA",
	{
		forms: [
			{
				form: "POOCHYENA_NORMAL";
			},
		];
		pokemon: "POOCHYENA";
	}
>;
export type FormSettingsV0262PokemonMightyena = FormSettings<
	"FORMS_V0262_POKEMON_MIGHTYENA",
	{
		forms: [
			{
				form: "MIGHTYENA_NORMAL";
			},
		];
		pokemon: "MIGHTYENA";
	}
>;
export type FormSettingsV0263PokemonZigzagoon = FormSettings<
	"FORMS_V0263_POKEMON_ZIGZAGOON",
	{
		forms: [
			{
				form: "ZIGZAGOON_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "ZIGZAGOON_GALARIAN";
			},
		];
		pokemon: "ZIGZAGOON";
	}
>;
export type FormSettingsV0264PokemonLinoone = FormSettings<
	"FORMS_V0264_POKEMON_LINOONE",
	{
		forms: [
			{
				form: "LINOONE_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "LINOONE_GALARIAN";
			},
		];
		pokemon: "LINOONE";
	}
>;
export type FormSettingsV0265PokemonWurmple = FormSettings<
	"FORMS_V0265_POKEMON_WURMPLE",
	{
		forms: [
			{
				form: "WURMPLE_NORMAL";
			},
		];
		pokemon: "WURMPLE";
	}
>;
export type FormSettingsV0266PokemonSilcoon = FormSettings<
	"FORMS_V0266_POKEMON_SILCOON",
	{
		forms: [
			{
				form: "SILCOON_NORMAL";
			},
		];
		pokemon: "SILCOON";
	}
>;
export type FormSettingsV0267PokemonBeautifly = FormSettings<
	"FORMS_V0267_POKEMON_BEAUTIFLY",
	{
		forms: [
			{
				form: "BEAUTIFLY_NORMAL";
			},
		];
		pokemon: "BEAUTIFLY";
	}
>;
export type FormSettingsV0268PokemonCascoon = FormSettings<
	"FORMS_V0268_POKEMON_CASCOON",
	{
		forms: [
			{
				form: "CASCOON_NORMAL";
			},
		];
		pokemon: "CASCOON";
	}
>;
export type FormSettingsV0269PokemonDustox = FormSettings<
	"FORMS_V0269_POKEMON_DUSTOX",
	{
		forms: [
			{
				form: "DUSTOX_NORMAL";
			},
		];
		pokemon: "DUSTOX";
	}
>;
export type FormSettingsV0270PokemonLotad = FormSettings<
	"FORMS_V0270_POKEMON_LOTAD",
	{
		forms: [
			{
				form: "LOTAD_NORMAL";
			},
		];
		pokemon: "LOTAD";
	}
>;
export type FormSettingsV0271PokemonLombre = FormSettings<
	"FORMS_V0271_POKEMON_LOMBRE",
	{
		forms: [
			{
				form: "LOMBRE_NORMAL";
			},
		];
		pokemon: "LOMBRE";
	}
>;
export type FormSettingsV0272PokemonLudicolo = FormSettings<
	"FORMS_V0272_POKEMON_LUDICOLO",
	{
		forms: [
			{
				form: "LUDICOLO_NORMAL";
			},
		];
		pokemon: "LUDICOLO";
	}
>;
export type FormSettingsV0273PokemonSeedot = FormSettings<
	"FORMS_V0273_POKEMON_SEEDOT",
	{
		forms: [
			{
				form: "SEEDOT_NORMAL";
			},
		];
		pokemon: "SEEDOT";
	}
>;
export type FormSettingsV0274PokemonNuzleaf = FormSettings<
	"FORMS_V0274_POKEMON_NUZLEAF",
	{
		forms: [
			{
				form: "NUZLEAF_NORMAL";
			},
		];
		pokemon: "NUZLEAF";
	}
>;
export type FormSettingsV0275PokemonShiftry = FormSettings<
	"FORMS_V0275_POKEMON_SHIFTRY",
	{
		forms: [
			{
				form: "SHIFTRY_NORMAL";
			},
		];
		pokemon: "SHIFTRY";
	}
>;
export type FormSettingsV0276PokemonTaillow = FormSettings<
	"FORMS_V0276_POKEMON_TAILLOW",
	{
		forms: [
			{
				form: "TAILLOW_NORMAL";
			},
		];
		pokemon: "TAILLOW";
	}
>;
export type FormSettingsV0277PokemonSwellow = FormSettings<
	"FORMS_V0277_POKEMON_SWELLOW",
	{
		forms: [
			{
				form: "SWELLOW_NORMAL";
			},
		];
		pokemon: "SWELLOW";
	}
>;
export type FormSettingsV0278PokemonWingull = FormSettings<
	"FORMS_V0278_POKEMON_WINGULL",
	{
		forms: [
			{
				form: "WINGULL_NORMAL";
			},
		];
		pokemon: "WINGULL";
	}
>;
export type FormSettingsV0279PokemonPelipper = FormSettings<
	"FORMS_V0279_POKEMON_PELIPPER",
	{
		forms: [
			{
				form: "PELIPPER_NORMAL";
			},
		];
		pokemon: "PELIPPER";
	}
>;
export type FormSettingsV0280PokemonRalts = FormSettings<
	"FORMS_V0280_POKEMON_RALTS",
	{
		forms: [
			{
				form: "RALTS_NORMAL";
			},
		];
		pokemon: "RALTS";
	}
>;
export type FormSettingsV0281PokemonKirlia = FormSettings<
	"FORMS_V0281_POKEMON_KIRLIA",
	{
		forms: [
			{
				form: "KIRLIA_NORMAL";
			},
		];
		pokemon: "KIRLIA";
	}
>;
export type FormSettingsV0282PokemonGardevoir = FormSettings<
	"FORMS_V0282_POKEMON_GARDEVOIR",
	{
		forms: [
			{
				form: "GARDEVOIR_NORMAL";
			},
		];
		pokemon: "GARDEVOIR";
	}
>;
export type FormSettingsV0283PokemonSurskit = FormSettings<
	"FORMS_V0283_POKEMON_SURSKIT",
	{
		forms: [
			{
				form: "SURSKIT_NORMAL";
			},
		];
		pokemon: "SURSKIT";
	}
>;
export type FormSettingsV0284PokemonMasquerain = FormSettings<
	"FORMS_V0284_POKEMON_MASQUERAIN",
	{
		forms: [
			{
				form: "MASQUERAIN_NORMAL";
			},
		];
		pokemon: "MASQUERAIN";
	}
>;
export type FormSettingsV0285PokemonShroomish = FormSettings<
	"FORMS_V0285_POKEMON_SHROOMISH",
	{
		forms: [
			{
				form: "SHROOMISH_NORMAL";
			},
		];
		pokemon: "SHROOMISH";
	}
>;
export type FormSettingsV0286PokemonBreloom = FormSettings<
	"FORMS_V0286_POKEMON_BRELOOM",
	{
		forms: [
			{
				form: "BRELOOM_NORMAL";
			},
		];
		pokemon: "BRELOOM";
	}
>;
export type FormSettingsV0287PokemonSlakoth = FormSettings<
	"FORMS_V0287_POKEMON_SLAKOTH",
	{
		forms: [
			{
				form: "SLAKOTH_NORMAL";
			},
		];
		pokemon: "SLAKOTH";
	}
>;
export type FormSettingsV0288PokemonVigoroth = FormSettings<
	"FORMS_V0288_POKEMON_VIGOROTH",
	{
		forms: [
			{
				form: "VIGOROTH_NORMAL";
			},
		];
		pokemon: "VIGOROTH";
	}
>;
export type FormSettingsV0289PokemonSlaking = FormSettings<
	"FORMS_V0289_POKEMON_SLAKING",
	{
		forms: [
			{
				form: "SLAKING_NORMAL";
			},
		];
		pokemon: "SLAKING";
	}
>;
export type FormSettingsV0290PokemonNincada = FormSettings<
	"FORMS_V0290_POKEMON_NINCADA",
	{
		forms: [
			{
				form: "NINCADA_NORMAL";
			},
		];
		pokemon: "NINCADA";
	}
>;
export type FormSettingsV0291PokemonNinjask = FormSettings<
	"FORMS_V0291_POKEMON_NINJASK",
	{
		forms: [
			{
				form: "NINJASK_NORMAL";
			},
		];
		pokemon: "NINJASK";
	}
>;
export type FormSettingsV0292PokemonShedinja = FormSettings<
	"FORMS_V0292_POKEMON_SHEDINJA",
	{
		forms: [
			{
				form: "SHEDINJA_NORMAL";
			},
		];
		pokemon: "SHEDINJA";
	}
>;
export type FormSettingsV0293PokemonWhismur = FormSettings<
	"FORMS_V0293_POKEMON_WHISMUR",
	{
		forms: [
			{
				form: "WHISMUR_NORMAL";
			},
		];
		pokemon: "WHISMUR";
	}
>;
export type FormSettingsV0294PokemonLoudred = FormSettings<
	"FORMS_V0294_POKEMON_LOUDRED",
	{
		forms: [
			{
				form: "LOUDRED_NORMAL";
			},
		];
		pokemon: "LOUDRED";
	}
>;
export type FormSettingsV0295PokemonExploud = FormSettings<
	"FORMS_V0295_POKEMON_EXPLOUD",
	{
		forms: [
			{
				form: "EXPLOUD_NORMAL";
			},
		];
		pokemon: "EXPLOUD";
	}
>;
export type FormSettingsV0296PokemonMakuhita = FormSettings<
	"FORMS_V0296_POKEMON_MAKUHITA",
	{
		forms: [
			{
				form: "MAKUHITA_NORMAL";
			},
		];
		pokemon: "MAKUHITA";
	}
>;
export type FormSettingsV0297PokemonHariyama = FormSettings<
	"FORMS_V0297_POKEMON_HARIYAMA",
	{
		forms: [
			{
				form: "HARIYAMA_NORMAL";
			},
		];
		pokemon: "HARIYAMA";
	}
>;
export type FormSettingsV0298PokemonAzurill = FormSettings<
	"FORMS_V0298_POKEMON_AZURILL",
	{
		forms: [
			{
				form: "AZURILL_NORMAL";
			},
		];
		pokemon: "AZURILL";
	}
>;
export type FormSettingsV0299PokemonNosepass = FormSettings<
	"FORMS_V0299_POKEMON_NOSEPASS",
	{
		forms: [
			{
				form: "NOSEPASS_NORMAL";
			},
		];
		pokemon: "NOSEPASS";
	}
>;
export type FormSettingsV0300PokemonSkitty = FormSettings<
	"FORMS_V0300_POKEMON_SKITTY",
	{
		forms: [
			{
				form: "SKITTY_NORMAL";
			},
		];
		pokemon: "SKITTY";
	}
>;
export type FormSettingsV0301PokemonDelcatty = FormSettings<
	"FORMS_V0301_POKEMON_DELCATTY",
	{
		forms: [
			{
				form: "DELCATTY_NORMAL";
			},
		];
		pokemon: "DELCATTY";
	}
>;
export type FormSettingsV0302PokemonSableye = FormSettings<
	"FORMS_V0302_POKEMON_SABLEYE",
	{
		forms: [
			{
				form: "SABLEYE_NORMAL";
			},
			{
				assetBundleSuffix: "pm0302_00_pgo_fall2020";
				form: "SABLEYE_COSTUME_2020";
				isCostume: true;
			},
		];
		pokemon: "SABLEYE";
	}
>;
export type FormSettingsV0303PokemonMawile = FormSettings<
	"FORMS_V0303_POKEMON_MAWILE",
	{
		forms: [
			{
				form: "MAWILE_NORMAL";
			},
		];
		pokemon: "MAWILE";
	}
>;
export type FormSettingsV0304PokemonAron = FormSettings<
	"FORMS_V0304_POKEMON_ARON",
	{
		forms: [
			{
				form: "ARON_NORMAL";
			},
		];
		pokemon: "ARON";
	}
>;
export type FormSettingsV0305PokemonLairon = FormSettings<
	"FORMS_V0305_POKEMON_LAIRON",
	{
		forms: [
			{
				form: "LAIRON_NORMAL";
			},
		];
		pokemon: "LAIRON";
	}
>;
export type FormSettingsV0306PokemonAggron = FormSettings<
	"FORMS_V0306_POKEMON_AGGRON",
	{
		forms: [
			{
				form: "AGGRON_NORMAL";
			},
		];
		pokemon: "AGGRON";
	}
>;
export type FormSettingsV0307PokemonMeditite = FormSettings<
	"FORMS_V0307_POKEMON_MEDITITE",
	{
		forms: [
			{
				form: "MEDITITE_NORMAL";
			},
		];
		pokemon: "MEDITITE";
	}
>;
export type FormSettingsV0308PokemonMedicham = FormSettings<
	"FORMS_V0308_POKEMON_MEDICHAM",
	{
		forms: [
			{
				form: "MEDICHAM_NORMAL";
			},
		];
		pokemon: "MEDICHAM";
	}
>;
export type FormSettingsV0309PokemonElectrike = FormSettings<
	"FORMS_V0309_POKEMON_ELECTRIKE",
	{
		forms: [
			{
				form: "ELECTRIKE_NORMAL";
			},
		];
		pokemon: "ELECTRIKE";
	}
>;
export type FormSettingsV0310PokemonManectric = FormSettings<
	"FORMS_V0310_POKEMON_MANECTRIC",
	{
		forms: [
			{
				form: "MANECTRIC_NORMAL";
			},
		];
		pokemon: "MANECTRIC";
	}
>;
export type FormSettingsV0311PokemonPlusle = FormSettings<
	"FORMS_V0311_POKEMON_PLUSLE",
	{
		forms: [
			{
				form: "PLUSLE_NORMAL";
			},
		];
		pokemon: "PLUSLE";
	}
>;
export type FormSettingsV0312PokemonMinun = FormSettings<
	"FORMS_V0312_POKEMON_MINUN",
	{
		forms: [
			{
				form: "MINUN_NORMAL";
			},
		];
		pokemon: "MINUN";
	}
>;
export type FormSettingsV0313PokemonVolbeat = FormSettings<
	"FORMS_V0313_POKEMON_VOLBEAT",
	{
		forms: [
			{
				form: "VOLBEAT_NORMAL";
			},
		];
		pokemon: "VOLBEAT";
	}
>;
export type FormSettingsV0314PokemonIllumise = FormSettings<
	"FORMS_V0314_POKEMON_ILLUMISE",
	{
		forms: [
			{
				form: "ILLUMISE_NORMAL";
			},
		];
		pokemon: "ILLUMISE";
	}
>;
export type FormSettingsV0315PokemonRoselia = FormSettings<
	"FORMS_V0315_POKEMON_ROSELIA",
	{
		forms: [
			{
				form: "ROSELIA_NORMAL";
			},
		];
		pokemon: "ROSELIA";
	}
>;
export type FormSettingsV0316PokemonGulpin = FormSettings<
	"FORMS_V0316_POKEMON_GULPIN",
	{
		forms: [
			{
				form: "GULPIN_NORMAL";
			},
		];
		pokemon: "GULPIN";
	}
>;
export type FormSettingsV0317PokemonSwalot = FormSettings<
	"FORMS_V0317_POKEMON_SWALOT",
	{
		forms: [
			{
				form: "SWALOT_NORMAL";
			},
		];
		pokemon: "SWALOT";
	}
>;
export type FormSettingsV0318PokemonCarvanha = FormSettings<
	"FORMS_V0318_POKEMON_CARVANHA",
	{
		forms: [
			{
				form: "CARVANHA_NORMAL";
			},
		];
		pokemon: "CARVANHA";
	}
>;
export type FormSettingsV0319PokemonSharpedo = FormSettings<
	"FORMS_V0319_POKEMON_SHARPEDO",
	{
		forms: [
			{
				form: "SHARPEDO_NORMAL";
			},
		];
		pokemon: "SHARPEDO";
	}
>;
export type FormSettingsV0320PokemonWailmer = FormSettings<
	"FORMS_V0320_POKEMON_WAILMER",
	{
		forms: [
			{
				form: "WAILMER_NORMAL";
			},
		];
		pokemon: "WAILMER";
	}
>;
export type FormSettingsV0321PokemonWailord = FormSettings<
	"FORMS_V0321_POKEMON_WAILORD",
	{
		forms: [
			{
				form: "WAILORD_NORMAL";
			},
		];
		pokemon: "WAILORD";
	}
>;
export type FormSettingsV0322PokemonNumel = FormSettings<
	"FORMS_V0322_POKEMON_NUMEL",
	{
		forms: [
			{
				form: "NUMEL_NORMAL";
			},
		];
		pokemon: "NUMEL";
	}
>;
export type FormSettingsV0323PokemonCamerupt = FormSettings<
	"FORMS_V0323_POKEMON_CAMERUPT",
	{
		forms: [
			{
				form: "CAMERUPT_NORMAL";
			},
		];
		pokemon: "CAMERUPT";
	}
>;
export type FormSettingsV0324PokemonTorkoal = FormSettings<
	"FORMS_V0324_POKEMON_TORKOAL",
	{
		forms: [
			{
				form: "TORKOAL_NORMAL";
			},
		];
		pokemon: "TORKOAL";
	}
>;
export type FormSettingsV0325PokemonSpoink = FormSettings<
	"FORMS_V0325_POKEMON_SPOINK",
	{
		forms: [
			{
				form: "SPOINK_NORMAL";
			},
		];
		pokemon: "SPOINK";
	}
>;
export type FormSettingsV0326PokemonGrumpig = FormSettings<
	"FORMS_V0326_POKEMON_GRUMPIG",
	{
		forms: [
			{
				form: "GRUMPIG_NORMAL";
			},
		];
		pokemon: "GRUMPIG";
	}
>;
export type FormSettingsV0327PokemonSpinda = FormSettings<
	"FORMS_V0327_POKEMON_SPINDA",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "SPINDA_00";
			},
			{
				assetBundleValue: 12;
				form: "SPINDA_01";
			},
			{
				assetBundleValue: 13;
				form: "SPINDA_02";
			},
			{
				assetBundleValue: 14;
				form: "SPINDA_03";
			},
			{
				assetBundleValue: 15;
				form: "SPINDA_04";
			},
			{
				assetBundleValue: 16;
				form: "SPINDA_05";
			},
			{
				assetBundleValue: 17;
				form: "SPINDA_06";
			},
			{
				assetBundleValue: 18;
				form: "SPINDA_07";
			},
			{
				assetBundleValue: 19;
				form: "SPINDA_08";
			},
			{
				assetBundleValue: 20;
				form: "SPINDA_09";
			},
			{
				assetBundleValue: 21;
				form: "SPINDA_10";
			},
			{
				assetBundleValue: 22;
				form: "SPINDA_11";
			},
			{
				assetBundleValue: 23;
				form: "SPINDA_12";
			},
			{
				assetBundleValue: 24;
				form: "SPINDA_13";
			},
			{
				assetBundleValue: 25;
				form: "SPINDA_14";
			},
			{
				assetBundleValue: 26;
				form: "SPINDA_15";
			},
			{
				assetBundleValue: 27;
				form: "SPINDA_16";
			},
			{
				assetBundleValue: 28;
				form: "SPINDA_17";
			},
			{
				assetBundleValue: 29;
				form: "SPINDA_18";
			},
			{
				assetBundleValue: 30;
				form: "SPINDA_19";
			},
		];
		pokemon: "SPINDA";
	}
>;
export type FormSettingsV0328PokemonTrapinch = FormSettings<
	"FORMS_V0328_POKEMON_TRAPINCH",
	{
		forms: [
			{
				form: "TRAPINCH_NORMAL";
			},
		];
		pokemon: "TRAPINCH";
	}
>;
export type FormSettingsV0329PokemonVibrava = FormSettings<
	"FORMS_V0329_POKEMON_VIBRAVA",
	{
		forms: [
			{
				form: "VIBRAVA_NORMAL";
			},
		];
		pokemon: "VIBRAVA";
	}
>;
export type FormSettingsV0330PokemonFlygon = FormSettings<
	"FORMS_V0330_POKEMON_FLYGON",
	{
		forms: [
			{
				form: "FLYGON_NORMAL";
			},
		];
		pokemon: "FLYGON";
	}
>;
export type FormSettingsV0331PokemonCacnea = FormSettings<
	"FORMS_V0331_POKEMON_CACNEA",
	{
		forms: [
			{
				form: "CACNEA_NORMAL";
			},
		];
		pokemon: "CACNEA";
	}
>;
export type FormSettingsV0332PokemonCacturne = FormSettings<
	"FORMS_V0332_POKEMON_CACTURNE",
	{
		forms: [
			{
				form: "CACTURNE_NORMAL";
			},
		];
		pokemon: "CACTURNE";
	}
>;
export type FormSettingsV0333PokemonSwablu = FormSettings<
	"FORMS_V0333_POKEMON_SWABLU",
	{
		forms: [
			{
				form: "SWABLU_NORMAL";
			},
		];
		pokemon: "SWABLU";
	}
>;
export type FormSettingsV0334PokemonAltaria = FormSettings<
	"FORMS_V0334_POKEMON_ALTARIA",
	{
		forms: [
			{
				form: "ALTARIA_NORMAL";
			},
		];
		pokemon: "ALTARIA";
	}
>;
export type FormSettingsV0335PokemonZangoose = FormSettings<
	"FORMS_V0335_POKEMON_ZANGOOSE",
	{
		forms: [
			{
				form: "ZANGOOSE_NORMAL";
			},
		];
		pokemon: "ZANGOOSE";
	}
>;
export type FormSettingsV0336PokemonSeviper = FormSettings<
	"FORMS_V0336_POKEMON_SEVIPER",
	{
		forms: [
			{
				form: "SEVIPER_NORMAL";
			},
		];
		pokemon: "SEVIPER";
	}
>;
export type FormSettingsV0337PokemonLunatone = FormSettings<
	"FORMS_V0337_POKEMON_LUNATONE",
	{
		forms: [
			{
				form: "LUNATONE_NORMAL";
			},
		];
		pokemon: "LUNATONE";
	}
>;
export type FormSettingsV0338PokemonSolrock = FormSettings<
	"FORMS_V0338_POKEMON_SOLROCK",
	{
		forms: [
			{
				form: "SOLROCK_NORMAL";
			},
		];
		pokemon: "SOLROCK";
	}
>;
export type FormSettingsV0339PokemonBarboach = FormSettings<
	"FORMS_V0339_POKEMON_BARBOACH",
	{
		forms: [
			{
				form: "BARBOACH_NORMAL";
			},
		];
		pokemon: "BARBOACH";
	}
>;
export type FormSettingsV0340PokemonWhiscash = FormSettings<
	"FORMS_V0340_POKEMON_WHISCASH",
	{
		forms: [
			{
				form: "WHISCASH_NORMAL";
			},
		];
		pokemon: "WHISCASH";
	}
>;
export type FormSettingsV0341PokemonCorphish = FormSettings<
	"FORMS_V0341_POKEMON_CORPHISH",
	{
		forms: [
			{
				form: "CORPHISH_NORMAL";
			},
		];
		pokemon: "CORPHISH";
	}
>;
export type FormSettingsV0342PokemonCrawdaunt = FormSettings<
	"FORMS_V0342_POKEMON_CRAWDAUNT",
	{
		forms: [
			{
				form: "CRAWDAUNT_NORMAL";
			},
		];
		pokemon: "CRAWDAUNT";
	}
>;
export type FormSettingsV0343PokemonBaltoy = FormSettings<
	"FORMS_V0343_POKEMON_BALTOY",
	{
		forms: [
			{
				form: "BALTOY_NORMAL";
			},
		];
		pokemon: "BALTOY";
	}
>;
export type FormSettingsV0344PokemonClaydol = FormSettings<
	"FORMS_V0344_POKEMON_CLAYDOL",
	{
		forms: [
			{
				form: "CLAYDOL_NORMAL";
			},
		];
		pokemon: "CLAYDOL";
	}
>;
export type FormSettingsV0345PokemonLileep = FormSettings<
	"FORMS_V0345_POKEMON_LILEEP",
	{
		forms: [
			{
				form: "LILEEP_NORMAL";
			},
		];
		pokemon: "LILEEP";
	}
>;
export type FormSettingsV0346PokemonCradily = FormSettings<
	"FORMS_V0346_POKEMON_CRADILY",
	{
		forms: [
			{
				form: "CRADILY_NORMAL";
			},
		];
		pokemon: "CRADILY";
	}
>;
export type FormSettingsV0347PokemonAnorith = FormSettings<
	"FORMS_V0347_POKEMON_ANORITH",
	{
		forms: [
			{
				form: "ANORITH_NORMAL";
			},
		];
		pokemon: "ANORITH";
	}
>;
export type FormSettingsV0348PokemonArmaldo = FormSettings<
	"FORMS_V0348_POKEMON_ARMALDO",
	{
		forms: [
			{
				form: "ARMALDO_NORMAL";
			},
		];
		pokemon: "ARMALDO";
	}
>;
export type FormSettingsV0349PokemonFeebas = FormSettings<
	"FORMS_V0349_POKEMON_FEEBAS",
	{
		forms: [
			{
				form: "FEEBAS_NORMAL";
			},
		];
		pokemon: "FEEBAS";
	}
>;
export type FormSettingsV0350PokemonMilotic = FormSettings<
	"FORMS_V0350_POKEMON_MILOTIC",
	{
		forms: [
			{
				form: "MILOTIC_NORMAL";
			},
		];
		pokemon: "MILOTIC";
	}
>;
export type FormSettingsV0351PokemonCastform = FormSettings<
	"FORMS_V0351_POKEMON_CASTFORM",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "CASTFORM_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "CASTFORM_SUNNY";
			},
			{
				assetBundleValue: 13;
				form: "CASTFORM_RAINY";
			},
			{
				assetBundleValue: 14;
				form: "CASTFORM_SNOWY";
			},
		];
		pokemon: "CASTFORM";
	}
>;
export type FormSettingsV0352PokemonKecleon = FormSettings<
	"FORMS_V0352_POKEMON_KECLEON",
	{
		forms: [
			{
				form: "KECLEON_NORMAL";
			},
		];
		pokemon: "KECLEON";
	}
>;
export type FormSettingsV0353PokemonShuppet = FormSettings<
	"FORMS_V0353_POKEMON_SHUPPET",
	{
		forms: [
			{
				form: "SHUPPET_NORMAL";
			},
		];
		pokemon: "SHUPPET";
	}
>;
export type FormSettingsV0354PokemonBanette = FormSettings<
	"FORMS_V0354_POKEMON_BANETTE",
	{
		forms: [
			{
				form: "BANETTE_NORMAL";
			},
		];
		pokemon: "BANETTE";
	}
>;
export type FormSettingsV0355PokemonDuskull = FormSettings<
	"FORMS_V0355_POKEMON_DUSKULL",
	{
		forms: [
			{
				form: "DUSKULL_NORMAL";
			},
		];
		pokemon: "DUSKULL";
	}
>;
export type FormSettingsV0356PokemonDusclops = FormSettings<
	"FORMS_V0356_POKEMON_DUSCLOPS",
	{
		forms: [
			{
				form: "DUSCLOPS_NORMAL";
			},
		];
		pokemon: "DUSCLOPS";
	}
>;
export type FormSettingsV0357PokemonTropius = FormSettings<
	"FORMS_V0357_POKEMON_TROPIUS",
	{
		forms: [
			{
				form: "TROPIUS_NORMAL";
			},
		];
		pokemon: "TROPIUS";
	}
>;
export type FormSettingsV0358PokemonChimecho = FormSettings<
	"FORMS_V0358_POKEMON_CHIMECHO",
	{
		forms: [
			{
				form: "CHIMECHO_NORMAL";
			},
		];
		pokemon: "CHIMECHO";
	}
>;
export type FormSettingsV0359PokemonAbsol = FormSettings<
	"FORMS_V0359_POKEMON_ABSOL",
	{
		forms: [
			{
				form: "ABSOL_NORMAL";
			},
		];
		pokemon: "ABSOL";
	}
>;
export type FormSettingsV0360PokemonWynaut = FormSettings<
	"FORMS_V0360_POKEMON_WYNAUT",
	{
		forms: [
			{
				form: "WYNAUT_NORMAL";
			},
		];
		pokemon: "WYNAUT";
	}
>;
export type FormSettingsV0361PokemonSnorunt = FormSettings<
	"FORMS_V0361_POKEMON_SNORUNT",
	{
		forms: [
			{
				form: "SNORUNT_NORMAL";
			},
		];
		pokemon: "SNORUNT";
	}
>;
export type FormSettingsV0362PokemonGlalie = FormSettings<
	"FORMS_V0362_POKEMON_GLALIE",
	{
		forms: [
			{
				form: "GLALIE_NORMAL";
			},
		];
		pokemon: "GLALIE";
	}
>;
export type FormSettingsV0363PokemonSpheal = FormSettings<
	"FORMS_V0363_POKEMON_SPHEAL",
	{
		forms: [
			{
				form: "SPHEAL_NORMAL";
			},
		];
		pokemon: "SPHEAL";
	}
>;
export type FormSettingsV0364PokemonSealeo = FormSettings<
	"FORMS_V0364_POKEMON_SEALEO",
	{
		forms: [
			{
				form: "SEALEO_NORMAL";
			},
		];
		pokemon: "SEALEO";
	}
>;
export type FormSettingsV0365PokemonWalrein = FormSettings<
	"FORMS_V0365_POKEMON_WALREIN",
	{
		forms: [
			{
				form: "WALREIN_NORMAL";
			},
		];
		pokemon: "WALREIN";
	}
>;
export type FormSettingsV0366PokemonClamperl = FormSettings<
	"FORMS_V0366_POKEMON_CLAMPERL",
	{
		forms: [
			{
				form: "CLAMPERL_NORMAL";
			},
		];
		pokemon: "CLAMPERL";
	}
>;
export type FormSettingsV0367PokemonHuntail = FormSettings<
	"FORMS_V0367_POKEMON_HUNTAIL",
	{
		forms: [
			{
				form: "HUNTAIL_NORMAL";
			},
		];
		pokemon: "HUNTAIL";
	}
>;
export type FormSettingsV0368PokemonGorebyss = FormSettings<
	"FORMS_V0368_POKEMON_GOREBYSS",
	{
		forms: [
			{
				form: "GOREBYSS_NORMAL";
			},
		];
		pokemon: "GOREBYSS";
	}
>;
export type FormSettingsV0369PokemonRelicanth = FormSettings<
	"FORMS_V0369_POKEMON_RELICANTH",
	{
		forms: [
			{
				form: "RELICANTH_NORMAL";
			},
		];
		pokemon: "RELICANTH";
	}
>;
export type FormSettingsV0370PokemonLuvdisc = FormSettings<
	"FORMS_V0370_POKEMON_LUVDISC",
	{
		forms: [
			{
				form: "LUVDISC_NORMAL";
			},
		];
		pokemon: "LUVDISC";
	}
>;
export type FormSettingsV0371PokemonBagon = FormSettings<
	"FORMS_V0371_POKEMON_BAGON",
	{
		forms: [
			{
				form: "BAGON_NORMAL";
			},
		];
		pokemon: "BAGON";
	}
>;
export type FormSettingsV0372PokemonShelgon = FormSettings<
	"FORMS_V0372_POKEMON_SHELGON",
	{
		forms: [
			{
				form: "SHELGON_NORMAL";
			},
		];
		pokemon: "SHELGON";
	}
>;
export type FormSettingsV0373PokemonSalamence = FormSettings<
	"FORMS_V0373_POKEMON_SALAMENCE",
	{
		forms: [
			{
				form: "SALAMENCE_NORMAL";
			},
		];
		pokemon: "SALAMENCE";
	}
>;
export type FormSettingsV0374PokemonBeldum = FormSettings<
	"FORMS_V0374_POKEMON_BELDUM",
	{
		forms: [
			{
				form: "BELDUM_NORMAL";
			},
		];
		pokemon: "BELDUM";
	}
>;
export type FormSettingsV0375PokemonMetang = FormSettings<
	"FORMS_V0375_POKEMON_METANG",
	{
		forms: [
			{
				form: "METANG_NORMAL";
			},
		];
		pokemon: "METANG";
	}
>;
export type FormSettingsV0376PokemonMetagross = FormSettings<
	"FORMS_V0376_POKEMON_METAGROSS",
	{
		forms: [
			{
				form: "METAGROSS_NORMAL";
			},
		];
		pokemon: "METAGROSS";
	}
>;
export type FormSettingsV0377PokemonRegirock = FormSettings<
	"FORMS_V0377_POKEMON_REGIROCK",
	{
		forms: [
			{
				form: "REGIROCK_NORMAL";
			},
		];
		pokemon: "REGIROCK";
	}
>;
export type FormSettingsV0378PokemonRegice = FormSettings<
	"FORMS_V0378_POKEMON_REGICE",
	{
		forms: [
			{
				form: "REGICE_NORMAL";
			},
		];
		pokemon: "REGICE";
	}
>;
export type FormSettingsV0379PokemonRegisteel = FormSettings<
	"FORMS_V0379_POKEMON_REGISTEEL",
	{
		forms: [
			{
				form: "REGISTEEL_NORMAL";
			},
		];
		pokemon: "REGISTEEL";
	}
>;
export type FormSettingsV0380PokemonLatias = FormSettings<
	"FORMS_V0380_POKEMON_LATIAS",
	{
		forms: [
			{
				form: "LATIAS_NORMAL";
			},
			{
				form: "LATIAS_S";
			},
		];
		pokemon: "LATIAS";
	}
>;
export type FormSettingsV0381PokemonLatios = FormSettings<
	"FORMS_V0381_POKEMON_LATIOS",
	{
		forms: [
			{
				form: "LATIOS_NORMAL";
			},
			{
				form: "LATIOS_S";
			},
		];
		pokemon: "LATIOS";
	}
>;
export type FormSettingsV0382PokemonKyogre = FormSettings<
	"FORMS_V0382_POKEMON_KYOGRE",
	{
		forms: [
			{
				form: "KYOGRE_NORMAL";
			},
		];
		pokemon: "KYOGRE";
	}
>;
export type FormSettingsV0383PokemonGroudon = FormSettings<
	"FORMS_V0383_POKEMON_GROUDON",
	{
		forms: [
			{
				form: "GROUDON_NORMAL";
			},
		];
		pokemon: "GROUDON";
	}
>;
export type FormSettingsV0384PokemonRayquaza = FormSettings<
	"FORMS_V0384_POKEMON_RAYQUAZA",
	{
		forms: [
			{
				form: "RAYQUAZA_NORMAL";
			},
		];
		pokemon: "RAYQUAZA";
	}
>;
export type FormSettingsV0385PokemonJirachi = FormSettings<
	"FORMS_V0385_POKEMON_JIRACHI",
	{
		forms: [
			{
				form: "JIRACHI_NORMAL";
			},
		];
		pokemon: "JIRACHI";
	}
>;
export type FormSettingsV0386PokemonDeoxys = FormSettings<
	"FORMS_V0386_POKEMON_DEOXYS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "DEOXYS_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "DEOXYS_ATTACK";
			},
			{
				assetBundleValue: 13;
				form: "DEOXYS_DEFENSE";
			},
			{
				assetBundleValue: 14;
				form: "DEOXYS_SPEED";
			},
		];
		pokemon: "DEOXYS";
	}
>;
export type FormSettingsV0387PokemonTurtwig = FormSettings<
	"FORMS_V0387_POKEMON_TURTWIG",
	{
		forms: [
			{
				form: "TURTWIG_NORMAL";
			},
		];
		pokemon: "TURTWIG";
	}
>;
export type FormSettingsV0388PokemonGrotle = FormSettings<
	"FORMS_V0388_POKEMON_GROTLE",
	{
		forms: [
			{
				form: "GROTLE_NORMAL";
			},
		];
		pokemon: "GROTLE";
	}
>;
export type FormSettingsV0389PokemonTorterra = FormSettings<
	"FORMS_V0389_POKEMON_TORTERRA",
	{
		forms: [
			{
				form: "TORTERRA_NORMAL";
			},
		];
		pokemon: "TORTERRA";
	}
>;
export type FormSettingsV0390PokemonChimchar = FormSettings<
	"FORMS_V0390_POKEMON_CHIMCHAR",
	{
		forms: [
			{
				form: "CHIMCHAR_NORMAL";
			},
		];
		pokemon: "CHIMCHAR";
	}
>;
export type FormSettingsV0391PokemonMonferno = FormSettings<
	"FORMS_V0391_POKEMON_MONFERNO",
	{
		forms: [
			{
				form: "MONFERNO_NORMAL";
			},
		];
		pokemon: "MONFERNO";
	}
>;
export type FormSettingsV0392PokemonInfernape = FormSettings<
	"FORMS_V0392_POKEMON_INFERNAPE",
	{
		forms: [
			{
				form: "INFERNAPE_NORMAL";
			},
		];
		pokemon: "INFERNAPE";
	}
>;
export type FormSettingsV0393PokemonPiplup = FormSettings<
	"FORMS_V0393_POKEMON_PIPLUP",
	{
		forms: [
			{
				form: "PIPLUP_NORMAL";
			},
		];
		pokemon: "PIPLUP";
	}
>;
export type FormSettingsV0394PokemonPrinplup = FormSettings<
	"FORMS_V0394_POKEMON_PRINPLUP",
	{
		forms: [
			{
				form: "PRINPLUP_NORMAL";
			},
		];
		pokemon: "PRINPLUP";
	}
>;
export type FormSettingsV0395PokemonEmpoleon = FormSettings<
	"FORMS_V0395_POKEMON_EMPOLEON",
	{
		forms: [
			{
				form: "EMPOLEON_NORMAL";
			},
		];
		pokemon: "EMPOLEON";
	}
>;
export type FormSettingsV0396PokemonStarly = FormSettings<
	"FORMS_V0396_POKEMON_STARLY",
	{
		forms: [
			{
				form: "STARLY_NORMAL";
			},
		];
		pokemon: "STARLY";
	}
>;
export type FormSettingsV0397PokemonStaravia = FormSettings<
	"FORMS_V0397_POKEMON_STARAVIA",
	{
		forms: [
			{
				form: "STARAVIA_NORMAL";
			},
		];
		pokemon: "STARAVIA";
	}
>;
export type FormSettingsV0398PokemonStaraptor = FormSettings<
	"FORMS_V0398_POKEMON_STARAPTOR",
	{
		forms: [
			{
				form: "STARAPTOR_NORMAL";
			},
		];
		pokemon: "STARAPTOR";
	}
>;
export type FormSettingsV0399PokemonBidoof = FormSettings<
	"FORMS_V0399_POKEMON_BIDOOF",
	{
		forms: [
			{
				form: "BIDOOF_NORMAL";
			},
		];
		pokemon: "BIDOOF";
	}
>;
export type FormSettingsV0400PokemonBibarel = FormSettings<
	"FORMS_V0400_POKEMON_BIBAREL",
	{
		forms: [
			{
				form: "BIBAREL_NORMAL";
			},
		];
		pokemon: "BIBAREL";
	}
>;
export type FormSettingsV0401PokemonKricketot = FormSettings<
	"FORMS_V0401_POKEMON_KRICKETOT",
	{
		forms: [
			{
				form: "KRICKETOT_NORMAL";
			},
		];
		pokemon: "KRICKETOT";
	}
>;
export type FormSettingsV0402PokemonKricketune = FormSettings<
	"FORMS_V0402_POKEMON_KRICKETUNE",
	{
		forms: [
			{
				form: "KRICKETUNE_NORMAL";
			},
		];
		pokemon: "KRICKETUNE";
	}
>;
export type FormSettingsV0403PokemonShinx = FormSettings<
	"FORMS_V0403_POKEMON_SHINX",
	{
		forms: [
			{
				form: "SHINX_NORMAL";
			},
		];
		pokemon: "SHINX";
	}
>;
export type FormSettingsV0404PokemonLuxio = FormSettings<
	"FORMS_V0404_POKEMON_LUXIO",
	{
		forms: [
			{
				form: "LUXIO_NORMAL";
			},
		];
		pokemon: "LUXIO";
	}
>;
export type FormSettingsV0405PokemonLuxray = FormSettings<
	"FORMS_V0405_POKEMON_LUXRAY",
	{
		forms: [
			{
				form: "LUXRAY_NORMAL";
			},
		];
		pokemon: "LUXRAY";
	}
>;
export type FormSettingsV0406PokemonBudew = FormSettings<
	"FORMS_V0406_POKEMON_BUDEW",
	{
		forms: [
			{
				form: "BUDEW_NORMAL";
			},
		];
		pokemon: "BUDEW";
	}
>;
export type FormSettingsV0407PokemonRoserade = FormSettings<
	"FORMS_V0407_POKEMON_ROSERADE",
	{
		forms: [
			{
				form: "ROSERADE_NORMAL";
			},
		];
		pokemon: "ROSERADE";
	}
>;
export type FormSettingsV0408PokemonCranidos = FormSettings<
	"FORMS_V0408_POKEMON_CRANIDOS",
	{
		forms: [
			{
				form: "CRANIDOS_NORMAL";
			},
		];
		pokemon: "CRANIDOS";
	}
>;
export type FormSettingsV0409PokemonRampardos = FormSettings<
	"FORMS_V0409_POKEMON_RAMPARDOS",
	{
		forms: [
			{
				form: "RAMPARDOS_NORMAL";
			},
		];
		pokemon: "RAMPARDOS";
	}
>;
export type FormSettingsV0410PokemonShieldon = FormSettings<
	"FORMS_V0410_POKEMON_SHIELDON",
	{
		forms: [
			{
				form: "SHIELDON_NORMAL";
			},
		];
		pokemon: "SHIELDON";
	}
>;
export type FormSettingsV0411PokemonBastiodon = FormSettings<
	"FORMS_V0411_POKEMON_BASTIODON",
	{
		forms: [
			{
				form: "BASTIODON_NORMAL";
			},
		];
		pokemon: "BASTIODON";
	}
>;
export type FormSettingsV0412PokemonBurmy = FormSettings<
	"FORMS_V0412_POKEMON_BURMY",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "BURMY_PLANT";
			},
			{
				assetBundleValue: 12;
				form: "BURMY_SANDY";
			},
			{
				assetBundleValue: 13;
				form: "BURMY_TRASH";
			},
		];
		pokemon: "BURMY";
	}
>;
export type FormSettingsV0413PokemonWormadam = FormSettings<
	"FORMS_V0413_POKEMON_WORMADAM",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "WORMADAM_PLANT";
			},
			{
				assetBundleValue: 12;
				form: "WORMADAM_SANDY";
			},
			{
				assetBundleValue: 13;
				form: "WORMADAM_TRASH";
			},
		];
		pokemon: "WORMADAM";
	}
>;
export type FormSettingsV0414PokemonMothim = FormSettings<
	"FORMS_V0414_POKEMON_MOTHIM",
	{
		forms: [
			{
				form: "MOTHIM_NORMAL";
			},
		];
		pokemon: "MOTHIM";
	}
>;
export type FormSettingsV0415PokemonCombee = FormSettings<
	"FORMS_V0415_POKEMON_COMBEE",
	{
		forms: [
			{
				form: "COMBEE_NORMAL";
			},
		];
		pokemon: "COMBEE";
	}
>;
export type FormSettingsV0416PokemonVespiquen = FormSettings<
	"FORMS_V0416_POKEMON_VESPIQUEN",
	{
		forms: [
			{
				form: "VESPIQUEN_NORMAL";
			},
		];
		pokemon: "VESPIQUEN";
	}
>;
export type FormSettingsV0417PokemonPachirisu = FormSettings<
	"FORMS_V0417_POKEMON_PACHIRISU",
	{
		forms: [
			{
				form: "PACHIRISU_NORMAL";
			},
		];
		pokemon: "PACHIRISU";
	}
>;
export type FormSettingsV0418PokemonBuizel = FormSettings<
	"FORMS_V0418_POKEMON_BUIZEL",
	{
		forms: [
			{
				form: "BUIZEL_NORMAL";
			},
		];
		pokemon: "BUIZEL";
	}
>;
export type FormSettingsV0419PokemonFloatzel = FormSettings<
	"FORMS_V0419_POKEMON_FLOATZEL",
	{
		forms: [
			{
				form: "FLOATZEL_NORMAL";
			},
		];
		pokemon: "FLOATZEL";
	}
>;
export type FormSettingsV0420PokemonCherubi = FormSettings<
	"FORMS_V0420_POKEMON_CHERUBI",
	{
		forms: [
			{
				form: "CHERUBI_NORMAL";
			},
		];
		pokemon: "CHERUBI";
	}
>;
export type FormSettingsV0421PokemonCherrim = FormSettings<
	"FORMS_V0421_POKEMON_CHERRIM",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "CHERRIM_OVERCAST";
			},
			{
				assetBundleValue: 12;
				form: "CHERRIM_SUNNY";
			},
		];
		pokemon: "CHERRIM";
	}
>;
export type FormSettingsV0422PokemonShellos = FormSettings<
	"FORMS_V0422_POKEMON_SHELLOS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "SHELLOS_WEST_SEA";
			},
			{
				assetBundleValue: 12;
				form: "SHELLOS_EAST_SEA";
			},
		];
		pokemon: "SHELLOS";
	}
>;
export type FormSettingsV0423PokemonGastrodon = FormSettings<
	"FORMS_V0423_POKEMON_GASTRODON",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "GASTRODON_WEST_SEA";
			},
			{
				assetBundleValue: 12;
				form: "GASTRODON_EAST_SEA";
			},
		];
		pokemon: "GASTRODON";
	}
>;
export type FormSettingsV0424PokemonAmbipom = FormSettings<
	"FORMS_V0424_POKEMON_AMBIPOM",
	{
		forms: [
			{
				form: "AMBIPOM_NORMAL";
			},
		];
		pokemon: "AMBIPOM";
	}
>;
export type FormSettingsV0425PokemonDrifloon = FormSettings<
	"FORMS_V0425_POKEMON_DRIFLOON",
	{
		forms: [
			{
				form: "DRIFLOON_NORMAL";
			},
		];
		pokemon: "DRIFLOON";
	}
>;
export type FormSettingsV0426PokemonDrifblim = FormSettings<
	"FORMS_V0426_POKEMON_DRIFBLIM",
	{
		forms: [
			{
				form: "DRIFBLIM_NORMAL";
			},
		];
		pokemon: "DRIFBLIM";
	}
>;
export type FormSettingsV0427PokemonBuneary = FormSettings<
	"FORMS_V0427_POKEMON_BUNEARY",
	{
		forms: [
			{
				form: "BUNEARY_NORMAL";
			},
		];
		pokemon: "BUNEARY";
	}
>;
export type FormSettingsV0428PokemonLopunny = FormSettings<
	"FORMS_V0428_POKEMON_LOPUNNY",
	{
		forms: [
			{
				form: "LOPUNNY_NORMAL";
			},
		];
		pokemon: "LOPUNNY";
	}
>;
export type FormSettingsV0429PokemonMismagius = FormSettings<
	"FORMS_V0429_POKEMON_MISMAGIUS",
	{
		forms: [
			{
				form: "MISMAGIUS_NORMAL";
			},
		];
		pokemon: "MISMAGIUS";
	}
>;
export type FormSettingsV0430PokemonHonchkrow = FormSettings<
	"FORMS_V0430_POKEMON_HONCHKROW",
	{
		forms: [
			{
				form: "HONCHKROW_NORMAL";
			},
		];
		pokemon: "HONCHKROW";
	}
>;
export type FormSettingsV0431PokemonGlameow = FormSettings<
	"FORMS_V0431_POKEMON_GLAMEOW",
	{
		forms: [
			{
				form: "GLAMEOW_NORMAL";
			},
		];
		pokemon: "GLAMEOW";
	}
>;
export type FormSettingsV0432PokemonPurugly = FormSettings<
	"FORMS_V0432_POKEMON_PURUGLY",
	{
		forms: [
			{
				form: "PURUGLY_NORMAL";
			},
		];
		pokemon: "PURUGLY";
	}
>;
export type FormSettingsV0433PokemonChingling = FormSettings<
	"FORMS_V0433_POKEMON_CHINGLING",
	{
		forms: [
			{
				form: "CHINGLING_NORMAL";
			},
		];
		pokemon: "CHINGLING";
	}
>;
export type FormSettingsV0434PokemonStunky = FormSettings<
	"FORMS_V0434_POKEMON_STUNKY",
	{
		forms: [
			{
				form: "STUNKY_NORMAL";
			},
		];
		pokemon: "STUNKY";
	}
>;
export type FormSettingsV0435PokemonSkuntank = FormSettings<
	"FORMS_V0435_POKEMON_SKUNTANK",
	{
		forms: [
			{
				form: "SKUNTANK_NORMAL";
			},
		];
		pokemon: "SKUNTANK";
	}
>;
export type FormSettingsV0436PokemonBronzor = FormSettings<
	"FORMS_V0436_POKEMON_BRONZOR",
	{
		forms: [
			{
				form: "BRONZOR_NORMAL";
			},
		];
		pokemon: "BRONZOR";
	}
>;
export type FormSettingsV0437PokemonBronzong = FormSettings<
	"FORMS_V0437_POKEMON_BRONZONG",
	{
		forms: [
			{
				form: "BRONZONG_NORMAL";
			},
		];
		pokemon: "BRONZONG";
	}
>;
export type FormSettingsV0438PokemonBonsly = FormSettings<
	"FORMS_V0438_POKEMON_BONSLY",
	{
		forms: [
			{
				form: "BONSLY_NORMAL";
			},
		];
		pokemon: "BONSLY";
	}
>;
export type FormSettingsV0439PokemonMimeJr = FormSettings<
	"FORMS_V0439_POKEMON_MIME_JR",
	{
		forms: [
			{
				form: "MIME_JR_NORMAL";
			},
		];
		pokemon: "MIME_JR";
	}
>;
export type FormSettingsV0440PokemonHappiny = FormSettings<
	"FORMS_V0440_POKEMON_HAPPINY",
	{
		forms: [
			{
				form: "HAPPINY_NORMAL";
			},
		];
		pokemon: "HAPPINY";
	}
>;
export type FormSettingsV0441PokemonChatot = FormSettings<
	"FORMS_V0441_POKEMON_CHATOT",
	{
		forms: [
			{
				form: "CHATOT_NORMAL";
			},
		];
		pokemon: "CHATOT";
	}
>;
export type FormSettingsV0442PokemonSpiritomb = FormSettings<
	"FORMS_V0442_POKEMON_SPIRITOMB",
	{
		forms: [
			{
				form: "SPIRITOMB_NORMAL";
			},
		];
		pokemon: "SPIRITOMB";
	}
>;
export type FormSettingsV0443PokemonGible = FormSettings<
	"FORMS_V0443_POKEMON_GIBLE",
	{
		forms: [
			{
				form: "GIBLE_NORMAL";
			},
		];
		pokemon: "GIBLE";
	}
>;
export type FormSettingsV0444PokemonGabite = FormSettings<
	"FORMS_V0444_POKEMON_GABITE",
	{
		forms: [
			{
				form: "GABITE_NORMAL";
			},
		];
		pokemon: "GABITE";
	}
>;
export type FormSettingsV0445PokemonGarchomp = FormSettings<
	"FORMS_V0445_POKEMON_GARCHOMP",
	{
		forms: [
			{
				form: "GARCHOMP_NORMAL";
			},
		];
		pokemon: "GARCHOMP";
	}
>;
export type FormSettingsV0446PokemonMunchlax = FormSettings<
	"FORMS_V0446_POKEMON_MUNCHLAX",
	{
		forms: [
			{
				form: "MUNCHLAX_NORMAL";
			},
		];
		pokemon: "MUNCHLAX";
	}
>;
export type FormSettingsV0447PokemonRiolu = FormSettings<
	"FORMS_V0447_POKEMON_RIOLU",
	{
		forms: [
			{
				form: "RIOLU_NORMAL";
			},
		];
		pokemon: "RIOLU";
	}
>;
export type FormSettingsV0448PokemonLucario = FormSettings<
	"FORMS_V0448_POKEMON_LUCARIO",
	{
		forms: [
			{
				form: "LUCARIO_NORMAL";
			},
		];
		pokemon: "LUCARIO";
	}
>;
export type FormSettingsV0449PokemonHippopotas = FormSettings<
	"FORMS_V0449_POKEMON_HIPPOPOTAS",
	{
		forms: [
			{
				form: "HIPPOPOTAS_NORMAL";
			},
		];
		pokemon: "HIPPOPOTAS";
	}
>;
export type FormSettingsV0450PokemonHippowdon = FormSettings<
	"FORMS_V0450_POKEMON_HIPPOWDON",
	{
		forms: [
			{
				form: "HIPPOWDON_NORMAL";
			},
		];
		pokemon: "HIPPOWDON";
	}
>;
export type FormSettingsV0451PokemonSkorupi = FormSettings<
	"FORMS_V0451_POKEMON_SKORUPI",
	{
		forms: [
			{
				form: "SKORUPI_NORMAL";
			},
		];
		pokemon: "SKORUPI";
	}
>;
export type FormSettingsV0452PokemonDrapion = FormSettings<
	"FORMS_V0452_POKEMON_DRAPION",
	{
		forms: [
			{
				form: "DRAPION_NORMAL";
			},
		];
		pokemon: "DRAPION";
	}
>;
export type FormSettingsV0453PokemonCroagunk = FormSettings<
	"FORMS_V0453_POKEMON_CROAGUNK",
	{
		forms: [
			{
				form: "CROAGUNK_NORMAL";
			},
		];
		pokemon: "CROAGUNK";
	}
>;
export type FormSettingsV0454PokemonToxicroak = FormSettings<
	"FORMS_V0454_POKEMON_TOXICROAK",
	{
		forms: [
			{
				form: "TOXICROAK_NORMAL";
			},
		];
		pokemon: "TOXICROAK";
	}
>;
export type FormSettingsV0455PokemonCarnivine = FormSettings<
	"FORMS_V0455_POKEMON_CARNIVINE",
	{
		forms: [
			{
				form: "CARNIVINE_NORMAL";
			},
		];
		pokemon: "CARNIVINE";
	}
>;
export type FormSettingsV0456PokemonFinneon = FormSettings<
	"FORMS_V0456_POKEMON_FINNEON",
	{
		forms: [
			{
				form: "FINNEON_NORMAL";
			},
		];
		pokemon: "FINNEON";
	}
>;
export type FormSettingsV0457PokemonLumineon = FormSettings<
	"FORMS_V0457_POKEMON_LUMINEON",
	{
		forms: [
			{
				form: "LUMINEON_NORMAL";
			},
		];
		pokemon: "LUMINEON";
	}
>;
export type FormSettingsV0458PokemonMantyke = FormSettings<
	"FORMS_V0458_POKEMON_MANTYKE",
	{
		forms: [
			{
				form: "MANTYKE_NORMAL";
			},
		];
		pokemon: "MANTYKE";
	}
>;
export type FormSettingsV0459PokemonSnover = FormSettings<
	"FORMS_V0459_POKEMON_SNOVER",
	{
		forms: [
			{
				form: "SNOVER_NORMAL";
			},
		];
		pokemon: "SNOVER";
	}
>;
export type FormSettingsV0460PokemonAbomasnow = FormSettings<
	"FORMS_V0460_POKEMON_ABOMASNOW",
	{
		forms: [
			{
				form: "ABOMASNOW_NORMAL";
			},
		];
		pokemon: "ABOMASNOW";
	}
>;
export type FormSettingsV0461PokemonWeavile = FormSettings<
	"FORMS_V0461_POKEMON_WEAVILE",
	{
		forms: [
			{
				form: "WEAVILE_NORMAL";
			},
		];
		pokemon: "WEAVILE";
	}
>;
export type FormSettingsV0462PokemonMagnezone = FormSettings<
	"FORMS_V0462_POKEMON_MAGNEZONE",
	{
		forms: [
			{
				form: "MAGNEZONE_NORMAL";
			},
		];
		pokemon: "MAGNEZONE";
	}
>;
export type FormSettingsV0463PokemonLickilicky = FormSettings<
	"FORMS_V0463_POKEMON_LICKILICKY",
	{
		forms: [
			{
				form: "LICKILICKY_NORMAL";
			},
		];
		pokemon: "LICKILICKY";
	}
>;
export type FormSettingsV0464PokemonRhyperior = FormSettings<
	"FORMS_V0464_POKEMON_RHYPERIOR",
	{
		forms: [
			{
				form: "RHYPERIOR_NORMAL";
			},
		];
		pokemon: "RHYPERIOR";
	}
>;
export type FormSettingsV0465PokemonTangrowth = FormSettings<
	"FORMS_V0465_POKEMON_TANGROWTH",
	{
		forms: [
			{
				form: "TANGROWTH_NORMAL";
			},
		];
		pokemon: "TANGROWTH";
	}
>;
export type FormSettingsV0466PokemonElectivire = FormSettings<
	"FORMS_V0466_POKEMON_ELECTIVIRE",
	{
		forms: [
			{
				form: "ELECTIVIRE_NORMAL";
			},
		];
		pokemon: "ELECTIVIRE";
	}
>;
export type FormSettingsV0467PokemonMagmortar = FormSettings<
	"FORMS_V0467_POKEMON_MAGMORTAR",
	{
		forms: [
			{
				form: "MAGMORTAR_NORMAL";
			},
		];
		pokemon: "MAGMORTAR";
	}
>;
export type FormSettingsV0468PokemonTogekiss = FormSettings<
	"FORMS_V0468_POKEMON_TOGEKISS",
	{
		forms: [
			{
				form: "TOGEKISS_NORMAL";
			},
		];
		pokemon: "TOGEKISS";
	}
>;
export type FormSettingsV0469PokemonYanmega = FormSettings<
	"FORMS_V0469_POKEMON_YANMEGA",
	{
		forms: [
			{
				form: "YANMEGA_NORMAL";
			},
		];
		pokemon: "YANMEGA";
	}
>;
export type FormSettingsV0470PokemonLeafeon = FormSettings<
	"FORMS_V0470_POKEMON_LEAFEON",
	{
		forms: [
			{
				form: "LEAFEON_NORMAL";
			},
		];
		pokemon: "LEAFEON";
	}
>;
export type FormSettingsV0471PokemonGlaceon = FormSettings<
	"FORMS_V0471_POKEMON_GLACEON",
	{
		forms: [
			{
				form: "GLACEON_NORMAL";
			},
		];
		pokemon: "GLACEON";
	}
>;
export type FormSettingsV0472PokemonGliscor = FormSettings<
	"FORMS_V0472_POKEMON_GLISCOR",
	{
		forms: [
			{
				form: "GLISCOR_NORMAL";
			},
		];
		pokemon: "GLISCOR";
	}
>;
export type FormSettingsV0473PokemonMamoswine = FormSettings<
	"FORMS_V0473_POKEMON_MAMOSWINE",
	{
		forms: [
			{
				form: "MAMOSWINE_NORMAL";
			},
		];
		pokemon: "MAMOSWINE";
	}
>;
export type FormSettingsV0474PokemonPorygonZ = FormSettings<
	"FORMS_V0474_POKEMON_PORYGON_Z",
	{
		forms: [
			{
				form: "PORYGON_Z_NORMAL";
			},
		];
		pokemon: "PORYGON_Z";
	}
>;
export type FormSettingsV0475PokemonGallade = FormSettings<
	"FORMS_V0475_POKEMON_GALLADE",
	{
		forms: [
			{
				form: "GALLADE_NORMAL";
			},
		];
		pokemon: "GALLADE";
	}
>;
export type FormSettingsV0476PokemonProbopass = FormSettings<
	"FORMS_V0476_POKEMON_PROBOPASS",
	{
		forms: [
			{
				form: "PROBOPASS_NORMAL";
			},
		];
		pokemon: "PROBOPASS";
	}
>;
export type FormSettingsV0477PokemonDusknoir = FormSettings<
	"FORMS_V0477_POKEMON_DUSKNOIR",
	{
		forms: [
			{
				form: "DUSKNOIR_NORMAL";
			},
		];
		pokemon: "DUSKNOIR";
	}
>;
export type FormSettingsV0478PokemonFroslass = FormSettings<
	"FORMS_V0478_POKEMON_FROSLASS",
	{
		forms: [
			{
				form: "FROSLASS_NORMAL";
			},
		];
		pokemon: "FROSLASS";
	}
>;
export type FormSettingsV0479PokemonRotom = FormSettings<
	"FORMS_V0479_POKEMON_ROTOM",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "ROTOM_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "ROTOM_HEAT";
			},
			{
				assetBundleValue: 13;
				form: "ROTOM_WASH";
			},
			{
				assetBundleValue: 14;
				form: "ROTOM_FROST";
			},
			{
				assetBundleValue: 15;
				form: "ROTOM_FAN";
			},
			{
				assetBundleValue: 16;
				form: "ROTOM_MOW";
			},
		];
		pokemon: "ROTOM";
	}
>;
export type FormSettingsV0480PokemonUxie = FormSettings<
	"FORMS_V0480_POKEMON_UXIE",
	{
		forms: [
			{
				form: "UXIE_NORMAL";
			},
		];
		pokemon: "UXIE";
	}
>;
export type FormSettingsV0481PokemonMesprit = FormSettings<
	"FORMS_V0481_POKEMON_MESPRIT",
	{
		forms: [
			{
				form: "MESPRIT_NORMAL";
			},
		];
		pokemon: "MESPRIT";
	}
>;
export type FormSettingsV0482PokemonAzelf = FormSettings<
	"FORMS_V0482_POKEMON_AZELF",
	{
		forms: [
			{
				form: "AZELF_NORMAL";
			},
		];
		pokemon: "AZELF";
	}
>;
export type FormSettingsV0483PokemonDialga = FormSettings<
	"FORMS_V0483_POKEMON_DIALGA",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "DIALGA_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "DIALGA_ORIGIN";
			},
		];
		pokemon: "DIALGA";
	}
>;
export type FormSettingsV0484PokemonPalkia = FormSettings<
	"FORMS_V0484_POKEMON_PALKIA",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "PALKIA_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "PALKIA_ORIGIN";
			},
		];
		pokemon: "PALKIA";
	}
>;
export type FormSettingsV0485PokemonHeatran = FormSettings<
	"FORMS_V0485_POKEMON_HEATRAN",
	{
		forms: [
			{
				form: "HEATRAN_NORMAL";
			},
		];
		pokemon: "HEATRAN";
	}
>;
export type FormSettingsV0486PokemonRegigigas = FormSettings<
	"FORMS_V0486_POKEMON_REGIGIGAS",
	{
		forms: [
			{
				form: "REGIGIGAS_NORMAL";
			},
		];
		pokemon: "REGIGIGAS";
	}
>;
export type FormSettingsV0487PokemonGiratina = FormSettings<
	"FORMS_V0487_POKEMON_GIRATINA",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "GIRATINA_ALTERED";
			},
			{
				assetBundleValue: 12;
				form: "GIRATINA_ORIGIN";
			},
		];
		pokemon: "GIRATINA";
	}
>;
export type FormSettingsV0488PokemonCresselia = FormSettings<
	"FORMS_V0488_POKEMON_CRESSELIA",
	{
		forms: [
			{
				form: "CRESSELIA_NORMAL";
			},
		];
		pokemon: "CRESSELIA";
	}
>;
export type FormSettingsV0489PokemonPhione = FormSettings<
	"FORMS_V0489_POKEMON_PHIONE",
	{
		forms: [
			{
				form: "PHIONE_NORMAL";
			},
		];
		pokemon: "PHIONE";
	}
>;
export type FormSettingsV0490PokemonManaphy = FormSettings<
	"FORMS_V0490_POKEMON_MANAPHY",
	{
		forms: [
			{
				form: "MANAPHY_NORMAL";
			},
		];
		pokemon: "MANAPHY";
	}
>;
export type FormSettingsV0491PokemonDarkrai = FormSettings<
	"FORMS_V0491_POKEMON_DARKRAI",
	{
		forms: [
			{
				form: "DARKRAI_NORMAL";
			},
		];
		pokemon: "DARKRAI";
	}
>;
export type FormSettingsV0492PokemonShaymin = FormSettings<
	"FORMS_V0492_POKEMON_SHAYMIN",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "SHAYMIN_LAND";
			},
			{
				assetBundleValue: 12;
				form: "SHAYMIN_SKY";
			},
		];
		pokemon: "SHAYMIN";
	}
>;
export type FormSettingsV0493PokemonArceus = FormSettings<
	"FORMS_V0493_POKEMON_ARCEUS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "ARCEUS_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "ARCEUS_FIGHTING";
			},
			{
				assetBundleValue: 13;
				form: "ARCEUS_FLYING";
			},
			{
				assetBundleValue: 14;
				form: "ARCEUS_POISON";
			},
			{
				assetBundleValue: 15;
				form: "ARCEUS_GROUND";
			},
			{
				assetBundleValue: 16;
				form: "ARCEUS_ROCK";
			},
			{
				assetBundleValue: 17;
				form: "ARCEUS_BUG";
			},
			{
				assetBundleValue: 18;
				form: "ARCEUS_GHOST";
			},
			{
				assetBundleValue: 19;
				form: "ARCEUS_STEEL";
			},
			{
				assetBundleValue: 20;
				form: "ARCEUS_FIRE";
			},
			{
				assetBundleValue: 21;
				form: "ARCEUS_WATER";
			},
			{
				assetBundleValue: 22;
				form: "ARCEUS_GRASS";
			},
			{
				assetBundleValue: 23;
				form: "ARCEUS_ELECTRIC";
			},
			{
				assetBundleValue: 24;
				form: "ARCEUS_PSYCHIC";
			},
			{
				assetBundleValue: 25;
				form: "ARCEUS_ICE";
			},
			{
				assetBundleValue: 26;
				form: "ARCEUS_DRAGON";
			},
			{
				assetBundleValue: 27;
				form: "ARCEUS_DARK";
			},
			{
				assetBundleValue: 28;
				form: "ARCEUS_FAIRY";
			},
		];
		pokemon: "ARCEUS";
	}
>;
export type FormSettingsV0494PokemonVictini = FormSettings<
	"FORMS_V0494_POKEMON_VICTINI",
	{
		forms: [
			{
				form: "VICTINI_NORMAL";
			},
		];
		pokemon: "VICTINI";
	}
>;
export type FormSettingsV0495PokemonSnivy = FormSettings<
	"FORMS_V0495_POKEMON_SNIVY",
	{
		forms: [
			{
				form: "SNIVY_NORMAL";
			},
		];
		pokemon: "SNIVY";
	}
>;
export type FormSettingsV0496PokemonServine = FormSettings<
	"FORMS_V0496_POKEMON_SERVINE",
	{
		forms: [
			{
				form: "SERVINE_NORMAL";
			},
		];
		pokemon: "SERVINE";
	}
>;
export type FormSettingsV0497PokemonSerperior = FormSettings<
	"FORMS_V0497_POKEMON_SERPERIOR",
	{
		forms: [
			{
				form: "SERPERIOR_NORMAL";
			},
		];
		pokemon: "SERPERIOR";
	}
>;
export type FormSettingsV0498PokemonTepig = FormSettings<
	"FORMS_V0498_POKEMON_TEPIG",
	{
		forms: [
			{
				form: "TEPIG_NORMAL";
			},
		];
		pokemon: "TEPIG";
	}
>;
export type FormSettingsV0499PokemonPignite = FormSettings<
	"FORMS_V0499_POKEMON_PIGNITE",
	{
		forms: [
			{
				form: "PIGNITE_NORMAL";
			},
		];
		pokemon: "PIGNITE";
	}
>;
export type FormSettingsV0500PokemonEmboar = FormSettings<
	"FORMS_V0500_POKEMON_EMBOAR",
	{
		forms: [
			{
				form: "EMBOAR_NORMAL";
			},
		];
		pokemon: "EMBOAR";
	}
>;
export type FormSettingsV0501PokemonOshawott = FormSettings<
	"FORMS_V0501_POKEMON_OSHAWOTT",
	{
		forms: [
			{
				form: "OSHAWOTT_NORMAL";
			},
		];
		pokemon: "OSHAWOTT";
	}
>;
export type FormSettingsV0502PokemonDewott = FormSettings<
	"FORMS_V0502_POKEMON_DEWOTT",
	{
		forms: [
			{
				form: "DEWOTT_NORMAL";
			},
		];
		pokemon: "DEWOTT";
	}
>;
export type FormSettingsV0503PokemonSamurott = FormSettings<
	"FORMS_V0503_POKEMON_SAMUROTT",
	{
		forms: [
			{
				form: "SAMUROTT_NORMAL";
			},
			{
				form: "SAMUROTT_HISUIAN";
			},
		];
		pokemon: "SAMUROTT";
	}
>;
export type FormSettingsV0504PokemonPatrat = FormSettings<
	"FORMS_V0504_POKEMON_PATRAT",
	{
		forms: [
			{
				form: "PATRAT_NORMAL";
			},
		];
		pokemon: "PATRAT";
	}
>;
export type FormSettingsV0505PokemonWatchog = FormSettings<
	"FORMS_V0505_POKEMON_WATCHOG",
	{
		forms: [
			{
				form: "WATCHOG_NORMAL";
			},
		];
		pokemon: "WATCHOG";
	}
>;
export type FormSettingsV0506PokemonLillipup = FormSettings<
	"FORMS_V0506_POKEMON_LILLIPUP",
	{
		forms: [
			{
				form: "LILLIPUP_NORMAL";
			},
		];
		pokemon: "LILLIPUP";
	}
>;
export type FormSettingsV0507PokemonHerdier = FormSettings<
	"FORMS_V0507_POKEMON_HERDIER",
	{
		forms: [
			{
				form: "HERDIER_NORMAL";
			},
		];
		pokemon: "HERDIER";
	}
>;
export type FormSettingsV0508PokemonStoutland = FormSettings<
	"FORMS_V0508_POKEMON_STOUTLAND",
	{
		forms: [
			{
				form: "STOUTLAND_NORMAL";
			},
		];
		pokemon: "STOUTLAND";
	}
>;
export type FormSettingsV0509PokemonPurrloin = FormSettings<
	"FORMS_V0509_POKEMON_PURRLOIN",
	{
		forms: [
			{
				form: "PURRLOIN_NORMAL";
			},
		];
		pokemon: "PURRLOIN";
	}
>;
export type FormSettingsV0510PokemonLiepard = FormSettings<
	"FORMS_V0510_POKEMON_LIEPARD",
	{
		forms: [
			{
				form: "LIEPARD_NORMAL";
			},
		];
		pokemon: "LIEPARD";
	}
>;
export type FormSettingsV0511PokemonPansage = FormSettings<
	"FORMS_V0511_POKEMON_PANSAGE",
	{
		forms: [
			{
				form: "PANSAGE_NORMAL";
			},
		];
		pokemon: "PANSAGE";
	}
>;
export type FormSettingsV0512PokemonSimisage = FormSettings<
	"FORMS_V0512_POKEMON_SIMISAGE",
	{
		forms: [
			{
				form: "SIMISAGE_NORMAL";
			},
		];
		pokemon: "SIMISAGE";
	}
>;
export type FormSettingsV0513PokemonPansear = FormSettings<
	"FORMS_V0513_POKEMON_PANSEAR",
	{
		forms: [
			{
				form: "PANSEAR_NORMAL";
			},
		];
		pokemon: "PANSEAR";
	}
>;
export type FormSettingsV0514PokemonSimisear = FormSettings<
	"FORMS_V0514_POKEMON_SIMISEAR",
	{
		forms: [
			{
				form: "SIMISEAR_NORMAL";
			},
		];
		pokemon: "SIMISEAR";
	}
>;
export type FormSettingsV0515PokemonPanpour = FormSettings<
	"FORMS_V0515_POKEMON_PANPOUR",
	{
		forms: [
			{
				form: "PANPOUR_NORMAL";
			},
		];
		pokemon: "PANPOUR";
	}
>;
export type FormSettingsV0516PokemonSimipour = FormSettings<
	"FORMS_V0516_POKEMON_SIMIPOUR",
	{
		forms: [
			{
				form: "SIMIPOUR_NORMAL";
			},
		];
		pokemon: "SIMIPOUR";
	}
>;
export type FormSettingsV0517PokemonMunna = FormSettings<
	"FORMS_V0517_POKEMON_MUNNA",
	{
		forms: [
			{
				form: "MUNNA_NORMAL";
			},
		];
		pokemon: "MUNNA";
	}
>;
export type FormSettingsV0518PokemonMusharna = FormSettings<
	"FORMS_V0518_POKEMON_MUSHARNA",
	{
		forms: [
			{
				form: "MUSHARNA_NORMAL";
			},
		];
		pokemon: "MUSHARNA";
	}
>;
export type FormSettingsV0519PokemonPidove = FormSettings<
	"FORMS_V0519_POKEMON_PIDOVE",
	{
		forms: [
			{
				form: "PIDOVE_NORMAL";
			},
		];
		pokemon: "PIDOVE";
	}
>;
export type FormSettingsV0520PokemonTranquill = FormSettings<
	"FORMS_V0520_POKEMON_TRANQUILL",
	{
		forms: [
			{
				form: "TRANQUILL_NORMAL";
			},
		];
		pokemon: "TRANQUILL";
	}
>;
export type FormSettingsV0521PokemonUnfezant = FormSettings<
	"FORMS_V0521_POKEMON_UNFEZANT",
	{
		forms: [
			{
				form: "UNFEZANT_NORMAL";
			},
		];
		pokemon: "UNFEZANT";
	}
>;
export type FormSettingsV0522PokemonBlitzle = FormSettings<
	"FORMS_V0522_POKEMON_BLITZLE",
	{
		forms: [
			{
				form: "BLITZLE_NORMAL";
			},
		];
		pokemon: "BLITZLE";
	}
>;
export type FormSettingsV0523PokemonZebstrika = FormSettings<
	"FORMS_V0523_POKEMON_ZEBSTRIKA",
	{
		forms: [
			{
				form: "ZEBSTRIKA_NORMAL";
			},
		];
		pokemon: "ZEBSTRIKA";
	}
>;
export type FormSettingsV0524PokemonRoggenrola = FormSettings<
	"FORMS_V0524_POKEMON_ROGGENROLA",
	{
		forms: [
			{
				form: "ROGGENROLA_NORMAL";
			},
		];
		pokemon: "ROGGENROLA";
	}
>;
export type FormSettingsV0525PokemonBoldore = FormSettings<
	"FORMS_V0525_POKEMON_BOLDORE",
	{
		forms: [
			{
				form: "BOLDORE_NORMAL";
			},
		];
		pokemon: "BOLDORE";
	}
>;
export type FormSettingsV0526PokemonGigalith = FormSettings<
	"FORMS_V0526_POKEMON_GIGALITH",
	{
		forms: [
			{
				form: "GIGALITH_NORMAL";
			},
		];
		pokemon: "GIGALITH";
	}
>;
export type FormSettingsV0527PokemonWoobat = FormSettings<
	"FORMS_V0527_POKEMON_WOOBAT",
	{
		forms: [
			{
				form: "WOOBAT_NORMAL";
			},
		];
		pokemon: "WOOBAT";
	}
>;
export type FormSettingsV0528PokemonSwoobat = FormSettings<
	"FORMS_V0528_POKEMON_SWOOBAT",
	{
		forms: [
			{
				form: "SWOOBAT_NORMAL";
			},
		];
		pokemon: "SWOOBAT";
	}
>;
export type FormSettingsV0529PokemonDrilbur = FormSettings<
	"FORMS_V0529_POKEMON_DRILBUR",
	{
		forms: [
			{
				form: "DRILBUR_NORMAL";
			},
		];
		pokemon: "DRILBUR";
	}
>;
export type FormSettingsV0530PokemonExcadrill = FormSettings<
	"FORMS_V0530_POKEMON_EXCADRILL",
	{
		forms: [
			{
				form: "EXCADRILL_NORMAL";
			},
		];
		pokemon: "EXCADRILL";
	}
>;
export type FormSettingsV0531PokemonAudino = FormSettings<
	"FORMS_V0531_POKEMON_AUDINO",
	{
		forms: [
			{
				form: "AUDINO_NORMAL";
			},
		];
		pokemon: "AUDINO";
	}
>;
export type FormSettingsV0532PokemonTimburr = FormSettings<
	"FORMS_V0532_POKEMON_TIMBURR",
	{
		forms: [
			{
				form: "TIMBURR_NORMAL";
			},
		];
		pokemon: "TIMBURR";
	}
>;
export type FormSettingsV0533PokemonGurdurr = FormSettings<
	"FORMS_V0533_POKEMON_GURDURR",
	{
		forms: [
			{
				form: "GURDURR_NORMAL";
			},
		];
		pokemon: "GURDURR";
	}
>;
export type FormSettingsV0534PokemonConkeldurr = FormSettings<
	"FORMS_V0534_POKEMON_CONKELDURR",
	{
		forms: [
			{
				form: "CONKELDURR_NORMAL";
			},
		];
		pokemon: "CONKELDURR";
	}
>;
export type FormSettingsV0535PokemonTympole = FormSettings<
	"FORMS_V0535_POKEMON_TYMPOLE",
	{
		forms: [
			{
				form: "TYMPOLE_NORMAL";
			},
		];
		pokemon: "TYMPOLE";
	}
>;
export type FormSettingsV0536PokemonPalpitoad = FormSettings<
	"FORMS_V0536_POKEMON_PALPITOAD",
	{
		forms: [
			{
				form: "PALPITOAD_NORMAL";
			},
		];
		pokemon: "PALPITOAD";
	}
>;
export type FormSettingsV0537PokemonSeismitoad = FormSettings<
	"FORMS_V0537_POKEMON_SEISMITOAD",
	{
		forms: [
			{
				form: "SEISMITOAD_NORMAL";
			},
		];
		pokemon: "SEISMITOAD";
	}
>;
export type FormSettingsV0538PokemonThroh = FormSettings<
	"FORMS_V0538_POKEMON_THROH",
	{
		forms: [
			{
				form: "THROH_NORMAL";
			},
		];
		pokemon: "THROH";
	}
>;
export type FormSettingsV0539PokemonSawk = FormSettings<
	"FORMS_V0539_POKEMON_SAWK",
	{
		forms: [
			{
				form: "SAWK_NORMAL";
			},
		];
		pokemon: "SAWK";
	}
>;
export type FormSettingsV0540PokemonSewaddle = FormSettings<
	"FORMS_V0540_POKEMON_SEWADDLE",
	{
		forms: [
			{
				form: "SEWADDLE_NORMAL";
			},
		];
		pokemon: "SEWADDLE";
	}
>;
export type FormSettingsV0541PokemonSwadloon = FormSettings<
	"FORMS_V0541_POKEMON_SWADLOON",
	{
		forms: [
			{
				form: "SWADLOON_NORMAL";
			},
		];
		pokemon: "SWADLOON";
	}
>;
export type FormSettingsV0542PokemonLeavanny = FormSettings<
	"FORMS_V0542_POKEMON_LEAVANNY",
	{
		forms: [
			{
				form: "LEAVANNY_NORMAL";
			},
		];
		pokemon: "LEAVANNY";
	}
>;
export type FormSettingsV0543PokemonVenipede = FormSettings<
	"FORMS_V0543_POKEMON_VENIPEDE",
	{
		forms: [
			{
				form: "VENIPEDE_NORMAL";
			},
		];
		pokemon: "VENIPEDE";
	}
>;
export type FormSettingsV0544PokemonWhirlipede = FormSettings<
	"FORMS_V0544_POKEMON_WHIRLIPEDE",
	{
		forms: [
			{
				form: "WHIRLIPEDE_NORMAL";
			},
		];
		pokemon: "WHIRLIPEDE";
	}
>;
export type FormSettingsV0545PokemonScolipede = FormSettings<
	"FORMS_V0545_POKEMON_SCOLIPEDE",
	{
		forms: [
			{
				form: "SCOLIPEDE_NORMAL";
			},
		];
		pokemon: "SCOLIPEDE";
	}
>;
export type FormSettingsV0546PokemonCottonee = FormSettings<
	"FORMS_V0546_POKEMON_COTTONEE",
	{
		forms: [
			{
				form: "COTTONEE_NORMAL";
			},
		];
		pokemon: "COTTONEE";
	}
>;
export type FormSettingsV0547PokemonWhimsicott = FormSettings<
	"FORMS_V0547_POKEMON_WHIMSICOTT",
	{
		forms: [
			{
				form: "WHIMSICOTT_NORMAL";
			},
		];
		pokemon: "WHIMSICOTT";
	}
>;
export type FormSettingsV0548PokemonPetilil = FormSettings<
	"FORMS_V0548_POKEMON_PETILIL",
	{
		forms: [
			{
				form: "PETILIL_NORMAL";
			},
		];
		pokemon: "PETILIL";
	}
>;
export type FormSettingsV0549PokemonLilligant = FormSettings<
	"FORMS_V0549_POKEMON_LILLIGANT",
	{
		forms: [
			{
				form: "LILLIGANT_NORMAL";
			},
			{
				form: "LILLIGANT_HISUIAN";
			},
		];
		pokemon: "LILLIGANT";
	}
>;
export type FormSettingsV0550PokemonBasculin = FormSettings<
	"FORMS_V0550_POKEMON_BASCULIN",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "BASCULIN_RED_STRIPED";
			},
			{
				assetBundleValue: 12;
				form: "BASCULIN_BLUE_STRIPED";
			},
			{
				form: "BASCULIN_WHITE_STRIPED";
			},
		];
		pokemon: "BASCULIN";
	}
>;
export type FormSettingsV0551PokemonSandile = FormSettings<
	"FORMS_V0551_POKEMON_SANDILE",
	{
		forms: [
			{
				form: "SANDILE_NORMAL";
			},
		];
		pokemon: "SANDILE";
	}
>;
export type FormSettingsV0552PokemonKrokorok = FormSettings<
	"FORMS_V0552_POKEMON_KROKOROK",
	{
		forms: [
			{
				form: "KROKOROK_NORMAL";
			},
		];
		pokemon: "KROKOROK";
	}
>;
export type FormSettingsV0553PokemonKrookodile = FormSettings<
	"FORMS_V0553_POKEMON_KROOKODILE",
	{
		forms: [
			{
				form: "KROOKODILE_NORMAL";
			},
		];
		pokemon: "KROOKODILE";
	}
>;
export type FormSettingsV0554PokemonDarumaka = FormSettings<
	"FORMS_V0554_POKEMON_DARUMAKA",
	{
		forms: [
			{
				form: "DARUMAKA_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "DARUMAKA_GALARIAN";
			},
		];
		pokemon: "DARUMAKA";
	}
>;
export type FormSettingsV0555PokemonDarmanitan = FormSettings<
	"FORMS_V0555_POKEMON_DARMANITAN",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "DARMANITAN_STANDARD";
			},
			{
				assetBundleValue: 12;
				form: "DARMANITAN_ZEN";
			},
			{
				assetBundleValue: 31;
				form: "DARMANITAN_GALARIAN_STANDARD";
			},
			{
				assetBundleValue: 32;
				form: "DARMANITAN_GALARIAN_ZEN";
			},
		];
		pokemon: "DARMANITAN";
	}
>;
export type FormSettingsV0556PokemonMaractus = FormSettings<
	"FORMS_V0556_POKEMON_MARACTUS",
	{
		forms: [
			{
				form: "MARACTUS_NORMAL";
			},
		];
		pokemon: "MARACTUS";
	}
>;
export type FormSettingsV0557PokemonDwebble = FormSettings<
	"FORMS_V0557_POKEMON_DWEBBLE",
	{
		forms: [
			{
				form: "DWEBBLE_NORMAL";
			},
		];
		pokemon: "DWEBBLE";
	}
>;
export type FormSettingsV0558PokemonCrustle = FormSettings<
	"FORMS_V0558_POKEMON_CRUSTLE",
	{
		forms: [
			{
				form: "CRUSTLE_NORMAL";
			},
		];
		pokemon: "CRUSTLE";
	}
>;
export type FormSettingsV0559PokemonScraggy = FormSettings<
	"FORMS_V0559_POKEMON_SCRAGGY",
	{
		forms: [
			{
				form: "SCRAGGY_NORMAL";
			},
		];
		pokemon: "SCRAGGY";
	}
>;
export type FormSettingsV0560PokemonScrafty = FormSettings<
	"FORMS_V0560_POKEMON_SCRAFTY",
	{
		forms: [
			{
				form: "SCRAFTY_NORMAL";
			},
		];
		pokemon: "SCRAFTY";
	}
>;
export type FormSettingsV0561PokemonSigilyph = FormSettings<
	"FORMS_V0561_POKEMON_SIGILYPH",
	{
		forms: [
			{
				form: "SIGILYPH_NORMAL";
			},
		];
		pokemon: "SIGILYPH";
	}
>;
export type FormSettingsV0562PokemonYamask = FormSettings<
	"FORMS_V0562_POKEMON_YAMASK",
	{
		forms: [
			{
				form: "YAMASK_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "YAMASK_GALARIAN";
			},
		];
		pokemon: "YAMASK";
	}
>;
export type FormSettingsV0563PokemonCofagrigus = FormSettings<
	"FORMS_V0563_POKEMON_COFAGRIGUS",
	{
		forms: [
			{
				form: "COFAGRIGUS_NORMAL";
			},
		];
		pokemon: "COFAGRIGUS";
	}
>;
export type FormSettingsV0564PokemonTirtouga = FormSettings<
	"FORMS_V0564_POKEMON_TIRTOUGA",
	{
		forms: [
			{
				form: "TIRTOUGA_NORMAL";
			},
		];
		pokemon: "TIRTOUGA";
	}
>;
export type FormSettingsV0565PokemonCarracosta = FormSettings<
	"FORMS_V0565_POKEMON_CARRACOSTA",
	{
		forms: [
			{
				form: "CARRACOSTA_NORMAL";
			},
		];
		pokemon: "CARRACOSTA";
	}
>;
export type FormSettingsV0566PokemonArchen = FormSettings<
	"FORMS_V0566_POKEMON_ARCHEN",
	{
		forms: [
			{
				form: "ARCHEN_NORMAL";
			},
		];
		pokemon: "ARCHEN";
	}
>;
export type FormSettingsV0567PokemonArcheops = FormSettings<
	"FORMS_V0567_POKEMON_ARCHEOPS",
	{
		forms: [
			{
				form: "ARCHEOPS_NORMAL";
			},
		];
		pokemon: "ARCHEOPS";
	}
>;
export type FormSettingsV0568PokemonTrubbish = FormSettings<
	"FORMS_V0568_POKEMON_TRUBBISH",
	{
		forms: [
			{
				form: "TRUBBISH_NORMAL";
			},
		];
		pokemon: "TRUBBISH";
	}
>;
export type FormSettingsV0569PokemonGarbodor = FormSettings<
	"FORMS_V0569_POKEMON_GARBODOR",
	{
		forms: [
			{
				form: "GARBODOR_NORMAL";
			},
		];
		pokemon: "GARBODOR";
	}
>;
export type FormSettingsV0570PokemonZorua = FormSettings<
	"FORMS_V0570_POKEMON_ZORUA",
	{
		forms: [
			{
				form: "ZORUA_NORMAL";
			},
			{
				form: "ZORUA_HISUIAN";
			},
		];
		pokemon: "ZORUA";
	}
>;
export type FormSettingsV0571PokemonZoroark = FormSettings<
	"FORMS_V0571_POKEMON_ZOROARK",
	{
		forms: [
			{
				form: "ZOROARK_NORMAL";
			},
			{
				form: "ZOROARK_HISUIAN";
			},
		];
		pokemon: "ZOROARK";
	}
>;
export type FormSettingsV0572PokemonMinccino = FormSettings<
	"FORMS_V0572_POKEMON_MINCCINO",
	{
		forms: [
			{
				form: "MINCCINO_NORMAL";
			},
		];
		pokemon: "MINCCINO";
	}
>;
export type FormSettingsV0573PokemonCinccino = FormSettings<
	"FORMS_V0573_POKEMON_CINCCINO",
	{
		forms: [
			{
				form: "CINCCINO_NORMAL";
			},
		];
		pokemon: "CINCCINO";
	}
>;
export type FormSettingsV0574PokemonGothita = FormSettings<
	"FORMS_V0574_POKEMON_GOTHITA",
	{
		forms: [
			{
				form: "GOTHITA_NORMAL";
			},
		];
		pokemon: "GOTHITA";
	}
>;
export type FormSettingsV0575PokemonGothorita = FormSettings<
	"FORMS_V0575_POKEMON_GOTHORITA",
	{
		forms: [
			{
				form: "GOTHORITA_NORMAL";
			},
		];
		pokemon: "GOTHORITA";
	}
>;
export type FormSettingsV0576PokemonGothitelle = FormSettings<
	"FORMS_V0576_POKEMON_GOTHITELLE",
	{
		forms: [
			{
				form: "GOTHITELLE_NORMAL";
			},
		];
		pokemon: "GOTHITELLE";
	}
>;
export type FormSettingsV0577PokemonSolosis = FormSettings<
	"FORMS_V0577_POKEMON_SOLOSIS",
	{
		forms: [
			{
				form: "SOLOSIS_NORMAL";
			},
		];
		pokemon: "SOLOSIS";
	}
>;
export type FormSettingsV0578PokemonDuosion = FormSettings<
	"FORMS_V0578_POKEMON_DUOSION",
	{
		forms: [
			{
				form: "DUOSION_NORMAL";
			},
		];
		pokemon: "DUOSION";
	}
>;
export type FormSettingsV0579PokemonReuniclus = FormSettings<
	"FORMS_V0579_POKEMON_REUNICLUS",
	{
		forms: [
			{
				form: "REUNICLUS_NORMAL";
			},
		];
		pokemon: "REUNICLUS";
	}
>;
export type FormSettingsV0580PokemonDucklett = FormSettings<
	"FORMS_V0580_POKEMON_DUCKLETT",
	{
		forms: [
			{
				form: "DUCKLETT_NORMAL";
			},
		];
		pokemon: "DUCKLETT";
	}
>;
export type FormSettingsV0581PokemonSwanna = FormSettings<
	"FORMS_V0581_POKEMON_SWANNA",
	{
		forms: [
			{
				form: "SWANNA_NORMAL";
			},
		];
		pokemon: "SWANNA";
	}
>;
export type FormSettingsV0582PokemonVanillite = FormSettings<
	"FORMS_V0582_POKEMON_VANILLITE",
	{
		forms: [
			{
				form: "VANILLITE_NORMAL";
			},
		];
		pokemon: "VANILLITE";
	}
>;
export type FormSettingsV0583PokemonVanillish = FormSettings<
	"FORMS_V0583_POKEMON_VANILLISH",
	{
		forms: [
			{
				form: "VANILLISH_NORMAL";
			},
		];
		pokemon: "VANILLISH";
	}
>;
export type FormSettingsV0584PokemonVanilluxe = FormSettings<
	"FORMS_V0584_POKEMON_VANILLUXE",
	{
		forms: [
			{
				form: "VANILLUXE_NORMAL";
			},
		];
		pokemon: "VANILLUXE";
	}
>;
export type FormSettingsV0585PokemonDeerling = FormSettings<
	"FORMS_V0585_POKEMON_DEERLING",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "DEERLING_SPRING";
			},
			{
				assetBundleValue: 12;
				form: "DEERLING_SUMMER";
			},
			{
				assetBundleValue: 13;
				form: "DEERLING_AUTUMN";
			},
			{
				assetBundleValue: 14;
				form: "DEERLING_WINTER";
			},
		];
		pokemon: "DEERLING";
	}
>;
export type FormSettingsV0586PokemonSawsbuck = FormSettings<
	"FORMS_V0586_POKEMON_SAWSBUCK",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "SAWSBUCK_SPRING";
			},
			{
				assetBundleValue: 12;
				form: "SAWSBUCK_SUMMER";
			},
			{
				assetBundleValue: 13;
				form: "SAWSBUCK_AUTUMN";
			},
			{
				assetBundleValue: 14;
				form: "SAWSBUCK_WINTER";
			},
		];
		pokemon: "SAWSBUCK";
	}
>;
export type FormSettingsV0587PokemonEmolga = FormSettings<
	"FORMS_V0587_POKEMON_EMOLGA",
	{
		forms: [
			{
				form: "EMOLGA_NORMAL";
			},
		];
		pokemon: "EMOLGA";
	}
>;
export type FormSettingsV0588PokemonKarrablast = FormSettings<
	"FORMS_V0588_POKEMON_KARRABLAST",
	{
		forms: [
			{
				form: "KARRABLAST_NORMAL";
			},
		];
		pokemon: "KARRABLAST";
	}
>;
export type FormSettingsV0589PokemonEscavalier = FormSettings<
	"FORMS_V0589_POKEMON_ESCAVALIER",
	{
		forms: [
			{
				form: "ESCAVALIER_NORMAL";
			},
		];
		pokemon: "ESCAVALIER";
	}
>;
export type FormSettingsV0590PokemonFoongus = FormSettings<
	"FORMS_V0590_POKEMON_FOONGUS",
	{
		forms: [
			{
				form: "FOONGUS_NORMAL";
			},
		];
		pokemon: "FOONGUS";
	}
>;
export type FormSettingsV0591PokemonAmoonguss = FormSettings<
	"FORMS_V0591_POKEMON_AMOONGUSS",
	{
		forms: [
			{
				form: "AMOONGUSS_NORMAL";
			},
		];
		pokemon: "AMOONGUSS";
	}
>;
export type FormSettingsV0592PokemonFrillish = FormSettings<
	"FORMS_V0592_POKEMON_FRILLISH",
	{
		forms: [
			{
				form: "FRILLISH_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "FRILLISH_FEMALE";
			},
		];
		pokemon: "FRILLISH";
	}
>;
export type FormSettingsV0593PokemonJellicent = FormSettings<
	"FORMS_V0593_POKEMON_JELLICENT",
	{
		forms: [
			{
				form: "JELLICENT_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "JELLICENT_FEMALE";
			},
		];
		pokemon: "JELLICENT";
	}
>;
export type FormSettingsV0594PokemonAlomomola = FormSettings<
	"FORMS_V0594_POKEMON_ALOMOMOLA",
	{
		forms: [
			{
				form: "ALOMOMOLA_NORMAL";
			},
		];
		pokemon: "ALOMOMOLA";
	}
>;
export type FormSettingsV0595PokemonJoltik = FormSettings<
	"FORMS_V0595_POKEMON_JOLTIK",
	{
		forms: [
			{
				form: "JOLTIK_NORMAL";
			},
		];
		pokemon: "JOLTIK";
	}
>;
export type FormSettingsV0596PokemonGalvantula = FormSettings<
	"FORMS_V0596_POKEMON_GALVANTULA",
	{
		forms: [
			{
				form: "GALVANTULA_NORMAL";
			},
		];
		pokemon: "GALVANTULA";
	}
>;
export type FormSettingsV0597PokemonFerroseed = FormSettings<
	"FORMS_V0597_POKEMON_FERROSEED",
	{
		forms: [
			{
				form: "FERROSEED_NORMAL";
			},
		];
		pokemon: "FERROSEED";
	}
>;
export type FormSettingsV0598PokemonFerrothorn = FormSettings<
	"FORMS_V0598_POKEMON_FERROTHORN",
	{
		forms: [
			{
				form: "FERROTHORN_NORMAL";
			},
		];
		pokemon: "FERROTHORN";
	}
>;
export type FormSettingsV0599PokemonKlink = FormSettings<
	"FORMS_V0599_POKEMON_KLINK",
	{
		forms: [
			{
				form: "KLINK_NORMAL";
			},
		];
		pokemon: "KLINK";
	}
>;
export type FormSettingsV0600PokemonKlang = FormSettings<
	"FORMS_V0600_POKEMON_KLANG",
	{
		forms: [
			{
				form: "KLANG_NORMAL";
			},
		];
		pokemon: "KLANG";
	}
>;
export type FormSettingsV0601PokemonKlinklang = FormSettings<
	"FORMS_V0601_POKEMON_KLINKLANG",
	{
		forms: [
			{
				form: "KLINKLANG_NORMAL";
			},
		];
		pokemon: "KLINKLANG";
	}
>;
export type FormSettingsV0602PokemonTynamo = FormSettings<
	"FORMS_V0602_POKEMON_TYNAMO",
	{
		forms: [
			{
				form: "TYNAMO_NORMAL";
			},
		];
		pokemon: "TYNAMO";
	}
>;
export type FormSettingsV0603PokemonEelektrik = FormSettings<
	"FORMS_V0603_POKEMON_EELEKTRIK",
	{
		forms: [
			{
				form: "EELEKTRIK_NORMAL";
			},
		];
		pokemon: "EELEKTRIK";
	}
>;
export type FormSettingsV0604PokemonEelektross = FormSettings<
	"FORMS_V0604_POKEMON_EELEKTROSS",
	{
		forms: [
			{
				form: "EELEKTROSS_NORMAL";
			},
		];
		pokemon: "EELEKTROSS";
	}
>;
export type FormSettingsV0605PokemonElgyem = FormSettings<
	"FORMS_V0605_POKEMON_ELGYEM",
	{
		forms: [
			{
				form: "ELGYEM_NORMAL";
			},
		];
		pokemon: "ELGYEM";
	}
>;
export type FormSettingsV0606PokemonBeheeyem = FormSettings<
	"FORMS_V0606_POKEMON_BEHEEYEM",
	{
		forms: [
			{
				form: "BEHEEYEM_NORMAL";
			},
		];
		pokemon: "BEHEEYEM";
	}
>;
export type FormSettingsV0607PokemonLitwick = FormSettings<
	"FORMS_V0607_POKEMON_LITWICK",
	{
		forms: [
			{
				form: "LITWICK_NORMAL";
			},
		];
		pokemon: "LITWICK";
	}
>;
export type FormSettingsV0608PokemonLampent = FormSettings<
	"FORMS_V0608_POKEMON_LAMPENT",
	{
		forms: [
			{
				form: "LAMPENT_NORMAL";
			},
		];
		pokemon: "LAMPENT";
	}
>;
export type FormSettingsV0609PokemonChandelure = FormSettings<
	"FORMS_V0609_POKEMON_CHANDELURE",
	{
		forms: [
			{
				form: "CHANDELURE_NORMAL";
			},
		];
		pokemon: "CHANDELURE";
	}
>;
export type FormSettingsV0610PokemonAxew = FormSettings<
	"FORMS_V0610_POKEMON_AXEW",
	{
		forms: [
			{
				form: "AXEW_NORMAL";
			},
		];
		pokemon: "AXEW";
	}
>;
export type FormSettingsV0611PokemonFraxure = FormSettings<
	"FORMS_V0611_POKEMON_FRAXURE",
	{
		forms: [
			{
				form: "FRAXURE_NORMAL";
			},
		];
		pokemon: "FRAXURE";
	}
>;
export type FormSettingsV0612PokemonHaxorus = FormSettings<
	"FORMS_V0612_POKEMON_HAXORUS",
	{
		forms: [
			{
				form: "HAXORUS_NORMAL";
			},
		];
		pokemon: "HAXORUS";
	}
>;
export type FormSettingsV0613PokemonCubchoo = FormSettings<
	"FORMS_V0613_POKEMON_CUBCHOO",
	{
		forms: [
			{
				form: "CUBCHOO_NORMAL";
			},
			{
				assetBundleSuffix: "pm0613_00_pgo_winter2020";
				form: "CUBCHOO_WINTER_2020";
				isCostume: true;
			},
		];
		pokemon: "CUBCHOO";
	}
>;
export type FormSettingsV0614PokemonBeartic = FormSettings<
	"FORMS_V0614_POKEMON_BEARTIC",
	{
		forms: [
			{
				form: "BEARTIC_NORMAL";
			},
			{
				assetBundleSuffix: "pm0614_00_pgo_winter2020";
				form: "BEARTIC_WINTER_2020";
				isCostume: true;
			},
		];
		pokemon: "BEARTIC";
	}
>;
export type FormSettingsV0615PokemonCryogonal = FormSettings<
	"FORMS_V0615_POKEMON_CRYOGONAL",
	{
		forms: [
			{
				form: "CRYOGONAL_NORMAL";
			},
		];
		pokemon: "CRYOGONAL";
	}
>;
export type FormSettingsV0616PokemonShelmet = FormSettings<
	"FORMS_V0616_POKEMON_SHELMET",
	{
		forms: [
			{
				form: "SHELMET_NORMAL";
			},
		];
		pokemon: "SHELMET";
	}
>;
export type FormSettingsV0617PokemonAccelgor = FormSettings<
	"FORMS_V0617_POKEMON_ACCELGOR",
	{
		forms: [
			{
				form: "ACCELGOR_NORMAL";
			},
		];
		pokemon: "ACCELGOR";
	}
>;
export type FormSettingsV0618PokemonStunfisk = FormSettings<
	"FORMS_V0618_POKEMON_STUNFISK",
	{
		forms: [
			{
				form: "STUNFISK_NORMAL";
			},
			{
				assetBundleValue: 31;
				form: "STUNFISK_GALARIAN";
			},
		];
		pokemon: "STUNFISK";
	}
>;
export type FormSettingsV0619PokemonMienfoo = FormSettings<
	"FORMS_V0619_POKEMON_MIENFOO",
	{
		forms: [
			{
				form: "MIENFOO_NORMAL";
			},
		];
		pokemon: "MIENFOO";
	}
>;
export type FormSettingsV0620PokemonMienshao = FormSettings<
	"FORMS_V0620_POKEMON_MIENSHAO",
	{
		forms: [
			{
				form: "MIENSHAO_NORMAL";
			},
		];
		pokemon: "MIENSHAO";
	}
>;
export type FormSettingsV0621PokemonDruddigon = FormSettings<
	"FORMS_V0621_POKEMON_DRUDDIGON",
	{
		forms: [
			{
				form: "DRUDDIGON_NORMAL";
			},
		];
		pokemon: "DRUDDIGON";
	}
>;
export type FormSettingsV0622PokemonGolett = FormSettings<
	"FORMS_V0622_POKEMON_GOLETT",
	{
		forms: [
			{
				form: "GOLETT_NORMAL";
			},
		];
		pokemon: "GOLETT";
	}
>;
export type FormSettingsV0623PokemonGolurk = FormSettings<
	"FORMS_V0623_POKEMON_GOLURK",
	{
		forms: [
			{
				form: "GOLURK_NORMAL";
			},
		];
		pokemon: "GOLURK";
	}
>;
export type FormSettingsV0624PokemonPawniard = FormSettings<
	"FORMS_V0624_POKEMON_PAWNIARD",
	{
		forms: [
			{
				form: "PAWNIARD_NORMAL";
			},
		];
		pokemon: "PAWNIARD";
	}
>;
export type FormSettingsV0625PokemonBisharp = FormSettings<
	"FORMS_V0625_POKEMON_BISHARP",
	{
		forms: [
			{
				form: "BISHARP_NORMAL";
			},
		];
		pokemon: "BISHARP";
	}
>;
export type FormSettingsV0626PokemonBouffalant = FormSettings<
	"FORMS_V0626_POKEMON_BOUFFALANT",
	{
		forms: [
			{
				form: "BOUFFALANT_NORMAL";
			},
		];
		pokemon: "BOUFFALANT";
	}
>;
export type FormSettingsV0627PokemonRufflet = FormSettings<
	"FORMS_V0627_POKEMON_RUFFLET",
	{
		forms: [
			{
				form: "RUFFLET_NORMAL";
			},
		];
		pokemon: "RUFFLET";
	}
>;
export type FormSettingsV0628PokemonBraviary = FormSettings<
	"FORMS_V0628_POKEMON_BRAVIARY",
	{
		forms: [
			{
				form: "BRAVIARY_NORMAL";
			},
			{
				form: "BRAVIARY_HISUIAN";
			},
		];
		pokemon: "BRAVIARY";
	}
>;
export type FormSettingsV0629PokemonVullaby = FormSettings<
	"FORMS_V0629_POKEMON_VULLABY",
	{
		forms: [
			{
				form: "VULLABY_NORMAL";
			},
		];
		pokemon: "VULLABY";
	}
>;
export type FormSettingsV0630PokemonMandibuzz = FormSettings<
	"FORMS_V0630_POKEMON_MANDIBUZZ",
	{
		forms: [
			{
				form: "MANDIBUZZ_NORMAL";
			},
		];
		pokemon: "MANDIBUZZ";
	}
>;
export type FormSettingsV0631PokemonHeatmor = FormSettings<
	"FORMS_V0631_POKEMON_HEATMOR",
	{
		forms: [
			{
				form: "HEATMOR_NORMAL";
			},
		];
		pokemon: "HEATMOR";
	}
>;
export type FormSettingsV0632PokemonDurant = FormSettings<
	"FORMS_V0632_POKEMON_DURANT",
	{
		forms: [
			{
				form: "DURANT_NORMAL";
			},
		];
		pokemon: "DURANT";
	}
>;
export type FormSettingsV0633PokemonDeino = FormSettings<
	"FORMS_V0633_POKEMON_DEINO",
	{
		forms: [
			{
				form: "DEINO_NORMAL";
			},
		];
		pokemon: "DEINO";
	}
>;
export type FormSettingsV0634PokemonZweilous = FormSettings<
	"FORMS_V0634_POKEMON_ZWEILOUS",
	{
		forms: [
			{
				form: "ZWEILOUS_NORMAL";
			},
		];
		pokemon: "ZWEILOUS";
	}
>;
export type FormSettingsV0635PokemonHydreigon = FormSettings<
	"FORMS_V0635_POKEMON_HYDREIGON",
	{
		forms: [
			{
				form: "HYDREIGON_NORMAL";
			},
		];
		pokemon: "HYDREIGON";
	}
>;
export type FormSettingsV0636PokemonLarvesta = FormSettings<
	"FORMS_V0636_POKEMON_LARVESTA",
	{
		forms: [
			{
				form: "LARVESTA_NORMAL";
			},
		];
		pokemon: "LARVESTA";
	}
>;
export type FormSettingsV0637PokemonVolcarona = FormSettings<
	"FORMS_V0637_POKEMON_VOLCARONA",
	{
		forms: [
			{
				form: "VOLCARONA_NORMAL";
			},
		];
		pokemon: "VOLCARONA";
	}
>;
export type FormSettingsV0638PokemonCobalion = FormSettings<
	"FORMS_V0638_POKEMON_COBALION",
	{
		forms: [
			{
				form: "COBALION_NORMAL";
			},
		];
		pokemon: "COBALION";
	}
>;
export type FormSettingsV0639PokemonTerrakion = FormSettings<
	"FORMS_V0639_POKEMON_TERRAKION",
	{
		forms: [
			{
				form: "TERRAKION_NORMAL";
			},
		];
		pokemon: "TERRAKION";
	}
>;
export type FormSettingsV0640PokemonVirizion = FormSettings<
	"FORMS_V0640_POKEMON_VIRIZION",
	{
		forms: [
			{
				form: "VIRIZION_NORMAL";
			},
		];
		pokemon: "VIRIZION";
	}
>;
export type FormSettingsV0641PokemonTornadus = FormSettings<
	"FORMS_V0641_POKEMON_TORNADUS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "TORNADUS_INCARNATE";
			},
			{
				assetBundleValue: 12;
				form: "TORNADUS_THERIAN";
			},
		];
		pokemon: "TORNADUS";
	}
>;
export type FormSettingsV0642PokemonThundurus = FormSettings<
	"FORMS_V0642_POKEMON_THUNDURUS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "THUNDURUS_INCARNATE";
			},
			{
				assetBundleValue: 12;
				form: "THUNDURUS_THERIAN";
			},
		];
		pokemon: "THUNDURUS";
	}
>;
export type FormSettingsV0643PokemonReshiram = FormSettings<
	"FORMS_V0643_POKEMON_RESHIRAM",
	{
		forms: [
			{
				form: "RESHIRAM_NORMAL";
			},
		];
		pokemon: "RESHIRAM";
	}
>;
export type FormSettingsV0644PokemonZekrom = FormSettings<
	"FORMS_V0644_POKEMON_ZEKROM",
	{
		forms: [
			{
				form: "ZEKROM_NORMAL";
			},
		];
		pokemon: "ZEKROM";
	}
>;
export type FormSettingsV0645PokemonLandorus = FormSettings<
	"FORMS_V0645_POKEMON_LANDORUS",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "LANDORUS_INCARNATE";
			},
			{
				assetBundleValue: 12;
				form: "LANDORUS_THERIAN";
			},
		];
		pokemon: "LANDORUS";
	}
>;
export type FormSettingsV0646PokemonKyurem = FormSettings<
	"FORMS_V0646_POKEMON_KYUREM",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "KYUREM_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "KYUREM_WHITE";
			},
			{
				assetBundleValue: 13;
				form: "KYUREM_BLACK";
			},
		];
		pokemon: "KYUREM";
	}
>;
export type FormSettingsV0647PokemonKeldeo = FormSettings<
	"FORMS_V0647_POKEMON_KELDEO",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "KELDEO_ORDINARY";
			},
			{
				assetBundleValue: 12;
				form: "KELDEO_RESOLUTE";
			},
		];
		pokemon: "KELDEO";
	}
>;
export type FormSettingsV0648PokemonMeloetta = FormSettings<
	"FORMS_V0648_POKEMON_MELOETTA",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "MELOETTA_ARIA";
			},
			{
				assetBundleValue: 12;
				form: "MELOETTA_PIROUETTE";
			},
		];
		pokemon: "MELOETTA";
	}
>;
export type FormSettingsV0649PokemonGenesect = FormSettings<
	"FORMS_V0649_POKEMON_GENESECT",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "GENESECT_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "GENESECT_DOUSE";
			},
			{
				assetBundleValue: 13;
				form: "GENESECT_SHOCK";
			},
			{
				assetBundleValue: 14;
				form: "GENESECT_BURN";
			},
			{
				assetBundleValue: 15;
				form: "GENESECT_CHILL";
			},
		];
		pokemon: "GENESECT";
	}
>;
export type FormSettingsV0650PokemonChespin = FormSettings<
	"FORMS_V0650_POKEMON_CHESPIN",
	{
		forms: [
			{
				form: "CHESPIN_NORMAL";
			},
		];
		pokemon: "CHESPIN";
	}
>;
export type FormSettingsV0651PokemonQuilladin = FormSettings<
	"FORMS_V0651_POKEMON_QUILLADIN",
	{
		forms: [
			{
				form: "QUILLADIN_NORMAL";
			},
		];
		pokemon: "QUILLADIN";
	}
>;
export type FormSettingsV0652PokemonChesnaught = FormSettings<
	"FORMS_V0652_POKEMON_CHESNAUGHT",
	{
		forms: [
			{
				form: "CHESNAUGHT_NORMAL";
			},
		];
		pokemon: "CHESNAUGHT";
	}
>;
export type FormSettingsV0653PokemonFennekin = FormSettings<
	"FORMS_V0653_POKEMON_FENNEKIN",
	{
		forms: [
			{
				form: "FENNEKIN_NORMAL";
			},
		];
		pokemon: "FENNEKIN";
	}
>;
export type FormSettingsV0654PokemonBraixen = FormSettings<
	"FORMS_V0654_POKEMON_BRAIXEN",
	{
		forms: [
			{
				form: "BRAIXEN_NORMAL";
			},
		];
		pokemon: "BRAIXEN";
	}
>;
export type FormSettingsV0655PokemonDelphox = FormSettings<
	"FORMS_V0655_POKEMON_DELPHOX",
	{
		forms: [
			{
				form: "DELPHOX_NORMAL";
			},
		];
		pokemon: "DELPHOX";
	}
>;
export type FormSettingsV0656PokemonFroakie = FormSettings<
	"FORMS_V0656_POKEMON_FROAKIE",
	{
		forms: [
			{
				form: "FROAKIE_NORMAL";
			},
		];
		pokemon: "FROAKIE";
	}
>;
export type FormSettingsV0657PokemonFrogadier = FormSettings<
	"FORMS_V0657_POKEMON_FROGADIER",
	{
		forms: [
			{
				form: "FROGADIER_NORMAL";
			},
		];
		pokemon: "FROGADIER";
	}
>;
export type FormSettingsV0658PokemonGreninja = FormSettings<
	"FORMS_V0658_POKEMON_GRENINJA",
	{
		forms: [
			{
				form: "GRENINJA_NORMAL";
			},
		];
		pokemon: "GRENINJA";
	}
>;
export type FormSettingsV0659PokemonBunnelby = FormSettings<
	"FORMS_V0659_POKEMON_BUNNELBY",
	{
		forms: [
			{
				form: "BUNNELBY_NORMAL";
			},
		];
		pokemon: "BUNNELBY";
	}
>;
export type FormSettingsV0660PokemonDiggersby = FormSettings<
	"FORMS_V0660_POKEMON_DIGGERSBY",
	{
		forms: [
			{
				form: "DIGGERSBY_NORMAL";
			},
		];
		pokemon: "DIGGERSBY";
	}
>;
export type FormSettingsV0661PokemonFletchling = FormSettings<
	"FORMS_V0661_POKEMON_FLETCHLING",
	{
		forms: [
			{
				form: "FLETCHLING_NORMAL";
			},
		];
		pokemon: "FLETCHLING";
	}
>;
export type FormSettingsV0662PokemonFletchinder = FormSettings<
	"FORMS_V0662_POKEMON_FLETCHINDER",
	{
		forms: [
			{
				form: "FLETCHINDER_NORMAL";
			},
		];
		pokemon: "FLETCHINDER";
	}
>;
export type FormSettingsV0663PokemonTalonflame = FormSettings<
	"FORMS_V0663_POKEMON_TALONFLAME",
	{
		forms: [
			{
				form: "TALONFLAME_NORMAL";
			},
		];
		pokemon: "TALONFLAME";
	}
>;
export type FormSettingsV0664PokemonScatterbug = FormSettings<
	"FORMS_V0664_POKEMON_SCATTERBUG",
	{
		forms: [
			{
				form: "SCATTERBUG_ARCHIPELAGO";
			},
			{
				form: "SCATTERBUG_CONTINENTAL";
			},
			{
				form: "SCATTERBUG_ELEGANT";
			},
			{
				form: "SCATTERBUG_FANCY";
			},
			{
				form: "SCATTERBUG_GARDEN";
			},
			{
				form: "SCATTERBUG_HIGH_PLAINS";
			},
			{
				form: "SCATTERBUG_ICY_SNOW";
			},
			{
				form: "SCATTERBUG_JUNGLE";
			},
			{
				form: "SCATTERBUG_MARINE";
			},
			{
				form: "SCATTERBUG_MEADOW";
			},
			{
				form: "SCATTERBUG_MODERN";
			},
			{
				form: "SCATTERBUG_MONSOON";
			},
			{
				form: "SCATTERBUG_OCEAN";
			},
			{
				form: "SCATTERBUG_POKEBALL";
			},
			{
				form: "SCATTERBUG_POLAR";
			},
			{
				form: "SCATTERBUG_RIVER";
			},
			{
				form: "SCATTERBUG_SANDSTORM";
			},
			{
				form: "SCATTERBUG_SAVANNA";
			},
			{
				form: "SCATTERBUG_SUN";
			},
			{
				form: "SCATTERBUG_TUNDRA";
			},
		];
		pokemon: "SCATTERBUG";
	}
>;
export type FormSettingsV0665PokemonSpewpa = FormSettings<
	"FORMS_V0665_POKEMON_SPEWPA",
	{
		forms: [
			{
				form: "SPEWPA_ARCHIPELAGO";
			},
			{
				form: "SPEWPA_CONTINENTAL";
			},
			{
				form: "SPEWPA_ELEGANT";
			},
			{
				form: "SPEWPA_FANCY";
			},
			{
				form: "SPEWPA_GARDEN";
			},
			{
				form: "SPEWPA_HIGH_PLAINS";
			},
			{
				form: "SPEWPA_ICY_SNOW";
			},
			{
				form: "SPEWPA_JUNGLE";
			},
			{
				form: "SPEWPA_MARINE";
			},
			{
				form: "SPEWPA_MEADOW";
			},
			{
				form: "SPEWPA_MODERN";
			},
			{
				form: "SPEWPA_MONSOON";
			},
			{
				form: "SPEWPA_OCEAN";
			},
			{
				form: "SPEWPA_POKEBALL";
			},
			{
				form: "SPEWPA_POLAR";
			},
			{
				form: "SPEWPA_RIVER";
			},
			{
				form: "SPEWPA_SANDSTORM";
			},
			{
				form: "SPEWPA_SAVANNA";
			},
			{
				form: "SPEWPA_SUN";
			},
			{
				form: "SPEWPA_TUNDRA";
			},
		];
		pokemon: "SPEWPA";
	}
>;
export type FormSettingsV0666PokemonVivillon = FormSettings<
	"FORMS_V0666_POKEMON_VIVILLON",
	{
		forms: [
			{
				form: "VIVILLON_ARCHIPELAGO";
			},
			{
				form: "VIVILLON_CONTINENTAL";
			},
			{
				form: "VIVILLON_ELEGANT";
			},
			{
				form: "VIVILLON_FANCY";
			},
			{
				form: "VIVILLON_GARDEN";
			},
			{
				form: "VIVILLON_HIGH_PLAINS";
			},
			{
				form: "VIVILLON_ICY_SNOW";
			},
			{
				form: "VIVILLON_JUNGLE";
			},
			{
				form: "VIVILLON_MARINE";
			},
			{
				form: "VIVILLON_MEADOW";
			},
			{
				form: "VIVILLON_MODERN";
			},
			{
				form: "VIVILLON_MONSOON";
			},
			{
				form: "VIVILLON_OCEAN";
			},
			{
				form: "VIVILLON_POKEBALL";
			},
			{
				form: "VIVILLON_POLAR";
			},
			{
				form: "VIVILLON_RIVER";
			},
			{
				form: "VIVILLON_SANDSTORM";
			},
			{
				form: "VIVILLON_SAVANNA";
			},
			{
				form: "VIVILLON_SUN";
			},
			{
				form: "VIVILLON_TUNDRA";
			},
		];
		pokemon: "VIVILLON";
	}
>;
export type FormSettingsV0667PokemonLitleo = FormSettings<
	"FORMS_V0667_POKEMON_LITLEO",
	{
		forms: [
			{
				form: "LITLEO_NORMAL";
			},
		];
		pokemon: "LITLEO";
	}
>;
export type FormSettingsV0668PokemonPyroar = FormSettings<
	"FORMS_V0668_POKEMON_PYROAR",
	{
		forms: [
			{
				form: "PYROAR_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "PYROAR_FEMALE";
			},
		];
		pokemon: "PYROAR";
	}
>;
export type FormSettingsV0669PokemonFlabebe = FormSettings<
	"FORMS_V0669_POKEMON_FLABEBE",
	{
		forms: [
			{
				form: "FLABEBE_RED";
			},
			{
				form: "FLABEBE_BLUE";
			},
			{
				form: "FLABEBE_ORANGE";
			},
			{
				form: "FLABEBE_YELLOW";
			},
			{
				form: "FLABEBE_WHITE";
			},
		];
		pokemon: "FLABEBE";
	}
>;
export type FormSettingsV0670PokemonFloette = FormSettings<
	"FORMS_V0670_POKEMON_FLOETTE",
	{
		forms: [
			{
				form: "FLOETTE_RED";
			},
			{
				form: "FLOETTE_BLUE";
			},
			{
				form: "FLOETTE_ORANGE";
			},
			{
				form: "FLOETTE_YELLOW";
			},
			{
				form: "FLOETTE_WHITE";
			},
		];
		pokemon: "FLOETTE";
	}
>;
export type FormSettingsV0671PokemonFlorges = FormSettings<
	"FORMS_V0671_POKEMON_FLORGES",
	{
		forms: [
			{
				form: "FLORGES_RED";
			},
			{
				form: "FLORGES_BLUE";
			},
			{
				form: "FLORGES_ORANGE";
			},
			{
				form: "FLORGES_YELLOW";
			},
			{
				form: "FLORGES_WHITE";
			},
		];
		pokemon: "FLORGES";
	}
>;
export type FormSettingsV0672PokemonSkiddo = FormSettings<
	"FORMS_V0672_POKEMON_SKIDDO",
	{
		forms: [
			{
				form: "SKIDDO_NORMAL";
			},
		];
		pokemon: "SKIDDO";
	}
>;
export type FormSettingsV0673PokemonGogoat = FormSettings<
	"FORMS_V0673_POKEMON_GOGOAT",
	{
		forms: [
			{
				form: "GOGOAT_NORMAL";
			},
		];
		pokemon: "GOGOAT";
	}
>;
export type FormSettingsV0674PokemonPancham = FormSettings<
	"FORMS_V0674_POKEMON_PANCHAM",
	{
		forms: [
			{
				form: "PANCHAM_NORMAL";
			},
		];
		pokemon: "PANCHAM";
	}
>;
export type FormSettingsV0675PokemonPangoro = FormSettings<
	"FORMS_V0675_POKEMON_PANGORO",
	{
		forms: [
			{
				form: "PANGORO_NORMAL";
			},
		];
		pokemon: "PANGORO";
	}
>;
export type FormSettingsV0676PokemonFurfrou = FormSettings<
	"FORMS_V0676_POKEMON_FURFROU",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "FURFROU_NATURAL";
			},
			{
				assetBundleValue: 12;
				form: "FURFROU_HEART";
			},
			{
				assetBundleValue: 13;
				form: "FURFROU_STAR";
			},
			{
				assetBundleValue: 14;
				form: "FURFROU_DIAMOND";
			},
			{
				assetBundleValue: 15;
				form: "FURFROU_DEBUTANTE";
			},
			{
				assetBundleValue: 16;
				form: "FURFROU_MATRON";
			},
			{
				assetBundleValue: 17;
				form: "FURFROU_DANDY";
			},
			{
				assetBundleValue: 18;
				form: "FURFROU_LA_REINE";
			},
			{
				assetBundleValue: 19;
				form: "FURFROU_KABUKI";
			},
			{
				assetBundleValue: 20;
				form: "FURFROU_PHARAOH";
			},
		];
		pokemon: "FURFROU";
	}
>;
export type FormSettingsV0677PokemonEspurr = FormSettings<
	"FORMS_V0677_POKEMON_ESPURR",
	{
		forms: [
			{
				form: "ESPURR_NORMAL";
			},
		];
		pokemon: "ESPURR";
	}
>;
export type FormSettingsV0678PokemonMeowstic = FormSettings<
	"FORMS_V0678_POKEMON_MEOWSTIC",
	{
		forms: [
			{
				form: "MEOWSTIC_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "MEOWSTIC_FEMALE";
			},
		];
		pokemon: "MEOWSTIC";
	}
>;
export type FormSettingsV0679PokemonHonedge = FormSettings<
	"FORMS_V0679_POKEMON_HONEDGE",
	{
		forms: [
			{
				form: "HONEDGE_NORMAL";
			},
		];
		pokemon: "HONEDGE";
	}
>;
export type FormSettingsV0680PokemonDoublade = FormSettings<
	"FORMS_V0680_POKEMON_DOUBLADE",
	{
		forms: [
			{
				form: "DOUBLADE_NORMAL";
			},
		];
		pokemon: "DOUBLADE";
	}
>;
export type FormSettingsV0681PokemonAegislash = FormSettings<
	"FORMS_V0681_POKEMON_AEGISLASH",
	{
		forms: [
			{
				form: "AEGISLASH_SHIELD";
			},
			{
				form: "AEGISLASH_BLADE";
			},
		];
		pokemon: "AEGISLASH";
	}
>;
export type FormSettingsV0682PokemonSpritzee = FormSettings<
	"FORMS_V0682_POKEMON_SPRITZEE",
	{
		forms: [
			{
				form: "SPRITZEE_NORMAL";
			},
		];
		pokemon: "SPRITZEE";
	}
>;
export type FormSettingsV0683PokemonAromatisse = FormSettings<
	"FORMS_V0683_POKEMON_AROMATISSE",
	{
		forms: [
			{
				form: "AROMATISSE_NORMAL";
			},
		];
		pokemon: "AROMATISSE";
	}
>;
export type FormSettingsV0684PokemonSwirlix = FormSettings<
	"FORMS_V0684_POKEMON_SWIRLIX",
	{
		forms: [
			{
				form: "SWIRLIX_NORMAL";
			},
		];
		pokemon: "SWIRLIX";
	}
>;
export type FormSettingsV0685PokemonSlurpuff = FormSettings<
	"FORMS_V0685_POKEMON_SLURPUFF",
	{
		forms: [
			{
				form: "SLURPUFF_NORMAL";
			},
		];
		pokemon: "SLURPUFF";
	}
>;
export type FormSettingsV0686PokemonInkay = FormSettings<
	"FORMS_V0686_POKEMON_INKAY",
	{
		forms: [
			{
				form: "INKAY_NORMAL";
			},
		];
		pokemon: "INKAY";
	}
>;
export type FormSettingsV0687PokemonMalamar = FormSettings<
	"FORMS_V0687_POKEMON_MALAMAR",
	{
		forms: [
			{
				form: "MALAMAR_NORMAL";
			},
		];
		pokemon: "MALAMAR";
	}
>;
export type FormSettingsV0688PokemonBinacle = FormSettings<
	"FORMS_V0688_POKEMON_BINACLE",
	{
		forms: [
			{
				form: "BINACLE_NORMAL";
			},
		];
		pokemon: "BINACLE";
	}
>;
export type FormSettingsV0689PokemonBarbaracle = FormSettings<
	"FORMS_V0689_POKEMON_BARBARACLE",
	{
		forms: [
			{
				form: "BARBARACLE_NORMAL";
			},
		];
		pokemon: "BARBARACLE";
	}
>;
export type FormSettingsV0690PokemonSkrelp = FormSettings<
	"FORMS_V0690_POKEMON_SKRELP",
	{
		forms: [
			{
				form: "SKRELP_NORMAL";
			},
		];
		pokemon: "SKRELP";
	}
>;
export type FormSettingsV0691PokemonDragalge = FormSettings<
	"FORMS_V0691_POKEMON_DRAGALGE",
	{
		forms: [
			{
				form: "DRAGALGE_NORMAL";
			},
		];
		pokemon: "DRAGALGE";
	}
>;
export type FormSettingsV0692PokemonClauncher = FormSettings<
	"FORMS_V0692_POKEMON_CLAUNCHER",
	{
		forms: [
			{
				form: "CLAUNCHER_NORMAL";
			},
		];
		pokemon: "CLAUNCHER";
	}
>;
export type FormSettingsV0693PokemonClawitzer = FormSettings<
	"FORMS_V0693_POKEMON_CLAWITZER",
	{
		forms: [
			{
				form: "CLAWITZER_NORMAL";
			},
		];
		pokemon: "CLAWITZER";
	}
>;
export type FormSettingsV0694PokemonHelioptile = FormSettings<
	"FORMS_V0694_POKEMON_HELIOPTILE",
	{
		forms: [
			{
				form: "HELIOPTILE_NORMAL";
			},
		];
		pokemon: "HELIOPTILE";
	}
>;
export type FormSettingsV0695PokemonHeliolisk = FormSettings<
	"FORMS_V0695_POKEMON_HELIOLISK",
	{
		forms: [
			{
				form: "HELIOLISK_NORMAL";
			},
		];
		pokemon: "HELIOLISK";
	}
>;
export type FormSettingsV0696PokemonTyrunt = FormSettings<
	"FORMS_V0696_POKEMON_TYRUNT",
	{
		forms: [
			{
				form: "TYRUNT_NORMAL";
			},
		];
		pokemon: "TYRUNT";
	}
>;
export type FormSettingsV0697PokemonTyrantrum = FormSettings<
	"FORMS_V0697_POKEMON_TYRANTRUM",
	{
		forms: [
			{
				form: "TYRANTRUM_NORMAL";
			},
		];
		pokemon: "TYRANTRUM";
	}
>;
export type FormSettingsV0698PokemonAmaura = FormSettings<
	"FORMS_V0698_POKEMON_AMAURA",
	{
		forms: [
			{
				form: "AMAURA_NORMAL";
			},
		];
		pokemon: "AMAURA";
	}
>;
export type FormSettingsV0699PokemonAurorus = FormSettings<
	"FORMS_V0699_POKEMON_AURORUS",
	{
		forms: [
			{
				form: "AURORUS_NORMAL";
			},
		];
		pokemon: "AURORUS";
	}
>;
export type FormSettingsV0700PokemonSylveon = FormSettings<
	"FORMS_V0700_POKEMON_SYLVEON",
	{
		forms: [
			{
				form: "SYLVEON_NORMAL";
			},
		];
		pokemon: "SYLVEON";
	}
>;
export type FormSettingsV0701PokemonHawlucha = FormSettings<
	"FORMS_V0701_POKEMON_HAWLUCHA",
	{
		forms: [
			{
				form: "HAWLUCHA_NORMAL";
			},
		];
		pokemon: "HAWLUCHA";
	}
>;
export type FormSettingsV0702PokemonDedenne = FormSettings<
	"FORMS_V0702_POKEMON_DEDENNE",
	{
		forms: [
			{
				form: "DEDENNE_NORMAL";
			},
		];
		pokemon: "DEDENNE";
	}
>;
export type FormSettingsV0703PokemonCarbink = FormSettings<
	"FORMS_V0703_POKEMON_CARBINK",
	{
		forms: [
			{
				form: "CARBINK_NORMAL";
			},
		];
		pokemon: "CARBINK";
	}
>;
export type FormSettingsV0704PokemonGoomy = FormSettings<
	"FORMS_V0704_POKEMON_GOOMY",
	{
		forms: [
			{
				form: "GOOMY_NORMAL";
			},
		];
		pokemon: "GOOMY";
	}
>;
export type FormSettingsV0705PokemonSliggoo = FormSettings<
	"FORMS_V0705_POKEMON_SLIGGOO",
	{
		forms: [
			{
				form: "SLIGGOO_NORMAL";
			},
		];
		pokemon: "SLIGGOO";
	}
>;
export type FormSettingsV0706PokemonGoodra = FormSettings<
	"FORMS_V0706_POKEMON_GOODRA",
	{
		forms: [
			{
				form: "GOODRA_NORMAL";
			},
		];
		pokemon: "GOODRA";
	}
>;
export type FormSettingsV0707PokemonKlefki = FormSettings<
	"FORMS_V0707_POKEMON_KLEFKI",
	{
		forms: [
			{
				form: "KLEFKI_NORMAL";
			},
		];
		pokemon: "KLEFKI";
	}
>;
export type FormSettingsV0708PokemonPhantump = FormSettings<
	"FORMS_V0708_POKEMON_PHANTUMP",
	{
		forms: [
			{
				form: "PHANTUMP_NORMAL";
			},
		];
		pokemon: "PHANTUMP";
	}
>;
export type FormSettingsV0709PokemonTrevenant = FormSettings<
	"FORMS_V0709_POKEMON_TREVENANT",
	{
		forms: [
			{
				form: "TREVENANT_NORMAL";
			},
		];
		pokemon: "TREVENANT";
	}
>;
export type FormSettingsV0710PokemonPumpkaboo = FormSettings<
	"FORMS_V0710_POKEMON_PUMPKABOO",
	{
		forms: [
			{
				form: "PUMPKABOO_SMALL";
			},
			{
				assetBundleValue: 1;
				form: "PUMPKABOO_AVERAGE";
			},
			{
				assetBundleValue: 2;
				form: "PUMPKABOO_LARGE";
			},
			{
				assetBundleValue: 3;
				form: "PUMPKABOO_SUPER";
			},
		];
		pokemon: "PUMPKABOO";
	}
>;
export type FormSettingsV0711PokemonGourgeist = FormSettings<
	"FORMS_V0711_POKEMON_GOURGEIST",
	{
		forms: [
			{
				form: "GOURGEIST_SMALL";
			},
			{
				assetBundleValue: 1;
				form: "GOURGEIST_AVERAGE";
			},
			{
				assetBundleValue: 2;
				form: "GOURGEIST_LARGE";
			},
			{
				assetBundleValue: 3;
				form: "GOURGEIST_SUPER";
			},
		];
		pokemon: "GOURGEIST";
	}
>;
export type FormSettingsV0712PokemonBergmite = FormSettings<
	"FORMS_V0712_POKEMON_BERGMITE",
	{
		forms: [
			{
				form: "BERGMITE_NORMAL";
			},
		];
		pokemon: "BERGMITE";
	}
>;
export type FormSettingsV0713PokemonAvalugg = FormSettings<
	"FORMS_V0713_POKEMON_AVALUGG",
	{
		forms: [
			{
				form: "AVALUGG_NORMAL";
			},
			{
				form: "AVALUGG_HISUIAN";
			},
		];
		pokemon: "AVALUGG";
	}
>;
export type FormSettingsV0714PokemonNoibat = FormSettings<
	"FORMS_V0714_POKEMON_NOIBAT",
	{
		forms: [
			{
				form: "NOIBAT_NORMAL";
			},
		];
		pokemon: "NOIBAT";
	}
>;
export type FormSettingsV0715PokemonNoivern = FormSettings<
	"FORMS_V0715_POKEMON_NOIVERN",
	{
		forms: [
			{
				form: "NOIVERN_NORMAL";
			},
		];
		pokemon: "NOIVERN";
	}
>;
export type FormSettingsV0716PokemonXerneas = FormSettings<
	"FORMS_V0716_POKEMON_XERNEAS",
	{
		forms: [
			{
				form: "XERNEAS_NORMAL";
			},
		];
		pokemon: "XERNEAS";
	}
>;
export type FormSettingsV0717PokemonYveltal = FormSettings<
	"FORMS_V0717_POKEMON_YVELTAL",
	{
		forms: [
			{
				form: "YVELTAL_NORMAL";
			},
		];
		pokemon: "YVELTAL";
	}
>;
export type FormSettingsV0718PokemonZygarde = FormSettings<
	"FORMS_V0718_POKEMON_ZYGARDE",
	{
		forms: [
			{
				form: "ZYGARDE_TEN_PERCENT";
			},
			{
				assetBundleValue: 1;
				form: "ZYGARDE_FIFTY_PERCENT";
			},
			{
				assetBundleValue: 2;
				form: "ZYGARDE_COMPLETE";
			},
			{
				form: "ZYGARDE_COMPLETE_TEN_PERCENT";
			},
			{
				assetBundleValue: 1;
				form: "ZYGARDE_COMPLETE_FIFTY_PERCENT";
			},
		];
		pokemon: "ZYGARDE";
	}
>;
export type FormSettingsV0719PokemonDiancie = FormSettings<
	"FORMS_V0719_POKEMON_DIANCIE",
	{
		forms: [
			{
				form: "DIANCIE_NORMAL";
			},
		];
		pokemon: "DIANCIE";
	}
>;
export type FormSettingsV0720PokemonHoopa = FormSettings<
	"FORMS_V0720_POKEMON_HOOPA",
	{
		forms: [
			{
				form: "HOOPA_CONFINED";
			},
			{
				assetBundleValue: 1;
				form: "HOOPA_UNBOUND";
			},
		];
		pokemon: "HOOPA";
	}
>;
export type FormSettingsV0721PokemonVolcanion = FormSettings<
	"FORMS_V0721_POKEMON_VOLCANION",
	{
		forms: [
			{
				form: "VOLCANION_NORMAL";
			},
		];
		pokemon: "VOLCANION";
	}
>;
export type FormSettingsV0722PokemonRowlet = FormSettings<
	"FORMS_V0722_POKEMON_ROWLET",
	{
		forms: [
			{
				form: "ROWLET_NORMAL";
			},
		];
		pokemon: "ROWLET";
	}
>;
export type FormSettingsV0723PokemonDartrix = FormSettings<
	"FORMS_V0723_POKEMON_DARTRIX",
	{
		forms: [
			{
				form: "DARTRIX_NORMAL";
			},
		];
		pokemon: "DARTRIX";
	}
>;
export type FormSettingsV0724PokemonDecidueye = FormSettings<
	"FORMS_V0724_POKEMON_DECIDUEYE",
	{
		forms: [
			{
				form: "DECIDUEYE_NORMAL";
			},
			{
				form: "DECIDUEYE_HISUIAN";
			},
		];
		pokemon: "DECIDUEYE";
	}
>;
export type FormSettingsV0725PokemonLitten = FormSettings<
	"FORMS_V0725_POKEMON_LITTEN",
	{
		forms: [
			{
				form: "LITTEN_NORMAL";
			},
		];
		pokemon: "LITTEN";
	}
>;
export type FormSettingsV0726PokemonTorracat = FormSettings<
	"FORMS_V0726_POKEMON_TORRACAT",
	{
		forms: [
			{
				form: "TORRACAT_NORMAL";
			},
		];
		pokemon: "TORRACAT";
	}
>;
export type FormSettingsV0727PokemonIncineroar = FormSettings<
	"FORMS_V0727_POKEMON_INCINEROAR",
	{
		forms: [
			{
				form: "INCINEROAR_NORMAL";
			},
		];
		pokemon: "INCINEROAR";
	}
>;
export type FormSettingsV0728PokemonPopplio = FormSettings<
	"FORMS_V0728_POKEMON_POPPLIO",
	{
		forms: [
			{
				form: "POPPLIO_NORMAL";
			},
		];
		pokemon: "POPPLIO";
	}
>;
export type FormSettingsV0729PokemonBrionne = FormSettings<
	"FORMS_V0729_POKEMON_BRIONNE",
	{
		forms: [
			{
				form: "BRIONNE_NORMAL";
			},
		];
		pokemon: "BRIONNE";
	}
>;
export type FormSettingsV0730PokemonPrimarina = FormSettings<
	"FORMS_V0730_POKEMON_PRIMARINA",
	{
		forms: [
			{
				form: "PRIMARINA_NORMAL";
			},
		];
		pokemon: "PRIMARINA";
	}
>;
export type FormSettingsV0731PokemonPikipek = FormSettings<
	"FORMS_V0731_POKEMON_PIKIPEK",
	{
		forms: [
			{
				form: "PIKIPEK_NORMAL";
			},
		];
		pokemon: "PIKIPEK";
	}
>;
export type FormSettingsV0732PokemonTrumbeak = FormSettings<
	"FORMS_V0732_POKEMON_TRUMBEAK",
	{
		forms: [
			{
				form: "TRUMBEAK_NORMAL";
			},
		];
		pokemon: "TRUMBEAK";
	}
>;
export type FormSettingsV0733PokemonToucannon = FormSettings<
	"FORMS_V0733_POKEMON_TOUCANNON",
	{
		forms: [
			{
				form: "TOUCANNON_NORMAL";
			},
		];
		pokemon: "TOUCANNON";
	}
>;
export type FormSettingsV0734PokemonYungoos = FormSettings<
	"FORMS_V0734_POKEMON_YUNGOOS",
	{
		forms: [
			{
				form: "YUNGOOS_NORMAL";
			},
		];
		pokemon: "YUNGOOS";
	}
>;
export type FormSettingsV0735PokemonGumshoos = FormSettings<
	"FORMS_V0735_POKEMON_GUMSHOOS",
	{
		forms: [
			{
				form: "GUMSHOOS_NORMAL";
			},
		];
		pokemon: "GUMSHOOS";
	}
>;
export type FormSettingsV0736PokemonGrubbin = FormSettings<
	"FORMS_V0736_POKEMON_GRUBBIN",
	{
		forms: [
			{
				form: "GRUBBIN_NORMAL";
			},
		];
		pokemon: "GRUBBIN";
	}
>;
export type FormSettingsV0737PokemonCharjabug = FormSettings<
	"FORMS_V0737_POKEMON_CHARJABUG",
	{
		forms: [
			{
				form: "CHARJABUG_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "CHARJABUG_WINTER_2025";
				isCostume: true;
			},
		];
		pokemon: "CHARJABUG";
	}
>;
export type FormSettingsV0738PokemonVikavolt = FormSettings<
	"FORMS_V0738_POKEMON_VIKAVOLT",
	{
		forms: [
			{
				form: "VIKAVOLT_NORMAL";
			},
			{
				assetBundleValue: 1;
				form: "VIKAVOLT_WINTER_2025";
				isCostume: true;
			},
		];
		pokemon: "VIKAVOLT";
	}
>;
export type FormSettingsV0739PokemonCrabrawler = FormSettings<
	"FORMS_V0739_POKEMON_CRABRAWLER",
	{
		forms: [
			{
				form: "CRABRAWLER_NORMAL";
			},
		];
		pokemon: "CRABRAWLER";
	}
>;
export type FormSettingsV0740PokemonCrabominable = FormSettings<
	"FORMS_V0740_POKEMON_CRABOMINABLE",
	{
		forms: [
			{
				form: "CRABOMINABLE_NORMAL";
			},
		];
		pokemon: "CRABOMINABLE";
	}
>;
export type FormSettingsV0741PokemonOricorio = FormSettings<
	"FORMS_V0741_POKEMON_ORICORIO",
	{
		forms: [
			{
				form: "ORICORIO_BAILE";
			},
			{
				form: "ORICORIO_POMPOM";
			},
			{
				form: "ORICORIO_PAU";
			},
			{
				form: "ORICORIO_SENSU";
			},
		];
		pokemon: "ORICORIO";
	}
>;
export type FormSettingsV0742PokemonCutiefly = FormSettings<
	"FORMS_V0742_POKEMON_CUTIEFLY",
	{
		forms: [
			{
				form: "CUTIEFLY_NORMAL";
			},
		];
		pokemon: "CUTIEFLY";
	}
>;
export type FormSettingsV0743PokemonRibombee = FormSettings<
	"FORMS_V0743_POKEMON_RIBOMBEE",
	{
		forms: [
			{
				form: "RIBOMBEE_NORMAL";
			},
		];
		pokemon: "RIBOMBEE";
	}
>;
export type FormSettingsV0744PokemonRockruff = FormSettings<
	"FORMS_V0744_POKEMON_ROCKRUFF",
	{
		forms: [
			{
				form: "ROCKRUFF_NORMAL";
			},
			{
				form: "ROCKRUFF_DUSK";
			},
		];
		pokemon: "ROCKRUFF";
	}
>;
export type FormSettingsV0745PokemonLycanroc = FormSettings<
	"FORMS_V0745_POKEMON_LYCANROC",
	{
		forms: [
			{
				form: "LYCANROC_MIDDAY";
			},
			{
				form: "LYCANROC_MIDNIGHT";
			},
			{
				form: "LYCANROC_DUSK";
			},
		];
		pokemon: "LYCANROC";
	}
>;
export type FormSettingsV0746PokemonWishiwashi = FormSettings<
	"FORMS_V0746_POKEMON_WISHIWASHI",
	{
		forms: [
			{
				form: "WISHIWASHI_SOLO";
			},
			{
				form: "WISHIWASHI_SCHOOL";
			},
		];
		pokemon: "WISHIWASHI";
	}
>;
export type FormSettingsV0747PokemonMareanie = FormSettings<
	"FORMS_V0747_POKEMON_MAREANIE",
	{
		forms: [
			{
				form: "MAREANIE_NORMAL";
			},
		];
		pokemon: "MAREANIE";
	}
>;
export type FormSettingsV0748PokemonToxapex = FormSettings<
	"FORMS_V0748_POKEMON_TOXAPEX",
	{
		forms: [
			{
				form: "TOXAPEX_NORMAL";
			},
		];
		pokemon: "TOXAPEX";
	}
>;
export type FormSettingsV0749PokemonMudbray = FormSettings<
	"FORMS_V0749_POKEMON_MUDBRAY",
	{
		forms: [
			{
				form: "MUDBRAY_NORMAL";
			},
		];
		pokemon: "MUDBRAY";
	}
>;
export type FormSettingsV0750PokemonMudsdale = FormSettings<
	"FORMS_V0750_POKEMON_MUDSDALE",
	{
		forms: [
			{
				form: "MUDSDALE_NORMAL";
			},
		];
		pokemon: "MUDSDALE";
	}
>;
export type FormSettingsV0751PokemonDewpider = FormSettings<
	"FORMS_V0751_POKEMON_DEWPIDER",
	{
		forms: [
			{
				form: "DEWPIDER_NORMAL";
			},
		];
		pokemon: "DEWPIDER";
	}
>;
export type FormSettingsV0752PokemonAraquanid = FormSettings<
	"FORMS_V0752_POKEMON_ARAQUANID",
	{
		forms: [
			{
				form: "ARAQUANID_NORMAL";
			},
		];
		pokemon: "ARAQUANID";
	}
>;
export type FormSettingsV0753PokemonFomantis = FormSettings<
	"FORMS_V0753_POKEMON_FOMANTIS",
	{
		forms: [
			{
				form: "FOMANTIS_NORMAL";
			},
		];
		pokemon: "FOMANTIS";
	}
>;
export type FormSettingsV0754PokemonLurantis = FormSettings<
	"FORMS_V0754_POKEMON_LURANTIS",
	{
		forms: [
			{
				form: "LURANTIS_NORMAL";
			},
		];
		pokemon: "LURANTIS";
	}
>;
export type FormSettingsV0755PokemonMorelull = FormSettings<
	"FORMS_V0755_POKEMON_MORELULL",
	{
		forms: [
			{
				form: "MORELULL_NORMAL";
			},
		];
		pokemon: "MORELULL";
	}
>;
export type FormSettingsV0756PokemonShiinotic = FormSettings<
	"FORMS_V0756_POKEMON_SHIINOTIC",
	{
		forms: [
			{
				form: "SHIINOTIC_NORMAL";
			},
		];
		pokemon: "SHIINOTIC";
	}
>;
export type FormSettingsV0757PokemonSalandit = FormSettings<
	"FORMS_V0757_POKEMON_SALANDIT",
	{
		forms: [
			{
				form: "SALANDIT_NORMAL";
			},
		];
		pokemon: "SALANDIT";
	}
>;
export type FormSettingsV0758PokemonSalazzle = FormSettings<
	"FORMS_V0758_POKEMON_SALAZZLE",
	{
		forms: [
			{
				form: "SALAZZLE_NORMAL";
			},
		];
		pokemon: "SALAZZLE";
	}
>;
export type FormSettingsV0759PokemonStufful = FormSettings<
	"FORMS_V0759_POKEMON_STUFFUL",
	{
		forms: [
			{
				form: "STUFFUL_NORMAL";
			},
		];
		pokemon: "STUFFUL";
	}
>;
export type FormSettingsV0760PokemonBewear = FormSettings<
	"FORMS_V0760_POKEMON_BEWEAR",
	{
		forms: [
			{
				form: "BEWEAR_NORMAL";
			},
			{
				form: "BEWEAR_WILDAREA_2025";
				isCostume: true;
			},
		];
		pokemon: "BEWEAR";
	}
>;
export type FormSettingsV0761PokemonBounsweet = FormSettings<
	"FORMS_V0761_POKEMON_BOUNSWEET",
	{
		forms: [
			{
				form: "BOUNSWEET_NORMAL";
			},
		];
		pokemon: "BOUNSWEET";
	}
>;
export type FormSettingsV0762PokemonSteenee = FormSettings<
	"FORMS_V0762_POKEMON_STEENEE",
	{
		forms: [
			{
				form: "STEENEE_NORMAL";
			},
		];
		pokemon: "STEENEE";
	}
>;
export type FormSettingsV0763PokemonTsareena = FormSettings<
	"FORMS_V0763_POKEMON_TSAREENA",
	{
		forms: [
			{
				form: "TSAREENA_NORMAL";
			},
		];
		pokemon: "TSAREENA";
	}
>;
export type FormSettingsV0764PokemonComfey = FormSettings<
	"FORMS_V0764_POKEMON_COMFEY",
	{
		forms: [
			{
				form: "COMFEY_NORMAL";
			},
		];
		pokemon: "COMFEY";
	}
>;
export type FormSettingsV0765PokemonOranguru = FormSettings<
	"FORMS_V0765_POKEMON_ORANGURU",
	{
		forms: [
			{
				form: "ORANGURU_NORMAL";
			},
		];
		pokemon: "ORANGURU";
	}
>;
export type FormSettingsV0766PokemonPassimian = FormSettings<
	"FORMS_V0766_POKEMON_PASSIMIAN",
	{
		forms: [
			{
				form: "PASSIMIAN_NORMAL";
			},
		];
		pokemon: "PASSIMIAN";
	}
>;
export type FormSettingsV0767PokemonWimpod = FormSettings<
	"FORMS_V0767_POKEMON_WIMPOD",
	{
		forms: [
			{
				form: "WIMPOD_NORMAL";
			},
		];
		pokemon: "WIMPOD";
	}
>;
export type FormSettingsV0768PokemonGolisopod = FormSettings<
	"FORMS_V0768_POKEMON_GOLISOPOD",
	{
		forms: [
			{
				form: "GOLISOPOD_NORMAL";
			},
		];
		pokemon: "GOLISOPOD";
	}
>;
export type FormSettingsV0769PokemonSandygast = FormSettings<
	"FORMS_V0769_POKEMON_SANDYGAST",
	{
		forms: [
			{
				form: "SANDYGAST_NORMAL";
			},
		];
		pokemon: "SANDYGAST";
	}
>;
export type FormSettingsV0770PokemonPalossand = FormSettings<
	"FORMS_V0770_POKEMON_PALOSSAND",
	{
		forms: [
			{
				form: "PALOSSAND_NORMAL";
			},
		];
		pokemon: "PALOSSAND";
	}
>;
export type FormSettingsV0771PokemonPyukumuku = FormSettings<
	"FORMS_V0771_POKEMON_PYUKUMUKU",
	{
		forms: [
			{
				form: "PYUKUMUKU_NORMAL";
			},
		];
		pokemon: "PYUKUMUKU";
	}
>;
export type FormSettingsV0772PokemonTypeNull = FormSettings<
	"FORMS_V0772_POKEMON_TYPE_NULL",
	{
		forms: [
			{
				form: "TYPE_NULL_NORMAL";
			},
		];
		pokemon: "TYPE_NULL";
	}
>;
export type FormSettingsV0773PokemonSilvally = FormSettings<
	"FORMS_V0773_POKEMON_SILVALLY",
	{
		forms: [
			{
				assetBundleValue: 11;
				form: "SILVALLY_NORMAL";
			},
			{
				assetBundleValue: 12;
				form: "SILVALLY_FIGHTING";
			},
			{
				assetBundleValue: 13;
				form: "SILVALLY_FLYING";
			},
			{
				assetBundleValue: 14;
				form: "SILVALLY_POISON";
			},
			{
				assetBundleValue: 15;
				form: "SILVALLY_GROUND";
			},
			{
				assetBundleValue: 16;
				form: "SILVALLY_ROCK";
			},
			{
				assetBundleValue: 17;
				form: "SILVALLY_BUG";
			},
			{
				assetBundleValue: 18;
				form: "SILVALLY_GHOST";
			},
			{
				assetBundleValue: 19;
				form: "SILVALLY_STEEL";
			},
			{
				assetBundleValue: 20;
				form: "SILVALLY_FIRE";
			},
			{
				assetBundleValue: 21;
				form: "SILVALLY_WATER";
			},
			{
				assetBundleValue: 22;
				form: "SILVALLY_GRASS";
			},
			{
				assetBundleValue: 23;
				form: "SILVALLY_ELECTRIC";
			},
			{
				assetBundleValue: 24;
				form: "SILVALLY_PSYCHIC";
			},
			{
				assetBundleValue: 25;
				form: "SILVALLY_ICE";
			},
			{
				assetBundleValue: 26;
				form: "SILVALLY_DRAGON";
			},
			{
				assetBundleValue: 27;
				form: "SILVALLY_DARK";
			},
			{
				assetBundleValue: 28;
				form: "SILVALLY_FAIRY";
			},
		];
		pokemon: "SILVALLY";
	}
>;
export type FormSettingsV0774PokemonMinior = FormSettings<
	"FORMS_V0774_POKEMON_MINIOR",
	{
		forms: [
			{
				form: "MINIOR_BLUE";
			},
			{
				form: "MINIOR_GREEN";
			},
			{
				form: "MINIOR_INDIGO";
			},
			{
				form: "MINIOR_ORANGE";
			},
			{
				form: "MINIOR_RED";
			},
			{
				form: "MINIOR_VIOLET";
			},
			{
				form: "MINIOR_YELLOW";
			},
		];
		pokemon: "MINIOR";
	}
>;
export type FormSettingsV0775PokemonKomala = FormSettings<
	"FORMS_V0775_POKEMON_KOMALA",
	{
		forms: [
			{
				form: "KOMALA_NORMAL";
			},
		];
		pokemon: "KOMALA";
	}
>;
export type FormSettingsV0776PokemonTurtonator = FormSettings<
	"FORMS_V0776_POKEMON_TURTONATOR",
	{
		forms: [
			{
				form: "TURTONATOR_NORMAL";
			},
		];
		pokemon: "TURTONATOR";
	}
>;
export type FormSettingsV0777PokemonTogedemaru = FormSettings<
	"FORMS_V0777_POKEMON_TOGEDEMARU",
	{
		forms: [
			{
				form: "TOGEDEMARU_NORMAL";
			},
		];
		pokemon: "TOGEDEMARU";
	}
>;
export type FormSettingsV0778PokemonMimikyu = FormSettings<
	"FORMS_V0778_POKEMON_MIMIKYU",
	{
		forms: [
			{
				form: "MIMIKYU_DISGUISED";
			},
			{
				form: "MIMIKYU_BUSTED";
			},
		];
		pokemon: "MIMIKYU";
	}
>;
export type FormSettingsV0779PokemonBruxish = FormSettings<
	"FORMS_V0779_POKEMON_BRUXISH",
	{
		forms: [
			{
				form: "BRUXISH_NORMAL";
			},
		];
		pokemon: "BRUXISH";
	}
>;
export type FormSettingsV0780PokemonDrampa = FormSettings<
	"FORMS_V0780_POKEMON_DRAMPA",
	{
		forms: [
			{
				form: "DRAMPA_NORMAL";
			},
		];
		pokemon: "DRAMPA";
	}
>;
export type FormSettingsV0781PokemonDhelmise = FormSettings<
	"FORMS_V0781_POKEMON_DHELMISE",
	{
		forms: [
			{
				form: "DHELMISE_NORMAL";
			},
		];
		pokemon: "DHELMISE";
	}
>;
export type FormSettingsV0782PokemonJangmoO = FormSettings<
	"FORMS_V0782_POKEMON_JANGMO_O",
	{
		forms: [
			{
				form: "JANGMO_O_NORMAL";
			},
		];
		pokemon: "JANGMO_O";
	}
>;
export type FormSettingsV0783PokemonHakamoO = FormSettings<
	"FORMS_V0783_POKEMON_HAKAMO_O",
	{
		forms: [
			{
				form: "HAKAMO_O_NORMAL";
			},
		];
		pokemon: "HAKAMO_O";
	}
>;
export type FormSettingsV0784PokemonKommoO = FormSettings<
	"FORMS_V0784_POKEMON_KOMMO_O",
	{
		forms: [
			{
				form: "KOMMO_O_NORMAL";
			},
		];
		pokemon: "KOMMO_O";
	}
>;
export type FormSettingsV0785PokemonTapuKoko = FormSettings<
	"FORMS_V0785_POKEMON_TAPU_KOKO",
	{
		forms: [
			{
				form: "TAPU_KOKO_NORMAL";
			},
		];
		pokemon: "TAPU_KOKO";
	}
>;
export type FormSettingsV0786PokemonTapuLele = FormSettings<
	"FORMS_V0786_POKEMON_TAPU_LELE",
	{
		forms: [
			{
				form: "TAPU_LELE_NORMAL";
			},
		];
		pokemon: "TAPU_LELE";
	}
>;
export type FormSettingsV0787PokemonTapuBulu = FormSettings<
	"FORMS_V0787_POKEMON_TAPU_BULU",
	{
		forms: [
			{
				form: "TAPU_BULU_NORMAL";
			},
		];
		pokemon: "TAPU_BULU";
	}
>;
export type FormSettingsV0788PokemonTapuFini = FormSettings<
	"FORMS_V0788_POKEMON_TAPU_FINI",
	{
		forms: [
			{
				form: "TAPU_FINI_NORMAL";
			},
		];
		pokemon: "TAPU_FINI";
	}
>;
export type FormSettingsV0789PokemonCosmog = FormSettings<
	"FORMS_V0789_POKEMON_COSMOG",
	{
		forms: [
			{
				form: "COSMOG_NORMAL";
			},
		];
		pokemon: "COSMOG";
	}
>;
export type FormSettingsV0790PokemonCosmoem = FormSettings<
	"FORMS_V0790_POKEMON_COSMOEM",
	{
		forms: [
			{
				form: "COSMOEM_NORMAL";
			},
		];
		pokemon: "COSMOEM";
	}
>;
export type FormSettingsV0791PokemonSolgaleo = FormSettings<
	"FORMS_V0791_POKEMON_SOLGALEO",
	{
		forms: [
			{
				form: "SOLGALEO_NORMAL";
			},
		];
		pokemon: "SOLGALEO";
	}
>;
export type FormSettingsV0792PokemonLunala = FormSettings<
	"FORMS_V0792_POKEMON_LUNALA",
	{
		forms: [
			{
				form: "LUNALA_NORMAL";
			},
		];
		pokemon: "LUNALA";
	}
>;
export type FormSettingsV0793PokemonNihilego = FormSettings<
	"FORMS_V0793_POKEMON_NIHILEGO",
	{
		forms: [
			{
				form: "NIHILEGO_NORMAL";
			},
		];
		pokemon: "NIHILEGO";
	}
>;
export type FormSettingsV0794PokemonBuzzwole = FormSettings<
	"FORMS_V0794_POKEMON_BUZZWOLE",
	{
		forms: [
			{
				form: "BUZZWOLE_NORMAL";
			},
		];
		pokemon: "BUZZWOLE";
	}
>;
export type FormSettingsV0795PokemonPheromosa = FormSettings<
	"FORMS_V0795_POKEMON_PHEROMOSA",
	{
		forms: [
			{
				form: "PHEROMOSA_NORMAL";
			},
		];
		pokemon: "PHEROMOSA";
	}
>;
export type FormSettingsV0796PokemonXurkitree = FormSettings<
	"FORMS_V0796_POKEMON_XURKITREE",
	{
		forms: [
			{
				form: "XURKITREE_NORMAL";
			},
		];
		pokemon: "XURKITREE";
	}
>;
export type FormSettingsV0797PokemonCelesteela = FormSettings<
	"FORMS_V0797_POKEMON_CELESTEELA",
	{
		forms: [
			{
				form: "CELESTEELA_NORMAL";
			},
		];
		pokemon: "CELESTEELA";
	}
>;
export type FormSettingsV0798PokemonKartana = FormSettings<
	"FORMS_V0798_POKEMON_KARTANA",
	{
		forms: [
			{
				form: "KARTANA_NORMAL";
			},
		];
		pokemon: "KARTANA";
	}
>;
export type FormSettingsV0799PokemonGuzzlord = FormSettings<
	"FORMS_V0799_POKEMON_GUZZLORD",
	{
		forms: [
			{
				form: "GUZZLORD_NORMAL";
			},
		];
		pokemon: "GUZZLORD";
	}
>;
export type FormSettingsV0800PokemonNecrozma = FormSettings<
	"FORMS_V0800_POKEMON_NECROZMA",
	{
		forms: [
			{
				form: "NECROZMA_NORMAL";
			},
			{
				form: "NECROZMA_DUSK_MANE";
			},
			{
				form: "NECROZMA_DAWN_WINGS";
			},
			{
				form: "NECROZMA_ULTRA";
			},
		];
		pokemon: "NECROZMA";
	}
>;
export type FormSettingsV0801PokemonMagearna = FormSettings<
	"FORMS_V0801_POKEMON_MAGEARNA",
	{
		forms: [
			{
				form: "MAGEARNA_NORMAL";
			},
			{
				form: "MAGEARNA_ORIGINAL_COLOR";
			},
		];
		pokemon: "MAGEARNA";
	}
>;
export type FormSettingsV0802PokemonMarshadow = FormSettings<
	"FORMS_V0802_POKEMON_MARSHADOW",
	{
		forms: [
			{
				form: "MARSHADOW_NORMAL";
			},
		];
		pokemon: "MARSHADOW";
	}
>;
export type FormSettingsV0803PokemonPoipole = FormSettings<
	"FORMS_V0803_POKEMON_POIPOLE",
	{
		forms: [
			{
				form: "POIPOLE_NORMAL";
			},
		];
		pokemon: "POIPOLE";
	}
>;
export type FormSettingsV0804PokemonNaganadel = FormSettings<
	"FORMS_V0804_POKEMON_NAGANADEL",
	{
		forms: [
			{
				form: "NAGANADEL_NORMAL";
			},
		];
		pokemon: "NAGANADEL";
	}
>;
export type FormSettingsV0805PokemonStakataka = FormSettings<
	"FORMS_V0805_POKEMON_STAKATAKA",
	{
		forms: [
			{
				form: "STAKATAKA_NORMAL";
			},
		];
		pokemon: "STAKATAKA";
	}
>;
export type FormSettingsV0806PokemonBlacephalon = FormSettings<
	"FORMS_V0806_POKEMON_BLACEPHALON",
	{
		forms: [
			{
				form: "BLACEPHALON_NORMAL";
			},
		];
		pokemon: "BLACEPHALON";
	}
>;
export type FormSettingsV0807PokemonZeraora = FormSettings<
	"FORMS_V0807_POKEMON_ZERAORA",
	{
		forms: [
			{
				form: "ZERAORA_NORMAL";
			},
		];
		pokemon: "ZERAORA";
	}
>;
export type FormSettingsV0808PokemonMeltan = FormSettings<
	"FORMS_V0808_POKEMON_MELTAN",
	{
		forms: [
			{
				form: "MELTAN_NORMAL";
			},
		];
		pokemon: "MELTAN";
	}
>;
export type FormSettingsV0809PokemonMelmetal = FormSettings<
	"FORMS_V0809_POKEMON_MELMETAL",
	{
		forms: [
			{
				form: "MELMETAL_NORMAL";
			},
		];
		pokemon: "MELMETAL";
	}
>;
export type FormSettingsV0810PokemonGrookey = FormSettings<
	"FORMS_V0810_POKEMON_GROOKEY",
	{
		forms: [
			{
				form: "GROOKEY_NORMAL";
			},
		];
		pokemon: "GROOKEY";
	}
>;
export type FormSettingsV0811PokemonThwackey = FormSettings<
	"FORMS_V0811_POKEMON_THWACKEY",
	{
		forms: [
			{
				form: "THWACKEY_NORMAL";
			},
		];
		pokemon: "THWACKEY";
	}
>;
export type FormSettingsV0812PokemonRillaboom = FormSettings<
	"FORMS_V0812_POKEMON_RILLABOOM",
	{
		forms: [
			{
				form: "RILLABOOM_NORMAL";
			},
		];
		pokemon: "RILLABOOM";
	}
>;
export type FormSettingsV0813PokemonScorbunny = FormSettings<
	"FORMS_V0813_POKEMON_SCORBUNNY",
	{
		forms: [
			{
				form: "SCORBUNNY_NORMAL";
			},
		];
		pokemon: "SCORBUNNY";
	}
>;
export type FormSettingsV0814PokemonRaboot = FormSettings<
	"FORMS_V0814_POKEMON_RABOOT",
	{
		forms: [
			{
				form: "RABOOT_NORMAL";
			},
		];
		pokemon: "RABOOT";
	}
>;
export type FormSettingsV0815PokemonCinderace = FormSettings<
	"FORMS_V0815_POKEMON_CINDERACE",
	{
		forms: [
			{
				form: "CINDERACE_NORMAL";
			},
		];
		pokemon: "CINDERACE";
	}
>;
export type FormSettingsV0816PokemonSobble = FormSettings<
	"FORMS_V0816_POKEMON_SOBBLE",
	{
		forms: [
			{
				form: "SOBBLE_NORMAL";
			},
		];
		pokemon: "SOBBLE";
	}
>;
export type FormSettingsV0817PokemonDrizzile = FormSettings<
	"FORMS_V0817_POKEMON_DRIZZILE",
	{
		forms: [
			{
				form: "DRIZZILE_NORMAL";
			},
		];
		pokemon: "DRIZZILE";
	}
>;
export type FormSettingsV0818PokemonInteleon = FormSettings<
	"FORMS_V0818_POKEMON_INTELEON",
	{
		forms: [
			{
				form: "INTELEON_NORMAL";
			},
		];
		pokemon: "INTELEON";
	}
>;
export type FormSettingsV0819PokemonSkwovet = FormSettings<
	"FORMS_V0819_POKEMON_SKWOVET",
	{
		forms: [
			{
				form: "SKWOVET_NORMAL";
			},
		];
		pokemon: "SKWOVET";
	}
>;
export type FormSettingsV0820PokemonGreedent = FormSettings<
	"FORMS_V0820_POKEMON_GREEDENT",
	{
		forms: [
			{
				form: "GREEDENT_NORMAL";
			},
		];
		pokemon: "GREEDENT";
	}
>;
export type FormSettingsV0821PokemonRookidee = FormSettings<
	"FORMS_V0821_POKEMON_ROOKIDEE",
	{
		forms: [
			{
				form: "ROOKIDEE_NORMAL";
			},
		];
		pokemon: "ROOKIDEE";
	}
>;
export type FormSettingsV0822PokemonCorvisquire = FormSettings<
	"FORMS_V0822_POKEMON_CORVISQUIRE",
	{
		forms: [
			{
				form: "CORVISQUIRE_NORMAL";
			},
		];
		pokemon: "CORVISQUIRE";
	}
>;
export type FormSettingsV0823PokemonCorviknight = FormSettings<
	"FORMS_V0823_POKEMON_CORVIKNIGHT",
	{
		forms: [
			{
				form: "CORVIKNIGHT_NORMAL";
			},
		];
		pokemon: "CORVIKNIGHT";
	}
>;
export type FormSettingsV0824PokemonBlipbug = FormSettings<
	"FORMS_V0824_POKEMON_BLIPBUG",
	{
		forms: [
			{
				form: "BLIPBUG_NORMAL";
			},
		];
		pokemon: "BLIPBUG";
	}
>;
export type FormSettingsV0825PokemonDottler = FormSettings<
	"FORMS_V0825_POKEMON_DOTTLER",
	{
		forms: [
			{
				form: "DOTTLER_NORMAL";
			},
		];
		pokemon: "DOTTLER";
	}
>;
export type FormSettingsV0826PokemonOrbeetle = FormSettings<
	"FORMS_V0826_POKEMON_ORBEETLE",
	{
		forms: [
			{
				form: "ORBEETLE_NORMAL";
			},
		];
		pokemon: "ORBEETLE";
	}
>;
export type FormSettingsV0827PokemonNickit = FormSettings<
	"FORMS_V0827_POKEMON_NICKIT",
	{
		forms: [
			{
				form: "NICKIT_NORMAL";
			},
		];
		pokemon: "NICKIT";
	}
>;
export type FormSettingsV0828PokemonThievul = FormSettings<
	"FORMS_V0828_POKEMON_THIEVUL",
	{
		forms: [
			{
				form: "THIEVUL_NORMAL";
			},
		];
		pokemon: "THIEVUL";
	}
>;
export type FormSettingsV0829PokemonGossifleur = FormSettings<
	"FORMS_V0829_POKEMON_GOSSIFLEUR",
	{
		forms: [
			{
				form: "GOSSIFLEUR_NORMAL";
			},
		];
		pokemon: "GOSSIFLEUR";
	}
>;
export type FormSettingsV0830PokemonEldegoss = FormSettings<
	"FORMS_V0830_POKEMON_ELDEGOSS",
	{
		forms: [
			{
				form: "ELDEGOSS_NORMAL";
			},
		];
		pokemon: "ELDEGOSS";
	}
>;
export type FormSettingsV0831PokemonWooloo = FormSettings<
	"FORMS_V0831_POKEMON_WOOLOO",
	{
		forms: [
			{
				form: "WOOLOO_NORMAL";
			},
		];
		pokemon: "WOOLOO";
	}
>;
export type FormSettingsV0832PokemonDubwool = FormSettings<
	"FORMS_V0832_POKEMON_DUBWOOL",
	{
		forms: [
			{
				form: "DUBWOOL_NORMAL";
			},
		];
		pokemon: "DUBWOOL";
	}
>;
export type FormSettingsV0833PokemonChewtle = FormSettings<
	"FORMS_V0833_POKEMON_CHEWTLE",
	{
		forms: [
			{
				form: "CHEWTLE_NORMAL";
			},
		];
		pokemon: "CHEWTLE";
	}
>;
export type FormSettingsV0834PokemonDrednaw = FormSettings<
	"FORMS_V0834_POKEMON_DREDNAW",
	{
		forms: [
			{
				form: "DREDNAW_NORMAL";
			},
		];
		pokemon: "DREDNAW";
	}
>;
export type FormSettingsV0835PokemonYamper = FormSettings<
	"FORMS_V0835_POKEMON_YAMPER",
	{
		forms: [
			{
				form: "YAMPER_NORMAL";
			},
		];
		pokemon: "YAMPER";
	}
>;
export type FormSettingsV0836PokemonBoltund = FormSettings<
	"FORMS_V0836_POKEMON_BOLTUND",
	{
		forms: [
			{
				form: "BOLTUND_NORMAL";
			},
		];
		pokemon: "BOLTUND";
	}
>;
export type FormSettingsV0837PokemonRolycoly = FormSettings<
	"FORMS_V0837_POKEMON_ROLYCOLY",
	{
		forms: [
			{
				form: "ROLYCOLY_NORMAL";
			},
		];
		pokemon: "ROLYCOLY";
	}
>;
export type FormSettingsV0838PokemonCarkol = FormSettings<
	"FORMS_V0838_POKEMON_CARKOL",
	{
		forms: [
			{
				form: "CARKOL_NORMAL";
			},
		];
		pokemon: "CARKOL";
	}
>;
export type FormSettingsV0839PokemonCoalossal = FormSettings<
	"FORMS_V0839_POKEMON_COALOSSAL",
	{
		forms: [
			{
				form: "COALOSSAL_NORMAL";
			},
		];
		pokemon: "COALOSSAL";
	}
>;
export type FormSettingsV0840PokemonApplin = FormSettings<
	"FORMS_V0840_POKEMON_APPLIN",
	{
		forms: [
			{
				form: "APPLIN_NORMAL";
			},
		];
		pokemon: "APPLIN";
	}
>;
export type FormSettingsV0841PokemonFlapple = FormSettings<
	"FORMS_V0841_POKEMON_FLAPPLE",
	{
		forms: [
			{
				form: "FLAPPLE_NORMAL";
			},
		];
		pokemon: "FLAPPLE";
	}
>;
export type FormSettingsV0842PokemonAppletun = FormSettings<
	"FORMS_V0842_POKEMON_APPLETUN",
	{
		forms: [
			{
				form: "APPLETUN_NORMAL";
			},
		];
		pokemon: "APPLETUN";
	}
>;
export type FormSettingsV0843PokemonSilicobra = FormSettings<
	"FORMS_V0843_POKEMON_SILICOBRA",
	{
		forms: [
			{
				form: "SILICOBRA_NORMAL";
			},
		];
		pokemon: "SILICOBRA";
	}
>;
export type FormSettingsV0844PokemonSandaconda = FormSettings<
	"FORMS_V0844_POKEMON_SANDACONDA",
	{
		forms: [
			{
				form: "SANDACONDA_NORMAL";
			},
		];
		pokemon: "SANDACONDA";
	}
>;
export type FormSettingsV0845PokemonCramorant = FormSettings<
	"FORMS_V0845_POKEMON_CRAMORANT",
	{
		forms: [
			{
				form: "CRAMORANT_NORMAL";
			},
		];
		pokemon: "CRAMORANT";
	}
>;
export type FormSettingsV0846PokemonArrokuda = FormSettings<
	"FORMS_V0846_POKEMON_ARROKUDA",
	{
		forms: [
			{
				form: "ARROKUDA_NORMAL";
			},
		];
		pokemon: "ARROKUDA";
	}
>;
export type FormSettingsV0847PokemonBarraskewda = FormSettings<
	"FORMS_V0847_POKEMON_BARRASKEWDA",
	{
		forms: [
			{
				form: "BARRASKEWDA_NORMAL";
			},
		];
		pokemon: "BARRASKEWDA";
	}
>;
export type FormSettingsV0848PokemonToxel = FormSettings<
	"FORMS_V0848_POKEMON_TOXEL",
	{
		forms: [
			{
				form: "TOXEL_NORMAL";
			},
		];
		pokemon: "TOXEL";
	}
>;
export type FormSettingsV0849PokemonToxtricity = FormSettings<
	"FORMS_V0849_POKEMON_TOXTRICITY",
	{
		forms: [
			{
				form: "TOXTRICITY_LOW_KEY";
			},
			{
				form: "TOXTRICITY_AMPED";
			},
		];
		pokemon: "TOXTRICITY";
	}
>;
export type FormSettingsV0850PokemonSizzlipede = FormSettings<
	"FORMS_V0850_POKEMON_SIZZLIPEDE",
	{
		forms: [
			{
				form: "SIZZLIPEDE_NORMAL";
			},
		];
		pokemon: "SIZZLIPEDE";
	}
>;
export type FormSettingsV0851PokemonCentiskorch = FormSettings<
	"FORMS_V0851_POKEMON_CENTISKORCH",
	{
		forms: [
			{
				form: "CENTISKORCH_NORMAL";
			},
		];
		pokemon: "CENTISKORCH";
	}
>;
export type FormSettingsV0852PokemonClobbopus = FormSettings<
	"FORMS_V0852_POKEMON_CLOBBOPUS",
	{
		forms: [
			{
				form: "CLOBBOPUS_NORMAL";
			},
		];
		pokemon: "CLOBBOPUS";
	}
>;
export type FormSettingsV0853PokemonGrapploct = FormSettings<
	"FORMS_V0853_POKEMON_GRAPPLOCT",
	{
		forms: [
			{
				form: "GRAPPLOCT_NORMAL";
			},
		];
		pokemon: "GRAPPLOCT";
	}
>;
export type FormSettingsV0854PokemonSinistea = FormSettings<
	"FORMS_V0854_POKEMON_SINISTEA",
	{
		forms: [
			{
				form: "SINISTEA_PHONY";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "SINISTEA_PHONY";
				};
			},
			{
				form: "SINISTEA_ANTIQUE";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "SINISTEA_PHONY";
				};
			},
		];
		pokemon: "SINISTEA";
	}
>;
export type FormSettingsV0855PokemonPolteageist = FormSettings<
	"FORMS_V0855_POKEMON_POLTEAGEIST",
	{
		forms: [
			{
				form: "POLTEAGEIST_PHONY";
			},
			{
				form: "POLTEAGEIST_ANTIQUE";
			},
		];
		pokemon: "POLTEAGEIST";
	}
>;
export type FormSettingsV0856PokemonHatenna = FormSettings<
	"FORMS_V0856_POKEMON_HATENNA",
	{
		forms: [
			{
				form: "HATENNA_NORMAL";
			},
		];
		pokemon: "HATENNA";
	}
>;
export type FormSettingsV0857PokemonHattrem = FormSettings<
	"FORMS_V0857_POKEMON_HATTREM",
	{
		forms: [
			{
				form: "HATTREM_NORMAL";
			},
		];
		pokemon: "HATTREM";
	}
>;
export type FormSettingsV0858PokemonHatterene = FormSettings<
	"FORMS_V0858_POKEMON_HATTERENE",
	{
		forms: [
			{
				form: "HATTERENE_NORMAL";
			},
		];
		pokemon: "HATTERENE";
	}
>;
export type FormSettingsV0859PokemonImpidimp = FormSettings<
	"FORMS_V0859_POKEMON_IMPIDIMP",
	{
		forms: [
			{
				form: "IMPIDIMP_NORMAL";
			},
		];
		pokemon: "IMPIDIMP";
	}
>;
export type FormSettingsV0860PokemonMorgrem = FormSettings<
	"FORMS_V0860_POKEMON_MORGREM",
	{
		forms: [
			{
				form: "MORGREM_NORMAL";
			},
		];
		pokemon: "MORGREM";
	}
>;
export type FormSettingsV0861PokemonGrimmsnarl = FormSettings<
	"FORMS_V0861_POKEMON_GRIMMSNARL",
	{
		forms: [
			{
				form: "GRIMMSNARL_NORMAL";
			},
		];
		pokemon: "GRIMMSNARL";
	}
>;
export type FormSettingsV0862PokemonObstagoon = FormSettings<
	"FORMS_V0862_POKEMON_OBSTAGOON",
	{
		forms: [
			{
				assetBundleValue: 31;
				form: "OBSTAGOON_NORMAL";
			},
		];
		pokemon: "OBSTAGOON";
	}
>;
export type FormSettingsV0863PokemonPerrserker = FormSettings<
	"FORMS_V0863_POKEMON_PERRSERKER",
	{
		forms: [
			{
				assetBundleValue: 31;
				form: "PERRSERKER_NORMAL";
			},
		];
		pokemon: "PERRSERKER";
	}
>;
export type FormSettingsV0864PokemonCursola = FormSettings<
	"FORMS_V0864_POKEMON_CURSOLA",
	{
		forms: [
			{
				form: "CURSOLA_NORMAL";
			},
		];
		pokemon: "CURSOLA";
	}
>;
export type FormSettingsV0865PokemonSirfetchd = FormSettings<
	"FORMS_V0865_POKEMON_SIRFETCHD",
	{
		forms: [
			{
				assetBundleValue: 31;
				form: "SIRFETCHD_NORMAL";
			},
		];
		pokemon: "SIRFETCHD";
	}
>;
export type FormSettingsV0866PokemonMrRime = FormSettings<
	"FORMS_V0866_POKEMON_MR_RIME",
	{
		forms: [
			{
				assetBundleValue: 31;
				form: "MR_RIME_NORMAL";
			},
		];
		pokemon: "MR_RIME";
	}
>;
export type FormSettingsV0867PokemonRunerigus = FormSettings<
	"FORMS_V0867_POKEMON_RUNERIGUS",
	{
		forms: [
			{
				assetBundleValue: 31;
				form: "RUNERIGUS_NORMAL";
			},
		];
		pokemon: "RUNERIGUS";
	}
>;
export type FormSettingsV0868PokemonMilcery = FormSettings<
	"FORMS_V0868_POKEMON_MILCERY",
	{
		forms: [
			{
				form: "MILCERY_NORMAL";
			},
		];
		pokemon: "MILCERY";
	}
>;
export type FormSettingsV0869PokemonAlcremie = FormSettings<
	"FORMS_V0869_POKEMON_ALCREMIE",
	{
		forms: [
			{
				form: "ALCREMIE_NORMAL";
			},
		];
		pokemon: "ALCREMIE";
	}
>;
export type FormSettingsV0870PokemonFalinks = FormSettings<
	"FORMS_V0870_POKEMON_FALINKS",
	{
		forms: [
			{
				form: "FALINKS_NORMAL";
			},
			{
				form: "FALINKS_GOFEST_2025_TRAIN_CONDUCTOR";
				isCostume: true;
			},
		];
		pokemon: "FALINKS";
	}
>;
export type FormSettingsV0871PokemonPincurchin = FormSettings<
	"FORMS_V0871_POKEMON_PINCURCHIN",
	{
		forms: [
			{
				form: "PINCURCHIN_NORMAL";
			},
		];
		pokemon: "PINCURCHIN";
	}
>;
export type FormSettingsV0872PokemonSnom = FormSettings<
	"FORMS_V0872_POKEMON_SNOM",
	{
		forms: [
			{
				form: "SNOM_NORMAL";
			},
		];
		pokemon: "SNOM";
	}
>;
export type FormSettingsV0873PokemonFrosmoth = FormSettings<
	"FORMS_V0873_POKEMON_FROSMOTH",
	{
		forms: [
			{
				form: "FROSMOTH_NORMAL";
			},
		];
		pokemon: "FROSMOTH";
	}
>;
export type FormSettingsV0874PokemonStonjourner = FormSettings<
	"FORMS_V0874_POKEMON_STONJOURNER",
	{
		forms: [
			{
				form: "STONJOURNER_NORMAL";
			},
		];
		pokemon: "STONJOURNER";
	}
>;
export type FormSettingsV0875PokemonEiscue = FormSettings<
	"FORMS_V0875_POKEMON_EISCUE",
	{
		forms: [
			{
				form: "EISCUE_ICE";
			},
			{
				form: "EISCUE_NOICE";
			},
		];
		pokemon: "EISCUE";
	}
>;
export type FormSettingsV0876PokemonIndeedee = FormSettings<
	"FORMS_V0876_POKEMON_INDEEDEE",
	{
		forms: [
			{
				form: "INDEEDEE_MALE";
			},
			{
				form: "INDEEDEE_FEMALE";
			},
		];
		pokemon: "INDEEDEE";
	}
>;
export type FormSettingsV0877PokemonMorpeko = FormSettings<
	"FORMS_V0877_POKEMON_MORPEKO",
	{
		forms: [
			{
				form: "MORPEKO_FULL_BELLY";
			},
			{
				form: "MORPEKO_HANGRY";
			},
		];
		pokemon: "MORPEKO";
	}
>;
export type FormSettingsV0878PokemonCufant = FormSettings<
	"FORMS_V0878_POKEMON_CUFANT",
	{
		forms: [
			{
				form: "CUFANT_NORMAL";
			},
		];
		pokemon: "CUFANT";
	}
>;
export type FormSettingsV0879PokemonCopperajah = FormSettings<
	"FORMS_V0879_POKEMON_COPPERAJAH",
	{
		forms: [
			{
				form: "COPPERAJAH_NORMAL";
			},
		];
		pokemon: "COPPERAJAH";
	}
>;
export type FormSettingsV0880PokemonDracozolt = FormSettings<
	"FORMS_V0880_POKEMON_DRACOZOLT",
	{
		forms: [
			{
				form: "DRACOZOLT_NORMAL";
			},
		];
		pokemon: "DRACOZOLT";
	}
>;
export type FormSettingsV0881PokemonArctozolt = FormSettings<
	"FORMS_V0881_POKEMON_ARCTOZOLT",
	{
		forms: [
			{
				form: "ARCTOZOLT_NORMAL";
			},
		];
		pokemon: "ARCTOZOLT";
	}
>;
export type FormSettingsV0882PokemonDracovish = FormSettings<
	"FORMS_V0882_POKEMON_DRACOVISH",
	{
		forms: [
			{
				form: "DRACOVISH_NORMAL";
			},
		];
		pokemon: "DRACOVISH";
	}
>;
export type FormSettingsV0883PokemonArctovish = FormSettings<
	"FORMS_V0883_POKEMON_ARCTOVISH",
	{
		forms: [
			{
				form: "ARCTOVISH_NORMAL";
			},
		];
		pokemon: "ARCTOVISH";
	}
>;
export type FormSettingsV0884PokemonDuraludon = FormSettings<
	"FORMS_V0884_POKEMON_DURALUDON",
	{
		forms: [
			{
				form: "DURALUDON_NORMAL";
			},
		];
		pokemon: "DURALUDON";
	}
>;
export type FormSettingsV0885PokemonDreepy = FormSettings<
	"FORMS_V0885_POKEMON_DREEPY",
	{
		forms: [
			{
				form: "DREEPY_NORMAL";
			},
		];
		pokemon: "DREEPY";
	}
>;
export type FormSettingsV0886PokemonDrakloak = FormSettings<
	"FORMS_V0886_POKEMON_DRAKLOAK",
	{
		forms: [
			{
				form: "DRAKLOAK_NORMAL";
			},
		];
		pokemon: "DRAKLOAK";
	}
>;
export type FormSettingsV0887PokemonDragapult = FormSettings<
	"FORMS_V0887_POKEMON_DRAGAPULT",
	{
		forms: [
			{
				form: "DRAGAPULT_NORMAL";
			},
		];
		pokemon: "DRAGAPULT";
	}
>;
export type FormSettingsV0888PokemonZacian = FormSettings<
	"FORMS_V0888_POKEMON_ZACIAN",
	{
		forms: [
			{
				form: "ZACIAN_HERO";
			},
			{
				form: "ZACIAN_CROWNED_SWORD";
			},
		];
		pokemon: "ZACIAN";
	}
>;
export type FormSettingsV0889PokemonZamazenta = FormSettings<
	"FORMS_V0889_POKEMON_ZAMAZENTA",
	{
		forms: [
			{
				form: "ZAMAZENTA_HERO";
			},
			{
				form: "ZAMAZENTA_CROWNED_SHIELD";
			},
		];
		pokemon: "ZAMAZENTA";
	}
>;
export type FormSettingsV0890PokemonEternatus = FormSettings<
	"FORMS_V0890_POKEMON_ETERNATUS",
	{
		forms: [
			{
				form: "ETERNATUS_NORMAL";
			},
			{
				form: "ETERNATUS_ETERNAMAX";
			},
		];
		pokemon: "ETERNATUS";
	}
>;
export type FormSettingsV0891PokemonKubfu = FormSettings<
	"FORMS_V0891_POKEMON_KUBFU",
	{
		forms: [
			{
				form: "KUBFU_NORMAL";
			},
		];
		pokemon: "KUBFU";
	}
>;
export type FormSettingsV0892PokemonUrshifu = FormSettings<
	"FORMS_V0892_POKEMON_URSHIFU",
	{
		forms: [
			{
				form: "URSHIFU_SINGLE_STRIKE";
			},
			{
				form: "URSHIFU_RAPID_STRIKE";
			},
		];
		pokemon: "URSHIFU";
	}
>;
export type FormSettingsV0893PokemonZarude = FormSettings<
	"FORMS_V0893_POKEMON_ZARUDE",
	{
		forms: [
			{
				form: "ZARUDE_NORMAL";
			},
		];
		pokemon: "ZARUDE";
	}
>;
export type FormSettingsV0894PokemonRegieleki = FormSettings<
	"FORMS_V0894_POKEMON_REGIELEKI",
	{
		forms: [
			{
				form: "REGIELEKI_NORMAL";
			},
		];
		pokemon: "REGIELEKI";
	}
>;
export type FormSettingsV0895PokemonRegidrago = FormSettings<
	"FORMS_V0895_POKEMON_REGIDRAGO",
	{
		forms: [
			{
				form: "REGIDRAGO_NORMAL";
			},
		];
		pokemon: "REGIDRAGO";
	}
>;
export type FormSettingsV0896PokemonGlastrier = FormSettings<
	"FORMS_V0896_POKEMON_GLASTRIER",
	{
		forms: [
			{
				form: "GLASTRIER_NORMAL";
			},
		];
		pokemon: "GLASTRIER";
	}
>;
export type FormSettingsV0897PokemonSpectrier = FormSettings<
	"FORMS_V0897_POKEMON_SPECTRIER",
	{
		forms: [
			{
				form: "SPECTRIER_NORMAL";
			},
		];
		pokemon: "SPECTRIER";
	}
>;
export type FormSettingsV0898PokemonCalyrex = FormSettings<
	"FORMS_V0898_POKEMON_CALYREX",
	{
		forms: [
			{
				form: "CALYREX_NORMAL";
			},
			{
				form: "CALYREX_ICE_RIDER";
			},
			{
				form: "CALYREX_SHADOW_RIDER";
			},
		];
		pokemon: "CALYREX";
	}
>;
export type FormSettingsV0899PokemonWyrdeer = FormSettings<
	"FORMS_V0899_POKEMON_WYRDEER",
	{
		forms: [
			{
				form: "WYRDEER_NORMAL";
			},
		];
		pokemon: "WYRDEER";
	}
>;
export type FormSettingsV0900PokemonKleavor = FormSettings<
	"FORMS_V0900_POKEMON_KLEAVOR",
	{
		forms: [
			{
				form: "KLEAVOR_NORMAL";
			},
		];
		pokemon: "KLEAVOR";
	}
>;
export type FormSettingsV0901PokemonUrsaluna = FormSettings<
	"FORMS_V0901_POKEMON_URSALUNA",
	{
		forms: [
			{
				form: "URSALUNA_NORMAL";
			},
		];
		pokemon: "URSALUNA";
	}
>;
export type FormSettingsV0902PokemonBasculegion = FormSettings<
	"FORMS_V0902_POKEMON_BASCULEGION",
	{
		forms: [
			{
				form: "BASCULEGION_NORMAL";
			},
			{
				form: "BASCULEGION_FEMALE";
			},
		];
		pokemon: "BASCULEGION";
	}
>;
export type FormSettingsV0903PokemonSneasler = FormSettings<
	"FORMS_V0903_POKEMON_SNEASLER",
	{
		forms: [
			{
				form: "SNEASLER_NORMAL";
			},
		];
		pokemon: "SNEASLER";
	}
>;
export type FormSettingsV0904PokemonOverqwil = FormSettings<
	"FORMS_V0904_POKEMON_OVERQWIL",
	{
		forms: [
			{
				form: "OVERQWIL_NORMAL";
			},
		];
		pokemon: "OVERQWIL";
	}
>;
export type FormSettingsV0905PokemonEnamorus = FormSettings<
	"FORMS_V0905_POKEMON_ENAMORUS",
	{
		forms: [
			{
				form: "ENAMORUS_INCARNATE";
			},
			{
				form: "ENAMORUS_THERIAN";
			},
		];
		pokemon: "ENAMORUS";
	}
>;
export type FormSettingsV0906PokemonSprigatito = FormSettings<
	"FORMS_V0906_POKEMON_SPRIGATITO",
	{
		forms: [
			{
				form: "SPRIGATITO_NORMAL";
			},
		];
		pokemon: "SPRIGATITO";
	}
>;
export type FormSettingsV0907PokemonFloragato = FormSettings<
	"FORMS_V0907_POKEMON_FLORAGATO",
	{
		forms: [
			{
				form: "FLORAGATO_NORMAL";
			},
		];
		pokemon: "FLORAGATO";
	}
>;
export type FormSettingsV0908PokemonMeowscarada = FormSettings<
	"FORMS_V0908_POKEMON_MEOWSCARADA",
	{
		forms: [
			{
				form: "MEOWSCARADA_NORMAL";
			},
		];
		pokemon: "MEOWSCARADA";
	}
>;
export type FormSettingsV0909PokemonFuecoco = FormSettings<
	"FORMS_V0909_POKEMON_FUECOCO",
	{
		forms: [
			{
				form: "FUECOCO_NORMAL";
			},
		];
		pokemon: "FUECOCO";
	}
>;
export type FormSettingsV0910PokemonCrocalor = FormSettings<
	"FORMS_V0910_POKEMON_CROCALOR",
	{
		forms: [
			{
				form: "CROCALOR_NORMAL";
			},
		];
		pokemon: "CROCALOR";
	}
>;
export type FormSettingsV0911PokemonSkeledirge = FormSettings<
	"FORMS_V0911_POKEMON_SKELEDIRGE",
	{
		forms: [
			{
				form: "SKELEDIRGE_NORMAL";
			},
		];
		pokemon: "SKELEDIRGE";
	}
>;
export type FormSettingsV0912PokemonQuaxly = FormSettings<
	"FORMS_V0912_POKEMON_QUAXLY",
	{
		forms: [
			{
				form: "QUAXLY_NORMAL";
			},
		];
		pokemon: "QUAXLY";
	}
>;
export type FormSettingsV0913PokemonQuaxwell = FormSettings<
	"FORMS_V0913_POKEMON_QUAXWELL",
	{
		forms: [
			{
				form: "QUAXWELL_NORMAL";
			},
		];
		pokemon: "QUAXWELL";
	}
>;
export type FormSettingsV0914PokemonQuaquaval = FormSettings<
	"FORMS_V0914_POKEMON_QUAQUAVAL",
	{
		forms: [
			{
				form: "QUAQUAVAL_NORMAL";
			},
		];
		pokemon: "QUAQUAVAL";
	}
>;
export type FormSettingsV0915PokemonLechonk = FormSettings<
	"FORMS_V0915_POKEMON_LECHONK",
	{
		forms: [
			{
				form: "LECHONK_NORMAL";
			},
		];
		pokemon: "LECHONK";
	}
>;
export type FormSettingsV0916PokemonOinkologne = FormSettings<
	"FORMS_V0916_POKEMON_OINKOLOGNE",
	{
		forms: [
			{
				form: "OINKOLOGNE_NORMAL";
			},
			{
				form: "OINKOLOGNE_FEMALE";
			},
		];
		pokemon: "OINKOLOGNE";
	}
>;
export type FormSettingsV0917PokemonTarountula = FormSettings<
	"FORMS_V0917_POKEMON_TAROUNTULA",
	{
		forms: [
			{
				form: "TAROUNTULA_NORMAL";
			},
		];
		pokemon: "TAROUNTULA";
	}
>;
export type FormSettingsV0918PokemonSpidops = FormSettings<
	"FORMS_V0918_POKEMON_SPIDOPS",
	{
		forms: [
			{
				form: "SPIDOPS_NORMAL";
			},
		];
		pokemon: "SPIDOPS";
	}
>;
export type FormSettingsV0919PokemonNymble = FormSettings<
	"FORMS_V0919_POKEMON_NYMBLE",
	{
		forms: [
			{
				form: "NYMBLE_NORMAL";
			},
		];
		pokemon: "NYMBLE";
	}
>;
export type FormSettingsV0920PokemonLokix = FormSettings<
	"FORMS_V0920_POKEMON_LOKIX",
	{
		forms: [
			{
				form: "LOKIX_NORMAL";
			},
		];
		pokemon: "LOKIX";
	}
>;
export type FormSettingsV0921PokemonPawmi = FormSettings<
	"FORMS_V0921_POKEMON_PAWMI",
	{
		forms: [
			{
				form: "PAWMI_NORMAL";
			},
		];
		pokemon: "PAWMI";
	}
>;
export type FormSettingsV0922PokemonPawmo = FormSettings<
	"FORMS_V0922_POKEMON_PAWMO",
	{
		forms: [
			{
				form: "PAWMO_NORMAL";
			},
		];
		pokemon: "PAWMO";
	}
>;
export type FormSettingsV0923PokemonPawmot = FormSettings<
	"FORMS_V0923_POKEMON_PAWMOT",
	{
		forms: [
			{
				form: "PAWMOT_NORMAL";
			},
		];
		pokemon: "PAWMOT";
	}
>;
export type FormSettingsV0924PokemonTandemaus = FormSettings<
	"FORMS_V0924_POKEMON_TANDEMAUS",
	{
		forms: [
			{
				form: "TANDEMAUS_NORMAL";
			},
		];
		pokemon: "TANDEMAUS";
	}
>;
export type FormSettingsV0925PokemonMaushold = FormSettings<
	"FORMS_V0925_POKEMON_MAUSHOLD",
	{
		forms: [
			{
				form: "MAUSHOLD_FAMILY_OF_FOUR";
			},
			{
				form: "MAUSHOLD_FAMILY_OF_THREE";
			},
		];
		pokemon: "MAUSHOLD";
	}
>;
export type FormSettingsV0926PokemonFidough = FormSettings<
	"FORMS_V0926_POKEMON_FIDOUGH",
	{
		forms: [
			{
				form: "FIDOUGH_NORMAL";
			},
		];
		pokemon: "FIDOUGH";
	}
>;
export type FormSettingsV0927PokemonDachsbun = FormSettings<
	"FORMS_V0927_POKEMON_DACHSBUN",
	{
		forms: [
			{
				form: "DACHSBUN_NORMAL";
			},
		];
		pokemon: "DACHSBUN";
	}
>;
export type FormSettingsV0928PokemonSmoliv = FormSettings<
	"FORMS_V0928_POKEMON_SMOLIV",
	{
		forms: [
			{
				form: "SMOLIV_NORMAL";
			},
		];
		pokemon: "SMOLIV";
	}
>;
export type FormSettingsV0929PokemonDolliv = FormSettings<
	"FORMS_V0929_POKEMON_DOLLIV",
	{
		forms: [
			{
				form: "DOLLIV_NORMAL";
			},
		];
		pokemon: "DOLLIV";
	}
>;
export type FormSettingsV0930PokemonArboliva = FormSettings<
	"FORMS_V0930_POKEMON_ARBOLIVA",
	{
		forms: [
			{
				form: "ARBOLIVA_NORMAL";
			},
		];
		pokemon: "ARBOLIVA";
	}
>;
export type FormSettingsV0931PokemonSquawkabilly = FormSettings<
	"FORMS_V0931_POKEMON_SQUAWKABILLY",
	{
		forms: [
			{
				form: "SQUAWKABILLY_GREEN";
			},
			{
				form: "SQUAWKABILLY_BLUE";
			},
			{
				form: "SQUAWKABILLY_YELLOW";
			},
			{
				form: "SQUAWKABILLY_WHITE";
			},
		];
		pokemon: "SQUAWKABILLY";
	}
>;
export type FormSettingsV0932PokemonNacli = FormSettings<
	"FORMS_V0932_POKEMON_NACLI",
	{
		forms: [
			{
				form: "NACLI_NORMAL";
			},
		];
		pokemon: "NACLI";
	}
>;
export type FormSettingsV0933PokemonNaclstack = FormSettings<
	"FORMS_V0933_POKEMON_NACLSTACK",
	{
		forms: [
			{
				form: "NACLSTACK_NORMAL";
			},
		];
		pokemon: "NACLSTACK";
	}
>;
export type FormSettingsV0934PokemonGarganacl = FormSettings<
	"FORMS_V0934_POKEMON_GARGANACL",
	{
		forms: [
			{
				form: "GARGANACL_NORMAL";
			},
		];
		pokemon: "GARGANACL";
	}
>;
export type FormSettingsV0935PokemonCharcadet = FormSettings<
	"FORMS_V0935_POKEMON_CHARCADET",
	{
		forms: [
			{
				form: "CHARCADET_NORMAL";
			},
		];
		pokemon: "CHARCADET";
	}
>;
export type FormSettingsV0936PokemonArmarouge = FormSettings<
	"FORMS_V0936_POKEMON_ARMAROUGE",
	{
		forms: [
			{
				form: "ARMAROUGE_NORMAL";
			},
		];
		pokemon: "ARMAROUGE";
	}
>;
export type FormSettingsV0937PokemonCeruledge = FormSettings<
	"FORMS_V0937_POKEMON_CERULEDGE",
	{
		forms: [
			{
				form: "CERULEDGE_NORMAL";
			},
		];
		pokemon: "CERULEDGE";
	}
>;
export type FormSettingsV0938PokemonTadbulb = FormSettings<
	"FORMS_V0938_POKEMON_TADBULB",
	{
		forms: [
			{
				form: "TADBULB_NORMAL";
			},
		];
		pokemon: "TADBULB";
	}
>;
export type FormSettingsV0939PokemonBellibolt = FormSettings<
	"FORMS_V0939_POKEMON_BELLIBOLT",
	{
		forms: [
			{
				form: "BELLIBOLT_NORMAL";
			},
		];
		pokemon: "BELLIBOLT";
	}
>;
export type FormSettingsV0940PokemonWattrel = FormSettings<
	"FORMS_V0940_POKEMON_WATTREL",
	{
		forms: [
			{
				form: "WATTREL_NORMAL";
			},
		];
		pokemon: "WATTREL";
	}
>;
export type FormSettingsV0941PokemonKilowattrel = FormSettings<
	"FORMS_V0941_POKEMON_KILOWATTREL",
	{
		forms: [
			{
				form: "KILOWATTREL_NORMAL";
			},
		];
		pokemon: "KILOWATTREL";
	}
>;
export type FormSettingsV0942PokemonMaschiff = FormSettings<
	"FORMS_V0942_POKEMON_MASCHIFF",
	{
		forms: [
			{
				form: "MASCHIFF_NORMAL";
			},
		];
		pokemon: "MASCHIFF";
	}
>;
export type FormSettingsV0943PokemonMabosstiff = FormSettings<
	"FORMS_V0943_POKEMON_MABOSSTIFF",
	{
		forms: [
			{
				form: "MABOSSTIFF_NORMAL";
			},
		];
		pokemon: "MABOSSTIFF";
	}
>;
export type FormSettingsV0944PokemonShroodle = FormSettings<
	"FORMS_V0944_POKEMON_SHROODLE",
	{
		forms: [
			{
				form: "SHROODLE_NORMAL";
			},
		];
		pokemon: "SHROODLE";
	}
>;
export type FormSettingsV0945PokemonGrafaiai = FormSettings<
	"FORMS_V0945_POKEMON_GRAFAIAI",
	{
		forms: [
			{
				form: "GRAFAIAI_NORMAL";
			},
		];
		pokemon: "GRAFAIAI";
	}
>;
export type FormSettingsV0946PokemonBramblin = FormSettings<
	"FORMS_V0946_POKEMON_BRAMBLIN",
	{
		forms: [
			{
				form: "BRAMBLIN_NORMAL";
			},
		];
		pokemon: "BRAMBLIN";
	}
>;
export type FormSettingsV0947PokemonBrambleghast = FormSettings<
	"FORMS_V0947_POKEMON_BRAMBLEGHAST",
	{
		forms: [
			{
				form: "BRAMBLEGHAST_NORMAL";
			},
		];
		pokemon: "BRAMBLEGHAST";
	}
>;
export type FormSettingsV0948PokemonToedscool = FormSettings<
	"FORMS_V0948_POKEMON_TOEDSCOOL",
	{
		forms: [
			{
				form: "TOEDSCOOL_NORMAL";
			},
		];
		pokemon: "TOEDSCOOL";
	}
>;
export type FormSettingsV0949PokemonToedscruel = FormSettings<
	"FORMS_V0949_POKEMON_TOEDSCRUEL",
	{
		forms: [
			{
				form: "TOEDSCRUEL_NORMAL";
			},
		];
		pokemon: "TOEDSCRUEL";
	}
>;
export type FormSettingsV0950PokemonKlawf = FormSettings<
	"FORMS_V0950_POKEMON_KLAWF",
	{
		forms: [
			{
				form: "KLAWF_NORMAL";
			},
		];
		pokemon: "KLAWF";
	}
>;
export type FormSettingsV0951PokemonCapsakid = FormSettings<
	"FORMS_V0951_POKEMON_CAPSAKID",
	{
		forms: [
			{
				form: "CAPSAKID_NORMAL";
			},
		];
		pokemon: "CAPSAKID";
	}
>;
export type FormSettingsV0952PokemonScovillain = FormSettings<
	"FORMS_V0952_POKEMON_SCOVILLAIN",
	{
		forms: [
			{
				form: "SCOVILLAIN_NORMAL";
			},
		];
		pokemon: "SCOVILLAIN";
	}
>;
export type FormSettingsV0953PokemonRellor = FormSettings<
	"FORMS_V0953_POKEMON_RELLOR",
	{
		forms: [
			{
				form: "RELLOR_NORMAL";
			},
		];
		pokemon: "RELLOR";
	}
>;
export type FormSettingsV0954PokemonRabsca = FormSettings<
	"FORMS_V0954_POKEMON_RABSCA",
	{
		forms: [
			{
				form: "RABSCA_NORMAL";
			},
		];
		pokemon: "RABSCA";
	}
>;
export type FormSettingsV0955PokemonFlittle = FormSettings<
	"FORMS_V0955_POKEMON_FLITTLE",
	{
		forms: [
			{
				form: "FLITTLE_NORMAL";
			},
		];
		pokemon: "FLITTLE";
	}
>;
export type FormSettingsV0956PokemonEspathra = FormSettings<
	"FORMS_V0956_POKEMON_ESPATHRA",
	{
		forms: [
			{
				form: "ESPATHRA_NORMAL";
			},
		];
		pokemon: "ESPATHRA";
	}
>;
export type FormSettingsV0957PokemonTinkatink = FormSettings<
	"FORMS_V0957_POKEMON_TINKATINK",
	{
		forms: [
			{
				form: "TINKATINK_NORMAL";
			},
		];
		pokemon: "TINKATINK";
	}
>;
export type FormSettingsV0958PokemonTinkatuff = FormSettings<
	"FORMS_V0958_POKEMON_TINKATUFF",
	{
		forms: [
			{
				form: "TINKATUFF_NORMAL";
			},
		];
		pokemon: "TINKATUFF";
	}
>;
export type FormSettingsV0959PokemonTinkaton = FormSettings<
	"FORMS_V0959_POKEMON_TINKATON",
	{
		forms: [
			{
				form: "TINKATON_NORMAL";
			},
		];
		pokemon: "TINKATON";
	}
>;
export type FormSettingsV0960PokemonWiglett = FormSettings<
	"FORMS_V0960_POKEMON_WIGLETT",
	{
		forms: [
			{
				form: "WIGLETT_NORMAL";
			},
		];
		pokemon: "WIGLETT";
	}
>;
export type FormSettingsV0961PokemonWugtrio = FormSettings<
	"FORMS_V0961_POKEMON_WUGTRIO",
	{
		forms: [
			{
				form: "WUGTRIO_NORMAL";
			},
		];
		pokemon: "WUGTRIO";
	}
>;
export type FormSettingsV0962PokemonBombirdier = FormSettings<
	"FORMS_V0962_POKEMON_BOMBIRDIER",
	{
		forms: [
			{
				form: "BOMBIRDIER_NORMAL";
			},
		];
		pokemon: "BOMBIRDIER";
	}
>;
export type FormSettingsV0963PokemonFinizen = FormSettings<
	"FORMS_V0963_POKEMON_FINIZEN",
	{
		forms: [
			{
				form: "FINIZEN_NORMAL";
			},
		];
		pokemon: "FINIZEN";
	}
>;
export type FormSettingsV0964PokemonPalafin = FormSettings<
	"FORMS_V0964_POKEMON_PALAFIN",
	{
		forms: [
			{
				form: "PALAFIN_ZERO";
			},
			{
				form: "PALAFIN_HERO";
			},
		];
		pokemon: "PALAFIN";
	}
>;
export type FormSettingsV0965PokemonVaroom = FormSettings<
	"FORMS_V0965_POKEMON_VAROOM",
	{
		forms: [
			{
				form: "VAROOM_NORMAL";
			},
		];
		pokemon: "VAROOM";
	}
>;
export type FormSettingsV0966PokemonRevavroom = FormSettings<
	"FORMS_V0966_POKEMON_REVAVROOM",
	{
		forms: [
			{
				form: "REVAVROOM_NORMAL";
			},
		];
		pokemon: "REVAVROOM";
	}
>;
export type FormSettingsV0967PokemonCyclizar = FormSettings<
	"FORMS_V0967_POKEMON_CYCLIZAR",
	{
		forms: [
			{
				form: "CYCLIZAR_NORMAL";
			},
		];
		pokemon: "CYCLIZAR";
	}
>;
export type FormSettingsV0968PokemonOrthworm = FormSettings<
	"FORMS_V0968_POKEMON_ORTHWORM",
	{
		forms: [
			{
				form: "ORTHWORM_NORMAL";
			},
		];
		pokemon: "ORTHWORM";
	}
>;
export type FormSettingsV0969PokemonGlimmet = FormSettings<
	"FORMS_V0969_POKEMON_GLIMMET",
	{
		forms: [
			{
				form: "GLIMMET_NORMAL";
			},
		];
		pokemon: "GLIMMET";
	}
>;
export type FormSettingsV0970PokemonGlimmora = FormSettings<
	"FORMS_V0970_POKEMON_GLIMMORA",
	{
		forms: [
			{
				form: "GLIMMORA_NORMAL";
			},
		];
		pokemon: "GLIMMORA";
	}
>;
export type FormSettingsV0971PokemonGreavard = FormSettings<
	"FORMS_V0971_POKEMON_GREAVARD",
	{
		forms: [
			{
				form: "GREAVARD_NORMAL";
			},
		];
		pokemon: "GREAVARD";
	}
>;
export type FormSettingsV0972PokemonHoundstone = FormSettings<
	"FORMS_V0972_POKEMON_HOUNDSTONE",
	{
		forms: [
			{
				form: "HOUNDSTONE_NORMAL";
			},
		];
		pokemon: "HOUNDSTONE";
	}
>;
export type FormSettingsV0973PokemonFlamigo = FormSettings<
	"FORMS_V0973_POKEMON_FLAMIGO",
	{
		forms: [
			{
				form: "FLAMIGO_NORMAL";
			},
		];
		pokemon: "FLAMIGO";
	}
>;
export type FormSettingsV0974PokemonCetoddle = FormSettings<
	"FORMS_V0974_POKEMON_CETODDLE",
	{
		forms: [
			{
				form: "CETODDLE_NORMAL";
			},
		];
		pokemon: "CETODDLE";
	}
>;
export type FormSettingsV0975PokemonCetitan = FormSettings<
	"FORMS_V0975_POKEMON_CETITAN",
	{
		forms: [
			{
				form: "CETITAN_NORMAL";
			},
		];
		pokemon: "CETITAN";
	}
>;
export type FormSettingsV0976PokemonVeluza = FormSettings<
	"FORMS_V0976_POKEMON_VELUZA",
	{
		forms: [
			{
				form: "VELUZA_NORMAL";
			},
		];
		pokemon: "VELUZA";
	}
>;
export type FormSettingsV0977PokemonDondozo = FormSettings<
	"FORMS_V0977_POKEMON_DONDOZO",
	{
		forms: [
			{
				form: "DONDOZO_NORMAL";
			},
		];
		pokemon: "DONDOZO";
	}
>;
export type FormSettingsV0978PokemonTatsugiri = FormSettings<
	"FORMS_V0978_POKEMON_TATSUGIRI",
	{
		forms: [
			{
				form: "TATSUGIRI_CURLY";
			},
			{
				form: "TATSUGIRI_DROOPY";
			},
			{
				form: "TATSUGIRI_STRETCHY";
			},
		];
		pokemon: "TATSUGIRI";
	}
>;
export type FormSettingsV0979PokemonAnnihilape = FormSettings<
	"FORMS_V0979_POKEMON_ANNIHILAPE",
	{
		forms: [
			{
				form: "ANNIHILAPE_NORMAL";
			},
		];
		pokemon: "ANNIHILAPE";
	}
>;
export type FormSettingsV0980PokemonClodsire = FormSettings<
	"FORMS_V0980_POKEMON_CLODSIRE",
	{
		forms: [
			{
				form: "CLODSIRE_NORMAL";
			},
		];
		pokemon: "CLODSIRE";
	}
>;
export type FormSettingsV0981PokemonFarigiraf = FormSettings<
	"FORMS_V0981_POKEMON_FARIGIRAF",
	{
		forms: [
			{
				form: "FARIGIRAF_NORMAL";
			},
		];
		pokemon: "FARIGIRAF";
	}
>;
export type FormSettingsV0982PokemonDudunsparce = FormSettings<
	"FORMS_V0982_POKEMON_DUDUNSPARCE",
	{
		forms: [
			{
				form: "DUDUNSPARCE_TWO";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "DUDUNSPARCE_TWO";
				};
			},
			{
				form: "DUDUNSPARCE_THREE";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "DUDUNSPARCE_TWO";
				};
			},
		];
		pokemon: "DUDUNSPARCE";
	}
>;
export type FormSettingsV0983PokemonKingambit = FormSettings<
	"FORMS_V0983_POKEMON_KINGAMBIT",
	{
		forms: [
			{
				form: "KINGAMBIT_NORMAL";
			},
		];
		pokemon: "KINGAMBIT";
	}
>;
export type FormSettingsV0984PokemonGreattusk = FormSettings<
	"FORMS_V0984_POKEMON_GREATTUSK",
	{
		forms: [
			{
				form: "GREATTUSK_NORMAL";
			},
		];
		pokemon: "GREATTUSK";
	}
>;
export type FormSettingsV0985PokemonScreamtail = FormSettings<
	"FORMS_V0985_POKEMON_SCREAMTAIL",
	{
		forms: [
			{
				form: "SCREAMTAIL_NORMAL";
			},
		];
		pokemon: "SCREAMTAIL";
	}
>;
export type FormSettingsV0986PokemonBrutebonnet = FormSettings<
	"FORMS_V0986_POKEMON_BRUTEBONNET",
	{
		forms: [
			{
				form: "BRUTEBONNET_NORMAL";
			},
		];
		pokemon: "BRUTEBONNET";
	}
>;
export type FormSettingsV0987PokemonFluttermane = FormSettings<
	"FORMS_V0987_POKEMON_FLUTTERMANE",
	{
		forms: [
			{
				form: "FLUTTERMANE_NORMAL";
			},
		];
		pokemon: "FLUTTERMANE";
	}
>;
export type FormSettingsV0988PokemonSlitherwing = FormSettings<
	"FORMS_V0988_POKEMON_SLITHERWING",
	{
		forms: [
			{
				form: "SLITHERWING_NORMAL";
			},
		];
		pokemon: "SLITHERWING";
	}
>;
export type FormSettingsV0989PokemonSandyshocks = FormSettings<
	"FORMS_V0989_POKEMON_SANDYSHOCKS",
	{
		forms: [
			{
				form: "SANDYSHOCKS_NORMAL";
			},
		];
		pokemon: "SANDYSHOCKS";
	}
>;
export type FormSettingsV0990PokemonIrontreads = FormSettings<
	"FORMS_V0990_POKEMON_IRONTREADS",
	{
		forms: [
			{
				form: "IRONTREADS_NORMAL";
			},
		];
		pokemon: "IRONTREADS";
	}
>;
export type FormSettingsV0991PokemonIronbundle = FormSettings<
	"FORMS_V0991_POKEMON_IRONBUNDLE",
	{
		forms: [
			{
				form: "IRONBUNDLE_NORMAL";
			},
		];
		pokemon: "IRONBUNDLE";
	}
>;
export type FormSettingsV0992PokemonIronhands = FormSettings<
	"FORMS_V0992_POKEMON_IRONHANDS",
	{
		forms: [
			{
				form: "IRONHANDS_NORMAL";
			},
		];
		pokemon: "IRONHANDS";
	}
>;
export type FormSettingsV0993PokemonIronjugulis = FormSettings<
	"FORMS_V0993_POKEMON_IRONJUGULIS",
	{
		forms: [
			{
				form: "IRONJUGULIS_NORMAL";
			},
		];
		pokemon: "IRONJUGULIS";
	}
>;
export type FormSettingsV0994PokemonIronmoth = FormSettings<
	"FORMS_V0994_POKEMON_IRONMOTH",
	{
		forms: [
			{
				form: "IRONMOTH_NORMAL";
			},
		];
		pokemon: "IRONMOTH";
	}
>;
export type FormSettingsV0995PokemonIronthorns = FormSettings<
	"FORMS_V0995_POKEMON_IRONTHORNS",
	{
		forms: [
			{
				form: "IRONTHORNS_NORMAL";
			},
		];
		pokemon: "IRONTHORNS";
	}
>;
export type FormSettingsV0996PokemonFrigibax = FormSettings<
	"FORMS_V0996_POKEMON_FRIGIBAX",
	{
		forms: [
			{
				form: "FRIGIBAX_NORMAL";
			},
		];
		pokemon: "FRIGIBAX";
	}
>;
export type FormSettingsV0997PokemonArctibax = FormSettings<
	"FORMS_V0997_POKEMON_ARCTIBAX",
	{
		forms: [
			{
				form: "ARCTIBAX_NORMAL";
			},
		];
		pokemon: "ARCTIBAX";
	}
>;
export type FormSettingsV0998PokemonBaxcalibur = FormSettings<
	"FORMS_V0998_POKEMON_BAXCALIBUR",
	{
		forms: [
			{
				form: "BAXCALIBUR_NORMAL";
			},
		];
		pokemon: "BAXCALIBUR";
	}
>;
export type FormSettingsV0999PokemonGimmighoul = FormSettings<
	"FORMS_V0999_POKEMON_GIMMIGHOUL",
	{
		forms: [
			{
				form: "GIMMIGHOUL_NORMAL";
			},
			{
				form: "GIMMIGHOUL_COIN_A1";
				isCostume: true;
			},
		];
		pokemon: "GIMMIGHOUL";
	}
>;
export type FormSettingsV1000PokemonGholdengo = FormSettings<
	"FORMS_V1000_POKEMON_GHOLDENGO",
	{
		forms: [
			{
				form: "GHOLDENGO_NORMAL";
			},
		];
		pokemon: "GHOLDENGO";
	}
>;
export type FormSettingsV1001PokemonWochien = FormSettings<
	"FORMS_V1001_POKEMON_WOCHIEN",
	{
		forms: [
			{
				form: "WOCHIEN_NORMAL";
			},
		];
		pokemon: "WOCHIEN";
	}
>;
export type FormSettingsV1002PokemonChienpao = FormSettings<
	"FORMS_V1002_POKEMON_CHIENPAO",
	{
		forms: [
			{
				form: "CHIENPAO_NORMAL";
			},
		];
		pokemon: "CHIENPAO";
	}
>;
export type FormSettingsV1003PokemonTinglu = FormSettings<
	"FORMS_V1003_POKEMON_TINGLU",
	{
		forms: [
			{
				form: "TINGLU_NORMAL";
			},
		];
		pokemon: "TINGLU";
	}
>;
export type FormSettingsV1004PokemonChiyu = FormSettings<
	"FORMS_V1004_POKEMON_CHIYU",
	{
		forms: [
			{
				form: "CHIYU_NORMAL";
			},
		];
		pokemon: "CHIYU";
	}
>;
export type FormSettingsV1005PokemonRoaringmoon = FormSettings<
	"FORMS_V1005_POKEMON_ROARINGMOON",
	{
		forms: [
			{
				form: "ROARINGMOON_NORMAL";
			},
		];
		pokemon: "ROARINGMOON";
	}
>;
export type FormSettingsV1006PokemonIronvaliant = FormSettings<
	"FORMS_V1006_POKEMON_IRONVALIANT",
	{
		forms: [
			{
				form: "IRONVALIANT_NORMAL";
			},
		];
		pokemon: "IRONVALIANT";
	}
>;
export type FormSettingsV1007PokemonKoraidon = FormSettings<
	"FORMS_V1007_POKEMON_KORAIDON",
	{
		forms: [
			{
				form: "KORAIDON_APEX";
			},
		];
		pokemon: "KORAIDON";
	}
>;
export type FormSettingsV1008PokemonMiraidon = FormSettings<
	"FORMS_V1008_POKEMON_MIRAIDON",
	{
		forms: [
			{
				form: "MIRAIDON_ULTIMATE";
			},
		];
		pokemon: "MIRAIDON";
	}
>;
export type FormSettingsV1009PokemonWalkingwake = FormSettings<
	"FORMS_V1009_POKEMON_WALKINGWAKE",
	{
		forms: [
			{
				form: "WALKINGWAKE_NORMAL";
			},
		];
		pokemon: "WALKINGWAKE";
	}
>;
export type FormSettingsV1010PokemonIronleaves = FormSettings<
	"FORMS_V1010_POKEMON_IRONLEAVES",
	{
		forms: [
			{
				form: "IRONLEAVES_NORMAL";
			},
		];
		pokemon: "IRONLEAVES";
	}
>;
export type FormSettingsV1011PokemonDipplin = FormSettings<
	"FORMS_V1011_POKEMON_DIPPLIN",
	{
		forms: [
			{
				form: "DIPPLIN_NORMAL";
			},
		];
		pokemon: "DIPPLIN";
	}
>;
export type FormSettingsV1012PokemonPoltchageist = FormSettings<
	"FORMS_V1012_POKEMON_POLTCHAGEIST",
	{
		forms: [
			{
				form: "POLTCHAGEIST_COUNTERFEIT";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "POLTCHAGEIST_COUNTERFEIT";
				};
			},
			{
				form: "POLTCHAGEIST_ARTISAN";
				sillouetteObfuscationGroup: {
					groupNumber: 1;
					overrideDisplayForm: "POLTCHAGEIST_COUNTERFEIT";
				};
			},
		];
		pokemon: "POLTCHAGEIST";
	}
>;
export type FormSettingsV1013PokemonSinistcha = FormSettings<
	"FORMS_V1013_POKEMON_SINISTCHA",
	{
		forms: [
			{
				form: "SINISTCHA_UNREMARKABLE";
			},
			{
				form: "SINISTCHA_MASTERPIECE";
			},
		];
		pokemon: "SINISTCHA";
	}
>;
export type FormSettingsV1014PokemonOkidogi = FormSettings<
	"FORMS_V1014_POKEMON_OKIDOGI",
	{
		forms: [
			{
				form: "OKIDOGI_NORMAL";
			},
		];
		pokemon: "OKIDOGI";
	}
>;
export type FormSettingsV1015PokemonMunkidori = FormSettings<
	"FORMS_V1015_POKEMON_MUNKIDORI",
	{
		forms: [
			{
				form: "MUNKIDORI_NORMAL";
			},
		];
		pokemon: "MUNKIDORI";
	}
>;
export type FormSettingsV1016PokemonFezandipiti = FormSettings<
	"FORMS_V1016_POKEMON_FEZANDIPITI",
	{
		forms: [
			{
				form: "FEZANDIPITI_NORMAL";
			},
		];
		pokemon: "FEZANDIPITI";
	}
>;
export type FormSettingsV1017PokemonOgerpon = FormSettings<
	"FORMS_V1017_POKEMON_OGERPON",
	{
		pokemon: "OGERPON";
	}
>;
export type FormSettingsV1018PokemonArchaludon = FormSettings<
	"FORMS_V1018_POKEMON_ARCHALUDON",
	{
		forms: [
			{
				form: "ARCHALUDON_NORMAL";
			},
		];
		pokemon: "ARCHALUDON";
	}
>;
export type FormSettingsV1019PokemonHydrapple = FormSettings<
	"FORMS_V1019_POKEMON_HYDRAPPLE",
	{
		forms: [
			{
				form: "HYDRAPPLE_NORMAL";
			},
		];
		pokemon: "HYDRAPPLE";
	}
>;
export type FormSettingsV1020PokemonGougingfire = FormSettings<
	"FORMS_V1020_POKEMON_GOUGINGFIRE",
	{
		forms: [
			{
				form: "GOUGINGFIRE_NORMAL";
			},
		];
		pokemon: "GOUGINGFIRE";
	}
>;
export type FormSettingsV1021PokemonRagingbolt = FormSettings<
	"FORMS_V1021_POKEMON_RAGINGBOLT",
	{
		forms: [
			{
				form: "RAGINGBOLT_NORMAL";
			},
		];
		pokemon: "RAGINGBOLT";
	}
>;
export type FormSettingsV1022PokemonIronboulder = FormSettings<
	"FORMS_V1022_POKEMON_IRONBOULDER",
	{
		forms: [
			{
				form: "IRONBOULDER_NORMAL";
			},
		];
		pokemon: "IRONBOULDER";
	}
>;
export type FormSettingsV1023PokemonIroncrown = FormSettings<
	"FORMS_V1023_POKEMON_IRONCROWN",
	{
		forms: [
			{
				form: "IRONCROWN_NORMAL";
			},
		];
		pokemon: "IRONCROWN";
	}
>;
export type FormSettingsV1024PokemonTerapagos = FormSettings<
	"FORMS_V1024_POKEMON_TERAPAGOS",
	{
		forms: [
			{
				form: "TERAPAGOS_NORMAL";
			},
		];
		pokemon: "TERAPAGOS";
	}
>;
export type FormSettingsV1025PokemonPecharunt = FormSettings<
	"FORMS_V1025_POKEMON_PECHARUNT",
	{
		forms: [
			{
				form: "PECHARUNT_NORMAL";
			},
		];
		pokemon: "PECHARUNT";
	}
>;

export type FormSettingsMasterfileEntry =
	| FormSettingsV0001PokemonBulbasaur
	| FormSettingsV0002PokemonIvysaur
	| FormSettingsV0003PokemonVenusaur
	| FormSettingsV0004PokemonCharmander
	| FormSettingsV0005PokemonCharmeleon
	| FormSettingsV0006PokemonCharizard
	| FormSettingsV0007PokemonSquirtle
	| FormSettingsV0008PokemonWartortle
	| FormSettingsV0009PokemonBlastoise
	| FormSettingsV0010PokemonCaterpie
	| FormSettingsV0011PokemonMetapod
	| FormSettingsV0012PokemonButterfree
	| FormSettingsV0013PokemonWeedle
	| FormSettingsV0014PokemonKakuna
	| FormSettingsV0015PokemonBeedrill
	| FormSettingsV0016PokemonPidgey
	| FormSettingsV0017PokemonPidgeotto
	| FormSettingsV0018PokemonPidgeot
	| FormSettingsV0019PokemonRattata
	| FormSettingsV0020PokemonRaticate
	| FormSettingsV0021PokemonSpearow
	| FormSettingsV0022PokemonFearow
	| FormSettingsV0023PokemonEkans
	| FormSettingsV0024PokemonArbok
	| FormSettingsV0025PokemonPikachu
	| FormSettingsV0026PokemonRaichu
	| FormSettingsV0027PokemonSandshrew
	| FormSettingsV0028PokemonSandslash
	| FormSettingsV0029PokemonNidoran
	| FormSettingsV0030PokemonNidorina
	| FormSettingsV0031PokemonNidoqueen
	| FormSettingsV0032PokemonNidoran
	| FormSettingsV0033PokemonNidorino
	| FormSettingsV0034PokemonNidoking
	| FormSettingsV0035PokemonClefairy
	| FormSettingsV0036PokemonClefable
	| FormSettingsV0037PokemonVulpix
	| FormSettingsV0038PokemonNinetales
	| FormSettingsV0039PokemonJigglypuff
	| FormSettingsV0040PokemonWigglytuff
	| FormSettingsV0041PokemonZubat
	| FormSettingsV0042PokemonGolbat
	| FormSettingsV0043PokemonOddish
	| FormSettingsV0044PokemonGloom
	| FormSettingsV0045PokemonVileplume
	| FormSettingsV0046PokemonParas
	| FormSettingsV0047PokemonParasect
	| FormSettingsV0048PokemonVenonat
	| FormSettingsV0049PokemonVenomoth
	| FormSettingsV0050PokemonDiglett
	| FormSettingsV0051PokemonDugtrio
	| FormSettingsV0052PokemonMeowth
	| FormSettingsV0053PokemonPersian
	| FormSettingsV0054PokemonPsyduck
	| FormSettingsV0055PokemonGolduck
	| FormSettingsV0056PokemonMankey
	| FormSettingsV0057PokemonPrimeape
	| FormSettingsV0058PokemonGrowlithe
	| FormSettingsV0059PokemonArcanine
	| FormSettingsV0060PokemonPoliwag
	| FormSettingsV0061PokemonPoliwhirl
	| FormSettingsV0062PokemonPoliwrath
	| FormSettingsV0063PokemonAbra
	| FormSettingsV0064PokemonKadabra
	| FormSettingsV0065PokemonAlakazam
	| FormSettingsV0066PokemonMachop
	| FormSettingsV0067PokemonMachoke
	| FormSettingsV0068PokemonMachamp
	| FormSettingsV0069PokemonBellsprout
	| FormSettingsV0070PokemonWeepinbell
	| FormSettingsV0071PokemonVictreebel
	| FormSettingsV0072PokemonTentacool
	| FormSettingsV0073PokemonTentacruel
	| FormSettingsV0074PokemonGeodude
	| FormSettingsV0075PokemonGraveler
	| FormSettingsV0076PokemonGolem
	| FormSettingsV0077PokemonPonyta
	| FormSettingsV0078PokemonRapidash
	| FormSettingsV0079PokemonSlowpoke
	| FormSettingsV0080PokemonSlowbro
	| FormSettingsV0081PokemonMagnemite
	| FormSettingsV0082PokemonMagneton
	| FormSettingsV0083PokemonFarfetchd
	| FormSettingsV0084PokemonDoduo
	| FormSettingsV0085PokemonDodrio
	| FormSettingsV0086PokemonSeel
	| FormSettingsV0087PokemonDewgong
	| FormSettingsV0088PokemonGrimer
	| FormSettingsV0089PokemonMuk
	| FormSettingsV0090PokemonShellder
	| FormSettingsV0091PokemonCloyster
	| FormSettingsV0092PokemonGastly
	| FormSettingsV0093PokemonHaunter
	| FormSettingsV0094PokemonGengar
	| FormSettingsV0095PokemonOnix
	| FormSettingsV0096PokemonDrowzee
	| FormSettingsV0097PokemonHypno
	| FormSettingsV0098PokemonKrabby
	| FormSettingsV0099PokemonKingler
	| FormSettingsV0100PokemonVoltorb
	| FormSettingsV0101PokemonElectrode
	| FormSettingsV0102PokemonExeggcute
	| FormSettingsV0103PokemonExeggutor
	| FormSettingsV0104PokemonCubone
	| FormSettingsV0105PokemonMarowak
	| FormSettingsV0106PokemonHitmonlee
	| FormSettingsV0107PokemonHitmonchan
	| FormSettingsV0108PokemonLickitung
	| FormSettingsV0109PokemonKoffing
	| FormSettingsV0110PokemonWeezing
	| FormSettingsV0111PokemonRhyhorn
	| FormSettingsV0112PokemonRhydon
	| FormSettingsV0113PokemonChansey
	| FormSettingsV0114PokemonTangela
	| FormSettingsV0115PokemonKangaskhan
	| FormSettingsV0116PokemonHorsea
	| FormSettingsV0117PokemonSeadra
	| FormSettingsV0118PokemonGoldeen
	| FormSettingsV0119PokemonSeaking
	| FormSettingsV0120PokemonStaryu
	| FormSettingsV0121PokemonStarmie
	| FormSettingsV0122PokemonMrMime
	| FormSettingsV0123PokemonScyther
	| FormSettingsV0124PokemonJynx
	| FormSettingsV0125PokemonElectabuzz
	| FormSettingsV0126PokemonMagmar
	| FormSettingsV0127PokemonPinsir
	| FormSettingsV0128PokemonTauros
	| FormSettingsV0129PokemonMagikarp
	| FormSettingsV0130PokemonGyarados
	| FormSettingsV0131PokemonLapras
	| FormSettingsV0132PokemonDitto
	| FormSettingsV0133PokemonEevee
	| FormSettingsV0134PokemonVaporeon
	| FormSettingsV0135PokemonJolteon
	| FormSettingsV0136PokemonFlareon
	| FormSettingsV0137PokemonPorygon
	| FormSettingsV0138PokemonOmanyte
	| FormSettingsV0139PokemonOmastar
	| FormSettingsV0140PokemonKabuto
	| FormSettingsV0141PokemonKabutops
	| FormSettingsV0142PokemonAerodactyl
	| FormSettingsV0143PokemonSnorlax
	| FormSettingsV0144PokemonArticuno
	| FormSettingsV0145PokemonZapdos
	| FormSettingsV0146PokemonMoltres
	| FormSettingsV0147PokemonDratini
	| FormSettingsV0148PokemonDragonair
	| FormSettingsV0149PokemonDragonite
	| FormSettingsV0150PokemonMewtwo
	| FormSettingsV0151PokemonMew
	| FormSettingsV0152PokemonChikorita
	| FormSettingsV0153PokemonBayleef
	| FormSettingsV0154PokemonMeganium
	| FormSettingsV0155PokemonCyndaquil
	| FormSettingsV0156PokemonQuilava
	| FormSettingsV0157PokemonTyphlosion
	| FormSettingsV0158PokemonTotodile
	| FormSettingsV0159PokemonCroconaw
	| FormSettingsV0160PokemonFeraligatr
	| FormSettingsV0161PokemonSentret
	| FormSettingsV0162PokemonFurret
	| FormSettingsV0163PokemonHoothoot
	| FormSettingsV0164PokemonNoctowl
	| FormSettingsV0165PokemonLedyba
	| FormSettingsV0166PokemonLedian
	| FormSettingsV0167PokemonSpinarak
	| FormSettingsV0168PokemonAriados
	| FormSettingsV0169PokemonCrobat
	| FormSettingsV0170PokemonChinchou
	| FormSettingsV0171PokemonLanturn
	| FormSettingsV0172PokemonPichu
	| FormSettingsV0173PokemonCleffa
	| FormSettingsV0174PokemonIgglybuff
	| FormSettingsV0175PokemonTogepi
	| FormSettingsV0176PokemonTogetic
	| FormSettingsV0177PokemonNatu
	| FormSettingsV0178PokemonXatu
	| FormSettingsV0179PokemonMareep
	| FormSettingsV0180PokemonFlaaffy
	| FormSettingsV0181PokemonAmpharos
	| FormSettingsV0182PokemonBellossom
	| FormSettingsV0183PokemonMarill
	| FormSettingsV0184PokemonAzumarill
	| FormSettingsV0185PokemonSudowoodo
	| FormSettingsV0186PokemonPolitoed
	| FormSettingsV0187PokemonHoppip
	| FormSettingsV0188PokemonSkiploom
	| FormSettingsV0189PokemonJumpluff
	| FormSettingsV0190PokemonAipom
	| FormSettingsV0191PokemonSunkern
	| FormSettingsV0192PokemonSunflora
	| FormSettingsV0193PokemonYanma
	| FormSettingsV0194PokemonWooper
	| FormSettingsV0195PokemonQuagsire
	| FormSettingsV0196PokemonEspeon
	| FormSettingsV0197PokemonUmbreon
	| FormSettingsV0198PokemonMurkrow
	| FormSettingsV0199PokemonSlowking
	| FormSettingsV0200PokemonMisdreavus
	| FormSettingsV0201PokemonUnown
	| FormSettingsV0202PokemonWobbuffet
	| FormSettingsV0203PokemonGirafarig
	| FormSettingsV0204PokemonPineco
	| FormSettingsV0205PokemonForretress
	| FormSettingsV0206PokemonDunsparce
	| FormSettingsV0207PokemonGligar
	| FormSettingsV0208PokemonSteelix
	| FormSettingsV0209PokemonSnubbull
	| FormSettingsV0210PokemonGranbull
	| FormSettingsV0211PokemonQwilfish
	| FormSettingsV0212PokemonScizor
	| FormSettingsV0213PokemonShuckle
	| FormSettingsV0214PokemonHeracross
	| FormSettingsV0215PokemonSneasel
	| FormSettingsV0216PokemonTeddiursa
	| FormSettingsV0217PokemonUrsaring
	| FormSettingsV0218PokemonSlugma
	| FormSettingsV0219PokemonMagcargo
	| FormSettingsV0220PokemonSwinub
	| FormSettingsV0221PokemonPiloswine
	| FormSettingsV0222PokemonCorsola
	| FormSettingsV0223PokemonRemoraid
	| FormSettingsV0224PokemonOctillery
	| FormSettingsV0225PokemonDelibird
	| FormSettingsV0226PokemonMantine
	| FormSettingsV0227PokemonSkarmory
	| FormSettingsV0228PokemonHoundour
	| FormSettingsV0229PokemonHoundoom
	| FormSettingsV0230PokemonKingdra
	| FormSettingsV0231PokemonPhanpy
	| FormSettingsV0232PokemonDonphan
	| FormSettingsV0233PokemonPorygon2
	| FormSettingsV0234PokemonStantler
	| FormSettingsV0235PokemonSmeargle
	| FormSettingsV0236PokemonTyrogue
	| FormSettingsV0237PokemonHitmontop
	| FormSettingsV0238PokemonSmoochum
	| FormSettingsV0239PokemonElekid
	| FormSettingsV0240PokemonMagby
	| FormSettingsV0241PokemonMiltank
	| FormSettingsV0242PokemonBlissey
	| FormSettingsV0243PokemonRaikou
	| FormSettingsV0244PokemonEntei
	| FormSettingsV0245PokemonSuicune
	| FormSettingsV0246PokemonLarvitar
	| FormSettingsV0247PokemonPupitar
	| FormSettingsV0248PokemonTyranitar
	| FormSettingsV0249PokemonLugia
	| FormSettingsV0250PokemonHoOh
	| FormSettingsV0251PokemonCelebi
	| FormSettingsV0252PokemonTreecko
	| FormSettingsV0253PokemonGrovyle
	| FormSettingsV0254PokemonSceptile
	| FormSettingsV0255PokemonTorchic
	| FormSettingsV0256PokemonCombusken
	| FormSettingsV0257PokemonBlaziken
	| FormSettingsV0258PokemonMudkip
	| FormSettingsV0259PokemonMarshtomp
	| FormSettingsV0260PokemonSwampert
	| FormSettingsV0261PokemonPoochyena
	| FormSettingsV0262PokemonMightyena
	| FormSettingsV0263PokemonZigzagoon
	| FormSettingsV0264PokemonLinoone
	| FormSettingsV0265PokemonWurmple
	| FormSettingsV0266PokemonSilcoon
	| FormSettingsV0267PokemonBeautifly
	| FormSettingsV0268PokemonCascoon
	| FormSettingsV0269PokemonDustox
	| FormSettingsV0270PokemonLotad
	| FormSettingsV0271PokemonLombre
	| FormSettingsV0272PokemonLudicolo
	| FormSettingsV0273PokemonSeedot
	| FormSettingsV0274PokemonNuzleaf
	| FormSettingsV0275PokemonShiftry
	| FormSettingsV0276PokemonTaillow
	| FormSettingsV0277PokemonSwellow
	| FormSettingsV0278PokemonWingull
	| FormSettingsV0279PokemonPelipper
	| FormSettingsV0280PokemonRalts
	| FormSettingsV0281PokemonKirlia
	| FormSettingsV0282PokemonGardevoir
	| FormSettingsV0283PokemonSurskit
	| FormSettingsV0284PokemonMasquerain
	| FormSettingsV0285PokemonShroomish
	| FormSettingsV0286PokemonBreloom
	| FormSettingsV0287PokemonSlakoth
	| FormSettingsV0288PokemonVigoroth
	| FormSettingsV0289PokemonSlaking
	| FormSettingsV0290PokemonNincada
	| FormSettingsV0291PokemonNinjask
	| FormSettingsV0292PokemonShedinja
	| FormSettingsV0293PokemonWhismur
	| FormSettingsV0294PokemonLoudred
	| FormSettingsV0295PokemonExploud
	| FormSettingsV0296PokemonMakuhita
	| FormSettingsV0297PokemonHariyama
	| FormSettingsV0298PokemonAzurill
	| FormSettingsV0299PokemonNosepass
	| FormSettingsV0300PokemonSkitty
	| FormSettingsV0301PokemonDelcatty
	| FormSettingsV0302PokemonSableye
	| FormSettingsV0303PokemonMawile
	| FormSettingsV0304PokemonAron
	| FormSettingsV0305PokemonLairon
	| FormSettingsV0306PokemonAggron
	| FormSettingsV0307PokemonMeditite
	| FormSettingsV0308PokemonMedicham
	| FormSettingsV0309PokemonElectrike
	| FormSettingsV0310PokemonManectric
	| FormSettingsV0311PokemonPlusle
	| FormSettingsV0312PokemonMinun
	| FormSettingsV0313PokemonVolbeat
	| FormSettingsV0314PokemonIllumise
	| FormSettingsV0315PokemonRoselia
	| FormSettingsV0316PokemonGulpin
	| FormSettingsV0317PokemonSwalot
	| FormSettingsV0318PokemonCarvanha
	| FormSettingsV0319PokemonSharpedo
	| FormSettingsV0320PokemonWailmer
	| FormSettingsV0321PokemonWailord
	| FormSettingsV0322PokemonNumel
	| FormSettingsV0323PokemonCamerupt
	| FormSettingsV0324PokemonTorkoal
	| FormSettingsV0325PokemonSpoink
	| FormSettingsV0326PokemonGrumpig
	| FormSettingsV0327PokemonSpinda
	| FormSettingsV0328PokemonTrapinch
	| FormSettingsV0329PokemonVibrava
	| FormSettingsV0330PokemonFlygon
	| FormSettingsV0331PokemonCacnea
	| FormSettingsV0332PokemonCacturne
	| FormSettingsV0333PokemonSwablu
	| FormSettingsV0334PokemonAltaria
	| FormSettingsV0335PokemonZangoose
	| FormSettingsV0336PokemonSeviper
	| FormSettingsV0337PokemonLunatone
	| FormSettingsV0338PokemonSolrock
	| FormSettingsV0339PokemonBarboach
	| FormSettingsV0340PokemonWhiscash
	| FormSettingsV0341PokemonCorphish
	| FormSettingsV0342PokemonCrawdaunt
	| FormSettingsV0343PokemonBaltoy
	| FormSettingsV0344PokemonClaydol
	| FormSettingsV0345PokemonLileep
	| FormSettingsV0346PokemonCradily
	| FormSettingsV0347PokemonAnorith
	| FormSettingsV0348PokemonArmaldo
	| FormSettingsV0349PokemonFeebas
	| FormSettingsV0350PokemonMilotic
	| FormSettingsV0351PokemonCastform
	| FormSettingsV0352PokemonKecleon
	| FormSettingsV0353PokemonShuppet
	| FormSettingsV0354PokemonBanette
	| FormSettingsV0355PokemonDuskull
	| FormSettingsV0356PokemonDusclops
	| FormSettingsV0357PokemonTropius
	| FormSettingsV0358PokemonChimecho
	| FormSettingsV0359PokemonAbsol
	| FormSettingsV0360PokemonWynaut
	| FormSettingsV0361PokemonSnorunt
	| FormSettingsV0362PokemonGlalie
	| FormSettingsV0363PokemonSpheal
	| FormSettingsV0364PokemonSealeo
	| FormSettingsV0365PokemonWalrein
	| FormSettingsV0366PokemonClamperl
	| FormSettingsV0367PokemonHuntail
	| FormSettingsV0368PokemonGorebyss
	| FormSettingsV0369PokemonRelicanth
	| FormSettingsV0370PokemonLuvdisc
	| FormSettingsV0371PokemonBagon
	| FormSettingsV0372PokemonShelgon
	| FormSettingsV0373PokemonSalamence
	| FormSettingsV0374PokemonBeldum
	| FormSettingsV0375PokemonMetang
	| FormSettingsV0376PokemonMetagross
	| FormSettingsV0377PokemonRegirock
	| FormSettingsV0378PokemonRegice
	| FormSettingsV0379PokemonRegisteel
	| FormSettingsV0380PokemonLatias
	| FormSettingsV0381PokemonLatios
	| FormSettingsV0382PokemonKyogre
	| FormSettingsV0383PokemonGroudon
	| FormSettingsV0384PokemonRayquaza
	| FormSettingsV0385PokemonJirachi
	| FormSettingsV0386PokemonDeoxys
	| FormSettingsV0387PokemonTurtwig
	| FormSettingsV0388PokemonGrotle
	| FormSettingsV0389PokemonTorterra
	| FormSettingsV0390PokemonChimchar
	| FormSettingsV0391PokemonMonferno
	| FormSettingsV0392PokemonInfernape
	| FormSettingsV0393PokemonPiplup
	| FormSettingsV0394PokemonPrinplup
	| FormSettingsV0395PokemonEmpoleon
	| FormSettingsV0396PokemonStarly
	| FormSettingsV0397PokemonStaravia
	| FormSettingsV0398PokemonStaraptor
	| FormSettingsV0399PokemonBidoof
	| FormSettingsV0400PokemonBibarel
	| FormSettingsV0401PokemonKricketot
	| FormSettingsV0402PokemonKricketune
	| FormSettingsV0403PokemonShinx
	| FormSettingsV0404PokemonLuxio
	| FormSettingsV0405PokemonLuxray
	| FormSettingsV0406PokemonBudew
	| FormSettingsV0407PokemonRoserade
	| FormSettingsV0408PokemonCranidos
	| FormSettingsV0409PokemonRampardos
	| FormSettingsV0410PokemonShieldon
	| FormSettingsV0411PokemonBastiodon
	| FormSettingsV0412PokemonBurmy
	| FormSettingsV0413PokemonWormadam
	| FormSettingsV0414PokemonMothim
	| FormSettingsV0415PokemonCombee
	| FormSettingsV0416PokemonVespiquen
	| FormSettingsV0417PokemonPachirisu
	| FormSettingsV0418PokemonBuizel
	| FormSettingsV0419PokemonFloatzel
	| FormSettingsV0420PokemonCherubi
	| FormSettingsV0421PokemonCherrim
	| FormSettingsV0422PokemonShellos
	| FormSettingsV0423PokemonGastrodon
	| FormSettingsV0424PokemonAmbipom
	| FormSettingsV0425PokemonDrifloon
	| FormSettingsV0426PokemonDrifblim
	| FormSettingsV0427PokemonBuneary
	| FormSettingsV0428PokemonLopunny
	| FormSettingsV0429PokemonMismagius
	| FormSettingsV0430PokemonHonchkrow
	| FormSettingsV0431PokemonGlameow
	| FormSettingsV0432PokemonPurugly
	| FormSettingsV0433PokemonChingling
	| FormSettingsV0434PokemonStunky
	| FormSettingsV0435PokemonSkuntank
	| FormSettingsV0436PokemonBronzor
	| FormSettingsV0437PokemonBronzong
	| FormSettingsV0438PokemonBonsly
	| FormSettingsV0439PokemonMimeJr
	| FormSettingsV0440PokemonHappiny
	| FormSettingsV0441PokemonChatot
	| FormSettingsV0442PokemonSpiritomb
	| FormSettingsV0443PokemonGible
	| FormSettingsV0444PokemonGabite
	| FormSettingsV0445PokemonGarchomp
	| FormSettingsV0446PokemonMunchlax
	| FormSettingsV0447PokemonRiolu
	| FormSettingsV0448PokemonLucario
	| FormSettingsV0449PokemonHippopotas
	| FormSettingsV0450PokemonHippowdon
	| FormSettingsV0451PokemonSkorupi
	| FormSettingsV0452PokemonDrapion
	| FormSettingsV0453PokemonCroagunk
	| FormSettingsV0454PokemonToxicroak
	| FormSettingsV0455PokemonCarnivine
	| FormSettingsV0456PokemonFinneon
	| FormSettingsV0457PokemonLumineon
	| FormSettingsV0458PokemonMantyke
	| FormSettingsV0459PokemonSnover
	| FormSettingsV0460PokemonAbomasnow
	| FormSettingsV0461PokemonWeavile
	| FormSettingsV0462PokemonMagnezone
	| FormSettingsV0463PokemonLickilicky
	| FormSettingsV0464PokemonRhyperior
	| FormSettingsV0465PokemonTangrowth
	| FormSettingsV0466PokemonElectivire
	| FormSettingsV0467PokemonMagmortar
	| FormSettingsV0468PokemonTogekiss
	| FormSettingsV0469PokemonYanmega
	| FormSettingsV0470PokemonLeafeon
	| FormSettingsV0471PokemonGlaceon
	| FormSettingsV0472PokemonGliscor
	| FormSettingsV0473PokemonMamoswine
	| FormSettingsV0474PokemonPorygonZ
	| FormSettingsV0475PokemonGallade
	| FormSettingsV0476PokemonProbopass
	| FormSettingsV0477PokemonDusknoir
	| FormSettingsV0478PokemonFroslass
	| FormSettingsV0479PokemonRotom
	| FormSettingsV0480PokemonUxie
	| FormSettingsV0481PokemonMesprit
	| FormSettingsV0482PokemonAzelf
	| FormSettingsV0483PokemonDialga
	| FormSettingsV0484PokemonPalkia
	| FormSettingsV0485PokemonHeatran
	| FormSettingsV0486PokemonRegigigas
	| FormSettingsV0487PokemonGiratina
	| FormSettingsV0488PokemonCresselia
	| FormSettingsV0489PokemonPhione
	| FormSettingsV0490PokemonManaphy
	| FormSettingsV0491PokemonDarkrai
	| FormSettingsV0492PokemonShaymin
	| FormSettingsV0493PokemonArceus
	| FormSettingsV0494PokemonVictini
	| FormSettingsV0495PokemonSnivy
	| FormSettingsV0496PokemonServine
	| FormSettingsV0497PokemonSerperior
	| FormSettingsV0498PokemonTepig
	| FormSettingsV0499PokemonPignite
	| FormSettingsV0500PokemonEmboar
	| FormSettingsV0501PokemonOshawott
	| FormSettingsV0502PokemonDewott
	| FormSettingsV0503PokemonSamurott
	| FormSettingsV0504PokemonPatrat
	| FormSettingsV0505PokemonWatchog
	| FormSettingsV0506PokemonLillipup
	| FormSettingsV0507PokemonHerdier
	| FormSettingsV0508PokemonStoutland
	| FormSettingsV0509PokemonPurrloin
	| FormSettingsV0510PokemonLiepard
	| FormSettingsV0511PokemonPansage
	| FormSettingsV0512PokemonSimisage
	| FormSettingsV0513PokemonPansear
	| FormSettingsV0514PokemonSimisear
	| FormSettingsV0515PokemonPanpour
	| FormSettingsV0516PokemonSimipour
	| FormSettingsV0517PokemonMunna
	| FormSettingsV0518PokemonMusharna
	| FormSettingsV0519PokemonPidove
	| FormSettingsV0520PokemonTranquill
	| FormSettingsV0521PokemonUnfezant
	| FormSettingsV0522PokemonBlitzle
	| FormSettingsV0523PokemonZebstrika
	| FormSettingsV0524PokemonRoggenrola
	| FormSettingsV0525PokemonBoldore
	| FormSettingsV0526PokemonGigalith
	| FormSettingsV0527PokemonWoobat
	| FormSettingsV0528PokemonSwoobat
	| FormSettingsV0529PokemonDrilbur
	| FormSettingsV0530PokemonExcadrill
	| FormSettingsV0531PokemonAudino
	| FormSettingsV0532PokemonTimburr
	| FormSettingsV0533PokemonGurdurr
	| FormSettingsV0534PokemonConkeldurr
	| FormSettingsV0535PokemonTympole
	| FormSettingsV0536PokemonPalpitoad
	| FormSettingsV0537PokemonSeismitoad
	| FormSettingsV0538PokemonThroh
	| FormSettingsV0539PokemonSawk
	| FormSettingsV0540PokemonSewaddle
	| FormSettingsV0541PokemonSwadloon
	| FormSettingsV0542PokemonLeavanny
	| FormSettingsV0543PokemonVenipede
	| FormSettingsV0544PokemonWhirlipede
	| FormSettingsV0545PokemonScolipede
	| FormSettingsV0546PokemonCottonee
	| FormSettingsV0547PokemonWhimsicott
	| FormSettingsV0548PokemonPetilil
	| FormSettingsV0549PokemonLilligant
	| FormSettingsV0550PokemonBasculin
	| FormSettingsV0551PokemonSandile
	| FormSettingsV0552PokemonKrokorok
	| FormSettingsV0553PokemonKrookodile
	| FormSettingsV0554PokemonDarumaka
	| FormSettingsV0555PokemonDarmanitan
	| FormSettingsV0556PokemonMaractus
	| FormSettingsV0557PokemonDwebble
	| FormSettingsV0558PokemonCrustle
	| FormSettingsV0559PokemonScraggy
	| FormSettingsV0560PokemonScrafty
	| FormSettingsV0561PokemonSigilyph
	| FormSettingsV0562PokemonYamask
	| FormSettingsV0563PokemonCofagrigus
	| FormSettingsV0564PokemonTirtouga
	| FormSettingsV0565PokemonCarracosta
	| FormSettingsV0566PokemonArchen
	| FormSettingsV0567PokemonArcheops
	| FormSettingsV0568PokemonTrubbish
	| FormSettingsV0569PokemonGarbodor
	| FormSettingsV0570PokemonZorua
	| FormSettingsV0571PokemonZoroark
	| FormSettingsV0572PokemonMinccino
	| FormSettingsV0573PokemonCinccino
	| FormSettingsV0574PokemonGothita
	| FormSettingsV0575PokemonGothorita
	| FormSettingsV0576PokemonGothitelle
	| FormSettingsV0577PokemonSolosis
	| FormSettingsV0578PokemonDuosion
	| FormSettingsV0579PokemonReuniclus
	| FormSettingsV0580PokemonDucklett
	| FormSettingsV0581PokemonSwanna
	| FormSettingsV0582PokemonVanillite
	| FormSettingsV0583PokemonVanillish
	| FormSettingsV0584PokemonVanilluxe
	| FormSettingsV0585PokemonDeerling
	| FormSettingsV0586PokemonSawsbuck
	| FormSettingsV0587PokemonEmolga
	| FormSettingsV0588PokemonKarrablast
	| FormSettingsV0589PokemonEscavalier
	| FormSettingsV0590PokemonFoongus
	| FormSettingsV0591PokemonAmoonguss
	| FormSettingsV0592PokemonFrillish
	| FormSettingsV0593PokemonJellicent
	| FormSettingsV0594PokemonAlomomola
	| FormSettingsV0595PokemonJoltik
	| FormSettingsV0596PokemonGalvantula
	| FormSettingsV0597PokemonFerroseed
	| FormSettingsV0598PokemonFerrothorn
	| FormSettingsV0599PokemonKlink
	| FormSettingsV0600PokemonKlang
	| FormSettingsV0601PokemonKlinklang
	| FormSettingsV0602PokemonTynamo
	| FormSettingsV0603PokemonEelektrik
	| FormSettingsV0604PokemonEelektross
	| FormSettingsV0605PokemonElgyem
	| FormSettingsV0606PokemonBeheeyem
	| FormSettingsV0607PokemonLitwick
	| FormSettingsV0608PokemonLampent
	| FormSettingsV0609PokemonChandelure
	| FormSettingsV0610PokemonAxew
	| FormSettingsV0611PokemonFraxure
	| FormSettingsV0612PokemonHaxorus
	| FormSettingsV0613PokemonCubchoo
	| FormSettingsV0614PokemonBeartic
	| FormSettingsV0615PokemonCryogonal
	| FormSettingsV0616PokemonShelmet
	| FormSettingsV0617PokemonAccelgor
	| FormSettingsV0618PokemonStunfisk
	| FormSettingsV0619PokemonMienfoo
	| FormSettingsV0620PokemonMienshao
	| FormSettingsV0621PokemonDruddigon
	| FormSettingsV0622PokemonGolett
	| FormSettingsV0623PokemonGolurk
	| FormSettingsV0624PokemonPawniard
	| FormSettingsV0625PokemonBisharp
	| FormSettingsV0626PokemonBouffalant
	| FormSettingsV0627PokemonRufflet
	| FormSettingsV0628PokemonBraviary
	| FormSettingsV0629PokemonVullaby
	| FormSettingsV0630PokemonMandibuzz
	| FormSettingsV0631PokemonHeatmor
	| FormSettingsV0632PokemonDurant
	| FormSettingsV0633PokemonDeino
	| FormSettingsV0634PokemonZweilous
	| FormSettingsV0635PokemonHydreigon
	| FormSettingsV0636PokemonLarvesta
	| FormSettingsV0637PokemonVolcarona
	| FormSettingsV0638PokemonCobalion
	| FormSettingsV0639PokemonTerrakion
	| FormSettingsV0640PokemonVirizion
	| FormSettingsV0641PokemonTornadus
	| FormSettingsV0642PokemonThundurus
	| FormSettingsV0643PokemonReshiram
	| FormSettingsV0644PokemonZekrom
	| FormSettingsV0645PokemonLandorus
	| FormSettingsV0646PokemonKyurem
	| FormSettingsV0647PokemonKeldeo
	| FormSettingsV0648PokemonMeloetta
	| FormSettingsV0649PokemonGenesect
	| FormSettingsV0650PokemonChespin
	| FormSettingsV0651PokemonQuilladin
	| FormSettingsV0652PokemonChesnaught
	| FormSettingsV0653PokemonFennekin
	| FormSettingsV0654PokemonBraixen
	| FormSettingsV0655PokemonDelphox
	| FormSettingsV0656PokemonFroakie
	| FormSettingsV0657PokemonFrogadier
	| FormSettingsV0658PokemonGreninja
	| FormSettingsV0659PokemonBunnelby
	| FormSettingsV0660PokemonDiggersby
	| FormSettingsV0661PokemonFletchling
	| FormSettingsV0662PokemonFletchinder
	| FormSettingsV0663PokemonTalonflame
	| FormSettingsV0664PokemonScatterbug
	| FormSettingsV0665PokemonSpewpa
	| FormSettingsV0666PokemonVivillon
	| FormSettingsV0667PokemonLitleo
	| FormSettingsV0668PokemonPyroar
	| FormSettingsV0669PokemonFlabebe
	| FormSettingsV0670PokemonFloette
	| FormSettingsV0671PokemonFlorges
	| FormSettingsV0672PokemonSkiddo
	| FormSettingsV0673PokemonGogoat
	| FormSettingsV0674PokemonPancham
	| FormSettingsV0675PokemonPangoro
	| FormSettingsV0676PokemonFurfrou
	| FormSettingsV0677PokemonEspurr
	| FormSettingsV0678PokemonMeowstic
	| FormSettingsV0679PokemonHonedge
	| FormSettingsV0680PokemonDoublade
	| FormSettingsV0681PokemonAegislash
	| FormSettingsV0682PokemonSpritzee
	| FormSettingsV0683PokemonAromatisse
	| FormSettingsV0684PokemonSwirlix
	| FormSettingsV0685PokemonSlurpuff
	| FormSettingsV0686PokemonInkay
	| FormSettingsV0687PokemonMalamar
	| FormSettingsV0688PokemonBinacle
	| FormSettingsV0689PokemonBarbaracle
	| FormSettingsV0690PokemonSkrelp
	| FormSettingsV0691PokemonDragalge
	| FormSettingsV0692PokemonClauncher
	| FormSettingsV0693PokemonClawitzer
	| FormSettingsV0694PokemonHelioptile
	| FormSettingsV0695PokemonHeliolisk
	| FormSettingsV0696PokemonTyrunt
	| FormSettingsV0697PokemonTyrantrum
	| FormSettingsV0698PokemonAmaura
	| FormSettingsV0699PokemonAurorus
	| FormSettingsV0700PokemonSylveon
	| FormSettingsV0701PokemonHawlucha
	| FormSettingsV0702PokemonDedenne
	| FormSettingsV0703PokemonCarbink
	| FormSettingsV0704PokemonGoomy
	| FormSettingsV0705PokemonSliggoo
	| FormSettingsV0706PokemonGoodra
	| FormSettingsV0707PokemonKlefki
	| FormSettingsV0708PokemonPhantump
	| FormSettingsV0709PokemonTrevenant
	| FormSettingsV0710PokemonPumpkaboo
	| FormSettingsV0711PokemonGourgeist
	| FormSettingsV0712PokemonBergmite
	| FormSettingsV0713PokemonAvalugg
	| FormSettingsV0714PokemonNoibat
	| FormSettingsV0715PokemonNoivern
	| FormSettingsV0716PokemonXerneas
	| FormSettingsV0717PokemonYveltal
	| FormSettingsV0718PokemonZygarde
	| FormSettingsV0719PokemonDiancie
	| FormSettingsV0720PokemonHoopa
	| FormSettingsV0721PokemonVolcanion
	| FormSettingsV0722PokemonRowlet
	| FormSettingsV0723PokemonDartrix
	| FormSettingsV0724PokemonDecidueye
	| FormSettingsV0725PokemonLitten
	| FormSettingsV0726PokemonTorracat
	| FormSettingsV0727PokemonIncineroar
	| FormSettingsV0728PokemonPopplio
	| FormSettingsV0729PokemonBrionne
	| FormSettingsV0730PokemonPrimarina
	| FormSettingsV0731PokemonPikipek
	| FormSettingsV0732PokemonTrumbeak
	| FormSettingsV0733PokemonToucannon
	| FormSettingsV0734PokemonYungoos
	| FormSettingsV0735PokemonGumshoos
	| FormSettingsV0736PokemonGrubbin
	| FormSettingsV0737PokemonCharjabug
	| FormSettingsV0738PokemonVikavolt
	| FormSettingsV0739PokemonCrabrawler
	| FormSettingsV0740PokemonCrabominable
	| FormSettingsV0741PokemonOricorio
	| FormSettingsV0742PokemonCutiefly
	| FormSettingsV0743PokemonRibombee
	| FormSettingsV0744PokemonRockruff
	| FormSettingsV0745PokemonLycanroc
	| FormSettingsV0746PokemonWishiwashi
	| FormSettingsV0747PokemonMareanie
	| FormSettingsV0748PokemonToxapex
	| FormSettingsV0749PokemonMudbray
	| FormSettingsV0750PokemonMudsdale
	| FormSettingsV0751PokemonDewpider
	| FormSettingsV0752PokemonAraquanid
	| FormSettingsV0753PokemonFomantis
	| FormSettingsV0754PokemonLurantis
	| FormSettingsV0755PokemonMorelull
	| FormSettingsV0756PokemonShiinotic
	| FormSettingsV0757PokemonSalandit
	| FormSettingsV0758PokemonSalazzle
	| FormSettingsV0759PokemonStufful
	| FormSettingsV0760PokemonBewear
	| FormSettingsV0761PokemonBounsweet
	| FormSettingsV0762PokemonSteenee
	| FormSettingsV0763PokemonTsareena
	| FormSettingsV0764PokemonComfey
	| FormSettingsV0765PokemonOranguru
	| FormSettingsV0766PokemonPassimian
	| FormSettingsV0767PokemonWimpod
	| FormSettingsV0768PokemonGolisopod
	| FormSettingsV0769PokemonSandygast
	| FormSettingsV0770PokemonPalossand
	| FormSettingsV0771PokemonPyukumuku
	| FormSettingsV0772PokemonTypeNull
	| FormSettingsV0773PokemonSilvally
	| FormSettingsV0774PokemonMinior
	| FormSettingsV0775PokemonKomala
	| FormSettingsV0776PokemonTurtonator
	| FormSettingsV0777PokemonTogedemaru
	| FormSettingsV0778PokemonMimikyu
	| FormSettingsV0779PokemonBruxish
	| FormSettingsV0780PokemonDrampa
	| FormSettingsV0781PokemonDhelmise
	| FormSettingsV0782PokemonJangmoO
	| FormSettingsV0783PokemonHakamoO
	| FormSettingsV0784PokemonKommoO
	| FormSettingsV0785PokemonTapuKoko
	| FormSettingsV0786PokemonTapuLele
	| FormSettingsV0787PokemonTapuBulu
	| FormSettingsV0788PokemonTapuFini
	| FormSettingsV0789PokemonCosmog
	| FormSettingsV0790PokemonCosmoem
	| FormSettingsV0791PokemonSolgaleo
	| FormSettingsV0792PokemonLunala
	| FormSettingsV0793PokemonNihilego
	| FormSettingsV0794PokemonBuzzwole
	| FormSettingsV0795PokemonPheromosa
	| FormSettingsV0796PokemonXurkitree
	| FormSettingsV0797PokemonCelesteela
	| FormSettingsV0798PokemonKartana
	| FormSettingsV0799PokemonGuzzlord
	| FormSettingsV0800PokemonNecrozma
	| FormSettingsV0801PokemonMagearna
	| FormSettingsV0802PokemonMarshadow
	| FormSettingsV0803PokemonPoipole
	| FormSettingsV0804PokemonNaganadel
	| FormSettingsV0805PokemonStakataka
	| FormSettingsV0806PokemonBlacephalon
	| FormSettingsV0807PokemonZeraora
	| FormSettingsV0808PokemonMeltan
	| FormSettingsV0809PokemonMelmetal
	| FormSettingsV0810PokemonGrookey
	| FormSettingsV0811PokemonThwackey
	| FormSettingsV0812PokemonRillaboom
	| FormSettingsV0813PokemonScorbunny
	| FormSettingsV0814PokemonRaboot
	| FormSettingsV0815PokemonCinderace
	| FormSettingsV0816PokemonSobble
	| FormSettingsV0817PokemonDrizzile
	| FormSettingsV0818PokemonInteleon
	| FormSettingsV0819PokemonSkwovet
	| FormSettingsV0820PokemonGreedent
	| FormSettingsV0821PokemonRookidee
	| FormSettingsV0822PokemonCorvisquire
	| FormSettingsV0823PokemonCorviknight
	| FormSettingsV0824PokemonBlipbug
	| FormSettingsV0825PokemonDottler
	| FormSettingsV0826PokemonOrbeetle
	| FormSettingsV0827PokemonNickit
	| FormSettingsV0828PokemonThievul
	| FormSettingsV0829PokemonGossifleur
	| FormSettingsV0830PokemonEldegoss
	| FormSettingsV0831PokemonWooloo
	| FormSettingsV0832PokemonDubwool
	| FormSettingsV0833PokemonChewtle
	| FormSettingsV0834PokemonDrednaw
	| FormSettingsV0835PokemonYamper
	| FormSettingsV0836PokemonBoltund
	| FormSettingsV0837PokemonRolycoly
	| FormSettingsV0838PokemonCarkol
	| FormSettingsV0839PokemonCoalossal
	| FormSettingsV0840PokemonApplin
	| FormSettingsV0841PokemonFlapple
	| FormSettingsV0842PokemonAppletun
	| FormSettingsV0843PokemonSilicobra
	| FormSettingsV0844PokemonSandaconda
	| FormSettingsV0845PokemonCramorant
	| FormSettingsV0846PokemonArrokuda
	| FormSettingsV0847PokemonBarraskewda
	| FormSettingsV0848PokemonToxel
	| FormSettingsV0849PokemonToxtricity
	| FormSettingsV0850PokemonSizzlipede
	| FormSettingsV0851PokemonCentiskorch
	| FormSettingsV0852PokemonClobbopus
	| FormSettingsV0853PokemonGrapploct
	| FormSettingsV0854PokemonSinistea
	| FormSettingsV0855PokemonPolteageist
	| FormSettingsV0856PokemonHatenna
	| FormSettingsV0857PokemonHattrem
	| FormSettingsV0858PokemonHatterene
	| FormSettingsV0859PokemonImpidimp
	| FormSettingsV0860PokemonMorgrem
	| FormSettingsV0861PokemonGrimmsnarl
	| FormSettingsV0862PokemonObstagoon
	| FormSettingsV0863PokemonPerrserker
	| FormSettingsV0864PokemonCursola
	| FormSettingsV0865PokemonSirfetchd
	| FormSettingsV0866PokemonMrRime
	| FormSettingsV0867PokemonRunerigus
	| FormSettingsV0868PokemonMilcery
	| FormSettingsV0869PokemonAlcremie
	| FormSettingsV0870PokemonFalinks
	| FormSettingsV0871PokemonPincurchin
	| FormSettingsV0872PokemonSnom
	| FormSettingsV0873PokemonFrosmoth
	| FormSettingsV0874PokemonStonjourner
	| FormSettingsV0875PokemonEiscue
	| FormSettingsV0876PokemonIndeedee
	| FormSettingsV0877PokemonMorpeko
	| FormSettingsV0878PokemonCufant
	| FormSettingsV0879PokemonCopperajah
	| FormSettingsV0880PokemonDracozolt
	| FormSettingsV0881PokemonArctozolt
	| FormSettingsV0882PokemonDracovish
	| FormSettingsV0883PokemonArctovish
	| FormSettingsV0884PokemonDuraludon
	| FormSettingsV0885PokemonDreepy
	| FormSettingsV0886PokemonDrakloak
	| FormSettingsV0887PokemonDragapult
	| FormSettingsV0888PokemonZacian
	| FormSettingsV0889PokemonZamazenta
	| FormSettingsV0890PokemonEternatus
	| FormSettingsV0891PokemonKubfu
	| FormSettingsV0892PokemonUrshifu
	| FormSettingsV0893PokemonZarude
	| FormSettingsV0894PokemonRegieleki
	| FormSettingsV0895PokemonRegidrago
	| FormSettingsV0896PokemonGlastrier
	| FormSettingsV0897PokemonSpectrier
	| FormSettingsV0898PokemonCalyrex
	| FormSettingsV0899PokemonWyrdeer
	| FormSettingsV0900PokemonKleavor
	| FormSettingsV0901PokemonUrsaluna
	| FormSettingsV0902PokemonBasculegion
	| FormSettingsV0903PokemonSneasler
	| FormSettingsV0904PokemonOverqwil
	| FormSettingsV0905PokemonEnamorus
	| FormSettingsV0906PokemonSprigatito
	| FormSettingsV0907PokemonFloragato
	| FormSettingsV0908PokemonMeowscarada
	| FormSettingsV0909PokemonFuecoco
	| FormSettingsV0910PokemonCrocalor
	| FormSettingsV0911PokemonSkeledirge
	| FormSettingsV0912PokemonQuaxly
	| FormSettingsV0913PokemonQuaxwell
	| FormSettingsV0914PokemonQuaquaval
	| FormSettingsV0915PokemonLechonk
	| FormSettingsV0916PokemonOinkologne
	| FormSettingsV0917PokemonTarountula
	| FormSettingsV0918PokemonSpidops
	| FormSettingsV0919PokemonNymble
	| FormSettingsV0920PokemonLokix
	| FormSettingsV0921PokemonPawmi
	| FormSettingsV0922PokemonPawmo
	| FormSettingsV0923PokemonPawmot
	| FormSettingsV0924PokemonTandemaus
	| FormSettingsV0925PokemonMaushold
	| FormSettingsV0926PokemonFidough
	| FormSettingsV0927PokemonDachsbun
	| FormSettingsV0928PokemonSmoliv
	| FormSettingsV0929PokemonDolliv
	| FormSettingsV0930PokemonArboliva
	| FormSettingsV0931PokemonSquawkabilly
	| FormSettingsV0932PokemonNacli
	| FormSettingsV0933PokemonNaclstack
	| FormSettingsV0934PokemonGarganacl
	| FormSettingsV0935PokemonCharcadet
	| FormSettingsV0936PokemonArmarouge
	| FormSettingsV0937PokemonCeruledge
	| FormSettingsV0938PokemonTadbulb
	| FormSettingsV0939PokemonBellibolt
	| FormSettingsV0940PokemonWattrel
	| FormSettingsV0941PokemonKilowattrel
	| FormSettingsV0942PokemonMaschiff
	| FormSettingsV0943PokemonMabosstiff
	| FormSettingsV0944PokemonShroodle
	| FormSettingsV0945PokemonGrafaiai
	| FormSettingsV0946PokemonBramblin
	| FormSettingsV0947PokemonBrambleghast
	| FormSettingsV0948PokemonToedscool
	| FormSettingsV0949PokemonToedscruel
	| FormSettingsV0950PokemonKlawf
	| FormSettingsV0951PokemonCapsakid
	| FormSettingsV0952PokemonScovillain
	| FormSettingsV0953PokemonRellor
	| FormSettingsV0954PokemonRabsca
	| FormSettingsV0955PokemonFlittle
	| FormSettingsV0956PokemonEspathra
	| FormSettingsV0957PokemonTinkatink
	| FormSettingsV0958PokemonTinkatuff
	| FormSettingsV0959PokemonTinkaton
	| FormSettingsV0960PokemonWiglett
	| FormSettingsV0961PokemonWugtrio
	| FormSettingsV0962PokemonBombirdier
	| FormSettingsV0963PokemonFinizen
	| FormSettingsV0964PokemonPalafin
	| FormSettingsV0965PokemonVaroom
	| FormSettingsV0966PokemonRevavroom
	| FormSettingsV0967PokemonCyclizar
	| FormSettingsV0968PokemonOrthworm
	| FormSettingsV0969PokemonGlimmet
	| FormSettingsV0970PokemonGlimmora
	| FormSettingsV0971PokemonGreavard
	| FormSettingsV0972PokemonHoundstone
	| FormSettingsV0973PokemonFlamigo
	| FormSettingsV0974PokemonCetoddle
	| FormSettingsV0975PokemonCetitan
	| FormSettingsV0976PokemonVeluza
	| FormSettingsV0977PokemonDondozo
	| FormSettingsV0978PokemonTatsugiri
	| FormSettingsV0979PokemonAnnihilape
	| FormSettingsV0980PokemonClodsire
	| FormSettingsV0981PokemonFarigiraf
	| FormSettingsV0982PokemonDudunsparce
	| FormSettingsV0983PokemonKingambit
	| FormSettingsV0984PokemonGreattusk
	| FormSettingsV0985PokemonScreamtail
	| FormSettingsV0986PokemonBrutebonnet
	| FormSettingsV0987PokemonFluttermane
	| FormSettingsV0988PokemonSlitherwing
	| FormSettingsV0989PokemonSandyshocks
	| FormSettingsV0990PokemonIrontreads
	| FormSettingsV0991PokemonIronbundle
	| FormSettingsV0992PokemonIronhands
	| FormSettingsV0993PokemonIronjugulis
	| FormSettingsV0994PokemonIronmoth
	| FormSettingsV0995PokemonIronthorns
	| FormSettingsV0996PokemonFrigibax
	| FormSettingsV0997PokemonArctibax
	| FormSettingsV0998PokemonBaxcalibur
	| FormSettingsV0999PokemonGimmighoul
	| FormSettingsV1000PokemonGholdengo
	| FormSettingsV1001PokemonWochien
	| FormSettingsV1002PokemonChienpao
	| FormSettingsV1003PokemonTinglu
	| FormSettingsV1004PokemonChiyu
	| FormSettingsV1005PokemonRoaringmoon
	| FormSettingsV1006PokemonIronvaliant
	| FormSettingsV1007PokemonKoraidon
	| FormSettingsV1008PokemonMiraidon
	| FormSettingsV1009PokemonWalkingwake
	| FormSettingsV1010PokemonIronleaves
	| FormSettingsV1011PokemonDipplin
	| FormSettingsV1012PokemonPoltchageist
	| FormSettingsV1013PokemonSinistcha
	| FormSettingsV1014PokemonOkidogi
	| FormSettingsV1015PokemonMunkidori
	| FormSettingsV1016PokemonFezandipiti
	| FormSettingsV1017PokemonOgerpon
	| FormSettingsV1018PokemonArchaludon
	| FormSettingsV1019PokemonHydrapple
	| FormSettingsV1020PokemonGougingfire
	| FormSettingsV1021PokemonRagingbolt
	| FormSettingsV1022PokemonIronboulder
	| FormSettingsV1023PokemonIroncrown
	| FormSettingsV1024PokemonTerapagos
	| FormSettingsV1025PokemonPecharunt;

export type FormSettingsTemplateID = FormSettingsMasterfileEntry["templateId"];

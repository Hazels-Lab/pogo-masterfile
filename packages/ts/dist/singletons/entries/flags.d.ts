// Generated from Pokémon GO masterfile — Singletons entries (no shared discriminator).

export interface ArPhotoFeatureFlags {
	templateId: "AR_PHOTO_FEATURE_FLAGS";
	data: {
		templateId: "AR_PHOTO_FEATURE_FLAGS";
		arPhotoFeatureFlags: {
			arMenuEntryEnabled: -716916653;
			captureSettings: {
				contextualCheckIntervalSeconds: 0.5;
				countdownSeconds: 5;
			};
			errorReportingSettings: {
				isEnabled: true;
				maxEventsPerSlidingWindow: 5;
				maxTotalEventsBeforeShutdown: "1000";
				percentChancePlayerSends: 1;
				slidingWindowLengthS: 10;
			};
			excludedPokemonIds: [
				"WISHIWASHI",
				"PYUKUMUKU",
				"TYPE_NULL",
				"SILVALLY",
				"MINIOR",
				"MAGEARNA",
				"CHEWTLE",
				"DREDNAW",
				"CRAMORANT",
				"ARROKUDA",
				"BARRASKEWDA",
				"MILCERY",
				"ALCREMIE",
				"PINCURCHIN",
				"EISCUE",
				"CUFANT",
				"COPPERAJAH",
				"DRACOZOLT",
				"ARCTOZOLT",
				"DRACOVISH",
				"ARCTOVISH",
				"GLASTRIER",
				"SPECTRIER",
				"CALYREX",
				"BASCULEGION",
				"SQUAWKABILLY",
				"MASCHIFF",
				"MABOSSTIFF",
				"BRAMBLIN",
				"BRAMBLEGHAST",
				"CAPSAKID",
				"SCOVILLAIN",
				"RELLOR",
				"RABSCA",
				"FLITTLE",
				"ESPATHRA",
				"FINIZEN",
				"PALAFIN",
				"CYCLIZAR",
				"ORTHWORM",
				"VELUZA",
				"FARIGIRAF",
				"GREATTUSK",
				"SCREAMTAIL",
				"BRUTEBONNET",
				"FLUTTERMANE",
				"SLITHERWING",
				"SANDYSHOCKS",
				"IRONTREADS",
				"IRONBUNDLE",
				"IRONHANDS",
				"IRONJUGULIS",
				"IRONMOTH",
				"IRONTHORNS",
				"WOCHIEN",
				"CHIENPAO",
				"TINGLU",
				"CHIYU",
				"ROARINGMOON",
				"IRONVALIANT",
				"KORAIDON",
				"MIRAIDON",
				"WALKINGWAKE",
				"IRONLEAVES",
				"OKIDOGI",
				"MUNKIDORI",
				"FEZANDIPITI",
				"OGERPON",
				"ARCHALUDON",
				"GOUGINGFIRE",
				"RAGINGBOLT",
				"IRONBOULDER",
				"IRONCROWN",
				"TERAPAGOS",
				"PECHARUNT",
			];
			incentives: [
				{
					incentiveIconName: "pm94.icon";
					incentiveStringKey: "incentive_gengar_encounter_key";
				},
				{
					incentiveIconName: "tx_coin_pouch_pokeball";
					incentiveStringKey: "incentive_pokeball_30_and_pokecoin_100_key";
				},
			];
			incentivesEnabled: true;
			isFeatureEnabled: true;
			lapsedDaysCutoff: 29;
			mainMenuEntryEnabled: -1412802175;
			newDaysCutoff: 3;
			pokemonWithExcludedForms: [
				{
					excludedForms: ["VENUSAUR_COPY_2019"];
					pokemonId: "VENUSAUR";
				},
				{
					excludedForms: ["CHARIZARD_COPY_2019"];
					pokemonId: "CHARIZARD";
				},
				{
					excludedForms: ["BLASTOISE_COPY_2019"];
					pokemonId: "BLASTOISE";
				},
				{
					excludedForms: ["PIKACHU_COPY_2019"];
					pokemonId: "PIKACHU";
				},
				{
					excludedForms: ["PSYDUCK_SWIM_2025"];
					pokemonId: "PSYDUCK";
				},
				{
					excludedForms: ["RAIKOU_S"];
					pokemonId: "RAIKOU";
				},
				{
					excludedForms: ["ENTEI_S"];
					pokemonId: "ENTEI";
				},
				{
					excludedForms: ["SUICUNE_S"];
					pokemonId: "SUICUNE";
				},
				{
					excludedForms: ["LUGIA_S"];
					pokemonId: "LUGIA";
				},
				{
					excludedForms: ["HO_OH_S"];
					pokemonId: "HO_OH";
				},
				{
					excludedForms: [
						"SPINDA_01",
						"SPINDA_02",
						"SPINDA_03",
						"SPINDA_04",
						"SPINDA_05",
						"SPINDA_06",
						"SPINDA_07",
						"SPINDA_08",
						"SPINDA_09",
						"SPINDA_10",
						"SPINDA_11",
						"SPINDA_12",
						"SPINDA_13",
						"SPINDA_14",
						"SPINDA_15",
						"SPINDA_16",
						"SPINDA_17",
						"SPINDA_18",
						"SPINDA_19",
					];
					pokemonId: "SPINDA";
				},
				{
					excludedForms: ["LATIAS_S"];
					pokemonId: "LATIAS";
				},
				{
					excludedForms: ["LATIOS_S"];
					pokemonId: "LATIOS";
				},
				{
					excludedForms: [
						"ARCEUS_BUG",
						"ARCEUS_DARK",
						"ARCEUS_DRAGON",
						"ARCEUS_ELECTRIC",
						"ARCEUS_FAIRY",
						"ARCEUS_FIGHTING",
						"ARCEUS_FIRE",
						"ARCEUS_FLYING",
						"ARCEUS_GHOST",
						"ARCEUS_GRASS",
						"ARCEUS_GROUND",
						"ARCEUS_ICE",
						"ARCEUS_NORMAL",
						"ARCEUS_POISON",
						"ARCEUS_PSYCHIC",
						"ARCEUS_ROCK",
						"ARCEUS_STEEL",
						"ARCEUS_WATER",
					];
					pokemonId: "ARCEUS";
				},
				{
					excludedForms: ["DARMANITAN_ZEN", "DARMANITAN_GALARIAN_ZEN"];
					pokemonId: "DARMANITAN";
				},
				{
					excludedForms: ["FRILLISH_FEMALE"];
					pokemonId: "FRILLISH";
				},
				{
					excludedForms: ["JELLICENT_FEMALE"];
					pokemonId: "JELLICENT";
				},
				{
					excludedForms: ["KELDEO_RESOLUTE"];
					pokemonId: "KELDEO";
				},
				{
					excludedForms: ["MELOETTA_PIROUETTE"];
					pokemonId: "MELOETTA";
				},
				{
					excludedForms: ["GENESECT_BURN", "GENESECT_CHILL", "GENESECT_DOUSE", "GENESECT_DOUSE", "GENESECT_SHOCK"];
					pokemonId: "GENESECT";
				},
				{
					excludedForms: [
						"SCATTERBUG_ARCHIPELAGO",
						"SCATTERBUG_CONTINENTAL",
						"SCATTERBUG_ELEGANT",
						"SCATTERBUG_FANCY",
						"SCATTERBUG_GARDEN",
						"SCATTERBUG_HIGH_PLAINS",
						"SCATTERBUG_ICY_SNOW",
						"SCATTERBUG_JUNGLE",
						"SCATTERBUG_MARINE",
						"SCATTERBUG_MEADOW",
						"SCATTERBUG_MODERN",
						"SCATTERBUG_MONSOON",
						"SCATTERBUG_OCEAN",
						"SCATTERBUG_POLAR",
						"SCATTERBUG_RIVER",
						"SCATTERBUG_SANDSTORM",
						"SCATTERBUG_SAVANNA",
						"SCATTERBUG_SUN",
						"SCATTERBUG_TUNDRA",
					];
					pokemonId: "SCATTERBUG";
				},
				{
					excludedForms: [
						"SPEWPA_ARCHIPELAGO",
						"SPEWPA_CONTINENTAL",
						"SPEWPA_ELEGANT",
						"SPEWPA_FANCY",
						"SPEWPA_GARDEN",
						"SPEWPA_HIGH_PLAINS",
						"SPEWPA_ICY_SNOW",
						"SPEWPA_JUNGLE",
						"SPEWPA_MARINE",
						"SPEWPA_MEADOW",
						"SPEWPA_MODERN",
						"SPEWPA_MONSOON",
						"SPEWPA_OCEAN",
						"SPEWPA_POLAR",
						"SPEWPA_RIVER",
						"SPEWPA_SANDSTORM",
						"SPEWPA_SAVANNA",
						"SPEWPA_SUN",
						"SPEWPA_TUNDRA",
					];
					pokemonId: "SPEWPA";
				},
				{
					excludedForms: ["PYROAR_FEMALE"];
					pokemonId: "PYROAR";
				},
				{
					excludedForms: ["FLABEBE_BLUE", "FLABEBE_ORANGE", "FLABEBE_WHITE", "FLABEBE_YELLOW"];
					pokemonId: "FLABEBE";
				},
				{
					excludedForms: ["FLOETTE_BLUE", "FLOETTE_ORANGE", "FLOETTE_WHITE", "FLOETTE_YELLOW"];
					pokemonId: "FLOETTE";
				},
				{
					excludedForms: ["FLORGES_BLUE", "FLORGES_ORANGE", "FLORGES_WHITE", "FLORGES_YELLOW"];
					pokemonId: "FLORGES";
				},
				{
					excludedForms: [
						"FURFROU_HEART",
						"FURFROU_STAR",
						"FURFROU_DIAMOND",
						"FURFROU_DEBUTANTE",
						"FURFROU_MATRON",
						"FURFROU_DANDY",
						"FURFROU_LA_REINE",
						"FURFROU_KABUKI",
						"FURFROU_PHARAOH",
					];
					pokemonId: "FURFROU";
				},
				{
					excludedForms: ["MEOWSTIC_FEMALE"];
					pokemonId: "MEOWSTIC";
				},
				{
					excludedForms: ["PUMPKABOO_LARGE", "PUMPKABOO_SMALL", "PUMPKABOO_SUPER"];
					pokemonId: "PUMPKABOO";
				},
				{
					excludedForms: ["GOURGEIST_LARGE", "GOURGEIST_SMALL", "GOURGEIST_SUPER"];
					pokemonId: "GOURGEIST";
				},
				{
					excludedForms: ["ZYGARDE_FIFTY_PERCENT", "ZYGARDE_TEN_PERCENT"];
					pokemonId: "ZYGARDE";
				},
				{
					excludedForms: ["ROCKRUFF_DUSK"];
					pokemonId: "ROCKRUFF";
				},
				{
					excludedForms: ["WISHIWASHI_SCHOOL"];
					pokemonId: "WISHIWASHI";
				},
				{
					excludedForms: ["MIMIKYU_BUSTED"];
					pokemonId: "MIMIKYU";
				},
				{
					excludedForms: ["NECROZMA_ULTRA"];
					pokemonId: "NECROZMA";
				},
				{
					excludedForms: ["SINISTEA_ANTIQUE"];
					pokemonId: "SINISTEA";
				},
				{
					excludedForms: ["POLTEAGEIST_ANTIQUE"];
					pokemonId: "POLTEAGEIST";
				},
				{
					excludedForms: ["INDEEDEE_FEMALE"];
					pokemonId: "INDEEDEE";
				},
				{
					excludedForms: ["ETERNATUS_ETERNAMAX"];
					pokemonId: "ETERNATUS";
				},
				{
					excludedForms: ["OINKOLOGNE_FEMALE"];
					pokemonId: "OINKOLOGNE";
				},
				{
					excludedForms: ["MAUSHOLD_FAMILY_OF_FOUR"];
					pokemonId: "MAUSHOLD";
				},
				{
					excludedForms: ["DUDUNSPARCE_THREE"];
					pokemonId: "DUDUNSPARCE";
				},
				{
					excludedForms: ["POLTCHAGEIST_ARTISAN"];
					pokemonId: "POLTCHAGEIST";
				},
				{
					excludedForms: ["SINISTCHA_MASTERPIECE"];
					pokemonId: "SINISTCHA";
				},
				{
					excludedForms: ["GIMMIGHOUL_NORMAL"];
					pokemonId: "GIMMIGHOUL";
				},
			];
			preLoginDeviceAllowList: [
				"eeef41808b1ea6b81ba2816ae45813b87fa00ec62581f43fe382880fe0afdca0",
				"5f8688d5be7e2382afb9980beeaa2bb5e692afcd97d2a06f2997a21091a4737d",
				"3f200621fe1107fc08766965c8efc20d7ca145bc8acff71f7e4b4c484a513a2f",
				"d24f6de5ab288a106d3e286fdc96c2629919214bbfd944a8a31a9ad9453d4388",
				"0c691fb70e5064fb1a717ab41b4c029bd49d00882ec45dd926ab7256231919ae",
				"bc440d794a6463a6e83b88ee3832ae8ae58d543177198b8940ba354856cb1429",
			];
			preLoginMetricsEnabled: -1374928056;
			preLoginRollOutRatio: 1;
			shareFunctionalityEnabled: 295065062;
			showSticker: "SOMETIMES_SHOW";
		};
	};
}

export interface AvatarFeatureFlags {
	templateId: "AVATAR_FEATURE_FLAGS";
	data: {
		templateId: "AVATAR_FEATURE_FLAGS";
		avatarFeatureFlags: {
			corndogEnabled: true;
		};
	};
}

export interface AvatarStoreFooterFlags {
	templateId: "avatar_store_footer_flags";
	data: {
		templateId: "avatar_store_footer_flags";
		avatarStoreFooterFlags: {
			enabled: true;
		};
	};
}

export interface AvatarStoreSubcategoryFilteringFlags {
	templateId: "avatar_store_subcategory_filtering_flags";
	data: {
		templateId: "avatar_store_subcategory_filtering_flags";
		avatarStoreSubcategoryFilteringFlags: {
			enabled: true;
		};
	};
}

export interface BreadFeatureFlags {
	templateId: "BREAD_FEATURE_FLAGS";
	data: {
		templateId: "BREAD_FEATURE_FLAGS";
		breadFeatureFlags: {
			battleEnabled: true;
			battleSpawnMode: "GMT_SPAWN";
			boostItemEnabled: true;
			breadPostBattleRecoveryEnabled: true;
			canUseMasterBallPostBattle: true;
			debugRpcEnabled: true;
			discoveryEnabled: true;
			enabled: true;
			minimumPlayerLevel: 20;
			mpEnabled: true;
			nearbyLobbyCounterEnabled: true;
			powerSpotEditsEnabled: true;
			stationDiscoveryMode: "DYNAMIC_STATIONS";
		};
	};
}

export interface Pokedexv2FeatureFlags {
	templateId: "POKEDEXV2_FEATURE_FLAGS";
	data: {
		templateId: "POKEDEXV2_FEATURE_FLAGS";
		pokedexv2FeatureFlags: {
			celebV1Flag: -1191534987;
			detailBattleFlag: -838327144;
			detailV1Flag: -1491060175;
			isFeatureEnabled: true;
			navigationFlag: 1650943169;
			notificationFlag: -915054132;
		};
	};
}

export type SingletonsFlagsMasterfileEntry =
	| ArPhotoFeatureFlags
	| AvatarFeatureFlags
	| AvatarStoreFooterFlags
	| AvatarStoreSubcategoryFilteringFlags
	| BreadFeatureFlags
	| Pokedexv2FeatureFlags;

export type SingletonsFlagsTemplateID = SingletonsFlagsMasterfileEntry["templateId"];

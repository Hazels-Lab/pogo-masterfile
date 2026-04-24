export interface PhotoSetsSettingsProto<T extends string> {
	templateId: T;
	data: PhotoSetsSettingsProtoData<T>;
}

export interface PhotoSetsSettingsProtoData<T extends string> {
	templateId: T;
	photoSetsSettingsProto: unknown;
}

export type PhotoSetsSettingsProtoAlola = PhotoSetsSettingsProto<"PHOTO_SET_ALOLA">;
export type PhotoSetsSettingsProtoAncientFossils = PhotoSetsSettingsProto<"PHOTO_SET_ANCIENT_FOSSILS">;
export type PhotoSetsSettingsProtoBattlePokemon = PhotoSetsSettingsProto<"PHOTO_SET_BATTLE_POKEMON">;
export type PhotoSetsSettingsProtoBundleOfJoy = PhotoSetsSettingsProto<"PHOTO_SET_BUNDLE_OF_JOY">;
export type PhotoSetsSettingsProtoBusyCity = PhotoSetsSettingsProto<"PHOTO_SET_BUSY_CITY">;
export type PhotoSetsSettingsProtoClawedCuties = PhotoSetsSettingsProto<"PHOTO_SET_CLAWED_CUTIES">;
export type PhotoSetsSettingsProtoCutePokemonPink = PhotoSetsSettingsProto<"PHOTO_SET_CUTE_POKEMON_PINK">;
export type PhotoSetsSettingsProtoFallVibes = PhotoSetsSettingsProto<"PHOTO_SET_FALL_VIBES">;
export type PhotoSetsSettingsProtoFeatheredFriends = PhotoSetsSettingsProto<"PHOTO_SET_FEATHERED_FRIENDS">;
export type PhotoSetsSettingsProtoFeatheredFriendsLarge = PhotoSetsSettingsProto<"PHOTO_SET_FEATHERED_FRIENDS_LARGE">;
export type PhotoSetsSettingsProtoFeelingFancy = PhotoSetsSettingsProto<"PHOTO_SET_FEELING_FANCY">;
export type PhotoSetsSettingsProtoFurryFriends = PhotoSetsSettingsProto<"PHOTO_SET_FURRY_FRIENDS">;
export type PhotoSetsSettingsProtoFurryFriendsLarge = PhotoSetsSettingsProto<"PHOTO_SET_FURRY_FRIENDS_LARGE">;
export type PhotoSetsSettingsProtoGracefulFlyers = PhotoSetsSettingsProto<"PHOTO_SET_GRACEFUL_FLYERS">;
export type PhotoSetsSettingsProtoHisui = PhotoSetsSettingsProto<"PHOTO_SET_HISUI">;
export type PhotoSetsSettingsProtoHoenn = PhotoSetsSettingsProto<"PHOTO_SET_HOENN">;
export type PhotoSetsSettingsProtoJohto = PhotoSetsSettingsProto<"PHOTO_SET_JOHTO">;
export type PhotoSetsSettingsProtoJustLovely = PhotoSetsSettingsProto<"PHOTO_SET_JUST_LOVELY">;
export type PhotoSetsSettingsProtoKalos = PhotoSetsSettingsProto<"PHOTO_SET_KALOS">;
export type PhotoSetsSettingsProtoKanto = PhotoSetsSettingsProto<"PHOTO_SET_KANTO">;
export type PhotoSetsSettingsProtoLittleChonkers = PhotoSetsSettingsProto<"PHOTO_SET_LITTLE_CHONKERS">;
export type PhotoSetsSettingsProtoMountainPass = PhotoSetsSettingsProto<"PHOTO_SET_MOUNTAIN_PASS">;
export type PhotoSetsSettingsProtoMuseumFossils = PhotoSetsSettingsProto<"PHOTO_SET_MUSEUM_FOSSILS">;
export type PhotoSetsSettingsProtoPaldea = PhotoSetsSettingsProto<"PHOTO_SET_PALDEA">;
export type PhotoSetsSettingsProtoPlayfulPalsLarge = PhotoSetsSettingsProto<"PHOTO_SET_PLAYFUL_PALS_LARGE">;
export type PhotoSetsSettingsProtoRelaxingGarden = PhotoSetsSettingsProto<"PHOTO_SET_RELAXING_GARDEN">;
export type PhotoSetsSettingsProtoSafariTrek = PhotoSetsSettingsProto<"PHOTO_SET_SAFARI_TREK">;
export type PhotoSetsSettingsProtoSandyShoreline = PhotoSetsSettingsProto<"PHOTO_SET_SANDY_SHORELINE">;
export type PhotoSetsSettingsProtoShadowsOfNight = PhotoSetsSettingsProto<"PHOTO_SET_SHADOWS_OF_NIGHT">;
export type PhotoSetsSettingsProtoSinnoh = PhotoSetsSettingsProto<"PHOTO_SET_SINNOH">;
export type PhotoSetsSettingsProtoSmallAndCute = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_AND_CUTE">;
export type PhotoSetsSettingsProtoSmallCutePokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON">;
export type PhotoSetsSettingsProtoSmallCutePokemonPikachuAndEevee = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON_PIKACHU_AND_EEVEE">;
export type PhotoSetsSettingsProtoSmallCutePokemonPink = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_CUTE_POKEMON_PINK">;
export type PhotoSetsSettingsProtoSmallFlowerPokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON">;
export type PhotoSetsSettingsProtoSmallFlowerPokemonMedium = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON_MEDIUM">;
export type PhotoSetsSettingsProtoSmallFlowerPokemonSeeds = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_FLOWER_POKEMON_SEEDS">;
export type PhotoSetsSettingsProtoSmallWaterPokemon = PhotoSetsSettingsProto<"PHOTO_SET_SMALL_WATER_POKEMON">;
export type PhotoSetsSettingsProtoSpringVibes = PhotoSetsSettingsProto<"PHOTO_SET_SPRING_VIBES">;
export type PhotoSetsSettingsProtoStarters = PhotoSetsSettingsProto<"PHOTO_SET_STARTERS">;
export type PhotoSetsSettingsProtoSummerVibes = PhotoSetsSettingsProto<"PHOTO_SET_SUMMER_VIBES">;
export type PhotoSetsSettingsProtoTinyTikes = PhotoSetsSettingsProto<"PHOTO_SET_TINY_TIKES">;
export type PhotoSetsSettingsProtoUnova = PhotoSetsSettingsProto<"PHOTO_SET_UNOVA">;
export type PhotoSetsSettingsProtoWingsPokemon = PhotoSetsSettingsProto<"PHOTO_SET_WINGS_POKEMON">;
export type PhotoSetsSettingsProtoWinterVibes = PhotoSetsSettingsProto<"PHOTO_SET_WINTER_VIBES">;

export type PhotoSetsSettingsProtoMasterfileEntry =
	| PhotoSetsSettingsProtoAlola
	| PhotoSetsSettingsProtoAncientFossils
	| PhotoSetsSettingsProtoBattlePokemon
	| PhotoSetsSettingsProtoBundleOfJoy
	| PhotoSetsSettingsProtoBusyCity
	| PhotoSetsSettingsProtoClawedCuties
	| PhotoSetsSettingsProtoCutePokemonPink
	| PhotoSetsSettingsProtoFallVibes
	| PhotoSetsSettingsProtoFeatheredFriends
	| PhotoSetsSettingsProtoFeatheredFriendsLarge
	| PhotoSetsSettingsProtoFeelingFancy
	| PhotoSetsSettingsProtoFurryFriends
	| PhotoSetsSettingsProtoFurryFriendsLarge
	| PhotoSetsSettingsProtoGracefulFlyers
	| PhotoSetsSettingsProtoHisui
	| PhotoSetsSettingsProtoHoenn
	| PhotoSetsSettingsProtoJohto
	| PhotoSetsSettingsProtoJustLovely
	| PhotoSetsSettingsProtoKalos
	| PhotoSetsSettingsProtoKanto
	| PhotoSetsSettingsProtoLittleChonkers
	| PhotoSetsSettingsProtoMountainPass
	| PhotoSetsSettingsProtoMuseumFossils
	| PhotoSetsSettingsProtoPaldea
	| PhotoSetsSettingsProtoPlayfulPalsLarge
	| PhotoSetsSettingsProtoRelaxingGarden
	| PhotoSetsSettingsProtoSafariTrek
	| PhotoSetsSettingsProtoSandyShoreline
	| PhotoSetsSettingsProtoShadowsOfNight
	| PhotoSetsSettingsProtoSinnoh
	| PhotoSetsSettingsProtoSmallAndCute
	| PhotoSetsSettingsProtoSmallCutePokemon
	| PhotoSetsSettingsProtoSmallCutePokemonPikachuAndEevee
	| PhotoSetsSettingsProtoSmallCutePokemonPink
	| PhotoSetsSettingsProtoSmallFlowerPokemon
	| PhotoSetsSettingsProtoSmallFlowerPokemonMedium
	| PhotoSetsSettingsProtoSmallFlowerPokemonSeeds
	| PhotoSetsSettingsProtoSmallWaterPokemon
	| PhotoSetsSettingsProtoSpringVibes
	| PhotoSetsSettingsProtoStarters
	| PhotoSetsSettingsProtoSummerVibes
	| PhotoSetsSettingsProtoTinyTikes
	| PhotoSetsSettingsProtoUnova
	| PhotoSetsSettingsProtoWingsPokemon
	| PhotoSetsSettingsProtoWinterVibes;

export type PhotoSetsSettingsProtoTemplateID = PhotoSetsSettingsProtoMasterfileEntry["templateId"];

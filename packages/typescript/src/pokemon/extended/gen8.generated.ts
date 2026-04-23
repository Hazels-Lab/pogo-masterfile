/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/extended/gen8
// Filters: all
// Entries emitted: 207

import type { PokemonExtendedShared, PokemonExtendedShared10, PokemonExtendedShared12, PokemonExtendedShared21, PokemonExtendedShared22, PokemonExtendedShared3, PokemonExtendedShared76 } from "./shared.generated";

export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcatchoverridesettings {
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings {
  scale: number;
  xOffset?: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings {
  scale: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  camera?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera;
  catchOverrideSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcatchoverridesettings;
  maxBattleVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings;
  maxEncounterVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxStationVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  modelHeight?: number;
  modelScaleV2?: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface Extended_v0812_pokemon_rillaboomdatapokemonextendedsettings {
  breadOverrides: (Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitem)[];
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0812_pokemon_rillaboomdata {
  pokemonExtendedSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0812_pokemon_rillaboomEntry {
  templateId: "EXTENDED_V0812_POKEMON_RILLABOOM";
  data: Extended_v0812_pokemon_rillaboomdata;
}
export interface Extended_v0812_pokemon_rillaboom_normaldatapokemonextendedsettings {
  breadOverrides: (Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0812_pokemon_rillaboom_normaldata {
  pokemonExtendedSettings: Extended_v0812_pokemon_rillaboom_normaldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0812_pokemon_rillaboom_normalEntry {
  templateId: "EXTENDED_V0812_POKEMON_RILLABOOM_NORMAL";
  data: Extended_v0812_pokemon_rillaboom_normaldata;
}
export interface Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings {
  xOffset: number;
}
export interface Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  camera?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera;
  maxBattleTrainerVisualSettings: Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings;
  maxBattleVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxEncounterVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxPowerspotTopperVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxStationVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  modelHeight?: number;
  modelScaleV2?: number;
}
export interface Extended_v0815_pokemon_cinderacedatapokemonextendedsettings {
  breadOverrides: (Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitem)[];
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0815_pokemon_cinderacedata {
  pokemonExtendedSettings: Extended_v0815_pokemon_cinderacedatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0815_pokemon_cinderaceEntry {
  templateId: "EXTENDED_V0815_POKEMON_CINDERACE";
  data: Extended_v0815_pokemon_cinderacedata;
}
export interface Extended_v0815_pokemon_cinderace_normaldatapokemonextendedsettings {
  breadOverrides: (Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0815_pokemon_cinderace_normaldata {
  pokemonExtendedSettings: Extended_v0815_pokemon_cinderace_normaldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0815_pokemon_cinderace_normalEntry {
  templateId: "EXTENDED_V0815_POKEMON_CINDERACE_NORMAL";
  data: Extended_v0815_pokemon_cinderace_normaldata;
}
export interface Extended_v0818_pokemon_inteleondatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  camera?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera;
  catchOverrideSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcatchoverridesettings;
  maxBattleTrainerVisualSettings: Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings;
  maxBattleVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings;
  maxEncounterVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxPowerspotTopperVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxStationVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  modelHeight?: number;
  modelScaleV2?: number;
}
export interface Extended_v0818_pokemon_inteleondatapokemonextendedsettings {
  breadOverrides: (Extended_v0818_pokemon_inteleondatapokemonextendedsettingsbreadoverridesitem)[];
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0818_pokemon_inteleondata {
  pokemonExtendedSettings: Extended_v0818_pokemon_inteleondatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0818_pokemon_inteleonEntry {
  templateId: "EXTENDED_V0818_POKEMON_INTELEON";
  data: Extended_v0818_pokemon_inteleondata;
}
export interface Extended_v0818_pokemon_inteleon_normaldatapokemonextendedsettings {
  breadOverrides: (Extended_v0818_pokemon_inteleondatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0818_pokemon_inteleon_normaldata {
  pokemonExtendedSettings: Extended_v0818_pokemon_inteleon_normaldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0818_pokemon_inteleon_normalEntry {
  templateId: "EXTENDED_V0818_POKEMON_INTELEON_NORMAL";
  data: Extended_v0818_pokemon_inteleon_normaldata;
}
export interface Extended_v0824_pokemon_blipbugdatapokemonextendedsettings {
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0824_pokemon_blipbugdata {
  pokemonExtendedSettings: Extended_v0824_pokemon_blipbugdatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0824_pokemon_blipbugEntry {
  templateId: "EXTENDED_V0824_POKEMON_BLIPBUG";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0825_pokemon_dottlerEntry {
  templateId: "EXTENDED_V0825_POKEMON_DOTTLER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0826_pokemon_orbeetleEntry {
  templateId: "EXTENDED_V0826_POKEMON_ORBEETLE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0827_pokemon_nickitEntry {
  templateId: "EXTENDED_V0827_POKEMON_NICKIT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0828_pokemon_thievulEntry {
  templateId: "EXTENDED_V0828_POKEMON_THIEVUL";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0829_pokemon_gossifleurEntry {
  templateId: "EXTENDED_V0829_POKEMON_GOSSIFLEUR";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0830_pokemon_eldegossEntry {
  templateId: "EXTENDED_V0830_POKEMON_ELDEGOSS";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0833_pokemon_chewtleEntry {
  templateId: "EXTENDED_V0833_POKEMON_CHEWTLE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0834_pokemon_drednawEntry {
  templateId: "EXTENDED_V0834_POKEMON_DREDNAW";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0835_pokemon_yamperEntry {
  templateId: "EXTENDED_V0835_POKEMON_YAMPER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0836_pokemon_boltundEntry {
  templateId: "EXTENDED_V0836_POKEMON_BOLTUND";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0837_pokemon_rolycolyEntry {
  templateId: "EXTENDED_V0837_POKEMON_ROLYCOLY";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0838_pokemon_carkolEntry {
  templateId: "EXTENDED_V0838_POKEMON_CARKOL";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0839_pokemon_coalossalEntry {
  templateId: "EXTENDED_V0839_POKEMON_COALOSSAL";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0840_pokemon_applinEntry {
  templateId: "EXTENDED_V0840_POKEMON_APPLIN";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0841_pokemon_flappleEntry {
  templateId: "EXTENDED_V0841_POKEMON_FLAPPLE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0842_pokemon_appletunEntry {
  templateId: "EXTENDED_V0842_POKEMON_APPLETUN";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0843_pokemon_silicobraEntry {
  templateId: "EXTENDED_V0843_POKEMON_SILICOBRA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0844_pokemon_sandacondaEntry {
  templateId: "EXTENDED_V0844_POKEMON_SANDACONDA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0845_pokemon_cramorantEntry {
  templateId: "EXTENDED_V0845_POKEMON_CRAMORANT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0846_pokemon_arrokudaEntry {
  templateId: "EXTENDED_V0846_POKEMON_ARROKUDA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0847_pokemon_barraskewdaEntry {
  templateId: "EXTENDED_V0847_POKEMON_BARRASKEWDA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0850_pokemon_sizzlipedeEntry {
  templateId: "EXTENDED_V0850_POKEMON_SIZZLIPEDE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0851_pokemon_centiskorchEntry {
  templateId: "EXTENDED_V0851_POKEMON_CENTISKORCH";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0852_pokemon_clobbopusEntry {
  templateId: "EXTENDED_V0852_POKEMON_CLOBBOPUS";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0853_pokemon_grapploctEntry {
  templateId: "EXTENDED_V0853_POKEMON_GRAPPLOCT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0854_pokemon_sinisteaEntry {
  templateId: "EXTENDED_V0854_POKEMON_SINISTEA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0855_pokemon_polteageistEntry {
  templateId: "EXTENDED_V0855_POKEMON_POLTEAGEIST";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0859_pokemon_impidimpEntry {
  templateId: "EXTENDED_V0859_POKEMON_IMPIDIMP";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0860_pokemon_morgremEntry {
  templateId: "EXTENDED_V0860_POKEMON_MORGREM";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0862_pokemon_obstagoonEntry {
  templateId: "EXTENDED_V0862_POKEMON_OBSTAGOON";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0863_pokemon_perrserkerEntry {
  templateId: "EXTENDED_V0863_POKEMON_PERRSERKER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0864_pokemon_cursolaEntry {
  templateId: "EXTENDED_V0864_POKEMON_CURSOLA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0865_pokemon_sirfetchdEntry {
  templateId: "EXTENDED_V0865_POKEMON_SIRFETCHD";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0866_pokemon_mr_rimeEntry {
  templateId: "EXTENDED_V0866_POKEMON_MR_RIME";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0867_pokemon_runerigusEntry {
  templateId: "EXTENDED_V0867_POKEMON_RUNERIGUS";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0868_pokemon_milceryEntry {
  templateId: "EXTENDED_V0868_POKEMON_MILCERY";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0869_pokemon_alcremieEntry {
  templateId: "EXTENDED_V0869_POKEMON_ALCREMIE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0871_pokemon_pincurchinEntry {
  templateId: "EXTENDED_V0871_POKEMON_PINCURCHIN";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0872_pokemon_snomEntry {
  templateId: "EXTENDED_V0872_POKEMON_SNOM";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0873_pokemon_frosmothEntry {
  templateId: "EXTENDED_V0873_POKEMON_FROSMOTH";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0874_pokemon_stonjournerEntry {
  templateId: "EXTENDED_V0874_POKEMON_STONJOURNER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0875_pokemon_eiscueEntry {
  templateId: "EXTENDED_V0875_POKEMON_EISCUE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0876_pokemon_indeedeeEntry {
  templateId: "EXTENDED_V0876_POKEMON_INDEEDEE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0877_pokemon_morpekoEntry {
  templateId: "EXTENDED_V0877_POKEMON_MORPEKO";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0878_pokemon_cufantEntry {
  templateId: "EXTENDED_V0878_POKEMON_CUFANT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0879_pokemon_copperajahEntry {
  templateId: "EXTENDED_V0879_POKEMON_COPPERAJAH";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0880_pokemon_dracozoltEntry {
  templateId: "EXTENDED_V0880_POKEMON_DRACOZOLT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0881_pokemon_arctozoltEntry {
  templateId: "EXTENDED_V0881_POKEMON_ARCTOZOLT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0882_pokemon_dracovishEntry {
  templateId: "EXTENDED_V0882_POKEMON_DRACOVISH";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0883_pokemon_arctovishEntry {
  templateId: "EXTENDED_V0883_POKEMON_ARCTOVISH";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0885_pokemon_dreepyEntry {
  templateId: "EXTENDED_V0885_POKEMON_DREEPY";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0886_pokemon_drakloakEntry {
  templateId: "EXTENDED_V0886_POKEMON_DRAKLOAK";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0887_pokemon_dragapultEntry {
  templateId: "EXTENDED_V0887_POKEMON_DRAGAPULT";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0888_pokemon_zacianEntry {
  templateId: "EXTENDED_V0888_POKEMON_ZACIAN";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0889_pokemon_zamazentaEntry {
  templateId: "EXTENDED_V0889_POKEMON_ZAMAZENTA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0890_pokemon_eternatusEntry {
  templateId: "EXTENDED_V0890_POKEMON_ETERNATUS";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0893_pokemon_zarudeEntry {
  templateId: "EXTENDED_V0893_POKEMON_ZARUDE";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0894_pokemon_regielekiEntry {
  templateId: "EXTENDED_V0894_POKEMON_REGIELEKI";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0895_pokemon_regidragoEntry {
  templateId: "EXTENDED_V0895_POKEMON_REGIDRAGO";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0896_pokemon_glastrierEntry {
  templateId: "EXTENDED_V0896_POKEMON_GLASTRIER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0897_pokemon_spectrierEntry {
  templateId: "EXTENDED_V0897_POKEMON_SPECTRIER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0898_pokemon_calyrexEntry {
  templateId: "EXTENDED_V0898_POKEMON_CALYREX";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0899_pokemon_wyrdeerEntry {
  templateId: "EXTENDED_V0899_POKEMON_WYRDEER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0900_pokemon_kleavorEntry {
  templateId: "EXTENDED_V0900_POKEMON_KLEAVOR";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0901_pokemon_ursalunaEntry {
  templateId: "EXTENDED_V0901_POKEMON_URSALUNA";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0902_pokemon_basculegionEntry {
  templateId: "EXTENDED_V0902_POKEMON_BASCULEGION";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0903_pokemon_sneaslerEntry {
  templateId: "EXTENDED_V0903_POKEMON_SNEASLER";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0904_pokemon_overqwilEntry {
  templateId: "EXTENDED_V0904_POKEMON_OVERQWIL";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0905_pokemon_enamorusEntry {
  templateId: "EXTENDED_V0905_POKEMON_ENAMORUS";
  data: Extended_v0824_pokemon_blipbugdata;
}
export interface Extended_v0824_pokemon_blipbug_normaldatapokemonextendedsettings {
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0824_pokemon_blipbug_normaldata {
  pokemonExtendedSettings: Extended_v0824_pokemon_blipbug_normaldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0824_pokemon_blipbug_normalEntry {
  templateId: "EXTENDED_V0824_POKEMON_BLIPBUG_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0825_pokemon_dottler_normalEntry {
  templateId: "EXTENDED_V0825_POKEMON_DOTTLER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0826_pokemon_orbeetle_normalEntry {
  templateId: "EXTENDED_V0826_POKEMON_ORBEETLE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0827_pokemon_nickit_normalEntry {
  templateId: "EXTENDED_V0827_POKEMON_NICKIT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0828_pokemon_thievul_normalEntry {
  templateId: "EXTENDED_V0828_POKEMON_THIEVUL_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0829_pokemon_gossifleur_normalEntry {
  templateId: "EXTENDED_V0829_POKEMON_GOSSIFLEUR_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0830_pokemon_eldegoss_normalEntry {
  templateId: "EXTENDED_V0830_POKEMON_ELDEGOSS_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0833_pokemon_chewtle_normalEntry {
  templateId: "EXTENDED_V0833_POKEMON_CHEWTLE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0834_pokemon_drednaw_normalEntry {
  templateId: "EXTENDED_V0834_POKEMON_DREDNAW_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0835_pokemon_yamper_normalEntry {
  templateId: "EXTENDED_V0835_POKEMON_YAMPER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0836_pokemon_boltund_normalEntry {
  templateId: "EXTENDED_V0836_POKEMON_BOLTUND_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0837_pokemon_rolycoly_normalEntry {
  templateId: "EXTENDED_V0837_POKEMON_ROLYCOLY_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0838_pokemon_carkol_normalEntry {
  templateId: "EXTENDED_V0838_POKEMON_CARKOL_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0839_pokemon_coalossal_normalEntry {
  templateId: "EXTENDED_V0839_POKEMON_COALOSSAL_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0840_pokemon_applin_normalEntry {
  templateId: "EXTENDED_V0840_POKEMON_APPLIN_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0841_pokemon_flapple_normalEntry {
  templateId: "EXTENDED_V0841_POKEMON_FLAPPLE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0842_pokemon_appletun_normalEntry {
  templateId: "EXTENDED_V0842_POKEMON_APPLETUN_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0843_pokemon_silicobra_normalEntry {
  templateId: "EXTENDED_V0843_POKEMON_SILICOBRA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0844_pokemon_sandaconda_normalEntry {
  templateId: "EXTENDED_V0844_POKEMON_SANDACONDA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0845_pokemon_cramorant_normalEntry {
  templateId: "EXTENDED_V0845_POKEMON_CRAMORANT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0846_pokemon_arrokuda_normalEntry {
  templateId: "EXTENDED_V0846_POKEMON_ARROKUDA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0847_pokemon_barraskewda_normalEntry {
  templateId: "EXTENDED_V0847_POKEMON_BARRASKEWDA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0850_pokemon_sizzlipede_normalEntry {
  templateId: "EXTENDED_V0850_POKEMON_SIZZLIPEDE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0851_pokemon_centiskorch_normalEntry {
  templateId: "EXTENDED_V0851_POKEMON_CENTISKORCH_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0852_pokemon_clobbopus_normalEntry {
  templateId: "EXTENDED_V0852_POKEMON_CLOBBOPUS_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0853_pokemon_grapploct_normalEntry {
  templateId: "EXTENDED_V0853_POKEMON_GRAPPLOCT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0854_pokemon_sinistea_antiqueEntry {
  templateId: "EXTENDED_V0854_POKEMON_SINISTEA_ANTIQUE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0854_pokemon_sinistea_phonyEntry {
  templateId: "EXTENDED_V0854_POKEMON_SINISTEA_PHONY";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0855_pokemon_polteageist_antiqueEntry {
  templateId: "EXTENDED_V0855_POKEMON_POLTEAGEIST_ANTIQUE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0855_pokemon_polteageist_phonyEntry {
  templateId: "EXTENDED_V0855_POKEMON_POLTEAGEIST_PHONY";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0859_pokemon_impidimp_normalEntry {
  templateId: "EXTENDED_V0859_POKEMON_IMPIDIMP_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0860_pokemon_morgrem_normalEntry {
  templateId: "EXTENDED_V0860_POKEMON_MORGREM_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0862_pokemon_obstagoon_normalEntry {
  templateId: "EXTENDED_V0862_POKEMON_OBSTAGOON_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0863_pokemon_perrserker_normalEntry {
  templateId: "EXTENDED_V0863_POKEMON_PERRSERKER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0864_pokemon_cursola_normalEntry {
  templateId: "EXTENDED_V0864_POKEMON_CURSOLA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0865_pokemon_sirfetchd_normalEntry {
  templateId: "EXTENDED_V0865_POKEMON_SIRFETCHD_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0866_pokemon_mr_rime_normalEntry {
  templateId: "EXTENDED_V0866_POKEMON_MR_RIME_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0867_pokemon_runerigus_normalEntry {
  templateId: "EXTENDED_V0867_POKEMON_RUNERIGUS_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0868_pokemon_milcery_normalEntry {
  templateId: "EXTENDED_V0868_POKEMON_MILCERY_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0869_pokemon_alcremie_normalEntry {
  templateId: "EXTENDED_V0869_POKEMON_ALCREMIE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0870_pokemon_falinks_gofest_2025_train_conductorEntry {
  templateId: "EXTENDED_V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0871_pokemon_pincurchin_normalEntry {
  templateId: "EXTENDED_V0871_POKEMON_PINCURCHIN_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0872_pokemon_snom_normalEntry {
  templateId: "EXTENDED_V0872_POKEMON_SNOM_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0873_pokemon_frosmoth_normalEntry {
  templateId: "EXTENDED_V0873_POKEMON_FROSMOTH_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0874_pokemon_stonjourner_normalEntry {
  templateId: "EXTENDED_V0874_POKEMON_STONJOURNER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0875_pokemon_eiscue_iceEntry {
  templateId: "EXTENDED_V0875_POKEMON_EISCUE_ICE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0875_pokemon_eiscue_noiceEntry {
  templateId: "EXTENDED_V0875_POKEMON_EISCUE_NOICE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0876_pokemon_indeedee_femaleEntry {
  templateId: "EXTENDED_V0876_POKEMON_INDEEDEE_FEMALE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0876_pokemon_indeedee_maleEntry {
  templateId: "EXTENDED_V0876_POKEMON_INDEEDEE_MALE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0877_pokemon_morpeko_full_bellyEntry {
  templateId: "EXTENDED_V0877_POKEMON_MORPEKO_FULL_BELLY";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0877_pokemon_morpeko_hangryEntry {
  templateId: "EXTENDED_V0877_POKEMON_MORPEKO_HANGRY";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0878_pokemon_cufant_normalEntry {
  templateId: "EXTENDED_V0878_POKEMON_CUFANT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0879_pokemon_copperajah_normalEntry {
  templateId: "EXTENDED_V0879_POKEMON_COPPERAJAH_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0880_pokemon_dracozolt_normalEntry {
  templateId: "EXTENDED_V0880_POKEMON_DRACOZOLT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0881_pokemon_arctozolt_normalEntry {
  templateId: "EXTENDED_V0881_POKEMON_ARCTOZOLT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0882_pokemon_dracovish_normalEntry {
  templateId: "EXTENDED_V0882_POKEMON_DRACOVISH_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0883_pokemon_arctovish_normalEntry {
  templateId: "EXTENDED_V0883_POKEMON_ARCTOVISH_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0885_pokemon_dreepy_normalEntry {
  templateId: "EXTENDED_V0885_POKEMON_DREEPY_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0886_pokemon_drakloak_normalEntry {
  templateId: "EXTENDED_V0886_POKEMON_DRAKLOAK_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0887_pokemon_dragapult_normalEntry {
  templateId: "EXTENDED_V0887_POKEMON_DRAGAPULT_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0888_pokemon_zacian_crowned_swordEntry {
  templateId: "EXTENDED_V0888_POKEMON_ZACIAN_CROWNED_SWORD";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0888_pokemon_zacian_heroEntry {
  templateId: "EXTENDED_V0888_POKEMON_ZACIAN_HERO";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0889_pokemon_zamazenta_crowned_shieldEntry {
  templateId: "EXTENDED_V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0889_pokemon_zamazenta_heroEntry {
  templateId: "EXTENDED_V0889_POKEMON_ZAMAZENTA_HERO";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0890_pokemon_eternatus_normalEntry {
  templateId: "EXTENDED_V0890_POKEMON_ETERNATUS_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0893_pokemon_zarude_normalEntry {
  templateId: "EXTENDED_V0893_POKEMON_ZARUDE_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0894_pokemon_regieleki_normalEntry {
  templateId: "EXTENDED_V0894_POKEMON_REGIELEKI_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0895_pokemon_regidrago_normalEntry {
  templateId: "EXTENDED_V0895_POKEMON_REGIDRAGO_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0896_pokemon_glastrier_normalEntry {
  templateId: "EXTENDED_V0896_POKEMON_GLASTRIER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0897_pokemon_spectrier_normalEntry {
  templateId: "EXTENDED_V0897_POKEMON_SPECTRIER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0898_pokemon_calyrex_ice_riderEntry {
  templateId: "EXTENDED_V0898_POKEMON_CALYREX_ICE_RIDER";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0898_pokemon_calyrex_normalEntry {
  templateId: "EXTENDED_V0898_POKEMON_CALYREX_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0898_pokemon_calyrex_shadow_riderEntry {
  templateId: "EXTENDED_V0898_POKEMON_CALYREX_SHADOW_RIDER";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0899_pokemon_wyrdeer_normalEntry {
  templateId: "EXTENDED_V0899_POKEMON_WYRDEER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0900_pokemon_kleavor_normalEntry {
  templateId: "EXTENDED_V0900_POKEMON_KLEAVOR_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0901_pokemon_ursaluna_normalEntry {
  templateId: "EXTENDED_V0901_POKEMON_URSALUNA_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0902_pokemon_basculegion_femaleEntry {
  templateId: "EXTENDED_V0902_POKEMON_BASCULEGION_FEMALE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0902_pokemon_basculegion_normalEntry {
  templateId: "EXTENDED_V0902_POKEMON_BASCULEGION_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0903_pokemon_sneasler_normalEntry {
  templateId: "EXTENDED_V0903_POKEMON_SNEASLER_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0904_pokemon_overqwil_normalEntry {
  templateId: "EXTENDED_V0904_POKEMON_OVERQWIL_NORMAL";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0905_pokemon_enamorus_incarnateEntry {
  templateId: "EXTENDED_V0905_POKEMON_ENAMORUS_INCARNATE";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0905_pokemon_enamorus_therianEntry {
  templateId: "EXTENDED_V0905_POKEMON_ENAMORUS_THERIAN";
  data: Extended_v0824_pokemon_blipbug_normaldata;
}
export interface Extended_v0849_pokemon_toxtricitydatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings {
  scale: number;
  yOffset?: number;
}
export interface Extended_v0849_pokemon_toxtricitydatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  camera?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera;
  maxBattleTrainerVisualSettings: Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings;
  maxBattleVisualSettings: Extended_v0849_pokemon_toxtricitydatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings;
  maxEncounterVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxStationVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  modelHeight?: number;
  modelScaleV2?: number;
  sizeSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
}
export interface Extended_v0849_pokemon_toxtricitydatapokemonextendedsettings {
  breadOverrides: (Extended_v0849_pokemon_toxtricitydatapokemonextendedsettingsbreadoverridesitem)[];
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0849_pokemon_toxtricitydata {
  pokemonExtendedSettings: Extended_v0849_pokemon_toxtricitydatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0849_pokemon_toxtricityEntry {
  templateId: "EXTENDED_V0849_POKEMON_TOXTRICITY";
  data: Extended_v0849_pokemon_toxtricitydata;
}
export interface Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings {
  cameraDistance: number;
  cameraFov: number;
  maxReticleSize: number;
  scale: number;
  yOffset: number;
}
export interface Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettingsbreadoverridesitem {
  breadMode: string;
  camera?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemcamera;
  maxBattleVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxEncounterVisualSettings?: Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxLobbyVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxPowerspotTopperVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxStationVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  modelHeight?: number;
  modelScaleV2?: number;
}
export interface Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettings {
  breadOverrides: (Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettingsbreadoverridesitem)[];
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0861_pokemon_grimmsnarldata {
  pokemonExtendedSettings: Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0861_pokemon_grimmsnarlEntry {
  templateId: "EXTENDED_V0861_POKEMON_GRIMMSNARL";
  data: Extended_v0861_pokemon_grimmsnarldata;
}
export interface Extended_v0861_pokemon_grimmsnarl_normaldatapokemonextendedsettings {
  breadOverrides: (Extended_v0861_pokemon_grimmsnarldatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0861_pokemon_grimmsnarl_normaldata {
  pokemonExtendedSettings: Extended_v0861_pokemon_grimmsnarl_normaldatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0861_pokemon_grimmsnarl_normalEntry {
  templateId: "EXTENDED_V0861_POKEMON_GRIMMSNARL_NORMAL";
  data: Extended_v0861_pokemon_grimmsnarl_normaldata;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings {
  scale: number;
  xOffset: number;
  yOffset: number;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
  yOffset: number;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxlobbyvisualsettings {
  cameraDistance: number;
  cameraFov: number;
  scale: number;
  xOffset: number;
  yOffset: number;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitem {
  breadMode: number;
  maxBattleVisualSettings: Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxbattlevisualsettings;
  maxEncounterVisualSettings: Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxLobbyVisualSettings: Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitemmaxlobbyvisualsettings;
  maxPowerspotTopperVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxStationVisualSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettings {
  breadOverrides: (Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxdata {
  pokemonExtendedSettings: Extended_v0890_pokemon_eternatus_eternamaxdatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0890_pokemon_eternatus_eternamaxEntry {
  templateId: "EXTENDED_V0890_POKEMON_ETERNATUS_ETERNAMAX";
  data: Extended_v0890_pokemon_eternatus_eternamaxdata;
}
export interface Extended_v0892_pokemon_urshifu_rapid_strikedatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  maxBattleTrainerVisualSettings?: Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings;
  maxBattleVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxEncounterVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxStationVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  sizeSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
}
export interface Extended_v0892_pokemon_urshifu_rapid_strikedatapokemonextendedsettings {
  breadOverrides: (Extended_v0892_pokemon_urshifu_rapid_strikedatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0892_pokemon_urshifu_rapid_strikedata {
  pokemonExtendedSettings: Extended_v0892_pokemon_urshifu_rapid_strikedatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0892_pokemon_urshifu_rapid_strikeEntry {
  templateId: "EXTENDED_V0892_POKEMON_URSHIFU_RAPID_STRIKE";
  data: Extended_v0892_pokemon_urshifu_rapid_strikedata;
}
export interface Extended_v0892_pokemon_urshifu_single_strikedatapokemonextendedsettingsbreadoverridesitem {
  averageHeightM?: number;
  breadMode: string;
  maxBattleTrainerVisualSettings?: Extended_v0815_pokemon_cinderacedatapokemonextendedsettingsbreadoverridesitemmaxbattletrainervisualsettings;
  maxBattleVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
  maxEncounterVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxencountervisualsettings;
  maxStationVisualSettings?: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingsbreadoverridesitemmaxstationvisualsettings;
}
export interface Extended_v0892_pokemon_urshifu_single_strikedatapokemonextendedsettings {
  breadOverrides: (Extended_v0892_pokemon_urshifu_single_strikedatapokemonextendedsettingsbreadoverridesitem)[];
  form: string;
  sizeSettings: Extended_v0812_pokemon_rillaboomdatapokemonextendedsettingssizesettings;
  uniqueId: string;
}
export interface Extended_v0892_pokemon_urshifu_single_strikedata {
  pokemonExtendedSettings: Extended_v0892_pokemon_urshifu_single_strikedatapokemonextendedsettings;
  templateId: string;
}
export interface Extended_v0892_pokemon_urshifu_single_strikeEntry {
  templateId: "EXTENDED_V0892_POKEMON_URSHIFU_SINGLE_STRIKE";
  data: Extended_v0892_pokemon_urshifu_single_strikedata;
}

export type PokemonExtendedGrookey = PokemonExtendedShared<"EXTENDED_V0810_POKEMON_GROOKEY", "GROOKEY">;
export type PokemonExtendedThwackey = PokemonExtendedShared<"EXTENDED_V0811_POKEMON_THWACKEY", "THWACKEY">;
export type PokemonExtendedScorbunny = PokemonExtendedShared<"EXTENDED_V0813_POKEMON_SCORBUNNY", "SCORBUNNY">;
export type PokemonExtendedRaboot = PokemonExtendedShared<"EXTENDED_V0814_POKEMON_RABOOT", "RABOOT">;
export type PokemonExtendedSobble = PokemonExtendedShared<"EXTENDED_V0816_POKEMON_SOBBLE", "SOBBLE">;
export type PokemonExtendedDrizzile = PokemonExtendedShared<"EXTENDED_V0817_POKEMON_DRIZZILE", "DRIZZILE">;
export type PokemonExtendedSkwovet = PokemonExtendedShared<"EXTENDED_V0819_POKEMON_SKWOVET", "SKWOVET">;
export type PokemonExtendedGreedent = PokemonExtendedShared<"EXTENDED_V0820_POKEMON_GREEDENT", "GREEDENT">;
export type PokemonExtendedToxel = PokemonExtendedShared<"EXTENDED_V0848_POKEMON_TOXEL", "TOXEL">;
export type PokemonExtendedKubfu = PokemonExtendedShared<"EXTENDED_V0891_POKEMON_KUBFU", "KUBFU">;
export type PokemonExtendedUrshifu = PokemonExtendedShared<"EXTENDED_V0892_POKEMON_URSHIFU", "URSHIFU">;

export type PokemonExtendedGrookeyNormal = PokemonExtendedShared3<"EXTENDED_V0810_POKEMON_GROOKEY_NORMAL", "GROOKEY_NORMAL", "GROOKEY">;
export type PokemonExtendedThwackeyNormal = PokemonExtendedShared3<"EXTENDED_V0811_POKEMON_THWACKEY_NORMAL", "THWACKEY_NORMAL", "THWACKEY">;
export type PokemonExtendedScorbunnyNormal = PokemonExtendedShared3<"EXTENDED_V0813_POKEMON_SCORBUNNY_NORMAL", "SCORBUNNY_NORMAL", "SCORBUNNY">;
export type PokemonExtendedRabootNormal = PokemonExtendedShared3<"EXTENDED_V0814_POKEMON_RABOOT_NORMAL", "RABOOT_NORMAL", "RABOOT">;
export type PokemonExtendedSobbleNormal = PokemonExtendedShared3<"EXTENDED_V0816_POKEMON_SOBBLE_NORMAL", "SOBBLE_NORMAL", "SOBBLE">;
export type PokemonExtendedDrizzileNormal = PokemonExtendedShared3<"EXTENDED_V0817_POKEMON_DRIZZILE_NORMAL", "DRIZZILE_NORMAL", "DRIZZILE">;
export type PokemonExtendedSkwovetNormal = PokemonExtendedShared3<"EXTENDED_V0819_POKEMON_SKWOVET_NORMAL", "SKWOVET_NORMAL", "SKWOVET">;
export type PokemonExtendedGreedentNormal = PokemonExtendedShared3<"EXTENDED_V0820_POKEMON_GREEDENT_NORMAL", "GREEDENT_NORMAL", "GREEDENT">;
export type PokemonExtendedToxelNormal = PokemonExtendedShared3<"EXTENDED_V0848_POKEMON_TOXEL_NORMAL", "TOXEL_NORMAL", "TOXEL">;
export type PokemonExtendedKubfuNormal = PokemonExtendedShared3<"EXTENDED_V0891_POKEMON_KUBFU_NORMAL", "KUBFU_NORMAL", "KUBFU">;

export type PokemonExtendedRookidee = PokemonExtendedShared10<"EXTENDED_V0821_POKEMON_ROOKIDEE", "ROOKIDEE">;
export type PokemonExtendedCorvisquire = PokemonExtendedShared10<"EXTENDED_V0822_POKEMON_CORVISQUIRE", "CORVISQUIRE">;
export type PokemonExtendedWooloo = PokemonExtendedShared10<"EXTENDED_V0831_POKEMON_WOOLOO", "WOOLOO">;
export type PokemonExtendedDubwool = PokemonExtendedShared10<"EXTENDED_V0832_POKEMON_DUBWOOL", "DUBWOOL">;
export type PokemonExtendedHatenna = PokemonExtendedShared10<"EXTENDED_V0856_POKEMON_HATENNA", "HATENNA">;
export type PokemonExtendedHattrem = PokemonExtendedShared10<"EXTENDED_V0857_POKEMON_HATTREM", "HATTREM">;
export type PokemonExtendedHatterene = PokemonExtendedShared10<"EXTENDED_V0858_POKEMON_HATTERENE", "HATTERENE">;
export type PokemonExtendedFalinks = PokemonExtendedShared10<"EXTENDED_V0870_POKEMON_FALINKS", "FALINKS">;

export type PokemonExtendedRookideeNormal = PokemonExtendedShared12<"EXTENDED_V0821_POKEMON_ROOKIDEE_NORMAL", "ROOKIDEE_NORMAL", "ROOKIDEE">;
export type PokemonExtendedCorvisquireNormal = PokemonExtendedShared12<"EXTENDED_V0822_POKEMON_CORVISQUIRE_NORMAL", "CORVISQUIRE_NORMAL", "CORVISQUIRE">;
export type PokemonExtendedWoolooNormal = PokemonExtendedShared12<"EXTENDED_V0831_POKEMON_WOOLOO_NORMAL", "WOOLOO_NORMAL", "WOOLOO">;
export type PokemonExtendedDubwoolNormal = PokemonExtendedShared12<"EXTENDED_V0832_POKEMON_DUBWOOL_NORMAL", "DUBWOOL_NORMAL", "DUBWOOL">;
export type PokemonExtendedHatennaNormal = PokemonExtendedShared12<"EXTENDED_V0856_POKEMON_HATENNA_NORMAL", "HATENNA_NORMAL", "HATENNA">;
export type PokemonExtendedHattremNormal = PokemonExtendedShared12<"EXTENDED_V0857_POKEMON_HATTREM_NORMAL", "HATTREM_NORMAL", "HATTREM">;
export type PokemonExtendedHattereneNormal = PokemonExtendedShared12<"EXTENDED_V0858_POKEMON_HATTERENE_NORMAL", "HATTERENE_NORMAL", "HATTERENE">;
export type PokemonExtendedFalinksNormal = PokemonExtendedShared12<"EXTENDED_V0870_POKEMON_FALINKS_NORMAL", "FALINKS_NORMAL", "FALINKS">;

export type PokemonExtendedCorviknight = PokemonExtendedShared21<"EXTENDED_V0823_POKEMON_CORVIKNIGHT", "CORVIKNIGHT">;
export type PokemonExtendedDuraludon = PokemonExtendedShared21<"EXTENDED_V0884_POKEMON_DURALUDON", "DURALUDON">;

export type PokemonExtendedCorviknightNormal = PokemonExtendedShared22<"EXTENDED_V0823_POKEMON_CORVIKNIGHT_NORMAL", "CORVIKNIGHT_NORMAL", "CORVIKNIGHT">;
export type PokemonExtendedDuraludonNormal = PokemonExtendedShared22<"EXTENDED_V0884_POKEMON_DURALUDON_NORMAL", "DURALUDON_NORMAL", "DURALUDON">;

export type PokemonExtendedAmped = PokemonExtendedShared76<"EXTENDED_V0849_POKEMON_TOXTRICITY_AMPED", "TOXTRICITY_AMPED">;
export type PokemonExtendedLowKey = PokemonExtendedShared76<"EXTENDED_V0849_POKEMON_TOXTRICITY_LOW_KEY", "TOXTRICITY_LOW_KEY">;

export interface PokemonExtendedGen8MasterfileByTemplateId {
  "EXTENDED_V0810_POKEMON_GROOKEY": PokemonExtendedGrookey;
  "EXTENDED_V0811_POKEMON_THWACKEY": PokemonExtendedThwackey;
  "EXTENDED_V0813_POKEMON_SCORBUNNY": PokemonExtendedScorbunny;
  "EXTENDED_V0814_POKEMON_RABOOT": PokemonExtendedRaboot;
  "EXTENDED_V0816_POKEMON_SOBBLE": PokemonExtendedSobble;
  "EXTENDED_V0817_POKEMON_DRIZZILE": PokemonExtendedDrizzile;
  "EXTENDED_V0819_POKEMON_SKWOVET": PokemonExtendedSkwovet;
  "EXTENDED_V0820_POKEMON_GREEDENT": PokemonExtendedGreedent;
  "EXTENDED_V0848_POKEMON_TOXEL": PokemonExtendedToxel;
  "EXTENDED_V0891_POKEMON_KUBFU": PokemonExtendedKubfu;
  "EXTENDED_V0892_POKEMON_URSHIFU": PokemonExtendedUrshifu;
  "EXTENDED_V0810_POKEMON_GROOKEY_NORMAL": PokemonExtendedGrookeyNormal;
  "EXTENDED_V0811_POKEMON_THWACKEY_NORMAL": PokemonExtendedThwackeyNormal;
  "EXTENDED_V0813_POKEMON_SCORBUNNY_NORMAL": PokemonExtendedScorbunnyNormal;
  "EXTENDED_V0814_POKEMON_RABOOT_NORMAL": PokemonExtendedRabootNormal;
  "EXTENDED_V0816_POKEMON_SOBBLE_NORMAL": PokemonExtendedSobbleNormal;
  "EXTENDED_V0817_POKEMON_DRIZZILE_NORMAL": PokemonExtendedDrizzileNormal;
  "EXTENDED_V0819_POKEMON_SKWOVET_NORMAL": PokemonExtendedSkwovetNormal;
  "EXTENDED_V0820_POKEMON_GREEDENT_NORMAL": PokemonExtendedGreedentNormal;
  "EXTENDED_V0848_POKEMON_TOXEL_NORMAL": PokemonExtendedToxelNormal;
  "EXTENDED_V0891_POKEMON_KUBFU_NORMAL": PokemonExtendedKubfuNormal;
  "EXTENDED_V0812_POKEMON_RILLABOOM": Extended_v0812_pokemon_rillaboomEntry;
  "EXTENDED_V0812_POKEMON_RILLABOOM_NORMAL": Extended_v0812_pokemon_rillaboom_normalEntry;
  "EXTENDED_V0815_POKEMON_CINDERACE": Extended_v0815_pokemon_cinderaceEntry;
  "EXTENDED_V0815_POKEMON_CINDERACE_NORMAL": Extended_v0815_pokemon_cinderace_normalEntry;
  "EXTENDED_V0818_POKEMON_INTELEON": Extended_v0818_pokemon_inteleonEntry;
  "EXTENDED_V0818_POKEMON_INTELEON_NORMAL": Extended_v0818_pokemon_inteleon_normalEntry;
  "EXTENDED_V0821_POKEMON_ROOKIDEE": PokemonExtendedRookidee;
  "EXTENDED_V0822_POKEMON_CORVISQUIRE": PokemonExtendedCorvisquire;
  "EXTENDED_V0831_POKEMON_WOOLOO": PokemonExtendedWooloo;
  "EXTENDED_V0832_POKEMON_DUBWOOL": PokemonExtendedDubwool;
  "EXTENDED_V0856_POKEMON_HATENNA": PokemonExtendedHatenna;
  "EXTENDED_V0857_POKEMON_HATTREM": PokemonExtendedHattrem;
  "EXTENDED_V0858_POKEMON_HATTERENE": PokemonExtendedHatterene;
  "EXTENDED_V0870_POKEMON_FALINKS": PokemonExtendedFalinks;
  "EXTENDED_V0821_POKEMON_ROOKIDEE_NORMAL": PokemonExtendedRookideeNormal;
  "EXTENDED_V0822_POKEMON_CORVISQUIRE_NORMAL": PokemonExtendedCorvisquireNormal;
  "EXTENDED_V0831_POKEMON_WOOLOO_NORMAL": PokemonExtendedWoolooNormal;
  "EXTENDED_V0832_POKEMON_DUBWOOL_NORMAL": PokemonExtendedDubwoolNormal;
  "EXTENDED_V0856_POKEMON_HATENNA_NORMAL": PokemonExtendedHatennaNormal;
  "EXTENDED_V0857_POKEMON_HATTREM_NORMAL": PokemonExtendedHattremNormal;
  "EXTENDED_V0858_POKEMON_HATTERENE_NORMAL": PokemonExtendedHattereneNormal;
  "EXTENDED_V0870_POKEMON_FALINKS_NORMAL": PokemonExtendedFalinksNormal;
  "EXTENDED_V0823_POKEMON_CORVIKNIGHT": PokemonExtendedCorviknight;
  "EXTENDED_V0884_POKEMON_DURALUDON": PokemonExtendedDuraludon;
  "EXTENDED_V0823_POKEMON_CORVIKNIGHT_NORMAL": PokemonExtendedCorviknightNormal;
  "EXTENDED_V0884_POKEMON_DURALUDON_NORMAL": PokemonExtendedDuraludonNormal;
  "EXTENDED_V0824_POKEMON_BLIPBUG": Extended_v0824_pokemon_blipbugEntry;
  "EXTENDED_V0825_POKEMON_DOTTLER": Extended_v0825_pokemon_dottlerEntry;
  "EXTENDED_V0826_POKEMON_ORBEETLE": Extended_v0826_pokemon_orbeetleEntry;
  "EXTENDED_V0827_POKEMON_NICKIT": Extended_v0827_pokemon_nickitEntry;
  "EXTENDED_V0828_POKEMON_THIEVUL": Extended_v0828_pokemon_thievulEntry;
  "EXTENDED_V0829_POKEMON_GOSSIFLEUR": Extended_v0829_pokemon_gossifleurEntry;
  "EXTENDED_V0830_POKEMON_ELDEGOSS": Extended_v0830_pokemon_eldegossEntry;
  "EXTENDED_V0833_POKEMON_CHEWTLE": Extended_v0833_pokemon_chewtleEntry;
  "EXTENDED_V0834_POKEMON_DREDNAW": Extended_v0834_pokemon_drednawEntry;
  "EXTENDED_V0835_POKEMON_YAMPER": Extended_v0835_pokemon_yamperEntry;
  "EXTENDED_V0836_POKEMON_BOLTUND": Extended_v0836_pokemon_boltundEntry;
  "EXTENDED_V0837_POKEMON_ROLYCOLY": Extended_v0837_pokemon_rolycolyEntry;
  "EXTENDED_V0838_POKEMON_CARKOL": Extended_v0838_pokemon_carkolEntry;
  "EXTENDED_V0839_POKEMON_COALOSSAL": Extended_v0839_pokemon_coalossalEntry;
  "EXTENDED_V0840_POKEMON_APPLIN": Extended_v0840_pokemon_applinEntry;
  "EXTENDED_V0841_POKEMON_FLAPPLE": Extended_v0841_pokemon_flappleEntry;
  "EXTENDED_V0842_POKEMON_APPLETUN": Extended_v0842_pokemon_appletunEntry;
  "EXTENDED_V0843_POKEMON_SILICOBRA": Extended_v0843_pokemon_silicobraEntry;
  "EXTENDED_V0844_POKEMON_SANDACONDA": Extended_v0844_pokemon_sandacondaEntry;
  "EXTENDED_V0845_POKEMON_CRAMORANT": Extended_v0845_pokemon_cramorantEntry;
  "EXTENDED_V0846_POKEMON_ARROKUDA": Extended_v0846_pokemon_arrokudaEntry;
  "EXTENDED_V0847_POKEMON_BARRASKEWDA": Extended_v0847_pokemon_barraskewdaEntry;
  "EXTENDED_V0850_POKEMON_SIZZLIPEDE": Extended_v0850_pokemon_sizzlipedeEntry;
  "EXTENDED_V0851_POKEMON_CENTISKORCH": Extended_v0851_pokemon_centiskorchEntry;
  "EXTENDED_V0852_POKEMON_CLOBBOPUS": Extended_v0852_pokemon_clobbopusEntry;
  "EXTENDED_V0853_POKEMON_GRAPPLOCT": Extended_v0853_pokemon_grapploctEntry;
  "EXTENDED_V0854_POKEMON_SINISTEA": Extended_v0854_pokemon_sinisteaEntry;
  "EXTENDED_V0855_POKEMON_POLTEAGEIST": Extended_v0855_pokemon_polteageistEntry;
  "EXTENDED_V0859_POKEMON_IMPIDIMP": Extended_v0859_pokemon_impidimpEntry;
  "EXTENDED_V0860_POKEMON_MORGREM": Extended_v0860_pokemon_morgremEntry;
  "EXTENDED_V0862_POKEMON_OBSTAGOON": Extended_v0862_pokemon_obstagoonEntry;
  "EXTENDED_V0863_POKEMON_PERRSERKER": Extended_v0863_pokemon_perrserkerEntry;
  "EXTENDED_V0864_POKEMON_CURSOLA": Extended_v0864_pokemon_cursolaEntry;
  "EXTENDED_V0865_POKEMON_SIRFETCHD": Extended_v0865_pokemon_sirfetchdEntry;
  "EXTENDED_V0866_POKEMON_MR_RIME": Extended_v0866_pokemon_mr_rimeEntry;
  "EXTENDED_V0867_POKEMON_RUNERIGUS": Extended_v0867_pokemon_runerigusEntry;
  "EXTENDED_V0868_POKEMON_MILCERY": Extended_v0868_pokemon_milceryEntry;
  "EXTENDED_V0869_POKEMON_ALCREMIE": Extended_v0869_pokemon_alcremieEntry;
  "EXTENDED_V0871_POKEMON_PINCURCHIN": Extended_v0871_pokemon_pincurchinEntry;
  "EXTENDED_V0872_POKEMON_SNOM": Extended_v0872_pokemon_snomEntry;
  "EXTENDED_V0873_POKEMON_FROSMOTH": Extended_v0873_pokemon_frosmothEntry;
  "EXTENDED_V0874_POKEMON_STONJOURNER": Extended_v0874_pokemon_stonjournerEntry;
  "EXTENDED_V0875_POKEMON_EISCUE": Extended_v0875_pokemon_eiscueEntry;
  "EXTENDED_V0876_POKEMON_INDEEDEE": Extended_v0876_pokemon_indeedeeEntry;
  "EXTENDED_V0877_POKEMON_MORPEKO": Extended_v0877_pokemon_morpekoEntry;
  "EXTENDED_V0878_POKEMON_CUFANT": Extended_v0878_pokemon_cufantEntry;
  "EXTENDED_V0879_POKEMON_COPPERAJAH": Extended_v0879_pokemon_copperajahEntry;
  "EXTENDED_V0880_POKEMON_DRACOZOLT": Extended_v0880_pokemon_dracozoltEntry;
  "EXTENDED_V0881_POKEMON_ARCTOZOLT": Extended_v0881_pokemon_arctozoltEntry;
  "EXTENDED_V0882_POKEMON_DRACOVISH": Extended_v0882_pokemon_dracovishEntry;
  "EXTENDED_V0883_POKEMON_ARCTOVISH": Extended_v0883_pokemon_arctovishEntry;
  "EXTENDED_V0885_POKEMON_DREEPY": Extended_v0885_pokemon_dreepyEntry;
  "EXTENDED_V0886_POKEMON_DRAKLOAK": Extended_v0886_pokemon_drakloakEntry;
  "EXTENDED_V0887_POKEMON_DRAGAPULT": Extended_v0887_pokemon_dragapultEntry;
  "EXTENDED_V0888_POKEMON_ZACIAN": Extended_v0888_pokemon_zacianEntry;
  "EXTENDED_V0889_POKEMON_ZAMAZENTA": Extended_v0889_pokemon_zamazentaEntry;
  "EXTENDED_V0890_POKEMON_ETERNATUS": Extended_v0890_pokemon_eternatusEntry;
  "EXTENDED_V0893_POKEMON_ZARUDE": Extended_v0893_pokemon_zarudeEntry;
  "EXTENDED_V0894_POKEMON_REGIELEKI": Extended_v0894_pokemon_regielekiEntry;
  "EXTENDED_V0895_POKEMON_REGIDRAGO": Extended_v0895_pokemon_regidragoEntry;
  "EXTENDED_V0896_POKEMON_GLASTRIER": Extended_v0896_pokemon_glastrierEntry;
  "EXTENDED_V0897_POKEMON_SPECTRIER": Extended_v0897_pokemon_spectrierEntry;
  "EXTENDED_V0898_POKEMON_CALYREX": Extended_v0898_pokemon_calyrexEntry;
  "EXTENDED_V0899_POKEMON_WYRDEER": Extended_v0899_pokemon_wyrdeerEntry;
  "EXTENDED_V0900_POKEMON_KLEAVOR": Extended_v0900_pokemon_kleavorEntry;
  "EXTENDED_V0901_POKEMON_URSALUNA": Extended_v0901_pokemon_ursalunaEntry;
  "EXTENDED_V0902_POKEMON_BASCULEGION": Extended_v0902_pokemon_basculegionEntry;
  "EXTENDED_V0903_POKEMON_SNEASLER": Extended_v0903_pokemon_sneaslerEntry;
  "EXTENDED_V0904_POKEMON_OVERQWIL": Extended_v0904_pokemon_overqwilEntry;
  "EXTENDED_V0905_POKEMON_ENAMORUS": Extended_v0905_pokemon_enamorusEntry;
  "EXTENDED_V0824_POKEMON_BLIPBUG_NORMAL": Extended_v0824_pokemon_blipbug_normalEntry;
  "EXTENDED_V0825_POKEMON_DOTTLER_NORMAL": Extended_v0825_pokemon_dottler_normalEntry;
  "EXTENDED_V0826_POKEMON_ORBEETLE_NORMAL": Extended_v0826_pokemon_orbeetle_normalEntry;
  "EXTENDED_V0827_POKEMON_NICKIT_NORMAL": Extended_v0827_pokemon_nickit_normalEntry;
  "EXTENDED_V0828_POKEMON_THIEVUL_NORMAL": Extended_v0828_pokemon_thievul_normalEntry;
  "EXTENDED_V0829_POKEMON_GOSSIFLEUR_NORMAL": Extended_v0829_pokemon_gossifleur_normalEntry;
  "EXTENDED_V0830_POKEMON_ELDEGOSS_NORMAL": Extended_v0830_pokemon_eldegoss_normalEntry;
  "EXTENDED_V0833_POKEMON_CHEWTLE_NORMAL": Extended_v0833_pokemon_chewtle_normalEntry;
  "EXTENDED_V0834_POKEMON_DREDNAW_NORMAL": Extended_v0834_pokemon_drednaw_normalEntry;
  "EXTENDED_V0835_POKEMON_YAMPER_NORMAL": Extended_v0835_pokemon_yamper_normalEntry;
  "EXTENDED_V0836_POKEMON_BOLTUND_NORMAL": Extended_v0836_pokemon_boltund_normalEntry;
  "EXTENDED_V0837_POKEMON_ROLYCOLY_NORMAL": Extended_v0837_pokemon_rolycoly_normalEntry;
  "EXTENDED_V0838_POKEMON_CARKOL_NORMAL": Extended_v0838_pokemon_carkol_normalEntry;
  "EXTENDED_V0839_POKEMON_COALOSSAL_NORMAL": Extended_v0839_pokemon_coalossal_normalEntry;
  "EXTENDED_V0840_POKEMON_APPLIN_NORMAL": Extended_v0840_pokemon_applin_normalEntry;
  "EXTENDED_V0841_POKEMON_FLAPPLE_NORMAL": Extended_v0841_pokemon_flapple_normalEntry;
  "EXTENDED_V0842_POKEMON_APPLETUN_NORMAL": Extended_v0842_pokemon_appletun_normalEntry;
  "EXTENDED_V0843_POKEMON_SILICOBRA_NORMAL": Extended_v0843_pokemon_silicobra_normalEntry;
  "EXTENDED_V0844_POKEMON_SANDACONDA_NORMAL": Extended_v0844_pokemon_sandaconda_normalEntry;
  "EXTENDED_V0845_POKEMON_CRAMORANT_NORMAL": Extended_v0845_pokemon_cramorant_normalEntry;
  "EXTENDED_V0846_POKEMON_ARROKUDA_NORMAL": Extended_v0846_pokemon_arrokuda_normalEntry;
  "EXTENDED_V0847_POKEMON_BARRASKEWDA_NORMAL": Extended_v0847_pokemon_barraskewda_normalEntry;
  "EXTENDED_V0850_POKEMON_SIZZLIPEDE_NORMAL": Extended_v0850_pokemon_sizzlipede_normalEntry;
  "EXTENDED_V0851_POKEMON_CENTISKORCH_NORMAL": Extended_v0851_pokemon_centiskorch_normalEntry;
  "EXTENDED_V0852_POKEMON_CLOBBOPUS_NORMAL": Extended_v0852_pokemon_clobbopus_normalEntry;
  "EXTENDED_V0853_POKEMON_GRAPPLOCT_NORMAL": Extended_v0853_pokemon_grapploct_normalEntry;
  "EXTENDED_V0854_POKEMON_SINISTEA_ANTIQUE": Extended_v0854_pokemon_sinistea_antiqueEntry;
  "EXTENDED_V0854_POKEMON_SINISTEA_PHONY": Extended_v0854_pokemon_sinistea_phonyEntry;
  "EXTENDED_V0855_POKEMON_POLTEAGEIST_ANTIQUE": Extended_v0855_pokemon_polteageist_antiqueEntry;
  "EXTENDED_V0855_POKEMON_POLTEAGEIST_PHONY": Extended_v0855_pokemon_polteageist_phonyEntry;
  "EXTENDED_V0859_POKEMON_IMPIDIMP_NORMAL": Extended_v0859_pokemon_impidimp_normalEntry;
  "EXTENDED_V0860_POKEMON_MORGREM_NORMAL": Extended_v0860_pokemon_morgrem_normalEntry;
  "EXTENDED_V0862_POKEMON_OBSTAGOON_NORMAL": Extended_v0862_pokemon_obstagoon_normalEntry;
  "EXTENDED_V0863_POKEMON_PERRSERKER_NORMAL": Extended_v0863_pokemon_perrserker_normalEntry;
  "EXTENDED_V0864_POKEMON_CURSOLA_NORMAL": Extended_v0864_pokemon_cursola_normalEntry;
  "EXTENDED_V0865_POKEMON_SIRFETCHD_NORMAL": Extended_v0865_pokemon_sirfetchd_normalEntry;
  "EXTENDED_V0866_POKEMON_MR_RIME_NORMAL": Extended_v0866_pokemon_mr_rime_normalEntry;
  "EXTENDED_V0867_POKEMON_RUNERIGUS_NORMAL": Extended_v0867_pokemon_runerigus_normalEntry;
  "EXTENDED_V0868_POKEMON_MILCERY_NORMAL": Extended_v0868_pokemon_milcery_normalEntry;
  "EXTENDED_V0869_POKEMON_ALCREMIE_NORMAL": Extended_v0869_pokemon_alcremie_normalEntry;
  "EXTENDED_V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR": Extended_v0870_pokemon_falinks_gofest_2025_train_conductorEntry;
  "EXTENDED_V0871_POKEMON_PINCURCHIN_NORMAL": Extended_v0871_pokemon_pincurchin_normalEntry;
  "EXTENDED_V0872_POKEMON_SNOM_NORMAL": Extended_v0872_pokemon_snom_normalEntry;
  "EXTENDED_V0873_POKEMON_FROSMOTH_NORMAL": Extended_v0873_pokemon_frosmoth_normalEntry;
  "EXTENDED_V0874_POKEMON_STONJOURNER_NORMAL": Extended_v0874_pokemon_stonjourner_normalEntry;
  "EXTENDED_V0875_POKEMON_EISCUE_ICE": Extended_v0875_pokemon_eiscue_iceEntry;
  "EXTENDED_V0875_POKEMON_EISCUE_NOICE": Extended_v0875_pokemon_eiscue_noiceEntry;
  "EXTENDED_V0876_POKEMON_INDEEDEE_FEMALE": Extended_v0876_pokemon_indeedee_femaleEntry;
  "EXTENDED_V0876_POKEMON_INDEEDEE_MALE": Extended_v0876_pokemon_indeedee_maleEntry;
  "EXTENDED_V0877_POKEMON_MORPEKO_FULL_BELLY": Extended_v0877_pokemon_morpeko_full_bellyEntry;
  "EXTENDED_V0877_POKEMON_MORPEKO_HANGRY": Extended_v0877_pokemon_morpeko_hangryEntry;
  "EXTENDED_V0878_POKEMON_CUFANT_NORMAL": Extended_v0878_pokemon_cufant_normalEntry;
  "EXTENDED_V0879_POKEMON_COPPERAJAH_NORMAL": Extended_v0879_pokemon_copperajah_normalEntry;
  "EXTENDED_V0880_POKEMON_DRACOZOLT_NORMAL": Extended_v0880_pokemon_dracozolt_normalEntry;
  "EXTENDED_V0881_POKEMON_ARCTOZOLT_NORMAL": Extended_v0881_pokemon_arctozolt_normalEntry;
  "EXTENDED_V0882_POKEMON_DRACOVISH_NORMAL": Extended_v0882_pokemon_dracovish_normalEntry;
  "EXTENDED_V0883_POKEMON_ARCTOVISH_NORMAL": Extended_v0883_pokemon_arctovish_normalEntry;
  "EXTENDED_V0885_POKEMON_DREEPY_NORMAL": Extended_v0885_pokemon_dreepy_normalEntry;
  "EXTENDED_V0886_POKEMON_DRAKLOAK_NORMAL": Extended_v0886_pokemon_drakloak_normalEntry;
  "EXTENDED_V0887_POKEMON_DRAGAPULT_NORMAL": Extended_v0887_pokemon_dragapult_normalEntry;
  "EXTENDED_V0888_POKEMON_ZACIAN_CROWNED_SWORD": Extended_v0888_pokemon_zacian_crowned_swordEntry;
  "EXTENDED_V0888_POKEMON_ZACIAN_HERO": Extended_v0888_pokemon_zacian_heroEntry;
  "EXTENDED_V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD": Extended_v0889_pokemon_zamazenta_crowned_shieldEntry;
  "EXTENDED_V0889_POKEMON_ZAMAZENTA_HERO": Extended_v0889_pokemon_zamazenta_heroEntry;
  "EXTENDED_V0890_POKEMON_ETERNATUS_NORMAL": Extended_v0890_pokemon_eternatus_normalEntry;
  "EXTENDED_V0893_POKEMON_ZARUDE_NORMAL": Extended_v0893_pokemon_zarude_normalEntry;
  "EXTENDED_V0894_POKEMON_REGIELEKI_NORMAL": Extended_v0894_pokemon_regieleki_normalEntry;
  "EXTENDED_V0895_POKEMON_REGIDRAGO_NORMAL": Extended_v0895_pokemon_regidrago_normalEntry;
  "EXTENDED_V0896_POKEMON_GLASTRIER_NORMAL": Extended_v0896_pokemon_glastrier_normalEntry;
  "EXTENDED_V0897_POKEMON_SPECTRIER_NORMAL": Extended_v0897_pokemon_spectrier_normalEntry;
  "EXTENDED_V0898_POKEMON_CALYREX_ICE_RIDER": Extended_v0898_pokemon_calyrex_ice_riderEntry;
  "EXTENDED_V0898_POKEMON_CALYREX_NORMAL": Extended_v0898_pokemon_calyrex_normalEntry;
  "EXTENDED_V0898_POKEMON_CALYREX_SHADOW_RIDER": Extended_v0898_pokemon_calyrex_shadow_riderEntry;
  "EXTENDED_V0899_POKEMON_WYRDEER_NORMAL": Extended_v0899_pokemon_wyrdeer_normalEntry;
  "EXTENDED_V0900_POKEMON_KLEAVOR_NORMAL": Extended_v0900_pokemon_kleavor_normalEntry;
  "EXTENDED_V0901_POKEMON_URSALUNA_NORMAL": Extended_v0901_pokemon_ursaluna_normalEntry;
  "EXTENDED_V0902_POKEMON_BASCULEGION_FEMALE": Extended_v0902_pokemon_basculegion_femaleEntry;
  "EXTENDED_V0902_POKEMON_BASCULEGION_NORMAL": Extended_v0902_pokemon_basculegion_normalEntry;
  "EXTENDED_V0903_POKEMON_SNEASLER_NORMAL": Extended_v0903_pokemon_sneasler_normalEntry;
  "EXTENDED_V0904_POKEMON_OVERQWIL_NORMAL": Extended_v0904_pokemon_overqwil_normalEntry;
  "EXTENDED_V0905_POKEMON_ENAMORUS_INCARNATE": Extended_v0905_pokemon_enamorus_incarnateEntry;
  "EXTENDED_V0905_POKEMON_ENAMORUS_THERIAN": Extended_v0905_pokemon_enamorus_therianEntry;
  "EXTENDED_V0849_POKEMON_TOXTRICITY": Extended_v0849_pokemon_toxtricityEntry;
  "EXTENDED_V0849_POKEMON_TOXTRICITY_AMPED": PokemonExtendedAmped;
  "EXTENDED_V0849_POKEMON_TOXTRICITY_LOW_KEY": PokemonExtendedLowKey;
  "EXTENDED_V0861_POKEMON_GRIMMSNARL": Extended_v0861_pokemon_grimmsnarlEntry;
  "EXTENDED_V0861_POKEMON_GRIMMSNARL_NORMAL": Extended_v0861_pokemon_grimmsnarl_normalEntry;
  "EXTENDED_V0890_POKEMON_ETERNATUS_ETERNAMAX": Extended_v0890_pokemon_eternatus_eternamaxEntry;
  "EXTENDED_V0892_POKEMON_URSHIFU_RAPID_STRIKE": Extended_v0892_pokemon_urshifu_rapid_strikeEntry;
  "EXTENDED_V0892_POKEMON_URSHIFU_SINGLE_STRIKE": Extended_v0892_pokemon_urshifu_single_strikeEntry;
}

export interface PokemonExtendedGen8ByDexId {
  "0810": PokemonExtendedGrookey | PokemonExtendedGrookeyNormal;
  "0811": PokemonExtendedThwackey | PokemonExtendedThwackeyNormal;
  "0812": Extended_v0812_pokemon_rillaboomEntry | Extended_v0812_pokemon_rillaboom_normalEntry;
  "0813": PokemonExtendedScorbunny | PokemonExtendedScorbunnyNormal;
  "0814": PokemonExtendedRaboot | PokemonExtendedRabootNormal;
  "0815": Extended_v0815_pokemon_cinderaceEntry | Extended_v0815_pokemon_cinderace_normalEntry;
  "0816": PokemonExtendedSobble | PokemonExtendedSobbleNormal;
  "0817": PokemonExtendedDrizzile | PokemonExtendedDrizzileNormal;
  "0818": Extended_v0818_pokemon_inteleonEntry | Extended_v0818_pokemon_inteleon_normalEntry;
  "0819": PokemonExtendedSkwovet | PokemonExtendedSkwovetNormal;
  "0820": PokemonExtendedGreedent | PokemonExtendedGreedentNormal;
  "0821": PokemonExtendedRookidee | PokemonExtendedRookideeNormal;
  "0822": PokemonExtendedCorvisquire | PokemonExtendedCorvisquireNormal;
  "0823": PokemonExtendedCorviknight | PokemonExtendedCorviknightNormal;
  "0824": Extended_v0824_pokemon_blipbugEntry | Extended_v0824_pokemon_blipbug_normalEntry;
  "0825": Extended_v0825_pokemon_dottlerEntry | Extended_v0825_pokemon_dottler_normalEntry;
  "0826": Extended_v0826_pokemon_orbeetleEntry | Extended_v0826_pokemon_orbeetle_normalEntry;
  "0827": Extended_v0827_pokemon_nickitEntry | Extended_v0827_pokemon_nickit_normalEntry;
  "0828": Extended_v0828_pokemon_thievulEntry | Extended_v0828_pokemon_thievul_normalEntry;
  "0829": Extended_v0829_pokemon_gossifleurEntry | Extended_v0829_pokemon_gossifleur_normalEntry;
  "0830": Extended_v0830_pokemon_eldegossEntry | Extended_v0830_pokemon_eldegoss_normalEntry;
  "0831": PokemonExtendedWooloo | PokemonExtendedWoolooNormal;
  "0832": PokemonExtendedDubwool | PokemonExtendedDubwoolNormal;
  "0833": Extended_v0833_pokemon_chewtleEntry | Extended_v0833_pokemon_chewtle_normalEntry;
  "0834": Extended_v0834_pokemon_drednawEntry | Extended_v0834_pokemon_drednaw_normalEntry;
  "0835": Extended_v0835_pokemon_yamperEntry | Extended_v0835_pokemon_yamper_normalEntry;
  "0836": Extended_v0836_pokemon_boltundEntry | Extended_v0836_pokemon_boltund_normalEntry;
  "0837": Extended_v0837_pokemon_rolycolyEntry | Extended_v0837_pokemon_rolycoly_normalEntry;
  "0838": Extended_v0838_pokemon_carkolEntry | Extended_v0838_pokemon_carkol_normalEntry;
  "0839": Extended_v0839_pokemon_coalossalEntry | Extended_v0839_pokemon_coalossal_normalEntry;
  "0840": Extended_v0840_pokemon_applinEntry | Extended_v0840_pokemon_applin_normalEntry;
  "0841": Extended_v0841_pokemon_flappleEntry | Extended_v0841_pokemon_flapple_normalEntry;
  "0842": Extended_v0842_pokemon_appletunEntry | Extended_v0842_pokemon_appletun_normalEntry;
  "0843": Extended_v0843_pokemon_silicobraEntry | Extended_v0843_pokemon_silicobra_normalEntry;
  "0844": Extended_v0844_pokemon_sandacondaEntry | Extended_v0844_pokemon_sandaconda_normalEntry;
  "0845": Extended_v0845_pokemon_cramorantEntry | Extended_v0845_pokemon_cramorant_normalEntry;
  "0846": Extended_v0846_pokemon_arrokudaEntry | Extended_v0846_pokemon_arrokuda_normalEntry;
  "0847": Extended_v0847_pokemon_barraskewdaEntry | Extended_v0847_pokemon_barraskewda_normalEntry;
  "0848": PokemonExtendedToxel | PokemonExtendedToxelNormal;
  "0849": Extended_v0849_pokemon_toxtricityEntry | PokemonExtendedAmped | PokemonExtendedLowKey;
  "0850": Extended_v0850_pokemon_sizzlipedeEntry | Extended_v0850_pokemon_sizzlipede_normalEntry;
  "0851": Extended_v0851_pokemon_centiskorchEntry | Extended_v0851_pokemon_centiskorch_normalEntry;
  "0852": Extended_v0852_pokemon_clobbopusEntry | Extended_v0852_pokemon_clobbopus_normalEntry;
  "0853": Extended_v0853_pokemon_grapploctEntry | Extended_v0853_pokemon_grapploct_normalEntry;
  "0854": Extended_v0854_pokemon_sinisteaEntry | Extended_v0854_pokemon_sinistea_antiqueEntry | Extended_v0854_pokemon_sinistea_phonyEntry;
  "0855": Extended_v0855_pokemon_polteageistEntry | Extended_v0855_pokemon_polteageist_antiqueEntry | Extended_v0855_pokemon_polteageist_phonyEntry;
  "0856": PokemonExtendedHatenna | PokemonExtendedHatennaNormal;
  "0857": PokemonExtendedHattrem | PokemonExtendedHattremNormal;
  "0858": PokemonExtendedHatterene | PokemonExtendedHattereneNormal;
  "0859": Extended_v0859_pokemon_impidimpEntry | Extended_v0859_pokemon_impidimp_normalEntry;
  "0860": Extended_v0860_pokemon_morgremEntry | Extended_v0860_pokemon_morgrem_normalEntry;
  "0861": Extended_v0861_pokemon_grimmsnarlEntry | Extended_v0861_pokemon_grimmsnarl_normalEntry;
  "0862": Extended_v0862_pokemon_obstagoonEntry | Extended_v0862_pokemon_obstagoon_normalEntry;
  "0863": Extended_v0863_pokemon_perrserkerEntry | Extended_v0863_pokemon_perrserker_normalEntry;
  "0864": Extended_v0864_pokemon_cursolaEntry | Extended_v0864_pokemon_cursola_normalEntry;
  "0865": Extended_v0865_pokemon_sirfetchdEntry | Extended_v0865_pokemon_sirfetchd_normalEntry;
  "0866": Extended_v0866_pokemon_mr_rimeEntry | Extended_v0866_pokemon_mr_rime_normalEntry;
  "0867": Extended_v0867_pokemon_runerigusEntry | Extended_v0867_pokemon_runerigus_normalEntry;
  "0868": Extended_v0868_pokemon_milceryEntry | Extended_v0868_pokemon_milcery_normalEntry;
  "0869": Extended_v0869_pokemon_alcremieEntry | Extended_v0869_pokemon_alcremie_normalEntry;
  "0870": PokemonExtendedFalinks | PokemonExtendedFalinksNormal | Extended_v0870_pokemon_falinks_gofest_2025_train_conductorEntry;
  "0871": Extended_v0871_pokemon_pincurchinEntry | Extended_v0871_pokemon_pincurchin_normalEntry;
  "0872": Extended_v0872_pokemon_snomEntry | Extended_v0872_pokemon_snom_normalEntry;
  "0873": Extended_v0873_pokemon_frosmothEntry | Extended_v0873_pokemon_frosmoth_normalEntry;
  "0874": Extended_v0874_pokemon_stonjournerEntry | Extended_v0874_pokemon_stonjourner_normalEntry;
  "0875": Extended_v0875_pokemon_eiscueEntry | Extended_v0875_pokemon_eiscue_iceEntry | Extended_v0875_pokemon_eiscue_noiceEntry;
  "0876": Extended_v0876_pokemon_indeedeeEntry | Extended_v0876_pokemon_indeedee_femaleEntry | Extended_v0876_pokemon_indeedee_maleEntry;
  "0877": Extended_v0877_pokemon_morpekoEntry | Extended_v0877_pokemon_morpeko_full_bellyEntry | Extended_v0877_pokemon_morpeko_hangryEntry;
  "0878": Extended_v0878_pokemon_cufantEntry | Extended_v0878_pokemon_cufant_normalEntry;
  "0879": Extended_v0879_pokemon_copperajahEntry | Extended_v0879_pokemon_copperajah_normalEntry;
  "0880": Extended_v0880_pokemon_dracozoltEntry | Extended_v0880_pokemon_dracozolt_normalEntry;
  "0881": Extended_v0881_pokemon_arctozoltEntry | Extended_v0881_pokemon_arctozolt_normalEntry;
  "0882": Extended_v0882_pokemon_dracovishEntry | Extended_v0882_pokemon_dracovish_normalEntry;
  "0883": Extended_v0883_pokemon_arctovishEntry | Extended_v0883_pokemon_arctovish_normalEntry;
  "0884": PokemonExtendedDuraludon | PokemonExtendedDuraludonNormal;
  "0885": Extended_v0885_pokemon_dreepyEntry | Extended_v0885_pokemon_dreepy_normalEntry;
  "0886": Extended_v0886_pokemon_drakloakEntry | Extended_v0886_pokemon_drakloak_normalEntry;
  "0887": Extended_v0887_pokemon_dragapultEntry | Extended_v0887_pokemon_dragapult_normalEntry;
  "0888": Extended_v0888_pokemon_zacianEntry | Extended_v0888_pokemon_zacian_crowned_swordEntry | Extended_v0888_pokemon_zacian_heroEntry;
  "0889": Extended_v0889_pokemon_zamazentaEntry | Extended_v0889_pokemon_zamazenta_crowned_shieldEntry | Extended_v0889_pokemon_zamazenta_heroEntry;
  "0890": Extended_v0890_pokemon_eternatusEntry | Extended_v0890_pokemon_eternatus_normalEntry | Extended_v0890_pokemon_eternatus_eternamaxEntry;
  "0891": PokemonExtendedKubfu | PokemonExtendedKubfuNormal;
  "0892": PokemonExtendedUrshifu | Extended_v0892_pokemon_urshifu_rapid_strikeEntry | Extended_v0892_pokemon_urshifu_single_strikeEntry;
  "0893": Extended_v0893_pokemon_zarudeEntry | Extended_v0893_pokemon_zarude_normalEntry;
  "0894": Extended_v0894_pokemon_regielekiEntry | Extended_v0894_pokemon_regieleki_normalEntry;
  "0895": Extended_v0895_pokemon_regidragoEntry | Extended_v0895_pokemon_regidrago_normalEntry;
  "0896": Extended_v0896_pokemon_glastrierEntry | Extended_v0896_pokemon_glastrier_normalEntry;
  "0897": Extended_v0897_pokemon_spectrierEntry | Extended_v0897_pokemon_spectrier_normalEntry;
  "0898": Extended_v0898_pokemon_calyrexEntry | Extended_v0898_pokemon_calyrex_ice_riderEntry | Extended_v0898_pokemon_calyrex_normalEntry | Extended_v0898_pokemon_calyrex_shadow_riderEntry;
  "0899": Extended_v0899_pokemon_wyrdeerEntry | Extended_v0899_pokemon_wyrdeer_normalEntry;
  "0900": Extended_v0900_pokemon_kleavorEntry | Extended_v0900_pokemon_kleavor_normalEntry;
  "0901": Extended_v0901_pokemon_ursalunaEntry | Extended_v0901_pokemon_ursaluna_normalEntry;
  "0902": Extended_v0902_pokemon_basculegionEntry | Extended_v0902_pokemon_basculegion_femaleEntry | Extended_v0902_pokemon_basculegion_normalEntry;
  "0903": Extended_v0903_pokemon_sneaslerEntry | Extended_v0903_pokemon_sneasler_normalEntry;
  "0904": Extended_v0904_pokemon_overqwilEntry | Extended_v0904_pokemon_overqwil_normalEntry;
  "0905": Extended_v0905_pokemon_enamorusEntry | Extended_v0905_pokemon_enamorus_incarnateEntry | Extended_v0905_pokemon_enamorus_therianEntry;
}

export interface PokemonExtendedGen8ByPokemonId {
  "ALCREMIE": Extended_v0869_pokemon_alcremieEntry | Extended_v0869_pokemon_alcremie_normalEntry;
  "APPLETUN": Extended_v0842_pokemon_appletunEntry | Extended_v0842_pokemon_appletun_normalEntry;
  "APPLIN": Extended_v0840_pokemon_applinEntry | Extended_v0840_pokemon_applin_normalEntry;
  "ARCTOVISH": Extended_v0883_pokemon_arctovishEntry | Extended_v0883_pokemon_arctovish_normalEntry;
  "ARCTOZOLT": Extended_v0881_pokemon_arctozoltEntry | Extended_v0881_pokemon_arctozolt_normalEntry;
  "ARROKUDA": Extended_v0846_pokemon_arrokudaEntry | Extended_v0846_pokemon_arrokuda_normalEntry;
  "BARRASKEWDA": Extended_v0847_pokemon_barraskewdaEntry | Extended_v0847_pokemon_barraskewda_normalEntry;
  "BASCULEGION": Extended_v0902_pokemon_basculegionEntry | Extended_v0902_pokemon_basculegion_femaleEntry | Extended_v0902_pokemon_basculegion_normalEntry;
  "BLIPBUG": Extended_v0824_pokemon_blipbugEntry | Extended_v0824_pokemon_blipbug_normalEntry;
  "BOLTUND": Extended_v0836_pokemon_boltundEntry | Extended_v0836_pokemon_boltund_normalEntry;
  "CALYREX": Extended_v0898_pokemon_calyrexEntry | Extended_v0898_pokemon_calyrex_ice_riderEntry | Extended_v0898_pokemon_calyrex_normalEntry | Extended_v0898_pokemon_calyrex_shadow_riderEntry;
  "CARKOL": Extended_v0838_pokemon_carkolEntry | Extended_v0838_pokemon_carkol_normalEntry;
  "CENTISKORCH": Extended_v0851_pokemon_centiskorchEntry | Extended_v0851_pokemon_centiskorch_normalEntry;
  "CHEWTLE": Extended_v0833_pokemon_chewtleEntry | Extended_v0833_pokemon_chewtle_normalEntry;
  "CINDERACE": Extended_v0815_pokemon_cinderaceEntry | Extended_v0815_pokemon_cinderace_normalEntry;
  "CLOBBOPUS": Extended_v0852_pokemon_clobbopusEntry | Extended_v0852_pokemon_clobbopus_normalEntry;
  "COALOSSAL": Extended_v0839_pokemon_coalossalEntry | Extended_v0839_pokemon_coalossal_normalEntry;
  "COPPERAJAH": Extended_v0879_pokemon_copperajahEntry | Extended_v0879_pokemon_copperajah_normalEntry;
  "CORVIKNIGHT": PokemonExtendedCorviknight | PokemonExtendedCorviknightNormal;
  "CORVISQUIRE": PokemonExtendedCorvisquire | PokemonExtendedCorvisquireNormal;
  "CRAMORANT": Extended_v0845_pokemon_cramorantEntry | Extended_v0845_pokemon_cramorant_normalEntry;
  "CUFANT": Extended_v0878_pokemon_cufantEntry | Extended_v0878_pokemon_cufant_normalEntry;
  "CURSOLA": Extended_v0864_pokemon_cursolaEntry | Extended_v0864_pokemon_cursola_normalEntry;
  "DOTTLER": Extended_v0825_pokemon_dottlerEntry | Extended_v0825_pokemon_dottler_normalEntry;
  "DRACOVISH": Extended_v0882_pokemon_dracovishEntry | Extended_v0882_pokemon_dracovish_normalEntry;
  "DRACOZOLT": Extended_v0880_pokemon_dracozoltEntry | Extended_v0880_pokemon_dracozolt_normalEntry;
  "DRAGAPULT": Extended_v0887_pokemon_dragapultEntry | Extended_v0887_pokemon_dragapult_normalEntry;
  "DRAKLOAK": Extended_v0886_pokemon_drakloakEntry | Extended_v0886_pokemon_drakloak_normalEntry;
  "DREDNAW": Extended_v0834_pokemon_drednawEntry | Extended_v0834_pokemon_drednaw_normalEntry;
  "DREEPY": Extended_v0885_pokemon_dreepyEntry | Extended_v0885_pokemon_dreepy_normalEntry;
  "DRIZZILE": PokemonExtendedDrizzile | PokemonExtendedDrizzileNormal;
  "DUBWOOL": PokemonExtendedDubwool | PokemonExtendedDubwoolNormal;
  "DURALUDON": PokemonExtendedDuraludon | PokemonExtendedDuraludonNormal;
  "EISCUE": Extended_v0875_pokemon_eiscueEntry | Extended_v0875_pokemon_eiscue_iceEntry | Extended_v0875_pokemon_eiscue_noiceEntry;
  "ELDEGOSS": Extended_v0830_pokemon_eldegossEntry | Extended_v0830_pokemon_eldegoss_normalEntry;
  "ENAMORUS": Extended_v0905_pokemon_enamorusEntry | Extended_v0905_pokemon_enamorus_incarnateEntry | Extended_v0905_pokemon_enamorus_therianEntry;
  "ETERNATUS": Extended_v0890_pokemon_eternatusEntry | Extended_v0890_pokemon_eternatus_normalEntry | Extended_v0890_pokemon_eternatus_eternamaxEntry;
  "FALINKS": PokemonExtendedFalinks | PokemonExtendedFalinksNormal | Extended_v0870_pokemon_falinks_gofest_2025_train_conductorEntry;
  "FLAPPLE": Extended_v0841_pokemon_flappleEntry | Extended_v0841_pokemon_flapple_normalEntry;
  "FROSMOTH": Extended_v0873_pokemon_frosmothEntry | Extended_v0873_pokemon_frosmoth_normalEntry;
  "GLASTRIER": Extended_v0896_pokemon_glastrierEntry | Extended_v0896_pokemon_glastrier_normalEntry;
  "GOSSIFLEUR": Extended_v0829_pokemon_gossifleurEntry | Extended_v0829_pokemon_gossifleur_normalEntry;
  "GRAPPLOCT": Extended_v0853_pokemon_grapploctEntry | Extended_v0853_pokemon_grapploct_normalEntry;
  "GREEDENT": PokemonExtendedGreedent | PokemonExtendedGreedentNormal;
  "GRIMMSNARL": Extended_v0861_pokemon_grimmsnarlEntry | Extended_v0861_pokemon_grimmsnarl_normalEntry;
  "GROOKEY": PokemonExtendedGrookey | PokemonExtendedGrookeyNormal;
  "HATENNA": PokemonExtendedHatenna | PokemonExtendedHatennaNormal;
  "HATTERENE": PokemonExtendedHatterene | PokemonExtendedHattereneNormal;
  "HATTREM": PokemonExtendedHattrem | PokemonExtendedHattremNormal;
  "IMPIDIMP": Extended_v0859_pokemon_impidimpEntry | Extended_v0859_pokemon_impidimp_normalEntry;
  "INDEEDEE": Extended_v0876_pokemon_indeedeeEntry | Extended_v0876_pokemon_indeedee_femaleEntry | Extended_v0876_pokemon_indeedee_maleEntry;
  "INTELEON": Extended_v0818_pokemon_inteleonEntry | Extended_v0818_pokemon_inteleon_normalEntry;
  "KLEAVOR": Extended_v0900_pokemon_kleavorEntry | Extended_v0900_pokemon_kleavor_normalEntry;
  "KUBFU": PokemonExtendedKubfu | PokemonExtendedKubfuNormal;
  "MILCERY": Extended_v0868_pokemon_milceryEntry | Extended_v0868_pokemon_milcery_normalEntry;
  "MORGREM": Extended_v0860_pokemon_morgremEntry | Extended_v0860_pokemon_morgrem_normalEntry;
  "MORPEKO": Extended_v0877_pokemon_morpekoEntry | Extended_v0877_pokemon_morpeko_full_bellyEntry | Extended_v0877_pokemon_morpeko_hangryEntry;
  "MR_RIME": Extended_v0866_pokemon_mr_rimeEntry | Extended_v0866_pokemon_mr_rime_normalEntry;
  "NICKIT": Extended_v0827_pokemon_nickitEntry | Extended_v0827_pokemon_nickit_normalEntry;
  "OBSTAGOON": Extended_v0862_pokemon_obstagoonEntry | Extended_v0862_pokemon_obstagoon_normalEntry;
  "ORBEETLE": Extended_v0826_pokemon_orbeetleEntry | Extended_v0826_pokemon_orbeetle_normalEntry;
  "OVERQWIL": Extended_v0904_pokemon_overqwilEntry | Extended_v0904_pokemon_overqwil_normalEntry;
  "PERRSERKER": Extended_v0863_pokemon_perrserkerEntry | Extended_v0863_pokemon_perrserker_normalEntry;
  "PINCURCHIN": Extended_v0871_pokemon_pincurchinEntry | Extended_v0871_pokemon_pincurchin_normalEntry;
  "POLTEAGEIST": Extended_v0855_pokemon_polteageistEntry | Extended_v0855_pokemon_polteageist_antiqueEntry | Extended_v0855_pokemon_polteageist_phonyEntry;
  "RABOOT": PokemonExtendedRaboot | PokemonExtendedRabootNormal;
  "REGIDRAGO": Extended_v0895_pokemon_regidragoEntry | Extended_v0895_pokemon_regidrago_normalEntry;
  "REGIELEKI": Extended_v0894_pokemon_regielekiEntry | Extended_v0894_pokemon_regieleki_normalEntry;
  "RILLABOOM": Extended_v0812_pokemon_rillaboomEntry | Extended_v0812_pokemon_rillaboom_normalEntry;
  "ROLYCOLY": Extended_v0837_pokemon_rolycolyEntry | Extended_v0837_pokemon_rolycoly_normalEntry;
  "ROOKIDEE": PokemonExtendedRookidee | PokemonExtendedRookideeNormal;
  "RUNERIGUS": Extended_v0867_pokemon_runerigusEntry | Extended_v0867_pokemon_runerigus_normalEntry;
  "SANDACONDA": Extended_v0844_pokemon_sandacondaEntry | Extended_v0844_pokemon_sandaconda_normalEntry;
  "SCORBUNNY": PokemonExtendedScorbunny | PokemonExtendedScorbunnyNormal;
  "SILICOBRA": Extended_v0843_pokemon_silicobraEntry | Extended_v0843_pokemon_silicobra_normalEntry;
  "SINISTEA": Extended_v0854_pokemon_sinisteaEntry | Extended_v0854_pokemon_sinistea_antiqueEntry | Extended_v0854_pokemon_sinistea_phonyEntry;
  "SIRFETCHD": Extended_v0865_pokemon_sirfetchdEntry | Extended_v0865_pokemon_sirfetchd_normalEntry;
  "SIZZLIPEDE": Extended_v0850_pokemon_sizzlipedeEntry | Extended_v0850_pokemon_sizzlipede_normalEntry;
  "SKWOVET": PokemonExtendedSkwovet | PokemonExtendedSkwovetNormal;
  "SNEASLER": Extended_v0903_pokemon_sneaslerEntry | Extended_v0903_pokemon_sneasler_normalEntry;
  "SNOM": Extended_v0872_pokemon_snomEntry | Extended_v0872_pokemon_snom_normalEntry;
  "SOBBLE": PokemonExtendedSobble | PokemonExtendedSobbleNormal;
  "SPECTRIER": Extended_v0897_pokemon_spectrierEntry | Extended_v0897_pokemon_spectrier_normalEntry;
  "STONJOURNER": Extended_v0874_pokemon_stonjournerEntry | Extended_v0874_pokemon_stonjourner_normalEntry;
  "THIEVUL": Extended_v0828_pokemon_thievulEntry | Extended_v0828_pokemon_thievul_normalEntry;
  "THWACKEY": PokemonExtendedThwackey | PokemonExtendedThwackeyNormal;
  "TOXEL": PokemonExtendedToxel | PokemonExtendedToxelNormal;
  "TOXTRICITY": Extended_v0849_pokemon_toxtricityEntry | PokemonExtendedAmped | PokemonExtendedLowKey;
  "URSALUNA": Extended_v0901_pokemon_ursalunaEntry | Extended_v0901_pokemon_ursaluna_normalEntry;
  "URSHIFU": PokemonExtendedUrshifu | Extended_v0892_pokemon_urshifu_rapid_strikeEntry | Extended_v0892_pokemon_urshifu_single_strikeEntry;
  "WOOLOO": PokemonExtendedWooloo | PokemonExtendedWoolooNormal;
  "WYRDEER": Extended_v0899_pokemon_wyrdeerEntry | Extended_v0899_pokemon_wyrdeer_normalEntry;
  "YAMPER": Extended_v0835_pokemon_yamperEntry | Extended_v0835_pokemon_yamper_normalEntry;
  "ZACIAN": Extended_v0888_pokemon_zacianEntry | Extended_v0888_pokemon_zacian_crowned_swordEntry | Extended_v0888_pokemon_zacian_heroEntry;
  "ZAMAZENTA": Extended_v0889_pokemon_zamazentaEntry | Extended_v0889_pokemon_zamazenta_crowned_shieldEntry | Extended_v0889_pokemon_zamazenta_heroEntry;
  "ZARUDE": Extended_v0893_pokemon_zarudeEntry | Extended_v0893_pokemon_zarude_normalEntry;
}

export type PokemonExtendedGen8MasterfileEntry = PokemonExtendedGrookey | PokemonExtendedThwackey | PokemonExtendedScorbunny | PokemonExtendedRaboot | PokemonExtendedSobble | PokemonExtendedDrizzile | PokemonExtendedSkwovet | PokemonExtendedGreedent | PokemonExtendedToxel | PokemonExtendedKubfu | PokemonExtendedUrshifu | PokemonExtendedGrookeyNormal | PokemonExtendedThwackeyNormal | PokemonExtendedScorbunnyNormal | PokemonExtendedRabootNormal | PokemonExtendedSobbleNormal | PokemonExtendedDrizzileNormal | PokemonExtendedSkwovetNormal | PokemonExtendedGreedentNormal | PokemonExtendedToxelNormal | PokemonExtendedKubfuNormal | Extended_v0812_pokemon_rillaboomEntry | Extended_v0812_pokemon_rillaboom_normalEntry | Extended_v0815_pokemon_cinderaceEntry | Extended_v0815_pokemon_cinderace_normalEntry | Extended_v0818_pokemon_inteleonEntry | Extended_v0818_pokemon_inteleon_normalEntry | PokemonExtendedRookidee | PokemonExtendedCorvisquire | PokemonExtendedWooloo | PokemonExtendedDubwool | PokemonExtendedHatenna | PokemonExtendedHattrem | PokemonExtendedHatterene | PokemonExtendedFalinks | PokemonExtendedRookideeNormal | PokemonExtendedCorvisquireNormal | PokemonExtendedWoolooNormal | PokemonExtendedDubwoolNormal | PokemonExtendedHatennaNormal | PokemonExtendedHattremNormal | PokemonExtendedHattereneNormal | PokemonExtendedFalinksNormal | PokemonExtendedCorviknight | PokemonExtendedDuraludon | PokemonExtendedCorviknightNormal | PokemonExtendedDuraludonNormal | Extended_v0824_pokemon_blipbugEntry | Extended_v0825_pokemon_dottlerEntry | Extended_v0826_pokemon_orbeetleEntry | Extended_v0827_pokemon_nickitEntry | Extended_v0828_pokemon_thievulEntry | Extended_v0829_pokemon_gossifleurEntry | Extended_v0830_pokemon_eldegossEntry | Extended_v0833_pokemon_chewtleEntry | Extended_v0834_pokemon_drednawEntry | Extended_v0835_pokemon_yamperEntry | Extended_v0836_pokemon_boltundEntry | Extended_v0837_pokemon_rolycolyEntry | Extended_v0838_pokemon_carkolEntry | Extended_v0839_pokemon_coalossalEntry | Extended_v0840_pokemon_applinEntry | Extended_v0841_pokemon_flappleEntry | Extended_v0842_pokemon_appletunEntry | Extended_v0843_pokemon_silicobraEntry | Extended_v0844_pokemon_sandacondaEntry | Extended_v0845_pokemon_cramorantEntry | Extended_v0846_pokemon_arrokudaEntry | Extended_v0847_pokemon_barraskewdaEntry | Extended_v0850_pokemon_sizzlipedeEntry | Extended_v0851_pokemon_centiskorchEntry | Extended_v0852_pokemon_clobbopusEntry | Extended_v0853_pokemon_grapploctEntry | Extended_v0854_pokemon_sinisteaEntry | Extended_v0855_pokemon_polteageistEntry | Extended_v0859_pokemon_impidimpEntry | Extended_v0860_pokemon_morgremEntry | Extended_v0862_pokemon_obstagoonEntry | Extended_v0863_pokemon_perrserkerEntry | Extended_v0864_pokemon_cursolaEntry | Extended_v0865_pokemon_sirfetchdEntry | Extended_v0866_pokemon_mr_rimeEntry | Extended_v0867_pokemon_runerigusEntry | Extended_v0868_pokemon_milceryEntry | Extended_v0869_pokemon_alcremieEntry | Extended_v0871_pokemon_pincurchinEntry | Extended_v0872_pokemon_snomEntry | Extended_v0873_pokemon_frosmothEntry | Extended_v0874_pokemon_stonjournerEntry | Extended_v0875_pokemon_eiscueEntry | Extended_v0876_pokemon_indeedeeEntry | Extended_v0877_pokemon_morpekoEntry | Extended_v0878_pokemon_cufantEntry | Extended_v0879_pokemon_copperajahEntry | Extended_v0880_pokemon_dracozoltEntry | Extended_v0881_pokemon_arctozoltEntry | Extended_v0882_pokemon_dracovishEntry | Extended_v0883_pokemon_arctovishEntry | Extended_v0885_pokemon_dreepyEntry | Extended_v0886_pokemon_drakloakEntry | Extended_v0887_pokemon_dragapultEntry | Extended_v0888_pokemon_zacianEntry | Extended_v0889_pokemon_zamazentaEntry | Extended_v0890_pokemon_eternatusEntry | Extended_v0893_pokemon_zarudeEntry | Extended_v0894_pokemon_regielekiEntry | Extended_v0895_pokemon_regidragoEntry | Extended_v0896_pokemon_glastrierEntry | Extended_v0897_pokemon_spectrierEntry | Extended_v0898_pokemon_calyrexEntry | Extended_v0899_pokemon_wyrdeerEntry | Extended_v0900_pokemon_kleavorEntry | Extended_v0901_pokemon_ursalunaEntry | Extended_v0902_pokemon_basculegionEntry | Extended_v0903_pokemon_sneaslerEntry | Extended_v0904_pokemon_overqwilEntry | Extended_v0905_pokemon_enamorusEntry | Extended_v0824_pokemon_blipbug_normalEntry | Extended_v0825_pokemon_dottler_normalEntry | Extended_v0826_pokemon_orbeetle_normalEntry | Extended_v0827_pokemon_nickit_normalEntry | Extended_v0828_pokemon_thievul_normalEntry | Extended_v0829_pokemon_gossifleur_normalEntry | Extended_v0830_pokemon_eldegoss_normalEntry | Extended_v0833_pokemon_chewtle_normalEntry | Extended_v0834_pokemon_drednaw_normalEntry | Extended_v0835_pokemon_yamper_normalEntry | Extended_v0836_pokemon_boltund_normalEntry | Extended_v0837_pokemon_rolycoly_normalEntry | Extended_v0838_pokemon_carkol_normalEntry | Extended_v0839_pokemon_coalossal_normalEntry | Extended_v0840_pokemon_applin_normalEntry | Extended_v0841_pokemon_flapple_normalEntry | Extended_v0842_pokemon_appletun_normalEntry | Extended_v0843_pokemon_silicobra_normalEntry | Extended_v0844_pokemon_sandaconda_normalEntry | Extended_v0845_pokemon_cramorant_normalEntry | Extended_v0846_pokemon_arrokuda_normalEntry | Extended_v0847_pokemon_barraskewda_normalEntry | Extended_v0850_pokemon_sizzlipede_normalEntry | Extended_v0851_pokemon_centiskorch_normalEntry | Extended_v0852_pokemon_clobbopus_normalEntry | Extended_v0853_pokemon_grapploct_normalEntry | Extended_v0854_pokemon_sinistea_antiqueEntry | Extended_v0854_pokemon_sinistea_phonyEntry | Extended_v0855_pokemon_polteageist_antiqueEntry | Extended_v0855_pokemon_polteageist_phonyEntry | Extended_v0859_pokemon_impidimp_normalEntry | Extended_v0860_pokemon_morgrem_normalEntry | Extended_v0862_pokemon_obstagoon_normalEntry | Extended_v0863_pokemon_perrserker_normalEntry | Extended_v0864_pokemon_cursola_normalEntry | Extended_v0865_pokemon_sirfetchd_normalEntry | Extended_v0866_pokemon_mr_rime_normalEntry | Extended_v0867_pokemon_runerigus_normalEntry | Extended_v0868_pokemon_milcery_normalEntry | Extended_v0869_pokemon_alcremie_normalEntry | Extended_v0870_pokemon_falinks_gofest_2025_train_conductorEntry | Extended_v0871_pokemon_pincurchin_normalEntry | Extended_v0872_pokemon_snom_normalEntry | Extended_v0873_pokemon_frosmoth_normalEntry | Extended_v0874_pokemon_stonjourner_normalEntry | Extended_v0875_pokemon_eiscue_iceEntry | Extended_v0875_pokemon_eiscue_noiceEntry | Extended_v0876_pokemon_indeedee_femaleEntry | Extended_v0876_pokemon_indeedee_maleEntry | Extended_v0877_pokemon_morpeko_full_bellyEntry | Extended_v0877_pokemon_morpeko_hangryEntry | Extended_v0878_pokemon_cufant_normalEntry | Extended_v0879_pokemon_copperajah_normalEntry | Extended_v0880_pokemon_dracozolt_normalEntry | Extended_v0881_pokemon_arctozolt_normalEntry | Extended_v0882_pokemon_dracovish_normalEntry | Extended_v0883_pokemon_arctovish_normalEntry | Extended_v0885_pokemon_dreepy_normalEntry | Extended_v0886_pokemon_drakloak_normalEntry | Extended_v0887_pokemon_dragapult_normalEntry | Extended_v0888_pokemon_zacian_crowned_swordEntry | Extended_v0888_pokemon_zacian_heroEntry | Extended_v0889_pokemon_zamazenta_crowned_shieldEntry | Extended_v0889_pokemon_zamazenta_heroEntry | Extended_v0890_pokemon_eternatus_normalEntry | Extended_v0893_pokemon_zarude_normalEntry | Extended_v0894_pokemon_regieleki_normalEntry | Extended_v0895_pokemon_regidrago_normalEntry | Extended_v0896_pokemon_glastrier_normalEntry | Extended_v0897_pokemon_spectrier_normalEntry | Extended_v0898_pokemon_calyrex_ice_riderEntry | Extended_v0898_pokemon_calyrex_normalEntry | Extended_v0898_pokemon_calyrex_shadow_riderEntry | Extended_v0899_pokemon_wyrdeer_normalEntry | Extended_v0900_pokemon_kleavor_normalEntry | Extended_v0901_pokemon_ursaluna_normalEntry | Extended_v0902_pokemon_basculegion_femaleEntry | Extended_v0902_pokemon_basculegion_normalEntry | Extended_v0903_pokemon_sneasler_normalEntry | Extended_v0904_pokemon_overqwil_normalEntry | Extended_v0905_pokemon_enamorus_incarnateEntry | Extended_v0905_pokemon_enamorus_therianEntry | Extended_v0849_pokemon_toxtricityEntry | PokemonExtendedAmped | PokemonExtendedLowKey | Extended_v0861_pokemon_grimmsnarlEntry | Extended_v0861_pokemon_grimmsnarl_normalEntry | Extended_v0890_pokemon_eternatus_eternamaxEntry | Extended_v0892_pokemon_urshifu_rapid_strikeEntry | Extended_v0892_pokemon_urshifu_single_strikeEntry;

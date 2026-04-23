/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen8
// Filters: all
// Entries emitted: 204

import type { PokemonSettingsShared1095, PokemonSettingsShared1096, PokemonSettingsShared1097, PokemonSettingsShared1098, PokemonSettingsShared1121, PokemonSettingsShared1122, PokemonSettingsShared1130, PokemonSettingsShared1131, PokemonSettingsShared1137, PokemonSettingsShared1138, PokemonSettingsShared1167, PokemonSettingsShared1168, PokemonSettingsShared1246, PokemonSettingsShared1247, PokemonSettingsShared1248, PokemonSettingsShared1249, PokemonSettingsShared1256, PokemonSettingsShared1257, PokemonSettingsShared1268, PokemonSettingsShared1269, PokemonSettingsShared1276, PokemonSettingsShared1277, PokemonSettingsShared1298, PokemonSettingsShared1299, PokemonSettingsShared1307, PokemonSettingsShared1317, PokemonSettingsShared1319, PokemonSettingsShared1328, PokemonSettingsShared1329, PokemonSettingsShared1332, PokemonSettingsShared1338, PokemonSettingsShared1339, PokemonSettingsShared1341, PokemonSettingsShared1342, PokemonSettingsShared1350, PokemonSettingsShared1359, PokemonSettingsShared1360, PokemonSettingsShared1361, PokemonSettingsShared1368, PokemonSettingsShared1375, PokemonSettingsShared1376, PokemonSettingsShared1378, PokemonSettingsShared1390, PokemonSettingsShared44, PokemonSettingsShared849 } from "./shared.generated";

export interface V0812_pokemon_rillaboomdatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0812_pokemon_rillaboomdatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0812_pokemon_rillaboomdatapokemonsettingsibfc {

}
export interface V0812_pokemon_rillaboomdatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0812_pokemon_rillaboomdatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0812_pokemon_rillaboomdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0812_pokemon_rillaboomdata {
  pokemonSettings: V0812_pokemon_rillaboomdatapokemonsettings;
  templateId: string;
}
export interface V0812_pokemon_rillaboomEntry {
  templateId: "V0812_POKEMON_RILLABOOM";
  data: V0812_pokemon_rillaboomdata;
}
export interface V0812_pokemon_rillaboom_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0812_pokemon_rillaboom_normaldata {
  pokemonSettings: V0812_pokemon_rillaboom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0812_pokemon_rillaboom_normalEntry {
  templateId: "V0812_POKEMON_RILLABOOM_NORMAL";
  data: V0812_pokemon_rillaboom_normaldata;
}
export interface V0815_pokemon_cinderacedatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0815_pokemon_cinderacedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0815_pokemon_cinderacedata {
  pokemonSettings: V0815_pokemon_cinderacedatapokemonsettings;
  templateId: string;
}
export interface V0815_pokemon_cinderaceEntry {
  templateId: "V0815_POKEMON_CINDERACE";
  data: V0815_pokemon_cinderacedata;
}
export interface V0815_pokemon_cinderace_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0815_pokemon_cinderace_normaldata {
  pokemonSettings: V0815_pokemon_cinderace_normaldatapokemonsettings;
  templateId: string;
}
export interface V0815_pokemon_cinderace_normalEntry {
  templateId: "V0815_POKEMON_CINDERACE_NORMAL";
  data: V0815_pokemon_cinderace_normaldata;
}
export interface V0818_pokemon_inteleondatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0818_pokemon_inteleondata {
  pokemonSettings: V0818_pokemon_inteleondatapokemonsettings;
  templateId: string;
}
export interface V0818_pokemon_inteleonEntry {
  templateId: "V0818_POKEMON_INTELEON";
  data: V0818_pokemon_inteleondata;
}
export interface V0818_pokemon_inteleon_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0818_pokemon_inteleon_normaldata {
  pokemonSettings: V0818_pokemon_inteleon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0818_pokemon_inteleon_normalEntry {
  templateId: "V0818_POKEMON_INTELEON_NORMAL";
  data: V0818_pokemon_inteleon_normaldata;
}
export interface V0822_pokemon_corvisquiredatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0822_pokemon_corvisquiredatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0822_pokemon_corvisquiredata {
  pokemonSettings: V0822_pokemon_corvisquiredatapokemonsettings;
  templateId: string;
}
export interface V0822_pokemon_corvisquireEntry {
  templateId: "V0822_POKEMON_CORVISQUIRE";
  data: V0822_pokemon_corvisquiredata;
}
export interface V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0822_pokemon_corvisquire_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0822_pokemon_corvisquire_normaldata {
  pokemonSettings: V0822_pokemon_corvisquire_normaldatapokemonsettings;
  templateId: string;
}
export interface V0822_pokemon_corvisquire_normalEntry {
  templateId: "V0822_POKEMON_CORVISQUIRE_NORMAL";
  data: V0822_pokemon_corvisquire_normaldata;
}
export interface V0823_pokemon_corviknightdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0823_pokemon_corviknightdata {
  pokemonSettings: V0823_pokemon_corviknightdatapokemonsettings;
  templateId: string;
}
export interface V0823_pokemon_corviknightEntry {
  templateId: "V0823_POKEMON_CORVIKNIGHT";
  data: V0823_pokemon_corviknightdata;
}
export interface V0823_pokemon_corviknight_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0823_pokemon_corviknight_normaldata {
  pokemonSettings: V0823_pokemon_corviknight_normaldatapokemonsettings;
  templateId: string;
}
export interface V0823_pokemon_corviknight_normalEntry {
  templateId: "V0823_POKEMON_CORVIKNIGHT_NORMAL";
  data: V0823_pokemon_corviknight_normaldata;
}
export interface V0824_pokemon_blipbugdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0824_pokemon_blipbugdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0824_pokemon_blipbugdata {
  pokemonSettings: V0824_pokemon_blipbugdatapokemonsettings;
  templateId: string;
}
export interface V0824_pokemon_blipbugEntry {
  templateId: "V0824_POKEMON_BLIPBUG";
  data: V0824_pokemon_blipbugdata;
}
export interface V0824_pokemon_blipbug_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0824_pokemon_blipbug_normaldata {
  pokemonSettings: V0824_pokemon_blipbug_normaldatapokemonsettings;
  templateId: string;
}
export interface V0824_pokemon_blipbug_normalEntry {
  templateId: "V0824_POKEMON_BLIPBUG_NORMAL";
  data: V0824_pokemon_blipbug_normaldata;
}
export interface V0825_pokemon_dottlerdatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0825_pokemon_dottlerdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0825_pokemon_dottlerdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0825_pokemon_dottlerdata {
  pokemonSettings: V0825_pokemon_dottlerdatapokemonsettings;
  templateId: string;
}
export interface V0825_pokemon_dottlerEntry {
  templateId: "V0825_POKEMON_DOTTLER";
  data: V0825_pokemon_dottlerdata;
}
export interface V0825_pokemon_dottler_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0825_pokemon_dottlerdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0825_pokemon_dottler_normaldata {
  pokemonSettings: V0825_pokemon_dottler_normaldatapokemonsettings;
  templateId: string;
}
export interface V0825_pokemon_dottler_normalEntry {
  templateId: "V0825_POKEMON_DOTTLER_NORMAL";
  data: V0825_pokemon_dottler_normaldata;
}
export interface V0826_pokemon_orbeetledatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0826_pokemon_orbeetledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0826_pokemon_orbeetledata {
  pokemonSettings: V0826_pokemon_orbeetledatapokemonsettings;
  templateId: string;
}
export interface V0826_pokemon_orbeetleEntry {
  templateId: "V0826_POKEMON_ORBEETLE";
  data: V0826_pokemon_orbeetledata;
}
export interface V0826_pokemon_orbeetle_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0826_pokemon_orbeetle_normaldata {
  pokemonSettings: V0826_pokemon_orbeetle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0826_pokemon_orbeetle_normalEntry {
  templateId: "V0826_POKEMON_ORBEETLE_NORMAL";
  data: V0826_pokemon_orbeetle_normaldata;
}
export interface V0829_pokemon_gossifleurdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0829_pokemon_gossifleurdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0829_pokemon_gossifleurdata {
  pokemonSettings: V0829_pokemon_gossifleurdatapokemonsettings;
  templateId: string;
}
export interface V0829_pokemon_gossifleurEntry {
  templateId: "V0829_POKEMON_GOSSIFLEUR";
  data: V0829_pokemon_gossifleurdata;
}
export interface V0829_pokemon_gossifleur_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0829_pokemon_gossifleur_normaldata {
  pokemonSettings: V0829_pokemon_gossifleur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0829_pokemon_gossifleur_normalEntry {
  templateId: "V0829_POKEMON_GOSSIFLEUR_NORMAL";
  data: V0829_pokemon_gossifleur_normaldata;
}
export interface V0830_pokemon_eldegossdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0830_pokemon_eldegossdata {
  pokemonSettings: V0830_pokemon_eldegossdatapokemonsettings;
  templateId: string;
}
export interface V0830_pokemon_eldegossEntry {
  templateId: "V0830_POKEMON_ELDEGOSS";
  data: V0830_pokemon_eldegossdata;
}
export interface V0830_pokemon_eldegoss_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0830_pokemon_eldegoss_normaldata {
  pokemonSettings: V0830_pokemon_eldegoss_normaldatapokemonsettings;
  templateId: string;
}
export interface V0830_pokemon_eldegoss_normalEntry {
  templateId: "V0830_POKEMON_ELDEGOSS_NORMAL";
  data: V0830_pokemon_eldegoss_normaldata;
}
export interface V0832_pokemon_dubwooldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0832_pokemon_dubwooldata {
  pokemonSettings: V0832_pokemon_dubwooldatapokemonsettings;
  templateId: string;
}
export interface V0832_pokemon_dubwoolEntry {
  templateId: "V0832_POKEMON_DUBWOOL";
  data: V0832_pokemon_dubwooldata;
}
export interface V0832_pokemon_dubwool_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0832_pokemon_dubwool_normaldata {
  pokemonSettings: V0832_pokemon_dubwool_normaldatapokemonsettings;
  templateId: string;
}
export interface V0832_pokemon_dubwool_normalEntry {
  templateId: "V0832_POKEMON_DUBWOOL_NORMAL";
  data: V0832_pokemon_dubwool_normaldata;
}
export interface V0834_pokemon_drednawdatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0834_pokemon_drednawdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0834_pokemon_drednawdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0834_pokemon_drednawdata {
  pokemonSettings: V0834_pokemon_drednawdatapokemonsettings;
  templateId: string;
}
export interface V0834_pokemon_drednawEntry {
  templateId: "V0834_POKEMON_DREDNAW";
  data: V0834_pokemon_drednawdata;
}
export interface V0834_pokemon_drednaw_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0834_pokemon_drednawdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0834_pokemon_drednaw_normaldata {
  pokemonSettings: V0834_pokemon_drednaw_normaldatapokemonsettings;
  templateId: string;
}
export interface V0834_pokemon_drednaw_normalEntry {
  templateId: "V0834_POKEMON_DREDNAW_NORMAL";
  data: V0834_pokemon_drednaw_normaldata;
}
export interface V0835_pokemon_yamperdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0835_pokemon_yamperdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0835_pokemon_yamperdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0835_pokemon_yamperdata {
  pokemonSettings: V0835_pokemon_yamperdatapokemonsettings;
  templateId: string;
}
export interface V0835_pokemon_yamperEntry {
  templateId: "V0835_POKEMON_YAMPER";
  data: V0835_pokemon_yamperdata;
}
export interface V0835_pokemon_yamper_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0835_pokemon_yamperdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0835_pokemon_yamper_normaldata {
  pokemonSettings: V0835_pokemon_yamper_normaldatapokemonsettings;
  templateId: string;
}
export interface V0835_pokemon_yamper_normalEntry {
  templateId: "V0835_POKEMON_YAMPER_NORMAL";
  data: V0835_pokemon_yamper_normaldata;
}
export interface V0836_pokemon_boltunddatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0836_pokemon_boltunddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0836_pokemon_boltunddatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0836_pokemon_boltunddata {
  pokemonSettings: V0836_pokemon_boltunddatapokemonsettings;
  templateId: string;
}
export interface V0836_pokemon_boltundEntry {
  templateId: "V0836_POKEMON_BOLTUND";
  data: V0836_pokemon_boltunddata;
}
export interface V0836_pokemon_boltund_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0836_pokemon_boltunddatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0836_pokemon_boltund_normaldata {
  pokemonSettings: V0836_pokemon_boltund_normaldatapokemonsettings;
  templateId: string;
}
export interface V0836_pokemon_boltund_normalEntry {
  templateId: "V0836_POKEMON_BOLTUND_NORMAL";
  data: V0836_pokemon_boltund_normaldata;
}
export interface V0837_pokemon_rolycolydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0837_pokemon_rolycolydata {
  pokemonSettings: V0837_pokemon_rolycolydatapokemonsettings;
  templateId: string;
}
export interface V0837_pokemon_rolycolyEntry {
  templateId: "V0837_POKEMON_ROLYCOLY";
  data: V0837_pokemon_rolycolydata;
}
export interface V0837_pokemon_rolycoly_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0837_pokemon_rolycoly_normaldata {
  pokemonSettings: V0837_pokemon_rolycoly_normaldatapokemonsettings;
  templateId: string;
}
export interface V0837_pokemon_rolycoly_normalEntry {
  templateId: "V0837_POKEMON_ROLYCOLY_NORMAL";
  data: V0837_pokemon_rolycoly_normaldata;
}
export interface V0838_pokemon_carkoldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0838_pokemon_carkoldata {
  pokemonSettings: V0838_pokemon_carkoldatapokemonsettings;
  templateId: string;
}
export interface V0838_pokemon_carkolEntry {
  templateId: "V0838_POKEMON_CARKOL";
  data: V0838_pokemon_carkoldata;
}
export interface V0838_pokemon_carkol_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0838_pokemon_carkol_normaldata {
  pokemonSettings: V0838_pokemon_carkol_normaldatapokemonsettings;
  templateId: string;
}
export interface V0838_pokemon_carkol_normalEntry {
  templateId: "V0838_POKEMON_CARKOL_NORMAL";
  data: V0838_pokemon_carkol_normaldata;
}
export interface V0839_pokemon_coalossaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0839_pokemon_coalossaldata {
  pokemonSettings: V0839_pokemon_coalossaldatapokemonsettings;
  templateId: string;
}
export interface V0839_pokemon_coalossalEntry {
  templateId: "V0839_POKEMON_COALOSSAL";
  data: V0839_pokemon_coalossaldata;
}
export interface V0839_pokemon_coalossal_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0839_pokemon_coalossal_normaldata {
  pokemonSettings: V0839_pokemon_coalossal_normaldatapokemonsettings;
  templateId: string;
}
export interface V0839_pokemon_coalossal_normalEntry {
  templateId: "V0839_POKEMON_COALOSSAL_NORMAL";
  data: V0839_pokemon_coalossal_normaldata;
}
export interface V0840_pokemon_applindatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  evolutionItemRequirementCost: number;
  form: string;
}
export interface V0840_pokemon_applindatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0840_pokemon_applindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0840_pokemon_applindata {
  pokemonSettings: V0840_pokemon_applindatapokemonsettings;
  templateId: string;
}
export interface V0840_pokemon_applinEntry {
  templateId: "V0840_POKEMON_APPLIN";
  data: V0840_pokemon_applindata;
}
export interface V0840_pokemon_applin_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  evolutionBranch: (V0840_pokemon_applindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0840_pokemon_applin_normaldata {
  pokemonSettings: V0840_pokemon_applin_normaldatapokemonsettings;
  templateId: string;
}
export interface V0840_pokemon_applin_normalEntry {
  templateId: "V0840_POKEMON_APPLIN_NORMAL";
  data: V0840_pokemon_applin_normaldata;
}
export interface V0841_pokemon_flappledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0841_pokemon_flappledata {
  pokemonSettings: V0841_pokemon_flappledatapokemonsettings;
  templateId: string;
}
export interface V0841_pokemon_flappleEntry {
  templateId: "V0841_POKEMON_FLAPPLE";
  data: V0841_pokemon_flappledata;
}
export interface V0841_pokemon_flapple_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0815_pokemon_cinderacedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0841_pokemon_flapple_normaldata {
  pokemonSettings: V0841_pokemon_flapple_normaldatapokemonsettings;
  templateId: string;
}
export interface V0841_pokemon_flapple_normalEntry {
  templateId: "V0841_POKEMON_FLAPPLE_NORMAL";
  data: V0841_pokemon_flapple_normaldata;
}
export interface V0843_pokemon_silicobradatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0843_pokemon_silicobradatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0843_pokemon_silicobradatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0843_pokemon_silicobradata {
  pokemonSettings: V0843_pokemon_silicobradatapokemonsettings;
  templateId: string;
}
export interface V0843_pokemon_silicobraEntry {
  templateId: "V0843_POKEMON_SILICOBRA";
  data: V0843_pokemon_silicobradata;
}
export interface V0843_pokemon_silicobra_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0843_pokemon_silicobradatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0843_pokemon_silicobra_normaldata {
  pokemonSettings: V0843_pokemon_silicobra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0843_pokemon_silicobra_normalEntry {
  templateId: "V0843_POKEMON_SILICOBRA_NORMAL";
  data: V0843_pokemon_silicobra_normaldata;
}
export interface V0844_pokemon_sandacondadatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0844_pokemon_sandacondadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0844_pokemon_sandacondadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0844_pokemon_sandacondadata {
  pokemonSettings: V0844_pokemon_sandacondadatapokemonsettings;
  templateId: string;
}
export interface V0844_pokemon_sandacondaEntry {
  templateId: "V0844_POKEMON_SANDACONDA";
  data: V0844_pokemon_sandacondadata;
}
export interface V0844_pokemon_sandaconda_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0844_pokemon_sandacondadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0844_pokemon_sandaconda_normaldata {
  pokemonSettings: V0844_pokemon_sandaconda_normaldatapokemonsettings;
  templateId: string;
}
export interface V0844_pokemon_sandaconda_normalEntry {
  templateId: "V0844_POKEMON_SANDACONDA_NORMAL";
  data: V0844_pokemon_sandaconda_normaldata;
}
export interface V0846_pokemon_arrokudadatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0846_pokemon_arrokudadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0846_pokemon_arrokudadatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0846_pokemon_arrokudadata {
  pokemonSettings: V0846_pokemon_arrokudadatapokemonsettings;
  templateId: string;
}
export interface V0846_pokemon_arrokudaEntry {
  templateId: "V0846_POKEMON_ARROKUDA";
  data: V0846_pokemon_arrokudadata;
}
export interface V0846_pokemon_arrokuda_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0846_pokemon_arrokudadatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0846_pokemon_arrokuda_normaldata {
  pokemonSettings: V0846_pokemon_arrokuda_normaldatapokemonsettings;
  templateId: string;
}
export interface V0846_pokemon_arrokuda_normalEntry {
  templateId: "V0846_POKEMON_ARROKUDA_NORMAL";
  data: V0846_pokemon_arrokuda_normaldata;
}
export interface V0847_pokemon_barraskewdadatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0847_pokemon_barraskewdadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0847_pokemon_barraskewdadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0847_pokemon_barraskewdadata {
  pokemonSettings: V0847_pokemon_barraskewdadatapokemonsettings;
  templateId: string;
}
export interface V0847_pokemon_barraskewdaEntry {
  templateId: "V0847_POKEMON_BARRASKEWDA";
  data: V0847_pokemon_barraskewdadata;
}
export interface V0847_pokemon_barraskewda_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0847_pokemon_barraskewdadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0847_pokemon_barraskewda_normaldata {
  pokemonSettings: V0847_pokemon_barraskewda_normaldatapokemonsettings;
  templateId: string;
}
export interface V0847_pokemon_barraskewda_normalEntry {
  templateId: "V0847_POKEMON_BARRASKEWDA_NORMAL";
  data: V0847_pokemon_barraskewda_normaldata;
}
export interface V0848_pokemon_toxeldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  irisPhotoHueOrder: number;
  irisPhotoShinyHueOrder: number;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0848_pokemon_toxeldata {
  pokemonSettings: V0848_pokemon_toxeldatapokemonsettings;
  templateId: string;
}
export interface V0848_pokemon_toxelEntry {
  templateId: "V0848_POKEMON_TOXEL";
  data: V0848_pokemon_toxeldata;
}
export interface V0848_pokemon_toxel_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  irisPhotoHueOrder: number;
  irisPhotoShinyHueOrder: number;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0848_pokemon_toxel_normaldata {
  pokemonSettings: V0848_pokemon_toxel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0848_pokemon_toxel_normalEntry {
  templateId: "V0848_POKEMON_TOXEL_NORMAL";
  data: V0848_pokemon_toxel_normaldata;
}
export interface V0849_pokemon_toxtricitydatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0849_pokemon_toxtricitydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  irisPhotoHueOrder: number;
  irisPhotoShinyHueOrder: number;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0849_pokemon_toxtricitydata {
  pokemonSettings: V0849_pokemon_toxtricitydatapokemonsettings;
  templateId: string;
}
export interface V0849_pokemon_toxtricityEntry {
  templateId: "V0849_POKEMON_TOXTRICITY";
  data: V0849_pokemon_toxtricitydata;
}
export interface V0850_pokemon_sizzlipededatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0850_pokemon_sizzlipededata {
  pokemonSettings: V0850_pokemon_sizzlipededatapokemonsettings;
  templateId: string;
}
export interface V0850_pokemon_sizzlipedeEntry {
  templateId: "V0850_POKEMON_SIZZLIPEDE";
  data: V0850_pokemon_sizzlipededata;
}
export interface V0850_pokemon_sizzlipede_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0850_pokemon_sizzlipede_normaldata {
  pokemonSettings: V0850_pokemon_sizzlipede_normaldatapokemonsettings;
  templateId: string;
}
export interface V0850_pokemon_sizzlipede_normalEntry {
  templateId: "V0850_POKEMON_SIZZLIPEDE_NORMAL";
  data: V0850_pokemon_sizzlipede_normaldata;
}
export interface V0851_pokemon_centiskorchdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0851_pokemon_centiskorchdata {
  pokemonSettings: V0851_pokemon_centiskorchdatapokemonsettings;
  templateId: string;
}
export interface V0851_pokemon_centiskorchEntry {
  templateId: "V0851_POKEMON_CENTISKORCH";
  data: V0851_pokemon_centiskorchdata;
}
export interface V0851_pokemon_centiskorch_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0851_pokemon_centiskorch_normaldata {
  pokemonSettings: V0851_pokemon_centiskorch_normaldatapokemonsettings;
  templateId: string;
}
export interface V0851_pokemon_centiskorch_normalEntry {
  templateId: "V0851_POKEMON_CENTISKORCH_NORMAL";
  data: V0851_pokemon_centiskorch_normaldata;
}
export interface V0852_pokemon_clobbopusdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0852_pokemon_clobbopusdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0852_pokemon_clobbopusdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0852_pokemon_clobbopusdata {
  pokemonSettings: V0852_pokemon_clobbopusdatapokemonsettings;
  templateId: string;
}
export interface V0852_pokemon_clobbopusEntry {
  templateId: "V0852_POKEMON_CLOBBOPUS";
  data: V0852_pokemon_clobbopusdata;
}
export interface V0852_pokemon_clobbopus_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0852_pokemon_clobbopusdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0852_pokemon_clobbopus_normaldata {
  pokemonSettings: V0852_pokemon_clobbopus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0852_pokemon_clobbopus_normalEntry {
  templateId: "V0852_POKEMON_CLOBBOPUS_NORMAL";
  data: V0852_pokemon_clobbopus_normaldata;
}
export interface V0853_pokemon_grapploctdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0834_pokemon_drednawdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0853_pokemon_grapploctdata {
  pokemonSettings: V0853_pokemon_grapploctdatapokemonsettings;
  templateId: string;
}
export interface V0853_pokemon_grapploctEntry {
  templateId: "V0853_POKEMON_GRAPPLOCT";
  data: V0853_pokemon_grapploctdata;
}
export interface V0853_pokemon_grapploct_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0834_pokemon_drednawdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0853_pokemon_grapploct_normaldata {
  pokemonSettings: V0853_pokemon_grapploct_normaldatapokemonsettings;
  templateId: string;
}
export interface V0853_pokemon_grapploct_normalEntry {
  templateId: "V0853_POKEMON_GRAPPLOCT_NORMAL";
  data: V0853_pokemon_grapploct_normaldata;
}
export interface V0854_pokemon_sinisteadatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0854_pokemon_sinisteadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0854_pokemon_sinisteadatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0854_pokemon_sinisteadata {
  pokemonSettings: V0854_pokemon_sinisteadatapokemonsettings;
  templateId: string;
}
export interface V0854_pokemon_sinisteaEntry {
  templateId: "V0854_POKEMON_SINISTEA";
  data: V0854_pokemon_sinisteadata;
}
export interface V0855_pokemon_polteageistdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0855_pokemon_polteageistdata {
  pokemonSettings: V0855_pokemon_polteageistdatapokemonsettings;
  templateId: string;
}
export interface V0855_pokemon_polteageistEntry {
  templateId: "V0855_POKEMON_POLTEAGEIST";
  data: V0855_pokemon_polteageistdata;
}
export interface V0857_pokemon_hattremdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0857_pokemon_hattremdata {
  pokemonSettings: V0857_pokemon_hattremdatapokemonsettings;
  templateId: string;
}
export interface V0857_pokemon_hattremEntry {
  templateId: "V0857_POKEMON_HATTREM";
  data: V0857_pokemon_hattremdata;
}
export interface V0857_pokemon_hattrem_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0857_pokemon_hattrem_normaldata {
  pokemonSettings: V0857_pokemon_hattrem_normaldatapokemonsettings;
  templateId: string;
}
export interface V0857_pokemon_hattrem_normalEntry {
  templateId: "V0857_POKEMON_HATTREM_NORMAL";
  data: V0857_pokemon_hattrem_normaldata;
}
export interface V0858_pokemon_hatterenedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0858_pokemon_hatterenedata {
  pokemonSettings: V0858_pokemon_hatterenedatapokemonsettings;
  templateId: string;
}
export interface V0858_pokemon_hattereneEntry {
  templateId: "V0858_POKEMON_HATTERENE";
  data: V0858_pokemon_hatterenedata;
}
export interface V0858_pokemon_hatterene_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0849_pokemon_toxtricitydatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0858_pokemon_hatterene_normaldata {
  pokemonSettings: V0858_pokemon_hatterene_normaldatapokemonsettings;
  templateId: string;
}
export interface V0858_pokemon_hatterene_normalEntry {
  templateId: "V0858_POKEMON_HATTERENE_NORMAL";
  data: V0858_pokemon_hatterene_normaldata;
}
export interface V0859_pokemon_impidimpdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0859_pokemon_impidimpdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0859_pokemon_impidimpdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0859_pokemon_impidimpdata {
  pokemonSettings: V0859_pokemon_impidimpdatapokemonsettings;
  templateId: string;
}
export interface V0859_pokemon_impidimpEntry {
  templateId: "V0859_POKEMON_IMPIDIMP";
  data: V0859_pokemon_impidimpdata;
}
export interface V0859_pokemon_impidimp_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0859_pokemon_impidimpdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0859_pokemon_impidimp_normaldata {
  pokemonSettings: V0859_pokemon_impidimp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0859_pokemon_impidimp_normalEntry {
  templateId: "V0859_POKEMON_IMPIDIMP_NORMAL";
  data: V0859_pokemon_impidimp_normaldata;
}
export interface V0860_pokemon_morgremdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0860_pokemon_morgremdata {
  pokemonSettings: V0860_pokemon_morgremdatapokemonsettings;
  templateId: string;
}
export interface V0860_pokemon_morgremEntry {
  templateId: "V0860_POKEMON_MORGREM";
  data: V0860_pokemon_morgremdata;
}
export interface V0860_pokemon_morgrem_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0812_pokemon_rillaboomdatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0860_pokemon_morgrem_normaldata {
  pokemonSettings: V0860_pokemon_morgrem_normaldatapokemonsettings;
  templateId: string;
}
export interface V0860_pokemon_morgrem_normalEntry {
  templateId: "V0860_POKEMON_MORGREM_NORMAL";
  data: V0860_pokemon_morgrem_normaldata;
}
export interface V0862_pokemon_obstagoondatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0862_pokemon_obstagoondatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0862_pokemon_obstagoondatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0862_pokemon_obstagoondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0862_pokemon_obstagoondata {
  pokemonSettings: V0862_pokemon_obstagoondatapokemonsettings;
  templateId: string;
}
export interface V0862_pokemon_obstagoonEntry {
  templateId: "V0862_POKEMON_OBSTAGOON";
  data: V0862_pokemon_obstagoondata;
}
export interface V0862_pokemon_obstagoon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0862_pokemon_obstagoon_normaldata {
  pokemonSettings: V0862_pokemon_obstagoon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0862_pokemon_obstagoon_normalEntry {
  templateId: "V0862_POKEMON_OBSTAGOON_NORMAL";
  data: V0862_pokemon_obstagoon_normaldata;
}
export interface V0864_pokemon_cursoladatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0864_pokemon_cursoladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0864_pokemon_cursoladata {
  pokemonSettings: V0864_pokemon_cursoladatapokemonsettings;
  templateId: string;
}
export interface V0864_pokemon_cursolaEntry {
  templateId: "V0864_POKEMON_CURSOLA";
  data: V0864_pokemon_cursoladata;
}
export interface V0864_pokemon_cursola_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0864_pokemon_cursola_normaldata {
  pokemonSettings: V0864_pokemon_cursola_normaldatapokemonsettings;
  templateId: string;
}
export interface V0864_pokemon_cursola_normalEntry {
  templateId: "V0864_POKEMON_CURSOLA_NORMAL";
  data: V0864_pokemon_cursola_normaldata;
}
export interface V0866_pokemon_mr_rimedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0866_pokemon_mr_rimedata {
  pokemonSettings: V0866_pokemon_mr_rimedatapokemonsettings;
  templateId: string;
}
export interface V0866_pokemon_mr_rimeEntry {
  templateId: "V0866_POKEMON_MR_RIME";
  data: V0866_pokemon_mr_rimedata;
}
export interface V0867_pokemon_runerigusdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0867_pokemon_runerigusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0867_pokemon_runerigusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0867_pokemon_runerigusdata {
  pokemonSettings: V0867_pokemon_runerigusdatapokemonsettings;
  templateId: string;
}
export interface V0867_pokemon_runerigusEntry {
  templateId: "V0867_POKEMON_RUNERIGUS";
  data: V0867_pokemon_runerigusdata;
}
export interface V0867_pokemon_runerigus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0867_pokemon_runerigusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0867_pokemon_runerigus_normaldata {
  pokemonSettings: V0867_pokemon_runerigus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0867_pokemon_runerigus_normalEntry {
  templateId: "V0867_POKEMON_RUNERIGUS_NORMAL";
  data: V0867_pokemon_runerigus_normaldata;
}
export interface V0870_pokemon_falinks_gofest_2025_train_conductordatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0859_pokemon_impidimpdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0870_pokemon_falinks_gofest_2025_train_conductordata {
  pokemonSettings: V0870_pokemon_falinks_gofest_2025_train_conductordatapokemonsettings;
  templateId: string;
}
export interface V0870_pokemon_falinks_gofest_2025_train_conductorEntry {
  templateId: "V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR";
  data: V0870_pokemon_falinks_gofest_2025_train_conductordata;
}
export interface V0872_pokemon_snomdatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0872_pokemon_snomdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  onlyNighttime: boolean;
  questDisplay: (V0872_pokemon_snomdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0872_pokemon_snomdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0872_pokemon_snomdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0872_pokemon_snomdata {
  pokemonSettings: V0872_pokemon_snomdatapokemonsettings;
  templateId: string;
}
export interface V0872_pokemon_snomEntry {
  templateId: "V0872_POKEMON_SNOM";
  data: V0872_pokemon_snomdata;
}
export interface V0872_pokemon_snom_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  onlyNighttime: boolean;
  questDisplay: (V0872_pokemon_snomdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0872_pokemon_snom_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0824_pokemon_blipbugdatapokemonsettingsencounter;
  evolutionBranch: (V0872_pokemon_snom_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0872_pokemon_snom_normaldata {
  pokemonSettings: V0872_pokemon_snom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0872_pokemon_snom_normalEntry {
  templateId: "V0872_POKEMON_SNOM_NORMAL";
  data: V0872_pokemon_snom_normaldata;
}
export interface V0873_pokemon_frosmothdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0873_pokemon_frosmothdata {
  pokemonSettings: V0873_pokemon_frosmothdatapokemonsettings;
  templateId: string;
}
export interface V0873_pokemon_frosmothEntry {
  templateId: "V0873_POKEMON_FROSMOTH";
  data: V0873_pokemon_frosmothdata;
}
export interface V0873_pokemon_frosmoth_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0873_pokemon_frosmoth_normaldata {
  pokemonSettings: V0873_pokemon_frosmoth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0873_pokemon_frosmoth_normalEntry {
  templateId: "V0873_POKEMON_FROSMOTH_NORMAL";
  data: V0873_pokemon_frosmoth_normaldata;
}
export interface V0874_pokemon_stonjournerdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0874_pokemon_stonjournerdata {
  pokemonSettings: V0874_pokemon_stonjournerdatapokemonsettings;
  templateId: string;
}
export interface V0874_pokemon_stonjournerEntry {
  templateId: "V0874_POKEMON_STONJOURNER";
  data: V0874_pokemon_stonjournerdata;
}
export interface V0874_pokemon_stonjourner_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0874_pokemon_stonjourner_normaldata {
  pokemonSettings: V0874_pokemon_stonjourner_normaldatapokemonsettings;
  templateId: string;
}
export interface V0874_pokemon_stonjourner_normalEntry {
  templateId: "V0874_POKEMON_STONJOURNER_NORMAL";
  data: V0874_pokemon_stonjourner_normaldata;
}
export interface V0877_pokemon_morpekodatapokemonsettingsibfcalternatetodefaultibfcsettings {
  animationDurationTurns: number;
  animationPlayPoint: string;
  currentMove: string;
  ibfcVfxKey: string;
  replacementMove: string;
}
export interface V0877_pokemon_morpekodatapokemonsettingsibfc {
  alternateForm: string;
  alternateToDefaultIbfcSettings: V0877_pokemon_morpekodatapokemonsettingsibfcalternatetodefaultibfcsettings;
  combatEnable: boolean;
  defaultForm: string;
  defaultToAlternateIbfcSettings: V0877_pokemon_morpekodatapokemonsettingsibfcalternatetodefaultibfcsettings;
}
export interface V0877_pokemon_morpekodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0859_pokemon_impidimpdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0877_pokemon_morpekodatapokemonsettingsibfc;
  irisPhotoHueOrder: number;
  irisPhotoShinyHueOrder: number;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0877_pokemon_morpekodata {
  pokemonSettings: V0877_pokemon_morpekodatapokemonsettings;
  templateId: string;
}
export interface V0877_pokemon_morpekoEntry {
  templateId: "V0877_POKEMON_MORPEKO";
  data: V0877_pokemon_morpekodata;
}
export interface V0884_pokemon_duraludondatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0884_pokemon_duraludondata {
  pokemonSettings: V0884_pokemon_duraludondatapokemonsettings;
  templateId: string;
}
export interface V0884_pokemon_duraludonEntry {
  templateId: "V0884_POKEMON_DURALUDON";
  data: V0884_pokemon_duraludondata;
}
export interface V0884_pokemon_duraludon_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0829_pokemon_gossifleurdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0884_pokemon_duraludon_normaldata {
  pokemonSettings: V0884_pokemon_duraludon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0884_pokemon_duraludon_normalEntry {
  templateId: "V0884_POKEMON_DURALUDON_NORMAL";
  data: V0884_pokemon_duraludon_normaldata;
}
export interface V0885_pokemon_dreepydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0854_pokemon_sinisteadatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0885_pokemon_dreepydata {
  pokemonSettings: V0885_pokemon_dreepydatapokemonsettings;
  templateId: string;
}
export interface V0885_pokemon_dreepyEntry {
  templateId: "V0885_POKEMON_DREEPY";
  data: V0885_pokemon_dreepydata;
}
export interface V0885_pokemon_dreepy_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0854_pokemon_sinisteadatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0885_pokemon_dreepy_normaldata {
  pokemonSettings: V0885_pokemon_dreepy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0885_pokemon_dreepy_normalEntry {
  templateId: "V0885_POKEMON_DREEPY_NORMAL";
  data: V0885_pokemon_dreepy_normaldata;
}
export interface V0886_pokemon_drakloakdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquiredatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0886_pokemon_drakloakdata {
  pokemonSettings: V0886_pokemon_drakloakdatapokemonsettings;
  templateId: string;
}
export interface V0886_pokemon_drakloakEntry {
  templateId: "V0886_POKEMON_DRAKLOAK";
  data: V0886_pokemon_drakloakdata;
}
export interface V0886_pokemon_drakloak_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  evolutionBranch: (V0822_pokemon_corvisquire_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0886_pokemon_drakloak_normaldata {
  pokemonSettings: V0886_pokemon_drakloak_normaldatapokemonsettings;
  templateId: string;
}
export interface V0886_pokemon_drakloak_normalEntry {
  templateId: "V0886_POKEMON_DRAKLOAK_NORMAL";
  data: V0886_pokemon_drakloak_normaldata;
}
export interface V0887_pokemon_dragapultdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0887_pokemon_dragapultdata {
  pokemonSettings: V0887_pokemon_dragapultdatapokemonsettings;
  templateId: string;
}
export interface V0887_pokemon_dragapultEntry {
  templateId: "V0887_POKEMON_DRAGAPULT";
  data: V0887_pokemon_dragapultdata;
}
export interface V0887_pokemon_dragapult_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0826_pokemon_orbeetledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0887_pokemon_dragapult_normaldata {
  pokemonSettings: V0887_pokemon_dragapult_normaldatapokemonsettings;
  templateId: string;
}
export interface V0887_pokemon_dragapult_normalEntry {
  templateId: "V0887_POKEMON_DRAGAPULT_NORMAL";
  data: V0887_pokemon_dragapult_normaldata;
}
export interface V0890_pokemon_eternatusdatapokemonsettingsencounter {
  attackProbability: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0890_pokemon_eternatusdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0890_pokemon_eternatusdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0890_pokemon_eternatusdata {
  pokemonSettings: V0890_pokemon_eternatusdatapokemonsettings;
  templateId: string;
}
export interface V0890_pokemon_eternatusEntry {
  templateId: "V0890_POKEMON_ETERNATUS";
  data: V0890_pokemon_eternatusdata;
}
export interface V0890_pokemon_eternatus_eternamaxdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0890_pokemon_eternatusdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0890_pokemon_eternatus_eternamaxdata {
  pokemonSettings: V0890_pokemon_eternatus_eternamaxdatapokemonsettings;
  templateId: string;
}
export interface V0890_pokemon_eternatus_eternamaxEntry {
  templateId: "V0890_POKEMON_ETERNATUS_ETERNAMAX";
  data: V0890_pokemon_eternatus_eternamaxdata;
}
export interface V0890_pokemon_eternatus_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0890_pokemon_eternatusdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0890_pokemon_eternatus_normaldata {
  pokemonSettings: V0890_pokemon_eternatus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0890_pokemon_eternatus_normalEntry {
  templateId: "V0890_POKEMON_ETERNATUS_NORMAL";
  data: V0890_pokemon_eternatus_normaldata;
}
export interface V0891_pokemon_kubfudatapokemonsettingsencounter {
  attackProbability: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0891_pokemon_kubfudatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  priority: number;
  questDisplay: (V0872_pokemon_snomdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0891_pokemon_kubfudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  evolutionBranch: (V0891_pokemon_kubfudatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0891_pokemon_kubfudata {
  pokemonSettings: V0891_pokemon_kubfudatapokemonsettings;
  templateId: string;
}
export interface V0891_pokemon_kubfuEntry {
  templateId: "V0891_POKEMON_KUBFU";
  data: V0891_pokemon_kubfudata;
}
export interface V0891_pokemon_kubfu_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  evolutionBranch: (V0891_pokemon_kubfudatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0891_pokemon_kubfu_normaldata {
  pokemonSettings: V0891_pokemon_kubfu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0891_pokemon_kubfu_normalEntry {
  templateId: "V0891_POKEMON_KUBFU_NORMAL";
  data: V0891_pokemon_kubfu_normaldata;
}
export interface V0892_pokemon_urshifudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0847_pokemon_barraskewdadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0892_pokemon_urshifudata {
  pokemonSettings: V0892_pokemon_urshifudatapokemonsettings;
  templateId: string;
}
export interface V0892_pokemon_urshifuEntry {
  templateId: "V0892_POKEMON_URSHIFU";
  data: V0892_pokemon_urshifudata;
}
export interface V0893_pokemon_zarudedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0893_pokemon_zarudedata {
  pokemonSettings: V0893_pokemon_zarudedatapokemonsettings;
  templateId: string;
}
export interface V0893_pokemon_zarudeEntry {
  templateId: "V0893_POKEMON_ZARUDE";
  data: V0893_pokemon_zarudedata;
}
export interface V0893_pokemon_zarude_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0893_pokemon_zarude_normaldata {
  pokemonSettings: V0893_pokemon_zarude_normaldatapokemonsettings;
  templateId: string;
}
export interface V0893_pokemon_zarude_normalEntry {
  templateId: "V0893_POKEMON_ZARUDE_NORMAL";
  data: V0893_pokemon_zarude_normaldata;
}
export interface V0894_pokemon_regielekidatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0894_pokemon_regielekidata {
  pokemonSettings: V0894_pokemon_regielekidatapokemonsettings;
  templateId: string;
}
export interface V0894_pokemon_regielekiEntry {
  templateId: "V0894_POKEMON_REGIELEKI";
  data: V0894_pokemon_regielekidata;
}
export interface V0894_pokemon_regieleki_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0894_pokemon_regieleki_normaldata {
  pokemonSettings: V0894_pokemon_regieleki_normaldatapokemonsettings;
  templateId: string;
}
export interface V0894_pokemon_regieleki_normalEntry {
  templateId: "V0894_POKEMON_REGIELEKI_NORMAL";
  data: V0894_pokemon_regieleki_normaldata;
}
export interface V0895_pokemon_regidragodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0895_pokemon_regidragodata {
  pokemonSettings: V0895_pokemon_regidragodatapokemonsettings;
  templateId: string;
}
export interface V0895_pokemon_regidragoEntry {
  templateId: "V0895_POKEMON_REGIDRAGO";
  data: V0895_pokemon_regidragodata;
}
export interface V0895_pokemon_regidrago_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0822_pokemon_corvisquiredatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0891_pokemon_kubfudatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0895_pokemon_regidrago_normaldata {
  pokemonSettings: V0895_pokemon_regidrago_normaldatapokemonsettings;
  templateId: string;
}
export interface V0895_pokemon_regidrago_normalEntry {
  templateId: "V0895_POKEMON_REGIDRAGO_NORMAL";
  data: V0895_pokemon_regidrago_normaldata;
}
export interface V0898_pokemon_calyrexdatapokemonsettingsencounter {
  attackProbability: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0898_pokemon_calyrexdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0898_pokemon_calyrexdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0898_pokemon_calyrexdata {
  pokemonSettings: V0898_pokemon_calyrexdatapokemonsettings;
  templateId: string;
}
export interface V0898_pokemon_calyrexEntry {
  templateId: "V0898_POKEMON_CALYREX";
  data: V0898_pokemon_calyrexdata;
}
export interface V0899_pokemon_wyrdeerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0899_pokemon_wyrdeerdata {
  pokemonSettings: V0899_pokemon_wyrdeerdatapokemonsettings;
  templateId: string;
}
export interface V0899_pokemon_wyrdeerEntry {
  templateId: "V0899_POKEMON_WYRDEER";
  data: V0899_pokemon_wyrdeerdata;
}
export interface V0899_pokemon_wyrdeer_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0899_pokemon_wyrdeer_normaldata {
  pokemonSettings: V0899_pokemon_wyrdeer_normaldatapokemonsettings;
  templateId: string;
}
export interface V0899_pokemon_wyrdeer_normalEntry {
  templateId: "V0899_POKEMON_WYRDEER_NORMAL";
  data: V0899_pokemon_wyrdeer_normaldata;
}
export interface V0900_pokemon_kleavordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0900_pokemon_kleavordata {
  pokemonSettings: V0900_pokemon_kleavordatapokemonsettings;
  templateId: string;
}
export interface V0900_pokemon_kleavorEntry {
  templateId: "V0900_POKEMON_KLEAVOR";
  data: V0900_pokemon_kleavordata;
}
export interface V0900_pokemon_kleavor_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0864_pokemon_cursoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0900_pokemon_kleavor_normaldata {
  pokemonSettings: V0900_pokemon_kleavor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0900_pokemon_kleavor_normalEntry {
  templateId: "V0900_POKEMON_KLEAVOR_NORMAL";
  data: V0900_pokemon_kleavor_normaldata;
}
export interface V0901_pokemon_ursalunadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0901_pokemon_ursalunadata {
  pokemonSettings: V0901_pokemon_ursalunadatapokemonsettings;
  templateId: string;
}
export interface V0901_pokemon_ursalunaEntry {
  templateId: "V0901_POKEMON_URSALUNA";
  data: V0901_pokemon_ursalunadata;
}
export interface V0901_pokemon_ursaluna_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0901_pokemon_ursaluna_normaldata {
  pokemonSettings: V0901_pokemon_ursaluna_normaldatapokemonsettings;
  templateId: string;
}
export interface V0901_pokemon_ursaluna_normalEntry {
  templateId: "V0901_POKEMON_URSALUNA_NORMAL";
  data: V0901_pokemon_ursaluna_normaldata;
}
export interface V0903_pokemon_sneaslerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0903_pokemon_sneaslerdata {
  pokemonSettings: V0903_pokemon_sneaslerdatapokemonsettings;
  templateId: string;
}
export interface V0903_pokemon_sneaslerEntry {
  templateId: "V0903_POKEMON_SNEASLER";
  data: V0903_pokemon_sneaslerdata;
}
export interface V0903_pokemon_sneasler_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0862_pokemon_obstagoondatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0903_pokemon_sneasler_normaldata {
  pokemonSettings: V0903_pokemon_sneasler_normaldatapokemonsettings;
  templateId: string;
}
export interface V0903_pokemon_sneasler_normalEntry {
  templateId: "V0903_POKEMON_SNEASLER_NORMAL";
  data: V0903_pokemon_sneasler_normaldata;
}
export interface V0904_pokemon_overqwildatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0904_pokemon_overqwildatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0904_pokemon_overqwildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0904_pokemon_overqwildata {
  pokemonSettings: V0904_pokemon_overqwildatapokemonsettings;
  templateId: string;
}
export interface V0904_pokemon_overqwilEntry {
  templateId: "V0904_POKEMON_OVERQWIL";
  data: V0904_pokemon_overqwildata;
}
export interface V0904_pokemon_overqwil_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0904_pokemon_overqwildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0862_pokemon_obstagoondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  shadow: V0862_pokemon_obstagoondatapokemonsettingsshadow;
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0904_pokemon_overqwil_normaldata {
  pokemonSettings: V0904_pokemon_overqwil_normaldatapokemonsettings;
  templateId: string;
}
export interface V0904_pokemon_overqwil_normalEntry {
  templateId: "V0904_POKEMON_OVERQWIL_NORMAL";
  data: V0904_pokemon_overqwil_normaldata;
}
export interface V0905_pokemon_enamorusdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0905_pokemon_enamorusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0904_pokemon_overqwildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0905_pokemon_enamorusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0812_pokemon_rillaboomdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0812_pokemon_rillaboomdatapokemonsettingsstats;
  thirdMove: V0812_pokemon_rillaboomdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0905_pokemon_enamorusdata {
  pokemonSettings: V0905_pokemon_enamorusdatapokemonsettings;
  templateId: string;
}
export interface V0905_pokemon_enamorusEntry {
  templateId: "V0905_POKEMON_ENAMORUS";
  data: V0905_pokemon_enamorusdata;
}

export type PokemonSettingsGrookey = PokemonSettingsShared1246<"V0810_POKEMON_GROOKEY", "GROOKEY">;
export type PokemonSettingsSobble = PokemonSettingsShared1246<"V0816_POKEMON_SOBBLE", "SOBBLE">;
export type PokemonSettingsSkwovet = PokemonSettingsShared1246<"V0819_POKEMON_SKWOVET", "SKWOVET">;

export type PokemonSettingsGrookeyNormal = PokemonSettingsShared1247<"V0810_POKEMON_GROOKEY_NORMAL", "GROOKEY_NORMAL", "GROOKEY">;
export type PokemonSettingsSobbleNormal = PokemonSettingsShared1247<"V0816_POKEMON_SOBBLE_NORMAL", "SOBBLE_NORMAL", "SOBBLE">;
export type PokemonSettingsSkwovetNormal = PokemonSettingsShared1247<"V0819_POKEMON_SKWOVET_NORMAL", "SKWOVET_NORMAL", "SKWOVET">;

export type PokemonSettingsThwackey = PokemonSettingsShared1248<"V0811_POKEMON_THWACKEY", "THWACKEY">;
export type PokemonSettingsDrizzile = PokemonSettingsShared1248<"V0817_POKEMON_DRIZZILE", "DRIZZILE">;

export type PokemonSettingsThwackeyNormal = PokemonSettingsShared1249<"V0811_POKEMON_THWACKEY_NORMAL", "THWACKEY_NORMAL", "THWACKEY">;
export type PokemonSettingsDrizzileNormal = PokemonSettingsShared1249<"V0817_POKEMON_DRIZZILE_NORMAL", "DRIZZILE_NORMAL", "DRIZZILE">;

export type PokemonSettingsScorbunny = PokemonSettingsShared1095<"V0813_POKEMON_SCORBUNNY", "SCORBUNNY">;

export type PokemonSettingsScorbunnyNormal = PokemonSettingsShared1096<"V0813_POKEMON_SCORBUNNY_NORMAL", "SCORBUNNY_NORMAL", "SCORBUNNY">;

export type PokemonSettingsRaboot = PokemonSettingsShared1097<"V0814_POKEMON_RABOOT", "RABOOT">;

export type PokemonSettingsRabootNormal = PokemonSettingsShared1098<"V0814_POKEMON_RABOOT_NORMAL", "RABOOT_NORMAL", "RABOOT">;

export type PokemonSettingsGreedent = PokemonSettingsShared1130<"V0820_POKEMON_GREEDENT", "GREEDENT">;
export type PokemonSettingsThievul = PokemonSettingsShared1130<"V0828_POKEMON_THIEVUL", "THIEVUL">;

export type PokemonSettingsGreedentNormal = PokemonSettingsShared1131<"V0820_POKEMON_GREEDENT_NORMAL", "GREEDENT_NORMAL", "GREEDENT">;
export type PokemonSettingsThievulNormal = PokemonSettingsShared1131<"V0828_POKEMON_THIEVUL_NORMAL", "THIEVUL_NORMAL", "THIEVUL">;

export type PokemonSettingsRookidee = PokemonSettingsShared1256<"V0821_POKEMON_ROOKIDEE", "ROOKIDEE">;
export type PokemonSettingsWooloo = PokemonSettingsShared1256<"V0831_POKEMON_WOOLOO", "WOOLOO">;

export type PokemonSettingsRookideeNormal = PokemonSettingsShared1257<"V0821_POKEMON_ROOKIDEE_NORMAL", "ROOKIDEE_NORMAL", "ROOKIDEE">;
export type PokemonSettingsWoolooNormal = PokemonSettingsShared1257<"V0831_POKEMON_WOOLOO_NORMAL", "WOOLOO_NORMAL", "WOOLOO">;

export type PokemonSettingsNickit = PokemonSettingsShared1268<"V0827_POKEMON_NICKIT", "NICKIT">;
export type PokemonSettingsHatenna = PokemonSettingsShared1268<"V0856_POKEMON_HATENNA", "HATENNA">;

export type PokemonSettingsNickitNormal = PokemonSettingsShared1269<"V0827_POKEMON_NICKIT_NORMAL", "NICKIT_NORMAL", "NICKIT">;
export type PokemonSettingsHatennaNormal = PokemonSettingsShared1269<"V0856_POKEMON_HATENNA_NORMAL", "HATENNA_NORMAL", "HATENNA">;

export type PokemonSettingsChewtle = PokemonSettingsShared1276<"V0833_POKEMON_CHEWTLE", "CHEWTLE">;
export type PokemonSettingsMilcery = PokemonSettingsShared1276<"V0868_POKEMON_MILCERY", "MILCERY">;
export type PokemonSettingsCufant = PokemonSettingsShared1276<"V0878_POKEMON_CUFANT", "CUFANT">;

export type PokemonSettingsChewtleNormal = PokemonSettingsShared1277<"V0833_POKEMON_CHEWTLE_NORMAL", "CHEWTLE_NORMAL", "CHEWTLE">;
export type PokemonSettingsMilceryNormal = PokemonSettingsShared1277<"V0868_POKEMON_MILCERY_NORMAL", "MILCERY_NORMAL", "MILCERY">;
export type PokemonSettingsCufantNormal = PokemonSettingsShared1277<"V0878_POKEMON_CUFANT_NORMAL", "CUFANT_NORMAL", "CUFANT">;

export type PokemonSettingsAppletun = PokemonSettingsShared1137<"V0842_POKEMON_APPLETUN", "APPLETUN">;

export type PokemonSettingsAppletunNormal = PokemonSettingsShared1138<"V0842_POKEMON_APPLETUN_NORMAL", "APPLETUN_NORMAL", "APPLETUN">;

export type PokemonSettingsCramorant = PokemonSettingsShared1298<"V0845_POKEMON_CRAMORANT", "CRAMORANT">;
export type PokemonSettingsDracozolt = PokemonSettingsShared1298<"V0880_POKEMON_DRACOZOLT", "DRACOZOLT">;
export type PokemonSettingsArctozolt = PokemonSettingsShared1298<"V0881_POKEMON_ARCTOZOLT", "ARCTOZOLT">;
export type PokemonSettingsDracovish = PokemonSettingsShared1298<"V0882_POKEMON_DRACOVISH", "DRACOVISH">;
export type PokemonSettingsArctovish = PokemonSettingsShared1298<"V0883_POKEMON_ARCTOVISH", "ARCTOVISH">;

export type PokemonSettingsCramorantNormal = PokemonSettingsShared1299<"V0845_POKEMON_CRAMORANT_NORMAL", "CRAMORANT_NORMAL", "CRAMORANT">;
export type PokemonSettingsDracozoltNormal = PokemonSettingsShared1299<"V0880_POKEMON_DRACOZOLT_NORMAL", "DRACOZOLT_NORMAL", "DRACOZOLT">;
export type PokemonSettingsArctozoltNormal = PokemonSettingsShared1299<"V0881_POKEMON_ARCTOZOLT_NORMAL", "ARCTOZOLT_NORMAL", "ARCTOZOLT">;
export type PokemonSettingsDracovishNormal = PokemonSettingsShared1299<"V0882_POKEMON_DRACOVISH_NORMAL", "DRACOVISH_NORMAL", "DRACOVISH">;
export type PokemonSettingsArctovishNormal = PokemonSettingsShared1299<"V0883_POKEMON_ARCTOVISH_NORMAL", "ARCTOVISH_NORMAL", "ARCTOVISH">;

export type PokemonSettingsAmped = PokemonSettingsShared1307<"V0849_POKEMON_TOXTRICITY_AMPED", "TOXTRICITY_AMPED">;
export type PokemonSettingsLowKey = PokemonSettingsShared1307<"V0849_POKEMON_TOXTRICITY_LOW_KEY", "TOXTRICITY_LOW_KEY">;

export type PokemonSettingsAntique = PokemonSettingsShared1317<"V0854_POKEMON_SINISTEA_ANTIQUE", "SINISTEA_ANTIQUE">;
export type PokemonSettingsPhony = PokemonSettingsShared1317<"V0854_POKEMON_SINISTEA_PHONY", "SINISTEA_PHONY">;

export type PokemonSettingsAntique2 = PokemonSettingsShared1319<"V0855_POKEMON_POLTEAGEIST_ANTIQUE", "POLTEAGEIST_ANTIQUE">;
export type PokemonSettingsPhony2 = PokemonSettingsShared1319<"V0855_POKEMON_POLTEAGEIST_PHONY", "POLTEAGEIST_PHONY">;

export type PokemonSettingsGrimmsnarl = PokemonSettingsShared1328<"V0861_POKEMON_GRIMMSNARL", "GRIMMSNARL">;

export type PokemonSettingsGrimmsnarlNormal = PokemonSettingsShared1329<"V0861_POKEMON_GRIMMSNARL_NORMAL", "GRIMMSNARL_NORMAL", "GRIMMSNARL">;

export type PokemonSettingsPerrserker = PokemonSettingsShared1332<"V0863_POKEMON_PERRSERKER", "PERRSERKER">;
export type PokemonSettingsSirfetchd = PokemonSettingsShared1332<"V0865_POKEMON_SIRFETCHD", "SIRFETCHD">;

export type PokemonSettingsPerrserkerNormal = PokemonSettingsShared849<"V0863_POKEMON_PERRSERKER_NORMAL", "PERRSERKER_NORMAL", "PERRSERKER">;
export type PokemonSettingsSirfetchdNormal = PokemonSettingsShared849<"V0865_POKEMON_SIRFETCHD_NORMAL", "SIRFETCHD_NORMAL", "SIRFETCHD">;

export type PokemonSettingsMrRimeNormal = PokemonSettingsShared44<"V0866_POKEMON_MR_RIME_NORMAL", "MR_RIME_NORMAL", "MR_RIME">;

export type PokemonSettingsAlcremie = PokemonSettingsShared1338<"V0869_POKEMON_ALCREMIE", "ALCREMIE">;
export type PokemonSettingsCopperajah = PokemonSettingsShared1338<"V0879_POKEMON_COPPERAJAH", "COPPERAJAH">;

export type PokemonSettingsAlcremieNormal = PokemonSettingsShared1339<"V0869_POKEMON_ALCREMIE_NORMAL", "ALCREMIE_NORMAL", "ALCREMIE">;
export type PokemonSettingsCopperajahNormal = PokemonSettingsShared1339<"V0879_POKEMON_COPPERAJAH_NORMAL", "COPPERAJAH_NORMAL", "COPPERAJAH">;

export type PokemonSettingsFalinks = PokemonSettingsShared1167<"V0870_POKEMON_FALINKS", "FALINKS">;

export type PokemonSettingsFalinksNormal = PokemonSettingsShared1168<"V0870_POKEMON_FALINKS_NORMAL", "FALINKS_NORMAL", "FALINKS">;

export type PokemonSettingsPincurchin = PokemonSettingsShared1341<"V0871_POKEMON_PINCURCHIN", "PINCURCHIN">;
export type PokemonSettingsEiscue = PokemonSettingsShared1341<"V0875_POKEMON_EISCUE", "EISCUE">;

export type PokemonSettingsPincurchinNormal = PokemonSettingsShared1342<"V0871_POKEMON_PINCURCHIN_NORMAL", "PINCURCHIN_NORMAL", "PINCURCHIN">;
export type PokemonSettingsEiscueIce = PokemonSettingsShared1342<"V0875_POKEMON_EISCUE_ICE", "EISCUE_ICE", "EISCUE">;
export type PokemonSettingsEiscueNoice = PokemonSettingsShared1342<"V0875_POKEMON_EISCUE_NOICE", "EISCUE_NOICE", "EISCUE">;

export type PokemonSettingsIndeedee = PokemonSettingsShared1121<"V0876_POKEMON_INDEEDEE", "INDEEDEE">;

export type PokemonSettingsIndeedeeFemale = PokemonSettingsShared1122<"V0876_POKEMON_INDEEDEE_FEMALE", "INDEEDEE_FEMALE", "INDEEDEE">;
export type PokemonSettingsIndeedeeMale = PokemonSettingsShared1122<"V0876_POKEMON_INDEEDEE_MALE", "INDEEDEE_MALE", "INDEEDEE">;

export type PokemonSettingsFullBelly = PokemonSettingsShared1350<"V0877_POKEMON_MORPEKO_FULL_BELLY", "MORPEKO_FULL_BELLY">;
export type PokemonSettingsHangry = PokemonSettingsShared1350<"V0877_POKEMON_MORPEKO_HANGRY", "MORPEKO_HANGRY">;

export type PokemonSettingsZacian = PokemonSettingsShared1359<"V0888_POKEMON_ZACIAN", "ZACIAN">;
export type PokemonSettingsZamazenta = PokemonSettingsShared1359<"V0889_POKEMON_ZAMAZENTA", "ZAMAZENTA">;

export type PokemonSettingsZacianCrownedSword = PokemonSettingsShared1360<"V0888_POKEMON_ZACIAN_CROWNED_SWORD", "ZACIAN_CROWNED_SWORD", "ZACIAN">;
export type PokemonSettingsZamazentaCrownedShield = PokemonSettingsShared1360<"V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD", "ZAMAZENTA_CROWNED_SHIELD", "ZAMAZENTA">;

export type PokemonSettingsZacianHero = PokemonSettingsShared1361<"V0888_POKEMON_ZACIAN_HERO", "ZACIAN_HERO", "ZACIAN">;
export type PokemonSettingsZamazentaHero = PokemonSettingsShared1361<"V0889_POKEMON_ZAMAZENTA_HERO", "ZAMAZENTA_HERO", "ZAMAZENTA">;

export type PokemonSettingsRapidStrike = PokemonSettingsShared1368<"V0892_POKEMON_URSHIFU_RAPID_STRIKE", "URSHIFU_RAPID_STRIKE">;
export type PokemonSettingsSingleStrike = PokemonSettingsShared1368<"V0892_POKEMON_URSHIFU_SINGLE_STRIKE", "URSHIFU_SINGLE_STRIKE">;

export type PokemonSettingsGlastrier = PokemonSettingsShared1375<"V0896_POKEMON_GLASTRIER", "GLASTRIER">;
export type PokemonSettingsSpectrier = PokemonSettingsShared1375<"V0897_POKEMON_SPECTRIER", "SPECTRIER">;

export type PokemonSettingsGlastrierNormal = PokemonSettingsShared1376<"V0896_POKEMON_GLASTRIER_NORMAL", "GLASTRIER_NORMAL", "GLASTRIER">;
export type PokemonSettingsSpectrierNormal = PokemonSettingsShared1376<"V0897_POKEMON_SPECTRIER_NORMAL", "SPECTRIER_NORMAL", "SPECTRIER">;

export type PokemonSettingsIceRider = PokemonSettingsShared1378<"V0898_POKEMON_CALYREX_ICE_RIDER", "CALYREX_ICE_RIDER">;
export type PokemonSettingsNormal = PokemonSettingsShared1378<"V0898_POKEMON_CALYREX_NORMAL", "CALYREX_NORMAL">;
export type PokemonSettingsShadowRider = PokemonSettingsShared1378<"V0898_POKEMON_CALYREX_SHADOW_RIDER", "CALYREX_SHADOW_RIDER">;

export type PokemonSettingsIncarnate = PokemonSettingsShared1390<"V0905_POKEMON_ENAMORUS_INCARNATE", "ENAMORUS_INCARNATE">;
export type PokemonSettingsTherian = PokemonSettingsShared1390<"V0905_POKEMON_ENAMORUS_THERIAN", "ENAMORUS_THERIAN">;

export interface PokemonSettingsGen8MasterfileByTemplateId {
  "V0810_POKEMON_GROOKEY": PokemonSettingsGrookey;
  "V0816_POKEMON_SOBBLE": PokemonSettingsSobble;
  "V0819_POKEMON_SKWOVET": PokemonSettingsSkwovet;
  "V0810_POKEMON_GROOKEY_NORMAL": PokemonSettingsGrookeyNormal;
  "V0816_POKEMON_SOBBLE_NORMAL": PokemonSettingsSobbleNormal;
  "V0819_POKEMON_SKWOVET_NORMAL": PokemonSettingsSkwovetNormal;
  "V0811_POKEMON_THWACKEY": PokemonSettingsThwackey;
  "V0817_POKEMON_DRIZZILE": PokemonSettingsDrizzile;
  "V0811_POKEMON_THWACKEY_NORMAL": PokemonSettingsThwackeyNormal;
  "V0817_POKEMON_DRIZZILE_NORMAL": PokemonSettingsDrizzileNormal;
  "V0812_POKEMON_RILLABOOM": V0812_pokemon_rillaboomEntry;
  "V0812_POKEMON_RILLABOOM_NORMAL": V0812_pokemon_rillaboom_normalEntry;
  "V0813_POKEMON_SCORBUNNY": PokemonSettingsScorbunny;
  "V0813_POKEMON_SCORBUNNY_NORMAL": PokemonSettingsScorbunnyNormal;
  "V0814_POKEMON_RABOOT": PokemonSettingsRaboot;
  "V0814_POKEMON_RABOOT_NORMAL": PokemonSettingsRabootNormal;
  "V0815_POKEMON_CINDERACE": V0815_pokemon_cinderaceEntry;
  "V0815_POKEMON_CINDERACE_NORMAL": V0815_pokemon_cinderace_normalEntry;
  "V0818_POKEMON_INTELEON": V0818_pokemon_inteleonEntry;
  "V0818_POKEMON_INTELEON_NORMAL": V0818_pokemon_inteleon_normalEntry;
  "V0820_POKEMON_GREEDENT": PokemonSettingsGreedent;
  "V0828_POKEMON_THIEVUL": PokemonSettingsThievul;
  "V0820_POKEMON_GREEDENT_NORMAL": PokemonSettingsGreedentNormal;
  "V0828_POKEMON_THIEVUL_NORMAL": PokemonSettingsThievulNormal;
  "V0821_POKEMON_ROOKIDEE": PokemonSettingsRookidee;
  "V0831_POKEMON_WOOLOO": PokemonSettingsWooloo;
  "V0821_POKEMON_ROOKIDEE_NORMAL": PokemonSettingsRookideeNormal;
  "V0831_POKEMON_WOOLOO_NORMAL": PokemonSettingsWoolooNormal;
  "V0822_POKEMON_CORVISQUIRE": V0822_pokemon_corvisquireEntry;
  "V0822_POKEMON_CORVISQUIRE_NORMAL": V0822_pokemon_corvisquire_normalEntry;
  "V0823_POKEMON_CORVIKNIGHT": V0823_pokemon_corviknightEntry;
  "V0823_POKEMON_CORVIKNIGHT_NORMAL": V0823_pokemon_corviknight_normalEntry;
  "V0824_POKEMON_BLIPBUG": V0824_pokemon_blipbugEntry;
  "V0824_POKEMON_BLIPBUG_NORMAL": V0824_pokemon_blipbug_normalEntry;
  "V0825_POKEMON_DOTTLER": V0825_pokemon_dottlerEntry;
  "V0825_POKEMON_DOTTLER_NORMAL": V0825_pokemon_dottler_normalEntry;
  "V0826_POKEMON_ORBEETLE": V0826_pokemon_orbeetleEntry;
  "V0826_POKEMON_ORBEETLE_NORMAL": V0826_pokemon_orbeetle_normalEntry;
  "V0827_POKEMON_NICKIT": PokemonSettingsNickit;
  "V0856_POKEMON_HATENNA": PokemonSettingsHatenna;
  "V0827_POKEMON_NICKIT_NORMAL": PokemonSettingsNickitNormal;
  "V0856_POKEMON_HATENNA_NORMAL": PokemonSettingsHatennaNormal;
  "V0829_POKEMON_GOSSIFLEUR": V0829_pokemon_gossifleurEntry;
  "V0829_POKEMON_GOSSIFLEUR_NORMAL": V0829_pokemon_gossifleur_normalEntry;
  "V0830_POKEMON_ELDEGOSS": V0830_pokemon_eldegossEntry;
  "V0830_POKEMON_ELDEGOSS_NORMAL": V0830_pokemon_eldegoss_normalEntry;
  "V0832_POKEMON_DUBWOOL": V0832_pokemon_dubwoolEntry;
  "V0832_POKEMON_DUBWOOL_NORMAL": V0832_pokemon_dubwool_normalEntry;
  "V0833_POKEMON_CHEWTLE": PokemonSettingsChewtle;
  "V0868_POKEMON_MILCERY": PokemonSettingsMilcery;
  "V0878_POKEMON_CUFANT": PokemonSettingsCufant;
  "V0833_POKEMON_CHEWTLE_NORMAL": PokemonSettingsChewtleNormal;
  "V0868_POKEMON_MILCERY_NORMAL": PokemonSettingsMilceryNormal;
  "V0878_POKEMON_CUFANT_NORMAL": PokemonSettingsCufantNormal;
  "V0834_POKEMON_DREDNAW": V0834_pokemon_drednawEntry;
  "V0834_POKEMON_DREDNAW_NORMAL": V0834_pokemon_drednaw_normalEntry;
  "V0835_POKEMON_YAMPER": V0835_pokemon_yamperEntry;
  "V0835_POKEMON_YAMPER_NORMAL": V0835_pokemon_yamper_normalEntry;
  "V0836_POKEMON_BOLTUND": V0836_pokemon_boltundEntry;
  "V0836_POKEMON_BOLTUND_NORMAL": V0836_pokemon_boltund_normalEntry;
  "V0837_POKEMON_ROLYCOLY": V0837_pokemon_rolycolyEntry;
  "V0837_POKEMON_ROLYCOLY_NORMAL": V0837_pokemon_rolycoly_normalEntry;
  "V0838_POKEMON_CARKOL": V0838_pokemon_carkolEntry;
  "V0838_POKEMON_CARKOL_NORMAL": V0838_pokemon_carkol_normalEntry;
  "V0839_POKEMON_COALOSSAL": V0839_pokemon_coalossalEntry;
  "V0839_POKEMON_COALOSSAL_NORMAL": V0839_pokemon_coalossal_normalEntry;
  "V0840_POKEMON_APPLIN": V0840_pokemon_applinEntry;
  "V0840_POKEMON_APPLIN_NORMAL": V0840_pokemon_applin_normalEntry;
  "V0841_POKEMON_FLAPPLE": V0841_pokemon_flappleEntry;
  "V0841_POKEMON_FLAPPLE_NORMAL": V0841_pokemon_flapple_normalEntry;
  "V0842_POKEMON_APPLETUN": PokemonSettingsAppletun;
  "V0842_POKEMON_APPLETUN_NORMAL": PokemonSettingsAppletunNormal;
  "V0843_POKEMON_SILICOBRA": V0843_pokemon_silicobraEntry;
  "V0843_POKEMON_SILICOBRA_NORMAL": V0843_pokemon_silicobra_normalEntry;
  "V0844_POKEMON_SANDACONDA": V0844_pokemon_sandacondaEntry;
  "V0844_POKEMON_SANDACONDA_NORMAL": V0844_pokemon_sandaconda_normalEntry;
  "V0845_POKEMON_CRAMORANT": PokemonSettingsCramorant;
  "V0880_POKEMON_DRACOZOLT": PokemonSettingsDracozolt;
  "V0881_POKEMON_ARCTOZOLT": PokemonSettingsArctozolt;
  "V0882_POKEMON_DRACOVISH": PokemonSettingsDracovish;
  "V0883_POKEMON_ARCTOVISH": PokemonSettingsArctovish;
  "V0845_POKEMON_CRAMORANT_NORMAL": PokemonSettingsCramorantNormal;
  "V0880_POKEMON_DRACOZOLT_NORMAL": PokemonSettingsDracozoltNormal;
  "V0881_POKEMON_ARCTOZOLT_NORMAL": PokemonSettingsArctozoltNormal;
  "V0882_POKEMON_DRACOVISH_NORMAL": PokemonSettingsDracovishNormal;
  "V0883_POKEMON_ARCTOVISH_NORMAL": PokemonSettingsArctovishNormal;
  "V0846_POKEMON_ARROKUDA": V0846_pokemon_arrokudaEntry;
  "V0846_POKEMON_ARROKUDA_NORMAL": V0846_pokemon_arrokuda_normalEntry;
  "V0847_POKEMON_BARRASKEWDA": V0847_pokemon_barraskewdaEntry;
  "V0847_POKEMON_BARRASKEWDA_NORMAL": V0847_pokemon_barraskewda_normalEntry;
  "V0848_POKEMON_TOXEL": V0848_pokemon_toxelEntry;
  "V0848_POKEMON_TOXEL_NORMAL": V0848_pokemon_toxel_normalEntry;
  "V0849_POKEMON_TOXTRICITY": V0849_pokemon_toxtricityEntry;
  "V0849_POKEMON_TOXTRICITY_AMPED": PokemonSettingsAmped;
  "V0849_POKEMON_TOXTRICITY_LOW_KEY": PokemonSettingsLowKey;
  "V0850_POKEMON_SIZZLIPEDE": V0850_pokemon_sizzlipedeEntry;
  "V0850_POKEMON_SIZZLIPEDE_NORMAL": V0850_pokemon_sizzlipede_normalEntry;
  "V0851_POKEMON_CENTISKORCH": V0851_pokemon_centiskorchEntry;
  "V0851_POKEMON_CENTISKORCH_NORMAL": V0851_pokemon_centiskorch_normalEntry;
  "V0852_POKEMON_CLOBBOPUS": V0852_pokemon_clobbopusEntry;
  "V0852_POKEMON_CLOBBOPUS_NORMAL": V0852_pokemon_clobbopus_normalEntry;
  "V0853_POKEMON_GRAPPLOCT": V0853_pokemon_grapploctEntry;
  "V0853_POKEMON_GRAPPLOCT_NORMAL": V0853_pokemon_grapploct_normalEntry;
  "V0854_POKEMON_SINISTEA": V0854_pokemon_sinisteaEntry;
  "V0854_POKEMON_SINISTEA_ANTIQUE": PokemonSettingsAntique;
  "V0854_POKEMON_SINISTEA_PHONY": PokemonSettingsPhony;
  "V0855_POKEMON_POLTEAGEIST": V0855_pokemon_polteageistEntry;
  "V0855_POKEMON_POLTEAGEIST_ANTIQUE": PokemonSettingsAntique2;
  "V0855_POKEMON_POLTEAGEIST_PHONY": PokemonSettingsPhony2;
  "V0857_POKEMON_HATTREM": V0857_pokemon_hattremEntry;
  "V0857_POKEMON_HATTREM_NORMAL": V0857_pokemon_hattrem_normalEntry;
  "V0858_POKEMON_HATTERENE": V0858_pokemon_hattereneEntry;
  "V0858_POKEMON_HATTERENE_NORMAL": V0858_pokemon_hatterene_normalEntry;
  "V0859_POKEMON_IMPIDIMP": V0859_pokemon_impidimpEntry;
  "V0859_POKEMON_IMPIDIMP_NORMAL": V0859_pokemon_impidimp_normalEntry;
  "V0860_POKEMON_MORGREM": V0860_pokemon_morgremEntry;
  "V0860_POKEMON_MORGREM_NORMAL": V0860_pokemon_morgrem_normalEntry;
  "V0861_POKEMON_GRIMMSNARL": PokemonSettingsGrimmsnarl;
  "V0861_POKEMON_GRIMMSNARL_NORMAL": PokemonSettingsGrimmsnarlNormal;
  "V0862_POKEMON_OBSTAGOON": V0862_pokemon_obstagoonEntry;
  "V0862_POKEMON_OBSTAGOON_NORMAL": V0862_pokemon_obstagoon_normalEntry;
  "V0863_POKEMON_PERRSERKER": PokemonSettingsPerrserker;
  "V0865_POKEMON_SIRFETCHD": PokemonSettingsSirfetchd;
  "V0863_POKEMON_PERRSERKER_NORMAL": PokemonSettingsPerrserkerNormal;
  "V0865_POKEMON_SIRFETCHD_NORMAL": PokemonSettingsSirfetchdNormal;
  "V0864_POKEMON_CURSOLA": V0864_pokemon_cursolaEntry;
  "V0864_POKEMON_CURSOLA_NORMAL": V0864_pokemon_cursola_normalEntry;
  "V0866_POKEMON_MR_RIME": V0866_pokemon_mr_rimeEntry;
  "V0866_POKEMON_MR_RIME_NORMAL": PokemonSettingsMrRimeNormal;
  "V0867_POKEMON_RUNERIGUS": V0867_pokemon_runerigusEntry;
  "V0867_POKEMON_RUNERIGUS_NORMAL": V0867_pokemon_runerigus_normalEntry;
  "V0869_POKEMON_ALCREMIE": PokemonSettingsAlcremie;
  "V0879_POKEMON_COPPERAJAH": PokemonSettingsCopperajah;
  "V0869_POKEMON_ALCREMIE_NORMAL": PokemonSettingsAlcremieNormal;
  "V0879_POKEMON_COPPERAJAH_NORMAL": PokemonSettingsCopperajahNormal;
  "V0870_POKEMON_FALINKS": PokemonSettingsFalinks;
  "V0870_POKEMON_FALINKS_GOFEST_2025_TRAIN_CONDUCTOR": V0870_pokemon_falinks_gofest_2025_train_conductorEntry;
  "V0870_POKEMON_FALINKS_NORMAL": PokemonSettingsFalinksNormal;
  "V0871_POKEMON_PINCURCHIN": PokemonSettingsPincurchin;
  "V0875_POKEMON_EISCUE": PokemonSettingsEiscue;
  "V0871_POKEMON_PINCURCHIN_NORMAL": PokemonSettingsPincurchinNormal;
  "V0875_POKEMON_EISCUE_ICE": PokemonSettingsEiscueIce;
  "V0875_POKEMON_EISCUE_NOICE": PokemonSettingsEiscueNoice;
  "V0872_POKEMON_SNOM": V0872_pokemon_snomEntry;
  "V0872_POKEMON_SNOM_NORMAL": V0872_pokemon_snom_normalEntry;
  "V0873_POKEMON_FROSMOTH": V0873_pokemon_frosmothEntry;
  "V0873_POKEMON_FROSMOTH_NORMAL": V0873_pokemon_frosmoth_normalEntry;
  "V0874_POKEMON_STONJOURNER": V0874_pokemon_stonjournerEntry;
  "V0874_POKEMON_STONJOURNER_NORMAL": V0874_pokemon_stonjourner_normalEntry;
  "V0876_POKEMON_INDEEDEE": PokemonSettingsIndeedee;
  "V0876_POKEMON_INDEEDEE_FEMALE": PokemonSettingsIndeedeeFemale;
  "V0876_POKEMON_INDEEDEE_MALE": PokemonSettingsIndeedeeMale;
  "V0877_POKEMON_MORPEKO": V0877_pokemon_morpekoEntry;
  "V0877_POKEMON_MORPEKO_FULL_BELLY": PokemonSettingsFullBelly;
  "V0877_POKEMON_MORPEKO_HANGRY": PokemonSettingsHangry;
  "V0884_POKEMON_DURALUDON": V0884_pokemon_duraludonEntry;
  "V0884_POKEMON_DURALUDON_NORMAL": V0884_pokemon_duraludon_normalEntry;
  "V0885_POKEMON_DREEPY": V0885_pokemon_dreepyEntry;
  "V0885_POKEMON_DREEPY_NORMAL": V0885_pokemon_dreepy_normalEntry;
  "V0886_POKEMON_DRAKLOAK": V0886_pokemon_drakloakEntry;
  "V0886_POKEMON_DRAKLOAK_NORMAL": V0886_pokemon_drakloak_normalEntry;
  "V0887_POKEMON_DRAGAPULT": V0887_pokemon_dragapultEntry;
  "V0887_POKEMON_DRAGAPULT_NORMAL": V0887_pokemon_dragapult_normalEntry;
  "V0888_POKEMON_ZACIAN": PokemonSettingsZacian;
  "V0889_POKEMON_ZAMAZENTA": PokemonSettingsZamazenta;
  "V0888_POKEMON_ZACIAN_CROWNED_SWORD": PokemonSettingsZacianCrownedSword;
  "V0889_POKEMON_ZAMAZENTA_CROWNED_SHIELD": PokemonSettingsZamazentaCrownedShield;
  "V0888_POKEMON_ZACIAN_HERO": PokemonSettingsZacianHero;
  "V0889_POKEMON_ZAMAZENTA_HERO": PokemonSettingsZamazentaHero;
  "V0890_POKEMON_ETERNATUS": V0890_pokemon_eternatusEntry;
  "V0890_POKEMON_ETERNATUS_ETERNAMAX": V0890_pokemon_eternatus_eternamaxEntry;
  "V0890_POKEMON_ETERNATUS_NORMAL": V0890_pokemon_eternatus_normalEntry;
  "V0891_POKEMON_KUBFU": V0891_pokemon_kubfuEntry;
  "V0891_POKEMON_KUBFU_NORMAL": V0891_pokemon_kubfu_normalEntry;
  "V0892_POKEMON_URSHIFU": V0892_pokemon_urshifuEntry;
  "V0892_POKEMON_URSHIFU_RAPID_STRIKE": PokemonSettingsRapidStrike;
  "V0892_POKEMON_URSHIFU_SINGLE_STRIKE": PokemonSettingsSingleStrike;
  "V0893_POKEMON_ZARUDE": V0893_pokemon_zarudeEntry;
  "V0893_POKEMON_ZARUDE_NORMAL": V0893_pokemon_zarude_normalEntry;
  "V0894_POKEMON_REGIELEKI": V0894_pokemon_regielekiEntry;
  "V0894_POKEMON_REGIELEKI_NORMAL": V0894_pokemon_regieleki_normalEntry;
  "V0895_POKEMON_REGIDRAGO": V0895_pokemon_regidragoEntry;
  "V0895_POKEMON_REGIDRAGO_NORMAL": V0895_pokemon_regidrago_normalEntry;
  "V0896_POKEMON_GLASTRIER": PokemonSettingsGlastrier;
  "V0897_POKEMON_SPECTRIER": PokemonSettingsSpectrier;
  "V0896_POKEMON_GLASTRIER_NORMAL": PokemonSettingsGlastrierNormal;
  "V0897_POKEMON_SPECTRIER_NORMAL": PokemonSettingsSpectrierNormal;
  "V0898_POKEMON_CALYREX": V0898_pokemon_calyrexEntry;
  "V0898_POKEMON_CALYREX_ICE_RIDER": PokemonSettingsIceRider;
  "V0898_POKEMON_CALYREX_NORMAL": PokemonSettingsNormal;
  "V0898_POKEMON_CALYREX_SHADOW_RIDER": PokemonSettingsShadowRider;
  "V0899_POKEMON_WYRDEER": V0899_pokemon_wyrdeerEntry;
  "V0899_POKEMON_WYRDEER_NORMAL": V0899_pokemon_wyrdeer_normalEntry;
  "V0900_POKEMON_KLEAVOR": V0900_pokemon_kleavorEntry;
  "V0900_POKEMON_KLEAVOR_NORMAL": V0900_pokemon_kleavor_normalEntry;
  "V0901_POKEMON_URSALUNA": V0901_pokemon_ursalunaEntry;
  "V0901_POKEMON_URSALUNA_NORMAL": V0901_pokemon_ursaluna_normalEntry;
  "V0903_POKEMON_SNEASLER": V0903_pokemon_sneaslerEntry;
  "V0903_POKEMON_SNEASLER_NORMAL": V0903_pokemon_sneasler_normalEntry;
  "V0904_POKEMON_OVERQWIL": V0904_pokemon_overqwilEntry;
  "V0904_POKEMON_OVERQWIL_NORMAL": V0904_pokemon_overqwil_normalEntry;
  "V0905_POKEMON_ENAMORUS": V0905_pokemon_enamorusEntry;
  "V0905_POKEMON_ENAMORUS_INCARNATE": PokemonSettingsIncarnate;
  "V0905_POKEMON_ENAMORUS_THERIAN": PokemonSettingsTherian;
}

export interface PokemonSettingsGen8ByDexId {
  "0810": PokemonSettingsGrookey | PokemonSettingsGrookeyNormal;
  "0811": PokemonSettingsThwackey | PokemonSettingsThwackeyNormal;
  "0812": V0812_pokemon_rillaboomEntry | V0812_pokemon_rillaboom_normalEntry;
  "0813": PokemonSettingsScorbunny | PokemonSettingsScorbunnyNormal;
  "0814": PokemonSettingsRaboot | PokemonSettingsRabootNormal;
  "0815": V0815_pokemon_cinderaceEntry | V0815_pokemon_cinderace_normalEntry;
  "0816": PokemonSettingsSobble | PokemonSettingsSobbleNormal;
  "0817": PokemonSettingsDrizzile | PokemonSettingsDrizzileNormal;
  "0818": V0818_pokemon_inteleonEntry | V0818_pokemon_inteleon_normalEntry;
  "0819": PokemonSettingsSkwovet | PokemonSettingsSkwovetNormal;
  "0820": PokemonSettingsGreedent | PokemonSettingsGreedentNormal;
  "0821": PokemonSettingsRookidee | PokemonSettingsRookideeNormal;
  "0822": V0822_pokemon_corvisquireEntry | V0822_pokemon_corvisquire_normalEntry;
  "0823": V0823_pokemon_corviknightEntry | V0823_pokemon_corviknight_normalEntry;
  "0824": V0824_pokemon_blipbugEntry | V0824_pokemon_blipbug_normalEntry;
  "0825": V0825_pokemon_dottlerEntry | V0825_pokemon_dottler_normalEntry;
  "0826": V0826_pokemon_orbeetleEntry | V0826_pokemon_orbeetle_normalEntry;
  "0827": PokemonSettingsNickit | PokemonSettingsNickitNormal;
  "0828": PokemonSettingsThievul | PokemonSettingsThievulNormal;
  "0829": V0829_pokemon_gossifleurEntry | V0829_pokemon_gossifleur_normalEntry;
  "0830": V0830_pokemon_eldegossEntry | V0830_pokemon_eldegoss_normalEntry;
  "0831": PokemonSettingsWooloo | PokemonSettingsWoolooNormal;
  "0832": V0832_pokemon_dubwoolEntry | V0832_pokemon_dubwool_normalEntry;
  "0833": PokemonSettingsChewtle | PokemonSettingsChewtleNormal;
  "0834": V0834_pokemon_drednawEntry | V0834_pokemon_drednaw_normalEntry;
  "0835": V0835_pokemon_yamperEntry | V0835_pokemon_yamper_normalEntry;
  "0836": V0836_pokemon_boltundEntry | V0836_pokemon_boltund_normalEntry;
  "0837": V0837_pokemon_rolycolyEntry | V0837_pokemon_rolycoly_normalEntry;
  "0838": V0838_pokemon_carkolEntry | V0838_pokemon_carkol_normalEntry;
  "0839": V0839_pokemon_coalossalEntry | V0839_pokemon_coalossal_normalEntry;
  "0840": V0840_pokemon_applinEntry | V0840_pokemon_applin_normalEntry;
  "0841": V0841_pokemon_flappleEntry | V0841_pokemon_flapple_normalEntry;
  "0842": PokemonSettingsAppletun | PokemonSettingsAppletunNormal;
  "0843": V0843_pokemon_silicobraEntry | V0843_pokemon_silicobra_normalEntry;
  "0844": V0844_pokemon_sandacondaEntry | V0844_pokemon_sandaconda_normalEntry;
  "0845": PokemonSettingsCramorant | PokemonSettingsCramorantNormal;
  "0846": V0846_pokemon_arrokudaEntry | V0846_pokemon_arrokuda_normalEntry;
  "0847": V0847_pokemon_barraskewdaEntry | V0847_pokemon_barraskewda_normalEntry;
  "0848": V0848_pokemon_toxelEntry | V0848_pokemon_toxel_normalEntry;
  "0849": V0849_pokemon_toxtricityEntry | PokemonSettingsAmped | PokemonSettingsLowKey;
  "0850": V0850_pokemon_sizzlipedeEntry | V0850_pokemon_sizzlipede_normalEntry;
  "0851": V0851_pokemon_centiskorchEntry | V0851_pokemon_centiskorch_normalEntry;
  "0852": V0852_pokemon_clobbopusEntry | V0852_pokemon_clobbopus_normalEntry;
  "0853": V0853_pokemon_grapploctEntry | V0853_pokemon_grapploct_normalEntry;
  "0854": V0854_pokemon_sinisteaEntry | PokemonSettingsAntique | PokemonSettingsPhony;
  "0855": V0855_pokemon_polteageistEntry | PokemonSettingsAntique2 | PokemonSettingsPhony2;
  "0856": PokemonSettingsHatenna | PokemonSettingsHatennaNormal;
  "0857": V0857_pokemon_hattremEntry | V0857_pokemon_hattrem_normalEntry;
  "0858": V0858_pokemon_hattereneEntry | V0858_pokemon_hatterene_normalEntry;
  "0859": V0859_pokemon_impidimpEntry | V0859_pokemon_impidimp_normalEntry;
  "0860": V0860_pokemon_morgremEntry | V0860_pokemon_morgrem_normalEntry;
  "0861": PokemonSettingsGrimmsnarl | PokemonSettingsGrimmsnarlNormal;
  "0862": V0862_pokemon_obstagoonEntry | V0862_pokemon_obstagoon_normalEntry;
  "0863": PokemonSettingsPerrserker | PokemonSettingsPerrserkerNormal;
  "0864": V0864_pokemon_cursolaEntry | V0864_pokemon_cursola_normalEntry;
  "0865": PokemonSettingsSirfetchd | PokemonSettingsSirfetchdNormal;
  "0866": V0866_pokemon_mr_rimeEntry | PokemonSettingsMrRimeNormal;
  "0867": V0867_pokemon_runerigusEntry | V0867_pokemon_runerigus_normalEntry;
  "0868": PokemonSettingsMilcery | PokemonSettingsMilceryNormal;
  "0869": PokemonSettingsAlcremie | PokemonSettingsAlcremieNormal;
  "0870": PokemonSettingsFalinks | V0870_pokemon_falinks_gofest_2025_train_conductorEntry | PokemonSettingsFalinksNormal;
  "0871": PokemonSettingsPincurchin | PokemonSettingsPincurchinNormal;
  "0872": V0872_pokemon_snomEntry | V0872_pokemon_snom_normalEntry;
  "0873": V0873_pokemon_frosmothEntry | V0873_pokemon_frosmoth_normalEntry;
  "0874": V0874_pokemon_stonjournerEntry | V0874_pokemon_stonjourner_normalEntry;
  "0875": PokemonSettingsEiscue | PokemonSettingsEiscueIce | PokemonSettingsEiscueNoice;
  "0876": PokemonSettingsIndeedee | PokemonSettingsIndeedeeFemale | PokemonSettingsIndeedeeMale;
  "0877": V0877_pokemon_morpekoEntry | PokemonSettingsFullBelly | PokemonSettingsHangry;
  "0878": PokemonSettingsCufant | PokemonSettingsCufantNormal;
  "0879": PokemonSettingsCopperajah | PokemonSettingsCopperajahNormal;
  "0880": PokemonSettingsDracozolt | PokemonSettingsDracozoltNormal;
  "0881": PokemonSettingsArctozolt | PokemonSettingsArctozoltNormal;
  "0882": PokemonSettingsDracovish | PokemonSettingsDracovishNormal;
  "0883": PokemonSettingsArctovish | PokemonSettingsArctovishNormal;
  "0884": V0884_pokemon_duraludonEntry | V0884_pokemon_duraludon_normalEntry;
  "0885": V0885_pokemon_dreepyEntry | V0885_pokemon_dreepy_normalEntry;
  "0886": V0886_pokemon_drakloakEntry | V0886_pokemon_drakloak_normalEntry;
  "0887": V0887_pokemon_dragapultEntry | V0887_pokemon_dragapult_normalEntry;
  "0888": PokemonSettingsZacian | PokemonSettingsZacianCrownedSword | PokemonSettingsZacianHero;
  "0889": PokemonSettingsZamazenta | PokemonSettingsZamazentaCrownedShield | PokemonSettingsZamazentaHero;
  "0890": V0890_pokemon_eternatusEntry | V0890_pokemon_eternatus_eternamaxEntry | V0890_pokemon_eternatus_normalEntry;
  "0891": V0891_pokemon_kubfuEntry | V0891_pokemon_kubfu_normalEntry;
  "0892": V0892_pokemon_urshifuEntry | PokemonSettingsRapidStrike | PokemonSettingsSingleStrike;
  "0893": V0893_pokemon_zarudeEntry | V0893_pokemon_zarude_normalEntry;
  "0894": V0894_pokemon_regielekiEntry | V0894_pokemon_regieleki_normalEntry;
  "0895": V0895_pokemon_regidragoEntry | V0895_pokemon_regidrago_normalEntry;
  "0896": PokemonSettingsGlastrier | PokemonSettingsGlastrierNormal;
  "0897": PokemonSettingsSpectrier | PokemonSettingsSpectrierNormal;
  "0898": V0898_pokemon_calyrexEntry | PokemonSettingsIceRider | PokemonSettingsNormal | PokemonSettingsShadowRider;
  "0899": V0899_pokemon_wyrdeerEntry | V0899_pokemon_wyrdeer_normalEntry;
  "0900": V0900_pokemon_kleavorEntry | V0900_pokemon_kleavor_normalEntry;
  "0901": V0901_pokemon_ursalunaEntry | V0901_pokemon_ursaluna_normalEntry;
  "0903": V0903_pokemon_sneaslerEntry | V0903_pokemon_sneasler_normalEntry;
  "0904": V0904_pokemon_overqwilEntry | V0904_pokemon_overqwil_normalEntry;
  "0905": V0905_pokemon_enamorusEntry | PokemonSettingsIncarnate | PokemonSettingsTherian;
}

export interface PokemonSettingsGen8ByPokemonId {
  "ALCREMIE": PokemonSettingsAlcremie | PokemonSettingsAlcremieNormal;
  "APPLETUN": PokemonSettingsAppletun | PokemonSettingsAppletunNormal;
  "APPLIN": V0840_pokemon_applinEntry | V0840_pokemon_applin_normalEntry;
  "ARCTOVISH": PokemonSettingsArctovish | PokemonSettingsArctovishNormal;
  "ARCTOZOLT": PokemonSettingsArctozolt | PokemonSettingsArctozoltNormal;
  "ARROKUDA": V0846_pokemon_arrokudaEntry | V0846_pokemon_arrokuda_normalEntry;
  "BARRASKEWDA": V0847_pokemon_barraskewdaEntry | V0847_pokemon_barraskewda_normalEntry;
  "BLIPBUG": V0824_pokemon_blipbugEntry | V0824_pokemon_blipbug_normalEntry;
  "BOLTUND": V0836_pokemon_boltundEntry | V0836_pokemon_boltund_normalEntry;
  "CALYREX": V0898_pokemon_calyrexEntry | PokemonSettingsIceRider | PokemonSettingsNormal | PokemonSettingsShadowRider;
  "CARKOL": V0838_pokemon_carkolEntry | V0838_pokemon_carkol_normalEntry;
  "CENTISKORCH": V0851_pokemon_centiskorchEntry | V0851_pokemon_centiskorch_normalEntry;
  "CHEWTLE": PokemonSettingsChewtle | PokemonSettingsChewtleNormal;
  "CINDERACE": V0815_pokemon_cinderaceEntry | V0815_pokemon_cinderace_normalEntry;
  "CLOBBOPUS": V0852_pokemon_clobbopusEntry | V0852_pokemon_clobbopus_normalEntry;
  "COALOSSAL": V0839_pokemon_coalossalEntry | V0839_pokemon_coalossal_normalEntry;
  "COPPERAJAH": PokemonSettingsCopperajah | PokemonSettingsCopperajahNormal;
  "CORVIKNIGHT": V0823_pokemon_corviknightEntry | V0823_pokemon_corviknight_normalEntry;
  "CORVISQUIRE": V0822_pokemon_corvisquireEntry | V0822_pokemon_corvisquire_normalEntry;
  "CRAMORANT": PokemonSettingsCramorant | PokemonSettingsCramorantNormal;
  "CUFANT": PokemonSettingsCufant | PokemonSettingsCufantNormal;
  "CURSOLA": V0864_pokemon_cursolaEntry | V0864_pokemon_cursola_normalEntry;
  "DOTTLER": V0825_pokemon_dottlerEntry | V0825_pokemon_dottler_normalEntry;
  "DRACOVISH": PokemonSettingsDracovish | PokemonSettingsDracovishNormal;
  "DRACOZOLT": PokemonSettingsDracozolt | PokemonSettingsDracozoltNormal;
  "DRAGAPULT": V0887_pokemon_dragapultEntry | V0887_pokemon_dragapult_normalEntry;
  "DRAKLOAK": V0886_pokemon_drakloakEntry | V0886_pokemon_drakloak_normalEntry;
  "DREDNAW": V0834_pokemon_drednawEntry | V0834_pokemon_drednaw_normalEntry;
  "DREEPY": V0885_pokemon_dreepyEntry | V0885_pokemon_dreepy_normalEntry;
  "DRIZZILE": PokemonSettingsDrizzile | PokemonSettingsDrizzileNormal;
  "DUBWOOL": V0832_pokemon_dubwoolEntry | V0832_pokemon_dubwool_normalEntry;
  "DURALUDON": V0884_pokemon_duraludonEntry | V0884_pokemon_duraludon_normalEntry;
  "EISCUE": PokemonSettingsEiscue | PokemonSettingsEiscueIce | PokemonSettingsEiscueNoice;
  "ELDEGOSS": V0830_pokemon_eldegossEntry | V0830_pokemon_eldegoss_normalEntry;
  "ENAMORUS": V0905_pokemon_enamorusEntry | PokemonSettingsIncarnate | PokemonSettingsTherian;
  "ETERNATUS": V0890_pokemon_eternatusEntry | V0890_pokemon_eternatus_eternamaxEntry | V0890_pokemon_eternatus_normalEntry;
  "FALINKS": PokemonSettingsFalinks | V0870_pokemon_falinks_gofest_2025_train_conductorEntry | PokemonSettingsFalinksNormal;
  "FLAPPLE": V0841_pokemon_flappleEntry | V0841_pokemon_flapple_normalEntry;
  "FROSMOTH": V0873_pokemon_frosmothEntry | V0873_pokemon_frosmoth_normalEntry;
  "GLASTRIER": PokemonSettingsGlastrier | PokemonSettingsGlastrierNormal;
  "GOSSIFLEUR": V0829_pokemon_gossifleurEntry | V0829_pokemon_gossifleur_normalEntry;
  "GRAPPLOCT": V0853_pokemon_grapploctEntry | V0853_pokemon_grapploct_normalEntry;
  "GREEDENT": PokemonSettingsGreedent | PokemonSettingsGreedentNormal;
  "GRIMMSNARL": PokemonSettingsGrimmsnarl | PokemonSettingsGrimmsnarlNormal;
  "GROOKEY": PokemonSettingsGrookey | PokemonSettingsGrookeyNormal;
  "HATENNA": PokemonSettingsHatenna | PokemonSettingsHatennaNormal;
  "HATTERENE": V0858_pokemon_hattereneEntry | V0858_pokemon_hatterene_normalEntry;
  "HATTREM": V0857_pokemon_hattremEntry | V0857_pokemon_hattrem_normalEntry;
  "IMPIDIMP": V0859_pokemon_impidimpEntry | V0859_pokemon_impidimp_normalEntry;
  "INDEEDEE": PokemonSettingsIndeedee | PokemonSettingsIndeedeeFemale | PokemonSettingsIndeedeeMale;
  "INTELEON": V0818_pokemon_inteleonEntry | V0818_pokemon_inteleon_normalEntry;
  "KLEAVOR": V0900_pokemon_kleavorEntry | V0900_pokemon_kleavor_normalEntry;
  "KUBFU": V0891_pokemon_kubfuEntry | V0891_pokemon_kubfu_normalEntry;
  "MILCERY": PokemonSettingsMilcery | PokemonSettingsMilceryNormal;
  "MORGREM": V0860_pokemon_morgremEntry | V0860_pokemon_morgrem_normalEntry;
  "MORPEKO": V0877_pokemon_morpekoEntry | PokemonSettingsFullBelly | PokemonSettingsHangry;
  "MR_RIME": V0866_pokemon_mr_rimeEntry | PokemonSettingsMrRimeNormal;
  "NICKIT": PokemonSettingsNickit | PokemonSettingsNickitNormal;
  "OBSTAGOON": V0862_pokemon_obstagoonEntry | V0862_pokemon_obstagoon_normalEntry;
  "ORBEETLE": V0826_pokemon_orbeetleEntry | V0826_pokemon_orbeetle_normalEntry;
  "OVERQWIL": V0904_pokemon_overqwilEntry | V0904_pokemon_overqwil_normalEntry;
  "PERRSERKER": PokemonSettingsPerrserker | PokemonSettingsPerrserkerNormal;
  "PINCURCHIN": PokemonSettingsPincurchin | PokemonSettingsPincurchinNormal;
  "POLTEAGEIST": V0855_pokemon_polteageistEntry | PokemonSettingsAntique2 | PokemonSettingsPhony2;
  "RABOOT": PokemonSettingsRaboot | PokemonSettingsRabootNormal;
  "REGIDRAGO": V0895_pokemon_regidragoEntry | V0895_pokemon_regidrago_normalEntry;
  "REGIELEKI": V0894_pokemon_regielekiEntry | V0894_pokemon_regieleki_normalEntry;
  "RILLABOOM": V0812_pokemon_rillaboomEntry | V0812_pokemon_rillaboom_normalEntry;
  "ROLYCOLY": V0837_pokemon_rolycolyEntry | V0837_pokemon_rolycoly_normalEntry;
  "ROOKIDEE": PokemonSettingsRookidee | PokemonSettingsRookideeNormal;
  "RUNERIGUS": V0867_pokemon_runerigusEntry | V0867_pokemon_runerigus_normalEntry;
  "SANDACONDA": V0844_pokemon_sandacondaEntry | V0844_pokemon_sandaconda_normalEntry;
  "SCORBUNNY": PokemonSettingsScorbunny | PokemonSettingsScorbunnyNormal;
  "SILICOBRA": V0843_pokemon_silicobraEntry | V0843_pokemon_silicobra_normalEntry;
  "SINISTEA": V0854_pokemon_sinisteaEntry | PokemonSettingsAntique | PokemonSettingsPhony;
  "SIRFETCHD": PokemonSettingsSirfetchd | PokemonSettingsSirfetchdNormal;
  "SIZZLIPEDE": V0850_pokemon_sizzlipedeEntry | V0850_pokemon_sizzlipede_normalEntry;
  "SKWOVET": PokemonSettingsSkwovet | PokemonSettingsSkwovetNormal;
  "SNEASLER": V0903_pokemon_sneaslerEntry | V0903_pokemon_sneasler_normalEntry;
  "SNOM": V0872_pokemon_snomEntry | V0872_pokemon_snom_normalEntry;
  "SOBBLE": PokemonSettingsSobble | PokemonSettingsSobbleNormal;
  "SPECTRIER": PokemonSettingsSpectrier | PokemonSettingsSpectrierNormal;
  "STONJOURNER": V0874_pokemon_stonjournerEntry | V0874_pokemon_stonjourner_normalEntry;
  "THIEVUL": PokemonSettingsThievul | PokemonSettingsThievulNormal;
  "THWACKEY": PokemonSettingsThwackey | PokemonSettingsThwackeyNormal;
  "TOXEL": V0848_pokemon_toxelEntry | V0848_pokemon_toxel_normalEntry;
  "TOXTRICITY": V0849_pokemon_toxtricityEntry | PokemonSettingsAmped | PokemonSettingsLowKey;
  "URSALUNA": V0901_pokemon_ursalunaEntry | V0901_pokemon_ursaluna_normalEntry;
  "URSHIFU": V0892_pokemon_urshifuEntry | PokemonSettingsRapidStrike | PokemonSettingsSingleStrike;
  "WOOLOO": PokemonSettingsWooloo | PokemonSettingsWoolooNormal;
  "WYRDEER": V0899_pokemon_wyrdeerEntry | V0899_pokemon_wyrdeer_normalEntry;
  "YAMPER": V0835_pokemon_yamperEntry | V0835_pokemon_yamper_normalEntry;
  "ZACIAN": PokemonSettingsZacian | PokemonSettingsZacianCrownedSword | PokemonSettingsZacianHero;
  "ZAMAZENTA": PokemonSettingsZamazenta | PokemonSettingsZamazentaCrownedShield | PokemonSettingsZamazentaHero;
  "ZARUDE": V0893_pokemon_zarudeEntry | V0893_pokemon_zarude_normalEntry;
}

export type PokemonSettingsGen8MasterfileEntry = PokemonSettingsGrookey | PokemonSettingsSobble | PokemonSettingsSkwovet | PokemonSettingsGrookeyNormal | PokemonSettingsSobbleNormal | PokemonSettingsSkwovetNormal | PokemonSettingsThwackey | PokemonSettingsDrizzile | PokemonSettingsThwackeyNormal | PokemonSettingsDrizzileNormal | V0812_pokemon_rillaboomEntry | V0812_pokemon_rillaboom_normalEntry | PokemonSettingsScorbunny | PokemonSettingsScorbunnyNormal | PokemonSettingsRaboot | PokemonSettingsRabootNormal | V0815_pokemon_cinderaceEntry | V0815_pokemon_cinderace_normalEntry | V0818_pokemon_inteleonEntry | V0818_pokemon_inteleon_normalEntry | PokemonSettingsGreedent | PokemonSettingsThievul | PokemonSettingsGreedentNormal | PokemonSettingsThievulNormal | PokemonSettingsRookidee | PokemonSettingsWooloo | PokemonSettingsRookideeNormal | PokemonSettingsWoolooNormal | V0822_pokemon_corvisquireEntry | V0822_pokemon_corvisquire_normalEntry | V0823_pokemon_corviknightEntry | V0823_pokemon_corviknight_normalEntry | V0824_pokemon_blipbugEntry | V0824_pokemon_blipbug_normalEntry | V0825_pokemon_dottlerEntry | V0825_pokemon_dottler_normalEntry | V0826_pokemon_orbeetleEntry | V0826_pokemon_orbeetle_normalEntry | PokemonSettingsNickit | PokemonSettingsHatenna | PokemonSettingsNickitNormal | PokemonSettingsHatennaNormal | V0829_pokemon_gossifleurEntry | V0829_pokemon_gossifleur_normalEntry | V0830_pokemon_eldegossEntry | V0830_pokemon_eldegoss_normalEntry | V0832_pokemon_dubwoolEntry | V0832_pokemon_dubwool_normalEntry | PokemonSettingsChewtle | PokemonSettingsMilcery | PokemonSettingsCufant | PokemonSettingsChewtleNormal | PokemonSettingsMilceryNormal | PokemonSettingsCufantNormal | V0834_pokemon_drednawEntry | V0834_pokemon_drednaw_normalEntry | V0835_pokemon_yamperEntry | V0835_pokemon_yamper_normalEntry | V0836_pokemon_boltundEntry | V0836_pokemon_boltund_normalEntry | V0837_pokemon_rolycolyEntry | V0837_pokemon_rolycoly_normalEntry | V0838_pokemon_carkolEntry | V0838_pokemon_carkol_normalEntry | V0839_pokemon_coalossalEntry | V0839_pokemon_coalossal_normalEntry | V0840_pokemon_applinEntry | V0840_pokemon_applin_normalEntry | V0841_pokemon_flappleEntry | V0841_pokemon_flapple_normalEntry | PokemonSettingsAppletun | PokemonSettingsAppletunNormal | V0843_pokemon_silicobraEntry | V0843_pokemon_silicobra_normalEntry | V0844_pokemon_sandacondaEntry | V0844_pokemon_sandaconda_normalEntry | PokemonSettingsCramorant | PokemonSettingsDracozolt | PokemonSettingsArctozolt | PokemonSettingsDracovish | PokemonSettingsArctovish | PokemonSettingsCramorantNormal | PokemonSettingsDracozoltNormal | PokemonSettingsArctozoltNormal | PokemonSettingsDracovishNormal | PokemonSettingsArctovishNormal | V0846_pokemon_arrokudaEntry | V0846_pokemon_arrokuda_normalEntry | V0847_pokemon_barraskewdaEntry | V0847_pokemon_barraskewda_normalEntry | V0848_pokemon_toxelEntry | V0848_pokemon_toxel_normalEntry | V0849_pokemon_toxtricityEntry | PokemonSettingsAmped | PokemonSettingsLowKey | V0850_pokemon_sizzlipedeEntry | V0850_pokemon_sizzlipede_normalEntry | V0851_pokemon_centiskorchEntry | V0851_pokemon_centiskorch_normalEntry | V0852_pokemon_clobbopusEntry | V0852_pokemon_clobbopus_normalEntry | V0853_pokemon_grapploctEntry | V0853_pokemon_grapploct_normalEntry | V0854_pokemon_sinisteaEntry | PokemonSettingsAntique | PokemonSettingsPhony | V0855_pokemon_polteageistEntry | PokemonSettingsAntique2 | PokemonSettingsPhony2 | V0857_pokemon_hattremEntry | V0857_pokemon_hattrem_normalEntry | V0858_pokemon_hattereneEntry | V0858_pokemon_hatterene_normalEntry | V0859_pokemon_impidimpEntry | V0859_pokemon_impidimp_normalEntry | V0860_pokemon_morgremEntry | V0860_pokemon_morgrem_normalEntry | PokemonSettingsGrimmsnarl | PokemonSettingsGrimmsnarlNormal | V0862_pokemon_obstagoonEntry | V0862_pokemon_obstagoon_normalEntry | PokemonSettingsPerrserker | PokemonSettingsSirfetchd | PokemonSettingsPerrserkerNormal | PokemonSettingsSirfetchdNormal | V0864_pokemon_cursolaEntry | V0864_pokemon_cursola_normalEntry | V0866_pokemon_mr_rimeEntry | PokemonSettingsMrRimeNormal | V0867_pokemon_runerigusEntry | V0867_pokemon_runerigus_normalEntry | PokemonSettingsAlcremie | PokemonSettingsCopperajah | PokemonSettingsAlcremieNormal | PokemonSettingsCopperajahNormal | PokemonSettingsFalinks | V0870_pokemon_falinks_gofest_2025_train_conductorEntry | PokemonSettingsFalinksNormal | PokemonSettingsPincurchin | PokemonSettingsEiscue | PokemonSettingsPincurchinNormal | PokemonSettingsEiscueIce | PokemonSettingsEiscueNoice | V0872_pokemon_snomEntry | V0872_pokemon_snom_normalEntry | V0873_pokemon_frosmothEntry | V0873_pokemon_frosmoth_normalEntry | V0874_pokemon_stonjournerEntry | V0874_pokemon_stonjourner_normalEntry | PokemonSettingsIndeedee | PokemonSettingsIndeedeeFemale | PokemonSettingsIndeedeeMale | V0877_pokemon_morpekoEntry | PokemonSettingsFullBelly | PokemonSettingsHangry | V0884_pokemon_duraludonEntry | V0884_pokemon_duraludon_normalEntry | V0885_pokemon_dreepyEntry | V0885_pokemon_dreepy_normalEntry | V0886_pokemon_drakloakEntry | V0886_pokemon_drakloak_normalEntry | V0887_pokemon_dragapultEntry | V0887_pokemon_dragapult_normalEntry | PokemonSettingsZacian | PokemonSettingsZamazenta | PokemonSettingsZacianCrownedSword | PokemonSettingsZamazentaCrownedShield | PokemonSettingsZacianHero | PokemonSettingsZamazentaHero | V0890_pokemon_eternatusEntry | V0890_pokemon_eternatus_eternamaxEntry | V0890_pokemon_eternatus_normalEntry | V0891_pokemon_kubfuEntry | V0891_pokemon_kubfu_normalEntry | V0892_pokemon_urshifuEntry | PokemonSettingsRapidStrike | PokemonSettingsSingleStrike | V0893_pokemon_zarudeEntry | V0893_pokemon_zarude_normalEntry | V0894_pokemon_regielekiEntry | V0894_pokemon_regieleki_normalEntry | V0895_pokemon_regidragoEntry | V0895_pokemon_regidrago_normalEntry | PokemonSettingsGlastrier | PokemonSettingsSpectrier | PokemonSettingsGlastrierNormal | PokemonSettingsSpectrierNormal | V0898_pokemon_calyrexEntry | PokemonSettingsIceRider | PokemonSettingsNormal | PokemonSettingsShadowRider | V0899_pokemon_wyrdeerEntry | V0899_pokemon_wyrdeer_normalEntry | V0900_pokemon_kleavorEntry | V0900_pokemon_kleavor_normalEntry | V0901_pokemon_ursalunaEntry | V0901_pokemon_ursaluna_normalEntry | V0903_pokemon_sneaslerEntry | V0903_pokemon_sneasler_normalEntry | V0904_pokemon_overqwilEntry | V0904_pokemon_overqwil_normalEntry | V0905_pokemon_enamorusEntry | PokemonSettingsIncarnate | PokemonSettingsTherian;

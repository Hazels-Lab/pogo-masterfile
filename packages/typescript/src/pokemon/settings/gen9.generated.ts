/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen9
// Filters: all
// Entries emitted: 251

import type { PokemonSettingsShared1130, PokemonSettingsShared1131, PokemonSettingsShared1328, PokemonSettingsShared1329, PokemonSettingsShared1391, PokemonSettingsShared1392, PokemonSettingsShared1401, PokemonSettingsShared1402, PokemonSettingsShared1412, PokemonSettingsShared1428, PokemonSettingsShared1435, PokemonSettingsShared1436, PokemonSettingsShared1445, PokemonSettingsShared1446, PokemonSettingsShared1455, PokemonSettingsShared1456, PokemonSettingsShared1457, PokemonSettingsShared1458, PokemonSettingsShared1465, PokemonSettingsShared1466, PokemonSettingsShared1510, PokemonSettingsShared1517, PokemonSettingsShared1518, PokemonSettingsShared1532, PokemonSettingsShared1533, PokemonSettingsShared1534, PokemonSettingsShared1535, PokemonSettingsShared1536, PokemonSettingsShared1537, PokemonSettingsShared1541, PokemonSettingsShared1543, PokemonSettingsShared1544 } from "./shared.generated";

export interface V0907_pokemon_floragatodatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0907_pokemon_floragatodatapokemonsettingsencounter {
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
export interface V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0907_pokemon_floragatodatapokemonsettingsibfc {

}
export interface V0907_pokemon_floragatodatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0907_pokemon_floragatodatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0907_pokemon_floragatodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0907_pokemon_floragatodata {
  pokemonSettings: V0907_pokemon_floragatodatapokemonsettings;
  templateId: string;
}
export interface V0907_pokemon_floragatoEntry {
  templateId: "V0907_POKEMON_FLORAGATO";
  data: V0907_pokemon_floragatodata;
}
export interface V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0907_pokemon_floragato_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0907_pokemon_floragato_normaldata {
  pokemonSettings: V0907_pokemon_floragato_normaldatapokemonsettings;
  templateId: string;
}
export interface V0907_pokemon_floragato_normalEntry {
  templateId: "V0907_POKEMON_FLORAGATO_NORMAL";
  data: V0907_pokemon_floragato_normaldata;
}
export interface V0908_pokemon_meowscaradadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0908_pokemon_meowscaradadata {
  pokemonSettings: V0908_pokemon_meowscaradadatapokemonsettings;
  templateId: string;
}
export interface V0908_pokemon_meowscaradaEntry {
  templateId: "V0908_POKEMON_MEOWSCARADA";
  data: V0908_pokemon_meowscaradadata;
}
export interface V0908_pokemon_meowscarada_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0908_pokemon_meowscarada_normaldata {
  pokemonSettings: V0908_pokemon_meowscarada_normaldatapokemonsettings;
  templateId: string;
}
export interface V0908_pokemon_meowscarada_normalEntry {
  templateId: "V0908_POKEMON_MEOWSCARADA_NORMAL";
  data: V0908_pokemon_meowscarada_normaldata;
}
export interface V0909_pokemon_fuecocodatapokemonsettingsencounter {
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
export interface V0909_pokemon_fuecocodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0909_pokemon_fuecocodata {
  pokemonSettings: V0909_pokemon_fuecocodatapokemonsettings;
  templateId: string;
}
export interface V0909_pokemon_fuecocoEntry {
  templateId: "V0909_POKEMON_FUECOCO";
  data: V0909_pokemon_fuecocodata;
}
export interface V0909_pokemon_fuecoco_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0909_pokemon_fuecoco_normaldata {
  pokemonSettings: V0909_pokemon_fuecoco_normaldatapokemonsettings;
  templateId: string;
}
export interface V0909_pokemon_fuecoco_normalEntry {
  templateId: "V0909_POKEMON_FUECOCO_NORMAL";
  data: V0909_pokemon_fuecoco_normaldata;
}
export interface V0910_pokemon_crocalordatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0910_pokemon_crocalordata {
  pokemonSettings: V0910_pokemon_crocalordatapokemonsettings;
  templateId: string;
}
export interface V0910_pokemon_crocalorEntry {
  templateId: "V0910_POKEMON_CROCALOR";
  data: V0910_pokemon_crocalordata;
}
export interface V0910_pokemon_crocalor_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0910_pokemon_crocalor_normaldata {
  pokemonSettings: V0910_pokemon_crocalor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0910_pokemon_crocalor_normalEntry {
  templateId: "V0910_POKEMON_CROCALOR_NORMAL";
  data: V0910_pokemon_crocalor_normaldata;
}
export interface V0912_pokemon_quaxlydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0912_pokemon_quaxlydata {
  pokemonSettings: V0912_pokemon_quaxlydatapokemonsettings;
  templateId: string;
}
export interface V0912_pokemon_quaxlyEntry {
  templateId: "V0912_POKEMON_QUAXLY";
  data: V0912_pokemon_quaxlydata;
}
export interface V0912_pokemon_quaxly_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0912_pokemon_quaxly_normaldata {
  pokemonSettings: V0912_pokemon_quaxly_normaldatapokemonsettings;
  templateId: string;
}
export interface V0912_pokemon_quaxly_normalEntry {
  templateId: "V0912_POKEMON_QUAXLY_NORMAL";
  data: V0912_pokemon_quaxly_normaldata;
}
export interface V0913_pokemon_quaxwelldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0913_pokemon_quaxwelldata {
  pokemonSettings: V0913_pokemon_quaxwelldatapokemonsettings;
  templateId: string;
}
export interface V0913_pokemon_quaxwellEntry {
  templateId: "V0913_POKEMON_QUAXWELL";
  data: V0913_pokemon_quaxwelldata;
}
export interface V0913_pokemon_quaxwell_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0913_pokemon_quaxwell_normaldata {
  pokemonSettings: V0913_pokemon_quaxwell_normaldatapokemonsettings;
  templateId: string;
}
export interface V0913_pokemon_quaxwell_normalEntry {
  templateId: "V0913_POKEMON_QUAXWELL_NORMAL";
  data: V0913_pokemon_quaxwell_normaldata;
}
export interface V0914_pokemon_quaquavaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0914_pokemon_quaquavaldata {
  pokemonSettings: V0914_pokemon_quaquavaldatapokemonsettings;
  templateId: string;
}
export interface V0914_pokemon_quaquavalEntry {
  templateId: "V0914_POKEMON_QUAQUAVAL";
  data: V0914_pokemon_quaquavaldata;
}
export interface V0914_pokemon_quaquaval_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0914_pokemon_quaquaval_normaldata {
  pokemonSettings: V0914_pokemon_quaquaval_normaldatapokemonsettings;
  templateId: string;
}
export interface V0914_pokemon_quaquaval_normalEntry {
  templateId: "V0914_POKEMON_QUAQUAVAL_NORMAL";
  data: V0914_pokemon_quaquaval_normaldata;
}
export interface V0915_pokemon_lechonkdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  genderRequirement: string;
}
export interface V0915_pokemon_lechonkdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0915_pokemon_lechonkdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0915_pokemon_lechonkdata {
  pokemonSettings: V0915_pokemon_lechonkdatapokemonsettings;
  templateId: string;
}
export interface V0915_pokemon_lechonkEntry {
  templateId: "V0915_POKEMON_LECHONK";
  data: V0915_pokemon_lechonkdata;
}
export interface V0915_pokemon_lechonk_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0915_pokemon_lechonkdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0915_pokemon_lechonk_normaldata {
  pokemonSettings: V0915_pokemon_lechonk_normaldatapokemonsettings;
  templateId: string;
}
export interface V0915_pokemon_lechonk_normalEntry {
  templateId: "V0915_POKEMON_LECHONK_NORMAL";
  data: V0915_pokemon_lechonk_normaldata;
}
export interface V0916_pokemon_oinkolognedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0916_pokemon_oinkolognedata {
  pokemonSettings: V0916_pokemon_oinkolognedatapokemonsettings;
  templateId: string;
}
export interface V0916_pokemon_oinkologneEntry {
  templateId: "V0916_POKEMON_OINKOLOGNE";
  data: V0916_pokemon_oinkolognedata;
}
export interface V0917_pokemon_tarountuladatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0917_pokemon_tarountuladata {
  pokemonSettings: V0917_pokemon_tarountuladatapokemonsettings;
  templateId: string;
}
export interface V0917_pokemon_tarountulaEntry {
  templateId: "V0917_POKEMON_TAROUNTULA";
  data: V0917_pokemon_tarountuladata;
}
export interface V0917_pokemon_tarountula_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0917_pokemon_tarountula_normaldata {
  pokemonSettings: V0917_pokemon_tarountula_normaldatapokemonsettings;
  templateId: string;
}
export interface V0917_pokemon_tarountula_normalEntry {
  templateId: "V0917_POKEMON_TAROUNTULA_NORMAL";
  data: V0917_pokemon_tarountula_normaldata;
}
export interface V0918_pokemon_spidopsdatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0918_pokemon_spidopsdatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0918_pokemon_spidopsdata {
  pokemonSettings: V0918_pokemon_spidopsdatapokemonsettings;
  templateId: string;
}
export interface V0918_pokemon_spidopsEntry {
  templateId: "V0918_POKEMON_SPIDOPS";
  data: V0918_pokemon_spidopsdata;
}
export interface V0918_pokemon_spidops_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0918_pokemon_spidops_normaldata {
  pokemonSettings: V0918_pokemon_spidops_normaldatapokemonsettings;
  templateId: string;
}
export interface V0918_pokemon_spidops_normalEntry {
  templateId: "V0918_POKEMON_SPIDOPS_NORMAL";
  data: V0918_pokemon_spidops_normaldata;
}
export interface V0920_pokemon_lokixdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0920_pokemon_lokixdata {
  pokemonSettings: V0920_pokemon_lokixdatapokemonsettings;
  templateId: string;
}
export interface V0920_pokemon_lokixEntry {
  templateId: "V0920_POKEMON_LOKIX";
  data: V0920_pokemon_lokixdata;
}
export interface V0920_pokemon_lokix_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0920_pokemon_lokix_normaldata {
  pokemonSettings: V0920_pokemon_lokix_normaldatapokemonsettings;
  templateId: string;
}
export interface V0920_pokemon_lokix_normalEntry {
  templateId: "V0920_POKEMON_LOKIX_NORMAL";
  data: V0920_pokemon_lokix_normaldata;
}
export interface V0921_pokemon_pawmidatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0921_pokemon_pawmidata {
  pokemonSettings: V0921_pokemon_pawmidatapokemonsettings;
  templateId: string;
}
export interface V0921_pokemon_pawmiEntry {
  templateId: "V0921_POKEMON_PAWMI";
  data: V0921_pokemon_pawmidata;
}
export interface V0921_pokemon_pawmi_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0921_pokemon_pawmi_normaldata {
  pokemonSettings: V0921_pokemon_pawmi_normaldatapokemonsettings;
  templateId: string;
}
export interface V0921_pokemon_pawmi_normalEntry {
  templateId: "V0921_POKEMON_PAWMI_NORMAL";
  data: V0921_pokemon_pawmi_normaldata;
}
export interface V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0922_pokemon_pawmodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0922_pokemon_pawmodata {
  pokemonSettings: V0922_pokemon_pawmodatapokemonsettings;
  templateId: string;
}
export interface V0922_pokemon_pawmoEntry {
  templateId: "V0922_POKEMON_PAWMO";
  data: V0922_pokemon_pawmodata;
}
export interface V0922_pokemon_pawmo_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0922_pokemon_pawmo_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0922_pokemon_pawmo_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0922_pokemon_pawmo_normaldata {
  pokemonSettings: V0922_pokemon_pawmo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0922_pokemon_pawmo_normalEntry {
  templateId: "V0922_POKEMON_PAWMO_NORMAL";
  data: V0922_pokemon_pawmo_normaldata;
}
export interface V0924_pokemon_tandemausdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionLikelihoodWeight: number;
  form: string;
}
export interface V0924_pokemon_tandemausdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0924_pokemon_tandemausdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0924_pokemon_tandemausdata {
  pokemonSettings: V0924_pokemon_tandemausdatapokemonsettings;
  templateId: string;
}
export interface V0924_pokemon_tandemausEntry {
  templateId: "V0924_POKEMON_TANDEMAUS";
  data: V0924_pokemon_tandemausdata;
}
export interface V0924_pokemon_tandemaus_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0924_pokemon_tandemausdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0924_pokemon_tandemaus_normaldata {
  pokemonSettings: V0924_pokemon_tandemaus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0924_pokemon_tandemaus_normalEntry {
  templateId: "V0924_POKEMON_TANDEMAUS_NORMAL";
  data: V0924_pokemon_tandemaus_normaldata;
}
export interface V0926_pokemon_fidoughdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0926_pokemon_fidoughdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0926_pokemon_fidoughdata {
  pokemonSettings: V0926_pokemon_fidoughdatapokemonsettings;
  templateId: string;
}
export interface V0926_pokemon_fidoughEntry {
  templateId: "V0926_POKEMON_FIDOUGH";
  data: V0926_pokemon_fidoughdata;
}
export interface V0926_pokemon_fidough_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0926_pokemon_fidough_normaldata {
  pokemonSettings: V0926_pokemon_fidough_normaldatapokemonsettings;
  templateId: string;
}
export interface V0926_pokemon_fidough_normalEntry {
  templateId: "V0926_POKEMON_FIDOUGH_NORMAL";
  data: V0926_pokemon_fidough_normaldata;
}
export interface V0927_pokemon_dachsbundatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0927_pokemon_dachsbundata {
  pokemonSettings: V0927_pokemon_dachsbundatapokemonsettings;
  templateId: string;
}
export interface V0927_pokemon_dachsbunEntry {
  templateId: "V0927_POKEMON_DACHSBUN";
  data: V0927_pokemon_dachsbundata;
}
export interface V0928_pokemon_smolivdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0928_pokemon_smolivdata {
  pokemonSettings: V0928_pokemon_smolivdatapokemonsettings;
  templateId: string;
}
export interface V0928_pokemon_smolivEntry {
  templateId: "V0928_POKEMON_SMOLIV";
  data: V0928_pokemon_smolivdata;
}
export interface V0928_pokemon_smoliv_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0928_pokemon_smoliv_normaldata {
  pokemonSettings: V0928_pokemon_smoliv_normaldatapokemonsettings;
  templateId: string;
}
export interface V0928_pokemon_smoliv_normalEntry {
  templateId: "V0928_POKEMON_SMOLIV_NORMAL";
  data: V0928_pokemon_smoliv_normaldata;
}
export interface V0929_pokemon_dollivdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0929_pokemon_dollivdata {
  pokemonSettings: V0929_pokemon_dollivdatapokemonsettings;
  templateId: string;
}
export interface V0929_pokemon_dollivEntry {
  templateId: "V0929_POKEMON_DOLLIV";
  data: V0929_pokemon_dollivdata;
}
export interface V0929_pokemon_dolliv_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0929_pokemon_dolliv_normaldata {
  pokemonSettings: V0929_pokemon_dolliv_normaldatapokemonsettings;
  templateId: string;
}
export interface V0929_pokemon_dolliv_normalEntry {
  templateId: "V0929_POKEMON_DOLLIV_NORMAL";
  data: V0929_pokemon_dolliv_normaldata;
}
export interface V0930_pokemon_arbolivadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0930_pokemon_arbolivadata {
  pokemonSettings: V0930_pokemon_arbolivadatapokemonsettings;
  templateId: string;
}
export interface V0930_pokemon_arbolivaEntry {
  templateId: "V0930_POKEMON_ARBOLIVA";
  data: V0930_pokemon_arbolivadata;
}
export interface V0930_pokemon_arboliva_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0930_pokemon_arboliva_normaldata {
  pokemonSettings: V0930_pokemon_arboliva_normaldatapokemonsettings;
  templateId: string;
}
export interface V0930_pokemon_arboliva_normalEntry {
  templateId: "V0930_POKEMON_ARBOLIVA_NORMAL";
  data: V0930_pokemon_arboliva_normaldata;
}
export interface V0932_pokemon_naclidatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0932_pokemon_naclidata {
  pokemonSettings: V0932_pokemon_naclidatapokemonsettings;
  templateId: string;
}
export interface V0932_pokemon_nacliEntry {
  templateId: "V0932_POKEMON_NACLI";
  data: V0932_pokemon_naclidata;
}
export interface V0932_pokemon_nacli_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0932_pokemon_nacli_normaldata {
  pokemonSettings: V0932_pokemon_nacli_normaldatapokemonsettings;
  templateId: string;
}
export interface V0932_pokemon_nacli_normalEntry {
  templateId: "V0932_POKEMON_NACLI_NORMAL";
  data: V0932_pokemon_nacli_normaldata;
}
export interface V0933_pokemon_naclstackdatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0933_pokemon_naclstackdata {
  pokemonSettings: V0933_pokemon_naclstackdatapokemonsettings;
  templateId: string;
}
export interface V0933_pokemon_naclstackEntry {
  templateId: "V0933_POKEMON_NACLSTACK";
  data: V0933_pokemon_naclstackdata;
}
export interface V0933_pokemon_naclstack_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0933_pokemon_naclstack_normaldata {
  pokemonSettings: V0933_pokemon_naclstack_normaldatapokemonsettings;
  templateId: string;
}
export interface V0933_pokemon_naclstack_normalEntry {
  templateId: "V0933_POKEMON_NACLSTACK_NORMAL";
  data: V0933_pokemon_naclstack_normaldata;
}
export interface V0934_pokemon_garganacldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0934_pokemon_garganacldata {
  pokemonSettings: V0934_pokemon_garganacldatapokemonsettings;
  templateId: string;
}
export interface V0934_pokemon_garganaclEntry {
  templateId: "V0934_POKEMON_GARGANACL";
  data: V0934_pokemon_garganacldata;
}
export interface V0934_pokemon_garganacl_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0934_pokemon_garganacl_normaldata {
  pokemonSettings: V0934_pokemon_garganacl_normaldatapokemonsettings;
  templateId: string;
}
export interface V0934_pokemon_garganacl_normalEntry {
  templateId: "V0934_POKEMON_GARGANACL_NORMAL";
  data: V0934_pokemon_garganacl_normaldata;
}
export interface V0935_pokemon_charcadetdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  priority: number;
  questDisplay: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0935_pokemon_charcadetdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0935_pokemon_charcadetdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0935_pokemon_charcadetdata {
  pokemonSettings: V0935_pokemon_charcadetdatapokemonsettings;
  templateId: string;
}
export interface V0935_pokemon_charcadetEntry {
  templateId: "V0935_POKEMON_CHARCADET";
  data: V0935_pokemon_charcadetdata;
}
export interface V0935_pokemon_charcadet_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  priority: number;
  questDisplay: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0935_pokemon_charcadet_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0935_pokemon_charcadet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0935_pokemon_charcadet_normaldata {
  pokemonSettings: V0935_pokemon_charcadet_normaldatapokemonsettings;
  templateId: string;
}
export interface V0935_pokemon_charcadet_normalEntry {
  templateId: "V0935_POKEMON_CHARCADET_NORMAL";
  data: V0935_pokemon_charcadet_normaldata;
}
export interface V0938_pokemon_tadbulbdatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0938_pokemon_tadbulbdatapokemonsettings {
  breadTierGroup: string;
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0938_pokemon_tadbulbdata {
  pokemonSettings: V0938_pokemon_tadbulbdatapokemonsettings;
  templateId: string;
}
export interface V0938_pokemon_tadbulbEntry {
  templateId: "V0938_POKEMON_TADBULB";
  data: V0938_pokemon_tadbulbdata;
}
export interface V0938_pokemon_tadbulb_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0938_pokemon_tadbulb_normaldata {
  pokemonSettings: V0938_pokemon_tadbulb_normaldatapokemonsettings;
  templateId: string;
}
export interface V0938_pokemon_tadbulb_normalEntry {
  templateId: "V0938_POKEMON_TADBULB_NORMAL";
  data: V0938_pokemon_tadbulb_normaldata;
}
export interface V0939_pokemon_belliboltdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0939_pokemon_belliboltdata {
  pokemonSettings: V0939_pokemon_belliboltdatapokemonsettings;
  templateId: string;
}
export interface V0939_pokemon_belliboltEntry {
  templateId: "V0939_POKEMON_BELLIBOLT";
  data: V0939_pokemon_belliboltdata;
}
export interface V0939_pokemon_bellibolt_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0939_pokemon_bellibolt_normaldata {
  pokemonSettings: V0939_pokemon_bellibolt_normaldatapokemonsettings;
  templateId: string;
}
export interface V0939_pokemon_bellibolt_normalEntry {
  templateId: "V0939_POKEMON_BELLIBOLT_NORMAL";
  data: V0939_pokemon_bellibolt_normaldata;
}
export interface V0940_pokemon_wattreldatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0940_pokemon_wattreldata {
  pokemonSettings: V0940_pokemon_wattreldatapokemonsettings;
  templateId: string;
}
export interface V0940_pokemon_wattrelEntry {
  templateId: "V0940_POKEMON_WATTREL";
  data: V0940_pokemon_wattreldata;
}
export interface V0940_pokemon_wattrel_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0940_pokemon_wattrel_normaldata {
  pokemonSettings: V0940_pokemon_wattrel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0940_pokemon_wattrel_normalEntry {
  templateId: "V0940_POKEMON_WATTREL_NORMAL";
  data: V0940_pokemon_wattrel_normaldata;
}
export interface V0941_pokemon_kilowattreldatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0941_pokemon_kilowattreldata {
  pokemonSettings: V0941_pokemon_kilowattreldatapokemonsettings;
  templateId: string;
}
export interface V0941_pokemon_kilowattrelEntry {
  templateId: "V0941_POKEMON_KILOWATTREL";
  data: V0941_pokemon_kilowattreldata;
}
export interface V0941_pokemon_kilowattrel_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0941_pokemon_kilowattrel_normaldata {
  pokemonSettings: V0941_pokemon_kilowattrel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0941_pokemon_kilowattrel_normalEntry {
  templateId: "V0941_POKEMON_KILOWATTREL_NORMAL";
  data: V0941_pokemon_kilowattrel_normaldata;
}
export interface V0944_pokemon_shroodledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0944_pokemon_shroodledata {
  pokemonSettings: V0944_pokemon_shroodledatapokemonsettings;
  templateId: string;
}
export interface V0944_pokemon_shroodleEntry {
  templateId: "V0944_POKEMON_SHROODLE";
  data: V0944_pokemon_shroodledata;
}
export interface V0944_pokemon_shroodle_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0944_pokemon_shroodle_normaldata {
  pokemonSettings: V0944_pokemon_shroodle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0944_pokemon_shroodle_normalEntry {
  templateId: "V0944_POKEMON_SHROODLE_NORMAL";
  data: V0944_pokemon_shroodle_normaldata;
}
export interface V0945_pokemon_grafaiaidatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0945_pokemon_grafaiaidata {
  pokemonSettings: V0945_pokemon_grafaiaidatapokemonsettings;
  templateId: string;
}
export interface V0945_pokemon_grafaiaiEntry {
  templateId: "V0945_POKEMON_GRAFAIAI";
  data: V0945_pokemon_grafaiaidata;
}
export interface V0945_pokemon_grafaiai_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0945_pokemon_grafaiai_normaldata {
  pokemonSettings: V0945_pokemon_grafaiai_normaldatapokemonsettings;
  templateId: string;
}
export interface V0945_pokemon_grafaiai_normalEntry {
  templateId: "V0945_POKEMON_GRAFAIAI_NORMAL";
  data: V0945_pokemon_grafaiai_normaldata;
}
export interface V0946_pokemon_bramblindatapokemonsettingsencounter {
  attackProbability: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0946_pokemon_bramblindatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0946_pokemon_bramblindatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0946_pokemon_bramblindata {
  pokemonSettings: V0946_pokemon_bramblindatapokemonsettings;
  templateId: string;
}
export interface V0946_pokemon_bramblinEntry {
  templateId: "V0946_POKEMON_BRAMBLIN";
  data: V0946_pokemon_bramblindata;
}
export interface V0946_pokemon_bramblin_normaldatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0946_pokemon_bramblindatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0946_pokemon_bramblin_normaldata {
  pokemonSettings: V0946_pokemon_bramblin_normaldatapokemonsettings;
  templateId: string;
}
export interface V0946_pokemon_bramblin_normalEntry {
  templateId: "V0946_POKEMON_BRAMBLIN_NORMAL";
  data: V0946_pokemon_bramblin_normaldata;
}
export interface V0948_pokemon_toedscooldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0948_pokemon_toedscooldata {
  pokemonSettings: V0948_pokemon_toedscooldatapokemonsettings;
  templateId: string;
}
export interface V0948_pokemon_toedscoolEntry {
  templateId: "V0948_POKEMON_TOEDSCOOL";
  data: V0948_pokemon_toedscooldata;
}
export interface V0948_pokemon_toedscool_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0948_pokemon_toedscool_normaldata {
  pokemonSettings: V0948_pokemon_toedscool_normaldatapokemonsettings;
  templateId: string;
}
export interface V0948_pokemon_toedscool_normalEntry {
  templateId: "V0948_POKEMON_TOEDSCOOL_NORMAL";
  data: V0948_pokemon_toedscool_normaldata;
}
export interface V0949_pokemon_toedscrueldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0949_pokemon_toedscrueldata {
  pokemonSettings: V0949_pokemon_toedscrueldatapokemonsettings;
  templateId: string;
}
export interface V0949_pokemon_toedscruelEntry {
  templateId: "V0949_POKEMON_TOEDSCRUEL";
  data: V0949_pokemon_toedscrueldata;
}
export interface V0949_pokemon_toedscruel_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0949_pokemon_toedscruel_normaldata {
  pokemonSettings: V0949_pokemon_toedscruel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0949_pokemon_toedscruel_normalEntry {
  templateId: "V0949_POKEMON_TOEDSCRUEL_NORMAL";
  data: V0949_pokemon_toedscruel_normaldata;
}
export interface V0950_pokemon_klawfdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0950_pokemon_klawfdata {
  pokemonSettings: V0950_pokemon_klawfdatapokemonsettings;
  templateId: string;
}
export interface V0950_pokemon_klawfEntry {
  templateId: "V0950_POKEMON_KLAWF";
  data: V0950_pokemon_klawfdata;
}
export interface V0950_pokemon_klawf_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0950_pokemon_klawf_normaldata {
  pokemonSettings: V0950_pokemon_klawf_normaldatapokemonsettings;
  templateId: string;
}
export interface V0950_pokemon_klawf_normalEntry {
  templateId: "V0950_POKEMON_KLAWF_NORMAL";
  data: V0950_pokemon_klawf_normaldata;
}
export interface V0953_pokemon_rellordatapokemonsettingsencounter {
  attackProbability: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0953_pokemon_rellordatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0953_pokemon_rellordatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0953_pokemon_rellordata {
  pokemonSettings: V0953_pokemon_rellordatapokemonsettings;
  templateId: string;
}
export interface V0953_pokemon_rellorEntry {
  templateId: "V0953_POKEMON_RELLOR";
  data: V0953_pokemon_rellordata;
}
export interface V0953_pokemon_rellor_normaldatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0953_pokemon_rellordatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0953_pokemon_rellor_normaldata {
  pokemonSettings: V0953_pokemon_rellor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0953_pokemon_rellor_normalEntry {
  templateId: "V0953_POKEMON_RELLOR_NORMAL";
  data: V0953_pokemon_rellor_normaldata;
}
export interface V0957_pokemon_tinkatinkdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0957_pokemon_tinkatinkdata {
  pokemonSettings: V0957_pokemon_tinkatinkdatapokemonsettings;
  templateId: string;
}
export interface V0957_pokemon_tinkatinkEntry {
  templateId: "V0957_POKEMON_TINKATINK";
  data: V0957_pokemon_tinkatinkdata;
}
export interface V0957_pokemon_tinkatink_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0957_pokemon_tinkatink_normaldata {
  pokemonSettings: V0957_pokemon_tinkatink_normaldatapokemonsettings;
  templateId: string;
}
export interface V0957_pokemon_tinkatink_normalEntry {
  templateId: "V0957_POKEMON_TINKATINK_NORMAL";
  data: V0957_pokemon_tinkatink_normaldata;
}
export interface V0958_pokemon_tinkatuffdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0958_pokemon_tinkatuffdata {
  pokemonSettings: V0958_pokemon_tinkatuffdatapokemonsettings;
  templateId: string;
}
export interface V0958_pokemon_tinkatuffEntry {
  templateId: "V0958_POKEMON_TINKATUFF";
  data: V0958_pokemon_tinkatuffdata;
}
export interface V0958_pokemon_tinkatuff_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0958_pokemon_tinkatuff_normaldata {
  pokemonSettings: V0958_pokemon_tinkatuff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0958_pokemon_tinkatuff_normalEntry {
  templateId: "V0958_POKEMON_TINKATUFF_NORMAL";
  data: V0958_pokemon_tinkatuff_normaldata;
}
export interface V0959_pokemon_tinkatondatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0959_pokemon_tinkatondata {
  pokemonSettings: V0959_pokemon_tinkatondatapokemonsettings;
  templateId: string;
}
export interface V0959_pokemon_tinkatonEntry {
  templateId: "V0959_POKEMON_TINKATON";
  data: V0959_pokemon_tinkatondata;
}
export interface V0959_pokemon_tinkaton_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0959_pokemon_tinkaton_normaldata {
  pokemonSettings: V0959_pokemon_tinkaton_normaldatapokemonsettings;
  templateId: string;
}
export interface V0959_pokemon_tinkaton_normalEntry {
  templateId: "V0959_POKEMON_TINKATON_NORMAL";
  data: V0959_pokemon_tinkaton_normaldata;
}
export interface V0960_pokemon_wiglettdatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0960_pokemon_wiglettdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0960_pokemon_wiglettdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0960_pokemon_wiglettdata {
  pokemonSettings: V0960_pokemon_wiglettdatapokemonsettings;
  templateId: string;
}
export interface V0960_pokemon_wiglettEntry {
  templateId: "V0960_POKEMON_WIGLETT";
  data: V0960_pokemon_wiglettdata;
}
export interface V0960_pokemon_wiglett_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0960_pokemon_wiglettdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0960_pokemon_wiglett_normaldata {
  pokemonSettings: V0960_pokemon_wiglett_normaldatapokemonsettings;
  templateId: string;
}
export interface V0960_pokemon_wiglett_normalEntry {
  templateId: "V0960_POKEMON_WIGLETT_NORMAL";
  data: V0960_pokemon_wiglett_normaldata;
}
export interface V0961_pokemon_wugtriodatapokemonsettingsencounter {
  attackProbability: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
}
export interface V0961_pokemon_wugtriodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0961_pokemon_wugtriodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0961_pokemon_wugtriodata {
  pokemonSettings: V0961_pokemon_wugtriodatapokemonsettings;
  templateId: string;
}
export interface V0961_pokemon_wugtrioEntry {
  templateId: "V0961_POKEMON_WUGTRIO";
  data: V0961_pokemon_wugtriodata;
}
export interface V0961_pokemon_wugtrio_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0961_pokemon_wugtriodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0961_pokemon_wugtrio_normaldata {
  pokemonSettings: V0961_pokemon_wugtrio_normaldatapokemonsettings;
  templateId: string;
}
export interface V0961_pokemon_wugtrio_normalEntry {
  templateId: "V0961_POKEMON_WUGTRIO_NORMAL";
  data: V0961_pokemon_wugtrio_normaldata;
}
export interface V0962_pokemon_bombirdierdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0962_pokemon_bombirdierdata {
  pokemonSettings: V0962_pokemon_bombirdierdatapokemonsettings;
  templateId: string;
}
export interface V0962_pokemon_bombirdierEntry {
  templateId: "V0962_POKEMON_BOMBIRDIER";
  data: V0962_pokemon_bombirdierdata;
}
export interface V0962_pokemon_bombirdier_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0962_pokemon_bombirdier_normaldata {
  pokemonSettings: V0962_pokemon_bombirdier_normaldatapokemonsettings;
  templateId: string;
}
export interface V0962_pokemon_bombirdier_normalEntry {
  templateId: "V0962_POKEMON_BOMBIRDIER_NORMAL";
  data: V0962_pokemon_bombirdier_normaldata;
}
export interface V0965_pokemon_varoomdatapokemonsettingsencounter {
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  movementType: string;
}
export interface V0965_pokemon_varoomdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0965_pokemon_varoomdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0965_pokemon_varoomdata {
  pokemonSettings: V0965_pokemon_varoomdatapokemonsettings;
  templateId: string;
}
export interface V0965_pokemon_varoomEntry {
  templateId: "V0965_POKEMON_VAROOM";
  data: V0965_pokemon_varoomdata;
}
export interface V0965_pokemon_varoom_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0965_pokemon_varoomdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0965_pokemon_varoom_normaldata {
  pokemonSettings: V0965_pokemon_varoom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0965_pokemon_varoom_normalEntry {
  templateId: "V0965_POKEMON_VAROOM_NORMAL";
  data: V0965_pokemon_varoom_normaldata;
}
export interface V0966_pokemon_revavroomdatapokemonsettingsencounter {
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  movementType: string;
}
export interface V0966_pokemon_revavroomdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0966_pokemon_revavroomdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0966_pokemon_revavroomdata {
  pokemonSettings: V0966_pokemon_revavroomdatapokemonsettings;
  templateId: string;
}
export interface V0966_pokemon_revavroomEntry {
  templateId: "V0966_POKEMON_REVAVROOM";
  data: V0966_pokemon_revavroomdata;
}
export interface V0966_pokemon_revavroom_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0966_pokemon_revavroomdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0966_pokemon_revavroom_normaldata {
  pokemonSettings: V0966_pokemon_revavroom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0966_pokemon_revavroom_normalEntry {
  templateId: "V0966_POKEMON_REVAVROOM_NORMAL";
  data: V0966_pokemon_revavroom_normaldata;
}
export interface V0968_pokemon_orthwormdatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0960_pokemon_wiglettdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0968_pokemon_orthwormdata {
  pokemonSettings: V0968_pokemon_orthwormdatapokemonsettings;
  templateId: string;
}
export interface V0968_pokemon_orthwormEntry {
  templateId: "V0968_POKEMON_ORTHWORM";
  data: V0968_pokemon_orthwormdata;
}
export interface V0968_pokemon_orthworm_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0960_pokemon_wiglettdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0968_pokemon_orthworm_normaldata {
  pokemonSettings: V0968_pokemon_orthworm_normaldatapokemonsettings;
  templateId: string;
}
export interface V0968_pokemon_orthworm_normalEntry {
  templateId: "V0968_POKEMON_ORTHWORM_NORMAL";
  data: V0968_pokemon_orthworm_normaldata;
}
export interface V0969_pokemon_glimmetdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0969_pokemon_glimmetdata {
  pokemonSettings: V0969_pokemon_glimmetdatapokemonsettings;
  templateId: string;
}
export interface V0969_pokemon_glimmetEntry {
  templateId: "V0969_POKEMON_GLIMMET";
  data: V0969_pokemon_glimmetdata;
}
export interface V0969_pokemon_glimmet_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0969_pokemon_glimmet_normaldata {
  pokemonSettings: V0969_pokemon_glimmet_normaldatapokemonsettings;
  templateId: string;
}
export interface V0969_pokemon_glimmet_normalEntry {
  templateId: "V0969_POKEMON_GLIMMET_NORMAL";
  data: V0969_pokemon_glimmet_normaldata;
}
export interface V0970_pokemon_glimmoradatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0970_pokemon_glimmoradata {
  pokemonSettings: V0970_pokemon_glimmoradatapokemonsettings;
  templateId: string;
}
export interface V0970_pokemon_glimmoraEntry {
  templateId: "V0970_POKEMON_GLIMMORA";
  data: V0970_pokemon_glimmoradata;
}
export interface V0970_pokemon_glimmora_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0970_pokemon_glimmora_normaldata {
  pokemonSettings: V0970_pokemon_glimmora_normaldatapokemonsettings;
  templateId: string;
}
export interface V0970_pokemon_glimmora_normalEntry {
  templateId: "V0970_POKEMON_GLIMMORA_NORMAL";
  data: V0970_pokemon_glimmora_normaldata;
}
export interface V0971_pokemon_greavarddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0971_pokemon_greavarddata {
  pokemonSettings: V0971_pokemon_greavarddatapokemonsettings;
  templateId: string;
}
export interface V0971_pokemon_greavardEntry {
  templateId: "V0971_POKEMON_GREAVARD";
  data: V0971_pokemon_greavarddata;
}
export interface V0971_pokemon_greavard_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0971_pokemon_greavard_normaldata {
  pokemonSettings: V0971_pokemon_greavard_normaldatapokemonsettings;
  templateId: string;
}
export interface V0971_pokemon_greavard_normalEntry {
  templateId: "V0971_POKEMON_GREAVARD_NORMAL";
  data: V0971_pokemon_greavard_normaldata;
}
export interface V0972_pokemon_houndstonedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0972_pokemon_houndstonedata {
  pokemonSettings: V0972_pokemon_houndstonedatapokemonsettings;
  templateId: string;
}
export interface V0972_pokemon_houndstoneEntry {
  templateId: "V0972_POKEMON_HOUNDSTONE";
  data: V0972_pokemon_houndstonedata;
}
export interface V0972_pokemon_houndstone_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0972_pokemon_houndstone_normaldata {
  pokemonSettings: V0972_pokemon_houndstone_normaldatapokemonsettings;
  templateId: string;
}
export interface V0972_pokemon_houndstone_normalEntry {
  templateId: "V0972_POKEMON_HOUNDSTONE_NORMAL";
  data: V0972_pokemon_houndstone_normaldata;
}
export interface V0973_pokemon_flamigodatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0973_pokemon_flamigodatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0973_pokemon_flamigodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0973_pokemon_flamigodata {
  pokemonSettings: V0973_pokemon_flamigodatapokemonsettings;
  templateId: string;
}
export interface V0973_pokemon_flamigoEntry {
  templateId: "V0973_POKEMON_FLAMIGO";
  data: V0973_pokemon_flamigodata;
}
export interface V0973_pokemon_flamigo_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0973_pokemon_flamigodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0973_pokemon_flamigo_normaldata {
  pokemonSettings: V0973_pokemon_flamigo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0973_pokemon_flamigo_normalEntry {
  templateId: "V0973_POKEMON_FLAMIGO_NORMAL";
  data: V0973_pokemon_flamigo_normaldata;
}
export interface V0974_pokemon_cetoddledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0974_pokemon_cetoddledata {
  pokemonSettings: V0974_pokemon_cetoddledatapokemonsettings;
  templateId: string;
}
export interface V0974_pokemon_cetoddleEntry {
  templateId: "V0974_POKEMON_CETODDLE";
  data: V0974_pokemon_cetoddledata;
}
export interface V0974_pokemon_cetoddle_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0974_pokemon_cetoddle_normaldata {
  pokemonSettings: V0974_pokemon_cetoddle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0974_pokemon_cetoddle_normalEntry {
  templateId: "V0974_POKEMON_CETODDLE_NORMAL";
  data: V0974_pokemon_cetoddle_normaldata;
}
export interface V0975_pokemon_cetitandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0975_pokemon_cetitandata {
  pokemonSettings: V0975_pokemon_cetitandatapokemonsettings;
  templateId: string;
}
export interface V0975_pokemon_cetitanEntry {
  templateId: "V0975_POKEMON_CETITAN";
  data: V0975_pokemon_cetitandata;
}
export interface V0975_pokemon_cetitan_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0918_pokemon_spidopsdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0975_pokemon_cetitan_normaldata {
  pokemonSettings: V0975_pokemon_cetitan_normaldatapokemonsettings;
  templateId: string;
}
export interface V0975_pokemon_cetitan_normalEntry {
  templateId: "V0975_POKEMON_CETITAN_NORMAL";
  data: V0975_pokemon_cetitan_normaldata;
}
export interface V0977_pokemon_dondozodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0977_pokemon_dondozodata {
  pokemonSettings: V0977_pokemon_dondozodatapokemonsettings;
  templateId: string;
}
export interface V0977_pokemon_dondozoEntry {
  templateId: "V0977_POKEMON_DONDOZO";
  data: V0977_pokemon_dondozodata;
}
export interface V0977_pokemon_dondozo_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0926_pokemon_fidoughdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0977_pokemon_dondozo_normaldata {
  pokemonSettings: V0977_pokemon_dondozo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0977_pokemon_dondozo_normalEntry {
  templateId: "V0977_POKEMON_DONDOZO_NORMAL";
  data: V0977_pokemon_dondozo_normaldata;
}
export interface V0978_pokemon_tatsugiridatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0978_pokemon_tatsugiridata {
  pokemonSettings: V0978_pokemon_tatsugiridatapokemonsettings;
  templateId: string;
}
export interface V0978_pokemon_tatsugiriEntry {
  templateId: "V0978_POKEMON_TATSUGIRI";
  data: V0978_pokemon_tatsugiridata;
}
export interface V0979_pokemon_annihilapedatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0979_pokemon_annihilapedatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0979_pokemon_annihilapedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0979_pokemon_annihilapedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  shadow: V0979_pokemon_annihilapedatapokemonsettingsshadow;
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0979_pokemon_annihilapedata {
  pokemonSettings: V0979_pokemon_annihilapedatapokemonsettings;
  templateId: string;
}
export interface V0979_pokemon_annihilapeEntry {
  templateId: "V0979_POKEMON_ANNIHILAPE";
  data: V0979_pokemon_annihilapedata;
}
export interface V0979_pokemon_annihilape_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0979_pokemon_annihilapedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  shadow: V0979_pokemon_annihilapedatapokemonsettingsshadow;
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0979_pokemon_annihilape_normaldata {
  pokemonSettings: V0979_pokemon_annihilape_normaldatapokemonsettings;
  templateId: string;
}
export interface V0979_pokemon_annihilape_normalEntry {
  templateId: "V0979_POKEMON_ANNIHILAPE_NORMAL";
  data: V0979_pokemon_annihilape_normaldata;
}
export interface V0980_pokemon_clodsiredatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0980_pokemon_clodsiredata {
  pokemonSettings: V0980_pokemon_clodsiredatapokemonsettings;
  templateId: string;
}
export interface V0980_pokemon_clodsireEntry {
  templateId: "V0980_POKEMON_CLODSIRE";
  data: V0980_pokemon_clodsiredata;
}
export interface V0980_pokemon_clodsire_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0980_pokemon_clodsire_normaldata {
  pokemonSettings: V0980_pokemon_clodsire_normaldatapokemonsettings;
  templateId: string;
}
export interface V0980_pokemon_clodsire_normalEntry {
  templateId: "V0980_POKEMON_CLODSIRE_NORMAL";
  data: V0980_pokemon_clodsire_normaldata;
}
export interface V0983_pokemon_kingambitdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0961_pokemon_wugtriodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0983_pokemon_kingambitdata {
  pokemonSettings: V0983_pokemon_kingambitdatapokemonsettings;
  templateId: string;
}
export interface V0983_pokemon_kingambitEntry {
  templateId: "V0983_POKEMON_KINGAMBIT";
  data: V0983_pokemon_kingambitdata;
}
export interface V0983_pokemon_kingambit_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0961_pokemon_wugtriodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0983_pokemon_kingambit_normaldata {
  pokemonSettings: V0983_pokemon_kingambit_normaldatapokemonsettings;
  templateId: string;
}
export interface V0983_pokemon_kingambit_normalEntry {
  templateId: "V0983_POKEMON_KINGAMBIT_NORMAL";
  data: V0983_pokemon_kingambit_normaldata;
}
export interface V0985_pokemon_screamtaildatapokemonsettingsencounter {
  attackProbability: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0985_pokemon_screamtaildatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0985_pokemon_screamtaildatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0985_pokemon_screamtaildata {
  pokemonSettings: V0985_pokemon_screamtaildatapokemonsettings;
  templateId: string;
}
export interface V0985_pokemon_screamtailEntry {
  templateId: "V0985_POKEMON_SCREAMTAIL";
  data: V0985_pokemon_screamtaildata;
}
export interface V0985_pokemon_screamtail_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0985_pokemon_screamtaildatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0985_pokemon_screamtail_normaldata {
  pokemonSettings: V0985_pokemon_screamtail_normaldatapokemonsettings;
  templateId: string;
}
export interface V0985_pokemon_screamtail_normalEntry {
  templateId: "V0985_POKEMON_SCREAMTAIL_NORMAL";
  data: V0985_pokemon_screamtail_normaldata;
}
export interface V0996_pokemon_frigibaxdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0996_pokemon_frigibaxdata {
  pokemonSettings: V0996_pokemon_frigibaxdatapokemonsettings;
  templateId: string;
}
export interface V0996_pokemon_frigibaxEntry {
  templateId: "V0996_POKEMON_FRIGIBAX";
  data: V0996_pokemon_frigibaxdata;
}
export interface V0996_pokemon_frigibax_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0909_pokemon_fuecocodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0996_pokemon_frigibax_normaldata {
  pokemonSettings: V0996_pokemon_frigibax_normaldatapokemonsettings;
  templateId: string;
}
export interface V0996_pokemon_frigibax_normalEntry {
  templateId: "V0996_POKEMON_FRIGIBAX_NORMAL";
  data: V0996_pokemon_frigibax_normaldata;
}
export interface V0997_pokemon_arctibaxdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragatodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0997_pokemon_arctibaxdata {
  pokemonSettings: V0997_pokemon_arctibaxdatapokemonsettings;
  templateId: string;
}
export interface V0997_pokemon_arctibaxEntry {
  templateId: "V0997_POKEMON_ARCTIBAX";
  data: V0997_pokemon_arctibaxdata;
}
export interface V0997_pokemon_arctibax_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0997_pokemon_arctibax_normaldata {
  pokemonSettings: V0997_pokemon_arctibax_normaldatapokemonsettings;
  templateId: string;
}
export interface V0997_pokemon_arctibax_normalEntry {
  templateId: "V0997_POKEMON_ARCTIBAX_NORMAL";
  data: V0997_pokemon_arctibax_normaldata;
}
export interface V0998_pokemon_baxcaliburdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0998_pokemon_baxcaliburdata {
  pokemonSettings: V0998_pokemon_baxcaliburdatapokemonsettings;
  templateId: string;
}
export interface V0998_pokemon_baxcaliburEntry {
  templateId: "V0998_POKEMON_BAXCALIBUR";
  data: V0998_pokemon_baxcaliburdata;
}
export interface V0998_pokemon_baxcalibur_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0907_pokemon_floragatodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0998_pokemon_baxcalibur_normaldata {
  pokemonSettings: V0998_pokemon_baxcalibur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0998_pokemon_baxcalibur_normalEntry {
  templateId: "V0998_POKEMON_BAXCALIBUR_NORMAL";
  data: V0998_pokemon_baxcalibur_normaldata;
}
export interface V0999_pokemon_gimmighouldatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0999_pokemon_gimmighouldatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
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
export interface V0999_pokemon_gimmighouldatapokemonsettingsevolutionbranchitem {
  evolution: string;
  evolutionItemRequirement: string;
  evolutionItemRequirementCost: number;
}
export interface V0999_pokemon_gimmighouldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0999_pokemon_gimmighouldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0999_pokemon_gimmighouldatapokemonsettingsencounter;
  evolutionBranch: (V0999_pokemon_gimmighouldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0999_pokemon_gimmighouldata {
  pokemonSettings: V0999_pokemon_gimmighouldatapokemonsettings;
  templateId: string;
}
export interface V0999_pokemon_gimmighoulEntry {
  templateId: "V0999_POKEMON_GIMMIGHOUL";
  data: V0999_pokemon_gimmighouldata;
}
export interface V0999_pokemon_gimmighoul_coin_a1datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0999_pokemon_gimmighouldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0999_pokemon_gimmighouldatapokemonsettingsencounter;
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0999_pokemon_gimmighoul_coin_a1data {
  pokemonSettings: V0999_pokemon_gimmighoul_coin_a1datapokemonsettings;
  templateId: string;
}
export interface V0999_pokemon_gimmighoul_coin_a1Entry {
  templateId: "V0999_POKEMON_GIMMIGHOUL_COIN_A1";
  data: V0999_pokemon_gimmighoul_coin_a1data;
}
export interface V0999_pokemon_gimmighoul_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0999_pokemon_gimmighouldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0999_pokemon_gimmighouldatapokemonsettingsencounter;
  evolutionBranch: (V0999_pokemon_gimmighouldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0999_pokemon_gimmighoul_normaldata {
  pokemonSettings: V0999_pokemon_gimmighoul_normaldatapokemonsettings;
  templateId: string;
}
export interface V0999_pokemon_gimmighoul_normalEntry {
  templateId: "V0999_POKEMON_GIMMIGHOUL_NORMAL";
  data: V0999_pokemon_gimmighoul_normaldata;
}
export interface V1000_pokemon_gholdengodatapokemonsettingsencounter {
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
export interface V1000_pokemon_gholdengodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0999_pokemon_gimmighouldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1000_pokemon_gholdengodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1000_pokemon_gholdengodata {
  pokemonSettings: V1000_pokemon_gholdengodatapokemonsettings;
  templateId: string;
}
export interface V1000_pokemon_gholdengoEntry {
  templateId: "V1000_POKEMON_GHOLDENGO";
  data: V1000_pokemon_gholdengodata;
}
export interface V1000_pokemon_gholdengo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0999_pokemon_gimmighouldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1000_pokemon_gholdengodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1000_pokemon_gholdengo_normaldata {
  pokemonSettings: V1000_pokemon_gholdengo_normaldatapokemonsettings;
  templateId: string;
}
export interface V1000_pokemon_gholdengo_normalEntry {
  templateId: "V1000_POKEMON_GHOLDENGO_NORMAL";
  data: V1000_pokemon_gholdengo_normaldata;
}
export interface V1011_pokemon_dipplindatapokemonsettingsencounter {
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
export interface V1011_pokemon_dipplindatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  questDisplay: (V0922_pokemon_pawmodatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V1011_pokemon_dipplindatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1011_pokemon_dipplindatapokemonsettingsencounter;
  evolutionBranch: (V1011_pokemon_dipplindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1011_pokemon_dipplindata {
  pokemonSettings: V1011_pokemon_dipplindatapokemonsettings;
  templateId: string;
}
export interface V1011_pokemon_dipplinEntry {
  templateId: "V1011_POKEMON_DIPPLIN";
  data: V1011_pokemon_dipplindata;
}
export interface V1011_pokemon_dipplin_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0907_pokemon_floragatodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1011_pokemon_dipplindatapokemonsettingsencounter;
  evolutionBranch: (V1011_pokemon_dipplindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1011_pokemon_dipplin_normaldata {
  pokemonSettings: V1011_pokemon_dipplin_normaldatapokemonsettings;
  templateId: string;
}
export interface V1011_pokemon_dipplin_normalEntry {
  templateId: "V1011_POKEMON_DIPPLIN_NORMAL";
  data: V1011_pokemon_dipplin_normaldata;
}
export interface V1012_pokemon_poltchageistdatapokemonsettingsencounter {
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
export interface V1012_pokemon_poltchageistdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1012_pokemon_poltchageistdatapokemonsettingsencounter;
  evolutionBranch: (V0907_pokemon_floragato_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1012_pokemon_poltchageistdata {
  pokemonSettings: V1012_pokemon_poltchageistdatapokemonsettings;
  templateId: string;
}
export interface V1012_pokemon_poltchageistEntry {
  templateId: "V1012_POKEMON_POLTCHAGEIST";
  data: V1012_pokemon_poltchageistdata;
}
export interface V1013_pokemon_sinistchadatapokemonsettingsencounter {
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
export interface V1013_pokemon_sinistchadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0938_pokemon_tadbulbdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V1013_pokemon_sinistchadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
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
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1013_pokemon_sinistchadata {
  pokemonSettings: V1013_pokemon_sinistchadatapokemonsettings;
  templateId: string;
}
export interface V1013_pokemon_sinistchaEntry {
  templateId: "V1013_POKEMON_SINISTCHA";
  data: V1013_pokemon_sinistchadata;
}
export interface V1018_pokemon_archaludondatapokemonsettingsencounter {
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
}
export interface V1018_pokemon_archaludondatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V1018_pokemon_archaludondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1018_pokemon_archaludondata {
  pokemonSettings: V1018_pokemon_archaludondatapokemonsettings;
  templateId: string;
}
export interface V1018_pokemon_archaludonEntry {
  templateId: "V1018_POKEMON_ARCHALUDON";
  data: V1018_pokemon_archaludondata;
}
export interface V1018_pokemon_archaludon_normaldatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V1018_pokemon_archaludondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1018_pokemon_archaludon_normaldata {
  pokemonSettings: V1018_pokemon_archaludon_normaldatapokemonsettings;
  templateId: string;
}
export interface V1018_pokemon_archaludon_normalEntry {
  templateId: "V1018_POKEMON_ARCHALUDON_NORMAL";
  data: V1018_pokemon_archaludon_normaldata;
}
export interface V1024_pokemon_terapagos_normaldatapokemonsettingsencounter {
  bonusXlCandyCaptureReward: number;
}
export interface V1024_pokemon_terapagos_normaldatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V1024_pokemon_terapagos_normaldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V1024_pokemon_terapagos_normaldata {
  pokemonSettings: V1024_pokemon_terapagos_normaldatapokemonsettings;
  templateId: string;
}
export interface V1024_pokemon_terapagos_normalEntry {
  templateId: "V1024_POKEMON_TERAPAGOS_NORMAL";
  data: V1024_pokemon_terapagos_normaldata;
}
export interface V1025_pokemon_pecharuntdatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V1024_pokemon_terapagos_normaldatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1025_pokemon_pecharuntdata {
  pokemonSettings: V1025_pokemon_pecharuntdatapokemonsettings;
  templateId: string;
}
export interface V1025_pokemon_pecharuntEntry {
  templateId: "V1025_POKEMON_PECHARUNT";
  data: V1025_pokemon_pecharuntdata;
}
export interface V1025_pokemon_pecharunt_normaldatapokemonsettings {
  breadTierGroup: string;
  camera: V0907_pokemon_floragatodatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V1024_pokemon_terapagos_normaldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0907_pokemon_floragatodatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0907_pokemon_floragatodatapokemonsettingsstats;
  thirdMove: V0907_pokemon_floragatodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V1025_pokemon_pecharunt_normaldata {
  pokemonSettings: V1025_pokemon_pecharunt_normaldatapokemonsettings;
  templateId: string;
}
export interface V1025_pokemon_pecharunt_normalEntry {
  templateId: "V1025_POKEMON_PECHARUNT_NORMAL";
  data: V1025_pokemon_pecharunt_normaldata;
}

export type PokemonSettingsSprigatito = PokemonSettingsShared1391<"V0906_POKEMON_SPRIGATITO", "SPRIGATITO">;
export type PokemonSettingsNymble = PokemonSettingsShared1391<"V0919_POKEMON_NYMBLE", "NYMBLE">;

export type PokemonSettingsSprigatitoNormal = PokemonSettingsShared1392<"V0906_POKEMON_SPRIGATITO_NORMAL", "SPRIGATITO_NORMAL", "SPRIGATITO">;
export type PokemonSettingsNymbleNormal = PokemonSettingsShared1392<"V0919_POKEMON_NYMBLE_NORMAL", "NYMBLE_NORMAL", "NYMBLE">;

export type PokemonSettingsSkeledirge = PokemonSettingsShared1401<"V0911_POKEMON_SKELEDIRGE", "SKELEDIRGE">;
export type PokemonSettingsPawmot = PokemonSettingsShared1401<"V0923_POKEMON_PAWMOT", "PAWMOT">;

export type PokemonSettingsSkeledirgeNormal = PokemonSettingsShared1402<"V0911_POKEMON_SKELEDIRGE_NORMAL", "SKELEDIRGE_NORMAL", "SKELEDIRGE">;
export type PokemonSettingsPawmotNormal = PokemonSettingsShared1402<"V0923_POKEMON_PAWMOT_NORMAL", "PAWMOT_NORMAL", "PAWMOT">;

export type PokemonSettingsFemale = PokemonSettingsShared1412<"V0916_POKEMON_OINKOLOGNE_FEMALE", "OINKOLOGNE_FEMALE">;
export type PokemonSettingsNormal = PokemonSettingsShared1412<"V0916_POKEMON_OINKOLOGNE_NORMAL", "OINKOLOGNE_NORMAL">;

export type PokemonSettingsMaushold = PokemonSettingsShared1130<"V0925_POKEMON_MAUSHOLD", "MAUSHOLD">;

export type PokemonSettingsMausholdFamilyOfFour = PokemonSettingsShared1131<"V0925_POKEMON_MAUSHOLD_FAMILY_OF_FOUR", "MAUSHOLD_FAMILY_OF_FOUR", "MAUSHOLD">;
export type PokemonSettingsMausholdFamilyOfThree = PokemonSettingsShared1131<"V0925_POKEMON_MAUSHOLD_FAMILY_OF_THREE", "MAUSHOLD_FAMILY_OF_THREE", "MAUSHOLD">;

export type PokemonSettingsDachsbunNormal = PokemonSettingsShared1428<"V0927_POKEMON_DACHSBUN_NORMAL", "DACHSBUN_NORMAL", "DACHSBUN">;
export type PokemonSettingsDudunsparceThree = PokemonSettingsShared1428<"V0982_POKEMON_DUDUNSPARCE_THREE", "DUDUNSPARCE_THREE", "DUDUNSPARCE">;
export type PokemonSettingsDudunsparceTwo = PokemonSettingsShared1428<"V0982_POKEMON_DUDUNSPARCE_TWO", "DUDUNSPARCE_TWO", "DUDUNSPARCE">;

export type PokemonSettingsSquawkabilly = PokemonSettingsShared1435<"V0931_POKEMON_SQUAWKABILLY", "SQUAWKABILLY">;
export type PokemonSettingsCyclizar = PokemonSettingsShared1435<"V0967_POKEMON_CYCLIZAR", "CYCLIZAR">;
export type PokemonSettingsVeluza = PokemonSettingsShared1435<"V0976_POKEMON_VELUZA", "VELUZA">;

export type PokemonSettingsSquawkabillyBlue = PokemonSettingsShared1436<"V0931_POKEMON_SQUAWKABILLY_BLUE", "SQUAWKABILLY_BLUE", "SQUAWKABILLY">;
export type PokemonSettingsSquawkabillyGreen = PokemonSettingsShared1436<"V0931_POKEMON_SQUAWKABILLY_GREEN", "SQUAWKABILLY_GREEN", "SQUAWKABILLY">;
export type PokemonSettingsSquawkabillyWhite = PokemonSettingsShared1436<"V0931_POKEMON_SQUAWKABILLY_WHITE", "SQUAWKABILLY_WHITE", "SQUAWKABILLY">;
export type PokemonSettingsSquawkabillyYellow = PokemonSettingsShared1436<"V0931_POKEMON_SQUAWKABILLY_YELLOW", "SQUAWKABILLY_YELLOW", "SQUAWKABILLY">;
export type PokemonSettingsCyclizarNormal = PokemonSettingsShared1436<"V0967_POKEMON_CYCLIZAR_NORMAL", "CYCLIZAR_NORMAL", "CYCLIZAR">;
export type PokemonSettingsVeluzaNormal = PokemonSettingsShared1436<"V0976_POKEMON_VELUZA_NORMAL", "VELUZA_NORMAL", "VELUZA">;

export type PokemonSettingsArmarouge = PokemonSettingsShared1445<"V0936_POKEMON_ARMAROUGE", "ARMAROUGE">;
export type PokemonSettingsCeruledge = PokemonSettingsShared1445<"V0937_POKEMON_CERULEDGE", "CERULEDGE">;

export type PokemonSettingsArmarougeNormal = PokemonSettingsShared1446<"V0936_POKEMON_ARMAROUGE_NORMAL", "ARMAROUGE_NORMAL", "ARMAROUGE">;
export type PokemonSettingsCeruledgeNormal = PokemonSettingsShared1446<"V0937_POKEMON_CERULEDGE_NORMAL", "CERULEDGE_NORMAL", "CERULEDGE">;

export type PokemonSettingsMaschiff = PokemonSettingsShared1455<"V0942_POKEMON_MASCHIFF", "MASCHIFF">;
export type PokemonSettingsCapsakid = PokemonSettingsShared1455<"V0951_POKEMON_CAPSAKID", "CAPSAKID">;
export type PokemonSettingsFlittle = PokemonSettingsShared1455<"V0955_POKEMON_FLITTLE", "FLITTLE">;
export type PokemonSettingsFinizen = PokemonSettingsShared1455<"V0963_POKEMON_FINIZEN", "FINIZEN">;

export type PokemonSettingsMaschiffNormal = PokemonSettingsShared1456<"V0942_POKEMON_MASCHIFF_NORMAL", "MASCHIFF_NORMAL", "MASCHIFF">;
export type PokemonSettingsCapsakidNormal = PokemonSettingsShared1456<"V0951_POKEMON_CAPSAKID_NORMAL", "CAPSAKID_NORMAL", "CAPSAKID">;
export type PokemonSettingsFlittleNormal = PokemonSettingsShared1456<"V0955_POKEMON_FLITTLE_NORMAL", "FLITTLE_NORMAL", "FLITTLE">;
export type PokemonSettingsFinizenNormal = PokemonSettingsShared1456<"V0963_POKEMON_FINIZEN_NORMAL", "FINIZEN_NORMAL", "FINIZEN">;

export type PokemonSettingsMabosstiff = PokemonSettingsShared1457<"V0943_POKEMON_MABOSSTIFF", "MABOSSTIFF">;
export type PokemonSettingsEspathra = PokemonSettingsShared1457<"V0956_POKEMON_ESPATHRA", "ESPATHRA">;
export type PokemonSettingsPalafin = PokemonSettingsShared1457<"V0964_POKEMON_PALAFIN", "PALAFIN">;
export type PokemonSettingsDudunsparce = PokemonSettingsShared1457<"V0982_POKEMON_DUDUNSPARCE", "DUDUNSPARCE">;

export type PokemonSettingsMabosstiffNormal = PokemonSettingsShared1458<"V0943_POKEMON_MABOSSTIFF_NORMAL", "MABOSSTIFF_NORMAL", "MABOSSTIFF">;
export type PokemonSettingsEspathraNormal = PokemonSettingsShared1458<"V0956_POKEMON_ESPATHRA_NORMAL", "ESPATHRA_NORMAL", "ESPATHRA">;
export type PokemonSettingsPalafinHero = PokemonSettingsShared1458<"V0964_POKEMON_PALAFIN_HERO", "PALAFIN_HERO", "PALAFIN">;
export type PokemonSettingsPalafinZero = PokemonSettingsShared1458<"V0964_POKEMON_PALAFIN_ZERO", "PALAFIN_ZERO", "PALAFIN">;

export type PokemonSettingsBrambleghast = PokemonSettingsShared1465<"V0947_POKEMON_BRAMBLEGHAST", "BRAMBLEGHAST">;
export type PokemonSettingsScovillain = PokemonSettingsShared1465<"V0952_POKEMON_SCOVILLAIN", "SCOVILLAIN">;
export type PokemonSettingsRabsca = PokemonSettingsShared1465<"V0954_POKEMON_RABSCA", "RABSCA">;
export type PokemonSettingsFarigiraf = PokemonSettingsShared1465<"V0981_POKEMON_FARIGIRAF", "FARIGIRAF">;

export type PokemonSettingsBrambleghastNormal = PokemonSettingsShared1466<"V0947_POKEMON_BRAMBLEGHAST_NORMAL", "BRAMBLEGHAST_NORMAL", "BRAMBLEGHAST">;
export type PokemonSettingsScovillainNormal = PokemonSettingsShared1466<"V0952_POKEMON_SCOVILLAIN_NORMAL", "SCOVILLAIN_NORMAL", "SCOVILLAIN">;
export type PokemonSettingsRabscaNormal = PokemonSettingsShared1466<"V0954_POKEMON_RABSCA_NORMAL", "RABSCA_NORMAL", "RABSCA">;
export type PokemonSettingsFarigirafNormal = PokemonSettingsShared1466<"V0981_POKEMON_FARIGIRAF_NORMAL", "FARIGIRAF_NORMAL", "FARIGIRAF">;

export type PokemonSettingsCurly = PokemonSettingsShared1510<"V0978_POKEMON_TATSUGIRI_CURLY", "TATSUGIRI_CURLY">;
export type PokemonSettingsDroopy = PokemonSettingsShared1510<"V0978_POKEMON_TATSUGIRI_DROOPY", "TATSUGIRI_DROOPY">;
export type PokemonSettingsStretchy = PokemonSettingsShared1510<"V0978_POKEMON_TATSUGIRI_STRETCHY", "TATSUGIRI_STRETCHY">;

export type PokemonSettingsGreattusk = PokemonSettingsShared1517<"V0984_POKEMON_GREATTUSK", "GREATTUSK">;
export type PokemonSettingsBrutebonnet = PokemonSettingsShared1517<"V0986_POKEMON_BRUTEBONNET", "BRUTEBONNET">;
export type PokemonSettingsFluttermane = PokemonSettingsShared1517<"V0987_POKEMON_FLUTTERMANE", "FLUTTERMANE">;
export type PokemonSettingsSlitherwing = PokemonSettingsShared1517<"V0988_POKEMON_SLITHERWING", "SLITHERWING">;
export type PokemonSettingsSandyshocks = PokemonSettingsShared1517<"V0989_POKEMON_SANDYSHOCKS", "SANDYSHOCKS">;
export type PokemonSettingsIrontreads = PokemonSettingsShared1517<"V0990_POKEMON_IRONTREADS", "IRONTREADS">;
export type PokemonSettingsIronbundle = PokemonSettingsShared1517<"V0991_POKEMON_IRONBUNDLE", "IRONBUNDLE">;
export type PokemonSettingsIronhands = PokemonSettingsShared1517<"V0992_POKEMON_IRONHANDS", "IRONHANDS">;
export type PokemonSettingsIronjugulis = PokemonSettingsShared1517<"V0993_POKEMON_IRONJUGULIS", "IRONJUGULIS">;
export type PokemonSettingsIronmoth = PokemonSettingsShared1517<"V0994_POKEMON_IRONMOTH", "IRONMOTH">;
export type PokemonSettingsIronthorns = PokemonSettingsShared1517<"V0995_POKEMON_IRONTHORNS", "IRONTHORNS">;
export type PokemonSettingsRoaringmoon = PokemonSettingsShared1517<"V1005_POKEMON_ROARINGMOON", "ROARINGMOON">;
export type PokemonSettingsIronvaliant = PokemonSettingsShared1517<"V1006_POKEMON_IRONVALIANT", "IRONVALIANT">;

export type PokemonSettingsGreattuskNormal = PokemonSettingsShared1518<"V0984_POKEMON_GREATTUSK_NORMAL", "GREATTUSK_NORMAL", "GREATTUSK">;
export type PokemonSettingsBrutebonnetNormal = PokemonSettingsShared1518<"V0986_POKEMON_BRUTEBONNET_NORMAL", "BRUTEBONNET_NORMAL", "BRUTEBONNET">;
export type PokemonSettingsFluttermaneNormal = PokemonSettingsShared1518<"V0987_POKEMON_FLUTTERMANE_NORMAL", "FLUTTERMANE_NORMAL", "FLUTTERMANE">;
export type PokemonSettingsSlitherwingNormal = PokemonSettingsShared1518<"V0988_POKEMON_SLITHERWING_NORMAL", "SLITHERWING_NORMAL", "SLITHERWING">;
export type PokemonSettingsSandyshocksNormal = PokemonSettingsShared1518<"V0989_POKEMON_SANDYSHOCKS_NORMAL", "SANDYSHOCKS_NORMAL", "SANDYSHOCKS">;
export type PokemonSettingsIrontreadsNormal = PokemonSettingsShared1518<"V0990_POKEMON_IRONTREADS_NORMAL", "IRONTREADS_NORMAL", "IRONTREADS">;
export type PokemonSettingsIronbundleNormal = PokemonSettingsShared1518<"V0991_POKEMON_IRONBUNDLE_NORMAL", "IRONBUNDLE_NORMAL", "IRONBUNDLE">;
export type PokemonSettingsIronhandsNormal = PokemonSettingsShared1518<"V0992_POKEMON_IRONHANDS_NORMAL", "IRONHANDS_NORMAL", "IRONHANDS">;
export type PokemonSettingsIronjugulisNormal = PokemonSettingsShared1518<"V0993_POKEMON_IRONJUGULIS_NORMAL", "IRONJUGULIS_NORMAL", "IRONJUGULIS">;
export type PokemonSettingsIronmothNormal = PokemonSettingsShared1518<"V0994_POKEMON_IRONMOTH_NORMAL", "IRONMOTH_NORMAL", "IRONMOTH">;
export type PokemonSettingsIronthornsNormal = PokemonSettingsShared1518<"V0995_POKEMON_IRONTHORNS_NORMAL", "IRONTHORNS_NORMAL", "IRONTHORNS">;
export type PokemonSettingsRoaringmoonNormal = PokemonSettingsShared1518<"V1005_POKEMON_ROARINGMOON_NORMAL", "ROARINGMOON_NORMAL", "ROARINGMOON">;
export type PokemonSettingsIronvaliantNormal = PokemonSettingsShared1518<"V1006_POKEMON_IRONVALIANT_NORMAL", "IRONVALIANT_NORMAL", "IRONVALIANT">;

export type PokemonSettingsWochien = PokemonSettingsShared1532<"V1001_POKEMON_WOCHIEN", "WOCHIEN">;
export type PokemonSettingsTinglu = PokemonSettingsShared1532<"V1003_POKEMON_TINGLU", "TINGLU">;

export type PokemonSettingsWochienNormal = PokemonSettingsShared1533<"V1001_POKEMON_WOCHIEN_NORMAL", "WOCHIEN_NORMAL", "WOCHIEN">;
export type PokemonSettingsTingluNormal = PokemonSettingsShared1533<"V1003_POKEMON_TINGLU_NORMAL", "TINGLU_NORMAL", "TINGLU">;

export type PokemonSettingsChienpao = PokemonSettingsShared1534<"V1002_POKEMON_CHIENPAO", "CHIENPAO">;
export type PokemonSettingsChiyu = PokemonSettingsShared1534<"V1004_POKEMON_CHIYU", "CHIYU">;
export type PokemonSettingsKoraidon = PokemonSettingsShared1534<"V1007_POKEMON_KORAIDON", "KORAIDON">;
export type PokemonSettingsMiraidon = PokemonSettingsShared1534<"V1008_POKEMON_MIRAIDON", "MIRAIDON">;

export type PokemonSettingsChienpaoNormal = PokemonSettingsShared1535<"V1002_POKEMON_CHIENPAO_NORMAL", "CHIENPAO_NORMAL", "CHIENPAO">;
export type PokemonSettingsChiyuNormal = PokemonSettingsShared1535<"V1004_POKEMON_CHIYU_NORMAL", "CHIYU_NORMAL", "CHIYU">;
export type PokemonSettingsKoraidonApex = PokemonSettingsShared1535<"V1007_POKEMON_KORAIDON_APEX", "KORAIDON_APEX", "KORAIDON">;
export type PokemonSettingsMiraidonUltimate = PokemonSettingsShared1535<"V1008_POKEMON_MIRAIDON_ULTIMATE", "MIRAIDON_ULTIMATE", "MIRAIDON">;

export type PokemonSettingsWalkingwake = PokemonSettingsShared1536<"V1009_POKEMON_WALKINGWAKE", "WALKINGWAKE">;
export type PokemonSettingsIronleaves = PokemonSettingsShared1536<"V1010_POKEMON_IRONLEAVES", "IRONLEAVES">;
export type PokemonSettingsOkidogi = PokemonSettingsShared1536<"V1014_POKEMON_OKIDOGI", "OKIDOGI">;
export type PokemonSettingsMunkidori = PokemonSettingsShared1536<"V1015_POKEMON_MUNKIDORI", "MUNKIDORI">;
export type PokemonSettingsFezandipiti = PokemonSettingsShared1536<"V1016_POKEMON_FEZANDIPITI", "FEZANDIPITI">;
export type PokemonSettingsGougingfire = PokemonSettingsShared1536<"V1020_POKEMON_GOUGINGFIRE", "GOUGINGFIRE">;
export type PokemonSettingsRagingbolt = PokemonSettingsShared1536<"V1021_POKEMON_RAGINGBOLT", "RAGINGBOLT">;
export type PokemonSettingsIronboulder = PokemonSettingsShared1536<"V1022_POKEMON_IRONBOULDER", "IRONBOULDER">;
export type PokemonSettingsIroncrown = PokemonSettingsShared1536<"V1023_POKEMON_IRONCROWN", "IRONCROWN">;

export type PokemonSettingsWalkingwakeNormal = PokemonSettingsShared1537<"V1009_POKEMON_WALKINGWAKE_NORMAL", "WALKINGWAKE_NORMAL", "WALKINGWAKE">;
export type PokemonSettingsIronleavesNormal = PokemonSettingsShared1537<"V1010_POKEMON_IRONLEAVES_NORMAL", "IRONLEAVES_NORMAL", "IRONLEAVES">;
export type PokemonSettingsOkidogiNormal = PokemonSettingsShared1537<"V1014_POKEMON_OKIDOGI_NORMAL", "OKIDOGI_NORMAL", "OKIDOGI">;
export type PokemonSettingsMunkidoriNormal = PokemonSettingsShared1537<"V1015_POKEMON_MUNKIDORI_NORMAL", "MUNKIDORI_NORMAL", "MUNKIDORI">;
export type PokemonSettingsFezandipitiNormal = PokemonSettingsShared1537<"V1016_POKEMON_FEZANDIPITI_NORMAL", "FEZANDIPITI_NORMAL", "FEZANDIPITI">;
export type PokemonSettingsGougingfireNormal = PokemonSettingsShared1537<"V1020_POKEMON_GOUGINGFIRE_NORMAL", "GOUGINGFIRE_NORMAL", "GOUGINGFIRE">;
export type PokemonSettingsRagingboltNormal = PokemonSettingsShared1537<"V1021_POKEMON_RAGINGBOLT_NORMAL", "RAGINGBOLT_NORMAL", "RAGINGBOLT">;
export type PokemonSettingsIronboulderNormal = PokemonSettingsShared1537<"V1022_POKEMON_IRONBOULDER_NORMAL", "IRONBOULDER_NORMAL", "IRONBOULDER">;
export type PokemonSettingsIroncrownNormal = PokemonSettingsShared1537<"V1023_POKEMON_IRONCROWN_NORMAL", "IRONCROWN_NORMAL", "IRONCROWN">;

export type PokemonSettingsArtisan = PokemonSettingsShared1541<"V1012_POKEMON_POLTCHAGEIST_ARTISAN", "POLTCHAGEIST_ARTISAN">;
export type PokemonSettingsCounterfeit = PokemonSettingsShared1541<"V1012_POKEMON_POLTCHAGEIST_COUNTERFEIT", "POLTCHAGEIST_COUNTERFEIT">;

export type PokemonSettingsMasterpiece = PokemonSettingsShared1543<"V1013_POKEMON_SINISTCHA_MASTERPIECE", "SINISTCHA_MASTERPIECE">;
export type PokemonSettingsUnremarkable = PokemonSettingsShared1543<"V1013_POKEMON_SINISTCHA_UNREMARKABLE", "SINISTCHA_UNREMARKABLE">;

export type PokemonSettingsOgerpon = PokemonSettingsShared1544<"V1017_POKEMON_OGERPON", "OGERPON">;
export type PokemonSettingsTerapagos = PokemonSettingsShared1544<"V1024_POKEMON_TERAPAGOS", "TERAPAGOS">;

export type PokemonSettingsHydrapple = PokemonSettingsShared1328<"V1019_POKEMON_HYDRAPPLE", "HYDRAPPLE">;

export type PokemonSettingsHydrappleNormal = PokemonSettingsShared1329<"V1019_POKEMON_HYDRAPPLE_NORMAL", "HYDRAPPLE_NORMAL", "HYDRAPPLE">;

export interface PokemonSettingsGen9MasterfileByTemplateId {
  "V0906_POKEMON_SPRIGATITO": PokemonSettingsSprigatito;
  "V0919_POKEMON_NYMBLE": PokemonSettingsNymble;
  "V0906_POKEMON_SPRIGATITO_NORMAL": PokemonSettingsSprigatitoNormal;
  "V0919_POKEMON_NYMBLE_NORMAL": PokemonSettingsNymbleNormal;
  "V0907_POKEMON_FLORAGATO": V0907_pokemon_floragatoEntry;
  "V0907_POKEMON_FLORAGATO_NORMAL": V0907_pokemon_floragato_normalEntry;
  "V0908_POKEMON_MEOWSCARADA": V0908_pokemon_meowscaradaEntry;
  "V0908_POKEMON_MEOWSCARADA_NORMAL": V0908_pokemon_meowscarada_normalEntry;
  "V0909_POKEMON_FUECOCO": V0909_pokemon_fuecocoEntry;
  "V0909_POKEMON_FUECOCO_NORMAL": V0909_pokemon_fuecoco_normalEntry;
  "V0910_POKEMON_CROCALOR": V0910_pokemon_crocalorEntry;
  "V0910_POKEMON_CROCALOR_NORMAL": V0910_pokemon_crocalor_normalEntry;
  "V0911_POKEMON_SKELEDIRGE": PokemonSettingsSkeledirge;
  "V0923_POKEMON_PAWMOT": PokemonSettingsPawmot;
  "V0911_POKEMON_SKELEDIRGE_NORMAL": PokemonSettingsSkeledirgeNormal;
  "V0923_POKEMON_PAWMOT_NORMAL": PokemonSettingsPawmotNormal;
  "V0912_POKEMON_QUAXLY": V0912_pokemon_quaxlyEntry;
  "V0912_POKEMON_QUAXLY_NORMAL": V0912_pokemon_quaxly_normalEntry;
  "V0913_POKEMON_QUAXWELL": V0913_pokemon_quaxwellEntry;
  "V0913_POKEMON_QUAXWELL_NORMAL": V0913_pokemon_quaxwell_normalEntry;
  "V0914_POKEMON_QUAQUAVAL": V0914_pokemon_quaquavalEntry;
  "V0914_POKEMON_QUAQUAVAL_NORMAL": V0914_pokemon_quaquaval_normalEntry;
  "V0915_POKEMON_LECHONK": V0915_pokemon_lechonkEntry;
  "V0915_POKEMON_LECHONK_NORMAL": V0915_pokemon_lechonk_normalEntry;
  "V0916_POKEMON_OINKOLOGNE": V0916_pokemon_oinkologneEntry;
  "V0916_POKEMON_OINKOLOGNE_FEMALE": PokemonSettingsFemale;
  "V0916_POKEMON_OINKOLOGNE_NORMAL": PokemonSettingsNormal;
  "V0917_POKEMON_TAROUNTULA": V0917_pokemon_tarountulaEntry;
  "V0917_POKEMON_TAROUNTULA_NORMAL": V0917_pokemon_tarountula_normalEntry;
  "V0918_POKEMON_SPIDOPS": V0918_pokemon_spidopsEntry;
  "V0918_POKEMON_SPIDOPS_NORMAL": V0918_pokemon_spidops_normalEntry;
  "V0920_POKEMON_LOKIX": V0920_pokemon_lokixEntry;
  "V0920_POKEMON_LOKIX_NORMAL": V0920_pokemon_lokix_normalEntry;
  "V0921_POKEMON_PAWMI": V0921_pokemon_pawmiEntry;
  "V0921_POKEMON_PAWMI_NORMAL": V0921_pokemon_pawmi_normalEntry;
  "V0922_POKEMON_PAWMO": V0922_pokemon_pawmoEntry;
  "V0922_POKEMON_PAWMO_NORMAL": V0922_pokemon_pawmo_normalEntry;
  "V0924_POKEMON_TANDEMAUS": V0924_pokemon_tandemausEntry;
  "V0924_POKEMON_TANDEMAUS_NORMAL": V0924_pokemon_tandemaus_normalEntry;
  "V0925_POKEMON_MAUSHOLD": PokemonSettingsMaushold;
  "V0925_POKEMON_MAUSHOLD_FAMILY_OF_FOUR": PokemonSettingsMausholdFamilyOfFour;
  "V0925_POKEMON_MAUSHOLD_FAMILY_OF_THREE": PokemonSettingsMausholdFamilyOfThree;
  "V0926_POKEMON_FIDOUGH": V0926_pokemon_fidoughEntry;
  "V0926_POKEMON_FIDOUGH_NORMAL": V0926_pokemon_fidough_normalEntry;
  "V0927_POKEMON_DACHSBUN": V0927_pokemon_dachsbunEntry;
  "V0927_POKEMON_DACHSBUN_NORMAL": PokemonSettingsDachsbunNormal;
  "V0982_POKEMON_DUDUNSPARCE_THREE": PokemonSettingsDudunsparceThree;
  "V0982_POKEMON_DUDUNSPARCE_TWO": PokemonSettingsDudunsparceTwo;
  "V0928_POKEMON_SMOLIV": V0928_pokemon_smolivEntry;
  "V0928_POKEMON_SMOLIV_NORMAL": V0928_pokemon_smoliv_normalEntry;
  "V0929_POKEMON_DOLLIV": V0929_pokemon_dollivEntry;
  "V0929_POKEMON_DOLLIV_NORMAL": V0929_pokemon_dolliv_normalEntry;
  "V0930_POKEMON_ARBOLIVA": V0930_pokemon_arbolivaEntry;
  "V0930_POKEMON_ARBOLIVA_NORMAL": V0930_pokemon_arboliva_normalEntry;
  "V0931_POKEMON_SQUAWKABILLY": PokemonSettingsSquawkabilly;
  "V0967_POKEMON_CYCLIZAR": PokemonSettingsCyclizar;
  "V0976_POKEMON_VELUZA": PokemonSettingsVeluza;
  "V0931_POKEMON_SQUAWKABILLY_BLUE": PokemonSettingsSquawkabillyBlue;
  "V0931_POKEMON_SQUAWKABILLY_GREEN": PokemonSettingsSquawkabillyGreen;
  "V0931_POKEMON_SQUAWKABILLY_WHITE": PokemonSettingsSquawkabillyWhite;
  "V0931_POKEMON_SQUAWKABILLY_YELLOW": PokemonSettingsSquawkabillyYellow;
  "V0967_POKEMON_CYCLIZAR_NORMAL": PokemonSettingsCyclizarNormal;
  "V0976_POKEMON_VELUZA_NORMAL": PokemonSettingsVeluzaNormal;
  "V0932_POKEMON_NACLI": V0932_pokemon_nacliEntry;
  "V0932_POKEMON_NACLI_NORMAL": V0932_pokemon_nacli_normalEntry;
  "V0933_POKEMON_NACLSTACK": V0933_pokemon_naclstackEntry;
  "V0933_POKEMON_NACLSTACK_NORMAL": V0933_pokemon_naclstack_normalEntry;
  "V0934_POKEMON_GARGANACL": V0934_pokemon_garganaclEntry;
  "V0934_POKEMON_GARGANACL_NORMAL": V0934_pokemon_garganacl_normalEntry;
  "V0935_POKEMON_CHARCADET": V0935_pokemon_charcadetEntry;
  "V0935_POKEMON_CHARCADET_NORMAL": V0935_pokemon_charcadet_normalEntry;
  "V0936_POKEMON_ARMAROUGE": PokemonSettingsArmarouge;
  "V0937_POKEMON_CERULEDGE": PokemonSettingsCeruledge;
  "V0936_POKEMON_ARMAROUGE_NORMAL": PokemonSettingsArmarougeNormal;
  "V0937_POKEMON_CERULEDGE_NORMAL": PokemonSettingsCeruledgeNormal;
  "V0938_POKEMON_TADBULB": V0938_pokemon_tadbulbEntry;
  "V0938_POKEMON_TADBULB_NORMAL": V0938_pokemon_tadbulb_normalEntry;
  "V0939_POKEMON_BELLIBOLT": V0939_pokemon_belliboltEntry;
  "V0939_POKEMON_BELLIBOLT_NORMAL": V0939_pokemon_bellibolt_normalEntry;
  "V0940_POKEMON_WATTREL": V0940_pokemon_wattrelEntry;
  "V0940_POKEMON_WATTREL_NORMAL": V0940_pokemon_wattrel_normalEntry;
  "V0941_POKEMON_KILOWATTREL": V0941_pokemon_kilowattrelEntry;
  "V0941_POKEMON_KILOWATTREL_NORMAL": V0941_pokemon_kilowattrel_normalEntry;
  "V0942_POKEMON_MASCHIFF": PokemonSettingsMaschiff;
  "V0951_POKEMON_CAPSAKID": PokemonSettingsCapsakid;
  "V0955_POKEMON_FLITTLE": PokemonSettingsFlittle;
  "V0963_POKEMON_FINIZEN": PokemonSettingsFinizen;
  "V0942_POKEMON_MASCHIFF_NORMAL": PokemonSettingsMaschiffNormal;
  "V0951_POKEMON_CAPSAKID_NORMAL": PokemonSettingsCapsakidNormal;
  "V0955_POKEMON_FLITTLE_NORMAL": PokemonSettingsFlittleNormal;
  "V0963_POKEMON_FINIZEN_NORMAL": PokemonSettingsFinizenNormal;
  "V0943_POKEMON_MABOSSTIFF": PokemonSettingsMabosstiff;
  "V0956_POKEMON_ESPATHRA": PokemonSettingsEspathra;
  "V0964_POKEMON_PALAFIN": PokemonSettingsPalafin;
  "V0982_POKEMON_DUDUNSPARCE": PokemonSettingsDudunsparce;
  "V0943_POKEMON_MABOSSTIFF_NORMAL": PokemonSettingsMabosstiffNormal;
  "V0956_POKEMON_ESPATHRA_NORMAL": PokemonSettingsEspathraNormal;
  "V0964_POKEMON_PALAFIN_HERO": PokemonSettingsPalafinHero;
  "V0964_POKEMON_PALAFIN_ZERO": PokemonSettingsPalafinZero;
  "V0944_POKEMON_SHROODLE": V0944_pokemon_shroodleEntry;
  "V0944_POKEMON_SHROODLE_NORMAL": V0944_pokemon_shroodle_normalEntry;
  "V0945_POKEMON_GRAFAIAI": V0945_pokemon_grafaiaiEntry;
  "V0945_POKEMON_GRAFAIAI_NORMAL": V0945_pokemon_grafaiai_normalEntry;
  "V0946_POKEMON_BRAMBLIN": V0946_pokemon_bramblinEntry;
  "V0946_POKEMON_BRAMBLIN_NORMAL": V0946_pokemon_bramblin_normalEntry;
  "V0947_POKEMON_BRAMBLEGHAST": PokemonSettingsBrambleghast;
  "V0952_POKEMON_SCOVILLAIN": PokemonSettingsScovillain;
  "V0954_POKEMON_RABSCA": PokemonSettingsRabsca;
  "V0981_POKEMON_FARIGIRAF": PokemonSettingsFarigiraf;
  "V0947_POKEMON_BRAMBLEGHAST_NORMAL": PokemonSettingsBrambleghastNormal;
  "V0952_POKEMON_SCOVILLAIN_NORMAL": PokemonSettingsScovillainNormal;
  "V0954_POKEMON_RABSCA_NORMAL": PokemonSettingsRabscaNormal;
  "V0981_POKEMON_FARIGIRAF_NORMAL": PokemonSettingsFarigirafNormal;
  "V0948_POKEMON_TOEDSCOOL": V0948_pokemon_toedscoolEntry;
  "V0948_POKEMON_TOEDSCOOL_NORMAL": V0948_pokemon_toedscool_normalEntry;
  "V0949_POKEMON_TOEDSCRUEL": V0949_pokemon_toedscruelEntry;
  "V0949_POKEMON_TOEDSCRUEL_NORMAL": V0949_pokemon_toedscruel_normalEntry;
  "V0950_POKEMON_KLAWF": V0950_pokemon_klawfEntry;
  "V0950_POKEMON_KLAWF_NORMAL": V0950_pokemon_klawf_normalEntry;
  "V0953_POKEMON_RELLOR": V0953_pokemon_rellorEntry;
  "V0953_POKEMON_RELLOR_NORMAL": V0953_pokemon_rellor_normalEntry;
  "V0957_POKEMON_TINKATINK": V0957_pokemon_tinkatinkEntry;
  "V0957_POKEMON_TINKATINK_NORMAL": V0957_pokemon_tinkatink_normalEntry;
  "V0958_POKEMON_TINKATUFF": V0958_pokemon_tinkatuffEntry;
  "V0958_POKEMON_TINKATUFF_NORMAL": V0958_pokemon_tinkatuff_normalEntry;
  "V0959_POKEMON_TINKATON": V0959_pokemon_tinkatonEntry;
  "V0959_POKEMON_TINKATON_NORMAL": V0959_pokemon_tinkaton_normalEntry;
  "V0960_POKEMON_WIGLETT": V0960_pokemon_wiglettEntry;
  "V0960_POKEMON_WIGLETT_NORMAL": V0960_pokemon_wiglett_normalEntry;
  "V0961_POKEMON_WUGTRIO": V0961_pokemon_wugtrioEntry;
  "V0961_POKEMON_WUGTRIO_NORMAL": V0961_pokemon_wugtrio_normalEntry;
  "V0962_POKEMON_BOMBIRDIER": V0962_pokemon_bombirdierEntry;
  "V0962_POKEMON_BOMBIRDIER_NORMAL": V0962_pokemon_bombirdier_normalEntry;
  "V0965_POKEMON_VAROOM": V0965_pokemon_varoomEntry;
  "V0965_POKEMON_VAROOM_NORMAL": V0965_pokemon_varoom_normalEntry;
  "V0966_POKEMON_REVAVROOM": V0966_pokemon_revavroomEntry;
  "V0966_POKEMON_REVAVROOM_NORMAL": V0966_pokemon_revavroom_normalEntry;
  "V0968_POKEMON_ORTHWORM": V0968_pokemon_orthwormEntry;
  "V0968_POKEMON_ORTHWORM_NORMAL": V0968_pokemon_orthworm_normalEntry;
  "V0969_POKEMON_GLIMMET": V0969_pokemon_glimmetEntry;
  "V0969_POKEMON_GLIMMET_NORMAL": V0969_pokemon_glimmet_normalEntry;
  "V0970_POKEMON_GLIMMORA": V0970_pokemon_glimmoraEntry;
  "V0970_POKEMON_GLIMMORA_NORMAL": V0970_pokemon_glimmora_normalEntry;
  "V0971_POKEMON_GREAVARD": V0971_pokemon_greavardEntry;
  "V0971_POKEMON_GREAVARD_NORMAL": V0971_pokemon_greavard_normalEntry;
  "V0972_POKEMON_HOUNDSTONE": V0972_pokemon_houndstoneEntry;
  "V0972_POKEMON_HOUNDSTONE_NORMAL": V0972_pokemon_houndstone_normalEntry;
  "V0973_POKEMON_FLAMIGO": V0973_pokemon_flamigoEntry;
  "V0973_POKEMON_FLAMIGO_NORMAL": V0973_pokemon_flamigo_normalEntry;
  "V0974_POKEMON_CETODDLE": V0974_pokemon_cetoddleEntry;
  "V0974_POKEMON_CETODDLE_NORMAL": V0974_pokemon_cetoddle_normalEntry;
  "V0975_POKEMON_CETITAN": V0975_pokemon_cetitanEntry;
  "V0975_POKEMON_CETITAN_NORMAL": V0975_pokemon_cetitan_normalEntry;
  "V0977_POKEMON_DONDOZO": V0977_pokemon_dondozoEntry;
  "V0977_POKEMON_DONDOZO_NORMAL": V0977_pokemon_dondozo_normalEntry;
  "V0978_POKEMON_TATSUGIRI": V0978_pokemon_tatsugiriEntry;
  "V0978_POKEMON_TATSUGIRI_CURLY": PokemonSettingsCurly;
  "V0978_POKEMON_TATSUGIRI_DROOPY": PokemonSettingsDroopy;
  "V0978_POKEMON_TATSUGIRI_STRETCHY": PokemonSettingsStretchy;
  "V0979_POKEMON_ANNIHILAPE": V0979_pokemon_annihilapeEntry;
  "V0979_POKEMON_ANNIHILAPE_NORMAL": V0979_pokemon_annihilape_normalEntry;
  "V0980_POKEMON_CLODSIRE": V0980_pokemon_clodsireEntry;
  "V0980_POKEMON_CLODSIRE_NORMAL": V0980_pokemon_clodsire_normalEntry;
  "V0983_POKEMON_KINGAMBIT": V0983_pokemon_kingambitEntry;
  "V0983_POKEMON_KINGAMBIT_NORMAL": V0983_pokemon_kingambit_normalEntry;
  "V0984_POKEMON_GREATTUSK": PokemonSettingsGreattusk;
  "V0986_POKEMON_BRUTEBONNET": PokemonSettingsBrutebonnet;
  "V0987_POKEMON_FLUTTERMANE": PokemonSettingsFluttermane;
  "V0988_POKEMON_SLITHERWING": PokemonSettingsSlitherwing;
  "V0989_POKEMON_SANDYSHOCKS": PokemonSettingsSandyshocks;
  "V0990_POKEMON_IRONTREADS": PokemonSettingsIrontreads;
  "V0991_POKEMON_IRONBUNDLE": PokemonSettingsIronbundle;
  "V0992_POKEMON_IRONHANDS": PokemonSettingsIronhands;
  "V0993_POKEMON_IRONJUGULIS": PokemonSettingsIronjugulis;
  "V0994_POKEMON_IRONMOTH": PokemonSettingsIronmoth;
  "V0995_POKEMON_IRONTHORNS": PokemonSettingsIronthorns;
  "V1005_POKEMON_ROARINGMOON": PokemonSettingsRoaringmoon;
  "V1006_POKEMON_IRONVALIANT": PokemonSettingsIronvaliant;
  "V0984_POKEMON_GREATTUSK_NORMAL": PokemonSettingsGreattuskNormal;
  "V0986_POKEMON_BRUTEBONNET_NORMAL": PokemonSettingsBrutebonnetNormal;
  "V0987_POKEMON_FLUTTERMANE_NORMAL": PokemonSettingsFluttermaneNormal;
  "V0988_POKEMON_SLITHERWING_NORMAL": PokemonSettingsSlitherwingNormal;
  "V0989_POKEMON_SANDYSHOCKS_NORMAL": PokemonSettingsSandyshocksNormal;
  "V0990_POKEMON_IRONTREADS_NORMAL": PokemonSettingsIrontreadsNormal;
  "V0991_POKEMON_IRONBUNDLE_NORMAL": PokemonSettingsIronbundleNormal;
  "V0992_POKEMON_IRONHANDS_NORMAL": PokemonSettingsIronhandsNormal;
  "V0993_POKEMON_IRONJUGULIS_NORMAL": PokemonSettingsIronjugulisNormal;
  "V0994_POKEMON_IRONMOTH_NORMAL": PokemonSettingsIronmothNormal;
  "V0995_POKEMON_IRONTHORNS_NORMAL": PokemonSettingsIronthornsNormal;
  "V1005_POKEMON_ROARINGMOON_NORMAL": PokemonSettingsRoaringmoonNormal;
  "V1006_POKEMON_IRONVALIANT_NORMAL": PokemonSettingsIronvaliantNormal;
  "V0985_POKEMON_SCREAMTAIL": V0985_pokemon_screamtailEntry;
  "V0985_POKEMON_SCREAMTAIL_NORMAL": V0985_pokemon_screamtail_normalEntry;
  "V0996_POKEMON_FRIGIBAX": V0996_pokemon_frigibaxEntry;
  "V0996_POKEMON_FRIGIBAX_NORMAL": V0996_pokemon_frigibax_normalEntry;
  "V0997_POKEMON_ARCTIBAX": V0997_pokemon_arctibaxEntry;
  "V0997_POKEMON_ARCTIBAX_NORMAL": V0997_pokemon_arctibax_normalEntry;
  "V0998_POKEMON_BAXCALIBUR": V0998_pokemon_baxcaliburEntry;
  "V0998_POKEMON_BAXCALIBUR_NORMAL": V0998_pokemon_baxcalibur_normalEntry;
  "V0999_POKEMON_GIMMIGHOUL": V0999_pokemon_gimmighoulEntry;
  "V0999_POKEMON_GIMMIGHOUL_COIN_A1": V0999_pokemon_gimmighoul_coin_a1Entry;
  "V0999_POKEMON_GIMMIGHOUL_NORMAL": V0999_pokemon_gimmighoul_normalEntry;
  "V1000_POKEMON_GHOLDENGO": V1000_pokemon_gholdengoEntry;
  "V1000_POKEMON_GHOLDENGO_NORMAL": V1000_pokemon_gholdengo_normalEntry;
  "V1001_POKEMON_WOCHIEN": PokemonSettingsWochien;
  "V1003_POKEMON_TINGLU": PokemonSettingsTinglu;
  "V1001_POKEMON_WOCHIEN_NORMAL": PokemonSettingsWochienNormal;
  "V1003_POKEMON_TINGLU_NORMAL": PokemonSettingsTingluNormal;
  "V1002_POKEMON_CHIENPAO": PokemonSettingsChienpao;
  "V1004_POKEMON_CHIYU": PokemonSettingsChiyu;
  "V1007_POKEMON_KORAIDON": PokemonSettingsKoraidon;
  "V1008_POKEMON_MIRAIDON": PokemonSettingsMiraidon;
  "V1002_POKEMON_CHIENPAO_NORMAL": PokemonSettingsChienpaoNormal;
  "V1004_POKEMON_CHIYU_NORMAL": PokemonSettingsChiyuNormal;
  "V1007_POKEMON_KORAIDON_APEX": PokemonSettingsKoraidonApex;
  "V1008_POKEMON_MIRAIDON_ULTIMATE": PokemonSettingsMiraidonUltimate;
  "V1009_POKEMON_WALKINGWAKE": PokemonSettingsWalkingwake;
  "V1010_POKEMON_IRONLEAVES": PokemonSettingsIronleaves;
  "V1014_POKEMON_OKIDOGI": PokemonSettingsOkidogi;
  "V1015_POKEMON_MUNKIDORI": PokemonSettingsMunkidori;
  "V1016_POKEMON_FEZANDIPITI": PokemonSettingsFezandipiti;
  "V1020_POKEMON_GOUGINGFIRE": PokemonSettingsGougingfire;
  "V1021_POKEMON_RAGINGBOLT": PokemonSettingsRagingbolt;
  "V1022_POKEMON_IRONBOULDER": PokemonSettingsIronboulder;
  "V1023_POKEMON_IRONCROWN": PokemonSettingsIroncrown;
  "V1009_POKEMON_WALKINGWAKE_NORMAL": PokemonSettingsWalkingwakeNormal;
  "V1010_POKEMON_IRONLEAVES_NORMAL": PokemonSettingsIronleavesNormal;
  "V1014_POKEMON_OKIDOGI_NORMAL": PokemonSettingsOkidogiNormal;
  "V1015_POKEMON_MUNKIDORI_NORMAL": PokemonSettingsMunkidoriNormal;
  "V1016_POKEMON_FEZANDIPITI_NORMAL": PokemonSettingsFezandipitiNormal;
  "V1020_POKEMON_GOUGINGFIRE_NORMAL": PokemonSettingsGougingfireNormal;
  "V1021_POKEMON_RAGINGBOLT_NORMAL": PokemonSettingsRagingboltNormal;
  "V1022_POKEMON_IRONBOULDER_NORMAL": PokemonSettingsIronboulderNormal;
  "V1023_POKEMON_IRONCROWN_NORMAL": PokemonSettingsIroncrownNormal;
  "V1011_POKEMON_DIPPLIN": V1011_pokemon_dipplinEntry;
  "V1011_POKEMON_DIPPLIN_NORMAL": V1011_pokemon_dipplin_normalEntry;
  "V1012_POKEMON_POLTCHAGEIST": V1012_pokemon_poltchageistEntry;
  "V1012_POKEMON_POLTCHAGEIST_ARTISAN": PokemonSettingsArtisan;
  "V1012_POKEMON_POLTCHAGEIST_COUNTERFEIT": PokemonSettingsCounterfeit;
  "V1013_POKEMON_SINISTCHA": V1013_pokemon_sinistchaEntry;
  "V1013_POKEMON_SINISTCHA_MASTERPIECE": PokemonSettingsMasterpiece;
  "V1013_POKEMON_SINISTCHA_UNREMARKABLE": PokemonSettingsUnremarkable;
  "V1017_POKEMON_OGERPON": PokemonSettingsOgerpon;
  "V1024_POKEMON_TERAPAGOS": PokemonSettingsTerapagos;
  "V1018_POKEMON_ARCHALUDON": V1018_pokemon_archaludonEntry;
  "V1018_POKEMON_ARCHALUDON_NORMAL": V1018_pokemon_archaludon_normalEntry;
  "V1019_POKEMON_HYDRAPPLE": PokemonSettingsHydrapple;
  "V1019_POKEMON_HYDRAPPLE_NORMAL": PokemonSettingsHydrappleNormal;
  "V1024_POKEMON_TERAPAGOS_NORMAL": V1024_pokemon_terapagos_normalEntry;
  "V1025_POKEMON_PECHARUNT": V1025_pokemon_pecharuntEntry;
  "V1025_POKEMON_PECHARUNT_NORMAL": V1025_pokemon_pecharunt_normalEntry;
}

export interface PokemonSettingsGen9ByDexId {
  "0906": PokemonSettingsSprigatito | PokemonSettingsSprigatitoNormal;
  "0907": V0907_pokemon_floragatoEntry | V0907_pokemon_floragato_normalEntry;
  "0908": V0908_pokemon_meowscaradaEntry | V0908_pokemon_meowscarada_normalEntry;
  "0909": V0909_pokemon_fuecocoEntry | V0909_pokemon_fuecoco_normalEntry;
  "0910": V0910_pokemon_crocalorEntry | V0910_pokemon_crocalor_normalEntry;
  "0911": PokemonSettingsSkeledirge | PokemonSettingsSkeledirgeNormal;
  "0912": V0912_pokemon_quaxlyEntry | V0912_pokemon_quaxly_normalEntry;
  "0913": V0913_pokemon_quaxwellEntry | V0913_pokemon_quaxwell_normalEntry;
  "0914": V0914_pokemon_quaquavalEntry | V0914_pokemon_quaquaval_normalEntry;
  "0915": V0915_pokemon_lechonkEntry | V0915_pokemon_lechonk_normalEntry;
  "0916": V0916_pokemon_oinkologneEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "0917": V0917_pokemon_tarountulaEntry | V0917_pokemon_tarountula_normalEntry;
  "0918": V0918_pokemon_spidopsEntry | V0918_pokemon_spidops_normalEntry;
  "0919": PokemonSettingsNymble | PokemonSettingsNymbleNormal;
  "0920": V0920_pokemon_lokixEntry | V0920_pokemon_lokix_normalEntry;
  "0921": V0921_pokemon_pawmiEntry | V0921_pokemon_pawmi_normalEntry;
  "0922": V0922_pokemon_pawmoEntry | V0922_pokemon_pawmo_normalEntry;
  "0923": PokemonSettingsPawmot | PokemonSettingsPawmotNormal;
  "0924": V0924_pokemon_tandemausEntry | V0924_pokemon_tandemaus_normalEntry;
  "0925": PokemonSettingsMaushold | PokemonSettingsMausholdFamilyOfFour | PokemonSettingsMausholdFamilyOfThree;
  "0926": V0926_pokemon_fidoughEntry | V0926_pokemon_fidough_normalEntry;
  "0927": V0927_pokemon_dachsbunEntry | PokemonSettingsDachsbunNormal;
  "0928": V0928_pokemon_smolivEntry | V0928_pokemon_smoliv_normalEntry;
  "0929": V0929_pokemon_dollivEntry | V0929_pokemon_dolliv_normalEntry;
  "0930": V0930_pokemon_arbolivaEntry | V0930_pokemon_arboliva_normalEntry;
  "0931": PokemonSettingsSquawkabilly | PokemonSettingsSquawkabillyBlue | PokemonSettingsSquawkabillyGreen | PokemonSettingsSquawkabillyWhite | PokemonSettingsSquawkabillyYellow;
  "0932": V0932_pokemon_nacliEntry | V0932_pokemon_nacli_normalEntry;
  "0933": V0933_pokemon_naclstackEntry | V0933_pokemon_naclstack_normalEntry;
  "0934": V0934_pokemon_garganaclEntry | V0934_pokemon_garganacl_normalEntry;
  "0935": V0935_pokemon_charcadetEntry | V0935_pokemon_charcadet_normalEntry;
  "0936": PokemonSettingsArmarouge | PokemonSettingsArmarougeNormal;
  "0937": PokemonSettingsCeruledge | PokemonSettingsCeruledgeNormal;
  "0938": V0938_pokemon_tadbulbEntry | V0938_pokemon_tadbulb_normalEntry;
  "0939": V0939_pokemon_belliboltEntry | V0939_pokemon_bellibolt_normalEntry;
  "0940": V0940_pokemon_wattrelEntry | V0940_pokemon_wattrel_normalEntry;
  "0941": V0941_pokemon_kilowattrelEntry | V0941_pokemon_kilowattrel_normalEntry;
  "0942": PokemonSettingsMaschiff | PokemonSettingsMaschiffNormal;
  "0943": PokemonSettingsMabosstiff | PokemonSettingsMabosstiffNormal;
  "0944": V0944_pokemon_shroodleEntry | V0944_pokemon_shroodle_normalEntry;
  "0945": V0945_pokemon_grafaiaiEntry | V0945_pokemon_grafaiai_normalEntry;
  "0946": V0946_pokemon_bramblinEntry | V0946_pokemon_bramblin_normalEntry;
  "0947": PokemonSettingsBrambleghast | PokemonSettingsBrambleghastNormal;
  "0948": V0948_pokemon_toedscoolEntry | V0948_pokemon_toedscool_normalEntry;
  "0949": V0949_pokemon_toedscruelEntry | V0949_pokemon_toedscruel_normalEntry;
  "0950": V0950_pokemon_klawfEntry | V0950_pokemon_klawf_normalEntry;
  "0951": PokemonSettingsCapsakid | PokemonSettingsCapsakidNormal;
  "0952": PokemonSettingsScovillain | PokemonSettingsScovillainNormal;
  "0953": V0953_pokemon_rellorEntry | V0953_pokemon_rellor_normalEntry;
  "0954": PokemonSettingsRabsca | PokemonSettingsRabscaNormal;
  "0955": PokemonSettingsFlittle | PokemonSettingsFlittleNormal;
  "0956": PokemonSettingsEspathra | PokemonSettingsEspathraNormal;
  "0957": V0957_pokemon_tinkatinkEntry | V0957_pokemon_tinkatink_normalEntry;
  "0958": V0958_pokemon_tinkatuffEntry | V0958_pokemon_tinkatuff_normalEntry;
  "0959": V0959_pokemon_tinkatonEntry | V0959_pokemon_tinkaton_normalEntry;
  "0960": V0960_pokemon_wiglettEntry | V0960_pokemon_wiglett_normalEntry;
  "0961": V0961_pokemon_wugtrioEntry | V0961_pokemon_wugtrio_normalEntry;
  "0962": V0962_pokemon_bombirdierEntry | V0962_pokemon_bombirdier_normalEntry;
  "0963": PokemonSettingsFinizen | PokemonSettingsFinizenNormal;
  "0964": PokemonSettingsPalafin | PokemonSettingsPalafinHero | PokemonSettingsPalafinZero;
  "0965": V0965_pokemon_varoomEntry | V0965_pokemon_varoom_normalEntry;
  "0966": V0966_pokemon_revavroomEntry | V0966_pokemon_revavroom_normalEntry;
  "0967": PokemonSettingsCyclizar | PokemonSettingsCyclizarNormal;
  "0968": V0968_pokemon_orthwormEntry | V0968_pokemon_orthworm_normalEntry;
  "0969": V0969_pokemon_glimmetEntry | V0969_pokemon_glimmet_normalEntry;
  "0970": V0970_pokemon_glimmoraEntry | V0970_pokemon_glimmora_normalEntry;
  "0971": V0971_pokemon_greavardEntry | V0971_pokemon_greavard_normalEntry;
  "0972": V0972_pokemon_houndstoneEntry | V0972_pokemon_houndstone_normalEntry;
  "0973": V0973_pokemon_flamigoEntry | V0973_pokemon_flamigo_normalEntry;
  "0974": V0974_pokemon_cetoddleEntry | V0974_pokemon_cetoddle_normalEntry;
  "0975": V0975_pokemon_cetitanEntry | V0975_pokemon_cetitan_normalEntry;
  "0976": PokemonSettingsVeluza | PokemonSettingsVeluzaNormal;
  "0977": V0977_pokemon_dondozoEntry | V0977_pokemon_dondozo_normalEntry;
  "0978": V0978_pokemon_tatsugiriEntry | PokemonSettingsCurly | PokemonSettingsDroopy | PokemonSettingsStretchy;
  "0979": V0979_pokemon_annihilapeEntry | V0979_pokemon_annihilape_normalEntry;
  "0980": V0980_pokemon_clodsireEntry | V0980_pokemon_clodsire_normalEntry;
  "0981": PokemonSettingsFarigiraf | PokemonSettingsFarigirafNormal;
  "0982": PokemonSettingsDudunsparceThree | PokemonSettingsDudunsparceTwo | PokemonSettingsDudunsparce;
  "0983": V0983_pokemon_kingambitEntry | V0983_pokemon_kingambit_normalEntry;
  "0984": PokemonSettingsGreattusk | PokemonSettingsGreattuskNormal;
  "0985": V0985_pokemon_screamtailEntry | V0985_pokemon_screamtail_normalEntry;
  "0986": PokemonSettingsBrutebonnet | PokemonSettingsBrutebonnetNormal;
  "0987": PokemonSettingsFluttermane | PokemonSettingsFluttermaneNormal;
  "0988": PokemonSettingsSlitherwing | PokemonSettingsSlitherwingNormal;
  "0989": PokemonSettingsSandyshocks | PokemonSettingsSandyshocksNormal;
  "0990": PokemonSettingsIrontreads | PokemonSettingsIrontreadsNormal;
  "0991": PokemonSettingsIronbundle | PokemonSettingsIronbundleNormal;
  "0992": PokemonSettingsIronhands | PokemonSettingsIronhandsNormal;
  "0993": PokemonSettingsIronjugulis | PokemonSettingsIronjugulisNormal;
  "0994": PokemonSettingsIronmoth | PokemonSettingsIronmothNormal;
  "0995": PokemonSettingsIronthorns | PokemonSettingsIronthornsNormal;
  "0996": V0996_pokemon_frigibaxEntry | V0996_pokemon_frigibax_normalEntry;
  "0997": V0997_pokemon_arctibaxEntry | V0997_pokemon_arctibax_normalEntry;
  "0998": V0998_pokemon_baxcaliburEntry | V0998_pokemon_baxcalibur_normalEntry;
  "0999": V0999_pokemon_gimmighoulEntry | V0999_pokemon_gimmighoul_coin_a1Entry | V0999_pokemon_gimmighoul_normalEntry;
  "1000": V1000_pokemon_gholdengoEntry | V1000_pokemon_gholdengo_normalEntry;
  "1001": PokemonSettingsWochien | PokemonSettingsWochienNormal;
  "1002": PokemonSettingsChienpao | PokemonSettingsChienpaoNormal;
  "1003": PokemonSettingsTinglu | PokemonSettingsTingluNormal;
  "1004": PokemonSettingsChiyu | PokemonSettingsChiyuNormal;
  "1005": PokemonSettingsRoaringmoon | PokemonSettingsRoaringmoonNormal;
  "1006": PokemonSettingsIronvaliant | PokemonSettingsIronvaliantNormal;
  "1007": PokemonSettingsKoraidon | PokemonSettingsKoraidonApex;
  "1008": PokemonSettingsMiraidon | PokemonSettingsMiraidonUltimate;
  "1009": PokemonSettingsWalkingwake | PokemonSettingsWalkingwakeNormal;
  "1010": PokemonSettingsIronleaves | PokemonSettingsIronleavesNormal;
  "1011": V1011_pokemon_dipplinEntry | V1011_pokemon_dipplin_normalEntry;
  "1012": V1012_pokemon_poltchageistEntry | PokemonSettingsArtisan | PokemonSettingsCounterfeit;
  "1013": V1013_pokemon_sinistchaEntry | PokemonSettingsMasterpiece | PokemonSettingsUnremarkable;
  "1014": PokemonSettingsOkidogi | PokemonSettingsOkidogiNormal;
  "1015": PokemonSettingsMunkidori | PokemonSettingsMunkidoriNormal;
  "1016": PokemonSettingsFezandipiti | PokemonSettingsFezandipitiNormal;
  "1017": PokemonSettingsOgerpon;
  "1018": V1018_pokemon_archaludonEntry | V1018_pokemon_archaludon_normalEntry;
  "1019": PokemonSettingsHydrapple | PokemonSettingsHydrappleNormal;
  "1020": PokemonSettingsGougingfire | PokemonSettingsGougingfireNormal;
  "1021": PokemonSettingsRagingbolt | PokemonSettingsRagingboltNormal;
  "1022": PokemonSettingsIronboulder | PokemonSettingsIronboulderNormal;
  "1023": PokemonSettingsIroncrown | PokemonSettingsIroncrownNormal;
  "1024": PokemonSettingsTerapagos | V1024_pokemon_terapagos_normalEntry;
  "1025": V1025_pokemon_pecharuntEntry | V1025_pokemon_pecharunt_normalEntry;
}

export interface PokemonSettingsGen9ByPokemonId {
  "ANNIHILAPE": V0979_pokemon_annihilapeEntry | V0979_pokemon_annihilape_normalEntry;
  "ARBOLIVA": V0930_pokemon_arbolivaEntry | V0930_pokemon_arboliva_normalEntry;
  "ARCHALUDON": V1018_pokemon_archaludonEntry | V1018_pokemon_archaludon_normalEntry;
  "ARCTIBAX": V0997_pokemon_arctibaxEntry | V0997_pokemon_arctibax_normalEntry;
  "ARMAROUGE": PokemonSettingsArmarouge | PokemonSettingsArmarougeNormal;
  "BAXCALIBUR": V0998_pokemon_baxcaliburEntry | V0998_pokemon_baxcalibur_normalEntry;
  "BELLIBOLT": V0939_pokemon_belliboltEntry | V0939_pokemon_bellibolt_normalEntry;
  "BOMBIRDIER": V0962_pokemon_bombirdierEntry | V0962_pokemon_bombirdier_normalEntry;
  "BRAMBLEGHAST": PokemonSettingsBrambleghast | PokemonSettingsBrambleghastNormal;
  "BRAMBLIN": V0946_pokemon_bramblinEntry | V0946_pokemon_bramblin_normalEntry;
  "BRUTEBONNET": PokemonSettingsBrutebonnet | PokemonSettingsBrutebonnetNormal;
  "CAPSAKID": PokemonSettingsCapsakid | PokemonSettingsCapsakidNormal;
  "CERULEDGE": PokemonSettingsCeruledge | PokemonSettingsCeruledgeNormal;
  "CETITAN": V0975_pokemon_cetitanEntry | V0975_pokemon_cetitan_normalEntry;
  "CETODDLE": V0974_pokemon_cetoddleEntry | V0974_pokemon_cetoddle_normalEntry;
  "CHARCADET": V0935_pokemon_charcadetEntry | V0935_pokemon_charcadet_normalEntry;
  "CHIENPAO": PokemonSettingsChienpao | PokemonSettingsChienpaoNormal;
  "CHIYU": PokemonSettingsChiyu | PokemonSettingsChiyuNormal;
  "CLODSIRE": V0980_pokemon_clodsireEntry | V0980_pokemon_clodsire_normalEntry;
  "CROCALOR": V0910_pokemon_crocalorEntry | V0910_pokemon_crocalor_normalEntry;
  "CYCLIZAR": PokemonSettingsCyclizar | PokemonSettingsCyclizarNormal;
  "DACHSBUN": V0927_pokemon_dachsbunEntry | PokemonSettingsDachsbunNormal;
  "DIPPLIN": V1011_pokemon_dipplinEntry | V1011_pokemon_dipplin_normalEntry;
  "DOLLIV": V0929_pokemon_dollivEntry | V0929_pokemon_dolliv_normalEntry;
  "DONDOZO": V0977_pokemon_dondozoEntry | V0977_pokemon_dondozo_normalEntry;
  "DUDUNSPARCE": PokemonSettingsDudunsparceThree | PokemonSettingsDudunsparceTwo | PokemonSettingsDudunsparce;
  "ESPATHRA": PokemonSettingsEspathra | PokemonSettingsEspathraNormal;
  "FARIGIRAF": PokemonSettingsFarigiraf | PokemonSettingsFarigirafNormal;
  "FEZANDIPITI": PokemonSettingsFezandipiti | PokemonSettingsFezandipitiNormal;
  "FIDOUGH": V0926_pokemon_fidoughEntry | V0926_pokemon_fidough_normalEntry;
  "FINIZEN": PokemonSettingsFinizen | PokemonSettingsFinizenNormal;
  "FLAMIGO": V0973_pokemon_flamigoEntry | V0973_pokemon_flamigo_normalEntry;
  "FLITTLE": PokemonSettingsFlittle | PokemonSettingsFlittleNormal;
  "FLORAGATO": V0907_pokemon_floragatoEntry | V0907_pokemon_floragato_normalEntry;
  "FLUTTERMANE": PokemonSettingsFluttermane | PokemonSettingsFluttermaneNormal;
  "FRIGIBAX": V0996_pokemon_frigibaxEntry | V0996_pokemon_frigibax_normalEntry;
  "FUECOCO": V0909_pokemon_fuecocoEntry | V0909_pokemon_fuecoco_normalEntry;
  "GARGANACL": V0934_pokemon_garganaclEntry | V0934_pokemon_garganacl_normalEntry;
  "GHOLDENGO": V1000_pokemon_gholdengoEntry | V1000_pokemon_gholdengo_normalEntry;
  "GIMMIGHOUL": V0999_pokemon_gimmighoulEntry | V0999_pokemon_gimmighoul_coin_a1Entry | V0999_pokemon_gimmighoul_normalEntry;
  "GLIMMET": V0969_pokemon_glimmetEntry | V0969_pokemon_glimmet_normalEntry;
  "GLIMMORA": V0970_pokemon_glimmoraEntry | V0970_pokemon_glimmora_normalEntry;
  "GOUGINGFIRE": PokemonSettingsGougingfire | PokemonSettingsGougingfireNormal;
  "GRAFAIAI": V0945_pokemon_grafaiaiEntry | V0945_pokemon_grafaiai_normalEntry;
  "GREATTUSK": PokemonSettingsGreattusk | PokemonSettingsGreattuskNormal;
  "GREAVARD": V0971_pokemon_greavardEntry | V0971_pokemon_greavard_normalEntry;
  "HOUNDSTONE": V0972_pokemon_houndstoneEntry | V0972_pokemon_houndstone_normalEntry;
  "HYDRAPPLE": PokemonSettingsHydrapple | PokemonSettingsHydrappleNormal;
  "IRONBOULDER": PokemonSettingsIronboulder | PokemonSettingsIronboulderNormal;
  "IRONBUNDLE": PokemonSettingsIronbundle | PokemonSettingsIronbundleNormal;
  "IRONCROWN": PokemonSettingsIroncrown | PokemonSettingsIroncrownNormal;
  "IRONHANDS": PokemonSettingsIronhands | PokemonSettingsIronhandsNormal;
  "IRONJUGULIS": PokemonSettingsIronjugulis | PokemonSettingsIronjugulisNormal;
  "IRONLEAVES": PokemonSettingsIronleaves | PokemonSettingsIronleavesNormal;
  "IRONMOTH": PokemonSettingsIronmoth | PokemonSettingsIronmothNormal;
  "IRONTHORNS": PokemonSettingsIronthorns | PokemonSettingsIronthornsNormal;
  "IRONTREADS": PokemonSettingsIrontreads | PokemonSettingsIrontreadsNormal;
  "IRONVALIANT": PokemonSettingsIronvaliant | PokemonSettingsIronvaliantNormal;
  "KILOWATTREL": V0941_pokemon_kilowattrelEntry | V0941_pokemon_kilowattrel_normalEntry;
  "KINGAMBIT": V0983_pokemon_kingambitEntry | V0983_pokemon_kingambit_normalEntry;
  "KLAWF": V0950_pokemon_klawfEntry | V0950_pokemon_klawf_normalEntry;
  "KORAIDON": PokemonSettingsKoraidon | PokemonSettingsKoraidonApex;
  "LECHONK": V0915_pokemon_lechonkEntry | V0915_pokemon_lechonk_normalEntry;
  "LOKIX": V0920_pokemon_lokixEntry | V0920_pokemon_lokix_normalEntry;
  "MABOSSTIFF": PokemonSettingsMabosstiff | PokemonSettingsMabosstiffNormal;
  "MASCHIFF": PokemonSettingsMaschiff | PokemonSettingsMaschiffNormal;
  "MAUSHOLD": PokemonSettingsMaushold | PokemonSettingsMausholdFamilyOfFour | PokemonSettingsMausholdFamilyOfThree;
  "MEOWSCARADA": V0908_pokemon_meowscaradaEntry | V0908_pokemon_meowscarada_normalEntry;
  "MIRAIDON": PokemonSettingsMiraidon | PokemonSettingsMiraidonUltimate;
  "MUNKIDORI": PokemonSettingsMunkidori | PokemonSettingsMunkidoriNormal;
  "NACLI": V0932_pokemon_nacliEntry | V0932_pokemon_nacli_normalEntry;
  "NACLSTACK": V0933_pokemon_naclstackEntry | V0933_pokemon_naclstack_normalEntry;
  "NYMBLE": PokemonSettingsNymble | PokemonSettingsNymbleNormal;
  "OGERPON": PokemonSettingsOgerpon;
  "OINKOLOGNE": V0916_pokemon_oinkologneEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "OKIDOGI": PokemonSettingsOkidogi | PokemonSettingsOkidogiNormal;
  "ORTHWORM": V0968_pokemon_orthwormEntry | V0968_pokemon_orthworm_normalEntry;
  "PALAFIN": PokemonSettingsPalafin | PokemonSettingsPalafinHero | PokemonSettingsPalafinZero;
  "PAWMI": V0921_pokemon_pawmiEntry | V0921_pokemon_pawmi_normalEntry;
  "PAWMO": V0922_pokemon_pawmoEntry | V0922_pokemon_pawmo_normalEntry;
  "PAWMOT": PokemonSettingsPawmot | PokemonSettingsPawmotNormal;
  "PECHARUNT": V1025_pokemon_pecharuntEntry | V1025_pokemon_pecharunt_normalEntry;
  "POLTCHAGEIST": V1012_pokemon_poltchageistEntry | PokemonSettingsArtisan | PokemonSettingsCounterfeit;
  "QUAQUAVAL": V0914_pokemon_quaquavalEntry | V0914_pokemon_quaquaval_normalEntry;
  "QUAXLY": V0912_pokemon_quaxlyEntry | V0912_pokemon_quaxly_normalEntry;
  "QUAXWELL": V0913_pokemon_quaxwellEntry | V0913_pokemon_quaxwell_normalEntry;
  "RABSCA": PokemonSettingsRabsca | PokemonSettingsRabscaNormal;
  "RAGINGBOLT": PokemonSettingsRagingbolt | PokemonSettingsRagingboltNormal;
  "RELLOR": V0953_pokemon_rellorEntry | V0953_pokemon_rellor_normalEntry;
  "REVAVROOM": V0966_pokemon_revavroomEntry | V0966_pokemon_revavroom_normalEntry;
  "ROARINGMOON": PokemonSettingsRoaringmoon | PokemonSettingsRoaringmoonNormal;
  "SANDYSHOCKS": PokemonSettingsSandyshocks | PokemonSettingsSandyshocksNormal;
  "SCOVILLAIN": PokemonSettingsScovillain | PokemonSettingsScovillainNormal;
  "SCREAMTAIL": V0985_pokemon_screamtailEntry | V0985_pokemon_screamtail_normalEntry;
  "SHROODLE": V0944_pokemon_shroodleEntry | V0944_pokemon_shroodle_normalEntry;
  "SINISTCHA": V1013_pokemon_sinistchaEntry | PokemonSettingsMasterpiece | PokemonSettingsUnremarkable;
  "SKELEDIRGE": PokemonSettingsSkeledirge | PokemonSettingsSkeledirgeNormal;
  "SLITHERWING": PokemonSettingsSlitherwing | PokemonSettingsSlitherwingNormal;
  "SMOLIV": V0928_pokemon_smolivEntry | V0928_pokemon_smoliv_normalEntry;
  "SPIDOPS": V0918_pokemon_spidopsEntry | V0918_pokemon_spidops_normalEntry;
  "SPRIGATITO": PokemonSettingsSprigatito | PokemonSettingsSprigatitoNormal;
  "SQUAWKABILLY": PokemonSettingsSquawkabilly | PokemonSettingsSquawkabillyBlue | PokemonSettingsSquawkabillyGreen | PokemonSettingsSquawkabillyWhite | PokemonSettingsSquawkabillyYellow;
  "TADBULB": V0938_pokemon_tadbulbEntry | V0938_pokemon_tadbulb_normalEntry;
  "TANDEMAUS": V0924_pokemon_tandemausEntry | V0924_pokemon_tandemaus_normalEntry;
  "TAROUNTULA": V0917_pokemon_tarountulaEntry | V0917_pokemon_tarountula_normalEntry;
  "TATSUGIRI": V0978_pokemon_tatsugiriEntry | PokemonSettingsCurly | PokemonSettingsDroopy | PokemonSettingsStretchy;
  "TERAPAGOS": PokemonSettingsTerapagos | V1024_pokemon_terapagos_normalEntry;
  "TINGLU": PokemonSettingsTinglu | PokemonSettingsTingluNormal;
  "TINKATINK": V0957_pokemon_tinkatinkEntry | V0957_pokemon_tinkatink_normalEntry;
  "TINKATON": V0959_pokemon_tinkatonEntry | V0959_pokemon_tinkaton_normalEntry;
  "TINKATUFF": V0958_pokemon_tinkatuffEntry | V0958_pokemon_tinkatuff_normalEntry;
  "TOEDSCOOL": V0948_pokemon_toedscoolEntry | V0948_pokemon_toedscool_normalEntry;
  "TOEDSCRUEL": V0949_pokemon_toedscruelEntry | V0949_pokemon_toedscruel_normalEntry;
  "VAROOM": V0965_pokemon_varoomEntry | V0965_pokemon_varoom_normalEntry;
  "VELUZA": PokemonSettingsVeluza | PokemonSettingsVeluzaNormal;
  "WALKINGWAKE": PokemonSettingsWalkingwake | PokemonSettingsWalkingwakeNormal;
  "WATTREL": V0940_pokemon_wattrelEntry | V0940_pokemon_wattrel_normalEntry;
  "WIGLETT": V0960_pokemon_wiglettEntry | V0960_pokemon_wiglett_normalEntry;
  "WOCHIEN": PokemonSettingsWochien | PokemonSettingsWochienNormal;
  "WUGTRIO": V0961_pokemon_wugtrioEntry | V0961_pokemon_wugtrio_normalEntry;
}

export type PokemonSettingsGen9MasterfileEntry = PokemonSettingsSprigatito | PokemonSettingsNymble | PokemonSettingsSprigatitoNormal | PokemonSettingsNymbleNormal | V0907_pokemon_floragatoEntry | V0907_pokemon_floragato_normalEntry | V0908_pokemon_meowscaradaEntry | V0908_pokemon_meowscarada_normalEntry | V0909_pokemon_fuecocoEntry | V0909_pokemon_fuecoco_normalEntry | V0910_pokemon_crocalorEntry | V0910_pokemon_crocalor_normalEntry | PokemonSettingsSkeledirge | PokemonSettingsPawmot | PokemonSettingsSkeledirgeNormal | PokemonSettingsPawmotNormal | V0912_pokemon_quaxlyEntry | V0912_pokemon_quaxly_normalEntry | V0913_pokemon_quaxwellEntry | V0913_pokemon_quaxwell_normalEntry | V0914_pokemon_quaquavalEntry | V0914_pokemon_quaquaval_normalEntry | V0915_pokemon_lechonkEntry | V0915_pokemon_lechonk_normalEntry | V0916_pokemon_oinkologneEntry | PokemonSettingsFemale | PokemonSettingsNormal | V0917_pokemon_tarountulaEntry | V0917_pokemon_tarountula_normalEntry | V0918_pokemon_spidopsEntry | V0918_pokemon_spidops_normalEntry | V0920_pokemon_lokixEntry | V0920_pokemon_lokix_normalEntry | V0921_pokemon_pawmiEntry | V0921_pokemon_pawmi_normalEntry | V0922_pokemon_pawmoEntry | V0922_pokemon_pawmo_normalEntry | V0924_pokemon_tandemausEntry | V0924_pokemon_tandemaus_normalEntry | PokemonSettingsMaushold | PokemonSettingsMausholdFamilyOfFour | PokemonSettingsMausholdFamilyOfThree | V0926_pokemon_fidoughEntry | V0926_pokemon_fidough_normalEntry | V0927_pokemon_dachsbunEntry | PokemonSettingsDachsbunNormal | PokemonSettingsDudunsparceThree | PokemonSettingsDudunsparceTwo | V0928_pokemon_smolivEntry | V0928_pokemon_smoliv_normalEntry | V0929_pokemon_dollivEntry | V0929_pokemon_dolliv_normalEntry | V0930_pokemon_arbolivaEntry | V0930_pokemon_arboliva_normalEntry | PokemonSettingsSquawkabilly | PokemonSettingsCyclizar | PokemonSettingsVeluza | PokemonSettingsSquawkabillyBlue | PokemonSettingsSquawkabillyGreen | PokemonSettingsSquawkabillyWhite | PokemonSettingsSquawkabillyYellow | PokemonSettingsCyclizarNormal | PokemonSettingsVeluzaNormal | V0932_pokemon_nacliEntry | V0932_pokemon_nacli_normalEntry | V0933_pokemon_naclstackEntry | V0933_pokemon_naclstack_normalEntry | V0934_pokemon_garganaclEntry | V0934_pokemon_garganacl_normalEntry | V0935_pokemon_charcadetEntry | V0935_pokemon_charcadet_normalEntry | PokemonSettingsArmarouge | PokemonSettingsCeruledge | PokemonSettingsArmarougeNormal | PokemonSettingsCeruledgeNormal | V0938_pokemon_tadbulbEntry | V0938_pokemon_tadbulb_normalEntry | V0939_pokemon_belliboltEntry | V0939_pokemon_bellibolt_normalEntry | V0940_pokemon_wattrelEntry | V0940_pokemon_wattrel_normalEntry | V0941_pokemon_kilowattrelEntry | V0941_pokemon_kilowattrel_normalEntry | PokemonSettingsMaschiff | PokemonSettingsCapsakid | PokemonSettingsFlittle | PokemonSettingsFinizen | PokemonSettingsMaschiffNormal | PokemonSettingsCapsakidNormal | PokemonSettingsFlittleNormal | PokemonSettingsFinizenNormal | PokemonSettingsMabosstiff | PokemonSettingsEspathra | PokemonSettingsPalafin | PokemonSettingsDudunsparce | PokemonSettingsMabosstiffNormal | PokemonSettingsEspathraNormal | PokemonSettingsPalafinHero | PokemonSettingsPalafinZero | V0944_pokemon_shroodleEntry | V0944_pokemon_shroodle_normalEntry | V0945_pokemon_grafaiaiEntry | V0945_pokemon_grafaiai_normalEntry | V0946_pokemon_bramblinEntry | V0946_pokemon_bramblin_normalEntry | PokemonSettingsBrambleghast | PokemonSettingsScovillain | PokemonSettingsRabsca | PokemonSettingsFarigiraf | PokemonSettingsBrambleghastNormal | PokemonSettingsScovillainNormal | PokemonSettingsRabscaNormal | PokemonSettingsFarigirafNormal | V0948_pokemon_toedscoolEntry | V0948_pokemon_toedscool_normalEntry | V0949_pokemon_toedscruelEntry | V0949_pokemon_toedscruel_normalEntry | V0950_pokemon_klawfEntry | V0950_pokemon_klawf_normalEntry | V0953_pokemon_rellorEntry | V0953_pokemon_rellor_normalEntry | V0957_pokemon_tinkatinkEntry | V0957_pokemon_tinkatink_normalEntry | V0958_pokemon_tinkatuffEntry | V0958_pokemon_tinkatuff_normalEntry | V0959_pokemon_tinkatonEntry | V0959_pokemon_tinkaton_normalEntry | V0960_pokemon_wiglettEntry | V0960_pokemon_wiglett_normalEntry | V0961_pokemon_wugtrioEntry | V0961_pokemon_wugtrio_normalEntry | V0962_pokemon_bombirdierEntry | V0962_pokemon_bombirdier_normalEntry | V0965_pokemon_varoomEntry | V0965_pokemon_varoom_normalEntry | V0966_pokemon_revavroomEntry | V0966_pokemon_revavroom_normalEntry | V0968_pokemon_orthwormEntry | V0968_pokemon_orthworm_normalEntry | V0969_pokemon_glimmetEntry | V0969_pokemon_glimmet_normalEntry | V0970_pokemon_glimmoraEntry | V0970_pokemon_glimmora_normalEntry | V0971_pokemon_greavardEntry | V0971_pokemon_greavard_normalEntry | V0972_pokemon_houndstoneEntry | V0972_pokemon_houndstone_normalEntry | V0973_pokemon_flamigoEntry | V0973_pokemon_flamigo_normalEntry | V0974_pokemon_cetoddleEntry | V0974_pokemon_cetoddle_normalEntry | V0975_pokemon_cetitanEntry | V0975_pokemon_cetitan_normalEntry | V0977_pokemon_dondozoEntry | V0977_pokemon_dondozo_normalEntry | V0978_pokemon_tatsugiriEntry | PokemonSettingsCurly | PokemonSettingsDroopy | PokemonSettingsStretchy | V0979_pokemon_annihilapeEntry | V0979_pokemon_annihilape_normalEntry | V0980_pokemon_clodsireEntry | V0980_pokemon_clodsire_normalEntry | V0983_pokemon_kingambitEntry | V0983_pokemon_kingambit_normalEntry | PokemonSettingsGreattusk | PokemonSettingsBrutebonnet | PokemonSettingsFluttermane | PokemonSettingsSlitherwing | PokemonSettingsSandyshocks | PokemonSettingsIrontreads | PokemonSettingsIronbundle | PokemonSettingsIronhands | PokemonSettingsIronjugulis | PokemonSettingsIronmoth | PokemonSettingsIronthorns | PokemonSettingsRoaringmoon | PokemonSettingsIronvaliant | PokemonSettingsGreattuskNormal | PokemonSettingsBrutebonnetNormal | PokemonSettingsFluttermaneNormal | PokemonSettingsSlitherwingNormal | PokemonSettingsSandyshocksNormal | PokemonSettingsIrontreadsNormal | PokemonSettingsIronbundleNormal | PokemonSettingsIronhandsNormal | PokemonSettingsIronjugulisNormal | PokemonSettingsIronmothNormal | PokemonSettingsIronthornsNormal | PokemonSettingsRoaringmoonNormal | PokemonSettingsIronvaliantNormal | V0985_pokemon_screamtailEntry | V0985_pokemon_screamtail_normalEntry | V0996_pokemon_frigibaxEntry | V0996_pokemon_frigibax_normalEntry | V0997_pokemon_arctibaxEntry | V0997_pokemon_arctibax_normalEntry | V0998_pokemon_baxcaliburEntry | V0998_pokemon_baxcalibur_normalEntry | V0999_pokemon_gimmighoulEntry | V0999_pokemon_gimmighoul_coin_a1Entry | V0999_pokemon_gimmighoul_normalEntry | V1000_pokemon_gholdengoEntry | V1000_pokemon_gholdengo_normalEntry | PokemonSettingsWochien | PokemonSettingsTinglu | PokemonSettingsWochienNormal | PokemonSettingsTingluNormal | PokemonSettingsChienpao | PokemonSettingsChiyu | PokemonSettingsKoraidon | PokemonSettingsMiraidon | PokemonSettingsChienpaoNormal | PokemonSettingsChiyuNormal | PokemonSettingsKoraidonApex | PokemonSettingsMiraidonUltimate | PokemonSettingsWalkingwake | PokemonSettingsIronleaves | PokemonSettingsOkidogi | PokemonSettingsMunkidori | PokemonSettingsFezandipiti | PokemonSettingsGougingfire | PokemonSettingsRagingbolt | PokemonSettingsIronboulder | PokemonSettingsIroncrown | PokemonSettingsWalkingwakeNormal | PokemonSettingsIronleavesNormal | PokemonSettingsOkidogiNormal | PokemonSettingsMunkidoriNormal | PokemonSettingsFezandipitiNormal | PokemonSettingsGougingfireNormal | PokemonSettingsRagingboltNormal | PokemonSettingsIronboulderNormal | PokemonSettingsIroncrownNormal | V1011_pokemon_dipplinEntry | V1011_pokemon_dipplin_normalEntry | V1012_pokemon_poltchageistEntry | PokemonSettingsArtisan | PokemonSettingsCounterfeit | V1013_pokemon_sinistchaEntry | PokemonSettingsMasterpiece | PokemonSettingsUnremarkable | PokemonSettingsOgerpon | PokemonSettingsTerapagos | V1018_pokemon_archaludonEntry | V1018_pokemon_archaludon_normalEntry | PokemonSettingsHydrapple | PokemonSettingsHydrappleNormal | V1024_pokemon_terapagos_normalEntry | V1025_pokemon_pecharuntEntry | V1025_pokemon_pecharunt_normalEntry;

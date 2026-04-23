/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen5
// Filters: all
// Entries emitted: 346

import type { PokemonSettingsShared114, PokemonSettingsShared631, PokemonSettingsShared637, PokemonSettingsShared640, PokemonSettingsShared641, PokemonSettingsShared642, PokemonSettingsShared645, PokemonSettingsShared647, PokemonSettingsShared652, PokemonSettingsShared653, PokemonSettingsShared654, PokemonSettingsShared655, PokemonSettingsShared656, PokemonSettingsShared657, PokemonSettingsShared658, PokemonSettingsShared659, PokemonSettingsShared660, PokemonSettingsShared661, PokemonSettingsShared662, PokemonSettingsShared663, PokemonSettingsShared664, PokemonSettingsShared667, PokemonSettingsShared668, PokemonSettingsShared678, PokemonSettingsShared683, PokemonSettingsShared684, PokemonSettingsShared687, PokemonSettingsShared688, PokemonSettingsShared692, PokemonSettingsShared694, PokemonSettingsShared713, PokemonSettingsShared714, PokemonSettingsShared715, PokemonSettingsShared716, PokemonSettingsShared723, PokemonSettingsShared724, PokemonSettingsShared742, PokemonSettingsShared749, PokemonSettingsShared750, PokemonSettingsShared755, PokemonSettingsShared756, PokemonSettingsShared761, PokemonSettingsShared762, PokemonSettingsShared808, PokemonSettingsShared809, PokemonSettingsShared813, PokemonSettingsShared814, PokemonSettingsShared815, PokemonSettingsShared816, PokemonSettingsShared821, PokemonSettingsShared825, PokemonSettingsShared826, PokemonSettingsShared827, PokemonSettingsShared828, PokemonSettingsShared835, PokemonSettingsShared836, PokemonSettingsShared837, PokemonSettingsShared838, PokemonSettingsShared839, PokemonSettingsShared840, PokemonSettingsShared841, PokemonSettingsShared846, PokemonSettingsShared847, PokemonSettingsShared849, PokemonSettingsShared858, PokemonSettingsShared859, PokemonSettingsShared872, PokemonSettingsShared873, PokemonSettingsShared877, PokemonSettingsShared880, PokemonSettingsShared881, PokemonSettingsShared887, PokemonSettingsShared905, PokemonSettingsShared908, PokemonSettingsShared909, PokemonSettingsShared913, PokemonSettingsShared914, PokemonSettingsShared923, PokemonSettingsShared924, PokemonSettingsShared928, PokemonSettingsShared929, PokemonSettingsShared933, PokemonSettingsShared939, PokemonSettingsShared941 } from "./shared.generated";

export interface V0494_pokemon_victinidatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0494_pokemon_victinidatapokemonsettingsencounter {
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
export interface V0494_pokemon_victinidatapokemonsettingsibfc {

}
export interface V0494_pokemon_victinidatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0494_pokemon_victinidatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0494_pokemon_victinidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0494_pokemon_victinidata {
  pokemonSettings: V0494_pokemon_victinidatapokemonsettings;
  templateId: string;
}
export interface V0494_pokemon_victiniEntry {
  templateId: "V0494_POKEMON_VICTINI";
  data: V0494_pokemon_victinidata;
}
export interface V0494_pokemon_victini_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0494_pokemon_victini_normaldata {
  pokemonSettings: V0494_pokemon_victini_normaldatapokemonsettings;
  templateId: string;
}
export interface V0494_pokemon_victini_normalEntry {
  templateId: "V0494_POKEMON_VICTINI_NORMAL";
  data: V0494_pokemon_victini_normaldata;
}
export interface V0503_pokemon_samurottdatapokemonsettingsencounter {
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
export interface V0503_pokemon_samurottdatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0503_pokemon_samurottdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0503_pokemon_samurottdata {
  pokemonSettings: V0503_pokemon_samurottdatapokemonsettings;
  templateId: string;
}
export interface V0503_pokemon_samurottEntry {
  templateId: "V0503_POKEMON_SAMUROTT";
  data: V0503_pokemon_samurottdata;
}
export interface V0503_pokemon_samurott_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0503_pokemon_samurott_hisuiandata {
  pokemonSettings: V0503_pokemon_samurott_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0503_pokemon_samurott_hisuianEntry {
  templateId: "V0503_POKEMON_SAMUROTT_HISUIAN";
  data: V0503_pokemon_samurott_hisuiandata;
}
export interface V0503_pokemon_samurott_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0503_pokemon_samurott_normaldata {
  pokemonSettings: V0503_pokemon_samurott_normaldatapokemonsettings;
  templateId: string;
}
export interface V0503_pokemon_samurott_normalEntry {
  templateId: "V0503_POKEMON_SAMUROTT_NORMAL";
  data: V0503_pokemon_samurott_normaldata;
}
export interface V0517_pokemon_munnadatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0517_pokemon_munnadatapokemonsettingsencounter {
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
export interface V0517_pokemon_munnadatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0517_pokemon_munnadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munnadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0517_pokemon_munnadata {
  pokemonSettings: V0517_pokemon_munnadatapokemonsettings;
  templateId: string;
}
export interface V0517_pokemon_munnaEntry {
  templateId: "V0517_POKEMON_MUNNA";
  data: V0517_pokemon_munnadata;
}
export interface V0517_pokemon_munna_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0517_pokemon_munna_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munna_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0517_pokemon_munna_normaldata {
  pokemonSettings: V0517_pokemon_munna_normaldatapokemonsettings;
  templateId: string;
}
export interface V0517_pokemon_munna_normalEntry {
  templateId: "V0517_POKEMON_MUNNA_NORMAL";
  data: V0517_pokemon_munna_normaldata;
}
export interface V0518_pokemon_musharnadatapokemonsettingsencounter {
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
export interface V0518_pokemon_musharnadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0518_pokemon_musharnadata {
  pokemonSettings: V0518_pokemon_musharnadatapokemonsettings;
  templateId: string;
}
export interface V0518_pokemon_musharnaEntry {
  templateId: "V0518_POKEMON_MUSHARNA";
  data: V0518_pokemon_musharnadata;
}
export interface V0518_pokemon_musharna_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0518_pokemon_musharna_normaldata {
  pokemonSettings: V0518_pokemon_musharna_normaldatapokemonsettings;
  templateId: string;
}
export interface V0518_pokemon_musharna_normalEntry {
  templateId: "V0518_POKEMON_MUSHARNA_NORMAL";
  data: V0518_pokemon_musharna_normaldata;
}
export interface V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0520_pokemon_tranquilldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0520_pokemon_tranquilldata {
  pokemonSettings: V0520_pokemon_tranquilldatapokemonsettings;
  templateId: string;
}
export interface V0520_pokemon_tranquillEntry {
  templateId: "V0520_POKEMON_TRANQUILL";
  data: V0520_pokemon_tranquilldata;
}
export interface V0521_pokemon_unfezantdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0521_pokemon_unfezantdata {
  pokemonSettings: V0521_pokemon_unfezantdatapokemonsettings;
  templateId: string;
}
export interface V0521_pokemon_unfezantEntry {
  templateId: "V0521_POKEMON_UNFEZANT";
  data: V0521_pokemon_unfezantdata;
}
export interface V0521_pokemon_unfezant_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0521_pokemon_unfezant_normaldata {
  pokemonSettings: V0521_pokemon_unfezant_normaldatapokemonsettings;
  templateId: string;
}
export interface V0521_pokemon_unfezant_normalEntry {
  templateId: "V0521_POKEMON_UNFEZANT_NORMAL";
  data: V0521_pokemon_unfezant_normaldata;
}
export interface V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0527_pokemon_woobatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0527_pokemon_woobatdata {
  pokemonSettings: V0527_pokemon_woobatdatapokemonsettings;
  templateId: string;
}
export interface V0527_pokemon_woobatEntry {
  templateId: "V0527_POKEMON_WOOBAT";
  data: V0527_pokemon_woobatdata;
}
export interface V0527_pokemon_woobat_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0527_pokemon_woobat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0527_pokemon_woobat_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0527_pokemon_woobat_normaldata {
  pokemonSettings: V0527_pokemon_woobat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0527_pokemon_woobat_normalEntry {
  templateId: "V0527_POKEMON_WOOBAT_NORMAL";
  data: V0527_pokemon_woobat_normaldata;
}
export interface V0528_pokemon_swoobatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0528_pokemon_swoobatdata {
  pokemonSettings: V0528_pokemon_swoobatdatapokemonsettings;
  templateId: string;
}
export interface V0528_pokemon_swoobatEntry {
  templateId: "V0528_POKEMON_SWOOBAT";
  data: V0528_pokemon_swoobatdata;
}
export interface V0528_pokemon_swoobat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0528_pokemon_swoobat_normaldata {
  pokemonSettings: V0528_pokemon_swoobat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0528_pokemon_swoobat_normalEntry {
  templateId: "V0528_POKEMON_SWOOBAT_NORMAL";
  data: V0528_pokemon_swoobat_normaldata;
}
export interface V0531_pokemon_audinodatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusStardustCaptureReward: number;
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
export interface V0531_pokemon_audinodatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0531_pokemon_audinodatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0531_pokemon_audinodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0531_pokemon_audinodatapokemonsettingsencounter;
  evolutionBranch: (V0531_pokemon_audinodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  tempEvoOverrides: (V0531_pokemon_audinodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0531_pokemon_audinodata {
  pokemonSettings: V0531_pokemon_audinodatapokemonsettings;
  templateId: string;
}
export interface V0531_pokemon_audinoEntry {
  templateId: "V0531_POKEMON_AUDINO";
  data: V0531_pokemon_audinodata;
}
export interface V0531_pokemon_audino_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0531_pokemon_audinodatapokemonsettingsencounter;
  evolutionBranch: (V0531_pokemon_audinodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  tempEvoOverrides: (V0531_pokemon_audinodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0531_pokemon_audino_normaldata {
  pokemonSettings: V0531_pokemon_audino_normaldatapokemonsettings;
  templateId: string;
}
export interface V0531_pokemon_audino_normalEntry {
  templateId: "V0531_POKEMON_AUDINO_NORMAL";
  data: V0531_pokemon_audino_normaldata;
}
export interface V0542_pokemon_leavannydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0542_pokemon_leavannydata {
  pokemonSettings: V0542_pokemon_leavannydatapokemonsettings;
  templateId: string;
}
export interface V0542_pokemon_leavannyEntry {
  templateId: "V0542_POKEMON_LEAVANNY";
  data: V0542_pokemon_leavannydata;
}
export interface V0542_pokemon_leavanny_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0542_pokemon_leavanny_normaldata {
  pokemonSettings: V0542_pokemon_leavanny_normaldatapokemonsettings;
  templateId: string;
}
export interface V0542_pokemon_leavanny_normalEntry {
  templateId: "V0542_POKEMON_LEAVANNY_NORMAL";
  data: V0542_pokemon_leavanny_normaldata;
}
export interface V0546_pokemon_cottoneedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munnadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0546_pokemon_cottoneedata {
  pokemonSettings: V0546_pokemon_cottoneedatapokemonsettings;
  templateId: string;
}
export interface V0546_pokemon_cottoneeEntry {
  templateId: "V0546_POKEMON_COTTONEE";
  data: V0546_pokemon_cottoneedata;
}
export interface V0546_pokemon_cottonee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munna_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0546_pokemon_cottonee_normaldata {
  pokemonSettings: V0546_pokemon_cottonee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0546_pokemon_cottonee_normalEntry {
  templateId: "V0546_POKEMON_COTTONEE_NORMAL";
  data: V0546_pokemon_cottonee_normaldata;
}
export interface V0554_pokemon_darumaka_galariandatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0554_pokemon_darumaka_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0554_pokemon_darumaka_galariandata {
  pokemonSettings: V0554_pokemon_darumaka_galariandatapokemonsettings;
  templateId: string;
}
export interface V0554_pokemon_darumaka_galarianEntry {
  templateId: "V0554_POKEMON_DARUMAKA_GALARIAN";
  data: V0554_pokemon_darumaka_galariandata;
}
export interface V0555_pokemon_darmanitan_galarian_zendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0555_pokemon_darmanitan_galarian_zendata {
  pokemonSettings: V0555_pokemon_darmanitan_galarian_zendatapokemonsettings;
  templateId: string;
}
export interface V0555_pokemon_darmanitan_galarian_zenEntry {
  templateId: "V0555_POKEMON_DARMANITAN_GALARIAN_ZEN";
  data: V0555_pokemon_darmanitan_galarian_zendata;
}
export interface V0561_pokemon_sigilyphdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0561_pokemon_sigilyphdata {
  pokemonSettings: V0561_pokemon_sigilyphdatapokemonsettings;
  templateId: string;
}
export interface V0561_pokemon_sigilyphEntry {
  templateId: "V0561_POKEMON_SIGILYPH";
  data: V0561_pokemon_sigilyphdata;
}
export interface V0561_pokemon_sigilyph_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0561_pokemon_sigilyph_normaldata {
  pokemonSettings: V0561_pokemon_sigilyph_normaldatapokemonsettings;
  templateId: string;
}
export interface V0561_pokemon_sigilyph_normalEntry {
  templateId: "V0561_POKEMON_SIGILYPH_NORMAL";
  data: V0561_pokemon_sigilyph_normaldata;
}
export interface V0562_pokemon_yamaskdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0562_pokemon_yamaskdata {
  pokemonSettings: V0562_pokemon_yamaskdatapokemonsettings;
  templateId: string;
}
export interface V0562_pokemon_yamaskEntry {
  templateId: "V0562_POKEMON_YAMASK";
  data: V0562_pokemon_yamaskdata;
}
export interface V0562_pokemon_yamask_galariandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  questDisplay: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0562_pokemon_yamask_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0562_pokemon_yamask_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0562_pokemon_yamask_galariandata {
  pokemonSettings: V0562_pokemon_yamask_galariandatapokemonsettings;
  templateId: string;
}
export interface V0562_pokemon_yamask_galarianEntry {
  templateId: "V0562_POKEMON_YAMASK_GALARIAN";
  data: V0562_pokemon_yamask_galariandata;
}
export interface V0562_pokemon_yamask_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0562_pokemon_yamask_normaldata {
  pokemonSettings: V0562_pokemon_yamask_normaldatapokemonsettings;
  templateId: string;
}
export interface V0562_pokemon_yamask_normalEntry {
  templateId: "V0562_POKEMON_YAMASK_NORMAL";
  data: V0562_pokemon_yamask_normaldata;
}
export interface V0563_pokemon_cofagrigusdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
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
export interface V0563_pokemon_cofagrigusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0563_pokemon_cofagrigusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0563_pokemon_cofagrigusdata {
  pokemonSettings: V0563_pokemon_cofagrigusdatapokemonsettings;
  templateId: string;
}
export interface V0563_pokemon_cofagrigusEntry {
  templateId: "V0563_POKEMON_COFAGRIGUS";
  data: V0563_pokemon_cofagrigusdata;
}
export interface V0563_pokemon_cofagrigus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0563_pokemon_cofagrigusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0563_pokemon_cofagrigus_normaldata {
  pokemonSettings: V0563_pokemon_cofagrigus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0563_pokemon_cofagrigus_normalEntry {
  templateId: "V0563_POKEMON_COFAGRIGUS_NORMAL";
  data: V0563_pokemon_cofagrigus_normaldata;
}
export interface V0568_pokemon_trubbishdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusStardustCaptureReward: number;
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
export interface V0568_pokemon_trubbishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0568_pokemon_trubbishdatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0568_pokemon_trubbishdata {
  pokemonSettings: V0568_pokemon_trubbishdatapokemonsettings;
  templateId: string;
}
export interface V0568_pokemon_trubbishEntry {
  templateId: "V0568_POKEMON_TRUBBISH";
  data: V0568_pokemon_trubbishdata;
}
export interface V0568_pokemon_trubbish_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0568_pokemon_trubbishdatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0568_pokemon_trubbish_normaldata {
  pokemonSettings: V0568_pokemon_trubbish_normaldatapokemonsettings;
  templateId: string;
}
export interface V0568_pokemon_trubbish_normalEntry {
  templateId: "V0568_POKEMON_TRUBBISH_NORMAL";
  data: V0568_pokemon_trubbish_normaldata;
}
export interface V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0570_pokemon_zorua_hisuiandatapokemonsettingstempevooverridesitem {
  raidBossDistanceOffset: number;
}
export interface V0570_pokemon_zorua_hisuiandatapokemonsettings {
  animationTime: (number)[];
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  tempEvoOverrides: (V0570_pokemon_zorua_hisuiandatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0570_pokemon_zorua_hisuiandata {
  pokemonSettings: V0570_pokemon_zorua_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0570_pokemon_zorua_hisuianEntry {
  templateId: "V0570_POKEMON_ZORUA_HISUIAN";
  data: V0570_pokemon_zorua_hisuiandata;
}
export interface V0571_pokemon_zoroark_hisuiandatapokemonsettings {
  animationTime: (number)[];
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0571_pokemon_zoroark_hisuiandata {
  pokemonSettings: V0571_pokemon_zoroark_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0571_pokemon_zoroark_hisuianEntry {
  templateId: "V0571_POKEMON_ZOROARK_HISUIAN";
  data: V0571_pokemon_zoroark_hisuiandata;
}
export interface V0577_pokemon_solosisdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0577_pokemon_solosisdata {
  pokemonSettings: V0577_pokemon_solosisdatapokemonsettings;
  templateId: string;
}
export interface V0577_pokemon_solosisEntry {
  templateId: "V0577_POKEMON_SOLOSIS";
  data: V0577_pokemon_solosisdata;
}
export interface V0577_pokemon_solosis_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0577_pokemon_solosis_normaldata {
  pokemonSettings: V0577_pokemon_solosis_normaldatapokemonsettings;
  templateId: string;
}
export interface V0577_pokemon_solosis_normalEntry {
  templateId: "V0577_POKEMON_SOLOSIS_NORMAL";
  data: V0577_pokemon_solosis_normaldata;
}
export interface V0578_pokemon_duosiondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0578_pokemon_duosiondata {
  pokemonSettings: V0578_pokemon_duosiondatapokemonsettings;
  templateId: string;
}
export interface V0578_pokemon_duosionEntry {
  templateId: "V0578_POKEMON_DUOSION";
  data: V0578_pokemon_duosiondata;
}
export interface V0578_pokemon_duosion_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0578_pokemon_duosion_normaldata {
  pokemonSettings: V0578_pokemon_duosion_normaldatapokemonsettings;
  templateId: string;
}
export interface V0578_pokemon_duosion_normalEntry {
  templateId: "V0578_POKEMON_DUOSION_NORMAL";
  data: V0578_pokemon_duosion_normaldata;
}
export interface V0579_pokemon_reuniclusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0579_pokemon_reuniclusdata {
  pokemonSettings: V0579_pokemon_reuniclusdatapokemonsettings;
  templateId: string;
}
export interface V0579_pokemon_reuniclusEntry {
  templateId: "V0579_POKEMON_REUNICLUS";
  data: V0579_pokemon_reuniclusdata;
}
export interface V0579_pokemon_reuniclus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0579_pokemon_reuniclus_normaldata {
  pokemonSettings: V0579_pokemon_reuniclus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0579_pokemon_reuniclus_normalEntry {
  templateId: "V0579_POKEMON_REUNICLUS_NORMAL";
  data: V0579_pokemon_reuniclus_normaldata;
}
export interface V0582_pokemon_vanillitedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0582_pokemon_vanillitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0582_pokemon_vanillitedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0582_pokemon_vanillitedata {
  pokemonSettings: V0582_pokemon_vanillitedatapokemonsettings;
  templateId: string;
}
export interface V0582_pokemon_vanilliteEntry {
  templateId: "V0582_POKEMON_VANILLITE";
  data: V0582_pokemon_vanillitedata;
}
export interface V0582_pokemon_vanillite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0582_pokemon_vanillite_normaldata {
  pokemonSettings: V0582_pokemon_vanillite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0582_pokemon_vanillite_normalEntry {
  templateId: "V0582_POKEMON_VANILLITE_NORMAL";
  data: V0582_pokemon_vanillite_normaldata;
}
export interface V0584_pokemon_vanilluxedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0584_pokemon_vanilluxedata {
  pokemonSettings: V0584_pokemon_vanilluxedatapokemonsettings;
  templateId: string;
}
export interface V0584_pokemon_vanilluxeEntry {
  templateId: "V0584_POKEMON_VANILLUXE";
  data: V0584_pokemon_vanilluxedata;
}
export interface V0584_pokemon_vanilluxe_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0584_pokemon_vanilluxe_normaldata {
  pokemonSettings: V0584_pokemon_vanilluxe_normaldatapokemonsettings;
  templateId: string;
}
export interface V0584_pokemon_vanilluxe_normalEntry {
  templateId: "V0584_POKEMON_VANILLUXE_NORMAL";
  data: V0584_pokemon_vanilluxe_normaldata;
}
export interface V0586_pokemon_sawsbuckdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0586_pokemon_sawsbuckdata {
  pokemonSettings: V0586_pokemon_sawsbuckdatapokemonsettings;
  templateId: string;
}
export interface V0586_pokemon_sawsbuckEntry {
  templateId: "V0586_POKEMON_SAWSBUCK";
  data: V0586_pokemon_sawsbuckdata;
}
export interface V0587_pokemon_emolgadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
  irisPhotoEmote1: string;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0587_pokemon_emolgadata {
  pokemonSettings: V0587_pokemon_emolgadatapokemonsettings;
  templateId: string;
}
export interface V0587_pokemon_emolgaEntry {
  templateId: "V0587_POKEMON_EMOLGA";
  data: V0587_pokemon_emolgadata;
}
export interface V0587_pokemon_emolga_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
  irisPhotoEmote1: string;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0587_pokemon_emolga_normaldata {
  pokemonSettings: V0587_pokemon_emolga_normaldatapokemonsettings;
  templateId: string;
}
export interface V0587_pokemon_emolga_normalEntry {
  templateId: "V0587_POKEMON_EMOLGA_NORMAL";
  data: V0587_pokemon_emolga_normaldata;
}
export interface V0589_pokemon_escavalierdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0589_pokemon_escavalierdata {
  pokemonSettings: V0589_pokemon_escavalierdatapokemonsettings;
  templateId: string;
}
export interface V0589_pokemon_escavalierEntry {
  templateId: "V0589_POKEMON_ESCAVALIER";
  data: V0589_pokemon_escavalierdata;
}
export interface V0589_pokemon_escavalier_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0589_pokemon_escavalier_normaldata {
  pokemonSettings: V0589_pokemon_escavalier_normaldatapokemonsettings;
  templateId: string;
}
export interface V0589_pokemon_escavalier_normalEntry {
  templateId: "V0589_POKEMON_ESCAVALIER_NORMAL";
  data: V0589_pokemon_escavalier_normaldata;
}
export interface V0590_pokemon_foongusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0568_pokemon_trubbishdatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0590_pokemon_foongusdata {
  pokemonSettings: V0590_pokemon_foongusdatapokemonsettings;
  templateId: string;
}
export interface V0590_pokemon_foongusEntry {
  templateId: "V0590_POKEMON_FOONGUS";
  data: V0590_pokemon_foongusdata;
}
export interface V0590_pokemon_foongus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0568_pokemon_trubbishdatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0590_pokemon_foongus_normaldata {
  pokemonSettings: V0590_pokemon_foongus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0590_pokemon_foongus_normalEntry {
  templateId: "V0590_POKEMON_FOONGUS_NORMAL";
  data: V0590_pokemon_foongus_normaldata;
}
export interface V0593_pokemon_jellicentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0593_pokemon_jellicentdata {
  pokemonSettings: V0593_pokemon_jellicentdatapokemonsettings;
  templateId: string;
}
export interface V0593_pokemon_jellicentEntry {
  templateId: "V0593_POKEMON_JELLICENT";
  data: V0593_pokemon_jellicentdata;
}
export interface V0595_pokemon_joltikdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  raidBossDistanceOffset: number;
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0595_pokemon_joltikdata {
  pokemonSettings: V0595_pokemon_joltikdatapokemonsettings;
  templateId: string;
}
export interface V0595_pokemon_joltikEntry {
  templateId: "V0595_POKEMON_JOLTIK";
  data: V0595_pokemon_joltikdata;
}
export interface V0599_pokemon_klinkdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0582_pokemon_vanillitedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0599_pokemon_klinkdata {
  pokemonSettings: V0599_pokemon_klinkdatapokemonsettings;
  templateId: string;
}
export interface V0599_pokemon_klinkEntry {
  templateId: "V0599_POKEMON_KLINK";
  data: V0599_pokemon_klinkdata;
}
export interface V0599_pokemon_klink_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0599_pokemon_klink_normaldata {
  pokemonSettings: V0599_pokemon_klink_normaldatapokemonsettings;
  templateId: string;
}
export interface V0599_pokemon_klink_normalEntry {
  templateId: "V0599_POKEMON_KLINK_NORMAL";
  data: V0599_pokemon_klink_normaldata;
}
export interface V0601_pokemon_klinklangdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0601_pokemon_klinklangdata {
  pokemonSettings: V0601_pokemon_klinklangdatapokemonsettings;
  templateId: string;
}
export interface V0601_pokemon_klinklangEntry {
  templateId: "V0601_POKEMON_KLINKLANG";
  data: V0601_pokemon_klinklangdata;
}
export interface V0601_pokemon_klinklang_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0601_pokemon_klinklang_normaldata {
  pokemonSettings: V0601_pokemon_klinklang_normaldatapokemonsettings;
  templateId: string;
}
export interface V0601_pokemon_klinklang_normalEntry {
  templateId: "V0601_POKEMON_KLINKLANG_NORMAL";
  data: V0601_pokemon_klinklang_normaldata;
}
export interface V0603_pokemon_eelektrikdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munnadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0603_pokemon_eelektrikdata {
  pokemonSettings: V0603_pokemon_eelektrikdatapokemonsettings;
  templateId: string;
}
export interface V0603_pokemon_eelektrikEntry {
  templateId: "V0603_POKEMON_EELEKTRIK";
  data: V0603_pokemon_eelektrikdata;
}
export interface V0603_pokemon_eelektrik_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionBranch: (V0517_pokemon_munna_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0603_pokemon_eelektrik_normaldata {
  pokemonSettings: V0603_pokemon_eelektrik_normaldatapokemonsettings;
  templateId: string;
}
export interface V0603_pokemon_eelektrik_normalEntry {
  templateId: "V0603_POKEMON_EELEKTRIK_NORMAL";
  data: V0603_pokemon_eelektrik_normaldata;
}
export interface V0604_pokemon_eelektrossdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0604_pokemon_eelektrossdata {
  pokemonSettings: V0604_pokemon_eelektrossdatapokemonsettings;
  templateId: string;
}
export interface V0604_pokemon_eelektrossEntry {
  templateId: "V0604_POKEMON_EELEKTROSS";
  data: V0604_pokemon_eelektrossdata;
}
export interface V0604_pokemon_eelektross_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0604_pokemon_eelektross_normaldata {
  pokemonSettings: V0604_pokemon_eelektross_normaldatapokemonsettings;
  templateId: string;
}
export interface V0604_pokemon_eelektross_normalEntry {
  templateId: "V0604_POKEMON_EELEKTROSS_NORMAL";
  data: V0604_pokemon_eelektross_normaldata;
}
export interface V0608_pokemon_lampentdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0608_pokemon_lampentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0608_pokemon_lampentdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0608_pokemon_lampentdata {
  pokemonSettings: V0608_pokemon_lampentdatapokemonsettings;
  templateId: string;
}
export interface V0608_pokemon_lampentEntry {
  templateId: "V0608_POKEMON_LAMPENT";
  data: V0608_pokemon_lampentdata;
}
export interface V0608_pokemon_lampent_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0608_pokemon_lampent_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0608_pokemon_lampent_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0608_pokemon_lampent_normaldata {
  pokemonSettings: V0608_pokemon_lampent_normaldatapokemonsettings;
  templateId: string;
}
export interface V0608_pokemon_lampent_normalEntry {
  templateId: "V0608_POKEMON_LAMPENT_NORMAL";
  data: V0608_pokemon_lampent_normaldata;
}
export interface V0609_pokemon_chandeluredatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0609_pokemon_chandeluredata {
  pokemonSettings: V0609_pokemon_chandeluredatapokemonsettings;
  templateId: string;
}
export interface V0609_pokemon_chandelureEntry {
  templateId: "V0609_POKEMON_CHANDELURE";
  data: V0609_pokemon_chandeluredata;
}
export interface V0609_pokemon_chandelure_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0609_pokemon_chandelure_normaldata {
  pokemonSettings: V0609_pokemon_chandelure_normaldatapokemonsettings;
  templateId: string;
}
export interface V0609_pokemon_chandelure_normalEntry {
  templateId: "V0609_POKEMON_CHANDELURE_NORMAL";
  data: V0609_pokemon_chandelure_normaldata;
}
export interface V0613_pokemon_cubchoo_winter_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0613_pokemon_cubchoo_winter_2020data {
  pokemonSettings: V0613_pokemon_cubchoo_winter_2020datapokemonsettings;
  templateId: string;
}
export interface V0613_pokemon_cubchoo_winter_2020Entry {
  templateId: "V0613_POKEMON_CUBCHOO_WINTER_2020";
  data: V0613_pokemon_cubchoo_winter_2020data;
}
export interface V0615_pokemon_cryogonaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0615_pokemon_cryogonaldata {
  pokemonSettings: V0615_pokemon_cryogonaldatapokemonsettings;
  templateId: string;
}
export interface V0615_pokemon_cryogonalEntry {
  templateId: "V0615_POKEMON_CRYOGONAL";
  data: V0615_pokemon_cryogonaldata;
}
export interface V0615_pokemon_cryogonal_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0615_pokemon_cryogonal_normaldata {
  pokemonSettings: V0615_pokemon_cryogonal_normaldatapokemonsettings;
  templateId: string;
}
export interface V0615_pokemon_cryogonal_normalEntry {
  templateId: "V0615_POKEMON_CRYOGONAL_NORMAL";
  data: V0615_pokemon_cryogonal_normaldata;
}
export interface V0618_pokemon_stunfiskdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0554_pokemon_darumaka_galariandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0618_pokemon_stunfiskdata {
  pokemonSettings: V0618_pokemon_stunfiskdatapokemonsettings;
  templateId: string;
}
export interface V0618_pokemon_stunfiskEntry {
  templateId: "V0618_POKEMON_STUNFISK";
  data: V0618_pokemon_stunfiskdata;
}
export interface V0619_pokemon_mienfoodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0582_pokemon_vanillitedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0619_pokemon_mienfoodata {
  pokemonSettings: V0619_pokemon_mienfoodatapokemonsettings;
  templateId: string;
}
export interface V0619_pokemon_mienfooEntry {
  templateId: "V0619_POKEMON_MIENFOO";
  data: V0619_pokemon_mienfoodata;
}
export interface V0619_pokemon_mienfoo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0619_pokemon_mienfoo_normaldata {
  pokemonSettings: V0619_pokemon_mienfoo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0619_pokemon_mienfoo_normalEntry {
  templateId: "V0619_POKEMON_MIENFOO_NORMAL";
  data: V0619_pokemon_mienfoo_normaldata;
}
export interface V0625_pokemon_bisharpdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  questDisplay: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0625_pokemon_bisharpdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionBranch: (V0625_pokemon_bisharpdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0625_pokemon_bisharpdata {
  pokemonSettings: V0625_pokemon_bisharpdatapokemonsettings;
  templateId: string;
}
export interface V0625_pokemon_bisharpEntry {
  templateId: "V0625_POKEMON_BISHARP";
  data: V0625_pokemon_bisharpdata;
}
export interface V0625_pokemon_bisharp_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  questDisplay: (V0527_pokemon_woobatdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0625_pokemon_bisharp_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionBranch: (V0625_pokemon_bisharp_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0625_pokemon_bisharp_normaldata {
  pokemonSettings: V0625_pokemon_bisharp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0625_pokemon_bisharp_normalEntry {
  templateId: "V0625_POKEMON_BISHARP_NORMAL";
  data: V0625_pokemon_bisharp_normaldata;
}
export interface V0627_pokemon_ruffletdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionBranch: (V0570_pokemon_zorua_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0627_pokemon_ruffletdata {
  pokemonSettings: V0627_pokemon_ruffletdatapokemonsettings;
  templateId: string;
}
export interface V0627_pokemon_ruffletEntry {
  templateId: "V0627_POKEMON_RUFFLET";
  data: V0627_pokemon_ruffletdata;
}
export interface V0631_pokemon_heatmordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0631_pokemon_heatmordata {
  pokemonSettings: V0631_pokemon_heatmordatapokemonsettings;
  templateId: string;
}
export interface V0631_pokemon_heatmorEntry {
  templateId: "V0631_POKEMON_HEATMOR";
  data: V0631_pokemon_heatmordata;
}
export interface V0631_pokemon_heatmor_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0517_pokemon_munnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0631_pokemon_heatmor_normaldata {
  pokemonSettings: V0631_pokemon_heatmor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0631_pokemon_heatmor_normalEntry {
  templateId: "V0631_POKEMON_HEATMOR_NORMAL";
  data: V0631_pokemon_heatmor_normaldata;
}
export interface V0634_pokemon_zweilousdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0520_pokemon_tranquilldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0634_pokemon_zweilousdata {
  pokemonSettings: V0634_pokemon_zweilousdatapokemonsettings;
  templateId: string;
}
export interface V0634_pokemon_zweilousEntry {
  templateId: "V0634_POKEMON_ZWEILOUS";
  data: V0634_pokemon_zweilousdata;
}
export interface V0634_pokemon_zweilous_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionBranch: (V0554_pokemon_darumaka_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0634_pokemon_zweilous_normaldata {
  pokemonSettings: V0634_pokemon_zweilous_normaldatapokemonsettings;
  templateId: string;
}
export interface V0634_pokemon_zweilous_normalEntry {
  templateId: "V0634_POKEMON_ZWEILOUS_NORMAL";
  data: V0634_pokemon_zweilous_normaldata;
}
export interface V0635_pokemon_hydreigondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0635_pokemon_hydreigondata {
  pokemonSettings: V0635_pokemon_hydreigondatapokemonsettings;
  templateId: string;
}
export interface V0635_pokemon_hydreigonEntry {
  templateId: "V0635_POKEMON_HYDREIGON";
  data: V0635_pokemon_hydreigondata;
}
export interface V0635_pokemon_hydreigon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0503_pokemon_samurottdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0635_pokemon_hydreigon_normaldata {
  pokemonSettings: V0635_pokemon_hydreigon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0635_pokemon_hydreigon_normalEntry {
  templateId: "V0635_POKEMON_HYDREIGON_NORMAL";
  data: V0635_pokemon_hydreigon_normaldata;
}
export interface V0637_pokemon_volcaronadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0637_pokemon_volcaronadata {
  pokemonSettings: V0637_pokemon_volcaronadatapokemonsettings;
  templateId: string;
}
export interface V0637_pokemon_volcaronaEntry {
  templateId: "V0637_POKEMON_VOLCARONA";
  data: V0637_pokemon_volcaronadata;
}
export interface V0637_pokemon_volcarona_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0518_pokemon_musharnadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
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
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0637_pokemon_volcarona_normaldata {
  pokemonSettings: V0637_pokemon_volcarona_normaldatapokemonsettings;
  templateId: string;
}
export interface V0637_pokemon_volcarona_normalEntry {
  templateId: "V0637_POKEMON_VOLCARONA_NORMAL";
  data: V0637_pokemon_volcarona_normaldata;
}
export interface V0641_pokemon_tornadusdatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0641_pokemon_tornadusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0641_pokemon_tornadusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0641_pokemon_tornadusdata {
  pokemonSettings: V0641_pokemon_tornadusdatapokemonsettings;
  templateId: string;
}
export interface V0641_pokemon_tornadusEntry {
  templateId: "V0641_POKEMON_TORNADUS";
  data: V0641_pokemon_tornadusdata;
}
export interface V0641_pokemon_tornadus_incarnatedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0641_pokemon_tornadusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0641_pokemon_tornadus_incarnatedata {
  pokemonSettings: V0641_pokemon_tornadus_incarnatedatapokemonsettings;
  templateId: string;
}
export interface V0641_pokemon_tornadus_incarnateEntry {
  templateId: "V0641_POKEMON_TORNADUS_INCARNATE";
  data: V0641_pokemon_tornadus_incarnatedata;
}
export interface V0641_pokemon_tornadus_theriandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0641_pokemon_tornadusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  irisPhotoEmote1: string;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0641_pokemon_tornadus_theriandata {
  pokemonSettings: V0641_pokemon_tornadus_theriandatapokemonsettings;
  templateId: string;
}
export interface V0641_pokemon_tornadus_therianEntry {
  templateId: "V0641_POKEMON_TORNADUS_THERIAN";
  data: V0641_pokemon_tornadus_theriandata;
}
export interface V0642_pokemon_thundurus_theriandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0641_pokemon_tornadusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0642_pokemon_thundurus_theriandata {
  pokemonSettings: V0642_pokemon_thundurus_theriandatapokemonsettings;
  templateId: string;
}
export interface V0642_pokemon_thundurus_therianEntry {
  templateId: "V0642_POKEMON_THUNDURUS_THERIAN";
  data: V0642_pokemon_thundurus_theriandata;
}
export interface V0645_pokemon_landorus_theriandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0641_pokemon_tornadusdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0503_pokemon_samurottdatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0645_pokemon_landorus_theriandata {
  pokemonSettings: V0645_pokemon_landorus_theriandatapokemonsettings;
  templateId: string;
}
export interface V0645_pokemon_landorus_therianEntry {
  templateId: "V0645_POKEMON_LANDORUS_THERIAN";
  data: V0645_pokemon_landorus_theriandata;
}
export interface V0646_pokemon_kyuremdatapokemonsettingsformchangeitemcomponentpokemonsettingslocationcardsettingsitem {
  basePokemonLocationCard: string;
  componentPokemonLocationCard: string;
  fusionPokemonLocationCard: string;
}
export interface V0646_pokemon_kyuremdatapokemonsettingsformchangeitemcomponentpokemonsettings {
  componentCandyCost: number;
  familyId: string;
  formChangeType: string;
  locationCardSettings: (V0646_pokemon_kyuremdatapokemonsettingsformchangeitemcomponentpokemonsettingslocationcardsettingsitem)[];
  pokedexId: string;
}
export interface V0646_pokemon_kyuremdatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem {
  existingMoves: (string)[];
  replacementMoves: (string)[];
}
export interface V0646_pokemon_kyuremdatapokemonsettingsformchangeitemmovereassignment {
  cinematicMoves: (V0646_pokemon_kyuremdatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem)[];
}
export interface V0646_pokemon_kyuremdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  componentPokemonSettings: V0646_pokemon_kyuremdatapokemonsettingsformchangeitemcomponentpokemonsettings;
  item: string;
  itemCostCount: number;
  moveReassignment: V0646_pokemon_kyuremdatapokemonsettingsformchangeitemmovereassignment;
}
export interface V0646_pokemon_kyuremdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  formChange: (V0646_pokemon_kyuremdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0646_pokemon_kyuremdata {
  pokemonSettings: V0646_pokemon_kyuremdatapokemonsettings;
  templateId: string;
}
export interface V0646_pokemon_kyuremEntry {
  templateId: "V0646_POKEMON_KYUREM";
  data: V0646_pokemon_kyuremdata;
}
export interface V0646_pokemon_kyurem_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0646_pokemon_kyuremdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0646_pokemon_kyurem_normaldata {
  pokemonSettings: V0646_pokemon_kyurem_normaldatapokemonsettings;
  templateId: string;
}
export interface V0646_pokemon_kyurem_normalEntry {
  templateId: "V0646_POKEMON_KYUREM_NORMAL";
  data: V0646_pokemon_kyurem_normaldata;
}
export interface V0647_pokemon_keldeodatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem {
  replacementMoves: (string)[];
}
export interface V0647_pokemon_keldeodatapokemonsettingsformchangeitemmovereassignment {
  cinematicMoves: (V0647_pokemon_keldeodatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem)[];
}
export interface V0647_pokemon_keldeodatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  moveReassignment: V0647_pokemon_keldeodatapokemonsettingsformchangeitemmovereassignment;
  stardustCost: number;
}
export interface V0647_pokemon_keldeodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  formChange: (V0647_pokemon_keldeodatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0647_pokemon_keldeodata {
  pokemonSettings: V0647_pokemon_keldeodatapokemonsettings;
  templateId: string;
}
export interface V0647_pokemon_keldeoEntry {
  templateId: "V0647_POKEMON_KELDEO";
  data: V0647_pokemon_keldeodata;
}
export interface V0647_pokemon_keldeo_ordinarydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0647_pokemon_keldeodatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0647_pokemon_keldeo_ordinarydata {
  pokemonSettings: V0647_pokemon_keldeo_ordinarydatapokemonsettings;
  templateId: string;
}
export interface V0647_pokemon_keldeo_ordinaryEntry {
  templateId: "V0647_POKEMON_KELDEO_ORDINARY";
  data: V0647_pokemon_keldeo_ordinarydata;
}
export interface V0647_pokemon_keldeo_resolutedatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  moveReassignment: V0646_pokemon_kyuremdatapokemonsettingsformchangeitemmovereassignment;
  stardustCost: number;
}
export interface V0647_pokemon_keldeo_resolutedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0647_pokemon_keldeo_resolutedatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0647_pokemon_keldeo_resolutedata {
  pokemonSettings: V0647_pokemon_keldeo_resolutedatapokemonsettings;
  templateId: string;
}
export interface V0647_pokemon_keldeo_resoluteEntry {
  templateId: "V0647_POKEMON_KELDEO_RESOLUTE";
  data: V0647_pokemon_keldeo_resolutedata;
}
export interface V0648_pokemon_meloettadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0648_pokemon_meloettadata {
  pokemonSettings: V0648_pokemon_meloettadatapokemonsettings;
  templateId: string;
}
export interface V0648_pokemon_meloettaEntry {
  templateId: "V0648_POKEMON_MELOETTA";
  data: V0648_pokemon_meloettadata;
}
export interface V0649_pokemon_genesectdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0494_pokemon_victinidatapokemonsettingsibfc;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0649_pokemon_genesectdata {
  pokemonSettings: V0649_pokemon_genesectdatapokemonsettings;
  templateId: string;
}
export interface V0649_pokemon_genesectEntry {
  templateId: "V0649_POKEMON_GENESECT";
  data: V0649_pokemon_genesectdata;
}

export type PokemonSettingsSnivy = PokemonSettingsShared642<"V0495_POKEMON_SNIVY", "SNIVY">;
export type PokemonSettingsOshawott = PokemonSettingsShared642<"V0501_POKEMON_OSHAWOTT", "OSHAWOTT">;
export type PokemonSettingsPatrat = PokemonSettingsShared642<"V0504_POKEMON_PATRAT", "PATRAT">;
export type PokemonSettingsPurrloin = PokemonSettingsShared642<"V0509_POKEMON_PURRLOIN", "PURRLOIN">;
export type PokemonSettingsBlitzle = PokemonSettingsShared642<"V0522_POKEMON_BLITZLE", "BLITZLE">;
export type PokemonSettingsRoggenrola = PokemonSettingsShared642<"V0524_POKEMON_ROGGENROLA", "ROGGENROLA">;
export type PokemonSettingsTimburr = PokemonSettingsShared642<"V0532_POKEMON_TIMBURR", "TIMBURR">;
export type PokemonSettingsGothita = PokemonSettingsShared642<"V0574_POKEMON_GOTHITA", "GOTHITA">;

export type PokemonSettingsSnivyNormal = PokemonSettingsShared114<"V0495_POKEMON_SNIVY_NORMAL", "SNIVY_NORMAL", "SNIVY">;
export type PokemonSettingsOshawottNormal = PokemonSettingsShared114<"V0501_POKEMON_OSHAWOTT_NORMAL", "OSHAWOTT_NORMAL", "OSHAWOTT">;
export type PokemonSettingsPatratNormal = PokemonSettingsShared114<"V0504_POKEMON_PATRAT_NORMAL", "PATRAT_NORMAL", "PATRAT">;
export type PokemonSettingsPurrloinNormal = PokemonSettingsShared114<"V0509_POKEMON_PURRLOIN_NORMAL", "PURRLOIN_NORMAL", "PURRLOIN">;
export type PokemonSettingsBlitzleNormal = PokemonSettingsShared114<"V0522_POKEMON_BLITZLE_NORMAL", "BLITZLE_NORMAL", "BLITZLE">;
export type PokemonSettingsRoggenrolaNormal = PokemonSettingsShared114<"V0524_POKEMON_ROGGENROLA_NORMAL", "ROGGENROLA_NORMAL", "ROGGENROLA">;
export type PokemonSettingsDrilburNormal = PokemonSettingsShared114<"V0529_POKEMON_DRILBUR_NORMAL", "DRILBUR_NORMAL", "DRILBUR">;
export type PokemonSettingsTimburrNormal = PokemonSettingsShared114<"V0532_POKEMON_TIMBURR_NORMAL", "TIMBURR_NORMAL", "TIMBURR">;
export type PokemonSettingsDarumakaNormal = PokemonSettingsShared114<"V0554_POKEMON_DARUMAKA_NORMAL", "DARUMAKA_NORMAL", "DARUMAKA">;
export type PokemonSettingsGothitaNormal = PokemonSettingsShared114<"V0574_POKEMON_GOTHITA_NORMAL", "GOTHITA_NORMAL", "GOTHITA">;

export type PokemonSettingsServine = PokemonSettingsShared659<"V0496_POKEMON_SERVINE", "SERVINE">;
export type PokemonSettingsDewott = PokemonSettingsShared659<"V0502_POKEMON_DEWOTT", "DEWOTT">;
export type PokemonSettingsGothorita = PokemonSettingsShared659<"V0575_POKEMON_GOTHORITA", "GOTHORITA">;

export type PokemonSettingsServineNormal = PokemonSettingsShared660<"V0496_POKEMON_SERVINE_NORMAL", "SERVINE_NORMAL", "SERVINE">;
export type PokemonSettingsDewottNormal = PokemonSettingsShared660<"V0502_POKEMON_DEWOTT_NORMAL", "DEWOTT_NORMAL", "DEWOTT">;
export type PokemonSettingsGothoritaNormal = PokemonSettingsShared660<"V0575_POKEMON_GOTHORITA_NORMAL", "GOTHORITA_NORMAL", "GOTHORITA">;

export type PokemonSettingsSerperior = PokemonSettingsShared661<"V0497_POKEMON_SERPERIOR", "SERPERIOR">;
export type PokemonSettingsGigalith = PokemonSettingsShared661<"V0526_POKEMON_GIGALITH", "GIGALITH">;

export type PokemonSettingsSerperiorNormal = PokemonSettingsShared662<"V0497_POKEMON_SERPERIOR_NORMAL", "SERPERIOR_NORMAL", "SERPERIOR">;
export type PokemonSettingsGigalithNormal = PokemonSettingsShared662<"V0526_POKEMON_GIGALITH_NORMAL", "GIGALITH_NORMAL", "GIGALITH">;

export type PokemonSettingsTepig = PokemonSettingsShared658<"V0498_POKEMON_TEPIG", "TEPIG">;

export type PokemonSettingsTepigNormal = PokemonSettingsShared637<"V0498_POKEMON_TEPIG_NORMAL", "TEPIG_NORMAL", "TEPIG">;

export type PokemonSettingsPignite = PokemonSettingsShared808<"V0499_POKEMON_PIGNITE", "PIGNITE">;
export type PokemonSettingsWhirlipede = PokemonSettingsShared808<"V0544_POKEMON_WHIRLIPEDE", "WHIRLIPEDE">;

export type PokemonSettingsPigniteNormal = PokemonSettingsShared809<"V0499_POKEMON_PIGNITE_NORMAL", "PIGNITE_NORMAL", "PIGNITE">;
export type PokemonSettingsWhirlipedeNormal = PokemonSettingsShared809<"V0544_POKEMON_WHIRLIPEDE_NORMAL", "WHIRLIPEDE_NORMAL", "WHIRLIPEDE">;

export type PokemonSettingsEmboar = PokemonSettingsShared640<"V0500_POKEMON_EMBOAR", "EMBOAR">;

export type PokemonSettingsEmboarNormal = PokemonSettingsShared641<"V0500_POKEMON_EMBOAR_NORMAL", "EMBOAR_NORMAL", "EMBOAR">;

export type PokemonSettingsWatchog = PokemonSettingsShared667<"V0505_POKEMON_WATCHOG", "WATCHOG">;
export type PokemonSettingsLiepard = PokemonSettingsShared667<"V0510_POKEMON_LIEPARD", "LIEPARD">;
export type PokemonSettingsGarbodor = PokemonSettingsShared667<"V0569_POKEMON_GARBODOR", "GARBODOR">;
export type PokemonSettingsGothitelle = PokemonSettingsShared667<"V0576_POKEMON_GOTHITELLE", "GOTHITELLE">;

export type PokemonSettingsWatchogNormal = PokemonSettingsShared668<"V0505_POKEMON_WATCHOG_NORMAL", "WATCHOG_NORMAL", "WATCHOG">;
export type PokemonSettingsLiepardNormal = PokemonSettingsShared668<"V0510_POKEMON_LIEPARD_NORMAL", "LIEPARD_NORMAL", "LIEPARD">;
export type PokemonSettingsGarbodorNormal = PokemonSettingsShared668<"V0569_POKEMON_GARBODOR_NORMAL", "GARBODOR_NORMAL", "GARBODOR">;
export type PokemonSettingsGothitelleNormal = PokemonSettingsShared668<"V0576_POKEMON_GOTHITELLE_NORMAL", "GOTHITELLE_NORMAL", "GOTHITELLE">;

export type PokemonSettingsLillipup = PokemonSettingsShared654<"V0506_POKEMON_LILLIPUP", "LILLIPUP">;
export type PokemonSettingsAxew = PokemonSettingsShared654<"V0610_POKEMON_AXEW", "AXEW">;
export type PokemonSettingsCubchoo = PokemonSettingsShared654<"V0613_POKEMON_CUBCHOO", "CUBCHOO">;

export type PokemonSettingsLillipupNormal = PokemonSettingsShared655<"V0506_POKEMON_LILLIPUP_NORMAL", "LILLIPUP_NORMAL", "LILLIPUP">;
export type PokemonSettingsZoruaNormal = PokemonSettingsShared655<"V0570_POKEMON_ZORUA_NORMAL", "ZORUA_NORMAL", "ZORUA">;
export type PokemonSettingsAxewNormal = PokemonSettingsShared655<"V0610_POKEMON_AXEW_NORMAL", "AXEW_NORMAL", "AXEW">;
export type PokemonSettingsCubchooNormal = PokemonSettingsShared655<"V0613_POKEMON_CUBCHOO_NORMAL", "CUBCHOO_NORMAL", "CUBCHOO">;

export type PokemonSettingsHerdier = PokemonSettingsShared813<"V0507_POKEMON_HERDIER", "HERDIER">;
export type PokemonSettingsFraxure = PokemonSettingsShared813<"V0611_POKEMON_FRAXURE", "FRAXURE">;

export type PokemonSettingsHerdierNormal = PokemonSettingsShared814<"V0507_POKEMON_HERDIER_NORMAL", "HERDIER_NORMAL", "HERDIER">;
export type PokemonSettingsFraxureNormal = PokemonSettingsShared814<"V0611_POKEMON_FRAXURE_NORMAL", "FRAXURE_NORMAL", "FRAXURE">;

export type PokemonSettingsStoutland = PokemonSettingsShared687<"V0508_POKEMON_STOUTLAND", "STOUTLAND">;
export type PokemonSettingsSimisage = PokemonSettingsShared687<"V0512_POKEMON_SIMISAGE", "SIMISAGE">;
export type PokemonSettingsSimisear = PokemonSettingsShared687<"V0514_POKEMON_SIMISEAR", "SIMISEAR">;
export type PokemonSettingsSimipour = PokemonSettingsShared687<"V0516_POKEMON_SIMIPOUR", "SIMIPOUR">;
export type PokemonSettingsLilligant = PokemonSettingsShared687<"V0549_POKEMON_LILLIGANT", "LILLIGANT">;
export type PokemonSettingsZoroark = PokemonSettingsShared687<"V0571_POKEMON_ZOROARK", "ZOROARK">;
export type PokemonSettingsCinccino = PokemonSettingsShared687<"V0573_POKEMON_CINCCINO", "CINCCINO">;
export type PokemonSettingsMienshao = PokemonSettingsShared687<"V0620_POKEMON_MIENSHAO", "MIENSHAO">;

export type PokemonSettingsStoutlandNormal = PokemonSettingsShared688<"V0508_POKEMON_STOUTLAND_NORMAL", "STOUTLAND_NORMAL", "STOUTLAND">;
export type PokemonSettingsSimisageNormal = PokemonSettingsShared688<"V0512_POKEMON_SIMISAGE_NORMAL", "SIMISAGE_NORMAL", "SIMISAGE">;
export type PokemonSettingsSimisearNormal = PokemonSettingsShared688<"V0514_POKEMON_SIMISEAR_NORMAL", "SIMISEAR_NORMAL", "SIMISEAR">;
export type PokemonSettingsSimipourNormal = PokemonSettingsShared688<"V0516_POKEMON_SIMIPOUR_NORMAL", "SIMIPOUR_NORMAL", "SIMIPOUR">;
export type PokemonSettingsLilligantNormal = PokemonSettingsShared688<"V0549_POKEMON_LILLIGANT_NORMAL", "LILLIGANT_NORMAL", "LILLIGANT">;
export type PokemonSettingsZoroarkNormal = PokemonSettingsShared688<"V0571_POKEMON_ZOROARK_NORMAL", "ZOROARK_NORMAL", "ZOROARK">;
export type PokemonSettingsCinccinoNormal = PokemonSettingsShared688<"V0573_POKEMON_CINCCINO_NORMAL", "CINCCINO_NORMAL", "CINCCINO">;
export type PokemonSettingsMienshaoNormal = PokemonSettingsShared688<"V0620_POKEMON_MIENSHAO_NORMAL", "MIENSHAO_NORMAL", "MIENSHAO">;

export type PokemonSettingsPansage = PokemonSettingsShared815<"V0511_POKEMON_PANSAGE", "PANSAGE">;
export type PokemonSettingsPansear = PokemonSettingsShared815<"V0513_POKEMON_PANSEAR", "PANSEAR">;
export type PokemonSettingsPanpour = PokemonSettingsShared815<"V0515_POKEMON_PANPOUR", "PANPOUR">;
export type PokemonSettingsPetilil = PokemonSettingsShared815<"V0548_POKEMON_PETILIL", "PETILIL">;
export type PokemonSettingsMinccino = PokemonSettingsShared815<"V0572_POKEMON_MINCCINO", "MINCCINO">;

export type PokemonSettingsPansageNormal = PokemonSettingsShared816<"V0511_POKEMON_PANSAGE_NORMAL", "PANSAGE_NORMAL", "PANSAGE">;
export type PokemonSettingsPansearNormal = PokemonSettingsShared816<"V0513_POKEMON_PANSEAR_NORMAL", "PANSEAR_NORMAL", "PANSEAR">;
export type PokemonSettingsPanpourNormal = PokemonSettingsShared816<"V0515_POKEMON_PANPOUR_NORMAL", "PANPOUR_NORMAL", "PANPOUR">;
export type PokemonSettingsPetililNormal = PokemonSettingsShared816<"V0548_POKEMON_PETILIL_NORMAL", "PETILIL_NORMAL", "PETILIL">;
export type PokemonSettingsMinccinoNormal = PokemonSettingsShared816<"V0572_POKEMON_MINCCINO_NORMAL", "MINCCINO_NORMAL", "MINCCINO">;

export type PokemonSettingsPidove = PokemonSettingsShared821<"V0519_POKEMON_PIDOVE", "PIDOVE">;
export type PokemonSettingsVenipede = PokemonSettingsShared821<"V0543_POKEMON_VENIPEDE", "VENIPEDE">;
export type PokemonSettingsDwebble = PokemonSettingsShared821<"V0557_POKEMON_DWEBBLE", "DWEBBLE">;
export type PokemonSettingsTirtouga = PokemonSettingsShared821<"V0564_POKEMON_TIRTOUGA", "TIRTOUGA">;
export type PokemonSettingsArchen = PokemonSettingsShared821<"V0566_POKEMON_ARCHEN", "ARCHEN">;
export type PokemonSettingsDucklett = PokemonSettingsShared821<"V0580_POKEMON_DUCKLETT", "DUCKLETT">;
export type PokemonSettingsFerroseed = PokemonSettingsShared821<"V0597_POKEMON_FERROSEED", "FERROSEED">;
export type PokemonSettingsLitwick = PokemonSettingsShared821<"V0607_POKEMON_LITWICK", "LITWICK">;
export type PokemonSettingsGolett = PokemonSettingsShared821<"V0622_POKEMON_GOLETT", "GOLETT">;
export type PokemonSettingsDeino = PokemonSettingsShared821<"V0633_POKEMON_DEINO", "DEINO">;

export type PokemonSettingsPidoveNormal = PokemonSettingsShared645<"V0519_POKEMON_PIDOVE_NORMAL", "PIDOVE_NORMAL", "PIDOVE">;
export type PokemonSettingsVenipedeNormal = PokemonSettingsShared645<"V0543_POKEMON_VENIPEDE_NORMAL", "VENIPEDE_NORMAL", "VENIPEDE">;
export type PokemonSettingsDwebbleNormal = PokemonSettingsShared645<"V0557_POKEMON_DWEBBLE_NORMAL", "DWEBBLE_NORMAL", "DWEBBLE">;
export type PokemonSettingsTirtougaNormal = PokemonSettingsShared645<"V0564_POKEMON_TIRTOUGA_NORMAL", "TIRTOUGA_NORMAL", "TIRTOUGA">;
export type PokemonSettingsArchenNormal = PokemonSettingsShared645<"V0566_POKEMON_ARCHEN_NORMAL", "ARCHEN_NORMAL", "ARCHEN">;
export type PokemonSettingsDucklettNormal = PokemonSettingsShared645<"V0580_POKEMON_DUCKLETT_NORMAL", "DUCKLETT_NORMAL", "DUCKLETT">;
export type PokemonSettingsFerroseedNormal = PokemonSettingsShared645<"V0597_POKEMON_FERROSEED_NORMAL", "FERROSEED_NORMAL", "FERROSEED">;
export type PokemonSettingsLitwickNormal = PokemonSettingsShared645<"V0607_POKEMON_LITWICK_NORMAL", "LITWICK_NORMAL", "LITWICK">;
export type PokemonSettingsGolettNormal = PokemonSettingsShared645<"V0622_POKEMON_GOLETT_NORMAL", "GOLETT_NORMAL", "GOLETT">;
export type PokemonSettingsDeinoNormal = PokemonSettingsShared645<"V0633_POKEMON_DEINO_NORMAL", "DEINO_NORMAL", "DEINO">;

export type PokemonSettingsTranquillNormal = PokemonSettingsShared647<"V0520_POKEMON_TRANQUILL_NORMAL", "TRANQUILL_NORMAL", "TRANQUILL">;

export type PokemonSettingsZebstrika = PokemonSettingsShared825<"V0523_POKEMON_ZEBSTRIKA", "ZEBSTRIKA">;
export type PokemonSettingsDarmanitan = PokemonSettingsShared825<"V0555_POKEMON_DARMANITAN", "DARMANITAN">;

export type PokemonSettingsZebstrikaNormal = PokemonSettingsShared826<"V0523_POKEMON_ZEBSTRIKA_NORMAL", "ZEBSTRIKA_NORMAL", "ZEBSTRIKA">;
export type PokemonSettingsDarmanitanStandard = PokemonSettingsShared826<"V0555_POKEMON_DARMANITAN_STANDARD", "DARMANITAN_STANDARD", "DARMANITAN">;

export type PokemonSettingsBoldore = PokemonSettingsShared827<"V0525_POKEMON_BOLDORE", "BOLDORE">;
export type PokemonSettingsGurdurr = PokemonSettingsShared827<"V0533_POKEMON_GURDURR", "GURDURR">;

export type PokemonSettingsBoldoreNormal = PokemonSettingsShared828<"V0525_POKEMON_BOLDORE_NORMAL", "BOLDORE_NORMAL", "BOLDORE">;
export type PokemonSettingsGurdurrNormal = PokemonSettingsShared828<"V0533_POKEMON_GURDURR_NORMAL", "GURDURR_NORMAL", "GURDURR">;

export type PokemonSettingsDrilbur = PokemonSettingsShared631<"V0529_POKEMON_DRILBUR", "DRILBUR">;
export type PokemonSettingsDarumaka = PokemonSettingsShared631<"V0554_POKEMON_DARUMAKA", "DARUMAKA">;

export type PokemonSettingsExcadrill = PokemonSettingsShared652<"V0530_POKEMON_EXCADRILL", "EXCADRILL">;
export type PokemonSettingsScolipede = PokemonSettingsShared652<"V0545_POKEMON_SCOLIPEDE", "SCOLIPEDE">;
export type PokemonSettingsCrustle = PokemonSettingsShared652<"V0558_POKEMON_CRUSTLE", "CRUSTLE">;
export type PokemonSettingsCarracosta = PokemonSettingsShared652<"V0565_POKEMON_CARRACOSTA", "CARRACOSTA">;
export type PokemonSettingsAmoonguss = PokemonSettingsShared652<"V0591_POKEMON_AMOONGUSS", "AMOONGUSS">;
export type PokemonSettingsGalvantula = PokemonSettingsShared652<"V0596_POKEMON_GALVANTULA", "GALVANTULA">;

export type PokemonSettingsExcadrillNormal = PokemonSettingsShared653<"V0530_POKEMON_EXCADRILL_NORMAL", "EXCADRILL_NORMAL", "EXCADRILL">;
export type PokemonSettingsScolipedeNormal = PokemonSettingsShared653<"V0545_POKEMON_SCOLIPEDE_NORMAL", "SCOLIPEDE_NORMAL", "SCOLIPEDE">;
export type PokemonSettingsDarmanitanZen = PokemonSettingsShared653<"V0555_POKEMON_DARMANITAN_ZEN", "DARMANITAN_ZEN", "DARMANITAN">;
export type PokemonSettingsCrustleNormal = PokemonSettingsShared653<"V0558_POKEMON_CRUSTLE_NORMAL", "CRUSTLE_NORMAL", "CRUSTLE">;
export type PokemonSettingsCarracostaNormal = PokemonSettingsShared653<"V0565_POKEMON_CARRACOSTA_NORMAL", "CARRACOSTA_NORMAL", "CARRACOSTA">;
export type PokemonSettingsAmoongussNormal = PokemonSettingsShared653<"V0591_POKEMON_AMOONGUSS_NORMAL", "AMOONGUSS_NORMAL", "AMOONGUSS">;
export type PokemonSettingsGalvantulaNormal = PokemonSettingsShared653<"V0596_POKEMON_GALVANTULA_NORMAL", "GALVANTULA_NORMAL", "GALVANTULA">;

export type PokemonSettingsConkeldurr = PokemonSettingsShared761<"V0534_POKEMON_CONKELDURR", "CONKELDURR">;
export type PokemonSettingsAccelgor = PokemonSettingsShared761<"V0617_POKEMON_ACCELGOR", "ACCELGOR">;

export type PokemonSettingsConkeldurrNormal = PokemonSettingsShared762<"V0534_POKEMON_CONKELDURR_NORMAL", "CONKELDURR_NORMAL", "CONKELDURR">;
export type PokemonSettingsAccelgorNormal = PokemonSettingsShared762<"V0617_POKEMON_ACCELGOR_NORMAL", "ACCELGOR_NORMAL", "ACCELGOR">;

export type PokemonSettingsTympole = PokemonSettingsShared835<"V0535_POKEMON_TYMPOLE", "TYMPOLE">;
export type PokemonSettingsTynamo = PokemonSettingsShared835<"V0602_POKEMON_TYNAMO", "TYNAMO">;
export type PokemonSettingsElgyem = PokemonSettingsShared835<"V0605_POKEMON_ELGYEM", "ELGYEM">;

export type PokemonSettingsTympoleNormal = PokemonSettingsShared836<"V0535_POKEMON_TYMPOLE_NORMAL", "TYMPOLE_NORMAL", "TYMPOLE">;
export type PokemonSettingsTynamoNormal = PokemonSettingsShared836<"V0602_POKEMON_TYNAMO_NORMAL", "TYNAMO_NORMAL", "TYNAMO">;
export type PokemonSettingsElgyemNormal = PokemonSettingsShared836<"V0605_POKEMON_ELGYEM_NORMAL", "ELGYEM_NORMAL", "ELGYEM">;

export type PokemonSettingsPalpitoad = PokemonSettingsShared837<"V0536_POKEMON_PALPITOAD", "PALPITOAD">;
export type PokemonSettingsSwadloon = PokemonSettingsShared837<"V0541_POKEMON_SWADLOON", "SWADLOON">;
export type PokemonSettingsKrokorok = PokemonSettingsShared837<"V0552_POKEMON_KROKOROK", "KROKOROK">;

export type PokemonSettingsPalpitoadNormal = PokemonSettingsShared838<"V0536_POKEMON_PALPITOAD_NORMAL", "PALPITOAD_NORMAL", "PALPITOAD">;
export type PokemonSettingsSwadloonNormal = PokemonSettingsShared838<"V0541_POKEMON_SWADLOON_NORMAL", "SWADLOON_NORMAL", "SWADLOON">;
export type PokemonSettingsKrokorokNormal = PokemonSettingsShared838<"V0552_POKEMON_KROKOROK_NORMAL", "KROKOROK_NORMAL", "KROKOROK">;

export type PokemonSettingsSeismitoad = PokemonSettingsShared839<"V0537_POKEMON_SEISMITOAD", "SEISMITOAD">;
export type PokemonSettingsWhimsicott = PokemonSettingsShared839<"V0547_POKEMON_WHIMSICOTT", "WHIMSICOTT">;
export type PokemonSettingsKrookodile = PokemonSettingsShared839<"V0553_POKEMON_KROOKODILE", "KROOKODILE">;
export type PokemonSettingsScrafty = PokemonSettingsShared839<"V0560_POKEMON_SCRAFTY", "SCRAFTY">;

export type PokemonSettingsSeismitoadNormal = PokemonSettingsShared694<"V0537_POKEMON_SEISMITOAD_NORMAL", "SEISMITOAD_NORMAL", "SEISMITOAD">;
export type PokemonSettingsWhimsicottNormal = PokemonSettingsShared694<"V0547_POKEMON_WHIMSICOTT_NORMAL", "WHIMSICOTT_NORMAL", "WHIMSICOTT">;
export type PokemonSettingsKrookodileNormal = PokemonSettingsShared694<"V0553_POKEMON_KROOKODILE_NORMAL", "KROOKODILE_NORMAL", "KROOKODILE">;
export type PokemonSettingsScraftyNormal = PokemonSettingsShared694<"V0560_POKEMON_SCRAFTY_NORMAL", "SCRAFTY_NORMAL", "SCRAFTY">;

export type PokemonSettingsThroh = PokemonSettingsShared840<"V0538_POKEMON_THROH", "THROH">;
export type PokemonSettingsSawk = PokemonSettingsShared840<"V0539_POKEMON_SAWK", "SAWK">;

export type PokemonSettingsThrohNormal = PokemonSettingsShared841<"V0538_POKEMON_THROH_NORMAL", "THROH_NORMAL", "THROH">;
export type PokemonSettingsSawkNormal = PokemonSettingsShared841<"V0539_POKEMON_SAWK_NORMAL", "SAWK_NORMAL", "SAWK">;

export type PokemonSettingsSewaddle = PokemonSettingsShared663<"V0540_POKEMON_SEWADDLE", "SEWADDLE">;
export type PokemonSettingsSandile = PokemonSettingsShared663<"V0551_POKEMON_SANDILE", "SANDILE">;
export type PokemonSettingsScraggy = PokemonSettingsShared663<"V0559_POKEMON_SCRAGGY", "SCRAGGY">;
export type PokemonSettingsPawniard = PokemonSettingsShared663<"V0624_POKEMON_PAWNIARD", "PAWNIARD">;
export type PokemonSettingsVullaby = PokemonSettingsShared663<"V0629_POKEMON_VULLABY", "VULLABY">;
export type PokemonSettingsLarvesta = PokemonSettingsShared663<"V0636_POKEMON_LARVESTA", "LARVESTA">;

export type PokemonSettingsSewaddleNormal = PokemonSettingsShared664<"V0540_POKEMON_SEWADDLE_NORMAL", "SEWADDLE_NORMAL", "SEWADDLE">;
export type PokemonSettingsSandileNormal = PokemonSettingsShared664<"V0551_POKEMON_SANDILE_NORMAL", "SANDILE_NORMAL", "SANDILE">;
export type PokemonSettingsScraggyNormal = PokemonSettingsShared664<"V0559_POKEMON_SCRAGGY_NORMAL", "SCRAGGY_NORMAL", "SCRAGGY">;
export type PokemonSettingsDeerlingAutumn = PokemonSettingsShared664<"V0585_POKEMON_DEERLING_AUTUMN", "DEERLING_AUTUMN", "DEERLING">;
export type PokemonSettingsDeerlingSpring = PokemonSettingsShared664<"V0585_POKEMON_DEERLING_SPRING", "DEERLING_SPRING", "DEERLING">;
export type PokemonSettingsDeerlingSummer = PokemonSettingsShared664<"V0585_POKEMON_DEERLING_SUMMER", "DEERLING_SUMMER", "DEERLING">;
export type PokemonSettingsDeerlingWinter = PokemonSettingsShared664<"V0585_POKEMON_DEERLING_WINTER", "DEERLING_WINTER", "DEERLING">;
export type PokemonSettingsPawniardNormal = PokemonSettingsShared664<"V0624_POKEMON_PAWNIARD_NORMAL", "PAWNIARD_NORMAL", "PAWNIARD">;
export type PokemonSettingsRuffletNormal = PokemonSettingsShared664<"V0627_POKEMON_RUFFLET_NORMAL", "RUFFLET_NORMAL", "RUFFLET">;
export type PokemonSettingsVullabyNormal = PokemonSettingsShared664<"V0629_POKEMON_VULLABY_NORMAL", "VULLABY_NORMAL", "VULLABY">;
export type PokemonSettingsLarvestaNormal = PokemonSettingsShared664<"V0636_POKEMON_LARVESTA_NORMAL", "LARVESTA_NORMAL", "LARVESTA">;

export type PokemonSettingsLilligantHisuian = PokemonSettingsShared678<"V0549_POKEMON_LILLIGANT_HISUIAN", "LILLIGANT_HISUIAN", "LILLIGANT">;

export type PokemonSettingsBasculin = PokemonSettingsShared846<"V0550_POKEMON_BASCULIN", "BASCULIN">;
export type PokemonSettingsAlomomola = PokemonSettingsShared846<"V0594_POKEMON_ALOMOMOLA", "ALOMOMOLA">;

export type PokemonSettingsBasculinBlueStriped = PokemonSettingsShared847<"V0550_POKEMON_BASCULIN_BLUE_STRIPED", "BASCULIN_BLUE_STRIPED", "BASCULIN">;
export type PokemonSettingsBasculinRedStriped = PokemonSettingsShared847<"V0550_POKEMON_BASCULIN_RED_STRIPED", "BASCULIN_RED_STRIPED", "BASCULIN">;
export type PokemonSettingsBasculinWhiteStriped = PokemonSettingsShared847<"V0550_POKEMON_BASCULIN_WHITE_STRIPED", "BASCULIN_WHITE_STRIPED", "BASCULIN">;
export type PokemonSettingsAlomomolaNormal = PokemonSettingsShared847<"V0594_POKEMON_ALOMOMOLA_NORMAL", "ALOMOMOLA_NORMAL", "ALOMOMOLA">;

export type PokemonSettingsDarmanitanGalarianStandard = PokemonSettingsShared849<"V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD", "DARMANITAN_GALARIAN_STANDARD", "DARMANITAN">;

export type PokemonSettingsMaractus = PokemonSettingsShared683<"V0556_POKEMON_MARACTUS", "MARACTUS">;

export type PokemonSettingsMaractusNormal = PokemonSettingsShared684<"V0556_POKEMON_MARACTUS_NORMAL", "MARACTUS_NORMAL", "MARACTUS">;

export type PokemonSettingsArcheops = PokemonSettingsShared858<"V0567_POKEMON_ARCHEOPS", "ARCHEOPS">;
export type PokemonSettingsSwanna = PokemonSettingsShared858<"V0581_POKEMON_SWANNA", "SWANNA">;

export type PokemonSettingsArcheopsNormal = PokemonSettingsShared859<"V0567_POKEMON_ARCHEOPS_NORMAL", "ARCHEOPS_NORMAL", "ARCHEOPS">;
export type PokemonSettingsSwannaNormal = PokemonSettingsShared859<"V0581_POKEMON_SWANNA_NORMAL", "SWANNA_NORMAL", "SWANNA">;

export type PokemonSettingsZorua = PokemonSettingsShared692<"V0570_POKEMON_ZORUA", "ZORUA">;

export type PokemonSettingsVanillish = PokemonSettingsShared872<"V0583_POKEMON_VANILLISH", "VANILLISH">;
export type PokemonSettingsKlang = PokemonSettingsShared872<"V0600_POKEMON_KLANG", "KLANG">;

export type PokemonSettingsVanillishNormal = PokemonSettingsShared873<"V0583_POKEMON_VANILLISH_NORMAL", "VANILLISH_NORMAL", "VANILLISH">;
export type PokemonSettingsKlangNormal = PokemonSettingsShared873<"V0600_POKEMON_KLANG_NORMAL", "KLANG_NORMAL", "KLANG">;

export type PokemonSettingsDeerling = PokemonSettingsShared723<"V0585_POKEMON_DEERLING", "DEERLING">;
export type PokemonSettingsDurant = PokemonSettingsShared723<"V0632_POKEMON_DURANT", "DURANT">;

export type PokemonSettingsAutumn = PokemonSettingsShared877<"V0586_POKEMON_SAWSBUCK_AUTUMN", "SAWSBUCK_AUTUMN">;
export type PokemonSettingsSpring = PokemonSettingsShared877<"V0586_POKEMON_SAWSBUCK_SPRING", "SAWSBUCK_SPRING">;
export type PokemonSettingsSummer = PokemonSettingsShared877<"V0586_POKEMON_SAWSBUCK_SUMMER", "SAWSBUCK_SUMMER">;
export type PokemonSettingsWinter = PokemonSettingsShared877<"V0586_POKEMON_SAWSBUCK_WINTER", "SAWSBUCK_WINTER">;

export type PokemonSettingsKarrablast = PokemonSettingsShared880<"V0588_POKEMON_KARRABLAST", "KARRABLAST">;
export type PokemonSettingsShelmet = PokemonSettingsShared880<"V0616_POKEMON_SHELMET", "SHELMET">;

export type PokemonSettingsKarrablastNormal = PokemonSettingsShared881<"V0588_POKEMON_KARRABLAST_NORMAL", "KARRABLAST_NORMAL", "KARRABLAST">;
export type PokemonSettingsShelmetNormal = PokemonSettingsShared881<"V0616_POKEMON_SHELMET_NORMAL", "SHELMET_NORMAL", "SHELMET">;

export type PokemonSettingsFrillish = PokemonSettingsShared715<"V0592_POKEMON_FRILLISH", "FRILLISH">;

export type PokemonSettingsFrillishFemale = PokemonSettingsShared716<"V0592_POKEMON_FRILLISH_FEMALE", "FRILLISH_FEMALE", "FRILLISH">;
export type PokemonSettingsFrillishNormal = PokemonSettingsShared716<"V0592_POKEMON_FRILLISH_NORMAL", "FRILLISH_NORMAL", "FRILLISH">;

export type PokemonSettingsFemale = PokemonSettingsShared887<"V0593_POKEMON_JELLICENT_FEMALE", "JELLICENT_FEMALE">;
export type PokemonSettingsNormal = PokemonSettingsShared887<"V0593_POKEMON_JELLICENT_NORMAL", "JELLICENT_NORMAL">;

export type PokemonSettingsJoltikNormal = PokemonSettingsShared742<"V0595_POKEMON_JOLTIK_NORMAL", "JOLTIK_NORMAL", "JOLTIK">;

export type PokemonSettingsFerrothorn = PokemonSettingsShared713<"V0598_POKEMON_FERROTHORN", "FERROTHORN">;
export type PokemonSettingsGolurk = PokemonSettingsShared713<"V0623_POKEMON_GOLURK", "GOLURK">;

export type PokemonSettingsFerrothornNormal = PokemonSettingsShared714<"V0598_POKEMON_FERROTHORN_NORMAL", "FERROTHORN_NORMAL", "FERROTHORN">;
export type PokemonSettingsGolurkNormal = PokemonSettingsShared714<"V0623_POKEMON_GOLURK_NORMAL", "GOLURK_NORMAL", "GOLURK">;

export type PokemonSettingsBeheeyem = PokemonSettingsShared749<"V0606_POKEMON_BEHEEYEM", "BEHEEYEM">;

export type PokemonSettingsBeheeyemNormal = PokemonSettingsShared750<"V0606_POKEMON_BEHEEYEM_NORMAL", "BEHEEYEM_NORMAL", "BEHEEYEM">;

export type PokemonSettingsHaxorus = PokemonSettingsShared755<"V0612_POKEMON_HAXORUS", "HAXORUS">;

export type PokemonSettingsHaxorusNormal = PokemonSettingsShared756<"V0612_POKEMON_HAXORUS_NORMAL", "HAXORUS_NORMAL", "HAXORUS">;

export type PokemonSettingsBeartic = PokemonSettingsShared656<"V0614_POKEMON_BEARTIC", "BEARTIC">;

export type PokemonSettingsBearticNormal = PokemonSettingsShared657<"V0614_POKEMON_BEARTIC_NORMAL", "BEARTIC_NORMAL", "BEARTIC">;
export type PokemonSettingsBearticWinterT = PokemonSettingsShared657<"V0614_POKEMON_BEARTIC_WINTER_2020", "BEARTIC_WINTER_2020", "BEARTIC">;

export type PokemonSettingsGalarian = PokemonSettingsShared905<"V0618_POKEMON_STUNFISK_GALARIAN", "STUNFISK_GALARIAN">;
export type PokemonSettingsNormal2 = PokemonSettingsShared905<"V0618_POKEMON_STUNFISK_NORMAL", "STUNFISK_NORMAL">;

export type PokemonSettingsDruddigon = PokemonSettingsShared908<"V0621_POKEMON_DRUDDIGON", "DRUDDIGON">;
export type PokemonSettingsBouffalant = PokemonSettingsShared908<"V0626_POKEMON_BOUFFALANT", "BOUFFALANT">;

export type PokemonSettingsDruddigonNormal = PokemonSettingsShared909<"V0621_POKEMON_DRUDDIGON_NORMAL", "DRUDDIGON_NORMAL", "DRUDDIGON">;
export type PokemonSettingsBouffalantNormal = PokemonSettingsShared909<"V0626_POKEMON_BOUFFALANT_NORMAL", "BOUFFALANT_NORMAL", "BOUFFALANT">;

export type PokemonSettingsBraviary = PokemonSettingsShared913<"V0628_POKEMON_BRAVIARY", "BRAVIARY">;
export type PokemonSettingsMandibuzz = PokemonSettingsShared913<"V0630_POKEMON_MANDIBUZZ", "MANDIBUZZ">;

export type PokemonSettingsBraviaryHisuian = PokemonSettingsShared914<"V0628_POKEMON_BRAVIARY_HISUIAN", "BRAVIARY_HISUIAN", "BRAVIARY">;
export type PokemonSettingsBraviaryNormal = PokemonSettingsShared914<"V0628_POKEMON_BRAVIARY_NORMAL", "BRAVIARY_NORMAL", "BRAVIARY">;
export type PokemonSettingsMandibuzzNormal = PokemonSettingsShared914<"V0630_POKEMON_MANDIBUZZ_NORMAL", "MANDIBUZZ_NORMAL", "MANDIBUZZ">;

export type PokemonSettingsDurantNormal = PokemonSettingsShared724<"V0632_POKEMON_DURANT_NORMAL", "DURANT_NORMAL", "DURANT">;

export type PokemonSettingsCobalion = PokemonSettingsShared923<"V0638_POKEMON_COBALION", "COBALION">;
export type PokemonSettingsTerrakion = PokemonSettingsShared923<"V0639_POKEMON_TERRAKION", "TERRAKION">;
export type PokemonSettingsVirizion = PokemonSettingsShared923<"V0640_POKEMON_VIRIZION", "VIRIZION">;
export type PokemonSettingsReshiram = PokemonSettingsShared923<"V0643_POKEMON_RESHIRAM", "RESHIRAM">;
export type PokemonSettingsZekrom = PokemonSettingsShared923<"V0644_POKEMON_ZEKROM", "ZEKROM">;

export type PokemonSettingsCobalionNormal = PokemonSettingsShared924<"V0638_POKEMON_COBALION_NORMAL", "COBALION_NORMAL", "COBALION">;
export type PokemonSettingsTerrakionNormal = PokemonSettingsShared924<"V0639_POKEMON_TERRAKION_NORMAL", "TERRAKION_NORMAL", "TERRAKION">;
export type PokemonSettingsVirizionNormal = PokemonSettingsShared924<"V0640_POKEMON_VIRIZION_NORMAL", "VIRIZION_NORMAL", "VIRIZION">;
export type PokemonSettingsReshiramNormal = PokemonSettingsShared924<"V0643_POKEMON_RESHIRAM_NORMAL", "RESHIRAM_NORMAL", "RESHIRAM">;
export type PokemonSettingsZekromNormal = PokemonSettingsShared924<"V0644_POKEMON_ZEKROM_NORMAL", "ZEKROM_NORMAL", "ZEKROM">;

export type PokemonSettingsThundurus = PokemonSettingsShared928<"V0642_POKEMON_THUNDURUS", "THUNDURUS">;
export type PokemonSettingsLandorus = PokemonSettingsShared928<"V0645_POKEMON_LANDORUS", "LANDORUS">;

export type PokemonSettingsThundurusIncarnate = PokemonSettingsShared929<"V0642_POKEMON_THUNDURUS_INCARNATE", "THUNDURUS_INCARNATE", "THUNDURUS">;
export type PokemonSettingsLandorusIncarnate = PokemonSettingsShared929<"V0645_POKEMON_LANDORUS_INCARNATE", "LANDORUS_INCARNATE", "LANDORUS">;

export type PokemonSettingsBlack = PokemonSettingsShared933<"V0646_POKEMON_KYUREM_BLACK", "KYUREM_BLACK">;
export type PokemonSettingsWhite = PokemonSettingsShared933<"V0646_POKEMON_KYUREM_WHITE", "KYUREM_WHITE">;

export type PokemonSettingsAria = PokemonSettingsShared939<"V0648_POKEMON_MELOETTA_ARIA", "MELOETTA_ARIA">;
export type PokemonSettingsPirouette = PokemonSettingsShared939<"V0648_POKEMON_MELOETTA_PIROUETTE", "MELOETTA_PIROUETTE">;

export type PokemonSettingsBurn = PokemonSettingsShared941<"V0649_POKEMON_GENESECT_BURN", "GENESECT_BURN">;
export type PokemonSettingsChill = PokemonSettingsShared941<"V0649_POKEMON_GENESECT_CHILL", "GENESECT_CHILL">;
export type PokemonSettingsDouse = PokemonSettingsShared941<"V0649_POKEMON_GENESECT_DOUSE", "GENESECT_DOUSE">;
export type PokemonSettingsNormal3 = PokemonSettingsShared941<"V0649_POKEMON_GENESECT_NORMAL", "GENESECT_NORMAL">;
export type PokemonSettingsShock = PokemonSettingsShared941<"V0649_POKEMON_GENESECT_SHOCK", "GENESECT_SHOCK">;

export interface PokemonSettingsGen5MasterfileByTemplateId {
  "V0494_POKEMON_VICTINI": V0494_pokemon_victiniEntry;
  "V0494_POKEMON_VICTINI_NORMAL": V0494_pokemon_victini_normalEntry;
  "V0495_POKEMON_SNIVY": PokemonSettingsSnivy;
  "V0501_POKEMON_OSHAWOTT": PokemonSettingsOshawott;
  "V0504_POKEMON_PATRAT": PokemonSettingsPatrat;
  "V0509_POKEMON_PURRLOIN": PokemonSettingsPurrloin;
  "V0522_POKEMON_BLITZLE": PokemonSettingsBlitzle;
  "V0524_POKEMON_ROGGENROLA": PokemonSettingsRoggenrola;
  "V0532_POKEMON_TIMBURR": PokemonSettingsTimburr;
  "V0574_POKEMON_GOTHITA": PokemonSettingsGothita;
  "V0495_POKEMON_SNIVY_NORMAL": PokemonSettingsSnivyNormal;
  "V0501_POKEMON_OSHAWOTT_NORMAL": PokemonSettingsOshawottNormal;
  "V0504_POKEMON_PATRAT_NORMAL": PokemonSettingsPatratNormal;
  "V0509_POKEMON_PURRLOIN_NORMAL": PokemonSettingsPurrloinNormal;
  "V0522_POKEMON_BLITZLE_NORMAL": PokemonSettingsBlitzleNormal;
  "V0524_POKEMON_ROGGENROLA_NORMAL": PokemonSettingsRoggenrolaNormal;
  "V0529_POKEMON_DRILBUR_NORMAL": PokemonSettingsDrilburNormal;
  "V0532_POKEMON_TIMBURR_NORMAL": PokemonSettingsTimburrNormal;
  "V0554_POKEMON_DARUMAKA_NORMAL": PokemonSettingsDarumakaNormal;
  "V0574_POKEMON_GOTHITA_NORMAL": PokemonSettingsGothitaNormal;
  "V0496_POKEMON_SERVINE": PokemonSettingsServine;
  "V0502_POKEMON_DEWOTT": PokemonSettingsDewott;
  "V0575_POKEMON_GOTHORITA": PokemonSettingsGothorita;
  "V0496_POKEMON_SERVINE_NORMAL": PokemonSettingsServineNormal;
  "V0502_POKEMON_DEWOTT_NORMAL": PokemonSettingsDewottNormal;
  "V0575_POKEMON_GOTHORITA_NORMAL": PokemonSettingsGothoritaNormal;
  "V0497_POKEMON_SERPERIOR": PokemonSettingsSerperior;
  "V0526_POKEMON_GIGALITH": PokemonSettingsGigalith;
  "V0497_POKEMON_SERPERIOR_NORMAL": PokemonSettingsSerperiorNormal;
  "V0526_POKEMON_GIGALITH_NORMAL": PokemonSettingsGigalithNormal;
  "V0498_POKEMON_TEPIG": PokemonSettingsTepig;
  "V0498_POKEMON_TEPIG_NORMAL": PokemonSettingsTepigNormal;
  "V0499_POKEMON_PIGNITE": PokemonSettingsPignite;
  "V0544_POKEMON_WHIRLIPEDE": PokemonSettingsWhirlipede;
  "V0499_POKEMON_PIGNITE_NORMAL": PokemonSettingsPigniteNormal;
  "V0544_POKEMON_WHIRLIPEDE_NORMAL": PokemonSettingsWhirlipedeNormal;
  "V0500_POKEMON_EMBOAR": PokemonSettingsEmboar;
  "V0500_POKEMON_EMBOAR_NORMAL": PokemonSettingsEmboarNormal;
  "V0503_POKEMON_SAMUROTT": V0503_pokemon_samurottEntry;
  "V0503_POKEMON_SAMUROTT_HISUIAN": V0503_pokemon_samurott_hisuianEntry;
  "V0503_POKEMON_SAMUROTT_NORMAL": V0503_pokemon_samurott_normalEntry;
  "V0505_POKEMON_WATCHOG": PokemonSettingsWatchog;
  "V0510_POKEMON_LIEPARD": PokemonSettingsLiepard;
  "V0569_POKEMON_GARBODOR": PokemonSettingsGarbodor;
  "V0576_POKEMON_GOTHITELLE": PokemonSettingsGothitelle;
  "V0505_POKEMON_WATCHOG_NORMAL": PokemonSettingsWatchogNormal;
  "V0510_POKEMON_LIEPARD_NORMAL": PokemonSettingsLiepardNormal;
  "V0569_POKEMON_GARBODOR_NORMAL": PokemonSettingsGarbodorNormal;
  "V0576_POKEMON_GOTHITELLE_NORMAL": PokemonSettingsGothitelleNormal;
  "V0506_POKEMON_LILLIPUP": PokemonSettingsLillipup;
  "V0610_POKEMON_AXEW": PokemonSettingsAxew;
  "V0613_POKEMON_CUBCHOO": PokemonSettingsCubchoo;
  "V0506_POKEMON_LILLIPUP_NORMAL": PokemonSettingsLillipupNormal;
  "V0570_POKEMON_ZORUA_NORMAL": PokemonSettingsZoruaNormal;
  "V0610_POKEMON_AXEW_NORMAL": PokemonSettingsAxewNormal;
  "V0613_POKEMON_CUBCHOO_NORMAL": PokemonSettingsCubchooNormal;
  "V0507_POKEMON_HERDIER": PokemonSettingsHerdier;
  "V0611_POKEMON_FRAXURE": PokemonSettingsFraxure;
  "V0507_POKEMON_HERDIER_NORMAL": PokemonSettingsHerdierNormal;
  "V0611_POKEMON_FRAXURE_NORMAL": PokemonSettingsFraxureNormal;
  "V0508_POKEMON_STOUTLAND": PokemonSettingsStoutland;
  "V0512_POKEMON_SIMISAGE": PokemonSettingsSimisage;
  "V0514_POKEMON_SIMISEAR": PokemonSettingsSimisear;
  "V0516_POKEMON_SIMIPOUR": PokemonSettingsSimipour;
  "V0549_POKEMON_LILLIGANT": PokemonSettingsLilligant;
  "V0571_POKEMON_ZOROARK": PokemonSettingsZoroark;
  "V0573_POKEMON_CINCCINO": PokemonSettingsCinccino;
  "V0620_POKEMON_MIENSHAO": PokemonSettingsMienshao;
  "V0508_POKEMON_STOUTLAND_NORMAL": PokemonSettingsStoutlandNormal;
  "V0512_POKEMON_SIMISAGE_NORMAL": PokemonSettingsSimisageNormal;
  "V0514_POKEMON_SIMISEAR_NORMAL": PokemonSettingsSimisearNormal;
  "V0516_POKEMON_SIMIPOUR_NORMAL": PokemonSettingsSimipourNormal;
  "V0549_POKEMON_LILLIGANT_NORMAL": PokemonSettingsLilligantNormal;
  "V0571_POKEMON_ZOROARK_NORMAL": PokemonSettingsZoroarkNormal;
  "V0573_POKEMON_CINCCINO_NORMAL": PokemonSettingsCinccinoNormal;
  "V0620_POKEMON_MIENSHAO_NORMAL": PokemonSettingsMienshaoNormal;
  "V0511_POKEMON_PANSAGE": PokemonSettingsPansage;
  "V0513_POKEMON_PANSEAR": PokemonSettingsPansear;
  "V0515_POKEMON_PANPOUR": PokemonSettingsPanpour;
  "V0548_POKEMON_PETILIL": PokemonSettingsPetilil;
  "V0572_POKEMON_MINCCINO": PokemonSettingsMinccino;
  "V0511_POKEMON_PANSAGE_NORMAL": PokemonSettingsPansageNormal;
  "V0513_POKEMON_PANSEAR_NORMAL": PokemonSettingsPansearNormal;
  "V0515_POKEMON_PANPOUR_NORMAL": PokemonSettingsPanpourNormal;
  "V0548_POKEMON_PETILIL_NORMAL": PokemonSettingsPetililNormal;
  "V0572_POKEMON_MINCCINO_NORMAL": PokemonSettingsMinccinoNormal;
  "V0517_POKEMON_MUNNA": V0517_pokemon_munnaEntry;
  "V0517_POKEMON_MUNNA_NORMAL": V0517_pokemon_munna_normalEntry;
  "V0518_POKEMON_MUSHARNA": V0518_pokemon_musharnaEntry;
  "V0518_POKEMON_MUSHARNA_NORMAL": V0518_pokemon_musharna_normalEntry;
  "V0519_POKEMON_PIDOVE": PokemonSettingsPidove;
  "V0543_POKEMON_VENIPEDE": PokemonSettingsVenipede;
  "V0557_POKEMON_DWEBBLE": PokemonSettingsDwebble;
  "V0564_POKEMON_TIRTOUGA": PokemonSettingsTirtouga;
  "V0566_POKEMON_ARCHEN": PokemonSettingsArchen;
  "V0580_POKEMON_DUCKLETT": PokemonSettingsDucklett;
  "V0597_POKEMON_FERROSEED": PokemonSettingsFerroseed;
  "V0607_POKEMON_LITWICK": PokemonSettingsLitwick;
  "V0622_POKEMON_GOLETT": PokemonSettingsGolett;
  "V0633_POKEMON_DEINO": PokemonSettingsDeino;
  "V0519_POKEMON_PIDOVE_NORMAL": PokemonSettingsPidoveNormal;
  "V0543_POKEMON_VENIPEDE_NORMAL": PokemonSettingsVenipedeNormal;
  "V0557_POKEMON_DWEBBLE_NORMAL": PokemonSettingsDwebbleNormal;
  "V0564_POKEMON_TIRTOUGA_NORMAL": PokemonSettingsTirtougaNormal;
  "V0566_POKEMON_ARCHEN_NORMAL": PokemonSettingsArchenNormal;
  "V0580_POKEMON_DUCKLETT_NORMAL": PokemonSettingsDucklettNormal;
  "V0597_POKEMON_FERROSEED_NORMAL": PokemonSettingsFerroseedNormal;
  "V0607_POKEMON_LITWICK_NORMAL": PokemonSettingsLitwickNormal;
  "V0622_POKEMON_GOLETT_NORMAL": PokemonSettingsGolettNormal;
  "V0633_POKEMON_DEINO_NORMAL": PokemonSettingsDeinoNormal;
  "V0520_POKEMON_TRANQUILL": V0520_pokemon_tranquillEntry;
  "V0520_POKEMON_TRANQUILL_NORMAL": PokemonSettingsTranquillNormal;
  "V0521_POKEMON_UNFEZANT": V0521_pokemon_unfezantEntry;
  "V0521_POKEMON_UNFEZANT_NORMAL": V0521_pokemon_unfezant_normalEntry;
  "V0523_POKEMON_ZEBSTRIKA": PokemonSettingsZebstrika;
  "V0555_POKEMON_DARMANITAN": PokemonSettingsDarmanitan;
  "V0523_POKEMON_ZEBSTRIKA_NORMAL": PokemonSettingsZebstrikaNormal;
  "V0555_POKEMON_DARMANITAN_STANDARD": PokemonSettingsDarmanitanStandard;
  "V0525_POKEMON_BOLDORE": PokemonSettingsBoldore;
  "V0533_POKEMON_GURDURR": PokemonSettingsGurdurr;
  "V0525_POKEMON_BOLDORE_NORMAL": PokemonSettingsBoldoreNormal;
  "V0533_POKEMON_GURDURR_NORMAL": PokemonSettingsGurdurrNormal;
  "V0527_POKEMON_WOOBAT": V0527_pokemon_woobatEntry;
  "V0527_POKEMON_WOOBAT_NORMAL": V0527_pokemon_woobat_normalEntry;
  "V0528_POKEMON_SWOOBAT": V0528_pokemon_swoobatEntry;
  "V0528_POKEMON_SWOOBAT_NORMAL": V0528_pokemon_swoobat_normalEntry;
  "V0529_POKEMON_DRILBUR": PokemonSettingsDrilbur;
  "V0554_POKEMON_DARUMAKA": PokemonSettingsDarumaka;
  "V0530_POKEMON_EXCADRILL": PokemonSettingsExcadrill;
  "V0545_POKEMON_SCOLIPEDE": PokemonSettingsScolipede;
  "V0558_POKEMON_CRUSTLE": PokemonSettingsCrustle;
  "V0565_POKEMON_CARRACOSTA": PokemonSettingsCarracosta;
  "V0591_POKEMON_AMOONGUSS": PokemonSettingsAmoonguss;
  "V0596_POKEMON_GALVANTULA": PokemonSettingsGalvantula;
  "V0530_POKEMON_EXCADRILL_NORMAL": PokemonSettingsExcadrillNormal;
  "V0545_POKEMON_SCOLIPEDE_NORMAL": PokemonSettingsScolipedeNormal;
  "V0555_POKEMON_DARMANITAN_ZEN": PokemonSettingsDarmanitanZen;
  "V0558_POKEMON_CRUSTLE_NORMAL": PokemonSettingsCrustleNormal;
  "V0565_POKEMON_CARRACOSTA_NORMAL": PokemonSettingsCarracostaNormal;
  "V0591_POKEMON_AMOONGUSS_NORMAL": PokemonSettingsAmoongussNormal;
  "V0596_POKEMON_GALVANTULA_NORMAL": PokemonSettingsGalvantulaNormal;
  "V0531_POKEMON_AUDINO": V0531_pokemon_audinoEntry;
  "V0531_POKEMON_AUDINO_NORMAL": V0531_pokemon_audino_normalEntry;
  "V0534_POKEMON_CONKELDURR": PokemonSettingsConkeldurr;
  "V0617_POKEMON_ACCELGOR": PokemonSettingsAccelgor;
  "V0534_POKEMON_CONKELDURR_NORMAL": PokemonSettingsConkeldurrNormal;
  "V0617_POKEMON_ACCELGOR_NORMAL": PokemonSettingsAccelgorNormal;
  "V0535_POKEMON_TYMPOLE": PokemonSettingsTympole;
  "V0602_POKEMON_TYNAMO": PokemonSettingsTynamo;
  "V0605_POKEMON_ELGYEM": PokemonSettingsElgyem;
  "V0535_POKEMON_TYMPOLE_NORMAL": PokemonSettingsTympoleNormal;
  "V0602_POKEMON_TYNAMO_NORMAL": PokemonSettingsTynamoNormal;
  "V0605_POKEMON_ELGYEM_NORMAL": PokemonSettingsElgyemNormal;
  "V0536_POKEMON_PALPITOAD": PokemonSettingsPalpitoad;
  "V0541_POKEMON_SWADLOON": PokemonSettingsSwadloon;
  "V0552_POKEMON_KROKOROK": PokemonSettingsKrokorok;
  "V0536_POKEMON_PALPITOAD_NORMAL": PokemonSettingsPalpitoadNormal;
  "V0541_POKEMON_SWADLOON_NORMAL": PokemonSettingsSwadloonNormal;
  "V0552_POKEMON_KROKOROK_NORMAL": PokemonSettingsKrokorokNormal;
  "V0537_POKEMON_SEISMITOAD": PokemonSettingsSeismitoad;
  "V0547_POKEMON_WHIMSICOTT": PokemonSettingsWhimsicott;
  "V0553_POKEMON_KROOKODILE": PokemonSettingsKrookodile;
  "V0560_POKEMON_SCRAFTY": PokemonSettingsScrafty;
  "V0537_POKEMON_SEISMITOAD_NORMAL": PokemonSettingsSeismitoadNormal;
  "V0547_POKEMON_WHIMSICOTT_NORMAL": PokemonSettingsWhimsicottNormal;
  "V0553_POKEMON_KROOKODILE_NORMAL": PokemonSettingsKrookodileNormal;
  "V0560_POKEMON_SCRAFTY_NORMAL": PokemonSettingsScraftyNormal;
  "V0538_POKEMON_THROH": PokemonSettingsThroh;
  "V0539_POKEMON_SAWK": PokemonSettingsSawk;
  "V0538_POKEMON_THROH_NORMAL": PokemonSettingsThrohNormal;
  "V0539_POKEMON_SAWK_NORMAL": PokemonSettingsSawkNormal;
  "V0540_POKEMON_SEWADDLE": PokemonSettingsSewaddle;
  "V0551_POKEMON_SANDILE": PokemonSettingsSandile;
  "V0559_POKEMON_SCRAGGY": PokemonSettingsScraggy;
  "V0624_POKEMON_PAWNIARD": PokemonSettingsPawniard;
  "V0629_POKEMON_VULLABY": PokemonSettingsVullaby;
  "V0636_POKEMON_LARVESTA": PokemonSettingsLarvesta;
  "V0540_POKEMON_SEWADDLE_NORMAL": PokemonSettingsSewaddleNormal;
  "V0551_POKEMON_SANDILE_NORMAL": PokemonSettingsSandileNormal;
  "V0559_POKEMON_SCRAGGY_NORMAL": PokemonSettingsScraggyNormal;
  "V0585_POKEMON_DEERLING_AUTUMN": PokemonSettingsDeerlingAutumn;
  "V0585_POKEMON_DEERLING_SPRING": PokemonSettingsDeerlingSpring;
  "V0585_POKEMON_DEERLING_SUMMER": PokemonSettingsDeerlingSummer;
  "V0585_POKEMON_DEERLING_WINTER": PokemonSettingsDeerlingWinter;
  "V0624_POKEMON_PAWNIARD_NORMAL": PokemonSettingsPawniardNormal;
  "V0627_POKEMON_RUFFLET_NORMAL": PokemonSettingsRuffletNormal;
  "V0629_POKEMON_VULLABY_NORMAL": PokemonSettingsVullabyNormal;
  "V0636_POKEMON_LARVESTA_NORMAL": PokemonSettingsLarvestaNormal;
  "V0542_POKEMON_LEAVANNY": V0542_pokemon_leavannyEntry;
  "V0542_POKEMON_LEAVANNY_NORMAL": V0542_pokemon_leavanny_normalEntry;
  "V0546_POKEMON_COTTONEE": V0546_pokemon_cottoneeEntry;
  "V0546_POKEMON_COTTONEE_NORMAL": V0546_pokemon_cottonee_normalEntry;
  "V0549_POKEMON_LILLIGANT_HISUIAN": PokemonSettingsLilligantHisuian;
  "V0550_POKEMON_BASCULIN": PokemonSettingsBasculin;
  "V0594_POKEMON_ALOMOMOLA": PokemonSettingsAlomomola;
  "V0550_POKEMON_BASCULIN_BLUE_STRIPED": PokemonSettingsBasculinBlueStriped;
  "V0550_POKEMON_BASCULIN_RED_STRIPED": PokemonSettingsBasculinRedStriped;
  "V0550_POKEMON_BASCULIN_WHITE_STRIPED": PokemonSettingsBasculinWhiteStriped;
  "V0594_POKEMON_ALOMOMOLA_NORMAL": PokemonSettingsAlomomolaNormal;
  "V0554_POKEMON_DARUMAKA_GALARIAN": V0554_pokemon_darumaka_galarianEntry;
  "V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD": PokemonSettingsDarmanitanGalarianStandard;
  "V0555_POKEMON_DARMANITAN_GALARIAN_ZEN": V0555_pokemon_darmanitan_galarian_zenEntry;
  "V0556_POKEMON_MARACTUS": PokemonSettingsMaractus;
  "V0556_POKEMON_MARACTUS_NORMAL": PokemonSettingsMaractusNormal;
  "V0561_POKEMON_SIGILYPH": V0561_pokemon_sigilyphEntry;
  "V0561_POKEMON_SIGILYPH_NORMAL": V0561_pokemon_sigilyph_normalEntry;
  "V0562_POKEMON_YAMASK": V0562_pokemon_yamaskEntry;
  "V0562_POKEMON_YAMASK_GALARIAN": V0562_pokemon_yamask_galarianEntry;
  "V0562_POKEMON_YAMASK_NORMAL": V0562_pokemon_yamask_normalEntry;
  "V0563_POKEMON_COFAGRIGUS": V0563_pokemon_cofagrigusEntry;
  "V0563_POKEMON_COFAGRIGUS_NORMAL": V0563_pokemon_cofagrigus_normalEntry;
  "V0567_POKEMON_ARCHEOPS": PokemonSettingsArcheops;
  "V0581_POKEMON_SWANNA": PokemonSettingsSwanna;
  "V0567_POKEMON_ARCHEOPS_NORMAL": PokemonSettingsArcheopsNormal;
  "V0581_POKEMON_SWANNA_NORMAL": PokemonSettingsSwannaNormal;
  "V0568_POKEMON_TRUBBISH": V0568_pokemon_trubbishEntry;
  "V0568_POKEMON_TRUBBISH_NORMAL": V0568_pokemon_trubbish_normalEntry;
  "V0570_POKEMON_ZORUA": PokemonSettingsZorua;
  "V0570_POKEMON_ZORUA_HISUIAN": V0570_pokemon_zorua_hisuianEntry;
  "V0571_POKEMON_ZOROARK_HISUIAN": V0571_pokemon_zoroark_hisuianEntry;
  "V0577_POKEMON_SOLOSIS": V0577_pokemon_solosisEntry;
  "V0577_POKEMON_SOLOSIS_NORMAL": V0577_pokemon_solosis_normalEntry;
  "V0578_POKEMON_DUOSION": V0578_pokemon_duosionEntry;
  "V0578_POKEMON_DUOSION_NORMAL": V0578_pokemon_duosion_normalEntry;
  "V0579_POKEMON_REUNICLUS": V0579_pokemon_reuniclusEntry;
  "V0579_POKEMON_REUNICLUS_NORMAL": V0579_pokemon_reuniclus_normalEntry;
  "V0582_POKEMON_VANILLITE": V0582_pokemon_vanilliteEntry;
  "V0582_POKEMON_VANILLITE_NORMAL": V0582_pokemon_vanillite_normalEntry;
  "V0583_POKEMON_VANILLISH": PokemonSettingsVanillish;
  "V0600_POKEMON_KLANG": PokemonSettingsKlang;
  "V0583_POKEMON_VANILLISH_NORMAL": PokemonSettingsVanillishNormal;
  "V0600_POKEMON_KLANG_NORMAL": PokemonSettingsKlangNormal;
  "V0584_POKEMON_VANILLUXE": V0584_pokemon_vanilluxeEntry;
  "V0584_POKEMON_VANILLUXE_NORMAL": V0584_pokemon_vanilluxe_normalEntry;
  "V0585_POKEMON_DEERLING": PokemonSettingsDeerling;
  "V0632_POKEMON_DURANT": PokemonSettingsDurant;
  "V0586_POKEMON_SAWSBUCK": V0586_pokemon_sawsbuckEntry;
  "V0586_POKEMON_SAWSBUCK_AUTUMN": PokemonSettingsAutumn;
  "V0586_POKEMON_SAWSBUCK_SPRING": PokemonSettingsSpring;
  "V0586_POKEMON_SAWSBUCK_SUMMER": PokemonSettingsSummer;
  "V0586_POKEMON_SAWSBUCK_WINTER": PokemonSettingsWinter;
  "V0587_POKEMON_EMOLGA": V0587_pokemon_emolgaEntry;
  "V0587_POKEMON_EMOLGA_NORMAL": V0587_pokemon_emolga_normalEntry;
  "V0588_POKEMON_KARRABLAST": PokemonSettingsKarrablast;
  "V0616_POKEMON_SHELMET": PokemonSettingsShelmet;
  "V0588_POKEMON_KARRABLAST_NORMAL": PokemonSettingsKarrablastNormal;
  "V0616_POKEMON_SHELMET_NORMAL": PokemonSettingsShelmetNormal;
  "V0589_POKEMON_ESCAVALIER": V0589_pokemon_escavalierEntry;
  "V0589_POKEMON_ESCAVALIER_NORMAL": V0589_pokemon_escavalier_normalEntry;
  "V0590_POKEMON_FOONGUS": V0590_pokemon_foongusEntry;
  "V0590_POKEMON_FOONGUS_NORMAL": V0590_pokemon_foongus_normalEntry;
  "V0592_POKEMON_FRILLISH": PokemonSettingsFrillish;
  "V0592_POKEMON_FRILLISH_FEMALE": PokemonSettingsFrillishFemale;
  "V0592_POKEMON_FRILLISH_NORMAL": PokemonSettingsFrillishNormal;
  "V0593_POKEMON_JELLICENT": V0593_pokemon_jellicentEntry;
  "V0593_POKEMON_JELLICENT_FEMALE": PokemonSettingsFemale;
  "V0593_POKEMON_JELLICENT_NORMAL": PokemonSettingsNormal;
  "V0595_POKEMON_JOLTIK": V0595_pokemon_joltikEntry;
  "V0595_POKEMON_JOLTIK_NORMAL": PokemonSettingsJoltikNormal;
  "V0598_POKEMON_FERROTHORN": PokemonSettingsFerrothorn;
  "V0623_POKEMON_GOLURK": PokemonSettingsGolurk;
  "V0598_POKEMON_FERROTHORN_NORMAL": PokemonSettingsFerrothornNormal;
  "V0623_POKEMON_GOLURK_NORMAL": PokemonSettingsGolurkNormal;
  "V0599_POKEMON_KLINK": V0599_pokemon_klinkEntry;
  "V0599_POKEMON_KLINK_NORMAL": V0599_pokemon_klink_normalEntry;
  "V0601_POKEMON_KLINKLANG": V0601_pokemon_klinklangEntry;
  "V0601_POKEMON_KLINKLANG_NORMAL": V0601_pokemon_klinklang_normalEntry;
  "V0603_POKEMON_EELEKTRIK": V0603_pokemon_eelektrikEntry;
  "V0603_POKEMON_EELEKTRIK_NORMAL": V0603_pokemon_eelektrik_normalEntry;
  "V0604_POKEMON_EELEKTROSS": V0604_pokemon_eelektrossEntry;
  "V0604_POKEMON_EELEKTROSS_NORMAL": V0604_pokemon_eelektross_normalEntry;
  "V0606_POKEMON_BEHEEYEM": PokemonSettingsBeheeyem;
  "V0606_POKEMON_BEHEEYEM_NORMAL": PokemonSettingsBeheeyemNormal;
  "V0608_POKEMON_LAMPENT": V0608_pokemon_lampentEntry;
  "V0608_POKEMON_LAMPENT_NORMAL": V0608_pokemon_lampent_normalEntry;
  "V0609_POKEMON_CHANDELURE": V0609_pokemon_chandelureEntry;
  "V0609_POKEMON_CHANDELURE_NORMAL": V0609_pokemon_chandelure_normalEntry;
  "V0612_POKEMON_HAXORUS": PokemonSettingsHaxorus;
  "V0612_POKEMON_HAXORUS_NORMAL": PokemonSettingsHaxorusNormal;
  "V0613_POKEMON_CUBCHOO_WINTER_2020": V0613_pokemon_cubchoo_winter_2020Entry;
  "V0614_POKEMON_BEARTIC": PokemonSettingsBeartic;
  "V0614_POKEMON_BEARTIC_NORMAL": PokemonSettingsBearticNormal;
  "V0614_POKEMON_BEARTIC_WINTER_2020": PokemonSettingsBearticWinterT;
  "V0615_POKEMON_CRYOGONAL": V0615_pokemon_cryogonalEntry;
  "V0615_POKEMON_CRYOGONAL_NORMAL": V0615_pokemon_cryogonal_normalEntry;
  "V0618_POKEMON_STUNFISK": V0618_pokemon_stunfiskEntry;
  "V0618_POKEMON_STUNFISK_GALARIAN": PokemonSettingsGalarian;
  "V0618_POKEMON_STUNFISK_NORMAL": PokemonSettingsNormal2;
  "V0619_POKEMON_MIENFOO": V0619_pokemon_mienfooEntry;
  "V0619_POKEMON_MIENFOO_NORMAL": V0619_pokemon_mienfoo_normalEntry;
  "V0621_POKEMON_DRUDDIGON": PokemonSettingsDruddigon;
  "V0626_POKEMON_BOUFFALANT": PokemonSettingsBouffalant;
  "V0621_POKEMON_DRUDDIGON_NORMAL": PokemonSettingsDruddigonNormal;
  "V0626_POKEMON_BOUFFALANT_NORMAL": PokemonSettingsBouffalantNormal;
  "V0625_POKEMON_BISHARP": V0625_pokemon_bisharpEntry;
  "V0625_POKEMON_BISHARP_NORMAL": V0625_pokemon_bisharp_normalEntry;
  "V0627_POKEMON_RUFFLET": V0627_pokemon_ruffletEntry;
  "V0628_POKEMON_BRAVIARY": PokemonSettingsBraviary;
  "V0630_POKEMON_MANDIBUZZ": PokemonSettingsMandibuzz;
  "V0628_POKEMON_BRAVIARY_HISUIAN": PokemonSettingsBraviaryHisuian;
  "V0628_POKEMON_BRAVIARY_NORMAL": PokemonSettingsBraviaryNormal;
  "V0630_POKEMON_MANDIBUZZ_NORMAL": PokemonSettingsMandibuzzNormal;
  "V0631_POKEMON_HEATMOR": V0631_pokemon_heatmorEntry;
  "V0631_POKEMON_HEATMOR_NORMAL": V0631_pokemon_heatmor_normalEntry;
  "V0632_POKEMON_DURANT_NORMAL": PokemonSettingsDurantNormal;
  "V0634_POKEMON_ZWEILOUS": V0634_pokemon_zweilousEntry;
  "V0634_POKEMON_ZWEILOUS_NORMAL": V0634_pokemon_zweilous_normalEntry;
  "V0635_POKEMON_HYDREIGON": V0635_pokemon_hydreigonEntry;
  "V0635_POKEMON_HYDREIGON_NORMAL": V0635_pokemon_hydreigon_normalEntry;
  "V0637_POKEMON_VOLCARONA": V0637_pokemon_volcaronaEntry;
  "V0637_POKEMON_VOLCARONA_NORMAL": V0637_pokemon_volcarona_normalEntry;
  "V0638_POKEMON_COBALION": PokemonSettingsCobalion;
  "V0639_POKEMON_TERRAKION": PokemonSettingsTerrakion;
  "V0640_POKEMON_VIRIZION": PokemonSettingsVirizion;
  "V0643_POKEMON_RESHIRAM": PokemonSettingsReshiram;
  "V0644_POKEMON_ZEKROM": PokemonSettingsZekrom;
  "V0638_POKEMON_COBALION_NORMAL": PokemonSettingsCobalionNormal;
  "V0639_POKEMON_TERRAKION_NORMAL": PokemonSettingsTerrakionNormal;
  "V0640_POKEMON_VIRIZION_NORMAL": PokemonSettingsVirizionNormal;
  "V0643_POKEMON_RESHIRAM_NORMAL": PokemonSettingsReshiramNormal;
  "V0644_POKEMON_ZEKROM_NORMAL": PokemonSettingsZekromNormal;
  "V0641_POKEMON_TORNADUS": V0641_pokemon_tornadusEntry;
  "V0641_POKEMON_TORNADUS_INCARNATE": V0641_pokemon_tornadus_incarnateEntry;
  "V0641_POKEMON_TORNADUS_THERIAN": V0641_pokemon_tornadus_therianEntry;
  "V0642_POKEMON_THUNDURUS": PokemonSettingsThundurus;
  "V0645_POKEMON_LANDORUS": PokemonSettingsLandorus;
  "V0642_POKEMON_THUNDURUS_INCARNATE": PokemonSettingsThundurusIncarnate;
  "V0645_POKEMON_LANDORUS_INCARNATE": PokemonSettingsLandorusIncarnate;
  "V0642_POKEMON_THUNDURUS_THERIAN": V0642_pokemon_thundurus_therianEntry;
  "V0645_POKEMON_LANDORUS_THERIAN": V0645_pokemon_landorus_therianEntry;
  "V0646_POKEMON_KYUREM": V0646_pokemon_kyuremEntry;
  "V0646_POKEMON_KYUREM_BLACK": PokemonSettingsBlack;
  "V0646_POKEMON_KYUREM_WHITE": PokemonSettingsWhite;
  "V0646_POKEMON_KYUREM_NORMAL": V0646_pokemon_kyurem_normalEntry;
  "V0647_POKEMON_KELDEO": V0647_pokemon_keldeoEntry;
  "V0647_POKEMON_KELDEO_ORDINARY": V0647_pokemon_keldeo_ordinaryEntry;
  "V0647_POKEMON_KELDEO_RESOLUTE": V0647_pokemon_keldeo_resoluteEntry;
  "V0648_POKEMON_MELOETTA": V0648_pokemon_meloettaEntry;
  "V0648_POKEMON_MELOETTA_ARIA": PokemonSettingsAria;
  "V0648_POKEMON_MELOETTA_PIROUETTE": PokemonSettingsPirouette;
  "V0649_POKEMON_GENESECT": V0649_pokemon_genesectEntry;
  "V0649_POKEMON_GENESECT_BURN": PokemonSettingsBurn;
  "V0649_POKEMON_GENESECT_CHILL": PokemonSettingsChill;
  "V0649_POKEMON_GENESECT_DOUSE": PokemonSettingsDouse;
  "V0649_POKEMON_GENESECT_NORMAL": PokemonSettingsNormal3;
  "V0649_POKEMON_GENESECT_SHOCK": PokemonSettingsShock;
}

export interface PokemonSettingsGen5ByDexId {
  "0494": V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry;
  "0495": PokemonSettingsSnivy | PokemonSettingsSnivyNormal;
  "0496": PokemonSettingsServine | PokemonSettingsServineNormal;
  "0497": PokemonSettingsSerperior | PokemonSettingsSerperiorNormal;
  "0498": PokemonSettingsTepig | PokemonSettingsTepigNormal;
  "0499": PokemonSettingsPignite | PokemonSettingsPigniteNormal;
  "0500": PokemonSettingsEmboar | PokemonSettingsEmboarNormal;
  "0501": PokemonSettingsOshawott | PokemonSettingsOshawottNormal;
  "0502": PokemonSettingsDewott | PokemonSettingsDewottNormal;
  "0503": V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry;
  "0504": PokemonSettingsPatrat | PokemonSettingsPatratNormal;
  "0505": PokemonSettingsWatchog | PokemonSettingsWatchogNormal;
  "0506": PokemonSettingsLillipup | PokemonSettingsLillipupNormal;
  "0507": PokemonSettingsHerdier | PokemonSettingsHerdierNormal;
  "0508": PokemonSettingsStoutland | PokemonSettingsStoutlandNormal;
  "0509": PokemonSettingsPurrloin | PokemonSettingsPurrloinNormal;
  "0510": PokemonSettingsLiepard | PokemonSettingsLiepardNormal;
  "0511": PokemonSettingsPansage | PokemonSettingsPansageNormal;
  "0512": PokemonSettingsSimisage | PokemonSettingsSimisageNormal;
  "0513": PokemonSettingsPansear | PokemonSettingsPansearNormal;
  "0514": PokemonSettingsSimisear | PokemonSettingsSimisearNormal;
  "0515": PokemonSettingsPanpour | PokemonSettingsPanpourNormal;
  "0516": PokemonSettingsSimipour | PokemonSettingsSimipourNormal;
  "0517": V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry;
  "0518": V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry;
  "0519": PokemonSettingsPidove | PokemonSettingsPidoveNormal;
  "0520": V0520_pokemon_tranquillEntry | PokemonSettingsTranquillNormal;
  "0521": V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry;
  "0522": PokemonSettingsBlitzle | PokemonSettingsBlitzleNormal;
  "0523": PokemonSettingsZebstrika | PokemonSettingsZebstrikaNormal;
  "0524": PokemonSettingsRoggenrola | PokemonSettingsRoggenrolaNormal;
  "0525": PokemonSettingsBoldore | PokemonSettingsBoldoreNormal;
  "0526": PokemonSettingsGigalith | PokemonSettingsGigalithNormal;
  "0527": V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry;
  "0528": V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry;
  "0529": PokemonSettingsDrilburNormal | PokemonSettingsDrilbur;
  "0530": PokemonSettingsExcadrill | PokemonSettingsExcadrillNormal;
  "0531": V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry;
  "0532": PokemonSettingsTimburr | PokemonSettingsTimburrNormal;
  "0533": PokemonSettingsGurdurr | PokemonSettingsGurdurrNormal;
  "0534": PokemonSettingsConkeldurr | PokemonSettingsConkeldurrNormal;
  "0535": PokemonSettingsTympole | PokemonSettingsTympoleNormal;
  "0536": PokemonSettingsPalpitoad | PokemonSettingsPalpitoadNormal;
  "0537": PokemonSettingsSeismitoad | PokemonSettingsSeismitoadNormal;
  "0538": PokemonSettingsThroh | PokemonSettingsThrohNormal;
  "0539": PokemonSettingsSawk | PokemonSettingsSawkNormal;
  "0540": PokemonSettingsSewaddle | PokemonSettingsSewaddleNormal;
  "0541": PokemonSettingsSwadloon | PokemonSettingsSwadloonNormal;
  "0542": V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry;
  "0543": PokemonSettingsVenipede | PokemonSettingsVenipedeNormal;
  "0544": PokemonSettingsWhirlipede | PokemonSettingsWhirlipedeNormal;
  "0545": PokemonSettingsScolipede | PokemonSettingsScolipedeNormal;
  "0546": V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry;
  "0547": PokemonSettingsWhimsicott | PokemonSettingsWhimsicottNormal;
  "0548": PokemonSettingsPetilil | PokemonSettingsPetililNormal;
  "0549": PokemonSettingsLilligant | PokemonSettingsLilligantNormal | PokemonSettingsLilligantHisuian;
  "0550": PokemonSettingsBasculin | PokemonSettingsBasculinBlueStriped | PokemonSettingsBasculinRedStriped | PokemonSettingsBasculinWhiteStriped;
  "0551": PokemonSettingsSandile | PokemonSettingsSandileNormal;
  "0552": PokemonSettingsKrokorok | PokemonSettingsKrokorokNormal;
  "0553": PokemonSettingsKrookodile | PokemonSettingsKrookodileNormal;
  "0554": PokemonSettingsDarumakaNormal | PokemonSettingsDarumaka | V0554_pokemon_darumaka_galarianEntry;
  "0555": PokemonSettingsDarmanitan | PokemonSettingsDarmanitanStandard | PokemonSettingsDarmanitanZen | PokemonSettingsDarmanitanGalarianStandard | V0555_pokemon_darmanitan_galarian_zenEntry;
  "0556": PokemonSettingsMaractus | PokemonSettingsMaractusNormal;
  "0557": PokemonSettingsDwebble | PokemonSettingsDwebbleNormal;
  "0558": PokemonSettingsCrustle | PokemonSettingsCrustleNormal;
  "0559": PokemonSettingsScraggy | PokemonSettingsScraggyNormal;
  "0560": PokemonSettingsScrafty | PokemonSettingsScraftyNormal;
  "0561": V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry;
  "0562": V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry;
  "0563": V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry;
  "0564": PokemonSettingsTirtouga | PokemonSettingsTirtougaNormal;
  "0565": PokemonSettingsCarracosta | PokemonSettingsCarracostaNormal;
  "0566": PokemonSettingsArchen | PokemonSettingsArchenNormal;
  "0567": PokemonSettingsArcheops | PokemonSettingsArcheopsNormal;
  "0568": V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry;
  "0569": PokemonSettingsGarbodor | PokemonSettingsGarbodorNormal;
  "0570": PokemonSettingsZoruaNormal | PokemonSettingsZorua | V0570_pokemon_zorua_hisuianEntry;
  "0571": PokemonSettingsZoroark | PokemonSettingsZoroarkNormal | V0571_pokemon_zoroark_hisuianEntry;
  "0572": PokemonSettingsMinccino | PokemonSettingsMinccinoNormal;
  "0573": PokemonSettingsCinccino | PokemonSettingsCinccinoNormal;
  "0574": PokemonSettingsGothita | PokemonSettingsGothitaNormal;
  "0575": PokemonSettingsGothorita | PokemonSettingsGothoritaNormal;
  "0576": PokemonSettingsGothitelle | PokemonSettingsGothitelleNormal;
  "0577": V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry;
  "0578": V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry;
  "0579": V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry;
  "0580": PokemonSettingsDucklett | PokemonSettingsDucklettNormal;
  "0581": PokemonSettingsSwanna | PokemonSettingsSwannaNormal;
  "0582": V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry;
  "0583": PokemonSettingsVanillish | PokemonSettingsVanillishNormal;
  "0584": V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry;
  "0585": PokemonSettingsDeerlingAutumn | PokemonSettingsDeerlingSpring | PokemonSettingsDeerlingSummer | PokemonSettingsDeerlingWinter | PokemonSettingsDeerling;
  "0586": V0586_pokemon_sawsbuckEntry | PokemonSettingsAutumn | PokemonSettingsSpring | PokemonSettingsSummer | PokemonSettingsWinter;
  "0587": V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry;
  "0588": PokemonSettingsKarrablast | PokemonSettingsKarrablastNormal;
  "0589": V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry;
  "0590": V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry;
  "0591": PokemonSettingsAmoonguss | PokemonSettingsAmoongussNormal;
  "0592": PokemonSettingsFrillish | PokemonSettingsFrillishFemale | PokemonSettingsFrillishNormal;
  "0593": V0593_pokemon_jellicentEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "0594": PokemonSettingsAlomomola | PokemonSettingsAlomomolaNormal;
  "0595": V0595_pokemon_joltikEntry | PokemonSettingsJoltikNormal;
  "0596": PokemonSettingsGalvantula | PokemonSettingsGalvantulaNormal;
  "0597": PokemonSettingsFerroseed | PokemonSettingsFerroseedNormal;
  "0598": PokemonSettingsFerrothorn | PokemonSettingsFerrothornNormal;
  "0599": V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry;
  "0600": PokemonSettingsKlang | PokemonSettingsKlangNormal;
  "0601": V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry;
  "0602": PokemonSettingsTynamo | PokemonSettingsTynamoNormal;
  "0603": V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry;
  "0604": V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry;
  "0605": PokemonSettingsElgyem | PokemonSettingsElgyemNormal;
  "0606": PokemonSettingsBeheeyem | PokemonSettingsBeheeyemNormal;
  "0607": PokemonSettingsLitwick | PokemonSettingsLitwickNormal;
  "0608": V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry;
  "0609": V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry;
  "0610": PokemonSettingsAxew | PokemonSettingsAxewNormal;
  "0611": PokemonSettingsFraxure | PokemonSettingsFraxureNormal;
  "0612": PokemonSettingsHaxorus | PokemonSettingsHaxorusNormal;
  "0613": PokemonSettingsCubchoo | PokemonSettingsCubchooNormal | V0613_pokemon_cubchoo_winter_2020Entry;
  "0614": PokemonSettingsBeartic | PokemonSettingsBearticNormal | PokemonSettingsBearticWinterT;
  "0615": V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry;
  "0616": PokemonSettingsShelmet | PokemonSettingsShelmetNormal;
  "0617": PokemonSettingsAccelgor | PokemonSettingsAccelgorNormal;
  "0618": V0618_pokemon_stunfiskEntry | PokemonSettingsGalarian | PokemonSettingsNormal2;
  "0619": V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry;
  "0620": PokemonSettingsMienshao | PokemonSettingsMienshaoNormal;
  "0621": PokemonSettingsDruddigon | PokemonSettingsDruddigonNormal;
  "0622": PokemonSettingsGolett | PokemonSettingsGolettNormal;
  "0623": PokemonSettingsGolurk | PokemonSettingsGolurkNormal;
  "0624": PokemonSettingsPawniard | PokemonSettingsPawniardNormal;
  "0625": V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry;
  "0626": PokemonSettingsBouffalant | PokemonSettingsBouffalantNormal;
  "0627": PokemonSettingsRuffletNormal | V0627_pokemon_ruffletEntry;
  "0628": PokemonSettingsBraviary | PokemonSettingsBraviaryHisuian | PokemonSettingsBraviaryNormal;
  "0629": PokemonSettingsVullaby | PokemonSettingsVullabyNormal;
  "0630": PokemonSettingsMandibuzz | PokemonSettingsMandibuzzNormal;
  "0631": V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry;
  "0632": PokemonSettingsDurant | PokemonSettingsDurantNormal;
  "0633": PokemonSettingsDeino | PokemonSettingsDeinoNormal;
  "0634": V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry;
  "0635": V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry;
  "0636": PokemonSettingsLarvesta | PokemonSettingsLarvestaNormal;
  "0637": V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry;
  "0638": PokemonSettingsCobalion | PokemonSettingsCobalionNormal;
  "0639": PokemonSettingsTerrakion | PokemonSettingsTerrakionNormal;
  "0640": PokemonSettingsVirizion | PokemonSettingsVirizionNormal;
  "0641": V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry;
  "0642": PokemonSettingsThundurus | PokemonSettingsThundurusIncarnate | V0642_pokemon_thundurus_therianEntry;
  "0643": PokemonSettingsReshiram | PokemonSettingsReshiramNormal;
  "0644": PokemonSettingsZekrom | PokemonSettingsZekromNormal;
  "0645": PokemonSettingsLandorus | PokemonSettingsLandorusIncarnate | V0645_pokemon_landorus_therianEntry;
  "0646": V0646_pokemon_kyuremEntry | PokemonSettingsBlack | PokemonSettingsWhite | V0646_pokemon_kyurem_normalEntry;
  "0647": V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry;
  "0648": V0648_pokemon_meloettaEntry | PokemonSettingsAria | PokemonSettingsPirouette;
  "0649": V0649_pokemon_genesectEntry | PokemonSettingsBurn | PokemonSettingsChill | PokemonSettingsDouse | PokemonSettingsNormal3 | PokemonSettingsShock;
}

export interface PokemonSettingsGen5ByPokemonId {
  "ACCELGOR": PokemonSettingsAccelgor | PokemonSettingsAccelgorNormal;
  "ALOMOMOLA": PokemonSettingsAlomomola | PokemonSettingsAlomomolaNormal;
  "AMOONGUSS": PokemonSettingsAmoonguss | PokemonSettingsAmoongussNormal;
  "ARCHEN": PokemonSettingsArchen | PokemonSettingsArchenNormal;
  "ARCHEOPS": PokemonSettingsArcheops | PokemonSettingsArcheopsNormal;
  "AUDINO": V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry;
  "AXEW": PokemonSettingsAxew | PokemonSettingsAxewNormal;
  "BASCULIN": PokemonSettingsBasculin | PokemonSettingsBasculinBlueStriped | PokemonSettingsBasculinRedStriped | PokemonSettingsBasculinWhiteStriped;
  "BEARTIC": PokemonSettingsBeartic | PokemonSettingsBearticNormal | PokemonSettingsBearticWinterT;
  "BEHEEYEM": PokemonSettingsBeheeyem | PokemonSettingsBeheeyemNormal;
  "BISHARP": V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry;
  "BLITZLE": PokemonSettingsBlitzle | PokemonSettingsBlitzleNormal;
  "BOLDORE": PokemonSettingsBoldore | PokemonSettingsBoldoreNormal;
  "BOUFFALANT": PokemonSettingsBouffalant | PokemonSettingsBouffalantNormal;
  "BRAVIARY": PokemonSettingsBraviary | PokemonSettingsBraviaryHisuian | PokemonSettingsBraviaryNormal;
  "CARRACOSTA": PokemonSettingsCarracosta | PokemonSettingsCarracostaNormal;
  "CHANDELURE": V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry;
  "CINCCINO": PokemonSettingsCinccino | PokemonSettingsCinccinoNormal;
  "COBALION": PokemonSettingsCobalion | PokemonSettingsCobalionNormal;
  "COFAGRIGUS": V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry;
  "CONKELDURR": PokemonSettingsConkeldurr | PokemonSettingsConkeldurrNormal;
  "COTTONEE": V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry;
  "CRUSTLE": PokemonSettingsCrustle | PokemonSettingsCrustleNormal;
  "CRYOGONAL": V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry;
  "CUBCHOO": PokemonSettingsCubchoo | PokemonSettingsCubchooNormal | V0613_pokemon_cubchoo_winter_2020Entry;
  "DARMANITAN": PokemonSettingsDarmanitan | PokemonSettingsDarmanitanStandard | PokemonSettingsDarmanitanZen | PokemonSettingsDarmanitanGalarianStandard | V0555_pokemon_darmanitan_galarian_zenEntry;
  "DARUMAKA": PokemonSettingsDarumakaNormal | PokemonSettingsDarumaka | V0554_pokemon_darumaka_galarianEntry;
  "DEERLING": PokemonSettingsDeerlingAutumn | PokemonSettingsDeerlingSpring | PokemonSettingsDeerlingSummer | PokemonSettingsDeerlingWinter | PokemonSettingsDeerling;
  "DEINO": PokemonSettingsDeino | PokemonSettingsDeinoNormal;
  "DEWOTT": PokemonSettingsDewott | PokemonSettingsDewottNormal;
  "DRILBUR": PokemonSettingsDrilburNormal | PokemonSettingsDrilbur;
  "DRUDDIGON": PokemonSettingsDruddigon | PokemonSettingsDruddigonNormal;
  "DUCKLETT": PokemonSettingsDucklett | PokemonSettingsDucklettNormal;
  "DUOSION": V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry;
  "DURANT": PokemonSettingsDurant | PokemonSettingsDurantNormal;
  "DWEBBLE": PokemonSettingsDwebble | PokemonSettingsDwebbleNormal;
  "EELEKTRIK": V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry;
  "EELEKTROSS": V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry;
  "ELGYEM": PokemonSettingsElgyem | PokemonSettingsElgyemNormal;
  "EMBOAR": PokemonSettingsEmboar | PokemonSettingsEmboarNormal;
  "EMOLGA": V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry;
  "ESCAVALIER": V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry;
  "EXCADRILL": PokemonSettingsExcadrill | PokemonSettingsExcadrillNormal;
  "FERROSEED": PokemonSettingsFerroseed | PokemonSettingsFerroseedNormal;
  "FERROTHORN": PokemonSettingsFerrothorn | PokemonSettingsFerrothornNormal;
  "FOONGUS": V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry;
  "FRAXURE": PokemonSettingsFraxure | PokemonSettingsFraxureNormal;
  "FRILLISH": PokemonSettingsFrillish | PokemonSettingsFrillishFemale | PokemonSettingsFrillishNormal;
  "GALVANTULA": PokemonSettingsGalvantula | PokemonSettingsGalvantulaNormal;
  "GARBODOR": PokemonSettingsGarbodor | PokemonSettingsGarbodorNormal;
  "GENESECT": V0649_pokemon_genesectEntry | PokemonSettingsBurn | PokemonSettingsChill | PokemonSettingsDouse | PokemonSettingsNormal3 | PokemonSettingsShock;
  "GIGALITH": PokemonSettingsGigalith | PokemonSettingsGigalithNormal;
  "GOLETT": PokemonSettingsGolett | PokemonSettingsGolettNormal;
  "GOLURK": PokemonSettingsGolurk | PokemonSettingsGolurkNormal;
  "GOTHITA": PokemonSettingsGothita | PokemonSettingsGothitaNormal;
  "GOTHITELLE": PokemonSettingsGothitelle | PokemonSettingsGothitelleNormal;
  "GOTHORITA": PokemonSettingsGothorita | PokemonSettingsGothoritaNormal;
  "GURDURR": PokemonSettingsGurdurr | PokemonSettingsGurdurrNormal;
  "HAXORUS": PokemonSettingsHaxorus | PokemonSettingsHaxorusNormal;
  "HEATMOR": V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry;
  "HERDIER": PokemonSettingsHerdier | PokemonSettingsHerdierNormal;
  "HYDREIGON": V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry;
  "JELLICENT": V0593_pokemon_jellicentEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "JOLTIK": V0595_pokemon_joltikEntry | PokemonSettingsJoltikNormal;
  "KARRABLAST": PokemonSettingsKarrablast | PokemonSettingsKarrablastNormal;
  "KELDEO": V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry;
  "KLANG": PokemonSettingsKlang | PokemonSettingsKlangNormal;
  "KLINK": V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry;
  "KLINKLANG": V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry;
  "KROKOROK": PokemonSettingsKrokorok | PokemonSettingsKrokorokNormal;
  "KROOKODILE": PokemonSettingsKrookodile | PokemonSettingsKrookodileNormal;
  "KYUREM": V0646_pokemon_kyuremEntry | PokemonSettingsBlack | PokemonSettingsWhite | V0646_pokemon_kyurem_normalEntry;
  "LAMPENT": V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry;
  "LANDORUS": PokemonSettingsLandorus | PokemonSettingsLandorusIncarnate | V0645_pokemon_landorus_therianEntry;
  "LARVESTA": PokemonSettingsLarvesta | PokemonSettingsLarvestaNormal;
  "LEAVANNY": V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry;
  "LIEPARD": PokemonSettingsLiepard | PokemonSettingsLiepardNormal;
  "LILLIGANT": PokemonSettingsLilligant | PokemonSettingsLilligantNormal | PokemonSettingsLilligantHisuian;
  "LILLIPUP": PokemonSettingsLillipup | PokemonSettingsLillipupNormal;
  "LITWICK": PokemonSettingsLitwick | PokemonSettingsLitwickNormal;
  "MANDIBUZZ": PokemonSettingsMandibuzz | PokemonSettingsMandibuzzNormal;
  "MARACTUS": PokemonSettingsMaractus | PokemonSettingsMaractusNormal;
  "MELOETTA": V0648_pokemon_meloettaEntry | PokemonSettingsAria | PokemonSettingsPirouette;
  "MIENFOO": V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry;
  "MIENSHAO": PokemonSettingsMienshao | PokemonSettingsMienshaoNormal;
  "MINCCINO": PokemonSettingsMinccino | PokemonSettingsMinccinoNormal;
  "MUNNA": V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry;
  "MUSHARNA": V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry;
  "OSHAWOTT": PokemonSettingsOshawott | PokemonSettingsOshawottNormal;
  "PALPITOAD": PokemonSettingsPalpitoad | PokemonSettingsPalpitoadNormal;
  "PANPOUR": PokemonSettingsPanpour | PokemonSettingsPanpourNormal;
  "PANSAGE": PokemonSettingsPansage | PokemonSettingsPansageNormal;
  "PANSEAR": PokemonSettingsPansear | PokemonSettingsPansearNormal;
  "PATRAT": PokemonSettingsPatrat | PokemonSettingsPatratNormal;
  "PAWNIARD": PokemonSettingsPawniard | PokemonSettingsPawniardNormal;
  "PETILIL": PokemonSettingsPetilil | PokemonSettingsPetililNormal;
  "PIDOVE": PokemonSettingsPidove | PokemonSettingsPidoveNormal;
  "PIGNITE": PokemonSettingsPignite | PokemonSettingsPigniteNormal;
  "PURRLOIN": PokemonSettingsPurrloin | PokemonSettingsPurrloinNormal;
  "RESHIRAM": PokemonSettingsReshiram | PokemonSettingsReshiramNormal;
  "REUNICLUS": V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry;
  "ROGGENROLA": PokemonSettingsRoggenrola | PokemonSettingsRoggenrolaNormal;
  "RUFFLET": PokemonSettingsRuffletNormal | V0627_pokemon_ruffletEntry;
  "SAMUROTT": V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry;
  "SANDILE": PokemonSettingsSandile | PokemonSettingsSandileNormal;
  "SAWK": PokemonSettingsSawk | PokemonSettingsSawkNormal;
  "SAWSBUCK": V0586_pokemon_sawsbuckEntry | PokemonSettingsAutumn | PokemonSettingsSpring | PokemonSettingsSummer | PokemonSettingsWinter;
  "SCOLIPEDE": PokemonSettingsScolipede | PokemonSettingsScolipedeNormal;
  "SCRAFTY": PokemonSettingsScrafty | PokemonSettingsScraftyNormal;
  "SCRAGGY": PokemonSettingsScraggy | PokemonSettingsScraggyNormal;
  "SEISMITOAD": PokemonSettingsSeismitoad | PokemonSettingsSeismitoadNormal;
  "SERPERIOR": PokemonSettingsSerperior | PokemonSettingsSerperiorNormal;
  "SERVINE": PokemonSettingsServine | PokemonSettingsServineNormal;
  "SEWADDLE": PokemonSettingsSewaddle | PokemonSettingsSewaddleNormal;
  "SHELMET": PokemonSettingsShelmet | PokemonSettingsShelmetNormal;
  "SIGILYPH": V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry;
  "SIMIPOUR": PokemonSettingsSimipour | PokemonSettingsSimipourNormal;
  "SIMISAGE": PokemonSettingsSimisage | PokemonSettingsSimisageNormal;
  "SIMISEAR": PokemonSettingsSimisear | PokemonSettingsSimisearNormal;
  "SNIVY": PokemonSettingsSnivy | PokemonSettingsSnivyNormal;
  "SOLOSIS": V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry;
  "STOUTLAND": PokemonSettingsStoutland | PokemonSettingsStoutlandNormal;
  "STUNFISK": V0618_pokemon_stunfiskEntry | PokemonSettingsGalarian | PokemonSettingsNormal2;
  "SWADLOON": PokemonSettingsSwadloon | PokemonSettingsSwadloonNormal;
  "SWANNA": PokemonSettingsSwanna | PokemonSettingsSwannaNormal;
  "SWOOBAT": V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry;
  "TEPIG": PokemonSettingsTepig | PokemonSettingsTepigNormal;
  "TERRAKION": PokemonSettingsTerrakion | PokemonSettingsTerrakionNormal;
  "THROH": PokemonSettingsThroh | PokemonSettingsThrohNormal;
  "THUNDURUS": PokemonSettingsThundurus | PokemonSettingsThundurusIncarnate | V0642_pokemon_thundurus_therianEntry;
  "TIMBURR": PokemonSettingsTimburr | PokemonSettingsTimburrNormal;
  "TIRTOUGA": PokemonSettingsTirtouga | PokemonSettingsTirtougaNormal;
  "TORNADUS": V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry;
  "TRANQUILL": V0520_pokemon_tranquillEntry | PokemonSettingsTranquillNormal;
  "TRUBBISH": V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry;
  "TYMPOLE": PokemonSettingsTympole | PokemonSettingsTympoleNormal;
  "TYNAMO": PokemonSettingsTynamo | PokemonSettingsTynamoNormal;
  "UNFEZANT": V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry;
  "VANILLISH": PokemonSettingsVanillish | PokemonSettingsVanillishNormal;
  "VANILLITE": V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry;
  "VANILLUXE": V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry;
  "VENIPEDE": PokemonSettingsVenipede | PokemonSettingsVenipedeNormal;
  "VICTINI": V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry;
  "VIRIZION": PokemonSettingsVirizion | PokemonSettingsVirizionNormal;
  "VOLCARONA": V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry;
  "VULLABY": PokemonSettingsVullaby | PokemonSettingsVullabyNormal;
  "WATCHOG": PokemonSettingsWatchog | PokemonSettingsWatchogNormal;
  "WHIMSICOTT": PokemonSettingsWhimsicott | PokemonSettingsWhimsicottNormal;
  "WHIRLIPEDE": PokemonSettingsWhirlipede | PokemonSettingsWhirlipedeNormal;
  "WOOBAT": V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry;
  "YAMASK": V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry;
  "ZEBSTRIKA": PokemonSettingsZebstrika | PokemonSettingsZebstrikaNormal;
  "ZEKROM": PokemonSettingsZekrom | PokemonSettingsZekromNormal;
  "ZOROARK": PokemonSettingsZoroark | PokemonSettingsZoroarkNormal | V0571_pokemon_zoroark_hisuianEntry;
  "ZORUA": PokemonSettingsZoruaNormal | PokemonSettingsZorua | V0570_pokemon_zorua_hisuianEntry;
  "ZWEILOUS": V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry;
}

export type PokemonSettingsGen5MasterfileEntry = V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry | PokemonSettingsSnivy | PokemonSettingsOshawott | PokemonSettingsPatrat | PokemonSettingsPurrloin | PokemonSettingsBlitzle | PokemonSettingsRoggenrola | PokemonSettingsTimburr | PokemonSettingsGothita | PokemonSettingsSnivyNormal | PokemonSettingsOshawottNormal | PokemonSettingsPatratNormal | PokemonSettingsPurrloinNormal | PokemonSettingsBlitzleNormal | PokemonSettingsRoggenrolaNormal | PokemonSettingsDrilburNormal | PokemonSettingsTimburrNormal | PokemonSettingsDarumakaNormal | PokemonSettingsGothitaNormal | PokemonSettingsServine | PokemonSettingsDewott | PokemonSettingsGothorita | PokemonSettingsServineNormal | PokemonSettingsDewottNormal | PokemonSettingsGothoritaNormal | PokemonSettingsSerperior | PokemonSettingsGigalith | PokemonSettingsSerperiorNormal | PokemonSettingsGigalithNormal | PokemonSettingsTepig | PokemonSettingsTepigNormal | PokemonSettingsPignite | PokemonSettingsWhirlipede | PokemonSettingsPigniteNormal | PokemonSettingsWhirlipedeNormal | PokemonSettingsEmboar | PokemonSettingsEmboarNormal | V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry | PokemonSettingsWatchog | PokemonSettingsLiepard | PokemonSettingsGarbodor | PokemonSettingsGothitelle | PokemonSettingsWatchogNormal | PokemonSettingsLiepardNormal | PokemonSettingsGarbodorNormal | PokemonSettingsGothitelleNormal | PokemonSettingsLillipup | PokemonSettingsAxew | PokemonSettingsCubchoo | PokemonSettingsLillipupNormal | PokemonSettingsZoruaNormal | PokemonSettingsAxewNormal | PokemonSettingsCubchooNormal | PokemonSettingsHerdier | PokemonSettingsFraxure | PokemonSettingsHerdierNormal | PokemonSettingsFraxureNormal | PokemonSettingsStoutland | PokemonSettingsSimisage | PokemonSettingsSimisear | PokemonSettingsSimipour | PokemonSettingsLilligant | PokemonSettingsZoroark | PokemonSettingsCinccino | PokemonSettingsMienshao | PokemonSettingsStoutlandNormal | PokemonSettingsSimisageNormal | PokemonSettingsSimisearNormal | PokemonSettingsSimipourNormal | PokemonSettingsLilligantNormal | PokemonSettingsZoroarkNormal | PokemonSettingsCinccinoNormal | PokemonSettingsMienshaoNormal | PokemonSettingsPansage | PokemonSettingsPansear | PokemonSettingsPanpour | PokemonSettingsPetilil | PokemonSettingsMinccino | PokemonSettingsPansageNormal | PokemonSettingsPansearNormal | PokemonSettingsPanpourNormal | PokemonSettingsPetililNormal | PokemonSettingsMinccinoNormal | V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry | V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry | PokemonSettingsPidove | PokemonSettingsVenipede | PokemonSettingsDwebble | PokemonSettingsTirtouga | PokemonSettingsArchen | PokemonSettingsDucklett | PokemonSettingsFerroseed | PokemonSettingsLitwick | PokemonSettingsGolett | PokemonSettingsDeino | PokemonSettingsPidoveNormal | PokemonSettingsVenipedeNormal | PokemonSettingsDwebbleNormal | PokemonSettingsTirtougaNormal | PokemonSettingsArchenNormal | PokemonSettingsDucklettNormal | PokemonSettingsFerroseedNormal | PokemonSettingsLitwickNormal | PokemonSettingsGolettNormal | PokemonSettingsDeinoNormal | V0520_pokemon_tranquillEntry | PokemonSettingsTranquillNormal | V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry | PokemonSettingsZebstrika | PokemonSettingsDarmanitan | PokemonSettingsZebstrikaNormal | PokemonSettingsDarmanitanStandard | PokemonSettingsBoldore | PokemonSettingsGurdurr | PokemonSettingsBoldoreNormal | PokemonSettingsGurdurrNormal | V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry | V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry | PokemonSettingsDrilbur | PokemonSettingsDarumaka | PokemonSettingsExcadrill | PokemonSettingsScolipede | PokemonSettingsCrustle | PokemonSettingsCarracosta | PokemonSettingsAmoonguss | PokemonSettingsGalvantula | PokemonSettingsExcadrillNormal | PokemonSettingsScolipedeNormal | PokemonSettingsDarmanitanZen | PokemonSettingsCrustleNormal | PokemonSettingsCarracostaNormal | PokemonSettingsAmoongussNormal | PokemonSettingsGalvantulaNormal | V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry | PokemonSettingsConkeldurr | PokemonSettingsAccelgor | PokemonSettingsConkeldurrNormal | PokemonSettingsAccelgorNormal | PokemonSettingsTympole | PokemonSettingsTynamo | PokemonSettingsElgyem | PokemonSettingsTympoleNormal | PokemonSettingsTynamoNormal | PokemonSettingsElgyemNormal | PokemonSettingsPalpitoad | PokemonSettingsSwadloon | PokemonSettingsKrokorok | PokemonSettingsPalpitoadNormal | PokemonSettingsSwadloonNormal | PokemonSettingsKrokorokNormal | PokemonSettingsSeismitoad | PokemonSettingsWhimsicott | PokemonSettingsKrookodile | PokemonSettingsScrafty | PokemonSettingsSeismitoadNormal | PokemonSettingsWhimsicottNormal | PokemonSettingsKrookodileNormal | PokemonSettingsScraftyNormal | PokemonSettingsThroh | PokemonSettingsSawk | PokemonSettingsThrohNormal | PokemonSettingsSawkNormal | PokemonSettingsSewaddle | PokemonSettingsSandile | PokemonSettingsScraggy | PokemonSettingsPawniard | PokemonSettingsVullaby | PokemonSettingsLarvesta | PokemonSettingsSewaddleNormal | PokemonSettingsSandileNormal | PokemonSettingsScraggyNormal | PokemonSettingsDeerlingAutumn | PokemonSettingsDeerlingSpring | PokemonSettingsDeerlingSummer | PokemonSettingsDeerlingWinter | PokemonSettingsPawniardNormal | PokemonSettingsRuffletNormal | PokemonSettingsVullabyNormal | PokemonSettingsLarvestaNormal | V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry | V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry | PokemonSettingsLilligantHisuian | PokemonSettingsBasculin | PokemonSettingsAlomomola | PokemonSettingsBasculinBlueStriped | PokemonSettingsBasculinRedStriped | PokemonSettingsBasculinWhiteStriped | PokemonSettingsAlomomolaNormal | V0554_pokemon_darumaka_galarianEntry | PokemonSettingsDarmanitanGalarianStandard | V0555_pokemon_darmanitan_galarian_zenEntry | PokemonSettingsMaractus | PokemonSettingsMaractusNormal | V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry | V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry | V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry | PokemonSettingsArcheops | PokemonSettingsSwanna | PokemonSettingsArcheopsNormal | PokemonSettingsSwannaNormal | V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry | PokemonSettingsZorua | V0570_pokemon_zorua_hisuianEntry | V0571_pokemon_zoroark_hisuianEntry | V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry | V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry | V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry | V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry | PokemonSettingsVanillish | PokemonSettingsKlang | PokemonSettingsVanillishNormal | PokemonSettingsKlangNormal | V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry | PokemonSettingsDeerling | PokemonSettingsDurant | V0586_pokemon_sawsbuckEntry | PokemonSettingsAutumn | PokemonSettingsSpring | PokemonSettingsSummer | PokemonSettingsWinter | V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry | PokemonSettingsKarrablast | PokemonSettingsShelmet | PokemonSettingsKarrablastNormal | PokemonSettingsShelmetNormal | V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry | V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry | PokemonSettingsFrillish | PokemonSettingsFrillishFemale | PokemonSettingsFrillishNormal | V0593_pokemon_jellicentEntry | PokemonSettingsFemale | PokemonSettingsNormal | V0595_pokemon_joltikEntry | PokemonSettingsJoltikNormal | PokemonSettingsFerrothorn | PokemonSettingsGolurk | PokemonSettingsFerrothornNormal | PokemonSettingsGolurkNormal | V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry | V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry | V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry | V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry | PokemonSettingsBeheeyem | PokemonSettingsBeheeyemNormal | V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry | V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry | PokemonSettingsHaxorus | PokemonSettingsHaxorusNormal | V0613_pokemon_cubchoo_winter_2020Entry | PokemonSettingsBeartic | PokemonSettingsBearticNormal | PokemonSettingsBearticWinterT | V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry | V0618_pokemon_stunfiskEntry | PokemonSettingsGalarian | PokemonSettingsNormal2 | V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry | PokemonSettingsDruddigon | PokemonSettingsBouffalant | PokemonSettingsDruddigonNormal | PokemonSettingsBouffalantNormal | V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry | V0627_pokemon_ruffletEntry | PokemonSettingsBraviary | PokemonSettingsMandibuzz | PokemonSettingsBraviaryHisuian | PokemonSettingsBraviaryNormal | PokemonSettingsMandibuzzNormal | V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry | PokemonSettingsDurantNormal | V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry | V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry | V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry | PokemonSettingsCobalion | PokemonSettingsTerrakion | PokemonSettingsVirizion | PokemonSettingsReshiram | PokemonSettingsZekrom | PokemonSettingsCobalionNormal | PokemonSettingsTerrakionNormal | PokemonSettingsVirizionNormal | PokemonSettingsReshiramNormal | PokemonSettingsZekromNormal | V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry | PokemonSettingsThundurus | PokemonSettingsLandorus | PokemonSettingsThundurusIncarnate | PokemonSettingsLandorusIncarnate | V0642_pokemon_thundurus_therianEntry | V0645_pokemon_landorus_therianEntry | V0646_pokemon_kyuremEntry | PokemonSettingsBlack | PokemonSettingsWhite | V0646_pokemon_kyurem_normalEntry | V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry | V0648_pokemon_meloettaEntry | PokemonSettingsAria | PokemonSettingsPirouette | V0649_pokemon_genesectEntry | PokemonSettingsBurn | PokemonSettingsChill | PokemonSettingsDouse | PokemonSettingsNormal3 | PokemonSettingsShock;

/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen2
// Filters: all
// Entries emitted: 244

import type { PokemonSettingsShared121, PokemonSettingsShared140, PokemonSettingsShared141, PokemonSettingsShared148, PokemonSettingsShared149, PokemonSettingsShared202, PokemonSettingsShared203, PokemonSettingsShared234, PokemonSettingsShared235, PokemonSettingsShared251, PokemonSettingsShared252, PokemonSettingsShared277, PokemonSettingsShared279, PokemonSettingsShared294, PokemonSettingsShared295, PokemonSettingsShared296, PokemonSettingsShared304, PokemonSettingsShared305, PokemonSettingsShared306, PokemonSettingsShared307, PokemonSettingsShared313, PokemonSettingsShared314, PokemonSettingsShared315, PokemonSettingsShared318, PokemonSettingsShared327, PokemonSettingsShared328, PokemonSettingsShared346, PokemonSettingsShared361, PokemonSettingsShared370, PokemonSettingsShared371, PokemonSettingsShared372, PokemonSettingsShared40, PokemonSettingsShared41, PokemonSettingsShared42, PokemonSettingsShared426, PokemonSettingsShared427, PokemonSettingsShared429, PokemonSettingsShared43, PokemonSettingsShared434, PokemonSettingsShared45, PokemonSettingsShared52, PokemonSettingsShared53, PokemonSettingsShared68, PokemonSettingsShared69, PokemonSettingsShared70, PokemonSettingsShared71, PokemonSettingsShared73, PokemonSettingsShared86, PokemonSettingsShared87, PokemonSettingsShared88, PokemonSettingsShared97 } from "./shared.generated";

export interface V0155_pokemon_cyndaquildatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0155_pokemon_cyndaquildatapokemonsettingsencounter {
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
export interface V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0155_pokemon_cyndaquildatapokemonsettingsibfc {

}
export interface V0155_pokemon_cyndaquildatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0155_pokemon_cyndaquildatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0155_pokemon_cyndaquildatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0155_pokemon_cyndaquildatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0155_pokemon_cyndaquildata {
  pokemonSettings: V0155_pokemon_cyndaquildatapokemonsettings;
  templateId: string;
}
export interface V0155_pokemon_cyndaquilEntry {
  templateId: "V0155_POKEMON_CYNDAQUIL";
  data: V0155_pokemon_cyndaquildata;
}
export interface V0155_pokemon_cyndaquil_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0155_pokemon_cyndaquil_normaldata {
  pokemonSettings: V0155_pokemon_cyndaquil_normaldatapokemonsettings;
  templateId: string;
}
export interface V0155_pokemon_cyndaquil_normalEntry {
  templateId: "V0155_POKEMON_CYNDAQUIL_NORMAL";
  data: V0155_pokemon_cyndaquil_normaldata;
}
export interface V0157_pokemon_typhlosiondatapokemonsettingsencounter {
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
export interface V0157_pokemon_typhlosiondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0157_pokemon_typhlosiondata {
  pokemonSettings: V0157_pokemon_typhlosiondatapokemonsettings;
  templateId: string;
}
export interface V0157_pokemon_typhlosionEntry {
  templateId: "V0157_POKEMON_TYPHLOSION";
  data: V0157_pokemon_typhlosiondata;
}
export interface V0157_pokemon_typhlosion_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0157_pokemon_typhlosion_hisuiandata {
  pokemonSettings: V0157_pokemon_typhlosion_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0157_pokemon_typhlosion_hisuianEntry {
  templateId: "V0157_POKEMON_TYPHLOSION_HISUIAN";
  data: V0157_pokemon_typhlosion_hisuiandata;
}
export interface V0157_pokemon_typhlosion_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0157_pokemon_typhlosion_normaldata {
  pokemonSettings: V0157_pokemon_typhlosion_normaldatapokemonsettings;
  templateId: string;
}
export interface V0157_pokemon_typhlosion_normalEntry {
  templateId: "V0157_POKEMON_TYPHLOSION_NORMAL";
  data: V0157_pokemon_typhlosion_normaldata;
}
export interface V0159_pokemon_croconawdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0159_pokemon_croconawdata {
  pokemonSettings: V0159_pokemon_croconawdatapokemonsettings;
  templateId: string;
}
export interface V0159_pokemon_croconawEntry {
  templateId: "V0159_POKEMON_CROCONAW";
  data: V0159_pokemon_croconawdata;
}
export interface V0159_pokemon_croconaw_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0159_pokemon_croconaw_normaldata {
  pokemonSettings: V0159_pokemon_croconaw_normaldatapokemonsettings;
  templateId: string;
}
export interface V0159_pokemon_croconaw_normalEntry {
  templateId: "V0159_POKEMON_CROCONAW_NORMAL";
  data: V0159_pokemon_croconaw_normaldata;
}
export interface V0163_pokemon_hoothootdatapokemonsettingsencounter {
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
export interface V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0163_pokemon_hoothootdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0163_pokemon_hoothootdata {
  pokemonSettings: V0163_pokemon_hoothootdatapokemonsettings;
  templateId: string;
}
export interface V0163_pokemon_hoothootEntry {
  templateId: "V0163_POKEMON_HOOTHOOT";
  data: V0163_pokemon_hoothootdata;
}
export interface V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0163_pokemon_hoothoot_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0163_pokemon_hoothoot_normaldata {
  pokemonSettings: V0163_pokemon_hoothoot_normaldatapokemonsettings;
  templateId: string;
}
export interface V0163_pokemon_hoothoot_normalEntry {
  templateId: "V0163_POKEMON_HOOTHOOT_NORMAL";
  data: V0163_pokemon_hoothoot_normaldata;
}
export interface V0164_pokemon_noctowldatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0164_pokemon_noctowldatapokemonsettingsencounter {
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
export interface V0164_pokemon_noctowldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0164_pokemon_noctowldata {
  pokemonSettings: V0164_pokemon_noctowldatapokemonsettings;
  templateId: string;
}
export interface V0164_pokemon_noctowlEntry {
  templateId: "V0164_POKEMON_NOCTOWL";
  data: V0164_pokemon_noctowldata;
}
export interface V0164_pokemon_noctowl_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0164_pokemon_noctowl_normaldata {
  pokemonSettings: V0164_pokemon_noctowl_normaldatapokemonsettings;
  templateId: string;
}
export interface V0164_pokemon_noctowl_normalEntry {
  templateId: "V0164_POKEMON_NOCTOWL_NORMAL";
  data: V0164_pokemon_noctowl_normaldata;
}
export interface V0165_pokemon_ledybadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0165_pokemon_ledybadata {
  pokemonSettings: V0165_pokemon_ledybadatapokemonsettings;
  templateId: string;
}
export interface V0165_pokemon_ledybaEntry {
  templateId: "V0165_POKEMON_LEDYBA";
  data: V0165_pokemon_ledybadata;
}
export interface V0167_pokemon_spinarakdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0167_pokemon_spinarakdata {
  pokemonSettings: V0167_pokemon_spinarakdatapokemonsettings;
  templateId: string;
}
export interface V0167_pokemon_spinarakEntry {
  templateId: "V0167_POKEMON_SPINARAK";
  data: V0167_pokemon_spinarakdata;
}
export interface V0167_pokemon_spinarak_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0167_pokemon_spinarak_normaldata {
  pokemonSettings: V0167_pokemon_spinarak_normaldatapokemonsettings;
  templateId: string;
}
export interface V0167_pokemon_spinarak_normalEntry {
  templateId: "V0167_POKEMON_SPINARAK_NORMAL";
  data: V0167_pokemon_spinarak_normaldata;
}
export interface V0169_pokemon_crobatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0169_pokemon_crobatdata {
  pokemonSettings: V0169_pokemon_crobatdatapokemonsettings;
  templateId: string;
}
export interface V0169_pokemon_crobatEntry {
  templateId: "V0169_POKEMON_CROBAT";
  data: V0169_pokemon_crobatdata;
}
export interface V0169_pokemon_crobat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0169_pokemon_crobat_normaldata {
  pokemonSettings: V0169_pokemon_crobat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0169_pokemon_crobat_normalEntry {
  templateId: "V0169_POKEMON_CROBAT_NORMAL";
  data: V0169_pokemon_crobat_normaldata;
}
export interface V0170_pokemon_chinchoudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0170_pokemon_chinchoudata {
  pokemonSettings: V0170_pokemon_chinchoudatapokemonsettings;
  templateId: string;
}
export interface V0170_pokemon_chinchouEntry {
  templateId: "V0170_POKEMON_CHINCHOU";
  data: V0170_pokemon_chinchoudata;
}
export interface V0170_pokemon_chinchou_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0170_pokemon_chinchou_normaldata {
  pokemonSettings: V0170_pokemon_chinchou_normaldatapokemonsettings;
  templateId: string;
}
export interface V0170_pokemon_chinchou_normalEntry {
  templateId: "V0170_POKEMON_CHINCHOU_NORMAL";
  data: V0170_pokemon_chinchou_normaldata;
}
export interface V0171_pokemon_lanturndatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0171_pokemon_lanturndata {
  pokemonSettings: V0171_pokemon_lanturndatapokemonsettings;
  templateId: string;
}
export interface V0171_pokemon_lanturnEntry {
  templateId: "V0171_POKEMON_LANTURN";
  data: V0171_pokemon_lanturndata;
}
export interface V0171_pokemon_lanturn_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0171_pokemon_lanturn_normaldata {
  pokemonSettings: V0171_pokemon_lanturn_normaldatapokemonsettings;
  templateId: string;
}
export interface V0171_pokemon_lanturn_normalEntry {
  templateId: "V0171_POKEMON_LANTURN_NORMAL";
  data: V0171_pokemon_lanturn_normaldata;
}
export interface V0172_pokemon_pichudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0172_pokemon_pichudata {
  pokemonSettings: V0172_pokemon_pichudatapokemonsettings;
  templateId: string;
}
export interface V0172_pokemon_pichuEntry {
  templateId: "V0172_POKEMON_PICHU";
  data: V0172_pokemon_pichudata;
}
export interface V0172_pokemon_pichu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0172_pokemon_pichu_normaldata {
  pokemonSettings: V0172_pokemon_pichu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0172_pokemon_pichu_normalEntry {
  templateId: "V0172_POKEMON_PICHU_NORMAL";
  data: V0172_pokemon_pichu_normaldata;
}
export interface V0174_pokemon_igglybuffdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0174_pokemon_igglybuffdata {
  pokemonSettings: V0174_pokemon_igglybuffdatapokemonsettings;
  templateId: string;
}
export interface V0174_pokemon_igglybuffEntry {
  templateId: "V0174_POKEMON_IGGLYBUFF";
  data: V0174_pokemon_igglybuffdata;
}
export interface V0174_pokemon_igglybuff_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0174_pokemon_igglybuff_normaldata {
  pokemonSettings: V0174_pokemon_igglybuff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0174_pokemon_igglybuff_normalEntry {
  templateId: "V0174_POKEMON_IGGLYBUFF_NORMAL";
  data: V0174_pokemon_igglybuff_normaldata;
}
export interface V0175_pokemon_togepidatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0175_pokemon_togepidata {
  pokemonSettings: V0175_pokemon_togepidatapokemonsettings;
  templateId: string;
}
export interface V0175_pokemon_togepiEntry {
  templateId: "V0175_POKEMON_TOGEPI";
  data: V0175_pokemon_togepidata;
}
export interface V0175_pokemon_togepi_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0175_pokemon_togepi_normaldata {
  pokemonSettings: V0175_pokemon_togepi_normaldatapokemonsettings;
  templateId: string;
}
export interface V0175_pokemon_togepi_normalEntry {
  templateId: "V0175_POKEMON_TOGEPI_NORMAL";
  data: V0175_pokemon_togepi_normaldata;
}
export interface V0176_pokemon_togeticdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0176_pokemon_togeticdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togeticdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0176_pokemon_togeticdata {
  pokemonSettings: V0176_pokemon_togeticdatapokemonsettings;
  templateId: string;
}
export interface V0176_pokemon_togeticEntry {
  templateId: "V0176_POKEMON_TOGETIC";
  data: V0176_pokemon_togeticdata;
}
export interface V0176_pokemon_togetic_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0176_pokemon_togetic_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togetic_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0176_pokemon_togetic_normaldata {
  pokemonSettings: V0176_pokemon_togetic_normaldatapokemonsettings;
  templateId: string;
}
export interface V0176_pokemon_togetic_normalEntry {
  templateId: "V0176_POKEMON_TOGETIC_NORMAL";
  data: V0176_pokemon_togetic_normaldata;
}
export interface V0177_pokemon_natudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0177_pokemon_natudata {
  pokemonSettings: V0177_pokemon_natudatapokemonsettings;
  templateId: string;
}
export interface V0177_pokemon_natuEntry {
  templateId: "V0177_POKEMON_NATU";
  data: V0177_pokemon_natudata;
}
export interface V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0177_pokemon_natu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0177_pokemon_natu_normaldata {
  pokemonSettings: V0177_pokemon_natu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0177_pokemon_natu_normalEntry {
  templateId: "V0177_POKEMON_NATU_NORMAL";
  data: V0177_pokemon_natu_normaldata;
}
export interface V0179_pokemon_mareepdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0179_pokemon_mareepdata {
  pokemonSettings: V0179_pokemon_mareepdatapokemonsettings;
  templateId: string;
}
export interface V0179_pokemon_mareepEntry {
  templateId: "V0179_POKEMON_MAREEP";
  data: V0179_pokemon_mareepdata;
}
export interface V0179_pokemon_mareep_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0179_pokemon_mareep_normaldata {
  pokemonSettings: V0179_pokemon_mareep_normaldatapokemonsettings;
  templateId: string;
}
export interface V0179_pokemon_mareep_normalEntry {
  templateId: "V0179_POKEMON_MAREEP_NORMAL";
  data: V0179_pokemon_mareep_normaldata;
}
export interface V0180_pokemon_flaaffydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0180_pokemon_flaaffydata {
  pokemonSettings: V0180_pokemon_flaaffydatapokemonsettings;
  templateId: string;
}
export interface V0180_pokemon_flaaffyEntry {
  templateId: "V0180_POKEMON_FLAAFFY";
  data: V0180_pokemon_flaaffydata;
}
export interface V0180_pokemon_flaaffy_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0180_pokemon_flaaffy_normaldata {
  pokemonSettings: V0180_pokemon_flaaffy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0180_pokemon_flaaffy_normalEntry {
  templateId: "V0180_POKEMON_FLAAFFY_NORMAL";
  data: V0180_pokemon_flaaffy_normaldata;
}
export interface V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0181_pokemon_ampharosdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0181_pokemon_ampharosdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0181_pokemon_ampharosdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0181_pokemon_ampharosdata {
  pokemonSettings: V0181_pokemon_ampharosdatapokemonsettings;
  templateId: string;
}
export interface V0181_pokemon_ampharosEntry {
  templateId: "V0181_POKEMON_AMPHAROS";
  data: V0181_pokemon_ampharosdata;
}
export interface V0181_pokemon_ampharos_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0181_pokemon_ampharosdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0181_pokemon_ampharos_normaldata {
  pokemonSettings: V0181_pokemon_ampharos_normaldatapokemonsettings;
  templateId: string;
}
export interface V0181_pokemon_ampharos_normalEntry {
  templateId: "V0181_POKEMON_AMPHAROS_NORMAL";
  data: V0181_pokemon_ampharos_normaldata;
}
export interface V0183_pokemon_marilldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0183_pokemon_marilldata {
  pokemonSettings: V0183_pokemon_marilldatapokemonsettings;
  templateId: string;
}
export interface V0183_pokemon_marillEntry {
  templateId: "V0183_POKEMON_MARILL";
  data: V0183_pokemon_marilldata;
}
export interface V0183_pokemon_marill_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0183_pokemon_marill_normaldata {
  pokemonSettings: V0183_pokemon_marill_normaldatapokemonsettings;
  templateId: string;
}
export interface V0183_pokemon_marill_normalEntry {
  templateId: "V0183_POKEMON_MARILL_NORMAL";
  data: V0183_pokemon_marill_normaldata;
}
export interface V0185_pokemon_sudowoododatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
}
export interface V0185_pokemon_sudowoododatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0185_pokemon_sudowoododatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0185_pokemon_sudowoododata {
  pokemonSettings: V0185_pokemon_sudowoododatapokemonsettings;
  templateId: string;
}
export interface V0185_pokemon_sudowoodoEntry {
  templateId: "V0185_POKEMON_SUDOWOODO";
  data: V0185_pokemon_sudowoododata;
}
export interface V0187_pokemon_hoppipdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0187_pokemon_hoppipdata {
  pokemonSettings: V0187_pokemon_hoppipdatapokemonsettings;
  templateId: string;
}
export interface V0187_pokemon_hoppipEntry {
  templateId: "V0187_POKEMON_HOPPIP";
  data: V0187_pokemon_hoppipdata;
}
export interface V0188_pokemon_skiploomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0188_pokemon_skiploomdata {
  pokemonSettings: V0188_pokemon_skiploomdatapokemonsettings;
  templateId: string;
}
export interface V0188_pokemon_skiploomEntry {
  templateId: "V0188_POKEMON_SKIPLOOM";
  data: V0188_pokemon_skiploomdata;
}
export interface V0188_pokemon_skiploom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0188_pokemon_skiploom_normaldata {
  pokemonSettings: V0188_pokemon_skiploom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0188_pokemon_skiploom_normalEntry {
  templateId: "V0188_POKEMON_SKIPLOOM_NORMAL";
  data: V0188_pokemon_skiploom_normaldata;
}
export interface V0189_pokemon_jumpluffdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0189_pokemon_jumpluffdata {
  pokemonSettings: V0189_pokemon_jumpluffdatapokemonsettings;
  templateId: string;
}
export interface V0189_pokemon_jumpluffEntry {
  templateId: "V0189_POKEMON_JUMPLUFF";
  data: V0189_pokemon_jumpluffdata;
}
export interface V0189_pokemon_jumpluff_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0189_pokemon_jumpluff_normaldata {
  pokemonSettings: V0189_pokemon_jumpluff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0189_pokemon_jumpluff_normalEntry {
  templateId: "V0189_POKEMON_JUMPLUFF_NORMAL";
  data: V0189_pokemon_jumpluff_normaldata;
}
export interface V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0190_pokemon_aipomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0190_pokemon_aipomdata {
  pokemonSettings: V0190_pokemon_aipomdatapokemonsettings;
  templateId: string;
}
export interface V0190_pokemon_aipomEntry {
  templateId: "V0190_POKEMON_AIPOM";
  data: V0190_pokemon_aipomdata;
}
export interface V0190_pokemon_aipom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0190_pokemon_aipom_normaldata {
  pokemonSettings: V0190_pokemon_aipom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0190_pokemon_aipom_normalEntry {
  templateId: "V0190_POKEMON_AIPOM_NORMAL";
  data: V0190_pokemon_aipom_normaldata;
}
export interface V0191_pokemon_sunkerndatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togeticdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0191_pokemon_sunkerndata {
  pokemonSettings: V0191_pokemon_sunkerndatapokemonsettings;
  templateId: string;
}
export interface V0191_pokemon_sunkernEntry {
  templateId: "V0191_POKEMON_SUNKERN";
  data: V0191_pokemon_sunkerndata;
}
export interface V0191_pokemon_sunkern_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togetic_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0191_pokemon_sunkern_normaldata {
  pokemonSettings: V0191_pokemon_sunkern_normaldatapokemonsettings;
  templateId: string;
}
export interface V0191_pokemon_sunkern_normalEntry {
  templateId: "V0191_POKEMON_SUNKERN_NORMAL";
  data: V0191_pokemon_sunkern_normaldata;
}
export interface V0193_pokemon_yanmadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togeticdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0193_pokemon_yanmadata {
  pokemonSettings: V0193_pokemon_yanmadatapokemonsettings;
  templateId: string;
}
export interface V0193_pokemon_yanmaEntry {
  templateId: "V0193_POKEMON_YANMA";
  data: V0193_pokemon_yanmadata;
}
export interface V0193_pokemon_yanma_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0176_pokemon_togetic_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0193_pokemon_yanma_normaldata {
  pokemonSettings: V0193_pokemon_yanma_normaldatapokemonsettings;
  templateId: string;
}
export interface V0193_pokemon_yanma_normalEntry {
  templateId: "V0193_POKEMON_YANMA_NORMAL";
  data: V0193_pokemon_yanma_normaldata;
}
export interface V0194_pokemon_wooper_paldeadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0155_pokemon_cyndaquildatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0194_pokemon_wooper_paldeadata {
  pokemonSettings: V0194_pokemon_wooper_paldeadatapokemonsettings;
  templateId: string;
}
export interface V0194_pokemon_wooper_paldeaEntry {
  templateId: "V0194_POKEMON_WOOPER_PALDEA";
  data: V0194_pokemon_wooper_paldeadata;
}
export interface V0195_pokemon_quagsiredatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0195_pokemon_quagsiredata {
  pokemonSettings: V0195_pokemon_quagsiredatapokemonsettings;
  templateId: string;
}
export interface V0195_pokemon_quagsireEntry {
  templateId: "V0195_POKEMON_QUAGSIRE";
  data: V0195_pokemon_quagsiredata;
}
export interface V0197_pokemon_umbreondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0197_pokemon_umbreondata {
  pokemonSettings: V0197_pokemon_umbreondatapokemonsettings;
  templateId: string;
}
export interface V0197_pokemon_umbreonEntry {
  templateId: "V0197_POKEMON_UMBREON";
  data: V0197_pokemon_umbreondata;
}
export interface V0198_pokemon_murkrowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0198_pokemon_murkrowdata {
  pokemonSettings: V0198_pokemon_murkrowdatapokemonsettings;
  templateId: string;
}
export interface V0198_pokemon_murkrowEntry {
  templateId: "V0198_POKEMON_MURKROW";
  data: V0198_pokemon_murkrowdata;
}
export interface V0198_pokemon_murkrow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0198_pokemon_murkrow_normaldata {
  pokemonSettings: V0198_pokemon_murkrow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0198_pokemon_murkrow_normalEntry {
  templateId: "V0198_POKEMON_MURKROW_NORMAL";
  data: V0198_pokemon_murkrow_normaldata;
}
export interface V0199_pokemon_slowkingdatapokemonsettingsencounter {
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
export interface V0199_pokemon_slowkingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0199_pokemon_slowkingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0199_pokemon_slowkingdata {
  pokemonSettings: V0199_pokemon_slowkingdatapokemonsettings;
  templateId: string;
}
export interface V0199_pokemon_slowkingEntry {
  templateId: "V0199_POKEMON_SLOWKING";
  data: V0199_pokemon_slowkingdata;
}
export interface V0199_pokemon_slowking_2022datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0199_pokemon_slowkingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0199_pokemon_slowking_2022data {
  pokemonSettings: V0199_pokemon_slowking_2022datapokemonsettings;
  templateId: string;
}
export interface V0199_pokemon_slowking_2022Entry {
  templateId: "V0199_POKEMON_SLOWKING_2022";
  data: V0199_pokemon_slowking_2022data;
}
export interface V0199_pokemon_slowking_galariandatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0199_pokemon_slowking_galariandatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0199_pokemon_slowking_galariandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0199_pokemon_slowking_galariandatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0199_pokemon_slowking_galariandatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0199_pokemon_slowking_galariandata {
  pokemonSettings: V0199_pokemon_slowking_galariandatapokemonsettings;
  templateId: string;
}
export interface V0199_pokemon_slowking_galarianEntry {
  templateId: "V0199_POKEMON_SLOWKING_GALARIAN";
  data: V0199_pokemon_slowking_galariandata;
}
export interface V0199_pokemon_slowking_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0199_pokemon_slowkingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0199_pokemon_slowking_normaldata {
  pokemonSettings: V0199_pokemon_slowking_normaldatapokemonsettings;
  templateId: string;
}
export interface V0199_pokemon_slowking_normalEntry {
  templateId: "V0199_POKEMON_SLOWKING_NORMAL";
  data: V0199_pokemon_slowking_normaldata;
}
export interface V0200_pokemon_misdreavusdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0200_pokemon_misdreavusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0200_pokemon_misdreavusdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0200_pokemon_misdreavusdata {
  pokemonSettings: V0200_pokemon_misdreavusdatapokemonsettings;
  templateId: string;
}
export interface V0200_pokemon_misdreavusEntry {
  templateId: "V0200_POKEMON_MISDREAVUS";
  data: V0200_pokemon_misdreavusdata;
}
export interface V0200_pokemon_misdreavus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0200_pokemon_misdreavus_normaldata {
  pokemonSettings: V0200_pokemon_misdreavus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0200_pokemon_misdreavus_normalEntry {
  templateId: "V0200_POKEMON_MISDREAVUS_NORMAL";
  data: V0200_pokemon_misdreavus_normaldata;
}
export interface V0202_pokemon_wobbuffetdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0202_pokemon_wobbuffetdata {
  pokemonSettings: V0202_pokemon_wobbuffetdatapokemonsettings;
  templateId: string;
}
export interface V0202_pokemon_wobbuffetEntry {
  templateId: "V0202_POKEMON_WOBBUFFET";
  data: V0202_pokemon_wobbuffetdata;
}
export interface V0202_pokemon_wobbuffet_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0202_pokemon_wobbuffet_normaldata {
  pokemonSettings: V0202_pokemon_wobbuffet_normaldatapokemonsettings;
  templateId: string;
}
export interface V0202_pokemon_wobbuffet_normalEntry {
  templateId: "V0202_POKEMON_WOBBUFFET_NORMAL";
  data: V0202_pokemon_wobbuffet_normaldata;
}
export interface V0203_pokemon_girafarigdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0203_pokemon_girafarigdata {
  pokemonSettings: V0203_pokemon_girafarigdatapokemonsettings;
  templateId: string;
}
export interface V0203_pokemon_girafarigEntry {
  templateId: "V0203_POKEMON_GIRAFARIG";
  data: V0203_pokemon_girafarigdata;
}
export interface V0203_pokemon_girafarig_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0203_pokemon_girafarig_normaldata {
  pokemonSettings: V0203_pokemon_girafarig_normaldatapokemonsettings;
  templateId: string;
}
export interface V0203_pokemon_girafarig_normalEntry {
  templateId: "V0203_POKEMON_GIRAFARIG_NORMAL";
  data: V0203_pokemon_girafarig_normaldata;
}
export interface V0206_pokemon_dunsparcedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionLikelihoodWeight: number;
  form: string;
}
export interface V0206_pokemon_dunsparcedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0206_pokemon_dunsparcedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0206_pokemon_dunsparcedata {
  pokemonSettings: V0206_pokemon_dunsparcedatapokemonsettings;
  templateId: string;
}
export interface V0206_pokemon_dunsparceEntry {
  templateId: "V0206_POKEMON_DUNSPARCE";
  data: V0206_pokemon_dunsparcedata;
}
export interface V0206_pokemon_dunsparce_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0206_pokemon_dunsparcedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0206_pokemon_dunsparce_normaldata {
  pokemonSettings: V0206_pokemon_dunsparce_normaldatapokemonsettings;
  templateId: string;
}
export interface V0206_pokemon_dunsparce_normalEntry {
  templateId: "V0206_POKEMON_DUNSPARCE_NORMAL";
  data: V0206_pokemon_dunsparce_normaldata;
}
export interface V0207_pokemon_gligardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0207_pokemon_gligardata {
  pokemonSettings: V0207_pokemon_gligardatapokemonsettings;
  templateId: string;
}
export interface V0207_pokemon_gligarEntry {
  templateId: "V0207_POKEMON_GLIGAR";
  data: V0207_pokemon_gligardata;
}
export interface V0207_pokemon_gligar_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0207_pokemon_gligar_normaldata {
  pokemonSettings: V0207_pokemon_gligar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0207_pokemon_gligar_normalEntry {
  templateId: "V0207_POKEMON_GLIGAR_NORMAL";
  data: V0207_pokemon_gligar_normaldata;
}
export interface V0208_pokemon_steelixdatapokemonsettingsencounter {
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
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0208_pokemon_steelixdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  raidBossDistanceOffset: number;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0208_pokemon_steelixdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0208_pokemon_steelixdatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0208_pokemon_steelixdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0208_pokemon_steelixdata {
  pokemonSettings: V0208_pokemon_steelixdatapokemonsettings;
  templateId: string;
}
export interface V0208_pokemon_steelixEntry {
  templateId: "V0208_POKEMON_STEELIX";
  data: V0208_pokemon_steelixdata;
}
export interface V0208_pokemon_steelix_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0208_pokemon_steelixdatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0208_pokemon_steelixdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0208_pokemon_steelix_normaldata {
  pokemonSettings: V0208_pokemon_steelix_normaldatapokemonsettings;
  templateId: string;
}
export interface V0208_pokemon_steelix_normalEntry {
  templateId: "V0208_POKEMON_STEELIX_NORMAL";
  data: V0208_pokemon_steelix_normaldata;
}
export interface V0211_pokemon_qwilfishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0211_pokemon_qwilfishdata {
  pokemonSettings: V0211_pokemon_qwilfishdatapokemonsettings;
  templateId: string;
}
export interface V0211_pokemon_qwilfishEntry {
  templateId: "V0211_POKEMON_QWILFISH";
  data: V0211_pokemon_qwilfishdata;
}
export interface V0211_pokemon_qwilfish_hisuiandatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0211_pokemon_qwilfish_hisuiandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  questDisplay: (V0211_pokemon_qwilfish_hisuiandatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0211_pokemon_qwilfish_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0211_pokemon_qwilfish_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0211_pokemon_qwilfish_hisuiandata {
  pokemonSettings: V0211_pokemon_qwilfish_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0211_pokemon_qwilfish_hisuianEntry {
  templateId: "V0211_POKEMON_QWILFISH_HISUIAN";
  data: V0211_pokemon_qwilfish_hisuiandata;
}
export interface V0211_pokemon_qwilfish_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0211_pokemon_qwilfish_normaldata {
  pokemonSettings: V0211_pokemon_qwilfish_normaldatapokemonsettings;
  templateId: string;
}
export interface V0211_pokemon_qwilfish_normalEntry {
  templateId: "V0211_POKEMON_QWILFISH_NORMAL";
  data: V0211_pokemon_qwilfish_normaldata;
}
export interface V0212_pokemon_scizordatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0199_pokemon_slowking_galariandatapokemonsettingscamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0212_pokemon_scizordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0212_pokemon_scizordatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0212_pokemon_scizordata {
  pokemonSettings: V0212_pokemon_scizordatapokemonsettings;
  templateId: string;
}
export interface V0212_pokemon_scizorEntry {
  templateId: "V0212_POKEMON_SCIZOR";
  data: V0212_pokemon_scizordata;
}
export interface V0212_pokemon_scizor_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0212_pokemon_scizordatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0212_pokemon_scizor_normaldata {
  pokemonSettings: V0212_pokemon_scizor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0212_pokemon_scizor_normalEntry {
  templateId: "V0212_POKEMON_SCIZOR_NORMAL";
  data: V0212_pokemon_scizor_normaldata;
}
export interface V0213_pokemon_shuckledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0213_pokemon_shuckledata {
  pokemonSettings: V0213_pokemon_shuckledatapokemonsettings;
  templateId: string;
}
export interface V0213_pokemon_shuckleEntry {
  templateId: "V0213_POKEMON_SHUCKLE";
  data: V0213_pokemon_shuckledata;
}
export interface V0213_pokemon_shuckle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0213_pokemon_shuckle_normaldata {
  pokemonSettings: V0213_pokemon_shuckle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0213_pokemon_shuckle_normalEntry {
  templateId: "V0213_POKEMON_SHUCKLE_NORMAL";
  data: V0213_pokemon_shuckle_normaldata;
}
export interface V0214_pokemon_heracrossdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0199_pokemon_slowking_galariandatapokemonsettingscamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0214_pokemon_heracrossdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0214_pokemon_heracrossdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0214_pokemon_heracrossdata {
  pokemonSettings: V0214_pokemon_heracrossdatapokemonsettings;
  templateId: string;
}
export interface V0214_pokemon_heracrossEntry {
  templateId: "V0214_POKEMON_HERACROSS";
  data: V0214_pokemon_heracrossdata;
}
export interface V0214_pokemon_heracross_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0214_pokemon_heracrossdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0214_pokemon_heracross_normaldata {
  pokemonSettings: V0214_pokemon_heracross_normaldatapokemonsettings;
  templateId: string;
}
export interface V0214_pokemon_heracross_normalEntry {
  templateId: "V0214_POKEMON_HERACROSS_NORMAL";
  data: V0214_pokemon_heracross_normaldata;
}
export interface V0215_pokemon_sneaseldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0215_pokemon_sneaseldata {
  pokemonSettings: V0215_pokemon_sneaseldatapokemonsettings;
  templateId: string;
}
export interface V0215_pokemon_sneaselEntry {
  templateId: "V0215_POKEMON_SNEASEL";
  data: V0215_pokemon_sneaseldata;
}
export interface V0215_pokemon_sneasel_hisuiandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  onlyDaytime: boolean;
  questDisplay: (V0211_pokemon_qwilfish_hisuiandatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0215_pokemon_sneasel_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0215_pokemon_sneasel_hisuiandatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0215_pokemon_sneasel_hisuiandata {
  pokemonSettings: V0215_pokemon_sneasel_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0215_pokemon_sneasel_hisuianEntry {
  templateId: "V0215_POKEMON_SNEASEL_HISUIAN";
  data: V0215_pokemon_sneasel_hisuiandata;
}
export interface V0215_pokemon_sneasel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0215_pokemon_sneasel_normaldata {
  pokemonSettings: V0215_pokemon_sneasel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0215_pokemon_sneasel_normalEntry {
  templateId: "V0215_POKEMON_SNEASEL_NORMAL";
  data: V0215_pokemon_sneasel_normaldata;
}
export interface V0217_pokemon_ursaringdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  onlyFullMoon: boolean;
}
export interface V0217_pokemon_ursaringdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0217_pokemon_ursaringdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0217_pokemon_ursaringdata {
  pokemonSettings: V0217_pokemon_ursaringdatapokemonsettings;
  templateId: string;
}
export interface V0217_pokemon_ursaringEntry {
  templateId: "V0217_POKEMON_URSARING";
  data: V0217_pokemon_ursaringdata;
}
export interface V0217_pokemon_ursaring_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0217_pokemon_ursaringdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0217_pokemon_ursaring_normaldata {
  pokemonSettings: V0217_pokemon_ursaring_normaldatapokemonsettings;
  templateId: string;
}
export interface V0217_pokemon_ursaring_normalEntry {
  templateId: "V0217_POKEMON_URSARING_NORMAL";
  data: V0217_pokemon_ursaring_normaldata;
}
export interface V0221_pokemon_piloswinedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0221_pokemon_piloswinedata {
  pokemonSettings: V0221_pokemon_piloswinedatapokemonsettings;
  templateId: string;
}
export interface V0221_pokemon_piloswineEntry {
  templateId: "V0221_POKEMON_PILOSWINE";
  data: V0221_pokemon_piloswinedata;
}
export interface V0221_pokemon_piloswine_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0221_pokemon_piloswine_normaldata {
  pokemonSettings: V0221_pokemon_piloswine_normaldatapokemonsettings;
  templateId: string;
}
export interface V0221_pokemon_piloswine_normalEntry {
  templateId: "V0221_POKEMON_PILOSWINE_NORMAL";
  data: V0221_pokemon_piloswine_normaldata;
}
export interface V0222_pokemon_corsoladatapokemonsettingsencounter {
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
}
export interface V0222_pokemon_corsoladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0222_pokemon_corsoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0222_pokemon_corsoladata {
  pokemonSettings: V0222_pokemon_corsoladatapokemonsettings;
  templateId: string;
}
export interface V0222_pokemon_corsolaEntry {
  templateId: "V0222_POKEMON_CORSOLA";
  data: V0222_pokemon_corsoladata;
}
export interface V0222_pokemon_corsola_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0222_pokemon_corsoladatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0222_pokemon_corsola_galariandata {
  pokemonSettings: V0222_pokemon_corsola_galariandatapokemonsettings;
  templateId: string;
}
export interface V0222_pokemon_corsola_galarianEntry {
  templateId: "V0222_POKEMON_CORSOLA_GALARIAN";
  data: V0222_pokemon_corsola_galariandata;
}
export interface V0222_pokemon_corsola_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0222_pokemon_corsoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0222_pokemon_corsola_normaldata {
  pokemonSettings: V0222_pokemon_corsola_normaldatapokemonsettings;
  templateId: string;
}
export interface V0222_pokemon_corsola_normalEntry {
  templateId: "V0222_POKEMON_CORSOLA_NORMAL";
  data: V0222_pokemon_corsola_normaldata;
}
export interface V0222_pokemon_corsola_spring_2026datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0222_pokemon_corsoladatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: number;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0222_pokemon_corsola_spring_2026data {
  pokemonSettings: V0222_pokemon_corsola_spring_2026datapokemonsettings;
  templateId: string;
}
export interface V0222_pokemon_corsola_spring_2026Entry {
  templateId: "V0222_POKEMON_CORSOLA_SPRING_2026";
  data: V0222_pokemon_corsola_spring_2026data;
}
export interface V0225_pokemon_delibirddatapokemonsettingsencounter {
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
export interface V0225_pokemon_delibirddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0225_pokemon_delibirddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0225_pokemon_delibirddata {
  pokemonSettings: V0225_pokemon_delibirddatapokemonsettings;
  templateId: string;
}
export interface V0225_pokemon_delibirdEntry {
  templateId: "V0225_POKEMON_DELIBIRD";
  data: V0225_pokemon_delibirddata;
}
export interface V0225_pokemon_delibird_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0225_pokemon_delibirddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0225_pokemon_delibird_normaldata {
  pokemonSettings: V0225_pokemon_delibird_normaldatapokemonsettings;
  templateId: string;
}
export interface V0225_pokemon_delibird_normalEntry {
  templateId: "V0225_POKEMON_DELIBIRD_NORMAL";
  data: V0225_pokemon_delibird_normaldata;
}
export interface V0225_pokemon_delibird_winter_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0225_pokemon_delibirddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0225_pokemon_delibird_winter_2020data {
  pokemonSettings: V0225_pokemon_delibird_winter_2020datapokemonsettings;
  templateId: string;
}
export interface V0225_pokemon_delibird_winter_2020Entry {
  templateId: "V0225_POKEMON_DELIBIRD_WINTER_2020";
  data: V0225_pokemon_delibird_winter_2020data;
}
export interface V0226_pokemon_mantinedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0226_pokemon_mantinedata {
  pokemonSettings: V0226_pokemon_mantinedatapokemonsettings;
  templateId: string;
}
export interface V0226_pokemon_mantineEntry {
  templateId: "V0226_POKEMON_MANTINE";
  data: V0226_pokemon_mantinedata;
}
export interface V0226_pokemon_mantine_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0226_pokemon_mantine_normaldata {
  pokemonSettings: V0226_pokemon_mantine_normaldatapokemonsettings;
  templateId: string;
}
export interface V0226_pokemon_mantine_normalEntry {
  templateId: "V0226_POKEMON_MANTINE_NORMAL";
  data: V0226_pokemon_mantine_normaldata;
}
export interface V0227_pokemon_skarmorydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0227_pokemon_skarmorydata {
  pokemonSettings: V0227_pokemon_skarmorydatapokemonsettings;
  templateId: string;
}
export interface V0227_pokemon_skarmoryEntry {
  templateId: "V0227_POKEMON_SKARMORY";
  data: V0227_pokemon_skarmorydata;
}
export interface V0227_pokemon_skarmory_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0227_pokemon_skarmory_normaldata {
  pokemonSettings: V0227_pokemon_skarmory_normaldatapokemonsettings;
  templateId: string;
}
export interface V0227_pokemon_skarmory_normalEntry {
  templateId: "V0227_POKEMON_SKARMORY_NORMAL";
  data: V0227_pokemon_skarmory_normaldata;
}
export interface V0229_pokemon_houndoomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0212_pokemon_scizordatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0229_pokemon_houndoomdata {
  pokemonSettings: V0229_pokemon_houndoomdatapokemonsettings;
  templateId: string;
}
export interface V0229_pokemon_houndoomEntry {
  templateId: "V0229_POKEMON_HOUNDOOM";
  data: V0229_pokemon_houndoomdata;
}
export interface V0229_pokemon_houndoom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0212_pokemon_scizordatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0229_pokemon_houndoom_normaldata {
  pokemonSettings: V0229_pokemon_houndoom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0229_pokemon_houndoom_normalEntry {
  templateId: "V0229_POKEMON_HOUNDOOM_NORMAL";
  data: V0229_pokemon_houndoom_normaldata;
}
export interface V0230_pokemon_kingdradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0230_pokemon_kingdradata {
  pokemonSettings: V0230_pokemon_kingdradatapokemonsettings;
  templateId: string;
}
export interface V0230_pokemon_kingdraEntry {
  templateId: "V0230_POKEMON_KINGDRA";
  data: V0230_pokemon_kingdradata;
}
export interface V0230_pokemon_kingdra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0230_pokemon_kingdra_normaldata {
  pokemonSettings: V0230_pokemon_kingdra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0230_pokemon_kingdra_normalEntry {
  templateId: "V0230_POKEMON_KINGDRA_NORMAL";
  data: V0230_pokemon_kingdra_normaldata;
}
export interface V0233_pokemon_porygon2datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0233_pokemon_porygon2data {
  pokemonSettings: V0233_pokemon_porygon2datapokemonsettings;
  templateId: string;
}
export interface V0233_pokemon_porygon2Entry {
  templateId: "V0233_POKEMON_PORYGON2";
  data: V0233_pokemon_porygon2data;
}
export interface V0233_pokemon_porygon2_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0190_pokemon_aipomdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0233_pokemon_porygon2_normaldata {
  pokemonSettings: V0233_pokemon_porygon2_normaldatapokemonsettings;
  templateId: string;
}
export interface V0233_pokemon_porygon2_normalEntry {
  templateId: "V0233_POKEMON_PORYGON2_NORMAL";
  data: V0233_pokemon_porygon2_normaldata;
}
export interface V0234_pokemon_stantlerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0234_pokemon_stantlerdata {
  pokemonSettings: V0234_pokemon_stantlerdatapokemonsettings;
  templateId: string;
}
export interface V0234_pokemon_stantlerEntry {
  templateId: "V0234_POKEMON_STANTLER";
  data: V0234_pokemon_stantlerdata;
}
export interface V0234_pokemon_stantler_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0234_pokemon_stantler_normaldata {
  pokemonSettings: V0234_pokemon_stantler_normaldatapokemonsettings;
  templateId: string;
}
export interface V0234_pokemon_stantler_normalEntry {
  templateId: "V0234_POKEMON_STANTLER_NORMAL";
  data: V0234_pokemon_stantler_normaldata;
}
export interface V0235_pokemon_smeargledatapokemonsettingsthirdmove {
  candyToUnlock: number;
}
export interface V0235_pokemon_smeargledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0235_pokemon_smeargledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0235_pokemon_smeargledata {
  pokemonSettings: V0235_pokemon_smeargledatapokemonsettings;
  templateId: string;
}
export interface V0235_pokemon_smeargleEntry {
  templateId: "V0235_POKEMON_SMEARGLE";
  data: V0235_pokemon_smeargledata;
}
export interface V0235_pokemon_smeargle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0235_pokemon_smeargledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0235_pokemon_smeargle_normaldata {
  pokemonSettings: V0235_pokemon_smeargle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0235_pokemon_smeargle_normalEntry {
  templateId: "V0235_POKEMON_SMEARGLE_NORMAL";
  data: V0235_pokemon_smeargle_normaldata;
}
export interface V0237_pokemon_hitmontopdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0237_pokemon_hitmontopdata {
  pokemonSettings: V0237_pokemon_hitmontopdatapokemonsettings;
  templateId: string;
}
export interface V0237_pokemon_hitmontopEntry {
  templateId: "V0237_POKEMON_HITMONTOP";
  data: V0237_pokemon_hitmontopdata;
}
export interface V0237_pokemon_hitmontop_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0155_pokemon_cyndaquildatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0237_pokemon_hitmontop_normaldata {
  pokemonSettings: V0237_pokemon_hitmontop_normaldatapokemonsettings;
  templateId: string;
}
export interface V0237_pokemon_hitmontop_normalEntry {
  templateId: "V0237_POKEMON_HITMONTOP_NORMAL";
  data: V0237_pokemon_hitmontop_normaldata;
}
export interface V0238_pokemon_smoochumdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothootdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0238_pokemon_smoochumdata {
  pokemonSettings: V0238_pokemon_smoochumdatapokemonsettings;
  templateId: string;
}
export interface V0238_pokemon_smoochumEntry {
  templateId: "V0238_POKEMON_SMOOCHUM";
  data: V0238_pokemon_smoochumdata;
}
export interface V0238_pokemon_smoochum_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0163_pokemon_hoothootdatapokemonsettingsencounter;
  evolutionBranch: (V0163_pokemon_hoothoot_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0238_pokemon_smoochum_normaldata {
  pokemonSettings: V0238_pokemon_smoochum_normaldatapokemonsettings;
  templateId: string;
}
export interface V0238_pokemon_smoochum_normalEntry {
  templateId: "V0238_POKEMON_SMOOCHUM_NORMAL";
  data: V0238_pokemon_smoochum_normaldata;
}
export interface V0242_pokemon_blisseydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0242_pokemon_blisseydata {
  pokemonSettings: V0242_pokemon_blisseydatapokemonsettings;
  templateId: string;
}
export interface V0242_pokemon_blisseyEntry {
  templateId: "V0242_POKEMON_BLISSEY";
  data: V0242_pokemon_blisseydata;
}
export interface V0242_pokemon_blissey_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0164_pokemon_noctowldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0242_pokemon_blissey_normaldata {
  pokemonSettings: V0242_pokemon_blissey_normaldatapokemonsettings;
  templateId: string;
}
export interface V0242_pokemon_blissey_normalEntry {
  templateId: "V0242_POKEMON_BLISSEY_NORMAL";
  data: V0242_pokemon_blissey_normaldata;
}
export interface V0245_pokemon_suicunedatapokemonsettingsencounter {
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
export interface V0245_pokemon_suicunedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0245_pokemon_suicunedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0245_pokemon_suicunedata {
  pokemonSettings: V0245_pokemon_suicunedatapokemonsettings;
  templateId: string;
}
export interface V0245_pokemon_suicuneEntry {
  templateId: "V0245_POKEMON_SUICUNE";
  data: V0245_pokemon_suicunedata;
}
export interface V0247_pokemon_pupitardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0247_pokemon_pupitardata {
  pokemonSettings: V0247_pokemon_pupitardatapokemonsettings;
  templateId: string;
}
export interface V0247_pokemon_pupitarEntry {
  templateId: "V0247_POKEMON_PUPITAR";
  data: V0247_pokemon_pupitardata;
}
export interface V0247_pokemon_pupitar_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0177_pokemon_natu_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0247_pokemon_pupitar_normaldata {
  pokemonSettings: V0247_pokemon_pupitar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0247_pokemon_pupitar_normalEntry {
  templateId: "V0247_POKEMON_PUPITAR_NORMAL";
  data: V0247_pokemon_pupitar_normaldata;
}
export interface V0248_pokemon_tyranitardatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0199_pokemon_slowking_galariandatapokemonsettingscamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0248_pokemon_tyranitardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0248_pokemon_tyranitardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0248_pokemon_tyranitardata {
  pokemonSettings: V0248_pokemon_tyranitardatapokemonsettings;
  templateId: string;
}
export interface V0248_pokemon_tyranitarEntry {
  templateId: "V0248_POKEMON_TYRANITAR";
  data: V0248_pokemon_tyranitardata;
}
export interface V0248_pokemon_tyranitar_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0155_pokemon_cyndaquildatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0157_pokemon_typhlosiondatapokemonsettingsencounter;
  evolutionBranch: (V0181_pokemon_ampharosdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
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
  shadow: V0155_pokemon_cyndaquildatapokemonsettingsshadow;
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  tempEvoOverrides: (V0248_pokemon_tyranitardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0248_pokemon_tyranitar_normaldata {
  pokemonSettings: V0248_pokemon_tyranitar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0248_pokemon_tyranitar_normalEntry {
  templateId: "V0248_POKEMON_TYRANITAR_NORMAL";
  data: V0248_pokemon_tyranitar_normaldata;
}
export interface V0251_pokemon_celebidatapokemonsettingsencounter {
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
export interface V0251_pokemon_celebidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0251_pokemon_celebidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0251_pokemon_celebidata {
  pokemonSettings: V0251_pokemon_celebidatapokemonsettings;
  templateId: string;
}
export interface V0251_pokemon_celebiEntry {
  templateId: "V0251_POKEMON_CELEBI";
  data: V0251_pokemon_celebidata;
}
export interface V0251_pokemon_celebi_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0164_pokemon_noctowldatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0251_pokemon_celebidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0155_pokemon_cyndaquildatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0155_pokemon_cyndaquildatapokemonsettingsstats;
  thirdMove: V0155_pokemon_cyndaquildatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0251_pokemon_celebi_normaldata {
  pokemonSettings: V0251_pokemon_celebi_normaldatapokemonsettings;
  templateId: string;
}
export interface V0251_pokemon_celebi_normalEntry {
  templateId: "V0251_POKEMON_CELEBI_NORMAL";
  data: V0251_pokemon_celebi_normaldata;
}

export type PokemonSettingsChikorita = PokemonSettingsShared121<"V0152_POKEMON_CHIKORITA", "CHIKORITA">;
export type PokemonSettingsTotodile = PokemonSettingsShared121<"V0158_POKEMON_TOTODILE", "TOTODILE">;
export type PokemonSettingsPhanpy = PokemonSettingsShared121<"V0231_POKEMON_PHANPY", "PHANPY">;

export type PokemonSettingsChikoritaNormal = PokemonSettingsShared294<"V0152_POKEMON_CHIKORITA_NORMAL", "CHIKORITA_NORMAL", "CHIKORITA">;
export type PokemonSettingsTotodileNormal = PokemonSettingsShared294<"V0158_POKEMON_TOTODILE_NORMAL", "TOTODILE_NORMAL", "TOTODILE">;

export type PokemonSettingsBayleef = PokemonSettingsShared295<"V0153_POKEMON_BAYLEEF", "BAYLEEF">;
export type PokemonSettingsQuilava = PokemonSettingsShared295<"V0156_POKEMON_QUILAVA", "QUILAVA">;

export type PokemonSettingsBayleefNormal = PokemonSettingsShared296<"V0153_POKEMON_BAYLEEF_NORMAL", "BAYLEEF_NORMAL", "BAYLEEF">;
export type PokemonSettingsQuilavaNormal = PokemonSettingsShared296<"V0156_POKEMON_QUILAVA_NORMAL", "QUILAVA_NORMAL", "QUILAVA">;

export type PokemonSettingsMeganium = PokemonSettingsShared202<"V0154_POKEMON_MEGANIUM", "MEGANIUM">;

export type PokemonSettingsMeganiumNormal = PokemonSettingsShared203<"V0154_POKEMON_MEGANIUM_NORMAL", "MEGANIUM_NORMAL", "MEGANIUM">;

export type PokemonSettingsFeraligatr = PokemonSettingsShared86<"V0160_POKEMON_FERALIGATR", "FERALIGATR">;

export type PokemonSettingsFeraligatrNormal = PokemonSettingsShared88<"V0160_POKEMON_FERALIGATR_NORMAL", "FERALIGATR_NORMAL", "FERALIGATR">;

export type PokemonSettingsSentret = PokemonSettingsShared304<"V0161_POKEMON_SENTRET", "SENTRET">;
export type PokemonSettingsSlugma = PokemonSettingsShared304<"V0218_POKEMON_SLUGMA", "SLUGMA">;
export type PokemonSettingsTyrogue = PokemonSettingsShared304<"V0236_POKEMON_TYROGUE", "TYROGUE">;

export type PokemonSettingsSentretNormal = PokemonSettingsShared305<"V0161_POKEMON_SENTRET_NORMAL", "SENTRET_NORMAL", "SENTRET">;
export type PokemonSettingsSlugmaNormal = PokemonSettingsShared305<"V0218_POKEMON_SLUGMA_NORMAL", "SLUGMA_NORMAL", "SLUGMA">;
export type PokemonSettingsTyrogueNormal = PokemonSettingsShared305<"V0236_POKEMON_TYROGUE_NORMAL", "TYROGUE_NORMAL", "TYROGUE">;

export type PokemonSettingsFurret = PokemonSettingsShared306<"V0162_POKEMON_FURRET", "FURRET">;
export type PokemonSettingsSunflora = PokemonSettingsShared306<"V0192_POKEMON_SUNFLORA", "SUNFLORA">;
export type PokemonSettingsOctillery = PokemonSettingsShared306<"V0224_POKEMON_OCTILLERY", "OCTILLERY">;

export type PokemonSettingsFurretNormal = PokemonSettingsShared307<"V0162_POKEMON_FURRET_NORMAL", "FURRET_NORMAL", "FURRET">;
export type PokemonSettingsSunfloraNormal = PokemonSettingsShared307<"V0192_POKEMON_SUNFLORA_NORMAL", "SUNFLORA_NORMAL", "SUNFLORA">;
export type PokemonSettingsOctilleryNormal = PokemonSettingsShared307<"V0224_POKEMON_OCTILLERY_NORMAL", "OCTILLERY_NORMAL", "OCTILLERY">;

export type PokemonSettingsLedybaNormal = PokemonSettingsShared313<"V0165_POKEMON_LEDYBA_NORMAL", "LEDYBA_NORMAL", "LEDYBA">;
export type PokemonSettingsHoppipNormal = PokemonSettingsShared313<"V0187_POKEMON_HOPPIP_NORMAL", "HOPPIP_NORMAL", "HOPPIP">;

export type PokemonSettingsLedian = PokemonSettingsShared314<"V0166_POKEMON_LEDIAN", "LEDIAN">;
export type PokemonSettingsXatu = PokemonSettingsShared314<"V0178_POKEMON_XATU", "XATU">;

export type PokemonSettingsLedianNormal = PokemonSettingsShared315<"V0166_POKEMON_LEDIAN_NORMAL", "LEDIAN_NORMAL", "LEDIAN">;
export type PokemonSettingsXatuNormal = PokemonSettingsShared315<"V0178_POKEMON_XATU_NORMAL", "XATU_NORMAL", "XATU">;

export type PokemonSettingsAriados = PokemonSettingsShared318<"V0168_POKEMON_ARIADOS", "ARIADOS">;
export type PokemonSettingsAzumarill = PokemonSettingsShared318<"V0184_POKEMON_AZUMARILL", "AZUMARILL">;
export type PokemonSettingsMagcargo = PokemonSettingsShared318<"V0219_POKEMON_MAGCARGO", "MAGCARGO">;

export type PokemonSettingsAriadosNormal = PokemonSettingsShared69<"V0168_POKEMON_ARIADOS_NORMAL", "ARIADOS_NORMAL", "ARIADOS">;
export type PokemonSettingsAzumarillNormal = PokemonSettingsShared69<"V0184_POKEMON_AZUMARILL_NORMAL", "AZUMARILL_NORMAL", "AZUMARILL">;
export type PokemonSettingsMagcargoNormal = PokemonSettingsShared69<"V0219_POKEMON_MAGCARGO_NORMAL", "MAGCARGO_NORMAL", "MAGCARGO">;

export type PokemonSettingsCleffa = PokemonSettingsShared327<"V0173_POKEMON_CLEFFA", "CLEFFA">;
export type PokemonSettingsElekid = PokemonSettingsShared327<"V0239_POKEMON_ELEKID", "ELEKID">;
export type PokemonSettingsMagby = PokemonSettingsShared327<"V0240_POKEMON_MAGBY", "MAGBY">;

export type PokemonSettingsCleffaNormal = PokemonSettingsShared328<"V0173_POKEMON_CLEFFA_NORMAL", "CLEFFA_NORMAL", "CLEFFA">;
export type PokemonSettingsElekidNormal = PokemonSettingsShared328<"V0239_POKEMON_ELEKID_NORMAL", "ELEKID_NORMAL", "ELEKID">;
export type PokemonSettingsMagbyNormal = PokemonSettingsShared328<"V0240_POKEMON_MAGBY_NORMAL", "MAGBY_NORMAL", "MAGBY">;

export type PokemonSettingsBellossom = PokemonSettingsShared43<"V0182_POKEMON_BELLOSSOM", "BELLOSSOM">;

export type PokemonSettingsBellossomNormal = PokemonSettingsShared45<"V0182_POKEMON_BELLOSSOM_NORMAL", "BELLOSSOM_NORMAL", "BELLOSSOM">;

export type PokemonSettingsNormal = PokemonSettingsShared346<"V0185_POKEMON_SUDOWOODO_NORMAL", "SUDOWOODO_NORMAL">;
export type PokemonSettingsWinterT = PokemonSettingsShared346<"V0185_POKEMON_SUDOWOODO_WINTER_2025", "SUDOWOODO_WINTER_2025">;

export type PokemonSettingsPolitoed = PokemonSettingsShared71<"V0186_POKEMON_POLITOED", "POLITOED">;

export type PokemonSettingsPolitoedNormal = PokemonSettingsShared73<"V0186_POKEMON_POLITOED_NORMAL", "POLITOED_NORMAL", "POLITOED">;

export type PokemonSettingsWooper = PokemonSettingsShared97<"V0194_POKEMON_WOOPER", "WOOPER">;
export type PokemonSettingsSwinub = PokemonSettingsShared97<"V0220_POKEMON_SWINUB", "SWINUB">;

export type PokemonSettingsWooperNormal = PokemonSettingsShared41<"V0194_POKEMON_WOOPER_NORMAL", "WOOPER_NORMAL", "WOOPER">;
export type PokemonSettingsSwinubNormal = PokemonSettingsShared41<"V0220_POKEMON_SWINUB_NORMAL", "SWINUB_NORMAL", "SWINUB">;

export type PokemonSettingsQuagsireNormal = PokemonSettingsShared87<"V0195_POKEMON_QUAGSIRE_NORMAL", "QUAGSIRE_NORMAL", "QUAGSIRE">;

export type PokemonSettingsEspeon = PokemonSettingsShared68<"V0196_POKEMON_ESPEON", "ESPEON">;

export type PokemonSettingsEspeonGofestTSscarf = PokemonSettingsShared70<"V0196_POKEMON_ESPEON_GOFEST_2024_SSCARF", "ESPEON_GOFEST_2024_SSCARF", "ESPEON">;
export type PokemonSettingsEspeonNormal = PokemonSettingsShared70<"V0196_POKEMON_ESPEON_NORMAL", "ESPEON_NORMAL", "ESPEON">;

export type PokemonSettingsGofestTMscarf = PokemonSettingsShared361<"V0197_POKEMON_UMBREON_GOFEST_2024_MSCARF", "UMBREON_GOFEST_2024_MSCARF">;
export type PokemonSettingsNormal2 = PokemonSettingsShared361<"V0197_POKEMON_UMBREON_NORMAL", "UMBREON_NORMAL">;

export type PokemonSettingsUnown = PokemonSettingsShared370<"V0201_POKEMON_UNOWN", "UNOWN">;

export type PokemonSettingsUnownA = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_A", "UNOWN_A", "UNOWN">;
export type PokemonSettingsUnownB = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_B", "UNOWN_B", "UNOWN">;
export type PokemonSettingsUnownC = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_C", "UNOWN_C", "UNOWN">;
export type PokemonSettingsUnownD = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_D", "UNOWN_D", "UNOWN">;
export type PokemonSettingsUnownE = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_E", "UNOWN_E", "UNOWN">;
export type PokemonSettingsUnownExclamationPoint = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_EXCLAMATION_POINT", "UNOWN_EXCLAMATION_POINT", "UNOWN">;
export type PokemonSettingsUnownF = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_F", "UNOWN_F", "UNOWN">;
export type PokemonSettingsUnownG = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_G", "UNOWN_G", "UNOWN">;
export type PokemonSettingsUnownH = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_H", "UNOWN_H", "UNOWN">;
export type PokemonSettingsUnownI = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_I", "UNOWN_I", "UNOWN">;
export type PokemonSettingsUnownJ = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_J", "UNOWN_J", "UNOWN">;
export type PokemonSettingsUnownL = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_L", "UNOWN_L", "UNOWN">;
export type PokemonSettingsUnownM = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_M", "UNOWN_M", "UNOWN">;
export type PokemonSettingsUnownN = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_N", "UNOWN_N", "UNOWN">;
export type PokemonSettingsUnownO = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_O", "UNOWN_O", "UNOWN">;
export type PokemonSettingsUnownP = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_P", "UNOWN_P", "UNOWN">;
export type PokemonSettingsUnownQ = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_Q", "UNOWN_Q", "UNOWN">;
export type PokemonSettingsUnownQuestionMark = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_QUESTION_MARK", "UNOWN_QUESTION_MARK", "UNOWN">;
export type PokemonSettingsUnownR = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_R", "UNOWN_R", "UNOWN">;
export type PokemonSettingsUnownS = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_S", "UNOWN_S", "UNOWN">;
export type PokemonSettingsUnownU = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_U", "UNOWN_U", "UNOWN">;
export type PokemonSettingsUnownW = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_W", "UNOWN_W", "UNOWN">;
export type PokemonSettingsUnownX = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_X", "UNOWN_X", "UNOWN">;
export type PokemonSettingsUnownY = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_Y", "UNOWN_Y", "UNOWN">;
export type PokemonSettingsUnownZ = PokemonSettingsShared371<"V0201_POKEMON_UNOWN_Z", "UNOWN_Z", "UNOWN">;

export type PokemonSettingsK = PokemonSettingsShared372<"V0201_POKEMON_UNOWN_K", "UNOWN_K">;
export type PokemonSettingsT = PokemonSettingsShared372<"V0201_POKEMON_UNOWN_T", "UNOWN_T">;
export type PokemonSettingsV = PokemonSettingsShared372<"V0201_POKEMON_UNOWN_V", "UNOWN_V">;

export type PokemonSettingsPineco = PokemonSettingsShared40<"V0204_POKEMON_PINECO">;
export type PokemonSettingsSnubbull = PokemonSettingsShared40<"V0209_POKEMON_SNUBBULL">;
export type PokemonSettingsTeddiursa = PokemonSettingsShared40<"V0216_POKEMON_TEDDIURSA">;

export type PokemonSettingsPinecoNormal = PokemonSettingsShared42<"V0204_POKEMON_PINECO_NORMAL", "PINECO_NORMAL">;
export type PokemonSettingsSnubbullNormal = PokemonSettingsShared42<"V0209_POKEMON_SNUBBULL_NORMAL", "SNUBBULL_NORMAL">;
export type PokemonSettingsTeddiursaNormal = PokemonSettingsShared42<"V0216_POKEMON_TEDDIURSA_NORMAL", "TEDDIURSA_NORMAL">;
export type PokemonSettingsPhanpyNormal = PokemonSettingsShared42<"V0231_POKEMON_PHANPY_NORMAL", "PHANPY_NORMAL">;

export type PokemonSettingsForretress = PokemonSettingsShared148<"V0205_POKEMON_FORRETRESS", "FORRETRESS">;

export type PokemonSettingsForretressNormal = PokemonSettingsShared149<"V0205_POKEMON_FORRETRESS_NORMAL", "FORRETRESS_NORMAL", "FORRETRESS">;

export type PokemonSettingsGranbull = PokemonSettingsShared52<"V0210_POKEMON_GRANBULL", "GRANBULL">;
export type PokemonSettingsDonphan = PokemonSettingsShared52<"V0232_POKEMON_DONPHAN", "DONPHAN">;

export type PokemonSettingsGranbullNormal = PokemonSettingsShared53<"V0210_POKEMON_GRANBULL_NORMAL", "GRANBULL_NORMAL", "GRANBULL">;
export type PokemonSettingsDonphanNormal = PokemonSettingsShared53<"V0232_POKEMON_DONPHAN_NORMAL", "DONPHAN_NORMAL", "DONPHAN">;

export type PokemonSettingsRemoraid = PokemonSettingsShared234<"V0223_POKEMON_REMORAID", "REMORAID">;

export type PokemonSettingsRemoraidNormal = PokemonSettingsShared235<"V0223_POKEMON_REMORAID_NORMAL", "REMORAID_NORMAL", "REMORAID">;

export type PokemonSettingsHoundour = PokemonSettingsShared140<"V0228_POKEMON_HOUNDOUR", "HOUNDOUR">;
export type PokemonSettingsLarvitar = PokemonSettingsShared140<"V0246_POKEMON_LARVITAR", "LARVITAR">;

export type PokemonSettingsHoundourNormal = PokemonSettingsShared141<"V0228_POKEMON_HOUNDOUR_NORMAL", "HOUNDOUR_NORMAL", "HOUNDOUR">;
export type PokemonSettingsLarvitarNormal = PokemonSettingsShared141<"V0246_POKEMON_LARVITAR_NORMAL", "LARVITAR_NORMAL", "LARVITAR">;

export type PokemonSettingsMiltank = PokemonSettingsShared251<"V0241_POKEMON_MILTANK", "MILTANK">;

export type PokemonSettingsMiltankNormal = PokemonSettingsShared252<"V0241_POKEMON_MILTANK_NORMAL", "MILTANK_NORMAL", "MILTANK">;

export type PokemonSettingsRaikou = PokemonSettingsShared426<"V0243_POKEMON_RAIKOU", "RAIKOU">;
export type PokemonSettingsEntei = PokemonSettingsShared426<"V0244_POKEMON_ENTEI", "ENTEI">;

export type PokemonSettingsRaikouNormal = PokemonSettingsShared427<"V0243_POKEMON_RAIKOU_NORMAL", "RAIKOU_NORMAL", "RAIKOU">;
export type PokemonSettingsRaikouS = PokemonSettingsShared427<"V0243_POKEMON_RAIKOU_S", "RAIKOU_S", "RAIKOU">;
export type PokemonSettingsEnteiNormal = PokemonSettingsShared427<"V0244_POKEMON_ENTEI_NORMAL", "ENTEI_NORMAL", "ENTEI">;
export type PokemonSettingsEnteiS = PokemonSettingsShared427<"V0244_POKEMON_ENTEI_S", "ENTEI_S", "ENTEI">;

export type PokemonSettingsNormal3 = PokemonSettingsShared429<"V0245_POKEMON_SUICUNE_NORMAL", "SUICUNE_NORMAL">;
export type PokemonSettingsS = PokemonSettingsShared429<"V0245_POKEMON_SUICUNE_S", "SUICUNE_S">;

export type PokemonSettingsLugia = PokemonSettingsShared277<"V0249_POKEMON_LUGIA", "LUGIA">;
export type PokemonSettingsHoOh = PokemonSettingsShared277<"V0250_POKEMON_HO_OH", "HO_OH">;

export type PokemonSettingsLugiaNormal = PokemonSettingsShared279<"V0249_POKEMON_LUGIA_NORMAL", "LUGIA_NORMAL", "LUGIA">;
export type PokemonSettingsHoOhNormal = PokemonSettingsShared279<"V0250_POKEMON_HO_OH_NORMAL", "HO_OH_NORMAL", "HO_OH">;

export type PokemonSettingsLugiaS = PokemonSettingsShared434<"V0249_POKEMON_LUGIA_S", "LUGIA_S", "LUGIA">;
export type PokemonSettingsHoOhS = PokemonSettingsShared434<"V0250_POKEMON_HO_OH_S", "HO_OH_S", "HO_OH">;

export interface PokemonSettingsGen2MasterfileByTemplateId {
  "V0152_POKEMON_CHIKORITA": PokemonSettingsChikorita;
  "V0158_POKEMON_TOTODILE": PokemonSettingsTotodile;
  "V0231_POKEMON_PHANPY": PokemonSettingsPhanpy;
  "V0152_POKEMON_CHIKORITA_NORMAL": PokemonSettingsChikoritaNormal;
  "V0158_POKEMON_TOTODILE_NORMAL": PokemonSettingsTotodileNormal;
  "V0153_POKEMON_BAYLEEF": PokemonSettingsBayleef;
  "V0156_POKEMON_QUILAVA": PokemonSettingsQuilava;
  "V0153_POKEMON_BAYLEEF_NORMAL": PokemonSettingsBayleefNormal;
  "V0156_POKEMON_QUILAVA_NORMAL": PokemonSettingsQuilavaNormal;
  "V0154_POKEMON_MEGANIUM": PokemonSettingsMeganium;
  "V0154_POKEMON_MEGANIUM_NORMAL": PokemonSettingsMeganiumNormal;
  "V0155_POKEMON_CYNDAQUIL": V0155_pokemon_cyndaquilEntry;
  "V0155_POKEMON_CYNDAQUIL_NORMAL": V0155_pokemon_cyndaquil_normalEntry;
  "V0157_POKEMON_TYPHLOSION": V0157_pokemon_typhlosionEntry;
  "V0157_POKEMON_TYPHLOSION_HISUIAN": V0157_pokemon_typhlosion_hisuianEntry;
  "V0157_POKEMON_TYPHLOSION_NORMAL": V0157_pokemon_typhlosion_normalEntry;
  "V0159_POKEMON_CROCONAW": V0159_pokemon_croconawEntry;
  "V0159_POKEMON_CROCONAW_NORMAL": V0159_pokemon_croconaw_normalEntry;
  "V0160_POKEMON_FERALIGATR": PokemonSettingsFeraligatr;
  "V0160_POKEMON_FERALIGATR_NORMAL": PokemonSettingsFeraligatrNormal;
  "V0161_POKEMON_SENTRET": PokemonSettingsSentret;
  "V0218_POKEMON_SLUGMA": PokemonSettingsSlugma;
  "V0236_POKEMON_TYROGUE": PokemonSettingsTyrogue;
  "V0161_POKEMON_SENTRET_NORMAL": PokemonSettingsSentretNormal;
  "V0218_POKEMON_SLUGMA_NORMAL": PokemonSettingsSlugmaNormal;
  "V0236_POKEMON_TYROGUE_NORMAL": PokemonSettingsTyrogueNormal;
  "V0162_POKEMON_FURRET": PokemonSettingsFurret;
  "V0192_POKEMON_SUNFLORA": PokemonSettingsSunflora;
  "V0224_POKEMON_OCTILLERY": PokemonSettingsOctillery;
  "V0162_POKEMON_FURRET_NORMAL": PokemonSettingsFurretNormal;
  "V0192_POKEMON_SUNFLORA_NORMAL": PokemonSettingsSunfloraNormal;
  "V0224_POKEMON_OCTILLERY_NORMAL": PokemonSettingsOctilleryNormal;
  "V0163_POKEMON_HOOTHOOT": V0163_pokemon_hoothootEntry;
  "V0163_POKEMON_HOOTHOOT_NORMAL": V0163_pokemon_hoothoot_normalEntry;
  "V0164_POKEMON_NOCTOWL": V0164_pokemon_noctowlEntry;
  "V0164_POKEMON_NOCTOWL_NORMAL": V0164_pokemon_noctowl_normalEntry;
  "V0165_POKEMON_LEDYBA": V0165_pokemon_ledybaEntry;
  "V0165_POKEMON_LEDYBA_NORMAL": PokemonSettingsLedybaNormal;
  "V0187_POKEMON_HOPPIP_NORMAL": PokemonSettingsHoppipNormal;
  "V0166_POKEMON_LEDIAN": PokemonSettingsLedian;
  "V0178_POKEMON_XATU": PokemonSettingsXatu;
  "V0166_POKEMON_LEDIAN_NORMAL": PokemonSettingsLedianNormal;
  "V0178_POKEMON_XATU_NORMAL": PokemonSettingsXatuNormal;
  "V0167_POKEMON_SPINARAK": V0167_pokemon_spinarakEntry;
  "V0167_POKEMON_SPINARAK_NORMAL": V0167_pokemon_spinarak_normalEntry;
  "V0168_POKEMON_ARIADOS": PokemonSettingsAriados;
  "V0184_POKEMON_AZUMARILL": PokemonSettingsAzumarill;
  "V0219_POKEMON_MAGCARGO": PokemonSettingsMagcargo;
  "V0168_POKEMON_ARIADOS_NORMAL": PokemonSettingsAriadosNormal;
  "V0184_POKEMON_AZUMARILL_NORMAL": PokemonSettingsAzumarillNormal;
  "V0219_POKEMON_MAGCARGO_NORMAL": PokemonSettingsMagcargoNormal;
  "V0169_POKEMON_CROBAT": V0169_pokemon_crobatEntry;
  "V0169_POKEMON_CROBAT_NORMAL": V0169_pokemon_crobat_normalEntry;
  "V0170_POKEMON_CHINCHOU": V0170_pokemon_chinchouEntry;
  "V0170_POKEMON_CHINCHOU_NORMAL": V0170_pokemon_chinchou_normalEntry;
  "V0171_POKEMON_LANTURN": V0171_pokemon_lanturnEntry;
  "V0171_POKEMON_LANTURN_NORMAL": V0171_pokemon_lanturn_normalEntry;
  "V0172_POKEMON_PICHU": V0172_pokemon_pichuEntry;
  "V0172_POKEMON_PICHU_NORMAL": V0172_pokemon_pichu_normalEntry;
  "V0173_POKEMON_CLEFFA": PokemonSettingsCleffa;
  "V0239_POKEMON_ELEKID": PokemonSettingsElekid;
  "V0240_POKEMON_MAGBY": PokemonSettingsMagby;
  "V0173_POKEMON_CLEFFA_NORMAL": PokemonSettingsCleffaNormal;
  "V0239_POKEMON_ELEKID_NORMAL": PokemonSettingsElekidNormal;
  "V0240_POKEMON_MAGBY_NORMAL": PokemonSettingsMagbyNormal;
  "V0174_POKEMON_IGGLYBUFF": V0174_pokemon_igglybuffEntry;
  "V0174_POKEMON_IGGLYBUFF_NORMAL": V0174_pokemon_igglybuff_normalEntry;
  "V0175_POKEMON_TOGEPI": V0175_pokemon_togepiEntry;
  "V0175_POKEMON_TOGEPI_NORMAL": V0175_pokemon_togepi_normalEntry;
  "V0176_POKEMON_TOGETIC": V0176_pokemon_togeticEntry;
  "V0176_POKEMON_TOGETIC_NORMAL": V0176_pokemon_togetic_normalEntry;
  "V0177_POKEMON_NATU": V0177_pokemon_natuEntry;
  "V0177_POKEMON_NATU_NORMAL": V0177_pokemon_natu_normalEntry;
  "V0179_POKEMON_MAREEP": V0179_pokemon_mareepEntry;
  "V0179_POKEMON_MAREEP_NORMAL": V0179_pokemon_mareep_normalEntry;
  "V0180_POKEMON_FLAAFFY": V0180_pokemon_flaaffyEntry;
  "V0180_POKEMON_FLAAFFY_NORMAL": V0180_pokemon_flaaffy_normalEntry;
  "V0181_POKEMON_AMPHAROS": V0181_pokemon_ampharosEntry;
  "V0181_POKEMON_AMPHAROS_NORMAL": V0181_pokemon_ampharos_normalEntry;
  "V0182_POKEMON_BELLOSSOM": PokemonSettingsBellossom;
  "V0182_POKEMON_BELLOSSOM_NORMAL": PokemonSettingsBellossomNormal;
  "V0183_POKEMON_MARILL": V0183_pokemon_marillEntry;
  "V0183_POKEMON_MARILL_NORMAL": V0183_pokemon_marill_normalEntry;
  "V0185_POKEMON_SUDOWOODO": V0185_pokemon_sudowoodoEntry;
  "V0185_POKEMON_SUDOWOODO_NORMAL": PokemonSettingsNormal;
  "V0185_POKEMON_SUDOWOODO_WINTER_2025": PokemonSettingsWinterT;
  "V0186_POKEMON_POLITOED": PokemonSettingsPolitoed;
  "V0186_POKEMON_POLITOED_NORMAL": PokemonSettingsPolitoedNormal;
  "V0187_POKEMON_HOPPIP": V0187_pokemon_hoppipEntry;
  "V0188_POKEMON_SKIPLOOM": V0188_pokemon_skiploomEntry;
  "V0188_POKEMON_SKIPLOOM_NORMAL": V0188_pokemon_skiploom_normalEntry;
  "V0189_POKEMON_JUMPLUFF": V0189_pokemon_jumpluffEntry;
  "V0189_POKEMON_JUMPLUFF_NORMAL": V0189_pokemon_jumpluff_normalEntry;
  "V0190_POKEMON_AIPOM": V0190_pokemon_aipomEntry;
  "V0190_POKEMON_AIPOM_NORMAL": V0190_pokemon_aipom_normalEntry;
  "V0191_POKEMON_SUNKERN": V0191_pokemon_sunkernEntry;
  "V0191_POKEMON_SUNKERN_NORMAL": V0191_pokemon_sunkern_normalEntry;
  "V0193_POKEMON_YANMA": V0193_pokemon_yanmaEntry;
  "V0193_POKEMON_YANMA_NORMAL": V0193_pokemon_yanma_normalEntry;
  "V0194_POKEMON_WOOPER": PokemonSettingsWooper;
  "V0220_POKEMON_SWINUB": PokemonSettingsSwinub;
  "V0194_POKEMON_WOOPER_NORMAL": PokemonSettingsWooperNormal;
  "V0220_POKEMON_SWINUB_NORMAL": PokemonSettingsSwinubNormal;
  "V0194_POKEMON_WOOPER_PALDEA": V0194_pokemon_wooper_paldeaEntry;
  "V0195_POKEMON_QUAGSIRE": V0195_pokemon_quagsireEntry;
  "V0195_POKEMON_QUAGSIRE_NORMAL": PokemonSettingsQuagsireNormal;
  "V0196_POKEMON_ESPEON": PokemonSettingsEspeon;
  "V0196_POKEMON_ESPEON_GOFEST_2024_SSCARF": PokemonSettingsEspeonGofestTSscarf;
  "V0196_POKEMON_ESPEON_NORMAL": PokemonSettingsEspeonNormal;
  "V0197_POKEMON_UMBREON": V0197_pokemon_umbreonEntry;
  "V0197_POKEMON_UMBREON_GOFEST_2024_MSCARF": PokemonSettingsGofestTMscarf;
  "V0197_POKEMON_UMBREON_NORMAL": PokemonSettingsNormal2;
  "V0198_POKEMON_MURKROW": V0198_pokemon_murkrowEntry;
  "V0198_POKEMON_MURKROW_NORMAL": V0198_pokemon_murkrow_normalEntry;
  "V0199_POKEMON_SLOWKING": V0199_pokemon_slowkingEntry;
  "V0199_POKEMON_SLOWKING_2022": V0199_pokemon_slowking_2022Entry;
  "V0199_POKEMON_SLOWKING_GALARIAN": V0199_pokemon_slowking_galarianEntry;
  "V0199_POKEMON_SLOWKING_NORMAL": V0199_pokemon_slowking_normalEntry;
  "V0200_POKEMON_MISDREAVUS": V0200_pokemon_misdreavusEntry;
  "V0200_POKEMON_MISDREAVUS_NORMAL": V0200_pokemon_misdreavus_normalEntry;
  "V0201_POKEMON_UNOWN": PokemonSettingsUnown;
  "V0201_POKEMON_UNOWN_A": PokemonSettingsUnownA;
  "V0201_POKEMON_UNOWN_B": PokemonSettingsUnownB;
  "V0201_POKEMON_UNOWN_C": PokemonSettingsUnownC;
  "V0201_POKEMON_UNOWN_D": PokemonSettingsUnownD;
  "V0201_POKEMON_UNOWN_E": PokemonSettingsUnownE;
  "V0201_POKEMON_UNOWN_EXCLAMATION_POINT": PokemonSettingsUnownExclamationPoint;
  "V0201_POKEMON_UNOWN_F": PokemonSettingsUnownF;
  "V0201_POKEMON_UNOWN_G": PokemonSettingsUnownG;
  "V0201_POKEMON_UNOWN_H": PokemonSettingsUnownH;
  "V0201_POKEMON_UNOWN_I": PokemonSettingsUnownI;
  "V0201_POKEMON_UNOWN_J": PokemonSettingsUnownJ;
  "V0201_POKEMON_UNOWN_L": PokemonSettingsUnownL;
  "V0201_POKEMON_UNOWN_M": PokemonSettingsUnownM;
  "V0201_POKEMON_UNOWN_N": PokemonSettingsUnownN;
  "V0201_POKEMON_UNOWN_O": PokemonSettingsUnownO;
  "V0201_POKEMON_UNOWN_P": PokemonSettingsUnownP;
  "V0201_POKEMON_UNOWN_Q": PokemonSettingsUnownQ;
  "V0201_POKEMON_UNOWN_QUESTION_MARK": PokemonSettingsUnownQuestionMark;
  "V0201_POKEMON_UNOWN_R": PokemonSettingsUnownR;
  "V0201_POKEMON_UNOWN_S": PokemonSettingsUnownS;
  "V0201_POKEMON_UNOWN_U": PokemonSettingsUnownU;
  "V0201_POKEMON_UNOWN_W": PokemonSettingsUnownW;
  "V0201_POKEMON_UNOWN_X": PokemonSettingsUnownX;
  "V0201_POKEMON_UNOWN_Y": PokemonSettingsUnownY;
  "V0201_POKEMON_UNOWN_Z": PokemonSettingsUnownZ;
  "V0201_POKEMON_UNOWN_K": PokemonSettingsK;
  "V0201_POKEMON_UNOWN_T": PokemonSettingsT;
  "V0201_POKEMON_UNOWN_V": PokemonSettingsV;
  "V0202_POKEMON_WOBBUFFET": V0202_pokemon_wobbuffetEntry;
  "V0202_POKEMON_WOBBUFFET_NORMAL": V0202_pokemon_wobbuffet_normalEntry;
  "V0203_POKEMON_GIRAFARIG": V0203_pokemon_girafarigEntry;
  "V0203_POKEMON_GIRAFARIG_NORMAL": V0203_pokemon_girafarig_normalEntry;
  "V0204_POKEMON_PINECO": PokemonSettingsPineco;
  "V0209_POKEMON_SNUBBULL": PokemonSettingsSnubbull;
  "V0216_POKEMON_TEDDIURSA": PokemonSettingsTeddiursa;
  "V0204_POKEMON_PINECO_NORMAL": PokemonSettingsPinecoNormal;
  "V0209_POKEMON_SNUBBULL_NORMAL": PokemonSettingsSnubbullNormal;
  "V0216_POKEMON_TEDDIURSA_NORMAL": PokemonSettingsTeddiursaNormal;
  "V0231_POKEMON_PHANPY_NORMAL": PokemonSettingsPhanpyNormal;
  "V0205_POKEMON_FORRETRESS": PokemonSettingsForretress;
  "V0205_POKEMON_FORRETRESS_NORMAL": PokemonSettingsForretressNormal;
  "V0206_POKEMON_DUNSPARCE": V0206_pokemon_dunsparceEntry;
  "V0206_POKEMON_DUNSPARCE_NORMAL": V0206_pokemon_dunsparce_normalEntry;
  "V0207_POKEMON_GLIGAR": V0207_pokemon_gligarEntry;
  "V0207_POKEMON_GLIGAR_NORMAL": V0207_pokemon_gligar_normalEntry;
  "V0208_POKEMON_STEELIX": V0208_pokemon_steelixEntry;
  "V0208_POKEMON_STEELIX_NORMAL": V0208_pokemon_steelix_normalEntry;
  "V0210_POKEMON_GRANBULL": PokemonSettingsGranbull;
  "V0232_POKEMON_DONPHAN": PokemonSettingsDonphan;
  "V0210_POKEMON_GRANBULL_NORMAL": PokemonSettingsGranbullNormal;
  "V0232_POKEMON_DONPHAN_NORMAL": PokemonSettingsDonphanNormal;
  "V0211_POKEMON_QWILFISH": V0211_pokemon_qwilfishEntry;
  "V0211_POKEMON_QWILFISH_HISUIAN": V0211_pokemon_qwilfish_hisuianEntry;
  "V0211_POKEMON_QWILFISH_NORMAL": V0211_pokemon_qwilfish_normalEntry;
  "V0212_POKEMON_SCIZOR": V0212_pokemon_scizorEntry;
  "V0212_POKEMON_SCIZOR_NORMAL": V0212_pokemon_scizor_normalEntry;
  "V0213_POKEMON_SHUCKLE": V0213_pokemon_shuckleEntry;
  "V0213_POKEMON_SHUCKLE_NORMAL": V0213_pokemon_shuckle_normalEntry;
  "V0214_POKEMON_HERACROSS": V0214_pokemon_heracrossEntry;
  "V0214_POKEMON_HERACROSS_NORMAL": V0214_pokemon_heracross_normalEntry;
  "V0215_POKEMON_SNEASEL": V0215_pokemon_sneaselEntry;
  "V0215_POKEMON_SNEASEL_HISUIAN": V0215_pokemon_sneasel_hisuianEntry;
  "V0215_POKEMON_SNEASEL_NORMAL": V0215_pokemon_sneasel_normalEntry;
  "V0217_POKEMON_URSARING": V0217_pokemon_ursaringEntry;
  "V0217_POKEMON_URSARING_NORMAL": V0217_pokemon_ursaring_normalEntry;
  "V0221_POKEMON_PILOSWINE": V0221_pokemon_piloswineEntry;
  "V0221_POKEMON_PILOSWINE_NORMAL": V0221_pokemon_piloswine_normalEntry;
  "V0222_POKEMON_CORSOLA": V0222_pokemon_corsolaEntry;
  "V0222_POKEMON_CORSOLA_GALARIAN": V0222_pokemon_corsola_galarianEntry;
  "V0222_POKEMON_CORSOLA_NORMAL": V0222_pokemon_corsola_normalEntry;
  "V0222_POKEMON_CORSOLA_SPRING_2026": V0222_pokemon_corsola_spring_2026Entry;
  "V0223_POKEMON_REMORAID": PokemonSettingsRemoraid;
  "V0223_POKEMON_REMORAID_NORMAL": PokemonSettingsRemoraidNormal;
  "V0225_POKEMON_DELIBIRD": V0225_pokemon_delibirdEntry;
  "V0225_POKEMON_DELIBIRD_NORMAL": V0225_pokemon_delibird_normalEntry;
  "V0225_POKEMON_DELIBIRD_WINTER_2020": V0225_pokemon_delibird_winter_2020Entry;
  "V0226_POKEMON_MANTINE": V0226_pokemon_mantineEntry;
  "V0226_POKEMON_MANTINE_NORMAL": V0226_pokemon_mantine_normalEntry;
  "V0227_POKEMON_SKARMORY": V0227_pokemon_skarmoryEntry;
  "V0227_POKEMON_SKARMORY_NORMAL": V0227_pokemon_skarmory_normalEntry;
  "V0228_POKEMON_HOUNDOUR": PokemonSettingsHoundour;
  "V0246_POKEMON_LARVITAR": PokemonSettingsLarvitar;
  "V0228_POKEMON_HOUNDOUR_NORMAL": PokemonSettingsHoundourNormal;
  "V0246_POKEMON_LARVITAR_NORMAL": PokemonSettingsLarvitarNormal;
  "V0229_POKEMON_HOUNDOOM": V0229_pokemon_houndoomEntry;
  "V0229_POKEMON_HOUNDOOM_NORMAL": V0229_pokemon_houndoom_normalEntry;
  "V0230_POKEMON_KINGDRA": V0230_pokemon_kingdraEntry;
  "V0230_POKEMON_KINGDRA_NORMAL": V0230_pokemon_kingdra_normalEntry;
  "V0233_POKEMON_PORYGON2": V0233_pokemon_porygon2Entry;
  "V0233_POKEMON_PORYGON2_NORMAL": V0233_pokemon_porygon2_normalEntry;
  "V0234_POKEMON_STANTLER": V0234_pokemon_stantlerEntry;
  "V0234_POKEMON_STANTLER_NORMAL": V0234_pokemon_stantler_normalEntry;
  "V0235_POKEMON_SMEARGLE": V0235_pokemon_smeargleEntry;
  "V0235_POKEMON_SMEARGLE_NORMAL": V0235_pokemon_smeargle_normalEntry;
  "V0237_POKEMON_HITMONTOP": V0237_pokemon_hitmontopEntry;
  "V0237_POKEMON_HITMONTOP_NORMAL": V0237_pokemon_hitmontop_normalEntry;
  "V0238_POKEMON_SMOOCHUM": V0238_pokemon_smoochumEntry;
  "V0238_POKEMON_SMOOCHUM_NORMAL": V0238_pokemon_smoochum_normalEntry;
  "V0241_POKEMON_MILTANK": PokemonSettingsMiltank;
  "V0241_POKEMON_MILTANK_NORMAL": PokemonSettingsMiltankNormal;
  "V0242_POKEMON_BLISSEY": V0242_pokemon_blisseyEntry;
  "V0242_POKEMON_BLISSEY_NORMAL": V0242_pokemon_blissey_normalEntry;
  "V0243_POKEMON_RAIKOU": PokemonSettingsRaikou;
  "V0244_POKEMON_ENTEI": PokemonSettingsEntei;
  "V0243_POKEMON_RAIKOU_NORMAL": PokemonSettingsRaikouNormal;
  "V0243_POKEMON_RAIKOU_S": PokemonSettingsRaikouS;
  "V0244_POKEMON_ENTEI_NORMAL": PokemonSettingsEnteiNormal;
  "V0244_POKEMON_ENTEI_S": PokemonSettingsEnteiS;
  "V0245_POKEMON_SUICUNE": V0245_pokemon_suicuneEntry;
  "V0245_POKEMON_SUICUNE_NORMAL": PokemonSettingsNormal3;
  "V0245_POKEMON_SUICUNE_S": PokemonSettingsS;
  "V0247_POKEMON_PUPITAR": V0247_pokemon_pupitarEntry;
  "V0247_POKEMON_PUPITAR_NORMAL": V0247_pokemon_pupitar_normalEntry;
  "V0248_POKEMON_TYRANITAR": V0248_pokemon_tyranitarEntry;
  "V0248_POKEMON_TYRANITAR_NORMAL": V0248_pokemon_tyranitar_normalEntry;
  "V0249_POKEMON_LUGIA": PokemonSettingsLugia;
  "V0250_POKEMON_HO_OH": PokemonSettingsHoOh;
  "V0249_POKEMON_LUGIA_NORMAL": PokemonSettingsLugiaNormal;
  "V0250_POKEMON_HO_OH_NORMAL": PokemonSettingsHoOhNormal;
  "V0249_POKEMON_LUGIA_S": PokemonSettingsLugiaS;
  "V0250_POKEMON_HO_OH_S": PokemonSettingsHoOhS;
  "V0251_POKEMON_CELEBI": V0251_pokemon_celebiEntry;
  "V0251_POKEMON_CELEBI_NORMAL": V0251_pokemon_celebi_normalEntry;
}

export interface PokemonSettingsGen2ByDexId {
  "0152": PokemonSettingsChikorita | PokemonSettingsChikoritaNormal;
  "0153": PokemonSettingsBayleef | PokemonSettingsBayleefNormal;
  "0154": PokemonSettingsMeganium | PokemonSettingsMeganiumNormal;
  "0155": V0155_pokemon_cyndaquilEntry | V0155_pokemon_cyndaquil_normalEntry;
  "0156": PokemonSettingsQuilava | PokemonSettingsQuilavaNormal;
  "0157": V0157_pokemon_typhlosionEntry | V0157_pokemon_typhlosion_hisuianEntry | V0157_pokemon_typhlosion_normalEntry;
  "0158": PokemonSettingsTotodile | PokemonSettingsTotodileNormal;
  "0159": V0159_pokemon_croconawEntry | V0159_pokemon_croconaw_normalEntry;
  "0160": PokemonSettingsFeraligatr | PokemonSettingsFeraligatrNormal;
  "0161": PokemonSettingsSentret | PokemonSettingsSentretNormal;
  "0162": PokemonSettingsFurret | PokemonSettingsFurretNormal;
  "0163": V0163_pokemon_hoothootEntry | V0163_pokemon_hoothoot_normalEntry;
  "0164": V0164_pokemon_noctowlEntry | V0164_pokemon_noctowl_normalEntry;
  "0165": V0165_pokemon_ledybaEntry | PokemonSettingsLedybaNormal;
  "0166": PokemonSettingsLedian | PokemonSettingsLedianNormal;
  "0167": V0167_pokemon_spinarakEntry | V0167_pokemon_spinarak_normalEntry;
  "0168": PokemonSettingsAriados | PokemonSettingsAriadosNormal;
  "0169": V0169_pokemon_crobatEntry | V0169_pokemon_crobat_normalEntry;
  "0170": V0170_pokemon_chinchouEntry | V0170_pokemon_chinchou_normalEntry;
  "0171": V0171_pokemon_lanturnEntry | V0171_pokemon_lanturn_normalEntry;
  "0172": V0172_pokemon_pichuEntry | V0172_pokemon_pichu_normalEntry;
  "0173": PokemonSettingsCleffa | PokemonSettingsCleffaNormal;
  "0174": V0174_pokemon_igglybuffEntry | V0174_pokemon_igglybuff_normalEntry;
  "0175": V0175_pokemon_togepiEntry | V0175_pokemon_togepi_normalEntry;
  "0176": V0176_pokemon_togeticEntry | V0176_pokemon_togetic_normalEntry;
  "0177": V0177_pokemon_natuEntry | V0177_pokemon_natu_normalEntry;
  "0178": PokemonSettingsXatu | PokemonSettingsXatuNormal;
  "0179": V0179_pokemon_mareepEntry | V0179_pokemon_mareep_normalEntry;
  "0180": V0180_pokemon_flaaffyEntry | V0180_pokemon_flaaffy_normalEntry;
  "0181": V0181_pokemon_ampharosEntry | V0181_pokemon_ampharos_normalEntry;
  "0182": PokemonSettingsBellossom | PokemonSettingsBellossomNormal;
  "0183": V0183_pokemon_marillEntry | V0183_pokemon_marill_normalEntry;
  "0184": PokemonSettingsAzumarill | PokemonSettingsAzumarillNormal;
  "0185": V0185_pokemon_sudowoodoEntry | PokemonSettingsNormal | PokemonSettingsWinterT;
  "0186": PokemonSettingsPolitoed | PokemonSettingsPolitoedNormal;
  "0187": PokemonSettingsHoppipNormal | V0187_pokemon_hoppipEntry;
  "0188": V0188_pokemon_skiploomEntry | V0188_pokemon_skiploom_normalEntry;
  "0189": V0189_pokemon_jumpluffEntry | V0189_pokemon_jumpluff_normalEntry;
  "0190": V0190_pokemon_aipomEntry | V0190_pokemon_aipom_normalEntry;
  "0191": V0191_pokemon_sunkernEntry | V0191_pokemon_sunkern_normalEntry;
  "0192": PokemonSettingsSunflora | PokemonSettingsSunfloraNormal;
  "0193": V0193_pokemon_yanmaEntry | V0193_pokemon_yanma_normalEntry;
  "0194": PokemonSettingsWooper | PokemonSettingsWooperNormal | V0194_pokemon_wooper_paldeaEntry;
  "0195": V0195_pokemon_quagsireEntry | PokemonSettingsQuagsireNormal;
  "0196": PokemonSettingsEspeon | PokemonSettingsEspeonGofestTSscarf | PokemonSettingsEspeonNormal;
  "0197": V0197_pokemon_umbreonEntry | PokemonSettingsGofestTMscarf | PokemonSettingsNormal2;
  "0198": V0198_pokemon_murkrowEntry | V0198_pokemon_murkrow_normalEntry;
  "0199": V0199_pokemon_slowkingEntry | V0199_pokemon_slowking_2022Entry | V0199_pokemon_slowking_galarianEntry | V0199_pokemon_slowking_normalEntry;
  "0200": V0200_pokemon_misdreavusEntry | V0200_pokemon_misdreavus_normalEntry;
  "0201": PokemonSettingsUnown | PokemonSettingsUnownA | PokemonSettingsUnownB | PokemonSettingsUnownC | PokemonSettingsUnownD | PokemonSettingsUnownE | PokemonSettingsUnownExclamationPoint | PokemonSettingsUnownF | PokemonSettingsUnownG | PokemonSettingsUnownH | PokemonSettingsUnownI | PokemonSettingsUnownJ | PokemonSettingsUnownL | PokemonSettingsUnownM | PokemonSettingsUnownN | PokemonSettingsUnownO | PokemonSettingsUnownP | PokemonSettingsUnownQ | PokemonSettingsUnownQuestionMark | PokemonSettingsUnownR | PokemonSettingsUnownS | PokemonSettingsUnownU | PokemonSettingsUnownW | PokemonSettingsUnownX | PokemonSettingsUnownY | PokemonSettingsUnownZ | PokemonSettingsK | PokemonSettingsT | PokemonSettingsV;
  "0202": V0202_pokemon_wobbuffetEntry | V0202_pokemon_wobbuffet_normalEntry;
  "0203": V0203_pokemon_girafarigEntry | V0203_pokemon_girafarig_normalEntry;
  "0204": PokemonSettingsPineco | PokemonSettingsPinecoNormal;
  "0205": PokemonSettingsForretress | PokemonSettingsForretressNormal;
  "0206": V0206_pokemon_dunsparceEntry | V0206_pokemon_dunsparce_normalEntry;
  "0207": V0207_pokemon_gligarEntry | V0207_pokemon_gligar_normalEntry;
  "0208": V0208_pokemon_steelixEntry | V0208_pokemon_steelix_normalEntry;
  "0209": PokemonSettingsSnubbull | PokemonSettingsSnubbullNormal;
  "0210": PokemonSettingsGranbull | PokemonSettingsGranbullNormal;
  "0211": V0211_pokemon_qwilfishEntry | V0211_pokemon_qwilfish_hisuianEntry | V0211_pokemon_qwilfish_normalEntry;
  "0212": V0212_pokemon_scizorEntry | V0212_pokemon_scizor_normalEntry;
  "0213": V0213_pokemon_shuckleEntry | V0213_pokemon_shuckle_normalEntry;
  "0214": V0214_pokemon_heracrossEntry | V0214_pokemon_heracross_normalEntry;
  "0215": V0215_pokemon_sneaselEntry | V0215_pokemon_sneasel_hisuianEntry | V0215_pokemon_sneasel_normalEntry;
  "0216": PokemonSettingsTeddiursa | PokemonSettingsTeddiursaNormal;
  "0217": V0217_pokemon_ursaringEntry | V0217_pokemon_ursaring_normalEntry;
  "0218": PokemonSettingsSlugma | PokemonSettingsSlugmaNormal;
  "0219": PokemonSettingsMagcargo | PokemonSettingsMagcargoNormal;
  "0220": PokemonSettingsSwinub | PokemonSettingsSwinubNormal;
  "0221": V0221_pokemon_piloswineEntry | V0221_pokemon_piloswine_normalEntry;
  "0222": V0222_pokemon_corsolaEntry | V0222_pokemon_corsola_galarianEntry | V0222_pokemon_corsola_normalEntry | V0222_pokemon_corsola_spring_2026Entry;
  "0223": PokemonSettingsRemoraid | PokemonSettingsRemoraidNormal;
  "0224": PokemonSettingsOctillery | PokemonSettingsOctilleryNormal;
  "0225": V0225_pokemon_delibirdEntry | V0225_pokemon_delibird_normalEntry | V0225_pokemon_delibird_winter_2020Entry;
  "0226": V0226_pokemon_mantineEntry | V0226_pokemon_mantine_normalEntry;
  "0227": V0227_pokemon_skarmoryEntry | V0227_pokemon_skarmory_normalEntry;
  "0228": PokemonSettingsHoundour | PokemonSettingsHoundourNormal;
  "0229": V0229_pokemon_houndoomEntry | V0229_pokemon_houndoom_normalEntry;
  "0230": V0230_pokemon_kingdraEntry | V0230_pokemon_kingdra_normalEntry;
  "0231": PokemonSettingsPhanpy | PokemonSettingsPhanpyNormal;
  "0232": PokemonSettingsDonphan | PokemonSettingsDonphanNormal;
  "0233": V0233_pokemon_porygon2Entry | V0233_pokemon_porygon2_normalEntry;
  "0234": V0234_pokemon_stantlerEntry | V0234_pokemon_stantler_normalEntry;
  "0235": V0235_pokemon_smeargleEntry | V0235_pokemon_smeargle_normalEntry;
  "0236": PokemonSettingsTyrogue | PokemonSettingsTyrogueNormal;
  "0237": V0237_pokemon_hitmontopEntry | V0237_pokemon_hitmontop_normalEntry;
  "0238": V0238_pokemon_smoochumEntry | V0238_pokemon_smoochum_normalEntry;
  "0239": PokemonSettingsElekid | PokemonSettingsElekidNormal;
  "0240": PokemonSettingsMagby | PokemonSettingsMagbyNormal;
  "0241": PokemonSettingsMiltank | PokemonSettingsMiltankNormal;
  "0242": V0242_pokemon_blisseyEntry | V0242_pokemon_blissey_normalEntry;
  "0243": PokemonSettingsRaikou | PokemonSettingsRaikouNormal | PokemonSettingsRaikouS;
  "0244": PokemonSettingsEntei | PokemonSettingsEnteiNormal | PokemonSettingsEnteiS;
  "0245": V0245_pokemon_suicuneEntry | PokemonSettingsNormal3 | PokemonSettingsS;
  "0246": PokemonSettingsLarvitar | PokemonSettingsLarvitarNormal;
  "0247": V0247_pokemon_pupitarEntry | V0247_pokemon_pupitar_normalEntry;
  "0248": V0248_pokemon_tyranitarEntry | V0248_pokemon_tyranitar_normalEntry;
  "0249": PokemonSettingsLugia | PokemonSettingsLugiaNormal | PokemonSettingsLugiaS;
  "0250": PokemonSettingsHoOh | PokemonSettingsHoOhNormal | PokemonSettingsHoOhS;
  "0251": V0251_pokemon_celebiEntry | V0251_pokemon_celebi_normalEntry;
}

export interface PokemonSettingsGen2ByPokemonId {
  "AIPOM": V0190_pokemon_aipomEntry | V0190_pokemon_aipom_normalEntry;
  "AMPHAROS": V0181_pokemon_ampharosEntry | V0181_pokemon_ampharos_normalEntry;
  "ARIADOS": PokemonSettingsAriados | PokemonSettingsAriadosNormal;
  "AZUMARILL": PokemonSettingsAzumarill | PokemonSettingsAzumarillNormal;
  "BAYLEEF": PokemonSettingsBayleef | PokemonSettingsBayleefNormal;
  "BELLOSSOM": PokemonSettingsBellossom | PokemonSettingsBellossomNormal;
  "BLISSEY": V0242_pokemon_blisseyEntry | V0242_pokemon_blissey_normalEntry;
  "CELEBI": V0251_pokemon_celebiEntry | V0251_pokemon_celebi_normalEntry;
  "CHIKORITA": PokemonSettingsChikorita | PokemonSettingsChikoritaNormal;
  "CHINCHOU": V0170_pokemon_chinchouEntry | V0170_pokemon_chinchou_normalEntry;
  "CLEFFA": PokemonSettingsCleffa | PokemonSettingsCleffaNormal;
  "CORSOLA": V0222_pokemon_corsolaEntry | V0222_pokemon_corsola_galarianEntry | V0222_pokemon_corsola_normalEntry | V0222_pokemon_corsola_spring_2026Entry;
  "CROBAT": V0169_pokemon_crobatEntry | V0169_pokemon_crobat_normalEntry;
  "CROCONAW": V0159_pokemon_croconawEntry | V0159_pokemon_croconaw_normalEntry;
  "CYNDAQUIL": V0155_pokemon_cyndaquilEntry | V0155_pokemon_cyndaquil_normalEntry;
  "DELIBIRD": V0225_pokemon_delibirdEntry | V0225_pokemon_delibird_normalEntry | V0225_pokemon_delibird_winter_2020Entry;
  "DONPHAN": PokemonSettingsDonphan | PokemonSettingsDonphanNormal;
  "DUNSPARCE": V0206_pokemon_dunsparceEntry | V0206_pokemon_dunsparce_normalEntry;
  "ELEKID": PokemonSettingsElekid | PokemonSettingsElekidNormal;
  "ENTEI": PokemonSettingsEntei | PokemonSettingsEnteiNormal | PokemonSettingsEnteiS;
  "ESPEON": PokemonSettingsEspeon | PokemonSettingsEspeonGofestTSscarf | PokemonSettingsEspeonNormal;
  "FERALIGATR": PokemonSettingsFeraligatr | PokemonSettingsFeraligatrNormal;
  "FLAAFFY": V0180_pokemon_flaaffyEntry | V0180_pokemon_flaaffy_normalEntry;
  "FORRETRESS": PokemonSettingsForretress | PokemonSettingsForretressNormal;
  "FURRET": PokemonSettingsFurret | PokemonSettingsFurretNormal;
  "GIRAFARIG": V0203_pokemon_girafarigEntry | V0203_pokemon_girafarig_normalEntry;
  "GLIGAR": V0207_pokemon_gligarEntry | V0207_pokemon_gligar_normalEntry;
  "GRANBULL": PokemonSettingsGranbull | PokemonSettingsGranbullNormal;
  "HERACROSS": V0214_pokemon_heracrossEntry | V0214_pokemon_heracross_normalEntry;
  "HITMONTOP": V0237_pokemon_hitmontopEntry | V0237_pokemon_hitmontop_normalEntry;
  "HO_OH": PokemonSettingsHoOh | PokemonSettingsHoOhNormal | PokemonSettingsHoOhS;
  "HOOTHOOT": V0163_pokemon_hoothootEntry | V0163_pokemon_hoothoot_normalEntry;
  "HOPPIP": PokemonSettingsHoppipNormal | V0187_pokemon_hoppipEntry;
  "HOUNDOOM": V0229_pokemon_houndoomEntry | V0229_pokemon_houndoom_normalEntry;
  "HOUNDOUR": PokemonSettingsHoundour | PokemonSettingsHoundourNormal;
  "IGGLYBUFF": V0174_pokemon_igglybuffEntry | V0174_pokemon_igglybuff_normalEntry;
  "JUMPLUFF": V0189_pokemon_jumpluffEntry | V0189_pokemon_jumpluff_normalEntry;
  "KINGDRA": V0230_pokemon_kingdraEntry | V0230_pokemon_kingdra_normalEntry;
  "LANTURN": V0171_pokemon_lanturnEntry | V0171_pokemon_lanturn_normalEntry;
  "LARVITAR": PokemonSettingsLarvitar | PokemonSettingsLarvitarNormal;
  "LEDIAN": PokemonSettingsLedian | PokemonSettingsLedianNormal;
  "LEDYBA": V0165_pokemon_ledybaEntry | PokemonSettingsLedybaNormal;
  "LUGIA": PokemonSettingsLugia | PokemonSettingsLugiaNormal | PokemonSettingsLugiaS;
  "MAGBY": PokemonSettingsMagby | PokemonSettingsMagbyNormal;
  "MAGCARGO": PokemonSettingsMagcargo | PokemonSettingsMagcargoNormal;
  "MANTINE": V0226_pokemon_mantineEntry | V0226_pokemon_mantine_normalEntry;
  "MAREEP": V0179_pokemon_mareepEntry | V0179_pokemon_mareep_normalEntry;
  "MARILL": V0183_pokemon_marillEntry | V0183_pokemon_marill_normalEntry;
  "MEGANIUM": PokemonSettingsMeganium | PokemonSettingsMeganiumNormal;
  "MILTANK": PokemonSettingsMiltank | PokemonSettingsMiltankNormal;
  "MISDREAVUS": V0200_pokemon_misdreavusEntry | V0200_pokemon_misdreavus_normalEntry;
  "MURKROW": V0198_pokemon_murkrowEntry | V0198_pokemon_murkrow_normalEntry;
  "NATU": V0177_pokemon_natuEntry | V0177_pokemon_natu_normalEntry;
  "NOCTOWL": V0164_pokemon_noctowlEntry | V0164_pokemon_noctowl_normalEntry;
  "OCTILLERY": PokemonSettingsOctillery | PokemonSettingsOctilleryNormal;
  "PHANPY": PokemonSettingsPhanpy | PokemonSettingsPhanpyNormal;
  "PICHU": V0172_pokemon_pichuEntry | V0172_pokemon_pichu_normalEntry;
  "PILOSWINE": V0221_pokemon_piloswineEntry | V0221_pokemon_piloswine_normalEntry;
  "PINECO": PokemonSettingsPineco | PokemonSettingsPinecoNormal;
  "POLITOED": PokemonSettingsPolitoed | PokemonSettingsPolitoedNormal;
  "PORYGON2": V0233_pokemon_porygon2Entry | V0233_pokemon_porygon2_normalEntry;
  "PUPITAR": V0247_pokemon_pupitarEntry | V0247_pokemon_pupitar_normalEntry;
  "QUAGSIRE": V0195_pokemon_quagsireEntry | PokemonSettingsQuagsireNormal;
  "QUILAVA": PokemonSettingsQuilava | PokemonSettingsQuilavaNormal;
  "QWILFISH": V0211_pokemon_qwilfishEntry | V0211_pokemon_qwilfish_hisuianEntry | V0211_pokemon_qwilfish_normalEntry;
  "RAIKOU": PokemonSettingsRaikou | PokemonSettingsRaikouNormal | PokemonSettingsRaikouS;
  "REMORAID": PokemonSettingsRemoraid | PokemonSettingsRemoraidNormal;
  "SCIZOR": V0212_pokemon_scizorEntry | V0212_pokemon_scizor_normalEntry;
  "SENTRET": PokemonSettingsSentret | PokemonSettingsSentretNormal;
  "SHUCKLE": V0213_pokemon_shuckleEntry | V0213_pokemon_shuckle_normalEntry;
  "SKARMORY": V0227_pokemon_skarmoryEntry | V0227_pokemon_skarmory_normalEntry;
  "SKIPLOOM": V0188_pokemon_skiploomEntry | V0188_pokemon_skiploom_normalEntry;
  "SLOWKING": V0199_pokemon_slowkingEntry | V0199_pokemon_slowking_2022Entry | V0199_pokemon_slowking_galarianEntry | V0199_pokemon_slowking_normalEntry;
  "SLUGMA": PokemonSettingsSlugma | PokemonSettingsSlugmaNormal;
  "SMEARGLE": V0235_pokemon_smeargleEntry | V0235_pokemon_smeargle_normalEntry;
  "SMOOCHUM": V0238_pokemon_smoochumEntry | V0238_pokemon_smoochum_normalEntry;
  "SNEASEL": V0215_pokemon_sneaselEntry | V0215_pokemon_sneasel_hisuianEntry | V0215_pokemon_sneasel_normalEntry;
  "SNUBBULL": PokemonSettingsSnubbull | PokemonSettingsSnubbullNormal;
  "SPINARAK": V0167_pokemon_spinarakEntry | V0167_pokemon_spinarak_normalEntry;
  "STANTLER": V0234_pokemon_stantlerEntry | V0234_pokemon_stantler_normalEntry;
  "STEELIX": V0208_pokemon_steelixEntry | V0208_pokemon_steelix_normalEntry;
  "SUDOWOODO": V0185_pokemon_sudowoodoEntry | PokemonSettingsNormal | PokemonSettingsWinterT;
  "SUICUNE": V0245_pokemon_suicuneEntry | PokemonSettingsNormal3 | PokemonSettingsS;
  "SUNFLORA": PokemonSettingsSunflora | PokemonSettingsSunfloraNormal;
  "SUNKERN": V0191_pokemon_sunkernEntry | V0191_pokemon_sunkern_normalEntry;
  "SWINUB": PokemonSettingsSwinub | PokemonSettingsSwinubNormal;
  "TEDDIURSA": PokemonSettingsTeddiursa | PokemonSettingsTeddiursaNormal;
  "TOGEPI": V0175_pokemon_togepiEntry | V0175_pokemon_togepi_normalEntry;
  "TOGETIC": V0176_pokemon_togeticEntry | V0176_pokemon_togetic_normalEntry;
  "TOTODILE": PokemonSettingsTotodile | PokemonSettingsTotodileNormal;
  "TYPHLOSION": V0157_pokemon_typhlosionEntry | V0157_pokemon_typhlosion_hisuianEntry | V0157_pokemon_typhlosion_normalEntry;
  "TYRANITAR": V0248_pokemon_tyranitarEntry | V0248_pokemon_tyranitar_normalEntry;
  "TYROGUE": PokemonSettingsTyrogue | PokemonSettingsTyrogueNormal;
  "UMBREON": V0197_pokemon_umbreonEntry | PokemonSettingsGofestTMscarf | PokemonSettingsNormal2;
  "UNOWN": PokemonSettingsUnown | PokemonSettingsUnownA | PokemonSettingsUnownB | PokemonSettingsUnownC | PokemonSettingsUnownD | PokemonSettingsUnownE | PokemonSettingsUnownExclamationPoint | PokemonSettingsUnownF | PokemonSettingsUnownG | PokemonSettingsUnownH | PokemonSettingsUnownI | PokemonSettingsUnownJ | PokemonSettingsUnownL | PokemonSettingsUnownM | PokemonSettingsUnownN | PokemonSettingsUnownO | PokemonSettingsUnownP | PokemonSettingsUnownQ | PokemonSettingsUnownQuestionMark | PokemonSettingsUnownR | PokemonSettingsUnownS | PokemonSettingsUnownU | PokemonSettingsUnownW | PokemonSettingsUnownX | PokemonSettingsUnownY | PokemonSettingsUnownZ | PokemonSettingsK | PokemonSettingsT | PokemonSettingsV;
  "URSARING": V0217_pokemon_ursaringEntry | V0217_pokemon_ursaring_normalEntry;
  "WOBBUFFET": V0202_pokemon_wobbuffetEntry | V0202_pokemon_wobbuffet_normalEntry;
  "WOOPER": PokemonSettingsWooper | PokemonSettingsWooperNormal | V0194_pokemon_wooper_paldeaEntry;
  "XATU": PokemonSettingsXatu | PokemonSettingsXatuNormal;
  "YANMA": V0193_pokemon_yanmaEntry | V0193_pokemon_yanma_normalEntry;
}

export type PokemonSettingsGen2MasterfileEntry = PokemonSettingsChikorita | PokemonSettingsTotodile | PokemonSettingsPhanpy | PokemonSettingsChikoritaNormal | PokemonSettingsTotodileNormal | PokemonSettingsBayleef | PokemonSettingsQuilava | PokemonSettingsBayleefNormal | PokemonSettingsQuilavaNormal | PokemonSettingsMeganium | PokemonSettingsMeganiumNormal | V0155_pokemon_cyndaquilEntry | V0155_pokemon_cyndaquil_normalEntry | V0157_pokemon_typhlosionEntry | V0157_pokemon_typhlosion_hisuianEntry | V0157_pokemon_typhlosion_normalEntry | V0159_pokemon_croconawEntry | V0159_pokemon_croconaw_normalEntry | PokemonSettingsFeraligatr | PokemonSettingsFeraligatrNormal | PokemonSettingsSentret | PokemonSettingsSlugma | PokemonSettingsTyrogue | PokemonSettingsSentretNormal | PokemonSettingsSlugmaNormal | PokemonSettingsTyrogueNormal | PokemonSettingsFurret | PokemonSettingsSunflora | PokemonSettingsOctillery | PokemonSettingsFurretNormal | PokemonSettingsSunfloraNormal | PokemonSettingsOctilleryNormal | V0163_pokemon_hoothootEntry | V0163_pokemon_hoothoot_normalEntry | V0164_pokemon_noctowlEntry | V0164_pokemon_noctowl_normalEntry | V0165_pokemon_ledybaEntry | PokemonSettingsLedybaNormal | PokemonSettingsHoppipNormal | PokemonSettingsLedian | PokemonSettingsXatu | PokemonSettingsLedianNormal | PokemonSettingsXatuNormal | V0167_pokemon_spinarakEntry | V0167_pokemon_spinarak_normalEntry | PokemonSettingsAriados | PokemonSettingsAzumarill | PokemonSettingsMagcargo | PokemonSettingsAriadosNormal | PokemonSettingsAzumarillNormal | PokemonSettingsMagcargoNormal | V0169_pokemon_crobatEntry | V0169_pokemon_crobat_normalEntry | V0170_pokemon_chinchouEntry | V0170_pokemon_chinchou_normalEntry | V0171_pokemon_lanturnEntry | V0171_pokemon_lanturn_normalEntry | V0172_pokemon_pichuEntry | V0172_pokemon_pichu_normalEntry | PokemonSettingsCleffa | PokemonSettingsElekid | PokemonSettingsMagby | PokemonSettingsCleffaNormal | PokemonSettingsElekidNormal | PokemonSettingsMagbyNormal | V0174_pokemon_igglybuffEntry | V0174_pokemon_igglybuff_normalEntry | V0175_pokemon_togepiEntry | V0175_pokemon_togepi_normalEntry | V0176_pokemon_togeticEntry | V0176_pokemon_togetic_normalEntry | V0177_pokemon_natuEntry | V0177_pokemon_natu_normalEntry | V0179_pokemon_mareepEntry | V0179_pokemon_mareep_normalEntry | V0180_pokemon_flaaffyEntry | V0180_pokemon_flaaffy_normalEntry | V0181_pokemon_ampharosEntry | V0181_pokemon_ampharos_normalEntry | PokemonSettingsBellossom | PokemonSettingsBellossomNormal | V0183_pokemon_marillEntry | V0183_pokemon_marill_normalEntry | V0185_pokemon_sudowoodoEntry | PokemonSettingsNormal | PokemonSettingsWinterT | PokemonSettingsPolitoed | PokemonSettingsPolitoedNormal | V0187_pokemon_hoppipEntry | V0188_pokemon_skiploomEntry | V0188_pokemon_skiploom_normalEntry | V0189_pokemon_jumpluffEntry | V0189_pokemon_jumpluff_normalEntry | V0190_pokemon_aipomEntry | V0190_pokemon_aipom_normalEntry | V0191_pokemon_sunkernEntry | V0191_pokemon_sunkern_normalEntry | V0193_pokemon_yanmaEntry | V0193_pokemon_yanma_normalEntry | PokemonSettingsWooper | PokemonSettingsSwinub | PokemonSettingsWooperNormal | PokemonSettingsSwinubNormal | V0194_pokemon_wooper_paldeaEntry | V0195_pokemon_quagsireEntry | PokemonSettingsQuagsireNormal | PokemonSettingsEspeon | PokemonSettingsEspeonGofestTSscarf | PokemonSettingsEspeonNormal | V0197_pokemon_umbreonEntry | PokemonSettingsGofestTMscarf | PokemonSettingsNormal2 | V0198_pokemon_murkrowEntry | V0198_pokemon_murkrow_normalEntry | V0199_pokemon_slowkingEntry | V0199_pokemon_slowking_2022Entry | V0199_pokemon_slowking_galarianEntry | V0199_pokemon_slowking_normalEntry | V0200_pokemon_misdreavusEntry | V0200_pokemon_misdreavus_normalEntry | PokemonSettingsUnown | PokemonSettingsUnownA | PokemonSettingsUnownB | PokemonSettingsUnownC | PokemonSettingsUnownD | PokemonSettingsUnownE | PokemonSettingsUnownExclamationPoint | PokemonSettingsUnownF | PokemonSettingsUnownG | PokemonSettingsUnownH | PokemonSettingsUnownI | PokemonSettingsUnownJ | PokemonSettingsUnownL | PokemonSettingsUnownM | PokemonSettingsUnownN | PokemonSettingsUnownO | PokemonSettingsUnownP | PokemonSettingsUnownQ | PokemonSettingsUnownQuestionMark | PokemonSettingsUnownR | PokemonSettingsUnownS | PokemonSettingsUnownU | PokemonSettingsUnownW | PokemonSettingsUnownX | PokemonSettingsUnownY | PokemonSettingsUnownZ | PokemonSettingsK | PokemonSettingsT | PokemonSettingsV | V0202_pokemon_wobbuffetEntry | V0202_pokemon_wobbuffet_normalEntry | V0203_pokemon_girafarigEntry | V0203_pokemon_girafarig_normalEntry | PokemonSettingsPineco | PokemonSettingsSnubbull | PokemonSettingsTeddiursa | PokemonSettingsPinecoNormal | PokemonSettingsSnubbullNormal | PokemonSettingsTeddiursaNormal | PokemonSettingsPhanpyNormal | PokemonSettingsForretress | PokemonSettingsForretressNormal | V0206_pokemon_dunsparceEntry | V0206_pokemon_dunsparce_normalEntry | V0207_pokemon_gligarEntry | V0207_pokemon_gligar_normalEntry | V0208_pokemon_steelixEntry | V0208_pokemon_steelix_normalEntry | PokemonSettingsGranbull | PokemonSettingsDonphan | PokemonSettingsGranbullNormal | PokemonSettingsDonphanNormal | V0211_pokemon_qwilfishEntry | V0211_pokemon_qwilfish_hisuianEntry | V0211_pokemon_qwilfish_normalEntry | V0212_pokemon_scizorEntry | V0212_pokemon_scizor_normalEntry | V0213_pokemon_shuckleEntry | V0213_pokemon_shuckle_normalEntry | V0214_pokemon_heracrossEntry | V0214_pokemon_heracross_normalEntry | V0215_pokemon_sneaselEntry | V0215_pokemon_sneasel_hisuianEntry | V0215_pokemon_sneasel_normalEntry | V0217_pokemon_ursaringEntry | V0217_pokemon_ursaring_normalEntry | V0221_pokemon_piloswineEntry | V0221_pokemon_piloswine_normalEntry | V0222_pokemon_corsolaEntry | V0222_pokemon_corsola_galarianEntry | V0222_pokemon_corsola_normalEntry | V0222_pokemon_corsola_spring_2026Entry | PokemonSettingsRemoraid | PokemonSettingsRemoraidNormal | V0225_pokemon_delibirdEntry | V0225_pokemon_delibird_normalEntry | V0225_pokemon_delibird_winter_2020Entry | V0226_pokemon_mantineEntry | V0226_pokemon_mantine_normalEntry | V0227_pokemon_skarmoryEntry | V0227_pokemon_skarmory_normalEntry | PokemonSettingsHoundour | PokemonSettingsLarvitar | PokemonSettingsHoundourNormal | PokemonSettingsLarvitarNormal | V0229_pokemon_houndoomEntry | V0229_pokemon_houndoom_normalEntry | V0230_pokemon_kingdraEntry | V0230_pokemon_kingdra_normalEntry | V0233_pokemon_porygon2Entry | V0233_pokemon_porygon2_normalEntry | V0234_pokemon_stantlerEntry | V0234_pokemon_stantler_normalEntry | V0235_pokemon_smeargleEntry | V0235_pokemon_smeargle_normalEntry | V0237_pokemon_hitmontopEntry | V0237_pokemon_hitmontop_normalEntry | V0238_pokemon_smoochumEntry | V0238_pokemon_smoochum_normalEntry | PokemonSettingsMiltank | PokemonSettingsMiltankNormal | V0242_pokemon_blisseyEntry | V0242_pokemon_blissey_normalEntry | PokemonSettingsRaikou | PokemonSettingsEntei | PokemonSettingsRaikouNormal | PokemonSettingsRaikouS | PokemonSettingsEnteiNormal | PokemonSettingsEnteiS | V0245_pokemon_suicuneEntry | PokemonSettingsNormal3 | PokemonSettingsS | V0247_pokemon_pupitarEntry | V0247_pokemon_pupitar_normalEntry | V0248_pokemon_tyranitarEntry | V0248_pokemon_tyranitar_normalEntry | PokemonSettingsLugia | PokemonSettingsHoOh | PokemonSettingsLugiaNormal | PokemonSettingsHoOhNormal | PokemonSettingsLugiaS | PokemonSettingsHoOhS | V0251_pokemon_celebiEntry | V0251_pokemon_celebi_normalEntry;

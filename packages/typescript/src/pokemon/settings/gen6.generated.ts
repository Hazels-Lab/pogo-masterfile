/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen6
// Filters: all
// Entries emitted: 237

import type { PokemonSettingsShared1002, PokemonSettingsShared1003, PokemonSettingsShared1026, PokemonSettingsShared1027, PokemonSettingsShared1051, PokemonSettingsShared1054, PokemonSettingsShared942, PokemonSettingsShared943, PokemonSettingsShared944, PokemonSettingsShared945, PokemonSettingsShared946, PokemonSettingsShared947, PokemonSettingsShared964, PokemonSettingsShared965, PokemonSettingsShared967, PokemonSettingsShared969, PokemonSettingsShared973, PokemonSettingsShared975, PokemonSettingsShared977, PokemonSettingsShared979, PokemonSettingsShared989, PokemonSettingsShared993, PokemonSettingsShared999 } from "./shared.generated";

export interface V0654_pokemon_braixendatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0654_pokemon_braixendatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
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
export interface V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0654_pokemon_braixendatapokemonsettingsibfc {

}
export interface V0654_pokemon_braixendatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0654_pokemon_braixendatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0654_pokemon_braixendatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0654_pokemon_braixendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0654_pokemon_braixendata {
  pokemonSettings: V0654_pokemon_braixendatapokemonsettings;
  templateId: string;
}
export interface V0654_pokemon_braixenEntry {
  templateId: "V0654_POKEMON_BRAIXEN";
  data: V0654_pokemon_braixendata;
}
export interface V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0654_pokemon_braixen_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0654_pokemon_braixen_normaldata {
  pokemonSettings: V0654_pokemon_braixen_normaldatapokemonsettings;
  templateId: string;
}
export interface V0654_pokemon_braixen_normalEntry {
  templateId: "V0654_POKEMON_BRAIXEN_NORMAL";
  data: V0654_pokemon_braixen_normaldata;
}
export interface V0656_pokemon_froakiedatapokemonsettingsencounter {
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
export interface V0656_pokemon_froakiedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0656_pokemon_froakiedatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0656_pokemon_froakiedata {
  pokemonSettings: V0656_pokemon_froakiedatapokemonsettings;
  templateId: string;
}
export interface V0656_pokemon_froakieEntry {
  templateId: "V0656_POKEMON_FROAKIE";
  data: V0656_pokemon_froakiedata;
}
export interface V0656_pokemon_froakie_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0656_pokemon_froakiedatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0656_pokemon_froakie_normaldata {
  pokemonSettings: V0656_pokemon_froakie_normaldatapokemonsettings;
  templateId: string;
}
export interface V0656_pokemon_froakie_normalEntry {
  templateId: "V0656_POKEMON_FROAKIE_NORMAL";
  data: V0656_pokemon_froakie_normaldata;
}
export interface V0658_pokemon_greninjadatapokemonsettingsencounter {
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
export interface V0658_pokemon_greninjadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0658_pokemon_greninjadata {
  pokemonSettings: V0658_pokemon_greninjadatapokemonsettings;
  templateId: string;
}
export interface V0658_pokemon_greninjaEntry {
  templateId: "V0658_POKEMON_GRENINJA";
  data: V0658_pokemon_greninjadata;
}
export interface V0658_pokemon_greninja_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0658_pokemon_greninja_normaldata {
  pokemonSettings: V0658_pokemon_greninja_normaldatapokemonsettings;
  templateId: string;
}
export interface V0658_pokemon_greninja_normalEntry {
  templateId: "V0658_POKEMON_GRENINJA_NORMAL";
  data: V0658_pokemon_greninja_normaldata;
}
export interface V0659_pokemon_bunnelbydatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
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
export interface V0659_pokemon_bunnelbydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0659_pokemon_bunnelbydata {
  pokemonSettings: V0659_pokemon_bunnelbydatapokemonsettings;
  templateId: string;
}
export interface V0659_pokemon_bunnelbyEntry {
  templateId: "V0659_POKEMON_BUNNELBY";
  data: V0659_pokemon_bunnelbydata;
}
export interface V0659_pokemon_bunnelby_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0659_pokemon_bunnelby_normaldata {
  pokemonSettings: V0659_pokemon_bunnelby_normaldatapokemonsettings;
  templateId: string;
}
export interface V0659_pokemon_bunnelby_normalEntry {
  templateId: "V0659_POKEMON_BUNNELBY_NORMAL";
  data: V0659_pokemon_bunnelby_normaldata;
}
export interface V0660_pokemon_diggersbydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0660_pokemon_diggersbydata {
  pokemonSettings: V0660_pokemon_diggersbydatapokemonsettings;
  templateId: string;
}
export interface V0660_pokemon_diggersbyEntry {
  templateId: "V0660_POKEMON_DIGGERSBY";
  data: V0660_pokemon_diggersbydata;
}
export interface V0660_pokemon_diggersby_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0660_pokemon_diggersby_normaldata {
  pokemonSettings: V0660_pokemon_diggersby_normaldatapokemonsettings;
  templateId: string;
}
export interface V0660_pokemon_diggersby_normalEntry {
  templateId: "V0660_POKEMON_DIGGERSBY_NORMAL";
  data: V0660_pokemon_diggersby_normaldata;
}
export interface V0661_pokemon_fletchlingdatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0661_pokemon_fletchlingdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0661_pokemon_fletchlingdatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0661_pokemon_fletchlingdata {
  pokemonSettings: V0661_pokemon_fletchlingdatapokemonsettings;
  templateId: string;
}
export interface V0661_pokemon_fletchlingEntry {
  templateId: "V0661_POKEMON_FLETCHLING";
  data: V0661_pokemon_fletchlingdata;
}
export interface V0661_pokemon_fletchling_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0661_pokemon_fletchlingdatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0661_pokemon_fletchling_normaldata {
  pokemonSettings: V0661_pokemon_fletchling_normaldatapokemonsettings;
  templateId: string;
}
export interface V0661_pokemon_fletchling_normalEntry {
  templateId: "V0661_POKEMON_FLETCHLING_NORMAL";
  data: V0661_pokemon_fletchling_normaldata;
}
export interface V0662_pokemon_fletchinderdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixendatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0662_pokemon_fletchinderdata {
  pokemonSettings: V0662_pokemon_fletchinderdatapokemonsettings;
  templateId: string;
}
export interface V0662_pokemon_fletchinderEntry {
  templateId: "V0662_POKEMON_FLETCHINDER";
  data: V0662_pokemon_fletchinderdata;
}
export interface V0662_pokemon_fletchinder_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  evolutionBranch: (V0654_pokemon_braixen_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0662_pokemon_fletchinder_normaldata {
  pokemonSettings: V0662_pokemon_fletchinder_normaldatapokemonsettings;
  templateId: string;
}
export interface V0662_pokemon_fletchinder_normalEntry {
  templateId: "V0662_POKEMON_FLETCHINDER_NORMAL";
  data: V0662_pokemon_fletchinder_normaldata;
}
export interface V0663_pokemon_talonflamedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0663_pokemon_talonflamedata {
  pokemonSettings: V0663_pokemon_talonflamedatapokemonsettings;
  templateId: string;
}
export interface V0663_pokemon_talonflameEntry {
  templateId: "V0663_POKEMON_TALONFLAME";
  data: V0663_pokemon_talonflamedata;
}
export interface V0663_pokemon_talonflame_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0658_pokemon_greninjadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0663_pokemon_talonflame_normaldata {
  pokemonSettings: V0663_pokemon_talonflame_normaldatapokemonsettings;
  templateId: string;
}
export interface V0663_pokemon_talonflame_normalEntry {
  templateId: "V0663_POKEMON_TALONFLAME_NORMAL";
  data: V0663_pokemon_talonflame_normaldata;
}
export interface V0665_pokemon_spewpadatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
}
export interface V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0665_pokemon_spewpadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0665_pokemon_spewpadata {
  pokemonSettings: V0665_pokemon_spewpadatapokemonsettings;
  templateId: string;
}
export interface V0665_pokemon_spewpaEntry {
  templateId: "V0665_POKEMON_SPEWPA";
  data: V0665_pokemon_spewpadata;
}
export interface V0666_pokemon_vivillondatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0666_pokemon_vivillondatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0666_pokemon_vivillondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0666_pokemon_vivillondata {
  pokemonSettings: V0666_pokemon_vivillondatapokemonsettings;
  templateId: string;
}
export interface V0666_pokemon_vivillonEntry {
  templateId: "V0666_POKEMON_VIVILLON";
  data: V0666_pokemon_vivillondata;
}
export interface V0667_pokemon_litleodatapokemonsettingsencounter {
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
export interface V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  genderRequirement: string;
}
export interface V0667_pokemon_litleodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0667_pokemon_litleodata {
  pokemonSettings: V0667_pokemon_litleodatapokemonsettings;
  templateId: string;
}
export interface V0667_pokemon_litleoEntry {
  templateId: "V0667_POKEMON_LITLEO";
  data: V0667_pokemon_litleodata;
}
export interface V0667_pokemon_litleo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0667_pokemon_litleo_normaldata {
  pokemonSettings: V0667_pokemon_litleo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0667_pokemon_litleo_normalEntry {
  templateId: "V0667_POKEMON_LITLEO_NORMAL";
  data: V0667_pokemon_litleo_normaldata;
}
export interface V0668_pokemon_pyroardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0668_pokemon_pyroardata {
  pokemonSettings: V0668_pokemon_pyroardatapokemonsettings;
  templateId: string;
}
export interface V0668_pokemon_pyroarEntry {
  templateId: "V0668_POKEMON_PYROAR";
  data: V0668_pokemon_pyroardata;
}
export interface V0669_pokemon_flabebedatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0669_pokemon_flabebedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0669_pokemon_flabebedata {
  pokemonSettings: V0669_pokemon_flabebedatapokemonsettings;
  templateId: string;
}
export interface V0669_pokemon_flabebeEntry {
  templateId: "V0669_POKEMON_FLABEBE";
  data: V0669_pokemon_flabebedata;
}
export interface V0670_pokemon_floettedatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  questDisplay: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0670_pokemon_floettedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0670_pokemon_floettedata {
  pokemonSettings: V0670_pokemon_floettedatapokemonsettings;
  templateId: string;
}
export interface V0670_pokemon_floetteEntry {
  templateId: "V0670_POKEMON_FLOETTE";
  data: V0670_pokemon_floettedata;
}
export interface V0671_pokemon_florgesdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0671_pokemon_florgesdata {
  pokemonSettings: V0671_pokemon_florgesdatapokemonsettings;
  templateId: string;
}
export interface V0671_pokemon_florgesEntry {
  templateId: "V0671_POKEMON_FLORGES";
  data: V0671_pokemon_florgesdata;
}
export interface V0672_pokemon_skiddodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0672_pokemon_skiddodata {
  pokemonSettings: V0672_pokemon_skiddodatapokemonsettings;
  templateId: string;
}
export interface V0672_pokemon_skiddoEntry {
  templateId: "V0672_POKEMON_SKIDDO";
  data: V0672_pokemon_skiddodata;
}
export interface V0672_pokemon_skiddo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0672_pokemon_skiddo_normaldata {
  pokemonSettings: V0672_pokemon_skiddo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0672_pokemon_skiddo_normalEntry {
  templateId: "V0672_POKEMON_SKIDDO_NORMAL";
  data: V0672_pokemon_skiddo_normaldata;
}
export interface V0673_pokemon_gogoatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0673_pokemon_gogoatdata {
  pokemonSettings: V0673_pokemon_gogoatdatapokemonsettings;
  templateId: string;
}
export interface V0673_pokemon_gogoatEntry {
  templateId: "V0673_POKEMON_GOGOAT";
  data: V0673_pokemon_gogoatdata;
}
export interface V0673_pokemon_gogoat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0673_pokemon_gogoat_normaldata {
  pokemonSettings: V0673_pokemon_gogoat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0673_pokemon_gogoat_normalEntry {
  templateId: "V0673_POKEMON_GOGOAT_NORMAL";
  data: V0673_pokemon_gogoat_normaldata;
}
export interface V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  questDisplay: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0674_pokemon_panchamdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0674_pokemon_panchamdata {
  pokemonSettings: V0674_pokemon_panchamdatapokemonsettings;
  templateId: string;
}
export interface V0674_pokemon_panchamEntry {
  templateId: "V0674_POKEMON_PANCHAM";
  data: V0674_pokemon_panchamdata;
}
export interface V0674_pokemon_pancham_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0674_pokemon_pancham_normaldata {
  pokemonSettings: V0674_pokemon_pancham_normaldatapokemonsettings;
  templateId: string;
}
export interface V0674_pokemon_pancham_normalEntry {
  templateId: "V0674_POKEMON_PANCHAM_NORMAL";
  data: V0674_pokemon_pancham_normaldata;
}
export interface V0675_pokemon_pangorodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0675_pokemon_pangorodata {
  pokemonSettings: V0675_pokemon_pangorodatapokemonsettings;
  templateId: string;
}
export interface V0675_pokemon_pangoroEntry {
  templateId: "V0675_POKEMON_PANGORO";
  data: V0675_pokemon_pangorodata;
}
export interface V0675_pokemon_pangoro_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0675_pokemon_pangoro_normaldata {
  pokemonSettings: V0675_pokemon_pangoro_normaldatapokemonsettings;
  templateId: string;
}
export interface V0675_pokemon_pangoro_normalEntry {
  templateId: "V0675_POKEMON_PANGORO_NORMAL";
  data: V0675_pokemon_pangoro_normaldata;
}
export interface V0676_pokemon_furfroudatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  stardustCost: number;
}
export interface V0676_pokemon_furfroudatapokemonsettings {
  animationTime: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0676_pokemon_furfroudata {
  pokemonSettings: V0676_pokemon_furfroudatapokemonsettings;
  templateId: string;
}
export interface V0676_pokemon_furfrouEntry {
  templateId: "V0676_POKEMON_FURFROU";
  data: V0676_pokemon_furfroudata;
}
export interface V0677_pokemon_espurrdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0677_pokemon_espurrdata {
  pokemonSettings: V0677_pokemon_espurrdatapokemonsettings;
  templateId: string;
}
export interface V0677_pokemon_espurrEntry {
  templateId: "V0677_POKEMON_ESPURR";
  data: V0677_pokemon_espurrdata;
}
export interface V0677_pokemon_espurr_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0677_pokemon_espurr_normaldata {
  pokemonSettings: V0677_pokemon_espurr_normaldatapokemonsettings;
  templateId: string;
}
export interface V0677_pokemon_espurr_normalEntry {
  templateId: "V0677_POKEMON_ESPURR_NORMAL";
  data: V0677_pokemon_espurr_normaldata;
}
export interface V0678_pokemon_meowsticdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0678_pokemon_meowsticdata {
  pokemonSettings: V0678_pokemon_meowsticdatapokemonsettings;
  templateId: string;
}
export interface V0678_pokemon_meowsticEntry {
  templateId: "V0678_POKEMON_MEOWSTIC";
  data: V0678_pokemon_meowsticdata;
}
export interface V0679_pokemon_honedgedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0679_pokemon_honedgedata {
  pokemonSettings: V0679_pokemon_honedgedatapokemonsettings;
  templateId: string;
}
export interface V0679_pokemon_honedgeEntry {
  templateId: "V0679_POKEMON_HONEDGE";
  data: V0679_pokemon_honedgedata;
}
export interface V0679_pokemon_honedge_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0679_pokemon_honedge_normaldata {
  pokemonSettings: V0679_pokemon_honedge_normaldatapokemonsettings;
  templateId: string;
}
export interface V0679_pokemon_honedge_normalEntry {
  templateId: "V0679_POKEMON_HONEDGE_NORMAL";
  data: V0679_pokemon_honedge_normaldata;
}
export interface V0680_pokemon_doubladedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0680_pokemon_doubladedata {
  pokemonSettings: V0680_pokemon_doubladedatapokemonsettings;
  templateId: string;
}
export interface V0680_pokemon_doubladeEntry {
  templateId: "V0680_POKEMON_DOUBLADE";
  data: V0680_pokemon_doubladedata;
}
export interface V0680_pokemon_doublade_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0680_pokemon_doublade_normaldata {
  pokemonSettings: V0680_pokemon_doublade_normaldatapokemonsettings;
  templateId: string;
}
export interface V0680_pokemon_doublade_normalEntry {
  templateId: "V0680_POKEMON_DOUBLADE_NORMAL";
  data: V0680_pokemon_doublade_normaldata;
}
export interface V0681_pokemon_aegislashdatapokemonsettingsibfcalternatetodefaultibfcsettings {
  animationDurationTurns: number;
  animationPlayPoint: string;
  ibfcVfxKey: string;
}
export interface V0681_pokemon_aegislashdatapokemonsettingsibfc {
  alternateForm: string;
  alternateToDefaultIbfcSettings: V0681_pokemon_aegislashdatapokemonsettingsibfcalternatetodefaultibfcsettings;
  combatEnable: boolean;
  defaultForm: string;
  defaultToAlternateIbfcSettings: V0681_pokemon_aegislashdatapokemonsettingsibfcalternatetodefaultibfcsettings;
}
export interface V0681_pokemon_aegislashdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0681_pokemon_aegislashdatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0681_pokemon_aegislashdata {
  pokemonSettings: V0681_pokemon_aegislashdatapokemonsettings;
  templateId: string;
}
export interface V0681_pokemon_aegislashEntry {
  templateId: "V0681_POKEMON_AEGISLASH";
  data: V0681_pokemon_aegislashdata;
}
export interface V0682_pokemon_spritzeedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0682_pokemon_spritzeedata {
  pokemonSettings: V0682_pokemon_spritzeedatapokemonsettings;
  templateId: string;
}
export interface V0682_pokemon_spritzeeEntry {
  templateId: "V0682_POKEMON_SPRITZEE";
  data: V0682_pokemon_spritzeedata;
}
export interface V0682_pokemon_spritzee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0682_pokemon_spritzee_normaldata {
  pokemonSettings: V0682_pokemon_spritzee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0682_pokemon_spritzee_normalEntry {
  templateId: "V0682_POKEMON_SPRITZEE_NORMAL";
  data: V0682_pokemon_spritzee_normaldata;
}
export interface V0684_pokemon_swirlixdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0684_pokemon_swirlixdata {
  pokemonSettings: V0684_pokemon_swirlixdatapokemonsettings;
  templateId: string;
}
export interface V0684_pokemon_swirlixEntry {
  templateId: "V0684_POKEMON_SWIRLIX";
  data: V0684_pokemon_swirlixdata;
}
export interface V0684_pokemon_swirlix_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0684_pokemon_swirlix_normaldata {
  pokemonSettings: V0684_pokemon_swirlix_normaldatapokemonsettings;
  templateId: string;
}
export interface V0684_pokemon_swirlix_normalEntry {
  templateId: "V0684_POKEMON_SWIRLIX_NORMAL";
  data: V0684_pokemon_swirlix_normaldata;
}
export interface V0686_pokemon_inkaydatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  onlyUpsideDown: boolean;
}
export interface V0686_pokemon_inkaydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0686_pokemon_inkaydatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0686_pokemon_inkaydata {
  pokemonSettings: V0686_pokemon_inkaydatapokemonsettings;
  templateId: string;
}
export interface V0686_pokemon_inkayEntry {
  templateId: "V0686_POKEMON_INKAY";
  data: V0686_pokemon_inkaydata;
}
export interface V0686_pokemon_inkay_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  onlyUpsideDown: boolean;
}
export interface V0686_pokemon_inkay_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0686_pokemon_inkay_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0686_pokemon_inkay_normaldata {
  pokemonSettings: V0686_pokemon_inkay_normaldatapokemonsettings;
  templateId: string;
}
export interface V0686_pokemon_inkay_normalEntry {
  templateId: "V0686_POKEMON_INKAY_NORMAL";
  data: V0686_pokemon_inkay_normaldata;
}
export interface V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0687_pokemon_malamardatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0687_pokemon_malamardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0687_pokemon_malamardata {
  pokemonSettings: V0687_pokemon_malamardatapokemonsettings;
  templateId: string;
}
export interface V0687_pokemon_malamarEntry {
  templateId: "V0687_POKEMON_MALAMAR";
  data: V0687_pokemon_malamardata;
}
export interface V0687_pokemon_malamar_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0687_pokemon_malamar_normaldata {
  pokemonSettings: V0687_pokemon_malamar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0687_pokemon_malamar_normalEntry {
  templateId: "V0687_POKEMON_MALAMAR_NORMAL";
  data: V0687_pokemon_malamar_normaldata;
}
export interface V0688_pokemon_binacledatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
}
export interface V0688_pokemon_binacledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0688_pokemon_binacledatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0688_pokemon_binacledata {
  pokemonSettings: V0688_pokemon_binacledatapokemonsettings;
  templateId: string;
}
export interface V0688_pokemon_binacleEntry {
  templateId: "V0688_POKEMON_BINACLE";
  data: V0688_pokemon_binacledata;
}
export interface V0688_pokemon_binacle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0688_pokemon_binacledatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0688_pokemon_binacle_normaldata {
  pokemonSettings: V0688_pokemon_binacle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0688_pokemon_binacle_normalEntry {
  templateId: "V0688_POKEMON_BINACLE_NORMAL";
  data: V0688_pokemon_binacle_normaldata;
}
export interface V0689_pokemon_barbaracledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0689_pokemon_barbaracledata {
  pokemonSettings: V0689_pokemon_barbaracledatapokemonsettings;
  templateId: string;
}
export interface V0689_pokemon_barbaracleEntry {
  templateId: "V0689_POKEMON_BARBARACLE";
  data: V0689_pokemon_barbaracledata;
}
export interface V0689_pokemon_barbaracle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0689_pokemon_barbaracle_normaldata {
  pokemonSettings: V0689_pokemon_barbaracle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0689_pokemon_barbaracle_normalEntry {
  templateId: "V0689_POKEMON_BARBARACLE_NORMAL";
  data: V0689_pokemon_barbaracle_normaldata;
}
export interface V0690_pokemon_skrelpdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0690_pokemon_skrelpdata {
  pokemonSettings: V0690_pokemon_skrelpdatapokemonsettings;
  templateId: string;
}
export interface V0690_pokemon_skrelpEntry {
  templateId: "V0690_POKEMON_SKRELP";
  data: V0690_pokemon_skrelpdata;
}
export interface V0690_pokemon_skrelp_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0690_pokemon_skrelp_normaldata {
  pokemonSettings: V0690_pokemon_skrelp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0690_pokemon_skrelp_normalEntry {
  templateId: "V0690_POKEMON_SKRELP_NORMAL";
  data: V0690_pokemon_skrelp_normaldata;
}
export interface V0691_pokemon_dragalgedatapokemonsettingsencounter {
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
export interface V0691_pokemon_dragalgedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0691_pokemon_dragalgedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0691_pokemon_dragalgedata {
  pokemonSettings: V0691_pokemon_dragalgedatapokemonsettings;
  templateId: string;
}
export interface V0691_pokemon_dragalgeEntry {
  templateId: "V0691_POKEMON_DRAGALGE";
  data: V0691_pokemon_dragalgedata;
}
export interface V0691_pokemon_dragalge_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0691_pokemon_dragalgedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0691_pokemon_dragalge_normaldata {
  pokemonSettings: V0691_pokemon_dragalge_normaldatapokemonsettings;
  templateId: string;
}
export interface V0691_pokemon_dragalge_normalEntry {
  templateId: "V0691_POKEMON_DRAGALGE_NORMAL";
  data: V0691_pokemon_dragalge_normaldata;
}
export interface V0693_pokemon_clawitzerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0693_pokemon_clawitzerdata {
  pokemonSettings: V0693_pokemon_clawitzerdatapokemonsettings;
  templateId: string;
}
export interface V0693_pokemon_clawitzerEntry {
  templateId: "V0693_POKEMON_CLAWITZER";
  data: V0693_pokemon_clawitzerdata;
}
export interface V0693_pokemon_clawitzer_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0693_pokemon_clawitzer_normaldata {
  pokemonSettings: V0693_pokemon_clawitzer_normaldatapokemonsettings;
  templateId: string;
}
export interface V0693_pokemon_clawitzer_normalEntry {
  templateId: "V0693_POKEMON_CLAWITZER_NORMAL";
  data: V0693_pokemon_clawitzer_normaldata;
}
export interface V0694_pokemon_helioptiledatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0694_pokemon_helioptiledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0694_pokemon_helioptiledatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0694_pokemon_helioptiledata {
  pokemonSettings: V0694_pokemon_helioptiledatapokemonsettings;
  templateId: string;
}
export interface V0694_pokemon_helioptileEntry {
  templateId: "V0694_POKEMON_HELIOPTILE";
  data: V0694_pokemon_helioptiledata;
}
export interface V0694_pokemon_helioptile_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0694_pokemon_helioptile_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0694_pokemon_helioptile_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0694_pokemon_helioptile_normaldata {
  pokemonSettings: V0694_pokemon_helioptile_normaldatapokemonsettings;
  templateId: string;
}
export interface V0694_pokemon_helioptile_normalEntry {
  templateId: "V0694_POKEMON_HELIOPTILE_NORMAL";
  data: V0694_pokemon_helioptile_normaldata;
}
export interface V0695_pokemon_helioliskdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0695_pokemon_helioliskdata {
  pokemonSettings: V0695_pokemon_helioliskdatapokemonsettings;
  templateId: string;
}
export interface V0695_pokemon_helioliskEntry {
  templateId: "V0695_POKEMON_HELIOLISK";
  data: V0695_pokemon_helioliskdata;
}
export interface V0695_pokemon_heliolisk_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0695_pokemon_heliolisk_normaldata {
  pokemonSettings: V0695_pokemon_heliolisk_normaldatapokemonsettings;
  templateId: string;
}
export interface V0695_pokemon_heliolisk_normalEntry {
  templateId: "V0695_POKEMON_HELIOLISK_NORMAL";
  data: V0695_pokemon_heliolisk_normaldata;
}
export interface V0696_pokemon_tyruntdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  onlyDaytime: boolean;
}
export interface V0696_pokemon_tyruntdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0696_pokemon_tyruntdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0696_pokemon_tyruntdata {
  pokemonSettings: V0696_pokemon_tyruntdatapokemonsettings;
  templateId: string;
}
export interface V0696_pokemon_tyruntEntry {
  templateId: "V0696_POKEMON_TYRUNT";
  data: V0696_pokemon_tyruntdata;
}
export interface V0696_pokemon_tyrunt_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  onlyDaytime: boolean;
}
export interface V0696_pokemon_tyrunt_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0696_pokemon_tyrunt_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0696_pokemon_tyrunt_normaldata {
  pokemonSettings: V0696_pokemon_tyrunt_normaldatapokemonsettings;
  templateId: string;
}
export interface V0696_pokemon_tyrunt_normalEntry {
  templateId: "V0696_POKEMON_TYRUNT_NORMAL";
  data: V0696_pokemon_tyrunt_normaldata;
}
export interface V0698_pokemon_amauradatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0698_pokemon_amauradatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  onlyNighttime: boolean;
}
export interface V0698_pokemon_amauradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0698_pokemon_amauradatapokemonsettingsencounter;
  evolutionBranch: (V0698_pokemon_amauradatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0698_pokemon_amauradata {
  pokemonSettings: V0698_pokemon_amauradatapokemonsettings;
  templateId: string;
}
export interface V0698_pokemon_amauraEntry {
  templateId: "V0698_POKEMON_AMAURA";
  data: V0698_pokemon_amauradata;
}
export interface V0698_pokemon_amaura_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  onlyNighttime: boolean;
}
export interface V0698_pokemon_amaura_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0698_pokemon_amauradatapokemonsettingsencounter;
  evolutionBranch: (V0698_pokemon_amaura_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0698_pokemon_amaura_normaldata {
  pokemonSettings: V0698_pokemon_amaura_normaldatapokemonsettings;
  templateId: string;
}
export interface V0698_pokemon_amaura_normalEntry {
  templateId: "V0698_POKEMON_AMAURA_NORMAL";
  data: V0698_pokemon_amaura_normaldata;
}
export interface V0700_pokemon_sylveondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0700_pokemon_sylveondata {
  pokemonSettings: V0700_pokemon_sylveondatapokemonsettings;
  templateId: string;
}
export interface V0700_pokemon_sylveonEntry {
  templateId: "V0700_POKEMON_SYLVEON";
  data: V0700_pokemon_sylveondata;
}
export interface V0700_pokemon_sylveon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0700_pokemon_sylveon_normaldata {
  pokemonSettings: V0700_pokemon_sylveon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0700_pokemon_sylveon_normalEntry {
  templateId: "V0700_POKEMON_SYLVEON_NORMAL";
  data: V0700_pokemon_sylveon_normaldata;
}
export interface V0701_pokemon_hawluchadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0701_pokemon_hawluchadata {
  pokemonSettings: V0701_pokemon_hawluchadatapokemonsettings;
  templateId: string;
}
export interface V0701_pokemon_hawluchaEntry {
  templateId: "V0701_POKEMON_HAWLUCHA";
  data: V0701_pokemon_hawluchadata;
}
export interface V0701_pokemon_hawlucha_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0701_pokemon_hawlucha_normaldata {
  pokemonSettings: V0701_pokemon_hawlucha_normaldatapokemonsettings;
  templateId: string;
}
export interface V0701_pokemon_hawlucha_normalEntry {
  templateId: "V0701_POKEMON_HAWLUCHA_NORMAL";
  data: V0701_pokemon_hawlucha_normaldata;
}
export interface V0702_pokemon_dedennedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0702_pokemon_dedennedata {
  pokemonSettings: V0702_pokemon_dedennedatapokemonsettings;
  templateId: string;
}
export interface V0702_pokemon_dedenneEntry {
  templateId: "V0702_POKEMON_DEDENNE";
  data: V0702_pokemon_dedennedata;
}
export interface V0702_pokemon_dedenne_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0702_pokemon_dedenne_normaldata {
  pokemonSettings: V0702_pokemon_dedenne_normaldatapokemonsettings;
  templateId: string;
}
export interface V0702_pokemon_dedenne_normalEntry {
  templateId: "V0702_POKEMON_DEDENNE_NORMAL";
  data: V0702_pokemon_dedenne_normaldata;
}
export interface V0703_pokemon_carbinkdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0703_pokemon_carbinkdata {
  pokemonSettings: V0703_pokemon_carbinkdatapokemonsettings;
  templateId: string;
}
export interface V0703_pokemon_carbinkEntry {
  templateId: "V0703_POKEMON_CARBINK";
  data: V0703_pokemon_carbinkdata;
}
export interface V0703_pokemon_carbink_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0703_pokemon_carbink_normaldata {
  pokemonSettings: V0703_pokemon_carbink_normaldatapokemonsettings;
  templateId: string;
}
export interface V0703_pokemon_carbink_normalEntry {
  templateId: "V0703_POKEMON_CARBINK_NORMAL";
  data: V0703_pokemon_carbink_normaldata;
}
export interface V0704_pokemon_goomydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0704_pokemon_goomydata {
  pokemonSettings: V0704_pokemon_goomydatapokemonsettings;
  templateId: string;
}
export interface V0704_pokemon_goomyEntry {
  templateId: "V0704_POKEMON_GOOMY";
  data: V0704_pokemon_goomydata;
}
export interface V0704_pokemon_goomy_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0704_pokemon_goomy_normaldata {
  pokemonSettings: V0704_pokemon_goomy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0704_pokemon_goomy_normalEntry {
  templateId: "V0704_POKEMON_GOOMY_NORMAL";
  data: V0704_pokemon_goomy_normaldata;
}
export interface V0705_pokemon_sliggoodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  lureItemRequirement: string;
}
export interface V0705_pokemon_sliggoodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0705_pokemon_sliggoodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0705_pokemon_sliggoodata {
  pokemonSettings: V0705_pokemon_sliggoodatapokemonsettings;
  templateId: string;
}
export interface V0705_pokemon_sliggooEntry {
  templateId: "V0705_POKEMON_SLIGGOO";
  data: V0705_pokemon_sliggoodata;
}
export interface V0705_pokemon_sliggoo_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  lureItemRequirement: string;
}
export interface V0705_pokemon_sliggoo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0705_pokemon_sliggoo_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0705_pokemon_sliggoo_normaldata {
  pokemonSettings: V0705_pokemon_sliggoo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0705_pokemon_sliggoo_normalEntry {
  templateId: "V0705_POKEMON_SLIGGOO_NORMAL";
  data: V0705_pokemon_sliggoo_normaldata;
}
export interface V0706_pokemon_goodradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0706_pokemon_goodradata {
  pokemonSettings: V0706_pokemon_goodradatapokemonsettings;
  templateId: string;
}
export interface V0706_pokemon_goodraEntry {
  templateId: "V0706_POKEMON_GOODRA";
  data: V0706_pokemon_goodradata;
}
export interface V0706_pokemon_goodra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0706_pokemon_goodra_normaldata {
  pokemonSettings: V0706_pokemon_goodra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0706_pokemon_goodra_normalEntry {
  templateId: "V0706_POKEMON_GOODRA_NORMAL";
  data: V0706_pokemon_goodra_normaldata;
}
export interface V0707_pokemon_klefkidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0707_pokemon_klefkidata {
  pokemonSettings: V0707_pokemon_klefkidatapokemonsettings;
  templateId: string;
}
export interface V0707_pokemon_klefkiEntry {
  templateId: "V0707_POKEMON_KLEFKI";
  data: V0707_pokemon_klefkidata;
}
export interface V0707_pokemon_klefki_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0707_pokemon_klefki_normaldata {
  pokemonSettings: V0707_pokemon_klefki_normaldatapokemonsettings;
  templateId: string;
}
export interface V0707_pokemon_klefki_normalEntry {
  templateId: "V0707_POKEMON_KLEFKI_NORMAL";
  data: V0707_pokemon_klefki_normaldata;
}
export interface V0708_pokemon_phantumpdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  noCandyCostViaTrade: boolean;
}
export interface V0708_pokemon_phantumpdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0708_pokemon_phantumpdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0708_pokemon_phantumpdata {
  pokemonSettings: V0708_pokemon_phantumpdatapokemonsettings;
  templateId: string;
}
export interface V0708_pokemon_phantumpEntry {
  templateId: "V0708_POKEMON_PHANTUMP";
  data: V0708_pokemon_phantumpdata;
}
export interface V0708_pokemon_phantump_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  noCandyCostViaTrade: boolean;
}
export interface V0708_pokemon_phantump_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0708_pokemon_phantump_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0708_pokemon_phantump_normaldata {
  pokemonSettings: V0708_pokemon_phantump_normaldatapokemonsettings;
  templateId: string;
}
export interface V0708_pokemon_phantump_normalEntry {
  templateId: "V0708_POKEMON_PHANTUMP_NORMAL";
  data: V0708_pokemon_phantump_normaldata;
}
export interface V0709_pokemon_trevenantdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusCandyCaptureReward: number;
  bonusStardustCaptureReward: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0709_pokemon_trevenantdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0709_pokemon_trevenantdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0709_pokemon_trevenantdata {
  pokemonSettings: V0709_pokemon_trevenantdatapokemonsettings;
  templateId: string;
}
export interface V0709_pokemon_trevenantEntry {
  templateId: "V0709_POKEMON_TREVENANT";
  data: V0709_pokemon_trevenantdata;
}
export interface V0709_pokemon_trevenant_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0709_pokemon_trevenantdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  shadow: V0654_pokemon_braixendatapokemonsettingsshadow;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0709_pokemon_trevenant_normaldata {
  pokemonSettings: V0709_pokemon_trevenant_normaldatapokemonsettings;
  templateId: string;
}
export interface V0709_pokemon_trevenant_normalEntry {
  templateId: "V0709_POKEMON_TREVENANT_NORMAL";
  data: V0709_pokemon_trevenant_normaldata;
}
export interface V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  noCandyCostViaTrade: boolean;
}
export interface V0710_pokemon_pumpkaboodatapokemonsettingssizesettings {
  disablePokedexRecordDisplayForForms: boolean;
  mLowerBound: number;
  mUpperBound: number;
  xlScaleMultiplier: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xsScaleMultiplier: number;
  xxlScaleMultiplier: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
  xxsScaleMultiplier: number;
}
export interface V0710_pokemon_pumpkaboodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  sizeSettings: V0710_pokemon_pumpkaboodatapokemonsettingssizesettings;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0710_pokemon_pumpkaboodata {
  pokemonSettings: V0710_pokemon_pumpkaboodatapokemonsettings;
  templateId: string;
}
export interface V0710_pokemon_pumpkabooEntry {
  templateId: "V0710_POKEMON_PUMPKABOO";
  data: V0710_pokemon_pumpkaboodata;
}
export interface V0710_pokemon_pumpkaboo_superdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  sizeSettings: V0710_pokemon_pumpkaboodatapokemonsettingssizesettings;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0710_pokemon_pumpkaboo_superdata {
  pokemonSettings: V0710_pokemon_pumpkaboo_superdatapokemonsettings;
  templateId: string;
}
export interface V0710_pokemon_pumpkaboo_superEntry {
  templateId: "V0710_POKEMON_PUMPKABOO_SUPER";
  data: V0710_pokemon_pumpkaboo_superdata;
}
export interface V0711_pokemon_gourgeistdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  sizeSettings: V0710_pokemon_pumpkaboodatapokemonsettingssizesettings;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0711_pokemon_gourgeistdata {
  pokemonSettings: V0711_pokemon_gourgeistdatapokemonsettings;
  templateId: string;
}
export interface V0711_pokemon_gourgeistEntry {
  templateId: "V0711_POKEMON_GOURGEIST";
  data: V0711_pokemon_gourgeistdata;
}
export interface V0711_pokemon_gourgeist_superdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  sizeSettings: V0710_pokemon_pumpkaboodatapokemonsettingssizesettings;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0711_pokemon_gourgeist_superdata {
  pokemonSettings: V0711_pokemon_gourgeist_superdatapokemonsettings;
  templateId: string;
}
export interface V0711_pokemon_gourgeist_superEntry {
  templateId: "V0711_POKEMON_GOURGEIST_SUPER";
  data: V0711_pokemon_gourgeist_superdata;
}
export interface V0712_pokemon_bergmitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0712_pokemon_bergmitedata {
  pokemonSettings: V0712_pokemon_bergmitedatapokemonsettings;
  templateId: string;
}
export interface V0712_pokemon_bergmiteEntry {
  templateId: "V0712_POKEMON_BERGMITE";
  data: V0712_pokemon_bergmitedata;
}
export interface V0712_pokemon_bergmite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0669_pokemon_flabebedatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0712_pokemon_bergmite_normaldata {
  pokemonSettings: V0712_pokemon_bergmite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0712_pokemon_bergmite_normalEntry {
  templateId: "V0712_POKEMON_BERGMITE_NORMAL";
  data: V0712_pokemon_bergmite_normaldata;
}
export interface V0713_pokemon_avaluggdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0713_pokemon_avaluggdata {
  pokemonSettings: V0713_pokemon_avaluggdatapokemonsettings;
  templateId: string;
}
export interface V0713_pokemon_avaluggEntry {
  templateId: "V0713_POKEMON_AVALUGG";
  data: V0713_pokemon_avaluggdata;
}
export interface V0713_pokemon_avalugg_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0713_pokemon_avalugg_hisuiandata {
  pokemonSettings: V0713_pokemon_avalugg_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0713_pokemon_avalugg_hisuianEntry {
  templateId: "V0713_POKEMON_AVALUGG_HISUIAN";
  data: V0713_pokemon_avalugg_hisuiandata;
}
export interface V0713_pokemon_avalugg_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0713_pokemon_avalugg_normaldata {
  pokemonSettings: V0713_pokemon_avalugg_normaldatapokemonsettings;
  templateId: string;
}
export interface V0713_pokemon_avalugg_normalEntry {
  templateId: "V0713_POKEMON_AVALUGG_NORMAL";
  data: V0713_pokemon_avalugg_normaldata;
}
export interface V0714_pokemon_noibatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0665_pokemon_spewpadatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0714_pokemon_noibatdata {
  pokemonSettings: V0714_pokemon_noibatdatapokemonsettings;
  templateId: string;
}
export interface V0714_pokemon_noibatEntry {
  templateId: "V0714_POKEMON_NOIBAT";
  data: V0714_pokemon_noibatdata;
}
export interface V0714_pokemon_noibat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0669_pokemon_flabebedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0714_pokemon_noibat_normaldata {
  pokemonSettings: V0714_pokemon_noibat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0714_pokemon_noibat_normalEntry {
  templateId: "V0714_POKEMON_NOIBAT_NORMAL";
  data: V0714_pokemon_noibat_normaldata;
}
export interface V0715_pokemon_noiverndatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0691_pokemon_dragalgedatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0715_pokemon_noiverndata {
  pokemonSettings: V0715_pokemon_noiverndatapokemonsettings;
  templateId: string;
}
export interface V0715_pokemon_noivernEntry {
  templateId: "V0715_POKEMON_NOIVERN";
  data: V0715_pokemon_noiverndata;
}
export interface V0715_pokemon_noivern_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0691_pokemon_dragalgedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0715_pokemon_noivern_normaldata {
  pokemonSettings: V0715_pokemon_noivern_normaldatapokemonsettings;
  templateId: string;
}
export interface V0715_pokemon_noivern_normalEntry {
  templateId: "V0715_POKEMON_NOIVERN_NORMAL";
  data: V0715_pokemon_noivern_normaldata;
}
export interface V0716_pokemon_xerneasdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0716_pokemon_xerneasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0716_pokemon_xerneasdata {
  pokemonSettings: V0716_pokemon_xerneasdatapokemonsettings;
  templateId: string;
}
export interface V0716_pokemon_xerneasEntry {
  templateId: "V0716_POKEMON_XERNEAS";
  data: V0716_pokemon_xerneasdata;
}
export interface V0716_pokemon_xerneas_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0716_pokemon_xerneas_normaldata {
  pokemonSettings: V0716_pokemon_xerneas_normaldatapokemonsettings;
  templateId: string;
}
export interface V0716_pokemon_xerneas_normalEntry {
  templateId: "V0716_POKEMON_XERNEAS_NORMAL";
  data: V0716_pokemon_xerneas_normaldata;
}
export interface V0717_pokemon_yveltaldatapokemonsettingsencounter {
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
export interface V0717_pokemon_yveltaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0717_pokemon_yveltaldatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0717_pokemon_yveltaldata {
  pokemonSettings: V0717_pokemon_yveltaldatapokemonsettings;
  templateId: string;
}
export interface V0717_pokemon_yveltalEntry {
  templateId: "V0717_POKEMON_YVELTAL";
  data: V0717_pokemon_yveltaldata;
}
export interface V0717_pokemon_yveltal_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0717_pokemon_yveltaldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0717_pokemon_yveltal_normaldata {
  pokemonSettings: V0717_pokemon_yveltal_normaldatapokemonsettings;
  templateId: string;
}
export interface V0717_pokemon_yveltal_normalEntry {
  templateId: "V0717_POKEMON_YVELTAL_NORMAL";
  data: V0717_pokemon_yveltal_normaldata;
}
export interface V0718_pokemon_zygardedatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeProbability: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
}
export interface V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem {
  evolution: string;
  evolutionItemRequirement: string;
  evolutionItemRequirementCost: number;
  form: string;
}
export interface V0718_pokemon_zygardedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygardedata {
  pokemonSettings: V0718_pokemon_zygardedatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygardeEntry {
  templateId: "V0718_POKEMON_ZYGARDE";
  data: V0718_pokemon_zygardedata;
}
export interface V0718_pokemon_zygarde_completedatapokemonsettingsexclusivekeyitem {
  count: number;
  item: string;
}
export interface V0718_pokemon_zygarde_completedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  exclusiveKeyItem: V0718_pokemon_zygarde_completedatapokemonsettingsexclusivekeyitem;
  familyId: string;
  form: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygarde_completedata {
  pokemonSettings: V0718_pokemon_zygarde_completedatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygarde_completeEntry {
  templateId: "V0718_POKEMON_ZYGARDE_COMPLETE";
  data: V0718_pokemon_zygarde_completedata;
}
export interface V0718_pokemon_zygarde_complete_fifty_percentdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost?: number;
  item?: string;
  itemCostCount?: number;
  stardustCost?: number;
}
export interface V0718_pokemon_zygarde_complete_fifty_percentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0718_pokemon_zygarde_complete_fifty_percentdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygarde_complete_fifty_percentdata {
  pokemonSettings: V0718_pokemon_zygarde_complete_fifty_percentdatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygarde_complete_fifty_percentEntry {
  templateId: "V0718_POKEMON_ZYGARDE_COMPLETE_FIFTY_PERCENT";
  data: V0718_pokemon_zygarde_complete_fifty_percentdata;
}
export interface V0718_pokemon_zygarde_complete_ten_percentdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  item: string;
  itemCostCount: number;
}
export interface V0718_pokemon_zygarde_complete_ten_percentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0718_pokemon_zygarde_complete_ten_percentdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygarde_complete_ten_percentdata {
  pokemonSettings: V0718_pokemon_zygarde_complete_ten_percentdatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygarde_complete_ten_percentEntry {
  templateId: "V0718_POKEMON_ZYGARDE_COMPLETE_TEN_PERCENT";
  data: V0718_pokemon_zygarde_complete_ten_percentdata;
}
export interface V0718_pokemon_zygarde_fifty_percentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygarde_fifty_percentdata {
  pokemonSettings: V0718_pokemon_zygarde_fifty_percentdatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygarde_fifty_percentEntry {
  templateId: "V0718_POKEMON_ZYGARDE_FIFTY_PERCENT";
  data: V0718_pokemon_zygarde_fifty_percentdata;
}
export interface V0718_pokemon_zygarde_ten_percentdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0718_pokemon_zygarde_ten_percentdata {
  pokemonSettings: V0718_pokemon_zygarde_ten_percentdatapokemonsettings;
  templateId: string;
}
export interface V0718_pokemon_zygarde_ten_percentEntry {
  templateId: "V0718_POKEMON_ZYGARDE_TEN_PERCENT";
  data: V0718_pokemon_zygarde_ten_percentdata;
}
export interface V0719_pokemon_dianciedatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
}
export interface V0719_pokemon_dianciedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0719_pokemon_dianciedatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0719_pokemon_dianciedata {
  pokemonSettings: V0719_pokemon_dianciedatapokemonsettings;
  templateId: string;
}
export interface V0719_pokemon_diancieEntry {
  templateId: "V0719_POKEMON_DIANCIE";
  data: V0719_pokemon_dianciedata;
}
export interface V0719_pokemon_diancie_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0719_pokemon_dianciedatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0719_pokemon_diancie_normaldata {
  pokemonSettings: V0719_pokemon_diancie_normaldatapokemonsettings;
  templateId: string;
}
export interface V0719_pokemon_diancie_normalEntry {
  templateId: "V0719_POKEMON_DIANCIE_NORMAL";
  data: V0719_pokemon_diancie_normaldata;
}
export interface V0720_pokemon_hoopadatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  bonusXlCandyCaptureReward: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  movementType: string;
}
export interface V0720_pokemon_hoopadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0720_pokemon_hoopadatapokemonsettingsencounter;
  familyId: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0720_pokemon_hoopadata {
  pokemonSettings: V0720_pokemon_hoopadatapokemonsettings;
  templateId: string;
}
export interface V0720_pokemon_hoopaEntry {
  templateId: "V0720_POKEMON_HOOPA";
  data: V0720_pokemon_hoopadata;
}
export interface V0720_pokemon_hoopa_confineddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0717_pokemon_yveltaldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0720_pokemon_hoopa_confineddata {
  pokemonSettings: V0720_pokemon_hoopa_confineddatapokemonsettings;
  templateId: string;
}
export interface V0720_pokemon_hoopa_confinedEntry {
  templateId: "V0720_POKEMON_HOOPA_CONFINED";
  data: V0720_pokemon_hoopa_confineddata;
}
export interface V0720_pokemon_hoopa_unbounddatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
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
  movementType: string;
}
export interface V0720_pokemon_hoopa_unbounddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0720_pokemon_hoopa_unbounddatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
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
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0720_pokemon_hoopa_unbounddata {
  pokemonSettings: V0720_pokemon_hoopa_unbounddatapokemonsettings;
  templateId: string;
}
export interface V0720_pokemon_hoopa_unboundEntry {
  templateId: "V0720_POKEMON_HOOPA_UNBOUND";
  data: V0720_pokemon_hoopa_unbounddata;
}
export interface V0721_pokemon_volcaniondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0721_pokemon_volcaniondata {
  pokemonSettings: V0721_pokemon_volcaniondatapokemonsettings;
  templateId: string;
}
export interface V0721_pokemon_volcanionEntry {
  templateId: "V0721_POKEMON_VOLCANION";
  data: V0721_pokemon_volcaniondata;
}
export interface V0721_pokemon_volcanion_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0654_pokemon_braixendatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0654_pokemon_braixendatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0654_pokemon_braixendatapokemonsettingsstats;
  thirdMove: V0654_pokemon_braixendatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0721_pokemon_volcanion_normaldata {
  pokemonSettings: V0721_pokemon_volcanion_normaldatapokemonsettings;
  templateId: string;
}
export interface V0721_pokemon_volcanion_normalEntry {
  templateId: "V0721_POKEMON_VOLCANION_NORMAL";
  data: V0721_pokemon_volcanion_normaldata;
}

export type PokemonSettingsChespin = PokemonSettingsShared942<"V0650_POKEMON_CHESPIN", "CHESPIN">;
export type PokemonSettingsFennekin = PokemonSettingsShared942<"V0653_POKEMON_FENNEKIN", "FENNEKIN">;

export type PokemonSettingsChespinNormal = PokemonSettingsShared943<"V0650_POKEMON_CHESPIN_NORMAL", "CHESPIN_NORMAL", "CHESPIN">;
export type PokemonSettingsFennekinNormal = PokemonSettingsShared943<"V0653_POKEMON_FENNEKIN_NORMAL", "FENNEKIN_NORMAL", "FENNEKIN">;

export type PokemonSettingsQuilladin = PokemonSettingsShared944<"V0651_POKEMON_QUILLADIN", "QUILLADIN">;
export type PokemonSettingsFrogadier = PokemonSettingsShared944<"V0657_POKEMON_FROGADIER", "FROGADIER">;

export type PokemonSettingsQuilladinNormal = PokemonSettingsShared945<"V0651_POKEMON_QUILLADIN_NORMAL", "QUILLADIN_NORMAL", "QUILLADIN">;
export type PokemonSettingsFrogadierNormal = PokemonSettingsShared945<"V0657_POKEMON_FROGADIER_NORMAL", "FROGADIER_NORMAL", "FROGADIER">;

export type PokemonSettingsChesnaught = PokemonSettingsShared946<"V0652_POKEMON_CHESNAUGHT", "CHESNAUGHT">;
export type PokemonSettingsDelphox = PokemonSettingsShared946<"V0655_POKEMON_DELPHOX", "DELPHOX">;

export type PokemonSettingsChesnaughtNormal = PokemonSettingsShared947<"V0652_POKEMON_CHESNAUGHT_NORMAL", "CHESNAUGHT_NORMAL", "CHESNAUGHT">;
export type PokemonSettingsDelphoxNormal = PokemonSettingsShared947<"V0655_POKEMON_DELPHOX_NORMAL", "DELPHOX_NORMAL", "DELPHOX">;

export type PokemonSettingsScatterbug = PokemonSettingsShared964<"V0664_POKEMON_SCATTERBUG", "SCATTERBUG">;
export type PokemonSettingsClauncher = PokemonSettingsShared964<"V0692_POKEMON_CLAUNCHER", "CLAUNCHER">;

export type PokemonSettingsScatterbugArchipelago = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_ARCHIPELAGO", "SCATTERBUG_ARCHIPELAGO", "SCATTERBUG">;
export type PokemonSettingsScatterbugContinental = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_CONTINENTAL", "SCATTERBUG_CONTINENTAL", "SCATTERBUG">;
export type PokemonSettingsScatterbugElegant = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_ELEGANT", "SCATTERBUG_ELEGANT", "SCATTERBUG">;
export type PokemonSettingsScatterbugFancy = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_FANCY", "SCATTERBUG_FANCY", "SCATTERBUG">;
export type PokemonSettingsScatterbugGarden = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_GARDEN", "SCATTERBUG_GARDEN", "SCATTERBUG">;
export type PokemonSettingsScatterbugHighPlains = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_HIGH_PLAINS", "SCATTERBUG_HIGH_PLAINS", "SCATTERBUG">;
export type PokemonSettingsScatterbugIcySnow = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_ICY_SNOW", "SCATTERBUG_ICY_SNOW", "SCATTERBUG">;
export type PokemonSettingsScatterbugJungle = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_JUNGLE", "SCATTERBUG_JUNGLE", "SCATTERBUG">;
export type PokemonSettingsScatterbugMarine = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_MARINE", "SCATTERBUG_MARINE", "SCATTERBUG">;
export type PokemonSettingsScatterbugMeadow = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_MEADOW", "SCATTERBUG_MEADOW", "SCATTERBUG">;
export type PokemonSettingsScatterbugModern = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_MODERN", "SCATTERBUG_MODERN", "SCATTERBUG">;
export type PokemonSettingsScatterbugMonsoon = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_MONSOON", "SCATTERBUG_MONSOON", "SCATTERBUG">;
export type PokemonSettingsScatterbugOcean = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_OCEAN", "SCATTERBUG_OCEAN", "SCATTERBUG">;
export type PokemonSettingsScatterbugPokeball = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_POKEBALL", "SCATTERBUG_POKEBALL", "SCATTERBUG">;
export type PokemonSettingsScatterbugPolar = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_POLAR", "SCATTERBUG_POLAR", "SCATTERBUG">;
export type PokemonSettingsScatterbugRiver = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_RIVER", "SCATTERBUG_RIVER", "SCATTERBUG">;
export type PokemonSettingsScatterbugSandstorm = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_SANDSTORM", "SCATTERBUG_SANDSTORM", "SCATTERBUG">;
export type PokemonSettingsScatterbugSavanna = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_SAVANNA", "SCATTERBUG_SAVANNA", "SCATTERBUG">;
export type PokemonSettingsScatterbugSun = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_SUN", "SCATTERBUG_SUN", "SCATTERBUG">;
export type PokemonSettingsScatterbugTundra = PokemonSettingsShared965<"V0664_POKEMON_SCATTERBUG_TUNDRA", "SCATTERBUG_TUNDRA", "SCATTERBUG">;
export type PokemonSettingsClauncherNormal = PokemonSettingsShared965<"V0692_POKEMON_CLAUNCHER_NORMAL", "CLAUNCHER_NORMAL", "CLAUNCHER">;

export type PokemonSettingsArchipelago = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_ARCHIPELAGO", "SPEWPA_ARCHIPELAGO">;
export type PokemonSettingsContinental = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_CONTINENTAL", "SPEWPA_CONTINENTAL">;
export type PokemonSettingsElegant = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_ELEGANT", "SPEWPA_ELEGANT">;
export type PokemonSettingsFancy = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_FANCY", "SPEWPA_FANCY">;
export type PokemonSettingsGarden = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_GARDEN", "SPEWPA_GARDEN">;
export type PokemonSettingsHighPlains = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_HIGH_PLAINS", "SPEWPA_HIGH_PLAINS">;
export type PokemonSettingsIcySnow = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_ICY_SNOW", "SPEWPA_ICY_SNOW">;
export type PokemonSettingsJungle = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_JUNGLE", "SPEWPA_JUNGLE">;
export type PokemonSettingsMarine = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_MARINE", "SPEWPA_MARINE">;
export type PokemonSettingsMeadow = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_MEADOW", "SPEWPA_MEADOW">;
export type PokemonSettingsModern = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_MODERN", "SPEWPA_MODERN">;
export type PokemonSettingsMonsoon = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_MONSOON", "SPEWPA_MONSOON">;
export type PokemonSettingsOcean = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_OCEAN", "SPEWPA_OCEAN">;
export type PokemonSettingsPokeball = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_POKEBALL", "SPEWPA_POKEBALL">;
export type PokemonSettingsPolar = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_POLAR", "SPEWPA_POLAR">;
export type PokemonSettingsRiver = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_RIVER", "SPEWPA_RIVER">;
export type PokemonSettingsSandstorm = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_SANDSTORM", "SPEWPA_SANDSTORM">;
export type PokemonSettingsSavanna = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_SAVANNA", "SPEWPA_SAVANNA">;
export type PokemonSettingsSun = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_SUN", "SPEWPA_SUN">;
export type PokemonSettingsTundra = PokemonSettingsShared967<"V0665_POKEMON_SPEWPA_TUNDRA", "SPEWPA_TUNDRA">;

export type PokemonSettingsArchipelago2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_ARCHIPELAGO", "VIVILLON_ARCHIPELAGO">;
export type PokemonSettingsContinental2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_CONTINENTAL", "VIVILLON_CONTINENTAL">;
export type PokemonSettingsElegant2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_ELEGANT", "VIVILLON_ELEGANT">;
export type PokemonSettingsFancy2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_FANCY", "VIVILLON_FANCY">;
export type PokemonSettingsGarden2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_GARDEN", "VIVILLON_GARDEN">;
export type PokemonSettingsHighPlains2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_HIGH_PLAINS", "VIVILLON_HIGH_PLAINS">;
export type PokemonSettingsIcySnow2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_ICY_SNOW", "VIVILLON_ICY_SNOW">;
export type PokemonSettingsJungle2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_JUNGLE", "VIVILLON_JUNGLE">;
export type PokemonSettingsMarine2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_MARINE", "VIVILLON_MARINE">;
export type PokemonSettingsMeadow2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_MEADOW", "VIVILLON_MEADOW">;
export type PokemonSettingsModern2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_MODERN", "VIVILLON_MODERN">;
export type PokemonSettingsMonsoon2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_MONSOON", "VIVILLON_MONSOON">;
export type PokemonSettingsOcean2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_OCEAN", "VIVILLON_OCEAN">;
export type PokemonSettingsPokeball2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_POKEBALL", "VIVILLON_POKEBALL">;
export type PokemonSettingsPolar2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_POLAR", "VIVILLON_POLAR">;
export type PokemonSettingsRiver2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_RIVER", "VIVILLON_RIVER">;
export type PokemonSettingsSandstorm2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_SANDSTORM", "VIVILLON_SANDSTORM">;
export type PokemonSettingsSavanna2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_SAVANNA", "VIVILLON_SAVANNA">;
export type PokemonSettingsSun2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_SUN", "VIVILLON_SUN">;
export type PokemonSettingsTundra2 = PokemonSettingsShared969<"V0666_POKEMON_VIVILLON_TUNDRA", "VIVILLON_TUNDRA">;

export type PokemonSettingsFemale = PokemonSettingsShared973<"V0668_POKEMON_PYROAR_FEMALE", "PYROAR_FEMALE">;
export type PokemonSettingsNormal = PokemonSettingsShared973<"V0668_POKEMON_PYROAR_NORMAL", "PYROAR_NORMAL">;

export type PokemonSettingsBlue = PokemonSettingsShared975<"V0669_POKEMON_FLABEBE_BLUE", "FLABEBE_BLUE">;
export type PokemonSettingsOrange = PokemonSettingsShared975<"V0669_POKEMON_FLABEBE_ORANGE", "FLABEBE_ORANGE">;
export type PokemonSettingsRed = PokemonSettingsShared975<"V0669_POKEMON_FLABEBE_RED", "FLABEBE_RED">;
export type PokemonSettingsWhite = PokemonSettingsShared975<"V0669_POKEMON_FLABEBE_WHITE", "FLABEBE_WHITE">;
export type PokemonSettingsYellow = PokemonSettingsShared975<"V0669_POKEMON_FLABEBE_YELLOW", "FLABEBE_YELLOW">;

export type PokemonSettingsBlue2 = PokemonSettingsShared977<"V0670_POKEMON_FLOETTE_BLUE", "FLOETTE_BLUE">;
export type PokemonSettingsOrange2 = PokemonSettingsShared977<"V0670_POKEMON_FLOETTE_ORANGE", "FLOETTE_ORANGE">;
export type PokemonSettingsRed2 = PokemonSettingsShared977<"V0670_POKEMON_FLOETTE_RED", "FLOETTE_RED">;
export type PokemonSettingsWhite2 = PokemonSettingsShared977<"V0670_POKEMON_FLOETTE_WHITE", "FLOETTE_WHITE">;
export type PokemonSettingsYellow2 = PokemonSettingsShared977<"V0670_POKEMON_FLOETTE_YELLOW", "FLOETTE_YELLOW">;

export type PokemonSettingsBlue3 = PokemonSettingsShared979<"V0671_POKEMON_FLORGES_BLUE", "FLORGES_BLUE">;
export type PokemonSettingsOrange3 = PokemonSettingsShared979<"V0671_POKEMON_FLORGES_ORANGE", "FLORGES_ORANGE">;
export type PokemonSettingsRed3 = PokemonSettingsShared979<"V0671_POKEMON_FLORGES_RED", "FLORGES_RED">;
export type PokemonSettingsWhite3 = PokemonSettingsShared979<"V0671_POKEMON_FLORGES_WHITE", "FLORGES_WHITE">;
export type PokemonSettingsYellow3 = PokemonSettingsShared979<"V0671_POKEMON_FLORGES_YELLOW", "FLORGES_YELLOW">;

export type PokemonSettingsDandy = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_DANDY", "FURFROU_DANDY">;
export type PokemonSettingsDebutante = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_DEBUTANTE", "FURFROU_DEBUTANTE">;
export type PokemonSettingsDiamond = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_DIAMOND", "FURFROU_DIAMOND">;
export type PokemonSettingsHeart = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_HEART", "FURFROU_HEART">;
export type PokemonSettingsKabuki = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_KABUKI", "FURFROU_KABUKI">;
export type PokemonSettingsLaReine = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_LA_REINE", "FURFROU_LA_REINE">;
export type PokemonSettingsMatron = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_MATRON", "FURFROU_MATRON">;
export type PokemonSettingsNatural = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_NATURAL", "FURFROU_NATURAL">;
export type PokemonSettingsPharaoh = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_PHARAOH", "FURFROU_PHARAOH">;
export type PokemonSettingsStar = PokemonSettingsShared989<"V0676_POKEMON_FURFROU_STAR", "FURFROU_STAR">;

export type PokemonSettingsFemale2 = PokemonSettingsShared993<"V0678_POKEMON_MEOWSTIC_FEMALE", "MEOWSTIC_FEMALE">;
export type PokemonSettingsNormal2 = PokemonSettingsShared993<"V0678_POKEMON_MEOWSTIC_NORMAL", "MEOWSTIC_NORMAL">;

export type PokemonSettingsBlade = PokemonSettingsShared999<"V0681_POKEMON_AEGISLASH_BLADE", "AEGISLASH_BLADE">;
export type PokemonSettingsShield = PokemonSettingsShared999<"V0681_POKEMON_AEGISLASH_SHIELD", "AEGISLASH_SHIELD">;

export type PokemonSettingsAromatisse = PokemonSettingsShared1002<"V0683_POKEMON_AROMATISSE", "AROMATISSE">;
export type PokemonSettingsSlurpuff = PokemonSettingsShared1002<"V0685_POKEMON_SLURPUFF", "SLURPUFF">;

export type PokemonSettingsAromatisseNormal = PokemonSettingsShared1003<"V0683_POKEMON_AROMATISSE_NORMAL", "AROMATISSE_NORMAL", "AROMATISSE">;
export type PokemonSettingsSlurpuffNormal = PokemonSettingsShared1003<"V0685_POKEMON_SLURPUFF_NORMAL", "SLURPUFF_NORMAL", "SLURPUFF">;

export type PokemonSettingsTyrantrum = PokemonSettingsShared1026<"V0697_POKEMON_TYRANTRUM", "TYRANTRUM">;
export type PokemonSettingsAurorus = PokemonSettingsShared1026<"V0699_POKEMON_AURORUS", "AURORUS">;

export type PokemonSettingsTyrantrumNormal = PokemonSettingsShared1027<"V0697_POKEMON_TYRANTRUM_NORMAL", "TYRANTRUM_NORMAL", "TYRANTRUM">;
export type PokemonSettingsAurorusNormal = PokemonSettingsShared1027<"V0699_POKEMON_AURORUS_NORMAL", "AURORUS_NORMAL", "AURORUS">;

export type PokemonSettingsAverage = PokemonSettingsShared1051<"V0710_POKEMON_PUMPKABOO_AVERAGE", "PUMPKABOO_AVERAGE">;
export type PokemonSettingsLarge = PokemonSettingsShared1051<"V0710_POKEMON_PUMPKABOO_LARGE", "PUMPKABOO_LARGE">;
export type PokemonSettingsSmall = PokemonSettingsShared1051<"V0710_POKEMON_PUMPKABOO_SMALL", "PUMPKABOO_SMALL">;

export type PokemonSettingsAverage2 = PokemonSettingsShared1054<"V0711_POKEMON_GOURGEIST_AVERAGE", "GOURGEIST_AVERAGE">;
export type PokemonSettingsLarge2 = PokemonSettingsShared1054<"V0711_POKEMON_GOURGEIST_LARGE", "GOURGEIST_LARGE">;
export type PokemonSettingsSmall2 = PokemonSettingsShared1054<"V0711_POKEMON_GOURGEIST_SMALL", "GOURGEIST_SMALL">;

export interface PokemonSettingsGen6MasterfileByTemplateId {
  "V0650_POKEMON_CHESPIN": PokemonSettingsChespin;
  "V0653_POKEMON_FENNEKIN": PokemonSettingsFennekin;
  "V0650_POKEMON_CHESPIN_NORMAL": PokemonSettingsChespinNormal;
  "V0653_POKEMON_FENNEKIN_NORMAL": PokemonSettingsFennekinNormal;
  "V0651_POKEMON_QUILLADIN": PokemonSettingsQuilladin;
  "V0657_POKEMON_FROGADIER": PokemonSettingsFrogadier;
  "V0651_POKEMON_QUILLADIN_NORMAL": PokemonSettingsQuilladinNormal;
  "V0657_POKEMON_FROGADIER_NORMAL": PokemonSettingsFrogadierNormal;
  "V0652_POKEMON_CHESNAUGHT": PokemonSettingsChesnaught;
  "V0655_POKEMON_DELPHOX": PokemonSettingsDelphox;
  "V0652_POKEMON_CHESNAUGHT_NORMAL": PokemonSettingsChesnaughtNormal;
  "V0655_POKEMON_DELPHOX_NORMAL": PokemonSettingsDelphoxNormal;
  "V0654_POKEMON_BRAIXEN": V0654_pokemon_braixenEntry;
  "V0654_POKEMON_BRAIXEN_NORMAL": V0654_pokemon_braixen_normalEntry;
  "V0656_POKEMON_FROAKIE": V0656_pokemon_froakieEntry;
  "V0656_POKEMON_FROAKIE_NORMAL": V0656_pokemon_froakie_normalEntry;
  "V0658_POKEMON_GRENINJA": V0658_pokemon_greninjaEntry;
  "V0658_POKEMON_GRENINJA_NORMAL": V0658_pokemon_greninja_normalEntry;
  "V0659_POKEMON_BUNNELBY": V0659_pokemon_bunnelbyEntry;
  "V0659_POKEMON_BUNNELBY_NORMAL": V0659_pokemon_bunnelby_normalEntry;
  "V0660_POKEMON_DIGGERSBY": V0660_pokemon_diggersbyEntry;
  "V0660_POKEMON_DIGGERSBY_NORMAL": V0660_pokemon_diggersby_normalEntry;
  "V0661_POKEMON_FLETCHLING": V0661_pokemon_fletchlingEntry;
  "V0661_POKEMON_FLETCHLING_NORMAL": V0661_pokemon_fletchling_normalEntry;
  "V0662_POKEMON_FLETCHINDER": V0662_pokemon_fletchinderEntry;
  "V0662_POKEMON_FLETCHINDER_NORMAL": V0662_pokemon_fletchinder_normalEntry;
  "V0663_POKEMON_TALONFLAME": V0663_pokemon_talonflameEntry;
  "V0663_POKEMON_TALONFLAME_NORMAL": V0663_pokemon_talonflame_normalEntry;
  "V0664_POKEMON_SCATTERBUG": PokemonSettingsScatterbug;
  "V0692_POKEMON_CLAUNCHER": PokemonSettingsClauncher;
  "V0664_POKEMON_SCATTERBUG_ARCHIPELAGO": PokemonSettingsScatterbugArchipelago;
  "V0664_POKEMON_SCATTERBUG_CONTINENTAL": PokemonSettingsScatterbugContinental;
  "V0664_POKEMON_SCATTERBUG_ELEGANT": PokemonSettingsScatterbugElegant;
  "V0664_POKEMON_SCATTERBUG_FANCY": PokemonSettingsScatterbugFancy;
  "V0664_POKEMON_SCATTERBUG_GARDEN": PokemonSettingsScatterbugGarden;
  "V0664_POKEMON_SCATTERBUG_HIGH_PLAINS": PokemonSettingsScatterbugHighPlains;
  "V0664_POKEMON_SCATTERBUG_ICY_SNOW": PokemonSettingsScatterbugIcySnow;
  "V0664_POKEMON_SCATTERBUG_JUNGLE": PokemonSettingsScatterbugJungle;
  "V0664_POKEMON_SCATTERBUG_MARINE": PokemonSettingsScatterbugMarine;
  "V0664_POKEMON_SCATTERBUG_MEADOW": PokemonSettingsScatterbugMeadow;
  "V0664_POKEMON_SCATTERBUG_MODERN": PokemonSettingsScatterbugModern;
  "V0664_POKEMON_SCATTERBUG_MONSOON": PokemonSettingsScatterbugMonsoon;
  "V0664_POKEMON_SCATTERBUG_OCEAN": PokemonSettingsScatterbugOcean;
  "V0664_POKEMON_SCATTERBUG_POKEBALL": PokemonSettingsScatterbugPokeball;
  "V0664_POKEMON_SCATTERBUG_POLAR": PokemonSettingsScatterbugPolar;
  "V0664_POKEMON_SCATTERBUG_RIVER": PokemonSettingsScatterbugRiver;
  "V0664_POKEMON_SCATTERBUG_SANDSTORM": PokemonSettingsScatterbugSandstorm;
  "V0664_POKEMON_SCATTERBUG_SAVANNA": PokemonSettingsScatterbugSavanna;
  "V0664_POKEMON_SCATTERBUG_SUN": PokemonSettingsScatterbugSun;
  "V0664_POKEMON_SCATTERBUG_TUNDRA": PokemonSettingsScatterbugTundra;
  "V0692_POKEMON_CLAUNCHER_NORMAL": PokemonSettingsClauncherNormal;
  "V0665_POKEMON_SPEWPA": V0665_pokemon_spewpaEntry;
  "V0665_POKEMON_SPEWPA_ARCHIPELAGO": PokemonSettingsArchipelago;
  "V0665_POKEMON_SPEWPA_CONTINENTAL": PokemonSettingsContinental;
  "V0665_POKEMON_SPEWPA_ELEGANT": PokemonSettingsElegant;
  "V0665_POKEMON_SPEWPA_FANCY": PokemonSettingsFancy;
  "V0665_POKEMON_SPEWPA_GARDEN": PokemonSettingsGarden;
  "V0665_POKEMON_SPEWPA_HIGH_PLAINS": PokemonSettingsHighPlains;
  "V0665_POKEMON_SPEWPA_ICY_SNOW": PokemonSettingsIcySnow;
  "V0665_POKEMON_SPEWPA_JUNGLE": PokemonSettingsJungle;
  "V0665_POKEMON_SPEWPA_MARINE": PokemonSettingsMarine;
  "V0665_POKEMON_SPEWPA_MEADOW": PokemonSettingsMeadow;
  "V0665_POKEMON_SPEWPA_MODERN": PokemonSettingsModern;
  "V0665_POKEMON_SPEWPA_MONSOON": PokemonSettingsMonsoon;
  "V0665_POKEMON_SPEWPA_OCEAN": PokemonSettingsOcean;
  "V0665_POKEMON_SPEWPA_POKEBALL": PokemonSettingsPokeball;
  "V0665_POKEMON_SPEWPA_POLAR": PokemonSettingsPolar;
  "V0665_POKEMON_SPEWPA_RIVER": PokemonSettingsRiver;
  "V0665_POKEMON_SPEWPA_SANDSTORM": PokemonSettingsSandstorm;
  "V0665_POKEMON_SPEWPA_SAVANNA": PokemonSettingsSavanna;
  "V0665_POKEMON_SPEWPA_SUN": PokemonSettingsSun;
  "V0665_POKEMON_SPEWPA_TUNDRA": PokemonSettingsTundra;
  "V0666_POKEMON_VIVILLON": V0666_pokemon_vivillonEntry;
  "V0666_POKEMON_VIVILLON_ARCHIPELAGO": PokemonSettingsArchipelago2;
  "V0666_POKEMON_VIVILLON_CONTINENTAL": PokemonSettingsContinental2;
  "V0666_POKEMON_VIVILLON_ELEGANT": PokemonSettingsElegant2;
  "V0666_POKEMON_VIVILLON_FANCY": PokemonSettingsFancy2;
  "V0666_POKEMON_VIVILLON_GARDEN": PokemonSettingsGarden2;
  "V0666_POKEMON_VIVILLON_HIGH_PLAINS": PokemonSettingsHighPlains2;
  "V0666_POKEMON_VIVILLON_ICY_SNOW": PokemonSettingsIcySnow2;
  "V0666_POKEMON_VIVILLON_JUNGLE": PokemonSettingsJungle2;
  "V0666_POKEMON_VIVILLON_MARINE": PokemonSettingsMarine2;
  "V0666_POKEMON_VIVILLON_MEADOW": PokemonSettingsMeadow2;
  "V0666_POKEMON_VIVILLON_MODERN": PokemonSettingsModern2;
  "V0666_POKEMON_VIVILLON_MONSOON": PokemonSettingsMonsoon2;
  "V0666_POKEMON_VIVILLON_OCEAN": PokemonSettingsOcean2;
  "V0666_POKEMON_VIVILLON_POKEBALL": PokemonSettingsPokeball2;
  "V0666_POKEMON_VIVILLON_POLAR": PokemonSettingsPolar2;
  "V0666_POKEMON_VIVILLON_RIVER": PokemonSettingsRiver2;
  "V0666_POKEMON_VIVILLON_SANDSTORM": PokemonSettingsSandstorm2;
  "V0666_POKEMON_VIVILLON_SAVANNA": PokemonSettingsSavanna2;
  "V0666_POKEMON_VIVILLON_SUN": PokemonSettingsSun2;
  "V0666_POKEMON_VIVILLON_TUNDRA": PokemonSettingsTundra2;
  "V0667_POKEMON_LITLEO": V0667_pokemon_litleoEntry;
  "V0667_POKEMON_LITLEO_NORMAL": V0667_pokemon_litleo_normalEntry;
  "V0668_POKEMON_PYROAR": V0668_pokemon_pyroarEntry;
  "V0668_POKEMON_PYROAR_FEMALE": PokemonSettingsFemale;
  "V0668_POKEMON_PYROAR_NORMAL": PokemonSettingsNormal;
  "V0669_POKEMON_FLABEBE": V0669_pokemon_flabebeEntry;
  "V0669_POKEMON_FLABEBE_BLUE": PokemonSettingsBlue;
  "V0669_POKEMON_FLABEBE_ORANGE": PokemonSettingsOrange;
  "V0669_POKEMON_FLABEBE_RED": PokemonSettingsRed;
  "V0669_POKEMON_FLABEBE_WHITE": PokemonSettingsWhite;
  "V0669_POKEMON_FLABEBE_YELLOW": PokemonSettingsYellow;
  "V0670_POKEMON_FLOETTE": V0670_pokemon_floetteEntry;
  "V0670_POKEMON_FLOETTE_BLUE": PokemonSettingsBlue2;
  "V0670_POKEMON_FLOETTE_ORANGE": PokemonSettingsOrange2;
  "V0670_POKEMON_FLOETTE_RED": PokemonSettingsRed2;
  "V0670_POKEMON_FLOETTE_WHITE": PokemonSettingsWhite2;
  "V0670_POKEMON_FLOETTE_YELLOW": PokemonSettingsYellow2;
  "V0671_POKEMON_FLORGES": V0671_pokemon_florgesEntry;
  "V0671_POKEMON_FLORGES_BLUE": PokemonSettingsBlue3;
  "V0671_POKEMON_FLORGES_ORANGE": PokemonSettingsOrange3;
  "V0671_POKEMON_FLORGES_RED": PokemonSettingsRed3;
  "V0671_POKEMON_FLORGES_WHITE": PokemonSettingsWhite3;
  "V0671_POKEMON_FLORGES_YELLOW": PokemonSettingsYellow3;
  "V0672_POKEMON_SKIDDO": V0672_pokemon_skiddoEntry;
  "V0672_POKEMON_SKIDDO_NORMAL": V0672_pokemon_skiddo_normalEntry;
  "V0673_POKEMON_GOGOAT": V0673_pokemon_gogoatEntry;
  "V0673_POKEMON_GOGOAT_NORMAL": V0673_pokemon_gogoat_normalEntry;
  "V0674_POKEMON_PANCHAM": V0674_pokemon_panchamEntry;
  "V0674_POKEMON_PANCHAM_NORMAL": V0674_pokemon_pancham_normalEntry;
  "V0675_POKEMON_PANGORO": V0675_pokemon_pangoroEntry;
  "V0675_POKEMON_PANGORO_NORMAL": V0675_pokemon_pangoro_normalEntry;
  "V0676_POKEMON_FURFROU": V0676_pokemon_furfrouEntry;
  "V0676_POKEMON_FURFROU_DANDY": PokemonSettingsDandy;
  "V0676_POKEMON_FURFROU_DEBUTANTE": PokemonSettingsDebutante;
  "V0676_POKEMON_FURFROU_DIAMOND": PokemonSettingsDiamond;
  "V0676_POKEMON_FURFROU_HEART": PokemonSettingsHeart;
  "V0676_POKEMON_FURFROU_KABUKI": PokemonSettingsKabuki;
  "V0676_POKEMON_FURFROU_LA_REINE": PokemonSettingsLaReine;
  "V0676_POKEMON_FURFROU_MATRON": PokemonSettingsMatron;
  "V0676_POKEMON_FURFROU_NATURAL": PokemonSettingsNatural;
  "V0676_POKEMON_FURFROU_PHARAOH": PokemonSettingsPharaoh;
  "V0676_POKEMON_FURFROU_STAR": PokemonSettingsStar;
  "V0677_POKEMON_ESPURR": V0677_pokemon_espurrEntry;
  "V0677_POKEMON_ESPURR_NORMAL": V0677_pokemon_espurr_normalEntry;
  "V0678_POKEMON_MEOWSTIC": V0678_pokemon_meowsticEntry;
  "V0678_POKEMON_MEOWSTIC_FEMALE": PokemonSettingsFemale2;
  "V0678_POKEMON_MEOWSTIC_NORMAL": PokemonSettingsNormal2;
  "V0679_POKEMON_HONEDGE": V0679_pokemon_honedgeEntry;
  "V0679_POKEMON_HONEDGE_NORMAL": V0679_pokemon_honedge_normalEntry;
  "V0680_POKEMON_DOUBLADE": V0680_pokemon_doubladeEntry;
  "V0680_POKEMON_DOUBLADE_NORMAL": V0680_pokemon_doublade_normalEntry;
  "V0681_POKEMON_AEGISLASH": V0681_pokemon_aegislashEntry;
  "V0681_POKEMON_AEGISLASH_BLADE": PokemonSettingsBlade;
  "V0681_POKEMON_AEGISLASH_SHIELD": PokemonSettingsShield;
  "V0682_POKEMON_SPRITZEE": V0682_pokemon_spritzeeEntry;
  "V0682_POKEMON_SPRITZEE_NORMAL": V0682_pokemon_spritzee_normalEntry;
  "V0683_POKEMON_AROMATISSE": PokemonSettingsAromatisse;
  "V0685_POKEMON_SLURPUFF": PokemonSettingsSlurpuff;
  "V0683_POKEMON_AROMATISSE_NORMAL": PokemonSettingsAromatisseNormal;
  "V0685_POKEMON_SLURPUFF_NORMAL": PokemonSettingsSlurpuffNormal;
  "V0684_POKEMON_SWIRLIX": V0684_pokemon_swirlixEntry;
  "V0684_POKEMON_SWIRLIX_NORMAL": V0684_pokemon_swirlix_normalEntry;
  "V0686_POKEMON_INKAY": V0686_pokemon_inkayEntry;
  "V0686_POKEMON_INKAY_NORMAL": V0686_pokemon_inkay_normalEntry;
  "V0687_POKEMON_MALAMAR": V0687_pokemon_malamarEntry;
  "V0687_POKEMON_MALAMAR_NORMAL": V0687_pokemon_malamar_normalEntry;
  "V0688_POKEMON_BINACLE": V0688_pokemon_binacleEntry;
  "V0688_POKEMON_BINACLE_NORMAL": V0688_pokemon_binacle_normalEntry;
  "V0689_POKEMON_BARBARACLE": V0689_pokemon_barbaracleEntry;
  "V0689_POKEMON_BARBARACLE_NORMAL": V0689_pokemon_barbaracle_normalEntry;
  "V0690_POKEMON_SKRELP": V0690_pokemon_skrelpEntry;
  "V0690_POKEMON_SKRELP_NORMAL": V0690_pokemon_skrelp_normalEntry;
  "V0691_POKEMON_DRAGALGE": V0691_pokemon_dragalgeEntry;
  "V0691_POKEMON_DRAGALGE_NORMAL": V0691_pokemon_dragalge_normalEntry;
  "V0693_POKEMON_CLAWITZER": V0693_pokemon_clawitzerEntry;
  "V0693_POKEMON_CLAWITZER_NORMAL": V0693_pokemon_clawitzer_normalEntry;
  "V0694_POKEMON_HELIOPTILE": V0694_pokemon_helioptileEntry;
  "V0694_POKEMON_HELIOPTILE_NORMAL": V0694_pokemon_helioptile_normalEntry;
  "V0695_POKEMON_HELIOLISK": V0695_pokemon_helioliskEntry;
  "V0695_POKEMON_HELIOLISK_NORMAL": V0695_pokemon_heliolisk_normalEntry;
  "V0696_POKEMON_TYRUNT": V0696_pokemon_tyruntEntry;
  "V0696_POKEMON_TYRUNT_NORMAL": V0696_pokemon_tyrunt_normalEntry;
  "V0697_POKEMON_TYRANTRUM": PokemonSettingsTyrantrum;
  "V0699_POKEMON_AURORUS": PokemonSettingsAurorus;
  "V0697_POKEMON_TYRANTRUM_NORMAL": PokemonSettingsTyrantrumNormal;
  "V0699_POKEMON_AURORUS_NORMAL": PokemonSettingsAurorusNormal;
  "V0698_POKEMON_AMAURA": V0698_pokemon_amauraEntry;
  "V0698_POKEMON_AMAURA_NORMAL": V0698_pokemon_amaura_normalEntry;
  "V0700_POKEMON_SYLVEON": V0700_pokemon_sylveonEntry;
  "V0700_POKEMON_SYLVEON_NORMAL": V0700_pokemon_sylveon_normalEntry;
  "V0701_POKEMON_HAWLUCHA": V0701_pokemon_hawluchaEntry;
  "V0701_POKEMON_HAWLUCHA_NORMAL": V0701_pokemon_hawlucha_normalEntry;
  "V0702_POKEMON_DEDENNE": V0702_pokemon_dedenneEntry;
  "V0702_POKEMON_DEDENNE_NORMAL": V0702_pokemon_dedenne_normalEntry;
  "V0703_POKEMON_CARBINK": V0703_pokemon_carbinkEntry;
  "V0703_POKEMON_CARBINK_NORMAL": V0703_pokemon_carbink_normalEntry;
  "V0704_POKEMON_GOOMY": V0704_pokemon_goomyEntry;
  "V0704_POKEMON_GOOMY_NORMAL": V0704_pokemon_goomy_normalEntry;
  "V0705_POKEMON_SLIGGOO": V0705_pokemon_sliggooEntry;
  "V0705_POKEMON_SLIGGOO_NORMAL": V0705_pokemon_sliggoo_normalEntry;
  "V0706_POKEMON_GOODRA": V0706_pokemon_goodraEntry;
  "V0706_POKEMON_GOODRA_NORMAL": V0706_pokemon_goodra_normalEntry;
  "V0707_POKEMON_KLEFKI": V0707_pokemon_klefkiEntry;
  "V0707_POKEMON_KLEFKI_NORMAL": V0707_pokemon_klefki_normalEntry;
  "V0708_POKEMON_PHANTUMP": V0708_pokemon_phantumpEntry;
  "V0708_POKEMON_PHANTUMP_NORMAL": V0708_pokemon_phantump_normalEntry;
  "V0709_POKEMON_TREVENANT": V0709_pokemon_trevenantEntry;
  "V0709_POKEMON_TREVENANT_NORMAL": V0709_pokemon_trevenant_normalEntry;
  "V0710_POKEMON_PUMPKABOO": V0710_pokemon_pumpkabooEntry;
  "V0710_POKEMON_PUMPKABOO_AVERAGE": PokemonSettingsAverage;
  "V0710_POKEMON_PUMPKABOO_LARGE": PokemonSettingsLarge;
  "V0710_POKEMON_PUMPKABOO_SMALL": PokemonSettingsSmall;
  "V0710_POKEMON_PUMPKABOO_SUPER": V0710_pokemon_pumpkaboo_superEntry;
  "V0711_POKEMON_GOURGEIST": V0711_pokemon_gourgeistEntry;
  "V0711_POKEMON_GOURGEIST_AVERAGE": PokemonSettingsAverage2;
  "V0711_POKEMON_GOURGEIST_LARGE": PokemonSettingsLarge2;
  "V0711_POKEMON_GOURGEIST_SMALL": PokemonSettingsSmall2;
  "V0711_POKEMON_GOURGEIST_SUPER": V0711_pokemon_gourgeist_superEntry;
  "V0712_POKEMON_BERGMITE": V0712_pokemon_bergmiteEntry;
  "V0712_POKEMON_BERGMITE_NORMAL": V0712_pokemon_bergmite_normalEntry;
  "V0713_POKEMON_AVALUGG": V0713_pokemon_avaluggEntry;
  "V0713_POKEMON_AVALUGG_HISUIAN": V0713_pokemon_avalugg_hisuianEntry;
  "V0713_POKEMON_AVALUGG_NORMAL": V0713_pokemon_avalugg_normalEntry;
  "V0714_POKEMON_NOIBAT": V0714_pokemon_noibatEntry;
  "V0714_POKEMON_NOIBAT_NORMAL": V0714_pokemon_noibat_normalEntry;
  "V0715_POKEMON_NOIVERN": V0715_pokemon_noivernEntry;
  "V0715_POKEMON_NOIVERN_NORMAL": V0715_pokemon_noivern_normalEntry;
  "V0716_POKEMON_XERNEAS": V0716_pokemon_xerneasEntry;
  "V0716_POKEMON_XERNEAS_NORMAL": V0716_pokemon_xerneas_normalEntry;
  "V0717_POKEMON_YVELTAL": V0717_pokemon_yveltalEntry;
  "V0717_POKEMON_YVELTAL_NORMAL": V0717_pokemon_yveltal_normalEntry;
  "V0718_POKEMON_ZYGARDE": V0718_pokemon_zygardeEntry;
  "V0718_POKEMON_ZYGARDE_COMPLETE": V0718_pokemon_zygarde_completeEntry;
  "V0718_POKEMON_ZYGARDE_COMPLETE_FIFTY_PERCENT": V0718_pokemon_zygarde_complete_fifty_percentEntry;
  "V0718_POKEMON_ZYGARDE_COMPLETE_TEN_PERCENT": V0718_pokemon_zygarde_complete_ten_percentEntry;
  "V0718_POKEMON_ZYGARDE_FIFTY_PERCENT": V0718_pokemon_zygarde_fifty_percentEntry;
  "V0718_POKEMON_ZYGARDE_TEN_PERCENT": V0718_pokemon_zygarde_ten_percentEntry;
  "V0719_POKEMON_DIANCIE": V0719_pokemon_diancieEntry;
  "V0719_POKEMON_DIANCIE_NORMAL": V0719_pokemon_diancie_normalEntry;
  "V0720_POKEMON_HOOPA": V0720_pokemon_hoopaEntry;
  "V0720_POKEMON_HOOPA_CONFINED": V0720_pokemon_hoopa_confinedEntry;
  "V0720_POKEMON_HOOPA_UNBOUND": V0720_pokemon_hoopa_unboundEntry;
  "V0721_POKEMON_VOLCANION": V0721_pokemon_volcanionEntry;
  "V0721_POKEMON_VOLCANION_NORMAL": V0721_pokemon_volcanion_normalEntry;
}

export interface PokemonSettingsGen6ByDexId {
  "0650": PokemonSettingsChespin | PokemonSettingsChespinNormal;
  "0651": PokemonSettingsQuilladin | PokemonSettingsQuilladinNormal;
  "0652": PokemonSettingsChesnaught | PokemonSettingsChesnaughtNormal;
  "0653": PokemonSettingsFennekin | PokemonSettingsFennekinNormal;
  "0654": V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry;
  "0655": PokemonSettingsDelphox | PokemonSettingsDelphoxNormal;
  "0656": V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry;
  "0657": PokemonSettingsFrogadier | PokemonSettingsFrogadierNormal;
  "0658": V0658_pokemon_greninjaEntry | V0658_pokemon_greninja_normalEntry;
  "0659": V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry;
  "0660": V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry;
  "0661": V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry;
  "0662": V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry;
  "0663": V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry;
  "0664": PokemonSettingsScatterbug | PokemonSettingsScatterbugArchipelago | PokemonSettingsScatterbugContinental | PokemonSettingsScatterbugElegant | PokemonSettingsScatterbugFancy | PokemonSettingsScatterbugGarden | PokemonSettingsScatterbugHighPlains | PokemonSettingsScatterbugIcySnow | PokemonSettingsScatterbugJungle | PokemonSettingsScatterbugMarine | PokemonSettingsScatterbugMeadow | PokemonSettingsScatterbugModern | PokemonSettingsScatterbugMonsoon | PokemonSettingsScatterbugOcean | PokemonSettingsScatterbugPokeball | PokemonSettingsScatterbugPolar | PokemonSettingsScatterbugRiver | PokemonSettingsScatterbugSandstorm | PokemonSettingsScatterbugSavanna | PokemonSettingsScatterbugSun | PokemonSettingsScatterbugTundra;
  "0665": V0665_pokemon_spewpaEntry | PokemonSettingsArchipelago | PokemonSettingsContinental | PokemonSettingsElegant | PokemonSettingsFancy | PokemonSettingsGarden | PokemonSettingsHighPlains | PokemonSettingsIcySnow | PokemonSettingsJungle | PokemonSettingsMarine | PokemonSettingsMeadow | PokemonSettingsModern | PokemonSettingsMonsoon | PokemonSettingsOcean | PokemonSettingsPokeball | PokemonSettingsPolar | PokemonSettingsRiver | PokemonSettingsSandstorm | PokemonSettingsSavanna | PokemonSettingsSun | PokemonSettingsTundra;
  "0666": V0666_pokemon_vivillonEntry | PokemonSettingsArchipelago2 | PokemonSettingsContinental2 | PokemonSettingsElegant2 | PokemonSettingsFancy2 | PokemonSettingsGarden2 | PokemonSettingsHighPlains2 | PokemonSettingsIcySnow2 | PokemonSettingsJungle2 | PokemonSettingsMarine2 | PokemonSettingsMeadow2 | PokemonSettingsModern2 | PokemonSettingsMonsoon2 | PokemonSettingsOcean2 | PokemonSettingsPokeball2 | PokemonSettingsPolar2 | PokemonSettingsRiver2 | PokemonSettingsSandstorm2 | PokemonSettingsSavanna2 | PokemonSettingsSun2 | PokemonSettingsTundra2;
  "0667": V0667_pokemon_litleoEntry | V0667_pokemon_litleo_normalEntry;
  "0668": V0668_pokemon_pyroarEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "0669": V0669_pokemon_flabebeEntry | PokemonSettingsBlue | PokemonSettingsOrange | PokemonSettingsRed | PokemonSettingsWhite | PokemonSettingsYellow;
  "0670": V0670_pokemon_floetteEntry | PokemonSettingsBlue2 | PokemonSettingsOrange2 | PokemonSettingsRed2 | PokemonSettingsWhite2 | PokemonSettingsYellow2;
  "0671": V0671_pokemon_florgesEntry | PokemonSettingsBlue3 | PokemonSettingsOrange3 | PokemonSettingsRed3 | PokemonSettingsWhite3 | PokemonSettingsYellow3;
  "0672": V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry;
  "0673": V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry;
  "0674": V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry;
  "0675": V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry;
  "0676": V0676_pokemon_furfrouEntry | PokemonSettingsDandy | PokemonSettingsDebutante | PokemonSettingsDiamond | PokemonSettingsHeart | PokemonSettingsKabuki | PokemonSettingsLaReine | PokemonSettingsMatron | PokemonSettingsNatural | PokemonSettingsPharaoh | PokemonSettingsStar;
  "0677": V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry;
  "0678": V0678_pokemon_meowsticEntry | PokemonSettingsFemale2 | PokemonSettingsNormal2;
  "0679": V0679_pokemon_honedgeEntry | V0679_pokemon_honedge_normalEntry;
  "0680": V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry;
  "0681": V0681_pokemon_aegislashEntry | PokemonSettingsBlade | PokemonSettingsShield;
  "0682": V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry;
  "0683": PokemonSettingsAromatisse | PokemonSettingsAromatisseNormal;
  "0684": V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry;
  "0685": PokemonSettingsSlurpuff | PokemonSettingsSlurpuffNormal;
  "0686": V0686_pokemon_inkayEntry | V0686_pokemon_inkay_normalEntry;
  "0687": V0687_pokemon_malamarEntry | V0687_pokemon_malamar_normalEntry;
  "0688": V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry;
  "0689": V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry;
  "0690": V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry;
  "0691": V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry;
  "0692": PokemonSettingsClauncher | PokemonSettingsClauncherNormal;
  "0693": V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry;
  "0694": V0694_pokemon_helioptileEntry | V0694_pokemon_helioptile_normalEntry;
  "0695": V0695_pokemon_helioliskEntry | V0695_pokemon_heliolisk_normalEntry;
  "0696": V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry;
  "0697": PokemonSettingsTyrantrum | PokemonSettingsTyrantrumNormal;
  "0698": V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry;
  "0699": PokemonSettingsAurorus | PokemonSettingsAurorusNormal;
  "0700": V0700_pokemon_sylveonEntry | V0700_pokemon_sylveon_normalEntry;
  "0701": V0701_pokemon_hawluchaEntry | V0701_pokemon_hawlucha_normalEntry;
  "0702": V0702_pokemon_dedenneEntry | V0702_pokemon_dedenne_normalEntry;
  "0703": V0703_pokemon_carbinkEntry | V0703_pokemon_carbink_normalEntry;
  "0704": V0704_pokemon_goomyEntry | V0704_pokemon_goomy_normalEntry;
  "0705": V0705_pokemon_sliggooEntry | V0705_pokemon_sliggoo_normalEntry;
  "0706": V0706_pokemon_goodraEntry | V0706_pokemon_goodra_normalEntry;
  "0707": V0707_pokemon_klefkiEntry | V0707_pokemon_klefki_normalEntry;
  "0708": V0708_pokemon_phantumpEntry | V0708_pokemon_phantump_normalEntry;
  "0709": V0709_pokemon_trevenantEntry | V0709_pokemon_trevenant_normalEntry;
  "0710": V0710_pokemon_pumpkabooEntry | PokemonSettingsAverage | PokemonSettingsLarge | PokemonSettingsSmall | V0710_pokemon_pumpkaboo_superEntry;
  "0711": V0711_pokemon_gourgeistEntry | PokemonSettingsAverage2 | PokemonSettingsLarge2 | PokemonSettingsSmall2 | V0711_pokemon_gourgeist_superEntry;
  "0712": V0712_pokemon_bergmiteEntry | V0712_pokemon_bergmite_normalEntry;
  "0713": V0713_pokemon_avaluggEntry | V0713_pokemon_avalugg_hisuianEntry | V0713_pokemon_avalugg_normalEntry;
  "0714": V0714_pokemon_noibatEntry | V0714_pokemon_noibat_normalEntry;
  "0715": V0715_pokemon_noivernEntry | V0715_pokemon_noivern_normalEntry;
  "0716": V0716_pokemon_xerneasEntry | V0716_pokemon_xerneas_normalEntry;
  "0717": V0717_pokemon_yveltalEntry | V0717_pokemon_yveltal_normalEntry;
  "0718": V0718_pokemon_zygardeEntry | V0718_pokemon_zygarde_completeEntry | V0718_pokemon_zygarde_complete_fifty_percentEntry | V0718_pokemon_zygarde_complete_ten_percentEntry | V0718_pokemon_zygarde_fifty_percentEntry | V0718_pokemon_zygarde_ten_percentEntry;
  "0719": V0719_pokemon_diancieEntry | V0719_pokemon_diancie_normalEntry;
  "0720": V0720_pokemon_hoopaEntry | V0720_pokemon_hoopa_confinedEntry | V0720_pokemon_hoopa_unboundEntry;
  "0721": V0721_pokemon_volcanionEntry | V0721_pokemon_volcanion_normalEntry;
}

export interface PokemonSettingsGen6ByPokemonId {
  "AEGISLASH": V0681_pokemon_aegislashEntry | PokemonSettingsBlade | PokemonSettingsShield;
  "AMAURA": V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry;
  "AROMATISSE": PokemonSettingsAromatisse | PokemonSettingsAromatisseNormal;
  "AURORUS": PokemonSettingsAurorus | PokemonSettingsAurorusNormal;
  "AVALUGG": V0713_pokemon_avaluggEntry | V0713_pokemon_avalugg_hisuianEntry | V0713_pokemon_avalugg_normalEntry;
  "BARBARACLE": V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry;
  "BERGMITE": V0712_pokemon_bergmiteEntry | V0712_pokemon_bergmite_normalEntry;
  "BINACLE": V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry;
  "BRAIXEN": V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry;
  "BUNNELBY": V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry;
  "CARBINK": V0703_pokemon_carbinkEntry | V0703_pokemon_carbink_normalEntry;
  "CHESNAUGHT": PokemonSettingsChesnaught | PokemonSettingsChesnaughtNormal;
  "CHESPIN": PokemonSettingsChespin | PokemonSettingsChespinNormal;
  "CLAUNCHER": PokemonSettingsClauncher | PokemonSettingsClauncherNormal;
  "CLAWITZER": V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry;
  "DEDENNE": V0702_pokemon_dedenneEntry | V0702_pokemon_dedenne_normalEntry;
  "DELPHOX": PokemonSettingsDelphox | PokemonSettingsDelphoxNormal;
  "DIANCIE": V0719_pokemon_diancieEntry | V0719_pokemon_diancie_normalEntry;
  "DIGGERSBY": V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry;
  "DOUBLADE": V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry;
  "DRAGALGE": V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry;
  "ESPURR": V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry;
  "FENNEKIN": PokemonSettingsFennekin | PokemonSettingsFennekinNormal;
  "FLABEBE": V0669_pokemon_flabebeEntry | PokemonSettingsBlue | PokemonSettingsOrange | PokemonSettingsRed | PokemonSettingsWhite | PokemonSettingsYellow;
  "FLETCHINDER": V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry;
  "FLETCHLING": V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry;
  "FLOETTE": V0670_pokemon_floetteEntry | PokemonSettingsBlue2 | PokemonSettingsOrange2 | PokemonSettingsRed2 | PokemonSettingsWhite2 | PokemonSettingsYellow2;
  "FLORGES": V0671_pokemon_florgesEntry | PokemonSettingsBlue3 | PokemonSettingsOrange3 | PokemonSettingsRed3 | PokemonSettingsWhite3 | PokemonSettingsYellow3;
  "FROAKIE": V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry;
  "FROGADIER": PokemonSettingsFrogadier | PokemonSettingsFrogadierNormal;
  "FURFROU": V0676_pokemon_furfrouEntry | PokemonSettingsDandy | PokemonSettingsDebutante | PokemonSettingsDiamond | PokemonSettingsHeart | PokemonSettingsKabuki | PokemonSettingsLaReine | PokemonSettingsMatron | PokemonSettingsNatural | PokemonSettingsPharaoh | PokemonSettingsStar;
  "GOGOAT": V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry;
  "GOODRA": V0706_pokemon_goodraEntry | V0706_pokemon_goodra_normalEntry;
  "GOOMY": V0704_pokemon_goomyEntry | V0704_pokemon_goomy_normalEntry;
  "GOURGEIST": V0711_pokemon_gourgeistEntry | PokemonSettingsAverage2 | PokemonSettingsLarge2 | PokemonSettingsSmall2 | V0711_pokemon_gourgeist_superEntry;
  "GRENINJA": V0658_pokemon_greninjaEntry | V0658_pokemon_greninja_normalEntry;
  "HAWLUCHA": V0701_pokemon_hawluchaEntry | V0701_pokemon_hawlucha_normalEntry;
  "HELIOLISK": V0695_pokemon_helioliskEntry | V0695_pokemon_heliolisk_normalEntry;
  "HELIOPTILE": V0694_pokemon_helioptileEntry | V0694_pokemon_helioptile_normalEntry;
  "HONEDGE": V0679_pokemon_honedgeEntry | V0679_pokemon_honedge_normalEntry;
  "HOOPA": V0720_pokemon_hoopaEntry | V0720_pokemon_hoopa_confinedEntry | V0720_pokemon_hoopa_unboundEntry;
  "INKAY": V0686_pokemon_inkayEntry | V0686_pokemon_inkay_normalEntry;
  "KLEFKI": V0707_pokemon_klefkiEntry | V0707_pokemon_klefki_normalEntry;
  "LITLEO": V0667_pokemon_litleoEntry | V0667_pokemon_litleo_normalEntry;
  "MALAMAR": V0687_pokemon_malamarEntry | V0687_pokemon_malamar_normalEntry;
  "MEOWSTIC": V0678_pokemon_meowsticEntry | PokemonSettingsFemale2 | PokemonSettingsNormal2;
  "NOIBAT": V0714_pokemon_noibatEntry | V0714_pokemon_noibat_normalEntry;
  "NOIVERN": V0715_pokemon_noivernEntry | V0715_pokemon_noivern_normalEntry;
  "PANCHAM": V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry;
  "PANGORO": V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry;
  "PHANTUMP": V0708_pokemon_phantumpEntry | V0708_pokemon_phantump_normalEntry;
  "PUMPKABOO": V0710_pokemon_pumpkabooEntry | PokemonSettingsAverage | PokemonSettingsLarge | PokemonSettingsSmall | V0710_pokemon_pumpkaboo_superEntry;
  "PYROAR": V0668_pokemon_pyroarEntry | PokemonSettingsFemale | PokemonSettingsNormal;
  "QUILLADIN": PokemonSettingsQuilladin | PokemonSettingsQuilladinNormal;
  "SCATTERBUG": PokemonSettingsScatterbug | PokemonSettingsScatterbugArchipelago | PokemonSettingsScatterbugContinental | PokemonSettingsScatterbugElegant | PokemonSettingsScatterbugFancy | PokemonSettingsScatterbugGarden | PokemonSettingsScatterbugHighPlains | PokemonSettingsScatterbugIcySnow | PokemonSettingsScatterbugJungle | PokemonSettingsScatterbugMarine | PokemonSettingsScatterbugMeadow | PokemonSettingsScatterbugModern | PokemonSettingsScatterbugMonsoon | PokemonSettingsScatterbugOcean | PokemonSettingsScatterbugPokeball | PokemonSettingsScatterbugPolar | PokemonSettingsScatterbugRiver | PokemonSettingsScatterbugSandstorm | PokemonSettingsScatterbugSavanna | PokemonSettingsScatterbugSun | PokemonSettingsScatterbugTundra;
  "SKIDDO": V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry;
  "SKRELP": V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry;
  "SLIGGOO": V0705_pokemon_sliggooEntry | V0705_pokemon_sliggoo_normalEntry;
  "SLURPUFF": PokemonSettingsSlurpuff | PokemonSettingsSlurpuffNormal;
  "SPEWPA": V0665_pokemon_spewpaEntry | PokemonSettingsArchipelago | PokemonSettingsContinental | PokemonSettingsElegant | PokemonSettingsFancy | PokemonSettingsGarden | PokemonSettingsHighPlains | PokemonSettingsIcySnow | PokemonSettingsJungle | PokemonSettingsMarine | PokemonSettingsMeadow | PokemonSettingsModern | PokemonSettingsMonsoon | PokemonSettingsOcean | PokemonSettingsPokeball | PokemonSettingsPolar | PokemonSettingsRiver | PokemonSettingsSandstorm | PokemonSettingsSavanna | PokemonSettingsSun | PokemonSettingsTundra;
  "SPRITZEE": V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry;
  "SWIRLIX": V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry;
  "SYLVEON": V0700_pokemon_sylveonEntry | V0700_pokemon_sylveon_normalEntry;
  "TALONFLAME": V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry;
  "TREVENANT": V0709_pokemon_trevenantEntry | V0709_pokemon_trevenant_normalEntry;
  "TYRANTRUM": PokemonSettingsTyrantrum | PokemonSettingsTyrantrumNormal;
  "TYRUNT": V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry;
  "VIVILLON": V0666_pokemon_vivillonEntry | PokemonSettingsArchipelago2 | PokemonSettingsContinental2 | PokemonSettingsElegant2 | PokemonSettingsFancy2 | PokemonSettingsGarden2 | PokemonSettingsHighPlains2 | PokemonSettingsIcySnow2 | PokemonSettingsJungle2 | PokemonSettingsMarine2 | PokemonSettingsMeadow2 | PokemonSettingsModern2 | PokemonSettingsMonsoon2 | PokemonSettingsOcean2 | PokemonSettingsPokeball2 | PokemonSettingsPolar2 | PokemonSettingsRiver2 | PokemonSettingsSandstorm2 | PokemonSettingsSavanna2 | PokemonSettingsSun2 | PokemonSettingsTundra2;
  "VOLCANION": V0721_pokemon_volcanionEntry | V0721_pokemon_volcanion_normalEntry;
  "XERNEAS": V0716_pokemon_xerneasEntry | V0716_pokemon_xerneas_normalEntry;
  "YVELTAL": V0717_pokemon_yveltalEntry | V0717_pokemon_yveltal_normalEntry;
  "ZYGARDE": V0718_pokemon_zygardeEntry | V0718_pokemon_zygarde_completeEntry | V0718_pokemon_zygarde_complete_fifty_percentEntry | V0718_pokemon_zygarde_complete_ten_percentEntry | V0718_pokemon_zygarde_fifty_percentEntry | V0718_pokemon_zygarde_ten_percentEntry;
}

export type PokemonSettingsGen6MasterfileEntry = PokemonSettingsChespin | PokemonSettingsFennekin | PokemonSettingsChespinNormal | PokemonSettingsFennekinNormal | PokemonSettingsQuilladin | PokemonSettingsFrogadier | PokemonSettingsQuilladinNormal | PokemonSettingsFrogadierNormal | PokemonSettingsChesnaught | PokemonSettingsDelphox | PokemonSettingsChesnaughtNormal | PokemonSettingsDelphoxNormal | V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry | V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry | V0658_pokemon_greninjaEntry | V0658_pokemon_greninja_normalEntry | V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry | V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry | V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry | V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry | V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry | PokemonSettingsScatterbug | PokemonSettingsClauncher | PokemonSettingsScatterbugArchipelago | PokemonSettingsScatterbugContinental | PokemonSettingsScatterbugElegant | PokemonSettingsScatterbugFancy | PokemonSettingsScatterbugGarden | PokemonSettingsScatterbugHighPlains | PokemonSettingsScatterbugIcySnow | PokemonSettingsScatterbugJungle | PokemonSettingsScatterbugMarine | PokemonSettingsScatterbugMeadow | PokemonSettingsScatterbugModern | PokemonSettingsScatterbugMonsoon | PokemonSettingsScatterbugOcean | PokemonSettingsScatterbugPokeball | PokemonSettingsScatterbugPolar | PokemonSettingsScatterbugRiver | PokemonSettingsScatterbugSandstorm | PokemonSettingsScatterbugSavanna | PokemonSettingsScatterbugSun | PokemonSettingsScatterbugTundra | PokemonSettingsClauncherNormal | V0665_pokemon_spewpaEntry | PokemonSettingsArchipelago | PokemonSettingsContinental | PokemonSettingsElegant | PokemonSettingsFancy | PokemonSettingsGarden | PokemonSettingsHighPlains | PokemonSettingsIcySnow | PokemonSettingsJungle | PokemonSettingsMarine | PokemonSettingsMeadow | PokemonSettingsModern | PokemonSettingsMonsoon | PokemonSettingsOcean | PokemonSettingsPokeball | PokemonSettingsPolar | PokemonSettingsRiver | PokemonSettingsSandstorm | PokemonSettingsSavanna | PokemonSettingsSun | PokemonSettingsTundra | V0666_pokemon_vivillonEntry | PokemonSettingsArchipelago2 | PokemonSettingsContinental2 | PokemonSettingsElegant2 | PokemonSettingsFancy2 | PokemonSettingsGarden2 | PokemonSettingsHighPlains2 | PokemonSettingsIcySnow2 | PokemonSettingsJungle2 | PokemonSettingsMarine2 | PokemonSettingsMeadow2 | PokemonSettingsModern2 | PokemonSettingsMonsoon2 | PokemonSettingsOcean2 | PokemonSettingsPokeball2 | PokemonSettingsPolar2 | PokemonSettingsRiver2 | PokemonSettingsSandstorm2 | PokemonSettingsSavanna2 | PokemonSettingsSun2 | PokemonSettingsTundra2 | V0667_pokemon_litleoEntry | V0667_pokemon_litleo_normalEntry | V0668_pokemon_pyroarEntry | PokemonSettingsFemale | PokemonSettingsNormal | V0669_pokemon_flabebeEntry | PokemonSettingsBlue | PokemonSettingsOrange | PokemonSettingsRed | PokemonSettingsWhite | PokemonSettingsYellow | V0670_pokemon_floetteEntry | PokemonSettingsBlue2 | PokemonSettingsOrange2 | PokemonSettingsRed2 | PokemonSettingsWhite2 | PokemonSettingsYellow2 | V0671_pokemon_florgesEntry | PokemonSettingsBlue3 | PokemonSettingsOrange3 | PokemonSettingsRed3 | PokemonSettingsWhite3 | PokemonSettingsYellow3 | V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry | V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry | V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry | V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry | V0676_pokemon_furfrouEntry | PokemonSettingsDandy | PokemonSettingsDebutante | PokemonSettingsDiamond | PokemonSettingsHeart | PokemonSettingsKabuki | PokemonSettingsLaReine | PokemonSettingsMatron | PokemonSettingsNatural | PokemonSettingsPharaoh | PokemonSettingsStar | V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry | V0678_pokemon_meowsticEntry | PokemonSettingsFemale2 | PokemonSettingsNormal2 | V0679_pokemon_honedgeEntry | V0679_pokemon_honedge_normalEntry | V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry | V0681_pokemon_aegislashEntry | PokemonSettingsBlade | PokemonSettingsShield | V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry | PokemonSettingsAromatisse | PokemonSettingsSlurpuff | PokemonSettingsAromatisseNormal | PokemonSettingsSlurpuffNormal | V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry | V0686_pokemon_inkayEntry | V0686_pokemon_inkay_normalEntry | V0687_pokemon_malamarEntry | V0687_pokemon_malamar_normalEntry | V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry | V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry | V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry | V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry | V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry | V0694_pokemon_helioptileEntry | V0694_pokemon_helioptile_normalEntry | V0695_pokemon_helioliskEntry | V0695_pokemon_heliolisk_normalEntry | V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry | PokemonSettingsTyrantrum | PokemonSettingsAurorus | PokemonSettingsTyrantrumNormal | PokemonSettingsAurorusNormal | V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry | V0700_pokemon_sylveonEntry | V0700_pokemon_sylveon_normalEntry | V0701_pokemon_hawluchaEntry | V0701_pokemon_hawlucha_normalEntry | V0702_pokemon_dedenneEntry | V0702_pokemon_dedenne_normalEntry | V0703_pokemon_carbinkEntry | V0703_pokemon_carbink_normalEntry | V0704_pokemon_goomyEntry | V0704_pokemon_goomy_normalEntry | V0705_pokemon_sliggooEntry | V0705_pokemon_sliggoo_normalEntry | V0706_pokemon_goodraEntry | V0706_pokemon_goodra_normalEntry | V0707_pokemon_klefkiEntry | V0707_pokemon_klefki_normalEntry | V0708_pokemon_phantumpEntry | V0708_pokemon_phantump_normalEntry | V0709_pokemon_trevenantEntry | V0709_pokemon_trevenant_normalEntry | V0710_pokemon_pumpkabooEntry | PokemonSettingsAverage | PokemonSettingsLarge | PokemonSettingsSmall | V0710_pokemon_pumpkaboo_superEntry | V0711_pokemon_gourgeistEntry | PokemonSettingsAverage2 | PokemonSettingsLarge2 | PokemonSettingsSmall2 | V0711_pokemon_gourgeist_superEntry | V0712_pokemon_bergmiteEntry | V0712_pokemon_bergmite_normalEntry | V0713_pokemon_avaluggEntry | V0713_pokemon_avalugg_hisuianEntry | V0713_pokemon_avalugg_normalEntry | V0714_pokemon_noibatEntry | V0714_pokemon_noibat_normalEntry | V0715_pokemon_noivernEntry | V0715_pokemon_noivern_normalEntry | V0716_pokemon_xerneasEntry | V0716_pokemon_xerneas_normalEntry | V0717_pokemon_yveltalEntry | V0717_pokemon_yveltal_normalEntry | V0718_pokemon_zygardeEntry | V0718_pokemon_zygarde_completeEntry | V0718_pokemon_zygarde_complete_fifty_percentEntry | V0718_pokemon_zygarde_complete_ten_percentEntry | V0718_pokemon_zygarde_fifty_percentEntry | V0718_pokemon_zygarde_ten_percentEntry | V0719_pokemon_diancieEntry | V0719_pokemon_diancie_normalEntry | V0720_pokemon_hoopaEntry | V0720_pokemon_hoopa_confinedEntry | V0720_pokemon_hoopa_unboundEntry | V0721_pokemon_volcanionEntry | V0721_pokemon_volcanion_normalEntry;

/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen4
// Filters: all
// Entries emitted: 247

import type { PokemonSettingsShared114, PokemonSettingsShared631, PokemonSettingsShared633, PokemonSettingsShared637, PokemonSettingsShared640, PokemonSettingsShared641, PokemonSettingsShared642, PokemonSettingsShared644, PokemonSettingsShared645, PokemonSettingsShared647, PokemonSettingsShared652, PokemonSettingsShared653, PokemonSettingsShared654, PokemonSettingsShared655, PokemonSettingsShared656, PokemonSettingsShared657, PokemonSettingsShared658, PokemonSettingsShared659, PokemonSettingsShared660, PokemonSettingsShared661, PokemonSettingsShared662, PokemonSettingsShared663, PokemonSettingsShared664, PokemonSettingsShared667, PokemonSettingsShared668, PokemonSettingsShared675, PokemonSettingsShared677, PokemonSettingsShared678, PokemonSettingsShared679, PokemonSettingsShared680, PokemonSettingsShared683, PokemonSettingsShared684, PokemonSettingsShared687, PokemonSettingsShared688, PokemonSettingsShared692, PokemonSettingsShared694, PokemonSettingsShared713, PokemonSettingsShared714, PokemonSettingsShared715, PokemonSettingsShared716, PokemonSettingsShared719, PokemonSettingsShared723, PokemonSettingsShared724, PokemonSettingsShared727, PokemonSettingsShared728, PokemonSettingsShared742, PokemonSettingsShared749, PokemonSettingsShared750, PokemonSettingsShared755, PokemonSettingsShared756, PokemonSettingsShared761, PokemonSettingsShared762, PokemonSettingsShared780, PokemonSettingsShared781, PokemonSettingsShared782, PokemonSettingsShared783, PokemonSettingsShared784, PokemonSettingsShared785, PokemonSettingsShared805 } from "./shared.generated";

export interface V0388_pokemon_grotledatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0388_pokemon_grotledatapokemonsettingsencounter {
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
export interface V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0388_pokemon_grotledatapokemonsettingsibfc {

}
export interface V0388_pokemon_grotledatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0388_pokemon_grotledatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0388_pokemon_grotledatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0388_pokemon_grotledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0388_pokemon_grotledata {
  pokemonSettings: V0388_pokemon_grotledatapokemonsettings;
  templateId: string;
}
export interface V0388_pokemon_grotleEntry {
  templateId: "V0388_POKEMON_GROTLE";
  data: V0388_pokemon_grotledata;
}
export interface V0389_pokemon_torterradatapokemonsettingsencounter {
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
export interface V0389_pokemon_torterradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0389_pokemon_torterradata {
  pokemonSettings: V0389_pokemon_torterradatapokemonsettings;
  templateId: string;
}
export interface V0389_pokemon_torterraEntry {
  templateId: "V0389_POKEMON_TORTERRA";
  data: V0389_pokemon_torterradata;
}
export interface V0389_pokemon_torterra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0389_pokemon_torterra_normaldata {
  pokemonSettings: V0389_pokemon_torterra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0389_pokemon_torterra_normalEntry {
  templateId: "V0389_POKEMON_TORTERRA_NORMAL";
  data: V0389_pokemon_torterra_normaldata;
}
export interface V0390_pokemon_chimchardatapokemonsettingsencounter {
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
export interface V0390_pokemon_chimchardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0390_pokemon_chimchardata {
  pokemonSettings: V0390_pokemon_chimchardatapokemonsettings;
  templateId: string;
}
export interface V0390_pokemon_chimcharEntry {
  templateId: "V0390_POKEMON_CHIMCHAR";
  data: V0390_pokemon_chimchardata;
}
export interface V0391_pokemon_monfernodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0391_pokemon_monfernodata {
  pokemonSettings: V0391_pokemon_monfernodatapokemonsettings;
  templateId: string;
}
export interface V0391_pokemon_monfernoEntry {
  templateId: "V0391_POKEMON_MONFERNO";
  data: V0391_pokemon_monfernodata;
}
export interface V0391_pokemon_monferno_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0391_pokemon_monferno_normaldata {
  pokemonSettings: V0391_pokemon_monferno_normaldatapokemonsettings;
  templateId: string;
}
export interface V0391_pokemon_monferno_normalEntry {
  templateId: "V0391_POKEMON_MONFERNO_NORMAL";
  data: V0391_pokemon_monferno_normaldata;
}
export interface V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0394_pokemon_prinplupdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0394_pokemon_prinplupdata {
  pokemonSettings: V0394_pokemon_prinplupdatapokemonsettings;
  templateId: string;
}
export interface V0394_pokemon_prinplupEntry {
  templateId: "V0394_POKEMON_PRINPLUP";
  data: V0394_pokemon_prinplupdata;
}
export interface V0397_pokemon_staraviadatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0397_pokemon_staraviadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0397_pokemon_staraviadata {
  pokemonSettings: V0397_pokemon_staraviadatapokemonsettings;
  templateId: string;
}
export interface V0397_pokemon_staraviaEntry {
  templateId: "V0397_POKEMON_STARAVIA";
  data: V0397_pokemon_staraviadata;
}
export interface V0398_pokemon_staraptordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0398_pokemon_staraptordata {
  pokemonSettings: V0398_pokemon_staraptordatapokemonsettings;
  templateId: string;
}
export interface V0398_pokemon_staraptorEntry {
  templateId: "V0398_POKEMON_STARAPTOR";
  data: V0398_pokemon_staraptordata;
}
export interface V0398_pokemon_staraptor_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0398_pokemon_staraptor_normaldata {
  pokemonSettings: V0398_pokemon_staraptor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0398_pokemon_staraptor_normalEntry {
  templateId: "V0398_POKEMON_STARAPTOR_NORMAL";
  data: V0398_pokemon_staraptor_normaldata;
}
export interface V0399_pokemon_bidoofdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0399_pokemon_bidoofdata {
  pokemonSettings: V0399_pokemon_bidoofdatapokemonsettings;
  templateId: string;
}
export interface V0399_pokemon_bidoofEntry {
  templateId: "V0399_POKEMON_BIDOOF";
  data: V0399_pokemon_bidoofdata;
}
export interface V0399_pokemon_bidoof_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0399_pokemon_bidoof_normaldata {
  pokemonSettings: V0399_pokemon_bidoof_normaldatapokemonsettings;
  templateId: string;
}
export interface V0399_pokemon_bidoof_normalEntry {
  templateId: "V0399_POKEMON_BIDOOF_NORMAL";
  data: V0399_pokemon_bidoof_normaldata;
}
export interface V0407_pokemon_roseradedatapokemonsettingsencounter {
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
export interface V0407_pokemon_roseradedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0407_pokemon_roseradedata {
  pokemonSettings: V0407_pokemon_roseradedatapokemonsettings;
  templateId: string;
}
export interface V0407_pokemon_roseradeEntry {
  templateId: "V0407_POKEMON_ROSERADE";
  data: V0407_pokemon_roseradedata;
}
export interface V0407_pokemon_roserade_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0407_pokemon_roserade_normaldata {
  pokemonSettings: V0407_pokemon_roserade_normaldatapokemonsettings;
  templateId: string;
}
export interface V0407_pokemon_roserade_normalEntry {
  templateId: "V0407_POKEMON_ROSERADE_NORMAL";
  data: V0407_pokemon_roserade_normaldata;
}
export interface V0410_pokemon_shieldondatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0410_pokemon_shieldondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0410_pokemon_shieldondatapokemonsettingsencounter;
  evolutionBranch: (V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0410_pokemon_shieldondata {
  pokemonSettings: V0410_pokemon_shieldondatapokemonsettings;
  templateId: string;
}
export interface V0410_pokemon_shieldonEntry {
  templateId: "V0410_POKEMON_SHIELDON";
  data: V0410_pokemon_shieldondata;
}
export interface V0410_pokemon_shieldon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0410_pokemon_shieldondatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0410_pokemon_shieldon_normaldata {
  pokemonSettings: V0410_pokemon_shieldon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0410_pokemon_shieldon_normalEntry {
  templateId: "V0410_POKEMON_SHIELDON_NORMAL";
  data: V0410_pokemon_shieldon_normaldata;
}
export interface V0411_pokemon_bastiodondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0411_pokemon_bastiodondata {
  pokemonSettings: V0411_pokemon_bastiodondatapokemonsettings;
  templateId: string;
}
export interface V0411_pokemon_bastiodonEntry {
  templateId: "V0411_POKEMON_BASTIODON";
  data: V0411_pokemon_bastiodondata;
}
export interface V0411_pokemon_bastiodon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0411_pokemon_bastiodon_normaldata {
  pokemonSettings: V0411_pokemon_bastiodon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0411_pokemon_bastiodon_normalEntry {
  templateId: "V0411_POKEMON_BASTIODON_NORMAL";
  data: V0411_pokemon_bastiodon_normaldata;
}
export interface V0412_pokemon_burmydatapokemonsettingsencounter {
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
export interface V0412_pokemon_burmydatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form?: string;
  genderRequirement: string;
}
export interface V0412_pokemon_burmydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0412_pokemon_burmydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0412_pokemon_burmydata {
  pokemonSettings: V0412_pokemon_burmydatapokemonsettings;
  templateId: string;
}
export interface V0412_pokemon_burmyEntry {
  templateId: "V0412_POKEMON_BURMY";
  data: V0412_pokemon_burmydata;
}
export interface V0412_pokemon_burmy_plantdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0412_pokemon_burmydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0412_pokemon_burmy_plantdata {
  pokemonSettings: V0412_pokemon_burmy_plantdatapokemonsettings;
  templateId: string;
}
export interface V0412_pokemon_burmy_plantEntry {
  templateId: "V0412_POKEMON_BURMY_PLANT";
  data: V0412_pokemon_burmy_plantdata;
}
export interface V0413_pokemon_wormadamdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0413_pokemon_wormadamdata {
  pokemonSettings: V0413_pokemon_wormadamdatapokemonsettings;
  templateId: string;
}
export interface V0413_pokemon_wormadamEntry {
  templateId: "V0413_POKEMON_WORMADAM";
  data: V0413_pokemon_wormadamdata;
}
export interface V0415_pokemon_combeedatapokemonsettingsencounter {
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
export interface V0415_pokemon_combeedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  genderRequirement: string;
}
export interface V0415_pokemon_combeedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0415_pokemon_combeedatapokemonsettingsencounter;
  evolutionBranch: (V0415_pokemon_combeedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0415_pokemon_combeedata {
  pokemonSettings: V0415_pokemon_combeedatapokemonsettings;
  templateId: string;
}
export interface V0415_pokemon_combeeEntry {
  templateId: "V0415_POKEMON_COMBEE";
  data: V0415_pokemon_combeedata;
}
export interface V0415_pokemon_combee_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  genderRequirement: string;
}
export interface V0415_pokemon_combee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0415_pokemon_combeedatapokemonsettingsencounter;
  evolutionBranch: (V0415_pokemon_combee_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0415_pokemon_combee_normaldata {
  pokemonSettings: V0415_pokemon_combee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0415_pokemon_combee_normalEntry {
  templateId: "V0415_POKEMON_COMBEE_NORMAL";
  data: V0415_pokemon_combee_normaldata;
}
export interface V0418_pokemon_buizeldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0418_pokemon_buizeldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizeldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0418_pokemon_buizeldata {
  pokemonSettings: V0418_pokemon_buizeldatapokemonsettings;
  templateId: string;
}
export interface V0418_pokemon_buizelEntry {
  templateId: "V0418_POKEMON_BUIZEL";
  data: V0418_pokemon_buizeldata;
}
export interface V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0418_pokemon_buizel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0418_pokemon_buizel_normaldata {
  pokemonSettings: V0418_pokemon_buizel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0418_pokemon_buizel_normalEntry {
  templateId: "V0418_POKEMON_BUIZEL_NORMAL";
  data: V0418_pokemon_buizel_normaldata;
}
export interface V0420_pokemon_cherubidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0420_pokemon_cherubidata {
  pokemonSettings: V0420_pokemon_cherubidatapokemonsettings;
  templateId: string;
}
export interface V0420_pokemon_cherubiEntry {
  templateId: "V0420_POKEMON_CHERUBI";
  data: V0420_pokemon_cherubidata;
}
export interface V0420_pokemon_cherubi_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0420_pokemon_cherubi_normaldata {
  pokemonSettings: V0420_pokemon_cherubi_normaldatapokemonsettings;
  templateId: string;
}
export interface V0420_pokemon_cherubi_normalEntry {
  templateId: "V0420_POKEMON_CHERUBI_NORMAL";
  data: V0420_pokemon_cherubi_normaldata;
}
export interface V0421_pokemon_cherrim_sunnydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0421_pokemon_cherrim_sunnydata {
  pokemonSettings: V0421_pokemon_cherrim_sunnydatapokemonsettings;
  templateId: string;
}
export interface V0421_pokemon_cherrim_sunnyEntry {
  templateId: "V0421_POKEMON_CHERRIM_SUNNY";
  data: V0421_pokemon_cherrim_sunnydata;
}
export interface V0423_pokemon_gastrodondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0423_pokemon_gastrodondata {
  pokemonSettings: V0423_pokemon_gastrodondatapokemonsettings;
  templateId: string;
}
export interface V0423_pokemon_gastrodonEntry {
  templateId: "V0423_POKEMON_GASTRODON";
  data: V0423_pokemon_gastrodondata;
}
export interface V0424_pokemon_ambipomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0424_pokemon_ambipomdata {
  pokemonSettings: V0424_pokemon_ambipomdatapokemonsettings;
  templateId: string;
}
export interface V0424_pokemon_ambipomEntry {
  templateId: "V0424_POKEMON_AMBIPOM";
  data: V0424_pokemon_ambipomdata;
}
export interface V0424_pokemon_ambipom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0424_pokemon_ambipom_normaldata {
  pokemonSettings: V0424_pokemon_ambipom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0424_pokemon_ambipom_normalEntry {
  templateId: "V0424_POKEMON_AMBIPOM_NORMAL";
  data: V0424_pokemon_ambipom_normaldata;
}
export interface V0425_pokemon_drifloondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0425_pokemon_drifloondata {
  pokemonSettings: V0425_pokemon_drifloondatapokemonsettings;
  templateId: string;
}
export interface V0425_pokemon_drifloonEntry {
  templateId: "V0425_POKEMON_DRIFLOON";
  data: V0425_pokemon_drifloondata;
}
export interface V0425_pokemon_drifloon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0425_pokemon_drifloon_normaldata {
  pokemonSettings: V0425_pokemon_drifloon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0425_pokemon_drifloon_normalEntry {
  templateId: "V0425_POKEMON_DRIFLOON_NORMAL";
  data: V0425_pokemon_drifloon_normaldata;
}
export interface V0426_pokemon_drifblimdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0426_pokemon_drifblimdata {
  pokemonSettings: V0426_pokemon_drifblimdatapokemonsettings;
  templateId: string;
}
export interface V0426_pokemon_drifblimEntry {
  templateId: "V0426_POKEMON_DRIFBLIM";
  data: V0426_pokemon_drifblimdata;
}
export interface V0426_pokemon_drifblim_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0426_pokemon_drifblim_normaldata {
  pokemonSettings: V0426_pokemon_drifblim_normaldatapokemonsettings;
  templateId: string;
}
export interface V0426_pokemon_drifblim_normalEntry {
  templateId: "V0426_POKEMON_DRIFBLIM_NORMAL";
  data: V0426_pokemon_drifblim_normaldata;
}
export interface V0427_pokemon_bunearydatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizeldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0427_pokemon_bunearydata {
  pokemonSettings: V0427_pokemon_bunearydatapokemonsettings;
  templateId: string;
}
export interface V0427_pokemon_bunearyEntry {
  templateId: "V0427_POKEMON_BUNEARY";
  data: V0427_pokemon_bunearydata;
}
export interface V0427_pokemon_buneary_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0427_pokemon_buneary_normaldata {
  pokemonSettings: V0427_pokemon_buneary_normaldatapokemonsettings;
  templateId: string;
}
export interface V0427_pokemon_buneary_normalEntry {
  templateId: "V0427_POKEMON_BUNEARY_NORMAL";
  data: V0427_pokemon_buneary_normaldata;
}
export interface V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0428_pokemon_lopunnydatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0428_pokemon_lopunnydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0428_pokemon_lopunnydatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0428_pokemon_lopunnydata {
  pokemonSettings: V0428_pokemon_lopunnydatapokemonsettings;
  templateId: string;
}
export interface V0428_pokemon_lopunnyEntry {
  templateId: "V0428_POKEMON_LOPUNNY";
  data: V0428_pokemon_lopunnydata;
}
export interface V0428_pokemon_lopunny_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0428_pokemon_lopunnydatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0428_pokemon_lopunny_normaldata {
  pokemonSettings: V0428_pokemon_lopunny_normaldatapokemonsettings;
  templateId: string;
}
export interface V0428_pokemon_lopunny_normalEntry {
  templateId: "V0428_POKEMON_LOPUNNY_NORMAL";
  data: V0428_pokemon_lopunny_normaldata;
}
export interface V0429_pokemon_mismagiusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0429_pokemon_mismagiusdata {
  pokemonSettings: V0429_pokemon_mismagiusdatapokemonsettings;
  templateId: string;
}
export interface V0429_pokemon_mismagiusEntry {
  templateId: "V0429_POKEMON_MISMAGIUS";
  data: V0429_pokemon_mismagiusdata;
}
export interface V0429_pokemon_mismagius_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0429_pokemon_mismagius_normaldata {
  pokemonSettings: V0429_pokemon_mismagius_normaldatapokemonsettings;
  templateId: string;
}
export interface V0429_pokemon_mismagius_normalEntry {
  templateId: "V0429_POKEMON_MISMAGIUS_NORMAL";
  data: V0429_pokemon_mismagius_normaldata;
}
export interface V0430_pokemon_honchkrowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0430_pokemon_honchkrowdata {
  pokemonSettings: V0430_pokemon_honchkrowdatapokemonsettings;
  templateId: string;
}
export interface V0430_pokemon_honchkrowEntry {
  templateId: "V0430_POKEMON_HONCHKROW";
  data: V0430_pokemon_honchkrowdata;
}
export interface V0430_pokemon_honchkrow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0430_pokemon_honchkrow_normaldata {
  pokemonSettings: V0430_pokemon_honchkrow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0430_pokemon_honchkrow_normalEntry {
  templateId: "V0430_POKEMON_HONCHKROW_NORMAL";
  data: V0430_pokemon_honchkrow_normaldata;
}
export interface V0431_pokemon_glameowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0431_pokemon_glameowdata {
  pokemonSettings: V0431_pokemon_glameowdatapokemonsettings;
  templateId: string;
}
export interface V0431_pokemon_glameowEntry {
  templateId: "V0431_POKEMON_GLAMEOW";
  data: V0431_pokemon_glameowdata;
}
export interface V0431_pokemon_glameow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0431_pokemon_glameow_normaldata {
  pokemonSettings: V0431_pokemon_glameow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0431_pokemon_glameow_normalEntry {
  templateId: "V0431_POKEMON_GLAMEOW_NORMAL";
  data: V0431_pokemon_glameow_normaldata;
}
export interface V0433_pokemon_chinglingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizeldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0433_pokemon_chinglingdata {
  pokemonSettings: V0433_pokemon_chinglingdatapokemonsettings;
  templateId: string;
}
export interface V0433_pokemon_chinglingEntry {
  templateId: "V0433_POKEMON_CHINGLING";
  data: V0433_pokemon_chinglingdata;
}
export interface V0433_pokemon_chingling_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0433_pokemon_chingling_normaldata {
  pokemonSettings: V0433_pokemon_chingling_normaldatapokemonsettings;
  templateId: string;
}
export interface V0433_pokemon_chingling_normalEntry {
  templateId: "V0433_POKEMON_CHINGLING_NORMAL";
  data: V0433_pokemon_chingling_normaldata;
}
export interface V0437_pokemon_bronzongdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0437_pokemon_bronzongdata {
  pokemonSettings: V0437_pokemon_bronzongdatapokemonsettings;
  templateId: string;
}
export interface V0437_pokemon_bronzongEntry {
  templateId: "V0437_POKEMON_BRONZONG";
  data: V0437_pokemon_bronzongdata;
}
export interface V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0438_pokemon_bonslydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0438_pokemon_bonslydata {
  pokemonSettings: V0438_pokemon_bonslydatapokemonsettings;
  templateId: string;
}
export interface V0438_pokemon_bonslyEntry {
  templateId: "V0438_POKEMON_BONSLY";
  data: V0438_pokemon_bonslydata;
}
export interface V0439_pokemon_mime_jrdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0439_pokemon_mime_jrdata {
  pokemonSettings: V0439_pokemon_mime_jrdatapokemonsettings;
  templateId: string;
}
export interface V0439_pokemon_mime_jrEntry {
  templateId: "V0439_POKEMON_MIME_JR";
  data: V0439_pokemon_mime_jrdata;
}
export interface V0439_pokemon_mime_jr_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0438_pokemon_bonslydatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0439_pokemon_mime_jr_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0439_pokemon_mime_jr_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0439_pokemon_mime_jr_normaldata {
  pokemonSettings: V0439_pokemon_mime_jr_normaldatapokemonsettings;
  templateId: string;
}
export interface V0439_pokemon_mime_jr_normalEntry {
  templateId: "V0439_POKEMON_MIME_JR_NORMAL";
  data: V0439_pokemon_mime_jr_normaldata;
}
export interface V0440_pokemon_happinydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0439_pokemon_mime_jr_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0440_pokemon_happinydata {
  pokemonSettings: V0440_pokemon_happinydatapokemonsettings;
  templateId: string;
}
export interface V0440_pokemon_happinyEntry {
  templateId: "V0440_POKEMON_HAPPINY";
  data: V0440_pokemon_happinydata;
}
export interface V0442_pokemon_spiritombdatapokemonsettingsencounter {
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
export interface V0442_pokemon_spiritombdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0442_pokemon_spiritombdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0442_pokemon_spiritombdata {
  pokemonSettings: V0442_pokemon_spiritombdatapokemonsettings;
  templateId: string;
}
export interface V0442_pokemon_spiritombEntry {
  templateId: "V0442_POKEMON_SPIRITOMB";
  data: V0442_pokemon_spiritombdata;
}
export interface V0442_pokemon_spiritomb_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0442_pokemon_spiritombdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0442_pokemon_spiritomb_normaldata {
  pokemonSettings: V0442_pokemon_spiritomb_normaldatapokemonsettings;
  templateId: string;
}
export interface V0442_pokemon_spiritomb_normalEntry {
  templateId: "V0442_POKEMON_SPIRITOMB_NORMAL";
  data: V0442_pokemon_spiritomb_normaldata;
}
export interface V0444_pokemon_gabitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0444_pokemon_gabitedata {
  pokemonSettings: V0444_pokemon_gabitedatapokemonsettings;
  templateId: string;
}
export interface V0444_pokemon_gabiteEntry {
  templateId: "V0444_POKEMON_GABITE";
  data: V0444_pokemon_gabitedata;
}
export interface V0444_pokemon_gabite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0444_pokemon_gabite_normaldata {
  pokemonSettings: V0444_pokemon_gabite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0444_pokemon_gabite_normalEntry {
  templateId: "V0444_POKEMON_GABITE_NORMAL";
  data: V0444_pokemon_gabite_normaldata;
}
export interface V0445_pokemon_garchompdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  raidBossDistanceOffset: number;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0445_pokemon_garchompdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0445_pokemon_garchompdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0445_pokemon_garchompdata {
  pokemonSettings: V0445_pokemon_garchompdatapokemonsettings;
  templateId: string;
}
export interface V0445_pokemon_garchompEntry {
  templateId: "V0445_POKEMON_GARCHOMP";
  data: V0445_pokemon_garchompdata;
}
export interface V0445_pokemon_garchomp_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0445_pokemon_garchompdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0445_pokemon_garchomp_normaldata {
  pokemonSettings: V0445_pokemon_garchomp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0445_pokemon_garchomp_normalEntry {
  templateId: "V0445_POKEMON_GARCHOMP_NORMAL";
  data: V0445_pokemon_garchomp_normaldata;
}
export interface V0447_pokemon_rioludatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizeldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0447_pokemon_rioludata {
  pokemonSettings: V0447_pokemon_rioludatapokemonsettings;
  templateId: string;
}
export interface V0447_pokemon_rioluEntry {
  templateId: "V0447_POKEMON_RIOLU";
  data: V0447_pokemon_rioludata;
}
export interface V0447_pokemon_riolu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionBranch: (V0418_pokemon_buizel_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0447_pokemon_riolu_normaldata {
  pokemonSettings: V0447_pokemon_riolu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0447_pokemon_riolu_normalEntry {
  templateId: "V0447_POKEMON_RIOLU_NORMAL";
  data: V0447_pokemon_riolu_normaldata;
}
export interface V0448_pokemon_lucariodatapokemonsettingstempevooverridesitemcamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0448_pokemon_lucariodatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0448_pokemon_lucariodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0448_pokemon_lucariodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0448_pokemon_lucariodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0448_pokemon_lucariodata {
  pokemonSettings: V0448_pokemon_lucariodatapokemonsettings;
  templateId: string;
}
export interface V0448_pokemon_lucarioEntry {
  templateId: "V0448_POKEMON_LUCARIO";
  data: V0448_pokemon_lucariodata;
}
export interface V0448_pokemon_lucario_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0448_pokemon_lucariodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0448_pokemon_lucario_normaldata {
  pokemonSettings: V0448_pokemon_lucario_normaldatapokemonsettings;
  templateId: string;
}
export interface V0448_pokemon_lucario_normalEntry {
  templateId: "V0448_POKEMON_LUCARIO_NORMAL";
  data: V0448_pokemon_lucario_normaldata;
}
export interface V0449_pokemon_hippopotasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0410_pokemon_shieldondatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0449_pokemon_hippopotasdata {
  pokemonSettings: V0449_pokemon_hippopotasdatapokemonsettings;
  templateId: string;
}
export interface V0449_pokemon_hippopotasEntry {
  templateId: "V0449_POKEMON_HIPPOPOTAS";
  data: V0449_pokemon_hippopotasdata;
}
export interface V0449_pokemon_hippopotas_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0410_pokemon_shieldondatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0449_pokemon_hippopotas_normaldata {
  pokemonSettings: V0449_pokemon_hippopotas_normaldatapokemonsettings;
  templateId: string;
}
export interface V0449_pokemon_hippopotas_normalEntry {
  templateId: "V0449_POKEMON_HIPPOPOTAS_NORMAL";
  data: V0449_pokemon_hippopotas_normaldata;
}
export interface V0450_pokemon_hippowdondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0450_pokemon_hippowdondata {
  pokemonSettings: V0450_pokemon_hippowdondatapokemonsettings;
  templateId: string;
}
export interface V0450_pokemon_hippowdonEntry {
  templateId: "V0450_POKEMON_HIPPOWDON";
  data: V0450_pokemon_hippowdondata;
}
export interface V0450_pokemon_hippowdon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0450_pokemon_hippowdon_normaldata {
  pokemonSettings: V0450_pokemon_hippowdon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0450_pokemon_hippowdon_normalEntry {
  templateId: "V0450_POKEMON_HIPPOWDON_NORMAL";
  data: V0450_pokemon_hippowdon_normaldata;
}
export interface V0451_pokemon_skorupidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0451_pokemon_skorupidata {
  pokemonSettings: V0451_pokemon_skorupidatapokemonsettings;
  templateId: string;
}
export interface V0451_pokemon_skorupiEntry {
  templateId: "V0451_POKEMON_SKORUPI";
  data: V0451_pokemon_skorupidata;
}
export interface V0452_pokemon_drapiondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0452_pokemon_drapiondata {
  pokemonSettings: V0452_pokemon_drapiondatapokemonsettings;
  templateId: string;
}
export interface V0452_pokemon_drapionEntry {
  templateId: "V0452_POKEMON_DRAPION";
  data: V0452_pokemon_drapiondata;
}
export interface V0452_pokemon_drapion_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0452_pokemon_drapion_normaldata {
  pokemonSettings: V0452_pokemon_drapion_normaldatapokemonsettings;
  templateId: string;
}
export interface V0452_pokemon_drapion_normalEntry {
  templateId: "V0452_POKEMON_DRAPION_NORMAL";
  data: V0452_pokemon_drapion_normaldata;
}
export interface V0453_pokemon_croagunkdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0394_pokemon_prinplupdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0453_pokemon_croagunkdata {
  pokemonSettings: V0453_pokemon_croagunkdatapokemonsettings;
  templateId: string;
}
export interface V0453_pokemon_croagunkEntry {
  templateId: "V0453_POKEMON_CROAGUNK";
  data: V0453_pokemon_croagunkdata;
}
export interface V0453_pokemon_croagunk_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0390_pokemon_chimchardatapokemonsettingsencounter;
  evolutionBranch: (V0388_pokemon_grotledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0453_pokemon_croagunk_normaldata {
  pokemonSettings: V0453_pokemon_croagunk_normaldatapokemonsettings;
  templateId: string;
}
export interface V0453_pokemon_croagunk_normalEntry {
  templateId: "V0453_POKEMON_CROAGUNK_NORMAL";
  data: V0453_pokemon_croagunk_normaldata;
}
export interface V0455_pokemon_carnivinedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0455_pokemon_carnivinedata {
  pokemonSettings: V0455_pokemon_carnivinedatapokemonsettings;
  templateId: string;
}
export interface V0455_pokemon_carnivineEntry {
  templateId: "V0455_POKEMON_CARNIVINE";
  data: V0455_pokemon_carnivinedata;
}
export interface V0455_pokemon_carnivine_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0455_pokemon_carnivine_normaldata {
  pokemonSettings: V0455_pokemon_carnivine_normaldatapokemonsettings;
  templateId: string;
}
export interface V0455_pokemon_carnivine_normalEntry {
  templateId: "V0455_POKEMON_CARNIVINE_NORMAL";
  data: V0455_pokemon_carnivine_normaldata;
}
export interface V0460_pokemon_abomasnowdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0448_pokemon_lucariodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0460_pokemon_abomasnowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0460_pokemon_abomasnowdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0460_pokemon_abomasnowdata {
  pokemonSettings: V0460_pokemon_abomasnowdatapokemonsettings;
  templateId: string;
}
export interface V0460_pokemon_abomasnowEntry {
  templateId: "V0460_POKEMON_ABOMASNOW";
  data: V0460_pokemon_abomasnowdata;
}
export interface V0460_pokemon_abomasnow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0460_pokemon_abomasnowdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0460_pokemon_abomasnow_normaldata {
  pokemonSettings: V0460_pokemon_abomasnow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0460_pokemon_abomasnow_normalEntry {
  templateId: "V0460_POKEMON_ABOMASNOW_NORMAL";
  data: V0460_pokemon_abomasnow_normaldata;
}
export interface V0462_pokemon_magnezonedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0462_pokemon_magnezonedata {
  pokemonSettings: V0462_pokemon_magnezonedatapokemonsettings;
  templateId: string;
}
export interface V0462_pokemon_magnezoneEntry {
  templateId: "V0462_POKEMON_MAGNEZONE";
  data: V0462_pokemon_magnezonedata;
}
export interface V0462_pokemon_magnezone_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0462_pokemon_magnezone_normaldata {
  pokemonSettings: V0462_pokemon_magnezone_normaldatapokemonsettings;
  templateId: string;
}
export interface V0462_pokemon_magnezone_normalEntry {
  templateId: "V0462_POKEMON_MAGNEZONE_NORMAL";
  data: V0462_pokemon_magnezone_normaldata;
}
export interface V0464_pokemon_rhyperiordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0464_pokemon_rhyperiordata {
  pokemonSettings: V0464_pokemon_rhyperiordatapokemonsettings;
  templateId: string;
}
export interface V0464_pokemon_rhyperiorEntry {
  templateId: "V0464_POKEMON_RHYPERIOR";
  data: V0464_pokemon_rhyperiordata;
}
export interface V0464_pokemon_rhyperior_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0464_pokemon_rhyperior_normaldata {
  pokemonSettings: V0464_pokemon_rhyperior_normaldatapokemonsettings;
  templateId: string;
}
export interface V0464_pokemon_rhyperior_normalEntry {
  templateId: "V0464_POKEMON_RHYPERIOR_NORMAL";
  data: V0464_pokemon_rhyperior_normaldata;
}
export interface V0465_pokemon_tangrowthdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0465_pokemon_tangrowthdata {
  pokemonSettings: V0465_pokemon_tangrowthdatapokemonsettings;
  templateId: string;
}
export interface V0465_pokemon_tangrowthEntry {
  templateId: "V0465_POKEMON_TANGROWTH";
  data: V0465_pokemon_tangrowthdata;
}
export interface V0465_pokemon_tangrowth_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0465_pokemon_tangrowth_normaldata {
  pokemonSettings: V0465_pokemon_tangrowth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0465_pokemon_tangrowth_normalEntry {
  templateId: "V0465_POKEMON_TANGROWTH_NORMAL";
  data: V0465_pokemon_tangrowth_normaldata;
}
export interface V0468_pokemon_togekissdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0468_pokemon_togekissdata {
  pokemonSettings: V0468_pokemon_togekissdatapokemonsettings;
  templateId: string;
}
export interface V0468_pokemon_togekissEntry {
  templateId: "V0468_POKEMON_TOGEKISS";
  data: V0468_pokemon_togekissdata;
}
export interface V0468_pokemon_togekiss_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0468_pokemon_togekiss_normaldata {
  pokemonSettings: V0468_pokemon_togekiss_normaldatapokemonsettings;
  templateId: string;
}
export interface V0468_pokemon_togekiss_normalEntry {
  templateId: "V0468_POKEMON_TOGEKISS_NORMAL";
  data: V0468_pokemon_togekiss_normaldata;
}
export interface V0470_pokemon_leafeondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0470_pokemon_leafeondata {
  pokemonSettings: V0470_pokemon_leafeondatapokemonsettings;
  templateId: string;
}
export interface V0470_pokemon_leafeonEntry {
  templateId: "V0470_POKEMON_LEAFEON";
  data: V0470_pokemon_leafeondata;
}
export interface V0470_pokemon_leafeon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0407_pokemon_roseradedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0470_pokemon_leafeon_normaldata {
  pokemonSettings: V0470_pokemon_leafeon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0470_pokemon_leafeon_normalEntry {
  templateId: "V0470_POKEMON_LEAFEON_NORMAL";
  data: V0470_pokemon_leafeon_normaldata;
}
export interface V0472_pokemon_gliscordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
  irisPhotoEmote1: string;
  irisPhotoEmote2: string;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0472_pokemon_gliscordata {
  pokemonSettings: V0472_pokemon_gliscordatapokemonsettings;
  templateId: string;
}
export interface V0472_pokemon_gliscorEntry {
  templateId: "V0472_POKEMON_GLISCOR";
  data: V0472_pokemon_gliscordata;
}
export interface V0472_pokemon_gliscor_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0472_pokemon_gliscor_normaldata {
  pokemonSettings: V0472_pokemon_gliscor_normaldatapokemonsettings;
  templateId: string;
}
export interface V0472_pokemon_gliscor_normalEntry {
  templateId: "V0472_POKEMON_GLISCOR_NORMAL";
  data: V0472_pokemon_gliscor_normaldata;
}
export interface V0474_pokemon_porygon_zdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0474_pokemon_porygon_zdata {
  pokemonSettings: V0474_pokemon_porygon_zdatapokemonsettings;
  templateId: string;
}
export interface V0474_pokemon_porygon_zEntry {
  templateId: "V0474_POKEMON_PORYGON_Z";
  data: V0474_pokemon_porygon_zdata;
}
export interface V0474_pokemon_porygon_z_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0474_pokemon_porygon_z_normaldata {
  pokemonSettings: V0474_pokemon_porygon_z_normaldatapokemonsettings;
  templateId: string;
}
export interface V0474_pokemon_porygon_z_normalEntry {
  templateId: "V0474_POKEMON_PORYGON_Z_NORMAL";
  data: V0474_pokemon_porygon_z_normaldata;
}
export interface V0475_pokemon_galladedatapokemonsettingsbuddywalkedmegaenergyawardsitem {
  genderRequirement?: string;
  megaEnergyAwardAmount: number;
  megaPokemonId: string;
}
export interface V0475_pokemon_galladedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0448_pokemon_lucariodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0475_pokemon_galladedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0475_pokemon_galladedatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0475_pokemon_galladedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0475_pokemon_galladedata {
  pokemonSettings: V0475_pokemon_galladedatapokemonsettings;
  templateId: string;
}
export interface V0475_pokemon_galladeEntry {
  templateId: "V0475_POKEMON_GALLADE";
  data: V0475_pokemon_galladedata;
}
export interface V0475_pokemon_gallade_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0475_pokemon_galladedatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionBranch: (V0428_pokemon_lopunnydatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  tempEvoOverrides: (V0475_pokemon_galladedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0475_pokemon_gallade_normaldata {
  pokemonSettings: V0475_pokemon_gallade_normaldatapokemonsettings;
  templateId: string;
}
export interface V0475_pokemon_gallade_normalEntry {
  templateId: "V0475_POKEMON_GALLADE_NORMAL";
  data: V0475_pokemon_gallade_normaldata;
}
export interface V0476_pokemon_probopassdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0476_pokemon_probopassdata {
  pokemonSettings: V0476_pokemon_probopassdatapokemonsettings;
  templateId: string;
}
export interface V0476_pokemon_probopassEntry {
  templateId: "V0476_POKEMON_PROBOPASS";
  data: V0476_pokemon_probopassdata;
}
export interface V0476_pokemon_probopass_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0389_pokemon_torterradatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0476_pokemon_probopass_normaldata {
  pokemonSettings: V0476_pokemon_probopass_normaldatapokemonsettings;
  templateId: string;
}
export interface V0476_pokemon_probopass_normalEntry {
  templateId: "V0476_POKEMON_PROBOPASS_NORMAL";
  data: V0476_pokemon_probopass_normaldata;
}
export interface V0477_pokemon_dusknoirdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0477_pokemon_dusknoirdata {
  pokemonSettings: V0477_pokemon_dusknoirdatapokemonsettings;
  templateId: string;
}
export interface V0477_pokemon_dusknoirEntry {
  templateId: "V0477_POKEMON_DUSKNOIR";
  data: V0477_pokemon_dusknoirdata;
}
export interface V0477_pokemon_dusknoir_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0477_pokemon_dusknoir_normaldata {
  pokemonSettings: V0477_pokemon_dusknoir_normaldatapokemonsettings;
  templateId: string;
}
export interface V0477_pokemon_dusknoir_normalEntry {
  templateId: "V0477_POKEMON_DUSKNOIR_NORMAL";
  data: V0477_pokemon_dusknoir_normaldata;
}
export interface V0478_pokemon_froslassdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0478_pokemon_froslassdata {
  pokemonSettings: V0478_pokemon_froslassdatapokemonsettings;
  templateId: string;
}
export interface V0478_pokemon_froslassEntry {
  templateId: "V0478_POKEMON_FROSLASS";
  data: V0478_pokemon_froslassdata;
}
export interface V0478_pokemon_froslass_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0388_pokemon_grotledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0478_pokemon_froslass_normaldata {
  pokemonSettings: V0478_pokemon_froslass_normaldatapokemonsettings;
  templateId: string;
}
export interface V0478_pokemon_froslass_normalEntry {
  templateId: "V0478_POKEMON_FROSLASS_NORMAL";
  data: V0478_pokemon_froslass_normaldata;
}
export interface V0479_pokemon_rotom_fandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0412_pokemon_burmydatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0479_pokemon_rotom_fandata {
  pokemonSettings: V0479_pokemon_rotom_fandatapokemonsettings;
  templateId: string;
}
export interface V0479_pokemon_rotom_fanEntry {
  templateId: "V0479_POKEMON_ROTOM_FAN";
  data: V0479_pokemon_rotom_fandata;
}
export interface V0485_pokemon_heatrandatapokemonsettingsencounter {
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
export interface V0485_pokemon_heatrandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  raidBossDistanceOffset: number;
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0485_pokemon_heatrandata {
  pokemonSettings: V0485_pokemon_heatrandatapokemonsettings;
  templateId: string;
}
export interface V0485_pokemon_heatranEntry {
  templateId: "V0485_POKEMON_HEATRAN";
  data: V0485_pokemon_heatrandata;
}
export interface V0485_pokemon_heatran_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  raidBossDistanceOffset: number;
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0485_pokemon_heatran_normaldata {
  pokemonSettings: V0485_pokemon_heatran_normaldatapokemonsettings;
  templateId: string;
}
export interface V0485_pokemon_heatran_normalEntry {
  templateId: "V0485_POKEMON_HEATRAN_NORMAL";
  data: V0485_pokemon_heatran_normaldata;
}
export interface V0486_pokemon_regigigasdatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0486_pokemon_regigigasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0486_pokemon_regigigasdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0486_pokemon_regigigasdata {
  pokemonSettings: V0486_pokemon_regigigasdatapokemonsettings;
  templateId: string;
}
export interface V0486_pokemon_regigigasEntry {
  templateId: "V0486_POKEMON_REGIGIGAS";
  data: V0486_pokemon_regigigasdata;
}
export interface V0486_pokemon_regigigas_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0486_pokemon_regigigasdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0486_pokemon_regigigas_normaldata {
  pokemonSettings: V0486_pokemon_regigigas_normaldatapokemonsettings;
  templateId: string;
}
export interface V0486_pokemon_regigigas_normalEntry {
  templateId: "V0486_POKEMON_REGIGIGAS_NORMAL";
  data: V0486_pokemon_regigigas_normaldata;
}
export interface V0487_pokemon_giratinadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0487_pokemon_giratinadata {
  pokemonSettings: V0487_pokemon_giratinadatapokemonsettings;
  templateId: string;
}
export interface V0487_pokemon_giratinaEntry {
  templateId: "V0487_POKEMON_GIRATINA";
  data: V0487_pokemon_giratinadata;
}
export interface V0487_pokemon_giratina_altereddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0487_pokemon_giratina_altereddata {
  pokemonSettings: V0487_pokemon_giratina_altereddatapokemonsettings;
  templateId: string;
}
export interface V0487_pokemon_giratina_alteredEntry {
  templateId: "V0487_POKEMON_GIRATINA_ALTERED";
  data: V0487_pokemon_giratina_altereddata;
}
export interface V0487_pokemon_giratina_origindatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0487_pokemon_giratina_origindata {
  pokemonSettings: V0487_pokemon_giratina_origindatapokemonsettings;
  templateId: string;
}
export interface V0487_pokemon_giratina_originEntry {
  templateId: "V0487_POKEMON_GIRATINA_ORIGIN";
  data: V0487_pokemon_giratina_origindata;
}
export interface V0488_pokemon_cresseliadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0488_pokemon_cresseliadata {
  pokemonSettings: V0488_pokemon_cresseliadatapokemonsettings;
  templateId: string;
}
export interface V0488_pokemon_cresseliaEntry {
  templateId: "V0488_POKEMON_CRESSELIA";
  data: V0488_pokemon_cresseliadata;
}
export interface V0488_pokemon_cresselia_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0488_pokemon_cresselia_normaldata {
  pokemonSettings: V0488_pokemon_cresselia_normaldatapokemonsettings;
  templateId: string;
}
export interface V0488_pokemon_cresselia_normalEntry {
  templateId: "V0488_POKEMON_CRESSELIA_NORMAL";
  data: V0488_pokemon_cresselia_normaldata;
}
export interface V0489_pokemon_phionedatapokemonsettingsencounter {
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
export interface V0489_pokemon_phionedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0489_pokemon_phionedata {
  pokemonSettings: V0489_pokemon_phionedatapokemonsettings;
  templateId: string;
}
export interface V0489_pokemon_phioneEntry {
  templateId: "V0489_POKEMON_PHIONE";
  data: V0489_pokemon_phionedata;
}
export interface V0489_pokemon_phione_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0489_pokemon_phione_normaldata {
  pokemonSettings: V0489_pokemon_phione_normaldatapokemonsettings;
  templateId: string;
}
export interface V0489_pokemon_phione_normalEntry {
  templateId: "V0489_POKEMON_PHIONE_NORMAL";
  data: V0489_pokemon_phione_normaldata;
}
export interface V0490_pokemon_manaphydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0490_pokemon_manaphydata {
  pokemonSettings: V0490_pokemon_manaphydatapokemonsettings;
  templateId: string;
}
export interface V0490_pokemon_manaphyEntry {
  templateId: "V0490_POKEMON_MANAPHY";
  data: V0490_pokemon_manaphydata;
}
export interface V0490_pokemon_manaphy_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0490_pokemon_manaphy_normaldata {
  pokemonSettings: V0490_pokemon_manaphy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0490_pokemon_manaphy_normalEntry {
  templateId: "V0490_POKEMON_MANAPHY_NORMAL";
  data: V0490_pokemon_manaphy_normaldata;
}
export interface V0491_pokemon_darkraidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0491_pokemon_darkraidata {
  pokemonSettings: V0491_pokemon_darkraidatapokemonsettings;
  templateId: string;
}
export interface V0491_pokemon_darkraiEntry {
  templateId: "V0491_POKEMON_DARKRAI";
  data: V0491_pokemon_darkraidata;
}
export interface V0491_pokemon_darkrai_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0397_pokemon_staraviadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0485_pokemon_heatrandatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
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
  shadow: V0388_pokemon_grotledatapokemonsettingsshadow;
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0491_pokemon_darkrai_normaldata {
  pokemonSettings: V0491_pokemon_darkrai_normaldatapokemonsettings;
  templateId: string;
}
export interface V0491_pokemon_darkrai_normalEntry {
  templateId: "V0491_POKEMON_DARKRAI_NORMAL";
  data: V0491_pokemon_darkrai_normaldata;
}
export interface V0492_pokemon_shaymindatapokemonsettings {
  animationTime: (number)[];
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0492_pokemon_shaymindata {
  pokemonSettings: V0492_pokemon_shaymindatapokemonsettings;
  templateId: string;
}
export interface V0492_pokemon_shayminEntry {
  templateId: "V0492_POKEMON_SHAYMIN";
  data: V0492_pokemon_shaymindata;
}
export interface V0492_pokemon_shaymin_landdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  stardustCost: number;
}
export interface V0492_pokemon_shaymin_landdatapokemonsettings {
  animationTime: (number)[];
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0492_pokemon_shaymin_landdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0492_pokemon_shaymin_landdata {
  pokemonSettings: V0492_pokemon_shaymin_landdatapokemonsettings;
  templateId: string;
}
export interface V0492_pokemon_shaymin_landEntry {
  templateId: "V0492_POKEMON_SHAYMIN_LAND";
  data: V0492_pokemon_shaymin_landdata;
}
export interface V0492_pokemon_shaymin_skydatapokemonsettings {
  animationTime: (number)[];
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0492_pokemon_shaymin_landdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0492_pokemon_shaymin_skydata {
  pokemonSettings: V0492_pokemon_shaymin_skydatapokemonsettings;
  templateId: string;
}
export interface V0492_pokemon_shaymin_skyEntry {
  templateId: "V0492_POKEMON_SHAYMIN_SKY";
  data: V0492_pokemon_shaymin_skydata;
}
export interface V0493_pokemon_arceusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0388_pokemon_grotledatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0489_pokemon_phionedatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0388_pokemon_grotledatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0388_pokemon_grotledatapokemonsettingsstats;
  thirdMove: V0388_pokemon_grotledatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0493_pokemon_arceusdata {
  pokemonSettings: V0493_pokemon_arceusdatapokemonsettings;
  templateId: string;
}
export interface V0493_pokemon_arceusEntry {
  templateId: "V0493_POKEMON_ARCEUS";
  data: V0493_pokemon_arceusdata;
}

export type PokemonSettingsTurtwig = PokemonSettingsShared631<"V0387_POKEMON_TURTWIG", "TURTWIG">;

export type PokemonSettingsTurtwigNormal = PokemonSettingsShared114<"V0387_POKEMON_TURTWIG_NORMAL", "TURTWIG_NORMAL", "TURTWIG">;
export type PokemonSettingsPiplupNormal = PokemonSettingsShared114<"V0393_POKEMON_PIPLUP_NORMAL", "PIPLUP_NORMAL", "PIPLUP">;
export type PokemonSettingsCranidosNormal = PokemonSettingsShared114<"V0408_POKEMON_CRANIDOS_NORMAL", "CRANIDOS_NORMAL", "CRANIDOS">;

export type PokemonSettingsGrotleNormal = PokemonSettingsShared633<"V0388_POKEMON_GROTLE_NORMAL", "GROTLE_NORMAL", "GROTLE">;
export type PokemonSettingsPrinplupNormal = PokemonSettingsShared633<"V0394_POKEMON_PRINPLUP_NORMAL", "PRINPLUP_NORMAL", "PRINPLUP">;

export type PokemonSettingsChimcharNormal = PokemonSettingsShared637<"V0390_POKEMON_CHIMCHAR_NORMAL", "CHIMCHAR_NORMAL", "CHIMCHAR">;
export type PokemonSettingsShinxNormal = PokemonSettingsShared637<"V0403_POKEMON_SHINX_NORMAL", "SHINX_NORMAL", "SHINX">;

export type PokemonSettingsInfernape = PokemonSettingsShared640<"V0392_POKEMON_INFERNAPE", "INFERNAPE">;
export type PokemonSettingsEmpoleon = PokemonSettingsShared640<"V0395_POKEMON_EMPOLEON", "EMPOLEON">;
export type PokemonSettingsMamoswine = PokemonSettingsShared640<"V0473_POKEMON_MAMOSWINE", "MAMOSWINE">;

export type PokemonSettingsInfernapeNormal = PokemonSettingsShared641<"V0392_POKEMON_INFERNAPE_NORMAL", "INFERNAPE_NORMAL", "INFERNAPE">;
export type PokemonSettingsEmpoleonNormal = PokemonSettingsShared641<"V0395_POKEMON_EMPOLEON_NORMAL", "EMPOLEON_NORMAL", "EMPOLEON">;
export type PokemonSettingsMamoswineNormal = PokemonSettingsShared641<"V0473_POKEMON_MAMOSWINE_NORMAL", "MAMOSWINE_NORMAL", "MAMOSWINE">;

export type PokemonSettingsPiplup = PokemonSettingsShared642<"V0393_POKEMON_PIPLUP", "PIPLUP">;
export type PokemonSettingsCranidos = PokemonSettingsShared642<"V0408_POKEMON_CRANIDOS", "CRANIDOS">;

export type PokemonSettingsStarly = PokemonSettingsShared644<"V0396_POKEMON_STARLY", "STARLY">;
export type PokemonSettingsStunky = PokemonSettingsShared644<"V0434_POKEMON_STUNKY", "STUNKY">;

export type PokemonSettingsStarlyNormal = PokemonSettingsShared645<"V0396_POKEMON_STARLY_NORMAL", "STARLY_NORMAL", "STARLY">;
export type PokemonSettingsStunkyNormal = PokemonSettingsShared645<"V0434_POKEMON_STUNKY_NORMAL", "STUNKY_NORMAL", "STUNKY">;

export type PokemonSettingsStaraviaNormal = PokemonSettingsShared647<"V0397_POKEMON_STARAVIA_NORMAL", "STARAVIA_NORMAL", "STARAVIA">;

export type PokemonSettingsBibarel = PokemonSettingsShared652<"V0400_POKEMON_BIBAREL", "BIBAREL">;
export type PokemonSettingsToxicroak = PokemonSettingsShared652<"V0454_POKEMON_TOXICROAK", "TOXICROAK">;
export type PokemonSettingsWeavile = PokemonSettingsShared652<"V0461_POKEMON_WEAVILE", "WEAVILE">;

export type PokemonSettingsBibarelNormal = PokemonSettingsShared653<"V0400_POKEMON_BIBAREL_NORMAL", "BIBAREL_NORMAL", "BIBAREL">;
export type PokemonSettingsToxicroakNormal = PokemonSettingsShared653<"V0454_POKEMON_TOXICROAK_NORMAL", "TOXICROAK_NORMAL", "TOXICROAK">;
export type PokemonSettingsWeavileNormal = PokemonSettingsShared653<"V0461_POKEMON_WEAVILE_NORMAL", "WEAVILE_NORMAL", "WEAVILE">;

export type PokemonSettingsKricketot = PokemonSettingsShared654<"V0401_POKEMON_KRICKETOT", "KRICKETOT">;
export type PokemonSettingsMunchlax = PokemonSettingsShared654<"V0446_POKEMON_MUNCHLAX", "MUNCHLAX">;
export type PokemonSettingsFinneon = PokemonSettingsShared654<"V0456_POKEMON_FINNEON", "FINNEON">;

export type PokemonSettingsKricketotNormal = PokemonSettingsShared655<"V0401_POKEMON_KRICKETOT_NORMAL", "KRICKETOT_NORMAL", "KRICKETOT">;
export type PokemonSettingsShellosEastSea = PokemonSettingsShared655<"V0422_POKEMON_SHELLOS_EAST_SEA", "SHELLOS_EAST_SEA", "SHELLOS">;
export type PokemonSettingsShellosWestSea = PokemonSettingsShared655<"V0422_POKEMON_SHELLOS_WEST_SEA", "SHELLOS_WEST_SEA", "SHELLOS">;
export type PokemonSettingsMunchlaxNormal = PokemonSettingsShared655<"V0446_POKEMON_MUNCHLAX_NORMAL", "MUNCHLAX_NORMAL", "MUNCHLAX">;
export type PokemonSettingsFinneonNormal = PokemonSettingsShared655<"V0456_POKEMON_FINNEON_NORMAL", "FINNEON_NORMAL", "FINNEON">;

export type PokemonSettingsKricketune = PokemonSettingsShared656<"V0402_POKEMON_KRICKETUNE", "KRICKETUNE">;

export type PokemonSettingsKricketuneNormal = PokemonSettingsShared657<"V0402_POKEMON_KRICKETUNE_NORMAL", "KRICKETUNE_NORMAL", "KRICKETUNE">;

export type PokemonSettingsShinx = PokemonSettingsShared658<"V0403_POKEMON_SHINX", "SHINX">;

export type PokemonSettingsLuxio = PokemonSettingsShared659<"V0404_POKEMON_LUXIO", "LUXIO">;

export type PokemonSettingsLuxioNormal = PokemonSettingsShared660<"V0404_POKEMON_LUXIO_NORMAL", "LUXIO_NORMAL", "LUXIO">;

export type PokemonSettingsLuxray = PokemonSettingsShared661<"V0405_POKEMON_LUXRAY", "LUXRAY">;

export type PokemonSettingsLuxrayNormal = PokemonSettingsShared662<"V0405_POKEMON_LUXRAY_NORMAL", "LUXRAY_NORMAL", "LUXRAY">;

export type PokemonSettingsBudew = PokemonSettingsShared663<"V0406_POKEMON_BUDEW", "BUDEW">;

export type PokemonSettingsBudewNormal = PokemonSettingsShared664<"V0406_POKEMON_BUDEW_NORMAL", "BUDEW_NORMAL", "BUDEW">;

export type PokemonSettingsRampardos = PokemonSettingsShared667<"V0409_POKEMON_RAMPARDOS", "RAMPARDOS">;
export type PokemonSettingsPurugly = PokemonSettingsShared667<"V0432_POKEMON_PURUGLY", "PURUGLY">;

export type PokemonSettingsRampardosNormal = PokemonSettingsShared668<"V0409_POKEMON_RAMPARDOS_NORMAL", "RAMPARDOS_NORMAL", "RAMPARDOS">;
export type PokemonSettingsPuruglyNormal = PokemonSettingsShared668<"V0432_POKEMON_PURUGLY_NORMAL", "PURUGLY_NORMAL", "PURUGLY">;

export type PokemonSettingsSandy = PokemonSettingsShared675<"V0412_POKEMON_BURMY_SANDY", "BURMY_SANDY">;
export type PokemonSettingsTrash = PokemonSettingsShared675<"V0412_POKEMON_BURMY_TRASH", "BURMY_TRASH">;

export type PokemonSettingsWormadamPlant = PokemonSettingsShared677<"V0413_POKEMON_WORMADAM_PLANT", "WORMADAM_PLANT", "WORMADAM">;
export type PokemonSettingsBronzongNormal = PokemonSettingsShared677<"V0437_POKEMON_BRONZONG_NORMAL", "BRONZONG_NORMAL", "BRONZONG">;

export type PokemonSettingsWormadamSandy = PokemonSettingsShared678<"V0413_POKEMON_WORMADAM_SANDY", "WORMADAM_SANDY", "WORMADAM">;
export type PokemonSettingsWormadamTrash = PokemonSettingsShared678<"V0413_POKEMON_WORMADAM_TRASH", "WORMADAM_TRASH", "WORMADAM">;

export type PokemonSettingsMothim = PokemonSettingsShared679<"V0414_POKEMON_MOTHIM", "MOTHIM">;
export type PokemonSettingsVespiquen = PokemonSettingsShared679<"V0416_POKEMON_VESPIQUEN", "VESPIQUEN">;
export type PokemonSettingsYanmega = PokemonSettingsShared679<"V0469_POKEMON_YANMEGA", "YANMEGA">;

export type PokemonSettingsMothimNormal = PokemonSettingsShared680<"V0414_POKEMON_MOTHIM_NORMAL", "MOTHIM_NORMAL", "MOTHIM">;
export type PokemonSettingsVespiquenNormal = PokemonSettingsShared680<"V0416_POKEMON_VESPIQUEN_NORMAL", "VESPIQUEN_NORMAL", "VESPIQUEN">;
export type PokemonSettingsYanmegaNormal = PokemonSettingsShared680<"V0469_POKEMON_YANMEGA_NORMAL", "YANMEGA_NORMAL", "YANMEGA">;

export type PokemonSettingsPachirisu = PokemonSettingsShared683<"V0417_POKEMON_PACHIRISU", "PACHIRISU">;

export type PokemonSettingsPachirisuNormal = PokemonSettingsShared684<"V0417_POKEMON_PACHIRISU_NORMAL", "PACHIRISU_NORMAL", "PACHIRISU">;

export type PokemonSettingsFloatzel = PokemonSettingsShared687<"V0419_POKEMON_FLOATZEL", "FLOATZEL">;
export type PokemonSettingsCherrim = PokemonSettingsShared687<"V0421_POKEMON_CHERRIM", "CHERRIM">;

export type PokemonSettingsFloatzelNormal = PokemonSettingsShared688<"V0419_POKEMON_FLOATZEL_NORMAL", "FLOATZEL_NORMAL", "FLOATZEL">;
export type PokemonSettingsCherrimOvercast = PokemonSettingsShared688<"V0421_POKEMON_CHERRIM_OVERCAST", "CHERRIM_OVERCAST", "CHERRIM">;

export type PokemonSettingsShellos = PokemonSettingsShared692<"V0422_POKEMON_SHELLOS", "SHELLOS">;

export type PokemonSettingsGastrodonEastSea = PokemonSettingsShared694<"V0423_POKEMON_GASTRODON_EAST_SEA", "GASTRODON_EAST_SEA", "GASTRODON">;
export type PokemonSettingsGastrodonWestSea = PokemonSettingsShared694<"V0423_POKEMON_GASTRODON_WEST_SEA", "GASTRODON_WEST_SEA", "GASTRODON">;

export type PokemonSettingsSkuntank = PokemonSettingsShared713<"V0435_POKEMON_SKUNTANK", "SKUNTANK">;

export type PokemonSettingsSkuntankNormal = PokemonSettingsShared714<"V0435_POKEMON_SKUNTANK_NORMAL", "SKUNTANK_NORMAL", "SKUNTANK">;

export type PokemonSettingsBronzor = PokemonSettingsShared715<"V0436_POKEMON_BRONZOR", "BRONZOR">;
export type PokemonSettingsMantyke = PokemonSettingsShared715<"V0458_POKEMON_MANTYKE", "MANTYKE">;

export type PokemonSettingsBronzorNormal = PokemonSettingsShared716<"V0436_POKEMON_BRONZOR_NORMAL", "BRONZOR_NORMAL", "BRONZOR">;
export type PokemonSettingsMantykeNormal = PokemonSettingsShared716<"V0458_POKEMON_MANTYKE_NORMAL", "MANTYKE_NORMAL", "MANTYKE">;

export type PokemonSettingsBonslyNormal = PokemonSettingsShared719<"V0438_POKEMON_BONSLY_NORMAL", "BONSLY_NORMAL", "BONSLY">;
export type PokemonSettingsHappinyNormal = PokemonSettingsShared719<"V0440_POKEMON_HAPPINY_NORMAL", "HAPPINY_NORMAL", "HAPPINY">;

export type PokemonSettingsChatot = PokemonSettingsShared723<"V0441_POKEMON_CHATOT", "CHATOT">;
export type PokemonSettingsRotom = PokemonSettingsShared723<"V0479_POKEMON_ROTOM", "ROTOM">;

export type PokemonSettingsChatotNormal = PokemonSettingsShared724<"V0441_POKEMON_CHATOT_NORMAL", "CHATOT_NORMAL", "CHATOT">;
export type PokemonSettingsRotomFrost = PokemonSettingsShared724<"V0479_POKEMON_ROTOM_FROST", "ROTOM_FROST", "ROTOM">;
export type PokemonSettingsRotomMow = PokemonSettingsShared724<"V0479_POKEMON_ROTOM_MOW", "ROTOM_MOW", "ROTOM">;
export type PokemonSettingsRotomWash = PokemonSettingsShared724<"V0479_POKEMON_ROTOM_WASH", "ROTOM_WASH", "ROTOM">;

export type PokemonSettingsGible = PokemonSettingsShared727<"V0443_POKEMON_GIBLE", "GIBLE">;
export type PokemonSettingsSnover = PokemonSettingsShared727<"V0459_POKEMON_SNOVER", "SNOVER">;

export type PokemonSettingsGibleNormal = PokemonSettingsShared728<"V0443_POKEMON_GIBLE_NORMAL", "GIBLE_NORMAL", "GIBLE">;
export type PokemonSettingsSnoverNormal = PokemonSettingsShared728<"V0459_POKEMON_SNOVER_NORMAL", "SNOVER_NORMAL", "SNOVER">;

export type PokemonSettingsSkorupiNormal = PokemonSettingsShared742<"V0451_POKEMON_SKORUPI_NORMAL", "SKORUPI_NORMAL", "SKORUPI">;

export type PokemonSettingsLumineon = PokemonSettingsShared749<"V0457_POKEMON_LUMINEON", "LUMINEON">;

export type PokemonSettingsLumineonNormal = PokemonSettingsShared750<"V0457_POKEMON_LUMINEON_NORMAL", "LUMINEON_NORMAL", "LUMINEON">;

export type PokemonSettingsLickilicky = PokemonSettingsShared755<"V0463_POKEMON_LICKILICKY", "LICKILICKY">;
export type PokemonSettingsGlaceon = PokemonSettingsShared755<"V0471_POKEMON_GLACEON", "GLACEON">;

export type PokemonSettingsLickilickyNormal = PokemonSettingsShared756<"V0463_POKEMON_LICKILICKY_NORMAL", "LICKILICKY_NORMAL", "LICKILICKY">;
export type PokemonSettingsGlaceonNormal = PokemonSettingsShared756<"V0471_POKEMON_GLACEON_NORMAL", "GLACEON_NORMAL", "GLACEON">;

export type PokemonSettingsElectivire = PokemonSettingsShared761<"V0466_POKEMON_ELECTIVIRE", "ELECTIVIRE">;
export type PokemonSettingsMagmortar = PokemonSettingsShared761<"V0467_POKEMON_MAGMORTAR", "MAGMORTAR">;

export type PokemonSettingsElectivireNormal = PokemonSettingsShared762<"V0466_POKEMON_ELECTIVIRE_NORMAL", "ELECTIVIRE_NORMAL", "ELECTIVIRE">;
export type PokemonSettingsMagmortarNormal = PokemonSettingsShared762<"V0467_POKEMON_MAGMORTAR_NORMAL", "MAGMORTAR_NORMAL", "MAGMORTAR">;

export type PokemonSettingsHeat = PokemonSettingsShared780<"V0479_POKEMON_ROTOM_HEAT", "ROTOM_HEAT">;
export type PokemonSettingsNormal = PokemonSettingsShared780<"V0479_POKEMON_ROTOM_NORMAL", "ROTOM_NORMAL">;

export type PokemonSettingsUxie = PokemonSettingsShared781<"V0480_POKEMON_UXIE", "UXIE">;
export type PokemonSettingsMesprit = PokemonSettingsShared781<"V0481_POKEMON_MESPRIT", "MESPRIT">;
export type PokemonSettingsAzelf = PokemonSettingsShared781<"V0482_POKEMON_AZELF", "AZELF">;

export type PokemonSettingsUxieNormal = PokemonSettingsShared782<"V0480_POKEMON_UXIE_NORMAL", "UXIE_NORMAL", "UXIE">;
export type PokemonSettingsMespritNormal = PokemonSettingsShared782<"V0481_POKEMON_MESPRIT_NORMAL", "MESPRIT_NORMAL", "MESPRIT">;
export type PokemonSettingsAzelfNormal = PokemonSettingsShared782<"V0482_POKEMON_AZELF_NORMAL", "AZELF_NORMAL", "AZELF">;

export type PokemonSettingsDialga = PokemonSettingsShared783<"V0483_POKEMON_DIALGA", "DIALGA">;
export type PokemonSettingsPalkia = PokemonSettingsShared783<"V0484_POKEMON_PALKIA", "PALKIA">;

export type PokemonSettingsDialgaNormal = PokemonSettingsShared784<"V0483_POKEMON_DIALGA_NORMAL", "DIALGA_NORMAL", "DIALGA">;
export type PokemonSettingsPalkiaNormal = PokemonSettingsShared784<"V0484_POKEMON_PALKIA_NORMAL", "PALKIA_NORMAL", "PALKIA">;

export type PokemonSettingsDialgaOrigin = PokemonSettingsShared785<"V0483_POKEMON_DIALGA_ORIGIN", "DIALGA_ORIGIN", "DIALGA">;
export type PokemonSettingsPalkiaOrigin = PokemonSettingsShared785<"V0484_POKEMON_PALKIA_ORIGIN", "PALKIA_ORIGIN", "PALKIA">;

export type PokemonSettingsBug = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_BUG", "ARCEUS_BUG">;
export type PokemonSettingsDark = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_DARK", "ARCEUS_DARK">;
export type PokemonSettingsDragon = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_DRAGON", "ARCEUS_DRAGON">;
export type PokemonSettingsElectric = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_ELECTRIC", "ARCEUS_ELECTRIC">;
export type PokemonSettingsFairy = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_FAIRY", "ARCEUS_FAIRY">;
export type PokemonSettingsFighting = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_FIGHTING", "ARCEUS_FIGHTING">;
export type PokemonSettingsFire = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_FIRE", "ARCEUS_FIRE">;
export type PokemonSettingsFlying = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_FLYING", "ARCEUS_FLYING">;
export type PokemonSettingsGhost = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_GHOST", "ARCEUS_GHOST">;
export type PokemonSettingsGrass = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_GRASS", "ARCEUS_GRASS">;
export type PokemonSettingsGround = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_GROUND", "ARCEUS_GROUND">;
export type PokemonSettingsIce = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_ICE", "ARCEUS_ICE">;
export type PokemonSettingsNormal2 = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_NORMAL", "ARCEUS_NORMAL">;
export type PokemonSettingsPoison = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_POISON", "ARCEUS_POISON">;
export type PokemonSettingsPsychic = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_PSYCHIC", "ARCEUS_PSYCHIC">;
export type PokemonSettingsRock = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_ROCK", "ARCEUS_ROCK">;
export type PokemonSettingsSteel = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_STEEL", "ARCEUS_STEEL">;
export type PokemonSettingsWater = PokemonSettingsShared805<"V0493_POKEMON_ARCEUS_WATER", "ARCEUS_WATER">;

export interface PokemonSettingsGen4MasterfileByTemplateId {
  "V0387_POKEMON_TURTWIG": PokemonSettingsTurtwig;
  "V0387_POKEMON_TURTWIG_NORMAL": PokemonSettingsTurtwigNormal;
  "V0393_POKEMON_PIPLUP_NORMAL": PokemonSettingsPiplupNormal;
  "V0408_POKEMON_CRANIDOS_NORMAL": PokemonSettingsCranidosNormal;
  "V0388_POKEMON_GROTLE": V0388_pokemon_grotleEntry;
  "V0388_POKEMON_GROTLE_NORMAL": PokemonSettingsGrotleNormal;
  "V0394_POKEMON_PRINPLUP_NORMAL": PokemonSettingsPrinplupNormal;
  "V0389_POKEMON_TORTERRA": V0389_pokemon_torterraEntry;
  "V0389_POKEMON_TORTERRA_NORMAL": V0389_pokemon_torterra_normalEntry;
  "V0390_POKEMON_CHIMCHAR": V0390_pokemon_chimcharEntry;
  "V0390_POKEMON_CHIMCHAR_NORMAL": PokemonSettingsChimcharNormal;
  "V0403_POKEMON_SHINX_NORMAL": PokemonSettingsShinxNormal;
  "V0391_POKEMON_MONFERNO": V0391_pokemon_monfernoEntry;
  "V0391_POKEMON_MONFERNO_NORMAL": V0391_pokemon_monferno_normalEntry;
  "V0392_POKEMON_INFERNAPE": PokemonSettingsInfernape;
  "V0395_POKEMON_EMPOLEON": PokemonSettingsEmpoleon;
  "V0473_POKEMON_MAMOSWINE": PokemonSettingsMamoswine;
  "V0392_POKEMON_INFERNAPE_NORMAL": PokemonSettingsInfernapeNormal;
  "V0395_POKEMON_EMPOLEON_NORMAL": PokemonSettingsEmpoleonNormal;
  "V0473_POKEMON_MAMOSWINE_NORMAL": PokemonSettingsMamoswineNormal;
  "V0393_POKEMON_PIPLUP": PokemonSettingsPiplup;
  "V0408_POKEMON_CRANIDOS": PokemonSettingsCranidos;
  "V0394_POKEMON_PRINPLUP": V0394_pokemon_prinplupEntry;
  "V0396_POKEMON_STARLY": PokemonSettingsStarly;
  "V0434_POKEMON_STUNKY": PokemonSettingsStunky;
  "V0396_POKEMON_STARLY_NORMAL": PokemonSettingsStarlyNormal;
  "V0434_POKEMON_STUNKY_NORMAL": PokemonSettingsStunkyNormal;
  "V0397_POKEMON_STARAVIA": V0397_pokemon_staraviaEntry;
  "V0397_POKEMON_STARAVIA_NORMAL": PokemonSettingsStaraviaNormal;
  "V0398_POKEMON_STARAPTOR": V0398_pokemon_staraptorEntry;
  "V0398_POKEMON_STARAPTOR_NORMAL": V0398_pokemon_staraptor_normalEntry;
  "V0399_POKEMON_BIDOOF": V0399_pokemon_bidoofEntry;
  "V0399_POKEMON_BIDOOF_NORMAL": V0399_pokemon_bidoof_normalEntry;
  "V0400_POKEMON_BIBAREL": PokemonSettingsBibarel;
  "V0454_POKEMON_TOXICROAK": PokemonSettingsToxicroak;
  "V0461_POKEMON_WEAVILE": PokemonSettingsWeavile;
  "V0400_POKEMON_BIBAREL_NORMAL": PokemonSettingsBibarelNormal;
  "V0454_POKEMON_TOXICROAK_NORMAL": PokemonSettingsToxicroakNormal;
  "V0461_POKEMON_WEAVILE_NORMAL": PokemonSettingsWeavileNormal;
  "V0401_POKEMON_KRICKETOT": PokemonSettingsKricketot;
  "V0446_POKEMON_MUNCHLAX": PokemonSettingsMunchlax;
  "V0456_POKEMON_FINNEON": PokemonSettingsFinneon;
  "V0401_POKEMON_KRICKETOT_NORMAL": PokemonSettingsKricketotNormal;
  "V0422_POKEMON_SHELLOS_EAST_SEA": PokemonSettingsShellosEastSea;
  "V0422_POKEMON_SHELLOS_WEST_SEA": PokemonSettingsShellosWestSea;
  "V0446_POKEMON_MUNCHLAX_NORMAL": PokemonSettingsMunchlaxNormal;
  "V0456_POKEMON_FINNEON_NORMAL": PokemonSettingsFinneonNormal;
  "V0402_POKEMON_KRICKETUNE": PokemonSettingsKricketune;
  "V0402_POKEMON_KRICKETUNE_NORMAL": PokemonSettingsKricketuneNormal;
  "V0403_POKEMON_SHINX": PokemonSettingsShinx;
  "V0404_POKEMON_LUXIO": PokemonSettingsLuxio;
  "V0404_POKEMON_LUXIO_NORMAL": PokemonSettingsLuxioNormal;
  "V0405_POKEMON_LUXRAY": PokemonSettingsLuxray;
  "V0405_POKEMON_LUXRAY_NORMAL": PokemonSettingsLuxrayNormal;
  "V0406_POKEMON_BUDEW": PokemonSettingsBudew;
  "V0406_POKEMON_BUDEW_NORMAL": PokemonSettingsBudewNormal;
  "V0407_POKEMON_ROSERADE": V0407_pokemon_roseradeEntry;
  "V0407_POKEMON_ROSERADE_NORMAL": V0407_pokemon_roserade_normalEntry;
  "V0409_POKEMON_RAMPARDOS": PokemonSettingsRampardos;
  "V0432_POKEMON_PURUGLY": PokemonSettingsPurugly;
  "V0409_POKEMON_RAMPARDOS_NORMAL": PokemonSettingsRampardosNormal;
  "V0432_POKEMON_PURUGLY_NORMAL": PokemonSettingsPuruglyNormal;
  "V0410_POKEMON_SHIELDON": V0410_pokemon_shieldonEntry;
  "V0410_POKEMON_SHIELDON_NORMAL": V0410_pokemon_shieldon_normalEntry;
  "V0411_POKEMON_BASTIODON": V0411_pokemon_bastiodonEntry;
  "V0411_POKEMON_BASTIODON_NORMAL": V0411_pokemon_bastiodon_normalEntry;
  "V0412_POKEMON_BURMY": V0412_pokemon_burmyEntry;
  "V0412_POKEMON_BURMY_PLANT": V0412_pokemon_burmy_plantEntry;
  "V0412_POKEMON_BURMY_SANDY": PokemonSettingsSandy;
  "V0412_POKEMON_BURMY_TRASH": PokemonSettingsTrash;
  "V0413_POKEMON_WORMADAM": V0413_pokemon_wormadamEntry;
  "V0413_POKEMON_WORMADAM_PLANT": PokemonSettingsWormadamPlant;
  "V0437_POKEMON_BRONZONG_NORMAL": PokemonSettingsBronzongNormal;
  "V0413_POKEMON_WORMADAM_SANDY": PokemonSettingsWormadamSandy;
  "V0413_POKEMON_WORMADAM_TRASH": PokemonSettingsWormadamTrash;
  "V0414_POKEMON_MOTHIM": PokemonSettingsMothim;
  "V0416_POKEMON_VESPIQUEN": PokemonSettingsVespiquen;
  "V0469_POKEMON_YANMEGA": PokemonSettingsYanmega;
  "V0414_POKEMON_MOTHIM_NORMAL": PokemonSettingsMothimNormal;
  "V0416_POKEMON_VESPIQUEN_NORMAL": PokemonSettingsVespiquenNormal;
  "V0469_POKEMON_YANMEGA_NORMAL": PokemonSettingsYanmegaNormal;
  "V0415_POKEMON_COMBEE": V0415_pokemon_combeeEntry;
  "V0415_POKEMON_COMBEE_NORMAL": V0415_pokemon_combee_normalEntry;
  "V0417_POKEMON_PACHIRISU": PokemonSettingsPachirisu;
  "V0417_POKEMON_PACHIRISU_NORMAL": PokemonSettingsPachirisuNormal;
  "V0418_POKEMON_BUIZEL": V0418_pokemon_buizelEntry;
  "V0418_POKEMON_BUIZEL_NORMAL": V0418_pokemon_buizel_normalEntry;
  "V0419_POKEMON_FLOATZEL": PokemonSettingsFloatzel;
  "V0421_POKEMON_CHERRIM": PokemonSettingsCherrim;
  "V0419_POKEMON_FLOATZEL_NORMAL": PokemonSettingsFloatzelNormal;
  "V0421_POKEMON_CHERRIM_OVERCAST": PokemonSettingsCherrimOvercast;
  "V0420_POKEMON_CHERUBI": V0420_pokemon_cherubiEntry;
  "V0420_POKEMON_CHERUBI_NORMAL": V0420_pokemon_cherubi_normalEntry;
  "V0421_POKEMON_CHERRIM_SUNNY": V0421_pokemon_cherrim_sunnyEntry;
  "V0422_POKEMON_SHELLOS": PokemonSettingsShellos;
  "V0423_POKEMON_GASTRODON": V0423_pokemon_gastrodonEntry;
  "V0423_POKEMON_GASTRODON_EAST_SEA": PokemonSettingsGastrodonEastSea;
  "V0423_POKEMON_GASTRODON_WEST_SEA": PokemonSettingsGastrodonWestSea;
  "V0424_POKEMON_AMBIPOM": V0424_pokemon_ambipomEntry;
  "V0424_POKEMON_AMBIPOM_NORMAL": V0424_pokemon_ambipom_normalEntry;
  "V0425_POKEMON_DRIFLOON": V0425_pokemon_drifloonEntry;
  "V0425_POKEMON_DRIFLOON_NORMAL": V0425_pokemon_drifloon_normalEntry;
  "V0426_POKEMON_DRIFBLIM": V0426_pokemon_drifblimEntry;
  "V0426_POKEMON_DRIFBLIM_NORMAL": V0426_pokemon_drifblim_normalEntry;
  "V0427_POKEMON_BUNEARY": V0427_pokemon_bunearyEntry;
  "V0427_POKEMON_BUNEARY_NORMAL": V0427_pokemon_buneary_normalEntry;
  "V0428_POKEMON_LOPUNNY": V0428_pokemon_lopunnyEntry;
  "V0428_POKEMON_LOPUNNY_NORMAL": V0428_pokemon_lopunny_normalEntry;
  "V0429_POKEMON_MISMAGIUS": V0429_pokemon_mismagiusEntry;
  "V0429_POKEMON_MISMAGIUS_NORMAL": V0429_pokemon_mismagius_normalEntry;
  "V0430_POKEMON_HONCHKROW": V0430_pokemon_honchkrowEntry;
  "V0430_POKEMON_HONCHKROW_NORMAL": V0430_pokemon_honchkrow_normalEntry;
  "V0431_POKEMON_GLAMEOW": V0431_pokemon_glameowEntry;
  "V0431_POKEMON_GLAMEOW_NORMAL": V0431_pokemon_glameow_normalEntry;
  "V0433_POKEMON_CHINGLING": V0433_pokemon_chinglingEntry;
  "V0433_POKEMON_CHINGLING_NORMAL": V0433_pokemon_chingling_normalEntry;
  "V0435_POKEMON_SKUNTANK": PokemonSettingsSkuntank;
  "V0435_POKEMON_SKUNTANK_NORMAL": PokemonSettingsSkuntankNormal;
  "V0436_POKEMON_BRONZOR": PokemonSettingsBronzor;
  "V0458_POKEMON_MANTYKE": PokemonSettingsMantyke;
  "V0436_POKEMON_BRONZOR_NORMAL": PokemonSettingsBronzorNormal;
  "V0458_POKEMON_MANTYKE_NORMAL": PokemonSettingsMantykeNormal;
  "V0437_POKEMON_BRONZONG": V0437_pokemon_bronzongEntry;
  "V0438_POKEMON_BONSLY": V0438_pokemon_bonslyEntry;
  "V0438_POKEMON_BONSLY_NORMAL": PokemonSettingsBonslyNormal;
  "V0440_POKEMON_HAPPINY_NORMAL": PokemonSettingsHappinyNormal;
  "V0439_POKEMON_MIME_JR": V0439_pokemon_mime_jrEntry;
  "V0439_POKEMON_MIME_JR_NORMAL": V0439_pokemon_mime_jr_normalEntry;
  "V0440_POKEMON_HAPPINY": V0440_pokemon_happinyEntry;
  "V0441_POKEMON_CHATOT": PokemonSettingsChatot;
  "V0479_POKEMON_ROTOM": PokemonSettingsRotom;
  "V0441_POKEMON_CHATOT_NORMAL": PokemonSettingsChatotNormal;
  "V0479_POKEMON_ROTOM_FROST": PokemonSettingsRotomFrost;
  "V0479_POKEMON_ROTOM_MOW": PokemonSettingsRotomMow;
  "V0479_POKEMON_ROTOM_WASH": PokemonSettingsRotomWash;
  "V0442_POKEMON_SPIRITOMB": V0442_pokemon_spiritombEntry;
  "V0442_POKEMON_SPIRITOMB_NORMAL": V0442_pokemon_spiritomb_normalEntry;
  "V0443_POKEMON_GIBLE": PokemonSettingsGible;
  "V0459_POKEMON_SNOVER": PokemonSettingsSnover;
  "V0443_POKEMON_GIBLE_NORMAL": PokemonSettingsGibleNormal;
  "V0459_POKEMON_SNOVER_NORMAL": PokemonSettingsSnoverNormal;
  "V0444_POKEMON_GABITE": V0444_pokemon_gabiteEntry;
  "V0444_POKEMON_GABITE_NORMAL": V0444_pokemon_gabite_normalEntry;
  "V0445_POKEMON_GARCHOMP": V0445_pokemon_garchompEntry;
  "V0445_POKEMON_GARCHOMP_NORMAL": V0445_pokemon_garchomp_normalEntry;
  "V0447_POKEMON_RIOLU": V0447_pokemon_rioluEntry;
  "V0447_POKEMON_RIOLU_NORMAL": V0447_pokemon_riolu_normalEntry;
  "V0448_POKEMON_LUCARIO": V0448_pokemon_lucarioEntry;
  "V0448_POKEMON_LUCARIO_NORMAL": V0448_pokemon_lucario_normalEntry;
  "V0449_POKEMON_HIPPOPOTAS": V0449_pokemon_hippopotasEntry;
  "V0449_POKEMON_HIPPOPOTAS_NORMAL": V0449_pokemon_hippopotas_normalEntry;
  "V0450_POKEMON_HIPPOWDON": V0450_pokemon_hippowdonEntry;
  "V0450_POKEMON_HIPPOWDON_NORMAL": V0450_pokemon_hippowdon_normalEntry;
  "V0451_POKEMON_SKORUPI": V0451_pokemon_skorupiEntry;
  "V0451_POKEMON_SKORUPI_NORMAL": PokemonSettingsSkorupiNormal;
  "V0452_POKEMON_DRAPION": V0452_pokemon_drapionEntry;
  "V0452_POKEMON_DRAPION_NORMAL": V0452_pokemon_drapion_normalEntry;
  "V0453_POKEMON_CROAGUNK": V0453_pokemon_croagunkEntry;
  "V0453_POKEMON_CROAGUNK_NORMAL": V0453_pokemon_croagunk_normalEntry;
  "V0455_POKEMON_CARNIVINE": V0455_pokemon_carnivineEntry;
  "V0455_POKEMON_CARNIVINE_NORMAL": V0455_pokemon_carnivine_normalEntry;
  "V0457_POKEMON_LUMINEON": PokemonSettingsLumineon;
  "V0457_POKEMON_LUMINEON_NORMAL": PokemonSettingsLumineonNormal;
  "V0460_POKEMON_ABOMASNOW": V0460_pokemon_abomasnowEntry;
  "V0460_POKEMON_ABOMASNOW_NORMAL": V0460_pokemon_abomasnow_normalEntry;
  "V0462_POKEMON_MAGNEZONE": V0462_pokemon_magnezoneEntry;
  "V0462_POKEMON_MAGNEZONE_NORMAL": V0462_pokemon_magnezone_normalEntry;
  "V0463_POKEMON_LICKILICKY": PokemonSettingsLickilicky;
  "V0471_POKEMON_GLACEON": PokemonSettingsGlaceon;
  "V0463_POKEMON_LICKILICKY_NORMAL": PokemonSettingsLickilickyNormal;
  "V0471_POKEMON_GLACEON_NORMAL": PokemonSettingsGlaceonNormal;
  "V0464_POKEMON_RHYPERIOR": V0464_pokemon_rhyperiorEntry;
  "V0464_POKEMON_RHYPERIOR_NORMAL": V0464_pokemon_rhyperior_normalEntry;
  "V0465_POKEMON_TANGROWTH": V0465_pokemon_tangrowthEntry;
  "V0465_POKEMON_TANGROWTH_NORMAL": V0465_pokemon_tangrowth_normalEntry;
  "V0466_POKEMON_ELECTIVIRE": PokemonSettingsElectivire;
  "V0467_POKEMON_MAGMORTAR": PokemonSettingsMagmortar;
  "V0466_POKEMON_ELECTIVIRE_NORMAL": PokemonSettingsElectivireNormal;
  "V0467_POKEMON_MAGMORTAR_NORMAL": PokemonSettingsMagmortarNormal;
  "V0468_POKEMON_TOGEKISS": V0468_pokemon_togekissEntry;
  "V0468_POKEMON_TOGEKISS_NORMAL": V0468_pokemon_togekiss_normalEntry;
  "V0470_POKEMON_LEAFEON": V0470_pokemon_leafeonEntry;
  "V0470_POKEMON_LEAFEON_NORMAL": V0470_pokemon_leafeon_normalEntry;
  "V0472_POKEMON_GLISCOR": V0472_pokemon_gliscorEntry;
  "V0472_POKEMON_GLISCOR_NORMAL": V0472_pokemon_gliscor_normalEntry;
  "V0474_POKEMON_PORYGON_Z": V0474_pokemon_porygon_zEntry;
  "V0474_POKEMON_PORYGON_Z_NORMAL": V0474_pokemon_porygon_z_normalEntry;
  "V0475_POKEMON_GALLADE": V0475_pokemon_galladeEntry;
  "V0475_POKEMON_GALLADE_NORMAL": V0475_pokemon_gallade_normalEntry;
  "V0476_POKEMON_PROBOPASS": V0476_pokemon_probopassEntry;
  "V0476_POKEMON_PROBOPASS_NORMAL": V0476_pokemon_probopass_normalEntry;
  "V0477_POKEMON_DUSKNOIR": V0477_pokemon_dusknoirEntry;
  "V0477_POKEMON_DUSKNOIR_NORMAL": V0477_pokemon_dusknoir_normalEntry;
  "V0478_POKEMON_FROSLASS": V0478_pokemon_froslassEntry;
  "V0478_POKEMON_FROSLASS_NORMAL": V0478_pokemon_froslass_normalEntry;
  "V0479_POKEMON_ROTOM_FAN": V0479_pokemon_rotom_fanEntry;
  "V0479_POKEMON_ROTOM_HEAT": PokemonSettingsHeat;
  "V0479_POKEMON_ROTOM_NORMAL": PokemonSettingsNormal;
  "V0480_POKEMON_UXIE": PokemonSettingsUxie;
  "V0481_POKEMON_MESPRIT": PokemonSettingsMesprit;
  "V0482_POKEMON_AZELF": PokemonSettingsAzelf;
  "V0480_POKEMON_UXIE_NORMAL": PokemonSettingsUxieNormal;
  "V0481_POKEMON_MESPRIT_NORMAL": PokemonSettingsMespritNormal;
  "V0482_POKEMON_AZELF_NORMAL": PokemonSettingsAzelfNormal;
  "V0483_POKEMON_DIALGA": PokemonSettingsDialga;
  "V0484_POKEMON_PALKIA": PokemonSettingsPalkia;
  "V0483_POKEMON_DIALGA_NORMAL": PokemonSettingsDialgaNormal;
  "V0484_POKEMON_PALKIA_NORMAL": PokemonSettingsPalkiaNormal;
  "V0483_POKEMON_DIALGA_ORIGIN": PokemonSettingsDialgaOrigin;
  "V0484_POKEMON_PALKIA_ORIGIN": PokemonSettingsPalkiaOrigin;
  "V0485_POKEMON_HEATRAN": V0485_pokemon_heatranEntry;
  "V0485_POKEMON_HEATRAN_NORMAL": V0485_pokemon_heatran_normalEntry;
  "V0486_POKEMON_REGIGIGAS": V0486_pokemon_regigigasEntry;
  "V0486_POKEMON_REGIGIGAS_NORMAL": V0486_pokemon_regigigas_normalEntry;
  "V0487_POKEMON_GIRATINA": V0487_pokemon_giratinaEntry;
  "V0487_POKEMON_GIRATINA_ALTERED": V0487_pokemon_giratina_alteredEntry;
  "V0487_POKEMON_GIRATINA_ORIGIN": V0487_pokemon_giratina_originEntry;
  "V0488_POKEMON_CRESSELIA": V0488_pokemon_cresseliaEntry;
  "V0488_POKEMON_CRESSELIA_NORMAL": V0488_pokemon_cresselia_normalEntry;
  "V0489_POKEMON_PHIONE": V0489_pokemon_phioneEntry;
  "V0489_POKEMON_PHIONE_NORMAL": V0489_pokemon_phione_normalEntry;
  "V0490_POKEMON_MANAPHY": V0490_pokemon_manaphyEntry;
  "V0490_POKEMON_MANAPHY_NORMAL": V0490_pokemon_manaphy_normalEntry;
  "V0491_POKEMON_DARKRAI": V0491_pokemon_darkraiEntry;
  "V0491_POKEMON_DARKRAI_NORMAL": V0491_pokemon_darkrai_normalEntry;
  "V0492_POKEMON_SHAYMIN": V0492_pokemon_shayminEntry;
  "V0492_POKEMON_SHAYMIN_LAND": V0492_pokemon_shaymin_landEntry;
  "V0492_POKEMON_SHAYMIN_SKY": V0492_pokemon_shaymin_skyEntry;
  "V0493_POKEMON_ARCEUS": V0493_pokemon_arceusEntry;
  "V0493_POKEMON_ARCEUS_BUG": PokemonSettingsBug;
  "V0493_POKEMON_ARCEUS_DARK": PokemonSettingsDark;
  "V0493_POKEMON_ARCEUS_DRAGON": PokemonSettingsDragon;
  "V0493_POKEMON_ARCEUS_ELECTRIC": PokemonSettingsElectric;
  "V0493_POKEMON_ARCEUS_FAIRY": PokemonSettingsFairy;
  "V0493_POKEMON_ARCEUS_FIGHTING": PokemonSettingsFighting;
  "V0493_POKEMON_ARCEUS_FIRE": PokemonSettingsFire;
  "V0493_POKEMON_ARCEUS_FLYING": PokemonSettingsFlying;
  "V0493_POKEMON_ARCEUS_GHOST": PokemonSettingsGhost;
  "V0493_POKEMON_ARCEUS_GRASS": PokemonSettingsGrass;
  "V0493_POKEMON_ARCEUS_GROUND": PokemonSettingsGround;
  "V0493_POKEMON_ARCEUS_ICE": PokemonSettingsIce;
  "V0493_POKEMON_ARCEUS_NORMAL": PokemonSettingsNormal2;
  "V0493_POKEMON_ARCEUS_POISON": PokemonSettingsPoison;
  "V0493_POKEMON_ARCEUS_PSYCHIC": PokemonSettingsPsychic;
  "V0493_POKEMON_ARCEUS_ROCK": PokemonSettingsRock;
  "V0493_POKEMON_ARCEUS_STEEL": PokemonSettingsSteel;
  "V0493_POKEMON_ARCEUS_WATER": PokemonSettingsWater;
}

export interface PokemonSettingsGen4ByDexId {
  "0387": PokemonSettingsTurtwig | PokemonSettingsTurtwigNormal;
  "0388": V0388_pokemon_grotleEntry | PokemonSettingsGrotleNormal;
  "0389": V0389_pokemon_torterraEntry | V0389_pokemon_torterra_normalEntry;
  "0390": V0390_pokemon_chimcharEntry | PokemonSettingsChimcharNormal;
  "0391": V0391_pokemon_monfernoEntry | V0391_pokemon_monferno_normalEntry;
  "0392": PokemonSettingsInfernape | PokemonSettingsInfernapeNormal;
  "0393": PokemonSettingsPiplupNormal | PokemonSettingsPiplup;
  "0394": PokemonSettingsPrinplupNormal | V0394_pokemon_prinplupEntry;
  "0395": PokemonSettingsEmpoleon | PokemonSettingsEmpoleonNormal;
  "0396": PokemonSettingsStarly | PokemonSettingsStarlyNormal;
  "0397": V0397_pokemon_staraviaEntry | PokemonSettingsStaraviaNormal;
  "0398": V0398_pokemon_staraptorEntry | V0398_pokemon_staraptor_normalEntry;
  "0399": V0399_pokemon_bidoofEntry | V0399_pokemon_bidoof_normalEntry;
  "0400": PokemonSettingsBibarel | PokemonSettingsBibarelNormal;
  "0401": PokemonSettingsKricketot | PokemonSettingsKricketotNormal;
  "0402": PokemonSettingsKricketune | PokemonSettingsKricketuneNormal;
  "0403": PokemonSettingsShinxNormal | PokemonSettingsShinx;
  "0404": PokemonSettingsLuxio | PokemonSettingsLuxioNormal;
  "0405": PokemonSettingsLuxray | PokemonSettingsLuxrayNormal;
  "0406": PokemonSettingsBudew | PokemonSettingsBudewNormal;
  "0407": V0407_pokemon_roseradeEntry | V0407_pokemon_roserade_normalEntry;
  "0408": PokemonSettingsCranidosNormal | PokemonSettingsCranidos;
  "0409": PokemonSettingsRampardos | PokemonSettingsRampardosNormal;
  "0410": V0410_pokemon_shieldonEntry | V0410_pokemon_shieldon_normalEntry;
  "0411": V0411_pokemon_bastiodonEntry | V0411_pokemon_bastiodon_normalEntry;
  "0412": V0412_pokemon_burmyEntry | V0412_pokemon_burmy_plantEntry | PokemonSettingsSandy | PokemonSettingsTrash;
  "0413": V0413_pokemon_wormadamEntry | PokemonSettingsWormadamPlant | PokemonSettingsWormadamSandy | PokemonSettingsWormadamTrash;
  "0414": PokemonSettingsMothim | PokemonSettingsMothimNormal;
  "0415": V0415_pokemon_combeeEntry | V0415_pokemon_combee_normalEntry;
  "0416": PokemonSettingsVespiquen | PokemonSettingsVespiquenNormal;
  "0417": PokemonSettingsPachirisu | PokemonSettingsPachirisuNormal;
  "0418": V0418_pokemon_buizelEntry | V0418_pokemon_buizel_normalEntry;
  "0419": PokemonSettingsFloatzel | PokemonSettingsFloatzelNormal;
  "0420": V0420_pokemon_cherubiEntry | V0420_pokemon_cherubi_normalEntry;
  "0421": PokemonSettingsCherrim | PokemonSettingsCherrimOvercast | V0421_pokemon_cherrim_sunnyEntry;
  "0422": PokemonSettingsShellosEastSea | PokemonSettingsShellosWestSea | PokemonSettingsShellos;
  "0423": V0423_pokemon_gastrodonEntry | PokemonSettingsGastrodonEastSea | PokemonSettingsGastrodonWestSea;
  "0424": V0424_pokemon_ambipomEntry | V0424_pokemon_ambipom_normalEntry;
  "0425": V0425_pokemon_drifloonEntry | V0425_pokemon_drifloon_normalEntry;
  "0426": V0426_pokemon_drifblimEntry | V0426_pokemon_drifblim_normalEntry;
  "0427": V0427_pokemon_bunearyEntry | V0427_pokemon_buneary_normalEntry;
  "0428": V0428_pokemon_lopunnyEntry | V0428_pokemon_lopunny_normalEntry;
  "0429": V0429_pokemon_mismagiusEntry | V0429_pokemon_mismagius_normalEntry;
  "0430": V0430_pokemon_honchkrowEntry | V0430_pokemon_honchkrow_normalEntry;
  "0431": V0431_pokemon_glameowEntry | V0431_pokemon_glameow_normalEntry;
  "0432": PokemonSettingsPurugly | PokemonSettingsPuruglyNormal;
  "0433": V0433_pokemon_chinglingEntry | V0433_pokemon_chingling_normalEntry;
  "0434": PokemonSettingsStunky | PokemonSettingsStunkyNormal;
  "0435": PokemonSettingsSkuntank | PokemonSettingsSkuntankNormal;
  "0436": PokemonSettingsBronzor | PokemonSettingsBronzorNormal;
  "0437": PokemonSettingsBronzongNormal | V0437_pokemon_bronzongEntry;
  "0438": V0438_pokemon_bonslyEntry | PokemonSettingsBonslyNormal;
  "0439": V0439_pokemon_mime_jrEntry | V0439_pokemon_mime_jr_normalEntry;
  "0440": PokemonSettingsHappinyNormal | V0440_pokemon_happinyEntry;
  "0441": PokemonSettingsChatot | PokemonSettingsChatotNormal;
  "0442": V0442_pokemon_spiritombEntry | V0442_pokemon_spiritomb_normalEntry;
  "0443": PokemonSettingsGible | PokemonSettingsGibleNormal;
  "0444": V0444_pokemon_gabiteEntry | V0444_pokemon_gabite_normalEntry;
  "0445": V0445_pokemon_garchompEntry | V0445_pokemon_garchomp_normalEntry;
  "0446": PokemonSettingsMunchlax | PokemonSettingsMunchlaxNormal;
  "0447": V0447_pokemon_rioluEntry | V0447_pokemon_riolu_normalEntry;
  "0448": V0448_pokemon_lucarioEntry | V0448_pokemon_lucario_normalEntry;
  "0449": V0449_pokemon_hippopotasEntry | V0449_pokemon_hippopotas_normalEntry;
  "0450": V0450_pokemon_hippowdonEntry | V0450_pokemon_hippowdon_normalEntry;
  "0451": V0451_pokemon_skorupiEntry | PokemonSettingsSkorupiNormal;
  "0452": V0452_pokemon_drapionEntry | V0452_pokemon_drapion_normalEntry;
  "0453": V0453_pokemon_croagunkEntry | V0453_pokemon_croagunk_normalEntry;
  "0454": PokemonSettingsToxicroak | PokemonSettingsToxicroakNormal;
  "0455": V0455_pokemon_carnivineEntry | V0455_pokemon_carnivine_normalEntry;
  "0456": PokemonSettingsFinneon | PokemonSettingsFinneonNormal;
  "0457": PokemonSettingsLumineon | PokemonSettingsLumineonNormal;
  "0458": PokemonSettingsMantyke | PokemonSettingsMantykeNormal;
  "0459": PokemonSettingsSnover | PokemonSettingsSnoverNormal;
  "0460": V0460_pokemon_abomasnowEntry | V0460_pokemon_abomasnow_normalEntry;
  "0461": PokemonSettingsWeavile | PokemonSettingsWeavileNormal;
  "0462": V0462_pokemon_magnezoneEntry | V0462_pokemon_magnezone_normalEntry;
  "0463": PokemonSettingsLickilicky | PokemonSettingsLickilickyNormal;
  "0464": V0464_pokemon_rhyperiorEntry | V0464_pokemon_rhyperior_normalEntry;
  "0465": V0465_pokemon_tangrowthEntry | V0465_pokemon_tangrowth_normalEntry;
  "0466": PokemonSettingsElectivire | PokemonSettingsElectivireNormal;
  "0467": PokemonSettingsMagmortar | PokemonSettingsMagmortarNormal;
  "0468": V0468_pokemon_togekissEntry | V0468_pokemon_togekiss_normalEntry;
  "0469": PokemonSettingsYanmega | PokemonSettingsYanmegaNormal;
  "0470": V0470_pokemon_leafeonEntry | V0470_pokemon_leafeon_normalEntry;
  "0471": PokemonSettingsGlaceon | PokemonSettingsGlaceonNormal;
  "0472": V0472_pokemon_gliscorEntry | V0472_pokemon_gliscor_normalEntry;
  "0473": PokemonSettingsMamoswine | PokemonSettingsMamoswineNormal;
  "0474": V0474_pokemon_porygon_zEntry | V0474_pokemon_porygon_z_normalEntry;
  "0475": V0475_pokemon_galladeEntry | V0475_pokemon_gallade_normalEntry;
  "0476": V0476_pokemon_probopassEntry | V0476_pokemon_probopass_normalEntry;
  "0477": V0477_pokemon_dusknoirEntry | V0477_pokemon_dusknoir_normalEntry;
  "0478": V0478_pokemon_froslassEntry | V0478_pokemon_froslass_normalEntry;
  "0479": PokemonSettingsRotom | PokemonSettingsRotomFrost | PokemonSettingsRotomMow | PokemonSettingsRotomWash | V0479_pokemon_rotom_fanEntry | PokemonSettingsHeat | PokemonSettingsNormal;
  "0480": PokemonSettingsUxie | PokemonSettingsUxieNormal;
  "0481": PokemonSettingsMesprit | PokemonSettingsMespritNormal;
  "0482": PokemonSettingsAzelf | PokemonSettingsAzelfNormal;
  "0483": PokemonSettingsDialga | PokemonSettingsDialgaNormal | PokemonSettingsDialgaOrigin;
  "0484": PokemonSettingsPalkia | PokemonSettingsPalkiaNormal | PokemonSettingsPalkiaOrigin;
  "0485": V0485_pokemon_heatranEntry | V0485_pokemon_heatran_normalEntry;
  "0486": V0486_pokemon_regigigasEntry | V0486_pokemon_regigigas_normalEntry;
  "0487": V0487_pokemon_giratinaEntry | V0487_pokemon_giratina_alteredEntry | V0487_pokemon_giratina_originEntry;
  "0488": V0488_pokemon_cresseliaEntry | V0488_pokemon_cresselia_normalEntry;
  "0489": V0489_pokemon_phioneEntry | V0489_pokemon_phione_normalEntry;
  "0490": V0490_pokemon_manaphyEntry | V0490_pokemon_manaphy_normalEntry;
  "0491": V0491_pokemon_darkraiEntry | V0491_pokemon_darkrai_normalEntry;
  "0492": V0492_pokemon_shayminEntry | V0492_pokemon_shaymin_landEntry | V0492_pokemon_shaymin_skyEntry;
  "0493": V0493_pokemon_arceusEntry | PokemonSettingsBug | PokemonSettingsDark | PokemonSettingsDragon | PokemonSettingsElectric | PokemonSettingsFairy | PokemonSettingsFighting | PokemonSettingsFire | PokemonSettingsFlying | PokemonSettingsGhost | PokemonSettingsGrass | PokemonSettingsGround | PokemonSettingsIce | PokemonSettingsNormal2 | PokemonSettingsPoison | PokemonSettingsPsychic | PokemonSettingsRock | PokemonSettingsSteel | PokemonSettingsWater;
}

export interface PokemonSettingsGen4ByPokemonId {
  "ABOMASNOW": V0460_pokemon_abomasnowEntry | V0460_pokemon_abomasnow_normalEntry;
  "AMBIPOM": V0424_pokemon_ambipomEntry | V0424_pokemon_ambipom_normalEntry;
  "ARCEUS": V0493_pokemon_arceusEntry | PokemonSettingsBug | PokemonSettingsDark | PokemonSettingsDragon | PokemonSettingsElectric | PokemonSettingsFairy | PokemonSettingsFighting | PokemonSettingsFire | PokemonSettingsFlying | PokemonSettingsGhost | PokemonSettingsGrass | PokemonSettingsGround | PokemonSettingsIce | PokemonSettingsNormal2 | PokemonSettingsPoison | PokemonSettingsPsychic | PokemonSettingsRock | PokemonSettingsSteel | PokemonSettingsWater;
  "AZELF": PokemonSettingsAzelf | PokemonSettingsAzelfNormal;
  "BASTIODON": V0411_pokemon_bastiodonEntry | V0411_pokemon_bastiodon_normalEntry;
  "BIBAREL": PokemonSettingsBibarel | PokemonSettingsBibarelNormal;
  "BIDOOF": V0399_pokemon_bidoofEntry | V0399_pokemon_bidoof_normalEntry;
  "BONSLY": V0438_pokemon_bonslyEntry | PokemonSettingsBonslyNormal;
  "BRONZONG": PokemonSettingsBronzongNormal | V0437_pokemon_bronzongEntry;
  "BRONZOR": PokemonSettingsBronzor | PokemonSettingsBronzorNormal;
  "BUDEW": PokemonSettingsBudew | PokemonSettingsBudewNormal;
  "BUIZEL": V0418_pokemon_buizelEntry | V0418_pokemon_buizel_normalEntry;
  "BUNEARY": V0427_pokemon_bunearyEntry | V0427_pokemon_buneary_normalEntry;
  "BURMY": V0412_pokemon_burmyEntry | V0412_pokemon_burmy_plantEntry | PokemonSettingsSandy | PokemonSettingsTrash;
  "CARNIVINE": V0455_pokemon_carnivineEntry | V0455_pokemon_carnivine_normalEntry;
  "CHATOT": PokemonSettingsChatot | PokemonSettingsChatotNormal;
  "CHERRIM": PokemonSettingsCherrim | PokemonSettingsCherrimOvercast | V0421_pokemon_cherrim_sunnyEntry;
  "CHERUBI": V0420_pokemon_cherubiEntry | V0420_pokemon_cherubi_normalEntry;
  "CHIMCHAR": V0390_pokemon_chimcharEntry | PokemonSettingsChimcharNormal;
  "CHINGLING": V0433_pokemon_chinglingEntry | V0433_pokemon_chingling_normalEntry;
  "COMBEE": V0415_pokemon_combeeEntry | V0415_pokemon_combee_normalEntry;
  "CRANIDOS": PokemonSettingsCranidosNormal | PokemonSettingsCranidos;
  "CRESSELIA": V0488_pokemon_cresseliaEntry | V0488_pokemon_cresselia_normalEntry;
  "CROAGUNK": V0453_pokemon_croagunkEntry | V0453_pokemon_croagunk_normalEntry;
  "DARKRAI": V0491_pokemon_darkraiEntry | V0491_pokemon_darkrai_normalEntry;
  "DIALGA": PokemonSettingsDialga | PokemonSettingsDialgaNormal | PokemonSettingsDialgaOrigin;
  "DRAPION": V0452_pokemon_drapionEntry | V0452_pokemon_drapion_normalEntry;
  "DRIFBLIM": V0426_pokemon_drifblimEntry | V0426_pokemon_drifblim_normalEntry;
  "DRIFLOON": V0425_pokemon_drifloonEntry | V0425_pokemon_drifloon_normalEntry;
  "DUSKNOIR": V0477_pokemon_dusknoirEntry | V0477_pokemon_dusknoir_normalEntry;
  "ELECTIVIRE": PokemonSettingsElectivire | PokemonSettingsElectivireNormal;
  "EMPOLEON": PokemonSettingsEmpoleon | PokemonSettingsEmpoleonNormal;
  "FINNEON": PokemonSettingsFinneon | PokemonSettingsFinneonNormal;
  "FLOATZEL": PokemonSettingsFloatzel | PokemonSettingsFloatzelNormal;
  "FROSLASS": V0478_pokemon_froslassEntry | V0478_pokemon_froslass_normalEntry;
  "GABITE": V0444_pokemon_gabiteEntry | V0444_pokemon_gabite_normalEntry;
  "GALLADE": V0475_pokemon_galladeEntry | V0475_pokemon_gallade_normalEntry;
  "GARCHOMP": V0445_pokemon_garchompEntry | V0445_pokemon_garchomp_normalEntry;
  "GASTRODON": V0423_pokemon_gastrodonEntry | PokemonSettingsGastrodonEastSea | PokemonSettingsGastrodonWestSea;
  "GIBLE": PokemonSettingsGible | PokemonSettingsGibleNormal;
  "GIRATINA": V0487_pokemon_giratinaEntry | V0487_pokemon_giratina_alteredEntry | V0487_pokemon_giratina_originEntry;
  "GLACEON": PokemonSettingsGlaceon | PokemonSettingsGlaceonNormal;
  "GLAMEOW": V0431_pokemon_glameowEntry | V0431_pokemon_glameow_normalEntry;
  "GLISCOR": V0472_pokemon_gliscorEntry | V0472_pokemon_gliscor_normalEntry;
  "GROTLE": V0388_pokemon_grotleEntry | PokemonSettingsGrotleNormal;
  "HAPPINY": PokemonSettingsHappinyNormal | V0440_pokemon_happinyEntry;
  "HEATRAN": V0485_pokemon_heatranEntry | V0485_pokemon_heatran_normalEntry;
  "HIPPOPOTAS": V0449_pokemon_hippopotasEntry | V0449_pokemon_hippopotas_normalEntry;
  "HIPPOWDON": V0450_pokemon_hippowdonEntry | V0450_pokemon_hippowdon_normalEntry;
  "HONCHKROW": V0430_pokemon_honchkrowEntry | V0430_pokemon_honchkrow_normalEntry;
  "INFERNAPE": PokemonSettingsInfernape | PokemonSettingsInfernapeNormal;
  "KRICKETOT": PokemonSettingsKricketot | PokemonSettingsKricketotNormal;
  "KRICKETUNE": PokemonSettingsKricketune | PokemonSettingsKricketuneNormal;
  "LEAFEON": V0470_pokemon_leafeonEntry | V0470_pokemon_leafeon_normalEntry;
  "LICKILICKY": PokemonSettingsLickilicky | PokemonSettingsLickilickyNormal;
  "LOPUNNY": V0428_pokemon_lopunnyEntry | V0428_pokemon_lopunny_normalEntry;
  "LUCARIO": V0448_pokemon_lucarioEntry | V0448_pokemon_lucario_normalEntry;
  "LUMINEON": PokemonSettingsLumineon | PokemonSettingsLumineonNormal;
  "LUXIO": PokemonSettingsLuxio | PokemonSettingsLuxioNormal;
  "LUXRAY": PokemonSettingsLuxray | PokemonSettingsLuxrayNormal;
  "MAGMORTAR": PokemonSettingsMagmortar | PokemonSettingsMagmortarNormal;
  "MAGNEZONE": V0462_pokemon_magnezoneEntry | V0462_pokemon_magnezone_normalEntry;
  "MAMOSWINE": PokemonSettingsMamoswine | PokemonSettingsMamoswineNormal;
  "MANAPHY": V0490_pokemon_manaphyEntry | V0490_pokemon_manaphy_normalEntry;
  "MANTYKE": PokemonSettingsMantyke | PokemonSettingsMantykeNormal;
  "MESPRIT": PokemonSettingsMesprit | PokemonSettingsMespritNormal;
  "MIME_JR": V0439_pokemon_mime_jrEntry | V0439_pokemon_mime_jr_normalEntry;
  "MISMAGIUS": V0429_pokemon_mismagiusEntry | V0429_pokemon_mismagius_normalEntry;
  "MONFERNO": V0391_pokemon_monfernoEntry | V0391_pokemon_monferno_normalEntry;
  "MOTHIM": PokemonSettingsMothim | PokemonSettingsMothimNormal;
  "MUNCHLAX": PokemonSettingsMunchlax | PokemonSettingsMunchlaxNormal;
  "PACHIRISU": PokemonSettingsPachirisu | PokemonSettingsPachirisuNormal;
  "PALKIA": PokemonSettingsPalkia | PokemonSettingsPalkiaNormal | PokemonSettingsPalkiaOrigin;
  "PHIONE": V0489_pokemon_phioneEntry | V0489_pokemon_phione_normalEntry;
  "PIPLUP": PokemonSettingsPiplupNormal | PokemonSettingsPiplup;
  "PORYGON_Z": V0474_pokemon_porygon_zEntry | V0474_pokemon_porygon_z_normalEntry;
  "PRINPLUP": PokemonSettingsPrinplupNormal | V0394_pokemon_prinplupEntry;
  "PROBOPASS": V0476_pokemon_probopassEntry | V0476_pokemon_probopass_normalEntry;
  "PURUGLY": PokemonSettingsPurugly | PokemonSettingsPuruglyNormal;
  "RAMPARDOS": PokemonSettingsRampardos | PokemonSettingsRampardosNormal;
  "REGIGIGAS": V0486_pokemon_regigigasEntry | V0486_pokemon_regigigas_normalEntry;
  "RHYPERIOR": V0464_pokemon_rhyperiorEntry | V0464_pokemon_rhyperior_normalEntry;
  "RIOLU": V0447_pokemon_rioluEntry | V0447_pokemon_riolu_normalEntry;
  "ROSERADE": V0407_pokemon_roseradeEntry | V0407_pokemon_roserade_normalEntry;
  "ROTOM": PokemonSettingsRotom | PokemonSettingsRotomFrost | PokemonSettingsRotomMow | PokemonSettingsRotomWash | V0479_pokemon_rotom_fanEntry | PokemonSettingsHeat | PokemonSettingsNormal;
  "SHAYMIN": V0492_pokemon_shayminEntry | V0492_pokemon_shaymin_landEntry | V0492_pokemon_shaymin_skyEntry;
  "SHELLOS": PokemonSettingsShellosEastSea | PokemonSettingsShellosWestSea | PokemonSettingsShellos;
  "SHIELDON": V0410_pokemon_shieldonEntry | V0410_pokemon_shieldon_normalEntry;
  "SHINX": PokemonSettingsShinxNormal | PokemonSettingsShinx;
  "SKORUPI": V0451_pokemon_skorupiEntry | PokemonSettingsSkorupiNormal;
  "SKUNTANK": PokemonSettingsSkuntank | PokemonSettingsSkuntankNormal;
  "SNOVER": PokemonSettingsSnover | PokemonSettingsSnoverNormal;
  "SPIRITOMB": V0442_pokemon_spiritombEntry | V0442_pokemon_spiritomb_normalEntry;
  "STARAPTOR": V0398_pokemon_staraptorEntry | V0398_pokemon_staraptor_normalEntry;
  "STARAVIA": V0397_pokemon_staraviaEntry | PokemonSettingsStaraviaNormal;
  "STARLY": PokemonSettingsStarly | PokemonSettingsStarlyNormal;
  "STUNKY": PokemonSettingsStunky | PokemonSettingsStunkyNormal;
  "TANGROWTH": V0465_pokemon_tangrowthEntry | V0465_pokemon_tangrowth_normalEntry;
  "TOGEKISS": V0468_pokemon_togekissEntry | V0468_pokemon_togekiss_normalEntry;
  "TORTERRA": V0389_pokemon_torterraEntry | V0389_pokemon_torterra_normalEntry;
  "TOXICROAK": PokemonSettingsToxicroak | PokemonSettingsToxicroakNormal;
  "TURTWIG": PokemonSettingsTurtwig | PokemonSettingsTurtwigNormal;
  "UXIE": PokemonSettingsUxie | PokemonSettingsUxieNormal;
  "VESPIQUEN": PokemonSettingsVespiquen | PokemonSettingsVespiquenNormal;
  "WEAVILE": PokemonSettingsWeavile | PokemonSettingsWeavileNormal;
  "WORMADAM": V0413_pokemon_wormadamEntry | PokemonSettingsWormadamPlant | PokemonSettingsWormadamSandy | PokemonSettingsWormadamTrash;
  "YANMEGA": PokemonSettingsYanmega | PokemonSettingsYanmegaNormal;
}

export type PokemonSettingsGen4MasterfileEntry = PokemonSettingsTurtwig | PokemonSettingsTurtwigNormal | PokemonSettingsPiplupNormal | PokemonSettingsCranidosNormal | V0388_pokemon_grotleEntry | PokemonSettingsGrotleNormal | PokemonSettingsPrinplupNormal | V0389_pokemon_torterraEntry | V0389_pokemon_torterra_normalEntry | V0390_pokemon_chimcharEntry | PokemonSettingsChimcharNormal | PokemonSettingsShinxNormal | V0391_pokemon_monfernoEntry | V0391_pokemon_monferno_normalEntry | PokemonSettingsInfernape | PokemonSettingsEmpoleon | PokemonSettingsMamoswine | PokemonSettingsInfernapeNormal | PokemonSettingsEmpoleonNormal | PokemonSettingsMamoswineNormal | PokemonSettingsPiplup | PokemonSettingsCranidos | V0394_pokemon_prinplupEntry | PokemonSettingsStarly | PokemonSettingsStunky | PokemonSettingsStarlyNormal | PokemonSettingsStunkyNormal | V0397_pokemon_staraviaEntry | PokemonSettingsStaraviaNormal | V0398_pokemon_staraptorEntry | V0398_pokemon_staraptor_normalEntry | V0399_pokemon_bidoofEntry | V0399_pokemon_bidoof_normalEntry | PokemonSettingsBibarel | PokemonSettingsToxicroak | PokemonSettingsWeavile | PokemonSettingsBibarelNormal | PokemonSettingsToxicroakNormal | PokemonSettingsWeavileNormal | PokemonSettingsKricketot | PokemonSettingsMunchlax | PokemonSettingsFinneon | PokemonSettingsKricketotNormal | PokemonSettingsShellosEastSea | PokemonSettingsShellosWestSea | PokemonSettingsMunchlaxNormal | PokemonSettingsFinneonNormal | PokemonSettingsKricketune | PokemonSettingsKricketuneNormal | PokemonSettingsShinx | PokemonSettingsLuxio | PokemonSettingsLuxioNormal | PokemonSettingsLuxray | PokemonSettingsLuxrayNormal | PokemonSettingsBudew | PokemonSettingsBudewNormal | V0407_pokemon_roseradeEntry | V0407_pokemon_roserade_normalEntry | PokemonSettingsRampardos | PokemonSettingsPurugly | PokemonSettingsRampardosNormal | PokemonSettingsPuruglyNormal | V0410_pokemon_shieldonEntry | V0410_pokemon_shieldon_normalEntry | V0411_pokemon_bastiodonEntry | V0411_pokemon_bastiodon_normalEntry | V0412_pokemon_burmyEntry | V0412_pokemon_burmy_plantEntry | PokemonSettingsSandy | PokemonSettingsTrash | V0413_pokemon_wormadamEntry | PokemonSettingsWormadamPlant | PokemonSettingsBronzongNormal | PokemonSettingsWormadamSandy | PokemonSettingsWormadamTrash | PokemonSettingsMothim | PokemonSettingsVespiquen | PokemonSettingsYanmega | PokemonSettingsMothimNormal | PokemonSettingsVespiquenNormal | PokemonSettingsYanmegaNormal | V0415_pokemon_combeeEntry | V0415_pokemon_combee_normalEntry | PokemonSettingsPachirisu | PokemonSettingsPachirisuNormal | V0418_pokemon_buizelEntry | V0418_pokemon_buizel_normalEntry | PokemonSettingsFloatzel | PokemonSettingsCherrim | PokemonSettingsFloatzelNormal | PokemonSettingsCherrimOvercast | V0420_pokemon_cherubiEntry | V0420_pokemon_cherubi_normalEntry | V0421_pokemon_cherrim_sunnyEntry | PokemonSettingsShellos | V0423_pokemon_gastrodonEntry | PokemonSettingsGastrodonEastSea | PokemonSettingsGastrodonWestSea | V0424_pokemon_ambipomEntry | V0424_pokemon_ambipom_normalEntry | V0425_pokemon_drifloonEntry | V0425_pokemon_drifloon_normalEntry | V0426_pokemon_drifblimEntry | V0426_pokemon_drifblim_normalEntry | V0427_pokemon_bunearyEntry | V0427_pokemon_buneary_normalEntry | V0428_pokemon_lopunnyEntry | V0428_pokemon_lopunny_normalEntry | V0429_pokemon_mismagiusEntry | V0429_pokemon_mismagius_normalEntry | V0430_pokemon_honchkrowEntry | V0430_pokemon_honchkrow_normalEntry | V0431_pokemon_glameowEntry | V0431_pokemon_glameow_normalEntry | V0433_pokemon_chinglingEntry | V0433_pokemon_chingling_normalEntry | PokemonSettingsSkuntank | PokemonSettingsSkuntankNormal | PokemonSettingsBronzor | PokemonSettingsMantyke | PokemonSettingsBronzorNormal | PokemonSettingsMantykeNormal | V0437_pokemon_bronzongEntry | V0438_pokemon_bonslyEntry | PokemonSettingsBonslyNormal | PokemonSettingsHappinyNormal | V0439_pokemon_mime_jrEntry | V0439_pokemon_mime_jr_normalEntry | V0440_pokemon_happinyEntry | PokemonSettingsChatot | PokemonSettingsRotom | PokemonSettingsChatotNormal | PokemonSettingsRotomFrost | PokemonSettingsRotomMow | PokemonSettingsRotomWash | V0442_pokemon_spiritombEntry | V0442_pokemon_spiritomb_normalEntry | PokemonSettingsGible | PokemonSettingsSnover | PokemonSettingsGibleNormal | PokemonSettingsSnoverNormal | V0444_pokemon_gabiteEntry | V0444_pokemon_gabite_normalEntry | V0445_pokemon_garchompEntry | V0445_pokemon_garchomp_normalEntry | V0447_pokemon_rioluEntry | V0447_pokemon_riolu_normalEntry | V0448_pokemon_lucarioEntry | V0448_pokemon_lucario_normalEntry | V0449_pokemon_hippopotasEntry | V0449_pokemon_hippopotas_normalEntry | V0450_pokemon_hippowdonEntry | V0450_pokemon_hippowdon_normalEntry | V0451_pokemon_skorupiEntry | PokemonSettingsSkorupiNormal | V0452_pokemon_drapionEntry | V0452_pokemon_drapion_normalEntry | V0453_pokemon_croagunkEntry | V0453_pokemon_croagunk_normalEntry | V0455_pokemon_carnivineEntry | V0455_pokemon_carnivine_normalEntry | PokemonSettingsLumineon | PokemonSettingsLumineonNormal | V0460_pokemon_abomasnowEntry | V0460_pokemon_abomasnow_normalEntry | V0462_pokemon_magnezoneEntry | V0462_pokemon_magnezone_normalEntry | PokemonSettingsLickilicky | PokemonSettingsGlaceon | PokemonSettingsLickilickyNormal | PokemonSettingsGlaceonNormal | V0464_pokemon_rhyperiorEntry | V0464_pokemon_rhyperior_normalEntry | V0465_pokemon_tangrowthEntry | V0465_pokemon_tangrowth_normalEntry | PokemonSettingsElectivire | PokemonSettingsMagmortar | PokemonSettingsElectivireNormal | PokemonSettingsMagmortarNormal | V0468_pokemon_togekissEntry | V0468_pokemon_togekiss_normalEntry | V0470_pokemon_leafeonEntry | V0470_pokemon_leafeon_normalEntry | V0472_pokemon_gliscorEntry | V0472_pokemon_gliscor_normalEntry | V0474_pokemon_porygon_zEntry | V0474_pokemon_porygon_z_normalEntry | V0475_pokemon_galladeEntry | V0475_pokemon_gallade_normalEntry | V0476_pokemon_probopassEntry | V0476_pokemon_probopass_normalEntry | V0477_pokemon_dusknoirEntry | V0477_pokemon_dusknoir_normalEntry | V0478_pokemon_froslassEntry | V0478_pokemon_froslass_normalEntry | V0479_pokemon_rotom_fanEntry | PokemonSettingsHeat | PokemonSettingsNormal | PokemonSettingsUxie | PokemonSettingsMesprit | PokemonSettingsAzelf | PokemonSettingsUxieNormal | PokemonSettingsMespritNormal | PokemonSettingsAzelfNormal | PokemonSettingsDialga | PokemonSettingsPalkia | PokemonSettingsDialgaNormal | PokemonSettingsPalkiaNormal | PokemonSettingsDialgaOrigin | PokemonSettingsPalkiaOrigin | V0485_pokemon_heatranEntry | V0485_pokemon_heatran_normalEntry | V0486_pokemon_regigigasEntry | V0486_pokemon_regigigas_normalEntry | V0487_pokemon_giratinaEntry | V0487_pokemon_giratina_alteredEntry | V0487_pokemon_giratina_originEntry | V0488_pokemon_cresseliaEntry | V0488_pokemon_cresselia_normalEntry | V0489_pokemon_phioneEntry | V0489_pokemon_phione_normalEntry | V0490_pokemon_manaphyEntry | V0490_pokemon_manaphy_normalEntry | V0491_pokemon_darkraiEntry | V0491_pokemon_darkrai_normalEntry | V0492_pokemon_shayminEntry | V0492_pokemon_shaymin_landEntry | V0492_pokemon_shaymin_skyEntry | V0493_pokemon_arceusEntry | PokemonSettingsBug | PokemonSettingsDark | PokemonSettingsDragon | PokemonSettingsElectric | PokemonSettingsFairy | PokemonSettingsFighting | PokemonSettingsFire | PokemonSettingsFlying | PokemonSettingsGhost | PokemonSettingsGrass | PokemonSettingsGround | PokemonSettingsIce | PokemonSettingsNormal2 | PokemonSettingsPoison | PokemonSettingsPsychic | PokemonSettingsRock | PokemonSettingsSteel | PokemonSettingsWater;

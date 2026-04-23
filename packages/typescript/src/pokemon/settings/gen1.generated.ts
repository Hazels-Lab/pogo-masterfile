/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen1
// Filters: all
// Entries emitted: 416

export interface V0001_pokemon_bulbasaurdatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0001_pokemon_bulbasaurdatapokemonsettingsencounter {
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
export interface V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0001_pokemon_bulbasaurdatapokemonsettingsibfc {

}
export interface V0001_pokemon_bulbasaurdatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0001_pokemon_bulbasaurdatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0001_pokemon_bulbasaurdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0001_pokemon_bulbasaurdata {
  pokemonSettings: V0001_pokemon_bulbasaurdatapokemonsettings;
  templateId: string;
}
export interface V0001_pokemon_bulbasaurEntry {
  templateId: "V0001_POKEMON_BULBASAUR";
  data: V0001_pokemon_bulbasaurdata;
}
export interface V0001_pokemon_bulbasaur_fall_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0001_pokemon_bulbasaur_fall_2019data {
  pokemonSettings: V0001_pokemon_bulbasaur_fall_2019datapokemonsettings;
  templateId: string;
}
export interface V0001_pokemon_bulbasaur_fall_2019Entry {
  templateId: "V0001_POKEMON_BULBASAUR_FALL_2019";
  data: V0001_pokemon_bulbasaur_fall_2019data;
}
export interface V0001_pokemon_bulbasaur_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0001_pokemon_bulbasaur_normaldata {
  pokemonSettings: V0001_pokemon_bulbasaur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0001_pokemon_bulbasaur_normalEntry {
  templateId: "V0001_POKEMON_BULBASAUR_NORMAL";
  data: V0001_pokemon_bulbasaur_normaldata;
}
export interface V0002_pokemon_ivysaurdatapokemonsettingsencounter {
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
export interface V0002_pokemon_ivysaurdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0002_pokemon_ivysaurdata {
  pokemonSettings: V0002_pokemon_ivysaurdatapokemonsettings;
  templateId: string;
}
export interface V0002_pokemon_ivysaurEntry {
  templateId: "V0002_POKEMON_IVYSAUR";
  data: V0002_pokemon_ivysaurdata;
}
export interface V0002_pokemon_ivysaur_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0002_pokemon_ivysaur_normaldata {
  pokemonSettings: V0002_pokemon_ivysaur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0002_pokemon_ivysaur_normalEntry {
  templateId: "V0002_POKEMON_IVYSAUR_NORMAL";
  data: V0002_pokemon_ivysaur_normaldata;
}
export interface V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0003_pokemon_venusaurdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0003_pokemon_venusaurdata {
  pokemonSettings: V0003_pokemon_venusaurdatapokemonsettings;
  templateId: string;
}
export interface V0003_pokemon_venusaurEntry {
  templateId: "V0003_POKEMON_VENUSAUR";
  data: V0003_pokemon_venusaurdata;
}
export interface V0003_pokemon_venusaur_copy_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0003_pokemon_venusaur_copy_2019data {
  pokemonSettings: V0003_pokemon_venusaur_copy_2019datapokemonsettings;
  templateId: string;
}
export interface V0003_pokemon_venusaur_copy_2019Entry {
  templateId: "V0003_POKEMON_VENUSAUR_COPY_2019";
  data: V0003_pokemon_venusaur_copy_2019data;
}
export interface V0003_pokemon_venusaur_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0003_pokemon_venusaur_normaldata {
  pokemonSettings: V0003_pokemon_venusaur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0003_pokemon_venusaur_normalEntry {
  templateId: "V0003_POKEMON_VENUSAUR_NORMAL";
  data: V0003_pokemon_venusaur_normaldata;
}
export interface V0004_pokemon_charmanderdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0004_pokemon_charmanderdata {
  pokemonSettings: V0004_pokemon_charmanderdatapokemonsettings;
  templateId: string;
}
export interface V0004_pokemon_charmanderEntry {
  templateId: "V0004_POKEMON_CHARMANDER";
  data: V0004_pokemon_charmanderdata;
}
export interface V0004_pokemon_charmander_fall_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0004_pokemon_charmander_fall_2019data {
  pokemonSettings: V0004_pokemon_charmander_fall_2019datapokemonsettings;
  templateId: string;
}
export interface V0004_pokemon_charmander_fall_2019Entry {
  templateId: "V0004_POKEMON_CHARMANDER_FALL_2019";
  data: V0004_pokemon_charmander_fall_2019data;
}
export interface V0004_pokemon_charmander_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0004_pokemon_charmander_normaldata {
  pokemonSettings: V0004_pokemon_charmander_normaldatapokemonsettings;
  templateId: string;
}
export interface V0004_pokemon_charmander_normalEntry {
  templateId: "V0004_POKEMON_CHARMANDER_NORMAL";
  data: V0004_pokemon_charmander_normaldata;
}
export interface V0005_pokemon_charmeleondatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0005_pokemon_charmeleondata {
  pokemonSettings: V0005_pokemon_charmeleondatapokemonsettings;
  templateId: string;
}
export interface V0005_pokemon_charmeleonEntry {
  templateId: "V0005_POKEMON_CHARMELEON";
  data: V0005_pokemon_charmeleondata;
}
export interface V0005_pokemon_charmeleon_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0005_pokemon_charmeleon_normaldata {
  pokemonSettings: V0005_pokemon_charmeleon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0005_pokemon_charmeleon_normalEntry {
  templateId: "V0005_POKEMON_CHARMELEON_NORMAL";
  data: V0005_pokemon_charmeleon_normaldata;
}
export interface V0006_pokemon_charizarddatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0006_pokemon_charizarddatapokemonsettingstempevooverridesitemcamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0006_pokemon_charizarddatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale?: (number)[];
  buddyOffsetMale?: (number)[];
  camera: V0006_pokemon_charizarddatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0006_pokemon_charizarddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0006_pokemon_charizarddatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0006_pokemon_charizarddata {
  pokemonSettings: V0006_pokemon_charizarddatapokemonsettings;
  templateId: string;
}
export interface V0006_pokemon_charizardEntry {
  templateId: "V0006_POKEMON_CHARIZARD";
  data: V0006_pokemon_charizarddata;
}
export interface V0006_pokemon_charizard_copy_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0006_pokemon_charizard_copy_2019data {
  pokemonSettings: V0006_pokemon_charizard_copy_2019datapokemonsettings;
  templateId: string;
}
export interface V0006_pokemon_charizard_copy_2019Entry {
  templateId: "V0006_POKEMON_CHARIZARD_COPY_2019";
  data: V0006_pokemon_charizard_copy_2019data;
}
export interface V0006_pokemon_charizard_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0006_pokemon_charizarddatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0006_pokemon_charizard_normaldata {
  pokemonSettings: V0006_pokemon_charizard_normaldatapokemonsettings;
  templateId: string;
}
export interface V0006_pokemon_charizard_normalEntry {
  templateId: "V0006_POKEMON_CHARIZARD_NORMAL";
  data: V0006_pokemon_charizard_normaldata;
}
export interface V0007_pokemon_squirtleEntry {
  templateId: "V0007_POKEMON_SQUIRTLE";
  data: V0004_pokemon_charmanderdata;
}
export interface V0007_pokemon_squirtle_fall_2019Entry {
  templateId: "V0007_POKEMON_SQUIRTLE_FALL_2019";
  data: V0004_pokemon_charmander_fall_2019data;
}
export interface V0007_pokemon_squirtle_normalEntry {
  templateId: "V0007_POKEMON_SQUIRTLE_NORMAL";
  data: V0004_pokemon_charmander_normaldata;
}
export interface V0008_pokemon_wartortledatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0008_pokemon_wartortledata {
  pokemonSettings: V0008_pokemon_wartortledatapokemonsettings;
  templateId: string;
}
export interface V0008_pokemon_wartortleEntry {
  templateId: "V0008_POKEMON_WARTORTLE";
  data: V0008_pokemon_wartortledata;
}
export interface V0008_pokemon_wartortle_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0008_pokemon_wartortle_normaldata {
  pokemonSettings: V0008_pokemon_wartortle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0008_pokemon_wartortle_normalEntry {
  templateId: "V0008_POKEMON_WARTORTLE_NORMAL";
  data: V0008_pokemon_wartortle_normaldata;
}
export interface V0009_pokemon_blastoisedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0009_pokemon_blastoisedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0009_pokemon_blastoisedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0009_pokemon_blastoisedata {
  pokemonSettings: V0009_pokemon_blastoisedatapokemonsettings;
  templateId: string;
}
export interface V0009_pokemon_blastoiseEntry {
  templateId: "V0009_POKEMON_BLASTOISE";
  data: V0009_pokemon_blastoisedata;
}
export interface V0009_pokemon_blastoise_copy_2019datapokemonsettingstempevooverridesitem {
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
}
export interface V0009_pokemon_blastoise_copy_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0009_pokemon_blastoise_copy_2019datapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0009_pokemon_blastoise_copy_2019data {
  pokemonSettings: V0009_pokemon_blastoise_copy_2019datapokemonsettings;
  templateId: string;
}
export interface V0009_pokemon_blastoise_copy_2019Entry {
  templateId: "V0009_POKEMON_BLASTOISE_COPY_2019";
  data: V0009_pokemon_blastoise_copy_2019data;
}
export interface V0009_pokemon_blastoise_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0009_pokemon_blastoisedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0009_pokemon_blastoise_normaldata {
  pokemonSettings: V0009_pokemon_blastoise_normaldatapokemonsettings;
  templateId: string;
}
export interface V0009_pokemon_blastoise_normalEntry {
  templateId: "V0009_POKEMON_BLASTOISE_NORMAL";
  data: V0009_pokemon_blastoise_normaldata;
}
export interface V0010_pokemon_caterpiedatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
}
export interface V0010_pokemon_caterpiedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0010_pokemon_caterpiedatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0010_pokemon_caterpiedata {
  pokemonSettings: V0010_pokemon_caterpiedatapokemonsettings;
  templateId: string;
}
export interface V0010_pokemon_caterpieEntry {
  templateId: "V0010_POKEMON_CATERPIE";
  data: V0010_pokemon_caterpiedata;
}
export interface V0010_pokemon_caterpie_gofest_2026datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0010_pokemon_caterpiedatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: number;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0010_pokemon_caterpie_gofest_2026data {
  pokemonSettings: V0010_pokemon_caterpie_gofest_2026datapokemonsettings;
  templateId: string;
}
export interface V0010_pokemon_caterpie_gofest_2026Entry {
  templateId: "V0010_POKEMON_CATERPIE_GOFEST_2026";
  data: V0010_pokemon_caterpie_gofest_2026data;
}
export interface V0010_pokemon_caterpie_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0010_pokemon_caterpiedatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0010_pokemon_caterpie_normaldata {
  pokemonSettings: V0010_pokemon_caterpie_normaldatapokemonsettings;
  templateId: string;
}
export interface V0010_pokemon_caterpie_normalEntry {
  templateId: "V0010_POKEMON_CATERPIE_NORMAL";
  data: V0010_pokemon_caterpie_normaldata;
}
export interface V0011_pokemon_metapoddatapokemonsettingsencounter {
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
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
}
export interface V0011_pokemon_metapoddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0011_pokemon_metapoddata {
  pokemonSettings: V0011_pokemon_metapoddatapokemonsettings;
  templateId: string;
}
export interface V0011_pokemon_metapodEntry {
  templateId: "V0011_POKEMON_METAPOD";
  data: V0011_pokemon_metapoddata;
}
export interface V0011_pokemon_metapod_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0011_pokemon_metapod_normaldata {
  pokemonSettings: V0011_pokemon_metapod_normaldatapokemonsettings;
  templateId: string;
}
export interface V0011_pokemon_metapod_normalEntry {
  templateId: "V0011_POKEMON_METAPOD_NORMAL";
  data: V0011_pokemon_metapod_normaldata;
}
export interface V0012_pokemon_butterfreedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0012_pokemon_butterfreedata {
  pokemonSettings: V0012_pokemon_butterfreedatapokemonsettings;
  templateId: string;
}
export interface V0012_pokemon_butterfreeEntry {
  templateId: "V0012_POKEMON_BUTTERFREE";
  data: V0012_pokemon_butterfreedata;
}
export interface V0012_pokemon_butterfree_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0012_pokemon_butterfree_normaldata {
  pokemonSettings: V0012_pokemon_butterfree_normaldatapokemonsettings;
  templateId: string;
}
export interface V0012_pokemon_butterfree_normalEntry {
  templateId: "V0012_POKEMON_BUTTERFREE_NORMAL";
  data: V0012_pokemon_butterfree_normaldata;
}
export interface V0013_pokemon_weedledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0013_pokemon_weedledata {
  pokemonSettings: V0013_pokemon_weedledatapokemonsettings;
  templateId: string;
}
export interface V0013_pokemon_weedleEntry {
  templateId: "V0013_POKEMON_WEEDLE";
  data: V0013_pokemon_weedledata;
}
export interface V0013_pokemon_weedle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0013_pokemon_weedle_normaldata {
  pokemonSettings: V0013_pokemon_weedle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0013_pokemon_weedle_normalEntry {
  templateId: "V0013_POKEMON_WEEDLE_NORMAL";
  data: V0013_pokemon_weedle_normaldata;
}
export interface V0014_pokemon_kakunadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0014_pokemon_kakunadata {
  pokemonSettings: V0014_pokemon_kakunadatapokemonsettings;
  templateId: string;
}
export interface V0014_pokemon_kakunaEntry {
  templateId: "V0014_POKEMON_KAKUNA";
  data: V0014_pokemon_kakunadata;
}
export interface V0014_pokemon_kakuna_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0014_pokemon_kakuna_normaldata {
  pokemonSettings: V0014_pokemon_kakuna_normaldatapokemonsettings;
  templateId: string;
}
export interface V0014_pokemon_kakuna_normalEntry {
  templateId: "V0014_POKEMON_KAKUNA_NORMAL";
  data: V0014_pokemon_kakuna_normaldata;
}
export interface V0015_pokemon_beedrilldatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0006_pokemon_charizarddatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0015_pokemon_beedrilldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0015_pokemon_beedrilldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0015_pokemon_beedrilldata {
  pokemonSettings: V0015_pokemon_beedrilldatapokemonsettings;
  templateId: string;
}
export interface V0015_pokemon_beedrillEntry {
  templateId: "V0015_POKEMON_BEEDRILL";
  data: V0015_pokemon_beedrilldata;
}
export interface V0015_pokemon_beedrill_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0015_pokemon_beedrilldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0015_pokemon_beedrill_normaldata {
  pokemonSettings: V0015_pokemon_beedrill_normaldatapokemonsettings;
  templateId: string;
}
export interface V0015_pokemon_beedrill_normalEntry {
  templateId: "V0015_POKEMON_BEEDRILL_NORMAL";
  data: V0015_pokemon_beedrill_normaldata;
}
export interface V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0016_pokemon_pidgeydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0016_pokemon_pidgeydata {
  pokemonSettings: V0016_pokemon_pidgeydatapokemonsettings;
  templateId: string;
}
export interface V0016_pokemon_pidgeyEntry {
  templateId: "V0016_POKEMON_PIDGEY";
  data: V0016_pokemon_pidgeydata;
}
export interface V0016_pokemon_pidgey_normalEntry {
  templateId: "V0016_POKEMON_PIDGEY_NORMAL";
  data: V0013_pokemon_weedle_normaldata;
}
export interface V0017_pokemon_pidgeottodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0017_pokemon_pidgeottodata {
  pokemonSettings: V0017_pokemon_pidgeottodatapokemonsettings;
  templateId: string;
}
export interface V0017_pokemon_pidgeottoEntry {
  templateId: "V0017_POKEMON_PIDGEOTTO";
  data: V0017_pokemon_pidgeottodata;
}
export interface V0017_pokemon_pidgeotto_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0017_pokemon_pidgeotto_normaldata {
  pokemonSettings: V0017_pokemon_pidgeotto_normaldatapokemonsettings;
  templateId: string;
}
export interface V0017_pokemon_pidgeotto_normalEntry {
  templateId: "V0017_POKEMON_PIDGEOTTO_NORMAL";
  data: V0017_pokemon_pidgeotto_normaldata;
}
export interface V0018_pokemon_pidgeotdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0006_pokemon_charizarddatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0018_pokemon_pidgeotdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0018_pokemon_pidgeotdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0018_pokemon_pidgeotdata {
  pokemonSettings: V0018_pokemon_pidgeotdatapokemonsettings;
  templateId: string;
}
export interface V0018_pokemon_pidgeotEntry {
  templateId: "V0018_POKEMON_PIDGEOT";
  data: V0018_pokemon_pidgeotdata;
}
export interface V0018_pokemon_pidgeot_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0018_pokemon_pidgeotdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0018_pokemon_pidgeot_normaldata {
  pokemonSettings: V0018_pokemon_pidgeot_normaldatapokemonsettings;
  templateId: string;
}
export interface V0018_pokemon_pidgeot_normalEntry {
  templateId: "V0018_POKEMON_PIDGEOT_NORMAL";
  data: V0018_pokemon_pidgeot_normaldata;
}
export interface V0019_pokemon_rattatadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0019_pokemon_rattatadata {
  pokemonSettings: V0019_pokemon_rattatadatapokemonsettings;
  templateId: string;
}
export interface V0019_pokemon_rattataEntry {
  templateId: "V0019_POKEMON_RATTATA";
  data: V0019_pokemon_rattatadata;
}
export interface V0019_pokemon_rattata_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0019_pokemon_rattata_aloladata {
  pokemonSettings: V0019_pokemon_rattata_aloladatapokemonsettings;
  templateId: string;
}
export interface V0019_pokemon_rattata_alolaEntry {
  templateId: "V0019_POKEMON_RATTATA_ALOLA";
  data: V0019_pokemon_rattata_aloladata;
}
export interface V0019_pokemon_rattata_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0019_pokemon_rattata_normaldata {
  pokemonSettings: V0019_pokemon_rattata_normaldatapokemonsettings;
  templateId: string;
}
export interface V0019_pokemon_rattata_normalEntry {
  templateId: "V0019_POKEMON_RATTATA_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0020_pokemon_raticatedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0020_pokemon_raticatedata {
  pokemonSettings: V0020_pokemon_raticatedatapokemonsettings;
  templateId: string;
}
export interface V0020_pokemon_raticateEntry {
  templateId: "V0020_POKEMON_RATICATE";
  data: V0020_pokemon_raticatedata;
}
export interface V0020_pokemon_raticate_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0020_pokemon_raticate_aloladata {
  pokemonSettings: V0020_pokemon_raticate_aloladatapokemonsettings;
  templateId: string;
}
export interface V0020_pokemon_raticate_alolaEntry {
  templateId: "V0020_POKEMON_RATICATE_ALOLA";
  data: V0020_pokemon_raticate_aloladata;
}
export interface V0020_pokemon_raticate_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0020_pokemon_raticate_normaldata {
  pokemonSettings: V0020_pokemon_raticate_normaldatapokemonsettings;
  templateId: string;
}
export interface V0020_pokemon_raticate_normalEntry {
  templateId: "V0020_POKEMON_RATICATE_NORMAL";
  data: V0020_pokemon_raticate_normaldata;
}
export interface V0021_pokemon_spearowdatapokemonsettingsencounter {
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
export interface V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0021_pokemon_spearowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0021_pokemon_spearowdata {
  pokemonSettings: V0021_pokemon_spearowdatapokemonsettings;
  templateId: string;
}
export interface V0021_pokemon_spearowEntry {
  templateId: "V0021_POKEMON_SPEAROW";
  data: V0021_pokemon_spearowdata;
}
export interface V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0021_pokemon_spearow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0021_pokemon_spearow_normaldata {
  pokemonSettings: V0021_pokemon_spearow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0021_pokemon_spearow_normalEntry {
  templateId: "V0021_POKEMON_SPEAROW_NORMAL";
  data: V0021_pokemon_spearow_normaldata;
}
export interface V0022_pokemon_fearowdatapokemonsettingsencounter {
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
export interface V0022_pokemon_fearowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0022_pokemon_fearowdata {
  pokemonSettings: V0022_pokemon_fearowdatapokemonsettings;
  templateId: string;
}
export interface V0022_pokemon_fearowEntry {
  templateId: "V0022_POKEMON_FEAROW";
  data: V0022_pokemon_fearowdata;
}
export interface V0022_pokemon_fearow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0022_pokemon_fearow_normaldata {
  pokemonSettings: V0022_pokemon_fearow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0022_pokemon_fearow_normalEntry {
  templateId: "V0022_POKEMON_FEAROW_NORMAL";
  data: V0022_pokemon_fearow_normaldata;
}
export interface V0023_pokemon_ekansdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0023_pokemon_ekansdata {
  pokemonSettings: V0023_pokemon_ekansdatapokemonsettings;
  templateId: string;
}
export interface V0023_pokemon_ekansEntry {
  templateId: "V0023_POKEMON_EKANS";
  data: V0023_pokemon_ekansdata;
}
export interface V0023_pokemon_ekans_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0023_pokemon_ekans_normaldata {
  pokemonSettings: V0023_pokemon_ekans_normaldatapokemonsettings;
  templateId: string;
}
export interface V0023_pokemon_ekans_normalEntry {
  templateId: "V0023_POKEMON_EKANS_NORMAL";
  data: V0023_pokemon_ekans_normaldata;
}
export interface V0024_pokemon_arbokdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0024_pokemon_arbokdata {
  pokemonSettings: V0024_pokemon_arbokdatapokemonsettings;
  templateId: string;
}
export interface V0024_pokemon_arbokEntry {
  templateId: "V0024_POKEMON_ARBOK";
  data: V0024_pokemon_arbokdata;
}
export interface V0024_pokemon_arbok_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0024_pokemon_arbok_normaldata {
  pokemonSettings: V0024_pokemon_arbok_normaldatapokemonsettings;
  templateId: string;
}
export interface V0024_pokemon_arbok_normalEntry {
  templateId: "V0024_POKEMON_ARBOK_NORMAL";
  data: V0024_pokemon_arbok_normaldata;
}
export interface V0025_pokemon_pikachudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachudata {
  pokemonSettings: V0025_pokemon_pikachudatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachuEntry {
  templateId: "V0025_POKEMON_PIKACHU";
  data: V0025_pokemon_pikachudata;
}
export interface V0025_pokemon_pikachu_adventure_hat_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_adventure_hat_2020data {
  pokemonSettings: V0025_pokemon_pikachu_adventure_hat_2020datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_adventure_hat_2020Entry {
  templateId: "V0025_POKEMON_PIKACHU_ADVENTURE_HAT_2020";
  data: V0025_pokemon_pikachu_adventure_hat_2020data;
}
export interface V0025_pokemon_pikachu_bb_2026datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_bb_2026data {
  pokemonSettings: V0025_pokemon_pikachu_bb_2026datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_bb_2026Entry {
  templateId: "V0025_POKEMON_PIKACHU_BB_2026";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_copy_2019datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_copy_2019data {
  pokemonSettings: V0025_pokemon_pikachu_copy_2019datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_copy_2019Entry {
  templateId: "V0025_POKEMON_PIKACHU_COPY_2019";
  data: V0025_pokemon_pikachu_copy_2019data;
}
export interface V0025_pokemon_pikachu_costume_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_costume_2020data {
  pokemonSettings: V0025_pokemon_pikachu_costume_2020datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_costume_2020Entry {
  templateId: "V0025_POKEMON_PIKACHU_COSTUME_2020";
  data: V0025_pokemon_pikachu_costume_2020data;
}
export interface V0025_pokemon_pikachu_diwali_2024Entry {
  templateId: "V0025_POKEMON_PIKACHU_DIWALI_2024";
  data: V0025_pokemon_pikachu_adventure_hat_2020data;
}
export interface V0025_pokemon_pikachu_doctordatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_doctordata {
  pokemonSettings: V0025_pokemon_pikachu_doctordatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_doctorEntry {
  templateId: "V0025_POKEMON_PIKACHU_DOCTOR";
  data: V0025_pokemon_pikachu_doctordata;
}
export interface V0025_pokemon_pikachu_fall_2019Entry {
  templateId: "V0025_POKEMON_PIKACHU_FALL_2019";
  data: V0025_pokemon_pikachu_copy_2019data;
}
export interface V0025_pokemon_pikachu_flying_01datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_flying_01data {
  pokemonSettings: V0025_pokemon_pikachu_flying_01datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_flying_01Entry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_01";
  data: V0025_pokemon_pikachu_flying_01data;
}
export interface V0025_pokemon_pikachu_flying_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_02";
  data: V0025_pokemon_pikachu_flying_01data;
}
export interface V0025_pokemon_pikachu_flying_03Entry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_03";
  data: V0025_pokemon_pikachu_flying_01data;
}
export interface V0025_pokemon_pikachu_flying_04datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_flying_04data {
  pokemonSettings: V0025_pokemon_pikachu_flying_04datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_flying_04Entry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_04";
  data: V0025_pokemon_pikachu_flying_04data;
}
export interface V0025_pokemon_pikachu_flying_5th_annivEntry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_5TH_ANNIV";
  data: V0025_pokemon_pikachu_flying_01data;
}
export interface V0025_pokemon_pikachu_flying_okinawaEntry {
  templateId: "V0025_POKEMON_PIKACHU_FLYING_OKINAWA";
  data: V0025_pokemon_pikachu_costume_2020data;
}
export interface V0025_pokemon_pikachu_gofest_2022Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2022";
  data: V0025_pokemon_pikachu_copy_2019data;
}
export interface V0025_pokemon_pikachu_gofest_2024_mtiaraEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2024_MTIARA";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gofest_2024_stiaraEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2024_STIARA";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gofest_2025_goggles_bluedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_gofest_2025_goggles_bluedata {
  pokemonSettings: V0025_pokemon_pikachu_gofest_2025_goggles_bluedatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_gofest_2025_goggles_blueEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_BLUE";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2025_goggles_redEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_RED";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2025_goggles_yellowEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_YELLOW";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2025_monocle_blueEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_BLUE";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2025_monocle_redEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_RED";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2025_monocle_yellowEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_YELLOW";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2026_cap_bluedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: number;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_gofest_2026_cap_bluedata {
  pokemonSettings: V0025_pokemon_pikachu_gofest_2026_cap_bluedatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_gofest_2026_cap_blueEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_BLUE";
  data: V0025_pokemon_pikachu_gofest_2026_cap_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2026_cap_redEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_RED";
  data: V0025_pokemon_pikachu_gofest_2026_cap_bluedata;
}
export interface V0025_pokemon_pikachu_gofest_2026_cap_yellowEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_YELLOW";
  data: V0025_pokemon_pikachu_gofest_2026_cap_bluedata;
}
export interface V0025_pokemon_pikachu_gotour_2024_aEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2024_A";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2024_a_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2024_A_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2024_bEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2024_B";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2024_b_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2024_B_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2025_aEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2025_A";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2025_a_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2025_A_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2025_bEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2025_B";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2025_b_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2025_B_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_aEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_A";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_a_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_A_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_bEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_B";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_b_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_B_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_cEntry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_C";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_gotour_2026_c_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_GOTOUR_2026_C_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_horizonsdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_horizonsdata {
  pokemonSettings: V0025_pokemon_pikachu_horizonsdatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_horizonsEntry {
  templateId: "V0025_POKEMON_PIKACHU_HORIZONS";
  data: V0025_pokemon_pikachu_horizonsdata;
}
export interface V0025_pokemon_pikachu_jejuEntry {
  templateId: "V0025_POKEMON_PIKACHU_JEJU";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_kariyushiEntry {
  templateId: "V0025_POKEMON_PIKACHU_KARIYUSHI";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_kurtaEntry {
  templateId: "V0025_POKEMON_PIKACHU_KURTA";
  data: V0025_pokemon_pikachu_adventure_hat_2020data;
}
export interface V0025_pokemon_pikachu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_normaldata {
  pokemonSettings: V0025_pokemon_pikachu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_normalEntry {
  templateId: "V0025_POKEMON_PIKACHU_NORMAL";
  data: V0025_pokemon_pikachu_normaldata;
}
export interface V0025_pokemon_pikachu_pop_starEntry {
  templateId: "V0025_POKEMON_PIKACHU_POP_STAR";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_rock_starEntry {
  templateId: "V0025_POKEMON_PIKACHU_ROCK_STAR";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_summer_2023_adatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_summer_2023_adata {
  pokemonSettings: V0025_pokemon_pikachu_summer_2023_adatapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_summer_2023_aEntry {
  templateId: "V0025_POKEMON_PIKACHU_SUMMER_2023_A";
  data: V0025_pokemon_pikachu_summer_2023_adata;
}
export interface V0025_pokemon_pikachu_summer_2023_bEntry {
  templateId: "V0025_POKEMON_PIKACHU_SUMMER_2023_B";
  data: V0025_pokemon_pikachu_summer_2023_adata;
}
export interface V0025_pokemon_pikachu_summer_2023_cEntry {
  templateId: "V0025_POKEMON_PIKACHU_SUMMER_2023_C";
  data: V0025_pokemon_pikachu_summer_2023_adata;
}
export interface V0025_pokemon_pikachu_summer_2023_dEntry {
  templateId: "V0025_POKEMON_PIKACHU_SUMMER_2023_D";
  data: V0025_pokemon_pikachu_summer_2023_adata;
}
export interface V0025_pokemon_pikachu_summer_2023_eEntry {
  templateId: "V0025_POKEMON_PIKACHU_SUMMER_2023_E";
  data: V0025_pokemon_pikachu_summer_2023_adata;
}
export interface V0025_pokemon_pikachu_tshirt_01Entry {
  templateId: "V0025_POKEMON_PIKACHU_TSHIRT_01";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_tshirt_02Entry {
  templateId: "V0025_POKEMON_PIKACHU_TSHIRT_02";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_tshirt_03Entry {
  templateId: "V0025_POKEMON_PIKACHU_TSHIRT_03";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_vs_2019Entry {
  templateId: "V0025_POKEMON_PIKACHU_VS_2019";
  data: V0025_pokemon_pikachu_bb_2026data;
}
export interface V0025_pokemon_pikachu_wcs_2022Entry {
  templateId: "V0025_POKEMON_PIKACHU_WCS_2022";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_wcs_2023Entry {
  templateId: "V0025_POKEMON_PIKACHU_WCS_2023";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_wcs_2024Entry {
  templateId: "V0025_POKEMON_PIKACHU_WCS_2024";
  data: V0025_pokemon_pikachu_gofest_2025_goggles_bluedata;
}
export interface V0025_pokemon_pikachu_wcs_2025datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0025_pokemon_pikachu_wcs_2025data {
  pokemonSettings: V0025_pokemon_pikachu_wcs_2025datapokemonsettings;
  templateId: string;
}
export interface V0025_pokemon_pikachu_wcs_2025Entry {
  templateId: "V0025_POKEMON_PIKACHU_WCS_2025";
  data: V0025_pokemon_pikachu_wcs_2025data;
}
export interface V0025_pokemon_pikachu_winter_2020Entry {
  templateId: "V0025_POKEMON_PIKACHU_WINTER_2020";
  data: V0025_pokemon_pikachu_adventure_hat_2020data;
}
export interface V0026_pokemon_raichudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0026_pokemon_raichudata {
  pokemonSettings: V0026_pokemon_raichudatapokemonsettings;
  templateId: string;
}
export interface V0026_pokemon_raichuEntry {
  templateId: "V0026_POKEMON_RAICHU";
  data: V0026_pokemon_raichudata;
}
export interface V0026_pokemon_raichu_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0026_pokemon_raichu_aloladata {
  pokemonSettings: V0026_pokemon_raichu_aloladatapokemonsettings;
  templateId: string;
}
export interface V0026_pokemon_raichu_alolaEntry {
  templateId: "V0026_POKEMON_RAICHU_ALOLA";
  data: V0026_pokemon_raichu_aloladata;
}
export interface V0026_pokemon_raichu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0026_pokemon_raichu_normaldata {
  pokemonSettings: V0026_pokemon_raichu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0026_pokemon_raichu_normalEntry {
  templateId: "V0026_POKEMON_RAICHU_NORMAL";
  data: V0026_pokemon_raichu_normaldata;
}
export interface V0027_pokemon_sandshrewEntry {
  templateId: "V0027_POKEMON_SANDSHREW";
  data: V0023_pokemon_ekansdata;
}
export interface V0027_pokemon_sandshrew_alolaEntry {
  templateId: "V0027_POKEMON_SANDSHREW_ALOLA";
  data: V0019_pokemon_rattata_aloladata;
}
export interface V0027_pokemon_sandshrew_normalEntry {
  templateId: "V0027_POKEMON_SANDSHREW_NORMAL";
  data: V0023_pokemon_ekans_normaldata;
}
export interface V0028_pokemon_sandslashdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0028_pokemon_sandslashdata {
  pokemonSettings: V0028_pokemon_sandslashdatapokemonsettings;
  templateId: string;
}
export interface V0028_pokemon_sandslashEntry {
  templateId: "V0028_POKEMON_SANDSLASH";
  data: V0028_pokemon_sandslashdata;
}
export interface V0028_pokemon_sandslash_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0028_pokemon_sandslash_aloladata {
  pokemonSettings: V0028_pokemon_sandslash_aloladatapokemonsettings;
  templateId: string;
}
export interface V0028_pokemon_sandslash_alolaEntry {
  templateId: "V0028_POKEMON_SANDSLASH_ALOLA";
  data: V0028_pokemon_sandslash_aloladata;
}
export interface V0028_pokemon_sandslash_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0028_pokemon_sandslash_normaldata {
  pokemonSettings: V0028_pokemon_sandslash_normaldatapokemonsettings;
  templateId: string;
}
export interface V0028_pokemon_sandslash_normalEntry {
  templateId: "V0028_POKEMON_SANDSLASH_NORMAL";
  data: V0028_pokemon_sandslash_normaldata;
}
export interface V0029_pokemon_nidoranEntry {
  templateId: "V0029_POKEMON_NIDORAN";
  data: V0019_pokemon_rattatadata;
}
export interface V0029_pokemon_nidoran_normalEntry {
  templateId: "V0029_POKEMON_NIDORAN_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0030_pokemon_nidorinadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0030_pokemon_nidorinadata {
  pokemonSettings: V0030_pokemon_nidorinadatapokemonsettings;
  templateId: string;
}
export interface V0030_pokemon_nidorinaEntry {
  templateId: "V0030_POKEMON_NIDORINA";
  data: V0030_pokemon_nidorinadata;
}
export interface V0030_pokemon_nidorina_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0030_pokemon_nidorina_normaldata {
  pokemonSettings: V0030_pokemon_nidorina_normaldatapokemonsettings;
  templateId: string;
}
export interface V0030_pokemon_nidorina_normalEntry {
  templateId: "V0030_POKEMON_NIDORINA_NORMAL";
  data: V0030_pokemon_nidorina_normaldata;
}
export interface V0031_pokemon_nidoqueendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0031_pokemon_nidoqueendata {
  pokemonSettings: V0031_pokemon_nidoqueendatapokemonsettings;
  templateId: string;
}
export interface V0031_pokemon_nidoqueenEntry {
  templateId: "V0031_POKEMON_NIDOQUEEN";
  data: V0031_pokemon_nidoqueendata;
}
export interface V0031_pokemon_nidoqueen_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0031_pokemon_nidoqueen_normaldata {
  pokemonSettings: V0031_pokemon_nidoqueen_normaldatapokemonsettings;
  templateId: string;
}
export interface V0031_pokemon_nidoqueen_normalEntry {
  templateId: "V0031_POKEMON_NIDOQUEEN_NORMAL";
  data: V0031_pokemon_nidoqueen_normaldata;
}
export interface V0032_pokemon_nidorandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0032_pokemon_nidorandata {
  pokemonSettings: V0032_pokemon_nidorandatapokemonsettings;
  templateId: string;
}
export interface V0032_pokemon_nidoranEntry {
  templateId: "V0032_POKEMON_NIDORAN";
  data: V0032_pokemon_nidorandata;
}
export interface V0032_pokemon_nidoran_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0032_pokemon_nidoran_normaldata {
  pokemonSettings: V0032_pokemon_nidoran_normaldatapokemonsettings;
  templateId: string;
}
export interface V0032_pokemon_nidoran_normalEntry {
  templateId: "V0032_POKEMON_NIDORAN_NORMAL";
  data: V0032_pokemon_nidoran_normaldata;
}
export interface V0033_pokemon_nidorinoEntry {
  templateId: "V0033_POKEMON_NIDORINO";
  data: V0030_pokemon_nidorinadata;
}
export interface V0033_pokemon_nidorino_normalEntry {
  templateId: "V0033_POKEMON_NIDORINO_NORMAL";
  data: V0030_pokemon_nidorina_normaldata;
}
export interface V0034_pokemon_nidokingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0034_pokemon_nidokingdata {
  pokemonSettings: V0034_pokemon_nidokingdatapokemonsettings;
  templateId: string;
}
export interface V0034_pokemon_nidokingEntry {
  templateId: "V0034_POKEMON_NIDOKING";
  data: V0034_pokemon_nidokingdata;
}
export interface V0034_pokemon_nidoking_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0034_pokemon_nidoking_normaldata {
  pokemonSettings: V0034_pokemon_nidoking_normaldatapokemonsettings;
  templateId: string;
}
export interface V0034_pokemon_nidoking_normalEntry {
  templateId: "V0034_POKEMON_NIDOKING_NORMAL";
  data: V0034_pokemon_nidoking_normaldata;
}
export interface V0035_pokemon_clefairydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0035_pokemon_clefairydata {
  pokemonSettings: V0035_pokemon_clefairydatapokemonsettings;
  templateId: string;
}
export interface V0035_pokemon_clefairyEntry {
  templateId: "V0035_POKEMON_CLEFAIRY";
  data: V0035_pokemon_clefairydata;
}
export interface V0035_pokemon_clefairy_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0035_pokemon_clefairy_normaldata {
  pokemonSettings: V0035_pokemon_clefairy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0035_pokemon_clefairy_normalEntry {
  templateId: "V0035_POKEMON_CLEFAIRY_NORMAL";
  data: V0035_pokemon_clefairy_normaldata;
}
export interface V0036_pokemon_clefabledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0036_pokemon_clefabledata {
  pokemonSettings: V0036_pokemon_clefabledatapokemonsettings;
  templateId: string;
}
export interface V0036_pokemon_clefableEntry {
  templateId: "V0036_POKEMON_CLEFABLE";
  data: V0036_pokemon_clefabledata;
}
export interface V0036_pokemon_clefable_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0036_pokemon_clefable_normaldata {
  pokemonSettings: V0036_pokemon_clefable_normaldatapokemonsettings;
  templateId: string;
}
export interface V0036_pokemon_clefable_normalEntry {
  templateId: "V0036_POKEMON_CLEFABLE_NORMAL";
  data: V0036_pokemon_clefable_normaldata;
}
export interface V0037_pokemon_vulpixEntry {
  templateId: "V0037_POKEMON_VULPIX";
  data: V0019_pokemon_rattatadata;
}
export interface V0037_pokemon_vulpix_alolaEntry {
  templateId: "V0037_POKEMON_VULPIX_ALOLA";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0037_pokemon_vulpix_normalEntry {
  templateId: "V0037_POKEMON_VULPIX_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0038_pokemon_ninetalesdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0038_pokemon_ninetalesdata {
  pokemonSettings: V0038_pokemon_ninetalesdatapokemonsettings;
  templateId: string;
}
export interface V0038_pokemon_ninetalesEntry {
  templateId: "V0038_POKEMON_NINETALES";
  data: V0038_pokemon_ninetalesdata;
}
export interface V0038_pokemon_ninetales_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0038_pokemon_ninetales_aloladata {
  pokemonSettings: V0038_pokemon_ninetales_aloladatapokemonsettings;
  templateId: string;
}
export interface V0038_pokemon_ninetales_alolaEntry {
  templateId: "V0038_POKEMON_NINETALES_ALOLA";
  data: V0038_pokemon_ninetales_aloladata;
}
export interface V0038_pokemon_ninetales_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0038_pokemon_ninetales_normaldata {
  pokemonSettings: V0038_pokemon_ninetales_normaldatapokemonsettings;
  templateId: string;
}
export interface V0038_pokemon_ninetales_normalEntry {
  templateId: "V0038_POKEMON_NINETALES_NORMAL";
  data: V0038_pokemon_ninetales_normaldata;
}
export interface V0039_pokemon_jigglypuffdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0039_pokemon_jigglypuffdata {
  pokemonSettings: V0039_pokemon_jigglypuffdatapokemonsettings;
  templateId: string;
}
export interface V0039_pokemon_jigglypuffEntry {
  templateId: "V0039_POKEMON_JIGGLYPUFF";
  data: V0039_pokemon_jigglypuffdata;
}
export interface V0039_pokemon_jigglypuff_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0039_pokemon_jigglypuff_normaldata {
  pokemonSettings: V0039_pokemon_jigglypuff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0039_pokemon_jigglypuff_normalEntry {
  templateId: "V0039_POKEMON_JIGGLYPUFF_NORMAL";
  data: V0039_pokemon_jigglypuff_normaldata;
}
export interface V0040_pokemon_wigglytuffdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0040_pokemon_wigglytuffdata {
  pokemonSettings: V0040_pokemon_wigglytuffdatapokemonsettings;
  templateId: string;
}
export interface V0040_pokemon_wigglytuffEntry {
  templateId: "V0040_POKEMON_WIGGLYTUFF";
  data: V0040_pokemon_wigglytuffdata;
}
export interface V0040_pokemon_wigglytuff_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0040_pokemon_wigglytuff_normaldata {
  pokemonSettings: V0040_pokemon_wigglytuff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0040_pokemon_wigglytuff_normalEntry {
  templateId: "V0040_POKEMON_WIGGLYTUFF_NORMAL";
  data: V0040_pokemon_wigglytuff_normaldata;
}
export interface V0041_pokemon_zubatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0041_pokemon_zubatdata {
  pokemonSettings: V0041_pokemon_zubatdatapokemonsettings;
  templateId: string;
}
export interface V0041_pokemon_zubatEntry {
  templateId: "V0041_POKEMON_ZUBAT";
  data: V0041_pokemon_zubatdata;
}
export interface V0041_pokemon_zubat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0041_pokemon_zubat_normaldata {
  pokemonSettings: V0041_pokemon_zubat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0041_pokemon_zubat_normalEntry {
  templateId: "V0041_POKEMON_ZUBAT_NORMAL";
  data: V0041_pokemon_zubat_normaldata;
}
export interface V0042_pokemon_golbatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0042_pokemon_golbatdata {
  pokemonSettings: V0042_pokemon_golbatdatapokemonsettings;
  templateId: string;
}
export interface V0042_pokemon_golbatEntry {
  templateId: "V0042_POKEMON_GOLBAT";
  data: V0042_pokemon_golbatdata;
}
export interface V0042_pokemon_golbat_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0042_pokemon_golbat_normaldata {
  pokemonSettings: V0042_pokemon_golbat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0042_pokemon_golbat_normalEntry {
  templateId: "V0042_POKEMON_GOLBAT_NORMAL";
  data: V0042_pokemon_golbat_normaldata;
}
export interface V0043_pokemon_oddishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0043_pokemon_oddishdata {
  pokemonSettings: V0043_pokemon_oddishdatapokemonsettings;
  templateId: string;
}
export interface V0043_pokemon_oddishEntry {
  templateId: "V0043_POKEMON_ODDISH";
  data: V0043_pokemon_oddishdata;
}
export interface V0043_pokemon_oddish_normalEntry {
  templateId: "V0043_POKEMON_ODDISH_NORMAL";
  data: V0019_pokemon_rattata_aloladata;
}
export interface V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement?: string;
  form: string;
}
export interface V0044_pokemon_gloomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0044_pokemon_gloomdata {
  pokemonSettings: V0044_pokemon_gloomdatapokemonsettings;
  templateId: string;
}
export interface V0044_pokemon_gloomEntry {
  templateId: "V0044_POKEMON_GLOOM";
  data: V0044_pokemon_gloomdata;
}
export interface V0044_pokemon_gloom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0044_pokemon_gloom_normaldata {
  pokemonSettings: V0044_pokemon_gloom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0044_pokemon_gloom_normalEntry {
  templateId: "V0044_POKEMON_GLOOM_NORMAL";
  data: V0044_pokemon_gloom_normaldata;
}
export interface V0045_pokemon_vileplumedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0045_pokemon_vileplumedata {
  pokemonSettings: V0045_pokemon_vileplumedatapokemonsettings;
  templateId: string;
}
export interface V0045_pokemon_vileplumeEntry {
  templateId: "V0045_POKEMON_VILEPLUME";
  data: V0045_pokemon_vileplumedata;
}
export interface V0045_pokemon_vileplume_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0045_pokemon_vileplume_normaldata {
  pokemonSettings: V0045_pokemon_vileplume_normaldatapokemonsettings;
  templateId: string;
}
export interface V0045_pokemon_vileplume_normalEntry {
  templateId: "V0045_POKEMON_VILEPLUME_NORMAL";
  data: V0045_pokemon_vileplume_normaldata;
}
export interface V0046_pokemon_parasdatapokemonsettingsencounter {
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
export interface V0046_pokemon_parasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0046_pokemon_parasdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0046_pokemon_parasdata {
  pokemonSettings: V0046_pokemon_parasdatapokemonsettings;
  templateId: string;
}
export interface V0046_pokemon_parasEntry {
  templateId: "V0046_POKEMON_PARAS";
  data: V0046_pokemon_parasdata;
}
export interface V0046_pokemon_paras_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0046_pokemon_parasdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0046_pokemon_paras_normaldata {
  pokemonSettings: V0046_pokemon_paras_normaldatapokemonsettings;
  templateId: string;
}
export interface V0046_pokemon_paras_normalEntry {
  templateId: "V0046_POKEMON_PARAS_NORMAL";
  data: V0046_pokemon_paras_normaldata;
}
export interface V0047_pokemon_parasectdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0047_pokemon_parasectdata {
  pokemonSettings: V0047_pokemon_parasectdatapokemonsettings;
  templateId: string;
}
export interface V0047_pokemon_parasectEntry {
  templateId: "V0047_POKEMON_PARASECT";
  data: V0047_pokemon_parasectdata;
}
export interface V0047_pokemon_parasect_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0047_pokemon_parasect_normaldata {
  pokemonSettings: V0047_pokemon_parasect_normaldatapokemonsettings;
  templateId: string;
}
export interface V0047_pokemon_parasect_normalEntry {
  templateId: "V0047_POKEMON_PARASECT_NORMAL";
  data: V0047_pokemon_parasect_normaldata;
}
export interface V0048_pokemon_venonatEntry {
  templateId: "V0048_POKEMON_VENONAT";
  data: V0043_pokemon_oddishdata;
}
export interface V0048_pokemon_venonat_normalEntry {
  templateId: "V0048_POKEMON_VENONAT_NORMAL";
  data: V0019_pokemon_rattata_aloladata;
}
export interface V0049_pokemon_venomothEntry {
  templateId: "V0049_POKEMON_VENOMOTH";
  data: V0012_pokemon_butterfreedata;
}
export interface V0049_pokemon_venomoth_normalEntry {
  templateId: "V0049_POKEMON_VENOMOTH_NORMAL";
  data: V0012_pokemon_butterfree_normaldata;
}
export interface V0050_pokemon_diglettdatapokemonsettingsencounter {
  attackProbability: number;
  attackTimerS: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
  collisionHeightM: number;
  collisionRadiusM: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementTimerS: number;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
}
export interface V0050_pokemon_diglettdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0050_pokemon_diglettdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0050_pokemon_diglettdata {
  pokemonSettings: V0050_pokemon_diglettdatapokemonsettings;
  templateId: string;
}
export interface V0050_pokemon_diglettEntry {
  templateId: "V0050_POKEMON_DIGLETT";
  data: V0050_pokemon_diglettdata;
}
export interface V0050_pokemon_diglett_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0050_pokemon_diglettdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0050_pokemon_diglett_aloladata {
  pokemonSettings: V0050_pokemon_diglett_aloladatapokemonsettings;
  templateId: string;
}
export interface V0050_pokemon_diglett_alolaEntry {
  templateId: "V0050_POKEMON_DIGLETT_ALOLA";
  data: V0050_pokemon_diglett_aloladata;
}
export interface V0050_pokemon_diglett_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0050_pokemon_diglettdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0050_pokemon_diglett_normaldata {
  pokemonSettings: V0050_pokemon_diglett_normaldatapokemonsettings;
  templateId: string;
}
export interface V0050_pokemon_diglett_normalEntry {
  templateId: "V0050_POKEMON_DIGLETT_NORMAL";
  data: V0050_pokemon_diglett_normaldata;
}
export interface V0051_pokemon_dugtriodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0051_pokemon_dugtriodata {
  pokemonSettings: V0051_pokemon_dugtriodatapokemonsettings;
  templateId: string;
}
export interface V0051_pokemon_dugtrioEntry {
  templateId: "V0051_POKEMON_DUGTRIO";
  data: V0051_pokemon_dugtriodata;
}
export interface V0051_pokemon_dugtrio_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0051_pokemon_dugtrio_aloladata {
  pokemonSettings: V0051_pokemon_dugtrio_aloladatapokemonsettings;
  templateId: string;
}
export interface V0051_pokemon_dugtrio_alolaEntry {
  templateId: "V0051_POKEMON_DUGTRIO_ALOLA";
  data: V0051_pokemon_dugtrio_aloladata;
}
export interface V0051_pokemon_dugtrio_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0011_pokemon_metapoddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0051_pokemon_dugtrio_normaldata {
  pokemonSettings: V0051_pokemon_dugtrio_normaldatapokemonsettings;
  templateId: string;
}
export interface V0051_pokemon_dugtrio_normalEntry {
  templateId: "V0051_POKEMON_DUGTRIO_NORMAL";
  data: V0051_pokemon_dugtrio_normaldata;
}
export interface V0052_pokemon_meowthdatapokemonsettingsencounter {
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
export interface V0052_pokemon_meowthdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0052_pokemon_meowthdata {
  pokemonSettings: V0052_pokemon_meowthdatapokemonsettings;
  templateId: string;
}
export interface V0052_pokemon_meowthEntry {
  templateId: "V0052_POKEMON_MEOWTH";
  data: V0052_pokemon_meowthdata;
}
export interface V0052_pokemon_meowth_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0052_pokemon_meowth_aloladata {
  pokemonSettings: V0052_pokemon_meowth_aloladatapokemonsettings;
  templateId: string;
}
export interface V0052_pokemon_meowth_alolaEntry {
  templateId: "V0052_POKEMON_MEOWTH_ALOLA";
  data: V0052_pokemon_meowth_aloladata;
}
export interface V0052_pokemon_meowth_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0052_pokemon_meowth_galariandata {
  pokemonSettings: V0052_pokemon_meowth_galariandatapokemonsettings;
  templateId: string;
}
export interface V0052_pokemon_meowth_galarianEntry {
  templateId: "V0052_POKEMON_MEOWTH_GALARIAN";
  data: V0052_pokemon_meowth_galariandata;
}
export interface V0052_pokemon_meowth_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0052_pokemon_meowth_normaldata {
  pokemonSettings: V0052_pokemon_meowth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0052_pokemon_meowth_normalEntry {
  templateId: "V0052_POKEMON_MEOWTH_NORMAL";
  data: V0052_pokemon_meowth_normaldata;
}
export interface V0053_pokemon_persianEntry {
  templateId: "V0053_POKEMON_PERSIAN";
  data: V0028_pokemon_sandslashdata;
}
export interface V0053_pokemon_persian_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0053_pokemon_persian_aloladata {
  pokemonSettings: V0053_pokemon_persian_aloladatapokemonsettings;
  templateId: string;
}
export interface V0053_pokemon_persian_alolaEntry {
  templateId: "V0053_POKEMON_PERSIAN_ALOLA";
  data: V0053_pokemon_persian_aloladata;
}
export interface V0053_pokemon_persian_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0053_pokemon_persian_normaldata {
  pokemonSettings: V0053_pokemon_persian_normaldatapokemonsettings;
  templateId: string;
}
export interface V0053_pokemon_persian_normalEntry {
  templateId: "V0053_POKEMON_PERSIAN_NORMAL";
  data: V0053_pokemon_persian_normaldata;
}
export interface V0054_pokemon_psyduckdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0054_pokemon_psyduckdata {
  pokemonSettings: V0054_pokemon_psyduckdatapokemonsettings;
  templateId: string;
}
export interface V0054_pokemon_psyduckEntry {
  templateId: "V0054_POKEMON_PSYDUCK";
  data: V0054_pokemon_psyduckdata;
}
export interface V0054_pokemon_psyduck_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0054_pokemon_psyduck_normaldata {
  pokemonSettings: V0054_pokemon_psyduck_normaldatapokemonsettings;
  templateId: string;
}
export interface V0054_pokemon_psyduck_normalEntry {
  templateId: "V0054_POKEMON_PSYDUCK_NORMAL";
  data: V0054_pokemon_psyduck_normaldata;
}
export interface V0054_pokemon_psyduck_swim_2025datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0054_pokemon_psyduck_swim_2025data {
  pokemonSettings: V0054_pokemon_psyduck_swim_2025datapokemonsettings;
  templateId: string;
}
export interface V0054_pokemon_psyduck_swim_2025Entry {
  templateId: "V0054_POKEMON_PSYDUCK_SWIM_2025";
  data: V0054_pokemon_psyduck_swim_2025data;
}
export interface V0055_pokemon_golduckEntry {
  templateId: "V0055_POKEMON_GOLDUCK";
  data: V0024_pokemon_arbokdata;
}
export interface V0055_pokemon_golduck_normalEntry {
  templateId: "V0055_POKEMON_GOLDUCK_NORMAL";
  data: V0024_pokemon_arbok_normaldata;
}
export interface V0056_pokemon_mankeydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0056_pokemon_mankeydata {
  pokemonSettings: V0056_pokemon_mankeydatapokemonsettings;
  templateId: string;
}
export interface V0056_pokemon_mankeyEntry {
  templateId: "V0056_POKEMON_MANKEY";
  data: V0056_pokemon_mankeydata;
}
export interface V0056_pokemon_mankey_normalEntry {
  templateId: "V0056_POKEMON_MANKEY_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  priority: number;
  questDisplay: (V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0057_pokemon_primeapedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0057_pokemon_primeapedata {
  pokemonSettings: V0057_pokemon_primeapedatapokemonsettings;
  templateId: string;
}
export interface V0057_pokemon_primeapeEntry {
  templateId: "V0057_POKEMON_PRIMEAPE";
  data: V0057_pokemon_primeapedata;
}
export interface V0057_pokemon_primeape_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  priority: number;
  questDisplay: (V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0057_pokemon_primeape_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0057_pokemon_primeape_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0057_pokemon_primeape_normaldata {
  pokemonSettings: V0057_pokemon_primeape_normaldatapokemonsettings;
  templateId: string;
}
export interface V0057_pokemon_primeape_normalEntry {
  templateId: "V0057_POKEMON_PRIMEAPE_NORMAL";
  data: V0057_pokemon_primeape_normaldata;
}
export interface V0058_pokemon_growlitheEntry {
  templateId: "V0058_POKEMON_GROWLITHE";
  data: V0019_pokemon_rattatadata;
}
export interface V0058_pokemon_growlithe_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0058_pokemon_growlithe_hisuiandata {
  pokemonSettings: V0058_pokemon_growlithe_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0058_pokemon_growlithe_hisuianEntry {
  templateId: "V0058_POKEMON_GROWLITHE_HISUIAN";
  data: V0058_pokemon_growlithe_hisuiandata;
}
export interface V0058_pokemon_growlithe_normalEntry {
  templateId: "V0058_POKEMON_GROWLITHE_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0059_pokemon_arcanineEntry {
  templateId: "V0059_POKEMON_ARCANINE";
  data: V0038_pokemon_ninetalesdata;
}
export interface V0059_pokemon_arcanine_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0059_pokemon_arcanine_hisuiandata {
  pokemonSettings: V0059_pokemon_arcanine_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0059_pokemon_arcanine_hisuianEntry {
  templateId: "V0059_POKEMON_ARCANINE_HISUIAN";
  data: V0059_pokemon_arcanine_hisuiandata;
}
export interface V0059_pokemon_arcanine_normalEntry {
  templateId: "V0059_POKEMON_ARCANINE_NORMAL";
  data: V0038_pokemon_ninetales_normaldata;
}
export interface V0060_pokemon_poliwagEntry {
  templateId: "V0060_POKEMON_POLIWAG";
  data: V0019_pokemon_rattatadata;
}
export interface V0060_pokemon_poliwag_normalEntry {
  templateId: "V0060_POKEMON_POLIWAG_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0061_pokemon_poliwhirldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0061_pokemon_poliwhirldata {
  pokemonSettings: V0061_pokemon_poliwhirldatapokemonsettings;
  templateId: string;
}
export interface V0061_pokemon_poliwhirlEntry {
  templateId: "V0061_POKEMON_POLIWHIRL";
  data: V0061_pokemon_poliwhirldata;
}
export interface V0061_pokemon_poliwhirl_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0061_pokemon_poliwhirl_normaldata {
  pokemonSettings: V0061_pokemon_poliwhirl_normaldatapokemonsettings;
  templateId: string;
}
export interface V0061_pokemon_poliwhirl_normalEntry {
  templateId: "V0061_POKEMON_POLIWHIRL_NORMAL";
  data: V0061_pokemon_poliwhirl_normaldata;
}
export interface V0062_pokemon_poliwrathdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0062_pokemon_poliwrathdata {
  pokemonSettings: V0062_pokemon_poliwrathdatapokemonsettings;
  templateId: string;
}
export interface V0062_pokemon_poliwrathEntry {
  templateId: "V0062_POKEMON_POLIWRATH";
  data: V0062_pokemon_poliwrathdata;
}
export interface V0062_pokemon_poliwrath_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0062_pokemon_poliwrath_normaldata {
  pokemonSettings: V0062_pokemon_poliwrath_normaldatapokemonsettings;
  templateId: string;
}
export interface V0062_pokemon_poliwrath_normalEntry {
  templateId: "V0062_POKEMON_POLIWRATH_NORMAL";
  data: V0062_pokemon_poliwrath_normaldata;
}
export interface V0063_pokemon_abradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0063_pokemon_abradata {
  pokemonSettings: V0063_pokemon_abradatapokemonsettings;
  templateId: string;
}
export interface V0063_pokemon_abraEntry {
  templateId: "V0063_POKEMON_ABRA";
  data: V0063_pokemon_abradata;
}
export interface V0063_pokemon_abra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0063_pokemon_abra_normaldata {
  pokemonSettings: V0063_pokemon_abra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0063_pokemon_abra_normalEntry {
  templateId: "V0063_POKEMON_ABRA_NORMAL";
  data: V0063_pokemon_abra_normaldata;
}
export interface V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  noCandyCostViaTrade: boolean;
}
export interface V0064_pokemon_kadabradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0064_pokemon_kadabradata {
  pokemonSettings: V0064_pokemon_kadabradatapokemonsettings;
  templateId: string;
}
export interface V0064_pokemon_kadabraEntry {
  templateId: "V0064_POKEMON_KADABRA";
  data: V0064_pokemon_kadabradata;
}
export interface V0064_pokemon_kadabra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0064_pokemon_kadabra_normaldata {
  pokemonSettings: V0064_pokemon_kadabra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0064_pokemon_kadabra_normalEntry {
  templateId: "V0064_POKEMON_KADABRA_NORMAL";
  data: V0064_pokemon_kadabra_normaldata;
}
export interface V0065_pokemon_alakazamdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0065_pokemon_alakazamdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0065_pokemon_alakazamdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0065_pokemon_alakazamdata {
  pokemonSettings: V0065_pokemon_alakazamdatapokemonsettings;
  templateId: string;
}
export interface V0065_pokemon_alakazamEntry {
  templateId: "V0065_POKEMON_ALAKAZAM";
  data: V0065_pokemon_alakazamdata;
}
export interface V0065_pokemon_alakazam_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0065_pokemon_alakazamdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0065_pokemon_alakazam_normaldata {
  pokemonSettings: V0065_pokemon_alakazam_normaldatapokemonsettings;
  templateId: string;
}
export interface V0065_pokemon_alakazam_normalEntry {
  templateId: "V0065_POKEMON_ALAKAZAM_NORMAL";
  data: V0065_pokemon_alakazam_normaldata;
}
export interface V0066_pokemon_machopdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0066_pokemon_machopdata {
  pokemonSettings: V0066_pokemon_machopdatapokemonsettings;
  templateId: string;
}
export interface V0066_pokemon_machopEntry {
  templateId: "V0066_POKEMON_MACHOP";
  data: V0066_pokemon_machopdata;
}
export interface V0066_pokemon_machop_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0066_pokemon_machop_normaldata {
  pokemonSettings: V0066_pokemon_machop_normaldatapokemonsettings;
  templateId: string;
}
export interface V0066_pokemon_machop_normalEntry {
  templateId: "V0066_POKEMON_MACHOP_NORMAL";
  data: V0066_pokemon_machop_normaldata;
}
export interface V0067_pokemon_machokedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0067_pokemon_machokedata {
  pokemonSettings: V0067_pokemon_machokedatapokemonsettings;
  templateId: string;
}
export interface V0067_pokemon_machokeEntry {
  templateId: "V0067_POKEMON_MACHOKE";
  data: V0067_pokemon_machokedata;
}
export interface V0067_pokemon_machoke_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0067_pokemon_machoke_normaldata {
  pokemonSettings: V0067_pokemon_machoke_normaldatapokemonsettings;
  templateId: string;
}
export interface V0067_pokemon_machoke_normalEntry {
  templateId: "V0067_POKEMON_MACHOKE_NORMAL";
  data: V0067_pokemon_machoke_normaldata;
}
export interface V0068_pokemon_machampEntry {
  templateId: "V0068_POKEMON_MACHAMP";
  data: V0038_pokemon_ninetalesdata;
}
export interface V0068_pokemon_machamp_normalEntry {
  templateId: "V0068_POKEMON_MACHAMP_NORMAL";
  data: V0038_pokemon_ninetales_normaldata;
}
export interface V0069_pokemon_bellsproutdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0069_pokemon_bellsproutdata {
  pokemonSettings: V0069_pokemon_bellsproutdatapokemonsettings;
  templateId: string;
}
export interface V0069_pokemon_bellsproutEntry {
  templateId: "V0069_POKEMON_BELLSPROUT";
  data: V0069_pokemon_bellsproutdata;
}
export interface V0069_pokemon_bellsprout_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0069_pokemon_bellsprout_normaldata {
  pokemonSettings: V0069_pokemon_bellsprout_normaldatapokemonsettings;
  templateId: string;
}
export interface V0069_pokemon_bellsprout_normalEntry {
  templateId: "V0069_POKEMON_BELLSPROUT_NORMAL";
  data: V0069_pokemon_bellsprout_normaldata;
}
export interface V0070_pokemon_weepinbelldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0070_pokemon_weepinbelldata {
  pokemonSettings: V0070_pokemon_weepinbelldatapokemonsettings;
  templateId: string;
}
export interface V0070_pokemon_weepinbellEntry {
  templateId: "V0070_POKEMON_WEEPINBELL";
  data: V0070_pokemon_weepinbelldata;
}
export interface V0070_pokemon_weepinbell_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0070_pokemon_weepinbell_normaldata {
  pokemonSettings: V0070_pokemon_weepinbell_normaldatapokemonsettings;
  templateId: string;
}
export interface V0070_pokemon_weepinbell_normalEntry {
  templateId: "V0070_POKEMON_WEEPINBELL_NORMAL";
  data: V0070_pokemon_weepinbell_normaldata;
}
export interface V0071_pokemon_victreebeldatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0071_pokemon_victreebeldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0071_pokemon_victreebeldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0071_pokemon_victreebeldata {
  pokemonSettings: V0071_pokemon_victreebeldatapokemonsettings;
  templateId: string;
}
export interface V0071_pokemon_victreebelEntry {
  templateId: "V0071_POKEMON_VICTREEBEL";
  data: V0071_pokemon_victreebeldata;
}
export interface V0071_pokemon_victreebel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0071_pokemon_victreebeldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0071_pokemon_victreebel_normaldata {
  pokemonSettings: V0071_pokemon_victreebel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0071_pokemon_victreebel_normalEntry {
  templateId: "V0071_POKEMON_VICTREEBEL_NORMAL";
  data: V0071_pokemon_victreebel_normaldata;
}
export interface V0072_pokemon_tentacooldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0072_pokemon_tentacooldata {
  pokemonSettings: V0072_pokemon_tentacooldatapokemonsettings;
  templateId: string;
}
export interface V0072_pokemon_tentacoolEntry {
  templateId: "V0072_POKEMON_TENTACOOL";
  data: V0072_pokemon_tentacooldata;
}
export interface V0072_pokemon_tentacool_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0072_pokemon_tentacool_normaldata {
  pokemonSettings: V0072_pokemon_tentacool_normaldatapokemonsettings;
  templateId: string;
}
export interface V0072_pokemon_tentacool_normalEntry {
  templateId: "V0072_POKEMON_TENTACOOL_NORMAL";
  data: V0072_pokemon_tentacool_normaldata;
}
export interface V0073_pokemon_tentacrueldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0073_pokemon_tentacrueldata {
  pokemonSettings: V0073_pokemon_tentacrueldatapokemonsettings;
  templateId: string;
}
export interface V0073_pokemon_tentacruelEntry {
  templateId: "V0073_POKEMON_TENTACRUEL";
  data: V0073_pokemon_tentacrueldata;
}
export interface V0073_pokemon_tentacruel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0073_pokemon_tentacruel_normaldata {
  pokemonSettings: V0073_pokemon_tentacruel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0073_pokemon_tentacruel_normalEntry {
  templateId: "V0073_POKEMON_TENTACRUEL_NORMAL";
  data: V0073_pokemon_tentacruel_normaldata;
}
export interface V0074_pokemon_geodudedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0074_pokemon_geodudedata {
  pokemonSettings: V0074_pokemon_geodudedatapokemonsettings;
  templateId: string;
}
export interface V0074_pokemon_geodudeEntry {
  templateId: "V0074_POKEMON_GEODUDE";
  data: V0074_pokemon_geodudedata;
}
export interface V0074_pokemon_geodude_alolaEntry {
  templateId: "V0074_POKEMON_GEODUDE_ALOLA";
  data: V0072_pokemon_tentacool_normaldata;
}
export interface V0074_pokemon_geodude_normalEntry {
  templateId: "V0074_POKEMON_GEODUDE_NORMAL";
  data: V0072_pokemon_tentacool_normaldata;
}
export interface V0075_pokemon_gravelerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0075_pokemon_gravelerdata {
  pokemonSettings: V0075_pokemon_gravelerdatapokemonsettings;
  templateId: string;
}
export interface V0075_pokemon_gravelerEntry {
  templateId: "V0075_POKEMON_GRAVELER";
  data: V0075_pokemon_gravelerdata;
}
export interface V0075_pokemon_graveler_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0075_pokemon_graveler_aloladata {
  pokemonSettings: V0075_pokemon_graveler_aloladatapokemonsettings;
  templateId: string;
}
export interface V0075_pokemon_graveler_alolaEntry {
  templateId: "V0075_POKEMON_GRAVELER_ALOLA";
  data: V0075_pokemon_graveler_aloladata;
}
export interface V0075_pokemon_graveler_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0075_pokemon_graveler_normaldata {
  pokemonSettings: V0075_pokemon_graveler_normaldatapokemonsettings;
  templateId: string;
}
export interface V0075_pokemon_graveler_normalEntry {
  templateId: "V0075_POKEMON_GRAVELER_NORMAL";
  data: V0075_pokemon_graveler_normaldata;
}
export interface V0076_pokemon_golemEntry {
  templateId: "V0076_POKEMON_GOLEM";
  data: V0031_pokemon_nidoqueendata;
}
export interface V0076_pokemon_golem_alolaEntry {
  templateId: "V0076_POKEMON_GOLEM_ALOLA";
  data: V0034_pokemon_nidoking_normaldata;
}
export interface V0076_pokemon_golem_normalEntry {
  templateId: "V0076_POKEMON_GOLEM_NORMAL";
  data: V0031_pokemon_nidoqueen_normaldata;
}
export interface V0077_pokemon_ponytadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0077_pokemon_ponytadata {
  pokemonSettings: V0077_pokemon_ponytadatapokemonsettings;
  templateId: string;
}
export interface V0077_pokemon_ponytaEntry {
  templateId: "V0077_POKEMON_PONYTA";
  data: V0077_pokemon_ponytadata;
}
export interface V0077_pokemon_ponyta_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0077_pokemon_ponyta_galariandata {
  pokemonSettings: V0077_pokemon_ponyta_galariandatapokemonsettings;
  templateId: string;
}
export interface V0077_pokemon_ponyta_galarianEntry {
  templateId: "V0077_POKEMON_PONYTA_GALARIAN";
  data: V0077_pokemon_ponyta_galariandata;
}
export interface V0077_pokemon_ponyta_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0077_pokemon_ponyta_normaldata {
  pokemonSettings: V0077_pokemon_ponyta_normaldatapokemonsettings;
  templateId: string;
}
export interface V0077_pokemon_ponyta_normalEntry {
  templateId: "V0077_POKEMON_PONYTA_NORMAL";
  data: V0077_pokemon_ponyta_normaldata;
}
export interface V0078_pokemon_rapidashdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0078_pokemon_rapidashdata {
  pokemonSettings: V0078_pokemon_rapidashdatapokemonsettings;
  templateId: string;
}
export interface V0078_pokemon_rapidashEntry {
  templateId: "V0078_POKEMON_RAPIDASH";
  data: V0078_pokemon_rapidashdata;
}
export interface V0078_pokemon_rapidash_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0078_pokemon_rapidash_galariandata {
  pokemonSettings: V0078_pokemon_rapidash_galariandatapokemonsettings;
  templateId: string;
}
export interface V0078_pokemon_rapidash_galarianEntry {
  templateId: "V0078_POKEMON_RAPIDASH_GALARIAN";
  data: V0078_pokemon_rapidash_galariandata;
}
export interface V0078_pokemon_rapidash_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0078_pokemon_rapidash_normaldata {
  pokemonSettings: V0078_pokemon_rapidash_normaldatapokemonsettings;
  templateId: string;
}
export interface V0078_pokemon_rapidash_normalEntry {
  templateId: "V0078_POKEMON_RAPIDASH_NORMAL";
  data: V0078_pokemon_rapidash_normaldata;
}
export interface V0079_pokemon_slowpokedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0079_pokemon_slowpokedata {
  pokemonSettings: V0079_pokemon_slowpokedatapokemonsettings;
  templateId: string;
}
export interface V0079_pokemon_slowpokeEntry {
  templateId: "V0079_POKEMON_SLOWPOKE";
  data: V0079_pokemon_slowpokedata;
}
export interface V0079_pokemon_slowpoke_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0079_pokemon_slowpoke_2020data {
  pokemonSettings: V0079_pokemon_slowpoke_2020datapokemonsettings;
  templateId: string;
}
export interface V0079_pokemon_slowpoke_2020Entry {
  templateId: "V0079_POKEMON_SLOWPOKE_2020";
  data: V0079_pokemon_slowpoke_2020data;
}
export interface V0079_pokemon_slowpoke_galariandatapokemonsettingsencounter {
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
export interface V0079_pokemon_slowpoke_galariandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  cinematicMoves: (string)[];
  encounter: V0079_pokemon_slowpoke_galariandatapokemonsettingsencounter;
  evolutionBranch: (V0057_pokemon_primeape_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0079_pokemon_slowpoke_galariandata {
  pokemonSettings: V0079_pokemon_slowpoke_galariandatapokemonsettings;
  templateId: string;
}
export interface V0079_pokemon_slowpoke_galarianEntry {
  templateId: "V0079_POKEMON_SLOWPOKE_GALARIAN";
  data: V0079_pokemon_slowpoke_galariandata;
}
export interface V0079_pokemon_slowpoke_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0044_pokemon_gloomdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0079_pokemon_slowpoke_normaldata {
  pokemonSettings: V0079_pokemon_slowpoke_normaldatapokemonsettings;
  templateId: string;
}
export interface V0079_pokemon_slowpoke_normalEntry {
  templateId: "V0079_POKEMON_SLOWPOKE_NORMAL";
  data: V0079_pokemon_slowpoke_normaldata;
}
export interface V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitemcamera {
  cylinderHeightM: number;
}
export interface V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitemcamera;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0080_pokemon_slowbrodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0080_pokemon_slowbrodata {
  pokemonSettings: V0080_pokemon_slowbrodatapokemonsettings;
  templateId: string;
}
export interface V0080_pokemon_slowbroEntry {
  templateId: "V0080_POKEMON_SLOWBRO";
  data: V0080_pokemon_slowbrodata;
}
export interface V0080_pokemon_slowbro_2021datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0080_pokemon_slowbro_2021data {
  pokemonSettings: V0080_pokemon_slowbro_2021datapokemonsettings;
  templateId: string;
}
export interface V0080_pokemon_slowbro_2021Entry {
  templateId: "V0080_POKEMON_SLOWBRO_2021";
  data: V0080_pokemon_slowbro_2021data;
}
export interface V0080_pokemon_slowbro_galariandatapokemonsettingsencounter {
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
export interface V0080_pokemon_slowbro_galariandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0080_pokemon_slowbro_galariandatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0080_pokemon_slowbro_galariandata {
  pokemonSettings: V0080_pokemon_slowbro_galariandatapokemonsettings;
  templateId: string;
}
export interface V0080_pokemon_slowbro_galarianEntry {
  templateId: "V0080_POKEMON_SLOWBRO_GALARIAN";
  data: V0080_pokemon_slowbro_galariandata;
}
export interface V0080_pokemon_slowbro_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0080_pokemon_slowbrodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0080_pokemon_slowbro_normaldata {
  pokemonSettings: V0080_pokemon_slowbro_normaldatapokemonsettings;
  templateId: string;
}
export interface V0080_pokemon_slowbro_normalEntry {
  templateId: "V0080_POKEMON_SLOWBRO_NORMAL";
  data: V0080_pokemon_slowbro_normaldata;
}
export interface V0081_pokemon_magnemitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0081_pokemon_magnemitedata {
  pokemonSettings: V0081_pokemon_magnemitedatapokemonsettings;
  templateId: string;
}
export interface V0081_pokemon_magnemiteEntry {
  templateId: "V0081_POKEMON_MAGNEMITE";
  data: V0081_pokemon_magnemitedata;
}
export interface V0081_pokemon_magnemite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0081_pokemon_magnemite_normaldata {
  pokemonSettings: V0081_pokemon_magnemite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0081_pokemon_magnemite_normalEntry {
  templateId: "V0081_POKEMON_MAGNEMITE_NORMAL";
  data: V0081_pokemon_magnemite_normaldata;
}
export interface V0082_pokemon_magnetondatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  lureItemRequirement: string;
}
export interface V0082_pokemon_magnetondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0082_pokemon_magnetondatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0082_pokemon_magnetondata {
  pokemonSettings: V0082_pokemon_magnetondatapokemonsettings;
  templateId: string;
}
export interface V0082_pokemon_magnetonEntry {
  templateId: "V0082_POKEMON_MAGNETON";
  data: V0082_pokemon_magnetondata;
}
export interface V0082_pokemon_magneton_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  lureItemRequirement: string;
}
export interface V0082_pokemon_magneton_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0082_pokemon_magneton_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0082_pokemon_magneton_normaldata {
  pokemonSettings: V0082_pokemon_magneton_normaldatapokemonsettings;
  templateId: string;
}
export interface V0082_pokemon_magneton_normalEntry {
  templateId: "V0082_POKEMON_MAGNETON_NORMAL";
  data: V0082_pokemon_magneton_normaldata;
}
export interface V0083_pokemon_farfetchddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0083_pokemon_farfetchddata {
  pokemonSettings: V0083_pokemon_farfetchddatapokemonsettings;
  templateId: string;
}
export interface V0083_pokemon_farfetchdEntry {
  templateId: "V0083_POKEMON_FARFETCHD";
  data: V0083_pokemon_farfetchddata;
}
export interface V0083_pokemon_farfetchd_galariandatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  questDisplay: (V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0083_pokemon_farfetchd_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0083_pokemon_farfetchd_galariandatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0083_pokemon_farfetchd_galariandata {
  pokemonSettings: V0083_pokemon_farfetchd_galariandatapokemonsettings;
  templateId: string;
}
export interface V0083_pokemon_farfetchd_galarianEntry {
  templateId: "V0083_POKEMON_FARFETCHD_GALARIAN";
  data: V0083_pokemon_farfetchd_galariandata;
}
export interface V0083_pokemon_farfetchd_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0083_pokemon_farfetchd_normaldata {
  pokemonSettings: V0083_pokemon_farfetchd_normaldatapokemonsettings;
  templateId: string;
}
export interface V0083_pokemon_farfetchd_normalEntry {
  templateId: "V0083_POKEMON_FARFETCHD_NORMAL";
  data: V0083_pokemon_farfetchd_normaldata;
}
export interface V0084_pokemon_doduodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0084_pokemon_doduodata {
  pokemonSettings: V0084_pokemon_doduodatapokemonsettings;
  templateId: string;
}
export interface V0084_pokemon_doduoEntry {
  templateId: "V0084_POKEMON_DODUO";
  data: V0084_pokemon_doduodata;
}
export interface V0084_pokemon_doduo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0084_pokemon_doduo_normaldata {
  pokemonSettings: V0084_pokemon_doduo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0084_pokemon_doduo_normalEntry {
  templateId: "V0084_POKEMON_DODUO_NORMAL";
  data: V0084_pokemon_doduo_normaldata;
}
export interface V0085_pokemon_dodriodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0085_pokemon_dodriodata {
  pokemonSettings: V0085_pokemon_dodriodatapokemonsettings;
  templateId: string;
}
export interface V0085_pokemon_dodrioEntry {
  templateId: "V0085_POKEMON_DODRIO";
  data: V0085_pokemon_dodriodata;
}
export interface V0085_pokemon_dodrio_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0085_pokemon_dodrio_normaldata {
  pokemonSettings: V0085_pokemon_dodrio_normaldatapokemonsettings;
  templateId: string;
}
export interface V0085_pokemon_dodrio_normalEntry {
  templateId: "V0085_POKEMON_DODRIO_NORMAL";
  data: V0085_pokemon_dodrio_normaldata;
}
export interface V0086_pokemon_seeldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0086_pokemon_seeldata {
  pokemonSettings: V0086_pokemon_seeldatapokemonsettings;
  templateId: string;
}
export interface V0086_pokemon_seelEntry {
  templateId: "V0086_POKEMON_SEEL";
  data: V0086_pokemon_seeldata;
}
export interface V0086_pokemon_seel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0086_pokemon_seel_normaldata {
  pokemonSettings: V0086_pokemon_seel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0086_pokemon_seel_normalEntry {
  templateId: "V0086_POKEMON_SEEL_NORMAL";
  data: V0086_pokemon_seel_normaldata;
}
export interface V0087_pokemon_dewgongdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0087_pokemon_dewgongdata {
  pokemonSettings: V0087_pokemon_dewgongdatapokemonsettings;
  templateId: string;
}
export interface V0087_pokemon_dewgongEntry {
  templateId: "V0087_POKEMON_DEWGONG";
  data: V0087_pokemon_dewgongdata;
}
export interface V0087_pokemon_dewgong_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0087_pokemon_dewgong_normaldata {
  pokemonSettings: V0087_pokemon_dewgong_normaldatapokemonsettings;
  templateId: string;
}
export interface V0087_pokemon_dewgong_normalEntry {
  templateId: "V0087_POKEMON_DEWGONG_NORMAL";
  data: V0087_pokemon_dewgong_normaldata;
}
export interface V0088_pokemon_grimerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0088_pokemon_grimerdata {
  pokemonSettings: V0088_pokemon_grimerdatapokemonsettings;
  templateId: string;
}
export interface V0088_pokemon_grimerEntry {
  templateId: "V0088_POKEMON_GRIMER";
  data: V0088_pokemon_grimerdata;
}
export interface V0088_pokemon_grimer_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0088_pokemon_grimer_aloladata {
  pokemonSettings: V0088_pokemon_grimer_aloladatapokemonsettings;
  templateId: string;
}
export interface V0088_pokemon_grimer_alolaEntry {
  templateId: "V0088_POKEMON_GRIMER_ALOLA";
  data: V0088_pokemon_grimer_aloladata;
}
export interface V0088_pokemon_grimer_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0088_pokemon_grimer_normaldata {
  pokemonSettings: V0088_pokemon_grimer_normaldatapokemonsettings;
  templateId: string;
}
export interface V0088_pokemon_grimer_normalEntry {
  templateId: "V0088_POKEMON_GRIMER_NORMAL";
  data: V0088_pokemon_grimer_normaldata;
}
export interface V0089_pokemon_mukdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0089_pokemon_mukdata {
  pokemonSettings: V0089_pokemon_mukdatapokemonsettings;
  templateId: string;
}
export interface V0089_pokemon_mukEntry {
  templateId: "V0089_POKEMON_MUK";
  data: V0089_pokemon_mukdata;
}
export interface V0089_pokemon_muk_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0089_pokemon_muk_aloladata {
  pokemonSettings: V0089_pokemon_muk_aloladatapokemonsettings;
  templateId: string;
}
export interface V0089_pokemon_muk_alolaEntry {
  templateId: "V0089_POKEMON_MUK_ALOLA";
  data: V0089_pokemon_muk_aloladata;
}
export interface V0089_pokemon_muk_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0089_pokemon_muk_normaldata {
  pokemonSettings: V0089_pokemon_muk_normaldatapokemonsettings;
  templateId: string;
}
export interface V0089_pokemon_muk_normalEntry {
  templateId: "V0089_POKEMON_MUK_NORMAL";
  data: V0089_pokemon_muk_normaldata;
}
export interface V0090_pokemon_shellderdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0090_pokemon_shellderdata {
  pokemonSettings: V0090_pokemon_shellderdatapokemonsettings;
  templateId: string;
}
export interface V0090_pokemon_shellderEntry {
  templateId: "V0090_POKEMON_SHELLDER";
  data: V0090_pokemon_shellderdata;
}
export interface V0090_pokemon_shellder_normalEntry {
  templateId: "V0090_POKEMON_SHELLDER_NORMAL";
  data: V0052_pokemon_meowth_aloladata;
}
export interface V0091_pokemon_cloysterdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0091_pokemon_cloysterdata {
  pokemonSettings: V0091_pokemon_cloysterdatapokemonsettings;
  templateId: string;
}
export interface V0091_pokemon_cloysterEntry {
  templateId: "V0091_POKEMON_CLOYSTER";
  data: V0091_pokemon_cloysterdata;
}
export interface V0091_pokemon_cloyster_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0091_pokemon_cloyster_normaldata {
  pokemonSettings: V0091_pokemon_cloyster_normaldatapokemonsettings;
  templateId: string;
}
export interface V0091_pokemon_cloyster_normalEntry {
  templateId: "V0091_POKEMON_CLOYSTER_NORMAL";
  data: V0091_pokemon_cloyster_normaldata;
}
export interface V0092_pokemon_gastlydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0092_pokemon_gastlydata {
  pokemonSettings: V0092_pokemon_gastlydatapokemonsettings;
  templateId: string;
}
export interface V0092_pokemon_gastlyEntry {
  templateId: "V0092_POKEMON_GASTLY";
  data: V0092_pokemon_gastlydata;
}
export interface V0092_pokemon_gastly_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0092_pokemon_gastly_normaldata {
  pokemonSettings: V0092_pokemon_gastly_normaldatapokemonsettings;
  templateId: string;
}
export interface V0092_pokemon_gastly_normalEntry {
  templateId: "V0092_POKEMON_GASTLY_NORMAL";
  data: V0092_pokemon_gastly_normaldata;
}
export interface V0093_pokemon_haunterdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0093_pokemon_haunterdata {
  pokemonSettings: V0093_pokemon_haunterdatapokemonsettings;
  templateId: string;
}
export interface V0093_pokemon_haunterEntry {
  templateId: "V0093_POKEMON_HAUNTER";
  data: V0093_pokemon_haunterdata;
}
export interface V0093_pokemon_haunter_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0064_pokemon_kadabradatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0093_pokemon_haunter_normaldata {
  pokemonSettings: V0093_pokemon_haunter_normaldatapokemonsettings;
  templateId: string;
}
export interface V0093_pokemon_haunter_normalEntry {
  templateId: "V0093_POKEMON_HAUNTER_NORMAL";
  data: V0093_pokemon_haunter_normaldata;
}
export interface V0094_pokemon_gengardatapokemonsettingstempevooverridesitemcamera {
  cylinderHeightM?: number;
  cylinderRadiusM: number;
}
export interface V0094_pokemon_gengardatapokemonsettingstempevooverridesitem {
  averageHeightM?: number;
  averageWeightKg?: number;
  buddyPortraitOffset?: (number)[];
  camera: V0094_pokemon_gengardatapokemonsettingstempevooverridesitemcamera;
  modelHeight?: number;
  modelScaleV2?: number;
  raidBossDistanceOffset?: number;
  stats?: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId?: string;
  typeOverride1?: string;
  typeOverride2?: string;
}
export interface V0094_pokemon_gengardatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0094_pokemon_gengardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0094_pokemon_gengardata {
  pokemonSettings: V0094_pokemon_gengardatapokemonsettings;
  templateId: string;
}
export interface V0094_pokemon_gengarEntry {
  templateId: "V0094_POKEMON_GENGAR";
  data: V0094_pokemon_gengardata;
}
export interface V0094_pokemon_gengar_costume_2020datapokemonsettingstempevooverridesitemcamera {
  cylinderRadiusM: number;
}
export interface V0094_pokemon_gengar_costume_2020datapokemonsettingstempevooverridesitem {
  averageHeightM?: number;
  averageWeightKg?: number;
  buddyPortraitOffset?: (number)[];
  camera: V0094_pokemon_gengar_costume_2020datapokemonsettingstempevooverridesitemcamera;
  modelHeight?: number;
  modelScaleV2?: number;
  raidBossDistanceOffset?: number;
  stats?: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId?: string;
  typeOverride1?: string;
  typeOverride2?: string;
}
export interface V0094_pokemon_gengar_costume_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0094_pokemon_gengar_costume_2020datapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0094_pokemon_gengar_costume_2020data {
  pokemonSettings: V0094_pokemon_gengar_costume_2020datapokemonsettings;
  templateId: string;
}
export interface V0094_pokemon_gengar_costume_2020Entry {
  templateId: "V0094_POKEMON_GENGAR_COSTUME_2020";
  data: V0094_pokemon_gengar_costume_2020data;
}
export interface V0094_pokemon_gengar_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0094_pokemon_gengardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0094_pokemon_gengar_normaldata {
  pokemonSettings: V0094_pokemon_gengar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0094_pokemon_gengar_normalEntry {
  templateId: "V0094_POKEMON_GENGAR_NORMAL";
  data: V0094_pokemon_gengar_normaldata;
}
export interface V0095_pokemon_onixdatapokemonsettingsencounter {
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
  shadowDodgeProbability: number;
}
export interface V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0095_pokemon_onixdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0095_pokemon_onixdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0095_pokemon_onixdata {
  pokemonSettings: V0095_pokemon_onixdatapokemonsettings;
  templateId: string;
}
export interface V0095_pokemon_onixEntry {
  templateId: "V0095_POKEMON_ONIX";
  data: V0095_pokemon_onixdata;
}
export interface V0095_pokemon_onix_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0095_pokemon_onixdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0095_pokemon_onix_normaldata {
  pokemonSettings: V0095_pokemon_onix_normaldatapokemonsettings;
  templateId: string;
}
export interface V0095_pokemon_onix_normalEntry {
  templateId: "V0095_POKEMON_ONIX_NORMAL";
  data: V0095_pokemon_onix_normaldata;
}
export interface V0096_pokemon_drowzeeEntry {
  templateId: "V0096_POKEMON_DROWZEE";
  data: V0088_pokemon_grimerdata;
}
export interface V0096_pokemon_drowzee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0096_pokemon_drowzee_normaldata {
  pokemonSettings: V0096_pokemon_drowzee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0096_pokemon_drowzee_normalEntry {
  templateId: "V0096_POKEMON_DROWZEE_NORMAL";
  data: V0096_pokemon_drowzee_normaldata;
}
export interface V0097_pokemon_hypnodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0097_pokemon_hypnodata {
  pokemonSettings: V0097_pokemon_hypnodatapokemonsettings;
  templateId: string;
}
export interface V0097_pokemon_hypnoEntry {
  templateId: "V0097_POKEMON_HYPNO";
  data: V0097_pokemon_hypnodata;
}
export interface V0097_pokemon_hypno_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0097_pokemon_hypno_normaldata {
  pokemonSettings: V0097_pokemon_hypno_normaldatapokemonsettings;
  templateId: string;
}
export interface V0097_pokemon_hypno_normalEntry {
  templateId: "V0097_POKEMON_HYPNO_NORMAL";
  data: V0097_pokemon_hypno_normaldata;
}
export interface V0098_pokemon_krabbyEntry {
  templateId: "V0098_POKEMON_KRABBY";
  data: V0019_pokemon_rattatadata;
}
export interface V0098_pokemon_krabby_normalEntry {
  templateId: "V0098_POKEMON_KRABBY_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0099_pokemon_kinglerEntry {
  templateId: "V0099_POKEMON_KINGLER";
  data: V0089_pokemon_mukdata;
}
export interface V0099_pokemon_kingler_normalEntry {
  templateId: "V0099_POKEMON_KINGLER_NORMAL";
  data: V0089_pokemon_muk_normaldata;
}
export interface V0100_pokemon_voltorbdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0100_pokemon_voltorbdata {
  pokemonSettings: V0100_pokemon_voltorbdatapokemonsettings;
  templateId: string;
}
export interface V0100_pokemon_voltorbEntry {
  templateId: "V0100_POKEMON_VOLTORB";
  data: V0100_pokemon_voltorbdata;
}
export interface V0100_pokemon_voltorb_hisuiandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0100_pokemon_voltorb_hisuiandata {
  pokemonSettings: V0100_pokemon_voltorb_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0100_pokemon_voltorb_hisuianEntry {
  templateId: "V0100_POKEMON_VOLTORB_HISUIAN";
  data: V0100_pokemon_voltorb_hisuiandata;
}
export interface V0100_pokemon_voltorb_normalEntry {
  templateId: "V0100_POKEMON_VOLTORB_NORMAL";
  data: V0023_pokemon_ekans_normaldata;
}
export interface V0101_pokemon_electrodeEntry {
  templateId: "V0101_POKEMON_ELECTRODE";
  data: V0089_pokemon_mukdata;
}
export interface V0101_pokemon_electrode_hisuianEntry {
  templateId: "V0101_POKEMON_ELECTRODE_HISUIAN";
  data: V0089_pokemon_muk_aloladata;
}
export interface V0101_pokemon_electrode_normalEntry {
  templateId: "V0101_POKEMON_ELECTRODE_NORMAL";
  data: V0089_pokemon_muk_normaldata;
}
export interface V0102_pokemon_exeggcutedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0102_pokemon_exeggcutedata {
  pokemonSettings: V0102_pokemon_exeggcutedatapokemonsettings;
  templateId: string;
}
export interface V0102_pokemon_exeggcuteEntry {
  templateId: "V0102_POKEMON_EXEGGCUTE";
  data: V0102_pokemon_exeggcutedata;
}
export interface V0102_pokemon_exeggcute_normalEntry {
  templateId: "V0102_POKEMON_EXEGGCUTE_NORMAL";
  data: V0100_pokemon_voltorb_hisuiandata;
}
export interface V0103_pokemon_exeggutorEntry {
  templateId: "V0103_POKEMON_EXEGGUTOR";
  data: V0034_pokemon_nidokingdata;
}
export interface V0103_pokemon_exeggutor_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerPokemonPositionOffset: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0103_pokemon_exeggutor_aloladata {
  pokemonSettings: V0103_pokemon_exeggutor_aloladatapokemonsettings;
  templateId: string;
}
export interface V0103_pokemon_exeggutor_alolaEntry {
  templateId: "V0103_POKEMON_EXEGGUTOR_ALOLA";
  data: V0103_pokemon_exeggutor_aloladata;
}
export interface V0103_pokemon_exeggutor_normalEntry {
  templateId: "V0103_POKEMON_EXEGGUTOR_NORMAL";
  data: V0034_pokemon_nidoking_normaldata;
}
export interface V0104_pokemon_cuboneEntry {
  templateId: "V0104_POKEMON_CUBONE";
  data: V0019_pokemon_rattatadata;
}
export interface V0104_pokemon_cubone_normalEntry {
  templateId: "V0104_POKEMON_CUBONE_NORMAL";
  data: V0019_pokemon_rattata_normaldata;
}
export interface V0105_pokemon_marowakEntry {
  templateId: "V0105_POKEMON_MAROWAK";
  data: V0020_pokemon_raticatedata;
}
export interface V0105_pokemon_marowak_aloladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0105_pokemon_marowak_aloladata {
  pokemonSettings: V0105_pokemon_marowak_aloladatapokemonsettings;
  templateId: string;
}
export interface V0105_pokemon_marowak_alolaEntry {
  templateId: "V0105_POKEMON_MAROWAK_ALOLA";
  data: V0105_pokemon_marowak_aloladata;
}
export interface V0105_pokemon_marowak_normalEntry {
  templateId: "V0105_POKEMON_MAROWAK_NORMAL";
  data: V0020_pokemon_raticate_normaldata;
}
export interface V0106_pokemon_hitmonleedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0106_pokemon_hitmonleedata {
  pokemonSettings: V0106_pokemon_hitmonleedatapokemonsettings;
  templateId: string;
}
export interface V0106_pokemon_hitmonleeEntry {
  templateId: "V0106_POKEMON_HITMONLEE";
  data: V0106_pokemon_hitmonleedata;
}
export interface V0106_pokemon_hitmonlee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0106_pokemon_hitmonlee_normaldata {
  pokemonSettings: V0106_pokemon_hitmonlee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0106_pokemon_hitmonlee_normalEntry {
  templateId: "V0106_POKEMON_HITMONLEE_NORMAL";
  data: V0106_pokemon_hitmonlee_normaldata;
}
export interface V0107_pokemon_hitmonchandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0107_pokemon_hitmonchandata {
  pokemonSettings: V0107_pokemon_hitmonchandatapokemonsettings;
  templateId: string;
}
export interface V0107_pokemon_hitmonchanEntry {
  templateId: "V0107_POKEMON_HITMONCHAN";
  data: V0107_pokemon_hitmonchandata;
}
export interface V0107_pokemon_hitmonchan_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0107_pokemon_hitmonchan_normaldata {
  pokemonSettings: V0107_pokemon_hitmonchan_normaldatapokemonsettings;
  templateId: string;
}
export interface V0107_pokemon_hitmonchan_normalEntry {
  templateId: "V0107_POKEMON_HITMONCHAN_NORMAL";
  data: V0107_pokemon_hitmonchan_normaldata;
}
export interface V0108_pokemon_lickitungdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0108_pokemon_lickitungdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0108_pokemon_lickitungdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0108_pokemon_lickitungdata {
  pokemonSettings: V0108_pokemon_lickitungdatapokemonsettings;
  templateId: string;
}
export interface V0108_pokemon_lickitungEntry {
  templateId: "V0108_POKEMON_LICKITUNG";
  data: V0108_pokemon_lickitungdata;
}
export interface V0108_pokemon_lickitung_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0108_pokemon_lickitung_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0108_pokemon_lickitung_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0108_pokemon_lickitung_normaldata {
  pokemonSettings: V0108_pokemon_lickitung_normaldatapokemonsettings;
  templateId: string;
}
export interface V0108_pokemon_lickitung_normalEntry {
  templateId: "V0108_POKEMON_LICKITUNG_NORMAL";
  data: V0108_pokemon_lickitung_normaldata;
}
export interface V0109_pokemon_koffingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0109_pokemon_koffingdata {
  pokemonSettings: V0109_pokemon_koffingdatapokemonsettings;
  templateId: string;
}
export interface V0109_pokemon_koffingEntry {
  templateId: "V0109_POKEMON_KOFFING";
  data: V0109_pokemon_koffingdata;
}
export interface V0109_pokemon_koffing_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0109_pokemon_koffing_normaldata {
  pokemonSettings: V0109_pokemon_koffing_normaldatapokemonsettings;
  templateId: string;
}
export interface V0109_pokemon_koffing_normalEntry {
  templateId: "V0109_POKEMON_KOFFING_NORMAL";
  data: V0109_pokemon_koffing_normaldata;
}
export interface V0110_pokemon_weezingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0110_pokemon_weezingdata {
  pokemonSettings: V0110_pokemon_weezingdatapokemonsettings;
  templateId: string;
}
export interface V0110_pokemon_weezingEntry {
  templateId: "V0110_POKEMON_WEEZING";
  data: V0110_pokemon_weezingdata;
}
export interface V0110_pokemon_weezing_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0110_pokemon_weezing_galariandata {
  pokemonSettings: V0110_pokemon_weezing_galariandatapokemonsettings;
  templateId: string;
}
export interface V0110_pokemon_weezing_galarianEntry {
  templateId: "V0110_POKEMON_WEEZING_GALARIAN";
  data: V0110_pokemon_weezing_galariandata;
}
export interface V0110_pokemon_weezing_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0110_pokemon_weezing_normaldata {
  pokemonSettings: V0110_pokemon_weezing_normaldatapokemonsettings;
  templateId: string;
}
export interface V0110_pokemon_weezing_normalEntry {
  templateId: "V0110_POKEMON_WEEZING_NORMAL";
  data: V0110_pokemon_weezing_normaldata;
}
export interface V0111_pokemon_rhyhorndatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0111_pokemon_rhyhorndata {
  pokemonSettings: V0111_pokemon_rhyhorndatapokemonsettings;
  templateId: string;
}
export interface V0111_pokemon_rhyhornEntry {
  templateId: "V0111_POKEMON_RHYHORN";
  data: V0111_pokemon_rhyhorndata;
}
export interface V0111_pokemon_rhyhorn_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0111_pokemon_rhyhorn_normaldata {
  pokemonSettings: V0111_pokemon_rhyhorn_normaldatapokemonsettings;
  templateId: string;
}
export interface V0111_pokemon_rhyhorn_normalEntry {
  templateId: "V0111_POKEMON_RHYHORN_NORMAL";
  data: V0111_pokemon_rhyhorn_normaldata;
}
export interface V0112_pokemon_rhydondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0112_pokemon_rhydondata {
  pokemonSettings: V0112_pokemon_rhydondatapokemonsettings;
  templateId: string;
}
export interface V0112_pokemon_rhydonEntry {
  templateId: "V0112_POKEMON_RHYDON";
  data: V0112_pokemon_rhydondata;
}
export interface V0112_pokemon_rhydon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0112_pokemon_rhydon_normaldata {
  pokemonSettings: V0112_pokemon_rhydon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0112_pokemon_rhydon_normalEntry {
  templateId: "V0112_POKEMON_RHYDON_NORMAL";
  data: V0112_pokemon_rhydon_normaldata;
}
export interface V0113_pokemon_chanseydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0113_pokemon_chanseydata {
  pokemonSettings: V0113_pokemon_chanseydatapokemonsettings;
  templateId: string;
}
export interface V0113_pokemon_chanseyEntry {
  templateId: "V0113_POKEMON_CHANSEY";
  data: V0113_pokemon_chanseydata;
}
export interface V0113_pokemon_chansey_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0113_pokemon_chansey_normaldata {
  pokemonSettings: V0113_pokemon_chansey_normaldatapokemonsettings;
  templateId: string;
}
export interface V0113_pokemon_chansey_normalEntry {
  templateId: "V0113_POKEMON_CHANSEY_NORMAL";
  data: V0113_pokemon_chansey_normaldata;
}
export interface V0114_pokemon_tangeladatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0114_pokemon_tangeladata {
  pokemonSettings: V0114_pokemon_tangeladatapokemonsettings;
  templateId: string;
}
export interface V0114_pokemon_tangelaEntry {
  templateId: "V0114_POKEMON_TANGELA";
  data: V0114_pokemon_tangeladata;
}
export interface V0114_pokemon_tangela_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0114_pokemon_tangela_normaldata {
  pokemonSettings: V0114_pokemon_tangela_normaldatapokemonsettings;
  templateId: string;
}
export interface V0114_pokemon_tangela_normalEntry {
  templateId: "V0114_POKEMON_TANGELA_NORMAL";
  data: V0114_pokemon_tangela_normaldata;
}
export interface V0115_pokemon_kangaskhandatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0003_pokemon_venusaurdatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0115_pokemon_kangaskhandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0115_pokemon_kangaskhandatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0115_pokemon_kangaskhandata {
  pokemonSettings: V0115_pokemon_kangaskhandatapokemonsettings;
  templateId: string;
}
export interface V0115_pokemon_kangaskhanEntry {
  templateId: "V0115_POKEMON_KANGASKHAN";
  data: V0115_pokemon_kangaskhandata;
}
export interface V0115_pokemon_kangaskhan_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0115_pokemon_kangaskhandatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0115_pokemon_kangaskhan_normaldata {
  pokemonSettings: V0115_pokemon_kangaskhan_normaldatapokemonsettings;
  templateId: string;
}
export interface V0115_pokemon_kangaskhan_normalEntry {
  templateId: "V0115_POKEMON_KANGASKHAN_NORMAL";
  data: V0115_pokemon_kangaskhan_normaldata;
}
export interface V0116_pokemon_horseadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0116_pokemon_horseadata {
  pokemonSettings: V0116_pokemon_horseadatapokemonsettings;
  templateId: string;
}
export interface V0116_pokemon_horseaEntry {
  templateId: "V0116_POKEMON_HORSEA";
  data: V0116_pokemon_horseadata;
}
export interface V0116_pokemon_horsea_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0116_pokemon_horsea_normaldata {
  pokemonSettings: V0116_pokemon_horsea_normaldatapokemonsettings;
  templateId: string;
}
export interface V0116_pokemon_horsea_normalEntry {
  templateId: "V0116_POKEMON_HORSEA_NORMAL";
  data: V0116_pokemon_horsea_normaldata;
}
export interface V0117_pokemon_seadradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0117_pokemon_seadradata {
  pokemonSettings: V0117_pokemon_seadradatapokemonsettings;
  templateId: string;
}
export interface V0117_pokemon_seadraEntry {
  templateId: "V0117_POKEMON_SEADRA";
  data: V0117_pokemon_seadradata;
}
export interface V0117_pokemon_seadra_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0117_pokemon_seadra_normaldata {
  pokemonSettings: V0117_pokemon_seadra_normaldatapokemonsettings;
  templateId: string;
}
export interface V0117_pokemon_seadra_normalEntry {
  templateId: "V0117_POKEMON_SEADRA_NORMAL";
  data: V0117_pokemon_seadra_normaldata;
}
export interface V0118_pokemon_goldeendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearowdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0118_pokemon_goldeendata {
  pokemonSettings: V0118_pokemon_goldeendatapokemonsettings;
  templateId: string;
}
export interface V0118_pokemon_goldeenEntry {
  templateId: "V0118_POKEMON_GOLDEEN";
  data: V0118_pokemon_goldeendata;
}
export interface V0118_pokemon_goldeen_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0021_pokemon_spearow_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0118_pokemon_goldeen_normaldata {
  pokemonSettings: V0118_pokemon_goldeen_normaldatapokemonsettings;
  templateId: string;
}
export interface V0118_pokemon_goldeen_normalEntry {
  templateId: "V0118_POKEMON_GOLDEEN_NORMAL";
  data: V0118_pokemon_goldeen_normaldata;
}
export interface V0119_pokemon_seakingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0119_pokemon_seakingdata {
  pokemonSettings: V0119_pokemon_seakingdatapokemonsettings;
  templateId: string;
}
export interface V0119_pokemon_seakingEntry {
  templateId: "V0119_POKEMON_SEAKING";
  data: V0119_pokemon_seakingdata;
}
export interface V0119_pokemon_seaking_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0119_pokemon_seaking_normaldata {
  pokemonSettings: V0119_pokemon_seaking_normaldatapokemonsettings;
  templateId: string;
}
export interface V0119_pokemon_seaking_normalEntry {
  templateId: "V0119_POKEMON_SEAKING_NORMAL";
  data: V0119_pokemon_seaking_normaldata;
}
export interface V0120_pokemon_staryudatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0016_pokemon_pidgeydatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0120_pokemon_staryudata {
  pokemonSettings: V0120_pokemon_staryudatapokemonsettings;
  templateId: string;
}
export interface V0120_pokemon_staryuEntry {
  templateId: "V0120_POKEMON_STARYU";
  data: V0120_pokemon_staryudata;
}
export interface V0120_pokemon_staryu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0052_pokemon_meowthdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0120_pokemon_staryu_normaldata {
  pokemonSettings: V0120_pokemon_staryu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0120_pokemon_staryu_normalEntry {
  templateId: "V0120_POKEMON_STARYU_NORMAL";
  data: V0120_pokemon_staryu_normaldata;
}
export interface V0121_pokemon_starmieEntry {
  templateId: "V0121_POKEMON_STARMIE";
  data: V0034_pokemon_nidokingdata;
}
export interface V0121_pokemon_starmie_normalEntry {
  templateId: "V0121_POKEMON_STARMIE_NORMAL";
  data: V0034_pokemon_nidoking_normaldata;
}
export interface V0122_pokemon_mr_mimedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0122_pokemon_mr_mimedata {
  pokemonSettings: V0122_pokemon_mr_mimedatapokemonsettings;
  templateId: string;
}
export interface V0122_pokemon_mr_mimeEntry {
  templateId: "V0122_POKEMON_MR_MIME";
  data: V0122_pokemon_mr_mimedata;
}
export interface V0122_pokemon_mr_mime_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0122_pokemon_mr_mime_galariandata {
  pokemonSettings: V0122_pokemon_mr_mime_galariandatapokemonsettings;
  templateId: string;
}
export interface V0122_pokemon_mr_mime_galarianEntry {
  templateId: "V0122_POKEMON_MR_MIME_GALARIAN";
  data: V0122_pokemon_mr_mime_galariandata;
}
export interface V0122_pokemon_mr_mime_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0122_pokemon_mr_mime_normaldata {
  pokemonSettings: V0122_pokemon_mr_mime_normaldatapokemonsettings;
  templateId: string;
}
export interface V0122_pokemon_mr_mime_normalEntry {
  templateId: "V0122_POKEMON_MR_MIME_NORMAL";
  data: V0122_pokemon_mr_mime_normaldata;
}
export interface V0123_pokemon_scytherdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0123_pokemon_scytherdata {
  pokemonSettings: V0123_pokemon_scytherdatapokemonsettings;
  templateId: string;
}
export interface V0123_pokemon_scytherEntry {
  templateId: "V0123_POKEMON_SCYTHER";
  data: V0123_pokemon_scytherdata;
}
export interface V0123_pokemon_scyther_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0123_pokemon_scyther_normaldata {
  pokemonSettings: V0123_pokemon_scyther_normaldatapokemonsettings;
  templateId: string;
}
export interface V0123_pokemon_scyther_normalEntry {
  templateId: "V0123_POKEMON_SCYTHER_NORMAL";
  data: V0123_pokemon_scyther_normaldata;
}
export interface V0124_pokemon_jynxdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0124_pokemon_jynxdata {
  pokemonSettings: V0124_pokemon_jynxdatapokemonsettings;
  templateId: string;
}
export interface V0124_pokemon_jynxEntry {
  templateId: "V0124_POKEMON_JYNX";
  data: V0124_pokemon_jynxdata;
}
export interface V0124_pokemon_jynx_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0124_pokemon_jynx_normaldata {
  pokemonSettings: V0124_pokemon_jynx_normaldatapokemonsettings;
  templateId: string;
}
export interface V0124_pokemon_jynx_normalEntry {
  templateId: "V0124_POKEMON_JYNX_NORMAL";
  data: V0124_pokemon_jynx_normaldata;
}
export interface V0125_pokemon_electabuzzdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0125_pokemon_electabuzzdata {
  pokemonSettings: V0125_pokemon_electabuzzdatapokemonsettings;
  templateId: string;
}
export interface V0125_pokemon_electabuzzEntry {
  templateId: "V0125_POKEMON_ELECTABUZZ";
  data: V0125_pokemon_electabuzzdata;
}
export interface V0125_pokemon_electabuzz_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0125_pokemon_electabuzz_normaldata {
  pokemonSettings: V0125_pokemon_electabuzz_normaldatapokemonsettings;
  templateId: string;
}
export interface V0125_pokemon_electabuzz_normalEntry {
  templateId: "V0125_POKEMON_ELECTABUZZ_NORMAL";
  data: V0125_pokemon_electabuzz_normaldata;
}
export interface V0126_pokemon_magmarEntry {
  templateId: "V0126_POKEMON_MAGMAR";
  data: V0125_pokemon_electabuzzdata;
}
export interface V0126_pokemon_magmar_normalEntry {
  templateId: "V0126_POKEMON_MAGMAR_NORMAL";
  data: V0125_pokemon_electabuzz_normaldata;
}
export interface V0127_pokemon_pinsirdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0127_pokemon_pinsirdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0127_pokemon_pinsirdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0127_pokemon_pinsirdata {
  pokemonSettings: V0127_pokemon_pinsirdatapokemonsettings;
  templateId: string;
}
export interface V0127_pokemon_pinsirEntry {
  templateId: "V0127_POKEMON_PINSIR";
  data: V0127_pokemon_pinsirdata;
}
export interface V0127_pokemon_pinsir_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0127_pokemon_pinsirdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0127_pokemon_pinsir_normaldata {
  pokemonSettings: V0127_pokemon_pinsir_normaldatapokemonsettings;
  templateId: string;
}
export interface V0127_pokemon_pinsir_normalEntry {
  templateId: "V0127_POKEMON_PINSIR_NORMAL";
  data: V0127_pokemon_pinsir_normaldata;
}
export interface V0128_pokemon_taurosdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0128_pokemon_taurosdata {
  pokemonSettings: V0128_pokemon_taurosdatapokemonsettings;
  templateId: string;
}
export interface V0128_pokemon_taurosEntry {
  templateId: "V0128_POKEMON_TAUROS";
  data: V0128_pokemon_taurosdata;
}
export interface V0128_pokemon_tauros_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0128_pokemon_tauros_normaldata {
  pokemonSettings: V0128_pokemon_tauros_normaldatapokemonsettings;
  templateId: string;
}
export interface V0128_pokemon_tauros_normalEntry {
  templateId: "V0128_POKEMON_TAUROS_NORMAL";
  data: V0128_pokemon_tauros_normaldata;
}
export interface V0128_pokemon_tauros_paldea_aquadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0128_pokemon_tauros_paldea_aquadata {
  pokemonSettings: V0128_pokemon_tauros_paldea_aquadatapokemonsettings;
  templateId: string;
}
export interface V0128_pokemon_tauros_paldea_aquaEntry {
  templateId: "V0128_POKEMON_TAUROS_PALDEA_AQUA";
  data: V0128_pokemon_tauros_paldea_aquadata;
}
export interface V0128_pokemon_tauros_paldea_blazeEntry {
  templateId: "V0128_POKEMON_TAUROS_PALDEA_BLAZE";
  data: V0128_pokemon_tauros_paldea_aquadata;
}
export interface V0128_pokemon_tauros_paldea_combatdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0128_pokemon_tauros_paldea_combatdata {
  pokemonSettings: V0128_pokemon_tauros_paldea_combatdatapokemonsettings;
  templateId: string;
}
export interface V0128_pokemon_tauros_paldea_combatEntry {
  templateId: "V0128_POKEMON_TAUROS_PALDEA_COMBAT";
  data: V0128_pokemon_tauros_paldea_combatdata;
}
export interface V0129_pokemon_magikarpdatapokemonsettingsencounter {
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
export interface V0129_pokemon_magikarpdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0129_pokemon_magikarpdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0129_pokemon_magikarpdata {
  pokemonSettings: V0129_pokemon_magikarpdatapokemonsettings;
  templateId: string;
}
export interface V0129_pokemon_magikarpEntry {
  templateId: "V0129_POKEMON_MAGIKARP";
  data: V0129_pokemon_magikarpdata;
}
export interface V0129_pokemon_magikarp_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0129_pokemon_magikarpdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0129_pokemon_magikarp_normaldata {
  pokemonSettings: V0129_pokemon_magikarp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0129_pokemon_magikarp_normalEntry {
  templateId: "V0129_POKEMON_MAGIKARP_NORMAL";
  data: V0129_pokemon_magikarp_normaldata;
}
export interface V0130_pokemon_gyaradosdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0127_pokemon_pinsirdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0130_pokemon_gyaradosdata {
  pokemonSettings: V0130_pokemon_gyaradosdatapokemonsettings;
  templateId: string;
}
export interface V0130_pokemon_gyaradosEntry {
  templateId: "V0130_POKEMON_GYARADOS";
  data: V0130_pokemon_gyaradosdata;
}
export interface V0130_pokemon_gyarados_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0127_pokemon_pinsirdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0130_pokemon_gyarados_normaldata {
  pokemonSettings: V0130_pokemon_gyarados_normaldatapokemonsettings;
  templateId: string;
}
export interface V0130_pokemon_gyarados_normalEntry {
  templateId: "V0130_POKEMON_GYARADOS_NORMAL";
  data: V0130_pokemon_gyarados_normaldata;
}
export interface V0131_pokemon_laprasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0131_pokemon_laprasdata {
  pokemonSettings: V0131_pokemon_laprasdatapokemonsettings;
  templateId: string;
}
export interface V0131_pokemon_laprasEntry {
  templateId: "V0131_POKEMON_LAPRAS";
  data: V0131_pokemon_laprasdata;
}
export interface V0131_pokemon_lapras_costume_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0131_pokemon_lapras_costume_2020data {
  pokemonSettings: V0131_pokemon_lapras_costume_2020datapokemonsettings;
  templateId: string;
}
export interface V0131_pokemon_lapras_costume_2020Entry {
  templateId: "V0131_POKEMON_LAPRAS_COSTUME_2020";
  data: V0131_pokemon_lapras_costume_2020data;
}
export interface V0131_pokemon_lapras_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0131_pokemon_lapras_normaldata {
  pokemonSettings: V0131_pokemon_lapras_normaldatapokemonsettings;
  templateId: string;
}
export interface V0131_pokemon_lapras_normalEntry {
  templateId: "V0131_POKEMON_LAPRAS_NORMAL";
  data: V0131_pokemon_lapras_normaldata;
}
export interface V0132_pokemon_dittodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0132_pokemon_dittodata {
  pokemonSettings: V0132_pokemon_dittodatapokemonsettings;
  templateId: string;
}
export interface V0132_pokemon_dittoEntry {
  templateId: "V0132_POKEMON_DITTO";
  data: V0132_pokemon_dittodata;
}
export interface V0132_pokemon_ditto_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0132_pokemon_ditto_normaldata {
  pokemonSettings: V0132_pokemon_ditto_normaldatapokemonsettings;
  templateId: string;
}
export interface V0132_pokemon_ditto_normalEntry {
  templateId: "V0132_POKEMON_DITTO_NORMAL";
  data: V0132_pokemon_ditto_normaldata;
}
export interface V0132_pokemon_ditto_spring_2026_aEntry {
  templateId: "V0132_POKEMON_DITTO_SPRING_2026_A";
  data: V0132_pokemon_ditto_normaldata;
}
export interface V0132_pokemon_ditto_spring_2026_bEntry {
  templateId: "V0132_POKEMON_DITTO_SPRING_2026_B";
  data: V0132_pokemon_ditto_normaldata;
}
export interface V0133_pokemon_eeveedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  kmBuddyDistanceRequirement?: number;
  lureItemRequirement?: string;
  mustBeBuddy?: boolean;
  onlyDaytime?: boolean;
  onlyNighttime?: boolean;
  priority?: number;
  questDisplay?: (V0057_pokemon_primeapedatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0133_pokemon_eeveedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0133_pokemon_eeveedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0133_pokemon_eeveedata {
  pokemonSettings: V0133_pokemon_eeveedatapokemonsettings;
  templateId: string;
}
export interface V0133_pokemon_eeveeEntry {
  templateId: "V0133_POKEMON_EEVEE";
  data: V0133_pokemon_eeveedata;
}
export interface V0133_pokemon_eevee_gofest_2024_mtiaradatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0133_pokemon_eevee_gofest_2024_mtiaradata {
  pokemonSettings: V0133_pokemon_eevee_gofest_2024_mtiaradatapokemonsettings;
  templateId: string;
}
export interface V0133_pokemon_eevee_gofest_2024_mtiaraEntry {
  templateId: "V0133_POKEMON_EEVEE_GOFEST_2024_MTIARA";
  data: V0133_pokemon_eevee_gofest_2024_mtiaradata;
}
export interface V0133_pokemon_eevee_gofest_2024_stiaraEntry {
  templateId: "V0133_POKEMON_EEVEE_GOFEST_2024_STIARA";
  data: V0133_pokemon_eevee_gofest_2024_mtiaradata;
}
export interface V0133_pokemon_eevee_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0021_pokemon_spearowdatapokemonsettingsencounter;
  evolutionBranch: (V0133_pokemon_eeveedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0133_pokemon_eevee_normaldata {
  pokemonSettings: V0133_pokemon_eevee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0133_pokemon_eevee_normalEntry {
  templateId: "V0133_POKEMON_EEVEE_NORMAL";
  data: V0133_pokemon_eevee_normaldata;
}
export interface V0134_pokemon_vaporeondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0134_pokemon_vaporeondata {
  pokemonSettings: V0134_pokemon_vaporeondatapokemonsettings;
  templateId: string;
}
export interface V0134_pokemon_vaporeonEntry {
  templateId: "V0134_POKEMON_VAPOREON";
  data: V0134_pokemon_vaporeondata;
}
export interface V0134_pokemon_vaporeon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatPlayerFocusCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0022_pokemon_fearowdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0134_pokemon_vaporeon_normaldata {
  pokemonSettings: V0134_pokemon_vaporeon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0134_pokemon_vaporeon_normalEntry {
  templateId: "V0134_POKEMON_VAPOREON_NORMAL";
  data: V0134_pokemon_vaporeon_normaldata;
}
export interface V0135_pokemon_jolteonEntry {
  templateId: "V0135_POKEMON_JOLTEON";
  data: V0134_pokemon_vaporeondata;
}
export interface V0135_pokemon_jolteon_normalEntry {
  templateId: "V0135_POKEMON_JOLTEON_NORMAL";
  data: V0134_pokemon_vaporeon_normaldata;
}
export interface V0136_pokemon_flareonEntry {
  templateId: "V0136_POKEMON_FLAREON";
  data: V0134_pokemon_vaporeondata;
}
export interface V0136_pokemon_flareon_normalEntry {
  templateId: "V0136_POKEMON_FLAREON_NORMAL";
  data: V0134_pokemon_vaporeon_normaldata;
}
export interface V0137_pokemon_porygondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0137_pokemon_porygondata {
  pokemonSettings: V0137_pokemon_porygondatapokemonsettings;
  templateId: string;
}
export interface V0137_pokemon_porygonEntry {
  templateId: "V0137_POKEMON_PORYGON";
  data: V0137_pokemon_porygondata;
}
export interface V0137_pokemon_porygon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0095_pokemon_onixdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0137_pokemon_porygon_normaldata {
  pokemonSettings: V0137_pokemon_porygon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0137_pokemon_porygon_normalEntry {
  templateId: "V0137_POKEMON_PORYGON_NORMAL";
  data: V0137_pokemon_porygon_normaldata;
}
export interface V0138_pokemon_omanytedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0138_pokemon_omanytedata {
  pokemonSettings: V0138_pokemon_omanytedatapokemonsettings;
  templateId: string;
}
export interface V0138_pokemon_omanyteEntry {
  templateId: "V0138_POKEMON_OMANYTE";
  data: V0138_pokemon_omanytedata;
}
export interface V0138_pokemon_omanyte_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0138_pokemon_omanyte_normaldata {
  pokemonSettings: V0138_pokemon_omanyte_normaldatapokemonsettings;
  templateId: string;
}
export interface V0138_pokemon_omanyte_normalEntry {
  templateId: "V0138_POKEMON_OMANYTE_NORMAL";
  data: V0138_pokemon_omanyte_normaldata;
}
export interface V0139_pokemon_omastarEntry {
  templateId: "V0139_POKEMON_OMASTAR";
  data: V0062_pokemon_poliwrathdata;
}
export interface V0139_pokemon_omastar_normalEntry {
  templateId: "V0139_POKEMON_OMASTAR_NORMAL";
  data: V0062_pokemon_poliwrath_normaldata;
}
export interface V0140_pokemon_kabutoEntry {
  templateId: "V0140_POKEMON_KABUTO";
  data: V0043_pokemon_oddishdata;
}
export interface V0140_pokemon_kabuto_normalEntry {
  templateId: "V0140_POKEMON_KABUTO_NORMAL";
  data: V0019_pokemon_rattata_aloladata;
}
export interface V0141_pokemon_kabutopsEntry {
  templateId: "V0141_POKEMON_KABUTOPS";
  data: V0034_pokemon_nidokingdata;
}
export interface V0141_pokemon_kabutops_normalEntry {
  templateId: "V0141_POKEMON_KABUTOPS_NORMAL";
  data: V0034_pokemon_nidoking_normaldata;
}
export interface V0142_pokemon_aerodactyldatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  raidBossDistanceOffset: number;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0142_pokemon_aerodactyldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0142_pokemon_aerodactyldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0142_pokemon_aerodactyldata {
  pokemonSettings: V0142_pokemon_aerodactyldatapokemonsettings;
  templateId: string;
}
export interface V0142_pokemon_aerodactylEntry {
  templateId: "V0142_POKEMON_AERODACTYL";
  data: V0142_pokemon_aerodactyldata;
}
export interface V0142_pokemon_aerodactyl_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0142_pokemon_aerodactyldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0142_pokemon_aerodactyl_normaldata {
  pokemonSettings: V0142_pokemon_aerodactyl_normaldatapokemonsettings;
  templateId: string;
}
export interface V0142_pokemon_aerodactyl_normalEntry {
  templateId: "V0142_POKEMON_AERODACTYL_NORMAL";
  data: V0142_pokemon_aerodactyl_normaldata;
}
export interface V0142_pokemon_aerodactyl_summer_2023Entry {
  templateId: "V0142_POKEMON_AERODACTYL_SUMMER_2023";
  data: V0142_pokemon_aerodactyl_normaldata;
}
export interface V0143_pokemon_snorlaxdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0143_pokemon_snorlaxdata {
  pokemonSettings: V0143_pokemon_snorlaxdatapokemonsettings;
  templateId: string;
}
export interface V0143_pokemon_snorlaxEntry {
  templateId: "V0143_POKEMON_SNORLAX";
  data: V0143_pokemon_snorlaxdata;
}
export interface V0143_pokemon_snorlax_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteQuickMove: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0143_pokemon_snorlax_normaldata {
  pokemonSettings: V0143_pokemon_snorlax_normaldatapokemonsettings;
  templateId: string;
}
export interface V0143_pokemon_snorlax_normalEntry {
  templateId: "V0143_POKEMON_SNORLAX_NORMAL";
  data: V0143_pokemon_snorlax_normaldata;
}
export interface V0143_pokemon_snorlax_wildarea_2024Entry {
  templateId: "V0143_POKEMON_SNORLAX_WILDAREA_2024";
  data: V0143_pokemon_snorlax_normaldata;
}
export interface V0144_pokemon_articunodatapokemonsettingsencounter {
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
export interface V0144_pokemon_articunodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0144_pokemon_articunodata {
  pokemonSettings: V0144_pokemon_articunodatapokemonsettings;
  templateId: string;
}
export interface V0144_pokemon_articunoEntry {
  templateId: "V0144_POKEMON_ARTICUNO";
  data: V0144_pokemon_articunodata;
}
export interface V0144_pokemon_articuno_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0144_pokemon_articuno_galariandata {
  pokemonSettings: V0144_pokemon_articuno_galariandatapokemonsettings;
  templateId: string;
}
export interface V0144_pokemon_articuno_galarianEntry {
  templateId: "V0144_POKEMON_ARTICUNO_GALARIAN";
  data: V0144_pokemon_articuno_galariandata;
}
export interface V0144_pokemon_articuno_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0144_pokemon_articuno_normaldata {
  pokemonSettings: V0144_pokemon_articuno_normaldatapokemonsettings;
  templateId: string;
}
export interface V0144_pokemon_articuno_normalEntry {
  templateId: "V0144_POKEMON_ARTICUNO_NORMAL";
  data: V0144_pokemon_articuno_normaldata;
}
export interface V0145_pokemon_zapdosdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0145_pokemon_zapdosdata {
  pokemonSettings: V0145_pokemon_zapdosdatapokemonsettings;
  templateId: string;
}
export interface V0145_pokemon_zapdosEntry {
  templateId: "V0145_POKEMON_ZAPDOS";
  data: V0145_pokemon_zapdosdata;
}
export interface V0145_pokemon_zapdos_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0145_pokemon_zapdos_galariandata {
  pokemonSettings: V0145_pokemon_zapdos_galariandatapokemonsettings;
  templateId: string;
}
export interface V0145_pokemon_zapdos_galarianEntry {
  templateId: "V0145_POKEMON_ZAPDOS_GALARIAN";
  data: V0145_pokemon_zapdos_galariandata;
}
export interface V0145_pokemon_zapdos_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0145_pokemon_zapdos_normaldata {
  pokemonSettings: V0145_pokemon_zapdos_normaldatapokemonsettings;
  templateId: string;
}
export interface V0145_pokemon_zapdos_normalEntry {
  templateId: "V0145_POKEMON_ZAPDOS_NORMAL";
  data: V0145_pokemon_zapdos_normaldata;
}
export interface V0146_pokemon_moltresEntry {
  templateId: "V0146_POKEMON_MOLTRES";
  data: V0144_pokemon_articunodata;
}
export interface V0146_pokemon_moltres_galarianEntry {
  templateId: "V0146_POKEMON_MOLTRES_GALARIAN";
  data: V0144_pokemon_articuno_galariandata;
}
export interface V0146_pokemon_moltres_normalEntry {
  templateId: "V0146_POKEMON_MOLTRES_NORMAL";
  data: V0144_pokemon_articuno_normaldata;
}
export interface V0147_pokemon_dratinidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0147_pokemon_dratinidata {
  pokemonSettings: V0147_pokemon_dratinidatapokemonsettings;
  templateId: string;
}
export interface V0147_pokemon_dratiniEntry {
  templateId: "V0147_POKEMON_DRATINI";
  data: V0147_pokemon_dratinidata;
}
export interface V0147_pokemon_dratini_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0001_pokemon_bulbasaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0147_pokemon_dratini_normaldata {
  pokemonSettings: V0147_pokemon_dratini_normaldatapokemonsettings;
  templateId: string;
}
export interface V0147_pokemon_dratini_normalEntry {
  templateId: "V0147_POKEMON_DRATINI_NORMAL";
  data: V0147_pokemon_dratini_normaldata;
}
export interface V0148_pokemon_dragonairdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0148_pokemon_dragonairdata {
  pokemonSettings: V0148_pokemon_dragonairdatapokemonsettings;
  templateId: string;
}
export interface V0148_pokemon_dragonairEntry {
  templateId: "V0148_POKEMON_DRAGONAIR";
  data: V0148_pokemon_dragonairdata;
}
export interface V0148_pokemon_dragonair_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0001_pokemon_bulbasaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0148_pokemon_dragonair_normaldata {
  pokemonSettings: V0148_pokemon_dragonair_normaldatapokemonsettings;
  templateId: string;
}
export interface V0148_pokemon_dragonair_normalEntry {
  templateId: "V0148_POKEMON_DRAGONAIR_NORMAL";
  data: V0148_pokemon_dragonair_normaldata;
}
export interface V0149_pokemon_dragonitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0015_pokemon_beedrilldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0149_pokemon_dragonitedata {
  pokemonSettings: V0149_pokemon_dragonitedatapokemonsettings;
  templateId: string;
}
export interface V0149_pokemon_dragoniteEntry {
  templateId: "V0149_POKEMON_DRAGONITE";
  data: V0149_pokemon_dragonitedata;
}
export interface V0149_pokemon_dragonite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0002_pokemon_ivysaurdatapokemonsettingsencounter;
  evolutionBranch: (V0003_pokemon_venusaurdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  tempEvoOverrides: (V0015_pokemon_beedrilldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0149_pokemon_dragonite_normaldata {
  pokemonSettings: V0149_pokemon_dragonite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0149_pokemon_dragonite_normalEntry {
  templateId: "V0149_POKEMON_DRAGONITE_NORMAL";
  data: V0149_pokemon_dragonite_normaldata;
}
export interface V0150_pokemon_mewtwodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0150_pokemon_mewtwodata {
  pokemonSettings: V0150_pokemon_mewtwodatapokemonsettings;
  templateId: string;
}
export interface V0150_pokemon_mewtwoEntry {
  templateId: "V0150_POKEMON_MEWTWO";
  data: V0150_pokemon_mewtwodata;
}
export interface V0150_pokemon_mewtwo_adatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0150_pokemon_mewtwo_adata {
  pokemonSettings: V0150_pokemon_mewtwo_adatapokemonsettings;
  templateId: string;
}
export interface V0150_pokemon_mewtwo_aEntry {
  templateId: "V0150_POKEMON_MEWTWO_A";
  data: V0150_pokemon_mewtwo_adata;
}
export interface V0150_pokemon_mewtwo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0001_pokemon_bulbasaurdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0144_pokemon_articunodatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
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
  shadow: V0001_pokemon_bulbasaurdatapokemonsettingsshadow;
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0150_pokemon_mewtwo_normaldata {
  pokemonSettings: V0150_pokemon_mewtwo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0150_pokemon_mewtwo_normalEntry {
  templateId: "V0150_POKEMON_MEWTWO_NORMAL";
  data: V0150_pokemon_mewtwo_normaldata;
}
export interface V0151_pokemon_mewdatapokemonsettingsencounter {
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
export interface V0151_pokemon_mewdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0151_pokemon_mewdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0151_pokemon_mewdata {
  pokemonSettings: V0151_pokemon_mewdatapokemonsettings;
  templateId: string;
}
export interface V0151_pokemon_mewEntry {
  templateId: "V0151_POKEMON_MEW";
  data: V0151_pokemon_mewdata;
}
export interface V0151_pokemon_mew_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0006_pokemon_charizarddatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0151_pokemon_mewdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0001_pokemon_bulbasaurdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0001_pokemon_bulbasaurdatapokemonsettingsstats;
  thirdMove: V0001_pokemon_bulbasaurdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0151_pokemon_mew_normaldata {
  pokemonSettings: V0151_pokemon_mew_normaldatapokemonsettings;
  templateId: string;
}
export interface V0151_pokemon_mew_normalEntry {
  templateId: "V0151_POKEMON_MEW_NORMAL";
  data: V0151_pokemon_mew_normaldata;
}

export interface PokemonSettingsGen1MasterfileByTemplateId {
  "V0001_POKEMON_BULBASAUR": V0001_pokemon_bulbasaurEntry;
  "V0001_POKEMON_BULBASAUR_FALL_2019": V0001_pokemon_bulbasaur_fall_2019Entry;
  "V0001_POKEMON_BULBASAUR_NORMAL": V0001_pokemon_bulbasaur_normalEntry;
  "V0002_POKEMON_IVYSAUR": V0002_pokemon_ivysaurEntry;
  "V0002_POKEMON_IVYSAUR_NORMAL": V0002_pokemon_ivysaur_normalEntry;
  "V0003_POKEMON_VENUSAUR": V0003_pokemon_venusaurEntry;
  "V0003_POKEMON_VENUSAUR_COPY_2019": V0003_pokemon_venusaur_copy_2019Entry;
  "V0003_POKEMON_VENUSAUR_NORMAL": V0003_pokemon_venusaur_normalEntry;
  "V0004_POKEMON_CHARMANDER": V0004_pokemon_charmanderEntry;
  "V0004_POKEMON_CHARMANDER_FALL_2019": V0004_pokemon_charmander_fall_2019Entry;
  "V0004_POKEMON_CHARMANDER_NORMAL": V0004_pokemon_charmander_normalEntry;
  "V0005_POKEMON_CHARMELEON": V0005_pokemon_charmeleonEntry;
  "V0005_POKEMON_CHARMELEON_NORMAL": V0005_pokemon_charmeleon_normalEntry;
  "V0006_POKEMON_CHARIZARD": V0006_pokemon_charizardEntry;
  "V0006_POKEMON_CHARIZARD_COPY_2019": V0006_pokemon_charizard_copy_2019Entry;
  "V0006_POKEMON_CHARIZARD_NORMAL": V0006_pokemon_charizard_normalEntry;
  "V0007_POKEMON_SQUIRTLE": V0007_pokemon_squirtleEntry;
  "V0007_POKEMON_SQUIRTLE_FALL_2019": V0007_pokemon_squirtle_fall_2019Entry;
  "V0007_POKEMON_SQUIRTLE_NORMAL": V0007_pokemon_squirtle_normalEntry;
  "V0008_POKEMON_WARTORTLE": V0008_pokemon_wartortleEntry;
  "V0008_POKEMON_WARTORTLE_NORMAL": V0008_pokemon_wartortle_normalEntry;
  "V0009_POKEMON_BLASTOISE": V0009_pokemon_blastoiseEntry;
  "V0009_POKEMON_BLASTOISE_COPY_2019": V0009_pokemon_blastoise_copy_2019Entry;
  "V0009_POKEMON_BLASTOISE_NORMAL": V0009_pokemon_blastoise_normalEntry;
  "V0010_POKEMON_CATERPIE": V0010_pokemon_caterpieEntry;
  "V0010_POKEMON_CATERPIE_GOFEST_2026": V0010_pokemon_caterpie_gofest_2026Entry;
  "V0010_POKEMON_CATERPIE_NORMAL": V0010_pokemon_caterpie_normalEntry;
  "V0011_POKEMON_METAPOD": V0011_pokemon_metapodEntry;
  "V0011_POKEMON_METAPOD_NORMAL": V0011_pokemon_metapod_normalEntry;
  "V0012_POKEMON_BUTTERFREE": V0012_pokemon_butterfreeEntry;
  "V0012_POKEMON_BUTTERFREE_NORMAL": V0012_pokemon_butterfree_normalEntry;
  "V0013_POKEMON_WEEDLE": V0013_pokemon_weedleEntry;
  "V0013_POKEMON_WEEDLE_NORMAL": V0013_pokemon_weedle_normalEntry;
  "V0014_POKEMON_KAKUNA": V0014_pokemon_kakunaEntry;
  "V0014_POKEMON_KAKUNA_NORMAL": V0014_pokemon_kakuna_normalEntry;
  "V0015_POKEMON_BEEDRILL": V0015_pokemon_beedrillEntry;
  "V0015_POKEMON_BEEDRILL_NORMAL": V0015_pokemon_beedrill_normalEntry;
  "V0016_POKEMON_PIDGEY": V0016_pokemon_pidgeyEntry;
  "V0016_POKEMON_PIDGEY_NORMAL": V0016_pokemon_pidgey_normalEntry;
  "V0017_POKEMON_PIDGEOTTO": V0017_pokemon_pidgeottoEntry;
  "V0017_POKEMON_PIDGEOTTO_NORMAL": V0017_pokemon_pidgeotto_normalEntry;
  "V0018_POKEMON_PIDGEOT": V0018_pokemon_pidgeotEntry;
  "V0018_POKEMON_PIDGEOT_NORMAL": V0018_pokemon_pidgeot_normalEntry;
  "V0019_POKEMON_RATTATA": V0019_pokemon_rattataEntry;
  "V0019_POKEMON_RATTATA_ALOLA": V0019_pokemon_rattata_alolaEntry;
  "V0019_POKEMON_RATTATA_NORMAL": V0019_pokemon_rattata_normalEntry;
  "V0020_POKEMON_RATICATE": V0020_pokemon_raticateEntry;
  "V0020_POKEMON_RATICATE_ALOLA": V0020_pokemon_raticate_alolaEntry;
  "V0020_POKEMON_RATICATE_NORMAL": V0020_pokemon_raticate_normalEntry;
  "V0021_POKEMON_SPEAROW": V0021_pokemon_spearowEntry;
  "V0021_POKEMON_SPEAROW_NORMAL": V0021_pokemon_spearow_normalEntry;
  "V0022_POKEMON_FEAROW": V0022_pokemon_fearowEntry;
  "V0022_POKEMON_FEAROW_NORMAL": V0022_pokemon_fearow_normalEntry;
  "V0023_POKEMON_EKANS": V0023_pokemon_ekansEntry;
  "V0023_POKEMON_EKANS_NORMAL": V0023_pokemon_ekans_normalEntry;
  "V0024_POKEMON_ARBOK": V0024_pokemon_arbokEntry;
  "V0024_POKEMON_ARBOK_NORMAL": V0024_pokemon_arbok_normalEntry;
  "V0025_POKEMON_PIKACHU": V0025_pokemon_pikachuEntry;
  "V0025_POKEMON_PIKACHU_ADVENTURE_HAT_2020": V0025_pokemon_pikachu_adventure_hat_2020Entry;
  "V0025_POKEMON_PIKACHU_BB_2026": V0025_pokemon_pikachu_bb_2026Entry;
  "V0025_POKEMON_PIKACHU_COPY_2019": V0025_pokemon_pikachu_copy_2019Entry;
  "V0025_POKEMON_PIKACHU_COSTUME_2020": V0025_pokemon_pikachu_costume_2020Entry;
  "V0025_POKEMON_PIKACHU_DIWALI_2024": V0025_pokemon_pikachu_diwali_2024Entry;
  "V0025_POKEMON_PIKACHU_DOCTOR": V0025_pokemon_pikachu_doctorEntry;
  "V0025_POKEMON_PIKACHU_FALL_2019": V0025_pokemon_pikachu_fall_2019Entry;
  "V0025_POKEMON_PIKACHU_FLYING_01": V0025_pokemon_pikachu_flying_01Entry;
  "V0025_POKEMON_PIKACHU_FLYING_02": V0025_pokemon_pikachu_flying_02Entry;
  "V0025_POKEMON_PIKACHU_FLYING_03": V0025_pokemon_pikachu_flying_03Entry;
  "V0025_POKEMON_PIKACHU_FLYING_04": V0025_pokemon_pikachu_flying_04Entry;
  "V0025_POKEMON_PIKACHU_FLYING_5TH_ANNIV": V0025_pokemon_pikachu_flying_5th_annivEntry;
  "V0025_POKEMON_PIKACHU_FLYING_OKINAWA": V0025_pokemon_pikachu_flying_okinawaEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2022": V0025_pokemon_pikachu_gofest_2022Entry;
  "V0025_POKEMON_PIKACHU_GOFEST_2024_MTIARA": V0025_pokemon_pikachu_gofest_2024_mtiaraEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2024_STIARA": V0025_pokemon_pikachu_gofest_2024_stiaraEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_BLUE": V0025_pokemon_pikachu_gofest_2025_goggles_blueEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_RED": V0025_pokemon_pikachu_gofest_2025_goggles_redEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_GOGGLES_YELLOW": V0025_pokemon_pikachu_gofest_2025_goggles_yellowEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_BLUE": V0025_pokemon_pikachu_gofest_2025_monocle_blueEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_RED": V0025_pokemon_pikachu_gofest_2025_monocle_redEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2025_MONOCLE_YELLOW": V0025_pokemon_pikachu_gofest_2025_monocle_yellowEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_BLUE": V0025_pokemon_pikachu_gofest_2026_cap_blueEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_RED": V0025_pokemon_pikachu_gofest_2026_cap_redEntry;
  "V0025_POKEMON_PIKACHU_GOFEST_2026_CAP_YELLOW": V0025_pokemon_pikachu_gofest_2026_cap_yellowEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2024_A": V0025_pokemon_pikachu_gotour_2024_aEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2024_A_02": V0025_pokemon_pikachu_gotour_2024_a_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2024_B": V0025_pokemon_pikachu_gotour_2024_bEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2024_B_02": V0025_pokemon_pikachu_gotour_2024_b_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2025_A": V0025_pokemon_pikachu_gotour_2025_aEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2025_A_02": V0025_pokemon_pikachu_gotour_2025_a_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2025_B": V0025_pokemon_pikachu_gotour_2025_bEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2025_B_02": V0025_pokemon_pikachu_gotour_2025_b_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_A": V0025_pokemon_pikachu_gotour_2026_aEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_A_02": V0025_pokemon_pikachu_gotour_2026_a_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_B": V0025_pokemon_pikachu_gotour_2026_bEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_B_02": V0025_pokemon_pikachu_gotour_2026_b_02Entry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_C": V0025_pokemon_pikachu_gotour_2026_cEntry;
  "V0025_POKEMON_PIKACHU_GOTOUR_2026_C_02": V0025_pokemon_pikachu_gotour_2026_c_02Entry;
  "V0025_POKEMON_PIKACHU_HORIZONS": V0025_pokemon_pikachu_horizonsEntry;
  "V0025_POKEMON_PIKACHU_JEJU": V0025_pokemon_pikachu_jejuEntry;
  "V0025_POKEMON_PIKACHU_KARIYUSHI": V0025_pokemon_pikachu_kariyushiEntry;
  "V0025_POKEMON_PIKACHU_KURTA": V0025_pokemon_pikachu_kurtaEntry;
  "V0025_POKEMON_PIKACHU_NORMAL": V0025_pokemon_pikachu_normalEntry;
  "V0025_POKEMON_PIKACHU_POP_STAR": V0025_pokemon_pikachu_pop_starEntry;
  "V0025_POKEMON_PIKACHU_ROCK_STAR": V0025_pokemon_pikachu_rock_starEntry;
  "V0025_POKEMON_PIKACHU_SUMMER_2023_A": V0025_pokemon_pikachu_summer_2023_aEntry;
  "V0025_POKEMON_PIKACHU_SUMMER_2023_B": V0025_pokemon_pikachu_summer_2023_bEntry;
  "V0025_POKEMON_PIKACHU_SUMMER_2023_C": V0025_pokemon_pikachu_summer_2023_cEntry;
  "V0025_POKEMON_PIKACHU_SUMMER_2023_D": V0025_pokemon_pikachu_summer_2023_dEntry;
  "V0025_POKEMON_PIKACHU_SUMMER_2023_E": V0025_pokemon_pikachu_summer_2023_eEntry;
  "V0025_POKEMON_PIKACHU_TSHIRT_01": V0025_pokemon_pikachu_tshirt_01Entry;
  "V0025_POKEMON_PIKACHU_TSHIRT_02": V0025_pokemon_pikachu_tshirt_02Entry;
  "V0025_POKEMON_PIKACHU_TSHIRT_03": V0025_pokemon_pikachu_tshirt_03Entry;
  "V0025_POKEMON_PIKACHU_VS_2019": V0025_pokemon_pikachu_vs_2019Entry;
  "V0025_POKEMON_PIKACHU_WCS_2022": V0025_pokemon_pikachu_wcs_2022Entry;
  "V0025_POKEMON_PIKACHU_WCS_2023": V0025_pokemon_pikachu_wcs_2023Entry;
  "V0025_POKEMON_PIKACHU_WCS_2024": V0025_pokemon_pikachu_wcs_2024Entry;
  "V0025_POKEMON_PIKACHU_WCS_2025": V0025_pokemon_pikachu_wcs_2025Entry;
  "V0025_POKEMON_PIKACHU_WINTER_2020": V0025_pokemon_pikachu_winter_2020Entry;
  "V0026_POKEMON_RAICHU": V0026_pokemon_raichuEntry;
  "V0026_POKEMON_RAICHU_ALOLA": V0026_pokemon_raichu_alolaEntry;
  "V0026_POKEMON_RAICHU_NORMAL": V0026_pokemon_raichu_normalEntry;
  "V0027_POKEMON_SANDSHREW": V0027_pokemon_sandshrewEntry;
  "V0027_POKEMON_SANDSHREW_ALOLA": V0027_pokemon_sandshrew_alolaEntry;
  "V0027_POKEMON_SANDSHREW_NORMAL": V0027_pokemon_sandshrew_normalEntry;
  "V0028_POKEMON_SANDSLASH": V0028_pokemon_sandslashEntry;
  "V0028_POKEMON_SANDSLASH_ALOLA": V0028_pokemon_sandslash_alolaEntry;
  "V0028_POKEMON_SANDSLASH_NORMAL": V0028_pokemon_sandslash_normalEntry;
  "V0029_POKEMON_NIDORAN": V0029_pokemon_nidoranEntry;
  "V0029_POKEMON_NIDORAN_NORMAL": V0029_pokemon_nidoran_normalEntry;
  "V0030_POKEMON_NIDORINA": V0030_pokemon_nidorinaEntry;
  "V0030_POKEMON_NIDORINA_NORMAL": V0030_pokemon_nidorina_normalEntry;
  "V0031_POKEMON_NIDOQUEEN": V0031_pokemon_nidoqueenEntry;
  "V0031_POKEMON_NIDOQUEEN_NORMAL": V0031_pokemon_nidoqueen_normalEntry;
  "V0032_POKEMON_NIDORAN": V0032_pokemon_nidoranEntry;
  "V0032_POKEMON_NIDORAN_NORMAL": V0032_pokemon_nidoran_normalEntry;
  "V0033_POKEMON_NIDORINO": V0033_pokemon_nidorinoEntry;
  "V0033_POKEMON_NIDORINO_NORMAL": V0033_pokemon_nidorino_normalEntry;
  "V0034_POKEMON_NIDOKING": V0034_pokemon_nidokingEntry;
  "V0034_POKEMON_NIDOKING_NORMAL": V0034_pokemon_nidoking_normalEntry;
  "V0035_POKEMON_CLEFAIRY": V0035_pokemon_clefairyEntry;
  "V0035_POKEMON_CLEFAIRY_NORMAL": V0035_pokemon_clefairy_normalEntry;
  "V0036_POKEMON_CLEFABLE": V0036_pokemon_clefableEntry;
  "V0036_POKEMON_CLEFABLE_NORMAL": V0036_pokemon_clefable_normalEntry;
  "V0037_POKEMON_VULPIX": V0037_pokemon_vulpixEntry;
  "V0037_POKEMON_VULPIX_ALOLA": V0037_pokemon_vulpix_alolaEntry;
  "V0037_POKEMON_VULPIX_NORMAL": V0037_pokemon_vulpix_normalEntry;
  "V0038_POKEMON_NINETALES": V0038_pokemon_ninetalesEntry;
  "V0038_POKEMON_NINETALES_ALOLA": V0038_pokemon_ninetales_alolaEntry;
  "V0038_POKEMON_NINETALES_NORMAL": V0038_pokemon_ninetales_normalEntry;
  "V0039_POKEMON_JIGGLYPUFF": V0039_pokemon_jigglypuffEntry;
  "V0039_POKEMON_JIGGLYPUFF_NORMAL": V0039_pokemon_jigglypuff_normalEntry;
  "V0040_POKEMON_WIGGLYTUFF": V0040_pokemon_wigglytuffEntry;
  "V0040_POKEMON_WIGGLYTUFF_NORMAL": V0040_pokemon_wigglytuff_normalEntry;
  "V0041_POKEMON_ZUBAT": V0041_pokemon_zubatEntry;
  "V0041_POKEMON_ZUBAT_NORMAL": V0041_pokemon_zubat_normalEntry;
  "V0042_POKEMON_GOLBAT": V0042_pokemon_golbatEntry;
  "V0042_POKEMON_GOLBAT_NORMAL": V0042_pokemon_golbat_normalEntry;
  "V0043_POKEMON_ODDISH": V0043_pokemon_oddishEntry;
  "V0043_POKEMON_ODDISH_NORMAL": V0043_pokemon_oddish_normalEntry;
  "V0044_POKEMON_GLOOM": V0044_pokemon_gloomEntry;
  "V0044_POKEMON_GLOOM_NORMAL": V0044_pokemon_gloom_normalEntry;
  "V0045_POKEMON_VILEPLUME": V0045_pokemon_vileplumeEntry;
  "V0045_POKEMON_VILEPLUME_NORMAL": V0045_pokemon_vileplume_normalEntry;
  "V0046_POKEMON_PARAS": V0046_pokemon_parasEntry;
  "V0046_POKEMON_PARAS_NORMAL": V0046_pokemon_paras_normalEntry;
  "V0047_POKEMON_PARASECT": V0047_pokemon_parasectEntry;
  "V0047_POKEMON_PARASECT_NORMAL": V0047_pokemon_parasect_normalEntry;
  "V0048_POKEMON_VENONAT": V0048_pokemon_venonatEntry;
  "V0048_POKEMON_VENONAT_NORMAL": V0048_pokemon_venonat_normalEntry;
  "V0049_POKEMON_VENOMOTH": V0049_pokemon_venomothEntry;
  "V0049_POKEMON_VENOMOTH_NORMAL": V0049_pokemon_venomoth_normalEntry;
  "V0050_POKEMON_DIGLETT": V0050_pokemon_diglettEntry;
  "V0050_POKEMON_DIGLETT_ALOLA": V0050_pokemon_diglett_alolaEntry;
  "V0050_POKEMON_DIGLETT_NORMAL": V0050_pokemon_diglett_normalEntry;
  "V0051_POKEMON_DUGTRIO": V0051_pokemon_dugtrioEntry;
  "V0051_POKEMON_DUGTRIO_ALOLA": V0051_pokemon_dugtrio_alolaEntry;
  "V0051_POKEMON_DUGTRIO_NORMAL": V0051_pokemon_dugtrio_normalEntry;
  "V0052_POKEMON_MEOWTH": V0052_pokemon_meowthEntry;
  "V0052_POKEMON_MEOWTH_ALOLA": V0052_pokemon_meowth_alolaEntry;
  "V0052_POKEMON_MEOWTH_GALARIAN": V0052_pokemon_meowth_galarianEntry;
  "V0052_POKEMON_MEOWTH_NORMAL": V0052_pokemon_meowth_normalEntry;
  "V0053_POKEMON_PERSIAN": V0053_pokemon_persianEntry;
  "V0053_POKEMON_PERSIAN_ALOLA": V0053_pokemon_persian_alolaEntry;
  "V0053_POKEMON_PERSIAN_NORMAL": V0053_pokemon_persian_normalEntry;
  "V0054_POKEMON_PSYDUCK": V0054_pokemon_psyduckEntry;
  "V0054_POKEMON_PSYDUCK_NORMAL": V0054_pokemon_psyduck_normalEntry;
  "V0054_POKEMON_PSYDUCK_SWIM_2025": V0054_pokemon_psyduck_swim_2025Entry;
  "V0055_POKEMON_GOLDUCK": V0055_pokemon_golduckEntry;
  "V0055_POKEMON_GOLDUCK_NORMAL": V0055_pokemon_golduck_normalEntry;
  "V0056_POKEMON_MANKEY": V0056_pokemon_mankeyEntry;
  "V0056_POKEMON_MANKEY_NORMAL": V0056_pokemon_mankey_normalEntry;
  "V0057_POKEMON_PRIMEAPE": V0057_pokemon_primeapeEntry;
  "V0057_POKEMON_PRIMEAPE_NORMAL": V0057_pokemon_primeape_normalEntry;
  "V0058_POKEMON_GROWLITHE": V0058_pokemon_growlitheEntry;
  "V0058_POKEMON_GROWLITHE_HISUIAN": V0058_pokemon_growlithe_hisuianEntry;
  "V0058_POKEMON_GROWLITHE_NORMAL": V0058_pokemon_growlithe_normalEntry;
  "V0059_POKEMON_ARCANINE": V0059_pokemon_arcanineEntry;
  "V0059_POKEMON_ARCANINE_HISUIAN": V0059_pokemon_arcanine_hisuianEntry;
  "V0059_POKEMON_ARCANINE_NORMAL": V0059_pokemon_arcanine_normalEntry;
  "V0060_POKEMON_POLIWAG": V0060_pokemon_poliwagEntry;
  "V0060_POKEMON_POLIWAG_NORMAL": V0060_pokemon_poliwag_normalEntry;
  "V0061_POKEMON_POLIWHIRL": V0061_pokemon_poliwhirlEntry;
  "V0061_POKEMON_POLIWHIRL_NORMAL": V0061_pokemon_poliwhirl_normalEntry;
  "V0062_POKEMON_POLIWRATH": V0062_pokemon_poliwrathEntry;
  "V0062_POKEMON_POLIWRATH_NORMAL": V0062_pokemon_poliwrath_normalEntry;
  "V0063_POKEMON_ABRA": V0063_pokemon_abraEntry;
  "V0063_POKEMON_ABRA_NORMAL": V0063_pokemon_abra_normalEntry;
  "V0064_POKEMON_KADABRA": V0064_pokemon_kadabraEntry;
  "V0064_POKEMON_KADABRA_NORMAL": V0064_pokemon_kadabra_normalEntry;
  "V0065_POKEMON_ALAKAZAM": V0065_pokemon_alakazamEntry;
  "V0065_POKEMON_ALAKAZAM_NORMAL": V0065_pokemon_alakazam_normalEntry;
  "V0066_POKEMON_MACHOP": V0066_pokemon_machopEntry;
  "V0066_POKEMON_MACHOP_NORMAL": V0066_pokemon_machop_normalEntry;
  "V0067_POKEMON_MACHOKE": V0067_pokemon_machokeEntry;
  "V0067_POKEMON_MACHOKE_NORMAL": V0067_pokemon_machoke_normalEntry;
  "V0068_POKEMON_MACHAMP": V0068_pokemon_machampEntry;
  "V0068_POKEMON_MACHAMP_NORMAL": V0068_pokemon_machamp_normalEntry;
  "V0069_POKEMON_BELLSPROUT": V0069_pokemon_bellsproutEntry;
  "V0069_POKEMON_BELLSPROUT_NORMAL": V0069_pokemon_bellsprout_normalEntry;
  "V0070_POKEMON_WEEPINBELL": V0070_pokemon_weepinbellEntry;
  "V0070_POKEMON_WEEPINBELL_NORMAL": V0070_pokemon_weepinbell_normalEntry;
  "V0071_POKEMON_VICTREEBEL": V0071_pokemon_victreebelEntry;
  "V0071_POKEMON_VICTREEBEL_NORMAL": V0071_pokemon_victreebel_normalEntry;
  "V0072_POKEMON_TENTACOOL": V0072_pokemon_tentacoolEntry;
  "V0072_POKEMON_TENTACOOL_NORMAL": V0072_pokemon_tentacool_normalEntry;
  "V0073_POKEMON_TENTACRUEL": V0073_pokemon_tentacruelEntry;
  "V0073_POKEMON_TENTACRUEL_NORMAL": V0073_pokemon_tentacruel_normalEntry;
  "V0074_POKEMON_GEODUDE": V0074_pokemon_geodudeEntry;
  "V0074_POKEMON_GEODUDE_ALOLA": V0074_pokemon_geodude_alolaEntry;
  "V0074_POKEMON_GEODUDE_NORMAL": V0074_pokemon_geodude_normalEntry;
  "V0075_POKEMON_GRAVELER": V0075_pokemon_gravelerEntry;
  "V0075_POKEMON_GRAVELER_ALOLA": V0075_pokemon_graveler_alolaEntry;
  "V0075_POKEMON_GRAVELER_NORMAL": V0075_pokemon_graveler_normalEntry;
  "V0076_POKEMON_GOLEM": V0076_pokemon_golemEntry;
  "V0076_POKEMON_GOLEM_ALOLA": V0076_pokemon_golem_alolaEntry;
  "V0076_POKEMON_GOLEM_NORMAL": V0076_pokemon_golem_normalEntry;
  "V0077_POKEMON_PONYTA": V0077_pokemon_ponytaEntry;
  "V0077_POKEMON_PONYTA_GALARIAN": V0077_pokemon_ponyta_galarianEntry;
  "V0077_POKEMON_PONYTA_NORMAL": V0077_pokemon_ponyta_normalEntry;
  "V0078_POKEMON_RAPIDASH": V0078_pokemon_rapidashEntry;
  "V0078_POKEMON_RAPIDASH_GALARIAN": V0078_pokemon_rapidash_galarianEntry;
  "V0078_POKEMON_RAPIDASH_NORMAL": V0078_pokemon_rapidash_normalEntry;
  "V0079_POKEMON_SLOWPOKE": V0079_pokemon_slowpokeEntry;
  "V0079_POKEMON_SLOWPOKE_2020": V0079_pokemon_slowpoke_2020Entry;
  "V0079_POKEMON_SLOWPOKE_GALARIAN": V0079_pokemon_slowpoke_galarianEntry;
  "V0079_POKEMON_SLOWPOKE_NORMAL": V0079_pokemon_slowpoke_normalEntry;
  "V0080_POKEMON_SLOWBRO": V0080_pokemon_slowbroEntry;
  "V0080_POKEMON_SLOWBRO_2021": V0080_pokemon_slowbro_2021Entry;
  "V0080_POKEMON_SLOWBRO_GALARIAN": V0080_pokemon_slowbro_galarianEntry;
  "V0080_POKEMON_SLOWBRO_NORMAL": V0080_pokemon_slowbro_normalEntry;
  "V0081_POKEMON_MAGNEMITE": V0081_pokemon_magnemiteEntry;
  "V0081_POKEMON_MAGNEMITE_NORMAL": V0081_pokemon_magnemite_normalEntry;
  "V0082_POKEMON_MAGNETON": V0082_pokemon_magnetonEntry;
  "V0082_POKEMON_MAGNETON_NORMAL": V0082_pokemon_magneton_normalEntry;
  "V0083_POKEMON_FARFETCHD": V0083_pokemon_farfetchdEntry;
  "V0083_POKEMON_FARFETCHD_GALARIAN": V0083_pokemon_farfetchd_galarianEntry;
  "V0083_POKEMON_FARFETCHD_NORMAL": V0083_pokemon_farfetchd_normalEntry;
  "V0084_POKEMON_DODUO": V0084_pokemon_doduoEntry;
  "V0084_POKEMON_DODUO_NORMAL": V0084_pokemon_doduo_normalEntry;
  "V0085_POKEMON_DODRIO": V0085_pokemon_dodrioEntry;
  "V0085_POKEMON_DODRIO_NORMAL": V0085_pokemon_dodrio_normalEntry;
  "V0086_POKEMON_SEEL": V0086_pokemon_seelEntry;
  "V0086_POKEMON_SEEL_NORMAL": V0086_pokemon_seel_normalEntry;
  "V0087_POKEMON_DEWGONG": V0087_pokemon_dewgongEntry;
  "V0087_POKEMON_DEWGONG_NORMAL": V0087_pokemon_dewgong_normalEntry;
  "V0088_POKEMON_GRIMER": V0088_pokemon_grimerEntry;
  "V0088_POKEMON_GRIMER_ALOLA": V0088_pokemon_grimer_alolaEntry;
  "V0088_POKEMON_GRIMER_NORMAL": V0088_pokemon_grimer_normalEntry;
  "V0089_POKEMON_MUK": V0089_pokemon_mukEntry;
  "V0089_POKEMON_MUK_ALOLA": V0089_pokemon_muk_alolaEntry;
  "V0089_POKEMON_MUK_NORMAL": V0089_pokemon_muk_normalEntry;
  "V0090_POKEMON_SHELLDER": V0090_pokemon_shellderEntry;
  "V0090_POKEMON_SHELLDER_NORMAL": V0090_pokemon_shellder_normalEntry;
  "V0091_POKEMON_CLOYSTER": V0091_pokemon_cloysterEntry;
  "V0091_POKEMON_CLOYSTER_NORMAL": V0091_pokemon_cloyster_normalEntry;
  "V0092_POKEMON_GASTLY": V0092_pokemon_gastlyEntry;
  "V0092_POKEMON_GASTLY_NORMAL": V0092_pokemon_gastly_normalEntry;
  "V0093_POKEMON_HAUNTER": V0093_pokemon_haunterEntry;
  "V0093_POKEMON_HAUNTER_NORMAL": V0093_pokemon_haunter_normalEntry;
  "V0094_POKEMON_GENGAR": V0094_pokemon_gengarEntry;
  "V0094_POKEMON_GENGAR_COSTUME_2020": V0094_pokemon_gengar_costume_2020Entry;
  "V0094_POKEMON_GENGAR_NORMAL": V0094_pokemon_gengar_normalEntry;
  "V0095_POKEMON_ONIX": V0095_pokemon_onixEntry;
  "V0095_POKEMON_ONIX_NORMAL": V0095_pokemon_onix_normalEntry;
  "V0096_POKEMON_DROWZEE": V0096_pokemon_drowzeeEntry;
  "V0096_POKEMON_DROWZEE_NORMAL": V0096_pokemon_drowzee_normalEntry;
  "V0097_POKEMON_HYPNO": V0097_pokemon_hypnoEntry;
  "V0097_POKEMON_HYPNO_NORMAL": V0097_pokemon_hypno_normalEntry;
  "V0098_POKEMON_KRABBY": V0098_pokemon_krabbyEntry;
  "V0098_POKEMON_KRABBY_NORMAL": V0098_pokemon_krabby_normalEntry;
  "V0099_POKEMON_KINGLER": V0099_pokemon_kinglerEntry;
  "V0099_POKEMON_KINGLER_NORMAL": V0099_pokemon_kingler_normalEntry;
  "V0100_POKEMON_VOLTORB": V0100_pokemon_voltorbEntry;
  "V0100_POKEMON_VOLTORB_HISUIAN": V0100_pokemon_voltorb_hisuianEntry;
  "V0100_POKEMON_VOLTORB_NORMAL": V0100_pokemon_voltorb_normalEntry;
  "V0101_POKEMON_ELECTRODE": V0101_pokemon_electrodeEntry;
  "V0101_POKEMON_ELECTRODE_HISUIAN": V0101_pokemon_electrode_hisuianEntry;
  "V0101_POKEMON_ELECTRODE_NORMAL": V0101_pokemon_electrode_normalEntry;
  "V0102_POKEMON_EXEGGCUTE": V0102_pokemon_exeggcuteEntry;
  "V0102_POKEMON_EXEGGCUTE_NORMAL": V0102_pokemon_exeggcute_normalEntry;
  "V0103_POKEMON_EXEGGUTOR": V0103_pokemon_exeggutorEntry;
  "V0103_POKEMON_EXEGGUTOR_ALOLA": V0103_pokemon_exeggutor_alolaEntry;
  "V0103_POKEMON_EXEGGUTOR_NORMAL": V0103_pokemon_exeggutor_normalEntry;
  "V0104_POKEMON_CUBONE": V0104_pokemon_cuboneEntry;
  "V0104_POKEMON_CUBONE_NORMAL": V0104_pokemon_cubone_normalEntry;
  "V0105_POKEMON_MAROWAK": V0105_pokemon_marowakEntry;
  "V0105_POKEMON_MAROWAK_ALOLA": V0105_pokemon_marowak_alolaEntry;
  "V0105_POKEMON_MAROWAK_NORMAL": V0105_pokemon_marowak_normalEntry;
  "V0106_POKEMON_HITMONLEE": V0106_pokemon_hitmonleeEntry;
  "V0106_POKEMON_HITMONLEE_NORMAL": V0106_pokemon_hitmonlee_normalEntry;
  "V0107_POKEMON_HITMONCHAN": V0107_pokemon_hitmonchanEntry;
  "V0107_POKEMON_HITMONCHAN_NORMAL": V0107_pokemon_hitmonchan_normalEntry;
  "V0108_POKEMON_LICKITUNG": V0108_pokemon_lickitungEntry;
  "V0108_POKEMON_LICKITUNG_NORMAL": V0108_pokemon_lickitung_normalEntry;
  "V0109_POKEMON_KOFFING": V0109_pokemon_koffingEntry;
  "V0109_POKEMON_KOFFING_NORMAL": V0109_pokemon_koffing_normalEntry;
  "V0110_POKEMON_WEEZING": V0110_pokemon_weezingEntry;
  "V0110_POKEMON_WEEZING_GALARIAN": V0110_pokemon_weezing_galarianEntry;
  "V0110_POKEMON_WEEZING_NORMAL": V0110_pokemon_weezing_normalEntry;
  "V0111_POKEMON_RHYHORN": V0111_pokemon_rhyhornEntry;
  "V0111_POKEMON_RHYHORN_NORMAL": V0111_pokemon_rhyhorn_normalEntry;
  "V0112_POKEMON_RHYDON": V0112_pokemon_rhydonEntry;
  "V0112_POKEMON_RHYDON_NORMAL": V0112_pokemon_rhydon_normalEntry;
  "V0113_POKEMON_CHANSEY": V0113_pokemon_chanseyEntry;
  "V0113_POKEMON_CHANSEY_NORMAL": V0113_pokemon_chansey_normalEntry;
  "V0114_POKEMON_TANGELA": V0114_pokemon_tangelaEntry;
  "V0114_POKEMON_TANGELA_NORMAL": V0114_pokemon_tangela_normalEntry;
  "V0115_POKEMON_KANGASKHAN": V0115_pokemon_kangaskhanEntry;
  "V0115_POKEMON_KANGASKHAN_NORMAL": V0115_pokemon_kangaskhan_normalEntry;
  "V0116_POKEMON_HORSEA": V0116_pokemon_horseaEntry;
  "V0116_POKEMON_HORSEA_NORMAL": V0116_pokemon_horsea_normalEntry;
  "V0117_POKEMON_SEADRA": V0117_pokemon_seadraEntry;
  "V0117_POKEMON_SEADRA_NORMAL": V0117_pokemon_seadra_normalEntry;
  "V0118_POKEMON_GOLDEEN": V0118_pokemon_goldeenEntry;
  "V0118_POKEMON_GOLDEEN_NORMAL": V0118_pokemon_goldeen_normalEntry;
  "V0119_POKEMON_SEAKING": V0119_pokemon_seakingEntry;
  "V0119_POKEMON_SEAKING_NORMAL": V0119_pokemon_seaking_normalEntry;
  "V0120_POKEMON_STARYU": V0120_pokemon_staryuEntry;
  "V0120_POKEMON_STARYU_NORMAL": V0120_pokemon_staryu_normalEntry;
  "V0121_POKEMON_STARMIE": V0121_pokemon_starmieEntry;
  "V0121_POKEMON_STARMIE_NORMAL": V0121_pokemon_starmie_normalEntry;
  "V0122_POKEMON_MR_MIME": V0122_pokemon_mr_mimeEntry;
  "V0122_POKEMON_MR_MIME_GALARIAN": V0122_pokemon_mr_mime_galarianEntry;
  "V0122_POKEMON_MR_MIME_NORMAL": V0122_pokemon_mr_mime_normalEntry;
  "V0123_POKEMON_SCYTHER": V0123_pokemon_scytherEntry;
  "V0123_POKEMON_SCYTHER_NORMAL": V0123_pokemon_scyther_normalEntry;
  "V0124_POKEMON_JYNX": V0124_pokemon_jynxEntry;
  "V0124_POKEMON_JYNX_NORMAL": V0124_pokemon_jynx_normalEntry;
  "V0125_POKEMON_ELECTABUZZ": V0125_pokemon_electabuzzEntry;
  "V0125_POKEMON_ELECTABUZZ_NORMAL": V0125_pokemon_electabuzz_normalEntry;
  "V0126_POKEMON_MAGMAR": V0126_pokemon_magmarEntry;
  "V0126_POKEMON_MAGMAR_NORMAL": V0126_pokemon_magmar_normalEntry;
  "V0127_POKEMON_PINSIR": V0127_pokemon_pinsirEntry;
  "V0127_POKEMON_PINSIR_NORMAL": V0127_pokemon_pinsir_normalEntry;
  "V0128_POKEMON_TAUROS": V0128_pokemon_taurosEntry;
  "V0128_POKEMON_TAUROS_NORMAL": V0128_pokemon_tauros_normalEntry;
  "V0128_POKEMON_TAUROS_PALDEA_AQUA": V0128_pokemon_tauros_paldea_aquaEntry;
  "V0128_POKEMON_TAUROS_PALDEA_BLAZE": V0128_pokemon_tauros_paldea_blazeEntry;
  "V0128_POKEMON_TAUROS_PALDEA_COMBAT": V0128_pokemon_tauros_paldea_combatEntry;
  "V0129_POKEMON_MAGIKARP": V0129_pokemon_magikarpEntry;
  "V0129_POKEMON_MAGIKARP_NORMAL": V0129_pokemon_magikarp_normalEntry;
  "V0130_POKEMON_GYARADOS": V0130_pokemon_gyaradosEntry;
  "V0130_POKEMON_GYARADOS_NORMAL": V0130_pokemon_gyarados_normalEntry;
  "V0131_POKEMON_LAPRAS": V0131_pokemon_laprasEntry;
  "V0131_POKEMON_LAPRAS_COSTUME_2020": V0131_pokemon_lapras_costume_2020Entry;
  "V0131_POKEMON_LAPRAS_NORMAL": V0131_pokemon_lapras_normalEntry;
  "V0132_POKEMON_DITTO": V0132_pokemon_dittoEntry;
  "V0132_POKEMON_DITTO_NORMAL": V0132_pokemon_ditto_normalEntry;
  "V0132_POKEMON_DITTO_SPRING_2026_A": V0132_pokemon_ditto_spring_2026_aEntry;
  "V0132_POKEMON_DITTO_SPRING_2026_B": V0132_pokemon_ditto_spring_2026_bEntry;
  "V0133_POKEMON_EEVEE": V0133_pokemon_eeveeEntry;
  "V0133_POKEMON_EEVEE_GOFEST_2024_MTIARA": V0133_pokemon_eevee_gofest_2024_mtiaraEntry;
  "V0133_POKEMON_EEVEE_GOFEST_2024_STIARA": V0133_pokemon_eevee_gofest_2024_stiaraEntry;
  "V0133_POKEMON_EEVEE_NORMAL": V0133_pokemon_eevee_normalEntry;
  "V0134_POKEMON_VAPOREON": V0134_pokemon_vaporeonEntry;
  "V0134_POKEMON_VAPOREON_NORMAL": V0134_pokemon_vaporeon_normalEntry;
  "V0135_POKEMON_JOLTEON": V0135_pokemon_jolteonEntry;
  "V0135_POKEMON_JOLTEON_NORMAL": V0135_pokemon_jolteon_normalEntry;
  "V0136_POKEMON_FLAREON": V0136_pokemon_flareonEntry;
  "V0136_POKEMON_FLAREON_NORMAL": V0136_pokemon_flareon_normalEntry;
  "V0137_POKEMON_PORYGON": V0137_pokemon_porygonEntry;
  "V0137_POKEMON_PORYGON_NORMAL": V0137_pokemon_porygon_normalEntry;
  "V0138_POKEMON_OMANYTE": V0138_pokemon_omanyteEntry;
  "V0138_POKEMON_OMANYTE_NORMAL": V0138_pokemon_omanyte_normalEntry;
  "V0139_POKEMON_OMASTAR": V0139_pokemon_omastarEntry;
  "V0139_POKEMON_OMASTAR_NORMAL": V0139_pokemon_omastar_normalEntry;
  "V0140_POKEMON_KABUTO": V0140_pokemon_kabutoEntry;
  "V0140_POKEMON_KABUTO_NORMAL": V0140_pokemon_kabuto_normalEntry;
  "V0141_POKEMON_KABUTOPS": V0141_pokemon_kabutopsEntry;
  "V0141_POKEMON_KABUTOPS_NORMAL": V0141_pokemon_kabutops_normalEntry;
  "V0142_POKEMON_AERODACTYL": V0142_pokemon_aerodactylEntry;
  "V0142_POKEMON_AERODACTYL_NORMAL": V0142_pokemon_aerodactyl_normalEntry;
  "V0142_POKEMON_AERODACTYL_SUMMER_2023": V0142_pokemon_aerodactyl_summer_2023Entry;
  "V0143_POKEMON_SNORLAX": V0143_pokemon_snorlaxEntry;
  "V0143_POKEMON_SNORLAX_NORMAL": V0143_pokemon_snorlax_normalEntry;
  "V0143_POKEMON_SNORLAX_WILDAREA_2024": V0143_pokemon_snorlax_wildarea_2024Entry;
  "V0144_POKEMON_ARTICUNO": V0144_pokemon_articunoEntry;
  "V0144_POKEMON_ARTICUNO_GALARIAN": V0144_pokemon_articuno_galarianEntry;
  "V0144_POKEMON_ARTICUNO_NORMAL": V0144_pokemon_articuno_normalEntry;
  "V0145_POKEMON_ZAPDOS": V0145_pokemon_zapdosEntry;
  "V0145_POKEMON_ZAPDOS_GALARIAN": V0145_pokemon_zapdos_galarianEntry;
  "V0145_POKEMON_ZAPDOS_NORMAL": V0145_pokemon_zapdos_normalEntry;
  "V0146_POKEMON_MOLTRES": V0146_pokemon_moltresEntry;
  "V0146_POKEMON_MOLTRES_GALARIAN": V0146_pokemon_moltres_galarianEntry;
  "V0146_POKEMON_MOLTRES_NORMAL": V0146_pokemon_moltres_normalEntry;
  "V0147_POKEMON_DRATINI": V0147_pokemon_dratiniEntry;
  "V0147_POKEMON_DRATINI_NORMAL": V0147_pokemon_dratini_normalEntry;
  "V0148_POKEMON_DRAGONAIR": V0148_pokemon_dragonairEntry;
  "V0148_POKEMON_DRAGONAIR_NORMAL": V0148_pokemon_dragonair_normalEntry;
  "V0149_POKEMON_DRAGONITE": V0149_pokemon_dragoniteEntry;
  "V0149_POKEMON_DRAGONITE_NORMAL": V0149_pokemon_dragonite_normalEntry;
  "V0150_POKEMON_MEWTWO": V0150_pokemon_mewtwoEntry;
  "V0150_POKEMON_MEWTWO_A": V0150_pokemon_mewtwo_aEntry;
  "V0150_POKEMON_MEWTWO_NORMAL": V0150_pokemon_mewtwo_normalEntry;
  "V0151_POKEMON_MEW": V0151_pokemon_mewEntry;
  "V0151_POKEMON_MEW_NORMAL": V0151_pokemon_mew_normalEntry;
}

export interface PokemonSettingsGen1ByDexId {
  "0001": V0001_pokemon_bulbasaurEntry | V0001_pokemon_bulbasaur_fall_2019Entry | V0001_pokemon_bulbasaur_normalEntry;
  "0002": V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry;
  "0003": V0003_pokemon_venusaurEntry | V0003_pokemon_venusaur_copy_2019Entry | V0003_pokemon_venusaur_normalEntry;
  "0004": V0004_pokemon_charmanderEntry | V0004_pokemon_charmander_fall_2019Entry | V0004_pokemon_charmander_normalEntry;
  "0005": V0005_pokemon_charmeleonEntry | V0005_pokemon_charmeleon_normalEntry;
  "0006": V0006_pokemon_charizardEntry | V0006_pokemon_charizard_copy_2019Entry | V0006_pokemon_charizard_normalEntry;
  "0007": V0007_pokemon_squirtleEntry | V0007_pokemon_squirtle_fall_2019Entry | V0007_pokemon_squirtle_normalEntry;
  "0008": V0008_pokemon_wartortleEntry | V0008_pokemon_wartortle_normalEntry;
  "0009": V0009_pokemon_blastoiseEntry | V0009_pokemon_blastoise_copy_2019Entry | V0009_pokemon_blastoise_normalEntry;
  "0010": V0010_pokemon_caterpieEntry | V0010_pokemon_caterpie_gofest_2026Entry | V0010_pokemon_caterpie_normalEntry;
  "0011": V0011_pokemon_metapodEntry | V0011_pokemon_metapod_normalEntry;
  "0012": V0012_pokemon_butterfreeEntry | V0012_pokemon_butterfree_normalEntry;
  "0013": V0013_pokemon_weedleEntry | V0013_pokemon_weedle_normalEntry;
  "0014": V0014_pokemon_kakunaEntry | V0014_pokemon_kakuna_normalEntry;
  "0015": V0015_pokemon_beedrillEntry | V0015_pokemon_beedrill_normalEntry;
  "0016": V0016_pokemon_pidgeyEntry | V0016_pokemon_pidgey_normalEntry;
  "0017": V0017_pokemon_pidgeottoEntry | V0017_pokemon_pidgeotto_normalEntry;
  "0018": V0018_pokemon_pidgeotEntry | V0018_pokemon_pidgeot_normalEntry;
  "0019": V0019_pokemon_rattataEntry | V0019_pokemon_rattata_alolaEntry | V0019_pokemon_rattata_normalEntry;
  "0020": V0020_pokemon_raticateEntry | V0020_pokemon_raticate_alolaEntry | V0020_pokemon_raticate_normalEntry;
  "0021": V0021_pokemon_spearowEntry | V0021_pokemon_spearow_normalEntry;
  "0022": V0022_pokemon_fearowEntry | V0022_pokemon_fearow_normalEntry;
  "0023": V0023_pokemon_ekansEntry | V0023_pokemon_ekans_normalEntry;
  "0024": V0024_pokemon_arbokEntry | V0024_pokemon_arbok_normalEntry;
  "0025": V0025_pokemon_pikachuEntry | V0025_pokemon_pikachu_adventure_hat_2020Entry | V0025_pokemon_pikachu_bb_2026Entry | V0025_pokemon_pikachu_copy_2019Entry | V0025_pokemon_pikachu_costume_2020Entry | V0025_pokemon_pikachu_diwali_2024Entry | V0025_pokemon_pikachu_doctorEntry | V0025_pokemon_pikachu_fall_2019Entry | V0025_pokemon_pikachu_flying_01Entry | V0025_pokemon_pikachu_flying_02Entry | V0025_pokemon_pikachu_flying_03Entry | V0025_pokemon_pikachu_flying_04Entry | V0025_pokemon_pikachu_flying_5th_annivEntry | V0025_pokemon_pikachu_flying_okinawaEntry | V0025_pokemon_pikachu_gofest_2022Entry | V0025_pokemon_pikachu_gofest_2024_mtiaraEntry | V0025_pokemon_pikachu_gofest_2024_stiaraEntry | V0025_pokemon_pikachu_gofest_2025_goggles_blueEntry | V0025_pokemon_pikachu_gofest_2025_goggles_redEntry | V0025_pokemon_pikachu_gofest_2025_goggles_yellowEntry | V0025_pokemon_pikachu_gofest_2025_monocle_blueEntry | V0025_pokemon_pikachu_gofest_2025_monocle_redEntry | V0025_pokemon_pikachu_gofest_2025_monocle_yellowEntry | V0025_pokemon_pikachu_gofest_2026_cap_blueEntry | V0025_pokemon_pikachu_gofest_2026_cap_redEntry | V0025_pokemon_pikachu_gofest_2026_cap_yellowEntry | V0025_pokemon_pikachu_gotour_2024_aEntry | V0025_pokemon_pikachu_gotour_2024_a_02Entry | V0025_pokemon_pikachu_gotour_2024_bEntry | V0025_pokemon_pikachu_gotour_2024_b_02Entry | V0025_pokemon_pikachu_gotour_2025_aEntry | V0025_pokemon_pikachu_gotour_2025_a_02Entry | V0025_pokemon_pikachu_gotour_2025_bEntry | V0025_pokemon_pikachu_gotour_2025_b_02Entry | V0025_pokemon_pikachu_gotour_2026_aEntry | V0025_pokemon_pikachu_gotour_2026_a_02Entry | V0025_pokemon_pikachu_gotour_2026_bEntry | V0025_pokemon_pikachu_gotour_2026_b_02Entry | V0025_pokemon_pikachu_gotour_2026_cEntry | V0025_pokemon_pikachu_gotour_2026_c_02Entry | V0025_pokemon_pikachu_horizonsEntry | V0025_pokemon_pikachu_jejuEntry | V0025_pokemon_pikachu_kariyushiEntry | V0025_pokemon_pikachu_kurtaEntry | V0025_pokemon_pikachu_normalEntry | V0025_pokemon_pikachu_pop_starEntry | V0025_pokemon_pikachu_rock_starEntry | V0025_pokemon_pikachu_summer_2023_aEntry | V0025_pokemon_pikachu_summer_2023_bEntry | V0025_pokemon_pikachu_summer_2023_cEntry | V0025_pokemon_pikachu_summer_2023_dEntry | V0025_pokemon_pikachu_summer_2023_eEntry | V0025_pokemon_pikachu_tshirt_01Entry | V0025_pokemon_pikachu_tshirt_02Entry | V0025_pokemon_pikachu_tshirt_03Entry | V0025_pokemon_pikachu_vs_2019Entry | V0025_pokemon_pikachu_wcs_2022Entry | V0025_pokemon_pikachu_wcs_2023Entry | V0025_pokemon_pikachu_wcs_2024Entry | V0025_pokemon_pikachu_wcs_2025Entry | V0025_pokemon_pikachu_winter_2020Entry;
  "0026": V0026_pokemon_raichuEntry | V0026_pokemon_raichu_alolaEntry | V0026_pokemon_raichu_normalEntry;
  "0027": V0027_pokemon_sandshrewEntry | V0027_pokemon_sandshrew_alolaEntry | V0027_pokemon_sandshrew_normalEntry;
  "0028": V0028_pokemon_sandslashEntry | V0028_pokemon_sandslash_alolaEntry | V0028_pokemon_sandslash_normalEntry;
  "0029": V0029_pokemon_nidoranEntry | V0029_pokemon_nidoran_normalEntry;
  "0030": V0030_pokemon_nidorinaEntry | V0030_pokemon_nidorina_normalEntry;
  "0031": V0031_pokemon_nidoqueenEntry | V0031_pokemon_nidoqueen_normalEntry;
  "0032": V0032_pokemon_nidoranEntry | V0032_pokemon_nidoran_normalEntry;
  "0033": V0033_pokemon_nidorinoEntry | V0033_pokemon_nidorino_normalEntry;
  "0034": V0034_pokemon_nidokingEntry | V0034_pokemon_nidoking_normalEntry;
  "0035": V0035_pokemon_clefairyEntry | V0035_pokemon_clefairy_normalEntry;
  "0036": V0036_pokemon_clefableEntry | V0036_pokemon_clefable_normalEntry;
  "0037": V0037_pokemon_vulpixEntry | V0037_pokemon_vulpix_alolaEntry | V0037_pokemon_vulpix_normalEntry;
  "0038": V0038_pokemon_ninetalesEntry | V0038_pokemon_ninetales_alolaEntry | V0038_pokemon_ninetales_normalEntry;
  "0039": V0039_pokemon_jigglypuffEntry | V0039_pokemon_jigglypuff_normalEntry;
  "0040": V0040_pokemon_wigglytuffEntry | V0040_pokemon_wigglytuff_normalEntry;
  "0041": V0041_pokemon_zubatEntry | V0041_pokemon_zubat_normalEntry;
  "0042": V0042_pokemon_golbatEntry | V0042_pokemon_golbat_normalEntry;
  "0043": V0043_pokemon_oddishEntry | V0043_pokemon_oddish_normalEntry;
  "0044": V0044_pokemon_gloomEntry | V0044_pokemon_gloom_normalEntry;
  "0045": V0045_pokemon_vileplumeEntry | V0045_pokemon_vileplume_normalEntry;
  "0046": V0046_pokemon_parasEntry | V0046_pokemon_paras_normalEntry;
  "0047": V0047_pokemon_parasectEntry | V0047_pokemon_parasect_normalEntry;
  "0048": V0048_pokemon_venonatEntry | V0048_pokemon_venonat_normalEntry;
  "0049": V0049_pokemon_venomothEntry | V0049_pokemon_venomoth_normalEntry;
  "0050": V0050_pokemon_diglettEntry | V0050_pokemon_diglett_alolaEntry | V0050_pokemon_diglett_normalEntry;
  "0051": V0051_pokemon_dugtrioEntry | V0051_pokemon_dugtrio_alolaEntry | V0051_pokemon_dugtrio_normalEntry;
  "0052": V0052_pokemon_meowthEntry | V0052_pokemon_meowth_alolaEntry | V0052_pokemon_meowth_galarianEntry | V0052_pokemon_meowth_normalEntry;
  "0053": V0053_pokemon_persianEntry | V0053_pokemon_persian_alolaEntry | V0053_pokemon_persian_normalEntry;
  "0054": V0054_pokemon_psyduckEntry | V0054_pokemon_psyduck_normalEntry | V0054_pokemon_psyduck_swim_2025Entry;
  "0055": V0055_pokemon_golduckEntry | V0055_pokemon_golduck_normalEntry;
  "0056": V0056_pokemon_mankeyEntry | V0056_pokemon_mankey_normalEntry;
  "0057": V0057_pokemon_primeapeEntry | V0057_pokemon_primeape_normalEntry;
  "0058": V0058_pokemon_growlitheEntry | V0058_pokemon_growlithe_hisuianEntry | V0058_pokemon_growlithe_normalEntry;
  "0059": V0059_pokemon_arcanineEntry | V0059_pokemon_arcanine_hisuianEntry | V0059_pokemon_arcanine_normalEntry;
  "0060": V0060_pokemon_poliwagEntry | V0060_pokemon_poliwag_normalEntry;
  "0061": V0061_pokemon_poliwhirlEntry | V0061_pokemon_poliwhirl_normalEntry;
  "0062": V0062_pokemon_poliwrathEntry | V0062_pokemon_poliwrath_normalEntry;
  "0063": V0063_pokemon_abraEntry | V0063_pokemon_abra_normalEntry;
  "0064": V0064_pokemon_kadabraEntry | V0064_pokemon_kadabra_normalEntry;
  "0065": V0065_pokemon_alakazamEntry | V0065_pokemon_alakazam_normalEntry;
  "0066": V0066_pokemon_machopEntry | V0066_pokemon_machop_normalEntry;
  "0067": V0067_pokemon_machokeEntry | V0067_pokemon_machoke_normalEntry;
  "0068": V0068_pokemon_machampEntry | V0068_pokemon_machamp_normalEntry;
  "0069": V0069_pokemon_bellsproutEntry | V0069_pokemon_bellsprout_normalEntry;
  "0070": V0070_pokemon_weepinbellEntry | V0070_pokemon_weepinbell_normalEntry;
  "0071": V0071_pokemon_victreebelEntry | V0071_pokemon_victreebel_normalEntry;
  "0072": V0072_pokemon_tentacoolEntry | V0072_pokemon_tentacool_normalEntry;
  "0073": V0073_pokemon_tentacruelEntry | V0073_pokemon_tentacruel_normalEntry;
  "0074": V0074_pokemon_geodudeEntry | V0074_pokemon_geodude_alolaEntry | V0074_pokemon_geodude_normalEntry;
  "0075": V0075_pokemon_gravelerEntry | V0075_pokemon_graveler_alolaEntry | V0075_pokemon_graveler_normalEntry;
  "0076": V0076_pokemon_golemEntry | V0076_pokemon_golem_alolaEntry | V0076_pokemon_golem_normalEntry;
  "0077": V0077_pokemon_ponytaEntry | V0077_pokemon_ponyta_galarianEntry | V0077_pokemon_ponyta_normalEntry;
  "0078": V0078_pokemon_rapidashEntry | V0078_pokemon_rapidash_galarianEntry | V0078_pokemon_rapidash_normalEntry;
  "0079": V0079_pokemon_slowpokeEntry | V0079_pokemon_slowpoke_2020Entry | V0079_pokemon_slowpoke_galarianEntry | V0079_pokemon_slowpoke_normalEntry;
  "0080": V0080_pokemon_slowbroEntry | V0080_pokemon_slowbro_2021Entry | V0080_pokemon_slowbro_galarianEntry | V0080_pokemon_slowbro_normalEntry;
  "0081": V0081_pokemon_magnemiteEntry | V0081_pokemon_magnemite_normalEntry;
  "0082": V0082_pokemon_magnetonEntry | V0082_pokemon_magneton_normalEntry;
  "0083": V0083_pokemon_farfetchdEntry | V0083_pokemon_farfetchd_galarianEntry | V0083_pokemon_farfetchd_normalEntry;
  "0084": V0084_pokemon_doduoEntry | V0084_pokemon_doduo_normalEntry;
  "0085": V0085_pokemon_dodrioEntry | V0085_pokemon_dodrio_normalEntry;
  "0086": V0086_pokemon_seelEntry | V0086_pokemon_seel_normalEntry;
  "0087": V0087_pokemon_dewgongEntry | V0087_pokemon_dewgong_normalEntry;
  "0088": V0088_pokemon_grimerEntry | V0088_pokemon_grimer_alolaEntry | V0088_pokemon_grimer_normalEntry;
  "0089": V0089_pokemon_mukEntry | V0089_pokemon_muk_alolaEntry | V0089_pokemon_muk_normalEntry;
  "0090": V0090_pokemon_shellderEntry | V0090_pokemon_shellder_normalEntry;
  "0091": V0091_pokemon_cloysterEntry | V0091_pokemon_cloyster_normalEntry;
  "0092": V0092_pokemon_gastlyEntry | V0092_pokemon_gastly_normalEntry;
  "0093": V0093_pokemon_haunterEntry | V0093_pokemon_haunter_normalEntry;
  "0094": V0094_pokemon_gengarEntry | V0094_pokemon_gengar_costume_2020Entry | V0094_pokemon_gengar_normalEntry;
  "0095": V0095_pokemon_onixEntry | V0095_pokemon_onix_normalEntry;
  "0096": V0096_pokemon_drowzeeEntry | V0096_pokemon_drowzee_normalEntry;
  "0097": V0097_pokemon_hypnoEntry | V0097_pokemon_hypno_normalEntry;
  "0098": V0098_pokemon_krabbyEntry | V0098_pokemon_krabby_normalEntry;
  "0099": V0099_pokemon_kinglerEntry | V0099_pokemon_kingler_normalEntry;
  "0100": V0100_pokemon_voltorbEntry | V0100_pokemon_voltorb_hisuianEntry | V0100_pokemon_voltorb_normalEntry;
  "0101": V0101_pokemon_electrodeEntry | V0101_pokemon_electrode_hisuianEntry | V0101_pokemon_electrode_normalEntry;
  "0102": V0102_pokemon_exeggcuteEntry | V0102_pokemon_exeggcute_normalEntry;
  "0103": V0103_pokemon_exeggutorEntry | V0103_pokemon_exeggutor_alolaEntry | V0103_pokemon_exeggutor_normalEntry;
  "0104": V0104_pokemon_cuboneEntry | V0104_pokemon_cubone_normalEntry;
  "0105": V0105_pokemon_marowakEntry | V0105_pokemon_marowak_alolaEntry | V0105_pokemon_marowak_normalEntry;
  "0106": V0106_pokemon_hitmonleeEntry | V0106_pokemon_hitmonlee_normalEntry;
  "0107": V0107_pokemon_hitmonchanEntry | V0107_pokemon_hitmonchan_normalEntry;
  "0108": V0108_pokemon_lickitungEntry | V0108_pokemon_lickitung_normalEntry;
  "0109": V0109_pokemon_koffingEntry | V0109_pokemon_koffing_normalEntry;
  "0110": V0110_pokemon_weezingEntry | V0110_pokemon_weezing_galarianEntry | V0110_pokemon_weezing_normalEntry;
  "0111": V0111_pokemon_rhyhornEntry | V0111_pokemon_rhyhorn_normalEntry;
  "0112": V0112_pokemon_rhydonEntry | V0112_pokemon_rhydon_normalEntry;
  "0113": V0113_pokemon_chanseyEntry | V0113_pokemon_chansey_normalEntry;
  "0114": V0114_pokemon_tangelaEntry | V0114_pokemon_tangela_normalEntry;
  "0115": V0115_pokemon_kangaskhanEntry | V0115_pokemon_kangaskhan_normalEntry;
  "0116": V0116_pokemon_horseaEntry | V0116_pokemon_horsea_normalEntry;
  "0117": V0117_pokemon_seadraEntry | V0117_pokemon_seadra_normalEntry;
  "0118": V0118_pokemon_goldeenEntry | V0118_pokemon_goldeen_normalEntry;
  "0119": V0119_pokemon_seakingEntry | V0119_pokemon_seaking_normalEntry;
  "0120": V0120_pokemon_staryuEntry | V0120_pokemon_staryu_normalEntry;
  "0121": V0121_pokemon_starmieEntry | V0121_pokemon_starmie_normalEntry;
  "0122": V0122_pokemon_mr_mimeEntry | V0122_pokemon_mr_mime_galarianEntry | V0122_pokemon_mr_mime_normalEntry;
  "0123": V0123_pokemon_scytherEntry | V0123_pokemon_scyther_normalEntry;
  "0124": V0124_pokemon_jynxEntry | V0124_pokemon_jynx_normalEntry;
  "0125": V0125_pokemon_electabuzzEntry | V0125_pokemon_electabuzz_normalEntry;
  "0126": V0126_pokemon_magmarEntry | V0126_pokemon_magmar_normalEntry;
  "0127": V0127_pokemon_pinsirEntry | V0127_pokemon_pinsir_normalEntry;
  "0128": V0128_pokemon_taurosEntry | V0128_pokemon_tauros_normalEntry | V0128_pokemon_tauros_paldea_aquaEntry | V0128_pokemon_tauros_paldea_blazeEntry | V0128_pokemon_tauros_paldea_combatEntry;
  "0129": V0129_pokemon_magikarpEntry | V0129_pokemon_magikarp_normalEntry;
  "0130": V0130_pokemon_gyaradosEntry | V0130_pokemon_gyarados_normalEntry;
  "0131": V0131_pokemon_laprasEntry | V0131_pokemon_lapras_costume_2020Entry | V0131_pokemon_lapras_normalEntry;
  "0132": V0132_pokemon_dittoEntry | V0132_pokemon_ditto_normalEntry | V0132_pokemon_ditto_spring_2026_aEntry | V0132_pokemon_ditto_spring_2026_bEntry;
  "0133": V0133_pokemon_eeveeEntry | V0133_pokemon_eevee_gofest_2024_mtiaraEntry | V0133_pokemon_eevee_gofest_2024_stiaraEntry | V0133_pokemon_eevee_normalEntry;
  "0134": V0134_pokemon_vaporeonEntry | V0134_pokemon_vaporeon_normalEntry;
  "0135": V0135_pokemon_jolteonEntry | V0135_pokemon_jolteon_normalEntry;
  "0136": V0136_pokemon_flareonEntry | V0136_pokemon_flareon_normalEntry;
  "0137": V0137_pokemon_porygonEntry | V0137_pokemon_porygon_normalEntry;
  "0138": V0138_pokemon_omanyteEntry | V0138_pokemon_omanyte_normalEntry;
  "0139": V0139_pokemon_omastarEntry | V0139_pokemon_omastar_normalEntry;
  "0140": V0140_pokemon_kabutoEntry | V0140_pokemon_kabuto_normalEntry;
  "0141": V0141_pokemon_kabutopsEntry | V0141_pokemon_kabutops_normalEntry;
  "0142": V0142_pokemon_aerodactylEntry | V0142_pokemon_aerodactyl_normalEntry | V0142_pokemon_aerodactyl_summer_2023Entry;
  "0143": V0143_pokemon_snorlaxEntry | V0143_pokemon_snorlax_normalEntry | V0143_pokemon_snorlax_wildarea_2024Entry;
  "0144": V0144_pokemon_articunoEntry | V0144_pokemon_articuno_galarianEntry | V0144_pokemon_articuno_normalEntry;
  "0145": V0145_pokemon_zapdosEntry | V0145_pokemon_zapdos_galarianEntry | V0145_pokemon_zapdos_normalEntry;
  "0146": V0146_pokemon_moltresEntry | V0146_pokemon_moltres_galarianEntry | V0146_pokemon_moltres_normalEntry;
  "0147": V0147_pokemon_dratiniEntry | V0147_pokemon_dratini_normalEntry;
  "0148": V0148_pokemon_dragonairEntry | V0148_pokemon_dragonair_normalEntry;
  "0149": V0149_pokemon_dragoniteEntry | V0149_pokemon_dragonite_normalEntry;
  "0150": V0150_pokemon_mewtwoEntry | V0150_pokemon_mewtwo_aEntry | V0150_pokemon_mewtwo_normalEntry;
  "0151": V0151_pokemon_mewEntry | V0151_pokemon_mew_normalEntry;
}

export interface PokemonSettingsGen1ByPokemonId {
  "ABRA": V0063_pokemon_abraEntry | V0063_pokemon_abra_normalEntry;
  "AERODACTYL": V0142_pokemon_aerodactylEntry | V0142_pokemon_aerodactyl_normalEntry | V0142_pokemon_aerodactyl_summer_2023Entry;
  "ALAKAZAM": V0065_pokemon_alakazamEntry | V0065_pokemon_alakazam_normalEntry;
  "ARBOK": V0024_pokemon_arbokEntry | V0024_pokemon_arbok_normalEntry;
  "ARCANINE": V0059_pokemon_arcanineEntry | V0059_pokemon_arcanine_hisuianEntry | V0059_pokemon_arcanine_normalEntry;
  "ARTICUNO": V0144_pokemon_articunoEntry | V0144_pokemon_articuno_galarianEntry | V0144_pokemon_articuno_normalEntry;
  "BEEDRILL": V0015_pokemon_beedrillEntry | V0015_pokemon_beedrill_normalEntry;
  "BELLSPROUT": V0069_pokemon_bellsproutEntry | V0069_pokemon_bellsprout_normalEntry;
  "BLASTOISE": V0009_pokemon_blastoiseEntry | V0009_pokemon_blastoise_copy_2019Entry | V0009_pokemon_blastoise_normalEntry;
  "BULBASAUR": V0001_pokemon_bulbasaurEntry | V0001_pokemon_bulbasaur_fall_2019Entry | V0001_pokemon_bulbasaur_normalEntry;
  "BUTTERFREE": V0012_pokemon_butterfreeEntry | V0012_pokemon_butterfree_normalEntry;
  "CATERPIE": V0010_pokemon_caterpieEntry | V0010_pokemon_caterpie_gofest_2026Entry | V0010_pokemon_caterpie_normalEntry;
  "CHANSEY": V0113_pokemon_chanseyEntry | V0113_pokemon_chansey_normalEntry;
  "CHARIZARD": V0006_pokemon_charizardEntry | V0006_pokemon_charizard_copy_2019Entry | V0006_pokemon_charizard_normalEntry;
  "CHARMANDER": V0004_pokemon_charmanderEntry | V0004_pokemon_charmander_fall_2019Entry | V0004_pokemon_charmander_normalEntry;
  "CHARMELEON": V0005_pokemon_charmeleonEntry | V0005_pokemon_charmeleon_normalEntry;
  "CLEFABLE": V0036_pokemon_clefableEntry | V0036_pokemon_clefable_normalEntry;
  "CLEFAIRY": V0035_pokemon_clefairyEntry | V0035_pokemon_clefairy_normalEntry;
  "CLOYSTER": V0091_pokemon_cloysterEntry | V0091_pokemon_cloyster_normalEntry;
  "CUBONE": V0104_pokemon_cuboneEntry | V0104_pokemon_cubone_normalEntry;
  "DEWGONG": V0087_pokemon_dewgongEntry | V0087_pokemon_dewgong_normalEntry;
  "DIGLETT": V0050_pokemon_diglettEntry | V0050_pokemon_diglett_alolaEntry | V0050_pokemon_diglett_normalEntry;
  "DITTO": V0132_pokemon_dittoEntry | V0132_pokemon_ditto_normalEntry | V0132_pokemon_ditto_spring_2026_aEntry | V0132_pokemon_ditto_spring_2026_bEntry;
  "DODRIO": V0085_pokemon_dodrioEntry | V0085_pokemon_dodrio_normalEntry;
  "DODUO": V0084_pokemon_doduoEntry | V0084_pokemon_doduo_normalEntry;
  "DRAGONAIR": V0148_pokemon_dragonairEntry | V0148_pokemon_dragonair_normalEntry;
  "DRAGONITE": V0149_pokemon_dragoniteEntry | V0149_pokemon_dragonite_normalEntry;
  "DRATINI": V0147_pokemon_dratiniEntry | V0147_pokemon_dratini_normalEntry;
  "DROWZEE": V0096_pokemon_drowzeeEntry | V0096_pokemon_drowzee_normalEntry;
  "DUGTRIO": V0051_pokemon_dugtrioEntry | V0051_pokemon_dugtrio_alolaEntry | V0051_pokemon_dugtrio_normalEntry;
  "EEVEE": V0133_pokemon_eeveeEntry | V0133_pokemon_eevee_gofest_2024_mtiaraEntry | V0133_pokemon_eevee_gofest_2024_stiaraEntry | V0133_pokemon_eevee_normalEntry;
  "EKANS": V0023_pokemon_ekansEntry | V0023_pokemon_ekans_normalEntry;
  "ELECTABUZZ": V0125_pokemon_electabuzzEntry | V0125_pokemon_electabuzz_normalEntry;
  "ELECTRODE": V0101_pokemon_electrodeEntry | V0101_pokemon_electrode_hisuianEntry | V0101_pokemon_electrode_normalEntry;
  "EXEGGCUTE": V0102_pokemon_exeggcuteEntry | V0102_pokemon_exeggcute_normalEntry;
  "EXEGGUTOR": V0103_pokemon_exeggutorEntry | V0103_pokemon_exeggutor_alolaEntry | V0103_pokemon_exeggutor_normalEntry;
  "FARFETCHD": V0083_pokemon_farfetchdEntry | V0083_pokemon_farfetchd_galarianEntry | V0083_pokemon_farfetchd_normalEntry;
  "FEAROW": V0022_pokemon_fearowEntry | V0022_pokemon_fearow_normalEntry;
  "FLAREON": V0136_pokemon_flareonEntry | V0136_pokemon_flareon_normalEntry;
  "GASTLY": V0092_pokemon_gastlyEntry | V0092_pokemon_gastly_normalEntry;
  "GENGAR": V0094_pokemon_gengarEntry | V0094_pokemon_gengar_costume_2020Entry | V0094_pokemon_gengar_normalEntry;
  "GEODUDE": V0074_pokemon_geodudeEntry | V0074_pokemon_geodude_alolaEntry | V0074_pokemon_geodude_normalEntry;
  "GLOOM": V0044_pokemon_gloomEntry | V0044_pokemon_gloom_normalEntry;
  "GOLBAT": V0042_pokemon_golbatEntry | V0042_pokemon_golbat_normalEntry;
  "GOLDEEN": V0118_pokemon_goldeenEntry | V0118_pokemon_goldeen_normalEntry;
  "GOLDUCK": V0055_pokemon_golduckEntry | V0055_pokemon_golduck_normalEntry;
  "GOLEM": V0076_pokemon_golemEntry | V0076_pokemon_golem_alolaEntry | V0076_pokemon_golem_normalEntry;
  "GRAVELER": V0075_pokemon_gravelerEntry | V0075_pokemon_graveler_alolaEntry | V0075_pokemon_graveler_normalEntry;
  "GRIMER": V0088_pokemon_grimerEntry | V0088_pokemon_grimer_alolaEntry | V0088_pokemon_grimer_normalEntry;
  "GROWLITHE": V0058_pokemon_growlitheEntry | V0058_pokemon_growlithe_hisuianEntry | V0058_pokemon_growlithe_normalEntry;
  "GYARADOS": V0130_pokemon_gyaradosEntry | V0130_pokemon_gyarados_normalEntry;
  "HAUNTER": V0093_pokemon_haunterEntry | V0093_pokemon_haunter_normalEntry;
  "HITMONCHAN": V0107_pokemon_hitmonchanEntry | V0107_pokemon_hitmonchan_normalEntry;
  "HITMONLEE": V0106_pokemon_hitmonleeEntry | V0106_pokemon_hitmonlee_normalEntry;
  "HORSEA": V0116_pokemon_horseaEntry | V0116_pokemon_horsea_normalEntry;
  "HYPNO": V0097_pokemon_hypnoEntry | V0097_pokemon_hypno_normalEntry;
  "IVYSAUR": V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry;
  "JIGGLYPUFF": V0039_pokemon_jigglypuffEntry | V0039_pokemon_jigglypuff_normalEntry;
  "JOLTEON": V0135_pokemon_jolteonEntry | V0135_pokemon_jolteon_normalEntry;
  "JYNX": V0124_pokemon_jynxEntry | V0124_pokemon_jynx_normalEntry;
  "KABUTO": V0140_pokemon_kabutoEntry | V0140_pokemon_kabuto_normalEntry;
  "KABUTOPS": V0141_pokemon_kabutopsEntry | V0141_pokemon_kabutops_normalEntry;
  "KADABRA": V0064_pokemon_kadabraEntry | V0064_pokemon_kadabra_normalEntry;
  "KAKUNA": V0014_pokemon_kakunaEntry | V0014_pokemon_kakuna_normalEntry;
  "KANGASKHAN": V0115_pokemon_kangaskhanEntry | V0115_pokemon_kangaskhan_normalEntry;
  "KINGLER": V0099_pokemon_kinglerEntry | V0099_pokemon_kingler_normalEntry;
  "KOFFING": V0109_pokemon_koffingEntry | V0109_pokemon_koffing_normalEntry;
  "KRABBY": V0098_pokemon_krabbyEntry | V0098_pokemon_krabby_normalEntry;
  "LAPRAS": V0131_pokemon_laprasEntry | V0131_pokemon_lapras_costume_2020Entry | V0131_pokemon_lapras_normalEntry;
  "LICKITUNG": V0108_pokemon_lickitungEntry | V0108_pokemon_lickitung_normalEntry;
  "MACHAMP": V0068_pokemon_machampEntry | V0068_pokemon_machamp_normalEntry;
  "MACHOKE": V0067_pokemon_machokeEntry | V0067_pokemon_machoke_normalEntry;
  "MACHOP": V0066_pokemon_machopEntry | V0066_pokemon_machop_normalEntry;
  "MAGIKARP": V0129_pokemon_magikarpEntry | V0129_pokemon_magikarp_normalEntry;
  "MAGMAR": V0126_pokemon_magmarEntry | V0126_pokemon_magmar_normalEntry;
  "MAGNEMITE": V0081_pokemon_magnemiteEntry | V0081_pokemon_magnemite_normalEntry;
  "MAGNETON": V0082_pokemon_magnetonEntry | V0082_pokemon_magneton_normalEntry;
  "MANKEY": V0056_pokemon_mankeyEntry | V0056_pokemon_mankey_normalEntry;
  "MAROWAK": V0105_pokemon_marowakEntry | V0105_pokemon_marowak_alolaEntry | V0105_pokemon_marowak_normalEntry;
  "MEOWTH": V0052_pokemon_meowthEntry | V0052_pokemon_meowth_alolaEntry | V0052_pokemon_meowth_galarianEntry | V0052_pokemon_meowth_normalEntry;
  "METAPOD": V0011_pokemon_metapodEntry | V0011_pokemon_metapod_normalEntry;
  "MEW": V0151_pokemon_mewEntry | V0151_pokemon_mew_normalEntry;
  "MEWTWO": V0150_pokemon_mewtwoEntry | V0150_pokemon_mewtwo_aEntry | V0150_pokemon_mewtwo_normalEntry;
  "MOLTRES": V0146_pokemon_moltresEntry | V0146_pokemon_moltres_galarianEntry | V0146_pokemon_moltres_normalEntry;
  "MR_MIME": V0122_pokemon_mr_mimeEntry | V0122_pokemon_mr_mime_galarianEntry | V0122_pokemon_mr_mime_normalEntry;
  "MUK": V0089_pokemon_mukEntry | V0089_pokemon_muk_alolaEntry | V0089_pokemon_muk_normalEntry;
  "NIDOKING": V0034_pokemon_nidokingEntry | V0034_pokemon_nidoking_normalEntry;
  "NIDOQUEEN": V0031_pokemon_nidoqueenEntry | V0031_pokemon_nidoqueen_normalEntry;
  "NIDORAN_FEMALE": V0029_pokemon_nidoranEntry | V0029_pokemon_nidoran_normalEntry;
  "NIDORAN_MALE": V0032_pokemon_nidoranEntry | V0032_pokemon_nidoran_normalEntry;
  "NIDORINA": V0030_pokemon_nidorinaEntry | V0030_pokemon_nidorina_normalEntry;
  "NIDORINO": V0033_pokemon_nidorinoEntry | V0033_pokemon_nidorino_normalEntry;
  "NINETALES": V0038_pokemon_ninetalesEntry | V0038_pokemon_ninetales_alolaEntry | V0038_pokemon_ninetales_normalEntry;
  "ODDISH": V0043_pokemon_oddishEntry | V0043_pokemon_oddish_normalEntry;
  "OMANYTE": V0138_pokemon_omanyteEntry | V0138_pokemon_omanyte_normalEntry;
  "OMASTAR": V0139_pokemon_omastarEntry | V0139_pokemon_omastar_normalEntry;
  "ONIX": V0095_pokemon_onixEntry | V0095_pokemon_onix_normalEntry;
  "PARAS": V0046_pokemon_parasEntry | V0046_pokemon_paras_normalEntry;
  "PARASECT": V0047_pokemon_parasectEntry | V0047_pokemon_parasect_normalEntry;
  "PERSIAN": V0053_pokemon_persianEntry | V0053_pokemon_persian_alolaEntry | V0053_pokemon_persian_normalEntry;
  "PIDGEOT": V0018_pokemon_pidgeotEntry | V0018_pokemon_pidgeot_normalEntry;
  "PIDGEOTTO": V0017_pokemon_pidgeottoEntry | V0017_pokemon_pidgeotto_normalEntry;
  "PIDGEY": V0016_pokemon_pidgeyEntry | V0016_pokemon_pidgey_normalEntry;
  "PIKACHU": V0025_pokemon_pikachuEntry | V0025_pokemon_pikachu_adventure_hat_2020Entry | V0025_pokemon_pikachu_bb_2026Entry | V0025_pokemon_pikachu_copy_2019Entry | V0025_pokemon_pikachu_costume_2020Entry | V0025_pokemon_pikachu_diwali_2024Entry | V0025_pokemon_pikachu_doctorEntry | V0025_pokemon_pikachu_fall_2019Entry | V0025_pokemon_pikachu_flying_01Entry | V0025_pokemon_pikachu_flying_02Entry | V0025_pokemon_pikachu_flying_03Entry | V0025_pokemon_pikachu_flying_04Entry | V0025_pokemon_pikachu_flying_5th_annivEntry | V0025_pokemon_pikachu_flying_okinawaEntry | V0025_pokemon_pikachu_gofest_2022Entry | V0025_pokemon_pikachu_gofest_2024_mtiaraEntry | V0025_pokemon_pikachu_gofest_2024_stiaraEntry | V0025_pokemon_pikachu_gofest_2025_goggles_blueEntry | V0025_pokemon_pikachu_gofest_2025_goggles_redEntry | V0025_pokemon_pikachu_gofest_2025_goggles_yellowEntry | V0025_pokemon_pikachu_gofest_2025_monocle_blueEntry | V0025_pokemon_pikachu_gofest_2025_monocle_redEntry | V0025_pokemon_pikachu_gofest_2025_monocle_yellowEntry | V0025_pokemon_pikachu_gofest_2026_cap_blueEntry | V0025_pokemon_pikachu_gofest_2026_cap_redEntry | V0025_pokemon_pikachu_gofest_2026_cap_yellowEntry | V0025_pokemon_pikachu_gotour_2024_aEntry | V0025_pokemon_pikachu_gotour_2024_a_02Entry | V0025_pokemon_pikachu_gotour_2024_bEntry | V0025_pokemon_pikachu_gotour_2024_b_02Entry | V0025_pokemon_pikachu_gotour_2025_aEntry | V0025_pokemon_pikachu_gotour_2025_a_02Entry | V0025_pokemon_pikachu_gotour_2025_bEntry | V0025_pokemon_pikachu_gotour_2025_b_02Entry | V0025_pokemon_pikachu_gotour_2026_aEntry | V0025_pokemon_pikachu_gotour_2026_a_02Entry | V0025_pokemon_pikachu_gotour_2026_bEntry | V0025_pokemon_pikachu_gotour_2026_b_02Entry | V0025_pokemon_pikachu_gotour_2026_cEntry | V0025_pokemon_pikachu_gotour_2026_c_02Entry | V0025_pokemon_pikachu_horizonsEntry | V0025_pokemon_pikachu_jejuEntry | V0025_pokemon_pikachu_kariyushiEntry | V0025_pokemon_pikachu_kurtaEntry | V0025_pokemon_pikachu_normalEntry | V0025_pokemon_pikachu_pop_starEntry | V0025_pokemon_pikachu_rock_starEntry | V0025_pokemon_pikachu_summer_2023_aEntry | V0025_pokemon_pikachu_summer_2023_bEntry | V0025_pokemon_pikachu_summer_2023_cEntry | V0025_pokemon_pikachu_summer_2023_dEntry | V0025_pokemon_pikachu_summer_2023_eEntry | V0025_pokemon_pikachu_tshirt_01Entry | V0025_pokemon_pikachu_tshirt_02Entry | V0025_pokemon_pikachu_tshirt_03Entry | V0025_pokemon_pikachu_vs_2019Entry | V0025_pokemon_pikachu_wcs_2022Entry | V0025_pokemon_pikachu_wcs_2023Entry | V0025_pokemon_pikachu_wcs_2024Entry | V0025_pokemon_pikachu_wcs_2025Entry | V0025_pokemon_pikachu_winter_2020Entry;
  "PINSIR": V0127_pokemon_pinsirEntry | V0127_pokemon_pinsir_normalEntry;
  "POLIWAG": V0060_pokemon_poliwagEntry | V0060_pokemon_poliwag_normalEntry;
  "POLIWHIRL": V0061_pokemon_poliwhirlEntry | V0061_pokemon_poliwhirl_normalEntry;
  "POLIWRATH": V0062_pokemon_poliwrathEntry | V0062_pokemon_poliwrath_normalEntry;
  "PONYTA": V0077_pokemon_ponytaEntry | V0077_pokemon_ponyta_galarianEntry | V0077_pokemon_ponyta_normalEntry;
  "PORYGON": V0137_pokemon_porygonEntry | V0137_pokemon_porygon_normalEntry;
  "PRIMEAPE": V0057_pokemon_primeapeEntry | V0057_pokemon_primeape_normalEntry;
  "PSYDUCK": V0054_pokemon_psyduckEntry | V0054_pokemon_psyduck_normalEntry | V0054_pokemon_psyduck_swim_2025Entry;
  "RAICHU": V0026_pokemon_raichuEntry | V0026_pokemon_raichu_alolaEntry | V0026_pokemon_raichu_normalEntry;
  "RAPIDASH": V0078_pokemon_rapidashEntry | V0078_pokemon_rapidash_galarianEntry | V0078_pokemon_rapidash_normalEntry;
  "RATICATE": V0020_pokemon_raticateEntry | V0020_pokemon_raticate_alolaEntry | V0020_pokemon_raticate_normalEntry;
  "RATTATA": V0019_pokemon_rattataEntry | V0019_pokemon_rattata_alolaEntry | V0019_pokemon_rattata_normalEntry;
  "RHYDON": V0112_pokemon_rhydonEntry | V0112_pokemon_rhydon_normalEntry;
  "RHYHORN": V0111_pokemon_rhyhornEntry | V0111_pokemon_rhyhorn_normalEntry;
  "SANDSHREW": V0027_pokemon_sandshrewEntry | V0027_pokemon_sandshrew_alolaEntry | V0027_pokemon_sandshrew_normalEntry;
  "SANDSLASH": V0028_pokemon_sandslashEntry | V0028_pokemon_sandslash_alolaEntry | V0028_pokemon_sandslash_normalEntry;
  "SCYTHER": V0123_pokemon_scytherEntry | V0123_pokemon_scyther_normalEntry;
  "SEADRA": V0117_pokemon_seadraEntry | V0117_pokemon_seadra_normalEntry;
  "SEAKING": V0119_pokemon_seakingEntry | V0119_pokemon_seaking_normalEntry;
  "SEEL": V0086_pokemon_seelEntry | V0086_pokemon_seel_normalEntry;
  "SHELLDER": V0090_pokemon_shellderEntry | V0090_pokemon_shellder_normalEntry;
  "SLOWBRO": V0080_pokemon_slowbroEntry | V0080_pokemon_slowbro_2021Entry | V0080_pokemon_slowbro_galarianEntry | V0080_pokemon_slowbro_normalEntry;
  "SLOWPOKE": V0079_pokemon_slowpokeEntry | V0079_pokemon_slowpoke_2020Entry | V0079_pokemon_slowpoke_galarianEntry | V0079_pokemon_slowpoke_normalEntry;
  "SNORLAX": V0143_pokemon_snorlaxEntry | V0143_pokemon_snorlax_normalEntry | V0143_pokemon_snorlax_wildarea_2024Entry;
  "SPEAROW": V0021_pokemon_spearowEntry | V0021_pokemon_spearow_normalEntry;
  "SQUIRTLE": V0007_pokemon_squirtleEntry | V0007_pokemon_squirtle_fall_2019Entry | V0007_pokemon_squirtle_normalEntry;
  "STARMIE": V0121_pokemon_starmieEntry | V0121_pokemon_starmie_normalEntry;
  "STARYU": V0120_pokemon_staryuEntry | V0120_pokemon_staryu_normalEntry;
  "TANGELA": V0114_pokemon_tangelaEntry | V0114_pokemon_tangela_normalEntry;
  "TAUROS": V0128_pokemon_taurosEntry | V0128_pokemon_tauros_normalEntry | V0128_pokemon_tauros_paldea_aquaEntry | V0128_pokemon_tauros_paldea_blazeEntry | V0128_pokemon_tauros_paldea_combatEntry;
  "TENTACOOL": V0072_pokemon_tentacoolEntry | V0072_pokemon_tentacool_normalEntry;
  "TENTACRUEL": V0073_pokemon_tentacruelEntry | V0073_pokemon_tentacruel_normalEntry;
  "VAPOREON": V0134_pokemon_vaporeonEntry | V0134_pokemon_vaporeon_normalEntry;
  "VENOMOTH": V0049_pokemon_venomothEntry | V0049_pokemon_venomoth_normalEntry;
  "VENONAT": V0048_pokemon_venonatEntry | V0048_pokemon_venonat_normalEntry;
  "VENUSAUR": V0003_pokemon_venusaurEntry | V0003_pokemon_venusaur_copy_2019Entry | V0003_pokemon_venusaur_normalEntry;
  "VICTREEBEL": V0071_pokemon_victreebelEntry | V0071_pokemon_victreebel_normalEntry;
  "VILEPLUME": V0045_pokemon_vileplumeEntry | V0045_pokemon_vileplume_normalEntry;
  "VOLTORB": V0100_pokemon_voltorbEntry | V0100_pokemon_voltorb_hisuianEntry | V0100_pokemon_voltorb_normalEntry;
  "VULPIX": V0037_pokemon_vulpixEntry | V0037_pokemon_vulpix_alolaEntry | V0037_pokemon_vulpix_normalEntry;
  "WARTORTLE": V0008_pokemon_wartortleEntry | V0008_pokemon_wartortle_normalEntry;
  "WEEDLE": V0013_pokemon_weedleEntry | V0013_pokemon_weedle_normalEntry;
  "WEEPINBELL": V0070_pokemon_weepinbellEntry | V0070_pokemon_weepinbell_normalEntry;
  "WEEZING": V0110_pokemon_weezingEntry | V0110_pokemon_weezing_galarianEntry | V0110_pokemon_weezing_normalEntry;
  "WIGGLYTUFF": V0040_pokemon_wigglytuffEntry | V0040_pokemon_wigglytuff_normalEntry;
  "ZAPDOS": V0145_pokemon_zapdosEntry | V0145_pokemon_zapdos_galarianEntry | V0145_pokemon_zapdos_normalEntry;
  "ZUBAT": V0041_pokemon_zubatEntry | V0041_pokemon_zubat_normalEntry;
}

export type PokemonSettingsGen1MasterfileEntry = V0001_pokemon_bulbasaurEntry | V0001_pokemon_bulbasaur_fall_2019Entry | V0001_pokemon_bulbasaur_normalEntry | V0002_pokemon_ivysaurEntry | V0002_pokemon_ivysaur_normalEntry | V0003_pokemon_venusaurEntry | V0003_pokemon_venusaur_copy_2019Entry | V0003_pokemon_venusaur_normalEntry | V0004_pokemon_charmanderEntry | V0004_pokemon_charmander_fall_2019Entry | V0004_pokemon_charmander_normalEntry | V0005_pokemon_charmeleonEntry | V0005_pokemon_charmeleon_normalEntry | V0006_pokemon_charizardEntry | V0006_pokemon_charizard_copy_2019Entry | V0006_pokemon_charizard_normalEntry | V0007_pokemon_squirtleEntry | V0007_pokemon_squirtle_fall_2019Entry | V0007_pokemon_squirtle_normalEntry | V0008_pokemon_wartortleEntry | V0008_pokemon_wartortle_normalEntry | V0009_pokemon_blastoiseEntry | V0009_pokemon_blastoise_copy_2019Entry | V0009_pokemon_blastoise_normalEntry | V0010_pokemon_caterpieEntry | V0010_pokemon_caterpie_gofest_2026Entry | V0010_pokemon_caterpie_normalEntry | V0011_pokemon_metapodEntry | V0011_pokemon_metapod_normalEntry | V0012_pokemon_butterfreeEntry | V0012_pokemon_butterfree_normalEntry | V0013_pokemon_weedleEntry | V0013_pokemon_weedle_normalEntry | V0014_pokemon_kakunaEntry | V0014_pokemon_kakuna_normalEntry | V0015_pokemon_beedrillEntry | V0015_pokemon_beedrill_normalEntry | V0016_pokemon_pidgeyEntry | V0016_pokemon_pidgey_normalEntry | V0017_pokemon_pidgeottoEntry | V0017_pokemon_pidgeotto_normalEntry | V0018_pokemon_pidgeotEntry | V0018_pokemon_pidgeot_normalEntry | V0019_pokemon_rattataEntry | V0019_pokemon_rattata_alolaEntry | V0019_pokemon_rattata_normalEntry | V0020_pokemon_raticateEntry | V0020_pokemon_raticate_alolaEntry | V0020_pokemon_raticate_normalEntry | V0021_pokemon_spearowEntry | V0021_pokemon_spearow_normalEntry | V0022_pokemon_fearowEntry | V0022_pokemon_fearow_normalEntry | V0023_pokemon_ekansEntry | V0023_pokemon_ekans_normalEntry | V0024_pokemon_arbokEntry | V0024_pokemon_arbok_normalEntry | V0025_pokemon_pikachuEntry | V0025_pokemon_pikachu_adventure_hat_2020Entry | V0025_pokemon_pikachu_bb_2026Entry | V0025_pokemon_pikachu_copy_2019Entry | V0025_pokemon_pikachu_costume_2020Entry | V0025_pokemon_pikachu_diwali_2024Entry | V0025_pokemon_pikachu_doctorEntry | V0025_pokemon_pikachu_fall_2019Entry | V0025_pokemon_pikachu_flying_01Entry | V0025_pokemon_pikachu_flying_02Entry | V0025_pokemon_pikachu_flying_03Entry | V0025_pokemon_pikachu_flying_04Entry | V0025_pokemon_pikachu_flying_5th_annivEntry | V0025_pokemon_pikachu_flying_okinawaEntry | V0025_pokemon_pikachu_gofest_2022Entry | V0025_pokemon_pikachu_gofest_2024_mtiaraEntry | V0025_pokemon_pikachu_gofest_2024_stiaraEntry | V0025_pokemon_pikachu_gofest_2025_goggles_blueEntry | V0025_pokemon_pikachu_gofest_2025_goggles_redEntry | V0025_pokemon_pikachu_gofest_2025_goggles_yellowEntry | V0025_pokemon_pikachu_gofest_2025_monocle_blueEntry | V0025_pokemon_pikachu_gofest_2025_monocle_redEntry | V0025_pokemon_pikachu_gofest_2025_monocle_yellowEntry | V0025_pokemon_pikachu_gofest_2026_cap_blueEntry | V0025_pokemon_pikachu_gofest_2026_cap_redEntry | V0025_pokemon_pikachu_gofest_2026_cap_yellowEntry | V0025_pokemon_pikachu_gotour_2024_aEntry | V0025_pokemon_pikachu_gotour_2024_a_02Entry | V0025_pokemon_pikachu_gotour_2024_bEntry | V0025_pokemon_pikachu_gotour_2024_b_02Entry | V0025_pokemon_pikachu_gotour_2025_aEntry | V0025_pokemon_pikachu_gotour_2025_a_02Entry | V0025_pokemon_pikachu_gotour_2025_bEntry | V0025_pokemon_pikachu_gotour_2025_b_02Entry | V0025_pokemon_pikachu_gotour_2026_aEntry | V0025_pokemon_pikachu_gotour_2026_a_02Entry | V0025_pokemon_pikachu_gotour_2026_bEntry | V0025_pokemon_pikachu_gotour_2026_b_02Entry | V0025_pokemon_pikachu_gotour_2026_cEntry | V0025_pokemon_pikachu_gotour_2026_c_02Entry | V0025_pokemon_pikachu_horizonsEntry | V0025_pokemon_pikachu_jejuEntry | V0025_pokemon_pikachu_kariyushiEntry | V0025_pokemon_pikachu_kurtaEntry | V0025_pokemon_pikachu_normalEntry | V0025_pokemon_pikachu_pop_starEntry | V0025_pokemon_pikachu_rock_starEntry | V0025_pokemon_pikachu_summer_2023_aEntry | V0025_pokemon_pikachu_summer_2023_bEntry | V0025_pokemon_pikachu_summer_2023_cEntry | V0025_pokemon_pikachu_summer_2023_dEntry | V0025_pokemon_pikachu_summer_2023_eEntry | V0025_pokemon_pikachu_tshirt_01Entry | V0025_pokemon_pikachu_tshirt_02Entry | V0025_pokemon_pikachu_tshirt_03Entry | V0025_pokemon_pikachu_vs_2019Entry | V0025_pokemon_pikachu_wcs_2022Entry | V0025_pokemon_pikachu_wcs_2023Entry | V0025_pokemon_pikachu_wcs_2024Entry | V0025_pokemon_pikachu_wcs_2025Entry | V0025_pokemon_pikachu_winter_2020Entry | V0026_pokemon_raichuEntry | V0026_pokemon_raichu_alolaEntry | V0026_pokemon_raichu_normalEntry | V0027_pokemon_sandshrewEntry | V0027_pokemon_sandshrew_alolaEntry | V0027_pokemon_sandshrew_normalEntry | V0028_pokemon_sandslashEntry | V0028_pokemon_sandslash_alolaEntry | V0028_pokemon_sandslash_normalEntry | V0029_pokemon_nidoranEntry | V0029_pokemon_nidoran_normalEntry | V0030_pokemon_nidorinaEntry | V0030_pokemon_nidorina_normalEntry | V0031_pokemon_nidoqueenEntry | V0031_pokemon_nidoqueen_normalEntry | V0032_pokemon_nidoranEntry | V0032_pokemon_nidoran_normalEntry | V0033_pokemon_nidorinoEntry | V0033_pokemon_nidorino_normalEntry | V0034_pokemon_nidokingEntry | V0034_pokemon_nidoking_normalEntry | V0035_pokemon_clefairyEntry | V0035_pokemon_clefairy_normalEntry | V0036_pokemon_clefableEntry | V0036_pokemon_clefable_normalEntry | V0037_pokemon_vulpixEntry | V0037_pokemon_vulpix_alolaEntry | V0037_pokemon_vulpix_normalEntry | V0038_pokemon_ninetalesEntry | V0038_pokemon_ninetales_alolaEntry | V0038_pokemon_ninetales_normalEntry | V0039_pokemon_jigglypuffEntry | V0039_pokemon_jigglypuff_normalEntry | V0040_pokemon_wigglytuffEntry | V0040_pokemon_wigglytuff_normalEntry | V0041_pokemon_zubatEntry | V0041_pokemon_zubat_normalEntry | V0042_pokemon_golbatEntry | V0042_pokemon_golbat_normalEntry | V0043_pokemon_oddishEntry | V0043_pokemon_oddish_normalEntry | V0044_pokemon_gloomEntry | V0044_pokemon_gloom_normalEntry | V0045_pokemon_vileplumeEntry | V0045_pokemon_vileplume_normalEntry | V0046_pokemon_parasEntry | V0046_pokemon_paras_normalEntry | V0047_pokemon_parasectEntry | V0047_pokemon_parasect_normalEntry | V0048_pokemon_venonatEntry | V0048_pokemon_venonat_normalEntry | V0049_pokemon_venomothEntry | V0049_pokemon_venomoth_normalEntry | V0050_pokemon_diglettEntry | V0050_pokemon_diglett_alolaEntry | V0050_pokemon_diglett_normalEntry | V0051_pokemon_dugtrioEntry | V0051_pokemon_dugtrio_alolaEntry | V0051_pokemon_dugtrio_normalEntry | V0052_pokemon_meowthEntry | V0052_pokemon_meowth_alolaEntry | V0052_pokemon_meowth_galarianEntry | V0052_pokemon_meowth_normalEntry | V0053_pokemon_persianEntry | V0053_pokemon_persian_alolaEntry | V0053_pokemon_persian_normalEntry | V0054_pokemon_psyduckEntry | V0054_pokemon_psyduck_normalEntry | V0054_pokemon_psyduck_swim_2025Entry | V0055_pokemon_golduckEntry | V0055_pokemon_golduck_normalEntry | V0056_pokemon_mankeyEntry | V0056_pokemon_mankey_normalEntry | V0057_pokemon_primeapeEntry | V0057_pokemon_primeape_normalEntry | V0058_pokemon_growlitheEntry | V0058_pokemon_growlithe_hisuianEntry | V0058_pokemon_growlithe_normalEntry | V0059_pokemon_arcanineEntry | V0059_pokemon_arcanine_hisuianEntry | V0059_pokemon_arcanine_normalEntry | V0060_pokemon_poliwagEntry | V0060_pokemon_poliwag_normalEntry | V0061_pokemon_poliwhirlEntry | V0061_pokemon_poliwhirl_normalEntry | V0062_pokemon_poliwrathEntry | V0062_pokemon_poliwrath_normalEntry | V0063_pokemon_abraEntry | V0063_pokemon_abra_normalEntry | V0064_pokemon_kadabraEntry | V0064_pokemon_kadabra_normalEntry | V0065_pokemon_alakazamEntry | V0065_pokemon_alakazam_normalEntry | V0066_pokemon_machopEntry | V0066_pokemon_machop_normalEntry | V0067_pokemon_machokeEntry | V0067_pokemon_machoke_normalEntry | V0068_pokemon_machampEntry | V0068_pokemon_machamp_normalEntry | V0069_pokemon_bellsproutEntry | V0069_pokemon_bellsprout_normalEntry | V0070_pokemon_weepinbellEntry | V0070_pokemon_weepinbell_normalEntry | V0071_pokemon_victreebelEntry | V0071_pokemon_victreebel_normalEntry | V0072_pokemon_tentacoolEntry | V0072_pokemon_tentacool_normalEntry | V0073_pokemon_tentacruelEntry | V0073_pokemon_tentacruel_normalEntry | V0074_pokemon_geodudeEntry | V0074_pokemon_geodude_alolaEntry | V0074_pokemon_geodude_normalEntry | V0075_pokemon_gravelerEntry | V0075_pokemon_graveler_alolaEntry | V0075_pokemon_graveler_normalEntry | V0076_pokemon_golemEntry | V0076_pokemon_golem_alolaEntry | V0076_pokemon_golem_normalEntry | V0077_pokemon_ponytaEntry | V0077_pokemon_ponyta_galarianEntry | V0077_pokemon_ponyta_normalEntry | V0078_pokemon_rapidashEntry | V0078_pokemon_rapidash_galarianEntry | V0078_pokemon_rapidash_normalEntry | V0079_pokemon_slowpokeEntry | V0079_pokemon_slowpoke_2020Entry | V0079_pokemon_slowpoke_galarianEntry | V0079_pokemon_slowpoke_normalEntry | V0080_pokemon_slowbroEntry | V0080_pokemon_slowbro_2021Entry | V0080_pokemon_slowbro_galarianEntry | V0080_pokemon_slowbro_normalEntry | V0081_pokemon_magnemiteEntry | V0081_pokemon_magnemite_normalEntry | V0082_pokemon_magnetonEntry | V0082_pokemon_magneton_normalEntry | V0083_pokemon_farfetchdEntry | V0083_pokemon_farfetchd_galarianEntry | V0083_pokemon_farfetchd_normalEntry | V0084_pokemon_doduoEntry | V0084_pokemon_doduo_normalEntry | V0085_pokemon_dodrioEntry | V0085_pokemon_dodrio_normalEntry | V0086_pokemon_seelEntry | V0086_pokemon_seel_normalEntry | V0087_pokemon_dewgongEntry | V0087_pokemon_dewgong_normalEntry | V0088_pokemon_grimerEntry | V0088_pokemon_grimer_alolaEntry | V0088_pokemon_grimer_normalEntry | V0089_pokemon_mukEntry | V0089_pokemon_muk_alolaEntry | V0089_pokemon_muk_normalEntry | V0090_pokemon_shellderEntry | V0090_pokemon_shellder_normalEntry | V0091_pokemon_cloysterEntry | V0091_pokemon_cloyster_normalEntry | V0092_pokemon_gastlyEntry | V0092_pokemon_gastly_normalEntry | V0093_pokemon_haunterEntry | V0093_pokemon_haunter_normalEntry | V0094_pokemon_gengarEntry | V0094_pokemon_gengar_costume_2020Entry | V0094_pokemon_gengar_normalEntry | V0095_pokemon_onixEntry | V0095_pokemon_onix_normalEntry | V0096_pokemon_drowzeeEntry | V0096_pokemon_drowzee_normalEntry | V0097_pokemon_hypnoEntry | V0097_pokemon_hypno_normalEntry | V0098_pokemon_krabbyEntry | V0098_pokemon_krabby_normalEntry | V0099_pokemon_kinglerEntry | V0099_pokemon_kingler_normalEntry | V0100_pokemon_voltorbEntry | V0100_pokemon_voltorb_hisuianEntry | V0100_pokemon_voltorb_normalEntry | V0101_pokemon_electrodeEntry | V0101_pokemon_electrode_hisuianEntry | V0101_pokemon_electrode_normalEntry | V0102_pokemon_exeggcuteEntry | V0102_pokemon_exeggcute_normalEntry | V0103_pokemon_exeggutorEntry | V0103_pokemon_exeggutor_alolaEntry | V0103_pokemon_exeggutor_normalEntry | V0104_pokemon_cuboneEntry | V0104_pokemon_cubone_normalEntry | V0105_pokemon_marowakEntry | V0105_pokemon_marowak_alolaEntry | V0105_pokemon_marowak_normalEntry | V0106_pokemon_hitmonleeEntry | V0106_pokemon_hitmonlee_normalEntry | V0107_pokemon_hitmonchanEntry | V0107_pokemon_hitmonchan_normalEntry | V0108_pokemon_lickitungEntry | V0108_pokemon_lickitung_normalEntry | V0109_pokemon_koffingEntry | V0109_pokemon_koffing_normalEntry | V0110_pokemon_weezingEntry | V0110_pokemon_weezing_galarianEntry | V0110_pokemon_weezing_normalEntry | V0111_pokemon_rhyhornEntry | V0111_pokemon_rhyhorn_normalEntry | V0112_pokemon_rhydonEntry | V0112_pokemon_rhydon_normalEntry | V0113_pokemon_chanseyEntry | V0113_pokemon_chansey_normalEntry | V0114_pokemon_tangelaEntry | V0114_pokemon_tangela_normalEntry | V0115_pokemon_kangaskhanEntry | V0115_pokemon_kangaskhan_normalEntry | V0116_pokemon_horseaEntry | V0116_pokemon_horsea_normalEntry | V0117_pokemon_seadraEntry | V0117_pokemon_seadra_normalEntry | V0118_pokemon_goldeenEntry | V0118_pokemon_goldeen_normalEntry | V0119_pokemon_seakingEntry | V0119_pokemon_seaking_normalEntry | V0120_pokemon_staryuEntry | V0120_pokemon_staryu_normalEntry | V0121_pokemon_starmieEntry | V0121_pokemon_starmie_normalEntry | V0122_pokemon_mr_mimeEntry | V0122_pokemon_mr_mime_galarianEntry | V0122_pokemon_mr_mime_normalEntry | V0123_pokemon_scytherEntry | V0123_pokemon_scyther_normalEntry | V0124_pokemon_jynxEntry | V0124_pokemon_jynx_normalEntry | V0125_pokemon_electabuzzEntry | V0125_pokemon_electabuzz_normalEntry | V0126_pokemon_magmarEntry | V0126_pokemon_magmar_normalEntry | V0127_pokemon_pinsirEntry | V0127_pokemon_pinsir_normalEntry | V0128_pokemon_taurosEntry | V0128_pokemon_tauros_normalEntry | V0128_pokemon_tauros_paldea_aquaEntry | V0128_pokemon_tauros_paldea_blazeEntry | V0128_pokemon_tauros_paldea_combatEntry | V0129_pokemon_magikarpEntry | V0129_pokemon_magikarp_normalEntry | V0130_pokemon_gyaradosEntry | V0130_pokemon_gyarados_normalEntry | V0131_pokemon_laprasEntry | V0131_pokemon_lapras_costume_2020Entry | V0131_pokemon_lapras_normalEntry | V0132_pokemon_dittoEntry | V0132_pokemon_ditto_normalEntry | V0132_pokemon_ditto_spring_2026_aEntry | V0132_pokemon_ditto_spring_2026_bEntry | V0133_pokemon_eeveeEntry | V0133_pokemon_eevee_gofest_2024_mtiaraEntry | V0133_pokemon_eevee_gofest_2024_stiaraEntry | V0133_pokemon_eevee_normalEntry | V0134_pokemon_vaporeonEntry | V0134_pokemon_vaporeon_normalEntry | V0135_pokemon_jolteonEntry | V0135_pokemon_jolteon_normalEntry | V0136_pokemon_flareonEntry | V0136_pokemon_flareon_normalEntry | V0137_pokemon_porygonEntry | V0137_pokemon_porygon_normalEntry | V0138_pokemon_omanyteEntry | V0138_pokemon_omanyte_normalEntry | V0139_pokemon_omastarEntry | V0139_pokemon_omastar_normalEntry | V0140_pokemon_kabutoEntry | V0140_pokemon_kabuto_normalEntry | V0141_pokemon_kabutopsEntry | V0141_pokemon_kabutops_normalEntry | V0142_pokemon_aerodactylEntry | V0142_pokemon_aerodactyl_normalEntry | V0142_pokemon_aerodactyl_summer_2023Entry | V0143_pokemon_snorlaxEntry | V0143_pokemon_snorlax_normalEntry | V0143_pokemon_snorlax_wildarea_2024Entry | V0144_pokemon_articunoEntry | V0144_pokemon_articuno_galarianEntry | V0144_pokemon_articuno_normalEntry | V0145_pokemon_zapdosEntry | V0145_pokemon_zapdos_galarianEntry | V0145_pokemon_zapdos_normalEntry | V0146_pokemon_moltresEntry | V0146_pokemon_moltres_galarianEntry | V0146_pokemon_moltres_normalEntry | V0147_pokemon_dratiniEntry | V0147_pokemon_dratini_normalEntry | V0148_pokemon_dragonairEntry | V0148_pokemon_dragonair_normalEntry | V0149_pokemon_dragoniteEntry | V0149_pokemon_dragonite_normalEntry | V0150_pokemon_mewtwoEntry | V0150_pokemon_mewtwo_aEntry | V0150_pokemon_mewtwo_normalEntry | V0151_pokemon_mewEntry | V0151_pokemon_mew_normalEntry;

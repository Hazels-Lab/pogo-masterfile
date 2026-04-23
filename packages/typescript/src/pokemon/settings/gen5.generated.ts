/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen5
// Filters: all
// Entries emitted: 346

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
export interface V0495_pokemon_snivydatapokemonsettingsencounter {
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
export interface V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0495_pokemon_snivydatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0495_pokemon_snivydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0495_pokemon_snivydata {
  pokemonSettings: V0495_pokemon_snivydatapokemonsettings;
  templateId: string;
}
export interface V0495_pokemon_snivyEntry {
  templateId: "V0495_POKEMON_SNIVY";
  data: V0495_pokemon_snivydata;
}
export interface V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0495_pokemon_snivy_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0495_pokemon_snivy_normaldata {
  pokemonSettings: V0495_pokemon_snivy_normaldatapokemonsettings;
  templateId: string;
}
export interface V0495_pokemon_snivy_normalEntry {
  templateId: "V0495_POKEMON_SNIVY_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0496_pokemon_servinedatapokemonsettingsencounter {
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
export interface V0496_pokemon_servinedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0496_pokemon_servinedata {
  pokemonSettings: V0496_pokemon_servinedatapokemonsettings;
  templateId: string;
}
export interface V0496_pokemon_servineEntry {
  templateId: "V0496_POKEMON_SERVINE";
  data: V0496_pokemon_servinedata;
}
export interface V0496_pokemon_servine_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0496_pokemon_servine_normaldata {
  pokemonSettings: V0496_pokemon_servine_normaldatapokemonsettings;
  templateId: string;
}
export interface V0496_pokemon_servine_normalEntry {
  templateId: "V0496_POKEMON_SERVINE_NORMAL";
  data: V0496_pokemon_servine_normaldata;
}
export interface V0497_pokemon_serperiordatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0497_pokemon_serperiordata {
  pokemonSettings: V0497_pokemon_serperiordatapokemonsettings;
  templateId: string;
}
export interface V0497_pokemon_serperiorEntry {
  templateId: "V0497_POKEMON_SERPERIOR";
  data: V0497_pokemon_serperiordata;
}
export interface V0497_pokemon_serperior_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0497_pokemon_serperior_normaldata {
  pokemonSettings: V0497_pokemon_serperior_normaldatapokemonsettings;
  templateId: string;
}
export interface V0497_pokemon_serperior_normalEntry {
  templateId: "V0497_POKEMON_SERPERIOR_NORMAL";
  data: V0497_pokemon_serperior_normaldata;
}
export interface V0498_pokemon_tepigdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0498_pokemon_tepigdata {
  pokemonSettings: V0498_pokemon_tepigdatapokemonsettings;
  templateId: string;
}
export interface V0498_pokemon_tepigEntry {
  templateId: "V0498_POKEMON_TEPIG";
  data: V0498_pokemon_tepigdata;
}
export interface V0498_pokemon_tepig_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  raidBossDistanceOffset: number;
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0498_pokemon_tepig_normaldata {
  pokemonSettings: V0498_pokemon_tepig_normaldatapokemonsettings;
  templateId: string;
}
export interface V0498_pokemon_tepig_normalEntry {
  templateId: "V0498_POKEMON_TEPIG_NORMAL";
  data: V0498_pokemon_tepig_normaldata;
}
export interface V0499_pokemon_pignitedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0499_pokemon_pignitedata {
  pokemonSettings: V0499_pokemon_pignitedatapokemonsettings;
  templateId: string;
}
export interface V0499_pokemon_pigniteEntry {
  templateId: "V0499_POKEMON_PIGNITE";
  data: V0499_pokemon_pignitedata;
}
export interface V0499_pokemon_pignite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0499_pokemon_pignite_normaldata {
  pokemonSettings: V0499_pokemon_pignite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0499_pokemon_pignite_normalEntry {
  templateId: "V0499_POKEMON_PIGNITE_NORMAL";
  data: V0499_pokemon_pignite_normaldata;
}
export interface V0500_pokemon_emboardatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0500_pokemon_emboardata {
  pokemonSettings: V0500_pokemon_emboardatapokemonsettings;
  templateId: string;
}
export interface V0500_pokemon_emboarEntry {
  templateId: "V0500_POKEMON_EMBOAR";
  data: V0500_pokemon_emboardata;
}
export interface V0500_pokemon_emboar_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0500_pokemon_emboar_normaldata {
  pokemonSettings: V0500_pokemon_emboar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0500_pokemon_emboar_normalEntry {
  templateId: "V0500_POKEMON_EMBOAR_NORMAL";
  data: V0500_pokemon_emboar_normaldata;
}
export interface V0501_pokemon_oshawottEntry {
  templateId: "V0501_POKEMON_OSHAWOTT";
  data: V0495_pokemon_snivydata;
}
export interface V0501_pokemon_oshawott_normalEntry {
  templateId: "V0501_POKEMON_OSHAWOTT_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0502_pokemon_dewottEntry {
  templateId: "V0502_POKEMON_DEWOTT";
  data: V0496_pokemon_servinedata;
}
export interface V0502_pokemon_dewott_normalEntry {
  templateId: "V0502_POKEMON_DEWOTT_NORMAL";
  data: V0496_pokemon_servine_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0504_pokemon_patratEntry {
  templateId: "V0504_POKEMON_PATRAT";
  data: V0495_pokemon_snivydata;
}
export interface V0504_pokemon_patrat_normalEntry {
  templateId: "V0504_POKEMON_PATRAT_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0505_pokemon_watchogdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0505_pokemon_watchogdata {
  pokemonSettings: V0505_pokemon_watchogdatapokemonsettings;
  templateId: string;
}
export interface V0505_pokemon_watchogEntry {
  templateId: "V0505_POKEMON_WATCHOG";
  data: V0505_pokemon_watchogdata;
}
export interface V0505_pokemon_watchog_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0505_pokemon_watchog_normaldata {
  pokemonSettings: V0505_pokemon_watchog_normaldatapokemonsettings;
  templateId: string;
}
export interface V0505_pokemon_watchog_normalEntry {
  templateId: "V0505_POKEMON_WATCHOG_NORMAL";
  data: V0505_pokemon_watchog_normaldata;
}
export interface V0506_pokemon_lillipupdatapokemonsettingsencounter {
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
export interface V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0506_pokemon_lillipupdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0506_pokemon_lillipupdata {
  pokemonSettings: V0506_pokemon_lillipupdatapokemonsettings;
  templateId: string;
}
export interface V0506_pokemon_lillipupEntry {
  templateId: "V0506_POKEMON_LILLIPUP";
  data: V0506_pokemon_lillipupdata;
}
export interface V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0506_pokemon_lillipup_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0506_pokemon_lillipup_normaldata {
  pokemonSettings: V0506_pokemon_lillipup_normaldatapokemonsettings;
  templateId: string;
}
export interface V0506_pokemon_lillipup_normalEntry {
  templateId: "V0506_POKEMON_LILLIPUP_NORMAL";
  data: V0506_pokemon_lillipup_normaldata;
}
export interface V0507_pokemon_herdierdatapokemonsettingsencounter {
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
export interface V0507_pokemon_herdierdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0507_pokemon_herdierdata {
  pokemonSettings: V0507_pokemon_herdierdatapokemonsettings;
  templateId: string;
}
export interface V0507_pokemon_herdierEntry {
  templateId: "V0507_POKEMON_HERDIER";
  data: V0507_pokemon_herdierdata;
}
export interface V0507_pokemon_herdier_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0507_pokemon_herdier_normaldata {
  pokemonSettings: V0507_pokemon_herdier_normaldatapokemonsettings;
  templateId: string;
}
export interface V0507_pokemon_herdier_normalEntry {
  templateId: "V0507_POKEMON_HERDIER_NORMAL";
  data: V0507_pokemon_herdier_normaldata;
}
export interface V0508_pokemon_stoutlanddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0508_pokemon_stoutlanddata {
  pokemonSettings: V0508_pokemon_stoutlanddatapokemonsettings;
  templateId: string;
}
export interface V0508_pokemon_stoutlandEntry {
  templateId: "V0508_POKEMON_STOUTLAND";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0508_pokemon_stoutland_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0508_pokemon_stoutland_normaldata {
  pokemonSettings: V0508_pokemon_stoutland_normaldatapokemonsettings;
  templateId: string;
}
export interface V0508_pokemon_stoutland_normalEntry {
  templateId: "V0508_POKEMON_STOUTLAND_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0509_pokemon_purrloinEntry {
  templateId: "V0509_POKEMON_PURRLOIN";
  data: V0495_pokemon_snivydata;
}
export interface V0509_pokemon_purrloin_normalEntry {
  templateId: "V0509_POKEMON_PURRLOIN_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0510_pokemon_liepardEntry {
  templateId: "V0510_POKEMON_LIEPARD";
  data: V0505_pokemon_watchogdata;
}
export interface V0510_pokemon_liepard_normalEntry {
  templateId: "V0510_POKEMON_LIEPARD_NORMAL";
  data: V0505_pokemon_watchog_normaldata;
}
export interface V0511_pokemon_pansagedatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0511_pokemon_pansagedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansagedatapokemonsettingsevolutionbranchitem)[];
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
export interface V0511_pokemon_pansagedata {
  pokemonSettings: V0511_pokemon_pansagedatapokemonsettings;
  templateId: string;
}
export interface V0511_pokemon_pansageEntry {
  templateId: "V0511_POKEMON_PANSAGE";
  data: V0511_pokemon_pansagedata;
}
export interface V0511_pokemon_pansage_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0511_pokemon_pansage_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansage_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0511_pokemon_pansage_normaldata {
  pokemonSettings: V0511_pokemon_pansage_normaldatapokemonsettings;
  templateId: string;
}
export interface V0511_pokemon_pansage_normalEntry {
  templateId: "V0511_POKEMON_PANSAGE_NORMAL";
  data: V0511_pokemon_pansage_normaldata;
}
export interface V0512_pokemon_simisageEntry {
  templateId: "V0512_POKEMON_SIMISAGE";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0512_pokemon_simisage_normalEntry {
  templateId: "V0512_POKEMON_SIMISAGE_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0513_pokemon_pansearEntry {
  templateId: "V0513_POKEMON_PANSEAR";
  data: V0511_pokemon_pansagedata;
}
export interface V0513_pokemon_pansear_normalEntry {
  templateId: "V0513_POKEMON_PANSEAR_NORMAL";
  data: V0511_pokemon_pansage_normaldata;
}
export interface V0514_pokemon_simisearEntry {
  templateId: "V0514_POKEMON_SIMISEAR";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0514_pokemon_simisear_normalEntry {
  templateId: "V0514_POKEMON_SIMISEAR_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0515_pokemon_panpourEntry {
  templateId: "V0515_POKEMON_PANPOUR";
  data: V0511_pokemon_pansagedata;
}
export interface V0515_pokemon_panpour_normalEntry {
  templateId: "V0515_POKEMON_PANPOUR_NORMAL";
  data: V0511_pokemon_pansage_normaldata;
}
export interface V0516_pokemon_simipourEntry {
  templateId: "V0516_POKEMON_SIMIPOUR";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0516_pokemon_simipour_normalEntry {
  templateId: "V0516_POKEMON_SIMIPOUR_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0517_pokemon_munnadatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansagedatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansage_normaldatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0519_pokemon_pidovedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0519_pokemon_pidovedata {
  pokemonSettings: V0519_pokemon_pidovedatapokemonsettings;
  templateId: string;
}
export interface V0519_pokemon_pidoveEntry {
  templateId: "V0519_POKEMON_PIDOVE";
  data: V0519_pokemon_pidovedata;
}
export interface V0519_pokemon_pidove_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0519_pokemon_pidove_normaldata {
  pokemonSettings: V0519_pokemon_pidove_normaldatapokemonsettings;
  templateId: string;
}
export interface V0519_pokemon_pidove_normalEntry {
  templateId: "V0519_POKEMON_PIDOVE_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0520_pokemon_tranquill_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0520_pokemon_tranquill_normaldata {
  pokemonSettings: V0520_pokemon_tranquill_normaldatapokemonsettings;
  templateId: string;
}
export interface V0520_pokemon_tranquill_normalEntry {
  templateId: "V0520_POKEMON_TRANQUILL_NORMAL";
  data: V0520_pokemon_tranquill_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0522_pokemon_blitzleEntry {
  templateId: "V0522_POKEMON_BLITZLE";
  data: V0495_pokemon_snivydata;
}
export interface V0522_pokemon_blitzle_normalEntry {
  templateId: "V0522_POKEMON_BLITZLE_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0523_pokemon_zebstrikadatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0523_pokemon_zebstrikadata {
  pokemonSettings: V0523_pokemon_zebstrikadatapokemonsettings;
  templateId: string;
}
export interface V0523_pokemon_zebstrikaEntry {
  templateId: "V0523_POKEMON_ZEBSTRIKA";
  data: V0523_pokemon_zebstrikadata;
}
export interface V0523_pokemon_zebstrika_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0523_pokemon_zebstrika_normaldata {
  pokemonSettings: V0523_pokemon_zebstrika_normaldatapokemonsettings;
  templateId: string;
}
export interface V0523_pokemon_zebstrika_normalEntry {
  templateId: "V0523_POKEMON_ZEBSTRIKA_NORMAL";
  data: V0523_pokemon_zebstrika_normaldata;
}
export interface V0524_pokemon_roggenrolaEntry {
  templateId: "V0524_POKEMON_ROGGENROLA";
  data: V0495_pokemon_snivydata;
}
export interface V0524_pokemon_roggenrola_normalEntry {
  templateId: "V0524_POKEMON_ROGGENROLA_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0525_pokemon_boldoredatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  noCandyCostViaTrade: boolean;
}
export interface V0525_pokemon_boldoredatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0525_pokemon_boldoredatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0525_pokemon_boldoredata {
  pokemonSettings: V0525_pokemon_boldoredatapokemonsettings;
  templateId: string;
}
export interface V0525_pokemon_boldoreEntry {
  templateId: "V0525_POKEMON_BOLDORE";
  data: V0525_pokemon_boldoredata;
}
export interface V0525_pokemon_boldore_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  noCandyCostViaTrade: boolean;
}
export interface V0525_pokemon_boldore_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0525_pokemon_boldore_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0525_pokemon_boldore_normaldata {
  pokemonSettings: V0525_pokemon_boldore_normaldatapokemonsettings;
  templateId: string;
}
export interface V0525_pokemon_boldore_normalEntry {
  templateId: "V0525_POKEMON_BOLDORE_NORMAL";
  data: V0525_pokemon_boldore_normaldata;
}
export interface V0526_pokemon_gigalithEntry {
  templateId: "V0526_POKEMON_GIGALITH";
  data: V0497_pokemon_serperiordata;
}
export interface V0526_pokemon_gigalith_normalEntry {
  templateId: "V0526_POKEMON_GIGALITH_NORMAL";
  data: V0497_pokemon_serperior_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0529_pokemon_drilburdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0529_pokemon_drilburdata {
  pokemonSettings: V0529_pokemon_drilburdatapokemonsettings;
  templateId: string;
}
export interface V0529_pokemon_drilburEntry {
  templateId: "V0529_POKEMON_DRILBUR";
  data: V0529_pokemon_drilburdata;
}
export interface V0529_pokemon_drilbur_normalEntry {
  templateId: "V0529_POKEMON_DRILBUR_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0530_pokemon_excadrilldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0530_pokemon_excadrilldata {
  pokemonSettings: V0530_pokemon_excadrilldatapokemonsettings;
  templateId: string;
}
export interface V0530_pokemon_excadrillEntry {
  templateId: "V0530_POKEMON_EXCADRILL";
  data: V0530_pokemon_excadrilldata;
}
export interface V0530_pokemon_excadrill_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0530_pokemon_excadrill_normaldata {
  pokemonSettings: V0530_pokemon_excadrill_normaldatapokemonsettings;
  templateId: string;
}
export interface V0530_pokemon_excadrill_normalEntry {
  templateId: "V0530_POKEMON_EXCADRILL_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
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
export interface V0532_pokemon_timburrEntry {
  templateId: "V0532_POKEMON_TIMBURR";
  data: V0495_pokemon_snivydata;
}
export interface V0532_pokemon_timburr_normalEntry {
  templateId: "V0532_POKEMON_TIMBURR_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0533_pokemon_gurdurrEntry {
  templateId: "V0533_POKEMON_GURDURR";
  data: V0525_pokemon_boldoredata;
}
export interface V0533_pokemon_gurdurr_normalEntry {
  templateId: "V0533_POKEMON_GURDURR_NORMAL";
  data: V0525_pokemon_boldore_normaldata;
}
export interface V0534_pokemon_conkeldurrdatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0534_pokemon_conkeldurrdata {
  pokemonSettings: V0534_pokemon_conkeldurrdatapokemonsettings;
  templateId: string;
}
export interface V0534_pokemon_conkeldurrEntry {
  templateId: "V0534_POKEMON_CONKELDURR";
  data: V0534_pokemon_conkeldurrdata;
}
export interface V0534_pokemon_conkeldurr_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0534_pokemon_conkeldurr_normaldata {
  pokemonSettings: V0534_pokemon_conkeldurr_normaldatapokemonsettings;
  templateId: string;
}
export interface V0534_pokemon_conkeldurr_normalEntry {
  templateId: "V0534_POKEMON_CONKELDURR_NORMAL";
  data: V0534_pokemon_conkeldurr_normaldata;
}
export interface V0535_pokemon_tympoledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0535_pokemon_tympoledata {
  pokemonSettings: V0535_pokemon_tympoledatapokemonsettings;
  templateId: string;
}
export interface V0535_pokemon_tympoleEntry {
  templateId: "V0535_POKEMON_TYMPOLE";
  data: V0535_pokemon_tympoledata;
}
export interface V0535_pokemon_tympole_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0535_pokemon_tympole_normaldata {
  pokemonSettings: V0535_pokemon_tympole_normaldatapokemonsettings;
  templateId: string;
}
export interface V0535_pokemon_tympole_normalEntry {
  templateId: "V0535_POKEMON_TYMPOLE_NORMAL";
  data: V0535_pokemon_tympole_normaldata;
}
export interface V0536_pokemon_palpitoaddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0536_pokemon_palpitoaddata {
  pokemonSettings: V0536_pokemon_palpitoaddatapokemonsettings;
  templateId: string;
}
export interface V0536_pokemon_palpitoadEntry {
  templateId: "V0536_POKEMON_PALPITOAD";
  data: V0536_pokemon_palpitoaddata;
}
export interface V0536_pokemon_palpitoad_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0536_pokemon_palpitoad_normaldata {
  pokemonSettings: V0536_pokemon_palpitoad_normaldatapokemonsettings;
  templateId: string;
}
export interface V0536_pokemon_palpitoad_normalEntry {
  templateId: "V0536_POKEMON_PALPITOAD_NORMAL";
  data: V0536_pokemon_palpitoad_normaldata;
}
export interface V0537_pokemon_seismitoaddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0537_pokemon_seismitoaddata {
  pokemonSettings: V0537_pokemon_seismitoaddatapokemonsettings;
  templateId: string;
}
export interface V0537_pokemon_seismitoadEntry {
  templateId: "V0537_POKEMON_SEISMITOAD";
  data: V0537_pokemon_seismitoaddata;
}
export interface V0537_pokemon_seismitoad_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0537_pokemon_seismitoad_normaldata {
  pokemonSettings: V0537_pokemon_seismitoad_normaldatapokemonsettings;
  templateId: string;
}
export interface V0537_pokemon_seismitoad_normalEntry {
  templateId: "V0537_POKEMON_SEISMITOAD_NORMAL";
  data: V0537_pokemon_seismitoad_normaldata;
}
export interface V0538_pokemon_throhdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0538_pokemon_throhdata {
  pokemonSettings: V0538_pokemon_throhdatapokemonsettings;
  templateId: string;
}
export interface V0538_pokemon_throhEntry {
  templateId: "V0538_POKEMON_THROH";
  data: V0538_pokemon_throhdata;
}
export interface V0538_pokemon_throh_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0538_pokemon_throh_normaldata {
  pokemonSettings: V0538_pokemon_throh_normaldatapokemonsettings;
  templateId: string;
}
export interface V0538_pokemon_throh_normalEntry {
  templateId: "V0538_POKEMON_THROH_NORMAL";
  data: V0538_pokemon_throh_normaldata;
}
export interface V0539_pokemon_sawkEntry {
  templateId: "V0539_POKEMON_SAWK";
  data: V0538_pokemon_throhdata;
}
export interface V0539_pokemon_sawk_normalEntry {
  templateId: "V0539_POKEMON_SAWK_NORMAL";
  data: V0538_pokemon_throh_normaldata;
}
export interface V0540_pokemon_sewaddledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0540_pokemon_sewaddledata {
  pokemonSettings: V0540_pokemon_sewaddledatapokemonsettings;
  templateId: string;
}
export interface V0540_pokemon_sewaddleEntry {
  templateId: "V0540_POKEMON_SEWADDLE";
  data: V0540_pokemon_sewaddledata;
}
export interface V0540_pokemon_sewaddle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
  weightStdDev: number;
}
export interface V0540_pokemon_sewaddle_normaldata {
  pokemonSettings: V0540_pokemon_sewaddle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0540_pokemon_sewaddle_normalEntry {
  templateId: "V0540_POKEMON_SEWADDLE_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0541_pokemon_swadloonEntry {
  templateId: "V0541_POKEMON_SWADLOON";
  data: V0536_pokemon_palpitoaddata;
}
export interface V0541_pokemon_swadloon_normalEntry {
  templateId: "V0541_POKEMON_SWADLOON_NORMAL";
  data: V0536_pokemon_palpitoad_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0543_pokemon_venipedeEntry {
  templateId: "V0543_POKEMON_VENIPEDE";
  data: V0519_pokemon_pidovedata;
}
export interface V0543_pokemon_venipede_normalEntry {
  templateId: "V0543_POKEMON_VENIPEDE_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0544_pokemon_whirlipedeEntry {
  templateId: "V0544_POKEMON_WHIRLIPEDE";
  data: V0499_pokemon_pignitedata;
}
export interface V0544_pokemon_whirlipede_normalEntry {
  templateId: "V0544_POKEMON_WHIRLIPEDE_NORMAL";
  data: V0499_pokemon_pignite_normaldata;
}
export interface V0545_pokemon_scolipedeEntry {
  templateId: "V0545_POKEMON_SCOLIPEDE";
  data: V0530_pokemon_excadrilldata;
}
export interface V0545_pokemon_scolipede_normalEntry {
  templateId: "V0545_POKEMON_SCOLIPEDE_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansagedatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansage_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0547_pokemon_whimsicottEntry {
  templateId: "V0547_POKEMON_WHIMSICOTT";
  data: V0537_pokemon_seismitoaddata;
}
export interface V0547_pokemon_whimsicott_normalEntry {
  templateId: "V0547_POKEMON_WHIMSICOTT_NORMAL";
  data: V0537_pokemon_seismitoad_normaldata;
}
export interface V0548_pokemon_petililEntry {
  templateId: "V0548_POKEMON_PETILIL";
  data: V0511_pokemon_pansagedata;
}
export interface V0548_pokemon_petilil_normalEntry {
  templateId: "V0548_POKEMON_PETILIL_NORMAL";
  data: V0511_pokemon_pansage_normaldata;
}
export interface V0549_pokemon_lilligantEntry {
  templateId: "V0549_POKEMON_LILLIGANT";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0549_pokemon_lilligant_hisuiandatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0549_pokemon_lilligant_hisuiandata {
  pokemonSettings: V0549_pokemon_lilligant_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0549_pokemon_lilligant_hisuianEntry {
  templateId: "V0549_POKEMON_LILLIGANT_HISUIAN";
  data: V0549_pokemon_lilligant_hisuiandata;
}
export interface V0549_pokemon_lilligant_normalEntry {
  templateId: "V0549_POKEMON_LILLIGANT_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0550_pokemon_basculindatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0550_pokemon_basculindata {
  pokemonSettings: V0550_pokemon_basculindatapokemonsettings;
  templateId: string;
}
export interface V0550_pokemon_basculinEntry {
  templateId: "V0550_POKEMON_BASCULIN";
  data: V0550_pokemon_basculindata;
}
export interface V0550_pokemon_basculin_blue_stripeddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0550_pokemon_basculin_blue_stripeddata {
  pokemonSettings: V0550_pokemon_basculin_blue_stripeddatapokemonsettings;
  templateId: string;
}
export interface V0550_pokemon_basculin_blue_stripedEntry {
  templateId: "V0550_POKEMON_BASCULIN_BLUE_STRIPED";
  data: V0550_pokemon_basculin_blue_stripeddata;
}
export interface V0550_pokemon_basculin_red_stripedEntry {
  templateId: "V0550_POKEMON_BASCULIN_RED_STRIPED";
  data: V0550_pokemon_basculin_blue_stripeddata;
}
export interface V0550_pokemon_basculin_white_stripedEntry {
  templateId: "V0550_POKEMON_BASCULIN_WHITE_STRIPED";
  data: V0550_pokemon_basculin_blue_stripeddata;
}
export interface V0551_pokemon_sandileEntry {
  templateId: "V0551_POKEMON_SANDILE";
  data: V0540_pokemon_sewaddledata;
}
export interface V0551_pokemon_sandile_normalEntry {
  templateId: "V0551_POKEMON_SANDILE_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0552_pokemon_krokorokEntry {
  templateId: "V0552_POKEMON_KROKOROK";
  data: V0536_pokemon_palpitoaddata;
}
export interface V0552_pokemon_krokorok_normalEntry {
  templateId: "V0552_POKEMON_KROKOROK_NORMAL";
  data: V0536_pokemon_palpitoad_normaldata;
}
export interface V0553_pokemon_krookodileEntry {
  templateId: "V0553_POKEMON_KROOKODILE";
  data: V0537_pokemon_seismitoaddata;
}
export interface V0553_pokemon_krookodile_normalEntry {
  templateId: "V0553_POKEMON_KROOKODILE_NORMAL";
  data: V0537_pokemon_seismitoad_normaldata;
}
export interface V0554_pokemon_darumakaEntry {
  templateId: "V0554_POKEMON_DARUMAKA";
  data: V0529_pokemon_drilburdata;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0554_pokemon_darumaka_normalEntry {
  templateId: "V0554_POKEMON_DARUMAKA_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0555_pokemon_darmanitanEntry {
  templateId: "V0555_POKEMON_DARMANITAN";
  data: V0523_pokemon_zebstrikadata;
}
export interface V0555_pokemon_darmanitan_galarian_standarddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0555_pokemon_darmanitan_galarian_standarddata {
  pokemonSettings: V0555_pokemon_darmanitan_galarian_standarddatapokemonsettings;
  templateId: string;
}
export interface V0555_pokemon_darmanitan_galarian_standardEntry {
  templateId: "V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD";
  data: V0555_pokemon_darmanitan_galarian_standarddata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0555_pokemon_darmanitan_standardEntry {
  templateId: "V0555_POKEMON_DARMANITAN_STANDARD";
  data: V0523_pokemon_zebstrika_normaldata;
}
export interface V0555_pokemon_darmanitan_zenEntry {
  templateId: "V0555_POKEMON_DARMANITAN_ZEN";
  data: V0530_pokemon_excadrill_normaldata;
}
export interface V0556_pokemon_maractusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0556_pokemon_maractusdata {
  pokemonSettings: V0556_pokemon_maractusdatapokemonsettings;
  templateId: string;
}
export interface V0556_pokemon_maractusEntry {
  templateId: "V0556_POKEMON_MARACTUS";
  data: V0556_pokemon_maractusdata;
}
export interface V0556_pokemon_maractus_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0556_pokemon_maractus_normaldata {
  pokemonSettings: V0556_pokemon_maractus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0556_pokemon_maractus_normalEntry {
  templateId: "V0556_POKEMON_MARACTUS_NORMAL";
  data: V0556_pokemon_maractus_normaldata;
}
export interface V0557_pokemon_dwebbleEntry {
  templateId: "V0557_POKEMON_DWEBBLE";
  data: V0519_pokemon_pidovedata;
}
export interface V0557_pokemon_dwebble_normalEntry {
  templateId: "V0557_POKEMON_DWEBBLE_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0558_pokemon_crustleEntry {
  templateId: "V0558_POKEMON_CRUSTLE";
  data: V0530_pokemon_excadrilldata;
}
export interface V0558_pokemon_crustle_normalEntry {
  templateId: "V0558_POKEMON_CRUSTLE_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
}
export interface V0559_pokemon_scraggyEntry {
  templateId: "V0559_POKEMON_SCRAGGY";
  data: V0540_pokemon_sewaddledata;
}
export interface V0559_pokemon_scraggy_normalEntry {
  templateId: "V0559_POKEMON_SCRAGGY_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0560_pokemon_scraftyEntry {
  templateId: "V0560_POKEMON_SCRAFTY";
  data: V0537_pokemon_seismitoaddata;
}
export interface V0560_pokemon_scrafty_normalEntry {
  templateId: "V0560_POKEMON_SCRAFTY_NORMAL";
  data: V0537_pokemon_seismitoad_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0564_pokemon_tirtougaEntry {
  templateId: "V0564_POKEMON_TIRTOUGA";
  data: V0519_pokemon_pidovedata;
}
export interface V0564_pokemon_tirtouga_normalEntry {
  templateId: "V0564_POKEMON_TIRTOUGA_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0565_pokemon_carracostaEntry {
  templateId: "V0565_POKEMON_CARRACOSTA";
  data: V0530_pokemon_excadrilldata;
}
export interface V0565_pokemon_carracosta_normalEntry {
  templateId: "V0565_POKEMON_CARRACOSTA_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
}
export interface V0566_pokemon_archenEntry {
  templateId: "V0566_POKEMON_ARCHEN";
  data: V0519_pokemon_pidovedata;
}
export interface V0566_pokemon_archen_normalEntry {
  templateId: "V0566_POKEMON_ARCHEN_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0567_pokemon_archeopsdatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0567_pokemon_archeopsdata {
  pokemonSettings: V0567_pokemon_archeopsdatapokemonsettings;
  templateId: string;
}
export interface V0567_pokemon_archeopsEntry {
  templateId: "V0567_POKEMON_ARCHEOPS";
  data: V0567_pokemon_archeopsdata;
}
export interface V0567_pokemon_archeops_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0567_pokemon_archeops_normaldata {
  pokemonSettings: V0567_pokemon_archeops_normaldatapokemonsettings;
  templateId: string;
}
export interface V0567_pokemon_archeops_normalEntry {
  templateId: "V0567_POKEMON_ARCHEOPS_NORMAL";
  data: V0567_pokemon_archeops_normaldata;
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
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0569_pokemon_garbodorEntry {
  templateId: "V0569_POKEMON_GARBODOR";
  data: V0505_pokemon_watchogdata;
}
export interface V0569_pokemon_garbodor_normalEntry {
  templateId: "V0569_POKEMON_GARBODOR_NORMAL";
  data: V0505_pokemon_watchog_normaldata;
}
export interface V0570_pokemon_zoruadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0570_pokemon_zoruadata {
  pokemonSettings: V0570_pokemon_zoruadatapokemonsettings;
  templateId: string;
}
export interface V0570_pokemon_zoruaEntry {
  templateId: "V0570_POKEMON_ZORUA";
  data: V0570_pokemon_zoruadata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0570_pokemon_zorua_normalEntry {
  templateId: "V0570_POKEMON_ZORUA_NORMAL";
  data: V0506_pokemon_lillipup_normaldata;
}
export interface V0571_pokemon_zoroarkEntry {
  templateId: "V0571_POKEMON_ZOROARK";
  data: V0508_pokemon_stoutlanddata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0571_pokemon_zoroark_normalEntry {
  templateId: "V0571_POKEMON_ZOROARK_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0572_pokemon_minccinoEntry {
  templateId: "V0572_POKEMON_MINCCINO";
  data: V0511_pokemon_pansagedata;
}
export interface V0572_pokemon_minccino_normalEntry {
  templateId: "V0572_POKEMON_MINCCINO_NORMAL";
  data: V0511_pokemon_pansage_normaldata;
}
export interface V0573_pokemon_cinccinoEntry {
  templateId: "V0573_POKEMON_CINCCINO";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0573_pokemon_cinccino_normalEntry {
  templateId: "V0573_POKEMON_CINCCINO_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0574_pokemon_gothitaEntry {
  templateId: "V0574_POKEMON_GOTHITA";
  data: V0495_pokemon_snivydata;
}
export interface V0574_pokemon_gothita_normalEntry {
  templateId: "V0574_POKEMON_GOTHITA_NORMAL";
  data: V0495_pokemon_snivy_normaldata;
}
export interface V0575_pokemon_gothoritaEntry {
  templateId: "V0575_POKEMON_GOTHORITA";
  data: V0496_pokemon_servinedata;
}
export interface V0575_pokemon_gothorita_normalEntry {
  templateId: "V0575_POKEMON_GOTHORITA_NORMAL";
  data: V0496_pokemon_servine_normaldata;
}
export interface V0576_pokemon_gothitelleEntry {
  templateId: "V0576_POKEMON_GOTHITELLE";
  data: V0505_pokemon_watchogdata;
}
export interface V0576_pokemon_gothitelle_normalEntry {
  templateId: "V0576_POKEMON_GOTHITELLE_NORMAL";
  data: V0505_pokemon_watchog_normaldata;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0580_pokemon_ducklettEntry {
  templateId: "V0580_POKEMON_DUCKLETT";
  data: V0519_pokemon_pidovedata;
}
export interface V0580_pokemon_ducklett_normalEntry {
  templateId: "V0580_POKEMON_DUCKLETT_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0581_pokemon_swannaEntry {
  templateId: "V0581_POKEMON_SWANNA";
  data: V0567_pokemon_archeopsdata;
}
export interface V0581_pokemon_swanna_normalEntry {
  templateId: "V0581_POKEMON_SWANNA_NORMAL";
  data: V0567_pokemon_archeops_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0583_pokemon_vanillishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0583_pokemon_vanillishdata {
  pokemonSettings: V0583_pokemon_vanillishdatapokemonsettings;
  templateId: string;
}
export interface V0583_pokemon_vanillishEntry {
  templateId: "V0583_POKEMON_VANILLISH";
  data: V0583_pokemon_vanillishdata;
}
export interface V0583_pokemon_vanillish_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0583_pokemon_vanillish_normaldata {
  pokemonSettings: V0583_pokemon_vanillish_normaldatapokemonsettings;
  templateId: string;
}
export interface V0583_pokemon_vanillish_normalEntry {
  templateId: "V0583_POKEMON_VANILLISH_NORMAL";
  data: V0583_pokemon_vanillish_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0585_pokemon_deerlingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0585_pokemon_deerlingdata {
  pokemonSettings: V0585_pokemon_deerlingdatapokemonsettings;
  templateId: string;
}
export interface V0585_pokemon_deerlingEntry {
  templateId: "V0585_POKEMON_DEERLING";
  data: V0585_pokemon_deerlingdata;
}
export interface V0585_pokemon_deerling_autumnEntry {
  templateId: "V0585_POKEMON_DEERLING_AUTUMN";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0585_pokemon_deerling_springEntry {
  templateId: "V0585_POKEMON_DEERLING_SPRING";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0585_pokemon_deerling_summerEntry {
  templateId: "V0585_POKEMON_DEERLING_SUMMER";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0585_pokemon_deerling_winterEntry {
  templateId: "V0585_POKEMON_DEERLING_WINTER";
  data: V0540_pokemon_sewaddle_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0586_pokemon_sawsbuck_autumndatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0586_pokemon_sawsbuck_autumndata {
  pokemonSettings: V0586_pokemon_sawsbuck_autumndatapokemonsettings;
  templateId: string;
}
export interface V0586_pokemon_sawsbuck_autumnEntry {
  templateId: "V0586_POKEMON_SAWSBUCK_AUTUMN";
  data: V0586_pokemon_sawsbuck_autumndata;
}
export interface V0586_pokemon_sawsbuck_springEntry {
  templateId: "V0586_POKEMON_SAWSBUCK_SPRING";
  data: V0586_pokemon_sawsbuck_autumndata;
}
export interface V0586_pokemon_sawsbuck_summerEntry {
  templateId: "V0586_POKEMON_SAWSBUCK_SUMMER";
  data: V0586_pokemon_sawsbuck_autumndata;
}
export interface V0586_pokemon_sawsbuck_winterEntry {
  templateId: "V0586_POKEMON_SAWSBUCK_WINTER";
  data: V0586_pokemon_sawsbuck_autumndata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0588_pokemon_karrablastdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0525_pokemon_boldoredatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0588_pokemon_karrablastdata {
  pokemonSettings: V0588_pokemon_karrablastdatapokemonsettings;
  templateId: string;
}
export interface V0588_pokemon_karrablastEntry {
  templateId: "V0588_POKEMON_KARRABLAST";
  data: V0588_pokemon_karrablastdata;
}
export interface V0588_pokemon_karrablast_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0525_pokemon_boldore_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0588_pokemon_karrablast_normaldata {
  pokemonSettings: V0588_pokemon_karrablast_normaldatapokemonsettings;
  templateId: string;
}
export interface V0588_pokemon_karrablast_normalEntry {
  templateId: "V0588_POKEMON_KARRABLAST_NORMAL";
  data: V0588_pokemon_karrablast_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0591_pokemon_amoongussEntry {
  templateId: "V0591_POKEMON_AMOONGUSS";
  data: V0530_pokemon_excadrilldata;
}
export interface V0591_pokemon_amoonguss_normalEntry {
  templateId: "V0591_POKEMON_AMOONGUSS_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
}
export interface V0592_pokemon_frillishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
export interface V0592_pokemon_frillishdata {
  pokemonSettings: V0592_pokemon_frillishdatapokemonsettings;
  templateId: string;
}
export interface V0592_pokemon_frillishEntry {
  templateId: "V0592_POKEMON_FRILLISH";
  data: V0592_pokemon_frillishdata;
}
export interface V0592_pokemon_frillish_femaledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
  weightStdDev: number;
}
export interface V0592_pokemon_frillish_femaledata {
  pokemonSettings: V0592_pokemon_frillish_femaledatapokemonsettings;
  templateId: string;
}
export interface V0592_pokemon_frillish_femaleEntry {
  templateId: "V0592_POKEMON_FRILLISH_FEMALE";
  data: V0592_pokemon_frillish_femaledata;
}
export interface V0592_pokemon_frillish_normalEntry {
  templateId: "V0592_POKEMON_FRILLISH_NORMAL";
  data: V0592_pokemon_frillish_femaledata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0593_pokemon_jellicent_femaledatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0593_pokemon_jellicent_femaledata {
  pokemonSettings: V0593_pokemon_jellicent_femaledatapokemonsettings;
  templateId: string;
}
export interface V0593_pokemon_jellicent_femaleEntry {
  templateId: "V0593_POKEMON_JELLICENT_FEMALE";
  data: V0593_pokemon_jellicent_femaledata;
}
export interface V0593_pokemon_jellicent_normalEntry {
  templateId: "V0593_POKEMON_JELLICENT_NORMAL";
  data: V0593_pokemon_jellicent_femaledata;
}
export interface V0594_pokemon_alomomolaEntry {
  templateId: "V0594_POKEMON_ALOMOMOLA";
  data: V0550_pokemon_basculindata;
}
export interface V0594_pokemon_alomomola_normalEntry {
  templateId: "V0594_POKEMON_ALOMOMOLA_NORMAL";
  data: V0550_pokemon_basculin_blue_stripeddata;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0595_pokemon_joltik_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  raidBossDistanceOffset: number;
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0595_pokemon_joltik_normaldata {
  pokemonSettings: V0595_pokemon_joltik_normaldatapokemonsettings;
  templateId: string;
}
export interface V0595_pokemon_joltik_normalEntry {
  templateId: "V0595_POKEMON_JOLTIK_NORMAL";
  data: V0595_pokemon_joltik_normaldata;
}
export interface V0596_pokemon_galvantulaEntry {
  templateId: "V0596_POKEMON_GALVANTULA";
  data: V0530_pokemon_excadrilldata;
}
export interface V0596_pokemon_galvantula_normalEntry {
  templateId: "V0596_POKEMON_GALVANTULA_NORMAL";
  data: V0530_pokemon_excadrill_normaldata;
}
export interface V0597_pokemon_ferroseedEntry {
  templateId: "V0597_POKEMON_FERROSEED";
  data: V0519_pokemon_pidovedata;
}
export interface V0597_pokemon_ferroseed_normalEntry {
  templateId: "V0597_POKEMON_FERROSEED_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0598_pokemon_ferrothorndatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0598_pokemon_ferrothorndata {
  pokemonSettings: V0598_pokemon_ferrothorndatapokemonsettings;
  templateId: string;
}
export interface V0598_pokemon_ferrothornEntry {
  templateId: "V0598_POKEMON_FERROTHORN";
  data: V0598_pokemon_ferrothorndata;
}
export interface V0598_pokemon_ferrothorn_normaldatapokemonsettings {
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0598_pokemon_ferrothorn_normaldata {
  pokemonSettings: V0598_pokemon_ferrothorn_normaldatapokemonsettings;
  templateId: string;
}
export interface V0598_pokemon_ferrothorn_normalEntry {
  templateId: "V0598_POKEMON_FERROTHORN_NORMAL";
  data: V0598_pokemon_ferrothorn_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0600_pokemon_klangEntry {
  templateId: "V0600_POKEMON_KLANG";
  data: V0583_pokemon_vanillishdata;
}
export interface V0600_pokemon_klang_normalEntry {
  templateId: "V0600_POKEMON_KLANG_NORMAL";
  data: V0583_pokemon_vanillish_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0602_pokemon_tynamoEntry {
  templateId: "V0602_POKEMON_TYNAMO";
  data: V0535_pokemon_tympoledata;
}
export interface V0602_pokemon_tynamo_normalEntry {
  templateId: "V0602_POKEMON_TYNAMO_NORMAL";
  data: V0535_pokemon_tympole_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansagedatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
  evolutionBranch: (V0511_pokemon_pansage_normaldatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0605_pokemon_elgyemEntry {
  templateId: "V0605_POKEMON_ELGYEM";
  data: V0535_pokemon_tympoledata;
}
export interface V0605_pokemon_elgyem_normalEntry {
  templateId: "V0605_POKEMON_ELGYEM_NORMAL";
  data: V0535_pokemon_tympole_normaldata;
}
export interface V0606_pokemon_beheeyemdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0606_pokemon_beheeyemdata {
  pokemonSettings: V0606_pokemon_beheeyemdatapokemonsettings;
  templateId: string;
}
export interface V0606_pokemon_beheeyemEntry {
  templateId: "V0606_POKEMON_BEHEEYEM";
  data: V0606_pokemon_beheeyemdata;
}
export interface V0606_pokemon_beheeyem_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0517_pokemon_munnadatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0606_pokemon_beheeyem_normaldata {
  pokemonSettings: V0606_pokemon_beheeyem_normaldatapokemonsettings;
  templateId: string;
}
export interface V0606_pokemon_beheeyem_normalEntry {
  templateId: "V0606_POKEMON_BEHEEYEM_NORMAL";
  data: V0606_pokemon_beheeyem_normaldata;
}
export interface V0607_pokemon_litwickEntry {
  templateId: "V0607_POKEMON_LITWICK";
  data: V0519_pokemon_pidovedata;
}
export interface V0607_pokemon_litwick_normalEntry {
  templateId: "V0607_POKEMON_LITWICK_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0610_pokemon_axewEntry {
  templateId: "V0610_POKEMON_AXEW";
  data: V0506_pokemon_lillipupdata;
}
export interface V0610_pokemon_axew_normalEntry {
  templateId: "V0610_POKEMON_AXEW_NORMAL";
  data: V0506_pokemon_lillipup_normaldata;
}
export interface V0611_pokemon_fraxureEntry {
  templateId: "V0611_POKEMON_FRAXURE";
  data: V0507_pokemon_herdierdata;
}
export interface V0611_pokemon_fraxure_normalEntry {
  templateId: "V0611_POKEMON_FRAXURE_NORMAL";
  data: V0507_pokemon_herdier_normaldata;
}
export interface V0612_pokemon_haxorusdatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0612_pokemon_haxorusdata {
  pokemonSettings: V0612_pokemon_haxorusdatapokemonsettings;
  templateId: string;
}
export interface V0612_pokemon_haxorusEntry {
  templateId: "V0612_POKEMON_HAXORUS";
  data: V0612_pokemon_haxorusdata;
}
export interface V0612_pokemon_haxorus_normaldatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0612_pokemon_haxorus_normaldata {
  pokemonSettings: V0612_pokemon_haxorus_normaldatapokemonsettings;
  templateId: string;
}
export interface V0612_pokemon_haxorus_normalEntry {
  templateId: "V0612_POKEMON_HAXORUS_NORMAL";
  data: V0612_pokemon_haxorus_normaldata;
}
export interface V0613_pokemon_cubchooEntry {
  templateId: "V0613_POKEMON_CUBCHOO";
  data: V0506_pokemon_lillipupdata;
}
export interface V0613_pokemon_cubchoo_normalEntry {
  templateId: "V0613_POKEMON_CUBCHOO_NORMAL";
  data: V0506_pokemon_lillipup_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0614_pokemon_bearticdatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0614_pokemon_bearticdata {
  pokemonSettings: V0614_pokemon_bearticdatapokemonsettings;
  templateId: string;
}
export interface V0614_pokemon_bearticEntry {
  templateId: "V0614_POKEMON_BEARTIC";
  data: V0614_pokemon_bearticdata;
}
export interface V0614_pokemon_beartic_normaldatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0614_pokemon_beartic_normaldata {
  pokemonSettings: V0614_pokemon_beartic_normaldatapokemonsettings;
  templateId: string;
}
export interface V0614_pokemon_beartic_normalEntry {
  templateId: "V0614_POKEMON_BEARTIC_NORMAL";
  data: V0614_pokemon_beartic_normaldata;
}
export interface V0614_pokemon_beartic_winter_2020Entry {
  templateId: "V0614_POKEMON_BEARTIC_WINTER_2020";
  data: V0614_pokemon_beartic_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0616_pokemon_shelmetEntry {
  templateId: "V0616_POKEMON_SHELMET";
  data: V0588_pokemon_karrablastdata;
}
export interface V0616_pokemon_shelmet_normalEntry {
  templateId: "V0616_POKEMON_SHELMET_NORMAL";
  data: V0588_pokemon_karrablast_normaldata;
}
export interface V0617_pokemon_accelgorEntry {
  templateId: "V0617_POKEMON_ACCELGOR";
  data: V0534_pokemon_conkeldurrdata;
}
export interface V0617_pokemon_accelgor_normalEntry {
  templateId: "V0617_POKEMON_ACCELGOR_NORMAL";
  data: V0534_pokemon_conkeldurr_normaldata;
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
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0618_pokemon_stunfisk_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0495_pokemon_snivydatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0618_pokemon_stunfisk_galariandata {
  pokemonSettings: V0618_pokemon_stunfisk_galariandatapokemonsettings;
  templateId: string;
}
export interface V0618_pokemon_stunfisk_galarianEntry {
  templateId: "V0618_POKEMON_STUNFISK_GALARIAN";
  data: V0618_pokemon_stunfisk_galariandata;
}
export interface V0618_pokemon_stunfisk_normalEntry {
  templateId: "V0618_POKEMON_STUNFISK_NORMAL";
  data: V0618_pokemon_stunfisk_galariandata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipupdatapokemonsettingsevolutionbranchitem)[];
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0620_pokemon_mienshaoEntry {
  templateId: "V0620_POKEMON_MIENSHAO";
  data: V0508_pokemon_stoutlanddata;
}
export interface V0620_pokemon_mienshao_normalEntry {
  templateId: "V0620_POKEMON_MIENSHAO_NORMAL";
  data: V0508_pokemon_stoutland_normaldata;
}
export interface V0621_pokemon_druddigondatapokemonsettings {
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0621_pokemon_druddigondata {
  pokemonSettings: V0621_pokemon_druddigondatapokemonsettings;
  templateId: string;
}
export interface V0621_pokemon_druddigonEntry {
  templateId: "V0621_POKEMON_DRUDDIGON";
  data: V0621_pokemon_druddigondata;
}
export interface V0621_pokemon_druddigon_normaldatapokemonsettings {
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0621_pokemon_druddigon_normaldata {
  pokemonSettings: V0621_pokemon_druddigon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0621_pokemon_druddigon_normalEntry {
  templateId: "V0621_POKEMON_DRUDDIGON_NORMAL";
  data: V0621_pokemon_druddigon_normaldata;
}
export interface V0622_pokemon_golettEntry {
  templateId: "V0622_POKEMON_GOLETT";
  data: V0519_pokemon_pidovedata;
}
export interface V0622_pokemon_golett_normalEntry {
  templateId: "V0622_POKEMON_GOLETT_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
}
export interface V0623_pokemon_golurkEntry {
  templateId: "V0623_POKEMON_GOLURK";
  data: V0598_pokemon_ferrothorndata;
}
export interface V0623_pokemon_golurk_normalEntry {
  templateId: "V0623_POKEMON_GOLURK_NORMAL";
  data: V0598_pokemon_ferrothorn_normaldata;
}
export interface V0624_pokemon_pawniardEntry {
  templateId: "V0624_POKEMON_PAWNIARD";
  data: V0540_pokemon_sewaddledata;
}
export interface V0624_pokemon_pawniard_normalEntry {
  templateId: "V0624_POKEMON_PAWNIARD_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0626_pokemon_bouffalantEntry {
  templateId: "V0626_POKEMON_BOUFFALANT";
  data: V0621_pokemon_druddigondata;
}
export interface V0626_pokemon_bouffalant_normalEntry {
  templateId: "V0626_POKEMON_BOUFFALANT_NORMAL";
  data: V0621_pokemon_druddigon_normaldata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
  evolutionBranch: (V0506_pokemon_lillipup_normaldatapokemonsettingsevolutionbranchitem)[];
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
export interface V0627_pokemon_rufflet_normalEntry {
  templateId: "V0627_POKEMON_RUFFLET_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0628_pokemon_braviarydatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0628_pokemon_braviarydata {
  pokemonSettings: V0628_pokemon_braviarydatapokemonsettings;
  templateId: string;
}
export interface V0628_pokemon_braviaryEntry {
  templateId: "V0628_POKEMON_BRAVIARY";
  data: V0628_pokemon_braviarydata;
}
export interface V0628_pokemon_braviary_hisuiandatapokemonsettings {
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0628_pokemon_braviary_hisuiandata {
  pokemonSettings: V0628_pokemon_braviary_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0628_pokemon_braviary_hisuianEntry {
  templateId: "V0628_POKEMON_BRAVIARY_HISUIAN";
  data: V0628_pokemon_braviary_hisuiandata;
}
export interface V0628_pokemon_braviary_normalEntry {
  templateId: "V0628_POKEMON_BRAVIARY_NORMAL";
  data: V0628_pokemon_braviary_hisuiandata;
}
export interface V0629_pokemon_vullabyEntry {
  templateId: "V0629_POKEMON_VULLABY";
  data: V0540_pokemon_sewaddledata;
}
export interface V0629_pokemon_vullaby_normalEntry {
  templateId: "V0629_POKEMON_VULLABY_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
}
export interface V0630_pokemon_mandibuzzEntry {
  templateId: "V0630_POKEMON_MANDIBUZZ";
  data: V0628_pokemon_braviarydata;
}
export interface V0630_pokemon_mandibuzz_normalEntry {
  templateId: "V0630_POKEMON_MANDIBUZZ_NORMAL";
  data: V0628_pokemon_braviary_hisuiandata;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
export interface V0632_pokemon_durantEntry {
  templateId: "V0632_POKEMON_DURANT";
  data: V0585_pokemon_deerlingdata;
}
export interface V0632_pokemon_durant_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0494_pokemon_victinidatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0506_pokemon_lillipupdatapokemonsettingsencounter;
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
  weightStdDev: number;
}
export interface V0632_pokemon_durant_normaldata {
  pokemonSettings: V0632_pokemon_durant_normaldatapokemonsettings;
  templateId: string;
}
export interface V0632_pokemon_durant_normalEntry {
  templateId: "V0632_POKEMON_DURANT_NORMAL";
  data: V0632_pokemon_durant_normaldata;
}
export interface V0633_pokemon_deinoEntry {
  templateId: "V0633_POKEMON_DEINO";
  data: V0519_pokemon_pidovedata;
}
export interface V0633_pokemon_deino_normalEntry {
  templateId: "V0633_POKEMON_DEINO_NORMAL";
  data: V0519_pokemon_pidove_normaldata;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivydatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
  evolutionBranch: (V0495_pokemon_snivy_normaldatapokemonsettingsevolutionbranchitem)[];
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  encounter: V0496_pokemon_servinedatapokemonsettingsencounter;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0636_pokemon_larvestaEntry {
  templateId: "V0636_POKEMON_LARVESTA";
  data: V0540_pokemon_sewaddledata;
}
export interface V0636_pokemon_larvesta_normalEntry {
  templateId: "V0636_POKEMON_LARVESTA_NORMAL";
  data: V0540_pokemon_sewaddle_normaldata;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
  encounter: V0507_pokemon_herdierdatapokemonsettingsencounter;
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
export interface V0638_pokemon_cobaliondatapokemonsettings {
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
export interface V0638_pokemon_cobaliondata {
  pokemonSettings: V0638_pokemon_cobaliondatapokemonsettings;
  templateId: string;
}
export interface V0638_pokemon_cobalionEntry {
  templateId: "V0638_POKEMON_COBALION";
  data: V0638_pokemon_cobaliondata;
}
export interface V0638_pokemon_cobalion_normaldatapokemonsettings {
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
export interface V0638_pokemon_cobalion_normaldata {
  pokemonSettings: V0638_pokemon_cobalion_normaldatapokemonsettings;
  templateId: string;
}
export interface V0638_pokemon_cobalion_normalEntry {
  templateId: "V0638_POKEMON_COBALION_NORMAL";
  data: V0638_pokemon_cobalion_normaldata;
}
export interface V0639_pokemon_terrakionEntry {
  templateId: "V0639_POKEMON_TERRAKION";
  data: V0638_pokemon_cobaliondata;
}
export interface V0639_pokemon_terrakion_normalEntry {
  templateId: "V0639_POKEMON_TERRAKION_NORMAL";
  data: V0638_pokemon_cobalion_normaldata;
}
export interface V0640_pokemon_virizionEntry {
  templateId: "V0640_POKEMON_VIRIZION";
  data: V0638_pokemon_cobaliondata;
}
export interface V0640_pokemon_virizion_normalEntry {
  templateId: "V0640_POKEMON_VIRIZION_NORMAL";
  data: V0638_pokemon_cobalion_normaldata;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0642_pokemon_thundurusdatapokemonsettings {
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0642_pokemon_thundurusdata {
  pokemonSettings: V0642_pokemon_thundurusdatapokemonsettings;
  templateId: string;
}
export interface V0642_pokemon_thundurusEntry {
  templateId: "V0642_POKEMON_THUNDURUS";
  data: V0642_pokemon_thundurusdata;
}
export interface V0642_pokemon_thundurus_incarnatedatapokemonsettings {
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
  stats: V0494_pokemon_victinidatapokemonsettingsstats;
  thirdMove: V0494_pokemon_victinidatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0642_pokemon_thundurus_incarnatedata {
  pokemonSettings: V0642_pokemon_thundurus_incarnatedatapokemonsettings;
  templateId: string;
}
export interface V0642_pokemon_thundurus_incarnateEntry {
  templateId: "V0642_POKEMON_THUNDURUS_INCARNATE";
  data: V0642_pokemon_thundurus_incarnatedata;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0643_pokemon_reshiramEntry {
  templateId: "V0643_POKEMON_RESHIRAM";
  data: V0638_pokemon_cobaliondata;
}
export interface V0643_pokemon_reshiram_normalEntry {
  templateId: "V0643_POKEMON_RESHIRAM_NORMAL";
  data: V0638_pokemon_cobalion_normaldata;
}
export interface V0644_pokemon_zekromEntry {
  templateId: "V0644_POKEMON_ZEKROM";
  data: V0638_pokemon_cobaliondata;
}
export interface V0644_pokemon_zekrom_normalEntry {
  templateId: "V0644_POKEMON_ZEKROM_NORMAL";
  data: V0638_pokemon_cobalion_normaldata;
}
export interface V0645_pokemon_landorusEntry {
  templateId: "V0645_POKEMON_LANDORUS";
  data: V0642_pokemon_thundurusdata;
}
export interface V0645_pokemon_landorus_incarnateEntry {
  templateId: "V0645_POKEMON_LANDORUS_INCARNATE";
  data: V0642_pokemon_thundurus_incarnatedata;
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
  shadow: V0495_pokemon_snivydatapokemonsettingsshadow;
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
export interface V0646_pokemon_kyurem_blackdatapokemonsettingsformchangeitemcomponentpokemonsettings {
  familyId: string;
  formChangeType: string;
  pokedexId: string;
}
export interface V0646_pokemon_kyurem_blackdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  componentPokemonSettings: V0646_pokemon_kyurem_blackdatapokemonsettingsformchangeitemcomponentpokemonsettings;
}
export interface V0646_pokemon_kyurem_blackdatapokemonsettings {
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
  disableTransferToPokemonHome: boolean;
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  formChange: (V0646_pokemon_kyurem_blackdatapokemonsettingsformchangeitem)[];
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
export interface V0646_pokemon_kyurem_blackdata {
  pokemonSettings: V0646_pokemon_kyurem_blackdatapokemonsettings;
  templateId: string;
}
export interface V0646_pokemon_kyurem_blackEntry {
  templateId: "V0646_POKEMON_KYUREM_BLACK";
  data: V0646_pokemon_kyurem_blackdata;
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
export interface V0646_pokemon_kyurem_whiteEntry {
  templateId: "V0646_POKEMON_KYUREM_WHITE";
  data: V0646_pokemon_kyurem_blackdata;
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
export interface V0648_pokemon_meloetta_ariadatapokemonsettings {
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
export interface V0648_pokemon_meloetta_ariadata {
  pokemonSettings: V0648_pokemon_meloetta_ariadatapokemonsettings;
  templateId: string;
}
export interface V0648_pokemon_meloetta_ariaEntry {
  templateId: "V0648_POKEMON_MELOETTA_ARIA";
  data: V0648_pokemon_meloetta_ariadata;
}
export interface V0648_pokemon_meloetta_pirouetteEntry {
  templateId: "V0648_POKEMON_MELOETTA_PIROUETTE";
  data: V0648_pokemon_meloetta_ariadata;
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
export interface V0649_pokemon_genesect_burndatapokemonsettings {
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
  encounter: V0494_pokemon_victinidatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
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
export interface V0649_pokemon_genesect_burndata {
  pokemonSettings: V0649_pokemon_genesect_burndatapokemonsettings;
  templateId: string;
}
export interface V0649_pokemon_genesect_burnEntry {
  templateId: "V0649_POKEMON_GENESECT_BURN";
  data: V0649_pokemon_genesect_burndata;
}
export interface V0649_pokemon_genesect_chillEntry {
  templateId: "V0649_POKEMON_GENESECT_CHILL";
  data: V0649_pokemon_genesect_burndata;
}
export interface V0649_pokemon_genesect_douseEntry {
  templateId: "V0649_POKEMON_GENESECT_DOUSE";
  data: V0649_pokemon_genesect_burndata;
}
export interface V0649_pokemon_genesect_normalEntry {
  templateId: "V0649_POKEMON_GENESECT_NORMAL";
  data: V0649_pokemon_genesect_burndata;
}
export interface V0649_pokemon_genesect_shockEntry {
  templateId: "V0649_POKEMON_GENESECT_SHOCK";
  data: V0649_pokemon_genesect_burndata;
}

export interface PokemonSettingsGen5MasterfileByTemplateId {
  "V0494_POKEMON_VICTINI": V0494_pokemon_victiniEntry;
  "V0494_POKEMON_VICTINI_NORMAL": V0494_pokemon_victini_normalEntry;
  "V0495_POKEMON_SNIVY": V0495_pokemon_snivyEntry;
  "V0495_POKEMON_SNIVY_NORMAL": V0495_pokemon_snivy_normalEntry;
  "V0496_POKEMON_SERVINE": V0496_pokemon_servineEntry;
  "V0496_POKEMON_SERVINE_NORMAL": V0496_pokemon_servine_normalEntry;
  "V0497_POKEMON_SERPERIOR": V0497_pokemon_serperiorEntry;
  "V0497_POKEMON_SERPERIOR_NORMAL": V0497_pokemon_serperior_normalEntry;
  "V0498_POKEMON_TEPIG": V0498_pokemon_tepigEntry;
  "V0498_POKEMON_TEPIG_NORMAL": V0498_pokemon_tepig_normalEntry;
  "V0499_POKEMON_PIGNITE": V0499_pokemon_pigniteEntry;
  "V0499_POKEMON_PIGNITE_NORMAL": V0499_pokemon_pignite_normalEntry;
  "V0500_POKEMON_EMBOAR": V0500_pokemon_emboarEntry;
  "V0500_POKEMON_EMBOAR_NORMAL": V0500_pokemon_emboar_normalEntry;
  "V0501_POKEMON_OSHAWOTT": V0501_pokemon_oshawottEntry;
  "V0501_POKEMON_OSHAWOTT_NORMAL": V0501_pokemon_oshawott_normalEntry;
  "V0502_POKEMON_DEWOTT": V0502_pokemon_dewottEntry;
  "V0502_POKEMON_DEWOTT_NORMAL": V0502_pokemon_dewott_normalEntry;
  "V0503_POKEMON_SAMUROTT": V0503_pokemon_samurottEntry;
  "V0503_POKEMON_SAMUROTT_HISUIAN": V0503_pokemon_samurott_hisuianEntry;
  "V0503_POKEMON_SAMUROTT_NORMAL": V0503_pokemon_samurott_normalEntry;
  "V0504_POKEMON_PATRAT": V0504_pokemon_patratEntry;
  "V0504_POKEMON_PATRAT_NORMAL": V0504_pokemon_patrat_normalEntry;
  "V0505_POKEMON_WATCHOG": V0505_pokemon_watchogEntry;
  "V0505_POKEMON_WATCHOG_NORMAL": V0505_pokemon_watchog_normalEntry;
  "V0506_POKEMON_LILLIPUP": V0506_pokemon_lillipupEntry;
  "V0506_POKEMON_LILLIPUP_NORMAL": V0506_pokemon_lillipup_normalEntry;
  "V0507_POKEMON_HERDIER": V0507_pokemon_herdierEntry;
  "V0507_POKEMON_HERDIER_NORMAL": V0507_pokemon_herdier_normalEntry;
  "V0508_POKEMON_STOUTLAND": V0508_pokemon_stoutlandEntry;
  "V0508_POKEMON_STOUTLAND_NORMAL": V0508_pokemon_stoutland_normalEntry;
  "V0509_POKEMON_PURRLOIN": V0509_pokemon_purrloinEntry;
  "V0509_POKEMON_PURRLOIN_NORMAL": V0509_pokemon_purrloin_normalEntry;
  "V0510_POKEMON_LIEPARD": V0510_pokemon_liepardEntry;
  "V0510_POKEMON_LIEPARD_NORMAL": V0510_pokemon_liepard_normalEntry;
  "V0511_POKEMON_PANSAGE": V0511_pokemon_pansageEntry;
  "V0511_POKEMON_PANSAGE_NORMAL": V0511_pokemon_pansage_normalEntry;
  "V0512_POKEMON_SIMISAGE": V0512_pokemon_simisageEntry;
  "V0512_POKEMON_SIMISAGE_NORMAL": V0512_pokemon_simisage_normalEntry;
  "V0513_POKEMON_PANSEAR": V0513_pokemon_pansearEntry;
  "V0513_POKEMON_PANSEAR_NORMAL": V0513_pokemon_pansear_normalEntry;
  "V0514_POKEMON_SIMISEAR": V0514_pokemon_simisearEntry;
  "V0514_POKEMON_SIMISEAR_NORMAL": V0514_pokemon_simisear_normalEntry;
  "V0515_POKEMON_PANPOUR": V0515_pokemon_panpourEntry;
  "V0515_POKEMON_PANPOUR_NORMAL": V0515_pokemon_panpour_normalEntry;
  "V0516_POKEMON_SIMIPOUR": V0516_pokemon_simipourEntry;
  "V0516_POKEMON_SIMIPOUR_NORMAL": V0516_pokemon_simipour_normalEntry;
  "V0517_POKEMON_MUNNA": V0517_pokemon_munnaEntry;
  "V0517_POKEMON_MUNNA_NORMAL": V0517_pokemon_munna_normalEntry;
  "V0518_POKEMON_MUSHARNA": V0518_pokemon_musharnaEntry;
  "V0518_POKEMON_MUSHARNA_NORMAL": V0518_pokemon_musharna_normalEntry;
  "V0519_POKEMON_PIDOVE": V0519_pokemon_pidoveEntry;
  "V0519_POKEMON_PIDOVE_NORMAL": V0519_pokemon_pidove_normalEntry;
  "V0520_POKEMON_TRANQUILL": V0520_pokemon_tranquillEntry;
  "V0520_POKEMON_TRANQUILL_NORMAL": V0520_pokemon_tranquill_normalEntry;
  "V0521_POKEMON_UNFEZANT": V0521_pokemon_unfezantEntry;
  "V0521_POKEMON_UNFEZANT_NORMAL": V0521_pokemon_unfezant_normalEntry;
  "V0522_POKEMON_BLITZLE": V0522_pokemon_blitzleEntry;
  "V0522_POKEMON_BLITZLE_NORMAL": V0522_pokemon_blitzle_normalEntry;
  "V0523_POKEMON_ZEBSTRIKA": V0523_pokemon_zebstrikaEntry;
  "V0523_POKEMON_ZEBSTRIKA_NORMAL": V0523_pokemon_zebstrika_normalEntry;
  "V0524_POKEMON_ROGGENROLA": V0524_pokemon_roggenrolaEntry;
  "V0524_POKEMON_ROGGENROLA_NORMAL": V0524_pokemon_roggenrola_normalEntry;
  "V0525_POKEMON_BOLDORE": V0525_pokemon_boldoreEntry;
  "V0525_POKEMON_BOLDORE_NORMAL": V0525_pokemon_boldore_normalEntry;
  "V0526_POKEMON_GIGALITH": V0526_pokemon_gigalithEntry;
  "V0526_POKEMON_GIGALITH_NORMAL": V0526_pokemon_gigalith_normalEntry;
  "V0527_POKEMON_WOOBAT": V0527_pokemon_woobatEntry;
  "V0527_POKEMON_WOOBAT_NORMAL": V0527_pokemon_woobat_normalEntry;
  "V0528_POKEMON_SWOOBAT": V0528_pokemon_swoobatEntry;
  "V0528_POKEMON_SWOOBAT_NORMAL": V0528_pokemon_swoobat_normalEntry;
  "V0529_POKEMON_DRILBUR": V0529_pokemon_drilburEntry;
  "V0529_POKEMON_DRILBUR_NORMAL": V0529_pokemon_drilbur_normalEntry;
  "V0530_POKEMON_EXCADRILL": V0530_pokemon_excadrillEntry;
  "V0530_POKEMON_EXCADRILL_NORMAL": V0530_pokemon_excadrill_normalEntry;
  "V0531_POKEMON_AUDINO": V0531_pokemon_audinoEntry;
  "V0531_POKEMON_AUDINO_NORMAL": V0531_pokemon_audino_normalEntry;
  "V0532_POKEMON_TIMBURR": V0532_pokemon_timburrEntry;
  "V0532_POKEMON_TIMBURR_NORMAL": V0532_pokemon_timburr_normalEntry;
  "V0533_POKEMON_GURDURR": V0533_pokemon_gurdurrEntry;
  "V0533_POKEMON_GURDURR_NORMAL": V0533_pokemon_gurdurr_normalEntry;
  "V0534_POKEMON_CONKELDURR": V0534_pokemon_conkeldurrEntry;
  "V0534_POKEMON_CONKELDURR_NORMAL": V0534_pokemon_conkeldurr_normalEntry;
  "V0535_POKEMON_TYMPOLE": V0535_pokemon_tympoleEntry;
  "V0535_POKEMON_TYMPOLE_NORMAL": V0535_pokemon_tympole_normalEntry;
  "V0536_POKEMON_PALPITOAD": V0536_pokemon_palpitoadEntry;
  "V0536_POKEMON_PALPITOAD_NORMAL": V0536_pokemon_palpitoad_normalEntry;
  "V0537_POKEMON_SEISMITOAD": V0537_pokemon_seismitoadEntry;
  "V0537_POKEMON_SEISMITOAD_NORMAL": V0537_pokemon_seismitoad_normalEntry;
  "V0538_POKEMON_THROH": V0538_pokemon_throhEntry;
  "V0538_POKEMON_THROH_NORMAL": V0538_pokemon_throh_normalEntry;
  "V0539_POKEMON_SAWK": V0539_pokemon_sawkEntry;
  "V0539_POKEMON_SAWK_NORMAL": V0539_pokemon_sawk_normalEntry;
  "V0540_POKEMON_SEWADDLE": V0540_pokemon_sewaddleEntry;
  "V0540_POKEMON_SEWADDLE_NORMAL": V0540_pokemon_sewaddle_normalEntry;
  "V0541_POKEMON_SWADLOON": V0541_pokemon_swadloonEntry;
  "V0541_POKEMON_SWADLOON_NORMAL": V0541_pokemon_swadloon_normalEntry;
  "V0542_POKEMON_LEAVANNY": V0542_pokemon_leavannyEntry;
  "V0542_POKEMON_LEAVANNY_NORMAL": V0542_pokemon_leavanny_normalEntry;
  "V0543_POKEMON_VENIPEDE": V0543_pokemon_venipedeEntry;
  "V0543_POKEMON_VENIPEDE_NORMAL": V0543_pokemon_venipede_normalEntry;
  "V0544_POKEMON_WHIRLIPEDE": V0544_pokemon_whirlipedeEntry;
  "V0544_POKEMON_WHIRLIPEDE_NORMAL": V0544_pokemon_whirlipede_normalEntry;
  "V0545_POKEMON_SCOLIPEDE": V0545_pokemon_scolipedeEntry;
  "V0545_POKEMON_SCOLIPEDE_NORMAL": V0545_pokemon_scolipede_normalEntry;
  "V0546_POKEMON_COTTONEE": V0546_pokemon_cottoneeEntry;
  "V0546_POKEMON_COTTONEE_NORMAL": V0546_pokemon_cottonee_normalEntry;
  "V0547_POKEMON_WHIMSICOTT": V0547_pokemon_whimsicottEntry;
  "V0547_POKEMON_WHIMSICOTT_NORMAL": V0547_pokemon_whimsicott_normalEntry;
  "V0548_POKEMON_PETILIL": V0548_pokemon_petililEntry;
  "V0548_POKEMON_PETILIL_NORMAL": V0548_pokemon_petilil_normalEntry;
  "V0549_POKEMON_LILLIGANT": V0549_pokemon_lilligantEntry;
  "V0549_POKEMON_LILLIGANT_HISUIAN": V0549_pokemon_lilligant_hisuianEntry;
  "V0549_POKEMON_LILLIGANT_NORMAL": V0549_pokemon_lilligant_normalEntry;
  "V0550_POKEMON_BASCULIN": V0550_pokemon_basculinEntry;
  "V0550_POKEMON_BASCULIN_BLUE_STRIPED": V0550_pokemon_basculin_blue_stripedEntry;
  "V0550_POKEMON_BASCULIN_RED_STRIPED": V0550_pokemon_basculin_red_stripedEntry;
  "V0550_POKEMON_BASCULIN_WHITE_STRIPED": V0550_pokemon_basculin_white_stripedEntry;
  "V0551_POKEMON_SANDILE": V0551_pokemon_sandileEntry;
  "V0551_POKEMON_SANDILE_NORMAL": V0551_pokemon_sandile_normalEntry;
  "V0552_POKEMON_KROKOROK": V0552_pokemon_krokorokEntry;
  "V0552_POKEMON_KROKOROK_NORMAL": V0552_pokemon_krokorok_normalEntry;
  "V0553_POKEMON_KROOKODILE": V0553_pokemon_krookodileEntry;
  "V0553_POKEMON_KROOKODILE_NORMAL": V0553_pokemon_krookodile_normalEntry;
  "V0554_POKEMON_DARUMAKA": V0554_pokemon_darumakaEntry;
  "V0554_POKEMON_DARUMAKA_GALARIAN": V0554_pokemon_darumaka_galarianEntry;
  "V0554_POKEMON_DARUMAKA_NORMAL": V0554_pokemon_darumaka_normalEntry;
  "V0555_POKEMON_DARMANITAN": V0555_pokemon_darmanitanEntry;
  "V0555_POKEMON_DARMANITAN_GALARIAN_STANDARD": V0555_pokemon_darmanitan_galarian_standardEntry;
  "V0555_POKEMON_DARMANITAN_GALARIAN_ZEN": V0555_pokemon_darmanitan_galarian_zenEntry;
  "V0555_POKEMON_DARMANITAN_STANDARD": V0555_pokemon_darmanitan_standardEntry;
  "V0555_POKEMON_DARMANITAN_ZEN": V0555_pokemon_darmanitan_zenEntry;
  "V0556_POKEMON_MARACTUS": V0556_pokemon_maractusEntry;
  "V0556_POKEMON_MARACTUS_NORMAL": V0556_pokemon_maractus_normalEntry;
  "V0557_POKEMON_DWEBBLE": V0557_pokemon_dwebbleEntry;
  "V0557_POKEMON_DWEBBLE_NORMAL": V0557_pokemon_dwebble_normalEntry;
  "V0558_POKEMON_CRUSTLE": V0558_pokemon_crustleEntry;
  "V0558_POKEMON_CRUSTLE_NORMAL": V0558_pokemon_crustle_normalEntry;
  "V0559_POKEMON_SCRAGGY": V0559_pokemon_scraggyEntry;
  "V0559_POKEMON_SCRAGGY_NORMAL": V0559_pokemon_scraggy_normalEntry;
  "V0560_POKEMON_SCRAFTY": V0560_pokemon_scraftyEntry;
  "V0560_POKEMON_SCRAFTY_NORMAL": V0560_pokemon_scrafty_normalEntry;
  "V0561_POKEMON_SIGILYPH": V0561_pokemon_sigilyphEntry;
  "V0561_POKEMON_SIGILYPH_NORMAL": V0561_pokemon_sigilyph_normalEntry;
  "V0562_POKEMON_YAMASK": V0562_pokemon_yamaskEntry;
  "V0562_POKEMON_YAMASK_GALARIAN": V0562_pokemon_yamask_galarianEntry;
  "V0562_POKEMON_YAMASK_NORMAL": V0562_pokemon_yamask_normalEntry;
  "V0563_POKEMON_COFAGRIGUS": V0563_pokemon_cofagrigusEntry;
  "V0563_POKEMON_COFAGRIGUS_NORMAL": V0563_pokemon_cofagrigus_normalEntry;
  "V0564_POKEMON_TIRTOUGA": V0564_pokemon_tirtougaEntry;
  "V0564_POKEMON_TIRTOUGA_NORMAL": V0564_pokemon_tirtouga_normalEntry;
  "V0565_POKEMON_CARRACOSTA": V0565_pokemon_carracostaEntry;
  "V0565_POKEMON_CARRACOSTA_NORMAL": V0565_pokemon_carracosta_normalEntry;
  "V0566_POKEMON_ARCHEN": V0566_pokemon_archenEntry;
  "V0566_POKEMON_ARCHEN_NORMAL": V0566_pokemon_archen_normalEntry;
  "V0567_POKEMON_ARCHEOPS": V0567_pokemon_archeopsEntry;
  "V0567_POKEMON_ARCHEOPS_NORMAL": V0567_pokemon_archeops_normalEntry;
  "V0568_POKEMON_TRUBBISH": V0568_pokemon_trubbishEntry;
  "V0568_POKEMON_TRUBBISH_NORMAL": V0568_pokemon_trubbish_normalEntry;
  "V0569_POKEMON_GARBODOR": V0569_pokemon_garbodorEntry;
  "V0569_POKEMON_GARBODOR_NORMAL": V0569_pokemon_garbodor_normalEntry;
  "V0570_POKEMON_ZORUA": V0570_pokemon_zoruaEntry;
  "V0570_POKEMON_ZORUA_HISUIAN": V0570_pokemon_zorua_hisuianEntry;
  "V0570_POKEMON_ZORUA_NORMAL": V0570_pokemon_zorua_normalEntry;
  "V0571_POKEMON_ZOROARK": V0571_pokemon_zoroarkEntry;
  "V0571_POKEMON_ZOROARK_HISUIAN": V0571_pokemon_zoroark_hisuianEntry;
  "V0571_POKEMON_ZOROARK_NORMAL": V0571_pokemon_zoroark_normalEntry;
  "V0572_POKEMON_MINCCINO": V0572_pokemon_minccinoEntry;
  "V0572_POKEMON_MINCCINO_NORMAL": V0572_pokemon_minccino_normalEntry;
  "V0573_POKEMON_CINCCINO": V0573_pokemon_cinccinoEntry;
  "V0573_POKEMON_CINCCINO_NORMAL": V0573_pokemon_cinccino_normalEntry;
  "V0574_POKEMON_GOTHITA": V0574_pokemon_gothitaEntry;
  "V0574_POKEMON_GOTHITA_NORMAL": V0574_pokemon_gothita_normalEntry;
  "V0575_POKEMON_GOTHORITA": V0575_pokemon_gothoritaEntry;
  "V0575_POKEMON_GOTHORITA_NORMAL": V0575_pokemon_gothorita_normalEntry;
  "V0576_POKEMON_GOTHITELLE": V0576_pokemon_gothitelleEntry;
  "V0576_POKEMON_GOTHITELLE_NORMAL": V0576_pokemon_gothitelle_normalEntry;
  "V0577_POKEMON_SOLOSIS": V0577_pokemon_solosisEntry;
  "V0577_POKEMON_SOLOSIS_NORMAL": V0577_pokemon_solosis_normalEntry;
  "V0578_POKEMON_DUOSION": V0578_pokemon_duosionEntry;
  "V0578_POKEMON_DUOSION_NORMAL": V0578_pokemon_duosion_normalEntry;
  "V0579_POKEMON_REUNICLUS": V0579_pokemon_reuniclusEntry;
  "V0579_POKEMON_REUNICLUS_NORMAL": V0579_pokemon_reuniclus_normalEntry;
  "V0580_POKEMON_DUCKLETT": V0580_pokemon_ducklettEntry;
  "V0580_POKEMON_DUCKLETT_NORMAL": V0580_pokemon_ducklett_normalEntry;
  "V0581_POKEMON_SWANNA": V0581_pokemon_swannaEntry;
  "V0581_POKEMON_SWANNA_NORMAL": V0581_pokemon_swanna_normalEntry;
  "V0582_POKEMON_VANILLITE": V0582_pokemon_vanilliteEntry;
  "V0582_POKEMON_VANILLITE_NORMAL": V0582_pokemon_vanillite_normalEntry;
  "V0583_POKEMON_VANILLISH": V0583_pokemon_vanillishEntry;
  "V0583_POKEMON_VANILLISH_NORMAL": V0583_pokemon_vanillish_normalEntry;
  "V0584_POKEMON_VANILLUXE": V0584_pokemon_vanilluxeEntry;
  "V0584_POKEMON_VANILLUXE_NORMAL": V0584_pokemon_vanilluxe_normalEntry;
  "V0585_POKEMON_DEERLING": V0585_pokemon_deerlingEntry;
  "V0585_POKEMON_DEERLING_AUTUMN": V0585_pokemon_deerling_autumnEntry;
  "V0585_POKEMON_DEERLING_SPRING": V0585_pokemon_deerling_springEntry;
  "V0585_POKEMON_DEERLING_SUMMER": V0585_pokemon_deerling_summerEntry;
  "V0585_POKEMON_DEERLING_WINTER": V0585_pokemon_deerling_winterEntry;
  "V0586_POKEMON_SAWSBUCK": V0586_pokemon_sawsbuckEntry;
  "V0586_POKEMON_SAWSBUCK_AUTUMN": V0586_pokemon_sawsbuck_autumnEntry;
  "V0586_POKEMON_SAWSBUCK_SPRING": V0586_pokemon_sawsbuck_springEntry;
  "V0586_POKEMON_SAWSBUCK_SUMMER": V0586_pokemon_sawsbuck_summerEntry;
  "V0586_POKEMON_SAWSBUCK_WINTER": V0586_pokemon_sawsbuck_winterEntry;
  "V0587_POKEMON_EMOLGA": V0587_pokemon_emolgaEntry;
  "V0587_POKEMON_EMOLGA_NORMAL": V0587_pokemon_emolga_normalEntry;
  "V0588_POKEMON_KARRABLAST": V0588_pokemon_karrablastEntry;
  "V0588_POKEMON_KARRABLAST_NORMAL": V0588_pokemon_karrablast_normalEntry;
  "V0589_POKEMON_ESCAVALIER": V0589_pokemon_escavalierEntry;
  "V0589_POKEMON_ESCAVALIER_NORMAL": V0589_pokemon_escavalier_normalEntry;
  "V0590_POKEMON_FOONGUS": V0590_pokemon_foongusEntry;
  "V0590_POKEMON_FOONGUS_NORMAL": V0590_pokemon_foongus_normalEntry;
  "V0591_POKEMON_AMOONGUSS": V0591_pokemon_amoongussEntry;
  "V0591_POKEMON_AMOONGUSS_NORMAL": V0591_pokemon_amoonguss_normalEntry;
  "V0592_POKEMON_FRILLISH": V0592_pokemon_frillishEntry;
  "V0592_POKEMON_FRILLISH_FEMALE": V0592_pokemon_frillish_femaleEntry;
  "V0592_POKEMON_FRILLISH_NORMAL": V0592_pokemon_frillish_normalEntry;
  "V0593_POKEMON_JELLICENT": V0593_pokemon_jellicentEntry;
  "V0593_POKEMON_JELLICENT_FEMALE": V0593_pokemon_jellicent_femaleEntry;
  "V0593_POKEMON_JELLICENT_NORMAL": V0593_pokemon_jellicent_normalEntry;
  "V0594_POKEMON_ALOMOMOLA": V0594_pokemon_alomomolaEntry;
  "V0594_POKEMON_ALOMOMOLA_NORMAL": V0594_pokemon_alomomola_normalEntry;
  "V0595_POKEMON_JOLTIK": V0595_pokemon_joltikEntry;
  "V0595_POKEMON_JOLTIK_NORMAL": V0595_pokemon_joltik_normalEntry;
  "V0596_POKEMON_GALVANTULA": V0596_pokemon_galvantulaEntry;
  "V0596_POKEMON_GALVANTULA_NORMAL": V0596_pokemon_galvantula_normalEntry;
  "V0597_POKEMON_FERROSEED": V0597_pokemon_ferroseedEntry;
  "V0597_POKEMON_FERROSEED_NORMAL": V0597_pokemon_ferroseed_normalEntry;
  "V0598_POKEMON_FERROTHORN": V0598_pokemon_ferrothornEntry;
  "V0598_POKEMON_FERROTHORN_NORMAL": V0598_pokemon_ferrothorn_normalEntry;
  "V0599_POKEMON_KLINK": V0599_pokemon_klinkEntry;
  "V0599_POKEMON_KLINK_NORMAL": V0599_pokemon_klink_normalEntry;
  "V0600_POKEMON_KLANG": V0600_pokemon_klangEntry;
  "V0600_POKEMON_KLANG_NORMAL": V0600_pokemon_klang_normalEntry;
  "V0601_POKEMON_KLINKLANG": V0601_pokemon_klinklangEntry;
  "V0601_POKEMON_KLINKLANG_NORMAL": V0601_pokemon_klinklang_normalEntry;
  "V0602_POKEMON_TYNAMO": V0602_pokemon_tynamoEntry;
  "V0602_POKEMON_TYNAMO_NORMAL": V0602_pokemon_tynamo_normalEntry;
  "V0603_POKEMON_EELEKTRIK": V0603_pokemon_eelektrikEntry;
  "V0603_POKEMON_EELEKTRIK_NORMAL": V0603_pokemon_eelektrik_normalEntry;
  "V0604_POKEMON_EELEKTROSS": V0604_pokemon_eelektrossEntry;
  "V0604_POKEMON_EELEKTROSS_NORMAL": V0604_pokemon_eelektross_normalEntry;
  "V0605_POKEMON_ELGYEM": V0605_pokemon_elgyemEntry;
  "V0605_POKEMON_ELGYEM_NORMAL": V0605_pokemon_elgyem_normalEntry;
  "V0606_POKEMON_BEHEEYEM": V0606_pokemon_beheeyemEntry;
  "V0606_POKEMON_BEHEEYEM_NORMAL": V0606_pokemon_beheeyem_normalEntry;
  "V0607_POKEMON_LITWICK": V0607_pokemon_litwickEntry;
  "V0607_POKEMON_LITWICK_NORMAL": V0607_pokemon_litwick_normalEntry;
  "V0608_POKEMON_LAMPENT": V0608_pokemon_lampentEntry;
  "V0608_POKEMON_LAMPENT_NORMAL": V0608_pokemon_lampent_normalEntry;
  "V0609_POKEMON_CHANDELURE": V0609_pokemon_chandelureEntry;
  "V0609_POKEMON_CHANDELURE_NORMAL": V0609_pokemon_chandelure_normalEntry;
  "V0610_POKEMON_AXEW": V0610_pokemon_axewEntry;
  "V0610_POKEMON_AXEW_NORMAL": V0610_pokemon_axew_normalEntry;
  "V0611_POKEMON_FRAXURE": V0611_pokemon_fraxureEntry;
  "V0611_POKEMON_FRAXURE_NORMAL": V0611_pokemon_fraxure_normalEntry;
  "V0612_POKEMON_HAXORUS": V0612_pokemon_haxorusEntry;
  "V0612_POKEMON_HAXORUS_NORMAL": V0612_pokemon_haxorus_normalEntry;
  "V0613_POKEMON_CUBCHOO": V0613_pokemon_cubchooEntry;
  "V0613_POKEMON_CUBCHOO_NORMAL": V0613_pokemon_cubchoo_normalEntry;
  "V0613_POKEMON_CUBCHOO_WINTER_2020": V0613_pokemon_cubchoo_winter_2020Entry;
  "V0614_POKEMON_BEARTIC": V0614_pokemon_bearticEntry;
  "V0614_POKEMON_BEARTIC_NORMAL": V0614_pokemon_beartic_normalEntry;
  "V0614_POKEMON_BEARTIC_WINTER_2020": V0614_pokemon_beartic_winter_2020Entry;
  "V0615_POKEMON_CRYOGONAL": V0615_pokemon_cryogonalEntry;
  "V0615_POKEMON_CRYOGONAL_NORMAL": V0615_pokemon_cryogonal_normalEntry;
  "V0616_POKEMON_SHELMET": V0616_pokemon_shelmetEntry;
  "V0616_POKEMON_SHELMET_NORMAL": V0616_pokemon_shelmet_normalEntry;
  "V0617_POKEMON_ACCELGOR": V0617_pokemon_accelgorEntry;
  "V0617_POKEMON_ACCELGOR_NORMAL": V0617_pokemon_accelgor_normalEntry;
  "V0618_POKEMON_STUNFISK": V0618_pokemon_stunfiskEntry;
  "V0618_POKEMON_STUNFISK_GALARIAN": V0618_pokemon_stunfisk_galarianEntry;
  "V0618_POKEMON_STUNFISK_NORMAL": V0618_pokemon_stunfisk_normalEntry;
  "V0619_POKEMON_MIENFOO": V0619_pokemon_mienfooEntry;
  "V0619_POKEMON_MIENFOO_NORMAL": V0619_pokemon_mienfoo_normalEntry;
  "V0620_POKEMON_MIENSHAO": V0620_pokemon_mienshaoEntry;
  "V0620_POKEMON_MIENSHAO_NORMAL": V0620_pokemon_mienshao_normalEntry;
  "V0621_POKEMON_DRUDDIGON": V0621_pokemon_druddigonEntry;
  "V0621_POKEMON_DRUDDIGON_NORMAL": V0621_pokemon_druddigon_normalEntry;
  "V0622_POKEMON_GOLETT": V0622_pokemon_golettEntry;
  "V0622_POKEMON_GOLETT_NORMAL": V0622_pokemon_golett_normalEntry;
  "V0623_POKEMON_GOLURK": V0623_pokemon_golurkEntry;
  "V0623_POKEMON_GOLURK_NORMAL": V0623_pokemon_golurk_normalEntry;
  "V0624_POKEMON_PAWNIARD": V0624_pokemon_pawniardEntry;
  "V0624_POKEMON_PAWNIARD_NORMAL": V0624_pokemon_pawniard_normalEntry;
  "V0625_POKEMON_BISHARP": V0625_pokemon_bisharpEntry;
  "V0625_POKEMON_BISHARP_NORMAL": V0625_pokemon_bisharp_normalEntry;
  "V0626_POKEMON_BOUFFALANT": V0626_pokemon_bouffalantEntry;
  "V0626_POKEMON_BOUFFALANT_NORMAL": V0626_pokemon_bouffalant_normalEntry;
  "V0627_POKEMON_RUFFLET": V0627_pokemon_ruffletEntry;
  "V0627_POKEMON_RUFFLET_NORMAL": V0627_pokemon_rufflet_normalEntry;
  "V0628_POKEMON_BRAVIARY": V0628_pokemon_braviaryEntry;
  "V0628_POKEMON_BRAVIARY_HISUIAN": V0628_pokemon_braviary_hisuianEntry;
  "V0628_POKEMON_BRAVIARY_NORMAL": V0628_pokemon_braviary_normalEntry;
  "V0629_POKEMON_VULLABY": V0629_pokemon_vullabyEntry;
  "V0629_POKEMON_VULLABY_NORMAL": V0629_pokemon_vullaby_normalEntry;
  "V0630_POKEMON_MANDIBUZZ": V0630_pokemon_mandibuzzEntry;
  "V0630_POKEMON_MANDIBUZZ_NORMAL": V0630_pokemon_mandibuzz_normalEntry;
  "V0631_POKEMON_HEATMOR": V0631_pokemon_heatmorEntry;
  "V0631_POKEMON_HEATMOR_NORMAL": V0631_pokemon_heatmor_normalEntry;
  "V0632_POKEMON_DURANT": V0632_pokemon_durantEntry;
  "V0632_POKEMON_DURANT_NORMAL": V0632_pokemon_durant_normalEntry;
  "V0633_POKEMON_DEINO": V0633_pokemon_deinoEntry;
  "V0633_POKEMON_DEINO_NORMAL": V0633_pokemon_deino_normalEntry;
  "V0634_POKEMON_ZWEILOUS": V0634_pokemon_zweilousEntry;
  "V0634_POKEMON_ZWEILOUS_NORMAL": V0634_pokemon_zweilous_normalEntry;
  "V0635_POKEMON_HYDREIGON": V0635_pokemon_hydreigonEntry;
  "V0635_POKEMON_HYDREIGON_NORMAL": V0635_pokemon_hydreigon_normalEntry;
  "V0636_POKEMON_LARVESTA": V0636_pokemon_larvestaEntry;
  "V0636_POKEMON_LARVESTA_NORMAL": V0636_pokemon_larvesta_normalEntry;
  "V0637_POKEMON_VOLCARONA": V0637_pokemon_volcaronaEntry;
  "V0637_POKEMON_VOLCARONA_NORMAL": V0637_pokemon_volcarona_normalEntry;
  "V0638_POKEMON_COBALION": V0638_pokemon_cobalionEntry;
  "V0638_POKEMON_COBALION_NORMAL": V0638_pokemon_cobalion_normalEntry;
  "V0639_POKEMON_TERRAKION": V0639_pokemon_terrakionEntry;
  "V0639_POKEMON_TERRAKION_NORMAL": V0639_pokemon_terrakion_normalEntry;
  "V0640_POKEMON_VIRIZION": V0640_pokemon_virizionEntry;
  "V0640_POKEMON_VIRIZION_NORMAL": V0640_pokemon_virizion_normalEntry;
  "V0641_POKEMON_TORNADUS": V0641_pokemon_tornadusEntry;
  "V0641_POKEMON_TORNADUS_INCARNATE": V0641_pokemon_tornadus_incarnateEntry;
  "V0641_POKEMON_TORNADUS_THERIAN": V0641_pokemon_tornadus_therianEntry;
  "V0642_POKEMON_THUNDURUS": V0642_pokemon_thundurusEntry;
  "V0642_POKEMON_THUNDURUS_INCARNATE": V0642_pokemon_thundurus_incarnateEntry;
  "V0642_POKEMON_THUNDURUS_THERIAN": V0642_pokemon_thundurus_therianEntry;
  "V0643_POKEMON_RESHIRAM": V0643_pokemon_reshiramEntry;
  "V0643_POKEMON_RESHIRAM_NORMAL": V0643_pokemon_reshiram_normalEntry;
  "V0644_POKEMON_ZEKROM": V0644_pokemon_zekromEntry;
  "V0644_POKEMON_ZEKROM_NORMAL": V0644_pokemon_zekrom_normalEntry;
  "V0645_POKEMON_LANDORUS": V0645_pokemon_landorusEntry;
  "V0645_POKEMON_LANDORUS_INCARNATE": V0645_pokemon_landorus_incarnateEntry;
  "V0645_POKEMON_LANDORUS_THERIAN": V0645_pokemon_landorus_therianEntry;
  "V0646_POKEMON_KYUREM": V0646_pokemon_kyuremEntry;
  "V0646_POKEMON_KYUREM_BLACK": V0646_pokemon_kyurem_blackEntry;
  "V0646_POKEMON_KYUREM_NORMAL": V0646_pokemon_kyurem_normalEntry;
  "V0646_POKEMON_KYUREM_WHITE": V0646_pokemon_kyurem_whiteEntry;
  "V0647_POKEMON_KELDEO": V0647_pokemon_keldeoEntry;
  "V0647_POKEMON_KELDEO_ORDINARY": V0647_pokemon_keldeo_ordinaryEntry;
  "V0647_POKEMON_KELDEO_RESOLUTE": V0647_pokemon_keldeo_resoluteEntry;
  "V0648_POKEMON_MELOETTA": V0648_pokemon_meloettaEntry;
  "V0648_POKEMON_MELOETTA_ARIA": V0648_pokemon_meloetta_ariaEntry;
  "V0648_POKEMON_MELOETTA_PIROUETTE": V0648_pokemon_meloetta_pirouetteEntry;
  "V0649_POKEMON_GENESECT": V0649_pokemon_genesectEntry;
  "V0649_POKEMON_GENESECT_BURN": V0649_pokemon_genesect_burnEntry;
  "V0649_POKEMON_GENESECT_CHILL": V0649_pokemon_genesect_chillEntry;
  "V0649_POKEMON_GENESECT_DOUSE": V0649_pokemon_genesect_douseEntry;
  "V0649_POKEMON_GENESECT_NORMAL": V0649_pokemon_genesect_normalEntry;
  "V0649_POKEMON_GENESECT_SHOCK": V0649_pokemon_genesect_shockEntry;
}

export interface PokemonSettingsGen5ByDexId {
  "0494": V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry;
  "0495": V0495_pokemon_snivyEntry | V0495_pokemon_snivy_normalEntry;
  "0496": V0496_pokemon_servineEntry | V0496_pokemon_servine_normalEntry;
  "0497": V0497_pokemon_serperiorEntry | V0497_pokemon_serperior_normalEntry;
  "0498": V0498_pokemon_tepigEntry | V0498_pokemon_tepig_normalEntry;
  "0499": V0499_pokemon_pigniteEntry | V0499_pokemon_pignite_normalEntry;
  "0500": V0500_pokemon_emboarEntry | V0500_pokemon_emboar_normalEntry;
  "0501": V0501_pokemon_oshawottEntry | V0501_pokemon_oshawott_normalEntry;
  "0502": V0502_pokemon_dewottEntry | V0502_pokemon_dewott_normalEntry;
  "0503": V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry;
  "0504": V0504_pokemon_patratEntry | V0504_pokemon_patrat_normalEntry;
  "0505": V0505_pokemon_watchogEntry | V0505_pokemon_watchog_normalEntry;
  "0506": V0506_pokemon_lillipupEntry | V0506_pokemon_lillipup_normalEntry;
  "0507": V0507_pokemon_herdierEntry | V0507_pokemon_herdier_normalEntry;
  "0508": V0508_pokemon_stoutlandEntry | V0508_pokemon_stoutland_normalEntry;
  "0509": V0509_pokemon_purrloinEntry | V0509_pokemon_purrloin_normalEntry;
  "0510": V0510_pokemon_liepardEntry | V0510_pokemon_liepard_normalEntry;
  "0511": V0511_pokemon_pansageEntry | V0511_pokemon_pansage_normalEntry;
  "0512": V0512_pokemon_simisageEntry | V0512_pokemon_simisage_normalEntry;
  "0513": V0513_pokemon_pansearEntry | V0513_pokemon_pansear_normalEntry;
  "0514": V0514_pokemon_simisearEntry | V0514_pokemon_simisear_normalEntry;
  "0515": V0515_pokemon_panpourEntry | V0515_pokemon_panpour_normalEntry;
  "0516": V0516_pokemon_simipourEntry | V0516_pokemon_simipour_normalEntry;
  "0517": V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry;
  "0518": V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry;
  "0519": V0519_pokemon_pidoveEntry | V0519_pokemon_pidove_normalEntry;
  "0520": V0520_pokemon_tranquillEntry | V0520_pokemon_tranquill_normalEntry;
  "0521": V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry;
  "0522": V0522_pokemon_blitzleEntry | V0522_pokemon_blitzle_normalEntry;
  "0523": V0523_pokemon_zebstrikaEntry | V0523_pokemon_zebstrika_normalEntry;
  "0524": V0524_pokemon_roggenrolaEntry | V0524_pokemon_roggenrola_normalEntry;
  "0525": V0525_pokemon_boldoreEntry | V0525_pokemon_boldore_normalEntry;
  "0526": V0526_pokemon_gigalithEntry | V0526_pokemon_gigalith_normalEntry;
  "0527": V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry;
  "0528": V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry;
  "0529": V0529_pokemon_drilburEntry | V0529_pokemon_drilbur_normalEntry;
  "0530": V0530_pokemon_excadrillEntry | V0530_pokemon_excadrill_normalEntry;
  "0531": V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry;
  "0532": V0532_pokemon_timburrEntry | V0532_pokemon_timburr_normalEntry;
  "0533": V0533_pokemon_gurdurrEntry | V0533_pokemon_gurdurr_normalEntry;
  "0534": V0534_pokemon_conkeldurrEntry | V0534_pokemon_conkeldurr_normalEntry;
  "0535": V0535_pokemon_tympoleEntry | V0535_pokemon_tympole_normalEntry;
  "0536": V0536_pokemon_palpitoadEntry | V0536_pokemon_palpitoad_normalEntry;
  "0537": V0537_pokemon_seismitoadEntry | V0537_pokemon_seismitoad_normalEntry;
  "0538": V0538_pokemon_throhEntry | V0538_pokemon_throh_normalEntry;
  "0539": V0539_pokemon_sawkEntry | V0539_pokemon_sawk_normalEntry;
  "0540": V0540_pokemon_sewaddleEntry | V0540_pokemon_sewaddle_normalEntry;
  "0541": V0541_pokemon_swadloonEntry | V0541_pokemon_swadloon_normalEntry;
  "0542": V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry;
  "0543": V0543_pokemon_venipedeEntry | V0543_pokemon_venipede_normalEntry;
  "0544": V0544_pokemon_whirlipedeEntry | V0544_pokemon_whirlipede_normalEntry;
  "0545": V0545_pokemon_scolipedeEntry | V0545_pokemon_scolipede_normalEntry;
  "0546": V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry;
  "0547": V0547_pokemon_whimsicottEntry | V0547_pokemon_whimsicott_normalEntry;
  "0548": V0548_pokemon_petililEntry | V0548_pokemon_petilil_normalEntry;
  "0549": V0549_pokemon_lilligantEntry | V0549_pokemon_lilligant_hisuianEntry | V0549_pokemon_lilligant_normalEntry;
  "0550": V0550_pokemon_basculinEntry | V0550_pokemon_basculin_blue_stripedEntry | V0550_pokemon_basculin_red_stripedEntry | V0550_pokemon_basculin_white_stripedEntry;
  "0551": V0551_pokemon_sandileEntry | V0551_pokemon_sandile_normalEntry;
  "0552": V0552_pokemon_krokorokEntry | V0552_pokemon_krokorok_normalEntry;
  "0553": V0553_pokemon_krookodileEntry | V0553_pokemon_krookodile_normalEntry;
  "0554": V0554_pokemon_darumakaEntry | V0554_pokemon_darumaka_galarianEntry | V0554_pokemon_darumaka_normalEntry;
  "0555": V0555_pokemon_darmanitanEntry | V0555_pokemon_darmanitan_galarian_standardEntry | V0555_pokemon_darmanitan_galarian_zenEntry | V0555_pokemon_darmanitan_standardEntry | V0555_pokemon_darmanitan_zenEntry;
  "0556": V0556_pokemon_maractusEntry | V0556_pokemon_maractus_normalEntry;
  "0557": V0557_pokemon_dwebbleEntry | V0557_pokemon_dwebble_normalEntry;
  "0558": V0558_pokemon_crustleEntry | V0558_pokemon_crustle_normalEntry;
  "0559": V0559_pokemon_scraggyEntry | V0559_pokemon_scraggy_normalEntry;
  "0560": V0560_pokemon_scraftyEntry | V0560_pokemon_scrafty_normalEntry;
  "0561": V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry;
  "0562": V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry;
  "0563": V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry;
  "0564": V0564_pokemon_tirtougaEntry | V0564_pokemon_tirtouga_normalEntry;
  "0565": V0565_pokemon_carracostaEntry | V0565_pokemon_carracosta_normalEntry;
  "0566": V0566_pokemon_archenEntry | V0566_pokemon_archen_normalEntry;
  "0567": V0567_pokemon_archeopsEntry | V0567_pokemon_archeops_normalEntry;
  "0568": V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry;
  "0569": V0569_pokemon_garbodorEntry | V0569_pokemon_garbodor_normalEntry;
  "0570": V0570_pokemon_zoruaEntry | V0570_pokemon_zorua_hisuianEntry | V0570_pokemon_zorua_normalEntry;
  "0571": V0571_pokemon_zoroarkEntry | V0571_pokemon_zoroark_hisuianEntry | V0571_pokemon_zoroark_normalEntry;
  "0572": V0572_pokemon_minccinoEntry | V0572_pokemon_minccino_normalEntry;
  "0573": V0573_pokemon_cinccinoEntry | V0573_pokemon_cinccino_normalEntry;
  "0574": V0574_pokemon_gothitaEntry | V0574_pokemon_gothita_normalEntry;
  "0575": V0575_pokemon_gothoritaEntry | V0575_pokemon_gothorita_normalEntry;
  "0576": V0576_pokemon_gothitelleEntry | V0576_pokemon_gothitelle_normalEntry;
  "0577": V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry;
  "0578": V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry;
  "0579": V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry;
  "0580": V0580_pokemon_ducklettEntry | V0580_pokemon_ducklett_normalEntry;
  "0581": V0581_pokemon_swannaEntry | V0581_pokemon_swanna_normalEntry;
  "0582": V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry;
  "0583": V0583_pokemon_vanillishEntry | V0583_pokemon_vanillish_normalEntry;
  "0584": V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry;
  "0585": V0585_pokemon_deerlingEntry | V0585_pokemon_deerling_autumnEntry | V0585_pokemon_deerling_springEntry | V0585_pokemon_deerling_summerEntry | V0585_pokemon_deerling_winterEntry;
  "0586": V0586_pokemon_sawsbuckEntry | V0586_pokemon_sawsbuck_autumnEntry | V0586_pokemon_sawsbuck_springEntry | V0586_pokemon_sawsbuck_summerEntry | V0586_pokemon_sawsbuck_winterEntry;
  "0587": V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry;
  "0588": V0588_pokemon_karrablastEntry | V0588_pokemon_karrablast_normalEntry;
  "0589": V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry;
  "0590": V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry;
  "0591": V0591_pokemon_amoongussEntry | V0591_pokemon_amoonguss_normalEntry;
  "0592": V0592_pokemon_frillishEntry | V0592_pokemon_frillish_femaleEntry | V0592_pokemon_frillish_normalEntry;
  "0593": V0593_pokemon_jellicentEntry | V0593_pokemon_jellicent_femaleEntry | V0593_pokemon_jellicent_normalEntry;
  "0594": V0594_pokemon_alomomolaEntry | V0594_pokemon_alomomola_normalEntry;
  "0595": V0595_pokemon_joltikEntry | V0595_pokemon_joltik_normalEntry;
  "0596": V0596_pokemon_galvantulaEntry | V0596_pokemon_galvantula_normalEntry;
  "0597": V0597_pokemon_ferroseedEntry | V0597_pokemon_ferroseed_normalEntry;
  "0598": V0598_pokemon_ferrothornEntry | V0598_pokemon_ferrothorn_normalEntry;
  "0599": V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry;
  "0600": V0600_pokemon_klangEntry | V0600_pokemon_klang_normalEntry;
  "0601": V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry;
  "0602": V0602_pokemon_tynamoEntry | V0602_pokemon_tynamo_normalEntry;
  "0603": V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry;
  "0604": V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry;
  "0605": V0605_pokemon_elgyemEntry | V0605_pokemon_elgyem_normalEntry;
  "0606": V0606_pokemon_beheeyemEntry | V0606_pokemon_beheeyem_normalEntry;
  "0607": V0607_pokemon_litwickEntry | V0607_pokemon_litwick_normalEntry;
  "0608": V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry;
  "0609": V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry;
  "0610": V0610_pokemon_axewEntry | V0610_pokemon_axew_normalEntry;
  "0611": V0611_pokemon_fraxureEntry | V0611_pokemon_fraxure_normalEntry;
  "0612": V0612_pokemon_haxorusEntry | V0612_pokemon_haxorus_normalEntry;
  "0613": V0613_pokemon_cubchooEntry | V0613_pokemon_cubchoo_normalEntry | V0613_pokemon_cubchoo_winter_2020Entry;
  "0614": V0614_pokemon_bearticEntry | V0614_pokemon_beartic_normalEntry | V0614_pokemon_beartic_winter_2020Entry;
  "0615": V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry;
  "0616": V0616_pokemon_shelmetEntry | V0616_pokemon_shelmet_normalEntry;
  "0617": V0617_pokemon_accelgorEntry | V0617_pokemon_accelgor_normalEntry;
  "0618": V0618_pokemon_stunfiskEntry | V0618_pokemon_stunfisk_galarianEntry | V0618_pokemon_stunfisk_normalEntry;
  "0619": V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry;
  "0620": V0620_pokemon_mienshaoEntry | V0620_pokemon_mienshao_normalEntry;
  "0621": V0621_pokemon_druddigonEntry | V0621_pokemon_druddigon_normalEntry;
  "0622": V0622_pokemon_golettEntry | V0622_pokemon_golett_normalEntry;
  "0623": V0623_pokemon_golurkEntry | V0623_pokemon_golurk_normalEntry;
  "0624": V0624_pokemon_pawniardEntry | V0624_pokemon_pawniard_normalEntry;
  "0625": V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry;
  "0626": V0626_pokemon_bouffalantEntry | V0626_pokemon_bouffalant_normalEntry;
  "0627": V0627_pokemon_ruffletEntry | V0627_pokemon_rufflet_normalEntry;
  "0628": V0628_pokemon_braviaryEntry | V0628_pokemon_braviary_hisuianEntry | V0628_pokemon_braviary_normalEntry;
  "0629": V0629_pokemon_vullabyEntry | V0629_pokemon_vullaby_normalEntry;
  "0630": V0630_pokemon_mandibuzzEntry | V0630_pokemon_mandibuzz_normalEntry;
  "0631": V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry;
  "0632": V0632_pokemon_durantEntry | V0632_pokemon_durant_normalEntry;
  "0633": V0633_pokemon_deinoEntry | V0633_pokemon_deino_normalEntry;
  "0634": V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry;
  "0635": V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry;
  "0636": V0636_pokemon_larvestaEntry | V0636_pokemon_larvesta_normalEntry;
  "0637": V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry;
  "0638": V0638_pokemon_cobalionEntry | V0638_pokemon_cobalion_normalEntry;
  "0639": V0639_pokemon_terrakionEntry | V0639_pokemon_terrakion_normalEntry;
  "0640": V0640_pokemon_virizionEntry | V0640_pokemon_virizion_normalEntry;
  "0641": V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry;
  "0642": V0642_pokemon_thundurusEntry | V0642_pokemon_thundurus_incarnateEntry | V0642_pokemon_thundurus_therianEntry;
  "0643": V0643_pokemon_reshiramEntry | V0643_pokemon_reshiram_normalEntry;
  "0644": V0644_pokemon_zekromEntry | V0644_pokemon_zekrom_normalEntry;
  "0645": V0645_pokemon_landorusEntry | V0645_pokemon_landorus_incarnateEntry | V0645_pokemon_landorus_therianEntry;
  "0646": V0646_pokemon_kyuremEntry | V0646_pokemon_kyurem_blackEntry | V0646_pokemon_kyurem_normalEntry | V0646_pokemon_kyurem_whiteEntry;
  "0647": V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry;
  "0648": V0648_pokemon_meloettaEntry | V0648_pokemon_meloetta_ariaEntry | V0648_pokemon_meloetta_pirouetteEntry;
  "0649": V0649_pokemon_genesectEntry | V0649_pokemon_genesect_burnEntry | V0649_pokemon_genesect_chillEntry | V0649_pokemon_genesect_douseEntry | V0649_pokemon_genesect_normalEntry | V0649_pokemon_genesect_shockEntry;
}

export interface PokemonSettingsGen5ByPokemonId {
  "ACCELGOR": V0617_pokemon_accelgorEntry | V0617_pokemon_accelgor_normalEntry;
  "ALOMOMOLA": V0594_pokemon_alomomolaEntry | V0594_pokemon_alomomola_normalEntry;
  "AMOONGUSS": V0591_pokemon_amoongussEntry | V0591_pokemon_amoonguss_normalEntry;
  "ARCHEN": V0566_pokemon_archenEntry | V0566_pokemon_archen_normalEntry;
  "ARCHEOPS": V0567_pokemon_archeopsEntry | V0567_pokemon_archeops_normalEntry;
  "AUDINO": V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry;
  "AXEW": V0610_pokemon_axewEntry | V0610_pokemon_axew_normalEntry;
  "BASCULIN": V0550_pokemon_basculinEntry | V0550_pokemon_basculin_blue_stripedEntry | V0550_pokemon_basculin_red_stripedEntry | V0550_pokemon_basculin_white_stripedEntry;
  "BEARTIC": V0614_pokemon_bearticEntry | V0614_pokemon_beartic_normalEntry | V0614_pokemon_beartic_winter_2020Entry;
  "BEHEEYEM": V0606_pokemon_beheeyemEntry | V0606_pokemon_beheeyem_normalEntry;
  "BISHARP": V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry;
  "BLITZLE": V0522_pokemon_blitzleEntry | V0522_pokemon_blitzle_normalEntry;
  "BOLDORE": V0525_pokemon_boldoreEntry | V0525_pokemon_boldore_normalEntry;
  "BOUFFALANT": V0626_pokemon_bouffalantEntry | V0626_pokemon_bouffalant_normalEntry;
  "BRAVIARY": V0628_pokemon_braviaryEntry | V0628_pokemon_braviary_hisuianEntry | V0628_pokemon_braviary_normalEntry;
  "CARRACOSTA": V0565_pokemon_carracostaEntry | V0565_pokemon_carracosta_normalEntry;
  "CHANDELURE": V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry;
  "CINCCINO": V0573_pokemon_cinccinoEntry | V0573_pokemon_cinccino_normalEntry;
  "COBALION": V0638_pokemon_cobalionEntry | V0638_pokemon_cobalion_normalEntry;
  "COFAGRIGUS": V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry;
  "CONKELDURR": V0534_pokemon_conkeldurrEntry | V0534_pokemon_conkeldurr_normalEntry;
  "COTTONEE": V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry;
  "CRUSTLE": V0558_pokemon_crustleEntry | V0558_pokemon_crustle_normalEntry;
  "CRYOGONAL": V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry;
  "CUBCHOO": V0613_pokemon_cubchooEntry | V0613_pokemon_cubchoo_normalEntry | V0613_pokemon_cubchoo_winter_2020Entry;
  "DARMANITAN": V0555_pokemon_darmanitanEntry | V0555_pokemon_darmanitan_galarian_standardEntry | V0555_pokemon_darmanitan_galarian_zenEntry | V0555_pokemon_darmanitan_standardEntry | V0555_pokemon_darmanitan_zenEntry;
  "DARUMAKA": V0554_pokemon_darumakaEntry | V0554_pokemon_darumaka_galarianEntry | V0554_pokemon_darumaka_normalEntry;
  "DEERLING": V0585_pokemon_deerlingEntry | V0585_pokemon_deerling_autumnEntry | V0585_pokemon_deerling_springEntry | V0585_pokemon_deerling_summerEntry | V0585_pokemon_deerling_winterEntry;
  "DEINO": V0633_pokemon_deinoEntry | V0633_pokemon_deino_normalEntry;
  "DEWOTT": V0502_pokemon_dewottEntry | V0502_pokemon_dewott_normalEntry;
  "DRILBUR": V0529_pokemon_drilburEntry | V0529_pokemon_drilbur_normalEntry;
  "DRUDDIGON": V0621_pokemon_druddigonEntry | V0621_pokemon_druddigon_normalEntry;
  "DUCKLETT": V0580_pokemon_ducklettEntry | V0580_pokemon_ducklett_normalEntry;
  "DUOSION": V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry;
  "DURANT": V0632_pokemon_durantEntry | V0632_pokemon_durant_normalEntry;
  "DWEBBLE": V0557_pokemon_dwebbleEntry | V0557_pokemon_dwebble_normalEntry;
  "EELEKTRIK": V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry;
  "EELEKTROSS": V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry;
  "ELGYEM": V0605_pokemon_elgyemEntry | V0605_pokemon_elgyem_normalEntry;
  "EMBOAR": V0500_pokemon_emboarEntry | V0500_pokemon_emboar_normalEntry;
  "EMOLGA": V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry;
  "ESCAVALIER": V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry;
  "EXCADRILL": V0530_pokemon_excadrillEntry | V0530_pokemon_excadrill_normalEntry;
  "FERROSEED": V0597_pokemon_ferroseedEntry | V0597_pokemon_ferroseed_normalEntry;
  "FERROTHORN": V0598_pokemon_ferrothornEntry | V0598_pokemon_ferrothorn_normalEntry;
  "FOONGUS": V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry;
  "FRAXURE": V0611_pokemon_fraxureEntry | V0611_pokemon_fraxure_normalEntry;
  "FRILLISH": V0592_pokemon_frillishEntry | V0592_pokemon_frillish_femaleEntry | V0592_pokemon_frillish_normalEntry;
  "GALVANTULA": V0596_pokemon_galvantulaEntry | V0596_pokemon_galvantula_normalEntry;
  "GARBODOR": V0569_pokemon_garbodorEntry | V0569_pokemon_garbodor_normalEntry;
  "GENESECT": V0649_pokemon_genesectEntry | V0649_pokemon_genesect_burnEntry | V0649_pokemon_genesect_chillEntry | V0649_pokemon_genesect_douseEntry | V0649_pokemon_genesect_normalEntry | V0649_pokemon_genesect_shockEntry;
  "GIGALITH": V0526_pokemon_gigalithEntry | V0526_pokemon_gigalith_normalEntry;
  "GOLETT": V0622_pokemon_golettEntry | V0622_pokemon_golett_normalEntry;
  "GOLURK": V0623_pokemon_golurkEntry | V0623_pokemon_golurk_normalEntry;
  "GOTHITA": V0574_pokemon_gothitaEntry | V0574_pokemon_gothita_normalEntry;
  "GOTHITELLE": V0576_pokemon_gothitelleEntry | V0576_pokemon_gothitelle_normalEntry;
  "GOTHORITA": V0575_pokemon_gothoritaEntry | V0575_pokemon_gothorita_normalEntry;
  "GURDURR": V0533_pokemon_gurdurrEntry | V0533_pokemon_gurdurr_normalEntry;
  "HAXORUS": V0612_pokemon_haxorusEntry | V0612_pokemon_haxorus_normalEntry;
  "HEATMOR": V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry;
  "HERDIER": V0507_pokemon_herdierEntry | V0507_pokemon_herdier_normalEntry;
  "HYDREIGON": V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry;
  "JELLICENT": V0593_pokemon_jellicentEntry | V0593_pokemon_jellicent_femaleEntry | V0593_pokemon_jellicent_normalEntry;
  "JOLTIK": V0595_pokemon_joltikEntry | V0595_pokemon_joltik_normalEntry;
  "KARRABLAST": V0588_pokemon_karrablastEntry | V0588_pokemon_karrablast_normalEntry;
  "KELDEO": V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry;
  "KLANG": V0600_pokemon_klangEntry | V0600_pokemon_klang_normalEntry;
  "KLINK": V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry;
  "KLINKLANG": V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry;
  "KROKOROK": V0552_pokemon_krokorokEntry | V0552_pokemon_krokorok_normalEntry;
  "KROOKODILE": V0553_pokemon_krookodileEntry | V0553_pokemon_krookodile_normalEntry;
  "KYUREM": V0646_pokemon_kyuremEntry | V0646_pokemon_kyurem_blackEntry | V0646_pokemon_kyurem_normalEntry | V0646_pokemon_kyurem_whiteEntry;
  "LAMPENT": V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry;
  "LANDORUS": V0645_pokemon_landorusEntry | V0645_pokemon_landorus_incarnateEntry | V0645_pokemon_landorus_therianEntry;
  "LARVESTA": V0636_pokemon_larvestaEntry | V0636_pokemon_larvesta_normalEntry;
  "LEAVANNY": V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry;
  "LIEPARD": V0510_pokemon_liepardEntry | V0510_pokemon_liepard_normalEntry;
  "LILLIGANT": V0549_pokemon_lilligantEntry | V0549_pokemon_lilligant_hisuianEntry | V0549_pokemon_lilligant_normalEntry;
  "LILLIPUP": V0506_pokemon_lillipupEntry | V0506_pokemon_lillipup_normalEntry;
  "LITWICK": V0607_pokemon_litwickEntry | V0607_pokemon_litwick_normalEntry;
  "MANDIBUZZ": V0630_pokemon_mandibuzzEntry | V0630_pokemon_mandibuzz_normalEntry;
  "MARACTUS": V0556_pokemon_maractusEntry | V0556_pokemon_maractus_normalEntry;
  "MELOETTA": V0648_pokemon_meloettaEntry | V0648_pokemon_meloetta_ariaEntry | V0648_pokemon_meloetta_pirouetteEntry;
  "MIENFOO": V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry;
  "MIENSHAO": V0620_pokemon_mienshaoEntry | V0620_pokemon_mienshao_normalEntry;
  "MINCCINO": V0572_pokemon_minccinoEntry | V0572_pokemon_minccino_normalEntry;
  "MUNNA": V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry;
  "MUSHARNA": V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry;
  "OSHAWOTT": V0501_pokemon_oshawottEntry | V0501_pokemon_oshawott_normalEntry;
  "PALPITOAD": V0536_pokemon_palpitoadEntry | V0536_pokemon_palpitoad_normalEntry;
  "PANPOUR": V0515_pokemon_panpourEntry | V0515_pokemon_panpour_normalEntry;
  "PANSAGE": V0511_pokemon_pansageEntry | V0511_pokemon_pansage_normalEntry;
  "PANSEAR": V0513_pokemon_pansearEntry | V0513_pokemon_pansear_normalEntry;
  "PATRAT": V0504_pokemon_patratEntry | V0504_pokemon_patrat_normalEntry;
  "PAWNIARD": V0624_pokemon_pawniardEntry | V0624_pokemon_pawniard_normalEntry;
  "PETILIL": V0548_pokemon_petililEntry | V0548_pokemon_petilil_normalEntry;
  "PIDOVE": V0519_pokemon_pidoveEntry | V0519_pokemon_pidove_normalEntry;
  "PIGNITE": V0499_pokemon_pigniteEntry | V0499_pokemon_pignite_normalEntry;
  "PURRLOIN": V0509_pokemon_purrloinEntry | V0509_pokemon_purrloin_normalEntry;
  "RESHIRAM": V0643_pokemon_reshiramEntry | V0643_pokemon_reshiram_normalEntry;
  "REUNICLUS": V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry;
  "ROGGENROLA": V0524_pokemon_roggenrolaEntry | V0524_pokemon_roggenrola_normalEntry;
  "RUFFLET": V0627_pokemon_ruffletEntry | V0627_pokemon_rufflet_normalEntry;
  "SAMUROTT": V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry;
  "SANDILE": V0551_pokemon_sandileEntry | V0551_pokemon_sandile_normalEntry;
  "SAWK": V0539_pokemon_sawkEntry | V0539_pokemon_sawk_normalEntry;
  "SAWSBUCK": V0586_pokemon_sawsbuckEntry | V0586_pokemon_sawsbuck_autumnEntry | V0586_pokemon_sawsbuck_springEntry | V0586_pokemon_sawsbuck_summerEntry | V0586_pokemon_sawsbuck_winterEntry;
  "SCOLIPEDE": V0545_pokemon_scolipedeEntry | V0545_pokemon_scolipede_normalEntry;
  "SCRAFTY": V0560_pokemon_scraftyEntry | V0560_pokemon_scrafty_normalEntry;
  "SCRAGGY": V0559_pokemon_scraggyEntry | V0559_pokemon_scraggy_normalEntry;
  "SEISMITOAD": V0537_pokemon_seismitoadEntry | V0537_pokemon_seismitoad_normalEntry;
  "SERPERIOR": V0497_pokemon_serperiorEntry | V0497_pokemon_serperior_normalEntry;
  "SERVINE": V0496_pokemon_servineEntry | V0496_pokemon_servine_normalEntry;
  "SEWADDLE": V0540_pokemon_sewaddleEntry | V0540_pokemon_sewaddle_normalEntry;
  "SHELMET": V0616_pokemon_shelmetEntry | V0616_pokemon_shelmet_normalEntry;
  "SIGILYPH": V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry;
  "SIMIPOUR": V0516_pokemon_simipourEntry | V0516_pokemon_simipour_normalEntry;
  "SIMISAGE": V0512_pokemon_simisageEntry | V0512_pokemon_simisage_normalEntry;
  "SIMISEAR": V0514_pokemon_simisearEntry | V0514_pokemon_simisear_normalEntry;
  "SNIVY": V0495_pokemon_snivyEntry | V0495_pokemon_snivy_normalEntry;
  "SOLOSIS": V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry;
  "STOUTLAND": V0508_pokemon_stoutlandEntry | V0508_pokemon_stoutland_normalEntry;
  "STUNFISK": V0618_pokemon_stunfiskEntry | V0618_pokemon_stunfisk_galarianEntry | V0618_pokemon_stunfisk_normalEntry;
  "SWADLOON": V0541_pokemon_swadloonEntry | V0541_pokemon_swadloon_normalEntry;
  "SWANNA": V0581_pokemon_swannaEntry | V0581_pokemon_swanna_normalEntry;
  "SWOOBAT": V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry;
  "TEPIG": V0498_pokemon_tepigEntry | V0498_pokemon_tepig_normalEntry;
  "TERRAKION": V0639_pokemon_terrakionEntry | V0639_pokemon_terrakion_normalEntry;
  "THROH": V0538_pokemon_throhEntry | V0538_pokemon_throh_normalEntry;
  "THUNDURUS": V0642_pokemon_thundurusEntry | V0642_pokemon_thundurus_incarnateEntry | V0642_pokemon_thundurus_therianEntry;
  "TIMBURR": V0532_pokemon_timburrEntry | V0532_pokemon_timburr_normalEntry;
  "TIRTOUGA": V0564_pokemon_tirtougaEntry | V0564_pokemon_tirtouga_normalEntry;
  "TORNADUS": V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry;
  "TRANQUILL": V0520_pokemon_tranquillEntry | V0520_pokemon_tranquill_normalEntry;
  "TRUBBISH": V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry;
  "TYMPOLE": V0535_pokemon_tympoleEntry | V0535_pokemon_tympole_normalEntry;
  "TYNAMO": V0602_pokemon_tynamoEntry | V0602_pokemon_tynamo_normalEntry;
  "UNFEZANT": V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry;
  "VANILLISH": V0583_pokemon_vanillishEntry | V0583_pokemon_vanillish_normalEntry;
  "VANILLITE": V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry;
  "VANILLUXE": V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry;
  "VENIPEDE": V0543_pokemon_venipedeEntry | V0543_pokemon_venipede_normalEntry;
  "VICTINI": V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry;
  "VIRIZION": V0640_pokemon_virizionEntry | V0640_pokemon_virizion_normalEntry;
  "VOLCARONA": V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry;
  "VULLABY": V0629_pokemon_vullabyEntry | V0629_pokemon_vullaby_normalEntry;
  "WATCHOG": V0505_pokemon_watchogEntry | V0505_pokemon_watchog_normalEntry;
  "WHIMSICOTT": V0547_pokemon_whimsicottEntry | V0547_pokemon_whimsicott_normalEntry;
  "WHIRLIPEDE": V0544_pokemon_whirlipedeEntry | V0544_pokemon_whirlipede_normalEntry;
  "WOOBAT": V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry;
  "YAMASK": V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry;
  "ZEBSTRIKA": V0523_pokemon_zebstrikaEntry | V0523_pokemon_zebstrika_normalEntry;
  "ZEKROM": V0644_pokemon_zekromEntry | V0644_pokemon_zekrom_normalEntry;
  "ZOROARK": V0571_pokemon_zoroarkEntry | V0571_pokemon_zoroark_hisuianEntry | V0571_pokemon_zoroark_normalEntry;
  "ZORUA": V0570_pokemon_zoruaEntry | V0570_pokemon_zorua_hisuianEntry | V0570_pokemon_zorua_normalEntry;
  "ZWEILOUS": V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry;
}

export type PokemonSettingsGen5MasterfileEntry = V0494_pokemon_victiniEntry | V0494_pokemon_victini_normalEntry | V0495_pokemon_snivyEntry | V0495_pokemon_snivy_normalEntry | V0496_pokemon_servineEntry | V0496_pokemon_servine_normalEntry | V0497_pokemon_serperiorEntry | V0497_pokemon_serperior_normalEntry | V0498_pokemon_tepigEntry | V0498_pokemon_tepig_normalEntry | V0499_pokemon_pigniteEntry | V0499_pokemon_pignite_normalEntry | V0500_pokemon_emboarEntry | V0500_pokemon_emboar_normalEntry | V0501_pokemon_oshawottEntry | V0501_pokemon_oshawott_normalEntry | V0502_pokemon_dewottEntry | V0502_pokemon_dewott_normalEntry | V0503_pokemon_samurottEntry | V0503_pokemon_samurott_hisuianEntry | V0503_pokemon_samurott_normalEntry | V0504_pokemon_patratEntry | V0504_pokemon_patrat_normalEntry | V0505_pokemon_watchogEntry | V0505_pokemon_watchog_normalEntry | V0506_pokemon_lillipupEntry | V0506_pokemon_lillipup_normalEntry | V0507_pokemon_herdierEntry | V0507_pokemon_herdier_normalEntry | V0508_pokemon_stoutlandEntry | V0508_pokemon_stoutland_normalEntry | V0509_pokemon_purrloinEntry | V0509_pokemon_purrloin_normalEntry | V0510_pokemon_liepardEntry | V0510_pokemon_liepard_normalEntry | V0511_pokemon_pansageEntry | V0511_pokemon_pansage_normalEntry | V0512_pokemon_simisageEntry | V0512_pokemon_simisage_normalEntry | V0513_pokemon_pansearEntry | V0513_pokemon_pansear_normalEntry | V0514_pokemon_simisearEntry | V0514_pokemon_simisear_normalEntry | V0515_pokemon_panpourEntry | V0515_pokemon_panpour_normalEntry | V0516_pokemon_simipourEntry | V0516_pokemon_simipour_normalEntry | V0517_pokemon_munnaEntry | V0517_pokemon_munna_normalEntry | V0518_pokemon_musharnaEntry | V0518_pokemon_musharna_normalEntry | V0519_pokemon_pidoveEntry | V0519_pokemon_pidove_normalEntry | V0520_pokemon_tranquillEntry | V0520_pokemon_tranquill_normalEntry | V0521_pokemon_unfezantEntry | V0521_pokemon_unfezant_normalEntry | V0522_pokemon_blitzleEntry | V0522_pokemon_blitzle_normalEntry | V0523_pokemon_zebstrikaEntry | V0523_pokemon_zebstrika_normalEntry | V0524_pokemon_roggenrolaEntry | V0524_pokemon_roggenrola_normalEntry | V0525_pokemon_boldoreEntry | V0525_pokemon_boldore_normalEntry | V0526_pokemon_gigalithEntry | V0526_pokemon_gigalith_normalEntry | V0527_pokemon_woobatEntry | V0527_pokemon_woobat_normalEntry | V0528_pokemon_swoobatEntry | V0528_pokemon_swoobat_normalEntry | V0529_pokemon_drilburEntry | V0529_pokemon_drilbur_normalEntry | V0530_pokemon_excadrillEntry | V0530_pokemon_excadrill_normalEntry | V0531_pokemon_audinoEntry | V0531_pokemon_audino_normalEntry | V0532_pokemon_timburrEntry | V0532_pokemon_timburr_normalEntry | V0533_pokemon_gurdurrEntry | V0533_pokemon_gurdurr_normalEntry | V0534_pokemon_conkeldurrEntry | V0534_pokemon_conkeldurr_normalEntry | V0535_pokemon_tympoleEntry | V0535_pokemon_tympole_normalEntry | V0536_pokemon_palpitoadEntry | V0536_pokemon_palpitoad_normalEntry | V0537_pokemon_seismitoadEntry | V0537_pokemon_seismitoad_normalEntry | V0538_pokemon_throhEntry | V0538_pokemon_throh_normalEntry | V0539_pokemon_sawkEntry | V0539_pokemon_sawk_normalEntry | V0540_pokemon_sewaddleEntry | V0540_pokemon_sewaddle_normalEntry | V0541_pokemon_swadloonEntry | V0541_pokemon_swadloon_normalEntry | V0542_pokemon_leavannyEntry | V0542_pokemon_leavanny_normalEntry | V0543_pokemon_venipedeEntry | V0543_pokemon_venipede_normalEntry | V0544_pokemon_whirlipedeEntry | V0544_pokemon_whirlipede_normalEntry | V0545_pokemon_scolipedeEntry | V0545_pokemon_scolipede_normalEntry | V0546_pokemon_cottoneeEntry | V0546_pokemon_cottonee_normalEntry | V0547_pokemon_whimsicottEntry | V0547_pokemon_whimsicott_normalEntry | V0548_pokemon_petililEntry | V0548_pokemon_petilil_normalEntry | V0549_pokemon_lilligantEntry | V0549_pokemon_lilligant_hisuianEntry | V0549_pokemon_lilligant_normalEntry | V0550_pokemon_basculinEntry | V0550_pokemon_basculin_blue_stripedEntry | V0550_pokemon_basculin_red_stripedEntry | V0550_pokemon_basculin_white_stripedEntry | V0551_pokemon_sandileEntry | V0551_pokemon_sandile_normalEntry | V0552_pokemon_krokorokEntry | V0552_pokemon_krokorok_normalEntry | V0553_pokemon_krookodileEntry | V0553_pokemon_krookodile_normalEntry | V0554_pokemon_darumakaEntry | V0554_pokemon_darumaka_galarianEntry | V0554_pokemon_darumaka_normalEntry | V0555_pokemon_darmanitanEntry | V0555_pokemon_darmanitan_galarian_standardEntry | V0555_pokemon_darmanitan_galarian_zenEntry | V0555_pokemon_darmanitan_standardEntry | V0555_pokemon_darmanitan_zenEntry | V0556_pokemon_maractusEntry | V0556_pokemon_maractus_normalEntry | V0557_pokemon_dwebbleEntry | V0557_pokemon_dwebble_normalEntry | V0558_pokemon_crustleEntry | V0558_pokemon_crustle_normalEntry | V0559_pokemon_scraggyEntry | V0559_pokemon_scraggy_normalEntry | V0560_pokemon_scraftyEntry | V0560_pokemon_scrafty_normalEntry | V0561_pokemon_sigilyphEntry | V0561_pokemon_sigilyph_normalEntry | V0562_pokemon_yamaskEntry | V0562_pokemon_yamask_galarianEntry | V0562_pokemon_yamask_normalEntry | V0563_pokemon_cofagrigusEntry | V0563_pokemon_cofagrigus_normalEntry | V0564_pokemon_tirtougaEntry | V0564_pokemon_tirtouga_normalEntry | V0565_pokemon_carracostaEntry | V0565_pokemon_carracosta_normalEntry | V0566_pokemon_archenEntry | V0566_pokemon_archen_normalEntry | V0567_pokemon_archeopsEntry | V0567_pokemon_archeops_normalEntry | V0568_pokemon_trubbishEntry | V0568_pokemon_trubbish_normalEntry | V0569_pokemon_garbodorEntry | V0569_pokemon_garbodor_normalEntry | V0570_pokemon_zoruaEntry | V0570_pokemon_zorua_hisuianEntry | V0570_pokemon_zorua_normalEntry | V0571_pokemon_zoroarkEntry | V0571_pokemon_zoroark_hisuianEntry | V0571_pokemon_zoroark_normalEntry | V0572_pokemon_minccinoEntry | V0572_pokemon_minccino_normalEntry | V0573_pokemon_cinccinoEntry | V0573_pokemon_cinccino_normalEntry | V0574_pokemon_gothitaEntry | V0574_pokemon_gothita_normalEntry | V0575_pokemon_gothoritaEntry | V0575_pokemon_gothorita_normalEntry | V0576_pokemon_gothitelleEntry | V0576_pokemon_gothitelle_normalEntry | V0577_pokemon_solosisEntry | V0577_pokemon_solosis_normalEntry | V0578_pokemon_duosionEntry | V0578_pokemon_duosion_normalEntry | V0579_pokemon_reuniclusEntry | V0579_pokemon_reuniclus_normalEntry | V0580_pokemon_ducklettEntry | V0580_pokemon_ducklett_normalEntry | V0581_pokemon_swannaEntry | V0581_pokemon_swanna_normalEntry | V0582_pokemon_vanilliteEntry | V0582_pokemon_vanillite_normalEntry | V0583_pokemon_vanillishEntry | V0583_pokemon_vanillish_normalEntry | V0584_pokemon_vanilluxeEntry | V0584_pokemon_vanilluxe_normalEntry | V0585_pokemon_deerlingEntry | V0585_pokemon_deerling_autumnEntry | V0585_pokemon_deerling_springEntry | V0585_pokemon_deerling_summerEntry | V0585_pokemon_deerling_winterEntry | V0586_pokemon_sawsbuckEntry | V0586_pokemon_sawsbuck_autumnEntry | V0586_pokemon_sawsbuck_springEntry | V0586_pokemon_sawsbuck_summerEntry | V0586_pokemon_sawsbuck_winterEntry | V0587_pokemon_emolgaEntry | V0587_pokemon_emolga_normalEntry | V0588_pokemon_karrablastEntry | V0588_pokemon_karrablast_normalEntry | V0589_pokemon_escavalierEntry | V0589_pokemon_escavalier_normalEntry | V0590_pokemon_foongusEntry | V0590_pokemon_foongus_normalEntry | V0591_pokemon_amoongussEntry | V0591_pokemon_amoonguss_normalEntry | V0592_pokemon_frillishEntry | V0592_pokemon_frillish_femaleEntry | V0592_pokemon_frillish_normalEntry | V0593_pokemon_jellicentEntry | V0593_pokemon_jellicent_femaleEntry | V0593_pokemon_jellicent_normalEntry | V0594_pokemon_alomomolaEntry | V0594_pokemon_alomomola_normalEntry | V0595_pokemon_joltikEntry | V0595_pokemon_joltik_normalEntry | V0596_pokemon_galvantulaEntry | V0596_pokemon_galvantula_normalEntry | V0597_pokemon_ferroseedEntry | V0597_pokemon_ferroseed_normalEntry | V0598_pokemon_ferrothornEntry | V0598_pokemon_ferrothorn_normalEntry | V0599_pokemon_klinkEntry | V0599_pokemon_klink_normalEntry | V0600_pokemon_klangEntry | V0600_pokemon_klang_normalEntry | V0601_pokemon_klinklangEntry | V0601_pokemon_klinklang_normalEntry | V0602_pokemon_tynamoEntry | V0602_pokemon_tynamo_normalEntry | V0603_pokemon_eelektrikEntry | V0603_pokemon_eelektrik_normalEntry | V0604_pokemon_eelektrossEntry | V0604_pokemon_eelektross_normalEntry | V0605_pokemon_elgyemEntry | V0605_pokemon_elgyem_normalEntry | V0606_pokemon_beheeyemEntry | V0606_pokemon_beheeyem_normalEntry | V0607_pokemon_litwickEntry | V0607_pokemon_litwick_normalEntry | V0608_pokemon_lampentEntry | V0608_pokemon_lampent_normalEntry | V0609_pokemon_chandelureEntry | V0609_pokemon_chandelure_normalEntry | V0610_pokemon_axewEntry | V0610_pokemon_axew_normalEntry | V0611_pokemon_fraxureEntry | V0611_pokemon_fraxure_normalEntry | V0612_pokemon_haxorusEntry | V0612_pokemon_haxorus_normalEntry | V0613_pokemon_cubchooEntry | V0613_pokemon_cubchoo_normalEntry | V0613_pokemon_cubchoo_winter_2020Entry | V0614_pokemon_bearticEntry | V0614_pokemon_beartic_normalEntry | V0614_pokemon_beartic_winter_2020Entry | V0615_pokemon_cryogonalEntry | V0615_pokemon_cryogonal_normalEntry | V0616_pokemon_shelmetEntry | V0616_pokemon_shelmet_normalEntry | V0617_pokemon_accelgorEntry | V0617_pokemon_accelgor_normalEntry | V0618_pokemon_stunfiskEntry | V0618_pokemon_stunfisk_galarianEntry | V0618_pokemon_stunfisk_normalEntry | V0619_pokemon_mienfooEntry | V0619_pokemon_mienfoo_normalEntry | V0620_pokemon_mienshaoEntry | V0620_pokemon_mienshao_normalEntry | V0621_pokemon_druddigonEntry | V0621_pokemon_druddigon_normalEntry | V0622_pokemon_golettEntry | V0622_pokemon_golett_normalEntry | V0623_pokemon_golurkEntry | V0623_pokemon_golurk_normalEntry | V0624_pokemon_pawniardEntry | V0624_pokemon_pawniard_normalEntry | V0625_pokemon_bisharpEntry | V0625_pokemon_bisharp_normalEntry | V0626_pokemon_bouffalantEntry | V0626_pokemon_bouffalant_normalEntry | V0627_pokemon_ruffletEntry | V0627_pokemon_rufflet_normalEntry | V0628_pokemon_braviaryEntry | V0628_pokemon_braviary_hisuianEntry | V0628_pokemon_braviary_normalEntry | V0629_pokemon_vullabyEntry | V0629_pokemon_vullaby_normalEntry | V0630_pokemon_mandibuzzEntry | V0630_pokemon_mandibuzz_normalEntry | V0631_pokemon_heatmorEntry | V0631_pokemon_heatmor_normalEntry | V0632_pokemon_durantEntry | V0632_pokemon_durant_normalEntry | V0633_pokemon_deinoEntry | V0633_pokemon_deino_normalEntry | V0634_pokemon_zweilousEntry | V0634_pokemon_zweilous_normalEntry | V0635_pokemon_hydreigonEntry | V0635_pokemon_hydreigon_normalEntry | V0636_pokemon_larvestaEntry | V0636_pokemon_larvesta_normalEntry | V0637_pokemon_volcaronaEntry | V0637_pokemon_volcarona_normalEntry | V0638_pokemon_cobalionEntry | V0638_pokemon_cobalion_normalEntry | V0639_pokemon_terrakionEntry | V0639_pokemon_terrakion_normalEntry | V0640_pokemon_virizionEntry | V0640_pokemon_virizion_normalEntry | V0641_pokemon_tornadusEntry | V0641_pokemon_tornadus_incarnateEntry | V0641_pokemon_tornadus_therianEntry | V0642_pokemon_thundurusEntry | V0642_pokemon_thundurus_incarnateEntry | V0642_pokemon_thundurus_therianEntry | V0643_pokemon_reshiramEntry | V0643_pokemon_reshiram_normalEntry | V0644_pokemon_zekromEntry | V0644_pokemon_zekrom_normalEntry | V0645_pokemon_landorusEntry | V0645_pokemon_landorus_incarnateEntry | V0645_pokemon_landorus_therianEntry | V0646_pokemon_kyuremEntry | V0646_pokemon_kyurem_blackEntry | V0646_pokemon_kyurem_normalEntry | V0646_pokemon_kyurem_whiteEntry | V0647_pokemon_keldeoEntry | V0647_pokemon_keldeo_ordinaryEntry | V0647_pokemon_keldeo_resoluteEntry | V0648_pokemon_meloettaEntry | V0648_pokemon_meloetta_ariaEntry | V0648_pokemon_meloetta_pirouetteEntry | V0649_pokemon_genesectEntry | V0649_pokemon_genesect_burnEntry | V0649_pokemon_genesect_chillEntry | V0649_pokemon_genesect_douseEntry | V0649_pokemon_genesect_normalEntry | V0649_pokemon_genesect_shockEntry;

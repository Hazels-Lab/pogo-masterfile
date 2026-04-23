/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen6
// Filters: all
// Entries emitted: 237

export interface V0650_pokemon_chespindatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0650_pokemon_chespindatapokemonsettingsencounter {
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
export interface V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0650_pokemon_chespindatapokemonsettingsibfc {

}
export interface V0650_pokemon_chespindatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0650_pokemon_chespindatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0650_pokemon_chespindatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0650_pokemon_chespindatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0650_pokemon_chespindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0650_pokemon_chespindata {
  pokemonSettings: V0650_pokemon_chespindatapokemonsettings;
  templateId: string;
}
export interface V0650_pokemon_chespinEntry {
  templateId: "V0650_POKEMON_CHESPIN";
  data: V0650_pokemon_chespindata;
}
export interface V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0650_pokemon_chespin_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0650_pokemon_chespindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0650_pokemon_chespin_normaldata {
  pokemonSettings: V0650_pokemon_chespin_normaldatapokemonsettings;
  templateId: string;
}
export interface V0650_pokemon_chespin_normalEntry {
  templateId: "V0650_POKEMON_CHESPIN_NORMAL";
  data: V0650_pokemon_chespin_normaldata;
}
export interface V0651_pokemon_quilladindatapokemonsettingsencounter {
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
export interface V0651_pokemon_quilladindatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0651_pokemon_quilladindata {
  pokemonSettings: V0651_pokemon_quilladindatapokemonsettings;
  templateId: string;
}
export interface V0651_pokemon_quilladinEntry {
  templateId: "V0651_POKEMON_QUILLADIN";
  data: V0651_pokemon_quilladindata;
}
export interface V0651_pokemon_quilladin_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0651_pokemon_quilladin_normaldata {
  pokemonSettings: V0651_pokemon_quilladin_normaldatapokemonsettings;
  templateId: string;
}
export interface V0651_pokemon_quilladin_normalEntry {
  templateId: "V0651_POKEMON_QUILLADIN_NORMAL";
  data: V0651_pokemon_quilladin_normaldata;
}
export interface V0652_pokemon_chesnaughtdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0652_pokemon_chesnaughtdata {
  pokemonSettings: V0652_pokemon_chesnaughtdatapokemonsettings;
  templateId: string;
}
export interface V0652_pokemon_chesnaughtEntry {
  templateId: "V0652_POKEMON_CHESNAUGHT";
  data: V0652_pokemon_chesnaughtdata;
}
export interface V0652_pokemon_chesnaught_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0652_pokemon_chesnaught_normaldata {
  pokemonSettings: V0652_pokemon_chesnaught_normaldatapokemonsettings;
  templateId: string;
}
export interface V0652_pokemon_chesnaught_normalEntry {
  templateId: "V0652_POKEMON_CHESNAUGHT_NORMAL";
  data: V0652_pokemon_chesnaught_normaldata;
}
export interface V0653_pokemon_fennekinEntry {
  templateId: "V0653_POKEMON_FENNEKIN";
  data: V0650_pokemon_chespindata;
}
export interface V0653_pokemon_fennekin_normalEntry {
  templateId: "V0653_POKEMON_FENNEKIN_NORMAL";
  data: V0650_pokemon_chespin_normaldata;
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
export interface V0654_pokemon_braixendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0654_pokemon_braixen_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0655_pokemon_delphoxEntry {
  templateId: "V0655_POKEMON_DELPHOX";
  data: V0652_pokemon_chesnaughtdata;
}
export interface V0655_pokemon_delphox_normalEntry {
  templateId: "V0655_POKEMON_DELPHOX_NORMAL";
  data: V0652_pokemon_chesnaught_normaldata;
}
export interface V0656_pokemon_froakiedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0650_pokemon_chespindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0650_pokemon_chespindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0657_pokemon_frogadierEntry {
  templateId: "V0657_POKEMON_FROGADIER";
  data: V0651_pokemon_quilladindata;
}
export interface V0657_pokemon_frogadier_normalEntry {
  templateId: "V0657_POKEMON_FROGADIER_NORMAL";
  data: V0651_pokemon_quilladin_normaldata;
}
export interface V0658_pokemon_greninjadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0661_pokemon_fletchlingdatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0661_pokemon_fletchlingdatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespindatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  evolutionBranch: (V0650_pokemon_chespin_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0651_pokemon_quilladindatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0664_pokemon_scatterbugdatapokemonsettingsencounter {
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
export interface V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0664_pokemon_scatterbugdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0664_pokemon_scatterbugdata {
  pokemonSettings: V0664_pokemon_scatterbugdatapokemonsettings;
  templateId: string;
}
export interface V0664_pokemon_scatterbugEntry {
  templateId: "V0664_POKEMON_SCATTERBUG";
  data: V0664_pokemon_scatterbugdata;
}
export interface V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0664_pokemon_scatterbug_archipelagodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0664_pokemon_scatterbug_archipelagodata {
  pokemonSettings: V0664_pokemon_scatterbug_archipelagodatapokemonsettings;
  templateId: string;
}
export interface V0664_pokemon_scatterbug_archipelagoEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_ARCHIPELAGO";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_continentalEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_CONTINENTAL";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_elegantEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_ELEGANT";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_fancyEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_FANCY";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_gardenEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_GARDEN";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_high_plainsEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_HIGH_PLAINS";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_icy_snowEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_ICY_SNOW";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_jungleEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_JUNGLE";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_marineEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_MARINE";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_meadowEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_MEADOW";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_modernEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_MODERN";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_monsoonEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_MONSOON";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_oceanEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_OCEAN";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_pokeballEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_POKEBALL";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_polarEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_POLAR";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_riverEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_RIVER";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_sandstormEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_SANDSTORM";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_savannaEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_SAVANNA";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_sunEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_SUN";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0664_pokemon_scatterbug_tundraEntry {
  templateId: "V0664_POKEMON_SCATTERBUG_TUNDRA";
  data: V0664_pokemon_scatterbug_archipelagodata;
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
export interface V0665_pokemon_spewpadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0665_pokemon_spewpa_archipelagodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0665_pokemon_spewpa_archipelagodata {
  pokemonSettings: V0665_pokemon_spewpa_archipelagodatapokemonsettings;
  templateId: string;
}
export interface V0665_pokemon_spewpa_archipelagoEntry {
  templateId: "V0665_POKEMON_SPEWPA_ARCHIPELAGO";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_continentalEntry {
  templateId: "V0665_POKEMON_SPEWPA_CONTINENTAL";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_elegantEntry {
  templateId: "V0665_POKEMON_SPEWPA_ELEGANT";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_fancyEntry {
  templateId: "V0665_POKEMON_SPEWPA_FANCY";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_gardenEntry {
  templateId: "V0665_POKEMON_SPEWPA_GARDEN";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_high_plainsEntry {
  templateId: "V0665_POKEMON_SPEWPA_HIGH_PLAINS";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_icy_snowEntry {
  templateId: "V0665_POKEMON_SPEWPA_ICY_SNOW";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_jungleEntry {
  templateId: "V0665_POKEMON_SPEWPA_JUNGLE";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_marineEntry {
  templateId: "V0665_POKEMON_SPEWPA_MARINE";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_meadowEntry {
  templateId: "V0665_POKEMON_SPEWPA_MEADOW";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_modernEntry {
  templateId: "V0665_POKEMON_SPEWPA_MODERN";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_monsoonEntry {
  templateId: "V0665_POKEMON_SPEWPA_MONSOON";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_oceanEntry {
  templateId: "V0665_POKEMON_SPEWPA_OCEAN";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_pokeballEntry {
  templateId: "V0665_POKEMON_SPEWPA_POKEBALL";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_polarEntry {
  templateId: "V0665_POKEMON_SPEWPA_POLAR";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_riverEntry {
  templateId: "V0665_POKEMON_SPEWPA_RIVER";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_sandstormEntry {
  templateId: "V0665_POKEMON_SPEWPA_SANDSTORM";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_savannaEntry {
  templateId: "V0665_POKEMON_SPEWPA_SAVANNA";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_sunEntry {
  templateId: "V0665_POKEMON_SPEWPA_SUN";
  data: V0665_pokemon_spewpa_archipelagodata;
}
export interface V0665_pokemon_spewpa_tundraEntry {
  templateId: "V0665_POKEMON_SPEWPA_TUNDRA";
  data: V0665_pokemon_spewpa_archipelagodata;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0666_pokemon_vivillon_archipelagodatapokemonsettings {
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
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0666_pokemon_vivillon_archipelagodata {
  pokemonSettings: V0666_pokemon_vivillon_archipelagodatapokemonsettings;
  templateId: string;
}
export interface V0666_pokemon_vivillon_archipelagoEntry {
  templateId: "V0666_POKEMON_VIVILLON_ARCHIPELAGO";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_continentalEntry {
  templateId: "V0666_POKEMON_VIVILLON_CONTINENTAL";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_elegantEntry {
  templateId: "V0666_POKEMON_VIVILLON_ELEGANT";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_fancyEntry {
  templateId: "V0666_POKEMON_VIVILLON_FANCY";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_gardenEntry {
  templateId: "V0666_POKEMON_VIVILLON_GARDEN";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_high_plainsEntry {
  templateId: "V0666_POKEMON_VIVILLON_HIGH_PLAINS";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_icy_snowEntry {
  templateId: "V0666_POKEMON_VIVILLON_ICY_SNOW";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_jungleEntry {
  templateId: "V0666_POKEMON_VIVILLON_JUNGLE";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_marineEntry {
  templateId: "V0666_POKEMON_VIVILLON_MARINE";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_meadowEntry {
  templateId: "V0666_POKEMON_VIVILLON_MEADOW";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_modernEntry {
  templateId: "V0666_POKEMON_VIVILLON_MODERN";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_monsoonEntry {
  templateId: "V0666_POKEMON_VIVILLON_MONSOON";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_oceanEntry {
  templateId: "V0666_POKEMON_VIVILLON_OCEAN";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_pokeballEntry {
  templateId: "V0666_POKEMON_VIVILLON_POKEBALL";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_polarEntry {
  templateId: "V0666_POKEMON_VIVILLON_POLAR";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_riverEntry {
  templateId: "V0666_POKEMON_VIVILLON_RIVER";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_sandstormEntry {
  templateId: "V0666_POKEMON_VIVILLON_SANDSTORM";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_savannaEntry {
  templateId: "V0666_POKEMON_VIVILLON_SAVANNA";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_sunEntry {
  templateId: "V0666_POKEMON_VIVILLON_SUN";
  data: V0666_pokemon_vivillon_archipelagodata;
}
export interface V0666_pokemon_vivillon_tundraEntry {
  templateId: "V0666_POKEMON_VIVILLON_TUNDRA";
  data: V0666_pokemon_vivillon_archipelagodata;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0668_pokemon_pyroar_femaledatapokemonsettingsencounter {
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
export interface V0668_pokemon_pyroar_femaledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0668_pokemon_pyroar_femaledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0668_pokemon_pyroar_femaledata {
  pokemonSettings: V0668_pokemon_pyroar_femaledatapokemonsettings;
  templateId: string;
}
export interface V0668_pokemon_pyroar_femaleEntry {
  templateId: "V0668_POKEMON_PYROAR_FEMALE";
  data: V0668_pokemon_pyroar_femaledata;
}
export interface V0668_pokemon_pyroar_normalEntry {
  templateId: "V0668_POKEMON_PYROAR_NORMAL";
  data: V0668_pokemon_pyroar_femaledata;
}
export interface V0669_pokemon_flabebedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0669_pokemon_flabebe_bluedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0669_pokemon_flabebe_bluedata {
  pokemonSettings: V0669_pokemon_flabebe_bluedatapokemonsettings;
  templateId: string;
}
export interface V0669_pokemon_flabebe_blueEntry {
  templateId: "V0669_POKEMON_FLABEBE_BLUE";
  data: V0669_pokemon_flabebe_bluedata;
}
export interface V0669_pokemon_flabebe_orangeEntry {
  templateId: "V0669_POKEMON_FLABEBE_ORANGE";
  data: V0669_pokemon_flabebe_bluedata;
}
export interface V0669_pokemon_flabebe_redEntry {
  templateId: "V0669_POKEMON_FLABEBE_RED";
  data: V0669_pokemon_flabebe_bluedata;
}
export interface V0669_pokemon_flabebe_whiteEntry {
  templateId: "V0669_POKEMON_FLABEBE_WHITE";
  data: V0669_pokemon_flabebe_bluedata;
}
export interface V0669_pokemon_flabebe_yellowEntry {
  templateId: "V0669_POKEMON_FLABEBE_YELLOW";
  data: V0669_pokemon_flabebe_bluedata;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0670_pokemon_floette_bluedatapokemonsettings {
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
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0670_pokemon_floette_bluedata {
  pokemonSettings: V0670_pokemon_floette_bluedatapokemonsettings;
  templateId: string;
}
export interface V0670_pokemon_floette_blueEntry {
  templateId: "V0670_POKEMON_FLOETTE_BLUE";
  data: V0670_pokemon_floette_bluedata;
}
export interface V0670_pokemon_floette_orangeEntry {
  templateId: "V0670_POKEMON_FLOETTE_ORANGE";
  data: V0670_pokemon_floette_bluedata;
}
export interface V0670_pokemon_floette_redEntry {
  templateId: "V0670_POKEMON_FLOETTE_RED";
  data: V0670_pokemon_floette_bluedata;
}
export interface V0670_pokemon_floette_whiteEntry {
  templateId: "V0670_POKEMON_FLOETTE_WHITE";
  data: V0670_pokemon_floette_bluedata;
}
export interface V0670_pokemon_floette_yellowEntry {
  templateId: "V0670_POKEMON_FLOETTE_YELLOW";
  data: V0670_pokemon_floette_bluedata;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0671_pokemon_florges_bluedatapokemonsettings {
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
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0671_pokemon_florges_bluedata {
  pokemonSettings: V0671_pokemon_florges_bluedatapokemonsettings;
  templateId: string;
}
export interface V0671_pokemon_florges_blueEntry {
  templateId: "V0671_POKEMON_FLORGES_BLUE";
  data: V0671_pokemon_florges_bluedata;
}
export interface V0671_pokemon_florges_orangeEntry {
  templateId: "V0671_POKEMON_FLORGES_ORANGE";
  data: V0671_pokemon_florges_bluedata;
}
export interface V0671_pokemon_florges_redEntry {
  templateId: "V0671_POKEMON_FLORGES_RED";
  data: V0671_pokemon_florges_bluedata;
}
export interface V0671_pokemon_florges_whiteEntry {
  templateId: "V0671_POKEMON_FLORGES_WHITE";
  data: V0671_pokemon_florges_bluedata;
}
export interface V0671_pokemon_florges_yellowEntry {
  templateId: "V0671_POKEMON_FLORGES_YELLOW";
  data: V0671_pokemon_florges_bluedata;
}
export interface V0672_pokemon_skiddodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0676_pokemon_furfrou_dandydatapokemonsettings {
  animationTime: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0676_pokemon_furfrou_dandydata {
  pokemonSettings: V0676_pokemon_furfrou_dandydatapokemonsettings;
  templateId: string;
}
export interface V0676_pokemon_furfrou_dandyEntry {
  templateId: "V0676_POKEMON_FURFROU_DANDY";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_debutanteEntry {
  templateId: "V0676_POKEMON_FURFROU_DEBUTANTE";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_diamondEntry {
  templateId: "V0676_POKEMON_FURFROU_DIAMOND";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_heartEntry {
  templateId: "V0676_POKEMON_FURFROU_HEART";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_kabukiEntry {
  templateId: "V0676_POKEMON_FURFROU_KABUKI";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_la_reineEntry {
  templateId: "V0676_POKEMON_FURFROU_LA_REINE";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_matronEntry {
  templateId: "V0676_POKEMON_FURFROU_MATRON";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_naturalEntry {
  templateId: "V0676_POKEMON_FURFROU_NATURAL";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_pharaohEntry {
  templateId: "V0676_POKEMON_FURFROU_PHARAOH";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0676_pokemon_furfrou_starEntry {
  templateId: "V0676_POKEMON_FURFROU_STAR";
  data: V0676_pokemon_furfrou_dandydata;
}
export interface V0677_pokemon_espurrdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0667_pokemon_litleodatapokemonsettingsencounter;
  evolutionBranch: (V0667_pokemon_litleodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0678_pokemon_meowstic_femaledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0678_pokemon_meowstic_femaledata {
  pokemonSettings: V0678_pokemon_meowstic_femaledatapokemonsettings;
  templateId: string;
}
export interface V0678_pokemon_meowstic_femaleEntry {
  templateId: "V0678_POKEMON_MEOWSTIC_FEMALE";
  data: V0678_pokemon_meowstic_femaledata;
}
export interface V0678_pokemon_meowstic_normalEntry {
  templateId: "V0678_POKEMON_MEOWSTIC_NORMAL";
  data: V0678_pokemon_meowstic_femaledata;
}
export interface V0679_pokemon_honedgedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0681_pokemon_aegislash_bladedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyPortraitOffset: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0681_pokemon_aegislash_bladedata {
  pokemonSettings: V0681_pokemon_aegislash_bladedatapokemonsettings;
  templateId: string;
}
export interface V0681_pokemon_aegislash_bladeEntry {
  templateId: "V0681_POKEMON_AEGISLASH_BLADE";
  data: V0681_pokemon_aegislash_bladedata;
}
export interface V0681_pokemon_aegislash_shieldEntry {
  templateId: "V0681_POKEMON_AEGISLASH_SHIELD";
  data: V0681_pokemon_aegislash_bladedata;
}
export interface V0682_pokemon_spritzeedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0683_pokemon_aromatissedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0683_pokemon_aromatissedata {
  pokemonSettings: V0683_pokemon_aromatissedatapokemonsettings;
  templateId: string;
}
export interface V0683_pokemon_aromatisseEntry {
  templateId: "V0683_POKEMON_AROMATISSE";
  data: V0683_pokemon_aromatissedata;
}
export interface V0683_pokemon_aromatisse_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0683_pokemon_aromatisse_normaldata {
  pokemonSettings: V0683_pokemon_aromatisse_normaldatapokemonsettings;
  templateId: string;
}
export interface V0683_pokemon_aromatisse_normalEntry {
  templateId: "V0683_POKEMON_AROMATISSE_NORMAL";
  data: V0683_pokemon_aromatisse_normaldata;
}
export interface V0684_pokemon_swirlixdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0674_pokemon_panchamdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0670_pokemon_floettedatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0685_pokemon_slurpuffEntry {
  templateId: "V0685_POKEMON_SLURPUFF";
  data: V0683_pokemon_aromatissedata;
}
export interface V0685_pokemon_slurpuff_normalEntry {
  templateId: "V0685_POKEMON_SLURPUFF_NORMAL";
  data: V0683_pokemon_aromatisse_normaldata;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0686_pokemon_inkaydatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0686_pokemon_inkay_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  evolutionBranch: (V0687_pokemon_malamardatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0688_pokemon_binacledatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0688_pokemon_binacledatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0691_pokemon_dragalgedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddySize: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0668_pokemon_pyroar_femaledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0668_pokemon_pyroar_femaledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0692_pokemon_clauncherEntry {
  templateId: "V0692_POKEMON_CLAUNCHER";
  data: V0664_pokemon_scatterbugdata;
}
export interface V0692_pokemon_clauncher_normalEntry {
  templateId: "V0692_POKEMON_CLAUNCHER_NORMAL";
  data: V0664_pokemon_scatterbug_archipelagodata;
}
export interface V0693_pokemon_clawitzerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0694_pokemon_helioptiledatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0694_pokemon_helioptile_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0696_pokemon_tyruntdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0659_pokemon_bunnelbydatapokemonsettingsencounter;
  evolutionBranch: (V0696_pokemon_tyrunt_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0697_pokemon_tyrantrumdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0697_pokemon_tyrantrumdata {
  pokemonSettings: V0697_pokemon_tyrantrumdatapokemonsettings;
  templateId: string;
}
export interface V0697_pokemon_tyrantrumEntry {
  templateId: "V0697_POKEMON_TYRANTRUM";
  data: V0697_pokemon_tyrantrumdata;
}
export interface V0697_pokemon_tyrantrum_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0654_pokemon_braixendatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0697_pokemon_tyrantrum_normaldata {
  pokemonSettings: V0697_pokemon_tyrantrum_normaldatapokemonsettings;
  templateId: string;
}
export interface V0697_pokemon_tyrantrum_normalEntry {
  templateId: "V0697_POKEMON_TYRANTRUM_NORMAL";
  data: V0697_pokemon_tyrantrum_normaldata;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0698_pokemon_amauradatapokemonsettingsencounter;
  evolutionBranch: (V0698_pokemon_amauradatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0698_pokemon_amauradatapokemonsettingsencounter;
  evolutionBranch: (V0698_pokemon_amaura_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0699_pokemon_aurorusEntry {
  templateId: "V0699_POKEMON_AURORUS";
  data: V0697_pokemon_tyrantrumdata;
}
export interface V0699_pokemon_aurorus_normalEntry {
  templateId: "V0699_POKEMON_AURORUS_NORMAL";
  data: V0697_pokemon_tyrantrum_normaldata;
}
export interface V0700_pokemon_sylveondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0705_pokemon_sliggoodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  evolutionBranch: (V0705_pokemon_sliggoo_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0709_pokemon_trevenantdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0709_pokemon_trevenantdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0650_pokemon_chespindatapokemonsettingsshadow;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0710_pokemon_pumpkaboo_averagedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0666_pokemon_vivillondatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0710_pokemon_pumpkaboo_averagedata {
  pokemonSettings: V0710_pokemon_pumpkaboo_averagedatapokemonsettings;
  templateId: string;
}
export interface V0710_pokemon_pumpkaboo_averageEntry {
  templateId: "V0710_POKEMON_PUMPKABOO_AVERAGE";
  data: V0710_pokemon_pumpkaboo_averagedata;
}
export interface V0710_pokemon_pumpkaboo_largeEntry {
  templateId: "V0710_POKEMON_PUMPKABOO_LARGE";
  data: V0710_pokemon_pumpkaboo_averagedata;
}
export interface V0710_pokemon_pumpkaboo_smallEntry {
  templateId: "V0710_POKEMON_PUMPKABOO_SMALL";
  data: V0710_pokemon_pumpkaboo_averagedata;
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
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0710_pokemon_pumpkaboodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
export interface V0711_pokemon_gourgeist_averagedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0711_pokemon_gourgeist_averagedata {
  pokemonSettings: V0711_pokemon_gourgeist_averagedatapokemonsettings;
  templateId: string;
}
export interface V0711_pokemon_gourgeist_averageEntry {
  templateId: "V0711_POKEMON_GOURGEIST_AVERAGE";
  data: V0711_pokemon_gourgeist_averagedata;
}
export interface V0711_pokemon_gourgeist_largeEntry {
  templateId: "V0711_POKEMON_GOURGEIST_LARGE";
  data: V0711_pokemon_gourgeist_averagedata;
}
export interface V0711_pokemon_gourgeist_smallEntry {
  templateId: "V0711_POKEMON_GOURGEIST_SMALL";
  data: V0711_pokemon_gourgeist_averagedata;
}
export interface V0711_pokemon_gourgeist_superdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddySize: string;
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0666_pokemon_vivillondatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0664_pokemon_scatterbugdatapokemonsettingsencounter;
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0665_pokemon_spewpadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  evolutionBranch: (V0664_pokemon_scatterbug_archipelagodatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0668_pokemon_pyroar_femaledatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  encounter: V0668_pokemon_pyroar_femaledatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  exclusiveKeyItem: V0718_pokemon_zygarde_completedatapokemonsettingsexclusivekeyitem;
  familyId: string;
  form: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0718_pokemon_zygarde_complete_fifty_percentdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0718_pokemon_zygarde_complete_ten_percentdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0718_pokemon_zygardedatapokemonsettingsencounter;
  evolutionBranch: (V0718_pokemon_zygardedatapokemonsettingsevolutionbranchitem)[];
  evolutionIds: (string)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  tempEvoOverrides: (V0687_pokemon_malamardatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0720_pokemon_hoopadatapokemonsettingsencounter;
  familyId: string;
  formChange: (V0676_pokemon_furfroudatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
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
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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
  camera: V0650_pokemon_chespindatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0716_pokemon_xerneasdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0650_pokemon_chespindatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0650_pokemon_chespindatapokemonsettingsstats;
  thirdMove: V0650_pokemon_chespindatapokemonsettingsthirdmove;
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

export interface PokemonSettingsGen6MasterfileByTemplateId {
  "V0650_POKEMON_CHESPIN": V0650_pokemon_chespinEntry;
  "V0650_POKEMON_CHESPIN_NORMAL": V0650_pokemon_chespin_normalEntry;
  "V0651_POKEMON_QUILLADIN": V0651_pokemon_quilladinEntry;
  "V0651_POKEMON_QUILLADIN_NORMAL": V0651_pokemon_quilladin_normalEntry;
  "V0652_POKEMON_CHESNAUGHT": V0652_pokemon_chesnaughtEntry;
  "V0652_POKEMON_CHESNAUGHT_NORMAL": V0652_pokemon_chesnaught_normalEntry;
  "V0653_POKEMON_FENNEKIN": V0653_pokemon_fennekinEntry;
  "V0653_POKEMON_FENNEKIN_NORMAL": V0653_pokemon_fennekin_normalEntry;
  "V0654_POKEMON_BRAIXEN": V0654_pokemon_braixenEntry;
  "V0654_POKEMON_BRAIXEN_NORMAL": V0654_pokemon_braixen_normalEntry;
  "V0655_POKEMON_DELPHOX": V0655_pokemon_delphoxEntry;
  "V0655_POKEMON_DELPHOX_NORMAL": V0655_pokemon_delphox_normalEntry;
  "V0656_POKEMON_FROAKIE": V0656_pokemon_froakieEntry;
  "V0656_POKEMON_FROAKIE_NORMAL": V0656_pokemon_froakie_normalEntry;
  "V0657_POKEMON_FROGADIER": V0657_pokemon_frogadierEntry;
  "V0657_POKEMON_FROGADIER_NORMAL": V0657_pokemon_frogadier_normalEntry;
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
  "V0664_POKEMON_SCATTERBUG": V0664_pokemon_scatterbugEntry;
  "V0664_POKEMON_SCATTERBUG_ARCHIPELAGO": V0664_pokemon_scatterbug_archipelagoEntry;
  "V0664_POKEMON_SCATTERBUG_CONTINENTAL": V0664_pokemon_scatterbug_continentalEntry;
  "V0664_POKEMON_SCATTERBUG_ELEGANT": V0664_pokemon_scatterbug_elegantEntry;
  "V0664_POKEMON_SCATTERBUG_FANCY": V0664_pokemon_scatterbug_fancyEntry;
  "V0664_POKEMON_SCATTERBUG_GARDEN": V0664_pokemon_scatterbug_gardenEntry;
  "V0664_POKEMON_SCATTERBUG_HIGH_PLAINS": V0664_pokemon_scatterbug_high_plainsEntry;
  "V0664_POKEMON_SCATTERBUG_ICY_SNOW": V0664_pokemon_scatterbug_icy_snowEntry;
  "V0664_POKEMON_SCATTERBUG_JUNGLE": V0664_pokemon_scatterbug_jungleEntry;
  "V0664_POKEMON_SCATTERBUG_MARINE": V0664_pokemon_scatterbug_marineEntry;
  "V0664_POKEMON_SCATTERBUG_MEADOW": V0664_pokemon_scatterbug_meadowEntry;
  "V0664_POKEMON_SCATTERBUG_MODERN": V0664_pokemon_scatterbug_modernEntry;
  "V0664_POKEMON_SCATTERBUG_MONSOON": V0664_pokemon_scatterbug_monsoonEntry;
  "V0664_POKEMON_SCATTERBUG_OCEAN": V0664_pokemon_scatterbug_oceanEntry;
  "V0664_POKEMON_SCATTERBUG_POKEBALL": V0664_pokemon_scatterbug_pokeballEntry;
  "V0664_POKEMON_SCATTERBUG_POLAR": V0664_pokemon_scatterbug_polarEntry;
  "V0664_POKEMON_SCATTERBUG_RIVER": V0664_pokemon_scatterbug_riverEntry;
  "V0664_POKEMON_SCATTERBUG_SANDSTORM": V0664_pokemon_scatterbug_sandstormEntry;
  "V0664_POKEMON_SCATTERBUG_SAVANNA": V0664_pokemon_scatterbug_savannaEntry;
  "V0664_POKEMON_SCATTERBUG_SUN": V0664_pokemon_scatterbug_sunEntry;
  "V0664_POKEMON_SCATTERBUG_TUNDRA": V0664_pokemon_scatterbug_tundraEntry;
  "V0665_POKEMON_SPEWPA": V0665_pokemon_spewpaEntry;
  "V0665_POKEMON_SPEWPA_ARCHIPELAGO": V0665_pokemon_spewpa_archipelagoEntry;
  "V0665_POKEMON_SPEWPA_CONTINENTAL": V0665_pokemon_spewpa_continentalEntry;
  "V0665_POKEMON_SPEWPA_ELEGANT": V0665_pokemon_spewpa_elegantEntry;
  "V0665_POKEMON_SPEWPA_FANCY": V0665_pokemon_spewpa_fancyEntry;
  "V0665_POKEMON_SPEWPA_GARDEN": V0665_pokemon_spewpa_gardenEntry;
  "V0665_POKEMON_SPEWPA_HIGH_PLAINS": V0665_pokemon_spewpa_high_plainsEntry;
  "V0665_POKEMON_SPEWPA_ICY_SNOW": V0665_pokemon_spewpa_icy_snowEntry;
  "V0665_POKEMON_SPEWPA_JUNGLE": V0665_pokemon_spewpa_jungleEntry;
  "V0665_POKEMON_SPEWPA_MARINE": V0665_pokemon_spewpa_marineEntry;
  "V0665_POKEMON_SPEWPA_MEADOW": V0665_pokemon_spewpa_meadowEntry;
  "V0665_POKEMON_SPEWPA_MODERN": V0665_pokemon_spewpa_modernEntry;
  "V0665_POKEMON_SPEWPA_MONSOON": V0665_pokemon_spewpa_monsoonEntry;
  "V0665_POKEMON_SPEWPA_OCEAN": V0665_pokemon_spewpa_oceanEntry;
  "V0665_POKEMON_SPEWPA_POKEBALL": V0665_pokemon_spewpa_pokeballEntry;
  "V0665_POKEMON_SPEWPA_POLAR": V0665_pokemon_spewpa_polarEntry;
  "V0665_POKEMON_SPEWPA_RIVER": V0665_pokemon_spewpa_riverEntry;
  "V0665_POKEMON_SPEWPA_SANDSTORM": V0665_pokemon_spewpa_sandstormEntry;
  "V0665_POKEMON_SPEWPA_SAVANNA": V0665_pokemon_spewpa_savannaEntry;
  "V0665_POKEMON_SPEWPA_SUN": V0665_pokemon_spewpa_sunEntry;
  "V0665_POKEMON_SPEWPA_TUNDRA": V0665_pokemon_spewpa_tundraEntry;
  "V0666_POKEMON_VIVILLON": V0666_pokemon_vivillonEntry;
  "V0666_POKEMON_VIVILLON_ARCHIPELAGO": V0666_pokemon_vivillon_archipelagoEntry;
  "V0666_POKEMON_VIVILLON_CONTINENTAL": V0666_pokemon_vivillon_continentalEntry;
  "V0666_POKEMON_VIVILLON_ELEGANT": V0666_pokemon_vivillon_elegantEntry;
  "V0666_POKEMON_VIVILLON_FANCY": V0666_pokemon_vivillon_fancyEntry;
  "V0666_POKEMON_VIVILLON_GARDEN": V0666_pokemon_vivillon_gardenEntry;
  "V0666_POKEMON_VIVILLON_HIGH_PLAINS": V0666_pokemon_vivillon_high_plainsEntry;
  "V0666_POKEMON_VIVILLON_ICY_SNOW": V0666_pokemon_vivillon_icy_snowEntry;
  "V0666_POKEMON_VIVILLON_JUNGLE": V0666_pokemon_vivillon_jungleEntry;
  "V0666_POKEMON_VIVILLON_MARINE": V0666_pokemon_vivillon_marineEntry;
  "V0666_POKEMON_VIVILLON_MEADOW": V0666_pokemon_vivillon_meadowEntry;
  "V0666_POKEMON_VIVILLON_MODERN": V0666_pokemon_vivillon_modernEntry;
  "V0666_POKEMON_VIVILLON_MONSOON": V0666_pokemon_vivillon_monsoonEntry;
  "V0666_POKEMON_VIVILLON_OCEAN": V0666_pokemon_vivillon_oceanEntry;
  "V0666_POKEMON_VIVILLON_POKEBALL": V0666_pokemon_vivillon_pokeballEntry;
  "V0666_POKEMON_VIVILLON_POLAR": V0666_pokemon_vivillon_polarEntry;
  "V0666_POKEMON_VIVILLON_RIVER": V0666_pokemon_vivillon_riverEntry;
  "V0666_POKEMON_VIVILLON_SANDSTORM": V0666_pokemon_vivillon_sandstormEntry;
  "V0666_POKEMON_VIVILLON_SAVANNA": V0666_pokemon_vivillon_savannaEntry;
  "V0666_POKEMON_VIVILLON_SUN": V0666_pokemon_vivillon_sunEntry;
  "V0666_POKEMON_VIVILLON_TUNDRA": V0666_pokemon_vivillon_tundraEntry;
  "V0667_POKEMON_LITLEO": V0667_pokemon_litleoEntry;
  "V0667_POKEMON_LITLEO_NORMAL": V0667_pokemon_litleo_normalEntry;
  "V0668_POKEMON_PYROAR": V0668_pokemon_pyroarEntry;
  "V0668_POKEMON_PYROAR_FEMALE": V0668_pokemon_pyroar_femaleEntry;
  "V0668_POKEMON_PYROAR_NORMAL": V0668_pokemon_pyroar_normalEntry;
  "V0669_POKEMON_FLABEBE": V0669_pokemon_flabebeEntry;
  "V0669_POKEMON_FLABEBE_BLUE": V0669_pokemon_flabebe_blueEntry;
  "V0669_POKEMON_FLABEBE_ORANGE": V0669_pokemon_flabebe_orangeEntry;
  "V0669_POKEMON_FLABEBE_RED": V0669_pokemon_flabebe_redEntry;
  "V0669_POKEMON_FLABEBE_WHITE": V0669_pokemon_flabebe_whiteEntry;
  "V0669_POKEMON_FLABEBE_YELLOW": V0669_pokemon_flabebe_yellowEntry;
  "V0670_POKEMON_FLOETTE": V0670_pokemon_floetteEntry;
  "V0670_POKEMON_FLOETTE_BLUE": V0670_pokemon_floette_blueEntry;
  "V0670_POKEMON_FLOETTE_ORANGE": V0670_pokemon_floette_orangeEntry;
  "V0670_POKEMON_FLOETTE_RED": V0670_pokemon_floette_redEntry;
  "V0670_POKEMON_FLOETTE_WHITE": V0670_pokemon_floette_whiteEntry;
  "V0670_POKEMON_FLOETTE_YELLOW": V0670_pokemon_floette_yellowEntry;
  "V0671_POKEMON_FLORGES": V0671_pokemon_florgesEntry;
  "V0671_POKEMON_FLORGES_BLUE": V0671_pokemon_florges_blueEntry;
  "V0671_POKEMON_FLORGES_ORANGE": V0671_pokemon_florges_orangeEntry;
  "V0671_POKEMON_FLORGES_RED": V0671_pokemon_florges_redEntry;
  "V0671_POKEMON_FLORGES_WHITE": V0671_pokemon_florges_whiteEntry;
  "V0671_POKEMON_FLORGES_YELLOW": V0671_pokemon_florges_yellowEntry;
  "V0672_POKEMON_SKIDDO": V0672_pokemon_skiddoEntry;
  "V0672_POKEMON_SKIDDO_NORMAL": V0672_pokemon_skiddo_normalEntry;
  "V0673_POKEMON_GOGOAT": V0673_pokemon_gogoatEntry;
  "V0673_POKEMON_GOGOAT_NORMAL": V0673_pokemon_gogoat_normalEntry;
  "V0674_POKEMON_PANCHAM": V0674_pokemon_panchamEntry;
  "V0674_POKEMON_PANCHAM_NORMAL": V0674_pokemon_pancham_normalEntry;
  "V0675_POKEMON_PANGORO": V0675_pokemon_pangoroEntry;
  "V0675_POKEMON_PANGORO_NORMAL": V0675_pokemon_pangoro_normalEntry;
  "V0676_POKEMON_FURFROU": V0676_pokemon_furfrouEntry;
  "V0676_POKEMON_FURFROU_DANDY": V0676_pokemon_furfrou_dandyEntry;
  "V0676_POKEMON_FURFROU_DEBUTANTE": V0676_pokemon_furfrou_debutanteEntry;
  "V0676_POKEMON_FURFROU_DIAMOND": V0676_pokemon_furfrou_diamondEntry;
  "V0676_POKEMON_FURFROU_HEART": V0676_pokemon_furfrou_heartEntry;
  "V0676_POKEMON_FURFROU_KABUKI": V0676_pokemon_furfrou_kabukiEntry;
  "V0676_POKEMON_FURFROU_LA_REINE": V0676_pokemon_furfrou_la_reineEntry;
  "V0676_POKEMON_FURFROU_MATRON": V0676_pokemon_furfrou_matronEntry;
  "V0676_POKEMON_FURFROU_NATURAL": V0676_pokemon_furfrou_naturalEntry;
  "V0676_POKEMON_FURFROU_PHARAOH": V0676_pokemon_furfrou_pharaohEntry;
  "V0676_POKEMON_FURFROU_STAR": V0676_pokemon_furfrou_starEntry;
  "V0677_POKEMON_ESPURR": V0677_pokemon_espurrEntry;
  "V0677_POKEMON_ESPURR_NORMAL": V0677_pokemon_espurr_normalEntry;
  "V0678_POKEMON_MEOWSTIC": V0678_pokemon_meowsticEntry;
  "V0678_POKEMON_MEOWSTIC_FEMALE": V0678_pokemon_meowstic_femaleEntry;
  "V0678_POKEMON_MEOWSTIC_NORMAL": V0678_pokemon_meowstic_normalEntry;
  "V0679_POKEMON_HONEDGE": V0679_pokemon_honedgeEntry;
  "V0679_POKEMON_HONEDGE_NORMAL": V0679_pokemon_honedge_normalEntry;
  "V0680_POKEMON_DOUBLADE": V0680_pokemon_doubladeEntry;
  "V0680_POKEMON_DOUBLADE_NORMAL": V0680_pokemon_doublade_normalEntry;
  "V0681_POKEMON_AEGISLASH": V0681_pokemon_aegislashEntry;
  "V0681_POKEMON_AEGISLASH_BLADE": V0681_pokemon_aegislash_bladeEntry;
  "V0681_POKEMON_AEGISLASH_SHIELD": V0681_pokemon_aegislash_shieldEntry;
  "V0682_POKEMON_SPRITZEE": V0682_pokemon_spritzeeEntry;
  "V0682_POKEMON_SPRITZEE_NORMAL": V0682_pokemon_spritzee_normalEntry;
  "V0683_POKEMON_AROMATISSE": V0683_pokemon_aromatisseEntry;
  "V0683_POKEMON_AROMATISSE_NORMAL": V0683_pokemon_aromatisse_normalEntry;
  "V0684_POKEMON_SWIRLIX": V0684_pokemon_swirlixEntry;
  "V0684_POKEMON_SWIRLIX_NORMAL": V0684_pokemon_swirlix_normalEntry;
  "V0685_POKEMON_SLURPUFF": V0685_pokemon_slurpuffEntry;
  "V0685_POKEMON_SLURPUFF_NORMAL": V0685_pokemon_slurpuff_normalEntry;
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
  "V0692_POKEMON_CLAUNCHER": V0692_pokemon_clauncherEntry;
  "V0692_POKEMON_CLAUNCHER_NORMAL": V0692_pokemon_clauncher_normalEntry;
  "V0693_POKEMON_CLAWITZER": V0693_pokemon_clawitzerEntry;
  "V0693_POKEMON_CLAWITZER_NORMAL": V0693_pokemon_clawitzer_normalEntry;
  "V0694_POKEMON_HELIOPTILE": V0694_pokemon_helioptileEntry;
  "V0694_POKEMON_HELIOPTILE_NORMAL": V0694_pokemon_helioptile_normalEntry;
  "V0695_POKEMON_HELIOLISK": V0695_pokemon_helioliskEntry;
  "V0695_POKEMON_HELIOLISK_NORMAL": V0695_pokemon_heliolisk_normalEntry;
  "V0696_POKEMON_TYRUNT": V0696_pokemon_tyruntEntry;
  "V0696_POKEMON_TYRUNT_NORMAL": V0696_pokemon_tyrunt_normalEntry;
  "V0697_POKEMON_TYRANTRUM": V0697_pokemon_tyrantrumEntry;
  "V0697_POKEMON_TYRANTRUM_NORMAL": V0697_pokemon_tyrantrum_normalEntry;
  "V0698_POKEMON_AMAURA": V0698_pokemon_amauraEntry;
  "V0698_POKEMON_AMAURA_NORMAL": V0698_pokemon_amaura_normalEntry;
  "V0699_POKEMON_AURORUS": V0699_pokemon_aurorusEntry;
  "V0699_POKEMON_AURORUS_NORMAL": V0699_pokemon_aurorus_normalEntry;
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
  "V0710_POKEMON_PUMPKABOO_AVERAGE": V0710_pokemon_pumpkaboo_averageEntry;
  "V0710_POKEMON_PUMPKABOO_LARGE": V0710_pokemon_pumpkaboo_largeEntry;
  "V0710_POKEMON_PUMPKABOO_SMALL": V0710_pokemon_pumpkaboo_smallEntry;
  "V0710_POKEMON_PUMPKABOO_SUPER": V0710_pokemon_pumpkaboo_superEntry;
  "V0711_POKEMON_GOURGEIST": V0711_pokemon_gourgeistEntry;
  "V0711_POKEMON_GOURGEIST_AVERAGE": V0711_pokemon_gourgeist_averageEntry;
  "V0711_POKEMON_GOURGEIST_LARGE": V0711_pokemon_gourgeist_largeEntry;
  "V0711_POKEMON_GOURGEIST_SMALL": V0711_pokemon_gourgeist_smallEntry;
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
  "0650": V0650_pokemon_chespinEntry | V0650_pokemon_chespin_normalEntry;
  "0651": V0651_pokemon_quilladinEntry | V0651_pokemon_quilladin_normalEntry;
  "0652": V0652_pokemon_chesnaughtEntry | V0652_pokemon_chesnaught_normalEntry;
  "0653": V0653_pokemon_fennekinEntry | V0653_pokemon_fennekin_normalEntry;
  "0654": V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry;
  "0655": V0655_pokemon_delphoxEntry | V0655_pokemon_delphox_normalEntry;
  "0656": V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry;
  "0657": V0657_pokemon_frogadierEntry | V0657_pokemon_frogadier_normalEntry;
  "0658": V0658_pokemon_greninjaEntry | V0658_pokemon_greninja_normalEntry;
  "0659": V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry;
  "0660": V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry;
  "0661": V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry;
  "0662": V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry;
  "0663": V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry;
  "0664": V0664_pokemon_scatterbugEntry | V0664_pokemon_scatterbug_archipelagoEntry | V0664_pokemon_scatterbug_continentalEntry | V0664_pokemon_scatterbug_elegantEntry | V0664_pokemon_scatterbug_fancyEntry | V0664_pokemon_scatterbug_gardenEntry | V0664_pokemon_scatterbug_high_plainsEntry | V0664_pokemon_scatterbug_icy_snowEntry | V0664_pokemon_scatterbug_jungleEntry | V0664_pokemon_scatterbug_marineEntry | V0664_pokemon_scatterbug_meadowEntry | V0664_pokemon_scatterbug_modernEntry | V0664_pokemon_scatterbug_monsoonEntry | V0664_pokemon_scatterbug_oceanEntry | V0664_pokemon_scatterbug_pokeballEntry | V0664_pokemon_scatterbug_polarEntry | V0664_pokemon_scatterbug_riverEntry | V0664_pokemon_scatterbug_sandstormEntry | V0664_pokemon_scatterbug_savannaEntry | V0664_pokemon_scatterbug_sunEntry | V0664_pokemon_scatterbug_tundraEntry;
  "0665": V0665_pokemon_spewpaEntry | V0665_pokemon_spewpa_archipelagoEntry | V0665_pokemon_spewpa_continentalEntry | V0665_pokemon_spewpa_elegantEntry | V0665_pokemon_spewpa_fancyEntry | V0665_pokemon_spewpa_gardenEntry | V0665_pokemon_spewpa_high_plainsEntry | V0665_pokemon_spewpa_icy_snowEntry | V0665_pokemon_spewpa_jungleEntry | V0665_pokemon_spewpa_marineEntry | V0665_pokemon_spewpa_meadowEntry | V0665_pokemon_spewpa_modernEntry | V0665_pokemon_spewpa_monsoonEntry | V0665_pokemon_spewpa_oceanEntry | V0665_pokemon_spewpa_pokeballEntry | V0665_pokemon_spewpa_polarEntry | V0665_pokemon_spewpa_riverEntry | V0665_pokemon_spewpa_sandstormEntry | V0665_pokemon_spewpa_savannaEntry | V0665_pokemon_spewpa_sunEntry | V0665_pokemon_spewpa_tundraEntry;
  "0666": V0666_pokemon_vivillonEntry | V0666_pokemon_vivillon_archipelagoEntry | V0666_pokemon_vivillon_continentalEntry | V0666_pokemon_vivillon_elegantEntry | V0666_pokemon_vivillon_fancyEntry | V0666_pokemon_vivillon_gardenEntry | V0666_pokemon_vivillon_high_plainsEntry | V0666_pokemon_vivillon_icy_snowEntry | V0666_pokemon_vivillon_jungleEntry | V0666_pokemon_vivillon_marineEntry | V0666_pokemon_vivillon_meadowEntry | V0666_pokemon_vivillon_modernEntry | V0666_pokemon_vivillon_monsoonEntry | V0666_pokemon_vivillon_oceanEntry | V0666_pokemon_vivillon_pokeballEntry | V0666_pokemon_vivillon_polarEntry | V0666_pokemon_vivillon_riverEntry | V0666_pokemon_vivillon_sandstormEntry | V0666_pokemon_vivillon_savannaEntry | V0666_pokemon_vivillon_sunEntry | V0666_pokemon_vivillon_tundraEntry;
  "0667": V0667_pokemon_litleoEntry | V0667_pokemon_litleo_normalEntry;
  "0668": V0668_pokemon_pyroarEntry | V0668_pokemon_pyroar_femaleEntry | V0668_pokemon_pyroar_normalEntry;
  "0669": V0669_pokemon_flabebeEntry | V0669_pokemon_flabebe_blueEntry | V0669_pokemon_flabebe_orangeEntry | V0669_pokemon_flabebe_redEntry | V0669_pokemon_flabebe_whiteEntry | V0669_pokemon_flabebe_yellowEntry;
  "0670": V0670_pokemon_floetteEntry | V0670_pokemon_floette_blueEntry | V0670_pokemon_floette_orangeEntry | V0670_pokemon_floette_redEntry | V0670_pokemon_floette_whiteEntry | V0670_pokemon_floette_yellowEntry;
  "0671": V0671_pokemon_florgesEntry | V0671_pokemon_florges_blueEntry | V0671_pokemon_florges_orangeEntry | V0671_pokemon_florges_redEntry | V0671_pokemon_florges_whiteEntry | V0671_pokemon_florges_yellowEntry;
  "0672": V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry;
  "0673": V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry;
  "0674": V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry;
  "0675": V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry;
  "0676": V0676_pokemon_furfrouEntry | V0676_pokemon_furfrou_dandyEntry | V0676_pokemon_furfrou_debutanteEntry | V0676_pokemon_furfrou_diamondEntry | V0676_pokemon_furfrou_heartEntry | V0676_pokemon_furfrou_kabukiEntry | V0676_pokemon_furfrou_la_reineEntry | V0676_pokemon_furfrou_matronEntry | V0676_pokemon_furfrou_naturalEntry | V0676_pokemon_furfrou_pharaohEntry | V0676_pokemon_furfrou_starEntry;
  "0677": V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry;
  "0678": V0678_pokemon_meowsticEntry | V0678_pokemon_meowstic_femaleEntry | V0678_pokemon_meowstic_normalEntry;
  "0679": V0679_pokemon_honedgeEntry | V0679_pokemon_honedge_normalEntry;
  "0680": V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry;
  "0681": V0681_pokemon_aegislashEntry | V0681_pokemon_aegislash_bladeEntry | V0681_pokemon_aegislash_shieldEntry;
  "0682": V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry;
  "0683": V0683_pokemon_aromatisseEntry | V0683_pokemon_aromatisse_normalEntry;
  "0684": V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry;
  "0685": V0685_pokemon_slurpuffEntry | V0685_pokemon_slurpuff_normalEntry;
  "0686": V0686_pokemon_inkayEntry | V0686_pokemon_inkay_normalEntry;
  "0687": V0687_pokemon_malamarEntry | V0687_pokemon_malamar_normalEntry;
  "0688": V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry;
  "0689": V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry;
  "0690": V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry;
  "0691": V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry;
  "0692": V0692_pokemon_clauncherEntry | V0692_pokemon_clauncher_normalEntry;
  "0693": V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry;
  "0694": V0694_pokemon_helioptileEntry | V0694_pokemon_helioptile_normalEntry;
  "0695": V0695_pokemon_helioliskEntry | V0695_pokemon_heliolisk_normalEntry;
  "0696": V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry;
  "0697": V0697_pokemon_tyrantrumEntry | V0697_pokemon_tyrantrum_normalEntry;
  "0698": V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry;
  "0699": V0699_pokemon_aurorusEntry | V0699_pokemon_aurorus_normalEntry;
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
  "0710": V0710_pokemon_pumpkabooEntry | V0710_pokemon_pumpkaboo_averageEntry | V0710_pokemon_pumpkaboo_largeEntry | V0710_pokemon_pumpkaboo_smallEntry | V0710_pokemon_pumpkaboo_superEntry;
  "0711": V0711_pokemon_gourgeistEntry | V0711_pokemon_gourgeist_averageEntry | V0711_pokemon_gourgeist_largeEntry | V0711_pokemon_gourgeist_smallEntry | V0711_pokemon_gourgeist_superEntry;
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
  "AEGISLASH": V0681_pokemon_aegislashEntry | V0681_pokemon_aegislash_bladeEntry | V0681_pokemon_aegislash_shieldEntry;
  "AMAURA": V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry;
  "AROMATISSE": V0683_pokemon_aromatisseEntry | V0683_pokemon_aromatisse_normalEntry;
  "AURORUS": V0699_pokemon_aurorusEntry | V0699_pokemon_aurorus_normalEntry;
  "AVALUGG": V0713_pokemon_avaluggEntry | V0713_pokemon_avalugg_hisuianEntry | V0713_pokemon_avalugg_normalEntry;
  "BARBARACLE": V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry;
  "BERGMITE": V0712_pokemon_bergmiteEntry | V0712_pokemon_bergmite_normalEntry;
  "BINACLE": V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry;
  "BRAIXEN": V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry;
  "BUNNELBY": V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry;
  "CARBINK": V0703_pokemon_carbinkEntry | V0703_pokemon_carbink_normalEntry;
  "CHESNAUGHT": V0652_pokemon_chesnaughtEntry | V0652_pokemon_chesnaught_normalEntry;
  "CHESPIN": V0650_pokemon_chespinEntry | V0650_pokemon_chespin_normalEntry;
  "CLAUNCHER": V0692_pokemon_clauncherEntry | V0692_pokemon_clauncher_normalEntry;
  "CLAWITZER": V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry;
  "DEDENNE": V0702_pokemon_dedenneEntry | V0702_pokemon_dedenne_normalEntry;
  "DELPHOX": V0655_pokemon_delphoxEntry | V0655_pokemon_delphox_normalEntry;
  "DIANCIE": V0719_pokemon_diancieEntry | V0719_pokemon_diancie_normalEntry;
  "DIGGERSBY": V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry;
  "DOUBLADE": V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry;
  "DRAGALGE": V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry;
  "ESPURR": V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry;
  "FENNEKIN": V0653_pokemon_fennekinEntry | V0653_pokemon_fennekin_normalEntry;
  "FLABEBE": V0669_pokemon_flabebeEntry | V0669_pokemon_flabebe_blueEntry | V0669_pokemon_flabebe_orangeEntry | V0669_pokemon_flabebe_redEntry | V0669_pokemon_flabebe_whiteEntry | V0669_pokemon_flabebe_yellowEntry;
  "FLETCHINDER": V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry;
  "FLETCHLING": V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry;
  "FLOETTE": V0670_pokemon_floetteEntry | V0670_pokemon_floette_blueEntry | V0670_pokemon_floette_orangeEntry | V0670_pokemon_floette_redEntry | V0670_pokemon_floette_whiteEntry | V0670_pokemon_floette_yellowEntry;
  "FLORGES": V0671_pokemon_florgesEntry | V0671_pokemon_florges_blueEntry | V0671_pokemon_florges_orangeEntry | V0671_pokemon_florges_redEntry | V0671_pokemon_florges_whiteEntry | V0671_pokemon_florges_yellowEntry;
  "FROAKIE": V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry;
  "FROGADIER": V0657_pokemon_frogadierEntry | V0657_pokemon_frogadier_normalEntry;
  "FURFROU": V0676_pokemon_furfrouEntry | V0676_pokemon_furfrou_dandyEntry | V0676_pokemon_furfrou_debutanteEntry | V0676_pokemon_furfrou_diamondEntry | V0676_pokemon_furfrou_heartEntry | V0676_pokemon_furfrou_kabukiEntry | V0676_pokemon_furfrou_la_reineEntry | V0676_pokemon_furfrou_matronEntry | V0676_pokemon_furfrou_naturalEntry | V0676_pokemon_furfrou_pharaohEntry | V0676_pokemon_furfrou_starEntry;
  "GOGOAT": V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry;
  "GOODRA": V0706_pokemon_goodraEntry | V0706_pokemon_goodra_normalEntry;
  "GOOMY": V0704_pokemon_goomyEntry | V0704_pokemon_goomy_normalEntry;
  "GOURGEIST": V0711_pokemon_gourgeistEntry | V0711_pokemon_gourgeist_averageEntry | V0711_pokemon_gourgeist_largeEntry | V0711_pokemon_gourgeist_smallEntry | V0711_pokemon_gourgeist_superEntry;
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
  "MEOWSTIC": V0678_pokemon_meowsticEntry | V0678_pokemon_meowstic_femaleEntry | V0678_pokemon_meowstic_normalEntry;
  "NOIBAT": V0714_pokemon_noibatEntry | V0714_pokemon_noibat_normalEntry;
  "NOIVERN": V0715_pokemon_noivernEntry | V0715_pokemon_noivern_normalEntry;
  "PANCHAM": V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry;
  "PANGORO": V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry;
  "PHANTUMP": V0708_pokemon_phantumpEntry | V0708_pokemon_phantump_normalEntry;
  "PUMPKABOO": V0710_pokemon_pumpkabooEntry | V0710_pokemon_pumpkaboo_averageEntry | V0710_pokemon_pumpkaboo_largeEntry | V0710_pokemon_pumpkaboo_smallEntry | V0710_pokemon_pumpkaboo_superEntry;
  "PYROAR": V0668_pokemon_pyroarEntry | V0668_pokemon_pyroar_femaleEntry | V0668_pokemon_pyroar_normalEntry;
  "QUILLADIN": V0651_pokemon_quilladinEntry | V0651_pokemon_quilladin_normalEntry;
  "SCATTERBUG": V0664_pokemon_scatterbugEntry | V0664_pokemon_scatterbug_archipelagoEntry | V0664_pokemon_scatterbug_continentalEntry | V0664_pokemon_scatterbug_elegantEntry | V0664_pokemon_scatterbug_fancyEntry | V0664_pokemon_scatterbug_gardenEntry | V0664_pokemon_scatterbug_high_plainsEntry | V0664_pokemon_scatterbug_icy_snowEntry | V0664_pokemon_scatterbug_jungleEntry | V0664_pokemon_scatterbug_marineEntry | V0664_pokemon_scatterbug_meadowEntry | V0664_pokemon_scatterbug_modernEntry | V0664_pokemon_scatterbug_monsoonEntry | V0664_pokemon_scatterbug_oceanEntry | V0664_pokemon_scatterbug_pokeballEntry | V0664_pokemon_scatterbug_polarEntry | V0664_pokemon_scatterbug_riverEntry | V0664_pokemon_scatterbug_sandstormEntry | V0664_pokemon_scatterbug_savannaEntry | V0664_pokemon_scatterbug_sunEntry | V0664_pokemon_scatterbug_tundraEntry;
  "SKIDDO": V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry;
  "SKRELP": V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry;
  "SLIGGOO": V0705_pokemon_sliggooEntry | V0705_pokemon_sliggoo_normalEntry;
  "SLURPUFF": V0685_pokemon_slurpuffEntry | V0685_pokemon_slurpuff_normalEntry;
  "SPEWPA": V0665_pokemon_spewpaEntry | V0665_pokemon_spewpa_archipelagoEntry | V0665_pokemon_spewpa_continentalEntry | V0665_pokemon_spewpa_elegantEntry | V0665_pokemon_spewpa_fancyEntry | V0665_pokemon_spewpa_gardenEntry | V0665_pokemon_spewpa_high_plainsEntry | V0665_pokemon_spewpa_icy_snowEntry | V0665_pokemon_spewpa_jungleEntry | V0665_pokemon_spewpa_marineEntry | V0665_pokemon_spewpa_meadowEntry | V0665_pokemon_spewpa_modernEntry | V0665_pokemon_spewpa_monsoonEntry | V0665_pokemon_spewpa_oceanEntry | V0665_pokemon_spewpa_pokeballEntry | V0665_pokemon_spewpa_polarEntry | V0665_pokemon_spewpa_riverEntry | V0665_pokemon_spewpa_sandstormEntry | V0665_pokemon_spewpa_savannaEntry | V0665_pokemon_spewpa_sunEntry | V0665_pokemon_spewpa_tundraEntry;
  "SPRITZEE": V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry;
  "SWIRLIX": V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry;
  "SYLVEON": V0700_pokemon_sylveonEntry | V0700_pokemon_sylveon_normalEntry;
  "TALONFLAME": V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry;
  "TREVENANT": V0709_pokemon_trevenantEntry | V0709_pokemon_trevenant_normalEntry;
  "TYRANTRUM": V0697_pokemon_tyrantrumEntry | V0697_pokemon_tyrantrum_normalEntry;
  "TYRUNT": V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry;
  "VIVILLON": V0666_pokemon_vivillonEntry | V0666_pokemon_vivillon_archipelagoEntry | V0666_pokemon_vivillon_continentalEntry | V0666_pokemon_vivillon_elegantEntry | V0666_pokemon_vivillon_fancyEntry | V0666_pokemon_vivillon_gardenEntry | V0666_pokemon_vivillon_high_plainsEntry | V0666_pokemon_vivillon_icy_snowEntry | V0666_pokemon_vivillon_jungleEntry | V0666_pokemon_vivillon_marineEntry | V0666_pokemon_vivillon_meadowEntry | V0666_pokemon_vivillon_modernEntry | V0666_pokemon_vivillon_monsoonEntry | V0666_pokemon_vivillon_oceanEntry | V0666_pokemon_vivillon_pokeballEntry | V0666_pokemon_vivillon_polarEntry | V0666_pokemon_vivillon_riverEntry | V0666_pokemon_vivillon_sandstormEntry | V0666_pokemon_vivillon_savannaEntry | V0666_pokemon_vivillon_sunEntry | V0666_pokemon_vivillon_tundraEntry;
  "VOLCANION": V0721_pokemon_volcanionEntry | V0721_pokemon_volcanion_normalEntry;
  "XERNEAS": V0716_pokemon_xerneasEntry | V0716_pokemon_xerneas_normalEntry;
  "YVELTAL": V0717_pokemon_yveltalEntry | V0717_pokemon_yveltal_normalEntry;
  "ZYGARDE": V0718_pokemon_zygardeEntry | V0718_pokemon_zygarde_completeEntry | V0718_pokemon_zygarde_complete_fifty_percentEntry | V0718_pokemon_zygarde_complete_ten_percentEntry | V0718_pokemon_zygarde_fifty_percentEntry | V0718_pokemon_zygarde_ten_percentEntry;
}

export type PokemonSettingsGen6MasterfileEntry = V0650_pokemon_chespinEntry | V0650_pokemon_chespin_normalEntry | V0651_pokemon_quilladinEntry | V0651_pokemon_quilladin_normalEntry | V0652_pokemon_chesnaughtEntry | V0652_pokemon_chesnaught_normalEntry | V0653_pokemon_fennekinEntry | V0653_pokemon_fennekin_normalEntry | V0654_pokemon_braixenEntry | V0654_pokemon_braixen_normalEntry | V0655_pokemon_delphoxEntry | V0655_pokemon_delphox_normalEntry | V0656_pokemon_froakieEntry | V0656_pokemon_froakie_normalEntry | V0657_pokemon_frogadierEntry | V0657_pokemon_frogadier_normalEntry | V0658_pokemon_greninjaEntry | V0658_pokemon_greninja_normalEntry | V0659_pokemon_bunnelbyEntry | V0659_pokemon_bunnelby_normalEntry | V0660_pokemon_diggersbyEntry | V0660_pokemon_diggersby_normalEntry | V0661_pokemon_fletchlingEntry | V0661_pokemon_fletchling_normalEntry | V0662_pokemon_fletchinderEntry | V0662_pokemon_fletchinder_normalEntry | V0663_pokemon_talonflameEntry | V0663_pokemon_talonflame_normalEntry | V0664_pokemon_scatterbugEntry | V0664_pokemon_scatterbug_archipelagoEntry | V0664_pokemon_scatterbug_continentalEntry | V0664_pokemon_scatterbug_elegantEntry | V0664_pokemon_scatterbug_fancyEntry | V0664_pokemon_scatterbug_gardenEntry | V0664_pokemon_scatterbug_high_plainsEntry | V0664_pokemon_scatterbug_icy_snowEntry | V0664_pokemon_scatterbug_jungleEntry | V0664_pokemon_scatterbug_marineEntry | V0664_pokemon_scatterbug_meadowEntry | V0664_pokemon_scatterbug_modernEntry | V0664_pokemon_scatterbug_monsoonEntry | V0664_pokemon_scatterbug_oceanEntry | V0664_pokemon_scatterbug_pokeballEntry | V0664_pokemon_scatterbug_polarEntry | V0664_pokemon_scatterbug_riverEntry | V0664_pokemon_scatterbug_sandstormEntry | V0664_pokemon_scatterbug_savannaEntry | V0664_pokemon_scatterbug_sunEntry | V0664_pokemon_scatterbug_tundraEntry | V0665_pokemon_spewpaEntry | V0665_pokemon_spewpa_archipelagoEntry | V0665_pokemon_spewpa_continentalEntry | V0665_pokemon_spewpa_elegantEntry | V0665_pokemon_spewpa_fancyEntry | V0665_pokemon_spewpa_gardenEntry | V0665_pokemon_spewpa_high_plainsEntry | V0665_pokemon_spewpa_icy_snowEntry | V0665_pokemon_spewpa_jungleEntry | V0665_pokemon_spewpa_marineEntry | V0665_pokemon_spewpa_meadowEntry | V0665_pokemon_spewpa_modernEntry | V0665_pokemon_spewpa_monsoonEntry | V0665_pokemon_spewpa_oceanEntry | V0665_pokemon_spewpa_pokeballEntry | V0665_pokemon_spewpa_polarEntry | V0665_pokemon_spewpa_riverEntry | V0665_pokemon_spewpa_sandstormEntry | V0665_pokemon_spewpa_savannaEntry | V0665_pokemon_spewpa_sunEntry | V0665_pokemon_spewpa_tundraEntry | V0666_pokemon_vivillonEntry | V0666_pokemon_vivillon_archipelagoEntry | V0666_pokemon_vivillon_continentalEntry | V0666_pokemon_vivillon_elegantEntry | V0666_pokemon_vivillon_fancyEntry | V0666_pokemon_vivillon_gardenEntry | V0666_pokemon_vivillon_high_plainsEntry | V0666_pokemon_vivillon_icy_snowEntry | V0666_pokemon_vivillon_jungleEntry | V0666_pokemon_vivillon_marineEntry | V0666_pokemon_vivillon_meadowEntry | V0666_pokemon_vivillon_modernEntry | V0666_pokemon_vivillon_monsoonEntry | V0666_pokemon_vivillon_oceanEntry | V0666_pokemon_vivillon_pokeballEntry | V0666_pokemon_vivillon_polarEntry | V0666_pokemon_vivillon_riverEntry | V0666_pokemon_vivillon_sandstormEntry | V0666_pokemon_vivillon_savannaEntry | V0666_pokemon_vivillon_sunEntry | V0666_pokemon_vivillon_tundraEntry | V0667_pokemon_litleoEntry | V0667_pokemon_litleo_normalEntry | V0668_pokemon_pyroarEntry | V0668_pokemon_pyroar_femaleEntry | V0668_pokemon_pyroar_normalEntry | V0669_pokemon_flabebeEntry | V0669_pokemon_flabebe_blueEntry | V0669_pokemon_flabebe_orangeEntry | V0669_pokemon_flabebe_redEntry | V0669_pokemon_flabebe_whiteEntry | V0669_pokemon_flabebe_yellowEntry | V0670_pokemon_floetteEntry | V0670_pokemon_floette_blueEntry | V0670_pokemon_floette_orangeEntry | V0670_pokemon_floette_redEntry | V0670_pokemon_floette_whiteEntry | V0670_pokemon_floette_yellowEntry | V0671_pokemon_florgesEntry | V0671_pokemon_florges_blueEntry | V0671_pokemon_florges_orangeEntry | V0671_pokemon_florges_redEntry | V0671_pokemon_florges_whiteEntry | V0671_pokemon_florges_yellowEntry | V0672_pokemon_skiddoEntry | V0672_pokemon_skiddo_normalEntry | V0673_pokemon_gogoatEntry | V0673_pokemon_gogoat_normalEntry | V0674_pokemon_panchamEntry | V0674_pokemon_pancham_normalEntry | V0675_pokemon_pangoroEntry | V0675_pokemon_pangoro_normalEntry | V0676_pokemon_furfrouEntry | V0676_pokemon_furfrou_dandyEntry | V0676_pokemon_furfrou_debutanteEntry | V0676_pokemon_furfrou_diamondEntry | V0676_pokemon_furfrou_heartEntry | V0676_pokemon_furfrou_kabukiEntry | V0676_pokemon_furfrou_la_reineEntry | V0676_pokemon_furfrou_matronEntry | V0676_pokemon_furfrou_naturalEntry | V0676_pokemon_furfrou_pharaohEntry | V0676_pokemon_furfrou_starEntry | V0677_pokemon_espurrEntry | V0677_pokemon_espurr_normalEntry | V0678_pokemon_meowsticEntry | V0678_pokemon_meowstic_femaleEntry | V0678_pokemon_meowstic_normalEntry | V0679_pokemon_honedgeEntry | V0679_pokemon_honedge_normalEntry | V0680_pokemon_doubladeEntry | V0680_pokemon_doublade_normalEntry | V0681_pokemon_aegislashEntry | V0681_pokemon_aegislash_bladeEntry | V0681_pokemon_aegislash_shieldEntry | V0682_pokemon_spritzeeEntry | V0682_pokemon_spritzee_normalEntry | V0683_pokemon_aromatisseEntry | V0683_pokemon_aromatisse_normalEntry | V0684_pokemon_swirlixEntry | V0684_pokemon_swirlix_normalEntry | V0685_pokemon_slurpuffEntry | V0685_pokemon_slurpuff_normalEntry | V0686_pokemon_inkayEntry | V0686_pokemon_inkay_normalEntry | V0687_pokemon_malamarEntry | V0687_pokemon_malamar_normalEntry | V0688_pokemon_binacleEntry | V0688_pokemon_binacle_normalEntry | V0689_pokemon_barbaracleEntry | V0689_pokemon_barbaracle_normalEntry | V0690_pokemon_skrelpEntry | V0690_pokemon_skrelp_normalEntry | V0691_pokemon_dragalgeEntry | V0691_pokemon_dragalge_normalEntry | V0692_pokemon_clauncherEntry | V0692_pokemon_clauncher_normalEntry | V0693_pokemon_clawitzerEntry | V0693_pokemon_clawitzer_normalEntry | V0694_pokemon_helioptileEntry | V0694_pokemon_helioptile_normalEntry | V0695_pokemon_helioliskEntry | V0695_pokemon_heliolisk_normalEntry | V0696_pokemon_tyruntEntry | V0696_pokemon_tyrunt_normalEntry | V0697_pokemon_tyrantrumEntry | V0697_pokemon_tyrantrum_normalEntry | V0698_pokemon_amauraEntry | V0698_pokemon_amaura_normalEntry | V0699_pokemon_aurorusEntry | V0699_pokemon_aurorus_normalEntry | V0700_pokemon_sylveonEntry | V0700_pokemon_sylveon_normalEntry | V0701_pokemon_hawluchaEntry | V0701_pokemon_hawlucha_normalEntry | V0702_pokemon_dedenneEntry | V0702_pokemon_dedenne_normalEntry | V0703_pokemon_carbinkEntry | V0703_pokemon_carbink_normalEntry | V0704_pokemon_goomyEntry | V0704_pokemon_goomy_normalEntry | V0705_pokemon_sliggooEntry | V0705_pokemon_sliggoo_normalEntry | V0706_pokemon_goodraEntry | V0706_pokemon_goodra_normalEntry | V0707_pokemon_klefkiEntry | V0707_pokemon_klefki_normalEntry | V0708_pokemon_phantumpEntry | V0708_pokemon_phantump_normalEntry | V0709_pokemon_trevenantEntry | V0709_pokemon_trevenant_normalEntry | V0710_pokemon_pumpkabooEntry | V0710_pokemon_pumpkaboo_averageEntry | V0710_pokemon_pumpkaboo_largeEntry | V0710_pokemon_pumpkaboo_smallEntry | V0710_pokemon_pumpkaboo_superEntry | V0711_pokemon_gourgeistEntry | V0711_pokemon_gourgeist_averageEntry | V0711_pokemon_gourgeist_largeEntry | V0711_pokemon_gourgeist_smallEntry | V0711_pokemon_gourgeist_superEntry | V0712_pokemon_bergmiteEntry | V0712_pokemon_bergmite_normalEntry | V0713_pokemon_avaluggEntry | V0713_pokemon_avalugg_hisuianEntry | V0713_pokemon_avalugg_normalEntry | V0714_pokemon_noibatEntry | V0714_pokemon_noibat_normalEntry | V0715_pokemon_noivernEntry | V0715_pokemon_noivern_normalEntry | V0716_pokemon_xerneasEntry | V0716_pokemon_xerneas_normalEntry | V0717_pokemon_yveltalEntry | V0717_pokemon_yveltal_normalEntry | V0718_pokemon_zygardeEntry | V0718_pokemon_zygarde_completeEntry | V0718_pokemon_zygarde_complete_fifty_percentEntry | V0718_pokemon_zygarde_complete_ten_percentEntry | V0718_pokemon_zygarde_fifty_percentEntry | V0718_pokemon_zygarde_ten_percentEntry | V0719_pokemon_diancieEntry | V0719_pokemon_diancie_normalEntry | V0720_pokemon_hoopaEntry | V0720_pokemon_hoopa_confinedEntry | V0720_pokemon_hoopa_unboundEntry | V0721_pokemon_volcanionEntry | V0721_pokemon_volcanion_normalEntry;

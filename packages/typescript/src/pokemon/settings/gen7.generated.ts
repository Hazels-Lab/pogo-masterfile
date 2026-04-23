/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen7
// Filters: all
// Entries emitted: 215

export interface V0722_pokemon_rowletdatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0722_pokemon_rowletdatapokemonsettingsencounter {
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
export interface V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0722_pokemon_rowletdatapokemonsettingsibfc {

}
export interface V0722_pokemon_rowletdatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0722_pokemon_rowletdatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0722_pokemon_rowletdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0722_pokemon_rowletdata {
  pokemonSettings: V0722_pokemon_rowletdatapokemonsettings;
  templateId: string;
}
export interface V0722_pokemon_rowletEntry {
  templateId: "V0722_POKEMON_ROWLET";
  data: V0722_pokemon_rowletdata;
}
export interface V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0722_pokemon_rowlet_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0722_pokemon_rowlet_normaldata {
  pokemonSettings: V0722_pokemon_rowlet_normaldatapokemonsettings;
  templateId: string;
}
export interface V0722_pokemon_rowlet_normalEntry {
  templateId: "V0722_POKEMON_ROWLET_NORMAL";
  data: V0722_pokemon_rowlet_normaldata;
}
export interface V0723_pokemon_dartrixdatapokemonsettingsencounter {
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
export interface V0723_pokemon_dartrixdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0723_pokemon_dartrixdata {
  pokemonSettings: V0723_pokemon_dartrixdatapokemonsettings;
  templateId: string;
}
export interface V0723_pokemon_dartrixEntry {
  templateId: "V0723_POKEMON_DARTRIX";
  data: V0723_pokemon_dartrixdata;
}
export interface V0723_pokemon_dartrix_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0723_pokemon_dartrix_normaldata {
  pokemonSettings: V0723_pokemon_dartrix_normaldatapokemonsettings;
  templateId: string;
}
export interface V0723_pokemon_dartrix_normalEntry {
  templateId: "V0723_POKEMON_DARTRIX_NORMAL";
  data: V0723_pokemon_dartrix_normaldata;
}
export interface V0724_pokemon_decidueyedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0724_pokemon_decidueyedata {
  pokemonSettings: V0724_pokemon_decidueyedatapokemonsettings;
  templateId: string;
}
export interface V0724_pokemon_decidueyeEntry {
  templateId: "V0724_POKEMON_DECIDUEYE";
  data: V0724_pokemon_decidueyedata;
}
export interface V0724_pokemon_decidueye_hisuiandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0724_pokemon_decidueye_hisuiandata {
  pokemonSettings: V0724_pokemon_decidueye_hisuiandatapokemonsettings;
  templateId: string;
}
export interface V0724_pokemon_decidueye_hisuianEntry {
  templateId: "V0724_POKEMON_DECIDUEYE_HISUIAN";
  data: V0724_pokemon_decidueye_hisuiandata;
}
export interface V0724_pokemon_decidueye_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0724_pokemon_decidueye_normaldata {
  pokemonSettings: V0724_pokemon_decidueye_normaldatapokemonsettings;
  templateId: string;
}
export interface V0724_pokemon_decidueye_normalEntry {
  templateId: "V0724_POKEMON_DECIDUEYE_NORMAL";
  data: V0724_pokemon_decidueye_normaldata;
}
export interface V0725_pokemon_littendatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0725_pokemon_littendata {
  pokemonSettings: V0725_pokemon_littendatapokemonsettings;
  templateId: string;
}
export interface V0725_pokemon_littenEntry {
  templateId: "V0725_POKEMON_LITTEN";
  data: V0725_pokemon_littendata;
}
export interface V0725_pokemon_litten_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0725_pokemon_litten_normaldata {
  pokemonSettings: V0725_pokemon_litten_normaldatapokemonsettings;
  templateId: string;
}
export interface V0725_pokemon_litten_normalEntry {
  templateId: "V0725_POKEMON_LITTEN_NORMAL";
  data: V0725_pokemon_litten_normaldata;
}
export interface V0726_pokemon_torracatdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0726_pokemon_torracatdata {
  pokemonSettings: V0726_pokemon_torracatdatapokemonsettings;
  templateId: string;
}
export interface V0726_pokemon_torracatEntry {
  templateId: "V0726_POKEMON_TORRACAT";
  data: V0726_pokemon_torracatdata;
}
export interface V0726_pokemon_torracat_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0726_pokemon_torracat_normaldata {
  pokemonSettings: V0726_pokemon_torracat_normaldatapokemonsettings;
  templateId: string;
}
export interface V0726_pokemon_torracat_normalEntry {
  templateId: "V0726_POKEMON_TORRACAT_NORMAL";
  data: V0726_pokemon_torracat_normaldata;
}
export interface V0727_pokemon_incineroardatapokemonsettingsencounter {
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
  jumpTimeS: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0727_pokemon_incineroardatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0727_pokemon_incineroardatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0727_pokemon_incineroardata {
  pokemonSettings: V0727_pokemon_incineroardatapokemonsettings;
  templateId: string;
}
export interface V0727_pokemon_incineroarEntry {
  templateId: "V0727_POKEMON_INCINEROAR";
  data: V0727_pokemon_incineroardata;
}
export interface V0727_pokemon_incineroar_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0727_pokemon_incineroardatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0727_pokemon_incineroar_normaldata {
  pokemonSettings: V0727_pokemon_incineroar_normaldatapokemonsettings;
  templateId: string;
}
export interface V0727_pokemon_incineroar_normalEntry {
  templateId: "V0727_POKEMON_INCINEROAR_NORMAL";
  data: V0727_pokemon_incineroar_normaldata;
}
export interface V0728_pokemon_poppliodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0728_pokemon_poppliodata {
  pokemonSettings: V0728_pokemon_poppliodatapokemonsettings;
  templateId: string;
}
export interface V0728_pokemon_popplioEntry {
  templateId: "V0728_POKEMON_POPPLIO";
  data: V0728_pokemon_poppliodata;
}
export interface V0728_pokemon_popplio_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0728_pokemon_popplio_normaldata {
  pokemonSettings: V0728_pokemon_popplio_normaldatapokemonsettings;
  templateId: string;
}
export interface V0728_pokemon_popplio_normalEntry {
  templateId: "V0728_POKEMON_POPPLIO_NORMAL";
  data: V0728_pokemon_popplio_normaldata;
}
export interface V0729_pokemon_brionnedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0729_pokemon_brionnedata {
  pokemonSettings: V0729_pokemon_brionnedatapokemonsettings;
  templateId: string;
}
export interface V0729_pokemon_brionneEntry {
  templateId: "V0729_POKEMON_BRIONNE";
  data: V0729_pokemon_brionnedata;
}
export interface V0729_pokemon_brionne_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0729_pokemon_brionne_normaldata {
  pokemonSettings: V0729_pokemon_brionne_normaldatapokemonsettings;
  templateId: string;
}
export interface V0729_pokemon_brionne_normalEntry {
  templateId: "V0729_POKEMON_BRIONNE_NORMAL";
  data: V0729_pokemon_brionne_normaldata;
}
export interface V0730_pokemon_primarinadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0730_pokemon_primarinadata {
  pokemonSettings: V0730_pokemon_primarinadatapokemonsettings;
  templateId: string;
}
export interface V0730_pokemon_primarinaEntry {
  templateId: "V0730_POKEMON_PRIMARINA";
  data: V0730_pokemon_primarinadata;
}
export interface V0730_pokemon_primarina_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0730_pokemon_primarina_normaldata {
  pokemonSettings: V0730_pokemon_primarina_normaldatapokemonsettings;
  templateId: string;
}
export interface V0730_pokemon_primarina_normalEntry {
  templateId: "V0730_POKEMON_PRIMARINA_NORMAL";
  data: V0730_pokemon_primarina_normaldata;
}
export interface V0731_pokemon_pikipekdatapokemonsettingsencounter {
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
export interface V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0731_pokemon_pikipekdatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0731_pokemon_pikipekdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0731_pokemon_pikipekdata {
  pokemonSettings: V0731_pokemon_pikipekdatapokemonsettings;
  templateId: string;
}
export interface V0731_pokemon_pikipekEntry {
  templateId: "V0731_POKEMON_PIKIPEK";
  data: V0731_pokemon_pikipekdata;
}
export interface V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0731_pokemon_pikipek_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0731_pokemon_pikipek_normaldata {
  pokemonSettings: V0731_pokemon_pikipek_normaldatapokemonsettings;
  templateId: string;
}
export interface V0731_pokemon_pikipek_normalEntry {
  templateId: "V0731_POKEMON_PIKIPEK_NORMAL";
  data: V0731_pokemon_pikipek_normaldata;
}
export interface V0732_pokemon_trumbeakdatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0732_pokemon_trumbeakdatapokemonsettingsencounter {
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
export interface V0732_pokemon_trumbeakdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0732_pokemon_trumbeakdata {
  pokemonSettings: V0732_pokemon_trumbeakdatapokemonsettings;
  templateId: string;
}
export interface V0732_pokemon_trumbeakEntry {
  templateId: "V0732_POKEMON_TRUMBEAK";
  data: V0732_pokemon_trumbeakdata;
}
export interface V0732_pokemon_trumbeak_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisPhotoEmote1: string;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0732_pokemon_trumbeak_normaldata {
  pokemonSettings: V0732_pokemon_trumbeak_normaldatapokemonsettings;
  templateId: string;
}
export interface V0732_pokemon_trumbeak_normalEntry {
  templateId: "V0732_POKEMON_TRUMBEAK_NORMAL";
  data: V0732_pokemon_trumbeak_normaldata;
}
export interface V0733_pokemon_toucannondatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0733_pokemon_toucannondata {
  pokemonSettings: V0733_pokemon_toucannondatapokemonsettings;
  templateId: string;
}
export interface V0733_pokemon_toucannonEntry {
  templateId: "V0733_POKEMON_TOUCANNON";
  data: V0733_pokemon_toucannondata;
}
export interface V0733_pokemon_toucannon_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0733_pokemon_toucannon_normaldata {
  pokemonSettings: V0733_pokemon_toucannon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0733_pokemon_toucannon_normalEntry {
  templateId: "V0733_POKEMON_TOUCANNON_NORMAL";
  data: V0733_pokemon_toucannon_normaldata;
}
export interface V0734_pokemon_yungoosdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  onlyDaytime: boolean;
}
export interface V0734_pokemon_yungoosdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0734_pokemon_yungoosdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0734_pokemon_yungoosdata {
  pokemonSettings: V0734_pokemon_yungoosdatapokemonsettings;
  templateId: string;
}
export interface V0734_pokemon_yungoosEntry {
  templateId: "V0734_POKEMON_YUNGOOS";
  data: V0734_pokemon_yungoosdata;
}
export interface V0734_pokemon_yungoos_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  onlyDaytime: boolean;
}
export interface V0734_pokemon_yungoos_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0734_pokemon_yungoos_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0734_pokemon_yungoos_normaldata {
  pokemonSettings: V0734_pokemon_yungoos_normaldatapokemonsettings;
  templateId: string;
}
export interface V0734_pokemon_yungoos_normalEntry {
  templateId: "V0734_POKEMON_YUNGOOS_NORMAL";
  data: V0734_pokemon_yungoos_normaldata;
}
export interface V0735_pokemon_gumshoosdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0735_pokemon_gumshoosdata {
  pokemonSettings: V0735_pokemon_gumshoosdatapokemonsettings;
  templateId: string;
}
export interface V0735_pokemon_gumshoosEntry {
  templateId: "V0735_POKEMON_GUMSHOOS";
  data: V0735_pokemon_gumshoosdata;
}
export interface V0735_pokemon_gumshoos_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0735_pokemon_gumshoos_normaldata {
  pokemonSettings: V0735_pokemon_gumshoos_normaldatapokemonsettings;
  templateId: string;
}
export interface V0735_pokemon_gumshoos_normalEntry {
  templateId: "V0735_POKEMON_GUMSHOOS_NORMAL";
  data: V0735_pokemon_gumshoos_normaldata;
}
export interface V0736_pokemon_grubbindatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0736_pokemon_grubbindata {
  pokemonSettings: V0736_pokemon_grubbindatapokemonsettings;
  templateId: string;
}
export interface V0736_pokemon_grubbinEntry {
  templateId: "V0736_POKEMON_GRUBBIN";
  data: V0736_pokemon_grubbindata;
}
export interface V0736_pokemon_grubbin_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0736_pokemon_grubbin_normaldata {
  pokemonSettings: V0736_pokemon_grubbin_normaldatapokemonsettings;
  templateId: string;
}
export interface V0736_pokemon_grubbin_normalEntry {
  templateId: "V0736_POKEMON_GRUBBIN_NORMAL";
  data: V0736_pokemon_grubbin_normaldata;
}
export interface V0737_pokemon_charjabugdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  lureItemRequirement: string;
}
export interface V0737_pokemon_charjabugdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  evolutionBranch: (V0737_pokemon_charjabugdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0737_pokemon_charjabugdata {
  pokemonSettings: V0737_pokemon_charjabugdatapokemonsettings;
  templateId: string;
}
export interface V0737_pokemon_charjabugEntry {
  templateId: "V0737_POKEMON_CHARJABUG";
  data: V0737_pokemon_charjabugdata;
}
export interface V0737_pokemon_charjabug_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  lureItemRequirement: string;
}
export interface V0737_pokemon_charjabug_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  evolutionBranch: (V0737_pokemon_charjabug_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0737_pokemon_charjabug_normaldata {
  pokemonSettings: V0737_pokemon_charjabug_normaldatapokemonsettings;
  templateId: string;
}
export interface V0737_pokemon_charjabug_normalEntry {
  templateId: "V0737_POKEMON_CHARJABUG_NORMAL";
  data: V0737_pokemon_charjabug_normaldata;
}
export interface V0737_pokemon_charjabug_winter_2025Entry {
  templateId: "V0737_POKEMON_CHARJABUG_WINTER_2025";
  data: V0737_pokemon_charjabug_normaldata;
}
export interface V0738_pokemon_vikavoltdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0738_pokemon_vikavoltdata {
  pokemonSettings: V0738_pokemon_vikavoltdatapokemonsettings;
  templateId: string;
}
export interface V0738_pokemon_vikavoltEntry {
  templateId: "V0738_POKEMON_VIKAVOLT";
  data: V0738_pokemon_vikavoltdata;
}
export interface V0738_pokemon_vikavolt_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0738_pokemon_vikavolt_normaldata {
  pokemonSettings: V0738_pokemon_vikavolt_normaldatapokemonsettings;
  templateId: string;
}
export interface V0738_pokemon_vikavolt_normalEntry {
  templateId: "V0738_POKEMON_VIKAVOLT_NORMAL";
  data: V0738_pokemon_vikavolt_normaldata;
}
export interface V0738_pokemon_vikavolt_winter_2025Entry {
  templateId: "V0738_POKEMON_VIKAVOLT_WINTER_2025";
  data: V0738_pokemon_vikavolt_normaldata;
}
export interface V0739_pokemon_crabrawlerdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  lureItemRequirement: string;
}
export interface V0739_pokemon_crabrawlerdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0739_pokemon_crabrawlerdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0739_pokemon_crabrawlerdata {
  pokemonSettings: V0739_pokemon_crabrawlerdatapokemonsettings;
  templateId: string;
}
export interface V0739_pokemon_crabrawlerEntry {
  templateId: "V0739_POKEMON_CRABRAWLER";
  data: V0739_pokemon_crabrawlerdata;
}
export interface V0739_pokemon_crabrawler_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  lureItemRequirement: string;
}
export interface V0739_pokemon_crabrawler_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0739_pokemon_crabrawler_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0739_pokemon_crabrawler_normaldata {
  pokemonSettings: V0739_pokemon_crabrawler_normaldatapokemonsettings;
  templateId: string;
}
export interface V0739_pokemon_crabrawler_normalEntry {
  templateId: "V0739_POKEMON_CRABRAWLER_NORMAL";
  data: V0739_pokemon_crabrawler_normaldata;
}
export interface V0740_pokemon_crabominabledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0740_pokemon_crabominabledata {
  pokemonSettings: V0740_pokemon_crabominabledatapokemonsettings;
  templateId: string;
}
export interface V0740_pokemon_crabominableEntry {
  templateId: "V0740_POKEMON_CRABOMINABLE";
  data: V0740_pokemon_crabominabledata;
}
export interface V0740_pokemon_crabominable_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0740_pokemon_crabominable_normaldata {
  pokemonSettings: V0740_pokemon_crabominable_normaldatapokemonsettings;
  templateId: string;
}
export interface V0740_pokemon_crabominable_normalEntry {
  templateId: "V0740_POKEMON_CRABOMINABLE_NORMAL";
  data: V0740_pokemon_crabominable_normaldata;
}
export interface V0741_pokemon_oricoriodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0741_pokemon_oricoriodata {
  pokemonSettings: V0741_pokemon_oricoriodatapokemonsettings;
  templateId: string;
}
export interface V0741_pokemon_oricorioEntry {
  templateId: "V0741_POKEMON_ORICORIO";
  data: V0741_pokemon_oricoriodata;
}
export interface V0741_pokemon_oricorio_bailedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0741_pokemon_oricorio_bailedata {
  pokemonSettings: V0741_pokemon_oricorio_bailedatapokemonsettings;
  templateId: string;
}
export interface V0741_pokemon_oricorio_baileEntry {
  templateId: "V0741_POKEMON_ORICORIO_BAILE";
  data: V0741_pokemon_oricorio_bailedata;
}
export interface V0741_pokemon_oricorio_pauEntry {
  templateId: "V0741_POKEMON_ORICORIO_PAU";
  data: V0741_pokemon_oricorio_bailedata;
}
export interface V0741_pokemon_oricorio_pompomEntry {
  templateId: "V0741_POKEMON_ORICORIO_POMPOM";
  data: V0741_pokemon_oricorio_bailedata;
}
export interface V0741_pokemon_oricorio_sensuEntry {
  templateId: "V0741_POKEMON_ORICORIO_SENSU";
  data: V0741_pokemon_oricorio_bailedata;
}
export interface V0742_pokemon_cutieflydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0742_pokemon_cutieflydata {
  pokemonSettings: V0742_pokemon_cutieflydatapokemonsettings;
  templateId: string;
}
export interface V0742_pokemon_cutieflyEntry {
  templateId: "V0742_POKEMON_CUTIEFLY";
  data: V0742_pokemon_cutieflydata;
}
export interface V0742_pokemon_cutiefly_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0742_pokemon_cutiefly_normaldata {
  pokemonSettings: V0742_pokemon_cutiefly_normaldatapokemonsettings;
  templateId: string;
}
export interface V0742_pokemon_cutiefly_normalEntry {
  templateId: "V0742_POKEMON_CUTIEFLY_NORMAL";
  data: V0742_pokemon_cutiefly_normaldata;
}
export interface V0743_pokemon_ribombeedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0743_pokemon_ribombeedata {
  pokemonSettings: V0743_pokemon_ribombeedatapokemonsettings;
  templateId: string;
}
export interface V0743_pokemon_ribombeeEntry {
  templateId: "V0743_POKEMON_RIBOMBEE";
  data: V0743_pokemon_ribombeedata;
}
export interface V0743_pokemon_ribombee_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0743_pokemon_ribombee_normaldata {
  pokemonSettings: V0743_pokemon_ribombee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0743_pokemon_ribombee_normalEntry {
  templateId: "V0743_POKEMON_RIBOMBEE_NORMAL";
  data: V0743_pokemon_ribombee_normaldata;
}
export interface V0744_pokemon_rockruffdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  onlyDaytime?: boolean;
  onlyNighttime?: boolean;
  priority: number;
}
export interface V0744_pokemon_rockruffdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0744_pokemon_rockruffdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0744_pokemon_rockruffdata {
  pokemonSettings: V0744_pokemon_rockruffdatapokemonsettings;
  templateId: string;
}
export interface V0744_pokemon_rockruffEntry {
  templateId: "V0744_POKEMON_ROCKRUFF";
  data: V0744_pokemon_rockruffdata;
}
export interface V0744_pokemon_rockruff_duskdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  onlyDuskPeriod: boolean;
  priority: number;
}
export interface V0744_pokemon_rockruff_duskdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0744_pokemon_rockruff_duskdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0744_pokemon_rockruff_duskdata {
  pokemonSettings: V0744_pokemon_rockruff_duskdatapokemonsettings;
  templateId: string;
}
export interface V0744_pokemon_rockruff_duskEntry {
  templateId: "V0744_POKEMON_ROCKRUFF_DUSK";
  data: V0744_pokemon_rockruff_duskdata;
}
export interface V0744_pokemon_rockruff_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0744_pokemon_rockruffdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0744_pokemon_rockruff_normaldata {
  pokemonSettings: V0744_pokemon_rockruff_normaldatapokemonsettings;
  templateId: string;
}
export interface V0744_pokemon_rockruff_normalEntry {
  templateId: "V0744_POKEMON_ROCKRUFF_NORMAL";
  data: V0744_pokemon_rockruff_normaldata;
}
export interface V0745_pokemon_lycanrocdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0745_pokemon_lycanrocdata {
  pokemonSettings: V0745_pokemon_lycanrocdatapokemonsettings;
  templateId: string;
}
export interface V0745_pokemon_lycanrocEntry {
  templateId: "V0745_POKEMON_LYCANROC";
  data: V0745_pokemon_lycanrocdata;
}
export interface V0745_pokemon_lycanroc_duskdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0745_pokemon_lycanroc_duskdata {
  pokemonSettings: V0745_pokemon_lycanroc_duskdatapokemonsettings;
  templateId: string;
}
export interface V0745_pokemon_lycanroc_duskEntry {
  templateId: "V0745_POKEMON_LYCANROC_DUSK";
  data: V0745_pokemon_lycanroc_duskdata;
}
export interface V0745_pokemon_lycanroc_middayEntry {
  templateId: "V0745_POKEMON_LYCANROC_MIDDAY";
  data: V0745_pokemon_lycanroc_duskdata;
}
export interface V0745_pokemon_lycanroc_midnightEntry {
  templateId: "V0745_POKEMON_LYCANROC_MIDNIGHT";
  data: V0745_pokemon_lycanroc_duskdata;
}
export interface V0746_pokemon_wishiwashidatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0746_pokemon_wishiwashidata {
  pokemonSettings: V0746_pokemon_wishiwashidatapokemonsettings;
  templateId: string;
}
export interface V0746_pokemon_wishiwashiEntry {
  templateId: "V0746_POKEMON_WISHIWASHI";
  data: V0746_pokemon_wishiwashidata;
}
export interface V0746_pokemon_wishiwashi_schooldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0746_pokemon_wishiwashi_schooldata {
  pokemonSettings: V0746_pokemon_wishiwashi_schooldatapokemonsettings;
  templateId: string;
}
export interface V0746_pokemon_wishiwashi_schoolEntry {
  templateId: "V0746_POKEMON_WISHIWASHI_SCHOOL";
  data: V0746_pokemon_wishiwashi_schooldata;
}
export interface V0746_pokemon_wishiwashi_solodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0746_pokemon_wishiwashi_solodata {
  pokemonSettings: V0746_pokemon_wishiwashi_solodatapokemonsettings;
  templateId: string;
}
export interface V0746_pokemon_wishiwashi_soloEntry {
  templateId: "V0746_POKEMON_WISHIWASHI_SOLO";
  data: V0746_pokemon_wishiwashi_solodata;
}
export interface V0747_pokemon_mareaniedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0747_pokemon_mareaniedata {
  pokemonSettings: V0747_pokemon_mareaniedatapokemonsettings;
  templateId: string;
}
export interface V0747_pokemon_mareanieEntry {
  templateId: "V0747_POKEMON_MAREANIE";
  data: V0747_pokemon_mareaniedata;
}
export interface V0747_pokemon_mareanie_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0747_pokemon_mareanie_normaldata {
  pokemonSettings: V0747_pokemon_mareanie_normaldatapokemonsettings;
  templateId: string;
}
export interface V0747_pokemon_mareanie_normalEntry {
  templateId: "V0747_POKEMON_MAREANIE_NORMAL";
  data: V0747_pokemon_mareanie_normaldata;
}
export interface V0748_pokemon_toxapexdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0748_pokemon_toxapexdata {
  pokemonSettings: V0748_pokemon_toxapexdatapokemonsettings;
  templateId: string;
}
export interface V0748_pokemon_toxapexEntry {
  templateId: "V0748_POKEMON_TOXAPEX";
  data: V0748_pokemon_toxapexdata;
}
export interface V0748_pokemon_toxapex_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0748_pokemon_toxapex_normaldata {
  pokemonSettings: V0748_pokemon_toxapex_normaldatapokemonsettings;
  templateId: string;
}
export interface V0748_pokemon_toxapex_normalEntry {
  templateId: "V0748_POKEMON_TOXAPEX_NORMAL";
  data: V0748_pokemon_toxapex_normaldata;
}
export interface V0749_pokemon_mudbraydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0749_pokemon_mudbraydata {
  pokemonSettings: V0749_pokemon_mudbraydatapokemonsettings;
  templateId: string;
}
export interface V0749_pokemon_mudbrayEntry {
  templateId: "V0749_POKEMON_MUDBRAY";
  data: V0749_pokemon_mudbraydata;
}
export interface V0749_pokemon_mudbray_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0749_pokemon_mudbray_normaldata {
  pokemonSettings: V0749_pokemon_mudbray_normaldatapokemonsettings;
  templateId: string;
}
export interface V0749_pokemon_mudbray_normalEntry {
  templateId: "V0749_POKEMON_MUDBRAY_NORMAL";
  data: V0749_pokemon_mudbray_normaldata;
}
export interface V0750_pokemon_mudsdaleEntry {
  templateId: "V0750_POKEMON_MUDSDALE";
  data: V0735_pokemon_gumshoosdata;
}
export interface V0750_pokemon_mudsdale_normalEntry {
  templateId: "V0750_POKEMON_MUDSDALE_NORMAL";
  data: V0735_pokemon_gumshoos_normaldata;
}
export interface V0751_pokemon_dewpiderdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0751_pokemon_dewpiderdata {
  pokemonSettings: V0751_pokemon_dewpiderdatapokemonsettings;
  templateId: string;
}
export interface V0751_pokemon_dewpiderEntry {
  templateId: "V0751_POKEMON_DEWPIDER";
  data: V0751_pokemon_dewpiderdata;
}
export interface V0751_pokemon_dewpider_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0731_pokemon_pikipekdatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0751_pokemon_dewpider_normaldata {
  pokemonSettings: V0751_pokemon_dewpider_normaldatapokemonsettings;
  templateId: string;
}
export interface V0751_pokemon_dewpider_normalEntry {
  templateId: "V0751_POKEMON_DEWPIDER_NORMAL";
  data: V0751_pokemon_dewpider_normaldata;
}
export interface V0752_pokemon_araquaniddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0752_pokemon_araquaniddata {
  pokemonSettings: V0752_pokemon_araquaniddatapokemonsettings;
  templateId: string;
}
export interface V0752_pokemon_araquanidEntry {
  templateId: "V0752_POKEMON_ARAQUANID";
  data: V0752_pokemon_araquaniddata;
}
export interface V0752_pokemon_araquanid_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0752_pokemon_araquanid_normaldata {
  pokemonSettings: V0752_pokemon_araquanid_normaldatapokemonsettings;
  templateId: string;
}
export interface V0752_pokemon_araquanid_normalEntry {
  templateId: "V0752_POKEMON_ARAQUANID_NORMAL";
  data: V0752_pokemon_araquanid_normaldata;
}
export interface V0753_pokemon_fomantisdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0734_pokemon_yungoosdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0753_pokemon_fomantisdata {
  pokemonSettings: V0753_pokemon_fomantisdatapokemonsettings;
  templateId: string;
}
export interface V0753_pokemon_fomantisEntry {
  templateId: "V0753_POKEMON_FOMANTIS";
  data: V0753_pokemon_fomantisdata;
}
export interface V0753_pokemon_fomantis_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0734_pokemon_yungoos_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0753_pokemon_fomantis_normaldata {
  pokemonSettings: V0753_pokemon_fomantis_normaldatapokemonsettings;
  templateId: string;
}
export interface V0753_pokemon_fomantis_normalEntry {
  templateId: "V0753_POKEMON_FOMANTIS_NORMAL";
  data: V0753_pokemon_fomantis_normaldata;
}
export interface V0754_pokemon_lurantisEntry {
  templateId: "V0754_POKEMON_LURANTIS";
  data: V0735_pokemon_gumshoosdata;
}
export interface V0754_pokemon_lurantis_normalEntry {
  templateId: "V0754_POKEMON_LURANTIS_NORMAL";
  data: V0735_pokemon_gumshoos_normaldata;
}
export interface V0755_pokemon_morelulldatapokemonsettingsencounter {
  attackProbability: number;
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
  movementType: string;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0755_pokemon_morelulldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0755_pokemon_morelulldatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0755_pokemon_morelulldata {
  pokemonSettings: V0755_pokemon_morelulldatapokemonsettings;
  templateId: string;
}
export interface V0755_pokemon_morelullEntry {
  templateId: "V0755_POKEMON_MORELULL";
  data: V0755_pokemon_morelulldata;
}
export interface V0755_pokemon_morelull_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0755_pokemon_morelulldatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0755_pokemon_morelull_normaldata {
  pokemonSettings: V0755_pokemon_morelull_normaldatapokemonsettings;
  templateId: string;
}
export interface V0755_pokemon_morelull_normalEntry {
  templateId: "V0755_POKEMON_MORELULL_NORMAL";
  data: V0755_pokemon_morelull_normaldata;
}
export interface V0756_pokemon_shiinoticdatapokemonsettingsencounter {
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
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0756_pokemon_shiinoticdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0756_pokemon_shiinoticdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0756_pokemon_shiinoticdata {
  pokemonSettings: V0756_pokemon_shiinoticdatapokemonsettings;
  templateId: string;
}
export interface V0756_pokemon_shiinoticEntry {
  templateId: "V0756_POKEMON_SHIINOTIC";
  data: V0756_pokemon_shiinoticdata;
}
export interface V0756_pokemon_shiinotic_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0756_pokemon_shiinoticdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0756_pokemon_shiinotic_normaldata {
  pokemonSettings: V0756_pokemon_shiinotic_normaldatapokemonsettings;
  templateId: string;
}
export interface V0756_pokemon_shiinotic_normalEntry {
  templateId: "V0756_POKEMON_SHIINOTIC_NORMAL";
  data: V0756_pokemon_shiinotic_normaldata;
}
export interface V0757_pokemon_salanditdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  genderRequirement: string;
}
export interface V0757_pokemon_salanditdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0757_pokemon_salanditdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0757_pokemon_salanditdata {
  pokemonSettings: V0757_pokemon_salanditdatapokemonsettings;
  templateId: string;
}
export interface V0757_pokemon_salanditEntry {
  templateId: "V0757_POKEMON_SALANDIT";
  data: V0757_pokemon_salanditdata;
}
export interface V0757_pokemon_salandit_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  genderRequirement: string;
}
export interface V0757_pokemon_salandit_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0757_pokemon_salandit_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0757_pokemon_salandit_normaldata {
  pokemonSettings: V0757_pokemon_salandit_normaldatapokemonsettings;
  templateId: string;
}
export interface V0757_pokemon_salandit_normalEntry {
  templateId: "V0757_POKEMON_SALANDIT_NORMAL";
  data: V0757_pokemon_salandit_normaldata;
}
export interface V0758_pokemon_salazzledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0758_pokemon_salazzledata {
  pokemonSettings: V0758_pokemon_salazzledatapokemonsettings;
  templateId: string;
}
export interface V0758_pokemon_salazzleEntry {
  templateId: "V0758_POKEMON_SALAZZLE";
  data: V0758_pokemon_salazzledata;
}
export interface V0758_pokemon_salazzle_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0758_pokemon_salazzle_normaldata {
  pokemonSettings: V0758_pokemon_salazzle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0758_pokemon_salazzle_normalEntry {
  templateId: "V0758_POKEMON_SALAZZLE_NORMAL";
  data: V0758_pokemon_salazzle_normaldata;
}
export interface V0759_pokemon_stuffuldatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  collisionHeadRadiusM: number;
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
export interface V0759_pokemon_stuffuldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0759_pokemon_stuffuldatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipekdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0759_pokemon_stuffuldata {
  pokemonSettings: V0759_pokemon_stuffuldatapokemonsettings;
  templateId: string;
}
export interface V0759_pokemon_stuffulEntry {
  templateId: "V0759_POKEMON_STUFFUL";
  data: V0759_pokemon_stuffuldata;
}
export interface V0759_pokemon_stufful_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0759_pokemon_stuffuldatapokemonsettingsencounter;
  evolutionBranch: (V0731_pokemon_pikipek_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0759_pokemon_stufful_normaldata {
  pokemonSettings: V0759_pokemon_stufful_normaldatapokemonsettings;
  templateId: string;
}
export interface V0759_pokemon_stufful_normalEntry {
  templateId: "V0759_POKEMON_STUFFUL_NORMAL";
  data: V0759_pokemon_stufful_normaldata;
}
export interface V0760_pokemon_beweardatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0760_pokemon_beweardata {
  pokemonSettings: V0760_pokemon_beweardatapokemonsettings;
  templateId: string;
}
export interface V0760_pokemon_bewearEntry {
  templateId: "V0760_POKEMON_BEWEAR";
  data: V0760_pokemon_beweardata;
}
export interface V0760_pokemon_bewear_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0732_pokemon_trumbeakdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  shadow: V0731_pokemon_pikipekdatapokemonsettingsshadow;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0760_pokemon_bewear_normaldata {
  pokemonSettings: V0760_pokemon_bewear_normaldatapokemonsettings;
  templateId: string;
}
export interface V0760_pokemon_bewear_normalEntry {
  templateId: "V0760_POKEMON_BEWEAR_NORMAL";
  data: V0760_pokemon_bewear_normaldata;
}
export interface V0760_pokemon_bewear_wildarea_2025Entry {
  templateId: "V0760_POKEMON_BEWEAR_WILDAREA_2025";
  data: V0760_pokemon_bewear_normaldata;
}
export interface V0761_pokemon_bounsweetEntry {
  templateId: "V0761_POKEMON_BOUNSWEET";
  data: V0749_pokemon_mudbraydata;
}
export interface V0761_pokemon_bounsweet_normalEntry {
  templateId: "V0761_POKEMON_BOUNSWEET_NORMAL";
  data: V0749_pokemon_mudbray_normaldata;
}
export interface V0762_pokemon_steeneedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0762_pokemon_steeneedata {
  pokemonSettings: V0762_pokemon_steeneedatapokemonsettings;
  templateId: string;
}
export interface V0762_pokemon_steeneeEntry {
  templateId: "V0762_POKEMON_STEENEE";
  data: V0762_pokemon_steeneedata;
}
export interface V0762_pokemon_steenee_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0762_pokemon_steenee_normaldata {
  pokemonSettings: V0762_pokemon_steenee_normaldatapokemonsettings;
  templateId: string;
}
export interface V0762_pokemon_steenee_normalEntry {
  templateId: "V0762_POKEMON_STEENEE_NORMAL";
  data: V0762_pokemon_steenee_normaldata;
}
export interface V0763_pokemon_tsareenadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0763_pokemon_tsareenadata {
  pokemonSettings: V0763_pokemon_tsareenadatapokemonsettings;
  templateId: string;
}
export interface V0763_pokemon_tsareenaEntry {
  templateId: "V0763_POKEMON_TSAREENA";
  data: V0763_pokemon_tsareenadata;
}
export interface V0763_pokemon_tsareena_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0763_pokemon_tsareena_normaldata {
  pokemonSettings: V0763_pokemon_tsareena_normaldatapokemonsettings;
  templateId: string;
}
export interface V0763_pokemon_tsareena_normalEntry {
  templateId: "V0763_POKEMON_TSAREENA_NORMAL";
  data: V0763_pokemon_tsareena_normaldata;
}
export interface V0764_pokemon_comfeydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0764_pokemon_comfeydata {
  pokemonSettings: V0764_pokemon_comfeydatapokemonsettings;
  templateId: string;
}
export interface V0764_pokemon_comfeyEntry {
  templateId: "V0764_POKEMON_COMFEY";
  data: V0764_pokemon_comfeydata;
}
export interface V0764_pokemon_comfey_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0764_pokemon_comfey_normaldata {
  pokemonSettings: V0764_pokemon_comfey_normaldatapokemonsettings;
  templateId: string;
}
export interface V0764_pokemon_comfey_normalEntry {
  templateId: "V0764_POKEMON_COMFEY_NORMAL";
  data: V0764_pokemon_comfey_normaldata;
}
export interface V0765_pokemon_orangurudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0765_pokemon_orangurudata {
  pokemonSettings: V0765_pokemon_orangurudatapokemonsettings;
  templateId: string;
}
export interface V0765_pokemon_oranguruEntry {
  templateId: "V0765_POKEMON_ORANGURU";
  data: V0765_pokemon_orangurudata;
}
export interface V0765_pokemon_oranguru_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0765_pokemon_oranguru_normaldata {
  pokemonSettings: V0765_pokemon_oranguru_normaldatapokemonsettings;
  templateId: string;
}
export interface V0765_pokemon_oranguru_normalEntry {
  templateId: "V0765_POKEMON_ORANGURU_NORMAL";
  data: V0765_pokemon_oranguru_normaldata;
}
export interface V0766_pokemon_passimiandatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0766_pokemon_passimiandata {
  pokemonSettings: V0766_pokemon_passimiandatapokemonsettings;
  templateId: string;
}
export interface V0766_pokemon_passimianEntry {
  templateId: "V0766_POKEMON_PASSIMIAN";
  data: V0766_pokemon_passimiandata;
}
export interface V0766_pokemon_passimian_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0766_pokemon_passimian_normaldata {
  pokemonSettings: V0766_pokemon_passimian_normaldatapokemonsettings;
  templateId: string;
}
export interface V0766_pokemon_passimian_normalEntry {
  templateId: "V0766_POKEMON_PASSIMIAN_NORMAL";
  data: V0766_pokemon_passimian_normaldata;
}
export interface V0767_pokemon_wimpoddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0767_pokemon_wimpoddata {
  pokemonSettings: V0767_pokemon_wimpoddatapokemonsettings;
  templateId: string;
}
export interface V0767_pokemon_wimpodEntry {
  templateId: "V0767_POKEMON_WIMPOD";
  data: V0767_pokemon_wimpoddata;
}
export interface V0767_pokemon_wimpod_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0767_pokemon_wimpod_normaldata {
  pokemonSettings: V0767_pokemon_wimpod_normaldatapokemonsettings;
  templateId: string;
}
export interface V0767_pokemon_wimpod_normalEntry {
  templateId: "V0767_POKEMON_WIMPOD_NORMAL";
  data: V0767_pokemon_wimpod_normaldata;
}
export interface V0768_pokemon_golisopoddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0768_pokemon_golisopoddata {
  pokemonSettings: V0768_pokemon_golisopoddatapokemonsettings;
  templateId: string;
}
export interface V0768_pokemon_golisopodEntry {
  templateId: "V0768_POKEMON_GOLISOPOD";
  data: V0768_pokemon_golisopoddata;
}
export interface V0768_pokemon_golisopod_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0768_pokemon_golisopod_normaldata {
  pokemonSettings: V0768_pokemon_golisopod_normaldatapokemonsettings;
  templateId: string;
}
export interface V0768_pokemon_golisopod_normalEntry {
  templateId: "V0768_POKEMON_GOLISOPOD_NORMAL";
  data: V0768_pokemon_golisopod_normaldata;
}
export interface V0769_pokemon_sandygastdatapokemonsettingsencounter {
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
export interface V0769_pokemon_sandygastdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0769_pokemon_sandygastdata {
  pokemonSettings: V0769_pokemon_sandygastdatapokemonsettings;
  templateId: string;
}
export interface V0769_pokemon_sandygastEntry {
  templateId: "V0769_POKEMON_SANDYGAST";
  data: V0769_pokemon_sandygastdata;
}
export interface V0769_pokemon_sandygast_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0769_pokemon_sandygast_normaldata {
  pokemonSettings: V0769_pokemon_sandygast_normaldatapokemonsettings;
  templateId: string;
}
export interface V0769_pokemon_sandygast_normalEntry {
  templateId: "V0769_POKEMON_SANDYGAST_NORMAL";
  data: V0769_pokemon_sandygast_normaldata;
}
export interface V0770_pokemon_palossanddatapokemonsettingsencounter {
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
export interface V0770_pokemon_palossanddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0770_pokemon_palossanddatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0770_pokemon_palossanddata {
  pokemonSettings: V0770_pokemon_palossanddatapokemonsettings;
  templateId: string;
}
export interface V0770_pokemon_palossandEntry {
  templateId: "V0770_POKEMON_PALOSSAND";
  data: V0770_pokemon_palossanddata;
}
export interface V0770_pokemon_palossand_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0770_pokemon_palossanddatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0770_pokemon_palossand_normaldata {
  pokemonSettings: V0770_pokemon_palossand_normaldatapokemonsettings;
  templateId: string;
}
export interface V0770_pokemon_palossand_normalEntry {
  templateId: "V0770_POKEMON_PALOSSAND_NORMAL";
  data: V0770_pokemon_palossand_normaldata;
}
export interface V0771_pokemon_pyukumukudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0771_pokemon_pyukumukudata {
  pokemonSettings: V0771_pokemon_pyukumukudatapokemonsettings;
  templateId: string;
}
export interface V0771_pokemon_pyukumukuEntry {
  templateId: "V0771_POKEMON_PYUKUMUKU";
  data: V0771_pokemon_pyukumukudata;
}
export interface V0771_pokemon_pyukumuku_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0771_pokemon_pyukumuku_normaldata {
  pokemonSettings: V0771_pokemon_pyukumuku_normaldatapokemonsettings;
  templateId: string;
}
export interface V0771_pokemon_pyukumuku_normalEntry {
  templateId: "V0771_POKEMON_PYUKUMUKU_NORMAL";
  data: V0771_pokemon_pyukumuku_normaldata;
}
export interface V0772_pokemon_type_nulldatapokemonsettingsencounter {
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
export interface V0772_pokemon_type_nulldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0772_pokemon_type_nulldata {
  pokemonSettings: V0772_pokemon_type_nulldatapokemonsettings;
  templateId: string;
}
export interface V0772_pokemon_type_nullEntry {
  templateId: "V0772_POKEMON_TYPE_NULL";
  data: V0772_pokemon_type_nulldata;
}
export interface V0772_pokemon_type_null_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0772_pokemon_type_null_normaldata {
  pokemonSettings: V0772_pokemon_type_null_normaldatapokemonsettings;
  templateId: string;
}
export interface V0772_pokemon_type_null_normalEntry {
  templateId: "V0772_POKEMON_TYPE_NULL_NORMAL";
  data: V0772_pokemon_type_null_normaldata;
}
export interface V0773_pokemon_silvallydatapokemonsettingsencounter {
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
export interface V0773_pokemon_silvallydatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0773_pokemon_silvallydatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0773_pokemon_silvallydata {
  pokemonSettings: V0773_pokemon_silvallydatapokemonsettings;
  templateId: string;
}
export interface V0773_pokemon_silvallyEntry {
  templateId: "V0773_POKEMON_SILVALLY";
  data: V0773_pokemon_silvallydata;
}
export interface V0773_pokemon_silvally_bugdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0773_pokemon_silvallydatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0773_pokemon_silvally_bugdata {
  pokemonSettings: V0773_pokemon_silvally_bugdatapokemonsettings;
  templateId: string;
}
export interface V0773_pokemon_silvally_bugEntry {
  templateId: "V0773_POKEMON_SILVALLY_BUG";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_darkEntry {
  templateId: "V0773_POKEMON_SILVALLY_DARK";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_dragonEntry {
  templateId: "V0773_POKEMON_SILVALLY_DRAGON";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_electricEntry {
  templateId: "V0773_POKEMON_SILVALLY_ELECTRIC";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_fairyEntry {
  templateId: "V0773_POKEMON_SILVALLY_FAIRY";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_fightingEntry {
  templateId: "V0773_POKEMON_SILVALLY_FIGHTING";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_fireEntry {
  templateId: "V0773_POKEMON_SILVALLY_FIRE";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_flyingEntry {
  templateId: "V0773_POKEMON_SILVALLY_FLYING";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_ghostEntry {
  templateId: "V0773_POKEMON_SILVALLY_GHOST";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_grassEntry {
  templateId: "V0773_POKEMON_SILVALLY_GRASS";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_groundEntry {
  templateId: "V0773_POKEMON_SILVALLY_GROUND";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_iceEntry {
  templateId: "V0773_POKEMON_SILVALLY_ICE";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_normalEntry {
  templateId: "V0773_POKEMON_SILVALLY_NORMAL";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_poisonEntry {
  templateId: "V0773_POKEMON_SILVALLY_POISON";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_psychicEntry {
  templateId: "V0773_POKEMON_SILVALLY_PSYCHIC";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_rockEntry {
  templateId: "V0773_POKEMON_SILVALLY_ROCK";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_steelEntry {
  templateId: "V0773_POKEMON_SILVALLY_STEEL";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0773_pokemon_silvally_waterEntry {
  templateId: "V0773_POKEMON_SILVALLY_WATER";
  data: V0773_pokemon_silvally_bugdata;
}
export interface V0774_pokemon_miniordatapokemonsettingsencounter {
  attackProbability: number;
  cameraDistance: number;
  dodgeDistance: number;
  dodgeDurationS: number;
  dodgeProbability: number;
  maxPokemonActionFrequencyS: number;
  minPokemonActionFrequencyS: number;
  movementType: string;
}
export interface V0774_pokemon_miniordatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0774_pokemon_miniordatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0774_pokemon_miniordata {
  pokemonSettings: V0774_pokemon_miniordatapokemonsettings;
  templateId: string;
}
export interface V0774_pokemon_miniorEntry {
  templateId: "V0774_POKEMON_MINIOR";
  data: V0774_pokemon_miniordata;
}
export interface V0774_pokemon_minior_bluedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0774_pokemon_miniordatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0774_pokemon_minior_bluedata {
  pokemonSettings: V0774_pokemon_minior_bluedatapokemonsettings;
  templateId: string;
}
export interface V0774_pokemon_minior_blueEntry {
  templateId: "V0774_POKEMON_MINIOR_BLUE";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_greenEntry {
  templateId: "V0774_POKEMON_MINIOR_GREEN";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_indigoEntry {
  templateId: "V0774_POKEMON_MINIOR_INDIGO";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_orangeEntry {
  templateId: "V0774_POKEMON_MINIOR_ORANGE";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_redEntry {
  templateId: "V0774_POKEMON_MINIOR_RED";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_violetEntry {
  templateId: "V0774_POKEMON_MINIOR_VIOLET";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0774_pokemon_minior_yellowEntry {
  templateId: "V0774_POKEMON_MINIOR_YELLOW";
  data: V0774_pokemon_minior_bluedata;
}
export interface V0775_pokemon_komaladatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0775_pokemon_komaladata {
  pokemonSettings: V0775_pokemon_komaladatapokemonsettings;
  templateId: string;
}
export interface V0775_pokemon_komalaEntry {
  templateId: "V0775_POKEMON_KOMALA";
  data: V0775_pokemon_komaladata;
}
export interface V0775_pokemon_komala_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0775_pokemon_komala_normaldata {
  pokemonSettings: V0775_pokemon_komala_normaldatapokemonsettings;
  templateId: string;
}
export interface V0775_pokemon_komala_normalEntry {
  templateId: "V0775_POKEMON_KOMALA_NORMAL";
  data: V0775_pokemon_komala_normaldata;
}
export interface V0776_pokemon_turtonatordatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0776_pokemon_turtonatordata {
  pokemonSettings: V0776_pokemon_turtonatordatapokemonsettings;
  templateId: string;
}
export interface V0776_pokemon_turtonatorEntry {
  templateId: "V0776_POKEMON_TURTONATOR";
  data: V0776_pokemon_turtonatordata;
}
export interface V0776_pokemon_turtonator_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0776_pokemon_turtonator_normaldata {
  pokemonSettings: V0776_pokemon_turtonator_normaldatapokemonsettings;
  templateId: string;
}
export interface V0776_pokemon_turtonator_normalEntry {
  templateId: "V0776_POKEMON_TURTONATOR_NORMAL";
  data: V0776_pokemon_turtonator_normaldata;
}
export interface V0777_pokemon_togedemarudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0777_pokemon_togedemarudata {
  pokemonSettings: V0777_pokemon_togedemarudatapokemonsettings;
  templateId: string;
}
export interface V0777_pokemon_togedemaruEntry {
  templateId: "V0777_POKEMON_TOGEDEMARU";
  data: V0777_pokemon_togedemarudata;
}
export interface V0777_pokemon_togedemaru_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0777_pokemon_togedemaru_normaldata {
  pokemonSettings: V0777_pokemon_togedemaru_normaldatapokemonsettings;
  templateId: string;
}
export interface V0777_pokemon_togedemaru_normalEntry {
  templateId: "V0777_POKEMON_TOGEDEMARU_NORMAL";
  data: V0777_pokemon_togedemaru_normaldata;
}
export interface V0778_pokemon_mimikyudatapokemonsettingsibfcalternatetodefaultibfcsettings {
  animationDurationTurns: number;
  animationPlayPoint: string;
  ibfcVfxKey: string;
}
export interface V0778_pokemon_mimikyudatapokemonsettingsibfc {
  alternateForm: string;
  alternateToDefaultIbfcSettings: V0778_pokemon_mimikyudatapokemonsettingsibfcalternatetodefaultibfcsettings;
  combatEnable: boolean;
  defaultForm: string;
  defaultToAlternateIbfcSettings: V0778_pokemon_mimikyudatapokemonsettingsibfcalternatetodefaultibfcsettings;
}
export interface V0778_pokemon_mimikyudatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0778_pokemon_mimikyudatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0778_pokemon_mimikyudata {
  pokemonSettings: V0778_pokemon_mimikyudatapokemonsettings;
  templateId: string;
}
export interface V0778_pokemon_mimikyuEntry {
  templateId: "V0778_POKEMON_MIMIKYU";
  data: V0778_pokemon_mimikyudata;
}
export interface V0778_pokemon_mimikyu_busteddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0769_pokemon_sandygastdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0778_pokemon_mimikyu_busteddata {
  pokemonSettings: V0778_pokemon_mimikyu_busteddatapokemonsettings;
  templateId: string;
}
export interface V0778_pokemon_mimikyu_bustedEntry {
  templateId: "V0778_POKEMON_MIMIKYU_BUSTED";
  data: V0778_pokemon_mimikyu_busteddata;
}
export interface V0778_pokemon_mimikyu_disguisedEntry {
  templateId: "V0778_POKEMON_MIMIKYU_DISGUISED";
  data: V0778_pokemon_mimikyu_busteddata;
}
export interface V0779_pokemon_bruxishdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0779_pokemon_bruxishdata {
  pokemonSettings: V0779_pokemon_bruxishdatapokemonsettings;
  templateId: string;
}
export interface V0779_pokemon_bruxishEntry {
  templateId: "V0779_POKEMON_BRUXISH";
  data: V0779_pokemon_bruxishdata;
}
export interface V0779_pokemon_bruxish_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0779_pokemon_bruxish_normaldata {
  pokemonSettings: V0779_pokemon_bruxish_normaldatapokemonsettings;
  templateId: string;
}
export interface V0779_pokemon_bruxish_normalEntry {
  templateId: "V0779_POKEMON_BRUXISH_NORMAL";
  data: V0779_pokemon_bruxish_normaldata;
}
export interface V0780_pokemon_drampadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0780_pokemon_drampadata {
  pokemonSettings: V0780_pokemon_drampadatapokemonsettings;
  templateId: string;
}
export interface V0780_pokemon_drampaEntry {
  templateId: "V0780_POKEMON_DRAMPA";
  data: V0780_pokemon_drampadata;
}
export interface V0780_pokemon_drampa_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0780_pokemon_drampa_normaldata {
  pokemonSettings: V0780_pokemon_drampa_normaldatapokemonsettings;
  templateId: string;
}
export interface V0780_pokemon_drampa_normalEntry {
  templateId: "V0780_POKEMON_DRAMPA_NORMAL";
  data: V0780_pokemon_drampa_normaldata;
}
export interface V0781_pokemon_dhelmisedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0781_pokemon_dhelmisedata {
  pokemonSettings: V0781_pokemon_dhelmisedatapokemonsettings;
  templateId: string;
}
export interface V0781_pokemon_dhelmiseEntry {
  templateId: "V0781_POKEMON_DHELMISE";
  data: V0781_pokemon_dhelmisedata;
}
export interface V0781_pokemon_dhelmise_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0722_pokemon_rowletdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0781_pokemon_dhelmise_normaldata {
  pokemonSettings: V0781_pokemon_dhelmise_normaldatapokemonsettings;
  templateId: string;
}
export interface V0781_pokemon_dhelmise_normalEntry {
  templateId: "V0781_POKEMON_DHELMISE_NORMAL";
  data: V0781_pokemon_dhelmise_normaldata;
}
export interface V0782_pokemon_jangmo_oEntry {
  templateId: "V0782_POKEMON_JANGMO_O";
  data: V0728_pokemon_poppliodata;
}
export interface V0782_pokemon_jangmo_o_normalEntry {
  templateId: "V0782_POKEMON_JANGMO_O_NORMAL";
  data: V0728_pokemon_popplio_normaldata;
}
export interface V0783_pokemon_hakamo_odatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0783_pokemon_hakamo_odata {
  pokemonSettings: V0783_pokemon_hakamo_odatapokemonsettings;
  templateId: string;
}
export interface V0783_pokemon_hakamo_oEntry {
  templateId: "V0783_POKEMON_HAKAMO_O";
  data: V0783_pokemon_hakamo_odata;
}
export interface V0783_pokemon_hakamo_o_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0783_pokemon_hakamo_o_normaldata {
  pokemonSettings: V0783_pokemon_hakamo_o_normaldatapokemonsettings;
  templateId: string;
}
export interface V0783_pokemon_hakamo_o_normalEntry {
  templateId: "V0783_POKEMON_HAKAMO_O_NORMAL";
  data: V0783_pokemon_hakamo_o_normaldata;
}
export interface V0784_pokemon_kommo_odatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0784_pokemon_kommo_odata {
  pokemonSettings: V0784_pokemon_kommo_odatapokemonsettings;
  templateId: string;
}
export interface V0784_pokemon_kommo_oEntry {
  templateId: "V0784_POKEMON_KOMMO_O";
  data: V0784_pokemon_kommo_odata;
}
export interface V0784_pokemon_kommo_o_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0723_pokemon_dartrixdatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0784_pokemon_kommo_o_normaldata {
  pokemonSettings: V0784_pokemon_kommo_o_normaldatapokemonsettings;
  templateId: string;
}
export interface V0784_pokemon_kommo_o_normalEntry {
  templateId: "V0784_POKEMON_KOMMO_O_NORMAL";
  data: V0784_pokemon_kommo_o_normaldata;
}
export interface V0785_pokemon_tapu_kokodatapokemonsettingsencounter {
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
export interface V0785_pokemon_tapu_kokodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0785_pokemon_tapu_kokodata {
  pokemonSettings: V0785_pokemon_tapu_kokodatapokemonsettings;
  templateId: string;
}
export interface V0785_pokemon_tapu_kokoEntry {
  templateId: "V0785_POKEMON_TAPU_KOKO";
  data: V0785_pokemon_tapu_kokodata;
}
export interface V0785_pokemon_tapu_koko_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0785_pokemon_tapu_koko_normaldata {
  pokemonSettings: V0785_pokemon_tapu_koko_normaldatapokemonsettings;
  templateId: string;
}
export interface V0785_pokemon_tapu_koko_normalEntry {
  templateId: "V0785_POKEMON_TAPU_KOKO_NORMAL";
  data: V0785_pokemon_tapu_koko_normaldata;
}
export interface V0786_pokemon_tapu_leleEntry {
  templateId: "V0786_POKEMON_TAPU_LELE";
  data: V0785_pokemon_tapu_kokodata;
}
export interface V0786_pokemon_tapu_lele_normalEntry {
  templateId: "V0786_POKEMON_TAPU_LELE_NORMAL";
  data: V0785_pokemon_tapu_koko_normaldata;
}
export interface V0787_pokemon_tapu_buluEntry {
  templateId: "V0787_POKEMON_TAPU_BULU";
  data: V0785_pokemon_tapu_kokodata;
}
export interface V0787_pokemon_tapu_bulu_normalEntry {
  templateId: "V0787_POKEMON_TAPU_BULU_NORMAL";
  data: V0785_pokemon_tapu_koko_normaldata;
}
export interface V0788_pokemon_tapu_finiEntry {
  templateId: "V0788_POKEMON_TAPU_FINI";
  data: V0785_pokemon_tapu_kokodata;
}
export interface V0788_pokemon_tapu_fini_normalEntry {
  templateId: "V0788_POKEMON_TAPU_FINI_NORMAL";
  data: V0785_pokemon_tapu_koko_normaldata;
}
export interface V0789_pokemon_cosmogdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0789_pokemon_cosmogdata {
  pokemonSettings: V0789_pokemon_cosmogdatapokemonsettings;
  templateId: string;
}
export interface V0789_pokemon_cosmogEntry {
  templateId: "V0789_POKEMON_COSMOG";
  data: V0789_pokemon_cosmogdata;
}
export interface V0789_pokemon_cosmog_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0789_pokemon_cosmog_normaldata {
  pokemonSettings: V0789_pokemon_cosmog_normaldatapokemonsettings;
  templateId: string;
}
export interface V0789_pokemon_cosmog_normalEntry {
  templateId: "V0789_POKEMON_COSMOG_NORMAL";
  data: V0789_pokemon_cosmog_normaldata;
}
export interface V0790_pokemon_cosmoemdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  onlyDaytime?: boolean;
  onlyNighttime?: boolean;
  priority: number;
}
export interface V0790_pokemon_cosmoemdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  evolutionBranch: (V0790_pokemon_cosmoemdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0790_pokemon_cosmoemdata {
  pokemonSettings: V0790_pokemon_cosmoemdatapokemonsettings;
  templateId: string;
}
export interface V0790_pokemon_cosmoemEntry {
  templateId: "V0790_POKEMON_COSMOEM";
  data: V0790_pokemon_cosmoemdata;
}
export interface V0790_pokemon_cosmoem_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  evolutionBranch: (V0744_pokemon_rockruffdatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  irisFlyingHeightLimitMeters: number;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0790_pokemon_cosmoem_normaldata {
  pokemonSettings: V0790_pokemon_cosmoem_normaldatapokemonsettings;
  templateId: string;
}
export interface V0790_pokemon_cosmoem_normalEntry {
  templateId: "V0790_POKEMON_COSMOEM_NORMAL";
  data: V0790_pokemon_cosmoem_normaldata;
}
export interface V0791_pokemon_solgaleodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0791_pokemon_solgaleodata {
  pokemonSettings: V0791_pokemon_solgaleodatapokemonsettings;
  templateId: string;
}
export interface V0791_pokemon_solgaleoEntry {
  templateId: "V0791_POKEMON_SOLGALEO";
  data: V0791_pokemon_solgaleodata;
}
export interface V0791_pokemon_solgaleo_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0791_pokemon_solgaleo_normaldata {
  pokemonSettings: V0791_pokemon_solgaleo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0791_pokemon_solgaleo_normalEntry {
  templateId: "V0791_POKEMON_SOLGALEO_NORMAL";
  data: V0791_pokemon_solgaleo_normaldata;
}
export interface V0792_pokemon_lunaladatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0792_pokemon_lunaladata {
  pokemonSettings: V0792_pokemon_lunaladatapokemonsettings;
  templateId: string;
}
export interface V0792_pokemon_lunalaEntry {
  templateId: "V0792_POKEMON_LUNALA";
  data: V0792_pokemon_lunaladata;
}
export interface V0792_pokemon_lunala_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0792_pokemon_lunala_normaldata {
  pokemonSettings: V0792_pokemon_lunala_normaldatapokemonsettings;
  templateId: string;
}
export interface V0792_pokemon_lunala_normalEntry {
  templateId: "V0792_POKEMON_LUNALA_NORMAL";
  data: V0792_pokemon_lunala_normaldata;
}
export interface V0793_pokemon_nihilegodatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0793_pokemon_nihilegodata {
  pokemonSettings: V0793_pokemon_nihilegodatapokemonsettings;
  templateId: string;
}
export interface V0793_pokemon_nihilegoEntry {
  templateId: "V0793_POKEMON_NIHILEGO";
  data: V0793_pokemon_nihilegodata;
}
export interface V0793_pokemon_nihilego_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0793_pokemon_nihilego_normaldata {
  pokemonSettings: V0793_pokemon_nihilego_normaldatapokemonsettings;
  templateId: string;
}
export interface V0793_pokemon_nihilego_normalEntry {
  templateId: "V0793_POKEMON_NIHILEGO_NORMAL";
  data: V0793_pokemon_nihilego_normaldata;
}
export interface V0794_pokemon_buzzwoledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0794_pokemon_buzzwoledata {
  pokemonSettings: V0794_pokemon_buzzwoledatapokemonsettings;
  templateId: string;
}
export interface V0794_pokemon_buzzwoleEntry {
  templateId: "V0794_POKEMON_BUZZWOLE";
  data: V0794_pokemon_buzzwoledata;
}
export interface V0794_pokemon_buzzwole_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0794_pokemon_buzzwole_normaldata {
  pokemonSettings: V0794_pokemon_buzzwole_normaldatapokemonsettings;
  templateId: string;
}
export interface V0794_pokemon_buzzwole_normalEntry {
  templateId: "V0794_POKEMON_BUZZWOLE_NORMAL";
  data: V0794_pokemon_buzzwole_normaldata;
}
export interface V0795_pokemon_pheromosadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0795_pokemon_pheromosadata {
  pokemonSettings: V0795_pokemon_pheromosadatapokemonsettings;
  templateId: string;
}
export interface V0795_pokemon_pheromosaEntry {
  templateId: "V0795_POKEMON_PHEROMOSA";
  data: V0795_pokemon_pheromosadata;
}
export interface V0795_pokemon_pheromosa_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0795_pokemon_pheromosa_normaldata {
  pokemonSettings: V0795_pokemon_pheromosa_normaldatapokemonsettings;
  templateId: string;
}
export interface V0795_pokemon_pheromosa_normalEntry {
  templateId: "V0795_POKEMON_PHEROMOSA_NORMAL";
  data: V0795_pokemon_pheromosa_normaldata;
}
export interface V0796_pokemon_xurkitreedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0796_pokemon_xurkitreedata {
  pokemonSettings: V0796_pokemon_xurkitreedatapokemonsettings;
  templateId: string;
}
export interface V0796_pokemon_xurkitreeEntry {
  templateId: "V0796_POKEMON_XURKITREE";
  data: V0796_pokemon_xurkitreedata;
}
export interface V0796_pokemon_xurkitree_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0796_pokemon_xurkitree_normaldata {
  pokemonSettings: V0796_pokemon_xurkitree_normaldatapokemonsettings;
  templateId: string;
}
export interface V0796_pokemon_xurkitree_normalEntry {
  templateId: "V0796_POKEMON_XURKITREE_NORMAL";
  data: V0796_pokemon_xurkitree_normaldata;
}
export interface V0797_pokemon_celesteelaEntry {
  templateId: "V0797_POKEMON_CELESTEELA";
  data: V0794_pokemon_buzzwoledata;
}
export interface V0797_pokemon_celesteela_normalEntry {
  templateId: "V0797_POKEMON_CELESTEELA_NORMAL";
  data: V0794_pokemon_buzzwole_normaldata;
}
export interface V0798_pokemon_kartanadatapokemonsettingsencounter {
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
export interface V0798_pokemon_kartanadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0798_pokemon_kartanadata {
  pokemonSettings: V0798_pokemon_kartanadatapokemonsettings;
  templateId: string;
}
export interface V0798_pokemon_kartanaEntry {
  templateId: "V0798_POKEMON_KARTANA";
  data: V0798_pokemon_kartanadata;
}
export interface V0798_pokemon_kartana_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0798_pokemon_kartana_normaldata {
  pokemonSettings: V0798_pokemon_kartana_normaldatapokemonsettings;
  templateId: string;
}
export interface V0798_pokemon_kartana_normalEntry {
  templateId: "V0798_POKEMON_KARTANA_NORMAL";
  data: V0798_pokemon_kartana_normaldata;
}
export interface V0799_pokemon_guzzlorddatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0799_pokemon_guzzlorddata {
  pokemonSettings: V0799_pokemon_guzzlorddatapokemonsettings;
  templateId: string;
}
export interface V0799_pokemon_guzzlordEntry {
  templateId: "V0799_POKEMON_GUZZLORD";
  data: V0799_pokemon_guzzlorddata;
}
export interface V0799_pokemon_guzzlord_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  encounter: V0785_pokemon_tapu_kokodatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0799_pokemon_guzzlord_normaldata {
  pokemonSettings: V0799_pokemon_guzzlord_normaldatapokemonsettings;
  templateId: string;
}
export interface V0799_pokemon_guzzlord_normalEntry {
  templateId: "V0799_POKEMON_GUZZLORD_NORMAL";
  data: V0799_pokemon_guzzlord_normaldata;
}
export interface V0800_pokemon_necrozmadatapokemonsettingsformchangeitemcomponentpokemonsettingslocationcardsettingsitem {
  basePokemonLocationCard: string;
  componentPokemonLocationCard: string;
  fusionPokemonLocationCard: string;
}
export interface V0800_pokemon_necrozmadatapokemonsettingsformchangeitemcomponentpokemonsettings {
  componentCandyCost: number;
  familyId: string;
  formChangeType: string;
  locationCardSettings: (V0800_pokemon_necrozmadatapokemonsettingsformchangeitemcomponentpokemonsettingslocationcardsettingsitem)[];
  pokedexId: string;
}
export interface V0800_pokemon_necrozmadatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem {
  replacementMoves: (string)[];
}
export interface V0800_pokemon_necrozmadatapokemonsettingsformchangeitemmovereassignment {
  cinematicMoves: (V0800_pokemon_necrozmadatapokemonsettingsformchangeitemmovereassignmentcinematicmovesitem)[];
}
export interface V0800_pokemon_necrozmadatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  candyCost: number;
  componentPokemonSettings: V0800_pokemon_necrozmadatapokemonsettingsformchangeitemcomponentpokemonsettings;
  item: string;
  itemCostCount: number;
  moveReassignment: V0800_pokemon_necrozmadatapokemonsettingsformchangeitemmovereassignment;
}
export interface V0800_pokemon_necrozmadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  formChange: (V0800_pokemon_necrozmadatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0800_pokemon_necrozmadata {
  pokemonSettings: V0800_pokemon_necrozmadatapokemonsettings;
  templateId: string;
}
export interface V0800_pokemon_necrozmaEntry {
  templateId: "V0800_POKEMON_NECROZMA";
  data: V0800_pokemon_necrozmadata;
}
export interface V0800_pokemon_necrozma_dawn_wingsdatapokemonsettingsformchangeitemcomponentpokemonsettings {
  familyId: string;
  formChangeType: string;
  pokedexId: string;
}
export interface V0800_pokemon_necrozma_dawn_wingsdatapokemonsettingsformchangeitem {
  availableForm: (string)[];
  componentPokemonSettings: V0800_pokemon_necrozma_dawn_wingsdatapokemonsettingsformchangeitemcomponentpokemonsettings;
}
export interface V0800_pokemon_necrozma_dawn_wingsdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0800_pokemon_necrozma_dawn_wingsdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0800_pokemon_necrozma_dawn_wingsdata {
  pokemonSettings: V0800_pokemon_necrozma_dawn_wingsdatapokemonsettings;
  templateId: string;
}
export interface V0800_pokemon_necrozma_dawn_wingsEntry {
  templateId: "V0800_POKEMON_NECROZMA_DAWN_WINGS";
  data: V0800_pokemon_necrozma_dawn_wingsdata;
}
export interface V0800_pokemon_necrozma_dusk_manedatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0800_pokemon_necrozma_dawn_wingsdatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0800_pokemon_necrozma_dusk_manedata {
  pokemonSettings: V0800_pokemon_necrozma_dusk_manedatapokemonsettings;
  templateId: string;
}
export interface V0800_pokemon_necrozma_dusk_maneEntry {
  templateId: "V0800_POKEMON_NECROZMA_DUSK_MANE";
  data: V0800_pokemon_necrozma_dusk_manedata;
}
export interface V0800_pokemon_necrozma_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  formChange: (V0800_pokemon_necrozmadatapokemonsettingsformchangeitem)[];
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0800_pokemon_necrozma_normaldata {
  pokemonSettings: V0800_pokemon_necrozma_normaldatapokemonsettings;
  templateId: string;
}
export interface V0800_pokemon_necrozma_normalEntry {
  templateId: "V0800_POKEMON_NECROZMA_NORMAL";
  data: V0800_pokemon_necrozma_normaldata;
}
export interface V0800_pokemon_necrozma_ultradatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0800_pokemon_necrozma_ultradata {
  pokemonSettings: V0800_pokemon_necrozma_ultradatapokemonsettings;
  templateId: string;
}
export interface V0800_pokemon_necrozma_ultraEntry {
  templateId: "V0800_POKEMON_NECROZMA_ULTRA";
  data: V0800_pokemon_necrozma_ultradata;
}
export interface V0801_pokemon_magearnadatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0801_pokemon_magearnadata {
  pokemonSettings: V0801_pokemon_magearnadatapokemonsettings;
  templateId: string;
}
export interface V0801_pokemon_magearnaEntry {
  templateId: "V0801_POKEMON_MAGEARNA";
  data: V0801_pokemon_magearnadata;
}
export interface V0801_pokemon_magearna_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0801_pokemon_magearna_normaldata {
  pokemonSettings: V0801_pokemon_magearna_normaldatapokemonsettings;
  templateId: string;
}
export interface V0801_pokemon_magearna_normalEntry {
  templateId: "V0801_POKEMON_MAGEARNA_NORMAL";
  data: V0801_pokemon_magearna_normaldata;
}
export interface V0801_pokemon_magearna_original_colorEntry {
  templateId: "V0801_POKEMON_MAGEARNA_ORIGINAL_COLOR";
  data: V0801_pokemon_magearna_normaldata;
}
export interface V0802_pokemon_marshadowdatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0802_pokemon_marshadowdata {
  pokemonSettings: V0802_pokemon_marshadowdatapokemonsettings;
  templateId: string;
}
export interface V0802_pokemon_marshadowEntry {
  templateId: "V0802_POKEMON_MARSHADOW";
  data: V0802_pokemon_marshadowdata;
}
export interface V0802_pokemon_marshadow_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  raidBossDistanceOffset: number;
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0802_pokemon_marshadow_normaldata {
  pokemonSettings: V0802_pokemon_marshadow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0802_pokemon_marshadow_normalEntry {
  templateId: "V0802_POKEMON_MARSHADOW_NORMAL";
  data: V0802_pokemon_marshadow_normaldata;
}
export interface V0803_pokemon_poipoledatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0803_pokemon_poipoledatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  questDisplay: (V0803_pokemon_poipoledatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0803_pokemon_poipoledatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  evolutionBranch: (V0803_pokemon_poipoledatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0803_pokemon_poipoledata {
  pokemonSettings: V0803_pokemon_poipoledatapokemonsettings;
  templateId: string;
}
export interface V0803_pokemon_poipoleEntry {
  templateId: "V0803_POKEMON_POIPOLE";
  data: V0803_pokemon_poipoledata;
}
export interface V0803_pokemon_poipole_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
  questDisplay: (V0803_pokemon_poipoledatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0803_pokemon_poipole_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  evolutionBranch: (V0803_pokemon_poipole_normaldatapokemonsettingsevolutionbranchitem)[];
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0803_pokemon_poipole_normaldata {
  pokemonSettings: V0803_pokemon_poipole_normaldatapokemonsettings;
  templateId: string;
}
export interface V0803_pokemon_poipole_normalEntry {
  templateId: "V0803_POKEMON_POIPOLE_NORMAL";
  data: V0803_pokemon_poipole_normaldata;
}
export interface V0804_pokemon_naganadeldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0770_pokemon_palossanddatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0804_pokemon_naganadeldata {
  pokemonSettings: V0804_pokemon_naganadeldatapokemonsettings;
  templateId: string;
}
export interface V0804_pokemon_naganadelEntry {
  templateId: "V0804_POKEMON_NAGANADEL";
  data: V0804_pokemon_naganadeldata;
}
export interface V0804_pokemon_naganadel_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0732_pokemon_trumbeakdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0770_pokemon_palossanddatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0804_pokemon_naganadel_normaldata {
  pokemonSettings: V0804_pokemon_naganadel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0804_pokemon_naganadel_normalEntry {
  templateId: "V0804_POKEMON_NAGANADEL_NORMAL";
  data: V0804_pokemon_naganadel_normaldata;
}
export interface V0805_pokemon_stakatakaEntry {
  templateId: "V0805_POKEMON_STAKATAKA";
  data: V0794_pokemon_buzzwoledata;
}
export interface V0805_pokemon_stakataka_normalEntry {
  templateId: "V0805_POKEMON_STAKATAKA_NORMAL";
  data: V0794_pokemon_buzzwole_normaldata;
}
export interface V0806_pokemon_blacephalondatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0806_pokemon_blacephalondata {
  pokemonSettings: V0806_pokemon_blacephalondatapokemonsettings;
  templateId: string;
}
export interface V0806_pokemon_blacephalonEntry {
  templateId: "V0806_POKEMON_BLACEPHALON";
  data: V0806_pokemon_blacephalondata;
}
export interface V0806_pokemon_blacephalon_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0722_pokemon_rowletdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatPlayerPokemonPositionOffset: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0798_pokemon_kartanadatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0806_pokemon_blacephalon_normaldata {
  pokemonSettings: V0806_pokemon_blacephalon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0806_pokemon_blacephalon_normalEntry {
  templateId: "V0806_POKEMON_BLACEPHALON_NORMAL";
  data: V0806_pokemon_blacephalon_normaldata;
}
export interface V0807_pokemon_zeraoradatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0807_pokemon_zeraoradata {
  pokemonSettings: V0807_pokemon_zeraoradatapokemonsettings;
  templateId: string;
}
export interface V0807_pokemon_zeraoraEntry {
  templateId: "V0807_POKEMON_ZERAORA";
  data: V0807_pokemon_zeraoradata;
}
export interface V0807_pokemon_zeraora_normaldatapokemonsettings {
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0722_pokemon_rowletdatapokemonsettingsibfc;
  cinematicMoves: (string)[];
  encounter: V0772_pokemon_type_nulldatapokemonsettingsencounter;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0807_pokemon_zeraora_normaldata {
  pokemonSettings: V0807_pokemon_zeraora_normaldatapokemonsettings;
  templateId: string;
}
export interface V0807_pokemon_zeraora_normalEntry {
  templateId: "V0807_POKEMON_ZERAORA_NORMAL";
  data: V0807_pokemon_zeraora_normaldata;
}
export interface V0808_pokemon_meltandatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0808_pokemon_meltandatapokemonsettingsencounter {
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
export interface V0808_pokemon_meltandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0808_pokemon_meltandatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0808_pokemon_meltandatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowletdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isDeployable: boolean;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0808_pokemon_meltandata {
  pokemonSettings: V0808_pokemon_meltandatapokemonsettings;
  templateId: string;
}
export interface V0808_pokemon_meltanEntry {
  templateId: "V0808_POKEMON_MELTAN";
  data: V0808_pokemon_meltandata;
}
export interface V0808_pokemon_meltan_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0808_pokemon_meltandatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  encounter: V0808_pokemon_meltandatapokemonsettingsencounter;
  evolutionBranch: (V0722_pokemon_rowlet_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isDeployable: boolean;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0808_pokemon_meltan_normaldata {
  pokemonSettings: V0808_pokemon_meltan_normaldatapokemonsettings;
  templateId: string;
}
export interface V0808_pokemon_meltan_normalEntry {
  templateId: "V0808_POKEMON_MELTAN_NORMAL";
  data: V0808_pokemon_meltan_normaldata;
}
export interface V0809_pokemon_melmetaldatapokemonsettingsencounter {
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
export interface V0809_pokemon_melmetaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0808_pokemon_meltandatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0809_pokemon_melmetaldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0809_pokemon_melmetaldata {
  pokemonSettings: V0809_pokemon_melmetaldatapokemonsettings;
  templateId: string;
}
export interface V0809_pokemon_melmetalEntry {
  templateId: "V0809_POKEMON_MELMETAL";
  data: V0809_pokemon_melmetaldata;
}
export interface V0809_pokemon_melmetal_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0808_pokemon_meltandatapokemonsettingscamera;
  candyToEvolve: number;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0809_pokemon_melmetaldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0722_pokemon_rowletdatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0722_pokemon_rowletdatapokemonsettingsstats;
  thirdMove: V0722_pokemon_rowletdatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0809_pokemon_melmetal_normaldata {
  pokemonSettings: V0809_pokemon_melmetal_normaldatapokemonsettings;
  templateId: string;
}
export interface V0809_pokemon_melmetal_normalEntry {
  templateId: "V0809_POKEMON_MELMETAL_NORMAL";
  data: V0809_pokemon_melmetal_normaldata;
}

export interface PokemonSettingsGen7MasterfileByTemplateId {
  "V0722_POKEMON_ROWLET": V0722_pokemon_rowletEntry;
  "V0722_POKEMON_ROWLET_NORMAL": V0722_pokemon_rowlet_normalEntry;
  "V0723_POKEMON_DARTRIX": V0723_pokemon_dartrixEntry;
  "V0723_POKEMON_DARTRIX_NORMAL": V0723_pokemon_dartrix_normalEntry;
  "V0724_POKEMON_DECIDUEYE": V0724_pokemon_decidueyeEntry;
  "V0724_POKEMON_DECIDUEYE_HISUIAN": V0724_pokemon_decidueye_hisuianEntry;
  "V0724_POKEMON_DECIDUEYE_NORMAL": V0724_pokemon_decidueye_normalEntry;
  "V0725_POKEMON_LITTEN": V0725_pokemon_littenEntry;
  "V0725_POKEMON_LITTEN_NORMAL": V0725_pokemon_litten_normalEntry;
  "V0726_POKEMON_TORRACAT": V0726_pokemon_torracatEntry;
  "V0726_POKEMON_TORRACAT_NORMAL": V0726_pokemon_torracat_normalEntry;
  "V0727_POKEMON_INCINEROAR": V0727_pokemon_incineroarEntry;
  "V0727_POKEMON_INCINEROAR_NORMAL": V0727_pokemon_incineroar_normalEntry;
  "V0728_POKEMON_POPPLIO": V0728_pokemon_popplioEntry;
  "V0728_POKEMON_POPPLIO_NORMAL": V0728_pokemon_popplio_normalEntry;
  "V0729_POKEMON_BRIONNE": V0729_pokemon_brionneEntry;
  "V0729_POKEMON_BRIONNE_NORMAL": V0729_pokemon_brionne_normalEntry;
  "V0730_POKEMON_PRIMARINA": V0730_pokemon_primarinaEntry;
  "V0730_POKEMON_PRIMARINA_NORMAL": V0730_pokemon_primarina_normalEntry;
  "V0731_POKEMON_PIKIPEK": V0731_pokemon_pikipekEntry;
  "V0731_POKEMON_PIKIPEK_NORMAL": V0731_pokemon_pikipek_normalEntry;
  "V0732_POKEMON_TRUMBEAK": V0732_pokemon_trumbeakEntry;
  "V0732_POKEMON_TRUMBEAK_NORMAL": V0732_pokemon_trumbeak_normalEntry;
  "V0733_POKEMON_TOUCANNON": V0733_pokemon_toucannonEntry;
  "V0733_POKEMON_TOUCANNON_NORMAL": V0733_pokemon_toucannon_normalEntry;
  "V0734_POKEMON_YUNGOOS": V0734_pokemon_yungoosEntry;
  "V0734_POKEMON_YUNGOOS_NORMAL": V0734_pokemon_yungoos_normalEntry;
  "V0735_POKEMON_GUMSHOOS": V0735_pokemon_gumshoosEntry;
  "V0735_POKEMON_GUMSHOOS_NORMAL": V0735_pokemon_gumshoos_normalEntry;
  "V0736_POKEMON_GRUBBIN": V0736_pokemon_grubbinEntry;
  "V0736_POKEMON_GRUBBIN_NORMAL": V0736_pokemon_grubbin_normalEntry;
  "V0737_POKEMON_CHARJABUG": V0737_pokemon_charjabugEntry;
  "V0737_POKEMON_CHARJABUG_NORMAL": V0737_pokemon_charjabug_normalEntry;
  "V0737_POKEMON_CHARJABUG_WINTER_2025": V0737_pokemon_charjabug_winter_2025Entry;
  "V0738_POKEMON_VIKAVOLT": V0738_pokemon_vikavoltEntry;
  "V0738_POKEMON_VIKAVOLT_NORMAL": V0738_pokemon_vikavolt_normalEntry;
  "V0738_POKEMON_VIKAVOLT_WINTER_2025": V0738_pokemon_vikavolt_winter_2025Entry;
  "V0739_POKEMON_CRABRAWLER": V0739_pokemon_crabrawlerEntry;
  "V0739_POKEMON_CRABRAWLER_NORMAL": V0739_pokemon_crabrawler_normalEntry;
  "V0740_POKEMON_CRABOMINABLE": V0740_pokemon_crabominableEntry;
  "V0740_POKEMON_CRABOMINABLE_NORMAL": V0740_pokemon_crabominable_normalEntry;
  "V0741_POKEMON_ORICORIO": V0741_pokemon_oricorioEntry;
  "V0741_POKEMON_ORICORIO_BAILE": V0741_pokemon_oricorio_baileEntry;
  "V0741_POKEMON_ORICORIO_PAU": V0741_pokemon_oricorio_pauEntry;
  "V0741_POKEMON_ORICORIO_POMPOM": V0741_pokemon_oricorio_pompomEntry;
  "V0741_POKEMON_ORICORIO_SENSU": V0741_pokemon_oricorio_sensuEntry;
  "V0742_POKEMON_CUTIEFLY": V0742_pokemon_cutieflyEntry;
  "V0742_POKEMON_CUTIEFLY_NORMAL": V0742_pokemon_cutiefly_normalEntry;
  "V0743_POKEMON_RIBOMBEE": V0743_pokemon_ribombeeEntry;
  "V0743_POKEMON_RIBOMBEE_NORMAL": V0743_pokemon_ribombee_normalEntry;
  "V0744_POKEMON_ROCKRUFF": V0744_pokemon_rockruffEntry;
  "V0744_POKEMON_ROCKRUFF_DUSK": V0744_pokemon_rockruff_duskEntry;
  "V0744_POKEMON_ROCKRUFF_NORMAL": V0744_pokemon_rockruff_normalEntry;
  "V0745_POKEMON_LYCANROC": V0745_pokemon_lycanrocEntry;
  "V0745_POKEMON_LYCANROC_DUSK": V0745_pokemon_lycanroc_duskEntry;
  "V0745_POKEMON_LYCANROC_MIDDAY": V0745_pokemon_lycanroc_middayEntry;
  "V0745_POKEMON_LYCANROC_MIDNIGHT": V0745_pokemon_lycanroc_midnightEntry;
  "V0746_POKEMON_WISHIWASHI": V0746_pokemon_wishiwashiEntry;
  "V0746_POKEMON_WISHIWASHI_SCHOOL": V0746_pokemon_wishiwashi_schoolEntry;
  "V0746_POKEMON_WISHIWASHI_SOLO": V0746_pokemon_wishiwashi_soloEntry;
  "V0747_POKEMON_MAREANIE": V0747_pokemon_mareanieEntry;
  "V0747_POKEMON_MAREANIE_NORMAL": V0747_pokemon_mareanie_normalEntry;
  "V0748_POKEMON_TOXAPEX": V0748_pokemon_toxapexEntry;
  "V0748_POKEMON_TOXAPEX_NORMAL": V0748_pokemon_toxapex_normalEntry;
  "V0749_POKEMON_MUDBRAY": V0749_pokemon_mudbrayEntry;
  "V0749_POKEMON_MUDBRAY_NORMAL": V0749_pokemon_mudbray_normalEntry;
  "V0750_POKEMON_MUDSDALE": V0750_pokemon_mudsdaleEntry;
  "V0750_POKEMON_MUDSDALE_NORMAL": V0750_pokemon_mudsdale_normalEntry;
  "V0751_POKEMON_DEWPIDER": V0751_pokemon_dewpiderEntry;
  "V0751_POKEMON_DEWPIDER_NORMAL": V0751_pokemon_dewpider_normalEntry;
  "V0752_POKEMON_ARAQUANID": V0752_pokemon_araquanidEntry;
  "V0752_POKEMON_ARAQUANID_NORMAL": V0752_pokemon_araquanid_normalEntry;
  "V0753_POKEMON_FOMANTIS": V0753_pokemon_fomantisEntry;
  "V0753_POKEMON_FOMANTIS_NORMAL": V0753_pokemon_fomantis_normalEntry;
  "V0754_POKEMON_LURANTIS": V0754_pokemon_lurantisEntry;
  "V0754_POKEMON_LURANTIS_NORMAL": V0754_pokemon_lurantis_normalEntry;
  "V0755_POKEMON_MORELULL": V0755_pokemon_morelullEntry;
  "V0755_POKEMON_MORELULL_NORMAL": V0755_pokemon_morelull_normalEntry;
  "V0756_POKEMON_SHIINOTIC": V0756_pokemon_shiinoticEntry;
  "V0756_POKEMON_SHIINOTIC_NORMAL": V0756_pokemon_shiinotic_normalEntry;
  "V0757_POKEMON_SALANDIT": V0757_pokemon_salanditEntry;
  "V0757_POKEMON_SALANDIT_NORMAL": V0757_pokemon_salandit_normalEntry;
  "V0758_POKEMON_SALAZZLE": V0758_pokemon_salazzleEntry;
  "V0758_POKEMON_SALAZZLE_NORMAL": V0758_pokemon_salazzle_normalEntry;
  "V0759_POKEMON_STUFFUL": V0759_pokemon_stuffulEntry;
  "V0759_POKEMON_STUFFUL_NORMAL": V0759_pokemon_stufful_normalEntry;
  "V0760_POKEMON_BEWEAR": V0760_pokemon_bewearEntry;
  "V0760_POKEMON_BEWEAR_NORMAL": V0760_pokemon_bewear_normalEntry;
  "V0760_POKEMON_BEWEAR_WILDAREA_2025": V0760_pokemon_bewear_wildarea_2025Entry;
  "V0761_POKEMON_BOUNSWEET": V0761_pokemon_bounsweetEntry;
  "V0761_POKEMON_BOUNSWEET_NORMAL": V0761_pokemon_bounsweet_normalEntry;
  "V0762_POKEMON_STEENEE": V0762_pokemon_steeneeEntry;
  "V0762_POKEMON_STEENEE_NORMAL": V0762_pokemon_steenee_normalEntry;
  "V0763_POKEMON_TSAREENA": V0763_pokemon_tsareenaEntry;
  "V0763_POKEMON_TSAREENA_NORMAL": V0763_pokemon_tsareena_normalEntry;
  "V0764_POKEMON_COMFEY": V0764_pokemon_comfeyEntry;
  "V0764_POKEMON_COMFEY_NORMAL": V0764_pokemon_comfey_normalEntry;
  "V0765_POKEMON_ORANGURU": V0765_pokemon_oranguruEntry;
  "V0765_POKEMON_ORANGURU_NORMAL": V0765_pokemon_oranguru_normalEntry;
  "V0766_POKEMON_PASSIMIAN": V0766_pokemon_passimianEntry;
  "V0766_POKEMON_PASSIMIAN_NORMAL": V0766_pokemon_passimian_normalEntry;
  "V0767_POKEMON_WIMPOD": V0767_pokemon_wimpodEntry;
  "V0767_POKEMON_WIMPOD_NORMAL": V0767_pokemon_wimpod_normalEntry;
  "V0768_POKEMON_GOLISOPOD": V0768_pokemon_golisopodEntry;
  "V0768_POKEMON_GOLISOPOD_NORMAL": V0768_pokemon_golisopod_normalEntry;
  "V0769_POKEMON_SANDYGAST": V0769_pokemon_sandygastEntry;
  "V0769_POKEMON_SANDYGAST_NORMAL": V0769_pokemon_sandygast_normalEntry;
  "V0770_POKEMON_PALOSSAND": V0770_pokemon_palossandEntry;
  "V0770_POKEMON_PALOSSAND_NORMAL": V0770_pokemon_palossand_normalEntry;
  "V0771_POKEMON_PYUKUMUKU": V0771_pokemon_pyukumukuEntry;
  "V0771_POKEMON_PYUKUMUKU_NORMAL": V0771_pokemon_pyukumuku_normalEntry;
  "V0772_POKEMON_TYPE_NULL": V0772_pokemon_type_nullEntry;
  "V0772_POKEMON_TYPE_NULL_NORMAL": V0772_pokemon_type_null_normalEntry;
  "V0773_POKEMON_SILVALLY": V0773_pokemon_silvallyEntry;
  "V0773_POKEMON_SILVALLY_BUG": V0773_pokemon_silvally_bugEntry;
  "V0773_POKEMON_SILVALLY_DARK": V0773_pokemon_silvally_darkEntry;
  "V0773_POKEMON_SILVALLY_DRAGON": V0773_pokemon_silvally_dragonEntry;
  "V0773_POKEMON_SILVALLY_ELECTRIC": V0773_pokemon_silvally_electricEntry;
  "V0773_POKEMON_SILVALLY_FAIRY": V0773_pokemon_silvally_fairyEntry;
  "V0773_POKEMON_SILVALLY_FIGHTING": V0773_pokemon_silvally_fightingEntry;
  "V0773_POKEMON_SILVALLY_FIRE": V0773_pokemon_silvally_fireEntry;
  "V0773_POKEMON_SILVALLY_FLYING": V0773_pokemon_silvally_flyingEntry;
  "V0773_POKEMON_SILVALLY_GHOST": V0773_pokemon_silvally_ghostEntry;
  "V0773_POKEMON_SILVALLY_GRASS": V0773_pokemon_silvally_grassEntry;
  "V0773_POKEMON_SILVALLY_GROUND": V0773_pokemon_silvally_groundEntry;
  "V0773_POKEMON_SILVALLY_ICE": V0773_pokemon_silvally_iceEntry;
  "V0773_POKEMON_SILVALLY_NORMAL": V0773_pokemon_silvally_normalEntry;
  "V0773_POKEMON_SILVALLY_POISON": V0773_pokemon_silvally_poisonEntry;
  "V0773_POKEMON_SILVALLY_PSYCHIC": V0773_pokemon_silvally_psychicEntry;
  "V0773_POKEMON_SILVALLY_ROCK": V0773_pokemon_silvally_rockEntry;
  "V0773_POKEMON_SILVALLY_STEEL": V0773_pokemon_silvally_steelEntry;
  "V0773_POKEMON_SILVALLY_WATER": V0773_pokemon_silvally_waterEntry;
  "V0774_POKEMON_MINIOR": V0774_pokemon_miniorEntry;
  "V0774_POKEMON_MINIOR_BLUE": V0774_pokemon_minior_blueEntry;
  "V0774_POKEMON_MINIOR_GREEN": V0774_pokemon_minior_greenEntry;
  "V0774_POKEMON_MINIOR_INDIGO": V0774_pokemon_minior_indigoEntry;
  "V0774_POKEMON_MINIOR_ORANGE": V0774_pokemon_minior_orangeEntry;
  "V0774_POKEMON_MINIOR_RED": V0774_pokemon_minior_redEntry;
  "V0774_POKEMON_MINIOR_VIOLET": V0774_pokemon_minior_violetEntry;
  "V0774_POKEMON_MINIOR_YELLOW": V0774_pokemon_minior_yellowEntry;
  "V0775_POKEMON_KOMALA": V0775_pokemon_komalaEntry;
  "V0775_POKEMON_KOMALA_NORMAL": V0775_pokemon_komala_normalEntry;
  "V0776_POKEMON_TURTONATOR": V0776_pokemon_turtonatorEntry;
  "V0776_POKEMON_TURTONATOR_NORMAL": V0776_pokemon_turtonator_normalEntry;
  "V0777_POKEMON_TOGEDEMARU": V0777_pokemon_togedemaruEntry;
  "V0777_POKEMON_TOGEDEMARU_NORMAL": V0777_pokemon_togedemaru_normalEntry;
  "V0778_POKEMON_MIMIKYU": V0778_pokemon_mimikyuEntry;
  "V0778_POKEMON_MIMIKYU_BUSTED": V0778_pokemon_mimikyu_bustedEntry;
  "V0778_POKEMON_MIMIKYU_DISGUISED": V0778_pokemon_mimikyu_disguisedEntry;
  "V0779_POKEMON_BRUXISH": V0779_pokemon_bruxishEntry;
  "V0779_POKEMON_BRUXISH_NORMAL": V0779_pokemon_bruxish_normalEntry;
  "V0780_POKEMON_DRAMPA": V0780_pokemon_drampaEntry;
  "V0780_POKEMON_DRAMPA_NORMAL": V0780_pokemon_drampa_normalEntry;
  "V0781_POKEMON_DHELMISE": V0781_pokemon_dhelmiseEntry;
  "V0781_POKEMON_DHELMISE_NORMAL": V0781_pokemon_dhelmise_normalEntry;
  "V0782_POKEMON_JANGMO_O": V0782_pokemon_jangmo_oEntry;
  "V0782_POKEMON_JANGMO_O_NORMAL": V0782_pokemon_jangmo_o_normalEntry;
  "V0783_POKEMON_HAKAMO_O": V0783_pokemon_hakamo_oEntry;
  "V0783_POKEMON_HAKAMO_O_NORMAL": V0783_pokemon_hakamo_o_normalEntry;
  "V0784_POKEMON_KOMMO_O": V0784_pokemon_kommo_oEntry;
  "V0784_POKEMON_KOMMO_O_NORMAL": V0784_pokemon_kommo_o_normalEntry;
  "V0785_POKEMON_TAPU_KOKO": V0785_pokemon_tapu_kokoEntry;
  "V0785_POKEMON_TAPU_KOKO_NORMAL": V0785_pokemon_tapu_koko_normalEntry;
  "V0786_POKEMON_TAPU_LELE": V0786_pokemon_tapu_leleEntry;
  "V0786_POKEMON_TAPU_LELE_NORMAL": V0786_pokemon_tapu_lele_normalEntry;
  "V0787_POKEMON_TAPU_BULU": V0787_pokemon_tapu_buluEntry;
  "V0787_POKEMON_TAPU_BULU_NORMAL": V0787_pokemon_tapu_bulu_normalEntry;
  "V0788_POKEMON_TAPU_FINI": V0788_pokemon_tapu_finiEntry;
  "V0788_POKEMON_TAPU_FINI_NORMAL": V0788_pokemon_tapu_fini_normalEntry;
  "V0789_POKEMON_COSMOG": V0789_pokemon_cosmogEntry;
  "V0789_POKEMON_COSMOG_NORMAL": V0789_pokemon_cosmog_normalEntry;
  "V0790_POKEMON_COSMOEM": V0790_pokemon_cosmoemEntry;
  "V0790_POKEMON_COSMOEM_NORMAL": V0790_pokemon_cosmoem_normalEntry;
  "V0791_POKEMON_SOLGALEO": V0791_pokemon_solgaleoEntry;
  "V0791_POKEMON_SOLGALEO_NORMAL": V0791_pokemon_solgaleo_normalEntry;
  "V0792_POKEMON_LUNALA": V0792_pokemon_lunalaEntry;
  "V0792_POKEMON_LUNALA_NORMAL": V0792_pokemon_lunala_normalEntry;
  "V0793_POKEMON_NIHILEGO": V0793_pokemon_nihilegoEntry;
  "V0793_POKEMON_NIHILEGO_NORMAL": V0793_pokemon_nihilego_normalEntry;
  "V0794_POKEMON_BUZZWOLE": V0794_pokemon_buzzwoleEntry;
  "V0794_POKEMON_BUZZWOLE_NORMAL": V0794_pokemon_buzzwole_normalEntry;
  "V0795_POKEMON_PHEROMOSA": V0795_pokemon_pheromosaEntry;
  "V0795_POKEMON_PHEROMOSA_NORMAL": V0795_pokemon_pheromosa_normalEntry;
  "V0796_POKEMON_XURKITREE": V0796_pokemon_xurkitreeEntry;
  "V0796_POKEMON_XURKITREE_NORMAL": V0796_pokemon_xurkitree_normalEntry;
  "V0797_POKEMON_CELESTEELA": V0797_pokemon_celesteelaEntry;
  "V0797_POKEMON_CELESTEELA_NORMAL": V0797_pokemon_celesteela_normalEntry;
  "V0798_POKEMON_KARTANA": V0798_pokemon_kartanaEntry;
  "V0798_POKEMON_KARTANA_NORMAL": V0798_pokemon_kartana_normalEntry;
  "V0799_POKEMON_GUZZLORD": V0799_pokemon_guzzlordEntry;
  "V0799_POKEMON_GUZZLORD_NORMAL": V0799_pokemon_guzzlord_normalEntry;
  "V0800_POKEMON_NECROZMA": V0800_pokemon_necrozmaEntry;
  "V0800_POKEMON_NECROZMA_DAWN_WINGS": V0800_pokemon_necrozma_dawn_wingsEntry;
  "V0800_POKEMON_NECROZMA_DUSK_MANE": V0800_pokemon_necrozma_dusk_maneEntry;
  "V0800_POKEMON_NECROZMA_NORMAL": V0800_pokemon_necrozma_normalEntry;
  "V0800_POKEMON_NECROZMA_ULTRA": V0800_pokemon_necrozma_ultraEntry;
  "V0801_POKEMON_MAGEARNA": V0801_pokemon_magearnaEntry;
  "V0801_POKEMON_MAGEARNA_NORMAL": V0801_pokemon_magearna_normalEntry;
  "V0801_POKEMON_MAGEARNA_ORIGINAL_COLOR": V0801_pokemon_magearna_original_colorEntry;
  "V0802_POKEMON_MARSHADOW": V0802_pokemon_marshadowEntry;
  "V0802_POKEMON_MARSHADOW_NORMAL": V0802_pokemon_marshadow_normalEntry;
  "V0803_POKEMON_POIPOLE": V0803_pokemon_poipoleEntry;
  "V0803_POKEMON_POIPOLE_NORMAL": V0803_pokemon_poipole_normalEntry;
  "V0804_POKEMON_NAGANADEL": V0804_pokemon_naganadelEntry;
  "V0804_POKEMON_NAGANADEL_NORMAL": V0804_pokemon_naganadel_normalEntry;
  "V0805_POKEMON_STAKATAKA": V0805_pokemon_stakatakaEntry;
  "V0805_POKEMON_STAKATAKA_NORMAL": V0805_pokemon_stakataka_normalEntry;
  "V0806_POKEMON_BLACEPHALON": V0806_pokemon_blacephalonEntry;
  "V0806_POKEMON_BLACEPHALON_NORMAL": V0806_pokemon_blacephalon_normalEntry;
  "V0807_POKEMON_ZERAORA": V0807_pokemon_zeraoraEntry;
  "V0807_POKEMON_ZERAORA_NORMAL": V0807_pokemon_zeraora_normalEntry;
  "V0808_POKEMON_MELTAN": V0808_pokemon_meltanEntry;
  "V0808_POKEMON_MELTAN_NORMAL": V0808_pokemon_meltan_normalEntry;
  "V0809_POKEMON_MELMETAL": V0809_pokemon_melmetalEntry;
  "V0809_POKEMON_MELMETAL_NORMAL": V0809_pokemon_melmetal_normalEntry;
}

export interface PokemonSettingsGen7ByDexId {
  "0722": V0722_pokemon_rowletEntry | V0722_pokemon_rowlet_normalEntry;
  "0723": V0723_pokemon_dartrixEntry | V0723_pokemon_dartrix_normalEntry;
  "0724": V0724_pokemon_decidueyeEntry | V0724_pokemon_decidueye_hisuianEntry | V0724_pokemon_decidueye_normalEntry;
  "0725": V0725_pokemon_littenEntry | V0725_pokemon_litten_normalEntry;
  "0726": V0726_pokemon_torracatEntry | V0726_pokemon_torracat_normalEntry;
  "0727": V0727_pokemon_incineroarEntry | V0727_pokemon_incineroar_normalEntry;
  "0728": V0728_pokemon_popplioEntry | V0728_pokemon_popplio_normalEntry;
  "0729": V0729_pokemon_brionneEntry | V0729_pokemon_brionne_normalEntry;
  "0730": V0730_pokemon_primarinaEntry | V0730_pokemon_primarina_normalEntry;
  "0731": V0731_pokemon_pikipekEntry | V0731_pokemon_pikipek_normalEntry;
  "0732": V0732_pokemon_trumbeakEntry | V0732_pokemon_trumbeak_normalEntry;
  "0733": V0733_pokemon_toucannonEntry | V0733_pokemon_toucannon_normalEntry;
  "0734": V0734_pokemon_yungoosEntry | V0734_pokemon_yungoos_normalEntry;
  "0735": V0735_pokemon_gumshoosEntry | V0735_pokemon_gumshoos_normalEntry;
  "0736": V0736_pokemon_grubbinEntry | V0736_pokemon_grubbin_normalEntry;
  "0737": V0737_pokemon_charjabugEntry | V0737_pokemon_charjabug_normalEntry | V0737_pokemon_charjabug_winter_2025Entry;
  "0738": V0738_pokemon_vikavoltEntry | V0738_pokemon_vikavolt_normalEntry | V0738_pokemon_vikavolt_winter_2025Entry;
  "0739": V0739_pokemon_crabrawlerEntry | V0739_pokemon_crabrawler_normalEntry;
  "0740": V0740_pokemon_crabominableEntry | V0740_pokemon_crabominable_normalEntry;
  "0741": V0741_pokemon_oricorioEntry | V0741_pokemon_oricorio_baileEntry | V0741_pokemon_oricorio_pauEntry | V0741_pokemon_oricorio_pompomEntry | V0741_pokemon_oricorio_sensuEntry;
  "0742": V0742_pokemon_cutieflyEntry | V0742_pokemon_cutiefly_normalEntry;
  "0743": V0743_pokemon_ribombeeEntry | V0743_pokemon_ribombee_normalEntry;
  "0744": V0744_pokemon_rockruffEntry | V0744_pokemon_rockruff_duskEntry | V0744_pokemon_rockruff_normalEntry;
  "0745": V0745_pokemon_lycanrocEntry | V0745_pokemon_lycanroc_duskEntry | V0745_pokemon_lycanroc_middayEntry | V0745_pokemon_lycanroc_midnightEntry;
  "0746": V0746_pokemon_wishiwashiEntry | V0746_pokemon_wishiwashi_schoolEntry | V0746_pokemon_wishiwashi_soloEntry;
  "0747": V0747_pokemon_mareanieEntry | V0747_pokemon_mareanie_normalEntry;
  "0748": V0748_pokemon_toxapexEntry | V0748_pokemon_toxapex_normalEntry;
  "0749": V0749_pokemon_mudbrayEntry | V0749_pokemon_mudbray_normalEntry;
  "0750": V0750_pokemon_mudsdaleEntry | V0750_pokemon_mudsdale_normalEntry;
  "0751": V0751_pokemon_dewpiderEntry | V0751_pokemon_dewpider_normalEntry;
  "0752": V0752_pokemon_araquanidEntry | V0752_pokemon_araquanid_normalEntry;
  "0753": V0753_pokemon_fomantisEntry | V0753_pokemon_fomantis_normalEntry;
  "0754": V0754_pokemon_lurantisEntry | V0754_pokemon_lurantis_normalEntry;
  "0755": V0755_pokemon_morelullEntry | V0755_pokemon_morelull_normalEntry;
  "0756": V0756_pokemon_shiinoticEntry | V0756_pokemon_shiinotic_normalEntry;
  "0757": V0757_pokemon_salanditEntry | V0757_pokemon_salandit_normalEntry;
  "0758": V0758_pokemon_salazzleEntry | V0758_pokemon_salazzle_normalEntry;
  "0759": V0759_pokemon_stuffulEntry | V0759_pokemon_stufful_normalEntry;
  "0760": V0760_pokemon_bewearEntry | V0760_pokemon_bewear_normalEntry | V0760_pokemon_bewear_wildarea_2025Entry;
  "0761": V0761_pokemon_bounsweetEntry | V0761_pokemon_bounsweet_normalEntry;
  "0762": V0762_pokemon_steeneeEntry | V0762_pokemon_steenee_normalEntry;
  "0763": V0763_pokemon_tsareenaEntry | V0763_pokemon_tsareena_normalEntry;
  "0764": V0764_pokemon_comfeyEntry | V0764_pokemon_comfey_normalEntry;
  "0765": V0765_pokemon_oranguruEntry | V0765_pokemon_oranguru_normalEntry;
  "0766": V0766_pokemon_passimianEntry | V0766_pokemon_passimian_normalEntry;
  "0767": V0767_pokemon_wimpodEntry | V0767_pokemon_wimpod_normalEntry;
  "0768": V0768_pokemon_golisopodEntry | V0768_pokemon_golisopod_normalEntry;
  "0769": V0769_pokemon_sandygastEntry | V0769_pokemon_sandygast_normalEntry;
  "0770": V0770_pokemon_palossandEntry | V0770_pokemon_palossand_normalEntry;
  "0771": V0771_pokemon_pyukumukuEntry | V0771_pokemon_pyukumuku_normalEntry;
  "0772": V0772_pokemon_type_nullEntry | V0772_pokemon_type_null_normalEntry;
  "0773": V0773_pokemon_silvallyEntry | V0773_pokemon_silvally_bugEntry | V0773_pokemon_silvally_darkEntry | V0773_pokemon_silvally_dragonEntry | V0773_pokemon_silvally_electricEntry | V0773_pokemon_silvally_fairyEntry | V0773_pokemon_silvally_fightingEntry | V0773_pokemon_silvally_fireEntry | V0773_pokemon_silvally_flyingEntry | V0773_pokemon_silvally_ghostEntry | V0773_pokemon_silvally_grassEntry | V0773_pokemon_silvally_groundEntry | V0773_pokemon_silvally_iceEntry | V0773_pokemon_silvally_normalEntry | V0773_pokemon_silvally_poisonEntry | V0773_pokemon_silvally_psychicEntry | V0773_pokemon_silvally_rockEntry | V0773_pokemon_silvally_steelEntry | V0773_pokemon_silvally_waterEntry;
  "0774": V0774_pokemon_miniorEntry | V0774_pokemon_minior_blueEntry | V0774_pokemon_minior_greenEntry | V0774_pokemon_minior_indigoEntry | V0774_pokemon_minior_orangeEntry | V0774_pokemon_minior_redEntry | V0774_pokemon_minior_violetEntry | V0774_pokemon_minior_yellowEntry;
  "0775": V0775_pokemon_komalaEntry | V0775_pokemon_komala_normalEntry;
  "0776": V0776_pokemon_turtonatorEntry | V0776_pokemon_turtonator_normalEntry;
  "0777": V0777_pokemon_togedemaruEntry | V0777_pokemon_togedemaru_normalEntry;
  "0778": V0778_pokemon_mimikyuEntry | V0778_pokemon_mimikyu_bustedEntry | V0778_pokemon_mimikyu_disguisedEntry;
  "0779": V0779_pokemon_bruxishEntry | V0779_pokemon_bruxish_normalEntry;
  "0780": V0780_pokemon_drampaEntry | V0780_pokemon_drampa_normalEntry;
  "0781": V0781_pokemon_dhelmiseEntry | V0781_pokemon_dhelmise_normalEntry;
  "0782": V0782_pokemon_jangmo_oEntry | V0782_pokemon_jangmo_o_normalEntry;
  "0783": V0783_pokemon_hakamo_oEntry | V0783_pokemon_hakamo_o_normalEntry;
  "0784": V0784_pokemon_kommo_oEntry | V0784_pokemon_kommo_o_normalEntry;
  "0785": V0785_pokemon_tapu_kokoEntry | V0785_pokemon_tapu_koko_normalEntry;
  "0786": V0786_pokemon_tapu_leleEntry | V0786_pokemon_tapu_lele_normalEntry;
  "0787": V0787_pokemon_tapu_buluEntry | V0787_pokemon_tapu_bulu_normalEntry;
  "0788": V0788_pokemon_tapu_finiEntry | V0788_pokemon_tapu_fini_normalEntry;
  "0789": V0789_pokemon_cosmogEntry | V0789_pokemon_cosmog_normalEntry;
  "0790": V0790_pokemon_cosmoemEntry | V0790_pokemon_cosmoem_normalEntry;
  "0791": V0791_pokemon_solgaleoEntry | V0791_pokemon_solgaleo_normalEntry;
  "0792": V0792_pokemon_lunalaEntry | V0792_pokemon_lunala_normalEntry;
  "0793": V0793_pokemon_nihilegoEntry | V0793_pokemon_nihilego_normalEntry;
  "0794": V0794_pokemon_buzzwoleEntry | V0794_pokemon_buzzwole_normalEntry;
  "0795": V0795_pokemon_pheromosaEntry | V0795_pokemon_pheromosa_normalEntry;
  "0796": V0796_pokemon_xurkitreeEntry | V0796_pokemon_xurkitree_normalEntry;
  "0797": V0797_pokemon_celesteelaEntry | V0797_pokemon_celesteela_normalEntry;
  "0798": V0798_pokemon_kartanaEntry | V0798_pokemon_kartana_normalEntry;
  "0799": V0799_pokemon_guzzlordEntry | V0799_pokemon_guzzlord_normalEntry;
  "0800": V0800_pokemon_necrozmaEntry | V0800_pokemon_necrozma_dawn_wingsEntry | V0800_pokemon_necrozma_dusk_maneEntry | V0800_pokemon_necrozma_normalEntry | V0800_pokemon_necrozma_ultraEntry;
  "0801": V0801_pokemon_magearnaEntry | V0801_pokemon_magearna_normalEntry | V0801_pokemon_magearna_original_colorEntry;
  "0802": V0802_pokemon_marshadowEntry | V0802_pokemon_marshadow_normalEntry;
  "0803": V0803_pokemon_poipoleEntry | V0803_pokemon_poipole_normalEntry;
  "0804": V0804_pokemon_naganadelEntry | V0804_pokemon_naganadel_normalEntry;
  "0805": V0805_pokemon_stakatakaEntry | V0805_pokemon_stakataka_normalEntry;
  "0806": V0806_pokemon_blacephalonEntry | V0806_pokemon_blacephalon_normalEntry;
  "0807": V0807_pokemon_zeraoraEntry | V0807_pokemon_zeraora_normalEntry;
  "0808": V0808_pokemon_meltanEntry | V0808_pokemon_meltan_normalEntry;
  "0809": V0809_pokemon_melmetalEntry | V0809_pokemon_melmetal_normalEntry;
}

export interface PokemonSettingsGen7ByPokemonId {
  "ARAQUANID": V0752_pokemon_araquanidEntry | V0752_pokemon_araquanid_normalEntry;
  "BEWEAR": V0760_pokemon_bewearEntry | V0760_pokemon_bewear_normalEntry | V0760_pokemon_bewear_wildarea_2025Entry;
  "BLACEPHALON": V0806_pokemon_blacephalonEntry | V0806_pokemon_blacephalon_normalEntry;
  "BOUNSWEET": V0761_pokemon_bounsweetEntry | V0761_pokemon_bounsweet_normalEntry;
  "BRIONNE": V0729_pokemon_brionneEntry | V0729_pokemon_brionne_normalEntry;
  "BRUXISH": V0779_pokemon_bruxishEntry | V0779_pokemon_bruxish_normalEntry;
  "BUZZWOLE": V0794_pokemon_buzzwoleEntry | V0794_pokemon_buzzwole_normalEntry;
  "CELESTEELA": V0797_pokemon_celesteelaEntry | V0797_pokemon_celesteela_normalEntry;
  "CHARJABUG": V0737_pokemon_charjabugEntry | V0737_pokemon_charjabug_normalEntry | V0737_pokemon_charjabug_winter_2025Entry;
  "COMFEY": V0764_pokemon_comfeyEntry | V0764_pokemon_comfey_normalEntry;
  "COSMOEM": V0790_pokemon_cosmoemEntry | V0790_pokemon_cosmoem_normalEntry;
  "COSMOG": V0789_pokemon_cosmogEntry | V0789_pokemon_cosmog_normalEntry;
  "CRABOMINABLE": V0740_pokemon_crabominableEntry | V0740_pokemon_crabominable_normalEntry;
  "CRABRAWLER": V0739_pokemon_crabrawlerEntry | V0739_pokemon_crabrawler_normalEntry;
  "CUTIEFLY": V0742_pokemon_cutieflyEntry | V0742_pokemon_cutiefly_normalEntry;
  "DARTRIX": V0723_pokemon_dartrixEntry | V0723_pokemon_dartrix_normalEntry;
  "DECIDUEYE": V0724_pokemon_decidueyeEntry | V0724_pokemon_decidueye_hisuianEntry | V0724_pokemon_decidueye_normalEntry;
  "DEWPIDER": V0751_pokemon_dewpiderEntry | V0751_pokemon_dewpider_normalEntry;
  "DHELMISE": V0781_pokemon_dhelmiseEntry | V0781_pokemon_dhelmise_normalEntry;
  "DRAMPA": V0780_pokemon_drampaEntry | V0780_pokemon_drampa_normalEntry;
  "FOMANTIS": V0753_pokemon_fomantisEntry | V0753_pokemon_fomantis_normalEntry;
  "GOLISOPOD": V0768_pokemon_golisopodEntry | V0768_pokemon_golisopod_normalEntry;
  "GRUBBIN": V0736_pokemon_grubbinEntry | V0736_pokemon_grubbin_normalEntry;
  "GUMSHOOS": V0735_pokemon_gumshoosEntry | V0735_pokemon_gumshoos_normalEntry;
  "GUZZLORD": V0799_pokemon_guzzlordEntry | V0799_pokemon_guzzlord_normalEntry;
  "HAKAMO_O": V0783_pokemon_hakamo_oEntry | V0783_pokemon_hakamo_o_normalEntry;
  "INCINEROAR": V0727_pokemon_incineroarEntry | V0727_pokemon_incineroar_normalEntry;
  "JANGMO_O": V0782_pokemon_jangmo_oEntry | V0782_pokemon_jangmo_o_normalEntry;
  "KARTANA": V0798_pokemon_kartanaEntry | V0798_pokemon_kartana_normalEntry;
  "KOMALA": V0775_pokemon_komalaEntry | V0775_pokemon_komala_normalEntry;
  "KOMMO_O": V0784_pokemon_kommo_oEntry | V0784_pokemon_kommo_o_normalEntry;
  "LITTEN": V0725_pokemon_littenEntry | V0725_pokemon_litten_normalEntry;
  "LUNALA": V0792_pokemon_lunalaEntry | V0792_pokemon_lunala_normalEntry;
  "LURANTIS": V0754_pokemon_lurantisEntry | V0754_pokemon_lurantis_normalEntry;
  "LYCANROC": V0745_pokemon_lycanrocEntry | V0745_pokemon_lycanroc_duskEntry | V0745_pokemon_lycanroc_middayEntry | V0745_pokemon_lycanroc_midnightEntry;
  "MAGEARNA": V0801_pokemon_magearnaEntry | V0801_pokemon_magearna_normalEntry | V0801_pokemon_magearna_original_colorEntry;
  "MAREANIE": V0747_pokemon_mareanieEntry | V0747_pokemon_mareanie_normalEntry;
  "MARSHADOW": V0802_pokemon_marshadowEntry | V0802_pokemon_marshadow_normalEntry;
  "MELMETAL": V0809_pokemon_melmetalEntry | V0809_pokemon_melmetal_normalEntry;
  "MELTAN": V0808_pokemon_meltanEntry | V0808_pokemon_meltan_normalEntry;
  "MIMIKYU": V0778_pokemon_mimikyuEntry | V0778_pokemon_mimikyu_bustedEntry | V0778_pokemon_mimikyu_disguisedEntry;
  "MINIOR": V0774_pokemon_miniorEntry | V0774_pokemon_minior_blueEntry | V0774_pokemon_minior_greenEntry | V0774_pokemon_minior_indigoEntry | V0774_pokemon_minior_orangeEntry | V0774_pokemon_minior_redEntry | V0774_pokemon_minior_violetEntry | V0774_pokemon_minior_yellowEntry;
  "MORELULL": V0755_pokemon_morelullEntry | V0755_pokemon_morelull_normalEntry;
  "MUDBRAY": V0749_pokemon_mudbrayEntry | V0749_pokemon_mudbray_normalEntry;
  "MUDSDALE": V0750_pokemon_mudsdaleEntry | V0750_pokemon_mudsdale_normalEntry;
  "NAGANADEL": V0804_pokemon_naganadelEntry | V0804_pokemon_naganadel_normalEntry;
  "NECROZMA": V0800_pokemon_necrozmaEntry | V0800_pokemon_necrozma_dawn_wingsEntry | V0800_pokemon_necrozma_dusk_maneEntry | V0800_pokemon_necrozma_normalEntry | V0800_pokemon_necrozma_ultraEntry;
  "NIHILEGO": V0793_pokemon_nihilegoEntry | V0793_pokemon_nihilego_normalEntry;
  "ORANGURU": V0765_pokemon_oranguruEntry | V0765_pokemon_oranguru_normalEntry;
  "ORICORIO": V0741_pokemon_oricorioEntry | V0741_pokemon_oricorio_baileEntry | V0741_pokemon_oricorio_pauEntry | V0741_pokemon_oricorio_pompomEntry | V0741_pokemon_oricorio_sensuEntry;
  "PALOSSAND": V0770_pokemon_palossandEntry | V0770_pokemon_palossand_normalEntry;
  "PASSIMIAN": V0766_pokemon_passimianEntry | V0766_pokemon_passimian_normalEntry;
  "PHEROMOSA": V0795_pokemon_pheromosaEntry | V0795_pokemon_pheromosa_normalEntry;
  "PIKIPEK": V0731_pokemon_pikipekEntry | V0731_pokemon_pikipek_normalEntry;
  "POIPOLE": V0803_pokemon_poipoleEntry | V0803_pokemon_poipole_normalEntry;
  "POPPLIO": V0728_pokemon_popplioEntry | V0728_pokemon_popplio_normalEntry;
  "PRIMARINA": V0730_pokemon_primarinaEntry | V0730_pokemon_primarina_normalEntry;
  "PYUKUMUKU": V0771_pokemon_pyukumukuEntry | V0771_pokemon_pyukumuku_normalEntry;
  "RIBOMBEE": V0743_pokemon_ribombeeEntry | V0743_pokemon_ribombee_normalEntry;
  "ROCKRUFF": V0744_pokemon_rockruffEntry | V0744_pokemon_rockruff_duskEntry | V0744_pokemon_rockruff_normalEntry;
  "ROWLET": V0722_pokemon_rowletEntry | V0722_pokemon_rowlet_normalEntry;
  "SALANDIT": V0757_pokemon_salanditEntry | V0757_pokemon_salandit_normalEntry;
  "SALAZZLE": V0758_pokemon_salazzleEntry | V0758_pokemon_salazzle_normalEntry;
  "SANDYGAST": V0769_pokemon_sandygastEntry | V0769_pokemon_sandygast_normalEntry;
  "SHIINOTIC": V0756_pokemon_shiinoticEntry | V0756_pokemon_shiinotic_normalEntry;
  "SILVALLY": V0773_pokemon_silvallyEntry | V0773_pokemon_silvally_bugEntry | V0773_pokemon_silvally_darkEntry | V0773_pokemon_silvally_dragonEntry | V0773_pokemon_silvally_electricEntry | V0773_pokemon_silvally_fairyEntry | V0773_pokemon_silvally_fightingEntry | V0773_pokemon_silvally_fireEntry | V0773_pokemon_silvally_flyingEntry | V0773_pokemon_silvally_ghostEntry | V0773_pokemon_silvally_grassEntry | V0773_pokemon_silvally_groundEntry | V0773_pokemon_silvally_iceEntry | V0773_pokemon_silvally_normalEntry | V0773_pokemon_silvally_poisonEntry | V0773_pokemon_silvally_psychicEntry | V0773_pokemon_silvally_rockEntry | V0773_pokemon_silvally_steelEntry | V0773_pokemon_silvally_waterEntry;
  "SOLGALEO": V0791_pokemon_solgaleoEntry | V0791_pokemon_solgaleo_normalEntry;
  "STAKATAKA": V0805_pokemon_stakatakaEntry | V0805_pokemon_stakataka_normalEntry;
  "STEENEE": V0762_pokemon_steeneeEntry | V0762_pokemon_steenee_normalEntry;
  "STUFFUL": V0759_pokemon_stuffulEntry | V0759_pokemon_stufful_normalEntry;
  "TAPU_BULU": V0787_pokemon_tapu_buluEntry | V0787_pokemon_tapu_bulu_normalEntry;
  "TAPU_FINI": V0788_pokemon_tapu_finiEntry | V0788_pokemon_tapu_fini_normalEntry;
  "TAPU_KOKO": V0785_pokemon_tapu_kokoEntry | V0785_pokemon_tapu_koko_normalEntry;
  "TAPU_LELE": V0786_pokemon_tapu_leleEntry | V0786_pokemon_tapu_lele_normalEntry;
  "TOGEDEMARU": V0777_pokemon_togedemaruEntry | V0777_pokemon_togedemaru_normalEntry;
  "TORRACAT": V0726_pokemon_torracatEntry | V0726_pokemon_torracat_normalEntry;
  "TOUCANNON": V0733_pokemon_toucannonEntry | V0733_pokemon_toucannon_normalEntry;
  "TOXAPEX": V0748_pokemon_toxapexEntry | V0748_pokemon_toxapex_normalEntry;
  "TRUMBEAK": V0732_pokemon_trumbeakEntry | V0732_pokemon_trumbeak_normalEntry;
  "TSAREENA": V0763_pokemon_tsareenaEntry | V0763_pokemon_tsareena_normalEntry;
  "TURTONATOR": V0776_pokemon_turtonatorEntry | V0776_pokemon_turtonator_normalEntry;
  "TYPE_NULL": V0772_pokemon_type_nullEntry | V0772_pokemon_type_null_normalEntry;
  "VIKAVOLT": V0738_pokemon_vikavoltEntry | V0738_pokemon_vikavolt_normalEntry | V0738_pokemon_vikavolt_winter_2025Entry;
  "WIMPOD": V0767_pokemon_wimpodEntry | V0767_pokemon_wimpod_normalEntry;
  "WISHIWASHI": V0746_pokemon_wishiwashiEntry | V0746_pokemon_wishiwashi_schoolEntry | V0746_pokemon_wishiwashi_soloEntry;
  "XURKITREE": V0796_pokemon_xurkitreeEntry | V0796_pokemon_xurkitree_normalEntry;
  "YUNGOOS": V0734_pokemon_yungoosEntry | V0734_pokemon_yungoos_normalEntry;
  "ZERAORA": V0807_pokemon_zeraoraEntry | V0807_pokemon_zeraora_normalEntry;
}

export type PokemonSettingsGen7MasterfileEntry = V0722_pokemon_rowletEntry | V0722_pokemon_rowlet_normalEntry | V0723_pokemon_dartrixEntry | V0723_pokemon_dartrix_normalEntry | V0724_pokemon_decidueyeEntry | V0724_pokemon_decidueye_hisuianEntry | V0724_pokemon_decidueye_normalEntry | V0725_pokemon_littenEntry | V0725_pokemon_litten_normalEntry | V0726_pokemon_torracatEntry | V0726_pokemon_torracat_normalEntry | V0727_pokemon_incineroarEntry | V0727_pokemon_incineroar_normalEntry | V0728_pokemon_popplioEntry | V0728_pokemon_popplio_normalEntry | V0729_pokemon_brionneEntry | V0729_pokemon_brionne_normalEntry | V0730_pokemon_primarinaEntry | V0730_pokemon_primarina_normalEntry | V0731_pokemon_pikipekEntry | V0731_pokemon_pikipek_normalEntry | V0732_pokemon_trumbeakEntry | V0732_pokemon_trumbeak_normalEntry | V0733_pokemon_toucannonEntry | V0733_pokemon_toucannon_normalEntry | V0734_pokemon_yungoosEntry | V0734_pokemon_yungoos_normalEntry | V0735_pokemon_gumshoosEntry | V0735_pokemon_gumshoos_normalEntry | V0736_pokemon_grubbinEntry | V0736_pokemon_grubbin_normalEntry | V0737_pokemon_charjabugEntry | V0737_pokemon_charjabug_normalEntry | V0737_pokemon_charjabug_winter_2025Entry | V0738_pokemon_vikavoltEntry | V0738_pokemon_vikavolt_normalEntry | V0738_pokemon_vikavolt_winter_2025Entry | V0739_pokemon_crabrawlerEntry | V0739_pokemon_crabrawler_normalEntry | V0740_pokemon_crabominableEntry | V0740_pokemon_crabominable_normalEntry | V0741_pokemon_oricorioEntry | V0741_pokemon_oricorio_baileEntry | V0741_pokemon_oricorio_pauEntry | V0741_pokemon_oricorio_pompomEntry | V0741_pokemon_oricorio_sensuEntry | V0742_pokemon_cutieflyEntry | V0742_pokemon_cutiefly_normalEntry | V0743_pokemon_ribombeeEntry | V0743_pokemon_ribombee_normalEntry | V0744_pokemon_rockruffEntry | V0744_pokemon_rockruff_duskEntry | V0744_pokemon_rockruff_normalEntry | V0745_pokemon_lycanrocEntry | V0745_pokemon_lycanroc_duskEntry | V0745_pokemon_lycanroc_middayEntry | V0745_pokemon_lycanroc_midnightEntry | V0746_pokemon_wishiwashiEntry | V0746_pokemon_wishiwashi_schoolEntry | V0746_pokemon_wishiwashi_soloEntry | V0747_pokemon_mareanieEntry | V0747_pokemon_mareanie_normalEntry | V0748_pokemon_toxapexEntry | V0748_pokemon_toxapex_normalEntry | V0749_pokemon_mudbrayEntry | V0749_pokemon_mudbray_normalEntry | V0750_pokemon_mudsdaleEntry | V0750_pokemon_mudsdale_normalEntry | V0751_pokemon_dewpiderEntry | V0751_pokemon_dewpider_normalEntry | V0752_pokemon_araquanidEntry | V0752_pokemon_araquanid_normalEntry | V0753_pokemon_fomantisEntry | V0753_pokemon_fomantis_normalEntry | V0754_pokemon_lurantisEntry | V0754_pokemon_lurantis_normalEntry | V0755_pokemon_morelullEntry | V0755_pokemon_morelull_normalEntry | V0756_pokemon_shiinoticEntry | V0756_pokemon_shiinotic_normalEntry | V0757_pokemon_salanditEntry | V0757_pokemon_salandit_normalEntry | V0758_pokemon_salazzleEntry | V0758_pokemon_salazzle_normalEntry | V0759_pokemon_stuffulEntry | V0759_pokemon_stufful_normalEntry | V0760_pokemon_bewearEntry | V0760_pokemon_bewear_normalEntry | V0760_pokemon_bewear_wildarea_2025Entry | V0761_pokemon_bounsweetEntry | V0761_pokemon_bounsweet_normalEntry | V0762_pokemon_steeneeEntry | V0762_pokemon_steenee_normalEntry | V0763_pokemon_tsareenaEntry | V0763_pokemon_tsareena_normalEntry | V0764_pokemon_comfeyEntry | V0764_pokemon_comfey_normalEntry | V0765_pokemon_oranguruEntry | V0765_pokemon_oranguru_normalEntry | V0766_pokemon_passimianEntry | V0766_pokemon_passimian_normalEntry | V0767_pokemon_wimpodEntry | V0767_pokemon_wimpod_normalEntry | V0768_pokemon_golisopodEntry | V0768_pokemon_golisopod_normalEntry | V0769_pokemon_sandygastEntry | V0769_pokemon_sandygast_normalEntry | V0770_pokemon_palossandEntry | V0770_pokemon_palossand_normalEntry | V0771_pokemon_pyukumukuEntry | V0771_pokemon_pyukumuku_normalEntry | V0772_pokemon_type_nullEntry | V0772_pokemon_type_null_normalEntry | V0773_pokemon_silvallyEntry | V0773_pokemon_silvally_bugEntry | V0773_pokemon_silvally_darkEntry | V0773_pokemon_silvally_dragonEntry | V0773_pokemon_silvally_electricEntry | V0773_pokemon_silvally_fairyEntry | V0773_pokemon_silvally_fightingEntry | V0773_pokemon_silvally_fireEntry | V0773_pokemon_silvally_flyingEntry | V0773_pokemon_silvally_ghostEntry | V0773_pokemon_silvally_grassEntry | V0773_pokemon_silvally_groundEntry | V0773_pokemon_silvally_iceEntry | V0773_pokemon_silvally_normalEntry | V0773_pokemon_silvally_poisonEntry | V0773_pokemon_silvally_psychicEntry | V0773_pokemon_silvally_rockEntry | V0773_pokemon_silvally_steelEntry | V0773_pokemon_silvally_waterEntry | V0774_pokemon_miniorEntry | V0774_pokemon_minior_blueEntry | V0774_pokemon_minior_greenEntry | V0774_pokemon_minior_indigoEntry | V0774_pokemon_minior_orangeEntry | V0774_pokemon_minior_redEntry | V0774_pokemon_minior_violetEntry | V0774_pokemon_minior_yellowEntry | V0775_pokemon_komalaEntry | V0775_pokemon_komala_normalEntry | V0776_pokemon_turtonatorEntry | V0776_pokemon_turtonator_normalEntry | V0777_pokemon_togedemaruEntry | V0777_pokemon_togedemaru_normalEntry | V0778_pokemon_mimikyuEntry | V0778_pokemon_mimikyu_bustedEntry | V0778_pokemon_mimikyu_disguisedEntry | V0779_pokemon_bruxishEntry | V0779_pokemon_bruxish_normalEntry | V0780_pokemon_drampaEntry | V0780_pokemon_drampa_normalEntry | V0781_pokemon_dhelmiseEntry | V0781_pokemon_dhelmise_normalEntry | V0782_pokemon_jangmo_oEntry | V0782_pokemon_jangmo_o_normalEntry | V0783_pokemon_hakamo_oEntry | V0783_pokemon_hakamo_o_normalEntry | V0784_pokemon_kommo_oEntry | V0784_pokemon_kommo_o_normalEntry | V0785_pokemon_tapu_kokoEntry | V0785_pokemon_tapu_koko_normalEntry | V0786_pokemon_tapu_leleEntry | V0786_pokemon_tapu_lele_normalEntry | V0787_pokemon_tapu_buluEntry | V0787_pokemon_tapu_bulu_normalEntry | V0788_pokemon_tapu_finiEntry | V0788_pokemon_tapu_fini_normalEntry | V0789_pokemon_cosmogEntry | V0789_pokemon_cosmog_normalEntry | V0790_pokemon_cosmoemEntry | V0790_pokemon_cosmoem_normalEntry | V0791_pokemon_solgaleoEntry | V0791_pokemon_solgaleo_normalEntry | V0792_pokemon_lunalaEntry | V0792_pokemon_lunala_normalEntry | V0793_pokemon_nihilegoEntry | V0793_pokemon_nihilego_normalEntry | V0794_pokemon_buzzwoleEntry | V0794_pokemon_buzzwole_normalEntry | V0795_pokemon_pheromosaEntry | V0795_pokemon_pheromosa_normalEntry | V0796_pokemon_xurkitreeEntry | V0796_pokemon_xurkitree_normalEntry | V0797_pokemon_celesteelaEntry | V0797_pokemon_celesteela_normalEntry | V0798_pokemon_kartanaEntry | V0798_pokemon_kartana_normalEntry | V0799_pokemon_guzzlordEntry | V0799_pokemon_guzzlord_normalEntry | V0800_pokemon_necrozmaEntry | V0800_pokemon_necrozma_dawn_wingsEntry | V0800_pokemon_necrozma_dusk_maneEntry | V0800_pokemon_necrozma_normalEntry | V0800_pokemon_necrozma_ultraEntry | V0801_pokemon_magearnaEntry | V0801_pokemon_magearna_normalEntry | V0801_pokemon_magearna_original_colorEntry | V0802_pokemon_marshadowEntry | V0802_pokemon_marshadow_normalEntry | V0803_pokemon_poipoleEntry | V0803_pokemon_poipole_normalEntry | V0804_pokemon_naganadelEntry | V0804_pokemon_naganadel_normalEntry | V0805_pokemon_stakatakaEntry | V0805_pokemon_stakataka_normalEntry | V0806_pokemon_blacephalonEntry | V0806_pokemon_blacephalon_normalEntry | V0807_pokemon_zeraoraEntry | V0807_pokemon_zeraora_normalEntry | V0808_pokemon_meltanEntry | V0808_pokemon_meltan_normalEntry | V0809_pokemon_melmetalEntry | V0809_pokemon_melmetal_normalEntry;

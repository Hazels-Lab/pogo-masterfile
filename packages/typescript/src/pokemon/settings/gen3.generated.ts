/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/settings/gen3
// Filters: all
// Entries emitted: 300

import type { PokemonSettingsShared128, PokemonSettingsShared129, PokemonSettingsShared148, PokemonSettingsShared149, PokemonSettingsShared251, PokemonSettingsShared252, PokemonSettingsShared262, PokemonSettingsShared263, PokemonSettingsShared370, PokemonSettingsShared371, PokemonSettingsShared43, PokemonSettingsShared438, PokemonSettingsShared443, PokemonSettingsShared444, PokemonSettingsShared445, PokemonSettingsShared45, PokemonSettingsShared454, PokemonSettingsShared455, PokemonSettingsShared460, PokemonSettingsShared461, PokemonSettingsShared462, PokemonSettingsShared463, PokemonSettingsShared464, PokemonSettingsShared465, PokemonSettingsShared474, PokemonSettingsShared475, PokemonSettingsShared490, PokemonSettingsShared491, PokemonSettingsShared500, PokemonSettingsShared509, PokemonSettingsShared510, PokemonSettingsShared513, PokemonSettingsShared514, PokemonSettingsShared515, PokemonSettingsShared516, PokemonSettingsShared52, PokemonSettingsShared53, PokemonSettingsShared552, PokemonSettingsShared569, PokemonSettingsShared570, PokemonSettingsShared577, PokemonSettingsShared578, PokemonSettingsShared613, PokemonSettingsShared614, PokemonSettingsShared630, PokemonSettingsShared76, PokemonSettingsShared77, PokemonSettingsShared80, PokemonSettingsShared81 } from "./shared.generated";

export interface V0252_pokemon_treeckodatapokemonsettingscamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0252_pokemon_treeckodatapokemonsettingsencounter {
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
export interface V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
}
export interface V0252_pokemon_treeckodatapokemonsettingsibfc {

}
export interface V0252_pokemon_treeckodatapokemonsettingsshadow {
  purificationCandyNeeded: number;
  purificationStardustNeeded: number;
  purifiedChargeMove: string;
  shadowChargeMove: string;
}
export interface V0252_pokemon_treeckodatapokemonsettingsstats {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
}
export interface V0252_pokemon_treeckodatapokemonsettingsthirdmove {
  candyToUnlock: number;
  stardustToUnlock: number;
}
export interface V0252_pokemon_treeckodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0252_pokemon_treeckodata {
  pokemonSettings: V0252_pokemon_treeckodatapokemonsettings;
  templateId: string;
}
export interface V0252_pokemon_treeckoEntry {
  templateId: "V0252_POKEMON_TREECKO";
  data: V0252_pokemon_treeckodata;
}
export interface V0253_pokemon_grovyledatapokemonsettingsencounter {
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
export interface V0253_pokemon_grovyledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0253_pokemon_grovyledata {
  pokemonSettings: V0253_pokemon_grovyledatapokemonsettings;
  templateId: string;
}
export interface V0253_pokemon_grovyleEntry {
  templateId: "V0253_POKEMON_GROVYLE";
  data: V0253_pokemon_grovyledata;
}
export interface V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
}
export interface V0253_pokemon_grovyle_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0253_pokemon_grovyle_normaldata {
  pokemonSettings: V0253_pokemon_grovyle_normaldatapokemonsettings;
  templateId: string;
}
export interface V0253_pokemon_grovyle_normalEntry {
  templateId: "V0253_POKEMON_GROVYLE_NORMAL";
  data: V0253_pokemon_grovyle_normaldata;
}
export interface V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem {
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0254_pokemon_sceptiledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0254_pokemon_sceptiledata {
  pokemonSettings: V0254_pokemon_sceptiledatapokemonsettings;
  templateId: string;
}
export interface V0254_pokemon_sceptileEntry {
  templateId: "V0254_POKEMON_SCEPTILE";
  data: V0254_pokemon_sceptiledata;
}
export interface V0254_pokemon_sceptile_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0254_pokemon_sceptile_normaldata {
  pokemonSettings: V0254_pokemon_sceptile_normaldatapokemonsettings;
  templateId: string;
}
export interface V0254_pokemon_sceptile_normalEntry {
  templateId: "V0254_POKEMON_SCEPTILE_NORMAL";
  data: V0254_pokemon_sceptile_normaldata;
}
export interface V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0257_pokemon_blazikendatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0257_pokemon_blazikendata {
  pokemonSettings: V0257_pokemon_blazikendatapokemonsettings;
  templateId: string;
}
export interface V0257_pokemon_blazikenEntry {
  templateId: "V0257_POKEMON_BLAZIKEN";
  data: V0257_pokemon_blazikendata;
}
export interface V0257_pokemon_blaziken_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0257_pokemon_blaziken_normaldata {
  pokemonSettings: V0257_pokemon_blaziken_normaldatapokemonsettings;
  templateId: string;
}
export interface V0257_pokemon_blaziken_normalEntry {
  templateId: "V0257_POKEMON_BLAZIKEN_NORMAL";
  data: V0257_pokemon_blaziken_normaldata;
}
export interface V0258_pokemon_mudkipdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0258_pokemon_mudkipdata {
  pokemonSettings: V0258_pokemon_mudkipdatapokemonsettings;
  templateId: string;
}
export interface V0258_pokemon_mudkipEntry {
  templateId: "V0258_POKEMON_MUDKIP";
  data: V0258_pokemon_mudkipdata;
}
export interface V0258_pokemon_mudkip_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0258_pokemon_mudkip_normaldata {
  pokemonSettings: V0258_pokemon_mudkip_normaldatapokemonsettings;
  templateId: string;
}
export interface V0258_pokemon_mudkip_normalEntry {
  templateId: "V0258_POKEMON_MUDKIP_NORMAL";
  data: V0258_pokemon_mudkip_normaldata;
}
export interface V0259_pokemon_marshtompdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0259_pokemon_marshtompdata {
  pokemonSettings: V0259_pokemon_marshtompdatapokemonsettings;
  templateId: string;
}
export interface V0259_pokemon_marshtompEntry {
  templateId: "V0259_POKEMON_MARSHTOMP";
  data: V0259_pokemon_marshtompdata;
}
export interface V0259_pokemon_marshtomp_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0259_pokemon_marshtomp_normaldata {
  pokemonSettings: V0259_pokemon_marshtomp_normaldatapokemonsettings;
  templateId: string;
}
export interface V0259_pokemon_marshtomp_normalEntry {
  templateId: "V0259_POKEMON_MARSHTOMP_NORMAL";
  data: V0259_pokemon_marshtomp_normaldata;
}
export interface V0260_pokemon_swampertdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0260_pokemon_swampertdata {
  pokemonSettings: V0260_pokemon_swampertdatapokemonsettings;
  templateId: string;
}
export interface V0260_pokemon_swampertEntry {
  templateId: "V0260_POKEMON_SWAMPERT";
  data: V0260_pokemon_swampertdata;
}
export interface V0260_pokemon_swampert_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0260_pokemon_swampert_normaldata {
  pokemonSettings: V0260_pokemon_swampert_normaldatapokemonsettings;
  templateId: string;
}
export interface V0260_pokemon_swampert_normalEntry {
  templateId: "V0260_POKEMON_SWAMPERT_NORMAL";
  data: V0260_pokemon_swampert_normaldata;
}
export interface V0263_pokemon_zigzagoondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0263_pokemon_zigzagoondata {
  pokemonSettings: V0263_pokemon_zigzagoondatapokemonsettings;
  templateId: string;
}
export interface V0263_pokemon_zigzagoonEntry {
  templateId: "V0263_POKEMON_ZIGZAGOON";
  data: V0263_pokemon_zigzagoondata;
}
export interface V0263_pokemon_zigzagoon_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0263_pokemon_zigzagoon_galariandata {
  pokemonSettings: V0263_pokemon_zigzagoon_galariandatapokemonsettings;
  templateId: string;
}
export interface V0263_pokemon_zigzagoon_galarianEntry {
  templateId: "V0263_POKEMON_ZIGZAGOON_GALARIAN";
  data: V0263_pokemon_zigzagoon_galariandata;
}
export interface V0263_pokemon_zigzagoon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0263_pokemon_zigzagoon_normaldata {
  pokemonSettings: V0263_pokemon_zigzagoon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0263_pokemon_zigzagoon_normalEntry {
  templateId: "V0263_POKEMON_ZIGZAGOON_NORMAL";
  data: V0263_pokemon_zigzagoon_normaldata;
}
export interface V0264_pokemon_linoone_galariandatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0264_pokemon_linoone_galariandata {
  pokemonSettings: V0264_pokemon_linoone_galariandatapokemonsettings;
  templateId: string;
}
export interface V0264_pokemon_linoone_galarianEntry {
  templateId: "V0264_POKEMON_LINOONE_GALARIAN";
  data: V0264_pokemon_linoone_galariandata;
}
export interface V0270_pokemon_lotaddatapokemonsettingsencounter {
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
export interface V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
}
export interface V0270_pokemon_lotaddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0270_pokemon_lotaddata {
  pokemonSettings: V0270_pokemon_lotaddatapokemonsettings;
  templateId: string;
}
export interface V0270_pokemon_lotadEntry {
  templateId: "V0270_POKEMON_LOTAD";
  data: V0270_pokemon_lotaddata;
}
export interface V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  form: string;
}
export interface V0270_pokemon_lotad_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0270_pokemon_lotad_normaldata {
  pokemonSettings: V0270_pokemon_lotad_normaldatapokemonsettings;
  templateId: string;
}
export interface V0270_pokemon_lotad_normalEntry {
  templateId: "V0270_POKEMON_LOTAD_NORMAL";
  data: V0270_pokemon_lotad_normaldata;
}
export interface V0271_pokemon_lombredatapokemonsettingsencounter {
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
export interface V0271_pokemon_lombredatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0271_pokemon_lombredata {
  pokemonSettings: V0271_pokemon_lombredatapokemonsettings;
  templateId: string;
}
export interface V0271_pokemon_lombreEntry {
  templateId: "V0271_POKEMON_LOMBRE";
  data: V0271_pokemon_lombredata;
}
export interface V0271_pokemon_lombre_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0271_pokemon_lombre_normaldata {
  pokemonSettings: V0271_pokemon_lombre_normaldatapokemonsettings;
  templateId: string;
}
export interface V0271_pokemon_lombre_normalEntry {
  templateId: "V0271_POKEMON_LOMBRE_NORMAL";
  data: V0271_pokemon_lombre_normaldata;
}
export interface V0272_pokemon_ludicolodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0272_pokemon_ludicolodata {
  pokemonSettings: V0272_pokemon_ludicolodatapokemonsettings;
  templateId: string;
}
export interface V0272_pokemon_ludicoloEntry {
  templateId: "V0272_POKEMON_LUDICOLO";
  data: V0272_pokemon_ludicolodata;
}
export interface V0272_pokemon_ludicolo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0272_pokemon_ludicolo_normaldata {
  pokemonSettings: V0272_pokemon_ludicolo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0272_pokemon_ludicolo_normalEntry {
  templateId: "V0272_POKEMON_LUDICOLO_NORMAL";
  data: V0272_pokemon_ludicolo_normaldata;
}
export interface V0273_pokemon_seedotdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0273_pokemon_seedotdata {
  pokemonSettings: V0273_pokemon_seedotdatapokemonsettings;
  templateId: string;
}
export interface V0273_pokemon_seedotEntry {
  templateId: "V0273_POKEMON_SEEDOT";
  data: V0273_pokemon_seedotdata;
}
export interface V0273_pokemon_seedot_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0273_pokemon_seedot_normaldata {
  pokemonSettings: V0273_pokemon_seedot_normaldatapokemonsettings;
  templateId: string;
}
export interface V0273_pokemon_seedot_normalEntry {
  templateId: "V0273_POKEMON_SEEDOT_NORMAL";
  data: V0273_pokemon_seedot_normaldata;
}
export interface V0276_pokemon_taillowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0276_pokemon_taillowdata {
  pokemonSettings: V0276_pokemon_taillowdatapokemonsettings;
  templateId: string;
}
export interface V0276_pokemon_taillowEntry {
  templateId: "V0276_POKEMON_TAILLOW";
  data: V0276_pokemon_taillowdata;
}
export interface V0276_pokemon_taillow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0276_pokemon_taillow_normaldata {
  pokemonSettings: V0276_pokemon_taillow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0276_pokemon_taillow_normalEntry {
  templateId: "V0276_POKEMON_TAILLOW_NORMAL";
  data: V0276_pokemon_taillow_normaldata;
}
export interface V0277_pokemon_swellowdatapokemonsettingscamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
  diskRadiusM: number;
  shoulderModeScale: number;
}
export interface V0277_pokemon_swellowdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0277_pokemon_swellowdata {
  pokemonSettings: V0277_pokemon_swellowdatapokemonsettings;
  templateId: string;
}
export interface V0277_pokemon_swellowEntry {
  templateId: "V0277_POKEMON_SWELLOW";
  data: V0277_pokemon_swellowdata;
}
export interface V0277_pokemon_swellow_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0277_pokemon_swellow_normaldata {
  pokemonSettings: V0277_pokemon_swellow_normaldatapokemonsettings;
  templateId: string;
}
export interface V0277_pokemon_swellow_normalEntry {
  templateId: "V0277_POKEMON_SWELLOW_NORMAL";
  data: V0277_pokemon_swellow_normaldata;
}
export interface V0278_pokemon_wingulldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0278_pokemon_wingulldata {
  pokemonSettings: V0278_pokemon_wingulldatapokemonsettings;
  templateId: string;
}
export interface V0278_pokemon_wingullEntry {
  templateId: "V0278_POKEMON_WINGULL";
  data: V0278_pokemon_wingulldata;
}
export interface V0278_pokemon_wingull_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0278_pokemon_wingull_normaldata {
  pokemonSettings: V0278_pokemon_wingull_normaldatapokemonsettings;
  templateId: string;
}
export interface V0278_pokemon_wingull_normalEntry {
  templateId: "V0278_POKEMON_WINGULL_NORMAL";
  data: V0278_pokemon_wingull_normaldata;
}
export interface V0279_pokemon_pelipperdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0279_pokemon_pelipperdata {
  pokemonSettings: V0279_pokemon_pelipperdatapokemonsettings;
  templateId: string;
}
export interface V0279_pokemon_pelipperEntry {
  templateId: "V0279_POKEMON_PELIPPER";
  data: V0279_pokemon_pelipperdata;
}
export interface V0279_pokemon_pelipper_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0279_pokemon_pelipper_normaldata {
  pokemonSettings: V0279_pokemon_pelipper_normaldatapokemonsettings;
  templateId: string;
}
export interface V0279_pokemon_pelipper_normalEntry {
  templateId: "V0279_POKEMON_PELIPPER_NORMAL";
  data: V0279_pokemon_pelipper_normaldata;
}
export interface V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem {
  genderRequirement?: string;
  megaEnergyAwardAmount: number;
  megaPokemonId: string;
}
export interface V0280_pokemon_raltsdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0280_pokemon_raltsdata {
  pokemonSettings: V0280_pokemon_raltsdatapokemonsettings;
  templateId: string;
}
export interface V0280_pokemon_raltsEntry {
  templateId: "V0280_POKEMON_RALTS";
  data: V0280_pokemon_raltsdata;
}
export interface V0280_pokemon_ralts_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0280_pokemon_ralts_normaldata {
  pokemonSettings: V0280_pokemon_ralts_normaldatapokemonsettings;
  templateId: string;
}
export interface V0280_pokemon_ralts_normalEntry {
  templateId: "V0280_POKEMON_RALTS_NORMAL";
  data: V0280_pokemon_ralts_normaldata;
}
export interface V0281_pokemon_kirliadatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement?: string;
  form: string;
  genderRequirement?: string;
}
export interface V0281_pokemon_kirliadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0281_pokemon_kirliadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0281_pokemon_kirliadata {
  pokemonSettings: V0281_pokemon_kirliadatapokemonsettings;
  templateId: string;
}
export interface V0281_pokemon_kirliaEntry {
  templateId: "V0281_POKEMON_KIRLIA";
  data: V0281_pokemon_kirliadata;
}
export interface V0281_pokemon_kirlia_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0281_pokemon_kirliadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0281_pokemon_kirlia_normaldata {
  pokemonSettings: V0281_pokemon_kirlia_normaldatapokemonsettings;
  templateId: string;
}
export interface V0281_pokemon_kirlia_normalEntry {
  templateId: "V0281_POKEMON_KIRLIA_NORMAL";
  data: V0281_pokemon_kirlia_normaldata;
}
export interface V0282_pokemon_gardevoirdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0282_pokemon_gardevoirdata {
  pokemonSettings: V0282_pokemon_gardevoirdatapokemonsettings;
  templateId: string;
}
export interface V0282_pokemon_gardevoirEntry {
  templateId: "V0282_POKEMON_GARDEVOIR";
  data: V0282_pokemon_gardevoirdata;
}
export interface V0282_pokemon_gardevoir_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAwards: (V0280_pokemon_raltsdatapokemonsettingsbuddywalkedmegaenergyawardsitem)[];
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0282_pokemon_gardevoir_normaldata {
  pokemonSettings: V0282_pokemon_gardevoir_normaldatapokemonsettings;
  templateId: string;
}
export interface V0282_pokemon_gardevoir_normalEntry {
  templateId: "V0282_POKEMON_GARDEVOIR_NORMAL";
  data: V0282_pokemon_gardevoir_normaldata;
}
export interface V0284_pokemon_masqueraindatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0284_pokemon_masqueraindata {
  pokemonSettings: V0284_pokemon_masqueraindatapokemonsettings;
  templateId: string;
}
export interface V0284_pokemon_masquerainEntry {
  templateId: "V0284_POKEMON_MASQUERAIN";
  data: V0284_pokemon_masqueraindata;
}
export interface V0284_pokemon_masquerain_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0284_pokemon_masquerain_normaldata {
  pokemonSettings: V0284_pokemon_masquerain_normaldatapokemonsettings;
  templateId: string;
}
export interface V0284_pokemon_masquerain_normalEntry {
  templateId: "V0284_POKEMON_MASQUERAIN_NORMAL";
  data: V0284_pokemon_masquerain_normaldata;
}
export interface V0285_pokemon_shroomishdatapokemonsettingsencounter {
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
export interface V0285_pokemon_shroomishdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0285_pokemon_shroomishdatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0285_pokemon_shroomishdata {
  pokemonSettings: V0285_pokemon_shroomishdatapokemonsettings;
  templateId: string;
}
export interface V0285_pokemon_shroomishEntry {
  templateId: "V0285_POKEMON_SHROOMISH";
  data: V0285_pokemon_shroomishdata;
}
export interface V0285_pokemon_shroomish_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0285_pokemon_shroomishdatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0285_pokemon_shroomish_normaldata {
  pokemonSettings: V0285_pokemon_shroomish_normaldatapokemonsettings;
  templateId: string;
}
export interface V0285_pokemon_shroomish_normalEntry {
  templateId: "V0285_POKEMON_SHROOMISH_NORMAL";
  data: V0285_pokemon_shroomish_normaldata;
}
export interface V0286_pokemon_breloomdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0286_pokemon_breloomdata {
  pokemonSettings: V0286_pokemon_breloomdatapokemonsettings;
  templateId: string;
}
export interface V0286_pokemon_breloomEntry {
  templateId: "V0286_POKEMON_BRELOOM";
  data: V0286_pokemon_breloomdata;
}
export interface V0286_pokemon_breloom_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0286_pokemon_breloom_normaldata {
  pokemonSettings: V0286_pokemon_breloom_normaldatapokemonsettings;
  templateId: string;
}
export interface V0286_pokemon_breloom_normalEntry {
  templateId: "V0286_POKEMON_BRELOOM_NORMAL";
  data: V0286_pokemon_breloom_normaldata;
}
export interface V0287_pokemon_slakothdatapokemonsettingsencounter {
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
  movementType: string;
  shadowAttackProbability: number;
  shadowBaseCaptureRate: number;
  shadowDodgeProbability: number;
}
export interface V0287_pokemon_slakothdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0287_pokemon_slakothdatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0287_pokemon_slakothdata {
  pokemonSettings: V0287_pokemon_slakothdatapokemonsettings;
  templateId: string;
}
export interface V0287_pokemon_slakothEntry {
  templateId: "V0287_POKEMON_SLAKOTH";
  data: V0287_pokemon_slakothdata;
}
export interface V0287_pokemon_slakoth_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0287_pokemon_slakothdatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0287_pokemon_slakoth_normaldata {
  pokemonSettings: V0287_pokemon_slakoth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0287_pokemon_slakoth_normalEntry {
  templateId: "V0287_POKEMON_SLAKOTH_NORMAL";
  data: V0287_pokemon_slakoth_normaldata;
}
export interface V0288_pokemon_vigoroth_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0288_pokemon_vigoroth_normaldata {
  pokemonSettings: V0288_pokemon_vigoroth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0288_pokemon_vigoroth_normalEntry {
  templateId: "V0288_POKEMON_VIGOROTH_NORMAL";
  data: V0288_pokemon_vigoroth_normaldata;
}
export interface V0289_pokemon_slakingdatapokemonsettingsencounter {
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
export interface V0289_pokemon_slakingdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0289_pokemon_slakingdata {
  pokemonSettings: V0289_pokemon_slakingdatapokemonsettings;
  templateId: string;
}
export interface V0289_pokemon_slakingEntry {
  templateId: "V0289_POKEMON_SLAKING";
  data: V0289_pokemon_slakingdata;
}
export interface V0289_pokemon_slaking_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  eliteCinematicMove: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0289_pokemon_slaking_normaldata {
  pokemonSettings: V0289_pokemon_slaking_normaldatapokemonsettings;
  templateId: string;
}
export interface V0289_pokemon_slaking_normalEntry {
  templateId: "V0289_POKEMON_SLAKING_NORMAL";
  data: V0289_pokemon_slaking_normaldata;
}
export interface V0292_pokemon_shedinjadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0292_pokemon_shedinjadata {
  pokemonSettings: V0292_pokemon_shedinjadatapokemonsettings;
  templateId: string;
}
export interface V0292_pokemon_shedinjaEntry {
  templateId: "V0292_POKEMON_SHEDINJA";
  data: V0292_pokemon_shedinjadata;
}
export interface V0292_pokemon_shedinja_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0292_pokemon_shedinja_normaldata {
  pokemonSettings: V0292_pokemon_shedinja_normaldatapokemonsettings;
  templateId: string;
}
export interface V0292_pokemon_shedinja_normalEntry {
  templateId: "V0292_POKEMON_SHEDINJA_NORMAL";
  data: V0292_pokemon_shedinja_normaldata;
}
export interface V0293_pokemon_whismurdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0293_pokemon_whismurdata {
  pokemonSettings: V0293_pokemon_whismurdatapokemonsettings;
  templateId: string;
}
export interface V0293_pokemon_whismurEntry {
  templateId: "V0293_POKEMON_WHISMUR";
  data: V0293_pokemon_whismurdata;
}
export interface V0293_pokemon_whismur_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0293_pokemon_whismur_normaldata {
  pokemonSettings: V0293_pokemon_whismur_normaldatapokemonsettings;
  templateId: string;
}
export interface V0293_pokemon_whismur_normalEntry {
  templateId: "V0293_POKEMON_WHISMUR_NORMAL";
  data: V0293_pokemon_whismur_normaldata;
}
export interface V0294_pokemon_loudred_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0294_pokemon_loudred_normaldata {
  pokemonSettings: V0294_pokemon_loudred_normaldatapokemonsettings;
  templateId: string;
}
export interface V0294_pokemon_loudred_normalEntry {
  templateId: "V0294_POKEMON_LOUDRED_NORMAL";
  data: V0294_pokemon_loudred_normaldata;
}
export interface V0299_pokemon_nosepassdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  lureItemRequirement: string;
}
export interface V0299_pokemon_nosepassdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0299_pokemon_nosepassdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0299_pokemon_nosepassdata {
  pokemonSettings: V0299_pokemon_nosepassdatapokemonsettings;
  templateId: string;
}
export interface V0299_pokemon_nosepassEntry {
  templateId: "V0299_POKEMON_NOSEPASS";
  data: V0299_pokemon_nosepassdata;
}
export interface V0299_pokemon_nosepass_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  lureItemRequirement: string;
}
export interface V0299_pokemon_nosepass_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0299_pokemon_nosepass_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0299_pokemon_nosepass_normaldata {
  pokemonSettings: V0299_pokemon_nosepass_normaldatapokemonsettings;
  templateId: string;
}
export interface V0299_pokemon_nosepass_normalEntry {
  templateId: "V0299_POKEMON_NOSEPASS_NORMAL";
  data: V0299_pokemon_nosepass_normaldata;
}
export interface V0302_pokemon_sableyedatapokemonsettingsencounter {
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
export interface V0302_pokemon_sableyedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyPortraitRotation: (number)[];
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0302_pokemon_sableyedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0302_pokemon_sableyedatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0302_pokemon_sableyedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0302_pokemon_sableyedata {
  pokemonSettings: V0302_pokemon_sableyedatapokemonsettings;
  templateId: string;
}
export interface V0302_pokemon_sableyeEntry {
  templateId: "V0302_POKEMON_SABLEYE";
  data: V0302_pokemon_sableyedata;
}
export interface V0302_pokemon_sableye_costume_2020datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0302_pokemon_sableyedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0302_pokemon_sableye_costume_2020data {
  pokemonSettings: V0302_pokemon_sableye_costume_2020datapokemonsettings;
  templateId: string;
}
export interface V0302_pokemon_sableye_costume_2020Entry {
  templateId: "V0302_POKEMON_SABLEYE_COSTUME_2020";
  data: V0302_pokemon_sableye_costume_2020data;
}
export interface V0302_pokemon_sableye_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0302_pokemon_sableyedatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0302_pokemon_sableyedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0302_pokemon_sableye_normaldata {
  pokemonSettings: V0302_pokemon_sableye_normaldatapokemonsettings;
  templateId: string;
}
export interface V0302_pokemon_sableye_normalEntry {
  templateId: "V0302_POKEMON_SABLEYE_NORMAL";
  data: V0302_pokemon_sableye_normaldata;
}
export interface V0303_pokemon_mawiledatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0303_pokemon_mawiledatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0303_pokemon_mawiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0303_pokemon_mawiledata {
  pokemonSettings: V0303_pokemon_mawiledatapokemonsettings;
  templateId: string;
}
export interface V0303_pokemon_mawileEntry {
  templateId: "V0303_POKEMON_MAWILE";
  data: V0303_pokemon_mawiledata;
}
export interface V0303_pokemon_mawile_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0303_pokemon_mawiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0303_pokemon_mawile_normaldata {
  pokemonSettings: V0303_pokemon_mawile_normaldatapokemonsettings;
  templateId: string;
}
export interface V0303_pokemon_mawile_normalEntry {
  templateId: "V0303_POKEMON_MAWILE_NORMAL";
  data: V0303_pokemon_mawile_normaldata;
}
export interface V0304_pokemon_arondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0304_pokemon_arondata {
  pokemonSettings: V0304_pokemon_arondatapokemonsettings;
  templateId: string;
}
export interface V0304_pokemon_aronEntry {
  templateId: "V0304_POKEMON_ARON";
  data: V0304_pokemon_arondata;
}
export interface V0304_pokemon_aron_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0304_pokemon_aron_normaldata {
  pokemonSettings: V0304_pokemon_aron_normaldatapokemonsettings;
  templateId: string;
}
export interface V0304_pokemon_aron_normalEntry {
  templateId: "V0304_POKEMON_ARON_NORMAL";
  data: V0304_pokemon_aron_normaldata;
}
export interface V0306_pokemon_aggrondatapokemonsettingstempevooverridesitem {
  averageHeightM?: number;
  averageWeightKg?: number;
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  raidBossDistanceOffset?: number;
  stats?: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId?: string;
  typeOverride1?: string;
}
export interface V0306_pokemon_aggrondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0306_pokemon_aggrondatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0306_pokemon_aggrondata {
  pokemonSettings: V0306_pokemon_aggrondatapokemonsettings;
  templateId: string;
}
export interface V0306_pokemon_aggronEntry {
  templateId: "V0306_POKEMON_AGGRON";
  data: V0306_pokemon_aggrondata;
}
export interface V0306_pokemon_aggron_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0306_pokemon_aggrondatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0306_pokemon_aggron_normaldata {
  pokemonSettings: V0306_pokemon_aggron_normaldatapokemonsettings;
  templateId: string;
}
export interface V0306_pokemon_aggron_normalEntry {
  templateId: "V0306_POKEMON_AGGRON_NORMAL";
  data: V0306_pokemon_aggron_normaldata;
}
export interface V0307_pokemon_medititedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0307_pokemon_medititedata {
  pokemonSettings: V0307_pokemon_medititedatapokemonsettings;
  templateId: string;
}
export interface V0307_pokemon_medititeEntry {
  templateId: "V0307_POKEMON_MEDITITE";
  data: V0307_pokemon_medititedata;
}
export interface V0307_pokemon_meditite_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0307_pokemon_meditite_normaldata {
  pokemonSettings: V0307_pokemon_meditite_normaldatapokemonsettings;
  templateId: string;
}
export interface V0307_pokemon_meditite_normalEntry {
  templateId: "V0307_POKEMON_MEDITITE_NORMAL";
  data: V0307_pokemon_meditite_normaldata;
}
export interface V0308_pokemon_medichamdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0308_pokemon_medichamdata {
  pokemonSettings: V0308_pokemon_medichamdatapokemonsettings;
  templateId: string;
}
export interface V0308_pokemon_medichamEntry {
  templateId: "V0308_POKEMON_MEDICHAM";
  data: V0308_pokemon_medichamdata;
}
export interface V0308_pokemon_medicham_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0257_pokemon_blazikendatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0308_pokemon_medicham_normaldata {
  pokemonSettings: V0308_pokemon_medicham_normaldatapokemonsettings;
  templateId: string;
}
export interface V0308_pokemon_medicham_normalEntry {
  templateId: "V0308_POKEMON_MEDICHAM_NORMAL";
  data: V0308_pokemon_medicham_normaldata;
}
export interface V0309_pokemon_electrikedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0309_pokemon_electrikedata {
  pokemonSettings: V0309_pokemon_electrikedatapokemonsettings;
  templateId: string;
}
export interface V0309_pokemon_electrikeEntry {
  templateId: "V0309_POKEMON_ELECTRIKE";
  data: V0309_pokemon_electrikedata;
}
export interface V0309_pokemon_electrike_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0309_pokemon_electrike_normaldata {
  pokemonSettings: V0309_pokemon_electrike_normaldatapokemonsettings;
  templateId: string;
}
export interface V0309_pokemon_electrike_normalEntry {
  templateId: "V0309_POKEMON_ELECTRIKE_NORMAL";
  data: V0309_pokemon_electrike_normaldata;
}
export interface V0310_pokemon_manectricdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0310_pokemon_manectricdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0310_pokemon_manectricdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0310_pokemon_manectricdata {
  pokemonSettings: V0310_pokemon_manectricdatapokemonsettings;
  templateId: string;
}
export interface V0310_pokemon_manectricEntry {
  templateId: "V0310_POKEMON_MANECTRIC";
  data: V0310_pokemon_manectricdata;
}
export interface V0310_pokemon_manectric_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0310_pokemon_manectricdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0310_pokemon_manectric_normaldata {
  pokemonSettings: V0310_pokemon_manectric_normaldatapokemonsettings;
  templateId: string;
}
export interface V0310_pokemon_manectric_normalEntry {
  templateId: "V0310_POKEMON_MANECTRIC_NORMAL";
  data: V0310_pokemon_manectric_normaldata;
}
export interface V0315_pokemon_roseliadatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
}
export interface V0315_pokemon_roseliadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0315_pokemon_roseliadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0315_pokemon_roseliadata {
  pokemonSettings: V0315_pokemon_roseliadatapokemonsettings;
  templateId: string;
}
export interface V0315_pokemon_roseliaEntry {
  templateId: "V0315_POKEMON_ROSELIA";
  data: V0315_pokemon_roseliadata;
}
export interface V0315_pokemon_roselia_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0315_pokemon_roselia_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionBranch: (V0315_pokemon_roselia_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0315_pokemon_roselia_normaldata {
  pokemonSettings: V0315_pokemon_roselia_normaldatapokemonsettings;
  templateId: string;
}
export interface V0315_pokemon_roselia_normalEntry {
  templateId: "V0315_POKEMON_ROSELIA_NORMAL";
  data: V0315_pokemon_roselia_normaldata;
}
export interface V0317_pokemon_swalotdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0317_pokemon_swalotdata {
  pokemonSettings: V0317_pokemon_swalotdatapokemonsettings;
  templateId: string;
}
export interface V0317_pokemon_swalotEntry {
  templateId: "V0317_POKEMON_SWALOT";
  data: V0317_pokemon_swalotdata;
}
export interface V0317_pokemon_swalot_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0271_pokemon_lombredatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0317_pokemon_swalot_normaldata {
  pokemonSettings: V0317_pokemon_swalot_normaldatapokemonsettings;
  templateId: string;
}
export interface V0317_pokemon_swalot_normalEntry {
  templateId: "V0317_POKEMON_SWALOT_NORMAL";
  data: V0317_pokemon_swalot_normaldata;
}
export interface V0318_pokemon_carvanhadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0318_pokemon_carvanhadata {
  pokemonSettings: V0318_pokemon_carvanhadatapokemonsettings;
  templateId: string;
}
export interface V0318_pokemon_carvanhaEntry {
  templateId: "V0318_POKEMON_CARVANHA";
  data: V0318_pokemon_carvanhadata;
}
export interface V0318_pokemon_carvanha_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0318_pokemon_carvanha_normaldata {
  pokemonSettings: V0318_pokemon_carvanha_normaldatapokemonsettings;
  templateId: string;
}
export interface V0318_pokemon_carvanha_normalEntry {
  templateId: "V0318_POKEMON_CARVANHA_NORMAL";
  data: V0318_pokemon_carvanha_normaldata;
}
export interface V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera {
  cylinderGroundM: number;
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0319_pokemon_sharpedodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0319_pokemon_sharpedodata {
  pokemonSettings: V0319_pokemon_sharpedodatapokemonsettings;
  templateId: string;
}
export interface V0319_pokemon_sharpedoEntry {
  templateId: "V0319_POKEMON_SHARPEDO";
  data: V0319_pokemon_sharpedodata;
}
export interface V0319_pokemon_sharpedo_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0319_pokemon_sharpedo_normaldata {
  pokemonSettings: V0319_pokemon_sharpedo_normaldatapokemonsettings;
  templateId: string;
}
export interface V0319_pokemon_sharpedo_normalEntry {
  templateId: "V0319_POKEMON_SHARPEDO_NORMAL";
  data: V0319_pokemon_sharpedo_normaldata;
}
export interface V0320_pokemon_wailmerdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0320_pokemon_wailmerdata {
  pokemonSettings: V0320_pokemon_wailmerdatapokemonsettings;
  templateId: string;
}
export interface V0320_pokemon_wailmerEntry {
  templateId: "V0320_POKEMON_WAILMER";
  data: V0320_pokemon_wailmerdata;
}
export interface V0320_pokemon_wailmer_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0320_pokemon_wailmer_normaldata {
  pokemonSettings: V0320_pokemon_wailmer_normaldatapokemonsettings;
  templateId: string;
}
export interface V0320_pokemon_wailmer_normalEntry {
  templateId: "V0320_POKEMON_WAILMER_NORMAL";
  data: V0320_pokemon_wailmer_normaldata;
}
export interface V0321_pokemon_wailorddatapokemonsettingsencounter {
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
export interface V0321_pokemon_wailorddatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0321_pokemon_wailorddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0321_pokemon_wailorddata {
  pokemonSettings: V0321_pokemon_wailorddatapokemonsettings;
  templateId: string;
}
export interface V0321_pokemon_wailordEntry {
  templateId: "V0321_POKEMON_WAILORD";
  data: V0321_pokemon_wailorddata;
}
export interface V0321_pokemon_wailord_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  combatDefaultCameraAngle: (number)[];
  combatOpponentFocusCameraAngle: (number)[];
  combatPlayerFocusCameraAngle: (number)[];
  combatShoulderCameraAngle: (number)[];
  encounter: V0321_pokemon_wailorddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0321_pokemon_wailord_normaldata {
  pokemonSettings: V0321_pokemon_wailord_normaldatapokemonsettings;
  templateId: string;
}
export interface V0321_pokemon_wailord_normalEntry {
  templateId: "V0321_POKEMON_WAILORD_NORMAL";
  data: V0321_pokemon_wailord_normaldata;
}
export interface V0322_pokemon_numeldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0322_pokemon_numeldata {
  pokemonSettings: V0322_pokemon_numeldatapokemonsettings;
  templateId: string;
}
export interface V0322_pokemon_numelEntry {
  templateId: "V0322_POKEMON_NUMEL";
  data: V0322_pokemon_numeldata;
}
export interface V0322_pokemon_numel_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0322_pokemon_numel_normaldata {
  pokemonSettings: V0322_pokemon_numel_normaldatapokemonsettings;
  templateId: string;
}
export interface V0322_pokemon_numel_normalEntry {
  templateId: "V0322_POKEMON_NUMEL_NORMAL";
  data: V0322_pokemon_numel_normaldata;
}
export interface V0323_pokemon_cameruptdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0323_pokemon_cameruptdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0323_pokemon_cameruptdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0323_pokemon_cameruptdata {
  pokemonSettings: V0323_pokemon_cameruptdatapokemonsettings;
  templateId: string;
}
export interface V0323_pokemon_cameruptEntry {
  templateId: "V0323_POKEMON_CAMERUPT";
  data: V0323_pokemon_cameruptdata;
}
export interface V0323_pokemon_camerupt_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0323_pokemon_cameruptdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0323_pokemon_camerupt_normaldata {
  pokemonSettings: V0323_pokemon_camerupt_normaldatapokemonsettings;
  templateId: string;
}
export interface V0323_pokemon_camerupt_normalEntry {
  templateId: "V0323_POKEMON_CAMERUPT_NORMAL";
  data: V0323_pokemon_camerupt_normaldata;
}
export interface V0324_pokemon_torkoaldatapokemonsettingsencounter {
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
export interface V0324_pokemon_torkoaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0324_pokemon_torkoaldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0324_pokemon_torkoaldata {
  pokemonSettings: V0324_pokemon_torkoaldatapokemonsettings;
  templateId: string;
}
export interface V0324_pokemon_torkoalEntry {
  templateId: "V0324_POKEMON_TORKOAL";
  data: V0324_pokemon_torkoaldata;
}
export interface V0324_pokemon_torkoal_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0324_pokemon_torkoaldatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0324_pokemon_torkoal_normaldata {
  pokemonSettings: V0324_pokemon_torkoal_normaldatapokemonsettings;
  templateId: string;
}
export interface V0324_pokemon_torkoal_normalEntry {
  templateId: "V0324_POKEMON_TORKOAL_NORMAL";
  data: V0324_pokemon_torkoal_normaldata;
}
export interface V0327_pokemon_spindadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0327_pokemon_spindadata {
  pokemonSettings: V0327_pokemon_spindadatapokemonsettings;
  templateId: string;
}
export interface V0327_pokemon_spindaEntry {
  templateId: "V0327_POKEMON_SPINDA";
  data: V0327_pokemon_spindadata;
}
export interface V0327_pokemon_spinda_00datapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0327_pokemon_spinda_00data {
  pokemonSettings: V0327_pokemon_spinda_00datapokemonsettings;
  templateId: string;
}
export interface V0327_pokemon_spinda_00Entry {
  templateId: "V0327_POKEMON_SPINDA_00";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_01Entry {
  templateId: "V0327_POKEMON_SPINDA_01";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_02Entry {
  templateId: "V0327_POKEMON_SPINDA_02";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_03Entry {
  templateId: "V0327_POKEMON_SPINDA_03";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_04Entry {
  templateId: "V0327_POKEMON_SPINDA_04";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_05Entry {
  templateId: "V0327_POKEMON_SPINDA_05";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_06Entry {
  templateId: "V0327_POKEMON_SPINDA_06";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_07Entry {
  templateId: "V0327_POKEMON_SPINDA_07";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_08Entry {
  templateId: "V0327_POKEMON_SPINDA_08";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_09Entry {
  templateId: "V0327_POKEMON_SPINDA_09";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_10Entry {
  templateId: "V0327_POKEMON_SPINDA_10";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_11Entry {
  templateId: "V0327_POKEMON_SPINDA_11";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_12Entry {
  templateId: "V0327_POKEMON_SPINDA_12";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_13Entry {
  templateId: "V0327_POKEMON_SPINDA_13";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_14Entry {
  templateId: "V0327_POKEMON_SPINDA_14";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_15Entry {
  templateId: "V0327_POKEMON_SPINDA_15";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_16Entry {
  templateId: "V0327_POKEMON_SPINDA_16";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_17Entry {
  templateId: "V0327_POKEMON_SPINDA_17";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_18Entry {
  templateId: "V0327_POKEMON_SPINDA_18";
  data: V0327_pokemon_spinda_00data;
}
export interface V0327_pokemon_spinda_19Entry {
  templateId: "V0327_POKEMON_SPINDA_19";
  data: V0327_pokemon_spinda_00data;
}
export interface V0329_pokemon_vibravadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0329_pokemon_vibravadata {
  pokemonSettings: V0329_pokemon_vibravadatapokemonsettings;
  templateId: string;
}
export interface V0329_pokemon_vibravaEntry {
  templateId: "V0329_POKEMON_VIBRAVA";
  data: V0329_pokemon_vibravadata;
}
export interface V0329_pokemon_vibrava_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0329_pokemon_vibrava_normaldata {
  pokemonSettings: V0329_pokemon_vibrava_normaldatapokemonsettings;
  templateId: string;
}
export interface V0329_pokemon_vibrava_normalEntry {
  templateId: "V0329_POKEMON_VIBRAVA_NORMAL";
  data: V0329_pokemon_vibrava_normaldata;
}
export interface V0330_pokemon_flygondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0330_pokemon_flygondata {
  pokemonSettings: V0330_pokemon_flygondatapokemonsettings;
  templateId: string;
}
export interface V0330_pokemon_flygonEntry {
  templateId: "V0330_POKEMON_FLYGON";
  data: V0330_pokemon_flygondata;
}
export interface V0330_pokemon_flygon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0330_pokemon_flygon_normaldata {
  pokemonSettings: V0330_pokemon_flygon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0330_pokemon_flygon_normalEntry {
  templateId: "V0330_POKEMON_FLYGON_NORMAL";
  data: V0330_pokemon_flygon_normaldata;
}
export interface V0333_pokemon_swabludatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0252_pokemon_treeckodatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0333_pokemon_swabludata {
  pokemonSettings: V0333_pokemon_swabludatapokemonsettings;
  templateId: string;
}
export interface V0333_pokemon_swabluEntry {
  templateId: "V0333_POKEMON_SWABLU";
  data: V0333_pokemon_swabludata;
}
export interface V0333_pokemon_swablu_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0333_pokemon_swablu_normaldata {
  pokemonSettings: V0333_pokemon_swablu_normaldatapokemonsettings;
  templateId: string;
}
export interface V0333_pokemon_swablu_normalEntry {
  templateId: "V0333_POKEMON_SWABLU_NORMAL";
  data: V0333_pokemon_swablu_normaldata;
}
export interface V0334_pokemon_altariadatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0334_pokemon_altariadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0334_pokemon_altariadatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0334_pokemon_altariadata {
  pokemonSettings: V0334_pokemon_altariadatapokemonsettings;
  templateId: string;
}
export interface V0334_pokemon_altariaEntry {
  templateId: "V0334_POKEMON_ALTARIA";
  data: V0334_pokemon_altariadata;
}
export interface V0334_pokemon_altaria_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0334_pokemon_altariadatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0334_pokemon_altaria_normaldata {
  pokemonSettings: V0334_pokemon_altaria_normaldatapokemonsettings;
  templateId: string;
}
export interface V0334_pokemon_altaria_normalEntry {
  templateId: "V0334_POKEMON_ALTARIA_NORMAL";
  data: V0334_pokemon_altaria_normaldata;
}
export interface V0336_pokemon_seviperdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0336_pokemon_seviperdata {
  pokemonSettings: V0336_pokemon_seviperdatapokemonsettings;
  templateId: string;
}
export interface V0336_pokemon_seviperEntry {
  templateId: "V0336_POKEMON_SEVIPER";
  data: V0336_pokemon_seviperdata;
}
export interface V0336_pokemon_seviper_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0336_pokemon_seviper_normaldata {
  pokemonSettings: V0336_pokemon_seviper_normaldatapokemonsettings;
  templateId: string;
}
export interface V0336_pokemon_seviper_normalEntry {
  templateId: "V0336_POKEMON_SEVIPER_NORMAL";
  data: V0336_pokemon_seviper_normaldata;
}
export interface V0337_pokemon_lunatonedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0337_pokemon_lunatonedata {
  pokemonSettings: V0337_pokemon_lunatonedatapokemonsettings;
  templateId: string;
}
export interface V0337_pokemon_lunatoneEntry {
  templateId: "V0337_POKEMON_LUNATONE";
  data: V0337_pokemon_lunatonedata;
}
export interface V0337_pokemon_lunatone_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0337_pokemon_lunatone_normaldata {
  pokemonSettings: V0337_pokemon_lunatone_normaldatapokemonsettings;
  templateId: string;
}
export interface V0337_pokemon_lunatone_normalEntry {
  templateId: "V0337_POKEMON_LUNATONE_NORMAL";
  data: V0337_pokemon_lunatone_normaldata;
}
export interface V0338_pokemon_solrockdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0338_pokemon_solrockdata {
  pokemonSettings: V0338_pokemon_solrockdatapokemonsettings;
  templateId: string;
}
export interface V0338_pokemon_solrockEntry {
  templateId: "V0338_POKEMON_SOLROCK";
  data: V0338_pokemon_solrockdata;
}
export interface V0338_pokemon_solrock_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0338_pokemon_solrock_normaldata {
  pokemonSettings: V0338_pokemon_solrock_normaldatapokemonsettings;
  templateId: string;
}
export interface V0338_pokemon_solrock_normalEntry {
  templateId: "V0338_POKEMON_SOLROCK_NORMAL";
  data: V0338_pokemon_solrock_normaldata;
}
export interface V0344_pokemon_claydoldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0344_pokemon_claydoldata {
  pokemonSettings: V0344_pokemon_claydoldatapokemonsettings;
  templateId: string;
}
export interface V0344_pokemon_claydolEntry {
  templateId: "V0344_POKEMON_CLAYDOL";
  data: V0344_pokemon_claydoldata;
}
export interface V0344_pokemon_claydol_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0344_pokemon_claydol_normaldata {
  pokemonSettings: V0344_pokemon_claydol_normaldatapokemonsettings;
  templateId: string;
}
export interface V0344_pokemon_claydol_normalEntry {
  templateId: "V0344_POKEMON_CLAYDOL_NORMAL";
  data: V0344_pokemon_claydol_normaldata;
}
export interface V0345_pokemon_lileepdatapokemonsettingsencounter {
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
export interface V0345_pokemon_lileepdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0345_pokemon_lileepdatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0345_pokemon_lileepdata {
  pokemonSettings: V0345_pokemon_lileepdatapokemonsettings;
  templateId: string;
}
export interface V0345_pokemon_lileepEntry {
  templateId: "V0345_POKEMON_LILEEP";
  data: V0345_pokemon_lileepdata;
}
export interface V0345_pokemon_lileep_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0345_pokemon_lileepdatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0345_pokemon_lileep_normaldata {
  pokemonSettings: V0345_pokemon_lileep_normaldatapokemonsettings;
  templateId: string;
}
export interface V0345_pokemon_lileep_normalEntry {
  templateId: "V0345_POKEMON_LILEEP_NORMAL";
  data: V0345_pokemon_lileep_normaldata;
}
export interface V0346_pokemon_cradilydatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0346_pokemon_cradilydata {
  pokemonSettings: V0346_pokemon_cradilydatapokemonsettings;
  templateId: string;
}
export interface V0346_pokemon_cradilyEntry {
  templateId: "V0346_POKEMON_CRADILY";
  data: V0346_pokemon_cradilydata;
}
export interface V0346_pokemon_cradily_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0289_pokemon_slakingdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0346_pokemon_cradily_normaldata {
  pokemonSettings: V0346_pokemon_cradily_normaldatapokemonsettings;
  templateId: string;
}
export interface V0346_pokemon_cradily_normalEntry {
  templateId: "V0346_POKEMON_CRADILY_NORMAL";
  data: V0346_pokemon_cradily_normaldata;
}
export interface V0349_pokemon_feebasdatapokemonsettingsevolutionbranchitemquestdisplayitem {
  questRequirementTemplateId: string;
}
export interface V0349_pokemon_feebasdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0349_pokemon_feebasdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0349_pokemon_feebasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0349_pokemon_feebasdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0349_pokemon_feebasdata {
  pokemonSettings: V0349_pokemon_feebasdatapokemonsettings;
  templateId: string;
}
export interface V0349_pokemon_feebasEntry {
  templateId: "V0349_POKEMON_FEEBAS";
  data: V0349_pokemon_feebasdata;
}
export interface V0349_pokemon_feebas_normaldatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  form: string;
  kmBuddyDistanceRequirement: number;
  questDisplay: (V0349_pokemon_feebasdatapokemonsettingsevolutionbranchitemquestdisplayitem)[];
}
export interface V0349_pokemon_feebas_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0349_pokemon_feebas_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0349_pokemon_feebas_normaldata {
  pokemonSettings: V0349_pokemon_feebas_normaldatapokemonsettings;
  templateId: string;
}
export interface V0349_pokemon_feebas_normalEntry {
  templateId: "V0349_POKEMON_FEEBAS_NORMAL";
  data: V0349_pokemon_feebas_normaldata;
}
export interface V0353_pokemon_shuppetdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0353_pokemon_shuppetdata {
  pokemonSettings: V0353_pokemon_shuppetdatapokemonsettings;
  templateId: string;
}
export interface V0353_pokemon_shuppetEntry {
  templateId: "V0353_POKEMON_SHUPPET";
  data: V0353_pokemon_shuppetdata;
}
export interface V0353_pokemon_shuppet_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0353_pokemon_shuppet_normaldata {
  pokemonSettings: V0353_pokemon_shuppet_normaldatapokemonsettings;
  templateId: string;
}
export interface V0353_pokemon_shuppet_normalEntry {
  templateId: "V0353_POKEMON_SHUPPET_NORMAL";
  data: V0353_pokemon_shuppet_normaldata;
}
export interface V0354_pokemon_banettedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0354_pokemon_banettedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0354_pokemon_banettedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0354_pokemon_banettedata {
  pokemonSettings: V0354_pokemon_banettedatapokemonsettings;
  templateId: string;
}
export interface V0354_pokemon_banetteEntry {
  templateId: "V0354_POKEMON_BANETTE";
  data: V0354_pokemon_banettedata;
}
export interface V0354_pokemon_banette_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0354_pokemon_banettedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0354_pokemon_banette_normaldata {
  pokemonSettings: V0354_pokemon_banette_normaldatapokemonsettings;
  templateId: string;
}
export interface V0354_pokemon_banette_normalEntry {
  templateId: "V0354_POKEMON_BANETTE_NORMAL";
  data: V0354_pokemon_banette_normaldata;
}
export interface V0355_pokemon_duskulldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0355_pokemon_duskulldata {
  pokemonSettings: V0355_pokemon_duskulldatapokemonsettings;
  templateId: string;
}
export interface V0355_pokemon_duskullEntry {
  templateId: "V0355_POKEMON_DUSKULL";
  data: V0355_pokemon_duskulldata;
}
export interface V0355_pokemon_duskull_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0355_pokemon_duskull_normaldata {
  pokemonSettings: V0355_pokemon_duskull_normaldatapokemonsettings;
  templateId: string;
}
export interface V0355_pokemon_duskull_normalEntry {
  templateId: "V0355_POKEMON_DUSKULL_NORMAL";
  data: V0355_pokemon_duskull_normaldata;
}
export interface V0356_pokemon_dusclopsdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement: string;
  form: string;
}
export interface V0356_pokemon_dusclopsdatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0356_pokemon_dusclopsdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0356_pokemon_dusclopsdata {
  pokemonSettings: V0356_pokemon_dusclopsdatapokemonsettings;
  templateId: string;
}
export interface V0356_pokemon_dusclopsEntry {
  templateId: "V0356_POKEMON_DUSCLOPS";
  data: V0356_pokemon_dusclopsdata;
}
export interface V0356_pokemon_dusclops_normaldatapokemonsettings {
  allowNoevolveEvolution: (string)[];
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0356_pokemon_dusclopsdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0356_pokemon_dusclops_normaldata {
  pokemonSettings: V0356_pokemon_dusclops_normaldatapokemonsettings;
  templateId: string;
}
export interface V0356_pokemon_dusclops_normalEntry {
  templateId: "V0356_POKEMON_DUSCLOPS_NORMAL";
  data: V0356_pokemon_dusclops_normaldata;
}
export interface V0357_pokemon_tropiusdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0357_pokemon_tropiusdata {
  pokemonSettings: V0357_pokemon_tropiusdatapokemonsettings;
  templateId: string;
}
export interface V0357_pokemon_tropiusEntry {
  templateId: "V0357_POKEMON_TROPIUS";
  data: V0357_pokemon_tropiusdata;
}
export interface V0357_pokemon_tropius_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0357_pokemon_tropius_normaldata {
  pokemonSettings: V0357_pokemon_tropius_normaldatapokemonsettings;
  templateId: string;
}
export interface V0357_pokemon_tropius_normalEntry {
  templateId: "V0357_POKEMON_TROPIUS_NORMAL";
  data: V0357_pokemon_tropius_normaldata;
}
export interface V0358_pokemon_chimechodatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0285_pokemon_shroomishdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0358_pokemon_chimechodata {
  pokemonSettings: V0358_pokemon_chimechodatapokemonsettings;
  templateId: string;
}
export interface V0358_pokemon_chimechoEntry {
  templateId: "V0358_POKEMON_CHIMECHO";
  data: V0358_pokemon_chimechodata;
}
export interface V0358_pokemon_chimecho_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0285_pokemon_shroomishdatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0358_pokemon_chimecho_normaldata {
  pokemonSettings: V0358_pokemon_chimecho_normaldatapokemonsettings;
  templateId: string;
}
export interface V0358_pokemon_chimecho_normalEntry {
  templateId: "V0358_POKEMON_CHIMECHO_NORMAL";
  data: V0358_pokemon_chimecho_normaldata;
}
export interface V0359_pokemon_absoldatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0359_pokemon_absoldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0359_pokemon_absoldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0359_pokemon_absoldata {
  pokemonSettings: V0359_pokemon_absoldatapokemonsettings;
  templateId: string;
}
export interface V0359_pokemon_absolEntry {
  templateId: "V0359_POKEMON_ABSOL";
  data: V0359_pokemon_absoldata;
}
export interface V0359_pokemon_absol_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0359_pokemon_absoldatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0359_pokemon_absol_normaldata {
  pokemonSettings: V0359_pokemon_absol_normaldatapokemonsettings;
  templateId: string;
}
export interface V0359_pokemon_absol_normalEntry {
  templateId: "V0359_POKEMON_ABSOL_NORMAL";
  data: V0359_pokemon_absol_normaldata;
}
export interface V0361_pokemon_snoruntdatapokemonsettingsevolutionbranchitem {
  candyCost: number;
  candyCostPurified: number;
  evolution: string;
  evolutionItemRequirement?: string;
  genderRequirement?: string;
}
export interface V0361_pokemon_snoruntdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0361_pokemon_snoruntdatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0361_pokemon_snoruntdata {
  pokemonSettings: V0361_pokemon_snoruntdatapokemonsettings;
  templateId: string;
}
export interface V0361_pokemon_snoruntEntry {
  templateId: "V0361_POKEMON_SNORUNT";
  data: V0361_pokemon_snoruntdata;
}
export interface V0361_pokemon_snorunt_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0281_pokemon_kirliadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0361_pokemon_snorunt_normaldata {
  pokemonSettings: V0361_pokemon_snorunt_normaldatapokemonsettings;
  templateId: string;
}
export interface V0361_pokemon_snorunt_normalEntry {
  templateId: "V0361_POKEMON_SNORUNT_NORMAL";
  data: V0361_pokemon_snorunt_normaldata;
}
export interface V0362_pokemon_glaliedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyPortraitOffset: (number)[];
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0362_pokemon_glaliedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  raidBossDistanceOffset: number;
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0362_pokemon_glaliedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0362_pokemon_glaliedata {
  pokemonSettings: V0362_pokemon_glaliedatapokemonsettings;
  templateId: string;
}
export interface V0362_pokemon_glalieEntry {
  templateId: "V0362_POKEMON_GLALIE";
  data: V0362_pokemon_glaliedata;
}
export interface V0362_pokemon_glalie_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  raidBossDistanceOffset: number;
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0362_pokemon_glaliedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0362_pokemon_glalie_normaldata {
  pokemonSettings: V0362_pokemon_glalie_normaldatapokemonsettings;
  templateId: string;
}
export interface V0362_pokemon_glalie_normalEntry {
  templateId: "V0362_POKEMON_GLALIE_NORMAL";
  data: V0362_pokemon_glalie_normaldata;
}
export interface V0366_pokemon_clamperldatapokemonsettingsencounter {
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
}
export interface V0366_pokemon_clamperldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0366_pokemon_clamperldatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotaddatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0366_pokemon_clamperldata {
  pokemonSettings: V0366_pokemon_clamperldatapokemonsettings;
  templateId: string;
}
export interface V0366_pokemon_clamperlEntry {
  templateId: "V0366_POKEMON_CLAMPERL";
  data: V0366_pokemon_clamperldata;
}
export interface V0366_pokemon_clamperl_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyPortraitOffset: (number)[];
  buddyPortraitRotation: (number)[];
  buddyScale: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0366_pokemon_clamperldatapokemonsettingsencounter;
  evolutionBranch: (V0270_pokemon_lotad_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0366_pokemon_clamperl_normaldata {
  pokemonSettings: V0366_pokemon_clamperl_normaldatapokemonsettings;
  templateId: string;
}
export interface V0366_pokemon_clamperl_normalEntry {
  templateId: "V0366_POKEMON_CLAMPERL_NORMAL";
  data: V0366_pokemon_clamperl_normaldata;
}
export interface V0369_pokemon_relicanthdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0369_pokemon_relicanthdata {
  pokemonSettings: V0369_pokemon_relicanthdatapokemonsettings;
  templateId: string;
}
export interface V0369_pokemon_relicanthEntry {
  templateId: "V0369_POKEMON_RELICANTH";
  data: V0369_pokemon_relicanthdata;
}
export interface V0369_pokemon_relicanth_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0270_pokemon_lotaddatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0369_pokemon_relicanth_normaldata {
  pokemonSettings: V0369_pokemon_relicanth_normaldatapokemonsettings;
  templateId: string;
}
export interface V0369_pokemon_relicanth_normalEntry {
  templateId: "V0369_POKEMON_RELICANTH_NORMAL";
  data: V0369_pokemon_relicanth_normaldata;
}
export interface V0372_pokemon_shelgondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0372_pokemon_shelgondata {
  pokemonSettings: V0372_pokemon_shelgondatapokemonsettings;
  templateId: string;
}
export interface V0372_pokemon_shelgonEntry {
  templateId: "V0372_POKEMON_SHELGON";
  data: V0372_pokemon_shelgondata;
}
export interface V0372_pokemon_shelgon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0372_pokemon_shelgon_normaldata {
  pokemonSettings: V0372_pokemon_shelgon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0372_pokemon_shelgon_normalEntry {
  templateId: "V0372_POKEMON_SHELGON_NORMAL";
  data: V0372_pokemon_shelgon_normaldata;
}
export interface V0373_pokemon_salamencedatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0373_pokemon_salamencedatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0373_pokemon_salamencedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0373_pokemon_salamencedata {
  pokemonSettings: V0373_pokemon_salamencedatapokemonsettings;
  templateId: string;
}
export interface V0373_pokemon_salamenceEntry {
  templateId: "V0373_POKEMON_SALAMENCE";
  data: V0373_pokemon_salamencedata;
}
export interface V0373_pokemon_salamence_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0373_pokemon_salamencedatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0373_pokemon_salamence_normaldata {
  pokemonSettings: V0373_pokemon_salamence_normaldatapokemonsettings;
  templateId: string;
}
export interface V0373_pokemon_salamence_normalEntry {
  templateId: "V0373_POKEMON_SALAMENCE_NORMAL";
  data: V0373_pokemon_salamence_normaldata;
}
export interface V0374_pokemon_beldumdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0374_pokemon_beldumdata {
  pokemonSettings: V0374_pokemon_beldumdatapokemonsettings;
  templateId: string;
}
export interface V0374_pokemon_beldumEntry {
  templateId: "V0374_POKEMON_BELDUM";
  data: V0374_pokemon_beldumdata;
}
export interface V0374_pokemon_beldum_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0252_pokemon_treeckodatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0374_pokemon_beldum_normaldata {
  pokemonSettings: V0374_pokemon_beldum_normaldatapokemonsettings;
  templateId: string;
}
export interface V0374_pokemon_beldum_normalEntry {
  templateId: "V0374_POKEMON_BELDUM_NORMAL";
  data: V0374_pokemon_beldum_normaldata;
}
export interface V0375_pokemon_metangdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0375_pokemon_metangdata {
  pokemonSettings: V0375_pokemon_metangdatapokemonsettings;
  templateId: string;
}
export interface V0375_pokemon_metangEntry {
  templateId: "V0375_POKEMON_METANG";
  data: V0375_pokemon_metangdata;
}
export interface V0375_pokemon_metang_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0253_pokemon_grovyle_normaldatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0375_pokemon_metang_normaldata {
  pokemonSettings: V0375_pokemon_metang_normaldatapokemonsettings;
  templateId: string;
}
export interface V0375_pokemon_metang_normalEntry {
  templateId: "V0375_POKEMON_METANG_NORMAL";
  data: V0375_pokemon_metang_normaldata;
}
export interface V0376_pokemon_metagrossdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0303_pokemon_mawiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0376_pokemon_metagrossdata {
  pokemonSettings: V0376_pokemon_metagrossdatapokemonsettings;
  templateId: string;
}
export interface V0376_pokemon_metagrossEntry {
  templateId: "V0376_POKEMON_METAGROSS";
  data: V0376_pokemon_metagrossdata;
}
export interface V0376_pokemon_metagross_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  eliteQuickMove: (string)[];
  encounter: V0253_pokemon_grovyledatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isDeployable: boolean;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  parentPokemonId: string;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonId: string;
  quickMoves: (string)[];
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0303_pokemon_mawiledatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0376_pokemon_metagross_normaldata {
  pokemonSettings: V0376_pokemon_metagross_normaldatapokemonsettings;
  templateId: string;
}
export interface V0376_pokemon_metagross_normalEntry {
  templateId: "V0376_POKEMON_METAGROSS_NORMAL";
  data: V0376_pokemon_metagross_normaldata;
}
export interface V0380_pokemon_latiasdatapokemonsettingsencounter {
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
export interface V0380_pokemon_latiasdatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0380_pokemon_latiasdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0380_pokemon_latiasdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0380_pokemon_latiasdata {
  pokemonSettings: V0380_pokemon_latiasdatapokemonsettings;
  templateId: string;
}
export interface V0380_pokemon_latiasEntry {
  templateId: "V0380_POKEMON_LATIAS";
  data: V0380_pokemon_latiasdata;
}
export interface V0380_pokemon_latias_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0380_pokemon_latiasdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0380_pokemon_latias_normaldata {
  pokemonSettings: V0380_pokemon_latias_normaldatapokemonsettings;
  templateId: string;
}
export interface V0380_pokemon_latias_normalEntry {
  templateId: "V0380_POKEMON_LATIAS_NORMAL";
  data: V0380_pokemon_latias_normaldata;
}
export interface V0380_pokemon_latias_sdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0380_pokemon_latiasdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0380_pokemon_latias_sdata {
  pokemonSettings: V0380_pokemon_latias_sdatapokemonsettings;
  templateId: string;
}
export interface V0380_pokemon_latias_sEntry {
  templateId: "V0380_POKEMON_LATIAS_S";
  data: V0380_pokemon_latias_sdata;
}
export interface V0381_pokemon_latiosdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0334_pokemon_altariadatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0381_pokemon_latiosdata {
  pokemonSettings: V0381_pokemon_latiosdatapokemonsettings;
  templateId: string;
}
export interface V0381_pokemon_latiosEntry {
  templateId: "V0381_POKEMON_LATIOS";
  data: V0381_pokemon_latiosdata;
}
export interface V0381_pokemon_latios_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0334_pokemon_altariadatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0381_pokemon_latios_normaldata {
  pokemonSettings: V0381_pokemon_latios_normaldatapokemonsettings;
  templateId: string;
}
export interface V0381_pokemon_latios_normalEntry {
  templateId: "V0381_POKEMON_LATIOS_NORMAL";
  data: V0381_pokemon_latios_normaldata;
}
export interface V0381_pokemon_latios_sdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  disableTransferToPokemonHome: boolean;
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0334_pokemon_altariadatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  weightStdDev: number;
}
export interface V0381_pokemon_latios_sdata {
  pokemonSettings: V0381_pokemon_latios_sdatapokemonsettings;
  templateId: string;
}
export interface V0381_pokemon_latios_sEntry {
  templateId: "V0381_POKEMON_LATIOS_S";
  data: V0381_pokemon_latios_sdata;
}
export interface V0382_pokemon_kyogredatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0319_pokemon_sharpedodatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
}
export interface V0382_pokemon_kyogredatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0382_pokemon_kyogredatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0382_pokemon_kyogredata {
  pokemonSettings: V0382_pokemon_kyogredatapokemonsettings;
  templateId: string;
}
export interface V0382_pokemon_kyogreEntry {
  templateId: "V0382_POKEMON_KYOGRE";
  data: V0382_pokemon_kyogredata;
}
export interface V0382_pokemon_kyogre_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0380_pokemon_latiasdatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0382_pokemon_kyogredatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0382_pokemon_kyogre_normaldata {
  pokemonSettings: V0382_pokemon_kyogre_normaldatapokemonsettings;
  templateId: string;
}
export interface V0382_pokemon_kyogre_normalEntry {
  templateId: "V0382_POKEMON_KYOGRE_NORMAL";
  data: V0382_pokemon_kyogre_normaldata;
}
export interface V0383_pokemon_groudondatapokemonsettingsencounter {
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
export interface V0383_pokemon_groudondatapokemonsettingstempevooverridesitem {
  averageHeightM: number;
  averageWeightKg: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  camera: V0254_pokemon_sceptiledatapokemonsettingstempevooverridesitemcamera;
  modelHeight: number;
  modelScaleV2: number;
  raidBossDistanceOffset: number;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoId: string;
  typeOverride1: string;
  typeOverride2: string;
}
export interface V0383_pokemon_groudondatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0383_pokemon_groudondatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0383_pokemon_groudondatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0383_pokemon_groudondata {
  pokemonSettings: V0383_pokemon_groudondatapokemonsettings;
  templateId: string;
}
export interface V0383_pokemon_groudonEntry {
  templateId: "V0383_POKEMON_GROUDON";
  data: V0383_pokemon_groudondata;
}
export interface V0383_pokemon_groudon_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0383_pokemon_groudondatapokemonsettingsencounter;
  evolutionBranch: (V0254_pokemon_sceptiledatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  shadow: V0252_pokemon_treeckodatapokemonsettingsshadow;
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0383_pokemon_groudondatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0383_pokemon_groudon_normaldata {
  pokemonSettings: V0383_pokemon_groudon_normaldatapokemonsettings;
  templateId: string;
}
export interface V0383_pokemon_groudon_normalEntry {
  templateId: "V0383_POKEMON_GROUDON_NORMAL";
  data: V0383_pokemon_groudon_normaldata;
}
export interface V0384_pokemon_rayquazadatapokemonsettingsencounter {
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
export interface V0384_pokemon_rayquazadatapokemonsettingsevolutionbranchitem {
  evolutionMoveRequirement: string;
  temporaryEvolution: string;
  temporaryEvolutionEnergyCost: number;
  temporaryEvolutionEnergyCostSubsequent: number;
}
export interface V0384_pokemon_rayquazadatapokemonsettingsexclusivekeyitem {
  count: number;
  item: string;
}
export interface V0384_pokemon_rayquazadatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0384_pokemon_rayquazadatapokemonsettingsencounter;
  evolutionBranch: (V0384_pokemon_rayquazadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  exclusiveKeyItem: V0384_pokemon_rayquazadatapokemonsettingsexclusivekeyitem;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  nonTmCinematicMoves: (string)[];
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0323_pokemon_cameruptdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0384_pokemon_rayquazadata {
  pokemonSettings: V0384_pokemon_rayquazadatapokemonsettings;
  templateId: string;
}
export interface V0384_pokemon_rayquazaEntry {
  templateId: "V0384_POKEMON_RAYQUAZA";
  data: V0384_pokemon_rayquazadata;
}
export interface V0384_pokemon_rayquaza_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  buddyWalkedMegaEnergyAward: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  eliteCinematicMove: (string)[];
  encounter: V0384_pokemon_rayquazadatapokemonsettingsencounter;
  evolutionBranch: (V0384_pokemon_rayquazadatapokemonsettingsevolutionbranchitem)[];
  evolutionPips: number;
  exclusiveKeyItem: V0384_pokemon_rayquazadatapokemonsettingsexclusivekeyitem;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  isTradable: boolean;
  isTransferable: boolean;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  nonTmCinematicMoves: (string)[];
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  tempEvoOverrides: (V0323_pokemon_cameruptdatapokemonsettingstempevooverridesitem)[];
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0384_pokemon_rayquaza_normaldata {
  pokemonSettings: V0384_pokemon_rayquaza_normaldatapokemonsettings;
  templateId: string;
}
export interface V0384_pokemon_rayquaza_normalEntry {
  templateId: "V0384_POKEMON_RAYQUAZA_NORMAL";
  data: V0384_pokemon_rayquaza_normaldata;
}
export interface V0385_pokemon_jirachidatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0384_pokemon_rayquazadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0385_pokemon_jirachidata {
  pokemonSettings: V0385_pokemon_jirachidatapokemonsettings;
  templateId: string;
}
export interface V0385_pokemon_jirachiEntry {
  templateId: "V0385_POKEMON_JIRACHI";
  data: V0385_pokemon_jirachidata;
}
export interface V0385_pokemon_jirachi_normaldatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  camera: V0277_pokemon_swellowdatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0384_pokemon_rayquazadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  form: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
  kmBuddyDistance: number;
  modelHeight: number;
  modelScale: number;
  modelScaleV2: number;
  pokedexHeightM: number;
  pokedexWeightKg: number;
  pokemonClass: string;
  pokemonId: string;
  quickMoves: (string)[];
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  type2: string;
  useIrisFlyingPlacement: boolean;
  weightStdDev: number;
}
export interface V0385_pokemon_jirachi_normaldata {
  pokemonSettings: V0385_pokemon_jirachi_normaldatapokemonsettings;
  templateId: string;
}
export interface V0385_pokemon_jirachi_normalEntry {
  templateId: "V0385_POKEMON_JIRACHI_NORMAL";
  data: V0385_pokemon_jirachi_normaldata;
}
export interface V0386_pokemon_deoxysdatapokemonsettings {
  animationTime: (number)[];
  breadTierGroup: string;
  buddyGroupNumber: number;
  buddyOffsetFemale: (number)[];
  buddyOffsetMale: (number)[];
  buddyScale: number;
  buddySize: string;
  camera: V0252_pokemon_treeckodatapokemonsettingscamera;
  cinematicMoves: (string)[];
  encounter: V0384_pokemon_rayquazadatapokemonsettingsencounter;
  evolutionPips: number;
  familyId: string;
  heightStdDev: number;
  ibfc: V0252_pokemon_treeckodatapokemonsettingsibfc;
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
  stats: V0252_pokemon_treeckodatapokemonsettingsstats;
  thirdMove: V0252_pokemon_treeckodatapokemonsettingsthirdmove;
  "type": string;
  weightStdDev: number;
}
export interface V0386_pokemon_deoxysdata {
  pokemonSettings: V0386_pokemon_deoxysdatapokemonsettings;
  templateId: string;
}
export interface V0386_pokemon_deoxysEntry {
  templateId: "V0386_POKEMON_DEOXYS";
  data: V0386_pokemon_deoxysdata;
}

export type PokemonSettingsTreeckoNormal = PokemonSettingsShared438<"V0252_POKEMON_TREECKO_NORMAL", "TREECKO_NORMAL", "TREECKO">;
export type PokemonSettingsTorchicNormal = PokemonSettingsShared438<"V0255_POKEMON_TORCHIC_NORMAL", "TORCHIC_NORMAL", "TORCHIC">;
export type PokemonSettingsBagonNormal = PokemonSettingsShared438<"V0371_POKEMON_BAGON_NORMAL", "BAGON_NORMAL", "BAGON">;

export type PokemonSettingsTorchic = PokemonSettingsShared443<"V0255_POKEMON_TORCHIC", "TORCHIC">;
export type PokemonSettingsBagon = PokemonSettingsShared443<"V0371_POKEMON_BAGON", "BAGON">;

export type PokemonSettingsCombusken = PokemonSettingsShared444<"V0256_POKEMON_COMBUSKEN", "COMBUSKEN">;
export type PokemonSettingsLairon = PokemonSettingsShared444<"V0305_POKEMON_LAIRON", "LAIRON">;

export type PokemonSettingsCombuskenNormal = PokemonSettingsShared445<"V0256_POKEMON_COMBUSKEN_NORMAL", "COMBUSKEN_NORMAL", "COMBUSKEN">;
export type PokemonSettingsLaironNormal = PokemonSettingsShared445<"V0305_POKEMON_LAIRON_NORMAL", "LAIRON_NORMAL", "LAIRON">;

export type PokemonSettingsPoochyena = PokemonSettingsShared454<"V0261_POKEMON_POOCHYENA", "POOCHYENA">;
export type PokemonSettingsTrapinch = PokemonSettingsShared454<"V0328_POKEMON_TRAPINCH", "TRAPINCH">;

export type PokemonSettingsPoochyenaNormal = PokemonSettingsShared455<"V0261_POKEMON_POOCHYENA_NORMAL", "POOCHYENA_NORMAL", "POOCHYENA">;
export type PokemonSettingsSpoinkNormal = PokemonSettingsShared455<"V0325_POKEMON_SPOINK_NORMAL", "SPOINK_NORMAL", "SPOINK">;
export type PokemonSettingsTrapinchNormal = PokemonSettingsShared455<"V0328_POKEMON_TRAPINCH_NORMAL", "TRAPINCH_NORMAL", "TRAPINCH">;
export type PokemonSettingsCorphishNormal = PokemonSettingsShared455<"V0341_POKEMON_CORPHISH_NORMAL", "CORPHISH_NORMAL", "CORPHISH">;

export type PokemonSettingsMightyena = PokemonSettingsShared43<"V0262_POKEMON_MIGHTYENA", "MIGHTYENA">;
export type PokemonSettingsLinoone = PokemonSettingsShared43<"V0264_POKEMON_LINOONE", "LINOONE">;

export type PokemonSettingsMightyenaNormal = PokemonSettingsShared45<"V0262_POKEMON_MIGHTYENA_NORMAL", "MIGHTYENA_NORMAL", "MIGHTYENA">;
export type PokemonSettingsLinooneNormal = PokemonSettingsShared45<"V0264_POKEMON_LINOONE_NORMAL", "LINOONE_NORMAL", "LINOONE">;

export type PokemonSettingsWurmple = PokemonSettingsShared460<"V0265_POKEMON_WURMPLE", "WURMPLE">;
export type PokemonSettingsWynaut = PokemonSettingsShared460<"V0360_POKEMON_WYNAUT", "WYNAUT">;

export type PokemonSettingsWurmpleNormal = PokemonSettingsShared461<"V0265_POKEMON_WURMPLE_NORMAL", "WURMPLE_NORMAL", "WURMPLE">;
export type PokemonSettingsWynautNormal = PokemonSettingsShared461<"V0360_POKEMON_WYNAUT_NORMAL", "WYNAUT_NORMAL", "WYNAUT">;

export type PokemonSettingsSilcoon = PokemonSettingsShared462<"V0266_POKEMON_SILCOON", "SILCOON">;
export type PokemonSettingsCascoon = PokemonSettingsShared462<"V0268_POKEMON_CASCOON", "CASCOON">;

export type PokemonSettingsSilcoonNormal = PokemonSettingsShared463<"V0266_POKEMON_SILCOON_NORMAL", "SILCOON_NORMAL", "SILCOON">;
export type PokemonSettingsCascoonNormal = PokemonSettingsShared463<"V0268_POKEMON_CASCOON_NORMAL", "CASCOON_NORMAL", "CASCOON">;

export type PokemonSettingsBeautifly = PokemonSettingsShared464<"V0267_POKEMON_BEAUTIFLY", "BEAUTIFLY">;
export type PokemonSettingsDustox = PokemonSettingsShared464<"V0269_POKEMON_DUSTOX", "DUSTOX">;
export type PokemonSettingsNinjask = PokemonSettingsShared464<"V0291_POKEMON_NINJASK", "NINJASK">;

export type PokemonSettingsBeautiflyNormal = PokemonSettingsShared465<"V0267_POKEMON_BEAUTIFLY_NORMAL", "BEAUTIFLY_NORMAL", "BEAUTIFLY">;
export type PokemonSettingsDustoxNormal = PokemonSettingsShared465<"V0269_POKEMON_DUSTOX_NORMAL", "DUSTOX_NORMAL", "DUSTOX">;
export type PokemonSettingsNinjaskNormal = PokemonSettingsShared465<"V0291_POKEMON_NINJASK_NORMAL", "NINJASK_NORMAL", "NINJASK">;

export type PokemonSettingsNuzleaf = PokemonSettingsShared474<"V0274_POKEMON_NUZLEAF", "NUZLEAF">;
export type PokemonSettingsSealeo = PokemonSettingsShared474<"V0364_POKEMON_SEALEO", "SEALEO">;

export type PokemonSettingsNuzleafNormal = PokemonSettingsShared475<"V0274_POKEMON_NUZLEAF_NORMAL", "NUZLEAF_NORMAL", "NUZLEAF">;
export type PokemonSettingsSealeoNormal = PokemonSettingsShared475<"V0364_POKEMON_SEALEO_NORMAL", "SEALEO_NORMAL", "SEALEO">;

export type PokemonSettingsShiftry = PokemonSettingsShared80<"V0275_POKEMON_SHIFTRY", "SHIFTRY">;

export type PokemonSettingsShiftryNormal = PokemonSettingsShared81<"V0275_POKEMON_SHIFTRY_NORMAL", "SHIFTRY_NORMAL", "SHIFTRY">;

export type PokemonSettingsSurskit = PokemonSettingsShared490<"V0283_POKEMON_SURSKIT", "SURSKIT">;
export type PokemonSettingsNincada = PokemonSettingsShared490<"V0290_POKEMON_NINCADA", "NINCADA">;
export type PokemonSettingsAzurill = PokemonSettingsShared490<"V0298_POKEMON_AZURILL", "AZURILL">;

export type PokemonSettingsSurskitNormal = PokemonSettingsShared491<"V0283_POKEMON_SURSKIT_NORMAL", "SURSKIT_NORMAL", "SURSKIT">;
export type PokemonSettingsNincadaNormal = PokemonSettingsShared491<"V0290_POKEMON_NINCADA_NORMAL", "NINCADA_NORMAL", "NINCADA">;
export type PokemonSettingsAzurillNormal = PokemonSettingsShared491<"V0298_POKEMON_AZURILL_NORMAL", "AZURILL_NORMAL", "AZURILL">;

export type PokemonSettingsVigoroth = PokemonSettingsShared500<"V0288_POKEMON_VIGOROTH", "VIGOROTH">;
export type PokemonSettingsLoudred = PokemonSettingsShared500<"V0294_POKEMON_LOUDRED", "LOUDRED">;

export type PokemonSettingsExploud = PokemonSettingsShared52<"V0295_POKEMON_EXPLOUD", "EXPLOUD">;
export type PokemonSettingsHariyama = PokemonSettingsShared52<"V0297_POKEMON_HARIYAMA", "HARIYAMA">;
export type PokemonSettingsGrumpig = PokemonSettingsShared52<"V0326_POKEMON_GRUMPIG", "GRUMPIG">;
export type PokemonSettingsMilotic = PokemonSettingsShared52<"V0350_POKEMON_MILOTIC", "MILOTIC">;

export type PokemonSettingsExploudNormal = PokemonSettingsShared53<"V0295_POKEMON_EXPLOUD_NORMAL", "EXPLOUD_NORMAL", "EXPLOUD">;
export type PokemonSettingsHariyamaNormal = PokemonSettingsShared53<"V0297_POKEMON_HARIYAMA_NORMAL", "HARIYAMA_NORMAL", "HARIYAMA">;
export type PokemonSettingsGrumpigNormal = PokemonSettingsShared53<"V0326_POKEMON_GRUMPIG_NORMAL", "GRUMPIG_NORMAL", "GRUMPIG">;
export type PokemonSettingsMiloticNormal = PokemonSettingsShared53<"V0350_POKEMON_MILOTIC_NORMAL", "MILOTIC_NORMAL", "MILOTIC">;

export type PokemonSettingsMakuhita = PokemonSettingsShared509<"V0296_POKEMON_MAKUHITA", "MAKUHITA">;
export type PokemonSettingsCacnea = PokemonSettingsShared509<"V0331_POKEMON_CACNEA", "CACNEA">;

export type PokemonSettingsMakuhitaNormal = PokemonSettingsShared510<"V0296_POKEMON_MAKUHITA_NORMAL", "MAKUHITA_NORMAL", "MAKUHITA">;
export type PokemonSettingsCacneaNormal = PokemonSettingsShared510<"V0331_POKEMON_CACNEA_NORMAL", "CACNEA_NORMAL", "CACNEA">;

export type PokemonSettingsSkitty = PokemonSettingsShared513<"V0300_POKEMON_SKITTY", "SKITTY">;
export type PokemonSettingsGulpin = PokemonSettingsShared513<"V0316_POKEMON_GULPIN", "GULPIN">;

export type PokemonSettingsSkittyNormal = PokemonSettingsShared514<"V0300_POKEMON_SKITTY_NORMAL", "SKITTY_NORMAL", "SKITTY">;
export type PokemonSettingsGulpinNormal = PokemonSettingsShared514<"V0316_POKEMON_GULPIN_NORMAL", "GULPIN_NORMAL", "GULPIN">;

export type PokemonSettingsDelcatty = PokemonSettingsShared515<"V0301_POKEMON_DELCATTY", "DELCATTY">;
export type PokemonSettingsHuntail = PokemonSettingsShared515<"V0367_POKEMON_HUNTAIL", "HUNTAIL">;
export type PokemonSettingsGorebyss = PokemonSettingsShared515<"V0368_POKEMON_GOREBYSS", "GOREBYSS">;

export type PokemonSettingsDelcattyNormal = PokemonSettingsShared516<"V0301_POKEMON_DELCATTY_NORMAL", "DELCATTY_NORMAL", "DELCATTY">;
export type PokemonSettingsHuntailNormal = PokemonSettingsShared516<"V0367_POKEMON_HUNTAIL_NORMAL", "HUNTAIL_NORMAL", "HUNTAIL">;
export type PokemonSettingsGorebyssNormal = PokemonSettingsShared516<"V0368_POKEMON_GOREBYSS_NORMAL", "GOREBYSS_NORMAL", "GOREBYSS">;

export type PokemonSettingsPlusle = PokemonSettingsShared251<"V0311_POKEMON_PLUSLE", "PLUSLE">;
export type PokemonSettingsMinun = PokemonSettingsShared251<"V0312_POKEMON_MINUN", "MINUN">;
export type PokemonSettingsVolbeat = PokemonSettingsShared251<"V0313_POKEMON_VOLBEAT", "VOLBEAT">;
export type PokemonSettingsIllumise = PokemonSettingsShared251<"V0314_POKEMON_ILLUMISE", "ILLUMISE">;
export type PokemonSettingsZangoose = PokemonSettingsShared251<"V0335_POKEMON_ZANGOOSE", "ZANGOOSE">;

export type PokemonSettingsPlusleNormal = PokemonSettingsShared252<"V0311_POKEMON_PLUSLE_NORMAL", "PLUSLE_NORMAL", "PLUSLE">;
export type PokemonSettingsMinunNormal = PokemonSettingsShared252<"V0312_POKEMON_MINUN_NORMAL", "MINUN_NORMAL", "MINUN">;
export type PokemonSettingsVolbeatNormal = PokemonSettingsShared252<"V0313_POKEMON_VOLBEAT_NORMAL", "VOLBEAT_NORMAL", "VOLBEAT">;
export type PokemonSettingsIllumiseNormal = PokemonSettingsShared252<"V0314_POKEMON_ILLUMISE_NORMAL", "ILLUMISE_NORMAL", "ILLUMISE">;
export type PokemonSettingsZangooseNormal = PokemonSettingsShared252<"V0335_POKEMON_ZANGOOSE_NORMAL", "ZANGOOSE_NORMAL", "ZANGOOSE">;

export type PokemonSettingsSpoink = PokemonSettingsShared552<"V0325_POKEMON_SPOINK", "SPOINK">;
export type PokemonSettingsCorphish = PokemonSettingsShared552<"V0341_POKEMON_CORPHISH", "CORPHISH">;

export type PokemonSettingsCacturne = PokemonSettingsShared76<"V0332_POKEMON_CACTURNE", "CACTURNE">;
export type PokemonSettingsCrawdaunt = PokemonSettingsShared76<"V0342_POKEMON_CRAWDAUNT", "CRAWDAUNT">;
export type PokemonSettingsArmaldo = PokemonSettingsShared76<"V0348_POKEMON_ARMALDO", "ARMALDO">;

export type PokemonSettingsCacturneNormal = PokemonSettingsShared77<"V0332_POKEMON_CACTURNE_NORMAL", "CACTURNE_NORMAL", "CACTURNE">;
export type PokemonSettingsCrawdauntNormal = PokemonSettingsShared77<"V0342_POKEMON_CRAWDAUNT_NORMAL", "CRAWDAUNT_NORMAL", "CRAWDAUNT">;
export type PokemonSettingsArmaldoNormal = PokemonSettingsShared77<"V0348_POKEMON_ARMALDO_NORMAL", "ARMALDO_NORMAL", "ARMALDO">;

export type PokemonSettingsBarboach = PokemonSettingsShared569<"V0339_POKEMON_BARBOACH", "BARBOACH">;
export type PokemonSettingsBaltoy = PokemonSettingsShared569<"V0343_POKEMON_BALTOY", "BALTOY">;

export type PokemonSettingsBarboachNormal = PokemonSettingsShared570<"V0339_POKEMON_BARBOACH_NORMAL", "BARBOACH_NORMAL", "BARBOACH">;
export type PokemonSettingsBaltoyNormal = PokemonSettingsShared570<"V0343_POKEMON_BALTOY_NORMAL", "BALTOY_NORMAL", "BALTOY">;

export type PokemonSettingsWhiscash = PokemonSettingsShared148<"V0340_POKEMON_WHISCASH", "WHISCASH">;

export type PokemonSettingsWhiscashNormal = PokemonSettingsShared149<"V0340_POKEMON_WHISCASH_NORMAL", "WHISCASH_NORMAL", "WHISCASH">;

export type PokemonSettingsAnorith = PokemonSettingsShared577<"V0347_POKEMON_ANORITH", "ANORITH">;
export type PokemonSettingsSpheal = PokemonSettingsShared577<"V0363_POKEMON_SPHEAL", "SPHEAL">;

export type PokemonSettingsAnorithNormal = PokemonSettingsShared578<"V0347_POKEMON_ANORITH_NORMAL", "ANORITH_NORMAL", "ANORITH">;
export type PokemonSettingsSphealNormal = PokemonSettingsShared578<"V0363_POKEMON_SPHEAL_NORMAL", "SPHEAL_NORMAL", "SPHEAL">;

export type PokemonSettingsCastform = PokemonSettingsShared370<"V0351_POKEMON_CASTFORM", "CASTFORM">;
export type PokemonSettingsLuvdisc = PokemonSettingsShared370<"V0370_POKEMON_LUVDISC", "LUVDISC">;

export type PokemonSettingsCastformNormal = PokemonSettingsShared371<"V0351_POKEMON_CASTFORM_NORMAL", "CASTFORM_NORMAL", "CASTFORM">;
export type PokemonSettingsCastformRainy = PokemonSettingsShared371<"V0351_POKEMON_CASTFORM_RAINY", "CASTFORM_RAINY", "CASTFORM">;
export type PokemonSettingsCastformSnowy = PokemonSettingsShared371<"V0351_POKEMON_CASTFORM_SNOWY", "CASTFORM_SNOWY", "CASTFORM">;
export type PokemonSettingsCastformSunny = PokemonSettingsShared371<"V0351_POKEMON_CASTFORM_SUNNY", "CASTFORM_SUNNY", "CASTFORM">;
export type PokemonSettingsLuvdiscNormal = PokemonSettingsShared371<"V0370_POKEMON_LUVDISC_NORMAL", "LUVDISC_NORMAL", "LUVDISC">;

export type PokemonSettingsKecleon = PokemonSettingsShared262<"V0352_POKEMON_KECLEON", "KECLEON">;

export type PokemonSettingsKecleonNormal = PokemonSettingsShared263<"V0352_POKEMON_KECLEON_NORMAL", "KECLEON_NORMAL", "KECLEON">;

export type PokemonSettingsWalrein = PokemonSettingsShared128<"V0365_POKEMON_WALREIN", "WALREIN">;

export type PokemonSettingsWalreinNormal = PokemonSettingsShared129<"V0365_POKEMON_WALREIN_NORMAL", "WALREIN_NORMAL", "WALREIN">;

export type PokemonSettingsRegirock = PokemonSettingsShared613<"V0377_POKEMON_REGIROCK", "REGIROCK">;
export type PokemonSettingsRegice = PokemonSettingsShared613<"V0378_POKEMON_REGICE", "REGICE">;
export type PokemonSettingsRegisteel = PokemonSettingsShared613<"V0379_POKEMON_REGISTEEL", "REGISTEEL">;

export type PokemonSettingsRegirockNormal = PokemonSettingsShared614<"V0377_POKEMON_REGIROCK_NORMAL", "REGIROCK_NORMAL", "REGIROCK">;
export type PokemonSettingsRegiceNormal = PokemonSettingsShared614<"V0378_POKEMON_REGICE_NORMAL", "REGICE_NORMAL", "REGICE">;
export type PokemonSettingsRegisteelNormal = PokemonSettingsShared614<"V0379_POKEMON_REGISTEEL_NORMAL", "REGISTEEL_NORMAL", "REGISTEEL">;

export type PokemonSettingsAttack = PokemonSettingsShared630<"V0386_POKEMON_DEOXYS_ATTACK", "DEOXYS_ATTACK">;
export type PokemonSettingsDefense = PokemonSettingsShared630<"V0386_POKEMON_DEOXYS_DEFENSE", "DEOXYS_DEFENSE">;
export type PokemonSettingsNormal = PokemonSettingsShared630<"V0386_POKEMON_DEOXYS_NORMAL", "DEOXYS_NORMAL">;
export type PokemonSettingsSpeed = PokemonSettingsShared630<"V0386_POKEMON_DEOXYS_SPEED", "DEOXYS_SPEED">;

export interface PokemonSettingsGen3MasterfileByTemplateId {
  "V0252_POKEMON_TREECKO": V0252_pokemon_treeckoEntry;
  "V0252_POKEMON_TREECKO_NORMAL": PokemonSettingsTreeckoNormal;
  "V0255_POKEMON_TORCHIC_NORMAL": PokemonSettingsTorchicNormal;
  "V0371_POKEMON_BAGON_NORMAL": PokemonSettingsBagonNormal;
  "V0253_POKEMON_GROVYLE": V0253_pokemon_grovyleEntry;
  "V0253_POKEMON_GROVYLE_NORMAL": V0253_pokemon_grovyle_normalEntry;
  "V0254_POKEMON_SCEPTILE": V0254_pokemon_sceptileEntry;
  "V0254_POKEMON_SCEPTILE_NORMAL": V0254_pokemon_sceptile_normalEntry;
  "V0255_POKEMON_TORCHIC": PokemonSettingsTorchic;
  "V0371_POKEMON_BAGON": PokemonSettingsBagon;
  "V0256_POKEMON_COMBUSKEN": PokemonSettingsCombusken;
  "V0305_POKEMON_LAIRON": PokemonSettingsLairon;
  "V0256_POKEMON_COMBUSKEN_NORMAL": PokemonSettingsCombuskenNormal;
  "V0305_POKEMON_LAIRON_NORMAL": PokemonSettingsLaironNormal;
  "V0257_POKEMON_BLAZIKEN": V0257_pokemon_blazikenEntry;
  "V0257_POKEMON_BLAZIKEN_NORMAL": V0257_pokemon_blaziken_normalEntry;
  "V0258_POKEMON_MUDKIP": V0258_pokemon_mudkipEntry;
  "V0258_POKEMON_MUDKIP_NORMAL": V0258_pokemon_mudkip_normalEntry;
  "V0259_POKEMON_MARSHTOMP": V0259_pokemon_marshtompEntry;
  "V0259_POKEMON_MARSHTOMP_NORMAL": V0259_pokemon_marshtomp_normalEntry;
  "V0260_POKEMON_SWAMPERT": V0260_pokemon_swampertEntry;
  "V0260_POKEMON_SWAMPERT_NORMAL": V0260_pokemon_swampert_normalEntry;
  "V0261_POKEMON_POOCHYENA": PokemonSettingsPoochyena;
  "V0328_POKEMON_TRAPINCH": PokemonSettingsTrapinch;
  "V0261_POKEMON_POOCHYENA_NORMAL": PokemonSettingsPoochyenaNormal;
  "V0325_POKEMON_SPOINK_NORMAL": PokemonSettingsSpoinkNormal;
  "V0328_POKEMON_TRAPINCH_NORMAL": PokemonSettingsTrapinchNormal;
  "V0341_POKEMON_CORPHISH_NORMAL": PokemonSettingsCorphishNormal;
  "V0262_POKEMON_MIGHTYENA": PokemonSettingsMightyena;
  "V0264_POKEMON_LINOONE": PokemonSettingsLinoone;
  "V0262_POKEMON_MIGHTYENA_NORMAL": PokemonSettingsMightyenaNormal;
  "V0264_POKEMON_LINOONE_NORMAL": PokemonSettingsLinooneNormal;
  "V0263_POKEMON_ZIGZAGOON": V0263_pokemon_zigzagoonEntry;
  "V0263_POKEMON_ZIGZAGOON_GALARIAN": V0263_pokemon_zigzagoon_galarianEntry;
  "V0263_POKEMON_ZIGZAGOON_NORMAL": V0263_pokemon_zigzagoon_normalEntry;
  "V0264_POKEMON_LINOONE_GALARIAN": V0264_pokemon_linoone_galarianEntry;
  "V0265_POKEMON_WURMPLE": PokemonSettingsWurmple;
  "V0360_POKEMON_WYNAUT": PokemonSettingsWynaut;
  "V0265_POKEMON_WURMPLE_NORMAL": PokemonSettingsWurmpleNormal;
  "V0360_POKEMON_WYNAUT_NORMAL": PokemonSettingsWynautNormal;
  "V0266_POKEMON_SILCOON": PokemonSettingsSilcoon;
  "V0268_POKEMON_CASCOON": PokemonSettingsCascoon;
  "V0266_POKEMON_SILCOON_NORMAL": PokemonSettingsSilcoonNormal;
  "V0268_POKEMON_CASCOON_NORMAL": PokemonSettingsCascoonNormal;
  "V0267_POKEMON_BEAUTIFLY": PokemonSettingsBeautifly;
  "V0269_POKEMON_DUSTOX": PokemonSettingsDustox;
  "V0291_POKEMON_NINJASK": PokemonSettingsNinjask;
  "V0267_POKEMON_BEAUTIFLY_NORMAL": PokemonSettingsBeautiflyNormal;
  "V0269_POKEMON_DUSTOX_NORMAL": PokemonSettingsDustoxNormal;
  "V0291_POKEMON_NINJASK_NORMAL": PokemonSettingsNinjaskNormal;
  "V0270_POKEMON_LOTAD": V0270_pokemon_lotadEntry;
  "V0270_POKEMON_LOTAD_NORMAL": V0270_pokemon_lotad_normalEntry;
  "V0271_POKEMON_LOMBRE": V0271_pokemon_lombreEntry;
  "V0271_POKEMON_LOMBRE_NORMAL": V0271_pokemon_lombre_normalEntry;
  "V0272_POKEMON_LUDICOLO": V0272_pokemon_ludicoloEntry;
  "V0272_POKEMON_LUDICOLO_NORMAL": V0272_pokemon_ludicolo_normalEntry;
  "V0273_POKEMON_SEEDOT": V0273_pokemon_seedotEntry;
  "V0273_POKEMON_SEEDOT_NORMAL": V0273_pokemon_seedot_normalEntry;
  "V0274_POKEMON_NUZLEAF": PokemonSettingsNuzleaf;
  "V0364_POKEMON_SEALEO": PokemonSettingsSealeo;
  "V0274_POKEMON_NUZLEAF_NORMAL": PokemonSettingsNuzleafNormal;
  "V0364_POKEMON_SEALEO_NORMAL": PokemonSettingsSealeoNormal;
  "V0275_POKEMON_SHIFTRY": PokemonSettingsShiftry;
  "V0275_POKEMON_SHIFTRY_NORMAL": PokemonSettingsShiftryNormal;
  "V0276_POKEMON_TAILLOW": V0276_pokemon_taillowEntry;
  "V0276_POKEMON_TAILLOW_NORMAL": V0276_pokemon_taillow_normalEntry;
  "V0277_POKEMON_SWELLOW": V0277_pokemon_swellowEntry;
  "V0277_POKEMON_SWELLOW_NORMAL": V0277_pokemon_swellow_normalEntry;
  "V0278_POKEMON_WINGULL": V0278_pokemon_wingullEntry;
  "V0278_POKEMON_WINGULL_NORMAL": V0278_pokemon_wingull_normalEntry;
  "V0279_POKEMON_PELIPPER": V0279_pokemon_pelipperEntry;
  "V0279_POKEMON_PELIPPER_NORMAL": V0279_pokemon_pelipper_normalEntry;
  "V0280_POKEMON_RALTS": V0280_pokemon_raltsEntry;
  "V0280_POKEMON_RALTS_NORMAL": V0280_pokemon_ralts_normalEntry;
  "V0281_POKEMON_KIRLIA": V0281_pokemon_kirliaEntry;
  "V0281_POKEMON_KIRLIA_NORMAL": V0281_pokemon_kirlia_normalEntry;
  "V0282_POKEMON_GARDEVOIR": V0282_pokemon_gardevoirEntry;
  "V0282_POKEMON_GARDEVOIR_NORMAL": V0282_pokemon_gardevoir_normalEntry;
  "V0283_POKEMON_SURSKIT": PokemonSettingsSurskit;
  "V0290_POKEMON_NINCADA": PokemonSettingsNincada;
  "V0298_POKEMON_AZURILL": PokemonSettingsAzurill;
  "V0283_POKEMON_SURSKIT_NORMAL": PokemonSettingsSurskitNormal;
  "V0290_POKEMON_NINCADA_NORMAL": PokemonSettingsNincadaNormal;
  "V0298_POKEMON_AZURILL_NORMAL": PokemonSettingsAzurillNormal;
  "V0284_POKEMON_MASQUERAIN": V0284_pokemon_masquerainEntry;
  "V0284_POKEMON_MASQUERAIN_NORMAL": V0284_pokemon_masquerain_normalEntry;
  "V0285_POKEMON_SHROOMISH": V0285_pokemon_shroomishEntry;
  "V0285_POKEMON_SHROOMISH_NORMAL": V0285_pokemon_shroomish_normalEntry;
  "V0286_POKEMON_BRELOOM": V0286_pokemon_breloomEntry;
  "V0286_POKEMON_BRELOOM_NORMAL": V0286_pokemon_breloom_normalEntry;
  "V0287_POKEMON_SLAKOTH": V0287_pokemon_slakothEntry;
  "V0287_POKEMON_SLAKOTH_NORMAL": V0287_pokemon_slakoth_normalEntry;
  "V0288_POKEMON_VIGOROTH": PokemonSettingsVigoroth;
  "V0294_POKEMON_LOUDRED": PokemonSettingsLoudred;
  "V0288_POKEMON_VIGOROTH_NORMAL": V0288_pokemon_vigoroth_normalEntry;
  "V0289_POKEMON_SLAKING": V0289_pokemon_slakingEntry;
  "V0289_POKEMON_SLAKING_NORMAL": V0289_pokemon_slaking_normalEntry;
  "V0292_POKEMON_SHEDINJA": V0292_pokemon_shedinjaEntry;
  "V0292_POKEMON_SHEDINJA_NORMAL": V0292_pokemon_shedinja_normalEntry;
  "V0293_POKEMON_WHISMUR": V0293_pokemon_whismurEntry;
  "V0293_POKEMON_WHISMUR_NORMAL": V0293_pokemon_whismur_normalEntry;
  "V0294_POKEMON_LOUDRED_NORMAL": V0294_pokemon_loudred_normalEntry;
  "V0295_POKEMON_EXPLOUD": PokemonSettingsExploud;
  "V0297_POKEMON_HARIYAMA": PokemonSettingsHariyama;
  "V0326_POKEMON_GRUMPIG": PokemonSettingsGrumpig;
  "V0350_POKEMON_MILOTIC": PokemonSettingsMilotic;
  "V0295_POKEMON_EXPLOUD_NORMAL": PokemonSettingsExploudNormal;
  "V0297_POKEMON_HARIYAMA_NORMAL": PokemonSettingsHariyamaNormal;
  "V0326_POKEMON_GRUMPIG_NORMAL": PokemonSettingsGrumpigNormal;
  "V0350_POKEMON_MILOTIC_NORMAL": PokemonSettingsMiloticNormal;
  "V0296_POKEMON_MAKUHITA": PokemonSettingsMakuhita;
  "V0331_POKEMON_CACNEA": PokemonSettingsCacnea;
  "V0296_POKEMON_MAKUHITA_NORMAL": PokemonSettingsMakuhitaNormal;
  "V0331_POKEMON_CACNEA_NORMAL": PokemonSettingsCacneaNormal;
  "V0299_POKEMON_NOSEPASS": V0299_pokemon_nosepassEntry;
  "V0299_POKEMON_NOSEPASS_NORMAL": V0299_pokemon_nosepass_normalEntry;
  "V0300_POKEMON_SKITTY": PokemonSettingsSkitty;
  "V0316_POKEMON_GULPIN": PokemonSettingsGulpin;
  "V0300_POKEMON_SKITTY_NORMAL": PokemonSettingsSkittyNormal;
  "V0316_POKEMON_GULPIN_NORMAL": PokemonSettingsGulpinNormal;
  "V0301_POKEMON_DELCATTY": PokemonSettingsDelcatty;
  "V0367_POKEMON_HUNTAIL": PokemonSettingsHuntail;
  "V0368_POKEMON_GOREBYSS": PokemonSettingsGorebyss;
  "V0301_POKEMON_DELCATTY_NORMAL": PokemonSettingsDelcattyNormal;
  "V0367_POKEMON_HUNTAIL_NORMAL": PokemonSettingsHuntailNormal;
  "V0368_POKEMON_GOREBYSS_NORMAL": PokemonSettingsGorebyssNormal;
  "V0302_POKEMON_SABLEYE": V0302_pokemon_sableyeEntry;
  "V0302_POKEMON_SABLEYE_COSTUME_2020": V0302_pokemon_sableye_costume_2020Entry;
  "V0302_POKEMON_SABLEYE_NORMAL": V0302_pokemon_sableye_normalEntry;
  "V0303_POKEMON_MAWILE": V0303_pokemon_mawileEntry;
  "V0303_POKEMON_MAWILE_NORMAL": V0303_pokemon_mawile_normalEntry;
  "V0304_POKEMON_ARON": V0304_pokemon_aronEntry;
  "V0304_POKEMON_ARON_NORMAL": V0304_pokemon_aron_normalEntry;
  "V0306_POKEMON_AGGRON": V0306_pokemon_aggronEntry;
  "V0306_POKEMON_AGGRON_NORMAL": V0306_pokemon_aggron_normalEntry;
  "V0307_POKEMON_MEDITITE": V0307_pokemon_medititeEntry;
  "V0307_POKEMON_MEDITITE_NORMAL": V0307_pokemon_meditite_normalEntry;
  "V0308_POKEMON_MEDICHAM": V0308_pokemon_medichamEntry;
  "V0308_POKEMON_MEDICHAM_NORMAL": V0308_pokemon_medicham_normalEntry;
  "V0309_POKEMON_ELECTRIKE": V0309_pokemon_electrikeEntry;
  "V0309_POKEMON_ELECTRIKE_NORMAL": V0309_pokemon_electrike_normalEntry;
  "V0310_POKEMON_MANECTRIC": V0310_pokemon_manectricEntry;
  "V0310_POKEMON_MANECTRIC_NORMAL": V0310_pokemon_manectric_normalEntry;
  "V0311_POKEMON_PLUSLE": PokemonSettingsPlusle;
  "V0312_POKEMON_MINUN": PokemonSettingsMinun;
  "V0313_POKEMON_VOLBEAT": PokemonSettingsVolbeat;
  "V0314_POKEMON_ILLUMISE": PokemonSettingsIllumise;
  "V0335_POKEMON_ZANGOOSE": PokemonSettingsZangoose;
  "V0311_POKEMON_PLUSLE_NORMAL": PokemonSettingsPlusleNormal;
  "V0312_POKEMON_MINUN_NORMAL": PokemonSettingsMinunNormal;
  "V0313_POKEMON_VOLBEAT_NORMAL": PokemonSettingsVolbeatNormal;
  "V0314_POKEMON_ILLUMISE_NORMAL": PokemonSettingsIllumiseNormal;
  "V0335_POKEMON_ZANGOOSE_NORMAL": PokemonSettingsZangooseNormal;
  "V0315_POKEMON_ROSELIA": V0315_pokemon_roseliaEntry;
  "V0315_POKEMON_ROSELIA_NORMAL": V0315_pokemon_roselia_normalEntry;
  "V0317_POKEMON_SWALOT": V0317_pokemon_swalotEntry;
  "V0317_POKEMON_SWALOT_NORMAL": V0317_pokemon_swalot_normalEntry;
  "V0318_POKEMON_CARVANHA": V0318_pokemon_carvanhaEntry;
  "V0318_POKEMON_CARVANHA_NORMAL": V0318_pokemon_carvanha_normalEntry;
  "V0319_POKEMON_SHARPEDO": V0319_pokemon_sharpedoEntry;
  "V0319_POKEMON_SHARPEDO_NORMAL": V0319_pokemon_sharpedo_normalEntry;
  "V0320_POKEMON_WAILMER": V0320_pokemon_wailmerEntry;
  "V0320_POKEMON_WAILMER_NORMAL": V0320_pokemon_wailmer_normalEntry;
  "V0321_POKEMON_WAILORD": V0321_pokemon_wailordEntry;
  "V0321_POKEMON_WAILORD_NORMAL": V0321_pokemon_wailord_normalEntry;
  "V0322_POKEMON_NUMEL": V0322_pokemon_numelEntry;
  "V0322_POKEMON_NUMEL_NORMAL": V0322_pokemon_numel_normalEntry;
  "V0323_POKEMON_CAMERUPT": V0323_pokemon_cameruptEntry;
  "V0323_POKEMON_CAMERUPT_NORMAL": V0323_pokemon_camerupt_normalEntry;
  "V0324_POKEMON_TORKOAL": V0324_pokemon_torkoalEntry;
  "V0324_POKEMON_TORKOAL_NORMAL": V0324_pokemon_torkoal_normalEntry;
  "V0325_POKEMON_SPOINK": PokemonSettingsSpoink;
  "V0341_POKEMON_CORPHISH": PokemonSettingsCorphish;
  "V0327_POKEMON_SPINDA": V0327_pokemon_spindaEntry;
  "V0327_POKEMON_SPINDA_00": V0327_pokemon_spinda_00Entry;
  "V0327_POKEMON_SPINDA_01": V0327_pokemon_spinda_01Entry;
  "V0327_POKEMON_SPINDA_02": V0327_pokemon_spinda_02Entry;
  "V0327_POKEMON_SPINDA_03": V0327_pokemon_spinda_03Entry;
  "V0327_POKEMON_SPINDA_04": V0327_pokemon_spinda_04Entry;
  "V0327_POKEMON_SPINDA_05": V0327_pokemon_spinda_05Entry;
  "V0327_POKEMON_SPINDA_06": V0327_pokemon_spinda_06Entry;
  "V0327_POKEMON_SPINDA_07": V0327_pokemon_spinda_07Entry;
  "V0327_POKEMON_SPINDA_08": V0327_pokemon_spinda_08Entry;
  "V0327_POKEMON_SPINDA_09": V0327_pokemon_spinda_09Entry;
  "V0327_POKEMON_SPINDA_10": V0327_pokemon_spinda_10Entry;
  "V0327_POKEMON_SPINDA_11": V0327_pokemon_spinda_11Entry;
  "V0327_POKEMON_SPINDA_12": V0327_pokemon_spinda_12Entry;
  "V0327_POKEMON_SPINDA_13": V0327_pokemon_spinda_13Entry;
  "V0327_POKEMON_SPINDA_14": V0327_pokemon_spinda_14Entry;
  "V0327_POKEMON_SPINDA_15": V0327_pokemon_spinda_15Entry;
  "V0327_POKEMON_SPINDA_16": V0327_pokemon_spinda_16Entry;
  "V0327_POKEMON_SPINDA_17": V0327_pokemon_spinda_17Entry;
  "V0327_POKEMON_SPINDA_18": V0327_pokemon_spinda_18Entry;
  "V0327_POKEMON_SPINDA_19": V0327_pokemon_spinda_19Entry;
  "V0329_POKEMON_VIBRAVA": V0329_pokemon_vibravaEntry;
  "V0329_POKEMON_VIBRAVA_NORMAL": V0329_pokemon_vibrava_normalEntry;
  "V0330_POKEMON_FLYGON": V0330_pokemon_flygonEntry;
  "V0330_POKEMON_FLYGON_NORMAL": V0330_pokemon_flygon_normalEntry;
  "V0332_POKEMON_CACTURNE": PokemonSettingsCacturne;
  "V0342_POKEMON_CRAWDAUNT": PokemonSettingsCrawdaunt;
  "V0348_POKEMON_ARMALDO": PokemonSettingsArmaldo;
  "V0332_POKEMON_CACTURNE_NORMAL": PokemonSettingsCacturneNormal;
  "V0342_POKEMON_CRAWDAUNT_NORMAL": PokemonSettingsCrawdauntNormal;
  "V0348_POKEMON_ARMALDO_NORMAL": PokemonSettingsArmaldoNormal;
  "V0333_POKEMON_SWABLU": V0333_pokemon_swabluEntry;
  "V0333_POKEMON_SWABLU_NORMAL": V0333_pokemon_swablu_normalEntry;
  "V0334_POKEMON_ALTARIA": V0334_pokemon_altariaEntry;
  "V0334_POKEMON_ALTARIA_NORMAL": V0334_pokemon_altaria_normalEntry;
  "V0336_POKEMON_SEVIPER": V0336_pokemon_seviperEntry;
  "V0336_POKEMON_SEVIPER_NORMAL": V0336_pokemon_seviper_normalEntry;
  "V0337_POKEMON_LUNATONE": V0337_pokemon_lunatoneEntry;
  "V0337_POKEMON_LUNATONE_NORMAL": V0337_pokemon_lunatone_normalEntry;
  "V0338_POKEMON_SOLROCK": V0338_pokemon_solrockEntry;
  "V0338_POKEMON_SOLROCK_NORMAL": V0338_pokemon_solrock_normalEntry;
  "V0339_POKEMON_BARBOACH": PokemonSettingsBarboach;
  "V0343_POKEMON_BALTOY": PokemonSettingsBaltoy;
  "V0339_POKEMON_BARBOACH_NORMAL": PokemonSettingsBarboachNormal;
  "V0343_POKEMON_BALTOY_NORMAL": PokemonSettingsBaltoyNormal;
  "V0340_POKEMON_WHISCASH": PokemonSettingsWhiscash;
  "V0340_POKEMON_WHISCASH_NORMAL": PokemonSettingsWhiscashNormal;
  "V0344_POKEMON_CLAYDOL": V0344_pokemon_claydolEntry;
  "V0344_POKEMON_CLAYDOL_NORMAL": V0344_pokemon_claydol_normalEntry;
  "V0345_POKEMON_LILEEP": V0345_pokemon_lileepEntry;
  "V0345_POKEMON_LILEEP_NORMAL": V0345_pokemon_lileep_normalEntry;
  "V0346_POKEMON_CRADILY": V0346_pokemon_cradilyEntry;
  "V0346_POKEMON_CRADILY_NORMAL": V0346_pokemon_cradily_normalEntry;
  "V0347_POKEMON_ANORITH": PokemonSettingsAnorith;
  "V0363_POKEMON_SPHEAL": PokemonSettingsSpheal;
  "V0347_POKEMON_ANORITH_NORMAL": PokemonSettingsAnorithNormal;
  "V0363_POKEMON_SPHEAL_NORMAL": PokemonSettingsSphealNormal;
  "V0349_POKEMON_FEEBAS": V0349_pokemon_feebasEntry;
  "V0349_POKEMON_FEEBAS_NORMAL": V0349_pokemon_feebas_normalEntry;
  "V0351_POKEMON_CASTFORM": PokemonSettingsCastform;
  "V0370_POKEMON_LUVDISC": PokemonSettingsLuvdisc;
  "V0351_POKEMON_CASTFORM_NORMAL": PokemonSettingsCastformNormal;
  "V0351_POKEMON_CASTFORM_RAINY": PokemonSettingsCastformRainy;
  "V0351_POKEMON_CASTFORM_SNOWY": PokemonSettingsCastformSnowy;
  "V0351_POKEMON_CASTFORM_SUNNY": PokemonSettingsCastformSunny;
  "V0370_POKEMON_LUVDISC_NORMAL": PokemonSettingsLuvdiscNormal;
  "V0352_POKEMON_KECLEON": PokemonSettingsKecleon;
  "V0352_POKEMON_KECLEON_NORMAL": PokemonSettingsKecleonNormal;
  "V0353_POKEMON_SHUPPET": V0353_pokemon_shuppetEntry;
  "V0353_POKEMON_SHUPPET_NORMAL": V0353_pokemon_shuppet_normalEntry;
  "V0354_POKEMON_BANETTE": V0354_pokemon_banetteEntry;
  "V0354_POKEMON_BANETTE_NORMAL": V0354_pokemon_banette_normalEntry;
  "V0355_POKEMON_DUSKULL": V0355_pokemon_duskullEntry;
  "V0355_POKEMON_DUSKULL_NORMAL": V0355_pokemon_duskull_normalEntry;
  "V0356_POKEMON_DUSCLOPS": V0356_pokemon_dusclopsEntry;
  "V0356_POKEMON_DUSCLOPS_NORMAL": V0356_pokemon_dusclops_normalEntry;
  "V0357_POKEMON_TROPIUS": V0357_pokemon_tropiusEntry;
  "V0357_POKEMON_TROPIUS_NORMAL": V0357_pokemon_tropius_normalEntry;
  "V0358_POKEMON_CHIMECHO": V0358_pokemon_chimechoEntry;
  "V0358_POKEMON_CHIMECHO_NORMAL": V0358_pokemon_chimecho_normalEntry;
  "V0359_POKEMON_ABSOL": V0359_pokemon_absolEntry;
  "V0359_POKEMON_ABSOL_NORMAL": V0359_pokemon_absol_normalEntry;
  "V0361_POKEMON_SNORUNT": V0361_pokemon_snoruntEntry;
  "V0361_POKEMON_SNORUNT_NORMAL": V0361_pokemon_snorunt_normalEntry;
  "V0362_POKEMON_GLALIE": V0362_pokemon_glalieEntry;
  "V0362_POKEMON_GLALIE_NORMAL": V0362_pokemon_glalie_normalEntry;
  "V0365_POKEMON_WALREIN": PokemonSettingsWalrein;
  "V0365_POKEMON_WALREIN_NORMAL": PokemonSettingsWalreinNormal;
  "V0366_POKEMON_CLAMPERL": V0366_pokemon_clamperlEntry;
  "V0366_POKEMON_CLAMPERL_NORMAL": V0366_pokemon_clamperl_normalEntry;
  "V0369_POKEMON_RELICANTH": V0369_pokemon_relicanthEntry;
  "V0369_POKEMON_RELICANTH_NORMAL": V0369_pokemon_relicanth_normalEntry;
  "V0372_POKEMON_SHELGON": V0372_pokemon_shelgonEntry;
  "V0372_POKEMON_SHELGON_NORMAL": V0372_pokemon_shelgon_normalEntry;
  "V0373_POKEMON_SALAMENCE": V0373_pokemon_salamenceEntry;
  "V0373_POKEMON_SALAMENCE_NORMAL": V0373_pokemon_salamence_normalEntry;
  "V0374_POKEMON_BELDUM": V0374_pokemon_beldumEntry;
  "V0374_POKEMON_BELDUM_NORMAL": V0374_pokemon_beldum_normalEntry;
  "V0375_POKEMON_METANG": V0375_pokemon_metangEntry;
  "V0375_POKEMON_METANG_NORMAL": V0375_pokemon_metang_normalEntry;
  "V0376_POKEMON_METAGROSS": V0376_pokemon_metagrossEntry;
  "V0376_POKEMON_METAGROSS_NORMAL": V0376_pokemon_metagross_normalEntry;
  "V0377_POKEMON_REGIROCK": PokemonSettingsRegirock;
  "V0378_POKEMON_REGICE": PokemonSettingsRegice;
  "V0379_POKEMON_REGISTEEL": PokemonSettingsRegisteel;
  "V0377_POKEMON_REGIROCK_NORMAL": PokemonSettingsRegirockNormal;
  "V0378_POKEMON_REGICE_NORMAL": PokemonSettingsRegiceNormal;
  "V0379_POKEMON_REGISTEEL_NORMAL": PokemonSettingsRegisteelNormal;
  "V0380_POKEMON_LATIAS": V0380_pokemon_latiasEntry;
  "V0380_POKEMON_LATIAS_NORMAL": V0380_pokemon_latias_normalEntry;
  "V0380_POKEMON_LATIAS_S": V0380_pokemon_latias_sEntry;
  "V0381_POKEMON_LATIOS": V0381_pokemon_latiosEntry;
  "V0381_POKEMON_LATIOS_NORMAL": V0381_pokemon_latios_normalEntry;
  "V0381_POKEMON_LATIOS_S": V0381_pokemon_latios_sEntry;
  "V0382_POKEMON_KYOGRE": V0382_pokemon_kyogreEntry;
  "V0382_POKEMON_KYOGRE_NORMAL": V0382_pokemon_kyogre_normalEntry;
  "V0383_POKEMON_GROUDON": V0383_pokemon_groudonEntry;
  "V0383_POKEMON_GROUDON_NORMAL": V0383_pokemon_groudon_normalEntry;
  "V0384_POKEMON_RAYQUAZA": V0384_pokemon_rayquazaEntry;
  "V0384_POKEMON_RAYQUAZA_NORMAL": V0384_pokemon_rayquaza_normalEntry;
  "V0385_POKEMON_JIRACHI": V0385_pokemon_jirachiEntry;
  "V0385_POKEMON_JIRACHI_NORMAL": V0385_pokemon_jirachi_normalEntry;
  "V0386_POKEMON_DEOXYS": V0386_pokemon_deoxysEntry;
  "V0386_POKEMON_DEOXYS_ATTACK": PokemonSettingsAttack;
  "V0386_POKEMON_DEOXYS_DEFENSE": PokemonSettingsDefense;
  "V0386_POKEMON_DEOXYS_NORMAL": PokemonSettingsNormal;
  "V0386_POKEMON_DEOXYS_SPEED": PokemonSettingsSpeed;
}

export interface PokemonSettingsGen3ByDexId {
  "0252": V0252_pokemon_treeckoEntry | PokemonSettingsTreeckoNormal;
  "0253": V0253_pokemon_grovyleEntry | V0253_pokemon_grovyle_normalEntry;
  "0254": V0254_pokemon_sceptileEntry | V0254_pokemon_sceptile_normalEntry;
  "0255": PokemonSettingsTorchicNormal | PokemonSettingsTorchic;
  "0256": PokemonSettingsCombusken | PokemonSettingsCombuskenNormal;
  "0257": V0257_pokemon_blazikenEntry | V0257_pokemon_blaziken_normalEntry;
  "0258": V0258_pokemon_mudkipEntry | V0258_pokemon_mudkip_normalEntry;
  "0259": V0259_pokemon_marshtompEntry | V0259_pokemon_marshtomp_normalEntry;
  "0260": V0260_pokemon_swampertEntry | V0260_pokemon_swampert_normalEntry;
  "0261": PokemonSettingsPoochyena | PokemonSettingsPoochyenaNormal;
  "0262": PokemonSettingsMightyena | PokemonSettingsMightyenaNormal;
  "0263": V0263_pokemon_zigzagoonEntry | V0263_pokemon_zigzagoon_galarianEntry | V0263_pokemon_zigzagoon_normalEntry;
  "0264": PokemonSettingsLinoone | PokemonSettingsLinooneNormal | V0264_pokemon_linoone_galarianEntry;
  "0265": PokemonSettingsWurmple | PokemonSettingsWurmpleNormal;
  "0266": PokemonSettingsSilcoon | PokemonSettingsSilcoonNormal;
  "0267": PokemonSettingsBeautifly | PokemonSettingsBeautiflyNormal;
  "0268": PokemonSettingsCascoon | PokemonSettingsCascoonNormal;
  "0269": PokemonSettingsDustox | PokemonSettingsDustoxNormal;
  "0270": V0270_pokemon_lotadEntry | V0270_pokemon_lotad_normalEntry;
  "0271": V0271_pokemon_lombreEntry | V0271_pokemon_lombre_normalEntry;
  "0272": V0272_pokemon_ludicoloEntry | V0272_pokemon_ludicolo_normalEntry;
  "0273": V0273_pokemon_seedotEntry | V0273_pokemon_seedot_normalEntry;
  "0274": PokemonSettingsNuzleaf | PokemonSettingsNuzleafNormal;
  "0275": PokemonSettingsShiftry | PokemonSettingsShiftryNormal;
  "0276": V0276_pokemon_taillowEntry | V0276_pokemon_taillow_normalEntry;
  "0277": V0277_pokemon_swellowEntry | V0277_pokemon_swellow_normalEntry;
  "0278": V0278_pokemon_wingullEntry | V0278_pokemon_wingull_normalEntry;
  "0279": V0279_pokemon_pelipperEntry | V0279_pokemon_pelipper_normalEntry;
  "0280": V0280_pokemon_raltsEntry | V0280_pokemon_ralts_normalEntry;
  "0281": V0281_pokemon_kirliaEntry | V0281_pokemon_kirlia_normalEntry;
  "0282": V0282_pokemon_gardevoirEntry | V0282_pokemon_gardevoir_normalEntry;
  "0283": PokemonSettingsSurskit | PokemonSettingsSurskitNormal;
  "0284": V0284_pokemon_masquerainEntry | V0284_pokemon_masquerain_normalEntry;
  "0285": V0285_pokemon_shroomishEntry | V0285_pokemon_shroomish_normalEntry;
  "0286": V0286_pokemon_breloomEntry | V0286_pokemon_breloom_normalEntry;
  "0287": V0287_pokemon_slakothEntry | V0287_pokemon_slakoth_normalEntry;
  "0288": PokemonSettingsVigoroth | V0288_pokemon_vigoroth_normalEntry;
  "0289": V0289_pokemon_slakingEntry | V0289_pokemon_slaking_normalEntry;
  "0290": PokemonSettingsNincada | PokemonSettingsNincadaNormal;
  "0291": PokemonSettingsNinjask | PokemonSettingsNinjaskNormal;
  "0292": V0292_pokemon_shedinjaEntry | V0292_pokemon_shedinja_normalEntry;
  "0293": V0293_pokemon_whismurEntry | V0293_pokemon_whismur_normalEntry;
  "0294": PokemonSettingsLoudred | V0294_pokemon_loudred_normalEntry;
  "0295": PokemonSettingsExploud | PokemonSettingsExploudNormal;
  "0296": PokemonSettingsMakuhita | PokemonSettingsMakuhitaNormal;
  "0297": PokemonSettingsHariyama | PokemonSettingsHariyamaNormal;
  "0298": PokemonSettingsAzurill | PokemonSettingsAzurillNormal;
  "0299": V0299_pokemon_nosepassEntry | V0299_pokemon_nosepass_normalEntry;
  "0300": PokemonSettingsSkitty | PokemonSettingsSkittyNormal;
  "0301": PokemonSettingsDelcatty | PokemonSettingsDelcattyNormal;
  "0302": V0302_pokemon_sableyeEntry | V0302_pokemon_sableye_costume_2020Entry | V0302_pokemon_sableye_normalEntry;
  "0303": V0303_pokemon_mawileEntry | V0303_pokemon_mawile_normalEntry;
  "0304": V0304_pokemon_aronEntry | V0304_pokemon_aron_normalEntry;
  "0305": PokemonSettingsLairon | PokemonSettingsLaironNormal;
  "0306": V0306_pokemon_aggronEntry | V0306_pokemon_aggron_normalEntry;
  "0307": V0307_pokemon_medititeEntry | V0307_pokemon_meditite_normalEntry;
  "0308": V0308_pokemon_medichamEntry | V0308_pokemon_medicham_normalEntry;
  "0309": V0309_pokemon_electrikeEntry | V0309_pokemon_electrike_normalEntry;
  "0310": V0310_pokemon_manectricEntry | V0310_pokemon_manectric_normalEntry;
  "0311": PokemonSettingsPlusle | PokemonSettingsPlusleNormal;
  "0312": PokemonSettingsMinun | PokemonSettingsMinunNormal;
  "0313": PokemonSettingsVolbeat | PokemonSettingsVolbeatNormal;
  "0314": PokemonSettingsIllumise | PokemonSettingsIllumiseNormal;
  "0315": V0315_pokemon_roseliaEntry | V0315_pokemon_roselia_normalEntry;
  "0316": PokemonSettingsGulpin | PokemonSettingsGulpinNormal;
  "0317": V0317_pokemon_swalotEntry | V0317_pokemon_swalot_normalEntry;
  "0318": V0318_pokemon_carvanhaEntry | V0318_pokemon_carvanha_normalEntry;
  "0319": V0319_pokemon_sharpedoEntry | V0319_pokemon_sharpedo_normalEntry;
  "0320": V0320_pokemon_wailmerEntry | V0320_pokemon_wailmer_normalEntry;
  "0321": V0321_pokemon_wailordEntry | V0321_pokemon_wailord_normalEntry;
  "0322": V0322_pokemon_numelEntry | V0322_pokemon_numel_normalEntry;
  "0323": V0323_pokemon_cameruptEntry | V0323_pokemon_camerupt_normalEntry;
  "0324": V0324_pokemon_torkoalEntry | V0324_pokemon_torkoal_normalEntry;
  "0325": PokemonSettingsSpoinkNormal | PokemonSettingsSpoink;
  "0326": PokemonSettingsGrumpig | PokemonSettingsGrumpigNormal;
  "0327": V0327_pokemon_spindaEntry | V0327_pokemon_spinda_00Entry | V0327_pokemon_spinda_01Entry | V0327_pokemon_spinda_02Entry | V0327_pokemon_spinda_03Entry | V0327_pokemon_spinda_04Entry | V0327_pokemon_spinda_05Entry | V0327_pokemon_spinda_06Entry | V0327_pokemon_spinda_07Entry | V0327_pokemon_spinda_08Entry | V0327_pokemon_spinda_09Entry | V0327_pokemon_spinda_10Entry | V0327_pokemon_spinda_11Entry | V0327_pokemon_spinda_12Entry | V0327_pokemon_spinda_13Entry | V0327_pokemon_spinda_14Entry | V0327_pokemon_spinda_15Entry | V0327_pokemon_spinda_16Entry | V0327_pokemon_spinda_17Entry | V0327_pokemon_spinda_18Entry | V0327_pokemon_spinda_19Entry;
  "0328": PokemonSettingsTrapinch | PokemonSettingsTrapinchNormal;
  "0329": V0329_pokemon_vibravaEntry | V0329_pokemon_vibrava_normalEntry;
  "0330": V0330_pokemon_flygonEntry | V0330_pokemon_flygon_normalEntry;
  "0331": PokemonSettingsCacnea | PokemonSettingsCacneaNormal;
  "0332": PokemonSettingsCacturne | PokemonSettingsCacturneNormal;
  "0333": V0333_pokemon_swabluEntry | V0333_pokemon_swablu_normalEntry;
  "0334": V0334_pokemon_altariaEntry | V0334_pokemon_altaria_normalEntry;
  "0335": PokemonSettingsZangoose | PokemonSettingsZangooseNormal;
  "0336": V0336_pokemon_seviperEntry | V0336_pokemon_seviper_normalEntry;
  "0337": V0337_pokemon_lunatoneEntry | V0337_pokemon_lunatone_normalEntry;
  "0338": V0338_pokemon_solrockEntry | V0338_pokemon_solrock_normalEntry;
  "0339": PokemonSettingsBarboach | PokemonSettingsBarboachNormal;
  "0340": PokemonSettingsWhiscash | PokemonSettingsWhiscashNormal;
  "0341": PokemonSettingsCorphishNormal | PokemonSettingsCorphish;
  "0342": PokemonSettingsCrawdaunt | PokemonSettingsCrawdauntNormal;
  "0343": PokemonSettingsBaltoy | PokemonSettingsBaltoyNormal;
  "0344": V0344_pokemon_claydolEntry | V0344_pokemon_claydol_normalEntry;
  "0345": V0345_pokemon_lileepEntry | V0345_pokemon_lileep_normalEntry;
  "0346": V0346_pokemon_cradilyEntry | V0346_pokemon_cradily_normalEntry;
  "0347": PokemonSettingsAnorith | PokemonSettingsAnorithNormal;
  "0348": PokemonSettingsArmaldo | PokemonSettingsArmaldoNormal;
  "0349": V0349_pokemon_feebasEntry | V0349_pokemon_feebas_normalEntry;
  "0350": PokemonSettingsMilotic | PokemonSettingsMiloticNormal;
  "0351": PokemonSettingsCastform | PokemonSettingsCastformNormal | PokemonSettingsCastformRainy | PokemonSettingsCastformSnowy | PokemonSettingsCastformSunny;
  "0352": PokemonSettingsKecleon | PokemonSettingsKecleonNormal;
  "0353": V0353_pokemon_shuppetEntry | V0353_pokemon_shuppet_normalEntry;
  "0354": V0354_pokemon_banetteEntry | V0354_pokemon_banette_normalEntry;
  "0355": V0355_pokemon_duskullEntry | V0355_pokemon_duskull_normalEntry;
  "0356": V0356_pokemon_dusclopsEntry | V0356_pokemon_dusclops_normalEntry;
  "0357": V0357_pokemon_tropiusEntry | V0357_pokemon_tropius_normalEntry;
  "0358": V0358_pokemon_chimechoEntry | V0358_pokemon_chimecho_normalEntry;
  "0359": V0359_pokemon_absolEntry | V0359_pokemon_absol_normalEntry;
  "0360": PokemonSettingsWynaut | PokemonSettingsWynautNormal;
  "0361": V0361_pokemon_snoruntEntry | V0361_pokemon_snorunt_normalEntry;
  "0362": V0362_pokemon_glalieEntry | V0362_pokemon_glalie_normalEntry;
  "0363": PokemonSettingsSpheal | PokemonSettingsSphealNormal;
  "0364": PokemonSettingsSealeo | PokemonSettingsSealeoNormal;
  "0365": PokemonSettingsWalrein | PokemonSettingsWalreinNormal;
  "0366": V0366_pokemon_clamperlEntry | V0366_pokemon_clamperl_normalEntry;
  "0367": PokemonSettingsHuntail | PokemonSettingsHuntailNormal;
  "0368": PokemonSettingsGorebyss | PokemonSettingsGorebyssNormal;
  "0369": V0369_pokemon_relicanthEntry | V0369_pokemon_relicanth_normalEntry;
  "0370": PokemonSettingsLuvdisc | PokemonSettingsLuvdiscNormal;
  "0371": PokemonSettingsBagonNormal | PokemonSettingsBagon;
  "0372": V0372_pokemon_shelgonEntry | V0372_pokemon_shelgon_normalEntry;
  "0373": V0373_pokemon_salamenceEntry | V0373_pokemon_salamence_normalEntry;
  "0374": V0374_pokemon_beldumEntry | V0374_pokemon_beldum_normalEntry;
  "0375": V0375_pokemon_metangEntry | V0375_pokemon_metang_normalEntry;
  "0376": V0376_pokemon_metagrossEntry | V0376_pokemon_metagross_normalEntry;
  "0377": PokemonSettingsRegirock | PokemonSettingsRegirockNormal;
  "0378": PokemonSettingsRegice | PokemonSettingsRegiceNormal;
  "0379": PokemonSettingsRegisteel | PokemonSettingsRegisteelNormal;
  "0380": V0380_pokemon_latiasEntry | V0380_pokemon_latias_normalEntry | V0380_pokemon_latias_sEntry;
  "0381": V0381_pokemon_latiosEntry | V0381_pokemon_latios_normalEntry | V0381_pokemon_latios_sEntry;
  "0382": V0382_pokemon_kyogreEntry | V0382_pokemon_kyogre_normalEntry;
  "0383": V0383_pokemon_groudonEntry | V0383_pokemon_groudon_normalEntry;
  "0384": V0384_pokemon_rayquazaEntry | V0384_pokemon_rayquaza_normalEntry;
  "0385": V0385_pokemon_jirachiEntry | V0385_pokemon_jirachi_normalEntry;
  "0386": V0386_pokemon_deoxysEntry | PokemonSettingsAttack | PokemonSettingsDefense | PokemonSettingsNormal | PokemonSettingsSpeed;
}

export interface PokemonSettingsGen3ByPokemonId {
  "ABSOL": V0359_pokemon_absolEntry | V0359_pokemon_absol_normalEntry;
  "AGGRON": V0306_pokemon_aggronEntry | V0306_pokemon_aggron_normalEntry;
  "ALTARIA": V0334_pokemon_altariaEntry | V0334_pokemon_altaria_normalEntry;
  "ANORITH": PokemonSettingsAnorith | PokemonSettingsAnorithNormal;
  "ARMALDO": PokemonSettingsArmaldo | PokemonSettingsArmaldoNormal;
  "ARON": V0304_pokemon_aronEntry | V0304_pokemon_aron_normalEntry;
  "AZURILL": PokemonSettingsAzurill | PokemonSettingsAzurillNormal;
  "BAGON": PokemonSettingsBagonNormal | PokemonSettingsBagon;
  "BALTOY": PokemonSettingsBaltoy | PokemonSettingsBaltoyNormal;
  "BANETTE": V0354_pokemon_banetteEntry | V0354_pokemon_banette_normalEntry;
  "BARBOACH": PokemonSettingsBarboach | PokemonSettingsBarboachNormal;
  "BEAUTIFLY": PokemonSettingsBeautifly | PokemonSettingsBeautiflyNormal;
  "BELDUM": V0374_pokemon_beldumEntry | V0374_pokemon_beldum_normalEntry;
  "BLAZIKEN": V0257_pokemon_blazikenEntry | V0257_pokemon_blaziken_normalEntry;
  "BRELOOM": V0286_pokemon_breloomEntry | V0286_pokemon_breloom_normalEntry;
  "CACNEA": PokemonSettingsCacnea | PokemonSettingsCacneaNormal;
  "CACTURNE": PokemonSettingsCacturne | PokemonSettingsCacturneNormal;
  "CAMERUPT": V0323_pokemon_cameruptEntry | V0323_pokemon_camerupt_normalEntry;
  "CARVANHA": V0318_pokemon_carvanhaEntry | V0318_pokemon_carvanha_normalEntry;
  "CASCOON": PokemonSettingsCascoon | PokemonSettingsCascoonNormal;
  "CASTFORM": PokemonSettingsCastform | PokemonSettingsCastformNormal | PokemonSettingsCastformRainy | PokemonSettingsCastformSnowy | PokemonSettingsCastformSunny;
  "CHIMECHO": V0358_pokemon_chimechoEntry | V0358_pokemon_chimecho_normalEntry;
  "CLAMPERL": V0366_pokemon_clamperlEntry | V0366_pokemon_clamperl_normalEntry;
  "CLAYDOL": V0344_pokemon_claydolEntry | V0344_pokemon_claydol_normalEntry;
  "COMBUSKEN": PokemonSettingsCombusken | PokemonSettingsCombuskenNormal;
  "CORPHISH": PokemonSettingsCorphishNormal | PokemonSettingsCorphish;
  "CRADILY": V0346_pokemon_cradilyEntry | V0346_pokemon_cradily_normalEntry;
  "CRAWDAUNT": PokemonSettingsCrawdaunt | PokemonSettingsCrawdauntNormal;
  "DELCATTY": PokemonSettingsDelcatty | PokemonSettingsDelcattyNormal;
  "DEOXYS": V0386_pokemon_deoxysEntry | PokemonSettingsAttack | PokemonSettingsDefense | PokemonSettingsNormal | PokemonSettingsSpeed;
  "DUSCLOPS": V0356_pokemon_dusclopsEntry | V0356_pokemon_dusclops_normalEntry;
  "DUSKULL": V0355_pokemon_duskullEntry | V0355_pokemon_duskull_normalEntry;
  "DUSTOX": PokemonSettingsDustox | PokemonSettingsDustoxNormal;
  "ELECTRIKE": V0309_pokemon_electrikeEntry | V0309_pokemon_electrike_normalEntry;
  "EXPLOUD": PokemonSettingsExploud | PokemonSettingsExploudNormal;
  "FEEBAS": V0349_pokemon_feebasEntry | V0349_pokemon_feebas_normalEntry;
  "FLYGON": V0330_pokemon_flygonEntry | V0330_pokemon_flygon_normalEntry;
  "GARDEVOIR": V0282_pokemon_gardevoirEntry | V0282_pokemon_gardevoir_normalEntry;
  "GLALIE": V0362_pokemon_glalieEntry | V0362_pokemon_glalie_normalEntry;
  "GOREBYSS": PokemonSettingsGorebyss | PokemonSettingsGorebyssNormal;
  "GROUDON": V0383_pokemon_groudonEntry | V0383_pokemon_groudon_normalEntry;
  "GROVYLE": V0253_pokemon_grovyleEntry | V0253_pokemon_grovyle_normalEntry;
  "GRUMPIG": PokemonSettingsGrumpig | PokemonSettingsGrumpigNormal;
  "GULPIN": PokemonSettingsGulpin | PokemonSettingsGulpinNormal;
  "HARIYAMA": PokemonSettingsHariyama | PokemonSettingsHariyamaNormal;
  "HUNTAIL": PokemonSettingsHuntail | PokemonSettingsHuntailNormal;
  "ILLUMISE": PokemonSettingsIllumise | PokemonSettingsIllumiseNormal;
  "JIRACHI": V0385_pokemon_jirachiEntry | V0385_pokemon_jirachi_normalEntry;
  "KECLEON": PokemonSettingsKecleon | PokemonSettingsKecleonNormal;
  "KIRLIA": V0281_pokemon_kirliaEntry | V0281_pokemon_kirlia_normalEntry;
  "KYOGRE": V0382_pokemon_kyogreEntry | V0382_pokemon_kyogre_normalEntry;
  "LAIRON": PokemonSettingsLairon | PokemonSettingsLaironNormal;
  "LATIAS": V0380_pokemon_latiasEntry | V0380_pokemon_latias_normalEntry | V0380_pokemon_latias_sEntry;
  "LATIOS": V0381_pokemon_latiosEntry | V0381_pokemon_latios_normalEntry | V0381_pokemon_latios_sEntry;
  "LILEEP": V0345_pokemon_lileepEntry | V0345_pokemon_lileep_normalEntry;
  "LINOONE": PokemonSettingsLinoone | PokemonSettingsLinooneNormal | V0264_pokemon_linoone_galarianEntry;
  "LOMBRE": V0271_pokemon_lombreEntry | V0271_pokemon_lombre_normalEntry;
  "LOTAD": V0270_pokemon_lotadEntry | V0270_pokemon_lotad_normalEntry;
  "LOUDRED": PokemonSettingsLoudred | V0294_pokemon_loudred_normalEntry;
  "LUDICOLO": V0272_pokemon_ludicoloEntry | V0272_pokemon_ludicolo_normalEntry;
  "LUNATONE": V0337_pokemon_lunatoneEntry | V0337_pokemon_lunatone_normalEntry;
  "LUVDISC": PokemonSettingsLuvdisc | PokemonSettingsLuvdiscNormal;
  "MAKUHITA": PokemonSettingsMakuhita | PokemonSettingsMakuhitaNormal;
  "MANECTRIC": V0310_pokemon_manectricEntry | V0310_pokemon_manectric_normalEntry;
  "MARSHTOMP": V0259_pokemon_marshtompEntry | V0259_pokemon_marshtomp_normalEntry;
  "MASQUERAIN": V0284_pokemon_masquerainEntry | V0284_pokemon_masquerain_normalEntry;
  "MAWILE": V0303_pokemon_mawileEntry | V0303_pokemon_mawile_normalEntry;
  "MEDICHAM": V0308_pokemon_medichamEntry | V0308_pokemon_medicham_normalEntry;
  "MEDITITE": V0307_pokemon_medititeEntry | V0307_pokemon_meditite_normalEntry;
  "METAGROSS": V0376_pokemon_metagrossEntry | V0376_pokemon_metagross_normalEntry;
  "METANG": V0375_pokemon_metangEntry | V0375_pokemon_metang_normalEntry;
  "MIGHTYENA": PokemonSettingsMightyena | PokemonSettingsMightyenaNormal;
  "MILOTIC": PokemonSettingsMilotic | PokemonSettingsMiloticNormal;
  "MINUN": PokemonSettingsMinun | PokemonSettingsMinunNormal;
  "MUDKIP": V0258_pokemon_mudkipEntry | V0258_pokemon_mudkip_normalEntry;
  "NINCADA": PokemonSettingsNincada | PokemonSettingsNincadaNormal;
  "NINJASK": PokemonSettingsNinjask | PokemonSettingsNinjaskNormal;
  "NOSEPASS": V0299_pokemon_nosepassEntry | V0299_pokemon_nosepass_normalEntry;
  "NUMEL": V0322_pokemon_numelEntry | V0322_pokemon_numel_normalEntry;
  "NUZLEAF": PokemonSettingsNuzleaf | PokemonSettingsNuzleafNormal;
  "PELIPPER": V0279_pokemon_pelipperEntry | V0279_pokemon_pelipper_normalEntry;
  "PLUSLE": PokemonSettingsPlusle | PokemonSettingsPlusleNormal;
  "POOCHYENA": PokemonSettingsPoochyena | PokemonSettingsPoochyenaNormal;
  "RALTS": V0280_pokemon_raltsEntry | V0280_pokemon_ralts_normalEntry;
  "RAYQUAZA": V0384_pokemon_rayquazaEntry | V0384_pokemon_rayquaza_normalEntry;
  "REGICE": PokemonSettingsRegice | PokemonSettingsRegiceNormal;
  "REGIROCK": PokemonSettingsRegirock | PokemonSettingsRegirockNormal;
  "REGISTEEL": PokemonSettingsRegisteel | PokemonSettingsRegisteelNormal;
  "RELICANTH": V0369_pokemon_relicanthEntry | V0369_pokemon_relicanth_normalEntry;
  "ROSELIA": V0315_pokemon_roseliaEntry | V0315_pokemon_roselia_normalEntry;
  "SABLEYE": V0302_pokemon_sableyeEntry | V0302_pokemon_sableye_costume_2020Entry | V0302_pokemon_sableye_normalEntry;
  "SALAMENCE": V0373_pokemon_salamenceEntry | V0373_pokemon_salamence_normalEntry;
  "SCEPTILE": V0254_pokemon_sceptileEntry | V0254_pokemon_sceptile_normalEntry;
  "SEALEO": PokemonSettingsSealeo | PokemonSettingsSealeoNormal;
  "SEEDOT": V0273_pokemon_seedotEntry | V0273_pokemon_seedot_normalEntry;
  "SEVIPER": V0336_pokemon_seviperEntry | V0336_pokemon_seviper_normalEntry;
  "SHARPEDO": V0319_pokemon_sharpedoEntry | V0319_pokemon_sharpedo_normalEntry;
  "SHEDINJA": V0292_pokemon_shedinjaEntry | V0292_pokemon_shedinja_normalEntry;
  "SHELGON": V0372_pokemon_shelgonEntry | V0372_pokemon_shelgon_normalEntry;
  "SHIFTRY": PokemonSettingsShiftry | PokemonSettingsShiftryNormal;
  "SHROOMISH": V0285_pokemon_shroomishEntry | V0285_pokemon_shroomish_normalEntry;
  "SHUPPET": V0353_pokemon_shuppetEntry | V0353_pokemon_shuppet_normalEntry;
  "SILCOON": PokemonSettingsSilcoon | PokemonSettingsSilcoonNormal;
  "SKITTY": PokemonSettingsSkitty | PokemonSettingsSkittyNormal;
  "SLAKING": V0289_pokemon_slakingEntry | V0289_pokemon_slaking_normalEntry;
  "SLAKOTH": V0287_pokemon_slakothEntry | V0287_pokemon_slakoth_normalEntry;
  "SNORUNT": V0361_pokemon_snoruntEntry | V0361_pokemon_snorunt_normalEntry;
  "SOLROCK": V0338_pokemon_solrockEntry | V0338_pokemon_solrock_normalEntry;
  "SPHEAL": PokemonSettingsSpheal | PokemonSettingsSphealNormal;
  "SPINDA": V0327_pokemon_spindaEntry | V0327_pokemon_spinda_00Entry | V0327_pokemon_spinda_01Entry | V0327_pokemon_spinda_02Entry | V0327_pokemon_spinda_03Entry | V0327_pokemon_spinda_04Entry | V0327_pokemon_spinda_05Entry | V0327_pokemon_spinda_06Entry | V0327_pokemon_spinda_07Entry | V0327_pokemon_spinda_08Entry | V0327_pokemon_spinda_09Entry | V0327_pokemon_spinda_10Entry | V0327_pokemon_spinda_11Entry | V0327_pokemon_spinda_12Entry | V0327_pokemon_spinda_13Entry | V0327_pokemon_spinda_14Entry | V0327_pokemon_spinda_15Entry | V0327_pokemon_spinda_16Entry | V0327_pokemon_spinda_17Entry | V0327_pokemon_spinda_18Entry | V0327_pokemon_spinda_19Entry;
  "SPOINK": PokemonSettingsSpoinkNormal | PokemonSettingsSpoink;
  "SURSKIT": PokemonSettingsSurskit | PokemonSettingsSurskitNormal;
  "SWABLU": V0333_pokemon_swabluEntry | V0333_pokemon_swablu_normalEntry;
  "SWALOT": V0317_pokemon_swalotEntry | V0317_pokemon_swalot_normalEntry;
  "SWAMPERT": V0260_pokemon_swampertEntry | V0260_pokemon_swampert_normalEntry;
  "SWELLOW": V0277_pokemon_swellowEntry | V0277_pokemon_swellow_normalEntry;
  "TAILLOW": V0276_pokemon_taillowEntry | V0276_pokemon_taillow_normalEntry;
  "TORCHIC": PokemonSettingsTorchicNormal | PokemonSettingsTorchic;
  "TORKOAL": V0324_pokemon_torkoalEntry | V0324_pokemon_torkoal_normalEntry;
  "TRAPINCH": PokemonSettingsTrapinch | PokemonSettingsTrapinchNormal;
  "TREECKO": V0252_pokemon_treeckoEntry | PokemonSettingsTreeckoNormal;
  "TROPIUS": V0357_pokemon_tropiusEntry | V0357_pokemon_tropius_normalEntry;
  "VIBRAVA": V0329_pokemon_vibravaEntry | V0329_pokemon_vibrava_normalEntry;
  "VIGOROTH": PokemonSettingsVigoroth | V0288_pokemon_vigoroth_normalEntry;
  "VOLBEAT": PokemonSettingsVolbeat | PokemonSettingsVolbeatNormal;
  "WAILMER": V0320_pokemon_wailmerEntry | V0320_pokemon_wailmer_normalEntry;
  "WAILORD": V0321_pokemon_wailordEntry | V0321_pokemon_wailord_normalEntry;
  "WALREIN": PokemonSettingsWalrein | PokemonSettingsWalreinNormal;
  "WHISCASH": PokemonSettingsWhiscash | PokemonSettingsWhiscashNormal;
  "WHISMUR": V0293_pokemon_whismurEntry | V0293_pokemon_whismur_normalEntry;
  "WINGULL": V0278_pokemon_wingullEntry | V0278_pokemon_wingull_normalEntry;
  "WURMPLE": PokemonSettingsWurmple | PokemonSettingsWurmpleNormal;
  "WYNAUT": PokemonSettingsWynaut | PokemonSettingsWynautNormal;
  "ZANGOOSE": PokemonSettingsZangoose | PokemonSettingsZangooseNormal;
  "ZIGZAGOON": V0263_pokemon_zigzagoonEntry | V0263_pokemon_zigzagoon_galarianEntry | V0263_pokemon_zigzagoon_normalEntry;
}

export type PokemonSettingsGen3MasterfileEntry = V0252_pokemon_treeckoEntry | PokemonSettingsTreeckoNormal | PokemonSettingsTorchicNormal | PokemonSettingsBagonNormal | V0253_pokemon_grovyleEntry | V0253_pokemon_grovyle_normalEntry | V0254_pokemon_sceptileEntry | V0254_pokemon_sceptile_normalEntry | PokemonSettingsTorchic | PokemonSettingsBagon | PokemonSettingsCombusken | PokemonSettingsLairon | PokemonSettingsCombuskenNormal | PokemonSettingsLaironNormal | V0257_pokemon_blazikenEntry | V0257_pokemon_blaziken_normalEntry | V0258_pokemon_mudkipEntry | V0258_pokemon_mudkip_normalEntry | V0259_pokemon_marshtompEntry | V0259_pokemon_marshtomp_normalEntry | V0260_pokemon_swampertEntry | V0260_pokemon_swampert_normalEntry | PokemonSettingsPoochyena | PokemonSettingsTrapinch | PokemonSettingsPoochyenaNormal | PokemonSettingsSpoinkNormal | PokemonSettingsTrapinchNormal | PokemonSettingsCorphishNormal | PokemonSettingsMightyena | PokemonSettingsLinoone | PokemonSettingsMightyenaNormal | PokemonSettingsLinooneNormal | V0263_pokemon_zigzagoonEntry | V0263_pokemon_zigzagoon_galarianEntry | V0263_pokemon_zigzagoon_normalEntry | V0264_pokemon_linoone_galarianEntry | PokemonSettingsWurmple | PokemonSettingsWynaut | PokemonSettingsWurmpleNormal | PokemonSettingsWynautNormal | PokemonSettingsSilcoon | PokemonSettingsCascoon | PokemonSettingsSilcoonNormal | PokemonSettingsCascoonNormal | PokemonSettingsBeautifly | PokemonSettingsDustox | PokemonSettingsNinjask | PokemonSettingsBeautiflyNormal | PokemonSettingsDustoxNormal | PokemonSettingsNinjaskNormal | V0270_pokemon_lotadEntry | V0270_pokemon_lotad_normalEntry | V0271_pokemon_lombreEntry | V0271_pokemon_lombre_normalEntry | V0272_pokemon_ludicoloEntry | V0272_pokemon_ludicolo_normalEntry | V0273_pokemon_seedotEntry | V0273_pokemon_seedot_normalEntry | PokemonSettingsNuzleaf | PokemonSettingsSealeo | PokemonSettingsNuzleafNormal | PokemonSettingsSealeoNormal | PokemonSettingsShiftry | PokemonSettingsShiftryNormal | V0276_pokemon_taillowEntry | V0276_pokemon_taillow_normalEntry | V0277_pokemon_swellowEntry | V0277_pokemon_swellow_normalEntry | V0278_pokemon_wingullEntry | V0278_pokemon_wingull_normalEntry | V0279_pokemon_pelipperEntry | V0279_pokemon_pelipper_normalEntry | V0280_pokemon_raltsEntry | V0280_pokemon_ralts_normalEntry | V0281_pokemon_kirliaEntry | V0281_pokemon_kirlia_normalEntry | V0282_pokemon_gardevoirEntry | V0282_pokemon_gardevoir_normalEntry | PokemonSettingsSurskit | PokemonSettingsNincada | PokemonSettingsAzurill | PokemonSettingsSurskitNormal | PokemonSettingsNincadaNormal | PokemonSettingsAzurillNormal | V0284_pokemon_masquerainEntry | V0284_pokemon_masquerain_normalEntry | V0285_pokemon_shroomishEntry | V0285_pokemon_shroomish_normalEntry | V0286_pokemon_breloomEntry | V0286_pokemon_breloom_normalEntry | V0287_pokemon_slakothEntry | V0287_pokemon_slakoth_normalEntry | PokemonSettingsVigoroth | PokemonSettingsLoudred | V0288_pokemon_vigoroth_normalEntry | V0289_pokemon_slakingEntry | V0289_pokemon_slaking_normalEntry | V0292_pokemon_shedinjaEntry | V0292_pokemon_shedinja_normalEntry | V0293_pokemon_whismurEntry | V0293_pokemon_whismur_normalEntry | V0294_pokemon_loudred_normalEntry | PokemonSettingsExploud | PokemonSettingsHariyama | PokemonSettingsGrumpig | PokemonSettingsMilotic | PokemonSettingsExploudNormal | PokemonSettingsHariyamaNormal | PokemonSettingsGrumpigNormal | PokemonSettingsMiloticNormal | PokemonSettingsMakuhita | PokemonSettingsCacnea | PokemonSettingsMakuhitaNormal | PokemonSettingsCacneaNormal | V0299_pokemon_nosepassEntry | V0299_pokemon_nosepass_normalEntry | PokemonSettingsSkitty | PokemonSettingsGulpin | PokemonSettingsSkittyNormal | PokemonSettingsGulpinNormal | PokemonSettingsDelcatty | PokemonSettingsHuntail | PokemonSettingsGorebyss | PokemonSettingsDelcattyNormal | PokemonSettingsHuntailNormal | PokemonSettingsGorebyssNormal | V0302_pokemon_sableyeEntry | V0302_pokemon_sableye_costume_2020Entry | V0302_pokemon_sableye_normalEntry | V0303_pokemon_mawileEntry | V0303_pokemon_mawile_normalEntry | V0304_pokemon_aronEntry | V0304_pokemon_aron_normalEntry | V0306_pokemon_aggronEntry | V0306_pokemon_aggron_normalEntry | V0307_pokemon_medititeEntry | V0307_pokemon_meditite_normalEntry | V0308_pokemon_medichamEntry | V0308_pokemon_medicham_normalEntry | V0309_pokemon_electrikeEntry | V0309_pokemon_electrike_normalEntry | V0310_pokemon_manectricEntry | V0310_pokemon_manectric_normalEntry | PokemonSettingsPlusle | PokemonSettingsMinun | PokemonSettingsVolbeat | PokemonSettingsIllumise | PokemonSettingsZangoose | PokemonSettingsPlusleNormal | PokemonSettingsMinunNormal | PokemonSettingsVolbeatNormal | PokemonSettingsIllumiseNormal | PokemonSettingsZangooseNormal | V0315_pokemon_roseliaEntry | V0315_pokemon_roselia_normalEntry | V0317_pokemon_swalotEntry | V0317_pokemon_swalot_normalEntry | V0318_pokemon_carvanhaEntry | V0318_pokemon_carvanha_normalEntry | V0319_pokemon_sharpedoEntry | V0319_pokemon_sharpedo_normalEntry | V0320_pokemon_wailmerEntry | V0320_pokemon_wailmer_normalEntry | V0321_pokemon_wailordEntry | V0321_pokemon_wailord_normalEntry | V0322_pokemon_numelEntry | V0322_pokemon_numel_normalEntry | V0323_pokemon_cameruptEntry | V0323_pokemon_camerupt_normalEntry | V0324_pokemon_torkoalEntry | V0324_pokemon_torkoal_normalEntry | PokemonSettingsSpoink | PokemonSettingsCorphish | V0327_pokemon_spindaEntry | V0327_pokemon_spinda_00Entry | V0327_pokemon_spinda_01Entry | V0327_pokemon_spinda_02Entry | V0327_pokemon_spinda_03Entry | V0327_pokemon_spinda_04Entry | V0327_pokemon_spinda_05Entry | V0327_pokemon_spinda_06Entry | V0327_pokemon_spinda_07Entry | V0327_pokemon_spinda_08Entry | V0327_pokemon_spinda_09Entry | V0327_pokemon_spinda_10Entry | V0327_pokemon_spinda_11Entry | V0327_pokemon_spinda_12Entry | V0327_pokemon_spinda_13Entry | V0327_pokemon_spinda_14Entry | V0327_pokemon_spinda_15Entry | V0327_pokemon_spinda_16Entry | V0327_pokemon_spinda_17Entry | V0327_pokemon_spinda_18Entry | V0327_pokemon_spinda_19Entry | V0329_pokemon_vibravaEntry | V0329_pokemon_vibrava_normalEntry | V0330_pokemon_flygonEntry | V0330_pokemon_flygon_normalEntry | PokemonSettingsCacturne | PokemonSettingsCrawdaunt | PokemonSettingsArmaldo | PokemonSettingsCacturneNormal | PokemonSettingsCrawdauntNormal | PokemonSettingsArmaldoNormal | V0333_pokemon_swabluEntry | V0333_pokemon_swablu_normalEntry | V0334_pokemon_altariaEntry | V0334_pokemon_altaria_normalEntry | V0336_pokemon_seviperEntry | V0336_pokemon_seviper_normalEntry | V0337_pokemon_lunatoneEntry | V0337_pokemon_lunatone_normalEntry | V0338_pokemon_solrockEntry | V0338_pokemon_solrock_normalEntry | PokemonSettingsBarboach | PokemonSettingsBaltoy | PokemonSettingsBarboachNormal | PokemonSettingsBaltoyNormal | PokemonSettingsWhiscash | PokemonSettingsWhiscashNormal | V0344_pokemon_claydolEntry | V0344_pokemon_claydol_normalEntry | V0345_pokemon_lileepEntry | V0345_pokemon_lileep_normalEntry | V0346_pokemon_cradilyEntry | V0346_pokemon_cradily_normalEntry | PokemonSettingsAnorith | PokemonSettingsSpheal | PokemonSettingsAnorithNormal | PokemonSettingsSphealNormal | V0349_pokemon_feebasEntry | V0349_pokemon_feebas_normalEntry | PokemonSettingsCastform | PokemonSettingsLuvdisc | PokemonSettingsCastformNormal | PokemonSettingsCastformRainy | PokemonSettingsCastformSnowy | PokemonSettingsCastformSunny | PokemonSettingsLuvdiscNormal | PokemonSettingsKecleon | PokemonSettingsKecleonNormal | V0353_pokemon_shuppetEntry | V0353_pokemon_shuppet_normalEntry | V0354_pokemon_banetteEntry | V0354_pokemon_banette_normalEntry | V0355_pokemon_duskullEntry | V0355_pokemon_duskull_normalEntry | V0356_pokemon_dusclopsEntry | V0356_pokemon_dusclops_normalEntry | V0357_pokemon_tropiusEntry | V0357_pokemon_tropius_normalEntry | V0358_pokemon_chimechoEntry | V0358_pokemon_chimecho_normalEntry | V0359_pokemon_absolEntry | V0359_pokemon_absol_normalEntry | V0361_pokemon_snoruntEntry | V0361_pokemon_snorunt_normalEntry | V0362_pokemon_glalieEntry | V0362_pokemon_glalie_normalEntry | PokemonSettingsWalrein | PokemonSettingsWalreinNormal | V0366_pokemon_clamperlEntry | V0366_pokemon_clamperl_normalEntry | V0369_pokemon_relicanthEntry | V0369_pokemon_relicanth_normalEntry | V0372_pokemon_shelgonEntry | V0372_pokemon_shelgon_normalEntry | V0373_pokemon_salamenceEntry | V0373_pokemon_salamence_normalEntry | V0374_pokemon_beldumEntry | V0374_pokemon_beldum_normalEntry | V0375_pokemon_metangEntry | V0375_pokemon_metang_normalEntry | V0376_pokemon_metagrossEntry | V0376_pokemon_metagross_normalEntry | PokemonSettingsRegirock | PokemonSettingsRegice | PokemonSettingsRegisteel | PokemonSettingsRegirockNormal | PokemonSettingsRegiceNormal | PokemonSettingsRegisteelNormal | V0380_pokemon_latiasEntry | V0380_pokemon_latias_normalEntry | V0380_pokemon_latias_sEntry | V0381_pokemon_latiosEntry | V0381_pokemon_latios_normalEntry | V0381_pokemon_latios_sEntry | V0382_pokemon_kyogreEntry | V0382_pokemon_kyogre_normalEntry | V0383_pokemon_groudonEntry | V0383_pokemon_groudon_normalEntry | V0384_pokemon_rayquazaEntry | V0384_pokemon_rayquaza_normalEntry | V0385_pokemon_jirachiEntry | V0385_pokemon_jirachi_normalEntry | V0386_pokemon_deoxysEntry | PokemonSettingsAttack | PokemonSettingsDefense | PokemonSettingsNormal | PokemonSettingsSpeed;

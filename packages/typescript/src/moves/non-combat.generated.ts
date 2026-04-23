/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: moves/non-combat
// Filters: all
// Entries emitted: 9

export interface Non_combat_v0388_move_spacial_renddatanoncombatmovesettingsbonuseffectspacebonus {
  encounterRangeMeters: number;
  pokemonVisibleRangeMeters: number;
  serverAllowableEncounterRangeMeters: number;
}
export interface Non_combat_v0388_move_spacial_renddatanoncombatmovesettingsbonuseffect {
  spaceBonus: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingsbonuseffectspacebonus;
}
export interface Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost {
  candyCost: number;
  stardustCost: number;
}
export interface Non_combat_v0388_move_spacial_renddatanoncombatmovesettings {
  bonusEffect: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0388_move_spacial_renddata {
  nonCombatMoveSettings: Non_combat_v0388_move_spacial_renddatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0388_move_spacial_rendEntry {
  templateId: "NON_COMBAT_V0388_MOVE_SPACIAL_REND";
  data: Non_combat_v0388_move_spacial_renddata;
}
export interface Non_combat_v0394_move_roar_of_timedatanoncombatmovesettingsbonuseffecttimebonus {
  affectedItems: (string)[];
}
export interface Non_combat_v0394_move_roar_of_timedatanoncombatmovesettingsbonuseffect {
  timeBonus: Non_combat_v0394_move_roar_of_timedatanoncombatmovesettingsbonuseffecttimebonus;
}
export interface Non_combat_v0394_move_roar_of_timedatanoncombatmovesettings {
  bonusEffect: Non_combat_v0394_move_roar_of_timedatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0394_move_roar_of_timedata {
  nonCombatMoveSettings: Non_combat_v0394_move_roar_of_timedatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0394_move_roar_of_timeEntry {
  templateId: "NON_COMBAT_V0394_MOVE_ROAR_OF_TIME";
  data: Non_combat_v0394_move_roar_of_timedata;
}
export interface Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettingsbonuseffectdaynightbonus {
  incenseItem: string;
}
export interface Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettingsbonuseffect {
  dayNightBonus: Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettingsbonuseffectdaynightbonus;
}
export interface Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettings {
  bonusEffect: Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0404_move_sunsteel_strikedata {
  nonCombatMoveSettings: Non_combat_v0404_move_sunsteel_strikedatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0404_move_sunsteel_strikeEntry {
  templateId: "NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE";
  data: Non_combat_v0404_move_sunsteel_strikedata;
}
export interface Non_combat_v0405_move_moongeist_beamEntry {
  templateId: "NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM";
  data: Non_combat_v0404_move_sunsteel_strikedata;
}
export interface Non_combat_v0466_move_freeze_shockdatanoncombatmovesettingsbonuseffectslowfreezebonus {
  catchCircleOuterTimeScaleOverride: number;
  catchCircleSpeedChangeThreshold: number;
  catchCircleTimeScaleOverride: number;
  catchRateIncreaseMultiplier: number;
}
export interface Non_combat_v0466_move_freeze_shockdatanoncombatmovesettingsbonuseffect {
  slowFreezeBonus: Non_combat_v0466_move_freeze_shockdatanoncombatmovesettingsbonuseffectslowfreezebonus;
}
export interface Non_combat_v0466_move_freeze_shockdatanoncombatmovesettings {
  bonusEffect: Non_combat_v0466_move_freeze_shockdatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0466_move_freeze_shockdata {
  nonCombatMoveSettings: Non_combat_v0466_move_freeze_shockdatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0466_move_freeze_shockEntry {
  templateId: "NON_COMBAT_V0466_MOVE_FREEZE_SHOCK";
  data: Non_combat_v0466_move_freeze_shockdata;
}
export interface Non_combat_v0467_move_ice_burnEntry {
  templateId: "NON_COMBAT_V0467_MOVE_ICE_BURN";
  data: Non_combat_v0466_move_freeze_shockdata;
}
export interface Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffectattackdefensebonusattributesitem {
  attackMultiplier: number;
  combatTypes: (string)[];
}
export interface Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffectattackdefensebonus {
  attributes: (Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffectattackdefensebonusattributesitem)[];
}
export interface Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffect {
  attackDefenseBonus: Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffectattackdefensebonus;
}
export interface Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettings {
  bonusEffect: Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0469_move_behemoth_bladedata {
  nonCombatMoveSettings: Non_combat_v0469_move_behemoth_bladedatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0469_move_behemoth_bladeEntry {
  templateId: "NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE";
  data: Non_combat_v0469_move_behemoth_bladedata;
}
export interface Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffectattackdefensebonusattributesitem {
  combatTypes: (string)[];
  defenseMultiplier: number;
}
export interface Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffectattackdefensebonus {
  attributes: (Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffectattackdefensebonusattributesitem)[];
}
export interface Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffect {
  attackDefenseBonus: Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffectattackdefensebonus;
}
export interface Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettings {
  bonusEffect: Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0470_move_behemoth_bashdata {
  nonCombatMoveSettings: Non_combat_v0470_move_behemoth_bashdatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0470_move_behemoth_bashEntry {
  templateId: "NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH";
  data: Non_combat_v0470_move_behemoth_bashdata;
}
export interface Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettingsbonuseffectmaxmovebonus {
  excludedPokedexIds: (string)[];
  numAllMaxMoveLevelIncrease: number;
}
export interface Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettingsbonuseffect {
  maxMoveBonus: Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettingsbonuseffectmaxmovebonus;
}
export interface Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettings {
  bonusEffect: Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettingsbonuseffect;
  bonusType: string;
  cost: Non_combat_v0388_move_spacial_renddatanoncombatmovesettingscost;
  durationMs: string;
  enableMultiUse: boolean;
  enableNonCombatMove: boolean;
  extraDurationMs: string;
  uniqueId: string;
}
export interface Non_combat_v0482_move_dynamax_cannondata {
  nonCombatMoveSettings: Non_combat_v0482_move_dynamax_cannondatanoncombatmovesettings;
  templateId: string;
}
export interface Non_combat_v0482_move_dynamax_cannonEntry {
  templateId: "NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON";
  data: Non_combat_v0482_move_dynamax_cannondata;
}

export interface MovesNonCombatMasterfileByTemplateId {
  "NON_COMBAT_V0388_MOVE_SPACIAL_REND": Non_combat_v0388_move_spacial_rendEntry;
  "NON_COMBAT_V0394_MOVE_ROAR_OF_TIME": Non_combat_v0394_move_roar_of_timeEntry;
  "NON_COMBAT_V0404_MOVE_SUNSTEEL_STRIKE": Non_combat_v0404_move_sunsteel_strikeEntry;
  "NON_COMBAT_V0405_MOVE_MOONGEIST_BEAM": Non_combat_v0405_move_moongeist_beamEntry;
  "NON_COMBAT_V0466_MOVE_FREEZE_SHOCK": Non_combat_v0466_move_freeze_shockEntry;
  "NON_COMBAT_V0467_MOVE_ICE_BURN": Non_combat_v0467_move_ice_burnEntry;
  "NON_COMBAT_V0469_MOVE_BEHEMOTH_BLADE": Non_combat_v0469_move_behemoth_bladeEntry;
  "NON_COMBAT_V0470_MOVE_BEHEMOTH_BASH": Non_combat_v0470_move_behemoth_bashEntry;
  "NON_COMBAT_V0482_MOVE_DYNAMAX_CANNON": Non_combat_v0482_move_dynamax_cannonEntry;
}

export type MovesNonCombatMasterfileEntry = Non_combat_v0388_move_spacial_rendEntry | Non_combat_v0394_move_roar_of_timeEntry | Non_combat_v0404_move_sunsteel_strikeEntry | Non_combat_v0405_move_moongeist_beamEntry | Non_combat_v0466_move_freeze_shockEntry | Non_combat_v0467_move_ice_burnEntry | Non_combat_v0469_move_behemoth_bladeEntry | Non_combat_v0470_move_behemoth_bashEntry | Non_combat_v0482_move_dynamax_cannonEntry;

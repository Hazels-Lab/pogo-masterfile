/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/extended/shared
// Filters: all
// Entries emitted: 311

export interface PokemonExtendedShared<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedSharedData<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedSharedPokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedSharedPokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedSharedPokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedSharedPokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedSharedData<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedSharedPokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared3<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared3Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared3PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared3PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared3PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared3PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared3Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared3PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared6<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared6Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared6PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared6PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared6PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared6PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TUniqueId>;
  tempEvoId: string;
}
export interface PokemonExtendedShared6PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: (unknown)[];
  sizeSettings: PokemonExtendedShared6PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  tempEvoOverrides: (PokemonExtendedShared6PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TUniqueId>)[];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared6Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared6PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared7<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared7Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared7PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared7PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared7PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared7PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoId: string;
}
export interface PokemonExtendedShared7PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: (unknown)[];
  form: TForm;
  sizeSettings: PokemonExtendedShared7PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoOverrides: (PokemonExtendedShared7PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TForm, TUniqueId>)[];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared7Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared7PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared10<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared10Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared10PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared10PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared10PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared10PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared10Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared10PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared12<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared12Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared12PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared12PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared12PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared12PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared12Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared12PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared16<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared16Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared16PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared16PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared16PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared16PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TUniqueId>;
  tempEvoId: string;
}
export interface PokemonExtendedShared16PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared16PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared16PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared16Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared16PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared17<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared17Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared17PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared17PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared17PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared17PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoId: string;
}
export interface PokemonExtendedShared17PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  form: TForm;
  sizeSettings: PokemonExtendedShared17PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared17PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared17Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared17PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared19<TTemplateId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared19Data<TTemplateId>;
}

export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string> {
  scale: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string> {
  scale: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId>;
  maxEncounterVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId>;
  maxStationVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId>;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2Camera<TTemplateId extends string> {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2CatchOverrideSettings<TTemplateId extends string> {
  collisionHeadRadiusM: number;
  collisionRadiusM: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleTrainerVisualSettings<TTemplateId extends string> {
  xOffset: number;
  yOffset: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleVisualSettings<TTemplateId extends string> {
  scale: number;
  xOffset: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxEncounterVisualSettings<TTemplateId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxStationVisualSettings<TTemplateId extends string> {
  scale: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2<TTemplateId extends string> {
  averageHeightM: number;
  breadMode: "BREAD_DOUGH_MODE";
  camera: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2Camera<TTemplateId>;
  catchOverrideSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2CatchOverrideSettings<TTemplateId>;
  maxBattleTrainerVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleTrainerVisualSettings<TTemplateId>;
  maxBattleVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleVisualSettings<TTemplateId>;
  maxEncounterVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxEncounterVisualSettings<TTemplateId>;
  maxStationVisualSettings: PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxStationVisualSettings<TTemplateId>;
  modelHeight: number;
  modelScaleV2: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettingsSizeSettings<TTemplateId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared19PokemonExtendedSettings<TTemplateId extends string> {
  breadOverrides: [
  PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId>,
  PokemonExtendedShared19PokemonExtendedSettingsBreadOverridesBreadOverridesItem2<TTemplateId>,
];
  form: number;
  sizeSettings: PokemonExtendedShared19PokemonExtendedSettingsSizeSettings<TTemplateId>;
  uniqueId: "PIKACHU";
}
export interface PokemonExtendedShared19Data<TTemplateId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared19PokemonExtendedSettings<TTemplateId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared21<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared21Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared21PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared21PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared21PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared21PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared21Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared21PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared22<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared22Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared22PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared22PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared22PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared22PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared22Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared22PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared24<TTemplateId extends string, TForm extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared24Data<TTemplateId, TForm>;
}

export interface PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string> {

}
export interface PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm>;
  maxBattleVisualSettings: PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm>;
  maxEncounterVisualSettings: PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm>;
  maxStationVisualSettings: PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm>;
}
export interface PokemonExtendedShared24PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared24PokemonExtendedSettings<TTemplateId extends string, TForm extends string> {
  breadOverrides: [
  PokemonExtendedShared24PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared24PokemonExtendedSettingsSizeSettings<TTemplateId, TForm>;
  uniqueId: "MEOWTH";
}
export interface PokemonExtendedShared24Data<TTemplateId extends string, TForm extends string> {
  pokemonExtendedSettings: PokemonExtendedShared24PokemonExtendedSettings<TTemplateId, TForm>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared26<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared26Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared26PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared26PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared26PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared26PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared26PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared26PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared26Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared26PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared27<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared27Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleVisualSettings: PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared27PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared27PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared27PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared27PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared27PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared27PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared27Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared27PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared34<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared34Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared34PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared34PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared34PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared34PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared34Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared34PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared35<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared35Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared35PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared35PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared35PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared35PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared35Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared35PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared40<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared40Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared40PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  disablePokedexRecordDisplayForForms: boolean;
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared40PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared40PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared40Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared40PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared44<TTemplateId extends string, TForm extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared44Data<TTemplateId, TForm>;
}

export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxLobbyVisualSettings<TTemplateId extends string, TForm extends string> {
  cameraDistance: number;
  scale: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm>;
  maxBattleVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm>;
  maxEncounterVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm>;
  maxLobbyVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxLobbyVisualSettings<TTemplateId, TForm>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TForm>;
  maxStationVisualSettings: PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm>;
}
export interface PokemonExtendedShared44PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared44PokemonExtendedSettings<TTemplateId extends string, TForm extends string> {
  breadOverrides: [
  PokemonExtendedShared44PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared44PokemonExtendedSettingsSizeSettings<TTemplateId, TForm>;
  uniqueId: "HO_OH";
}
export interface PokemonExtendedShared44Data<TTemplateId extends string, TForm extends string> {
  pokemonExtendedSettings: PokemonExtendedShared44PokemonExtendedSettings<TTemplateId, TForm>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared45<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared45Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared45PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared45PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared45PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared45PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared45PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared45PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared45Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared45PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared46<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared46Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared46PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared46PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared46PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared46PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared46PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared46PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared46Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared46PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared47<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared47Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
  yOffset: number;
}
export interface PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared47PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared47PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared47PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared47PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared47Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared47PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared48<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared48Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
  yOffset: number;
}
export interface PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared48PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared48PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared48PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared48PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared48Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared48PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared49<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared49Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared49PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared49PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared49PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared49PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared49Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared49PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared50<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared50Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxPowerspotTopperVisualSettings: PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxPowerspotTopperVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared50PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared50PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared50PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared50PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared50Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared50PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared55<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared55Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TUniqueId>;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared55PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared55PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared55PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared55PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TUniqueId>,
];
  sizeSettings: PokemonExtendedShared55PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared55PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared55Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared55PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared56<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared56Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  scale: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxBattleVisualSettings: PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxEncounterVisualSettings: PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm, TUniqueId>;
  maxStationVisualSettings: PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm, TUniqueId>;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared56PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared56PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItemSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoId: "TEMP_EVOLUTION_MEGA";
}
export interface PokemonExtendedShared56PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  breadOverrides: [
  PokemonExtendedShared56PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared56PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  tempEvoOverrides: [
  PokemonExtendedShared56PokemonExtendedSettingsTempEvoOverridesTempEvoOverridesItem<TTemplateId, TForm, TUniqueId>,
];
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared56Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared56PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared67<TTemplateId extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared67Data<TTemplateId, TUniqueId>;
}

export interface PokemonExtendedShared67PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TUniqueId extends string> {
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
export interface PokemonExtendedShared67PokemonExtendedSettings<TTemplateId extends string, TUniqueId extends string> {
  sizeSettings: PokemonExtendedShared67PokemonExtendedSettingsSizeSettings<TTemplateId, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared67Data<TTemplateId extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared67PokemonExtendedSettings<TTemplateId, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared68<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared68Data<TTemplateId, TForm, TUniqueId>;
}

export interface PokemonExtendedShared68PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
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
export interface PokemonExtendedShared68PokemonExtendedSettings<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  form: TForm;
  sizeSettings: PokemonExtendedShared68PokemonExtendedSettingsSizeSettings<TTemplateId, TForm, TUniqueId>;
  uniqueId: TUniqueId;
}
export interface PokemonExtendedShared68Data<TTemplateId extends string, TForm extends string, TUniqueId extends string> {
  pokemonExtendedSettings: PokemonExtendedShared68PokemonExtendedSettings<TTemplateId, TForm, TUniqueId>;
  templateId: TTemplateId;
}

export interface PokemonExtendedShared76<TTemplateId extends string, TForm extends string> {
  templateId: TTemplateId;
  data: PokemonExtendedShared76Data<TTemplateId, TForm>;
}

export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId extends string, TForm extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId extends string, TForm extends string> {
  breadMode: "BREAD_MODE";
  maxBattleTrainerVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleTrainerVisualSettings<TTemplateId, TForm>;
  maxBattleVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxBattleVisualSettings<TTemplateId, TForm>;
  maxEncounterVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxEncounterVisualSettings<TTemplateId, TForm>;
  maxStationVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItemMaxStationVisualSettings<TTemplateId, TForm>;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2Camera<TTemplateId extends string, TForm extends string> {
  cylinderHeightM: number;
  cylinderRadiusM: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleTrainerVisualSettings<TTemplateId extends string, TForm extends string> {
  xOffset: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
  yOffset: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxEncounterVisualSettings<TTemplateId extends string, TForm extends string> {
  cameraDistance: number;
  maxReticleSize: number;
  scale: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxStationVisualSettings<TTemplateId extends string, TForm extends string> {
  scale: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2SizeSettings<TTemplateId extends string, TForm extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2<TTemplateId extends string, TForm extends string> {
  averageHeightM: number;
  breadMode: "BREAD_DOUGH_MODE";
  camera: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2Camera<TTemplateId, TForm>;
  maxBattleTrainerVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleTrainerVisualSettings<TTemplateId, TForm>;
  maxBattleVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxBattleVisualSettings<TTemplateId, TForm>;
  maxEncounterVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxEncounterVisualSettings<TTemplateId, TForm>;
  maxStationVisualSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2MaxStationVisualSettings<TTemplateId, TForm>;
  modelHeight: number;
  modelScaleV2: number;
  sizeSettings: PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2SizeSettings<TTemplateId, TForm>;
}
export interface PokemonExtendedShared76PokemonExtendedSettingsSizeSettings<TTemplateId extends string, TForm extends string> {
  mLowerBound: number;
  mUpperBound: number;
  xlUpperBound: number;
  xsLowerBound: number;
  xxlUpperBound: number;
  xxsLowerBound: number;
}
export interface PokemonExtendedShared76PokemonExtendedSettings<TTemplateId extends string, TForm extends string> {
  breadOverrides: [
  PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem<TTemplateId, TForm>,
  PokemonExtendedShared76PokemonExtendedSettingsBreadOverridesBreadOverridesItem2<TTemplateId, TForm>,
];
  form: TForm;
  sizeSettings: PokemonExtendedShared76PokemonExtendedSettingsSizeSettings<TTemplateId, TForm>;
  uniqueId: "TOXTRICITY";
}
export interface PokemonExtendedShared76Data<TTemplateId extends string, TForm extends string> {
  pokemonExtendedSettings: PokemonExtendedShared76PokemonExtendedSettings<TTemplateId, TForm>;
  templateId: TTemplateId;
}

/* eslint-disable */
// Auto-generated from GAME_MASTER.json
// Do not edit by hand.
// Group: pokemon/type-chart
// Filters: all
// Entries emitted: 18

export interface PokemonType<TTemplateId extends string> {
  templateId: TTemplateId;
  data: PokemonTypeData<TTemplateId>;
}

export interface PokemonTypeTypeEffective<TTemplateId extends string> {
  attackScalar: [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];
  attackType: TTemplateId;
}
export interface PokemonTypeData<TTemplateId extends string> {
  templateId: TTemplateId;
  typeEffective: PokemonTypeTypeEffective<TTemplateId>;
}

export type PokemonTypeBug = PokemonType<"POKEMON_TYPE_BUG">;
export type PokemonTypeDark = PokemonType<"POKEMON_TYPE_DARK">;
export type PokemonTypeDragon = PokemonType<"POKEMON_TYPE_DRAGON">;
export type PokemonTypeElectric = PokemonType<"POKEMON_TYPE_ELECTRIC">;
export type PokemonTypeFairy = PokemonType<"POKEMON_TYPE_FAIRY">;
export type PokemonTypeFighting = PokemonType<"POKEMON_TYPE_FIGHTING">;
export type PokemonTypeFire = PokemonType<"POKEMON_TYPE_FIRE">;
export type PokemonTypeFlying = PokemonType<"POKEMON_TYPE_FLYING">;
export type PokemonTypeGhost = PokemonType<"POKEMON_TYPE_GHOST">;
export type PokemonTypeGrass = PokemonType<"POKEMON_TYPE_GRASS">;
export type PokemonTypeGround = PokemonType<"POKEMON_TYPE_GROUND">;
export type PokemonTypeIce = PokemonType<"POKEMON_TYPE_ICE">;
export type PokemonTypeNormal = PokemonType<"POKEMON_TYPE_NORMAL">;
export type PokemonTypePoison = PokemonType<"POKEMON_TYPE_POISON">;
export type PokemonTypePsychic = PokemonType<"POKEMON_TYPE_PSYCHIC">;
export type PokemonTypeRock = PokemonType<"POKEMON_TYPE_ROCK">;
export type PokemonTypeSteel = PokemonType<"POKEMON_TYPE_STEEL">;
export type PokemonTypeWater = PokemonType<"POKEMON_TYPE_WATER">;

export type PokemonTypeMasterfileEntry = PokemonTypeBug | PokemonTypeDark | PokemonTypeDragon | PokemonTypeElectric | PokemonTypeFairy | PokemonTypeFighting | PokemonTypeFire | PokemonTypeFlying | PokemonTypeGhost | PokemonTypeGrass | PokemonTypeGround | PokemonTypeIce | PokemonTypeNormal | PokemonTypePoison | PokemonTypePsychic | PokemonTypeRock | PokemonTypeSteel | PokemonTypeWater;
export type PokemonTypeTemplateId = PokemonTypeMasterfileEntry["templateId"];

export interface PokemonTypeChartMasterfileByTemplateId {
  "POKEMON_TYPE_BUG": PokemonTypeBug;
  "POKEMON_TYPE_DARK": PokemonTypeDark;
  "POKEMON_TYPE_DRAGON": PokemonTypeDragon;
  "POKEMON_TYPE_ELECTRIC": PokemonTypeElectric;
  "POKEMON_TYPE_FAIRY": PokemonTypeFairy;
  "POKEMON_TYPE_FIGHTING": PokemonTypeFighting;
  "POKEMON_TYPE_FIRE": PokemonTypeFire;
  "POKEMON_TYPE_FLYING": PokemonTypeFlying;
  "POKEMON_TYPE_GHOST": PokemonTypeGhost;
  "POKEMON_TYPE_GRASS": PokemonTypeGrass;
  "POKEMON_TYPE_GROUND": PokemonTypeGround;
  "POKEMON_TYPE_ICE": PokemonTypeIce;
  "POKEMON_TYPE_NORMAL": PokemonTypeNormal;
  "POKEMON_TYPE_POISON": PokemonTypePoison;
  "POKEMON_TYPE_PSYCHIC": PokemonTypePsychic;
  "POKEMON_TYPE_ROCK": PokemonTypeRock;
  "POKEMON_TYPE_STEEL": PokemonTypeSteel;
  "POKEMON_TYPE_WATER": PokemonTypeWater;
}

export type PokemonTypeChartMasterfileEntry = PokemonTypeBug | PokemonTypeDark | PokemonTypeDragon | PokemonTypeElectric | PokemonTypeFairy | PokemonTypeFighting | PokemonTypeFire | PokemonTypeFlying | PokemonTypeGhost | PokemonTypeGrass | PokemonTypeGround | PokemonTypeIce | PokemonTypeNormal | PokemonTypePoison | PokemonTypePsychic | PokemonTypeRock | PokemonTypeSteel | PokemonTypeWater;

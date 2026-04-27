// Generated from Pokémon GO masterfile — group "pokemonFamily" entries barrel.

import type { PokemonFamilyBaseMasterfileEntry } from "./base";
import type { PokemonFamilyMegaEvolvablePokemonIdMasterfileEntry } from "./mega-evolvable-pokemon-id";
import type { PokemonFamilyMegaEvolvablePokemonIdsMasterfileEntry } from "./mega-evolvable-pokemon-ids";

export type * from "./base";
export type * from "./mega-evolvable-pokemon-id";
export type * from "./mega-evolvable-pokemon-ids";

export type PokemonFamilyMasterfileEntry =
	| PokemonFamilyBaseMasterfileEntry
	| PokemonFamilyMegaEvolvablePokemonIdMasterfileEntry
	| PokemonFamilyMegaEvolvablePokemonIdsMasterfileEntry;

export type PokemonFamilyTemplateID = PokemonFamilyMasterfileEntry["templateId"];

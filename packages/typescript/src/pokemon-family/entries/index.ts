// Generated from Pokémon GO masterfile — group "pokemonFamily" entries barrel.

import type { PokemonFamilyMegaEvolvablePokemonIdMasterfileEntry } from "./mega-evolvable-pokemon-id";
import type { PokemonFamilyMegaEvolvablePokemonIdsMasterfileEntry } from "./mega-evolvable-pokemon-ids";
import type { PokemonFamilyMiscMasterfileEntry } from "./misc";

export type * from "./mega-evolvable-pokemon-id";
export type * from "./mega-evolvable-pokemon-ids";
export type * from "./misc";

export type PokemonFamilyMasterfileEntry =
	| PokemonFamilyMegaEvolvablePokemonIdMasterfileEntry
	| PokemonFamilyMegaEvolvablePokemonIdsMasterfileEntry
	| PokemonFamilyMiscMasterfileEntry;

export type PokemonFamilyTemplateID = PokemonFamilyMasterfileEntry["templateId"];

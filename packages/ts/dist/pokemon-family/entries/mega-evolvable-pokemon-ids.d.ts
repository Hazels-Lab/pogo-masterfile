// Generated from Pokémon GO masterfile — group "pokemonFamily", split "mega-evolvable-pokemon-ids", 4 entries.

import type { S } from "../../_utils";
import type { PokemonFamily } from "../types";

export type PokemonFamilyV0004FamilyCharmander = S<
	PokemonFamily<
		"V0004_FAMILY_CHARMANDER",
		{
			familyId: "FAMILY_CHARMANDER";
			megaEvolvablePokemonIds: ["CHARIZARD"];
		}
	>
>;
export type PokemonFamilyV0025FamilyPikachu = S<
	PokemonFamily<
		"V0025_FAMILY_PIKACHU",
		{
			familyId: "FAMILY_PIKACHU";
			megaEvolvablePokemonIds: ["RAICHU"];
		}
	>
>;
export type PokemonFamilyV0150FamilyMewtwo = S<
	PokemonFamily<
		"V0150_FAMILY_MEWTWO",
		{
			familyId: "FAMILY_MEWTWO";
			megaEvolvablePokemonIds: ["MEWTWO"];
		}
	>
>;
export type PokemonFamilyV0280FamilyRalts = S<
	PokemonFamily<
		"V0280_FAMILY_RALTS",
		{
			familyId: "FAMILY_RALTS";
			megaEvolvablePokemonIds: ["GARDEVOIR", "GALLADE"];
		}
	>
>;

export type PokemonFamilyMegaEvolvablePokemonIdsMasterfileEntry =
	| PokemonFamilyV0004FamilyCharmander
	| PokemonFamilyV0025FamilyPikachu
	| PokemonFamilyV0150FamilyMewtwo
	| PokemonFamilyV0280FamilyRalts;

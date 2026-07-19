// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "altaria", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0334PokemonAltaria = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0334_POKEMON_ALTARIA",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "ALTARIA";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0334PokemonAltaria = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0334_POKEMON_ALTARIA",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "ALTARIA";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0334PokemonAltaria = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0334_POKEMON_ALTARIA",
		{
			cooldown: {
				bypassCostInitial: 30;
				durationMs: "432000000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
				sameTypeExtraCatchCandyXlChance: 0.1;
				sameTypeExtraCatchXp: 50;
			};
			level: 2;
			megaEnergyCostPerPoint: 160;
			pokemonId: "ALTARIA";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0334PokemonAltaria = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0334_POKEMON_ALTARIA",
		{
			cooldown: {
				bypassCostInitial: 15;
				durationMs: "259200000";
			};
			effects: {
				sameTypeExtraCatchCandy: 2;
				sameTypeExtraCatchCandyXlChance: 0.25;
				sameTypeExtraCatchXp: 100;
			};
			level: 3;
			megaEnergyCostPerPoint: 80;
			pokemonId: "ALTARIA";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsAltariaMasterfileEntry =
	| MegaEvoLevelSettings0V0334PokemonAltaria
	| MegaEvoLevelSettings1V0334PokemonAltaria
	| MegaEvoLevelSettings2V0334PokemonAltaria
	| MegaEvoLevelSettings3V0334PokemonAltaria;

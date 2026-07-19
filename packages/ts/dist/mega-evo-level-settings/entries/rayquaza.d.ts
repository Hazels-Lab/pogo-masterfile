// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "rayquaza", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0384PokemonRayquaza = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0384_POKEMON_RAYQUAZA",
		{
			cooldown: {
				bypassCostInitial: 400;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "RAYQUAZA";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0384PokemonRayquaza = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0384_POKEMON_RAYQUAZA",
		{
			cooldown: {
				bypassCostInitial: 80;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "RAYQUAZA";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0384PokemonRayquaza = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0384_POKEMON_RAYQUAZA",
		{
			cooldown: {
				bypassCostInitial: 40;
				durationMs: "432000000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
				sameTypeExtraCatchCandyXlChance: 0.1;
				sameTypeExtraCatchXp: 50;
			};
			level: 2;
			megaEnergyCostPerPoint: 160;
			pokemonId: "RAYQUAZA";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0384PokemonRayquaza = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0384_POKEMON_RAYQUAZA",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "259200000";
			};
			effects: {
				sameTypeExtraCatchCandy: 2;
				sameTypeExtraCatchCandyXlChance: 0.25;
				sameTypeExtraCatchXp: 100;
			};
			level: 3;
			megaEnergyCostPerPoint: 80;
			pokemonId: "RAYQUAZA";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsRayquazaMasterfileEntry =
	| MegaEvoLevelSettings0V0384PokemonRayquaza
	| MegaEvoLevelSettings1V0384PokemonRayquaza
	| MegaEvoLevelSettings2V0384PokemonRayquaza
	| MegaEvoLevelSettings3V0384PokemonRayquaza;

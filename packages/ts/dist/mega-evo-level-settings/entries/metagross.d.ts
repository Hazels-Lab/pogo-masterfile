// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "metagross", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0376PokemonMetagross = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0376_POKEMON_METAGROSS",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "METAGROSS";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0376PokemonMetagross = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0376_POKEMON_METAGROSS",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "METAGROSS";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0376PokemonMetagross = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0376_POKEMON_METAGROSS",
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
			pokemonId: "METAGROSS";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0376PokemonMetagross = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0376_POKEMON_METAGROSS",
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
			pokemonId: "METAGROSS";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsMetagrossMasterfileEntry =
	| MegaEvoLevelSettings0V0376PokemonMetagross
	| MegaEvoLevelSettings1V0376PokemonMetagross
	| MegaEvoLevelSettings2V0376PokemonMetagross
	| MegaEvoLevelSettings3V0376PokemonMetagross;

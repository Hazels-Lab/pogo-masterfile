// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "garchomp", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0445PokemonGarchomp = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0445_POKEMON_GARCHOMP",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "GARCHOMP";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0445PokemonGarchomp = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0445_POKEMON_GARCHOMP",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "GARCHOMP";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0445PokemonGarchomp = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0445_POKEMON_GARCHOMP",
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
			pokemonId: "GARCHOMP";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0445PokemonGarchomp = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0445_POKEMON_GARCHOMP",
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
			pokemonId: "GARCHOMP";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsGarchompMasterfileEntry =
	| MegaEvoLevelSettings0V0445PokemonGarchomp
	| MegaEvoLevelSettings1V0445PokemonGarchomp
	| MegaEvoLevelSettings2V0445PokemonGarchomp
	| MegaEvoLevelSettings3V0445PokemonGarchomp;

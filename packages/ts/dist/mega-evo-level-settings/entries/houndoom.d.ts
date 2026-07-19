// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "houndoom", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0229PokemonHoundoom = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0229_POKEMON_HOUNDOOM",
		{
			cooldown: {
				bypassCostInitial: 100;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "HOUNDOOM";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0229PokemonHoundoom = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0229_POKEMON_HOUNDOOM",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "HOUNDOOM";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0229PokemonHoundoom = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0229_POKEMON_HOUNDOOM",
		{
			cooldown: {
				bypassCostInitial: 10;
				durationMs: "432000000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
				sameTypeExtraCatchCandyXlChance: 0.1;
				sameTypeExtraCatchXp: 50;
			};
			level: 2;
			megaEnergyCostPerPoint: 80;
			pokemonId: "HOUNDOOM";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0229PokemonHoundoom = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0229_POKEMON_HOUNDOOM",
		{
			cooldown: {
				bypassCostInitial: 5;
				durationMs: "259200000";
			};
			effects: {
				sameTypeExtraCatchCandy: 2;
				sameTypeExtraCatchCandyXlChance: 0.25;
				sameTypeExtraCatchXp: 100;
			};
			level: 3;
			megaEnergyCostPerPoint: 40;
			pokemonId: "HOUNDOOM";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsHoundoomMasterfileEntry =
	| MegaEvoLevelSettings0V0229PokemonHoundoom
	| MegaEvoLevelSettings1V0229PokemonHoundoom
	| MegaEvoLevelSettings2V0229PokemonHoundoom
	| MegaEvoLevelSettings3V0229PokemonHoundoom;

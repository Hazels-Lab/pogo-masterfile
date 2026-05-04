// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "medicham", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0308PokemonMedicham = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0308_POKEMON_MEDICHAM",
		{
			cooldown: {
				bypassCostInitial: 100;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "MEDICHAM";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0308PokemonMedicham = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0308_POKEMON_MEDICHAM",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "MEDICHAM";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0308PokemonMedicham = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0308_POKEMON_MEDICHAM",
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
			pokemonId: "MEDICHAM";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0308PokemonMedicham = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0308_POKEMON_MEDICHAM",
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
			pokemonId: "MEDICHAM";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsMedichamMasterfileEntry =
	| MegaEvoLevelSettings0V0308PokemonMedicham
	| MegaEvoLevelSettings1V0308PokemonMedicham
	| MegaEvoLevelSettings2V0308PokemonMedicham
	| MegaEvoLevelSettings3V0308PokemonMedicham;

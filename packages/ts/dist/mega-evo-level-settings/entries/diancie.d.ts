// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "diancie", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0719PokemonDiancie = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0719_POKEMON_DIANCIE",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "DIANCIE";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0719PokemonDiancie = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0719_POKEMON_DIANCIE",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "DIANCIE";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0719PokemonDiancie = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0719_POKEMON_DIANCIE",
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
			pokemonId: "DIANCIE";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0719PokemonDiancie = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0719_POKEMON_DIANCIE",
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
			pokemonId: "DIANCIE";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsDiancieMasterfileEntry =
	| MegaEvoLevelSettings0V0719PokemonDiancie
	| MegaEvoLevelSettings1V0719PokemonDiancie
	| MegaEvoLevelSettings2V0719PokemonDiancie
	| MegaEvoLevelSettings3V0719PokemonDiancie;

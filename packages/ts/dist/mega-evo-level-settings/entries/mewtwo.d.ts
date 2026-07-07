// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "mewtwo", 5 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0150PokemonMewtwo = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0150_POKEMON_MEWTWO",
		{
			cooldown: {
				bypassCostInitial: 7500;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "MEWTWO";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0150PokemonMewtwo = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0150_POKEMON_MEWTWO",
		{
			cooldown: {
				bypassCostInitial: 80;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "MEWTWO";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0150PokemonMewtwo = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0150_POKEMON_MEWTWO",
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
			pokemonId: "MEWTWO";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0150PokemonMewtwo = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0150_POKEMON_MEWTWO",
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
			pokemonId: "MEWTWO";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;
export type MegaEvoLevelSettings4V0150PokemonMewtwo = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_4_V0150_POKEMON_MEWTWO",
		{
			cooldown: {
				bypassCostInitial: 10;
				durationMs: "86400000";
			};
			effects: {
				sameTypeExtraCatchCandy: 3;
				sameTypeExtraCatchCandyXlChance: 0.3;
				sameTypeExtraCatchXp: 200;
				selfCpBoostAdditionalLevel: 2;
			};
			ftueExpirationTimestamp: "4083189477000";
			level: 4;
			megaEnergyCostToUnlock: 5000;
			pokemonId: "MEWTWO";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsMewtwoMasterfileEntry =
	| MegaEvoLevelSettings0V0150PokemonMewtwo
	| MegaEvoLevelSettings1V0150PokemonMewtwo
	| MegaEvoLevelSettings2V0150PokemonMewtwo
	| MegaEvoLevelSettings3V0150PokemonMewtwo
	| MegaEvoLevelSettings4V0150PokemonMewtwo;

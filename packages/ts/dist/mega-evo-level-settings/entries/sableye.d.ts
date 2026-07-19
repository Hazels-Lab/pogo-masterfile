// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "sableye", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0302PokemonSableye = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0302_POKEMON_SABLEYE",
		{
			cooldown: {
				bypassCostInitial: 100;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "SABLEYE";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0302PokemonSableye = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0302_POKEMON_SABLEYE",
		{
			cooldown: {
				bypassCostInitial: 20;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "SABLEYE";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0302PokemonSableye = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0302_POKEMON_SABLEYE",
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
			pokemonId: "SABLEYE";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0302PokemonSableye = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0302_POKEMON_SABLEYE",
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
			pokemonId: "SABLEYE";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsSableyeMasterfileEntry =
	| MegaEvoLevelSettings0V0302PokemonSableye
	| MegaEvoLevelSettings1V0302PokemonSableye
	| MegaEvoLevelSettings2V0302PokemonSableye
	| MegaEvoLevelSettings3V0302PokemonSableye;

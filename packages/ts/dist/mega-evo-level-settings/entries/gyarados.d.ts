// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "gyarados", 4 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0130PokemonGyarados = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0130_POKEMON_GYARADOS",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "GYARADOS";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0130PokemonGyarados = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0130_POKEMON_GYARADOS",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "GYARADOS";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0130PokemonGyarados = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0130_POKEMON_GYARADOS",
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
			pokemonId: "GYARADOS";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0130PokemonGyarados = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0130_POKEMON_GYARADOS",
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
			pokemonId: "GYARADOS";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsGyaradosMasterfileEntry =
	| MegaEvoLevelSettings0V0130PokemonGyarados
	| MegaEvoLevelSettings1V0130PokemonGyarados
	| MegaEvoLevelSettings2V0130PokemonGyarados
	| MegaEvoLevelSettings3V0130PokemonGyarados;

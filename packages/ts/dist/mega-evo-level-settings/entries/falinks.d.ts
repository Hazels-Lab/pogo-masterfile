// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", split "falinks", 5 entries.

import type { S } from "../../_utils";
import type { MegaEvoLevelSettings } from "../types";

export type MegaEvoLevelSettings0V0870PokemonFalinks = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_0_V0870_POKEMON_FALINKS",
		{
			cooldown: {
				bypassCostInitial: 300;
				durationMs: "1209600000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			pokemonId: "FALINKS";
			progression: object;
		}
	>
>;
export type MegaEvoLevelSettings1V0870PokemonFalinks = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_1_V0870_POKEMON_FALINKS",
		{
			cooldown: {
				bypassCostInitial: 60;
				durationMs: "604800000";
			};
			effects: {
				sameTypeExtraCatchCandy: 1;
			};
			level: 1;
			pokemonId: "FALINKS";
			progression: {
				pointsRequired: 1;
			};
		}
	>
>;
export type MegaEvoLevelSettings2V0870PokemonFalinks = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_2_V0870_POKEMON_FALINKS",
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
			pokemonId: "FALINKS";
			progression: {
				pointsRequired: 7;
			};
		}
	>
>;
export type MegaEvoLevelSettings3V0870PokemonFalinks = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_3_V0870_POKEMON_FALINKS",
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
			pokemonId: "FALINKS";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;
export type MegaEvoLevelSettings4V0870PokemonFalinks = S<
	MegaEvoLevelSettings<
		"MEGA_EVOLUTION_LEVEL_4_V0870_POKEMON_FALINKS",
		{
			cooldown: {
				bypassCostInitial: 5;
				durationMs: "86400000";
			};
			effects: {
				sameTypeExtraCatchCandy: 3;
				sameTypeExtraCatchCandyXlChance: 0.3;
				sameTypeExtraCatchXp: 200;
				selfCpBoostAdditionalLevel: 2;
			};
			ftueExpirationTimestamp: "1775001600000";
			level: 4;
			megaEnergyCostToUnlock: 5000;
			pokemonId: "FALINKS";
			progression: {
				pointsRequired: 30;
			};
		}
	>
>;

export type MegaEvoLevelSettingsFalinksMasterfileEntry =
	| MegaEvoLevelSettings0V0870PokemonFalinks
	| MegaEvoLevelSettings1V0870PokemonFalinks
	| MegaEvoLevelSettings2V0870PokemonFalinks
	| MegaEvoLevelSettings3V0870PokemonFalinks
	| MegaEvoLevelSettings4V0870PokemonFalinks;

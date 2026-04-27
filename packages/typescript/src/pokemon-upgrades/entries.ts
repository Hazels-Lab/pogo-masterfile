// Generated from Pokémon GO masterfile — group "pokemonUpgrades", 2 entries (variant aliases).

import type { S } from "../_utils";
import type { PokemonUpgrades } from "./index";

export type PokemonUpgradesOverrideSettingsV0890PokemonEternatus = S<
	PokemonUpgrades<
		"POKEMON_UPGRADE_OVERRIDE_SETTINGS_V0890_POKEMON_ETERNATUS",
		{
			candyCost: [
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				60,
				60,
				60,
				60,
				60,
				60,
				60,
				60,
				60,
				60,
				90,
				90,
				90,
				90,
				90,
				120,
				120,
				120,
				120,
				120,
				175,
				175,
				225,
				225,
				300,
				300,
				375,
				375,
				890,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
			];
			xlCandyCost: [100, 100, 200, 200, 400, 400, 635, 635, 890, 890];
		}
	>
>;
export type PokemonUpgradesSettings = S<
	PokemonUpgrades<
		"POKEMON_UPGRADE_SETTINGS",
		{
			candyCost: [
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				3,
				3,
				3,
				3,
				3,
				4,
				4,
				4,
				4,
				4,
				6,
				6,
				8,
				8,
				10,
				10,
				12,
				12,
				15,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
			];
			xlCandyCost: [10, 10, 12, 12, 15, 15, 17, 17, 20, 20];
		}
	>
>;

export type PokemonUpgradesMasterfileEntry = PokemonUpgradesOverrideSettingsV0890PokemonEternatus | PokemonUpgradesSettings;

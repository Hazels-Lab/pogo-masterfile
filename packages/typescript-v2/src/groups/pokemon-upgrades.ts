export interface PokemonUpgrades<T extends string> {
	templateId: T;
	data: PokemonUpgradesData<T>;
}

export interface PokemonUpgradesData<T extends string> {
	templateId: T;
	pokemonUpgrades: unknown;
}

export type PokemonUpgradesOverrideSettingsV0890PokemonEternatus = PokemonUpgrades<"POKEMON_UPGRADE_OVERRIDE_SETTINGS_V0890_POKEMON_ETERNATUS">;
export type PokemonUpgradesSettings = PokemonUpgrades<"POKEMON_UPGRADE_SETTINGS">;

export type PokemonUpgradesMasterfileEntry =
	| PokemonUpgradesOverrideSettingsV0890PokemonEternatus
	| PokemonUpgradesSettings;

export type PokemonUpgradesTemplateID = PokemonUpgradesMasterfileEntry["templateId"];

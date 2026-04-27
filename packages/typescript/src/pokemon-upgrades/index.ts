// Generated from Pokémon GO masterfile — group "pokemonUpgrades", 2 entries (structural types).

export type * from "./variants";

export interface PokemonUpgrades<TemplateID extends string = string, TData extends PokemonUpgradesData = PokemonUpgradesData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonUpgrades: TData & {
			allowedLevelsAbovePlayer: 10;
			defaultCpBoostAdditionalLevel: 1;
			maxNormalUpgradeLevel: 50;
			purifiedCandyMultiplier: 0.9;
			purifiedStardustMultiplier: 0.9;
			shadowCandyMultiplier: 1.2;
			shadowStardustMultiplier: 1.2;
			stardustCost: [
				200,
				200,
				400,
				400,
				600,
				600,
				800,
				800,
				1000,
				1000,
				1300,
				1300,
				1600,
				1600,
				1900,
				1900,
				2200,
				2200,
				2500,
				2500,
				3000,
				3000,
				3500,
				3500,
				4000,
				4000,
				4500,
				4500,
				5000,
				5000,
				6000,
				6000,
				7000,
				7000,
				8000,
				8000,
				9000,
				9000,
				10000,
				10000,
				11000,
				11000,
				12000,
				12000,
				13000,
				13000,
				14000,
				14000,
				15000,
			];
			upgradesPerLevel: 2;
			xlCandyMinPlayerLevel: 31;
			xlCandyMinPokemonLevel: 40;
		};
	};
}

export interface PokemonUpgradesData {
	candyCost: [
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
	];
	xlCandyCost: [number, number, number, number, number, number, number, number, number, number];
}

export type PokemonUpgradesMasterfileEntry = PokemonUpgradesOverrideSettingsV0890PokemonEternatus | PokemonUpgradesSettings;

export type PokemonUpgradesTemplateID = PokemonUpgradesMasterfileEntry["templateId"];

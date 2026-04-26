// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", 103 entries.

export interface MegaEvoLevelSettings<
	TemplateID extends string = string,
	TData extends MegaEvoLevelSettingsData = MegaEvoLevelSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		megaEvoLevelSettings: TData & {
			cooldown: {
				bypassCostRoundingValue: 1;
			};
			effects: {
				differentTypeAttackBoost: 1.1;
				sameTypeAttackBoost: 1.3;
			};
			progression: {
				pointsLimitPerPeriod: 1;
				pointsPerMegaEvoAction: 1;
			};
		};
	};
}

export interface MegaEvoLevelSettingsData {
	cooldown: {
		bypassCostInitial: number;
		durationMs: "1209600000" | "259200000" | "432000000" | "604800000" | "86400000";
	};
	effects: {
		sameTypeExtraCatchCandy: number;
		sameTypeExtraCatchCandyXlChance?: number;
		sameTypeExtraCatchXp?: number;
		selfCpBoostAdditionalLevel?: number;
	};
	ftueExpirationTimestamp?: "1775001600000";
	level?: number;
	megaEnergyCostToUnlock?: number;
	pokemonId?:
		| "ALTARIA"
		| "BANETTE"
		| "BEEDRILL"
		| "DIANCIE"
		| "DRAGONITE"
		| "GARCHOMP"
		| "GROUDON"
		| "GYARADOS"
		| "HOUNDOOM"
		| "KYOGRE"
		| "LATIAS"
		| "LATIOS"
		| "MALAMAR"
		| "MANECTRIC"
		| "MEDICHAM"
		| "METAGROSS"
		| "MEWTWO"
		| "PIDGEOT"
		| "RAYQUAZA"
		| "SABLEYE"
		| "SALAMENCE"
		| "SLOWBRO"
		| "TYRANITAR"
		| "VICTREEBEL";
	progression: {
		pointsRequired?: number;
	};
}

export type MegaEvoLevelSettings0 = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0",
	{
		cooldown: {
			bypassCostInitial: 200;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
	}
>;
export type MegaEvoLevelSettings0V0015PokemonBeedrill = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0015_POKEMON_BEEDRILL",
	{
		cooldown: {
			bypassCostInitial: 100;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "BEEDRILL";
	}
>;
export type MegaEvoLevelSettings0V0018PokemonPidgeot = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0018_POKEMON_PIDGEOT",
	{
		cooldown: {
			bypassCostInitial: 100;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "PIDGEOT";
	}
>;
export type MegaEvoLevelSettings0V0071PokemonVictreebel = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0071_POKEMON_VICTREEBEL",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "VICTREEBEL";
	}
>;
export type MegaEvoLevelSettings0V0080PokemonSlowbro = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0080_POKEMON_SLOWBRO",
	{
		cooldown: {
			bypassCostInitial: 100;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "SLOWBRO";
	}
>;
export type MegaEvoLevelSettings0V0130PokemonGyarados = MegaEvoLevelSettings<
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
	}
>;
export type MegaEvoLevelSettings0V0149PokemonDragonite = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0149_POKEMON_DRAGONITE",
	{
		cooldown: {
			bypassCostInitial: 500;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "DRAGONITE";
	}
>;
export type MegaEvoLevelSettings0V0150PokemonMewtwo = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0150_POKEMON_MEWTWO",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "MEWTWO";
	}
>;
export type MegaEvoLevelSettings0V0229PokemonHoundoom = MegaEvoLevelSettings<
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
	}
>;
export type MegaEvoLevelSettings0V0248PokemonTyranitar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0248_POKEMON_TYRANITAR",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "TYRANITAR";
	}
>;
export type MegaEvoLevelSettings0V0302PokemonSableye = MegaEvoLevelSettings<
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
	}
>;
export type MegaEvoLevelSettings0V0308PokemonMedicham = MegaEvoLevelSettings<
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
	}
>;
export type MegaEvoLevelSettings0V0310PokemonManectric = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0310_POKEMON_MANECTRIC",
	{
		cooldown: {
			bypassCostInitial: 100;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "MANECTRIC";
	}
>;
export type MegaEvoLevelSettings0V0334PokemonAltaria = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0334_POKEMON_ALTARIA",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "ALTARIA";
	}
>;
export type MegaEvoLevelSettings0V0354PokemonBanette = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0354_POKEMON_BANETTE",
	{
		cooldown: {
			bypassCostInitial: 100;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "BANETTE";
	}
>;
export type MegaEvoLevelSettings0V0373PokemonSalamence = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0373_POKEMON_SALAMENCE",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "SALAMENCE";
	}
>;
export type MegaEvoLevelSettings0V0376PokemonMetagross = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0376_POKEMON_METAGROSS",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "METAGROSS";
	}
>;
export type MegaEvoLevelSettings0V0380PokemonLatias = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0380_POKEMON_LATIAS",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "LATIAS";
	}
>;
export type MegaEvoLevelSettings0V0381PokemonLatios = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0381_POKEMON_LATIOS",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "LATIOS";
	}
>;
export type MegaEvoLevelSettings0V0382PokemonKyogre = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0382_POKEMON_KYOGRE",
	{
		cooldown: {
			bypassCostInitial: 400;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "KYOGRE";
	}
>;
export type MegaEvoLevelSettings0V0383PokemonGroudon = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0383_POKEMON_GROUDON",
	{
		cooldown: {
			bypassCostInitial: 400;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "GROUDON";
	}
>;
export type MegaEvoLevelSettings0V0384PokemonRayquaza = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0384_POKEMON_RAYQUAZA",
	{
		cooldown: {
			bypassCostInitial: 400;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "RAYQUAZA";
	}
>;
export type MegaEvoLevelSettings0V0445PokemonGarchomp = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0445_POKEMON_GARCHOMP",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "GARCHOMP";
	}
>;
export type MegaEvoLevelSettings0V0687PokemonMalamar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_0_V0687_POKEMON_MALAMAR",
	{
		cooldown: {
			bypassCostInitial: 300;
			durationMs: "1209600000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		pokemonId: "MALAMAR";
	}
>;
export type MegaEvoLevelSettings0V0719PokemonDiancie = MegaEvoLevelSettings<
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
	}
>;
export type MegaEvoLevelSettings1 = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1",
	{
		cooldown: {
			bypassCostInitial: 40;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0015PokemonBeedrill = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0015_POKEMON_BEEDRILL",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "BEEDRILL";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0018PokemonPidgeot = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0018_POKEMON_PIDGEOT",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "PIDGEOT";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0071PokemonVictreebel = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0071_POKEMON_VICTREEBEL",
	{
		cooldown: {
			bypassCostInitial: 40;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "VICTREEBEL";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0080PokemonSlowbro = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0080_POKEMON_SLOWBRO",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "SLOWBRO";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0130PokemonGyarados = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings1V0149PokemonDragonite = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0149_POKEMON_DRAGONITE",
	{
		cooldown: {
			bypassCostInitial: 40;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "DRAGONITE";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0150PokemonMewtwo = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0150_POKEMON_MEWTWO",
	{
		cooldown: {
			bypassCostInitial: 60;
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
>;
export type MegaEvoLevelSettings1V0229PokemonHoundoom = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings1V0248PokemonTyranitar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0248_POKEMON_TYRANITAR",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "TYRANITAR";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0302PokemonSableye = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings1V0308PokemonMedicham = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings1V0310PokemonManectric = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0310_POKEMON_MANECTRIC",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "MANECTRIC";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0334PokemonAltaria = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0334_POKEMON_ALTARIA",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "ALTARIA";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0354PokemonBanette = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0354_POKEMON_BANETTE",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "BANETTE";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0373PokemonSalamence = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0373_POKEMON_SALAMENCE",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "SALAMENCE";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0376PokemonMetagross = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0376_POKEMON_METAGROSS",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "METAGROSS";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0380PokemonLatias = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0380_POKEMON_LATIAS",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "LATIAS";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0381PokemonLatios = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0381_POKEMON_LATIOS",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "LATIOS";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0382PokemonKyogre = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0382_POKEMON_KYOGRE",
	{
		cooldown: {
			bypassCostInitial: 80;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "KYOGRE";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0383PokemonGroudon = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0383_POKEMON_GROUDON",
	{
		cooldown: {
			bypassCostInitial: 80;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "GROUDON";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0384PokemonRayquaza = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0384_POKEMON_RAYQUAZA",
	{
		cooldown: {
			bypassCostInitial: 80;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "RAYQUAZA";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0445PokemonGarchomp = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0445_POKEMON_GARCHOMP",
	{
		cooldown: {
			bypassCostInitial: 60;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "GARCHOMP";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0687PokemonMalamar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_1_V0687_POKEMON_MALAMAR",
	{
		cooldown: {
			bypassCostInitial: 40;
			durationMs: "604800000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
		};
		level: 1;
		pokemonId: "MALAMAR";
		progression: {
			pointsRequired: 1;
		};
	}
>;
export type MegaEvoLevelSettings1V0719PokemonDiancie = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings2 = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "432000000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
			sameTypeExtraCatchCandyXlChance: 0.1;
			sameTypeExtraCatchXp: 50;
		};
		level: 2;
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0015PokemonBeedrill = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0015_POKEMON_BEEDRILL",
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
		pokemonId: "BEEDRILL";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0018PokemonPidgeot = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0018_POKEMON_PIDGEOT",
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
		pokemonId: "PIDGEOT";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0071PokemonVictreebel = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0071_POKEMON_VICTREEBEL",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "432000000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
			sameTypeExtraCatchCandyXlChance: 0.1;
			sameTypeExtraCatchXp: 50;
		};
		level: 2;
		pokemonId: "VICTREEBEL";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0080PokemonSlowbro = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0080_POKEMON_SLOWBRO",
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
		pokemonId: "SLOWBRO";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0130PokemonGyarados = MegaEvoLevelSettings<
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
		pokemonId: "GYARADOS";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0149PokemonDragonite = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0149_POKEMON_DRAGONITE",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "432000000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
			sameTypeExtraCatchCandyXlChance: 0.1;
			sameTypeExtraCatchXp: 50;
		};
		level: 2;
		pokemonId: "DRAGONITE";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0150PokemonMewtwo = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0150_POKEMON_MEWTWO",
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
		pokemonId: "MEWTWO";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0229PokemonHoundoom = MegaEvoLevelSettings<
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
		pokemonId: "HOUNDOOM";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0248PokemonTyranitar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0248_POKEMON_TYRANITAR",
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
		pokemonId: "TYRANITAR";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0302PokemonSableye = MegaEvoLevelSettings<
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
		pokemonId: "SABLEYE";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0308PokemonMedicham = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings2V0310PokemonManectric = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0310_POKEMON_MANECTRIC",
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
		pokemonId: "MANECTRIC";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0334PokemonAltaria = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0334_POKEMON_ALTARIA",
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
		pokemonId: "ALTARIA";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0354PokemonBanette = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0354_POKEMON_BANETTE",
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
		pokemonId: "BANETTE";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0373PokemonSalamence = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0373_POKEMON_SALAMENCE",
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
		pokemonId: "SALAMENCE";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0376PokemonMetagross = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0376_POKEMON_METAGROSS",
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
		pokemonId: "METAGROSS";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0380PokemonLatias = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0380_POKEMON_LATIAS",
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
		pokemonId: "LATIAS";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0381PokemonLatios = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0381_POKEMON_LATIOS",
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
		pokemonId: "LATIOS";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0382PokemonKyogre = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0382_POKEMON_KYOGRE",
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
		pokemonId: "KYOGRE";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0383PokemonGroudon = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0383_POKEMON_GROUDON",
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
		pokemonId: "GROUDON";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0384PokemonRayquaza = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0384_POKEMON_RAYQUAZA",
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
		pokemonId: "RAYQUAZA";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0445PokemonGarchomp = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0445_POKEMON_GARCHOMP",
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
		pokemonId: "GARCHOMP";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0687PokemonMalamar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_2_V0687_POKEMON_MALAMAR",
	{
		cooldown: {
			bypassCostInitial: 20;
			durationMs: "432000000";
		};
		effects: {
			sameTypeExtraCatchCandy: 1;
			sameTypeExtraCatchCandyXlChance: 0.1;
			sameTypeExtraCatchXp: 50;
		};
		level: 2;
		pokemonId: "MALAMAR";
		progression: {
			pointsRequired: 7;
		};
	}
>;
export type MegaEvoLevelSettings2V0719PokemonDiancie = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings3 = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3",
	{
		cooldown: {
			bypassCostInitial: 10;
			durationMs: "259200000";
		};
		effects: {
			sameTypeExtraCatchCandy: 2;
			sameTypeExtraCatchCandyXlChance: 0.25;
			sameTypeExtraCatchXp: 100;
		};
		level: 3;
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0015PokemonBeedrill = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0015_POKEMON_BEEDRILL",
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
		pokemonId: "BEEDRILL";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0018PokemonPidgeot = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0018_POKEMON_PIDGEOT",
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
		pokemonId: "PIDGEOT";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0071PokemonVictreebel = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0071_POKEMON_VICTREEBEL",
	{
		cooldown: {
			bypassCostInitial: 10;
			durationMs: "259200000";
		};
		effects: {
			sameTypeExtraCatchCandy: 2;
			sameTypeExtraCatchCandyXlChance: 0.25;
			sameTypeExtraCatchXp: 100;
		};
		level: 3;
		pokemonId: "VICTREEBEL";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0080PokemonSlowbro = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0080_POKEMON_SLOWBRO",
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
		pokemonId: "SLOWBRO";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0130PokemonGyarados = MegaEvoLevelSettings<
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
		pokemonId: "GYARADOS";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0149PokemonDragonite = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0149_POKEMON_DRAGONITE",
	{
		cooldown: {
			bypassCostInitial: 10;
			durationMs: "259200000";
		};
		effects: {
			sameTypeExtraCatchCandy: 2;
			sameTypeExtraCatchCandyXlChance: 0.25;
			sameTypeExtraCatchXp: 100;
		};
		level: 3;
		pokemonId: "DRAGONITE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0150PokemonMewtwo = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0150_POKEMON_MEWTWO",
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
		pokemonId: "MEWTWO";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0229PokemonHoundoom = MegaEvoLevelSettings<
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
		pokemonId: "HOUNDOOM";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0248PokemonTyranitar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0248_POKEMON_TYRANITAR",
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
		pokemonId: "TYRANITAR";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0302PokemonSableye = MegaEvoLevelSettings<
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
		pokemonId: "SABLEYE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0308PokemonMedicham = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings3V0310PokemonManectric = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0310_POKEMON_MANECTRIC",
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
		pokemonId: "MANECTRIC";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0334PokemonAltaria = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0334_POKEMON_ALTARIA",
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
		pokemonId: "ALTARIA";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0354PokemonBanette = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0354_POKEMON_BANETTE",
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
		pokemonId: "BANETTE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0373PokemonSalamence = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0373_POKEMON_SALAMENCE",
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
		pokemonId: "SALAMENCE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0376PokemonMetagross = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0376_POKEMON_METAGROSS",
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
		pokemonId: "METAGROSS";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0380PokemonLatias = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0380_POKEMON_LATIAS",
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
		pokemonId: "LATIAS";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0381PokemonLatios = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0381_POKEMON_LATIOS",
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
		pokemonId: "LATIOS";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0382PokemonKyogre = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0382_POKEMON_KYOGRE",
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
		pokemonId: "KYOGRE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0383PokemonGroudon = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0383_POKEMON_GROUDON",
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
		pokemonId: "GROUDON";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0384PokemonRayquaza = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0384_POKEMON_RAYQUAZA",
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
		pokemonId: "RAYQUAZA";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0445PokemonGarchomp = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0445_POKEMON_GARCHOMP",
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
		pokemonId: "GARCHOMP";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0687PokemonMalamar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_3_V0687_POKEMON_MALAMAR",
	{
		cooldown: {
			bypassCostInitial: 10;
			durationMs: "259200000";
		};
		effects: {
			sameTypeExtraCatchCandy: 2;
			sameTypeExtraCatchCandyXlChance: 0.25;
			sameTypeExtraCatchXp: 100;
		};
		level: 3;
		pokemonId: "MALAMAR";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings3V0719PokemonDiancie = MegaEvoLevelSettings<
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
>;
export type MegaEvoLevelSettings4V0071PokemonVictreebel = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_4_V0071_POKEMON_VICTREEBEL",
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
		pokemonId: "VICTREEBEL";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings4V0149PokemonDragonite = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_4_V0149_POKEMON_DRAGONITE",
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
		pokemonId: "DRAGONITE";
		progression: {
			pointsRequired: 30;
		};
	}
>;
export type MegaEvoLevelSettings4V0687PokemonMalamar = MegaEvoLevelSettings<
	"MEGA_EVOLUTION_LEVEL_4_V0687_POKEMON_MALAMAR",
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
		pokemonId: "MALAMAR";
		progression: {
			pointsRequired: 30;
		};
	}
>;

export type MegaEvoLevelSettingsMasterfileEntry =
	| MegaEvoLevelSettings0
	| MegaEvoLevelSettings0V0015PokemonBeedrill
	| MegaEvoLevelSettings0V0018PokemonPidgeot
	| MegaEvoLevelSettings0V0071PokemonVictreebel
	| MegaEvoLevelSettings0V0080PokemonSlowbro
	| MegaEvoLevelSettings0V0130PokemonGyarados
	| MegaEvoLevelSettings0V0149PokemonDragonite
	| MegaEvoLevelSettings0V0150PokemonMewtwo
	| MegaEvoLevelSettings0V0229PokemonHoundoom
	| MegaEvoLevelSettings0V0248PokemonTyranitar
	| MegaEvoLevelSettings0V0302PokemonSableye
	| MegaEvoLevelSettings0V0308PokemonMedicham
	| MegaEvoLevelSettings0V0310PokemonManectric
	| MegaEvoLevelSettings0V0334PokemonAltaria
	| MegaEvoLevelSettings0V0354PokemonBanette
	| MegaEvoLevelSettings0V0373PokemonSalamence
	| MegaEvoLevelSettings0V0376PokemonMetagross
	| MegaEvoLevelSettings0V0380PokemonLatias
	| MegaEvoLevelSettings0V0381PokemonLatios
	| MegaEvoLevelSettings0V0382PokemonKyogre
	| MegaEvoLevelSettings0V0383PokemonGroudon
	| MegaEvoLevelSettings0V0384PokemonRayquaza
	| MegaEvoLevelSettings0V0445PokemonGarchomp
	| MegaEvoLevelSettings0V0687PokemonMalamar
	| MegaEvoLevelSettings0V0719PokemonDiancie
	| MegaEvoLevelSettings1
	| MegaEvoLevelSettings1V0015PokemonBeedrill
	| MegaEvoLevelSettings1V0018PokemonPidgeot
	| MegaEvoLevelSettings1V0071PokemonVictreebel
	| MegaEvoLevelSettings1V0080PokemonSlowbro
	| MegaEvoLevelSettings1V0130PokemonGyarados
	| MegaEvoLevelSettings1V0149PokemonDragonite
	| MegaEvoLevelSettings1V0150PokemonMewtwo
	| MegaEvoLevelSettings1V0229PokemonHoundoom
	| MegaEvoLevelSettings1V0248PokemonTyranitar
	| MegaEvoLevelSettings1V0302PokemonSableye
	| MegaEvoLevelSettings1V0308PokemonMedicham
	| MegaEvoLevelSettings1V0310PokemonManectric
	| MegaEvoLevelSettings1V0334PokemonAltaria
	| MegaEvoLevelSettings1V0354PokemonBanette
	| MegaEvoLevelSettings1V0373PokemonSalamence
	| MegaEvoLevelSettings1V0376PokemonMetagross
	| MegaEvoLevelSettings1V0380PokemonLatias
	| MegaEvoLevelSettings1V0381PokemonLatios
	| MegaEvoLevelSettings1V0382PokemonKyogre
	| MegaEvoLevelSettings1V0383PokemonGroudon
	| MegaEvoLevelSettings1V0384PokemonRayquaza
	| MegaEvoLevelSettings1V0445PokemonGarchomp
	| MegaEvoLevelSettings1V0687PokemonMalamar
	| MegaEvoLevelSettings1V0719PokemonDiancie
	| MegaEvoLevelSettings2
	| MegaEvoLevelSettings2V0015PokemonBeedrill
	| MegaEvoLevelSettings2V0018PokemonPidgeot
	| MegaEvoLevelSettings2V0071PokemonVictreebel
	| MegaEvoLevelSettings2V0080PokemonSlowbro
	| MegaEvoLevelSettings2V0130PokemonGyarados
	| MegaEvoLevelSettings2V0149PokemonDragonite
	| MegaEvoLevelSettings2V0150PokemonMewtwo
	| MegaEvoLevelSettings2V0229PokemonHoundoom
	| MegaEvoLevelSettings2V0248PokemonTyranitar
	| MegaEvoLevelSettings2V0302PokemonSableye
	| MegaEvoLevelSettings2V0308PokemonMedicham
	| MegaEvoLevelSettings2V0310PokemonManectric
	| MegaEvoLevelSettings2V0334PokemonAltaria
	| MegaEvoLevelSettings2V0354PokemonBanette
	| MegaEvoLevelSettings2V0373PokemonSalamence
	| MegaEvoLevelSettings2V0376PokemonMetagross
	| MegaEvoLevelSettings2V0380PokemonLatias
	| MegaEvoLevelSettings2V0381PokemonLatios
	| MegaEvoLevelSettings2V0382PokemonKyogre
	| MegaEvoLevelSettings2V0383PokemonGroudon
	| MegaEvoLevelSettings2V0384PokemonRayquaza
	| MegaEvoLevelSettings2V0445PokemonGarchomp
	| MegaEvoLevelSettings2V0687PokemonMalamar
	| MegaEvoLevelSettings2V0719PokemonDiancie
	| MegaEvoLevelSettings3
	| MegaEvoLevelSettings3V0015PokemonBeedrill
	| MegaEvoLevelSettings3V0018PokemonPidgeot
	| MegaEvoLevelSettings3V0071PokemonVictreebel
	| MegaEvoLevelSettings3V0080PokemonSlowbro
	| MegaEvoLevelSettings3V0130PokemonGyarados
	| MegaEvoLevelSettings3V0149PokemonDragonite
	| MegaEvoLevelSettings3V0150PokemonMewtwo
	| MegaEvoLevelSettings3V0229PokemonHoundoom
	| MegaEvoLevelSettings3V0248PokemonTyranitar
	| MegaEvoLevelSettings3V0302PokemonSableye
	| MegaEvoLevelSettings3V0308PokemonMedicham
	| MegaEvoLevelSettings3V0310PokemonManectric
	| MegaEvoLevelSettings3V0334PokemonAltaria
	| MegaEvoLevelSettings3V0354PokemonBanette
	| MegaEvoLevelSettings3V0373PokemonSalamence
	| MegaEvoLevelSettings3V0376PokemonMetagross
	| MegaEvoLevelSettings3V0380PokemonLatias
	| MegaEvoLevelSettings3V0381PokemonLatios
	| MegaEvoLevelSettings3V0382PokemonKyogre
	| MegaEvoLevelSettings3V0383PokemonGroudon
	| MegaEvoLevelSettings3V0384PokemonRayquaza
	| MegaEvoLevelSettings3V0445PokemonGarchomp
	| MegaEvoLevelSettings3V0687PokemonMalamar
	| MegaEvoLevelSettings3V0719PokemonDiancie
	| MegaEvoLevelSettings4V0071PokemonVictreebel
	| MegaEvoLevelSettings4V0149PokemonDragonite
	| MegaEvoLevelSettings4V0687PokemonMalamar;

export type MegaEvoLevelSettingsTemplateID = MegaEvoLevelSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", 103 entries (structural types).

export type * from "./variants";

export interface MegaEvoLevelSettings<TemplateID extends string = string, TData extends MegaEvoLevelSettingsData = MegaEvoLevelSettingsData> {
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

// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", 103 entries (structural types).

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

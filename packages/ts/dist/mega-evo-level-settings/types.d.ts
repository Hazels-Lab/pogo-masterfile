// Generated from Pokémon GO masterfile — group "megaEvoLevelSettings", 119 entries (structural types).

import type { W } from "../_utils";

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
export type MegaEvoLevelSettingsType = W<MegaEvoLevelSettings>;

export interface MegaEvoLevelSettingsData {
	cooldown: {
		bypassCostInitial: number;
		durationMs: "86400000" | "259200000" | "432000000" | "604800000" | "1209600000";
	};
	effects: {
		sameTypeExtraCatchCandy: number;
		sameTypeExtraCatchCandyXlChance?: number;
		sameTypeExtraCatchXp?: number;
		selfCpBoostAdditionalLevel?: number;
	};
	ftueExpirationTimestamp?: "1775001600000" | "4083189477000";
	level?: number;
	megaEnergyCostPerPoint?: number;
	megaEnergyCostToUnlock?: number;
	pokemonId?:
		| "ALTARIA"
		| "BANETTE"
		| "BEEDRILL"
		| "DIANCIE"
		| "DRAGONITE"
		| "FALINKS"
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
		| "RAICHU"
		| "RAYQUAZA"
		| "SABLEYE"
		| "SALAMENCE"
		| "SKARMORY"
		| "SLOWBRO"
		| "TYRANITAR"
		| "VICTREEBEL";
	progression: {
		pointsRequired?: number;
	};
}

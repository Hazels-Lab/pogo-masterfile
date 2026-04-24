export interface MegaEvoLevelSettings<TemplateID extends string> {
	templateId: TemplateID;
	data: MegaEvoLevelSettingsData<TemplateID>;
}

export interface MegaEvoLevelSettingsData<TemplateID extends string> {
	templateId: TemplateID;
	megaEvoLevelSettings: {
		cooldown: {
			bypassCostInitial: MegaEvoLevelSettingsCooldownBypassCostInitial;
			bypassCostRoundingValue: 1;
			durationMs: MegaEvoLevelSettingsCooldownDurationMs;
		};
		effects: {
			differentTypeAttackBoost: 1.1;
			sameTypeAttackBoost: 1.3;
			sameTypeExtraCatchCandy: MegaEvoLevelSettingsEffectsSameTypeExtraCatchCandy;
			sameTypeExtraCatchCandyXlChance?: MegaEvoLevelSettingsEffectsSameTypeExtraCatchCandyXlChance;
			sameTypeExtraCatchXp?: MegaEvoLevelSettingsEffectsSameTypeExtraCatchXp;
			selfCpBoostAdditionalLevel?: 2;
		};
		ftueExpirationTimestamp?: "1775001600000";
		level?: MegaEvoLevelSettingsLevel;
		megaEnergyCostToUnlock?: 5000;
		pokemonId?: MegaEvoLevelSettingsPokemonID;
		progression: {
			pointsLimitPerPeriod: 1;
			pointsPerMegaEvoAction: 1;
			pointsRequired?: MegaEvoLevelSettingsProgressionPointsRequired;
		};
	};
}

export type MegaEvoLevelSettingsCooldownBypassCostInitial = 5 | 10 | 15 | 20 | 30 | 40 | 60 | 80 | 100 | 200 | 300 | 400 | 500;

export type MegaEvoLevelSettingsCooldownDurationMs = "1209600000" | "259200000" | "432000000" | "604800000" | "86400000";

export type MegaEvoLevelSettingsEffectsSameTypeExtraCatchCandy = 1 | 2 | 3;

export type MegaEvoLevelSettingsEffectsSameTypeExtraCatchCandyXlChance = 0.1 | 0.25 | 0.3;

export type MegaEvoLevelSettingsEffectsSameTypeExtraCatchXp = 50 | 100 | 200;

export type MegaEvoLevelSettingsLevel = 1 | 2 | 3 | 4;

export type MegaEvoLevelSettingsPokemonID = "ALTARIA" | "BANETTE" | "BEEDRILL" | "DIANCIE" | "DRAGONITE" | "GARCHOMP" | "GROUDON" | "GYARADOS" | "HOUNDOOM" | "KYOGRE" | "LATIAS" | "LATIOS" | "MALAMAR" | "MANECTRIC" | "MEDICHAM" | "METAGROSS" | "MEWTWO" | "PIDGEOT" | "RAYQUAZA" | "SABLEYE" | "SALAMENCE" | "SLOWBRO" | "TYRANITAR" | "VICTREEBEL";

export type MegaEvoLevelSettingsProgressionPointsRequired = 1 | 7 | 30;

export type MegaEvoLevelSettings0 = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0">;
export type MegaEvoLevelSettings0V0015PokemonBeedrill = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0015_POKEMON_BEEDRILL">;
export type MegaEvoLevelSettings0V0018PokemonPidgeot = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0018_POKEMON_PIDGEOT">;
export type MegaEvoLevelSettings0V0071PokemonVictreebel = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0071_POKEMON_VICTREEBEL">;
export type MegaEvoLevelSettings0V0080PokemonSlowbro = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0080_POKEMON_SLOWBRO">;
export type MegaEvoLevelSettings0V0130PokemonGyarados = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0130_POKEMON_GYARADOS">;
export type MegaEvoLevelSettings0V0149PokemonDragonite = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0149_POKEMON_DRAGONITE">;
export type MegaEvoLevelSettings0V0150PokemonMewtwo = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0150_POKEMON_MEWTWO">;
export type MegaEvoLevelSettings0V0229PokemonHoundoom = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0229_POKEMON_HOUNDOOM">;
export type MegaEvoLevelSettings0V0248PokemonTyranitar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0248_POKEMON_TYRANITAR">;
export type MegaEvoLevelSettings0V0302PokemonSableye = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0302_POKEMON_SABLEYE">;
export type MegaEvoLevelSettings0V0308PokemonMedicham = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0308_POKEMON_MEDICHAM">;
export type MegaEvoLevelSettings0V0310PokemonManectric = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0310_POKEMON_MANECTRIC">;
export type MegaEvoLevelSettings0V0334PokemonAltaria = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0334_POKEMON_ALTARIA">;
export type MegaEvoLevelSettings0V0354PokemonBanette = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0354_POKEMON_BANETTE">;
export type MegaEvoLevelSettings0V0373PokemonSalamence = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0373_POKEMON_SALAMENCE">;
export type MegaEvoLevelSettings0V0376PokemonMetagross = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0376_POKEMON_METAGROSS">;
export type MegaEvoLevelSettings0V0380PokemonLatias = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0380_POKEMON_LATIAS">;
export type MegaEvoLevelSettings0V0381PokemonLatios = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0381_POKEMON_LATIOS">;
export type MegaEvoLevelSettings0V0382PokemonKyogre = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0382_POKEMON_KYOGRE">;
export type MegaEvoLevelSettings0V0383PokemonGroudon = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0383_POKEMON_GROUDON">;
export type MegaEvoLevelSettings0V0384PokemonRayquaza = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0384_POKEMON_RAYQUAZA">;
export type MegaEvoLevelSettings0V0445PokemonGarchomp = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0445_POKEMON_GARCHOMP">;
export type MegaEvoLevelSettings0V0687PokemonMalamar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0687_POKEMON_MALAMAR">;
export type MegaEvoLevelSettings0V0719PokemonDiancie = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_0_V0719_POKEMON_DIANCIE">;
export type MegaEvoLevelSettings1 = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1">;
export type MegaEvoLevelSettings1V0015PokemonBeedrill = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0015_POKEMON_BEEDRILL">;
export type MegaEvoLevelSettings1V0018PokemonPidgeot = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0018_POKEMON_PIDGEOT">;
export type MegaEvoLevelSettings1V0071PokemonVictreebel = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0071_POKEMON_VICTREEBEL">;
export type MegaEvoLevelSettings1V0080PokemonSlowbro = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0080_POKEMON_SLOWBRO">;
export type MegaEvoLevelSettings1V0130PokemonGyarados = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0130_POKEMON_GYARADOS">;
export type MegaEvoLevelSettings1V0149PokemonDragonite = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0149_POKEMON_DRAGONITE">;
export type MegaEvoLevelSettings1V0150PokemonMewtwo = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0150_POKEMON_MEWTWO">;
export type MegaEvoLevelSettings1V0229PokemonHoundoom = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0229_POKEMON_HOUNDOOM">;
export type MegaEvoLevelSettings1V0248PokemonTyranitar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0248_POKEMON_TYRANITAR">;
export type MegaEvoLevelSettings1V0302PokemonSableye = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0302_POKEMON_SABLEYE">;
export type MegaEvoLevelSettings1V0308PokemonMedicham = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0308_POKEMON_MEDICHAM">;
export type MegaEvoLevelSettings1V0310PokemonManectric = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0310_POKEMON_MANECTRIC">;
export type MegaEvoLevelSettings1V0334PokemonAltaria = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0334_POKEMON_ALTARIA">;
export type MegaEvoLevelSettings1V0354PokemonBanette = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0354_POKEMON_BANETTE">;
export type MegaEvoLevelSettings1V0373PokemonSalamence = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0373_POKEMON_SALAMENCE">;
export type MegaEvoLevelSettings1V0376PokemonMetagross = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0376_POKEMON_METAGROSS">;
export type MegaEvoLevelSettings1V0380PokemonLatias = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0380_POKEMON_LATIAS">;
export type MegaEvoLevelSettings1V0381PokemonLatios = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0381_POKEMON_LATIOS">;
export type MegaEvoLevelSettings1V0382PokemonKyogre = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0382_POKEMON_KYOGRE">;
export type MegaEvoLevelSettings1V0383PokemonGroudon = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0383_POKEMON_GROUDON">;
export type MegaEvoLevelSettings1V0384PokemonRayquaza = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0384_POKEMON_RAYQUAZA">;
export type MegaEvoLevelSettings1V0445PokemonGarchomp = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0445_POKEMON_GARCHOMP">;
export type MegaEvoLevelSettings1V0687PokemonMalamar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0687_POKEMON_MALAMAR">;
export type MegaEvoLevelSettings1V0719PokemonDiancie = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_1_V0719_POKEMON_DIANCIE">;
export type MegaEvoLevelSettings2 = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2">;
export type MegaEvoLevelSettings2V0015PokemonBeedrill = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0015_POKEMON_BEEDRILL">;
export type MegaEvoLevelSettings2V0018PokemonPidgeot = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0018_POKEMON_PIDGEOT">;
export type MegaEvoLevelSettings2V0071PokemonVictreebel = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0071_POKEMON_VICTREEBEL">;
export type MegaEvoLevelSettings2V0080PokemonSlowbro = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0080_POKEMON_SLOWBRO">;
export type MegaEvoLevelSettings2V0130PokemonGyarados = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0130_POKEMON_GYARADOS">;
export type MegaEvoLevelSettings2V0149PokemonDragonite = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0149_POKEMON_DRAGONITE">;
export type MegaEvoLevelSettings2V0150PokemonMewtwo = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0150_POKEMON_MEWTWO">;
export type MegaEvoLevelSettings2V0229PokemonHoundoom = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0229_POKEMON_HOUNDOOM">;
export type MegaEvoLevelSettings2V0248PokemonTyranitar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0248_POKEMON_TYRANITAR">;
export type MegaEvoLevelSettings2V0302PokemonSableye = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0302_POKEMON_SABLEYE">;
export type MegaEvoLevelSettings2V0308PokemonMedicham = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0308_POKEMON_MEDICHAM">;
export type MegaEvoLevelSettings2V0310PokemonManectric = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0310_POKEMON_MANECTRIC">;
export type MegaEvoLevelSettings2V0334PokemonAltaria = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0334_POKEMON_ALTARIA">;
export type MegaEvoLevelSettings2V0354PokemonBanette = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0354_POKEMON_BANETTE">;
export type MegaEvoLevelSettings2V0373PokemonSalamence = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0373_POKEMON_SALAMENCE">;
export type MegaEvoLevelSettings2V0376PokemonMetagross = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0376_POKEMON_METAGROSS">;
export type MegaEvoLevelSettings2V0380PokemonLatias = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0380_POKEMON_LATIAS">;
export type MegaEvoLevelSettings2V0381PokemonLatios = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0381_POKEMON_LATIOS">;
export type MegaEvoLevelSettings2V0382PokemonKyogre = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0382_POKEMON_KYOGRE">;
export type MegaEvoLevelSettings2V0383PokemonGroudon = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0383_POKEMON_GROUDON">;
export type MegaEvoLevelSettings2V0384PokemonRayquaza = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0384_POKEMON_RAYQUAZA">;
export type MegaEvoLevelSettings2V0445PokemonGarchomp = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0445_POKEMON_GARCHOMP">;
export type MegaEvoLevelSettings2V0687PokemonMalamar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0687_POKEMON_MALAMAR">;
export type MegaEvoLevelSettings2V0719PokemonDiancie = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_2_V0719_POKEMON_DIANCIE">;
export type MegaEvoLevelSettings3 = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3">;
export type MegaEvoLevelSettings3V0015PokemonBeedrill = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0015_POKEMON_BEEDRILL">;
export type MegaEvoLevelSettings3V0018PokemonPidgeot = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0018_POKEMON_PIDGEOT">;
export type MegaEvoLevelSettings3V0071PokemonVictreebel = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0071_POKEMON_VICTREEBEL">;
export type MegaEvoLevelSettings3V0080PokemonSlowbro = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0080_POKEMON_SLOWBRO">;
export type MegaEvoLevelSettings3V0130PokemonGyarados = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0130_POKEMON_GYARADOS">;
export type MegaEvoLevelSettings3V0149PokemonDragonite = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0149_POKEMON_DRAGONITE">;
export type MegaEvoLevelSettings3V0150PokemonMewtwo = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0150_POKEMON_MEWTWO">;
export type MegaEvoLevelSettings3V0229PokemonHoundoom = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0229_POKEMON_HOUNDOOM">;
export type MegaEvoLevelSettings3V0248PokemonTyranitar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0248_POKEMON_TYRANITAR">;
export type MegaEvoLevelSettings3V0302PokemonSableye = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0302_POKEMON_SABLEYE">;
export type MegaEvoLevelSettings3V0308PokemonMedicham = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0308_POKEMON_MEDICHAM">;
export type MegaEvoLevelSettings3V0310PokemonManectric = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0310_POKEMON_MANECTRIC">;
export type MegaEvoLevelSettings3V0334PokemonAltaria = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0334_POKEMON_ALTARIA">;
export type MegaEvoLevelSettings3V0354PokemonBanette = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0354_POKEMON_BANETTE">;
export type MegaEvoLevelSettings3V0373PokemonSalamence = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0373_POKEMON_SALAMENCE">;
export type MegaEvoLevelSettings3V0376PokemonMetagross = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0376_POKEMON_METAGROSS">;
export type MegaEvoLevelSettings3V0380PokemonLatias = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0380_POKEMON_LATIAS">;
export type MegaEvoLevelSettings3V0381PokemonLatios = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0381_POKEMON_LATIOS">;
export type MegaEvoLevelSettings3V0382PokemonKyogre = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0382_POKEMON_KYOGRE">;
export type MegaEvoLevelSettings3V0383PokemonGroudon = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0383_POKEMON_GROUDON">;
export type MegaEvoLevelSettings3V0384PokemonRayquaza = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0384_POKEMON_RAYQUAZA">;
export type MegaEvoLevelSettings3V0445PokemonGarchomp = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0445_POKEMON_GARCHOMP">;
export type MegaEvoLevelSettings3V0687PokemonMalamar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0687_POKEMON_MALAMAR">;
export type MegaEvoLevelSettings3V0719PokemonDiancie = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_3_V0719_POKEMON_DIANCIE">;
export type MegaEvoLevelSettings4V0071PokemonVictreebel = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_4_V0071_POKEMON_VICTREEBEL">;
export type MegaEvoLevelSettings4V0149PokemonDragonite = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_4_V0149_POKEMON_DRAGONITE">;
export type MegaEvoLevelSettings4V0687PokemonMalamar = MegaEvoLevelSettings<"MEGA_EVOLUTION_LEVEL_4_V0687_POKEMON_MALAMAR">;

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

// Generated from Pokémon GO masterfile — group "fortPowerUpLevelSettings", 4 entries (structural types).

export type * from "./variants";

export interface FortPowerUpLevelSettings<TemplateID extends string = string, TData extends FortPowerUpLevelSettingsData = FortPowerUpLevelSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		fortPowerUpLevelSettings: TData & {
			level: TemplateID;
		};
	};
}

export interface FortPowerUpLevelSettingsData {
	additionalLevelPowerupDurationMs?: number;
	minPowerUpPointsRequired?: number;
	powerupLevelRewards?: Array<
		"FORT_POWER_UP_LEVEL_REWARD_BUDDY_BONUS_HEART" | "FORT_POWER_UP_REWARD_BONUS_ITEM_ON_SPIN" | "FORT_POWER_UP_REWARD_BONUS_RAID_POKEBALLS"
	>;
}

export type FortPowerUpLevelSettingsMasterfileEntry =
	| FortPowerUpLevelSettings0
	| FortPowerUpLevelSettings1
	| FortPowerUpLevelSettings2
	| FortPowerUpLevelSettings3;

export type FortPowerUpLevelSettingsTemplateID = FortPowerUpLevelSettingsMasterfileEntry["templateId"];

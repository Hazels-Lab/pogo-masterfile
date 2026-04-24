export interface VnextBattleConfig<T extends string> {
	templateId: T;
	data: VnextBattleConfigData<T>;
}

export interface VnextBattleConfigData<T extends string> {
	templateId: T;
	vnextBattleConfig: unknown;
}

export type VnextBattleConfigClientVnextBattleConfig = VnextBattleConfig<"CLIENT_VNEXT_BATTLE_CONFIG">;
export type VnextBattleConfigVnextBattleConfig = VnextBattleConfig<"VNEXT_BATTLE_CONFIG">;

export type VnextBattleConfigMasterfileEntry =
	| VnextBattleConfigClientVnextBattleConfig
	| VnextBattleConfigVnextBattleConfig;

export type VnextBattleConfigTemplateID = VnextBattleConfigMasterfileEntry["templateId"];

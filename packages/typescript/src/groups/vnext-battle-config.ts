export interface VnextBattleConfig<TemplateID extends string> {
	templateId: TemplateID;
	data: VnextBattleConfigData<TemplateID>;
}

export interface VnextBattleConfigData<TemplateID extends string> {
	templateId: TemplateID;
	vnextBattleConfig: {
		maxBattleConfig: {
			badNetworkWarningThresholdTurns?: "12";
			battleEndTimeoutThresholdMs?: "2000";
			deadNetworkDisconnectThresholdTurns: "60";
			noOpponentConnectionDisconnectThresholdTurns?: "12";
		};
		pvpBattleConfig?: {
			badNetworkWarningThresholdTurns: "12";
			battleEndTimeoutThresholdMs: "2000";
			deadNetworkDisconnectThresholdTurns: "120";
			noOpponentConnectionDisconnectThresholdTurns: "12";
		};
		raidsBattleConfig: {
			badNetworkWarningThresholdTurns?: "12";
			battleEndTimeoutThresholdMs?: "2000";
			deadNetworkDisconnectThresholdTurns: "60";
			noOpponentConnectionDisconnectThresholdTurns?: "12";
		};
	};
}

export type VnextBattleConfigClientVnextBattleConfig = VnextBattleConfig<"CLIENT_VNEXT_BATTLE_CONFIG">;
export type VnextBattleConfigVnextBattleConfig = VnextBattleConfig<"VNEXT_BATTLE_CONFIG">;

export type VnextBattleConfigMasterfileEntry =
	| VnextBattleConfigClientVnextBattleConfig
	| VnextBattleConfigVnextBattleConfig;

export type VnextBattleConfigTemplateID = VnextBattleConfigMasterfileEntry["templateId"];

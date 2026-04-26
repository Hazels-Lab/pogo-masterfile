export interface VnextBattleConfig<TemplateID extends string = string, TData extends VnextBattleConfigData = VnextBattleConfigData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		vnextBattleConfig: TData & {
			maxBattleConfig: {
				deadNetworkDisconnectThresholdTurns: "60";
			};
			raidsBattleConfig: {
				deadNetworkDisconnectThresholdTurns: "60";
			};
		};
	};
}

export interface VnextBattleConfigData {
	maxBattleConfig?: {
		badNetworkWarningThresholdTurns?: string;
		battleEndTimeoutThresholdMs?: string;
		noOpponentConnectionDisconnectThresholdTurns?: string;
	};
	pvpBattleConfig?: {
		badNetworkWarningThresholdTurns?: string;
		battleEndTimeoutThresholdMs?: string;
		deadNetworkDisconnectThresholdTurns?: string;
		noOpponentConnectionDisconnectThresholdTurns?: string;
	};
	raidsBattleConfig?: {
		badNetworkWarningThresholdTurns?: string;
		battleEndTimeoutThresholdMs?: string;
		noOpponentConnectionDisconnectThresholdTurns?: string;
	};
}

export type VnextBattleConfigClientVnextBattleConfig = VnextBattleConfig<
	"CLIENT_VNEXT_BATTLE_CONFIG",
	{
		maxBattleConfig: {
			badNetworkWarningThresholdTurns: "12";
			battleEndTimeoutThresholdMs: "2000";
			noOpponentConnectionDisconnectThresholdTurns: "12";
		};
		pvpBattleConfig: {
			badNetworkWarningThresholdTurns: "12";
			battleEndTimeoutThresholdMs: "2000";
			deadNetworkDisconnectThresholdTurns: "120";
			noOpponentConnectionDisconnectThresholdTurns: "12";
		};
		raidsBattleConfig: {
			badNetworkWarningThresholdTurns: "12";
			battleEndTimeoutThresholdMs: "2000";
			noOpponentConnectionDisconnectThresholdTurns: "12";
		};
	}
>;
export type VnextBattleConfigVnextBattleConfig = VnextBattleConfig<"VNEXT_BATTLE_CONFIG">;

export type VnextBattleConfigMasterfileEntry = VnextBattleConfigClientVnextBattleConfig | VnextBattleConfigVnextBattleConfig;

export type VnextBattleConfigTemplateID = VnextBattleConfigMasterfileEntry["templateId"];

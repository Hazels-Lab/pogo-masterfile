// Generated from Pokémon GO masterfile — group "vnextBattleConfig", 2 entries (structural types).

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
	maxBattleConfig: {
		badNetworkWarningThresholdTurns?: "12";
		battleEndTimeoutThresholdMs?: "2000";
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
		noOpponentConnectionDisconnectThresholdTurns?: "12";
	};
}

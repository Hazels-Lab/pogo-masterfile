// Generated from Pokémon GO masterfile — group "vnextBattleConfig", 2 entries (variant aliases).

import type { S } from "../_utils";
import type { VnextBattleConfig } from "./index";

export type VnextBattleConfigClient = S<
	VnextBattleConfig<
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
	>
>;
export type VnextBattleConfigVnextBattleConfig = S<
	VnextBattleConfig<
		"VNEXT_BATTLE_CONFIG",
		{
			maxBattleConfig: object;
			raidsBattleConfig: object;
		}
	>
>;

export type VnextBattleConfigMasterfileEntry = VnextBattleConfigClient | VnextBattleConfigVnextBattleConfig;

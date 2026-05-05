// Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings", 2 entries (variant aliases).

import type { S } from "../../_utils";
import type { PartyPlayGeneralSettings } from "../types";

export type PartyPlayGeneralSettingsPartyPlayGeneralSettings = S<
	PartyPlayGeneralSettings<
		"PARTY_PLAY_GENERAL_SETTINGS",
		{
			complianceZonesEnabled: true;
			creationToStartTimeoutMs: "600000";
			enabledFriendStatusIncrease: true;
			enablePartyRaidInformation: true;
			maxStackedEncounterReward: 1;
			minPlayerLevel: 21;
			partyCatchTagsEnabled: true;
			partyExpiryDurationMs: "10800000";
			partyExpiryWarningMinutes: 10;
			partyIapBoostsEnabled: true;
			partyNewQuestNotificationV2Enabled: true;
			partyQuestEncounterRewardEnabled: true;
			pgDeliveryMechanic: "POLLING_BIT";
			restartPartyRejoinPromptEnabled: true;
		}
	>
>;
export type PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings = S<
	PartyPlayGeneralSettings<
		"WEEKLY_CHALLENGE_GENERAL_SETTINGS",
		{
			inviteExpirationMs: 86400000;
			matchmakingEnabled: true;
			maxInvitesPerPlayer: 10;
			maxPartySize: 4;
			minPlayerLevel: 13;
			notificationMilestones: [0.25, 0.5, 0.75, 1];
			partyRewardGracePeriodMs: "604800000";
			partySchedulingSettings: {
				recurringChallengeSchedule: {
					dayAndTimeEndTime: {
						dayOfWeek: 2;
						hourOfDay: 1;
					};
					dayAndTimeStartTime: {
						dayOfWeek: 2;
						hourOfDay: 1;
					};
					maxNumChallengePerCycle: 1;
					nearEndNotification: {
						avalibleWindowHours: 2;
						enabled: true;
						isLocal: true;
						time: {
							dayOfWeek: 1;
							hourOfDay: 19;
						};
					};
					startNotification: {
						avalibleWindowHours: 120;
						enabled: true;
						isLocal: true;
						time: {
							dayOfWeek: 2;
							hourOfDay: 18;
						};
					};
					timezoneId: "UTC";
				};
			};
			sendInviteEnabled: true;
		}
	>
>;

export type PartyPlayGeneralSettingsMasterfileEntry = PartyPlayGeneralSettingsPartyPlayGeneralSettings | PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings;

export type PartyPlayGeneralSettingsTemplateID = PartyPlayGeneralSettingsMasterfileEntry["templateId"];

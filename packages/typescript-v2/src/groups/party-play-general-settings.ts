export interface PartyPlayGeneralSettings<T extends string> {
	templateId: T;
	data: PartyPlayGeneralSettingsData<T>;
}

export interface PartyPlayGeneralSettingsData<T extends string> {
	templateId: T;
	partyPlayGeneralSettings: {
		complianceZonesEnabled?: true;
		creationToStartTimeoutMs?: "600000";
		enabled: true;
		enabledFriendStatusIncrease?: true;
		enablePartyRaidInformation?: true;
		fallbackPartyQuestEnabled: true;
		friendRequestsEnabled: true;
		inviteExpirationMs?: 86400000;
		matchmakingEnabled?: true;
		maxInvitesPerPlayer?: 10;
		maxPartySize?: 4;
		maxStackedEncounterReward?: 1;
		minPlayerLevel: 13 | 21;
		notificationMilestones?: [
			0.25,
			0.5,
			0.75,
			1
		];
		partyCatchTagsEnabled?: true;
		partyExpiryDurationMs?: "10800000";
		partyExpiryWarningMinutes?: 10;
		partyIapBoostsEnabled?: true;
		partyNewQuestNotificationV2Enabled?: true;
		partyQuestEncounterRewardEnabled?: true;
		partyRewardGracePeriodMs?: "604800000";
		partySchedulingSettings?: {
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
		pgDeliveryMechanic?: "POLLING_BIT";
		restartPartyRejoinPromptEnabled?: true;
		sendInviteEnabled?: true;
	};
}

export type PartyPlayGeneralSettingsPartyPlayGeneralSettings = PartyPlayGeneralSettings<"PARTY_PLAY_GENERAL_SETTINGS">;
export type PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings = PartyPlayGeneralSettings<"WEEKLY_CHALLENGE_GENERAL_SETTINGS">;

export type PartyPlayGeneralSettingsMasterfileEntry =
	| PartyPlayGeneralSettingsPartyPlayGeneralSettings
	| PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings;

export type PartyPlayGeneralSettingsTemplateID = PartyPlayGeneralSettingsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings", 2 entries.

export interface PartyPlayGeneralSettings<
	TemplateID extends string = string,
	TData extends PartyPlayGeneralSettingsData = PartyPlayGeneralSettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		partyPlayGeneralSettings: TData & {
			enabled: true;
			fallbackPartyQuestEnabled: true;
			friendRequestsEnabled: true;
		};
	};
}

export interface PartyPlayGeneralSettingsData {
	complianceZonesEnabled?: boolean;
	creationToStartTimeoutMs?: "600000";
	enabledFriendStatusIncrease?: boolean;
	enablePartyRaidInformation?: boolean;
	inviteExpirationMs?: number;
	matchmakingEnabled?: boolean;
	maxInvitesPerPlayer?: number;
	maxPartySize?: number;
	maxStackedEncounterReward?: number;
	minPlayerLevel: number;
	notificationMilestones?: [number, number, number, number];
	partyCatchTagsEnabled?: boolean;
	partyExpiryDurationMs?: "10800000";
	partyExpiryWarningMinutes?: number;
	partyIapBoostsEnabled?: boolean;
	partyNewQuestNotificationV2Enabled?: boolean;
	partyQuestEncounterRewardEnabled?: boolean;
	partyRewardGracePeriodMs?: "604800000";
	partySchedulingSettings?: {
		recurringChallengeSchedule: {
			dayAndTimeEndTime: {
				dayOfWeek: number;
				hourOfDay: number;
			};
			dayAndTimeStartTime: {
				dayOfWeek: number;
				hourOfDay: number;
			};
			maxNumChallengePerCycle: number;
			nearEndNotification: {
				avalibleWindowHours: number;
				enabled: boolean;
				isLocal: boolean;
				time: {
					dayOfWeek: number;
					hourOfDay: number;
				};
			};
			startNotification: {
				avalibleWindowHours: number;
				enabled: boolean;
				isLocal: boolean;
				time: {
					dayOfWeek: number;
					hourOfDay: number;
				};
			};
			timezoneId: "UTC";
		};
	};
	pgDeliveryMechanic?: "POLLING_BIT";
	restartPartyRejoinPromptEnabled?: boolean;
	sendInviteEnabled?: boolean;
}

export type PartyPlayGeneralSettingsPartyPlayGeneralSettings = PartyPlayGeneralSettings<
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
>;
export type PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings = PartyPlayGeneralSettings<
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
>;

export type PartyPlayGeneralSettingsMasterfileEntry =
	| PartyPlayGeneralSettingsPartyPlayGeneralSettings
	| PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings;

export type PartyPlayGeneralSettingsTemplateID = PartyPlayGeneralSettingsMasterfileEntry["templateId"];

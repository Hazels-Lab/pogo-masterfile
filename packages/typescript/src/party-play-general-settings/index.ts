// Generated from Pokémon GO masterfile — group "partyPlayGeneralSettings", 2 entries (structural types).

export type * from "./variants";

export interface PartyPlayGeneralSettings<TemplateID extends string = string, TData extends PartyPlayGeneralSettingsData = PartyPlayGeneralSettingsData> {
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

export type PartyPlayGeneralSettingsMasterfileEntry = PartyPlayGeneralSettingsPartyPlayGeneralSettings | PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings;

export type PartyPlayGeneralSettingsTemplateID = PartyPlayGeneralSettingsMasterfileEntry["templateId"];

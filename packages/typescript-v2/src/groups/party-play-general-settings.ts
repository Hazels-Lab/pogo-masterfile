export interface PartyPlayGeneralSettings<T extends string> {
	templateId: T;
	data: PartyPlayGeneralSettingsData<T>;
}

export interface PartyPlayGeneralSettingsData<T extends string> {
	templateId: T;
	partyPlayGeneralSettings: unknown;
}

export type PartyPlayGeneralSettingsPartyPlayGeneralSettings = PartyPlayGeneralSettings<"PARTY_PLAY_GENERAL_SETTINGS">;
export type PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings = PartyPlayGeneralSettings<"WEEKLY_CHALLENGE_GENERAL_SETTINGS">;

export type PartyPlayGeneralSettingsMasterfileEntry =
	| PartyPlayGeneralSettingsPartyPlayGeneralSettings
	| PartyPlayGeneralSettingsWeeklyChallengeGeneralSettings;

export type PartyPlayGeneralSettingsTemplateID = PartyPlayGeneralSettingsMasterfileEntry["templateId"];

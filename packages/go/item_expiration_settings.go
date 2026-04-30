// Generated from Pokémon GO masterfile — group "itemExpirationSettings".

package masterfile

type ItemExpirationSettingsLootItem struct {
	Count    uint64 `json:"count"`
	Stardust bool   `json:"stardust"`
}

type ItemExpirationSettingsConsolationItems struct {
	LootItem [1]ItemExpirationSettingsLootItem `json:"lootItem"`
}

type ItemExpirationSettingsEnabledTimePeriods struct {
	EnabledEndTime   string `json:"enabledEndTime"`
	EnabledStartTime string `json:"enabledStartTime"`
}

type ItemExpirationSettingsItemEnablementSettings struct {
	EnabledTimePeriods [2]ItemExpirationSettingsEnabledTimePeriods `json:"enabledTimePeriods"`
}

type ItemExpirationSettings struct {
	ConsolationItems        *ItemExpirationSettingsConsolationItems       `json:"consolationItems,omitempty"`
	EmergencyExpirationTime *string                                       `json:"emergencyExpirationTime,omitempty"`
	ExpirationTime          string                                        `json:"expirationTime"`
	Item                    string                                        `json:"item"`
	ItemEnablementSettings  *ItemExpirationSettingsItemEnablementSettings `json:"itemEnablementSettings,omitempty"`
}

type ItemExpirationSettingsEntry struct {
	TemplateID string                          `json:"templateId"`
	Data       ItemExpirationSettingsEntryData `json:"data"`
}

func (ItemExpirationSettingsEntry) isMasterfileEntry() {}

type ItemExpirationSettingsEntryData struct {
	TemplateID             string                 `json:"templateId"`
	ItemExpirationSettings ItemExpirationSettings `json:"itemExpirationSettings"`
}

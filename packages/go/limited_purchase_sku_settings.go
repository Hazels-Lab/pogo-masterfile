// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings".

package masterfile

type LimitedPurchaseSkuSettings struct {
	ChronoUnit *string `json:"chronoUnit,omitempty"`
	LootTableId *string `json:"lootTableId,omitempty"`
	PurchaseLimit uint64 `json:"purchaseLimit"`
	ResetInterval *uint64 `json:"resetInterval,omitempty"`
	Version *uint64 `json:"version,omitempty"`
}

type LimitedPurchaseSkuSettingsEntry struct {
	TemplateID string `json:"templateId"`
	Data       LimitedPurchaseSkuSettingsEntryData `json:"data"`
}

func (LimitedPurchaseSkuSettingsEntry) isMasterfileEntry() {}

type LimitedPurchaseSkuSettingsEntryData struct {
	TemplateID     string `json:"templateId"`
	LimitedPurchaseSkuSettings LimitedPurchaseSkuSettings `json:"limitedPurchaseSkuSettings"`
}

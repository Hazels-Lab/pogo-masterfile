// Generated from Pokémon GO masterfile — group "limitedPurchaseSkuSettings".

package limited_purchase_sku_settings

type LimitedPurchaseSkuSettings struct {
	ChronoUnit    *string `json:"chronoUnit,omitempty"`
	LootTableId   *string `json:"lootTableId,omitempty"`
	PurchaseLimit uint64  `json:"purchaseLimit"`
	ResetInterval *uint64 `json:"resetInterval,omitempty"`
	Version       *uint64 `json:"version,omitempty"`
}

type LimitedPurchaseSkuSettingsEntry struct {
	TemplateID string                              `json:"templateId"`
	Data       LimitedPurchaseSkuSettingsEntryData `json:"data"`
}

func (LimitedPurchaseSkuSettingsEntry) MasterfileEntry() {}

type LimitedPurchaseSkuSettingsEntryData struct {
	TemplateID                 string                     `json:"templateId"`
	LimitedPurchaseSkuSettings LimitedPurchaseSkuSettings `json:"limitedPurchaseSkuSettings"`
}

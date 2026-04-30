// Generated from Pokémon GO masterfile — group "iapItemDisplay".

package masterfile

type IapItemDisplay struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	Hidden *bool `json:"hidden,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	MaxLevel *uint64 `json:"maxLevel,omitempty"`
	Sale *bool `json:"sale,omitempty"`
	ShowDiscountTag *bool `json:"showDiscountTag,omitempty"`
	ShowStrikethroughPrice *bool `json:"showStrikethroughPrice,omitempty"`
	Sku string `json:"sku"`
	SkuDisableTime *string `json:"skuDisableTime,omitempty"`
	SkuDisableTimeUtcMs *string `json:"skuDisableTimeUtcMs,omitempty"`
	SkuEnableTime *string `json:"skuEnableTime,omitempty"`
	SkuEnableTimeUtcMs *string `json:"skuEnableTimeUtcMs,omitempty"`
	SortOrder *int64 `json:"sortOrder,omitempty"`
	SpriteId *string `json:"spriteId,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalValue *uint64 `json:"totalValue,omitempty"`
	WebstoreSkuId *string `json:"webstoreSkuId,omitempty"`
	WebstoreSkuPriceE6 *uint64 `json:"webstoreSkuPriceE6,omitempty"`
}

type IapItemDisplayEntry struct {
	TemplateID string `json:"templateId"`
	Data       IapItemDisplayEntryData `json:"data"`
}

func (IapItemDisplayEntry) isMasterfileEntry() {}

type IapItemDisplayEntryData struct {
	TemplateID     string `json:"templateId"`
	IapItemDisplay IapItemDisplay `json:"iapItemDisplay"`
}

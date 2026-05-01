// Generated from Pokémon GO masterfile — group "iapCategoryDisplay".

package iap_category_display

import "encoding/json"

type IapCategoryDisplay struct {
	BannerEnabled *bool           `json:"bannerEnabled,omitempty"`
	BannerTitle   *string         `json:"bannerTitle,omitempty"`
	Category      json.RawMessage `json:"category,omitempty"`
	Description   *string         `json:"description,omitempty"`
	DisplayRows   *uint64         `json:"displayRows,omitempty"`
	Hidden        *bool           `json:"hidden,omitempty"`
	ImageUrl      *string         `json:"imageUrl,omitempty"`
	Name          *string         `json:"name,omitempty"`
	SortOrder     *uint64         `json:"sortOrder,omitempty"`
}

type IapCategoryDisplayEntry struct {
	TemplateID string                      `json:"templateId"`
	Data       IapCategoryDisplayEntryData `json:"data"`
}

func (IapCategoryDisplayEntry) MasterfileEntry() {}

type IapCategoryDisplayEntryData struct {
	TemplateID         string             `json:"templateId"`
	IapCategoryDisplay IapCategoryDisplay `json:"iapCategoryDisplay"`
}

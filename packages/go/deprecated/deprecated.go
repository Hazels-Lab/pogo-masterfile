// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

package deprecated

import "encoding/json"

// MasterfileEntry is a masterfile entry with a deprecated templateId.
//
// Deprecated: historical masterfile entry type for templates removed from upstream.
// Currently tracking 12426 deprecated templateIds across 42 discriminators.
// Most recently deprecated: 2026-05-08.
// See deprecated.d.ts (TypeScript) for the full enumerated list.
type MasterfileEntry struct {
	TemplateID string          `json:"templateId"`
	Data       json.RawMessage `json:"data"`
}

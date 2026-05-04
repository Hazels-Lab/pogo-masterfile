// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

use serde::{Deserialize, Serialize};
use serde_json::Value;

/// Currently tracking 12423 deprecated templateIds across 42 discriminators.
/// See deprecated.d.ts (TypeScript) for the full enumerated list.
/// Most recently deprecated: 2026-05-01.
#[deprecated(note = "Historical masterfile entry type for templates removed from upstream")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeprecatedMasterfileEntry {
    pub template_id: String,
    pub data: Value,
}

// v0.1.2 release-trigger

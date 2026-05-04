import type { DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

use serde::{Deserialize, Serialize};
use serde_json::Value;
`;

export function emitRust(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const totalIds = sorted.reduce((n, d) => n + d.templateIds.size, 0);
	const mostRecent = sorted.reduce((best, d) => (d.lastSeen > best ? d.lastSeen : best), "");

	const docLine =
		sorted.length > 0
			? `/// Currently tracking ${totalIds} deprecated templateIds across ${sorted.length} discriminators.\n/// See deprecated.d.ts (TypeScript) for the full enumerated list.\n/// Most recently deprecated: ${mostRecent}.`
			: `/// No deprecated templateIds currently tracked.`;

	const struct = `${docLine}
#[deprecated(note = "Historical masterfile entry type for templates removed from upstream")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeprecatedMasterfileEntry {
    pub template_id: String,
    pub data: Value,
}
`;

	return `${HEADER}\n${struct}`;
}

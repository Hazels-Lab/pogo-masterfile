import type { DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

package deprecated

import "encoding/json"
`;

export function emitGo(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const totalIds = sorted.reduce((n, d) => n + d.templateIds.size, 0);
	const mostRecent = sorted.reduce((best, d) => (d.lastSeen > best ? d.lastSeen : best), "");

	const docComment =
		sorted.length > 0
			? `// MasterfileEntry is a masterfile entry with a deprecated templateId.
//
// Deprecated: historical masterfile entry type for templates removed from upstream.
// Currently tracking ${totalIds} deprecated templateIds across ${sorted.length} discriminators.
// Most recently deprecated: ${mostRecent}.
// See deprecated.d.ts (TypeScript) for the full enumerated list.`
			: `// MasterfileEntry is a masterfile entry with a deprecated templateId.
//
// Deprecated: historical masterfile entry type for templates removed from upstream.
// No deprecated templateIds currently tracked.`;

	const struct = `${docComment}
type MasterfileEntry struct {
\tTemplateID string          \`json:"templateId"\`
\tData       json.RawMessage \`json:"data"\`
}
`;

	return `${HEADER}\n${struct}`;
}

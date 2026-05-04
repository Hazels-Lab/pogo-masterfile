import { groupName, snakeCase } from "../naming";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

use serde::{Deserialize, Serialize};
`;

export function emitRust(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	if (sorted.length === 0) return HEADER;
	return `${HEADER}\n${sorted.map(emitOneDiscriminator).join("\n\n")}\n`;
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = groupName(d.discriminator);
	const rawDataBody = d.dataTypeBody.rust.trim();
	// When dataTypeBody is empty (bootstrap scaffold), emit a minimal placeholder struct
	// so that the `XxxData` reference in `XxxBody` resolves.
	const dataBody =
		rawDataBody ||
		`#[deprecated(note = "lastSeen ${d.lastSeen} — ${d.entryCount} entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ${Pascal}Data {}`;

	const wrapper = `#[deprecated(note = "lastSeen ${d.lastSeen} — ${d.entryCount} entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ${Pascal} {
	pub template_id: String,
	pub data: ${Pascal}Body,
}

#[deprecated(note = "lastSeen ${d.lastSeen} — ${d.entryCount} entries")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ${Pascal}Body {
	pub template_id: String,
	pub ${snakeCase(d.discriminator)}: ${Pascal}Data,
}`;

	return `${dataBody}\n\n${wrapper}`;
}

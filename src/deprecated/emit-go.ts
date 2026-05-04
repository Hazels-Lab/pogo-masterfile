import { groupName } from "../naming";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// See docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

package deprecated
`;

export function emitGo(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	if (sorted.length === 0) return HEADER;
	return `${HEADER}\n${sorted.map(emitOneDiscriminator).join("\n\n")}\n`;
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = groupName(d.discriminator);
	const rawDataBody = d.dataTypeBody.go.trim();
	// When dataTypeBody is empty (bootstrap scaffold), emit a minimal placeholder struct
	// so that the `XxxData` reference in `XxxBody` resolves.
	const dataBody =
		rawDataBody ||
		`// Deprecated: lastSeen ${d.lastSeen}, ${d.entryCount} entries
type ${Pascal}Data struct{}`;

	const wrapper = `// Deprecated: lastSeen ${d.lastSeen}, ${d.entryCount} entries
type ${Pascal} struct {
	TemplateID string         \`json:"templateId"\`
	Data       ${Pascal}Body  \`json:"data"\`
}

// Deprecated: lastSeen ${d.lastSeen}, ${d.entryCount} entries
type ${Pascal}Body struct {
	TemplateID string       \`json:"templateId"\`
	${Pascal} ${Pascal}Data \`json:"${d.discriminator}"\`
}`;

	return `${dataBody}\n\n${wrapper}`;
}

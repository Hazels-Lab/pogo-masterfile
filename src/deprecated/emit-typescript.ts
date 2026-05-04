import { compareNatural } from "../helpers";
import { groupName } from "../naming";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// Re-exports live types and adds DeprecatedTemplateId / DeprecatedMasterfileEntry for
// templates removed from the upstream GAME_MASTER.json. See
// docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

export type * from "./entries";
export type * from "./types";
`;

export function emitTypescript(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const blocks = sorted.map(emitOneDiscriminator).join("\n");

	const groupTypeNames = sorted.map((d) => `Deprecated${groupName(d.discriminator)}Ids`);

	let union: string;
	const ENTRY_TYPE_JSDOC = [
		"/**",
		" * A masterfile entry with a deprecated templateId. Inner data shape is opaque",
		" * by default; pass a TData type parameter to narrow.",
		" *",
		" * @example",
		" * type AnyDeprecated = DeprecatedMasterfileEntry;                                // any deprecated id, opaque data",
		' * type SpecificId = DeprecatedMasterfileEntry<"FOO_BAR">;                        // narrowed id',
		' * type FullyTyped = DeprecatedMasterfileEntry<"FOO_BAR", { foo: { x: 1 } }>;     // narrowed id + data',
		" */",
	].join("\n");

	const defaultId = groupTypeNames.length === 0 ? "never" : "DeprecatedTemplateId";
	const ENTRY_TYPE_BODY = [
		`export type DeprecatedMasterfileEntry<`,
		`\tTemplateID extends string = ${defaultId},`,
		`\tTData = { [key: string]: unknown },`,
		`> = {`,
		`\ttemplateId: TemplateID;`,
		`\tdata: TData & {`,
		`\t\ttemplateId: TemplateID;`,
		`\t};`,
		`};`,
	].join("\n");

	const entryType = `\n${ENTRY_TYPE_JSDOC}\n${ENTRY_TYPE_BODY}\n`;

	if (groupTypeNames.length === 0) {
		union = `\n/** Union of every currently-deprecated templateId. */\nexport type DeprecatedTemplateId = never;\n`;
	} else {
		const unionRhs = `\n\t| ${groupTypeNames.join("\n\t| ")}`;
		union = `\n/** Union of every currently-deprecated templateId. */\nexport type DeprecatedTemplateId =${unionRhs};\n`;
	}

	return HEADER + blocks + union + entryType;
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = groupName(d.discriminator);
	const literals = [...d.templateIds]
		.sort(compareNatural)
		.map((id) => `"${id}"`)
		.join(" | ");
	const jsdoc = `/** @deprecated lastSeen ${d.lastSeen} — ${d.entryCount} entries */`;

	return `\n${jsdoc}\ntype Deprecated${Pascal}Ids = ${literals};\n`;
}

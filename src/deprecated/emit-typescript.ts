import { compareNatural } from "../helpers";
import type { DeprecatedDiscriminator, DeprecatedSet } from "./types";

const HEADER = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
// Re-exports live types and adds Deprecated{Discriminator} variants for
// templates removed from the upstream GAME_MASTER.json. See
// docs/superpowers/specs/2026-05-03-deprecated-types-tracking-design.md.

export type * from "./entries";
export type * from "./types";
`;

export function emitTypescript(set: DeprecatedSet): string {
	const sorted = [...set.values()].sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const blocks = sorted.map(emitOneDiscriminator).join("\n");

	const unionMembers = sorted.map((d) => `Deprecated${pascalCase(d.discriminator)}`);
	const unionRhs = unionMembers.length === 0 ? "never" : `\n\t| ${unionMembers.join("\n\t| ")}`;
	const union = `\n/**\n * Union of every currently-deprecated masterfile entry type.\n * Compose with \`MasterfileEntry\` from "./entries" to get a wide union.\n */\nexport type DeprecatedMasterfileEntry = ${unionRhs};\n`;

	return HEADER + blocks + union;
}

function emitOneDiscriminator(d: DeprecatedDiscriminator): string {
	const Pascal = pascalCase(d.discriminator);
	const literals = [...d.templateIds]
		.sort(compareNatural)
		.map((id) => `"${id}"`)
		.join(" | ");
	const literalsType = `type Deprecated${Pascal}Ids = ${literals};`;

	const dataBody = d.dataTypeBody.ts.trim();
	const jsdoc = `/** @deprecated lastSeen ${d.lastSeen} — ${d.entryCount} entries */`;

	const generic = `${jsdoc}
export type Deprecated${Pascal}<TID extends Deprecated${Pascal}Ids = Deprecated${Pascal}Ids> = {
	templateId: TID;
	data: {
		templateId: TID;
		${d.discriminator}: Deprecated${Pascal}Data;
	};
};
`;

	return `\n${literalsType}\n\n${dataBody}\n\n${generic}`;
}

function pascalCase(camel: string): string {
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}

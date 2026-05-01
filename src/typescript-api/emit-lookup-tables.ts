import type { Group } from "../group.ts";
import { aliasSuffix, deriveGroupAliases, groupName } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

/**
 * Emit `packages/ts-api/src/lookup-tables.d.ts`.
 *
 * Three interfaces (`EntryByTemplateID`, `EntriesByGroup`, `TemplateIDsByGroup`)
 * + a `GroupName` re-export. Pulls every literal entry type and every per-group
 * `*MasterfileEntry` / `*TemplateID` alias from `pogo-masterfile-types`.
 *
 * Entry type names exactly match what the existing TS emitter produces — they
 * MUST be identical, since this file imports them by name.
 */
export function emitLookupTables(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()]
		.filter((g) => g.entries.length > 1)
		.sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const singletons = [...groups.values()]
		.filter((g) => g.entries.length === 1)
		.sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	// Per-entry type-name resolution. For multi-entry groups, the existing TS
	// emitter calls `deriveGroupAliases(sortedIds, gName)` to compute a suffix
	// per entry, then emits `${gName}${suffix}` as the type name.
	// For singletons: stub entries (empty data) get `aliasSuffix(templateId, "")`,
	// non-stub singletons get `groupName(discriminator)`.
	const entryTypeNameByTemplateId = new Map<string, string>();

	for (const g of multiEntry) {
		const gName = groupName(g.discriminator);
		const sortedIds = [...g.entries].map((e) => e.templateId).sort();
		const aliases = deriveGroupAliases(sortedIds, gName);
		for (const e of g.entries) {
			const suffix = aliases.get(e.templateId);
			if (suffix === undefined) {
				throw new Error(
					`emit-lookup-tables: no alias derived for templateId "${e.templateId}" in group "${g.discriminator}"`,
				);
			}
			entryTypeNameByTemplateId.set(e.templateId, `${gName}${suffix}`);
		}
	}

	for (const g of singletons) {
		const entry = g.entries[0]!;
		const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
		const isStub = dataKeys.length === 0;
		const name = isStub
			? aliasSuffix(entry.templateId, "")
			: groupName(g.discriminator);
		entryTypeNameByTemplateId.set(entry.templateId, name);
	}

	// Group-level aliases: e.g. MoveSettingsMasterfileEntry, MoveSettingsTemplateID.
	const groupLevelImports: string[] = [];
	for (const g of multiEntry) {
		const gName = groupName(g.discriminator);
		groupLevelImports.push(`${gName}MasterfileEntry`, `${gName}TemplateID`);
	}
	if (singletons.length > 0) {
		groupLevelImports.push("SingletonsMasterfileEntry", "SingletonsTemplateID");
	}

	const allImports = [...new Set([...groupLevelImports, ...entryTypeNameByTemplateId.values()])].sort();

	const importBlock = [
		`import type {`,
		...allImports.map((n) => `\t${n},`),
		`} from "pogo-masterfile-types/entries";`,
	].join("\n");

	// EntryByTemplateID — sorted by templateId
	const entryByIdLines = [...entryTypeNameByTemplateId.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([id, name]) => `\t"${id}": ${name};`);

	// EntriesByGroup
	const entriesByGroupLines: string[] = [];
	for (const g of multiEntry) {
		entriesByGroupLines.push(
			`\t${g.discriminator}: ${groupName(g.discriminator)}MasterfileEntry;`,
		);
	}
	if (singletons.length > 0) {
		entriesByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsMasterfileEntry;`);
	}

	// TemplateIDsByGroup
	const templateIdsByGroupLines: string[] = [];
	for (const g of multiEntry) {
		templateIdsByGroupLines.push(
			`\t${g.discriminator}: ${groupName(g.discriminator)}TemplateID;`,
		);
	}
	if (singletons.length > 0) {
		templateIdsByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsTemplateID;`);
	}

	return `// Generated from Pokémon GO masterfile — typed lookup tables.

${importBlock}

export type { GroupName } from "./group-names";

export interface EntryByTemplateID {
${entryByIdLines.join("\n")}
}

export interface EntriesByGroup {
${entriesByGroupLines.join("\n")}
}

export interface TemplateIDsByGroup {
${templateIdsByGroupLines.join("\n")}
}
`;
}

import type { Group } from "../group.ts";
import { aliasSuffix, deriveGroupAliases, groupName, kebabCase } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

export interface LookupTablesOutput {
	/** Top-level barrel: `lookup-tables.d.ts`. */
	main: string;
	/**
	 * Per-group sub-files: `lookup-tables/<kebab-case-group>.d.ts`.
	 * Map key is the relative file path under `src/`.
	 */
	perGroup: Map<string, string>;
}

interface GroupEntryInfo {
	discriminator: string; // camelCase, e.g. "moveSettings"
	interfaceName: string; // e.g. "MoveSettingsLookup"
	fileBaseName: string; // e.g. "move-settings"
	entries: { templateId: string; typeName: string }[];
}

/**
 * Emit `packages/ts-api/src/lookup-tables.d.ts` and a sibling per-group
 * file at `packages/ts-api/src/lookup-tables/<group>.d.ts` for every group.
 *
 * Each per-group file declares a `<Group>Lookup` interface mapping that
 * group's templateIds to their literal entry types. The main file imports
 * each per-group interface and composes `EntryByTemplateID` via interface
 * inheritance — same materialized type as a single big interface, but the
 * source structure is split per-group so the editor can lazily load the
 * subset relevant to the current cursor position.
 *
 * Type name resolution mirrors the existing TS emitter: per-entry names are
 * `${groupName(disc)}${alias}` where alias comes from `deriveGroupAliases`;
 * singletons get either their stub-derived alias or `groupName(disc)`.
 */
export function emitLookupTables(groups: Map<string, Group>): LookupTablesOutput {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1).sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const singletons = [...groups.values()].filter((g) => g.entries.length === 1).sort((a, b) => a.discriminator.localeCompare(b.discriminator));

	const groupInfos: GroupEntryInfo[] = [];

	for (const g of multiEntry) {
		const gName = groupName(g.discriminator);
		const sortedIds = [...g.entries].map((e) => e.templateId).sort();
		const aliases = deriveGroupAliases(sortedIds, gName);
		const entries: GroupEntryInfo["entries"] = [];
		for (const e of g.entries) {
			const suffix = aliases.get(e.templateId);
			if (suffix === undefined) {
				throw new Error(`emit-lookup-tables: no alias derived for templateId "${e.templateId}" in group "${g.discriminator}"`);
			}
			entries.push({ templateId: e.templateId, typeName: `${gName}${suffix}` });
		}
		groupInfos.push({
			discriminator: g.discriminator,
			interfaceName: `${gName}Lookup`,
			fileBaseName: kebabCase(g.discriminator),
			entries,
		});
	}

	if (singletons.length > 0) {
		const entries: GroupEntryInfo["entries"] = [];
		for (const g of singletons) {
			const entry = g.entries[0]!;
			const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
			const isStub = dataKeys.length === 0;
			const typeName = isStub ? aliasSuffix(entry.templateId, "") : groupName(g.discriminator);
			entries.push({ templateId: entry.templateId, typeName });
		}
		groupInfos.push({
			discriminator: SINGLETONS_KEY,
			interfaceName: "SingletonsLookup",
			fileBaseName: SINGLETONS_KEY,
			entries,
		});
	}

	// Per-group sub-files.
	const perGroup = new Map<string, string>();
	for (const info of groupInfos) {
		const importedTypes = [...new Set(info.entries.map((e) => e.typeName))].sort();
		const entryLines = [...info.entries]
			.sort((a, b) => a.templateId.localeCompare(b.templateId))
			.map((e) => {
				const key = isValidIdentifier(e.templateId) ? e.templateId : `"${e.templateId}"`;
				return `\t${key}: ${e.typeName};`;
			});

		const fileContent = `// Generated from Pokémon GO masterfile — "${info.discriminator}" lookup table.

import type {
${importedTypes.map((n) => `\t${n},`).join("\n")}
} from "pogo-masterfile-types/entries";

export interface ${info.interfaceName} {
${entryLines.join("\n")}
}
`;
		perGroup.set(`lookup-tables/${info.fileBaseName}.d.ts`, fileContent);
	}

	// Main composition file.
	const groupLevelImports: string[] = [];
	for (const g of multiEntry) {
		const gName = groupName(g.discriminator);
		groupLevelImports.push(`${gName}MasterfileEntry`, `${gName}TemplateID`);
	}
	if (singletons.length > 0) {
		groupLevelImports.push("SingletonsMasterfileEntry", "SingletonsTemplateID");
	}
	groupLevelImports.sort();

	const perGroupImports = groupInfos.map((info) => `import type { ${info.interfaceName} } from "./lookup-tables/${info.fileBaseName}";`).join("\n");

	const entriesByGroupLines: string[] = [];
	for (const g of multiEntry) {
		entriesByGroupLines.push(`\t${g.discriminator}: ${groupName(g.discriminator)}MasterfileEntry;`);
	}
	if (singletons.length > 0) {
		entriesByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsMasterfileEntry;`);
	}

	const templateIdsByGroupLines: string[] = [];
	for (const g of multiEntry) {
		templateIdsByGroupLines.push(`\t${g.discriminator}: ${groupName(g.discriminator)}TemplateID;`);
	}
	if (singletons.length > 0) {
		templateIdsByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsTemplateID;`);
	}

	const main = `// Generated from Pokémon GO masterfile — typed lookup tables (per-group composition).

import type {
${groupLevelImports.map((n) => `\t${n},`).join("\n")}
} from "pogo-masterfile-types/entries";
${perGroupImports}

export type { GroupName } from "./group-names";
${groupInfos.map((info) => `export type { ${info.interfaceName} } from "./lookup-tables/${info.fileBaseName}";`).join("\n")}

// Composed via interface inheritance — same materialized shape as a single
// 18k-key interface, but split per-group so the editor only needs to fully
// resolve the groups relevant to the current usage.
export interface EntryByTemplateID extends
${groupInfos.map((info) => `\t${info.interfaceName}`).join(",\n")} {}

export interface EntriesByGroup {
${entriesByGroupLines.join("\n")}
}

export interface TemplateIDsByGroup {
${templateIdsByGroupLines.join("\n")}
}
`;

	return { main, perGroup };
}

function isValidIdentifier(s: string): boolean {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s);
}

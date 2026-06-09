import type { DeprecatedSet } from "./types";

/**
 * Parse a deprecated.d.ts emission (generated source text) into a DeprecatedSet.
 * Handles the current format (JSDoc above `type Deprecated<Pascal>Ids =`) and the
 * pre-migration legacy format (JSDoc above `export type Deprecated<Pascal><...`).
 *
 * Shared by src/update-deprecated.ts (reads HEAD via git) and the archive
 * backfill script (reads the working tree) so both agree on the parse.
 */
export function parseDeprecatedSource(source: string): DeprecatedSet {
	const set: DeprecatedSet = new Map();

	const blockRe = /\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\s*\ntype Deprecated([A-Za-z_][A-Za-z0-9_]*)Ids =/g;
	const legacyBlockRe = /\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\s*\nexport type Deprecated([A-Za-z_][A-Za-z0-9_]*)</g;

	const idsRe = /type Deprecated([A-Za-z_][A-Za-z0-9_]*)Ids\s*=\s*([\s\S]+?);/g;
	const idMap = new Map<string, string[]>();
	for (const m of source.matchAll(idsRe)) {
		const Pascal = m[1]!;
		const literals = [...m[2]!.matchAll(/"([^"]+)"/g)].map((mm) => mm[1]!);
		idMap.set(Pascal, literals);
	}

	const seen = new Set<string>();
	const applyMatch = (lastSeen: string, entryCount: number, Pascal: string) => {
		if (seen.has(Pascal)) return;
		seen.add(Pascal);
		const discriminator = Pascal.charAt(0).toLowerCase() + Pascal.slice(1);
		const ids = idMap.get(Pascal) ?? [];
		set.set(discriminator, { discriminator, templateIds: new Set(ids), lastSeen, entryCount });
	};

	for (const m of source.matchAll(blockRe)) applyMatch(m[1]!, Number(m[2]!), m[3]!);
	for (const m of source.matchAll(legacyBlockRe)) applyMatch(m[1]!, Number(m[2]!), m[3]!);

	return set;
}

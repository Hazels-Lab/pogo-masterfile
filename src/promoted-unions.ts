import { PROMOTION_EXCLUDE_DELTA_RATIO } from "./constants.ts";
import type { Group } from "./group.ts";
import { groupName, pascalCase, sharedPrefix } from "./naming.ts";

export interface PromotionRegistryEntry {
	group: Group;
	aliasName: string;
	members: string[];
	memberSet: ReadonlySet<string>;
}

export type PromotionRegistry = readonly PromotionRegistryEntry[];

export function buildPromotionRegistry(groups: Map<string, Group>): PromotionRegistry {
	const entries: PromotionRegistryEntry[] = [];
	for (const group of groups.values()) {
		if (group.entries.length < 2) continue;
		const ids = group.entries.map((e) => e.templateId);
		const prefix = sharedPrefix(ids);
		if (prefix === "") continue;
		const aliasName = pascalCase(prefix.replace(/_+$/, ""));
		const members = [...ids].sort((a, b) => a.localeCompare(b));
		entries.push({ group, aliasName, members, memberSet: new Set(members) });
	}
	resolveCollisions(entries, groups);
	entries.sort((a, b) => a.aliasName.localeCompare(b.aliasName));
	return entries;
}

export type PromotionResult =
	| { kind: "ref"; aliasName: string; sourceGroup: Group }
	| { kind: "exclude"; aliasName: string; missing: string[]; sourceGroup: Group };

export function tryPromote(inline: ReadonlySet<string>, registry: PromotionRegistry, currentGroup: Group | null): PromotionResult | null {
	if (inline.size <= 1) return null;

	const candidates = registry.filter((entry) => {
		if (currentGroup !== null && entry.group === currentGroup) return false;
		return isSubsetOrEqual(inline, entry.memberSet);
	});
	if (candidates.length === 0) return null;

	candidates.sort((a, b) => a.memberSet.size - b.memberSet.size || a.aliasName.localeCompare(b.aliasName));
	const best = candidates[0]!;

	if (inline.size === best.memberSet.size) {
		return { kind: "ref", aliasName: best.aliasName, sourceGroup: best.group };
	}
	const missing = best.members.filter((m) => !inline.has(m));
	if (missing.length === 0) return null;
	if (missing.length / best.memberSet.size > PROMOTION_EXCLUDE_DELTA_RATIO) return null;
	return { kind: "exclude", aliasName: best.aliasName, missing, sourceGroup: best.group };
}

function isSubsetOrEqual(a: ReadonlySet<string>, b: ReadonlySet<string>): boolean {
	for (const value of a) {
		if (!b.has(value)) return false;
	}
	return true;
}

export interface PromotionContext {
	registry: PromotionRegistry;
	currentGroup: Group | null;
	imports: Map<string, Set<string>>;
}

export function recordImport(ctx: PromotionContext, sourceGroup: Group, aliasName: string): void {
	if (ctx.currentGroup !== null && sourceGroup === ctx.currentGroup) return;
	const disc = sourceGroup.discriminator;
	let names = ctx.imports.get(disc);
	if (!names) {
		names = new Set();
		ctx.imports.set(disc, names);
	}
	names.add(aliasName);
}

function resolveCollisions(entries: PromotionRegistryEntry[], groups: Map<string, Group>): void {
	// Each group emits three top-level symbols: ${gName}, ${gName}Data, and ${gName}Type.
	// All three are reserved at module scope and must not be shadowed by a promoted alias.
	const reservedNames = new Set(
		[...groups.values()].flatMap((g) => {
			const n = groupName(g.discriminator);
			return [n, `${n}Data`, `${n}Type`];
		}),
	);

	// Pass 1: alias-vs-reserved — append "Id" to colliding aliases.
	for (const entry of entries) {
		if (reservedNames.has(entry.aliasName)) {
			entry.aliasName = `${entry.aliasName}Id`;
		}
	}

	// Pass 2: alias-vs-alias — for any aliasName held by ≥ 2 entries, append
	// pascalCase(disc) to each colliding entry to disambiguate.
	const byAlias = new Map<string, PromotionRegistryEntry[]>();
	for (const entry of entries) {
		const bucket = byAlias.get(entry.aliasName);
		if (bucket) bucket.push(entry);
		else byAlias.set(entry.aliasName, [entry]);
	}
	for (const bucket of byAlias.values()) {
		if (bucket.length < 2) continue;
		for (const entry of bucket) {
			entry.aliasName = `${entry.aliasName}${pascalCase(entry.group.discriminator)}`;
		}
	}
}

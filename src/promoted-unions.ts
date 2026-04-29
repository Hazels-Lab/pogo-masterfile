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
	for (const entry of registry) {
		if (currentGroup !== null && entry.group === currentGroup) continue;
		if (!isSubsetOrEqual(inline, entry.memberSet)) continue;
		if (inline.size === entry.memberSet.size) {
			return { kind: "ref", aliasName: entry.aliasName, sourceGroup: entry.group };
		}
	}
	return null;
}

function isSubsetOrEqual(a: ReadonlySet<string>, b: ReadonlySet<string>): boolean {
	for (const value of a) {
		if (!b.has(value)) return false;
	}
	return true;
}

function resolveCollisions(entries: PromotionRegistryEntry[], groups: Map<string, Group>): void {
	const interfaceNames = new Set([...groups.values()].map((g) => groupName(g.discriminator)));

	// Pass 1: alias-vs-interface — append "Id" to colliding aliases.
	for (const entry of entries) {
		if (interfaceNames.has(entry.aliasName)) {
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

import type { Group } from "./group.ts";
import { pascalCase, sharedPrefix } from "./naming.ts";

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
	entries.sort((a, b) => a.aliasName.localeCompare(b.aliasName));
	return entries;
}

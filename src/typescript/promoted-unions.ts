import type { Group } from "../group.ts";
import { groupName, sharedPrefix } from "../naming.ts";
import type { PromotionRegistry, PromotionRegistryEntry } from "../promoted-unions.ts";
import { TEMPLATE_GENERIC } from "./constants.ts";

// Build a promotion registry using TS naming conventions. Aliases are named
// `${groupName(discriminator)}${TEMPLATE_GENERIC}` (e.g. `PokemonSettingsTemplateID`),
// matching the type alias each group's `types.ts` already exports.
//
// Only multi-entry groups with a non-empty shared prefix qualify — singletons
// don't have a meaningful alias to point at, and groups whose templateIds share
// no prefix can't reliably be referenced as a union without listing each member.
export function buildPromotionRegistry(groups: Map<string, Group>): PromotionRegistry {
	const entries: PromotionRegistryEntry[] = [];
	for (const group of groups.values()) {
		if (group.entries.length < 2) continue;
		const ids = group.entries.map((e) => e.templateId);
		if (sharedPrefix(ids) === "") continue;
		const aliasName = `${groupName(group.discriminator)}${TEMPLATE_GENERIC}`;
		const members = [...ids].sort((a, b) => a.localeCompare(b));
		entries.push({ group, aliasName, members, memberSet: new Set(members) });
	}
	entries.sort((a, b) => a.aliasName.localeCompare(b.aliasName));
	return entries;
}

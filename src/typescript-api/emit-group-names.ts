import type { Group } from "../group.ts";

const SINGLETONS_KEY = "singletons";

/**
 * Emit `packages/ts-api/src/group-names.ts`.
 *
 * Multi-entry groups use their JSON discriminator (already camelCase, e.g.
 * "moveSettings"). Single-entry "groups" (each a singleton) collapse into one
 * synthetic "singletons" group, matching the existing TS emitter's layout.
 */
export function emitGroupNames(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const hasSingletons = [...groups.values()].some((g) => g.entries.length === 1);

	const names = multiEntry.map((g) => g.discriminator);
	if (hasSingletons) names.push(SINGLETONS_KEY);
	names.sort();

	const arrayLines = names.map((n) => `\t"${n}",`).join("\n");

	return `// Generated from Pokémon GO masterfile — list of group discriminators.

export const GROUP_NAMES = [
${arrayLines}
] as const;

export type GroupName = (typeof GROUP_NAMES)[number];
`;
}

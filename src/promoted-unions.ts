import { PROMOTION_EXCLUDE_DELTA_RATIO } from "./constants.ts";
import type { Group } from "./group.ts";

// Generic promotion logic: given a registry of "named subsets of templateIds"
// (typically one entry per multi-entry group), decide whether a literal union
// of templateIds can be rewritten as a reference to a registered alias.
//
// `aliasName` is opaque to this module — each language emitter populates it
// with its own naming convention (TS uses `${groupName}TemplateID`; Go/Rust
// would use their own). The algorithm only uses it as an identifier to pass
// through to PromotionResult.

export interface PromotionRegistryEntry {
	group: Group;
	aliasName: string;
	members: string[];
	memberSet: ReadonlySet<string>;
}

export type PromotionRegistry = readonly PromotionRegistryEntry[];

export type PromotionResult =
	| { kind: "ref"; aliasName: string; sourceGroup: Group }
	| { kind: "exclude"; aliasName: string; missing: string[]; sourceGroup: Group };

export function tryPromote(inline: ReadonlySet<string>, registry: PromotionRegistry, currentGroup: Group | null): PromotionResult | null {
	if (inline.size <= 1) return null;

	// Single linear scan tracking smallest-containing-group; alphabetical aliasName
	// tiebreak comes for free because `registry` is alpha-sorted at build time and
	// we use strict `<` (so the first entry of any given size sticks).
	let best: PromotionRegistryEntry | null = null;
	for (const entry of registry) {
		if (currentGroup !== null && entry.group === currentGroup) continue;
		if (!isSubsetOrEqual(inline, entry.memberSet)) continue;
		if (best === null || entry.memberSet.size < best.memberSet.size) {
			best = entry;
		}
	}
	if (best === null) return null;

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

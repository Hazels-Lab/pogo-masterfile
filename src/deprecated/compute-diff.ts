import type { DiffResult } from "./types";

export interface DiffInput {
	/** Template IDs in the live emission BEFORE the regen. */
	oldLive: Set<string>;
	/** Template IDs in the live emission AFTER the regen. */
	newLive: Set<string>;
	/** Template IDs currently in the deprecated emission. */
	currentDeprecated: Set<string>;
}

/**
 * Compute newly-deprecated and newly-revived templateIds.
 * - newlyDeprecated = oldLive − newLive (was live, now isn't)
 * - newlyRevived = currentDeprecated ∩ newLive (was deprecated, now live)
 */
export function computeDiff(input: DiffInput): DiffResult {
	const newlyDeprecated = new Set<string>();
	for (const id of input.oldLive) {
		if (!input.newLive.has(id)) newlyDeprecated.add(id);
	}
	const newlyRevived = new Set<string>();
	for (const id of input.currentDeprecated) {
		if (input.newLive.has(id)) newlyRevived.add(id);
	}
	return { newlyDeprecated, newlyRevived };
}

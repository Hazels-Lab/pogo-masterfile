import type { Entry } from "../../src/group";
import type { DeprecatedSet } from "../../src/deprecated/types";

/** One template id observed in the archive: its discriminator + most-recent date. */
export interface SeenEntry {
	discriminator: string;
	/** ISO YYYY-MM-DD of the most recent snapshot the id appeared in. */
	lastSeen: string;
}

/** Parse the ISO date out of a snapshot folder name like `gm_v2_apk0327_2024.09.04-10.44.08`. */
export function parseSnapshotDate(folderName: string): string {
	const m = folderName.match(/_(\d{4})\.(\d{2})\.(\d{2})-\d{2}\.\d{2}\.\d{2}$/);
	if (!m) throw new Error(`Cannot parse date from snapshot folder name: "${folderName}"`);
	return `${m[1]}-${m[2]}-${m[3]}`;
}

/**
 * Discriminator for an entry's `data`, matching the deleted bootstrap's rule
 * (NOT live group.ts): the single non-templateId key, or "_marker" for a stub
 * entry with no inner key (so stubs merge with the existing Deprecated_markerIds
 * record). A malformed entry with >=2 keys (shouldn't occur) falls back to the
 * sorted-first key for determinism.
 */
export function discriminatorOf(data: Record<string, unknown>): string {
	const keys = Object.keys(data).filter((k) => k !== "templateId");
	if (keys.length === 0) return "_marker";
	if (keys.length === 1) return keys[0]!;
	return [...keys].sort()[0]!;
}

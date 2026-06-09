import type { DeprecatedSet } from "../../src/deprecated/types";
import type { Entry } from "../../src/group";

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

/**
 * Fold one snapshot's entries into the running seen-map. Per templateId, keeps
 * the discriminator + date from its MOST RECENT appearance (max ISO date wins).
 * Order-independent across snapshots.
 */
export function accumulateSeen(seen: Map<string, SeenEntry>, entries: Entry[], date: string): void {
	for (const e of entries) {
		const prev = seen.get(e.templateId);
		if (!prev || date > prev.lastSeen) {
			seen.set(e.templateId, { discriminator: discriminatorOf(e.data), lastSeen: date });
		}
	}
}

export interface ClassifyInput {
	seen: Map<string, SeenEntry>;
	live: Set<string>;
	alreadyDeprecated: Set<string>;
}

/** legacy = seen − live − alreadyDeprecated. */
export function classifyLegacy(input: ClassifyInput): Map<string, SeenEntry> {
	const legacy = new Map<string, SeenEntry>();
	for (const [id, info] of input.seen) {
		if (input.live.has(id)) continue;
		if (input.alreadyDeprecated.has(id)) continue;
		legacy.set(id, info);
	}
	return legacy;
}

/** True for the standalone shadow/purified pokemon family (the dominant 2021 bucket). */
export function isShadowPurified(id: string): boolean {
	return /_(SHADOW|PURIFIED)$/.test(id);
}

/**
 * Non-destructive merge of legacy ids into a clone of `current`. Unions ids into
 * existing discriminator records (creating new ones as needed) and bumps each
 * record's lastSeen to the max ISO date among its ids. Backfill dates are older
 * than steady-state dates, so existing records' lastSeen never regress.
 */
export function mergeBackfill(current: DeprecatedSet, legacy: Map<string, SeenEntry>): DeprecatedSet {
	const next: DeprecatedSet = new Map();
	for (const [k, v] of current) {
		next.set(k, { discriminator: v.discriminator, templateIds: new Set(v.templateIds), lastSeen: v.lastSeen, entryCount: v.entryCount });
	}
	for (const [id, info] of legacy) {
		let rec = next.get(info.discriminator);
		if (!rec) {
			rec = { discriminator: info.discriminator, templateIds: new Set(), lastSeen: info.lastSeen, entryCount: 0 };
			next.set(info.discriminator, rec);
		}
		rec.templateIds.add(id);
		rec.entryCount = rec.templateIds.size;
		if (info.lastSeen > rec.lastSeen) rec.lastSeen = info.lastSeen;
	}
	return next;
}

export interface DiscriminatorReport {
	discriminator: string;
	count: number;
	firstSeen: string;
	lastSeen: string;
	isNew: boolean;
	sampleIds: string[];
}

export interface BackfillReport {
	totalLegacy: number;
	discriminatorCount: number;
	newDiscriminators: number;
	shadowPurifiedCount: number;
	byDiscriminator: DiscriminatorReport[];
}

/** Build the dry-run report. Pure: groups legacy ids by discriminator. */
export function buildReport(legacy: Map<string, SeenEntry>, current: DeprecatedSet): BackfillReport {
	const byDisc = new Map<string, { ids: string[]; min: string; max: string }>();
	let shadowPurifiedCount = 0;
	for (const [id, info] of legacy) {
		if (isShadowPurified(id)) shadowPurifiedCount++;
		let g = byDisc.get(info.discriminator);
		if (!g) {
			g = { ids: [], min: info.lastSeen, max: info.lastSeen };
			byDisc.set(info.discriminator, g);
		}
		g.ids.push(id);
		if (info.lastSeen < g.min) g.min = info.lastSeen;
		if (info.lastSeen > g.max) g.max = info.lastSeen;
	}

	const reports: DiscriminatorReport[] = [];
	let newDiscriminators = 0;
	for (const [disc, g] of byDisc) {
		const isNew = !current.has(disc);
		if (isNew) newDiscriminators++;
		reports.push({
			discriminator: disc,
			count: g.ids.length,
			firstSeen: g.min,
			lastSeen: g.max,
			isNew,
			sampleIds: [...g.ids].sort().slice(0, 5),
		});
	}
	reports.sort((a, b) => b.count - a.count || a.discriminator.localeCompare(b.discriminator));

	return {
		totalLegacy: legacy.size,
		discriminatorCount: reports.length,
		newDiscriminators,
		shadowPurifiedCount,
		byDiscriminator: reports,
	};
}

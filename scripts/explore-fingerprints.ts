// Exploratory script — Heuristic 2 (field-presence fingerprint clustering).
// Read-only: walks masterfile.json, groups entries, computes per-variant
// top-level field fingerprints, and reports cluster distribution per group.
//
// Run: bun run scripts/explore-fingerprints.ts
// Optional arg: minimum entry count to report (default 100).

import { readFile } from "node:fs/promises";
import { join } from "node:path";

interface Entry {
	templateId: string;
	data: Record<string, unknown>;
}

interface Group {
	discriminator: string;
	entries: Entry[];
}

const MASTERFILE = join(import.meta.dir, "..", "masterfile.json");
const MIN_ENTRIES = Number(process.argv[2] ?? 100);

function groupEntries(entries: Entry[]): Map<string, Group> {
	const groups = new Map<string, Group>();
	for (const entry of entries) {
		const keys = Object.keys(entry.data).filter((k) => k !== "templateId");
		if (keys.length > 1) continue;
		const disc = keys[0] ?? entry.templateId;
		let group = groups.get(disc);
		if (!group) {
			group = { discriminator: disc, entries: [] };
			groups.set(disc, group);
		}
		group.entries.push(entry);
	}
	return groups;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function fingerprint(entry: Entry, discriminator: string): string[] {
	const payload = entry.data[discriminator];
	if (!isPlainObject(payload)) return [];
	return Object.keys(payload).sort();
}

function fingerprintKey(fields: string[]): string {
	return fields.length === 0 ? "(empty)" : fields.join("|");
}

interface Stats {
	discriminator: string;
	entries: number;
	clusters: number;
	distinctFields: number;
	largest: number;
	smallest: number;
	median: number;
	singletonClusters: number;
}

async function main(): Promise<void> {
	const raw = await readFile(MASTERFILE, "utf-8");
	const entries: Entry[] = JSON.parse(raw);
	const groups = groupEntries(entries);

	const candidates: Group[] = [];
	for (const g of groups.values()) {
		if (g.entries.length >= MIN_ENTRIES) candidates.push(g);
	}
	candidates.sort((a, b) => b.entries.length - a.entries.length);

	const summaries: Stats[] = [];

	for (const g of candidates) {
		const clusters = new Map<string, { fields: string[]; ids: string[] }>();
		for (const e of g.entries) {
			const fields = fingerprint(e, g.discriminator);
			const key = fingerprintKey(fields);
			let bucket = clusters.get(key);
			if (!bucket) {
				bucket = { fields, ids: [] };
				clusters.set(key, bucket);
			}
			bucket.ids.push(e.templateId);
		}

		const sizes = [...clusters.values()].map((c) => c.ids.length).sort((a, b) => b - a);
		const distinctFields = new Set([...clusters.values()].flatMap((c) => c.fields)).size;
		const median = sizes[Math.floor(sizes.length / 2)] ?? 0;

		summaries.push({
			discriminator: g.discriminator,
			entries: g.entries.length,
			clusters: clusters.size,
			distinctFields,
			largest: sizes[0] ?? 0,
			smallest: sizes[sizes.length - 1] ?? 0,
			median,
			singletonClusters: sizes.filter((s) => s === 1).length,
		});
	}

	console.log(`# Heuristic 2 — field-presence fingerprint clustering`);
	console.log(`# ${summaries.length} groups with >= ${MIN_ENTRIES} entries\n`);

	console.log(
		`${"discriminator".padEnd(36)}  ${"entries".padStart(7)}  ${"clusters".padStart(8)}  ${"fields".padStart(6)}  ${"largest".padStart(7)}  ${"median".padStart(6)}  ${"singletons".padStart(10)}`,
	);
	console.log("─".repeat(105));
	for (const s of summaries) {
		const flag = s.clusters > s.entries / 4 ? "  ⚠ too sparse" : s.clusters > 30 ? "  ⚠ many clusters" : "";
		console.log(
			`${s.discriminator.padEnd(36)}  ${String(s.entries).padStart(7)}  ${String(s.clusters).padStart(8)}  ${String(s.distinctFields).padStart(6)}  ${String(s.largest).padStart(7)}  ${String(s.median).padStart(6)}  ${String(s.singletonClusters).padStart(10)}${flag}`,
		);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

// Exploratory script — Heuristic 1 (single best discriminator field).
// Read-only: walks masterfile.json, groups entries, picks the best
// discriminator field per group, and reports the split it would produce.
//
// Discriminator selection rules:
//   - Field must be present in 100% of variants
//   - Field value must be a primitive (string | number | boolean)
//   - Cardinality must be in the [2, MAX_CARDINALITY] range
//   - Among qualifying fields, prefer the one with the LOWEST cardinality
//     that still splits the group meaningfully (no single value dominates > DOMINANCE_LIMIT)
//
// Run: bun run scripts/explore-discriminator.ts
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
const MAX_CARDINALITY = 40;
const DOMINANCE_LIMIT = 0.85; // reject if top value holds >85% of variants

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

function isPrimitive(value: unknown): value is string | number | boolean {
	return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

interface FieldStats {
	field: string;
	cardinality: number;
	dominance: number; // share of largest bucket
	allStrings: boolean; // every value is a string
	valueCounts: Map<string, number>;
}

function analyzeField(entries: Entry[], discriminator: string, field: string): FieldStats | null {
	const valueCounts = new Map<string, number>();
	let allStrings = true;
	for (const entry of entries) {
		const payload = entry.data[discriminator];
		if (!isPlainObject(payload)) return null;
		const v = payload[field];
		if (v === undefined) return null; // not 100% present
		if (!isPrimitive(v)) return null; // not a discriminator candidate
		if (typeof v !== "string") allStrings = false;
		const key = String(v);
		valueCounts.set(key, (valueCounts.get(key) ?? 0) + 1);
	}
	const sizes = [...valueCounts.values()].sort((a, b) => b - a);
	const dominance = (sizes[0] ?? 0) / entries.length;
	return {
		field,
		cardinality: valueCounts.size,
		dominance,
		allStrings,
		valueCounts,
	};
}

function pickDiscriminator(entries: Entry[], discriminator: string): FieldStats | null {
	const allFields = new Set<string>();
	for (const entry of entries) {
		const payload = entry.data[discriminator];
		if (isPlainObject(payload)) for (const k of Object.keys(payload)) allFields.add(k);
	}

	const candidates: FieldStats[] = [];
	for (const f of allFields) {
		const stats = analyzeField(entries, discriminator, f);
		if (!stats) continue;
		if (stats.cardinality < 2 || stats.cardinality > MAX_CARDINALITY) continue;
		if (stats.dominance > DOMINANCE_LIMIT) continue;
		candidates.push(stats);
	}

	if (candidates.length === 0) return null;

	// Picking rules, in priority order:
	//   1. Prefer all-string fields (semantic enum values produce meaningful file names).
	//   2. Prefer lower dominance (more balanced split).
	//   3. Prefer lower cardinality (fewer files).
	//   4. Stable tie-break by field name.
	candidates.sort((a, b) => {
		if (a.allStrings !== b.allStrings) return a.allStrings ? -1 : 1;
		if (Math.abs(a.dominance - b.dominance) > 0.05) return a.dominance - b.dominance;
		if (a.cardinality !== b.cardinality) return a.cardinality - b.cardinality;
		return a.field.localeCompare(b.field);
	});
	return candidates[0]!;
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

	console.log(`# Heuristic 1 — single best discriminator field`);
	console.log(`# ${candidates.length} groups with >= ${MIN_ENTRIES} entries`);
	console.log(`# Constraints: present in 100%, primitive value, cardinality 2..${MAX_CARDINALITY}, no value > ${Math.round(DOMINANCE_LIMIT * 100)}%\n`);

	console.log(
		`${"discriminator".padEnd(36)}  ${"entries".padStart(7)}  ${"chosen field".padEnd(22)}  ${"cardinality".padStart(11)}  ${"dominance".padStart(9)}  top values`,
	);
	console.log("─".repeat(140));

	for (const g of candidates) {
		const choice = pickDiscriminator(g.entries, g.discriminator);
		if (!choice) {
			console.log(`${g.discriminator.padEnd(36)}  ${String(g.entries.length).padStart(7)}  ${"(no qualifying field)".padEnd(22)}`);
			continue;
		}
		const top = [...choice.valueCounts.entries()]
			.sort((a, b) => b[1] - a[1])
			.slice(0, 5)
			.map(([v, c]) => `${v}:${c}`)
			.join(", ");
		console.log(
			`${g.discriminator.padEnd(36)}  ${String(g.entries.length).padStart(7)}  ${choice.field.padEnd(22)}  ${String(choice.cardinality).padStart(11)}  ${(choice.dominance * 100).toFixed(0).padStart(8)}%  ${top}`,
		);
	}

	console.log(`\n## Detail for pokemonSettings (the H2 failure case):`);
	const pokemonSettings = candidates.find((g) => g.discriminator === "pokemonSettings");
	if (pokemonSettings) {
		const allFields = new Set<string>();
		for (const e of pokemonSettings.entries) {
			const p = e.data.pokemonSettings;
			if (isPlainObject(p)) for (const k of Object.keys(p)) allFields.add(k);
		}
		console.log(`\nAll fully-present primitive fields, by cardinality:`);
		const all: FieldStats[] = [];
		for (const f of allFields) {
			const s = analyzeField(pokemonSettings.entries, "pokemonSettings", f);
			if (s && s.cardinality >= 2) all.push(s);
		}
		all.sort((a, b) => a.cardinality - b.cardinality);
		for (const s of all.slice(0, 25)) {
			const top = [...s.valueCounts.entries()]
				.sort((a, b) => b[1] - a[1])
				.slice(0, 4)
				.map(([v, c]) => `${v}:${c}`)
				.join(", ");
			console.log(`  ${s.field.padEnd(24)} card=${String(s.cardinality).padStart(4)}  dom=${(s.dominance * 100).toFixed(0).padStart(3)}%  top: ${top}`);
		}
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

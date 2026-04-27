import type { Entry, Group } from "./group.ts";

const H1_MIN_CARDINALITY = 2;
const H1_MAX_CARDINALITY = 30;
const H1_MAX_DOMINANCE = 0.8;

export interface H1Bucket {
	value: string;
	fileName: string;
	entries: Entry[];
}

export interface H1Result {
	field: string;
	buckets: H1Bucket[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface FieldStats {
	field: string;
	cardinality: number;
	dominance: number;
	values: Map<string, Entry[]>;
}

function analyzeField(group: Group, field: string): FieldStats | null {
	const values = new Map<string, Entry[]>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (!isPlainObject(payload)) return null;
		const v = payload[field];
		if (v === undefined) return null;
		if (typeof v !== "string") return null;
		const bucket = values.get(v);
		if (bucket) bucket.push(entry);
		else values.set(v, [entry]);
	}
	const sizes = [...values.values()].map((b) => b.length);
	const largest = sizes.reduce((a, b) => Math.max(a, b), 0);
	return {
		field,
		cardinality: values.size,
		dominance: largest / group.entries.length,
		values,
	};
}

export function tryH1(group: Group): H1Result | null {
	const allFields = new Set<string>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (isPlainObject(payload)) for (const k of Object.keys(payload)) allFields.add(k);
	}

	const candidates: FieldStats[] = [];
	for (const field of allFields) {
		const stats = analyzeField(group, field);
		if (!stats) continue;
		if (stats.cardinality < H1_MIN_CARDINALITY) continue;
		if (stats.cardinality > H1_MAX_CARDINALITY) continue;
		if (stats.dominance > H1_MAX_DOMINANCE) continue;
		candidates.push(stats);
	}
	if (candidates.length === 0) return null;

	candidates.sort((a, b) => {
		if (a.dominance !== b.dominance) return a.dominance - b.dominance;
		if (a.cardinality !== b.cardinality) return a.cardinality - b.cardinality;
		return a.field.localeCompare(b.field);
	});
	const winner = candidates[0]!;

	const buckets: H1Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: value, entries });
	}
	buckets.sort((a, b) => a.value.localeCompare(b.value));

	return { field: winner.field, buckets };
}

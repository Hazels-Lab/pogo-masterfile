import type { Entry, Group } from "./group.ts";
import { compareNatural, compareNaturalBy } from "./helpers.ts";
import { kebabCase, sharedPrefix } from "./naming.ts";

// H1 (field-based bucketing): a field qualifies as a split key if its distinct values
// fall in this range. Below MIN, splitting buys nothing; above MAX, the resulting
// directory has too many tiny files. Above MAX_DOMINANCE one bucket would swallow
// the rest, defeating the split.
const H1_MIN_CARDINALITY = 2;
const H1_MAX_CARDINALITY = 30;
const H1_MAX_DOMINANCE = 0.8;

export interface H1Bucket {
	value: string;
	fileName: string;
	entries: Entry[];
	// Set when this bucket was further split by a recursive chooseSplit call.
	// `undefined` means this bucket is a leaf (emitted as a single file).
	children?: SplitTree;
}

export interface H1Result {
	field: string;
	buckets: H1Bucket[];
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface BucketStats {
	values: Map<string, Entry[]>;
	cardinality: number;
	dominance: number;
}

// Shared bucketing scaffold for H1 and H2. `keyOf` returning undefined for any
// entry aborts (parallels the "key must be present in 100% of entries" rule).
function bucketBy(group: Group, keyOf: (entry: Entry) => string | undefined): BucketStats | null {
	const values = new Map<string, Entry[]>();
	for (const entry of group.entries) {
		const k = keyOf(entry);
		if (k === undefined) return null;
		const bucket = values.get(k);
		if (bucket) bucket.push(entry);
		else values.set(k, [entry]);
	}
	const sizes = [...values.values()].map((b) => b.length);
	const largest = sizes.reduce((a, b) => Math.max(a, b), 0);
	return {
		values,
		cardinality: values.size,
		dominance: largest / group.entries.length,
	};
}

interface FieldStats extends BucketStats {
	field: string;
}

function analyzeField(group: Group, field: string): FieldStats | null {
	const stats = bucketBy(group, (entry) => {
		const payload = entry.data[group.discriminator];
		if (!isPlainObject(payload)) return undefined;
		const v = payload[field];
		if (typeof v !== "string") return undefined;
		return v;
	});
	if (!stats) return null;
	return { field, ...stats };
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
		return compareNatural(a.field, b.field);
	});
	const winner = candidates[0]!;

	const allValues = [...winner.values.keys()];
	const buckets: H1Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: valueFileName(value, allValues), entries });
	}
	buckets.sort(compareNaturalBy((t) => t.fileName));

	return { field: winner.field, buckets };
}

export function valueFileName(value: string, allValues: string[]): string {
	const prefix = sharedPrefix(allValues);
	const stripped = prefix.length > 0 && value.startsWith(prefix) ? value.slice(prefix.length) : value;
	const result = stripped.toLowerCase().replace(/_/g, "-");
	if (result.length === 0) return value.toLowerCase().replace(/_/g, "-");
	return result;
}

// H2 (templateId token bucketing): when every entry shares the same payload shape
// (so H1 finds no qualifying field and H3 would produce a single fingerprint), the
// templateId itself often encodes a category. Tokenize on `_` and look for a
// position whose distinct token values satisfy a cardinality/dominance/avg-size gate.

// H2 has wider bounds than H1: tokens encode coarser categories than payload fields,
// and entries-per-bucket on the order of MIN_AVG_BUCKET_SIZE keeps directory listings
// readable without forcing each variant into its own file.
const H2_MAX_CARDINALITY = 50;
const H2_MAX_DOMINANCE = 0.8;
const H2_MIN_AVG_BUCKET_SIZE = 15;

export interface H2Bucket {
	value: string;
	fileName: string;
	entries: Entry[];
	children?: SplitTree;
}

export interface H2Result {
	position: number;
	buckets: H2Bucket[];
}

interface TokenPositionStats extends BucketStats {
	position: number;
}

function tokenize(templateId: string): string[] {
	return templateId.split("_").filter(Boolean);
}

function analyzeTokenPosition(group: Group, position: number): TokenPositionStats | null {
	const stats = bucketBy(group, (entry) => tokenize(entry.templateId)[position]);
	if (!stats) return null;
	return { position, ...stats };
}

export function tryH2(group: Group): H2Result | null {
	// Find the maximum token-position any entry has — we'll evaluate positions
	// 0..maxPos-1. analyzeTokenPosition returns null for positions not universally
	// present, so we don't need to pre-filter the range.
	let maxPos = 0;
	for (const entry of group.entries) {
		const len = tokenize(entry.templateId).length;
		if (len > maxPos) maxPos = len;
	}

	const positions: TokenPositionStats[] = [];
	for (let i = 0; i < maxPos; i += 1) {
		const stats = analyzeTokenPosition(group, i);
		if (stats) positions.push(stats);
	}

	// Among qualifying positions, pick the one with the highest cardinality. Higher
	// cardinality = finer split, which means more files but more navigable per-file
	// content. The avg-bucket-size gate above already rejects positions that would
	// over-fragment; among the survivors, finer is better.
	let winner: TokenPositionStats | null = null;
	const total = group.entries.length;

	for (const cand of positions) {
		if (cand.cardinality > H2_MAX_CARDINALITY) continue;
		if (cand.dominance >= H2_MAX_DOMINANCE) continue;
		if (total / cand.cardinality < H2_MIN_AVG_BUCKET_SIZE) continue;
		if (!winner) {
			winner = cand;
			continue;
		}
		if (cand.cardinality > winner.cardinality) {
			winner = cand;
		}
	}
	if (!winner) return null;

	const allValues = [...winner.values.keys()];
	const buckets: H2Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: valueFileName(value, allValues), entries });
	}
	buckets.sort(compareNaturalBy((b) => b.fileName));
	return { position: winner.position, buckets };
}

// H3 (fingerprint clustering): cap the cluster count at ~entries/MIN_AVG so we don't
// produce a swarm of tiny files when fingerprints are nearly unique. Demoted from H2
// because the templateId-token heuristic (H2) produces more navigable buckets in
// practice, while fingerprint clustering only helps when the type *shape* varies.
const H3_MIN_AVG_CLUSTER_SIZE = 5;

export interface FingerprintCluster {
	fingerprint: string[];
	entries: Entry[];
}

// Bucket a group's entries by which non-universal fields they carry. Exposed as
// a standalone helper because non-TS emitters (Rust enum variants, Go interface
// implementations) want the raw clusters even when there's just one — the H3
// splitting threshold is purely a TS file-organization concern.
export function clusterByFingerprint(group: Group): FingerprintCluster[] {
	// Pass 1: count per-field presence to find universally-present fields.
	const presenceCount = new Map<string, number>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		if (!isPlainObject(payload)) continue;
		for (const k of Object.keys(payload)) presenceCount.set(k, (presenceCount.get(k) ?? 0) + 1);
	}
	const universal = new Set<string>();
	for (const [k, count] of presenceCount) {
		if (count === group.entries.length) universal.add(k);
	}

	// Pass 2: bucket entries by fingerprint (excluding universal fields).
	const clusters = new Map<string, FingerprintCluster>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		const keys = isPlainObject(payload) ? Object.keys(payload) : [];
		const fingerprint = keys.filter((k) => !universal.has(k)).sort();
		const key = fingerprint.join("|");
		const bucket = clusters.get(key);
		if (bucket) bucket.entries.push(entry);
		else clusters.set(key, { fingerprint, entries: [entry] });
	}

	return [...clusters.values()];
}

export interface H3Cluster {
	fingerprint: string[];
	fileName: string;
	entries: Entry[];
	children?: SplitTree;
}

export function tryH3(group: Group): H3Cluster[] | null {
	const clusters = clusterByFingerprint(group);
	if (clusters.length < 2) return null;
	const maxClusters = Math.max(2, Math.floor(group.entries.length / H3_MIN_AVG_CLUSTER_SIZE));
	if (clusters.length > maxClusters) return null;

	const result: H3Cluster[] = clusters.map(({ fingerprint, entries }) => ({
		fingerprint,
		fileName: fingerprintFileName(fingerprint),
		entries,
	}));
	result.sort((a, b) => b.entries.length - a.entries.length);
	return result;
}

export function fingerprintFileName(fingerprint: string[]): string {
	if (fingerprint.length === 0) return "misc";
	return fingerprint.map(kebabCase).join("-");
}

// Groups under this size emit a single `entries.ts` (no subdirectory). Above it,
// we try H1 then H2 to decide how to split into multiple files.
const SPLIT_THRESHOLD = 100;

// Minimum singletons sharing a trailing token before they earn their own bucket file.
// Below this, they collapse into the catch-all `misc.ts` bucket.
const MISC_BUCKET_MIN_SIZE = 2;

export interface MiscBucket {
	token: string;
	fileName: string;
	singletons: Group[];
}

// Last token of a discriminator, lowercased. Splits on:
//   - lowercase/digit → uppercase boundaries (`pokedexV2Settings` → `pokedex V2 Settings`)
//   - uppercase-run → PascalCase boundaries (`URLToken` → `URL Token`)
//   - non-alphanumerics (`BACKGROUND_MODES_SETTINGS` → `BACKGROUND MODES SETTINGS`)
// so a wide variety of naming styles all reduce to a sensible trailing token.
function trailingToken(discriminator: string): string {
	const parts = discriminator
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean);
	return parts.length ? parts[parts.length - 1]!.toLowerCase() : "misc";
}

// Group singleton groups by their discriminator's trailing token. Tokens shared by
// at least MISC_BUCKET_MIN_SIZE singletons earn their own bucket; the rest land in
// a catch-all `misc` bucket. Pure data-driven categorization — no hardcoded names.
export function clusterSingletons(singletons: Group[]): MiscBucket[] {
	const byToken = new Map<string, Group[]>();
	for (const g of singletons) {
		const token = trailingToken(g.discriminator);
		const bucket = byToken.get(token);
		if (bucket) bucket.push(g);
		else byToken.set(token, [g]);
	}

	const named: MiscBucket[] = [];
	const leftovers: Group[] = [];
	for (const [token, groups] of byToken) {
		if (groups.length >= MISC_BUCKET_MIN_SIZE) {
			named.push({ token, fileName: token, singletons: groups });
		} else {
			leftovers.push(...groups);
		}
	}
	if (leftovers.length > 0) {
		named.push({ token: "misc", fileName: "misc", singletons: leftovers });
	}
	named.sort(compareNaturalBy((n) => n.fileName));
	return named;
}

// SplitTree = "the recursive part" — what a node looks like once we've committed
// to a split. SplitPlan adds the top-level escape hatch (`none`) for inputs that
// don't warrant any split at all. Sub-trees attached to a bucket's `children`
// are always SplitTree, never `none` (we just don't set `children` in that case).
export type SplitTree =
	| { kind: "h1"; field: string; buckets: H1Bucket[] }
	| { kind: "h2"; position: number; buckets: H2Bucket[] }
	| { kind: "h3"; clusters: H3Cluster[] };

export type SplitPlan = { kind: "none" } | SplitTree;

// Top-level splits are accepted whatever the heuristics produce; structural
// quality gates (small-bucket ratio, informative names) only apply to recursive
// sub-splits via acceptRecursion. The motivating recursion case is `display-string-id`:
// H3 first separates structurally-different entries, which homogenizes templateIds
// enough for H2 to find a clean token axis on the cleaned-up subset.
export function chooseSplit(group: Group, depth = 0): SplitPlan {
	if (group.entries.length <= SPLIT_THRESHOLD) return { kind: "none" };

	const h1 = tryH1(group);
	if (h1) {
		recurseIntoBuckets(group.discriminator, h1.buckets, depth);
		return { kind: "h1", field: h1.field, buckets: h1.buckets };
	}

	const h2 = tryH2(group);
	if (h2) {
		recurseIntoBuckets(group.discriminator, h2.buckets, depth);
		return { kind: "h2", position: h2.position, buckets: h2.buckets };
	}

	const h3 = tryH3(group);
	if (h3) {
		recurseIntoBuckets(group.discriminator, h3, depth);
		return { kind: "h3", clusters: h3 };
	}

	return { kind: "none" };
}

interface RecursableNode {
	entries: Entry[];
	children?: SplitTree;
}

function recurseIntoBuckets(discriminator: string, nodes: RecursableNode[], depth: number): void {
	for (const node of nodes) {
		if (!shouldRecurse(node, depth)) continue;
		const sub = chooseSplit({ discriminator, entries: node.entries }, depth + 1);
		if (sub.kind === "none") continue;
		if (!acceptRecursion(sub)) continue;
		node.children = sub;
	}
}

// acceptRecursion gates *recursive* splits only (top-level splits aren't filtered).
// Two checks:
//   1. Name gate: every bucket must have an informative filename OR carry further
//      children. Catches sub-buckets named "1"/"2"/"3" that would emit as ugly leaves.
//   2. Size gate: reject splits *dominated* by small buckets — the empty-bundle case
//      (≥ TOO_SMALL_TOLERANCE of buckets below MIN_BUCKET_SIZE) carves out edge
//      cases rather than meaningful categories.
function acceptRecursion(sub: SplitTree): boolean {
	const buckets: ReadonlyArray<{ fileName: string; entries: Entry[]; children?: SplitTree }> = sub.kind === "h3" ? sub.clusters : sub.buckets;

	if (!buckets.every((b) => b.children !== undefined || isInformativeName(b.fileName))) return false;

	const tooSmall = buckets.filter((b) => b.entries.length < MIN_BUCKET_SIZE).length;
	if (tooSmall / buckets.length > TOO_SMALL_TOLERANCE) return false;

	return true;
}

// Single-character names and purely-numeric names carry no semantic information —
// they're typically variant codes/sequence numbers, not category labels. Names
// like "v2", "ab", or "1a" pass (mixed alphanumeric of length ≥ 2).
function isInformativeName(name: string): boolean {
	if (name.length <= 1) return false;
	if (/^\d+$/.test(name)) return false;
	return true;
}

// Buckets below this size are counted toward TOO_SMALL_TOLERANCE.
const MIN_BUCKET_SIZE = 5;

// Maximum fraction of "too small" buckets that a recursive split can have and
// still be accepted. 0.25 means up to 25% of immediate buckets may be below
// MIN_BUCKET_SIZE. At 50%+ we conclude the split is mostly carving out edge
// cases. Only applied to recursive splits — top-level splits aren't filtered
// by this gate (item-settings has many small categories that are still useful).
const TOO_SMALL_TOLERANCE = 0.25;

// Maximum depth of recursive splitting. Top-level is depth 0; first recursion
// runs at depth 1. Past this, no further nesting is attempted.
const MAX_RECURSION_DEPTH = 2;

function shouldRecurse(_node: RecursableNode, depth: number): boolean {
	return depth < MAX_RECURSION_DEPTH;
}

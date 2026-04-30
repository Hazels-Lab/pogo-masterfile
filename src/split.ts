import type { Entry, Group } from "./group.ts";
import { kebabCase } from "./naming.ts";

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

	const allValues = [...winner.values.keys()];
	const buckets: H1Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: valueFileName(value, allValues), entries });
	}
	buckets.sort((a, b) => a.fileName.localeCompare(b.fileName));

	return { field: winner.field, buckets };
}

export function valueFileName(value: string, allValues: string[]): string {
	const prefix = longestCommonUnderscorePrefix(allValues);
	const stripped = prefix.length > 0 && value.startsWith(prefix) ? value.slice(prefix.length) : value;
	const result = stripped.toLowerCase().replace(/_/g, "-");
	if (result.length === 0) return value.toLowerCase().replace(/_/g, "-");
	return result;
}

function longestCommonUnderscorePrefix(values: string[]): string {
	if (values.length < 2) return "";
	let prefix = values[0]!;
	for (const v of values) {
		while (!v.startsWith(prefix)) prefix = prefix.slice(0, -1);
		if (prefix === "") return "";
	}
	const lastUnderscore = prefix.lastIndexOf("_");
	return lastUnderscore >= 0 ? prefix.slice(0, lastUnderscore + 1) : "";
}

// H2 (templateId token bucketing): when every entry shares the same payload shape
// (so H1 finds no qualifying field and H3 would produce a single fingerprint), the
// templateId itself often encodes a category. Tokenize on `_` and look for the
// leftmost position whose distinct token values satisfy the same cardinality and
// dominance gates as H1 — universally-shared tokens fail MIN_CARDINALITY (count=1),
// unique-per-entry suffixes fail MAX_CARDINALITY, leaving the meaningful axis.
//
// Reuses H1's bounds intentionally: the qualification semantics are identical, the
// only difference is the data source (templateId structure vs. payload field).

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

interface TokenPositionStats {
	position: number;
	cardinality: number;
	dominance: number;
	values: Map<string, Entry[]>;
}

function tokenize(templateId: string): string[] {
	return templateId.split("_").filter(Boolean);
}

// Mirrors analyzeField, but for a token position in the templateId. Returns null if
// any entry has fewer tokens than `position` (parallels H1's "field must be present
// in 100% of entries" rule — a position only counts when every entry has it).
function analyzeTokenPosition(group: Group, position: number): TokenPositionStats | null {
	const values = new Map<string, Entry[]>();
	for (const entry of group.entries) {
		const tokens = tokenize(entry.templateId);
		const v = tokens[position];
		if (v === undefined) return null;
		const bucket = values.get(v);
		if (bucket) bucket.push(entry);
		else values.set(v, [entry]);
	}
	const sizes = [...values.values()].map((b) => b.length);
	const largest = sizes.reduce((a, b) => Math.max(a, b), 0);
	return {
		position,
		cardinality: values.size,
		dominance: largest / group.entries.length,
		values,
	};
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

	// TODO(user): leftmost-qualifying selection.
	//
	// `positions` is in left-to-right token order. Pick the FIRST entry whose
	// cardinality is in [H1_MIN_CARDINALITY, H1_MAX_CARDINALITY] AND whose
	// dominance is ≤ H1_MAX_DOMINANCE. Return that entry, or null if none qualify.
	//
	// Note: do NOT sort by best-dominance like tryH1 does — for templateId tokens
	// we want predictable left-to-right "first usable axis" semantics, so that
	// e.g. `N_DISPLAY_n_shirt_001` lands on `shirt` (position 3) rather than on
	// some deeper position that happens to have lower dominance.
	let winner: TokenPositionStats | null = null;
	const total = group.entries.length;
	// console.log(group.discriminator, "-", total);

	// console.log(group.discriminator, JSON.stringify(positions, null, 2));

	for (const cand of positions) {
		// console.log(JSON.stringify(cand, null, 2), "-", total / cand.cardinality);
		if (cand.cardinality > 50 || cand.dominance >= 0.8 || total / cand.cardinality < 15) continue;
		if (!winner) {
			winner = cand;
			continue;
		}
		if (cand.cardinality > winner.cardinality) {
			winner = cand;
		}
	}
	if (!winner) return null;
	// console.log("regrouping", group.discriminator, "into", total / winner.cardinality, "files using", winner.position);

	const allValues = [...winner.values.keys()];
	const buckets: H2Bucket[] = [];
	for (const [value, entries] of winner.values) {
		buckets.push({ value, fileName: valueFileName(value, allValues), entries });
	}
	buckets.sort((a, b) => a.fileName.localeCompare(b.fileName));
	return { position: winner.position, buckets };
}

// H3 (fingerprint clustering): cap the cluster count at ~entries/MIN_AVG so we don't
// produce a swarm of tiny files when fingerprints are nearly unique. Demoted from H2
// because the templateId-token heuristic (H2) produces more navigable buckets in
// practice, while fingerprint clustering only helps when the type *shape* varies.
const H3_MIN_AVG_CLUSTER_SIZE = 5;

export interface H3Cluster {
	fingerprint: string[];
	fileName: string;
	entries: Entry[];
	children?: SplitTree;
}

export function tryH3(group: Group): H3Cluster[] | null {
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
	const clusters = new Map<string, { fingerprint: string[]; entries: Entry[] }>();
	for (const entry of group.entries) {
		const payload = entry.data[group.discriminator];
		const keys = isPlainObject(payload) ? Object.keys(payload) : [];
		const fingerprint = keys.filter((k) => !universal.has(k)).sort();
		const key = fingerprint.join("|");
		const bucket = clusters.get(key);
		if (bucket) bucket.entries.push(entry);
		else clusters.set(key, { fingerprint, entries: [entry] });
	}

	if (clusters.size < 2) return null;
	const minClusters = 2;
	const maxClusters = Math.max(minClusters, Math.floor(group.entries.length / H3_MIN_AVG_CLUSTER_SIZE));
	if (clusters.size > maxClusters) return null;

	const result: H3Cluster[] = [];
	for (const { fingerprint, entries } of clusters.values()) {
		result.push({ fingerprint, fileName: fingerprintFileName(fingerprint), entries });
	}
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
	named.sort((a, b) => a.fileName.localeCompare(b.fileName));
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

// Recursion: after picking a split, walk each bucket and ask whether the bucket
// itself warrants another pass. The H3-then-H2 case from `display-string-id`
// is the motivating example — H3 separates structurally-different entries into
// their own clusters, which homogenizes templateIds enough for H2 to find a
// clean token axis on the cleaned-up subset.
// Top-level chooseSplit accepts whatever the heuristics produce — no structural
// quality gate. Top-level splits like `item-settings/entries/{boost.ts, candy.ts,
// ...}` (30 buckets, many small) and `iap-item-display/entries/...` (compound
// fingerprint clusters) are useful even when individual buckets are small or
// names are long; collapsing them to one giant flat file would be worse.
//
// The structural quality gates live in recurseIntoBuckets — applied to *deeper*
// splits where mechanical sub-bucket names (bug → 1/2/3/4) and over-fragmenting
// recursions (poses → empty-bundle singletons) produce navigation noise. Per-
// level recursion: after picking a candidate plan, we walk its buckets and
// try to deepen each one. Children that succeed get attached; children that
// fail acceptRecursion's gates leave their bucket as a leaf.
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
// Recursion creates additional directory depth, so a sub-split has to clear a
// higher bar than a top-level split — it has to add navigation value beyond what
// a flat parent file would give.
//
// Two checks:
//
//   1. Name gate (every bucket): each bucket must have an informative filename
//      OR carry further children. Catches the bug → breadTierGroup case where
//      sub-buckets are named "1", "2", "3", "4" — children alone aren't enough
//      because we'd still emit `bug/2.ts, bug/3.ts, bug/4.ts` as ugly leaves.
//
//   2. Size gate (ratio): a few small siblings are fine (e.g., `idle.ts` at 1
//      entry inside the 13-bucket display-string-id split — 7.7% under min,
//      well within tolerance). What we reject is splits *dominated* by small
//      buckets — the empty-bundle case (2 singletons in a 4-bucket poses
//      split = 50%) carves out edge cases instead of meaningful categories.
//
// TODO(user): tune as needed. Considerations:
//   - Looser name rule: e.g., accept short numerics if length >= 4 (years).
//   - Different size thresholds: lower MIN_BUCKET_SIZE catches fewer stragglers;
//     higher TOO_SMALL_TOLERANCE accepts splits with more small buckets.
//   - Per-discriminator escape hatches: if a specific group is being mis-handled
//     by the general policy, an opt-in/opt-out map keyed on `group.discriminator`
//     can override (rarely needed in practice, reach for last).
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

// Maximum depth of recursive splitting. Top-level call is depth 0; the first
// recursion runs at depth 1; etc. Past this, no further nesting is attempted.
const MAX_RECURSION_DEPTH = 2;

// TODO(user): policy for whether a bucket should be considered for recursive splitting.
//
// Default policy below is intentionally minimal — only the depth cap. Worth thinking
// about whether you want any of these additional gates:
//
//   - Skip recursion when `node.entries.length` is barely over SPLIT_THRESHOLD
//     (e.g., 110 entries → 2 sub-buckets of 55 each → directory with 2 files
//     is arguably worse than one 110-entry file). The chooseSplit threshold
//     already filters out really-small inputs, but a higher recursion-only
//     threshold would discourage marginal nestings.
//
//   - Cap the *breadth* alongside depth: if a node has many siblings already
//     (e.g., this is one of 14 H2 buckets), recursing into each adds a lot of
//     directory churn. A `siblingCount` parameter could gate that.
//
//   - Per-discriminator escape hatches if specific groups behave badly (rare;
//     reach for this last).
//
// You're picking the policy that controls how aggressive nesting gets. The signal
// to watch when tuning: total file count and average directory depth in the
// regenerated output.
function shouldRecurse(_node: RecursableNode, depth: number): boolean {
	return depth < MAX_RECURSION_DEPTH;
}

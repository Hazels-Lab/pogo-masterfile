# H1 Partial-Coverage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Teach the H1 splitter to accept fields that are present in *most* but not all entries, so groups like `iap-item-display` split cleanly on their natural axis (`category`) instead of falling through to H3 and producing 34 fingerprint-named files with absurdly long names.

**Architecture:** Replace H1's strict universality check with a coverage gate. Entries missing the field land in a sentinel "missing" bucket that emits as `no-<field>.d.ts`. All existing H1 gates (cardinality, dominance, tie-breaking) run unchanged — they just see the missing bucket as one more bucket. Default coverage threshold is `0.8`, mirroring the existing `H1_MAX_DOMINANCE = 0.8`.

**Tech Stack:** TypeScript (Bun runtime), `bun:test` for tests, Biome for formatting.

**Spec:** [docs/superpowers/specs/2026-05-04-h1-partial-coverage-design.md](../specs/2026-05-04-h1-partial-coverage-design.md)

---

## File Structure

| File | Role |
|------|------|
| `src/split.ts` | All algorithm changes — new helper, coverage gate, missing-bucket filename. |
| `src/split.test.ts` | New unit tests covering 95% / 50% coverage and the `no-<field>` filename. Existing test for "rejects field not present in 100%" gets renamed and re-asserted. |
| `packages/**` (regenerated) | Output diff for verification only. Not hand-edited. |

The coverage gate, the new bucketing helper, and the missing-bucket filename logic all live in `src/split.ts` and are tightly coupled to H1. No new files. No restructuring.

---

## Task 1: Allow partial-coverage fields in H1

**Files:**
- Modify: `src/split.ts:31-71` (BucketStats, bucketBy, analyzeField)
- Modify: `src/split.ts:73-106` (tryH1)
- Modify: `src/split.test.ts:61-64` (rename existing test)
- Add new tests in `src/split.test.ts` describe-block for `tryH1`

### Step 1.1: Write the failing tests

- [ ] **Step:** Add three new tests to the `tryH1` describe block in `src/split.test.ts`. Place them after the existing "rejects field not present in 100% of variants" test (line 64), and rename that existing test in the same edit.

Replace the existing test:

```typescript
test("rejects field not present in 100% of variants", () => {
    const group = mkGroup([{ x: "A" }, { x: "B" }, { y: 1 }, { x: "A" }]);
    expect(tryH1(group)).toBeNull();
});
```

With these four tests:

```typescript
test("rejects field below the coverage threshold", () => {
    // x present in 3/4 entries (75%) — below H1_MIN_COVERAGE = 0.8.
    const group = mkGroup([{ x: "A" }, { x: "B" }, { y: 1 }, { x: "A" }]);
    expect(tryH1(group)).toBeNull();
});

test("accepts a field at 95% coverage and bucketizes the missing entries", () => {
    // 19 entries with category, 1 without → coverage 0.95.
    const payloads: Array<Record<string, unknown>> = [];
    for (let i = 0; i < 10; i += 1) payloads.push({ category: "A" });
    for (let i = 0; i < 9; i += 1) payloads.push({ category: "B" });
    payloads.push({ other: 1 }); // no category
    const group = mkGroup(payloads);

    const result = tryH1(group);
    expect(result?.field).toBe("category");
    expect(result?.buckets).toHaveLength(3);
    const missingBucket = result!.buckets.find((b) => b.entries.length === 1);
    expect(missingBucket?.entries[0]?.data.x).toEqual({ other: 1 });
});

test("rejects a field at 50% coverage", () => {
    // x present in 5/10 entries → coverage 0.5, below threshold.
    const payloads: Array<Record<string, unknown>> = [];
    for (let i = 0; i < 5; i += 1) payloads.push({ x: i % 2 === 0 ? "A" : "B" });
    for (let i = 0; i < 5; i += 1) payloads.push({ other: 1 });
    const group = mkGroup(payloads);
    expect(tryH1(group)).toBeNull();
});
```

### Step 1.2: Run tests to verify they fail

- [ ] **Step:** Run `bun test src/split.test.ts -t "tryH1"`

Expected: the three new tests fail (the renamed-but-rewritten "rejects field below the coverage threshold" still passes because the current strict-universality rule rejects it for a different reason; the 95% and 50% coverage tests fail because the current code returns `null` for any partial field).

### Step 1.3: Add the missing-bucket sentinel and a coverage-aware bucketing helper

- [ ] **Step:** In `src/split.ts`, locate the `BucketStats` interface (around line 31) and the `bucketBy` function (around line 39). Add a sentinel constant, extend `BucketStats` with a `coverage` field, and add a new `bucketByWithMissing` helper. The original `bucketBy` is retained unchanged because H2 still needs strict abort-on-undefined behavior.

Replace this block:

```typescript
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
```

With:

```typescript
// Sentinel key under which entries lacking the H1 splitter field are bucketed.
// Distinct from any plausible real value: leading NUL is invalid in JSON strings,
// and the suffix is human-readable for debugging.
export const MISSING_BUCKET_KEY = "\0__missing__";

interface BucketStats {
    values: Map<string, Entry[]>;
    cardinality: number;
    dominance: number;
    coverage: number;
}

// Shared bucketing scaffold for H2. `keyOf` returning undefined for any entry
// aborts (parallels the "key must be present in 100% of entries" rule).
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
        coverage: 1,
    };
}

// H1-specific variant: instead of aborting when an entry's keyOf returns
// undefined, route those entries to MISSING_BUCKET_KEY. Coverage records the
// fraction of entries with a real (non-missing) value so tryH1 can gate on it.
function bucketByWithMissing(group: Group, keyOf: (entry: Entry) => string | undefined): BucketStats {
    const values = new Map<string, Entry[]>();
    let missing = 0;
    for (const entry of group.entries) {
        const k = keyOf(entry);
        const bucketKey = k === undefined ? MISSING_BUCKET_KEY : k;
        if (k === undefined) missing += 1;
        const bucket = values.get(bucketKey);
        if (bucket) bucket.push(entry);
        else values.set(bucketKey, [entry]);
    }
    const sizes = [...values.values()].map((b) => b.length);
    const largest = sizes.reduce((a, b) => Math.max(a, b), 0);
    return {
        values,
        cardinality: values.size,
        dominance: largest / group.entries.length,
        coverage: (group.entries.length - missing) / group.entries.length,
    };
}
```

### Step 1.4: Switch analyzeField to bucketByWithMissing

- [ ] **Step:** In `src/split.ts`, locate `analyzeField` (around line 61). Update it to call the new helper. Its return type is no longer nullable — the helper always returns stats.

Replace:

```typescript
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
```

With:

```typescript
function analyzeField(group: Group, field: string): FieldStats {
    const stats = bucketByWithMissing(group, (entry) => {
        const payload = entry.data[group.discriminator];
        if (!isPlainObject(payload)) return undefined;
        const v = payload[field];
        if (typeof v !== "string") return undefined;
        return v;
    });
    return { field, ...stats };
}
```

### Step 1.5: Add the H1_MIN_COVERAGE constant and gate

- [ ] **Step:** In `src/split.ts`, locate the H1 constants block (lines 7-11). Add `H1_MIN_COVERAGE` alongside the other thresholds.

Replace:

```typescript
// H1 (field-based bucketing): a field qualifies as a split key if its distinct values
// fall in this range. Below MIN, splitting buys nothing; above MAX, the resulting
// directory has too many tiny files. Above MAX_DOMINANCE one bucket would swallow
// the rest, defeating the split.
const H1_MIN_CARDINALITY = 2;
const H1_MAX_CARDINALITY = 30;
const H1_MAX_DOMINANCE = 0.8;
```

With:

```typescript
// H1 (field-based bucketing): a field qualifies as a split key if its distinct values
// fall in this range. Below MIN, splitting buys nothing; above MAX, the resulting
// directory has too many tiny files. Above MAX_DOMINANCE one bucket would swallow
// the rest, defeating the split. Below MIN_COVERAGE the field is too sparse to be
// a meaningful axis — entries missing the field would dominate the resulting "no-X"
// bucket. 0.8 is symmetric with MAX_DOMINANCE: at most 20% missing, at most 20%
// concentrated in any one bucket.
const H1_MIN_CARDINALITY = 2;
const H1_MAX_CARDINALITY = 30;
const H1_MAX_DOMINANCE = 0.8;
const H1_MIN_COVERAGE = 0.8;
```

### Step 1.6: Apply the gate in tryH1

- [ ] **Step:** In `src/split.ts`, locate the candidate-collection loop in `tryH1` (around lines 80-88). Remove the now-redundant `if (!stats) continue` and add the coverage filter.

Replace:

```typescript
const candidates: FieldStats[] = [];
for (const field of allFields) {
    const stats = analyzeField(group, field);
    if (!stats) continue;
    if (stats.cardinality < H1_MIN_CARDINALITY) continue;
    if (stats.cardinality > H1_MAX_CARDINALITY) continue;
    if (stats.dominance > H1_MAX_DOMINANCE) continue;
    candidates.push(stats);
}
```

With:

```typescript
const candidates: FieldStats[] = [];
for (const field of allFields) {
    const stats = analyzeField(group, field);
    if (stats.coverage < H1_MIN_COVERAGE) continue;
    if (stats.cardinality < H1_MIN_CARDINALITY) continue;
    if (stats.cardinality > H1_MAX_CARDINALITY) continue;
    if (stats.dominance > H1_MAX_DOMINANCE) continue;
    candidates.push(stats);
}
```

### Step 1.7: Run tests

- [ ] **Step:** Run `bun test src/split.test.ts`

Expected: all tests pass, including the three new ones from Step 1.1. The 95%-coverage test confirms the missing entry lands in its own bucket. Existing dominance, cardinality, and tie-breaking tests continue to pass because the coverage of universally-present fields is `1.0` (well above `0.8`).

### Step 1.8: Commit

- [ ] **Step:** Commit Task 1.

```bash
git add src/split.ts src/split.test.ts
git commit -m "$(cat <<'EOF'
feat(split): allow partial-coverage fields in H1

Entries missing the splitter field are bucketed under a sentinel; a new
H1_MIN_COVERAGE gate (0.8, symmetric with H1_MAX_DOMINANCE) rejects fields
too sparse to be a meaningful axis.
EOF
)"
```

---

## Task 2: Name the missing bucket `no-<field>`

**Files:**
- Modify: `src/split.ts:96-105` (the bucket-construction loop in `tryH1`)
- Add a new test in `src/split.test.ts` `tryH1 file naming` describe block

### Step 2.1: Write the failing test

- [ ] **Step:** In `src/split.test.ts`, add a test inside the `tryH1 file naming` describe block (around line 128).

```typescript
test("emits a no-<field> bucket for entries missing the splitter field", () => {
    // 19 of 20 entries have `category`; 1 doesn't. Coverage = 0.95.
    const payloads: Array<Record<string, unknown>> = [];
    for (let i = 0; i < 10; i += 1) payloads.push({ category: "STICKER" });
    for (let i = 0; i < 9; i += 1) payloads.push({ category: "BUNDLE" });
    payloads.push({ sku: "lone" });
    const group = mkGroup(payloads);

    const result = tryH1(group);
    expect(result?.field).toBe("category");
    const fileNames = result!.buckets.map((b) => b.fileName).sort();
    expect(fileNames).toContain("no-category");
});
```

### Step 2.2: Run test to verify it fails

- [ ] **Step:** Run `bun test src/split.test.ts -t "no-<field>"`

Expected: FAIL. With Task 1 alone, the missing bucket's `fileName` is the sentinel string passed through `valueFileName`, which is not `no-category`.

### Step 2.3: Update bucket construction to name the missing bucket

- [ ] **Step:** In `src/split.ts`, locate the bucket-construction block at the bottom of `tryH1` (around lines 98-103). Update it to detect the sentinel, exclude it from `sharedPrefix` calculation (so it doesn't perturb the prefix-stripping for the real values), and assign the `no-<field>` filename.

Replace:

```typescript
const allValues = [...winner.values.keys()];
const buckets: H1Bucket[] = [];
for (const [value, entries] of winner.values) {
    buckets.push({ value, fileName: valueFileName(value, allValues), entries });
}
buckets.sort(compareNaturalBy((t) => t.fileName));
```

With:

```typescript
const realValues = [...winner.values.keys()].filter((v) => v !== MISSING_BUCKET_KEY);
const missingFileName = `no-${kebabCase(winner.field)}`;
const buckets: H1Bucket[] = [];
for (const [value, entries] of winner.values) {
    const fileName = value === MISSING_BUCKET_KEY ? missingFileName : valueFileName(value, realValues);
    buckets.push({ value, fileName, entries });
}
buckets.sort(compareNaturalBy((t) => t.fileName));
```

### Step 2.4: Run tests to verify they pass

- [ ] **Step:** Run `bun test src/split.test.ts`

Expected: all tests pass — the new "no-<field>" test, every test in Task 1, and every pre-existing test.

### Step 2.5: Commit

- [ ] **Step:** Commit Task 2.

```bash
git add src/split.ts src/split.test.ts
git commit -m "$(cat <<'EOF'
feat(split): name H1 missing bucket "no-<field>"

The bucket holding entries missing the splitter field gets a deterministic
filename so it sorts alongside the value buckets and reads naturally.
EOF
)"
```

---

## Task 3: Regenerate, verify, and commit output

**Files:**
- All `packages/**/dist` directories will be regenerated.
- The change to `src/split.ts` may shift `iap-item-display` and possibly other groups; we verify each delta is intentional.

### Step 3.1: Regenerate

- [ ] **Step:** From the repo root, run `bun run generate`. (This invokes `src/generate.ts`, then `src/update-deprecated.ts`, then `bun run format`.)

Expected: completes without errors. Output files in `packages/ts/dist`, `packages/rust/src`, and `packages/go` are updated.

### Step 3.2: Inspect the iap-item-display output

- [ ] **Step:** Run `ls packages/ts/dist/iap-item-display/entries/`

Expected: ~10 files including `sticker.d.ts`, `bundle.d.ts`, `global-event-ticket.d.ts`, `no-category.d.ts`, `free.d.ts`, `items.d.ts`, `pokecoins.d.ts`, `upgrades.d.ts`, `transporter-energy.d.ts`, `flair-bundle.d.ts`, plus an `index.d.ts`. The 666-entry `sticker.d.ts` and 275-entry `bundle.d.ts` may be subdirectories instead of single files if existing recursion fired (`SPLIT_THRESHOLD = 100`).

If `sticker/` is a subdirectory, list it: `ls packages/ts/dist/iap-item-display/entries/sticker/`. The contents should be a sub-split via H1/H2/H3 of the sticker subset.

If anything is unexpected (no `no-category.d.ts`; long fingerprint filenames still present), stop and investigate.

### Step 3.3: Diff all packages

- [ ] **Step:** Run `git status packages/` and `git diff --stat packages/`.

Expected: `iap-item-display` is the largest delta. Other groups may show small changes if their splitter is now picked from a partial-coverage field instead of H2/H3. Briefly skim each changed group with `git diff packages/ts/dist/<group>/`. For each non-iap-item-display change, confirm:

1. The new files have human-readable names (categories, not 100-char fingerprints).
2. The pre-change directory was an H3 fingerprint mess — i.e., this is a fix, not a regression.

If a group regressed (got worse filenames or weirder structure than before), the partial-coverage candidate is winning over a better H2/H3 split. Note the group; you may need to raise `H1_MIN_COVERAGE` or add a secondary gate. Consult with the user.

### Step 3.4: Run all tests

- [ ] **Step:** Run `bun test`

Expected: all tests pass.

### Step 3.5: Run typecheck

- [ ] **Step:** Run `bun run typecheck`

Expected: no errors.

### Step 3.6: Commit the regenerated output

- [ ] **Step:** Stage all changed packages and the format script's output, then commit.

```bash
git add packages/
git commit -m "$(cat <<'EOF'
chore(generated): regenerate after H1 partial-coverage change

iap-item-display now splits on `category` (10 buckets) instead of falling
through to H3 (34 fingerprint-named files).
EOF
)"
```

---

## Verification Checklist

After Task 3:

- [ ] `packages/ts/dist/iap-item-display/entries/` has ≤10 top-level files plus possibly `sticker/` and `bundle/` subdirectories.
- [ ] No filename in that directory exceeds 60 characters.
- [ ] `no-category.d.ts` (or `no-category/`) exists.
- [ ] `bun test` passes.
- [ ] `bun run typecheck` passes.
- [ ] `git diff --stat packages/` shows expected changes; any non-iap-item-display deltas have been inspected and judged improvements (or accepted as no-change).

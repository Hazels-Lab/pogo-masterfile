# Relax H1 to allow partial-coverage fields

## Problem

`packages/ts/dist/iap-item-display/entries/` contains 34 files for ~1120 entries. Filenames are up to 187 characters (e.g. `category-description-hidden-image-url-sku-disable-time-sku-disable-time-utc-ms-sku-enable-time-sku-enable-time-utc-ms-sort-order-sprite-id-title-webstore-sku-id-webstore-sku-price-e6.d.ts`), and 24 of the 34 files hold ≤5 entries each.

The split cascade in `src/split.ts` tries H1 (split by single field), H2 (split by templateId tokens), then H3 (cluster by fingerprint). For iap-item-display, H1 and H2 both bail and the cascade falls to H3. H3 names files by joining every fingerprint field with dashes — which is what produces the absurd filenames.

The natural axis for this group is `category`: 9 distinct values, dominance ≈0.6 (under the 0.8 cap), cardinality 10 incl. missing (under the 30 cap). H1 should win on this field. It doesn't, because 46 of ~1120 entries (~4%) have no `category` at all, and `analyzeField` aborts on the first entry missing the field:

```ts
const stats = bucketBy(group, (entry) => {
    const payload = entry.data[group.discriminator];
    if (!isPlainObject(payload)) return undefined;
    const v = payload[field];
    if (typeof v !== "string") return undefined;
    return v;
});
if (!stats) return null;  // bucketBy returns null if any entry's keyOf is undefined
```

The strict universality rule is what makes H1 safe — but it also rejects 95.9%-covered fields the same as 1%-covered ones, vetoing splits that would obviously help.

## Goal

Teach H1 to accept partial-coverage fields. Entries missing the field land in a dedicated `no-<field>.d.ts` bucket. The natural-axis split happens. Long fingerprint filenames go away for groups like iap-item-display.

## Design

### Algorithm

Two changes to `src/split.ts`:

1. **`analyzeField` no longer aborts on missing entries.** Entries without the field are bucketed under a sentinel key (e.g. `Symbol.for("missing")` or a reserved `__missing__` string). Implementation choice: either add a new helper that mirrors `bucketBy` but routes missing entries to the sentinel bucket, or extend `bucketBy` with an opt-in flag. The H2 path's `bucketBy` call must keep its current strict behavior — only H1 changes.

2. **A new gate `H1_MIN_COVERAGE` filters candidate fields by coverage.** Coverage is `(total - missing) / total`. Fields below the threshold are rejected as splitter candidates; fields above it qualify and are then evaluated by the existing dominance and cardinality gates.

Default value: `H1_MIN_COVERAGE = 0.8`. Symmetric with `H1_MAX_DOMINANCE = 0.8` — both express the same 20% "minority allowance," one for the field's presence and one for any single bucket's share.

The existing dominance and cardinality calculations include the missing bucket as a normal bucket. This naturally handles pathological cases:

- If 90% of entries are missing the field, coverage is 0.10 — rejected by the new gate.
- If coverage is fine but the missing bucket itself dominates (e.g. 85% missing, 15% spread thin), dominance exceeds 0.8 — rejected by the existing gate.

### Naming

The missing bucket gets a deterministic name: `no-<field>` in kebab-case. For iap-item-display this produces `no-category.d.ts`. The name flows through the existing `valueFileName` path — no separate codepath.

### Result for iap-item-display

H1 picks `category`. Top-level split (counts from the masterfile at the time of writing — exact numbers may shift):

| File | Entries |
|------|---------|
| `sticker.d.ts` | ~666 |
| `bundle.d.ts` | ~275 |
| `global-event-ticket.d.ts` | ~60 |
| `no-category.d.ts` | ~46 |
| `free.d.ts` | ~34 |
| `items.d.ts` | ~31 |
| `pokecoins.d.ts` | ~4 |
| `upgrades.d.ts` | ~2 |
| `transporter-energy.d.ts` | 1 |
| `flair-bundle.d.ts` | 1 |

`sticker.d.ts` (666) and `bundle.d.ts` (275) exceed `SPLIT_THRESHOLD = 100`, so the existing recursion in `split.ts:371-379` auto-sub-splits them into `sticker/` and `bundle/` subdirectories. The recursion gates (`acceptRecursion`) already handle filename quality and small-bucket tolerance for nested splits.

### Risk: regressions in other groups

The change is additive — H1 already accepts strict 100%-coverage fields, and this only adds previously-rejected candidates.

- Groups currently splitting via H1: no change. They keep picking the same field; coverage of 100% beats anything lower under tie-breaking.
- Groups currently splitting via H2 or H3: may now pick up an H1 field. Intended in cases like iap-item-display, but a noisy partial field could in principle produce a worse split than the H2/H3 the group had before.
- Groups emitting `kind: "none"`: unchanged — entries below `SPLIT_THRESHOLD` don't enter this path.

Mitigation: regenerate all packages, diff the output, and inspect anything that moved. If a partial-coverage field produces a worse split than the H2/H3 fallback, raise `H1_MIN_COVERAGE` or add a secondary gate.

## Tests

`src/split.test.ts` already covers H1. Three new fixtures:

1. **Field present in 100% of entries.** Verifies the strict-universality path still picks it. No regression.
2. **Field present in 95% of entries.** Verifies the new partial-coverage path picks it; missing entries land in a `no-<field>` bucket; bucket counts and contents are correct.
3. **Field present in 50% of entries (below `H1_MIN_COVERAGE`).** Verifies the field is rejected and the cascade falls through to H2/H3.

## Out of scope

- Improving H3 filenames. After this change, iap-item-display no longer hits H3. If H3 fragmentation shows up in a future group that lacks a partial-coverage axis, it gets its own design pass.
- Changing H2 or H3 thresholds. They keep their current behavior; this design only touches H1.
- Renaming or restructuring the `entries/` directory layout itself. The output structure stays the same — only which files get produced changes.

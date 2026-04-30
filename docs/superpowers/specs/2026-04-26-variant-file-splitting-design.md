# Variant File Splitting — Design Spec

**Date:** 2026-04-26
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Ready for plan-writing

## Problem

The post-TData generator emits one TypeScript file per multi-entry discriminator. A handful of those files are huge:

```
pokemon-settings.ts            4.5 MB   (2460 variants)
pokemon-extended-settings.ts   1.15 MB  (2464 variants)
avatar-customization.ts        851 KB   (1757 variants)
gender-settings.ts             616 KB   (2463 variants)
combat-league.ts               470 KB   (~105 variants, large literals)
avatar-item-display.ts         406 KB   (1636 variants)
iap-item-display.ts            370 KB   (1118 variants)
form-settings.ts               267 KB   (1025 variants)
badge-settings.ts              245 KB   (863 variants)
```

These files are unwieldy on three axes simultaneously: TypeScript compiler / IDE responsiveness, parse time and tooling cost, and human navigability. The user's primary motivation is **organization** — finding and reading the generated output is hard when a single file holds thousands of variant aliases.

## Goal

Reorganize the generated TypeScript output so every group lives in its own directory, and the largest groups have their per-variant aliases split across multiple files using **logical, content-derived heuristics** (not alphabetical buckets, not per-group hand-tuning). Splitting must apply uniformly across all groups via generic threshold-driven rules. **Lossless only** — every variant alias retains the same name and the same literal type as today; only their file location changes.

## Design

### Directory Structure

Every multi-entry group becomes a directory. Singletons remain consolidated in `misc/`.

```
packages/ts/src/
  index.ts                              ← top-level barrel: re-exports each group's index;
                                          holds MasterfileEntry, MasterfileTemplateID, MasterfileEntryByTemplateID
  variants.ts                           ← top-level barrel: re-exports each group's variants
  _utils.ts                             ← unchanged

  misc/
    index.ts                            ← all singleton interfaces + MiscMasterfileEntry + MiscTemplateID

  combat-type/                          ← multi-entry, ≤ 100 entries (no variant split)
    index.ts                            ← base interface, XData, union, TemplateID alias
    variants.ts                         ← all per-variant aliases inline

  pokemon-settings/                     ← multi-entry, > 100 entries, H1 succeeded
    index.ts                            ← base interface, XData, union, TemplateID alias
    variants/
      index.ts                          ← barrel re-exporting every file below
      water.ts                          ← variants where data.pokemonSettings.type === "POKEMON_TYPE_WATER"
      fire.ts
      ...

  pokemon-extended-settings/            ← multi-entry, > 100 entries, H2 succeeded
    index.ts
    variants/
      index.ts
      form.ts                           ← cluster with distinctive field {form}
      base.ts                           ← cluster with no distinctive fields
      bread-overrides+form.ts           ← cluster with distinctive {breadOverrides, form}
      ...
```

### Cascade Rules — Choosing How to Split a Group

Apply per group, in order. First rule that succeeds wins.

**Threshold:** A group is a candidate for variant splitting only if it has **> 100 entries**. Groups at or below the threshold emit a flat `variants.ts` file with all aliases inline.

**Heuristic 1 — Single-field discriminator** (preferred when applicable)

A field qualifies as a discriminator iff:
- It is **present in 100% of variants** under `data[discriminator]`.
- All values are **strings** (numeric and boolean fields are rejected; semantic file names matter).
- Cardinality is in `[2, 30]` distinct values.
- The largest single value holds **≤ 80%** of variants (no severe dominance).

When multiple fields qualify, pick the one with the **lowest dominance** (most balanced split). Tie-break: lowest cardinality, then field name lexicographic.

If a discriminator field exists, split into one file per distinct value.

**Heuristic 2 — Field-presence fingerprint clustering** (fallback)

For each variant, compute its fingerprint: the sorted set of top-level keys present under `data[discriminator]`, **excluding keys present in 100% of the group's variants**. Universally-present keys do not differentiate variants and would clutter the fingerprint.

Note: this is presence-uniformity, not value-uniformity (invariant detection). A field like `uniqueId` is always present but holds different values per variant — it's not an invariant, but it's still excluded from H2 fingerprints because every cluster would carry it identically.

Group variants by identical fingerprint. The split succeeds iff:
- Cluster count is in `[2, max(2, entries / 5)]`. (Average cluster size ≥ 5 — prevents pokemonSettings-style explosions where nearly every variant is its own fingerprint.)
- No additional dominance check; lopsided 2-cluster splits like genderSettings (96% / 4%) are accepted because they still produce a meaningful "common case vs. has-form" organization.

If H2 fails, the cascade falls through to no-split.

**No-split fallback**

If neither heuristic produces a viable split, emit a single `variants.ts` file at the group root (no `variants/` directory). All aliases live inline. Examples expected: `moveSequenceSettings` (one H2 cluster, no H1 candidate).

### File Naming

**For H1-split files** — name from the discriminator value:

1. Find the longest common prefix among all chosen values that ends at an underscore (e.g. `POKEMON_TYPE_` across `POKEMON_TYPE_WATER`, `POKEMON_TYPE_FIRE`, ...). If no such prefix exists (e.g. `FREE`, `PREMIUM`), strip nothing.
2. Strip the prefix; lowercase; replace `_` with `-`.
3. Examples:
   - `POKEMON_TYPE_WATER` → `water.ts`
   - `BADGE_GREAT_LEAGUE` → `great-league.ts`
   - `ITEM_CATEGORY_POKEBALL` → `pokeball.ts`
   - `FREE` → `free.ts`

**For H2-cluster files** — name from the cluster's fingerprint:

1. The fingerprint already excludes universally-present fields (per H2 definition above), so each cluster's fingerprint is its distinctive set.
2. File name = kebab-cased fields joined with `+`. If the fingerprint is empty, use `base.ts`.
3. Cluster fingerprints are unique by construction (clusters are equivalence classes over fingerprints), so file names cannot collide.
4. Examples (from pokemonExtendedSettings, where `sizeSettings` and `uniqueId` are universally present and therefore stripped):
   - `{form}` (1256 entries) → `form.ts`
   - `{}` (864 entries) → `base.ts`
   - `{breadOverrides, form}` (124 entries) → `bread-overrides+form.ts`
   - `{breadOverrides, tempEvoOverrides}` (12 entries) → `bread-overrides+temp-evo-overrides.ts`

### Per-Group Files

Every group's directory contains **`index.ts`** with:
- Imports for `S` from `../_utils`.
- The base generic interface (`X<TemplateID, TData>`).
- The `XData` interface.
- The group's `XMasterfileEntry` union.
- The group's `XTemplateID` alias.
- A `export type * from "./variants"` (or `./variants.ts`) re-export so consumers importing from `<group>/index` still see all variants.

If the group is split (H1 or H2 succeeded), the directory also contains **`variants/`**:
- `variants/index.ts` — barrel: `export type * from "./<each-file>"` for every variant file, sorted alphabetically by file name for diff stability.
- `variants/<name>.ts` — one file per H1 value or H2 cluster, containing only the per-variant alias declarations for that bucket. Within a file, alias declarations are emitted in the existing sort order (`templateId` ascending) — same as today.

If the group is not split, the directory contains **`variants.ts`** instead — all aliases inline.

### Top-Level Files

**`packages/ts/src/index.ts`** (the top-level barrel):
- For each group: `export type * from "./<group-kebab>";` (resolves to that group's `index.ts`).
- For misc: `export type * from "./misc";`.
- `MasterfileEntry`, `MasterfileTemplateID`, `MasterfileEntryByTemplateID` defined here as today.

**`packages/ts/src/variants.ts`** (top-level variants barrel):
- For each split group: `export type * from "./<group-kebab>/variants";`.
- For each unsplit multi-entry group: `export type * from "./<group-kebab>/variants.ts";`.
- For misc: nothing — singleton interfaces are also their own variant aliases, exported from `misc/index.ts`.

### Singleton Group Handling (misc)

`misc.ts` becomes `misc/index.ts`. The internal layout is unchanged:
- All singleton interfaces inline.
- `MiscMasterfileEntry` union.
- `MiscTemplateID` alias.

No variant split is applied — singletons are by definition one declaration each, and 60+ tiny single-declaration files would be worse organization, not better.

### `package.json` Subpath Exports

Update `packages/ts/package.json` to expose the new structure as importable subpaths:

```json
{
  "exports": {
    ".": "./src/index.ts",
    "./variants": "./src/variants.ts",
    "./*": "./src/*/index.ts",
    "./*/variants": "./src/*/variants.ts",
    "./*/variants/*": "./src/*/variants/*.ts"
  }
}
```

This lets consumers do:
- `import type { ... } from "pogo-masterfile-types"` — everything (existing behavior preserved)
- `import type { ... } from "pogo-masterfile-types/variants"` — all variant aliases, no structural types
- `import type { ... } from "pogo-masterfile-types/pokemon-settings"` — one group's everything
- `import type { ... } from "pogo-masterfile-types/pokemon-settings/variants"` — one group's variants

The exact `exports` shape may need adjustment for TypeScript's resolution mode; the implementation plan should verify against `bunx tsc --noEmit` on a small consumer fixture.

### Concrete Example — `pokemonSettings` (H1 success)

```
packages/ts/src/pokemon-settings/
  index.ts            ← PokemonSettings<TemplateID, TData> + PokemonSettingsData
                        + PokemonSettingsMasterfileEntry + PokemonSettingsTemplateID
                        + export type * from "./variants"
  variants/
    index.ts          ← export type * from "./bug"; ... (18 lines)
    bug.ts            ← all PokemonSettings* variants where type === "POKEMON_TYPE_BUG"
    dark.ts
    dragon.ts
    electric.ts
    fairy.ts
    fighting.ts
    fire.ts
    flying.ts
    ghost.ts
    grass.ts
    ground.ts
    ice.ts
    normal.ts
    poison.ts
    psychic.ts
    rock.ts
    steel.ts
    water.ts
```

### Concrete Example — `pokemonExtendedSettings` (H2 success, 8 clusters)

```
packages/ts/src/pokemon-extended-settings/
  index.ts
  variants/
    index.ts
    form.ts                                     ← 1256 entries
    base.ts                                     ← 864 entries
    bread-overrides+form.ts                     ← 124 entries
    bread-overrides.ts                          ← 114 entries
    form+temp-evo-overrides.ts                  ← 44 entries
    temp-evo-overrides.ts                       ← 38 entries
    bread-overrides+temp-evo-overrides.ts       ← 12 entries
    bread-overrides+form+temp-evo-overrides.ts  ← 12 entries
```

### Concrete Example — `combatType` (no split, ≤ 100 entries)

```
packages/ts/src/combat-type/
  index.ts            ← base interface, XData, union, TemplateID, re-export
  variants.ts         ← all 18 CombatType* variant aliases inline
```

### Predicted Outcome by Group

| Group | Entries | Strategy | Files |
|---|---:|---|---:|
| pokemonSettings | 2460 | H1 `type` | 18 |
| pokemonExtendedSettings | 2464 | H2 fingerprint | 8 |
| genderSettings | 2463 | H2 fingerprint | 2 |
| avatarCustomization | 1757 | H1 `groupName` | 17 |
| avatarItemDisplay | 1636 | H2 fingerprint | 2 |
| iapItemDisplay | 1118 | H2 fingerprint | 34 |
| formSettings | 1025 | H2 fingerprint | 2 |
| badgeSettings | 863 | H2 fingerprint | 4 |
| stickerMetadata | 600 | H2 fingerprint | 11 |
| pokemonFamily | 541 | H2 fingerprint | 3 |
| eventPassTierSettings | 420 | H1 `track` | 2 |
| moveSettings | 384 | H1 `pokemonType` | 18 |
| moveSequenceSettings | 331 | **no split** | 1 (`variants.ts`) |
| combatMove | 318 | H1 `type` | 18 |
| settingsOverrideRule | 250 | H2 fingerprint | 3 |
| locationCardSettings | 181 | H2 fingerprint | 3 |
| itemSettings | 141 | H1 `category` | 30 |
| combatLeague | 105 | H2 fingerprint | 6 |
| megaEvoLevelSettings | 103 | H2 fingerprint | 5 |
| (all others) | ≤ 100 | no split | 1 (`variants.ts`) each |

### Edge Cases

| Case | Behavior |
|---|---|
| Group has ≤ 100 entries | No split. `variants.ts` flat file. |
| H1 finds multiple qualifying fields | Pick lowest dominance, then lowest cardinality, then field-name lex. |
| H1 file name collisions | Cannot occur. Prefix-stripping preserves uniqueness because original values are distinct. |
| H1 stripped value is empty (degenerate input) | Fall back to lowercase of the un-stripped value. |
| H2 produces too many clusters (avg cluster size < 5) | H2 fails → no-split fallback (single `variants.ts`). |
| H2 produces 1 cluster | Treated as failure. Single `variants.ts`. |
| H2 cluster has empty fingerprint | Named `base.ts`. |
| H2 file name collisions | Cannot occur. Each cluster has a unique fingerprint by construction. |
| Singleton (single-entry) group | Lives in `misc/index.ts`, no directory promotion. |
| New variant added in regen | Lands in its existing H1 bucket / matching H2 fingerprint cluster. Stable diffs. |
| New variant introduces a previously-unseen H2 fingerprint | New cluster file appears; existing files unchanged. |
| New value added to H1 discriminator field | New file appears (e.g. `POKEMON_TYPE_NEW` → `new.ts`); existing files unchanged. |

## Implementation Outline

### Removed from current generator

- `planFiles` returning a flat `Map<string, string>` of file → content.
- The current single-file-per-discriminator output strategy in [src/generate.ts:19](src/generate.ts:19).
- `emitMiscFile`'s direct write of `misc.ts` at the root.

### Retained

- `groupEntries`, `Group`, `Entry` ([src/group.ts](src/group.ts)) — unchanged.
- `inferJsonType`, `inferJsonTypes`, `widenType` ([src/infer.ts](src/infer.ts)) — unchanged.
- `detectInvariants`, `stripInvariantsFromValue`, `stripInvariantsFromWidened` ([src/invariants.ts](src/invariants.ts)) — unchanged.
- `groupName`, `aliasSuffix`, `deriveGroupAliases`, `stripGroupNameTail` ([src/naming.ts](src/naming.ts)) — unchanged.
- `kebabCase` ([src/emit.ts:394](src/emit.ts:394)) — used heavily for new file naming.
- The current contents of `emitGroupFile` and `emitMiscFile` for the *type declarations themselves* — we're rearranging where they live, not rewriting them.

### New modules / functions

1. **`src/split.ts`** — new module containing the cascade logic:
   - `chooseSplit(group: Group): SplitPlan` returning a discriminated union:
     - `{ kind: "h1"; field: string; buckets: Map<string, { fileName: string; entries: Entry[] }> }`
     - `{ kind: "h2"; clusters: Array<{ fingerprint: string[]; fileName: string; entries: Entry[] }> }`
     - `{ kind: "none" }`
   - Helpers: `tryH1`, `tryH2`, `valueFileName` (H1 naming with prefix-strip), `fingerprintFileName` (H2 naming).
   - `chooseSplit` does not require invariants — H1 and H2 both reason about presence, not about value uniformity.

2. **`src/emit.ts`** changes:
   - Split `emitGroupFile` into:
     - `emitGroupIndex(group, invariants)` — emits the base interface, XData, union, TemplateID, and the re-export of `./variants`.
     - `emitVariantsBarrel(splitPlan)` — emits the `variants/index.ts` content for split groups.
     - `emitVariantFile(group, splitPlan, bucketEntries)` — emits one file containing only the listed entries' alias declarations. Imports `XData` and the base interface from `..` (the parent directory's `index.ts`).
     - `emitVariantsFlat(group, invariants)` — emits the inline `variants.ts` for unsplit groups.
   - The variant-alias rendering logic in `renderVariantAlias` is reused as-is — it doesn't care which file the alias ends up in.

3. **`src/generate.ts`** changes:
   - `planFiles` is rewritten to emit a directory tree, not a flat map. New return type: `Map<string, string>` where keys are *paths relative to OUT_DIR* (e.g. `"pokemon-settings/index.ts"`, `"pokemon-settings/variants/water.ts"`).
   - The top-level barrels (`index.ts`, `variants.ts`) are emitted by new helpers `emitTopLevelIndex` and `emitTopLevelVariants` driven by the per-group `SplitPlan`s.
   - `misc.ts` becomes `misc/index.ts` (path change only; content unchanged).

4. **`src/write.ts`** — verify `mkdir` recursion handles nested paths. If `writeOutput` doesn't already create parent directories, add it.

5. **`packages/ts/package.json`** — add the `exports` map shown above.

### Test strategy

- New unit tests in `src/split.test.ts` covering:
  - H1 succeeds: fixture with a string-valued field present in all variants, cardinality in range, balanced.
  - H1 rejects numeric-only field even at cardinality 4 with good balance.
  - H1 rejects boolean-only field.
  - H1 rejects high-dominance field (>80%).
  - H1 rejects high-cardinality field (>30).
  - H1 rejects field not present in 100%.
  - H1 picks lowest-dominance among multiple qualifying fields.
  - H1 accepts cardinality 2 (e.g. `track: FREE | PREMIUM`).
  - H2 succeeds: fixture with 3-4 clear fingerprints.
  - H2 strips universally-present fields from fingerprints (fixture where every variant has `uniqueId` plus varying optionals).
  - H2 rejects single-cluster fixture.
  - H2 rejects too-many-clusters fixture (avg cluster size < 5).
  - H2 accepts lopsided 2-cluster fixture (96/4 split).
  - File-name derivation:
    - H1 prefix stripping (`POKEMON_TYPE_WATER` → `water`).
    - H1 with no common prefix (`FREE` → `free`).
    - H2 single-field fingerprint (`{form}` → `form.ts`).
    - H2 multi-field fingerprint (`{breadOverrides, form}` → `bread-overrides+form.ts`).
    - H2 empty fingerprint (`{}` → `base.ts`).
- Update `src/emit.test.ts` for the split entry-points (`emitGroupIndex`, `emitVariantFile`, etc.) — the existing assertions about declaration shape carry over.
- Add an integration test that runs `chooseSplit` against a fixture mirroring the real masterfile shape and asserts the file-name set.

### Migration

Single switchover. Regenerate all output, verify the directory tree, run `bunx tsc --noEmit` from `packages/ts` to confirm every emitted file compiles, and update any consumer fixture (none currently in-repo).

**Rust/Go emitters.** Out of scope per `CLAUDE.md`. The TypeScript split has no implications for the other packages; Rust/Go can stay flat. User verifies those outputs manually after the TypeScript work lands.

## Verification

1. `bun test` — all rewritten and new tests pass.
2. `bun run generate` — regenerates the directory tree without error.
3. `bun run format` — Biome formatting passes.
4. `cd packages/ts && bunx tsc --noEmit` — zero errors across the new directory tree.
5. Spot-check generated layouts:
   - `pokemon-settings/variants/` contains 18 type-named files (`water.ts`, `fire.ts`, ...).
   - `pokemon-extended-settings/variants/` contains 8 fingerprint-named files (`form.ts`, `base.ts`, ...).
   - `gender-settings/variants/` contains 2 fingerprint-named files.
   - `combat-type/variants.ts` exists as a flat file (≤ 100 entries, no split).
   - `move-sequence-settings/variants.ts` exists as a flat file (no-split fallback).
   - `misc/index.ts` exists with all singletons.
6. Spot-check root barrels:
   - `src/index.ts` re-exports every group + misc and defines `MasterfileEntry`.
   - `src/variants.ts` re-exports every group's variants surface.
7. Confirm subpath imports work: write a tiny TS fixture importing from `pogo-masterfile-types/pokemon-settings/variants/water` and verify it type-checks.
8. Report to user so they can verify Rust/Go outputs per `CLAUDE.md`.

## Non-Goals

- No changes to the Rust (`packages/rust/lib.rs`) or Go (`packages/go/main.go`) emitters.
- No changes to per-variant alias names — `PokemonSettingsBulbasaurNormal` keeps its identity, only its file location changes.
- No changes to the TData / invariant-detection logic landed in the previous refactor.
- No lossy splitting (e.g. widening huge tuples). Lossless only.
- No alphabetical or count-based fallback — if H1 and H2 both fail, accept a single flat `variants.ts`.
- No per-group configuration, no allow-lists, no manually-specified discriminator fields.

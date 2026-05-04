# Deprecated masterfile template tracking — design spec

**Date:** 2026-05-03
**Status:** Approved (brainstorming complete; ready for implementation plan)

## Goal

Surface masterfile templates that have been removed upstream as **deprecated types** in the published `pogo-masterfile-types` packages (TS / Rust / Go). Consumers who need historical type-coverage opt in via a sub-path import (TS), feature flag (Rust), or sub-package (Go). Going forward, removals are tracked automatically as part of the existing `bun run generate` autoupdate flow.

## Context

- The upstream `alexelgt/game_masters` GAME_MASTER.json drops template entries regularly. From a 562-commit, 20-month analysis: 12,423 templates have been permanently removed (40% of all templates ever observed), spanning 41 unique discriminators.
- The current generator pipeline (`src/generate.ts`, six language emitters) regenerates live types from each new upstream pull and overwrites prior emission. Removed templates silently disappear from the type system.
- A consumer parsing an older masterfile dump against the current types hits "unknown templateId" failures with no recourse.

## Non-goals

- Shipping JSON data files. The publish artifacts remain types-only.
- Preserving template *values* — only types. Consumers who need values reconstruct them from their own data.
- Tracking transient (temporary) removals. The 1,884 short-lived gaps in history are not interesting; we only care about the permanent (currently-absent) set.
- Cumulative history. Once a deprecated template returns to live, we drop it from the deprecated emission entirely. Git history is the audit trail.

## Lifecycle

### Phase 1 — Bootstrap (one-time)

A script `scripts/template-history/bootstrap-deprecated.ts` reads the existing local analysis artifacts:
- `scripts/template-history/mini-masterfile-removed.json` (12,423 entries with full data shapes)
- `scripts/template-history/report.json` (per-template `lastSeen` metadata)

It emits the initial deprecated files for all three languages:
- `packages/ts/dist/deprecated.d.ts`
- `packages/rust/src/deprecated.rs`
- `packages/go/deprecated/deprecated.go`

…and applies the package configuration changes that expose them as opt-in surfaces (see "File layout").

The bootstrap is committed as a single PR. After review and merge, the bootstrap script and all analysis artifacts are deleted (see "Cleanup").

### Phase 2 — Steady-state (every `bun run generate`)

A new script `src/update-deprecated.ts` runs as the second step of `bun run generate`:

```json
"generate": "bun run src/generate.ts && bun run src/update-deprecated.ts && bun run format"
```

It diffs the previous emission (read via `git show HEAD:...`) against the post-regen working tree, computes deltas, and rewrites the three deprecated files. The live emission produced by `src/generate.ts` is never modified by this step.

## File layout & per-language opt-in

| Language | Emitted file | Opt-in mechanism |
|---|---|---|
| TypeScript | `packages/ts/dist/deprecated.d.ts` (single flat file at dist root) | `package.json` `exports` field adds `"./deprecated": "./dist/deprecated.d.ts"`. Consumers: `import type { ... } from "pogo-masterfile-types/deprecated"`. The deprecated module re-exports key live unions widened with deprecated variants — opt in by changing the import path. |
| Rust | `packages/rust/src/deprecated.rs` (single flat file) | `[features] deprecated = []` in `Cargo.toml`. `#[cfg(feature = "deprecated")] pub mod deprecated;` in `src/lib.rs`. Consumers add `features = ["deprecated"]` to their dependency. |
| Go | `packages/go/deprecated/deprecated.go` (separate sub-package) | Sub-package at the canonical path `github.com/.../packages/go/deprecated`. The main module never depends on it. Consumers explicitly import `.../packages/go/deprecated` to opt in. No build tags. |

## Emission shape

For each of the (currently 41) deprecated discriminators, the rule is:

### Multi-entry discriminator (>1 templateId)

Emit one generic type parameterized over a string-literal union of the deprecated templateIds. Mirrors the live emission's `<Discriminator><TemplateID extends ... = ...>` pattern.

```ts
// TS
/**
 * @deprecated lastSeen 2026-04-09 — 11890 entries
 */
export type DeprecatedEventPassTierSettings<
  TemplateID extends DeprecatedEventPassTierSettingsIds = DeprecatedEventPassTierSettingsIds
> = { templateId: TemplateID; data: { templateId: TemplateID; eventPassTierSettings: { /* ... */ } } };

type DeprecatedEventPassTierSettingsIds = "FOO" | "BAR" | /* ... */;
```

```rust
// Rust
#[deprecated(note = "lastSeen 2026-04-09 — 11890 entries")]
pub struct DeprecatedEventPassTierSettings { /* ... */ }
```

```go
// Go (the // Deprecated: convention is recognized by gopls and most linters)
// Deprecated: lastSeen 2026-04-09, 11890 entries
type EventPassTierSettings struct { /* ... */ }
```

### Singleton discriminator (1 templateId)

Same shape as multi-entry, but the templateId union has one literal. The discriminator's type is captured exactly once.

### No-discriminator entries

The 2 templates in the historical analysis whose `data` contains only `templateId` (no inner discriminator block) are emitted as literal types of the form `{ templateId: "FOO"; data: { templateId: "FOO" } }`. They get the same deprecation annotation. Trivial type, but explicit.

### Metadata

Each emitted deprecated type carries exactly two metadata fields in its annotation:
- `lastSeen` — ISO date of the most recent removal among any of that discriminator's currently-deprecated templateIds
- `entryCount` — number of currently-deprecated templateIds in that discriminator

Both values update on each steady-state run as the deprecated set evolves.

## Steady-state algorithm

```
1. parse working tree's deprecated.d.ts  →
     Map<discriminator, {
       templateIds: Set<string>,
       typeBody:    string,
       lastSeen:    Date,
       entryCount:  number
     }>

2. parse `git show HEAD:packages/ts/dist/...`  →
     Map<templateId, discriminator>            (pre-regen live state)

3. parse working tree's post-regen live emission  →
     Set<templateId>                           (post-regen live state)

4. compute:
     newlyDeprecated = preLive.keys() − postLive
     newlyRevived    = currentDeprecated.allTemplateIds() ∩ postLive

5. for each id in newlyDeprecated:
     - look up its discriminator from step 2
     - if the discriminator is new to deprecated:
         fetch its type body via `git show HEAD:packages/{ts,rust,go}/.../types.{d.ts,rs,go}`
     - add the id to its discriminator's templateIds set
     - update lastSeen and entryCount

6. for each id in newlyRevived:
     - remove from its discriminator's templateIds set
     - if the set becomes empty, drop the discriminator entirely from deprecated

7. re-emit packages/ts/dist/deprecated.d.ts
   re-emit packages/rust/src/deprecated.rs
   re-emit packages/go/deprecated/deprecated.go
```

### Parsing strategy

- **TS** — use the TypeScript Compiler API (`typescript` package, already a peer dep) to extract templateId literals from each per-discriminator `entries.d.ts`. This is the primary parse target since Bun runs TS natively and the TS emission is the most structured.
- **Rust / Go** — only needed when copying type bodies for **brand-new** deprecated discriminators (rare). Regex-based extraction of the targeted file's content; the live generator's output is regular enough that this is reliable.

## Edge cases

- **Schema drift across deprecation events.** If `eventPassTierSettings` evolves (fields added/removed) between two deprecation events, the deprecated emission keeps the snapshot of the type as it was at the FIRST deprecation event for that discriminator. Existing deprecated types are append-only — only the templateId union and metadata update on subsequent runs. Schema mismatch within a single deprecated type is detectable; if it ever occurs the human review of the autoupdate PR catches it.

- **`git show HEAD:...` fails (fresh clone, no HEAD, paths moved).** The script logs a warning and no-ops the deprecation update for that run. The live emission is unaffected; only the deprecated emission is skipped.

- **First run after bootstrap.** Pre-regen and post-regen emissions are identical (no diff). The script runs, computes empty deltas, exits clean. This is the wiring smoke test.

- **Manual edits to live emission.** `git show HEAD:...` returns the LAST committed state — even if a contributor manually edits emitted files between runs, the script does the right thing relative to the prior committed point.

- **Cargo / npm / Go build with no deprecated consumer.** The opt-in mechanisms (sub-path import, feature flag, sub-package) ensure that consumers who don't want deprecated types pay no cost. Build size and compile time are unchanged for the default path.

## Cleanup (after bootstrap PR merges)

**Delete:**
```
scripts/template-history/
├── extract_history.py
├── analyze_gaps.py
├── gap_detection.py
├── build_mini_masterfile.py
├── bootstrap-deprecated.ts
├── CONTRIBUTION.md
├── commits.jsonl
├── report.json
├── mini-masterfile-removed.json
└── extract.log
```

The local upstream clone at `/Users/rin/GitHub/game_masters_analysis/` was never committed and can be removed at the user's discretion.

**Keep:**
- `src/update-deprecated.ts` — steady-state script, lives permanently
- `packages/ts/dist/deprecated.d.ts`, `packages/rust/src/deprecated.rs`, `packages/go/deprecated/deprecated.go` — regenerated each run
- Package configuration changes — TS `exports`, Rust feature, Go sub-package init

## Verification

- **Bootstrap PR:** the three emitted deprecated files type-check (`bun run typecheck`, `cargo check --features deprecated`, `cd packages/go/deprecated && go build ./...`). Sample import from each language compiles.
- **Steady-state smoke test:** running `bun run generate` immediately after the bootstrap PR merges produces zero diff in the deprecated files. Any non-empty diff indicates a wiring bug.
- **Synthetic regression:** add a unit test that simulates a templateId moving live→deprecated and back, asserting the resulting emission contents. Lives alongside existing `bun test` suites.

## Out of scope

- Schema-drift handling beyond the snapshot-at-first-deprecation rule. If real drift occurs we'll address it as a follow-up.
- A consumer-facing CHANGELOG of deprecations. The PR diff and `git log` against `deprecated.d.ts` is the authoritative record.
- Surfacing deprecation metadata at runtime (e.g., a `getDeprecationDate(templateId)` function). Types-only.

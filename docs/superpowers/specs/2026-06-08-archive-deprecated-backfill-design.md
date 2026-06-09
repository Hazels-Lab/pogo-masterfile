# Archive backfill for deprecated-types tracking

**Date:** 2026-06-08
**Status:** Approved (design)
**Related:** [2026-05-03-deprecated-types-tracking-design.md](2026-05-03-deprecated-types-tracking-design.md), [2026-05-04-h1-partial-coverage-design.md](2026-05-04-h1-partial-coverage-design.md)

## Problem

The deprecated-types system (`src/update-deprecated.ts`) is a **steady-state diff**: it
compares the previous live emission (`git HEAD`) against the new live emission (working
tree) on each `bun run generate`, marking ids that disappeared as deprecated.

The initial deprecated set was produced by a one-time bootstrap
(`scripts/template-history/bootstrap-deprecated.ts`, deleted in commit `483ac97`) that
consumed pre-computed analysis artifacts (`report.json`, `mini-masterfile-removed.json`).
That bootstrap's crawl window started around 2022 — **every `lastSeen` date in the current
emission is 2024-11 or later.**

The PokeMiners archive (cloned at `/Users/rin/GitHub/game_masters`) holds 239 timestamped
`game_master.json` snapshots spanning **2021-06 → 2026-04**, plus `latest/`. Template ids
that existed in those early snapshots and were removed before the bootstrap's window are in
**neither** the live emission **nor** the deprecated set — the steady-state diff never saw
them.

### Empirically confirmed gap

| Snapshot | total ids | not in (live ∪ deprecated) |
| --- | --- | --- |
| 2021-06 (`gm_vNULL_apk2090`) | 7297 | **991** |
| 2022-09 (`gm_v2_apk2310`) | 8196 | 4 |
| 2023-08 (`gm_v2_apk1234`) | 11156 | 4 |
| 2024-09 (`gm_v2_apk0327`) | 13969 | 4 |

The 991 from 2021 break down as:

- **~988 standalone `_SHADOW` / `_PURIFIED` pokemon entries** — `pokemonSettings`
  (`V0001_POKEMON_BULBASAUR_SHADOW`), `genderSettings`, and `SPAWN_*` variants. Niantic
  later moved shadow/purified to a flag and removed these standalone templates.
- **A scattered tail across 2022–2024** — `EX_RAID_SETTINGS`, `PUSH_GATEWAY_SETTINGS`,
  `PhotoSafari`, `ITEM_LEGENDARY_RAID_TICKET`, `BADGE_EVENT_0008`, old `*.ticket.5` items.

## Goal

Crawl the full archive, recover every template id that was historically present but is now
neither live nor already-deprecated, and (on demand) merge them into the deprecated emission
following the **existing convention** — keyed by discriminator, `lastSeen` = the most recent
snapshot date the id appeared in, templateIds-only format (typed data shapes were dropped in
commit `e715e36`).

## Non-goals

- Re-deriving typed data shapes for deprecated entries (the format is templateIds-only).
- Touching the steady-state path (`src/update-deprecated.ts`) — it stays the mechanism for
  all future updates.
- Per-id `lastSeen` precision — the emission format stores one `lastSeen` per discriminator
  (max over its ids). Backfill matches that.

## Data flow

```
previous_game_masters/*/game_master.json  ───► crawl ─► Map<id, {disc, lastSeen}>

template-ids.txt + latest/latest.json  ──────► LIVE set (exclude)
packages/ts/dist/deprecated.d.ts ──────────► CURRENT deprecated set (exclude + merge target)
                                            │
                          legacy = seen − live − alreadyDeprecated
                                            │
                  dry-run ─► report (grouped by discriminator, lastSeen, counts)
                  --write ─► merge into DeprecatedSet ─► emit TS / Rust / Go
```

## Components

All under `scripts/template-history/` (reuse the directory the original bootstrap used).
Logic split into pure, unit-testable helpers + a thin I/O entry point.

### Crawl

- Enumerate `previous_game_masters/*/` only. `latest/` is not crawled — its ids are live by
  definition (they feed the LIVE exclude set), so crawling them would add nothing to the
  legacy partition.
- Snapshot date: parse `YYYY.MM.DD` out of the folder name (all 239 match
  `…_YYYY.MM.DD-HH.MM.SS`; validated).
- Parse one file at a time with `JSON.parse` (~14 MB each, sequential). Keep only
  `Map<id, maxDate>` and `Map<id, disc>` — never hold multiple parsed files or full entries
  in memory at once. Total read ≈ 3.3 GB streamed file-by-file; memory bounded by the count
  of distinct ids (tens of thousands).
- **Discriminator** = `Object.keys(data).filter(k => k !== "templateId")[0] ?? "_marker"` —
  identical to `src/group.ts` and the deleted bootstrap. If an id's discriminator differs
  across snapshots, take the discriminator from its **latest** appearance (newest shape). If
  an entry has ≥2 non-templateId keys (shouldn't happen — `group.ts` asserts ≤1), warn and
  take the sorted-first key deterministically.
- Accumulate `lastSeen` = max snapshot date per id.

### Classify

- `LIVE` = ids in `template-ids.txt` ∪ ids in `latest/latest.json`. Union guards against
  skew between the project's last regen and PokeMiners' current dump, so nothing currently
  live can be marked deprecated (which would otherwise produce a duplicate type definition).
- `ALREADY_DEP` = ids parsed out of the working-tree `packages/ts/dist/deprecated.d.ts`.
- `legacy = allSeen − LIVE − ALREADY_DEP`.
- Rule: an id is deprecated ⟺ historically seen ∧ not currently live. Historical flicker
  (removed, re-added, removed) is irrelevant — `lastSeen` captures recency, consistent with
  the steady-state definition.

### Report (default, dry-run)

Console summary + `scripts/template-history/backfill-report.json`. Per discriminator:
count, `lastSeen` (and min date for context), sample ids, and whether it is a **new**
discriminator or **adds to an existing** deprecated record. The headline separates the
dominant bucket (the ~988 shadow/purified pokemon ids) from the scattered tail so the
shadow/purified question can be judged from the report before any write.

### `--write`

- Parse the working-tree `deprecated.d.ts` into a `DeprecatedSet` (reuse the JSDoc +
  `Deprecated{Pascal}Ids` union regexes already in `update-deprecated.ts`, factored into a
  shared helper so both call sites agree).
- **Merge, non-destructive:** union legacy ids into existing discriminator records;
  `lastSeen = max(existing, backfill)`. Backfill dates (2021–2024) are older than every
  steady-state date (≥2024-11), so existing records' `lastSeen` never changes; only
  brand-new discriminators receive backfill dates.
- Re-emit via the existing `emitTypescript` / `emitRust` / `emitGo` (`src/deprecated/`) so
  format matches the steady-state output exactly.
- Caller then runs `bun run format` and `bun run typecheck`.

## Lifecycle

Keep the script (unlike the one-time bootstrap). It reads the archive directly with no
intermediate artifacts, so it is idempotent and re-runnable whenever PokeMiners adds
history. `--archive <path>` defaults to `/Users/rin/GitHub/game_masters`.

## Error handling

- Missing/unreadable `game_master.json` in a snapshot dir → warn, skip that snapshot.
- Folder name that fails date parse → hard error (the contract is all match; a miss means a
  new format to handle, not something to silently skip).
- `--write` when `deprecated.d.ts` is absent → hard error (run `bun run generate` first).
- Entry with ≥2 non-templateId keys → warn, deterministic fallback (sorted-first key).

## Testing

Bun unit tests on the pure helpers with tiny inline fixtures:

- date parse from folder name (valid + malformed).
- id→discriminator extraction (1 key, 0 keys → `_marker`, ≥2 keys → fallback).
- classify (live / already-dep / legacy partition; union-of-live correctness).
- merge semantics (new discriminator added; existing record gains ids; `lastSeen = max`,
  older backfill date does not regress an existing newer date).

No test runs against the 3 GB archive — helpers take in-memory inputs.

## Verification (manual, after implementation)

1. Dry-run → eyeball `backfill-report.json` counts; confirm ~1000 legacy ids, dominant
   shadow/purified bucket, scattered tail.
2. Decide shadow/purified inclusion.
3. `--write` → `bun run format` → `bun run typecheck` → report to the user to test the
   emitted TS / Rust / Go.

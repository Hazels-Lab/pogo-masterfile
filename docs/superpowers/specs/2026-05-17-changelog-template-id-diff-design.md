# Changelog template-ID diff

Author: Rin
Date: 2026-05-17
Status: Approved (design); implementation pending

## Goal

When the hourly `autoupdate.yml` workflow regenerates types from upstream `game_masters` and bumps per-package patch versions, each touched package's `CHANGELOG.md` entry should list the template IDs that were added and removed in that regeneration.

Today every entry is identical:

```
## [0.1.17] - 2026-05-17

Automated regeneration from upstream masterfile commit `7f5778017df3bb9c4e57efb35f954c375f679e8b`.
```

After this change, entries also enumerate the ID delta when one exists.

## Non-goals

- Surfacing the diff inside the PR body. CHANGELOG is canonical; PR text stays brief.
- Per-package customization of the diff body. Template IDs are masterfile-derived and affect every language target equally — the same diff block goes into all 7 changelogs.
- Folding huge diffs into `<details>` collapses or grouping by ID prefix. Defer until the CHANGELOG entries become painful to read.
- Backfilling diffs for historical entries.
- Touching the existing gitignored `template-ids.json` local artifact.

## Architecture

### New tracked artifact: `template-ids.txt`

Plain-text file at repo root. Sorted alphabetically, one template ID per line, trailing newline. Single source of truth for "what template IDs existed at this commit".

Format example:

```
ACCESSIBILITY_CLIENT_SETTINGS
ADDITIVE_SCENE_SETTINGS
ADDRESS_BOOK_IMPORT_SETTINGS
...
```

~600KB once seeded. Git delta-compresses subsequent updates; per-PR diffs render cleanly in the GitHub UI.

### Generator writes it

`src/generate.ts` writes `template-ids.txt` once near the top of `main()`, immediately after `fetchMasterfile()` returns `entries`. Runs in every mode (`all`, `--rust-only`, `--go-only`, `--ts-only`, `--ts-loose-only`) — template IDs are language-agnostic, so the snapshot must reflect upstream regardless of which target the user invoked.

### Workflow snapshots before / after

`.github/workflows/autoupdate.yml` already runs `detect-changes.ts` twice (before regen, after regen) to compute the per-package hash diff. Add a parallel snapshot path for the template-ID file:

1. **Before regen (after checkout, before `bun run generate`):**
   ```
   cp template-ids.txt /tmp/template-ids-before.txt 2>/dev/null || : > /tmp/template-ids-before.txt
   ```
   Fallback to empty file covers the (one-time) case where the artifact has not yet been committed.

2. **After regen:**
   ```
   cp template-ids.txt /tmp/template-ids-after.txt
   ```
   No fallback — `generate.ts` will have written it, and if it didn't, the step should fail loudly.

### `bump-versions.ts` builds the diff body

Extended to accept two new positional arguments: the before- and after-snapshot paths.

New pure helper:

```ts
export function formatTemplateIdDiff(beforeText: string, afterText: string): string {
  const before = new Set(beforeText.split("\n").filter(Boolean));
  const after = new Set(afterText.split("\n").filter(Boolean));
  const added = [...after].filter((x) => !before.has(x)).sort();
  const removed = [...before].filter((x) => !after.has(x)).sort();

  const parts: string[] = [];
  if (added.length > 0) {
    parts.push(`### Added template IDs (${added.length})\n\n${added.map((x) => `- ${x}`).join("\n")}`);
  }
  if (removed.length > 0) {
    parts.push(`### Removed template IDs (${removed.length})\n\n${removed.map((x) => `- ${x}`).join("\n")}`);
  }
  return parts.length === 0 ? "" : `\n\n${parts.join("\n\n")}`;
}
```

`main()` composes the final body:

```ts
const commitLine = `Automated regeneration from upstream masterfile commit \`${upstreamSha}\`.`;
const diffBlock = formatTemplateIdDiff(beforeText, afterText);
const body = `${commitLine}${diffBlock}`;
applyBumps(initial, body);
```

`applyBumps` and `appendChangelog` are unchanged — they already accept arbitrary body text.

## Data flow

```
checkout
    └─ template-ids.txt at HEAD
        └─ cp → /tmp/template-ids-before.txt

bun run generate
    └─ fetchMasterfile() → entries[]
        └─ write sorted IDs → template-ids.txt
            └─ language generators run

cp template-ids.txt → /tmp/template-ids-after.txt

bun run scripts/bump-versions.ts \
    /tmp/before.json /tmp/after.json \
    /tmp/template-ids-before.txt /tmp/template-ids-after.txt
    └─ diff hashes → set of changed packages
    └─ diff template IDs → markdown block
    └─ for each changed package + cascade:
        bumpPatch version
        appendChangelog(body)
        update manifest

git add . && create PR
```

## Changelog format

Entry with adds and removes:

```markdown
## [0.1.18] - 2026-05-17

Automated regeneration from upstream masterfile commit `<sha>`.

### Added template IDs (3)

- FOO_1
- BAR_2
- BAZ_3

### Removed template IDs (1)

- QUUX_OLD
```

Entry with only adds:

```markdown
## [0.1.18] - 2026-05-17

Automated regeneration from upstream masterfile commit `<sha>`.

### Added template IDs (1)

- FOO_1
```

Entry with no template ID changes (regen for non-ID-changing upstream tweaks):

```markdown
## [0.1.18] - 2026-05-17

Automated regeneration from upstream masterfile commit `<sha>`.
```

Matches current behavior in the no-change case.

## Files touched

| File | Change |
|---|---|
| `src/generate.ts` | After `fetchMasterfile()`, write `template-ids.txt` sorted one-per-line |
| `template-ids.txt` | **NEW** — one-time backfill commit seeds from current upstream so the first post-merge autoupdate has a baseline |
| `.gitignore` | Leave `template-ids.json` ignored. `template-ids.txt` is not listed there, so no edit needed |
| `scripts/bump-versions.ts` | Add `formatTemplateIdDiff(before, after)`. Accept two new positional args. Compose body from commit line + diff block |
| `scripts/bump-versions.test.ts` | **NEW** — unit tests for `formatTemplateIdDiff` |
| `.github/workflows/autoupdate.yml` | Two new `cp` steps (before/after regen). Pass the snapshot paths as args 3 and 4 to `bump-versions.ts` |

## Edge cases

- **First post-merge run, no committed snapshot.** The `cp template-ids.txt /tmp/template-ids-before.txt` falls back to an empty file via `|| : > /tmp/template-ids-before.txt`. `formatTemplateIdDiff` then reports every ID as added. Mitigated by the one-time backfill commit landing as part of this change.
- **Identical sets** (regen happened for non-ID-changing upstream tweaks). Both sets equal → `formatTemplateIdDiff` returns `""`. Body = current behavior.
- **Massive churn** (event launches add hundreds). Emit full list. Long CHANGELOG entries are acceptable; defer `<details>` collapse until they become a pain point.
- **Local dev runs `bun run generate`.** `template-ids.txt` updates as a side effect and appears in `git status`. Treated the same as `dist/` regen — expected output, committed alongside the change that caused it.
- **`bump-versions.ts` invoked without the new positional args** (e.g., an old local script invocation). Validate argv length; print usage and exit 1 if either snapshot path is missing.
- **Generator crash mid-run leaves `template-ids.txt` stale.** Acceptable. The next successful regen overwrites it. Workflow only commits on a clean post-regen state because the existing diff check (`steps.diff.outputs.has_diff`) gates the PR creation step.

## Testing

- `scripts/bump-versions.test.ts`:
  - empty before + empty after → `""`
  - empty before + non-empty after → "Added" section with all IDs
  - non-empty before + empty after → "Removed" section with all IDs
  - both populated, disjoint → both sections
  - both populated, identical → `""`
  - both populated, overlapping with one add + one remove → both sections, one ID each
  - large delta (50+ each side) → sections render full lists in sort order

No end-to-end workflow test. The change is exercised on the next real autoupdate run after merge; failure mode is a malformed CHANGELOG entry, which is low-risk and trivially revertable.

## Migration / backfill

One-time commit at merge:

1. Run `bun run generate` locally to write the current `template-ids.txt`.
2. Commit alongside the source changes so the artifact lands with the workflow update.

Without this seed, the first post-merge autoupdate would diff against an empty file and list ~18,050 IDs as added in every package's CHANGELOG.

## Rollback

Revert the PR. `template-ids.txt` becomes untracked again (workflow no longer references it). Local copies remain on developer machines; harmless.

# Changelog template-ID diff — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Per-package CHANGELOG entries from the hourly autoupdate workflow enumerate template IDs added and removed in the regeneration.

**Architecture:** Generator writes sorted `template-ids.txt` artifact at repo root each run. Workflow snapshots the file before and after regen, passes both paths into `bump-versions.ts`, which diffs the sets and prepends a markdown section to the per-package changelog body.

**Tech Stack:** TypeScript on Bun, GitHub Actions YAML, `bun:test`.

**Spec:** [`docs/superpowers/specs/2026-05-17-changelog-template-id-diff-design.md`](../specs/2026-05-17-changelog-template-id-diff-design.md)

---

## Background for the implementer

This repo regenerates language-target packages (TS, Rust, Go + their `-api` variants and `rust-macros`) from a public game-master JSON on an hourly cron. Each run:

1. `detect-changes.ts` hashes every package directory.
2. `generate.ts` fetches the masterfile and runs the language-specific generators.
3. `detect-changes.ts` runs again.
4. `bump-versions.ts` diffs hashes, applies `bumpPatch` per changed package + cascade, rewrites manifests + lockfiles, prepends a CHANGELOG entry.
5. `peter-evans/create-pull-request@v8` opens an auto-merging PR.

Your work plugs into step 2 (write the snapshot) and step 4 (consume the snapshot to enrich the changelog body).

**Do NOT read** any of the large generated files listed in [CLAUDE.md](../../../CLAUDE.md) — they're huge and tokens-expensive.

---

## File map

| File | Status | Responsibility |
|---|---|---|
| `scripts/bump-versions.ts` | Modify | Add `formatTemplateIdDiff`. Accept 2 extra positional args. Compose body |
| `scripts/bump-versions.test.ts` | Create | Unit tests for `formatTemplateIdDiff` |
| `src/generate.ts` | Modify | After `fetchMasterfile()`, write sorted `template-ids.txt` to repo root |
| `template-ids.txt` | Create | One-time backfill commit. Sorted IDs, one per line, trailing newline |
| `.github/workflows/autoupdate.yml` | Modify | `cp` before/after the regen step. Append 2 args to bump-versions invocation |

`template-ids.json` (existing gitignored local artifact) is NOT touched. `.gitignore` is NOT modified.

---

## Task 1: Add `formatTemplateIdDiff` helper (TDD)

**Files:**
- Modify: `scripts/bump-versions.ts` (add new exported function near top of file, before `PACKAGES`)
- Create: `scripts/bump-versions.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `scripts/bump-versions.test.ts`:

```typescript
import { describe, expect, test } from "bun:test";
import { formatTemplateIdDiff } from "./bump-versions.ts";

describe("formatTemplateIdDiff", () => {
	test("empty before + empty after → empty string", () => {
		expect(formatTemplateIdDiff("", "")).toBe("");
	});

	test("identical non-empty sets → empty string", () => {
		const text = "FOO_1\nBAR_2\n";
		expect(formatTemplateIdDiff(text, text)).toBe("");
	});

	test("empty before + non-empty after → Added section only", () => {
		const before = "";
		const after = "BAR_2\nFOO_1\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (2)\n\n- BAR_2\n- FOO_1");
	});

	test("non-empty before + empty after → Removed section only", () => {
		const before = "BAR_2\nFOO_1\n";
		const after = "";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Removed template IDs (2)\n\n- BAR_2\n- FOO_1");
	});

	test("overlapping sets with one add + one remove → both sections", () => {
		const before = "BAR_2\nFOO_1\n";
		const after = "BAR_2\nBAZ_3\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (1)\n\n- BAZ_3\n\n### Removed template IDs (1)\n\n- FOO_1");
	});

	test("disjoint non-empty sets → both sections", () => {
		const before = "A\nB\n";
		const after = "C\nD\n";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (2)\n\n- C\n- D\n\n### Removed template IDs (2)\n\n- A\n- B");
	});

	test("output added/removed are sorted alphabetically regardless of input order", () => {
		const before = "ZZZ\n";
		const after = "BBB\nAAA\nCCC\n";
		const out = formatTemplateIdDiff(before, after);
		// Added: AAA, BBB, CCC (sorted). Removed: ZZZ.
		expect(out).toBe("\n\n### Added template IDs (3)\n\n- AAA\n- BBB\n- CCC\n\n### Removed template IDs (1)\n\n- ZZZ");
	});

	test("blank lines in input are ignored", () => {
		const before = "\n\nFOO\n\n";
		const after = "FOO\n";
		expect(formatTemplateIdDiff(before, after)).toBe("");
	});

	test("trailing newline absence doesn't break parsing", () => {
		const before = "A\nB";
		const after = "A\nB\nC";
		const out = formatTemplateIdDiff(before, after);
		expect(out).toBe("\n\n### Added template IDs (1)\n\n- C");
	});
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
bun test scripts/bump-versions.test.ts
```

Expected: all tests fail with `Cannot find name 'formatTemplateIdDiff'` or "is not exported".

- [ ] **Step 3: Implement `formatTemplateIdDiff` in `scripts/bump-versions.ts`**

Add this exported function near the top of `scripts/bump-versions.ts`, immediately after the imports and before the `PkgInfo` interface declaration:

```typescript
// Diffs two newline-separated template-ID lists and returns a markdown block
// suitable for prepending to a CHANGELOG entry body. Returns "" when the sets
// are identical (no section emitted). When non-empty, leads with "\n\n" so the
// caller can concatenate it directly onto the commit-sha sentence.
export function formatTemplateIdDiff(beforeText: string, afterText: string): string {
	const before = new Set(beforeText.split("\n").filter(Boolean));
	const after = new Set(afterText.split("\n").filter(Boolean));
	const added = [...after].filter((x) => !before.has(x)).sort();
	const removed = [...before].filter((x) => !after.has(x)).sort();

	const sections: string[] = [];
	if (added.length > 0) {
		sections.push(`### Added template IDs (${added.length})\n\n${added.map((x) => `- ${x}`).join("\n")}`);
	}
	if (removed.length > 0) {
		sections.push(`### Removed template IDs (${removed.length})\n\n${removed.map((x) => `- ${x}`).join("\n")}`);
	}
	return sections.length === 0 ? "" : `\n\n${sections.join("\n\n")}`;
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
bun test scripts/bump-versions.test.ts
```

Expected: all 9 tests pass.

- [ ] **Step 5: Run typecheck + lint**

```bash
bun run typecheck
bun run lint
```

Expected: both clean.

- [ ] **Step 6: Commit**

```bash
git add scripts/bump-versions.ts scripts/bump-versions.test.ts
git commit -m "feat(bump-versions): add formatTemplateIdDiff helper"
```

---

## Task 2: Wire `formatTemplateIdDiff` into `bump-versions.ts` main entrypoint

**Files:**
- Modify: `scripts/bump-versions.ts` (extend `main()` block at the bottom — currently `if (import.meta.main)`)

The current `main` block reads two positional args (before/after hash JSON) and calls `applyBumps(initial, "Automated regeneration from upstream masterfile commit \`${upstreamSha}\`.")`. Extend it to read two additional positional args (before/after template-id text files) and prepend the diff block to that body.

- [ ] **Step 1: Update the `main` block**

Locate the `if (import.meta.main) {` block at the bottom of `scripts/bump-versions.ts` (currently around line 196). Replace it with:

```typescript
if (import.meta.main) {
	const [beforePath, afterPath, beforeIdsPath, afterIdsPath] = process.argv.slice(2);
	if (!beforePath || !afterPath || !beforeIdsPath || !afterIdsPath) {
		console.error("Usage: bump-versions.ts <before.json> <after.json> <before-template-ids.txt> <after-template-ids.txt>");
		process.exit(1);
	}

	const upstreamSha = process.env.UPSTREAM_SHA ?? "unknown";
	const before = JSON.parse(readFileSync(beforePath, "utf8")) as Record<string, string>;
	const after = JSON.parse(readFileSync(afterPath, "utf8")) as Record<string, string>;

	const beforeIdsText = readFileSync(beforeIdsPath, "utf8");
	const afterIdsText = readFileSync(afterIdsPath, "utf8");

	const initial = new Set<string>();
	for (const p of PACKAGES) {
		if (before[p.path] !== after[p.path]) initial.add(p.path);
	}

	const body = `Automated regeneration from upstream masterfile commit \`${upstreamSha}\`.${formatTemplateIdDiff(beforeIdsText, afterIdsText)}`;
	const bumps = applyBumps(initial, body);
	if (Object.keys(bumps).length === 0) {
		console.log("No effective package changes after canonical hashing.");
	}
}
```

- [ ] **Step 2: Smoke-test locally**

Create two throwaway snapshot files and invoke the script with stub hash inputs that produce no bumps (so it doesn't mutate the working tree). The point is to confirm argv parsing accepts the new args without throwing.

```bash
echo '{}' > /tmp/before-stub.json
echo '{}' > /tmp/after-stub.json
echo 'FOO' > /tmp/ids-before-stub.txt
echo 'FOO\nBAR' > /tmp/ids-after-stub.txt
UPSTREAM_SHA=test bun run scripts/bump-versions.ts /tmp/before-stub.json /tmp/after-stub.json /tmp/ids-before-stub.txt /tmp/ids-after-stub.txt
```

Expected output: `No effective package changes after canonical hashing.` (No diff to manifests/changelogs because `before` and `after` hash maps are both `{}`.)

Confirm `git status` is clean (no working-tree mutations):

```bash
git status --porcelain
```

Expected: no output.

- [ ] **Step 3: Run typecheck + tests + lint**

```bash
bun run typecheck
bun test
bun run lint
```

Expected: all clean.

- [ ] **Step 4: Commit**

```bash
git add scripts/bump-versions.ts
git commit -m "feat(bump-versions): accept template-id snapshot paths and emit diff block"
```

---

## Task 3: Write `template-ids.txt` from the generator

**Files:**
- Modify: `src/generate.ts` (extend `main()` after `fetchMasterfile()`)

- [ ] **Step 1: Add the writer**

Open `src/generate.ts`. At the top, add a new `node:fs` import line ABOVE all the existing relative imports (biome's `organizeImports` groups `node:` built-ins first, then relative imports — putting the new line before `import { GAME_MASTER_URL } from "./constants.ts";` matches that order, so `bun run lint` stays green).

```typescript
import { writeFileSync } from "node:fs";
```

Then in `main()`, immediately after the line `console.log(\`Fetched ${entries.length} entries.\`);` (currently line 104), insert the snapshot write:

Inside `main()`, after `console.log(\`Fetched ${entries.length} entries.\`);`:

```typescript
	// Snapshot template IDs to a tracked artifact so the autoupdate workflow can
	// diff this run against the prior commit and surface added/removed IDs in
	// each package's CHANGELOG entry. Sort + one-per-line + trailing newline so
	// git diffs read cleanly.
	const sortedIds = entries.map((e) => e.templateId).sort();
	writeFileSync("template-ids.txt", `${sortedIds.join("\n")}\n`);
	console.log(`Wrote template-ids.txt with ${sortedIds.length} ids.`);
```

- [ ] **Step 2: Verify Entry shape**

Confirm `Entry` exposes a `templateId` field. From `src/group.ts`:

```bash
grep -n "templateId" src/group.ts | head -3
```

Expected: a line like `templateId: string;` inside the `Entry` interface. If the field is named differently (e.g. `template_id`), update the `.map((e) => e.templateId)` call to match.

- [ ] **Step 3: Run the generator end-to-end**

```bash
bun run generate
```

Expected:
- `Wrote template-ids.txt with <N> ids.` appears in console output.
- `template-ids.txt` exists at repo root.
- File is sorted, one ID per line, ends in `\n`.

Verify shape:

```bash
wc -l template-ids.txt
head -5 template-ids.txt
tail -5 template-ids.txt
```

Expected: line count matches the "Fetched N entries" log. First 5 lines are alphabetically before last 5 lines.

- [ ] **Step 4: Run typecheck + tests + lint**

```bash
bun run typecheck
bun test
bun run lint
```

Expected: all clean. (The generator's own tests don't cover the snapshot file directly; sanity-checking the full suite still passes is enough.)

- [ ] **Step 5: Commit (source change only — backfill happens in Task 4)**

`bun run generate` from Step 3 also regenerated dist/Rust/Go sources. Stage ONLY the generator source change for this commit; the regen output goes in Task 4 alongside the backfill.

```bash
git add src/generate.ts
git commit -m "feat(generate): write template-ids.txt snapshot artifact"
```

---

## Task 4: Backfill `template-ids.txt` (one-time)

**Files:**
- Create (commit): `template-ids.txt` (already written to disk by Task 3, Step 3)

Without this seed, the first post-merge autoupdate diffs an empty file and lists ~18,050 IDs as added in every package's CHANGELOG.

- [ ] **Step 1: Confirm the file is present and non-empty**

```bash
ls -la template-ids.txt
wc -l template-ids.txt
```

Expected: file exists, line count ≈ 18,000 (current upstream).

- [ ] **Step 2: Format the repo**

Per [CLAUDE.md](../../../CLAUDE.md), always run `bun run format` before any commit.

```bash
bun run format
```

Expected: command exits 0. `template-ids.txt` is plain text with no formatter rules — should be untouched. Any other working-tree noise from the earlier `bun run generate` (e.g. regenerated dist files) gets normalized here.

- [ ] **Step 3: Inspect what's about to be committed**

```bash
git status
git diff --stat
```

Expected: `template-ids.txt` listed as new. Any regenerated dist/ packages/ files from Task 3's `bun run generate` also listed — they're legitimate regen output and should ride along on this commit so the tracked artifacts stay in sync.

If `git status` shows untracked files OTHER than `template-ids.txt` (e.g., a stray `masterfile.json` or `template-ids.json` that wasn't there before), confirm those are gitignored and leave them alone.

- [ ] **Step 4: Stage and commit**

```bash
git add template-ids.txt
git add -u  # picks up any regenerated tracked files (dist, etc.)
git commit -m "chore: backfill template-ids.txt snapshot from current upstream"
```

---

## Task 5: Update autoupdate workflow

**Files:**
- Modify: `.github/workflows/autoupdate.yml` (lines ~57–73)

The current workflow runs `detect-changes.ts` twice (steps "Compute baseline hashes" and "Compute post-regen hashes") and then calls `bump-versions.ts` with the two hash JSON paths. Add two new `cp` steps that mirror the hash-snapshot pattern, and extend the `bump-versions.ts` invocation with the two new arg positions.

- [ ] **Step 1: Open `.github/workflows/autoupdate.yml`**

Locate this stretch (currently lines 57–73):

```yaml
      - name: Compute baseline hashes
        if: steps.upstream.outputs.changed == 'true'
        run: bun run scripts/detect-changes.ts > /tmp/before.json

      - name: Regenerate
        if: steps.upstream.outputs.changed == 'true'
        run: bun run generate

      - name: Compute post-regen hashes
        if: steps.upstream.outputs.changed == 'true'
        run: bun run scripts/detect-changes.ts > /tmp/after.json

      - name: Bump versions for changed packages
        if: steps.upstream.outputs.changed == 'true'
        env:
          UPSTREAM_SHA: ${{ steps.upstream.outputs.new_sha }}
        run: bun run scripts/bump-versions.ts /tmp/before.json /tmp/after.json
```

- [ ] **Step 2: Replace with the snapshot-aware version**

```yaml
      - name: Compute baseline hashes
        if: steps.upstream.outputs.changed == 'true'
        run: bun run scripts/detect-changes.ts > /tmp/before.json

      - name: Snapshot template IDs (before regen)
        if: steps.upstream.outputs.changed == 'true'
        # Falls back to an empty file on the (one-time) case where template-ids.txt
        # hasn't been committed yet. After the backfill lands, the cp always succeeds.
        run: cp template-ids.txt /tmp/template-ids-before.txt 2>/dev/null || : > /tmp/template-ids-before.txt

      - name: Regenerate
        if: steps.upstream.outputs.changed == 'true'
        run: bun run generate

      - name: Compute post-regen hashes
        if: steps.upstream.outputs.changed == 'true'
        run: bun run scripts/detect-changes.ts > /tmp/after.json

      - name: Snapshot template IDs (after regen)
        if: steps.upstream.outputs.changed == 'true'
        run: cp template-ids.txt /tmp/template-ids-after.txt

      - name: Bump versions for changed packages
        if: steps.upstream.outputs.changed == 'true'
        env:
          UPSTREAM_SHA: ${{ steps.upstream.outputs.new_sha }}
        run: bun run scripts/bump-versions.ts /tmp/before.json /tmp/after.json /tmp/template-ids-before.txt /tmp/template-ids-after.txt
```

- [ ] **Step 3: Validate YAML syntax**

```bash
bun x --bun yaml-lint .github/workflows/autoupdate.yml 2>/dev/null || python3 -c "import yaml; yaml.safe_load(open('.github/workflows/autoupdate.yml'))"
```

Expected: exits 0 (no syntax errors). If neither tool is available locally, visually inspect the indentation — each `- name:` step must be at the same indent as siblings, and `run:` must sit one level deeper.

- [ ] **Step 4: Format**

```bash
bun run format
```

Expected: exits 0. No working-tree changes to YAML (biome doesn't touch workflow files).

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/autoupdate.yml
git commit -m "ci(autoupdate): snapshot template-ids.txt before/after regen and pass to bump-versions"
```

---

## Task 6: End-to-end dry run

Simulate the workflow locally to confirm the full chain produces a sensible CHANGELOG entry.

- [ ] **Step 1: Capture a synthetic "before" snapshot**

```bash
cp template-ids.txt /tmp/synthetic-before.txt
```

- [ ] **Step 2: Remove one ID and add one fake ID for the "after" snapshot**

```bash
# Strip the first ID, append a fake one, re-sort.
{ tail -n +2 template-ids.txt; echo "ZZZZ_FAKE_TEST_ID"; } | sort > /tmp/synthetic-after.txt
diff /tmp/synthetic-before.txt /tmp/synthetic-after.txt | head
```

Expected: `diff` shows one removed ID (the alphabetically-first one) and one added (`ZZZZ_FAKE_TEST_ID`).

- [ ] **Step 3: Build stub hash inputs that force a fake bump on one package**

Read `.versions.json` so you know the current ts version. Then construct hash maps that differ on `packages/ts` only:

```bash
cat .versions.json
echo '{"packages/ts":"AAA","packages/ts-api":"x","packages/rust":"x","packages/rust-api":"x","packages/rust-macros":"x","packages/go":"x","packages/go-api":"x"}' > /tmp/dry-before.json
echo '{"packages/ts":"BBB","packages/ts-api":"x","packages/rust":"x","packages/rust-api":"x","packages/rust-macros":"x","packages/go":"x","packages/go-api":"x"}' > /tmp/dry-after.json
```

- [ ] **Step 4: Invoke `bump-versions.ts` with the dry-run inputs**

```bash
UPSTREAM_SHA=dryrunsha bun run scripts/bump-versions.ts /tmp/dry-before.json /tmp/dry-after.json /tmp/synthetic-before.txt /tmp/synthetic-after.txt
```

Expected: console logs show `packages/ts: <version>` and `packages/ts-api: <version>` (ts-api cascades from ts). Other packages untouched. Lockfile sync runs.

- [ ] **Step 5: Inspect the generated CHANGELOG entry**

```bash
head -15 packages/ts/CHANGELOG.md
```

Expected: top entry has the form

```markdown
## [<new-version>] - <today>

Automated regeneration from upstream masterfile commit `dryrunsha`.

### Added template IDs (1)

- ZZZZ_FAKE_TEST_ID

### Removed template IDs (1)

- <whatever was alphabetically first in template-ids.txt>
```

- [ ] **Step 6: Roll back the dry-run mutations**

The dry run mutated `.versions.json`, `packages/ts/package.json`, `packages/ts-api/package.json`, `packages/ts/CHANGELOG.md`, `packages/ts-api/CHANGELOG.md`, and `bun.lock`. Discard them — they were synthetic test data, not a real regeneration.

```bash
git checkout -- .versions.json packages/ts/package.json packages/ts-api/package.json packages/ts/CHANGELOG.md packages/ts-api/CHANGELOG.md bun.lock
git status
```

Expected: working tree clean (no committed changes left over from the dry run). If `git status` shows other unexpected files, investigate before discarding — do NOT blanket `git checkout .`.

- [ ] **Step 7: No commit for this task**

Task 6 is verification-only. Nothing to commit.

---

## Final verification

- [ ] **Run the full test suite**

```bash
bun test
```

Expected: all green, including the 9 new `formatTemplateIdDiff` tests.

- [ ] **Run typecheck**

```bash
bun run typecheck
```

Expected: clean.

- [ ] **Run lint**

```bash
bun run lint
```

Expected: clean.

- [ ] **Confirm `git status` is clean**

```bash
git status --porcelain
```

Expected: empty.

- [ ] **Inspect the commit list for this feature**

```bash
git log --oneline main..HEAD
```

Expected (in order, oldest first):

1. `feat(bump-versions): add formatTemplateIdDiff helper`
2. `feat(bump-versions): accept template-id snapshot paths and emit diff block`
3. `feat(generate): write template-ids.txt snapshot artifact`
4. `chore: backfill template-ids.txt snapshot from current upstream`
5. `ci(autoupdate): snapshot template-ids.txt before/after regen and pass to bump-versions`

Report status to the user with the commit list. Mention that the first real autoupdate-merged PR after merge will produce the first ID-diffed CHANGELOG entry — there's no way to simulate that fully in this environment.

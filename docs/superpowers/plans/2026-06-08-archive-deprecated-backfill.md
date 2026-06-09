# Archive Deprecated Backfill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crawl the full PokeMiners `game_master` archive (2021-06 → 2026-04) and recover legacy template ids the one-time bootstrap missed, then optionally merge them into the existing deprecated emission.

**Architecture:** A dry-run-first CLI under `scripts/template-history/`. Pure, unit-tested helpers (date parse, discriminator extraction, seen-accumulation, classify, merge, report) in `backfill-lib.ts`; thin file I/O in `backfill-io.ts`; orchestration in `backfill-from-archive.ts`. The deprecated.d.ts → `DeprecatedSet` parser is factored out of `src/update-deprecated.ts` into `src/deprecated/parse-source.ts` so the steady-state path and the backfill share one parser. Re-emission reuses the existing `emitTypescript`/`emitRust`/`emitGo`.

**Tech Stack:** Bun, TypeScript, `bun:test`. Reuses `src/deprecated/{types,emit-*}.ts` and `src/group.ts`.

---

## File Structure

- **Create** `src/deprecated/parse-source.ts` — `parseDeprecatedSource(source: string): DeprecatedSet`. Factored from `update-deprecated.ts`.
- **Create** `src/deprecated/parse-source.test.ts` — unit test for the parser.
- **Modify** `src/update-deprecated.ts` — `parseCurrentDeprecated` calls the factored parser.
- **Create** `scripts/template-history/backfill-lib.ts` — pure helpers + types (no fs).
- **Create** `scripts/template-history/backfill-lib.test.ts` — unit tests for every pure helper.
- **Create** `scripts/template-history/backfill-io.ts` — `crawlArchive`, `readLiveSet`, `readCurrentDeprecated` (fs).
- **Create** `scripts/template-history/backfill-io.test.ts` — fixture-based tests using a temp dir.
- **Create** `scripts/template-history/backfill-from-archive.ts` — CLI entry point.

Reference signatures (already in the repo — do not change):
- `DeprecatedDiscriminator { discriminator: string; templateIds: Set<string>; lastSeen: string; entryCount: number }`, `DeprecatedSet = Map<string, DeprecatedDiscriminator>` — `src/deprecated/types.ts`.
- `emitTypescript(set: DeprecatedSet): string`, `emitRust(set): string`, `emitGo(set): string` — `src/deprecated/`.
- `Entry { templateId: string; data: Record<string, unknown> }` — `src/group.ts`.
- `groupName(disc) = disc[0].toUpperCase() + disc.slice(1)` — `src/naming.ts` (handles `_marker` → `_marker`).

Convention notes (locked by the spec):
- **Discriminator rule mirrors the deleted bootstrap, NOT live `group.ts`:** single non-`templateId` key, else `"_marker"` for stub (0-key) entries. (Live `group.ts` buckets stubs under their own templateId; the deprecated emission uses `_marker`, e.g. the existing `Deprecated_markerIds`.)
- **`lastSeen` = max ISO date** a templateId appears in any snapshot. ISO `YYYY-MM-DD` compares correctly with `<`/`>`.
- **Merge is non-destructive:** union ids into a clone; backfill dates (2021–2024) are older than every steady-state date (≥2024-11) so existing records never regress.

---

### Task 1: Factor `parseDeprecatedSource` out of `update-deprecated.ts`

**Files:**
- Create: `src/deprecated/parse-source.ts`
- Test: `src/deprecated/parse-source.test.ts`
- Modify: `src/update-deprecated.ts` (`parseCurrentDeprecated`, lines ~130-168, + import)

- [ ] **Step 1: Write the failing test**

`src/deprecated/parse-source.test.ts`:
```ts
import { describe, expect, test } from "bun:test";
import { parseDeprecatedSource } from "./parse-source";

const SAMPLE = `// Generated — deprecated masterfile types. DO NOT EDIT BY HAND.
export type * from "./entries";
export type * from "./types";

/** @deprecated lastSeen 2025-06-06 — 2 entries */
type Deprecated_markerIds = "EGG_RARITY_FORM_ROLL_BACK" | "HOME_WIDGET_SETTINGS";

/** @deprecated lastSeen 2024-11-11 — 3 entries */
type DeprecatedBadgeSettingsIds =
\t| "BADGE_A"
\t| "BADGE_B"
\t| "BADGE_C";
`;

describe("parseDeprecatedSource", () => {
	test("parses discriminators, ids, lastSeen", () => {
		const set = parseDeprecatedSource(SAMPLE);
		expect(set.size).toBe(2);
		expect(set.get("_marker")?.templateIds).toEqual(new Set(["EGG_RARITY_FORM_ROLL_BACK", "HOME_WIDGET_SETTINGS"]));
		expect(set.get("_marker")?.lastSeen).toBe("2025-06-06");
		expect(set.get("badgeSettings")?.templateIds.size).toBe(3);
		expect(set.get("badgeSettings")?.lastSeen).toBe("2024-11-11");
		expect(set.get("badgeSettings")?.entryCount).toBe(3);
	});

	test("empty source → empty set", () => {
		expect(parseDeprecatedSource("").size).toBe(0);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/deprecated/parse-source.test.ts`
Expected: FAIL — `Cannot find module './parse-source'`.

- [ ] **Step 3: Create `src/deprecated/parse-source.ts`**

```ts
import type { DeprecatedSet } from "./types";

/**
 * Parse a deprecated.d.ts emission (generated source text) into a DeprecatedSet.
 * Handles the current format (JSDoc above `type Deprecated<Pascal>Ids =`) and the
 * pre-migration legacy format (JSDoc above `export type Deprecated<Pascal><...`).
 *
 * Shared by src/update-deprecated.ts (reads HEAD via git) and the archive
 * backfill script (reads the working tree) so both agree on the parse.
 */
export function parseDeprecatedSource(source: string): DeprecatedSet {
	const set: DeprecatedSet = new Map();

	const blockRe =
		/\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\s*\ntype Deprecated([A-Za-z_][A-Za-z0-9_]*)Ids =/g;
	const legacyBlockRe =
		/\/\*\* @deprecated lastSeen (\d{4}-\d{2}-\d{2}) — (\d+) entries \*\/\s*\nexport type Deprecated([A-Za-z_][A-Za-z0-9_]*)</g;

	const idsRe = /type Deprecated([A-Za-z_][A-Za-z0-9_]*)Ids\s*=\s*([\s\S]+?);/g;
	const idMap = new Map<string, string[]>();
	for (const m of source.matchAll(idsRe)) {
		const Pascal = m[1]!;
		const literals = [...m[2]!.matchAll(/"([^"]+)"/g)].map((mm) => mm[1]!);
		idMap.set(Pascal, literals);
	}

	const seen = new Set<string>();
	const applyMatch = (lastSeen: string, entryCount: number, Pascal: string) => {
		if (seen.has(Pascal)) return;
		seen.add(Pascal);
		const discriminator = Pascal.charAt(0).toLowerCase() + Pascal.slice(1);
		const ids = idMap.get(Pascal) ?? [];
		set.set(discriminator, { discriminator, templateIds: new Set(ids), lastSeen, entryCount });
	};

	for (const m of source.matchAll(blockRe)) applyMatch(m[1]!, Number(m[2]!), m[3]!);
	for (const m of source.matchAll(legacyBlockRe)) applyMatch(m[1]!, Number(m[2]!), m[3]!);

	return set;
}
```

> NOTE: the `—` in the regexes is an em dash (U+2014), matching the emitter's JSDoc. Copy it verbatim.

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/deprecated/parse-source.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Rewire `update-deprecated.ts` to use it**

Add the import near the other `./deprecated/*` imports at the top of `src/update-deprecated.ts`:
```ts
import { parseDeprecatedSource } from "./deprecated/parse-source";
```

Replace the entire body of `parseCurrentDeprecated` (currently lines ~130-168) with:
```ts
function parseCurrentDeprecated(): DeprecatedSet {
	// Read from git HEAD because src/generate.ts wipes the dist/ directory before
	// update-deprecated.ts runs. The working-tree file no longer exists at this point.
	const source = gitShow("HEAD", "packages/ts/dist/deprecated.d.ts");
	if (!source) return new Map();
	return parseDeprecatedSource(source);
}
```

- [ ] **Step 6: Run the affected tests**

Run: `bun test src/update-deprecated.test.ts src/deprecated/parse-source.test.ts`
Expected: PASS (existing `applyDiff` tests + new parser tests).

- [ ] **Step 7: Commit**

```bash
git add src/deprecated/parse-source.ts src/deprecated/parse-source.test.ts src/update-deprecated.ts
git commit -m "refactor(deprecated): factor parseDeprecatedSource for reuse"
```

---

### Task 2: Pure helpers — `parseSnapshotDate` + `discriminatorOf`

**Files:**
- Create: `scripts/template-history/backfill-lib.ts`
- Test: `scripts/template-history/backfill-lib.test.ts`

- [ ] **Step 1: Write the failing test**

`scripts/template-history/backfill-lib.test.ts`:
```ts
import { describe, expect, test } from "bun:test";
import { discriminatorOf, parseSnapshotDate } from "./backfill-lib";

describe("parseSnapshotDate", () => {
	test("extracts ISO date from snapshot folder name", () => {
		expect(parseSnapshotDate("gm_v2_apk0327_2024.09.04-10.44.08")).toBe("2024-09-04");
		expect(parseSnapshotDate("gm_vNULL_apk2090_2021.06.03-15.45.17")).toBe("2021-06-03");
	});
	test("throws on unparseable name", () => {
		expect(() => parseSnapshotDate("garbage")).toThrow();
	});
});

describe("discriminatorOf", () => {
	test("single non-templateId key", () => {
		expect(discriminatorOf({ templateId: "X", pokemonSettings: {} })).toBe("pokemonSettings");
	});
	test("stub entry (no inner key) → _marker", () => {
		expect(discriminatorOf({ templateId: "HOME_WIDGET_SETTINGS" })).toBe("_marker");
	});
	test(">=2 keys → deterministic sorted-first fallback", () => {
		expect(discriminatorOf({ templateId: "X", zeta: {}, alpha: {} })).toBe("alpha");
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: FAIL — `Cannot find module './backfill-lib'`.

- [ ] **Step 3: Create `scripts/template-history/backfill-lib.ts` with these two helpers + types**

```ts
import type { Entry } from "../../src/group";
import type { DeprecatedSet } from "../../src/deprecated/types";

/** One template id observed in the archive: its discriminator + most-recent date. */
export interface SeenEntry {
	discriminator: string;
	/** ISO YYYY-MM-DD of the most recent snapshot the id appeared in. */
	lastSeen: string;
}

/** Parse the ISO date out of a snapshot folder name like `gm_v2_apk0327_2024.09.04-10.44.08`. */
export function parseSnapshotDate(folderName: string): string {
	const m = folderName.match(/_(\d{4})\.(\d{2})\.(\d{2})-\d{2}\.\d{2}\.\d{2}$/);
	if (!m) throw new Error(`Cannot parse date from snapshot folder name: "${folderName}"`);
	return `${m[1]}-${m[2]}-${m[3]}`;
}

/**
 * Discriminator for an entry's `data`, matching the deleted bootstrap's rule
 * (NOT live group.ts): the single non-templateId key, or "_marker" for a stub
 * entry with no inner key (so stubs merge with the existing Deprecated_markerIds
 * record). A malformed entry with >=2 keys (shouldn't occur) falls back to the
 * sorted-first key for determinism.
 */
export function discriminatorOf(data: Record<string, unknown>): string {
	const keys = Object.keys(data).filter((k) => k !== "templateId");
	if (keys.length === 0) return "_marker";
	if (keys.length === 1) return keys[0]!;
	return [...keys].sort()[0]!;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-lib.ts scripts/template-history/backfill-lib.test.ts
git commit -m "feat(backfill): add snapshot-date + discriminator helpers"
```

---

### Task 3: `accumulateSeen`

**Files:**
- Modify: `scripts/template-history/backfill-lib.ts`
- Test: `scripts/template-history/backfill-lib.test.ts`

- [ ] **Step 1: Write the failing test (append to the test file)**

```ts
import { accumulateSeen } from "./backfill-lib";

describe("accumulateSeen", () => {
	test("keeps discriminator + date from the most recent appearance", () => {
		const seen = new Map();
		// older snapshot first
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", oldDisc: {} } }], "2021-06-03");
		// newer snapshot: same id, different shape
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", newDisc: {} } }], "2023-08-30");
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
	});

	test("order-independent: newer processed before older still keeps newer", () => {
		const seen = new Map();
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", newDisc: {} } }], "2023-08-30");
		accumulateSeen(seen, [{ templateId: "A", data: { templateId: "A", oldDisc: {} } }], "2021-06-03");
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: FAIL — `accumulateSeen is not a function` / import error.

- [ ] **Step 3: Add `accumulateSeen` to `backfill-lib.ts`**

```ts
/**
 * Fold one snapshot's entries into the running seen-map. Per templateId, keeps
 * the discriminator + date from its MOST RECENT appearance (max ISO date wins).
 * Order-independent across snapshots.
 */
export function accumulateSeen(seen: Map<string, SeenEntry>, entries: Entry[], date: string): void {
	for (const e of entries) {
		const prev = seen.get(e.templateId);
		if (!prev || date > prev.lastSeen) {
			seen.set(e.templateId, { discriminator: discriminatorOf(e.data), lastSeen: date });
		}
	}
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: PASS (all prior + 2 new).

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-lib.ts scripts/template-history/backfill-lib.test.ts
git commit -m "feat(backfill): add accumulateSeen (max-date, latest-shape)"
```

---

### Task 4: `classifyLegacy` + `isShadowPurified`

**Files:**
- Modify: `scripts/template-history/backfill-lib.ts`
- Test: `scripts/template-history/backfill-lib.test.ts`

- [ ] **Step 1: Write the failing test (append)**

```ts
import { classifyLegacy, isShadowPurified } from "./backfill-lib";

describe("classifyLegacy", () => {
	test("legacy = seen − live − alreadyDeprecated", () => {
		const seen = new Map([
			["LIVE_ID", { discriminator: "a", lastSeen: "2024-01-01" }],
			["DEP_ID", { discriminator: "b", lastSeen: "2023-01-01" }],
			["LEGACY_ID", { discriminator: "c", lastSeen: "2021-06-03" }],
		]);
		const legacy = classifyLegacy({
			seen,
			live: new Set(["LIVE_ID"]),
			alreadyDeprecated: new Set(["DEP_ID"]),
		});
		expect([...legacy.keys()]).toEqual(["LEGACY_ID"]);
		expect(legacy.get("LEGACY_ID")?.discriminator).toBe("c");
	});
});

describe("isShadowPurified", () => {
	test("matches the standalone shadow/purified pokemon family", () => {
		expect(isShadowPurified("V0001_POKEMON_BULBASAUR_SHADOW")).toBe(true);
		expect(isShadowPurified("SPAWN_V0001_POKEMON_BULBASAUR_PURIFIED")).toBe(true);
		expect(isShadowPurified("V0001_POKEMON_BULBASAUR")).toBe(false);
		expect(isShadowPurified("EX_RAID_SETTINGS")).toBe(false);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: FAIL — import error for the new exports.

- [ ] **Step 3: Add both functions to `backfill-lib.ts`**

```ts
export interface ClassifyInput {
	seen: Map<string, SeenEntry>;
	live: Set<string>;
	alreadyDeprecated: Set<string>;
}

/** legacy = seen − live − alreadyDeprecated. */
export function classifyLegacy(input: ClassifyInput): Map<string, SeenEntry> {
	const legacy = new Map<string, SeenEntry>();
	for (const [id, info] of input.seen) {
		if (input.live.has(id)) continue;
		if (input.alreadyDeprecated.has(id)) continue;
		legacy.set(id, info);
	}
	return legacy;
}

/** True for the standalone shadow/purified pokemon family (the dominant 2021 bucket). */
export function isShadowPurified(id: string): boolean {
	return /_(SHADOW|PURIFIED)$/.test(id);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-lib.ts scripts/template-history/backfill-lib.test.ts
git commit -m "feat(backfill): add classifyLegacy + isShadowPurified"
```

---

### Task 5: `mergeBackfill`

**Files:**
- Modify: `scripts/template-history/backfill-lib.ts`
- Test: `scripts/template-history/backfill-lib.test.ts`

- [ ] **Step 1: Write the failing test (append)**

```ts
import { mergeBackfill } from "./backfill-lib";
import type { DeprecatedSet } from "../../src/deprecated/types";

describe("mergeBackfill", () => {
	test("adds a brand-new discriminator with max lastSeen of its ids", () => {
		const out = mergeBackfill(new Map(), new Map([
			["EX_RAID_SETTINGS", { discriminator: "exRaidSettings", lastSeen: "2023-08-30" }],
			["EX_RAID_OTHER", { discriminator: "exRaidSettings", lastSeen: "2022-01-01" }],
		]));
		expect(out.get("exRaidSettings")?.templateIds).toEqual(new Set(["EX_RAID_SETTINGS", "EX_RAID_OTHER"]));
		expect(out.get("exRaidSettings")?.entryCount).toBe(2);
		expect(out.get("exRaidSettings")?.lastSeen).toBe("2023-08-30");
	});

	test("merges into an existing record without regressing a newer lastSeen", () => {
		const current: DeprecatedSet = new Map([
			["badgeSettings", { discriminator: "badgeSettings", templateIds: new Set(["BADGE_NEW"]), lastSeen: "2025-02-03", entryCount: 1 }],
		]);
		const out = mergeBackfill(current, new Map([
			["BADGE_EVENT_0008", { discriminator: "badgeSettings", lastSeen: "2022-09-22" }],
		]));
		expect(out.get("badgeSettings")?.templateIds).toEqual(new Set(["BADGE_NEW", "BADGE_EVENT_0008"]));
		expect(out.get("badgeSettings")?.entryCount).toBe(2);
		expect(out.get("badgeSettings")?.lastSeen).toBe("2025-02-03"); // unchanged: backfill date is older
	});

	test("does not mutate the input set", () => {
		const current: DeprecatedSet = new Map([
			["x", { discriminator: "x", templateIds: new Set(["A"]), lastSeen: "2025-01-01", entryCount: 1 }],
		]);
		mergeBackfill(current, new Map([["B", { discriminator: "x", lastSeen: "2021-01-01" }]]));
		expect(current.get("x")?.templateIds).toEqual(new Set(["A"])); // original untouched
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: FAIL — import error.

- [ ] **Step 3: Add `mergeBackfill` to `backfill-lib.ts`**

```ts
/**
 * Non-destructive merge of legacy ids into a clone of `current`. Unions ids into
 * existing discriminator records (creating new ones as needed) and bumps each
 * record's lastSeen to the max ISO date among its ids. Backfill dates are older
 * than steady-state dates, so existing records' lastSeen never regress.
 */
export function mergeBackfill(current: DeprecatedSet, legacy: Map<string, SeenEntry>): DeprecatedSet {
	const next: DeprecatedSet = new Map();
	for (const [k, v] of current) {
		next.set(k, { discriminator: v.discriminator, templateIds: new Set(v.templateIds), lastSeen: v.lastSeen, entryCount: v.entryCount });
	}
	for (const [id, info] of legacy) {
		let rec = next.get(info.discriminator);
		if (!rec) {
			rec = { discriminator: info.discriminator, templateIds: new Set(), lastSeen: info.lastSeen, entryCount: 0 };
			next.set(info.discriminator, rec);
		}
		rec.templateIds.add(id);
		rec.entryCount = rec.templateIds.size;
		if (info.lastSeen > rec.lastSeen) rec.lastSeen = info.lastSeen;
	}
	return next;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-lib.ts scripts/template-history/backfill-lib.test.ts
git commit -m "feat(backfill): add non-destructive mergeBackfill"
```

---

### Task 6: `buildReport`

**Files:**
- Modify: `scripts/template-history/backfill-lib.ts`
- Test: `scripts/template-history/backfill-lib.test.ts`

- [ ] **Step 1: Write the failing test (append)**

```ts
import { buildReport } from "./backfill-lib";

describe("buildReport", () => {
	test("groups by discriminator, flags new vs existing, counts shadow/purified, sorts by count", () => {
		const legacy = new Map([
			["V0001_POKEMON_BULBASAUR_SHADOW", { discriminator: "pokemonSettings", lastSeen: "2021-06-03" }],
			["V0002_POKEMON_IVYSAUR_SHADOW", { discriminator: "pokemonSettings", lastSeen: "2021-11-03" }],
			["EX_RAID_SETTINGS", { discriminator: "exRaidSettings", lastSeen: "2023-08-30" }],
		]);
		const current = new Map([
			["pokemonSettings", { discriminator: "pokemonSettings", templateIds: new Set(["LIVE"]), lastSeen: "2025-01-01", entryCount: 1 }],
		]);
		const report = buildReport(legacy, current);

		expect(report.totalLegacy).toBe(3);
		expect(report.discriminatorCount).toBe(2);
		expect(report.newDiscriminators).toBe(1); // exRaidSettings new; pokemonSettings exists
		expect(report.shadowPurifiedCount).toBe(2);
		// sorted by count desc → pokemonSettings (2) first
		expect(report.byDiscriminator[0]?.discriminator).toBe("pokemonSettings");
		expect(report.byDiscriminator[0]?.count).toBe(2);
		expect(report.byDiscriminator[0]?.isNew).toBe(false);
		expect(report.byDiscriminator[0]?.firstSeen).toBe("2021-06-03");
		expect(report.byDiscriminator[0]?.lastSeen).toBe("2021-11-03");
		expect(report.byDiscriminator[1]?.discriminator).toBe("exRaidSettings");
		expect(report.byDiscriminator[1]?.isNew).toBe(true);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: FAIL — import error.

- [ ] **Step 3: Add report types + `buildReport` to `backfill-lib.ts`**

```ts
export interface DiscriminatorReport {
	discriminator: string;
	count: number;
	firstSeen: string;
	lastSeen: string;
	isNew: boolean;
	sampleIds: string[];
}

export interface BackfillReport {
	totalLegacy: number;
	discriminatorCount: number;
	newDiscriminators: number;
	shadowPurifiedCount: number;
	byDiscriminator: DiscriminatorReport[];
}

/** Build the dry-run report. Pure: groups legacy ids by discriminator. */
export function buildReport(legacy: Map<string, SeenEntry>, current: DeprecatedSet): BackfillReport {
	const byDisc = new Map<string, { ids: string[]; min: string; max: string }>();
	let shadowPurifiedCount = 0;
	for (const [id, info] of legacy) {
		if (isShadowPurified(id)) shadowPurifiedCount++;
		let g = byDisc.get(info.discriminator);
		if (!g) {
			g = { ids: [], min: info.lastSeen, max: info.lastSeen };
			byDisc.set(info.discriminator, g);
		}
		g.ids.push(id);
		if (info.lastSeen < g.min) g.min = info.lastSeen;
		if (info.lastSeen > g.max) g.max = info.lastSeen;
	}

	const reports: DiscriminatorReport[] = [];
	let newDiscriminators = 0;
	for (const [disc, g] of byDisc) {
		const isNew = !current.has(disc);
		if (isNew) newDiscriminators++;
		reports.push({
			discriminator: disc,
			count: g.ids.length,
			firstSeen: g.min,
			lastSeen: g.max,
			isNew,
			sampleIds: [...g.ids].sort().slice(0, 5),
		});
	}
	reports.sort((a, b) => b.count - a.count || a.discriminator.localeCompare(b.discriminator));

	return {
		totalLegacy: legacy.size,
		discriminatorCount: reports.length,
		newDiscriminators,
		shadowPurifiedCount,
		byDiscriminator: reports,
	};
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-lib.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-lib.ts scripts/template-history/backfill-lib.test.ts
git commit -m "feat(backfill): add buildReport"
```

---

### Task 7: File I/O — `crawlArchive`, `readLiveSet`, `readCurrentDeprecated`

**Files:**
- Create: `scripts/template-history/backfill-io.ts`
- Test: `scripts/template-history/backfill-io.test.ts`

- [ ] **Step 1: Write the failing test**

`scripts/template-history/backfill-io.test.ts`:
```ts
import { describe, expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { crawlArchive, readCurrentDeprecated, readLiveSet } from "./backfill-io";

function snapshot(root: string, name: string, entries: unknown[]): void {
	const dir = join(root, name);
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, "game_master.json"), JSON.stringify(entries));
}

describe("crawlArchive", () => {
	test("merges across snapshots, keeping latest shape + max date", () => {
		const prev = mkdtempSync(join(tmpdir(), "prev-"));
		snapshot(prev, "gm_v2_apk0001_2021.06.03-10.00.00", [
			{ templateId: "A", data: { templateId: "A", oldDisc: {} } },
			{ templateId: "GONE", data: { templateId: "GONE", itemSettings: {} } },
		]);
		snapshot(prev, "gm_v2_apk0002_2023.08.30-10.00.00", [
			{ templateId: "A", data: { templateId: "A", newDisc: {} } },
		]);
		const seen = crawlArchive(prev);
		expect(seen.get("A")).toEqual({ discriminator: "newDisc", lastSeen: "2023-08-30" });
		expect(seen.get("GONE")).toEqual({ discriminator: "itemSettings", lastSeen: "2021-06-03" });
	});
});

describe("readLiveSet", () => {
	test("union of template-ids.txt and latest/latest.json", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo-"));
		const arch = mkdtempSync(join(tmpdir(), "arch-"));
		writeFileSync(join(repo, "template-ids.txt"), "ID_FROM_TXT\nSHARED\n");
		mkdirSync(join(arch, "latest"), { recursive: true });
		writeFileSync(join(arch, "latest", "latest.json"), JSON.stringify([
			{ templateId: "ID_FROM_JSON", data: {} },
			{ templateId: "SHARED", data: {} },
		]));
		const live = readLiveSet(repo, arch);
		expect(live.has("ID_FROM_TXT")).toBe(true);
		expect(live.has("ID_FROM_JSON")).toBe(true);
		expect(live.has("SHARED")).toBe(true);
		expect(live.size).toBe(3);
	});
});

describe("readCurrentDeprecated", () => {
	test("parses the working-tree deprecated.d.ts", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo2-"));
		const dist = join(repo, "packages", "ts", "dist");
		mkdirSync(dist, { recursive: true });
		writeFileSync(join(dist, "deprecated.d.ts"), `/** @deprecated lastSeen 2024-11-11 — 1 entries */\ntype DeprecatedItemSettingsIds = "OLD_ITEM";\n`);
		const set = readCurrentDeprecated(repo);
		expect(set.get("itemSettings")?.templateIds).toEqual(new Set(["OLD_ITEM"]));
	});

	test("missing file → empty set", () => {
		const repo = mkdtempSync(join(tmpdir(), "repo3-"));
		expect(readCurrentDeprecated(repo).size).toBe(0);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test scripts/template-history/backfill-io.test.ts`
Expected: FAIL — `Cannot find module './backfill-io'`.

- [ ] **Step 3: Create `scripts/template-history/backfill-io.ts`**

```ts
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Entry } from "../../src/group";
import { parseDeprecatedSource } from "../../src/deprecated/parse-source";
import type { DeprecatedSet } from "../../src/deprecated/types";
import { accumulateSeen, parseSnapshotDate, type SeenEntry } from "./backfill-lib";

/** Crawl every `<prevDir>/<snapshot>/game_master.json` into a seen-map. */
export function crawlArchive(prevDir: string): Map<string, SeenEntry> {
	const seen = new Map<string, SeenEntry>();
	let skipped = 0;
	for (const d of readdirSync(prevDir, { withFileTypes: true })) {
		if (!d.isDirectory()) continue;
		const date = parseSnapshotDate(d.name);
		const file = join(prevDir, d.name, "game_master.json");
		if (!existsSync(file)) {
			console.warn(`skip ${d.name}: no game_master.json`);
			skipped++;
			continue;
		}
		let entries: Entry[];
		try {
			entries = JSON.parse(readFileSync(file, "utf8")) as Entry[];
		} catch {
			console.warn(`skip ${d.name}: JSON parse failed`);
			skipped++;
			continue;
		}
		accumulateSeen(seen, entries, date);
	}
	if (skipped) console.warn(`crawl: skipped ${skipped} snapshot(s)`);
	return seen;
}

/** LIVE set = ids in `<repoRoot>/template-ids.txt` ∪ ids in `<archiveDir>/latest/latest.json`. */
export function readLiveSet(repoRoot: string, archiveDir: string): Set<string> {
	const live = new Set<string>();
	const idsTxt = join(repoRoot, "template-ids.txt");
	if (existsSync(idsTxt)) {
		for (const line of readFileSync(idsTxt, "utf8").split("\n")) {
			const id = line.trim();
			if (id) live.add(id);
		}
	}
	const latest = join(archiveDir, "latest", "latest.json");
	if (existsSync(latest)) {
		for (const e of JSON.parse(readFileSync(latest, "utf8")) as Entry[]) live.add(e.templateId);
	}
	return live;
}

/** Parse the working-tree `packages/ts/dist/deprecated.d.ts` into a DeprecatedSet (empty if absent). */
export function readCurrentDeprecated(repoRoot: string): DeprecatedSet {
	const file = join(repoRoot, "packages", "ts", "dist", "deprecated.d.ts");
	if (!existsSync(file)) return new Map();
	return parseDeprecatedSource(readFileSync(file, "utf8"));
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test scripts/template-history/backfill-io.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add scripts/template-history/backfill-io.ts scripts/template-history/backfill-io.test.ts
git commit -m "feat(backfill): add archive crawl + live/deprecated readers"
```

---

### Task 8: CLI entry point + dry-run against the real archive

**Files:**
- Create: `scripts/template-history/backfill-from-archive.ts`

- [ ] **Step 1: Create `scripts/template-history/backfill-from-archive.ts`**

```ts
#!/usr/bin/env bun
/**
 * Crawl the full PokeMiners game_master archive and recover legacy template ids
 * the one-time bootstrap missed (its window started ~2022; the archive goes back
 * to 2021-06). Dry-run report by default; --write merges findings into the
 * existing deprecated emission and re-emits TS/Rust/Go.
 *
 * Usage (from repo root):
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path/to/game_masters
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path/to/game_masters --write
 *   bun run scripts/template-history/backfill-from-archive.ts --archive /path --write --exclude-shadow-purified
 *
 * The archive dir is also resolvable via the GAME_MASTERS_DIR env var.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { emitGo } from "../../src/deprecated/emit-go";
import { emitRust } from "../../src/deprecated/emit-rust";
import { emitTypescript } from "../../src/deprecated/emit-typescript";
import { buildReport, classifyLegacy, isShadowPurified, mergeBackfill, type SeenEntry } from "./backfill-lib";
import { crawlArchive, readCurrentDeprecated, readLiveSet } from "./backfill-io";

const REPO_ROOT = join(import.meta.dir, "..", "..");
const REPORT_OUT = join(import.meta.dir, "backfill-report.json");
const TS_OUT = join(REPO_ROOT, "packages", "ts", "dist", "deprecated.d.ts");
const RUST_OUT = join(REPO_ROOT, "packages", "rust", "src", "deprecated.rs");
const GO_OUT = join(REPO_ROOT, "packages", "go", "deprecated", "deprecated.go");

interface Args {
	write: boolean;
	excludeShadowPurified: boolean;
	archive: string;
}

function parseArgs(argv: string[]): Args {
	let write = false;
	let excludeShadowPurified = false;
	let archive = process.env.GAME_MASTERS_DIR ?? join(REPO_ROOT, "..", "game_masters");
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === "--write") write = true;
		else if (a === "--exclude-shadow-purified") excludeShadowPurified = true;
		else if (a === "--archive") archive = argv[++i] ?? archive;
		else throw new Error(`Unknown arg: ${a}`);
	}
	return { write, excludeShadowPurified, archive };
}

function main(): void {
	const args = parseArgs(process.argv.slice(2));
	const prevDir = join(args.archive, "previous_game_masters");

	console.log(`Crawling ${prevDir} ...`);
	const seen = crawlArchive(prevDir);
	console.log(`  ${seen.size} distinct template ids seen across archive`);

	const live = readLiveSet(REPO_ROOT, args.archive);
	const current = readCurrentDeprecated(REPO_ROOT);
	const alreadyDeprecated = new Set<string>();
	for (const rec of current.values()) for (const id of rec.templateIds) alreadyDeprecated.add(id);
	console.log(`  ${live.size} live ids, ${alreadyDeprecated.size} already-deprecated ids`);

	let legacy = classifyLegacy({ seen, live, alreadyDeprecated });
	if (args.excludeShadowPurified) {
		const filtered = new Map<string, SeenEntry>();
		for (const [id, info] of legacy) if (!isShadowPurified(id)) filtered.set(id, info);
		console.log(`  excluding ${legacy.size - filtered.size} shadow/purified ids`);
		legacy = filtered;
	}

	const report = buildReport(legacy, current);
	writeFileSync(REPORT_OUT, `${JSON.stringify(report, null, 2)}\n`);
	console.log(`\nLegacy ids to record: ${report.totalLegacy} across ${report.discriminatorCount} discriminators (${report.newDiscriminators} new)`);
	console.log(`  shadow/purified bucket: ${report.shadowPurifiedCount}`);
	console.log("  top discriminators:");
	for (const r of report.byDiscriminator.slice(0, 12)) {
		const flag = r.isNew ? "+" : " ";
		console.log(`   ${flag} ${r.discriminator.padEnd(34)} ${String(r.count).padStart(5)}  ${r.firstSeen}..${r.lastSeen}`);
	}
	console.log(`\nFull report: ${REPORT_OUT}`);

	if (!args.write) {
		console.log("\nDry run. Pass --write to merge into the deprecated emission.");
		return;
	}

	const next = mergeBackfill(current, legacy);
	mkdirSync(dirname(TS_OUT), { recursive: true });
	mkdirSync(dirname(RUST_OUT), { recursive: true });
	mkdirSync(dirname(GO_OUT), { recursive: true });
	writeFileSync(TS_OUT, emitTypescript(next));
	writeFileSync(RUST_OUT, emitRust(next));
	writeFileSync(GO_OUT, emitGo(next));
	console.log(`\nWrote ${next.size} discriminators to deprecated.d.ts / .rs / .go`);
	console.log("Run `bun run format` and `bun run typecheck` next.");
}

main();
```

- [ ] **Step 2: Typecheck + lint the new sources**

Run: `bun run typecheck && bunx biome check scripts/template-history src/deprecated/parse-source.ts`
Expected: no type errors; biome clean (or auto-fixable formatting only).

- [ ] **Step 3: Dry-run against the real archive**

Run:
```bash
bun run scripts/template-history/backfill-from-archive.ts --archive /Users/rin/GitHub/game_masters
```
Expected: prints distinct-id / live / already-deprecated counts, then a legacy total around ~1000 with `pokemonSettings` + `genderSettings` as the top two buckets (~494 each), a `shadow/purified bucket` count near ~988, and a scattered tail (`exRaidSettings`, `itemSettings`, `badgeSettings`, plus `ob*` discriminators). Writes `scripts/template-history/backfill-report.json`. No files under `packages/` change (dry run).

- [ ] **Step 4: Confirm no package files changed**

Run: `git status --short packages/`
Expected: empty output (dry run touched nothing in packages/).

- [ ] **Step 5: Commit the entry point**

```bash
git add scripts/template-history/backfill-from-archive.ts
git commit -m "feat(backfill): add archive backfill CLI (dry-run default)"
```

- [ ] **Step 6: STOP — present the report to the user**

Show the console summary + `backfill-report.json` highlights. **Get the user's decision on the shadow/purified bucket** (record them, or re-run Task 9 with `--exclude-shadow-purified`) before any `--write`.

---

### Task 9: Write the backfill + verify (gated on the user's shadow/purified decision)

**Files:**
- Modify (generated): `packages/ts/dist/deprecated.d.ts`, `packages/rust/src/deprecated.rs`, `packages/go/deprecated/deprecated.go`

- [ ] **Step 1: Run with `--write`** (add `--exclude-shadow-purified` only if the user chose to exclude)

```bash
bun run scripts/template-history/backfill-from-archive.ts --archive /Users/rin/GitHub/game_masters --write
```
Expected: "Wrote N discriminators…".

- [ ] **Step 2: Verify the diff is additive only**

Run: `git diff --stat packages/`
Then sanity-check that no previously-present id was removed:
```bash
git show HEAD:packages/ts/dist/deprecated.d.ts | grep -oE '"[^"]+"' | sort -u > /tmp/dep_before.txt
grep -oE '"[^"]+"' packages/ts/dist/deprecated.d.ts | sort -u > /tmp/dep_after.txt
echo "removed ids (expect none):"; comm -23 /tmp/dep_before.txt /tmp/dep_after.txt
echo "added id count:"; comm -13 /tmp/dep_before.txt /tmp/dep_after.txt | wc -l
```
Expected: zero removed ids; added count matches the report's `totalLegacy`.

- [ ] **Step 3: Format**

Run: `bun run format`
Expected: exit 0; normalizes the three emitted files.

- [ ] **Step 4: Typecheck + tests**

Run (parallel-safe, independent): `bun run typecheck` and `bun test`
Expected: tsc clean; all tests pass (lib + io + parse-source + pre-existing).

- [ ] **Step 5 (optional, heavier): native builds of the deprecated modules**

Run: `(cd packages/rust && cargo build --features deprecated)` and `(cd packages/go/deprecated && go build ./...)`
Expected: both compile — confirms the new discriminators produce valid Rust/Go identifiers.

- [ ] **Step 6: Commit**

```bash
git add packages/ scripts/template-history/backfill-report.json
git commit -m "feat(deprecated): backfill legacy ids from full game_master archive

Crawled all 239 PokeMiners snapshots (2021-06 → 2026-04). Recovered
N legacy template ids the bootstrap missed (window started ~2022),
dominated by 2021 standalone shadow/purified pokemon entries."
```

- [ ] **Step 7: Report to the user to test the generated output**

Per the project CLAUDE.md, tell the user the generated TS/Rust/Go deprecated files changed and ask them to verify the outputs.

---

## Self-Review

**Spec coverage:**
- Crawl `previous_game_masters/` only → Task 7 `crawlArchive` (latest not crawled; used as live in `readLiveSet`). ✓
- `legacy = seen − (template-ids.txt ∪ latest.json) − already-deprecated` → Tasks 4 + 7 (`classifyLegacy`, `readLiveSet`, `readCurrentDeprecated`). ✓
- Discriminator rule mirrors bootstrap (`_marker` for stubs) → Task 2 `discriminatorOf`. ✓
- `lastSeen` = max snapshot date per id → Task 3 `accumulateSeen`. ✓
- Dry-run report by default; `--write` merges + re-emits → Tasks 8, 9. ✓
- Non-destructive merge → Task 5 `mergeBackfill` (+ no-mutation test). ✓
- Reuse existing emitters + factored parser → Task 1, Task 8/9. ✓
- Report shows shadow/purified bucket separately for the judgment call → Task 6 `buildReport.shadowPurifiedCount`, Task 8 Step 6. ✓
- Keep the script, `--archive` flag (+ env) → Task 8. ✓
- Unit tests on pure helpers, no test over the 3 GB archive → Tasks 2-6 (in-memory), Task 7 (tiny temp fixtures). ✓
- `--exclude-shadow-purified` anticipates the post-dry-run decision without a code change → Tasks 4, 8, 9. ✓

**Placeholder scan:** none — every code step is complete.

**Type consistency:** `SeenEntry { discriminator, lastSeen }` used uniformly across `accumulateSeen`, `classifyLegacy`, `mergeBackfill`, `buildReport`, and the legacy map. `DeprecatedSet`/`DeprecatedDiscriminator` match `src/deprecated/types.ts` (`discriminator`, `templateIds: Set`, `lastSeen`, `entryCount`). Emitters all take `DeprecatedSet`. `parseDeprecatedSource(source: string): DeprecatedSet` used by both `update-deprecated.ts` and `readCurrentDeprecated`.

# TypeScript API Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the runtime API package `pogo-masterfile`. A `Masterfile` class loads (or wraps) the masterfile JSON and exposes literal-typed lookups, per-group accessors, search, and refresh primitives. Code is fully code-generated into `packages/ts-api/src/`, then tsc-compiled to `packages/ts-api/dist/`.

**Architecture:** Six layers.
1. **Scaffolding** — create `packages/ts-api/` (package.json, tsconfigs, README placeholder), set up bun workspaces, update `.gitignore`.
2. **Type emitters** — `emit-group-names.ts` (runtime const + derived type), `emit-lookup-tables.ts` (`EntryByTemplateID`, `EntriesByGroup`, `TemplateIDsByGroup`, `GroupName`), `emit-index.ts` (top-level barrel).
3. **Build orchestration** — `build.ts` shells out to `tsc -p packages/ts-api/tsconfig.build.json`. `generate.ts` orchestrates emit + copy + build, wired into root `src/generate.ts`.
4. **Hand-written runtime templates** — `masterfile.ts`, `fetch.ts`, `errors.ts`, `types.ts` in `src/typescript-api/templates/`, copied verbatim into `packages/ts-api/src/` during codegen.
5. **Tests** — generator unit tests (in `src/typescript-api/`), runtime + type + fetcher tests (in `src/typescript-api/tests/`).
6. **Release plumbing** — README, CHANGELOG, GitHub Actions workflow, CONTRIBUTING.md update.

**Tech Stack:** Bun ≥1.0 (test runner + TS executor), TypeScript ≥5.0 (compiler), `expect-type` (zero-dep type assertions). Universal `fetch` API. No other runtime deps.

**Reference:** Spec at [`docs/superpowers/specs/2026-04-30-typescript-api-package-design.md`](../specs/2026-04-30-typescript-api-package-design.md).

---

## Phase 1 — Scaffolding

### Task 1: Update root `.gitignore`

Add force-include rule for `packages/ts-api/src/` (matches existing `packages/ts/dist/` pattern), and a path for the editor stubs.

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Append the new rules**

In `.gitignore`, find the existing `!packages/ts/dist` block and add immediately after:

```gitignore
# packages/ts-api/src holds generated runtime sources that ARE the published
# artifact's source-of-truth. Track them so PR review covers regen output.
# packages/ts-api/dist is built locally / on release CI and is NOT committed.
!packages/ts-api/src
!packages/ts-api/src/**

# Editor-only stubs that mirror the latest generated lookup-tables/group-names
# next to the runtime templates so the templates dir type-checks in the IDE.
src/typescript-api/templates-stubs/
```

- [ ] **Step 2: Verify**

Run: `git check-ignore -v packages/ts-api/src/foo.ts`
Expected: NOT ignored (force-included).

Run: `git check-ignore -v packages/ts-api/dist/foo.js`
Expected: ignored by `dist` line.

Run: `git check-ignore -v src/typescript-api/templates-stubs/anything`
Expected: ignored.

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "Update .gitignore for ts-api package layout"
```

### Task 2: Set up bun workspaces

The root `package.json` does not currently declare workspaces. Add it so `pogo-masterfile-types` and (soon) `pogo-masterfile` resolve as workspace deps.

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add workspaces field and `expect-type` devDep**

In `package.json`, add the `"workspaces"` array and add `"expect-type"` to `devDependencies`:

```json
{
	"name": "pogo-masterfile-types-monorepo",
	"module": "src/generate.ts",
	"type": "module",
	"private": true,
	"workspaces": ["packages/*"],
	"scripts": {
		"generate": "bun run src/generate.ts && bun run format && (cd packages/rust && cargo fmt) && (cd packages/go && gofmt -w .)",
		"test": "bun test",
		"typecheck": "tsc --noEmit",
		"lint": "biome check",
		"format": "biome check --write --unsafe"
	},
	"devDependencies": {
		"@biomejs/biome": "^2.4.12",
		"@types/bun": "latest",
		"expect-type": "^1.1.0"
	},
	"peerDependencies": {
		"typescript": "^6.0.3"
	}
}
```

- [ ] **Step 2: Install**

Run: `bun install`
Expected: lockfile updated, `expect-type` added.

- [ ] **Step 3: Commit**

```bash
git add package.json bun.lock
git commit -m "Add bun workspaces and expect-type devDep"
```

### Task 3: Scaffold `packages/ts-api/`

Create the package directory with metadata, tsconfigs, and placeholder README/LICENSE/CHANGELOG. NO `src/` or `dist/` yet — codegen creates `src/`.

**Files:**
- Create: `packages/ts-api/package.json`
- Create: `packages/ts-api/tsconfig.json`
- Create: `packages/ts-api/tsconfig.build.json`
- Create: `packages/ts-api/README.md`
- Create: `packages/ts-api/LICENSE` (copy from `packages/ts/LICENSE`)
- Create: `packages/ts-api/CHANGELOG.md`

- [ ] **Step 1: Create `packages/ts-api/package.json`**

```json
{
	"name": "pogo-masterfile",
	"version": "0.1.0",
	"description": "Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with literal-typed lookups and per-group accessors. Built on `pogo-masterfile-types`.",
	"license": "MIT",
	"author": "Rin <derick.magnusen@gmail.com>",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/<GH_OWNER>/pogo-masterfile-types.git",
		"directory": "packages/ts-api"
	},
	"homepage": "https://github.com/<GH_OWNER>/pogo-masterfile-types#readme",
	"bugs": {
		"url": "https://github.com/<GH_OWNER>/pogo-masterfile-types/issues"
	},
	"keywords": [
		"pokemon-go",
		"pokemon",
		"masterfile",
		"api",
		"typescript"
	],
	"type": "module",
	"sideEffects": false,
	"main": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"exports": {
		".": {
			"import": "./dist/index.js",
			"types": "./dist/index.d.ts"
		},
		"./fetch": {
			"import": "./dist/fetch.js",
			"types": "./dist/fetch.d.ts"
		},
		"./errors": {
			"import": "./dist/errors.js",
			"types": "./dist/errors.d.ts"
		}
	},
	"files": ["dist", "README.md", "LICENSE", "CHANGELOG.md"],
	"publishConfig": {
		"access": "public"
	},
	"scripts": {
		"build": "tsc -p tsconfig.build.json",
		"check": "tsc --noEmit -p tsconfig.json",
		"prepublishOnly": "bun run build"
	},
	"dependencies": {
		"pogo-masterfile-types": "workspace:^"
	},
	"peerDependencies": {
		"typescript": ">=5.0"
	},
	"peerDependenciesMeta": {
		"typescript": {
			"optional": true
		}
	}
}
```

- [ ] **Step 2: Create `packages/ts-api/tsconfig.json`**

```json
{
	"extends": "../../tsconfig.json",
	"compilerOptions": {
		"noEmit": true,
		"moduleResolution": "bundler"
	},
	"include": ["src/**/*"]
}
```

- [ ] **Step 3: Create `packages/ts-api/tsconfig.build.json`**

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"noEmit": false,
		"rootDir": "src",
		"outDir": "dist",
		"module": "ES2022",
		"target": "ES2022",
		"declaration": true,
		"declarationMap": true,
		"sourceMap": true,
		"strict": true,
		"skipLibCheck": true
	}
}
```

- [ ] **Step 4: Create `packages/ts-api/README.md`** (placeholder; full README in Task 25)

```markdown
# pogo-masterfile

Runtime API for the Pokémon GO masterfile.

See [the design spec](../../docs/superpowers/specs/2026-04-30-typescript-api-package-design.md) for architecture details.

(Full README pending — see implementation plan task 25.)
```

- [ ] **Step 5: Copy LICENSE**

```bash
cp packages/ts/LICENSE packages/ts-api/LICENSE
```

- [ ] **Step 6: Create `packages/ts-api/CHANGELOG.md`**

```markdown
# Changelog

## [Unreleased]

- Initial release: `Masterfile` class with `fromRemote`/`fromJson`, literal-typed `getEntry`/`tryGetEntry`/`has`/`getGroup`, per-group accessor surface, search/iteration/refresh primitives.
```

- [ ] **Step 7: Verify scaffold**

Run: `ls packages/ts-api/`
Expected: `CHANGELOG.md  LICENSE  README.md  package.json  tsconfig.build.json  tsconfig.json`

Run: `bun install`
Expected: workspace dep `pogo-masterfile-types` resolves; no errors.

- [ ] **Step 8: Commit**

```bash
git add packages/ts-api/ bun.lock
git commit -m "Scaffold packages/ts-api/ with package.json, tsconfigs, placeholder README"
```

### Task 4: Skeleton `src/typescript-api/`

Create the generator skeleton — empty `templates/`, `tests/`, `templates-stubs/` (gitignored), constants, and a stub `generate.ts`.

**Files:**
- Create: `src/typescript-api/constants.ts`
- Create: `src/typescript-api/generate.ts`
- Create: `src/typescript-api/templates/.gitkeep`
- Create: `src/typescript-api/tests/.gitkeep`

- [ ] **Step 1: Create `src/typescript-api/constants.ts`**

```ts
import { join } from "node:path";

const REPO_ROOT = join(import.meta.dir, "..", "..");

export const PACKAGE_DIR = join(REPO_ROOT, "packages", "ts-api");
export const SRC_OUT_DIR = join(PACKAGE_DIR, "src");
export const DIST_OUT_DIR = join(PACKAGE_DIR, "dist");
export const BUILD_TSCONFIG = join(PACKAGE_DIR, "tsconfig.build.json");

export const TEMPLATES_DIR = join(REPO_ROOT, "src", "typescript-api", "templates");
export const TEMPLATES_STUBS_DIR = join(REPO_ROOT, "src", "typescript-api", "templates-stubs");

export const DEFAULT_MASTERFILE_URL =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";
```

- [ ] **Step 2: Create `src/typescript-api/generate.ts` stub**

```ts
import type { Entry } from "../group.ts";

export async function generateTypeScriptApi(_entries: Entry[]): Promise<void> {
	console.log("[typescript-api] (skeleton — no-op)");
}
```

- [ ] **Step 3: Create empty placeholder dirs**

```bash
mkdir -p src/typescript-api/templates src/typescript-api/tests
touch src/typescript-api/templates/.gitkeep src/typescript-api/tests/.gitkeep
```

- [ ] **Step 4: Commit**

```bash
git add src/typescript-api/
git commit -m "Skeleton src/typescript-api/ generator entry + constants"
```

---

## Phase 2 — Type emitters (TDD)

### Task 5: `emit-group-names.ts`

Emit `packages/ts-api/src/group-names.ts`: a `GROUP_NAMES` const array of camelCase group discriminators (alphabetical) plus a derived `GroupName` type.

**Files:**
- Create: `src/typescript-api/emit-group-names.ts`
- Create: `src/typescript-api/emit-group-names.test.ts`

- [ ] **Step 1: Write the failing tests**

```ts
// src/typescript-api/emit-group-names.test.ts
import { describe, expect, test } from "bun:test";
import { groupEntries } from "../group.ts";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { emitGroupNames } from "./emit-group-names.ts";

describe("emitGroupNames", () => {
	test("emits an alphabetical const array of camelCase discriminators", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		expect(out).toContain("export const GROUP_NAMES = [");
		expect(out).toContain("] as const;");
		expect(out).toContain("export type GroupName = typeof GROUP_NAMES[number];");
		// Alphabetical: pokemonSettings comes before typeEffective
		const names = [...out.matchAll(/"([a-z][a-zA-Z]+)"/g)].map((m) => m[1]);
		const sorted = [...names].sort();
		expect(names).toEqual(sorted);
	});

	test("includes singletons as a group", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		expect(out).toContain('"singletons"');
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitGroupNames(groups);
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/typescript-api/emit-group-names.test.ts`
Expected: FAIL — `emitGroupNames` doesn't exist yet.

- [ ] **Step 3: Implement `emit-group-names.ts`**

```ts
// src/typescript-api/emit-group-names.ts
import type { Group } from "../group.ts";

const SINGLETONS_KEY = "singletons";

/**
 * Emit `packages/ts-api/src/group-names.ts`.
 *
 * Multi-entry groups use their JSON discriminator (already camelCase, e.g.
 * "moveSettings"). Single-entry "groups" (each is a singleton) collapse into
 * one synthetic "singletons" group, matching the existing TS emitter's layout.
 */
export function emitGroupNames(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const hasSingletons = [...groups.values()].some((g) => g.entries.length === 1);

	const names = multiEntry.map((g) => g.discriminator);
	if (hasSingletons) names.push(SINGLETONS_KEY);
	names.sort();

	const arrayLines = names.map((n) => `\t"${n}",`).join("\n");

	return `// Generated from Pokémon GO masterfile — list of group discriminators.

export const GROUP_NAMES = [
${arrayLines}
] as const;

export type GroupName = typeof GROUP_NAMES[number];
`;
}
```

- [ ] **Step 4: Run to verify pass**

Run: `bun test src/typescript-api/emit-group-names.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/typescript-api/emit-group-names.ts src/typescript-api/emit-group-names.test.ts
git commit -m "Add emit-group-names with tests"
```

### Task 6: `emit-lookup-tables.ts`

Emit `packages/ts-api/src/lookup-tables.d.ts`: `EntryByTemplateID`, `EntriesByGroup`, `TemplateIDsByGroup` interfaces plus a `GroupName` re-export.

This is the largest emitter — produces ~10k lines for the real masterfile but should be small for the fixture.

**Files:**
- Create: `src/typescript-api/emit-lookup-tables.ts`
- Create: `src/typescript-api/emit-lookup-tables.test.ts`

- [ ] **Step 1: Inspect what type names the existing TS emitter produces**

Read `src/typescript/emit.ts` — note how `emitEntryFile` names individual entry types (e.g. `MoveSettingsV0022MoveMegahorn`). The lookup-tables emitter must use the same name-derivation function.

Run: `grep -n "pascalCase\|baseName\|entryTypeName\|emitEntryFile" src/typescript/emit.ts | head -30`
Note the helper function names. They will be needed in the implementation.

- [ ] **Step 2: Write the failing tests**

```ts
// src/typescript-api/emit-lookup-tables.test.ts
import { describe, expect, test } from "bun:test";
import { groupEntries } from "../group.ts";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { emitLookupTables } from "./emit-lookup-tables.ts";

describe("emitLookupTables", () => {
	test("starts with header and imports from pogo-masterfile-types", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out.startsWith("// Generated from")).toBe(true);
		expect(out).toContain('from "pogo-masterfile-types/entries"');
	});

	test("re-exports GroupName from ./group-names", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain('export type { GroupName } from "./group-names";');
	});

	test("EntryByTemplateID maps each templateId to its literal entry type", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface EntryByTemplateID {");
		// Sample: a known fixture entry — replace with a real one from MOCK_MASTERFILE
		const allEntries = [...groups.values()].flatMap((g) => g.entries);
		const sampleId = allEntries[0].templateId;
		expect(out).toContain(`"${sampleId}":`);
	});

	test("EntriesByGroup maps each group discriminator to its entry union", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface EntriesByGroup {");
		// Multi-entry groups: discriminator + "MasterfileEntry" suffix
		for (const g of groups.values()) {
			if (g.entries.length > 1) {
				expect(out).toContain(`${g.discriminator}:`);
				break;
			}
		}
	});

	test("TemplateIDsByGroup maps each group to its TemplateID union", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLookupTables(groups);
		expect(out).toContain("export interface TemplateIDsByGroup {");
	});
});
```

- [ ] **Step 3: Run to verify failure**

Run: `bun test src/typescript-api/emit-lookup-tables.test.ts`
Expected: FAIL — `emitLookupTables` doesn't exist.

- [ ] **Step 4: Implement `emit-lookup-tables.ts`**

```ts
// src/typescript-api/emit-lookup-tables.ts
import type { Group } from "../group.ts";
import { kebabCase, pascalCase } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

/**
 * Emit `packages/ts-api/src/lookup-tables.d.ts`.
 *
 * Three interfaces + a GroupName re-export. Pulls every literal entry type
 * and every per-group MasterfileEntry / TemplateID alias from the existing
 * `pogo-masterfile-types` package.
 */
export function emitLookupTables(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()]
		.filter((g) => g.entries.length > 1)
		.sort((a, b) => a.discriminator.localeCompare(b.discriminator));
	const singletons = [...groups.values()].filter((g) => g.entries.length === 1);

	// Imports: every multi-entry group contributes its MasterfileEntry + TemplateID + each literal entry name.
	const groupAliases: string[] = [];
	const literalEntryNames: string[] = [];

	for (const g of multiEntry) {
		const base = pascalCase(g.discriminator);
		groupAliases.push(`${base}MasterfileEntry`, `${base}TemplateID`);
		for (const e of g.entries) {
			literalEntryNames.push(`${base}${entryNameSuffix(e.templateId)}`);
		}
	}

	if (singletons.length > 0) {
		groupAliases.push("SingletonsMasterfileEntry", "SingletonsTemplateID");
		for (const g of singletons) {
			const base = pascalCase(g.discriminator);
			literalEntryNames.push(`${base}SingletonEntry`);
		}
	}

	literalEntryNames.sort();
	groupAliases.sort();

	const imports = [
		"// Generated from Pokémon GO masterfile — typed lookup tables.",
		"",
		`import type {`,
		...groupAliases.map((n) => `\t${n},`),
		...literalEntryNames.map((n) => `\t${n},`),
		`} from "pogo-masterfile-types/entries";`,
		"",
		`export type { GroupName } from "./group-names";`,
		"",
	].join("\n");

	// EntryByTemplateID
	const entryLines: string[] = [];
	for (const g of multiEntry) {
		const base = pascalCase(g.discriminator);
		for (const e of g.entries) {
			const name = `${base}${entryNameSuffix(e.templateId)}`;
			entryLines.push(`\t"${e.templateId}": ${name};`);
		}
	}
	for (const g of singletons) {
		const base = pascalCase(g.discriminator);
		const e = g.entries[0];
		entryLines.push(`\t"${e.templateId}": ${base}SingletonEntry;`);
	}
	entryLines.sort();

	// EntriesByGroup: discriminator → MasterfileEntry union
	const entriesByGroupLines: string[] = [];
	for (const g of multiEntry) {
		const base = pascalCase(g.discriminator);
		entriesByGroupLines.push(`\t${g.discriminator}: ${base}MasterfileEntry;`);
	}
	if (singletons.length > 0) {
		entriesByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsMasterfileEntry;`);
	}

	// TemplateIDsByGroup: discriminator → TemplateID union
	const templateIdsByGroupLines: string[] = [];
	for (const g of multiEntry) {
		const base = pascalCase(g.discriminator);
		templateIdsByGroupLines.push(`\t${g.discriminator}: ${base}TemplateID;`);
	}
	if (singletons.length > 0) {
		templateIdsByGroupLines.push(`\t${SINGLETONS_KEY}: SingletonsTemplateID;`);
	}

	return `${imports}export interface EntryByTemplateID {
${entryLines.join("\n")}
}

export interface EntriesByGroup {
${entriesByGroupLines.join("\n")}
}

export interface TemplateIDsByGroup {
${templateIdsByGroupLines.join("\n")}
}
`;
}

/**
 * Convert "V0022_MOVE_MEGAHORN" → "V0022MoveMegahorn".
 * Mirrors the existing TS emitter's per-entry type name suffix derivation.
 */
function entryNameSuffix(templateId: string): string {
	return templateId
		.split("_")
		.map((part) =>
			part.length === 0 ? "" : part[0]?.toUpperCase() + part.slice(1).toLowerCase(),
		)
		.join("");
}
```

- [ ] **Step 5: Run tests; iterate if any helpers behave differently than assumed**

Run: `bun test src/typescript-api/emit-lookup-tables.test.ts`
Expected: PASS.

If `pascalCase` or `entryNameSuffix` don't match the real type names produced by the existing TS emitter (see `src/typescript/emit.ts`), the lookup-tables.d.ts will reference type names that don't exist in `pogo-masterfile-types`. To confirm names match, read a small generated entry file:

Run: `head -20 packages/ts/dist/move-settings/entries/bug.d.ts`
Compare a name like `MoveSettingsV0022MoveMegahorn` to what `pascalCase("moveSettings") + entryNameSuffix("V0022_MOVE_MEGAHORN")` produces. They MUST match exactly. If they don't, fix `entryNameSuffix` to mirror the existing emitter's convention.

- [ ] **Step 6: Commit**

```bash
git add src/typescript-api/emit-lookup-tables.ts src/typescript-api/emit-lookup-tables.test.ts
git commit -m "Add emit-lookup-tables with tests"
```

### Task 7: `emit-index.ts`

Emit `packages/ts-api/src/index.ts`: a barrel that re-exports the public surface of the package.

**Files:**
- Create: `src/typescript-api/emit-index.ts`
- Create: `src/typescript-api/emit-index.test.ts`

- [ ] **Step 1: Write the failing tests**

```ts
// src/typescript-api/emit-index.test.ts
import { describe, expect, test } from "bun:test";
import { emitIndex } from "./emit-index.ts";

describe("emitIndex", () => {
	test("re-exports the Masterfile class and accessor types", () => {
		const out = emitIndex();
		expect(out).toContain('export { Masterfile } from "./masterfile";');
		expect(out).toContain('export type { GroupAccessor } from "./masterfile";');
	});

	test("re-exports the fetcher and URL constant", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";',
		);
	});

	test("re-exports option/fetcher types", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export type { FromRemoteOptions, Fetcher } from "./types";',
		);
	});

	test("re-exports the error classes", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export { MasterfileFetchError, MasterfileParseError, EntryNotFoundError } from "./errors";',
		);
	});

	test("re-exports the lookup-tables types", () => {
		const out = emitIndex();
		expect(out).toContain(
			'export type { EntryByTemplateID, EntriesByGroup, TemplateIDsByGroup, GroupName } from "./lookup-tables";',
		);
	});

	test("starts with the generated-file header", () => {
		const out = emitIndex();
		expect(out.startsWith("// Generated from")).toBe(true);
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/typescript-api/emit-index.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `emit-index.ts`**

```ts
// src/typescript-api/emit-index.ts

/**
 * Emit `packages/ts-api/src/index.ts` — the public barrel.
 *
 * Static; doesn't depend on group data.
 */
export function emitIndex(): string {
	return `// Generated from Pokémon GO masterfile — top-level barrel.

export { Masterfile } from "./masterfile";
export type { GroupAccessor } from "./masterfile";
export { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";
export type { FromRemoteOptions, Fetcher } from "./types";
export { MasterfileFetchError, MasterfileParseError, EntryNotFoundError } from "./errors";
export type { EntryByTemplateID, EntriesByGroup, TemplateIDsByGroup, GroupName } from "./lookup-tables";
`;
}
```

- [ ] **Step 4: Run to verify pass**

Run: `bun test src/typescript-api/emit-index.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/typescript-api/emit-index.ts src/typescript-api/emit-index.test.ts
git commit -m "Add emit-index barrel"
```

### Task 8: `build.ts` (tsc invocation)

Shell out to tsc using the package's build config. Errors propagate (cause codegen to fail loudly).

**Files:**
- Create: `src/typescript-api/build.ts`

- [ ] **Step 1: Implement `build.ts`**

```ts
// src/typescript-api/build.ts
import { spawn } from "node:child_process";
import { BUILD_TSCONFIG } from "./constants.ts";

/**
 * Invoke `tsc -p packages/ts-api/tsconfig.build.json`.
 * Resolves on success, rejects on non-zero exit.
 */
export function runTsc(): Promise<void> {
	return new Promise((resolve, reject) => {
		const proc = spawn("bunx", ["tsc", "-p", BUILD_TSCONFIG], {
			stdio: "inherit",
		});
		proc.on("error", reject);
		proc.on("exit", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`tsc exited with code ${code}`));
		});
	});
}
```

- [ ] **Step 2: Verify it can be imported (sanity)**

Run: `bun -e 'import("./src/typescript-api/build.ts").then(m => console.log(typeof m.runTsc))'`
Expected: `function`

- [ ] **Step 3: Commit**

```bash
git add src/typescript-api/build.ts
git commit -m "Add tsc invocation helper"
```

### Task 9: Implement `generateTypeScriptApi` orchestrator (no templates yet)

Wire the emitters to write into `packages/ts-api/src/`, run tsc, log progress. Templates copy is added in Task 13.

**Files:**
- Modify: `src/typescript-api/generate.ts`

- [ ] **Step 1: Replace stub with orchestrator**

```ts
// src/typescript-api/generate.ts
import { mkdir } from "node:fs/promises";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { writeOutput } from "../write.ts";
import { runTsc } from "./build.ts";
import { SRC_OUT_DIR, TEMPLATES_DIR, TEMPLATES_STUBS_DIR } from "./constants.ts";
import { emitGroupNames } from "./emit-group-names.ts";
import { emitIndex } from "./emit-index.ts";
import { emitLookupTables } from "./emit-lookup-tables.ts";

export async function generateTypeScriptApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[typescript-api] grouped into ${groups.size} discriminators.`);

	// 1. Emit data-driven files into packages/ts-api/src/.
	const generated = new Map<string, string>();
	generated.set("group-names.ts", emitGroupNames(groups));
	generated.set("lookup-tables.d.ts", emitLookupTables(groups));
	generated.set("index.ts", emitIndex());
	await writeOutput(generated, SRC_OUT_DIR);

	// 2. Refresh editor stubs (mirrors of group-names + lookup-tables) so
	//    the templates dir type-checks in the IDE.
	await mkdir(TEMPLATES_STUBS_DIR, { recursive: true });
	const stubs = new Map<string, string>();
	stubs.set("group-names.ts", emitGroupNames(groups));
	stubs.set("lookup-tables.d.ts", emitLookupTables(groups));
	await writeOutput(stubs, TEMPLATES_STUBS_DIR);

	// 3. (templates copy happens in a later task)
	void TEMPLATES_DIR;

	// 4. Compile src/ → dist/ via tsc.
	await runTsc();

	console.log(`[typescript-api] wrote runtime to ${SRC_OUT_DIR} and built dist/`);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/generate.ts
git commit -m "Implement generateTypeScriptApi orchestrator (no templates yet)"
```

### Task 10: Wire into root `src/generate.ts`

Add the new generator to the orchestrator.

**Files:**
- Modify: `src/generate.ts`

- [ ] **Step 1: Add import and call**

In `src/generate.ts`, add the import alphabetically near the other generator imports:

```ts
import { generateTypeScript } from "./typescript/generate.ts";
import { generateTypeScriptApi } from "./typescript-api/generate.ts";
```

Then in `main()`, add the call after `generateTypeScript`:

```ts
await generateTypeScript(entries);
await generateTypeScriptApi(entries);
await generateRust(entries);
await generateGo(entries);
```

- [ ] **Step 2: Commit**

```bash
git add src/generate.ts
git commit -m "Wire generateTypeScriptApi into root orchestrator"
```

### Task 11: First end-to-end smoke

Run the codegen pipeline. We expect tsc to FAIL because `index.ts` references `./masterfile`, `./fetch`, etc. that don't exist yet — but the data-driven emissions should land successfully.

**Files:** none (verification step).

- [ ] **Step 1: Run codegen**

Run: `bun run src/generate.ts`
Expected: fetches masterfile, runs typescript and typescript-api emit; tsc fails with "Cannot find module './masterfile'" (or similar). The PARTIAL output should still exist.

- [ ] **Step 2: Verify partial output**

Run: `ls packages/ts-api/src/`
Expected: at least `group-names.ts`, `lookup-tables.d.ts`, `index.ts`.

Run: `head -5 packages/ts-api/src/group-names.ts`
Expected: header comment + `export const GROUP_NAMES = [`.

Run: `head -5 packages/ts-api/src/lookup-tables.d.ts`
Expected: header comment + `import type { ... } from "pogo-masterfile-types/entries";`.

- [ ] **Step 3: Commit the verified partial output**

```bash
git add packages/ts-api/src/
git commit -m "First codegen run produces group-names, lookup-tables, index"
```

---

## Phase 3 — Hand-written runtime templates

Templates live in `src/typescript-api/templates/` and are copied verbatim into `packages/ts-api/src/` during codegen. Each template can `import { … } from "./group-names"` / `"./lookup-tables"` because the editor stubs (in `templates-stubs/`) and the eventual package src/ both make those siblings resolve.

For **the templates' own type-checking in the IDE**, templates and stubs need to be in the same TS program. We add a `tsconfig.json` in the templates dir that includes both.

### Task 12: Templates dir tsconfig + dev type-checking

**Files:**
- Create: `src/typescript-api/templates/tsconfig.json`

- [ ] **Step 1: Create the templates tsconfig**

```json
{
	"extends": "../../../tsconfig.json",
	"compilerOptions": {
		"noEmit": true,
		"moduleResolution": "bundler",
		"rootDir": ".",
		"strict": true
	},
	"include": ["./*.ts", "../templates-stubs/*.ts", "../templates-stubs/*.d.ts"]
}
```

This tsconfig is editor-only — it lets the TS Language Service resolve `./lookup-tables` and `./group-names` from within `templates/*.ts` by also including `templates-stubs/`. Codegen does not invoke this config; the actual package build uses `packages/ts-api/tsconfig.build.json`.

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/templates/tsconfig.json
git commit -m "Add templates dir tsconfig for IDE type-checking"
```

### Task 13: `errors.ts` template

Three custom error classes — small, no dependencies.

**Files:**
- Create: `src/typescript-api/templates/errors.ts`

- [ ] **Step 1: Create `errors.ts`**

```ts
// templates/errors.ts — copied verbatim into packages/ts-api/src/errors.ts.

/** Network or HTTP failure when fetching the masterfile. */
export class MasterfileFetchError extends Error {
	readonly url: string;
	override readonly cause?: unknown;

	constructor(message: string, url: string, cause?: unknown) {
		super(message);
		this.name = "MasterfileFetchError";
		this.url = url;
		this.cause = cause;
	}
}

/** Response could not be parsed as a `MasterfileEntry[]`. */
export class MasterfileParseError extends Error {
	override readonly cause?: unknown;

	constructor(message: string, cause?: unknown) {
		super(message);
		this.name = "MasterfileParseError";
		this.cause = cause;
	}
}

/** A `getEntry` lookup did not find an entry with the given templateId. */
export class EntryNotFoundError extends Error {
	readonly templateId: string;

	constructor(templateId: string) {
		super(`No entry with templateId "${templateId}"`);
		this.name = "EntryNotFoundError";
		this.templateId = templateId;
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/templates/errors.ts
git commit -m "Add errors.ts template"
```

### Task 14: `types.ts` template

Top-level type declarations: `FromRemoteOptions`, `Fetcher`. Used by `masterfile.ts` and `fetch.ts`.

**Files:**
- Create: `src/typescript-api/templates/types.ts`

- [ ] **Step 1: Create `types.ts`**

```ts
// templates/types.ts — copied verbatim into packages/ts-api/src/types.ts.

import type { MasterfileEntry } from "pogo-masterfile-types/entries";

export interface FromRemoteOptions {
	/** URL to fetch from. Defaults to `DEFAULT_MASTERFILE_URL`. */
	url?: string;
	/** Custom fetcher. Default uses global `fetch` + `response.json()`. */
	fetcher?: Fetcher;
	/** Cancellation. */
	signal?: AbortSignal;
}

/**
 * Fetch the masterfile JSON and normalize it to `MasterfileEntry[]`.
 *
 * Custom fetchers MUST handle whatever upstream shape they receive and return
 * an array conforming to `MasterfileEntry[]`. They should propagate `signal`
 * to the underlying fetch so cancellation works.
 */
export type Fetcher = (
	url: string,
	signal?: AbortSignal,
) => Promise<MasterfileEntry[]>;
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/templates/types.ts
git commit -m "Add types.ts template"
```

### Task 15: `fetch.ts` template

Default fetcher implementation + URL constant.

**Files:**
- Create: `src/typescript-api/templates/fetch.ts`

- [ ] **Step 1: Create `fetch.ts`**

```ts
// templates/fetch.ts — copied verbatim into packages/ts-api/src/fetch.ts.

import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { MasterfileFetchError, MasterfileParseError } from "./errors";
import type { Fetcher } from "./types";

export const DEFAULT_MASTERFILE_URL =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

/**
 * Default fetcher: standard `fetch` + JSON parse, with shape validation.
 * Throws `MasterfileFetchError` for network/HTTP failures and
 * `MasterfileParseError` for invalid JSON or non-array bodies.
 */
export const defaultFetcher: Fetcher = async (url, signal) => {
	let response: Response;
	try {
		response = await fetch(url, { signal });
	} catch (cause) {
		throw new MasterfileFetchError(
			`network error fetching ${url}`,
			url,
			cause,
		);
	}
	if (!response.ok) {
		throw new MasterfileFetchError(
			`${response.status} ${response.statusText} from ${url}`,
			url,
		);
	}
	let json: unknown;
	try {
		json = await response.json();
	} catch (cause) {
		throw new MasterfileParseError(
			"response body is not valid JSON",
			cause,
		);
	}
	if (!Array.isArray(json)) {
		throw new MasterfileParseError(
			"expected top-level JSON array of entries",
		);
	}
	return json as MasterfileEntry[];
};
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/templates/fetch.ts
git commit -m "Add fetch.ts template (defaultFetcher + DEFAULT_MASTERFILE_URL)"
```

### Task 16: `masterfile.ts` template — class + accessor installation

The big one. The `Masterfile` class with all methods, plus runtime installation of per-group accessors.

**Files:**
- Create: `src/typescript-api/templates/masterfile.ts`

- [ ] **Step 1: Create `masterfile.ts`**

```ts
// templates/masterfile.ts — copied verbatim into packages/ts-api/src/masterfile.ts.

import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { EntryNotFoundError } from "./errors";
import { defaultFetcher, DEFAULT_MASTERFILE_URL } from "./fetch";
import { GROUP_NAMES, type GroupName } from "./group-names";
import type {
	EntriesByGroup,
	EntryByTemplateID,
	TemplateIDsByGroup,
} from "./lookup-tables";
import type { FromRemoteOptions } from "./types";

// ── Group accessor ─────────────────────────────────────────────────────────

export interface GroupAccessor<G extends GroupName> {
	get<T extends TemplateIDsByGroup[G] & keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T];
	get(templateId: string): EntriesByGroup[G];

	tryGet<T extends TemplateIDsByGroup[G] & keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T] | undefined;
	tryGet(templateId: string): EntriesByGroup[G] | undefined;

	has(templateId: string): templateId is TemplateIDsByGroup[G] & string;

	all(): readonly EntriesByGroup[G][];
	templateIds(): readonly (TemplateIDsByGroup[G] & string)[];

	find(
		predicate: (entry: EntriesByGroup[G]) => boolean,
	): EntriesByGroup[G] | undefined;
	filter(
		predicate: (entry: EntriesByGroup[G]) => boolean,
	): readonly EntriesByGroup[G][];

	readonly size: number;
	[Symbol.iterator](): IterableIterator<EntriesByGroup[G]>;
}

type GroupAccessorMap = { [G in GroupName]: GroupAccessor<G> };

// ── Class ──────────────────────────────────────────────────────────────────

export class Masterfile {
	#entries: readonly MasterfileEntry[] = [];
	#byTemplateId: Map<string, MasterfileEntry> = new Map();
	#byGroup: Map<GroupName, MasterfileEntry[]> = new Map();

	private constructor(entries: readonly MasterfileEntry[]) {
		this.#install(entries);
		for (const groupName of GROUP_NAMES) {
			this.#installAccessor(groupName);
		}
	}

	// ── Loaders ──
	static async fromRemote(
		opts: FromRemoteOptions = {},
	): Promise<Masterfile> {
		const url = opts.url ?? DEFAULT_MASTERFILE_URL;
		const fetcher = opts.fetcher ?? defaultFetcher;
		const entries = await fetcher(url, opts.signal);
		return new Masterfile(entries);
	}

	static fromJson(json: readonly MasterfileEntry[]): Masterfile {
		return new Masterfile(json);
	}

	// ── Core lookups ──
	getEntry<T extends keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T];
	getEntry(templateId: string): MasterfileEntry;
	getEntry(templateId: string): MasterfileEntry {
		const entry = this.#byTemplateId.get(templateId);
		if (!entry) throw new EntryNotFoundError(templateId);
		return entry;
	}

	tryGetEntry<T extends keyof EntryByTemplateID>(
		templateId: T,
	): EntryByTemplateID[T] | undefined;
	tryGetEntry(templateId: string): MasterfileEntry | undefined;
	tryGetEntry(templateId: string): MasterfileEntry | undefined {
		return this.#byTemplateId.get(templateId);
	}

	has(templateId: string): templateId is keyof EntryByTemplateID & string {
		return this.#byTemplateId.has(templateId);
	}

	getAll(): readonly MasterfileEntry[] {
		return this.#entries;
	}

	getGroup<G extends GroupName>(
		group: G,
	): readonly EntriesByGroup[G][] {
		return (this.#byGroup.get(group) ?? []) as readonly EntriesByGroup[G][];
	}

	// ── Introspection ──
	groups(): readonly GroupName[] {
		return GROUP_NAMES;
	}

	templateIds(): readonly (keyof EntryByTemplateID & string)[];
	templateIds<G extends GroupName>(
		group: G,
	): readonly (TemplateIDsByGroup[G] & string)[];
	templateIds(group?: GroupName): readonly string[] {
		if (group === undefined) {
			return [...this.#byTemplateId.keys()];
		}
		return (this.#byGroup.get(group) ?? []).map((e) => e.templateId);
	}

	[Symbol.iterator](): IterableIterator<MasterfileEntry> {
		return this.#entries[Symbol.iterator]();
	}

	get size(): number {
		return this.#entries.length;
	}

	get raw(): readonly MasterfileEntry[] {
		return this.#entries;
	}

	// ── Mutation ──
	async refresh(opts: FromRemoteOptions = {}): Promise<void> {
		const url = opts.url ?? DEFAULT_MASTERFILE_URL;
		const fetcher = opts.fetcher ?? defaultFetcher;
		const entries = await fetcher(url, opts.signal);
		this.#install(entries);
	}

	update(json: readonly MasterfileEntry[]): void {
		this.#install(json);
	}

	// ── Top-level search ──
	find(
		predicate: (entry: MasterfileEntry) => boolean,
	): MasterfileEntry | undefined {
		return this.#entries.find(predicate);
	}

	filter(
		predicate: (entry: MasterfileEntry) => boolean,
	): readonly MasterfileEntry[] {
		return this.#entries.filter(predicate);
	}

	findByPattern(pattern: RegExp): readonly MasterfileEntry[] {
		return this.#entries.filter((e) => pattern.test(e.templateId));
	}

	// ── Internals ──
	#install(entries: readonly MasterfileEntry[]): void {
		const byTemplateId = new Map<string, MasterfileEntry>();
		const byGroup = new Map<GroupName, MasterfileEntry[]>();
		for (const groupName of GROUP_NAMES) {
			byGroup.set(groupName, []);
		}

		for (const entry of entries) {
			byTemplateId.set(entry.templateId, entry);
			const group = detectGroup(entry);
			if (group !== undefined && byGroup.has(group)) {
				byGroup.get(group)!.push(entry);
			} else if (group === undefined) {
				// Singleton-shaped: discriminator key is unique per entry.
				// Fold all such entries into the synthetic "singletons" group.
				const singletonsKey = "singletons" as GroupName;
				if (byGroup.has(singletonsKey)) {
					byGroup.get(singletonsKey)!.push(entry);
				}
			}
		}

		// Atomic swap: only mutate `this` once both maps are fully built.
		this.#entries = entries;
		this.#byTemplateId = byTemplateId;
		this.#byGroup = byGroup;
	}

	#installAccessor<G extends GroupName>(groupName: G): void {
		// `this` captured by arrow methods; methods are bound to the instance.
		const self = this;
		const accessor: GroupAccessor<G> = {
			get(templateId: string): EntriesByGroup[G] {
				const entry = self.#byTemplateId.get(templateId);
				if (!entry) throw new EntryNotFoundError(templateId);
				return entry as EntriesByGroup[G];
			},
			tryGet(templateId: string): EntriesByGroup[G] | undefined {
				return self.#byTemplateId.get(templateId) as
					| EntriesByGroup[G]
					| undefined;
			},
			has(templateId: string): templateId is TemplateIDsByGroup[G] & string {
				const list = self.#byGroup.get(groupName) ?? [];
				return list.some((e) => e.templateId === templateId);
			},
			all(): readonly EntriesByGroup[G][] {
				return (self.#byGroup.get(groupName) ?? []) as readonly EntriesByGroup[G][];
			},
			templateIds(): readonly (TemplateIDsByGroup[G] & string)[] {
				return (self.#byGroup.get(groupName) ?? []).map(
					(e) => e.templateId,
				) as readonly (TemplateIDsByGroup[G] & string)[];
			},
			find(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as readonly EntriesByGroup[G][]).find(
					predicate,
				);
			},
			filter(predicate: (e: EntriesByGroup[G]) => boolean) {
				return ((self.#byGroup.get(groupName) ?? []) as readonly EntriesByGroup[G][]).filter(
					predicate,
				);
			},
			get size() {
				return (self.#byGroup.get(groupName) ?? []).length;
			},
			[Symbol.iterator](): IterableIterator<EntriesByGroup[G]> {
				return ((self.#byGroup.get(groupName) ?? []) as EntriesByGroup[G][])[
					Symbol.iterator
				]();
			},
		};
		(this as unknown as GroupAccessorMap)[groupName] = accessor;
	}
}

export interface Masterfile extends GroupAccessorMap {}

/**
 * Extract the group discriminator from a masterfile entry by inspecting the
 * non-`templateId` keys of its `data` payload.
 */
function detectGroup(entry: MasterfileEntry): GroupName | undefined {
	const dataKeys = Object.keys(entry.data).filter((k) => k !== "templateId");
	const first = dataKeys[0];
	if (first === undefined) return undefined;
	if ((GROUP_NAMES as readonly string[]).includes(first)) {
		return first as GroupName;
	}
	return undefined;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/templates/masterfile.ts
git commit -m "Add masterfile.ts template — Masterfile class + GroupAccessor"
```

### Task 17: Wire template-copy into the orchestrator

`generateTypeScriptApi` must copy `src/typescript-api/templates/*.ts` (excluding the templates-only `tsconfig.json`) into `packages/ts-api/src/`.

**Files:**
- Modify: `src/typescript-api/generate.ts`

- [ ] **Step 1: Add a helper and use it**

Replace the body of `generateTypeScriptApi` with:

```ts
// src/typescript-api/generate.ts
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { type Entry, groupEntries } from "../group.ts";
import { writeOutput } from "../write.ts";
import { runTsc } from "./build.ts";
import {
	SRC_OUT_DIR,
	TEMPLATES_DIR,
	TEMPLATES_STUBS_DIR,
} from "./constants.ts";
import { emitGroupNames } from "./emit-group-names.ts";
import { emitIndex } from "./emit-index.ts";
import { emitLookupTables } from "./emit-lookup-tables.ts";

const TEMPLATE_FILES_TO_COPY = ["errors.ts", "types.ts", "fetch.ts", "masterfile.ts"];

export async function generateTypeScriptApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[typescript-api] grouped into ${groups.size} discriminators.`);

	// 1. Ensure output dirs exist.
	await mkdir(SRC_OUT_DIR, { recursive: true });
	await mkdir(TEMPLATES_STUBS_DIR, { recursive: true });

	// 2. Emit data-driven files into packages/ts-api/src/.
	const generated = new Map<string, string>();
	generated.set("group-names.ts", emitGroupNames(groups));
	generated.set("lookup-tables.d.ts", emitLookupTables(groups));
	generated.set("index.ts", emitIndex());
	await writeOutput(generated, SRC_OUT_DIR);

	// 3. Refresh editor stubs alongside the templates so the IDE resolves
	//    `./group-names` and `./lookup-tables` from within templates/.
	const stubs = new Map<string, string>();
	stubs.set("group-names.ts", emitGroupNames(groups));
	stubs.set("lookup-tables.d.ts", emitLookupTables(groups));
	await writeOutput(stubs, TEMPLATES_STUBS_DIR);

	// 4. Copy hand-written runtime templates verbatim into packages/ts-api/src/.
	for (const file of TEMPLATE_FILES_TO_COPY) {
		await copyFile(join(TEMPLATES_DIR, file), join(SRC_OUT_DIR, file));
	}

	// 5. Compile src/ → dist/ via tsc.
	await runTsc();

	console.log(`[typescript-api] wrote runtime to ${SRC_OUT_DIR} and built dist/`);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/typescript-api/generate.ts
git commit -m "Wire template-copy into generateTypeScriptApi"
```

### Task 18: First full pipeline run

Run codegen end-to-end. Expect tsc to succeed and produce a buildable package.

**Files:** none (verification step).

- [ ] **Step 1: Run codegen**

Run: `bun run src/generate.ts`
Expected: All emit + copy steps succeed; tsc compiles cleanly.

If tsc fails, fix the templates inline. Common failures and fixes:

| Symptom | Fix |
|---|---|
| `Cannot find name 'EntriesByGroup'` in masterfile.ts | The `import type { EntriesByGroup, EntryByTemplateID, TemplateIDsByGroup } from "./lookup-tables"` line was lost — restore it. |
| `Singletons` group is missing | Check `emitGroupNames` includes `"singletons"`; check `MasterfileEntry` from `pogo-masterfile-types/entries` includes singleton entries. |
| Type names don't exist in pogo-masterfile-types | `entryNameSuffix` produces names that don't match the existing TS emitter. Compare to a real generated entry file (e.g. `head -20 packages/ts/dist/move-settings/entries/bug.d.ts`) and adjust. |

- [ ] **Step 2: Verify dist output**

Run: `ls packages/ts-api/dist/`
Expected: at least `errors.js`, `errors.d.ts`, `fetch.js`, `fetch.d.ts`, `masterfile.js`, `masterfile.d.ts`, `index.js`, `index.d.ts`, `lookup-tables.d.ts`, `group-names.js`, `group-names.d.ts`, `types.d.ts`.

Run: `bun -e 'import("./packages/ts-api/dist/index.js").then(m => console.log(typeof m.Masterfile))'`
Expected: `function`.

- [ ] **Step 3: Commit the regenerated src/**

```bash
git add packages/ts-api/src/
git commit -m "First full ts-api codegen run produces buildable package"
```

---

## Phase 4 — Tests

Tests live in `src/typescript-api/tests/`. They import from `packages/ts-api/src/*.ts` directly (bun runs TS without building) and from `pogo-masterfile-types/entries` for type narrowing fixtures.

### Task 19: Test fixture

Build a tiny in-memory masterfile fixture. Uses real templateIds drawn from the actual masterfile so the literal types match.

**Files:**
- Create: `src/typescript-api/tests/fixture.ts`

- [ ] **Step 1: Pick real entries from the masterfile**

Run: `jq -c '[ .[] | select(.templateId == "V0001_POKEMON_BULBASAUR" or .templateId == "V0022_MOVE_MEGAHORN" or .templateId == "ITEM_POTION") ]' masterfile.json > /tmp/fixture-entries.json`

(If `masterfile.json` is missing locally, run `bun run src/generate.ts` once first to fetch it — but it's already gitignored so a previous codegen run must have populated it.)

Inspect: `cat /tmp/fixture-entries.json | jq '.[].templateId'`
Expected: 3 entries: `V0001_POKEMON_BULBASAUR`, `V0022_MOVE_MEGAHORN`, `ITEM_POTION`.

- [ ] **Step 2: Create fixture.ts**

```ts
// src/typescript-api/tests/fixture.ts
import type { MasterfileEntry } from "../../../packages/ts-api/src/lookup-tables.d.ts";

/**
 * Tiny fixture covering three groups: pokemonSettings, moveSettings, itemSettings.
 * IDs taken from the real masterfile so literal-type lookups work.
 */
// biome-ignore format: keep entries readable
export const FIXTURE_ENTRIES = [
	{
		templateId: "V0001_POKEMON_BULBASAUR",
		data: { templateId: "V0001_POKEMON_BULBASAUR", pokemonSettings: { /* shape filled by real data */ } },
	},
	{
		templateId: "V0022_MOVE_MEGAHORN",
		data: { templateId: "V0022_MOVE_MEGAHORN", moveSettings: { /* shape filled by real data */ } },
	},
	{
		templateId: "ITEM_POTION",
		data: { templateId: "ITEM_POTION", itemSettings: { /* shape filled by real data */ } },
	},
] as unknown as MasterfileEntry[];
```

The `as unknown as MasterfileEntry[]` cast is intentional — the fixture is a structural placeholder. Tests that operate on entries will use the real entries from `masterfile.json` via `bun -e` if structure matters; for lookup/index/iteration tests, the placeholder is sufficient.

For tests that DO need real shapes, swap in `JSON.parse(await Bun.file("/tmp/fixture-entries.json").text()) as MasterfileEntry[]`.

- [ ] **Step 3: Commit**

```bash
git add src/typescript-api/tests/fixture.ts
git commit -m "Add minimal test fixture for ts-api runtime tests"
```

### Task 20: Runtime tests — core lookups

Cover `getEntry`, `tryGetEntry`, `has`, `getAll`, `size`, `[Symbol.iterator]`.

**Files:**
- Create: `src/typescript-api/tests/lookups.test.ts`

- [ ] **Step 1: Write tests**

```ts
// src/typescript-api/tests/lookups.test.ts
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { EntryNotFoundError } from "../../../packages/ts-api/src/errors.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile core lookups", () => {
	test("fromJson constructs and indexes", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.size).toBe(FIXTURE_ENTRIES.length);
	});

	test("getEntry returns the entry by templateId", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const entry = mf.getEntry("V0022_MOVE_MEGAHORN");
		expect(entry.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("getEntry throws EntryNotFoundError on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(() => mf.getEntry("DOES_NOT_EXIST")).toThrow(EntryNotFoundError);
	});

	test("tryGetEntry returns undefined on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.tryGetEntry("DOES_NOT_EXIST")).toBeUndefined();
	});

	test("tryGetEntry returns entry on hit", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.tryGetEntry("ITEM_POTION")?.templateId).toBe("ITEM_POTION");
	});

	test("has narrows on hit", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.has("V0001_POKEMON_BULBASAUR")).toBe(true);
		expect(mf.has("DOES_NOT_EXIST")).toBe(false);
	});

	test("getAll returns the underlying entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.getAll()).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("Symbol.iterator yields each entry once", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const collected = [...mf];
		expect(collected).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("size matches entries length", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.size).toBe(FIXTURE_ENTRIES.length);
	});
});
```

- [ ] **Step 2: Run**

Run: `bun test src/typescript-api/tests/lookups.test.ts`
Expected: PASS.

If the lookup-tables import in fixture.ts fails (because lookup-tables.d.ts wasn't generated), run `bun run src/generate.ts` first.

- [ ] **Step 3: Commit**

```bash
git add src/typescript-api/tests/lookups.test.ts
git commit -m "Add runtime lookup tests"
```

### Task 21: Runtime tests — groups, introspection, iteration

Cover `getGroup`, `groups()`, `templateIds()` with and without a group arg.

**Files:**
- Create: `src/typescript-api/tests/groups.test.ts`

- [ ] **Step 1: Write tests**

```ts
// src/typescript-api/tests/groups.test.ts
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { GROUP_NAMES } from "../../../packages/ts-api/src/group-names.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile group introspection", () => {
	test("groups() returns the full GROUP_NAMES list", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.groups()).toEqual(GROUP_NAMES);
	});

	test("getGroup returns matching entries for a populated group", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const moves = mf.getGroup("moveSettings");
		expect(moves).toHaveLength(1);
		expect(moves[0]?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("getGroup returns empty for a group not in the fixture", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const empty = mf.getGroup("combatLeague");
		expect(empty).toEqual([]);
	});

	test("templateIds() with no arg returns all IDs", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const ids = mf.templateIds();
		expect(ids).toContain("V0022_MOVE_MEGAHORN");
		expect(ids).toContain("V0001_POKEMON_BULBASAUR");
		expect(ids).toContain("ITEM_POTION");
	});

	test("templateIds(group) returns only that group's IDs", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const moveIds = mf.templateIds("moveSettings");
		expect(moveIds).toEqual(["V0022_MOVE_MEGAHORN"]);
	});
});
```

- [ ] **Step 2: Run + commit**

Run: `bun test src/typescript-api/tests/groups.test.ts`
Expected: PASS.

```bash
git add src/typescript-api/tests/groups.test.ts
git commit -m "Add runtime group introspection tests"
```

### Task 22: Runtime tests — group accessors

Cover `mf.<group>.get/tryGet/has/all/templateIds/find/filter/size/iterator`.

**Files:**
- Create: `src/typescript-api/tests/accessors.test.ts`

- [ ] **Step 1: Write tests**

```ts
// src/typescript-api/tests/accessors.test.ts
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import { EntryNotFoundError } from "../../../packages/ts-api/src/errors.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Per-group accessors", () => {
	test("accessor.get returns the entry by templateId", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const move = mf.moveSettings.get("V0022_MOVE_MEGAHORN");
		expect(move.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("accessor.get throws on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(() => mf.moveSettings.get("DOES_NOT_EXIST")).toThrow(EntryNotFoundError);
	});

	test("accessor.tryGet returns undefined on missing", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.tryGet("DOES_NOT_EXIST")).toBeUndefined();
	});

	test("accessor.has returns true only for entries in that group", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.has("V0022_MOVE_MEGAHORN")).toBe(true);
		// Bulbasaur exists but is in pokemonSettings, not moveSettings
		expect(mf.moveSettings.has("V0001_POKEMON_BULBASAUR")).toBe(false);
	});

	test("accessor.all returns just the group's entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.all()).toHaveLength(1);
	});

	test("accessor.templateIds returns group IDs only", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.templateIds()).toEqual(["V0022_MOVE_MEGAHORN"]);
	});

	test("accessor.find with predicate", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const found = mf.moveSettings.find((e) => e.templateId === "V0022_MOVE_MEGAHORN");
		expect(found?.templateId).toBe("V0022_MOVE_MEGAHORN");
	});

	test("accessor.filter narrows", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const filtered = mf.moveSettings.filter(() => true);
		expect(filtered).toHaveLength(1);
	});

	test("accessor.size matches group length", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.moveSettings.size).toBe(1);
		expect(mf.combatLeague.size).toBe(0);
	});

	test("accessor[Symbol.iterator] iterates the group's entries", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect([...mf.moveSettings]).toHaveLength(1);
	});

	test("top-level getEntry equals accessor.get for in-group ID", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.getEntry("V0022_MOVE_MEGAHORN")).toBe(
			mf.moveSettings.get("V0022_MOVE_MEGAHORN"),
		);
	});
});
```

- [ ] **Step 2: Run + commit**

Run: `bun test src/typescript-api/tests/accessors.test.ts`
Expected: PASS.

```bash
git add src/typescript-api/tests/accessors.test.ts
git commit -m "Add per-group accessor tests"
```

### Task 23: Runtime tests — mutation, search, refresh

Cover `update`, `refresh`, `find`, `filter`, `findByPattern`.

**Files:**
- Create: `src/typescript-api/tests/mutation.test.ts`

- [ ] **Step 1: Write tests**

```ts
// src/typescript-api/tests/mutation.test.ts
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";
import { FIXTURE_ENTRIES } from "./fixture.ts";

describe("Masterfile mutation and search", () => {
	test("update replaces data and rebuilds indexes", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(true);
		mf.update([FIXTURE_ENTRIES[0]!] as readonly MasterfileEntry[]);
		expect(mf.size).toBe(1);
		expect(mf.has("V0022_MOVE_MEGAHORN")).toBe(false);
	});

	test("refresh uses provided fetcher and swaps data", async () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		await mf.refresh({
			fetcher: async () => [FIXTURE_ENTRIES[2]!] as MasterfileEntry[],
		});
		expect(mf.size).toBe(1);
		expect(mf.has("ITEM_POTION")).toBe(true);
	});

	test("find returns first matching entry", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const found = mf.find((e) => e.templateId.startsWith("ITEM_"));
		expect(found?.templateId).toBe("ITEM_POTION");
	});

	test("filter returns all matching", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const filtered = mf.filter((e) => e.templateId.startsWith("V"));
		expect(filtered).toHaveLength(2);
	});

	test("findByPattern matches templateId regex", () => {
		const mf = Masterfile.fromJson(FIXTURE_ENTRIES);
		const matches = mf.findByPattern(/^V\d+_/);
		expect(matches).toHaveLength(2);
		const itemMatches = mf.findByPattern(/^ITEM_/);
		expect(itemMatches).toHaveLength(1);
	});
});
```

- [ ] **Step 2: Run + commit**

Run: `bun test src/typescript-api/tests/mutation.test.ts`
Expected: PASS.

```bash
git add src/typescript-api/tests/mutation.test.ts
git commit -m "Add mutation/search/refresh tests"
```

### Task 24: Type tests via expect-type

Assert literal-type narrowing works as designed. These tests fail at compile-time if the typing breaks.

**Files:**
- Create: `src/typescript-api/tests/types.test.ts`

- [ ] **Step 1: Write the type assertions**

```ts
// src/typescript-api/tests/types.test.ts
import { describe, test } from "bun:test";
import { expectTypeOf } from "expect-type";
import type { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import type {
	EntriesByGroup,
	EntryByTemplateID,
	GroupName,
	TemplateIDsByGroup,
} from "../../../packages/ts-api/src/lookup-tables.d.ts";
import type { MasterfileEntry } from "pogo-masterfile-types/entries";

describe("Masterfile type narrowing", () => {
	test("getEntry narrows on literal templateId", () => {
		const mf = {} as Masterfile;
		const move = mf.getEntry("V0022_MOVE_MEGAHORN");
		expectTypeOf(move).toEqualTypeOf<EntryByTemplateID["V0022_MOVE_MEGAHORN"]>();
	});

	test("getEntry widens on string", () => {
		const mf = {} as Masterfile;
		const s: string = "anything";
		const result = mf.getEntry(s);
		expectTypeOf(result).toEqualTypeOf<MasterfileEntry>();
	});

	test("getGroup returns the narrow group union", () => {
		const mf = {} as Masterfile;
		const moves = mf.getGroup("moveSettings");
		expectTypeOf(moves).toEqualTypeOf<readonly EntriesByGroup["moveSettings"][]>();
	});

	test("group accessor narrows IDs", () => {
		const mf = {} as Masterfile;
		// Should accept a moveSettings ID
		mf.moveSettings.get("V0022_MOVE_MEGAHORN");
	});

	test("tryGetEntry returns T | undefined for literals", () => {
		const mf = {} as Masterfile;
		const r = mf.tryGetEntry("V0022_MOVE_MEGAHORN");
		expectTypeOf(r).toEqualTypeOf<EntryByTemplateID["V0022_MOVE_MEGAHORN"] | undefined>();
	});

	test("groups() returns readonly GroupName[]", () => {
		const mf = {} as Masterfile;
		expectTypeOf(mf.groups()).toEqualTypeOf<readonly GroupName[]>();
	});

	test("templateIds(group) narrows", () => {
		const mf = {} as Masterfile;
		const ids = mf.templateIds("moveSettings");
		expectTypeOf(ids).toEqualTypeOf<readonly (TemplateIDsByGroup["moveSettings"] & string)[]>();
	});
});
```

- [ ] **Step 2: Run**

Run: `bun test src/typescript-api/tests/types.test.ts`
Expected: PASS.

If types don't match what `expect-type` expects, INSPECT a generated lookup-tables snippet and adjust either the test expectation or the runtime template signature. Both must agree.

- [ ] **Step 3: Commit**

```bash
git add src/typescript-api/tests/types.test.ts
git commit -m "Add type-level tests via expect-type"
```

### Task 25: Fetcher tests

Mock `globalThis.fetch` and exercise every error path.

**Files:**
- Create: `src/typescript-api/tests/fetcher.test.ts`

- [ ] **Step 1: Write tests**

```ts
// src/typescript-api/tests/fetcher.test.ts
import { describe, expect, test, mock, beforeEach, afterEach } from "bun:test";
import {
	defaultFetcher,
	DEFAULT_MASTERFILE_URL,
} from "../../../packages/ts-api/src/fetch.ts";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";
import {
	MasterfileFetchError,
	MasterfileParseError,
} from "../../../packages/ts-api/src/errors.ts";
import { FIXTURE_ENTRIES } from "./fixture.ts";

const ORIGINAL_FETCH = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = ORIGINAL_FETCH;
});

describe("defaultFetcher", () => {
	test("happy path returns parsed array", async () => {
		globalThis.fetch = mock(
			async () =>
				new Response(JSON.stringify(FIXTURE_ENTRIES), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);
		const entries = await defaultFetcher("https://example/test", undefined);
		expect(entries).toHaveLength(FIXTURE_ENTRIES.length);
	});

	test("network error throws MasterfileFetchError with cause", async () => {
		const cause = new Error("ECONNREFUSED");
		globalThis.fetch = mock(async () => {
			throw cause;
		});
		try {
			await defaultFetcher("https://example/x", undefined);
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(MasterfileFetchError);
			expect((err as MasterfileFetchError).url).toBe("https://example/x");
			expect((err as MasterfileFetchError).cause).toBe(cause);
		}
	});

	test("non-2xx throws MasterfileFetchError", async () => {
		globalThis.fetch = mock(
			async () => new Response("not found", { status: 404, statusText: "Not Found" }),
		);
		await expect(defaultFetcher("https://example/x", undefined)).rejects.toBeInstanceOf(
			MasterfileFetchError,
		);
	});

	test("invalid JSON throws MasterfileParseError", async () => {
		globalThis.fetch = mock(async () => new Response("not json", { status: 200 }));
		await expect(defaultFetcher("https://example/x", undefined)).rejects.toBeInstanceOf(
			MasterfileParseError,
		);
	});

	test("non-array JSON throws MasterfileParseError", async () => {
		globalThis.fetch = mock(
			async () =>
				new Response(JSON.stringify({ data: [] }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
		);
		await expect(defaultFetcher("https://example/x", undefined)).rejects.toBeInstanceOf(
			MasterfileParseError,
		);
	});

	test("AbortSignal is forwarded to underlying fetch", async () => {
		const seenSignals: (AbortSignal | undefined)[] = [];
		globalThis.fetch = mock(async (_input: any, init?: any) => {
			seenSignals.push(init?.signal);
			return new Response(JSON.stringify([]), { status: 200 });
		});
		const ac = new AbortController();
		await defaultFetcher("https://example/x", ac.signal);
		expect(seenSignals[0]).toBe(ac.signal);
	});
});

describe("Masterfile.fromRemote", () => {
	test("uses the default URL when none provided", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return FIXTURE_ENTRIES;
		});
		await Masterfile.fromRemote({ fetcher });
		expect(seenUrls[0]).toBe(DEFAULT_MASTERFILE_URL);
	});

	test("uses custom URL + custom fetcher when provided", async () => {
		const seenUrls: string[] = [];
		const fetcher = mock(async (url: string) => {
			seenUrls.push(url);
			return FIXTURE_ENTRIES;
		});
		await Masterfile.fromRemote({ url: "https://custom/", fetcher });
		expect(seenUrls[0]).toBe("https://custom/");
	});
});
```

- [ ] **Step 2: Run + commit**

Run: `bun test src/typescript-api/tests/fetcher.test.ts`
Expected: PASS.

```bash
git add src/typescript-api/tests/fetcher.test.ts
git commit -m "Add fetcher tests with mocked fetch"
```

### Task 26: E2E smoke (gated)

Hits the real default URL behind `BUN_E2E=1`.

**Files:**
- Create: `src/typescript-api/tests/e2e.test.ts`

- [ ] **Step 1: Write the gated test**

```ts
// src/typescript-api/tests/e2e.test.ts
import { describe, expect, test } from "bun:test";
import { Masterfile } from "../../../packages/ts-api/src/masterfile.ts";

const E2E_ENABLED = process.env["BUN_E2E"] === "1";
const ifE2E = E2E_ENABLED ? test : test.skip;

describe("Masterfile e2e (gated by BUN_E2E=1)", () => {
	ifE2E(
		"loads from the real default URL",
		async () => {
			const mf = await Masterfile.fromRemote();
			expect(mf.size).toBeGreaterThan(0);
			expect(mf.groups()).toContain("moveSettings");
			expect(mf.groups()).toContain("pokemonSettings");
			const bulbasaur = mf.tryGetEntry("V0001_POKEMON_BULBASAUR");
			expect(bulbasaur).toBeDefined();
			expect(bulbasaur?.templateId).toBe("V0001_POKEMON_BULBASAUR");
		},
		60_000, // 60s timeout
	);
});
```

- [ ] **Step 2: Verify it skips by default**

Run: `bun test src/typescript-api/tests/e2e.test.ts`
Expected: 1 skipped.

- [ ] **Step 3: Commit**

```bash
git add src/typescript-api/tests/e2e.test.ts
git commit -m "Add gated e2e smoke test"
```

### Task 27: Full suite passes

**Files:** none (verification step).

- [ ] **Step 1: Run everything**

Run: `bun test`
Expected: All previous test suites + the new ts-api tests pass. e2e is skipped.

- [ ] **Step 2: Run typecheck**

Run: `bun run typecheck`
Expected: Clean.

- [ ] **Step 3: Run lint/format**

Run: `bun run format`
Expected: Auto-fixes applied if any. Re-run to confirm clean state.

- [ ] **Step 4: Commit any format fixups**

```bash
git add -A
git diff --cached --stat
# if there are changes:
git commit -m "Format fixups after ts-api work"
```

---

## Phase 5 — Documentation & release

### Task 28: Full README

Write the consumer-facing README for `packages/ts-api/`.

**Files:**
- Modify: `packages/ts-api/README.md`

- [ ] **Step 1: Replace placeholder with full content**

```markdown
# pogo-masterfile

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with literal-typed lookups and per-group accessors. Built on `pogo-masterfile-types`.

## Install

```bash
npm install pogo-masterfile
# or
bun add pogo-masterfile
```

## Quickstart

```ts
import { Masterfile } from "pogo-masterfile";

const mf = await Masterfile.fromRemote();

// Top-level lookup — return type narrows to the exact entry
const move = mf.getEntry("V0022_MOVE_MEGAHORN");
console.log(move.data.moveSettings.power);  // typed as the literal `105`

// Per-group accessor — focused intellisense (only moveSettings IDs autocomplete)
const tackle = mf.moveSettings.get("V0033_MOVE_TACKLE");

// Iterate one group
for (const m of mf.moveSettings) {
  // m is fully typed as a MoveSettingsMasterfileEntry
}

// Search
const items = mf.findByPattern(/^ITEM_/);
```

## API

### Loading

- `Masterfile.fromRemote(opts?)` — fetch from the default URL (or a custom URL / custom fetcher).
- `Masterfile.fromJson(entries)` — wrap an already-loaded array.

```ts
// Custom URL
const mf = await Masterfile.fromRemote({ url: "https://my-cdn/masterfile.json" });

// Custom fetcher (auth, transforms, retry, etc.)
const mf = await Masterfile.fromRemote({
  fetcher: async (url, signal) => {
    const r = await fetch(url, {
      signal,
      headers: { Authorization: `Bearer ${token}` },
    });
    return r.json();
  },
});

// Cancellation
const ac = new AbortController();
setTimeout(() => ac.abort(), 5000);
const mf = await Masterfile.fromRemote({ signal: ac.signal });
```

### Top-level methods

- `getEntry(id)` — throws `EntryNotFoundError` if missing.
- `tryGetEntry(id)` — returns `undefined` if missing.
- `has(id)` — boolean type predicate.
- `getAll()` — every entry.
- `getGroup(name)` — every entry for one group.
- `groups()` / `templateIds()` / `templateIds(group)` / `size` / `[Symbol.iterator]` / `raw`
- `find(predicate)` / `filter(predicate)` / `findByPattern(regex)`
- `refresh(opts?)` — re-fetch from remote and swap.
- `update(json)` — replace with provided data.

### Per-group accessors

For every group `G`, `mf.<G>` is a `GroupAccessor<G>` with:

- `get(id)` / `tryGet(id)` / `has(id)` — narrowed to that group's IDs.
- `all()` / `templateIds()` — narrowed to that group's union.
- `find(predicate)` / `filter(predicate)` — predicate typed against the group's narrow entry union.
- `size` / `[Symbol.iterator]`.

### Errors

- `MasterfileFetchError` — network or HTTP failure (carries `url`, `cause`).
- `MasterfileParseError` — invalid or non-array JSON (carries `cause`).
- `EntryNotFoundError` — missing template ID (carries `templateId`).

Importable from the `./errors` subpath:

```ts
import { MasterfileFetchError } from "pogo-masterfile/errors";
```

### Default fetcher / URL

```ts
import { defaultFetcher, DEFAULT_MASTERFILE_URL } from "pogo-masterfile/fetch";

// Compose: default behavior + extra header
const mf = await Masterfile.fromRemote({
  fetcher: async (url, signal) => {
    const entries = await defaultFetcher(url, signal);
    // ...transform...
    return entries;
  },
});
```

## Source

Generated from the codegen pipeline at the [repo root](https://github.com/<GH_OWNER>/pogo-masterfile-types). Don't edit emitted files by hand — re-run `bun run generate`.

## License

MIT — see [LICENSE](./LICENSE).
```

- [ ] **Step 2: Commit**

```bash
git add packages/ts-api/README.md
git commit -m "Write full README for pogo-masterfile package"
```

### Task 29: CONTRIBUTING.md update

Add `pogo-masterfile` to the release table.

**Files:**
- Modify: `CONTRIBUTING.md`

- [ ] **Step 1: Add the row to the release table**

In `CONTRIBUTING.md`, find the table:

```
| Package    | Tag pattern         | Example tag           | Workflow                                  |
| ---------- | ------------------- | --------------------- | ----------------------------------------- |
| TypeScript | `typescript-v*`     | `typescript-v0.1.0`   | `.github/workflows/publish-npm.yml`       |
```

Insert a new row after the TypeScript row:

```
| TS API     | `pogo-masterfile-v*`| `pogo-masterfile-v0.1.0` | `.github/workflows/publish-pogo-masterfile.yml` |
```

Also add a "Local verification" subsection entry:

In the existing block:
```bash
# TypeScript
cd packages/ts && bun run build && npm pack --dry-run
```

Add immediately after:
```bash
# TypeScript API (pogo-masterfile)
cd packages/ts-api && bun run build && npm pack --dry-run
```

- [ ] **Step 2: Commit**

```bash
git add CONTRIBUTING.md
git commit -m "Add pogo-masterfile to release table"
```

### Task 30: GitHub Actions release workflow

Add `.github/workflows/publish-pogo-masterfile.yml`.

**Files:**
- Create: `.github/workflows/publish-pogo-masterfile.yml`

- [ ] **Step 1: Inspect existing workflow for shape**

Run: `cat .github/workflows/publish-npm.yml`
Note steps and structure. New workflow mirrors it.

- [ ] **Step 2: Create the workflow**

Use the existing `publish-npm.yml` as a template, adapting the trigger pattern, working directory, and any pre-publish steps. Copy and edit:

```bash
cp .github/workflows/publish-npm.yml .github/workflows/publish-pogo-masterfile.yml
```

Then edit `.github/workflows/publish-pogo-masterfile.yml`:
1. Change the `tags:` filter to `pogo-masterfile-v*`.
2. Change the working-directory in any cd / build / publish steps to `packages/ts-api`.
3. Ensure there's a step that runs `bun install` then `bun run generate` BEFORE the build/publish (so dist/ is populated, since dist is gitignored).

If the original workflow lacked a `bun run generate` step (because `packages/ts/dist/` was committed), add one for ts-api:

```yaml
  - name: Generate ts-api dist
    run: |
      cd ${{ github.workspace }}
      bun run generate
```

before the npm publish step.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/publish-pogo-masterfile.yml
git commit -m "Add GitHub Actions workflow for publishing pogo-masterfile"
```

### Task 31: Final regen + verification

Make sure a clean `bun run generate` produces a buildable, type-checking package and all tests pass.

**Files:** none (verification).

- [ ] **Step 1: Clean run**

Run: `rm -rf packages/ts-api/dist src/typescript-api/templates-stubs && bun run generate`
Expected: codegen completes, packages/ts-api/dist/ rebuilt.

- [ ] **Step 2: Tests**

Run: `bun test`
Expected: all pass, e2e skipped.

- [ ] **Step 3: Typecheck**

Run: `bun run typecheck`
Expected: clean.

Run: `cd packages/ts-api && bun run check`
Expected: clean.

- [ ] **Step 4: Commit any final regen artifacts**

```bash
cd /Users/rin/GitHub/pogo-masterfile-types
git add -A
git diff --cached --stat
# only commit if there are actual src/ changes
git commit -m "Final regen and verification of ts-api" || true
```

---

## Definition of done

- [ ] `bun run generate` completes without errors and produces a buildable `packages/ts-api/`.
- [ ] `bun test` passes (e2e skipped).
- [ ] `bun run typecheck` is clean.
- [ ] `cd packages/ts-api && bun run check` is clean.
- [ ] `packages/ts-api/dist/` exists locally with `.js` + `.d.ts` for every public module.
- [ ] `packages/ts-api/src/` is committed; `packages/ts-api/dist/` is gitignored.
- [ ] README documents the public API surface.
- [ ] CONTRIBUTING.md and the release workflow include pogo-masterfile.
- [ ] All commits land cleanly on `main`. No force-pushes, no rewrites.

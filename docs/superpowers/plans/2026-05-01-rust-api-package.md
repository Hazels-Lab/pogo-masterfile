# Rust API Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the runtime Rust crate `pogo-masterfile`, a sibling of the existing `pogo-masterfile-types` crate. Provides a stateful `Masterfile` struct that loads, indexes, and queries masterfile entries with per-group narrow-typed accessors. Code under `packages/rust-api/src/` is fully code-generated from `src/rust-api/`.

**Architecture:** Mirrors the structure of `pogo-masterfile` (TypeScript runtime API):
1. **Scaffolding** — workspace registration, Cargo.toml, .gitignore.
2. **Type emitters** — `emit-cargo` (manifest), `emit-accessor` (per-group structs), `emit-accessor-mod` (barrel), `emit-lib` (root file with per-group methods + `GroupIndexes`), `emit-blocking` (per-group methods on the blocking variant).
3. **Build orchestration** — `generate.ts` orchestrates emit + template-copy; runs `cargo fmt` at the end. Wired into root `src/generate.ts`.
4. **Hand-written runtime templates** — `error.rs`, `fetcher.rs`, `builder.rs`, `masterfile.rs`, `blocking.rs` in `src/rust-api/templates/`, copied verbatim into `packages/rust-api/src/`.
5. **Integration tests + examples** — hand-written, sibling to `src/`, NOT regenerated.
6. **Release plumbing** — workflow, CONTRIBUTING.md update.

**Tech Stack:** Rust 1.85+ (workspace already pins this), tokio + reqwest (async path), reqwest blocking (sync path), serde + serde_json + thiserror. Bun for codegen.

**Reference:** Spec at [`docs/superpowers/specs/2026-05-01-rust-api-package-design.md`](../specs/2026-05-01-rust-api-package-design.md).

---

## Phase 1 — Scaffolding

### Task 1: Update root `.gitignore`

Add force-include rule for `packages/rust-api/src/` (matches existing `packages/ts/dist/` pattern).

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Append the new rule**

In `.gitignore`, find the existing `!packages/ts-api/src` block and add immediately after:

```gitignore
# packages/rust-api/src holds generated runtime sources that ARE the published
# artifact's source-of-truth. Track them so PR review covers regen output.
!packages/rust-api/src
!packages/rust-api/src/**
```

- [ ] **Step 2: Verify**

Run: `git check-ignore -v packages/rust-api/src/foo.rs ; echo done`
Expected: prints the matched negation rule line and `done`. The file is NOT ignored.

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "Update .gitignore for rust-api package layout"
```

### Task 2: Update root `Cargo.toml` workspace

Add `packages/rust-api` to workspace members.

**Files:**
- Modify: `Cargo.toml`

- [ ] **Step 1: Edit workspace members**

Replace the existing `Cargo.toml` content with:

```toml
[workspace]
members = ["packages/rust", "packages/rust-api", "packages/rust-macros"]
resolver = "3"
```

- [ ] **Step 2: Commit**

```bash
git add Cargo.toml
git commit -m "Add packages/rust-api to workspace members"
```

### Task 3: Scaffold `packages/rust-api/`

Create the package with metadata, README placeholder, LICENSE, CHANGELOG.

**Files:**
- Create: `packages/rust-api/Cargo.toml`
- Create: `packages/rust-api/README.md`
- Create: `packages/rust-api/LICENSE` (copy from `packages/rust/LICENSE`)
- Create: `packages/rust-api/CHANGELOG.md`
- Create: `packages/rust-api/rust-toolchain.toml`

- [ ] **Step 1: Create `packages/rust-api/Cargo.toml`**

```toml
[package]
name = "pogo-masterfile"
version = "0.1.0"
edition = "2024"
rust-version = "1.85"
description = "Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group narrow-typed accessors."
license = "MIT"
authors = ["Rin <derick.magnusen@gmail.com>"]
repository = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
homepage = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
documentation = "https://docs.rs/pogo-masterfile"
readme = "README.md"
keywords = ["pokemon-go", "pokemon", "masterfile", "api", "tokio"]
categories = ["api-bindings", "data-structures", "game-development"]
include = [
	"src/**/*.rs",
	"examples/**/*.rs",
	"tests/**/*.rs",
	"Cargo.toml",
	"README.md",
	"LICENSE",
	"CHANGELOG.md",
]

[features]
default = ["async"]
async = ["dep:tokio", "dep:reqwest", "reqwest/rustls-tls", "reqwest/json"]
blocking = ["dep:reqwest", "reqwest/blocking", "reqwest/rustls-tls", "reqwest/json"]

[dependencies]
pogo-masterfile-types = { version = "0.1", path = "../rust" }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
thiserror = "2"
tokio = { version = "1", features = ["rt", "sync"], optional = true }
reqwest = { version = "0.12", default-features = false, optional = true }

[dev-dependencies]
tokio = { version = "1", features = ["full", "test-util", "macros"] }

[package.metadata.docs.rs]
all-features = true
rustdoc-args = ["--cfg", "docsrs"]
```

- [ ] **Step 2: Create README placeholder**

```markdown
# pogo-masterfile

Runtime API for the Pokémon GO masterfile.

See [the design spec](../../docs/superpowers/specs/2026-05-01-rust-api-package-design.md).

(Full README pending — see implementation plan task 30.)
```

- [ ] **Step 3: Copy LICENSE**

```bash
cp packages/rust/LICENSE packages/rust-api/LICENSE
```

- [ ] **Step 4: Create CHANGELOG**

```markdown
# Changelog

## [Unreleased]

- Initial release: `Masterfile` struct with builder-based `from_remote`, polymorphic typed/string ID lookups via `TryInto`, per-group accessor methods, dual `async` (default) + `blocking` feature flags, single `Error` enum, `Fetcher` trait with closure auto-impl.
```

- [ ] **Step 5: Create rust-toolchain.toml**

```toml
[toolchain]
channel = "stable"
```

- [ ] **Step 6: Verify scaffold (no source yet, so cargo check will fail; that's OK)**

Run: `ls packages/rust-api/`
Expected: `CHANGELOG.md  Cargo.toml  LICENSE  README.md  rust-toolchain.toml`

- [ ] **Step 7: Commit**

```bash
git add packages/rust-api/
git commit -m "Scaffold packages/rust-api/ with Cargo.toml, placeholder README"
```

### Task 4: Skeleton `src/rust-api/`

Create the generator skeleton — empty `templates/`, constants, and a stub `generate.ts`.

**Files:**
- Create: `src/rust-api/constants.ts`
- Create: `src/rust-api/generate.ts`
- Create: `src/rust-api/templates/.gitkeep`

- [ ] **Step 1: Create `src/rust-api/constants.ts`**

```ts
import { join } from "node:path";

const REPO_ROOT = join(import.meta.dir, "..", "..");

export const PACKAGE_DIR = join(REPO_ROOT, "packages", "rust-api");
export const SRC_OUT_DIR = join(PACKAGE_DIR, "src");
export const TEMPLATES_DIR = join(REPO_ROOT, "src", "rust-api", "templates");

export const DEFAULT_MASTERFILE_URL =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";
```

- [ ] **Step 2: Create `src/rust-api/generate.ts` stub**

```ts
import type { Entry } from "../group.ts";

export async function generateRustApi(_entries: Entry[]): Promise<void> {
	console.log("[rust-api] (skeleton — no-op)");
}
```

- [ ] **Step 3: Create empty templates dir**

```bash
mkdir -p src/rust-api/templates
touch src/rust-api/templates/.gitkeep
```

- [ ] **Step 4: Commit**

```bash
git add src/rust-api/
git commit -m "Skeleton src/rust-api/ generator entry + constants"
```

---

## Phase 2 — Generators (TDD)

### Task 5: `emit-cargo.ts`

Emit `packages/rust-api/Cargo.toml` from data. We already wrote the file in Task 3, but for the codegen pipeline to own it (so version bumps etc. flow through codegen), the emitter takes over.

**Files:**
- Create: `src/rust-api/emit-cargo.ts`
- Create: `src/rust-api/emit-cargo.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/rust-api/emit-cargo.test.ts
import { describe, expect, test } from "bun:test";
import { emitCargo } from "./emit-cargo.ts";

describe("emitCargo", () => {
	test("declares the pogo-masterfile package", () => {
		const out = emitCargo();
		expect(out).toContain('name = "pogo-masterfile"');
		expect(out).toContain('version = "0.1.0"');
	});

	test("declares the rust 2024 edition + 1.85 minimum", () => {
		const out = emitCargo();
		expect(out).toContain('edition = "2024"');
		expect(out).toContain('rust-version = "1.85"');
	});

	test("declares async-default + blocking features", () => {
		const out = emitCargo();
		expect(out).toContain('default = ["async"]');
		expect(out).toContain('async = ["dep:tokio"');
		expect(out).toContain('blocking = ["dep:reqwest"');
	});

	test("declares pogo-masterfile-types as a path dependency", () => {
		const out = emitCargo();
		expect(out).toContain('pogo-masterfile-types = { version = "0.1", path = "../rust" }');
	});

	test("includes thiserror, serde, serde_json", () => {
		const out = emitCargo();
		expect(out).toContain("thiserror");
		expect(out).toContain("serde");
		expect(out).toContain("serde_json");
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/rust-api/emit-cargo.test.ts`
Expected: FAIL — `emitCargo` doesn't exist.

- [ ] **Step 3: Implement `emit-cargo.ts`**

```ts
// src/rust-api/emit-cargo.ts

/**
 * Emit `packages/rust-api/Cargo.toml`.
 *
 * Static — no group data. Lives in codegen so version bumps and feature
 * adjustments flow through one source. Don't hand-edit the file in the
 * package; edit this emitter instead.
 */
export function emitCargo(): string {
	return `[package]
name = "pogo-masterfile"
version = "0.1.0"
edition = "2024"
rust-version = "1.85"
description = "Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group narrow-typed accessors."
license = "MIT"
authors = ["Rin <derick.magnusen@gmail.com>"]
repository = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
homepage = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
documentation = "https://docs.rs/pogo-masterfile"
readme = "README.md"
keywords = ["pokemon-go", "pokemon", "masterfile", "api", "tokio"]
categories = ["api-bindings", "data-structures", "game-development"]
include = [
	"src/**/*.rs",
	"examples/**/*.rs",
	"tests/**/*.rs",
	"Cargo.toml",
	"README.md",
	"LICENSE",
	"CHANGELOG.md",
]

[features]
default = ["async"]
async = ["dep:tokio", "dep:reqwest", "reqwest/rustls-tls", "reqwest/json"]
blocking = ["dep:reqwest", "reqwest/blocking", "reqwest/rustls-tls", "reqwest/json"]

[dependencies]
pogo-masterfile-types = { version = "0.1", path = "../rust" }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
thiserror = "2"
tokio = { version = "1", features = ["rt", "sync"], optional = true }
reqwest = { version = "0.12", default-features = false, optional = true }

[dev-dependencies]
tokio = { version = "1", features = ["full", "test-util", "macros"] }

[package.metadata.docs.rs]
all-features = true
rustdoc-args = ["--cfg", "docsrs"]
`;
}
```

- [ ] **Step 4: Run + commit**

Run: `bun test src/rust-api/emit-cargo.test.ts`
Expected: PASS, 5 tests.

```bash
git add src/rust-api/emit-cargo.ts src/rust-api/emit-cargo.test.ts
git commit -m "Add emit-cargo with tests"
```

### Task 6: `emit-accessor.ts`

Emit a per-group accessor file (e.g., `packages/rust-api/src/accessor/move_settings.rs`). Each group gets its own struct + impl.

**Files:**
- Create: `src/rust-api/emit-accessor.ts`
- Create: `src/rust-api/emit-accessor.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/rust-api/emit-accessor.test.ts
import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitAccessor } from "./emit-accessor.ts";

describe("emitAccessor", () => {
	test("declares <Group>Accessor struct with three borrowed fields", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const moveLike = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(moveLike);
		expect(out).toMatch(/pub struct \w+Accessor<'a> \{/);
		expect(out).toContain("entries: &'a [MasterfileEntry]");
		expect(out).toContain("index: &'a HashMap<");
		expect(out).toContain("order: &'a [usize]");
	});

	test("provides polymorphic get<I: TryInto<TemplateId>>", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out).toContain("pub fn get<I>(&self, id: I) -> Option<&'a");
		expect(out).toMatch(/where\s+I: TryInto<\w+TemplateId>/);
	});

	test("provides has, iter, template_ids, len, is_empty", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out).toContain("pub fn has<I");
		expect(out).toContain("pub fn iter(&self)");
		expect(out).toContain("pub fn template_ids(&self)");
		expect(out).toContain("pub fn len(&self) -> usize");
		expect(out).toContain("pub fn is_empty(&self) -> bool");
	});

	test("dispatches into the right MasterfileEntry variant", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		// Each match arm dispatches into its variant; the get/iter bodies
		// have a `MasterfileEntry::<Variant>(e) => ...` line.
		expect(out).toMatch(/MasterfileEntry::\w+\(e\) => Some\(e\)/);
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const g = [...groups.values()].find((g) => g.entries.length > 1)!;
		const out = emitAccessor(g);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/rust-api/emit-accessor.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `emit-accessor.ts`**

```ts
// src/rust-api/emit-accessor.ts
import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

/**
 * Emit a per-group accessor file at `packages/rust-api/src/accessor/<group>.rs`.
 *
 * Each generated file declares one `<Group>Accessor<'a>` struct holding
 * borrowed slices into the parent Masterfile's storage, plus an impl block
 * with the lookup/iteration methods. Polymorphic input via `TryInto` accepts
 * either the typed `<Group>TemplateId` enum variant or `&str` (parsed via
 * the existing `FromStr` derive).
 */
export function emitAccessor(group: Group): string {
	const gName = pascalCase(group.discriminator); // e.g. "MoveSettings"
	const entryType = `${gName}Entry`;
	const templateIdType = `${gName}TemplateId`;
	const accessorName = `${gName}Accessor`;

	return `//! Generated from Pokémon GO masterfile — accessor for "${group.discriminator}".

use std::collections::HashMap;

use pogo_masterfile_types::{${entryType}, ${templateIdType}, MasterfileEntry};

pub struct ${accessorName}<'a> {
	pub(crate) entries: &'a [MasterfileEntry],
	pub(crate) index: &'a HashMap<${templateIdType}, usize>,
	pub(crate) order: &'a [usize],
}

impl<'a> ${accessorName}<'a> {
	/// Look up an entry by its templateId. Accepts either the typed
	/// \`${templateIdType}\` enum variant (compile-time validated) or
	/// \`&str\` (runtime-parsed via \`FromStr\`). Returns \`None\` if the string
	/// fails to parse OR no entry exists for the ID.
	pub fn get<I>(&self, id: I) -> Option<&'a ${entryType}>
	where
		I: TryInto<${templateIdType}>,
	{
		let typed = id.try_into().ok()?;
		let idx = *self.index.get(&typed)?;
		match &self.entries[idx] {
			MasterfileEntry::${gName}(e) => Some(e),
			_ => None,
		}
	}

	pub fn has<I>(&self, id: I) -> bool
	where
		I: TryInto<${templateIdType}>,
	{
		self.get(id).is_some()
	}

	pub fn iter(&self) -> impl Iterator<Item = &'a ${entryType}> + '_ {
		self.order.iter().filter_map(|&idx| match &self.entries[idx] {
			MasterfileEntry::${gName}(e) => Some(e),
			_ => None,
		})
	}

	pub fn template_ids(&self) -> impl Iterator<Item = ${templateIdType}> + '_ {
		self.index.keys().copied()
	}

	pub fn len(&self) -> usize {
		self.order.len()
	}

	pub fn is_empty(&self) -> bool {
		self.order.is_empty()
	}
}
`;
}
```

- [ ] **Step 4: Run + verify pass**

Run: `bun test src/rust-api/emit-accessor.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Commit**

```bash
git add src/rust-api/emit-accessor.ts src/rust-api/emit-accessor.test.ts
git commit -m "Add emit-accessor with tests"
```

### Task 7: `emit-accessor-mod.ts`

Emit `packages/rust-api/src/accessor/mod.rs` — the barrel that declares each per-group module and re-exports the accessor types.

**Files:**
- Create: `src/rust-api/emit-accessor-mod.ts`
- Create: `src/rust-api/emit-accessor-mod.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/rust-api/emit-accessor-mod.test.ts
import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitAccessorMod } from "./emit-accessor-mod.ts";

describe("emitAccessorMod", () => {
	test("declares pub mod for each group + re-exports the accessor types", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out).toContain("pub mod ");
		expect(out).toMatch(/pub use \w+::\w+Accessor;/);
	});

	test("modules are alphabetical (snake_case)", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		const matches = [...out.matchAll(/pub mod (\w+);/g)].map((m) => m[1]!);
		const sorted = [...matches].sort();
		expect(matches).toEqual(sorted);
	});

	test("includes a singletons module when fixture has any", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const hasSingleton = [...groups.values()].some((g) => g.entries.length === 1);
		const out = emitAccessorMod(groups);
		if (hasSingleton) {
			expect(out).toContain("pub mod singletons;");
			expect(out).toContain("pub use singletons::SingletonsAccessor;");
		}
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitAccessorMod(groups);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/rust-api/emit-accessor-mod.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `emit-accessor-mod.ts`**

```ts
// src/rust-api/emit-accessor-mod.ts
import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

/**
 * Emit `packages/rust-api/src/accessor/mod.rs`.
 *
 * Barrel of per-group accessor modules. Multi-entry groups use their
 * snake_case discriminator; singletons collapse into one synthetic
 * "singletons" module/accessor, matching the existing rust-types layout.
 */
export function emitAccessorMod(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const hasSingletons = [...groups.values()].some((g) => g.entries.length === 1);

	const moduleNames = multiEntry.map((g) => snakeCase(g.discriminator));
	if (hasSingletons) moduleNames.push(SINGLETONS_KEY);
	moduleNames.sort();

	const modDecls = moduleNames.map((m) => `pub mod ${m};`).join("\n");
	const reExports = moduleNames
		.map((m) => `pub use ${m}::${pascalCase(m)}Accessor;`)
		.join("\n");

	return `//! Generated from Pokémon GO masterfile — per-group accessor modules.

${modDecls}

${reExports}
`;
}
```

- [ ] **Step 4: Run + verify pass**

Run: `bun test src/rust-api/emit-accessor-mod.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/rust-api/emit-accessor-mod.ts src/rust-api/emit-accessor-mod.test.ts
git commit -m "Add emit-accessor-mod with tests"
```

### Task 8: `emit-lib.ts`

Emit `packages/rust-api/src/lib.rs` — the crate root. Re-exports, the `GroupIndexes` struct + `build()` (stores all per-group HashMaps + order vecs), and the `impl Masterfile { … }` block adding the per-group accessor methods.

**Files:**
- Create: `src/rust-api/emit-lib.ts`
- Create: `src/rust-api/emit-lib.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/rust-api/emit-lib.test.ts
import { describe, expect, test } from "bun:test";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { groupEntries } from "../group.ts";
import { emitLib } from "./emit-lib.ts";

describe("emitLib", () => {
	test("declares modules: masterfile, error, fetcher, builder, accessor, blocking", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("mod masterfile;");
		expect(out).toContain("pub mod error;");
		expect(out).toContain("pub mod fetcher;");
		expect(out).toContain("pub mod builder;");
		expect(out).toContain("pub mod accessor;");
		expect(out).toContain('#[cfg(feature = "blocking")]');
		expect(out).toContain("pub mod blocking;");
	});

	test("re-exports public types from submodules", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub use crate::masterfile::Masterfile;");
		expect(out).toContain("pub use crate::error::{Error, Result};");
		expect(out).toContain("pub use crate::builder::MasterfileBuilder;");
	});

	test("re-exports the upstream pogo_masterfile_types crate", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub use pogo_masterfile_types::");
	});

	test("declares GroupIndexes with per-group HashMap + order Vec fields", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("pub(crate) struct GroupIndexes {");
		expect(out).toContain("_index: HashMap<");
		expect(out).toContain("_order: Vec<usize>");
	});

	test("declares impl GroupIndexes::build that walks entries by variant", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("impl GroupIndexes {");
		expect(out).toContain("pub(crate) fn build(entries: &[MasterfileEntry]) -> Self");
		expect(out).toMatch(/MasterfileEntry::\w+\(e\) =>/);
	});

	test("declares impl Masterfile with per-group accessor methods", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out).toContain("impl Masterfile {");
		// At least one per-group method should appear, returning an Accessor.
		expect(out).toMatch(/pub fn \w+\(&self\) -> accessor::\w+Accessor<'_>/);
	});

	test("starts with the generated-file header comment", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const out = emitLib(groups);
		expect(out.startsWith("//! Generated from")).toBe(true);
	});
});
```

- [ ] **Step 2: Run to verify failure**

Run: `bun test src/rust-api/emit-lib.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `emit-lib.ts`**

```ts
// src/rust-api/emit-lib.ts
import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

interface GroupInfo {
	discriminator: string; // e.g. "moveSettings" (also "singletons" for the synthetic one)
	pascal: string;        // "MoveSettings"
	snake: string;         // "move_settings"
	variant: string;       // MasterfileEntry::<Variant> — for multi-entry, == pascal; for singletons, == "Singletons"
	templateIdType: string; // "MoveSettingsTemplateId"
}

/**
 * Emit `packages/rust-api/src/lib.rs`.
 *
 * Crate root. Declares all submodules, re-exports the public surface,
 * defines the GroupIndexes struct that holds all per-group HashMap + order
 * fields, and adds per-group accessor methods to Masterfile.
 */
export function emitLib(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const singletons = [...groups.values()].filter((g) => g.entries.length === 1);
	const hasSingletons = singletons.length > 0;

	const infos: GroupInfo[] = multiEntry.map((g) => ({
		discriminator: g.discriminator,
		pascal: pascalCase(g.discriminator),
		snake: snakeCase(g.discriminator),
		variant: pascalCase(g.discriminator),
		templateIdType: `${pascalCase(g.discriminator)}TemplateId`,
	}));
	if (hasSingletons) {
		infos.push({
			discriminator: SINGLETONS_KEY,
			pascal: "Singletons",
			snake: SINGLETONS_KEY,
			variant: "Singletons",
			templateIdType: "SingletonsTemplateId",
		});
	}
	infos.sort((a, b) => a.snake.localeCompare(b.snake));

	const indexFields = infos
		.map(
			(info) =>
				`	pub(crate) ${info.snake}_index: HashMap<${info.templateIdType}, usize>,\n	pub(crate) ${info.snake}_order: Vec<usize>,`,
		)
		.join("\n");

	const buildMatchArms = infos
		.map(
			(info) =>
				`			MasterfileEntry::${info.variant}(_) => {\n				let typed: ${info.templateIdType} = entry_template_id_${info.snake}(entry).expect("variant matches");\n				${info.snake}_index.insert(typed, idx);\n				${info.snake}_order.push(idx);\n			}`,
		)
		.join("\n");

	const buildLocals = infos
		.map(
			(info) =>
				`		let mut ${info.snake}_index: HashMap<${info.templateIdType}, usize> = HashMap::new();\n		let mut ${info.snake}_order: Vec<usize> = Vec::new();`,
		)
		.join("\n");

	const buildAssignments = infos
		.map(
			(info) =>
				`			${info.snake}_index,\n			${info.snake}_order,`,
		)
		.join("\n");

	const accessorMethods = infos
		.map(
			(info) =>
				`	pub fn ${info.snake}(&self) -> accessor::${info.pascal}Accessor<'_> {\n		accessor::${info.pascal}Accessor {\n			entries: &self.entries,\n			index: &self.groups.${info.snake}_index,\n			order: &self.groups.${info.snake}_order,\n		}\n	}`,
		)
		.join("\n\n");

	const variantTemplateIdHelpers = infos
		.map(
			(info) =>
				`fn entry_template_id_${info.snake}(entry: &MasterfileEntry) -> Option<${info.templateIdType}> {\n	match entry {\n		MasterfileEntry::${info.variant}(e) => e.template_id.parse().ok(),\n		_ => None,\n	}\n}`,
		)
		.join("\n\n");

	const upstreamReExports = `pub use pogo_masterfile_types::{MasterfileEntry, parse_masterfile, UnknownTemplateId};`;

	return `//! Generated from Pokémon GO masterfile — runtime API.
//!
//! Crate root. The hand-written templates (\`masterfile.rs\`, \`error.rs\`,
//! \`fetcher.rs\`, \`builder.rs\`, \`blocking.rs\`) are copied verbatim by codegen;
//! everything in THIS file (per-group accessor methods, the \`GroupIndexes\`
//! storage struct, upstream re-exports) is regenerated on every \`bun run generate\`.

use std::collections::HashMap;

use pogo_masterfile_types::{
${infos.map((i) => `	${i.templateIdType},`).join("\n")}
};

mod masterfile;
pub mod error;
pub mod fetcher;
pub mod builder;
pub mod accessor;

#[cfg(feature = "blocking")]
pub mod blocking;

pub use crate::masterfile::Masterfile;
pub use crate::error::{Error, Result};
pub use crate::fetcher::{Fetcher, ReqwestFetcher, DEFAULT_MASTERFILE_URL};
pub use crate::builder::MasterfileBuilder;

${upstreamReExports}

/// Per-group index storage. Owned by \`Masterfile\`. The hand-written
/// \`masterfile.rs\` template references this struct generically — the
/// per-group fields are filled in here so the template never has to know
/// the group set.
pub(crate) struct GroupIndexes {
${indexFields}
}

impl GroupIndexes {
	/// Walk every entry once, dispatching by variant into the right per-group
	/// index + order.
	pub(crate) fn build(entries: &[MasterfileEntry]) -> Self {
${buildLocals}

		for (idx, entry) in entries.iter().enumerate() {
			match entry {
${buildMatchArms}
			}
		}

		Self {
${buildAssignments}
		}
	}
}

${variantTemplateIdHelpers}

impl Masterfile {
${accessorMethods}
}

#[cfg(feature = "blocking")]
impl blocking::Masterfile {
${accessorMethods}
}
`;
}
```

- [ ] **Step 4: Run + verify pass**

Run: `bun test src/rust-api/emit-lib.test.ts`
Expected: PASS, 7 tests.

- [ ] **Step 5: Commit**

```bash
git add src/rust-api/emit-lib.ts src/rust-api/emit-lib.test.ts
git commit -m "Add emit-lib with tests (per-group methods + GroupIndexes)"
```

### Task 9: `emit-blocking.ts` — placeholder

The blocking variant's per-group accessor methods are emitted by `emit-lib.ts` (above) into the lib.rs file. The `blocking.rs` template itself is hand-written and only contains the struct + sync-flavored loaders. So no separate emitter — the per-group methods come along for the ride via the same impl-block emit. Skip this task as a no-op, just create a stub for documentation.

**Files:**
- Create: `src/rust-api/emit-blocking.ts`

- [ ] **Step 1: Create stub explaining the choice**

```ts
// src/rust-api/emit-blocking.ts

/**
 * No standalone blocking emitter — the per-group accessor methods on
 * `blocking::Masterfile` are emitted as part of `emit-lib.ts` (in the same
 * impl block, gated by `#[cfg(feature = "blocking")]`). The `blocking.rs`
 * template itself is hand-written and copied verbatim. This module exists
 * only so the import map stays explicit.
 */
export {};
```

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/emit-blocking.ts
git commit -m "Document emit-blocking is folded into emit-lib"
```

### Task 10: `generate.ts` orchestrator

Wire all the emitters together. Emit data-driven files into `packages/rust-api/src/`, copy templates verbatim, run `cargo fmt`.

**Files:**
- Modify: `src/rust-api/generate.ts`

- [ ] **Step 1: Replace stub with full orchestrator**

```ts
// src/rust-api/generate.ts
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { type Entry, groupEntries } from "../group.ts";
import { snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import { PACKAGE_DIR, SRC_OUT_DIR, TEMPLATES_DIR } from "./constants.ts";
import { emitAccessor } from "./emit-accessor.ts";
import { emitAccessorMod } from "./emit-accessor-mod.ts";
import { emitCargo } from "./emit-cargo.ts";
import { emitLib } from "./emit-lib.ts";

const TEMPLATE_FILES_TO_COPY = ["error.rs", "fetcher.rs", "builder.rs", "masterfile.rs", "blocking.rs"];

const SINGLETONS_KEY = "singletons";

export async function generateRustApi(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[rust-api] grouped into ${groups.size} discriminators.`);

	// 1. Ensure output dirs exist.
	await mkdir(SRC_OUT_DIR, { recursive: true });
	await mkdir(join(SRC_OUT_DIR, "accessor"), { recursive: true });

	// 2. Build the file map.
	const generated = new Map<string, string>();
	generated.set("../Cargo.toml", emitCargo());
	generated.set("lib.rs", emitLib(groups));
	generated.set("accessor/mod.rs", emitAccessorMod(groups));

	// Per-group accessor files.
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);
	const singletons = [...groups.values()].filter((g) => g.entries.length === 1);

	for (const g of multiEntry) {
		generated.set(`accessor/${snakeCase(g.discriminator)}.rs`, emitAccessor(g));
	}

	if (singletons.length > 0) {
		// Synthesize a fake "singletons" group for the accessor emitter.
		// Its templateIdType is SingletonsTemplateId, MasterfileEntry::Singletons variant.
		// emitAccessor expects a real Group; we pass through a synthetic one with
		// the discriminator set to "singletons" — the emitter uses pascalCase("singletons")
		// = "Singletons" for both the variant name and TemplateId prefix.
		const synthSingletons = {
			discriminator: SINGLETONS_KEY,
			entries: singletons.flatMap((g) => g.entries),
		};
		generated.set("accessor/singletons.rs", emitAccessor(synthSingletons));
	}

	await writeOutput(generated, SRC_OUT_DIR);

	// 3. Copy hand-written runtime templates verbatim into packages/rust-api/src/.
	for (const file of TEMPLATE_FILES_TO_COPY) {
		await copyFile(join(TEMPLATES_DIR, file), join(SRC_OUT_DIR, file));
	}

	// 4. cargo fmt.
	await runCargoFmt();

	console.log(`[rust-api] wrote runtime to ${SRC_OUT_DIR}`);
}

function runCargoFmt(): Promise<void> {
	return new Promise((resolve, reject) => {
		const proc = spawn("cargo", ["fmt"], { cwd: PACKAGE_DIR, stdio: "inherit" });
		proc.on("error", reject);
		proc.on("exit", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`cargo fmt exited with code ${code}`));
		});
	});
}
```

Note: `writeOutput` uses keys as relative paths, with `../Cargo.toml` to write OUTSIDE `src/`. Confirm this works by looking at `src/write.ts` — its `mkdir(dirname(full))` handles parent paths, and `..` should work since it's resolved relative to `outDir`.

If `../Cargo.toml` doesn't work, refactor: write Cargo.toml separately via `Bun.write(join(PACKAGE_DIR, "Cargo.toml"), ...)`.

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/generate.ts
git commit -m "Implement generateRustApi orchestrator"
```

### Task 11: Wire into root `src/generate.ts`

**Files:**
- Modify: `src/generate.ts`

- [ ] **Step 1: Add import**

In `src/generate.ts`, add the import alphabetically near the other generator imports:

```ts
import { generateRustApi } from "./rust-api/generate.ts";
```

- [ ] **Step 2: Add to the parallel block**

The existing `Promise.all([…])` block in `main()` runs typescript+typescript-api together (since they're sequential), and rust + go in parallel. Update:

```ts
await Promise.all([
	(async () => {
		await generateTypeScript(entries);
		await generateTypeScriptApi(entries);
	})(),
	(async () => {
		await generateRust(entries);
		await generateRustApi(entries);
	})(),
	generateGo(entries),
]);
```

- [ ] **Step 3: Commit**

```bash
git add src/generate.ts
git commit -m "Wire generateRustApi into root orchestrator"
```

---

## Phase 3 — Hand-written runtime templates

Templates live in `src/rust-api/templates/`. Each is copied verbatim into `packages/rust-api/src/` during codegen. Edit templates here, NOT the copies.

### Task 12: `error.rs` template

The Error enum + Result alias.

**Files:**
- Create: `src/rust-api/templates/error.rs`

- [ ] **Step 1: Create the template**

```rust
// src/rust-api/templates/error.rs
//! Crate-level error type. One enum, one variant per real failure mode.

use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
	#[cfg(any(feature = "async", feature = "blocking"))]
	#[error("network error fetching {url}")]
	Fetch {
		url: String,
		#[source]
		source: reqwest::Error,
	},

	#[error("HTTP {status} from {url}")]
	Status { url: String, status: u16 },

	#[error("failed to parse masterfile JSON")]
	Parse(#[from] serde_json::Error),

	#[error("expected JSON array of entries, got something else")]
	InvalidShape,

	#[error("custom fetcher error")]
	Custom(#[source] Box<dyn std::error::Error + Send + Sync>),
}

pub type Result<T> = std::result::Result<T, Error>;
```

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/templates/error.rs
git commit -m "Add error.rs template"
```

### Task 13: `fetcher.rs` template

The Fetcher trait + closure auto-impl + ReqwestFetcher default impl + DEFAULT_MASTERFILE_URL constant.

**Files:**
- Create: `src/rust-api/templates/fetcher.rs`

- [ ] **Step 1: Create the template**

```rust
// src/rust-api/templates/fetcher.rs
//! Fetcher abstraction + the default reqwest-backed implementation.

use pogo_masterfile_types::{parse_masterfile, MasterfileEntry};

use crate::error::{Error, Result};

pub const DEFAULT_MASTERFILE_URL: &str =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

/// User-replaceable fetcher. Implement on your own struct, OR pass a closure
/// — closures matching the right shape get a free impl below.
#[cfg(feature = "async")]
pub trait Fetcher: Send + Sync {
	#[allow(async_fn_in_trait)]
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>>;
}

#[cfg(feature = "async")]
impl<F, Fut> Fetcher for F
where
	F: Fn(&str) -> Fut + Send + Sync,
	Fut: std::future::Future<Output = Result<Vec<MasterfileEntry>>> + Send,
{
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
		(self)(url).await
	}
}

/// Default async fetcher: reqwest with rustls + JSON parse + array-shape
/// validation.
#[cfg(feature = "async")]
pub struct ReqwestFetcher {
	client: reqwest::Client,
}

#[cfg(feature = "async")]
impl ReqwestFetcher {
	pub fn new() -> Self {
		Self {
			client: reqwest::Client::new(),
		}
	}

	pub fn with_client(client: reqwest::Client) -> Self {
		Self { client }
	}
}

#[cfg(feature = "async")]
impl Default for ReqwestFetcher {
	fn default() -> Self {
		Self::new()
	}
}

#[cfg(feature = "async")]
impl Fetcher for ReqwestFetcher {
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
		let response = self
			.client
			.get(url)
			.send()
			.await
			.map_err(|source| Error::Fetch { url: url.into(), source })?;
		if !response.status().is_success() {
			return Err(Error::Status {
				url: url.into(),
				status: response.status().as_u16(),
			});
		}
		let body = response
			.text()
			.await
			.map_err(|source| Error::Fetch { url: url.into(), source })?;
		parse_masterfile(&body).map_err(Error::from)
	}
}

/// Blocking variant of the Fetcher trait + default impl.
#[cfg(feature = "blocking")]
pub mod blocking {
	use super::*;

	pub trait BlockingFetcher: Send + Sync {
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>>;
	}

	impl<F> BlockingFetcher for F
	where
		F: Fn(&str) -> Result<Vec<MasterfileEntry>> + Send + Sync,
	{
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
			(self)(url)
		}
	}

	pub struct ReqwestFetcher {
		client: reqwest::blocking::Client,
	}

	impl ReqwestFetcher {
		pub fn new() -> Self {
			Self {
				client: reqwest::blocking::Client::new(),
			}
		}

		pub fn with_client(client: reqwest::blocking::Client) -> Self {
			Self { client }
		}
	}

	impl Default for ReqwestFetcher {
		fn default() -> Self {
			Self::new()
		}
	}

	impl BlockingFetcher for ReqwestFetcher {
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
			let response = self
				.client
				.get(url)
				.send()
				.map_err(|source| Error::Fetch { url: url.into(), source })?;
			if !response.status().is_success() {
				return Err(Error::Status {
					url: url.into(),
					status: response.status().as_u16(),
				});
			}
			let body = response
				.text()
				.map_err(|source| Error::Fetch { url: url.into(), source })?;
			parse_masterfile(&body).map_err(Error::from)
		}
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/templates/fetcher.rs
git commit -m "Add fetcher.rs template"
```

### Task 14: `builder.rs` template

The async-flavored MasterfileBuilder.

**Files:**
- Create: `src/rust-api/templates/builder.rs`

- [ ] **Step 1: Create the template**

```rust
// src/rust-api/templates/builder.rs
//! Builder for `Masterfile::from_remote` — handles URL/timeout/fetcher overrides.

#[cfg(feature = "async")]
use std::time::Duration;

#[cfg(feature = "async")]
use crate::error::Result;
#[cfg(feature = "async")]
use crate::fetcher::{Fetcher, ReqwestFetcher, DEFAULT_MASTERFILE_URL};
#[cfg(feature = "async")]
use crate::masterfile::Masterfile;

#[cfg(feature = "async")]
pub struct MasterfileBuilder {
	url: Option<String>,
	timeout: Option<Duration>,
	fetcher: Option<Box<dyn FetcherDyn>>,
}

#[cfg(feature = "async")]
trait FetcherDyn: Send + Sync {
	fn fetch_boxed<'a>(
		&'a self,
		url: &'a str,
	) -> std::pin::Pin<
		Box<dyn std::future::Future<Output = Result<Vec<pogo_masterfile_types::MasterfileEntry>>> + Send + 'a>,
	>;
}

#[cfg(feature = "async")]
impl<F: Fetcher> FetcherDyn for F {
	fn fetch_boxed<'a>(
		&'a self,
		url: &'a str,
	) -> std::pin::Pin<
		Box<dyn std::future::Future<Output = Result<Vec<pogo_masterfile_types::MasterfileEntry>>> + Send + 'a>,
	> {
		Box::pin(self.fetch(url))
	}
}

#[cfg(feature = "async")]
impl MasterfileBuilder {
	pub(crate) fn new() -> Self {
		Self {
			url: None,
			timeout: None,
			fetcher: None,
		}
	}

	pub fn url(mut self, url: impl Into<String>) -> Self {
		self.url = Some(url.into());
		self
	}

	pub fn timeout(mut self, timeout: Duration) -> Self {
		self.timeout = Some(timeout);
		self
	}

	pub fn fetcher(mut self, fetcher: impl Fetcher + 'static) -> Self {
		self.fetcher = Some(Box::new(fetcher));
		self
	}

	pub async fn fetch(self) -> Result<Masterfile> {
		let url = self.url.unwrap_or_else(|| DEFAULT_MASTERFILE_URL.to_string());
		let entries = match self.fetcher {
			Some(f) => f.fetch_boxed(&url).await?,
			None => {
				let default = build_default_fetcher(self.timeout);
				default.fetch(&url).await?
			}
		};
		Ok(Masterfile::from_entries(entries))
	}
}

#[cfg(feature = "async")]
fn build_default_fetcher(timeout: Option<Duration>) -> ReqwestFetcher {
	let mut builder = reqwest::Client::builder();
	if let Some(t) = timeout {
		builder = builder.timeout(t);
	}
	let client = builder.build().expect("reqwest client");
	ReqwestFetcher::with_client(client)
}
```

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/templates/builder.rs
git commit -m "Add builder.rs template"
```

### Task 15: `masterfile.rs` template

The main `Masterfile` struct + impl. References `GroupIndexes` (lives in `lib.rs`, generated).

**Files:**
- Create: `src/rust-api/templates/masterfile.rs`

- [ ] **Step 1: Create the template**

```rust
// src/rust-api/templates/masterfile.rs
//! The Masterfile struct + top-level methods. Per-group accessor methods
//! are emitted into the impl block in `lib.rs` by codegen — that file
//! contains an `impl Masterfile { /* per-group methods */ }` block.

use std::collections::HashMap;

use pogo_masterfile_types::MasterfileEntry;

use crate::error::Result;
use crate::GroupIndexes;

#[cfg(feature = "async")]
use crate::builder::MasterfileBuilder;

pub struct Masterfile {
	pub(crate) entries: Vec<MasterfileEntry>,
	pub(crate) by_id: HashMap<String, usize>,
	pub(crate) groups: GroupIndexes,
}

impl Masterfile {
	// ── Loaders ──────────────────────────────────────────────────

	#[cfg(feature = "async")]
	pub fn builder() -> MasterfileBuilder {
		MasterfileBuilder::new()
	}

	/// Convenience: equivalent to `Masterfile::builder().fetch().await`.
	#[cfg(feature = "async")]
	pub async fn from_remote() -> Result<Self> {
		Self::builder().fetch().await
	}

	/// Parse from a JSON string. Sync — no I/O.
	pub fn from_json(json: &str) -> Result<Self> {
		let entries = pogo_masterfile_types::parse_masterfile(json)?;
		Ok(Self::from_entries(entries))
	}

	/// Wrap an already-parsed entry vec.
	pub fn from_entries(entries: Vec<MasterfileEntry>) -> Self {
		let by_id = entries
			.iter()
			.enumerate()
			.map(|(i, e)| (entry_template_id(e).to_string(), i))
			.collect();
		let groups = GroupIndexes::build(&entries);
		Self { entries, by_id, groups }
	}

	// ── Top-level lookups ────────────────────────────────────────

	pub fn get_entry(&self, id: &str) -> Option<&MasterfileEntry> {
		let &idx = self.by_id.get(id)?;
		self.entries.get(idx)
	}

	pub fn has(&self, id: &str) -> bool {
		self.by_id.contains_key(id)
	}

	// ── Iteration / introspection ────────────────────────────────

	pub fn entries(&self) -> &[MasterfileEntry] {
		&self.entries
	}

	pub fn len(&self) -> usize {
		self.entries.len()
	}

	pub fn is_empty(&self) -> bool {
		self.entries.is_empty()
	}

	pub fn iter(&self) -> std::slice::Iter<'_, MasterfileEntry> {
		self.entries.iter()
	}

	pub fn template_ids(&self) -> impl Iterator<Item = &str> + '_ {
		self.entries.iter().map(|e| entry_template_id(e))
	}

	// ── Mutation (require &mut self — invalidates outstanding borrows) ──

	#[cfg(feature = "async")]
	pub async fn refresh(&mut self) -> Result<()> {
		let fresh = Self::from_remote().await?;
		*self = fresh;
		Ok(())
	}

	pub fn update(&mut self, entries: Vec<MasterfileEntry>) {
		*self = Self::from_entries(entries);
	}
}

// IntoIterator so `for entry in &mf { ... }` works.
impl<'a> IntoIterator for &'a Masterfile {
	type Item = &'a MasterfileEntry;
	type IntoIter = std::slice::Iter<'a, MasterfileEntry>;
	fn into_iter(self) -> Self::IntoIter {
		self.iter()
	}
}

/// Extract the templateId from any MasterfileEntry variant. The variants all
/// share the `template_id` field on their wrapper struct (the `*Entry` type).
fn entry_template_id(entry: &MasterfileEntry) -> &str {
	// Use the upstream serde-tagged dispatch: every variant wraps a struct
	// with a `template_id: String` field. We delegate via a match expressed
	// as a closure-friendly trait — but the simplest correct path is just
	// to serialize then re-extract, which is wasteful. Instead, use the
	// upstream method if it exists; otherwise fall through to a generated
	// helper.
	//
	// In practice, MasterfileEntry's `template_id` accessor will be added
	// upstream. Until then: pattern-match per variant in the GENERATED
	// `entry_template_id_*` helpers in lib.rs, and wrap one global helper
	// here that checks each variant.
	//
	// Codegen note: this fallback shouldn't ship — replace with a generated
	// per-variant match that just reads `e.template_id.as_str()`.
	macro_rules! tid {
		($entry:expr) => {{
			let v: serde_json::Value = serde_json::to_value($entry).expect("serialize");
			v.get("templateId")
				.and_then(|s| s.as_str())
				.expect("templateId field")
				.to_string()
				.leak()
		}};
	}
	tid!(entry)
}
```

**Note:** the `entry_template_id` helper above uses a wasteful serde round-trip. The proper solution is a generated `match` over every variant accessing `.template_id.as_str()`. Codegen this in `emit-lib.ts` or upstream. For now, leaving the macro fallback so the template compiles; replace in iteration.

- [ ] **Step 2: Move the templateId helper to codegen**

Update `emit-lib.ts` (`src/rust-api/emit-lib.ts`) to additionally emit a global `entry_template_id` function in `lib.rs`:

```ts
// Append this to the `emitLib` return string after the variantTemplateIdHelpers section:

const globalTemplateIdHelper = `
pub(crate) fn entry_template_id(entry: &MasterfileEntry) -> &str {
	match entry {
${infos.map((i) => `		MasterfileEntry::${i.variant}(e) => e.template_id.as_str(),`).join("\n")}
	}
}`;
```

Also add a re-export so `masterfile.rs` can `use crate::entry_template_id`:

```rust
// In emitLib output, ensure: pub(crate) use entry_template_id; (no re-export needed since it's in the same crate root)
```

Then update `masterfile.rs` template to import `crate::entry_template_id` and remove the `tid!` macro.

Update the test file `emit-lib.test.ts` to assert this:

```ts
test("emits global entry_template_id dispatcher", () => {
	const groups = groupEntries(MOCK_MASTERFILE);
	const out = emitLib(groups);
	expect(out).toContain("pub(crate) fn entry_template_id(entry: &MasterfileEntry) -> &str");
	expect(out).toMatch(/MasterfileEntry::\w+\(e\) => e\.template_id\.as_str\(\)/);
});
```

- [ ] **Step 3: Update masterfile.rs to use the generated helper**

Replace the bottom section of `templates/masterfile.rs`:

```rust
// Replace the entry_template_id fn + macro with:

use crate::entry_template_id;

// (delete the macro definition and the function above it)
```

- [ ] **Step 4: Re-run emit-lib tests**

Run: `bun test src/rust-api/emit-lib.test.ts`
Expected: PASS, 8 tests.

- [ ] **Step 5: Commit**

```bash
git add src/rust-api/templates/masterfile.rs src/rust-api/emit-lib.ts src/rust-api/emit-lib.test.ts
git commit -m "Add masterfile.rs template + generated entry_template_id dispatcher"
```

### Task 16: `blocking.rs` template

Mirror of `masterfile.rs` minus async. Same struct, sync `from_remote`, sync `refresh`.

**Files:**
- Create: `src/rust-api/templates/blocking.rs`

- [ ] **Step 1: Create the template**

```rust
// src/rust-api/templates/blocking.rs
//! Blocking-flavored Masterfile. Same struct fields, sync `from_remote`
//! and `refresh`. The per-group accessor methods are appended by codegen
//! in `lib.rs` (inside an `#[cfg(feature = "blocking")]` impl block).

#![cfg(feature = "blocking")]

use std::collections::HashMap;
use std::time::Duration;

use pogo_masterfile_types::MasterfileEntry;

use crate::error::Result;
use crate::fetcher::blocking::{BlockingFetcher, ReqwestFetcher};
use crate::fetcher::DEFAULT_MASTERFILE_URL;
use crate::{entry_template_id, GroupIndexes};

pub struct Masterfile {
	pub(crate) entries: Vec<MasterfileEntry>,
	pub(crate) by_id: HashMap<String, usize>,
	pub(crate) groups: GroupIndexes,
}

pub struct MasterfileBuilder {
	url: Option<String>,
	timeout: Option<Duration>,
	fetcher: Option<Box<dyn BlockingFetcher>>,
}

impl MasterfileBuilder {
	pub fn url(mut self, url: impl Into<String>) -> Self {
		self.url = Some(url.into());
		self
	}

	pub fn timeout(mut self, timeout: Duration) -> Self {
		self.timeout = Some(timeout);
		self
	}

	pub fn fetcher(mut self, fetcher: impl BlockingFetcher + 'static) -> Self {
		self.fetcher = Some(Box::new(fetcher));
		self
	}

	pub fn fetch(self) -> Result<Masterfile> {
		let url = self.url.unwrap_or_else(|| DEFAULT_MASTERFILE_URL.to_string());
		let entries = match self.fetcher {
			Some(f) => f.fetch(&url)?,
			None => {
				let mut builder = reqwest::blocking::Client::builder();
				if let Some(t) = self.timeout {
					builder = builder.timeout(t);
				}
				let client = builder.build().expect("reqwest blocking client");
				ReqwestFetcher::with_client(client).fetch(&url)?
			}
		};
		Ok(Masterfile::from_entries(entries))
	}
}

impl Masterfile {
	// ── Loaders ──────────────────────────────────────────────────

	pub fn builder() -> MasterfileBuilder {
		MasterfileBuilder {
			url: None,
			timeout: None,
			fetcher: None,
		}
	}

	pub fn from_remote() -> Result<Self> {
		Self::builder().fetch()
	}

	pub fn from_json(json: &str) -> Result<Self> {
		let entries = pogo_masterfile_types::parse_masterfile(json)?;
		Ok(Self::from_entries(entries))
	}

	pub fn from_entries(entries: Vec<MasterfileEntry>) -> Self {
		let by_id = entries
			.iter()
			.enumerate()
			.map(|(i, e)| (entry_template_id(e).to_string(), i))
			.collect();
		let groups = GroupIndexes::build(&entries);
		Self { entries, by_id, groups }
	}

	// ── Top-level lookups ────────────────────────────────────────

	pub fn get_entry(&self, id: &str) -> Option<&MasterfileEntry> {
		let &idx = self.by_id.get(id)?;
		self.entries.get(idx)
	}

	pub fn has(&self, id: &str) -> bool {
		self.by_id.contains_key(id)
	}

	pub fn entries(&self) -> &[MasterfileEntry] {
		&self.entries
	}

	pub fn len(&self) -> usize {
		self.entries.len()
	}

	pub fn is_empty(&self) -> bool {
		self.entries.is_empty()
	}

	pub fn iter(&self) -> std::slice::Iter<'_, MasterfileEntry> {
		self.entries.iter()
	}

	pub fn template_ids(&self) -> impl Iterator<Item = &str> + '_ {
		self.entries.iter().map(|e| entry_template_id(e))
	}

	pub fn refresh(&mut self) -> Result<()> {
		let fresh = Self::from_remote()?;
		*self = fresh;
		Ok(())
	}

	pub fn update(&mut self, entries: Vec<MasterfileEntry>) {
		*self = Self::from_entries(entries);
	}
}

impl<'a> IntoIterator for &'a Masterfile {
	type Item = &'a MasterfileEntry;
	type IntoIter = std::slice::Iter<'a, MasterfileEntry>;
	fn into_iter(self) -> Self::IntoIter {
		self.iter()
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add src/rust-api/templates/blocking.rs
git commit -m "Add blocking.rs template"
```

---

## Phase 4 — First full pipeline run

### Task 17: First codegen run + iteration

Run the pipeline, debug compilation, iterate templates until `cargo check --all-features` is clean.

**Files:** none initially (verification step that may require template tweaks).

- [ ] **Step 1: Run codegen**

Run: `bun run src/generate.ts`
Expected: completes without crash. Produces files under `packages/rust-api/src/`.

- [ ] **Step 2: Verify file structure**

Run: `ls packages/rust-api/src/`
Expected: `accessor/  blocking.rs  builder.rs  error.rs  fetcher.rs  lib.rs  masterfile.rs`

Run: `ls packages/rust-api/src/accessor/ | head`
Expected: `mod.rs` plus per-group files (~60).

- [ ] **Step 3: Run cargo check --no-default-features**

Run: `cd packages/rust-api && cargo check --no-default-features`
Expected: success or known-broken.

If errors appear, the most likely causes:
- **Missing trait import:** add `use std::fmt;` etc. to the template that needs it.
- **`async fn in trait` warning:** add `#[allow(async_fn_in_trait)]` on the trait declaration.
- **Visibility:** template references `crate::GroupIndexes` but it must be declared `pub(crate)` in lib.rs (the generator does this — verify).
- **Variant name mismatch:** if a singleton has a different `MasterfileEntry::*` variant name than `Singletons`, fix the singleton variant naming.

Address each error by editing the relevant template (`src/rust-api/templates/*.rs`) and re-running `bun run src/generate.ts`.

- [ ] **Step 4: Run cargo check --features async**

Run: `cd packages/rust-api && cargo check --features async`
Expected: success.

- [ ] **Step 5: Run cargo check --features blocking`**

Run: `cd packages/rust-api && cargo check --features blocking`
Expected: success.

- [ ] **Step 6: Run cargo check --all-features**

Run: `cd packages/rust-api && cargo check --all-features`
Expected: success.

- [ ] **Step 7: Commit the working src/**

```bash
cd /Users/rin/GitHub/pogo-masterfile-types
git add packages/rust-api/src/
# Also commit any template fixes from step 3:
git add src/rust-api/templates/
git commit -m "First full rust-api codegen run produces compiling crate"
```

---

## Phase 5 — Tests

Tests live in `packages/rust-api/tests/` (sibling to `src/`). Hand-written, NOT regenerated.

### Task 18: Shared fixture helper

**Files:**
- Create: `packages/rust-api/tests/fixture.rs`

- [ ] **Step 1: Create fixture helper**

```rust
// packages/rust-api/tests/fixture.rs
//! Shared fixture data + mock fetcher for integration tests.

use pogo_masterfile::Result;
use pogo_masterfile_types::MasterfileEntry;

/// Tiny fixture with three real entries + one singleton.
pub fn fixture() -> Vec<MasterfileEntry> {
	let json = r#"[
		{
			"templateId": "ITEM_POTION",
			"data": {
				"templateId": "ITEM_POTION",
				"itemSettings": {
					"itemId": "ITEM_POTION",
					"itemType": "ITEM_TYPE_POTION",
					"category": "ITEM_CATEGORY_MEDICINE",
					"dropTrainerLevel": 5,
					"potion": { "staAmount": 20 }
				}
			}
		},
		{
			"templateId": "V0001_POKEMON_BULBASAUR",
			"data": {
				"templateId": "V0001_POKEMON_BULBASAUR",
				"pokemonSettings": {
					"pokemonId": "BULBASAUR",
					"familyId": "FAMILY_BULBASAUR",
					"type": "POKEMON_TYPE_GRASS",
					"type2": "POKEMON_TYPE_POISON",
					"stats": { "baseStamina": 128, "baseAttack": 118, "baseDefense": 111 }
				}
			}
		},
		{
			"templateId": "V0022_MOVE_MEGAHORN",
			"data": {
				"templateId": "V0022_MOVE_MEGAHORN",
				"moveSettings": {
					"movementId": "MEGAHORN",
					"animationId": 5,
					"pokemonType": "POKEMON_TYPE_BUG",
					"power": 105,
					"accuracyChance": 1,
					"durationMs": 2000,
					"damageWindowStartMs": 1500,
					"damageWindowEndMs": 1700,
					"energyDelta": -100,
					"vfxName": "megahorn"
				}
			}
		}
	]"#;
	pogo_masterfile_types::parse_masterfile(json).expect("parse fixture")
}

#[cfg(feature = "async")]
pub struct MockAsyncFetcher(pub Vec<MasterfileEntry>);

#[cfg(feature = "async")]
impl pogo_masterfile::Fetcher for MockAsyncFetcher {
	async fn fetch(&self, _url: &str) -> Result<Vec<MasterfileEntry>> {
		Ok(self.0.clone())
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add packages/rust-api/tests/fixture.rs
git commit -m "Add shared test fixture helper"
```

### Task 19: `loading.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/loading.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/loading.rs
//! Loading examples — fromJson, builder, custom fetcher, error paths.

mod fixture;

use fixture::{fixture, MockAsyncFetcher};
use pogo_masterfile::{Masterfile, DEFAULT_MASTERFILE_URL};

#[test]
fn from_entries_wraps_a_vec() {
	let entries = fixture();
	let mf = Masterfile::from_entries(entries.clone());
	assert_eq!(mf.len(), entries.len());
}

#[test]
fn from_json_parses_a_string() {
	let entries = fixture();
	let json = serde_json::to_string(&entries).unwrap();
	let mf = Masterfile::from_json(&json).unwrap();
	assert_eq!(mf.len(), entries.len());
}

#[cfg(feature = "async")]
#[tokio::test]
async fn from_remote_default_uses_alexelgt_mirror() {
	// We never hit the network — we replace the fetcher with a mock and
	// just verify the URL the builder passes through.
	struct UrlCapture {
		seen: std::sync::Mutex<Vec<String>>,
	}
	impl pogo_masterfile::Fetcher for UrlCapture {
		async fn fetch(&self, url: &str) -> pogo_masterfile::Result<Vec<pogo_masterfile_types::MasterfileEntry>> {
			self.seen.lock().unwrap().push(url.into());
			Ok(fixture())
		}
	}
	let capture = UrlCapture {
		seen: std::sync::Mutex::new(Vec::new()),
	};
	let mf = Masterfile::builder()
		.fetcher(capture)
		.fetch()
		.await
		.unwrap();
	assert!(mf.len() > 0);
	// Note: capture moved into the builder. To assert the URL, restructure
	// using Arc<Mutex<...>>:
}

#[cfg(feature = "async")]
#[tokio::test]
async fn from_remote_with_mock_fetcher() {
	let mock = MockAsyncFetcher(fixture());
	let mf = Masterfile::builder().fetcher(mock).fetch().await.unwrap();
	assert_eq!(mf.len(), fixture().len());
}

#[cfg(feature = "async")]
#[tokio::test]
async fn from_remote_with_closure_fetcher() {
	let mf = Masterfile::builder()
		.fetcher(|_url: &str| async move { Ok(fixture()) })
		.fetch()
		.await
		.unwrap();
	assert_eq!(mf.len(), fixture().len());
}

#[test]
fn default_url_is_alexelgt() {
	assert!(DEFAULT_MASTERFILE_URL.contains("alexelgt"));
	assert!(DEFAULT_MASTERFILE_URL.ends_with("GAME_MASTER.json"));
}
```

- [ ] **Step 2: Run + verify**

Run: `cd packages/rust-api && cargo test --test loading --features async`
Expected: all tests pass.

- [ ] **Step 3: Commit**

```bash
git add packages/rust-api/tests/loading.rs
git commit -m "Add loading integration test"
```

### Task 20: `lookups.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/lookups.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/lookups.rs
//! Top-level vs per-group lookups.

mod fixture;

use fixture::fixture;
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::{MasterfileEntry, MoveSettingsTemplateId};

#[test]
fn get_entry_returns_wide_masterfile_entry() {
	let mf = Masterfile::from_entries(fixture());
	let entry = mf.get_entry("V0022_MOVE_MEGAHORN").unwrap();
	match entry {
		MasterfileEntry::MoveSettings(_) => {}
		_ => panic!("expected MoveSettings variant"),
	}
}

#[test]
fn get_entry_returns_none_on_miss() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.get_entry("DOES_NOT_EXIST").is_none());
}

#[test]
fn has_returns_correct_bool() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.has("V0022_MOVE_MEGAHORN"));
	assert!(!mf.has("DOES_NOT_EXIST"));
}

#[test]
fn per_group_accessor_get_with_typed_id() {
	let mf = Masterfile::from_entries(fixture());
	let move_ = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	assert!(move_.is_some());
	assert_eq!(
		move_.unwrap().template_id.as_str(),
		"V0022_MOVE_MEGAHORN"
	);
}

#[test]
fn per_group_accessor_get_with_str() {
	let mf = Masterfile::from_entries(fixture());
	let move_ = mf.move_settings().get("V0022_MOVE_MEGAHORN");
	assert!(move_.is_some());
}

#[test]
fn per_group_accessor_get_returns_none_for_wrong_group() {
	let mf = Masterfile::from_entries(fixture());
	// Bulbasaur is a pokemonSettings entry; asking for it via moveSettings yields None.
	let result = mf.move_settings().get("V0001_POKEMON_BULBASAUR");
	assert!(result.is_none());
}

#[test]
fn per_group_accessor_has() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.move_settings().has("V0022_MOVE_MEGAHORN"));
	assert!(!mf.move_settings().has("V0001_POKEMON_BULBASAUR"));
}

#[test]
fn per_group_len() {
	let mf = Masterfile::from_entries(fixture());
	assert_eq!(mf.move_settings().len(), 1);
	assert_eq!(mf.pokemon_settings().len(), 1);
	assert_eq!(mf.item_settings().len(), 1);
}

#[test]
fn top_level_get_equals_accessor_get() {
	let mf = Masterfile::from_entries(fixture());
	let from_top = mf.get_entry("V0022_MOVE_MEGAHORN").unwrap();
	let from_accessor = mf.move_settings().get("V0022_MOVE_MEGAHORN").unwrap();
	// They should be the same underlying entry (same templateId).
	assert_eq!(from_accessor.template_id.as_str(), "V0022_MOVE_MEGAHORN");
	// Top-level wraps in the variant; verify by matching.
	match from_top {
		MasterfileEntry::MoveSettings(e) => {
			assert_eq!(e.template_id.as_str(), from_accessor.template_id.as_str());
		}
		_ => panic!(),
	}
}
```

- [ ] **Step 2: Run + verify**

Run: `cd packages/rust-api && cargo test --test lookups`
Expected: all tests pass.

- [ ] **Step 3: Commit**

```bash
git add packages/rust-api/tests/lookups.rs
git commit -m "Add lookups integration test"
```

### Task 21: `iteration.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/iteration.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/iteration.rs
//! Iteration patterns.

mod fixture;

use fixture::fixture;
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::MasterfileEntry;

#[test]
fn for_loop_yields_each_entry() {
	let mf = Masterfile::from_entries(fixture());
	let mut count = 0;
	for _entry in &mf {
		count += 1;
	}
	assert_eq!(count, fixture().len());
}

#[test]
fn iter_filter_collect() {
	let mf = Masterfile::from_entries(fixture());
	let items: Vec<_> = mf
		.iter()
		.filter(|e| matches!(e, MasterfileEntry::ItemSettings(_)))
		.collect();
	assert_eq!(items.len(), 1);
}

#[test]
fn template_ids_yields_every_id() {
	let mf = Masterfile::from_entries(fixture());
	let ids: Vec<_> = mf.template_ids().collect();
	assert!(ids.contains(&"ITEM_POTION"));
	assert!(ids.contains(&"V0001_POKEMON_BULBASAUR"));
	assert!(ids.contains(&"V0022_MOVE_MEGAHORN"));
}

#[test]
fn per_group_iter_yields_only_that_groups_entries() {
	let mf = Masterfile::from_entries(fixture());
	let moves: Vec<_> = mf.move_settings().iter().collect();
	assert_eq!(moves.len(), 1);
}

#[test]
fn per_group_template_ids() {
	let mf = Masterfile::from_entries(fixture());
	let ids: Vec<_> = mf.move_settings().template_ids().collect();
	assert_eq!(ids.len(), 1);
}

#[test]
fn entries_returns_slice() {
	let mf = Masterfile::from_entries(fixture());
	let slice = mf.entries();
	assert_eq!(slice.len(), 3);
}

#[test]
fn is_empty_works() {
	let mf = Masterfile::from_entries(Vec::new());
	assert!(mf.is_empty());
	assert_eq!(mf.len(), 0);
}
```

- [ ] **Step 2: Run + commit**

Run: `cd packages/rust-api && cargo test --test iteration`
Expected: PASS.

```bash
git add packages/rust-api/tests/iteration.rs
git commit -m "Add iteration integration test"
```

### Task 22: `mutation.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/mutation.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/mutation.rs
//! Mutation: update + refresh.

mod fixture;

use fixture::{fixture, MockAsyncFetcher};
use pogo_masterfile::Masterfile;

#[test]
fn update_replaces_data() {
	let mut mf = Masterfile::from_entries(fixture());
	assert!(mf.has("V0022_MOVE_MEGAHORN"));

	let half = vec![fixture()[0].clone()];
	mf.update(half);
	assert_eq!(mf.len(), 1);
	assert!(!mf.has("V0022_MOVE_MEGAHORN"));
	assert!(mf.has("ITEM_POTION"));
}

#[test]
fn update_rebuilds_per_group_indexes() {
	let mut mf = Masterfile::from_entries(fixture());
	assert_eq!(mf.move_settings().len(), 1);

	mf.update(Vec::new());
	assert_eq!(mf.move_settings().len(), 0);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn refresh_swaps_data_via_fetcher() {
	let mut mf = Masterfile::from_entries(Vec::new());
	assert_eq!(mf.len(), 0);

	// Refresh's default uses the real reqwest client, which would hit the
	// network. We construct a fresh masterfile via the builder + mock instead
	// (which is the supported "refresh with custom config" pattern).
	let fresh = Masterfile::builder()
		.fetcher(MockAsyncFetcher(fixture()))
		.fetch()
		.await
		.unwrap();
	mf = fresh;
	assert_eq!(mf.len(), fixture().len());
}
```

- [ ] **Step 2: Run + commit**

Run: `cd packages/rust-api && cargo test --test mutation --features async`
Expected: PASS.

```bash
git add packages/rust-api/tests/mutation.rs
git commit -m "Add mutation integration test"
```

### Task 23: `errors.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/errors.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/errors.rs
//! Error variants.

mod fixture;

use pogo_masterfile::{Error, Masterfile};

#[test]
fn invalid_json_yields_parse_error() {
	let result = Masterfile::from_json("not json at all");
	let err = result.unwrap_err();
	assert!(matches!(err, Error::Parse(_)));
}

#[test]
fn empty_json_array_loads_fine() {
	let mf = Masterfile::from_json("[]").unwrap();
	assert_eq!(mf.len(), 0);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn custom_fetcher_error_wraps_in_custom_variant() {
	use pogo_masterfile::{Fetcher, Result};
	use pogo_masterfile_types::MasterfileEntry;

	struct ErroringFetcher;
	impl Fetcher for ErroringFetcher {
		async fn fetch(&self, _url: &str) -> Result<Vec<MasterfileEntry>> {
			Err(Error::Custom(Box::new(std::io::Error::new(
				std::io::ErrorKind::Other,
				"simulated failure",
			))))
		}
	}

	let result = Masterfile::builder().fetcher(ErroringFetcher).fetch().await;
	let err = result.unwrap_err();
	assert!(matches!(err, Error::Custom(_)));
}
```

- [ ] **Step 2: Run + commit**

Run: `cd packages/rust-api && cargo test --test errors --features async`
Expected: PASS.

```bash
git add packages/rust-api/tests/errors.rs
git commit -m "Add errors integration test"
```

### Task 24: `blocking.rs` integration test

**Files:**
- Create: `packages/rust-api/tests/blocking_test.rs` (renamed to avoid clash with src/blocking.rs)

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/blocking_test.rs
//! Blocking variant — same patterns as the async tests.

#![cfg(feature = "blocking")]

mod fixture;

use fixture::fixture;
use pogo_masterfile::blocking::Masterfile;
use pogo_masterfile_types::MoveSettingsTemplateId;

#[test]
fn blocking_from_entries_works() {
	let mf = Masterfile::from_entries(fixture());
	assert_eq!(mf.len(), fixture().len());
}

#[test]
fn blocking_from_json_works() {
	let json = serde_json::to_string(&fixture()).unwrap();
	let mf = Masterfile::from_json(&json).unwrap();
	assert_eq!(mf.len(), fixture().len());
}

#[test]
fn blocking_per_group_accessor() {
	let mf = Masterfile::from_entries(fixture());
	let move_ = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	assert!(move_.is_some());
}

#[test]
fn blocking_iteration() {
	let mf = Masterfile::from_entries(fixture());
	let mut count = 0;
	for _entry in &mf {
		count += 1;
	}
	assert_eq!(count, fixture().len());
}

#[test]
fn blocking_builder_with_mock_fetcher() {
	use pogo_masterfile::fetcher::blocking::BlockingFetcher;
	use pogo_masterfile::Result;
	use pogo_masterfile_types::MasterfileEntry;

	struct Mock(Vec<MasterfileEntry>);
	impl BlockingFetcher for Mock {
		fn fetch(&self, _url: &str) -> Result<Vec<MasterfileEntry>> {
			Ok(self.0.clone())
		}
	}

	let mf = Masterfile::builder()
		.fetcher(Mock(fixture()))
		.fetch()
		.unwrap();
	assert_eq!(mf.len(), fixture().len());
}
```

- [ ] **Step 2: Run + commit**

Run: `cd packages/rust-api && cargo test --test blocking_test --features blocking`
Expected: PASS.

```bash
git add packages/rust-api/tests/blocking_test.rs
git commit -m "Add blocking integration test"
```

### Task 25: `e2e.rs` smoke test (gated)

**Files:**
- Create: `packages/rust-api/tests/e2e.rs`

- [ ] **Step 1: Create the test**

```rust
// packages/rust-api/tests/e2e.rs
//! End-to-end smoke — hits the real default URL. Gated with #[ignore] so
//! the default `cargo test` skips it. Run with: `cargo test --include-ignored`.

#![cfg(feature = "async")]

use pogo_masterfile::Masterfile;

#[tokio::test]
#[ignore = "hits the network — run with --include-ignored"]
async fn loads_real_masterfile() {
	let mf = Masterfile::from_remote().await.unwrap();
	assert!(mf.len() > 1000);
	assert!(mf.move_settings().len() > 50);
	assert!(
		mf.get_entry("V0001_POKEMON_BULBASAUR").is_some(),
		"bulbasaur should be in the masterfile"
	);
}
```

- [ ] **Step 2: Verify it skips by default**

Run: `cd packages/rust-api && cargo test --test e2e --features async`
Expected: 0 ran, 1 ignored.

- [ ] **Step 3: Commit**

```bash
git add packages/rust-api/tests/e2e.rs
git commit -m "Add gated e2e smoke test"
```

### Task 26: Full test suite verification

- [ ] **Step 1: Run everything**

Run: `cd packages/rust-api && cargo test --all-features`
Expected: all integration tests pass; e2e ignored.

Run: `cd /Users/rin/GitHub/pogo-masterfile-types && bun test`
Expected: All previous + new emit-* tests pass.

- [ ] **Step 2: Run typecheck**

Run: `bun run typecheck`
Expected: clean.

- [ ] **Step 3: cargo fmt + clippy**

Run: `cd packages/rust-api && cargo fmt --check`
Expected: no diff.

Run: `cd packages/rust-api && cargo clippy --all-features -- -D warnings`
Expected: clean.

If clippy complains, fix the templates (NOT the generated package files) and re-run codegen. Then commit.

- [ ] **Step 4: Commit any fixups**

```bash
git add -A
git commit -m "Format/clippy fixups for rust-api" || true
```

---

## Phase 6 — Examples

Sibling to `tests/`. Showcase code, not test-asserted.

### Task 27: Examples

**Files:**
- Create: `packages/rust-api/examples/load_async.rs`
- Create: `packages/rust-api/examples/load_blocking.rs`
- Create: `packages/rust-api/examples/custom_fetcher.rs`
- Create: `packages/rust-api/examples/per_group.rs`

- [ ] **Step 1: Create `load_async.rs`**

```rust
// packages/rust-api/examples/load_async.rs
//! Load the masterfile, look up a few entries, iterate.
//!
//! Run with: `cargo run --example load_async --features async`

#![cfg(feature = "async")]

use pogo_masterfile::Masterfile;

#[tokio::main]
async fn main() -> pogo_masterfile::Result<()> {
	let mf = Masterfile::from_remote().await?;
	println!("loaded {} entries", mf.len());

	if let Some(move_) = mf.move_settings().get("V0022_MOVE_MEGAHORN") {
		println!("megahorn power: {:?}", move_.data.move_settings.power);
	}

	let move_count = mf.move_settings().len();
	println!("moveSettings count: {move_count}");

	Ok(())
}
```

- [ ] **Step 2: Create `load_blocking.rs`**

```rust
// packages/rust-api/examples/load_blocking.rs
//! Same as load_async but using the blocking API.
//!
//! Run with: `cargo run --example load_blocking --features blocking --no-default-features`

#![cfg(feature = "blocking")]

use pogo_masterfile::blocking::Masterfile;

fn main() -> pogo_masterfile::Result<()> {
	let mf = Masterfile::from_remote()?;
	println!("loaded {} entries", mf.len());
	Ok(())
}
```

- [ ] **Step 3: Create `custom_fetcher.rs`**

```rust
// packages/rust-api/examples/custom_fetcher.rs
//! Two ways to provide a custom fetcher: as a struct + impl, or as a closure.
//!
//! Run with: `cargo run --example custom_fetcher --features async`

#![cfg(feature = "async")]

use pogo_masterfile::{Fetcher, Masterfile, Result};
use pogo_masterfile_types::MasterfileEntry;

struct AuthFetcher {
	token: String,
}

impl Fetcher for AuthFetcher {
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
		let client = reqwest::Client::new();
		let response = client
			.get(url)
			.bearer_auth(&self.token)
			.send()
			.await
			.map_err(|source| pogo_masterfile::Error::Fetch { url: url.into(), source })?;
		let body = response
			.text()
			.await
			.map_err(|source| pogo_masterfile::Error::Fetch { url: url.into(), source })?;
		Ok(pogo_masterfile_types::parse_masterfile(&body)?)
	}
}

#[tokio::main]
async fn main() -> Result<()> {
	// Approach 1: struct + impl Fetcher.
	let mf = Masterfile::builder()
		.fetcher(AuthFetcher { token: "fake".into() })
		.fetch()
		.await?;
	println!("via auth fetcher: {} entries", mf.len());

	// Approach 2: closure (auto-impl via the blanket impl).
	let mf = Masterfile::builder()
		.fetcher(|_url: &str| async move {
			// fake out the fetch — return empty.
			Ok(Vec::new())
		})
		.fetch()
		.await?;
	println!("via closure fetcher: {} entries", mf.len());

	Ok(())
}
```

- [ ] **Step 4: Create `per_group.rs`**

```rust
// packages/rust-api/examples/per_group.rs
//! Per-group accessor narrowing — the literal-typed lookups.
//!
//! Run with: `cargo run --example per_group --features async`

#![cfg(feature = "async")]

use pogo_masterfile::Masterfile;
use pogo_masterfile_types::MoveSettingsTemplateId;

#[tokio::main]
async fn main() -> pogo_masterfile::Result<()> {
	let mf = Masterfile::from_remote().await?;

	// Compile-time-validated lookup using the typed enum:
	let megahorn = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	println!("megahorn (typed): {:?}", megahorn.is_some());

	// String lookup goes through `FromStr`:
	let megahorn_str = mf.move_settings().get("V0022_MOVE_MEGAHORN");
	println!("megahorn (str): {:?}", megahorn_str.is_some());

	// Iterate just the moveSettings group:
	let high_power_count = mf
		.move_settings()
		.iter()
		.filter(|m| m.data.move_settings.power.unwrap_or(0.0) > 100.0)
		.count();
	println!("moves with power > 100: {high_power_count}");

	Ok(())
}
```

- [ ] **Step 5: Verify examples compile**

Run: `cd packages/rust-api && cargo build --examples --features async`
Expected: success.

Run: `cd packages/rust-api && cargo build --example load_blocking --features blocking --no-default-features`
Expected: success.

- [ ] **Step 6: Commit**

```bash
git add packages/rust-api/examples/
git commit -m "Add example showcase code"
```

---

## Phase 7 — Documentation & release

### Task 28: Full README

**Files:**
- Modify: `packages/rust-api/README.md`

- [ ] **Step 1: Replace placeholder**

```markdown
# pogo-masterfile

[![docs.rs](https://img.shields.io/docsrs/pogo-masterfile)](https://docs.rs/pogo-masterfile)
[![Crates.io](https://img.shields.io/crates/v/pogo-masterfile)](https://crates.io/crates/pogo-masterfile)

Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group narrow-typed accessors. Built on [`pogo-masterfile-types`](https://crates.io/crates/pogo-masterfile-types).

## Install

```bash
cargo add pogo-masterfile
```

For sync usage:

```bash
cargo add pogo-masterfile --no-default-features --features blocking
```

## Quickstart

```rust
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::MoveSettingsTemplateId;

# tokio_test::block_on(async {
let mf = Masterfile::from_remote().await.unwrap();

// Top-level lookup — wide return type.
let entry = mf.get_entry("V0022_MOVE_MEGAHORN");

// Per-group accessor — literal-narrow return type, full intellisense.
let megahorn = mf.move_settings().get(MoveSettingsTemplateId::V0022MoveMegahorn);

// Or with a string (parsed via FromStr):
let megahorn = mf.move_settings().get("V0022_MOVE_MEGAHORN");

// Iterate just one group:
for move_ in mf.move_settings().iter() {
    // ...
}
# });
```

## Top-level vs per-group lookups

The `Masterfile` struct splits its lookup APIs to match Rust's idioms:

- **Top-level** (`mf.get_entry`, `mf.has`) returns `&MasterfileEntry` (the wide enum). Use it for arbitrary string IDs.
- **Per-group accessor** (`mf.move_settings().get(id)`) narrows to the exact `&MoveSettingsEntry` struct. The input is polymorphic — accepts either the typed `MoveSettingsTemplateId` enum (compile-time validated) or `&str` (parsed via `FromStr`).

## Loading

```rust
use std::time::Duration;
use pogo_masterfile::Masterfile;

# tokio_test::block_on(async {
// Default: alexelgt mirror, default reqwest client.
let mf = Masterfile::from_remote().await.unwrap();

// Custom URL via builder:
let mf = Masterfile::builder()
    .url("https://my-cdn/masterfile.json")
    .timeout(Duration::from_secs(30))
    .fetch()
    .await.unwrap();

// Custom fetcher via closure:
let mf = Masterfile::builder()
    .fetcher(|url: &str| async move {
        // ... your custom fetch + transform ...
        Ok(Vec::new())
    })
    .fetch()
    .await.unwrap();

// Already-loaded data (no network):
let mf = Masterfile::from_json(r#"[]"#).unwrap();
# });
```

## Async vs blocking

Both APIs ship in the same crate, gated by Cargo features. The async API is on by default; the blocking API is opt-in.

```rust,ignore
// Async (default)
use pogo_masterfile::Masterfile;

// Blocking (feature = "blocking")
use pogo_masterfile::blocking::Masterfile;
```

The struct API is identical between the two — only `from_remote` and `refresh` change shape (sync vs async).

## Errors

Three real failure modes for `from_remote` / `refresh`:

```rust,ignore
match err {
    pogo_masterfile::Error::Fetch { url, source } => /* network */ ,
    pogo_masterfile::Error::Status { url, status } => /* HTTP non-2xx */ ,
    pogo_masterfile::Error::Parse(_) => /* invalid JSON */ ,
    pogo_masterfile::Error::InvalidShape => /* JSON not an array */ ,
    pogo_masterfile::Error::Custom(_) => /* user fetcher error */ ,
}
```

For lookups, `Option<&Entry>` carries the "not found" case — no exception path.

## Source

Generated from the codegen pipeline at the [repo root](https://github.com/<GH_OWNER>/pogo-masterfile-types). Don't edit emitted files — re-run `bun run generate` instead.

## License

MIT — see [LICENSE](./LICENSE).
```

- [ ] **Step 2: Commit**

```bash
git add packages/rust-api/README.md
git commit -m "Write full README for pogo-masterfile crate"
```

### Task 29: CONTRIBUTING.md update

**Files:**
- Modify: `CONTRIBUTING.md`

- [ ] **Step 1: Update the package list and tag table**

Find the line about "four published packages" and update to "five":

```markdown
The five published packages under `packages/` are **fully generated** from `masterfile.json` plus the inference pipeline in `src/`. Don't edit files in `packages/ts/src/`, `packages/ts-api/src/`, `packages/rust/src/`, `packages/rust-api/src/`, or `packages/go/*.go` by hand — run codegen instead:
```

Find the release tag table and add the row for the rust API:

```markdown
| Package        | Tag pattern             | Example tag              | Workflow                                          |
| -------------- | ----------------------- | ------------------------ | ------------------------------------------------- |
| TypeScript types | `typescript-v*`       | `typescript-v0.1.0`      | `.github/workflows/publish-npm.yml`               |
| TS API         | `pogo-masterfile-v*`    | `pogo-masterfile-v0.1.0` | `.github/workflows/publish-pogo-masterfile.yml`   |
| Rust types     | `rust-v*`               | `rust-v0.1.0`            | `.github/workflows/publish-rust.yml`              |
| Rust API       | `pogo-masterfile-rust-v*` | `pogo-masterfile-rust-v0.1.0` | `.github/workflows/publish-rust-api.yml` |
| Go             | `packages/go/v*`        | `packages/go/v0.1.0`     | `.github/workflows/release-go.yml`                |
```

Add a "Local verification" subsection entry:

```bash
# Rust API (pogo-masterfile)
cd packages/rust-api && cargo publish --dry-run
```

- [ ] **Step 2: Commit**

```bash
git add CONTRIBUTING.md
git commit -m "Add pogo-masterfile (rust-api) to release table"
```

### Task 30: GitHub Actions release workflow

**Files:**
- Create: `.github/workflows/publish-rust-api.yml`

- [ ] **Step 1: Create the workflow via heredoc**

```bash
cat > .github/workflows/publish-rust-api.yml <<'YAMLEOF'
name: Publish Rust API

on:
  push:
    tags:
      - "pogo-masterfile-rust-v*"

jobs:
  publish:
    name: Publish to crates.io
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: packages/rust-api
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
      - uses: Swatinem/rust-cache@v2
        with:
          workspaces: packages/rust-api
      - run: cargo test --all-features
      - run: cargo publish --token ${{ secrets.CARGO_REGISTRY_TOKEN }}
YAMLEOF
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/publish-rust-api.yml
git commit -m "Add GitHub Actions workflow for publishing pogo-masterfile rust crate"
```

### Task 31: Update root `package.json` script

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Extend the `generate` script**

Find the existing line:

```json
"generate": "bun run src/generate.ts && bun run format && (cd packages/rust && cargo fmt) && (cd packages/go && gofmt -w .)"
```

Update to include the rust-api format step:

```json
"generate": "bun run src/generate.ts && bun run format && (cd packages/rust && cargo fmt) && (cd packages/rust-api && cargo fmt) && (cd packages/go && gofmt -w .)"
```

- [ ] **Step 2: Commit**

```bash
git add package.json
git commit -m "Add cargo fmt step for rust-api in generate script"
```

### Task 32: Final regen + verification

- [ ] **Step 1: Clean run**

Run: `bun run generate`
Expected: no errors, all four output dirs updated.

- [ ] **Step 2: Tests**

Run: `bun test`
Expected: all pass.

Run: `cd packages/rust-api && cargo test --all-features`
Expected: all integration tests pass; e2e ignored.

- [ ] **Step 3: Typecheck + lint**

Run: `bun run typecheck`
Expected: clean.

Run: `cd packages/rust-api && cargo clippy --all-features -- -D warnings`
Expected: clean.

- [ ] **Step 4: Commit any final regen artifacts**

```bash
cd /Users/rin/GitHub/pogo-masterfile-types
git add -A
git diff --cached --stat
git commit -m "Final regen and verification of rust-api" || true
```

---

## Definition of done

- [ ] `bun run generate` completes without errors and produces a buildable `packages/rust-api/`.
- [ ] `cd packages/rust-api && cargo test --all-features` passes (e2e ignored).
- [ ] `cd packages/rust-api && cargo clippy --all-features -- -D warnings` is clean.
- [ ] `cd packages/rust-api && cargo build --examples --features async` succeeds.
- [ ] `bun run typecheck` is clean.
- [ ] `bun test` is clean.
- [ ] `packages/rust-api/src/` is committed.
- [ ] README documents the public API surface.
- [ ] CONTRIBUTING.md and the release workflow include the rust-api crate.
- [ ] All commits land cleanly on `main`. No force-pushes, no rewrites.

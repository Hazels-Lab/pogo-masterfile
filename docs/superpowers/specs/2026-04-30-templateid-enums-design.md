# Per-Group TemplateId Enums (Rust + Go) — Design Spec

**Date:** 2026-04-30
**Author:** brainstorming session (derick.magnusen@gmail.com + Claude)
**Status:** Approved, pending implementation

## Problem

The Rust and Go packages currently expose every templateId as a plain `String` / `string`. There is no compile-time list of valid templateIds per discriminator group, no way to enumerate them, and no typed discriminant for downstream code that wants to dispatch on a known templateId.

The TypeScript package solves this with literal-union types stacked in three layers (per-split → per-group → masterfile-wide). Rust and Go cannot replicate that "free union composition" — Rust enum variants don't auto-merge across types, and Go has no enum at all. We need a deliberate enum-equivalent shape per language.

The downstream motivation is the upcoming API packages (`packages/{rust-api, go-api, ts-api}`), which will use these enums to dispatch templateId → typed struct lookups and to expose iteration over known IDs.

## Goal

Generate one templateId enum-equivalent per discriminator group, in both Rust and Go, with a small uniform surface (string conversion, listing, parsing). Keep the existing struct types and parser surface untouched. Lay groundwork that the future API packages can consume without further changes.

Three explicit non-goals:

- **No masterfile-level wrapping enum.** With ~18,100 entries across 59 groups, a flattened masterfile-wide enum would degrade `rustc` and rust-analyzer, and a wrapping enum adds complexity that the API package will encapsulate anyway. Defer.
- **No retyping of `template_id: String` / `TemplateID string` on entry types.** Keeping these as plain strings preserves forward compatibility — masterfile.json can grow new IDs without breaking deserialization on a stale generated crate.
- **No per-split (TypeScript-style) granularity.** Rust and Go don't have the per-split file structure that TS does; the "stack like TS" idea reduces to a single per-group enum.

## Design

### Output layout

**Rust** — each group becomes a directory module:

```
packages/rust/src/
  lib.rs                         # parser + MasterfileEntry + macro re-exports + module declarations
  badge_settings/
    mod.rs                       # pub mod types; pub mod template_ids; pub use types::*; pub use template_ids::*;
    types.rs                     # existing per-group struct + payload-enum content
    template_ids.rs              # new: BadgeSettingsTemplateId enum
  pokemon_settings/
    mod.rs
    types.rs
    template_ids.rs
  …
  singletons/
    mod.rs
    types.rs                     # existing singletons content
    template_ids.rs              # one combined SingletonsTemplateId enum (~135 variants)
```

The `mod.rs` for each group re-exports both submodules with `pub use types::*; pub use template_ids::*;`, so existing import paths (`pogo_masterfile_types::badge_settings::BadgeSettings`) keep resolving. Filename `types.rs` mirrors the TS package's `types.ts` for cross-language consistency; it covers both struct payloads and their wrapper enums (so `structs.rs` would be a slight misnomer for groups whose root type is itself an enum, e.g. `BadgeSettings`).

**Go** — flat layout, companion-file pattern (Path Y):

```
packages/go/
  badge_settings.go              # existing struct + payload content (unchanged)
  badge_settings_template_ids.go # new: typed-string + const block
  pokemon_settings.go
  pokemon_settings_template_ids.go
  …
  singletons.go                  # existing
  singletons_template_ids.go     # new: combined SingletonsTemplateID const block
  masterfile.go                  # existing parser + MasterfileEntry interface (unchanged)
```

We deliberately defer the Go sub-package restructure. Doing it now would require reworking the sealed-`MasterfileEntry`-interface trick (its `isMasterfileEntry()` unexported method only seals when all implementers live in the same package). Companion files give us per-group encapsulation at the file level without that cost; the API package is the natural moment to revisit the Go layout.

### Variant / constant naming

Reuse `deriveGroupAliases` from `src/naming.ts`, which already strips the shared templateId prefix and the group-name tail to produce a clean PascalCase tail (e.g. `BADGE_7_DAY_STREAKS` → `7DayStreaks` after stripping `BADGE_`).

**Rust variant**: `<GroupShortName><Tail>` — e.g. `Badge7DayStreaks`.

- Group short name = first PascalCase word of the group (`BadgeSettings` → `Badge`, `PokemonSettings` → `Pokemon`).
- The leading word fixes the digit-start problem — Rust identifiers cannot begin with a digit, so `7DayStreaks` is invalid; `Badge7DayStreaks` is fine.
- Tail collisions tie-break with a numeric suffix (existing behavior in `deriveGroupAliases`).
- For `Singletons`, no shared prefix exists across all 135 IDs, so variants use the full PascalCase'd templateId (e.g. `AccessibilityClientSettings`).

**Go const**: `<GroupName>TemplateID<Tail>` — e.g. `BadgeSettingsTemplateIDBadge7DayStreaks`.

- Verbose, but Go consts are package-scoped so the full prefix is unavoidable.
- Same tail derivation as Rust; same tie-break.

**Reserved-word handling**: if a generated identifier collides with a Rust or Go keyword (`type`, `move`, `match`, etc.), append a single underscore. PascalCase neutralizes most collisions; this is defensive.

### Rust enum shape

Each `<group>/template_ids.rs` defines a unit-variant enum with three derive macros from a new sibling crate (see next section):

```rust
//! Generated from Pokémon GO masterfile — group "badgeSettings" templateIds.

use pogo_masterfile_macros::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum BadgeSettingsTemplateId {
    #[serde(rename = "BADGE_7_DAY_STREAKS")]
    Badge7DayStreaks,
    #[serde(rename = "BADGE_BATTLE_ATTACK_WON")]
    BadgeBattleAttackWon,
    // … one variant per templateId in the group, sorted by templateId.
}
```

The derives generate (no hand-written arms in the file):

- `pub const ALL: [Self; N]` and `pub const SIZE: usize` — from `AllVariants`.
- `pub const fn as_str(&self) -> &'static str` and `impl Display` — from `AsStr`, reading each variant's `#[serde(rename = "...")]` (fallback: `stringify!(VariantName)`).
- `impl FromStr` whose `Err` is `pogo_masterfile_types::UnknownTemplateId(String)` — from `FromStrEnum`, using the same serde renames as the source of truth.

`Copy + Hash + Eq` makes the enum a friction-free key for `HashMap` / `HashSet`. `Serialize` / `Deserialize` come from serde so JSON values round-trip directly via `serde_json`.

A new shared error type lives in `lib.rs`:

```rust
#[derive(Debug, Clone)]
pub struct UnknownTemplateId(pub String);

impl core::fmt::Display for UnknownTemplateId {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        write!(f, "unknown templateId: {}", self.0)
    }
}

impl std::error::Error for UnknownTemplateId {}
```

The existing `template_id: String` field on each `*Entry` struct stays a plain `String`. Consumers wanting the enum form do `parsed: BadgeSettingsTemplateId = entry.template_id.parse()?;`.

### Go const block shape

Each `<group>_template_ids.go` defines a typed-string and a `const` block:

```go
// Generated from Pokémon GO masterfile — group "badgeSettings" templateIds.

package masterfile

type BadgeSettingsTemplateID string

const (
    BadgeSettingsTemplateIDBadge7DayStreaks     BadgeSettingsTemplateID = "BADGE_7_DAY_STREAKS"
    BadgeSettingsTemplateIDBadgeBattleAttackWon BadgeSettingsTemplateID = "BADGE_BATTLE_ATTACK_WON"
    // … sorted by templateId.
)

var BadgeSettingsTemplateIDValues = []BadgeSettingsTemplateID{
    BadgeSettingsTemplateIDBadge7DayStreaks,
    BadgeSettingsTemplateIDBadgeBattleAttackWon,
    // …
}
```

The typed string makes `BadgeSettingsTemplateID` distinct from `PokemonSettingsTemplateID` at compile time. The `*Values` slice is the canonical iterable view. No `Parse...` helper in this iteration — the API package will likely want richer parsing semantics (case, fuzzy match, etc.) and we don't want to lock that in yet. Consumers that just want validation can do `slices.Contains(BadgeSettingsTemplateIDValues, BadgeSettingsTemplateID(s))`.

The existing `TemplateID string` field on each `*Entry` struct stays plain `string` for the same forward-compat reason.

### Singletons

Singletons (entries unique by `templateId`, no shared discriminator) are one folded module today (Rust: `singletons.rs`; Go: `singletons.go`). After this change:

- **Rust**: `singletons/mod.rs`, `singletons/types.rs` (existing folded content), `singletons/template_ids.rs` (one `SingletonsTemplateId` enum with all ~135 variants).
- **Go**: `singletons.go` (existing) + `singletons_template_ids.go` (new: one `SingletonsTemplateID` const block).

Naming for singletons skips the prefix-strip step (no shared prefix across the full set) and uses `pascalCase(templateId)` directly — e.g. `AccessibilityClientSettings`, `AdditiveSceneSettings`.

### `pogo-masterfile-macros` — new sibling crate

A new proc-macro crate at `packages/rust-macros/`:

```
packages/rust-macros/
  Cargo.toml                     # name = "pogo-masterfile-macros", proc-macro = true
  src/
    lib.rs                       # the three derives
```

`Cargo.toml`:

```toml
[package]
name = "pogo-masterfile-macros"
version = "0.1.0"
edition = "2024"
rust-version = "1.85"
description = "Procedural derive macros backing pogo-masterfile-types."
license = "MIT"

[lib]
proc-macro = true

[dependencies]
proc-macro2 = "1"
quote = "1"
syn = { version = "2", features = ["full"] }
```

`packages/rust/Cargo.toml` adds:

```toml
pogo-masterfile-macros = { version = "0.1", path = "../rust-macros" }
```

A workspace `Cargo.toml` at the repo root ties them together so both build / publish coherently:

```toml
[workspace]
members = ["packages/rust", "packages/rust-macros"]
resolver = "3"
```

`packages/rust/src/lib.rs` re-exports the derives:

```rust
pub use pogo_masterfile_macros::{AllVariants, AsStr, FromStrEnum};
```

Consumers of `pogo-masterfile-types` import the derives transparently via the re-export; they do not need to depend on `pogo-masterfile-macros` directly.

#### `AllVariants` derive

Adapted from the user-supplied prototype, with these refinements:

1. **Rejects non-unit variants** (e.g. `Foo(u32)` or `Foo { a: u32 }`) at derive time with a clear error spanned on the offending variant — not on the type name as in the prototype. Prevents confusing downstream `Self::Foo` errors.
2. **Inherits visibility** of the enum (`input.vis`) for the generated `ALL` and `SIZE` constants, rather than hardcoding `pub`. Cleaner if the enum is ever `pub(crate)`.
3. **Names**: keeps the user's `SIZE` (vs `COUNT`/`LEN`). Matches the prototype.
4. **Shape**: `pub const ALL: [Self; N]` (owned array, as in the prototype) — gives `const`-friendly `len()` and matches Rust idioms where exhaustive lists are usually arrays. Iterators get it via `Self::ALL.iter()`.

```rust
// packages/rust-macros/src/lib.rs (sketch)

#[proc_macro_derive(AllVariants)]
pub fn derive_all_variants(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let vis = &input.vis;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "AllVariants only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors = Vec::new();
    let variants: Vec<_> = data_enum
        .variants
        .iter()
        .filter_map(|v| match &v.fields {
            syn::Fields::Unit => Some(&v.ident),
            _ => {
                errors.push(syn::Error::new_spanned(
                    v,
                    "AllVariants requires all variants to be unit (no fields)",
                ));
                None
            }
        })
        .collect();

    if !errors.is_empty() {
        let combined = errors
            .into_iter()
            .reduce(|mut a, b| { a.combine(b); a })
            .unwrap();
        return combined.to_compile_error().into();
    }

    let count = variants.len();
    let qualified = variants.iter().map(|v| quote! { #name::#v });

    quote! {
        impl #name {
            #vis const SIZE: usize = #count;
            #vis const ALL: [Self; #count] = [ #(#qualified),* ];
        }
    }
    .into()
}
```

#### `AsStr` derive

Reads `#[serde(rename = "...")]` from each variant; falls back to `stringify!(VariantName)` if absent. Generates both `as_str` (const fn, zero-cost) and `Display`:

```rust
#[proc_macro_derive(AsStr)]
pub fn derive_as_str(input: TokenStream) -> TokenStream {
    // Parse enum, extract (variant_ident, str_literal) pairs:
    //   - look for #[serde(rename = "...")] on each variant
    //   - fallback: stringify!(variant_ident)
    // Emit:
    //   impl Name {
    //       pub const fn as_str(&self) -> &'static str { match self { ... } }
    //   }
    //   impl ::core::fmt::Display for Name { fn fmt(...) -> ... { f.write_str(self.as_str()) } }
}
```

The serde-rename extraction is straightforward `syn::Attribute::parse_nested_meta` walking. Implementation detail; spec doesn't dictate it.

#### `FromStrEnum` derive

Same source of truth (serde renames). Generates `impl FromStr` whose `Err` is `pogo_masterfile_types::UnknownTemplateId`:

```rust
#[proc_macro_derive(FromStrEnum)]
pub fn derive_from_str_enum(input: TokenStream) -> TokenStream {
    // Emit:
    //   impl ::core::str::FromStr for Name {
    //       type Err = ::pogo_masterfile_types::UnknownTemplateId;
    //       fn from_str(s: &str) -> Result<Self, Self::Err> {
    //           match s { "..." => Ok(Self::Variant), ..., _ => Err(...) }
    //       }
    //   }
}
```

The `::pogo_masterfile_types::UnknownTemplateId` reference creates a soft cycle: `pogo-masterfile-macros` *names* a type from `pogo-masterfile-types`, but doesn't depend on that crate at compile time (the path is just a token in the generated code, resolved at the call site). Standard pattern, works fine.

### Codegen wiring

**TypeScript generator** — only `src/rust/` and `src/go/` change; `src/typescript/` is untouched.

`src/rust/generate.ts`:

- Today: writes `<module_name>.rs` files for each group + `singletons.rs` + `lib.rs`.
- After: writes `<module_name>/mod.rs`, `<module_name>/types.rs`, `<module_name>/template_ids.rs` for each group; `singletons/mod.rs`, `singletons/types.rs`, `singletons/template_ids.rs`; `lib.rs` (with the macro re-exports added).
- `writeOutput` already supports nested paths (it does `mkdir(dirname(full), { recursive: true })`), so no `write.ts` change is needed.

`src/rust/emit.ts`:

- `emitGroupModule(group)` is renamed/split. New surface:
  - `emitGroupTypesFile(group)` — returns the content of `types.rs` (existing logic, minus the file-level `//! Generated…` header which moves to `mod.rs`).
  - `emitGroupTemplateIdsFile(group)` — returns the content of `template_ids.rs` (the enum + derives).
  - `emitGroupModFile(group)` — returns the trivial `mod.rs` (`pub mod types; pub mod template_ids; pub use types::*; pub use template_ids::*;`).
- `emitSingletonsModule(singletons)` similarly splits into `emitSingletonsTypesFile`, `emitSingletonsTemplateIdsFile`, `emitSingletonsModFile`.
- `emitLibFile(moduleNames, variants)` adds `pub use pogo_masterfile_macros::{AllVariants, AsStr, FromStrEnum};` and the `UnknownTemplateId` struct definition. Module declarations stay `pub mod foo;` (the directory layout is transparent to `mod` declarations).

`src/go/generate.ts`:

- Today: writes `<file_name>.go` files for each group + `singletons.go` + `masterfile.go`.
- After: also writes `<file_name>_template_ids.go` for each group + `singletons_template_ids.go`. No structural change to existing files.

`src/go/emit.ts`:

- New `emitGroupTemplateIdsFile(group)` — returns the content of `<group>_template_ids.go`.
- New `emitSingletonsTemplateIdsFile(singletons)` — returns the content of `singletons_template_ids.go`.
- Existing `emitGroupModule` / `emitSingletonsModule` / `emitMasterfileFile` unchanged.

### Variant aliasing

Both Rust and Go emit functions call into a small new helper in `src/naming.ts`:

```ts
export function deriveTemplateIdVariants(
  templateIds: readonly string[],
  groupShortName: string,           // e.g. "Badge" — first PascalCase word of group name
): Map<string, string>              // templateId → variant tail (post-prefix-strip)
```

This wraps `deriveGroupAliases` and adds the digit-start fallback rule: if any computed alias starts with a digit, the group's short name is prepended (`7DayStreaks` → `Badge7DayStreaks`). Reserved-word handling (`Type`, `Move`, `Match`, `Self`) appends a trailing underscore deterministically.

The Rust emitter uses the variant tail directly with the group short name prefix (`Badge` + tail). The Go emitter prefixes the tail with `<GroupName>TemplateID` (e.g. `BadgeSettingsTemplateID` + `Badge7DayStreaks`).

### CLAUDE.md skip-list update

Replace the existing per-file globs:

```
* `./packages/rust/lib.rs`
* `./packages/go/main.go`
```

…with directory-level globs that cover the new layout:

```
* `./packages/rust/src/lib.rs`
* `./packages/rust/src/badge_settings/template_ids.rs`
* `./packages/rust/src/pokemon_settings/template_ids.rs`
* `./packages/rust/src/pokemon_extended_settings/template_ids.rs`
* `./packages/rust/src/avatar_customization/template_ids.rs`
* `./packages/rust/src/avatar_item_display/template_ids.rs`
* `./packages/rust/src/iap_item_display/template_ids.rs`
* `./packages/rust/src/form_settings/template_ids.rs`
* `./packages/rust/src/gender_settings/template_ids.rs`
* `./packages/go/pokemon_settings_template_ids.go`
* `./packages/go/pokemon_extended_settings_template_ids.go`
* `./packages/go/avatar_customization_template_ids.go`
* `./packages/go/avatar_item_display_template_ids.go`
* `./packages/go/iap_item_display_template_ids.go`
* `./packages/go/form_settings_template_ids.go`
* `./packages/go/gender_settings_template_ids.go`
* `./packages/go/badge_settings_template_ids.go`
* `./packages/go/singletons_template_ids.go`
```

(Existing `pokemon-settings/**`, `avatar-customization/**`, etc. globs for the TypeScript side stay as-is — they're not affected.)

## Testing

New unit tests follow the existing colocation pattern.

`src/naming.test.ts` (extend):

- `deriveTemplateIdVariants` happy path — shared prefix is stripped, tail is PascalCase.
- digit-start fallback — `BADGE_7_DAY_STREAKS` with group short name `Badge` → `Badge7DayStreaks`.
- reserved-word fallback — variant that would be `Type` becomes `Type_`.
- collision tie-break — two templateIds collapsing to the same alias get numeric suffixes.
- singletons mode — passing `null`/empty group short name uses full PascalCase'd templateId.

`src/rust/emit.test.ts` (new file, mirrors `src/typescript/emit.test.ts`):

- `emitGroupTemplateIdsFile` for a small fixture group renders the expected enum with the three derives.
- `emitSingletonsTemplateIdsFile` renders one combined enum.
- `emitGroupModFile` renders the trivial three-line module file.

`src/go/emit.test.ts` (new file):

- `emitGroupTemplateIdsFile` for Go renders the expected typed-string + const block + values slice.
- `emitSingletonsTemplateIdsFile` renders one combined const block.

`packages/rust-macros/tests/` (new):

- `AllVariants` smoke test — small enum, asserts `ALL.len() == SIZE` and contents.
- `AllVariants` rejection — non-unit variant fails to compile (use `trybuild` or a UI test).
- `AsStr` smoke test — variants with and without `#[serde(rename]` — both produce expected `as_str()`.
- `AsStr` `Display` round-trip — `format!("{}", X::Foo)` matches `X::Foo.as_str()`.
- `FromStrEnum` smoke test — happy path returns `Ok(variant)`; unknown returns `Err(UnknownTemplateId)`.

`packages/rust/tests/` (extend the existing parse test):

- After regeneration, parse `masterfile.json` and confirm a sample of templateIds round-trip through their per-group enum: `let parsed: BadgeSettingsTemplateId = entry.template_id.parse().unwrap(); assert_eq!(parsed.as_str(), entry.template_id);`.

`packages/go/` (extend existing test file):

- Spot-check that `len(BadgeSettingsTemplateIDValues)` equals the number of badge-settings entries in the parsed masterfile.

## Out of scope (explicit defers)

- **Masterfile-level `MasterfileTemplateId` / `MasterfileTemplateID`** — neither flat nor wrapping. Single-group enums plus the API package's dispatch logic cover the use cases.
- **Stacking macro for combining group enums** — was the original ask, removed once the masterfile layer was deferred.
- **Go sub-package restructure** — `packages/go/<group>/...` deferred until the API package lands and we can take the breaking change as a single coherent move.
- **Retyping `template_id` field on `*Entry` types** — kept as `String` / `string` for forward-compat with masterfile additions on stale generated crates.
- **API packages** (`packages/rust-api`, `packages/go-api`, `packages/ts-api`) — separate effort that consumes these enums.
- **Sub-package layout for `packages/rust/macros/`** (nested) vs `packages/rust-macros/` (sibling) — sibling chosen, not litigated further.
- **Other languages or output targets.**

## Migration / build order

1. Land `packages/rust-macros/` with the three derives and their tests.
2. Add the workspace `Cargo.toml` at the repo root and the dep in `packages/rust/Cargo.toml`.
3. Add `UnknownTemplateId` and the macro re-exports to `packages/rust/src/lib.rs` (still works pre-regenerate; nothing references the macros yet).
4. Update `src/naming.ts` with `deriveTemplateIdVariants` + tests.
5. Update `src/rust/emit.ts` and `src/rust/generate.ts` to emit the new module-per-group layout with `template_ids.rs`. Add `src/rust/emit.test.ts`.
6. Update `src/go/emit.ts` and `src/go/generate.ts` to emit `<group>_template_ids.go`. Add `src/go/emit.test.ts`.
7. Run `bun run src/generate.ts`. Verify Rust crate compiles (`cargo check --workspace`) and Go module compiles (`go build ./...`).
8. Run existing tests (`bun test`, `cargo test --workspace`, `go test ./...`).
9. Update CLAUDE.md skip list.
10. Commit per phase; user verifies generated samples and the macro behavior end-to-end.

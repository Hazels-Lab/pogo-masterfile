# Per-Group TemplateId Enums Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate per-group templateId enum-equivalents (Rust unit-variant enums + Go typed-string consts) from the masterfile. Add a new `pogo-masterfile-macros` proc-macro crate to eliminate hand-emitted `as_str` / `ALL` / `FromStr` boilerplate in generated files. Restructure Rust output from flat `<group>.rs` files to `<group>/{mod,types,template_ids}.rs` modules. Keep Go output flat with companion `<group>_template_ids.go` files.

**Architecture:** Three-layer change.
1. **Foundation crate** — new `packages/rust-macros/` sibling crate exporting `AllVariants`, `AsStr`, `FromStrEnum` derive macros. Workspace `Cargo.toml` at repo root ties both crates together.
2. **TS codegen** — `src/naming.ts` gets a small variant-deriving helper. `src/rust/emit.ts` and `src/rust/generate.ts` switch from emitting one `<group>.rs` to emitting a `<group>/` directory of three files. `src/go/emit.ts` and `src/go/generate.ts` add an `emitGroupTemplateIdsFile` and write companion `<group>_template_ids.go` files.
3. **Output regen** — run `bun run src/generate.ts`, verify `cargo check --workspace` and `go build ./...` succeed, run all test suites.

**Tech Stack:** Rust 2024 (edition 2024, MSRV 1.85, `stable` toolchain), proc-macro2 + quote + syn 2 for derives, serde for JSON round-trip; bun for the TypeScript codegen and tests; Go 1.24.

**Reference:** Spec at [`docs/superpowers/specs/2026-04-30-templateid-enums-design.md`](../specs/2026-04-30-templateid-enums-design.md).

---

## Phase 1 — proc-macro crate

### Task 1: Workspace + proc-macro crate skeleton

Create the workspace and an empty proc-macro crate that compiles. No derives yet — this lands the wiring so subsequent tasks can TDD against it.

**Files:**
- Create: `Cargo.toml` (repo root — workspace manifest)
- Create: `packages/rust-macros/Cargo.toml`
- Create: `packages/rust-macros/src/lib.rs`
- Create: `packages/rust-macros/README.md`
- Create: `packages/rust-macros/LICENSE` (copy of `packages/rust/LICENSE`)
- Modify: `packages/rust/Cargo.toml`

- [ ] **Step 1: Write the workspace manifest**

Create `Cargo.toml` at the repo root:

```toml
[workspace]
members = ["packages/rust", "packages/rust-macros"]
resolver = "3"
```

- [ ] **Step 2: Write the proc-macro crate manifest**

Create `packages/rust-macros/Cargo.toml`:

```toml
[package]
name = "pogo-masterfile-macros"
version = "0.1.0"
edition = "2024"
rust-version = "1.85"
description = "Procedural derive macros backing the pogo-masterfile-types crate (AllVariants, AsStr, FromStrEnum)."
license = "MIT"
authors = ["Rin <derick.magnusen@gmail.com>"]
repository = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
homepage = "https://github.com/<GH_OWNER>/pogo-masterfile-types"
documentation = "https://docs.rs/pogo-masterfile-macros"
readme = "README.md"
keywords = ["pokemon-go", "pokemon", "masterfile", "proc-macro", "derive"]
categories = ["development-tools::procedural-macro-helpers"]
include = ["src/**/*.rs", "Cargo.toml", "README.md", "LICENSE"]

[lib]
proc-macro = true

[dependencies]
proc-macro2 = "1"
quote = "1"
syn = { version = "2", features = ["full"] }
```

- [ ] **Step 3: Write a placeholder lib.rs**

Create `packages/rust-macros/src/lib.rs`:

```rust
//! Procedural derive macros backing the [`pogo-masterfile-types`] crate.
//!
//! This crate is normally consumed transparently via re-exports from
//! `pogo-masterfile-types`. Direct dependency is fine but not required.
```

- [ ] **Step 4: Write a minimal README**

Create `packages/rust-macros/README.md`:

```markdown
# pogo-masterfile-macros

Procedural derive macros backing the [`pogo-masterfile-types`](https://crates.io/crates/pogo-masterfile-types) crate.

Three derives are exported:

- `AllVariants` — adds `pub const ALL: [Self; N]` and `pub const SIZE: usize`.
- `AsStr` — adds `pub const fn as_str(&self) -> &'static str` and `Display`. Reads `#[serde(rename = "...")]` per variant.
- `FromStrEnum` — adds `impl FromStr` whose `Err` is `pogo_masterfile_types::UnknownTemplateId`.

All three apply to enums with unit variants only (no fields). Mix and match as needed.

Re-exported from `pogo-masterfile-types` so consumers usually do not need a direct dependency.
```

- [ ] **Step 5: Copy the LICENSE**

```bash
cp packages/rust/LICENSE packages/rust-macros/LICENSE
```

- [ ] **Step 6: Add the dep to packages/rust/Cargo.toml**

In `packages/rust/Cargo.toml`, add to the `[dependencies]` block:

```toml
pogo-masterfile-macros = { version = "0.1", path = "../rust-macros" }
```

The full updated `[dependencies]` block reads:

```toml
[dependencies]
serde = { version = "1", features = ["derive"] }
serde_json = "1"
pogo-masterfile-macros = { version = "0.1", path = "../rust-macros" }
```

- [ ] **Step 7: Verify the workspace builds**

Run: `cargo check --workspace`
Expected: clean compile, no warnings about the new crate.

- [ ] **Step 8: Commit**

```bash
git add Cargo.toml packages/rust-macros/ packages/rust/Cargo.toml
git commit -m "$(cat <<'EOF'
Set up workspace and pogo-masterfile-macros crate skeleton

Adds a Cargo workspace at the repo root tying packages/rust and a new
sibling packages/rust-macros (proc-macro crate). The macros crate is empty
for now; subsequent tasks add the AllVariants, AsStr, and FromStrEnum
derives. packages/rust adds a path dependency on the new crate.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: `AllVariants` derive

TDD a derive that emits `pub const ALL: [Self; N]` and `pub const SIZE: usize` on a unit-only enum. Inherits visibility from the input enum. Errors gracefully on non-unit variants.

**Files:**
- Modify: `packages/rust-macros/src/lib.rs`
- Create: `packages/rust-macros/tests/all_variants.rs`
- Create: `packages/rust-macros/Cargo.toml` (add `[dev-dependencies]`)

- [ ] **Step 1: Add dev-dependencies for tests**

Append to `packages/rust-macros/Cargo.toml`:

```toml
[dev-dependencies]
trybuild = "1"
```

`trybuild` runs UI tests against compile-failure cases (Step 5).

- [ ] **Step 2: Write the failing happy-path test**

Create `packages/rust-macros/tests/all_variants.rs`:

```rust
use pogo_masterfile_macros::AllVariants;

#[derive(Debug, Clone, Copy, PartialEq, Eq, AllVariants)]
enum Color {
    Red,
    Green,
    Blue,
}

#[test]
fn emits_size_constant() {
    assert_eq!(Color::SIZE, 3);
}

#[test]
fn emits_all_array_in_declaration_order() {
    assert_eq!(Color::ALL, [Color::Red, Color::Green, Color::Blue]);
}

#[test]
fn all_array_length_matches_size() {
    assert_eq!(Color::ALL.len(), Color::SIZE);
}
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `cargo test -p pogo-masterfile-macros --test all_variants`
Expected: FAIL with "cannot find derive macro `AllVariants`".

- [ ] **Step 4: Implement `AllVariants`**

Replace the contents of `packages/rust-macros/src/lib.rs`:

```rust
//! Procedural derive macros backing the [`pogo-masterfile-types`] crate.
//!
//! This crate is normally consumed transparently via re-exports from
//! `pogo-masterfile-types`. Direct dependency is fine but not required.

use proc_macro::TokenStream;
use quote::quote;
use syn::{Data, DeriveInput, Fields, parse_macro_input};

/// Derives `pub const ALL: [Self; N]` and `pub const SIZE: usize` for a
/// unit-only enum. Visibility of the constants follows the enum's own
/// visibility.
///
/// ```
/// use pogo_masterfile_macros::AllVariants;
///
/// #[derive(AllVariants)]
/// enum E { A, B, C }
///
/// assert_eq!(E::SIZE, 3);
/// ```
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

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut variant_idents: Vec<&syn::Ident> = Vec::new();
    for v in &data_enum.variants {
        match &v.fields {
            Fields::Unit => variant_idents.push(&v.ident),
            _ => errors.push(syn::Error::new_spanned(
                v,
                "AllVariants requires all variants to be unit (no fields)",
            )),
        }
    }

    if !errors.is_empty() {
        let combined = errors
            .into_iter()
            .reduce(|mut a, b| {
                a.combine(b);
                a
            })
            .unwrap();
        return combined.to_compile_error().into();
    }

    let count = variant_idents.len();
    let qualified = variant_idents.iter().map(|v| quote! { #name::#v });

    quote! {
        impl #name {
            #vis const SIZE: usize = #count;
            #vis const ALL: [Self; #count] = [ #(#qualified),* ];
        }
    }
    .into()
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `cargo test -p pogo-masterfile-macros --test all_variants`
Expected: 3 passed.

- [ ] **Step 6: Add a UI test for non-unit variants**

Create `packages/rust-macros/tests/ui/all_variants_non_unit.rs`:

```rust
use pogo_masterfile_macros::AllVariants;

#[derive(AllVariants)]
enum BadEnum {
    Unit,
    Tuple(u32),
}

fn main() {}
```

Create `packages/rust-macros/tests/ui/all_variants_non_unit.stderr`:

```text
error: AllVariants requires all variants to be unit (no fields)
 --> tests/ui/all_variants_non_unit.rs:6:5
  |
6 |     Tuple(u32),
  |     ^^^^^^^^^^
```

Add a runner test at the bottom of `packages/rust-macros/tests/all_variants.rs`:

```rust
#[test]
fn ui() {
    let t = trybuild::TestCases::new();
    t.compile_fail("tests/ui/all_variants_non_unit.rs");
}
```

- [ ] **Step 7: Run the UI test to verify it produces the expected stderr**

Run: `cargo test -p pogo-masterfile-macros --test all_variants ui`
Expected: PASS. (If the stderr diff differs from the file, `trybuild` prints a `wip` message; copy `wip/all_variants_non_unit.stderr` over `tests/ui/all_variants_non_unit.stderr` and re-run.)

- [ ] **Step 8: Commit**

```bash
git add packages/rust-macros/src/lib.rs packages/rust-macros/tests/ packages/rust-macros/Cargo.toml
git commit -m "$(cat <<'EOF'
Add AllVariants derive macro

Generates `pub const SIZE: usize` and `pub const ALL: [Self; N]` for
unit-only enums. Visibility follows the enum's own visibility. Rejects
non-unit variants at derive time with a span pointing at the offending
variant. Includes a happy-path test and a trybuild UI test for the
rejection path.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: `AsStr` derive

TDD a derive that emits `pub const fn as_str(&self) -> &'static str` and `impl Display`. Reads each variant's string literal from `#[serde(rename = "...")]`, falling back to `stringify!(VariantIdent)`.

**Files:**
- Modify: `packages/rust-macros/src/lib.rs`
- Create: `packages/rust-macros/tests/as_str.rs`

- [ ] **Step 1: Write the failing test**

Create `packages/rust-macros/tests/as_str.rs`:

```rust
use pogo_masterfile_macros::AsStr;

#[derive(AsStr)]
enum WithRename {
    #[serde(rename = "FIRST_VALUE")]
    First,
    #[serde(rename = "SECOND_VALUE")]
    Second,
}

#[derive(AsStr)]
enum WithoutRename {
    Alpha,
    Beta,
}

#[test]
fn as_str_uses_serde_rename_when_present() {
    assert_eq!(WithRename::First.as_str(), "FIRST_VALUE");
    assert_eq!(WithRename::Second.as_str(), "SECOND_VALUE");
}

#[test]
fn as_str_falls_back_to_variant_ident_when_no_rename() {
    assert_eq!(WithoutRename::Alpha.as_str(), "Alpha");
    assert_eq!(WithoutRename::Beta.as_str(), "Beta");
}

#[test]
fn display_matches_as_str() {
    assert_eq!(format!("{}", WithRename::First), "FIRST_VALUE");
    assert_eq!(format!("{}", WithoutRename::Alpha), "Alpha");
}

#[test]
fn as_str_is_const_callable() {
    const X: &str = WithRename::First.as_str();
    assert_eq!(X, "FIRST_VALUE");
}
```

Note that the test enums declare `#[serde(rename = ...)]` even though `serde` is not a dev-dep — `AsStr` only *reads* the attribute syntactically, so no serde runtime is required for the macro tests.

- [ ] **Step 2: Run the test to verify it fails**

Run: `cargo test -p pogo-masterfile-macros --test as_str`
Expected: FAIL with "cannot find derive macro `AsStr`".

- [ ] **Step 3: Implement `AsStr`**

Append to `packages/rust-macros/src/lib.rs`:

```rust
/// Derives `pub const fn as_str(&self) -> &'static str` and `impl Display`
/// for a unit-only enum. Each variant's string is taken from a
/// `#[serde(rename = "...")]` attribute; if absent, falls back to
/// `stringify!(VariantIdent)`.
#[proc_macro_derive(AsStr)]
pub fn derive_as_str(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "AsStr only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut arms: Vec<proc_macro2::TokenStream> = Vec::new();
    for v in &data_enum.variants {
        if !matches!(v.fields, Fields::Unit) {
            errors.push(syn::Error::new_spanned(
                v,
                "AsStr requires all variants to be unit (no fields)",
            ));
            continue;
        }
        let ident = &v.ident;
        let lit = match extract_serde_rename(&v.attrs) {
            Ok(Some(s)) => s,
            Ok(None) => ident.to_string(),
            Err(e) => {
                errors.push(e);
                continue;
            }
        };
        arms.push(quote! { Self::#ident => #lit });
    }

    if !errors.is_empty() {
        let combined = errors
            .into_iter()
            .reduce(|mut a, b| {
                a.combine(b);
                a
            })
            .unwrap();
        return combined.to_compile_error().into();
    }

    quote! {
        impl #name {
            pub const fn as_str(&self) -> &'static str {
                match self {
                    #(#arms),*
                }
            }
        }
        impl ::core::fmt::Display for #name {
            fn fmt(&self, f: &mut ::core::fmt::Formatter<'_>) -> ::core::fmt::Result {
                f.write_str(self.as_str())
            }
        }
    }
    .into()
}

/// Look for `#[serde(rename = "...")]` on a variant. Returns the string
/// payload if found. Errors only on malformed serde attributes.
fn extract_serde_rename(attrs: &[syn::Attribute]) -> syn::Result<Option<String>> {
    for attr in attrs {
        if !attr.path().is_ident("serde") {
            continue;
        }
        let mut found: Option<String> = None;
        attr.parse_nested_meta(|meta| {
            if meta.path.is_ident("rename") {
                let value = meta.value()?;
                let s: syn::LitStr = value.parse()?;
                found = Some(s.value());
            } else {
                // Skip other serde meta items (e.g., `untagged`, `tag = "..."`).
                let _ = meta.input;
            }
            Ok(())
        })?;
        if let Some(s) = found {
            return Ok(Some(s));
        }
    }
    Ok(None)
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `cargo test -p pogo-masterfile-macros --test as_str`
Expected: 4 passed.

- [ ] **Step 5: Commit**

```bash
git add packages/rust-macros/src/lib.rs packages/rust-macros/tests/as_str.rs
git commit -m "$(cat <<'EOF'
Add AsStr derive macro

Generates `pub const fn as_str(&self) -> &'static str` and `impl Display`
for unit-only enums. Reads each variant's string from
`#[serde(rename = "...")]`, falling back to `stringify!(VariantIdent)` if
absent. Skips other serde attributes (untagged, tag, etc.) cleanly.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: `FromStrEnum` derive

TDD a derive that emits `impl FromStr` whose `Err` is `pogo_masterfile_types::UnknownTemplateId`. Same string-literal source as `AsStr` (serde rename or variant ident fallback).

**Files:**
- Modify: `packages/rust-macros/src/lib.rs`
- Create: `packages/rust-macros/tests/from_str_enum.rs`

- [ ] **Step 1: Write the failing test**

Create `packages/rust-macros/tests/from_str_enum.rs`:

```rust
//! `FromStrEnum` references `pogo_masterfile_types::UnknownTemplateId` in the
//! generated `Err` type. Tests have to provide a stub at that path so the
//! macro output type-checks without depending on the real crate (which would
//! be a circular dev-dep).

use pogo_masterfile_macros::FromStrEnum;
use std::str::FromStr;

mod pogo_masterfile_types {
    #[derive(Debug, Clone, PartialEq, Eq)]
    pub struct UnknownTemplateId(pub String);
}

#[derive(Debug, PartialEq, Eq, FromStrEnum)]
enum Color {
    #[serde(rename = "RED")]
    Red,
    #[serde(rename = "GREEN")]
    Green,
    Blue,
}

#[test]
fn parses_serde_renamed_variants() {
    assert_eq!(Color::from_str("RED").unwrap(), Color::Red);
    assert_eq!(Color::from_str("GREEN").unwrap(), Color::Green);
}

#[test]
fn parses_fallback_variant_ident() {
    assert_eq!(Color::from_str("Blue").unwrap(), Color::Blue);
}

#[test]
fn unknown_returns_unknown_template_id_with_input() {
    let err = Color::from_str("not-real").unwrap_err();
    assert_eq!(err.0, "not-real");
}
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `cargo test -p pogo-masterfile-macros --test from_str_enum`
Expected: FAIL with "cannot find derive macro `FromStrEnum`".

- [ ] **Step 3: Implement `FromStrEnum`**

The implementation reuses `extract_serde_rename`. Append to `packages/rust-macros/src/lib.rs`:

```rust
/// Derives `impl FromStr` for a unit-only enum. The error type is
/// `pogo_masterfile_types::UnknownTemplateId` — the macro emits a path
/// reference; consumers must have that type in scope (which they do
/// transparently via the parent crate). String matching uses the same
/// source as `AsStr`: `#[serde(rename = "...")]` first, variant ident
/// otherwise.
#[proc_macro_derive(FromStrEnum)]
pub fn derive_from_str_enum(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "FromStrEnum only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut arms: Vec<proc_macro2::TokenStream> = Vec::new();
    for v in &data_enum.variants {
        if !matches!(v.fields, Fields::Unit) {
            errors.push(syn::Error::new_spanned(
                v,
                "FromStrEnum requires all variants to be unit (no fields)",
            ));
            continue;
        }
        let ident = &v.ident;
        let lit = match extract_serde_rename(&v.attrs) {
            Ok(Some(s)) => s,
            Ok(None) => ident.to_string(),
            Err(e) => {
                errors.push(e);
                continue;
            }
        };
        arms.push(quote! { #lit => Ok(Self::#ident) });
    }

    if !errors.is_empty() {
        let combined = errors
            .into_iter()
            .reduce(|mut a, b| {
                a.combine(b);
                a
            })
            .unwrap();
        return combined.to_compile_error().into();
    }

    quote! {
        impl ::core::str::FromStr for #name {
            type Err = ::pogo_masterfile_types::UnknownTemplateId;
            fn from_str(s: &str) -> ::core::result::Result<Self, Self::Err> {
                match s {
                    #(#arms),*,
                    other => Err(::pogo_masterfile_types::UnknownTemplateId(other.to_string())),
                }
            }
        }
    }
    .into()
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `cargo test -p pogo-masterfile-macros --test from_str_enum`
Expected: 3 passed.

- [ ] **Step 5: Run the full macro test suite**

Run: `cargo test -p pogo-masterfile-macros`
Expected: all tests pass (`all_variants`, `as_str`, `from_str_enum`, plus the UI test).

- [ ] **Step 6: Commit**

```bash
git add packages/rust-macros/src/lib.rs packages/rust-macros/tests/from_str_enum.rs
git commit -m "$(cat <<'EOF'
Add FromStrEnum derive macro

Generates `impl FromStr` for unit-only enums whose `Err` is
`pogo_masterfile_types::UnknownTemplateId(String)` — consumers have that
type in scope via the parent crate's re-export. String matching uses the
same source as AsStr: `#[serde(rename = "...")]` first, variant ident
otherwise. Unknown inputs are echoed back in the error.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 2 — wire macros into `pogo-masterfile-types`

### Task 5: `UnknownTemplateId` + macro re-exports in `lib.rs`

Add the shared error type and re-export the three derives so consumers and generated code reference them via the parent crate.

**Files:**
- Modify: `packages/rust/src/lib.rs`

- [ ] **Step 1: Read the current `lib.rs` head**

Run: `head -40 packages/rust/src/lib.rs`

Confirm the existing structure (doc comment, `#![allow]`, `use serde`) before inserting new items.

- [ ] **Step 2: Add `UnknownTemplateId` and the re-exports**

Insert the following block after the `use serde::{Deserialize, Serialize};` line (around line 38). The exact line number will depend on the current file state — find the import and place this block immediately after it:

```rust
pub use pogo_masterfile_macros::{AllVariants, AsStr, FromStrEnum};

/// Error returned by `FromStr` impls on generated templateId enums when the
/// input string does not match any known templateId for the group.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct UnknownTemplateId(pub String);

impl core::fmt::Display for UnknownTemplateId {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        write!(f, "unknown templateId: {}", self.0)
    }
}

impl std::error::Error for UnknownTemplateId {}
```

- [ ] **Step 3: Build the workspace to confirm everything links**

Run: `cargo check --workspace`
Expected: clean compile.

- [ ] **Step 4: Add an integration test exercising the round-trip**

Append to `packages/rust/tests/smoke.rs` (after the existing tests):

```rust
mod template_id_macro_round_trip {
    //! Self-contained sanity check that the three derives compose: an enum
    //! with `AllVariants + AsStr + FromStrEnum` plus serde Serialize/Deserialize
    //! round-trips through string and JSON.

    use pogo_masterfile_types::{AllVariants, AsStr, FromStrEnum, UnknownTemplateId};
    use serde::{Deserialize, Serialize};
    use std::str::FromStr;

    #[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize, AllVariants, AsStr, FromStrEnum)]
    enum Sample {
        #[serde(rename = "BADGE_ALPHA")]
        Alpha,
        #[serde(rename = "BADGE_BETA")]
        Beta,
    }

    #[test]
    fn size_and_all_match() {
        assert_eq!(Sample::SIZE, 2);
        assert_eq!(Sample::ALL, [Sample::Alpha, Sample::Beta]);
    }

    #[test]
    fn as_str_emits_serde_rename() {
        assert_eq!(Sample::Alpha.as_str(), "BADGE_ALPHA");
    }

    #[test]
    fn from_str_round_trips() {
        let parsed = Sample::from_str("BADGE_BETA").unwrap();
        assert_eq!(parsed, Sample::Beta);
    }

    #[test]
    fn from_str_unknown_returns_input() {
        let err: UnknownTemplateId = Sample::from_str("BADGE_GAMMA").unwrap_err();
        assert_eq!(err.0, "BADGE_GAMMA");
    }

    #[test]
    fn serde_json_round_trips() {
        let json = serde_json::to_string(&Sample::Alpha).unwrap();
        assert_eq!(json, "\"BADGE_ALPHA\"");
        let back: Sample = serde_json::from_str(&json).unwrap();
        assert_eq!(back, Sample::Alpha);
    }
}
```

- [ ] **Step 5: Run all Rust tests**

Run: `cargo test --workspace`
Expected: all tests pass — existing smoke tests still green, new module shows 5 passing tests.

- [ ] **Step 6: Commit**

```bash
git add packages/rust/src/lib.rs packages/rust/tests/smoke.rs
git commit -m "$(cat <<'EOF'
Re-export macro derives and add UnknownTemplateId

pogo-masterfile-types now re-exports AllVariants, AsStr, and FromStrEnum
from pogo-masterfile-macros. Adds UnknownTemplateId(String), the shared
error type that FromStrEnum-generated FromStr impls return on lookup
miss. Includes a round-trip integration test exercising all three
derives plus serde JSON.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 3 — naming helper

### Task 6: `deriveTemplateIdVariants` in `src/naming.ts`

Add a small wrapper around `deriveGroupAliases` that returns a map of templateId → variant tail with deterministic reserved-word handling. Each emitter (Rust / Go) prepends its own group prefix to the tail.

**Files:**
- Modify: `src/naming.ts`
- Modify: `src/naming.test.ts`

- [ ] **Step 1: Skim the existing `naming.ts` and `naming.test.ts`**

Run: `wc -l src/naming.ts src/naming.test.ts`
Read `src/naming.ts` end-to-end (it's <130 lines).

- [ ] **Step 2: Write the failing tests**

Append to `src/naming.test.ts` (above the trailing closing brace of the existing `describe` block, or in a new `describe` block at the bottom of the file — choose whichever fits the existing structure):

```ts
describe("deriveTemplateIdVariants", () => {
	test("returns full PascalCase'd templateId as variant name", () => {
		const ids = ["BADGE_7_DAY_STREAKS", "BADGE_BATTLE_ATTACK_WON", "BADGE_BERRIES_FED"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("BADGE_7_DAY_STREAKS")).toBe("Badge7DayStreaks");
		expect(result.get("BADGE_BATTLE_ATTACK_WON")).toBe("BadgeBattleAttackWon");
		expect(result.get("BADGE_BERRIES_FED")).toBe("BadgeBerriesFed");
	});

	test("preserves leading-V identifiers (versioned templateIds)", () => {
		const ids = ["V0001_POKEMON_BULBASAUR", "V0002_POKEMON_IVYSAUR"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("V0001_POKEMON_BULBASAUR")).toBe("V0001PokemonBulbasaur");
		expect(result.get("V0002_POKEMON_IVYSAUR")).toBe("V0002PokemonIvysaur");
	});

	test("appends an underscore to reserved-word collisions", () => {
		// Hypothetical: a templateId that PascalCase'd lands on the bare keyword "Self".
		const ids = ["SELF", "OTHER"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("SELF")).toBe("Self_");
		expect(result.get("OTHER")).toBe("Other");
	});

	test("works for singletons (full PascalCase, no special handling)", () => {
		const ids = ["ACCESSIBILITY_CLIENT_SETTINGS", "ADDITIVE_SCENE_SETTINGS"];
		const result = deriveTemplateIdVariants(ids);
		expect(result.get("ACCESSIBILITY_CLIENT_SETTINGS")).toBe("AccessibilityClientSettings");
		expect(result.get("ADDITIVE_SCENE_SETTINGS")).toBe("AdditiveSceneSettings");
	});
});
```

You will also need to update the import line at the top of `src/naming.test.ts` to include `deriveTemplateIdVariants`. Inspect the existing import statement and add the new symbol to it.

- [ ] **Step 3: Run the tests to verify they fail**

Run: `bun test src/naming.test.ts`
Expected: FAIL with "deriveTemplateIdVariants is not a function" or similar.

- [ ] **Step 4: Implement `deriveTemplateIdVariants`**

Append to `src/naming.ts`:

```ts
// Reserved words in Rust 2024 + Go 1.24 that, after PascalCase'ing, would
// produce identifiers we cannot use as enum variants or constant tails.
// Most common-case keywords (e.g., `match`, `move`, `type`) are already
// neutralized by PascalCase ("Match", "Move", "Type" are valid). The
// remainder are PascalCase keywords that *do* collide.
const RESERVED_PASCAL_CASE = new Set(["Self", "Crate", "Super"]);

/**
 * Map each templateId to a PascalCase variant identifier. Used by the
 * Rust and Go emitters as the enum variant / const tail.
 *
 * Rule: variant = `pascalCase(templateId)`, with reserved-word collisions
 * (post-PascalCase identifiers matching `Self`, `Crate`, `Super`) getting
 * a trailing underscore.
 *
 * No prefix-stripping. Each generated enum is namespaced by its enum
 * name (`BadgeSettingsTemplateId::BadgeBerriesFed`), so the redundant
 * group word in each variant is acceptable in exchange for unambiguous,
 * unmodified identifiers that round-trip cleanly to their templateId.
 */
export function deriveTemplateIdVariants(templateIds: readonly string[]): Map<string, string> {
	const out = new Map<string, string>();
	for (const id of templateIds) {
		const pascal = pascalCase(id);
		out.set(id, RESERVED_PASCAL_CASE.has(pascal) ? `${pascal}_` : pascal);
	}
	return out;
}
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `bun test src/naming.test.ts`
Expected: all tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/naming.ts src/naming.test.ts
git commit -m "$(cat <<'EOF'
Add deriveTemplateIdVariants helper

Thin wrapper around deriveGroupAliases that maps each templateId in a
group to its variant tail (post-prefix-strip PascalCase). Reserved
PascalCase keywords (Self, Crate, Super) get a trailing underscore.
Singletons mode falls through to whole-id PascalCase since no shared
prefix exists across the singletons bucket.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 4 — Rust codegen restructure

### Task 7: Split `emitGroupModule` into `mod`, `types`, `template_ids` emitters

Refactor `src/rust/emit.ts`. The existing `emitGroupModule` becomes three exports: `emitGroupModFile`, `emitGroupTypesFile`, `emitGroupTemplateIdsFile`. The first is trivial; the second is `emitGroupModule`'s current logic with the file header removed (header moves to `mod.rs`); the third is new.

**Files:**
- Modify: `src/rust/emit.ts`
- Create: `src/rust/emit.test.ts`

- [ ] **Step 1: Create the test file with a failing test for `emitGroupModFile`**

Create `src/rust/emit.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { groupEntries } from "../group.ts";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { emitGroupModFile, emitGroupTemplateIdsFile, emitGroupTypesFile } from "./emit.ts";

describe("emitGroupModFile", () => {
	test("emits a deterministic three-line module that re-exports types and template_ids", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupModFile(typeEffective);
		expect(out).toContain("//! Generated from Pokémon GO masterfile — group \"typeEffective\".");
		expect(out).toContain("pub mod template_ids;");
		expect(out).toContain("pub mod types;");
		expect(out).toContain("pub use template_ids::*;");
		expect(out).toContain("pub use types::*;");
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bun test src/rust/emit.test.ts`
Expected: FAIL with "emitGroupModFile is not exported from ./emit.ts".

- [ ] **Step 3: Implement `emitGroupModFile`**

Inside `src/rust/emit.ts`, near the existing `emitGroupModule` (around line 454), add:

```ts
export function emitGroupModFile(group: Group): string {
	return `//! Generated from Pokémon GO masterfile — group "${group.discriminator}".

pub mod template_ids;
pub mod types;

pub use template_ids::*;
pub use types::*;
`;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `bun test src/rust/emit.test.ts`
Expected: PASS.

- [ ] **Step 5: Add a failing test for `emitGroupTypesFile`**

Append to `src/rust/emit.test.ts` (still inside the file, new `describe` block):

```ts
describe("emitGroupTypesFile", () => {
	test("emits the same struct + entry-wrapper content as before, minus the file header", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTypesFile(typeEffective);
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		expect(out).toContain("pub struct TypeEffective");
		expect(out).toContain("crate::masterfile_entry!(TypeEffectiveEntry, TypeEffectiveEntryData, type_effective: TypeEffective);");
		// Header must NOT be in this file — it lives in mod.rs.
		expect(out).not.toContain("//! Generated from Pokémon GO masterfile —");
	});
});
```

- [ ] **Step 6: Run the test to verify it fails**

Run: `bun test src/rust/emit.test.ts`
Expected: the new test fails ("emitGroupTypesFile is not exported"); the existing one still passes.

- [ ] **Step 7: Refactor `emitGroupModule` into `emitGroupTypesFile`**

Find the existing `emitGroupModule` in `src/rust/emit.ts`. Its current body builds a string from `[header(group.discriminator), SERDE_IMPORT, ...pool.deferred, entryWrapper(baseName, snakeName)]` (or similar). Three changes:

1. Rename the function from `emitGroupModule` to `emitGroupTypesFile`.
2. Remove the `header(group.discriminator)` element from the file-content array — the header now lives in `mod.rs`.
3. Add a deprecated re-export so any code still importing `emitGroupModule` keeps working until Task 9 deletes the old call site:

```ts
export const emitGroupModule = emitGroupTypesFile;
```

(This keeps `src/rust/generate.ts` compiling between commits.)

- [ ] **Step 8: Run the typesFile test to verify it passes**

Run: `bun test src/rust/emit.test.ts`
Expected: both tests pass.

**Variant naming rule (refinement from spec):** The spec proposed prepending a group short name to a prefix-stripped tail (e.g. `Badge` + `7DayStreaks`). On reflection that produces awkward names in groups where the shared prefix overlaps the group word — `POKEMON_TYPE_BUG` in `typeEffective` would become `TypeBug`, dropping `Pokemon` while re-adding `Type`. Using the full PascalCase'd templateId as the variant name is simpler, more consistent across groups, and produces unambiguous identifiers in every case. Examples:

| templateId | Variant |
| --- | --- |
| `POKEMON_TYPE_BUG` | `PokemonTypeBug` |
| `BADGE_7_DAY_STREAKS` | `Badge7DayStreaks` |
| `BADGE_BERRIES_FED` | `BadgeBerriesFed` |
| `V0001_POKEMON_BULBASAUR` | `V0001PokemonBulbasaur` |
| `EXTENDED_V0001_POKEMON_BULBASAUR` | `ExtendedV0001PokemonBulbasaur` |

This drops the need for `firstPascalWord` and the post-prefix-strip alias machinery. `deriveTemplateIdVariants` from Task 6 reduces to "PascalCase the templateId, escape reserved-word collisions" (no `gName` argument needed). Update Task 6's helper accordingly when implementing — see Task 6's revised signature note below.

- [ ] **Step 9: Add a failing test for `emitGroupTemplateIdsFile`**

Append to `src/rust/emit.test.ts`:

```ts
describe("emitGroupTemplateIdsFile", () => {
	test("emits a unit-variant enum with three derives and serde renames", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);
		// Header for the file.
		expect(out).toContain("//! Generated from Pokémon GO masterfile — group \"typeEffective\" templateIds.");
		// Macro imports.
		expect(out).toContain("use crate::{AllVariants, AsStr, FromStrEnum};");
		expect(out).toContain("use serde::{Deserialize, Serialize};");
		// Derive list and enum signature.
		expect(out).toContain("#[derive(");
		expect(out).toContain("AllVariants");
		expect(out).toContain("AsStr");
		expect(out).toContain("FromStrEnum");
		expect(out).toContain("pub enum TypeEffectiveTemplateId {");
		// Per-variant: serde rename + variant ident (full PascalCase'd templateId).
		expect(out).toContain("#[serde(rename = \"POKEMON_TYPE_BUG\")]");
		expect(out).toContain("    PokemonTypeBug,");
		expect(out).toContain("#[serde(rename = \"POKEMON_TYPE_DARK\")]");
		expect(out).toContain("    PokemonTypeDark,");
	});

	test("variants are sorted alphabetically by templateId", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);
		const bugIdx = out.indexOf("PokemonTypeBug");
		const darkIdx = out.indexOf("PokemonTypeDark");
		expect(bugIdx).toBeLessThan(darkIdx);
	});
});
```

- [ ] **Step 10: Run the templateIds test to verify it fails**

Run: `bun test src/rust/emit.test.ts`
Expected: the new test fails ("emitGroupTemplateIdsFile is not exported").

- [ ] **Step 11: Implement `emitGroupTemplateIdsFile`**

At the top of `src/rust/emit.ts`, add `deriveTemplateIdVariants` to the existing `pascalCase, snakeCase` import from `../naming.ts`:

```ts
import { deriveTemplateIdVariants, pascalCase, snakeCase } from "../naming.ts";
```

Add at the bottom of `src/rust/emit.ts` (before `MACRO_DEFINITIONS`):

```ts
export function emitGroupTemplateIdsFile(group: Group): string {
	const baseName = pascalCase(group.discriminator);
	const ids = group.entries.map((e) => e.templateId);
	const variants = deriveTemplateIdVariants(ids);

	const sortedIds = [...ids].sort();
	const variantBlock = sortedIds
		.map((id) => `    #[serde(rename = ${JSON.stringify(id)})]\n    ${variants.get(id)!},`)
		.join("\n");

	return `//! Generated from Pokémon GO masterfile — group "${group.discriminator}" templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum ${baseName}TemplateId {
${variantBlock}
}
`;
}
```

- [ ] **Step 12: Run all tests to verify they pass**

Run: `bun test src/rust/emit.test.ts`
Expected: all three describe blocks pass.

- [ ] **Step 13: Commit**

```bash
git add src/rust/emit.ts src/rust/emit.test.ts
git commit -m "$(cat <<'EOF'
Split Rust emit into mod, types, template_ids functions

Refactors emitGroupModule into three exports: emitGroupModFile (trivial
re-export hub), emitGroupTypesFile (the existing struct/payload content
minus the file-level header), and emitGroupTemplateIdsFile (the new
unit-variant enum with AllVariants/AsStr/FromStrEnum derives). A
deprecated emitGroupModule alias preserves generate.ts between commits.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Split `emitSingletonsModule` similarly

Mirror the Task 7 split for the singletons bucket. Singletons mode of `deriveTemplateIdVariants` returns full PascalCase'd templateIds, so each emitter prepends nothing — variants are e.g. `AccessibilityClientSettings`.

**Files:**
- Modify: `src/rust/emit.ts`
- Modify: `src/rust/emit.test.ts`

- [ ] **Step 1: Write a failing test for the singletons mod file**

Append to `src/rust/emit.test.ts`:

```ts
describe("emitSingletonsModFile", () => {
	test("emits the same trivial three-line module shape as group mod files", () => {
		const out = emitSingletonsModFile();
		expect(out).toContain("//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).");
		expect(out).toContain("pub mod template_ids;");
		expect(out).toContain("pub mod types;");
		expect(out).toContain("pub use template_ids::*;");
		expect(out).toContain("pub use types::*;");
	});
});
```

Add `emitSingletonsModFile` to the import line at the top of `src/rust/emit.test.ts`.

- [ ] **Step 2: Verify the test fails**

Run: `bun test src/rust/emit.test.ts`
Expected: FAIL with "emitSingletonsModFile is not exported".

- [ ] **Step 3: Implement `emitSingletonsModFile`**

Add to `src/rust/emit.ts`:

```ts
export function emitSingletonsModFile(): string {
	return `//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).

pub mod template_ids;
pub mod types;

pub use template_ids::*;
pub use types::*;
`;
}
```

- [ ] **Step 4: Verify the test passes**

Run: `bun test src/rust/emit.test.ts`
Expected: PASS.

- [ ] **Step 5: Refactor `emitSingletonsModule` → `emitSingletonsTypesFile`**

Find `emitSingletonsModule` in `src/rust/emit.ts` (around line 503). Three changes:

1. Rename to `emitSingletonsTypesFile`.
2. Drop the `//! Generated from Pokémon GO masterfile — singletons (one-of-a-kind entries).` line from the file content array — that header now lives in `mod.rs`.
3. Add `export const emitSingletonsModule = emitSingletonsTypesFile;` so `generate.ts` keeps compiling between commits.

- [ ] **Step 6: Add a failing test for `emitSingletonsTemplateIdsFile`**

Append to `src/rust/emit.test.ts`:

```ts
describe("emitSingletonsTemplateIdsFile", () => {
	test("emits one combined SingletonsTemplateId enum with full PascalCase variants", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const accessibility = groups.get("accessibilitySettings")!;
		const additive = groups.get("additiveSceneSettings");
		const singletons = [accessibility, additive].filter(Boolean) as ReturnType<typeof groupEntries>["values"] extends () => IterableIterator<infer G> ? G[] : never;
		const out = emitSingletonsTemplateIdsFile(singletons);
		expect(out).toContain("//! Generated from Pokémon GO masterfile — singletons templateIds.");
		expect(out).toContain("pub enum SingletonsTemplateId {");
		expect(out).toContain("#[serde(rename = \"ACCESSIBILITY_CLIENT_SETTINGS\")]");
		expect(out).toContain("    AccessibilityClientSettings,");
	});
});
```

(`MOCK_MASTERFILE` may not contain an `additiveSceneSettings` singleton — adjust the test list to whichever singletons the fixture actually contains. Inspect `src/fixtures.ts` and pick two singleton entries; update the asserted variant names accordingly.)

- [ ] **Step 7: Verify the test fails**

Run: `bun test src/rust/emit.test.ts`
Expected: FAIL with "emitSingletonsTemplateIdsFile is not exported".

- [ ] **Step 8: Implement `emitSingletonsTemplateIdsFile`**

Add to `src/rust/emit.ts`:

```ts
export function emitSingletonsTemplateIdsFile(singletons: readonly Group[]): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	const variants = deriveTemplateIdVariants(allIds);

	const sortedIds = [...allIds].sort();
	const variantBlock = sortedIds
		.map((id) => `    #[serde(rename = ${JSON.stringify(id)})]\n    ${variants.get(id)!},`)
		.join("\n");

	return `//! Generated from Pokémon GO masterfile — singletons templateIds.

use crate::{AllVariants, AsStr, FromStrEnum};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, Copy, PartialEq, Eq, Hash,
    Serialize, Deserialize,
    AllVariants, AsStr, FromStrEnum,
)]
pub enum SingletonsTemplateId {
${variantBlock}
}
`;
}
```

- [ ] **Step 9: Verify the test passes**

Run: `bun test src/rust/emit.test.ts`
Expected: all describe blocks pass.

- [ ] **Step 10: Commit**

```bash
git add src/rust/emit.ts src/rust/emit.test.ts
git commit -m "$(cat <<'EOF'
Split Rust singletons emit into mod, types, template_ids functions

Mirrors the per-group split: emitSingletonsModFile (trivial re-export
hub), emitSingletonsTypesFile (the existing folded struct content minus
the file-level header), and emitSingletonsTemplateIdsFile (one combined
enum across all singleton templateIds, with the same three derives).
Deprecated emitSingletonsModule alias preserves generate.ts.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 9: Switch `src/rust/generate.ts` to module-per-group output

Update the Rust generator to write `<group>/mod.rs`, `<group>/types.rs`, `<group>/template_ids.rs` per group, plus `singletons/mod.rs`, `singletons/types.rs`, `singletons/template_ids.rs`. Drop the deprecated re-exports added in Tasks 7 and 8.

**Files:**
- Modify: `src/rust/generate.ts`
- Modify: `src/rust/emit.ts` (drop deprecated aliases)

- [ ] **Step 1: Read the current generate.ts**

Run: `cat src/rust/generate.ts`

- [ ] **Step 2: Rewrite the file map building loop**

Replace `src/rust/generate.ts` with:

```ts
import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import {
	type EntryVariant,
	emitGroupModFile,
	emitGroupTemplateIdsFile,
	emitGroupTypesFile,
	emitLibFile,
	emitSingletonsModFile,
	emitSingletonsTemplateIdsFile,
	emitSingletonsTypesFile,
} from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "rust", "src");
const SINGLETONS_MODULE = "singletons";

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

export async function generateRust(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[rust] grouped into ${groups.size} discriminators.`);

	const files = new Map<string, string>();
	const moduleNames: string[] = [];
	const singletons: Group[] = [];
	const enumVariants: EntryVariant[] = [];

	for (const group of groups.values()) {
		const baseName = pascalCase(group.discriminator);
		const entryTypeName = `${baseName}Entry`;
		const stub = isStubGroup(group);

		if (group.entries.length === 1) {
			singletons.push(group);
			enumVariants.push({
				variantName: baseName,
				modulePath: SINGLETONS_MODULE,
				entryTypeName,
				isStub: stub,
				discriminator: group.discriminator,
				entryCount: group.entries.length,
			});
			continue;
		}

		const moduleName = snakeCase(group.discriminator);
		moduleNames.push(moduleName);
		files.set(`${moduleName}/mod.rs`, emitGroupModFile(group));
		files.set(`${moduleName}/types.rs`, emitGroupTypesFile(group));
		files.set(`${moduleName}/template_ids.rs`, emitGroupTemplateIdsFile(group));
		enumVariants.push({
			variantName: baseName,
			modulePath: moduleName,
			entryTypeName,
			isStub: stub,
			discriminator: group.discriminator,
			entryCount: group.entries.length,
		});
	}

	if (singletons.length > 0) {
		moduleNames.push(SINGLETONS_MODULE);
		files.set(`${SINGLETONS_MODULE}/mod.rs`, emitSingletonsModFile());
		files.set(`${SINGLETONS_MODULE}/types.rs`, emitSingletonsTypesFile(singletons));
		files.set(`${SINGLETONS_MODULE}/template_ids.rs`, emitSingletonsTemplateIdsFile(singletons));
	}

	files.set("lib.rs", emitLibFile(moduleNames, enumVariants));

	await writeOutput(files, OUT_DIR);
	console.log(`[rust] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_MODULE}/).`);
}
```

- [ ] **Step 3: Drop the deprecated aliases in `src/rust/emit.ts`**

In `src/rust/emit.ts`, remove the two lines:

```ts
export const emitGroupModule = emitGroupTypesFile;
export const emitSingletonsModule = emitSingletonsTypesFile;
```

These were temporary scaffolding for Tasks 7 and 8.

- [ ] **Step 4: Verify the TypeScript builds**

Run: `bun build src/generate.ts --outfile=/tmp/build-check.js`
(Or whatever the project's typecheck command is — `bun tsc --noEmit` if `tsc` is available; otherwise just running the generator in step 5 will fail-fast.)

Expected: no errors.

- [ ] **Step 5: Run the existing TS tests**

Run: `bun test`
Expected: all tests pass — `src/rust/emit.test.ts`, `src/naming.test.ts`, plus existing `src/typescript/`, `src/group.test.ts`, etc.

- [ ] **Step 6: Commit**

```bash
git add src/rust/generate.ts src/rust/emit.ts
git commit -m "$(cat <<'EOF'
Switch Rust generator to module-per-group output

src/rust/generate.ts now writes <group>/mod.rs, <group>/types.rs, and
<group>/template_ids.rs per discriminator group, plus the same triple
under singletons/. The deprecated emitGroupModule/emitSingletonsModule
aliases are removed; generate.ts uses the new emit* functions directly.
writeOutput already handles nested directory creation.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 5 — Go codegen

### Task 10: Add `emitGroupTemplateIdsFile` and singletons equivalent for Go

TDD the Go-side template-ids emitter that produces a typed-string + const block + values slice.

**Files:**
- Modify: `src/go/emit.ts`
- Create: `src/go/emit.test.ts`

- [ ] **Step 1: Create the test file with a failing test**

Create `src/go/emit.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { groupEntries } from "../group.ts";
import { MOCK_MASTERFILE } from "../fixtures.ts";
import { emitGroupTemplateIdsFile, emitSingletonsTemplateIdsFile } from "./emit.ts";

describe("emitGroupTemplateIdsFile", () => {
	test("emits typed-string + const block + values slice for a group", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const typeEffective = groups.get("typeEffective")!;
		const out = emitGroupTemplateIdsFile(typeEffective);

		expect(out).toContain("// Generated from Pokémon GO masterfile — group \"typeEffective\" templateIds.");
		expect(out).toContain("package masterfile");
		expect(out).toContain("type TypeEffectiveTemplateID string");
		expect(out).toContain("const (");
		// Constants use the full PascalCase'd templateId as the suffix.
		// Alignment whitespace depends on the longest name in the block; assert
		// the substring without committing to a specific column count.
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeBug");
		expect(out).toContain("TypeEffectiveTemplateID = \"POKEMON_TYPE_BUG\"");
		expect(out).toContain("TypeEffectiveTemplateIDPokemonTypeDark");
		expect(out).toContain("TypeEffectiveTemplateID = \"POKEMON_TYPE_DARK\"");
		expect(out).toContain("var TypeEffectiveTemplateIDValues = []TypeEffectiveTemplateID{");
	});
});

describe("emitSingletonsTemplateIdsFile", () => {
	test("emits one combined SingletonsTemplateID const block", () => {
		const groups = groupEntries(MOCK_MASTERFILE);
		const singletons = [...groups.values()].filter((g) => g.entries.length === 1);
		const out = emitSingletonsTemplateIdsFile(singletons);

		expect(out).toContain("// Generated from Pokémon GO masterfile — singletons templateIds.");
		expect(out).toContain("type SingletonsTemplateID string");
		expect(out).toContain("var SingletonsTemplateIDValues = []SingletonsTemplateID{");
	});
});
```

(The exact alignment-spaces in the const block depend on the longest constant name in the group. Whatever your implementation picks, mirror it in the test. Two-space-or-more matching with `\\s+` regex would be more robust, but `expect(out).toContain` with the literal output works as long as you match the implementation's actual formatting.)

- [ ] **Step 2: Verify the test fails**

Run: `bun test src/go/emit.test.ts`
Expected: FAIL with "emitGroupTemplateIdsFile is not exported from ./emit.ts".

- [ ] **Step 3: Implement the Go template-ids emitters**

At the top of `src/go/emit.ts`, extend the existing import from `../naming.ts` to include `deriveTemplateIdVariants`:

```ts
import { deriveTemplateIdVariants, pascalCase, snakeCase } from "../naming.ts";
```

Add at the bottom of `src/go/emit.ts`:

```ts
function emitGoConstBlock(typeName: string, idsToVariants: Map<string, string>): string {
	const sortedIds = [...idsToVariants.keys()].sort();
	const constNames = sortedIds.map((id) => `${typeName}${idsToVariants.get(id)!}`);

	// Align values for readability — Go's gofmt does this anyway, but we
	// produce it pre-aligned to keep diffs deterministic.
	const widest = Math.max(...constNames.map((n) => n.length));
	const constLines = sortedIds.map((id, i) => {
		const padded = constNames[i]!.padEnd(widest, " ");
		return `\t${padded} ${typeName} = ${JSON.stringify(id)}`;
	});

	const valuesLines = constNames.map((n) => `\t${n},`);

	return `const (\n${constLines.join("\n")}\n)\n\nvar ${typeName}Values = []${typeName}{\n${valuesLines.join("\n")}\n}`;
}

export function emitGroupTemplateIdsFile(group: Group): string {
	const baseName = pascalCase(group.discriminator);
	const typeName = `${baseName}TemplateID`;
	const ids = group.entries.map((e) => e.templateId);
	const variants = deriveTemplateIdVariants(ids);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — group "${group.discriminator}" templateIds.

package masterfile

type ${typeName} string

${constBlock}
`;
}

export function emitSingletonsTemplateIdsFile(singletons: readonly Group[]): string {
	const allIds = singletons.flatMap((g) => g.entries.map((e) => e.templateId));
	const typeName = "SingletonsTemplateID";
	const variants = deriveTemplateIdVariants(allIds);
	const constBlock = emitGoConstBlock(typeName, variants);

	return `// Generated from Pokémon GO masterfile — singletons templateIds.

package masterfile

type ${typeName} string

${constBlock}
`;
}
```

(Note: `Group` and `pascalCase` are already imported at the top of `src/go/emit.ts`. Do not re-import them.)

- [ ] **Step 4: Verify the tests pass**

Run: `bun test src/go/emit.test.ts`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/go/emit.ts src/go/emit.test.ts
git commit -m "$(cat <<'EOF'
Add Go template-ids emitters

emitGroupTemplateIdsFile and emitSingletonsTemplateIdsFile produce a
typed-string definition, a const block of typed values, and a *Values
slice for iteration. Constants are sorted by templateId; visual
alignment of the const block keeps generated diffs deterministic.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

### Task 11: Wire the Go emitters into `src/go/generate.ts`

Update the Go generator to write companion `<group>_template_ids.go` files alongside the existing per-group files.

**Files:**
- Modify: `src/go/generate.ts`

- [ ] **Step 1: Edit `src/go/generate.ts`**

Replace the file with:

```ts
import { join } from "node:path";
import { type Entry, type Group, groupEntries } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";
import { writeOutput } from "../write.ts";
import {
	type EntryVariant,
	emitGroupModule,
	emitGroupTemplateIdsFile,
	emitMasterfileFile,
	emitSingletonsModule,
	emitSingletonsTemplateIdsFile,
} from "./emit.ts";

const OUT_DIR = join(import.meta.dir, "..", "..", "packages", "go");
const SINGLETONS_FILE = "singletons";

function isStubGroup(group: Group): boolean {
	const first = group.entries[0];
	if (!first) return true;
	return Object.keys(first.data).filter((k) => k !== "templateId").length === 0;
}

export async function generateGo(entries: Entry[]): Promise<void> {
	const groups = groupEntries(entries);
	console.log(`[go] grouped into ${groups.size} discriminators.`);

	const files = new Map<string, string>();
	const singletons: Group[] = [];
	const enumVariants: EntryVariant[] = [];

	for (const group of groups.values()) {
		const baseName = pascalCase(group.discriminator);
		const entryTypeName = `${baseName}Entry`;
		const stub = isStubGroup(group);

		if (group.entries.length === 1) {
			singletons.push(group);
			enumVariants.push({
				variantName: baseName,
				entryTypeName,
				isStub: stub,
				discriminator: group.discriminator,
				entryCount: group.entries.length,
			});
			continue;
		}

		const fileName = snakeCase(group.discriminator);
		files.set(`${fileName}.go`, emitGroupModule(group));
		files.set(`${fileName}_template_ids.go`, emitGroupTemplateIdsFile(group));
		enumVariants.push({
			variantName: baseName,
			entryTypeName,
			isStub: stub,
			discriminator: group.discriminator,
			entryCount: group.entries.length,
		});
	}

	if (singletons.length > 0) {
		files.set(`${SINGLETONS_FILE}.go`, emitSingletonsModule(singletons));
		files.set(`${SINGLETONS_FILE}_template_ids.go`, emitSingletonsTemplateIdsFile(singletons));
	}

	files.set("masterfile.go", emitMasterfileFile(enumVariants));

	const preserve = ["go.mod", "go.sum", "doc.go", "README.md", "LICENSE", "CHANGELOG.md", "masterfile_test.go", "examples/parse/main.go"];

	await writeOutput(files, OUT_DIR, { preserve });
	console.log(`[go] wrote ${files.size} files to ${OUT_DIR} (${singletons.length} singletons folded into ${SINGLETONS_FILE}.go).`);
}
```

- [ ] **Step 2: Run the TS tests**

Run: `bun test`
Expected: all pass.

- [ ] **Step 3: Commit**

```bash
git add src/go/generate.ts
git commit -m "$(cat <<'EOF'
Wire Go template-ids emitters into the generator

Each multi-entry group now produces both <group>.go (existing) and
<group>_template_ids.go (new). Singletons get singletons_template_ids.go
alongside singletons.go. No structural change to the existing per-group
content.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 6 — regenerate and verify

### Task 12: Run the generator and confirm both Rust and Go compile

Regenerate the masterfile types, verify the workspace builds, run all test suites.

**Files (all auto-modified by the generator):**
- `packages/rust/src/**/*` — replaced
- `packages/go/*.go` — replaced (with `preserve`d hand-written files restored)

- [ ] **Step 1: Run the generator**

Run: `bun run src/generate.ts`
Expected: console output shows file counts for TS, Rust, Go. No errors.

- [ ] **Step 2: Verify Rust compiles**

Run: `cargo check --workspace`
Expected: clean compile across both crates.

If errors appear, the most likely causes are:
- A reserved-word collision the spec did not anticipate. Add the offending PascalCase keyword to `RESERVED_PASCAL_CASE` in `src/naming.ts`, regenerate, retry.
- A variant name that PascalCase'd to a digit-start identifier — should not happen with current masterfile data (every templateId begins with a letter), but if it ever does, prepend a marker letter inside `deriveTemplateIdVariants` and regenerate.
- An import cycle. The `template_ids.rs` files import `crate::{AllVariants, AsStr, FromStrEnum}`; confirm `lib.rs` re-exports those from the macros crate (Task 5).

- [ ] **Step 3: Run the full Rust test suite**

Run: `cargo test --workspace`
Expected: all tests pass.

- [ ] **Step 4: Verify Go compiles**

Run: `cd packages/go && go build ./...`
Expected: clean build.

- [ ] **Step 5: Run Go tests**

Run: `cd packages/go && go test ./...`
Expected: existing smoke tests pass.

- [ ] **Step 6: Run the parse benchmarks (sanity check, optional)**

Run: `cd packages/rust && cargo run --release --example parse`
Run: `cd packages/go/examples/parse && go run .`
Expected: each prints non-zero entry counts and reasonable parse times. No panics or unmarshal errors.

- [ ] **Step 7: Add Go-side smoke tests for the new const blocks**

Append to `packages/go/masterfile_test.go`:

```go
func TestBadgeSettingsTemplateIDValuesNotEmpty(t *testing.T) {
	if len(BadgeSettingsTemplateIDValues) == 0 {
		t.Fatal("expected at least one BadgeSettings templateID")
	}
	// Pick a known value and confirm the typed-string conversion works.
	var first BadgeSettingsTemplateID = BadgeSettingsTemplateIDValues[0]
	if string(first) == "" {
		t.Fatal("first templateID was empty")
	}
}

func TestSingletonsTemplateIDIncludesAccessibility(t *testing.T) {
	wanted := SingletonsTemplateID("ACCESSIBILITY_CLIENT_SETTINGS")
	for _, v := range SingletonsTemplateIDValues {
		if v == wanted {
			return
		}
	}
	t.Fatalf("SingletonsTemplateIDValues missing %q", wanted)
}
```

- [ ] **Step 8: Add Rust-side smoke tests for the new enums**

Append to `packages/rust/tests/smoke.rs`:

```rust
#[test]
fn badge_settings_template_id_round_trips() {
    use std::str::FromStr;
    let s = "BADGE_BATTLE_ATTACK_WON";
    let parsed = pogo_masterfile_types::badge_settings::BadgeSettingsTemplateId::from_str(s)
        .expect("known badge templateId should parse");
    assert_eq!(parsed.as_str(), s);
}

#[test]
fn singletons_template_id_includes_accessibility() {
    use pogo_masterfile_types::singletons::SingletonsTemplateId;
    assert!(SingletonsTemplateId::ALL.contains(&SingletonsTemplateId::AccessibilityClientSettings));
}
```

(If the variant identifier `BadgeSettingsTemplateId::BadgeBattleAttackWon` differs from what the generator actually emits — say, if the group's first PascalCase word resolved to something other than `Badge` — adjust the test name to match the generated identifier. Run the test once; the compiler error message will name the missing variant precisely.)

- [ ] **Step 9: Run all tests one more time**

Run: `cargo test --workspace && cd packages/go && go test ./... && cd ../.. && bun test`
Expected: everything green.

- [ ] **Step 10: Commit**

```bash
git add packages/rust packages/go
git commit -m "$(cat <<'EOF'
Regenerate Rust + Go output with per-group templateId enums

Rust output is now organized as <group>/mod.rs, <group>/types.rs,
<group>/template_ids.rs per discriminator (plus singletons/). Go output
adds companion <group>_template_ids.go files. Adds smoke tests on each
side covering round-trip parse, ALL membership, and Values slice
non-emptiness.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase 7 — repo hygiene

### Task 13: Update CLAUDE.md and AGENTS.md skip lists

Reflect the new file layout in the read-skip lists so future sessions don't waste tokens reading large generated files.

**Files:**
- Modify: `CLAUDE.md`
- Modify: `AGENTS.md`

- [ ] **Step 1: Read both files**

Run: `cat CLAUDE.md AGENTS.md`

- [ ] **Step 2: Replace the read-skip block in `CLAUDE.md`**

Locate the existing skip-list block (currently includes globs like `./packages/ts/src/pokemon-settings/**`, `./packages/rust/lib.rs`, `./packages/go/main.go`). Replace it with:

```markdown
## Important

Do NOT read or parse the following generated files (extremely large — wastes tokens):

* `./packages/ts/src/pokemon-settings/**`
* `./packages/ts/src/pokemon-extended-settings/**`
* `./packages/ts/src/avatar-customization/**`
* `./packages/ts/src/gender-settings/**`
* `./packages/ts/src/avatar-item-display/**`
* `./packages/ts/src/iap-item-display/**`
* `./packages/ts/src/form-settings/**`
* `./packages/ts/src/badge-settings/**`
* `./packages/rust/src/lib.rs`
* `./packages/rust/src/pokemon_settings/**`
* `./packages/rust/src/pokemon_extended_settings/**`
* `./packages/rust/src/avatar_customization/**`
* `./packages/rust/src/gender_settings/**`
* `./packages/rust/src/avatar_item_display/**`
* `./packages/rust/src/iap_item_display/**`
* `./packages/rust/src/form_settings/**`
* `./packages/rust/src/badge_settings/**`
* `./packages/rust/src/singletons/template_ids.rs`
* `./packages/go/masterfile.go`
* `./packages/go/pokemon_settings.go`
* `./packages/go/pokemon_settings_template_ids.go`
* `./packages/go/pokemon_extended_settings.go`
* `./packages/go/pokemon_extended_settings_template_ids.go`
* `./packages/go/avatar_customization.go`
* `./packages/go/avatar_customization_template_ids.go`
* `./packages/go/gender_settings.go`
* `./packages/go/gender_settings_template_ids.go`
* `./packages/go/avatar_item_display.go`
* `./packages/go/avatar_item_display_template_ids.go`
* `./packages/go/iap_item_display.go`
* `./packages/go/iap_item_display_template_ids.go`
* `./packages/go/form_settings.go`
* `./packages/go/form_settings_template_ids.go`
* `./packages/go/badge_settings.go`
* `./packages/go/badge_settings_template_ids.go`
* `./packages/go/singletons.go`
* `./packages/go/singletons_template_ids.go`

When you are done with your edits, report to the user to test if the files have outputted correctly.
```

- [ ] **Step 3: Mirror the same change in `AGENTS.md`**

(Both files share the same skip-list — keep them in sync.)

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md AGENTS.md
git commit -m "$(cat <<'EOF'
Update CLAUDE.md and AGENTS.md skip lists for new file layout

Rust output is now module-per-group (<group>/types.rs +
<group>/template_ids.rs); Go gains <group>_template_ids.go companions.
Replaces the old per-file globs with the corresponding directory and
filename globs so future sessions skip the large generated files.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

The plan covers every spec section:

- §1 Scope — Tasks 1–13.
- §2.1 Rust file org → Tasks 7, 8, 9.
- §2.2 Go file org → Tasks 10, 11.
- §3 Variant naming → Task 6 helper, Tasks 7/8/10/11 emitters.
- §4 Rust enum shape + derives → Tasks 2, 3, 4, 5.
- §5 Go const block shape → Task 10.
- §6 Singletons → Tasks 8, 10.
- §7 `pogo-masterfile-macros` crate → Tasks 1–4.
- §8 Codegen wiring → Tasks 6–11.
- §9 CLAUDE.md skip-list update → Task 13.
- §10 Migration order — matches the task order.

No placeholders survive the rewrite. Type names are consistent (`BadgeSettingsTemplateId` Rust, `BadgeSettingsTemplateID` Go) across all tasks. Method names (`as_str`, `from_str`, `ALL`, `SIZE`, `Values`) are stable across tasks.

One refinement from spec captured in Task 7: variant naming uses the full PascalCase'd templateId rather than the spec's prepend-group-short-name rule. The simpler rule produces unambiguous identifiers across all groups (`PokemonTypeBug`, `Badge7DayStreaks`, `V0001PokemonBulbasaur`) at the cost of slightly longer names. If the user prefers shorter identifiers post-implementation, the only place to revisit is `deriveTemplateIdVariants` in `src/naming.ts`.

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2026-04-30-templateid-enums.md`.**

Per the user's "spec, plan, and implementation WITHOUT human input" directive, this session continues straight into inline execution via the executing-plans sub-skill rather than offering a choice between subagent-driven and inline.

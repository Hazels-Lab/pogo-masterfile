# pogo-masterfile-macros

Procedural derive macros backing the [`pogo-masterfile-types`](https://crates.io/crates/pogo-masterfile-types) crate.

Three derives are exported:

- `AllVariants` — adds `pub const ALL: [Self; N]` and `pub const SIZE: usize`.
- `AsStr` — adds `pub const fn as_str(&self) -> &'static str` and `Display`. Reads `#[serde(rename = "...")]` per variant.
- `FromStrEnum` — adds `impl FromStr` whose `Err` is `pogo_masterfile_types::UnknownTemplateId`.

All three apply to enums with unit variants only (no fields). Mix and match as needed.

Re-exported from `pogo-masterfile-types` so consumers usually do not need a direct dependency.

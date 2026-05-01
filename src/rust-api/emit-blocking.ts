/**
 * No standalone blocking emitter — the per-group accessor methods on
 * `blocking::Masterfile` are emitted as part of `emit-lib.ts` (in the same
 * impl block, gated by `#[cfg(feature = "blocking")]`). The `blocking.rs`
 * template itself is hand-written and copied verbatim. This module exists
 * only so the import map stays explicit.
 */
export {};

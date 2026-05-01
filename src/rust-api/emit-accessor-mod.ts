import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

/**
 * Emit `packages/rust-api/src/accessor/mod.rs`.
 *
 * Barrel of per-group accessor modules — one per multi-entry group.
 *
 * Singletons are NOT included: each singleton has its own variant in the
 * upstream `MasterfileEntry` enum (no shared `Singletons(...)` wrapper),
 * so they don't fit the per-group accessor shape. Singleton lookup goes
 * through the top-level `Masterfile::get_entry(id)` + variant matching.
 */
export function emitAccessorMod(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);

	const moduleNames = multiEntry.map((g) => snakeCase(g.discriminator));
	moduleNames.sort();

	const modDecls = moduleNames.map((m) => `pub mod ${m};`).join("\n");
	const reExports = moduleNames.map((m) => `pub use ${m}::${pascalCase(m)}Accessor;`).join("\n");

	return `//! Generated from Pokémon GO masterfile — per-group accessor modules.

${modDecls}

${reExports}
`;
}

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

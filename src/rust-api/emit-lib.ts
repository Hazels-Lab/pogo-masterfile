import type { Group } from "../group.ts";
import { compareNaturalBy } from "../helpers.ts";
import { pascalCase, snakeCase } from "../naming.ts";

interface GroupFragments {
	/** snake_case discriminator — kept on the fragment so the list can be sorted stably. */
	snake: string;
	templateIdImport: string;
	indexField: string;
	buildLocal: string;
	buildMatchArm: string;
	buildAssignment: string;
	accessorMethod: string;
}

/**
 * Emit `packages/rust-api/src/lib.rs`.
 *
 * Crate root. Declares all submodules, re-exports the public surface,
 * defines the `GroupIndexes` struct that holds all per-group HashMap + order
 * fields, defines the global `entry_template_id` dispatcher, and adds
 * per-group accessor methods to both async `Masterfile` and `blocking::Masterfile`.
 *
 * Singletons aren't a per-group accessor — the upstream `MasterfileEntry`
 * enum has one variant per singleton (not a single `Singletons(...)` wrapper),
 * so they don't fit the multi-entry-shared-variant accessor shape. Users
 * access singletons via top-level `mf.get_entry(id)` + variant matching.
 * For lookup-by-id O(1) semantics, the global `by_id: HashMap<String, usize>`
 * already covers them.
 */
export function emitLib(groups: Map<string, Group>): string {
	const multiEntry = [...groups.values()].filter((g) => g.entries.length > 1);

	// Single pass: each group yields all six fragments it contributes to lib.rs.
	// Sort by snake-case name first so the emitted file is order-stable.
	const fragments: GroupFragments[] = multiEntry
		.map((g) => {
			const pascal = pascalCase(g.discriminator);
			const snake = snakeCase(g.discriminator);
			const variant = pascal; // MasterfileEntry::<variant>
			const templateIdType = `${pascal}TemplateId`;
			return {
				snake,
				templateIdImport: `\tpub use pogo_masterfile_types::${snake}::${templateIdType};`,
				indexField: `\tpub(crate) ${snake}_index: HashMap<${templateIdType}, usize>,\n\tpub(crate) ${snake}_order: Vec<usize>,`,
				buildLocal: `\t\tlet mut ${snake}_index: HashMap<${templateIdType}, usize> = HashMap::new();\n\t\tlet mut ${snake}_order: Vec<usize> = Vec::new();`,
				buildMatchArm: `\t\t\t\tMasterfileEntry::${variant}(_) => {\n\t\t\t\t\tif let Ok(typed) = entry.template_id().parse::<${templateIdType}>() {\n\t\t\t\t\t\t${snake}_index.insert(typed, idx);\n\t\t\t\t\t\t${snake}_order.push(idx);\n\t\t\t\t\t}\n\t\t\t\t}`,
				buildAssignment: `\t\t\t${snake}_index,\n\t\t\t${snake}_order,`,
				accessorMethod: `\tpub fn ${snake}(&self) -> accessor::${pascal}Accessor<'_> {\n\t\taccessor::${pascal}Accessor {\n\t\t\tentries: &self.entries,\n\t\t\tindex: &self.groups.${snake}_index,\n\t\t\torder: &self.groups.${snake}_order,\n\t\t}\n\t}`,
			};
		})
		.sort(compareNaturalBy((f) => f.snake));

	const templateIdImports = fragments.map((f) => f.templateIdImport).join("\n");
	const indexFields = fragments.map((f) => f.indexField).join("\n");
	const buildLocals = fragments.map((f) => f.buildLocal).join("\n");
	// Match arms in build(): one for each multi-entry variant + a wildcard
	// for everything else (singletons go to wildcard, no per-group bucket).
	const buildMatchArms = fragments.map((f) => f.buildMatchArm).join("\n");
	const buildAssignments = fragments.map((f) => f.buildAssignment).join("\n");
	const accessorMethods = fragments.map((f) => f.accessorMethod).join("\n\n");

	return `//! Generated from Pokémon GO masterfile — runtime API.
//!
//! Crate root. The hand-written templates (\`masterfile.rs\`, \`error.rs\`,
//! \`fetcher.rs\`, \`builder.rs\`, \`blocking.rs\`) are copied verbatim by codegen;
//! everything in THIS file (per-group accessor methods, the \`GroupIndexes\`
//! storage struct, upstream re-exports) is regenerated on every
//! \`bun run generate\`.

use std::collections::HashMap;

mod masterfile;
pub mod error;
pub mod fetcher;
#[cfg(feature = "async")]
pub mod builder;
pub mod accessor;

#[cfg(feature = "blocking")]
pub mod blocking;

#[cfg(feature = "async")]
pub use crate::builder::MasterfileBuilder;
pub use crate::error::{Error, Result};
pub use crate::fetcher::DEFAULT_MASTERFILE_URL;
#[cfg(feature = "async")]
pub use crate::fetcher::{Fetcher, ReqwestFetcher};
pub use crate::masterfile::Masterfile;

pub use pogo_masterfile_types::{parse_masterfile, MasterfileEntry, UnknownTemplateId};

// Bring the per-group TemplateId types into a flat module path so GroupIndexes
// can name them without a giant import block.
mod template_ids {
${templateIdImports}
}
use template_ids::*;

/// Per-group index storage. Owned by \`Masterfile\`. The hand-written
/// \`masterfile.rs\` template references this struct generically — the
/// per-group fields are filled in here so the template never has to know
/// the group set.
pub(crate) struct GroupIndexes {
${indexFields}
}

impl GroupIndexes {
\t/// Walk every entry once, dispatching by variant into the right per-group
\t/// index + order. Singletons fall through the wildcard arm — they're
\t/// addressable via the global \`by_id\` map but don't get a per-group bucket.
\tpub(crate) fn build(entries: &[MasterfileEntry]) -> Self {
${buildLocals}

\t\tfor (idx, entry) in entries.iter().enumerate() {
\t\t\tmatch entry {
${buildMatchArms}
\t\t\t\t_ => {}
\t\t\t}
\t\t}

\t\tSelf {
${buildAssignments}
\t\t}
\t}
}

impl Masterfile {
${accessorMethods}
}

#[cfg(feature = "blocking")]
impl blocking::Masterfile {
${accessorMethods}
}
`;
}

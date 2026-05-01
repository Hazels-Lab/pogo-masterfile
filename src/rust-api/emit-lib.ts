import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

interface GroupInfo {
	discriminator: string;
	pascal: string;
	snake: string;
	variant: string; // MasterfileEntry::<variant>
	templateIdType: string; // <Pascal>TemplateId
}

interface SingletonInfo {
	/** The MasterfileEntry variant for this singleton (== pascalCase of its data key). */
	variant: string;
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
	const singletons = [...groups.values()].filter((g) => g.entries.length === 1);

	const infos: GroupInfo[] = multiEntry.map((g) => ({
		discriminator: g.discriminator,
		pascal: pascalCase(g.discriminator),
		snake: snakeCase(g.discriminator),
		variant: pascalCase(g.discriminator),
		templateIdType: `${pascalCase(g.discriminator)}TemplateId`,
	}));
	infos.sort((a, b) => a.snake.localeCompare(b.snake));

	// Singletons each get their own MasterfileEntry variant, named after their
	// data-key (e.g. "accessibilitySettings" → AccessibilitySettings). The
	// templateIdMatchArms must enumerate every variant, including singleton ones.
	const singletonInfos: SingletonInfo[] = singletons.map((g) => ({ variant: pascalCase(g.discriminator) })).sort((a, b) => a.variant.localeCompare(b.variant));

	const templateIdImports = infos.map((i) => `\tpub use pogo_masterfile_types::${i.snake}::${i.templateIdType};`).join("\n");

	const indexFields = infos
		.map((info) => `\tpub(crate) ${info.snake}_index: HashMap<${info.templateIdType}, usize>,\n\tpub(crate) ${info.snake}_order: Vec<usize>,`)
		.join("\n");

	const buildLocals = infos
		.map(
			(info) =>
				`\t\tlet mut ${info.snake}_index: HashMap<${info.templateIdType}, usize> = HashMap::new();\n\t\tlet mut ${info.snake}_order: Vec<usize> = Vec::new();`,
		)
		.join("\n");

	// Match arms in build(): one for each multi-entry variant + a wildcard
	// for everything else (singletons go to wildcard, no per-group bucket).
	const buildMatchArms = infos
		.map(
			(info) =>
				`\t\t\t\tMasterfileEntry::${info.variant}(_) => {\n\t\t\t\t\tif let Ok(typed) = entry_template_id(entry).parse::<${info.templateIdType}>() {\n\t\t\t\t\t\t${info.snake}_index.insert(typed, idx);\n\t\t\t\t\t\t${info.snake}_order.push(idx);\n\t\t\t\t\t}\n\t\t\t\t}`,
		)
		.join("\n");

	const buildAssignments = infos.map((info) => `\t\t\t${info.snake}_index,\n\t\t\t${info.snake}_order,`).join("\n");

	const accessorMethods = infos
		.map(
			(info) =>
				`\tpub fn ${info.snake}(&self) -> accessor::${info.pascal}Accessor<'_> {\n\t\taccessor::${info.pascal}Accessor {\n\t\t\tentries: &self.entries,\n\t\t\tindex: &self.groups.${info.snake}_index,\n\t\t\torder: &self.groups.${info.snake}_order,\n\t\t}\n\t}`,
		)
		.join("\n\n");

	// templateIdMatchArms must enumerate EVERY MasterfileEntry variant —
	// multi-entry groups and every singleton — so the function is total.
	const allVariantArms = [
		...infos.map((info) => `\t\tMasterfileEntry::${info.variant}(e) => e.template_id.as_str(),`),
		...singletonInfos.map((s) => `\t\tMasterfileEntry::${s.variant}(e) => e.template_id.as_str(),`),
	].join("\n");

	// Imports for the variant entry types — we don't actually need them at
	// the lib.rs level (the match dispatches on enum variants directly), but
	// we DO need the per-group TemplateId types for GroupIndexes' fields.

	return `//! Generated from Pokémon GO masterfile — runtime API.
//!
//! Crate root. The hand-written templates (\`masterfile.rs\`, \`error.rs\`,
//! \`fetcher.rs\`, \`builder.rs\`, \`blocking.rs\`) are copied verbatim by codegen;
//! everything in THIS file (per-group accessor methods, the \`GroupIndexes\`
//! storage struct, the \`entry_template_id\` dispatcher, upstream re-exports)
//! is regenerated on every \`bun run generate\`.

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

/// Extract the templateId string from any MasterfileEntry variant. Total
/// over every variant including singletons.
pub(crate) fn entry_template_id(entry: &MasterfileEntry) -> &str {
\tmatch entry {
${allVariantArms}
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

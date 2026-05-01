import type { Group } from "../group.ts";
import { pascalCase, snakeCase } from "../naming.ts";

const SINGLETONS_KEY = "singletons";

interface GroupInfo {
	discriminator: string;
	pascal: string;
	snake: string;
	variant: string;
	templateIdType: string;
}

/**
 * Emit `packages/rust-api/src/lib.rs`.
 *
 * Crate root. Declares all submodules, re-exports the public surface,
 * defines the GroupIndexes struct that holds all per-group HashMap + order
 * fields, defines the global entry_template_id dispatcher, and adds
 * per-group accessor methods to both async Masterfile and blocking::Masterfile.
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

	const templateIdImports = infos.map((i) => `\t${i.templateIdType},`).join("\n");

	const indexFields = infos
		.map(
			(info) =>
				`\tpub(crate) ${info.snake}_index: HashMap<${info.templateIdType}, usize>,\n\tpub(crate) ${info.snake}_order: Vec<usize>,`,
		)
		.join("\n");

	const buildLocals = infos
		.map(
			(info) =>
				`\t\tlet mut ${info.snake}_index: HashMap<${info.templateIdType}, usize> = HashMap::new();\n\t\tlet mut ${info.snake}_order: Vec<usize> = Vec::new();`,
		)
		.join("\n");

	const buildMatchArms = infos
		.map(
			(info) =>
				`\t\t\t\tMasterfileEntry::${info.variant}(_) => {\n\t\t\t\t\tif let Ok(typed) = entry_template_id(entry).parse::<${info.templateIdType}>() {\n\t\t\t\t\t\t${info.snake}_index.insert(typed, idx);\n\t\t\t\t\t\t${info.snake}_order.push(idx);\n\t\t\t\t\t}\n\t\t\t\t}`,
		)
		.join("\n");

	const buildAssignments = infos
		.map((info) => `\t\t\t${info.snake}_index,\n\t\t\t${info.snake}_order,`)
		.join("\n");

	const accessorMethods = infos
		.map(
			(info) =>
				`\tpub fn ${info.snake}(&self) -> accessor::${info.pascal}Accessor<'_> {\n\t\taccessor::${info.pascal}Accessor {\n\t\t\tentries: &self.entries,\n\t\t\tindex: &self.groups.${info.snake}_index,\n\t\t\torder: &self.groups.${info.snake}_order,\n\t\t}\n\t}`,
		)
		.join("\n\n");

	const templateIdMatchArms = infos
		.map((info) => `\t\tMasterfileEntry::${info.variant}(e) => e.template_id.as_str(),`)
		.join("\n");

	return `//! Generated from Pokémon GO masterfile — runtime API.
//!
//! Crate root. The hand-written templates (\`masterfile.rs\`, \`error.rs\`,
//! \`fetcher.rs\`, \`builder.rs\`, \`blocking.rs\`) are copied verbatim by codegen;
//! everything in THIS file (per-group accessor methods, the \`GroupIndexes\`
//! storage struct, the \`entry_template_id\` dispatcher, upstream re-exports)
//! is regenerated on every \`bun run generate\`.

use std::collections::HashMap;

use pogo_masterfile_types::{
${templateIdImports}
};

mod masterfile;
pub mod error;
pub mod fetcher;
pub mod builder;
pub mod accessor;

#[cfg(feature = "blocking")]
pub mod blocking;

pub use crate::builder::MasterfileBuilder;
pub use crate::error::{Error, Result};
pub use crate::fetcher::{Fetcher, ReqwestFetcher, DEFAULT_MASTERFILE_URL};
pub use crate::masterfile::Masterfile;

pub use pogo_masterfile_types::{parse_masterfile, MasterfileEntry, UnknownTemplateId};

/// Per-group index storage. Owned by \`Masterfile\`. The hand-written
/// \`masterfile.rs\` template references this struct generically — the
/// per-group fields are filled in here so the template never has to know
/// the group set.
pub(crate) struct GroupIndexes {
${indexFields}
}

impl GroupIndexes {
\t/// Walk every entry once, dispatching by variant into the right per-group
\t/// index + order.
\tpub(crate) fn build(entries: &[MasterfileEntry]) -> Self {
${buildLocals}

\t\tfor (idx, entry) in entries.iter().enumerate() {
\t\t\tmatch entry {
${buildMatchArms}
\t\t\t}
\t\t}

\t\tSelf {
${buildAssignments}
\t\t}
\t}
}

/// Extract the templateId string from any MasterfileEntry variant.
pub(crate) fn entry_template_id(entry: &MasterfileEntry) -> &str {
\tmatch entry {
${templateIdMatchArms}
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

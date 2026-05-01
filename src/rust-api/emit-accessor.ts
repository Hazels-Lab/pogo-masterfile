import type { Group } from "../group.ts";
import { pascalCase } from "../naming.ts";

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
	const gName = pascalCase(group.discriminator);
	const entryType = `${gName}Entry`;
	const templateIdType = `${gName}TemplateId`;
	const accessorName = `${gName}Accessor`;

	return `//! Generated from Pokémon GO masterfile — accessor for "${group.discriminator}".

use std::collections::HashMap;

use pogo_masterfile_types::{${entryType}, ${templateIdType}, MasterfileEntry};

pub struct ${accessorName}<'a> {
\tpub(crate) entries: &'a [MasterfileEntry],
\tpub(crate) index: &'a HashMap<${templateIdType}, usize>,
\tpub(crate) order: &'a [usize],
}

impl<'a> ${accessorName}<'a> {
\t/// Look up an entry by its templateId. Accepts either the typed
\t/// \`${templateIdType}\` enum variant (compile-time validated) or
\t/// \`&str\` (runtime-parsed via \`FromStr\`). Returns \`None\` if the string
\t/// fails to parse OR no entry exists for the ID.
\tpub fn get<I>(&self, id: I) -> Option<&'a ${entryType}>
\twhere
\t\tI: TryInto<${templateIdType}>,
\t{
\t\tlet typed = id.try_into().ok()?;
\t\tlet idx = *self.index.get(&typed)?;
\t\tmatch &self.entries[idx] {
\t\t\tMasterfileEntry::${gName}(e) => Some(e),
\t\t\t_ => None,
\t\t}
\t}

\tpub fn has<I>(&self, id: I) -> bool
\twhere
\t\tI: TryInto<${templateIdType}>,
\t{
\t\tself.get(id).is_some()
\t}

\tpub fn iter(&self) -> impl Iterator<Item = &'a ${entryType}> + '_ {
\t\tself.order.iter().filter_map(|&idx| match &self.entries[idx] {
\t\t\tMasterfileEntry::${gName}(e) => Some(e),
\t\t\t_ => None,
\t\t})
\t}

\tpub fn template_ids(&self) -> impl Iterator<Item = ${templateIdType}> + '_ {
\t\tself.index.keys().copied()
\t}

\tpub fn len(&self) -> usize {
\t\tself.order.len()
\t}

\tpub fn is_empty(&self) -> bool {
\t\tself.order.is_empty()
\t}
}
`;
}

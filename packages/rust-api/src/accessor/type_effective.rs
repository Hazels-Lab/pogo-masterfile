//! Generated from Pokémon GO masterfile — accessor for "typeEffective".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    type_effective::{TypeEffectiveEntry, TypeEffectiveTemplateId},
};

pub struct TypeEffectiveAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<TypeEffectiveTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> TypeEffectiveAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `TypeEffectiveTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a TypeEffectiveEntry>
    where
        I: TryInto<TypeEffectiveTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::TypeEffective(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<TypeEffectiveTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a TypeEffectiveEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::TypeEffective(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = TypeEffectiveTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

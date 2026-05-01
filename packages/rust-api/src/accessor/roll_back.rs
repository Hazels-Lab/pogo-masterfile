//! Generated from Pokémon GO masterfile — accessor for "rollBack".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    roll_back::{RollBackEntry, RollBackTemplateId},
};

pub struct RollBackAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<RollBackTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> RollBackAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `RollBackTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a RollBackEntry>
    where
        I: TryInto<RollBackTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::RollBack(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<RollBackTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a RollBackEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::RollBack(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = RollBackTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

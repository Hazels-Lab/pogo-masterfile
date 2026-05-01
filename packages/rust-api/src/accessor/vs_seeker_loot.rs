//! Generated from Pokémon GO masterfile — accessor for "vsSeekerLoot".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    vs_seeker_loot::{VsSeekerLootEntry, VsSeekerLootTemplateId},
};

pub struct VsSeekerLootAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<VsSeekerLootTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> VsSeekerLootAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `VsSeekerLootTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a VsSeekerLootEntry>
    where
        I: TryInto<VsSeekerLootTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::VsSeekerLoot(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<VsSeekerLootTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a VsSeekerLootEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::VsSeekerLoot(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = VsSeekerLootTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

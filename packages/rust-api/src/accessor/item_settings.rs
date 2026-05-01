//! Generated from Pokémon GO masterfile — accessor for "itemSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    item_settings::{ItemSettingsEntry, ItemSettingsTemplateId},
};

pub struct ItemSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<ItemSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> ItemSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `ItemSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a ItemSettingsEntry>
    where
        I: TryInto<ItemSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::ItemSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<ItemSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a ItemSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::ItemSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = ItemSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

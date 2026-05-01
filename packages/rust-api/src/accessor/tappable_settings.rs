//! Generated from Pokémon GO masterfile — accessor for "tappableSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    tappable_settings::{TappableSettingsEntry, TappableSettingsTemplateId},
};

pub struct TappableSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<TappableSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> TappableSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `TappableSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a TappableSettingsEntry>
    where
        I: TryInto<TappableSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::TappableSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<TappableSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a TappableSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::TappableSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = TappableSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

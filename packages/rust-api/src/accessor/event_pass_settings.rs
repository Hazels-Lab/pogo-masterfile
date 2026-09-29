//! Generated from Pokémon GO masterfile — accessor for "eventPassSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    event_pass_settings::{EventPassSettingsEntry, EventPassSettingsTemplateId},
};

pub struct EventPassSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<EventPassSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> EventPassSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `EventPassSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a EventPassSettingsEntry>
    where
        I: TryInto<EventPassSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::EventPassSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<EventPassSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a EventPassSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::EventPassSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = EventPassSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

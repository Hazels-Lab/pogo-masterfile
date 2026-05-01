//! Generated from Pokémon GO masterfile — accessor for "eventPassTierSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    event_pass_tier_settings::{EventPassTierSettingsEntry, EventPassTierSettingsTemplateId},
};

pub struct EventPassTierSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<EventPassTierSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> EventPassTierSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `EventPassTierSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a EventPassTierSettingsEntry>
    where
        I: TryInto<EventPassTierSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::EventPassTierSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<EventPassTierSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a EventPassTierSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::EventPassTierSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = EventPassTierSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

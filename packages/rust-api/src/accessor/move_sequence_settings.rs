//! Generated from Pokémon GO masterfile — accessor for "moveSequenceSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    move_sequence_settings::{MoveSequenceSettingsEntry, MoveSequenceSettingsTemplateId},
};

pub struct MoveSequenceSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<MoveSequenceSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> MoveSequenceSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `MoveSequenceSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a MoveSequenceSettingsEntry>
    where
        I: TryInto<MoveSequenceSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::MoveSequenceSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<MoveSequenceSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a MoveSequenceSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::MoveSequenceSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = MoveSequenceSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

//! Generated from Pokémon GO masterfile — accessor for "fortPowerUpLevelSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    fort_power_up_level_settings::{
        FortPowerUpLevelSettingsEntry, FortPowerUpLevelSettingsTemplateId,
    },
};

pub struct FortPowerUpLevelSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<FortPowerUpLevelSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> FortPowerUpLevelSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `FortPowerUpLevelSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a FortPowerUpLevelSettingsEntry>
    where
        I: TryInto<FortPowerUpLevelSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::FortPowerUpLevelSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<FortPowerUpLevelSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a FortPowerUpLevelSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::FortPowerUpLevelSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = FortPowerUpLevelSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

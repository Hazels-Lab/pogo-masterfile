//! Generated from Pokémon GO masterfile — accessor for "pokemonExtendedSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    pokemon_extended_settings::{PokemonExtendedSettingsEntry, PokemonExtendedSettingsTemplateId},
};

pub struct PokemonExtendedSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<PokemonExtendedSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> PokemonExtendedSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `PokemonExtendedSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a PokemonExtendedSettingsEntry>
    where
        I: TryInto<PokemonExtendedSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::PokemonExtendedSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<PokemonExtendedSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a PokemonExtendedSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::PokemonExtendedSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = PokemonExtendedSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

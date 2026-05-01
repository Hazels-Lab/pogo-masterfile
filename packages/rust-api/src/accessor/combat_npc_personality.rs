//! Generated from Pokémon GO masterfile — accessor for "combatNpcPersonality".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    combat_npc_personality::{CombatNpcPersonalityEntry, CombatNpcPersonalityTemplateId},
};

pub struct CombatNpcPersonalityAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<CombatNpcPersonalityTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> CombatNpcPersonalityAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `CombatNpcPersonalityTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a CombatNpcPersonalityEntry>
    where
        I: TryInto<CombatNpcPersonalityTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::CombatNpcPersonality(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<CombatNpcPersonalityTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a CombatNpcPersonalityEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::CombatNpcPersonality(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = CombatNpcPersonalityTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

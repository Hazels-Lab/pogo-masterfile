//! Generated from Pokémon GO masterfile — accessor for "avatarGroupOrderSettings".

use std::collections::HashMap;

use pogo_masterfile_types::{
    MasterfileEntry,
    avatar_group_order_settings::{
        AvatarGroupOrderSettingsEntry, AvatarGroupOrderSettingsTemplateId,
    },
};

pub struct AvatarGroupOrderSettingsAccessor<'a> {
    pub(crate) entries: &'a [MasterfileEntry],
    pub(crate) index: &'a HashMap<AvatarGroupOrderSettingsTemplateId, usize>,
    pub(crate) order: &'a [usize],
}

impl<'a> AvatarGroupOrderSettingsAccessor<'a> {
    /// Look up an entry by its templateId. Accepts either the typed
    /// `AvatarGroupOrderSettingsTemplateId` enum variant (compile-time validated) or
    /// `&str` (runtime-parsed via `FromStr`). Returns `None` if the string
    /// fails to parse OR no entry exists for the ID.
    pub fn get<I>(&self, id: I) -> Option<&'a AvatarGroupOrderSettingsEntry>
    where
        I: TryInto<AvatarGroupOrderSettingsTemplateId>,
    {
        let typed = id.try_into().ok()?;
        let idx = *self.index.get(&typed)?;
        match &self.entries[idx] {
            MasterfileEntry::AvatarGroupOrderSettings(e) => Some(e),
            _ => None,
        }
    }

    pub fn has<I>(&self, id: I) -> bool
    where
        I: TryInto<AvatarGroupOrderSettingsTemplateId>,
    {
        self.get(id).is_some()
    }

    pub fn iter(&self) -> impl Iterator<Item = &'a AvatarGroupOrderSettingsEntry> + '_ {
        self.order
            .iter()
            .filter_map(|&idx| match &self.entries[idx] {
                MasterfileEntry::AvatarGroupOrderSettings(e) => Some(e),
                _ => None,
            })
    }

    pub fn template_ids(&self) -> impl Iterator<Item = AvatarGroupOrderSettingsTemplateId> + '_ {
        self.index.keys().copied()
    }

    pub fn len(&self) -> usize {
        self.order.len()
    }

    pub fn is_empty(&self) -> bool {
        self.order.is_empty()
    }
}

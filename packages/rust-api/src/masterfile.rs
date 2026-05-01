//! The Masterfile struct + top-level methods. Per-group accessor methods
//! are emitted into the impl block in `lib.rs` by codegen — that file
//! contains an `impl Masterfile { /* per-group methods */ }` block.

use std::collections::HashMap;

use pogo_masterfile_types::MasterfileEntry;

use crate::error::Result;
use crate::{GroupIndexes, entry_template_id};

#[cfg(feature = "async")]
use crate::builder::MasterfileBuilder;

pub struct Masterfile {
    pub(crate) entries: Vec<MasterfileEntry>,
    pub(crate) by_id: HashMap<String, usize>,
    pub(crate) groups: GroupIndexes,
}

impl Masterfile {
    // ── Loaders ──────────────────────────────────────────────────

    #[cfg(feature = "async")]
    pub fn builder() -> MasterfileBuilder {
        MasterfileBuilder::new()
    }

    /// Convenience: equivalent to `Masterfile::builder().fetch().await`.
    #[cfg(feature = "async")]
    pub async fn from_remote() -> Result<Self> {
        Self::builder().fetch().await
    }

    /// Parse from a JSON string. Sync — no I/O.
    pub fn from_json(json: &str) -> Result<Self> {
        let entries = pogo_masterfile_types::parse_masterfile(json)?;
        Ok(Self::from_entries(entries))
    }

    /// Wrap an already-parsed entry vec.
    pub fn from_entries(entries: Vec<MasterfileEntry>) -> Self {
        let by_id = entries
            .iter()
            .enumerate()
            .map(|(i, e)| (entry_template_id(e).to_string(), i))
            .collect();
        let groups = GroupIndexes::build(&entries);
        Self {
            entries,
            by_id,
            groups,
        }
    }

    // ── Top-level lookups ────────────────────────────────────────

    pub fn get_entry(&self, id: &str) -> Option<&MasterfileEntry> {
        let &idx = self.by_id.get(id)?;
        self.entries.get(idx)
    }

    pub fn has(&self, id: &str) -> bool {
        self.by_id.contains_key(id)
    }

    // ── Iteration / introspection ────────────────────────────────

    pub fn entries(&self) -> &[MasterfileEntry] {
        &self.entries
    }

    pub fn len(&self) -> usize {
        self.entries.len()
    }

    pub fn is_empty(&self) -> bool {
        self.entries.is_empty()
    }

    pub fn iter(&self) -> std::slice::Iter<'_, MasterfileEntry> {
        self.entries.iter()
    }

    pub fn template_ids(&self) -> impl Iterator<Item = &str> + '_ {
        self.entries.iter().map(|e| entry_template_id(e))
    }

    // ── Mutation (require &mut self — invalidates outstanding borrows) ──

    #[cfg(feature = "async")]
    pub async fn refresh(&mut self) -> Result<()> {
        let fresh = Self::from_remote().await?;
        *self = fresh;
        Ok(())
    }

    pub fn update(&mut self, entries: Vec<MasterfileEntry>) {
        *self = Self::from_entries(entries);
    }
}

// IntoIterator so `for entry in &mf { ... }` works.
impl<'a> IntoIterator for &'a Masterfile {
    type Item = &'a MasterfileEntry;
    type IntoIter = std::slice::Iter<'a, MasterfileEntry>;
    fn into_iter(self) -> Self::IntoIter {
        self.iter()
    }
}

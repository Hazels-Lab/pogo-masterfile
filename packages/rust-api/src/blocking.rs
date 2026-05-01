//! Blocking-flavored Masterfile. Same struct fields, sync `from_remote`
//! and `refresh`. The per-group accessor methods are appended by codegen
//! in `lib.rs` (inside an `#[cfg(feature = "blocking")]` impl block).

#![cfg(feature = "blocking")]

use std::collections::HashMap;
use std::time::Duration;

use pogo_masterfile_types::MasterfileEntry;

use crate::error::Result;
use crate::fetcher::DEFAULT_MASTERFILE_URL;
use crate::fetcher::blocking::{BlockingFetcher, ReqwestFetcher};
use crate::{GroupIndexes, entry_template_id};

pub struct Masterfile {
    pub(crate) entries: Vec<MasterfileEntry>,
    pub(crate) by_id: HashMap<String, usize>,
    pub(crate) groups: GroupIndexes,
}

pub struct MasterfileBuilder {
    url: Option<String>,
    timeout: Option<Duration>,
    fetcher: Option<Box<dyn BlockingFetcher>>,
}

impl MasterfileBuilder {
    pub fn url(mut self, url: impl Into<String>) -> Self {
        self.url = Some(url.into());
        self
    }

    pub fn timeout(mut self, timeout: Duration) -> Self {
        self.timeout = Some(timeout);
        self
    }

    pub fn fetcher(mut self, fetcher: impl BlockingFetcher + 'static) -> Self {
        self.fetcher = Some(Box::new(fetcher));
        self
    }

    pub fn fetch(self) -> Result<Masterfile> {
        let url = self
            .url
            .unwrap_or_else(|| DEFAULT_MASTERFILE_URL.to_string());
        let entries = match self.fetcher {
            Some(f) => f.fetch(&url)?,
            None => {
                let mut builder = reqwest::blocking::Client::builder();
                if let Some(t) = self.timeout {
                    builder = builder.timeout(t);
                }
                let client = builder.build().expect("reqwest blocking client");
                ReqwestFetcher::with_client(client).fetch(&url)?
            }
        };
        Ok(Masterfile::from_entries(entries))
    }
}

impl Masterfile {
    pub fn builder() -> MasterfileBuilder {
        MasterfileBuilder {
            url: None,
            timeout: None,
            fetcher: None,
        }
    }

    pub fn from_remote() -> Result<Self> {
        Self::builder().fetch()
    }

    pub fn from_json(json: &str) -> Result<Self> {
        let entries = pogo_masterfile_types::parse_masterfile(json)?;
        Ok(Self::from_entries(entries))
    }

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

    pub fn get_entry(&self, id: &str) -> Option<&MasterfileEntry> {
        let &idx = self.by_id.get(id)?;
        self.entries.get(idx)
    }

    pub fn has(&self, id: &str) -> bool {
        self.by_id.contains_key(id)
    }

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
        self.entries.iter().map(entry_template_id)
    }

    pub fn refresh(&mut self) -> Result<()> {
        let fresh = Self::from_remote()?;
        *self = fresh;
        Ok(())
    }

    pub fn update(&mut self, entries: Vec<MasterfileEntry>) {
        *self = Self::from_entries(entries);
    }
}

impl<'a> IntoIterator for &'a Masterfile {
    type Item = &'a MasterfileEntry;
    type IntoIter = std::slice::Iter<'a, MasterfileEntry>;
    fn into_iter(self) -> Self::IntoIter {
        self.iter()
    }
}

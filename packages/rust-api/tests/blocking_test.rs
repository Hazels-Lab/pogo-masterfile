//! Blocking variant — same patterns as the async tests.

#![cfg(feature = "blocking")]

#[allow(dead_code)]
mod common;

use common::fixture;
use pogo_masterfile::blocking::Masterfile;
use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;

#[test]
fn blocking_from_entries_works() {
	let mf = Masterfile::from_entries(fixture());
	assert_eq!(mf.len(), fixture().len());
}

#[test]
fn blocking_from_json_works() {
	let json = serde_json::to_string(&fixture()).unwrap();
	let mf = Masterfile::from_json(&json).unwrap();
	assert_eq!(mf.len(), fixture().len());
}

#[test]
fn blocking_per_group_accessor() {
	let mf = Masterfile::from_entries(fixture());
	let move_ = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	assert!(move_.is_some());
}

#[test]
fn blocking_iteration() {
	let mf = Masterfile::from_entries(fixture());
	let mut count = 0;
	for _entry in &mf {
		count += 1;
	}
	assert_eq!(count, fixture().len());
}

#[test]
fn blocking_builder_with_mock_fetcher() {
	use pogo_masterfile::fetcher::blocking::BlockingFetcher;
	use pogo_masterfile::Result;
	use pogo_masterfile_types::MasterfileEntry;

	struct Mock(Vec<MasterfileEntry>);
	impl BlockingFetcher for Mock {
		fn fetch(&self, _url: &str) -> Result<Vec<MasterfileEntry>> {
			Ok(self.0.clone())
		}
	}

	let mf = Masterfile::builder().fetcher(Mock(fixture())).fetch().unwrap();
	assert_eq!(mf.len(), fixture().len());
}

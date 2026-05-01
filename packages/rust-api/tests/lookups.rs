//! Top-level vs per-group lookups.

#[allow(dead_code)]
mod common;

use std::str::FromStr;

use common::fixture;
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::{move_settings::MoveSettingsTemplateId, MasterfileEntry};

#[test]
fn get_entry_returns_wide_masterfile_entry() {
	let mf = Masterfile::from_entries(fixture());
	let entry = mf.get_entry("V0022_MOVE_MEGAHORN").unwrap();
	match entry {
		MasterfileEntry::MoveSettings(_) => {}
		_ => panic!("expected MoveSettings variant"),
	}
}

#[test]
fn get_entry_returns_none_on_miss() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.get_entry("DOES_NOT_EXIST").is_none());
}

#[test]
fn has_returns_correct_bool() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.has("V0022_MOVE_MEGAHORN"));
	assert!(!mf.has("DOES_NOT_EXIST"));
}

#[test]
fn per_group_accessor_get_with_typed_id() {
	let mf = Masterfile::from_entries(fixture());
	let move_ = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	assert!(move_.is_some());
}

#[test]
fn per_group_accessor_get_with_parsed_id() {
	let mf = Masterfile::from_entries(fixture());
	let id = MoveSettingsTemplateId::from_str("V0022_MOVE_MEGAHORN").unwrap();
	let move_ = mf.move_settings().get(id);
	assert!(move_.is_some());
}

#[test]
fn per_group_accessor_get_returns_none_on_unknown_id() {
	// "V0001_POKEMON_BULBASAUR" doesn't parse as a MoveSettingsTemplateId,
	// so from_str returns an error.
	let id = MoveSettingsTemplateId::from_str("V0001_POKEMON_BULBASAUR");
	assert!(id.is_err(), "bulbasaur should not parse as a move id");
}

#[test]
fn per_group_accessor_has_typed() {
	let mf = Masterfile::from_entries(fixture());
	assert!(mf.move_settings().has(MoveSettingsTemplateId::V0022MoveMegahorn));
}

#[test]
fn per_group_len() {
	let mf = Masterfile::from_entries(fixture());
	assert_eq!(mf.move_settings().len(), 1);
	assert_eq!(mf.pokemon_settings().len(), 1);
	assert_eq!(mf.item_settings().len(), 1);
}

//! Top-level vs per-group lookups.

#[allow(dead_code)]
mod common;

use common::fixture;
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::{MasterfileEntry, move_settings::MoveSettingsTemplateId};

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
fn per_group_accessor_get_with_str() {
    // The polymorphic `get<I: TryInto<TemplateId>>` accepts &str directly via
    // the macro-emitted `impl TryFrom<&str>` on each TemplateId enum.
    let mf = Masterfile::from_entries(fixture());
    let move_ = mf.move_settings().get("V0022_MOVE_MEGAHORN");
    assert!(move_.is_some());
}

#[test]
fn per_group_accessor_get_returns_none_on_unparseable_str() {
    // "V0001_POKEMON_BULBASAUR" isn't a valid MoveSettingsTemplateId — the
    // TryFrom<&str> conversion errs, and `get` returns None.
    let mf = Masterfile::from_entries(fixture());
    let result = mf.move_settings().get("V0001_POKEMON_BULBASAUR");
    assert!(result.is_none());
}

#[test]
fn per_group_accessor_has_typed() {
    let mf = Masterfile::from_entries(fixture());
    assert!(
        mf.move_settings()
            .has(MoveSettingsTemplateId::V0022MoveMegahorn)
    );
}

#[test]
fn per_group_accessor_has_with_str() {
    // Same polymorphic pattern as `get`.
    let mf = Masterfile::from_entries(fixture());
    assert!(mf.move_settings().has("V0022_MOVE_MEGAHORN"));
    assert!(!mf.move_settings().has("V0001_POKEMON_BULBASAUR"));
    assert!(!mf.move_settings().has("DOES_NOT_PARSE_AT_ALL"));
}

#[test]
fn per_group_len() {
    let mf = Masterfile::from_entries(fixture());
    assert_eq!(mf.move_settings().len(), 1);
    assert_eq!(mf.pokemon_settings().len(), 1);
    assert_eq!(mf.item_settings().len(), 1);
}

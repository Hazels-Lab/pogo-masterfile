//! Iteration patterns.

#[allow(dead_code)]
mod common;

use common::fixture;
use pogo_masterfile::Masterfile;
use pogo_masterfile_types::MasterfileEntry;

#[test]
fn for_loop_yields_each_entry() {
    let mf = Masterfile::from_entries(fixture());
    let mut count = 0;
    for _entry in &mf {
        count += 1;
    }
    assert_eq!(count, fixture().len());
}

#[test]
fn iter_filter_collect() {
    let mf = Masterfile::from_entries(fixture());
    let items: Vec<_> = mf
        .iter()
        .filter(|e| matches!(e, MasterfileEntry::ItemSettings(_)))
        .collect();
    assert_eq!(items.len(), 1);
}

#[test]
fn template_ids_yields_every_id() {
    let mf = Masterfile::from_entries(fixture());
    let ids: Vec<_> = mf.template_ids().collect();
    assert!(ids.contains(&"ITEM_POTION"));
    assert!(ids.contains(&"V0001_POKEMON_BULBASAUR"));
    assert!(ids.contains(&"V0022_MOVE_MEGAHORN"));
}

#[test]
fn per_group_iter_yields_only_that_groups_entries() {
    let mf = Masterfile::from_entries(fixture());
    let moves: Vec<_> = mf.move_settings().iter().collect();
    assert_eq!(moves.len(), 1);
}

#[test]
fn per_group_template_ids() {
    let mf = Masterfile::from_entries(fixture());
    let ids: Vec<_> = mf.move_settings().template_ids().collect();
    assert_eq!(ids.len(), 1);
}

#[test]
fn entries_returns_slice() {
    let mf = Masterfile::from_entries(fixture());
    let slice = mf.entries();
    assert_eq!(slice.len(), 3);
}

#[test]
fn is_empty_works() {
    let mf = Masterfile::from_entries(Vec::new());
    assert!(mf.is_empty());
    assert_eq!(mf.len(), 0);
}

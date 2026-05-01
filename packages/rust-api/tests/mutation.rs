//! Mutation: update + refresh.

#[allow(dead_code)]
mod common;

use common::fixture;
use pogo_masterfile::Masterfile;

#[test]
fn update_replaces_data() {
    let mut mf = Masterfile::from_entries(fixture());
    assert!(mf.has("V0022_MOVE_MEGAHORN"));

    let half = vec![fixture()[0].clone()];
    mf.update(half);
    assert_eq!(mf.len(), 1);
    assert!(!mf.has("V0022_MOVE_MEGAHORN"));
    assert!(mf.has("ITEM_POTION"));
}

#[test]
fn update_rebuilds_per_group_indexes() {
    let mut mf = Masterfile::from_entries(fixture());
    assert_eq!(mf.move_settings().len(), 1);

    mf.update(Vec::new());
    assert_eq!(mf.move_settings().len(), 0);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn refresh_swaps_data_via_fetcher() {
    use common::MockAsyncFetcher;
    let mut mf = Masterfile::from_entries(Vec::new());
    assert_eq!(mf.len(), 0);

    let fresh = Masterfile::builder()
        .fetcher(MockAsyncFetcher(fixture()))
        .fetch()
        .await
        .unwrap();
    mf = fresh;
    assert_eq!(mf.len(), fixture().len());
}

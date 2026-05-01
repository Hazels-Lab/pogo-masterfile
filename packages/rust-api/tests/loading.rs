//! Loading examples — fromJson, builder, custom fetcher, error paths.

#[allow(dead_code)]
mod common;

use common::fixture;
use pogo_masterfile::{DEFAULT_MASTERFILE_URL, Masterfile};

#[test]
fn from_entries_wraps_a_vec() {
    let entries = fixture();
    let mf = Masterfile::from_entries(entries.clone());
    assert_eq!(mf.len(), entries.len());
}

#[test]
fn from_json_parses_a_string() {
    let entries = fixture();
    let json = serde_json::to_string(&entries).unwrap();
    let mf = Masterfile::from_json(&json).unwrap();
    assert_eq!(mf.len(), entries.len());
}

#[cfg(feature = "async")]
#[tokio::test]
async fn from_remote_with_mock_fetcher() {
    use common::MockAsyncFetcher;
    let mock = MockAsyncFetcher(fixture());
    let mf = Masterfile::builder().fetcher(mock).fetch().await.unwrap();
    assert_eq!(mf.len(), fixture().len());
}

#[cfg(feature = "async")]
#[tokio::test]
async fn from_remote_with_closure_fetcher() {
    let mf = Masterfile::builder()
        .fetcher(|_url: &str| async move { Ok(fixture()) })
        .fetch()
        .await
        .unwrap();
    assert_eq!(mf.len(), fixture().len());
}

#[test]
fn default_url_is_alexelgt() {
    assert!(DEFAULT_MASTERFILE_URL.contains("alexelgt"));
    assert!(DEFAULT_MASTERFILE_URL.ends_with("GAME_MASTER.json"));
}

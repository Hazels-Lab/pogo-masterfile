//! End-to-end smoke — hits the real default URL. Gated with #[ignore] so
//! the default `cargo test` skips it. Run with: `cargo test --include-ignored`.

#![cfg(feature = "async")]

use pogo_masterfile::Masterfile;

#[tokio::test]
#[ignore = "hits the network — run with --include-ignored"]
async fn loads_real_masterfile() {
	let mf = Masterfile::from_remote().await.unwrap();
	assert!(mf.len() > 1000);
	assert!(mf.move_settings().len() > 50);
	assert!(
		mf.get_entry("V0001_POKEMON_BULBASAUR").is_some(),
		"bulbasaur should be in the masterfile"
	);
}

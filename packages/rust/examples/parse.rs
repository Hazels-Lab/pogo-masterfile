//! Quick sanity-check: parse the locally-cached masterfile.json into typed
//! `MasterfileEntry` values and print a count.
//!
//! Run from the rust package dir: `cargo run --example parse`.

use pogo_masterfile_types::parse_masterfile;

fn main() {
	let json = std::fs::read_to_string("../../masterfile.json").expect("read masterfile.json from project root");
	let entries = parse_masterfile(&json).expect("parse masterfile");
	println!("parsed {} entries", entries.len());
}

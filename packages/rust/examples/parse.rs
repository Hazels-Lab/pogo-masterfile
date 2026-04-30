//! Quick sanity-check + parse benchmark for the locally-cached masterfile.json.
//!
//! Prints timing for each stage so we can see where the work goes.
//! Run with `cargo run --release --example parse` for realistic numbers
//! (debug builds are ~10× slower for serde-heavy work).

use std::time::Instant;

use pogo_masterfile_types::parse_masterfile;

fn main() {
    let read_start = Instant::now();
    let json = std::fs::read_to_string("../../masterfile.json")
        .expect("read masterfile.json from project root");
    let read_ms = read_start.elapsed().as_millis();

    let parse_start = Instant::now();
    let entries = parse_masterfile(&json).expect("parse masterfile");
    let parse_ms = parse_start.elapsed().as_millis();

    println!("file size: {:.2} MB", json.len() as f64 / 1_048_576.0);
    println!("read:     {} ms", read_ms);
    println!("parse:    {} ms ({} entries)", parse_ms, entries.len());
    println!(
        "rate:     {:.0} entries/sec",
        (entries.len() as f64) / (parse_ms as f64 / 1000.0)
    );
}

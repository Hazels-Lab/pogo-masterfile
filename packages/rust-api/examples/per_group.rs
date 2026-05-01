//! Per-group accessor narrowing — the literal-typed lookups.
//!
//! Run with: `cargo run --example per_group --features async`

#[cfg(feature = "async")]
use pogo_masterfile::Masterfile;
#[cfg(feature = "async")]
use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;

#[cfg(feature = "async")]
#[tokio::main]
async fn main() -> pogo_masterfile::Result<()> {
	let mf = Masterfile::from_remote().await?;

	// Compile-time-validated lookup using the typed enum:
	let megahorn = mf
		.move_settings()
		.get(MoveSettingsTemplateId::V0022MoveMegahorn);
	println!("megahorn (typed): {:?}", megahorn.is_some());

	// Iterate just the moveSettings group:
	let total = mf.move_settings().iter().count();
	println!("moveSettings count: {total}");

	Ok(())
}

#[cfg(not(feature = "async"))]
fn main() {
	eprintln!("This example requires --features async");
}

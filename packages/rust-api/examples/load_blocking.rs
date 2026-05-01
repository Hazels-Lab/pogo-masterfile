//! Same as load_async but using the blocking API.
//!
//! Run with: `cargo run --example load_blocking --features blocking --no-default-features`

#[cfg(feature = "blocking")]
use pogo_masterfile::blocking::Masterfile;

#[cfg(feature = "blocking")]
fn main() -> pogo_masterfile::Result<()> {
	let mf = Masterfile::from_remote()?;
	println!("loaded {} entries", mf.len());
	Ok(())
}

#[cfg(not(feature = "blocking"))]
fn main() {
	eprintln!("This example requires --features blocking --no-default-features");
}

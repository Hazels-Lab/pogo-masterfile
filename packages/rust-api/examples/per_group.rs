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

    // Polymorphic input — both styles compile and behave identically.

    // (1) Typed enum: compile-time validated. Best when you know the ID at
    //     write-time — invalid variants fail to compile.
    let megahorn_typed = mf
        .move_settings()
        .get(MoveSettingsTemplateId::V0022MoveMegahorn);
    println!("megahorn (typed): {:?}", megahorn_typed.is_some());

    // (2) String: runtime parsed. `&str` flows through TryInto's blanket
    //     impl + the macro-emitted TryFrom<&str>. Returns None if either
    //     the string fails to parse OR the entry is missing.
    let megahorn_str = mf.move_settings().get("V0022_MOVE_MEGAHORN");
    println!("megahorn (&str):  {:?}", megahorn_str.is_some());

    // Iterate just the moveSettings group:
    let total = mf.move_settings().iter().count();
    println!("moveSettings count: {total}");

    Ok(())
}

#[cfg(not(feature = "async"))]
fn main() {
    eprintln!("This example requires --features async");
}

//! Load the masterfile, look up a few entries, iterate.
//!
//! Run with: `cargo run --example load_async --features async`

#[cfg(feature = "async")]
use pogo_masterfile::Masterfile;
#[cfg(feature = "async")]
use pogo_masterfile_types::move_settings::MoveSettingsTemplateId;
#[cfg(feature = "async")]
use std::str::FromStr;

#[cfg(feature = "async")]
#[tokio::main]
async fn main() -> pogo_masterfile::Result<()> {
    let mf = Masterfile::from_remote().await?;
    println!("loaded {} entries", mf.len());

    if let Ok(typed) = MoveSettingsTemplateId::from_str("V0022_MOVE_MEGAHORN") {
        if let Some(move_) = mf.move_settings().get(typed) {
            println!("megahorn templateId: {}", move_.template_id);
        }
    }

    let move_count = mf.move_settings().len();
    println!("moveSettings count: {move_count}");

    Ok(())
}

#[cfg(not(feature = "async"))]
fn main() {
    eprintln!("This example requires --features async");
}

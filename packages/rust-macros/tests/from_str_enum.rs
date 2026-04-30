//! `FromStrEnum` references `pogo_masterfile_types::UnknownTemplateId` in the
//! generated `Err` type. Tests have to provide a stub at that path so the
//! macro output type-checks without depending on the real crate (which would
//! be a circular dev-dep).

use pogo_masterfile_macros::FromStrEnum;
use std::str::FromStr;

mod pogo_masterfile_types {
    #[derive(Debug, Clone, PartialEq, Eq)]
    pub struct UnknownTemplateId(pub String);
}

#[derive(Debug, PartialEq, Eq, FromStrEnum)]
enum Color {
    #[serde(rename = "RED")]
    Red,
    #[serde(rename = "GREEN")]
    Green,
    Blue,
}

#[test]
fn parses_serde_renamed_variants() {
    assert_eq!(Color::from_str("RED").unwrap(), Color::Red);
    assert_eq!(Color::from_str("GREEN").unwrap(), Color::Green);
}

#[test]
fn parses_fallback_variant_ident() {
    assert_eq!(Color::from_str("Blue").unwrap(), Color::Blue);
}

#[test]
fn unknown_returns_unknown_template_id_with_input() {
    let err = Color::from_str("not-real").unwrap_err();
    assert_eq!(err.0, "not-real");
}

use pogo_masterfile_macros::AsStr;

#[derive(AsStr)]
enum WithRename {
    #[serde(rename = "FIRST_VALUE")]
    First,
    #[serde(rename = "SECOND_VALUE")]
    Second,
}

#[derive(AsStr)]
enum WithoutRename {
    Alpha,
    Beta,
}

#[test]
fn as_str_uses_serde_rename_when_present() {
    assert_eq!(WithRename::First.as_str(), "FIRST_VALUE");
    assert_eq!(WithRename::Second.as_str(), "SECOND_VALUE");
}

#[test]
fn as_str_falls_back_to_variant_ident_when_no_rename() {
    assert_eq!(WithoutRename::Alpha.as_str(), "Alpha");
    assert_eq!(WithoutRename::Beta.as_str(), "Beta");
}

#[test]
fn display_matches_as_str() {
    assert_eq!(format!("{}", WithRename::First), "FIRST_VALUE");
    assert_eq!(format!("{}", WithoutRename::Alpha), "Alpha");
}

#[test]
fn as_str_is_const_callable() {
    const X: &str = WithRename::First.as_str();
    assert_eq!(X, "FIRST_VALUE");
}

use pogo_masterfile_macros::AllVariants;

#[derive(Debug, Clone, Copy, PartialEq, Eq, AllVariants)]
enum Color {
    Red,
    Green,
    Blue,
}

#[test]
fn emits_size_constant() {
    assert_eq!(Color::SIZE, 3);
}

#[test]
fn emits_all_array_in_declaration_order() {
    assert_eq!(Color::ALL, [Color::Red, Color::Green, Color::Blue]);
}

#[test]
fn all_array_length_matches_size() {
    assert_eq!(Color::ALL.len(), Color::SIZE);
}

#[test]
fn ui() {
    let t = trybuild::TestCases::new();
    t.compile_fail("tests/ui/all_variants_non_unit.rs");
}

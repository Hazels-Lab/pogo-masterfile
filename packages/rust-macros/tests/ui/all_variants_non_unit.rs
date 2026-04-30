use pogo_masterfile_macros::AllVariants;

#[derive(AllVariants)]
enum BadEnum {
    Unit,
    Tuple(u32),
}

fn main() {}

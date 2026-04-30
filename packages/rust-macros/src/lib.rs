//! Procedural derive macros backing the [`pogo-masterfile-types`] crate.
//!
//! This crate is normally consumed transparently via re-exports from
//! `pogo-masterfile-types`. Direct dependency is fine but not required.

use proc_macro::TokenStream;
use quote::quote;
use syn::{Data, DeriveInput, Fields, parse_macro_input};

/// Derives `pub const ALL: [Self; N]` and `pub const SIZE: usize` for a
/// unit-only enum. Visibility of the constants follows the enum's own
/// visibility.
///
/// ```
/// use pogo_masterfile_macros::AllVariants;
///
/// #[derive(AllVariants)]
/// enum E { A, B, C }
///
/// assert_eq!(E::SIZE, 3);
/// ```
#[proc_macro_derive(AllVariants)]
pub fn derive_all_variants(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let vis = &input.vis;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "AllVariants only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut variant_idents: Vec<&syn::Ident> = Vec::new();
    for v in &data_enum.variants {
        match &v.fields {
            Fields::Unit => variant_idents.push(&v.ident),
            _ => errors.push(syn::Error::new_spanned(
                v,
                "AllVariants requires all variants to be unit (no fields)",
            )),
        }
    }

    if !errors.is_empty() {
        let combined = errors
            .into_iter()
            .reduce(|mut a, b| {
                a.combine(b);
                a
            })
            .unwrap();
        return combined.to_compile_error().into();
    }

    let count = variant_idents.len();
    let qualified = variant_idents.iter().map(|v| quote! { #name::#v });

    quote! {
        impl #name {
            #vis const SIZE: usize = #count;
            #vis const ALL: [Self; #count] = [ #(#qualified),* ];
        }
    }
    .into()
}

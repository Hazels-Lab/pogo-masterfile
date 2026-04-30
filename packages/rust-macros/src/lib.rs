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

/// Derives `pub const fn as_str(&self) -> &'static str` and `impl Display`
/// for a unit-only enum. Each variant's string is taken from a
/// `#[serde(rename = "...")]` attribute; if absent, falls back to
/// `stringify!(VariantIdent)`.
///
/// Declares `serde` as a helper attribute so `#[serde(rename = "...")]`
/// is syntactically recognized even when serde itself is not derived on
/// the same enum. Production use will always co-derive Serialize /
/// Deserialize too, but the macro stays usable in isolation (e.g. tests).
#[proc_macro_derive(AsStr, attributes(serde))]
pub fn derive_as_str(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "AsStr only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut arms: Vec<proc_macro2::TokenStream> = Vec::new();
    for v in &data_enum.variants {
        if !matches!(v.fields, Fields::Unit) {
            errors.push(syn::Error::new_spanned(
                v,
                "AsStr requires all variants to be unit (no fields)",
            ));
            continue;
        }
        let ident = &v.ident;
        let lit = match extract_serde_rename(&v.attrs) {
            Ok(Some(s)) => s,
            Ok(None) => ident.to_string(),
            Err(e) => {
                errors.push(e);
                continue;
            }
        };
        arms.push(quote! { Self::#ident => #lit });
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

    quote! {
        impl #name {
            pub const fn as_str(&self) -> &'static str {
                match self {
                    #(#arms),*
                }
            }
        }
        impl ::core::fmt::Display for #name {
            fn fmt(&self, f: &mut ::core::fmt::Formatter<'_>) -> ::core::fmt::Result {
                f.write_str(self.as_str())
            }
        }
    }
    .into()
}

/// Derives `impl FromStr` for a unit-only enum. The error type is
/// `pogo_masterfile_types::UnknownTemplateId` — the macro emits a path
/// reference; consumers must have that type in scope (which they do
/// transparently via the parent crate). String matching uses the same
/// source as `AsStr`: `#[serde(rename = "...")]` first, variant ident
/// otherwise.
#[proc_macro_derive(FromStrEnum, attributes(serde))]
pub fn derive_from_str_enum(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let Data::Enum(data_enum) = &input.data else {
        return syn::Error::new_spanned(name, "FromStrEnum only applies to enums")
            .to_compile_error()
            .into();
    };

    let mut errors: Vec<syn::Error> = Vec::new();
    let mut arms: Vec<proc_macro2::TokenStream> = Vec::new();
    for v in &data_enum.variants {
        if !matches!(v.fields, Fields::Unit) {
            errors.push(syn::Error::new_spanned(
                v,
                "FromStrEnum requires all variants to be unit (no fields)",
            ));
            continue;
        }
        let ident = &v.ident;
        let lit = match extract_serde_rename(&v.attrs) {
            Ok(Some(s)) => s,
            Ok(None) => ident.to_string(),
            Err(e) => {
                errors.push(e);
                continue;
            }
        };
        arms.push(quote! { #lit => Ok(Self::#ident) });
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

    quote! {
        impl ::core::str::FromStr for #name {
            type Err = pogo_masterfile_types::UnknownTemplateId;
            fn from_str(s: &str) -> ::core::result::Result<Self, Self::Err> {
                match s {
                    #(#arms),*,
                    other => Err(pogo_masterfile_types::UnknownTemplateId(other.to_string())),
                }
            }
        }
    }
    .into()
}

/// Look for `#[serde(rename = "...")]` on a variant. Returns the string
/// payload if found. Errors only on malformed serde attributes.
fn extract_serde_rename(attrs: &[syn::Attribute]) -> syn::Result<Option<String>> {
    for attr in attrs {
        if !attr.path().is_ident("serde") {
            continue;
        }
        let mut found: Option<String> = None;
        attr.parse_nested_meta(|meta| {
            if meta.path.is_ident("rename") {
                let value = meta.value()?;
                let s: syn::LitStr = value.parse()?;
                found = Some(s.value());
            } else {
                // Skip other serde meta items (e.g., `untagged`, `tag = "..."`).
                let _ = meta.input;
            }
            Ok(())
        })?;
        if let Some(s) = found {
            return Ok(Some(s));
        }
    }
    Ok(None)
}

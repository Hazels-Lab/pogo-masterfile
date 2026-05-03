/**
 * Emit `packages/rust-api/Cargo.toml`.
 *
 * Static — no group data. Lives in codegen so version bumps and feature
 * adjustments flow through one source. Don't hand-edit the file in the
 * package; edit this emitter instead.
 */
export function emitCargo(): string {
	return `[package]
name = "pogo-masterfile"
version = "0.1.0"
edition = "2024"
rust-version = "1.85"
description = "Runtime API for the Pokémon GO masterfile. Loads, indexes, and queries entries with per-group narrow-typed accessors."
license = "MIT"
authors = ["Hazel's Lab <https://github.com/Hazels-Lab>"]
repository = "https://github.com/Hazels-Lab/pogo-masterfile"
homepage = "https://github.com/Hazels-Lab/pogo-masterfile"
documentation = "https://docs.rs/pogo-masterfile"
readme = "README.md"
keywords = ["pokemon-go", "pokemon", "masterfile", "api", "tokio"]
categories = ["api-bindings", "data-structures", "game-development"]
include = [
\t"src/**/*.rs",
\t"examples/**/*.rs",
\t"tests/**/*.rs",
\t"Cargo.toml",
\t"README.md",
\t"LICENSE",
\t"CHANGELOG.md",
]

[features]
default = ["async"]
async = ["dep:tokio", "dep:reqwest", "reqwest/rustls-tls", "reqwest/json"]
blocking = ["dep:reqwest", "reqwest/blocking", "reqwest/rustls-tls", "reqwest/json"]

[dependencies]
pogo-masterfile-types = { version = "0.1", path = "../rust" }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
thiserror = "2"
tokio = { version = "1", features = ["rt", "sync"], optional = true }
reqwest = { version = "0.12", default-features = false, optional = true }

[dev-dependencies]
tokio = { version = "1", features = ["full", "test-util", "macros"] }

[package.metadata.docs.rs]
all-features = true
rustdoc-args = ["--cfg", "docsrs"]
`;
}

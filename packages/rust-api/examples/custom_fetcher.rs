//! Two ways to provide a custom fetcher: as a struct + impl, or as a closure.
//!
//! Run with: `cargo run --example custom_fetcher --features async`

#[cfg(feature = "async")]
use pogo_masterfile::{Fetcher, Masterfile, Result};
#[cfg(feature = "async")]
use pogo_masterfile_types::MasterfileEntry;

#[cfg(feature = "async")]
struct AuthFetcher {
	token: String,
}

#[cfg(feature = "async")]
impl Fetcher for AuthFetcher {
	fn fetch(
		&self,
		url: &str,
	) -> impl std::future::Future<Output = Result<Vec<MasterfileEntry>>> + Send {
		let token = self.token.clone();
		let url = url.to_string();
		async move {
			let client = reqwest::Client::new();
			let response = client
				.get(&url)
				.bearer_auth(&token)
				.send()
				.await
				.map_err(|source| pogo_masterfile::Error::Fetch {
					url: url.clone(),
					source,
				})?;
			let body = response
				.text()
				.await
				.map_err(|source| pogo_masterfile::Error::Fetch { url, source })?;
			Ok(pogo_masterfile_types::parse_masterfile(&body)?)
		}
	}
}

#[cfg(feature = "async")]
#[tokio::main]
async fn main() -> pogo_masterfile::Result<()> {
	// Approach 1: struct + impl Fetcher.
	let _mf = Masterfile::builder()
		.fetcher(AuthFetcher {
			token: "fake".into(),
		})
		.fetch()
		.await;
	println!("via auth fetcher: (would have hit server with fake token)");

	// Approach 2: closure (auto-impl via the blanket impl).
	let mf = Masterfile::builder()
		.fetcher(|_url: &str| async move {
			// fake out the fetch — return empty.
			Ok(Vec::new())
		})
		.fetch()
		.await?;
	println!("via closure fetcher: {} entries", mf.len());

	Ok(())
}

#[cfg(not(feature = "async"))]
fn main() {
	eprintln!("This example requires --features async");
}

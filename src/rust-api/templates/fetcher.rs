//! Fetcher abstraction + the default reqwest-backed implementation.

use pogo_masterfile_types::{parse_masterfile, MasterfileEntry};

use crate::error::{Error, Result};

pub const DEFAULT_MASTERFILE_URL: &str =
	"https://raw.githubusercontent.com/alexelgt/game_masters/refs/heads/master/GAME_MASTER.json";

/// User-replaceable fetcher. Implement on your own struct, OR pass a closure
/// — closures matching the right shape get a free impl below.
#[cfg(feature = "async")]
pub trait Fetcher: Send + Sync {
	#[allow(async_fn_in_trait)]
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>>;
}

#[cfg(feature = "async")]
impl<F, Fut> Fetcher for F
where
	F: Fn(&str) -> Fut + Send + Sync,
	Fut: std::future::Future<Output = Result<Vec<MasterfileEntry>>> + Send,
{
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
		(self)(url).await
	}
}

/// Default async fetcher: reqwest with rustls + JSON parse + array-shape
/// validation.
#[cfg(feature = "async")]
pub struct ReqwestFetcher {
	client: reqwest::Client,
}

#[cfg(feature = "async")]
impl ReqwestFetcher {
	pub fn new() -> Self {
		Self {
			client: reqwest::Client::new(),
		}
	}

	pub fn with_client(client: reqwest::Client) -> Self {
		Self { client }
	}
}

#[cfg(feature = "async")]
impl Default for ReqwestFetcher {
	fn default() -> Self {
		Self::new()
	}
}

#[cfg(feature = "async")]
impl Fetcher for ReqwestFetcher {
	async fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
		let response = self
			.client
			.get(url)
			.send()
			.await
			.map_err(|source| Error::Fetch {
				url: url.into(),
				source,
			})?;
		if !response.status().is_success() {
			return Err(Error::Status {
				url: url.into(),
				status: response.status().as_u16(),
			});
		}
		let body = response.text().await.map_err(|source| Error::Fetch {
			url: url.into(),
			source,
		})?;
		parse_masterfile(&body).map_err(Error::from)
	}
}

/// Blocking variant of the Fetcher trait + default impl.
#[cfg(feature = "blocking")]
pub mod blocking {
	use super::*;

	pub trait BlockingFetcher: Send + Sync {
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>>;
	}

	impl<F> BlockingFetcher for F
	where
		F: Fn(&str) -> Result<Vec<MasterfileEntry>> + Send + Sync,
	{
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
			(self)(url)
		}
	}

	pub struct ReqwestFetcher {
		client: reqwest::blocking::Client,
	}

	impl ReqwestFetcher {
		pub fn new() -> Self {
			Self {
				client: reqwest::blocking::Client::new(),
			}
		}

		pub fn with_client(client: reqwest::blocking::Client) -> Self {
			Self { client }
		}
	}

	impl Default for ReqwestFetcher {
		fn default() -> Self {
			Self::new()
		}
	}

	impl BlockingFetcher for ReqwestFetcher {
		fn fetch(&self, url: &str) -> Result<Vec<MasterfileEntry>> {
			let response = self.client.get(url).send().map_err(|source| Error::Fetch {
				url: url.into(),
				source,
			})?;
			if !response.status().is_success() {
				return Err(Error::Status {
					url: url.into(),
					status: response.status().as_u16(),
				});
			}
			let body = response.text().map_err(|source| Error::Fetch {
				url: url.into(),
				source,
			})?;
			parse_masterfile(&body).map_err(Error::from)
		}
	}
}

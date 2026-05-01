//! Crate-level error type. One enum, one variant per real failure mode.

use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
	#[cfg(any(feature = "async", feature = "blocking"))]
	#[error("network error fetching {url}")]
	Fetch {
		url: String,
		#[source]
		source: reqwest::Error,
	},

	#[error("HTTP {status} from {url}")]
	Status { url: String, status: u16 },

	#[error("failed to parse masterfile JSON")]
	Parse(#[from] serde_json::Error),

	#[error("expected JSON array of entries, got something else")]
	InvalidShape,

	#[error("custom fetcher error")]
	Custom(#[source] Box<dyn std::error::Error + Send + Sync>),
}

pub type Result<T> = std::result::Result<T, Error>;

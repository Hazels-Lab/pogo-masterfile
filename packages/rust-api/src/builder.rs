//! Builder for `Masterfile::from_remote` — handles URL/timeout/fetcher overrides.

#![cfg(feature = "async")]

use std::time::Duration;

use crate::error::Result;
use crate::fetcher::{DEFAULT_MASTERFILE_URL, Fetcher, ReqwestFetcher};
use crate::masterfile::Masterfile;

pub struct MasterfileBuilder {
    url: Option<String>,
    timeout: Option<Duration>,
    fetcher: Option<Box<dyn FetcherDyn>>,
}

trait FetcherDyn: Send + Sync {
    fn fetch_boxed<'a>(
        &'a self,
        url: &'a str,
    ) -> std::pin::Pin<
        Box<
            dyn std::future::Future<Output = Result<Vec<pogo_masterfile_types::MasterfileEntry>>>
                + Send
                + 'a,
        >,
    >;
}

impl<F: Fetcher> FetcherDyn for F {
    fn fetch_boxed<'a>(
        &'a self,
        url: &'a str,
    ) -> std::pin::Pin<
        Box<
            dyn std::future::Future<Output = Result<Vec<pogo_masterfile_types::MasterfileEntry>>>
                + Send
                + 'a,
        >,
    > {
        Box::pin(self.fetch(url))
    }
}

impl MasterfileBuilder {
    pub(crate) fn new() -> Self {
        Self {
            url: None,
            timeout: None,
            fetcher: None,
        }
    }

    pub fn url(mut self, url: impl Into<String>) -> Self {
        self.url = Some(url.into());
        self
    }

    pub fn timeout(mut self, timeout: Duration) -> Self {
        self.timeout = Some(timeout);
        self
    }

    pub fn fetcher(mut self, fetcher: impl Fetcher + 'static) -> Self {
        self.fetcher = Some(Box::new(fetcher));
        self
    }

    pub async fn fetch(self) -> Result<Masterfile> {
        let url = self
            .url
            .unwrap_or_else(|| DEFAULT_MASTERFILE_URL.to_string());
        let entries = match self.fetcher {
            Some(f) => f.fetch_boxed(&url).await?,
            None => {
                let default = build_default_fetcher(self.timeout);
                default.fetch(&url).await?
            }
        };
        Ok(Masterfile::from_entries(entries))
    }
}

fn build_default_fetcher(timeout: Option<Duration>) -> ReqwestFetcher {
    let mut builder = reqwest::Client::builder();
    if let Some(t) = timeout {
        builder = builder.timeout(t);
    }
    let client = builder.build().expect("reqwest client");
    ReqwestFetcher::with_client(client)
}

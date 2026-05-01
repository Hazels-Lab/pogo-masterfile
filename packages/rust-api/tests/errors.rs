//! Error variants.

#[allow(dead_code)]
mod common;

use pogo_masterfile::{Error, Masterfile};

#[test]
fn invalid_json_yields_parse_error() {
    let result = Masterfile::from_json("not json at all");
    assert!(result.is_err());
    let err = result.err().unwrap();
    assert!(matches!(err, Error::Parse(_)));
}

#[test]
fn empty_json_array_loads_fine() {
    let mf = Masterfile::from_json("[]").unwrap();
    assert_eq!(mf.len(), 0);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn custom_fetcher_error_wraps_in_custom_variant() {
    use pogo_masterfile::{Fetcher, Result};
    use pogo_masterfile_types::MasterfileEntry;

    struct ErroringFetcher;
    impl Fetcher for ErroringFetcher {
        fn fetch(
            &self,
            _url: &str,
        ) -> impl std::future::Future<Output = Result<Vec<MasterfileEntry>>> + Send {
            async move {
                Err(Error::Custom(Box::new(std::io::Error::new(
                    std::io::ErrorKind::Other,
                    "simulated failure",
                ))))
            }
        }
    }

    let result = Masterfile::builder().fetcher(ErroringFetcher).fetch().await;
    assert!(result.is_err());
    let err = result.err().unwrap();
    assert!(matches!(err, Error::Custom(_)));
}

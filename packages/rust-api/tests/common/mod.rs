//! Shared fixture data + mock fetcher for integration tests.

use pogo_masterfile::Result;
use pogo_masterfile_types::MasterfileEntry;

/// Tiny fixture with three real entries from three groups.
pub fn fixture() -> Vec<MasterfileEntry> {
    let json = r#"[
		{
			"templateId": "ITEM_POTION",
			"data": {
				"templateId": "ITEM_POTION",
				"itemSettings": {
					"itemId": "ITEM_POTION",
					"itemType": "ITEM_TYPE_POTION",
					"category": "ITEM_CATEGORY_MEDICINE",
					"dropTrainerLevel": 5,
					"potion": { "staAmount": 20 }
				}
			}
		},
		{
			"templateId": "V0001_POKEMON_BULBASAUR",
			"data": {
				"templateId": "V0001_POKEMON_BULBASAUR",
				"pokemonSettings": {
					"pokemonId": "BULBASAUR",
					"familyId": "FAMILY_BULBASAUR",
					"type": "POKEMON_TYPE_GRASS",
					"type2": "POKEMON_TYPE_POISON",
					"stats": { "baseStamina": 128, "baseAttack": 118, "baseDefense": 111 },
					"camera": {},
					"encounter": {},
					"heightStdDev": 0.4375,
					"ibfc": {},
					"kmBuddyDistance": 3.0,
					"pokedexHeightM": 0.7,
					"pokedexWeightKg": 6.9,
					"thirdMove": { "candyToUnlock": 100 },
					"weightStdDev": 1.5
				}
			}
		},
		{
			"templateId": "V0022_MOVE_MEGAHORN",
			"data": {
				"templateId": "V0022_MOVE_MEGAHORN",
				"moveSettings": {
					"movementId": "MEGAHORN",
					"animationId": 5,
					"pokemonType": "POKEMON_TYPE_BUG",
					"power": 105,
					"accuracyChance": 1,
					"durationMs": 2000,
					"damageWindowStartMs": 1500,
					"damageWindowEndMs": 1700,
					"energyDelta": -100,
					"vfxName": "megahorn"
				}
			}
		}
	]"#;
    pogo_masterfile_types::parse_masterfile(json).expect("parse fixture")
}

#[cfg(feature = "async")]
pub struct MockAsyncFetcher(pub Vec<MasterfileEntry>);

#[cfg(feature = "async")]
impl pogo_masterfile::Fetcher for MockAsyncFetcher {
    fn fetch(
        &self,
        _url: &str,
    ) -> impl std::future::Future<Output = Result<Vec<MasterfileEntry>>> + Send {
        let entries = self.0.clone();
        async move { Ok(entries) }
    }
}

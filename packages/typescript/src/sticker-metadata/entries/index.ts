// Generated from Pokémon GO masterfile — group "stickerMetadata" entries barrel.

import type { StickerMetadataBaseMasterfileEntry } from "./base";
import type { StickerMetadataPokemonIdMasterfileEntry } from "./pokemon-id";
import type { StickerMetadataPokemonIdRegionIdMasterfileEntry } from "./pokemon-id-region-id";
import type { StickerMetadataPokemonIdRegionIdReleaseDateMasterfileEntry } from "./pokemon-id-region-id-release-date";
import type { StickerMetadataPokemonIdRegionIdReleaseDateStickerUrlMasterfileEntry } from "./pokemon-id-region-id-release-date-sticker-url";
import type { StickerMetadataPokemonIdReleaseDateMasterfileEntry } from "./pokemon-id-release-date";
import type { StickerMetadataPokemonIdReleaseDateStickerUrlMasterfileEntry } from "./pokemon-id-release-date-sticker-url";
import type { StickerMetadataRegionIdReleaseDateMasterfileEntry } from "./region-id-release-date";
import type { StickerMetadataRegionIdReleaseDateStickerUrlMasterfileEntry } from "./region-id-release-date-sticker-url";
import type { StickerMetadataReleaseDateMasterfileEntry } from "./release-date";
import type { StickerMetadataReleaseDateStickerUrlMasterfileEntry } from "./release-date-sticker-url";

export type * from "./base";
export type * from "./pokemon-id";
export type * from "./pokemon-id-region-id";
export type * from "./pokemon-id-region-id-release-date";
export type * from "./pokemon-id-region-id-release-date-sticker-url";
export type * from "./pokemon-id-release-date";
export type * from "./pokemon-id-release-date-sticker-url";
export type * from "./region-id-release-date";
export type * from "./region-id-release-date-sticker-url";
export type * from "./release-date";
export type * from "./release-date-sticker-url";

export type StickerMetadataMasterfileEntry =
	| StickerMetadataBaseMasterfileEntry
	| StickerMetadataPokemonIdMasterfileEntry
	| StickerMetadataPokemonIdRegionIdMasterfileEntry
	| StickerMetadataPokemonIdRegionIdReleaseDateMasterfileEntry
	| StickerMetadataPokemonIdRegionIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataPokemonIdReleaseDateMasterfileEntry
	| StickerMetadataPokemonIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataRegionIdReleaseDateMasterfileEntry
	| StickerMetadataRegionIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataReleaseDateMasterfileEntry
	| StickerMetadataReleaseDateStickerUrlMasterfileEntry;

export type StickerMetadataTemplateID = StickerMetadataMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "stickerMetadata" entries barrel.

import type { StickerMetadataCategoryMasterfileEntry } from "./category";
import type { StickerMetadataCategoryPokemonIdMasterfileEntry } from "./category-pokemon-id";
import type { StickerMetadataCategoryPokemonIdRegionIdMasterfileEntry } from "./category-pokemon-id-region-id";
import type { StickerMetadataCategoryPokemonIdRegionIdReleaseDateMasterfileEntry } from "./category-pokemon-id-region-id-release-date";
import type { StickerMetadataCategoryPokemonIdRegionIdReleaseDateStickerUrlMasterfileEntry } from "./category-pokemon-id-region-id-release-date-sticker-url";
import type { StickerMetadataCategoryPokemonIdReleaseDateMasterfileEntry } from "./category-pokemon-id-release-date";
import type { StickerMetadataCategoryPokemonIdReleaseDateStickerUrlMasterfileEntry } from "./category-pokemon-id-release-date-sticker-url";
import type { StickerMetadataCategoryRegionIdReleaseDateMasterfileEntry } from "./category-region-id-release-date";
import type { StickerMetadataCategoryRegionIdReleaseDateStickerUrlMasterfileEntry } from "./category-region-id-release-date-sticker-url";
import type { StickerMetadataCategoryReleaseDateMasterfileEntry } from "./category-release-date";
import type { StickerMetadataCategoryReleaseDateStickerUrlMasterfileEntry } from "./category-release-date-sticker-url";
import type { StickerMetadataReleaseDateMasterfileEntry } from "./release-date";

export type * from "./category";
export type * from "./category-pokemon-id";
export type * from "./category-pokemon-id-region-id";
export type * from "./category-pokemon-id-region-id-release-date";
export type * from "./category-pokemon-id-region-id-release-date-sticker-url";
export type * from "./category-pokemon-id-release-date";
export type * from "./category-pokemon-id-release-date-sticker-url";
export type * from "./category-region-id-release-date";
export type * from "./category-region-id-release-date-sticker-url";
export type * from "./category-release-date";
export type * from "./category-release-date-sticker-url";
export type * from "./release-date";

export type StickerMetadataMasterfileEntry =
	| StickerMetadataCategoryMasterfileEntry
	| StickerMetadataCategoryPokemonIdMasterfileEntry
	| StickerMetadataCategoryPokemonIdRegionIdMasterfileEntry
	| StickerMetadataCategoryPokemonIdRegionIdReleaseDateMasterfileEntry
	| StickerMetadataCategoryPokemonIdRegionIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataCategoryPokemonIdReleaseDateMasterfileEntry
	| StickerMetadataCategoryPokemonIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataCategoryRegionIdReleaseDateMasterfileEntry
	| StickerMetadataCategoryRegionIdReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataCategoryReleaseDateMasterfileEntry
	| StickerMetadataCategoryReleaseDateStickerUrlMasterfileEntry
	| StickerMetadataReleaseDateMasterfileEntry;

export type StickerMetadataTemplateID = StickerMetadataMasterfileEntry["templateId"];

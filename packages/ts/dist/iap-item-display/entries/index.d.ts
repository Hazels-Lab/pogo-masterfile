// Generated from Pokémon GO masterfile — group "iapItemDisplay" entries barrel.

import type { IapItemDisplayBundleMasterfileEntry } from "./bundle";
import type { IapItemDisplayFlairBundleMasterfileEntry } from "./flair-bundle";
import type { IapItemDisplayFreeMasterfileEntry } from "./free";
import type { IapItemDisplayGlobalEventTicketMasterfileEntry } from "./global-event-ticket";
import type { IapItemDisplayItemsMasterfileEntry } from "./items";
import type { IapItemDisplayNoCategoryMasterfileEntry } from "./no-category";
import type { IapItemDisplayPokecoinsMasterfileEntry } from "./pokecoins";
import type { IapItemDisplayStickerMasterfileEntry } from "./sticker";
import type { IapItemDisplayTransporterEnergyMasterfileEntry } from "./transporter-energy";
import type { IapItemDisplayUpgradesMasterfileEntry } from "./upgrades";

export type * from "./bundle";
export type * from "./flair-bundle";
export type * from "./free";
export type * from "./global-event-ticket";
export type * from "./items";
export type * from "./no-category";
export type * from "./pokecoins";
export type * from "./sticker";
export type * from "./transporter-energy";
export type * from "./upgrades";

export type IapItemDisplayMasterfileEntry =
	| IapItemDisplayBundleMasterfileEntry
	| IapItemDisplayFlairBundleMasterfileEntry
	| IapItemDisplayFreeMasterfileEntry
	| IapItemDisplayGlobalEventTicketMasterfileEntry
	| IapItemDisplayItemsMasterfileEntry
	| IapItemDisplayNoCategoryMasterfileEntry
	| IapItemDisplayPokecoinsMasterfileEntry
	| IapItemDisplayStickerMasterfileEntry
	| IapItemDisplayTransporterEnergyMasterfileEntry
	| IapItemDisplayUpgradesMasterfileEntry;

export type IapItemDisplayTemplateID = IapItemDisplayMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "iapItemDisplay sticker/hidden" entries barrel.

import type { IapItemDisplayStickerHiddenFallMasterfileEntry } from "./fall";
import type { IapItemDisplayStickerHiddenHaruMasterfileEntry } from "./haru";
import type { IapItemDisplayStickerHiddenPgoMasterfileEntry } from "./pgo";
import type { IapItemDisplayStickerHiddenSpringMasterfileEntry } from "./spring";
import type { IapItemDisplayStickerHiddenSummerMasterfileEntry } from "./summer";
import type { IapItemDisplayStickerHiddenWinterMasterfileEntry } from "./winter";
import type { IapItemDisplayStickerHiddenWinter2023MasterfileEntry } from "./winter2023";

export type * from "./fall";
export type * from "./haru";
export type * from "./pgo";
export type * from "./spring";
export type * from "./summer";
export type * from "./winter";
export type * from "./winter2023";

export type IapItemDisplayStickerHiddenMasterfileEntry =
	| IapItemDisplayStickerHiddenFallMasterfileEntry
	| IapItemDisplayStickerHiddenHaruMasterfileEntry
	| IapItemDisplayStickerHiddenPgoMasterfileEntry
	| IapItemDisplayStickerHiddenSpringMasterfileEntry
	| IapItemDisplayStickerHiddenSummerMasterfileEntry
	| IapItemDisplayStickerHiddenWinterMasterfileEntry
	| IapItemDisplayStickerHiddenWinter2023MasterfileEntry;

export type IapItemDisplayStickerHiddenTemplateID = IapItemDisplayStickerHiddenMasterfileEntry["templateId"];

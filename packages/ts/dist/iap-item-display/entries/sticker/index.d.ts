// Generated from Pokémon GO masterfile — group "iapItemDisplay sticker" entries barrel.

import type { IapItemDisplayStickerHiddenMasterfileEntry } from "./hidden";
import type { IapItemDisplayStickerMiscMasterfileEntry } from "./misc";

export type * from "./hidden";
export type * from "./misc";

export type IapItemDisplayStickerMasterfileEntry = IapItemDisplayStickerHiddenMasterfileEntry | IapItemDisplayStickerMiscMasterfileEntry;

export type IapItemDisplayStickerTemplateID = IapItemDisplayStickerMasterfileEntry["templateId"];

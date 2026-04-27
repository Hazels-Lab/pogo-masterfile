// Generated from Pokémon GO masterfile — group "avatarItemDisplay" entries barrel.

import type { AvatarItemDisplayDisplayStringIdMasterfileEntry } from "./display-string-id";
import type { AvatarItemDisplayMiscMasterfileEntry } from "./misc";

export type * from "./display-string-id";
export type * from "./misc";

export type AvatarItemDisplayMasterfileEntry = AvatarItemDisplayDisplayStringIdMasterfileEntry | AvatarItemDisplayMiscMasterfileEntry;

export type AvatarItemDisplayTemplateID = AvatarItemDisplayMasterfileEntry["templateId"];

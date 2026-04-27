// Generated from Pokémon GO masterfile — group "avatarItemDisplay" entries barrel.

import type { AvatarItemDisplayBaseMasterfileEntry } from "./base";
import type { AvatarItemDisplayDisplayStringIdMasterfileEntry } from "./display-string-id";

export type * from "./base";
export type * from "./display-string-id";

export type AvatarItemDisplayMasterfileEntry = AvatarItemDisplayBaseMasterfileEntry | AvatarItemDisplayDisplayStringIdMasterfileEntry;
export type AvatarItemDisplayTemplateID = AvatarItemDisplayMasterfileEntry["templateId"];

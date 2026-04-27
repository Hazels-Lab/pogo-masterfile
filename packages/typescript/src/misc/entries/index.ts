// Generated from Pokémon GO masterfile — group "misc" entries barrel.

import type { MiscFlagsMasterfileEntry } from "./flags";
import type { MiscMiscMasterfileEntry } from "./misc";
import type { MiscSettingsMasterfileEntry } from "./settings";

export type * from "./flags";
export type * from "./misc";
export type * from "./settings";

export type MiscMasterfileEntry = MiscFlagsMasterfileEntry | MiscMiscMasterfileEntry | MiscSettingsMasterfileEntry;

export type MiscTemplateID = MiscMasterfileEntry["templateId"];

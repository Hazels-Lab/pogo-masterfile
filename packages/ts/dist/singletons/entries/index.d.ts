// Generated from Pokémon GO masterfile — group "singletons" entries barrel.

import type { SingletonsFlagsMasterfileEntry } from "./flags";
import type { SingletonsMiscMasterfileEntry } from "./misc";
import type { SingletonsProtoMasterfileEntry } from "./proto";
import type { SingletonsSettingsMasterfileEntry } from "./settings";

export type * from "./flags";
export type * from "./misc";
export type * from "./proto";
export type * from "./settings";

export type SingletonsMasterfileEntry = SingletonsFlagsMasterfileEntry | SingletonsMiscMasterfileEntry | SingletonsProtoMasterfileEntry | SingletonsSettingsMasterfileEntry;

export type SingletonsTemplateID = SingletonsMasterfileEntry["templateId"];

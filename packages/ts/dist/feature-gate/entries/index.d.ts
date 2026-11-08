// Generated from Pokémon GO masterfile — group "featureGate" entries barrel.

import type { FeatureGateMiscMasterfileEntry } from "./misc";
import type { FeatureGateSubFeatureGateListMasterfileEntry } from "./sub-feature-gate-list";

export type * from "./misc";
export type * from "./sub-feature-gate-list";

export type FeatureGateMasterfileEntry = FeatureGateMiscMasterfileEntry | FeatureGateSubFeatureGateListMasterfileEntry;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];

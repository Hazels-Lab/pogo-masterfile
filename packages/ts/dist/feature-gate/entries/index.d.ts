// Generated from Pokémon GO masterfile — group "featureGate" entries barrel.

import type { FeatureGateMinClientVersionMasterfileEntry } from "./min-client-version";
import type { FeatureGateMiscMasterfileEntry } from "./misc";
import type { FeatureGateSubFeatureGateListMasterfileEntry } from "./sub-feature-gate-list";

export type * from "./min-client-version";
export type * from "./misc";
export type * from "./sub-feature-gate-list";

export type FeatureGateMasterfileEntry =
	| FeatureGateMinClientVersionMasterfileEntry
	| FeatureGateMiscMasterfileEntry
	| FeatureGateSubFeatureGateListMasterfileEntry;

export type FeatureGateTemplateID = FeatureGateMasterfileEntry["templateId"];

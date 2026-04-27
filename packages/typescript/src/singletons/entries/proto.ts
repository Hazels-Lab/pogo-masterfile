// Generated from Pokémon GO masterfile — Singletons entries (no shared discriminator).

export interface AssetRefreshProto {
	templateId: "ASSET_REFRESH_PROTO";
	data: {
		templateId: "ASSET_REFRESH_PROTO";
		assetRefreshProto: {
			stringRefreshSeconds: 3600;
		};
	};
}

export interface OptimizationsProto {
	templateId: "OPTIMIZATIONS_SETTINGS";
	data: {
		templateId: "OPTIMIZATIONS_SETTINGS";
		optimizationsProto: {
			adaptivePerformanceMinResolutionScale: 0.7;
			adaptivePerformanceUpdateInterval: 3;
			optimizationPhysicsToggleEnabled: true;
		};
	};
}

export type SingletonsProtoMasterfileEntry = AssetRefreshProto | OptimizationsProto;

export type SingletonsProtoTemplateID = SingletonsProtoMasterfileEntry["templateId"];

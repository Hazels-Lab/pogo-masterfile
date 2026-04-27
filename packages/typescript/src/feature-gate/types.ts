// Generated from Pokémon GO masterfile — group "featureGate", 13 entries (structural types).

export interface FeatureGate<TemplateID extends string = string, TData extends FeatureGateData = FeatureGateData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		featureGate: TData & {
			rolloutPercentage: 100;
		};
	};
}

export interface FeatureGateData {
	status: number;
	subFeatureGateList?: Array<{
		name:
			| "MEGA_2026_FTUE_SUB_FEATURE_GATE"
			| "MEGA_CP_BOOST_ENABLED_SUB_FEATURE_GATE"
			| "MEGA_EVOLVE_BUTTON_SUB_FEATURE_GATE"
			| "MEGA_HUD_SUB_FEATURE_GATE"
			| "MEGA_HUD_TIMER_SUB_FEATURE_GATE"
			| "MEGA_LEVEL_4_ENABLED_SUB_FEATURE_GATE"
			| "MEGA_LEVELS_TUTORIAL_SUB_FEATURE_GATE"
			| "PVP"
			| "REMOTE_NC_HELP_TEXT_SUB_FEATURE_GATE";
		rolloutPercentage: number;
		status: number;
	}>;
}

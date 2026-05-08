// Generated from Pokémon GO masterfile — group "locationCardSettings", 189 entries (structural types).

import type { W } from "../_utils";

export interface LocationCardSettings<TemplateID extends string = string, TData extends LocationCardSettingsData = LocationCardSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		locationCardSettings: TData & {
			locationCard: TemplateID;
		};
	};
}
export type LocationCardSettingsType = W<LocationCardSettings>;

export interface LocationCardSettingsData {
	cardType?: "LOCATION_CARD" | "SPECIAL_BACKGROUND";
	imageUrl: string;
	vfxAddress?:
		| "bgfx_9thAnni"
		| "bgfx_Black"
		| "bgfx_CommunityDay_2026"
		| "bgfx_DelightfulDays"
		| "bgfx_Diamond"
		| "bgfx_Fusion"
		| "bgfx_goFest_2025_eternatus"
		| "bgfx_goFest_2025_rock_001"
		| "bgfx_goFest_2025_rock_002"
		| "bgfx_goFest_2025_rock_003"
		| "bgfx_goFest_2025_rock_004"
		| "bgfx_goFest_2025_rock_005"
		| "bgfx_goFest_2025_rock_006"
		| "bgfx_goFest_2025_shield"
		| "bgfx_goFest_2025_shield_c"
		| "bgfx_goFest_2025_sword"
		| "bgfx_goFest_2025_sword_c"
		| "bgfx_goFest_2026_global"
		| "bgfx_goFest_2026_mewtwo_001"
		| "bgfx_goFest_2026_mewtwo_002"
		| "bgfx_Gold"
		| "bgfx_gowa"
		| "bgfx_holi_2026"
		| "bgfx_Mega"
		| "bgfx_MightAndMastery"
		| "bgfx_Moon"
		| "bgfx_N"
		| "bgfx_Pearl"
		| "bgfx_Ruby"
		| "bgfx_Sapphire"
		| "bgfx_Silver"
		| "bgfx_Sun"
		| "bgfx_TalesOfTransformation"
		| "bgfx_TeamLeader_blue"
		| "bgfx_TeamLeader_red"
		| "bgfx_TeamLeader_yellow"
		| "bgfx_UltraWormhole"
		| "bgfx_White"
		| "bgfx_X"
		| "bgfx_Y";
}

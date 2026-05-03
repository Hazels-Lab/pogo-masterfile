// Generated from Pokémon GO masterfile — group "pokemonExtendedSettings", 2465 entries (structural types).

import type { W } from "../_utils";

export interface PokemonExtendedSettings<TemplateID extends string = string, TData extends PokemonExtendedSettingsData = PokemonExtendedSettingsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonExtendedSettings: TData;
	};
}
export type PokemonExtendedSettingsType = W<PokemonExtendedSettings>;

export interface PokemonExtendedSettingsData {
	breadOverrides?: Array<{
		averageHeightM?: number;
		averageWeightKg?: number;
		breadMode?: number | "BREAD_DOUGH_MODE" | "BREAD_DOUGH_MODE_2" | "BREAD_MODE";
		camera?: {
			cylinderGroundM?: number;
			cylinderHeightM: number;
			cylinderRadiusM: number;
		};
		catchOverrideSettings?: {
			collisionHeadRadiusM: number;
			collisionHeightM?: number;
			collisionRadiusM: number;
		};
		maxBattleTrainerVisualSettings?: {
			xOffset?: number;
			yOffset?: number;
		};
		maxBattleVisualSettings?: {
			scale?: number;
			xOffset?: number;
			yOffset?: number;
		};
		maxEncounterVisualSettings?: {
			cameraDistance?: number;
			cameraFov?: number;
			maxReticleSize?: number;
			scale?: number;
			yOffset?: number;
		};
		maxLobbyVisualSettings?: {
			cameraDistance?: number;
			cameraFov?: number;
			scale?: number;
			xOffset?: number;
			yOffset?: number;
		};
		maxPowerspotTopperVisualSettings?: {
			scale: number;
		};
		maxStationVisualSettings?: {
			scale?: number;
			xOffset?: number;
			yOffset?: number;
		};
		modelHeight?: number;
		modelScaleV2?: number;
		sizeSettings?: {
			mLowerBound: number;
			mUpperBound: number;
			xlUpperBound: number;
			xsLowerBound: number;
			xxlUpperBound?: number;
			xxsLowerBound: number;
		};
	}>;
	form?: number | string;
	sizeSettings: {
		disablePokedexRecordDisplayForForms?: boolean;
		mLowerBound: number;
		mUpperBound: number;
		xlScaleMultiplier?: number;
		xlUpperBound: number;
		xsLowerBound: number;
		xsScaleMultiplier?: number;
		xxlScaleMultiplier?: number;
		xxlUpperBound: number;
		xxsLowerBound: number;
		xxsScaleMultiplier?: number;
	};
	tempEvoOverrides?: Array<{
		sizeSettings: {
			mLowerBound: number;
			mUpperBound: number;
			xlUpperBound: number;
			xsLowerBound: number;
			xxlUpperBound: number;
			xxsLowerBound: number;
		};
		tempEvoId: "TEMP_EVOLUTION_MEGA" | "TEMP_EVOLUTION_MEGA_X" | "TEMP_EVOLUTION_MEGA_Y" | "TEMP_EVOLUTION_PRIMAL";
	}>;
	uniqueId: string;
}

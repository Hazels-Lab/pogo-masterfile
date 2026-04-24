export interface PokemonHomeFormReversions<T extends string> {
	templateId: T;
	data: PokemonHomeFormReversionsData<T>;
}

export interface PokemonHomeFormReversionsData<T extends string> {
	templateId: T;
	pokemonHomeFormReversions: {
		formMapping: Array<
			{
				revertedForm: "CASTFORM_NORMAL" | "CHERRIM_OVERCAST" | "DARMANITAN_GALARIAN_STANDARD" | "DARMANITAN_STANDARD" | "GENESECT_NORMAL" | "GIRATINA_ALTERED" | "KELDEO_ORDINARY" | "MELOETTA_ARIA";
				revertedFormString: "form_altered" | "form_aria" | "form_castform_normal_full" | "form_no_drive_full" | "form_ordinary_full" | "form_overcast" | "form_standard_mode";
				unauthorizedForms: Array<"CASTFORM_RAINY" | "CASTFORM_SNOWY" | "CASTFORM_SUNNY" | "CHERRIM_SUNNY" | "DARMANITAN_GALARIAN_ZEN" | "DARMANITAN_ZEN" | "GENESECT_BURN" | "GENESECT_CHILL" | "GENESECT_DOUSE" | "GENESECT_SHOCK" | "GIRATINA_ORIGIN" | "KELDEO_RESOLUTE" | "MELOETTA_PIROUETTE">;
			}
		>;
		pokemonId: "CASTFORM" | "CHERRIM" | "DARMANITAN" | "GENESECT" | "GIRATINA" | "KELDEO" | "MELOETTA";
	};
}

export type PokemonHomeFormReversionsV0351PokemonCastformHomeFormReversion = PokemonHomeFormReversions<"V0351_POKEMON_CASTFORM_HOME_FORM_REVERSION">;
export type PokemonHomeFormReversionsV0421CherrimHomeFormReversion = PokemonHomeFormReversions<"V0421_CHERRIM_HOME_FORM_REVERSION">;
export type PokemonHomeFormReversionsV0487PokemonGiratinaHomeReversion = PokemonHomeFormReversions<"V0487_POKEMON_GIRATINA_HOME_REVERSION">;
export type PokemonHomeFormReversionsV0555PokemonDarmanitanHomeFormReversion = PokemonHomeFormReversions<"V0555_POKEMON_DARMANITAN_HOME_FORM_REVERSION">;
export type PokemonHomeFormReversionsV0647PokemonKeldeoHomeFormReversion = PokemonHomeFormReversions<"V0647_POKEMON_KELDEO_HOME_FORM_REVERSION">;
export type PokemonHomeFormReversionsV0648PokemonMeloettaHomeFormReversion = PokemonHomeFormReversions<"V0648_POKEMON_MELOETTA_HOME_FORM_REVERSION">;
export type PokemonHomeFormReversionsV0649PokemonGenesectHomeFormReversion = PokemonHomeFormReversions<"V0649_POKEMON_GENESECT_HOME_FORM_REVERSION">;

export type PokemonHomeFormReversionsMasterfileEntry =
	| PokemonHomeFormReversionsV0351PokemonCastformHomeFormReversion
	| PokemonHomeFormReversionsV0421CherrimHomeFormReversion
	| PokemonHomeFormReversionsV0487PokemonGiratinaHomeReversion
	| PokemonHomeFormReversionsV0555PokemonDarmanitanHomeFormReversion
	| PokemonHomeFormReversionsV0647PokemonKeldeoHomeFormReversion
	| PokemonHomeFormReversionsV0648PokemonMeloettaHomeFormReversion
	| PokemonHomeFormReversionsV0649PokemonGenesectHomeFormReversion;

export type PokemonHomeFormReversionsTemplateID = PokemonHomeFormReversionsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "pokemonHomeFormReversions", 7 entries (structural types).

export type * from "./variants";

export interface PokemonHomeFormReversions<TemplateID extends string = string, TData extends PokemonHomeFormReversionsData = PokemonHomeFormReversionsData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		pokemonHomeFormReversions: TData;
	};
}

export interface PokemonHomeFormReversionsData {
	formMapping: Array<{
		revertedForm:
			| "CASTFORM_NORMAL"
			| "CHERRIM_OVERCAST"
			| "DARMANITAN_GALARIAN_STANDARD"
			| "DARMANITAN_STANDARD"
			| "GENESECT_NORMAL"
			| "GIRATINA_ALTERED"
			| "KELDEO_ORDINARY"
			| "MELOETTA_ARIA";
		revertedFormString:
			| "form_altered"
			| "form_aria"
			| "form_castform_normal_full"
			| "form_no_drive_full"
			| "form_ordinary_full"
			| "form_overcast"
			| "form_standard_mode";
		unauthorizedForms: Array<
			| "CASTFORM_RAINY"
			| "CASTFORM_SNOWY"
			| "CASTFORM_SUNNY"
			| "CHERRIM_SUNNY"
			| "DARMANITAN_GALARIAN_ZEN"
			| "DARMANITAN_ZEN"
			| "GENESECT_BURN"
			| "GENESECT_CHILL"
			| "GENESECT_DOUSE"
			| "GENESECT_SHOCK"
			| "GIRATINA_ORIGIN"
			| "KELDEO_RESOLUTE"
			| "MELOETTA_PIROUETTE"
		>;
	}>;
	pokemonId: "CASTFORM" | "CHERRIM" | "DARMANITAN" | "GENESECT" | "GIRATINA" | "KELDEO" | "MELOETTA";
}

export type PokemonHomeFormReversionsMasterfileEntry =
	| PokemonHomeFormReversionsV0351PokemonCastformHomeFormReversion
	| PokemonHomeFormReversionsV0421CherrimHomeFormReversion
	| PokemonHomeFormReversionsV0487PokemonGiratinaHomeReversion
	| PokemonHomeFormReversionsV0555PokemonDarmanitanHomeFormReversion
	| PokemonHomeFormReversionsV0647PokemonKeldeoHomeFormReversion
	| PokemonHomeFormReversionsV0648PokemonMeloettaHomeFormReversion
	| PokemonHomeFormReversionsV0649PokemonGenesectHomeFormReversion;

export type PokemonHomeFormReversionsTemplateID = PokemonHomeFormReversionsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "pokemonHomeFormReversions", 7 entries (variant aliases).

import type { S } from "../_utils";
import type { PokemonHomeFormReversions, PokemonHomeFormReversionsData } from "./index";

export type PokemonHomeFormReversionsV0351PokemonCastformHomeFormReversion = S<PokemonHomeFormReversions<"V0351_POKEMON_CASTFORM_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "CASTFORM_NORMAL";
            revertedFormString: "form_castform_normal_full";
            unauthorizedForms: [
                "CASTFORM_SUNNY",
                "CASTFORM_RAINY",
                "CASTFORM_SNOWY"
            ];
        }
    ];
    pokemonId: "CASTFORM";
}>>;
export type PokemonHomeFormReversionsV0421CherrimHomeFormReversion = S<PokemonHomeFormReversions<"V0421_CHERRIM_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "CHERRIM_OVERCAST";
            revertedFormString: "form_overcast";
            unauthorizedForms: [
                "CHERRIM_SUNNY"
            ];
        }
    ];
    pokemonId: "CHERRIM";
}>>;
export type PokemonHomeFormReversionsV0487PokemonGiratinaHomeReversion = S<PokemonHomeFormReversions<"V0487_POKEMON_GIRATINA_HOME_REVERSION", {
    formMapping: [
        {
            revertedForm: "GIRATINA_ALTERED";
            revertedFormString: "form_altered";
            unauthorizedForms: [
                "GIRATINA_ORIGIN"
            ];
        }
    ];
    pokemonId: "GIRATINA";
}>>;
export type PokemonHomeFormReversionsV0555PokemonDarmanitanHomeFormReversion = S<PokemonHomeFormReversions<"V0555_POKEMON_DARMANITAN_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "DARMANITAN_STANDARD";
            revertedFormString: "form_standard_mode";
            unauthorizedForms: [
                "DARMANITAN_ZEN"
            ];
        },
        {
            revertedForm: "DARMANITAN_GALARIAN_STANDARD";
            revertedFormString: "form_standard_mode";
            unauthorizedForms: [
                "DARMANITAN_GALARIAN_ZEN"
            ];
        }
    ];
    pokemonId: "DARMANITAN";
}>>;
export type PokemonHomeFormReversionsV0647PokemonKeldeoHomeFormReversion = S<PokemonHomeFormReversions<"V0647_POKEMON_KELDEO_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "KELDEO_ORDINARY";
            revertedFormString: "form_ordinary_full";
            unauthorizedForms: [
                "KELDEO_RESOLUTE"
            ];
        }
    ];
    pokemonId: "KELDEO";
}>>;
export type PokemonHomeFormReversionsV0648PokemonMeloettaHomeFormReversion = S<PokemonHomeFormReversions<"V0648_POKEMON_MELOETTA_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "MELOETTA_ARIA";
            revertedFormString: "form_aria";
            unauthorizedForms: [
                "MELOETTA_PIROUETTE"
            ];
        }
    ];
    pokemonId: "MELOETTA";
}>>;
export type PokemonHomeFormReversionsV0649PokemonGenesectHomeFormReversion = S<PokemonHomeFormReversions<"V0649_POKEMON_GENESECT_HOME_FORM_REVERSION", {
    formMapping: [
        {
            revertedForm: "GENESECT_NORMAL";
            revertedFormString: "form_no_drive_full";
            unauthorizedForms: [
                "GENESECT_BURN",
                "GENESECT_CHILL",
                "GENESECT_DOUSE",
                "GENESECT_SHOCK"
            ];
        }
    ];
    pokemonId: "GENESECT";
}>>;

export type PokemonHomeFormReversionsMasterfileEntry = PokemonHomeFormReversionsV0351PokemonCastformHomeFormReversion | PokemonHomeFormReversionsV0421CherrimHomeFormReversion | PokemonHomeFormReversionsV0487PokemonGiratinaHomeReversion | PokemonHomeFormReversionsV0555PokemonDarmanitanHomeFormReversion | PokemonHomeFormReversionsV0647PokemonKeldeoHomeFormReversion | PokemonHomeFormReversionsV0648PokemonMeloettaHomeFormReversion | PokemonHomeFormReversionsV0649PokemonGenesectHomeFormReversion;

export type PokemonHomeFormReversionsTemplateID = PokemonHomeFormReversionsMasterfileEntry["templateId"];

// Generated from Pokémon GO masterfile — group "evolutionChainDisplaySettings", 79 entries (structural types).

export type * from "./variants";

export interface EvolutionChainDisplaySettings<
	TemplateID extends string = string,
	TData extends EvolutionChainDisplaySettingsData = EvolutionChainDisplaySettingsData,
> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		evolutionChainDisplaySettings: TData;
	};
}

export interface EvolutionChainDisplaySettingsData {
	evolutionChains?: Array<{
		evolutionInfos: Array<{
			form?: string;
			gender?: "FEMALE" | "GENDERLESS" | "MALE";
			pokemon: string;
		}>;
		headerMessage?:
			| "alola_pokedex_header"
			| "form_artisan"
			| "form_counterfeit"
			| "form_masterpiece"
			| "galarian_pokedex_header"
			| "gender_female"
			| "gender_male"
			| "hisuian_pokedex_header"
			| "paldean_pokedex_header";
	}>;
	pokemon: string;
}

export type EvolutionChainDisplaySettingsMasterfileEntry =
	| EvolutionChainDisplaySettingsV0052PokemonMeowth
	| EvolutionChainDisplaySettingsV0083PokemonFarfetchd
	| EvolutionChainDisplaySettingsV0122PokemonMrMime
	| EvolutionChainDisplaySettingsV0123PokemonScyther
	| EvolutionChainDisplaySettingsV0150PokemonMewtwo
	| EvolutionChainDisplaySettingsV0155PokemonCyndaquil
	| EvolutionChainDisplaySettingsV0156PokemonQuilava
	| EvolutionChainDisplaySettingsV0157PokemonTyphlosion
	| EvolutionChainDisplaySettingsV0194PokemonWooper
	| EvolutionChainDisplaySettingsV0211PokemonQwilfish
	| EvolutionChainDisplaySettingsV0215PokemonSneasel
	| EvolutionChainDisplaySettingsV0222PokemonCorsola
	| EvolutionChainDisplaySettingsV0234PokemonStantler
	| EvolutionChainDisplaySettingsV0263PokemonZigzagoon
	| EvolutionChainDisplaySettingsV0264PokemonLinoone
	| EvolutionChainDisplaySettingsV0290PokemonNincada
	| EvolutionChainDisplaySettingsV0412PokemonBurmy
	| EvolutionChainDisplaySettingsV0413PokemonWormadam
	| EvolutionChainDisplaySettingsV0414PokemonMothim
	| EvolutionChainDisplaySettingsV0420PokemonCherubi
	| EvolutionChainDisplaySettingsV0421PokemonCherrim
	| EvolutionChainDisplaySettingsV0422PokemonShellos
	| EvolutionChainDisplaySettingsV0423PokemonGastrodon
	| EvolutionChainDisplaySettingsV0449PokemonHippopotas
	| EvolutionChainDisplaySettingsV0450PokemonHippowdon
	| EvolutionChainDisplaySettingsV0501PokemonOshawott
	| EvolutionChainDisplaySettingsV0502PokemonDewott
	| EvolutionChainDisplaySettingsV0503PokemonSamurott
	| EvolutionChainDisplaySettingsV0519PokemonPidove
	| EvolutionChainDisplaySettingsV0520PokemonTranquill
	| EvolutionChainDisplaySettingsV0521PokemonUnfezant
	| EvolutionChainDisplaySettingsV0550PokemonBasculin
	| EvolutionChainDisplaySettingsV0554PokemonDarumaka
	| EvolutionChainDisplaySettingsV0562PokemonYamask
	| EvolutionChainDisplaySettingsV0585PokemonDeerling
	| EvolutionChainDisplaySettingsV0586PokemonSawsbuck
	| EvolutionChainDisplaySettingsV0592PokemonFrillish
	| EvolutionChainDisplaySettingsV0593PokemonJellicent
	| EvolutionChainDisplaySettingsV0664PokemonScatterbug
	| EvolutionChainDisplaySettingsV0665PokemonSpewpa
	| EvolutionChainDisplaySettingsV0666PokemonVivillon
	| EvolutionChainDisplaySettingsV0667PokemonLitleo
	| EvolutionChainDisplaySettingsV0668PokemonPyroar
	| EvolutionChainDisplaySettingsV0669PokemonFlabebe
	| EvolutionChainDisplaySettingsV0670PokemonFloette
	| EvolutionChainDisplaySettingsV0671PokemonFlorges
	| EvolutionChainDisplaySettingsV0677PokemonEspurr
	| EvolutionChainDisplaySettingsV0678PokemonMeowstic
	| EvolutionChainDisplaySettingsV0679PokemonHonedge
	| EvolutionChainDisplaySettingsV0680PokemonDoublade
	| EvolutionChainDisplaySettingsV0681PokemonAegislash
	| EvolutionChainDisplaySettingsV0710PokemonPumpkaboo
	| EvolutionChainDisplaySettingsV0711PokemonGourgeist
	| EvolutionChainDisplaySettingsV0718PokemonZygarde
	| EvolutionChainDisplaySettingsV0722PokemonRowlet
	| EvolutionChainDisplaySettingsV0723PokemonDartrix
	| EvolutionChainDisplaySettingsV0724PokemonDecidueye
	| EvolutionChainDisplaySettingsV0744PokemonRockruff
	| EvolutionChainDisplaySettingsV0745PokemonLycanroc
	| EvolutionChainDisplaySettingsV0800PokemonNecrozma
	| EvolutionChainDisplaySettingsV0848PokemonToxel
	| EvolutionChainDisplaySettingsV0849PokemonToxtricity
	| EvolutionChainDisplaySettingsV0862PokemonObstagoon
	| EvolutionChainDisplaySettingsV0863PokemonPerrserker
	| EvolutionChainDisplaySettingsV0864PokemonCursola
	| EvolutionChainDisplaySettingsV0865PokemonSirfetchd
	| EvolutionChainDisplaySettingsV0866PokemonMrRime
	| EvolutionChainDisplaySettingsV0867PokemonRunerigus
	| EvolutionChainDisplaySettingsV0899PokemonWyrdeer
	| EvolutionChainDisplaySettingsV0900PokemonKleavor
	| EvolutionChainDisplaySettingsV0903PokemonSneasler
	| EvolutionChainDisplaySettingsV0904PokemonOverqwil
	| EvolutionChainDisplaySettingsV0915PokemonLechonk
	| EvolutionChainDisplaySettingsV0916PokemonOinkologne
	| EvolutionChainDisplaySettingsV0924PokemonTandemaus
	| EvolutionChainDisplaySettingsV0925PokemonMaushold
	| EvolutionChainDisplaySettingsV0980PokemonClodsire
	| EvolutionChainDisplaySettingsV1012PokemonPoltchageist
	| EvolutionChainDisplaySettingsV1013PokemonSinistcha;

export type EvolutionChainDisplaySettingsTemplateID = EvolutionChainDisplaySettingsMasterfileEntry["templateId"];

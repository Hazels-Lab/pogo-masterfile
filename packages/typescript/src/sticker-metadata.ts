// Generated from Pokémon GO masterfile — group "stickerMetadata", 600 entries.

import type { S } from "./_utils";
export interface StickerMetadata<TemplateID extends string = string, TData extends StickerMetadataData = StickerMetadataData> {
	templateId: TemplateID;
	data: {
		templateId: TemplateID;
		stickerMetadata: TData & {
			maxCount: 25;
			stickerId: TemplateID;
		};
	};
}

export interface StickerMetadataData {
	category: Array<"24_7" | "Characters" | "Decoration" | "Messages" | "Misc" | "Pokemon">;
	pokemonId?: string;
	regionId?: number;
	releaseDate?: number;
	stickerUrl?: string;
}

export type StickerMetadata2023collab1 = S<
	StickerMetadata<
		"STICKER_2023COLLAB_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20230926;
		}
	>
>;
export type StickerMetadata2023collab2 = S<
	StickerMetadata<
		"STICKER_2023COLLAB_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20230926;
		}
	>
>;
export type StickerMetadata2023collab3 = S<
	StickerMetadata<
		"STICKER_2023COLLAB_3",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20230926;
		}
	>
>;
export type StickerMetadata2023collab4 = S<
	StickerMetadata<
		"STICKER_2023COLLAB_4",
		{
			category: ["Pokemon"];
			releaseDate: 20230926;
		}
	>
>;
export type StickerMetadata6anniv1 = S<
	StickerMetadata<
		"STICKER_6ANNIV_1",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata6anniv2 = S<
	StickerMetadata<
		"STICKER_6ANNIV_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata6anniv3 = S<
	StickerMetadata<
		"STICKER_6ANNIV_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHARMELEON";
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata6anniv4 = S<
	StickerMetadata<
		"STICKER_6ANNIV_4",
		{
			category: ["Pokemon"];
			pokemonId: "CHARMANDER";
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata6anniv5 = S<
	StickerMetadata<
		"STICKER_6ANNIV_5",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata6anniv6 = S<
	StickerMetadata<
		"STICKER_6ANNIV_6",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220706;
		}
	>
>;
export type StickerMetadata7anniv1 = S<
	StickerMetadata<
		"STICKER_7ANNIV_1",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20230629;
		}
	>
>;
export type StickerMetadata7anniv2 = S<
	StickerMetadata<
		"STICKER_7ANNIV_2",
		{
			category: ["Pokemon"];
			pokemonId: "WARTORTLE";
			releaseDate: 20230629;
		}
	>
>;
export type StickerMetadata7anniv3 = S<
	StickerMetadata<
		"STICKER_7ANNIV_3",
		{
			category: ["Pokemon"];
			pokemonId: "BLASTOISE";
			releaseDate: 20230629;
		}
	>
>;
export type StickerMetadata7anniv4 = S<
	StickerMetadata<
		"STICKER_7ANNIV_4",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			releaseDate: 20230629;
		}
	>
>;
export type StickerMetadata7anniv5 = S<
	StickerMetadata<
		"STICKER_7ANNIV_5",
		{
			category: ["Pokemon"];
			pokemonId: "TOGEDEMARU";
			regionId: 6;
			releaseDate: 20230629;
		}
	>
>;
export type StickerMetadata8anniv1 = S<
	StickerMetadata<
		"STICKER_8ANNIV_1",
		{
			category: ["Misc"];
			releaseDate: 20240620;
		}
	>
>;
export type StickerMetadata8anniv2 = S<
	StickerMetadata<
		"STICKER_8ANNIV_2",
		{
			category: ["Pokemon"];
			pokemonId: "GRIMER";
			releaseDate: 20240620;
		}
	>
>;
export type StickerMetadata8anniv3 = S<
	StickerMetadata<
		"STICKER_8ANNIV_3",
		{
			category: ["Pokemon"];
			pokemonId: "BULBASAUR";
			regionId: 2000;
			releaseDate: 20240620;
		}
	>
>;
export type StickerMetadata8anniv4 = S<
	StickerMetadata<
		"STICKER_8ANNIV_4",
		{
			category: ["Pokemon"];
			pokemonId: "MELTAN";
			regionId: 6;
			releaseDate: 20240620;
		}
	>
>;
export type StickerMetadata9anniv1 = S<
	StickerMetadata<
		"STICKER_9ANNIV_1",
		{
			category: ["Pokemon"];
			pokemonId: "BULBASAUR";
			releaseDate: 20250701;
		}
	>
>;
export type StickerMetadata9anniv2 = S<
	StickerMetadata<
		"STICKER_9ANNIV_2",
		{
			category: ["Pokemon"];
			pokemonId: "IVYSAUR";
			releaseDate: 20250701;
		}
	>
>;
export type StickerMetadata9anniv3 = S<
	StickerMetadata<
		"STICKER_9ANNIV_3",
		{
			category: ["Pokemon"];
			pokemonId: "VENUSAUR";
			releaseDate: 20250701;
		}
	>
>;
export type StickerMetadataAlolaishi1 = S<
	StickerMetadata<
		"STICKER_ALOLAISHI_1",
		{
			category: ["Pokemon"];
			pokemonId: "GEODUDE";
			regionId: 6;
			releaseDate: 20220521;
		}
	>
>;
export type StickerMetadataAlolaishi2 = S<
	StickerMetadata<
		"STICKER_ALOLAISHI_2",
		{
			category: ["Pokemon"];
			pokemonId: "GRAVELER";
			regionId: 2000;
			releaseDate: 20220521;
		}
	>
>;
export type StickerMetadataAlolaishi3 = S<
	StickerMetadata<
		"STICKER_ALOLAISHI_3",
		{
			category: ["Pokemon"];
			pokemonId: "GOLEM";
			regionId: 2000;
			releaseDate: 20220521;
		}
	>
>;
export type StickerMetadataAlolaishi4 = S<
	StickerMetadata<
		"STICKER_ALOLAISHI_4",
		{
			category: ["Pokemon"];
			pokemonId: "GEODUDE";
			regionId: 6;
			releaseDate: 20220521;
		}
	>
>;
export type StickerMetadataAprilfool20231 = S<
	StickerMetadata<
		"STICKER_APRILFOOL2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIDGEY";
			releaseDate: 20230331;
		}
	>
>;
export type StickerMetadataAprilfool20232 = S<
	StickerMetadata<
		"STICKER_APRILFOOL2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIDGEY";
			releaseDate: 20230331;
		}
	>
>;
export type StickerMetadataAudino = S<
	StickerMetadata<
		"STICKER_AUDINO",
		{
			category: ["Pokemon"];
			pokemonId: "AUDINO";
			regionId: 4;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_audino.png";
		}
	>
>;
export type StickerMetadataBellsproutcd1 = S<
	StickerMetadata<
		"STICKER_BELLSPROUTCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "BELLSPROUT";
			releaseDate: 20240410;
		}
	>
>;
export type StickerMetadataBellsproutcd2 = S<
	StickerMetadata<
		"STICKER_BELLSPROUTCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "BELLSPROUT";
			releaseDate: 20240410;
		}
	>
>;
export type StickerMetadataBellsproutcd3 = S<
	StickerMetadata<
		"STICKER_BELLSPROUTCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "BELLSPROUT";
			releaseDate: 20240410;
		}
	>
>;
export type StickerMetadataBellsproutcd4 = S<
	StickerMetadata<
		"STICKER_BELLSPROUTCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "BELLSPROUT";
			releaseDate: 20240410;
		}
	>
>;
export type StickerMetadataBidoofday1 = S<
	StickerMetadata<
		"STICKER_BIDOOFDAY_1",
		{
			category: ["Pokemon"];
			pokemonId: "BIDOOF";
			regionId: 3;
			releaseDate: 20210625;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_1.png";
		}
	>
>;
export type StickerMetadataBidoofday2 = S<
	StickerMetadata<
		"STICKER_BIDOOFDAY_2",
		{
			category: ["Pokemon"];
			pokemonId: "BIDOOF";
			regionId: 3;
			releaseDate: 20210625;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_2.png";
		}
	>
>;
export type StickerMetadataBidoofday3 = S<
	StickerMetadata<
		"STICKER_BIDOOFDAY_3",
		{
			category: ["Pokemon"];
			pokemonId: "BIDOOF";
			regionId: 3;
			releaseDate: 20210625;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_bidoofDay_3.png";
		}
	>
>;
export type StickerMetadataBounsweetcd20241 = S<
	StickerMetadata<
		"STICKER_BOUNSWEETCD2024_1",
		{
			category: ["Pokemon"];
			regionId: 6;
			releaseDate: 20240508;
		}
	>
>;
export type StickerMetadataBounsweetcd20242 = S<
	StickerMetadata<
		"STICKER_BOUNSWEETCD2024_2",
		{
			category: ["Pokemon"];
			regionId: 6;
			releaseDate: 20240508;
		}
	>
>;
export type StickerMetadataBounsweetcd20243 = S<
	StickerMetadata<
		"STICKER_BOUNSWEETCD2024_3",
		{
			category: ["Pokemon"];
			regionId: 6;
			releaseDate: 20240508;
		}
	>
>;
export type StickerMetadataBounsweetcd20244 = S<
	StickerMetadata<
		"STICKER_BOUNSWEETCD2024_4",
		{
			category: ["Pokemon"];
			regionId: 6;
			releaseDate: 20240508;
		}
	>
>;
export type StickerMetadataBreadkorea001 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_001",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataBreadkorea002 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_002",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataBreadkorea003 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_003",
		{
			category: ["Pokemon"];
			pokemonId: "GENGAR";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataBreadkorea004 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_004",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataBreadkorea005 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_005",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataBreadkorea006 = S<
	StickerMetadata<
		"STICKER_BREADKOREA_006",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220801;
		}
	>
>;
export type StickerMetadataChanseycd1 = S<
	StickerMetadata<
		"STICKER_CHANSEYCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			releaseDate: 20240123;
		}
	>
>;
export type StickerMetadataChanseycd2 = S<
	StickerMetadata<
		"STICKER_CHANSEYCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			regionId: 2000;
			releaseDate: 20240123;
		}
	>
>;
export type StickerMetadataChanseycd3 = S<
	StickerMetadata<
		"STICKER_CHANSEYCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			regionId: 1;
			releaseDate: 20240123;
		}
	>
>;
export type StickerMetadataChanseycd4 = S<
	StickerMetadata<
		"STICKER_CHANSEYCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			releaseDate: 20240123;
		}
	>
>;
export type StickerMetadataCharizard1 = S<
	StickerMetadata<
		"STICKER_CHARIZARD_1",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20241004;
		}
	>
>;
export type StickerMetadataCharizard2 = S<
	StickerMetadata<
		"STICKER_CHARIZARD_2",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20241004;
		}
	>
>;
export type StickerMetadataCharizard3 = S<
	StickerMetadata<
		"STICKER_CHARIZARD_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20241004;
		}
	>
>;
export type StickerMetadataChespin1 = S<
	StickerMetadata<
		"STICKER_CHESPIN_1",
		{
			category: ["Pokemon"];
			pokemonId: "CHESPIN";
			regionId: 5;
			releaseDate: 20230107;
		}
	>
>;
export type StickerMetadataChespin2 = S<
	StickerMetadata<
		"STICKER_CHESPIN_2",
		{
			category: ["Pokemon"];
			pokemonId: "CHESPIN";
			regionId: 5;
			releaseDate: 20230107;
		}
	>
>;
export type StickerMetadataChespin3 = S<
	StickerMetadata<
		"STICKER_CHESPIN_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHESPIN";
			regionId: 5;
			releaseDate: 20230107;
		}
	>
>;
export type StickerMetadataChespin4 = S<
	StickerMetadata<
		"STICKER_CHESPIN_4",
		{
			category: ["Pokemon"];
			pokemonId: "CHESPIN";
			regionId: 5;
			releaseDate: 20230107;
		}
	>
>;
export type StickerMetadataCityspotlight = S<
	StickerMetadata<
		"STICKER_CITYSPOTLIGHT",
		{
			category: ["Misc"];
			releaseDate: 20201122;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_CitySpotlight.png";
		}
	>
>;
export type StickerMetadataConciergeEevee = S<
	StickerMetadata<
		"STICKER_CONCIERGE_EEVEE",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20250909;
		}
	>
>;
export type StickerMetadataConciergePsyduck = S<
	StickerMetadata<
		"STICKER_CONCIERGE_PSYDUCK",
		{
			category: ["Pokemon"];
			pokemonId: "PSYDUCK";
			releaseDate: 20250909;
		}
	>
>;
export type StickerMetadataConciergeSealeo = S<
	StickerMetadata<
		"STICKER_CONCIERGE_SEALEO",
		{
			category: ["Pokemon"];
			pokemonId: "SEALEO";
			regionId: 2;
			releaseDate: 20250909;
		}
	>
>;
export type StickerMetadataConciergeShinx = S<
	StickerMetadata<
		"STICKER_CONCIERGE_SHINX",
		{
			category: ["Pokemon"];
			pokemonId: "SHINX";
			regionId: 3;
			releaseDate: 20250909;
		}
	>
>;
export type StickerMetadataDeino1 = S<
	StickerMetadata<
		"STICKER_DEINO_1",
		{
			category: ["Pokemon"];
			pokemonId: "DEINO";
			regionId: 4;
			releaseDate: 20220625;
		}
	>
>;
export type StickerMetadataDeino2 = S<
	StickerMetadata<
		"STICKER_DEINO_2",
		{
			category: ["Pokemon"];
			pokemonId: "ZWEILOUS";
			regionId: 4;
			releaseDate: 20220625;
		}
	>
>;
export type StickerMetadataDeino3 = S<
	StickerMetadata<
		"STICKER_DEINO_3",
		{
			category: ["Pokemon"];
			pokemonId: "ZWEILOUS";
			regionId: 4;
			releaseDate: 20220625;
		}
	>
>;
export type StickerMetadataDeino4 = S<
	StickerMetadata<
		"STICKER_DEINO_4",
		{
			category: ["Pokemon"];
			pokemonId: "HYDREIGON";
			regionId: 2000;
			releaseDate: 20220625;
		}
	>
>;
export type StickerMetadataDiademuertos20231 = S<
	StickerMetadata<
		"STICKER_DIADEMUERTOS2023_1",
		{
			category: ["Misc"];
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataDiademuertos20232 = S<
	StickerMetadata<
		"STICKER_DIADEMUERTOS2023_2",
		{
			category: ["Misc"];
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataDiademuertos20233 = S<
	StickerMetadata<
		"STICKER_DIADEMUERTOS2023_3",
		{
			category: ["Misc"];
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataDiademuertos20234 = S<
	StickerMetadata<
		"STICKER_DIADEMUERTOS2023_4",
		{
			category: ["Misc"];
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataDiamondpearlchimchar = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLCHIMCHAR",
		{
			category: ["Pokemon"];
			pokemonId: "CHIMCHAR";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlChimchar.png";
		}
	>
>;
export type StickerMetadataDiamondpearldialga = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLDIALGA",
		{
			category: ["Pokemon"];
			pokemonId: "DIALGA";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlDialga.png";
		}
	>
>;
export type StickerMetadataDiamondpearllucario = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLLUCARIO",
		{
			category: ["Pokemon"];
			pokemonId: "LUCARIO";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlLucario.png";
		}
	>
>;
export type StickerMetadataDiamondpearlpalkia = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLPALKIA",
		{
			category: ["Pokemon"];
			pokemonId: "PALKIA";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlPalkia.png";
		}
	>
>;
export type StickerMetadataDiamondpearlpiplup = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLPIPLUP",
		{
			category: ["Pokemon"];
			pokemonId: "PIPLUP";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlPiplup.png";
		}
	>
>;
export type StickerMetadataDiamondpearlturtwig = S<
	StickerMetadata<
		"STICKER_DIAMONDPEARLTURTWIG",
		{
			category: ["Pokemon"];
			pokemonId: "TURTWIG";
			regionId: 3;
			releaseDate: 20211116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_diamondPearlTurtwig.png";
		}
	>
>;
export type StickerMetadataDitto1 = S<
	StickerMetadata<
		"STICKER_DITTO_1",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_1.png";
		}
	>
>;
export type StickerMetadataDitto2 = S<
	StickerMetadata<
		"STICKER_DITTO_2",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_2.png";
		}
	>
>;
export type StickerMetadataDitto3 = S<
	StickerMetadata<
		"STICKER_DITTO_3",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_3.png";
		}
	>
>;
export type StickerMetadataDitto4 = S<
	StickerMetadata<
		"STICKER_DITTO_4",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_4.png";
		}
	>
>;
export type StickerMetadataDitto5 = S<
	StickerMetadata<
		"STICKER_DITTO_5",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_5.png";
		}
	>
>;
export type StickerMetadataDitto6 = S<
	StickerMetadata<
		"STICKER_DITTO_6",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20220401;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_ditto_6.png";
		}
	>
>;
export type StickerMetadataEeveefriends1 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_1",
		{
			category: ["Pokemon"];
			pokemonId: "SYLVEON";
			regionId: 5;
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_1.png";
		}
	>
>;
export type StickerMetadataEeveefriends2 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_2",
		{
			category: ["Pokemon"];
			pokemonId: "GLACEON";
			regionId: 3;
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_2.png";
		}
	>
>;
export type StickerMetadataEeveefriends3 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_3",
		{
			category: ["Pokemon"];
			pokemonId: "LEAFEON";
			regionId: 3;
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_3.png";
		}
	>
>;
export type StickerMetadataEeveefriends4 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_4",
		{
			category: ["Pokemon"];
			pokemonId: "UMBREON";
			regionId: 1;
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_4.png";
		}
	>
>;
export type StickerMetadataEeveefriends5 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_5",
		{
			category: ["Pokemon"];
			pokemonId: "ESPEON";
			regionId: 1;
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_5.png";
		}
	>
>;
export type StickerMetadataEeveefriends6 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_6",
		{
			category: ["Pokemon"];
			pokemonId: "FLAREON";
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_6.png";
		}
	>
>;
export type StickerMetadataEeveefriends7 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_7",
		{
			category: ["Pokemon"];
			pokemonId: "JOLTEON";
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_7.png";
		}
	>
>;
export type StickerMetadataEeveefriends8 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_8",
		{
			category: ["Pokemon"];
			pokemonId: "VAPOREON";
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_8.png";
		}
	>
>;
export type StickerMetadataEeveefriends9 = S<
	StickerMetadata<
		"STICKER_EEVEEFRIENDS_9",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20210525;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_eeveeFriends_9.png";
		}
	>
>;
export type StickerMetadataEternatus = S<
	StickerMetadata<
		"STICKER_ETERNATUS",
		{
			category: ["Pokemon"];
			pokemonId: "ETERNATUS";
			regionId: 7;
			releaseDate: 20250718;
		}
	>
>;
export type StickerMetadataFall20231 = S<
	StickerMetadata<
		"STICKER_FALL_2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "DEERLING";
			regionId: 2000;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20232 = S<
	StickerMetadata<
		"STICKER_FALL_2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "UMBREON";
			regionId: 1;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20233 = S<
	StickerMetadata<
		"STICKER_FALL_2023_3",
		{
			category: ["Pokemon"];
			pokemonId: "ZORUA";
			regionId: 4;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20234 = S<
	StickerMetadata<
		"STICKER_FALL_2023_4",
		{
			category: ["Pokemon"];
			pokemonId: "PUMPKABOO";
			regionId: 2000;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20235 = S<
	StickerMetadata<
		"STICKER_FALL_2023_5",
		{
			category: ["Pokemon"];
			pokemonId: "LECHONK";
			regionId: 1001;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20236 = S<
	StickerMetadata<
		"STICKER_FALL_2023_6",
		{
			category: ["Pokemon"];
			pokemonId: "FURRET";
			regionId: 1;
			releaseDate: 20230830;
		}
	>
>;
export type StickerMetadataFall20241 = S<
	StickerMetadata<
		"STICKER_FALL_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "BIDOOF";
			regionId: 3;
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20242 = S<
	StickerMetadata<
		"STICKER_FALL_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "DREEPY";
			regionId: 7;
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20243 = S<
	StickerMetadata<
		"STICKER_FALL_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "MUNCHLAX";
			regionId: 3;
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20244 = S<
	StickerMetadata<
		"STICKER_FALL_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "MEOWTH";
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20245 = S<
	StickerMetadata<
		"STICKER_FALL_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "WOOLOO";
			regionId: 7;
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20246 = S<
	StickerMetadata<
		"STICKER_FALL_2024_6",
		{
			category: ["Pokemon"];
			pokemonId: "GREEDENT";
			regionId: 7;
			releaseDate: 20240827;
		}
	>
>;
export type StickerMetadataFall20251 = S<
	StickerMetadata<
		"STICKER_FALL_2025_1",
		{
			category: ["Pokemon"];
			pokemonId: "GREAVARD";
			regionId: 1001;
			releaseDate: 20250902;
		}
	>
>;
export type StickerMetadataFall20252 = S<
	StickerMetadata<
		"STICKER_FALL_2025_2",
		{
			category: ["Pokemon"];
			pokemonId: "NICKIT";
			regionId: 7;
			releaseDate: 20250902;
		}
	>
>;
export type StickerMetadataFall20253 = S<
	StickerMetadata<
		"STICKER_FALL_2025_3",
		{
			category: ["Pokemon"];
			pokemonId: "CLEFAIRY";
			releaseDate: 20250902;
		}
	>
>;
export type StickerMetadataFall20254 = S<
	StickerMetadata<
		"STICKER_FALL_2025_4",
		{
			category: ["Pokemon"];
			pokemonId: "APPLETUN";
			regionId: 7;
			releaseDate: 20250902;
		}
	>
>;
export type StickerMetadataFallSawsbuck = S<
	StickerMetadata<
		"STICKER_FALL_SAWSBUCK",
		{
			category: ["Pokemon"];
			pokemonId: "SAWSBUCK";
			regionId: 4;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFallShroomish = S<
	StickerMetadata<
		"STICKER_FALL_SHROOMISH",
		{
			category: ["Pokemon"];
			pokemonId: "SHROOMISH";
			regionId: 2000;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFallSkwovet = S<
	StickerMetadata<
		"STICKER_FALL_SKWOVET",
		{
			category: ["Pokemon"];
			pokemonId: "SKWOVET";
			regionId: 7;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFallTeddiursa = S<
	StickerMetadata<
		"STICKER_FALL_TEDDIURSA",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 1;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFallTrevenant = S<
	StickerMetadata<
		"STICKER_FALL_TREVENANT",
		{
			category: ["Pokemon"];
			pokemonId: "TREVENANT";
			regionId: 5;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFallVulpix = S<
	StickerMetadata<
		"STICKER_FALL_VULPIX",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			regionId: 2000;
			releaseDate: 20220901;
		}
	>
>;
export type StickerMetadataFennekin1 = S<
	StickerMetadata<
		"STICKER_FENNEKIN_1",
		{
			category: ["Pokemon"];
			pokemonId: "FENNEKIN";
			regionId: 5;
			releaseDate: 20230508;
		}
	>
>;
export type StickerMetadataFennekin2 = S<
	StickerMetadata<
		"STICKER_FENNEKIN_2",
		{
			category: ["Pokemon"];
			pokemonId: "FENNEKIN";
			regionId: 5;
			releaseDate: 20230508;
		}
	>
>;
export type StickerMetadataFennekin3 = S<
	StickerMetadata<
		"STICKER_FENNEKIN_3",
		{
			category: ["Pokemon"];
			pokemonId: "FENNEKIN";
			regionId: 5;
			releaseDate: 20230508;
		}
	>
>;
export type StickerMetadataFennekin4 = S<
	StickerMetadata<
		"STICKER_FENNEKIN_4",
		{
			category: ["Pokemon"];
			pokemonId: "FENNEKIN";
			regionId: 5;
			releaseDate: 20230508;
		}
	>
>;
export type StickerMetadataFestivaloflightMorelull = S<
	StickerMetadata<
		"STICKER_FESTIVALOFLIGHT_MORELULL",
		{
			category: ["Pokemon"];
			pokemonId: "MORELULL";
			regionId: 6;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataFestivaloflightShiinotic = S<
	StickerMetadata<
		"STICKER_FESTIVALOFLIGHT_SHIINOTIC",
		{
			category: ["Pokemon"];
			pokemonId: "SHIINOTIC";
			regionId: 6;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataFestivalofthelights21V1 = S<
	StickerMetadata<
		"STICKER_FESTIVALOFTHELIGHTS21_V1",
		{
			category: ["Pokemon"];
			pokemonId: "DEDENNE";
			regionId: 5;
			releaseDate: 20211105;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v1.png";
		}
	>
>;
export type StickerMetadataFestivalofthelights21V2 = S<
	StickerMetadata<
		"STICKER_FESTIVALOFTHELIGHTS21_V2",
		{
			category: ["Pokemon"];
			pokemonId: "DEDENNE";
			regionId: 5;
			releaseDate: 20211105;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v2.png";
		}
	>
>;
export type StickerMetadataFestivalofthelights21V3 = S<
	StickerMetadata<
		"STICKER_FESTIVALOFTHELIGHTS21_V3",
		{
			category: ["Pokemon"];
			pokemonId: "DEDENNE";
			regionId: 5;
			releaseDate: 20211105;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v3.png";
		}
	>
>;
export type StickerMetadataFestivalofthelights21V4 = S<
	StickerMetadata<
		"STICKER_FESTIVALOFTHELIGHTS21_V4",
		{
			category: ["Pokemon"];
			pokemonId: "DEDENNE";
			regionId: 5;
			releaseDate: 20211105;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_festivalOfTheLights21_v4.png";
		}
	>
>;
export type StickerMetadataFlabebe1 = S<
	StickerMetadata<
		"STICKER_FLABEBE_1",
		{
			category: ["Pokemon"];
			pokemonId: "FLABEBE";
			regionId: 5;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_flabebe_1.png";
		}
	>
>;
export type StickerMetadataFlabebe2 = S<
	StickerMetadata<
		"STICKER_FLABEBE_2",
		{
			category: ["Pokemon"];
			pokemonId: "FLABEBE";
			regionId: 5;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_flabebe_2.png";
		}
	>
>;
export type StickerMetadataFlairHeart1 = S<
	StickerMetadata<
		"STICKER_FLAIR_HEART_1",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairHeart2 = S<
	StickerMetadata<
		"STICKER_FLAIR_HEART_2",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairHeart3 = S<
	StickerMetadata<
		"STICKER_FLAIR_HEART_3",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairHeart4 = S<
	StickerMetadata<
		"STICKER_FLAIR_HEART_4",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairHeart5 = S<
	StickerMetadata<
		"STICKER_FLAIR_HEART_5",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar1 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_1",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar2 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_2",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar3 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_3",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar4 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_4",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar5 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_5",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar6 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_6",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFlairStar7 = S<
	StickerMetadata<
		"STICKER_FLAIR_STAR_7",
		{
			category: ["Decoration"];
		}
	>
>;
export type StickerMetadataFormulaekoreaPikachu = S<
	StickerMetadata<
		"STICKER_FORMULAEKOREA_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220810;
		}
	>
>;
export type StickerMetadataFossilmuseum1 = S<
	StickerMetadata<
		"STICKER_FOSSILMUSEUM_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20250308;
		}
	>
>;
export type StickerMetadataFossilmuseum2 = S<
	StickerMetadata<
		"STICKER_FOSSILMUSEUM_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20250308;
		}
	>
>;
export type StickerMetadataFroakie1 = S<
	StickerMetadata<
		"STICKER_FROAKIE_1",
		{
			category: ["Pokemon"];
			pokemonId: "FROGADIER";
			regionId: 5;
			releaseDate: 20230808;
		}
	>
>;
export type StickerMetadataFroakie2 = S<
	StickerMetadata<
		"STICKER_FROAKIE_2",
		{
			category: ["Pokemon"];
			pokemonId: "GRENINJA";
			regionId: 5;
			releaseDate: 20230808;
		}
	>
>;
export type StickerMetadataFroakie3 = S<
	StickerMetadata<
		"STICKER_FROAKIE_3",
		{
			category: ["Pokemon"];
			pokemonId: "FROAKIE";
			regionId: 5;
			releaseDate: 20230808;
		}
	>
>;
export type StickerMetadataFroakie4 = S<
	StickerMetadata<
		"STICKER_FROAKIE_4",
		{
			category: ["Pokemon"];
			pokemonId: "FROAKIE";
			regionId: 5;
			releaseDate: 20230808;
		}
	>
>;
export type StickerMetadataFunawari04312 = S<
	StickerMetadata<
		"STICKER_FUNAWARI_04_312",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "BULBASAUR";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_04_312.png";
		}
	>
>;
export type StickerMetadataFunawari05312 = S<
	StickerMetadata<
		"STICKER_FUNAWARI_05_312",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "CHARMANDER";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_05_312.png";
		}
	>
>;
export type StickerMetadataFunawari06312 = S<
	StickerMetadata<
		"STICKER_FUNAWARI_06_312",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_06_312.png";
		}
	>
>;
export type StickerMetadataFunawari22312 = S<
	StickerMetadata<
		"STICKER_FUNAWARI_22_312",
		{
			category: ["Pokemon", "24_7"];
			pokemonId: "DITTO";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_22_312.png";
		}
	>
>;
export type StickerMetadataFunwari020608 = S<
	StickerMetadata<
		"STICKER_FUNWARI_02_0608",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			releaseDate: 20201222;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_funwari_02_0608.png";
		}
	>
>;
export type StickerMetadataFunwari10 = S<
	StickerMetadata<
		"STICKER_FUNWARI_10",
		{
			category: ["Pokemon"];
			pokemonId: "TREECKO";
			regionId: 2;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_10.png";
		}
	>
>;
export type StickerMetadataFunwari11Thanku = S<
	StickerMetadata<
		"STICKER_FUNWARI_11_THANKU",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "TORCHIC";
			regionId: 2;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_11_thanku.png";
		}
	>
>;
export type StickerMetadataFunwari1202 = S<
	StickerMetadata<
		"STICKER_FUNWARI_12_02",
		{
			category: ["Pokemon"];
			pokemonId: "MUDKIP";
			regionId: 2;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_12_02.png";
		}
	>
>;
export type StickerMetadataFunwari18 = S<
	StickerMetadata<
		"STICKER_FUNWARI_18",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_18.png";
		}
	>
>;
export type StickerMetadataFunwari20 = S<
	StickerMetadata<
		"STICKER_FUNWARI_20",
		{
			category: ["Pokemon"];
			pokemonId: "OSHAWOTT";
			regionId: 4;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_funwari_20.png";
		}
	>
>;
export type StickerMetadataFunwari35 = S<
	StickerMetadata<
		"STICKER_FUNWARI_35",
		{
			category: ["Pokemon"];
			pokemonId: "WHIMSICOTT";
			regionId: 4;
			releaseDate: 20201222;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_funwari_35.png";
		}
	>
>;
export type StickerMetadataFunwariPidgey18 = S<
	StickerMetadata<
		"STICKER_FUNWARI_PIDGEY_18",
		{
			category: ["Pokemon"];
			pokemonId: "PIDGEY";
			releaseDate: 20210320;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_funwari_pidgey_18.png";
		}
	>
>;
export type StickerMetadataFurfrouheart1 = S<
	StickerMetadata<
		"STICKER_FURFROUHEART_1",
		{
			category: ["Pokemon"];
			pokemonId: "FURFROU";
			regionId: 5;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_furfrouHeart_1.png";
		}
	>
>;
export type StickerMetadataFurfrouheart2 = S<
	StickerMetadata<
		"STICKER_FURFROUHEART_2",
		{
			category: ["Pokemon"];
			pokemonId: "FURFROU";
			regionId: 5;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_furfrouHeart_2.png";
		}
	>
>;
export type StickerMetadataGalarianzigzagoon1 = S<
	StickerMetadata<
		"STICKER_GALARIANZIGZAGOON_1",
		{
			category: ["Pokemon"];
			pokemonId: "ZIGZAGOON";
			regionId: 7;
			releaseDate: 20220813;
		}
	>
>;
export type StickerMetadataGalarianzigzagoon2 = S<
	StickerMetadata<
		"STICKER_GALARIANZIGZAGOON_2",
		{
			category: ["Pokemon"];
			pokemonId: "ZIGZAGOON";
			regionId: 7;
			releaseDate: 20220813;
		}
	>
>;
export type StickerMetadataGalarianzigzagoon3 = S<
	StickerMetadata<
		"STICKER_GALARIANZIGZAGOON_3",
		{
			category: ["Pokemon"];
			pokemonId: "ZIGZAGOON";
			regionId: 7;
			releaseDate: 20220813;
		}
	>
>;
export type StickerMetadataGalarianzigzagoon4 = S<
	StickerMetadata<
		"STICKER_GALARIANZIGZAGOON_4",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20220813;
		}
	>
>;
export type StickerMetadataGiftthankyou = S<
	StickerMetadata<
		"STICKER_GIFTTHANKYOU",
		{
			category: ["Messages", "24_7"];
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_GiftThankyou.png";
		}
	>
>;
export type StickerMetadataGimmighoul1 = S<
	StickerMetadata<
		"STICKER_GIMMIGHOUL_1",
		{
			category: ["Pokemon"];
			pokemonId: "GIMMIGHOUL";
			regionId: 1001;
			releaseDate: 20230224;
		}
	>
>;
export type StickerMetadataGimmighoul2 = S<
	StickerMetadata<
		"STICKER_GIMMIGHOUL_2",
		{
			category: ["Pokemon"];
			pokemonId: "GIMMIGHOUL";
			regionId: 1001;
			releaseDate: 20230224;
		}
	>
>;
export type StickerMetadataGimmighoul3 = S<
	StickerMetadata<
		"STICKER_GIMMIGHOUL_3",
		{
			category: ["Pokemon"];
			pokemonId: "GIMMIGHOUL";
			regionId: 1001;
			releaseDate: 20230224;
		}
	>
>;
export type StickerMetadataGimmighoul4 = S<
	StickerMetadata<
		"STICKER_GIMMIGHOUL_4",
		{
			category: ["Pokemon"];
			pokemonId: "GIMMIGHOUL";
			regionId: 1001;
			releaseDate: 20230224;
		}
	>
>;
export type StickerMetadataGimmighoul5 = S<
	StickerMetadata<
		"STICKER_GIMMIGHOUL_5",
		{
			category: ["Pokemon"];
			pokemonId: "GIMMIGHOUL";
			regionId: 1001;
			releaseDate: 20230224;
		}
	>
>;
export type StickerMetadataGoomycd1 = S<
	StickerMetadata<
		"STICKER_GOOMYCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "GOOMY";
			regionId: 5;
			releaseDate: 20240529;
		}
	>
>;
export type StickerMetadataGoomycd2 = S<
	StickerMetadata<
		"STICKER_GOOMYCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "GOOMY";
			regionId: 5;
			releaseDate: 20240529;
		}
	>
>;
export type StickerMetadataGoomycd3 = S<
	StickerMetadata<
		"STICKER_GOOMYCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "GOOMY";
			regionId: 5;
			releaseDate: 20240529;
		}
	>
>;
export type StickerMetadataGoomycd4 = S<
	StickerMetadata<
		"STICKER_GOOMYCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "GOOMY";
			regionId: 5;
			releaseDate: 20240529;
		}
	>
>;
export type StickerMetadataGotour2021 = S<
	StickerMetadata<
		"STICKER_GOTOUR2021",
		{
			category: ["Misc"];
			releaseDate: 20210220;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_goTour2021_29075.png";
		}
	>
>;
export type StickerMetadataGotour20221 = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_1",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20220227;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_1.png";
		}
	>
>;
export type StickerMetadataGotour20222 = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_2",
		{
			category: ["Pokemon"];
			pokemonId: "BULBASAUR";
			releaseDate: 20220227;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_2.png";
		}
	>
>;
export type StickerMetadataGotour20223 = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHARMANDER";
			releaseDate: 20220227;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_3.png";
		}
	>
>;
export type StickerMetadataGotour20224 = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_4",
		{
			category: ["Pokemon"];
			releaseDate: 20220227;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_4.png";
		}
	>
>;
export type StickerMetadataGotour2022Chikorita = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_CHIKORITA",
		{
			category: ["Pokemon"];
			pokemonId: "CHIKORITA";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_chikorita.png";
		}
	>
>;
export type StickerMetadataGotour2022Cyndaquil = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_CYNDAQUIL",
		{
			category: ["Pokemon"];
			pokemonId: "CYNDAQUIL";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_cyndaquil.png";
		}
	>
>;
export type StickerMetadataGotour2022Hooh = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_HOOH",
		{
			category: ["Pokemon"];
			pokemonId: "HO_OH";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_hooh.png";
		}
	>
>;
export type StickerMetadataGotour2022Lugia = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_LUGIA",
		{
			category: ["Pokemon"];
			pokemonId: "LUGIA";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_lugia.png";
		}
	>
>;
export type StickerMetadataGotour2022Togepi = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_TOGEPI",
		{
			category: ["Pokemon"];
			pokemonId: "TOGEPI";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_togepi.png";
		}
	>
>;
export type StickerMetadataGotour2022Totodile = S<
	StickerMetadata<
		"STICKER_GOTOUR2022_TOTODILE",
		{
			category: ["Pokemon"];
			pokemonId: "CROCONAW";
			regionId: 1;
			releaseDate: 20220226;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_goTour2022_totodile.png";
		}
	>
>;
export type StickerMetadataGotour2025Badge = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_BADGE",
		{
			category: ["Misc"];
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotour2025Kyuremblack = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_KYUREMBLACK",
		{
			category: ["Pokemon"];
			pokemonId: "KYUREM";
			regionId: 4;
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotour2025Kyuremwhite = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_KYUREMWHITE",
		{
			category: ["Pokemon"];
			pokemonId: "KYUREM";
			regionId: 4;
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotour2025Reshiram = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_RESHIRAM",
		{
			category: ["Pokemon"];
			pokemonId: "RESHIRAM";
			regionId: 4;
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotour2025Rz = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_RZ",
		{
			category: ["Misc"];
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotour2025Zekrom = S<
	StickerMetadata<
		"STICKER_GOTOUR2025_ZEKROM",
		{
			category: ["Pokemon"];
			pokemonId: "ZEKROM";
			regionId: 4;
			releaseDate: 20250221;
		}
	>
>;
export type StickerMetadataGotourhoenn1 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_1",
		{
			category: ["Pokemon"];
			pokemonId: "KECLEON";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGotourhoenn2 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_2",
		{
			category: ["Pokemon"];
			pokemonId: "TORCHIC";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGotourhoenn3 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_3",
		{
			category: ["Pokemon"];
			pokemonId: "GROUDON";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGotourhoenn4 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_4",
		{
			category: ["Pokemon"];
			pokemonId: "TREECKO";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGotourhoenn5 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_5",
		{
			category: ["Pokemon"];
			pokemonId: "MUDKIP";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGotourhoenn6 = S<
	StickerMetadata<
		"STICKER_GOTOURHOENN_6",
		{
			category: ["Pokemon"];
			pokemonId: "KYOGRE";
			regionId: 2;
			releaseDate: 20230209;
		}
	>
>;
export type StickerMetadataGowa202501 = S<
	StickerMetadata<
		"STICKER_GOWA2025_01",
		{
			category: ["Misc"];
			releaseDate: 20251027;
		}
	>
>;
export type StickerMetadataGowa202502 = S<
	StickerMetadata<
		"STICKER_GOWA2025_02",
		{
			category: ["Pokemon"];
			pokemonId: "GRIMMSNARL";
			regionId: 7;
			releaseDate: 20251027;
		}
	>
>;
export type StickerMetadataGowa202503 = S<
	StickerMetadata<
		"STICKER_GOWA2025_03",
		{
			category: ["Pokemon"];
			pokemonId: "GRIMMSNARL";
			regionId: 7;
			releaseDate: 20251027;
		}
	>
>;
export type StickerMetadataGowa202504 = S<
	StickerMetadata<
		"STICKER_GOWA2025_04",
		{
			category: ["Pokemon"];
			pokemonId: "MORGREM";
			regionId: 7;
			releaseDate: 20251027;
		}
	>
>;
export type StickerMetadataGowa202505 = S<
	StickerMetadata<
		"STICKER_GOWA2025_05",
		{
			category: ["Pokemon"];
			pokemonId: "IMPIDIMP";
			regionId: 7;
			releaseDate: 20251027;
		}
	>
>;
export type StickerMetadataGrubbin1 = S<
	StickerMetadata<
		"STICKER_GRUBBIN_1",
		{
			category: ["Pokemon"];
			pokemonId: "GRUBBIN";
			regionId: 6;
			releaseDate: 20230923;
		}
	>
>;
export type StickerMetadataGrubbin2 = S<
	StickerMetadata<
		"STICKER_GRUBBIN_2",
		{
			category: ["Pokemon"];
			pokemonId: "GRUBBIN";
			regionId: 6;
			releaseDate: 20230923;
		}
	>
>;
export type StickerMetadataGrubbin3 = S<
	StickerMetadata<
		"STICKER_GRUBBIN_3",
		{
			category: ["Pokemon"];
			pokemonId: "GRUBBIN";
			regionId: 6;
			releaseDate: 20230923;
		}
	>
>;
export type StickerMetadataGrubbin4 = S<
	StickerMetadata<
		"STICKER_GRUBBIN_4",
		{
			category: ["Pokemon"];
			pokemonId: "GRUBBIN";
			regionId: 6;
			releaseDate: 20230923;
		}
	>
>;
export type StickerMetadataHalloween2022Gengar = S<
	StickerMetadata<
		"STICKER_HALLOWEEN2022_GENGAR",
		{
			category: ["Pokemon"];
			pokemonId: "GENGAR";
			releaseDate: 20221020;
		}
	>
>;
export type StickerMetadataHalloween2022Pumpkaboo = S<
	StickerMetadata<
		"STICKER_HALLOWEEN2022_PUMPKABOO",
		{
			category: ["Pokemon"];
			pokemonId: "PUMPKABOO";
			regionId: 5;
			releaseDate: 20221020;
		}
	>
>;
export type StickerMetadataHalloween2022Vulpix = S<
	StickerMetadata<
		"STICKER_HALLOWEEN2022_VULPIX",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			releaseDate: 20221020;
		}
	>
>;
export type StickerMetadataHalloween2025Noibat = S<
	StickerMetadata<
		"STICKER_HALLOWEEN2025_NOIBAT",
		{
			category: ["Pokemon"];
			pokemonId: "NOIBAT";
			regionId: 5;
			releaseDate: 20251021;
		}
	>
>;
export type StickerMetadataHalloween2025Teddiursa = S<
	StickerMetadata<
		"STICKER_HALLOWEEN2025_TEDDIURSA",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 1;
			releaseDate: 20251021;
		}
	>
>;
export type StickerMetadataHalloween21Fuwaraid = S<
	StickerMetadata<
		"STICKER_HALLOWEEN21_FUWARAID",
		{
			category: ["Pokemon"];
			pokemonId: "DRIFBLIM";
			regionId: 3;
			releaseDate: 20211015;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_fuwaraid.png";
		}
	>
>;
export type StickerMetadataHalloween21Ghostpika = S<
	StickerMetadata<
		"STICKER_HALLOWEEN21_GHOSTPIKA",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20211015;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_ghostpika.png";
		}
	>
>;
export type StickerMetadataHalloween21Pikachu = S<
	StickerMetadata<
		"STICKER_HALLOWEEN21_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20211015;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_pikachu.png";
		}
	>
>;
export type StickerMetadataHalloween21Pochama = S<
	StickerMetadata<
		"STICKER_HALLOWEEN21_POCHAMA",
		{
			category: ["Pokemon"];
			pokemonId: "PIPLUP";
			regionId: 3;
			releaseDate: 20211015;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_halloween21_pochama.png";
		}
	>
>;
export type StickerMetadataHalloween23Gengar = S<
	StickerMetadata<
		"STICKER_HALLOWEEN23_GENGAR",
		{
			category: ["Pokemon"];
			pokemonId: "GENGAR";
			releaseDate: 20231031;
		}
	>
>;
export type StickerMetadataHalloween23Greavard = S<
	StickerMetadata<
		"STICKER_HALLOWEEN23_GREAVARD",
		{
			category: ["Pokemon"];
			pokemonId: "GREAVARD";
			regionId: 1001;
			releaseDate: 20231031;
		}
	>
>;
export type StickerMetadataHalloween23Misdreavus = S<
	StickerMetadata<
		"STICKER_HALLOWEEN23_MISDREAVUS",
		{
			category: ["Pokemon"];
			pokemonId: "MISDREAVUS";
			regionId: 2000;
			releaseDate: 20231031;
		}
	>
>;
export type StickerMetadataHalloween23Phantump = S<
	StickerMetadata<
		"STICKER_HALLOWEEN23_PHANTUMP",
		{
			category: ["Pokemon"];
			pokemonId: "PHANTUMP";
			regionId: 5;
			releaseDate: 20231031;
		}
	>
>;
export type StickerMetadataHalloween24Froakie = S<
	StickerMetadata<
		"STICKER_HALLOWEEN24_FROAKIE",
		{
			category: ["Pokemon"];
			pokemonId: "FROAKIE";
			regionId: 5;
			releaseDate: 20241009;
		}
	>
>;
export type StickerMetadataHalloween24Rowlet = S<
	StickerMetadata<
		"STICKER_HALLOWEEN24_ROWLET",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 6;
			releaseDate: 20241009;
		}
	>
>;
export type StickerMetadataHalloweenBulb = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_BULB",
		{
			category: ["Pokemon"];
			pokemonId: "BULBASAUR";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Bulb.png";
		}
	>
>;
export type StickerMetadataHalloweenCharm = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_CHARM",
		{
			category: ["Pokemon"];
			pokemonId: "CHARMANDER";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Charm.png";
		}
	>
>;
export type StickerMetadataHalloweenGengarmd = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_GENGARMD",
		{
			category: ["Pokemon"];
			pokemonId: "GENGAR";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_GengarMD.png";
		}
	>
>;
export type StickerMetadataHalloweenPika = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_PIKA",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Pika.png";
		}
	>
>;
export type StickerMetadataHalloweenSableyemd = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_SABLEYEMD",
		{
			category: ["Pokemon"];
			pokemonId: "SABLEYE";
			regionId: 2;
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_SableyeMD.png";
		}
	>
>;
export type StickerMetadataHalloweenSqu = S<
	StickerMetadata<
		"STICKER_HALLOWEEN_SQU",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_Halloween_Squ.png";
		}
	>
>;
export type StickerMetadataHaruCherrim = S<
	StickerMetadata<
		"STICKER_HARU_CHERRIM",
		{
			category: ["Pokemon"];
			pokemonId: "CHERRIM";
			regionId: 3;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHaruDredearpika = S<
	StickerMetadata<
		"STICKER_HARU_DREDEARPIKA",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHaruKireihana = S<
	StickerMetadata<
		"STICKER_HARU_KIREIHANA",
		{
			category: ["Pokemon"];
			pokemonId: "BELLOSSOM";
			regionId: 1;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHaruLalantes = S<
	StickerMetadata<
		"STICKER_HARU_LALANTES",
		{
			category: ["Pokemon"];
			pokemonId: "LURANTIS";
			regionId: 6;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHaruMebukishikijik = S<
	StickerMetadata<
		"STICKER_HARU_MEBUKISHIKIJIK",
		{
			category: ["Pokemon"];
			pokemonId: "DEERLING";
			regionId: 2000;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHaruMitsuhoney = S<
	StickerMetadata<
		"STICKER_HARU_MITSUHONEY",
		{
			category: ["Pokemon"];
			pokemonId: "COMBEE";
			regionId: 3;
			releaseDate: 20230221;
		}
	>
>;
export type StickerMetadataHawlucha01 = S<
	StickerMetadata<
		"STICKER_HAWLUCHA_01",
		{
			category: ["Pokemon"];
			pokemonId: "HAWLUCHA";
			regionId: 5;
			releaseDate: 20250919;
		}
	>
>;
export type StickerMetadataHisuidiscoArcanine = S<
	StickerMetadata<
		"STICKER_HISUIDISCO_ARCANINE",
		{
			category: ["Pokemon"];
			pokemonId: "ARCANINE";
			regionId: 1000;
			releaseDate: 20220728;
		}
	>
>;
export type StickerMetadataHisuidiscoBraviary = S<
	StickerMetadata<
		"STICKER_HISUIDISCO_BRAVIARY",
		{
			category: ["Pokemon"];
			pokemonId: "BRAVIARY";
			regionId: 1000;
			releaseDate: 20220728;
		}
	>
>;
export type StickerMetadataHisuidiscoGrowlithe = S<
	StickerMetadata<
		"STICKER_HISUIDISCO_GROWLITHE",
		{
			category: ["Pokemon"];
			pokemonId: "GROWLITHE";
			regionId: 1000;
			releaseDate: 20220728;
		}
	>
>;
export type StickerMetadataHolidayevent211 = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT21_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20211216;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_1.png";
		}
	>
>;
export type StickerMetadataHolidayevent212 = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT21_2",
		{
			category: ["Pokemon"];
			pokemonId: "VANILLITE";
			regionId: 4;
			releaseDate: 20211216;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_2.png";
		}
	>
>;
export type StickerMetadataHolidayevent213 = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT21_3",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20211216;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_3.png";
		}
	>
>;
export type StickerMetadataHolidayevent214 = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT21_4",
		{
			category: ["Pokemon"];
			pokemonId: "GLACEON";
			regionId: 3;
			releaseDate: 20211216;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_holidayEvent21_4.png";
		}
	>
>;
export type StickerMetadataHolidayevent22Cubchoo = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT22_CUBCHOO",
		{
			category: ["Pokemon"];
			pokemonId: "CUBCHOO";
			regionId: 4;
			releaseDate: 20221215;
		}
	>
>;
export type StickerMetadataHolidayevent22Scatterbug = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT22_SCATTERBUG",
		{
			category: ["Pokemon"];
			pokemonId: "SCATTERBUG";
			regionId: 5;
			releaseDate: 20221215;
		}
	>
>;
export type StickerMetadataHolidayevent22Snowpika = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT22_SNOWPIKA",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20221215;
		}
	>
>;
export type StickerMetadataHolidayevent22Vulpix = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT22_VULPIX",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			regionId: 2000;
			releaseDate: 20221215;
		}
	>
>;
export type StickerMetadataHolidayevent23Cetoddle = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT23_CETODDLE",
		{
			category: ["Pokemon"];
			pokemonId: "CETODDLE";
			regionId: 1001;
			releaseDate: 20231207;
		}
	>
>;
export type StickerMetadataHolidayevent23Cryogonal = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT23_CRYOGONAL",
		{
			category: ["Pokemon"];
			pokemonId: "CRYOGONAL";
			regionId: 4;
			releaseDate: 20231207;
		}
	>
>;
export type StickerMetadataHolidayevent23Psyduck = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT23_PSYDUCK",
		{
			category: ["Pokemon"];
			pokemonId: "PSYDUCK";
			releaseDate: 20231207;
		}
	>
>;
export type StickerMetadataHolidayevent23Seel = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT23_SEEL",
		{
			category: ["Pokemon"];
			pokemonId: "SEEL";
			releaseDate: 20231207;
		}
	>
>;
export type StickerMetadataHolidayevent23Vanillish = S<
	StickerMetadata<
		"STICKER_HOLIDAYEVENT23_VANILLISH",
		{
			category: ["Pokemon"];
			pokemonId: "VANILLISH";
			regionId: 4;
			releaseDate: 20231207;
		}
	>
>;
export type StickerMetadataHolographicChancey = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_CHANCEY",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHolographicCharmeleon = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_CHARMELEON",
		{
			category: ["Pokemon"];
			pokemonId: "CHARMELEON";
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHolographicIvysaur = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_IVYSAUR",
		{
			category: ["Pokemon"];
			pokemonId: "IVYSAUR";
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHolographicMeltan = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_MELTAN",
		{
			category: ["Pokemon"];
			pokemonId: "MELTAN";
			regionId: 6;
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHolographicPikachu = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHolographicWartortle = S<
	StickerMetadata<
		"STICKER_HOLOGRAPHIC_WARTORTLE",
		{
			category: ["Pokemon"];
			pokemonId: "WARTORTLE";
			releaseDate: 20220616;
		}
	>
>;
export type StickerMetadataHoppip1 = S<
	StickerMetadata<
		"STICKER_HOPPIP_1",
		{
			category: ["Pokemon"];
			pokemonId: "HOPPIP";
			regionId: 1;
			releaseDate: 20220212;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_1.png";
		}
	>
>;
export type StickerMetadataHoppip2 = S<
	StickerMetadata<
		"STICKER_HOPPIP_2",
		{
			category: ["Pokemon"];
			pokemonId: "HOPPIP";
			regionId: 1;
			releaseDate: 20220212;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_2.png";
		}
	>
>;
export type StickerMetadataHoppip3 = S<
	StickerMetadata<
		"STICKER_HOPPIP_3",
		{
			category: ["Pokemon"];
			pokemonId: "HOPPIP";
			regionId: 1;
			releaseDate: 20220212;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_3.png";
		}
	>
>;
export type StickerMetadataHoppip4 = S<
	StickerMetadata<
		"STICKER_HOPPIP_4",
		{
			category: ["Pokemon"];
			pokemonId: "HOPPIP";
			regionId: 1;
			releaseDate: 20220212;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_hoppip_4.png";
		}
	>
>;
export type StickerMetadataIndonesiajourney1 = S<
	StickerMetadata<
		"STICKER_INDONESIAJOURNEY_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20240302;
		}
	>
>;
export type StickerMetadataIndonesiajourney2 = S<
	StickerMetadata<
		"STICKER_INDONESIAJOURNEY_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20240302;
		}
	>
>;
export type StickerMetadataIplpartnership1 = S<
	StickerMetadata<
		"STICKER_IPLPARTNERSHIP_1",
		{
			category: ["Misc"];
			releaseDate: 20250305;
		}
	>
>;
export type StickerMetadataIplpartnership2 = S<
	StickerMetadata<
		"STICKER_IPLPARTNERSHIP_2",
		{
			category: ["Misc"];
			releaseDate: 20250305;
		}
	>
>;
export type StickerMetadataJunecd2023Axew1 = S<
	StickerMetadata<
		"STICKER_JUNECD2023_AXEW_1",
		{
			category: ["Pokemon"];
			pokemonId: "AXEW";
			regionId: 4;
			releaseDate: 20230610;
		}
	>
>;
export type StickerMetadataJunecd2023Axew2 = S<
	StickerMetadata<
		"STICKER_JUNECD2023_AXEW_2",
		{
			category: ["Pokemon"];
			pokemonId: "AXEW";
			regionId: 4;
			releaseDate: 20230610;
		}
	>
>;
export type StickerMetadataJunecd2023Axew3 = S<
	StickerMetadata<
		"STICKER_JUNECD2023_AXEW_3",
		{
			category: ["Pokemon"];
			pokemonId: "AXEW";
			regionId: 4;
			releaseDate: 20230610;
		}
	>
>;
export type StickerMetadataJunecd2023Axew4 = S<
	StickerMetadata<
		"STICKER_JUNECD2023_AXEW_4",
		{
			category: ["Pokemon"];
			pokemonId: "AXEW";
			regionId: 4;
			releaseDate: 20230610;
		}
	>
>;
export type StickerMetadataKoreatown1 = S<
	StickerMetadata<
		"STICKER_KOREATOWN_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20240412;
		}
	>
>;
export type StickerMetadataKoreatown2 = S<
	StickerMetadata<
		"STICKER_KOREATOWN_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			regionId: 2000;
			releaseDate: 20240412;
		}
	>
>;
export type StickerMetadataKoreatown3 = S<
	StickerMetadata<
		"STICKER_KOREATOWN_3",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20240412;
		}
	>
>;
export type StickerMetadataKrDitto = S<
	StickerMetadata<
		"STICKER_KR_DITTO",
		{
			category: ["Pokemon"];
			pokemonId: "DITTO";
			releaseDate: 20250428;
		}
	>
>;
export type StickerMetadataKurtasaree1 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataKurtasaree2 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataKurtasaree3 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_3",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataKurtasaree4 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_4",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataKurtasaree5 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_5",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataKurtasaree6 = S<
	StickerMetadata<
		"STICKER_KURTASAREE_6",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataLentillaunchCamera = S<
	StickerMetadata<
		"STICKER_LENTILLAUNCH_CAMERA",
		{
			category: ["Misc"];
			releaseDate: 20210429;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_lentilLaunch_camera.png";
		}
	>
>;
export type StickerMetadataLittencd1 = S<
	StickerMetadata<
		"STICKER_LITTENCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "LITTEN";
			regionId: 6;
		}
	>
>;
export type StickerMetadataLittencd2 = S<
	StickerMetadata<
		"STICKER_LITTENCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "LITTEN";
			regionId: 6;
		}
	>
>;
export type StickerMetadataLittencd3 = S<
	StickerMetadata<
		"STICKER_LITTENCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "LITTEN";
			regionId: 6;
		}
	>
>;
export type StickerMetadataLittencd4 = S<
	StickerMetadata<
		"STICKER_LITTENCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "LITTEN";
			regionId: 6;
		}
	>
>;
export type StickerMetadataLitwick1 = S<
	StickerMetadata<
		"STICKER_LITWICK_1",
		{
			category: ["Pokemon"];
			pokemonId: "LITWICK";
			regionId: 4;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataLitwick2 = S<
	StickerMetadata<
		"STICKER_LITWICK_2",
		{
			category: ["Pokemon"];
			pokemonId: "LITWICK";
			regionId: 4;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataLitwick3 = S<
	StickerMetadata<
		"STICKER_LITWICK_3",
		{
			category: ["Pokemon"];
			pokemonId: "LITWICK";
			regionId: 4;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataLitwick4 = S<
	StickerMetadata<
		"STICKER_LITWICK_4",
		{
			category: ["Pokemon"];
			pokemonId: "LITWICK";
			regionId: 4;
			releaseDate: 20221014;
		}
	>
>;
export type StickerMetadataLuvdisc = S<
	StickerMetadata<
		"STICKER_LUVDISC",
		{
			category: ["Pokemon"];
			pokemonId: "LUVDISC";
			regionId: 2;
			releaseDate: 20220210;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_luvdisc.png";
		}
	>
>;
export type StickerMetadataMankey1 = S<
	StickerMetadata<
		"STICKER_MANKEY_1",
		{
			category: ["Pokemon"];
			pokemonId: "MANKEY";
		}
	>
>;
export type StickerMetadataMankey2 = S<
	StickerMetadata<
		"STICKER_MANKEY_2",
		{
			category: ["Pokemon"];
			pokemonId: "MANKEY";
		}
	>
>;
export type StickerMetadataMankey3 = S<
	StickerMetadata<
		"STICKER_MANKEY_3",
		{
			category: ["Pokemon"];
			pokemonId: "MANKEY";
		}
	>
>;
export type StickerMetadataMankey4 = S<
	StickerMetadata<
		"STICKER_MANKEY_4",
		{
			category: ["Pokemon"];
			pokemonId: "ANNIHILAPE";
			regionId: 1001;
		}
	>
>;
export type StickerMetadataMegaevolutionParis1 = S<
	StickerMetadata<
		"STICKER_MEGAEVOLUTION_PARIS_1",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20250912;
		}
	>
>;
export type StickerMetadataMegaevolutionParis2 = S<
	StickerMetadata<
		"STICKER_MEGAEVOLUTION_PARIS_2",
		{
			category: ["Pokemon"];
			pokemonId: "CHARIZARD";
			releaseDate: 20250912;
		}
	>
>;
export type StickerMetadataMegaevolutionParis3 = S<
	StickerMetadata<
		"STICKER_MEGAEVOLUTION_PARIS_3",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20250912;
		}
	>
>;
export type StickerMetadataMewtwo = S<
	StickerMetadata<
		"STICKER_MEWTWO",
		{
			category: ["Pokemon"];
			pokemonId: "MEW";
			releaseDate: 20210220;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_mewtwo.png";
		}
	>
>;
export type StickerMetadataMewLaugh = S<
	StickerMetadata<
		"STICKER_MEW_LAUGH",
		{
			category: ["Pokemon"];
			pokemonId: "MEWTWO";
			releaseDate: 20210220;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_mew_laugh.png";
		}
	>
>;
export type StickerMetadataMukkuruCd1 = S<
	StickerMetadata<
		"STICKER_MUKKURU_CD_1",
		{
			category: ["Pokemon"];
			pokemonId: "STARLY";
			regionId: 3;
			releaseDate: 20220717;
		}
	>
>;
export type StickerMetadataMukkuruCd2 = S<
	StickerMetadata<
		"STICKER_MUKKURU_CD_2",
		{
			category: ["Pokemon"];
			pokemonId: "STARLY";
			regionId: 3;
			releaseDate: 20220717;
		}
	>
>;
export type StickerMetadataMukkuruCd3 = S<
	StickerMetadata<
		"STICKER_MUKKURU_CD_3",
		{
			category: ["Pokemon"];
			pokemonId: "STARLY";
			regionId: 3;
			releaseDate: 20220717;
		}
	>
>;
export type StickerMetadataMukkuruCd4 = S<
	StickerMetadata<
		"STICKER_MUKKURU_CD_4",
		{
			category: ["Pokemon"];
			pokemonId: "STARLY";
			regionId: 3;
			releaseDate: 20220717;
		}
	>
>;
export type StickerMetadataNagano06312 = S<
	StickerMetadata<
		"STICKER_NAGANO_06_312",
		{
			category: ["Pokemon", "24_7"];
			regionId: 2000;
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nagano_06_312.png";
		}
	>
>;
export type StickerMetadataNagano08 = S<
	StickerMetadata<
		"STICKER_NAGANO_08",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			regionId: 6;
			releaseDate: 20201222;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_08.png";
		}
	>
>;
export type StickerMetadataNagano11 = S<
	StickerMetadata<
		"STICKER_NAGANO_11",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_11.png";
		}
	>
>;
export type StickerMetadataNagano15 = S<
	StickerMetadata<
		"STICKER_NAGANO_15",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20210405;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_nagano_15.png";
		}
	>
>;
export type StickerMetadataNagano15312 = S<
	StickerMetadata<
		"STICKER_NAGANO_15_312",
		{
			category: ["Pokemon", "24_7"];
			pokemonId: "PIKACHU";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nagano_15_312.png";
		}
	>
>;
export type StickerMetadataNaganoBath = S<
	StickerMetadata<
		"STICKER_NAGANO_BATH",
		{
			category: ["Pokemon"];
			pokemonId: "CROAGUNK";
			regionId: 3;
			releaseDate: 20201222;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_nagano_bath.png";
		}
	>
>;
export type StickerMetadataNaganoMarill = S<
	StickerMetadata<
		"STICKER_NAGANO_MARILL",
		{
			category: ["Pokemon", "24_7"];
			pokemonId: "MARILL";
			regionId: 1;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nagano_marill.png";
		}
	>
>;
export type StickerMetadataNaganoYadon = S<
	StickerMetadata<
		"STICKER_NAGANO_YADON",
		{
			category: ["Pokemon", "24_7"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nagano_yadon.png";
		}
	>
>;
export type StickerMetadataNewpokemon21 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON2_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20210214;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon2_1.png";
		}
	>
>;
export type StickerMetadataNewpokemon215 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON2_15",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_newPokemon2_15.png";
		}
	>
>;
export type StickerMetadataNewpokemon233 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON2_33",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20210214;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon2_33.png";
		}
	>
>;
export type StickerMetadataNewpokemon04 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON_04",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_newPokemon_04.png";
		}
	>
>;
export type StickerMetadataNewpokemon20 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON_20",
		{
			category: ["Pokemon"];
			pokemonId: "TOGEPI";
			regionId: 1;
			releaseDate: 20210405;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon_20.png";
		}
	>
>;
export type StickerMetadataNewpokemon37 = S<
	StickerMetadata<
		"STICKER_NEWPOKEMON_37",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20210608;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newPokemon_37.png";
		}
	>
>;
export type StickerMetadataNewteamrascal = S<
	StickerMetadata<
		"STICKER_NEWTEAMRASCAL",
		{
			category: ["Pokemon"];
			pokemonId: "GRIMER";
			releaseDate: 20210420;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newTeamRascal.png";
		}
	>
>;
export type StickerMetadataNewteamrascalpikachu26 = S<
	StickerMetadata<
		"STICKER_NEWTEAMRASCALPIKACHU_26",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20210608;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newTeamRascalPikachu_26.png";
		}
	>
>;
export type StickerMetadataNewyears221 = S<
	StickerMetadata<
		"STICKER_NEWYEARS22_1",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20211230;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_1.png";
		}
	>
>;
export type StickerMetadataNewyears222 = S<
	StickerMetadata<
		"STICKER_NEWYEARS22_2",
		{
			category: ["Pokemon"];
			pokemonId: "HOOTHOOT";
			regionId: 1;
			releaseDate: 20211230;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_2.png";
		}
	>
>;
export type StickerMetadataNewyears223 = S<
	StickerMetadata<
		"STICKER_NEWYEARS22_3",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20211230;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_3.png";
		}
	>
>;
export type StickerMetadataNewyears224 = S<
	StickerMetadata<
		"STICKER_NEWYEARS22_4",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20211230;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_newYears22_4.png";
		}
	>
>;
export type StickerMetadataNewyears231 = S<
	StickerMetadata<
		"STICKER_NEWYEARS23_1",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "PIKACHU";
			releaseDate: 20230101;
		}
	>
>;
export type StickerMetadataNewyears232 = S<
	StickerMetadata<
		"STICKER_NEWYEARS23_2",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "WURMPLE";
			regionId: 2;
			releaseDate: 20230101;
		}
	>
>;
export type StickerMetadataNewyears233 = S<
	StickerMetadata<
		"STICKER_NEWYEARS23_3",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "NOCTOWL";
			regionId: 1;
			releaseDate: 20230101;
		}
	>
>;
export type StickerMetadataNewyears234 = S<
	StickerMetadata<
		"STICKER_NEWYEARS23_4",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "HOOTHOOT";
			regionId: 1;
			releaseDate: 20230101;
		}
	>
>;
export type StickerMetadataNiaLogo = S<
	StickerMetadata<
		"STICKER_NIA_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nia_logo.png";
		}
	>
>;
export type StickerMetadataNigiyaka080508312 = S<
	StickerMetadata<
		"STICKER_NIGIYAKA_08_0508_312",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "PIKACHU";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nigiyaka_08_0508_312.png";
		}
	>
>;
export type StickerMetadataNigiyaka160508312 = S<
	StickerMetadata<
		"STICKER_NIGIYAKA_16_0508_312",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "PIKACHU";
			releaseDate: 20200611;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nigiyaka_16_0508_312.png";
		}
	>
>;
export type StickerMetadataNoibatCd1 = S<
	StickerMetadata<
		"STICKER_NOIBAT_CD_1",
		{
			category: ["Pokemon"];
			pokemonId: "NOIBAT";
			regionId: 5;
			releaseDate: 20230201;
		}
	>
>;
export type StickerMetadataNoibatCd2 = S<
	StickerMetadata<
		"STICKER_NOIBAT_CD_2",
		{
			category: ["Pokemon"];
			pokemonId: "NOIBAT";
			regionId: 5;
			releaseDate: 20230201;
		}
	>
>;
export type StickerMetadataNoibatCd3 = S<
	StickerMetadata<
		"STICKER_NOIBAT_CD_3",
		{
			category: ["Pokemon"];
			pokemonId: "NOIBAT";
			regionId: 5;
			releaseDate: 20230201;
		}
	>
>;
export type StickerMetadataNoibatCd4 = S<
	StickerMetadata<
		"STICKER_NOIBAT_CD_4",
		{
			category: ["Pokemon"];
			pokemonId: "NOIBAT";
			regionId: 5;
			releaseDate: 20230201;
		}
	>
>;
export type StickerMetadataNyarth38 = S<
	StickerMetadata<
		"STICKER_NYARTH_38",
		{
			category: ["Pokemon"];
			pokemonId: "MEOWTH";
			regionId: 6;
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_nyarth_38.png";
		}
	>
>;
export type StickerMetadataObservatory01 = S<
	StickerMetadata<
		"STICKER_OBSERVATORY_01",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20251101;
		}
	>
>;
export type StickerMetadataObservatory02 = S<
	StickerMetadata<
		"STICKER_OBSERVATORY_02",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20251101;
		}
	>
>;
export type StickerMetadataPapelpicadotgr1 = S<
	StickerMetadata<
		"STICKER_PAPELPICADOTGR_1",
		{
			category: ["Pokemon"];
			pokemonId: "ARTICUNO";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataPapelpicadotgr2 = S<
	StickerMetadata<
		"STICKER_PAPELPICADOTGR_2",
		{
			category: ["Pokemon"];
			pokemonId: "ZAPDOS";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataPapelpicadotgr3 = S<
	StickerMetadata<
		"STICKER_PAPELPICADOTGR_3",
		{
			category: ["Pokemon"];
			pokemonId: "MOLTRES";
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataPapelpicadotgr4 = S<
	StickerMetadata<
		"STICKER_PAPELPICADOTGR_4",
		{
			category: ["Misc"];
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataPapelpicadotgr5 = S<
	StickerMetadata<
		"STICKER_PAPELPICADOTGR_5",
		{
			category: ["Misc"];
			releaseDate: 20241015;
		}
	>
>;
export type StickerMetadataPgofest2021Galarianzigzagoon = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_GALARIANZIGZAGOON",
		{
			category: ["Pokemon"];
			pokemonId: "ZIGZAGOON";
			regionId: 7;
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_galarianZigzagoon.png";
		}
	>
>;
export type StickerMetadataPgofest2021Logo = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_logo.png";
		}
	>
>;
export type StickerMetadataPgofest2021Meloetta1 = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_MELOETTA_1",
		{
			category: ["Pokemon"];
			pokemonId: "MELOETTA";
			regionId: 4;
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_meloetta_1.png";
		}
	>
>;
export type StickerMetadataPgofest2021Meloetta2 = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_MELOETTA_2",
		{
			category: ["Pokemon"];
			pokemonId: "MELOETTA";
			regionId: 4;
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_meloetta_2.png";
		}
	>
>;
export type StickerMetadataPgofest2021Ponyta = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_PONYTA",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			regionId: 7;
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_ponyta.png";
		}
	>
>;
export type StickerMetadataPgofest2021Shirticon = S<
	StickerMetadata<
		"STICKER_PGOFEST2021_SHIRTICON",
		{
			category: ["Misc"];
			releaseDate: 20210727;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pgoFest2021_shirtIcon.png";
		}
	>
>;
export type StickerMetadataPgofest2022Denjyumoku = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_DENJYUMOKU",
		{
			category: ["Pokemon"];
			pokemonId: "XURKITREE";
			regionId: 6;
			releaseDate: 20220805;
		}
	>
>;
export type StickerMetadataPgofest2022Groudon = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_GROUDON",
		{
			category: ["Pokemon"];
			pokemonId: "GROUDON";
			regionId: 2;
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Kibago = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_KIBAGO",
		{
			category: ["Pokemon"];
			pokemonId: "AXEW";
			regionId: 4;
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Kyogre = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_KYOGRE",
		{
			category: ["Pokemon"];
			pokemonId: "KYOGRE";
			regionId: 2;
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Massivoon = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_MASSIVOON",
		{
			category: ["Pokemon"];
			pokemonId: "KOMMO_O";
			regionId: 6;
			releaseDate: 20220722;
		}
	>
>;
export type StickerMetadataPgofest2022Pheroache = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_PHEROACHE",
		{
			category: ["Pokemon"];
			pokemonId: "PHEROMOSA";
			regionId: 6;
			releaseDate: 20220701;
		}
	>
>;
export type StickerMetadataPgofest2022Pikachu = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Pochama = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_POCHAMA",
		{
			category: ["Pokemon"];
			pokemonId: "PIPLUP";
			regionId: 3;
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Shaymin = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_SHAYMIN",
		{
			category: ["Pokemon"];
			pokemonId: "SHAYMIN";
			regionId: 3;
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgofest2022Shayminsky = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_SHAYMINSKY",
		{
			category: ["Pokemon"];
			pokemonId: "SHAYMIN";
			regionId: 3;
			releaseDate: 20220701;
		}
	>
>;
export type StickerMetadataPgofest2022Uturoid = S<
	StickerMetadata<
		"STICKER_PGOFEST2022_UTUROID",
		{
			category: ["Pokemon"];
			pokemonId: "NIHILEGO";
			regionId: 6;
			releaseDate: 20220805;
		}
	>
>;
export type StickerMetadataPgoFest2017 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2017",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2017.png";
		}
	>
>;
export type StickerMetadataPgoFest2018 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2018",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2018.png";
		}
	>
>;
export type StickerMetadataPgoFest2019 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2019",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2019.png";
		}
	>
>;
export type StickerMetadataPgoFest2020 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2020",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2020.png";
		}
	>
>;
export type StickerMetadataPgoFest2020Logo = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2020_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_2020_logo.png";
		}
	>
>;
export type StickerMetadataPgoFest2022 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2022",
		{
			category: ["Misc"];
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgoFest2022Logo = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2022_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataPgoFest2023 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023",
		{
			category: ["Misc"];
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20231 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_1",
		{
			category: ["Misc"];
			regionId: 5;
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20232 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_2",
		{
			category: ["Misc"];
			regionId: 2;
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20233 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_3",
		{
			category: ["Misc"];
			regionId: 5;
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20234 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_4",
		{
			category: ["Misc"];
			regionId: 2;
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20235 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_5",
		{
			category: ["Misc"];
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest20236 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_6",
		{
			category: ["Misc"];
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest2023Logo = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2023_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20230801;
		}
	>
>;
export type StickerMetadataPgoFest2024 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024",
		{
			category: ["Misc"];
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20241 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "SOLGALEO";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20242 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "LUNALA";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20243 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "MARSHADOW";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20244 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "NECROZMA";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20245 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "NECROZMA";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest20246 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_6",
		{
			category: ["Pokemon"];
			pokemonId: "NECROZMA";
			regionId: 6;
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest2024Logo = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2024_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20240429;
		}
	>
>;
export type StickerMetadataPgoFest2025 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2025",
		{
			category: ["Pokemon"];
			pokemonId: "ZACIAN";
			regionId: 7;
			releaseDate: 20250529;
		}
	>
>;
export type StickerMetadataPgoFest20251 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2025_1",
		{
			category: ["Pokemon"];
			pokemonId: "VOLCANION";
			regionId: 5;
			releaseDate: 20250529;
		}
	>
>;
export type StickerMetadataPgoFest20252 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2025_2",
		{
			category: ["Pokemon"];
			pokemonId: "ZAMAZENTA";
			regionId: 7;
			releaseDate: 20250529;
		}
	>
>;
export type StickerMetadataPgoFest20253 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2025_3",
		{
			category: ["Pokemon"];
			pokemonId: "ZACIAN";
			regionId: 7;
			releaseDate: 20250529;
		}
	>
>;
export type StickerMetadataPgoFest2025Logo = S<
	StickerMetadata<
		"STICKER_PGO_FEST_2025_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20250529;
		}
	>
>;
export type StickerMetadataPgoFestVictini05 = S<
	StickerMetadata<
		"STICKER_PGO_FEST_VICTINI_05",
		{
			category: ["Pokemon"];
			pokemonId: "VICTINI";
			regionId: 4;
			releaseDate: 20200625;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_pgo_fest_victini_05.png";
		}
	>
>;
export type StickerMetadataPgoTour2024 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024",
		{
			category: ["Misc"];
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour20241 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "DIALGA";
			regionId: 1000;
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour20242 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "PALKIA";
			regionId: 1000;
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour20243 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "GIRATINA";
			regionId: 3;
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour20244 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "TURTWIG";
			regionId: 2000;
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour20245 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 2000;
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour2024Logo = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2024_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20240216;
		}
	>
>;
export type StickerMetadataPgoTour2026 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2026",
		{
			category: ["Misc"];
			releaseDate: 20260220;
		}
	>
>;
export type StickerMetadataPgoTour20261 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2026_1",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20260220;
		}
	>
>;
export type StickerMetadataPgoTour20262 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2026_2",
		{
			category: ["Pokemon"];
			pokemonId: "XERNEAS";
			regionId: 5;
			releaseDate: 20260220;
		}
	>
>;
export type StickerMetadataPgoTour20263 = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2026_3",
		{
			category: ["Pokemon"];
			pokemonId: "YVELTAL";
			regionId: 5;
			releaseDate: 20260220;
		}
	>
>;
export type StickerMetadataPgoTour2026Logo = S<
	StickerMetadata<
		"STICKER_PGO_TOUR_2026_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20260220;
		}
	>
>;
export type StickerMetadataPgoWildarea2024 = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024",
		{
			category: ["Misc"];
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPgoWildarea20241 = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "TOXEL";
			regionId: 7;
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPgoWildarea20242 = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "TOXTRICITY";
			regionId: 7;
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPgoWildarea20243 = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "TOXTRICITY";
			regionId: 7;
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPgoWildarea20244 = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "TOXTRICITY";
			regionId: 7;
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPgoWildarea2024Logo = S<
	StickerMetadata<
		"STICKER_PGO_WILDAREA_2024_LOGO",
		{
			category: ["Misc"];
			releaseDate: 20241010;
		}
	>
>;
export type StickerMetadataPikaairadventure1 = S<
	StickerMetadata<
		"STICKER_PIKAAIRADVENTURE_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220503;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_1.png";
		}
	>
>;
export type StickerMetadataPikaairadventure2 = S<
	StickerMetadata<
		"STICKER_PIKAAIRADVENTURE_2",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220503;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_2.png";
		}
	>
>;
export type StickerMetadataPikaairadventure3 = S<
	StickerMetadata<
		"STICKER_PIKAAIRADVENTURE_3",
		{
			category: ["Pokemon"];
			pokemonId: "CORSOLA";
			regionId: 1;
			releaseDate: 20220503;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pikaairadventure_3.png";
		}
	>
>;
export type StickerMetadataPikaairjejuPikachu = S<
	StickerMetadata<
		"STICKER_PIKAAIRJEJU_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20230721;
		}
	>
>;
export type StickerMetadataPikaairsingaporeLapras = S<
	StickerMetadata<
		"STICKER_PIKAAIRSINGAPORE_LAPRAS",
		{
			category: ["Pokemon"];
			pokemonId: "LAPRAS";
			releaseDate: 20221117;
		}
	>
>;
export type StickerMetadataPikaairsingaporePikachu = S<
	StickerMetadata<
		"STICKER_PIKAAIRSINGAPORE_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20221117;
		}
	>
>;
export type StickerMetadataPikaairtaiwanPikachu = S<
	StickerMetadata<
		"STICKER_PIKAAIRTAIWAN_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20221001;
		}
	>
>;
export type StickerMetadataPikaairtaiwanSnorlax = S<
	StickerMetadata<
		"STICKER_PIKAAIRTAIWAN_SNORLAX",
		{
			category: ["Pokemon"];
			pokemonId: "SNORLAX";
			releaseDate: 20221001;
		}
	>
>;
export type StickerMetadataPikachuJol = S<
	StickerMetadata<
		"STICKER_PIKACHU_JOL",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20201027;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pikachu_JOL.png";
		}
	>
>;
export type StickerMetadataPika14Thankyou = S<
	StickerMetadata<
		"STICKER_PIKA_14_THANKYOU",
		{
			category: ["Pokemon", "Messages"];
			pokemonId: "PIKACHU";
			releaseDate: 20210320;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_pika_14_thankyou.png";
		}
	>
>;
export type StickerMetadataPokemonchatpals204 = S<
	StickerMetadata<
		"STICKER_POKEMONCHATPALS2_04",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pokemonChatPals2_04.png";
		}
	>
>;
export type StickerMetadataPokemonchatpals240 = S<
	StickerMetadata<
		"STICKER_POKEMONCHATPALS2_40",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_pokemonChatPals2_40.png";
		}
	>
>;
export type StickerMetadataPokopiaBulbasaur = S<
	StickerMetadata<
		"STICKER_POKOPIA_BULBASAUR",
		{
			category: ["Pokemon"];
			pokemonId: "BULBASAUR";
			releaseDate: 20260310;
		}
	>
>;
export type StickerMetadataPokopiaPikachu = S<
	StickerMetadata<
		"STICKER_POKOPIA_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20260310;
		}
	>
>;
export type StickerMetadataPokopiaSnorlax = S<
	StickerMetadata<
		"STICKER_POKOPIA_SNORLAX",
		{
			category: ["Pokemon"];
			pokemonId: "SNORLAX";
			releaseDate: 20260310;
		}
	>
>;
export type StickerMetadataPokopiaTangrowth = S<
	StickerMetadata<
		"STICKER_POKOPIA_TANGROWTH",
		{
			category: ["Pokemon"];
			pokemonId: "TANGROWTH";
			regionId: 3;
			releaseDate: 20260310;
		}
	>
>;
export type StickerMetadataPoliwag1 = S<
	StickerMetadata<
		"STICKER_POLIWAG_1",
		{
			category: ["Pokemon"];
			pokemonId: "POLIWAG";
			releaseDate: 20230720;
		}
	>
>;
export type StickerMetadataPoliwag2 = S<
	StickerMetadata<
		"STICKER_POLIWAG_2",
		{
			category: ["Pokemon"];
			pokemonId: "POLIWAG";
			releaseDate: 20230720;
		}
	>
>;
export type StickerMetadataPoliwag3 = S<
	StickerMetadata<
		"STICKER_POLIWAG_3",
		{
			category: ["Pokemon"];
			pokemonId: "POLIWAG";
			releaseDate: 20230720;
		}
	>
>;
export type StickerMetadataPoliwag4 = S<
	StickerMetadata<
		"STICKER_POLIWAG_4",
		{
			category: ["Pokemon"];
			pokemonId: "POLIWAG";
			releaseDate: 20230720;
		}
	>
>;
export type StickerMetadataPonyta1 = S<
	StickerMetadata<
		"STICKER_PONYTA_1",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			releaseDate: 20240828;
		}
	>
>;
export type StickerMetadataPonyta2 = S<
	StickerMetadata<
		"STICKER_PONYTA_2",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			regionId: 7;
			releaseDate: 20240828;
		}
	>
>;
export type StickerMetadataPonyta3 = S<
	StickerMetadata<
		"STICKER_PONYTA_3",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			regionId: 2000;
			releaseDate: 20240828;
		}
	>
>;
export type StickerMetadataPonyta4 = S<
	StickerMetadata<
		"STICKER_PONYTA_4",
		{
			category: ["Pokemon"];
			pokemonId: "PONYTA";
			regionId: 2000;
			releaseDate: 20240828;
		}
	>
>;
export type StickerMetadataPoppliocd1 = S<
	StickerMetadata<
		"STICKER_POPPLIOCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "POPPLIO";
			regionId: 6;
			releaseDate: 20240819;
		}
	>
>;
export type StickerMetadataPoppliocd2 = S<
	StickerMetadata<
		"STICKER_POPPLIOCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "POPPLIO";
			regionId: 6;
			releaseDate: 20240819;
		}
	>
>;
export type StickerMetadataPoppliocd3 = S<
	StickerMetadata<
		"STICKER_POPPLIOCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "POPPLIO";
			regionId: 6;
			releaseDate: 20240819;
		}
	>
>;
export type StickerMetadataPoppliocd4 = S<
	StickerMetadata<
		"STICKER_POPPLIOCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "PRIMARINA";
			regionId: 6;
			releaseDate: 20240819;
		}
	>
>;
export type StickerMetadataProjectguitar04 = S<
	StickerMetadata<
		"STICKER_PROJECTGUITAR_04",
		{
			category: ["Pokemon"];
			pokemonId: "PIPLUP";
			regionId: 3;
			releaseDate: 20211122;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_04.png";
		}
	>
>;
export type StickerMetadataProjectguitar07 = S<
	StickerMetadata<
		"STICKER_PROJECTGUITAR_07",
		{
			category: ["Pokemon"];
			regionId: 1;
			releaseDate: 20211122;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_07.png";
		}
	>
>;
export type StickerMetadataProjectguitar13 = S<
	StickerMetadata<
		"STICKER_PROJECTGUITAR_13",
		{
			category: ["Pokemon"];
			pokemonId: "CASCOON";
			regionId: 2;
			releaseDate: 20211122;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_13.png";
		}
	>
>;
export type StickerMetadataProjectguitar25 = S<
	StickerMetadata<
		"STICKER_PROJECTGUITAR_25",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20211122;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_25.png";
		}
	>
>;
export type StickerMetadataProjectguitarFroakie = S<
	StickerMetadata<
		"STICKER_PROJECTGUITAR_FROAKIE",
		{
			category: ["Pokemon"];
			pokemonId: "FROAKIE";
			regionId: 5;
			releaseDate: 20211122;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_projectGuitar_froakie.png";
		}
	>
>;
export type StickerMetadataPsychicspec21Inkay = S<
	StickerMetadata<
		"STICKER_PSYCHICSPEC21_INKAY",
		{
			category: ["Pokemon"];
			pokemonId: "INKAY";
			regionId: 5;
			releaseDate: 20210908;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_psychicSpec21_inkay.png";
		}
	>
>;
export type StickerMetadataPsychicspec21Inkay2 = S<
	StickerMetadata<
		"STICKER_PSYCHICSPEC21_INKAY2",
		{
			category: ["Pokemon"];
			pokemonId: "INKAY";
			regionId: 5;
			releaseDate: 20210908;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_psychicSpec21_inkay2.png";
		}
	>
>;
export type StickerMetadataRoggenrolaCd1 = S<
	StickerMetadata<
		"STICKER_ROGGENROLA_CD_1",
		{
			category: ["Pokemon"];
			pokemonId: "ROGGENROLA";
			regionId: 4;
			releaseDate: 20220914;
		}
	>
>;
export type StickerMetadataRoggenrolaCd2 = S<
	StickerMetadata<
		"STICKER_ROGGENROLA_CD_2",
		{
			category: ["Pokemon"];
			pokemonId: "ROGGENROLA";
			regionId: 4;
			releaseDate: 20220914;
		}
	>
>;
export type StickerMetadataRoggenrolaCd3 = S<
	StickerMetadata<
		"STICKER_ROGGENROLA_CD_3",
		{
			category: ["Pokemon"];
			pokemonId: "ROGGENROLA";
			regionId: 4;
			releaseDate: 20220914;
		}
	>
>;
export type StickerMetadataRoggenrolaCd4 = S<
	StickerMetadata<
		"STICKER_ROGGENROLA_CD_4",
		{
			category: ["Pokemon"];
			pokemonId: "ROGGENROLA";
			regionId: 4;
			releaseDate: 20220914;
		}
	>
>;
export type StickerMetadataRowletcd1 = S<
	StickerMetadata<
		"STICKER_ROWLETCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 6;
			releaseDate: 20240106;
		}
	>
>;
export type StickerMetadataRowletcd2 = S<
	StickerMetadata<
		"STICKER_ROWLETCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 6;
			releaseDate: 20240106;
		}
	>
>;
export type StickerMetadataRowletcd3 = S<
	StickerMetadata<
		"STICKER_ROWLETCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 6;
			releaseDate: 20240106;
		}
	>
>;
export type StickerMetadataRowletcd4 = S<
	StickerMetadata<
		"STICKER_ROWLETCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "ROWLET";
			regionId: 6;
			releaseDate: 20240106;
		}
	>
>;
export type StickerMetadataSandshrew1 = S<
	StickerMetadata<
		"STICKER_SANDSHREW_1",
		{
			category: ["Pokemon"];
			pokemonId: "SANDSHREW";
			releaseDate: 20220313;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_1.png";
		}
	>
>;
export type StickerMetadataSandshrew2 = S<
	StickerMetadata<
		"STICKER_SANDSHREW_2",
		{
			category: ["Pokemon"];
			pokemonId: "SANDSHREW";
			releaseDate: 20220313;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_2.png";
		}
	>
>;
export type StickerMetadataSandshrew3 = S<
	StickerMetadata<
		"STICKER_SANDSHREW_3",
		{
			category: ["Pokemon"];
			pokemonId: "SANDSHREW";
			regionId: 6;
			releaseDate: 20220313;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_3.png";
		}
	>
>;
export type StickerMetadataSandshrew4 = S<
	StickerMetadata<
		"STICKER_SANDSHREW_4",
		{
			category: ["Pokemon"];
			pokemonId: "SANDSHREW";
			releaseDate: 20220313;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_sandshrew_4.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle1 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_1",
		{
			category: ["Pokemon"];
			pokemonId: "FLYGON";
			regionId: 2;
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_1.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle4 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_4",
		{
			category: ["Pokemon"];
			pokemonId: "DIGLETT";
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_4.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle5 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_5",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_5.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle6 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_6",
		{
			category: ["Pokemon"];
			pokemonId: "LICKITUNG";
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_6.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle7 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_7",
		{
			category: ["Pokemon"];
			pokemonId: "PINSIR";
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_7.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle8 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_8",
		{
			category: ["Pokemon"];
			pokemonId: "ODDISH";
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_8.png";
		}
	>
>;
export type StickerMetadataSecretsofthejungle9 = S<
	StickerMetadata<
		"STICKER_SECRETSOFTHEJUNGLE_9",
		{
			category: ["Pokemon"];
			pokemonId: "ZARUDE";
			regionId: 7;
			releaseDate: 20211001;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_secretsOfTheJungle_9.png";
		}
	>
>;
export type StickerMetadataSewaddlecd1 = S<
	StickerMetadata<
		"STICKER_SEWADDLECD_1",
		{
			category: ["Pokemon"];
			pokemonId: "SEWADDLE";
			regionId: 4;
			releaseDate: 20240930;
		}
	>
>;
export type StickerMetadataSewaddlecd2 = S<
	StickerMetadata<
		"STICKER_SEWADDLECD_2",
		{
			category: ["Pokemon"];
			pokemonId: "SEWADDLE";
			regionId: 4;
			releaseDate: 20240930;
		}
	>
>;
export type StickerMetadataSewaddlecd3 = S<
	StickerMetadata<
		"STICKER_SEWADDLECD_3",
		{
			category: ["Pokemon"];
			pokemonId: "SEWADDLE";
			regionId: 4;
			releaseDate: 20240930;
		}
	>
>;
export type StickerMetadataSewaddlecd4 = S<
	StickerMetadata<
		"STICKER_SEWADDLECD_4",
		{
			category: ["Pokemon"];
			pokemonId: "SEWADDLE";
			regionId: 4;
			releaseDate: 20240930;
		}
	>
>;
export type StickerMetadataShelmetKarrablast1 = S<
	StickerMetadata<
		"STICKER_SHELMET_KARRABLAST_1",
		{
			category: ["Pokemon"];
			pokemonId: "SHELMET";
			regionId: 2000;
			releaseDate: 20250128;
		}
	>
>;
export type StickerMetadataShelmetKarrablast2 = S<
	StickerMetadata<
		"STICKER_SHELMET_KARRABLAST_2",
		{
			category: ["Pokemon"];
			pokemonId: "SHELMET";
			regionId: 4;
			releaseDate: 20250128;
		}
	>
>;
export type StickerMetadataShelmetKarrablast3 = S<
	StickerMetadata<
		"STICKER_SHELMET_KARRABLAST_3",
		{
			category: ["Pokemon"];
			pokemonId: "KARRABLAST";
			regionId: 4;
			releaseDate: 20250128;
		}
	>
>;
export type StickerMetadataSleep1 = S<
	StickerMetadata<
		"STICKER_SLEEP_1",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep2 = S<
	StickerMetadata<
		"STICKER_SLEEP_2",
		{
			category: ["Pokemon"];
			pokemonId: "SNORLAX";
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep3 = S<
	StickerMetadata<
		"STICKER_SLEEP_3",
		{
			category: ["Pokemon"];
			pokemonId: "SNORLAX";
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep4 = S<
	StickerMetadata<
		"STICKER_SLEEP_4",
		{
			category: ["Pokemon"];
			pokemonId: "SLAKOTH";
			regionId: 2;
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep5 = S<
	StickerMetadata<
		"STICKER_SLEEP_5",
		{
			category: ["Pokemon"];
			pokemonId: "MUNCHLAX";
			regionId: 3;
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep6 = S<
	StickerMetadata<
		"STICKER_SLEEP_6",
		{
			category: ["Pokemon"];
			pokemonId: "MUNNA";
			regionId: 4;
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSleep7 = S<
	StickerMetadata<
		"STICKER_SLEEP_7",
		{
			category: ["Pokemon"];
			pokemonId: "KOMALA";
			regionId: 6;
			releaseDate: 20230710;
		}
	>
>;
export type StickerMetadataSlowpoke1 = S<
	StickerMetadata<
		"STICKER_SLOWPOKE_1",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			regionId: 2000;
			releaseDate: 20230318;
		}
	>
>;
export type StickerMetadataSlowpoke2 = S<
	StickerMetadata<
		"STICKER_SLOWPOKE_2",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			regionId: 2000;
			releaseDate: 20230318;
		}
	>
>;
export type StickerMetadataSlowpoke3 = S<
	StickerMetadata<
		"STICKER_SLOWPOKE_3",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20230318;
		}
	>
>;
export type StickerMetadataSlowpoke4 = S<
	StickerMetadata<
		"STICKER_SLOWPOKE_4",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			regionId: 7;
			releaseDate: 20230318;
		}
	>
>;
export type StickerMetadataSpheal1 = S<
	StickerMetadata<
		"STICKER_SPHEAL_1",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20220116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_1.png";
		}
	>
>;
export type StickerMetadataSpheal2 = S<
	StickerMetadata<
		"STICKER_SPHEAL_2",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20220116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_2.png";
		}
	>
>;
export type StickerMetadataSpheal3 = S<
	StickerMetadata<
		"STICKER_SPHEAL_3",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20220116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_3.png";
		}
	>
>;
export type StickerMetadataSpheal4 = S<
	StickerMetadata<
		"STICKER_SPHEAL_4",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20220116;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spheal_4.png";
		}
	>
>;
export type StickerMetadataSprigatito1 = S<
	StickerMetadata<
		"STICKER_SPRIGATITO_1",
		{
			category: ["Pokemon"];
			pokemonId: "SPRIGATITO";
			regionId: 1001;
			releaseDate: 20241218;
		}
	>
>;
export type StickerMetadataSprigatito2 = S<
	StickerMetadata<
		"STICKER_SPRIGATITO_2",
		{
			category: ["Pokemon"];
			pokemonId: "SPRIGATITO";
			regionId: 1001;
			releaseDate: 20241218;
		}
	>
>;
export type StickerMetadataSprigatito3 = S<
	StickerMetadata<
		"STICKER_SPRIGATITO_3",
		{
			category: ["Pokemon"];
			pokemonId: "SPRIGATITO";
			regionId: 1001;
			releaseDate: 20241218;
		}
	>
>;
export type StickerMetadataSprigatito4 = S<
	StickerMetadata<
		"STICKER_SPRIGATITO_4",
		{
			category: ["Pokemon"];
			pokemonId: "SPRIGATITO";
			regionId: 1001;
			releaseDate: 20241218;
		}
	>
>;
export type StickerMetadataSpring20241 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "VESPIQUEN";
			regionId: 2000;
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20242 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "SWADLOON";
			regionId: 4;
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20243 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "JIGGLYPUFF";
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20244 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "ODDISH";
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20245 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "CLEFAIRY";
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20246 = S<
	StickerMetadata<
		"STICKER_SPRING_2024_6",
		{
			category: ["Pokemon"];
			pokemonId: "CUTIEFLY";
			regionId: 6;
			releaseDate: 20240301;
		}
	>
>;
export type StickerMetadataSpring20251 = S<
	StickerMetadata<
		"STICKER_SPRING_2025_1",
		{
			category: ["Pokemon"];
			pokemonId: "RIBOMBEE";
			regionId: 6;
			releaseDate: 20250303;
		}
	>
>;
export type StickerMetadataSpring20252 = S<
	StickerMetadata<
		"STICKER_SPRING_2025_2",
		{
			category: ["Pokemon"];
			pokemonId: "BUTTERFREE";
			releaseDate: 20250303;
		}
	>
>;
export type StickerMetadataSpring20253 = S<
	StickerMetadata<
		"STICKER_SPRING_2025_3",
		{
			category: ["Pokemon"];
			pokemonId: "VILEPLUME";
			releaseDate: 20250303;
		}
	>
>;
export type StickerMetadataSpring20254 = S<
	StickerMetadata<
		"STICKER_SPRING_2025_4",
		{
			category: ["Pokemon"];
			pokemonId: "PETILIL";
			regionId: 4;
			releaseDate: 20250303;
		}
	>
>;
export type StickerMetadataSpring20261 = S<
	StickerMetadata<
		"STICKER_SPRING_2026_1",
		{
			category: ["Pokemon"];
			pokemonId: "KAKUNA";
			releaseDate: 20260303;
		}
	>
>;
export type StickerMetadataSpring20262 = S<
	StickerMetadata<
		"STICKER_SPRING_2026_2",
		{
			category: ["Pokemon"];
			pokemonId: "LEAFEON";
			regionId: 3;
			releaseDate: 20260303;
		}
	>
>;
export type StickerMetadataSpring20263 = S<
	StickerMetadata<
		"STICKER_SPRING_2026_3",
		{
			category: ["Pokemon"];
			pokemonId: "ESPURR";
			regionId: 5;
			releaseDate: 20260303;
		}
	>
>;
export type StickerMetadataSpring20264 = S<
	StickerMetadata<
		"STICKER_SPRING_2026_4",
		{
			category: ["Pokemon"];
			pokemonId: "FEEBAS";
			regionId: 2;
			releaseDate: 20260303;
		}
	>
>;
export type StickerMetadataSpringEievui = S<
	StickerMetadata<
		"STICKER_SPRING_EIEVUI",
		{
			category: ["Pokemon"];
			pokemonId: "EEVEE";
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_eievui.png";
		}
	>
>;
export type StickerMetadataSpringHapinas = S<
	StickerMetadata<
		"STICKER_SPRING_HAPINAS",
		{
			category: ["Pokemon"];
			pokemonId: "BLISSEY";
			regionId: 1;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_hapinas.png";
		}
	>
>;
export type StickerMetadataSpringMimirol = S<
	StickerMetadata<
		"STICKER_SPRING_MIMIROL",
		{
			category: ["Pokemon"];
			pokemonId: "BUNEARY";
			regionId: 3;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_mimirol.png";
		}
	>
>;
export type StickerMetadataSpringNimphia = S<
	StickerMetadata<
		"STICKER_SPRING_NIMPHIA",
		{
			category: ["Pokemon"];
			pokemonId: "SYLVEON";
			regionId: 5;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_nimphia.png";
		}
	>
>;
export type StickerMetadataSpringPikachu = S<
	StickerMetadata<
		"STICKER_SPRING_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_pikachu.png";
		}
	>
>;
export type StickerMetadataSpringPipito = S<
	StickerMetadata<
		"STICKER_SPRING_PIPITO",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_spring_pipito.png";
		}
	>
>;
export type StickerMetadataStufful1 = S<
	StickerMetadata<
		"STICKER_STUFFUL_1",
		{
			category: ["Pokemon"];
			pokemonId: "STUFFUL";
			regionId: 6;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_1.png";
		}
	>
>;
export type StickerMetadataStufful2 = S<
	StickerMetadata<
		"STICKER_STUFFUL_2",
		{
			category: ["Pokemon"];
			pokemonId: "STUFFUL";
			regionId: 6;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_2.png";
		}
	>
>;
export type StickerMetadataStufful3 = S<
	StickerMetadata<
		"STICKER_STUFFUL_3",
		{
			category: ["Pokemon"];
			pokemonId: "STUFFUL";
			regionId: 6;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_3.png";
		}
	>
>;
export type StickerMetadataStufful4 = S<
	StickerMetadata<
		"STICKER_STUFFUL_4",
		{
			category: ["Pokemon"];
			pokemonId: "STUFFUL";
			regionId: 6;
			releaseDate: 20220423;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_stufful_4.png";
		}
	>
>;
export type StickerMetadataSummer1 = S<
	StickerMetadata<
		"STICKER_SUMMER_1",
		{
			category: ["Pokemon"];
			pokemonId: "CASTFORM";
			regionId: 2;
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSummer2 = S<
	StickerMetadata<
		"STICKER_SUMMER_2",
		{
			category: ["Pokemon"];
			regionId: 5;
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSummer2023Blastoise = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_BLASTOISE",
		{
			category: ["Pokemon"];
			pokemonId: "BLASTOISE";
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer2023Butterfree = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_BUTTERFREE",
		{
			category: ["Pokemon"];
			pokemonId: "BUTTERFREE";
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer2023Clamperl = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_CLAMPERL",
		{
			category: ["Pokemon"];
			pokemonId: "CLAMPERL";
			regionId: 2;
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer2023Ledian = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_LEDIAN",
		{
			category: ["Pokemon"];
			pokemonId: "LEDIAN";
			regionId: 1;
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer2023Sawsbuck = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_SAWSBUCK",
		{
			category: ["Pokemon"];
			pokemonId: "SAWSBUCK";
			regionId: 2000;
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer2023Squirtle = S<
	StickerMetadata<
		"STICKER_SUMMER_2023_SQUIRTLE",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20230530;
		}
	>
>;
export type StickerMetadataSummer20241 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "DUCKLETT";
			regionId: 4;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20242 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "PASSIMIAN";
			regionId: 6;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20243 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "EMOLGA";
			regionId: 4;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20244 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "PELIPPER";
			regionId: 2;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20245 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "WAILORD";
			regionId: 2000;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20246 = S<
	StickerMetadata<
		"STICKER_SUMMER_2024_6",
		{
			category: ["Pokemon"];
			pokemonId: "WAILMER";
			regionId: 2;
			releaseDate: 20240522;
		}
	>
>;
export type StickerMetadataSummer20251 = S<
	StickerMetadata<
		"STICKER_SUMMER_2025_1",
		{
			category: ["Pokemon"];
			pokemonId: "SHARPEDO";
			regionId: 2;
			releaseDate: 20250603;
		}
	>
>;
export type StickerMetadataSummer20252 = S<
	StickerMetadata<
		"STICKER_SUMMER_2025_2",
		{
			category: ["Pokemon"];
			pokemonId: "EXEGGUTOR";
			regionId: 6;
			releaseDate: 20250603;
		}
	>
>;
export type StickerMetadataSummer20253 = S<
	StickerMetadata<
		"STICKER_SUMMER_2025_3",
		{
			category: ["Pokemon"];
			pokemonId: "TOUCANNON";
			regionId: 6;
			releaseDate: 20250603;
		}
	>
>;
export type StickerMetadataSummer20254 = S<
	StickerMetadata<
		"STICKER_SUMMER_2025_4",
		{
			category: ["Pokemon"];
			pokemonId: "WIGLETT";
			regionId: 1001;
			releaseDate: 20250603;
		}
	>
>;
export type StickerMetadataSummer3 = S<
	StickerMetadata<
		"STICKER_SUMMER_3",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSummer4 = S<
	StickerMetadata<
		"STICKER_SUMMER_4",
		{
			category: ["Pokemon"];
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSummer5 = S<
	StickerMetadata<
		"STICKER_SUMMER_5",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSummer6 = S<
	StickerMetadata<
		"STICKER_SUMMER_6",
		{
			category: ["Pokemon"];
			pokemonId: "SUNFLORA";
			regionId: 1;
			releaseDate: 20220601;
		}
	>
>;
export type StickerMetadataSwordshield211 = S<
	StickerMetadata<
		"STICKER_SWORDSHIELD21_1",
		{
			category: ["Pokemon"];
			pokemonId: "SKWOVET";
			regionId: 7;
			releaseDate: 20210920;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_1.png";
		}
	>
>;
export type StickerMetadataSwordshield212 = S<
	StickerMetadata<
		"STICKER_SWORDSHIELD21_2",
		{
			category: ["Pokemon"];
			pokemonId: "SKWOVET";
			regionId: 7;
			releaseDate: 20210920;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_2.png";
		}
	>
>;
export type StickerMetadataSwordshield213 = S<
	StickerMetadata<
		"STICKER_SWORDSHIELD21_3",
		{
			category: ["Pokemon"];
			pokemonId: "WOOLOO";
			regionId: 7;
			releaseDate: 20210920;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_3.png";
		}
	>
>;
export type StickerMetadataSwordshield214 = S<
	StickerMetadata<
		"STICKER_SWORDSHIELD21_4",
		{
			category: ["Pokemon"];
			pokemonId: "DUBWOOL";
			regionId: 7;
			releaseDate: 20210920;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_4.png";
		}
	>
>;
export type StickerMetadataSwordshield215 = S<
	StickerMetadata<
		"STICKER_SWORDSHIELD21_5",
		{
			category: ["Pokemon"];
			pokemonId: "FALINKS";
			regionId: 7;
			releaseDate: 20210920;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_swordShield21_5.png";
		}
	>
>;
export type StickerMetadataTeddiursa1 = S<
	StickerMetadata<
		"STICKER_TEDDIURSA_1",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 1;
			releaseDate: 20221112;
		}
	>
>;
export type StickerMetadataTeddiursa2 = S<
	StickerMetadata<
		"STICKER_TEDDIURSA_2",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 1;
			releaseDate: 20221112;
		}
	>
>;
export type StickerMetadataTeddiursa3 = S<
	StickerMetadata<
		"STICKER_TEDDIURSA_3",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 1;
			releaseDate: 20221112;
		}
	>
>;
export type StickerMetadataTeddiursa4 = S<
	StickerMetadata<
		"STICKER_TEDDIURSA_4",
		{
			category: ["Pokemon"];
			pokemonId: "TEDDIURSA";
			regionId: 2000;
			releaseDate: 20221112;
		}
	>
>;
export type StickerMetadataTimburr1 = S<
	StickerMetadata<
		"STICKER_TIMBURR_1",
		{
			category: ["Pokemon"];
			pokemonId: "TIMBURR";
			regionId: 4;
			releaseDate: 20231010;
		}
	>
>;
export type StickerMetadataTimburr2 = S<
	StickerMetadata<
		"STICKER_TIMBURR_2",
		{
			category: ["Pokemon"];
			pokemonId: "TIMBURR";
			regionId: 4;
			releaseDate: 20231010;
		}
	>
>;
export type StickerMetadataTimburr3 = S<
	StickerMetadata<
		"STICKER_TIMBURR_3",
		{
			category: ["Pokemon"];
			pokemonId: "TIMBURR";
			regionId: 4;
			releaseDate: 20231010;
		}
	>
>;
export type StickerMetadataTimburr4 = S<
	StickerMetadata<
		"STICKER_TIMBURR_4",
		{
			category: ["Pokemon"];
			pokemonId: "TIMBURR";
			regionId: 4;
			releaseDate: 20231010;
		}
	>
>;
export type StickerMetadataTlBlanche = S<
	StickerMetadata<
		"STICKER_TL_BLANCHE",
		{
			category: ["Characters"];
			releaseDate: 20210606;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Blanche.png";
		}
	>
>;
export type StickerMetadataTlCandela = S<
	StickerMetadata<
		"STICKER_TL_CANDELA",
		{
			category: ["Characters"];
			releaseDate: 20210606;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Candela.png";
		}
	>
>;
export type StickerMetadataTlSpark = S<
	StickerMetadata<
		"STICKER_TL_SPARK",
		{
			category: ["Characters"];
			releaseDate: 20210606;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_TL_Spark.png";
		}
	>
>;
export type StickerMetadataTogeticcd20231 = S<
	StickerMetadata<
		"STICKER_TOGETICCD2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "TOGETIC";
			regionId: 1;
			releaseDate: 20230410;
		}
	>
>;
export type StickerMetadataTogeticcd20232 = S<
	StickerMetadata<
		"STICKER_TOGETICCD2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "TOGETIC";
			regionId: 1;
			releaseDate: 20230410;
		}
	>
>;
export type StickerMetadataTogeticcd20233 = S<
	StickerMetadata<
		"STICKER_TOGETICCD2023_3",
		{
			category: ["Pokemon"];
			pokemonId: "TOGETIC";
			regionId: 1;
			releaseDate: 20230410;
		}
	>
>;
export type StickerMetadataTogeticcd20234 = S<
	StickerMetadata<
		"STICKER_TOGETICCD2023_4",
		{
			category: ["Pokemon"];
			pokemonId: "TOGETIC";
			regionId: 1;
			releaseDate: 20230410;
		}
	>
>;
export type StickerMetadataTrArlo = S<
	StickerMetadata<
		"STICKER_TR_ARLO",
		{
			category: ["Characters"];
			releaseDate: 20201013;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Arlo.png";
		}
	>
>;
export type StickerMetadataTrCliff = S<
	StickerMetadata<
		"STICKER_TR_CLIFF",
		{
			category: ["Characters"];
			releaseDate: 20201013;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Cliff.png";
		}
	>
>;
export type StickerMetadataTrSierra = S<
	StickerMetadata<
		"STICKER_TR_SIERRA",
		{
			category: ["Characters"];
			releaseDate: 20201013;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_TR_Sierra.png";
		}
	>
>;
export type StickerMetadataTynamocd1 = S<
	StickerMetadata<
		"STICKER_TYNAMOCD_1",
		{
			category: ["Pokemon"];
			pokemonId: "TYNAMO";
			regionId: 4;
			releaseDate: 20240608;
		}
	>
>;
export type StickerMetadataTynamocd2 = S<
	StickerMetadata<
		"STICKER_TYNAMOCD_2",
		{
			category: ["Pokemon"];
			pokemonId: "TYNAMO";
			regionId: 4;
			releaseDate: 20240608;
		}
	>
>;
export type StickerMetadataTynamocd3 = S<
	StickerMetadata<
		"STICKER_TYNAMOCD_3",
		{
			category: ["Pokemon"];
			pokemonId: "TYNAMO";
			regionId: 4;
			releaseDate: 20240608;
		}
	>
>;
export type StickerMetadataTynamocd4 = S<
	StickerMetadata<
		"STICKER_TYNAMOCD_4",
		{
			category: ["Pokemon"];
			pokemonId: "EELEKTROSS";
			regionId: 4;
			releaseDate: 20240608;
		}
	>
>;
export type StickerMetadataValentine20231 = S<
	StickerMetadata<
		"STICKER_VALENTINE2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "FRILLISH";
			regionId: 4;
			releaseDate: 20230202;
		}
	>
>;
export type StickerMetadataValentine20232 = S<
	StickerMetadata<
		"STICKER_VALENTINE2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "GARDEVOIR";
			regionId: 2;
			releaseDate: 20230202;
		}
	>
>;
export type StickerMetadataValentine20233 = S<
	StickerMetadata<
		"STICKER_VALENTINE2023_3",
		{
			category: ["Pokemon"];
			pokemonId: "GALLADE";
			regionId: 3;
			releaseDate: 20230202;
		}
	>
>;
export type StickerMetadataWcs2025CarGroup = S<
	StickerMetadata<
		"STICKER_WCS2025_CAR_GROUP",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20250815;
		}
	>
>;
export type StickerMetadataWcs2025Jigglypuff = S<
	StickerMetadata<
		"STICKER_WCS2025_JIGGLYPUFF",
		{
			category: ["Pokemon"];
			pokemonId: "JIGGLYPUFF";
			releaseDate: 20250815;
		}
	>
>;
export type StickerMetadataWcs2025Murkrow = S<
	StickerMetadata<
		"STICKER_WCS2025_MURKROW",
		{
			category: ["Pokemon"];
			pokemonId: "MURKROW";
			regionId: 1;
			releaseDate: 20250815;
		}
	>
>;
export type StickerMetadataWcs2025Pikachu = S<
	StickerMetadata<
		"STICKER_WCS2025_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			releaseDate: 20250815;
		}
	>
>;
export type StickerMetadataWcsPlay = S<
	StickerMetadata<
		"STICKER_WCS_PLAY",
		{
			category: ["Misc"];
			releaseDate: 20230923;
		}
	>
>;
export type StickerMetadataWillowBronze = S<
	StickerMetadata<
		"STICKER_WILLOW_BRONZE",
		{
			category: ["Characters"];
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataWillowGold = S<
	StickerMetadata<
		"STICKER_WILLOW_GOLD",
		{
			category: ["Characters"];
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataWillowSilver = S<
	StickerMetadata<
		"STICKER_WILLOW_SILVER",
		{
			category: ["Characters"];
			releaseDate: 20220604;
		}
	>
>;
export type StickerMetadataWinter20231 = S<
	StickerMetadata<
		"STICKER_WINTER2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "DELIBIRD";
			regionId: 1;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20232 = S<
	StickerMetadata<
		"STICKER_WINTER2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "MR_MIME";
			regionId: 7;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20233 = S<
	StickerMetadata<
		"STICKER_WINTER2023_3",
		{
			category: ["Pokemon"];
			pokemonId: "BERGMITE";
			regionId: 5;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20234 = S<
	StickerMetadata<
		"STICKER_WINTER2023_4",
		{
			category: ["Pokemon"];
			pokemonId: "WEAVILE";
			regionId: 3;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20235 = S<
	StickerMetadata<
		"STICKER_WINTER2023_5",
		{
			category: ["Pokemon"];
			pokemonId: "SPHEAL";
			regionId: 2;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20236 = S<
	StickerMetadata<
		"STICKER_WINTER2023_6",
		{
			category: ["Pokemon"];
			pokemonId: "SNOVER";
			regionId: 3;
			releaseDate: 20231128;
		}
	>
>;
export type StickerMetadataWinter20251 = S<
	StickerMetadata<
		"STICKER_WINTER2025_1",
		{
			category: ["Pokemon"];
			pokemonId: "SWABLU";
			regionId: 2;
			releaseDate: 20251202;
		}
	>
>;
export type StickerMetadataWinter20252 = S<
	StickerMetadata<
		"STICKER_WINTER2025_2",
		{
			category: ["Pokemon"];
			pokemonId: "LITTEN";
			regionId: 6;
			releaseDate: 20251202;
		}
	>
>;
export type StickerMetadataWinter20253 = S<
	StickerMetadata<
		"STICKER_WINTER2025_3",
		{
			category: ["Pokemon"];
			pokemonId: "MAUSHOLD";
			regionId: 1001;
			releaseDate: 20251202;
		}
	>
>;
export type StickerMetadataWinter20254 = S<
	StickerMetadata<
		"STICKER_WINTER2025_4",
		{
			category: ["Pokemon"];
			pokemonId: "FLAREON";
			releaseDate: 20251202;
		}
	>
>;
export type StickerMetadataWinter20241 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_1",
		{
			category: ["Pokemon"];
			pokemonId: "VULPIX";
			regionId: 6;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinter20242 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_2",
		{
			category: ["Pokemon"];
			pokemonId: "STANTLER";
			regionId: 1;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinter20243 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_3",
		{
			category: ["Pokemon"];
			pokemonId: "CHANDELURE";
			regionId: 4;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinter20244 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_4",
		{
			category: ["Pokemon"];
			pokemonId: "URSALUNA";
			regionId: 1000;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinter20245 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_5",
		{
			category: ["Pokemon"];
			pokemonId: "MAREEP";
			regionId: 1;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinter20246 = S<
	StickerMetadata<
		"STICKER_WINTER_2024_6",
		{
			category: ["Pokemon"];
			pokemonId: "MORELULL";
			regionId: 6;
			releaseDate: 20241126;
		}
	>
>;
export type StickerMetadataWinterAmaura = S<
	StickerMetadata<
		"STICKER_WINTER_AMAURA",
		{
			category: ["Pokemon"];
			pokemonId: "AMAURA";
			regionId: 5;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWinterDarumaka = S<
	StickerMetadata<
		"STICKER_WINTER_DARUMAKA",
		{
			category: ["Pokemon"];
			pokemonId: "DARUMAKA";
			regionId: 7;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWinterGlaceon = S<
	StickerMetadata<
		"STICKER_WINTER_GLACEON",
		{
			category: ["Pokemon"];
			pokemonId: "GLACEON";
			regionId: 3;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWinterPikachu = S<
	StickerMetadata<
		"STICKER_WINTER_PIKACHU",
		{
			category: ["Pokemon"];
			pokemonId: "PIKACHU";
			regionId: 2000;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWinterSawsbuck = S<
	StickerMetadata<
		"STICKER_WINTER_SAWSBUCK",
		{
			category: ["Pokemon"];
			pokemonId: "SAWSBUCK";
			regionId: 4;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWinterSnorunt = S<
	StickerMetadata<
		"STICKER_WINTER_SNORUNT",
		{
			category: ["Pokemon"];
			pokemonId: "SNORUNT";
			regionId: 2;
			releaseDate: 20221131;
		}
	>
>;
export type StickerMetadataWoopercd20231 = S<
	StickerMetadata<
		"STICKER_WOOPERCD2023_1",
		{
			category: ["Pokemon"];
			pokemonId: "WOOPER";
			regionId: 2000;
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataWoopercd20232 = S<
	StickerMetadata<
		"STICKER_WOOPERCD2023_2",
		{
			category: ["Pokemon"];
			pokemonId: "WOOPER";
			regionId: 1001;
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataWoopercd20233 = S<
	StickerMetadata<
		"STICKER_WOOPERCD2023_3",
		{
			category: ["Pokemon"];
			pokemonId: "WOOPER";
			regionId: 1;
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataWoopercd20234 = S<
	StickerMetadata<
		"STICKER_WOOPERCD2023_4",
		{
			category: ["Pokemon"];
			pokemonId: "WOOPER";
			regionId: 2000;
			releaseDate: 20231030;
		}
	>
>;
export type StickerMetadataYadon = S<
	StickerMetadata<
		"STICKER_YADON",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWBRO";
			releaseDate: 20200819;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/sticker_yadon.png";
		}
	>
>;
export type StickerMetadataYurutto12 = S<
	StickerMetadata<
		"STICKER_YURUTTO_12",
		{
			category: ["Pokemon"];
			pokemonId: "WOBBUFFET";
			regionId: 1;
			releaseDate: 20210908;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_12.png";
		}
	>
>;
export type StickerMetadataYurutto24 = S<
	StickerMetadata<
		"STICKER_YURUTTO_24",
		{
			category: ["Pokemon"];
			pokemonId: "SLOWPOKE";
			releaseDate: 20210908;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_24.png";
		}
	>
>;
export type StickerMetadataYurutto26 = S<
	StickerMetadata<
		"STICKER_YURUTTO_26",
		{
			category: ["Pokemon"];
			pokemonId: "MAGIKARP";
			releaseDate: 20201231;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_yurutto_26.png";
		}
	>
>;
export type StickerMetadataYurutto33 = S<
	StickerMetadata<
		"STICKER_YURUTTO_33",
		{
			category: ["Pokemon"];
			regionId: 2000;
			releaseDate: 20201222;
			stickerUrl: "https://storage.googleapis.com/prod-public-images/Stickers/sticker_yurutto_33.png";
		}
	>
>;
export type StickerMetadataYurutto36 = S<
	StickerMetadata<
		"STICKER_YURUTTO_36",
		{
			category: ["Pokemon"];
			pokemonId: "CHANSEY";
			releaseDate: 20210405;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_36.png";
		}
	>
>;
export type StickerMetadataYurutto37 = S<
	StickerMetadata<
		"STICKER_YURUTTO_37",
		{
			category: ["Pokemon"];
			pokemonId: "SQUIRTLE";
			releaseDate: 20210420;
			stickerUrl: "https://prodholoholo-public-images.nianticlabs.com/Stickers/sticker_yurutto_37.png";
		}
	>
>;

export type StickerMetadataMasterfileEntry =
	| StickerMetadata2023collab1
	| StickerMetadata2023collab2
	| StickerMetadata2023collab3
	| StickerMetadata2023collab4
	| StickerMetadata6anniv1
	| StickerMetadata6anniv2
	| StickerMetadata6anniv3
	| StickerMetadata6anniv4
	| StickerMetadata6anniv5
	| StickerMetadata6anniv6
	| StickerMetadata7anniv1
	| StickerMetadata7anniv2
	| StickerMetadata7anniv3
	| StickerMetadata7anniv4
	| StickerMetadata7anniv5
	| StickerMetadata8anniv1
	| StickerMetadata8anniv2
	| StickerMetadata8anniv3
	| StickerMetadata8anniv4
	| StickerMetadata9anniv1
	| StickerMetadata9anniv2
	| StickerMetadata9anniv3
	| StickerMetadataAlolaishi1
	| StickerMetadataAlolaishi2
	| StickerMetadataAlolaishi3
	| StickerMetadataAlolaishi4
	| StickerMetadataAprilfool20231
	| StickerMetadataAprilfool20232
	| StickerMetadataAudino
	| StickerMetadataBellsproutcd1
	| StickerMetadataBellsproutcd2
	| StickerMetadataBellsproutcd3
	| StickerMetadataBellsproutcd4
	| StickerMetadataBidoofday1
	| StickerMetadataBidoofday2
	| StickerMetadataBidoofday3
	| StickerMetadataBounsweetcd20241
	| StickerMetadataBounsweetcd20242
	| StickerMetadataBounsweetcd20243
	| StickerMetadataBounsweetcd20244
	| StickerMetadataBreadkorea001
	| StickerMetadataBreadkorea002
	| StickerMetadataBreadkorea003
	| StickerMetadataBreadkorea004
	| StickerMetadataBreadkorea005
	| StickerMetadataBreadkorea006
	| StickerMetadataChanseycd1
	| StickerMetadataChanseycd2
	| StickerMetadataChanseycd3
	| StickerMetadataChanseycd4
	| StickerMetadataCharizard1
	| StickerMetadataCharizard2
	| StickerMetadataCharizard3
	| StickerMetadataChespin1
	| StickerMetadataChespin2
	| StickerMetadataChespin3
	| StickerMetadataChespin4
	| StickerMetadataCityspotlight
	| StickerMetadataConciergeEevee
	| StickerMetadataConciergePsyduck
	| StickerMetadataConciergeSealeo
	| StickerMetadataConciergeShinx
	| StickerMetadataDeino1
	| StickerMetadataDeino2
	| StickerMetadataDeino3
	| StickerMetadataDeino4
	| StickerMetadataDiademuertos20231
	| StickerMetadataDiademuertos20232
	| StickerMetadataDiademuertos20233
	| StickerMetadataDiademuertos20234
	| StickerMetadataDiamondpearlchimchar
	| StickerMetadataDiamondpearldialga
	| StickerMetadataDiamondpearllucario
	| StickerMetadataDiamondpearlpalkia
	| StickerMetadataDiamondpearlpiplup
	| StickerMetadataDiamondpearlturtwig
	| StickerMetadataDitto1
	| StickerMetadataDitto2
	| StickerMetadataDitto3
	| StickerMetadataDitto4
	| StickerMetadataDitto5
	| StickerMetadataDitto6
	| StickerMetadataEeveefriends1
	| StickerMetadataEeveefriends2
	| StickerMetadataEeveefriends3
	| StickerMetadataEeveefriends4
	| StickerMetadataEeveefriends5
	| StickerMetadataEeveefriends6
	| StickerMetadataEeveefriends7
	| StickerMetadataEeveefriends8
	| StickerMetadataEeveefriends9
	| StickerMetadataEternatus
	| StickerMetadataFall20231
	| StickerMetadataFall20232
	| StickerMetadataFall20233
	| StickerMetadataFall20234
	| StickerMetadataFall20235
	| StickerMetadataFall20236
	| StickerMetadataFall20241
	| StickerMetadataFall20242
	| StickerMetadataFall20243
	| StickerMetadataFall20244
	| StickerMetadataFall20245
	| StickerMetadataFall20246
	| StickerMetadataFall20251
	| StickerMetadataFall20252
	| StickerMetadataFall20253
	| StickerMetadataFall20254
	| StickerMetadataFallSawsbuck
	| StickerMetadataFallShroomish
	| StickerMetadataFallSkwovet
	| StickerMetadataFallTeddiursa
	| StickerMetadataFallTrevenant
	| StickerMetadataFallVulpix
	| StickerMetadataFennekin1
	| StickerMetadataFennekin2
	| StickerMetadataFennekin3
	| StickerMetadataFennekin4
	| StickerMetadataFestivaloflightMorelull
	| StickerMetadataFestivaloflightShiinotic
	| StickerMetadataFestivalofthelights21V1
	| StickerMetadataFestivalofthelights21V2
	| StickerMetadataFestivalofthelights21V3
	| StickerMetadataFestivalofthelights21V4
	| StickerMetadataFlabebe1
	| StickerMetadataFlabebe2
	| StickerMetadataFlairHeart1
	| StickerMetadataFlairHeart2
	| StickerMetadataFlairHeart3
	| StickerMetadataFlairHeart4
	| StickerMetadataFlairHeart5
	| StickerMetadataFlairStar1
	| StickerMetadataFlairStar2
	| StickerMetadataFlairStar3
	| StickerMetadataFlairStar4
	| StickerMetadataFlairStar5
	| StickerMetadataFlairStar6
	| StickerMetadataFlairStar7
	| StickerMetadataFormulaekoreaPikachu
	| StickerMetadataFossilmuseum1
	| StickerMetadataFossilmuseum2
	| StickerMetadataFroakie1
	| StickerMetadataFroakie2
	| StickerMetadataFroakie3
	| StickerMetadataFroakie4
	| StickerMetadataFunawari04312
	| StickerMetadataFunawari05312
	| StickerMetadataFunawari06312
	| StickerMetadataFunawari22312
	| StickerMetadataFunwari020608
	| StickerMetadataFunwari10
	| StickerMetadataFunwari11Thanku
	| StickerMetadataFunwari1202
	| StickerMetadataFunwari18
	| StickerMetadataFunwari20
	| StickerMetadataFunwari35
	| StickerMetadataFunwariPidgey18
	| StickerMetadataFurfrouheart1
	| StickerMetadataFurfrouheart2
	| StickerMetadataGalarianzigzagoon1
	| StickerMetadataGalarianzigzagoon2
	| StickerMetadataGalarianzigzagoon3
	| StickerMetadataGalarianzigzagoon4
	| StickerMetadataGiftthankyou
	| StickerMetadataGimmighoul1
	| StickerMetadataGimmighoul2
	| StickerMetadataGimmighoul3
	| StickerMetadataGimmighoul4
	| StickerMetadataGimmighoul5
	| StickerMetadataGoomycd1
	| StickerMetadataGoomycd2
	| StickerMetadataGoomycd3
	| StickerMetadataGoomycd4
	| StickerMetadataGotour2021
	| StickerMetadataGotour20221
	| StickerMetadataGotour20222
	| StickerMetadataGotour20223
	| StickerMetadataGotour20224
	| StickerMetadataGotour2022Chikorita
	| StickerMetadataGotour2022Cyndaquil
	| StickerMetadataGotour2022Hooh
	| StickerMetadataGotour2022Lugia
	| StickerMetadataGotour2022Togepi
	| StickerMetadataGotour2022Totodile
	| StickerMetadataGotour2025Badge
	| StickerMetadataGotour2025Kyuremblack
	| StickerMetadataGotour2025Kyuremwhite
	| StickerMetadataGotour2025Reshiram
	| StickerMetadataGotour2025Rz
	| StickerMetadataGotour2025Zekrom
	| StickerMetadataGotourhoenn1
	| StickerMetadataGotourhoenn2
	| StickerMetadataGotourhoenn3
	| StickerMetadataGotourhoenn4
	| StickerMetadataGotourhoenn5
	| StickerMetadataGotourhoenn6
	| StickerMetadataGowa202501
	| StickerMetadataGowa202502
	| StickerMetadataGowa202503
	| StickerMetadataGowa202504
	| StickerMetadataGowa202505
	| StickerMetadataGrubbin1
	| StickerMetadataGrubbin2
	| StickerMetadataGrubbin3
	| StickerMetadataGrubbin4
	| StickerMetadataHalloween2022Gengar
	| StickerMetadataHalloween2022Pumpkaboo
	| StickerMetadataHalloween2022Vulpix
	| StickerMetadataHalloween2025Noibat
	| StickerMetadataHalloween2025Teddiursa
	| StickerMetadataHalloween21Fuwaraid
	| StickerMetadataHalloween21Ghostpika
	| StickerMetadataHalloween21Pikachu
	| StickerMetadataHalloween21Pochama
	| StickerMetadataHalloween23Gengar
	| StickerMetadataHalloween23Greavard
	| StickerMetadataHalloween23Misdreavus
	| StickerMetadataHalloween23Phantump
	| StickerMetadataHalloween24Froakie
	| StickerMetadataHalloween24Rowlet
	| StickerMetadataHalloweenBulb
	| StickerMetadataHalloweenCharm
	| StickerMetadataHalloweenGengarmd
	| StickerMetadataHalloweenPika
	| StickerMetadataHalloweenSableyemd
	| StickerMetadataHalloweenSqu
	| StickerMetadataHaruCherrim
	| StickerMetadataHaruDredearpika
	| StickerMetadataHaruKireihana
	| StickerMetadataHaruLalantes
	| StickerMetadataHaruMebukishikijik
	| StickerMetadataHaruMitsuhoney
	| StickerMetadataHawlucha01
	| StickerMetadataHisuidiscoArcanine
	| StickerMetadataHisuidiscoBraviary
	| StickerMetadataHisuidiscoGrowlithe
	| StickerMetadataHolidayevent211
	| StickerMetadataHolidayevent212
	| StickerMetadataHolidayevent213
	| StickerMetadataHolidayevent214
	| StickerMetadataHolidayevent22Cubchoo
	| StickerMetadataHolidayevent22Scatterbug
	| StickerMetadataHolidayevent22Snowpika
	| StickerMetadataHolidayevent22Vulpix
	| StickerMetadataHolidayevent23Cetoddle
	| StickerMetadataHolidayevent23Cryogonal
	| StickerMetadataHolidayevent23Psyduck
	| StickerMetadataHolidayevent23Seel
	| StickerMetadataHolidayevent23Vanillish
	| StickerMetadataHolographicChancey
	| StickerMetadataHolographicCharmeleon
	| StickerMetadataHolographicIvysaur
	| StickerMetadataHolographicMeltan
	| StickerMetadataHolographicPikachu
	| StickerMetadataHolographicWartortle
	| StickerMetadataHoppip1
	| StickerMetadataHoppip2
	| StickerMetadataHoppip3
	| StickerMetadataHoppip4
	| StickerMetadataIndonesiajourney1
	| StickerMetadataIndonesiajourney2
	| StickerMetadataIplpartnership1
	| StickerMetadataIplpartnership2
	| StickerMetadataJunecd2023Axew1
	| StickerMetadataJunecd2023Axew2
	| StickerMetadataJunecd2023Axew3
	| StickerMetadataJunecd2023Axew4
	| StickerMetadataKoreatown1
	| StickerMetadataKoreatown2
	| StickerMetadataKoreatown3
	| StickerMetadataKrDitto
	| StickerMetadataKurtasaree1
	| StickerMetadataKurtasaree2
	| StickerMetadataKurtasaree3
	| StickerMetadataKurtasaree4
	| StickerMetadataKurtasaree5
	| StickerMetadataKurtasaree6
	| StickerMetadataLentillaunchCamera
	| StickerMetadataLittencd1
	| StickerMetadataLittencd2
	| StickerMetadataLittencd3
	| StickerMetadataLittencd4
	| StickerMetadataLitwick1
	| StickerMetadataLitwick2
	| StickerMetadataLitwick3
	| StickerMetadataLitwick4
	| StickerMetadataLuvdisc
	| StickerMetadataMankey1
	| StickerMetadataMankey2
	| StickerMetadataMankey3
	| StickerMetadataMankey4
	| StickerMetadataMegaevolutionParis1
	| StickerMetadataMegaevolutionParis2
	| StickerMetadataMegaevolutionParis3
	| StickerMetadataMewtwo
	| StickerMetadataMewLaugh
	| StickerMetadataMukkuruCd1
	| StickerMetadataMukkuruCd2
	| StickerMetadataMukkuruCd3
	| StickerMetadataMukkuruCd4
	| StickerMetadataNagano06312
	| StickerMetadataNagano08
	| StickerMetadataNagano11
	| StickerMetadataNagano15
	| StickerMetadataNagano15312
	| StickerMetadataNaganoBath
	| StickerMetadataNaganoMarill
	| StickerMetadataNaganoYadon
	| StickerMetadataNewpokemon21
	| StickerMetadataNewpokemon215
	| StickerMetadataNewpokemon233
	| StickerMetadataNewpokemon04
	| StickerMetadataNewpokemon20
	| StickerMetadataNewpokemon37
	| StickerMetadataNewteamrascal
	| StickerMetadataNewteamrascalpikachu26
	| StickerMetadataNewyears221
	| StickerMetadataNewyears222
	| StickerMetadataNewyears223
	| StickerMetadataNewyears224
	| StickerMetadataNewyears231
	| StickerMetadataNewyears232
	| StickerMetadataNewyears233
	| StickerMetadataNewyears234
	| StickerMetadataNiaLogo
	| StickerMetadataNigiyaka080508312
	| StickerMetadataNigiyaka160508312
	| StickerMetadataNoibatCd1
	| StickerMetadataNoibatCd2
	| StickerMetadataNoibatCd3
	| StickerMetadataNoibatCd4
	| StickerMetadataNyarth38
	| StickerMetadataObservatory01
	| StickerMetadataObservatory02
	| StickerMetadataPapelpicadotgr1
	| StickerMetadataPapelpicadotgr2
	| StickerMetadataPapelpicadotgr3
	| StickerMetadataPapelpicadotgr4
	| StickerMetadataPapelpicadotgr5
	| StickerMetadataPgofest2021Galarianzigzagoon
	| StickerMetadataPgofest2021Logo
	| StickerMetadataPgofest2021Meloetta1
	| StickerMetadataPgofest2021Meloetta2
	| StickerMetadataPgofest2021Ponyta
	| StickerMetadataPgofest2021Shirticon
	| StickerMetadataPgofest2022Denjyumoku
	| StickerMetadataPgofest2022Groudon
	| StickerMetadataPgofest2022Kibago
	| StickerMetadataPgofest2022Kyogre
	| StickerMetadataPgofest2022Massivoon
	| StickerMetadataPgofest2022Pheroache
	| StickerMetadataPgofest2022Pikachu
	| StickerMetadataPgofest2022Pochama
	| StickerMetadataPgofest2022Shaymin
	| StickerMetadataPgofest2022Shayminsky
	| StickerMetadataPgofest2022Uturoid
	| StickerMetadataPgoFest2017
	| StickerMetadataPgoFest2018
	| StickerMetadataPgoFest2019
	| StickerMetadataPgoFest2020
	| StickerMetadataPgoFest2020Logo
	| StickerMetadataPgoFest2022
	| StickerMetadataPgoFest2022Logo
	| StickerMetadataPgoFest2023
	| StickerMetadataPgoFest20231
	| StickerMetadataPgoFest20232
	| StickerMetadataPgoFest20233
	| StickerMetadataPgoFest20234
	| StickerMetadataPgoFest20235
	| StickerMetadataPgoFest20236
	| StickerMetadataPgoFest2023Logo
	| StickerMetadataPgoFest2024
	| StickerMetadataPgoFest20241
	| StickerMetadataPgoFest20242
	| StickerMetadataPgoFest20243
	| StickerMetadataPgoFest20244
	| StickerMetadataPgoFest20245
	| StickerMetadataPgoFest20246
	| StickerMetadataPgoFest2024Logo
	| StickerMetadataPgoFest2025
	| StickerMetadataPgoFest20251
	| StickerMetadataPgoFest20252
	| StickerMetadataPgoFest20253
	| StickerMetadataPgoFest2025Logo
	| StickerMetadataPgoFestVictini05
	| StickerMetadataPgoTour2024
	| StickerMetadataPgoTour20241
	| StickerMetadataPgoTour20242
	| StickerMetadataPgoTour20243
	| StickerMetadataPgoTour20244
	| StickerMetadataPgoTour20245
	| StickerMetadataPgoTour2024Logo
	| StickerMetadataPgoTour2026
	| StickerMetadataPgoTour20261
	| StickerMetadataPgoTour20262
	| StickerMetadataPgoTour20263
	| StickerMetadataPgoTour2026Logo
	| StickerMetadataPgoWildarea2024
	| StickerMetadataPgoWildarea20241
	| StickerMetadataPgoWildarea20242
	| StickerMetadataPgoWildarea20243
	| StickerMetadataPgoWildarea20244
	| StickerMetadataPgoWildarea2024Logo
	| StickerMetadataPikaairadventure1
	| StickerMetadataPikaairadventure2
	| StickerMetadataPikaairadventure3
	| StickerMetadataPikaairjejuPikachu
	| StickerMetadataPikaairsingaporeLapras
	| StickerMetadataPikaairsingaporePikachu
	| StickerMetadataPikaairtaiwanPikachu
	| StickerMetadataPikaairtaiwanSnorlax
	| StickerMetadataPikachuJol
	| StickerMetadataPika14Thankyou
	| StickerMetadataPokemonchatpals204
	| StickerMetadataPokemonchatpals240
	| StickerMetadataPokopiaBulbasaur
	| StickerMetadataPokopiaPikachu
	| StickerMetadataPokopiaSnorlax
	| StickerMetadataPokopiaTangrowth
	| StickerMetadataPoliwag1
	| StickerMetadataPoliwag2
	| StickerMetadataPoliwag3
	| StickerMetadataPoliwag4
	| StickerMetadataPonyta1
	| StickerMetadataPonyta2
	| StickerMetadataPonyta3
	| StickerMetadataPonyta4
	| StickerMetadataPoppliocd1
	| StickerMetadataPoppliocd2
	| StickerMetadataPoppliocd3
	| StickerMetadataPoppliocd4
	| StickerMetadataProjectguitar04
	| StickerMetadataProjectguitar07
	| StickerMetadataProjectguitar13
	| StickerMetadataProjectguitar25
	| StickerMetadataProjectguitarFroakie
	| StickerMetadataPsychicspec21Inkay
	| StickerMetadataPsychicspec21Inkay2
	| StickerMetadataRoggenrolaCd1
	| StickerMetadataRoggenrolaCd2
	| StickerMetadataRoggenrolaCd3
	| StickerMetadataRoggenrolaCd4
	| StickerMetadataRowletcd1
	| StickerMetadataRowletcd2
	| StickerMetadataRowletcd3
	| StickerMetadataRowletcd4
	| StickerMetadataSandshrew1
	| StickerMetadataSandshrew2
	| StickerMetadataSandshrew3
	| StickerMetadataSandshrew4
	| StickerMetadataSecretsofthejungle1
	| StickerMetadataSecretsofthejungle4
	| StickerMetadataSecretsofthejungle5
	| StickerMetadataSecretsofthejungle6
	| StickerMetadataSecretsofthejungle7
	| StickerMetadataSecretsofthejungle8
	| StickerMetadataSecretsofthejungle9
	| StickerMetadataSewaddlecd1
	| StickerMetadataSewaddlecd2
	| StickerMetadataSewaddlecd3
	| StickerMetadataSewaddlecd4
	| StickerMetadataShelmetKarrablast1
	| StickerMetadataShelmetKarrablast2
	| StickerMetadataShelmetKarrablast3
	| StickerMetadataSleep1
	| StickerMetadataSleep2
	| StickerMetadataSleep3
	| StickerMetadataSleep4
	| StickerMetadataSleep5
	| StickerMetadataSleep6
	| StickerMetadataSleep7
	| StickerMetadataSlowpoke1
	| StickerMetadataSlowpoke2
	| StickerMetadataSlowpoke3
	| StickerMetadataSlowpoke4
	| StickerMetadataSpheal1
	| StickerMetadataSpheal2
	| StickerMetadataSpheal3
	| StickerMetadataSpheal4
	| StickerMetadataSprigatito1
	| StickerMetadataSprigatito2
	| StickerMetadataSprigatito3
	| StickerMetadataSprigatito4
	| StickerMetadataSpring20241
	| StickerMetadataSpring20242
	| StickerMetadataSpring20243
	| StickerMetadataSpring20244
	| StickerMetadataSpring20245
	| StickerMetadataSpring20246
	| StickerMetadataSpring20251
	| StickerMetadataSpring20252
	| StickerMetadataSpring20253
	| StickerMetadataSpring20254
	| StickerMetadataSpring20261
	| StickerMetadataSpring20262
	| StickerMetadataSpring20263
	| StickerMetadataSpring20264
	| StickerMetadataSpringEievui
	| StickerMetadataSpringHapinas
	| StickerMetadataSpringMimirol
	| StickerMetadataSpringNimphia
	| StickerMetadataSpringPikachu
	| StickerMetadataSpringPipito
	| StickerMetadataStufful1
	| StickerMetadataStufful2
	| StickerMetadataStufful3
	| StickerMetadataStufful4
	| StickerMetadataSummer1
	| StickerMetadataSummer2
	| StickerMetadataSummer2023Blastoise
	| StickerMetadataSummer2023Butterfree
	| StickerMetadataSummer2023Clamperl
	| StickerMetadataSummer2023Ledian
	| StickerMetadataSummer2023Sawsbuck
	| StickerMetadataSummer2023Squirtle
	| StickerMetadataSummer20241
	| StickerMetadataSummer20242
	| StickerMetadataSummer20243
	| StickerMetadataSummer20244
	| StickerMetadataSummer20245
	| StickerMetadataSummer20246
	| StickerMetadataSummer20251
	| StickerMetadataSummer20252
	| StickerMetadataSummer20253
	| StickerMetadataSummer20254
	| StickerMetadataSummer3
	| StickerMetadataSummer4
	| StickerMetadataSummer5
	| StickerMetadataSummer6
	| StickerMetadataSwordshield211
	| StickerMetadataSwordshield212
	| StickerMetadataSwordshield213
	| StickerMetadataSwordshield214
	| StickerMetadataSwordshield215
	| StickerMetadataTeddiursa1
	| StickerMetadataTeddiursa2
	| StickerMetadataTeddiursa3
	| StickerMetadataTeddiursa4
	| StickerMetadataTimburr1
	| StickerMetadataTimburr2
	| StickerMetadataTimburr3
	| StickerMetadataTimburr4
	| StickerMetadataTlBlanche
	| StickerMetadataTlCandela
	| StickerMetadataTlSpark
	| StickerMetadataTogeticcd20231
	| StickerMetadataTogeticcd20232
	| StickerMetadataTogeticcd20233
	| StickerMetadataTogeticcd20234
	| StickerMetadataTrArlo
	| StickerMetadataTrCliff
	| StickerMetadataTrSierra
	| StickerMetadataTynamocd1
	| StickerMetadataTynamocd2
	| StickerMetadataTynamocd3
	| StickerMetadataTynamocd4
	| StickerMetadataValentine20231
	| StickerMetadataValentine20232
	| StickerMetadataValentine20233
	| StickerMetadataWcs2025CarGroup
	| StickerMetadataWcs2025Jigglypuff
	| StickerMetadataWcs2025Murkrow
	| StickerMetadataWcs2025Pikachu
	| StickerMetadataWcsPlay
	| StickerMetadataWillowBronze
	| StickerMetadataWillowGold
	| StickerMetadataWillowSilver
	| StickerMetadataWinter20231
	| StickerMetadataWinter20232
	| StickerMetadataWinter20233
	| StickerMetadataWinter20234
	| StickerMetadataWinter20235
	| StickerMetadataWinter20236
	| StickerMetadataWinter20251
	| StickerMetadataWinter20252
	| StickerMetadataWinter20253
	| StickerMetadataWinter20254
	| StickerMetadataWinter20241
	| StickerMetadataWinter20242
	| StickerMetadataWinter20243
	| StickerMetadataWinter20244
	| StickerMetadataWinter20245
	| StickerMetadataWinter20246
	| StickerMetadataWinterAmaura
	| StickerMetadataWinterDarumaka
	| StickerMetadataWinterGlaceon
	| StickerMetadataWinterPikachu
	| StickerMetadataWinterSawsbuck
	| StickerMetadataWinterSnorunt
	| StickerMetadataWoopercd20231
	| StickerMetadataWoopercd20232
	| StickerMetadataWoopercd20233
	| StickerMetadataWoopercd20234
	| StickerMetadataYadon
	| StickerMetadataYurutto12
	| StickerMetadataYurutto24
	| StickerMetadataYurutto26
	| StickerMetadataYurutto33
	| StickerMetadataYurutto36
	| StickerMetadataYurutto37;

export type StickerMetadataTemplateID = StickerMetadataMasterfileEntry["templateId"];

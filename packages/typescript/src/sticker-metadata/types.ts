// Generated from Pokémon GO masterfile — group "stickerMetadata", 600 entries (structural types).

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

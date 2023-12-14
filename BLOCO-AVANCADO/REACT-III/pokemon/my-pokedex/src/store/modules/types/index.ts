export interface PokemonSummary {
	id: number;
	name: string;
	size: number;
	imageURL: string;
	detailURL: string;
	favorite: boolean;
}

export interface PokemonDetail {
	id: number;
	name: string;
	size: number;
	imageURL: string;
	abilities: string[];
	stats: PokemonStat[];
	favorite: boolean;
}

interface PokemonStat {
	stat: string;
	effort: number;
	baseStat: number;
}

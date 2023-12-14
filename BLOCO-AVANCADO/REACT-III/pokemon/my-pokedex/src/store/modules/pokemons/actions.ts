import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonSummary } from '../types';
import { PokemonList } from './pokemons.slice';
import emptyImage from '/assets/images/empty.png';

type ReturnFetchPokemons = Omit<PokemonList, 'isLoading'> | null;

export const fetchPokemons = createAsyncThunk<ReturnFetchPokemons, string>('fetch/pokemons', async (url: string) => {
	try {
		const responsePokemons = await axios.get(url);
		const pokemons: PokemonSummary[] = [];

		for (const pokemon of responsePokemons.data.results) {
			const responseDetail = await axios.get(pokemon.url);
			pokemons.push({
				id: responseDetail.data.id,
				name: responseDetail.data.name,
				size: responseDetail.data.height,
				imageURL: responseDetail.data.sprites.other['official-artwork'].front_default ?? emptyImage,
				detailURL: pokemon.url,
				favorite: false,
			});
		}

		return {
			count: responsePokemons.data.count,
			next: responsePokemons.data.next,
			previous: responsePokemons.data.previous,
			pokemons: pokemons,
		};
	} catch {
		return null;
	}
});

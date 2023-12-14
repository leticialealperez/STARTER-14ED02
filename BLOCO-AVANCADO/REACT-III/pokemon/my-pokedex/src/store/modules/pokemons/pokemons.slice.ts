import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { PokemonSummary } from '../types';
import { fetchPokemons } from './actions';

export interface PokemonList {
	count: number | null;
	next: string | null;
	previous: string | null;
	pokemons: PokemonSummary[];
	isLoading: boolean;
}

const initialState: PokemonList = {
	isLoading: false,
	count: null,
	next: null,
	previous: null,
	pokemons: [],
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchPokemons.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPokemons.fulfilled, (state, action) => {
			state.isLoading = false;

			if (!action.payload) return;

			state.count = action.payload.count;
			state.next = action.payload.next;
			state.previous = action.payload.previous;
			state.pokemons = action.payload.pokemons;
		});
		builder.addCase(fetchPokemons.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const selectPokemons = (state: RootState) => state.pokemons;
export default pokemonsSlice.reducer;

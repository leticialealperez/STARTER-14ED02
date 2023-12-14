import { combineReducers } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemons/pokemons.slice';

export const rootReducer = combineReducers({
	pokemons: pokemonsSlice,
});

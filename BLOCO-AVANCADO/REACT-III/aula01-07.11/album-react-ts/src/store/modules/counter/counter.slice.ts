import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		incrementar: (estadoAtual) => {
			estadoAtual.value += 1;
		},
		decrementar: (estadoAtual) => {
			estadoAtual.value -= 1;
		},
		incrementarPorNumero: (estadoAtual, action: PayloadAction<number>) => {
			// ??? qual numero?
			estadoAtual.value += action.payload;
		},
	},
});

export const { decrementar, incrementar, incrementarPorNumero } = counterSlice.actions;

export default counterSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counter/counter.slice';

const rootReducer = combineReducers({
	counter: counterSlice,
	// produtos: produtosSlice
	// vendas: vendasSlice
	// fornecedores: fornecedoresSlice
	// clientes: clientesSlice
	// usuarioLogado: usuarioLogadoSlice
});

export default rootReducer;

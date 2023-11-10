import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
});

export type EstadoGlobal = ReturnType<typeof store.getState>;
export type TipoDoDispatch = typeof store.dispatch;

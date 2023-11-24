import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = import.meta.env.VITE_API_URL; // no arquivo env teremos a URL da API à ser integrada
const api = axios.create({
	baseURL: URL,
});

export interface ParametroCadastrar {
	type: 'INCOME' | 'OUTCOME';
	description: string;
	value: number;
}

export type ParametroAtualizar = Partial<ParametroCadastrar> & { id: number };

// cadastrar
export const cadastrarTransacao = createAsyncThunk('cadastrar', async (dados: ParametroCadastrar) => {
	try {
		const response = await api.post('/transactions', dados);
		return response.data; // retornando todo o body
	} catch {
		return null;
	}
});

// listar
export const listarTransacoes = createAsyncThunk('listar', async () => {
	try {
		const response = await api.get('/transactions');
		return response.data.data; // retornando o .data de dentro do body
	} catch {
		return null;
	}
});

// atualizar
export const atualizarTransacao = createAsyncThunk('atualizar', async (dados: ParametroAtualizar) => {
	try {
		const { id, description, type, value } = dados;
		const response = await api.put(`/transactions/${id}`, { description, type, value });
		return response.data; // retornando todo o body
	} catch {
		return null;
	}
});

// deletar
export const deletarTransacao = createAsyncThunk('deletar', async (id: number) => {
	try {
		const response = await api.delete(`/transactions/${id}`);
		return response.data; // retornando todo o body
	} catch {
		return null;
	}
});

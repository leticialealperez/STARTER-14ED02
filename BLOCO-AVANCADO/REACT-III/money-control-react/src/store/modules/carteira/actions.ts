import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8080';

export interface ParametroCadastrar {
	type: 'INCOME' | 'OUTCOME';
	description: string;
	value: number;
}

export type ParametroAtualizar = Partial<ParametroCadastrar> & { id: number };

// cadastrar
export const cadastrarTransacao = createAsyncThunk('cadastrar', async (dados: ParametroCadastrar) => {
	try {
		const response = await axios.post(URL + '/transactions', dados);
		return response.data; // retornando todo o body
	} catch {
		return null;
	}
});

// listar
export const listarTransacoes = createAsyncThunk('listar', async () => {
	try {
		const response = await axios.get(URL + '/transactions');
		return response.data.data; // retornando o .data de dentro do body
	} catch {
		return null;
	}
});

// atualizar
export const atualizarTransacao = createAsyncThunk('atualizar', async (dados: ParametroAtualizar) => {
	try {
		const { id, description, type, value } = dados;
		const response = await axios.put(`${URL}/transactions/${id}`, { description, type, value });
		return response.data; // todo o body
	} catch {
		return null;
	}
});

// deletar
export const deletarTransacao = createAsyncThunk('deletar', async (id: number) => {
	try {
		const response = await axios.delete(`${URL}/transactions/${id}`);
		return response.data; // retornando todo o body
	} catch {
		return null;
	}
});

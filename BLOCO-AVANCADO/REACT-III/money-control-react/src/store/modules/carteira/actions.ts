import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8080';

export interface ParametroCadastrar {
	type: 'INCOME' | 'OUTCOME';
	description: string;
	value: number;
}

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

// deletar

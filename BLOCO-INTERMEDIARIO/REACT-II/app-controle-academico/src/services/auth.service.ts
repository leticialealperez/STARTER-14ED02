/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from './api.service';

interface RequestCadastrar {
	nome: string;
	email: string;
	senha: string;
	idade?: number;
}

interface RequestLogin {
	email: string;
	senha: string;
}

export async function login(dados: RequestLogin): Promise<ResponseAPI> {
	console.log(dados);
	try {
		const response = await apiService.post('/alunos/login', dados);

		return {
			ok: response.data.ok,
			mensagem: response.data.mensagem,
			dados: response.data.dados,
		};
	} catch (error: any) {
		return {
			ok: error.response.data.ok,
			mensagem: error.response.data.ok,
		};
	}
}

export async function cadastro(dados: RequestCadastrar): Promise<ResponseAPI> {
	console.log(dados);
	try {
		const response = await apiService.post('/alunos', dados);

		return {
			ok: response.data.ok,
			mensagem: response.data.mensagem,
			dados: response.data.dados,
		};
	} catch (error: any) {
		return {
			ok: error.response.data.ok,
			mensagem: error.response.data.mensagem,
		};
	}
}

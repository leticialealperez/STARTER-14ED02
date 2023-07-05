import { StatusPedido, StatusUsuario } from './types';

let nome: string = 'João';
let nome2: string;
nome2 = 'Maria';

let idade: number = 27;
let idade2: number;
idade2 = 30;

let ativo: boolean = true;
let ativo2: boolean;
ativo2 = false;

// parametro -> INPUT função
// retorno -> OUTPUT função
// void => vazio => quando a função não possui retorno

// PROCEDIMENTO - FUNÇÃO SEM RETORNO

// ROTINA/FUNÇÃO - FUNÇÃO COM RETORNO

function mostrarDado(dado: string): boolean {
	console.log(dado);

	return dado === 'teste';
}

// mostrarDado(nome);

// TIPOS PRIMITIVOS

let statusPedido: StatusPedido;
statusPedido = 'PENDENTE';
let statusUsuario: StatusUsuario = 1;

// let usuario: Usuario;
// usuario = {
// 	id: 1,
// 	email: 'teste@teste.com',
// 	senha: '123',
// };

// importar
// exportar

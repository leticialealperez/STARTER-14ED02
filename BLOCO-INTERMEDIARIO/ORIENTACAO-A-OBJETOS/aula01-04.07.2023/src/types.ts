// TIPOS ESTRUTURADOS
// objetos ou Arrays
// CHAVE/VALOR
// propriedade/valor
// indice / valor

// TYPE - alias
// INTERFACE

// OBS: modela objetos e cria tipos alias
// type Usuario = {
// 	id: number;
// 	email: string;
// 	senha: string;
// };

// | => interseção

// OBS: interface só serve para criar tipos de objetos
export interface Usuario {
	id: number;
	email: string;
	senha: string;
}

export type StatusPedido = 'APROVADO' | 'PENDENTE' | 'ENCERRADO';
export type StatusUsuario = 1 | 2;

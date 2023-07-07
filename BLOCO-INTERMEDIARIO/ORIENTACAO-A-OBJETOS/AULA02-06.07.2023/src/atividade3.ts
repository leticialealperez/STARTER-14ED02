/*
    3. Crie um programa que simule uma carteira de dinheiro. 
    Este
    programa vai precisar ter uma carteira contendo saldo, transações
    de entrada e saídas. Ou seja, será um objeto com estas
    propriedades. Depois crie uma função para lançar uma entrada e
    uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
    um erro ou avisar.
*/
// {
//     valor: 100,
//     tipo: 'saida'
// }

import { Carteira, Transacao } from './types';

const transacao: Transacao = {
	valor: 100,
	tipo: 'entrada',
};

const carteira: Carteira = {
	saldo: 100,
	transacoes: [
		// [0].tipo
		transacao,
	],
};

// carteira.transacoes.push('DBJHXDBJHS');

export function lancarTransacao(novaTransacao: Transacao) {
	// a lógica que estará aqui dentro não terá erro de tipagem

	if (novaTransacao.valor <= 0) {
		console.log('Não é aceito transações com valores negativos ou zero.');
		return;
	}

	// if (novaTransacao.tipo === 'entrada') {
	// 	carteira.transacoes.push(novaTransacao);
	// 	carteira.saldo = carteira.saldo + novaTransacao.valor;
	// } else {
	// 	// NÃO É POSSIVEL REALIZAR UMA TRANSAÇÃO SE NÃO POSSUIR SALDO SUFICIENTE
	// 	if (carteira.saldo < novaTransacao.valor) {
	// 		console.log('Não possui saldo sufiente para esta transação');
	// 		return;
	// 	}

	// 	carteira.transacoes.push(novaTransacao);
	// 	carteira.saldo = carteira.saldo - novaTransacao.valor;
	// }

	switch (novaTransacao.tipo) {
		case 'entrada':
			// faz a lógica de entrada
			carteira.saldo = carteira.saldo + novaTransacao.valor;
			break;
		case 'saida':
			// faz a lógica de saida

			// NÃO É POSSIVEL REALIZAR UMA TRANSAÇÃO SE NÃO POSSUIR SALDO SUFICIENTE
			if (carteira.saldo < novaTransacao.valor) {
				console.log('Não possui saldo sufiente para esta transação');
				return;
			}

			carteira.saldo = carteira.saldo - novaTransacao.valor;

			break;

		default:
	}

	carteira.transacoes.push(novaTransacao);

	console.log(carteira);
}

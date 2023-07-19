/*

Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

*/

type TipoTransacao = 'entrada' | 'saida';

type Transacao = {
	tipo: TipoTransacao;
	valor: number;
};

type Carteira = {
	saldo: number;
	transacoes: Array<Transacao>;
};

const carteira: Carteira = {
	saldo: 0,
	transacoes: [],
};

export function atividade3(transacao: Transacao): void {
	// se for entrada eu incremento o saldo
	if (transacao.tipo === 'entrada') {
		carteira.saldo += transacao.valor;
		carteira.transacoes.push(transacao);
	}

	// se for saida
	if (transacao.tipo === 'saida') {
		// 1º - valida se tem saldo suficiente

		if (carteira.saldo < transacao.valor) {
			// não tenho saldo
			// se não tiver, mostra o erro
			console.log('Não possui saldo suficiente');
			return;
		}

		// se tiver decrementa o saldo
		carteira.saldo -= transacao.valor;
		carteira.transacoes.push(transacao);
	}

	console.log(carteira);
}

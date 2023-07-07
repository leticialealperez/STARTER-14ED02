// DEFINA O TIPO DE DADO DO OBJETO
// interface => só modela UM OBJETO
export interface Nota {
	valor: number;
	peso: number;
}

// OBS: toda vez que precisarmos ter valores pré definidos para um propriedade ou variavel
// TYPE ALIAS É A SOLUÇÃO

type TipoTransacao = 'entrada' | 'saida';

// ELA MODELA UM OBJETO
export interface Transacao {
	valor: number;
	tipo: TipoTransacao;
}

export interface Carteira {
	saldo: number;
	transacoes: Array<Transacao>;
}

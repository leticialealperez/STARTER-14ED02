import { Base } from './Base';

// CLASSE FILHA - SUB CLASSE

export class Item extends Base {
	public valor: number;
	public nome: string;
	public descricao: string;

	constructor(valor: number, nome: string, descricao: string) {
		super(); // chama o construtor da classe pai

		// é informado no parametro
		this.valor = valor;
		this.nome = nome;
		this.descricao = descricao;
	}

	public mostrarDados(): void {
		if (this.valor > 0) {
			console.log(`${this.nome} - R$${this.valor}`);
		}
	}
}

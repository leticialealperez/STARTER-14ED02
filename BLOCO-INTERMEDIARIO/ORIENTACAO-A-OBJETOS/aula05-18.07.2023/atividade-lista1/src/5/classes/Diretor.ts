// UM DESENVOLVEDOR É UM USUARIO - tem todos os atributos e metodos de User

import { User } from './User';

export class Diretor extends User {
	constructor(
		nome: string,
		idade: number,
		private _nivelComissionamento: number,
		salario?: number
	) {
		super(nome, idade, salario); // chama o construtor da classe pai
	}

	show() {
		const dados = `Diretor(a) ${this._nome}, ${
			this._idade
		} anos, comissão nível ${this._nivelComissionamento}, salário R$ ${
			this._salario ? this._salario : 'N/A'
		}`;

		return dados;
	}
}

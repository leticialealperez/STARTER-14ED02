// UM DESENVOLVEDOR É UM USUARIO - tem todos os atributos e metodos de User

import { User } from './User';

export class Desenvolvedor extends User {
	constructor(
		nome: string,
		idade: number,
		private _ocupacao: string,
		salario?: number
	) {
		super(nome, idade, salario); // chama o construtor da classe pai
	}

	show() {
		const dados = `${this._nome}, ${this._idade} anos, ${
			this._ocupacao
		}, salário R$ ${this._salario ? this._salario : 'N/A'}`;

		return dados;
	}
}

import { randomUUID } from 'crypto';
// SUPERCLASS = CLASSE PAI

export abstract class User {
	protected _id: string;

	constructor(
		protected _nome: string,
		protected _idade: number,
		protected _salario?: number
	) {
		this._id = randomUUID();
	}

	// getters - METODOS ACESSORES
	public get id(): string {
		return this._id;
	}

	show() {
		return `${this._nome}, ${this._idade} anos, ${this._salario}`;
	}
}
